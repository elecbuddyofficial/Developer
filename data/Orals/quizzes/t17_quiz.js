window.loadQuizzes("T17_MARPOL", [
  {
    "q": "Maximum oil content in OWS effluent for overboard discharge per MARPOL Annex I?",
    "a": "15 ppm (parts per million)",
    "opts": ["5 ppm", "15 ppm (parts per million)", "30 ppm", "100 ppm"],
    "exp": "MARPOL Annex I Reg 14: machinery space bilge discharge limit = 15 ppm. OWS must reduce oil content to below 15 ppm before the 3-way solenoid valve allows overboard discharge. OCM continuously monitors and diverts back to holding tank if 15 ppm exceeded.",
    "cat": "ANNEX_I",
    "id": "T17M_001"
  },
  {
    "q": "What type of sensor does a modern Oil Content Monitor (OCM) use?",
    "a": "Infrared absorption (optical) sensor",
    "opts": ["Infrared absorption (optical) sensor", "Electrochemical cell sensor", "Catalytic pellistor sensor", "Zirconia galvanic cell"],
    "exp": "OCM uses infrared absorption - oil absorbs/scatters infrared light more than clean water. Not electrochemical (used for O2/toxic gas monitoring), not pellistor (catalytic combustion for flammable gases), not zirconia (high-temperature O2 measurement in exhaust gas). Optically based measurement is most reliable for oil in water.",
    "cat": "ANNEX_I",
    "id": "T17M_002"
  },
  {
    "q": "OWS discharge requirements under MARPOL - minimum distance from land?",
    "a": "More than 12 nautical miles from nearest land, vessel en route (proceeding underway)",
    "opts": ["More than 3 nautical miles, vessel at anchor acceptable", "More than 12 nautical miles from nearest land, vessel en route (proceeding underway)", "More than 50 nautical miles (same as tankers)", "Any distance if 15 ppm alarm is active"],
    "exp": "MARPOL Annex I: OWS discharge requires vessel en route AND >12 nm from nearest land AND outside special areas AND oil content <15 ppm confirmed by OCM. Inside 12 nm or while at anchor = zero discharge permitted regardless of reading.",
    "cat": "ANNEX_I",
    "id": "T17M_003"
  },
  {
    "q": "OWS 3-way solenoid valve fail-safe condition on total electrical blackout?",
    "a": "Defaults to recirculate - diverts all effluent back to bilge holding tank",
    "opts": ["Locks in last known position", "Opens fully to overboard discharge port by gravity", "Vents to engine room bilges to prevent OCM damage", "Defaults to recirculate - diverts all effluent back to bilge holding tank"],
    "exp": "The 3-way valve is de-energised to fail safe. If power fails or OCM detects >15 ppm: solenoid spring forces valve to recirculate position. No untreated oil can accidentally discharge overboard during blackout. This fail-safe design is mandatory under MARPOL.",
    "cat": "ANNEX_I",
    "id": "T17M_004"
  },
  {
    "q": "Maximum instantaneous discharge rate for ODME (tanker cargo slop discharge)?",
    "a": "30 litres per nautical mile",
    "opts": ["15 litres per nm", "30 litres per nautical mile", "100 litres per nm", "50 litres per nm"],
    "exp": "MARPOL Annex I Reg 34 (tankers): instantaneous rate \u226430 L/nm. This limits oil concentration per unit of ocean surface area. ODME uses optical sensor + flow meter + GPS to continuously calculate and display instantaneous rate - automatically closes valve if limit exceeded.",
    "cat": "ODME",
    "id": "T17M_005"
  },
  {
    "q": "Maximum total quantity of oil dischargeable from tanker slop tanks?",
    "a": "1/30,000 of the total quantity of the particular cargo",
    "opts": ["1/10,000 of the cargo", "1/30,000 of the total quantity of the particular cargo", "1/100,000 of the ship DWT", "Zero - all cargo residues to shore reception only"],
    "exp": "MARPOL Annex I (non-special areas): cumulative tanker discharge limit = 1/30,000 of the total cargo loaded. ODME tracks the cumulative total and closes the valve when approaching the limit. In special areas (Baltic, Black Sea, etc.) = zero discharge.",
    "cat": "ODME",
    "id": "T17M_006"
  },
  {
    "q": "Minimum distance from land for tanker cargo slop discharge via ODME?",
    "a": "More than 50 nautical miles from nearest land",
    "opts": ["More than 12 nm (same as machinery space OWS)", "More than 50 nautical miles from nearest land", "More than 200 nm", "More than 3 nm"],
    "exp": "MARPOL Annex I (tankers): >50 nm from nearest land required for cargo space discharges - much stricter than 12 nm for machinery space OWS. The 50 nm rule reflects the higher oil volumes and concentrations in tanker cargo residues.",
    "cat": "ODME",
    "id": "T17M_007"
  },
  {
    "q": "Which ships must maintain an Oil Record Book Part I?",
    "a": "All ships \u2265400 GT and all oil tankers \u2265150 GT",
    "opts": ["Only oil/chemical tankers \u226510,000 GT", "All ships \u2265400 GT and all oil tankers \u2265150 GT", "Only vessels >5,000 GT on international voyages", "Only vessels fitted with OWS"],
    "exp": "MARPOL Annex I: ORB Part I (machinery space operations) mandatory for every ship \u2265400 GT. Part II (cargo/ballast operations) mandatory for oil tankers \u2265150 GT. Part I records: OWS use, bilge transfers, sludge disposal, fuel oil transfer. Available for PSC inspection.",
    "cat": "ORB",
    "id": "T17M_008"
  },
  {
    "q": "How long must the Oil Record Book be retained onboard after the last entry?",
    "a": "3 years",
    "opts": ["1 year", "3 years", "5 years", "Until next drydock survey"],
    "exp": "MARPOL Annex I: ORB retained onboard for 3 years after final entry. Compare: Garbage Record Book = 2 years. PRF receipts = 2 years. During this period ORB must be available for inspection by any authorised officer (flag state, port state control, coastal state).",
    "cat": "ORB",
    "id": "T17M_009"
  },
  {
    "q": "Global sulphur limit for marine fuel oil outside ECAs effective January 2020?",
    "a": "0.50% m/m (the 'IMO 2020' global cap)",
    "opts": ["3.50% m/m (the old pre-2020 limit)", "0.50% m/m (the 'IMO 2020' global cap)", "0.10% m/m (ECA limit)", "1.00% m/m"],
    "exp": "IMO 2020: MARPOL Annex VI Reg 14 reduced global sulphur cap from 3.50% to 0.50% m/m from 1 January 2020. Major reduction in SOx emissions worldwide. Compliance via low-sulphur fuel or Exhaust Gas Cleaning System (EGCS/scrubber). Non-compliance = MARPOL violation.",
    "cat": "ANNEX_VI",
    "id": "T17M_010"
  },
  {
    "q": "Maximum sulphur content in ECAs (Baltic, North Sea, North America) since January 2015?",
    "a": "0.10% m/m",
    "opts": ["0.10% m/m", "0.50% m/m", "1.00% m/m", "0.05% m/m"],
    "exp": "ECA (Emission Control Area) sulphur limit: 0.10% m/m since January 2015. Ships must switch to ultra-low sulphur fuel or use scrubber before entering ECAs. Current ECAs: Baltic Sea, North Sea, North American coast, US Caribbean Sea. Announcement of new ECAs continues.",
    "cat": "ANNEX_VI",
    "id": "T17M_011"
  },
  {
    "q": "How do scrubbers (EGCS) allow compliance with SOx limits while burning high-sulphur fuel?",
    "a": "Wash exhaust with seawater or alkaline solution neutralising SO2 before emission",
    "opts": ["High-temperature catalyst converts sulphur to harmless CO2", "Inject urea to reduce sulphur into pure nitrogen (that is for NOx)", "Centrifuge fuel before combustion to extract elemental sulphur", "Wash exhaust with seawater or alkaline solution neutralising SO2 before emission"],
    "exp": "Open-loop scrubber: seawater absorbs and neutralises SO2 into sulphates (discharged back to sea after treatment). Closed-loop: chemical solution (NaOH) neutralises SO2, washwater treated and retained. Both methods reduce SO2 in exhaust to equivalent of 0.50% or 0.10% sulphur fuel.",
    "cat": "ANNEX_VI",
    "id": "T17M_012"
  },
  {
    "q": "NOx Tier III requires approximately what percentage reduction vs Tier I?",
    "a": "~80% reduction (requires SCR or dual-fuel engine)",
    "opts": ["~15% reduction (achievable via engine tuning)", "~50% reduction", "~80% reduction (requires SCR or dual-fuel engine)", "100% reduction (zero emission)"],
    "exp": "NOx tiers: Tier I (pre-2011): baseline. Tier II (2011+): ~15% reduction via internal engine optimisation. Tier III (2016+ in NOx ECAs): ~80% reduction - requires Selective Catalytic Reduction (SCR) using urea injection, or gas/dual-fuel engine. Tier III applies in North America and USCG ECAs.",
    "cat": "ANNEX_VI",
    "id": "T17M_013"
  },
  {
    "q": "Technology used to achieve NOx Tier III compliance?",
    "a": "Selective Catalytic Reduction (SCR) - injects urea into exhaust, catalyst converts NOx to N2 and water",
    "opts": ["Exhaust Gas Cleaning System (EGCS/scrubber) - that is for SOx", "Diesel Particulate Filter (DPF)", "Oily Water Separator (OWS)", "Selective Catalytic Reduction (SCR) - injects urea into exhaust, catalyst converts NOx to N2 and water"],
    "exp": "SCR: urea (AdBlue) injected into hot exhaust upstream of catalyst. Urea decomposes to ammonia (NH3) which reacts with NOx over catalyst \u2192 N2 (harmless nitrogen) + H2O. Scrubbers are for SOx only. DPF removes particulates (mainly diesel cars). OWS is for oil in bilge water.",
    "cat": "ANNEX_VI",
    "id": "T17M_014"
  },
  {
    "q": "Which CII ratings trigger mandatory Corrective Action Plan?",
    "a": "D rating for 3 consecutive years OR E rating for 1 year",
    "opts": ["C rating for 3 years or D for 1 year", "D rating for 3 consecutive years OR E rating for 1 year", "Any rating below A requires immediate corrective action", "E rating for 3 consecutive years only"],
    "exp": "CII ratings: A (significantly above) B (above) C (moderate) D (below) E (significantly below) requirement. D\u00d73 years = Corrective Action Plan required in SEEMP Part III. E\u00d71 year = Corrective Action Plan required. Must achieve C or better to avoid CAP. D\u00d71 year = advisory.",
    "cat": "SEEMP_CII",
    "id": "T17M_015"
  },
  {
    "q": "Where must CII Corrective Action Plan be documented?",
    "a": "Ship Energy Efficiency Management Plan (SEEMP) Part III",
    "opts": ["Oil Record Book Part I", "International Air Pollution Prevention (IAPP) Certificate", "Garbage Collection and Management Plan (GCMP)", "Ship Energy Efficiency Management Plan (SEEMP) Part III"],
    "exp": "SEEMP Part III is the ship-specific 3-year operational plan for CII improvement. Any corrective action (speed reduction, route optimisation, hull cleaning schedule, retrofit plans) must be documented and verified in SEEMP Part III by flag state or class society.",
    "cat": "SEEMP_CII",
    "id": "T17M_016"
  },
  {
    "q": "2024 MARPOL BDN flashpoint requirement - what must the supplier state?",
    "a": "Actual measured flashpoint if below 70\u00b0C OR confirmation it was measured at or above 70\u00b0C",
    "opts": ["Only signature guaranteeing fuel is not explosive at room temperature", "Exact flashpoint value to 3 decimal places regardless", "Statement confirming fuel cooled to 60\u00b0C before transfer", "Actual measured flashpoint if below 70\u00b0C OR confirmation it was measured at or above 70\u00b0C"],
    "exp": "2024 BDN amendment: if flashpoint <70\u00b0C, supplier must state the actual measured value. If \u226570\u00b0C, statement confirming it was at or above 70\u00b0C is sufficient. Test method: ISO 2719:2016 closed-cup only. Allows crew to know if they are receiving marginally compliant fuel. Effective May 2024.",
    "cat": "ANNEX_VI",
    "id": "T17M_017"
  },
  {
    "q": "Minimum flashpoint for standard marine oil fuel per SOLAS?",
    "a": "60\u00b0C (minimum to prevent fire risk from vapour in enclosed engine spaces)",
    "opts": ["60\u00b0C (minimum to prevent fire risk from vapour in enclosed engine spaces)", "70\u00b0C", "43\u00b0C", "100\u00b0C"],
    "exp": "SOLAS II-2: standard marine fuel flashpoint minimum 60\u00b0C. This prevents dangerous vapour accumulation in enclosed engine spaces. Exception: emergency generator fuel may be 43\u00b0C (diesel/gas oil). Main propulsion, auxiliary, and boiler fuel must be \u226560\u00b0C. Below 60\u00b0C = prohibited, refuse bunkers.",
    "cat": "ANNEX_VI",
    "id": "T17M_018"
  },
  {
    "q": "New 2026 pre-bunkering declaration requirement?",
    "a": "Supplier must provide signed declaration confirming fuel flashpoint \u226560\u00b0C before transfer begins",
    "opts": ["Complete laboratory analysis of fuel ash content", "Statement that fuel heated above 70\u00b0C to remove volatiles", "Guarantee Viscotherm calibrated for specific fuel density", "Supplier must provide signed declaration confirming fuel flashpoint \u226560\u00b0C before transfer begins"],
    "exp": "SOLAS II-2 amendment effective January 2026: pre-bunkering signed flashpoint declaration from supplier before ANY transfer. If declaration absent or flashpoint <60\u00b0C: Master and Chief Engineer must refuse bunkers. Prevents supply of dangerous off-spec low-flashpoint fuels.",
    "cat": "ANNEX_VI",
    "id": "T17M_019"
  },
  {
    "q": "Where must attained EEXI and annual CII be submitted per MARPOL Annex VI?",
    "a": "IMO Ship Fuel Oil Consumption Database (IMO DCS)",
    "opts": ["IMO DCS (Ship Fuel Oil Consumption Database)", "Global Integrated Shipping Information System (GISIS)", "Ship's internal ORB Part III", "Local PSC regional headquarters"],
    "exp": "MARPOL Annex VI Reg 27: ships \u22655,000 GT must collect and report fuel consumption data to IMO DCS annually. Updated requirements ensure both EEXI (design efficiency) and CII (operational carbon intensity rating) are recorded in the centralised IMO database for flag and port state oversight.",
    "cat": "SEEMP_CII",
    "id": "T17M_020"
  },
  {
    "q": "Under MARPOL Annex I, what is the maximum permissible oil content for machinery space bilge water discharged into the sea?",
    "a": "15 parts per million (ppm)",
    "opts": ["5 parts per million (ppm)", "30 parts per million (ppm)", "100 parts per million (ppm)", "15 parts per million (ppm)"],
    "exp": "MARPOL Annex I Regulation 14 strictly mandates that any oily mixture from machinery spaces must not exceed an oil content of 15 ppm without dilution before it can be legally discharged overboard.",
    "cat": "ANNEX_I",
    "id": "T17M_021"
  },
  {
    "q": "What is the primary sensing technology used in the Oil Content Monitor (OCM) of an Oily Water Separator?",
    "a": "Infrared absorption or light scattering (nephelometry) optical sensors",
    "opts": ["Infrared absorption or light scattering (nephelometry) optical sensors", "Electrochemical conductivity probes", "Ultrasonic density transducers", "Centrifugal mass separation sensors"],
    "exp": "The OCM shines an infrared light through the water sample. Because oil absorbs and scatters IR light differently than clean water, the sensor can mathematically convert the light reduction into a highly accurate ppm value.",
    "cat": "ANNEX_I",
    "id": "T17M_022"
  },
  {
    "q": "What is the 'Fail-Safe' position of the 3-way divert valve on an Oily Water Separator?",
    "a": "It defaults to the CLOSED (recirculation to bilge holding tank) position on loss of power or loss of air",
    "opts": ["It defaults to the CLOSED (recirculation to bilge holding tank) position on loss of power or loss of air", "It defaults to the OPEN (overboard discharge) position to prevent internal flooding", "It locks in its last known position indefinitely", "It opens to the sludge tank to dump all contents"],
    "exp": "Environmental safety is the priority. If the OWS loses power, a wire breaks, or the 15 ppm alarm trips, the spring-loaded 3-way valve instantly snaps to the recirculation position, physically blocking the pipe leading to the ocean.",
    "cat": "ANNEX_I",
    "id": "T17M_023"
  },
  {
    "q": "What is the strict geographical limitation for discharging 15 ppm treated bilge water from an OWS under normal circumstances?",
    "a": "The vessel must be more than 12 nautical miles from the nearest land and proceeding en route",
    "opts": ["The vessel must be outside of port limits", "The vessel must be more than 50 nautical miles from land", "The vessel must be more than 3 nautical miles from land", "The vessel must be more than 12 nautical miles from the nearest land and proceeding en route"],
    "exp": "Discharging inside 12 nm is strictly prohibited. The ship must also be 'proceeding en route' (actively sailing, not at anchor) to ensure the tiny amount of discharged oil is widely dispersed by the ship's wake.",
    "cat": "ANNEX_I",
    "id": "T17M_024"
  },
  {
    "q": "What is the primary consequence if an ETO fails to regularly clean the optical sensor window inside the Oil Content Monitor?",
    "a": "An oily film will coat the glass, blocking the light beam and causing a false HIGH reading, which permanently trips the valve to the bilge holding tank",
    "opts": ["The sensor will overheat and burn out the IR lamp", "The sensor will become blind and give a false LOW reading, risking illegal discharge", "An oily film will coat the glass, blocking the light beam and causing a false HIGH reading, which permanently trips the valve to the bilge holding tank", "The glass will shatter under the water pressure"],
    "exp": "Because oil blocks the light, a dirty window looks exactly like oily water to the computer. A fouled sensor will read 15+ ppm continuously, making it impossible to discharge water overboard until it is cleaned.",
    "cat": "ANNEX_I",
    "id": "T17M_025"
  },
  {
    "q": "How does the first stage of a typical marine Oily Water Separator work?",
    "a": "Gravity Separation; oily water enters a large chamber where the flow slows down, allowing lighter free oil to float to the top for collection",
    "opts": ["Chemical Separation; adding chlorine to dissolve the oil", "Magnetic Separation; using electromagnets to pull the oil out", "Gravity Separation; oily water enters a large chamber where the flow slows down, allowing lighter free oil to float to the top for collection", "Thermal Separation; boiling the water to leave the oil behind"],
    "exp": "Oil has a lower specific gravity than water. The first stage simply gives the mixture time to settle. The oil naturally rises to the top, where capacitance probes detect it and trigger an automatic oil drain valve.",
    "cat": "ANNEX_I",
    "id": "T17M_026"
  },
  {
    "q": "What is the purpose of the 'Coalescing Filter' in the second stage of an OWS?",
    "a": "To force microscopic, emulsified oil droplets to merge (coalesce) into larger drops on a physical mesh until they are buoyant enough to float away from the water",
    "opts": ["To force microscopic, emulsified oil droplets to merge (coalesce) into larger drops on a physical mesh until they are buoyant enough to float away from the water", "To chemically neutralize the oil into a solid powder", "To filter out large solid debris like rags and rust", "To add fresh water to dilute the oil below 15 ppm"],
    "exp": "Gravity separation fails on tiny, emulsified droplets. The coalescing cartridge uses oleophilic (oil-attracting) fibers. Tiny oil droplets stick to the fibers, bump into each other, and grow into large drops that break free and float up.",
    "cat": "ANNEX_I",
    "id": "T17M_027"
  },
  {
    "q": "How can an ETO physically verify that the 3-way divert valve is actually operating when the OCM alarm triggers?",
    "a": "By activating the OCM self-test or injecting a test emulsion, and visually/acoustically verifying the valve actuator moves and the flow shifts to the bilge return pipe",
    "opts": ["By measuring the resistance of the solenoid coil", "By activating the OCM self-test or injecting a test emulsion, and visually/acoustically verifying the valve actuator moves and the flow shifts to the bilge return pipe", "By looking at the green LED on the main switchboard", "By tasting the water coming out of the overboard discharge"],
    "exp": "A green light on a panel only proves the computer sent a signal. To prove MARPOL compliance, you must verify the mechanical valve actually moved and blocked the overboard pipe.",
    "cat": "ANNEX_I",
    "id": "T17M_028"
  },
  {
    "q": "If the OWS is broken and cannot be repaired during a voyage, what is the legally required action for managing machinery space bilge water?",
    "a": "All bilge water must be retained onboard in the designated bilge holding tanks, and subsequently discharged to a certified port reception facility ashore",
    "opts": ["It can be discharged overboard at night when outside 50 nm", "All bilge water must be retained onboard in the designated bilge holding tanks, and subsequently discharged to a certified port reception facility ashore", "It can be bypassed through the emergency fire pump if logged", "It must be mixed with heavy fuel oil and burned in the main engine"],
    "exp": "There is absolutely no emergency exemption for bypassing an OWS. If it is broken, you cannot pump bilges overboard. You must store the water and buy a truck/barge to take it away in the next port.",
    "cat": "ANNEX_I",
    "id": "T17M_029"
  },
  {
    "q": "Under MARPOL Annex I, which specific geographical areas are designated as 'Special Areas' requiring stricter oil discharge regulations (often zero discharge)?",
    "a": "The Baltic Sea, Black Sea, Mediterranean Sea, Red Sea, Gulfs Area, Gulf of Aden, Antarctic Area, North West European Waters, and Oman area",
    "opts": ["The Baltic Sea, Black Sea, Mediterranean Sea, Red Sea, Gulfs Area, Gulf of Aden, Antarctic Area, North West European Waters, and Oman area", "The Pacific Ocean and the Indian Ocean", "Only the polar regions (Arctic and Antarctic)", "Any waters within 200 nm of the United States"],
    "exp": "Special Areas are enclosed or semi-enclosed bodies of water where oil pollution is devastating due to low water exchange. In these areas, discharging anything but perfectly treated 15 ppm water (and sometimes zero discharge) is heavily enforced.",
    "cat": "ANNEX_I",
    "id": "T17M_030"
  },
  {
    "q": "What is SOPEP?",
    "a": "Shipboard Oil Pollution Emergency Plan; a mandatory document detailing the exact procedures, contacts, and equipment to be used in the event of an oil spill",
    "opts": ["Standard Operating Procedure for Engine Protection", "Shipboard Oil Pollution Emergency Plan; a mandatory document detailing the exact procedures, contacts, and equipment to be used in the event of an oil spill", "System of Oil Purification and Emulsion Processing", "Safe Oil Pumping and Environmental Protocol"],
    "exp": "Required under Annex I Regulation 37. It is the ship's absolute master guide for what to do if a pipe bursts and oil goes overboard: who to call, how to contain it, and what cleanup gear is in the locker.",
    "cat": "ANNEX_I",
    "id": "T17M_031"
  },
  {
    "q": "Which ships are mandated to carry a SOPEP manual and equipment?",
    "a": "All oil tankers of 150 GT and above, and all other ships of 400 GT and above",
    "opts": ["Only passenger ships and chemical tankers", "All ships, regardless of size or type", "Only oil tankers over 10,000 GT", "All oil tankers of 150 GT and above, and all other ships of 400 GT and above"],
    "exp": "Due to their massive oil cargo, tankers have a much lower threshold (150 GT). Standard cargo ships have enough heavy fuel oil in their bunkers at 400 GT to cause a major disaster, making the plan mandatory.",
    "cat": "ANNEX_I",
    "id": "T17M_032"
  },
  {
    "q": "What is the functional difference between SOPEP and SMPEP?",
    "a": "SOPEP covers only Oil spills; SMPEP (Shipboard Marine Pollution Emergency Plan) covers both Oil AND Noxious Liquid Substances (chemicals) and is required on chemical tankers",
    "opts": ["SOPEP is an IMO code; SMPEP is an ILO code", "SOPEP is for the engine room; SMPEP is for the deck", "There is no difference; they are interchangeable terms", "SOPEP covers only Oil spills; SMPEP (Shipboard Marine Pollution Emergency Plan) covers both Oil AND Noxious Liquid Substances (chemicals) and is required on chemical tankers"],
    "exp": "SMPEP (Annex II requirement) is essentially a superset of SOPEP. If a ship carries hazardous chemicals in bulk, it must have procedures for handling chemical spills as well as oil spills.",
    "cat": "ANNEX_I",
    "id": "T17M_033"
  },
  {
    "q": "What items are typically found in a ship's SOPEP locker?",
    "a": "Oil absorbent pads/booms, sawdust/granules, non-sparking scoops, heavy-duty disposal bags, protective suits, gloves, and a portable wilden/pneumatic pump",
    "opts": ["High-expansion foam generators and CO2 cylinders", "Welding equipment and steel patching plates", "Oil absorbent pads/booms, sawdust/granules, non-sparking scoops, heavy-duty disposal bags, protective suits, gloves, and a portable wilden/pneumatic pump", "Spare parts for the main engine and purifiers"],
    "exp": "The SOPEP locker contains pure cleanup gear. Absorbents soak up the oil on deck before it reaches the scuppers. Non-sparking shovels prevent accidental ignition while scooping up oil-soaked sand.",
    "cat": "ANNEX_I",
    "id": "T17M_034"
  },
  {
    "q": "What is the 'Bilge Injection Valve' and when is it legally permitted to be opened?",
    "a": "It connects the main seawater cooling pump to the bilge; it is ONLY permitted to be opened during life-threatening emergency flooding to save the ship, completely bypassing the OWS",
    "opts": ["It connects the main seawater cooling pump to the bilge; it is ONLY permitted to be opened during life-threatening emergency flooding to save the ship, completely bypassing the OWS", "It is an automated valve that drains the sludge tank", "It is a valve used to routinely clean the bilges into the OWS", "It is a sampling valve used by Port State Control"],
    "exp": "Because it dumps oily bilge water straight into the ocean at 500+ tons per hour, opening it is a massive MARPOL violation unless the ship is actively sinking. It is usually secured with a breakaway wire seal.",
    "cat": "ANNEX_I",
    "id": "T17M_035"
  },
  {
    "q": "If the 15 ppm alarm is active but clean water is flowing through the OCM, what is the ETO's correct first troubleshooting step?",
    "a": "Isolate the OCM, open the glass cell, and clean the optical windows with an approved solvent and a soft lint-free cloth to remove invisible oil films",
    "opts": ["Isolate the OCM, open the glass cell, and clean the optical windows with an approved solvent and a soft lint-free cloth to remove invisible oil films", "Recalibrate the zero point instantly", "Bypass the alarm in the software to allow pumping", "Replace the 3-way solenoid valve"],
    "exp": "90% of OCM faults are simply dirty glass. A microscopic layer of oil stuck to the glass will absorb infrared light, making the computer think the water itself is heavily polluted.",
    "cat": "ANNEX_I",
    "id": "T17M_036"
  },
  {
    "q": "What is the requirement for the sample point location feeding the Oil Content Monitor?",
    "a": "It must be installed on the vertical section of the final discharge pipe, as close to the OWS outlet as possible, to ensure a representative, fully mixed sample",
    "opts": ["It must be installed on the vertical section of the final discharge pipe, as close to the OWS outlet as possible, to ensure a representative, fully mixed sample", "It must be installed after the 3-way divert valve", "It must be installed in the primary gravity separation chamber", "It must be installed at the very bottom of the holding tank"],
    "exp": "Taking the sample from a horizontal pipe might result in sucking only clean water from the bottom of the pipe while oil floats on top. A vertical pipe guarantees the oil and water are completely mixed for an accurate reading.",
    "cat": "ANNEX_I",
    "id": "T17M_037"
  },
  {
    "q": "What does MARPOL Annex I say about the physical piping of the OWS overboard discharge?",
    "a": "The overboard discharge piping must not have any unauthorized bypasses or hidden connections that would allow oily water to be pumped directly overboard without passing through the OWS and OCM",
    "opts": ["The piping must be connected to the sewage treatment plant", "The piping must be made of clear plastic so the water can be seen", "The piping must discharge above the ship's waterline", "The overboard discharge piping must not have any unauthorized bypasses or hidden connections that would allow oily water to be pumped directly overboard without passing through the OWS and OCM"],
    "exp": "The 'Magic Pipe' is the most infamous MARPOL violation. Any pipe, hose, or flange intentionally installed to route bilge water around the OWS directly into the sea is a criminal offense resulting in prison time for the Chief Engineer.",
    "cat": "ANNEX_I",
    "id": "T17M_038"
  },
  {
    "q": "How often is the OCM (15 ppm alarm) required to be formally calibrated?",
    "a": "According to the manufacturer's instructions, but strictly no less than every 5 years (many require annual calibration by a certified shore technician)",
    "opts": ["It is factory-sealed and never requires calibration", "Every time the bilge pump is started", "According to the manufacturer's instructions, but strictly no less than every 5 years (many require annual calibration by a certified shore technician)", "Every 5 years during drydock only"],
    "exp": "An uncalibrated OCM cannot be trusted. PSC inspectors will demand the calibration certificate. If it is expired, the OWS is deemed non-compliant and the ship may be detained.",
    "cat": "ANNEX_I",
    "id": "T17M_039"
  },
  {
    "q": "What happens during the OCM 'Zero Calibration'?",
    "a": "Pure, oil-free distilled water is flushed through the clean sensing cell, and the electronics are adjusted so the display reads exactly 0 ppm",
    "opts": ["A 15 ppm test fluid is injected to check the alarm", "Pure, oil-free distilled water is flushed through the clean sensing cell, and the electronics are adjusted so the display reads exactly 0 ppm", "The sensor is removed and left in the open air to read 0 ppm", "The 3-way valve is forced into the closed position"],
    "exp": "Zeroing provides the baseline. You must use incredibly pure water to prove to the computer what 'perfectly clean' looks like before you can trust its higher readings.",
    "cat": "ANNEX_I",
    "id": "T17M_040"
  },
  {
    "q": "How is a 'Span Calibration' performed on an OCM?",
    "a": "A certified reference solution containing exactly 15 ppm (or another known concentration) of oil is injected, and the span/gain is adjusted until the meter matches the certified value",
    "opts": ["A certified reference solution containing exactly 15 ppm (or another known concentration) of oil is injected, and the span/gain is adjusted until the meter matches the certified value", "The pump is run at maximum capacity to check flow limits", "The internal memory of the OCM is wiped clean", "The sensor is bypassed using a digital simulator"],
    "exp": "Span calibration sets the sensitivity slope. Pushing a known 15 ppm chemical mix through the sensor guarantees that when the real bilge water hits 15 ppm, the alarm will actually fire.",
    "cat": "ANNEX_I",
    "id": "T17M_041"
  },
  {
    "q": "What defines the 'Sludge' generated in the engine room, and how must it be handled under Annex I?",
    "a": "Thick, highly concentrated oil waste from fuel purifiers and tank settling; it CANNOT be pumped through the OWS and must be retained for shore disposal or burned in an approved onboard incinerator",
    "opts": ["Clean water mixed with minor oil drips; it is pumped through the OWS", "Thick, highly concentrated oil waste from fuel purifiers and tank settling; it CANNOT be pumped through the OWS and must be retained for shore disposal or burned in an approved onboard incinerator", "Solid metallic waste from engine wear; disposed of as garbage", "Chemicals used for cleaning; dumped directly overboard"],
    "exp": "An OWS is designed for water that has a tiny bit of oil in it (bilge water). Sludge is almost pure oil. Feeding sludge into an OWS will instantly destroy the coalescing filters and trigger a 15 ppm trip.",
    "cat": "ANNEX_I",
    "id": "T17M_042"
  },
  {
    "q": "Why is the use of chemical emulsifiers (degreasers or soaps) in the engine room bilges highly problematic for OWS operation?",
    "a": "Soaps chemically bond oil to water, creating microscopic emulsions that the gravity and coalescing filters cannot physically separate, resulting in continuous 15 ppm alarms",
    "opts": ["Soaps interfere with the 24V power supply to the sensors", "Soaps chemically bond oil to water, creating microscopic emulsions that the gravity and coalescing filters cannot physically separate, resulting in continuous 15 ppm alarms", "Soaps dissolve the plastic piping of the OWS", "Soaps cause the water to freeze inside the separator"],
    "exp": "If engineers use heavy detergents to wash the engine room deck, that soapy water goes to the bilge. The soap actively prevents the oil from floating to the surface. The OWS cannot separate it, and the ship loses its ability to pump bilges.",
    "cat": "ANNEX_I",
    "id": "T17M_043"
  },
  {
    "q": "What is the purpose of the 'Fresh Water Flush' cycle on an OCM?",
    "a": "To flush clean water through the optical sensing cell periodically or upon shutdown, washing away oil residues and preventing permanent fouling of the glass windows",
    "opts": ["To dilute the bilge water to exactly 14 ppm before discharging", "To test the capacity of the ship's fresh water generator", "To cool the infrared lamp to prevent it from burning out", "To flush clean water through the optical sensing cell periodically or upon shutdown, washing away oil residues and preventing permanent fouling of the glass windows"],
    "exp": "Leaving dirty, oily water sitting in the sensor glass while the OWS is turned off will stain the glass permanently. The automatic fresh water flush ensures the sensor rests in a clean state.",
    "cat": "ANNEX_I",
    "id": "T17M_044"
  },
  {
    "q": "Can the 15 ppm OCM alarm be legally bypassed or overridden during normal operations?",
    "a": "NO. It is strictly prohibited. Bypassing the OCM to force the 3-way valve open is a deliberate MARPOL violation and a criminal offense",
    "opts": ["Yes, provided the vessel is more than 50 nm from land", "NO. It is strictly prohibited. Bypassing the OCM to force the 3-way valve open is a deliberate MARPOL violation and a criminal offense", "Yes, if the vessel is in a severe storm and needs to empty bilges", "Yes, but only if the Chief Engineer authorizes it in writing"],
    "exp": "The OCM is the ultimate environmental safeguard. Any physical modification, software hack, or taped-open valve designed to defeat the 15 ppm limit will result in immediate detention and massive fines.",
    "cat": "ANNEX_I",
    "id": "T17M_045"
  },
  {
    "q": "What role does the ETO play in maintaining the OWS system?",
    "a": "Routine testing of the 15 ppm alarm and 3-way divert valve, cleaning the OCM optical cell, assisting with annual sensor calibration, and ensuring the control panel wiring is intact and unmodified",
    "opts": ["Opening the separator tank and manually scooping out the sludge", "Replacing the main bilge pump impellers", "Routine testing of the 15 ppm alarm and 3-way divert valve, cleaning the OCM optical cell, assisting with annual sensor calibration, and ensuring the control panel wiring is intact and unmodified", "Signing the Oil Record Book for all daily discharges"],
    "exp": "While the mechanical engineers handle the filters and pumps, the ETO is responsible for the 'brain' of the system. The ETO ensures the optics are clean, the calibration is valid, and the solenoid valves fire correctly.",
    "cat": "ANNEX_I",
    "id": "T17M_046"
  },
  {
    "q": "What does it mean if an OWS is certified to IMO Resolution MEPC.107(49)?",
    "a": "It means the OWS and OCM have passed rigorous modern testing standards, specifically proving they can successfully separate and detect heavy fuel oil and complex chemical emulsions, not just pure diesel",
    "opts": ["It means the OWS is only rated for passenger ships", "It means the OWS requires no electrical power to operate", "It allows the OWS to discharge at 30 ppm in special areas", "It means the OWS and OCM have passed rigorous modern testing standards, specifically proving they can successfully separate and detect heavy fuel oil and complex chemical emulsions, not just pure diesel"],
    "exp": "Older OWS units (MEPC.60(33)) worked fine on pure water and diesel. But modern engine rooms use heavy oils and synthetic detergents that create tough emulsions. MEPC.107(49) units use advanced coalescers to beat these emulsions.",
    "cat": "ANNEX_I",
    "id": "T17M_047"
  },
  {
    "q": "What internal record-keeping function is built into modern MEPC.107(49) Oil Content Monitors?",
    "a": "They must have an internal, unalterable digital memory (data logger) that records the date, time, and alarm status of the OCM for at least 18 months, which can be reviewed by PSC",
    "opts": ["They must print a paper ticket every 5 minutes", "They take a digital photograph of the operator", "They transmit real-time data to the IMO headquarters via satellite", "They must have an internal, unalterable digital memory (data logger) that records the date, time, and alarm status of the OCM for at least 18 months, which can be reviewed by PSC"],
    "exp": "To prevent falsification of the Oil Record Book, the OCM itself acts like a black box. If the Chief Engineer's logbook says the OWS wasn't used on Tuesday, but the OCM's hard drive says it ran for 4 hours and alarmed, the ship is caught in a lie.",
    "cat": "ANNEX_I",
    "id": "T17M_048"
  },
  {
    "q": "If a ship's OWS capacity is rated at 1.0 m3/hr, but the bilge pump feeding it operates at 5.0 m3/hr, what is the problem?",
    "a": "The OWS will be completely overwhelmed; the fast flow will destroy the gravity separation process, emulsify the oil, and guarantee a continuous 15 ppm alarm",
    "opts": ["The system will simply work 5 times faster", "The water will be purified to 0 ppm due to high pressure", "The 3-way valve will automatically reduce the pump speed", "The OWS will be completely overwhelmed; the fast flow will destroy the gravity separation process, emulsify the oil, and guarantee a continuous 15 ppm alarm"],
    "exp": "An OWS relies on SLOW, calm water to allow oil to float. You cannot use a massive fire pump to feed a tiny separator. The pump must be perfectly matched to the manufacturer's rated capacity of the OWS tank.",
    "cat": "ANNEX_I",
    "id": "T17M_049"
  },
  {
    "q": "What is the function of the Oil Sensing Probes (Capacitance Probes) inside the primary OWS separation tank?",
    "a": "They detect the thickening layer of separated oil floating at the top of the tank and trigger a solenoid valve to drain this pure oil into the sludge tank",
    "opts": ["They measure the temperature of the water to engage the heater", "They detect the thickening layer of separated oil floating at the top of the tank and trigger a solenoid valve to drain this pure oil into the sludge tank", "They measure the 15 ppm limit before the water exits", "They sense if the tank is completely empty to stop the pump"],
    "exp": "As the OWS works, pure oil builds up at the top of the dome. If it isn't removed, it will eventually get sucked down into the clean water outlet. The capacitance probes detect the oil/water interface and automatically bleed the oil away.",
    "cat": "ANNEX_I",
    "id": "T17M_050"
  },
  {
    "q": "Which ships are required to carry and maintain an Oil Record Book (ORB) Part I (Machinery Space Operations)?",
    "a": "All oil tankers of 150 GT and above, and all other ships of 400 GT and above",
    "opts": ["All oil tankers of 150 GT and above, and all other ships of 400 GT and above", "Only oil tankers", "Only passenger ships", "All ships of 100 GT and above"],
    "exp": "This matches the threshold for most MARPOL Annex I requirements. Any commercial cargo ship large enough to have significant engine bilges and fuel tanks must legally log its oil handling.",
    "cat": "ORB",
    "id": "T17M_051"
  },
  {
    "q": "What is the specific purpose of the Oil Record Book Part II?",
    "a": "It is exclusively for Oil Tankers to record Cargo and Ballast operations (e.g., loading/unloading cargo oil, tank washing, ODME discharges)",
    "opts": ["It is used to record the bunkering of fresh water", "It is a duplicate copy of Part I kept on the bridge", "It records the disposal of garbage and plastics", "It is exclusively for Oil Tankers to record Cargo and Ballast operations (e.g., loading/unloading cargo oil, tank washing, ODME discharges)"],
    "exp": "Part I tracks the engine room (fuel and bilges). Part II tracks the massive commercial oil payload on tankers. A container ship only has Part I. A VLCC tanker has both Part I and Part II.",
    "cat": "ORB",
    "id": "T17M_052"
  },
  {
    "q": "Who is legally required to sign each completed operation ENTRY in the Oil Record Book?",
    "a": "The Officer or Officers in charge of the specific operation (e.g., the Duty Engineer who ran the OWS)",
    "opts": ["The Officer or Officers in charge of the specific operation (e.g., the Duty Engineer who ran the OWS)", "Only the Master of the ship", "The Chief Engineer only", "The Port State Control inspector"],
    "exp": "If the 3rd Engineer pumps the bilge, the 3rd Engineer must sign their name next to that specific line item, taking personal legal responsibility for that exact operation.",
    "cat": "ORB",
    "id": "T17M_053"
  },
  {
    "q": "Who is legally required to sign each completed PAGE of the Oil Record Book?",
    "a": "The Master of the ship",
    "opts": ["The Master of the ship", "The ETO", "The Designated Person Ashore (DPA)", "The Chief Engineer"],
    "exp": "While individual engineers sign for their specific tasks, the Master bears the ultimate statutory responsibility for the entire ship's compliance, and must sign the bottom of every completed page to verify oversight.",
    "cat": "ORB",
    "id": "T17M_054"
  },
  {
    "q": "How long must the Oil Record Book be preserved onboard the ship after the final entry is made?",
    "a": "It must be retained onboard for a period of 3 years and be readily available for inspection at all reasonable times",
    "opts": ["It must be mailed to the flag state immediately upon completion", "It must be retained onboard for a period of 3 years and be readily available for inspection at all reasonable times", "5 years", "1 year"],
    "exp": "PSC and environmental investigators can audit a ship's history long after an event. Keeping the books for 3 years ensures a comprehensive, unbroken chain of evidence regarding the ship's pollution management.",
    "cat": "ORB",
    "id": "T17M_055"
  },
  {
    "q": "Which of the following operations MUST be recorded in the ORB Part I?",
    "a": "Bunkering fuel/lube oil, discharging bilge water via OWS, transferring bilge/sludge between tanks, and incinerating sludge",
    "opts": ["Washing the deck with seawater", "Changing the main engine fuel injectors", "Bunkering fuel/lube oil, discharging bilge water via OWS, transferring bilge/sludge between tanks, and incinerating sludge", "Discharging treated sewage"],
    "exp": "Any movement, disposal, or intake of oil or oily water in the machinery spaces must be tracked. If 5 tons of sludge disappears from a tank, the ORB must explain exactly how (e.g., burned in incinerator or pumped to a shore truck).",
    "cat": "ORB",
    "id": "T17M_056"
  },
  {
    "q": "If the Oily Water Separator (OWS) suffers a critical failure and breaks down, what must be done regarding the ORB?",
    "a": "The exact time and nature of the failure must be formally recorded in the ORB as an exceptional event",
    "opts": ["A new ORB must be started", "The ORB should be hidden until the OWS is fixed", "The exact time and nature of the failure must be formally recorded in the ORB as an exceptional event", "The failure is recorded only in the electrical maintenance log"],
    "exp": "Honesty is mandatory. If PSC boards the ship, sees a broken OWS, but the ORB doesn't declare it broken, they assume the crew is hiding illegal discharges. Logging the failure protects the crew.",
    "cat": "ORB",
    "id": "T17M_057"
  },
  {
    "q": "When recording an OWS overboard discharge in the ORB, what critical navigational data must be included?",
    "a": "The ship's exact Latitude and Longitude at the start of the discharge, and the exact Latitude and Longitude at the stop of the discharge",
    "opts": ["The depth of the water under the keel", "The ship's exact Latitude and Longitude at the start of the discharge, and the exact Latitude and Longitude at the stop of the discharge", "The distance to the nearest port", "The name of the officer on the bridge"],
    "exp": "This proves to the authorities that the discharge occurred legally (e.g., while the ship was actively sailing and outside the 12 nautical mile boundary).",
    "cat": "ORB",
    "id": "T17M_058"
  },
  {
    "q": "If a genuine mistake is made while writing in the paper Oil Record Book, how MUST it be corrected?",
    "a": "A single line should be struck through the error so it remains readable, and the correction written clearly next to it, accompanied by the officer's signature/initials",
    "opts": ["Tear the page out and start again", "Use correction fluid (white-out) to hide the mistake", "Scribble over the mistake until it is completely unreadable", "A single line should be struck through the error so it remains readable, and the correction written clearly next to it, accompanied by the officer's signature/initials"],
    "exp": "The ORB is a legal, statutory document used in international courts. Using white-out or hiding entries looks like intentional falsification (hiding illegal pumping). Transparent, single-line corrections prove it was an honest typo.",
    "cat": "ORB",
    "id": "T17M_059"
  },
  {
    "q": "What is the consequence of falsifying entries in the Oil Record Book (e.g., logging that sludge was incinerated when it was actually dumped overboard)?",
    "a": "It is a severe criminal offense leading to vessel detention, multi-million dollar fines for the company, and potential prison sentences for the Chief Engineer and Master",
    "opts": ["It is a minor non-conformity requiring a warning letter", "The flag state simply rewrites the book for the ship", "It results in a small fine deducted from the ship's budget", "It is a severe criminal offense leading to vessel detention, multi-million dollar fines for the company, and potential prison sentences for the Chief Engineer and Master"],
    "exp": "The US Coast Guard and other authorities aggressively prosecute 'Magic Pipe' cases. The crime that usually puts engineers in prison isn't just the pollution; it's the act of lying to federal investigators in the official ORB.",
    "cat": "ORB",
    "id": "T17M_060"
  },
  {
    "q": "What language requirements apply to the Oil Record Book?",
    "a": "It must be written in the working language of the crew, and for ships with an IOPP certificate, it must also include English, French, or Spanish",
    "opts": ["It must be written strictly in Latin", "It must be written only in the language of the Flag State", "It can be written in any language as long as photos are provided", "It must be written in the working language of the crew, and for ships with an IOPP certificate, it must also include English, French, or Spanish"],
    "exp": "Because the ORB will be inspected by Port State Control officers anywhere in the world, the entries must be understandable internationally. The standard pre-printed codes and English text facilitate this.",
    "cat": "ORB",
    "id": "T17M_061"
  },
  {
    "q": "Are Electronic Oil Record Books (e-ORB) permitted under MARPOL?",
    "a": "Yes, provided the electronic system is formally approved by the Flag State Administration and meets strict security, unalterability, and backup standards",
    "opts": ["No, only physical paper books are legally binding", "Yes, provided the electronic system is formally approved by the Flag State Administration and meets strict security, unalterability, and backup standards", "Yes, any standard Excel spreadsheet can be used", "No, because electronic records cannot be signed by the Master"],
    "exp": "Modern ships are transitioning to e-ORBs. These systems cryptographically lock entries to prevent tampering, track exactly who logged in, and automatically backup to the shore office, ensuring supreme data integrity.",
    "cat": "ORB",
    "id": "T17M_062"
  },
  {
    "q": "When bunkering (taking on fuel oil), what must be recorded in the ORB Part I?",
    "a": "The date, port of bunkering, type of fuel, and the exact quantity of fuel bunkered (in tonnes or cubic meters)",
    "opts": ["The name of the truck driver delivering the fuel", "The electrical load of the ship during bunkering", "The exact temperature of the fuel during the entire voyage", "The date, port of bunkering, type of fuel, and the exact quantity of fuel bunkered (in tonnes or cubic meters)"],
    "exp": "Bunkering is the starting point of the oil cycle on the ship. The ORB tracks how much oil came onboard, so authorities can track where all of it eventually went (burned, sludge, or spilled).",
    "cat": "ORB",
    "id": "T17M_063"
  },
  {
    "q": "If the ship accidentally discharges oil into the sea due to a ruptured pipe or collision, must it be logged in the ORB?",
    "a": "Yes, under the 'Accidental or other exceptional discharges of oil' section, detailing the time, position, approximate quantity, and reasons for the discharge",
    "opts": ["No, accidents are logged only in the deck logbook", "No, the ORB is strictly for routine operations", "Yes, under the 'Accidental or other exceptional discharges of oil' section, detailing the time, position, approximate quantity, and reasons for the discharge", "Yes, but the entry can be delayed until the ship reaches port"],
    "exp": "The ORB must be a complete accounting. Covering up an accidental spill by omitting it from the ORB turns an accident into an intentional cover-up crime.",
    "cat": "ORB",
    "id": "T17M_064"
  },
  {
    "q": "What is the relationship between the IOPP (International Oil Pollution Prevention) Certificate and the ORB?",
    "a": "The IOPP Certificate contains a 'Supplement' detailing the exact capacities of the ship's sludge and bilge tanks; the ORB entries must mathematically align with these certified tank capacities",
    "opts": ["The IOPP certificate dictates who signs the ORB", "The IOPP Certificate contains a 'Supplement' detailing the exact capacities of the ship's sludge and bilge tanks; the ORB entries must mathematically align with these certified tank capacities", "The ORB is used to apply for the IOPP certificate every voyage", "There is no relationship between them"],
    "exp": "If the IOPP certificate says the sludge tank holds 10 cubic meters, and the ORB claims the crew transferred 15 cubic meters of sludge into it yesterday, the PSC inspector instantly knows the records are falsified.",
    "cat": "ORB",
    "id": "T17M_065"
  },
  {
    "q": "How does the ETO assist the Chief Engineer regarding the Oil Record Book?",
    "a": "By ensuring the digital data loggers on the OCM and incinerator are perfectly calibrated, synchronized with ship's time, and providing accurate data that matches the manual ORB entries",
    "opts": ["By carrying the ORB during fire drills", "By signing the Master's signature if the Master is busy", "By rewriting the ORB neatly at the end of the month", "By ensuring the digital data loggers on the OCM and incinerator are perfectly calibrated, synchronized with ship's time, and providing accurate data that matches the manual ORB entries"],
    "exp": "The ETO ensures the hardware (the 15ppm data logger) doesn't contradict the paperwork. If the OCM clock is set to the wrong timezone, its printout won't match the Chief Engineer's ORB entry, raising suspicion during an audit.",
    "cat": "ORB",
    "id": "T17M_066"
  },
  {
    "q": "What is the correct ORB entry when sludge is given to a port reception facility (a shore truck or barge)?",
    "a": "The date, port name, quantity transferred, identity of the receiving truck/barge, and a receipt from the receiver must be kept onboard",
    "opts": ["The date, port name, quantity transferred, identity of the receiving truck/barge, and a receipt from the receiver must be kept onboard", "Only the date and the amount paid to the truck driver", "The ship's coordinates and the weather conditions", "The remaining balance of the ship's budget"],
    "exp": "You can't just claim you gave 5 tons of sludge to a truck. You must log it, and you must have the physical signed receipt (Bunker Delivery Note or Waste Receipt) from the shore facility to prove it actually happened.",
    "cat": "ORB",
    "id": "T17M_067"
  },
  {
    "q": "Why is the manual sounding of the sludge tank recorded weekly in the ORB Part I?",
    "a": "To provide a continuous baseline of how much waste oil is generated and stored onboard, proving it is not being secretly dumped at sea between ports",
    "opts": ["To calibrate the ship's electronic level sensors", "To ensure the tank does not overflow and crush the hull", "To provide a continuous baseline of how much waste oil is generated and stored onboard, proving it is not being secretly dumped at sea between ports", "To calculate the ship's fuel efficiency"],
    "exp": "Engines naturally generate sludge (usually 1-2% of fuel consumed). If the weekly soundings show the sludge tank is always mysteriously empty, but there are no records of incineration or shore disposal, PSC knows the ship is using a magic pipe.",
    "cat": "ORB",
    "id": "T17M_068"
  },
  {
    "q": "If a ship's OWS 15 ppm alarm is tested using a test sample, should this be recorded in the ORB?",
    "a": "No, routine testing of alarms without pumping actual bilge water overboard is typically logged in the PMS or Engine Room Log, not the ORB, which strictly tracks fluid movement",
    "opts": ["No, routine testing of alarms without pumping actual bilge water overboard is typically logged in the PMS or Engine Room Log, not the ORB, which strictly tracks fluid movement", "Yes, every push of a button on the OWS must be in the ORB", "Yes, but only if the test fails", "No, testing is completely undocumented"],
    "exp": "The ORB tracks the physical accounting of oil and water quantities. Maintenance and alarm testing belong in the electrical logbook or Planned Maintenance System, unless actual fluid was transferred as part of the test.",
    "cat": "ORB",
    "id": "T17M_069"
  },
  {
    "q": "What code letters are used in the ORB to structure the entries?",
    "a": "Alphabetical codes (e.g., A, B, C, D) corresponding to specific operations like bunkering, discharging bilges, or transferring sludge, ensuring standardized international formatting",
    "opts": ["Binary codes (01, 10)", "Numeric codes based on the volume discharged", "Alphabetical codes (e.g., A, B, C, D) corresponding to specific operations like bunkering, discharging bilges, or transferring sludge, ensuring standardized international formatting", "Color codes based on the type of oil"],
    "exp": "The front of the ORB has an index. Code 'D' means discharging bilge water. By writing 'D', followed by standard numbered lines (13: quantity, 14: time start, 15: time stop), an inspector who doesn't speak English can still perfectly read the log.",
    "cat": "ORB",
    "id": "T17M_070"
  },
  {
    "q": "When logging an incineration of sludge in the ORB, what data is required?",
    "a": "The tank the sludge was taken from, the exact quantity burned, and the duration of the incineration operation (start and stop times)",
    "opts": ["The tank the sludge was taken from, the exact quantity burned, and the duration of the incineration operation (start and stop times)", "The name of the manufacturer of the incinerator", "The temperature of the incinerator flames", "The amount of ash produced"],
    "exp": "This proves the operation was realistic. If the log claims 10 tons of sludge was burned in 1 hour, but the incinerator's maximum capacity is 50 liters per hour, the log is obviously falsified.",
    "cat": "ORB",
    "id": "T17M_071"
  },
  {
    "q": "Is the Master required to verify the technical accuracy of the engineering entries before signing the ORB page?",
    "a": "The Master verifies that the book is being properly maintained according to regulations, though they rely on the Chief Engineer's signature for the strict technical accuracy of the volumes",
    "opts": ["The Master bears zero responsibility for the engine room", "The Master must personally measure the tanks before signing", "The Master verifies that the book is being properly maintained according to regulations, though they rely on the Chief Engineer's signature for the strict technical accuracy of the volumes", "The Master only signs pages related to bunkering"],
    "exp": "The Master is signing to confirm the administrative oversight of the ship is intact. They ensure the book is neat, timely, and signed by officers, taking legal command responsibility for the ship's overall environmental compliance.",
    "cat": "ORB",
    "id": "T17M_072"
  },
  {
    "q": "If the ship is operating in a MARPOL 'Special Area', how do the ORB entries change?",
    "a": "The format remains the same, but the entries will reflect that no overboard discharges occurred (or strict limits were met), proving compliance with the zero-discharge rules of the area",
    "opts": ["No entries are allowed while in a Special Area", "A different colored pen must be used", "The ORB is handed over to the local coast guard", "The format remains the same, but the entries will reflect that no overboard discharges occurred (or strict limits were met), proving compliance with the zero-discharge rules of the area"],
    "exp": "The book itself doesn't change, but what you write in it does. A PSC inspector in the Baltic Sea will look at your ORB to ensure absolutely zero Code D (overboard) entries were logged while you were inside the Baltic zone.",
    "cat": "ORB",
    "id": "T17M_073"
  },
  {
    "q": "What is the rule regarding the timeline for making entries in the ORB?",
    "a": "Entries must be recorded promptly after the completion of the operation; delaying entries leads to inaccuracies and is heavily penalized by PSC",
    "opts": ["Entries can be compiled at the end of every month", "Entries must be written before the operation begins", "Entries must be recorded promptly after the completion of the operation; delaying entries leads to inaccuracies and is heavily penalized by PSC", "Entries are only required before arriving in a US port"],
    "exp": "Memory fades. The operation must be written down as soon as the pump is turned off. Finding a rough notebook with pencil scribbles waiting to be 'copied' into the official ORB later is a massive red flag for falsification.",
    "cat": "ORB",
    "id": "T17M_074"
  },
  {
    "q": "Can the ORB be removed from the ship by Port State Control or environmental authorities?",
    "a": "Yes, competent authorities can request a copy of any entry, and in the event of an investigation, they have the legal authority to seize the physical book as evidence",
    "opts": ["Only the flag state can touch the book", "Yes, but only if the Captain gives written permission", "Yes, competent authorities can request a copy of any entry, and in the event of an investigation, they have the legal authority to seize the physical book as evidence", "No, it is the private property of the shipping company"],
    "exp": "The ORB is a statutory document. If authorities suspect a magic pipe, they will board the ship, copy or confiscate the ORB immediately to prevent tampering, and use it against the crew in court.",
    "cat": "ORB",
    "id": "T17M_075"
  },
  {
    "q": "If dirty ballast water (e.g., from a fuel tank temporarily used for ballast) is discharged, where is it recorded?",
    "a": "In the Oil Record Book Part I, as it relates to machinery space / fuel tank operations",
    "opts": ["In the Garbage Record Book", "In the Deck Logbook only", "In the ORB Part II", "In the Oil Record Book Part I, as it relates to machinery space / fuel tank operations"],
    "exp": "Though rarely done on modern ships, if you put water into an empty fuel tank for stability, that water is now oily. Pumping it out must be done via the OWS and logged under specific codes in ORB Part I.",
    "cat": "ORB",
    "id": "T17M_076"
  },
  {
    "q": "What documentation must accompany the ORB for at least three years?",
    "a": "Bunker Delivery Notes (BDNs) and receipts from shore-based reception facilities for sludge or oily water disposal",
    "opts": ["The crew's medical certificates", "The daily menus from the galley", "Bunker Delivery Notes (BDNs) and receipts from shore-based reception facilities for sludge or oily water disposal", "The ship's original blueprints"],
    "exp": "The ORB is the ledger; the BDNs and Shore Receipts are the receipts. You must keep them together so an auditor can verify that the '5 tons discharged to truck' logged in the ORB matches the physical paper receipt from the truck driver.",
    "cat": "ORB",
    "id": "T17M_077"
  },
  {
    "q": "How does the '15 ppm alarm data logger' prevent ORB falsification?",
    "a": "It keeps an unalterable digital record of exactly when the OCM was running and when it alarmed; if this digital record doesn't perfectly match the manual ORB entries, the crew is caught lying",
    "opts": ["It keeps an unalterable digital record of exactly when the OCM was running and when it alarmed; if this digital record doesn't perfectly match the manual ORB entries, the crew is caught lying", "It locks the ship's steering until the ORB is signed", "It automatically prints the ORB pages every day", "It sends an electric shock to the pump if bypassed"],
    "exp": "Before MEPC.107(49), crews could pump oily water at night and just not write it in the ORB. Now, the OCM records a permanent timestamp on a flash drive every time water flows through it. PSC downloads this data and compares it line-by-line with the ORB.",
    "cat": "ORB",
    "id": "T17M_078"
  },
  {
    "q": "When is an entry made in the ORB for the 'Collection of Oil Residues (Sludge)'?",
    "a": "Typically recorded once a week, documenting the manual sounding (volume) of the sludge holding tanks to track accumulation",
    "opts": ["Only during the class society survey", "Only when the tank reaches 100% capacity", "Typically recorded once a week, documenting the manual sounding (volume) of the sludge holding tanks to track accumulation", "Every hour during a sea voyage"],
    "exp": "Code 'C' in the ORB is used for recording the weekly inventory of sludge. This proves to the authorities that you are keeping track of the waste your engines are generating, and that it isn't mysteriously vanishing.",
    "cat": "ORB",
    "id": "T17M_079"
  },
  {
    "q": "Can the ETO sign an ORB entry for an operation they did not personally supervise or conduct?",
    "a": "No, it is illegal; only the officer actually in charge of the physical operation may sign the entry, taking personal legal responsibility for it",
    "opts": ["Yes, the ETO can sign for the Chief Engineer if authorized", "No, it is illegal; only the officer actually in charge of the physical operation may sign the entry, taking personal legal responsibility for it", "Yes, if the Master countersigns it immediately", "Yes, as long as the operation was electrical in nature"],
    "exp": "You must never sign for someone else's pumping operation. If they pumped oil overboard illegally and you signed the book, you are legally responsible and can face prison time.",
    "cat": "ORB",
    "id": "T17M_080"
  },
  {
    "q": "What does ODME stand for, and which ships are required to have it?",
    "a": "Oil Discharge Monitoring Equipment; mandated for all oil tankers (crude and product) above 150 GT",
    "opts": ["Overboard Discharge Measurement Engine; for passenger ships", "Oil Discharge Monitoring Equipment; mandated for all oil tankers (crude and product) above 150 GT", "Oceanic Data Monitoring Electronics; for research vessels", "Oily Deck Mitigation Equipment; for bulk carriers"],
    "exp": "Tankers carry millions of gallons of oil. When they wash their cargo tanks with water, that water becomes oily. The ODME strictly monitors and controls the discharge of this massive volume of oily cargo water into the ocean.",
    "cat": "ODME",
    "id": "T17M_081"
  },
  {
    "q": "Under MARPOL Annex I, what is the maximum instantaneous rate of discharge allowed by the ODME?",
    "a": "30 litres of oil per nautical mile",
    "opts": ["15 litres per hour", "15 parts per million", "30 litres of oil per nautical mile", "100 litres per minute"],
    "exp": "This is a critical regulatory number. The ODME calculates the ship's speed vs the oil concentration in the water. It ensures that the ship is spreading the oil thinly enough (no more than 30 liters over a full mile) so the ocean can naturally disperse it.",
    "cat": "ODME",
    "id": "T17M_082"
  },
  {
    "q": "What is the maximum total quantity of oil that a tanker is allowed to discharge into the sea on a ballast voyage?",
    "a": "1/30,000 of the total quantity of the particular cargo of which the residue formed a part",
    "opts": ["1000 Litres total", "1% of the ship's total displacement", "Zero; no oil is ever allowed to be discharged", "1/30,000 of the total quantity of the particular cargo of which the residue formed a part"],
    "exp": "Another critical MARPOL limit. If a tanker carried 30,000,000 liters of crude oil, it is allowed to discharge a maximum of 1,000 liters of residual oil into the ocean during its entire tank washing operation.",
    "cat": "ODME",
    "id": "T17M_083"
  },
  {
    "q": "How far from land must a tanker be to legally operate the ODME and discharge cargo washings?",
    "a": "More than 50 nautical miles from the nearest land",
    "opts": ["More than 50 nautical miles from the nearest land", "More than 200 nautical miles", "More than 12 nautical miles", "Outside the port breakwater"],
    "exp": "Unlike the engine room OWS (which is 12 nm), cargo tankers must be much further out (50 nm) due to the vastly larger quantities of water and oil residues being pumped out.",
    "cat": "ODME",
    "id": "T17M_084"
  },
  {
    "q": "What specific navigational condition must be met for the ODME to permit discharge?",
    "a": "The tanker must be proceeding en route (moving through the water)",
    "opts": ["The tanker must be proceeding en route (moving through the water)", "The tanker must be anchored securely", "The tanker must be reversing", "The tanker must be drifting with engines stopped"],
    "exp": "If the ship is sitting still, discharging 30 liters per nautical mile is impossible (you aren't moving miles). Moving through the water ensures the oil is spread out and mixed into the ship's massive wake.",
    "cat": "ODME",
    "id": "T17M_085"
  },
  {
    "q": "What are the three primary data inputs required by the ODME computer to calculate the discharge rate?",
    "a": "Oil Content (from the optical sensor), Flow Rate (from the discharge pipe flow meter), and Ship Speed (from the GPS/Log)",
    "opts": ["Oil Content (from the optical sensor), Flow Rate (from the discharge pipe flow meter), and Ship Speed (from the GPS/Log)", "Tank Temperature, Engine RPM, and Wind Speed", "Salinity, Viscosity, and Draft", "Pump Pressure, Valve Position, and Time"],
    "exp": "The computer needs to know how much water is leaving (Flow), how dirty it is (Oil Content), and how fast the ship is moving (Speed) to prove the formula: (Flow x Concentration) / Speed < 30 Litres/nm.",
    "cat": "ODME",
    "id": "T17M_086"
  },
  {
    "q": "What happens automatically if the ODME calculates a discharge rate of 35 litres per nautical mile?",
    "a": "It triggers a high-level alarm and instantly closes the overboard discharge valve, stopping the flow to the sea",
    "opts": ["It automatically slows down the ship's main engine", "It adds fresh water to dilute the mixture", "It prints a warning but continues discharging", "It triggers a high-level alarm and instantly closes the overboard discharge valve, stopping the flow to the sea"],
    "exp": "The system is fully automated and fail-safe. If any limit (30 L/nm, total quantity, or equipment failure) is breached, the massive overboard valve slams shut to prevent illegal pollution.",
    "cat": "ODME",
    "id": "T17M_087"
  },
  {
    "q": "If the ODME system completely fails during a voyage, what is the legal consequence for the tanker's operations?",
    "a": "The tanker is strictly prohibited from discharging any cargo ballast or tank washings at sea; all dirty water must be retained onboard for disposal at a port reception facility",
    "opts": ["The tanker is strictly prohibited from discharging any cargo ballast or tank washings at sea; all dirty water must be retained onboard for disposal at a port reception facility", "The tanker must sail backwards to reverse the flow", "The crew can manually estimate the oil content and continue pumping", "The tanker can discharge at 15 ppm using the engine room OWS instead"],
    "exp": "No ODME = No pumping. You cannot 'guess' the discharge rate. Bypassing a broken ODME is a criminal MARPOL violation.",
    "cat": "ODME",
    "id": "T17M_088"
  },
  {
    "q": "What is the 'Slop Tank' on an oil tanker?",
    "a": "A dedicated tank where dirty tank washings and oily ballast water are collected to allow the oil and water to separate by gravity before decanting the water via the ODME",
    "opts": ["The tank where the crew disposes of garbage", "A dedicated tank where dirty tank washings and oily ballast water are collected to allow the oil and water to separate by gravity before decanting the water via the ODME", "The main fuel oil bunker tank", "The tank that holds clean drinking water"],
    "exp": "After washing cargo tanks with crude oil or water, the dirty sludge is pumped into the Slop Tank. Over a few days, the oil floats to the top. The clean water at the bottom is carefully pumped out through the ODME, leaving only the concentrated oil behind.",
    "cat": "ODME",
    "id": "T17M_089"
  },
  {
    "q": "What record book is closely tied to the operation of the ODME?",
    "a": "The Oil Record Book Part II (Cargo/Ballast Operations)",
    "opts": ["The Oil Record Book Part I", "The Deck Logbook", "The Garbage Record Book", "The Oil Record Book Part II (Cargo/Ballast Operations)"],
    "exp": "Every time the ODME is used to decant the slop tank, the Chief Officer must log the time, coordinates, and exact quantity discharged in ORB Part II. The physical printout from the ODME machine must match this log exactly.",
    "cat": "ODME",
    "id": "T17M_090"
  },
  {
    "q": "What type of sensor does the ODME use to measure the oil content of the cargo effluent?",
    "a": "An optical sensor utilizing light scattering (nephelometry) or infrared absorption principles, similar to but often more complex than an engine room OCM",
    "opts": ["A mechanical centrifuge", "A thermal distillation unit", "An optical sensor utilizing light scattering (nephelometry) or infrared absorption principles, similar to but often more complex than an engine room OCM", "A chemical titration probe"],
    "exp": "Because crude oil and refined products vary wildly in color and density, the ODME optical sensor uses advanced light-scattering techniques and homogenizers to accurately measure ppm regardless of the cargo type.",
    "cat": "ODME",
    "id": "T17M_091"
  },
  {
    "q": "Why does the ODME include a 'Homogenizer' or sample feed pump before the optical sensor?",
    "a": "To aggressively churn and mix the sample so that any large oil droplets are broken down into a uniform, microscopic emulsion, ensuring the optical sensor reads the true total oil content",
    "opts": ["To add chemicals that dissolve the oil", "To heat the water to boiling point", "To violently separate the oil from the water before measurement", "To aggressively churn and mix the sample so that any large oil droplets are broken down into a uniform, microscopic emulsion, ensuring the optical sensor reads the true total oil content"],
    "exp": "If a giant glob of crude oil passed the sensor, it would block all light for a second, then show pure water. The homogenizer blends it like a smoothie, guaranteeing the sensor sees a steady, average ppm value.",
    "cat": "ODME",
    "id": "T17M_092"
  },
  {
    "q": "What is the ETO's primary maintenance responsibility for the ODME system?",
    "a": "Ensuring the sample lines are clear, cleaning the optical sensor windows, verifying the GPS/Speed log signal inputs, and assisting shore techs with the mandatory annual calibration",
    "opts": ["Signing the Oil Record Book Part II", "Washing the cargo tanks with high-pressure hoses", "Emptying the slop tanks manually", "Ensuring the sample lines are clear, cleaning the optical sensor windows, verifying the GPS/Speed log signal inputs, and assisting shore techs with the mandatory annual calibration"],
    "exp": "The ODME relies on data. If the speed log signal to the panel is broken, the ODME reads 0 knots and shuts the valve. The ETO maintains the electronics, optics, and data inputs.",
    "cat": "ODME",
    "id": "T17M_093"
  },
  {
    "q": "How does the ODME panel record its data to prevent falsification?",
    "a": "It has an integrated, tamper-proof printer or digital data logger that continuously prints/records the date, time, speed, oil ppm, flow rate, and valve status during the entire discharge operation",
    "opts": ["It has an integrated, tamper-proof printer or digital data logger that continuously prints/records the date, time, speed, oil ppm, flow rate, and valve status during the entire discharge operation", "It uses blockchain technology to verify the water", "It requires the Captain to type in a password every 5 minutes", "It sends an email directly to the IMO"],
    "exp": "The paper printout (or digital equivalent) is legally binding. The tape must be torn off and kept onboard for 3 years. PSC officers compare the unalterable machine tape with the handwritten ORB Part II to look for lies.",
    "cat": "ODME",
    "id": "T17M_094"
  },
  {
    "q": "What happens in the ODME if the ship's GPS or Speed Log signal suddenly fails during a discharge?",
    "a": "The system loses the speed input, cannot calculate Litres/nm, and immediately initiates a fail-safe shutdown of the overboard valve",
    "opts": ["The system defaults to an assumed speed of 10 knots", "The system loses the speed input, cannot calculate Litres/nm, and immediately initiates a fail-safe shutdown of the overboard valve", "The pump speeds up to compensate", "The system switches to measuring 15 ppm limit only"],
    "exp": "A broken sensor triggers a fail-safe closure. On some approved older systems, manual speed input was allowed if the log failed, provided it was heavily documented, but automatic shutdown is the modern standard.",
    "cat": "ODME",
    "id": "T17M_095"
  },
  {
    "q": "Can the ODME be used to discharge engine room bilge water?",
    "a": "No, the ODME is strictly for cargo tank washings and oily ballast from the slop tanks (Annex I, Part II); machinery bilges MUST go through the 15 ppm OWS (Annex I, Part I)",
    "opts": ["No, the ODME is strictly for cargo tank washings and oily ballast from the slop tanks (Annex I, Part II); machinery bilges MUST go through the 15 ppm OWS (Annex I, Part I)", "Yes, if the OWS is broken", "Yes, it is just a bigger version of the OWS", "Yes, but only when the ship is in port"],
    "exp": "They are two completely distinct legal systems. Mixing engine room bilge water into the cargo slop tanks without proper logging and specific system approvals is a violation.",
    "cat": "ODME",
    "id": "T17M_096"
  },
  {
    "q": "What is the 'Flush Cycle' on an ODME?",
    "a": "Before and after use, clean water is flushed through the sampling lines and optical sensor to clear residual oil, preventing fouling of the glass and ensuring accurate zero-calibration",
    "opts": ["A process to clean the ship's anchor chain", "A setting that bypasses the flow meter", "Before and after use, clean water is flushed through the sampling lines and optical sensor to clear residual oil, preventing fouling of the glass and ensuring accurate zero-calibration", "A cycle that dumps the entire slop tank overboard in an emergency"],
    "exp": "Crude oil is thick and sticky. If left in the thin sampling tubes after the pump stops, it will harden. The automatic flush cycle ensures the sensor is pristine for the next use.",
    "cat": "ODME",
    "id": "T17M_097"
  },
  {
    "q": "What defines 'Clean Ballast' on a tanker?",
    "a": "Water inside a tank that is clean enough that, if discharged on a calm day, it would not produce visible traces of oil on the water surface (statistically usually < 15 ppm)",
    "opts": ["Water pumped exclusively from the engine room", "Water inside a tank that is clean enough that, if discharged on a calm day, it would not produce visible traces of oil on the water surface (statistically usually < 15 ppm)", "Water that is safe to drink", "Water that has been boiled and distilled"],
    "exp": "If a cargo tank was washed so thoroughly that filling it with ocean water creates no oil sheen upon discharge, that water is 'clean ballast'.",
    "cat": "ODME",
    "id": "T17M_098"
  },
  {
    "q": "When discharging 'Clean Ballast' from a tanker, must the ODME be running?",
    "a": "Yes, MARPOL requires the ODME to be in operation and recording even for clean ballast discharges to provide proof of compliance, though some exemptions exist for strictly segregated ballast tanks (SBT)",
    "opts": ["No, clean ballast can be dumped directly anytime", "No, the ODME is turned off to save power", "Only if the ship is within 12 nm of land", "Yes, MARPOL requires the ODME to be in operation and recording even for clean ballast discharges to provide proof of compliance, though some exemptions exist for strictly segregated ballast tanks (SBT)"],
    "exp": "If the water came from a tank that ever held cargo oil, you must prove it was clean by running the ODME. Segregated Ballast Tanks (SBTs) which have their own pumps and never touch cargo are exempt from ODME routing.",
    "cat": "ODME",
    "id": "T17M_099"
  },
  {
    "q": "What is the typical sequence of events during a slop tank 'Decanting' operation monitored by the ODME?",
    "a": "Water is pumped from the bottom of the slop tank. Initially clean, ppm is low. As the pump nears the oil layer, ppm rises. When ppm x flow / speed hits 30 L/nm, the ODME slams the overboard valve shut, stopping the pump or diverting to recirculation",
    "opts": ["Water is pumped from the bottom of the slop tank. Initially clean, ppm is low. As the pump nears the oil layer, ppm rises. When ppm x flow / speed hits 30 L/nm, the ODME slams the overboard valve shut, stopping the pump or diverting to recirculation", "The oil is pumped out first, followed by the water", "The tank is boiled, and the vapor is measured", "Chemicals are added until the mixture turns clear"],
    "exp": "Because oil floats, the cleanest water is at the very bottom. Pumping from the bottom is safe at first. As the oil layer gets sucked down toward the pump inlet, the water gets dirtier until the ODME senses the limit and cuts the operation.",
    "cat": "ODME",
    "id": "T17M_100"
  },
  {
    "q": "If the ODME is operating in an Annex I 'Special Area' (e.g., the Mediterranean Sea), what are the discharge limits?",
    "a": "ZERO discharge. Discharge of cargo oil or oily mixtures from tankers is completely prohibited in Special Areas; the ODME overboard valve must remain locked closed",
    "opts": ["15 Litres per nautical mile", "100 Litres total", "ZERO discharge. Discharge of cargo oil or oily mixtures from tankers is completely prohibited in Special Areas; the ODME overboard valve must remain locked closed", "Discharge is allowed if the ship is moving fast"],
    "exp": "The 30 L/nm rule is ONLY for the open ocean. If you are inside the Mediterranean or Baltic Sea, you cannot discharge a single drop of slop tank water overboard.",
    "cat": "ODME",
    "id": "T17M_101"
  },
  {
    "q": "How is the ODME system typically tested by PSC inspectors during a port visit?",
    "a": "They will demand to see the printed data tapes, check the ORB Part II, and may ask the ETO to perform a functional test using the system's built-in electrical simulation or test fluid to verify the overboard valve closes on alarm",
    "opts": ["They will pump oil overboard to see if it stops", "They will weigh the slop tank", "They will demand to see the printed data tapes, check the ORB Part II, and may ask the ETO to perform a functional test using the system's built-in electrical simulation or test fluid to verify the overboard valve closes on alarm", "They skip the ODME because it is too complex"],
    "exp": "PSC cannot test it with real oil in port. They rely on the machine's electronic self-test function, which injects a simulated high-ppm signal to prove the automation triggers the massive pneumatic valve to shut.",
    "cat": "ODME",
    "id": "T17M_102"
  },
  {
    "q": "What is the function of the Flow Meter in the ODME system?",
    "a": "To measure the exact volume of water being pumped overboard in cubic meters per hour, allowing the computer to calculate total oil quantity and the instantaneous discharge rate",
    "opts": ["To measure the salinity of the water", "To cool the oil before it reaches the sensor", "To detect solid metal debris", "To measure the exact volume of water being pumped overboard in cubic meters per hour, allowing the computer to calculate total oil quantity and the instantaneous discharge rate"],
    "exp": "You can't know how much oil you dumped if you don't know how much water you dumped. The flow meter (often an orifice plate or ultrasonic meter on the main discharge pipe) is a critical input to the mathematical formula.",
    "cat": "ODME",
    "id": "T17M_103"
  },
  {
    "q": "Why must the ODME be pre-programmed with the 'Cargo Type' before starting a discharge?",
    "a": "Because different crude oils and refined products have vastly different optical properties (color, density); the system uses specific calibration curves for different cargo types to accurately measure the ppm",
    "opts": ["To calculate the flash point of the water", "To alert the port authority of the cargo's toxicity", "To determine the financial value of the waste", "Because different crude oils and refined products have vastly different optical properties (color, density); the system uses specific calibration curves for different cargo types to accurately measure the ppm"],
    "exp": "Heavy black crude oil absorbs light very differently than clear, refined diesel fuel. If the officer selects 'Crude' but is pumping 'Diesel', the optical sensor's math will be wrong, leading to inaccurate ppm readings.",
    "cat": "ODME",
    "id": "T17M_104"
  },
  {
    "q": "If an ETO is performing an annual calibration on an ODME, what is typically required?",
    "a": "Using manufacturer-supplied calibration fluids (formazine or specific oil mixtures) to adjust the zero and span of the optical sensor, and verifying the flow meter and speed inputs",
    "opts": ["Repainting the sensor housing", "Replacing the entire optical unit", "Upgrading the ship's GPS system", "Using manufacturer-supplied calibration fluids (formazine or specific oil mixtures) to adjust the zero and span of the optical sensor, and verifying the flow meter and speed inputs"],
    "exp": "Similar to the 15ppm OWS, the ODME optics drift over time. Certified test fluids prove the sensor reads exactly 100 ppm when exposed to a 100 ppm liquid.",
    "cat": "ODME",
    "id": "T17M_105"
  },
  {
    "q": "What is the 'Total Quantity Limit' for a new oil tanker built after 1979 when discharging cargo washings?",
    "a": "1/30,000 of the total quantity of the particular cargo of which the residue formed a part (Older ships pre-1979 were allowed 1/15,000)",
    "opts": ["1/30,000 of the total quantity of the particular cargo of which the residue formed a part (Older ships pre-1979 were allowed 1/15,000)", "1000 cubic meters", "1/100 of the cargo", "There is no limit if the ship is fast enough"],
    "exp": "If you loaded 30,000 tons of crude, you can only legally discharge 1 ton of oil residue mixed into the massive volume of wash water. The ODME tracks this cumulative sum and stops the pump if you hit 1 ton.",
    "cat": "ODME",
    "id": "T17M_106"
  },
  {
    "q": "What is the physical size difference between an engine room OWS and a tanker ODME system?",
    "a": "An OWS physically separates and filters the oil out of the water. An ODME is just a massive monitoring and valve system; it doesn't filter the water, it just relies on gravity separation inside the giant slop tanks",
    "opts": ["An OWS handles 1000 tons per hour, ODME handles 1 ton per hour", "They are exactly the same physical machine", "An OWS physically separates and filters the oil out of the water. An ODME is just a massive monitoring and valve system; it doesn't filter the water, it just relies on gravity separation inside the giant slop tanks", "An ODME is small enough to hold in one hand"],
    "exp": "You cannot filter 1000 tons of water an hour through a physical filter cartridge. The slop tank (which holds thousands of tons of water) acts as the 'filter' by letting gravity do the work over several days. The ODME just watches the water leaving.",
    "cat": "ODME",
    "id": "T17M_107"
  },
  {
    "q": "Why must the overboard discharge valve on the ODME be interlocked with the cargo pumps?",
    "a": "To ensure that if the ODME fails or alarms, it can automatically shut down the massive cargo pump or slam the divert valve shut instantly to prevent thousands of gallons of oil from blasting into the ocean",
    "opts": ["To ensure that if the ODME fails or alarms, it can automatically shut down the massive cargo pump or slam the divert valve shut instantly to prevent thousands of gallons of oil from blasting into the ocean", "To ensure the pump runs faster when the water is clean", "To prevent the pump from drawing a vacuum", "To keep the cargo pump warm"],
    "exp": "Tanker pumps are immense. A few seconds of delay in shutting a valve means hundreds of liters of pure oil entering the sea. The interlock ensures millisecond response times.",
    "cat": "ODME",
    "id": "T17M_108"
  },
  {
    "q": "What is meant by 'Load on Top' (LOT) procedure in relation to the ODME?",
    "a": "After decanting the clean water from the slop tank via the ODME, the new cargo of crude oil is loaded directly 'on top' of the remaining oily sludge, integrating the waste into the new cargo",
    "opts": ["After decanting the clean water from the slop tank via the ODME, the new cargo of crude oil is loaded directly 'on top' of the remaining oily sludge, integrating the waste into the new cargo", "Pumping fresh water on top of the oil to sink it", "Loading heavy cargo on the top deck", "Loading garbage on top of the fuel tanks"],
    "exp": "Instead of paying to pump out the last meter of thick oily sludge in the slop tank, the refinery just accepts it mixed in with the next 30,000 tons of fresh crude oil. This minimizes marine pollution.",
    "cat": "ODME",
    "id": "T17M_109"
  },
  {
    "q": "If the ship's speed drops below a certain threshold (e.g., stopping), what does the ODME do?",
    "a": "It closes the overboard valve, because discharging 30 Litres per nautical mile is mathematically impossible if the ship is not moving (zero nautical miles covered)",
    "opts": ["It opens the valve wider to compensate", "It bypasses the speed requirement", "It closes the overboard valve, because discharging 30 Litres per nautical mile is mathematically impossible if the ship is not moving (zero nautical miles covered)", "It sounds the general alarm"],
    "exp": "The formula divides by speed. If speed is zero, you are dividing by zero (infinity). The concentration of oil directly under the stationary ship would instantly exceed environmental limits.",
    "cat": "ODME",
    "id": "T17M_110"
  },
  {
    "q": "What does SEEMP stand for, and under which MARPOL Annex is it mandated?",
    "a": "Ship Energy Efficiency Management Plan; mandated under MARPOL Annex VI",
    "opts": ["Safe Engine Environmental Maintenance Protocol; Annex I", "Ship Energy Efficiency Management Plan; mandated under MARPOL Annex VI", "System for Electrical Emissions and Monitoring Performance; Annex V", "Standard Energy and Exhaust Management Plan; Annex IV"],
    "exp": "The SEEMP is an operational plan required on all ships >400 GT. It provides a documented strategy for improving the ship's energy efficiency (e.g., weather routing, speed optimization) to reduce CO2 emissions.",
    "cat": "SEEMP_CII",
    "id": "T17M_111"
  },
  {
    "q": "What is the difference between EEDI and SEEMP?",
    "a": "EEDI is a TECHNICAL design standard for new ships (how the ship is built), whereas SEEMP is an OPERATIONAL management plan for all ships (how the ship is sailed)",
    "opts": ["EEDI is a TECHNICAL design standard for new ships (how the ship is built), whereas SEEMP is an OPERATIONAL management plan for all ships (how the ship is sailed)", "EEDI regulates oil spills; SEEMP regulates air pollution", "EEDI applies to cargo; SEEMP applies to passengers", "They are two different names for exactly the same document"],
    "exp": "EEDI (Energy Efficiency Design Index) forces naval architects to design sleeker hulls and use more efficient engines. SEEMP forces the captain and crew to run the ship smartly to burn less fuel.",
    "cat": "SEEMP_CII",
    "id": "T17M_112"
  },
  {
    "q": "What is the CII (Carbon Intensity Indicator)?",
    "a": "An annual operational rating system (A through E) that measures how efficiently a ship transports goods, calculated in grams of CO2 emitted per deadweight-nautical mile",
    "opts": ["An annual operational rating system (A through E) that measures how efficiently a ship transports goods, calculated in grams of CO2 emitted per deadweight-nautical mile", "A tax applied by European ports on high-sulfur fuel", "A meter on the funnel that measures black smoke", "A chemical added to fuel to reduce carbon buildup"],
    "exp": "Effective from 2023, the CII is a 'report card' for the ship. It proves mathematically whether the ship is actually achieving the efficiency goals outlined in its SEEMP.",
    "cat": "SEEMP_CII",
    "id": "T17M_113"
  },
  {
    "q": "Which ships are mandated to calculate and report their annual CII rating?",
    "a": "All ships of 5,000 GT and above",
    "opts": ["Only newly built ships after 2023", "All ships of 400 GT and above", "Only passenger ships", "All ships of 5,000 GT and above"],
    "exp": "While SEEMP applies to >400 GT, the heavy data reporting burden of the CII (and the IMO DCS fuel database) targets the largest polluters: ships 5,000 GT and above.",
    "cat": "SEEMP_CII",
    "id": "T17M_114"
  },
  {
    "q": "What happens if a ship receives a CII rating of 'D' for three consecutive years, or an 'E' rating for a single year?",
    "a": "The ship must develop an approved Corrective Action Plan (part of SEEMP Part III) detailing exactly how it will improve its rating to a 'C' or better",
    "opts": ["The Chief Engineer loses their license", "The ship is immediately scrapped", "The ship is banned from entering any port", "The ship must develop an approved Corrective Action Plan (part of SEEMP Part III) detailing exactly how it will improve its rating to a 'C' or better"],
    "exp": "You cannot endlessly fail the CII. 'E' means your ship is highly inefficient. You must legally commit to fixing it (e.g., by lowering top speed, cleaning the hull, or upgrading propellers).",
    "cat": "SEEMP_CII",
    "id": "T17M_115"
  },
  {
    "q": "How can an ETO directly contribute to improving a ship's CII rating?",
    "a": "By retrofitting LED lighting, installing VFDs on large cooling pumps, optimizing power management to avoid running unnecessary generators, and maintaining Shore Power equipment",
    "opts": ["By disabling the radar systems to save power", "By manually injecting oxygen into the exhaust stack", "By dumping heavy cargo overboard", "By retrofitting LED lighting, installing VFDs on large cooling pumps, optimizing power management to avoid running unnecessary generators, and maintaining Shore Power equipment"],
    "exp": "Every kW of electricity saved means less diesel burned by the auxiliary generators. Replacing 1000 fluorescent tubes with LEDs can save tons of fuel over a year, directly boosting the CII score.",
    "cat": "SEEMP_CII",
    "id": "T17M_116"
  },
  {
    "q": "How does installing a Variable Frequency Drive (VFD) on a seawater cooling pump drastically improve energy efficiency?",
    "a": "According to the Affinity Laws, power consumption is proportional to the cube of the speed; dropping the pump speed by just 20% cuts electrical power consumption by nearly 50%",
    "opts": ["VFDs increase the water's heat capacity", "VFDs bypass the main switchboard entirely", "According to the Affinity Laws, power consumption is proportional to the cube of the speed; dropping the pump speed by just 20% cuts electrical power consumption by nearly 50%", "VFDs generate their own electricity from the water flow"],
    "exp": "Running a pump at 100% speed and throttling a valve wastes immense energy. A VFD slows the motor down when the ocean is cold, saving half the electrical power for a tiny drop in speed.",
    "cat": "SEEMP_CII",
    "id": "T17M_117"
  },
  {
    "q": "What is 'EEXI' (Energy Efficiency Existing Ship Index)?",
    "a": "A one-time technical measure applied to existing ships (built before EEDI) to ensure they meet a baseline design efficiency standard, often achieved by limiting maximum engine power",
    "opts": ["An annual operational rating like CII", "A tax on existing fuel tanks", "A measure of crew efficiency", "A one-time technical measure applied to existing ships (built before EEDI) to ensure they meet a baseline design efficiency standard, often achieved by limiting maximum engine power"],
    "exp": "You can't rebuild an old ship to make it sleeker (EEDI), but you can force it to drive slower. EEXI forces older, dirtier ships to artificially limit their engine power so they behave like newer, greener ships.",
    "cat": "SEEMP_CII",
    "id": "T17M_118"
  },
  {
    "q": "What is 'ShaPoLi' (Shaft Power Limitation) or EPL (Engine Power Limitation)?",
    "a": "An electronic or mechanical hard-limit installed on the main engine governor or shaft to permanently cap the maximum power output, used to comply with EEXI regulations",
    "opts": ["A generator protection relay", "An electronic or mechanical hard-limit installed on the main engine governor or shaft to permanently cap the maximum power output, used to comply with EEXI regulations", "A device that increases power during storms", "A system that disconnects the propeller from the engine"],
    "exp": "To pass the EEXI rule, ships install an electronic lock in the automation. Even if the Captain pushes the telegraph to 100%, the computer only allows 80% fuel, making the ship slower but significantly lowering its carbon footprint.",
    "cat": "SEEMP_CII",
    "id": "T17M_119"
  },
  {
    "q": "Can the ShaPoLi (Power Limitation) be overridden by the crew?",
    "a": "Yes, but ONLY in a genuine navigational emergency to save the ship; breaking the tamper-proof seal or software lock must be logged, reported to authorities, and investigated",
    "opts": ["Yes, anytime the ship is behind schedule", "No, only a shipyard can override it", "No, it is a permanent weld on the engine", "Yes, but ONLY in a genuine navigational emergency to save the ship; breaking the tamper-proof seal or software lock must be logged, reported to authorities, and investigated"],
    "exp": "Safety trumps the environment. If you need 100% power to avoid hitting a reef in a hurricane, the Captain pushes the override button. But doing so flags the system and requires a formal written explanation to the Flag State.",
    "cat": "SEEMP_CII",
    "id": "T17M_120"
  },
  {
    "q": "What is 'Cold Ironing' (Alternative Maritime Power / Shore Power)?",
    "a": "Plugging the ship's electrical grid into shore-based power while berthed, allowing all auxiliary diesel generators to be shut down, eliminating local air pollution and noise in the port",
    "opts": ["Using seawater to wash the exhaust gases", "Running the ship entirely on battery power", "Cooling the engine block with ice", "Plugging the ship's electrical grid into shore-based power while berthed, allowing all auxiliary diesel generators to be shut down, eliminating local air pollution and noise in the port"],
    "exp": "Ports in California and Europe now mandate this. A massive high-voltage cable (e.g., 6.6kV) connects the ship to the city grid. The ship burns zero fuel in port, drastically improving its CII and eliminating deadly smog for the local city.",
    "cat": "SEEMP_CII",
    "id": "T17M_121"
  },
  {
    "q": "What critical instrument must the ETO maintain perfectly to ensure accurate CII and MRV reporting?",
    "a": "The Fuel Oil Flow Meters; these digital/mass flow meters provide the exact fuel consumption data required by law to calculate the ship's carbon emissions",
    "opts": ["The Echo Sounder", "The Fuel Oil Flow Meters; these digital/mass flow meters provide the exact fuel consumption data required by law to calculate the ship's carbon emissions", "The Wind Anemometer", "The Salinometer"],
    "exp": "If the flow meters under-report or over-report the fuel burned, the ship's entire legal carbon footprint calculation is ruined. Ensuring these meters are calibrated is a massive new responsibility for the ETO.",
    "cat": "SEEMP_CII",
    "id": "T17M_122"
  },
  {
    "q": "What does SEEMP Part III specifically contain?",
    "a": "It is the ship's specific 'Operational Carbon Intensity Plan'; it documents the ship's target CII for the next three years and the exact steps the crew will take to achieve that target",
    "opts": ["The garbage disposal logs", "It is the ship's specific 'Operational Carbon Intensity Plan'; it documents the ship's target CII for the next three years and the exact steps the crew will take to achieve that target", "The technical blueprints for the main engine", "The crew's rest hour records"],
    "exp": "Part I is general energy efficiency. Part II is data collection. Part III is the strict roadmap for passing the CII rating. It is a legally binding commitment to improve.",
    "cat": "SEEMP_CII",
    "id": "T17M_123"
  },
  {
    "q": "How does poor 'Power Factor' on the ship's switchboard negatively affect the ship's environmental efficiency?",
    "a": "A poor (low) power factor means generators must produce excessive reactive power (kVAR), increasing total current, I\u00b2R heat losses, and causing the diesel engine to burn slightly more fuel to compensate",
    "opts": ["It causes the lights to burn out faster", "It has absolutely zero effect on fuel consumption", "It makes the fuel oil colder", "A poor (low) power factor means generators must produce excessive reactive power (kVAR), increasing total current, I\u00b2R heat losses, and causing the diesel engine to burn slightly more fuel to compensate"],
    "exp": "If the power factor drops from 0.9 to 0.7, the alternator pushes way more current to do the same work. That current heats up the massive cables. Heat is wasted energy, and the diesel engine burns fuel to make that wasted heat. ETOs fix this by engaging capacitor banks.",
    "cat": "SEEMP_CII",
    "id": "T17M_124"
  },
  {
    "q": "What is the IMO DCS (Data Collection System)?",
    "a": "A mandatory global database where ships \u22655,000 GT must report their annual fuel oil consumption, distance traveled, and hours underway to the IMO for carbon tracking",
    "opts": ["A satellite system for downloading charts", "A mandatory global database where ships \u22655,000 GT must report their annual fuel oil consumption, distance traveled, and hours underway to the IMO for carbon tracking", "A database of all ship spare parts", "A system that tracks pirate attacks"],
    "exp": "You can't fix what you don't measure. The DCS forces every large ship in the world to upload its fuel data, allowing the IMO to see exactly how much CO2 the shipping industry is producing.",
    "cat": "SEEMP_CII",
    "id": "T17M_125"
  },
  {
    "q": "What is the EU MRV, and how does it relate to the IMO DCS?",
    "a": "The EU Monitoring, Reporting, and Verification system is Europe's regional version of the IMO DCS; it requires ships visiting EU ports to report fuel data, but with stricter verification and publishing rules",
    "opts": ["It applies only to European-flagged ships", "It is a completely unrelated radar system", "It is an engine manufacturer's warranty system", "The EU Monitoring, Reporting, and Verification system is Europe's regional version of the IMO DCS; it requires ships visiting EU ports to report fuel data, but with stricter verification and publishing rules"],
    "exp": "The EU started tracking ship carbon before the IMO did. If you sail to Europe, you must submit your fuel meter data to both the IMO database and the separate European MRV database.",
    "cat": "SEEMP_CII",
    "id": "T17M_126"
  },
  {
    "q": "What is a 'Statement of Compliance' regarding Fuel Oil Consumption Reporting?",
    "a": "A certificate issued by the Flag State every year confirming that the ship successfully submitted its accurate fuel data to the IMO DCS database; it must be kept onboard for 5 years",
    "opts": ["A certificate issued by the Flag State every year confirming that the ship successfully submitted its accurate fuel data to the IMO DCS database; it must be kept onboard for 5 years", "A note from the shipyard confirming the engine works", "A certificate proving the fuel doesn't contain water", "A receipt from the bunker barge"],
    "exp": "Without this certificate, Port State Control knows you didn't do your environmental homework. The ship can be detained for failing to track its carbon.",
    "cat": "SEEMP_CII",
    "id": "T17M_127"
  },
  {
    "q": "How does 'Hull Cleaning' operationally impact the CII rating?",
    "a": "Removing barnacles and algae drastically reduces hydrodynamic drag; the ship requires less engine power (and less fuel) to maintain the same speed, significantly improving the CII score",
    "opts": ["It has no impact on fuel consumption", "Removing barnacles and algae drastically reduces hydrodynamic drag; the ship requires less engine power (and less fuel) to maintain the same speed, significantly improving the CII score", "It changes the chemical composition of the exhaust", "It increases the weight of the ship"],
    "exp": "A dirty hull acts like sandpaper dragging through the water. The engine has to burn 15-20% more fuel just to overcome the friction. Hull cleaning is one of the fastest ways to turn a 'D' rating into a 'C' rating.",
    "cat": "SEEMP_CII",
    "id": "T17M_128"
  },
  {
    "q": "What is the simplest, most effective operational method a ship can use to improve its CII rating without modifying any equipment?",
    "a": "Speed Reduction (Slow Steaming); because power requirement rises with the cube of speed, sailing slightly slower burns exponentially less fuel per nautical mile",
    "opts": ["Speed Reduction (Slow Steaming); because power requirement rises with the cube of speed, sailing slightly slower burns exponentially less fuel per nautical mile", "Opening all the windows for better aerodynamics", "Loading less cargo", "Running all generators simultaneously"],
    "exp": "If a ship drops its speed from 20 knots to 15 knots, it arrives later, but it might burn 50% less fuel for the entire voyage. This massively drops the CO2 emitted per mile.",
    "cat": "SEEMP_CII",
    "id": "T17M_129"
  },
  {
    "q": "How does optimizing the Power Management System (PMS) contribute to the SEEMP?",
    "a": "By preventing 'Asymmetrical Load Sharing' and stopping unnecessary standby generators; running one generator at 80% load is vastly more fuel-efficient than running two generators at 40% load each",
    "opts": ["By forcing the ship to blackout daily", "By overriding the governor to spin the engine faster", "By turning off the ship's navigation lights", "By preventing 'Asymmetrical Load Sharing' and stopping unnecessary standby generators; running one generator at 80% load is vastly more fuel-efficient than running two generators at 40% load each"],
    "exp": "Diesel engines are incredibly inefficient at low loads. An ETO tuning the PMS to automatically shut down Generator #2 the moment the cargo cranes stop ensures the ship isn't burning diesel just to spin an empty engine.",
    "cat": "SEEMP_CII",
    "id": "T17M_130"
  },
  {
    "q": "Under MARPOL regulations, how is 'Transport Work' defined in the CII calculation?",
    "a": "The ship's capacity (Deadweight Tonnage or Gross Tonnage depending on ship type) multiplied by the distance traveled in nautical miles",
    "opts": ["The volume of the fuel tanks", "The ship's capacity (Deadweight Tonnage or Gross Tonnage depending on ship type) multiplied by the distance traveled in nautical miles", "The total weight of the crew", "The amount of cargo loaded multiplied by the price of fuel"],
    "exp": "CII = (CO2 Emitted) / (Capacity * Distance). A massive ship naturally burns more fuel than a small ship. Using 'Transport Work' levels the playing field, measuring how efficient the ship is relative to its massive size.",
    "cat": "SEEMP_CII",
    "id": "T17M_131"
  },
  {
    "q": "What is the purpose of an 'Exhaust Gas Economizer' (Waste Heat Recovery Boiler) in the context of SEEMP?",
    "a": "It captures the immense wasted heat from the main engine exhaust and uses it to boil water into steam for ship heating, completely eliminating the need to burn heavy fuel in the auxiliary boiler while at sea",
    "opts": ["It captures the immense wasted heat from the main engine exhaust and uses it to boil water into steam for ship heating, completely eliminating the need to burn heavy fuel in the auxiliary boiler while at sea", "It adds oxygen to the exhaust to burn off soot", "It acts as a giant muffler to reduce engine noise", "It captures smoke and turns it into solid carbon blocks"],
    "exp": "Main engines throw 30% of their energy out the funnel as hot exhaust. Running that 400\u00b0C exhaust through water pipes generates free steam. Without it, the ship would have to burn tons of oil every day just to keep the fuel tanks warm.",
    "cat": "SEEMP_CII",
    "id": "T17M_132"
  },
  {
    "q": "Why is the target CII rating designed to become stricter every year?",
    "a": "To force continuous, progressive improvement in the shipping industry; a ship that earns a 'C' rating today will slowly slide into a 'D' rating in three years if it doesn't upgrade its efficiency",
    "opts": ["Because fuel is getting cheaper", "To punish older ships", "To force continuous, progressive improvement in the shipping industry; a ship that earns a 'C' rating today will slowly slide into a 'D' rating in three years if it doesn't upgrade its efficiency", "To encourage ships to sail faster"],
    "exp": "The IMO wants to hit net-zero carbon by 2050. The math for a 'C' rating gets 2% harder every year. You can't just fix your ship once; you must constantly find new ways to save fuel or risk failing the grade.",
    "cat": "SEEMP_CII",
    "id": "T17M_133"
  },
  {
    "q": "If an ETO calibrates the VDR (Voyage Data Recorder) Speed Log input, how does this impact MARPOL compliance?",
    "a": "The Speed Log data feeds into the total 'distance traveled' calculation; if the log under-reports the distance, the ship's CII calculation will look artificially worse, potentially failing the ship",
    "opts": ["It changes the amount of fuel injected into the engine", "It prevents the ship from hitting rocks", "The Speed Log data feeds into the total 'distance traveled' calculation; if the log under-reports the distance, the ship's CII calculation will look artificially worse, potentially failing the ship", "It has zero impact on environmental regulations"],
    "exp": "CII divides carbon by distance. If the speed log is broken and says you only sailed 1,000 miles when you really sailed 2,000 miles, the math makes it look like you burned twice as much fuel per mile as you actually did.",
    "cat": "SEEMP_CII",
    "id": "T17M_134"
  },
  {
    "q": "How does 'Weather Routing' fit into a ship's SEEMP?",
    "a": "By using advanced meteorological data to steer around heavy storms and adverse currents, the ship avoids fighting massive head seas, saving significant amounts of fuel and improving the CII",
    "opts": ["It helps the solar panels generate more power", "By using advanced meteorological data to steer around heavy storms and adverse taking currents, the ship avoids fighting massive head seas, saving significant amounts of fuel and improving the CII", "It allows the ship to catch rainwater for the boilers", "It cools the engine using cold arctic air"],
    "exp": "Sailing straight through a storm forces the engine to burn massive fuel just to make 5 knots of headway. Altering course to sail in calm water might add miles, but saves tons of fuel.",
    "cat": "SEEMP_CII",
    "id": "T17M_135"
  },
  {
    "q": "What is the environmental benefit of a 'Shaft Generator' (PTO) regarding energy efficiency?",
    "a": "It generates electricity using the massive, highly efficient main engine instead of smaller, less efficient auxiliary diesel engines, reducing overall fuel consumption and CO2 emissions",
    "opts": ["It powers the propeller using batteries", "It cleans the exhaust gases with electricity", "It generates electricity using the massive, highly efficient main engine instead of smaller, less efficient auxiliary diesel engines, reducing overall fuel consumption and CO2 emissions", "It adds torque to the main engine shaft"],
    "exp": "A giant 2-stroke main engine is incredibly efficient at converting fuel to energy. A small 4-stroke auxiliary generator is not. Taking a little bit of power off the main shaft to run the ship's lights is a major fuel saver.",
    "cat": "SEEMP_CII",
    "id": "T17M_136"
  },
  {
    "q": "What role does propeller polishing play in the SEEMP?",
    "a": "A polished, mirror-smooth propeller creates less cavitation and drag in the water, translating the engine's power into thrust far more efficiently, thereby burning less fuel",
    "opts": ["A polished, mirror-smooth propeller creates less cavitation and drag in the water, translating the engine's power into thrust far more efficiently, thereby burning less fuel", "It prevents the propeller from rusting and leaking oil", "It increases the top speed to 30 knots", "It makes the ship look better in drydock"],
    "exp": "Even microscopic roughness or calcium deposits on a propeller drastically ruin its hydrodynamic bite. Divers polish the bronze blades underwater regularly to keep efficiency high.",
    "cat": "SEEMP_CII",
    "id": "T17M_137"
  },
  {
    "q": "Are there any exemptions allowed in the CII calculation for fuel burned during emergencies?",
    "a": "Yes, fuel consumed during severe emergencies (e.g., rescuing another ship, surviving a hurricane, or pirate evasion) can be deducted from the annual total if properly documented and approved by the Flag State",
    "opts": ["Fuel burned during nighttime is exempt", "No, every drop of fuel is counted strictly", "Only fuel burned in port is exempt", "Yes, fuel consumed during severe emergencies (e.g., rescuing another ship, surviving a hurricane, or pirate evasion) can be deducted from the annual total if properly documented and approved by the Flag State"],
    "exp": "The IMO doesn't want captains to refuse to save a drowning sailor because it will ruin their CII rating. If you run at 100% power to perform a rescue, you can legally subtract that fuel penalty.",
    "cat": "SEEMP_CII",
    "id": "T17M_138"
  },
  {
    "q": "What is 'Just In Time' (JIT) arrival, and how does it relate to the SEEMP?",
    "a": "It is a port coordination strategy where a ship slows down mid-ocean to arrive exactly when its berth is ready, rather than racing at full speed only to drop anchor and wait for days outside the port",
    "opts": ["It means ordering spare parts right before they break", "It means delivering cargo exactly on the contract date", "It is an engine timing adjustment", "It is a port coordination strategy where a ship slows down mid-ocean to arrive exactly when its berth is ready, rather than racing at full speed only to drop anchor and wait for days outside the port"],
    "exp": "Racing at 22 knots to a port, just to sit at anchor burning generator fuel for 3 days, is terribly inefficient. JIT allows the ship to slow steam at 14 knots and sail straight to the dock, saving massive amounts of fuel.",
    "cat": "SEEMP_CII",
    "id": "T17M_139"
  },
  {
    "q": "Why is the use of non-original, poor quality spare parts in the engine room detrimental to SEEMP goals?",
    "a": "Poor quality parts (e.g., cheap fuel injector nozzles) result in poor atomization and incomplete combustion, meaning the engine must burn more fuel to generate the same horsepower, destroying efficiency",
    "opts": ["Poor quality parts (e.g., cheap fuel injector nozzles) result in poor atomization and incomplete combustion, meaning the engine must burn more fuel to generate the same horsepower, destroying efficiency", "They cause the engine room to look messy", "They break and cause the ship to sink", "They lack the proper IMO certification stamps"],
    "exp": "An engine is a precision machine. If a cheap injector sprays fuel badly, 5% of the fuel goes unburned out the exhaust. That is a 5% drop in fuel efficiency, which will absolutely ruin the ship's CII rating.",
    "cat": "SEEMP_CII",
    "id": "T17M_140"
  },
  {
    "q": "What is the primary global limit for the sulphur content of marine fuel oil under MARPOL Annex VI, effective since January 1, 2020?",
    "a": "Maximum 0.50% m/m (mass by mass)",
    "opts": ["Maximum 3.50% m/m", "Maximum 0.50% m/m (mass by mass)", "Maximum 1.00% m/m", "Maximum 0.10% m/m"],
    "exp": "This was the massive 'IMO 2020' rule change. It slashed the global limit from 3.5% down to 0.5%, forcing the entire industry to either buy expensive Low-Sulphur Fuel Oil (VLSFO) or install scrubbers.",
    "cat": "ANNEX_VI",
    "id": "T17M_141"
  },
  {
    "q": "When operating inside a designated Emission Control Area (ECA), what is the strict limit for the sulphur content of fuel oil?",
    "a": "Maximum 0.10% m/m",
    "opts": ["Maximum 0.10% m/m", "Maximum 0.05% m/m", "Maximum 1.00% m/m", "Maximum 0.50% m/m"],
    "exp": "Inside ECAs (like the Baltic Sea or US Coast), the rules are drastically tighter to protect local populations from acid rain and asthma-inducing particulates. Ships usually switch to Marine Gas Oil (MGO) or Ultra-Low Sulphur Fuel (ULSFO) here.",
    "cat": "ANNEX_VI",
    "id": "T17M_142"
  },
  {
    "q": "If a ship wants to continue burning cheap, high-sulphur fuel (e.g., 3.5% sulphur) globally, what MUST it install?",
    "a": "An approved Exhaust Gas Cleaning System (EGCS), commonly known as a 'Scrubber', to wash the sulphur dioxide out of the exhaust gas before it leaves the funnel",
    "opts": ["A taller exhaust funnel", "A fuel homogenizer", "An approved Exhaust Gas Cleaning System (EGCS), commonly known as a 'Scrubber', to wash the sulphur dioxide out of the exhaust gas before it leaves the funnel", "A massive catalytic converter"],
    "exp": "MARPOL allows 'equivalent methods' of compliance. A scrubber sprays seawater or a chemical wash into the exhaust stack, capturing the SOx gas and turning it into a liquid sludge, ensuring the air leaving the stack is as clean as if the ship burned 0.5% fuel.",
    "cat": "ANNEX_VI",
    "id": "T17M_143"
  },
  {
    "q": "What is the difference between an 'Open-Loop' and 'Closed-Loop' Scrubber (EGCS)?",
    "a": "An Open-Loop system pumps seawater into the exhaust and dumps the acidic washwater straight back into the sea; a Closed-Loop system recirculates a chemical solution and retains the dirty sludge onboard for shore disposal",
    "opts": ["Open-Loop is used in port; Closed-Loop is used at sea", "Open-Loop scrubs NOx; Closed-Loop scrubs SOx", "Open-Loop relies on air cooling; Closed-Loop relies on water cooling", "An Open-Loop system pumps seawater into the exhaust and dumps the acidic washwater straight back into the sea; a Closed-Loop system recirculates a chemical solution and retains the dirty sludge onboard for shore disposal"],
    "exp": "Many ports now ban Open-Loop scrubbers because they take air pollution and turn it into water pollution, dumping heavy metals into the harbor. Closed-Loop systems are much more complex but environmentally safer for coastal waters.",
    "cat": "ANNEX_VI",
    "id": "T17M_144"
  },
  {
    "q": "What are ODS (Ozone Depleting Substances), and which common shipboard system uses them?",
    "a": "Chemicals that destroy the Earth's ozone layer (like CFCs and HCFCs); they are historically used as refrigerant gases in the ship's air conditioning and provision refrigeration plants",
    "opts": ["Chemicals that destroy the Earth's ozone layer (like CFCs and HCFCs); they are historically used as refrigerant gases in the ship's air conditioning and provision refrigeration plants", "Chemicals used to treat boiler water", "Chemicals used in the fire extinguishers", "Chemicals in the heavy fuel oil"],
    "exp": "R-12 and R-22 are infamous ODS gases. When released into the air, they drift to the stratosphere and break down ozone molecules, creating the 'ozone hole'.",
    "cat": "ANNEX_VI",
    "id": "T17M_145"
  },
  {
    "q": "Under MARPOL Annex VI, what is the strict rule regarding the maintenance of refrigeration systems containing ODS?",
    "a": "Deliberate venting or releasing of ODS into the atmosphere is strictly prohibited; all refrigerant must be recovered into certified cylinders using a recovery machine",
    "opts": ["The gas can be vented if the ship is more than 50 nm from land", "The gas can be mixed with water and pumped into the bilge", "The gas must be burned in the incinerator", "Deliberate venting or releasing of ODS into the atmosphere is strictly prohibited; all refrigerant must be recovered into certified cylinders using a recovery machine"],
    "exp": "If an ETO needs to replace a compressor valve, they cannot just open the pipe and let the R-22 hiss into the air. They must pump it into a bottle, do the work, and pump it back in. Venting is a crime.",
    "cat": "ANNEX_VI",
    "id": "T17M_146"
  },
  {
    "q": "What mandatory document must the ETO maintain regarding the ship's refrigeration systems?",
    "a": "The Ozone Depleting Substances (ODS) Record Book, logging every addition, recovery, or loss of refrigerant gas in exact kilograms",
    "opts": ["The Compressor Amperage Book", "The AC Temperature Log", "The Refrigerant Pressure Log", "The Ozone Depleting Substances (ODS) Record Book, logging every addition, recovery, or loss of refrigerant gas in exact kilograms"],
    "exp": "If you buy a 10 kg bottle of R-22 in Singapore, and 3 months later the bottle is empty, the ODS record book must explain exactly which AC unit that 10 kg went into. PSC inspectors track this carefully.",
    "cat": "ANNEX_VI",
    "id": "T17M_147"
  },
  {
    "q": "What is the status of Class I ODS (CFCs like R-11 and R-12) under MARPOL Annex VI?",
    "a": "They are completely BANNED on all new installations since January 1, 1996",
    "opts": ["They are still the most common refrigerant used today", "They are banned only in European waters", "They are completely BANNED on all new installations since January 1, 1996", "They are allowed if a special fee is paid"],
    "exp": "CFCs have the highest Ozone Depletion Potential (ODP). The maritime industry successfully purged them decades ago following the Montreal Protocol.",
    "cat": "ANNEX_VI",
    "id": "T17M_148"
  },
  {
    "q": "What is the status of Class II ODS (HCFCs like R-22) under MARPOL Annex VI?",
    "a": "New installations using HCFCs are prohibited since January 1, 2020; existing systems may continue to operate but recharging with virgin gas is heavily restricted globally",
    "opts": ["They are completely banned and must be removed from all ships immediately", "New installations using HCFCs are prohibited since January 1, 2020; existing systems may continue to operate but recharging with virgin gas is heavily restricted globally", "They are mandated for use in new ships to replace CFCs", "They are completely unregulated"],
    "exp": "R-22 is highly common on older ships. You don't have to rip the AC unit out, but you cannot buy a new ship with R-22, and buying replacement R-22 gas in most First World ports is now virtually impossible.",
    "cat": "ANNEX_VI",
    "id": "T17M_149"
  },
  {
    "q": "What type of refrigerants are modern ships transitioning to in order to comply with ODS bans?",
    "a": "HFCs (Hydrofluorocarbons) like R-134a or R-404A, which have an Ozone Depletion Potential (ODP) of exactly zero",
    "opts": ["CFC-12", "Nitrogen gas", "Pure Ammonia gas for all cabins", "HFCs (Hydrofluorocarbons) like R-134a or R-404A, which have an Ozone Depletion Potential (ODP) of exactly zero"],
    "exp": "HFCs do not hurt the ozone layer. However, they are powerful Greenhouse Gases (high GWP), meaning future regulations will likely target them to combat global warming, pushing the industry toward natural refrigerants like CO2.",
    "cat": "ANNEX_VI",
    "id": "T17M_150"
  },
  {
    "q": "MARPOL Annex VI regulates Nitrogen Oxides (NOx). How does a ship comply with the strict 'Tier III' NOx limits required in NOx Emission Control Areas (ECAs) for ships built after 2016?",
    "a": "By using exhaust after-treatment technology like Selective Catalytic Reduction (SCR), Exhaust Gas Recirculation (EGR), or running on alternative fuels like LNG",
    "opts": ["By running the engine at 50% speed", "By adding water to the fuel tanks", "By simply burning Marine Gas Oil instead of Heavy Fuel Oil", "By using exhaust after-treatment technology like Selective Catalytic Reduction (SCR), Exhaust Gas Recirculation (EGR), or running on alternative fuels like LNG"],
    "exp": "Tier III requires an 80% massive reduction in NOx compared to Tier I. You cannot achieve this just by tuning the engine. You must inject urea/ammonia into a massive catalyst chamber in the exhaust (SCR) to chemically destroy the NOx.",
    "cat": "ANNEX_VI",
    "id": "T17M_151"
  },
  {
    "q": "What is the 'NOx Technical File'?",
    "a": "A mandatory document supplied by the engine manufacturer detailing exactly how the engine must be tuned and what parts must be used to ensure it meets its certified NOx emission limits",
    "opts": ["A mandatory document supplied by the engine manufacturer detailing exactly how the engine must be tuned and what parts must be used to ensure it meets its certified NOx emission limits", "A certificate allowing the ship to bypass ECAs", "A log of the daily NOx emissions", "A list of the fuel consumed per day"],
    "exp": "If an engineer replaces a fuel injector with a cheap, non-approved part, the engine might spray fuel badly and produce twice the legal NOx. The Technical File forbids unapproved modifications.",
    "cat": "ANNEX_VI",
    "id": "T17M_152"
  },
  {
    "q": "Under MARPOL Annex VI, what materials are explicitly PROHIBITED from being burned in the ship's incinerator?",
    "a": "Electronic waste (E-waste), Polyvinyl chlorides (PVC), PCBs, garbage containing heavy metals, and exhaust gas cleaning system (scrubber) residues",
    "opts": ["Cardboard and paper", "Food waste and oily rags", "Sludge oil and dirty lube oil", "Electronic waste (E-waste), Polyvinyl chlorides (PVC), PCBs, garbage containing heavy metals, and exhaust gas cleaning system (scrubber) residues"],
    "exp": "Burning PVC plastics produces lethal, acidic hydrogen chloride gas and highly toxic dioxins. Burning an old computer motherboard (e-waste) releases heavy metals like lead and cadmium straight into the atmosphere.",
    "cat": "ANNEX_VI",
    "id": "T17M_153"
  },
  {
    "q": "What materials are legally ALLOWED to be burned in a shipboard incinerator?",
    "a": "Engine room sludge oil, dirty lube oil, oily rags, food waste, paper, cardboard, and non-toxic cargo residues",
    "opts": ["Engine room sludge oil, dirty lube oil, oily rags, food waste, paper, cardboard, and non-toxic cargo residues", "Glass and metal cans", "Lithium batteries and aerosol cans", "Noxious Liquid Substances (Annex II chemicals)"],
    "exp": "The primary purpose of the incinerator is to safely destroy the thick, oily sludge generated by the fuel purifiers, avoiding the cost of pumping it ashore.",
    "cat": "ANNEX_VI",
    "id": "T17M_154"
  },
  {
    "q": "What is the mandatory operating temperature range for an IMO-approved shipboard incinerator?",
    "a": "The combustion chamber must reach and maintain 850\u00b0C to 1200\u00b0C to ensure complete combustion and prevent the release of toxic, unburned soot",
    "opts": ["200\u00b0C to 400\u00b0C", "Over 2000\u00b0C", "The combustion chamber must reach and maintain 850\u00b0C to 1200\u00b0C to ensure complete combustion and prevent the release of toxic, unburned soot", "50\u00b0C to 100\u00b0C"],
    "exp": "If an incinerator runs too cool, it just smokes and releases toxic fumes. The automation system prevents sludge from being injected until the diesel burner pre-heats the chamber to at least 850\u00b0C.",
    "cat": "ANNEX_VI",
    "id": "T17M_155"
  },
  {
    "q": "What is VECS (Vapour Emission Control System) under Annex VI?",
    "a": "A system on crude oil tankers that captures highly toxic Volatile Organic Compounds (VOCs) displaced from cargo tanks during loading, returning them ashore instead of venting them to the atmosphere",
    "opts": ["A system on crude oil tankers that captures highly toxic Volatile Organic Compounds (VOCs) displaced from cargo tanks during loading, returning them ashore instead of venting them to the atmosphere", "A ventilation fan for the engine room", "An exhaust scrubber for the main engine", "A system that condenses steam back into water"],
    "exp": "When you pump 100,000 tons of crude oil into an empty tank, 100,000 tons of explosive, toxic fumes are pushed out. VECS pipes these fumes safely back to the shore terminal where they are burned or processed.",
    "cat": "ANNEX_VI",
    "id": "T17M_156"
  },
  {
    "q": "What is the ETO's primary role regarding the VECS on a tanker?",
    "a": "Maintaining the intrinsically safe Ex-rated sensors, high-level alarms, VOC detectors, and the electrically actuated vapor manifold valves on deck",
    "opts": ["Maintaining the intrinsically safe Ex-rated sensors, high-level alarms, VOC detectors, and the electrically actuated vapor manifold valves on deck", "Pumping the cargo oil", "Physically hooking the heavy hoses to the shore manifold", "Testing the chemical composition of the VOCs in a lab"],
    "exp": "VECS requires intense automation. If a tank overfills and liquid crude oil shoots down the vapor return pipe, it will blow up the shore facility. The ETO maintains the radar level sensors and 98% high-level trip alarms that prevent this.",
    "cat": "ANNEX_VI",
    "id": "T17M_157"
  },
  {
    "q": "What is the IAPP Certificate?",
    "a": "The International Air Pollution Prevention Certificate; issued by the Flag State to prove the ship complies with all MARPOL Annex VI regulations (SOx, NOx, ODS)",
    "opts": ["The International Agreement on Plastic Pollution", "The International Air Pollution Prevention Certificate; issued by the Flag State to prove the ship complies with all MARPOL Annex VI regulations (SOx, NOx, ODS)", "The Independent Audit of Port Pollution", "The Internal Assessment of Power Production"],
    "exp": "If PSC boards a ship and finds the ODS logbook is missing or the fuel contains 3.5% sulphur without a scrubber, they invalidate the IAPP Certificate, detaining the ship immediately.",
    "cat": "ANNEX_VI",
    "id": "T17M_158"
  },
  {
    "q": "Under the new updated MARPOL Annex VI regulations, what explicit statement regarding Fuel Flashpoint MUST be included on the Bunker Delivery Note (BDN)?",
    "a": "A statement confirming the fuel flashpoint was measured at or above 70\u00b0C, OR if it is below 70\u00b0C, the actual measured flashpoint value must be explicitly declared",
    "opts": ["A statement confirming the fuel flashpoint was measured at or above 70\u00b0C, OR if it is below 70\u00b0C, the actual measured flashpoint value must be explicitly declared", "A statement confirming the fuel is non-flammable", "A statement confirming the fuel will not freeze", "A statement of the fuel's exact sulfur content only"],
    "exp": "SOLAS strictly bans fuel with a flashpoint below 60\u00b0C to prevent engine room explosions. Refineries were selling cheap, unstable fuel. This new law forces the supplier to legally swear in writing that the fuel is above the explosive danger zone.",
    "cat": "ANNEX_VI",
    "id": "T17M_159"
  },
  {
    "q": "If a ship is bunkering fuel and the Bunker Delivery Note (BDN) declares a flashpoint of 55\u00b0C, what MUST the Chief Engineer do?",
    "a": "Refuse to load the fuel immediately, stop the bunkering operation, and report the supplier to the Port State and Flag State, as loading fuel below 60\u00b0C is a massive safety and MARPOL violation",
    "opts": ["Load the fuel but keep it in a special cold tank", "Refuse to load the fuel immediately, stop the bunkering operation, and report the supplier to the Port State and Flag State, as loading fuel below 60\u00b0C is a massive safety and MARPOL violation", "Mix it with heavy oil to raise the flashpoint", "Load it, but log the event in the Oil Record Book"],
    "exp": "Fuel flashing at 55\u00b0C means the normal heat of a tropical engine room could cause the fuel tank vents to spew highly explosive vapor. A single spark would blow the ship in half.",
    "cat": "ANNEX_VI",
    "id": "T17M_160"
  },
  {
    "q": "What is a FONAR under MARPOL Annex VI?",
    "a": "Fuel Oil Non-Availability Report; a formal document filed by the Master if the ship is forced to burn non-compliant high-sulphur fuel because legal low-sulphur fuel was physically unavailable at the bunkering port",
    "opts": ["Fire Operation Notification and Reporting", "Fuel Oil Non-Availability Report; a formal document filed by the Master if the ship is forced to burn non-compliant high-sulphur fuel because legal low-sulphur fuel was physically unavailable at the bunkering port", "First Order Notification of Air Release", "Federal Oil and Navigation Assessment Record"],
    "exp": "You can't just burn illegal fuel and say 'we couldn't buy the good stuff'. You must prove you tried to buy it, prove no one had it, and file the FONAR with the authorities BEFORE you arrive at your next port.",
    "cat": "ANNEX_VI",
    "id": "T17M_161"
  },
  {
    "q": "How long must the Bunker Delivery Note (BDN) and the physical bunker fuel sample be kept onboard?",
    "a": "The BDN must be retained for 3 years; the physical fuel sample must be retained for at least 12 months, or until the fuel is substantially consumed, whichever is longer",
    "opts": ["The BDN must be retained for 3 years; the physical fuel sample must be retained for at least 12 months, or until the fuel is substantially consumed, whichever is longer", "1 year for both", "5 years for both", "They are discarded immediately after bunkering is complete"],
    "exp": "If PSC boards a ship and measures the exhaust sulfur to be too high, they will ask for the sealed fuel sample from 6 months ago. They test it in a lab to see if the supplier lied, or if the ship illegally mixed fuels.",
    "cat": "ANNEX_VI",
    "id": "T17M_162"
  },
  {
    "q": "What does a Continuous Emission Monitoring System (CEMS) do on a ship fitted with a scrubber?",
    "a": "It continuously samples the exhaust gas leaving the funnel, using infrared or UV analyzers to mathematically prove the SOx and CO2 ratio remains below the legal MARPOL equivalent limits",
    "opts": ["It measures the temperature of the funnel", "It measures the speed of the exhaust gas", "It filters the black soot out of the exhaust", "It continuously samples the exhaust gas leaving the funnel, using infrared or UV analyzers to mathematically prove the SOx and CO2 ratio remains below the legal MARPOL equivalent limits"],
    "exp": "If you burn 3.5% fuel, the CEMS acts as the digital police officer. It records a permanent log proving to PSC that your scrubber actually washed the 3.5% sulfur down to a 0.5% equivalent before the smoke hit the sky.",
    "cat": "ANNEX_VI",
    "id": "T17M_163"
  },
  {
    "q": "Why is the use of HFO (Heavy Fuel Oil) banned entirely when a ship operates in the Antarctic area?",
    "a": "To protect the pristine polar environment; HFO is thick and highly persistent, meaning if spilled in freezing water, it will never break down and is impossible to clean up",
    "opts": ["Because penguins are allergic to the sulfur fumes", "Because the polar magnetic fields disrupt HFO combustion", "Because HFO freezes solid in the cold temperatures", "To protect the pristine polar environment; HFO is thick and highly persistent, meaning if spilled in freezing water, it will never break down and is impossible to clean up"],
    "exp": "MARPOL has special rules for Antarctica. Ships cannot even CARRY heavy fuel oil there, let alone burn it. They must switch to light marine diesel which evaporates and breaks down much faster if an accident occurs.",
    "cat": "ANNEX_VI",
    "id": "T17M_164"
  },
  {
    "q": "When a ship sails into an ECA (e.g., crossing from the open Atlantic into the North Sea), what specific action must the engineers take and log?",
    "a": "They must perform a fuel changeover (from 0.5% fuel to 0.1% fuel), and precisely log the date, time, and exact GPS coordinates when the fuel system was completely flushed and running purely on compliant fuel",
    "opts": ["They must shut down the main engine and drift into the zone", "They must speed up to cross the zone faster", "They must turn off the incinerator permanently", "They must perform a fuel changeover (from 0.5% fuel to 0.1% fuel), and precisely log the date, time, and exact GPS coordinates when the fuel system was completely flushed and running purely on compliant fuel"],
    "exp": "Changing fuel isn't instant. It takes hours to flush the thick, high-sulfur oil out of the miles of piping and heaters. The engineers must start the changeover early so that at the exact moment they cross the GPS line into the ECA, 100% clean fuel is hitting the injectors.",
    "cat": "ANNEX_VI",
    "id": "T17M_165"
  },
  {
    "q": "How does MARPOL Annex VI regulate the quality of fuel oil delivered to the ship (Regulation 18)?",
    "a": "The fuel must be free from inorganic acid, must not include any added chemical wastes, and must not jeopardize the safety of ships or adversely affect machinery performance",
    "opts": ["The fuel must be free from inorganic acid, must not include any added chemical wastes, and must not jeopardize the safety of ships or adversely affect machinery performance", "The fuel must be distilled directly from seawater", "The fuel must be blended with at least 10% bio-fuel", "The fuel must be dyed a specific color for identification"],
    "exp": "Historically, shady refineries were secretly dumping toxic industrial chemical waste into marine bunker fuel. MARPOL forces suppliers to guarantee the fuel is pure petroleum product, not a toxic soup.",
    "cat": "ANNEX_VI",
    "id": "T17M_166"
  },
  {
    "q": "What must be included in the 'Garbage Record Book' whenever the incinerator is operated?",
    "a": "The start time and date, the stop time, the position of the ship at start and stop, and the estimated amount of garbage/sludge incinerated in cubic meters",
    "opts": ["The exact temperature of the exhaust stack", "The start time and date, the stop time, the position of the ship at start and stop, and the estimated amount of garbage/sludge incinerated in cubic meters", "The name of the engineer who cleaned the incinerator", "A photograph of the ashes"],
    "exp": "The incinerator destroys evidence of waste. Therefore, its use must be strictly accounted for in the logbooks to prove the ship isn't burning illegal plastics or falsifying sludge disposal records.",
    "cat": "ANNEX_VI",
    "id": "T17M_167"
  },
  {
    "q": "What is the primary electrical maintenance task for an ETO on a Marine Incinerator?",
    "a": "Maintaining the safety interlocks (e.g., door lock solenoid, high temp trips, draft fan DP switches) and ensuring the burner management flame scanner (UV sensor) is clean and functional",
    "opts": ["Filtering the heavy fuel oil before it enters the burner", "Replacing the refractory bricks inside the chamber", "Maintaining the safety interlocks (e.g., door lock solenoid, high temp trips, draft fan DP switches) and ensuring the burner management flame scanner (UV sensor) is clean and functional", "Manually adjusting the air-to-fuel ratio during operation"],
    "exp": "An incinerator is just a small, intense boiler. If the door opens while it's firing at 1000\u00b0C, the operator will be incinerated. The ETO ensures the electronic door locks and purge timers work flawlessly.",
    "cat": "ANNEX_VI",
    "id": "T17M_168"
  },
  {
    "q": "What happens if a ship fails to maintain its ODS Record Book?",
    "a": "It is a violation of MARPOL Annex VI; Port State Control can issue a deficiency or detain the vessel until the records are brought up to date and accounted for",
    "opts": ["The ETO is fired immediately", "Nothing, provided no gas was actually leaked", "It is a violation of MARPOL Annex VI; Port State Control can issue a deficiency or detain the vessel until the records are brought up to date and accounted for", "The ship is forced to replace all its air conditioning units"],
    "exp": "Paperwork is proof. If you buy refrigerant but don't log where it went, the law assumes you illegally vented it into the atmosphere. Proper logging shields the ship from massive fines.",
    "cat": "ANNEX_VI",
    "id": "T17M_169"
  },
  {
    "q": "Why is it important for the ETO to know the GWP (Global Warming Potential) of a refrigerant?",
    "a": "While HFCs (like R-134a) have zero ODP (ozone depletion), they have immense GWP (thousands of times worse than CO2); upcoming environmental regulations will tax or ban high-GWP gases",
    "opts": ["Because high GWP gases require 440V to compress", "While HFCs (like R-134a) have zero ODP (ozone depletion), they have immense GWP (thousands of times worse than CO2); upcoming environmental regulations will tax or ban high-GWP gases", "Because GWP determines the cooling capacity of the compressor", "Because high GWP gases are highly flammable and explosive"],
    "exp": "We solved the ozone hole by switching to HFCs. But 1 kg of R-404a traps as much heat as 3,900 kg of CO2. The industry is now shifting toward 'Natural' refrigerants (like Ammonia or CO2) to stop global warming.",
    "cat": "ANNEX_VI",
    "id": "T17M_170"
  }
]);
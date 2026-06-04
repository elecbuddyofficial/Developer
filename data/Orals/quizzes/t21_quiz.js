window.loadQuizzes("T21_LSA", [
  {
    "q": "Fundamental difference between EPIRB and SART function and frequency?",
    "a": "EPIRB: global distress alert to satellites on 406 MHz; SART: local homing for rescue vessels responding to X-band radar pulses on 9 GHz",
    "opts": [
      "EPIRB transmits voice on VHF Ch 16; SART broadcasts AIS on 161.975 MHz",
      "EPIRB guides helicopters locally on 9 GHz; SART sends satellite texts via Inmarsat-C",
      "Both transmit 12 dots on rescuing ship's 3 GHz S-band radar \u2014 no difference",
      "EPIRB: global distress alert to satellites on 406 MHz; SART: local homing for rescue vessels responding to X-band radar pulses on 9 GHz"
    ],
    "exp": "EPIRB = global alerting system (406 MHz to COSPAS-SARSAT). Transmits position and vessel ID globally. SART = local homing device (9 GHz X-band). Responds to radar pulses painting 12 dots on rescuer's radar screen for precise location. Complementary systems \u2014 different range, different purpose.",
    "cat": "LSA",
    "id": "T21_001"
  },
  {
    "q": "SOLAS minimum capacity for lifeboat 24V DC starting battery?",
    "a": "Sufficient for 6 consecutive cold engine starts (30-second intervals) plus 30 minutes power for all electrical consumers",
    "opts": [
      "Run engine 4 hours while powering searchlight",
      "3 cold starts and VHF standby for 96 hours",
      "Provide 100 Ah to run emergency bilge pump indefinitely",
      "Sufficient for 6 consecutive cold engine starts (30-second intervals) plus 30 minutes power for all electrical consumers"
    ],
    "exp": "SOLAS III: lifeboat battery must provide 6 consecutive cold cranking attempts at 30-second intervals (ensuring multiple start attempts in cold weather) PLUS 30 minutes for searchlight, interior lights, and VHF radio. Annual inspection: check electrolyte, SG, terminals, and verify cranking capacity.",
    "cat": "LSA",
    "id": "T21_002"
  },
  {
    "q": "Why is CCA (Cold Cranking Amps) the critical battery specification for lifeboats?",
    "a": "CCA = maximum current deliverable for 30 seconds at -18\u00b0C while maintaining minimum voltage \u2014 ensures cold-weather engine starting",
    "opts": [
      "CCA = Continuous Charge Acceptance for fast trickle charging",
      "CCA = Constant Current Application for running 50W searchlight",
      "CCA = Cathodic Corrosion Allowance for saltwater terminal resistance",
      "CCA = maximum current deliverable for 30 seconds at -18\u00b0C while maintaining minimum voltage \u2014 ensures cold-weather engine starting"
    ],
    "exp": "Cold temperatures increase battery internal resistance, drastically reducing available starting current. CCA specifies the battery's ability to crank a cold engine in worst-case conditions (-18\u00b0C). Critical for Arctic and winter operations where lifeboat must start reliably in emergency.",
    "cat": "LSA",
    "id": "T21_003"
  },
  {
    "q": "EEBD purpose and air duration?",
    "a": "10 minutes of breathable air for emergency ESCAPE ONLY \u2014 not for firefighting or enclosed space entry",
    "opts": [
      "30 minutes for firefighting in small electrical fires",
      "60 minutes for enclosed space routine inspections",
      "15 minutes for two persons to share during freon leak",
      "10 minutes of breathable air for emergency ESCAPE ONLY \u2014 not for firefighting or enclosed space entry"
    ],
    "exp": "EEBD = Emergency Escape Breathing Device. Hood + compressed air cylinder. 10 minutes only \u2014 for rapid escape from smoke, toxic gases, or oxygen-deficient atmosphere. No thermal protection. Never use for firefighting (no face seal protection) or enclosed space entry (insufficient duration and no O2 monitoring).",
    "cat": "LSA",
    "id": "T21_004"
  },
  {
    "q": "Why does battery room require dedicated exhaust ventilation (6-12 air changes/hour)?",
    "a": "Lead-acid and Ni-Cd batteries generate highly explosive hydrogen gas during final charging stages \u2014 must be ventilated",
    "opts": [
      "Cools UPS inverters generating heat during blackout",
      "Prevents Freon accumulation from nearby AC compressors",
      "Reduces humidity to maintain battery CCA rating",
      "Lead-acid and Ni-Cd batteries generate highly explosive hydrogen gas during final charging stages \u2014 must be ventilated"
    ],
    "exp": "Electrolysis at end of charge cycle splits water in electrolyte \u2192 hydrogen gas released. H2 is highly explosive (LEL 4%) and lighter than air \u2192 accumulates at ceiling. Battery room must have exhaust fan drawing from CEILING level continuously. Fan must be Ex-rated (intrinsically safe or flameproof). Extraction rate 6-12 air changes per hour.",
    "cat": "LSA",
    "id": "T21_005"
  },
  {
    "q": "What is the Cold Cranking Amps (CCA) rating of a battery, and why is it critical for lifeboat diesel engines?",
    "a": "CCA is the maximum current a battery can deliver for 30 seconds at -18 degrees C while maintaining at least 1.2V per cell \u2014 critical because lifeboat engines must start reliably in Arctic conditions",
    "opts": [
      "CCA is the maximum current a battery can deliver for 30 seconds at -18 degrees C while maintaining at least 1.2V per cell \u2014 critical because lifeboat engines must start reliably in Arctic conditions",
      "CCA is the maximum continuous charging current a battery can accept without exceeding its thermal limit",
      "CCA is the total amp-hour capacity at a 20-hour discharge rate at 25 degrees C \u2014 used only for UPS battery sizing",
      "CCA is the cable current rating of the starter motor cable \u2014 unrelated to the battery itself"
    ],
    "exp": "At -18 deg C, battery internal resistance increases dramatically. The CCA rating confirms the battery can deliver the high starting current surge (6-8x starter motor FLC) needed to crank a cold diesel engine in extreme conditions.",
    "cat": "Battery",
    "id": "T21_006"
  },
  {
    "q": "A new lifeboat battery arrives onboard. What is the first action the ETO must take during commissioning?",
    "a": "Check all documentation and certificates, verify voltage and Ah capacity match the lifeboat engine manufacturer's specification, and inspect physical condition for transit damage",
    "opts": [
      "Immediately connect the battery to the lifeboat starter motor and perform a cold crank test",
      "Check all documentation and certificates, verify voltage and Ah capacity match the lifeboat engine manufacturer's specification, and inspect physical condition for transit damage",
      "Paint the battery terminals with copper grease and measure internal resistance with a standard multimeter",
      "Charge the battery at maximum rated current for 24 hours before any testing"
    ],
    "exp": "Battery commissioning follows: verify documentation \u2192 physical inspection \u2192 measure OCV/SG \u2192 initial charge if required \u2192 install with positive terminal first \u2192 connect trickle charger \u2192 test. Never assume a new battery is fully charged.",
    "cat": "Battery",
    "id": "T21_007"
  },
  {
    "q": "What is the correct sequence for connecting a new lifeboat battery to prevent sparking and potential hydrogen gas ignition?",
    "a": "Connect the POSITIVE terminal first, then the NEGATIVE terminal \u2014 disconnect in reverse order (negative first) when removing",
    "opts": [
      "The sequence does not matter as long as both connections are made within 5 seconds of each other",
      "Connect the POSITIVE terminal first, then the NEGATIVE terminal \u2014 disconnect in reverse order (negative first) when removing",
      "Connect both terminals simultaneously using insulated tools to avoid any voltage differential",
      "Connect the NEGATIVE terminal first to establish earth continuity, then the POSITIVE terminal"
    ],
    "exp": "Positive first minimises arc energy if the spanner accidentally contacts the hull (which is negative earth). During removal, negative first ensures the positive is still earthed if a tool touches the hull.",
    "cat": "Battery",
    "id": "T21_008"
  },
  {
    "q": "How many consecutive cold starts must a lifeboat engine be capable of performing to comply with SOLAS LSA Code requirements?",
    "a": "6 consecutive cold starts within 2 minutes at an ambient temperature down to -15 degrees C",
    "opts": [
      "2 consecutive cold starts \u2014 sufficient to demonstrate starting reliability",
      "6 consecutive cold starts within 2 minutes at an ambient temperature down to -15 degrees C",
      "10 consecutive cold starts \u2014 the more demanding IACS unified requirement",
      "The engine must start within 30 seconds on the first attempt \u2014 subsequent attempts are not counted"
    ],
    "exp": "SOLAS LSA Code Chapter IV requires the lifeboat engine to start and run within 2 minutes from cold in both normal and inverted positions. Six consecutive start capability demonstrates robust battery and starter motor condition.",
    "cat": "Lifeboat",
    "id": "T21_009"
  },
  {
    "q": "What is the mandatory SOLAS requirement for the lifeboat engine regarding starting in the inverted position?",
    "a": "The engine must be capable of running in the inverted position \u2014 ensuring the lifeboat can self-right and restore engine operation after capsizing",
    "opts": [
      "Engines are required to stop automatically when the lifeboat inclines beyond 20 degrees to prevent flooding through the exhaust",
      "The engine must be capable of running in the inverted position \u2014 ensuring the lifeboat can self-right and restore engine operation after capsizing",
      "The lifeboat is not required to operate when inverted \u2014 evacuation into a life raft is required if the lifeboat capsizes",
      "The engine must be shut down before the lifeboat can be inverted \u2014 a separate hand-cranked generator provides power during righting"
    ],
    "exp": "SOLAS LSA Code requires totally enclosed lifeboats to self-right when capsized AND the engine to restart. The fuel and lubrication systems must function in the inverted position. ETO tests this during drills.",
    "cat": "Lifeboat",
    "id": "T21_010"
  },
  {
    "q": "What are the correct SOLAS minimum quantities of parachute rocket flares, hand flares, and buoyant smoke signals required in each lifeboat?",
    "a": "4 parachute rocket flares, 6 hand flares, and 2 buoyant smoke signals per lifeboat",
    "opts": [
      "4 parachute rocket flares, 6 hand flares, and 2 buoyant smoke signals per lifeboat",
      "6 parachute rocket flares, 4 hand flares, and 6 buoyant smoke signals per lifeboat",
      "2 parachute rocket flares, 2 hand flares, and 4 buoyant smoke signals per lifeboat",
      "12 parachute rocket flares, 4 hand flares, and 2 buoyant smoke signals per lifeboat"
    ],
    "exp": "SOLAS LSA Code 4.4.8: Each lifeboat requires 4 rocket parachute flares (range 40km, burns 40s), 6 hand flares (range 3km, burns 60s), and 2 buoyant smoke signals (burns 3min). All have 3-year expiry.",
    "cat": "Pyro",
    "id": "T21_011"
  },
  {
    "q": "What is the maximum shelf life of survival craft pyrotechnics before they must be landed ashore and replaced?",
    "a": "3 years from the date of manufacture stamped on the device",
    "opts": [
      "Pyrotechnics have no expiry \u2014 they are replaced only if the primer or ignition cord shows visible damage",
      "5 years from the date of manufacture \u2014 identical to the liferaft service interval",
      "3 years from the date of manufacture stamped on the device",
      "10 years if stored in a cool dry location below 20 degrees C"
    ],
    "exp": "All SOLAS pyrotechnics (parachute flares, hand flares, smoke signals, line-throwing apparatus) have a strict 3-year expiry. Expired devices must be landed ashore to an approved facility \u2014 they must NEVER be discharged over the sea or incinerated onboard.",
    "cat": "Pyro",
    "id": "T21_012"
  },
  {
    "q": "A parachute rocket flare burns for a minimum of how long, and to what minimum altitude does it reach?",
    "a": "Burns for minimum 40 seconds at a minimum altitude of 300 metres",
    "opts": [
      "Burns for minimum 5 minutes at a minimum altitude of 500 metres",
      "Burns for minimum 40 seconds at a minimum altitude of 300 metres",
      "Burns for minimum 60 seconds at a minimum altitude of 100 metres",
      "Burns for minimum 20 seconds at a minimum altitude of 1000 metres"
    ],
    "exp": "SOLAS LSA Code requires parachute flares to: reach minimum 300m altitude, burn minimum 40 seconds bright red light. The parachute slows descent for maximum visibility. Effective range approximately 40 km in clear conditions.",
    "cat": "Pyro",
    "id": "T21_013"
  },
  {
    "q": "Under SOLAS LSA Code requirements, what minimum continuous output power must the lifeboat searchlight deliver and for how long?",
    "a": "A minimum of 55W searchlight providing 180 metres visibility for a minimum of 3 hours",
    "opts": [
      "A minimum of 100W searchlight providing 500 metres visibility for 1 hour",
      "A minimum of 10W LED light providing 50 metres visibility for 24 hours",
      "A minimum of 55W searchlight providing 180 metres visibility for a minimum of 3 hours",
      "The searchlight specification is not mandated by SOLAS \u2014 it is determined by the shipyard at time of construction"
    ],
    "exp": "SOLAS LSA Code requires the lifeboat searchlight to illuminate a light-coloured object 18m wide at 180m range. Typically 55-100W with 3 hours of operational duration from the lifeboat battery.",
    "cat": "Lifeboat",
    "id": "T21_014"
  },
  {
    "q": "What is the mandatory minimum period that the battery room ventilation system must operate continuously before and during battery charging?",
    "a": "Ventilation must run continuously during charging and for at least 30 minutes AFTER charging is complete to clear residual hydrogen gas",
    "opts": [
      "Ventilation must run continuously during charging and for at least 30 minutes AFTER charging is complete to clear residual hydrogen gas",
      "Ventilation is only required during the initial 15-minute charging peak current phase",
      "Battery room ventilation must run at maximum capacity for 24 hours before any hot work in adjacent spaces",
      "Ventilation only needs to be activated manually when battery SG exceeds 1.250"
    ],
    "exp": "Lead-acid batteries produce hydrogen gas (H2) during charging \u2014 explosive between 4% and 75% LEL. Ventilation must remove H2 during charging AND for 30 minutes after, allowing residual H2 to clear before the room is entered or electrical equipment is switched.",
    "cat": "BattRoom",
    "id": "T21_015"
  },
  {
    "q": "What are the two key electrical safety requirements for all lighting fixtures installed in a battery room?",
    "a": "Must be Ex-rated (Ex d or Ex e) for Gas Group IIC (hydrogen) and the switch must be located OUTSIDE the battery room",
    "opts": [
      "Must be wired in parallel with a dedicated battery room circuit breaker rated at twice the total lamp wattage",
      "Must be Ex-rated (Ex d or Ex e) for Gas Group IIC (hydrogen) and the switch must be located OUTSIDE the battery room",
      "Must use LED technology with a minimum 50,000-hour rated lifespan and be sealed to IP65",
      "Must be connected to the emergency switchboard and have a local isolation switch inside the room"
    ],
    "exp": "Battery rooms generate H2 (Gas Group IIC \u2014 most difficult to protect against). All lighting must be Ex IIC rated. The switch must be outside the room to prevent switching arcs from igniting H2 at the highest concentration point near the ceiling.",
    "cat": "BattRoom",
    "id": "T21_016"
  },
  {
    "q": "What is the minimum number of air changes per hour required for forced ventilation in a battery room under SOLAS requirements?",
    "a": "Minimum 6 air changes per hour with exhaust taken from the highest point (ceiling) of the battery room",
    "opts": [
      "2 air changes per hour \u2014 sufficient to dilute any H2 below 1% LEL",
      "30 air changes per hour \u2014 the same standard as a cargo pump room",
      "Minimum 6 air changes per hour with exhaust taken from the highest point (ceiling) of the battery room",
      "Air changes are not specified \u2014 only a continuous air flow across the battery top surface is required"
    ],
    "exp": "SOLAS requires minimum 6 air changes/hour for battery rooms. Extraction must be from the ceiling (highest point) because hydrogen is lighter than air and accumulates at the top. Intake air is introduced low.",
    "cat": "BattRoom",
    "id": "T21_017"
  },
  {
    "q": "What maximum lowering speed for survival craft davit systems was mandated by the 2026 LSA Code amendments?",
    "a": "Maximum 1.3 metres per second (78 metres per minute) to prevent hard water impacts and accidental hook release",
    "opts": [
      "Maximum 0.5 metres per second \u2014 a significant reduction to allow crew to board during lowering",
      "Maximum 1.3 metres per second (78 metres per minute) to prevent hard water impacts and accidental hook release",
      "No maximum speed is specified \u2014 speed is determined by the ship's maintenance officer based on sea conditions",
      "Maximum 3.0 metres per second \u2014 the original SOLAS speed limit unchanged by 2026 amendments"
    ],
    "exp": "The 2026 LSA Code amendment (IMO MSC.455(100)) caps survival craft lowering at 1.3 m/s. Higher speeds were linked to accidents where boats hit the water hard enough to activate on-load release hooks prematurely.",
    "cat": "LSA2026",
    "id": "T21_018"
  },
  {
    "q": "What specific design requirement for single-fall on-load release hooks was introduced by the 2026 LSA amendments?",
    "a": "Single-fall hooks must be engineered so they cannot support the craft's weight unless the locking mechanism is 100% correctly reset \u2014 preventing accidental drops from partial hook engagement",
    "opts": [
      "Single-fall hooks must be coated with a radar-reflective paint to improve recovery operations",
      "Single-fall hooks must now incorporate a secondary manual pin lock requiring tool removal before any release",
      "Single-fall hooks must be engineered so they cannot support the craft's weight unless the locking mechanism is 100% correctly reset \u2014 preventing accidental drops from partial hook engagement",
      "Single-fall hooks must be replaced with double-fall hook systems on all vessels to prevent single-point failure"
    ],
    "exp": "Previous accidents occurred because partially engaged hooks appeared set but released under load. The 2026 amendment requires a positive locking design where the hook physically cannot bear load unless fully and correctly reset. ETO verifies this at quarterly drills.",
    "cat": "LSA2026",
    "id": "T21_019"
  },
  {
    "q": "What buoyancy requirement do new lifejackets procured after 1 January 2026 need to demonstrate?",
    "a": "Minimum 150 Newtons buoyancy, 24-hour immersion retention, and self-righting of an unconscious person within 5 seconds",
    "opts": [
      "Minimum 275 Newtons buoyancy (offshore specification) regardless of vessel type",
      "Buoyancy testing requirements have not changed \u2014 the 2026 amendment only covers lifeboat hook design",
      "Minimum 100 Newtons buoyancy and self-righting within 30 seconds",
      "Minimum 150 Newtons buoyancy, 24-hour immersion retention, and self-righting of an unconscious person within 5 seconds"
    ],
    "exp": "2026 LSA amendments require new lifejackets to provide minimum 150N, retain buoyancy after 24-hour immersion test, and self-right an unconscious adult within 5 seconds. Existing stock onboard remains valid until its marked expiry date.",
    "cat": "LSA2026",
    "id": "T21_020"
  },
  {
    "q": "Under the January 2029 LSA Code amendment for totally enclosed lifeboats, what ventilation rate must be independently provided?",
    "a": "Minimum 5 cubic metres per hour per person, powered independently of the main propulsion engine",
    "opts": [
      "Minimum 2 cubic metres per hour per person \u2014 sufficient to maintain safe O2 levels for 24 hours",
      "Minimum 5 cubic metres per hour per person, powered independently of the main propulsion engine",
      "Minimum 20 air changes per hour \u2014 identical to the cargo pump room standard",
      "No independent ventilation is required \u2014 the engine room ventilation system is integrated into the lifeboat"
    ],
    "exp": "The 2029 LSA amendment requires totally enclosed lifeboats to have a dedicated ventilation fan (min 5 m3/hr/person) powered by a separate battery independent of the propulsion engine. This prevents CO2 buildup and heat stress during extended time in the capsule.",
    "cat": "LSA2026",
    "id": "T21_021"
  },
  {
    "q": "What is the purpose of the hydrostatic release unit (HRU) on an inflatable life raft?",
    "a": "The HRU automatically releases and inflates the life raft when the ship sinks to a depth of 2-4 metres \u2014 ensuring the life raft floats free even if crew cannot deploy it manually",
    "opts": [
      "The HRU maintains the inflation pressure inside the life raft canister during storage in tropical conditions",
      "The HRU automatically releases and inflates the life raft when the ship sinks to a depth of 2-4 metres \u2014 ensuring the life raft floats free even if crew cannot deploy it manually",
      "The HRU connects the life raft lanyard to the ship's guardrail, preventing it from being lost overboard in rough weather",
      "The HRU is a hydrostatic test device used at the annual service to verify the canister pressure is within limits"
    ],
    "exp": "When the ship sinks 2-4m, water pressure activates the HRU knife to cut the securing lashing. The buoyancy of the life raft pulls the painter until CO2 activates and the canister inflates, floating free of the sinking vessel.",
    "cat": "Liferaft",
    "id": "T21_022"
  },
  {
    "q": "How often must inflatable life rafts be serviced by an approved service station under SOLAS requirements?",
    "a": "Every 12 months \u2014 or within 5 years of the manufactured date on first service",
    "opts": [
      "Every 5 years \u2014 the same interval as the lifeboat annual survey",
      "Every 12 months \u2014 or within 5 years of the manufactured date on first service",
      "Every 3 years \u2014 the same interval as pyrotechnic replacement",
      "Every 2 years if stored below deck in a controlled temperature environment"
    ],
    "exp": "SOLAS LSA Code and MSC/Circ.1285 require inflatable life rafts to be serviced annually by an approved station. The service interval starts from the date of manufacture and cannot be extended even if the raft has never been deployed.",
    "cat": "Liferaft",
    "id": "T21_023"
  },
  {
    "q": "What is the purpose of an Immersion Suit (Survival Suit) and what is its minimum thermal protection requirement?",
    "a": "It provides thermal and buoyancy protection \u2014 must maintain core body temperature above 35 degrees C after 6 hours in water at 0-2 degrees C",
    "opts": [
      "It is a high-visibility suit for helicopter rescue \u2014 no thermal protection is required by SOLAS",
      "It provides flame protection only \u2014 designed to allow survival for 30 minutes in burning fuel on the water surface",
      "It must maintain core temperature above 37 degrees C for 24 hours in water at 20 degrees C",
      "It provides thermal and buoyancy protection \u2014 must maintain core body temperature above 35 degrees C after 6 hours in water at 0-2 degrees C"
    ],
    "exp": "SOLAS LSA Code: immersion suits must limit body core temperature drop to less than 2 degrees C after 6 hours in water of 0-2 degrees C. They must also provide 70N minimum buoyancy and self-righting capability.",
    "cat": "Lifeboat",
    "id": "T21_024"
  },
  {
    "q": "The EPIRB (Emergency Position Indicating Radio Beacon) must automatically activate when submerged to what depth?",
    "a": "Activates automatically when submerged to 1-4 metres depth via hydrostatic release \u2014 transmits on 406 MHz to COSPAS-SARSAT",
    "opts": [
      "Activates automatically when temperature drops below 0 degrees C \u2014 indicating immersion in polar waters",
      "Activates automatically when submerged to 1-4 metres depth via hydrostatic release \u2014 transmits on 406 MHz to COSPAS-SARSAT",
      "Activates only when manually triggered by a crew member from the bridge GMDSS panel",
      "Activates automatically when the vessel's roll exceeds 45 degrees for more than 10 consecutive seconds"
    ],
    "exp": "EPIRB HRU activates the beacon at 1-4m submersion. The beacon transmits on 406 MHz (COSPAS-SARSAT satellite detection) and 121.5 MHz (homing). Class A automatically deploys; Class B must be manually deployed or activated.",
    "cat": "Liferaft",
    "id": "T21_025"
  },
  {
    "q": "What is the standard supplied voltage for lifeboat electrical equipment?",
    "a": "24V DC",
    "opts": [
      "24V DC",
      "220V AC",
      "110V AC",
      "12V DC"
    ],
    "exp": "24V DC is the standard voltage for lifeboat electrical equipment. The onboard battery supplies this voltage to the starting motor, searchlight, interior lighting, and communication devices.",
    "cat": "Lifeboat",
    "id": "T21_026"
  },
  {
    "q": "What type of sensor is typically used in modern lifeboat davit systems to confirm the boat is fully hoisted and stowed?",
    "a": "Inductive proximity sensor",
    "opts": [
      "Hydrostatic pressure switch",
      "Capacitive level sensor",
      "Ultrasonic distance sensor",
      "Inductive proximity sensor"
    ],
    "exp": "Modern lifeboat davit systems use an inductive proximity sensor (a non-contact sensor) to detect the metallic body of the lifeboat when it approaches the stowed position, confirming it is fully hoisted and locked before releasing the brake.",
    "cat": "Lifeboat",
    "id": "T21_027"
  },
  {
    "q": "According to the latest LSA Code amendments, what is the explicitly capped maximum lowering speed for survival craft?",
    "a": "1.3 metres per second",
    "opts": [
      "0.5 metres per second",
      "1.3 metres per second",
      "2.0 metres per second",
      "1.0 metres per second"
    ],
    "exp": "The maximum permitted lowering speed for survival craft (lifeboats and rescue boats) is capped at 1.3 m/s. This standardizes a safe maximum speed to prevent hard water impacts that can injure persons and cause hook release difficulties.",
    "cat": "Lifeboat",
    "id": "T21_028"
  },
  {
    "q": "What is the new 2029 LSA Code ventilation requirement for totally enclosed lifeboats?",
    "a": "A dedicated ventilation system providing 5 cubic metres of fresh air per hour per person, independent of the engine",
    "opts": [
      "A dedicated ventilation system providing 5 cubic metres of fresh air per hour per person, independent of the engine",
      "Passive ventilation louvres that open automatically upon water entry",
      "Compressed air cylinders capable of providing 10 minutes of breathing air",
      "An air conditioning unit powered by the emergency generator"
    ],
    "exp": "To address heat stress and CO2 accumulation, enclosed lifeboats installed on or after Jan 1, 2029, must have an independent ventilation system delivering a minimum of 5 cubic metres of fresh air per hour per person.",
    "cat": "Lifeboat",
    "id": "T21_029"
  },
  {
    "q": "What is the purpose of the water spray (sprinkler) system on a totally enclosed lifeboat on an oil tanker?",
    "a": "To provide a continuous water film over the hull to allow the lifeboat to survive passing through burning oil on the sea surface",
    "opts": [
      "To wash away chemical contaminants after launching",
      "To provide a continuous water film over the hull to allow the lifeboat to survive passing through burning oil on the sea surface",
      "To cool the internal cabin temperature in tropical climates",
      "To act as an internal fire suppression system in case of an engine fire"
    ],
    "exp": "On oil and chemical tankers, the water spray system uses an engine-driven pump and sea cock to cover the lifeboat's exterior with water, preventing the GRP hull from melting or igniting when passing through a burning oil slick.",
    "cat": "Lifeboat",
    "id": "T21_030"
  },
  {
    "q": "What is the difference between an on-load and off-load release mechanism on a lifeboat?",
    "a": "On-load releases the hooks while the boat is waterborne with full weight on them; off-load requires deliberate secondary action and is used for resetting or emergency in-air release",
    "opts": [
      "On-load requires the boat to be completely out of the water; off-load is used only when submerged",
      "On-load is activated automatically by hydrostatic pressure; off-load is strictly manual",
      "On-load is used for lowering the boat; off-load is used for hoisting",
      "On-load releases the hooks while the boat is waterborne with full weight on them; off-load requires deliberate secondary action and is used for resetting or emergency in-air release"
    ],
    "exp": "On-load release is the normal launch mechanism, freeing the hooks when the boat reaches the water (hydrostatic interlock prevents in-air release). Off-load is used to reset hooks or for exceptional circumstances, requiring deliberate action to prevent accidental drops.",
    "cat": "Lifeboat",
    "id": "T21_031"
  },
  {
    "q": "Under the new LSA hook safety design amendment, what must the single fall and hook mechanism be incapable of doing?",
    "a": "Supporting any load unless the hook is completely and correctly reset in the closed/locked position",
    "opts": [
      "Being operated by a single crew member",
      "Releasing automatically upon hitting the water without manual input",
      "Supporting any load unless the hook is completely and correctly reset in the closed/locked position",
      "Being tested while the vessel is underway"
    ],
    "exp": "To prevent fatal accidents from partially engaged hooks, the new design mandates that the mechanism is physically incapable of supporting ANY load unless fully seated and locked. A partial reset cannot bear weight.",
    "cat": "Lifeboat",
    "id": "T21_032"
  },
  {
    "q": "When ordering a lifeboat battery for cold weather operation, which parameter is most critical to specify?",
    "a": "CCA (Cold Cranking Amps)",
    "opts": [
      "Open Circuit Voltage (OCV)",
      "CCA (Cold Cranking Amps)",
      "Specific Gravity (SG)",
      "Ampere-hour (Ah) capacity"
    ],
    "exp": "CCA specifies the current the battery can deliver for 30 seconds at -18\u00b0C while maintaining at least 14.4V (for a 24V battery). It is the critical rating for ensuring the engine can start in Arctic or North Sea conditions where battery internal resistance is high.",
    "cat": "Battery",
    "id": "T21_033"
  },
  {
    "q": "What specific gravity (SG) reading indicates a fully charged lead-acid battery cell at 25\u00b0C?",
    "a": "1.265\u20131.280",
    "opts": [
      "1.120\u20131.150",
      "1.350\u20131.400",
      "1.265\u20131.280",
      "1.190\u20131.210"
    ],
    "exp": "A fully charged lead-acid cell has a specific gravity of 1.265\u20131.280. If it falls to 1.120\u20131.150, the battery is fully discharged. Readings must be taken with a hydrometer and corrected for temperature.",
    "cat": "Battery",
    "id": "T21_034"
  },
  {
    "q": "How is a ship's lifeboat battery maintained at full charge between drills?",
    "a": "By a shore-connected trickle charger providing a continuous float voltage (typically 27.6V)",
    "opts": [
      "By running the lifeboat engine for 10 minutes every day",
      "By a shore-connected trickle charger providing a continuous float voltage (typically 27.6V)",
      "By a dedicated solar panel mounted on the davit",
      "By manually charging it once a month using a portable generator"
    ],
    "exp": "A trickle (or float) charger connected via the davit head provides a constant 27.6V (for a 24V system). Current automatically drops to a few milliamps when fully charged, preventing self-discharge without overcharging.",
    "cat": "Battery",
    "id": "T21_035"
  },
  {
    "q": "What chemical change causes the specific gravity of a lead-acid battery to fall during discharge?",
    "a": "Both the lead dioxide and spongy lead plates react with sulphuric acid to form lead sulphate, producing water and diluting the electrolyte",
    "opts": [
      "Lead sulphate converts back to lead dioxide, making the electrolyte more dense",
      "Hydrogen gas is released, increasing the concentration of lead in the acid",
      "Both the lead dioxide and spongy lead plates react with sulphuric acid to form lead sulphate, producing water and diluting the electrolyte",
      "Sulphuric acid evaporates from the battery cells"
    ],
    "exp": "During discharge (PbO2 + Pb + 2H2SO4 -> 2PbSO4 + 2H2O), sulphuric acid is consumed and water is produced. This dilution lowers the specific gravity of the electrolyte.",
    "cat": "Battery",
    "id": "T21_036"
  },
  {
    "q": "What is the correct liquid to use when topping up the electrolyte in a flooded lead-acid battery?",
    "a": "Distilled water only",
    "opts": [
      "Dilute bicarbonate solution",
      "Sulphuric acid",
      "Distilled water only",
      "Tap water"
    ],
    "exp": "Only distilled or demineralised water should be used. Tap water contains minerals that contaminate the electrolyte and form plate deposits. Acid is only added if electrolyte was physically spilled.",
    "cat": "Battery",
    "id": "T21_037"
  },
  {
    "q": "Why must a battery room have dedicated continuous mechanical extraction ventilation?",
    "a": "To remove highly flammable hydrogen gas produced during battery charging",
    "opts": [
      "To keep the ambient temperature below 10\u00b0C",
      "To supply oxygen for the chemical reactions inside the battery",
      "To prevent the accumulation of toxic carbon monoxide",
      "To remove highly flammable hydrogen gas produced during battery charging"
    ],
    "exp": "Lead-acid batteries produce hydrogen gas (H2) during charging. Hydrogen is explosive at 4-74% volume in air. SOLAS II-1/45.11 requires dedicated extraction ventilation (min 6 air changes/hr) routed directly to the atmosphere.",
    "cat": "BattRoom",
    "id": "T21_038"
  },
  {
    "q": "What specific type of lighting is required inside a battery room?",
    "a": "Explosion-protected (Ex e or Ex d rated) luminaires certified for a hydrogen atmosphere (Gas Group IIC)",
    "opts": [
      "Standard commercial LED fittings",
      "Explosion-protected (Ex e or Ex d rated) luminaires certified for a hydrogen atmosphere (Gas Group IIC)",
      "Battery-operated portable lanterns only",
      "Low-voltage halogen lamps"
    ],
    "exp": "Due to the explosive hydrogen hazard, all light fittings must be Ex-rated for Gas Group IIC (hydrogen). Standard non-Ex electrical equipment is not permitted.",
    "cat": "BattRoom",
    "id": "T21_039"
  },
  {
    "q": "What physical safety arrangement must be placed underneath lead-acid batteries in the battery room?",
    "a": "A corrosion-resistant acid drip tray large enough to contain a full electrolyte spill",
    "opts": [
      "A rubber vibration-damping mat",
      "A corrosion-resistant acid drip tray large enough to contain a full electrolyte spill",
      "A wooden pallet to insulate the batteries from the steel deck",
      "A grounded copper mesh pad to discharge static electricity"
    ],
    "exp": "An acid-resistant drip tray must be installed under all lead-acid batteries to safely contain any sulphuric acid electrolyte spill, protecting the ship's steel structure from corrosion.",
    "cat": "BattRoom",
    "id": "T21_040"
  },
  {
    "q": "What is the Hydrostatic Release Unit (HRU) on a liferaft designed to do?",
    "a": "Activate via water pressure at 1.5-4m depth to cut the lashing strap, allowing the raft to float free and inflate",
    "opts": [
      "Manually trigger the CO2 inflation cylinder when a crew member pulls the lanyard",
      "Automatically detach the liferaft from the ship if the wind speed exceeds 50 knots",
      "Activate via water pressure at 1.5-4m depth to cut the lashing strap, allowing the raft to float free and inflate",
      "Release dye markers into the water to attract rescue aircraft"
    ],
    "exp": "If the ship sinks, the HRU triggers at 1.5\u20134 metres depth. A spring-loaded knife cuts the securing strap. The liferaft floats up, pulling the painter line taut, which then triggers the CO2 inflation system.",
    "cat": "Liferaft",
    "id": "T21_041"
  },
  {
    "q": "What is the main difference between a SOLAS Pack A and Pack B liferaft equipment pack?",
    "a": "Pack A is the comprehensive offshore pack for international voyages; Pack B is a reduced coastal pack",
    "opts": [
      "Pack A deploys automatically; Pack B deploys manually",
      "Pack A is for passenger ships; Pack B is for cargo ships",
      "Pack A is the comprehensive offshore pack for international voyages; Pack B is a reduced coastal pack",
      "Pack A contains inflatable rafts; Pack B contains rigid rafts"
    ],
    "exp": "SOLAS Pack A (Ocean Pack) contains more food, water, thermal aids, and pyrotechnics, required for vessels on international voyages. Pack B is for short coastal voyages where rapid rescue is expected.",
    "cat": "Liferaft",
    "id": "T21_042"
  },
  {
    "q": "How long is the standard validity period for a liferaft's Hydrostatic Release Unit (HRU)?",
    "a": "2 years from installation",
    "opts": [
      "2 years from installation",
      "It has no expiry as long as it passes annual inspection",
      "5 years from installation",
      "1 year from installation"
    ],
    "exp": "The standard HRU has a fixed lifespan of 2 years from the date of installation, after which it must be replaced.",
    "cat": "Liferaft",
    "id": "T21_043"
  },
  {
    "q": "What is the SOLAS requirement for parachute signal flares in a lifeboat?",
    "a": "4 flares, capable of reaching 300m height and burning bright red for 40 seconds",
    "opts": [
      "2 flares, burning white for 30 seconds",
      "6 flares, burning red for 1 minute",
      "12 flares, reaching 100m height",
      "4 flares, capable of reaching 300m height and burning bright red for 40 seconds"
    ],
    "exp": "SOLAS III/11.1 requires 4 rocket parachute flares per lifeboat. They must rocket to a minimum height of 300m, deploy a parachute, and burn bright red for at least 40 seconds to attract distant vessels.",
    "cat": "Pyrotechnics",
    "id": "T21_044"
  },
  {
    "q": "What is the primary purpose of buoyant orange smoke signals in a lifeboat?",
    "a": "For daytime position marking and to indicate wind direction to approaching rescue helicopters",
    "opts": [
      "For daytime position marking and to indicate wind direction to approaching rescue helicopters",
      "For nighttime illumination of the survival craft",
      "To create a thermal signature for satellite detection",
      "To repel sharks and marine predators"
    ],
    "exp": "Lifeboats carry 2 buoyant smoke signals. They float and emit dense orange smoke for a minimum of 3 minutes. They are used in daylight and critically help helicopter pilots determine wind drift for their approach.",
    "cat": "Pyrotechnics",
    "id": "T21_045"
  },
  {
    "q": "What is the expiry rule and disposal procedure for marine pyrotechnics?",
    "a": "They expire 3 years from manufacture and must be disposed of via approved shore facilities, never discharged at sea",
    "opts": [
      "They expire 5 years from manufacture and can be thrown overboard",
      "They do not expire if kept in watertight containers",
      "They expire 2 years from manufacture and must be tested annually",
      "They expire 3 years from manufacture and must be disposed of via approved shore facilities, never discharged at sea"
    ],
    "exp": "Pyrotechnics have a 3-year validity. Discharging expired pyrotechnics at sea is strictly forbidden as it constitutes a false Mayday signal. They must be collected by authorized shore services.",
    "cat": "Pyrotechnics",
    "id": "T21_046"
  },
  {
    "q": "How many hand flares must be carried in each lifeboat?",
    "a": "6",
    "opts": [
      "12",
      "2",
      "4",
      "6"
    ],
    "exp": "SOLAS requires 6 hand-held flares per lifeboat. They burn bright red for at least 1 minute and are used for close-range signaling when a rescue vessel is in visual range.",
    "cat": "Pyrotechnics",
    "id": "T21_047"
  },
  {
    "q": "What is an EEBD (Emergency Escape Breathing Device) used for?",
    "a": "Strictly for short-duration escape from a space filled with smoke or toxic gases",
    "opts": [
      "For fighting minor fires in the engine room",
      "Strictly for short-duration escape from a space filled with smoke or toxic gases",
      "For entering enclosed spaces to rescue an unconscious crew member",
      "To provide supplementary oxygen during high-altitude helicopter evacuations"
    ],
    "exp": "An EEBD provides a minimum of 10 minutes of air via a hood. It is a single-use, single-person device designed exclusively for escaping hazardous atmospheres, NOT for fire-fighting or rescue operations.",
    "cat": "EEBD/SCBA",
    "id": "T21_048"
  },
  {
    "q": "What is the minimum operating time for an EEBD required by SOLAS?",
    "a": "10 minutes",
    "opts": [
      "30 minutes",
      "5 minutes",
      "60 minutes",
      "10 minutes"
    ],
    "exp": "SOLAS mandates a minimum of 10 minutes of breathable air for an EEBD, which is sufficient time to escape from most machinery spaces if the evacuation path is clear. Modern units often provide 15 minutes.",
    "cat": "EEBD/SCBA",
    "id": "T21_049"
  },
  {
    "q": "What are the minimum requirements for a standard SCBA (Self-Contained Breathing Apparatus) on a cargo ship?",
    "a": "Minimum 2 sets onboard, used for firefighting, providing at least 30 minutes of air",
    "opts": [
      "Minimum 2 sets onboard, used for firefighting, providing at least 30 minutes of air",
      "Minimum 1 set per crew member, providing 60 minutes of air",
      "Minimum 2 sets located only on the bridge, providing 15 minutes of air",
      "Minimum 4 sets onboard, used for escape only, providing 10 minutes of air"
    ],
    "exp": "SCBAs are designed for firefighting and enclosed space entry. SOLAS requires a minimum of 2 sets on cargo ships, providing at least 30 minutes (typically 200-300 bar) of positive-pressure breathable air.",
    "cat": "EEBD/SCBA",
    "id": "T21_050"
  },
  {
    "q": "What is the primary difference between a standard Rescue Boat and a Fast Rescue Boat (FRB)?",
    "a": "A rescue boat must maintain at least 6 knots; an FRB must maintain at least 8 knots and have higher manoeuvrability",
    "opts": [
      "A rescue boat must maintain at least 6 knots; an FRB must maintain at least 8 knots and have higher manoeuvrability",
      "A rescue boat is manually rowed; an FRB uses an outboard motor",
      "A rescue boat is inflatable; an FRB is always rigid GRP",
      "A rescue boat holds 6 people; an FRB holds 15 people"
    ],
    "exp": "Both must maintain speed for 4 hours. Standard rescue boats (all cargo ships) have a minimum speed of 6 knots. Fast Rescue Boats (passenger ships, offshore) require a minimum of 8 knots and rapid launch capabilities.",
    "cat": "Rescue Boat",
    "id": "T21_051"
  },
  {
    "q": "According to SOLAS, what is the maximum permitted time to hoist a fully loaded rescue boat back aboard the ship?",
    "a": "5 minutes",
    "opts": [
      "10 minutes",
      "15 minutes",
      "2 minutes",
      "5 minutes"
    ],
    "exp": "The davit winch motor must have sufficient hoisting speed to recover the fully loaded rescue boat from the water to its stowed position within 5 minutes.",
    "cat": "Rescue Boat",
    "id": "T21_052"
  },
  {
    "q": "What is the SOLAS regulation regarding embarkation ladder lighting?",
    "a": "Embarkation stations must be illuminated by emergency lighting that lights the ladder, lifeboat, and sea surface",
    "opts": [
      "Embarkation stations must be illuminated by emergency lighting that lights the ladder, lifeboat, and sea surface",
      "Lighting must only operate manually via a switch inside the lifeboat",
      "Lighting is only required if the ship operates in Arctic waters",
      "Embarkation stations must be lit by red LEDs to preserve night vision"
    ],
    "exp": "SOLAS III/11.7 requires emergency lighting (supplied from the emergency switchboard) to illuminate the embarkation deck, the ladder, and the sea surface below to ensure safe boarding during a blackout.",
    "cat": "Safety",
    "id": "T21_053"
  },
  {
    "q": "How is the survivor location light on an immersion suit activated?",
    "a": "Automatically when the suit enters the water via a saltwater-activated galvanic cell battery",
    "opts": [
      "Automatically by a hydrostatic pressure switch at 2 meters depth",
      "By pulling a ripcord attached to the zipper",
      "Automatically when the suit enters the water via a saltwater-activated galvanic cell battery",
      "Manually by pressing a switch on the chest"
    ],
    "exp": "The light is water-activated. The saltwater acts as the electrolyte, completing the galvanic cell circuit and turning on the flashing LED (50-70 flashes/min, visible 2nm).",
    "cat": "Safety",
    "id": "T21_054"
  },
  {
    "q": "What new in-water performance tests are mandatory for lifejackets supplied after January 1, 2026?",
    "a": "A 24-hour buoyancy retention test and a 5-second self-righting stability test",
    "opts": [
      "A dye-marker deployment test and a whistle volume test",
      "A 24-hour buoyancy retention test and a 5-second self-righting stability test",
      "A fire resistance test and a high-altitude drop test",
      "A thermal insulation test in 0\u00b0C water for 6 hours"
    ],
    "exp": "Post-2026 lifejackets must pass a 24-hour immersion test (to ensure foam doesn't absorb water) and a stability test demonstrating they can turn an unconscious person face-up within 5 seconds.",
    "cat": "Safety",
    "id": "T21_055"
  },
  {
    "q": "What is the minimum capacity requirement for the lifeboat engine starting motor?",
    "a": "6 consecutive cold starting attempts with 30-second intervals",
    "opts": [
      "10 continuous minutes of cranking",
      "3 consecutive cold starts with 10-second intervals",
      "6 consecutive cold starting attempts with 30-second intervals",
      "1 cold start at -20\u00b0C"
    ],
    "exp": "SOLAS requires the starting motor and battery to handle at least 6 consecutive cold starts.",
    "cat": "Lifeboat",
    "id": "T21_057"
  },
  {
    "q": "What are the minimum operational requirements for a lifeboat searchlight?",
    "a": "Minimum 3 hours continuous operation, visible at 180m",
    "opts": [
      "6 hours continuous operation, visible at 200m",
      "3 hours continuous operation, visible at 180m",
      "12 hours intermittent operation, visible at 50m",
      "1 hour continuous operation, visible at 100m"
    ],
    "exp": "The 24V DC searchlight must operate continuously for at least 3 hours and be visible from 180m.",
    "cat": "Lifeboat",
    "id": "T21_058"
  },
  {
    "q": "How many portable two-way VHF radiotelephones are required for survival craft on a cargo ship?",
    "a": "At least 3",
    "opts": [
      "1",
      "3",
      "2",
      "4"
    ],
    "exp": "SOLAS requires at least 3 portable two-way VHF radiotelephones for GMDSS distress communications.",
    "cat": "Lifeboat",
    "id": "T21_059"
  },
  {
    "q": "What frequency band does the lifeboat Radar Transponder (SART) operate on?",
    "a": "9 GHz (X-band)",
    "opts": [
      "406 MHz",
      "3 GHz (S-band)",
      "9 GHz (X-band)",
      "156 MHz"
    ],
    "exp": "The SART responds to 9 GHz X-band radar pulses, creating a 12-dot pattern.",
    "cat": "Lifeboat",
    "id": "T21_060"
  },
  {
    "q": "What type of sensor is typically used in modern lifeboat davits to confirm the boat is fully hoisted?",
    "a": "Inductive proximity sensor",
    "opts": [
      "Hydrostatic pressure switch",
      "Ultrasonic sensor",
      "Optical laser sensor",
      "Inductive proximity sensor"
    ],
    "exp": "Inductive proximity sensors detect the metallic body of the lifeboat to confirm it is fully stowed.",
    "cat": "Lifeboat",
    "id": "T21_061"
  },
  {
    "q": "What is the purpose of the hydrostatic switch on a survival craft system?",
    "a": "Detects water pressure at 1-4m depth to activate the automatic release mechanism",
    "opts": [
      "Monitors drinking water tank levels",
      "Detects water pressure at 1-4m depth to activate the automatic release mechanism",
      "Controls the lifeboat bilge pump",
      "Measures the depth of the sea floor"
    ],
    "exp": "The hydrostatic switch (HRU) is activated by water pressure if the ship sinks (1-4m).",
    "cat": "Lifeboat",
    "id": "T21_062"
  },
  {
    "q": "How does the on-load release mechanism function?",
    "a": "It releases the hooks while the full weight of the lifeboat is still on them",
    "opts": [
      "It releases the hooks while the full weight of the lifeboat is still on them",
      "It automatically lowers the lifeboat to the water",
      "It releases only when the boat is completely dry",
      "It releases only the forward hook"
    ],
    "exp": "On-load release frees the boat while waterborne but still under the load of its weight.",
    "cat": "Lifeboat",
    "id": "T21_063"
  },
  {
    "q": "What is the primary use of the off-load release mechanism?",
    "a": "Resetting the hooks or emergency release requiring deliberate secondary action",
    "opts": [
      "Dropping the boat from 10 meters",
      "Normal launching from the davit head",
      "Resetting the hooks or emergency release requiring deliberate secondary action",
      "Releasing the painter line"
    ],
    "exp": "Off-load release is used to reset the hook or for emergency release, requiring deliberate action.",
    "cat": "Lifeboat",
    "id": "T21_064"
  },
  {
    "q": "According to the latest LSA amendment, what is the maximum permitted lowering speed for survival craft?",
    "a": "1.3 metres per second",
    "opts": [
      "1.3 metres per second",
      "0.5 metres per second",
      "1.0 metres per second",
      "2.5 metres per second"
    ],
    "exp": "To prevent injuries from hard water impacts, the maximum lowering speed is capped at 1.3 m/s.",
    "cat": "Lifeboat",
    "id": "T21_065"
  },
  {
    "q": "What is the new LSA hook safety design amendment for single fall systems?",
    "a": "The hook cannot support any load unless it is completely and correctly reset",
    "opts": [
      "The hook must release automatically at 5 meters",
      "The hook cannot support any load unless it is completely and correctly reset",
      "The hook must hold twice the lifeboat weight",
      "The hook must be made of titanium"
    ],
    "exp": "This eliminates failure modes where a partially engaged hook releases under load.",
    "cat": "Lifeboat",
    "id": "T21_066"
  },
  {
    "q": "What new ventilation requirement applies to totally enclosed lifeboats from January 1, 2029?",
    "a": "Dedicated ventilation providing 5 m\u00b3/hr/person, independent of the engine",
    "opts": [
      "Natural ventilation louvres only",
      "An oxygen cylinder system",
      "Dedicated ventilation providing 5 m\u00b3/hr/person, independent of the engine",
      "Air conditioning maintaining 20\u00b0C"
    ],
    "exp": "Addresses extreme heat stress and CO2 buildup, requiring 5 m\u00b3/hr of fresh air per person.",
    "cat": "Lifeboat",
    "id": "T21_067"
  },
  {
    "q": "What is the purpose of the water spray (sprinkler) system on lifeboats of oil tankers?",
    "a": "To allow the lifeboat to survive passing through burning oil on the sea surface",
    "opts": [
      "To wash away chemical spills",
      "To cool the crew during hot weather",
      "To extinguish internal engine fires",
      "To allow the lifeboat to survive passing through burning oil on the sea surface"
    ],
    "exp": "Produces a continuous water film over the hull, preventing the GRP from melting or igniting.",
    "cat": "Lifeboat",
    "id": "T21_068"
  },
  {
    "q": "How is the lifeboat water spray system pump driven?",
    "a": "Directly from the lifeboat engine crankshaft",
    "opts": [
      "Directly from the lifeboat engine crankshaft",
      "By a dedicated 24V electric motor",
      "By a compressed air bottle",
      "By a hand pump operated by the crew"
    ],
    "exp": "The centrifugal pump is driven directly by the lifeboat engine via a belt or gear drive.",
    "cat": "Lifeboat",
    "id": "T21_069"
  },
  {
    "q": "When does the lifeboat sprinkler system's sea cock open?",
    "a": "When the coxswain manually opens it after the boat is waterborne",
    "opts": [
      "When the coxswain manually opens it after the boat is waterborne",
      "When the painter is pulled",
      "When internal temperature exceeds 50\u00b0C",
      "Automatically when the davit is lowered"
    ],
    "exp": "The sea cock is opened manually by the coxswain once the boat is in the water.",
    "cat": "Lifeboat",
    "id": "T21_070"
  },
  {
    "q": "What monthly functional check must the ETO perform on the lifeboat engine?",
    "a": "Start and run the engine for a minimum of 3 minutes",
    "opts": [
      "Drain and replace the engine oil",
      "Overhaul the fuel injectors",
      "Run the engine for 1 hour",
      "Start and run the engine for a minimum of 3 minutes"
    ],
    "exp": "The engine must be run for at least 3 minutes under load to verify readiness.",
    "cat": "Lifeboat",
    "id": "T21_071"
  },
  {
    "q": "When should a davit wire rope be replaced?",
    "a": "If more than 5% of wires in any strand are broken or heavily corroded",
    "opts": [
      "Every 10 years regardless of condition",
      "If more than 5% of wires in any strand are broken or heavily corroded",
      "Only when it completely snaps",
      "After every lifeboat launch"
    ],
    "exp": "SOLAS III/10 dictates replacement if 5% of wires in any strand are broken.",
    "cat": "Lifeboat",
    "id": "T21_072"
  },
  {
    "q": "What critical action must be taken regarding the trickle charger before lowering a lifeboat?",
    "a": "The charger plug must be disconnected",
    "opts": [
      "The charger plug must be disconnected",
      "It must be switched to 'boost' mode",
      "The voltage must be increased to 30V",
      "The battery must be removed"
    ],
    "exp": "The charger cable must be removed before lowering to prevent ripping the cable.",
    "cat": "Lifeboat",
    "id": "T21_073"
  },
  {
    "q": "From where must the embarkation ladder emergency lighting be powered?",
    "a": "The emergency source of electrical power (emergency switchboard)",
    "opts": [
      "The main engine alternator",
      "Solar panels on the boat deck",
      "The emergency source of electrical power (emergency switchboard)",
      "The lifeboat's internal 24V battery"
    ],
    "exp": "Embarkation station lighting must be powered by the emergency switchboard.",
    "cat": "Lifeboat",
    "id": "T21_074"
  },
  {
    "q": "What compass requirement exists for a lifeboat?",
    "a": "An illuminated magnetic compass",
    "opts": [
      "A GPS chartplotter",
      "No compass is required",
      "An illuminated magnetic compass",
      "A gyrocompass connected to the ship"
    ],
    "exp": "Lifeboats must be fitted with an illuminated magnetic compass for night navigation.",
    "cat": "Lifeboat",
    "id": "T21_075"
  },
  {
    "q": "What is the typical flow rate design for a lifeboat water spray system?",
    "a": "3-5 litres per square metre per minute",
    "opts": [
      "50 litres per square metre",
      "3-5 litres per square metre per minute",
      "0.1 litres per square metre",
      "100 gallons per minute total"
    ],
    "exp": "Nozzles provide a continuous water film of typically 3-5 litres/m\u00b2/minute over the hull.",
    "cat": "Lifeboat",
    "id": "T21_076"
  },
  {
    "q": "What is the ETO's role regarding the lifeboat's new 2029 ventilation system?",
    "a": "Maintain the electric fan motor, battery backup, and verify it operates independently",
    "opts": [
      "Maintain the electric fan motor, battery backup, and verify it operates independently",
      "Replace the CO2 scrubbers",
      "Design the ducting system",
      "Operate it continuously during normal voyages"
    ],
    "exp": "The ETO must ensure electrical components are functional and independent of the main engine.",
    "cat": "Lifeboat",
    "id": "T21_077"
  },
  {
    "q": "What type of pump removes water ingress from a lifeboat?",
    "a": "An electric or manual bilge pump",
    "opts": [
      "A hydraulic submersible pump",
      "A centrifugal ballast pump",
      "An electric or manual bilge pump",
      "An ejector pump driven by fire main"
    ],
    "exp": "Lifeboats are required to have either a manual or electric bilge pump.",
    "cat": "Lifeboat",
    "id": "T21_078"
  },
  {
    "q": "What interlock prevents accidental in-air operation of the on-load release?",
    "a": "A hydrostatic interlock",
    "opts": [
      "A thermal overload relay",
      "A centrifugal governor",
      "A hydrostatic interlock",
      "An anemometer interlock"
    ],
    "exp": "A hydrostatic interlock ensures the boat is waterborne before on-load release operates.",
    "cat": "Lifeboat",
    "id": "T21_079"
  },
  {
    "q": "How frequently must a lifeboat's full electrical insulation test (megger) generally be performed?",
    "a": "Annually",
    "opts": [
      "Weekly",
      "Monthly",
      "Annually",
      "Every 5 years"
    ],
    "exp": "A complete electrical insulation test of lifeboat wiring is an annual maintenance task.",
    "cat": "Lifeboat",
    "id": "T21_080"
  },
  {
    "q": "What happens if a lifeboat's on-load release mechanism fails during an emergency?",
    "a": "The off-load release can be used as an emergency secondary release",
    "opts": [
      "The boat must wait for shore assistance",
      "The lifeboat cannot be deployed",
      "The davit wire must be cut with a grinder",
      "The off-load release can be used as an emergency secondary release"
    ],
    "exp": "Off-load release provides a backup method to release hooks in exceptional circumstances.",
    "cat": "Lifeboat",
    "id": "T21_081"
  },
  {
    "q": "What color is the standard on-load release handle at the lifeboat helm?",
    "a": "Red",
    "opts": [
      "Blue",
      "Yellow",
      "Red",
      "Green"
    ],
    "exp": "The on-load release handle is colored red to indicate its critical nature.",
    "cat": "Lifeboat",
    "id": "T21_082"
  },
  {
    "q": "During a quarterly test of the lifeboat sprinkler system, what must the ETO observe?",
    "a": "All nozzles spraying uniformly with no blockages",
    "opts": [
      "All nozzles spraying uniformly with no blockages",
      "The fresh water tank level",
      "The foam expansion ratio",
      "The fire alarm panel on the bridge"
    ],
    "exp": "The visual flow test ensures the sea cock, pump, piping, and nozzles are clear.",
    "cat": "Lifeboat",
    "id": "T21_083"
  },
  {
    "q": "What is the primary power source for the lifeboat's interior lighting?",
    "a": "The 24V DC lifeboat battery",
    "opts": [
      "The 24V DC lifeboat battery",
      "Dry cell AA batteries",
      "A wind-up generator",
      "The ship's 220V AC grid"
    ],
    "exp": "The main 24V DC battery supplies the interior lights.",
    "cat": "Lifeboat",
    "id": "T21_084"
  },
  {
    "q": "What is tested during the ETO's weekly visual inspection of the lifeboat?",
    "a": "Trickle charger connection and correct charging status",
    "opts": [
      "A full 10-hour capacity discharge test",
      "The specific gravity of all cells",
      "Trickle charger connection and correct charging status",
      "The on-load release mechanism"
    ],
    "exp": "Weekly checks involve ensuring the charger is connected and the battery is floating.",
    "cat": "Lifeboat",
    "id": "T21_085"
  },
  {
    "q": "When ordering a lifeboat battery for cold weather, which specification is most critical?",
    "a": "CCA (Cold Cranking Amps)",
    "opts": [
      "Ah capacity",
      "Shelf life",
      "CCA (Cold Cranking Amps)",
      "Physical dimensions"
    ],
    "exp": "CCA measures the battery's ability to deliver high current at -18\u00b0C.",
    "cat": "Battery",
    "id": "T21_086"
  },
  {
    "q": "What does CCA stand for and what are its test conditions?",
    "a": "Cold Cranking Amps; amps delivered for 30 seconds at -18\u00b0C maintaining min 14.4V",
    "opts": [
      "Cold Cranking Amps; amps delivered for 30 seconds at -18\u00b0C maintaining min 14.4V",
      "Capacity Charge Amps; maximum charging current",
      "Constant Current Amperes; continuous load at 25\u00b0C",
      "Cold Climate Application; operates at 0\u00b0C"
    ],
    "exp": "CCA is the standard rating for cold starting ability at -18\u00b0C.",
    "cat": "Battery",
    "id": "T21_087"
  },
  {
    "q": "What specific gravity (SG) indicates a fully charged vented lead-acid battery at 25\u00b0C?",
    "a": "1.265\u20131.280",
    "opts": [
      "1.350\u20131.400",
      "1.120\u20131.150",
      "1.265\u20131.280",
      "1.190\u20131.210"
    ],
    "exp": "A fully charged cell has an SG of 1.265-1.280.",
    "cat": "Battery",
    "id": "T21_088"
  },
  {
    "q": "What is the open circuit voltage (OCV) of a fully charged 24V lead-acid battery?",
    "a": "25.6\u201326.4V",
    "opts": [
      "24.0V exactly",
      "25.6\u201326.4V",
      "28.5\u201330.0V",
      "22.0\u201323.5V"
    ],
    "exp": "A healthy, fully charged 24V battery will rest between 25.6V and 26.4V.",
    "cat": "Battery",
    "id": "T21_089"
  },
  {
    "q": "What is the correct terminal connection sequence when installing a new lifeboat battery?",
    "a": "Connect positive first, then negative",
    "opts": [
      "Connect positive first, then negative",
      "Sequence does not matter",
      "Connect negative first, then positive",
      "Connect both simultaneously"
    ],
    "exp": "Connecting positive first prevents accidental short circuits against the hull.",
    "cat": "Battery",
    "id": "T21_090"
  },
  {
    "q": "How is a lifeboat battery maintained at full charge while stowed?",
    "a": "By a continuously connected 24V trickle charger",
    "opts": [
      "By wind generators",
      "By solar panels",
      "By a continuously connected 24V trickle charger",
      "By daily engine runs"
    ],
    "exp": "The trickle charger maintains a constant voltage to compensate for self-discharge.",
    "cat": "Battery",
    "id": "T21_091"
  },
  {
    "q": "What chemical is formed on both battery plates during the discharge of a lead-acid battery?",
    "a": "Lead sulphate (PbSO4)",
    "opts": [
      "Sulphuric acid",
      "Lead dioxide",
      "Lead sulphate (PbSO4)",
      "Spongy lead"
    ],
    "exp": "During discharge, both plates react with acid to form lead sulphate.",
    "cat": "Battery",
    "id": "T21_092"
  },
  {
    "q": "Why does specific gravity fall during the discharge of a lead-acid battery?",
    "a": "Sulphuric acid is consumed and water is produced, diluting the electrolyte",
    "opts": [
      "Hydrogen gas bubbles lower the density",
      "Acid evaporates",
      "Lead dissolves into the liquid",
      "Sulphuric acid is consumed and water is produced, diluting the electrolyte"
    ],
    "exp": "The chemical reaction converts sulphuric acid into water, lowering density.",
    "cat": "Battery",
    "id": "T21_093"
  },
  {
    "q": "What explosive gas is produced by lead-acid batteries at the end of the charging cycle?",
    "a": "Hydrogen (H2)",
    "opts": [
      "Nitrogen Dioxide (NO2)",
      "Hydrogen (H2)",
      "Methane (CH4)",
      "Carbon Monoxide (CO)"
    ],
    "exp": "Water electrolysis during final charging stages produces highly flammable hydrogen gas.",
    "cat": "Battery",
    "id": "T21_094"
  },
  {
    "q": "What liquid must be used to top up a flooded lead-acid battery?",
    "a": "Distilled water only",
    "opts": [
      "Distilled water only",
      "Brine solution",
      "Sulphuric acid",
      "Tap water"
    ],
    "exp": "Only distilled water should be used to prevent mineral contamination.",
    "cat": "Battery",
    "id": "T21_095"
  },
  {
    "q": "What is the typical float/trickle charging voltage for a 24V lead-acid battery system?",
    "a": "27.6V",
    "opts": [
      "25.2V",
      "30.5V",
      "24.0V",
      "27.6V"
    ],
    "exp": "A standard float voltage is 2.30V per cell, equaling 27.6V for a 24V battery.",
    "cat": "Battery",
    "id": "T21_096"
  },
  {
    "q": "How is a battery's actual Ah capacity verified?",
    "a": "By performing a controlled discharge (load test) and timing it",
    "opts": [
      "By performing a controlled discharge (load test) and timing it",
      "By checking open circuit voltage",
      "By reading the manufacturer label",
      "By measuring specific gravity"
    ],
    "exp": "A capacity test discharges the battery at a constant rated current.",
    "cat": "Battery",
    "id": "T21_097"
  },
  {
    "q": "If a new battery's specific gravity is measured at 1.150 upon delivery, what should be done?",
    "a": "Perform an initial charge before installation",
    "opts": [
      "Add sulphuric acid",
      "Install it immediately",
      "Discard the battery",
      "Perform an initial charge before installation"
    ],
    "exp": "An SG of 1.150 indicates deep discharge, requiring a full charge before commissioning.",
    "cat": "Battery",
    "id": "T21_098"
  },
  {
    "q": "Why is NiCd (alkaline) sometimes preferred over lead-acid for lifeboats?",
    "a": "Better cold weather performance and longer service life",
    "opts": [
      "Better cold weather performance and longer service life",
      "Produces no hydrogen gas",
      "Lighter weight",
      "Cheaper initial cost"
    ],
    "exp": "Nickel-cadmium batteries excel in extreme cold and last 10-20 years.",
    "cat": "Battery",
    "id": "T21_099"
  },
  {
    "q": "What is the consequence of chronic undercharging of a lead-acid battery?",
    "a": "Irreversible sulphation of the plates",
    "opts": [
      "Boiling of the electrolyte",
      "Irreversible sulphation of the plates",
      "Thermal runaway",
      "Excessive hydrogen generation"
    ],
    "exp": "Lead sulphate crystals harden on the plates, permanently reducing capacity.",
    "cat": "Battery",
    "id": "T21_100"
  },
  {
    "q": "What should the trickle charger current drop to when the battery is fully charged?",
    "a": "Less than 0.5A (trickle level)",
    "opts": [
      "10 Amps",
      "5 Amps",
      "Less than 0.5A (trickle level)",
      "Zero Amps exactly"
    ],
    "exp": "The charger output reduces to a few hundred milliamps to compensate for self-discharge.",
    "cat": "Battery",
    "id": "T21_101"
  },
  {
    "q": "What is the minimum pressure required for a lifeboat compressed air bottle during a monthly check?",
    "a": "90% of its rated working pressure",
    "opts": [
      "100% strictly",
      "75% of its rated working pressure",
      "50% of its rated working pressure",
      "90% of its rated working pressure"
    ],
    "exp": "If pressure falls below 90% of working pressure, it must be recharged.",
    "cat": "Battery",
    "id": "T21_102"
  },
  {
    "q": "What type of air must be used to refill a lifeboat air bottle?",
    "a": "Breathing quality air (Class E)",
    "opts": [
      "Industrial compressed air",
      "Breathing quality air (Class E)",
      "Nitrogen",
      "Pure oxygen"
    ],
    "exp": "Industrial air contains toxic oil aerosols. Only breathing air compressors can be used.",
    "cat": "Battery",
    "id": "T21_103"
  },
  {
    "q": "How frequently must a compressed air cylinder undergo a hydrostatic pressure test?",
    "a": "Typically every 5 years",
    "opts": [
      "Annually",
      "Every 2 years",
      "Typically every 5 years",
      "Every 10 years"
    ],
    "exp": "Regulations generally require a hydrostatic test every 5 years.",
    "cat": "Battery",
    "id": "T21_104"
  },
  {
    "q": "What is the typical timeframe within which a new battery should be commissioned after its date of manufacture?",
    "a": "Within 3-6 months",
    "opts": [
      "Within 5 years",
      "Within 3-6 months",
      "Within 2 years",
      "Within 1 week"
    ],
    "exp": "Batteries stored too long without charging suffer irreversible sulphation.",
    "cat": "Battery",
    "id": "T21_105"
  },
  {
    "q": "When calculating lifeboat battery capacity, how long must it supply all electrical consumers (excluding engine start)?",
    "a": "Minimum 30 minutes",
    "opts": [
      "10 minutes",
      "3 hours",
      "Minimum 30 minutes",
      "12 hours"
    ],
    "exp": "The battery must power all consumers for at least 30 minutes plus 6 cold starts.",
    "cat": "Battery",
    "id": "T21_106"
  },
  {
    "q": "How is specific gravity corrected for temperature?",
    "a": "Using a correction formula (add or subtract 0.0007 per \u00b0C deviation from 25\u00b0C)",
    "opts": [
      "By diluting the acid",
      "By heating the battery to 25\u00b0C",
      "Using a correction formula (add or subtract 0.0007 per \u00b0C deviation from 25\u00b0C)",
      "It is not corrected"
    ],
    "exp": "Hydrometer readings vary with temperature and must be mathematically corrected.",
    "cat": "Battery",
    "id": "T21_107"
  },
  {
    "q": "What is the primary danger if tap water is used to top up a battery?",
    "a": "Minerals and chlorides will contaminate the electrolyte and destroy the plates",
    "opts": [
      "It will cause an immediate explosion",
      "Minerals and chlorides will contaminate the electrolyte and destroy the plates",
      "It will increase the voltage too high",
      "It dissolves the plastic casing"
    ],
    "exp": "Impurities in tap water react with acid, forming harmful deposits.",
    "cat": "Battery",
    "id": "T21_108"
  },
  {
    "q": "What tool is used to measure specific gravity?",
    "a": "Hydrometer",
    "opts": [
      "Hydrometer",
      "Barometer",
      "Multimeter",
      "Megger"
    ],
    "exp": "A hydrometer uses a float in a glass tube to measure electrolyte density.",
    "cat": "Battery",
    "id": "T21_109"
  },
  {
    "q": "What should be applied to battery terminals after cleaning to prevent corrosion?",
    "a": "Terminal grease or petroleum jelly",
    "opts": [
      "WD-40",
      "Sulphuric acid",
      "Terminal grease or petroleum jelly",
      "Paint"
    ],
    "exp": "Grease creates an airtight seal that prevents acid fumes from oxidizing terminals.",
    "cat": "Battery",
    "id": "T21_110"
  },
  {
    "q": "What happens to the internal resistance of a battery in extremely cold temperatures?",
    "a": "It increases significantly, reducing available current",
    "opts": [
      "It reverses polarity",
      "It drops to zero",
      "It remains completely unaffected",
      "It increases significantly, reducing available current"
    ],
    "exp": "Cold slows down chemical reactions, raising internal resistance.",
    "cat": "Battery",
    "id": "T21_111"
  },
  {
    "q": "What condition dictates immediate replacement of a lifeboat battery?",
    "a": "Failing an annual capacity test or voltage dropping below 10.5V during cranking",
    "opts": [
      "Failing an annual capacity test or voltage dropping below 10.5V during cranking",
      "A dusty casing",
      "A fully charged SG of 1.270",
      "Being older than 1 year"
    ],
    "exp": "If the battery cannot sustain its rated load, it is defective.",
    "cat": "Battery",
    "id": "T21_112"
  },
  {
    "q": "Why is physical inspection crucial during battery commissioning?",
    "a": "To check for transit damage like cracked cases or electrolyte leaks",
    "opts": [
      "To verify the color of the plastic",
      "To check for transit damage like cracked cases or electrolyte leaks",
      "To ensure the manual is included",
      "To check the brand logo"
    ],
    "exp": "A cracked case can leak acid, causing structural damage.",
    "cat": "Battery",
    "id": "T21_113"
  },
  {
    "q": "What does a green light on a modern trickle charger usually indicate?",
    "a": "Float mode / battery fully charged",
    "opts": [
      "Float mode / battery fully charged",
      "No battery connected",
      "Boost charging in progress",
      "Fault condition"
    ],
    "exp": "A green indicator typically shows the charger is maintaining a float charge.",
    "cat": "Battery",
    "id": "T21_114"
  },
  {
    "q": "Why are VRLA (Valve Regulated Lead Acid) batteries preferred for marine use?",
    "a": "They are sealed, maintenance-free, and pose no electrolyte spill risk",
    "opts": [
      "They are cheaper",
      "They are sealed, maintenance-free, and pose no electrolyte spill risk",
      "They use salt water instead of acid",
      "They last 50 years"
    ],
    "exp": "VRLA batteries do not require topping up and will not spill acid.",
    "cat": "Battery",
    "id": "T21_115"
  },
  {
    "q": "What is the primary hazard in a ship's battery room?",
    "a": "Explosive hydrogen gas generation",
    "opts": [
      "Radioactive emissions",
      "Toxic carbon monoxide",
      "High voltage AC shock",
      "Explosive hydrogen gas generation"
    ],
    "exp": "Lead-acid batteries produce highly explosive hydrogen during charging.",
    "cat": "BattRoom",
    "id": "T21_116"
  },
  {
    "q": "What is the explosive range of hydrogen gas in air?",
    "a": "4% to 74% by volume",
    "opts": [
      "1% to 2%",
      "It is not explosive",
      "80% to 90%",
      "4% to 74% by volume"
    ],
    "exp": "Hydrogen forms a highly volatile mixture with air at concentrations between 4% and 74%.",
    "cat": "BattRoom",
    "id": "T21_117"
  },
  {
    "q": "What is the SOLAS requirement for battery room ventilation?",
    "a": "Continuous mechanical extraction ventilation exhausted directly to atmosphere",
    "opts": [
      "Pressurized air supply",
      "Natural ventilation via portholes",
      "Continuous mechanical extraction ventilation exhausted directly to atmosphere",
      "Air conditioning recycling the air"
    ],
    "exp": "SOLAS II-1/45.11 mandates dedicated mechanical exhaust fans.",
    "cat": "BattRoom",
    "id": "T21_118"
  },
  {
    "q": "How many air changes per hour are typically required for battery room ventilation?",
    "a": "Minimum 6 (some classes require 12)",
    "opts": [
      "30 per hour",
      "60 per hour",
      "Minimum 6 (some classes require 12)",
      "1 per hour"
    ],
    "exp": "Class rules mandate rapid air turnover (6-12 times per hour).",
    "cat": "BattRoom",
    "id": "T21_119"
  },
  {
    "q": "Where must the ventilation inlet and exhaust be located in a battery room?",
    "a": "Inlet low, exhaust high",
    "opts": [
      "Inlet low, exhaust high",
      "Both on the floor",
      "Both on the ceiling",
      "Inlet high, exhaust low"
    ],
    "exp": "Hydrogen is lighter than air, so exhaust must be at the highest point.",
    "cat": "BattRoom",
    "id": "T21_120"
  },
  {
    "q": "What type of light fittings are permitted inside a battery room?",
    "a": "Explosion-protected (Ex e or Ex d) rated for Gas Group IIC",
    "opts": [
      "Open incandescent bulbs",
      "Battery-operated flashlights only",
      "Standard fluorescent tubes",
      "Explosion-protected (Ex e or Ex d) rated for Gas Group IIC"
    ],
    "exp": "All equipment must be certified explosion-proof for Group IIC gases.",
    "cat": "BattRoom",
    "id": "T21_121"
  },
  {
    "q": "Why must the battery room exhaust duct have no sharp bends?",
    "a": "To prevent pockets of hydrogen from becoming trapped",
    "opts": [
      "To prevent pockets of hydrogen from becoming trapped",
      "To reduce fan noise",
      "To prevent water ingress",
      "To increase air speed"
    ],
    "exp": "Sharp bends can create dead air zones where hydrogen accumulates.",
    "cat": "BattRoom",
    "id": "T21_122"
  },
  {
    "q": "What physical protection is required under all flooded lead-acid batteries?",
    "a": "A corrosion-resistant acid drip tray",
    "opts": [
      "A grounded steel plate",
      "A wooden pallet",
      "A corrosion-resistant acid drip tray",
      "A rubber shock absorber"
    ],
    "exp": "An acid-resistant tray prevents structural corrosion from spills.",
    "cat": "BattRoom",
    "id": "T21_123"
  },
  {
    "q": "What is the recommended temperature range for a battery room?",
    "a": "10\u00b0C to 30\u00b0C",
    "opts": [
      "10\u00b0C to 30\u00b0C",
      "0\u00b0C to 10\u00b0C",
      "40\u00b0C to 50\u00b0C",
      "-10\u00b0C to 0\u00b0C"
    ],
    "exp": "Extreme heat accelerates gassing, while extreme cold reduces capacity.",
    "cat": "BattRoom",
    "id": "T21_124"
  },
  {
    "q": "What PPE must be available at the battery room entrance?",
    "a": "Rubber gloves, acid-resistant apron, and safety goggles",
    "opts": [
      "Rubber gloves, acid-resistant apron, and safety goggles",
      "Fall arrest harness",
      "Thermal immersion suit",
      "Welding mask and leather gloves"
    ],
    "exp": "Personnel must be protected from chemical burns caused by sulphuric acid.",
    "cat": "BattRoom",
    "id": "T21_125"
  },
  {
    "q": "What emergency first-aid equipment must be accessible near the battery room?",
    "a": "An eye-wash station or fresh water supply",
    "opts": [
      "A defibrillator",
      "A stretcher",
      "An eye-wash station or fresh water supply",
      "An oxygen resuscitator"
    ],
    "exp": "Immediate flushing with water is required if battery acid splashes into eyes.",
    "cat": "BattRoom",
    "id": "T21_126"
  },
  {
    "q": "Where must the ship's emergency battery room be located?",
    "a": "Outside the main machinery space, above the bulkhead deck",
    "opts": [
      "In the lowest part of the engine room",
      "Inside the main switchboard room",
      "Outside the main machinery space, above the bulkhead deck",
      "In the cargo hold"
    ],
    "exp": "SOLAS II-1/42 requires emergency sources to be outside the main engine room.",
    "cat": "BattRoom",
    "id": "T21_127"
  },
  {
    "q": "What system monitors the battery wiring for faults?",
    "a": "The ship's insulation monitoring system",
    "opts": [
      "The bilge high level alarm",
      "The ship's insulation monitoring system",
      "The fire alarm panel",
      "The Voyage Data Recorder"
    ],
    "exp": "Earth faults in the battery system are monitored to prevent arcing.",
    "cat": "BattRoom",
    "id": "T21_128"
  },
  {
    "q": "Why are standard fluorescent lights not permitted in the battery room?",
    "a": "They are not explosion-protected and can ignite hydrogen gas",
    "opts": [
      "They produce UV light that damages batteries",
      "They interfere with insulation monitoring",
      "They are not explosion-protected and can ignite hydrogen gas",
      "They draw too much power"
    ],
    "exp": "Standard fittings produce sparks that will ignite hydrogen.",
    "cat": "BattRoom",
    "id": "T21_129"
  },
  {
    "q": "What is the purpose of numbering each battery cell?",
    "a": "To track individual cell voltage and specific gravity history in the maintenance log",
    "opts": [
      "To ensure they are installed alphabetically",
      "To indicate the voltage rating",
      "To track individual cell voltage and specific gravity history in the maintenance log",
      "To identify the manufacturer"
    ],
    "exp": "Recording readings by cell number helps identify a single failing cell.",
    "cat": "BattRoom",
    "id": "T21_130"
  },
  {
    "q": "What is a ventilation interlock on a battery charger?",
    "a": "It stops the charger from operating if the exhaust fan fails",
    "opts": [
      "It opens the door automatically",
      "It stops the charger from operating if the exhaust fan fails",
      "It increases fan speed when voltage drops",
      "It sounds a fire alarm"
    ],
    "exp": "Ensures batteries cannot generate hydrogen if the extraction fan is broken.",
    "cat": "BattRoom",
    "id": "T21_131"
  },
  {
    "q": "What is the strict rule regarding smoking in the battery room?",
    "a": "Strictly no smoking and no naked flames",
    "opts": [
      "Allowed in the designated corner",
      "Strictly no smoking and no naked flames",
      "Allowed only if the fan is on",
      "Allowed only for e-cigarettes"
    ],
    "exp": "Any open flame or spark will instantly ignite a hydrogen-air mixture.",
    "cat": "BattRoom",
    "id": "T21_132"
  },
  {
    "q": "What hazard is created by using non-Ex tools inside the battery room during charging?",
    "a": "Sparks from dropping the tool can ignite hydrogen gas",
    "opts": [
      "Sparks from dropping the tool can ignite hydrogen gas",
      "They drain the battery voltage",
      "They rust quickly due to acid fumes",
      "They magnetize the battery plates"
    ],
    "exp": "Steel tools can strike sparks if dropped. Spark-proof tools are recommended.",
    "cat": "BattRoom",
    "id": "T21_133"
  },
  {
    "q": "If the ventilation system fails in a battery room, what is the immediate risk?",
    "a": "Accumulation of hydrogen gas to explosive levels",
    "opts": [
      "The batteries will freeze",
      "Loss of battery capacity",
      "Accumulation of hydrogen gas to explosive levels",
      "Acid evaporation"
    ],
    "exp": "Without extract fans, lighter-than-air hydrogen pools at the ceiling.",
    "cat": "BattRoom",
    "id": "T21_134"
  },
  {
    "q": "What type of fire extinguisher is typically NOT recommended for use directly on live battery terminals?",
    "a": "Water",
    "opts": [
      "Clean Agent",
      "Dry Powder",
      "CO2",
      "Water"
    ],
    "exp": "Water conducts electricity and can cause severe short circuits.",
    "cat": "BattRoom",
    "id": "T21_135"
  },
  {
    "q": "What is the purpose of the battery room maintenance log?",
    "a": "To record SG, OCV, and temperature to track battery health over time",
    "opts": [
      "To record the ship's position",
      "To log crew working hours",
      "To inventory spare parts",
      "To record SG, OCV, and temperature to track battery health over time"
    ],
    "exp": "Trending specific gravity helps predict battery failure before an emergency.",
    "cat": "BattRoom",
    "id": "T21_136"
  },
  {
    "q": "What happens if a lead-acid battery is operated at 40\u00b0C continuously?",
    "a": "Its service life is drastically reduced",
    "opts": [
      "The acid turns to solid",
      "Its service life is drastically reduced",
      "It stops producing hydrogen",
      "Its capacity doubles"
    ],
    "exp": "High temperatures accelerate internal corrosion and self-discharge.",
    "cat": "BattRoom",
    "id": "T21_137"
  },
  {
    "q": "Why is hydrogen considered 'Gas Group IIC' in explosion protection standards?",
    "a": "It requires the lowest ignition energy of common flammable gases",
    "opts": [
      "It is the heaviest gas",
      "It only burns in pure oxygen",
      "It requires the lowest ignition energy of common flammable gases",
      "It is non-flammable"
    ],
    "exp": "Group IIC is the most stringent category due to low ignition energy.",
    "cat": "BattRoom",
    "id": "T21_138"
  },
  {
    "q": "Can the battery room exhaust duct be routed through the accommodation block?",
    "a": "No, it must run directly to the open atmosphere",
    "opts": [
      "Yes, if painted red",
      "No, it must run directly to the open atmosphere",
      "Yes, if fitted with filters",
      "Yes, to provide heating"
    ],
    "exp": "Routing hydrogen exhaust through occupied spaces risks fatal explosions.",
    "cat": "BattRoom",
    "id": "T21_139"
  },
  {
    "q": "What action should be taken if electrolyte spills into the acid tray?",
    "a": "Neutralize with bicarbonate of soda and clean it up safely",
    "opts": [
      "Ignite it to burn off",
      "Leave it to evaporate",
      "Wash it down the deck drain",
      "Neutralize with bicarbonate of soda and clean it up safely"
    ],
    "exp": "Sulphuric acid is highly corrosive and must be neutralized with a base.",
    "cat": "BattRoom",
    "id": "T21_140"
  },
  {
    "q": "How is a sealed VRLA battery different from a flooded battery regarding the battery room?",
    "a": "It emits much less gas under normal charging, but still requires ventilation",
    "opts": [
      "It emits much less gas under normal charging, but still requires ventilation",
      "It emits zero gas even when overcharged",
      "It requires no ventilation at all",
      "It absorbs oxygen from the room"
    ],
    "exp": "VRLA batteries recombine gases internally but vent hydrogen if overcharged.",
    "cat": "BattRoom",
    "id": "T21_141"
  },
  {
    "q": "Where does the hydrogen gas come from in a lead-acid battery?",
    "a": "The electrolysis of water in the electrolyte during the final stages of charging",
    "opts": [
      "The copper terminals",
      "The electrolysis of water in the electrolyte during the final stages of charging",
      "The breakdown of the plastic casing",
      "The melting of the lead plates"
    ],
    "exp": "When the battery nears full charge, excess current splits water into hydrogen and oxygen.",
    "cat": "BattRoom",
    "id": "T21_142"
  },
  {
    "q": "If a surveyor asks to see the battery room lighting, what specific marking are they looking for?",
    "a": "Ex e or Ex d certification markings",
    "opts": [
      "CE mark only",
      "Ex e or Ex d certification markings",
      "IP65 waterproof rating",
      "220V label"
    ],
    "exp": "Surveyors check the luminaire label for explosive (Ex) certification.",
    "cat": "BattRoom",
    "id": "T21_143"
  },
  {
    "q": "How is the acid-resistant tray checked for integrity?",
    "a": "Visual inspection for cracks or chemical degradation",
    "opts": [
      "Filling it with water",
      "Visual inspection for cracks or chemical degradation",
      "Painting it annually",
      "Measuring its resistance"
    ],
    "exp": "The ETO visually inspects the tray for structural integrity during rounds.",
    "cat": "BattRoom",
    "id": "T21_144"
  },
  {
    "q": "What determines if a battery room requires Zone 1 or Zone 2 lighting?",
    "a": "The volume and rate of hydrogen generation calculated for the space",
    "opts": [
      "The number of crew onboard",
      "The color of the paint",
      "The ship's tonnage",
      "The volume and rate of hydrogen generation calculated for the space"
    ],
    "exp": "Hazardous zoning depends on the calculated hydrogen emission rate.",
    "cat": "BattRoom",
    "id": "T21_145"
  },
  {
    "q": "What is the primary function of a liferaft on a ship?",
    "a": "To serve as an inflatable survival craft when a lifeboat cannot be launched",
    "opts": [
      "To transport cargo to shore",
      "To store extra lifejackets",
      "To serve as an inflatable survival craft when a lifeboat cannot be launched",
      "To act as a fender during mooring"
    ],
    "exp": "Liferafts provide emergency buoyancy and shelter.",
    "cat": "Liferaft",
    "id": "T21_146"
  },
  {
    "q": "How is a liferaft typically launched manually?",
    "a": "Throw the canister overboard and pull the painter line to activate inflation",
    "opts": [
      "Shoot it from a designated cannon",
      "Inflate it on deck with a compressor, then lower it",
      "Lower it using the lifeboat davit",
      "Throw the canister overboard and pull the painter line to activate inflation"
    ],
    "exp": "Manual launch involves throwing the canister and pulling the activation lanyard.",
    "cat": "Liferaft",
    "id": "T21_147"
  },
  {
    "q": "What does HRU stand for?",
    "a": "Hydrostatic Release Unit",
    "opts": [
      "Hull Rupture Unit",
      "Hydraulic Rescue Utility",
      "High Range UHF",
      "Hydrostatic Release Unit"
    ],
    "exp": "The HRU is a pressure-activated safety device that releases the liferaft.",
    "cat": "Liferaft",
    "id": "T21_148"
  },
  {
    "q": "At what depth does the HRU automatically activate?",
    "a": "1.5 to 4 metres",
    "opts": [
      "50 metres",
      "0.1 to 0.5 metres",
      "10 to 15 metres",
      "1.5 to 4 metres"
    ],
    "exp": "Water pressure at 1.5-4m depth forces a knife to cut the lashing strap.",
    "cat": "Liferaft",
    "id": "T21_149"
  },
  {
    "q": "After the HRU cuts the securing strap, what causes the liferaft to inflate?",
    "a": "The sinking ship pulls the painter line taut, activating the CO2 cylinder",
    "opts": [
      "The HRU knife directly punctures the cylinder",
      "An electronic timer goes off",
      "The sinking ship pulls the painter line taut, activating the CO2 cylinder",
      "Water entering the canister causes a chemical reaction"
    ],
    "exp": "The raft floats while the ship sinks, pulling the painter line to trigger inflation.",
    "cat": "Liferaft",
    "id": "T21_150"
  },
  {
    "q": "What happens if the ship sinks very quickly and pulls the liferaft underwater?",
    "a": "The painter line breaks at a designed weak link, allowing the raft to float free",
    "opts": [
      "The HRU re-attaches the strap",
      "The painter line breaks at a designed weak link, allowing the raft to float free",
      "The liferaft sinks with the ship",
      "The CO2 cylinder explodes"
    ],
    "exp": "The weak link ensures a sinking vessel does not drag the liferaft down.",
    "cat": "Liferaft",
    "id": "T21_151"
  },
  {
    "q": "What is the standard expiry period for a Hydrostatic Release Unit (HRU)?",
    "a": "2 years",
    "opts": [
      "10 years",
      "2 years",
      "1 year",
      "5 years"
    ],
    "exp": "HRUs must be replaced every 2 years to guarantee the cutting mechanism.",
    "cat": "Liferaft",
    "id": "T21_152"
  },
  {
    "q": "What is the primary difference between SOLAS Pack A and Pack B?",
    "a": "Pack A is for ocean voyages (full equipment); Pack B is for coastal voyages (reduced equipment)",
    "opts": [
      "Pack A is rigid; Pack B is inflatable",
      "Pack A is automatic; Pack B is manual",
      "Pack A is for ocean voyages (full equipment); Pack B is for coastal voyages (reduced equipment)",
      "Pack A holds 10 people; Pack B holds 20 people"
    ],
    "exp": "Pack A contains comprehensive survival gear for international routes.",
    "cat": "Liferaft",
    "id": "T21_153"
  },
  {
    "q": "Which liferaft pack is required for a large cargo vessel on international voyages?",
    "a": "SOLAS Pack A",
    "opts": [
      "SOLAS Pack C",
      "SOLAS Pack B",
      "SOLAS Pack A",
      "No pack is required"
    ],
    "exp": "Ocean-going vessels must carry SOLAS Pack A for maximum survival capability.",
    "cat": "Liferaft",
    "id": "T21_154"
  },
  {
    "q": "How many parachute flares are included in a SOLAS Pack A liferaft?",
    "a": "4",
    "opts": [
      "4",
      "2",
      "10",
      "6"
    ],
    "exp": "SOLAS A packs contain 4 parachute flares.",
    "cat": "Liferaft",
    "id": "T21_155"
  },
  {
    "q": "How much fresh water per person is required in a SOLAS Pack A liferaft?",
    "a": "1.5 litres per person",
    "opts": [
      "5.0 litres per person",
      "0.5 litres per person",
      "3.0 litres per person",
      "1.5 litres per person"
    ],
    "exp": "Pack A mandates 1.5L of sealed fresh water per person.",
    "cat": "Liferaft",
    "id": "T21_156"
  },
  {
    "q": "What is the strict rule regarding seawater in a liferaft?",
    "a": "Do not drink seawater under any circumstances",
    "opts": [
      "Drink it only if mixed with fresh water",
      "Drink it only after boiling",
      "Do not drink seawater under any circumstances",
      "Drink it freely to stay hydrated"
    ],
    "exp": "Seawater causes severe dehydration and kidney failure.",
    "cat": "Liferaft",
    "id": "T21_157"
  },
  {
    "q": "What is the requirement for thermal protective aids in a SOLAS Pack A liferaft?",
    "a": "Sufficient for 10% of the persons the liferaft is permitted to accommodate, or 2, whichever is greater",
    "opts": [
      "Sufficient for 10% of the persons the liferaft is permitted to accommodate, or 2, whichever is greater",
      "None are required",
      "Five total",
      "One for every person"
    ],
    "exp": "Essential for treating crew members suffering from severe hypothermia.",
    "cat": "Liferaft",
    "id": "T21_158"
  },
  {
    "q": "How frequently must an inflatable liferaft be sent ashore for servicing and repacking?",
    "a": "Annually",
    "opts": [
      "Every 6 months",
      "Every 2 years",
      "Every 5 years",
      "Annually"
    ],
    "exp": "SOLAS requires annual servicing at an approved shore-based facility.",
    "cat": "Liferaft",
    "id": "T21_159"
  },
  {
    "q": "What is the purpose of the manual bilge pump in the liferaft?",
    "a": "To remove water that enters the liferaft",
    "opts": [
      "To inflate the raft manually",
      "To remove water that enters the liferaft",
      "To pump drinking water from the sea",
      "To spray water on the canopy for cooling"
    ],
    "exp": "A manual pump is provided to keep the interior dry.",
    "cat": "Liferaft",
    "id": "T21_160"
  },
  {
    "q": "How many anti-seasickness tablets per person are provided in a SOLAS Pack A?",
    "a": "6",
    "opts": [
      "6",
      "2",
      "20",
      "10"
    ],
    "exp": "6 tablets per person are provided to prevent vomiting.",
    "cat": "Liferaft",
    "id": "T21_161"
  },
  {
    "q": "What is the difference between the forward (fwd) liferaft and the aft liferafts on a cargo ship?",
    "a": "They have the same SOLAS specifications, but the fwd raft provides escape for crew trapped far from the bridge",
    "opts": [
      "The fwd raft has Pack B, aft has Pack A",
      "The fwd raft is smaller",
      "They have the same SOLAS specifications, but the fwd raft provides escape for crew trapped far from the bridge",
      "The fwd raft does not have an HRU"
    ],
    "exp": "A 6-person minimum liferaft is located forward to provide an alternative escape route.",
    "cat": "Liferaft",
    "id": "T21_162"
  },
  {
    "q": "What generates the gas to inflate the liferaft?",
    "a": "A high-pressure CO2 and Nitrogen cylinder",
    "opts": [
      "A manual hand pump",
      "A high-pressure CO2 and Nitrogen cylinder",
      "Chemical oxygen generators",
      "An electric air compressor"
    ],
    "exp": "Pulling the painter pierces the cylinder, rapidly inflating the tubes.",
    "cat": "Liferaft",
    "id": "T21_163"
  },
  {
    "q": "Approximately how long does a liferaft take to fully inflate?",
    "a": "30 seconds",
    "opts": [
      "5 seconds",
      "10 minutes",
      "5 minutes",
      "30 seconds"
    ],
    "exp": "Standard CO2 inflation achieves full buoyancy in roughly 30 seconds.",
    "cat": "Liferaft",
    "id": "T21_164"
  },
  {
    "q": "What is the capacity requirement for liferafts on a cargo ship?",
    "a": "Capable of accommodating 100% of the total persons onboard on EACH side of the ship",
    "opts": [
      "50% of the crew on each side",
      "150% of the crew total",
      "Capable of accommodating 100% of the total persons onboard on EACH side of the ship",
      "Exactly 10 persons"
    ],
    "exp": "Liferafts on the accessible side must hold the entire crew if lifeboats fail.",
    "cat": "Liferaft",
    "id": "T21_165"
  },
  {
    "q": "What is the purpose of the water pockets (ballast bags) under the liferaft?",
    "a": "To provide stability and prevent the liferaft from capsizing in high winds",
    "opts": [
      "To provide stability and prevent the liferaft from capsizing in high winds",
      "To collect rainwater",
      "To store drinking water",
      "To act as an anchor"
    ],
    "exp": "Bags fill with seawater, lowering the center of gravity.",
    "cat": "Liferaft",
    "id": "T21_166"
  },
  {
    "q": "What should crew members do if a liferaft inflates upside down?",
    "a": "Use the righting strap on the underside to flip it over",
    "opts": [
      "Use the righting strap on the underside to flip it over",
      "Wait for the wind to flip it",
      "Abandon it and find another raft",
      "Puncture it to sink it"
    ],
    "exp": "A designated righting strap allows a swimmer to pull the raft over.",
    "cat": "Liferaft",
    "id": "T21_167"
  },
  {
    "q": "How is a liferaft canister protected from the elements while stowed on deck?",
    "a": "It is housed in a rigid, watertight GRP (Glass Reinforced Plastic) container",
    "opts": [
      "It is stored below deck in a locker",
      "It is housed in a rigid, watertight GRP (Glass Reinforced Plastic) container",
      "It is wrapped in a canvas tarp",
      "It is kept in a vacuum-sealed plastic bag"
    ],
    "exp": "The GRP canister protects the raft from UV damage and weather.",
    "cat": "Liferaft",
    "id": "T21_168"
  },
  {
    "q": "What is the food ration requirement in a SOLAS Pack A liferaft?",
    "a": "10,000 kJ per person",
    "opts": [
      "10,000 kJ per person",
      "1,000 kJ per person",
      "5,000 kJ per person",
      "50,000 kJ per person"
    ],
    "exp": "High-calorie survival biscuit rations totaling 10,000 kJ per person are required.",
    "cat": "Liferaft",
    "id": "T21_169"
  },
  {
    "q": "Can the ETO test the liferaft inflation system onboard?",
    "a": "No, it must only be activated during an emergency or by an approved service station",
    "opts": [
      "Yes, but only using a manual air pump",
      "Yes, during monthly drills",
      "Yes, annually",
      "No, it must only be activated during an emergency or by an approved service station"
    ],
    "exp": "Testing destroys the CO2 seal. The raft must be sent ashore.",
    "cat": "Liferaft",
    "id": "T21_170"
  },
  {
    "q": "What is the required length of the painter line attached to the liferaft?",
    "a": "Sufficient to reach the waterline at the ship's lightest seagoing condition plus 10 meters, minimum 15m total",
    "opts": [
      "2 meters",
      "Exactly 5 meters",
      "100 meters minimum",
      "Sufficient to reach the waterline at the ship's lightest seagoing condition plus 10 meters, minimum 15m total"
    ],
    "exp": "The painter must be long enough to reach the water and allow drift.",
    "cat": "Liferaft",
    "id": "T21_171"
  },
  {
    "q": "What is the purpose of the Jackknife included in the liferaft equipment?",
    "a": "To cut the painter line once passengers are boarded and the ship is sinking",
    "opts": [
      "To puncture the raft if captured",
      "For self-defense",
      "To cut the painter line once passengers are boarded and the ship is sinking",
      "To open food cans"
    ],
    "exp": "A safety knife is provided specifically to sever the painter.",
    "cat": "Liferaft",
    "id": "T21_172"
  },
  {
    "q": "What indicates to the ETO that a liferaft HRU requires replacement?",
    "a": "The expiry date punched on the HRU casing has passed",
    "opts": [
      "The expiry date punched on the HRU casing has passed",
      "The painter line becomes frayed",
      "The pressure gauge shows low",
      "It starts leaking water"
    ],
    "exp": "HRUs are marked with a punch-hole expiry date (month/year) upon installation.",
    "cat": "Liferaft",
    "id": "T21_173"
  },
  {
    "q": "How is rain water collected in a liferaft?",
    "a": "Using the rainwater collection tubes on the canopy",
    "opts": [
      "Rain water cannot be collected",
      "Using plastic buckets",
      "By ringing out wet clothes",
      "Using the rainwater collection tubes on the canopy"
    ],
    "exp": "The canopy has built-in gutters and tubes to channel rainwater.",
    "cat": "Liferaft",
    "id": "T21_174"
  },
  {
    "q": "What protects a liferaft from being dragged by heavy wind while awaiting rescue?",
    "a": "A sea anchor (drogue)",
    "opts": [
      "A sea anchor (drogue)",
      "The painter line",
      "The ballast bags",
      "A heavy metal anchor"
    ],
    "exp": "A sea anchor creates drag in the water to reduce wind drift.",
    "cat": "Liferaft",
    "id": "T21_175"
  },
  {
    "q": "How many parachute flares are required by SOLAS to be carried in a lifeboat?",
    "a": "4",
    "opts": [
      "6",
      "4",
      "2",
      "12"
    ],
    "exp": "SOLAS III/11.1 mandates exactly 4 rocket parachute flares per lifeboat.",
    "cat": "Pyrotechnics",
    "id": "T21_176"
  },
  {
    "q": "What is the minimum height a rocket parachute flare must reach?",
    "a": "300 metres",
    "opts": [
      "300 metres",
      "1000 metres",
      "100 metres",
      "50 metres"
    ],
    "exp": "The rocket propels the flare to at least 300m so it can be seen over the horizon.",
    "cat": "Pyrotechnics",
    "id": "T21_177"
  },
  {
    "q": "How long must a parachute flare burn?",
    "a": "Minimum 40 seconds",
    "opts": [
      "3 minutes",
      "40 seconds",
      "10 seconds",
      "1 minute"
    ],
    "exp": "The flare descends slowly, burning bright red for at least 40 seconds.",
    "cat": "Pyrotechnics",
    "id": "T21_178"
  },
  {
    "q": "How many hand flares are required in each lifeboat?",
    "a": "6",
    "opts": [
      "4",
      "6",
      "2",
      "10"
    ],
    "exp": "Six hand flares are carried for short-range signaling.",
    "cat": "Pyrotechnics",
    "id": "T21_179"
  },
  {
    "q": "What is the minimum burn time for a hand flare?",
    "a": "1 minute",
    "opts": [
      "5 minutes",
      "3 minutes",
      "30 seconds",
      "1 minute"
    ],
    "exp": "Hand flares burn bright red for a minimum of 1 minute.",
    "cat": "Pyrotechnics",
    "id": "T21_180"
  },
  {
    "q": "How many buoyant smoke signals are required per lifeboat?",
    "a": "2",
    "opts": [
      "6",
      "2",
      "4",
      "1"
    ],
    "exp": "Two buoyant smoke signals are provided for daytime marking.",
    "cat": "Pyrotechnics",
    "id": "T21_181"
  },
  {
    "q": "What color smoke is emitted by the buoyant smoke signal?",
    "a": "Dense orange",
    "opts": [
      "White",
      "Red",
      "Black",
      "Dense orange"
    ],
    "exp": "Orange smoke provides the highest contrast against the ocean surface.",
    "cat": "Pyrotechnics",
    "id": "T21_182"
  },
  {
    "q": "What is the minimum duration of a buoyant smoke signal?",
    "a": "3 minutes",
    "opts": [
      "5 minutes",
      "3 minutes",
      "1 minute",
      "10 minutes"
    ],
    "exp": "The signal must emit smoke continuously for at least 3 minutes.",
    "cat": "Pyrotechnics",
    "id": "T21_183"
  },
  {
    "q": "What is the typical shelf life of marine pyrotechnics?",
    "a": "3 years from the date of manufacture",
    "opts": [
      "5 years",
      "3 years from the date of manufacture",
      "10 years",
      "1 year"
    ],
    "exp": "Pyrotechnic chemicals degrade over time. They must be replaced after 3 years.",
    "cat": "Pyrotechnics",
    "id": "T21_184"
  },
  {
    "q": "How must expired pyrotechnics be disposed of?",
    "a": "Collected by authorized shore-based disposal facilities",
    "opts": [
      "Collected by authorized shore-based disposal facilities",
      "Incinerated in the ship's incinerator",
      "Fired off during New Year celebrations",
      "Thrown overboard at sea"
    ],
    "exp": "They are explosives and must be handed to certified shore contractors.",
    "cat": "Pyrotechnics",
    "id": "T21_185"
  },
  {
    "q": "Why is it illegal to test fire expired pyrotechnics at sea?",
    "a": "It constitutes a false distress signal (Mayday) and triggers a search and rescue response",
    "opts": [
      "It wastes valuable equipment",
      "The smoke pollutes the air",
      "They might fail to ignite",
      "It constitutes a false distress signal (Mayday) and triggers a search and rescue response"
    ],
    "exp": "Any red flare seen at sea is treated as a grave and imminent danger.",
    "cat": "Pyrotechnics",
    "id": "T21_186"
  },
  {
    "q": "Where should pyrotechnics be stored inside the lifeboat?",
    "a": "In a watertight container in the designated pyrotechnic locker",
    "opts": [
      "Loose under the seats",
      "Attached to the outside of the hull",
      "Inside the first aid kit",
      "In a watertight container in the designated pyrotechnic locker"
    ],
    "exp": "They must be kept dry and secure from unauthorized access.",
    "cat": "Pyrotechnics",
    "id": "T21_187"
  },
  {
    "q": "How many total parachute flares are typically required on the bridge of a cargo ship?",
    "a": "12",
    "opts": [
      "6",
      "24",
      "12",
      "4"
    ],
    "exp": "SOLAS requires the ship to carry 12 rocket parachute flares on the bridge.",
    "cat": "Pyrotechnics",
    "id": "T21_188"
  },
  {
    "q": "What is the primary function of the Line-Throwing Apparatus?",
    "a": "To shoot a rocket-propelled line to establish a physical connection with a rescuing vessel",
    "opts": [
      "To act as a harpoon",
      "To measure water depth",
      "To shoot down flares",
      "To shoot a rocket-propelled line to establish a physical connection with a rescuing vessel"
    ],
    "exp": "The apparatus passes a messenger line for towing or personnel transfer.",
    "cat": "Pyrotechnics",
    "id": "T21_189"
  },
  {
    "q": "When should hand flares ideally be used?",
    "a": "When a rescuing vessel or aircraft is in visual range",
    "opts": [
      "When a rescuing vessel or aircraft is in visual range",
      "To signal other crew members inside the ship",
      "As soon as the ship sinks",
      "Only during daytime"
    ],
    "exp": "They burn for only 1 minute and are kept until a rescuer is close enough to see.",
    "cat": "Pyrotechnics",
    "id": "T21_190"
  },
  {
    "q": "How must a hand flare be held during operation?",
    "a": "At arm's length downwind",
    "opts": [
      "Pointing at the rescuing ship",
      "At arm's length downwind",
      "Above the head upwind",
      "Inside the lifeboat canopy"
    ],
    "exp": "Holding it downwind prevents hot slag and smoke from blowing back into the face.",
    "cat": "Pyrotechnics",
    "id": "T21_191"
  },
  {
    "q": "What specific information does the smoke signal provide to a rescue helicopter?",
    "a": "The wind direction and speed at the surface",
    "opts": [
      "The water depth",
      "The wind direction and speed at the surface",
      "The number of survivors",
      "The location of the sinking ship"
    ],
    "exp": "Helicopters approach into the wind. Smoke drift provides vital surface wind data.",
    "cat": "Pyrotechnics",
    "id": "T21_192"
  },
  {
    "q": "Are buoyant smoke signals effective at night?",
    "a": "No, they are for daytime distress signaling",
    "opts": [
      "Yes, they glow in the dark",
      "Yes, they emit a loud siren",
      "No, they are for daytime distress signaling",
      "Yes, they emit infrared heat"
    ],
    "exp": "Smoke is not visible at night; flares are used for night signaling.",
    "cat": "Pyrotechnics",
    "id": "T21_193"
  },
  {
    "q": "What must the ETO/Officers check regarding pyrotechnics during monthly lifeboat rounds?",
    "a": "Inventory quantities and the expiry dates",
    "opts": [
      "Repainting the casing",
      "Weighing each flare",
      "Test firing one flare",
      "Inventory quantities and the expiry dates"
    ],
    "exp": "A visual check confirms all pyros are present and have not exceeded 3 years.",
    "cat": "Pyrotechnics",
    "id": "T21_194"
  },
  {
    "q": "What happens if a pyrotechnic is past its expiry date but appears in perfect condition?",
    "a": "It must be replaced immediately",
    "opts": [
      "It can be kept as a spare",
      "It can be used for training",
      "It must be replaced immediately",
      "It is valid for 1 more year"
    ],
    "exp": "Regulations strictly prohibit the carriage of expired pyrotechnics.",
    "cat": "Pyrotechnics",
    "id": "T21_195"
  },
  {
    "q": "What is the visibility range of a parachute flare in clear weather?",
    "a": "Up to 40 km",
    "opts": [
      "100 km",
      "5 km",
      "Up to 40 km",
      "15 km"
    ],
    "exp": "At 300m height, the bright red flare can be seen up to 40km away.",
    "cat": "Pyrotechnics",
    "id": "T21_196"
  },
  {
    "q": "How many rockets are included in the Line-Throwing Apparatus?",
    "a": "At least 4",
    "opts": [
      "At least 4",
      "2",
      "6",
      "1"
    ],
    "exp": "The apparatus includes at least 4 rockets and 4 lines.",
    "cat": "Pyrotechnics",
    "id": "T21_197"
  },
  {
    "q": "Which pyrotechnic is best suited for indicating wind direction to aircraft?",
    "a": "Buoyant orange smoke signal",
    "opts": [
      "Buoyant orange smoke signal",
      "Line-throwing rocket",
      "Parachute flare",
      "Hand flare"
    ],
    "exp": "The dense orange smoke floats on the surface, clearly showing wind direction.",
    "cat": "Pyrotechnics",
    "id": "T21_198"
  },
  {
    "q": "Under which MARPOL Annex is the disposal of pyrotechnics at sea prohibited?",
    "a": "MARPOL Annex V",
    "opts": [
      "MARPOL Annex IV",
      "MARPOL Annex I",
      "MARPOL Annex V",
      "MARPOL Annex VI"
    ],
    "exp": "Annex V covers garbage pollution, which includes the prohibition of dumping pyros.",
    "cat": "Pyrotechnics",
    "id": "T21_199"
  },
  {
    "q": "What color is the hand flare flame required to be?",
    "a": "Bright red",
    "opts": [
      "Bright white",
      "Bright orange",
      "Bright red",
      "Bright yellow"
    ],
    "exp": "Red is the internationally recognized color for distress signals at sea.",
    "cat": "Pyrotechnics",
    "id": "T21_200"
  },
  {
    "q": "What is the immediate action if a hand flare fails to ignite?",
    "a": "Hold it outboard over the water for at least 30 seconds before discarding",
    "opts": [
      "Open the casing to fix it",
      "Throw it into the lifeboat immediately",
      "Try to relight it with a lighter",
      "Hold it outboard over the water for at least 30 seconds before discarding"
    ],
    "exp": "Hang-fires can ignite late. Hold it safely away from the boat before dropping it in the sea.",
    "cat": "Pyrotechnics",
    "id": "T21_201"
  },
  {
    "q": "What is the purpose of the water-resistant container for pyrotechnics?",
    "a": "To protect the chemical compositions from moisture degradation",
    "opts": [
      "To make them heavier",
      "To keep them from floating away",
      "To protect them from UV light only",
      "To protect the chemical compositions from moisture degradation"
    ],
    "exp": "Moisture ruins pyrotechnic compounds, hence watertight storage is mandatory.",
    "cat": "Pyrotechnics",
    "id": "T21_202"
  },
  {
    "q": "Are there pyrotechnics in a SOLAS Pack B liferaft?",
    "a": "Yes, but fewer than in a Pack A",
    "opts": [
      "No, they are only in Pack A",
      "Yes, but fewer than in a Pack A",
      "Yes, they only have smoke signals",
      "Yes, exactly the same amount as Pack A"
    ],
    "exp": "Pack B is a reduced coastal pack and carries fewer flares.",
    "cat": "Pyrotechnics",
    "id": "T21_203"
  },
  {
    "q": "What is the firing angle typically recommended for a parachute flare in calm conditions?",
    "a": "Slightly downwind, nearly vertical (e.g. 15 degrees off vertical)",
    "opts": [
      "Directly at the water",
      "Slightly downwind, nearly vertical (e.g. 15 degrees off vertical)",
      "45 degrees upwind",
      "Horizontally towards the rescuer"
    ],
    "exp": "Firing slightly downwind ensures the parachute drifts away from the firing craft.",
    "cat": "Pyrotechnics",
    "id": "T21_204"
  },
  {
    "q": "What pyrotechnic is NOT required in a lifeboat?",
    "a": "White collision warning flares",
    "opts": [
      "Hand flares",
      "White collision warning flares",
      "Parachute flares",
      "Buoyant smoke signals"
    ],
    "exp": "White flares are sometimes used by vessels to warn of collision, but are not LSA distress equipment.",
    "cat": "Pyrotechnics",
    "id": "T21_205"
  },
  {
    "q": "What does EEBD stand for?",
    "a": "Emergency Escape Breathing Device",
    "opts": [
      "External Engine Breathing Duct",
      "Enclosed Entry Breathing Demand",
      "Emergency Escape Breathing Device",
      "Electronic Escape Beacon Device"
    ],
    "exp": "The EEBD is a self-contained device designed solely for escape from hazardous atmospheres.",
    "cat": "EEBD/SCBA",
    "id": "T21_206"
  },
  {
    "q": "What is the ONLY permitted use of an EEBD?",
    "a": "Escape from a space filled with smoke or toxic gases",
    "opts": [
      "Underwater repairs",
      "Enclosed space entry for inspection",
      "Firefighting operations",
      "Escape from a space filled with smoke or toxic gases"
    ],
    "exp": "EEBDs provide a short duration of air for evacuation only. They are NOT for firefighting.",
    "cat": "EEBD/SCBA",
    "id": "T21_207"
  },
  {
    "q": "How many persons can use a single EEBD?",
    "a": "One person only",
    "opts": [
      "One person only",
      "Two people sharing the hood",
      "Depends on cylinder size",
      "Up to five people sequentially"
    ],
    "exp": "The EEBD is a single-use, single-person device.",
    "cat": "EEBD/SCBA",
    "id": "T21_209"
  },
  {
    "q": "What is the minimum number of EEBDs required on the bridge by SOLAS?",
    "a": "2",
    "opts": [
      "6",
      "2",
      "4",
      "1"
    ],
    "exp": "SOLAS requires at least 2 EEBDs situated on the bridge for navigating officers.",
    "cat": "EEBD/SCBA",
    "id": "T21_210"
  },
  {
    "q": "How many EEBDs are typically required in a cargo ship's machinery space?",
    "a": "At least 2 in the space, plus 2 near the entry/exit points",
    "opts": [
      "None are required in the engine room",
      "1 near the engine control room",
      "At least 2 in the space, plus 2 near the entry/exit points",
      "1 for every crew member"
    ],
    "exp": "SOLAS requires EEBDs distributed so any person working can reach one quickly.",
    "cat": "EEBD/SCBA",
    "id": "T21_211"
  },
  {
    "q": "What does SCBA stand for?",
    "a": "Self-Contained Breathing Apparatus",
    "opts": [
      "Self-Contained Breathing Apparatus",
      "Standard Capacity Breathing Air",
      "Shipboard Casualty Breathing Aid",
      "Safety Control Breathing Air"
    ],
    "exp": "An SCBA is a heavy-duty, positive-pressure breathing system used for firefighting and rescue.",
    "cat": "EEBD/SCBA",
    "id": "T21_212"
  },
  {
    "q": "What is the standard operating time for an SCBA?",
    "a": "Minimum 30 minutes",
    "opts": [
      "15 minutes",
      "4 hours",
      "Minimum 30 minutes",
      "10 minutes"
    ],
    "exp": "SCBAs contain high-pressure air providing at least 30 minutes of breathing time.",
    "cat": "EEBD/SCBA",
    "id": "T21_213"
  },
  {
    "q": "What is the minimum number of SCBA sets required on a cargo ship?",
    "a": "2",
    "opts": [
      "1",
      "10",
      "2",
      "4"
    ],
    "exp": "SOLAS requires a minimum of two complete fireman's outfits, including two SCBA sets.",
    "cat": "EEBD/SCBA",
    "id": "T21_214"
  },
  {
    "q": "What must be checked on an SCBA cylinder before use?",
    "a": "Pressure must be at least 90% of rated working pressure",
    "opts": [
      "Pressure must be at least 90% of rated working pressure",
      "The color of the cylinder",
      "The weight of the mask",
      "The temperature of the air"
    ],
    "exp": "If the gauge reads below 90%, it must be swapped or refilled.",
    "cat": "EEBD/SCBA",
    "id": "T21_215"
  },
  {
    "q": "When does the SCBA low-pressure alarm (whistle) typically sound?",
    "a": "At approximately 50-55 bar (leaving roughly 5-10 minutes of air)",
    "opts": [
      "At 100 bar",
      "When the cylinder is completely empty",
      "At 200 bar",
      "At approximately 50-55 bar (leaving roughly 5-10 minutes of air)"
    ],
    "exp": "The whistle warns the user to evacuate the hazardous area immediately.",
    "cat": "EEBD/SCBA",
    "id": "T21_216"
  },
  {
    "q": "What is the key difference in application between an EEBD and an SCBA?",
    "a": "EEBD is for escape only (10 min); SCBA is for firefighting/rescue (30+ min)",
    "opts": [
      "EEBD is for firefighting; SCBA is for escape",
      "EEBD is for escape only (10 min); SCBA is for firefighting/rescue (30+ min)",
      "EEBD uses oxygen; SCBA uses nitrogen",
      "There is no difference"
    ],
    "exp": "EEBD hoods melt in direct fire. Only SCBAs provide protection for fighting fires.",
    "cat": "EEBD/SCBA",
    "id": "T21_217"
  },
  {
    "q": "What equipment is required to refill empty SCBA cylinders onboard?",
    "a": "A dedicated breathing air compressor (Class E air)",
    "opts": [
      "An oxygen generator",
      "A dedicated breathing air compressor (Class E air)",
      "The main engine starting air compressor",
      "A standard workshop compressor"
    ],
    "exp": "Only specialized compressors with strict filtration can produce safe breathing air.",
    "cat": "EEBD/SCBA",
    "id": "T21_218"
  },
  {
    "q": "How often must SCBA composite cylinders undergo a hydrostatic pressure test?",
    "a": "Typically every 5 years",
    "opts": [
      "Every 2 years",
      "Annually",
      "Typically every 5 years",
      "Never"
    ],
    "exp": "Cylinders are subjected to 1.5x working pressure every 5 years.",
    "cat": "EEBD/SCBA",
    "id": "T21_219"
  },
  {
    "q": "Why does an SCBA mask use positive pressure?",
    "a": "To ensure any leak in the mask pushes air out, preventing toxic gases from entering",
    "opts": [
      "To cool the wearer's face",
      "To make breathing harder",
      "To inflate the protective suit",
      "To ensure any leak in the mask pushes air out, preventing toxic gases from entering"
    ],
    "exp": "Positive pressure demand valves maintain higher pressure inside the mask.",
    "cat": "EEBD/SCBA",
    "id": "T21_220"
  },
  {
    "q": "What is the SOLAS requirement for emergency escapes from machinery spaces?",
    "a": "At least 2 escape routes, one of which must be a vertical trunk or ladder to the open deck",
    "opts": [
      "At least 2 escape routes, one of which must be a vertical trunk or ladder to the open deck",
      "1 route through the control room",
      "No specific requirement",
      "3 routes leading to the cargo hold"
    ],
    "exp": "Redundant escape routes guarantee that crew can evacuate if a fire blocks the primary exit.",
    "cat": "EEBD/SCBA",
    "id": "T21_221"
  },
  {
    "q": "What routine ETO/Crew check is performed on wall-mounted EEBDs?",
    "a": "Check the pressure gauge is in the green zone and the expiry date is valid",
    "opts": [
      "Check the pressure gauge is in the green zone and the expiry date is valid",
      "Test breathing from the hood",
      "Wash the hood with soap",
      "Refill the cylinder"
    ],
    "exp": "The gauge is checked during rounds. EEBDs cannot be tested by breathing.",
    "cat": "EEBD/SCBA",
    "id": "T21_222"
  },
  {
    "q": "How quickly must an EEBD be capable of being donned?",
    "a": "Within approximately 30 seconds",
    "opts": [
      "5 minutes",
      "10 seconds",
      "Within approximately 30 seconds",
      "2 minutes"
    ],
    "exp": "The hood design allows crew to pull it over their heads and activate air instantly.",
    "cat": "EEBD/SCBA",
    "id": "T21_223"
  },
  {
    "q": "What feature of the EEBD hood protects the user during escape?",
    "a": "It is made of fire-resistant, transparent material to protect the face from radiant heat",
    "opts": [
      "It is completely opaque",
      "It is made of steel",
      "It has a built-in radio",
      "It is made of fire-resistant, transparent material to protect the face from radiant heat"
    ],
    "exp": "The hood protects the hair and face from heat flashes while maintaining visibility.",
    "cat": "EEBD/SCBA",
    "id": "T21_224"
  },
  {
    "q": "Are spare cylinders required for the SCBA sets onboard?",
    "a": "Yes, each SCBA set must have a spare cylinder",
    "opts": [
      "No, they are filled directly from a hose",
      "Yes, each SCBA set must have a spare cylinder",
      "No, cylinders are single-use",
      "Only if the ship has no compressor"
    ],
    "exp": "SOLAS requires backup cylinders so firefighters can swap tanks quickly.",
    "cat": "EEBD/SCBA",
    "id": "T21_225"
  },
  {
    "q": "Can EEBDs be used for entering an enclosed space with a low oxygen alarm?",
    "a": "No, they are strictly for emergency escape only",
    "opts": [
      "Yes, if the trip is shorter than 5 minutes",
      "No, they are strictly for emergency escape only",
      "Yes, for any enclosed space entry",
      "Yes, but only if two people go together"
    ],
    "exp": "EEBDs do not have the capacity, durability, or positive pressure required for safe enclosed space entry.",
    "cat": "EEBD/SCBA",
    "id": "T21_226"
  },
  {
    "q": "What visual indication shows an SCBA cylinder is full?",
    "a": "The pressure gauge reads typically 200 to 300 bar",
    "opts": [
      "The pressure gauge reads typically 200 to 300 bar",
      "A green light turns on",
      "The cylinder is warm",
      "The pressure gauge reads 10 bar"
    ],
    "exp": "SCBA cylinders are filled to high pressure, normally 200 or 300 bar.",
    "cat": "EEBD/SCBA",
    "id": "T21_227"
  },
  {
    "q": "Who is required to be trained in donning an EEBD?",
    "a": "All seafarers onboard as part of safety familiarization",
    "opts": [
      "Only the officers",
      "Only the engineering crew",
      "All seafarers onboard as part of safety familiarization",
      "Only the rescue boat crew"
    ],
    "exp": "Everyone must know how to use an EEBD because anyone could be trapped by smoke.",
    "cat": "EEBD/SCBA",
    "id": "T21_228"
  },
  {
    "q": "How is the SCBA low-pressure alarm tested during pre-use checks?",
    "a": "By closing the cylinder valve and venting the air until the whistle sounds",
    "opts": [
      "By pressing an electronic test button",
      "By entering a smoke-filled room",
      "By listening to it constantly",
      "By closing the cylinder valve and venting the air until the whistle sounds"
    ],
    "exp": "Bleeding the air line verifies the mechanical whistle actuates at ~55 bar.",
    "cat": "EEBD/SCBA",
    "id": "T21_229"
  },
  {
    "q": "What must be done to an SCBA set immediately after use?",
    "a": "Clean the mask, replace the cylinder with a full spare, and log the use",
    "opts": [
      "Leave it on deck to air out",
      "Throw away the mask",
      "Put it back in the locker exactly as is",
      "Clean the mask, replace the cylinder with a full spare, and log the use"
    ],
    "exp": "The set must be restored to 100% readiness immediately after any operation.",
    "cat": "EEBD/SCBA",
    "id": "T21_230"
  },
  {
    "q": "What happens if a crew member with a thick beard tries to use an SCBA?",
    "a": "The mask will not form a proper seal, compromising the positive pressure",
    "opts": [
      "The whistle sounds continuously",
      "The mask will not form a proper seal, compromising the positive pressure",
      "The cylinder drains twice as fast",
      "Nothing, it works perfectly"
    ],
    "exp": "Facial hair prevents the silicone skirt of the mask from sealing against the skin.",
    "cat": "EEBD/SCBA",
    "id": "T21_231"
  },
  {
    "q": "Is the EEBD air supply activated automatically or manually?",
    "a": "Usually automatically when the hood is pulled from the bag or manually by a pin/valve",
    "opts": [
      "Usually automatically when the hood is pulled from the bag or manually by a pin/valve",
      "By speaking loudly into the hood",
      "Only by a remote control on the bridge",
      "By blowing into a tube"
    ],
    "exp": "Depending on the model, removing the hood pulls an activation pin or requires turning a valve.",
    "cat": "EEBD/SCBA",
    "id": "T21_232"
  },
  {
    "q": "Why is it important to check the EEBD pressure gauge regularly?",
    "a": "To ensure the cylinder has not leaked over time and remains full for an emergency",
    "opts": [
      "To drain condensation",
      "To recalibrate the gauge needle",
      "To ensure the cylinder has not leaked over time and remains full for an emergency",
      "To change the air inside"
    ],
    "exp": "A slow leak over months could leave the EEBD empty when a crew member desperately needs it.",
    "cat": "EEBD/SCBA",
    "id": "T21_233"
  },
  {
    "q": "What should a crew member do if their EEBD runs out of air before reaching safety?",
    "a": "Remove the hood to prevent suffocation and continue escaping",
    "opts": [
      "Keep the hood on and hold breath",
      "Stop moving and wait for rescue",
      "Remove the hood to prevent suffocation and continue escaping",
      "Connect it to another EEBD"
    ],
    "exp": "Once empty, the hood will trap CO2 and suffocate the user if not removed.",
    "cat": "EEBD/SCBA",
    "id": "T21_234"
  },
  {
    "q": "What is the primary maintenance task for SCBA sets by approved shore technicians?",
    "a": "Annual inspection, calibration of demand valves, and hydrostatic cylinder testing",
    "opts": [
      "Refilling the air only",
      "Repainting the cylinders",
      "Annual inspection, calibration of demand valves, and hydrostatic cylinder testing",
      "Washing the harness straps"
    ],
    "exp": "Class rules require certified technicians to verify the pneumatic systems annually.",
    "cat": "EEBD/SCBA",
    "id": "T21_235"
  },
  {
    "q": "What is the minimum speed required for a standard Rescue Boat?",
    "a": "6 knots",
    "opts": [
      "15 knots",
      "3 knots",
      "6 knots",
      "8 knots"
    ],
    "exp": "A standard rescue boat must maintain at least 6 knots for 4 hours.",
    "cat": "Rescue Boat",
    "id": "T21_236"
  },
  {
    "q": "What is the minimum speed required for a Fast Rescue Boat (FRB)?",
    "a": "8 knots",
    "opts": [
      "6 knots",
      "20 knots",
      "35 knots",
      "8 knots"
    ],
    "exp": "Fast rescue boats are designed for rapid casualty retrieval and must maintain at least 8 knots.",
    "cat": "Rescue Boat",
    "id": "T21_237"
  },
  {
    "q": "What is the time limit for hoisting a fully loaded rescue boat back aboard?",
    "a": "Maximum 5 minutes",
    "opts": [
      "2 minutes",
      "10 minutes",
      "Maximum 5 minutes",
      "30 minutes"
    ],
    "exp": "SOLAS requires the davit winch motor to recover the loaded boat within 5 minutes.",
    "cat": "Rescue Boat",
    "id": "T21_238"
  },
  {
    "q": "What is the primary purpose of an immersion suit?",
    "a": "To protect against hypothermia in cold water",
    "opts": [
      "To protect against hypothermia in cold water",
      "To act as a diving suit",
      "To protect against fire",
      "To prevent shark attacks"
    ],
    "exp": "Immersion suits insulate the body, greatly extending survival time in freezing water.",
    "cat": "Rescue Boat",
    "id": "T21_239"
  },
  {
    "q": "How quickly must an immersion suit be donned (including lifejacket)?",
    "a": "Within 2 minutes",
    "opts": [
      "Within 2 minutes",
      "30 seconds",
      "1 minute",
      "5 minutes"
    ],
    "exp": "Crew must practice donning the suit unassisted to meet the SOLAS 2-minute requirement.",
    "cat": "Rescue Boat",
    "id": "T21_240"
  },
  {
    "q": "What is the thermal protection standard for an immersion suit?",
    "a": "Core temperature must not drop more than 2\u00b0C (stay > 34\u00b0C) after 6 hours in 0-2\u00b0C water",
    "opts": [
      "No standard exists",
      "Core temp stays > 30\u00b0C for 1 hour",
      "Core temperature must not drop more than 2\u00b0C (stay > 34\u00b0C) after 6 hours in 0-2\u00b0C water",
      "No temperature drop after 24 hours"
    ],
    "exp": "The suit must provide high insulation to sustain life for 6 hours in freezing conditions.",
    "cat": "Rescue Boat",
    "id": "T21_242"
  },
  {
    "q": "What new test is mandatory for lifejackets supplied after January 1, 2026?",
    "a": "24-hour buoyancy retention and 5-second self-righting stability test",
    "opts": [
      "100-meter drop test",
      "Fire resistance test",
      "Acid resistance test",
      "24-hour buoyancy retention and 5-second self-righting stability test"
    ],
    "exp": "Ensures lifejackets don't absorb water and can turn an unconscious person face-up.",
    "cat": "Rescue Boat",
    "id": "T21_243"
  },
  {
    "q": "What is the minimum buoyancy requirement for an adult lifejacket?",
    "a": "150 N (Newtons)",
    "opts": [
      "150 N",
      "250 N",
      "50 N",
      "100 N"
    ],
    "exp": "Standard adult lifejackets must provide at least 150 Newtons of buoyancy.",
    "cat": "Rescue Boat",
    "id": "T21_245"
  },
  {
    "q": "How many EPIRBs (Emergency Position Indicating Radio Beacons) are required on a cargo ship?",
    "a": "1 (Category I, float-free)",
    "opts": [
      "1 (Category I, float-free)",
      "2",
      "One in each lifeboat",
      "4"
    ],
    "exp": "Ships must carry one main float-free EPIRB, typically mounted on the bridge wing.",
    "cat": "Rescue Boat",
    "id": "T21_246"
  },
  {
    "q": "What is the minimum transmission time for an activated EPIRB?",
    "a": "48 hours",
    "opts": [
      "48 hours",
      "12 hours",
      "96 hours",
      "24 hours"
    ],
    "exp": "The EPIRB battery must sustain continuous distress signal transmission for at least 48 hours.",
    "cat": "Rescue Boat",
    "id": "T21_247"
  },
  {
    "q": "How many SARTs (Search and Rescue Transponders) are required on a vessel over 500 GT?",
    "a": "Minimum 2 (one per side)",
    "opts": [
      "3",
      "1",
      "Minimum 2 (one per side)",
      "4"
    ],
    "exp": "Vessels over 500 GT must carry at least two SARTs to be taken into survival craft.",
    "cat": "Rescue Boat",
    "id": "T21_248"
  },
  {
    "q": "What is the operational battery requirement for a SART?",
    "a": "96 hours in standby mode plus 8 hours continuous transmission",
    "opts": [
      "12 hours total",
      "48 hours standby only",
      "96 hours in standby mode plus 8 hours continuous transmission",
      "24 hours transmit"
    ],
    "exp": "The SART must survive 4 days waiting for a radar ping, then transmit actively for 8 hours.",
    "cat": "Rescue Boat",
    "id": "T21_249"
  },
  {
    "q": "What vessels are required to carry Fast Rescue Boats (FRBs) instead of standard rescue boats?",
    "a": "Passenger ships and some offshore vessels",
    "opts": [
      "Passenger ships and some offshore vessels",
      "Bulk carriers",
      "Oil tankers",
      "Container ships"
    ],
    "exp": "Passenger ships require FRBs for rapid deployment and retrieval.",
    "cat": "Rescue Boat",
    "id": "T21_250"
  },
  {
    "q": "What is the flash rate of an immersion suit survivor light?",
    "a": "50-70 flashes per minute",
    "opts": [
      "10-20 flashes per minute",
      "50-70 flashes per minute",
      "100-120 flashes per minute",
      "Continuous beam (no flash)"
    ],
    "exp": "The light flashes 50 to 70 times a minute to catch the attention of rescuers.",
    "cat": "Rescue Boat",
    "id": "T21_251"
  },
  {
    "q": "How often are immersion suits required to undergo a hydrostatic pressure test at a service station?",
    "a": "Typically every 3 years",
    "opts": [
      "Never",
      "Monthly",
      "Typically every 3 years",
      "Annually"
    ],
    "exp": "To ensure seams and zippers remain watertight, suits are pressure tested periodically.",
    "cat": "Rescue Boat",
    "id": "T21_252"
  },
  {
    "q": "What equipment is standard inside a standard Rescue Boat?",
    "a": "Engine, painter line, bailer, and first aid kit",
    "opts": [
      "Parachute flares only",
      "Sonar and radar",
      "Engine, painter line, bailer, and first aid kit",
      "Water desalination plant"
    ],
    "exp": "Rescue boats carry basic equipment for retrieving people from the water and towing liferafts.",
    "cat": "Rescue Boat",
    "id": "T21_253"
  },
  {
    "q": "What is the ETO's responsibility regarding the new 2026 lifejacket amendments?",
    "a": "Verify with the supplier that replacement lifejackets ordered are type-approved to the new standard",
    "opts": [
      "Conduct the 24-hour buoyancy test onboard",
      "Verify with the supplier that replacement lifejackets ordered are type-approved to the new standard",
      "Modify old lifejackets to meet the standard",
      "Throw away all pre-2026 lifejackets immediately"
    ],
    "exp": "The ETO must ensure procurement orders specify the new type-approved models.",
    "cat": "Rescue Boat",
    "id": "T21_254"
  },
  {
    "q": "What visibility range is required for the immersion suit location light?",
    "a": "Minimum 2 nautical miles in clear dark conditions",
    "opts": [
      "5 nautical miles",
      "1 nautical mile",
      "0.5 nautical miles",
      "Minimum 2 nautical miles in clear dark conditions"
    ],
    "exp": "The flashing light must be powerful enough to be spotted by vessels 2 miles away at night.",
    "cat": "Rescue Boat",
    "id": "T21_255"
  },
  {
    "q": "What is the minimum capacity of a rescue boat?",
    "a": "At least 5 seated persons and 1 lying down",
    "opts": [
      "2 seated persons",
      "20 standing persons",
      "10 seated persons",
      "At least 5 seated persons and 1 lying down"
    ],
    "exp": "It must hold a rescue crew and at least one injured casualty lying on a stretcher.",
    "cat": "Rescue Boat",
    "id": "T21_256"
  },
  {
    "q": "How quickly must a Fast Rescue Boat (FRB) be capable of being launched?",
    "a": "Within 5 minutes",
    "opts": [
      "Within 5 minutes",
      "Immediately via free-fall",
      "There is no time limit",
      "Within 15 minutes"
    ],
    "exp": "FRBs must be ready for highly rapid deployment to save persons in the water.",
    "cat": "Rescue Boat",
    "id": "T21_257"
  },
  {
    "q": "What is the maximum lowering speed for a rescue boat?",
    "a": "Capped at 1.3 metres per second",
    "opts": [
      "Gravity free-fall only",
      "3.0 m/s",
      "Capped at 1.3 metres per second",
      "0.5 m/s"
    ],
    "exp": "Like lifeboats, the new amendment limits the lowering speed to prevent hard impact.",
    "cat": "Rescue Boat",
    "id": "T21_258"
  },
  {
    "q": "What must an immersion suit cover?",
    "a": "The whole body except the face",
    "opts": [
      "The whole body except the face",
      "Legs and arms only",
      "Only the torso",
      "The head only"
    ],
    "exp": "It is a full-body suit protecting against severe cold water shock.",
    "cat": "Rescue Boat",
    "id": "T21_259"
  },
  {
    "q": "Can an immersion suit be worn without a lifejacket?",
    "a": "Only if the suit itself provides the required buoyancy (150 N) and is approved as a combined suit",
    "opts": [
      "Yes, if the wearer can swim",
      "Only if the suit itself provides the required buoyancy (150 N) and is approved as a combined suit",
      "Yes, always",
      "No, never"
    ],
    "exp": "Some suits require a separate lifejacket, while others have built-in buoyancy.",
    "cat": "Rescue Boat",
    "id": "T21_260"
  },
  {
    "q": "What is the EPIRB hydrostatic release expiry time?",
    "a": "Typically 2 years",
    "opts": [
      "1 year",
      "5 years",
      "Typically 2 years",
      "10 years"
    ],
    "exp": "Like liferaft HRUs, EPIRB releases expire and must be replaced every two years.",
    "cat": "Rescue Boat",
    "id": "T21_261"
  },
  {
    "q": "What frequency is used for the GMDSS portable VHF radiotelephones?",
    "a": "VHF Marine Band (156-174 MHz), particularly Channel 16",
    "opts": [
      "9 GHz radar band",
      "UHF Band",
      "Medium Frequency (MF)",
      "VHF Marine Band (156-174 MHz), particularly Channel 16"
    ],
    "exp": "They communicate on standard VHF marine channels for distress and coordination.",
    "cat": "Rescue Boat",
    "id": "T21_262"
  },
  {
    "q": "What defines the required number of lifejackets on a cargo ship?",
    "a": "One for every person onboard, plus additional for watchkeepers and remotely located persons",
    "opts": [
      "150% of the passenger limit",
      "Only enough for the bridge crew",
      "One for every person onboard, plus additional for watchkeepers and remotely located persons",
      "Exactly 10 per ship"
    ],
    "exp": "SOLAS requires lifejackets for all, plus spares on the bridge, engine control room, and forward stations.",
    "cat": "Rescue Boat",
    "id": "T21_263"
  },
  {
    "q": "How is a SART tested during routine maintenance?",
    "a": "Using the self-test switch which briefly interacts with the ship's 9GHz radar",
    "opts": [
      "By leaving it on continuously",
      "Using the self-test switch which briefly interacts with the ship's 9GHz radar",
      "By submerging it in water",
      "By dropping it from the bridge"
    ],
    "exp": "The self-test function verifies battery and transmitter health without causing a false alarm.",
    "cat": "Rescue Boat",
    "id": "T21_264"
  },
  {
    "q": "What provides power for the embarkation station emergency lighting during a total blackout?",
    "a": "The Emergency Generator or Transitional Battery Source",
    "opts": [
      "Solar panels",
      "The Emergency Generator or Transitional Battery Source",
      "The main engine",
      "The lifeboat batteries"
    ],
    "exp": "Emergency lighting is wired to the ESB to ensure the deck is lit when abandoning ship.",
    "cat": "Rescue Boat",
    "id": "T21_265"
  }
]);
window.loadQuizzes("T23_BatteriesDC", [
  {
    "q": "SG readings for fully charged and fully discharged lead-acid battery at 25\u00b0C?",
    "a": "Fully charged: ~1.280; Fully discharged: ~1.100 to 1.150",
    "opts": ["1.500 charged; 1.280 discharged", "1.100 charged; 1.280 discharged (reversed)", "1.200 charged; 1.000 discharged", "Fully charged: ~1.280; Fully discharged: ~1.100 to 1.150"],
    "exp": "As lead-acid battery discharges: H2SO4 (acid) consumed \u2192 forms water + PbSO4 \u2192 electrolyte becomes more dilute \u2192 SG drops from ~1.280 to ~1.100-1.150. SG is the best indicator of state of charge for lead-acid. All cells should agree within 0.050 - diverging cell = suspect.",
    "cat": "LEAD_ACID",
    "id": "T23B_001"
  },
  {
    "q": "Nominal voltage of a single lead-acid cell; how many for 12V battery?",
    "a": "2.0V per cell; 6 cells in series",
    "opts": ["1.2V per cell; 10 cells in series", "2.4V per cell; 5 cells in series", "12V per cell; single cell", "2.0V per cell; 6 cells in series"],
    "exp": "Lead-acid: 2.0V/cell nominal. 12V = 6 \u00d7 2.0V. 24V = 12 cells. 48V = 24 cells. Fully charged cell = ~2.15V (open circuit). End of discharge = ~1.75V/cell. Voltage and SG both indicate state of charge. Compare: Ni-Cd = 1.2V/cell. Li-ion LFP = 3.2V/cell.",
    "cat": "LEAD_ACID",
    "id": "T23B_002"
  },
  {
    "q": "What liquid must exclusively be used to top up lead-acid battery electrolyte?",
    "a": "Distilled water only - tap water minerals contaminate cells and destroy battery",
    "opts": ["Concentrated sulphuric acid to restore SG", "Potassium hydroxide to neutralise acid buildup", "Saltwater to increase electrolyte conductivity", "Distilled water only - tap water minerals contaminate cells and destroy battery"],
    "exp": "Only water evaporates/electrolyses from electrolyte - not acid. Top up with distilled (or demineralised) water only. Tap water minerals (calcium, magnesium, chlorides) contaminate electrolyte and deposit on plates reducing capacity. Add acid ONLY if electrolyte spilled (not for routine topping up).",
    "cat": "LEAD_ACID",
    "id": "T23B_003"
  },
  {
    "q": "What causes permanent sulphation and how does equalising charging prevent it?",
    "a": "Sulphation: battery left discharged \u2192 lead sulphate crystals harden on plates. Equalising charge maintains full SoC preventing crystal hardening",
    "opts": ["Sulphation from too much distilled water - equalising boils off excess", "Sulphation from freezing - trickle charge generates heat to melt ice", "Sulphation is a manufacturing defect - equalising only delays failure", "Sulphation: battery left discharged \u2192 lead sulphate crystals harden on plates. Equalising charge maintains full SoC preventing crystal hardening"],
    "exp": "Sulphation: PbSO4 crystals form during normal discharge. If battery left discharged for extended time, soft reversible crystals harden into large irreversible crystals - block active plate material = permanent capacity loss. Float/equalising charge keeps battery fully charged, preventing crystal accumulation.",
    "cat": "LEAD_ACID",
    "id": "T23B_004"
  },
  {
    "q": "Ni-Cd battery nominal cell voltage and service life?",
    "a": "1.2V per cell; service life 10-20 years in float service",
    "opts": ["2.0V/cell; 3-7 years (that is lead-acid)", "3.2V/cell; 5-10 years (LFP lithium)", "12V/cell; 20-30 years", "1.2V per cell; service life 10-20 years in float service"],
    "exp": "Ni-Cd: 1.2V/cell nominal. Excellent service life 10-20 years in float service. Compare: lead-acid = 2.0V/cell, 3-7 years. Ni-Cd advantages: superior cold performance, tolerates overcharge better, lower self-discharge, virtually maintenance-free electrolyte. Disadvantages: higher cost, memory effect, contains toxic cadmium.",
    "cat": "NI_CD",
    "id": "T23B_005"
  },
  {
    "q": "Why are Ni-Cd batteries preferred for lifeboats in cold climates?",
    "a": "Retain full capacity and performance at extreme low temperatures down to -20\u00b0C",
    "opts": ["Automatically generate internal heater current to warm engine block", "Lead-acid suffers thermal runaway in sub-zero weather", "Ni-Cd requires no charging and can sit decades in Arctic conditions", "Retain full capacity and performance at extreme low temperatures down to -20\u00b0C"],
    "exp": "Lead-acid: internal resistance increases dramatically below 0\u00b0C \u2192 available CCA drops by 50%+ at -18\u00b0C. Ni-Cd: alkaline chemistry maintains performance well down to -20\u00b0C and beyond. Critical for lifeboat starting in Arctic/Antarctic waters where reliable engine cranking is life-safety critical.",
    "cat": "NI_CD",
    "id": "T23B_006"
  },
  {
    "q": "What is the memory effect in Ni-Cd batteries?",
    "a": "Repeated partial discharge-recharge cycles causes battery to appear to have lower capacity - only uses the cycling range as its effective capacity",
    "opts": ["Battery permanently memorises highest voltage peak and trips charger if exceeded", "BMS records cycles and forces shutdown after 1000 uses", "If fully drained, deletes data from connected GMDSS radio", "Repeated partial discharge-recharge cycles causes battery to appear to have lower capacity - only uses the cycling range as its effective capacity"],
    "exp": "Memory effect: if Ni-Cd always discharged to 60% then recharged, it develops a 'memory' of this cycle - appears fully charged but delivers only 40% usable capacity. Prevention: periodic full discharge-recharge conditioning cycles. Lithium-ion and lead-acid do not exhibit classic memory effect.",
    "cat": "NI_CD",
    "id": "T23B_007"
  },
  {
    "q": "What does battery Ampere-Hour (Ah) capacity rating specify?",
    "a": "Total electrical charge battery can deliver over a specific time period (e.g. 1A for 100 hours for a 100Ah battery at C10 rate)",
    "opts": ["Maximum peak current for 30 seconds at -18\u00b0C (that is CCA)", "Speed at which battery can be safely recharged 0% to 100%", "Total AC power in kW battery outputs through inverter", "Total electrical charge battery can deliver over a specific time period (e.g. 1A for 100 hours for a 100Ah battery at C10 rate)"],
    "exp": "Ah = current \u00d7 time. 100Ah at C10 rate = 10A for 10 hours. Actual capacity depends on discharge rate - higher current rates reduce effective capacity due to internal resistance losses (Peukert's law). CCA is a separate specification measuring cold-cranking ability, not total capacity.",
    "cat": "CAPACITY",
    "id": "T23B_008"
  },
  {
    "q": "How is a marine battery formal capacity test correctly executed?",
    "a": "Fully charged battery discharged at rated C10 current until cut-off voltage - total Ah delivered is the measured capacity",
    "opts": ["Short-circuit terminals for 10 seconds to measure peak short-circuit amps", "Connect to 440V transformer to test inverting power back to grid", "Check SG while floating on main charger", "Fully charged battery discharged at rated C10 current until cut-off voltage - total Ah delivered is the measured capacity"],
    "exp": "Capacity test: (1) Fully charge battery. (2) Disconnect charger. (3) Discharge at C10 rate (e.g. 10A for 100Ah battery) into calibrated load bank or actual emergency loads. (4) Record time until terminal voltage reaches cut-off (1.75V/cell lead-acid). (5) Calculate Ah delivered. Compare to rated Ah.",
    "cat": "CAPACITY",
    "id": "T23B_009"
  },
  {
    "q": "At what capacity threshold must emergency GMDSS battery be condemned and replaced?",
    "a": "Below 80% of rated Ah capacity",
    "opts": ["Below 50% rated Ah", "Below 80% of rated Ah capacity", "Below 95% rated Ah", "When SG drops below 1.280 after 1 hour use"],
    "exp": "80% capacity threshold = industry standard for safety-critical batteries. A battery delivering only 80% Ah can still supply emergency loads for 80% of required duration. Below 80% = insufficient for full SOLAS-required endurance period = must replace. Annual load test mandatory. Certificate of test retained onboard.",
    "cat": "CAPACITY",
    "id": "T23B_010"
  },
  {
    "q": "How does online double-conversion UPS achieve zero switchover time?",
    "a": "Load permanently supplied through inverter - rectifier and batteries supply DC bus continuously - mains failure just removes rectifier input but inverter continues uninterrupted",
    "opts": ["High-speed mechanical transfer switch connects load to battery in <2ms", "Flywheel mechanically spins generator during brief power gap", "Draws power directly from emergency diesel generator bypassing batteries", "Load permanently supplied through inverter - rectifier and batteries supply DC bus continuously - mains failure just removes rectifier input but inverter continues uninterrupted"],
    "exp": "Double-conversion: AC mains \u2192 Rectifier \u2192 DC bus (batteries float here) \u2192 Inverter \u2192 AC load. Load path NEVER changes. When mains fails, batteries maintain DC bus - inverter continues without any gap. Output is also regenerated (clean, regulated, galvanically isolated from mains disturbances).",
    "cat": "UPS",
    "id": "T23B_011"
  },
  {
    "q": "Primary characteristic and limitation of Offline (Standby) UPS?",
    "a": "Load runs directly from AC mains normally - 4-12ms switchover gap when relay transfers to battery/inverter on blackout",
    "opts": ["Continuously converts AC to DC and back - overheats rapidly", "Disconnects ECDIS from network until ETO manually resets", "Only operates on 24V DC - cannot power 220V AC bridge equipment", "Load runs directly from AC mains normally - 4-12ms switchover gap when relay transfers to battery/inverter on blackout"],
    "exp": "Offline UPS: most efficient (mains passes straight through) but worst power quality. On failure: relay transfers to inverter - 4-12ms gap. Most PCs tolerate this. Sensitive navigation computers (ECDIS, integrated bridge) may crash during this gap - require online UPS. Cheapest UPS type.",
    "cat": "UPS",
    "id": "T23B_012"
  },
  {
    "q": "What is thermal runaway in a lithium-ion battery?",
    "a": "Self-sustaining exothermic chain reaction - cell generates its own heat and oxygen - cannot be stopped once started",
    "opts": ["Sulphation causing temperature rise in lead-acid battery", "Memory effect causing partial capacity loss in Ni-Cd", "Galvanic corrosion from stray currents in battery room", "Self-sustaining exothermic chain reaction - cell generates its own heat and oxygen - cannot be stopped once started"],
    "exp": "Li-ion thermal runaway: heat \u2192 electrolyte decomposes \u2192 releases oxygen internally \u2192 more heat \u2192 separator melts \u2192 internal short circuit \u2192 fire or explosion. Unlike other fires, lithium-ion cells contain their own oxidant - CO2 or powder cannot stop it. Large volumes of WATER are needed to cool and contain.",
    "cat": "LI_ION",
    "id": "T23B_013"
  },
  {
    "q": "Earliest detectable sign of impending Li-ion cell failure?",
    "a": "Off-gassing - internal pressure forces safety vent to open releasing volatile electrolyte solvent vapours before any temperature spike",
    "opts": ["Sudden drop in specific gravity across battery terminals", "Exterior casing shrinking due to internal vacuum", "Emission of pure water vapour from cooling manifold", "Off-gassing - internal pressure forces safety vent to open releasing volatile electrolyte solvent vapours before any temperature spike"],
    "exp": "Off-gassing (VOCs: DMC, EMC, CO, H2) occurs before significant temperature rise. This critical 'early warning window' (up to 10 minutes before thermal runaway) allows BMS to: isolate rack contactors, trigger high-rate ventilation, alert crew. VOC and H2 sensors integrated with BMS provide this crucial early detection.",
    "cat": "LI_ION",
    "id": "T23B_014"
  },
  {
    "q": "Difference in off-gas between LFP and NMC lithium-ion batteries?",
    "a": "LFP primarily releases Hydrogen (H2 - explosive); NMC primarily releases Carbon Monoxide (CO - toxic + explosive)",
    "opts": ["LFP releases pure oxygen accelerating fire; NMC releases inert nitrogen", "LFP releases sulphuric acid fumes; NMC releases harmless water vapour", "Both release only CO2 without toxic components", "LFP primarily releases Hydrogen (H2 - explosive); NMC primarily releases Carbon Monoxide (CO - toxic + explosive)"],
    "exp": "LFP (Lithium Iron Phosphate): off-gas = high H2 (flammable, LEL 4%). NMC (Nickel Manganese Cobalt): off-gas = high CO (toxic at 50ppm, IDLH 1200ppm) plus other VOCs. Both require different sensor types: H2 sensors for LFP areas, CO sensors for NMC. Both are dangerous but for different reasons.",
    "cat": "LI_ION",
    "id": "T23B_015"
  },
  {
    "q": "Essential monitoring functions of Battery Management System (BMS)?",
    "a": "Real-time per-cell voltage, current, temperature, State of Charge (SoC) monitoring + active/passive cell balancing",
    "opts": ["Freon-based refrigeration cooling of battery modules", "Converts 24V DC to 6.6kV AC for propulsion motors", "Automatically tops up cells with distilled water when electrolyte low", "Real-time per-cell voltage, current, temperature, State of Charge (SoC) monitoring + active/passive cell balancing"],
    "exp": "BMS functions: (1) Cell monitoring (voltage, current, temperature per cell). (2) SoC calculation. (3) Protection (overcharge, overdischarge, overcurrent, overtemperature shutdowns). (4) Cell balancing (active: moves charge between cells; passive: burns excess energy as heat). (5) Off-gas/thermal runaway detection integration. (6) Fault logging and alerting.",
    "cat": "LI_ION",
    "id": "T23B_016"
  },
  {
    "q": "IEC standard for lithium-ion batteries in maritime applications?",
    "a": "IEC 62619 - safety requirements for secondary lithium-ion cells in industrial/maritime applications",
    "opts": ["IEC 60092-353 (shipboard power cables)", "IEC 60331 (fire resistant cables)", "IEC 80005-1 (HVSC shore connections)", "IEC 62619 - safety requirements for secondary lithium-ion cells in industrial/maritime applications"],
    "exp": "IEC 62619: comprehensive safety standard for Li-ion in industrial settings. Covers: overcharge testing, thermal abuse testing, mechanical shock/vibration testing, BMS safety requirements, fire containment design. DNV/LR class rules reference IEC 62619 for marine ESS approval. Mandatory for all new marine Li-ion ESS installations.",
    "cat": "LI_ION",
    "id": "T23B_017"
  },
  {
    "q": "Why is LFP (Lithium Iron Phosphate) considered safer for marine ESS vs NMC?",
    "a": "LFP has high thermal decomposition temperature (~518\u00b0C) - highly resistant to thermal runaway vs NMC (~160\u00b0C)",
    "opts": ["LFP has higher energy density (500 Wh/kg) absorbing heat better", "LFP contains fire retardants inside cells that extinguish internal sparks", "LFP requires zero maintenance and is immune to deep-discharge damage", "LFP has high thermal decomposition temperature (~518\u00b0C) - highly resistant to thermal runaway vs NMC (~160\u00b0C)"],
    "exp": "LFP chemistry: iron-oxygen bond in cathode is very stable. Decomposition only at ~518\u00b0C. NMC (nickel cobalt): less stable cathode, decomposes at ~160\u00b0C releasing oxygen - much more prone to thermal runaway. LFP trade-off: lower energy density. NMC trade-off: higher energy density but higher thermal risk.",
    "cat": "LI_ION",
    "id": "T23B_018"
  },
  {
    "q": "Why is a hydrometer useless for checking Ni-Cd battery state of charge?",
    "a": "KOH (potassium hydroxide) electrolyte does not participate directly in the chemical reaction - SG stays constant during charge/discharge",
    "opts": ["KOH is highly pressurised - opening vent cap causes toxic explosion", "Ni-Cd batteries are entirely solid-state with no liquid electrolyte", "KOH SG changes so rapidly hydrometer cannot record reading in time", "KOH (potassium hydroxide) electrolyte does not participate directly in the chemical reaction - SG stays constant during charge/discharge"],
    "exp": "In lead-acid: H2SO4 is consumed/produced during charge/discharge \u2192 SG changes measurably. In Ni-Cd: KOH acts only as ionic transfer medium. The active materials are nickel hydroxide (positive) and cadmium (negative) - electrolyte SG remains essentially constant. Use open-circuit voltage and load testing instead.",
    "cat": "NI_CD",
    "id": "T23B_019"
  },
  {
    "q": "Purpose of active and passive cell balancing in a Li-ion BMS?",
    "a": "Ensures all series-connected cells maintain uniform voltage and charge - prevents localized overcharge or over-discharge of weaker cells",
    "opts": ["Physically shifts battery weight in rack to counteract ship rolling", "Alternates output frequency 50/60Hz to match shore power", "Continuously purges battery enclosure with inert nitrogen gas", "Ensures all series-connected cells maintain uniform voltage and charge - prevents localized overcharge or over-discharge of weaker cells"],
    "exp": "Manufacturing variances + temperature gradients = cells age differently. Without balancing: weakest cell hits voltage limit first \u2192 forces entire bank to stop charging/discharging prematurely \u2192 reduces effective capacity. Active balancing (preferred): moves charge between cells via DC-DC converters. Passive: dissipates excess energy as heat in bleed resistors.",
    "cat": "LI_ION",
    "id": "T23B_020"
  },
  {
    "q": "What does the Ampere-Hour (Ah) rating of a battery represent?",
    "a": "The total electrical charge a battery can deliver before fully discharging",
    "opts": ["The maximum current a battery can deliver at any instant", "The power in watts the battery can sustain continuously", "The battery voltage multiplied by its internal resistance", "The total electrical charge a battery can deliver before fully discharging"],
    "exp": "1 Ah = ability to supply 1 Ampere for 1 Hour. A 100 Ah battery can supply 100A for 1 hour, or 50A for 2 hours, etc. It measures total charge capacity, not instantaneous current.",
    "cat": "AH",
    "id": "T23B_021"
  },
  {
    "q": "A 100 Ah battery supplies 10A continuously. Approximately how long will it last?",
    "a": "Approximately 10 hours",
    "opts": ["Exactly 10 hours regardless of temperature", "100 hours", "Approximately 10 hours", "1 hour"],
    "exp": "Ah / Current = Time. 100Ah / 10A = 10 hours approximately. The relationship is not perfectly linear - actual duration depends on C-rate and internal resistance effects.",
    "cat": "AH",
    "id": "T23B_022"
  },
  {
    "q": "What does 'C20' mean in the context of a 100 Ah C20 battery?",
    "a": "The battery is rated to deliver 100 Ah when discharged at 5A over 20 hours",
    "opts": ["The battery can withstand 20 degrees C temperature", "The battery has 20 cells", "The battery has a 20-year design life", "The battery is rated to deliver 100 Ah when discharged at 5A over 20 hours"],
    "exp": "C-rate specifies the discharge rate. C20 = complete discharge in 20 hours. 100Ah / 20h = 5A discharge rate. At faster rates (C1), the same battery may only deliver 60-70 Ah due to internal resistance effects.",
    "cat": "AH",
    "id": "T23B_023"
  },
  {
    "q": "Why does a battery deliver LESS capacity than rated when discharged at a high C-rate?",
    "a": "Higher discharge current causes greater internal resistance voltage drop, reducing usable capacity",
    "opts": ["High C-rate overcharges the battery, reducing capacity", "High current heats the battery and reduces electrolyte volume", "The chemical reaction slows down at high current", "Higher discharge current causes greater internal resistance voltage drop, reducing usable capacity"],
    "exp": "At high discharge rates, voltage drop across internal resistance (V = I x R_internal) becomes significant. Terminal voltage hits the cutoff threshold before all chemical energy is extracted. A 100 Ah C20 battery may only deliver 60-70 Ah at C1 rate.",
    "cat": "AH",
    "id": "T23B_024"
  },
  {
    "q": "What is the C1 discharge rate for a 200 Ah battery?",
    "a": "200A - complete discharge in 1 hour",
    "opts": ["1A - complete discharge in 200 hours", "200A - complete discharge in 1 hour", "20A - complete discharge in 1 hour", "2A - complete discharge in 1 hour"],
    "exp": "C1 = discharge current equal to the Ah rating. For a 200 Ah battery: C1 = 200A. At this rate, rated capacity would be achieved in 1 hour - but actual delivered Ah may be less due to internal resistance losses.",
    "cat": "AH",
    "id": "T23B_025"
  },
  {
    "q": "Under SOLAS II-1/Reg 43, for how long must emergency batteries supply all emergency loads on a general cargo ship?",
    "a": "30 minutes",
    "opts": ["30 minutes", "18 hours", "6 hours", "3 hours"],
    "exp": "SOLAS II-1/Reg 43 requires: 30 minutes for general cargo ships. Passenger ships require 18 hours (for flooding emergencies). The battery must supply ALL emergency services for this full duration.",
    "cat": "AH",
    "id": "T23B_026"
  },
  {
    "q": "Under SOLAS II-1/Reg 43, how long must emergency batteries supply emergency loads on a PASSENGER ship?",
    "a": "18 hours",
    "opts": ["18 hours", "30 minutes", "36 hours", "6 hours"],
    "exp": "SOLAS II-1/Reg 43 specifies 18 hours for passenger ships (the extended duration accounts for flooding emergency scenarios). General cargo ships only require 30 minutes. This distinction is frequently tested.",
    "cat": "AH",
    "id": "T23B_027"
  },
  {
    "q": "When calculating battery Ah required for emergency service, what safety margin is added to the calculated value?",
    "a": "20% safety margin is added",
    "opts": ["10% safety margin", "20% safety margin is added", "5% safety margin", "50% safety margin"],
    "exp": "Design calculation: Identify all emergency loads -> calculate total current -> calculate Ah = current x duration -> ADD 20% safety margin for battery ageing, temperature effects, and calculation uncertainty.",
    "cat": "AH",
    "id": "T23B_028"
  },
  {
    "q": "A ship's emergency loads total 20A. The required backup duration is 30 minutes. What minimum Ah battery is needed (including 20% safety margin)?",
    "a": "12 Ah",
    "opts": ["20 Ah", "12 Ah", "10 Ah", "600 Ah"],
    "exp": "Step 1: Ah without margin = 20A x 0.5h = 10 Ah. Step 2: Add 20% margin: 10 x 1.2 = 12 Ah minimum. So a 12 Ah rated battery is the minimum acceptable selection.",
    "cat": "AH",
    "id": "T23B_029"
  },
  {
    "q": "What is the relationship between C-rate and effective battery capacity?",
    "a": "Higher C-rate (faster discharge) results in lower effective delivered capacity in Ah",
    "opts": ["Higher C-rate results in higher delivered capacity due to temperature rise", "Higher C-rate (faster discharge) results in lower effective delivered capacity in Ah", "C-rate has no effect on capacity - it only affects voltage", "Lower C-rate reduces capacity due to self-discharge"],
    "exp": "This is the Peukert effect. At low discharge rates (C20, C10), full rated Ah is available. At high rates (C1, C0.5), internal resistance losses mean the cutoff voltage is reached before all energy is extracted.",
    "cat": "AH",
    "id": "T23B_030"
  },
  {
    "q": "Why does the Ah rating matter specifically for GMDSS battery installations?",
    "a": "SOLAS IV requires GMDSS batteries to supply equipment for 6 hours (full load) or 1 hour (as specified) - Ah rating determines compliance",
    "opts": ["SOLAS IV requires GMDSS batteries to supply equipment for 6 hours (full load) or 1 hour (as specified) - Ah rating determines compliance", "IMO requires Ah capacity only for lifeboat batteries", "Ah matters only for starting batteries, not for GMDSS", "GMDSS requires high CCA - Ah is irrelevant"],
    "exp": "SOLAS Chapter IV (radiocommunications) requires independent power supply. Duration requirements mean Ah capacity must be correctly calculated for actual GMDSS equipment loads. UPS for GMDSS must also be sized in Ah.",
    "cat": "AH",
    "id": "T23B_031"
  },
  {
    "q": "How does a class surveyor verify that a battery meets its Ah rating?",
    "a": "Discharge test: fully charge, rest 1 hour, discharge at rated current, measure Ah delivered until cutoff voltage",
    "opts": ["Perform insulation resistance test", "Discharge test: fully charge, rest 1 hour, discharge at rated current, measure Ah delivered until cutoff voltage", "Check the manufacturer's nameplate only", "Measure specific gravity with hydrometer"],
    "exp": "Capacity test procedure: (1) Fully charge battery. (2) Rest 1 hour. (3) Discharge at rated current (Ah/10 or per specification). (4) Stop at cutoff voltage (10.5V for 12V battery). (5) Calculate Ah = current x time. (6) Compare to rated Ah. Required annually per class rules.",
    "cat": "AH",
    "id": "T23B_032"
  },
  {
    "q": "What is the cutoff voltage for a 12V lead-acid battery during a capacity discharge test?",
    "a": "10.5V",
    "opts": ["12.0V", "10.5V", "9.0V", "11.5V"],
    "exp": "Standard cutoff (end-point) voltage for a 12V lead-acid battery is 10.5V (1.75V per cell x 6 cells). Discharge is stopped when terminal voltage drops to 10.5V under load. Ah delivered to this point is the measured capacity.",
    "cat": "AH",
    "id": "T23B_033"
  },
  {
    "q": "Which parameter - Ah or CCA - is more relevant for selecting a lifeboat starting battery?",
    "a": "CCA is primary for starting; Ah is secondary for sustained electrical loads",
    "opts": ["CCA only - Ah is not required for starting", "Both are equal in importance and cannot be separated", "CCA is primary for starting; Ah is secondary for sustained electrical loads", "Ah only - CCA is not relevant for lifeboats"],
    "exp": "Lifeboat engine needs high burst current to crank - CCA is the primary rating. However, the battery also powers navigation lights and radio during abandonment, so Ah capacity is also specified. Both ratings must be met.",
    "cat": "AH",
    "id": "T23B_034"
  },
  {
    "q": "A 100 Ah battery at C10 rate delivers its full 100 Ah. If the same battery is discharged at C1 rate (100A), what happens?",
    "a": "It delivers less than 100 Ah - approximately 60-70 Ah before reaching cutoff voltage",
    "opts": ["It delivers less than 100 Ah - approximately 60-70 Ah before reaching cutoff voltage", "It still delivers exactly 100 Ah - C-rate only affects duration", "The battery will be permanently damaged at C1 rate", "It delivers more than 100 Ah due to heat-assisted reaction"],
    "exp": "Peukert's law describes this effect. At C1 (100A from a 100Ah battery), internal resistance drop is large (e.g. if Ri = 0.05 ohm, drop at 100A = 5V - significant for a 12V battery). Terminal voltage hits cutoff before full capacity is extracted.",
    "cat": "AH",
    "id": "T23B_035"
  },
  {
    "q": "What is the correct unit calculation showing Ah = A x time?",
    "a": "If 5A is drawn for 4 hours: 5A x 4h = 20 Ah",
    "opts": ["If 5A is drawn for 4 hours: 5A squared x 4h = 100 Ah", "If 5A is drawn for 4 hours: 5A x 4h = 20 Ah", "If 5A is drawn for 4 hours: 5A / 4h = 1.25 Ah", "If 5A is drawn for 4 hours: 5A + 4h = 9 Ah"],
    "exp": "Ah = Current (A) x Time (h). Example: 5A x 4h = 20 Ah consumed. This is fundamental to battery sizing. For emergency load calculation: total Ah required = sum of all load currents x required backup duration.",
    "cat": "AH",
    "id": "T23B_036"
  },
  {
    "q": "What does MCA (Marine Cranking Amperes) differ from CCA?",
    "a": "MCA is measured at 0 degrees C instead of -18 degrees C, so MCA value is higher than CCA for the same battery",
    "opts": ["MCA applies only to NiCd batteries; CCA to lead-acid", "MCA is measured at 0 degrees C instead of -18 degrees C, so MCA value is higher than CCA for the same battery", "MCA and CCA are identical tests at different discharge durations", "MCA measures Ah capacity; CCA measures peak current"],
    "exp": "CCA test: 30 seconds at -18 degrees C, terminal voltage >=7.2V (12V battery). MCA test: 30 seconds at 0 degrees C (warmer = lower internal resistance = higher available current). Same battery always has MCA > CCA. Marine specs may use either rating.",
    "cat": "AH",
    "id": "T23B_037"
  },
  {
    "q": "What is 'Reserve Capacity' (RC) rating of a battery?",
    "a": "Minutes a fully charged 12V battery can supply 25A before voltage drops below 10.5V",
    "opts": ["Minutes a fully charged 12V battery can supply 25A before voltage drops below 10.5V", "Total Ah at C20 discharge rate", "Hours the battery can power emergency lighting", "Maximum continuous discharge current in amperes"],
    "exp": "RC (Reserve Capacity) indicates how long a 12V battery sustains 25A before reaching 10.5V cutoff. Useful for determining how long a ship's battery can support DC loads (navigation lights, radio) if the alternator/charger fails.",
    "cat": "AH",
    "id": "T23B_038"
  },
  {
    "q": "During battery sizing for an emergency system, loads are: Navigation lights 3A, Alarm system 2A, Communication 5A, Duration 30 min. What Ah (with 20% margin) is required?",
    "a": "6 Ah",
    "opts": ["10 Ah", "6 Ah", "12 Ah", "5 Ah"],
    "exp": "Total current = 3 + 2 + 5 = 10A. Duration = 0.5h. Base Ah = 10A x 0.5h = 5 Ah. Add 20%: 5 x 1.2 = 6 Ah minimum. Select nearest standard battery >= 6 Ah.",
    "cat": "AH",
    "id": "T23B_039"
  },
  {
    "q": "Why is the C-rate specified alongside the Ah rating in a battery datasheet?",
    "a": "Because rated Ah capacity is only valid at the specified C-rate - at different rates, delivered Ah will differ",
    "opts": ["C-rate determines the battery weight, not capacity", "C-rate only matters for NiCd batteries, not lead-acid", "C-rate specifies the maximum allowable charging voltage", "Because rated Ah capacity is only valid at the specified C-rate - at different rates, delivered Ah will differ"],
    "exp": "A '100 Ah battery' without C-rate specification is ambiguous. 100 Ah at C10 vs C20 are different physical realities. Always verify the C-rate when selecting batteries for a specific application.",
    "cat": "AH",
    "id": "T23B_040"
  },
  {
    "q": "What happens to battery capacity as ambient temperature decreases well below 25 degrees C?",
    "a": "Available capacity decreases - cold temperatures increase electrolyte viscosity and slow ion mobility",
    "opts": ["Available capacity decreases - cold temperatures increase electrolyte viscosity and slow ion mobility", "Temperature has no effect on Ah capacity", "Only starting current is affected; total Ah is unchanged", "Capacity increases - cold temperatures improve chemical efficiency"],
    "exp": "Lead-acid batteries lose significant capacity at low temperatures (a 12V 100 Ah battery may only deliver 50-60 Ah at 0 degrees C). This is why Arctic-service batteries require derating and oversizing. NiCd performs better than lead-acid in cold conditions.",
    "cat": "AH",
    "id": "T23B_041"
  },
  {
    "q": "In battery capacity testing, what must be done between full charge and the discharge test?",
    "a": "Battery must rest for 1 hour before discharge to allow chemical stabilization",
    "opts": ["Cool the battery to exactly 25 degrees C before starting", "Begin discharge immediately after charging for most accurate result", "Top up electrolyte level before discharge", "Battery must rest for 1 hour before discharge to allow chemical stabilization"],
    "exp": "A 1-hour rest after charging allows: (1) Surface charge to dissipate. (2) Electrolyte concentration to equalize through plates. (3) Open circuit voltage to stabilize. Without rest, measured OCV and initial discharge voltage are artificially high.",
    "cat": "AH",
    "id": "T23B_042"
  },
  {
    "q": "What is the significance of SOLAS II-1/Regulation 43 for ETO examination purposes?",
    "a": "It mandates the emergency source of electrical power requirements including battery duration for cargo and passenger ships",
    "opts": ["It covers GMDSS radio equipment requirements", "It mandates the emergency source of electrical power requirements including battery duration for cargo and passenger ships", "It covers fire safety systems on ships", "It specifies lifeboat construction standards"],
    "exp": "SOLAS II-1/Reg 43 is the key regulation surveyors cite when asking about emergency batteries. It requires: the emergency source to supply ALL emergency services for required duration (30 min cargo, 18h passenger). ETOs must know this regulation by number.",
    "cat": "AH",
    "id": "T23B_043"
  },
  {
    "q": "Which battery type - deep cycle or starting - has higher Ah rating for the same physical size?",
    "a": "Deep cycle battery has higher Ah; starting battery has higher CCA",
    "opts": ["Starting battery has higher Ah because it has more plate surface area", "Ah and CCA are proportional - higher Ah always means higher CCA", "Both are identical in Ah for the same physical size", "Deep cycle battery has higher Ah; starting battery has higher CCA"],
    "exp": "Design trade-off: Starting batteries have many thin plates (high surface area -> high peak current -> high CCA). Deep cycle batteries have fewer, thicker plates (store more energy -> higher Ah but lower CCA). Never use a starting battery as a deep cycle - thin plates buckle under repeated deep discharge.",
    "cat": "AH",
    "id": "T23B_044"
  },
  {
    "q": "What is the formula to calculate approximate battery discharge time from Ah rating?",
    "a": "Time (hours) = Ah rating / Discharge current (A)",
    "opts": ["Time (hours) = Ah rating / Discharge current (A)", "Time = Current / Ah", "Time = Ah squared / Current", "Time = Ah x Current"],
    "exp": "Basic formula: T = Ah / I. Example: 100 Ah battery at 20A discharge = 100/20 = 5 hours. Note this is approximate - actual time is affected by C-rate, temperature, and battery age. For precise values use manufacturer discharge curves.",
    "cat": "AH",
    "id": "T23B_045"
  },
  {
    "q": "A surveyor asks: 'Can a 100 Ah battery really power 100A for exactly 1 hour?' What is the correct answer?",
    "a": "No - at 100A (C1 rate) internal resistance losses mean only about 60-70 Ah are delivered before cutoff voltage is reached",
    "opts": ["No - the battery will overheat and shut down after 30 minutes", "Yes, but only if the battery is at exactly 25 degrees C", "Yes - by definition 100 Ah = 100A for 1 hour always", "No - at 100A (C1 rate) internal resistance losses mean only about 60-70 Ah are delivered before cutoff voltage is reached"],
    "exp": "The C-rate effect: 100 Ah rated at C20 means 5A for 20 hours = 100 Ah. At 100A (C1), internal resistance voltage drop causes early cutoff. Actual delivered Ah at C1 is approximately 60-70% of rated. This is a common surveyor trick question.",
    "cat": "AH",
    "id": "T23B_046"
  },
  {
    "q": "What is the purpose of recording the Ah result during a capacity discharge test?",
    "a": "To compare against rated Ah and determine if battery is fit for SOLAS emergency service",
    "opts": ["To compare against rated Ah and determine if battery is fit for SOLAS emergency service", "For billing purposes - suppliers charge based on Ah delivered", "To set the charging current for the next charge cycle", "To calculate remaining electrolyte volume"],
    "exp": "Discharge test record shows: current, time, calculated Ah, percentage of rated capacity. This is class-required documentation. Below 80%: flag for replacement. Below 50%: must replace before sailing. Record kept with class surveyor access.",
    "cat": "AH",
    "id": "T23B_047"
  },
  {
    "q": "What does 'self-discharge' mean for a battery, and which type has the lowest self-discharge rate?",
    "a": "Slow loss of charge when not in use; alkaline primary batteries have the lowest self-discharge (~shelf life 5-10 years)",
    "opts": ["Internal short circuit during storage; VRLA has lowest rate", "Slow loss of charge when not in use; alkaline primary batteries have the lowest self-discharge (~shelf life 5-10 years)", "Loss of capacity during charging; NiCd has lowest rate", "Voltage drop under load; lead-acid has lowest rate"],
    "exp": "Self-discharge: Lead-acid ~3-5% per month. NiCd ~1-2% per month. Alkaline primary: negligible - 5-10 year shelf life. This is why SART and EPIRB use alkaline or lithium primary cells - they remain ready for years without recharging.",
    "cat": "AH",
    "id": "T23B_048"
  },
  {
    "q": "Why must the Ah capacity test be performed at the RATED discharge current, not at a slower rate?",
    "a": "Testing at slower rate would show artificially higher Ah than the battery can actually deliver at its rated C-rate application",
    "opts": ["Slower rates cause sulphation damage during the test", "Faster testing saves time with no accuracy penalty", "Class rules require maximum current testing to simulate worst case", "Testing at slower rate would show artificially higher Ah than the battery can actually deliver at its rated C-rate application"],
    "exp": "If a battery rated at C10 is tested at C100 (very slow), it shows 110-120% of rated capacity - because there's plenty of time for ions to diffuse and all active material to react. This doesn't reflect real-service performance at C10. Always test at the specified rate.",
    "cat": "AH",
    "id": "T23B_049"
  },
  {
    "q": "A 24V emergency battery system consists of two 12V batteries in series. Each is rated 50 Ah. What is the total Ah of the system?",
    "a": "50 Ah - series connection does not increase Ah, only voltage",
    "opts": ["50 Ah - series connection does not increase Ah, only voltage", "200 Ah - two batteries always double capacity", "100 Ah - adding batteries in series adds their Ah ratings", "25 Ah - series connection halves individual battery capacity"],
    "exp": "Series connection: voltages ADD (12+12 = 24V), Ah stays SAME (50 Ah). Parallel connection: voltages stay SAME, Ah ADD (50+50 = 100 Ah). For more capacity, batteries are connected in parallel; for higher voltage, in series.",
    "cat": "AH",
    "id": "T23B_050"
  },
  {
    "q": "What is the material of the POSITIVE plate in a lead-acid battery?",
    "a": "Lead dioxide (PbO2) - dark brown/chocolate colour",
    "opts": ["Lead sulphate (PbSO4) - white crystalline", "Sponge lead (Pb) - grey porous structure", "Nickel oxyhydroxide (NiOOH) - black material", "Lead dioxide (PbO2) - dark brown/chocolate colour"],
    "exp": "Positive plate = Lead dioxide (PbO2), dark brown/chocolate colour. Negative plate = Sponge lead (Pb), grey porous structure. During discharge both plates convert to lead sulphate (PbSO4). Knowing plate colours helps identify polarity during maintenance.",
    "cat": "LA",
    "id": "T23B_051"
  },
  {
    "q": "What is the NEGATIVE plate material in a lead-acid battery?",
    "a": "Sponge lead (Pb) - grey, porous structure maximising surface area",
    "opts": ["Lead dioxide (PbO2)", "Sponge lead (Pb) - grey, porous structure maximising surface area", "Zinc (Zn)", "Cadmium (Cd)"],
    "exp": "Negative plate = Sponge lead (Pb). Porous sponge structure maximises active surface area for reaction. During discharge, converts to PbSO4. During charge, restored to sponge lead (Pb).",
    "cat": "LA",
    "id": "T23B_052"
  },
  {
    "q": "What is the electrolyte in a lead-acid battery and what is its typical concentration?",
    "a": "Dilute sulphuric acid (H2SO4) - typically 30-40% H2SO4 by mass",
    "opts": ["Sodium chloride (NaCl) solution - sea water", "Phosphoric acid (H3PO4) - 50% concentration", "Dilute sulphuric acid (H2SO4) - typically 30-40% H2SO4 by mass", "Potassium hydroxide (KOH) - approximately 30% by mass"],
    "exp": "Lead-acid electrolyte = dilute H2SO4 (sulphuric acid), 30-40% by mass. This is ACIDIC. NiCd uses KOH (alkaline). Never mix them - adding KOH to H2SO4 causes violent reaction. This distinction is critical for safe maintenance.",
    "cat": "LA",
    "id": "T23B_053"
  },
  {
    "q": "What chemical reaction occurs at the plates during DISCHARGE of a lead-acid battery?",
    "a": "PbO2 + Pb + 2H2SO4 -> 2PbSO4 + 2H2O",
    "opts": ["Pb + H2SO4 -> PbSO4 + H2", "Cd + 2NiOOH + 2H2O -> Cd(OH)2 + 2Ni(OH)2", "PbO2 + Pb + 2H2SO4 -> 2PbSO4 + 2H2O", "2PbSO4 + 2H2O -> PbO2 + Pb + 2H2SO4"],
    "exp": "During discharge: PbO2 (positive) + Pb (negative) + 2H2SO4 -> 2PbSO4 + 2H2O. Both plates become lead sulphate. Acid (H2SO4) is consumed, water forms. Specific gravity DECREASES as acid is used up.",
    "cat": "LA",
    "id": "T23B_054"
  },
  {
    "q": "What chemical reaction occurs during CHARGING of a lead-acid battery?",
    "a": "2PbSO4 + 2H2O -> PbO2 + Pb + 2H2SO4",
    "opts": ["2PbSO4 + 2H2O -> PbO2 + Pb + 2H2SO4", "Pb + H2SO4 -> PbSO4 + H2 + H2O", "PbO2 + Pb + 2H2SO4 -> 2PbSO4 + 2H2O", "Cd(OH)2 + 2Ni(OH)2 -> Cd + 2NiOOH + 2H2O"],
    "exp": "During charge: 2PbSO4 + 2H2O -> PbO2 + Pb + 2H2SO4 (reverse reaction). Lead sulphate converts back to PbO2 (positive) and Pb (negative). Water is consumed, H2SO4 reforms. Specific gravity INCREASES.",
    "cat": "LA",
    "id": "T23B_055"
  },
  {
    "q": "Why does specific gravity DECREASE during lead-acid battery discharge?",
    "a": "H2SO4 is consumed and water forms - diluting the electrolyte and reducing density",
    "opts": ["Temperature rises during discharge, expanding electrolyte volume", "Hydrogen gas bubbles cause electrolyte to become less dense", "The plates expand, pushing electrolyte out", "H2SO4 is consumed and water forms - diluting the electrolyte and reducing density"],
    "exp": "Discharge reaction consumes H2SO4 and produces water: PbO2 + Pb + 2H2SO4 -> 2PbSO4 + 2H2O. H2SO4 (SG ~1.84) is replaced by H2O (SG 1.0). Net result: electrolyte SG decreases. This is the physical basis for using a hydrometer to check charge state.",
    "cat": "LA",
    "id": "T23B_056"
  },
  {
    "q": "What is the specific gravity (SG) of a FULLY CHARGED lead-acid battery electrolyte?",
    "a": "SG = 1.260-1.285",
    "opts": ["SG = 1.400-1.450", "SG = 1.260-1.285", "SG = 1.000 (pure water)", "SG = 1.150-1.180"],
    "exp": "Fully charged lead-acid: SG = 1.260-1.285. Half charged: SG = 1.200-1.220. Fully discharged: SG = 1.150-1.180. Temperature correction applies: SG decreases 0.0007 per 1 degree C rise above 25 degrees C reference.",
    "cat": "LA",
    "id": "T23B_057"
  },
  {
    "q": "What specific gravity indicates a FULLY DISCHARGED lead-acid battery?",
    "a": "SG = 1.150-1.180",
    "opts": ["SG = 1.200-1.220", "SG = 1.000-1.050", "SG = 1.260-1.285", "SG = 1.150-1.180"],
    "exp": "SG 1.150-1.180 = fully discharged. SG 1.200-1.220 = half charged. SG 1.260-1.285 = fully charged. If SG drops below 1.150, prolonged discharge is causing sulphation damage. The battery should be charged immediately.",
    "cat": "LA",
    "id": "T23B_058"
  },
  {
    "q": "What temperature correction factor applies to hydrometer readings for lead-acid batteries?",
    "a": "SG decreases 0.0007 per 1 degree C rise; reference temperature is 25 degrees C",
    "opts": ["SG decreases 0.0007 per 1 degree C rise; reference temperature is 25 degrees C", "SG increases 0.001 per 1 degree C rise; reference is 20 degrees C", "No correction needed - SG is temperature independent", "SG changes 0.005 per degree C; reference is 15 degrees C"],
    "exp": "Temperature correction: add 0.0007 per degree C above 25 degrees C; subtract 0.0007 per degree C below 25 degrees C. Example: SG reads 1.240 at 40 degrees C. Correction: +(40-25) x 0.0007 = +0.0105. Corrected SG = 1.251. This correction is important in engine room where temperature varies widely.",
    "cat": "LA",
    "id": "T23B_059"
  },
  {
    "q": "What is the purpose of the separator in a lead-acid battery?",
    "a": "Prevents short circuit between positive and negative plates while allowing ion flow through electrolyte",
    "opts": ["Prevents short circuit between positive and negative plates while allowing ion flow through electrolyte", "Filters hydrogen gas produced during charging", "Provides structural support for the plate assembly", "Absorbs excess sulphuric acid"],
    "exp": "Separators (porous polyethylene or glass mat) physically separate plates to prevent short circuit while remaining permeable to H2SO4 electrolyte ions. Without separators, positive and negative plates would touch - internal short circuit - complete discharge and plate damage.",
    "cat": "LA",
    "id": "T23B_060"
  },
  {
    "q": "Why is the positive terminal post of a lead-acid battery made with LARGER diameter than the negative?",
    "a": "To prevent accidental reversal of connections - physical size difference enforces correct polarity",
    "opts": ["Positive plate has higher current - larger post reduces resistance", "Larger post dissipates heat better at the positive terminal", "To prevent accidental reversal of connections - physical size difference enforces correct polarity", "Manufacturing convenience - no functional reason"],
    "exp": "The physical size difference (positive larger than negative) is a deliberate anti-reversal feature. Accidentally connecting cables in reverse polarity would cause immediate damage to charging equipment and any connected electronics. The size difference makes this impossible without deliberate effort.",
    "cat": "LA",
    "id": "T23B_061"
  },
  {
    "q": "What is the open circuit voltage of a FULLY CHARGED lead-acid cell?",
    "a": "Approximately 2.12V per cell",
    "opts": ["6.0V per cell", "Approximately 2.12V per cell", "1.5V per cell", "1.2V per cell"],
    "exp": "Fully charged lead-acid cell: ~2.12V OCV (open circuit). Nominal operating voltage: 2.0V per cell. Fully discharged: ~1.90V per cell. A 12V monobloc has 6 cells x 2.0V = 12V nominal. NiCd cell voltage is 1.2V - lower than lead-acid.",
    "cat": "LA",
    "id": "T23B_062"
  },
  {
    "q": "How many cells make up a 24V lead-acid battery bank?",
    "a": "12 cells (6 cells per 12V, two 12V batteries in series = 12 cells total)",
    "opts": ["12 cells (6 cells per 12V, two 12V batteries in series = 12 cells total)", "4 cells", "6 cells", "24 cells"],
    "exp": "Each lead-acid cell = 2V nominal. 24V / 2V/cell = 12 cells. This can be two 12V monobloc batteries (each 6 cells) in series, or 12 individual 2V cells in a battery bank. Emergency generator 24V starter: typically two 12V batteries in series.",
    "cat": "LA",
    "id": "T23B_063"
  },
  {
    "q": "What happens to a lead-acid battery that is stored in a FULLY DISCHARGED state?",
    "a": "Permanent sulphation occurs - PbSO4 crystals harden and cannot be re-converted, causing irreversible capacity loss",
    "opts": ["Permanent sulphation occurs - PbSO4 crystals harden and cannot be re-converted, causing irreversible capacity loss", "The electrolyte becomes more concentrated during storage", "Only NiCd is damaged by discharged storage - lead-acid is unaffected", "No damage - it simply needs recharging when required"],
    "exp": "Sulphation: When discharged, PbSO4 forms on plates. If left discharged, soft amorphous PbSO4 recrystallises into hard, large crystals that block plate pores. These crystals cannot be reconverted during normal charging. Result: permanent, irreversible capacity loss. Contrast: NiCd can be stored discharged without damage.",
    "cat": "LA",
    "id": "T23B_064"
  },
  {
    "q": "What liquid should be used to top up the electrolyte level in a flooded lead-acid battery?",
    "a": "Distilled water ONLY - never tap water or acid",
    "opts": ["Deionised water mixed 50:50 with concentrated acid", "Distilled water ONLY - never tap water or acid", "Dilute sulphuric acid to restore concentration", "Tap water - chlorine in tap water helps prevent sulphation"],
    "exp": "Top up with DISTILLED WATER only. During charging, electrolysis causes water loss (oxygen and hydrogen gas evolution). Only water is lost - acid concentration stays. Add distilled water to restore level. Tap water contains minerals that contaminate electrolyte. Adding acid would over-concentrate the electrolyte.",
    "cat": "LA",
    "id": "T23B_065"
  },
  {
    "q": "Why should you NEVER use a hydrometer to check the state of charge of a NiCd battery?",
    "a": "NiCd electrolyte (KOH) does not change concentration during charge/discharge - SG reading is meaningless",
    "opts": ["NiCd electrolyte (KOH) does not change concentration during charge/discharge - SG reading is meaningless", "NiCd cells are sealed - hydrometer cannot access electrolyte", "Hydrometer glass reacts with KOH and is destroyed", "KOH SG is too high for a standard hydrometer to read"],
    "exp": "In NiCd, KOH electrolyte is NOT consumed in the electrochemical reaction - it only acts as an ion conductor. Therefore SG remains constant (~1.20-1.25) regardless of state of charge. Hydrometer reading gives no useful information. Use voltmeter or capacity test for NiCd state of charge.",
    "cat": "LA",
    "id": "T23B_066"
  },
  {
    "q": "What is the purpose of the VENT PLUG on a flooded lead-acid battery?",
    "a": "Allows hydrogen gas to escape during charging while preventing electrolyte spillage",
    "opts": ["Seals the cell completely - no gas can escape", "Allows addition of distilled water without removing the plug", "Allows hydrogen gas to escape during charging while preventing electrolyte spillage", "Acts as a pressure relief valve to prevent explosion"],
    "exp": "During charging, water electrolysis produces hydrogen (at negative plate) and oxygen (at positive plate). Vent plugs allow gas to escape safely. Some plugs contain flame arrestors (sintered glass) to prevent ignition of hydrogen from outside spark entering the cell.",
    "cat": "LA",
    "id": "T23B_067"
  },
  {
    "q": "What is a VRLA (Valve-Regulated Lead-Acid) battery and how does it differ from a flooded type?",
    "a": "VRLA is sealed - uses absorbed glass mat (AGM) to retain electrolyte; gas recombines internally; no electrolyte topping-up required",
    "opts": ["VRLA stands for Very Reliable Lead-Acid - just a marketing name for standard batteries", "VRLA uses a special valve that allows regular electrolyte addition", "VRLA is sealed - uses absorbed glass mat (AGM) to retain electrolyte; gas recombines internally; no electrolyte topping-up required", "VRLA and flooded are identical - different trade name only"],
    "exp": "VRLA/AGM: Sealed design, electrolyte absorbed in glass mat (no free liquid). Oxygen produced at positive plate recombines with hydrogen at negative plate internally. Safety valve only opens if pressure exceeds limit. Benefits: maintenance-free, no spill risk, can be mounted in any orientation. Used in UPS systems on ships.",
    "cat": "LA",
    "id": "T23B_068"
  },
  {
    "q": "What is the correct procedure for using a hydrometer to check a lead-acid battery?",
    "a": "Draw electrolyte into float hydrometer, read SG at float level at eye level, temperature-correct if not 25 degrees C",
    "opts": ["Fill hydrometer completely, read the colour of electrolyte", "Draw electrolyte into float hydrometer, read SG at float level at eye level, temperature-correct if not 25 degrees C", "Dip hydrometer into electrolyte - the depth it sinks indicates SG", "Insert hydrometer into cell while charging for live reading"],
    "exp": "Hydrometer procedure: (1) Draw electrolyte into float hydrometer using rubber bulb. (2) Observe float level - read SG value at the meniscus, at eye level. (3) Note electrolyte temperature. (4) Apply temperature correction if not at 25 degrees C. (5) Replace electrolyte back into cell. (6) Rinse hydrometer with distilled water after use.",
    "cat": "LA",
    "id": "T23B_069"
  },
  {
    "q": "What common ship application uses flooded lead-acid batteries as starting batteries?",
    "a": "Diesel generator and auxiliary engine starting",
    "opts": ["Navigation bridge ECDIS UPS", "Emergency lighting packs in accommodation", "GMDSS EPIRB power supply", "Diesel generator and auxiliary engine starting"],
    "exp": "Flooded lead-acid (especially high-CCA types) are commonly used for: diesel generator starting, auxiliary engine starting, lifeboat engine starting (in tropical climates - NiCd for cold climates). ECDIS UPS typically uses VRLA/AGM; EPIRB uses lithium primary cells.",
    "cat": "LA",
    "id": "T23B_070"
  },
  {
    "q": "When charging a lead-acid battery, the electrolyte 'gasses' vigorously. What is happening and is it normal?",
    "a": "Normal at end of charge - electrolysis produces hydrogen (negative) and oxygen (positive); indicates full charge approaching",
    "opts": ["Normal at end of charge - electrolysis produces hydrogen (negative) and oxygen (positive); indicates full charge approaching", "Abnormal - vigorous gassing indicates battery is overheating and charging should stop immediately", "The battery is being overcharged and is being permanently damaged", "Gassing never occurs in healthy batteries - it means internal short circuit"],
    "exp": "In constant voltage charging: gassing increases as battery approaches full charge (more voltage available for electrolysis). This is NORMAL and expected. However, EXCESSIVE gassing (throughout charge, not just near end) may indicate overcharging or high charging voltage. Ensure ventilation is adequate - hydrogen is explosive.",
    "cat": "LA",
    "id": "T23B_071"
  },
  {
    "q": "What colour is the positive plate of a lead-acid battery when it needs replacement due to sulphation?",
    "a": "White/light grey - lead sulphate (PbSO4) is white/pale; normal positive plate should be dark brown (PbO2)",
    "opts": ["Green - copper contamination causes green sulphation deposits", "Jet black - carbon deposits indicate sulphation", "White/light grey - lead sulphate (PbSO4) is white/pale; normal positive plate should be dark brown (PbO2)", "Unchanged - sulphation has no visual appearance"],
    "exp": "Visual inspection: Normal positive plate = dark brown (PbO2). Normal negative plate = grey (sponge Pb). Sulphated plates = white/grey crystalline deposits (PbSO4). Severely sulphated plates feel hard and rigid. A heavily sulphated battery cannot accept a full charge - plates are blocked.",
    "cat": "LA",
    "id": "T23B_072"
  },
  {
    "q": "What is the difference between 'float charging' and 'boost charging' for lead-acid batteries?",
    "a": "Float charge maintains full charge at low voltage (~2.25V/cell); boost charge is higher voltage (~2.4V/cell) to recharge a depleted battery faster",
    "opts": ["Float charge maintains full charge at low voltage (~2.25V/cell); boost charge is higher voltage (~2.4V/cell) to recharge a depleted battery faster", "Float charging is for NiCd; boost charging is for lead-acid only", "Float charge uses DC; boost charge uses AC for faster charging", "Float charge is the initial charge; boost charge is for monthly maintenance"],
    "exp": "Float charge: applied continuously at low voltage (approximately 13.5-13.8V for 12V battery / 2.25V per cell) to compensate self-discharge. Battery stays at 100%. Boost/equalizing charge: higher voltage (approximately 14.4-14.8V / 2.4V per cell) applied after deep discharge or to equalize cells. Not for continuous application.",
    "cat": "LA",
    "id": "T23B_073"
  },
  {
    "q": "What is 'equalization charging' and when is it performed on a lead-acid battery bank?",
    "a": "Controlled overcharge at slightly elevated voltage to ensure all cells reach full charge and equalize electrolyte concentration",
    "opts": ["Charging all batteries in a bank simultaneously", "Replacing electrolyte in all cells to equal levels", "Controlled overcharge at slightly elevated voltage to ensure all cells reach full charge and equalize electrolyte concentration", "Connecting batteries in parallel during charging to equalize voltage"],
    "exp": "Equalization: Periodic (monthly/quarterly) controlled overcharge at ~2.4V/cell. Purpose: some cells charge faster than others (stratification) - equalizing voltage drives all cells to full charge. Also mixes electrolyte by gassing. Required for flooded lead-acid; NOT for VRLA (can damage sealed cells). Record date and duration.",
    "cat": "LA",
    "id": "T23B_074"
  },
  {
    "q": "Why is the cell container of a lead-acid battery made from polypropylene or hard rubber?",
    "a": "These materials are acid-resistant and transparent, allowing electrolyte level to be checked visually",
    "opts": ["These materials are acid-resistant and transparent, allowing electrolyte level to be checked visually", "These materials are the cheapest available for battery manufacturing", "Polypropylene conducts heat, keeping battery cool", "Hard rubber is required by SOLAS for fire resistance"],
    "exp": "Container requirements: (1) Acid resistance - concentrated H2SO4 would rapidly destroy metal or ordinary plastic containers. (2) Transparency - allows visual check of electrolyte level without opening (important for maintenance). (3) Electrical insulation - prevents leakage currents between cells and to hull.",
    "cat": "LA",
    "id": "T23B_075"
  },
  {
    "q": "What is the specific gravity reading when lead-acid battery electrolyte is at HALF charge?",
    "a": "SG = 1.200-1.220",
    "opts": ["SG = 1.260-1.285", "SG = 1.100-1.120", "SG = 1.150-1.180", "SG = 1.200-1.220"],
    "exp": "SG reference: Fully charged = 1.260-1.285. Half charged = 1.200-1.220. Fully discharged = 1.150-1.180. These values are at 25 degrees C reference temperature. Surveyors often ask for these specific values - memorise all three.",
    "cat": "LA",
    "id": "T23B_076"
  },
  {
    "q": "What gas is produced at the NEGATIVE plate during lead-acid battery charging?",
    "a": "Hydrogen (H2) - produced by electrolysis of water at the negative plate",
    "opts": ["Oxygen (O2) - produced at the negative plate", "Sulphur dioxide (SO2) - from sulphuric acid breakdown", "Hydrogen (H2) - produced by electrolysis of water at the negative plate", "Carbon dioxide (CO2) - from plate material reaction"],
    "exp": "During overcharge/near full charge: Water electrolysis occurs. Negative plate: 2H2O + 2e- -> H2 + 2OH- (hydrogen gas). Positive plate: 2H2O -> O2 + 4H+ + 4e- (oxygen gas). Hydrogen is explosive (LEL 4%, UEL 75%) - reason for mandatory battery room ventilation.",
    "cat": "LA",
    "id": "T23B_077"
  },
  {
    "q": "What is the typical self-discharge rate of a lead-acid battery stored at room temperature?",
    "a": "Approximately 3-5% per month",
    "opts": ["0.1% per month - essentially zero", "50% per month - must be recharged weekly", "10-15% per week", "Approximately 3-5% per month"],
    "exp": "Lead-acid self-discharge: ~3-5% per month at 25 degrees C. At higher temperatures, self-discharge increases. This means a fully charged lead-acid battery stored for 6 months may be at 70-80% capacity. Emergency batteries must be maintained on trickle/float charge continuously.",
    "cat": "LA",
    "id": "T23B_078"
  },
  {
    "q": "A lead-acid battery hydrometer reads SG 1.220 at 40 degrees C electrolyte temperature. What is the temperature-corrected SG?",
    "a": "Approximately 1.230 (add 0.0105 for 15 degrees C above 25 degrees C reference)",
    "opts": ["Approximately 1.230 (add 0.0105 for 15 degrees C above 25 degrees C reference)", "1.220 - no correction is needed", "1.115 - halve the reading at elevated temperature", "1.210 - subtract correction for temperature above reference"],
    "exp": "Correction: SG decreases with rising temperature. To correct: add (T - 25) x 0.0007 when T > 25 degrees C. (40-25) x 0.0007 = 15 x 0.0007 = 0.0105. Corrected SG = 1.220 + 0.0105 = 1.2305 which is approximately 1.230. This indicates approximately half-charged state.",
    "cat": "LA",
    "id": "T23B_079"
  },
  {
    "q": "What are the three main ship applications for lead-acid batteries?",
    "a": "Engine starting, emergency lighting, and GMDSS equipment power supply",
    "opts": ["EPIRB, SART, and lifeboat lighting only", "UPS for computers, ECDIS, and VDR only", "Propulsion, navigation, and communication only", "Engine starting, emergency lighting, and GMDSS equipment power supply"],
    "exp": "Lead-acid (flooded or VRLA) ship applications: (1) Diesel engine starting (high CCA). (2) Emergency lighting (standby, maintained, non-maintained). (3) GMDSS equipment (VHF, DSC, MF/HF backup). Also: UPS systems (VRLA/AGM), emergency generator starting. Lead-acid is most common marine battery type.",
    "cat": "LA",
    "id": "T23B_080"
  },
  {
    "q": "What does CCA stand for and what does it measure?",
    "a": "Cold Cranking Amperes - maximum current a battery can deliver for 30 seconds at -18 degrees C while maintaining terminal voltage above 7.2V (12V battery)",
    "opts": ["Charging Current Amps - maximum safe charging rate", "Continuous Current Amperes - rated sustained discharge current", "Cold Capacity Amps - total Ah available at 0 degrees C", "Cold Cranking Amperes - maximum current a battery can deliver for 30 seconds at -18 degrees C while maintaining terminal voltage above 7.2V (12V battery)"],
    "exp": "CCA definition: Maximum current deliverable for 30 seconds at -18 degrees C maintaining >=7.2V (12V battery) or >=14.4V (24V battery). This standardised test predicts cold-weather engine starting ability. Higher CCA = better cold-start performance.",
    "cat": "CCA",
    "id": "T23B_081"
  },
  {
    "q": "At what temperature is the CCA test performed?",
    "a": "-18 degrees C (0 degrees F)",
    "opts": ["0 degrees C (32F)", "25 degrees C (77F) - standard room temperature", "-18 degrees C (0 degrees F)", "-5 degrees C (23F)"],
    "exp": "CCA standardised test temperature: -18 degrees C (0F). This was chosen as a critical threshold where both battery performance and engine cranking requirements are severely challenged simultaneously. SAE J537 and IEC 60095-1 both specify -18 degrees C for CCA testing.",
    "cat": "CCA",
    "id": "T23B_082"
  },
  {
    "q": "For how long must a battery maintain voltage above 7.2V during the CCA test (12V battery)?",
    "a": "30 seconds",
    "opts": ["5 minutes", "30 seconds", "Until fully discharged", "1 second"],
    "exp": "CCA test: Battery must deliver rated CCA current for 30 seconds at -18 degrees C with terminal voltage remaining at or above 7.2V (12V) or 14.4V (24V). The 30-second duration represents the maximum realistic engine cranking time before overheating the starter motor.",
    "cat": "CCA",
    "id": "T23B_083"
  },
  {
    "q": "Why does cold temperature REDUCE a battery's available current (CCA)?",
    "a": "Cold increases battery internal resistance AND slows electrochemical reaction rates - both reduce available current",
    "opts": ["Only the engine cranking requirement increases - battery is unaffected by cold", "Cold reduces the number of plates inside the battery", "Cold reduces electrolyte volume, leaving less active material", "Cold increases battery internal resistance AND slows electrochemical reaction rates - both reduce available current"],
    "exp": "Cold effects on battery: (1) Electrolyte viscosity increases -> slower ion movement -> higher internal resistance. (2) Electrochemical reaction rates slow (Arrhenius law) -> less current per unit time. Both effects combine to reduce CCA. At -18 degrees C, a lead-acid battery may only deliver 40-50% of its room-temperature current capability.",
    "cat": "CCA",
    "id": "T23B_084"
  },
  {
    "q": "Why does cold temperature INCREASE the engine cranking current requirement?",
    "a": "Cold increases engine oil viscosity -> engine requires more torque to crank -> starter motor draws more current",
    "opts": ["Cold increases engine oil viscosity -> engine requires more torque to crank -> starter motor draws more current", "Cold reduces fuel viscosity, requiring more cranks to start", "Higher fuel pressure at cold temperature requires more electrical power", "Cold affects only the battery, not the engine cranking requirement"],
    "exp": "Cold cranking double penalty: Battery gives LESS current (higher internal resistance) while engine NEEDS MORE current (higher oil viscosity = more friction to overcome in cranking). Both problems occur simultaneously at -18 degrees C. A battery adequate at 25 degrees C may completely fail to crank the same engine at -18 degrees C.",
    "cat": "CCA",
    "id": "T23B_085"
  },
  {
    "q": "What is the minimum CCA rating suitable for starting a small lifeboat diesel engine (~30 kW)?",
    "a": "400-600 CCA minimum",
    "opts": ["400-600 CCA minimum", "200-300 CCA", "2,000-3,000 CCA", "50-100 CCA"],
    "exp": "CCA application guide: Small lifeboat diesel (30 kW): 400-600 CCA. Medium auxiliary engine (250 kW): 800-1,000 CCA. Large diesel generator starting: 1,000-1,500 CCA. Always specify CCA for the WORST expected ambient temperature in the ship's trading area, not tropical climate conditions.",
    "cat": "CCA",
    "id": "T23B_086"
  },
  {
    "q": "What is MCA (Marine Cranking Amperes) and how does it compare to CCA for the same battery?",
    "a": "MCA is measured at 0 degrees C instead of -18 degrees C; MCA value is always higher than CCA for the same battery",
    "opts": ["MCA measures total Ah at 0 degrees C; CCA measures peak current at -18 degrees C", "MCA is measured at 0 degrees C instead of -18 degrees C; MCA value is always higher than CCA for the same battery", "MCA and CCA are identical tests - same temperature and conditions", "MCA applies to NiCd batteries; CCA applies to lead-acid"],
    "exp": "CCA: -18 degrees C test. MCA: 0 degrees C test (warmer temperature = lower internal resistance = higher available current). Therefore for the same battery: MCA > CCA. Example: a battery rated 600 CCA might be rated 750 MCA. Beware: a battery specified by MCA alone may underperform if ship operates below 0 degrees C.",
    "cat": "CCA",
    "id": "T23B_087"
  },
  {
    "q": "A ship trading in tropical regions only uses a battery rated 400 CCA. If the vessel is redeployed to Arctic service (-20 degrees C), is this battery adequate?",
    "a": "No - CCA rating is specified at -18 degrees C but actual available CCA decreases further below -18 degrees C; Arctic service requires higher rated battery",
    "opts": ["Yes - as long as the battery was adequate in tropical service", "Only the NiCd battery type needs upgrading for Arctic service", "Yes - CCA is already rated at -18 degrees C so Arctic service is covered", "No - CCA rating is specified at -18 degrees C but actual available CCA decreases further below -18 degrees C; Arctic service requires higher rated battery"],
    "exp": "CCA at -18 degrees C is the standardised test point. At -20 degrees C or colder, battery performance is even worse. For Arctic service: select battery with CCA exceeding the engine cranking requirement at the coldest expected temperature. Use manufacturer's temperature derating curves.",
    "cat": "CCA",
    "id": "T23B_088"
  },
  {
    "q": "Why does a high-Ah deep-cycle battery NOT necessarily have a high CCA rating?",
    "a": "Deep cycle batteries have thick plates (high Ah, low surface area per cell volume); starting batteries have thin plates (high CCA, lower Ah)",
    "opts": ["CCA and Ah are always proportional - higher Ah always means higher CCA", "Deep cycle batteries use different electrolyte than starting batteries", "Deep cycle batteries have thick plates (high Ah, low surface area per cell volume); starting batteries have thin plates (high CCA, lower Ah)", "Only NiCd batteries can have both high Ah and high CCA"],
    "exp": "Plate design determines performance type: Starting battery: many THIN plates -> maximum surface area -> high peak current (CCA). Deep cycle battery: fewer THICK plates -> large active mass -> sustained energy (Ah) but lower peak current. A 200 Ah deep cycle battery may have less CCA than a 70 Ah starting battery. Never use a deep cycle as a starting battery (plates buckle from cranking currents).",
    "cat": "CCA",
    "id": "T23B_089"
  },
  {
    "q": "What does RC (Reserve Capacity) measure and how does it differ from CCA?",
    "a": "RC = minutes a 12V battery supplies 25A before dropping to 10.5V; CCA = peak current at -18 degrees C; both assess different aspects of battery performance",
    "opts": ["RC is CCA expressed in different units - conversion factor is 1.5", "RC and CCA measure the same performance characteristic", "RC = minutes a 12V battery supplies 25A before dropping to 10.5V; CCA = peak current at -18 degrees C; both assess different aspects of battery performance", "RC applies to NiCd; CCA applies to lead-acid"],
    "exp": "Reserve Capacity (RC) test: 25A discharge at 25 degrees C until 10.5V cutoff. Measured in minutes. Indicates how long battery sustains moderate loads if charging system fails. CCA measures peak starting ability at cold temperature. A battery specification may quote both: e.g. '600 CCA, 120 RC' - both are independently useful ratings.",
    "cat": "CCA",
    "id": "T23B_090"
  },
  {
    "q": "What CCA range is typically required for a medium auxiliary engine (250 kW) starting battery?",
    "a": "800-1,000 CCA",
    "opts": ["800-1,000 CCA", "200-400 CCA", "3,000-5,000 CCA", "400-600 CCA"],
    "exp": "CCA requirements by engine size: Small lifeboat diesel (~30 kW): 400-600 CCA. Medium auxiliary engine (~250 kW): 800-1,000 CCA. Large diesel generator: 1,000-1,500 CCA (often 24V system = two 12V batteries in series). Always verify with engine manufacturer's starting current specification.",
    "cat": "CCA",
    "id": "T23B_091"
  },
  {
    "q": "An emergency generator starting battery system is 24V. How is this typically configured from 12V batteries?",
    "a": "Two 12V batteries in series (12V + 12V = 24V); CCA remains same as single battery; Ah remains same as single battery",
    "opts": ["Two 12V batteries in series (12V + 12V = 24V); CCA remains same as single battery; Ah remains same as single battery", "Two 12V batteries in parallel - voltage stays 12V, CCA doubles", "Three 8V batteries in series", "Four 6V batteries in parallel - voltage stays 6V, CCA quadruples"],
    "exp": "Series configuration: 12V + 12V = 24V. CCA of series bank = CCA of ONE battery (both batteries must supply same current). Ah of series bank = Ah of ONE battery. This gives 24V to provide adequate voltage to 24V starter motor. Contrast: parallel config = 12V, CCA doubles, Ah doubles.",
    "cat": "CCA",
    "id": "T23B_092"
  },
  {
    "q": "What terminal voltage must a 24V battery maintain during the CCA test?",
    "a": "14.4V minimum for 30 seconds at -18 degrees C",
    "opts": ["12.0V", "14.4V minimum for 30 seconds at -18 degrees C", "7.2V - same as 12V battery", "24.0V - no drop allowed"],
    "exp": "CCA test cutoff voltages: 12V battery: >=7.2V (60% of nominal). 24V battery: >=14.4V (60% of nominal). The 60% rule ensures the starter motor receives adequate voltage to crank the engine. If terminal voltage drops below this under cranking current, the engine will not start.",
    "cat": "CCA",
    "id": "T23B_093"
  },
  {
    "q": "Why is CCA testing done at -18 degrees C rather than the common operating temperature of 25 degrees C?",
    "a": "-18 degrees C represents worst-case starting conditions; a battery must be sized for worst case, not average conditions",
    "opts": ["-18 degrees C is the boiling point of electrolyte - tests maximum chemical activity", "25 degrees C is too warm for accurate battery testing", "-18 degrees C represents worst-case starting conditions; a battery must be sized for worst case, not average conditions", "International standards selected -18 degrees C arbitrarily in 1940"],
    "exp": "Safety engineering principle: safety-critical equipment must be rated for WORST CASE conditions, not typical conditions. Engine starting is safety-critical (especially lifeboats and emergency generators). CCA ensures the battery will start the engine under the harshest realistic conditions.",
    "cat": "CCA",
    "id": "T23B_094"
  },
  {
    "q": "What happens to CCA if a battery is only 80% charged (not fully charged)?",
    "a": "CCA decreases - available current is proportional to state of charge; a partially charged battery has significantly lower CCA",
    "opts": ["CCA decreases - available current is proportional to state of charge; a partially charged battery has significantly lower CCA", "CCA only matters when battery is below 50% charge", "CCA increases slightly at 80% charge due to reduced internal resistance", "CCA is a fixed rating unaffected by state of charge"],
    "exp": "CCA is specified at FULL CHARGE (100% SOC). At 80% SOC, actual available CCA may be 70-80% of rated. At 50% SOC, CCA may be only 40-50% of rated. This is why emergency starting batteries must be maintained at full charge at all times.",
    "cat": "CCA",
    "id": "T23B_095"
  },
  {
    "q": "Which type of lead-acid battery is specifically designed for high CCA applications?",
    "a": "Starting battery (SLI - Starting, Lighting, Ignition) with thin plates and high plate count",
    "opts": ["Gel electrolyte battery", "VRLA/AGM battery", "Deep cycle battery", "Starting battery (SLI - Starting, Lighting, Ignition) with thin plates and high plate count"],
    "exp": "SLI (Starting, Lighting, Ignition) battery design: Maximum plate count, minimum plate thickness -> maximum active surface area -> maximum peak current capability (CCA). Plate thinness makes them unsuitable for deep cycling (plates crack and shed).",
    "cat": "CCA",
    "id": "T23B_096"
  },
  {
    "q": "A battery specification shows '600 CCA / 750 MCA'. What does this tell you?",
    "a": "Battery delivers 600A at -18 degrees C and 750A at 0 degrees C for 30 seconds while maintaining >=7.2V (12V); MCA > CCA for same battery",
    "opts": ["The battery has dual terminals for different starting systems", "The battery has two separate power ratings for different voltages", "CCA and MCA are the same test - 600 and 750 are different measuring standards", "Battery delivers 600A at -18 degrees C and 750A at 0 degrees C for 30 seconds while maintaining >=7.2V (12V); MCA > CCA for same battery"],
    "exp": "Dual rating meaning: CCA 600 = at -18 degrees C, battery delivers 600A for 30s >=7.2V. MCA 750 = at 0 degrees C, same battery delivers 750A for 30s >=7.2V. The difference (750-600 = 150A) shows how much performance is lost from 0 degrees C to -18 degrees C. For arctic service, use CCA rating for sizing.",
    "cat": "CCA",
    "id": "T23B_097"
  },
  {
    "q": "What is the practical consequence if a lifeboat starting battery is underrated for CCA?",
    "a": "In cold weather, terminal voltage collapses during cranking, starter motor cannot turn engine, lifeboat cannot be started - potential loss of life",
    "opts": ["The battery charges faster than normal", "The battery discharges faster but still starts the engine", "No consequence - engine cranking is not affected by battery CCA", "In cold weather, terminal voltage collapses during cranking, starter motor cannot turn engine, lifeboat cannot be started - potential loss of life"],
    "exp": "Safety consequence: In a cold-weather abandon-ship scenario, crew needs the lifeboat to start IMMEDIATELY. If CCA-rated battery fails to maintain cranking voltage: starter motor stalls, engine doesn't start, crew is trapped on failing ship. CCA must be adequate for the WORST CASE service temperature with safety margin.",
    "cat": "CCA",
    "id": "T23B_098"
  },
  {
    "q": "What is the relationship between battery plate SURFACE AREA and CCA?",
    "a": "More plate surface area (more/thinner plates) -> more reactive sites available simultaneously -> higher instantaneous current -> higher CCA",
    "opts": ["Plate thickness only affects cycle life; surface area only affects CCA", "Surface area and CCA are inversely related", "More plate surface area (more/thinner plates) -> more reactive sites available simultaneously -> higher instantaneous current -> higher CCA", "Surface area affects Ah only; CCA is determined by electrolyte concentration"],
    "exp": "CCA peak current depends on how fast the electrochemical reaction can proceed. More plate surface area = more reaction sites active simultaneously = more current available per unit time. Starting battery design optimises for surface area (thin plates, many per cell). Deep cycle optimises for total energy (thick plates, fewer per cell).",
    "cat": "CCA",
    "id": "T23B_099"
  },
  {
    "q": "What must be specified in a lifeboat battery procurement document regarding CCA?",
    "a": "CCA rating at -18 degrees C exceeding engine manufacturer's minimum cranking current for the coldest temperature in ship's trading area",
    "opts": ["CCA rating at -18 degrees C exceeding engine manufacturer's minimum cranking current for the coldest temperature in ship's trading area", "CCA only needs to be specified if the ship trades in winter", "MCA rating is sufficient - CCA is not required in procurement documents", "Only voltage and Ah are required for procurement"],
    "exp": "Complete CCA specification for procurement: (1) CCA at -18 degrees C (international standard). (2) Minimum value = engine manufacturer's minimum cranking current PLUS safety margin. (3) If ship trades below -18 degrees C, request cold temperature derating curve from battery manufacturer. (4) Specify voltage (12V or 24V). (5) Include class approval requirement.",
    "cat": "CCA",
    "id": "T23B_100"
  },
  {
    "q": "Can you substitute a battery with higher Ah rating but lower CCA for a lifeboat starting battery?",
    "a": "No - CCA is the critical specification for engine starting; higher Ah with lower CCA will fail to crank the engine adequately",
    "opts": ["Yes, if temperature is above 10 degrees C", "Yes - more Ah always means more starting power", "No - CCA is the critical specification for engine starting; higher Ah with lower CCA will fail to crank the engine adequately", "Only if the engine has a glow plug pre-heater"],
    "exp": "Different battery design priorities: Deep cycle (high Ah) vs starting (high CCA) batteries use different plate thickness/count optimisation. You CANNOT substitute one for the other. A 200 Ah deep cycle battery with only 400 CCA will fail to start a diesel requiring 800 CCA at -18 degrees C - even though it has more total energy.",
    "cat": "CCA",
    "id": "T23B_101"
  },
  {
    "q": "What is the effect of AGEING on a battery's CCA rating?",
    "a": "CCA decreases with age due to active material shedding, sulphation, and grid corrosion - an old battery rated 600 CCA may only deliver 400 CCA",
    "opts": ["CCA is unaffected by age - only Ah capacity declines", "CCA and Ah both remain constant throughout battery service life", "CCA decreases with age due to active material shedding, sulphation, and grid corrosion - an old battery rated 600 CCA may only deliver 400 CCA", "CCA improves with age as electrolyte concentrates"],
    "exp": "Battery ageing effects on CCA: (1) Grid corrosion increases internal resistance -> lower peak current. (2) Active material shedding reduces electrode surface area -> lower CCA. (3) Sulphation blocks plate pores. Aged battery rated 600 CCA new may measure only 300-400 CCA after 5 years. Annual CCA testing is recommended for critical starting batteries.",
    "cat": "CCA",
    "id": "T23B_102"
  },
  {
    "q": "What is a practical on-board method to verify that an engine starting battery has adequate CCA?",
    "a": "Load test: connect a carbon pile tester and draw rated CCA for 15 seconds - monitor voltage; or observe engine cranking speed and number of cranks to start",
    "opts": ["Measure specific gravity - high SG means high CCA", "Load test: connect a carbon pile tester and draw rated CCA for 15 seconds - monitor voltage; or observe engine cranking speed and number of cranks to start", "CCA cannot be verified on board - laboratory testing only", "Check battery case for physical expansion - if not swollen, CCA is adequate"],
    "exp": "On-board CCA verification: (1) Battery load tester (carbon pile): Apply rated CCA current for 15 seconds - terminal voltage should stay above 9.6V (12V battery). If voltage drops below 9.6V, CCA is insufficient. (2) Practical test: engine crank speed - slow cranking or multiple failed starts indicates insufficient CCA.",
    "cat": "CCA",
    "id": "T23B_103"
  },
  {
    "q": "How does battery internal temperature affect available CCA during an actual engine start?",
    "a": "A cold-soaked battery (at -18 degrees C after extended cold exposure) has reduced CCA; a pre-warmed or recently charged battery performs better",
    "opts": ["A cold-soaked battery (at -18 degrees C after extended cold exposure) has reduced CCA; a pre-warmed or recently charged battery performs better", "Battery temperature has no effect on actual CCA performance", "CCA is highest when battery is ice cold - cold slows self-discharge", "Higher battery temperature always reduces CCA due to faster self-discharge"],
    "exp": "A battery that has been sitting in -18 degrees C cold storage for hours has its electrolyte cold-soaked -> maximum internal resistance. Compare to a battery that was just charged (charging generates heat, electrolyte warmer) -> starts better. This is why lifeboat battery boxes may have thermal insulation in cold climates.",
    "cat": "CCA",
    "id": "T23B_104"
  },
  {
    "q": "What is the SOLAS minimum starting requirement for the emergency generator in terms of time from blackout to power supply?",
    "a": "Emergency generator must start and supply power within 45 seconds of loss of main power",
    "opts": ["Emergency generator must start and supply power within 45 seconds of loss of main power", "2 minutes", "5 seconds", "30 seconds"],
    "exp": "SOLAS II-1/Reg 43: Emergency generator must auto-start and supply ALL emergency loads within 45 seconds of main power failure. Starting battery must supply sufficient CCA for cold starting AND must be maintained at full charge at all times. The 45-second limit is why battery maintenance and CCA adequacy are both critical.",
    "cat": "CCA",
    "id": "T23B_105"
  },
  {
    "q": "A battery has both CCA and Ah specifications. Which is used for: (a) Emergency generator starting, (b) Emergency lighting duration?",
    "a": "(a) CCA - determines engine starting ability; (b) Ah - determines lighting duration per SOLAS requirement",
    "opts": ["(a) CCA - determines engine starting ability; (b) Ah - determines lighting duration per SOLAS requirement", "Ah for both - CCA is only relevant for automotive applications", "CCA for both applications - Ah is irrelevant for ship batteries", "Both CCA and Ah are equally important for both applications"],
    "exp": "Application-specific battery ratings: (1) Starting battery (generator, lifeboat engine): CCA is critical - must provide enough peak current to crank diesel cold. (2) Emergency lighting/UPS/GMDSS: Ah is critical - must sustain loads for SOLAS-required duration (30 min or 18h).",
    "cat": "CCA",
    "id": "T23B_106"
  },
  {
    "q": "What maintenance procedure ensures a starting battery retains maximum CCA capacity?",
    "a": "Keep battery fully charged at all times; clean terminals to prevent resistance; annual load test; replace at first sign of cranking difficulty",
    "opts": ["Deep discharge and recharge monthly to maintain high CCA", "Add distilled water weekly to maximise CCA", "CCA requires no maintenance - it is a fixed battery characteristic", "Keep battery fully charged at all times; clean terminals to prevent resistance; annual load test; replace at first sign of cranking difficulty"],
    "exp": "Starting battery CCA maintenance: (1) Float charge continuously (starting batteries must be 100% charged). (2) Clean terminals - oxidation adds resistance and reduces effective CCA. (3) Annual load test with battery tester. (4) Check electrolyte level (flooded type). (5) Replace if load test shows CCA below 80% of rated value.",
    "cat": "CCA",
    "id": "T23B_107"
  },
  {
    "q": "Which international standard defines the CCA test method?",
    "a": "SAE J537 (USA) and EN/IEC 60095-1 (Europe) both define CCA at -18 degrees C for 30 seconds",
    "opts": ["MARPOL Annex I defines all battery specifications", "SAE J537 (USA) and EN/IEC 60095-1 (Europe) both define CCA at -18 degrees C for 30 seconds", "ISO 9001 quality management standard governs CCA testing", "SOLAS Chapter II-1 defines CCA specifications"],
    "exp": "CCA standards: SAE J537 (Society of Automotive Engineers, USA): Primary standard for CCA test methodology. EN 50342-1 / IEC 60095-1 (European/international): Similar test defining CCA. All specify: -18 degrees C, 30 seconds, 7.2V minimum for 12V battery. Knowing the relevant standards demonstrates professional knowledge to surveyors.",
    "cat": "CCA",
    "id": "T23B_108"
  },
  {
    "q": "What is the minimum terminal voltage a 12V battery must maintain during the CCA test to pass?",
    "a": "7.2V (60% of 12V nominal) for 30 seconds at -18 degrees C",
    "opts": ["7.2V (60% of 12V nominal) for 30 seconds at -18 degrees C", "9.6V - 80% of nominal", "12.0V - full nominal voltage must be maintained", "6.0V - 50% of nominal"],
    "exp": "CCA pass criteria: 12V battery - terminal voltage >=7.2V under rated CCA current for 30 seconds at -18 degrees C. The 7.2V threshold ensures starter motor receives adequate voltage to develop sufficient torque. Below 7.2V, DC motor torque is too low to overcome engine compression and friction. 7.2V = 60% of 12V nominal.",
    "cat": "CCA",
    "id": "T23B_109"
  },
  {
    "q": "A surveyor asks: 'What is the CCA of the emergency generator battery and why is it important?' How do you answer?",
    "a": "State the actual battery's CCA; explain it ensures cold starting within 45 seconds as required by SOLAS II-1/Reg 43 in the coldest trading conditions",
    "opts": ["Admit CCA is unknown and only Ah rating is maintained in records", "State only the Ah rating - CCA is not relevant for emergency generators", "State the actual battery's CCA; explain it ensures cold starting within 45 seconds as required by SOLAS II-1/Reg 43 in the coldest trading conditions", "Explain CCA is only relevant for lifeboats, not emergency generators"],
    "exp": "Complete exam answer: State the battery's rated CCA from documentation. Explain: 'CCA ensures the battery can crank the emergency generator's diesel engine within 45 seconds as required by SOLAS II-1/Reg 43, even under worst expected temperature in our trading area. The battery is maintained fully charged and load tested annually to verify CCA adequacy.' This demonstrates both technical knowledge and regulatory awareness.",
    "cat": "CCA",
    "id": "T23B_110"
  },
  {
    "q": "When ordering a replacement battery for a lifeboat, what is the FIRST piece of information to provide?",
    "a": "Battery TYPE (chemistry): Lead-acid, VRLA/AGM, NiCd, Li-ion - must match the original type",
    "opts": ["The port of delivery", "Battery TYPE (chemistry): Lead-acid, VRLA/AGM, NiCd, Li-ion - must match the original type", "The battery's age in years", "The name of the vessel"],
    "exp": "Battery type (chemistry) is specified first because: different chemistries have different charging requirements, electrolytes, and maintenance procedures. Fitting a VRLA where a flooded type was used (or vice versa) may be compatible electrically but maintenance procedures differ completely. Always match chemistry of original installation.",
    "cat": "ORD",
    "id": "T23B_111"
  },
  {
    "q": "What voltage must be specified when ordering a replacement battery?",
    "a": "System voltage: 6V, 12V, or 24V (or cell voltage x number of cells for battery banks)",
    "opts": ["System voltage: 6V, 12V, or 24V (or cell voltage x number of cells for battery banks)", "Always order 12V - adjust at installation", "Order the highest available voltage - it can always be reduced", "Only Ah rating matters - voltage is adjustable"],
    "exp": "Voltage is fundamental - a 24V battery in a 12V system will damage electronics; a 12V battery in a 24V system won't start the engine. Always verify system voltage from electrical drawing or battery label. For cell banks, specify: cell voltage x number of cells (e.g. 2V x 12 cells = 24V bank).",
    "cat": "ORD",
    "id": "T23B_112"
  },
  {
    "q": "When specifying capacity (Ah) in a battery order, what additional information must be included?",
    "a": "The C-rate at which the Ah is specified (e.g. 100 Ah at C20) - Ah alone without C-rate is ambiguous",
    "opts": ["Weight of battery determines capacity - specify weight instead", "The C-rate at which the Ah is specified (e.g. 100 Ah at C20) - Ah alone without C-rate is ambiguous", "Only the minimum and maximum Ah need to be specified", "Ah rating alone is sufficient - C-rate is a manufacturer's internal specification"],
    "exp": "Ah + C-rate pairing: '100 Ah' without C-rate is meaningless - 100 Ah at C20 and 100 Ah at C10 are different batteries. For emergency/UPS applications, specify the C-rate matching the required discharge duration. For GMDSS 6-hour backup: 100 Ah at C6. This ensures the battery delivers rated capacity at the required discharge rate.",
    "cat": "ORD",
    "id": "T23B_113"
  },
  {
    "q": "What starting performance specification must be provided when ordering a diesel engine starting battery?",
    "a": "CCA rating at -18 degrees C (or MCA at 0 degrees C) - must exceed engine manufacturer's minimum cranking current",
    "opts": ["CCA rating at -18 degrees C (or MCA at 0 degrees C) - must exceed engine manufacturer's minimum cranking current", "Only Ah is needed - CCA is determined by voltage", "RC (Reserve Capacity) is the only starting specification needed", "Specify charge current only - CCA is a fixed value for all batteries"],
    "exp": "Starting battery must specify CCA: (1) Check engine manual for minimum starting current at expected minimum temperature. (2) Add safety margin (typically 20-30%). (3) State in order: 'Minimum CCA: 800A at -18 degrees C per SAE J537'. For 24V systems: specify CCA at -18 degrees C for each battery plus the series configuration (two 12V in series).",
    "cat": "ORD",
    "id": "T23B_114"
  },
  {
    "q": "Why must PHYSICAL DIMENSIONS be specified in a battery order?",
    "a": "Battery must fit the existing battery box/tray - incorrect size may not fit or cause poor connection due to movement",
    "opts": ["Battery must fit the existing battery box/tray - incorrect size may not fit or cause poor connection due to movement", "Dimensions only matter for fixed installation batteries", "Dimensions are only cosmetic - electrical connection is what matters", "Specify dimensions only if the battery is larger than the original"],
    "exp": "Physical fit is critical: Battery must fit battery box/tray securely to prevent movement (vibration can break terminals). Specify: Length x Width x Height in mm. Battery boxes often have limited clearance. An incorrectly sized battery that moves in service causes: cable strain, terminal fatigue, potential short circuit, and engine room fire risk.",
    "cat": "ORD",
    "id": "T23B_115"
  },
  {
    "q": "What TERMINAL TYPE must be specified when ordering a replacement battery?",
    "a": "Top-post, side terminal, or L-shaped (threaded stud) - incorrect terminal means cables won't connect",
    "opts": ["Terminal type is universal - all cables fit all terminals", "Terminal type only matters for 24V batteries", "Only specify terminal diameter - shape is irrelevant", "Top-post, side terminal, or L-shaped (threaded stud) - incorrect terminal means cables won't connect"],
    "exp": "Terminal types: (1) Top-post: tapered round posts, bolt clamps. Common for SLI starting batteries. (2) Side terminal: threaded bolt holes in side of case. (3) L-shaped stud: threaded stud with nut, common in industrial/VRLA. Incorrect terminal type: cables won't physically connect without adapters (which add resistance and unreliability).",
    "cat": "ORD",
    "id": "T23B_116"
  },
  {
    "q": "Why is TERMINAL POLARITY LAYOUT important to specify when ordering a battery?",
    "a": "Incorrect polarity layout (positive/negative reversed compared to original) means cables cross, potentially causing short circuit",
    "opts": ["Only matters if the battery box has terminal markings", "Polarity layout is universal - positive is always on the left", "Incorrect polarity layout (positive/negative reversed compared to original) means cables cross, potentially causing short circuit", "Terminal polarity is irrelevant if the battery voltage is correct"],
    "exp": "Polarity layout: Viewed from front, battery can be Left-positive/Right-negative OR Right-positive/Left-negative. If a replacement has reversed polarity layout from original, the existing cables will be too short to reach the correct terminals - forcing a crossed-cable configuration which may cause short circuit. Always specify from existing battery label.",
    "cat": "ORD",
    "id": "T23B_117"
  },
  {
    "q": "What is the difference between 'flooded' and 'sealed/VRLA' maintenance type, and why must the correct type be specified?",
    "a": "Flooded: requires regular distilled water top-up, removable vent caps, gassing acceptable; VRLA: sealed, maintenance-free, no top-up, recombination design",
    "opts": ["Flooded: requires regular distilled water top-up, removable vent caps, gassing acceptable; VRLA: sealed, maintenance-free, no top-up, recombination design", "VRLA requires more maintenance than flooded lead-acid", "Flooded type is always superior - VRLA is a budget product", "Both types have identical maintenance requirements - just different names"],
    "exp": "Type distinction matters for maintenance procedures: Flooded: Check electrolyte level monthly, add distilled water, equalise charge periodically. VRLA: Sealed - opening it for top-up is WRONG. Different charging voltage setpoints. Specifying wrong type means wrong maintenance procedure and potentially shortened service life.",
    "cat": "ORD",
    "id": "T23B_118"
  },
  {
    "q": "When ordering a battery for SOLAS life-saving appliances (EPIRB, lifeboat), what approval must be specified?",
    "a": "IMO SOLAS-compliant, class-approved (e.g. Lloyd's Register, DNV, ABS, Bureau Veritas type approval)",
    "opts": ["ISO 9001 quality certification is sufficient", "IMO SOLAS-compliant, class-approved (e.g. Lloyd's Register, DNV, ABS, Bureau Veritas type approval)", "CE marking is sufficient for all marine batteries", "No special approval required - any commercial battery will do"],
    "exp": "Life-saving appliance batteries MUST be type-approved. Class rules (Lloyd's, DNV, ABS etc.) require: (1) Battery type-tested to applicable IEC/SOLAS standards. (2) Traceability certificate from class-approved supplier. (3) Certificate of compliance provided with delivery. Port State Control checks battery approval certificates during inspection. Unapproved batteries in LSA = deficiency.",
    "cat": "ORD",
    "id": "T23B_119"
  },
  {
    "q": "Why must TEMPERATURE RANGE be specified when ordering lifeboat starting batteries?",
    "a": "Battery must be specified for minimum expected temperature in trading area - a battery adequate at 25 degrees C may fail at -20 degrees C",
    "opts": ["Temperature range only applies to NiCd batteries", "All marine batteries are rated to -40 degrees C - no specification needed", "Battery must be specified for minimum expected temperature in trading area - a battery adequate at 25 degrees C may fail at -20 degrees C", "Temperature range affects physical size only"],
    "exp": "Temperature specification for lifeboat batteries: (1) Identify coldest port/region in vessel's trading pattern. (2) Specify minimum operating temperature. (3) For arctic or sub-arctic: NiCd recommended over lead-acid. (4) If lead-acid: specify minimum CCA at worst expected temperature (use manufacturer's temperature derating curves).",
    "cat": "ORD",
    "id": "T23B_120"
  },
  {
    "q": "What SHELF LIFE information must be specified when ordering SART or EPIRB replacement batteries?",
    "a": "Minimum remaining shelf life from delivery - must comply with applicable SOLAS/GMDSS requirements for standby life",
    "opts": ["Shelf life is irrelevant for SART batteries", "Always specify 10 years - standard for all safety batteries", "Shelf life is determined by the vessel's class rules, not specified at ordering", "Minimum remaining shelf life from delivery - must comply with applicable SOLAS/GMDSS requirements for standby life"],
    "exp": "SART: batteries must provide >=8 hours operation (SOLAS requirement). EPIRB: >=48 hours operation. Shelf life from manufacture is typically 5 years. When ordering: specify 'minimum [X] years remaining shelf life at time of delivery'. This ensures battery has adequate service life before next mandatory replacement. Record delivered battery's manufacture date.",
    "cat": "ORD",
    "id": "T23B_121"
  },
  {
    "q": "What HAZMAT shipping information must be noted when ordering NiCd batteries for air freight delivery?",
    "a": "NiCd batteries are Class 9 dangerous goods (UN3292) - IATA regulations require DG declaration, approved packaging, and documentation",
    "opts": ["IATA restrictions apply only to batteries being charged, not packaged batteries", "Only lithium batteries are dangerous goods - NiCd is unrestricted", "NiCd batteries are not dangerous goods - no special shipping requirements", "NiCd batteries are Class 9 dangerous goods (UN3292) - IATA regulations require DG declaration, approved packaging, and documentation"],
    "exp": "IATA/IMDG battery classification: NiCd (rechargeable): UN3259 (wet, filled with electrolyte) or UN3292 (contains cadmium). Li-ion: UN3480/UN3481. For air freight ordering: inform supplier of air delivery requirement - they must pack to DG standards, provide documentation. Incorrect shipping = battery confiscated at airport.",
    "cat": "ORD",
    "id": "T23B_122"
  },
  {
    "q": "How many key specifications should a complete battery order for a lifeboat starting battery contain?",
    "a": "At minimum 10 specifications: type, voltage, Ah, CCA, dimensions, terminal type, polarity layout, maintenance type, temperature range, and approval",
    "opts": ["1 - make and model number is sufficient if original battery is identified", "5 - type, voltage, Ah, CCA, and dimensions", "At minimum 10 specifications: type, voltage, Ah, CCA, dimensions, terminal type, polarity layout, maintenance type, temperature range, and approval", "2 - voltage and Ah are sufficient"],
    "exp": "Complete battery specification (12 items): (1) Type/chemistry. (2) Voltage. (3) Ah at C-rate. (4) CCA at -18 degrees C. (5) Physical dimensions (LxWxH). (6) Terminal type. (7) Terminal polarity layout. (8) Maintenance type. (9) Temperature range. (10) SOLAS/class approval. (11) Shelf life (if applicable). (12) HAZMAT shipping (if applicable). Incomplete orders lead to wrong deliveries.",
    "cat": "ORD",
    "id": "T23B_123"
  },
  {
    "q": "When checking a delivered replacement battery before installation, what must be verified?",
    "a": "Confirm all specified parameters match: type, voltage, Ah, CCA, dimensions, terminals, polarity, approval certificate",
    "opts": ["Confirm all specified parameters match: type, voltage, Ah, CCA, dimensions, terminals, polarity, approval certificate", "Only check physical size - electrical specs are guaranteed by manufacturer", "Installation can proceed as soon as delivery paperwork is received", "Check voltage with voltmeter only - other specs are supplier's responsibility"],
    "exp": "Goods receipt verification: (1) Check delivery order matches purchase order. (2) Physical inspection: dimensions, terminal type, polarity. (3) Nameplate check: voltage, Ah rating, CCA (if starting battery). (4) Type approval certificate: present and applicable. (5) Manufacture date: within shelf life requirement. (6) Physical condition: no damage, no leaks. Record in Planned Maintenance System.",
    "cat": "ORD",
    "id": "T23B_124"
  },
  {
    "q": "What does it mean if a battery order specifies '100 Ah C10' for a GMDSS backup power system with 10-hour backup requirement?",
    "a": "Battery must deliver its rated 100 Ah at 10A discharge rate (C10) over 10 hours - ensuring full capacity at the required rate",
    "opts": ["Battery must deliver its rated 100 Ah at 10A discharge rate (C10) over 10 hours - ensuring full capacity at the required rate", "The battery has 10 cells in series", "C10 means the battery should be charged every 10 days", "C10 rating means the battery costs 10 units per Ah"],
    "exp": "Matching C-rate to application: GMDSS backup system requires 10 hours duration. Load current = total GMDSS load (e.g. 10A). Required Ah = 10A x 10h = 100 Ah. Specify: 100 Ah at C10 - ensures battery is rated at the exact discharge rate that matches the application.",
    "cat": "ORD",
    "id": "T23B_125"
  },
  {
    "q": "What should an ETO do if only a higher-Ah battery of the same type, voltage, and terminal specification is available?",
    "a": "Higher Ah is acceptable as it provides longer duration - verify dimensions fit, charging system can handle increased capacity, and update records",
    "opts": ["Higher Ah requires special charger - cannot be used without new charging system", "Higher Ah is acceptable as it provides longer duration - verify dimensions fit, charging system can handle increased capacity, and update records", "Use it without any checks - more capacity is always better", "Reject - must exactly match original Ah specification"],
    "exp": "Higher capacity battery acceptance: (1) Capacity increase is generally acceptable (more backup time). (2) Verify physical fit (larger Ah may be larger physically). (3) Verify charger capacity: higher Ah batteries take longer to charge. (4) Update PMS records with new Ah rating. (5) If class-required, notify class surveyor of equipment change.",
    "cat": "ORD",
    "id": "T23B_126"
  },
  {
    "q": "Why is it important to record the MANUFACTURE DATE of a new battery when installed?",
    "a": "Manufacture date starts the clock on: shelf life, replacement schedule, and warranty period - required for class records and future planning",
    "opts": ["Manufacture date is only needed for billing disputes", "Installation date is used - manufacture date is irrelevant once installed", "Only class society requires manufacture date; ETO maintenance records don't need it", "Manufacture date starts the clock on: shelf life, replacement schedule, and warranty period - required for class records and future planning"],
    "exp": "Manufacture date recording: (1) Determines when battery reaches end of manufacturer's recommended service life. (2) For SART/EPIRB: manufacture date determines battery expiry. (3) Class may require replacement by specific age regardless of capacity test. (4) Warranty claims require proof of age. Record: battery type, serial number, manufacture date, installation date, in PMS maintenance records.",
    "cat": "ORD",
    "id": "T23B_127"
  },
  {
    "q": "What is the consequence of installing the WRONG chemistry battery type (e.g. VRLA instead of flooded) without checking?",
    "a": "Wrong charging parameters (float voltage differs); for flooded type procedure applied to VRLA - can cause VRLA failure; different maintenance requirements",
    "opts": ["Only physical size differs between types - electrical performance is identical", "Wrong charging parameters (float voltage differs); for flooded type procedure applied to VRLA - can cause VRLA failure; different maintenance requirements", "VRLA and flooded are interchangeable with no parameter differences", "No consequence - all lead-acid types have identical specifications"],
    "exp": "Chemistry type matters for system compatibility: Flooded lead-acid: float voltage ~13.5V, equalisation possible, monthly water top-up. VRLA/AGM: float voltage ~13.6-13.8V, NO equalisation (damages sealed cells), NO water top-up. If old charger designed for flooded continues equalisation cycles on new VRLA replacement: overcharges VRLA -> gas build-up -> valve opens -> electrolyte dries out -> premature failure.",
    "cat": "ORD",
    "id": "T23B_128"
  },
  {
    "q": "A battery order specifies 'IMO SOLAS-compliant, Lloyd's Register type approved'. What documentation should accompany delivery?",
    "a": "Type approval certificate (test report reference), manufacturer's declaration of conformity, and certificate of origin",
    "opts": ["Type approval certificate (test report reference), manufacturer's declaration of conformity, and certificate of origin", "No documentation needed - SOLAS compliance is assumed for all marine suppliers", "Sales invoice only - class approval is the manufacturer's responsibility", "Only the battery's warranty card is required"],
    "exp": "Required documentation for class-approved marine batteries: (1) Type approval certificate number (referencing Lloyd's/DNV/ABS test certificate). (2) Manufacturer's declaration of conformity to relevant standard (IEC 62133, IEC 60095, etc.). (3) Test report or certificate for batch. Port State Control inspectors and class surveyors will ask to see them. Missing documentation = deficiency even if battery is physically correct.",
    "cat": "ORD",
    "id": "T23B_129"
  },
  {
    "q": "When ordering an emergency generator starting battery, what information from the ENGINE is needed before ordering?",
    "a": "Minimum engine cranking current (from engine manual), starting system voltage (12V or 24V), minimum starting temperature in trading area",
    "opts": ["Cylinder count - determines Ah requirement", "Engine oil specification - determines battery electrolyte type", "Engine horsepower only - determines battery size", "Minimum engine cranking current (from engine manual), starting system voltage (12V or 24V), minimum starting temperature in trading area"],
    "exp": "Engine-to-battery matching: (1) Starting current: from engine instruction manual (e.g. 'Minimum cranking current: 750A at -10 degrees C'). (2) Starting voltage: from electrical drawing (12V or 24V system). (3) Cold temperature: trading area minimum to ensure CCA is adequate. This three-piece information from the engine side then drives the battery CCA and voltage specification in the order.",
    "cat": "ORD",
    "id": "T23B_130"
  },
  {
    "q": "A battery order is placed specifying '12V, 100 Ah, 600 CCA'. The delivered battery is '12V, 100 Ah, 550 CCA'. Can it be accepted?",
    "a": "No - CCA is 8% below specification; for starting batteries, CCA is safety-critical and must meet the minimum specified value",
    "opts": ["No - CCA is 8% below specification; for starting batteries, CCA is safety-critical and must meet the minimum specified value", "Accept temporarily; order correct battery but use this one until it arrives", "Yes - 550 CCA is close enough to 600 CCA", "Accept if temperature is always above 0 degrees C in trading area"],
    "exp": "Battery acceptance criteria: A specification is a minimum requirement. Delivered CCA (550) < specified CCA (600) = non-conforming delivery. Return to supplier and request correct battery. For safety equipment (lifeboat, emergency generator), do NOT accept below-spec substitutes, even temporarily. Log rejection and notification to supplier.",
    "cat": "ORD",
    "id": "T23B_131"
  },
  {
    "q": "What is the correct procedure when an emergency battery needs urgent replacement but the correct specification battery is not available in port?",
    "a": "Contact company/DPA, consider anchoring or delaying departure, or seek class dispensation - do not sail with inadequate emergency battery",
    "opts": ["Install backup temporary system using deck cargo batteries", "Accept any available battery of correct voltage and proceed to sea", "Contact company/DPA, consider anchoring or delaying departure, or seek class dispensation - do not sail with inadequate emergency battery", "Sail with degraded battery if cargo must be delivered"],
    "exp": "Safety-first principle: Emergency battery is SOLAS-mandated safety equipment. Sailing with inadequate/incorrect battery is violation of SOLAS II-1/Reg 43. Options: (1) Contact DPA/company for guidance. (2) Seek alternative supplier in port. (3) Request class dispensation (temporary) if delay unavoidable. (4) Under no circumstances sail with non-compliant emergency power source.",
    "cat": "ORD",
    "id": "T23B_132"
  },
  {
    "q": "Why should VRLA/AGM batteries NOT be substituted with flooded lead-acid if the original specification calls for VRLA?",
    "a": "VRLA is specified for sealed operation (no gas release, no spill risk) - flooded type releases hydrogen and requires ventilation not provided for original installation",
    "opts": ["VRLA is specified for sealed operation (no gas release, no spill risk) - flooded type releases hydrogen and requires ventilation not provided for original installation", "Flooded type is always superior - upgrade is beneficial", "VRLA and flooded are interchangeable - chemistry is identical", "Only cost is different - substitute is acceptable"],
    "exp": "VRLA installation was designed for: (1) Sealed, no-gas-release operation (cabin/bridge UPS applications). (2) No electrolyte spillage even if inverted. (3) No ventilation requirement. If replaced with flooded: hydrogen gas released during charging in unventilated location -> accumulation above LEL 4% -> explosion hazard. The ventilation design of the original installation determines which type is safe.",
    "cat": "ORD",
    "id": "T23B_133"
  },
  {
    "q": "What is the significance of specifying 'Gel' vs 'AGM' when both are VRLA sealed battery types?",
    "a": "Gel: uses gelled electrolyte, more tolerant of deep discharge, used in cyclic applications; AGM: better high-current performance (higher CCA), used in starting and UPS",
    "opts": ["Gel: uses gelled electrolyte, more tolerant of deep discharge, used in cyclic applications; AGM: better high-current performance (higher CCA), used in starting and UPS", "Gel is always superior - always specify Gel over AGM", "The difference only matters for industrial, not marine, applications", "Gel and AGM are identical - different marketing names for same product"],
    "exp": "VRLA subtypes: AGM (Absorbed Glass Mat): Electrolyte soaked in fibreglass mat. Low internal resistance -> good high-current delivery -> suitable for starting and UPS. Gel: Electrolyte gelled with silica. Better deep-cycle tolerance, longer life in cycling applications, more resistant to vibration damage. Specify the correct subtype for the application.",
    "cat": "ORD",
    "id": "T23B_134"
  },
  {
    "q": "What records must be updated in the ship's documentation when a battery is replaced?",
    "a": "PMS maintenance record, equipment inventory (if tracked), electrical drawing updates (if different capacity), and class survey documentation",
    "opts": ["No documentation required for battery replacement", "Only inform the Chief Engineer verbally", "PMS maintenance record, equipment inventory (if tracked), electrical drawing updates (if different capacity), and class survey documentation", "Record only if the replacement cost exceeds a certain amount"],
    "exp": "Battery replacement documentation: (1) PMS record: date, battery type/make/model/serial number, Ah, CCA, manufacture date. (2) Signature of officer performing replacement. (3) Next scheduled maintenance date. (4) If capacity changed: notify class surveyor (may require notation). (5) For life-saving appliance batteries: entry in GMDSS log or safety equipment record.",
    "cat": "ORD",
    "id": "T23B_135"
  },
  {
    "q": "What is the approved liquid to use for topping up electrolyte in a FLOODED lead-acid battery? What must NEVER be used?",
    "a": "Use DISTILLED WATER only; never use tap water (minerals contaminate electrolyte) or add acid (over-concentrates electrolyte)",
    "opts": ["Use bottled drinking water - safe and pure enough", "Use DISTILLED WATER only; never use tap water (minerals contaminate electrolyte) or add acid (over-concentrates electrolyte)", "Any type of water is acceptable - minerals in tap water are beneficial", "Use the same concentration H2SO4 as the electrolyte"],
    "exp": "Electrolyte top-up: DISTILLED WATER ONLY. Why: During charging, only water molecules are electrolysed - H2SO4 remains. Only water is lost. Replacing with distilled water restores concentration. Tap water: minerals (Ca, Mg, Fe) precipitate on plates, contaminating active material, increasing self-discharge. Adding acid: over-concentrates electrolyte -> accelerated grid corrosion -> reduced life.",
    "cat": "ORD",
    "id": "T23B_136"
  },
  {
    "q": "When sourcing a battery from a local port supplier without the usual approved marine supplier, what must be verified?",
    "a": "Class type approval certificate, conformance to specified parameters, and condition (not previously used or reconditioned)",
    "opts": ["Class type approval certificate, conformance to specified parameters, and condition (not previously used or reconditioned)", "Local reputation of the supplier is sufficient verification", "No verification needed if the voltage and Ah markings match", "Price comparison with usual supplier only"],
    "exp": "Non-approved supplier procurement (emergency): (1) Request type approval certificate - battery must still meet class requirements even from local supplier. (2) Check all specifications match (voltage, Ah, CCA, dimensions). (3) Confirm new (not reconditioned/second-hand). (4) Request manufacture date - not expired. (5) If class-approved certificate unavailable: use with class notified and as temporary measure only. Document entire process.",
    "cat": "ORD",
    "id": "T23B_137"
  },
  {
    "q": "A surveyor asks: 'How do you order a replacement battery for the emergency generator?' List the information you would provide.",
    "a": "Type (Lead-acid/NiCd), Voltage (12V/24V), Ah at C-rate, CCA at -18 degrees C, dimensions, terminal type, polarity, maintenance type, temperature range, SOLAS class approval",
    "opts": ["Type (Lead-acid/NiCd), Voltage (12V/24V), Ah at C-rate, CCA at -18 degrees C, dimensions, terminal type, polarity, maintenance type, temperature range, SOLAS class approval", "Model number, quantity, and delivery port", "Just the make and model of the existing battery", "Voltage and price budget only"],
    "exp": "Complete exam answer structure: 'When ordering an emergency generator battery, I provide: (1) Chemistry: lead-acid/VRLA. (2) Voltage: 24V. (3) Capacity: Ah at C-rate. (4) Starting: CCA at -18 degrees C per engine manual. (5) Dimensions: LxWxH mm. (6) Terminal type and polarity. (7) Type: VRLA or flooded. (8) Temperature: minimum ambient for trading area. (9) Approval: SOLAS class-approved. (10) Shelf life: as required.' This comprehensive answer demonstrates professional knowledge.",
    "cat": "ORD",
    "id": "T23B_138"
  },
  {
    "q": "What temperature should batteries be stored at while waiting for installation or in the ship's stores?",
    "a": "Cool, dry location at 15-25 degrees C - avoid engine room heat, direct sunlight, and freezing temperatures",
    "opts": ["Engine room storage is acceptable - uniform temperature is maintained", "Store in refrigerator at 5 degrees C - cold slows self-discharge", "Temperature of storage has no effect on batteries", "Cool, dry location at 15-25 degrees C - avoid engine room heat, direct sunlight, and freezing temperatures"],
    "exp": "Battery storage conditions: (1) Temperature: 15-25 degrees C ideal. High temperature (>30 degrees C) accelerates self-discharge and electrolyte degradation. (2) Location: Dry (humidity causes terminal corrosion). Cool (not engine room which may be 40-50 degrees C). Protected from direct sunlight. (3) Lead-acid in storage: keep on maintenance charge to prevent sulphation from self-discharge.",
    "cat": "ORD",
    "id": "T23B_139"
  },
  {
    "q": "What is the first action when a brand new battery is received before installation in the emergency system?",
    "a": "Perform an initial charge, then capacity test to verify it meets rated Ah before installing in safety-critical application",
    "opts": ["Perform an initial charge, then capacity test to verify it meets rated Ah before installing in safety-critical application", "Install immediately - new batteries are fully charged from factory", "Store for 30 days before installation to allow 'settling'", "No action needed - manufacturer's certificate guarantees capacity"],
    "exp": "New battery pre-installation procedure: (1) Inspect for damage. (2) Check delivery documentation. (3) Initial charge: new batteries are often shipped at partial SOC (to reduce shipping weight/risk). (4) Capacity test: verify it actually delivers rated Ah (manufacturer quality control is not 100%). (5) Record initial test result with date. Only then install in safety-critical application.",
    "cat": "ORD",
    "id": "T23B_140"
  },
  {
    "q": "What is the defining characteristic of an 'Online' (Double-Conversion) UPS?",
    "a": "The load is always supplied continuously from the inverter, resulting in zero transfer time during a mains failure",
    "opts": ["The load is normally supplied by the mains and switches to the inverter on failure", "It only operates when connected to the internet", "It uses a mechanical transfer switch to change power sources", "The load is always supplied continuously from the inverter, resulting in zero transfer time during a mains failure"],
    "exp": "In an Online UPS, power continuously flows AC -> DC (Rectifier) -> AC (Inverter). Because the battery is constantly on the DC bus, a mains failure causes absolutely no interruption to the load.",
    "cat": "UPS",
    "id": "T23B_141"
  },
  {
    "q": "What is the defining characteristic of an 'Offline' (Standby) UPS?",
    "a": "The load is normally fed by the mains, and a transfer switch connects the inverter only when mains power fails, causing a 4-12ms interruption",
    "opts": ["It completely isolates the load from the mains at all times", "It provides zero transfer time", "The load is normally fed by the mains, and a transfer switch connects the inverter only when mains power fails, causing a 4-12ms interruption", "It only charges the battery when the load is disconnected"],
    "exp": "Offline UPS systems switch over to battery power only when they detect a voltage drop. The mechanical relay switchover introduces a brief gap in power.",
    "cat": "UPS",
    "id": "T23B_142"
  },
  {
    "q": "Why are Online UPS systems preferred over Offline UPS systems for critical ship navigation equipment like ECDIS?",
    "a": "ECDIS computers may reboot or lose position data during the 4-12ms switchover gap of an Offline UPS",
    "opts": ["Online UPS systems do not use batteries", "Online UPS systems are cheaper", "Offline UPS systems cannot produce 220V", "ECDIS computers may reboot or lose position data during the 4-12ms switchover gap of an Offline UPS"],
    "exp": "Critical microprocessor-based systems demand absolute zero-interruption power, which only a double-conversion Online UPS can guarantee.",
    "cat": "UPS",
    "id": "T23B_143"
  },
  {
    "q": "What is the function of the 'Static Bypass Switch' in an Online UPS?",
    "a": "It automatically transfers the load directly to the mains supply using fast thyristors if the UPS inverter fails or is overloaded",
    "opts": ["It physically disconnects the UPS from the wall socket", "It automatically transfers the load directly to the mains supply using fast thyristors if the UPS inverter fails or is overloaded", "It shuts down the entire electrical grid", "It connects a secondary battery bank"],
    "exp": "The static bypass provides a fail-safe. If the inverter burns out or the load spikes (e.g., motor starting), the thyristors instantly connect the load to the raw mains.",
    "cat": "UPS",
    "id": "T23B_144"
  },
  {
    "q": "What is a 'Maintenance Bypass Switch' on a marine UPS?",
    "a": "A manual switch that wraps power around the UPS, allowing the UPS to be completely electrically isolated for repairs while the load remains powered from the mains",
    "opts": ["A switch that tests the battery capacity", "An automatic switch that engages when the battery dies", "A network switch for remote monitoring", "A manual switch that wraps power around the UPS, allowing the UPS to be completely electrically isolated for repairs while the load remains powered from the mains"],
    "exp": "It allows the ETO to safely open the UPS chassis, replace capacitors or batteries, without turning off the bridge computers.",
    "cat": "UPS",
    "id": "T23B_145"
  },
  {
    "q": "What component in a UPS converts the DC battery power back into AC power for the load?",
    "a": "The Inverter",
    "opts": ["The Rectifier", "The Inverter", "The Static Switch", "The Transformer"],
    "exp": "The inverter uses high-speed switching components (like IGBTs) to chop the DC battery voltage into a simulated or pure AC sine wave.",
    "cat": "UPS",
    "id": "T23B_146"
  },
  {
    "q": "What component in an Online UPS converts incoming AC mains power into DC power to charge the battery and feed the inverter?",
    "a": "The Rectifier",
    "opts": ["The Filter Choke", "The Rectifier", "The Inverter", "The Static Bypass"],
    "exp": "The rectifier (often an active IGBT bridge in modern systems) converts the ship's 220V AC into a stable DC link voltage.",
    "cat": "UPS",
    "id": "T23B_147"
  },
  {
    "q": "What is meant by 'Galvanic Isolation' in a UPS system?",
    "a": "The physical separation of the input and output electrical circuits using an isolation transformer, preventing ground faults from crossing over",
    "opts": ["The physical separation of the input and output electrical circuits using an isolation transformer, preventing ground faults from crossing over", "Connecting the UPS directly to the ship's hull", "The use of galvanized steel for the UPS casing", "Isolating the batteries in a separate room"],
    "exp": "An isolation transformer ensures there is no direct wire connection between the ship's grid and the sensitive load, stopping stray noise and earth faults.",
    "cat": "UPS",
    "id": "T23B_148"
  },
  {
    "q": "When sizing a UPS, what is the 'Crest Factor'?",
    "a": "The ratio of the peak current to the RMS current drawn by the load",
    "opts": ["The physical height of the UPS cabinet", "The maximum voltage the UPS can withstand", "The ratio of the peak current to the RMS current drawn by the load", "The ratio of battery size to inverter size"],
    "exp": "Computer power supplies draw power in sharp spikes at the peak of the sine wave. A high crest factor means the UPS inverter must be able to deliver massive, brief bursts of current.",
    "cat": "UPS",
    "id": "T23B_149"
  },
  {
    "q": "What visual indication usually confirms an Online UPS is operating normally on mains power?",
    "a": "Both the Rectifier and Inverter LED indicators are green/active, and the battery is floating",
    "opts": ["The Bypass LED is glowing yellow", "Both the Rectifier and Inverter LED indicators are green/active, and the battery is floating", "Only the Inverter LED is active", "The Battery Discharge LED is flashing"],
    "exp": "Normal operation implies power is actively flowing through both the conversion stages while keeping the battery topped up.",
    "cat": "UPS",
    "id": "T23B_150"
  },
  {
    "q": "If the 'Bypass' LED illuminates on a bridge UPS during a heavy storm, what is the most likely cause?",
    "a": "An overload transient or inverter fault caused the UPS to automatically switch the load directly to the ship's raw mains",
    "opts": ["An overload transient or inverter fault caused the UPS to automatically switch the load directly to the ship's raw mains", "The battery is fully charged", "The UPS is functioning perfectly", "The ship has lost all generator power"],
    "exp": "The static switch fires to protect the inverter from blowing up during a short circuit or heavy load spike, connecting the load directly to the MSB.",
    "cat": "UPS",
    "id": "T23B_151"
  },
  {
    "q": "What is the typical battery voltage string configuration for a large 10kVA 3-phase marine UPS?",
    "a": "A high-voltage DC link, typically between 192V DC and 384V DC (multiple 12V batteries in series)",
    "opts": ["48V DC", "12V DC", "24V DC", "A high-voltage DC link, typically between 192V DC and 384V DC (multiple 12V batteries in series)"],
    "exp": "Large inverters need high DC bus voltages to efficiently synthesize 220V/380V AC without drawing unmanageably massive currents from the batteries.",
    "cat": "UPS",
    "id": "T23B_152"
  },
  {
    "q": "Under SOLAS, if a ship uses a UPS to satisfy the GMDSS reserve source of energy requirement, how long must it power the equipment?",
    "a": "1 hour, provided the emergency generator can auto-start within 1 minute",
    "opts": ["6 hours unconditionally", "10 minutes", "24 hours", "1 hour, provided the emergency generator can auto-start within 1 minute"],
    "exp": "The UPS acts as the transitional bridge. If the emergency generator works, 1 hour of battery is sufficient.",
    "cat": "UPS",
    "id": "T23B_153"
  },
  {
    "q": "What happens if a single 12V battery block fails OPEN in a 32-block series UPS battery string?",
    "a": "The entire DC link is broken; the UPS will immediately drop the load if mains power fails",
    "opts": ["The remaining batteries charge faster", "The UPS voltage drops by 12V but continues running normally", "The entire DC link is broken; the UPS will immediately drop the load if mains power fails", "The UPS runs 1/32nd shorter"],
    "exp": "In a pure series string, one open circuit kills the entire string, rendering the UPS completely useless during a blackout.",
    "cat": "UPS",
    "id": "T23B_154"
  },
  {
    "q": "What is a 'Line-Interactive' UPS?",
    "a": "A UPS that normally feeds mains power to the load but incorporates an automatic voltage regulator (AVR/buck-boost transformer) to correct minor voltage sags without using the battery",
    "opts": ["A UPS that only works on DC loads", "A UPS that requires an internet connection", "A UPS that completely regenerates the AC sine wave continuously", "A UPS that normally feeds mains power to the load but incorporates an automatic voltage regulator (AVR/buck-boost transformer) to correct minor voltage sags without using the battery"],
    "exp": "It is a middle ground between offline and online. It smooths out 'brownouts' using transformer taps before resorting to battery power.",
    "cat": "UPS",
    "id": "T23B_155"
  },
  {
    "q": "Why do large marine UPS systems often incorporate cooling fans?",
    "a": "To dissipate the significant heat generated by the IGBT switching losses in the rectifier and inverter stages",
    "opts": ["To provide ventilation for the bridge", "To dissipate the significant heat generated by the IGBT switching losses in the rectifier and inverter stages", "To disperse hydrogen gas from sealed batteries", "To cool the batteries below freezing"],
    "exp": "Power electronics are not 100% efficient. A 10kW UPS at 90% efficiency generates 1kW of pure heat that must be exhausted.",
    "cat": "UPS",
    "id": "T23B_156"
  },
  {
    "q": "What does 'VFI' stand for in standard UPS classifications (e.g., VFI-SS-111)?",
    "a": "Voltage and Frequency Independent (describing an Online Double-Conversion UPS)",
    "opts": ["Variable Frequency Inverter", "Voltage and Frequency Independent (describing an Online Double-Conversion UPS)", "Very Fast Interruption", "Voltage Fluctuation Indicator"],
    "exp": "VFI means the output AC is completely independent of whatever garbage voltage or frequency is coming from the ship's generators.",
    "cat": "UPS",
    "id": "T23B_157"
  },
  {
    "q": "What is the primary danger when performing maintenance inside a UPS, even after it is completely disconnected from the mains and batteries?",
    "a": "Lethal high-voltage charge remains stored in the large DC link capacitors for several minutes",
    "opts": ["Residual magnetic fields in the transformer", "Radioactive emissions from the IGBTs", "Hydrogen gas trapped in the circuit boards", "Lethal high-voltage charge remains stored in the large DC link capacitors for several minutes"],
    "exp": "The massive electrolytic capacitors must be allowed to discharge through bleeder resistors. Always measure for 0V DC before touching the internals.",
    "cat": "UPS",
    "id": "T23B_158"
  },
  {
    "q": "How does a UPS synchronize with the ship's mains before returning from battery mode to normal mode?",
    "a": "The inverter slowly matches its output frequency and phase angle to the incoming mains before closing the static switch",
    "opts": ["It abruptly forces the voltage to match", "The inverter slowly matches its output frequency and phase angle to the incoming mains before closing the static switch", "It shuts down for 5 seconds to reset", "It relies on the ship's main switchboard to sync it"],
    "exp": "To prevent a violent phase-mismatch explosion when switching back to raw mains, the UPS internal Phase-Locked Loop (PLL) tracks the grid.",
    "cat": "UPS",
    "id": "T23B_159"
  },
  {
    "q": "What is 'Load Shedding' in the context of an intelligent marine UPS?",
    "a": "The UPS automatically powers off non-essential connected sockets (e.g., printers) during a prolonged blackout to save battery life for critical loads (e.g., ECDIS)",
    "opts": ["The UPS disconnecting from the MSB", "The UPS dropping its entire load instantly", "The UPS charging the batteries faster", "The UPS automatically powers off non-essential connected sockets (e.g., printers) during a prolonged blackout to save battery life for critical loads (e.g., ECDIS)"],
    "exp": "Advanced UPS units can divide their output. When battery runs low, they sacrifice secondary equipment to keep primary navigation alive longer.",
    "cat": "UPS",
    "id": "T23B_160"
  },
  {
    "q": "What alarm must be triggered in the Engine Control Room (ECR) if the bridge UPS switches to battery power?",
    "a": "A 'UPS on Battery' or 'Mains Failure' alarm",
    "opts": ["A low oil pressure alarm", "A fire alarm", "An earth fault alarm", "A 'UPS on Battery' or 'Mains Failure' alarm"],
    "exp": "Engineers must be alerted immediately that the critical bridge equipment is now operating on a finite countdown timer.",
    "cat": "UPS",
    "id": "T23B_161"
  },
  {
    "q": "If a UPS outputs a 'Pure Sine Wave', what type of load is it specifically safe to power?",
    "a": "Sensitive electronics, instrumentation, and AC motors that would overheat or malfunction on a 'Stepped' or 'Modified' sine wave",
    "opts": ["DC battery chargers only", "Sensitive electronics, instrumentation, and AC motors that would overheat or malfunction on a 'Stepped' or 'Modified' sine wave", "Incandescent light bulbs only", "Only resistive heating elements"],
    "exp": "Cheap inverters produce blocky stepped waves containing high harmonics. Pure sine wave inverters exactly mimic a rotating generator's smooth output.",
    "cat": "UPS",
    "id": "T23B_162"
  },
  {
    "q": "What is the function of the 'ECO Mode' setting on some modern UPS systems?",
    "a": "It runs the UPS as an Offline system (powering load via bypass) to save energy, only engaging the inverter if mains drops",
    "opts": ["It runs the UPS as an Offline system (powering load via bypass) to save energy, only engaging the inverter if mains drops", "It limits the maximum output to 50%", "It turns off the cooling fans permanently", "It uses solar power to charge the batteries"],
    "exp": "ECO mode boosts efficiency to ~99% by bypassing the double-conversion losses, but re-introduces a 2-4ms transfer time risk.",
    "cat": "UPS",
    "id": "T23B_163"
  },
  {
    "q": "What happens if the internal temperature of the UPS exceeds its safe operating limit (e.g., broken cooling fan)?",
    "a": "The UPS will typically sound an over-temperature alarm and automatically switch to static bypass to protect the inverter",
    "opts": ["It will disconnect the battery permanently", "It will catch fire intentionally", "It will increase the output voltage", "The UPS will typically sound an over-temperature alarm and automatically switch to static bypass to protect the inverter"],
    "exp": "Heat destroys power electronics. The UPS will sacrifice clean power and dump the load to raw mains to save its own internal components.",
    "cat": "UPS",
    "id": "T23B_164"
  },
  {
    "q": "Can you parallel two standalone UPS units simply by wiring their outputs together?",
    "a": "No, they will be out of phase and violently short-circuit each other; they require specialized parallel synchronization cards",
    "opts": ["No, because the voltage will double", "Yes, but only if they are the exact same brand", "No, they will be out of phase and violently short-circuit each other; they require specialized parallel synchronization cards", "Yes, it doubles the capacity instantly"],
    "exp": "Like ship generators, UPS inverters must communicate and lock their sine waves perfectly in phase before combining outputs.",
    "cat": "UPS",
    "id": "T23B_165"
  },
  {
    "q": "What routine ETO maintenance ensures UPS battery readiness?",
    "a": "Performing a periodic controlled battery discharge/load test and verifying all individual block voltages remain balanced",
    "opts": ["Dusting the outside of the cabinet", "Replacing the input fuses monthly", "Resetting the LCD screen", "Performing a periodic controlled battery discharge/load test and verifying all individual block voltages remain balanced"],
    "exp": "A UPS showing 100% charge might actually be dead if the battery's internal resistance is high. Only a real load test proves capacity.",
    "cat": "UPS",
    "id": "T23B_166"
  },
  {
    "q": "What does a 'Battery Weak' or 'Replace Battery' alarm on a UPS indicate?",
    "a": "The UPS's automated self-test detected a rapid voltage drop during a brief diagnostic discharge, indicating high internal resistance",
    "opts": ["The mains power is fluctuating", "The battery is fully charged", "The inverter has failed", "The UPS's automated self-test detected a rapid voltage drop during a brief diagnostic discharge, indicating high internal resistance"],
    "exp": "Smart UPS units briefly drop the rectifier and pulse the battery every week. If the voltage sags instantly, the battery is condemned.",
    "cat": "UPS",
    "id": "T23B_167"
  },
  {
    "q": "In a 3-phase marine UPS, what does an 'Unbalanced Load' alarm mean?",
    "a": "The current drawn on one phase (e.g., L1) is significantly higher than the other two phases, stressing the inverter components",
    "opts": ["The input frequency is unstable", "The current drawn on one phase (e.g., L1) is significantly higher than the other two phases, stressing the inverter components", "The UPS is physically tilted due to ship roll", "The battery string is missing a block"],
    "exp": "If all bridge computers are plugged into Phase L1, the UPS must work unevenly. Loads should be distributed evenly across L1, L2, L3.",
    "cat": "UPS",
    "id": "T23B_168"
  },
  {
    "q": "Why is an Isolation Transformer heavily recommended on the input of a Marine UPS?",
    "a": "Marine 440V systems are ungrounded (IT); the transformer prevents common-mode noise and earth faults from the ship's grid from passing into the UPS",
    "opts": ["Marine 440V systems are ungrounded (IT); the transformer prevents common-mode noise and earth faults from the ship's grid from passing into the UPS", "To increase the efficiency to 100%", "To change the frequency from 50Hz to 60Hz", "To store battery power magnetically"],
    "exp": "The transformer provides a clean, local neutral point for the sensitive bridge equipment without tying it to the dirty main ship hull earth.",
    "cat": "UPS",
    "id": "T23B_169"
  },
  {
    "q": "What is 'Cold Start' capability in a UPS?",
    "a": "The ability to turn on the UPS and supply AC output using only battery power, without any initial mains supply present",
    "opts": ["Starting the UPS without engaging the cooling fans", "The ability to turn on the UPS and supply AC output using only battery power, without any initial mains supply present", "Starting the UPS in freezing Arctic weather", "Booting the UPS using shore power only"],
    "exp": "Crucial during a dead-ship situation. You can 'cold start' the UPS to power up a radio or emergency light before the main generators are revived.",
    "cat": "UPS",
    "id": "T23B_170"
  },
  {
    "q": "What is the standard unit of measurement for Battery Capacity?",
    "a": "Ampere-hours (Ah)",
    "opts": ["Farads (F)", "Volts (V)", "Ampere-hours (Ah)", "Watts (W)"],
    "exp": "Ampere-hours measure the total electrical charge stored. A 100Ah battery can theoretically deliver 100 Amps for 1 hour, or 10 Amps for 10 hours.",
    "cat": "CAPACITY",
    "id": "T23B_171"
  },
  {
    "q": "What is Peukert's Law regarding battery capacity?",
    "a": "As the rate of discharge (Amps) increases, the battery's available capacity (Ah) decreases significantly",
    "opts": ["As the rate of discharge (Amps) increases, the battery's available capacity (Ah) decreases significantly", "All batteries degrade by exactly 10% per year", "Capacity doubles when temperature halves", "Voltage remains perfectly constant until empty"],
    "exp": "A 100Ah battery discharged at 100A might only last 40 minutes (66Ah useful), whereas discharged at 5A it lasts 20 hours (100Ah useful).",
    "cat": "CAPACITY",
    "id": "T23B_172"
  },
  {
    "q": "If a battery is rated at 200 Ah at the C10 rate, what does 'C10' mean?",
    "a": "The capacity was measured over a 10-hour continuous discharge period (i.e., drawn at 20 Amps for 10 hours)",
    "opts": ["It can deliver 200 Amps for 10 minutes", "The capacity was measured over a 10-hour continuous discharge period (i.e., drawn at 20 Amps for 10 hours)", "It has 10 individual cells", "It requires 10 hours to fully charge"],
    "exp": "Battery ratings are tied to time. Drawing the energy out slower (C20) gives a higher Ah rating than drawing it out fast (C10 or C5).",
    "cat": "CAPACITY",
    "id": "T23B_173"
  },
  {
    "q": "What does CCA stand for on a starter battery label?",
    "a": "Cold Cranking Amps",
    "opts": ["Charge Current Average", "Continuous Capacity Ampere", "Cold Cranking Amps", "Cell Capacity Allowance"],
    "exp": "CCA is the maximum current a battery can deliver at -18\u00b0C for 30 seconds while maintaining a minimum voltage (usually 7.2V for a 12V battery).",
    "cat": "CAPACITY",
    "id": "T23B_174"
  },
  {
    "q": "Why is CCA a critical metric for lifeboat and emergency generator batteries?",
    "a": "It guarantees the battery has the explosive power needed to turn over a cold, stiff diesel engine in freezing marine conditions",
    "opts": ["It dictates the maximum lighting load", "It guarantees the battery has the explosive power needed to turn over a cold, stiff diesel engine in freezing marine conditions", "It guarantees the battery will last 20 years", "It shows how fast the battery can be recharged"],
    "exp": "A battery might have a high Ah rating but low CCA, meaning it stores a lot of energy but can't release it fast enough to crank a heavy engine.",
    "cat": "CAPACITY",
    "id": "T23B_175"
  },
  {
    "q": "How does extreme cold (e.g., 0\u00b0C) affect a lead-acid battery's available capacity?",
    "a": "It drastically reduces the available capacity and increases internal resistance",
    "opts": ["It increases the capacity by preventing chemical evaporation", "It has absolutely no effect", "It increases the voltage but drops the current", "It drastically reduces the available capacity and increases internal resistance"],
    "exp": "Cold temperatures slow down the internal chemical reactions. A battery at 0\u00b0C may only deliver 60% of its rated 25\u00b0C capacity.",
    "cat": "CAPACITY",
    "id": "T23B_176"
  },
  {
    "q": "What is the standard reference temperature for stating battery capacity (Ah)?",
    "a": "25\u00b0C (or 20\u00b0C depending on specific regional standards)",
    "opts": ["100\u00b0C", "25\u00b0C (or 20\u00b0C depending on specific regional standards)", "40\u00b0C", "0\u00b0C"],
    "exp": "Most spec sheets (like 100Ah @ C10) are guaranteed only if the battery is operating at an ambient temperature of 25\u00b0C.",
    "cat": "CAPACITY",
    "id": "T23B_177"
  },
  {
    "q": "What happens to the lifespan of a lead-acid battery if it is continuously operated in an excessively hot environment (e.g., 40\u00b0C)?",
    "a": "Its service life is cut in half for every 10\u00b0C rise above 25\u00b0C",
    "opts": ["Its capacity drops to zero instantly", "Its lifespan doubles", "Its service life is cut in half for every 10\u00b0C rise above 25\u00b0C", "It prevents sulphation entirely"],
    "exp": "Heat accelerates internal corrosion of the positive grids and dries out the electrolyte, rapidly destroying the battery.",
    "cat": "CAPACITY",
    "id": "T23B_178"
  },
  {
    "q": "What is the only definitive way to measure the actual remaining capacity (Health) of a battery?",
    "a": "Perform a timed, controlled discharge (Load Test) down to the specified cut-off voltage",
    "opts": ["Weigh the battery", "Perform a timed, controlled discharge (Load Test) down to the specified cut-off voltage", "Check the specific gravity of one cell", "Measure the open-circuit voltage with a multimeter"],
    "exp": "Voltage and Specific Gravity only indicate State of Charge (how full it is). Only pulling a load proves if the 'bucket' has shrunk due to aging (State of Health).",
    "cat": "CAPACITY",
    "id": "T23B_179"
  },
  {
    "q": "At what threshold is a critical marine battery (like GMDSS) considered to have reached its end-of-life and must be replaced?",
    "a": "When its measured actual capacity falls below 80% of its original rated capacity",
    "opts": ["Only when it completely fails to hold a charge", "When its measured actual capacity falls below 80% of its original rated capacity", "When it drops below 95%", "When it reaches 50%"],
    "exp": "80% is the absolute limit required by SOLAS/Class. A 100Ah battery that only delivers 79Ah during a load test must be scrapped.",
    "cat": "CAPACITY",
    "id": "T23B_180"
  },
  {
    "q": "What is 'State of Charge' (SOC)?",
    "a": "The current amount of energy stored in the battery as a percentage of its current maximum capacity",
    "opts": ["The rate at which it is being charged", "The physical age of the battery", "The current amount of energy stored in the battery as a percentage of its current maximum capacity", "The voltage applied by the charger"],
    "exp": "SOC is like the fuel gauge. 100% SOC just means it is 'full'\u2014even if the battery is old and its 'full' is only half what it used to be.",
    "cat": "CAPACITY",
    "id": "T23B_181"
  },
  {
    "q": "What is 'State of Health' (SOH)?",
    "a": "A measurement of the battery's maximum available capacity compared to its original factory-rated capacity",
    "opts": ["The voltage reading at rest", "The physical cleanliness of the terminals", "The specific gravity of the acid", "A measurement of the battery's maximum available capacity compared to its original factory-rated capacity"],
    "exp": "SOH reflects degradation. A 10-year-old battery might be fully charged (100% SOC), but its SOH might be a miserable 40%.",
    "cat": "CAPACITY",
    "id": "T23B_182"
  },
  {
    "q": "What is a 'Deep Cycle' battery?",
    "a": "A battery with thicker lead plates designed to be regularly discharged down to 20-50% capacity without suffering severe damage",
    "opts": ["A battery with thicker lead plates designed to be regularly discharged down to 20-50% capacity without suffering severe damage", "A battery that requires pure saltwater as electrolyte", "A battery designed to deliver a massive 1000A pulse for 5 seconds", "A battery used exclusively in deep submarines"],
    "exp": "Starter batteries have thin, spongey plates for quick bursts (high CCA). Deep cycle batteries have solid, heavy plates to survive long, slow drains.",
    "cat": "CAPACITY",
    "id": "T23B_183"
  },
  {
    "q": "During a capacity test of a 24V lead-acid bank, what is the typical cut-off voltage where the test is terminated?",
    "a": "Approximately 21.0V (1.75V per cell)",
    "opts": ["Approximately 21.0V (1.75V per cell)", "0V", "24.0V", "12.0V"],
    "exp": "Draining a 24V lead-acid system below 21V causes permanent, irreversible plate damage. The capacity is calculated based on the time it takes to hit this floor.",
    "cat": "CAPACITY",
    "id": "T23B_184"
  },
  {
    "q": "If you perform a capacity test on a 100Ah (C10) battery using a 10 Amp load, and it reaches the cut-off voltage in 7 hours, what is its actual capacity?",
    "a": "70 Ah",
    "opts": ["100 Ah", "80 Ah", "70 Ah", "10 Ah"],
    "exp": "Capacity = Current x Time. 10 Amps x 7 Hours = 70 Ah. (Since 70Ah is < 80% of 100Ah, this battery must be replaced).",
    "cat": "CAPACITY",
    "id": "T23B_185"
  },
  {
    "q": "What does a dramatic, sudden drop in voltage during the first 5 minutes of a load test usually indicate?",
    "a": "High internal resistance due to sulphation, dry cells, or failing internal connections",
    "opts": ["The battery is overcharged", "The charger is still connected", "A perfectly healthy battery", "High internal resistance due to sulphation, dry cells, or failing internal connections"],
    "exp": "If V = IR, high internal resistance (R) causes a massive internal voltage drop when load current (I) is demanded, collapsing the terminal voltage.",
    "cat": "CAPACITY",
    "id": "T23B_186"
  },
  {
    "q": "Why should you never measure a battery's Open Circuit Voltage (OCV) immediately after disconnecting the charger?",
    "a": "The 'surface charge' will give an artificially high voltage reading; the battery must rest for a few hours to stabilize",
    "opts": ["The voltage will be zero", "It will electrocute the multimeter", "The 'surface charge' will give an artificially high voltage reading; the battery must rest for a few hours to stabilize", "It causes the battery to short circuit"],
    "exp": "Charging leaves a highly concentrated acid layer right against the plates. Resting allows the electrolyte to diffuse and show the true resting voltage.",
    "cat": "CAPACITY",
    "id": "T23B_187"
  },
  {
    "q": "What is the typical Open Circuit Voltage (OCV) of a fully charged, rested 12V lead-acid battery?",
    "a": "12.6V to 12.8V",
    "opts": ["12.6V to 12.8V", "13.5V to 14.4V", "12.0V exactly", "11.5V"],
    "exp": "Each cell rests at 2.1V to 2.13V. 6 cells x 2.1V = 12.6V. A reading of exactly 12.0V means the battery is almost completely dead.",
    "cat": "CAPACITY",
    "id": "T23B_188"
  },
  {
    "q": "How does connecting batteries in SERIES affect voltage and capacity?",
    "a": "Voltage adds up; Ah capacity remains the same",
    "opts": ["Voltage adds up; Ah capacity remains the same", "Ah capacity adds up; voltage remains the same", "Both voltage and capacity add up", "Both remain exactly the same"],
    "exp": "Two 12V 100Ah batteries in series = 24V 100Ah system.",
    "cat": "CAPACITY",
    "id": "T23B_189"
  },
  {
    "q": "How does connecting batteries in PARALLEL affect voltage and capacity?",
    "a": "Ah capacity adds up; voltage remains the same",
    "opts": ["Ah capacity adds up; voltage remains the same", "Both remain exactly the same", "Voltage adds up; Ah capacity remains the same", "Both voltage and capacity add up"],
    "exp": "Two 12V 100Ah batteries in parallel = 12V 200Ah system.",
    "cat": "CAPACITY",
    "id": "T23B_190"
  },
  {
    "q": "If you need a 24V, 400Ah battery bank, and you only have 12V, 200Ah batteries, how many do you need and how are they wired?",
    "a": "4 batteries: Two series strings (to make 24V) connected in parallel (to double to 400Ah)",
    "opts": ["4 batteries all in series", "4 batteries: Two series strings (to make 24V) connected in parallel (to double to 400Ah)", "2 batteries in parallel", "2 batteries in series"],
    "exp": "Series pairs (12V+12V = 24V @ 200Ah). Paralleling two of these pairs gives 24V @ 400Ah.",
    "cat": "CAPACITY",
    "id": "T23B_191"
  },
  {
    "q": "What happens if you mix old batteries with new batteries in a series string?",
    "a": "The older, weaker cells have high resistance and will drag down the entire string, overcharging the good cells and ruining the new batteries",
    "opts": ["The new batteries recharge the old ones permanently", "They average out perfectly and extend the lifespan", "The older, weaker cells have high resistance and will drag down the entire string, overcharging the good cells and ruining the new batteries", "The voltage doubles"],
    "exp": "A series string is only as strong as its weakest link. The weak cell boils dry while restricting current to the rest.",
    "cat": "CAPACITY",
    "id": "T23B_192"
  },
  {
    "q": "What is the 'Float' charging voltage?",
    "a": "A constant, low-level voltage applied indefinitely to maintain a fully charged battery against self-discharge without boiling the electrolyte",
    "opts": ["The voltage measured when the battery is floating in water", "The absolute zero voltage point", "A constant, low-level voltage applied indefinitely to maintain a fully charged battery against self-discharge without boiling the electrolyte", "A high-voltage pulse used to break up sulphation"],
    "exp": "For a 24V system, float is usually 27.6V. It pushes just a few milliamps to counter natural chemical degradation.",
    "cat": "CAPACITY",
    "id": "T23B_193"
  },
  {
    "q": "What is 'Self-Discharge' in a battery?",
    "a": "The natural, slow loss of capacity over time due to internal chemical reactions even when no external load is connected",
    "opts": ["The natural, slow loss of capacity over time due to internal chemical reactions even when no external load is connected", "The battery dumping power into the hull", "A short circuit across the terminals", "The deliberate discharging for a load test"],
    "exp": "Lead-acid loses ~5% per month at room temp. This is why stored spare batteries must be topped up every few months or they sulfate and die.",
    "cat": "CAPACITY",
    "id": "T23B_194"
  },
  {
    "q": "What is a 'Boost' or 'Bulk' charge?",
    "a": "A higher-voltage, constant-current charging phase used to rapidly recharge a deeply discharged battery back to ~80% capacity",
    "opts": ["A method of discharging the battery quickly", "A higher-voltage, constant-current charging phase used to rapidly recharge a deeply discharged battery back to ~80% capacity", "A low-voltage trickle charge", "A reverse-polarity charge"],
    "exp": "Boost mode forces high amps into the battery until it reaches the gassing voltage threshold, then it steps down to absorption/float.",
    "cat": "CAPACITY",
    "id": "T23B_195"
  },
  {
    "q": "What device provides an instantaneous assessment of a battery's cranking ability without doing a full 10-hour discharge test?",
    "a": "A digital battery conductance/impedance tester",
    "opts": ["A standard multimeter", "A thermometer", "A digital battery conductance/impedance tester", "A hydrometer"],
    "exp": "Modern handheld testers inject an AC signal to measure internal resistance, mathematically estimating the remaining CCA instantly.",
    "cat": "CAPACITY",
    "id": "T23B_196"
  },
  {
    "q": "Why does a battery's capacity naturally degrade over 5 years of normal use?",
    "a": "Active material sheds from the plates, the positive grids corrode, and irreversible hard sulphation builds up, reducing the reactive surface area",
    "opts": ["The plastic casing shrinks and squeezes the plates", "Active material sheds from the plates, the positive grids corrode, and irreversible hard sulphation builds up, reducing the reactive surface area", "The acid turns completely into water", "The lead turns into gold"],
    "exp": "Every charge/discharge cycle causes microscopic damage. Eventually, the physical lead framework disintegrates.",
    "cat": "CAPACITY",
    "id": "T23B_197"
  },
  {
    "q": "If a ship's GMDSS system draws 20 Amps while transmitting, and the battery is 200Ah, why won't it last exactly 10 hours?",
    "a": "Due to Peukert's Law, drawing 20A from a C20 rated battery reduces its effective capacity, so it will last less than 10 hours",
    "opts": ["Due to Peukert's Law, drawing 20A from a C20 rated battery reduces its effective capacity, so it will last less than 10 hours", "Because the radio gets heavier when hot", "Because the battery charges itself while discharging", "It will last exactly 10 hours"],
    "exp": "Batteries are non-linear. The harder you pull, the more energy is wasted internally as heat.",
    "cat": "CAPACITY",
    "id": "T23B_198"
  },
  {
    "q": "What is the typical specific gravity (SG) drop between a fully charged and fully discharged lead-acid cell?",
    "a": "From roughly 1.280 (Full) down to 1.120 (Dead)",
    "opts": ["From roughly 1.280 (Full) down to 1.120 (Dead)", "From 1.200 down to 1.150", "From 1.500 down to 1.000", "It doesn't change"],
    "exp": "Tracking the SG with a hydrometer provides a highly accurate estimate of the State of Charge (SOC).",
    "cat": "CAPACITY",
    "id": "T23B_199"
  },
  {
    "q": "How can you estimate the capacity of a battery bank if the nameplate is missing but you know its weight and dimensions?",
    "a": "Lead-acid battery capacity is directly proportional to the physical weight of lead inside; heavy batteries equal high Ah",
    "opts": ["Lead-acid battery capacity is directly proportional to the physical weight of lead inside; heavy batteries equal high Ah", "By counting the number of plastic caps", "Size and weight have no relation to capacity", "Lighter batteries have higher Ah"],
    "exp": "Unlike lithium, lead chemistry is fixed. A 200Ah battery will always weigh roughly twice as much as a 100Ah battery of the same construction.",
    "cat": "CAPACITY",
    "id": "T23B_200"
  },
  {
    "q": "What are the two active materials on the plates of a fully charged Lead-Acid battery?",
    "a": "Lead Dioxide (PbO2) on the positive plate, and Sponge Lead (Pb) on the negative plate",
    "opts": ["Lead Dioxide (PbO2) on the positive plate, and Sponge Lead (Pb) on the negative plate", "Copper on positive, Zinc on negative", "Lead Sulphate (PbSO4) on both plates", "Carbon on positive, Lead on negative"],
    "exp": "The potential difference between these two distinct lead compounds drives the 2.1 Volt cell voltage.",
    "cat": "LEAD_ACID",
    "id": "T23B_201"
  },
  {
    "q": "What comprises the electrolyte in a flooded Lead-Acid battery?",
    "a": "A solution of Sulphuric Acid (H2SO4) and Distilled Water (H2O)",
    "opts": ["Saltwater", "A solution of Potassium Hydroxide (KOH)", "A solution of Sulphuric Acid (H2SO4) and Distilled Water (H2O)", "Pure hydrochloric acid"],
    "exp": "Typically mixed to a ratio of 35% acid to 65% water, providing the sulphate ions needed for the reaction.",
    "cat": "LEAD_ACID",
    "id": "T23B_202"
  },
  {
    "q": "What chemical compound is formed on BOTH plates during the discharge of a lead-acid battery?",
    "a": "Lead Sulphate (PbSO4)",
    "opts": ["Sulphuric Acid", "Lead Sulphate (PbSO4)", "Hydrogen gas", "Lead Dioxide"],
    "exp": "During discharge, the sulphate ions from the acid bond with the lead plates, turning both plates into the same material (PbSO4) and dropping the voltage to zero.",
    "cat": "LEAD_ACID",
    "id": "T23B_203"
  },
  {
    "q": "Why does the specific gravity of the electrolyte DROP when a lead-acid battery discharges?",
    "a": "Sulphuric acid is consumed by the plates to form lead sulphate, and water is produced as a byproduct, diluting the remaining acid",
    "opts": ["Sulphuric acid is consumed by the plates to form lead sulphate, and water is produced as a byproduct, diluting the remaining acid", "The plates absorb the water", "The acid evaporates as gas", "The lead dissolves into the liquid, making it lighter"],
    "exp": "This chemical dilution is why a hydrometer is a perfect indicator of how discharged the battery is.",
    "cat": "LEAD_ACID",
    "id": "T23B_204"
  },
  {
    "q": "What dangerous gas is produced when a lead-acid battery is charging, particularly near the end of the charge cycle?",
    "a": "Hydrogen gas (highly explosive)",
    "opts": ["Methane", "Chlorine gas", "Hydrogen gas (highly explosive)", "Carbon Monoxide (toxic)"],
    "exp": "When the plates are fully converted, excess charging current electrolyzes the water into hydrogen and oxygen, creating an explosive mix.",
    "cat": "LEAD_ACID",
    "id": "T23B_205"
  },
  {
    "q": "What is 'Sulphation' in a lead-acid battery?",
    "a": "The formation of hard, irreversible lead sulphate crystals on the plates caused by leaving the battery in a discharged state for too long",
    "opts": ["The formation of hard, irreversible lead sulphate crystals on the plates caused by leaving the battery in a discharged state for too long", "The production of hydrogen sulphide gas", "The process of adding sulphuric acid to a new battery", "The melting of the internal plastic separators"],
    "exp": "Normal soft lead sulphate converts back easily during charging. If left uncharged, it crystallizes, permanently ruining the battery's capacity.",
    "cat": "LEAD_ACID",
    "id": "T23B_206"
  },
  {
    "q": "What is an 'Equalization Charge'?",
    "a": "A controlled, deliberate overcharge applied periodically to balance the voltage of all cells and break up early-stage sulphation",
    "opts": ["Discharging all cells to absolutely zero", "A quick 5-minute charge to start an engine", "Charging the battery with AC power", "A controlled, deliberate overcharge applied periodically to balance the voltage of all cells and break up early-stage sulphation"],
    "exp": "By pushing the voltage higher (e.g., 2.4V/cell) for a few hours, the lagging cells are forced up to 100%, and the electrolyte is stirred by the bubbling gas.",
    "cat": "LEAD_ACID",
    "id": "T23B_207"
  },
  {
    "q": "Why must you only use DISTILLED or DEMINERALIZED water when topping up a battery?",
    "a": "Tap water contains minerals and chlorides that contaminate the electrolyte, increasing self-discharge and permanently destroying the plates",
    "opts": ["Tap water evaporates too quickly", "Tap water contains minerals and chlorides that contaminate the electrolyte, increasing self-discharge and permanently destroying the plates", "Tap water is too acidic", "Distilled water is a better conductor"],
    "exp": "Minerals like iron or calcium cause localized micro-short circuits on the plates, rapidly killing the battery.",
    "cat": "LEAD_ACID",
    "id": "T23B_208"
  },
  {
    "q": "When is the correct time to add distilled water to a flooded lead-acid battery?",
    "a": "AFTER the battery is fully charged (unless the plates are physically exposed, then add just enough to cover them before charging)",
    "opts": ["Before performing a capacity load test", "When the battery is completely dead", "AFTER the battery is fully charged (unless the plates are physically exposed, then add just enough to cover them before charging)", "While it is actively boiling"],
    "exp": "Electrolyte expands during charging. Topping it up to the MAX line when discharged guarantees it will overflow and spill acid when charged.",
    "cat": "LEAD_ACID",
    "id": "T23B_209"
  },
  {
    "q": "What does VRLA stand for?",
    "a": "Valve Regulated Lead Acid",
    "opts": ["Variable Resistance Lead Array", "Vertical Rack Lead Assembly", "Valve Regulated Lead Acid", "Vented Recombination Liquid Acid"],
    "exp": "VRLA batteries (like AGM or Gel) are sealed. A pressure valve only opens if severe overcharging causes gas buildup.",
    "cat": "LEAD_ACID",
    "id": "T23B_210"
  },
  {
    "q": "What is the primary advantage of VRLA (AGM/Gel) batteries over flooded lead-acid batteries?",
    "a": "They are spill-proof, require zero topping up with water, and emit very little gas under normal charging",
    "opts": ["They are completely indestructible", "They use a solid lead block with no acid", "They have double the voltage per cell", "They are spill-proof, require zero topping up with water, and emit very little gas under normal charging"],
    "exp": "Oxygen and hydrogen generated during charging recombine into water inside the sealed case, making them 'maintenance-free'.",
    "cat": "LEAD_ACID",
    "id": "T23B_211"
  },
  {
    "q": "Why are VRLA batteries extremely sensitive to excessive charging voltage?",
    "a": "Overcharging forces them to vent gas through the safety valve; since water cannot be added back, the battery permanently dries out and dies",
    "opts": ["They will catch fire immediately", "The internal plates reverse polarity", "Overcharging forces them to vent gas through the safety valve; since water cannot be added back, the battery permanently dries out and dies", "The acid turns into a solid rock"],
    "exp": "A broken charger will boil a flooded battery dry, but the ETO can just add water. If a VRLA vents, the moisture is gone forever.",
    "cat": "LEAD_ACID",
    "id": "T23B_212"
  },
  {
    "q": "What is the 'Thermal Runaway' risk specifically associated with VRLA batteries?",
    "a": "Internal heat lowers cell resistance, causing it to draw more charge current, which creates more heat, spiraling until the battery melts or bursts",
    "opts": ["The acid turns into plasma", "Internal heat lowers cell resistance, causing it to draw more charge current, which creates more heat, spiraling until the battery melts or bursts", "The battery freezes and shatters", "The voltage climbs to 1000V"],
    "exp": "Without liquid electrolyte to act as a heat sink, packed VRLA arrays can overheat rapidly if the charger does not feature temperature compensation.",
    "cat": "LEAD_ACID",
    "id": "T23B_213"
  },
  {
    "q": "What tool is used to measure the Specific Gravity (SG) of a flooded battery?",
    "a": "A Hydrometer",
    "opts": ["An Oscilloscope", "A Multimeter", "A Hydrometer", "A Barometer"],
    "exp": "A hydrometer uses a floating bulb in a glass tube to measure the density of the acid relative to pure water.",
    "cat": "LEAD_ACID",
    "id": "T23B_214"
  },
  {
    "q": "If one cell in a 12V battery shows an SG of 1.150 while the other five show 1.280, what is the diagnosis?",
    "a": "The cell is dead/shorted; the entire 12V battery block must be replaced",
    "opts": ["The battery just needs a normal 10-minute charge", "The cell is dead/shorted; the entire 12V battery block must be replaced", "Add sulphuric acid to the low cell", "It is perfectly normal variation"],
    "exp": "Cells should not vary by more than 0.050. A massive divergence means internal plates have failed. You cannot repair a sealed 12V block.",
    "cat": "LEAD_ACID",
    "id": "T23B_215"
  },
  {
    "q": "Should you routinely add Sulphuric Acid to a battery during maintenance?",
    "a": "No, acid is only added if electrolyte was physically spilled out of the battery; normal evaporation only loses water",
    "opts": ["Yes, if the voltage drops below 12V", "Yes, every month to keep the SG high", "No, acid is illegal on ships", "No, acid is only added if electrolyte was physically spilled out of the battery; normal evaporation only loses water"],
    "exp": "The acid doesn't evaporate. If you add acid instead of water, you will create a super-concentrated mix that destroys the plates.",
    "cat": "LEAD_ACID",
    "id": "T23B_216"
  },
  {
    "q": "What causes the white powdery buildup on lead-acid battery terminals?",
    "a": "Lead sulphate corrosion caused by acid fumes reacting with the lead terminals and air",
    "opts": ["Plastic degrading from UV light", "Copper oxide from the cables", "Lead sulphate corrosion caused by acid fumes reacting with the lead terminals and air", "Salt from the ocean air"],
    "exp": "This fluffy white corrosion introduces massive electrical resistance. Terminals must be cleaned and coated with petroleum jelly to prevent it.",
    "cat": "LEAD_ACID",
    "id": "T23B_217"
  },
  {
    "q": "What is the recommended cleaning solution to neutralize spilled battery acid?",
    "a": "A mixture of baking soda (sodium bicarbonate) and water",
    "opts": ["Pure distilled water", "Vinegar", "Engine oil", "A mixture of baking soda (sodium bicarbonate) and water"],
    "exp": "Baking soda is a mild base that neutralizes the sulphuric acid safely, preventing it from eating holes in the steel deck.",
    "cat": "LEAD_ACID",
    "id": "T23B_218"
  },
  {
    "q": "Why should batteries be installed in a cool location on the ship?",
    "a": "Heat accelerates internal corrosion; a battery's life halves for every 10\u00b0C rise above 25\u00b0C",
    "opts": ["To prevent them from floating", "Heat accelerates internal corrosion; a battery's life halves for every 10\u00b0C rise above 25\u00b0C", "To increase their internal resistance", "They generate too much cold air"],
    "exp": "Putting the battery bank right next to a hot exhaust pipe guarantees they will need replacing in a year instead of 5 years.",
    "cat": "LEAD_ACID",
    "id": "T23B_219"
  },
  {
    "q": "What is 'Temperature Compensated Charging'?",
    "a": "The charger automatically lowers its output voltage in hot weather and raises it in cold weather to prevent overcharging or undercharging",
    "opts": ["The charger automatically lowers its output voltage in hot weather and raises it in cold weather to prevent overcharging or undercharging", "Stopping the charge if the room gets hot", "Heating the battery before charging it", "Using air conditioning to cool the charger"],
    "exp": "Because battery electrochemistry changes with temperature, a fixed 27.6V float might boil a battery at 40\u00b0C or leave it dead at 0\u00b0C.",
    "cat": "LEAD_ACID",
    "id": "T23B_220"
  },
  {
    "q": "What is the purpose of the vent caps on a flooded lead-acid battery?",
    "a": "To allow hydrogen and oxygen gases to escape safely while trapping acid mist and returning it to the cell",
    "opts": ["To allow hydrogen and oxygen gases to escape safely while trapping acid mist and returning it to the cell", "To look pretty", "To create pressure inside the cell", "To allow rainwater to enter"],
    "exp": "They feature tiny baffles. If they are blocked by dirt, the battery casing can pressurize and explode.",
    "cat": "LEAD_ACID",
    "id": "T23B_221"
  },
  {
    "q": "Why must you wear safety goggles and rubber gloves when working with flooded batteries?",
    "a": "Sulphuric acid is highly corrosive and can cause instant, permanent blindness if splashed in the eyes",
    "opts": ["To prevent static electricity", "To protect from UV light", "To prevent electric shock from 12V", "Sulphuric acid is highly corrosive and can cause instant, permanent blindness if splashed in the eyes"],
    "exp": "Exploding batteries or accidental splashing during top-up are severe chemical burn hazards.",
    "cat": "LEAD_ACID",
    "id": "T23B_222"
  },
  {
    "q": "What happens if a metal spanner drops across the positive and negative terminals of a 200Ah battery?",
    "a": "A massive short circuit drawing thousands of amps, instantly melting the spanner, causing severe burns, and potentially exploding the battery",
    "opts": ["A massive short circuit drawing thousands of amps, instantly melting the spanner, causing severe burns, and potentially exploding the battery", "The battery safely turns off", "A small spark", "The voltage drops to zero with no damage"],
    "exp": "Lead-acid batteries have incredibly low internal resistance. They will dump massive energy into a dead short instantly.",
    "cat": "LEAD_ACID",
    "id": "T23B_223"
  },
  {
    "q": "What is 'Stratification' in a lead-acid battery?",
    "a": "The heavy acid sinks to the bottom of the cell and light water rises to the top, causing uneven plate wear and reduced capacity",
    "opts": ["The plates bending out of shape", "The heavy acid sinks to the bottom of the cell and light water rises to the top, causing uneven plate wear and reduced capacity", "The plastic casing peeling apart", "The hydrogen gas freezing"],
    "exp": "If a battery sits idle or is only shallowly charged, the mixture separates. An equalization (gassing) charge creates bubbles that stir the liquid back into a uniform mix.",
    "cat": "LEAD_ACID",
    "id": "T23B_224"
  },
  {
    "q": "Why should batteries never be left resting directly on a bare steel deck?",
    "a": "They should sit on acid-resistant wooden or plastic gratings to prevent heat transfer and protect the deck from corrosive leaks",
    "opts": ["The steel will drain the voltage magnetically", "They should sit on acid-resistant wooden or plastic gratings to prevent heat transfer and protect the deck from corrosive leaks", "They will slide around too much", "The steel deck will rust instantly"],
    "exp": "Regulations require proper dunnage/trays under battery banks for thermal insulation and spill containment.",
    "cat": "LEAD_ACID",
    "id": "T23B_225"
  },
  {
    "q": "If a lead-acid battery is completely discharged (SG 1.100) and left outside in freezing Arctic temperatures, what will happen?",
    "a": "The highly diluted electrolyte (mostly water) will freeze, expanding and shattering the plastic casing",
    "opts": ["The highly diluted electrolyte (mostly water) will freeze, expanding and shattering the plastic casing", "Nothing, lead-acid batteries cannot freeze", "It will recharge itself slowly", "It will become a super-conductor"],
    "exp": "A fully charged battery (dense acid) won't freeze until -50\u00b0C. A dead battery (mostly water) freezes at -5\u00b0C.",
    "cat": "LEAD_ACID",
    "id": "T23B_226"
  },
  {
    "q": "What is the typical internal structure of an AGM (Absorbent Glass Mat) battery?",
    "a": "The sulphuric acid is suspended in a fiberglass mat pressed tightly between the plates, preventing spills even if the case is broken",
    "opts": ["It uses liquid silicone instead of acid", "It uses a solid block of lead without acid", "The sulphuric acid is suspended in a fiberglass mat pressed tightly between the plates, preventing spills even if the case is broken", "The plates are made of solid glass"],
    "exp": "AGMs are rugged, vibration-resistant, and won't leak liquid, making them excellent for rough marine conditions.",
    "cat": "LEAD_ACID",
    "id": "T23B_227"
  },
  {
    "q": "What does a 'magic eye' (built-in hydrometer) on a sealed car/boat battery indicate when it turns clear or white?",
    "a": "The electrolyte level is dangerously low, and the battery is likely ruined",
    "opts": ["The battery is discharged but healthy (Black/Red)", "The electrolyte level is dangerously low, and the battery is likely ruined", "The battery is perfectly healthy", "The battery is fully charged (Green)"],
    "exp": "The eye relies on a floating green ball. If it goes clear, the liquid level has dropped below the eye, meaning the plates are exposed and burning up.",
    "cat": "LEAD_ACID",
    "id": "T23B_228"
  },
  {
    "q": "How does the size of the lead plates affect the battery's characteristics?",
    "a": "Thick plates give long deep-cycle life; thin spongey plates give massive burst current (CCA) for starting",
    "opts": ["Thick plates give higher voltage", "Thick plates give long deep-cycle life; thin spongey plates give massive burst current (CCA) for starting", "Plate size has no effect on performance", "Thin plates last 20 years"],
    "exp": "Starter batteries maximize surface area (thin plates) for instant power. Deep cycle batteries maximize physical mass (thick plates) to survive slow, deep chemical stripping.",
    "cat": "LEAD_ACID",
    "id": "T23B_229"
  },
  {
    "q": "What is the nominal voltage of a single Nickel-Cadmium (Ni-Cd) cell?",
    "a": "1.2 Volts",
    "opts": ["2.0 Volts", "3.7 Volts", "1.2 Volts", "1.5 Volts"],
    "exp": "Lead-acid is 2.0V/cell. Ni-Cd is 1.2V/cell. To make a 24V battery, you need 20 Ni-Cd cells in series.",
    "cat": "NI_CD",
    "id": "T23B_230"
  },
  {
    "q": "What is the electrolyte used in a Ni-Cd battery?",
    "a": "Potassium Hydroxide (KOH) mixed with water",
    "opts": ["Lithium Salt", "Potassium Hydroxide (KOH) mixed with water", "Sodium Chloride", "Sulphuric Acid"],
    "exp": "KOH is a highly corrosive alkaline solution (base), totally different from the acidic electrolyte in lead-acid batteries.",
    "cat": "NI_CD",
    "id": "T23B_231"
  },
  {
    "q": "What happens to the Specific Gravity (SG) of a Ni-Cd battery's electrolyte as it discharges?",
    "a": "It remains practically constant, unlike a lead-acid battery",
    "opts": ["It rises significantly", "It fluctuates wildly", "It drops significantly", "It remains practically constant, unlike a lead-acid battery"],
    "exp": "The KOH merely acts as an ion conductor between the plates; it does not chemically bond with the plates. Therefore, you cannot check a Ni-Cd's charge level with a hydrometer.",
    "cat": "NI_CD",
    "id": "T23B_232"
  },
  {
    "q": "What are the active materials on the plates of a charged Ni-Cd battery?",
    "a": "Nickel Oxide Hydroxide (NiOOH) on the positive, and Cadmium (Cd) on the negative",
    "opts": ["Lithium Cobalt Oxide and Graphite", "Lead Dioxide and Sponge Lead", "Zinc and Manganese Dioxide", "Nickel Oxide Hydroxide (NiOOH) on the positive, and Cadmium (Cd) on the negative"],
    "exp": "This robust chemical pairing gives the battery its incredibly long life and tolerance to abuse.",
    "cat": "NI_CD",
    "id": "T23B_233"
  },
  {
    "q": "What is a massive advantage of Ni-Cd batteries over Lead-Acid for emergency ship systems?",
    "a": "They have a much longer lifespan (10-20 years) and tolerate deep discharging and overcharging extremely well",
    "opts": ["They have double the voltage per cell", "They do not produce any gas", "They are much cheaper to purchase", "They have a much longer lifespan (10-20 years) and tolerate deep discharging and overcharging extremely well"],
    "exp": "While expensive upfront, their ruggedness makes them perfect for reliable 20-year GMDSS or Emergency Generator installations.",
    "cat": "NI_CD",
    "id": "T23B_234"
  },
  {
    "q": "How does extreme cold affect a Ni-Cd battery compared to a Lead-Acid battery?",
    "a": "Ni-Cd batteries perform exceptionally well in freezing temperatures, retaining much more of their starting capacity than lead-acid",
    "opts": ["Ni-Cd batteries perform exceptionally well in freezing temperatures, retaining much more of their starting capacity than lead-acid", "There is no difference", "They freeze and shatter instantly", "The electrolyte turns to solid salt"],
    "exp": "This makes them the preferred choice for lifeboats and emergency systems on ships operating in Arctic regions.",
    "cat": "NI_CD",
    "id": "T23B_235"
  },
  {
    "q": "What is the 'Memory Effect' historically associated with Ni-Cd batteries?",
    "a": "If repeatedly discharged only partially before recharging, the battery 'remembers' the shallow cycle and loses its full capacity",
    "opts": ["If repeatedly discharged only partially before recharging, the battery 'remembers' the shallow cycle and loses its full capacity", "The battery memorizes the ship's frequency", "The battery remembers its original voltage", "The charger refuses to charge it past 50%"],
    "exp": "To fix this, Ni-Cd batteries should periodically be subjected to a deep, full discharge and recharge to clear the crystal formations.",
    "cat": "NI_CD",
    "id": "T23B_236"
  },
  {
    "q": "Why MUST Ni-Cd and Lead-Acid batteries be stored and maintained in completely separate rooms?",
    "a": "The fumes from the acid will neutralize the alkaline KOH electrolyte, ruining the Ni-Cd battery permanently",
    "opts": ["They will explode if they touch", "The heavy lead will crush the cadmium", "The fumes from the acid will neutralize the alkaline KOH electrolyte, ruining the Ni-Cd battery permanently", "SOLAS requires it for weight distribution"],
    "exp": "Even using the same hydrometer, funnel, or topping-up jug for both types will introduce cross-contamination and destroy the cells.",
    "cat": "NI_CD",
    "id": "T23B_237"
  },
  {
    "q": "What gas is produced by a Ni-Cd battery during vigorous overcharging?",
    "a": "Hydrogen and Oxygen (explosive mixture)",
    "opts": ["Cadmium vapor", "Hydrogen and Oxygen (explosive mixture)", "Chlorine gas", "Carbon Dioxide"],
    "exp": "Just like lead-acid, electrolyzing the water in the KOH solution produces explosive hydrogen. Ventilation is strictly required.",
    "cat": "NI_CD",
    "id": "T23B_238"
  },
  {
    "q": "When is the correct time to add distilled water to a Ni-Cd battery?",
    "a": "Only when the battery is fully charged",
    "opts": ["Never, they are all sealed", "When the battery is completely dead", "Continuously via a drip feed", "Only when the battery is fully charged"],
    "exp": "The electrolyte level rises significantly during charging. Topping up a dead cell will cause it to overflow violently when charged.",
    "cat": "NI_CD",
    "id": "T23B_239"
  },
  {
    "q": "What is 'Carbonation' in a Ni-Cd battery?",
    "a": "The KOH electrolyte absorbs CO2 from the air, forming potassium carbonate which increases internal resistance and reduces performance",
    "opts": ["The KOH electrolyte absorbs CO2 from the air, forming potassium carbonate which increases internal resistance and reduces performance", "The plates turning to coal", "The addition of carbon to make the plates stronger", "The gas produced during charging"],
    "exp": "Vent caps must be kept closed to minimize air contact. Severely carbonated electrolyte must be completely drained and replaced.",
    "cat": "NI_CD",
    "id": "T23B_240"
  },
  {
    "q": "How does the discharge voltage curve of a Ni-Cd battery compare to a Lead-Acid battery?",
    "a": "The Ni-Cd voltage stays incredibly flat and constant for most of the discharge, then drops off a cliff at the very end",
    "opts": ["The Ni-Cd voltage stays incredibly flat and constant for most of the discharge, then drops off a cliff at the very end", "It slopes downward steadily from 100% to 0%", "It rises as it discharges", "It spikes wildly"],
    "exp": "This flat profile is great for running electronics consistently, but makes it impossible to guess the State of Charge simply by looking at a voltmeter.",
    "cat": "NI_CD",
    "id": "T23B_241"
  },
  {
    "q": "If a Ni-Cd battery cell is completely dead (0 Volts), is it permanently ruined?",
    "a": "No, Ni-Cd cells can often survive being completely flattened to zero volts without permanent plate damage",
    "opts": ["Yes, it reverses polarity permanently", "Yes, it must be thrown away", "No, Ni-Cd cells can often survive being completely flattened to zero volts without permanent plate damage", "Yes, the cadmium dissolves"],
    "exp": "Unlike lead-acid (which dies if taken below 1.75V), Ni-Cd's rugged chemistry allows it to be short-circuited for storage without harm.",
    "cat": "NI_CD",
    "id": "T23B_242"
  },
  {
    "q": "What is the typical float voltage setting for a single Ni-Cd cell?",
    "a": "1.40 to 1.45 Volts",
    "opts": ["1.40 to 1.45 Volts", "2.3 Volts", "1.2 Volts", "1.0 Volts"],
    "exp": "For a 20-cell (24V) bank, the charger is set around 28.0V to 29.0V to maintain full charge.",
    "cat": "NI_CD",
    "id": "T23B_243"
  },
  {
    "q": "What environmental hazard is associated with Ni-Cd batteries?",
    "a": "Cadmium is a highly toxic heavy metal, requiring strict, specialized disposal procedures",
    "opts": ["They release radioactive isotopes", "They emit greenhouse gases continuously", "Cadmium is a highly toxic heavy metal, requiring strict, specialized disposal procedures", "The KOH creates ozone holes"],
    "exp": "Because of cadmium toxicity, Ni-Cd batteries are banned in many consumer electronics, but remain legal and essential for critical industrial/marine use.",
    "cat": "NI_CD",
    "id": "T23B_244"
  },
  {
    "q": "Can you use the same hydrometer for both the engine room lead-acid batteries and the bridge Ni-Cd batteries?",
    "a": "Absolutely not; transferring even a drop of acid will permanently destroy the alkaline Ni-Cd chemistry",
    "opts": ["Yes, but the readings will be reversed", "Absolutely not; transferring even a drop of acid will permanently destroy the alkaline Ni-Cd chemistry", "Yes, if you wash it with seawater first", "Yes, they use the exact same liquid"],
    "exp": "Tools must be strictly segregated, colour-coded, and kept in separate rooms.",
    "cat": "NI_CD",
    "id": "T23B_245"
  },
  {
    "q": "What happens if a Ni-Cd battery experiences 'Thermal Runaway' during charging?",
    "a": "Heat lowers internal resistance, drawing more charge current, creating more heat, eventually boiling the electrolyte and potentially melting the casing",
    "opts": ["Heat lowers internal resistance, drawing more charge current, creating more heat, eventually boiling the electrolyte and potentially melting the casing", "The voltage climbs to 100V", "The cadmium turns to lead", "It freezes solid"],
    "exp": "Ni-Cd batteries have a negative temperature coefficient. Chargers must have temperature compensation to back off the voltage if the battery gets hot.",
    "cat": "NI_CD",
    "id": "T23B_246"
  },
  {
    "q": "Why is the internal resistance of a Ni-Cd battery so low?",
    "a": "The plates are closely packed and the KOH electrolyte is highly conductive, allowing massive, rapid current discharge (like starting an engine)",
    "opts": ["Because cadmium is a superconductor", "The plates are closely packed and the KOH electrolyte is highly conductive, allowing massive, rapid current discharge (like starting an engine)", "Because they use thick lead plates", "Because there is no liquid inside"],
    "exp": "This makes them excellent for delivering the huge burst of Cold Cranking Amps (CCA) needed for emergency diesels.",
    "cat": "NI_CD",
    "id": "T23B_247"
  },
  {
    "q": "If you measure the SG of a Ni-Cd battery and it is significantly lower than the manufacturer's spec, what does it mean?",
    "a": "The electrolyte has been diluted (e.g., someone added too much water) or carbonated; it does NOT mean the battery is discharged",
    "opts": ["The battery is completely dead", "The cadmium is burning", "The electrolyte has been diluted (e.g., someone added too much water) or carbonated; it does NOT mean the battery is discharged", "The battery is overcharged"],
    "exp": "Because SG doesn't change with charge state, a low SG means the chemical mix itself is corrupted and may need to be dumped and refilled.",
    "cat": "NI_CD",
    "id": "T23B_248"
  },
  {
    "q": "What PPE must be worn when mixing or handling KOH electrolyte for a Ni-Cd battery?",
    "a": "Full face shield, chemical apron, and thick rubber gloves; KOH causes severe, deep tissue burns and instant blindness",
    "opts": ["Full face shield, chemical apron, and thick rubber gloves; KOH causes severe, deep tissue burns and instant blindness", "Standard cotton coveralls", "Ear protection", "A dust mask"],
    "exp": "Alkaline burns are often worse than acid burns because they saponify (dissolve) fats and penetrate deeply into flesh and eyes.",
    "cat": "NI_CD",
    "id": "T23B_249"
  },
  {
    "q": "If KOH electrolyte splashes in your eye, what is the immediate first aid?",
    "a": "Flush the eye continuously with massive amounts of clean, flowing water for at least 15 minutes and seek immediate medical help",
    "opts": ["Apply a weak acid like vinegar to neutralize it", "Cover the eye with a dry bandage", "Flush the eye continuously with massive amounts of clean, flowing water for at least 15 minutes and seek immediate medical help", "Rub the eye vigorously"],
    "exp": "Never use acid to neutralize it in the eye; the chemical reaction creates intense heat and causes further severe burns. Just flush with water.",
    "cat": "NI_CD",
    "id": "T23B_250"
  },
  {
    "q": "How does the physical weight of a Ni-Cd battery compare to a Lead-Acid battery of the same Ah capacity?",
    "a": "Ni-Cd is significantly lighter",
    "opts": ["They weigh exactly the same", "Ni-Cd is significantly lighter", "Ni-Cd is much heavier", "Ni-Cd weight changes as it charges"],
    "exp": "Lead is exceptionally dense. A Ni-Cd bank saves considerable weight, useful on fast ferries or aircraft.",
    "cat": "NI_CD",
    "id": "T23B_251"
  },
  {
    "q": "What is 'Reconditioning' a Ni-Cd battery?",
    "a": "A process of performing several deep, controlled discharge-and-recharge cycles to erase the memory effect and restore lost crystalline capacity",
    "opts": ["A process of performing several deep, controlled discharge-and-recharge cycles to erase the memory effect and restore lost crystalline capacity", "Painting the outside casing", "Emptying the acid and replacing it", "Freezing the battery for 24 hours"],
    "exp": "This breaks down the large, lazy cadmium crystals back into the active, finely divided state.",
    "cat": "NI_CD",
    "id": "T23B_252"
  },
  {
    "q": "What happens if a Ni-Cd battery is deeply discharged and one weak cell goes to 0V while the others are still pushing current?",
    "a": "Cell Reversal: The strong cells force reverse current through the dead cell, damaging it and generating hydrogen gas",
    "opts": ["Cell Reversal: The strong cells force reverse current through the dead cell, damaging it and generating hydrogen gas", "The battery explodes instantly", "The voltage increases", "The weak cell recharges"],
    "exp": "This is why you don't drain multicell battery packs all the way down to absolute zero in normal use.",
    "cat": "NI_CD",
    "id": "T23B_253"
  },
  {
    "q": "Are the vent plugs on a Ni-Cd battery left open or closed during normal charging?",
    "a": "They must be kept closed to prevent CO2 from the air entering and carbonating the electrolyte",
    "opts": ["They must be kept closed to prevent CO2 from the air entering and carbonating the electrolyte", "Replaced with rubber corks", "Removed completely", "Left wide open for cooling"],
    "exp": "The caps have tiny spring-loaded relief valves to let hydrogen out without letting air in.",
    "cat": "NI_CD",
    "id": "T23B_254"
  },
  {
    "q": "What is the primary difference in cost between Lead-Acid and Ni-Cd?",
    "a": "Ni-Cd is roughly 3 to 4 times more expensive initially, but pays off over its 15+ year lifespan compared to replacing Lead-Acid every 3-5 years",
    "opts": ["Ni-Cd is cheaper but needs replacing monthly", "They cost the same", "Lead-Acid is much more expensive", "Ni-Cd is roughly 3 to 4 times more expensive initially, but pays off over its 15+ year lifespan compared to replacing Lead-Acid every 3-5 years"],
    "exp": "High CapEx, low OpEx makes Ni-Cd the choice for commercial shipping where reliability outweighs upfront cost.",
    "cat": "NI_CD",
    "id": "T23B_255"
  },
  {
    "q": "How can you physically identify a Ni-Cd cell block from a Lead-Acid block?",
    "a": "Ni-Cd cells are typically housed in translucent or semi-opaque plastic cases, often strapped together in metal frames, with steel/nickel terminals",
    "opts": ["Ni-Cd is always painted bright red", "Ni-Cd cases are made of cast iron", "Ni-Cd cells are typically housed in translucent or semi-opaque plastic cases, often strapped together in metal frames, with steel/nickel terminals", "Ni-Cd uses round car-battery posts"],
    "exp": "Marine Ni-Cd banks usually look like tall, ribbed plastic rectangles bolted together with heavy metal interconnect bars.",
    "cat": "NI_CD",
    "id": "T23B_256"
  },
  {
    "q": "Can you use a standard automotive lead-acid battery charger to properly charge a marine Ni-Cd bank?",
    "a": "No, Ni-Cd requires a specific constant-current charging profile and different voltage thresholds; a lead-acid charger will ruin it",
    "opts": ["Yes, electricity is all the same", "Yes, if you lower the voltage", "Yes, if you charge it upside down", "No, Ni-Cd requires a specific constant-current charging profile and different voltage thresholds; a lead-acid charger will ruin it"],
    "exp": "The charging algorithms are fundamentally different. A smart charger must be programmed specifically for the battery chemistry.",
    "cat": "NI_CD",
    "id": "T23B_257"
  },
  {
    "q": "What is the typical time required to fully fast-charge a completely empty Ni-Cd battery?",
    "a": "They can accept very high charge currents and can often be safely fast-charged in 1 to 2 hours without plate warping",
    "opts": ["Minimum 24 hours", "10 minutes", "72 hours", "They can accept very high charge currents and can often be safely fast-charged in 1 to 2 hours without plate warping"],
    "exp": "Unlike lead plates which warp and shed material if blasted with amps, Ni-Cd's steel pocket-plate construction easily absorbs fast charging.",
    "cat": "NI_CD",
    "id": "T23B_258"
  },
  {
    "q": "What causes the white crystal powder sometimes found on the outside of a Ni-Cd battery casing?",
    "a": "Potassium carbonate forming when spilled KOH electrolyte reacts with carbon dioxide in the air",
    "opts": ["Potassium carbonate forming when spilled KOH electrolyte reacts with carbon dioxide in the air", "Cadmium dust", "Dried sea salt", "Lead sulphate"],
    "exp": "It should be wiped off with a damp rag. It indicates minor weeping from the vent caps.",
    "cat": "NI_CD",
    "id": "T23B_259"
  },
  {
    "q": "What is the nominal voltage of a single Lithium-Ion (e.g., NMC or LFP) cell?",
    "a": "Typically 3.2V to 3.7V",
    "opts": ["Typically 3.2V to 3.7V", "1.2V", "2.0V", "12V"],
    "exp": "Lithium chemistries have a much higher base voltage than Lead (2V) or Ni-Cd (1.2V), meaning fewer cells are needed to reach high voltages.",
    "cat": "LI_ION",
    "id": "T23B_260"
  },
  {
    "q": "What is the primary advantage of Lithium-Ion batteries for marine hybrid/electric propulsion?",
    "a": "Extremely high energy density (they pack a massive amount of power into a very small, lightweight footprint)",
    "opts": ["Extremely high energy density (they pack a massive amount of power into a very small, lightweight footprint)", "They are non-flammable", "They do not require a management system", "They are the cheapest batteries available"],
    "exp": "Weight and space are premium on ships. Lithium packs vastly out-perform lead-acid in kWh per kilogram.",
    "cat": "LI_ION",
    "id": "T23B_261"
  },
  {
    "q": "What is the absolute most critical required component when operating a large Lithium-Ion battery bank?",
    "a": "A Battery Management System (BMS)",
    "opts": ["A Battery Management System (BMS)", "A massive lead heatsink", "A manual hydrometer", "A 60Hz transformer"],
    "exp": "Lithium cells are highly unstable if abused. A computer (BMS) must monitor the exact voltage and temp of EVERY single cell in the bank.",
    "cat": "LI_ION",
    "id": "T23B_262"
  },
  {
    "q": "What happens if a Lithium-Ion cell is overcharged past its maximum voltage limit (e.g., >4.2V)?",
    "a": "Metallic lithium plates out, pressure builds, and it will violently rupture, vent toxic gas, and catch fire (Thermal Runaway)",
    "opts": ["It reverses its polarity", "It safely boils off some water", "Metallic lithium plates out, pressure builds, and it will violently rupture, vent toxic gas, and catch fire (Thermal Runaway)", "The capacity increases"],
    "exp": "Unlike lead-acid which just bubbles hydrogen harmlessly, overcharging lithium destroys the chemical lattice and ignites the flammable organic electrolyte.",
    "cat": "LI_ION",
    "id": "T23B_263"
  },
  {
    "q": "What is 'Thermal Runaway' in a Lithium-Ion battery?",
    "a": "A chain reaction where internal heat causes a chemical breakdown, releasing oxygen and more heat, leading to an unstoppable, self-fueling fire",
    "opts": ["The cooling fans spinning at maximum speed", "The ship sailing to the tropics", "A chain reaction where internal heat causes a chemical breakdown, releasing oxygen and more heat, leading to an unstoppable, self-fueling fire", "The battery getting slightly warm during use"],
    "exp": "Once triggered (by short circuit, crushing, or overcharge), the fire produces its own oxygen and cannot be smothered with standard CO2 or foam.",
    "cat": "LI_ION",
    "id": "T23B_264"
  },
  {
    "q": "How is a large-scale Lithium-Ion battery fire in a ship's battery room fought?",
    "a": "By flooding the space with massive, continuous amounts of water to cool the adjacent cells and stop the chain reaction from spreading",
    "opts": ["Using dry chemical powder", "Using a small CO2 extinguisher", "By smothering it with a fire blanket", "By flooding the space with massive, continuous amounts of water to cool the adjacent cells and stop the chain reaction from spreading"],
    "exp": "Because the fire provides its own oxygen, smothering fails. The only way to stop thermal runaway from jumping from cell to cell is massive thermal cooling (water).",
    "cat": "LI_ION",
    "id": "T23B_265"
  },
  {
    "q": "What is 'Cell Balancing' performed by the BMS?",
    "a": "It bleeds off excess charge from the highest-voltage cells so the lower-voltage cells can catch up, ensuring the whole pack stays perfectly equalized",
    "opts": ["Balancing the AC frequency output", "Adding physical weights to the battery racks", "Mixing the liquid electrolyte with a pump", "It bleeds off excess charge from the highest-voltage cells so the lower-voltage cells can catch up, ensuring the whole pack stays perfectly equalized"],
    "exp": "If one cell hits 4.2V before the others, the charger must stop. The BMS slowly drains that full cell through a tiny resistor so charging can resume to fill the rest.",
    "cat": "LI_ION",
    "id": "T23B_266"
  },
  {
    "q": "Why must Lithium-Ion batteries NEVER be discharged below their absolute minimum cut-off voltage (e.g., 2.5V)?",
    "a": "Copper dissolves internally, causing microscopic short circuits (dendrites) that will ignite the cell the next time it is charged",
    "opts": ["The plastic casing shrinks", "Copper dissolves internally, causing microscopic short circuits (dendrites) that will ignite the cell the next time it is charged", "The battery forgets its memory", "The voltage reverses"],
    "exp": "Deep discharging ruins the internal architecture. This is why a dead laptop battery that has sat for a year often refuses to charge\u2014the BMS has permanently locked it out for safety.",
    "cat": "LI_ION",
    "id": "T23B_267"
  },
  {
    "q": "What is the standard charging method used for Lithium-Ion batteries?",
    "a": "CC/CV (Constant Current followed by Constant Voltage)",
    "opts": ["CC/CV (Constant Current followed by Constant Voltage)", "Direct On Line (DOL)", "Pulsed high-voltage AC", "Trickle charging only"],
    "exp": "The charger pushes max amps (CC) until the cell hits 4.2V, then it holds exactly 4.2V (CV) while the amps taper down to zero.",
    "cat": "LI_ION",
    "id": "T23B_268"
  },
  {
    "q": "According to marine classification rules (e.g., DNV), what must happen if the BMS loses communication with a battery module?",
    "a": "The main DC contactor must automatically open, instantly disconnecting the battery bank to fail-safe",
    "opts": ["The charger switches to maximum power", "Nothing, the battery runs blindly", "The main DC contactor must automatically open, instantly disconnecting the battery bank to fail-safe", "The ship must sound the general alarm"],
    "exp": "Running a mega-watt lithium bank blindly without computer oversight is a recipe for a catastrophic fire. Loss of comms = immediate shutdown.",
    "cat": "LI_ION",
    "id": "T23B_269"
  },
  {
    "q": "What type of cooling is typically required for MW-scale marine Lithium-Ion battery banks used for propulsion?",
    "a": "Active liquid cooling (chilled water/glycol running through cold plates between the cells)",
    "opts": ["Liquid nitrogen immersion", "Natural air convection", "No cooling is required", "Active liquid cooling (chilled water/glycol running through cold plates between the cells)"],
    "exp": "Pushing thousands of amps generates immense heat. Liquid cooling ensures every cell stays tightly within the 20-30\u00b0C optimal range.",
    "cat": "LI_ION",
    "id": "T23B_270"
  },
  {
    "q": "What is 'Peak Shaving' in a marine hybrid diesel-electric system?",
    "a": "Using the lithium battery to supply power during sudden load spikes (like starting a thruster), allowing the diesel generators to run at a steady, efficient load",
    "opts": ["Cutting the top off the battery cases", "Lowering the main switchboard voltage", "Using the lithium battery to supply power during sudden load spikes (like starting a thruster), allowing the diesel generators to run at a steady, efficient load", "Reducing the ship's top speed"],
    "exp": "The battery absorbs the violent transient loads. The engines don't have to roar up and down, saving massive amounts of fuel and reducing smoke.",
    "cat": "LI_ION",
    "id": "T23B_271"
  },
  {
    "q": "What is 'Spinning Reserve' regarding marine battery systems?",
    "a": "Using the battery bank to instantly take over the ship's load if a running generator fails, avoiding the need to run an extra, inefficient diesel engine just in case",
    "opts": ["A heavy flywheel attached to the generator", "A spare propeller kept on deck", "Using the battery bank to instantly take over the ship's load if a running generator fails, avoiding the need to run an extra, inefficient diesel engine just in case", "Rotating the batteries to even out wear"],
    "exp": "Instead of running two engines at 40% load for safety, you run one at 80% and let the instant-reacting battery act as the safety backup.",
    "cat": "LI_ION",
    "id": "T23B_272"
  },
  {
    "q": "Which Lithium-Ion chemistry is considered the safest and least prone to thermal runaway, making it popular for ships?",
    "a": "LFP (Lithium Iron Phosphate - LiFePO4)",
    "opts": ["LFP (Lithium Iron Phosphate - LiFePO4)", "Lead-Acid", "LCO (Lithium Cobalt Oxide)", "NCA (Nickel Cobalt Aluminum)"],
    "exp": "LFP is slightly heavier and holds less energy than a Tesla car battery (NCA/NMC), but its thermal stability is immensely higher, making it perfect for heavy marine use.",
    "cat": "LI_ION",
    "id": "T23B_273"
  },
  {
    "q": "At what percentage of 'State of Health' (SOH) are marine Lithium-Ion propulsion batteries typically scheduled for replacement?",
    "a": "Around 80% of original capacity",
    "opts": ["50%", "95%", "0%", "Around 80% of original capacity"],
    "exp": "Just like lead-acid, once lithium drops below 80% SOH, the internal resistance rises sharply, generating more heat and drastically reducing performance.",
    "cat": "LI_ION",
    "id": "T23B_274"
  },
  {
    "q": "What does an 'Off-Gas' sensor in a marine Lithium battery room detect?",
    "a": "The sweet/solvent-smelling vapour (electrolyte vapor) vented from a failing cell seconds BEFORE it bursts into thermal runaway",
    "opts": ["Hydrogen from the lead-acid batteries", "Carbon monoxide from the exhaust", "The sweet/solvent-smelling vapour (electrolyte vapor) vented from a failing cell seconds BEFORE it bursts into thermal runaway", "Steam from the cooling system"],
    "exp": "Detecting this early vent gas allows the safety systems to kill the power and trigger fire suppression before the actual flames erupt.",
    "cat": "LI_ION",
    "id": "T23B_275"
  },
  {
    "q": "What is the function of the main DC Contactors within a Lithium battery rack?",
    "a": "To safely connect or violently break the high-voltage DC connection between the battery modules and the ship's grid upon command from the BMS",
    "opts": ["To measure the voltage", "To safely connect or violently break the high-voltage DC connection between the battery modules and the ship's grid upon command from the BMS", "To control the cooling water flow", "To charge the batteries from AC"],
    "exp": "These are heavy-duty, arc-quenching relays. If the BMS senses a fault, it drops the contactor, physically isolating the bomb from the ship.",
    "cat": "LI_ION",
    "id": "T23B_276"
  },
  {
    "q": "Why is 'C-rate' particularly important for Lithium-Ion batteries?",
    "a": "Lithium batteries can safely be charged and discharged at massive C-rates (e.g., 3C, meaning fully drained in 20 minutes) without damaging the capacity",
    "opts": ["It determines the physical weight of the battery", "It is the concentration of carbon inside the cell", "Lithium batteries can safely be charged and discharged at massive C-rates (e.g., 3C, meaning fully drained in 20 minutes) without damaging the capacity", "They can only operate at extremely low C-rates"],
    "exp": "A lead-acid battery dies if you pull a 1C load for long. A lithium battery laughs at a 1C load and can dump massive power to drive a ship's propeller.",
    "cat": "LI_ION",
    "id": "T23B_277"
  },
  {
    "q": "What is 'Regenerative Braking' in a hybrid ship?",
    "a": "Using the electric propulsion motor as a generator to slow the ship down, taking the kinetic energy of the hull and dumping it back into the Lithium battery as charge",
    "opts": ["Generating heat to warm the cabins", "Using the electric propulsion motor as a generator to slow the ship down, taking the kinetic energy of the hull and dumping it back into the Lithium battery as charge", "Using brake pads on the propeller shaft", "Reversing the diesel engine"],
    "exp": "The spinning propeller drives the motor, creating electricity. The VFD routes this power backward into the DC link to recharge the battery.",
    "cat": "LI_ION",
    "id": "T23B_278"
  },
  {
    "q": "What is 'State of Charge' (SOC) window optimization for Lithium batteries?",
    "a": "Keeping the battery operating strictly between 20% and 80% full, which doubles or triples the total cycle life compared to 0-100% cycling",
    "opts": ["Opening the window in the battery room", "Keeping the battery operating strictly between 20% and 80% full, which doubles or triples the total cycle life compared to 0-100% cycling", "Charging the battery exactly at noon", "Charging only when the ship is moving"],
    "exp": "Sitting at 100% stresses the chemistry. Draining to 0% stresses it. The BMS on a hybrid ship deliberately avoids the extremes to make the battery last 10 years.",
    "cat": "LI_ION",
    "id": "T23B_279"
  },
  {
    "q": "Why does a marine Lithium-Ion battery room require an explosion-proof (Ex) exhaust ventilation system?",
    "a": "Because a venting lithium battery releases massive amounts of highly explosive gases (like hydrogen, methane, and toxic HF)",
    "opts": ["To meet standard engine room rules", "Because a venting lithium battery releases massive amounts of highly explosive gases (like hydrogen, methane, and toxic HF)", "To keep the batteries cold", "Because they smell bad during normal charging"],
    "exp": "While normal operation produces ZERO gas, a catastrophic failure turns the room into a Zone 1 explosive atmosphere instantly.",
    "cat": "LI_ION",
    "id": "T23B_280"
  },
  {
    "q": "If an ETO is asked to put a Lithium battery rack into long-term storage (e.g., 6 months laid up), what should the SOC be?",
    "a": "Approximately 40% to 50% SOC",
    "opts": ["0% SOC", "It doesn't matter", "100% SOC", "Approximately 40% to 50% SOC"],
    "exp": "Storing at 100% causes permanent capacity loss due to high internal stress. Storing at 0% risks self-discharging into the 'dead' zone. 50% is the ideal resting state.",
    "cat": "LI_ION",
    "id": "T23B_281"
  },
  {
    "q": "How does the BMS measure the exact current flowing in and out of the massive battery bank?",
    "a": "Using a highly precise shunt resistor or a Hall-effect current sensor located on the main DC bus",
    "opts": ["By guessing based on the voltage", "By communicating with the diesel engine", "By measuring the temperature", "Using a highly precise shunt resistor or a Hall-effect current sensor located on the main DC bus"],
    "exp": "The BMS must perform 'Coulomb Counting' (tracking every single electron that enters and leaves) to accurately calculate the remaining SOC %.",
    "cat": "LI_ION",
    "id": "T23B_282"
  },
  {
    "q": "What happens if the internal communication bus (e.g., CAN bus) between the individual cell monitors and the master BMS fails?",
    "a": "The Master BMS detects the loss of heartbeat, assumes a worst-case scenario, and trips the main DC contactor",
    "opts": ["The charger increases output", "The battery switches to analog mode", "The Master BMS detects the loss of heartbeat, assumes a worst-case scenario, and trips the main DC contactor", "The cells automatically balance themselves"],
    "exp": "If the brain can't see the individual cell voltages, it is flying blind. Safety rules mandate immediate shutdown.",
    "cat": "LI_ION",
    "id": "T23B_283"
  },
  {
    "q": "What is the primary danger of penetrating or crushing a Lithium-Ion pouch cell?",
    "a": "The extremely thin separator between the anode and cathode is pierced, creating a massive internal short circuit that instantly ignites the cell",
    "opts": ["It loses its memory effect", "It becomes a lead-acid battery", "The extremely thin separator between the anode and cathode is pierced, creating a massive internal short circuit that instantly ignites the cell", "The liquid acid leaks out and burns the deck"],
    "exp": "Physical damage forces the stored energy to dump into the short, generating intense heat and sparking the flammable electrolyte.",
    "cat": "LI_ION",
    "id": "T23B_284"
  },
  {
    "q": "What is a 'String' in a large marine battery installation?",
    "a": "A series-connected group of battery modules creating the high voltage DC link (e.g., 1000V DC)",
    "opts": ["A series-connected group of battery modules creating the high voltage DC link (e.g., 1000V DC)", "The computer network cable", "A parallel group of cells", "The wire connecting the battery to the motor"],
    "exp": "You stack modules like building blocks. 20 modules of 50V in series = One 1000V String. Multiple strings are paralleled to increase total ship capacity.",
    "cat": "LI_ION",
    "id": "T23B_285"
  },
  {
    "q": "How does the Power Management System (PMS) interface with the Lithium Battery BMS?",
    "a": "The BMS tells the PMS its max charge/discharge limits dynamically; the PMS ensures the VFDs and generators respect those limits",
    "opts": ["The BMS tells the PMS its max charge/discharge limits dynamically; the PMS ensures the VFDs and generators respect those limits", "The PMS physically turns off the battery cells", "The BMS starts the diesel engines directly", "The PMS ignores the BMS entirely"],
    "exp": "If the battery gets too hot, the BMS tells the ship 'I can only accept 500kW right now'. The PMS throttles the chargers down to comply.",
    "cat": "LI_ION",
    "id": "T23B_286"
  },
  {
    "q": "What is 'Pre-charge' in a high-voltage Lithium DC system?",
    "a": "A circuit that slowly charges the massive VFD capacitors through a resistor before closing the main contactor, preventing a massive spark and welded contacts",
    "opts": ["A circuit that slowly charges the massive VFD capacitors through a resistor before closing the main contactor, preventing a massive spark and welded contacts", "Warming up the battery cells", "Testing the voltage of the cells", "Charging the battery before the ship leaves port"],
    "exp": "Slamming 1000V DC from a lithium battery into empty VFD capacitors draws an infinite current spike. Pre-charge softens the blow.",
    "cat": "LI_ION",
    "id": "T23B_287"
  },
  {
    "q": "Are there any memory effects in modern Lithium-Ion batteries?",
    "a": "No, they have zero memory effect and can be freely charged and discharged at any SOC without penalty",
    "opts": ["Yes, they must be fully drained weekly", "Yes, if left in the cold", "No, they have zero memory effect and can be freely charged and discharged at any SOC without penalty", "Yes, but only above 80%"],
    "exp": "Unlike old Ni-Cd batteries, 'micro-cycling' a lithium battery (e.g., 50% to 60% repeatedly) is actually highly beneficial to its lifespan.",
    "cat": "LI_ION",
    "id": "T23B_288"
  },
  {
    "q": "What is the function of the 'Burst Disc' or vent on a hard-cased Lithium-Ion prismatic/cylindrical cell?",
    "a": "It is a deliberate weak point designed to rupture and vent gas safely if pressure builds up, preventing the metal casing from turning into a shrapnel bomb",
    "opts": ["To release normal pressure during charging", "To allow top-up of liquid electrolyte", "To let cooling air inside the cell", "It is a deliberate weak point designed to rupture and vent gas safely if pressure builds up, preventing the metal casing from turning into a shrapnel bomb"],
    "exp": "If thermal runaway begins, the pressure must go somewhere. Venting releases the explosive gas, but prevents the steel casing from exploding violently.",
    "cat": "LI_ION",
    "id": "T23B_289"
  }
]);
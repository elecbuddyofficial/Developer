window.loadQuizzes("F19_Batteries", [

  /* ═══════════ LEAD ACID CONSTRUCTION ═══════════ */
  {
    "q": "In a lead acid cell, what is the active material of the positive plate?",
    "a": "Lead dioxide, PbO2",
    "opts": ["Lead dioxide, PbO2", "Sponge lead, Pb", "Lead sulphate, PbSO4", "Potassium hydroxide, KOH"],
    "exp": "The positive plate is dark brown lead dioxide, PbO2. The negative plate is grey sponge lead, Pb. Lead sulphate is what both plates convert to on discharge, not a starting material.",
    "cat": "CONST",
    "id": "F19_001"
  },
  {
    "q": "What is the active material of the negative plate in a lead acid cell?",
    "a": "Sponge lead, Pb",
    "opts": ["Sponge lead, Pb", "Lead dioxide, PbO2", "Cadmium hydroxide", "Nickel hydroxide"],
    "exp": "The negative plate is grey sponge lead, Pb, the reducing electrode. Lead dioxide is the positive plate material. Cadmium and nickel hydroxide belong to a Ni-Cd cell, not lead acid.",
    "cat": "CONST",
    "id": "F19_002"
  },
  {
    "q": "What is the nominal voltage of a single lead acid cell?",
    "a": "2.0 to 2.2 V",
    "opts": ["2.0 to 2.2 V", "1.2 to 1.5 V", "3.6 to 3.7 V", "6.0 V"],
    "exp": "A lead acid cell nominally develops 2.0 to 2.2 V, which is why a 12 V battery is six cells in series and a 24 V battery is twelve. 1.2 to 1.5 V is closer to a Ni-Cd or alkaline cell, and 3.6 to 3.7 V is typical of a lithium cell.",
    "cat": "CONST",
    "id": "F19_003"
  },
  {
    "q": "What is the function of the separators between plates in a lead acid battery?",
    "a": "To keep the plates from touching while still allowing ions to pass",
    "opts": [
      "To keep the plates from touching while still allowing ions to pass",
      "To store shed active material so it cannot short the plates",
      "To generate the initial voltage spike needed to start the reaction",
      "To cool the electrolyte during heavy discharge"
    ],
    "exp": "Thin, porous separators prevent the interleaved plates from short-circuiting while still passing ions between them. Collecting shed material is the job of the ribbed sediment space at the bottom of the container, not the separators.",
    "cat": "CONST",
    "id": "F19_004"
  },
  {
    "q": "What is the key difference between a vented lead acid cell and a valve-regulated (VRLA) cell?",
    "a": "VRLA cells are sealed and recombine most gas internally, venting only through a relief valve under abnormal conditions",
    "opts": [
      "VRLA cells are sealed and recombine most gas internally, venting only through a relief valve under abnormal conditions",
      "VRLA cells use potassium hydroxide instead of sulphuric acid",
      "Vented cells cannot be topped up, VRLA cells can",
      "VRLA cells do not use lead plates at all"
    ],
    "exp": "Vented cells have a removable vent plug per cell for topping up and normal gas escape. VRLA cells are sealed, recombine most of the gas internally, and only vent through a relief valve if something abnormal happens. Both still use lead plates and sulphuric acid electrolyte.",
    "cat": "CONST",
    "id": "F19_005"
  },

  /* ═══════════ CHEMISTRY ═══════════ */
  {
    "q": "During discharge, what do both the positive and negative plates of a lead acid cell convert to?",
    "a": "Lead sulphate, PbSO4",
    "opts": ["Lead sulphate, PbSO4", "Lead dioxide, PbO2", "Sponge lead, Pb", "Lead oxide, PbO"],
    "exp": "On discharge both plates react with the sulphuric acid and convert to the same pale compound, lead sulphate, PbSO4. This is why the plates become chemically more alike as discharge proceeds.",
    "cat": "CHEM",
    "id": "F19_006"
  },
  {
    "q": "Why does the voltage of a lead acid cell fall as it discharges?",
    "a": "Both plates become chemically more alike as they convert to lead sulphate, leaving less difference in oxidation state to drive current",
    "opts": [
      "Both plates become chemically more alike as they convert to lead sulphate, leaving less difference in oxidation state to drive current",
      "The plates physically shrink in size as the reaction proceeds",
      "The separators dissolve slightly, increasing internal resistance",
      "The cell temperature falls sharply during discharge"
    ],
    "exp": "As both plates convert to lead sulphate they become chemically similar, and it is the difference in oxidation state between the plates that drives the cell voltage. Less difference means less voltage. The separators and plate size are not part of this mechanism.",
    "cat": "CHEM",
    "id": "F19_007"
  },
  {
    "q": "What happens to the electrolyte concentration as a lead acid cell discharges?",
    "a": "It grows weaker, because sulphate ions leave the electrolyte and lock into the plates while water is produced",
    "opts": [
      "It grows weaker, because sulphate ions leave the electrolyte and lock into the plates while water is produced",
      "It grows stronger, because water is consumed and acid is released from the plates",
      "It stays exactly the same throughout discharge",
      "It grows weaker only in a Ni-Cd cell, not in lead acid"
    ],
    "exp": "On discharge, sulphate ions leave the acid and become locked into the plates as lead sulphate, while water is produced, so the acid becomes more dilute. On charge the reverse happens and the acid re-concentrates.",
    "cat": "CHEM",
    "id": "F19_008"
  },
  {
    "q": "Once a lead acid cell reaches full charge, what happens if charging current keeps being applied?",
    "a": "With no lead sulphate left to convert, the current electrolyses the water in the electrolyte instead",
    "opts": [
      "With no lead sulphate left to convert, the current electrolyses the water in the electrolyte instead",
      "The plates begin converting back to lead sulphate again",
      "The cell voltage falls back towards zero",
      "The current simply stops flowing on its own"
    ],
    "exp": "Once every trace of lead sulphate has been converted back to PbO2 and Pb, the charging current has nothing left to do at the plates, so it electrolyses the water in the electrolyte, producing hydrogen and oxygen gassing.",
    "cat": "CHEM",
    "id": "F19_009"
  },

  /* ═══════════ CHARGING AND GASSING ═══════════ */
  {
    "q": "During gassing on charge, which gas is produced at the negative plates?",
    "a": "Hydrogen",
    "opts": ["Hydrogen", "Oxygen", "Nitrogen", "Carbon dioxide"],
    "exp": "Electrolysis of the water in the electrolyte produces hydrogen at the negative plates and oxygen at the positive plates, the classic 2:1 volume ratio of water electrolysis.",
    "cat": "GAS",
    "id": "F19_010"
  },
  {
    "q": "In what volume ratio are hydrogen and oxygen produced during battery gassing?",
    "a": "2 to 1 (hydrogen to oxygen)",
    "opts": ["2 to 1 (hydrogen to oxygen)", "1 to 1", "1 to 2 (hydrogen to oxygen)", "4 to 1 (hydrogen to oxygen)"],
    "exp": "Water is H2O, so electrolysing it produces hydrogen and oxygen in the classic 2:1 volume ratio, hydrogen at the negative plates and oxygen at the positive.",
    "cat": "GAS",
    "id": "F19_011"
  },
  {
    "q": "Over what approximate range is a hydrogen/air mixture flammable by volume?",
    "a": "Roughly 4% to 75%",
    "opts": ["Roughly 4% to 75%", "Roughly 20% to 25%", "Roughly 50% to 55%", "Roughly 1% to 5%"],
    "exp": "Hydrogen/air mixtures are flammable across an unusually wide range, roughly 4% to 75% by volume, and ignite with very little energy. This wide range is exactly why battery room ventilation is treated so strictly.",
    "cat": "GAS",
    "id": "F19_012"
  },
  {
    "q": "Battery room ventilation is designed to hold hydrogen concentration to around what level?",
    "a": "Around 1% or less by volume",
    "opts": ["Around 1% or less by volume", "Around 10% by volume", "Around 25% by volume", "Around 50% by volume"],
    "exp": "Standards such as IEC 62485 design ventilation to keep hydrogen concentration around 1% or less, a wide margin under the roughly 4% lower explosive limit.",
    "cat": "GAS",
    "id": "F19_013"
  },
  {
    "q": "Why is hydrogen from a battery room especially dangerous if ventilation fails?",
    "a": "It ignites with very little energy and, being lighter than air, rises and pools at the deckhead with no escape path",
    "opts": [
      "It ignites with very little energy and, being lighter than air, rises and pools at the deckhead with no escape path",
      "It is heavier than air and pools at deck level where crew walk",
      "It is odourless and corrosive to steel structure",
      "It reacts violently with the acid electrolyte itself"
    ],
    "exp": "Hydrogen ignites with very little energy, such as a small spark or hot surface, and being much lighter than air it rises and accumulates at the deckhead of an enclosed space if there is no escape path. This combination is exactly why battery rooms require low-in/high-out ventilation.",
    "cat": "GAS",
    "id": "F19_014"
  },

  /* ═══════════ SPECIFIC GRAVITY ═══════════ */
  {
    "q": "What instrument is used to measure the specific gravity of a lead acid cell's electrolyte?",
    "a": "A hydrometer",
    "opts": ["A hydrometer", "A voltmeter", "A hygrometer", "A refractometer"],
    "exp": "Specific gravity is measured with a hydrometer, and is the standard way of checking a vented lead acid cell's state of charge without any electrical instrument.",
    "cat": "SG",
    "id": "F19_015"
  },
  {
    "q": "What is the typical specific gravity of a fully charged lead acid battery's electrolyte?",
    "a": "1.260 to 1.280",
    "opts": ["1.260 to 1.280", "1.120 to 1.150", "1.000 to 1.050", "1.400 to 1.450"],
    "exp": "A fully charged lead acid cell typically reads 1.260 to 1.280, varying by maker and climate. A fully discharged cell falls to roughly 1.120 to 1.150.",
    "cat": "SG",
    "id": "F19_016"
  },
  {
    "q": "Why is specific gravity checked cell by cell rather than once for the whole battery?",
    "a": "A low reading in one cell against the rest of the bank is often the first sign that cell is failing, before it shows on a simple voltage check",
    "opts": [
      "A low reading in one cell against the rest of the bank is often the first sign that cell is failing, before it shows on a simple voltage check",
      "Checking cell by cell is faster than checking the whole battery at once",
      "The hydrometer can only measure one cell before it needs recalibrating",
      "Whole-battery readings are not physically possible on a lead acid bank"
    ],
    "exp": "Readings taken cell by cell can reveal a single weak cell dragging down against the rest of the bank, often well before that failure would show up as a simple terminal voltage check on the whole battery.",
    "cat": "SG",
    "id": "F19_017"
  },
  {
    "q": "Why should specific gravity readings be temperature-corrected?",
    "a": "Hot acid is less dense than cold acid at the same state of charge",
    "opts": [
      "Hot acid is less dense than cold acid at the same state of charge",
      "The hydrometer float material expands when hot, giving a false high reading",
      "Cold electrolyte reacts differently with the lead plates",
      "Temperature correction is only needed for Ni-Cd batteries, not lead acid"
    ],
    "exp": "Hot acid is less dense than cold acid even at the same state of charge, so a raw reading would be misleading without correcting to a reference temperature, typically 15°C or 25°C depending on the maker's convention.",
    "cat": "SG",
    "id": "F19_018"
  },

  /* ═══════════ MAINTENANCE AND SAFETY ═══════════ */
  {
    "q": "When topping up a vented lead acid cell, what should be added?",
    "a": "Distilled or deionised water only, never acid",
    "opts": [
      "Distilled or deionised water only, never acid",
      "Fresh dilute sulphuric acid to match the original electrolyte",
      "Tap water, since minor impurities do not matter",
      "A mix of water and acid in equal parts"
    ],
    "exp": "Only water is lost to gassing, so cells are topped up with distilled or deionised water only, never acid. Adding acid would over-concentrate the electrolyte and damage the plates.",
    "cat": "MAINT",
    "id": "F19_019"
  },
  {
    "q": "What is the single most common cause of both sulphation and excess gassing or plate damage in a lead acid battery?",
    "a": "Incorrect float or trickle charger voltage for the battery type",
    "opts": [
      "Incorrect float or trickle charger voltage for the battery type",
      "Using distilled water instead of tap water for topping up",
      "Storing the battery in a cold compartment",
      "Cleaning the terminals too frequently"
    ],
    "exp": "The notes flag charger float/trickle voltage as the single most common cause of both sulphation (undercharging) and excess gassing or plate damage (overcharging). Getting this voltage right for the battery type is a core part of the maintenance checklist.",
    "cat": "MAINT",
    "id": "F19_020"
  },
  {
    "q": "Why is it important to keep the tops of battery cells and the battery box dry and free of acid film?",
    "a": "An acid film is slightly conductive and creates a slow discharge/corrosion path",
    "opts": [
      "An acid film is slightly conductive and creates a slow discharge/corrosion path",
      "Acid film increases the risk of the electrolyte freezing",
      "Acid film reduces the accuracy of specific gravity readings only",
      "Acid film has no real effect, it is purely a cosmetic issue"
    ],
    "exp": "A film of acid on cell tops or the box is slightly conductive, creating a slow discharge and corrosion path between terminals. It is a real functional problem, not just cosmetic.",
    "cat": "MAINT",
    "id": "F19_021"
  },
  {
    "q": "What is the correct ventilation air path for a battery room or box?",
    "a": "Air in low down and exhaust high up near the deckhead",
    "opts": [
      "Air in low down and exhaust high up near the deckhead",
      "Air in high up and exhaust low down near the deck",
      "Air in and out both at deck level",
      "Sealed with no active airflow required"
    ],
    "exp": "Because hydrogen is lighter than air and rises, ventilation is arranged air in low down and exhaust high up near the deckhead, so gas cannot accumulate even at the highest normal charging rate.",
    "cat": "MAINT",
    "id": "F19_022"
  },

  /* ═══════════ NI-CD ═══════════ */
  {
    "q": "What electrolyte is used in a nickel-cadmium (Ni-Cd) battery?",
    "a": "Potassium hydroxide, KOH",
    "opts": ["Potassium hydroxide, KOH", "Dilute sulphuric acid", "Lithium hexafluorophosphate", "Sodium chloride solution"],
    "exp": "Ni-Cd cells use potassium hydroxide (KOH) electrolyte. Unlike sulphuric acid in a lead acid cell, KOH does not combine with the active material, so its concentration barely changes with charge state.",
    "cat": "NICD",
    "id": "F19_023"
  },
  {
    "q": "Why is specific gravity useless as a state-of-charge indicator for a Ni-Cd cell?",
    "a": "The KOH electrolyte does not combine with the active material, so its concentration stays essentially constant across the charge cycle",
    "opts": [
      "The KOH electrolyte does not combine with the active material, so its concentration stays essentially constant across the charge cycle",
      "Ni-Cd cells do not use a liquid electrolyte at all",
      "Ni-Cd cells are always kept fully sealed, so the electrolyte cannot be sampled",
      "A hydrometer cannot physically fit into a Ni-Cd cell"
    ],
    "exp": "Because KOH does not participate in the reaction the way sulphuric acid does in a lead acid cell, its concentration barely changes with state of charge. That makes hydrometer readings meaningless, so Ni-Cd state of charge is judged by voltage or capacity instead.",
    "cat": "NICD",
    "id": "F19_024"
  },
  {
    "q": "Compared to lead acid, how does a Ni-Cd battery tolerate deep discharge, overcharge and cold conditions?",
    "a": "It tolerates all three significantly better than lead acid",
    "opts": [
      "It tolerates all three significantly better than lead acid",
      "It tolerates all three significantly worse than lead acid",
      "It tolerates cold well but is much worse with overcharge",
      "There is no meaningful difference between the two chemistries"
    ],
    "exp": "Ni-Cd is valued for starting duties, such as the emergency generator or lifeboat engine, precisely because it tolerates neglect, deep discharge, overcharge and cold far better than lead acid, at significantly higher cost.",
    "cat": "NICD",
    "id": "F19_025"
  },
  {
    "q": "Does a Ni-Cd battery still gas hydrogen and oxygen near full charge?",
    "a": "Yes, by the same water-electrolysis mechanism, so the same ventilation logic applies",
    "opts": [
      "Yes, by the same water-electrolysis mechanism, so the same ventilation logic applies",
      "No, Ni-Cd cells never produce any gas under any condition",
      "Only oxygen is produced, never hydrogen",
      "Only if the KOH electrolyte is contaminated with acid"
    ],
    "exp": "Even though the KOH electrolyte does not change concentration, the cell still gasses hydrogen and oxygen near full charge by the same water-electrolysis mechanism as lead acid, so a Ni-Cd battery room needs the same ventilation precautions.",
    "cat": "NICD",
    "id": "F19_026"
  },

  /* ═══════════ LITHIUM ═══════════ */
  {
    "q": "Which lithium chemistry is commonly used in marine applications, and why?",
    "a": "Lithium iron phosphate (LiFePO4), for its better thermal stability",
    "opts": [
      "Lithium iron phosphate (LiFePO4), for its better thermal stability",
      "Lithium cobalt oxide, for its lower cost",
      "Lithium titanate, because it needs no battery management system",
      "Lithium sulphur, for its higher voltage per cell"
    ],
    "exp": "LiFePO4 is favoured in marine use specifically for its better thermal stability compared to other lithium chemistries, which matters for UPS backup, emergency lighting packs and battery-propulsion systems.",
    "cat": "LI",
    "id": "F19_027"
  },
  {
    "q": "Roughly how does the energy density of lithium (LiFePO4) batteries compare to lead acid for the same weight?",
    "a": "Roughly 2 to 4 times higher",
    "opts": ["Roughly 2 to 4 times higher", "About the same", "Roughly 2 to 4 times lower", "Around 10 times higher"],
    "exp": "Lithium batteries offer high energy density, roughly 2 to 4 times that of lead acid for the same weight, which is why they are increasingly used where weight and space matter.",
    "cat": "LI",
    "id": "F19_028"
  },
  {
    "q": "Why is a battery management system (BMS) essentially mandatory for a lithium battery bank?",
    "a": "An unmonitored cell can be driven into overcharge or overtemperature and reach thermal runaway",
    "opts": [
      "An unmonitored cell can be driven into overcharge or overtemperature and reach thermal runaway",
      "Lithium cells cannot hold charge at all without active monitoring",
      "A BMS is required to make the cell voltage compatible with lead acid chargers",
      "Marine insurers require a BMS regardless of the actual risk"
    ],
    "exp": "A lithium bank needs individual cells monitored and balanced, because an unmonitored cell can be driven into overcharge or overtemperature and reach thermal runaway, a self-sustaining and very rapid heat release far harder to control than lead acid gassing.",
    "cat": "LI",
    "id": "F19_029"
  },
  {
    "q": "What is the more severe failure mode of a damaged or overcharged lithium battery, compared to a lead acid cell's gassing?",
    "a": "Thermal runaway",
    "opts": ["Thermal runaway", "Acid spillage", "Sulphation of the plates", "Excess trickle current"],
    "exp": "A lead acid cell's failure mode under abuse is gassing and possible acid spillage. A lithium cell can instead reach thermal runaway, a self-sustaining, very rapid heat release that is a more severe fire risk and harder to control.",
    "cat": "LI",
    "id": "F19_030"
  },

  /* ═══════════ SERIES/PARALLEL BANKS, Ah, C RATING ═══════════ */
  {
    "q": "Connecting battery cells in series has what effect on the bank?",
    "a": "Voltage adds up, but capacity in Ah stays unchanged",
    "opts": [
      "Voltage adds up, but capacity in Ah stays unchanged",
      "Capacity in Ah adds up, but voltage stays unchanged",
      "Both voltage and capacity add up",
      "Neither voltage nor capacity changes"
    ],
    "exp": "In series, n cells give n times the single-cell voltage, but capacity is still just one cell's worth. It is parallel connection that adds capacity while leaving voltage unchanged.",
    "cat": "BANKS",
    "id": "F19_031"
  },
  {
    "q": "Connecting battery cells in parallel has what effect on the bank?",
    "a": "Capacity in Ah adds up, but voltage stays at one cell's voltage",
    "opts": [
      "Capacity in Ah adds up, but voltage stays at one cell's voltage",
      "Voltage adds up, but capacity stays at one cell's worth",
      "Both voltage and capacity add up",
      "Neither voltage nor capacity changes"
    ],
    "exp": "In parallel, n cells give n times the single-cell Ah capacity while the voltage stays the same as a single cell. Series connection is the one that adds voltage instead.",
    "cat": "BANKS",
    "id": "F19_032"
  },
  {
    "q": "What is the risk of paralleling batteries that do not match in type, age and state of charge?",
    "a": "The stronger battery drives a circulating current into the weaker one",
    "opts": [
      "The stronger battery drives a circulating current into the weaker one",
      "The combined bank voltage becomes unstable and fluctuates",
      "The Ah capacity of the bank is reduced below any single battery",
      "The weaker battery prevents the stronger one from ever charging"
    ],
    "exp": "Mismatched batteries paralleled together do not share load evenly, and a strong battery paralleled with a weak one drives a circulating current into it, which is why paralleled banks should match in type, age and state of charge.",
    "cat": "BANKS",
    "id": "F19_033"
  },
  {
    "q": "What does a C rating of 1C mean for a 100 Ah battery?",
    "a": "A current of 100 A, which would nominally discharge the battery in one hour",
    "opts": [
      "A current of 100 A, which would nominally discharge the battery in one hour",
      "A current of 1 A, regardless of the battery's Ah rating",
      "A current of 100 A that the battery can sustain indefinitely",
      "A charge time of exactly one hour regardless of current"
    ],
    "exp": "The C rating expresses charge/discharge current as a multiple of rated capacity. 1C for a 100 Ah battery is 100 A, the current that would nominally discharge it in one hour. C/10 would be 10 A, and C/20 would be 5 A for the same battery.",
    "cat": "BANKS",
    "id": "F19_034"
  },
  {
    "q": "Why is battery capacity in Ah always quoted against a stated discharge rate, such as the 20-hour rate (C20)?",
    "a": "Because capacity falls at higher discharge rates, a relationship described by Peukert's law",
    "opts": [
      "Because capacity falls at higher discharge rates, a relationship described by Peukert's law",
      "Because the Ah rating changes with temperature but not with discharge rate",
      "Because manufacturers are required to quote the slowest possible rate by regulation",
      "Because Ah capacity is undefined at any rate other than 20 hours"
    ],
    "exp": "Capacity is not a fixed number independent of how fast you discharge it; it falls at higher discharge rates, a behaviour described by Peukert's relationship. Quoting a stated rate, commonly the 20-hour rate, makes the figure meaningful and comparable.",
    "cat": "BANKS",
    "id": "F19_035"
  },

  /* ═══════════ CHARGING METHODS ═══════════ */
  {
    "q": "What is the purpose of trickle charging?",
    "a": "A small continuous current that offsets self-discharge and holds full charge without significant gassing",
    "opts": [
      "A small continuous current that offsets self-discharge and holds full charge without significant gassing",
      "A high current applied briefly to recover from a heavy discharge",
      "A charger permanently in parallel supplying the load directly",
      "A charging method used only for lithium battery banks"
    ],
    "exp": "Trickle charging is a small continuous current that just offsets self-discharge, keeping a standby battery topped up without significant gassing. Boost charging is the higher, limited-time current used to recover from a heavy discharge.",
    "cat": "CHMTH",
    "id": "F19_036"
  },
  {
    "q": "When would boost charging typically be used?",
    "a": "To recover quickly after a heavy discharge, such as repeated engine cranking",
    "opts": [
      "To recover quickly after a heavy discharge, such as repeated engine cranking",
      "As the permanent, everyday charging arrangement for standby batteries",
      "Only when a battery has been left completely disconnected for months",
      "As a continuous low-current method to prevent self-discharge"
    ],
    "exp": "Boost charging applies a higher current for a limited time to recharge quickly, typically after a heavy discharge such as repeated cranking. The everyday, permanent arrangement for standby batteries is float charging, not boost.",
    "cat": "CHMTH",
    "id": "F19_037"
  },
  {
    "q": "In float charging, how is the charger connected relative to the battery and the load?",
    "a": "Permanently in parallel with both the battery and the load",
    "opts": [
      "Permanently in parallel with both the battery and the load",
      "In series with the battery, feeding the load only through the battery",
      "Connected to the battery only, switched onto the load separately when needed",
      "Connected only during scheduled charging periods each day"
    ],
    "exp": "In float charging the charger is permanently connected in parallel with both the battery and the load. It supplies the load itself day to day while keeping the battery ready to take over instantly.",
    "cat": "CHMTH",
    "id": "F19_038"
  },
  {
    "q": "Why does float charging allow a standby battery to take over a load with no switching delay?",
    "a": "The battery is already connected across the load the whole time, so nothing has to switch when the charger fails",
    "opts": [
      "The battery is already connected across the load the whole time, so nothing has to switch when the charger fails",
      "A fast static switch detects the failure and reconnects the battery within milliseconds",
      "The battery voltage is deliberately kept higher than the charger voltage at all times",
      "Float charging uses a special relay that pre-empts charger failure before it happens"
    ],
    "exp": "In float charging the battery sits fully charged in parallel with the load the whole time, so when the charger or mains supply is interrupted it simply takes over, since it was already connected across the load. No switching is involved at all.",
    "cat": "CHMTH",
    "id": "F19_039"
  },

  /* ═══════════ SOLAS EMERGENCY BATTERY ═══════════ */
  {
    "q": "In outline, what is the transitional source of emergency power on main power failure, and for how long must it carry the load without recharging?",
    "a": "Normally the emergency battery, for at least 30 minutes",
    "opts": [
      "Normally the emergency battery, for at least 30 minutes",
      "Normally the emergency generator, for at least 30 minutes",
      "Normally the emergency battery, for at least 18 hours",
      "Normally a shore supply connection, for at least 45 seconds"
    ],
    "exp": "On blackout, the transitional source, normally the emergency battery, takes over immediately and automatically, carrying emergency lighting, navigation lights, fire detection/alarms and internal communications without recharging for at least 30 minutes.",
    "cat": "SOLAS",
    "id": "F19_040"
  },
  {
    "q": "Roughly how quickly is the emergency generator required to auto-start and be supplying the emergency board?",
    "a": "Commonly cited as around 45 seconds",
    "opts": ["Commonly cited as around 45 seconds", "Commonly cited as around 5 minutes", "Commonly cited as around 30 minutes", "Commonly cited as around 18 hours"],
    "exp": "The emergency generator is required to start automatically and be up and supplying the board within a short time, commonly cited as around 45 seconds, taking over from the transitional battery.",
    "cat": "SOLAS",
    "id": "F19_041"
  },
  {
    "q": "During the transitional battery period, roughly within what margin of nominal must voltage be held?",
    "a": "Roughly within 12%",
    "opts": ["Roughly within 12%", "Roughly within 1%", "Roughly within 50%", "Voltage is not regulated during this period"],
    "exp": "During the transitional period the emergency battery must hold voltage within roughly 12% of nominal throughout, so connected emergency lighting, alarms and communications continue to function correctly.",
    "cat": "SOLAS",
    "id": "F19_042"
  },
  {
    "q": "Regarding the emergency generator's endurance figures (commonly cited as around 18 hours on a cargo ship, 36 hours on a passenger ship), how should these be treated?",
    "a": "As commonly taught benchmarks that vary with ship type, not as a substitute for checking current SOLAS text and the vessel's approved documentation",
    "opts": [
      "As commonly taught benchmarks that vary with ship type, not as a substitute for checking current SOLAS text and the vessel's approved documentation",
      "As fixed, universal figures that apply identically to every ship regardless of type",
      "As figures that only apply to the transitional battery, not the generator",
      "As figures that were replaced entirely by the 30-minute and 45-second figures"
    ],
    "exp": "Unlike the more firmly and consistently cited 30-minute transitional battery duration and roughly 45-second auto-start, the 18/36 hour generator endurance figures and exactly which load categories run the full period vary with ship type. They should be treated as the commonly taught benchmark, not a substitute for checking current SOLAS text.",
    "cat": "SOLAS",
    "id": "F19_043"
  },

  /* ═══════════ UPS ═══════════ */
  {
    "q": "In an offline (standby) UPS, how is the load normally fed?",
    "a": "Directly from raw mains, with the battery and inverter idle",
    "opts": [
      "Directly from raw mains, with the battery and inverter idle",
      "Continuously through the rectifier, DC link and inverter",
      "Directly from the battery at all times",
      "Alternately from mains and battery every few seconds"
    ],
    "exp": "In an offline UPS the load is fed directly from raw mains under normal conditions, with the battery and inverter sitting idle until a static switch trips onto them on mains failure.",
    "cat": "UPS",
    "id": "F19_044"
  },
  {
    "q": "Roughly what transfer time does an offline UPS have when mains fails?",
    "a": "A few milliseconds",
    "opts": ["A few milliseconds", "Zero, there is no transfer at all", "Several seconds", "About 45 seconds"],
    "exp": "An offline UPS uses a static switch to trip the load onto the inverter/battery on mains failure, a transfer that takes a few milliseconds. An online UPS is the type with zero transfer time, since the inverter is already running from the battery.",
    "cat": "UPS",
    "id": "F19_045"
  },
  {
    "q": "In an online (double-conversion) UPS, what is the normal power path to the load?",
    "a": "Mains through a rectifier to a DC link/battery, then through an inverter to the load, continuously",
    "opts": [
      "Mains through a rectifier to a DC link/battery, then through an inverter to the load, continuously",
      "Mains directly to the load, with the battery only on standby",
      "Battery directly to the load, recharged periodically from mains",
      "Mains to the load through a simple transformer, with no rectifier stage"
    ],
    "exp": "An online UPS continuously converts mains through a rectifier to a DC link (backed by the battery) and then through an inverter to the load. The load always runs off the inverter, never directly off raw mains.",
    "cat": "UPS",
    "id": "F19_046"
  },
  {
    "q": "Why does an online UPS have zero transfer time on mains failure?",
    "a": "The battery was already feeding the inverter continuously, so nothing has to switch",
    "opts": [
      "The battery was already feeding the inverter continuously, so nothing has to switch",
      "It uses a static switch that is faster than an offline UPS's switch",
      "It has two batteries so one can take over instantly for the other",
      "Mains failure is detected before it actually happens"
    ],
    "exp": "Because the load is always running off the inverter, and the inverter was always being fed from the DC link/battery, mains failure simply means the battery keeps that DC link fed. Nothing has to switch, so transfer time is zero.",
    "cat": "UPS",
    "id": "F19_047"
  },
  {
    "q": "Why is an online UPS typically fitted ahead of navigation and GMDSS radio equipment rather than an offline UPS?",
    "a": "Both interruption and supply quality matter, and online gives zero transfer time plus a continuously clean, regulated output",
    "opts": [
      "Both interruption and supply quality matter, and online gives zero transfer time plus a continuously clean, regulated output",
      "Online UPS units are cheaper and simpler to install than offline units",
      "Offline UPS units cannot be used with AC loads at all",
      "GMDSS equipment specifically requires a few milliseconds of transfer delay"
    ],
    "exp": "Navigation and GMDSS equipment is intolerant of both interruption and poor supply quality. Online UPS gives zero transfer time and a continuously clean, regulated sine wave isolated from mains disturbances, at higher cost and running loss than offline.",
    "cat": "UPS",
    "id": "F19_048"
  },

  /* ═══════════ LIGHTING: INCANDESCENT ═══════════ */
  {
    "q": "How does an incandescent lamp produce light?",
    "a": "A tungsten filament is heated by current until it glows white hot",
    "opts": [
      "A tungsten filament is heated by current until it glows white hot",
      "Current arcs through mercury vapour, producing ultraviolet light",
      "Electrons and holes recombine at a semiconductor junction",
      "A high-pressure gas discharge ionises within a sealed tube"
    ],
    "exp": "An incandescent lamp works by heating a tungsten filament with current until it glows white hot, incandescence. The other mechanisms describe fluorescent/discharge lamps and LEDs, not incandescent bulbs.",
    "cat": "INCAND",
    "id": "F19_049"
  },
  {
    "q": "What is the approximate efficacy of an incandescent lamp?",
    "a": "Roughly 10 to 17 lumens per watt",
    "opts": ["Roughly 10 to 17 lumens per watt", "Roughly 40 to 100 lumens per watt", "Roughly 100+ lumens per watt", "Roughly 200 lumens per watt"],
    "exp": "Incandescent lamps are very inefficient, with most input energy leaving as heat rather than light, giving a low efficacy of roughly 10 to 17 lumens per watt. Fluorescent and LED both do considerably better.",
    "cat": "INCAND",
    "id": "F19_050"
  },
  {
    "q": "What is the typical service life of an incandescent lamp filament?",
    "a": "Commonly around 1,000 hours",
    "opts": ["Commonly around 1,000 hours", "Commonly around 10,000 hours", "Commonly around 25,000 hours", "Commonly around 50,000 hours"],
    "exp": "An incandescent filament has a short life, commonly around 1,000 hours, because it slowly evaporates and eventually breaks. Fluorescent tubes last roughly 7,000 to 15,000 hours and LEDs 25,000 to 50,000+ hours.",
    "cat": "INCAND",
    "id": "F19_051"
  },

  /* ═══════════ LIGHTING: FLUORESCENT ═══════════ */
  {
    "q": "How does a fluorescent tube produce visible light?",
    "a": "Current arcing through mercury vapour generates ultraviolet light, which the phosphor coating absorbs and re-emits as visible light",
    "opts": [
      "Current arcing through mercury vapour generates ultraviolet light, which the phosphor coating absorbs and re-emits as visible light",
      "A tungsten filament heats until it glows white hot",
      "Electrons and holes recombine directly at a semiconductor junction",
      "A high-pressure sodium arc emits visible light directly with no coating involved"
    ],
    "exp": "A fluorescent tube is a low-pressure discharge lamp: current arcing through mercury vapour generates ultraviolet light, which the phosphor coating inside the tube absorbs and re-emits as visible light.",
    "cat": "FLUOR",
    "id": "F19_052"
  },
  {
    "q": "What two jobs does the choke (ballast) perform in a fluorescent fitting?",
    "a": "It limits the running current to a safe value, and its collapsing magnetic field generates the high-voltage spike that strikes the tube",
    "opts": [
      "It limits the running current to a safe value, and its collapsing magnetic field generates the high-voltage spike that strikes the tube",
      "It preheats the filaments and then supplies mains voltage directly to the tube",
      "It converts the AC supply to DC and filters out ripple",
      "It only limits current; the striking voltage is generated elsewhere"
    ],
    "exp": "The choke, a large iron-cored inductor in series with the tube, limits running current against the tube's negative resistance characteristic, and its magnetic field, built up then suddenly collapsed, generates the high-voltage spike that strikes the arc.",
    "cat": "FLUOR",
    "id": "F19_053"
  },
  {
    "q": "Why does an unrestricted fluorescent tube need a ballast to limit current once the arc has struck?",
    "a": "The tube has a negative resistance characteristic, so resistance falls as current rises and an unrestricted tube would draw runaway current",
    "opts": [
      "The tube has a negative resistance characteristic, so resistance falls as current rises and an unrestricted tube would draw runaway current",
      "The tube's resistance rises sharply with current, choking off its own supply naturally",
      "Mains voltage alone is too low to sustain the arc without amplification",
      "The starter alone is enough to protect the tube without any ballast"
    ],
    "exp": "Once struck, a fluorescent tube has a negative resistance characteristic: resistance falls as current rises. Left unrestricted this would cause runaway current and destroy the tube, which is exactly what the ballast's current-limiting impedance prevents.",
    "cat": "FLUOR",
    "id": "F19_054"
  },
  {
    "q": "How does the starter in a fluorescent fitting eventually produce the voltage spike that strikes the tube?",
    "a": "It shorts to preheat the filaments via the choke, then opens suddenly, and that sudden interruption through the choke releases its stored energy as a voltage spike",
    "opts": [
      "It shorts to preheat the filaments via the choke, then opens suddenly, and that sudden interruption through the choke releases its stored energy as a voltage spike",
      "It generates the striking voltage directly using its own internal transformer",
      "It stays permanently closed once the tube is running to hold the arc steady",
      "It applies full mains voltage directly across the tube with no involvement from the choke"
    ],
    "exp": "The starter's bimetallic contact closes to preheat the filaments through the choke, then springs open again once the glow discharge inside it stops. That sudden interruption of current through the choke is what releases its stored magnetic energy as the striking spike.",
    "cat": "FLUOR",
    "id": "F19_055"
  },
  {
    "q": "What is the approximate efficacy and typical life of a fluorescent tube?",
    "a": "Roughly 40 to 100 lumens per watt, life commonly 7,000 to 15,000 hours",
    "opts": [
      "Roughly 40 to 100 lumens per watt, life commonly 7,000 to 15,000 hours",
      "Roughly 10 to 17 lumens per watt, life commonly 1,000 hours",
      "Roughly 100+ lumens per watt, life commonly 25,000 to 50,000+ hours",
      "Roughly 40 to 100 lumens per watt, life commonly 500 hours"
    ],
    "exp": "Fluorescent efficacy is much better than incandescent, typically 40 to 100 lumens per watt, with life commonly 7,000 to 15,000 hours, though the ballast and starter are extra failure points and the tube dims and shifts colour with age.",
    "cat": "FLUOR",
    "id": "F19_056"
  },

  /* ═══════════ LIGHTING: HID ═══════════ */
  {
    "q": "Which of the following is an example of an HID (High Intensity Discharge) lamp type?",
    "a": "Metal halide",
    "opts": ["Metal halide", "Tungsten filament", "Standard LED", "Halogen incandescent"],
    "exp": "HID lamps include mercury vapour, metal halide, and high/low pressure sodium types, all working on the discharge principle at much higher pressure and power than a fluorescent tube.",
    "cat": "HID",
    "id": "F19_057"
  },
  {
    "q": "Why do HID lamps need several minutes to reach full brightness after switching on?",
    "a": "They require a warm-up period to reach full brightness, and a cooling period before they can restrike after being switched off",
    "opts": [
      "They require a warm-up period to reach full brightness, and a cooling period before they can restrike after being switched off",
      "They run on DC and must first be rectified from the AC supply",
      "Their ballast takes several minutes to preheat before delivering current",
      "They use the same starter mechanism as a fluorescent tube, which is slower at high power"
    ],
    "exp": "HID lamps need a warm-up of several minutes to reach full brightness, and also need a cooling period before they can restrike after being switched off, unlike fluorescent or LED fittings which restart essentially immediately.",
    "cat": "HID",
    "id": "F19_058"
  },
  {
    "q": "Why did HID lamps become the standard choice for deck floodlighting and cargo area lighting?",
    "a": "Their high output for a given fitting size suited wide-area applications needing a lot of light from one fitting",
    "opts": [
      "Their high output for a given fitting size suited wide-area applications needing a lot of light from one fitting",
      "They require no ballast, unlike fluorescent fittings",
      "They have the longest service life of any lighting type",
      "They start instantly with no warm-up delay, unlike LED"
    ],
    "exp": "HID lamps deliver high output for a given fitting size, which made them the standard choice for wide-area applications like deck floodlighting and cargo area lighting that need a lot of light from one fitting. They still need a ballast and have a warm-up delay, unlike LED.",
    "cat": "HID",
    "id": "F19_059"
  },

  /* ═══════════ LIGHTING: LED ═══════════ */
  {
    "q": "How does an LED produce light?",
    "a": "Forward current across a semiconductor p-n junction causes electrons and holes to recombine, releasing energy as photons",
    "opts": [
      "Forward current across a semiconductor p-n junction causes electrons and holes to recombine, releasing energy as photons",
      "A tungsten filament is heated until it glows",
      "Current arcs through a low-pressure gas, producing ultraviolet light absorbed by a phosphor",
      "A high-pressure discharge ionises a sealed gas envelope"
    ],
    "exp": "An LED produces light directly from a semiconductor p-n junction: forward current causes electrons and holes to recombine, releasing energy as photons, a process called electroluminescence. No filament, gas discharge, ballast or starter is required for the basic principle.",
    "cat": "LED",
    "id": "F19_060"
  },
  {
    "q": "Why do many white LEDs use a phosphor coating over a blue die?",
    "a": "To broaden the spectrum, since the light generation itself is otherwise a narrow-band solid-state process",
    "opts": [
      "To broaden the spectrum, since the light generation itself is otherwise a narrow-band solid-state process",
      "To limit the current through the LED and prevent runaway",
      "To generate the striking voltage needed to switch the LED on",
      "To convert the LED's AC supply into usable DC"
    ],
    "exp": "White LEDs commonly use a phosphor coating over a blue die to broaden the spectrum into a fuller white light. The light generation itself remains solid-state electroluminescence, not a gas discharge needing a ballast or starter.",
    "cat": "LED",
    "id": "F19_061"
  },
  {
    "q": "Which of the following does a basic LED NOT require, unlike fluorescent or HID lighting?",
    "a": "A ballast or starter",
    "opts": ["A ballast or starter", "An electrical power supply", "A housing or fitting", "Any form of current control"],
    "exp": "The basic LED light-generation principle requires no filament, gas discharge, ballast or starter, unlike fluorescent (choke and starter) or HID (ballast and warm-up). It still needs an electrical supply, current control circuitry and a fitting, of course.",
    "cat": "LED",
    "id": "F19_062"
  },

  /* ═══════════ EMERGENCY AND ESCAPE LIGHTING ═══════════ */
  {
    "q": "What is the specific purpose of low-location lighting (LLL) on passenger ships?",
    "a": "Fire smoke collects at the deckhead first, so a low-mounted lighting or photoluminescent strip stays visible along escape routes when normal-height fittings are obscured",
    "opts": [
      "Fire smoke collects at the deckhead first, so a low-mounted lighting or photoluminescent strip stays visible along escape routes when normal-height fittings are obscured",
      "LLL is simply a cheaper alternative to standard emergency lighting fittings",
      "LLL is required only in machinery spaces, not along escape routes",
      "LLL replaces the need for a transitional emergency battery"
    ],
    "exp": "Because fire smoke collects at the deckhead first, normal-height emergency lighting can be obscured long before floor-level marking is affected. LLL is a low-mounted, separate layer of lighting or photoluminescent strip specifically to remain visible along escape routes in that scenario.",
    "cat": "EMLIGHT",
    "id": "F19_063"
  },
  {
    "q": "What is emergency lighting fed from, and what backs it up in sequence?",
    "a": "The emergency switchboard, backed by the transitional battery and then the emergency generator",
    "opts": [
      "The emergency switchboard, backed by the transitional battery and then the emergency generator",
      "The main switchboard only, with no separate backup",
      "A dedicated LED-only circuit isolated from all other ship power",
      "The main generator, backed directly by the LLL strips"
    ],
    "exp": "Emergency lighting is fed from the emergency switchboard, itself backed first by the transitional battery and then by the emergency generator, illuminating escape routes, muster and embarkation stations, machinery spaces and the steering gear compartment.",
    "cat": "EMLIGHT",
    "id": "F19_064"
  }

]);

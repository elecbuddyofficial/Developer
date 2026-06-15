window.loadQuizzes("T10_ICCP", [
  {
    "q": "What is the fundamental working principle of ICCP?",
    "a": "External DC source makes hull cathodic by supplying electrons - prevents anodic corrosion dissolution",
    "opts": [
      "High-voltage AC field repels corrosive ions in seawater",
      "External DC source makes hull cathodic by supplying electrons - prevents anodic corrosion dissolution",
      "Reactive zinc blocks dissolve sacrificially to protect hull",
      "Copper ions injected into seawater prevent biological attack"
    ],
    "exp": "ICCP supplies DC current from inert anodes through seawater to the hull, making the hull cathodic. A cathodic surface cannot corrode (corrosion = anodic dissolution). Not AC, not sacrificial anodes, not biological protection.",
    "cat": "ICCP",
    "id": "T10I_001"
  },
  {
    "q": "What is the target hull protection potential with an Ag/AgCl reference electrode?",
    "a": "-850 mV",
    "opts": [
      "-800 mV",
      "-850 mV",
      "-1100 mV",
      "+222 mV"
    ],
    "exp": "-850 mV = optimal setpoint. -800 mV = absolute minimum (below this = corrosion). -1100 mV = over-protection limit. +222 mV = the Ag/AgCl electrode's own reference potential vs SHE, not the hull setpoint.",
    "cat": "ICCP",
    "id": "T10I_002"
  },
  {
    "q": "What is the minimum hull protection potential per NACE/DNV criteria?",
    "a": "-800 mV (vs Ag/AgCl)",
    "opts": [
      "-750 mV",
      "-800 mV (vs Ag/AgCl)",
      "-850 mV",
      "-1050 mV"
    ],
    "exp": "-800 mV is the absolute minimum. Less negative (e.g. -750 mV) = under-protection = active corrosion. -850 mV is the target. -1100 mV = over-protection boundary.",
    "cat": "ICCP",
    "id": "T10I_003"
  },
  {
    "q": "What danger occurs if ICCP drives hull potential below -1100 mV?",
    "a": "Hydrogen evolution → paint cathodic disbondment + hydrogen embrittlement of high-strength steel",
    "opts": [
      "MMO/Ti anodes rapidly dissolve and disintegrate",
      "Reference electrode reverses polarity - system shuts down",
      "Hydrogen evolution → paint cathodic disbondment + hydrogen embrittlement of high-strength steel",
      "Stray AC currents interfere with echo sounder and Doppler log"
    ],
    "exp": "Over-protection: too many electrons at hull surface → H2 gas bubbles form at hull → strips paint (cathodic disbondment) → high-strength steel components (shaft, propeller) become brittle from hydrogen absorption. MMO anodes are inert and non-consumable.",
    "cat": "ICCP",
    "id": "T10I_004"
  },
  {
    "q": "What is the role and material of the ICCP reference electrode?",
    "a": "Ag/AgCl - measures hull-to-seawater electrochemical potential - feedback for automatic control",
    "opts": [
      "MMO/Ti - supplies protective DC current to seawater",
      "Pure Zinc - sacrificial backup if main ICCP fails",
      "Ag/AgCl - measures hull-to-seawater electrochemical potential - feedback for automatic control",
      "Platinum - measures seawater temperature and salinity"
    ],
    "exp": "The Ag/AgCl reference electrode is the sensing element. It measures the hull's potential and feeds this back to the controller which adjusts output to maintain -850 mV. The MMO/Ti anodes supply the current. Replace reference electrodes at every drydock (~2.5 yr).",
    "cat": "REF",
    "id": "T10I_005"
  },
  {
    "q": "Why must ICCP be switched OFF at berth alongside a jetty?",
    "a": "Stray current flows through mooring wires into jetty steel - exits into seawater causing rapid jetty corrosion",
    "opts": [
      "High DC voltage electrocutes dock workers on mooring wires",
      "Port authorities require minimum electrical load at berth",
      "Stray current flows through mooring wires into jetty steel - exits into seawater causing rapid jetty corrosion",
      "Marine growth accumulates faster with ICCP running in port"
    ],
    "exp": "ICCP stray current follows the path of least resistance through conductive mooring lines and shore connections into jetty piling. Where it exits the jetty metal back into seawater = anodic dissolution = rapid corrosion of dock infrastructure. 10A dissolves ~10 kg steel/year.",
    "cat": "ICCP",
    "id": "T10I_006"
  },
  {
    "q": "Sailing from Arctic to tropical waters - how does ICCP output voltage change?",
    "a": "Decreases - warm seawater has higher conductivity (lower resistance needs less voltage for same current)",
    "opts": [
      "Increases - warm seawater dilutes salt concentration",
      "Decreases - warm seawater has higher conductivity (lower resistance needs less voltage for same current)",
      "Drops to zero - corrosion stops naturally in warm water",
      "Reference electrode flips positive due to thermal inversion"
    ],
    "exp": "Warmer water = higher ion mobility = higher conductivity = lower resistance. By Ohm's law (V = I×R), same protection current through lower resistance needs less voltage. Controller automatically adjusts down in warm water, up in cold Arctic water.",
    "cat": "ICCP",
    "id": "T10I_007"
  },
  {
    "q": "Over 24 months after drydock, ICCP voltage and current steadily increase. Why?",
    "a": "Hull paint progressively abraded - more bare steel exposed - higher current needed to maintain -850 mV",
    "opts": [
      "Reference electrodes failing and sending erratic signals",
      "Seawater temperature has dropped significantly",
      "MMO anodes physically shrinking",
      "Hull paint progressively abraded - more bare steel exposed - higher current needed to maintain -850 mV"
    ],
    "exp": "Post-drydock fresh paint: >95% coverage, minimal bare steel, very low current needed. Over time, anchoring, tidal abrasion, ice contact wear the paint. More bare steel exposed = more area to protect = controller increases current/voltage to maintain setpoint.",
    "cat": "ICCP",
    "id": "T10I_008"
  },
  {
    "q": "Which critical ICCP maintenance must be performed at every drydock?",
    "a": "Replace Ag/AgCl reference electrodes - internal gel electrolyte depletes causing drift over ~2.5 years",
    "opts": [
      "Replace all MMO/Ti anodes - fully consumed after 5 years",
      "Refill controller transformer-rectifier oil tank",
      "Replace Ag/AgCl reference electrodes - internal gel electrolyte depletes causing drift over ~2.5 years",
      "Repaint MMO anodes with anti-fouling coating"
    ],
    "exp": "MMO/Ti anodes last 20-25 years. Reference electrodes have a gel electrolyte that depletes over ~2.5 years causing measurement drift. Must replace at every drydock. Without accurate reference signal, controller cannot maintain correct protection potential.",
    "cat": "REF",
    "id": "T10I_009"
  },
  {
    "q": "Why must ICCP be switched OFF before entering dry dock?",
    "a": "Without seawater electrolyte, energised anodes in air cause high-voltage arcing near flammable paint and solvents",
    "opts": [
      "Dry dock blocks crush anodes causing MSB short circuit",
      "ICCP drains emergency batteries while generators are off",
      "Without seawater electrolyte, energised anodes in air cause high-voltage arcing near flammable paint and solvents",
      "Reference electrodes shatter when exposed to dry air"
    ],
    "exp": "ICCP requires seawater as the ionic conductor. In air, normal current flow is impossible. High voltage at exposed anodes = arcing risk especially near freshly applied hull paint and solvent fumes = serious fire hazard. Mandatory to switch off before docking.",
    "cat": "ICCP",
    "id": "T10I_010"
  },
  {
    "q": "Fundamental difference between ICCP and MGPS?",
    "a": "ICCP prevents external hull corrosion; MGPS prevents biological fouling inside internal seawater pipes and sea chests",
    "opts": [
      "ICCP protects internal pipes; MGPS protects external hull from barnacles",
      "ICCP uses sacrificial copper anodes; MGPS uses permanent titanium anodes",
      "ICCP prevents external hull corrosion; MGPS prevents biological fouling inside internal seawater pipes and sea chests",
      "ICCP at 0.5V; MGPS at 50V to kill marine life"
    ],
    "exp": "ICCP = electrochemical corrosion protection of external steel hull. MGPS = prevents barnacles and algae blocking internal cooling pipes by releasing biocidal copper ions (~2 ppb). Completely different purposes. MGPS cannot substitute for ICCP.",
    "cat": "MGPS",
    "id": "T10I_011"
  },
  {
    "q": "What anode materials are used in MGPS?",
    "a": "Copper (releases Cu2+ biocidal ions ~2 ppb) + Aluminium (protective coating on internal pipes)",
    "opts": [
      "MMO/Ti - inert, same as ICCP anodes",
      "Silver/Silver Chloride - measures biological concentration",
      "Copper (releases Cu2+ biocidal ions ~2 ppb) + Aluminium (protective coating on internal pipes)",
      "Zinc and Magnesium - alter seawater pH"
    ],
    "exp": "MGPS copper anodes slowly dissolve releasing Cu2+ ions at ~2 ppb - lethal to marine larvae preventing attachment in sea chests and cooling pipes. Aluminium anodes co-installed to form a protective anti-fouling film on internal metalwork surfaces.",
    "cat": "MGPS",
    "id": "T10I_012"
  },
  {
    "q": "Primary function of the propeller shaft earthing brush?",
    "a": "Low-resistance bond shaft to hull (<1 Ω) - prevents bearing pitting from stray current arc discharge through oil film",
    "opts": [
      "Acts as reference electrode measuring propeller voltage",
      "Scrapes marine growth from intermediate shaft",
      "Low-resistance bond shaft to hull (<1 Ω) - prevents bearing pitting from stray current arc discharge through oil film",
      "Discharges lightning strikes from main engine to seawater"
    ],
    "exp": "Shaft insulated from hull by bearing oil film. Stray currents (from alternators, VFDs) build up voltage on shaft and arc through oil film to hull → bearing pitting and failure. Earthing brush provides a metallic path of <1 Ω, safely bypassing the oil film.",
    "cat": "BONDING",
    "id": "T10I_013"
  },
  {
    "q": "What distinguishes electrical bonding from electrical earthing?",
    "a": "Bonding equalises potential between metallic parts (prevents galvanic corrosion); earthing provides fault current path to trip protection",
    "opts": [
      "Bonding needs 440V supply; earthing is passive",
      "Bonding for HV only; earthing for LV only",
      "Bonding protects personnel from shock; earthing protects hull from rust",
      "Bonding equalises potential between metallic parts (prevents galvanic corrosion); earthing provides fault current path to trip protection"
    ],
    "exp": "Bonding (shaft brush, rudder jumper cable) ties metal parts to same potential - no potential difference = no galvanic corrosion current. Earthing (equipment frames to hull) creates a low-impedance path for fault currents to trip overcurrent protection. Two distinct functions.",
    "cat": "BONDING",
    "id": "T10I_014"
  },
  {
    "q": "ICCP panel shows high voltage but zero current - most likely fault?",
    "a": "Open circuit - severed cable, corroded junction box, or anode physically detached from hull",
    "opts": [
      "Short circuit - anode touching hull directly",
      "Ship sailing through highly conductive tropical water",
      "Open circuit - severed cable, corroded junction box, or anode physically detached from hull",
      "Reference electrode depleted sending 0 mV signal"
    ],
    "exp": "High voltage + zero current = open circuit. Controller pushes voltage but no current flows - circuit is broken. Check: deck cables continuity, junction box connections, anode mounting bolts. Short circuit = low voltage + high current. Reference failure = erratic readings not zero current.",
    "cat": "ICCP",
    "id": "T10I_015"
  },
  {
    "q": "Reference electrode fails at sea - what should ETO do?",
    "a": "Switch to manual mode - set conservative fixed current based on historical logbook values until drydock",
    "opts": [
      "Shut down entire ICCP to prevent hull explosion",
      "Send diver to replace electrode while underway",
      "Switch to manual mode - set conservative fixed current based on historical logbook values until drydock",
      "Bridge electrode terminals to force maximum voltage output"
    ],
    "exp": "Reference electrodes cannot be replaced at sea. Manual mode with historically proven conservative current values maintains basic protection. Bridging terminals would force uncontrolled maximum output - severe over-protection risk. Log the defect and report to superintendent.",
    "cat": "REF",
    "id": "T10I_016"
  },
  {
    "q": "Why are ICCP anodes mounted in HDPE or fibreglass insulating housings?",
    "a": "Electrically isolates anode from hull steel - forces current through seawater path instead of direct short-circuit",
    "opts": [
      "Focuses current downward into seabed",
      "Protects titanium substrate from ice and tugboats",
      "Electrically isolates anode from hull steel - forces current through seawater path instead of direct short-circuit",
      "Acts as sacrificial barrier dissolving instead of anode"
    ],
    "exp": "If MMO anode touches hull steel directly, current short-circuits through metal (zero resistance) - no current flows through seawater - no hull protection. HDPE housing forces all current to flow through seawater to reach the hull, providing effective protection.",
    "cat": "ICCP",
    "id": "T10I_017"
  },
  {
    "q": "How are ICCP impressed current anodes connected to the controller?",
    "a": "In parallel - failure of one anode/cable leaves all others operational",
    "opts": [
      "In series - same current through every anode for uniform distribution",
      "Sequential timer circuit pulsing each anode individually to save power",
      "In parallel - failure of one anode/cable leaves all others operational",
      "Directly to 440V MSB through simple fuses without controller"
    ],
    "exp": "Parallel connection = redundancy. If in series: one broken cable or failed anode breaks the entire circuit - total loss of ICCP protection. Parallel: individual anode failure only reduces overall capacity slightly, rest continue operating.",
    "cat": "ICCP",
    "id": "T10I_018"
  },
  {
    "q": "Why are sacrificial zinc anodes still found on rudders even with full ICCP?",
    "a": "Passive backup for areas electrically shadowed from ICCP anodes, and when ICCP is switched off in port",
    "opts": [
      "Required by SOLAS as grounding points during drydock welding",
      "Generate AC field scaring marine life from propeller",
      "Provide lubrication to rudder pintle bearings as they dissolve",
      "Passive backup for areas electrically shadowed from ICCP anodes, and when ICCP is switched off in port"
    ],
    "exp": "ICCP current distribution may be uneven around complex geometries (propeller boss, rudder). Sacrificial anodes provide supplementary passive protection in these shadow areas. Also provide automatic protection when ICCP is switched off at berth or during drydock.",
    "cat": "ICCP",
    "id": "T10I_019"
  },
  {
    "q": "What is the Ag/AgCl reference electrode potential vs Standard Hydrogen Electrode (SHE)?",
    "a": "+0.222 V",
    "opts": [
      "+0.316 V (Cu/CuSO4)",
      "0 V (SHE by definition)",
      "+0.222 V",
      "-0.76 V (Zinc)"
    ],
    "exp": "Ag/AgCl = +0.222 V vs SHE. Cu/CuSO4 = +0.316 V (used for pipeline/drydock). Zinc = -0.76 V. SHE = 0 V by definition. These values allow conversion between readings with different reference electrodes.",
    "cat": "REF",
    "id": "T10I_020"
  },
  {
    "q": "What is the typical effective impressed current density required to maintain cathodic protection on a painted ship's hull compared to bare steel?",
    "a": "5 to 10 mA/m² for a painted hull, and 10 to 50 mA/m² for bare steel",
    "opts": [
      "0.5 to 1 mA/m² for a painted hull, and 2 to 5 mA/m² for bare steel",
      "5 to 10 mA/m² for a painted hull, and 10 to 50 mA/m² for bare steel",
      "50 to 100 mA/m² for a painted hull, and exactly 50 mA/m² for bare steel",
      "100 to 150 mA/m² for a painted hull, and 500 to 1000 mA/m² for bare steel"
    ],
    "exp": "A freshly painted hull provides excellent insulation and only requires a current density of 5-10 mA/m² to cover microscopic holidays, whereas completely bare steel demands 10-50 mA/m² to maintain adequate cathodic protection.",
    "cat": "ICCP",
    "id": "T10I_021"
  },
  {
    "q": "What is the universally accepted target protection potential setpoint maintained by an ICCP controller to ensure the hull does not corrode?",
    "a": "-850 mV relative to an Ag/AgCl reference electrode",
    "opts": [
      "-1100 mV relative to an Ag/AgCl reference electrode",
      "+222 mV relative to an Ag/AgCl reference electrode",
      "-850 mV relative to an Ag/AgCl reference electrode",
      "-500 mV relative to an Ag/AgCl reference electrode"
    ],
    "exp": "The target setpoint for steel hull protection is -850 mV (Ag/AgCl), which keeps it safely below the minimum protection threshold of -800 mV while preventing the over-protection limit of -1100 mV.",
    "cat": "ICCP",
    "id": "T10I_022"
  },
  {
    "q": "What materials are typically used to manufacture the virtually non-consumable impressed current anodes in a modern marine ICCP system?",
    "a": "Mixed Metal Oxide coated on a Titanium substrate (MMO/Ti) or Platinised Titanium",
    "opts": [
      "Pure electrolytic Copper and Aluminium",
      "High-purity Aluminium-Zinc-Indium alloy",
      "Carbon steel heavily coated with silver chloride gel",
      "Mixed Metal Oxide coated on a Titanium substrate (MMO/Ti) or Platinised Titanium"
    ],
    "exp": "Modern ICCP systems utilize Titanium coated with Mixed Metal Oxide (MMO) or platinum because these materials are highly inert, only facilitating oxygen evolution rather than sacrificing their own mass, yielding a 20-25 year lifespan.",
    "cat": "ICCP",
    "id": "T10I_023"
  },
  {
    "q": "What are the normal operating output ranges of an ICCP transformer-rectifier unit providing active protection to a medium-sized cargo vessel?",
    "a": "6 to 25 Volts DC and 5 to 100 Amperes DC",
    "opts": [
      "0.5 to 4 Volts DC and 0.5 to 4 Amperes DC",
      "6 to 25 Volts DC and 5 to 100 Amperes DC",
      "50 to 100 Volts DC and 500 to 1000 Amperes DC",
      "110 to 220 Volts AC and 50 to 100 Amperes AC"
    ],
    "exp": "The ICCP controller converts the ship's AC supply to a highly regulated, safe low-voltage DC output, typically supplying between 6-25V DC and 5-100A depending on the exposed bare steel area and water conductivity.",
    "cat": "ICCP",
    "id": "T10I_024"
  },
  {
    "q": "When a zinc sacrificial anode is measured against a standard Ag/AgCl reference electrode in seawater, what is its approximate natural electrochemical potential?",
    "a": "-1.05V",
    "opts": [
      "-0.80V",
      "+0.30V",
      "-1.50V",
      "-1.05V"
    ],
    "exp": "A zinc anode naturally rests at an electrochemical potential of approximately -1.05V relative to an Ag/AgCl reference cell. This highly negative potential provides the necessary driving voltage to force the steel hull down to the protected -0.85V range.",
    "cat": "ICCP",
    "id": "T10I_025"
  },
  {
    "q": "At what consumption threshold do classification society rules typically require mandatory replacement of sacrificial zinc or aluminium anodes during a drydock survey?",
    "a": "When they are more than 50% to 60% consumed",
    "opts": [
      "When they reach 25% consumption",
      "When they are more than 50% to 60% consumed",
      "Only when they are 100% completely dissolved",
      "When they are exactly 10% consumed"
    ],
    "exp": "Sacrificial anodes must be visually inspected during every drydock and replaced if they are 50-60% consumed, ensuring sufficient mass remains to provide continuous galvanic protection until the next scheduled survey.",
    "cat": "SacAnodes",
    "id": "T10I_026"
  },
  {
    "q": "Why do Class rules and manufacturer guidelines dictate that the ICCP system must be switched OFF during transits through the Panama or Suez Canals?",
    "a": "To prevent aggressive stray current corrosion damage to the metal lock gates and canal infrastructure",
    "opts": [
      "To prevent aggressive stray current corrosion damage to the metal lock gates and canal infrastructure",
      "To prevent the high-voltage DC from interfering with the canal's electronic vessel tracking sensors",
      "Because the fresh water in the canals will cause the reference electrodes to permanently decalibrate",
      "Because the shallow water creates a short circuit that will immediately blow the ICCP controller fuses"
    ],
    "exp": "Operating ICCP in close proximity to massive steel structures like canal locks can cause the impressed DC current to stray through mooring lines or water. Just 10A of stray DC current can dissolve approximately 10 kg of infrastructure steel per year.",
    "cat": "ICCP",
    "id": "T10I_027"
  },
  {
    "q": "As a vessel sails from the cold Arctic Ocean into the warm tropical Indian Ocean, how will the ICCP panel parameters naturally adjust to maintain the -850mV setpoint?",
    "a": "The output voltage will decrease because warmer seawater has higher electrical conductivity",
    "opts": [
      "The output voltage will increase drastically to overcome the high resistance of warm water",
      "The output voltage will decrease because warmer seawater has higher electrical conductivity",
      "The reference electrode setpoint will automatically change from -850mV to -1100mV",
      "The output current will drop to zero because warm water requires no cathodic protection"
    ],
    "exp": "Seawater conductivity increases with temperature. Lower resistance in the ionic path means the controller requires less output voltage to drive the same protective current. Warm tropical water is more conductive than cold Arctic water.",
    "cat": "ICCP",
    "id": "T10I_028"
  },
  {
    "q": "By what mechanism does stray current from an active ICCP system cause rapid corrosion of a nearby steel jetty when a ship is berthed?",
    "a": "The DC current flows through unintended paths and causes accelerated anodic dissolution at the exact point where the current exits the jetty back into the seawater",
    "opts": [
      "The DC current flows through unintended paths and causes accelerated anodic dissolution at the exact point where the current exits the jetty back into the seawater",
      "The current causes massive hydrogen embrittlement which shatters the jetty's concrete foundations",
      "The ICCP anodes emit chlorine gas which travels through the water and chemically attacks the jetty piles",
      "The current reverses the polarity of the ship's hull, turning the entire jetty into a massive protective cathode"
    ],
    "exp": "Stray current corrosion occurs when the impressed current takes a low-resistance path such as a mooring wire or shore earth. Severe accelerated corrosion occurs precisely where the current leaves the foreign metal structure to re-enter the electrolyte.",
    "cat": "ICCP",
    "id": "T10I_029"
  },
  {
    "q": "If the ETO observes the ICCP panel outputting maximum voltage (25V) but exactly zero current in drydock, what is the diagnosis?",
    "a": "The system has been left ON; lack of seawater has broken the ionic circuit, creating an open circuit and arcing hazard",
    "opts": [
      "The system has been left ON; lack of seawater has broken the ionic circuit, creating an open circuit and arcing hazard",
      "The hull is experiencing severe over-protection and hydrogen evolution",
      "The reference electrodes have successfully and completely polarized the hull",
      "The transformer-rectifier has a short-circuited thyristor"
    ],
    "exp": "In drydock, the hull is out of the water, removing the electrolyte necessary to complete the circuit. Driving high voltage into air creates an open circuit with zero current, risking dangerous high-voltage arcing near fresh flammable hull paint. The system must be OFF in drydock.",
    "cat": "ICCP",
    "id": "T10I_030"
  },
  {
    "q": "Why will a ship's ICCP system generally output a noticeably higher voltage when operating in the Baltic Sea compared to the North Sea?",
    "a": "The Baltic Sea has significantly lower salinity (~8 ppt) than the North Sea (~35 ppt), resulting in higher seawater resistance",
    "opts": [
      "The Baltic Sea has higher salinity which coats the anodes in a highly resistive layer of salt crystals",
      "The Baltic Sea has significantly lower salinity (~8 ppt) than the North Sea (~35 ppt), resulting in higher seawater resistance",
      "The Baltic Sea contains high levels of dissolved oxygen which chemically neutralizes the ICCP current",
      "The North Sea's intense wave action mechanically assists the flow of electrons requiring less voltage"
    ],
    "exp": "Salinity directly dictates water conductivity. The brackish water of the Baltic Sea (~8 ppt) offers much higher electrical resistance than standard ocean water (~35 ppt), forcing the ICCP controller to raise the output voltage to push the necessary current.",
    "cat": "ICCP",
    "id": "T10I_031"
  },
  {
    "q": "What is the correct ranking from most noble (cathodic) to most active (anodic) in the galvanic series in seawater?",
    "a": "Copper (most noble), Mild Steel (intermediate), Zinc (most active)",
    "opts": [
      "Copper (most noble), Mild Steel (intermediate), Zinc (most active)",
      "Copper (most noble), Zinc (intermediate), Mild Steel (most active)",
      "Mild Steel (most noble), Zinc (intermediate), Copper (most active)",
      "Zinc (most noble), Copper (intermediate), Mild Steel (most active)"
    ],
    "exp": "Copper/bronze is highly noble at approximately +0.3V vs SHE, mild steel is intermediate at approximately -0.5V, and zinc is highly active at approximately -0.76V vs SHE. When coupled in an electrolyte, the most active metal (Zinc) will always sacrifice itself to protect the more noble metals.",
    "cat": "ICCP",
    "id": "T10I_032"
  },
  {
    "q": "What is the dual purpose of maintaining a low-resistance shaft earthing brush (less than 1 ohm) on a vessel equipped with ICCP?",
    "a": "To ensure the rotating bronze propeller receives ICCP protection current AND to safely shunt static spark discharges away from the main engine bearings",
    "opts": [
      "To ensure the rotating bronze propeller receives ICCP protection current AND to safely shunt static spark discharges away from the main engine bearings",
      "To step down the high voltage from the alternator to a safe level before it reaches the propeller",
      "To measure the exact RPM of the shaft for the bridge wrong-way alarm system",
      "To act as a sacrificial anode that dissolves instead of the bronze propeller blades"
    ],
    "exp": "The shaft earthing brush provides an equipotential bond less than 1 ohm that allows the ICCP current to reach and protect the bronze propeller, while simultaneously shunting electromagnetically generated static shaft currents directly to the hull, saving the bearings from spark pitting.",
    "cat": "ICCP",
    "id": "T10I_033"
  },
  {
    "q": "Over a 2.5-year period between drydocks, the ICCP panel average output current and voltage steadily increase. What does this indicate?",
    "a": "The hull's protective paint coating is progressively breaking down, exposing more bare steel that demands more protective current",
    "opts": [
      "The MMO/Titanium anodes are dissolving and rapidly losing their surface area",
      "The reference electrodes are failing and falsely commanding maximum output",
      "The local seawater temperature is steadily dropping, causing permanent damage to the transformer",
      "The hull's protective paint coating is progressively breaking down, exposing more bare steel that demands more protective current"
    ],
    "exp": "Fresh hull paint provides 95%+ insulation requiring very low ICCP current. As the paint naturally degrades, the exposed bare steel area (paint breakdown factor) increases, which directly increases the current demand to maintain the -850mV protection potential.",
    "cat": "ICCP",
    "id": "T10I_034"
  },
  {
    "q": "If the ICCP reference electrode fails and drives the hull potential deeply negative to -1150mV, what severe physical damage will this over-protection cause?",
    "a": "Hydrogen gas evolution at the hull surface, causing blistering and disbondment of hull paint and hydrogen embrittlement of high-strength steel",
    "opts": [
      "Immediate melting of the MMO/Titanium impressed current anodes",
      "Boiling of the surrounding seawater which creates a cavitation vacuum around the propeller",
      "Rapid dissolution of the ship's steel hull into iron oxide",
      "Hydrogen gas evolution at the hull surface, causing blistering and disbondment of hull paint and hydrogen embrittlement of high-strength steel"
    ],
    "exp": "Driving the hull potential more negative than -1100mV enters the over-protection zone. This triggers the electrolysis of water at the cathode, generating hydrogen gas bubbles that strip off paint and can embrittle heavily stressed steel components.",
    "cat": "ICCP",
    "id": "T10I_035"
  },
  {
    "q": "What is the primary cause of corrosion on a ship's steel hull in seawater?",
    "a": "The formation of a natural electrochemical galvanic cell",
    "opts": [
      "Friction from the water moving against the hull",
      "Marine organisms eating the steel",
      "The formation of a natural electrochemical galvanic cell",
      "The high pressure of deep ocean water"
    ],
    "exp": "A ship's hull forms a natural galvanic cell due to slight potential differences across the steel and the high conductivity of seawater acting as an electrolyte.",
    "cat": "SacAnodes",
    "id": "T10I_036"
  },
  {
    "q": "In a natural corrosion cell, what happens at the anodic area?",
    "a": "It has a more negative potential and corrodes (iron dissolves)",
    "opts": [
      "It has a more positive potential and is protected",
      "It attracts oxygen and forms a protective barrier",
      "It neutralizes the saltwater",
      "It has a more negative potential and corrodes (iron dissolves)"
    ],
    "exp": "The anode is the active area with a more negative potential where metal is sacrificed and dissolves into the solution.",
    "cat": "SacAnodes",
    "id": "T10I_037"
  },
  {
    "q": "In a natural corrosion cell, what happens at the cathodic area?",
    "a": "It has a more positive potential and is protected from corrosion",
    "opts": [
      "It has a more positive potential and is protected from corrosion",
      "It generates a high voltage shock",
      "It dissolves iron into the surrounding water",
      "It has a more negative potential and corrodes"
    ],
    "exp": "The cathode is the more noble (positive) area of the cell; it receives electrons and is protected from material loss.",
    "cat": "SacAnodes",
    "id": "T10I_038"
  },
  {
    "q": "What is the chemical reaction occurring at the anode during hull corrosion?",
    "a": "Fe → Fe²⁺ + 2e⁻",
    "opts": [
      "O₂ + 2H₂O + 4e⁻ → 4OH⁻",
      "Cu → Cu²⁺ + 2e⁻",
      "Fe → Fe²⁺ + 2e⁻",
      "2H⁺ + 2e⁻ → H₂"
    ],
    "exp": "At the anode, solid iron (Fe) gives up electrons and dissolves into the seawater as iron ions (Fe²⁺).",
    "cat": "SacAnodes",
    "id": "T10I_039"
  },
  {
    "q": "What is the chemical reaction occurring at the cathode during hull corrosion?",
    "a": "O₂ + 2H₂O + 4e⁻ → 4OH⁻",
    "opts": [
      "2H⁺ + 2e⁻ → H₂",
      "O₂ + 2H₂O + 4e⁻ → 4OH⁻",
      "Fe → Fe²⁺ + 2e⁻",
      "Al → Al³⁺ + 3e⁻"
    ],
    "exp": "At the cathode, dissolved oxygen and water consume the electrons produced by the anode, creating hydroxide ions.",
    "cat": "SacAnodes",
    "id": "T10I_040"
  },
  {
    "q": "What is the approximate electrical conductivity of seawater?",
    "a": "~50 mS/cm",
    "opts": [
      "~50 mS/cm",
      "~500 mS/cm",
      "~1000 mS/cm",
      "~5 mS/cm"
    ],
    "exp": "Seawater has an electrical conductivity of around 50 mS/cm (due to ~3.5% salt), making it an excellent electrolyte that accelerates corrosion.",
    "cat": "SacAnodes",
    "id": "T10I_041"
  },
  {
    "q": "How does temperature affect the natural corrosion rate of a ship's hull?",
    "a": "The corrosion rate doubles for every 10°C rise in temperature",
    "opts": [
      "The corrosion rate doubles for every 10°C rise in temperature",
      "Corrosion stops completely above 30°C",
      "The corrosion rate halves for every 10°C rise in temperature",
      "Temperature has no effect on corrosion"
    ],
    "exp": "Heat accelerates electrochemical reactions. Tropical waters are significantly more corrosive than Arctic waters.",
    "cat": "SacAnodes",
    "id": "T10I_042"
  },
  {
    "q": "What component provides the vast majority (~95%) of a ship's corrosion protection?",
    "a": "The hull paint coating",
    "opts": [
      "The ICCP system",
      "Sacrificial anodes",
      "The hull paint coating",
      "The shaft earthing brush"
    ],
    "exp": "Paint acts as a physical dielectric barrier, covering 95% of the hull. Cathodic protection covers the remaining 5% where paint is damaged or missing.",
    "cat": "SacAnodes",
    "id": "T10I_043"
  },
  {
    "q": "What is the role of dissolved oxygen in the natural corrosion process?",
    "a": "It drives the cathodic reaction; well-oxygenated surface waters are more corrosive",
    "opts": [
      "It drives the cathodic reaction; well-oxygenated surface waters are more corrosive",
      "It slows down corrosion by forming rust",
      "It breaks down the hull paint directly",
      "It neutralizes the saltwater electrolyte"
    ],
    "exp": "Oxygen reduction is the primary cathodic reaction. More dissolved oxygen means the corrosion cell can operate faster.",
    "cat": "SacAnodes",
    "id": "T10I_044"
  },
  {
    "q": "What is the basic principle of ANY cathodic protection system (Sacrificial or ICCP)?",
    "a": "Supplying electrons externally to force the entire hull to act as a cathode",
    "opts": [
      "Coating the hull with an insulating layer of plastic",
      "Making the hull act as a massive anode",
      "Supplying electrons externally to force the entire hull to act as a cathode",
      "Heating the hull to evaporate seawater"
    ],
    "exp": "By flooding the hull with electrons, the anodic dissolution reaction (loss of iron) is completely suppressed.",
    "cat": "SacAnodes",
    "id": "T10I_045"
  },
  {
    "q": "What materials are commonly used for sacrificial anodes on ships?",
    "a": "Zinc alloy or Aluminium alloy",
    "opts": [
      "Stainless steel and Cast iron",
      "Copper and Brass",
      "Zinc alloy or Aluminium alloy",
      "Titanium and Platinum"
    ],
    "exp": "Zinc and Aluminium (e.g., Al-Zn-In) are highly active metals that readily dissolve to protect the more noble steel hull.",
    "cat": "SacAnodes",
    "id": "T10I_046"
  },
  {
    "q": "Why is the sacrificial anode method considered a 'passive' system?",
    "a": "It requires no external power source or active controller to function",
    "opts": [
      "It uses very low voltages",
      "It requires no external power source or active controller to function",
      "It relies on the ship's AC generators",
      "It only works when the ship is stopped"
    ],
    "exp": "Sacrificial anodes rely purely on the natural galvanic potential difference between the anode metal and the steel hull.",
    "cat": "SacAnodes",
    "id": "T10I_047"
  },
  {
    "q": "What happens to a sacrificial anode over time?",
    "a": "It dissolves (is consumed) into the seawater",
    "opts": [
      "It dissolves (is consumed) into the seawater",
      "It transforms into pure titanium",
      "It absorbs oxygen and expands",
      "It becomes harder and stronger"
    ],
    "exp": "The anode sacrifices itself by corroding instead of the hull, losing mass until it must be replaced.",
    "cat": "SacAnodes",
    "id": "T10I_048"
  },
  {
    "q": "What potential range does a sacrificial anode system typically maintain on the hull?",
    "a": "–800 mV to –1000 mV (Ag/AgCl)",
    "opts": [
      "–800 mV to –1000 mV (Ag/AgCl)",
      "–1500 mV to –2000 mV",
      "+500 mV to +800 mV",
      "0 mV to –100 mV"
    ],
    "exp": "The natural galvanic voltage of Zinc/Aluminium is capable of pulling the hull potential down into this protective range.",
    "cat": "SacAnodes",
    "id": "T10I_049"
  },
  {
    "q": "How frequently are sacrificial anodes generally replaced?",
    "a": "Every dry dock interval (approx. 2.5 to 5 years)",
    "opts": [
      "Every dry dock interval (approx. 2.5 to 5 years)",
      "Every 6 months",
      "They never need replacement",
      "Every month"
    ],
    "exp": "Sacrificial anodes deplete over time. They are inspected in dry dock and replaced if heavily consumed.",
    "cat": "SacAnodes",
    "id": "T10I_050"
  },
  {
    "q": "When should a sacrificial anode be replaced during a dry dock inspection?",
    "a": "When it is 50–70% consumed",
    "opts": [
      "When it is 10% consumed",
      "When it is 50–70% consumed",
      "Only when it is 100% gone",
      "When it changes color to white"
    ],
    "exp": "Anodes that are more than 50-60% consumed will likely not last until the next scheduled dry dock and must be replaced.",
    "cat": "SacAnodes",
    "id": "T10I_051"
  },
  {
    "q": "What is a major limitation of a sacrificial anode system compared to ICCP?",
    "a": "It has no automatic control and its output cannot adjust to changing hull conditions",
    "opts": [
      "It only works in fresh water",
      "It has no automatic control and its output cannot adjust to changing hull conditions",
      "It causes hydrogen embrittlement constantly",
      "It requires a massive transformer"
    ],
    "exp": "The output of a sacrificial anode is fixed by its size and the seawater. ICCP actively adapts to paint loss and temperature.",
    "cat": "SacAnodes",
    "id": "T10I_052"
  },
  {
    "q": "In which application are sacrificial anodes strongly preferred over ICCP?",
    "a": "Small vessels and confined areas (like thruster tunnels) inaccessible to ICCP current",
    "opts": [
      "Very large crude carriers (VLCCs)",
      "Small vessels and confined areas (like thruster tunnels) inaccessible to ICCP current",
      "Vessels with massive AC power reserves",
      "Ships sailing exclusively in Arctic ice"
    ],
    "exp": "Sacrificial anodes are cheap, require no wiring, and can be placed in nooks and crannies where ICCP current paths cannot reach.",
    "cat": "SacAnodes",
    "id": "T10I_053"
  },
  {
    "q": "Why is the propeller highly susceptible to bimetallic galvanic corrosion?",
    "a": "It is made of bronze/brass (noble) while the hull is steel (active), creating a strong galvanic cell",
    "opts": [
      "It is made of bronze/brass (noble) while the hull is steel (active), creating a strong galvanic cell",
      "It spins very fast, creating friction",
      "It runs at high AC voltage",
      "It is not painted, attracting marine growth"
    ],
    "exp": "The dissimilar metals in direct electrical contact via the shaft create a massive galvanic cell, threatening the steel hull near the stern.",
    "cat": "SacAnodes",
    "id": "T10I_054"
  },
  {
    "q": "What happens if a sacrificial anode is accidentally painted over during dry dock?",
    "a": "It becomes electrically isolated from the seawater and stops providing protection",
    "opts": [
      "It generates hydrogen gas under the paint",
      "It becomes electrically isolated from the seawater and stops providing protection",
      "It lasts longer and works better",
      "It dissolves the paint instantly"
    ],
    "exp": "Paint is an insulator. If the anode surface is covered, the ionic current path is blocked, rendering the anode useless.",
    "cat": "SacAnodes",
    "id": "T10I_055"
  },
  {
    "q": "What is the typical cost profile of a sacrificial anode system?",
    "a": "Low capital cost initially, but high recurring costs for anode replacement",
    "opts": [
      "No cost at all",
      "High capital cost initially, zero recurring costs",
      "High electricity costs for operation",
      "Low capital cost initially, but high recurring costs for anode replacement"
    ],
    "exp": "Installing zinc blocks is cheap upfront, but buying and welding tons of new metal every dry dock adds up.",
    "cat": "SacAnodes",
    "id": "T10I_056"
  },
  {
    "q": "How does an ICCP system fundamentally differ from a sacrificial anode system?",
    "a": "ICCP uses an external power supply and inert anodes; sacrificial uses galvanic potential and consumable anodes",
    "opts": [
      "ICCP uses an external power supply and inert anodes; sacrificial uses galvanic potential and consumable anodes",
      "ICCP uses zinc; sacrificial uses titanium",
      "ICCP only works in port; sacrificial works at sea",
      "ICCP is passive; sacrificial is active"
    ],
    "exp": "ICCP forces current using ship's power through non-melting anodes. Sacrificial generates its own current by melting.",
    "cat": "SacAnodes",
    "id": "T10I_057"
  },
  {
    "q": "Are sacrificial anodes still used on ships that have a full ICCP system?",
    "a": "Yes, they are often used as supplementary protection in critical or shielded areas",
    "opts": [
      "No, they conflict and destroy the ICCP controller",
      "No, class rules forbid mixing both systems",
      "Yes, they are often used as supplementary protection in critical or shielded areas",
      "Yes, but only inside the engine room"
    ],
    "exp": "Rudders, propellers, and sea chests often have zinc/aluminium anodes to supplement ICCP, especially when ICCP is off in port.",
    "cat": "SacAnodes",
    "id": "T10I_058"
  },
  {
    "q": "In the context of the galvanic series, why does zinc protect steel?",
    "a": "Zinc is more negative (more active) than steel, so it forces the steel to be the cathode",
    "opts": [
      "Zinc is harder than steel",
      "Zinc is more negative (more active) than steel, so it forces the steel to be the cathode",
      "Zinc is more positive (more noble) than steel",
      "Zinc is an electrical insulator"
    ],
    "exp": "In the galvanic series, the more negative metal will always act as the anode and corrode, protecting the more positive metal.",
    "cat": "SacAnodes",
    "id": "T10I_059"
  },
  {
    "q": "Through what path do the electrons travel in a natural corrosion cell on a ship?",
    "a": "Through the metallic hull of the ship",
    "opts": [
      "Through the marine growth",
      "Through the air",
      "Through the seawater",
      "Through the metallic hull of the ship"
    ],
    "exp": "Electrons released at the anode travel through the conductive steel hull to reach the cathode.",
    "cat": "SacAnodes",
    "id": "T10I_060"
  },
  {
    "q": "Through what path do the ions travel in a natural corrosion cell on a ship?",
    "a": "Through the seawater electrolyte",
    "opts": [
      "Through the seawater electrolyte",
      "Through the ship's AC wiring",
      "Through the rubber seals",
      "Through the steel hull"
    ],
    "exp": "The circuit is completed by positively and negatively charged ions moving through the conductive saltwater.",
    "cat": "SacAnodes",
    "id": "T10I_061"
  },
  {
    "q": "How does 'mill scale' on steel plates affect corrosion?",
    "a": "It creates local potential differences on the surface, setting up micro-galvanic cells",
    "opts": [
      "It turns the seawater into fresh water",
      "It completely prevents corrosion",
      "It acts as a sacrificial anode",
      "It creates local potential differences on the surface, setting up micro-galvanic cells"
    ],
    "exp": "Mill scale, welds, and stress points have slightly different potentials than bare steel, initiating localized pitting.",
    "cat": "SacAnodes",
    "id": "T10I_062"
  },
  {
    "q": "Which of these is NOT a required component of a natural corrosion cell?",
    "a": "An external DC power supply",
    "opts": [
      "An external DC power supply",
      "An Electrolyte",
      "An Anode",
      "A Cathode"
    ],
    "exp": "Natural corrosion happens spontaneously without external power. ICCP introduces external power to stop it.",
    "cat": "SacAnodes",
    "id": "T10I_063"
  },
  {
    "q": "What does a sacrificial anode physically look like after 2 years at sea?",
    "a": "Pitted, reduced in size, and partially dissolved",
    "opts": [
      "Perfectly smooth and shiny",
      "Transformed into solid rust",
      "Pitted, reduced in size, and partially dissolved",
      "Covered in thick black soot"
    ],
    "exp": "The metal is literally dissolving into the ocean, so the block shrinks and becomes heavily pitted.",
    "cat": "SacAnodes",
    "id": "T10I_064"
  },
  {
    "q": "If a ship's hull coating (paint) was absolutely perfect and never degraded, would it need cathodic protection?",
    "a": "No, because the electrolyte would be completely isolated from the steel",
    "opts": [
      "No, because the electrolyte would be completely isolated from the steel",
      "No, because the paint acts as an anode",
      "Yes, because paint conducts electricity",
      "Yes, because oxygen permeates through solid paint"
    ],
    "exp": "Without an electrolyte contacting the metal, the corrosion cell cannot form. However, perfect paint is impossible in reality.",
    "cat": "SacAnodes",
    "id": "T10I_065"
  },
  {
    "q": "What does the ICCP controller mainly consist of?",
    "a": "A transformer-rectifier that converts AC to adjustable DC",
    "opts": [
      "A large battery bank",
      "A transformer-rectifier that converts AC to adjustable DC",
      "A set of high-voltage capacitors",
      "An AC frequency inverter"
    ],
    "exp": "The panel steps down the ship's 440V/220V AC and rectifies it to provide a smooth, controllable DC output.",
    "cat": "ICCP",
    "id": "T10I_066"
  },
  {
    "q": "What is the typical DC output voltage and current range of an ICCP controller?",
    "a": "0–50V DC and 0–100A",
    "opts": [
      "0–5V DC and 0–10A",
      "220V AC and 50A",
      "440V DC and 1000A",
      "0–50V DC and 0–100A"
    ],
    "exp": "Operating values are typically 6-25V and 5-100A depending on the ship's size and hull condition.",
    "cat": "ICCP",
    "id": "T10I_067"
  },
  {
    "q": "What material is commonly used for ICCP Impressed Current Anodes?",
    "a": "Mixed Metal Oxide on a Titanium substrate (MMO/Ti)",
    "opts": [
      "High-carbon steel",
      "Pure Zinc",
      "Aluminium-Indium alloy",
      "Mixed Metal Oxide on a Titanium substrate (MMO/Ti)"
    ],
    "exp": "MMO/Ti is highly conductive but extremely inert, allowing it to pass current without dissolving.",
    "cat": "ICCP",
    "id": "T10I_068"
  },
  {
    "q": "What is the lifespan of an MMO/Ti impressed current anode?",
    "a": "20–25 years (virtually non-consumable)",
    "opts": [
      "6 months",
      "5 years",
      "1-2 years",
      "20–25 years (virtually non-consumable)"
    ],
    "exp": "Unlike sacrificial anodes, ICCP anodes are designed to last the entire lifetime of the vessel.",
    "cat": "ICCP",
    "id": "T10I_069"
  },
  {
    "q": "How must ICCP anodes be mounted on the ship's hull?",
    "a": "Flush with the hull, but electrically isolated using a fibreglass or HDPE housing",
    "opts": [
      "Flush with the hull, but electrically isolated using a fibreglass or HDPE housing",
      "Welded directly to the bare steel",
      "Hanging loosely on wires from the deck",
      "Inside the engine room bilge"
    ],
    "exp": "If the anode touches the hull directly, it creates a dead short circuit, routing all current locally and providing no protection.",
    "cat": "ICCP",
    "id": "T10I_070"
  },
  {
    "q": "How are the impressed current anodes connected to the ICCP controller?",
    "a": "In parallel, to the positive DC terminal",
    "opts": [
      "In series, to the positive DC terminal",
      "In series, to the AC supply",
      "In parallel, to the positive DC terminal",
      "In parallel, to the negative DC terminal"
    ],
    "exp": "Anodes receive positive DC voltage. Parallel connection ensures if one cable breaks, the other anodes still function.",
    "cat": "ICCP",
    "id": "T10I_071"
  },
  {
    "q": "What is connected to the negative DC terminal of the ICCP controller?",
    "a": "The ship's steel hull",
    "opts": [
      "The ship's steel hull",
      "The shore power earth",
      "The MMO/Ti anodes",
      "The reference electrode"
    ],
    "exp": "Connecting the negative terminal to the hull floods it with electrons, turning the entire hull into a protected cathode.",
    "cat": "ICCP",
    "id": "T10I_072"
  },
  {
    "q": "How does the ICCP controller react if the hull potential reads –700 mV (under-protection)?",
    "a": "It automatically increases the DC output current",
    "opts": [
      "It automatically increases the DC output current",
      "It automatically decreases the DC output current",
      "It shuts down the system",
      "It sounds an over-protection alarm"
    ],
    "exp": "–700 mV is not negative enough to stop corrosion. The controller boosts current to drive the hull closer to the –850 mV setpoint.",
    "cat": "ICCP",
    "id": "T10I_073"
  },
  {
    "q": "How does the ICCP controller react if the hull potential reads –1000 mV (approaching over-protection)?",
    "a": "It automatically decreases the DC output current",
    "opts": [
      "It reverses the polarity of the hull",
      "It increases the AC input voltage",
      "It automatically increases the DC output current",
      "It automatically decreases the DC output current"
    ],
    "exp": "–1000 mV is more negative than the setpoint. The controller reduces output to prevent reaching the –1100 mV over-protection danger zone.",
    "cat": "ICCP",
    "id": "T10I_074"
  },
  {
    "q": "What happens to ICCP output voltage when a ship sails into warm, tropical waters?",
    "a": "It decreases, because warm water has higher conductivity (lower resistance)",
    "opts": [
      "It drops to zero",
      "It increases, because warm water causes more corrosion",
      "It remains exactly the same",
      "It decreases, because warm water has higher conductivity (lower resistance)"
    ],
    "exp": "Warm water conducts electricity better. By Ohm's law (V=IR), less voltage is needed to drive the same protective current through lower resistance.",
    "cat": "ICCP",
    "id": "T10I_075"
  },
  {
    "q": "What happens to ICCP output voltage when a ship sails into cold, Arctic waters?",
    "a": "It increases, because cold water has lower conductivity (higher resistance)",
    "opts": [
      "It increases, because cold water has lower conductivity (higher resistance)",
      "It decreases, because cold water conducts better",
      "It reverses polarity",
      "It shuts down completely"
    ],
    "exp": "Cold water is a poorer conductor. The controller must raise the voltage to push the required current through the higher resistance.",
    "cat": "ICCP",
    "id": "T10I_076"
  },
  {
    "q": "Why does the ICCP output voltage and current tend to gradually increase over a 6 to 12-month period?",
    "a": "The hull paint gradually deteriorates, exposing more bare steel that requires more current to protect",
    "opts": [
      "The anodes are dissolving",
      "The seawater is becoming saltier globally",
      "The hull paint gradually deteriorates, exposing more bare steel that requires more current to protect",
      "The controller transformer is wearing out"
    ],
    "exp": "As paint chips and wears away, the exposed bare steel area grows. The controller must supply more current to protect the larger area.",
    "cat": "ICCP",
    "id": "T10I_077"
  },
  {
    "q": "If the ICCP panel displays a high voltage but zero current output, what is the most likely fault?",
    "a": "An open circuit in the anode cable or junction box",
    "opts": [
      "A short circuit between anode and hull",
      "A failed reference electrode",
      "The hull is heavily over-protected",
      "An open circuit in the anode cable or junction box"
    ],
    "exp": "The controller is trying to drive current (high voltage) but the path is broken. Zero current means the circuit is physically open.",
    "cat": "ICCP",
    "id": "T10I_078"
  },
  {
    "q": "What must be done to the ICCP system before the ship enters a dry dock?",
    "a": "It must be completely switched off and isolated",
    "opts": [
      "It must be completely switched off and isolated",
      "The reference electrode must be shorted",
      "The polarity must be reversed",
      "It must be turned up to maximum output"
    ],
    "exp": "Running the system in dry air removes the electrolyte. This can cause high-voltage arcing, presenting a severe fire risk near fresh paint.",
    "cat": "ICCP",
    "id": "T10I_079"
  },
  {
    "q": "During dry dock, what test is performed on the ICCP cables?",
    "a": "A megger (insulation resistance) test; > 1 MΩ is acceptable",
    "opts": [
      "A load capacity test at 100A",
      "A polarity reversal test",
      "A high-frequency AC impedance test",
      "A megger (insulation resistance) test; > 1 MΩ is acceptable"
    ],
    "exp": "The ETO ensures the cables haven't suffered insulation breakdown which would cause shorts to the hull.",
    "cat": "ICCP",
    "id": "T10I_080"
  },
  {
    "q": "What is the very first step when commissioning the ICCP system after the dry dock is flooded?",
    "a": "Switch on in manual mode at minimum output, verify readings, then switch to auto",
    "opts": [
      "Switch on in manual mode at minimum output, verify readings, then switch to auto",
      "Reverse the polarity to clear the anodes",
      "Megger the live circuit",
      "Switch directly to auto mode at maximum output"
    ],
    "exp": "Starting in manual at minimum current allows the ETO to safely verify the new reference electrodes are reading correctly before letting the auto-controller take over.",
    "cat": "ICCP",
    "id": "T10I_081"
  },
  {
    "q": "What determines the effective current demand of the hull?",
    "a": "The percentage of bare steel exposed vs. painted surface",
    "opts": [
      "The percentage of bare steel exposed vs. painted surface",
      "The size of the main engine",
      "The age of the ICCP controller",
      "The number of reference electrodes"
    ],
    "exp": "Bare steel requires 10-50 mA/m², while intact paint requires only 5-10 mA/m².",
    "cat": "ICCP",
    "id": "T10I_082"
  },
  {
    "q": "How many ICCP anodes are typically fitted on a medium-sized cargo vessel?",
    "a": "4 to 8 anodes",
    "opts": [
      "4 to 8 anodes",
      "Over 100 anodes",
      "20 to 30 anodes",
      "1 or 2 anodes"
    ],
    "exp": "A few strategically placed anodes (fwd and aft, port and stbd) can protect the entire hull when properly controlled.",
    "cat": "ICCP",
    "id": "T10I_083"
  },
  {
    "q": "What happens if a new hull coating is applied in dry dock and the ship re-enters the water?",
    "a": "The ICCP current output will be unusually low because the fresh paint provides near-perfect coverage",
    "opts": [
      "The system will trigger an under-protection alarm",
      "The anodes will short out",
      "The ICCP current output will be extremely high",
      "The ICCP current output will be unusually low because the fresh paint provides near-perfect coverage"
    ],
    "exp": "Fresh paint seals the hull. The controller needs to output very little current to achieve the –850mV setpoint.",
    "cat": "ICCP",
    "id": "T10I_084"
  },
  {
    "q": "What limits the maximum current the ICCP system can supply if the hull is heavily damaged?",
    "a": "The transformer-rectifier design and internal current-limiting software",
    "opts": [
      "The transformer-rectifier design and internal current-limiting software",
      "The sacrificial anodes burning out",
      "The melting of the hull",
      "The size of the ship's generators"
    ],
    "exp": "The panel is rated for a specific maximum (e.g., 100A). It will clamp at this value and trigger a 'Max Current' alarm if demand exceeds it.",
    "cat": "ICCP",
    "id": "T10I_085"
  },
  {
    "q": "What happens if an ICCP anode mounting housing is cracked and fills with water?",
    "a": "The anode may short-circuit to the hull, drawing maximum current but providing no overall protection",
    "opts": [
      "The anode will fall off the ship",
      "The anode may short-circuit to the hull, drawing maximum current but providing no overall protection",
      "The hull will immediately dissolve",
      "The controller will switch to AC output"
    ],
    "exp": "A breached dielectric housing allows current to flow straight from the anode to the adjacent steel, bypassing the bulk of the hull.",
    "cat": "ICCP",
    "id": "T10I_086"
  },
  {
    "q": "If the ICCP panel shows voltage and current constantly fluctuating wildly, what is a likely cause?",
    "a": "A loose connection in the reference electrode circuit causing erratic feedback",
    "opts": [
      "The MMO/Ti anodes are dissolving",
      "A loose connection in the reference electrode circuit causing erratic feedback",
      "The ship is moving too fast",
      "The seawater temperature is fluctuating"
    ],
    "exp": "Erratic feedback forces the PID controller to wildly adjust output trying to chase a moving target.",
    "cat": "ICCP",
    "id": "T10I_087"
  },
  {
    "q": "How does salinity affect ICCP operation?",
    "a": "Low salinity (like the Baltic Sea) reduces conductivity, requiring higher output voltage",
    "opts": [
      "Salinity has absolutely no effect",
      "High salinity shuts down the system",
      "Low salinity (like the Baltic Sea) reduces conductivity, requiring higher output voltage",
      "Low salinity increases current demand"
    ],
    "exp": "Fewer salt ions mean higher resistance. Just like cold water, fresh/brackish water forces the controller to raise voltage.",
    "cat": "ICCP",
    "id": "T10I_088"
  },
  {
    "q": "What parameter is the primary feedback variable that the ICCP controller monitors?",
    "a": "Hull-to-seawater potential (in millivolts)",
    "opts": [
      "Hull-to-seawater potential (in millivolts)",
      "Seawater temperature",
      "Ship speed",
      "Output current (in Amps)"
    ],
    "exp": "The controller solely exists to keep this potential value at the setpoint (e.g., –850mV).",
    "cat": "ICCP",
    "id": "T10I_089"
  },
  {
    "q": "Why are ICCP anodes placed near the stern of the vessel?",
    "a": "Because the bronze propeller and rudder create a massive current demand in this area",
    "opts": [
      "To avoid anchor damage",
      "To protect the ship's wake",
      "Because the water is colder there",
      "Because the bronze propeller and rudder create a massive current demand in this area"
    ],
    "exp": "The bimetallic cell created by the massive bronze propeller requires dense protective current locally.",
    "cat": "ICCP",
    "id": "T10I_090"
  },
  {
    "q": "What does a 'Reference Electrode Fail' alarm usually indicate?",
    "a": "The measured potential is completely out of bounds, indicating a severed cable or dry electrode",
    "opts": [
      "The AC power has failed",
      "The hull is heavily corroded",
      "The measured potential is completely out of bounds, indicating a severed cable or dry electrode",
      "The ship is in fresh water"
    ],
    "exp": "If the controller sees 0mV or +500mV abruptly, it knows the sensor is dead and throws an alarm.",
    "cat": "ICCP",
    "id": "T10I_091"
  },
  {
    "q": "What should the ETO do if the auto-controller fails but the power supply is intact?",
    "a": "Switch to manual mode and set a fixed output current based on historical logs",
    "opts": [
      "Switch off the system entirely until dry dock",
      "Switch to manual mode and set a fixed output current based on historical logs",
      "Reverse the anode and cathode connections",
      "Bypass the reference electrode with a wire"
    ],
    "exp": "Manual mode bypasses the feedback loop. A conservative fixed current will provide basic protection until repairs are made.",
    "cat": "ICCP",
    "id": "T10I_092"
  },
  {
    "q": "What is the function of the dielectric shield (fibreglass/epoxy) painted around the ICCP anode on the hull?",
    "a": "It forces the protective current to spread out evenly over the hull instead of concentrating locally",
    "opts": [
      "It prevents marine growth on the anode",
      "It forces the protective current to spread out evenly over the hull instead of concentrating locally",
      "It absorbs hydrogen gas",
      "It acts as a secondary sacrificial anode"
    ],
    "exp": "Without the dielectric shield, current would take the path of least resistance to the steel immediately next to the anode, causing severe local over-protection.",
    "cat": "ICCP",
    "id": "T10I_093"
  },
  {
    "q": "Can the ICCP system be operated on a ship's 24V emergency battery?",
    "a": "No, it requires massive power from the main AC switchboard (220V/440V)",
    "opts": [
      "Yes, it is designed for battery operation",
      "No, it requires massive power from the main AC switchboard (220V/440V)",
      "Yes, but only in manual mode",
      "Yes, but it will drain the battery in 5 minutes"
    ],
    "exp": "ICCP draws kilowatts of power (e.g., 25V * 100A = 2500W) and relies on the main AC generators.",
    "cat": "ICCP",
    "id": "T10I_094"
  },
  {
    "q": "What is the typical indication of an anode falling off the ship entirely?",
    "a": "Output current drops to zero or near zero for that specific zone",
    "opts": [
      "The hull potential drops to –1500mV",
      "The controller explodes",
      "Output current spikes to maximum",
      "Output current drops to zero or near zero for that specific zone"
    ],
    "exp": "Losing the anode breaks the circuit into the water, resulting in an open circuit.",
    "cat": "ICCP",
    "id": "T10I_095"
  },
  {
    "q": "What does MGPS stand for?",
    "a": "Marine Growth Prevention System",
    "opts": [
      "Metallic Grounding Protection Scheme",
      "Main Generator Power Supply",
      "Marine Growth Prevention System",
      "Marine Galvanic Protection System"
    ],
    "exp": "MGPS is dedicated to preventing biological fouling in the ship's internal seawater systems.",
    "cat": "MGPS",
    "id": "T10I_096"
  },
  {
    "q": "What is the primary purpose of the MGPS?",
    "a": "To prevent biological fouling (barnacles, mussels) inside sea chests and seawater pipes",
    "opts": [
      "To prevent biological fouling (barnacles, mussels) inside sea chests and seawater pipes",
      "To purify drinking water",
      "To prevent corrosion on the external hull",
      "To filter solid debris from the ballast water"
    ],
    "exp": "MGPS stops marine organisms from settling and growing inside the cooling water systems.",
    "cat": "MGPS",
    "id": "T10I_097"
  },
  {
    "q": "Does MGPS protect the external hull of the ship?",
    "a": "No, it only protects internal seawater systems; ICCP protects the external hull",
    "opts": [
      "Yes, it replaces the ICCP system",
      "Yes, but only the bow area",
      "No, it only protects internal seawater systems; ICCP protects the external hull",
      "Yes, by emitting copper into the surrounding ocean"
    ],
    "exp": "MGPS acts entirely inside the pipes. The external hull relies on ICCP.",
    "cat": "MGPS",
    "id": "T10I_098"
  },
  {
    "q": "What is the primary anode material used in MGPS to kill marine growth?",
    "a": "Copper",
    "opts": [
      "Zinc",
      "Copper",
      "Titanium",
      "Mixed Metal Oxide"
    ],
    "exp": "Electrolytic dissolution of the copper anode releases Cu²⁺ ions, which act as a potent biocide.",
    "cat": "MGPS",
    "id": "T10I_099"
  },
  {
    "q": "At what target concentration are copper ions maintained by the MGPS?",
    "a": "Approximately 2 parts per billion (ppb)",
    "opts": [
      "10% by volume",
      "Zero",
      "Approximately 2 parts per million (ppm)",
      "Approximately 2 parts per billion (ppb)"
    ],
    "exp": "Just 2 ppb is toxic to larvae trying to attach, but safe enough to discharge into the environment.",
    "cat": "MGPS",
    "id": "T10I_100"
  },
  {
    "q": "What secondary anode material is frequently used alongside copper in an MGPS?",
    "a": "Aluminium",
    "opts": [
      "Lead",
      "Aluminium",
      "Graphite",
      "Silver"
    ],
    "exp": "Aluminium anodes release ions that coat the inside of steel/copper-nickel pipes, preventing corrosion.",
    "cat": "MGPS",
    "id": "T10I_101"
  },
  {
    "q": "What is the typical operating voltage range of an MGPS anode?",
    "a": "0.5–4V DC",
    "opts": [
      "110–220V AC",
      "400–600V DC",
      "24–50V DC",
      "0.5–4V DC"
    ],
    "exp": "Because the anode and cathode (pipe wall) are inches apart, very low voltage is required.",
    "cat": "MGPS",
    "id": "T10I_102"
  },
  {
    "q": "What is the typical operating current range per MGPS anode?",
    "a": "0.5–4A",
    "opts": [
      "50–100A",
      "0.5–4A",
      "200–500A",
      "Microamps (µA)"
    ],
    "exp": "MGPS uses very small currents compared to the massive 100A outputs of an ICCP system.",
    "cat": "MGPS",
    "id": "T10I_103"
  },
  {
    "q": "What is the typical lifespan of an MGPS copper anode?",
    "a": "1 to 3 years (it is consumable)",
    "opts": [
      "Lifetime of the vessel",
      "1 month",
      "20 to 25 years (non-consumable)",
      "1 to 3 years (it is consumable)"
    ],
    "exp": "Because MGPS relies on physical dissolution of copper, the anodes melt away and must be replaced at dry dock.",
    "cat": "MGPS",
    "id": "T10I_104"
  },
  {
    "q": "Where are MGPS anodes physically located on the ship?",
    "a": "Inside sea chests or cooling water inlet strainers",
    "opts": [
      "Inside the main engine block",
      "Inside sea chests or cooling water inlet strainers",
      "Flush-mounted on the external hull",
      "On the propeller shaft"
    ],
    "exp": "They must be placed at the very entrance of the seawater system so the ions flow through all downstream pipes.",
    "cat": "MGPS",
    "id": "T10I_105"
  },
  {
    "q": "How does an MGPS controller differ fundamentally from an ICCP controller?",
    "a": "MGPS does not use a reference electrode; it runs on a fixed or timer-based current",
    "opts": [
      "MGPS does not use a reference electrode; it runs on a fixed or timer-based current",
      "MGPS requires much higher voltages",
      "MGPS must be switched off at sea",
      "MGPS runs on AC power"
    ],
    "exp": "There is no 'potential' to measure in MGPS. The ETO simply sets the current based on seawater pump flow rates.",
    "cat": "MGPS",
    "id": "T10I_106"
  },
  {
    "q": "What acts as the cathode in the MGPS electrical circuit?",
    "a": "The surrounding seawater pipework and sea chest casing",
    "opts": [
      "The shore power earth",
      "The external hull",
      "The surrounding seawater pipework and sea chest casing",
      "The copper anode"
    ],
    "exp": "Current flows from the copper anode to the steel pipe walls, completing the circuit.",
    "cat": "MGPS",
    "id": "T10I_107"
  },
  {
    "q": "What happens to the ship's machinery if the MGPS fails?",
    "a": "Bio-fouling blocks the pipes and heat exchangers, leading to overheating of the main engine and auxiliaries",
    "opts": [
      "The ICCP system shuts down",
      "Bio-fouling blocks the pipes and heat exchangers, leading to overheating of the main engine and auxiliaries",
      "The propeller falls off",
      "The hull rusts immediately"
    ],
    "exp": "Barnacles and mussels restrict water flow, crippling the vessel's cooling capacity.",
    "cat": "MGPS",
    "id": "T10I_108"
  },
  {
    "q": "How does warm tropical seawater affect the risk of bio-fouling?",
    "a": "It increases the risk significantly, as biological growth is much faster in warm water",
    "opts": [
      "It kills all marine growth",
      "It has no effect",
      "It increases the risk significantly, as biological growth is much faster in warm water",
      "It decreases the risk"
    ],
    "exp": "Tropical ports are notorious for aggressive barnacle growth, often requiring higher MGPS current settings.",
    "cat": "MGPS",
    "id": "T10I_109"
  },
  {
    "q": "Are MGPS anodes connected to the ICCP controller?",
    "a": "No, MGPS has its own entirely separate controller panel",
    "opts": [
      "Yes, they share the same control board",
      "Yes, they run in series with ICCP anodes",
      "No, MGPS runs directly off the 440V busbar without a controller",
      "No, MGPS has its own entirely separate controller panel"
    ],
    "exp": "They serve different purposes, use different voltages, and are electrically isolated from each other.",
    "cat": "MGPS",
    "id": "T10I_110"
  },
  {
    "q": "Is the 2 ppb copper concentration generated by MGPS harmful to the ocean?",
    "a": "No, it is well below IMO environmental limits for discharge and dissipates rapidly",
    "opts": [
      "Yes, it is highly toxic to all fish",
      "No, it is well below IMO environmental limits for discharge and dissipates rapidly",
      "Yes, it causes red tide",
      "No, because copper is actually a nutrient for barnacles"
    ],
    "exp": "The concentration is lethal to microscopic larvae inside the pipe, but harmless once diluted into the ocean.",
    "cat": "MGPS",
    "id": "T10I_111"
  },
  {
    "q": "At what stage of life does MGPS target marine organisms?",
    "a": "The larval (microscopic) stage before they attach to surfaces",
    "opts": [
      "After they form a hard shell",
      "The adult stage",
      "The egg stage",
      "The larval (microscopic) stage before they attach to surfaces"
    ],
    "exp": "Once a barnacle attaches and forms a shell, MGPS cannot kill it. It must be killed as a free-floating larva.",
    "cat": "MGPS",
    "id": "T10I_112"
  },
  {
    "q": "What happens if the ETO sets the MGPS current too high?",
    "a": "The copper anodes will be consumed far too rapidly and may fail before the next dry dock",
    "opts": [
      "Marine growth will accelerate",
      "The ICCP system will trip",
      "The copper anodes will be consumed far too rapidly and may fail before the next dry dock",
      "The pipes will melt"
    ],
    "exp": "Higher current melts the anode faster. It must be balanced to last 2-3 years while providing 2 ppb.",
    "cat": "MGPS",
    "id": "T10I_113"
  },
  {
    "q": "Why must MGPS remain active while the ship is in port?",
    "a": "Because shallow, warm port waters have the highest concentration of bio-fouling organisms",
    "opts": [
      "Because it acts as an earth bond",
      "Because shallow, warm port waters have the highest concentration of bio-fouling organisms",
      "Because port state control requires it",
      "Because the main engine relies on it to stay warm"
    ],
    "exp": "Unlike ICCP (which is off in port), MGPS is most critical in port where larvae are dense.",
    "cat": "MGPS",
    "id": "T10I_114"
  },
  {
    "q": "Can MGPS be fully tested while the ship is in a dry dock?",
    "a": "No, powering the anodes in dry air causes overheating; only electrical continuity can be checked",
    "opts": [
      "No, because it requires the main engine to run",
      "No, powering the anodes in dry air causes overheating; only electrical continuity can be checked",
      "Yes, by spraying water on them",
      "Yes, it works better in air"
    ],
    "exp": "Just like ICCP, the system requires seawater as an electrolyte to function safely.",
    "cat": "MGPS",
    "id": "T10I_115"
  },
  {
    "q": "What is the traditional term for the sea chest valves where MGPS anodes are often mounted?",
    "a": "Kingstones",
    "opts": [
      "Butterfly chests",
      "Globe intakes",
      "Kingstones",
      "Gate valves"
    ],
    "exp": "Kingstone valves refer to the main sea water inlet valves connected to the sea chests.",
    "cat": "MGPS",
    "id": "T10I_116"
  },
  {
    "q": "How does the ETO typically adjust the MGPS output?",
    "a": "By manually setting the current output on the panel based on the number of seawater pumps running",
    "opts": [
      "By manually setting the current output on the panel based on the number of seawater pumps running",
      "By altering the AC voltage",
      "By turning valves in the engine room",
      "By changing the reference electrode setpoint"
    ],
    "exp": "More pumps running = higher water flow = more current needed to maintain the 2 ppb ratio.",
    "cat": "MGPS",
    "id": "T10I_117"
  },
  {
    "q": "What happens if a copper MGPS anode becomes completely depleted?",
    "a": "Voltage will spike to maximum and current will drop to zero (open circuit)",
    "opts": [
      "The sea chest will flood",
      "Voltage will spike to maximum and current will drop to zero (open circuit)",
      "Current will spike to maximum",
      "The system will switch to the aluminium anode automatically"
    ],
    "exp": "Once the metal is gone, the circuit breaks. The panel registers an open-circuit fault.",
    "cat": "MGPS",
    "id": "T10I_118"
  },
  {
    "q": "Why are Al³⁺ ions from the Aluminium anode beneficial?",
    "a": "They create an anti-corrosion film on the inside of the steel/copper-nickel pipes",
    "opts": [
      "They dissolve barnacle shells",
      "They increase seawater conductivity",
      "They create an anti-corrosion film on the inside of the steel/copper-nickel pipes",
      "They are highly toxic to sharks"
    ],
    "exp": "The aluminium floc acts as a physical barrier against internal pipe corrosion.",
    "cat": "MGPS",
    "id": "T10I_119"
  },
  {
    "q": "If a ship only sails in very cold Arctic waters, how does this affect MGPS operation?",
    "a": "Bio-fouling is minimal, so the MGPS current can be set to a minimum to save anode life",
    "opts": [
      "The anodes will freeze and shatter",
      "Bio-fouling is minimal, so the MGPS current can be set to a minimum to save anode life",
      "The system must run at maximum to stop ice forming",
      "The voltage must be doubled"
    ],
    "exp": "Cold water suppresses biological growth, requiring far less biocidal action.",
    "cat": "MGPS",
    "id": "T10I_120"
  },
  {
    "q": "What is the primary visual difference between an ICCP anode and an MGPS anode?",
    "a": "ICCP anodes are large plates mounted on the hull; MGPS anodes are cylindrical rods mounted inside pipes",
    "opts": [
      "ICCP anodes are green, MGPS are red",
      "ICCP anodes are inside the engine, MGPS are on the hull",
      "They look exactly the same",
      "ICCP anodes are large plates mounted on the hull; MGPS anodes are cylindrical rods mounted inside pipes"
    ],
    "exp": "MGPS anodes must fit inside the flange of a sea strainer or chest.",
    "cat": "MGPS",
    "id": "T10I_121"
  },
  {
    "q": "What maintenance does the ETO perform on MGPS anodes during dry dock?",
    "a": "Visually inspects consumption and replaces the copper/aluminium rods",
    "opts": [
      "Visually inspects consumption and replaces the copper/aluminium rods",
      "Recharges them with a high-voltage pulse",
      "Paints them with anti-fouling paint",
      "Welds them permanently to the hull"
    ],
    "exp": "They are unscrewed from their flanges and fresh rods are installed for the next 2-year cycle.",
    "cat": "MGPS",
    "id": "T10I_122"
  },
  {
    "q": "Can an MGPS system cause stray current corrosion in port like an ICCP system?",
    "a": "No, the voltage and current are internally contained and far too low to cause external stray currents",
    "opts": [
      "No, the voltage and current are internally contained and far too low to cause external stray currents",
      "Yes, it corrodes the jetty instantly",
      "Yes, it is even more dangerous",
      "Yes, if the sea chest is open"
    ],
    "exp": "The closed loop inside the sea chest at 1-2 amps poses zero risk to external structures.",
    "cat": "MGPS",
    "id": "T10I_123"
  },
  {
    "q": "Does MGPS use an AC or DC power supply?",
    "a": "DC power (rectified from the ship's AC supply)",
    "opts": [
      "Static electricity",
      "Pulsed high-frequency AC",
      "AC power directly",
      "DC power (rectified from the ship's AC supply)"
    ],
    "exp": "Electrolysis requires DC current to dissolve the positive copper anode continuously.",
    "cat": "MGPS",
    "id": "T10I_124"
  },
  {
    "q": "What is the consequence of painting over an MGPS anode during sea chest maintenance?",
    "a": "It electrically isolates the anode, preventing it from dissolving and failing the system",
    "opts": [
      "It causes an immediate explosion",
      "It makes the system work twice as well",
      "It protects the anode and extends its life",
      "It electrically isolates the anode, preventing it from dissolving and failing the system"
    ],
    "exp": "Paint acts as a dielectric. No current can flow into the water, so no copper ions are released.",
    "cat": "MGPS",
    "id": "T10I_125"
  },
  {
    "q": "What is the primary purpose of electrical bonding on a ship's hull?",
    "a": "To ensure all metallic parts are at the same potential, preventing bimetallic corrosion and ensuring uniform ICCP protection",
    "opts": [
      "To connect the ship to the shore power earth",
      "To ensure all metallic parts are at the same potential, preventing bimetallic corrosion and ensuring uniform ICCP protection",
      "To act as a radio antenna",
      "To provide a path for lightning strikes"
    ],
    "exp": "By tying everything together with low-resistance copper, galvanic cells cannot form between dissimilar metals like bronze and steel.",
    "cat": "BONDING",
    "id": "T10I_126"
  },
  {
    "q": "What is the critical difference between Bonding and Earthing?",
    "a": "Bonding ensures equipotential for corrosion prevention (no normal current); Earthing provides safety for fault currents",
    "opts": [
      "Bonding is for AC, earthing is for DC",
      "Bonding has high resistance, earthing has low resistance",
      "There is no difference",
      "Bonding ensures equipotential for corrosion prevention (no normal current); Earthing provides safety for fault currents"
    ],
    "exp": "Bonding stops galvanic action. Earthing blows fuses during a short circuit.",
    "cat": "BONDING",
    "id": "T10I_127"
  },
  {
    "q": "What is the acceptable electrical resistance for a bonding connection?",
    "a": "< 1 Ω",
    "opts": [
      "< 0.5 Ω",
      "Zero exactly",
      "> 1 MΩ",
      "< 1 Ω"
    ],
    "exp": "Bonding focuses on eliminating potential differences, requiring less than 1 ohm of resistance.",
    "cat": "BONDING",
    "id": "T10I_128"
  },
  {
    "q": "What is the purpose of the Shaft Earthing Brush assembly?",
    "a": "To electrically bond the rotating propeller shaft to the hull, integrating the propeller into the ICCP circuit",
    "opts": [
      "To act as a brake",
      "To measure shaft RPM",
      "To power the propeller",
      "To electrically bond the rotating propeller shaft to the hull, integrating the propeller into the ICCP circuit"
    ],
    "exp": "The lubricating oil in the stern tube electrically insulates the shaft. The brush provides the necessary copper bridge to the hull.",
    "cat": "BONDING",
    "id": "T10I_129"
  },
  {
    "q": "What happens if the shaft earthing brush wears out and loses contact?",
    "a": "The propeller becomes cathodically isolated and may suffer rapid galvanic corrosion",
    "opts": [
      "The ICCP system shorts out",
      "The shaft starts spinning in reverse",
      "The ship's engine stops",
      "The propeller becomes cathodically isolated and may suffer rapid galvanic corrosion"
    ],
    "exp": "Without the bond, the ICCP current cannot reach the propeller, leaving the bronze/steel cell to destroy the stern area.",
    "cat": "BONDING",
    "id": "T10I_130"
  },
  {
    "q": "How is the rudder bonded to the ship's hull?",
    "a": "Using a flexible copper jumper cable connecting the rudder stock to the hull structure",
    "opts": [
      "By painting them the same color",
      "Using a flexible copper jumper cable connecting the rudder stock to the hull structure",
      "Through the hydraulic fluid",
      "It does not need bonding"
    ],
    "exp": "Rudder bearings can be non-conductive. The flexible strap guarantees the rudder receives ICCP protection.",
    "cat": "BONDING",
    "id": "T10I_131"
  },
  {
    "q": "What is the critical rule regarding ICCP operation when a ship is berthed at a port?",
    "a": "The ICCP must be switched OFF",
    "opts": [
      "It must be turned up to maximum",
      "It must only protect the bow",
      "It must be switched to AC mode",
      "The ICCP must be switched OFF"
    ],
    "exp": "Leaving it on causes stray current to leap to the jetty, destroying dock infrastructure and other ships.",
    "cat": "BONDING",
    "id": "T10I_132"
  },
  {
    "q": "What is 'Stray Current Corrosion'?",
    "a": "Accelerated metal dissolution caused by DC current leaking through unintended paths (like mooring lines to a jetty)",
    "opts": [
      "Accelerated metal dissolution caused by DC current leaking through unintended paths (like mooring lines to a jetty)",
      "Rusting of the anchor chain",
      "Corrosion caused by static electricity",
      "Corrosion from sea spray on deck"
    ],
    "exp": "Current returning to the source via the seawater rips iron atoms off the structure where it exits.",
    "cat": "BONDING",
    "id": "T10I_133"
  },
  {
    "q": "What is the destructive rate of stray current corrosion?",
    "a": "10 Amps of stray DC current dissolves approximately 10 kg of steel per year",
    "opts": [
      "1 Amp dissolves 1 gram per year",
      "It has no measurable effect",
      "10 Amps of stray DC current dissolves approximately 10 kg of steel per year",
      "100 Amps dissolves 1 kg per year"
    ],
    "exp": "This is an extremely aggressive form of corrosion. A 50A ICCP leak can destroy a jetty piling in months.",
    "cat": "BONDING",
    "id": "T10I_134"
  },
  {
    "q": "Through which physical paths can stray current travel when a ship is alongside?",
    "a": "Mooring wire ropes, steel gangways, and shore power earth cables",
    "opts": [
      "Plastic water hoses",
      "The ship's radar beam",
      "VHF radio waves",
      "Mooring wire ropes, steel gangways, and shore power earth cables"
    ],
    "exp": "Any metallic connection between the ship and the shore acts as a conductor for the stray ICCP current.",
    "cat": "BONDING",
    "id": "T10I_135"
  },
  {
    "q": "How is the shore power connection protected against stray current loops?",
    "a": "By fitting an insulating flange or galvanic isolator in the shore earth conductor",
    "opts": [
      "By fitting an insulating flange or galvanic isolator in the shore earth conductor",
      "By running it through a transformer",
      "By cutting the earth wire entirely",
      "By using wireless power transfer"
    ],
    "exp": "A galvanic isolator blocks low-voltage DC (stopping stray current) but passes high-voltage AC fault current for safety.",
    "cat": "BONDING",
    "id": "T10I_136"
  },
  {
    "q": "Why is it safe to leave the ICCP system ON while the ship is at anchor?",
    "a": "There are no adjacent metallic structures or shore connections to create a stray current path",
    "opts": [
      "The anchor chain absorbs all the current",
      "There are no adjacent metallic structures or shore connections to create a stray current path",
      "The water is deeper",
      "The engine is stopped"
    ],
    "exp": "Stray current requires a parallel metallic structure. In open water, the only path is back to the ship's own hull.",
    "cat": "BONDING",
    "id": "T10I_137"
  },
  {
    "q": "What could be the consequence of leaving the ICCP on in a crowded port?",
    "a": "Port Authority claims against the ship owner for severe corrosion damage to the jetty and nearby vessels",
    "opts": [
      "The ICCP controller will explode",
      "Port Authority claims against the ship owner for severe corrosion damage to the jetty and nearby vessels",
      "The ship will become magnetized",
      "The ship's battery will drain"
    ],
    "exp": "Port State Control strictly monitors this. Damaging port infrastructure results in massive financial liabilities.",
    "cat": "BONDING",
    "id": "T10I_138"
  },
  {
    "q": "What SMS log entry is mandatory regarding ICCP during port arrival and departure?",
    "a": "Logging the exact time the ICCP was switched off on arrival and on after departure",
    "opts": [
      "Logging the voltage every 5 minutes",
      "Logging the fuel consumed by ICCP",
      "Logging the exact time the ICCP was switched off on arrival and on after departure",
      "Logging the name of the port authority"
    ],
    "exp": "This proves to inspectors that the ship followed anti-stray current protocols.",
    "cat": "BONDING",
    "id": "T10I_139"
  },
  {
    "q": "What is the typical rule for ICCP operation during transit of the Suez or Panama canals?",
    "a": "Consult class/manufacturer, but it is usually switched OFF due to close proximity to lock gates and structures",
    "opts": [
      "It has no restrictions",
      "It is switched to AC mode",
      "Consult class/manufacturer, but it is usually switched OFF due to close proximity to lock gates and structures",
      "It must be run at 200% capacity"
    ],
    "exp": "The ship passes inches away from massive steel lock gates, creating a severe stray current risk.",
    "cat": "BONDING",
    "id": "T10I_140"
  },
  {
    "q": "If the ICCP is switched off in port, what protects the propeller from bimetallic corrosion?",
    "a": "Supplementary sacrificial anodes mounted near the stern and the residual polarization of the hull",
    "opts": [
      "Supplementary sacrificial anodes mounted near the stern and the residual polarization of the hull",
      "The ship's generators",
      "The shore power supply",
      "Nothing, it rusts immediately"
    ],
    "exp": "Zinc anodes on the rudder/propeller boss act as a passive backup when the active ICCP is disabled.",
    "cat": "BONDING",
    "id": "T10I_141"
  },
  {
    "q": "What maintenance must the ETO perform on the shaft earthing slip ring?",
    "a": "Keep it clean, unpainted, and free of oil or grease to maintain < 1 Ω resistance",
    "opts": [
      "Lubricate it heavily with heavy gear oil",
      "Remove it completely",
      "Paint it with anti-fouling paint",
      "Keep it clean, unpainted, and free of oil or grease to maintain < 1 Ω resistance"
    ],
    "exp": "Oil acts as an insulator. The silver/copper slip ring must be spotlessly clean to transfer millivolt currents.",
    "cat": "BONDING",
    "id": "T10I_142"
  },
  {
    "q": "What material is typically used for the shaft earthing brush?",
    "a": "Silver-graphite or high-copper carbon for extremely low resistance",
    "opts": [
      "Wood",
      "Pure steel",
      "Teflon",
      "Silver-graphite or high-copper carbon for extremely low resistance"
    ],
    "exp": "Standard motor brushes have too high a voltage drop. Silver-graphite provides near-zero resistance.",
    "cat": "BONDING",
    "id": "T10I_143"
  },
  {
    "q": "What happens if a bow thruster tunnel lacks proper electrical bonding?",
    "a": "The thruster casing may corrode rapidly despite the ICCP system running",
    "opts": [
      "The thruster motor will run backward",
      "The ICCP voltage will drop to zero",
      "The tunnel will fill with hydrogen",
      "The thruster casing may corrode rapidly despite the ICCP system running"
    ],
    "exp": "If the tunnel is not equipotential with the hull, the ICCP current won't protect it, and local galvanic cells will destroy it.",
    "cat": "BONDING",
    "id": "T10I_144"
  },
  {
    "q": "What fundamentally drives 'bimetallic' (galvanic) corrosion?",
    "a": "The natural electrochemical potential difference between two dissimilar metals in an electrolyte",
    "opts": [
      "The presence of zinc",
      "The natural electrochemical potential difference between two dissimilar metals in an electrolyte",
      "High temperatures",
      "Friction between two metals"
    ],
    "exp": "Connecting bronze (noble) and steel (active) creates a battery. Bonding them eliminates the voltage difference.",
    "cat": "BONDING",
    "id": "T10I_145"
  },
  {
    "q": "Can stray current corrosion be easily visually detected before damage occurs?",
    "a": "No, it often goes unnoticed until severe structural pitting or failure occurs",
    "opts": [
      "Yes, it causes loud buzzing noises",
      "Yes, it turns the water red",
      "No, it often goes unnoticed until severe structural pitting or failure occurs",
      "Yes, it glows in the dark"
    ],
    "exp": "It acts silently underwater. By the time it is noticed, heavy steel loss has already occurred.",
    "cat": "BONDING",
    "id": "T10I_146"
  },
  {
    "q": "Where exactly does stray current cause damage?",
    "a": "At the point where the positive DC current leaves the metal structure to enter the seawater",
    "opts": [
      "At the point where current enters the metal",
      "At the point where the positive DC current leaves the metal structure to enter the seawater",
      "Inside the ICCP controller",
      "On the shore power plug"
    ],
    "exp": "Metal ions are stripped away where the current exits the steel into the electrolyte (the anodic reaction).",
    "cat": "BONDING",
    "id": "T10I_147"
  },
  {
    "q": "What should the ETO inspect on the shaft earthing assembly during weekly rounds?",
    "a": "Brush length, spring tension, and slip ring cleanliness",
    "opts": [
      "The color of the paint",
      "Brush length, spring tension, and slip ring cleanliness",
      "The software version of the controller",
      "Water pressure and temperature"
    ],
    "exp": "A worn-out brush or weak spring will break the bonding circuit, leaving the propeller unprotected.",
    "cat": "BONDING",
    "id": "T10I_148"
  },
  {
    "q": "Why is the acceptable resistance for bonding (< 1 Ω) different from equipment earthing (< 0.5 Ω)?",
    "a": "Bonding handles tiny millivolt currents to eliminate potential differences; earthing handles massive fault currents requiring lower resistance",
    "opts": [
      "Bonding handles tiny millivolt currents to eliminate potential differences; earthing handles massive fault currents requiring lower resistance",
      "Bonding is for AC, earthing is for DC",
      "They are actually the same thing",
      "Bonding uses thinner wires"
    ],
    "exp": "Class rules dictate strict safety limits for fault clearing (earthing), while bonding just needs to maintain equipotential.",
    "cat": "BONDING",
    "id": "T10I_149"
  },
  {
    "q": "What is the consequence of a broken flexible jumper cable on the rudder?",
    "a": "The rudder pintles and stock will suffer accelerated galvanic corrosion",
    "opts": [
      "The ship will turn in circles",
      "The rudder pintles and stock will suffer accelerated galvanic corrosion",
      "The steering gear motor will burn out",
      "The rudder will fall off immediately"
    ],
    "exp": "Without the jumper, the rudder relies on greasy bearings for contact, isolating it from ICCP protection.",
    "cat": "BONDING",
    "id": "T10I_150"
  },
  {
    "q": "How does a shore power galvanic isolator work?",
    "a": "It uses back-to-back diodes to block low-voltage DC (stray current) while allowing high-voltage AC fault currents to pass",
    "opts": [
      "It cuts the wire with a switch",
      "It uses a transformer to step up voltage",
      "It uses back-to-back diodes to block low-voltage DC (stray current) while allowing high-voltage AC fault currents to pass",
      "It replaces the earth with a plastic rod"
    ],
    "exp": "Diodes need ~1.2V to conduct. ICCP stray voltages are smaller, so they are blocked, but a 220V fault easily blasts through.",
    "cat": "BONDING",
    "id": "T10I_151"
  },
  {
    "q": "If a ship's hull is at –850 mV and the propeller is unbonded, what happens?",
    "a": "The propeller potential remains positive (e.g. +300 mV), creating an 1150 mV battery that destroys nearby steel",
    "opts": [
      "The propeller dissolves instantly",
      "The ICCP system shuts down",
      "The propeller also drops to –850 mV naturally",
      "The propeller potential remains positive (e.g. +300 mV), creating an 1150 mV battery that destroys nearby steel"
    ],
    "exp": "This massive voltage difference drives rapid bimetallic corrosion at the stern.",
    "cat": "BONDING",
    "id": "T10I_152"
  },
  {
    "q": "Can bonding prevent biological marine growth?",
    "a": "No, bonding only prevents galvanic corrosion; MGPS prevents biological growth",
    "opts": [
      "Yes, it electrocutes barnacles",
      "Yes, by heating the hull",
      "No, bonding actually encourages growth",
      "No, bonding only prevents galvanic corrosion; MGPS prevents biological growth"
    ],
    "exp": "Bonding has absolutely no effect on biology, only on electrochemistry.",
    "cat": "BONDING",
    "id": "T10I_153"
  },
  {
    "q": "Why use a flexible jumper for the rudder instead of a solid copper bar?",
    "a": "The rudder moves constantly; a solid bar would snap from metal fatigue",
    "opts": [
      "The rudder moves constantly; a solid bar would snap from metal fatigue",
      "Solid bars are illegal",
      "Flexible cable conducts better",
      "Flexible cable is cheaper"
    ],
    "exp": "Braided copper straps endure millions of steering cycles without breaking.",
    "cat": "BONDING",
    "id": "T10I_154"
  },
  {
    "q": "What is the primary purpose of the reference electrode in an ICCP system?",
    "a": "To continuously measure the electrochemical potential between the hull and seawater for controller feedback",
    "opts": [
      "To continuously measure the electrochemical potential between the hull and seawater for controller feedback",
      "To kill marine growth",
      "To ground the ship to the ocean",
      "To supply the 100A protection current"
    ],
    "exp": "The reference electrode acts as the 'eyes' of the system, telling the controller if the hull is protected or not.",
    "cat": "REF",
    "id": "T10I_155"
  },
  {
    "q": "Which material is most commonly used for ICCP reference electrodes?",
    "a": "Ag/AgCl (Silver / Silver Chloride)",
    "opts": [
      "Mixed Metal Oxide",
      "Lead-Acid",
      "Pure Copper",
      "Ag/AgCl (Silver / Silver Chloride)"
    ],
    "exp": "Ag/AgCl is highly stable in seawater and provides a predictable, non-drifting reference voltage.",
    "cat": "REF",
    "id": "T10I_156"
  },
  {
    "q": "What is the voltage potential of an Ag/AgCl reference electrode compared to the Standard Hydrogen Electrode (SHE)?",
    "a": "+0.222 V",
    "opts": [
      "–850 mV",
      "0.0 V",
      "–0.76 V",
      "+0.222 V"
    ],
    "exp": "It provides a constant +0.222 V baseline against which the hull's potential can be accurately measured.",
    "cat": "REF",
    "id": "T10I_157"
  },
  {
    "q": "What secondary material is sometimes used for cheaper reference electrodes?",
    "a": "Zinc (Zn)",
    "opts": [
      "Aluminium",
      "Zinc (Zn)",
      "Titanium",
      "Carbon"
    ],
    "exp": "Zinc is simpler and doubles as a passive anode, but its reference potential is less stable than Ag/AgCl over time.",
    "cat": "REF",
    "id": "T10I_158"
  },
  {
    "q": "Why is Ag/AgCl preferred over Zinc for reference electrodes?",
    "a": "It is more stable, accurate, and has a longer life without drifting",
    "opts": [
      "It generates more current",
      "It is more stable, accurate, and has a longer life without drifting",
      "It kills barnacles",
      "It is much cheaper"
    ],
    "exp": "Accurate feedback is critical for the PID controller; a drifting sensor leads to over or under-protection.",
    "cat": "REF",
    "id": "T10I_159"
  },
  {
    "q": "What is the typical normal lifespan of a reference electrode?",
    "a": "Approximately 2.5 years (replaced every dry dock)",
    "opts": [
      "6 months",
      "10 years",
      "Approximately 2.5 years (replaced every dry dock)",
      "20 to 25 years"
    ],
    "exp": "The internal gel electrolyte depletes and the porous junction fouls, causing it to fail after a few years.",
    "cat": "REF",
    "id": "T10I_160"
  },
  {
    "q": "Why MUST reference electrodes be replaced at every dry dock?",
    "a": "The gel electrolyte depletes, causing potential drift that leads to incorrect controller output",
    "opts": [
      "Class rules forbid reusing them",
      "They get painted over inevitably",
      "The gel electrolyte depletes, causing potential drift that leads to incorrect controller output",
      "They melt in dry air"
    ],
    "exp": "An aging electrode gives false readings, forcing the controller to wrongly over-protect or under-protect the hull.",
    "cat": "REF",
    "id": "T10I_161"
  },
  {
    "q": "What is the minimum protection potential to stop corrosion (NACE criterion)?",
    "a": "–800 mV (vs Ag/AgCl)",
    "opts": [
      "–1100 mV",
      "0 mV",
      "–800 mV (vs Ag/AgCl)",
      "–500 mV"
    ],
    "exp": "If the hull is less negative than –800 mV (e.g., –750 mV), the anodic dissolution of iron is still occurring.",
    "cat": "REF",
    "id": "T10I_162"
  },
  {
    "q": "What is the typical ICCP operating setpoint on most ships?",
    "a": "–850 mV (vs Ag/AgCl)",
    "opts": [
      "–850 mV (vs Ag/AgCl)",
      "–1100 mV",
      "–500 mV",
      "0 mV"
    ],
    "exp": "–850 mV provides a safe 50 mV buffer above the absolute minimum protection threshold.",
    "cat": "REF",
    "id": "T10I_163"
  },
  {
    "q": "What hull potential reading indicates 'Under-Protection'?",
    "a": "More positive than –800 mV (e.g., –700 mV)",
    "opts": [
      "Any negative number",
      "Exactly –850 mV",
      "More negative than –1100 mV",
      "More positive than –800 mV (e.g., –700 mV)"
    ],
    "exp": "–700 mV is not negative enough; the hull is still acting as an anode and corroding.",
    "cat": "REF",
    "id": "T10I_164"
  },
  {
    "q": "What is the consequence of Under-Protection?",
    "a": "Hull pitting and continuous anodic dissolution (corrosion)",
    "opts": [
      "The reference electrode burns out",
      "Paint peeling off",
      "Hydrogen gas evolution",
      "Hull pitting and continuous anodic dissolution (corrosion)"
    ],
    "exp": "Without sufficient electrons supplied by the ICCP, the steel reverts to naturally sacrificing itself.",
    "cat": "REF",
    "id": "T10I_165"
  },
  {
    "q": "At what potential reading does the hull enter the 'Over-Protection' danger zone?",
    "a": "More negative than –1100 mV (e.g., –1200 mV)",
    "opts": [
      "More negative than –1100 mV (e.g., –1200 mV)",
      "0 mV",
      "Exactly –850 mV",
      "More positive than –800 mV"
    ],
    "exp": "Pushing the hull voltage too negative triggers destructive secondary chemical reactions.",
    "cat": "REF",
    "id": "T10I_166"
  },
  {
    "q": "What is the first major consequence of Over-Protection?",
    "a": "Hydrogen gas evolution at the hull surface (2H⁺ + 2e⁻ → H₂)",
    "opts": [
      "Oxygen gas evolution",
      "Hydrogen gas evolution at the hull surface (2H⁺ + 2e⁻ → H₂)",
      "Instant rust formation",
      "The controller fuse blows"
    ],
    "exp": "Excess electrons force the water to break down into hydrogen gas bubbles.",
    "cat": "REF",
    "id": "T10I_167"
  },
  {
    "q": "What is the structural danger of hydrogen evolution (Over-Protection)?",
    "a": "Hydrogen embrittlement of high-strength steel (propeller shafts, fasteners)",
    "opts": [
      "It makes the steel too heavy",
      "It melts the steel",
      "It causes barnacles to grow faster",
      "Hydrogen embrittlement of high-strength steel (propeller shafts, fasteners)"
    ],
    "exp": "Atomic hydrogen permeates the steel lattice, making it brittle and prone to sudden catastrophic cracking.",
    "cat": "REF",
    "id": "T10I_168"
  },
  {
    "q": "What happens to the hull paint during Over-Protection?",
    "a": "Cathodic disbondment: alkaline conditions and gas bubbles destroy paint adhesion, causing blistering",
    "opts": [
      "The paint dissolves into the water",
      "The paint becomes harder and thicker",
      "The paint changes color to white",
      "Cathodic disbondment: alkaline conditions and gas bubbles destroy paint adhesion, causing blistering"
    ],
    "exp": "The pH rises to 14 at the hull surface, literally burning the paint off from underneath.",
    "cat": "REF",
    "id": "T10I_169"
  },
  {
    "q": "How does the ICCP controller react if it reads –700 mV from the reference electrode?",
    "a": "It increases the DC output current to drive the hull more negative",
    "opts": [
      "It decreases the DC output current",
      "It increases the DC output current to drive the hull more negative",
      "It shuts down immediately",
      "It reverses polarity"
    ],
    "exp": "The PID loop sees it is short of the –850 mV setpoint and adds more current to fix the under-protection.",
    "cat": "REF",
    "id": "T10I_170"
  },
  {
    "q": "How does the ICCP controller react if it reads –1200 mV from the reference electrode?",
    "a": "It decreases the DC output current to let the hull become more positive",
    "opts": [
      "It increases the DC output current",
      "It adds more salt to the water",
      "It decreases the DC output current to let the hull become more positive",
      "It triggers a fire alarm"
    ],
    "exp": "The loop sees it has overshot the –850 mV setpoint into the danger zone and throttles back power.",
    "cat": "REF",
    "id": "T10I_171"
  },
  {
    "q": "What is a symptom of a gradually aging/failing reference electrode?",
    "a": "A slow, gradual drift in potential readings over several months without hull changes",
    "opts": [
      "The controller exploding",
      "A sudden jump to +500 mV",
      "Output current dropping to absolute zero instantly",
      "A slow, gradual drift in potential readings over several months without hull changes"
    ],
    "exp": "As the internal gel depletes, the baseline voltage sags, causing a slow drift in panel readings.",
    "cat": "REF",
    "id": "T10I_172"
  },
  {
    "q": "What does a sudden erratic or extremely positive reading (e.g., +200 mV) indicate?",
    "a": "A severed reference electrode cable or a physically smashed electrode",
    "opts": [
      "A severed reference electrode cable or a physically smashed electrode",
      "The anodes need replacing",
      "Normal operation in fresh water",
      "The ship is moving too fast"
    ],
    "exp": "A complete open circuit in the sensing line causes the input to float, throwing wild false readings.",
    "cat": "REF",
    "id": "T10I_173"
  },
  {
    "q": "How can the ETO verify a suspected faulty reference electrode while the ship is afloat?",
    "a": "By dropping a portable Ag/AgCl 'dive electrode' over the side and comparing its reading to the panel",
    "opts": [
      "By meggering the electrode at 1000V",
      "By dropping a portable Ag/AgCl 'dive electrode' over the side and comparing its reading to the panel",
      "By diving under the ship and looking at it",
      "By smelling the water"
    ],
    "exp": "A calibrated drop-over electrode gives a true reading of the hull potential. If it doesn't match the panel, the fixed electrode is dead.",
    "cat": "REF",
    "id": "T10I_174"
  },
  {
    "q": "What is the typical number of reference electrodes fitted on a ship?",
    "a": "2 to 4 (e.g., port/stbd forward, port/stbd aft)",
    "opts": [
      "2 to 4 (e.g., port/stbd forward, port/stbd aft)",
      "One on every single anode",
      "10 to 20",
      "Only 1"
    ],
    "exp": "Averaging readings from the bow and stern ensures the entire length of the hull is protected.",
    "cat": "REF",
    "id": "T10I_175"
  },
  {
    "q": "Where are reference electrodes typically mounted on the hull?",
    "a": "Below the waterline, flush-mounted in insulating housings, far enough away from anodes to avoid false readings",
    "opts": [
      "Above the waterline on the deck",
      "Inside the ballast tanks",
      "Below the waterline, flush-mounted in insulating housings, far enough away from anodes to avoid false readings",
      "Attached directly to the propeller blades"
    ],
    "exp": "If placed too close to an active anode, the electrode will read the high local voltage gradient, not the true hull potential.",
    "cat": "REF",
    "id": "T10I_176"
  },
  {
    "q": "What happens if a reference electrode is accidentally painted over in dry dock?",
    "a": "It cannot contact the seawater electrolyte, reads 0 mV, and the system fails",
    "opts": [
      "It generates its own power",
      "It works perfectly",
      "It cannot contact the seawater electrolyte, reads 0 mV, and the system fails",
      "It reads –2000 mV and burns out the controller"
    ],
    "exp": "The porous ceramic junction MUST be exposed to seawater to measure the electrochemical potential.",
    "cat": "REF",
    "id": "T10I_177"
  },
  {
    "q": "What immediate action should the ETO take if a reference electrode fails at sea?",
    "a": "Switch the controller to Manual mode and set a conservative fixed current based on historical logs",
    "opts": [
      "Reverse the polarity",
      "Switch the controller to Manual mode and set a conservative fixed current based on historical logs",
      "Switch off the ICCP completely",
      "Send a diver down immediately"
    ],
    "exp": "Manual mode ignores the broken sensor. Dialing in the average current from last week keeps the hull protected until repairs.",
    "cat": "REF",
    "id": "T10I_178"
  },
  {
    "q": "Why does a Zinc reference electrode use a different setpoint than an Ag/AgCl electrode?",
    "a": "Because Zinc sits at a different base potential on the galvanic scale (–0.76V vs SHE)",
    "opts": [
      "Because Zinc conducts AC current",
      "Because Zinc sits at a different base potential on the galvanic scale (–0.76V vs SHE)",
      "Because Zinc is heavier",
      "It doesn't; they use exactly the same setpoint"
    ],
    "exp": "The true physical protection level is the same, but the 'zero' point of the ruler has shifted.",
    "cat": "REF",
    "id": "T10I_179"
  },
  {
    "q": "If using a Zinc reference electrode, what is the typical target setpoint on the controller?",
    "a": "Approximately +250 mV vs Zinc (or –950 mV depending on meter calibration)",
    "opts": [
      "Approximately +250 mV vs Zinc (or –950 mV depending on meter calibration)",
      "–2000 mV",
      "0 mV",
      "–850 mV exactly"
    ],
    "exp": "Because Zn is –0.76V and Ag/AgCl is +0.22V, the numerical setpoint must shift to represent the same physical protection level.",
    "cat": "REF",
    "id": "T10I_180"
  },
  {
    "q": "What happens to the pH of the seawater exactly at the hull surface during severe over-protection?",
    "a": "It becomes highly alkaline (pH 12 to 14), which acts as a paint stripper",
    "opts": [
      "It turns into pure salt",
      "It becomes highly acidic (pH 1 to 2)",
      "It becomes highly alkaline (pH 12 to 14), which acts as a paint stripper",
      "It becomes perfectly neutral (pH 7)"
    ],
    "exp": "The reaction producing OH⁻ ions concentrates caustics against the paint, dissolving the epoxy binder.",
    "cat": "REF",
    "id": "T10I_181"
  },
  {
    "q": "Can a faulty fixed reference electrode be repaired while the ship is underway?",
    "a": "No, it requires dry dock or a specialist underwater diver operation to replace the hull penetration",
    "opts": [
      "No, it requires dry dock or a specialist underwater diver operation to replace the hull penetration",
      "Yes, by resetting the software",
      "Yes, by welding a new one inside the engine room",
      "Yes, by pouring acid down the cable"
    ],
    "exp": "It is a physical hole through the hull. Only a cofferdam/diver or dry dock allows for replacement.",
    "cat": "REF",
    "id": "T10I_182"
  },
  {
    "q": "What does it mean that an Ag/AgCl reference electrode is 'non-polarisable'?",
    "a": "Its potential does not change or drift when small measuring currents flow through it",
    "opts": [
      "Its potential does not change or drift when small measuring currents flow through it",
      "It cannot be frozen",
      "It only works in fresh water",
      "It has no magnetic field"
    ],
    "exp": "A good reference must hold a rock-steady baseline voltage regardless of the circuit measuring it.",
    "cat": "REF",
    "id": "T10I_183"
  },
  {
    "q": "What catastrophic event would happen if an untrained operator accidentally changed the controller setpoint to –400 mV?",
    "a": "The controller would reduce output to near zero, causing severe under-protection and rapid hull corrosion",
    "opts": [
      "The system would output maximum current",
      "The ship would become totally rust-proof",
      "The reference electrode would explode",
      "The controller would reduce output to near zero, causing severe under-protection and rapid hull corrosion"
    ],
    "exp": "The controller would think –400mV is the goal. Since the hull naturally sits around -500mV to -600mV, the controller would turn off, thinking the job is done.",
    "cat": "REF",
    "id": "T10I_184"
  },
  {
    "id": "T10I_185",
    "cat": "ICCP",
    "q": "During electrochemical hull corrosion, iron at anodic areas dissolves as Fe²⁺. These ions then react with hydroxyl ions to form which compound — and what is this compound commonly called?",
    "opts": [
      "Iron oxide (Fe₂O₃) — magnetite",
      "Ferrous hydroxide Fe(OH)₂, later oxidised to ferric hydroxide Fe(OH)₃ — rust",
      "Iron sulphide FeS — scale",
      "Lead peroxide PbO₂ — passivation layer"
    ],
    "a": 1,
    "exp": "Fe²⁺ ions + OH⁻ → Fe(OH)₂ (ferrous hydroxide). Dissolved O₂ further oxidises this to Fe(OH)₃ (ferric hydroxide), which is the familiar brown rust. Cathodic protection prevents Fe²⁺ formation entirely by supplying electrons so iron atoms cannot ionise."
  },
  {
    "id": "T10I_186",
    "cat": "ICCP",
    "q": "In an ICCP system using Lead (Pb) anodes, the Lead surface undergoes a chemical change during operation. What does it convert to, and why is this beneficial?",
    "opts": [
      "Lead chloride PbCl₂ — increases electrical resistance and reduces stray current",
      "Lead sulphate PbSO₄ — insulating layer that controls current output",
      "Lead peroxide PbO₂ — hard, conductive coating that stops the Lead from dissolving",
      "Lead carbonate PbCO₃ — sacrificial coating protecting the base Lead"
    ],
    "a": 2,
    "exp": "OH⁻ ions arriving at the Lead anode oxidise its surface: Pb + 2OH⁻ → PbO₂ + 2H⁺ + 2e⁻. Lead peroxide is hard, conductive, and does not dissolve in seawater — so the anode retains its shape and continues to function. This is why Lead was the preferred ICCP anode material in older systems."
  },
  {
    "id": "T10I_187",
    "cat": "ICCP",
    "q": "What are the consequences if both reference electrodes in an ICCP system fail simultaneously?",
    "opts": [
      "The system automatically reduces output to zero to prevent damage",
      "No feedback signal — controller cannot regulate; system either over-protects (paint flaking, H₂ evolution) or under-protects (corrosion continues)",
      "The system switches to sacrificial anode mode using the hull as anode",
      "Controller locks at the last valid setpoint and maintains fixed output indefinitely"
    ],
    "a": 1,
    "exp": "Reference electrodes are the feedback element of the ICCP control loop. Without feedback, the controller cannot regulate output correctly. Over-protection causes excessive OH⁻ production → hydrogen evolution → paint becomes spongy and flakes. Under-protection means hull potential is not negative enough → corrosion continues. Correct action: switch to manual mode and use a portable reference electrode to set output."
  },
  {
    "id": "T10I_188",
    "cat": "ICCP",
    "q": "Why was Lead (Pb) preferred over Platinised Titanium as an ICCP anode material in older ship installations?",
    "opts": [
      "Lead has higher electrical conductivity than platinised titanium at seawater temperatures",
      "Lead is cheaper, does not dissolve in seawater, and is unaffected by the chemical reactions at the anode surface",
      "Lead produces a stronger electrochemical potential, requiring fewer anodes per vessel",
      "Lead is lighter and easier to flush-mount in the hull without structural reinforcement"
    ],
    "a": 1,
    "exp": "Lead (Pb) anodes were preferred because: (1) significantly cheaper than platinised titanium, (2) the Pb surface converts to PbO₂ which neither dissolves nor reacts further — anode maintains shape for years, (3) unaffected by chemical reactions occurring at the anode. Platinised Titanium is more efficient per unit area but expensive. Modern systems use MMO (Mixed Metal Oxide) on titanium substrate."
  },
  {
    "id": "T10I_189",
    "cat": "ICCP",
    "q": "Does the ICCP protection current affect the operation of the Marine Growth Prevention System (MGPS) fitted in the same vessel?",
    "opts": [
      "Yes — ICCP current raises hull potential which augments the MGPS copper ion output",
      "Yes — excess ICCP current can electrolyse the MGPS copper anodes prematurely, reducing their life",
      "No — MGPS uses its own dedicated electrolysis circuit in the sea chests; it is entirely independent of ICCP",
      "No — because ICCP is switched off whenever MGPS is active to prevent interference"
    ],
    "a": 2,
    "exp": "MGPS and ICCP are fully independent systems. MGPS uses a separate low-current circuit (1–2 A) with copper and aluminium anodes inside the sea chests to generate Cu²⁺ ions (<2 ppb) and an aluminium oxide anti-corrosive layer. ICCP protects the external hull using impressed DC and has no electrical connection to the MGPS circuit. Both can run simultaneously."
  },
  {
    "id": "T10I_190",
    "cat": "Shaft Earthing",
    "q": "In shaft earthing systems, what does the term 'bedding' refer to, and why is it necessary?",
    "opts": [
      "Applying a conductive grease layer between the silver band and shaft to reduce contact resistance permanently",
      "The initial run-in period during which the carbon brushes or silver band make progressive metallic contact with the shaft surface, establishing reliable electrical continuity",
      "Installing rubber isolation mounts under the bearing pedestals to prevent stray vibration currents",
      "The process of aligning shaft centreline with the earthing brush assembly to within 0.1 mm tolerance"
    ],
    "a": 1,
    "exp": "Bedding is the run-in process where the shaft earthing device (carbon brush pressing on a slip ring, or silver band) makes proper metallic contact with the rotating shaft surface. During initial operation, the contact surfaces micro-conform to each other, eliminating high-resistance air gaps. Until bedding is complete, earth continuity is unreliable — meaning the oil-film insulation in the stern tube bearing may allow shaft voltage build-up and spark erosion of bearing surfaces."
  }

]);
window.loadQuizzes("T15_FireFighting", [
  {
    "q": "Why is CO2 unsuitable for a deep fat fryer (Class F) fire?",
    "a": "Does not cool oil below auto-ignition temperature; high-pressure blast scatters burning oil",
    "opts": ["CO2 reacts with cooking oil producing toxic cyanide gas", "CO2 conducts electricity at high galley temperatures", "CO2 causes violent steam explosion when contacting boiling oil", "Does not cool oil below auto-ignition temperature; high-pressure blast scatters burning oil"],
    "exp": "Class F needs wet chemical extinguisher (saponification reaction creates soapy non-flammable cooling layer on oil surface). CO2 only smothers - oil auto-ignites when oxygen returns. Also the CO2 jet can splash 300\u00b0C burning oil across the galley.",
    "cat": "CLASSES",
    "id": "T15F_001"
  },
  {
    "q": "Best extinguisher for electrical fire on engine room bottom platform?",
    "a": "CO2 - non-conductive and leaves no residue on electrical components",
    "opts": ["DCP - chemically reacts with burning copper", "AFFF foam - non-conductive blanket over cables", "Water mist - fine droplets don't conduct electricity", "CO2 - non-conductive and leaves no residue on electrical components"],
    "exp": "Class E fires: CO2 is preferred - electrically non-conductive AND leaves no residue (equipment can be restored). DCP is also acceptable but leaves damaging powder residue on electronics. Water and foam are highly conductive - electrocution risk. Use CO2 on live switchboard fires.",
    "cat": "EXTINGUISHERS",
    "id": "T15F_002"
  },
  {
    "q": "CO2 expansion ratio and minimum engine room flooding concentration?",
    "a": "Expansion ratio 1:450; minimum 34% concentration by volume",
    "opts": ["Expansion 1:200; minimum 15% concentration", "Expansion 1:450; minimum 34% concentration by volume", "Expansion 1:1000; minimum 50% concentration", "Expansion 1:20; minimum 8% concentration"],
    "exp": "Liquid CO2 expands 450 times its volume at atmospheric pressure. Engine room requires minimum 34% CO2 by volume to displace oxygen below the 15% combustion limit. CO2 quantity calculated: (net hold volume \u00d7 0.34) / 0.45 (expansion factor per kg). Two-valve system ensures deliberate release.",
    "cat": "CO2_SYSTEM",
    "id": "T15F_003"
  },
  {
    "q": "Most critical check before releasing the fixed CO2 total flooding system?",
    "a": "Complete verified headcount - every crew member evacuated from the protected space",
    "opts": ["Emergency generator confirmed running", "All engines completely cooled below 100\u00b0C", "Bilge holding tank emptied to prevent overflow", "Complete verified headcount - every crew member evacuated from the protected space"],
    "exp": "CO2 at 34% is instantly lethal - displaces oxygen to fatal levels. A person trapped in a CO2-flooded space dies within minutes. Verified headcount is non-negotiable - 100% of personnel must be confirmed out before ANY valve is operated. Never assume.",
    "cat": "CO2_SYSTEM",
    "id": "T15F_004"
  },
  {
    "q": "Purpose of the pilot valve in a CO2 flooding system?",
    "a": "Opened first - releases CO2 to sound 20-30 second pneumatic pre-discharge alarm before main valve opened",
    "opts": ["Main valve opened first; pilot controls exact expansion ratio", "Pilot valve only used for annual survey testing without releasing cylinders", "Pilot injects oxygen into CO2 stream to prevent piping from freezing", "Opened first - releases CO2 to sound 20-30 second pneumatic pre-discharge alarm before main valve opened"],
    "exp": "Two-valve system: Pilot valve first \u2192 small CO2 to alarm horn giving 20-30 seconds warning. Main valve second \u2192 discharges full bank. The delay allows anyone remaining in the space (despite headcount) to escape. After main valve: all ventilation, openings, dampers must be closed to maintain CO2 concentration.",
    "cat": "CO2_SYSTEM",
    "id": "T15F_005"
  },
  {
    "q": "Mandatory waiting time before re-entry into CO2-flooded engine room?",
    "a": "Minimum 24 hours - ensures deep-seated fires completely cooled, prevents re-ignition when oxygen introduced",
    "opts": ["1 hour - CO2 dissipates through funnel", "10 minutes - high-pressure CO2 instantly freezes fire source", "Immediately - provided heat detectors returned to normal", "Minimum 24 hours - ensures deep-seated fires completely cooled, prevents re-ignition when oxygen introduced"],
    "exp": "CO2 has very little cooling effect - it only smothers. Hot metal components (bearings, engine block, cables) remain at high temperature. Introducing fresh oxygen too soon \u2192 catastrophic backdraft/re-ignition. 24 hours minimum. Re-entry: SCBA + portable gas detector (check O2 >20.9%).",
    "cat": "CO2_SYSTEM",
    "id": "T15F_006"
  },
  {
    "q": "Primary difference between low and high expansion foam?",
    "a": "Low expansion (up to 20:1) blankets liquid surface fires (tanker decks); high expansion (200:1 to 1000:1) floods enclosed spaces (RoRo decks)",
    "opts": ["Low expansion for electrical fires only; high expansion specifically for galley Class F", "Low expansion cools structural steel; high expansion smothers cargo holds", "No functional difference - low expansion is older technology", "Low expansion (up to 20:1) blankets liquid surface fires (tanker decks); high expansion (200:1 to 1000:1) floods enclosed spaces (RoRo decks)"],
    "exp": "Low expansion foam: dense wet foam flows across liquid surface creating smothering/cooling blanket (Class B). Used: tanker deck monitors, pump rooms. High expansion foam: massive light dry bubble volume rapidly fills entire 3D space displacing oxygen. Used: RoRo vehicle decks, large cargo holds.",
    "cat": "FOAM",
    "id": "T15F_007"
  },
  {
    "q": "Standard rated rupture temperature for a RED sprinkler bulb?",
    "a": "68\u00b0C",
    "opts": ["58\u00b0C", "68\u00b0C", "93\u00b0C", "141\u00b0C"],
    "exp": "Red bulb = 68\u00b0C (standard for accommodation, offices, public spaces). Yellow = 79\u00b0C. Green = 93\u00b0C (warmer areas). Blue = 141\u00b0C (very hot areas). Orange = 58\u00b0C (some heated spaces). The glycerine liquid inside expands, shatters bulb, releases plug at rated temperature.",
    "cat": "SPRINKLER",
    "id": "T15F_008"
  },
  {
    "q": "PFOS ban effective date for firefighting foam on ships?",
    "a": "First scheduled survey on or after 1 January 2026 - PFOS foam must be replaced with PFOS-free alternatives",
    "opts": ["1 January 2020 - same as SOx global cap", "1 January 2026 - immediate ban with no grace period", "First scheduled survey on or after 1 January 2026 - PFOS foam must be replaced with PFOS-free alternatives", "1 January 2030 - aligned with IMO 2030 decarbonisation target"],
    "exp": "PFOS (Perfluorooctane Sulfonate) = persistent organic pollutant, severe environmental and health risks. Replace with C6 AFFF or fluorine-free foam (FFF) before first survey after 1 January 2026. ETO must check current foam inventory, procure approved replacement, dispose of PFOS foam at shore facility.",
    "cat": "REGULATIONS",
    "id": "T15F_009"
  },
  {
    "q": "How does an ionisation smoke detector work?",
    "a": "Americium-241 (Am-241, alpha emitter) ionises air between electrodes - smoke particles attach to ions reducing current \u2192 alarm",
    "opts": ["Cobalt-60 gamma rays heat bimetallic strip; smoke cools strip breaking circuit", "Uranium-235 creates magnetic field; carbon in smoke disrupts flux inducing alarm voltage", "Strontium-90 beta particles create optical beam; smoke breaks beam triggering alarm", "Americium-241 (Am-241, alpha emitter) ionises air between electrodes - smoke particles attach to ions reducing current \u2192 alarm"],
    "exp": "Am-241 half-life = 432 years (safe alpha emitter, cannot penetrate housing). Alpha particles ionise air \u2192 small current flows between electrodes. Smoke particles attach to ions \u2192 current drops \u2192 alarm. Best for fast-flaming fires with small combustion particles. More prone to steam/dust false alarms than photoelectric.",
    "cat": "DETECTORS",
    "id": "T15F_010"
  },
  {
    "q": "Why are photoelectric detectors preferred near galleys and shower rooms?",
    "a": "Better at sensing slow smouldering fires; far less prone to false alarms from cooking steam or high humidity",
    "opts": ["Use radioactive isotope neutralising toxic gases from cooking oil", "Only trigger on open flames - ignore all smoke and steam", "Draw power from lighting circuit - immune to MSB blackouts", "Better at sensing slow smouldering fires; far less prone to false alarms from cooking steam or high humidity"],
    "exp": "Photoelectric uses LED + photodetector. Visible smoke particles scatter light onto sensor \u2192 alarm. Sensitive to large visible particles from smouldering fires. Steam droplets (from showers, galley) are much smaller and don't scatter enough light. Better false alarm discrimination near high-humidity areas.",
    "cat": "DETECTORS",
    "id": "T15F_011"
  },
  {
    "q": "Rate-of-Rise (ROR) heat detector - triggering criterion?",
    "a": "Triggers when temperature rises faster than 8-10\u00b0C per minute - earlier warning than fixed temperature detectors",
    "opts": ["Triggers when temperature exceeds fixed 93\u00b0C threshold", "Triggers when air pressure in sealed tube rises above 1500 mmWG", "Calculates smoke-to-heat ratio over 30-minute period", "Triggers when temperature rises faster than 8-10\u00b0C per minute - earlier warning than fixed temperature detectors"],
    "exp": "ROR detects rapid temperature increases characteristic of fast-developing fires. Triggers BEFORE the fixed temperature setpoint is reached. Combined with fixed temperature detection (dual detector): even earlier warning. Sensitive to draughts/opening doors - can false alarm if temperature changes quickly naturally.",
    "cat": "DETECTORS",
    "id": "T15F_012"
  },
  {
    "q": "Why use specialised UV test lamp (not a lighter) to test UV flame detector?",
    "a": "Naked flame in machinery space = severe explosion risk near fuel sources; heat can permanently damage sensitive UV sensor lens",
    "opts": ["Lighter flame produces no UV radiation so detector appears broken", "Lighter instantly activates local water mist nozzles flooding electrical panels", "Lighter causes Am-241 to leak alpha particles into engine room", "Naked flame in machinery space = severe explosion risk near fuel sources; heat can permanently damage sensitive UV sensor lens"],
    "exp": "Engine rooms contain fuel, oil, and flammable gases - naked flame = explosion/fire risk. UV detectors respond to REAL flames. Also: close proximity of hot flame can overheat and crack the UV-transparent detector lens permanently. Use only intrinsically safe approved UV test lamp provided by manufacturer.",
    "cat": "DETECTORS",
    "id": "T15F_013"
  },
  {
    "q": "SOLAS minimum pressure for the independent emergency fire pump?",
    "a": "0.3 MPa (3 bar) simultaneously supplying two jets of water at any hydrant",
    "opts": ["0.1 MPa (1 bar)", "0.3 MPa (3 bar) simultaneously supplying two jets of water at any hydrant", "1.0 MPa (10 bar)", "0.7 MPa (7 bar)"],
    "exp": "SOLAS II-2/10: emergency fire pump (located OUTSIDE main machinery space, independent power) must maintain minimum 0.3 MPa (3 bar) at any hydrant while simultaneously delivering two fire hose jets. This pump is the last resort when main fire pumps are inaccessible due to flooding or fire.",
    "cat": "PUMPS",
    "id": "T15F_014"
  },
  {
    "q": "Purpose of magnesium stearate in DCP extinguishers?",
    "a": "Anti-caking agent - keeps powder particles free-flowing and water-repellent despite ship vibration",
    "opts": ["Primary active ingredient interrupting free radical chain reaction", "Provides propellant pressure to empty cylinder when heated", "Reacts with cooking oil to form soapy non-flammable foam", "Anti-caking agent - keeps powder particles free-flowing and water-repellent despite ship vibration"],
    "exp": "DCP powder (sodium or potassium bicarbonate) would absorb humidity and compact into a solid unusable block under constant ship vibration without magnesium stearate coating. The coating makes each particle water-repellent and prevents agglomeration. Bicarbonate itself is the active fire suppressant - interrupts chemical chain reaction.",
    "cat": "EXTINGUISHERS",
    "id": "T15F_015"
  },
  {
    "q": "Zener diode in end-of-line (EOL) base of conventional fire alarm detector?",
    "a": "Allows panel to distinguish three states: normal monitoring / short-circuit fire alarm / open-circuit wire fault",
    "opts": ["Surge protector preventing 220V AC from entering 24V DC alarm panel", "Amplifies weak Am-241 signal for long cable runs to bridge", "Converts analogue smoke density to digital Modbus signal for IAS", "Allows panel to distinguish three states: normal monitoring / short-circuit fire alarm / open-circuit wire fault"],
    "exp": "EOL resistor + Zener diode: Standby = specific current level. Detector activates = current increases (bypasses Zener breakdown threshold). Wire breaks = zero current. Three distinct current levels allow fire panel to distinguish normal/fire/fault states. SOLAS requires visual and audible fault discrimination.",
    "cat": "FIRE_ALARM",
    "id": "T15F_016"
  },
  {
    "q": "Massive arcing electrical fire inside live 440V MSB - immediate safest action?",
    "a": "Do NOT approach - trip all generators from remote emergency stops to cause blackout, then apply CO2 or DCP",
    "opts": ["Open MSB cabinet and discharge foam directly onto busbars", "Connect fire hose and apply solid water jet to cool burning copper", "Manually rack out burning generator ACB with metal racking handle", "Do NOT approach - trip all generators from remote emergency stops to cause blackout, then apply CO2 or DCP"],
    "exp": "MSB arcing fire: arc energy = I\u00b2R, potentially megawatts of energy. Approaching = arc flash death risk. Water and foam = electrocution. The only safe approach: blackout (kill all power sources remotely) \u2192 arc stops \u2192 emergency generator starts automatically within 45 seconds \u2192 then apply CO2 or DCP to smouldering cables safely.",
    "cat": "EMERGENCIES",
    "id": "T15F_017"
  },
  {
    "q": "Fixed fire fighting and ventilation requirements for a ship's paint locker?",
    "a": "Fixed CO2 smothering system (40% concentration) with external release + mechanical ventilation extraction at bottom",
    "opts": ["High expansion foam system; ventilation blowing fresh air down from ceiling", "Exempt from fixed systems if two 9-litre water extinguishers stored inside", "Fixed sprinkler system with 68\u00b0C bulbs; ventilation extraction at highest point", "Fixed CO2 smothering system (40% concentration) with external release + mechanical ventilation extraction at bottom"],
    "exp": "Paint locker = Class B flammable liquid risk (solvents, thinners). SOLAS II-2/10: fixed CO2 smothering at 40% concentration (higher than ER due to solvent volatility). Release station OUTSIDE locker. Ventilation extraction at BOTTOM because solvent vapours are heavier than air - must be extracted from below to prevent explosive accumulation.",
    "cat": "REGULATIONS",
    "id": "T15F_018"
  },
  {
    "q": "Why is pumping water into a sealed cargo hold fire dangerous?",
    "a": "Dilutes CO2 system effectiveness; can react with undeclared dangerous goods; adds weight creating stability risk",
    "opts": ["Turns to steam and blows hatch covers off the vessel", "Violates MARPOL Annex V by creating oily water", "Blocks infrared beams of smoke detection system", "Dilutes CO2 system effectiveness; can react with undeclared dangerous goods; adds weight creating stability risk"],
    "exp": "Water into CO2-flooded hold: dilutes CO2 below 34% concentration \u2192 re-ignition possible. Weight of water: 1 m\u00b3 = 1 tonne. Large holds can hold hundreds of tonnes of water \u2192 massive free-surface effect \u2192 capsize risk. Undeclared Class 4.3 (water-reactive) cargo + water = violent chemical reaction, explosion.",
    "cat": "EMERGENCIES",
    "id": "T15F_019"
  },
  {
    "q": "Purpose of condensate trap (drain box) in aspirating smoke detection system?",
    "a": "Collects internal condensation preventing water from reaching optical chamber - prevents false alarms and corrosion",
    "opts": ["Stores compressed air for automatic pipe blow-out every 24 hours", "Safely collects radioactive alpha particles leaking from ionisation sensors", "Acts as barrier preventing CO back-flow into accommodation", "Collects internal condensation preventing water from reaching optical chamber - prevents false alarms and corrosion"],
    "exp": "Temperature differentials cause condensation inside PVC sampling tubes. Without drain boxes, water accumulates and is sucked into the VESDA/ASD laser detection chamber. Water droplets scatter laser light identically to smoke particles \u2192 false alarms. Also causes PCB corrosion. Drain boxes at lowest points are essential maintenance items.",
    "cat": "DETECTORS",
    "id": "T15F_020"
  },
  {
    "q": "What are the three essential elements of the traditional 'Fire Triangle'?",
    "a": "Fuel, Oxygen, and Heat",
    "opts": ["Combustible material, Carbon Dioxide, and Spark", "Fuel, Nitrogen, and Heat", "Carbon, Oxygen, and Ignition", "Fuel, Oxygen, and Heat"],
    "exp": "Combustion requires these three elements simultaneously. Removing any one of these three sides (cooling, smothering, or starving) will extinguish the fire.",
    "cat": "CLASSES",
    "id": "T15F_021"
  },
  {
    "q": "What fourth element converts the Fire Triangle into the modern 'Fire Tetrahedron'?",
    "a": "The Uninhibited Chemical Chain Reaction",
    "opts": ["Atmospheric Pressure", "The Uninhibited Chemical Chain Reaction", "Flammable Vaporization", "Radiant Heat Transfer"],
    "exp": "Modern fire science includes the free radical chain reaction. Extinguishing agents like FM-200, Halon, and Dry Chemical Powder work specifically by interrupting this chemical chain reaction rather than just cooling or smothering.",
    "cat": "CLASSES",
    "id": "T15F_022"
  },
  {
    "q": "What firefighting method is defined as 'Smothering'?",
    "a": "Removing or displacing the Oxygen supply from the fire",
    "opts": ["Lowering the temperature below the ignition point", "Interrupting the chemical chain reaction", "Removing or displacing the Oxygen supply from the fire", "Isolating the fuel supply valve"],
    "exp": "Smothering agents like CO2, Foam, and sand blanket the fire or displace the air, reducing the oxygen concentration below the ~16% minimum required to sustain combustion.",
    "cat": "CLASSES",
    "id": "T15F_023"
  },
  {
    "q": "What firefighting method is defined as 'Starvation'?",
    "a": "Removing the combustible fuel source from the fire",
    "opts": ["Displacing oxygen using an inert gas", "Removing the combustible fuel source from the fire", "Applying water to absorb heat", "Using dry powder to absorb free radicals"],
    "exp": "Starvation involves physically removing the fuel\u2014such as closing a quick-closing valve on a ruptured diesel pipe, preventing more fuel from feeding the flames.",
    "cat": "CLASSES",
    "id": "T15F_024"
  },
  {
    "q": "Which materials define a 'Class A' fire?",
    "a": "Solid carbonaceous materials like wood, paper, rope, fabric, and plastics",
    "opts": ["Energized electrical equipment", "Solid carbonaceous materials like wood, paper, rope, fabric, and plastics", "Combustible metals like magnesium", "Flammable liquids and greases"],
    "exp": "Class A fires leave an 'Ash'. They involve ordinary combustible solids. Water is the most effective extinguishing agent due to its deep cooling and soaking properties.",
    "cat": "CLASSES",
    "id": "T15F_025"
  },
  {
    "q": "What is the most effective extinguishing agent for a Class A fire?",
    "a": "Water",
    "opts": ["Water", "Dry Chemical Powder", "CO2", "Foam"],
    "exp": "Water has a massive heat absorption capacity. It deeply cools and soaks solid combustibles (like mattresses or rope), preventing deep-seated embers from re-igniting.",
    "cat": "CLASSES",
    "id": "T15F_026"
  },
  {
    "q": "Which materials define a 'Class B' fire?",
    "a": "Flammable liquids and gases like fuel oil, petrol, paint thinner, and LPG",
    "opts": ["Cooking fats and deep fryer oils", "Solid plastics and rubber", "Electrical switchboards", "Flammable liquids and gases like fuel oil, petrol, paint thinner, and LPG"],
    "exp": "Class B fires involve burning liquids. The fuel itself boils and produces flammable vapors. Blanketing the surface is required to extinguish it.",
    "cat": "CLASSES",
    "id": "T15F_027"
  },
  {
    "q": "What is the primary and most effective extinguishing agent for a large Class B liquid spill fire?",
    "a": "Foam",
    "opts": ["Halon", "Water Jet", "Foam", "Wet Chemical"],
    "exp": "Foam creates a thick, unbroken physical blanket over the burning liquid. This cuts off oxygen and traps the flammable vapors from escaping the liquid surface.",
    "cat": "CLASSES",
    "id": "T15F_028"
  },
  {
    "q": "Why must a solid jet of water NEVER be used on a Class B (flammable liquid) fire?",
    "a": "Water is heavier than oil; it sinks and violently scatters the burning liquid, rapidly spreading the fire",
    "opts": ["Water evaporates too quickly to cool the oil", "Water is heavier than oil; it sinks and violently scatters the burning liquid, rapidly spreading the fire", "Water conducts the heat directly back to the operator", "Water chemically reacts with oil to create explosive hydrogen"],
    "exp": "Shooting a high-pressure water jet into a pan of burning diesel acts like a splash bomb, throwing burning fuel across the entire engine room.",
    "cat": "CLASSES",
    "id": "T15F_029"
  },
  {
    "q": "Which materials define a 'Class C' fire?",
    "a": "Flammable gases under pressure (e.g., LPG, acetylene, hydrogen)",
    "opts": ["Flammable gases under pressure (e.g., LPG, acetylene, hydrogen)", "Combustible metals", "Cooking oils", "Energized electrical panels"],
    "exp": "Class C strictly covers pressurized gas fires. The most important rule for Class C is to isolate the supply valve to starve the fire before attempting to extinguish the flame.",
    "cat": "CLASSES",
    "id": "T15F_030"
  },
  {
    "q": "What is the absolute first priority when dealing with a Class C (pressurized gas) fire?",
    "a": "Isolate the gas supply valve to starve the fire",
    "opts": ["Spray a solid water jet directly into the flame", "Isolate the gas supply valve to starve the fire", "Flood the area with high-expansion foam", "Use CO2 to freeze the gas pipe"],
    "exp": "If you extinguish a pressurized gas flame without shutting off the source, invisible, highly explosive gas will fill the compartment and eventually detonate. Shutting the valve is always priority one.",
    "cat": "CLASSES",
    "id": "T15F_031"
  },
  {
    "q": "Which materials define a 'Class D' fire?",
    "a": "Combustible metals like magnesium, titanium, sodium, and potassium",
    "opts": ["Deep fat fryers", "High-voltage transformers", "Combustible metals like magnesium, titanium, sodium, and potassium", "Rubber and synthetic plastics"],
    "exp": "Class D fires involve burning metals, which burn at insanely high temperatures (often >2000\u00b0C) and can sustain their own oxygen supply.",
    "cat": "CLASSES",
    "id": "T15F_032"
  },
  {
    "q": "What is the ONLY acceptable extinguishing agent for a Class D (combustible metal) fire?",
    "a": "Special Dry Powder (e.g., graphite powder, sodium chloride base)",
    "opts": ["Special Dry Powder (e.g., graphite powder, sodium chloride base)", "Water mist", "Standard CO2", "AFFF Foam"],
    "exp": "Combustible metals react violently with water, foam, and even CO2. You must use specialized, inert dry powders (Class D powders) that physically bury and melt over the metal to seal out air.",
    "cat": "CLASSES",
    "id": "T15F_033"
  },
  {
    "q": "What happens if water is applied to a Class D (magnesium or sodium) fire?",
    "a": "A violent, exothermic, and explosive chemical reaction occurs, generating highly explosive hydrogen gas",
    "opts": ["The metal absorbs the water and turns into a heavy slag", "A violent, exothermic, and explosive chemical reaction occurs, generating highly explosive hydrogen gas", "The water creates a harmless steam cloud that smothers the fire", "The water instantly freezes the metal"],
    "exp": "Metals like sodium strip the oxygen directly out of H2O, leaving free hydrogen gas, which instantly detonates in the heat of the fire. Water acts as an accelerant, not an extinguisher, for Class D fires.",
    "cat": "CLASSES",
    "id": "T15F_034"
  },
  {
    "q": "Which materials define a 'Class E' fire?",
    "a": "Energized electrical equipment (e.g., switchboards, motors, live wiring)",
    "opts": ["Combustible engine room liquids", "Exhaust gas economizer soot", "Galley exhaust ducts", "Energized electrical equipment (e.g., switchboards, motors, live wiring)"],
    "exp": "Class E signifies a shock hazard. If the power is successfully isolated and confirmed dead, the fire technically reverts to a Class A or B fire depending on what is burning (plastics/oil).",
    "cat": "CLASSES",
    "id": "T15F_035"
  },
  {
    "q": "What are the preferred extinguishing agents for a Class E (electrical) fire?",
    "a": "CO2, Dry Chemical Powder (DCP), or FM-200",
    "opts": ["Water and Low-Expansion Foam", "CO2, Dry Chemical Powder (DCP), or FM-200", "Wet Chemical and Sand", "AFFF Foam and Water Mist"],
    "exp": "You must use electrically non-conductive agents. CO2 is the absolute favorite because it leaves no residue, protecting the surviving electronics from collateral damage.",
    "cat": "CLASSES",
    "id": "T15F_036"
  },
  {
    "q": "Why must Water or Foam NEVER be used on a Class E (electrical) fire while it is energized?",
    "a": "They are highly conductive and create a lethal risk of electrocuting the firefighter holding the extinguisher",
    "opts": ["They cause the copper wiring to catch fire", "They are highly conductive and create a lethal risk of electrocuting the firefighter holding the extinguisher", "They create toxic chlorine gas when exposed to 440V", "They short-circuit the ship's main battery bank"],
    "exp": "A solid stream of water or wet foam provides a direct electrical path from the 440V busbar straight up the hose to the human operator.",
    "cat": "CLASSES",
    "id": "T15F_037"
  },
  {
    "q": "Which materials define a 'Class F' fire?",
    "a": "Cooking oils and animal fats (e.g., deep fat fryers in the galley)",
    "opts": ["Heavy fuel oil in the engine room", "Electrical switchboards", "Cooking oils and animal fats (e.g., deep fat fryers in the galley)", "Combustible metals"],
    "exp": "Class F (or Class K in some regions) is strictly for kitchen oils. These burn at temperatures significantly higher than typical Class B petroleum fires.",
    "cat": "CLASSES",
    "id": "T15F_038"
  },
  {
    "q": "What is the ONLY effective and approved extinguishing agent for a Class F (cooking fat) fire?",
    "a": "Wet Chemical (potassium acetate or potassium citrate solution)",
    "opts": ["High Expansion Foam", "Dry Chemical Powder", "Wet Chemical (potassium acetate or potassium citrate solution)", "CO2"],
    "exp": "Wet chemical extinguishers react uniquely with boiling cooking oil, rapidly cooling it and creating a thick, soapy crust over the surface that prevents re-ignition.",
    "cat": "CLASSES",
    "id": "T15F_039"
  },
  {
    "q": "What is the chemical reaction called when a Wet Chemical agent interacts with burning cooking oil in a Class F fire?",
    "a": "Saponification",
    "opts": ["Pyrolysis", "Sublimation", "Saponification", "Oxidation"],
    "exp": "Saponification is the process of making soap. The alkaline wet chemical reacts with the fatty acids in the oil to form a non-flammable soapy foam crust, permanently sealing the surface.",
    "cat": "CLASSES",
    "id": "T15F_040"
  },
  {
    "q": "Why is it extremely dangerous to use a Water extinguisher on a Class F (galley deep fryer) fire?",
    "a": "The water instantly boils, causing a violent steam explosion that splatters burning oil all over the galley and the operator",
    "opts": ["The water instantly boils, causing a violent steam explosion that splatters burning oil all over the galley and the operator", "The water dissolves into the oil, making it burn hotter", "The water creates an electrically conductive path to the stove", "The water cools the oil too quickly, shattering the steel fryer"],
    "exp": "Water expands 1700 times when converting to steam. If water sinks below the surface of 350\u00b0C burning oil, it instantly flashes to steam, throwing the burning oil into the air like a bomb.",
    "cat": "CLASSES",
    "id": "T15F_041"
  },
  {
    "q": "Why is a CO2 extinguisher generally discouraged as the primary agent for a Class F (deep fat fryer) fire?",
    "a": "The high-pressure discharge can violently scatter the burning oil, and CO2 lacks the cooling capacity to prevent the super-heated oil from instantly re-igniting",
    "opts": ["CO2 is highly toxic when mixed with cooking oil", "CO2 freezes the oil into a solid, explosive block", "The high-pressure discharge can violently scatter the burning oil, and CO2 lacks the cooling capacity to prevent the super-heated oil from instantly re-igniting", "CO2 reacts with the oil to form lethal carbon monoxide"],
    "exp": "While CO2 will temporarily snuff the flame, the deep fryer oil remains well above its auto-ignition temperature. The moment the CO2 gas dissipates (seconds later), the oxygen returns and the hot oil erupts back into flames.",
    "cat": "CLASSES",
    "id": "T15F_042"
  },
  {
    "q": "What is the typical fixed fire-fighting system installed inside a ship's galley exhaust hood?",
    "a": "An automatic Wet Chemical suppression system (e.g., Ansul R-102)",
    "opts": ["A dry chemical powder duster", "A CO2 total flooding nozzle", "An automatic Wet Chemical suppression system (e.g., Ansul R-102)", "A high-expansion foam generator"],
    "exp": "The galley hood is the highest risk area for a Class F fire. A fixed wet chemical system uses heat detectors to automatically dump saponifying liquid directly onto the stoves and into the greasy exhaust ducts.",
    "cat": "CLASSES",
    "id": "T15F_043"
  },
  {
    "q": "When attempting to fight a fire in an electrical panel, what is the absolute FIRST action the ETO should take?",
    "a": "Isolate the electrical power supply to the panel if it is safe to do so",
    "opts": ["Spray dry chemical powder immediately", "Connect the grounding strap to the extinguisher", "Isolate the electrical power supply to the panel if it is safe to do so", "Open the panel doors fully to ventilate the smoke"],
    "exp": "Removing the energy source (starvation of the ignition source) makes the fire significantly easier and safer to fight, instantly removing the electrocution hazard and preventing continuous arcing from reigniting the plastics.",
    "cat": "CLASSES",
    "id": "T15F_044"
  },
  {
    "q": "Why is Dry Chemical Powder (DCP) highly effective at knocking down flames quickly?",
    "a": "The powder particles physically bind with free radicals in the flame, violently interrupting the chemical chain reaction of combustion",
    "opts": ["The powder rapidly absorbs all the oxygen in the room", "The powder particles physically bind with free radicals in the flame, violently interrupting the chemical chain reaction of combustion", "The powder freezes the fuel to -50\u00b0C", "The powder turns into water when exposed to heat"],
    "exp": "DCP doesn't just smother; it acts chemically. The microscopic powder particles provide a massive surface area that captures the free radicals required to keep the flame alive, halting combustion almost instantly.",
    "cat": "CLASSES",
    "id": "T15F_045"
  },
  {
    "q": "Which Class of fire corresponds to burning wood, cardboard, and rope?",
    "a": "Class A",
    "opts": ["Class C", "Class D", "Class B", "Class A"],
    "exp": "Class A (Ash-producing) covers common solid combustibles.",
    "cat": "CLASSES",
    "id": "T15F_046"
  },
  {
    "q": "Which Class of fire corresponds to a ruptured Heavy Fuel Oil pipe spraying onto a hot exhaust?",
    "a": "Class B",
    "opts": ["Class B", "Class E", "Class A", "Class C"],
    "exp": "Class B (Boiling liquids) covers all flammable liquid and oil fires.",
    "cat": "CLASSES",
    "id": "T15F_047"
  },
  {
    "q": "Which Class of fire corresponds to a leaking Acetylene welding bottle?",
    "a": "Class C",
    "opts": ["Class A", "Class D", "Class C", "Class B"],
    "exp": "Class C covers all pressurized combustible gases.",
    "cat": "CLASSES",
    "id": "T15F_048"
  },
  {
    "q": "Which Class of fire corresponds to a burning Main Switchboard?",
    "a": "Class E",
    "opts": ["Class E", "Class C", "Class F", "Class D"],
    "exp": "Class E covers energized electrical equipment fires.",
    "cat": "CLASSES",
    "id": "T15F_049"
  },
  {
    "q": "How does Foam extinguish a Class B liquid fire?",
    "a": "It forms a continuous, unbroken physical blanket over the liquid surface, smothering the oxygen supply and sealing in the flammable vapors",
    "opts": ["It violently sinks to the bottom and cools the tank floor", "It dissolves the oil, turning it into non-flammable water", "It forms a continuous, unbroken physical blanket over the liquid surface, smothering the oxygen supply and sealing in the flammable vapors", "It interrupts the chemical chain reaction of the flame"],
    "exp": "Foam is lighter than oil. It floats on top, separating the fuel from the air (oxygen) and preventing the heat from boiling off more fuel vapors.",
    "cat": "CLASSES",
    "id": "T15F_050"
  },
  {
    "q": "What does the acronym AFFF stand for in firefighting foam?",
    "a": "Aqueous Film-Forming Foam",
    "opts": ["Automatic Fire-Fighting Fluid", "Aerated Flammable Fluid Foam", "Asynchronous Fire Fighting Formula", "Aqueous Film-Forming Foam"],
    "exp": "AFFF relies on fluorochemical surfactants to rapidly spread an incredibly thin, aqueous film across the surface of a burning liquid, sealing it off faster than traditional protein foams.",
    "cat": "FOAM",
    "id": "T15F_051"
  },
  {
    "q": "What defines 'Low Expansion' foam?",
    "a": "Foam with an expansion ratio of up to 20:1, creating a dense, wet blanket",
    "opts": ["Foam that expands only when exposed to extreme freezing temperatures", "Foam with an expansion ratio of up to 20:1, creating a dense, wet blanket", "Foam with an expansion ratio of 200:1 to 1000:1", "Foam designed strictly for use inside electrical panels"],
    "exp": "Low expansion means 1 liter of foam solution creates up to 20 liters of foam. It is heavy, wet, and flows easily across decks and liquid surfaces.",
    "cat": "FOAM",
    "id": "T15F_052"
  },
  {
    "q": "Where is Low Expansion foam primarily used onboard ships?",
    "a": "In deck foam monitors on oil tankers to protect cargo deck surfaces, and in pump room foam boxes",
    "opts": ["Inside the galley deep fat fryers", "Inside the main switchboard", "Flooding entire large Ro-Ro vehicle decks", "In deck foam monitors on oil tankers to protect cargo deck surfaces, and in pump room foam boxes"],
    "exp": "Because it is heavy and cohesive, it is perfect for spraying outdoors (via monitors) over open cargo decks where wind would otherwise blow lighter foam away.",
    "cat": "FOAM",
    "id": "T15F_053"
  },
  {
    "q": "What defines 'High Expansion' foam?",
    "a": "Foam with an expansion ratio between 200:1 and 1000:1, creating massive volumes of light, dry bubbles",
    "opts": ["Foam that expands only in a complete vacuum", "Foam that chemically expands to destroy electrical wiring", "Foam with an expansion ratio between 200:1 and 1000:1, creating massive volumes of light, dry bubbles", "Foam with an expansion ratio of up to 20:1"],
    "exp": "High expansion foam uses blower fans to whip a tiny amount of water and concentrate into massive, room-filling mountains of bubbles.",
    "cat": "FOAM",
    "id": "T15F_054"
  },
  {
    "q": "Where is High Expansion foam primarily used onboard?",
    "a": "To rapidly flood and suffocate fires in large enclosed spaces like Ro-Ro vehicle decks and large machinery spaces",
    "opts": ["Inside portable 9-liter fire extinguishers", "Inside the fresh water generator", "On open weather decks to fight crude oil spills", "To rapidly flood and suffocate fires in large enclosed spaces like Ro-Ro vehicle decks and large machinery spaces"],
    "exp": "Because it is so light and voluminous, it can quickly fill a 3-story Ro-Ro deck from floor to ceiling, physically displacing the air and suffocating burning vehicles. It cannot be used outdoors because the wind blows it away.",
    "cat": "FOAM",
    "id": "T15F_055"
  },
  {
    "q": "How does a High Expansion foam generator create the foam?",
    "a": "It uses a powerful blower fan to force ambient air through a mesh net that is continuously saturated with foam solution",
    "opts": ["It chemically reacts the liquid with magnesium stearate", "It uses a powerful blower fan to force ambient air through a mesh net that is continuously saturated with foam solution", "It uses high-pressure CO2 to violently whip the liquid", "It boils the liquid into steam bubbles using an electric heater"],
    "exp": "It works exactly like blowing bubbles through a soapy wand, but on an industrial scale using high-power ventilation fans.",
    "cat": "FOAM",
    "id": "T15F_056"
  },
  {
    "q": "What does the acronym PFOS stand for?",
    "a": "Perfluorooctane Sulfonate",
    "opts": ["Phosphorus Flame Output Suppressor", "Primary Fire Operating Sub-system", "Perfluorooctane Sulfonate", "Poly-Foam Oxidizing System"],
    "exp": "PFOS is a highly effective, synthetic fluorochemical that was heavily used in AFFF concentrates for decades to give the foam its incredible film-forming abilities.",
    "cat": "FOAM",
    "id": "T15F_057"
  },
  {
    "q": "Why has PFOS been strictly banned globally for use in firefighting foams?",
    "a": "It is a Persistent Organic Pollutant (POP) that does not break down in nature, accumulates in the food chain, and causes severe cancer and reproductive harm",
    "opts": ["It severely corrodes stainless steel piping", "It is a Persistent Organic Pollutant (POP) that does not break down in nature, accumulates in the food chain, and causes severe cancer and reproductive harm", "It reacts with seawater to form toxic chlorine gas", "It randomly explodes when stored in hot engine rooms"],
    "exp": "PFOS is a 'forever chemical'. Once sprayed into the ocean or soil, it never degrades. Global environmental treaties (like the Stockholm Convention) have forced the maritime industry to ban it completely.",
    "cat": "FOAM",
    "id": "T15F_058"
  },
  {
    "q": "Effective January 1, 2026, what is the new SOLAS/MARPOL regulation regarding PFOS onboard ships?",
    "a": "The use, storage, and carriage of PFOS-containing firefighting foam is strictly PROHIBITED; existing stocks must be removed to shore facilities by the first scheduled survey after this date",
    "opts": ["PFOS must be securely locked in the hazardous materials locker", "PFOS foam may only be used if mixed with 50% fresh water", "The use, storage, and carriage of PFOS-containing firefighting foam is strictly PROHIBITED; existing stocks must be removed to shore facilities by the first scheduled survey after this date", "PFOS foam is banned for training, but allowed in actual emergencies"],
    "exp": "The ban is absolute. You cannot use it, and you cannot even have it sitting in a barrel in the foam room. Class surveyors will check foam MSDS sheets; if it contains PFOS, the ship will be detained until it is pumped ashore.",
    "cat": "FOAM",
    "id": "T15F_059"
  },
  {
    "q": "If a ship discharges PFOS-containing foam into the ocean during a fire drill, what is the consequence?",
    "a": "It is a severe MARPOL violation, resulting in heavy fines and port state detention",
    "opts": ["It is perfectly acceptable if reported in the logbook", "It is a severe MARPOL violation, resulting in heavy fines and port state detention", "The foam dissolves harmlessly, requiring no further action", "It is only a violation if within 12 nautical miles of land"],
    "exp": "Because it is a Persistent Organic Pollutant, intentionally dumping it into the sea for a drill violates strict international pollution laws.",
    "cat": "FOAM",
    "id": "T15F_060"
  },
  {
    "q": "What is an approved, environmentally safer replacement for older PFOS-based foams?",
    "a": "C6 AFFF (shorter-chain fluorochemicals) or FFF (Fluorine-Free Foams)",
    "opts": ["Carbon Tetrachloride", "High-Sulfur Protein Foam", "Halon 1301", "C6 AFFF (shorter-chain fluorochemicals) or FFF (Fluorine-Free Foams)"],
    "exp": "The industry is shifting rapidly to C6 formulations (which break down faster) or entirely Fluorine-Free Foams (FFF) which use no PFAS chemicals at all, relying instead on hydrocarbon or protein bases.",
    "cat": "FOAM",
    "id": "T15F_061"
  },
  {
    "q": "What does the ETO need to check regarding the ship's foam concentrate stocks prior to a 2026 Class Survey?",
    "a": "Check the manufacturer's Material Safety Data Sheet (MSDS/SDS) to explicitly verify the chemical composition contains 0% PFOS",
    "opts": ["Taste the foam slightly to detect fluorochemicals", "Check the manufacturer's Material Safety Data Sheet (MSDS/SDS) to explicitly verify the chemical composition contains 0% PFOS", "Check the electrical continuity of the foam tank grounding strap", "Measure the pH of the foam using a salinometer"],
    "exp": "The paperwork proves compliance. The ETO or Chief Officer must audit the MSDS for every drum of foam onboard. If the paper doesn't declare it PFOS-free, the surveyor will flag it as a deficiency.",
    "cat": "FOAM",
    "id": "T15F_062"
  },
  {
    "q": "What is AR-AFFF foam?",
    "a": "Alcohol-Resistant Aqueous Film-Forming Foam; it contains polymers that form a physical barrier to prevent polar solvents (like alcohols) from dissolving the foam blanket",
    "opts": ["Arctic-Ready Aqueous Film-Forming Foam; it will not freeze at -50\u00b0C", "Alcohol-Resistant Aqueous Film-Forming Foam; it contains polymers that form a physical barrier to prevent polar solvents (like alcohols) from dissolving the foam blanket", "Auto-Responsive Aqueous Film-Forming Foam; it activates on its own", "Aerosol-Released Aqueous Film-Forming Foam; used in portable cans"],
    "exp": "Standard AFFF is destroyed by alcohol (polar solvents). The alcohol sucks the water out of the foam, collapsing the bubbles instantly. AR-AFFF lays down a polymeric membrane that floats on the alcohol, shielding the foam bubbles from destruction.",
    "cat": "FOAM",
    "id": "T15F_063"
  },
  {
    "q": "Why must Foam NEVER be used on a Class E (live electrical) fire?",
    "a": "Foam is primarily composed of water; it is highly conductive and will electrocute the operator holding the hose/extinguisher",
    "opts": ["Foam is primarily composed of water; it is highly conductive and will electrocute the operator holding the hose/extinguisher", "Foam destroys the plastic insulation on the cables", "Foam reacts with copper wiring to form explosive gases", "Foam lacks the cooling capacity to stop electrical arcing"],
    "exp": "Whether it's low or high expansion, the base ingredient is seawater or fresh water. Spraying a conductive liquid into a live 440V switchboard is a fatal error.",
    "cat": "FOAM",
    "id": "T15F_064"
  },
  {
    "q": "What is the typical mixing ratio of Foam Concentrate to Water in a marine foam proportioning system?",
    "a": "Typically 1% to 6% concentrate mixed with 94% to 99% water",
    "opts": ["Typically 1% to 6% concentrate mixed with 94% to 99% water", "Typically 50% concentrate mixed with 50% water", "100% pure concentrate sprayed directly from the nozzle", "Typically 20% concentrate mixed with 80% water"],
    "exp": "The ship carries massive amounts of water in the sea. It only needs to carry a small tank of expensive chemical concentrate. The proportioner injects a tiny amount (e.g., 3%) into the fire main stream to generate the solution.",
    "cat": "FOAM",
    "id": "T15F_065"
  },
  {
    "q": "What does FFFP stand for?",
    "a": "Film-Forming Fluoroprotein Foam",
    "opts": ["Fast Flowing Fire Protection", "Film-Forming Fluoroprotein Foam", "Fire Fighting Foam Powder", "Fluorine-Free Foam Product"],
    "exp": "FFFP combines the heavy, heat-resistant, tough blanket of natural protein foams with the rapid-spreading, film-forming capabilities of AFFF fluorosurfactants.",
    "cat": "FOAM",
    "id": "T15F_066"
  },
  {
    "q": "What is the consequence of mixing two completely different brands or types of foam concentrate in the main storage tank?",
    "a": "They may be chemically incompatible, turning into a thick, solid gel that permanently blocks the proportioning pumps and pipes",
    "opts": ["The foam will become twice as effective at cooling", "They may be chemically incompatible, turning into a thick, solid gel that permanently blocks the proportioning pumps and pipes", "The mixture will spontaneously combust", "The mixture will rapidly evaporate out of the tank vent"],
    "exp": "Foam concentrates are complex chemical soups. Mixing a protein base with a synthetic base can cause them to congeal into a useless, rubbery sludge, completely destroying the ship's firefighting capability.",
    "cat": "FOAM",
    "id": "T15F_067"
  },
  {
    "q": "In a portable foam extinguisher, what visually distinguishes it from a water extinguisher?",
    "a": "It has a red body with a CREAM colored panel above the operating instructions",
    "opts": ["It has a black panel and a long plastic horn", "It has a red body with a CREAM colored panel above the operating instructions", "It has a completely yellow body", "It has a blue panel and a pressure gauge"],
    "exp": "Under BS EN 3 standards, all fire extinguishers are primarily red. The secondary color band indicates the contents: Cream = Foam, Black = CO2, Blue = DCP, Yellow = Wet Chemical.",
    "cat": "FOAM",
    "id": "T15F_068"
  },
  {
    "q": "What is 'F-500'?",
    "a": "An Encapsulator Agent; a PFOS-free firefighting chemical that wraps around fuel molecules at a microscopic level, rendering them non-flammable and rapidly cooling the fire",
    "opts": ["A military-grade high-expansion foam banned on civilian ships", "A radioactive isotope used in smoke detectors", "A dry chemical powder specifically for Class D metal fires", "An Encapsulator Agent; a PFOS-free firefighting chemical that wraps around fuel molecules at a microscopic level, rendering them non-flammable and rapidly cooling the fire"],
    "exp": "F-500 is a modern, environmentally friendly alternative to traditional foams. Instead of just blanketing the surface, its molecules chemically bond to the hydrocarbon fuel molecules, encapsulating them so they can no longer ignite.",
    "cat": "FOAM",
    "id": "T15F_069"
  },
  {
    "q": "How does foam extinguish a Class A (wood/paper) fire?",
    "a": "The water content within the foam cools the material, while the foam bubbles blanket the surface to prevent air access",
    "opts": ["It freezes the wood to -50\u00b0C", "It chemically reacts with carbon to form a solid crust", "The water content within the foam cools the material, while the foam bubbles blanket the surface to prevent air access", "It generates a massive localized vacuum"],
    "exp": "While foam is primarily for Class B liquid fires, it is highly effective on Class A fires because it is essentially wet, soapy water. It penetrates and cools the solid material while smothering it.",
    "cat": "FOAM",
    "id": "T15F_070"
  },
  {
    "q": "Why is the use of high-expansion foam completely ineffective on a weather deck during a storm?",
    "a": "The foam is mostly air (up to 1000:1 ratio); it is incredibly light and will simply blow away in the wind before reaching the fire",
    "opts": ["High expansion foam only works in temperatures above 40\u00b0C", "The rainwater will cause the foam to burst into flames", "The heavy rain will wash away the PFOS chemicals", "The foam is mostly air (up to 1000:1 ratio); it is incredibly light and will simply blow away in the wind before reaching the fire"],
    "exp": "High expansion foam resembles giant soap bubbles. Without four solid walls to contain it, a slight breeze will lift it off the deck and blow it out to sea. It is strictly for enclosed volumetric flooding.",
    "cat": "FOAM",
    "id": "T15F_071"
  },
  {
    "q": "What is the function of the 'Foam Inductor' or 'Proportioner' in a fixed foam system?",
    "a": "It uses the venturi effect (pressure drop) to suck the exact percentage of raw foam concentrate out of the storage tank and mix it seamlessly into the flowing fire main water",
    "opts": ["It uses the venturi effect (pressure drop) to suck the exact percentage of raw foam concentrate out of the storage tank and mix it seamlessly into the flowing fire main water", "It heats the water to 60\u00b0C to activate the foam chemicals", "It blows high-pressure air into the foam to create the bubbles", "It filters the seawater to remove salt before mixing"],
    "exp": "As the fire main water speeds up through the narrow throat of the venturi inductor, it creates a vacuum. This vacuum pulls the thick concentrate up the pickup tube, automatically mixing it at the correct 3% or 6% ratio regardless of the water flow rate.",
    "cat": "FOAM",
    "id": "T15F_072"
  },
  {
    "q": "In a portable Foam fire extinguisher, how does the nozzle generate the actual foam bubbles?",
    "a": "The nozzle contains an air-aspirating branchpipe (tiny holes); as the pressurized liquid shoots past the holes, it sucks in ambient air to agitate and aerate the mixture into foam",
    "opts": ["The foam chemically expands the moment it touches light", "The nozzle contains an air-aspirating branchpipe (tiny holes); as the pressurized liquid shoots past the holes, it sucks in ambient air to agitate and aerate the mixture into foam", "The cylinder is pre-filled with compressed air bubbles", "The nozzle contains a small electric turbine to whip the liquid"],
    "exp": "The cylinder only contains soapy water and a pressure gas. The actual physical 'foam' is created right at the tip of the nozzle, where the high-speed liquid pulls surrounding air into the stream and physically whips it into bubbles.",
    "cat": "FOAM",
    "id": "T15F_073"
  },
  {
    "q": "Under SOLAS, what space on an oil tanker MUST be protected by a fixed deck foam system?",
    "a": "The entire cargo tank deck area and the cargo manifolds",
    "opts": ["The entire cargo tank deck area and the cargo manifolds", "The fresh water ballast tanks", "The main engine room bilges", "The ship's funnel and exhaust stack"],
    "exp": "Tankers carry millions of barrels of crude oil just beneath the main deck. A rupture or spill on the deck creates a massive, spreading liquid fire. The deck foam system uses large monitors (water cannons) to rapidly blanket the entire deck.",
    "cat": "FOAM",
    "id": "T15F_074"
  },
  {
    "q": "If an ETO is inspecting the Foam Room, what critical environmental condition must be checked to ensure the foam concentrate remains viable?",
    "a": "The storage temperature; if the room freezes, the concentrate can separate, degrade, or freeze solid, destroying its firefighting capabilities",
    "opts": ["The magnetic field strength; high gauss levels separate the proteins", "The humidity level; too much humidity will cause the foam to pre-expand in the tank", "The lighting level; UV light from fluorescent bulbs destroys PFOS", "The storage temperature; if the room freezes, the concentrate can separate, degrade, or freeze solid, destroying its firefighting capabilities"],
    "exp": "Foam concentrates are heavily water-based chemical mixtures. Freezing and thawing cycles can permanently damage the chemical bonds, causing the active ingredients to drop out of solution.",
    "cat": "FOAM",
    "id": "T15F_075"
  },
  {
    "q": "What happens if a firefighter shoots a high-pressure water jet directly INTO a blanket of foam that has just been laid over an oil spill?",
    "a": "The water jet will physically blast holes in the fragile foam blanket, destroying the seal, letting oxygen back in, and allowing the flammable oil vapors to instantly re-ignite",
    "opts": ["The water will instantly turn into high-expansion foam", "The water jet will physically blast holes in the fragile foam blanket, destroying the seal, letting oxygen back in, and allowing the flammable oil vapors to instantly re-ignite", "The water will help the foam expand further", "The foam will freeze solid and act as a hard shield"],
    "exp": "Foam and straight water jets do not mix. Firefighters must be trained not to 'wash away' the foam blanket they just spent 10 minutes creating.",
    "cat": "FOAM",
    "id": "T15F_076"
  },
  {
    "q": "How does 'Fluorine-Free Foam' (FFF) achieve its extinguishing power without using banned PFOS chemicals?",
    "a": "By relying heavily on dense, stable bubble structures (often protein or hydrocarbon-based) that physically block vapors, though they generally lack the ultra-fast 'film-forming' speed of old AFFF",
    "opts": ["By using liquid nitrogen to freeze the fuel surface", "By creating a massive vacuum that sucks the flames out", "By relying heavily on dense, stable bubble structures (often protein or hydrocarbon-based) that physically block vapors, though they generally lack the ultra-fast 'film-forming' speed of old AFFF", "By reacting with the fuel to turn it into solid plastic"],
    "exp": "The industry is moving back toward thicker, more robust foams that smother effectively but are 100% biodegradable and non-toxic, accepting that they might take slightly longer to knock down the flames than the highly toxic 'magic' PFAS chemicals did.",
    "cat": "FOAM",
    "id": "T15F_077"
  },
  {
    "q": "What is the procedure for attacking a liquid spill fire using a portable Foam extinguisher?",
    "a": "Aim the nozzle at a vertical surface behind the fire, or lob it gently so the foam falls lightly onto the liquid; NEVER shoot it directly down into the liquid, which would cause splashing",
    "opts": ["Sweep the nozzle rapidly back and forth under the surface of the oil", "Shoot the foam forcefully directly into the center of the burning pool", "Aim the nozzle at a vertical surface behind the fire, or lob it gently so the foam falls lightly onto the liquid; NEVER shoot it directly down into the liquid, which would cause splashing", "Spray the foam into the air and let it drift down like rain"],
    "exp": "You want the foam to gently roll and spread across the surface of the oil like a blanket. Blasting the nozzle straight down into the pool drives the foam under the oil and splashes burning fuel everywhere.",
    "cat": "FOAM",
    "id": "T15F_078"
  },
  {
    "q": "Why is it important to ensure the main fire pump is providing adequate pressure before engaging a foam inductor system?",
    "a": "Because the venturi effect requires high-velocity water (typically 5 to 7 bar) to create enough suction vacuum to draw the thick, heavy foam concentrate out of its storage tank",
    "opts": ["Because the foam concentrate is stored at 200 bar and must be matched", "Because the fire pump uses the foam to lubricate its own bearings", "Because the venturi effect requires high-velocity water (typically 5 to 7 bar) to create enough suction vacuum to draw the thick, heavy foam concentrate out of its storage tank", "Because low pressure will cause the foam to explode inside the pipe"],
    "exp": "If the fire main is only trickling at 2 bar, the water flowing through the inductor won't create any vacuum. The result is that plain seawater comes out the nozzle, and the foam concentrate stays sitting uselessly in the tank.",
    "cat": "FOAM",
    "id": "T15F_079"
  },
  {
    "q": "What is a 'Foam Box' or 'Foam Maker' located in a tanker's pump room?",
    "a": "A fixed foam discharge unit permanently mounted above the bilges designed to gently pour a thick blanket of low-expansion foam over any leaked cargo oil pooling on the floor",
    "opts": ["An electronic sensor that detects the presence of foam", "A storage locker containing spare 9-liter foam extinguishers", "A machine that converts CO2 directly into solid foam blocks", "A fixed foam discharge unit permanently mounted above the bilges designed to gently pour a thick blanket of low-expansion foam over any leaked cargo oil pooling on the floor"],
    "exp": "Pump rooms are high-risk areas for massive oil leaks. Foam boxes are piped into the fixed system and positioned so that upon activation, they silently and rapidly fill the lower bilges with a smothering foam blanket.",
    "cat": "FOAM",
    "id": "T15F_080"
  },
  {
    "q": "How does a standard automatic sprinkler head activate during a fire?",
    "a": "A heat-sensitive glass bulb shatters (or a fusible link melts) when the ambient temperature reaches its rated limit, releasing a plug and allowing pressurized water to spray against a deflector plate",
    "opts": ["The fire panel commands all sprinkler heads in the zone to open simultaneously", "The plastic nozzle melts completely away, opening the pipe", "A heat-sensitive glass bulb shatters (or a fusible link melts) when the ambient temperature reaches its rated limit, releasing a plug and allowing pressurized water to spray against a deflector plate", "An electronic smoke detector sends a 24V signal to open a solenoid valve on the head"],
    "exp": "Standard sprinklers are fully mechanical and local. The fire literally cooks the specific bulb above it until it pops. Only the heads directly exposed to the heat of the fire will open, conserving water pressure.",
    "cat": "SPRINKLER",
    "id": "T15F_081"
  },
  {
    "q": "What does a RED colored liquid in a sprinkler bulb signify?",
    "a": "A standard temperature rating, activating at 68\u00b0C",
    "opts": ["A low temperature rating, activating at 57\u00b0C", "It signifies that the bulb is filled with explosive gas", "A standard temperature rating, activating at 68\u00b0C", "A high temperature rating, activating at 141\u00b0C"],
    "exp": "68\u00b0C (Red) is the universal standard for normal accommodation spaces, cabins, and corridors where ambient temperatures are comfortable and stable.",
    "cat": "SPRINKLER",
    "id": "T15F_082"
  },
  {
    "q": "What does a YELLOW colored liquid in a sprinkler bulb signify?",
    "a": "An intermediate temperature rating, activating at 79\u00b0C",
    "opts": ["A high temperature rating, activating at 93\u00b0C", "An intermediate temperature rating, activating at 79\u00b0C", "It signifies the system is out of order", "A standard temperature rating, activating at 68\u00b0C"],
    "exp": "Yellow bulbs (79\u00b0C) are used in areas that might naturally get slightly warmer than a cabin, but don't require the extreme rating of a green bulb.",
    "cat": "SPRINKLER",
    "id": "T15F_083"
  },
  {
    "q": "What does a GREEN colored liquid in a sprinkler bulb signify?",
    "a": "A high temperature rating, activating at 93\u00b0C; typically used in galleys or engine room areas",
    "opts": ["It signifies the bulb is filled with non-toxic water", "A high temperature rating, activating at 93\u00b0C; typically used in galleys or engine room areas", "A standard temperature rating, activating at 68\u00b0C", "An extreme temperature rating, activating at 141\u00b0C"],
    "exp": "If you put a 68\u00b0C red bulb above a galley stove, the normal heat of cooking dinner would pop the bulb and flood the kitchen. Green bulbs (93\u00b0C) provide a higher safety margin for naturally hot rooms.",
    "cat": "SPRINKLER",
    "id": "T15F_084"
  },
  {
    "q": "What does a BLUE colored liquid in a sprinkler bulb signify?",
    "a": "An extreme high temperature rating, activating at 141\u00b0C; used near skylights, boilers, or exhaust casings",
    "opts": ["It signifies the head sprays blue-dyed foam instead of water", "A standard temperature rating, activating at 68\u00b0C", "A low temperature rating, activating at 57\u00b0C", "An extreme high temperature rating, activating at 141\u00b0C; used near skylights, boilers, or exhaust casings"],
    "exp": "141\u00b0C (Blue) is used in areas that experience massive radiant heat during normal operation, ensuring the sprinkler only activates if a genuine, uncontrollable fire occurs.",
    "cat": "SPRINKLER",
    "id": "T15F_085"
  },
  {
    "q": "What is the critical difference in activation between an Automatic Sprinkler System and a CO2 Total Flooding System?",
    "a": "Sprinkler heads activate individually and locally only where heat shatters the bulb; Total Flooding dumps the entire suppression agent simultaneously into the entire space via open nozzles",
    "opts": ["Sprinkler heads activate individually and locally only where heat shatters the bulb; Total Flooding dumps the entire suppression agent simultaneously into the entire space via open nozzles", "Sprinkler heads are operated manually by the bridge; CO2 is fully automatic", "Sprinkler heads only activate if smoke is detected; CO2 requires intense heat", "Sprinkler heads activate all at once to flood the ship; CO2 is only released from one small nozzle"],
    "exp": "Sprinklers are selective. A trash can fire in Cabin A pops one sprinkler head. Cabin B stays perfectly dry. CO2 systems have open pipes; opening the main valve instantly floods every corner of the engine room at once.",
    "cat": "SPRINKLER",
    "id": "T15F_086"
  },
  {
    "q": "What does the acronym BLIS stand for in a sprinkler system?",
    "a": "Bulk Line Isolation Stop (or Blank Line Indication System)",
    "opts": ["Bi-directional Loop Integrity Sensor", "Bridge Local Indicator Switch", "Bulk Line Isolation Stop (or Blank Line Indication System)", "Basic Liquid Injection System"],
    "exp": "The BLIS is a critical supervisory system that monitors the physical position of the main water supply valves to the sprinkler system.",
    "cat": "SPRINKLER",
    "id": "T15F_087"
  },
  {
    "q": "What is the function of the BLIS tamper switch?",
    "a": "It triggers a supervisory alarm on the fire panel immediately if anyone accidentally or deliberately turns the main sprinkler isolation valve towards the 'Closed' position",
    "opts": ["It measures the chemical purity of the sprinkler water", "It turns on the emergency generator if the sprinkler pump fails", "It triggers a supervisory alarm on the fire panel immediately if anyone accidentally or deliberately turns the main sprinkler isolation valve towards the 'Closed' position", "It detects if the glass bulbs on the sprinkler heads have been painted over"],
    "exp": "A sprinkler system is useless if the main water valve in the engine room is shut. The BLIS switch ensures the ETO and Bridge know instantly if a mechanic closes the valve for maintenance and forgets to re-open it.",
    "cat": "SPRINKLER",
    "id": "T15F_088"
  },
  {
    "q": "How does an ETO conduct an operational test of a specific sprinkler zone without breaking a glass bulb?",
    "a": "By opening the 'End-of-Line Test Valve' (Test Cock) located at the furthest point of the zone piping; this simulates a popped head by flowing water into a drain",
    "opts": ["By electrically shorting the flow switch at the section valve", "By opening the 'End-of-Line Test Valve' (Test Cock) located at the furthest point of the zone piping; this simulates a popped head by flowing water into a drain", "By over-pressurizing the system until the relief valve lifts", "By using a blowtorch to gently warm the glass bulb until the alarm rings"],
    "exp": "Opening the test valve proves three things: 1) Water physically reached the furthest point of the pipe. 2) The pressure is adequate. 3) The flowing water successfully triggered the paddle flow switch and rang the alarm on the bridge.",
    "cat": "SPRINKLER",
    "id": "T15F_089"
  },
  {
    "q": "What indicates to the fire panel which specific deck or corridor a sprinkler has activated in?",
    "a": "A 'Paddle-type Water Flow Switch' installed in the branch pipe serving that specific zone; moving water physically pushes the paddle and closes an electrical contact",
    "opts": ["An acoustic sensor that listens for the sound of shattering glass", "A tiny microchip embedded in each glass bulb", "A 'Paddle-type Water Flow Switch' installed in the branch pipe serving that specific zone; moving water physically pushes the paddle and closes an electrical contact", "A temperature sensor mounted next to the main pump"],
    "exp": "When a head pops, water starts moving through the pipe to feed it. This water flow bends a plastic or metal paddle inside the pipe, triggering the microswitch that tells the bridge 'Water Flowing in Deck 3 Port Side'.",
    "cat": "SPRINKLER",
    "id": "T15F_090"
  },
  {
    "q": "What is 'Hi-Fog' or High-Pressure Water Mist (HPWM)?",
    "a": "A highly advanced suppression system that discharges fresh water at extreme pressures (70\u2013200 bar) through micro-nozzles, atomizing the water into incredibly fine droplets (50\u2013200 \u00b5m)",
    "opts": ["A system that fills the room with thick chemical foam", "A system that freezes the water into microscopic ice crystals", "A highly advanced suppression system that discharges fresh water at extreme pressures (70\u2013200 bar) through micro-nozzles, atomizing the water into incredibly fine droplets (50\u2013200 \u00b5m)", "A low-pressure system that sprays warm seawater over the cargo deck"],
    "exp": "Traditional sprinklers run at 6-10 bar and create large, heavy rain drops. Hi-Fog runs at 100+ bar and creates a dense, impenetrable cloud of microscopic fog that behaves almost like a gas.",
    "cat": "SPRINKLER",
    "id": "T15F_091"
  },
  {
    "q": "What is the primary thermodynamic advantage of the ultra-fine droplets produced by a Hi-Fog system?",
    "a": "They provide a massive total surface area compared to large droplets, allowing them to instantly absorb colossal amounts of heat from the fire by rapidly flashing into steam",
    "opts": ["They provide a massive total surface area compared to large droplets, allowing them to instantly absorb colossal amounts of heat from the fire by rapidly flashing into steam", "They electrically conduct the heat straight into the ship's hull", "They chemically bind with the carbon to form a solid crust", "They are heavier than air and crush the flames physically"],
    "exp": "Cooling a fire requires absorbing heat. Water absorbs the most heat when it changes from liquid to gas (Latent Heat of Vaporization). Tiny droplets boil instantly, sucking massive heat out of the fire triangle in seconds.",
    "cat": "SPRINKLER",
    "id": "T15F_092"
  },
  {
    "q": "How does High-Pressure Water Mist provide an 'Oxygen Displacement' (Smothering) effect similar to CO2?",
    "a": "When the micro-droplets boil, the water expands approximately 1700 times in volume into steam, creating a dense localized steam cloud that forcefully pushes oxygen away from the base of the fire",
    "opts": ["The water chemically strips oxygen molecules out of the air", "When the micro-droplets boil, the water expands approximately 1700 times in volume into steam, creating a dense localized steam cloud that forcefully pushes oxygen away from the base of the fire", "The system pumps pure nitrogen gas alongside the water", "The fog droplets are so heavy they sink and compress the oxygen into the bilge"],
    "exp": "1 liter of liquid water creates 1700 liters of steam. As the fog hits the fire and flashes, it explodes into a massive cloud of steam right at the flame source, starving it of oxygen locally without suffocating the entire room.",
    "cat": "SPRINKLER",
    "id": "T15F_093"
  },
  {
    "q": "What is the third major suppression effect of a Water Mist system, alongside Cooling and Smothering?",
    "a": "Radiant Heat Blocking; the dense cloud of microscopic droplets forms a physical optical barrier that prevents the intense infrared heat of the fire from radiating to and igniting nearby structures",
    "opts": ["Chain Reaction Inhibition; it binds with free radicals", "Radiant Heat Blocking; the dense cloud of microscopic droplets forms a physical optical barrier that prevents the intense infrared heat of the fire from radiating to and igniting nearby structures", "Cryogenic Freezing; it drops the room temperature to -50\u00b0C", "Chemical Saponification; it turns the fuel into soap"],
    "exp": "Fires often spread by baking the wall 10 feet away until it bursts into flames. The dense white fog acts like a perfect thermal mirror, blocking the heat rays and allowing firefighters to approach the blaze safely.",
    "cat": "SPRINKLER",
    "id": "T15F_094"
  },
  {
    "q": "What is the most critical life-safety advantage of using a High-Pressure Water Mist system in a machinery space compared to a CO2 Total Flooding system?",
    "a": "Water mist is non-toxic and completely breathable; it can be activated instantly while crew members are still inside the engine room, unlike CO2 which requires a full, time-consuming evacuation",
    "opts": ["Water mist makes the floor less slippery for escaping crew", "Water mist completely eliminates the risk of electrocution", "Water mist is non-toxic and completely breathable; it can be activated instantly while crew members are still inside the engine room, unlike CO2 which requires a full, time-consuming evacuation", "Water mist actively produces breathable oxygen for the crew"],
    "exp": "CO2 kills people in seconds. You MUST spend 5-10 minutes checking the engine room to ensure everyone is out before dumping CO2, letting the fire grow. With Hi-Fog, the moment you see fire, you hit the button. The crew just gets wet while escaping.",
    "cat": "SPRINKLER",
    "id": "T15F_095"
  },
  {
    "q": "Is a High-Pressure Water Mist (Hi-Fog) system safe to use on Class B (flammable liquid) fires, and why?",
    "a": "Yes; because the droplets are microscopic and light, they do not crash into and scatter the burning liquid like a heavy, solid jet of water would",
    "opts": ["Yes; but only if the water is mixed with 50% foam concentrate", "No; any form of water will always scatter oil fires violently", "Yes; because the droplets are microscopic and light, they do not crash into and scatter the burning liquid like a heavy, solid jet of water would", "No; the water mist chemically accelerates petroleum combustion"],
    "exp": "A fire hose jet penetrates the oil surface and flashes, blowing the oil everywhere. Hi-Fog droplets are so tiny they float down like snow, flashing into steam in the air just above the oil surface, suffocating the fire safely.",
    "cat": "SPRINKLER",
    "id": "T15F_096"
  },
  {
    "q": "Under SOLAS II-2/12, which vessels are MANDATED to have an automatic sprinkler (or equivalent) system installed in all accommodation and service spaces?",
    "a": "All Passenger ships, and all Cargo ships over 200 GT",
    "opts": ["All ships, including small fishing vessels and tugboats", "Only vessels carrying dangerous chemicals", "Only Passenger ships over 10,000 GT", "All Passenger ships, and all Cargo ships over 200 GT"],
    "exp": "Protecting sleeping crew members from cabin fires is a paramount SOLAS requirement. The accommodation block of almost any commercial ship you sail on will be fully sprinklered.",
    "cat": "SPRINKLER",
    "id": "T15F_097"
  },
  {
    "q": "In a standard Wet-Pipe automatic sprinkler system, what fills the pipes immediately behind the glass bulb heads?",
    "a": "Pressurized fresh water, ready to discharge the exact millisecond the bulb shatters",
    "opts": ["Pressurized air, which must vent before water can enter", "High-pressure CO2 gas", "A dry chemical powder mixture", "Pressurized fresh water, ready to discharge the exact millisecond the bulb shatters"],
    "exp": "Wet-pipe is the most common. The entire network is fully flooded with pressurized water. There is zero delay between the glass breaking and the water spraying.",
    "cat": "SPRINKLER",
    "id": "T15F_098"
  },
  {
    "q": "What maintains the standing pressure (typically 6-12 bar) in a Wet-Pipe sprinkler system when no heads are open?",
    "a": "A small 'Jockey Pump' (or pressure maintenance pump) connected to a hydro-pneumatic pressure tank",
    "opts": ["The massive 100kW main fire pump runs continuously 24/7", "Compressed air from the starting air receivers", "A small 'Jockey Pump' (or pressure maintenance pump) connected to a hydro-pneumatic pressure tank", "Gravity from a tank located on the highest mast"],
    "exp": "Pipes have tiny micro-leaks. Instead of running a massive 100kW fire pump all day to hold pressure, a tiny 1kW jockey pump kicks on for 5 seconds every few hours to keep the pressure tank topped up at 8 bar.",
    "cat": "SPRINKLER",
    "id": "T15F_099"
  },
  {
    "q": "If a sprinkler head pops and the pressure drops rapidly, what sequence of pumps activates?",
    "a": "The small Jockey Pump starts first; if it cannot keep up and pressure continues to drop below a set limit, the massive Main Sprinkler Pump automatically starts to deluge the fire",
    "opts": ["The Main Sprinkler Pump starts, then hands over to the Jockey Pump", "The small Jockey Pump starts first; if it cannot keep up and pressure continues to drop below a set limit, the massive Main Sprinkler Pump automatically starts to deluge the fire", "The Emergency Fire Pump starts immediately, bypassing the main pumps", "The main sea water cooling pumps divert to the sprinkler system"],
    "exp": "The jockey pump tries to save the pressure. If a real head pops, the massive water flow overwhelms the jockey pump instantly. Pressure hits the low-low limit, and the heavy-duty main sprinkler pump contactor slams shut.",
    "cat": "SPRINKLER",
    "id": "T15F_100"
  },
  {
    "q": "What fluid is typically contained inside the glass bulb of a standard sprinkler head?",
    "a": "A coloured glycerine-based liquid with a small, carefully calculated air bubble inside",
    "opts": ["Pressurized mercury", "Pure distilled water", "A coloured glycerine-based liquid with a small, carefully calculated air bubble inside", "Liquid nitrogen"],
    "exp": "As the room heats up, the glycerine expands. The air bubble compresses until it vanishes. Once the liquid has no room left to expand, the immense hydraulic pressure shatters the glass bulb from the inside out.",
    "cat": "SPRINKLER",
    "id": "T15F_101"
  },
  {
    "q": "Why is High-Pressure Water Mist highly favored as an alternative to CO2 in modern ship design?",
    "a": "It is safer for crew (no asphyxiation risk), causes no environmental harm (zero global warming/ozone potential), and does not require extensive pre-release sealing of the engine room",
    "opts": ["It completely eliminates the risk of electrical short circuits", "It is safer for crew (no asphyxiation risk), causes no environmental harm (zero global warming/ozone potential), and does not require extensive pre-release sealing of the engine room", "It requires absolutely no maintenance or electrical power to operate", "It is significantly cheaper to install and requires smaller pipes"],
    "exp": "While CO2 is deadly and strictly regulated, water mist is just pure fresh water. It provides equivalent firefighting capability without the environmental baggage of Halon/FM-200 or the lethal danger of CO2.",
    "cat": "SPRINKLER",
    "id": "T15F_102"
  },
  {
    "q": "How does the size of a water droplet affect its ability to extinguish a fire?",
    "a": "Smaller droplets have a drastically higher surface-area-to-volume ratio, allowing them to absorb heat and vaporize into steam exponentially faster than large droplets",
    "opts": ["Larger droplets generate static electricity that disrupts the flame", "Smaller droplets sink to the bottom of the fire faster", "Larger droplets carry more momentum, crushing the fire physically", "Smaller droplets have a drastically higher surface-area-to-volume ratio, allowing them to absorb heat and vaporize into steam exponentially faster than large droplets"],
    "exp": "If you throw a bucket of water on a fire, only the outside of the water touches the flame before it hits the ground. If you atomize that bucket into a trillion micro-droplets, every single molecule interacts with the fire, resulting in maximum cooling efficiency.",
    "cat": "SPRINKLER",
    "id": "T15F_103"
  },
  {
    "q": "What is a 'Fusible Link' sprinkler head?",
    "a": "An older style of sprinkler head that uses two metal plates held together by a solder alloy that literally melts at a specific temperature (e.g., 72\u00b0C) to release the water plug",
    "opts": ["A sprinkler head that requires an electrical fuse to blow before opening", "An older style of sprinkler head that uses two metal plates held together by a solder alloy that literally melts at a specific temperature (e.g., 72\u00b0C) to release the water plug", "A sprinkler head that is welded directly to the ship's hull", "A sprinkler head made entirely of plastic that melts away"],
    "exp": "Before colored glass bulbs became the universal standard, fusible links were common. The specific mixture of the solder alloy dictated the exact temperature at which the link would melt and fail.",
    "cat": "SPRINKLER",
    "id": "T15F_104"
  },
  {
    "q": "What is a 'Dry-Pipe' sprinkler system, and where is it typically used on a ship?",
    "a": "The pipes are filled with pressurized air instead of water to prevent freezing; used in unheated areas like Ro-Ro decks or open weather decks",
    "opts": ["The pipes are kept completely empty and unpressurized until a button is pushed", "The pipes carry dry chemical powder instead of water; used in the main switchboard room", "The system only discharges steam; used in the engine room", "The pipes are filled with pressurized air instead of water to prevent freezing; used in unheated areas like Ro-Ro decks or open weather decks"],
    "exp": "If a wet-pipe runs across an open deck in the Arctic, the water will freeze, split the steel pipe, and render the system useless. A dry-pipe system holds the water back in a warm control room behind an air-pressure valve. When a head pops, the air rushes out, and the water follows seconds later.",
    "cat": "SPRINKLER",
    "id": "T15F_105"
  },
  {
    "q": "What happens at the main fire panel if a crew member accidentally snaps the glass bulb on a cabin sprinkler head with a broom?",
    "a": "Water will immediately flood the cabin, and the resulting water flow will trigger the zone's flow switch, sounding a full Fire Alarm on the bridge",
    "opts": ["The panel will show a yellow 'Fault' light but no water will flow", "Only a local buzzer will sound inside the cabin", "Water will immediately flood the cabin, and the resulting water flow will trigger the zone's flow switch, sounding a full Fire Alarm on the bridge", "The system will recognize it as an accident and isolate the cabin automatically"],
    "exp": "The mechanical sprinkler head has no brain; it just holds back water. If it breaks, water flows. The flow switch detects the movement and tells the panel there is a fire, even if it was just a mechanical accident.",
    "cat": "SPRINKLER",
    "id": "T15F_106"
  },
  {
    "q": "If the main sprinkler pump is driven by an electric motor, what strict SOLAS power supply requirement applies to it?",
    "a": "It must be capable of being supplied by BOTH the main source of electrical power and the emergency source of electrical power",
    "opts": ["It can only be powered by shore power", "It must be powered entirely by 24V DC batteries", "It must be mechanically connected directly to the main propeller shaft", "It must be capable of being supplied by BOTH the main source of electrical power and the emergency source of electrical power"],
    "exp": "Fire fighting capability cannot be lost during a blackout. The massive sprinkler pump must have an automatic connection to the Emergency Switchboard so it can run even if the main engine room is dead.",
    "cat": "SPRINKLER",
    "id": "T15F_107"
  },
  {
    "q": "What is a 'Deluge' sprinkler system, and how does it differ from a standard system?",
    "a": "All sprinkler heads are 'open' (no glass bulbs); the system is dry until a separate fire detection system opens a main deluge valve, simultaneously flooding the entire protected area",
    "opts": ["It uses high-pressure CO2 instead of water", "It is completely submerged underwater at all times", "All sprinkler heads are 'open' (no glass bulbs); the system is dry until a separate fire detection system opens a main deluge valve, simultaneously flooding the entire protected area", "It only operates if manually activated by the master's key"],
    "exp": "Used in extremely high hazard areas (like ammunition rooms or paint lockers) where you don't have time to wait for individual bulbs to pop. When fire is detected, the main valve opens, and every single nozzle rains down massive amounts of water instantly.",
    "cat": "SPRINKLER",
    "id": "T15F_108"
  },
  {
    "q": "How does the ETO manually test the automatic start function of the Main Sprinkler Pump?",
    "a": "By slightly opening a test drain valve on the main header to drop the system pressure; the jockey pump will start first, followed by the main pump as pressure continues to fall",
    "opts": ["By slightly opening a test drain valve on the main header to drop the system pressure; the jockey pump will start first, followed by the main pump as pressure continues to fall", "By pressing the 'Test' button on the pump's VFD screen", "By short-circuiting the pressure switch with a jumper wire", "By closing the main suction valve to create a vacuum"],
    "exp": "You must prove the mechanical pressure switch actually works. Dropping the water pressure physically simulates a sprinkler head opening, proving the entire hydraulic and electrical start sequence is healthy.",
    "cat": "SPRINKLER",
    "id": "T15F_109"
  },
  {
    "q": "What is the primary maintenance check for High-Pressure Water Mist nozzles?",
    "a": "Ensuring the microscopic nozzle orifices are not clogged by dirt, scale, or painted over, which would ruin the atomization pattern",
    "opts": ["Checking the chemical expiration date of the water", "Ensuring the glass bulbs are painted red", "Ensuring the microscopic nozzle orifices are not clogged by dirt, scale, or painted over, which would ruin the atomization pattern", "Greasing the swivel joints so they can spin"],
    "exp": "Hi-Fog relies entirely on pushing water through holes that are often smaller than a pinhead. If shipyard workers carelessly paint over the nozzle, or internal pipe rust clogs it, it will just dribble uselessly instead of creating fog.",
    "cat": "SPRINKLER",
    "id": "T15F_110"
  },
  {
    "q": "Under SOLAS II-2/Regulation 10, where must the Emergency Fire Pump be located?",
    "a": "In a dedicated space OUTSIDE the main machinery space (typically in the forward peak or steering flat), ensuring a fire in the engine room cannot disable it",
    "opts": ["At the lowest possible point in the main engine room bilges", "In a dedicated space OUTSIDE the main machinery space (typically in the forward peak or steering flat), ensuring a fire in the engine room cannot disable it", "Next to the main switchboard for easy access", "On the open bridge wing"],
    "exp": "The whole point of the emergency pump is redundancy. If the engine room is blazing and the main fire pumps are dead, you must have a completely isolated pump located far away from the fire to fight it.",
    "cat": "PUMPS",
    "id": "T15F_111"
  },
  {
    "q": "What is the strict SOLAS requirement regarding the power supply for the Emergency Fire Pump?",
    "a": "It must be independently powered; typically driven by its own dedicated diesel engine, or by an electric motor fed strictly from the Emergency Generator",
    "opts": ["It can be powered from the main switchboard provided the cables are fireproof", "It must be mechanically belted to the main propeller shaft", "It must be independently powered; typically driven by its own dedicated diesel engine, or by an electric motor fed strictly from the Emergency Generator", "It must run entirely on 24V DC batteries"],
    "exp": "If the ship blacks out due to an engine room fire, the emergency pump must still run. It cannot rely on the main switchboard in any way.",
    "cat": "PUMPS",
    "id": "T15F_112"
  },
  {
    "q": "What is the minimum pressure that the Emergency Fire Pump must be capable of delivering at any hydrant on the ship?",
    "a": "Not less than 0.3 MPa (approx. 3.0 bar)",
    "opts": ["Not less than 15.0 MPa (approx. 150 bar)", "Not less than 0.3 MPa (approx. 3.0 bar)", "Not less than 0.1 MPa (approx. 1.0 bar)", "Not less than 1.0 MPa (approx. 10.0 bar)"],
    "exp": "Surveyors heavily test this number. 3 bar of pressure is the minimum required to throw a solid jet of water at least 12 meters from a standard fire hose nozzle.",
    "cat": "PUMPS",
    "id": "T15F_113"
  },
  {
    "q": "In addition to maintaining pressure, what capacity (flow rate) must the Emergency Fire Pump achieve according to SOLAS?",
    "a": "It must be capable of supplying two fire hose jets simultaneously with adequate pressure",
    "opts": ["It must be capable of filling the swimming pool in 10 minutes", "It must be able to flood the entire engine room in 5 minutes", "It must be capable of supplying two fire hose jets simultaneously with adequate pressure", "It must supply 10 hoses simultaneously"],
    "exp": "Pressure without volume is useless. The pump must be strong enough to maintain that 3 bar pressure even when two separate firefighters have their hose nozzles wide open.",
    "cat": "PUMPS",
    "id": "T15F_114"
  },
  {
    "q": "Because the Emergency Fire Pump is often located high above the waterline, what specific mechanical feature must it possess?",
    "a": "It must be self-priming (e.g., using a built-in liquid ring, gear pump, or exhaust-gas ejector system) to suck water up an empty pipe",
    "opts": ["It must be manually flooded with drinking water before every use", "It must have a heavy lead weight attached to the impeller", "It must be self-priming (e.g., using a built-in liquid ring, gear pump, or exhaust-gas ejector system) to suck water up an empty pipe", "It must use a high-pressure air compressor to blow water up"],
    "exp": "Standard centrifugal pumps cannot pump air. If they sit above the waterline, the pipe is full of air. A self-priming mechanism creates a vacuum to suck the seawater up the pipe until it reaches the main impeller.",
    "cat": "PUMPS",
    "id": "T15F_115"
  },
  {
    "q": "What is the function of the 'Foot Valve' on the suction line of an Emergency Fire Pump?",
    "a": "It is a non-return (check) valve located at the very bottom of the suction pipe in the sea; it prevents water from draining out of the pipe when the pump stops, maintaining the prime",
    "opts": ["It measures the depth of the water under the ship", "It filters out large fish and seaweed from entering the pump", "It allows the pump to be operated by a foot pedal in an emergency", "It is a non-return (check) valve located at the very bottom of the suction pipe in the sea; it prevents water from draining out of the pipe when the pump stops, maintaining the prime"],
    "exp": "By holding the column of water in the pipe, the pump doesn't have to work hard to suck air every single time it starts. If the foot valve leaks, the pump loses its prime and will fail to deliver water in an emergency.",
    "cat": "PUMPS",
    "id": "T15F_116"
  },
  {
    "q": "How does an ETO properly test the operational readiness of the Emergency Fire Pump?",
    "a": "Start the pump (auto or manual), open two fire hydrants on the highest deck, and physically verify visually that two strong jets of water are produced",
    "opts": ["Run the pump with all valves closed and check the pressure gauge", "Measure the electrical resistance of the motor windings", "Start the pump (auto or manual), open two fire hydrants on the highest deck, and physically verify visually that two strong jets of water are produced", "Just look at the green 'Running' light on the starter panel"],
    "exp": "A pump running against closed valves proves nothing about its flow capacity. You must open two hoses at the worst-case location (the highest deck, furthest from the pump) and prove it can throw water.",
    "cat": "PUMPS",
    "id": "T15F_117"
  },
  {
    "q": "What is the 'Bilge Injection Valve' (Emergency Bilge Suction)?",
    "a": "A massive isolation valve that connects the suction side of the Main Sea Water Cooling pump directly to the engine room bilge, used strictly for emergency dewatering during catastrophic flooding",
    "opts": ["The primary valve used by the Oily Water Separator", "A massive isolation valve that connects the suction side of the Main Sea Water Cooling pump directly to the engine room bilge, used strictly for emergency dewatering during catastrophic flooding", "A valve that routes clean seawater into the bilge to wash it", "A small valve used to inject chemicals into the bilge water"],
    "exp": "If the ship hits a rock, normal bilge pumps (30 m3/hr) are useless. The Main Sea Water cooling pump moves 500+ m3/hr. Opening the bilge injection valve turns this massive cooling pump into a giant, desperate bilge pump to save the ship from sinking.",
    "cat": "PUMPS",
    "id": "T15F_118"
  },
  {
    "q": "Why is the Bilge Injection Valve physically sealed or wired shut with a breakable tag during normal operations?",
    "a": "To prevent accidental opening; using it illegally dumps completely unfiltered, oily bilge water straight into the ocean, bypassing the OWS, causing a massive MARPOL violation",
    "opts": ["To satisfy aesthetic class society rules", "To prevent the valve handle from vibrating loose", "To prevent accidental opening; using it illegally dumps completely unfiltered, oily bilge water straight into the ocean, bypassing the OWS, causing a massive MARPOL violation", "Because the valve is fragile and breaks easily"],
    "exp": "Opening this valve is an absolute last resort to save the ship. The broken wire seal proves to Port State Control that it was opened, requiring an official logbook entry explaining the life-or-death emergency.",
    "cat": "PUMPS",
    "id": "T15F_119"
  },
  {
    "q": "Before opening the Bilge Injection Valve during a flooding emergency, what MUST the engineer do to the main sea water cooling valves?",
    "a": "Close the sea chest suction valve to stop seawater from entering, and close the discharge valve to the engine coolers to prevent oily bilge sludge from clogging the heat exchangers",
    "opts": ["Open them fully to maximize flow", "Remove them completely from the pipework", "Bypass them using the fresh water generator", "Close the sea chest suction valve to stop seawater from entering, and close the discharge valve to the engine coolers to prevent oily bilge sludge from clogging the heat exchangers"],
    "exp": "If you don't close the sea chest, the pump will just keep sucking ocean water instead of bilge water. You also want to dump the bilge water directly overboard, not pump filthy sludge through your expensive titanium engine coolers.",
    "cat": "PUMPS",
    "id": "T15F_120"
  },
  {
    "q": "What is the 'International Shore Connection' (ISC)?",
    "a": "A universally standardized steel flange adapter carried on all ships that allows any shore-based fire brigade anywhere in the world to connect their fire hoses to the ship's fire main",
    "opts": ["A standardized electrical plug for shore power", "A satellite radio system for calling the coast guard", "A universal coupling for pumping sewage ashore", "A universally standardized steel flange adapter carried on all ships that allows any shore-based fire brigade anywhere in the world to connect their fire hoses to the ship's fire main"],
    "exp": "Every country uses different fire hose threads. The ISC solves this. The shore fire truck brings their hose with an ISC flange, bolts it directly to the ship's ISC flange, and pumps water into the ship's fire main.",
    "cat": "PUMPS",
    "id": "T15F_121"
  },
  {
    "q": "What is the precise SOLAS-mandated Outside Diameter (OD) and Inner Bore Diameter of the International Shore Connection?",
    "a": "Outside Diameter: 178 mm. Inner Bore Diameter: 64 mm",
    "opts": ["Outside Diameter: 178 mm. Inner Bore Diameter: 64 mm", "Outside Diameter: 150 mm. Inner Bore Diameter: 75 mm", "Outside Diameter: 100 mm. Inner Bore Diameter: 50 mm", "Outside Diameter: 200 mm. Inner Bore Diameter: 100 mm"],
    "exp": "Surveyors love testing rote memory on this SOLAS specification to ensure you know the standard dimensions.",
    "cat": "PUMPS",
    "id": "T15F_122"
  },
  {
    "q": "What is the SOLAS-mandated Pitch Circle Diameter (PCD) and number of bolts for the International Shore Connection?",
    "a": "Pitch Circle Diameter: 132 mm. Number of bolts: 4",
    "opts": ["Pitch Circle Diameter: 132 mm. Number of bolts: 4", "Pitch Circle Diameter: 150 mm. Number of bolts: 6", "Pitch Circle Diameter: 100 mm. Number of bolts: 8", "Pitch Circle Diameter: 120 mm. Number of bolts: 2"],
    "exp": "The PCD is the diameter of the invisible circle that runs through the center of the 4 bolt holes.",
    "cat": "PUMPS",
    "id": "T15F_123"
  },
  {
    "q": "What is the required bolt diameter and flange thickness for the International Shore Connection?",
    "a": "Bolt diameter: 16 mm. Flange thickness: Minimum 14.5 mm",
    "opts": ["Bolt diameter: 12 mm. Flange thickness: Minimum 10.0 mm", "Bolt diameter: 20 mm. Flange thickness: Minimum 20.0 mm", "Bolt diameter: 16 mm. Flange thickness: Minimum 14.5 mm", "Bolt diameter: 10 mm. Flange thickness: 5.0 mm"],
    "exp": "The flange must be thick enough to safely withstand the 10.5 kg/cm2 (approx 10 bar) working pressure of a massive shore-based fire truck pump.",
    "cat": "PUMPS",
    "id": "T15F_124"
  },
  {
    "q": "If the Emergency Fire Pump is driven by an independent diesel engine, what is the SOLAS requirement for its fuel tank capacity?",
    "a": "It must contain sufficient fuel to run the pump on full load for at least 3 hours, with reserve fuel stored safely outside the main machinery space for an additional 15 hours",
    "opts": ["It must contain fuel for 1 hour of operation", "It must have 24 hours of fuel in a single day tank", "It must contain sufficient fuel to run the pump on full load for at least 3 hours, with reserve fuel stored safely outside the main machinery space for an additional 15 hours", "It must be connected directly to the ship's main heavy fuel bunker"],
    "exp": "A major ship fire can burn for hours or days. The pump must have enough immediate fuel to fight the initial blaze, and safe backup fuel to keep it running for a total of 18 hours.",
    "cat": "PUMPS",
    "id": "T15F_125"
  },
  {
    "q": "What happens if the main fire main pressure drops below a certain threshold (e.g., due to someone opening a hose during an emergency)?",
    "a": "A pressure switch on the fire main detects the drop and automatically starts the Main Fire Pump (or Emergency Fire Pump on some setups) to restore pressure instantly",
    "opts": ["The sprinkler system activates automatically", "A pressure switch on the fire main detects the drop and automatically starts the Main Fire Pump (or Emergency Fire Pump on some setups) to restore pressure instantly", "The ship's general alarm sounds", "The main engine slows down"],
    "exp": "In an emergency, a crew member shouldn't have to run to the engine room to turn on the pump. They just open the hydrant on deck. The pressure drop automatically triggers the heavy-duty pump contactor.",
    "cat": "PUMPS",
    "id": "T15F_126"
  },
  {
    "q": "Why is an 'Isolating Valve' fitted on the fire main piping system, typically located just outside the engine room?",
    "a": "To separate the engine room fire main section from the deck fire main section; if the engine room piping ruptures in a fire, closing this valve ensures the deck hoses still have pressure from the emergency pump",
    "opts": ["To prevent seawater from entering the engine room during normal sailing", "To act as a pressure relief valve for the entire system", "To route the fire water directly into the cargo holds", "To separate the engine room fire main section from the deck fire main section; if the engine room piping ruptures in a fire, closing this valve ensures the deck hoses still have pressure from the emergency pump"],
    "exp": "If a pipe explodes in the burning engine room, all the water from the emergency pump will just pour uselessly into the bilge. Closing the isolating valve seals off the broken section, keeping the deck hoses pressurized.",
    "cat": "PUMPS",
    "id": "T15F_127"
  },
  {
    "q": "What electrical protection is deliberately REMOVED or bypassed on the Main Fire Pump starter circuit?",
    "a": "The Thermal Overload Relay (OLR) trip function is often bypassed or set to 'Alarm Only'; in a fire, it is better to let the motor burn itself out pumping water than to have it safely trip and let the ship burn",
    "opts": ["The short circuit fuses", "The phase failure relay", "The under-voltage release coil", "The Thermal Overload Relay (OLR) trip function is often bypassed or set to 'Alarm Only'; in a fire, it is better to let the motor burn itself out pumping water than to have it safely trip and let the ship burn"],
    "exp": "Similar to the steering gear rule. Life safety > Equipment safety. If the pump is overworked and overheating during a blazing fire, a tripped breaker would kill the firefighters holding the hose. It must keep pumping until it dies.",
    "cat": "PUMPS",
    "id": "T15F_128"
  },
  {
    "q": "What is a 'Relief Valve' used for on the discharge side of a positive displacement (gear type) emergency fire pump?",
    "a": "It prevents the pump from building up extreme, pipe-bursting pressure if it is run while all the fire hydrants are closed",
    "opts": ["It injects foam concentrate directly into the water stream", "It relieves trapped air to help the pump prime faster", "It drains the water to prevent freezing in winter", "It prevents the pump from building up extreme, pipe-bursting pressure if it is run while all the fire hydrants are closed"],
    "exp": "Centrifugal pumps just spin water harmlessly if a valve is closed. Positive displacement gear pumps physically crush water into the pipe. If the valves are closed, the pressure will skyrocket until a pipe explodes, unless a relief valve dumps the excess pressure.",
    "cat": "PUMPS",
    "id": "T15F_129"
  },
  {
    "q": "How does an ETO check the electrical insulation of the Emergency Fire Pump motor located in a damp forward compartment?",
    "a": "By isolating the power at the starter panel and using a 500V DC Megger to measure the resistance between the motor phases and the hull ground; it should be > 1 Mega-Ohm",
    "opts": ["By isolating the power at the starter panel and using a 500V DC Megger to measure the resistance between the motor phases and the hull ground; it should be > 1 Mega-Ohm", "By using a standard digital multimeter set to AC volts", "By turning the pump on and measuring the running amps", "By touching the casing to see if it is electrically 'hot'"],
    "exp": "Because the pump sits in a cold, damp, salty environment (forepeak), condensation easily ruins the winding insulation. Regular Megger testing prevents the terrifying discovery that the pump is short-circuited during an actual fire.",
    "cat": "PUMPS",
    "id": "T15F_130"
  },
  {
    "q": "What is the specific danger of leaving the Bilge Injection Valve partially open by mistake?",
    "a": "The main cooling pump will suck air or oily sludge from the bilge instead of clean seawater, causing the main engine coolers to starve of water and the engine to overheat drastically",
    "opts": ["The bilge will fill with pressurized seawater", "The ship will immediately sink due to back-flooding", "The main switchboard will short circuit", "The main cooling pump will suck air or oily sludge from the bilge instead of clean seawater, causing the main engine coolers to starve of water and the engine to overheat drastically"],
    "exp": "Pumps take the path of least resistance. If the bilge is empty and the valve is cracked open, the massive pump will suck air from the engine room instead of pulling heavy water up from the ocean. The cooling system gets air-locked instantly.",
    "cat": "PUMPS",
    "id": "T15F_131"
  },
  {
    "q": "Why do fire main pipes often feature a small 'Drain Valve' at the lowest point on open weather decks?",
    "a": "To allow the crew to completely drain the water out of the exposed pipes during winter/arctic sailing, preventing the water from freezing, expanding, and splitting the heavy steel pipes open",
    "opts": ["To allow the crew to completely drain the water out of the exposed pipes during winter/arctic sailing, preventing the water from freezing, expanding, and splitting the heavy steel pipes open", "To provide drinking water to the crew during lifeboat musters", "To bleed off excessive water pressure created by the main pump", "To sample the water for salt content"],
    "exp": "Water expands by about 9% when it freezes into ice. This expansion generates immense hydraulic force capable of shattering thick steel fire mains. Draining the lines (Dry Fire Main) is a critical cold-weather precaution.",
    "cat": "PUMPS",
    "id": "T15F_132"
  },
  {
    "q": "What is the function of the 'Anti-Condensation Heater' inside the Emergency Fire Pump electric motor?",
    "a": "A small 220V heating coil that turns ON when the motor is OFF, keeping the internal copper windings warm and dry to prevent salty moisture from destroying the insulation resistance",
    "opts": ["A small 220V heating coil that turns ON when the motor is OFF, keeping the internal copper windings warm and dry to prevent salty moisture from destroying the insulation resistance", "A heater that pre-warms the diesel fuel for easier starting", "A thermal relay that trips the motor if it gets too hot", "A heater that warms the seawater to prevent the pump from cracking"],
    "exp": "Essential for any vital motor living in a damp, unheated compartment (like the bow of the ship). It is electrically interlocked to switch off the moment the main 440V contactor closes so the motor doesn't overheat while running.",
    "cat": "PUMPS",
    "id": "T15F_133"
  },
  {
    "q": "What test should be performed on a diesel-driven Emergency Fire Pump during extreme cold weather (-10\u00b0C)?",
    "a": "Verify the functionality of the engine block jacket water heater and the condition of the starting batteries, as cold temperatures severely reduce battery cranking amps and make diesel hard to ignite",
    "opts": ["Remove the pump impeller to protect it from ice", "Verify the functionality of the engine block jacket water heater and the condition of the starting batteries, as cold temperatures severely reduce battery cranking amps and make diesel hard to ignite", "Run the pump continuously 24/7 to keep the water moving", "Drain all the diesel fuel to prevent it from freezing"],
    "exp": "Cold diesel engines are notoriously hard to start. The block heater keeps the metal warm, and healthy batteries are required because cold chemistry drastically reduces a battery's power output.",
    "cat": "PUMPS",
    "id": "T15F_134"
  },
  {
    "q": "What indicates to a surveyor that an Emergency Fire Pump is 'Self-Priming'?",
    "a": "It possesses an integrated priming mechanism (like a liquid ring vacuum pump or exhaust gas ejector) that actively sucks air out of the suction pipe until solid water reaches the impeller",
    "opts": ["It is positioned deep underwater below the ship's keel", "It requires a crew member to pour a bucket of water into it", "It possesses an integrated priming mechanism (like a liquid ring vacuum pump or exhaust gas ejector) that actively sucks air out of the suction pipe until solid water reaches the impeller", "It is painted a specific shade of bright yellow"],
    "exp": "A manual bucket prime is NOT acceptable for an emergency system. The pump must be able to pull its own water up from the ocean draft level automatically the moment the start button is pressed.",
    "cat": "PUMPS",
    "id": "T15F_135"
  },
  {
    "q": "What happens if the 'Foot Valve' on the EFP suction line gets jammed open by a piece of seaweed?",
    "a": "When the pump stops, all the water in the suction pipe will drain back into the sea; the pump will lose its prime and may fail to deliver water quickly upon the next restart",
    "opts": ["The pump will run significantly faster and more efficiently", "The fire main will instantly over-pressurize and burst", "When the pump stops, all the water in the suction pipe will drain back into the sea; the pump will lose its prime and may fail to deliver water quickly upon the next restart", "The seaweed will chemically react with the bronze impeller"],
    "exp": "The foot valve is a check valve holding the column of water in the pipe. If it leaks, the pipe fills with air. The priming system will have to work hard for several minutes to suck the air out before any water reaches the fire hoses.",
    "cat": "PUMPS",
    "id": "T15F_136"
  },
  {
    "q": "Why is it important to carry a 'Blank Flange' alongside the International Shore Connection (ISC)?",
    "a": "To seal the ship's side of the ISC connection point when it is not in use, ensuring the ship's fire main maintains pressure and doesn't leak water onto the deck",
    "opts": ["To cap off broken fire hoses during an emergency", "To act as a spare part for the main fire pump casing", "To seal the ship's side of the ISC connection point when it is not in use, ensuring the ship's fire main maintains pressure and doesn't leak water onto the deck", "To block the engine exhaust pipe from taking in water"],
    "exp": "The ISC is an open pipe adapter. When you aren't connected to a shore fire truck, you must bolt a solid steel plate (blank flange) over the hole so your own pumps can build up pressure in the system.",
    "cat": "PUMPS",
    "id": "T15F_137"
  },
  {
    "q": "How frequently must the Emergency Fire Pump be tested according to standard Planned Maintenance Systems (PMS)?",
    "a": "A brief operational test is typically conducted weekly, with a full-pressure test (proving two jets of water on deck) conducted monthly",
    "opts": ["A brief operational test is typically conducted weekly, with a full-pressure test (proving two jets of water on deck) conducted monthly", "Once a year during drydock", "Only when a port state control inspector requests it", "Daily, before the master signs the logbook"],
    "exp": "You cannot assume life-saving equipment works. Weekly runs prove the starter, batteries, and motor are alive. Monthly tests prove the hydraulics (pump impeller and pipes) are physically capable of moving water.",
    "cat": "PUMPS",
    "id": "T15F_138"
  },
  {
    "q": "What is the consequence of running a centrifugal fire pump completely 'Dry' (without water) for an extended period?",
    "a": "The mechanical shaft seals rely on water for lubrication and cooling; running dry will cause them to overheat, melt, and shatter, destroying the pump's watertight integrity",
    "opts": ["The bronze impeller will violently explode", "The mechanical shaft seals rely on water for lubrication and cooling; running dry will cause them to overheat, melt, and shatter, destroying the pump's watertight integrity", "Nothing; centrifugal pumps are designed to run on air indefinitely", "The motor will draw excessive current and trip the breaker"],
    "exp": "Water acts as a coolant. If the pump runs dry, the friction of the mechanical seal spinning at 1500 RPM generates intense heat, completely destroying the carbon/ceramic faces within minutes.",
    "cat": "PUMPS",
    "id": "T15F_139"
  },
  {
    "q": "What is the typical power source for the massive Main Fire Pumps located in the engine room?",
    "a": "They are powered directly from the Main Switchboard (440V AC), utilizing large induction motors",
    "opts": ["They are mechanically driven by belts from the main engine shaft", "They are driven by small independent steam turbines", "They are powered directly from the Main Switchboard (440V AC), utilizing large induction motors", "They run exclusively on 24V DC battery banks"],
    "exp": "Main fire pumps are heavy consumers (often 50-100+ kW). They rely entirely on the ship's massive diesel generators for power, which is why the separate, independently-powered Emergency Fire Pump is legally required in case the main switchboard burns up.",
    "cat": "PUMPS",
    "id": "T15F_140"
  },
  {
    "q": "What is the primary role of a 'Zener Diode' embedded inside the base of a conventional fire detector?",
    "a": "It provides a stable reverse-bias voltage drop, allowing the fire panel to distinguish exactly between a normal 'Healthy' state, a 'Fire Alarm' (short circuit), and a 'Fault' (open circuit)",
    "opts": ["It acts as a flashing LED to show the detector is working", "It provides a stable reverse-bias voltage drop, allowing the fire panel to distinguish exactly between a normal 'Healthy' state, a 'Fire Alarm' (short circuit), and a 'Fault' (open circuit)", "It amplifies the smoke signal so it can travel longer distances", "It generates a high-voltage spark to burn off dust inside the detector"],
    "exp": "A standard switch only has two states (Open or Closed). SOLAS requires fire systems to have THREE states (Healthy, Broken Wire, or Actual Fire). The Zener diode provides a specific measurable voltage drop. If the panel sees that exact voltage, the line is healthy. If voltage drops to 0, it's a short (Fire). If voltage spikes, it's a broken wire (Fault).",
    "cat": "FIRE_ALARM",
    "id": "T15F_141"
  },
  {
    "q": "In a fire alarm circuit, what does an 'End-Of-Line' (EOL) resistor or device accomplish?",
    "a": "It allows a tiny, continuous monitoring current to flow through the entire length of the zone wiring; if the wire breaks anywhere, the current stops, and the panel instantly flags a 'Line Fault'",
    "opts": ["It boosts the voltage to push the signal back to the bridge", "It absorbs excess smoke particles to prevent false alarms", "It acts as a lightning arrestor for the final detector", "It allows a tiny, continuous monitoring current to flow through the entire length of the zone wiring; if the wire breaks anywhere, the current stops, and the panel instantly flags a 'Line Fault'"],
    "exp": "Without an EOL resistor, a normal circuit is simply 'open'. The panel wouldn't know if the wire was healthy or if it had been chopped in half by a closing watertight door. The EOL resistor ensures continuous 'supervision' of the copper wire.",
    "cat": "FIRE_ALARM",
    "id": "T15F_142"
  },
  {
    "q": "How does a fire alarm panel visually and audibly differentiate a genuine 'Fire' from a 'Line Fault'?",
    "a": "A Fire is indicated by a RED LED and a loud, continuous alarm tone; a Fault is indicated by an AMBER/YELLOW LED and a distinct, intermittent buzzer tone",
    "opts": ["They are identical; the crew must figure it out by reading the manual", "A Fire is flashing green; a Fault is solid green", "A Fire is indicated by a RED LED and a loud, continuous alarm tone; a Fault is indicated by an AMBER/YELLOW LED and a distinct, intermittent buzzer tone", "A Fire rings the ship's whistle; a Fault drops the ship's anchor"],
    "exp": "This is a strict SOLAS requirement. An officer on the bridge must instantly know if they need to deploy fire hoses (RED alarm) or call the ETO to fix a broken cable (AMBER fault).",
    "cat": "FIRE_ALARM",
    "id": "T15F_143"
  },
  {
    "q": "If moisture condenses inside a conventional smoke detector housing, what false indication might the fire panel display?",
    "a": "The water can bridge the electrical contacts, creating a partial or full short circuit that the panel interprets as a genuine 'Fire Alarm'",
    "opts": ["The panel will turn off completely to prevent electrocution", "The panel will indicate 'High Humidity' and start the AC fans", "The water can bridge the electrical contacts, creating a partial or full short circuit that the panel interprets as a genuine 'Fire Alarm'", "The panel will display a 'Low Battery' warning"],
    "exp": "Water is conductive. If condensation bridges the + and - terminals inside the detector base, current flows freely. The panel thinks the detector activated and sounds a full Red fire alarm, waking up the entire ship for a drop of sweat.",
    "cat": "FIRE_ALARM",
    "id": "T15F_144"
  },
  {
    "q": "What is the function of the 'Universal Drain Box' (or Condensate Trap) in an aspirating smoke detection system pipe network?",
    "a": "It collects and safely drains liquid condensation that forms inside the sampling pipes due to temperature differences, preventing water from being sucked into the sensitive optical laser chamber",
    "opts": ["It stores spare Americium-241 radioactive isotopes", "It filters out toxic chemicals from the smoke", "It mixes fresh air with the smoke to cool it down", "It collects and safely drains liquid condensation that forms inside the sampling pipes due to temperature differences, preventing water from being sucked into the sensitive optical laser chamber"],
    "exp": "Aspirating systems (like VESDA) suck air continuously. If a pipe runs from a hot engine room through a cold AC corridor, the air sweats. Water travels down the pipe. If that water hits the laser detector, it destroys the PCB. The drain box acts as a sump to trap this water.",
    "cat": "FIRE_ALARM",
    "id": "T15F_145"
  },
  {
    "q": "If a surveyor asks: 'You have a fire inside the Main Switchboard (MSB). What is your very first action?'",
    "a": "Raise the fire alarm and inform the Bridge and Chief Engineer immediately",
    "opts": ["Spray the switchboard with a water hose", "Raise the fire alarm and inform the Bridge and Chief Engineer immediately", "Open all the panel doors to ventilate the smoke", "Hit the emergency stop on the main engine"],
    "exp": "Never fight a major shipboard fire alone without telling anyone. You might get electrocuted or overcome by toxic smoke. Alerting the command structure is always the absolute first step.",
    "cat": "FIRE_ALARM",
    "id": "T15F_146"
  },
  {
    "q": "What extinguishing agents MUST NEVER be used on a live Main Switchboard fire?",
    "a": "Water and Foam (AFFF); they are highly conductive and will electrocute the operator and cause massive short circuits",
    "opts": ["Water and Foam (AFFF); they are highly conductive and will electrocute the operator and cause massive short circuits", "CO2 and Dry Chemical Powder", "Sand and FM-200", "Halon and Novec 1230"],
    "exp": "Spraying seawater onto 440V exposed copper busbars is a fatal mistake. The electricity will travel directly up the water stream to the firefighter.",
    "cat": "FIRE_ALARM",
    "id": "T15F_147"
  },
  {
    "q": "For a small, localized incipient fire inside a specific MSB cubicle, what is the best firefighting action?",
    "a": "Isolate the power to that specific section (trip the feeder or tie-breaker) using insulated tools/PPE, then attack the flames using a portable CO2 extinguisher",
    "opts": ["Isolate the power to that specific section (trip the feeder or tie-breaker) using insulated tools/PPE, then attack the flames using a portable CO2 extinguisher", "Flood the entire engine room with the fixed CO2 system", "Initiate a total ship blackout immediately without looking", "Throw a fire blanket completely over the switchboard"],
    "exp": "If it's just a smoking wire or small arc, you don't need to plunge the ship into darkness. Trip the specific breaker to kill the energy source, then use CO2 to snuff the flame without leaving a messy residue.",
    "cat": "FIRE_ALARM",
    "id": "T15F_148"
  },
  {
    "q": "If the MSB fire is large, uncontrollable, and spreading across the busbars, what drastic action must be taken?",
    "a": "Initiate a total ship BLACKOUT by hitting the remote emergency stops for all running generators, completely de-energizing the massive electrical energy feeding the arc fire",
    "opts": ["Initiate a total ship BLACKOUT by hitting the remote emergency stops for all running generators, completely de-energizing the massive electrical energy feeding the arc fire", "Open the sea chests to flood the bottom of the engine room", "Run away and seal the engine room doors forever", "Start all standby generators to increase power to the sprinklers"],
    "exp": "An electrical arc fire generates its own immense heat (thousands of degrees) as long as power flows. You cannot put it out until you cut the power. Dropping all generators kills the busbars, turning a lethal electrical fire into a standard Class A/B plastic and metal fire.",
    "cat": "FIRE_ALARM",
    "id": "T15F_149"
  },
  {
    "q": "What happens automatically immediately after you intentionally blackout the ship to fight the MSB fire?",
    "a": "The Emergency Generator will auto-start (within 45 seconds) and power the Emergency Switchboard, restoring critical lighting, steering, and the Emergency Fire Pump",
    "opts": ["All watertight doors will spring open", "The ship's main engine will automatically go to Full Ahead", "The CO2 total flooding system will auto-release", "The Emergency Generator will auto-start (within 45 seconds) and power the Emergency Switchboard, restoring critical lighting, steering, and the Emergency Fire Pump"],
    "exp": "SOLAS guarantees that even if you kill the main board, the ship survives. The independent Emergency Generator wakes up in the dark, providing the power you need to run fire hoses and see what you are doing.",
    "cat": "FIRE_ALARM",
    "id": "T15F_150"
  },
  {
    "q": "Why is ventilation critical AFTER successfully extinguishing a switchboard fire?",
    "a": "Burning electrical insulation (PVC and rubber) produces extremely toxic and corrosive gases, such as Hydrogen Chloride and Carbon Monoxide, which are lethal to inhale",
    "opts": ["Burning electrical insulation (PVC and rubber) produces extremely toxic and corrosive gases, such as Hydrogen Chloride and Carbon Monoxide, which are lethal to inhale", "To blow the CO2 gas back into the fire extinguishers", "To dry out the water used to fight the fire", "To cool the copper busbars so they don't melt"],
    "exp": "Electrical smoke is incredibly poisonous. Even a small wire fire creates thick, choking, acidic smoke. Firefighters must wear BA sets, and the room must be purged with fresh air before normal crew can enter without masks.",
    "cat": "FIRE_ALARM",
    "id": "T15F_151"
  },
  {
    "q": "What is the likely root cause of a sudden fire breaking out inside a previously healthy Main Switchboard?",
    "a": "A loose busbar bolted joint (causing high resistance and localized extreme heating), insulation degradation due to dirt/salt, or a failing circuit breaker contact",
    "opts": ["A loose busbar bolted joint (causing high resistance and localized extreme heating), insulation degradation due to dirt/salt, or a failing circuit breaker contact", "The generator spinning slightly too fast (e.g., 61 Hz)", "The ambient engine room temperature reaching 35\u00b0C", "The ship sailing through a high-magnetic anomaly near the equator"],
    "exp": "Vibration loosens massive bolts. Hundreds of amps flowing through a loose gap creates thousands of watts of heat (I\u00b2R losses). The copper glows red hot, igniting the surrounding plastic wire casing.",
    "cat": "FIRE_ALARM",
    "id": "T15F_152"
  },
  {
    "q": "Why is Dry Chemical Powder (DCP) considered a 'last resort' for electrical switchboard fires compared to CO2?",
    "a": "DCP leaves a thick, corrosive, and abrasive dust coating over everything; it will permanently destroy delicate relays and contactors, requiring a massive, expensive cleanup effort before power can be restored",
    "opts": ["DCP freezes the copper wires, causing them to shatter", "DCP leaves a thick, corrosive, and abrasive dust coating over everything; it will permanently destroy delicate relays and contactors, requiring a massive, expensive cleanup effort before power can be restored", "DCP is highly electrically conductive and will shock the user", "DCP chemically reacts with copper to create explosive gas"],
    "exp": "CO2 is a 'Clean Agent'. It puts the fire out and vanishes into the air. DCP is a giant cloud of baking soda-like powder that gets sucked into every microchip and magnetic coil, often doing more financial damage than the fire itself.",
    "cat": "FIRE_ALARM",
    "id": "T15F_153"
  },
  {
    "q": "In an 'Addressable' fire detection system, how does the panel know exactly which cabin has the fire?",
    "a": "Each detector has a unique microchip with a digital address (e.g., ID: 142); it communicates via data packets on the loop, telling the panel exactly 'Who' and 'Where' it is",
    "opts": ["Each detector has its own dedicated copper wire running all the way back to the bridge", "The panel uses GPS to locate the smoke", "The panel measures the exact length of the wire using voltage drop", "Each detector has a unique microchip with a digital address (e.g., ID: 142); it communicates via data packets on the loop, telling the panel exactly 'Who' and 'Where' it is"],
    "exp": "Conventional systems just say 'Zone 3 is on fire' (which could be 20 different cabins). Addressable systems use digital communication so the screen can explicitly display 'Fire in Chief Mate's Cabin, Deck 4'.",
    "cat": "FIRE_ALARM",
    "id": "T15F_154"
  },
  {
    "q": "What is the primary advantage of a 'Loop' wiring topology in an addressable fire alarm system?",
    "a": "If the cable is accidentally cut in one place, the panel can still communicate with all detectors by sending signals down both the 'forward' and 'return' sides of the broken loop",
    "opts": ["If the cable is accidentally cut in one place, the panel can still communicate with all detectors by sending signals down both the 'forward' and 'return' sides of the broken loop", "It doubles the electrical voltage, making alarms louder", "It prevents static electricity from building up on the wires", "It allows the detectors to power themselves without a battery"],
    "exp": "A loop starts at the panel, visits 50 detectors, and comes back to the panel. A single cut just turns the loop into two separate, fully functional dead-end wires. The system survives the damage flawlessly.",
    "cat": "FIRE_ALARM",
    "id": "T15F_155"
  },
  {
    "q": "What is an 'Isolator Module' in an addressable fire loop?",
    "a": "A smart switch that detects a dead short-circuit on the wiring and instantly disconnects the broken section, preventing the short from dragging down the voltage of the entire loop",
    "opts": ["A smart switch that detects a dead short-circuit on the wiring and instantly disconnects the broken section, preventing the short from dragging down the voltage of the entire loop", "A module that isolates the panel from lightning strikes", "A switch that mutes the alarm bell", "A device that separates smoke signals from heat signals"],
    "exp": "If a fire melts the cable and the + and - wires touch, the whole loop dies. Isolators are placed every 20 detectors. They act like automatic circuit breakers, chopping off the melted piece so the remaining 90% of the ship's detectors keep working.",
    "cat": "FIRE_ALARM",
    "id": "T15F_156"
  },
  {
    "q": "How does an ETO safely test an Ionization or Photoelectric smoke detector during routine maintenance?",
    "a": "By using an approved aerosol 'Test Smoke' spray (simulated smoke particles) directed into the sensing chamber; NEVER use a real candle or naked flame",
    "opts": ["By blowing cigar smoke into it", "By using an approved aerosol 'Test Smoke' spray (simulated smoke particles) directed into the sensing chamber; NEVER use a real candle or naked flame", "By using a blowtorch to simulate real fire conditions", "By spraying high-pressure water mist at the ceiling"],
    "exp": "A naked flame creates a severe fire hazard. Real smoke leaves greasy, sticky soot inside the delicate optical chamber, permanently blinding the sensor. The aerosol test gas is clean, pure, and evaporates away harmlessly.",
    "cat": "FIRE_ALARM",
    "id": "T15F_157"
  },
  {
    "q": "How does an ETO safely test a Fixed Temperature or Rate-of-Rise Heat detector?",
    "a": "By using an approved portable heat gun or specialized hot-air blower held near the sensor until it triggers; again, NEVER use an open flame",
    "opts": ["By short-circuiting the wires with a screwdriver", "By pouring boiling water over the sensor casing", "By wrapping the sensor in a heated blanket for 24 hours", "By using an approved portable heat gun or specialized hot-air blower held near the sensor until it triggers; again, NEVER use an open flame"],
    "exp": "A lighter or blowtorch can literally melt the plastic housing of the detector and destroy the delicate bimetallic strips inside. A heat gun provides a safe, controlled blast of warm air.",
    "cat": "FIRE_ALARM",
    "id": "T15F_158"
  },
  {
    "q": "What happens if a crew member pushes a 'Manual Call Point' (Break Glass station) in the alleyway?",
    "a": "It acts identically to an automatic detector triggering; it creates a short circuit (or sends an active digital signal) that instantly sounds the fire alarm for that zone on the bridge panel",
    "opts": ["It shuts down the main engine directly", "It acts identically to an automatic detector triggering; it creates a short circuit (or sends an active digital signal) that instantly sounds the fire alarm for that zone on the bridge panel", "It releases the CO2 total flooding system automatically", "It calls the nearest shore-based fire department via satellite"],
    "exp": "Manual call points are just big, red, human-operated fire detectors. Breaking the glass releases a microswitch, immediately forcing the system into a full Red Alarm state.",
    "cat": "FIRE_ALARM",
    "id": "T15F_159"
  },
  {
    "q": "What is the crucial SOLAS requirement regarding the power supply for the ship's Main Fire Detection Panel?",
    "a": "It must be powered by the main AC source AND have a dedicated automatic switchover to a backup 24V DC battery supply capable of running the system during a total blackout",
    "opts": ["It is powered by a hand-cranked generator", "It must be powered entirely by solar panels", "It must be powered by the main AC source AND have a dedicated automatic switchover to a backup 24V DC battery supply capable of running the system during a total blackout", "It relies solely on the Emergency Diesel Generator"],
    "exp": "A fire often causes a blackout. If the ship goes dark, the fire panel MUST stay alive. The dedicated internal battery bank ensures the bridge can still see exactly where the fire is spreading while the engineers fight to restore power.",
    "cat": "FIRE_ALARM",
    "id": "T15F_160"
  },
  {
    "q": "If a detector in the Galley keeps triggering false alarms every time the chef boils pasta, what is the best technical solution?",
    "a": "Replace the existing Smoke Detector with a Fixed-Temperature Heat Detector (e.g., 93\u00b0C), which ignores steam and smoke but will still catch a genuine, raging fire",
    "opts": ["Tell the chef to stop boiling water", "Replace the existing Smoke Detector with a Fixed-Temperature Heat Detector (e.g., 93\u00b0C), which ignores steam and smoke but will still catch a genuine, raging fire", "Wrap a plastic bag around the smoke detector to keep steam out", "Permanently disconnect the detector and leave the wires taped up"],
    "exp": "Smoke detectors cannot distinguish between burning plastic smoke and thick cooking steam (both scatter the optical laser). Galleys and laundries are naturally steamy. Heat detectors provide robust safety without the annoying false alarms.",
    "cat": "FIRE_ALARM",
    "id": "T15F_161"
  },
  {
    "q": "What is an 'Aspirating' (or Air Sampling) Smoke Detector (e.g., VESDA)?",
    "a": "An ultra-sensitive system that uses a vacuum fan to actively suck air samples from the room through a pipe network into a central, highly precise laser detection chamber",
    "opts": ["A mechanical fan that blows smoke out of the window", "A detector that sniffs the air for specific toxic chemicals", "An ultra-sensitive system that uses a vacuum fan to actively suck air samples from the room through a pipe network into a central, highly precise laser detection chamber", "A detector that sprays chemical aerosols into the air to neutralize smoke"],
    "exp": "Instead of waiting passively for smoke to drift up to the ceiling, aspirating systems actively vacuum the room air. They can detect a smoldering wire hours before it erupts into visible flame, making them ideal for high-value server rooms and ECRs.",
    "cat": "FIRE_ALARM",
    "id": "T15F_162"
  },
  {
    "q": "How does an ETO troubleshoot a 'Low Flow' or 'Air Flow Fault' on a VESDA (aspirating) smoke detection panel?",
    "a": "Check the internal air filter (replace if clogged), ensure the vacuum aspirator fan is running, and physically inspect the sampling pipe network for blockages or crushed pipes",
    "opts": ["Check the internal air filter (replace if clogged), ensure the vacuum aspirator fan is running, and physically inspect the sampling pipe network for blockages or crushed pipes", "Adjust the Zener diode voltage on the main board", "Increase the voltage to the laser diode", "Pour water down the sampling pipe to clean it"],
    "exp": "The system monitors its own breathing. If the filter is choked with dust, or someone smashed the plastic sampling pipe with a forklift, the air stops flowing. The panel detects this drop in airflow and alerts the ETO that the room is no longer protected.",
    "cat": "FIRE_ALARM",
    "id": "T15F_163"
  },
  {
    "q": "Why is 'Cross-Zoning' (Coincidence Detection) used before automatically releasing a fixed extinguishing system like Water Mist in the engine room?",
    "a": "It requires TWO independent detectors in the same area to trigger simultaneously before dumping the water; this prevents a single faulty sensor from accidentally flooding the running machinery",
    "opts": ["It requires TWO independent detectors in the same area to trigger simultaneously before dumping the water; this prevents a single faulty sensor from accidentally flooding the running machinery", "It requires the fire to cross over a painted line on the deck", "It ensures the alarm rings in both the Port and Starboard alleyways", "It links the fire alarm to the ship's main steering gear"],
    "exp": "Dumping high-pressure water onto a running 440V switchboard because one single smoke detector got confused by a cloud of steam is a disaster. Cross-zoning ensures the computer demands 'second-opinion' proof before pulling the trigger.",
    "cat": "FIRE_ALARM",
    "id": "T15F_164"
  },
  {
    "q": "If the main fire panel displays an 'Earth Fault' warning, what does this indicate to the ETO?",
    "a": "That the bare copper of the fire alarm wiring is touching the ship's steel hull somewhere; this must be traced and fixed, as a second earth fault could short out the system and cause false alarms or dead zones",
    "opts": ["That the ship is running aground in shallow water", "That the batteries are fully charged and resting on the deck", "That the main switchboard is perfectly grounded", "That the bare copper of the fire alarm wiring is touching the ship's steel hull somewhere; this must be traced and fixed, as a second earth fault could short out the system and cause false alarms or dead zones"],
    "exp": "Fire systems are 'floating' ungrounded 24V DC systems. An earth fault means insulation has chafed away. Tracing it involves splitting the loop in half repeatedly until the specific grounded section of wire is found.",
    "cat": "FIRE_ALARM",
    "id": "T15F_165"
  },
  {
    "q": "What is the function of the 'Isolate' or 'Disable' button on a fire alarm panel?",
    "a": "It allows the ETO to temporarily mute or ignore a specific broken detector or zone while repairs are made or dusty work (like welding) is performed, preventing continuous false alarms",
    "opts": ["It isolates the main engine from the propeller shaft", "It shuts all the watertight doors on the ship", "It permanently deletes the detector from the ship's memory", "It allows the ETO to temporarily mute or ignore a specific broken detector or zone while repairs are made or dusty work (like welding) is performed, preventing continuous false alarms"],
    "exp": "If shipyard workers are grinding steel in Hold 2, the smoke detectors will scream constantly. The ETO 'isolates' Zone 2. The panel ignores Zone 2 but keeps protecting the rest of the ship. Isolated zones must be logged and re-enabled immediately after work finishes.",
    "cat": "FIRE_ALARM",
    "id": "T15F_166"
  },
  {
    "q": "Why must the fire alarm panel's audible buzzer be capable of being 'Silenced' by the bridge watchkeeper?",
    "a": "To allow the navigating officers to communicate clearly on radios and phones during the emergency; however, the flashing RED light will remain on until the physical fire is actually extinguished and reset",
    "opts": ["Because SOLAS noise regulations limit alarms to 5 seconds", "To signal to the firefighters that the bridge has abandoned ship", "Because the noise drains the backup battery too quickly", "To allow the navigating officers to communicate clearly on radios and phones during the emergency; however, the flashing RED light will remain on until the physical fire is actually extinguished and reset"],
    "exp": "A screaming 100-decibel siren makes it impossible for the Captain to yell orders or hear the VHF radio. Pressing 'Acknowledge/Silence' stops the noise, but the visual warning stays locked on the screen.",
    "cat": "FIRE_ALARM",
    "id": "T15F_167"
  },
  {
    "q": "In a CO2 protected space (like a Paint Locker), what initiates the release of the extinguishing gas?",
    "a": "It is completely manual; an operator must physically go to the release station outside the locker and pull the handle. CO2 is never set to automatic release on ships due to the lethal asphyxiation hazard",
    "opts": ["A timer automatically dumps the gas every Friday at noon", "The heat detector inside the locker triggers an automatic solenoid to dump the gas", "It is completely manual; an operator must physically go to the release station outside the locker and pull the handle. CO2 is never set to automatic release on ships due to the lethal asphyxiation hazard", "The bridge pushes a digital button on the radar screen"],
    "exp": "You must never trust a computer to release a deadly gas. If a crew member is sleeping in the paint locker and a faulty smoke detector auto-dumps the CO2, they die. A human must look, verify the room is empty, and pull the lever.",
    "cat": "FIRE_ALARM",
    "id": "T15F_168"
  },
  {
    "q": "What happens when you 'Reset' the main fire panel after a fire has been extinguished?",
    "a": "The panel momentarily drops the 24V power supply to the entire detector loop (for about 3 seconds), forcing all activated smoke and heat detectors to unlatch and clear their memory",
    "opts": ["It sends a massive high-voltage shock to burn the soot out of the detectors", "It calls the engine room to ask for permission to reset", "It formats the hard drive and deletes all historical fire records", "The panel momentarily drops the 24V power supply to the entire detector loop (for about 3 seconds), forcing all activated smoke and heat detectors to unlatch and clear their memory"],
    "exp": "Detectors are 'latching' devices. Once they see smoke, they lock on (staying in alarm mode) even if the smoke blows away. The only way to make them forget is to cut their power for a second. This is what the 'Reset' button actually does.",
    "cat": "FIRE_ALARM",
    "id": "T15F_169"
  },
  {
    "q": "If a fire alarm sounds on the bridge, but clears itself completely back to normal 5 seconds later without anyone touching the panel, what likely occurred?",
    "a": "A transient issue; perhaps a puff of steam, a heavy vibration, or a loose wire momentarily triggered the sensor before clearing naturally",
    "opts": ["The panel's microprocessor crashed and rebooted", "A massive explosion destroyed the detector instantly", "The CO2 system automatically put the fire out in 5 seconds", "A transient issue; perhaps a puff of steam, a heavy vibration, or a loose wire momentarily triggered the sensor before clearing naturally"],
    "exp": "While most detectors latch, some modern panels have advanced algorithms that 'double-check' the sensor. If the sensor screams for 2 seconds (e.g., a burst of steam from a kettle) and then goes quiet, the panel logs it as a transient event rather than a full fire.",
    "cat": "FIRE_ALARM",
    "id": "T15F_170"
  },
  {
    "q": "What radioactive isotope is utilized inside a marine Ionisation smoke detector?",
    "a": "Americium-241 (Am-241)",
    "opts": ["Cesium-137 (Cs-137)", "Uranium-235 (U-235)", "Cobalt-60 (Co-60)", "Americium-241 (Am-241)"],
    "exp": "Americium-241 is used as it emits alpha particles, which ionize the air inside the sensing chamber to allow a tiny monitoring current to flow.",
    "cat": "DETECTORS",
    "id": "T15F_171"
  },
  {
    "q": "What type of radiation is emitted by the Americium-241 source in an Ionisation detector?",
    "a": "Alpha particles",
    "opts": ["Gamma rays", "X-rays", "Alpha particles", "Beta particles"],
    "exp": "Am-241 emits alpha particles. Alpha particles have very low penetrative power; they are easily stopped by a sheet of paper or the plastic housing of the detector, posing no external radiation hazard to the crew.",
    "cat": "DETECTORS",
    "id": "T15F_172"
  },
  {
    "q": "What is the approximate half-life of the Americium-241 isotope used in smoke detectors?",
    "a": "432 years",
    "opts": ["10 years", "5,730 years", "2 million years", "432 years"],
    "exp": "Am-241 has a half-life of 432 years, meaning the radioactive source will easily outlast the operational lifespan of the ship without needing replacement.",
    "cat": "DETECTORS",
    "id": "T15F_173"
  },
  {
    "q": "Which type of fire is an Ionisation smoke detector most sensitive to?",
    "a": "Fast-flaming fires producing very small, invisible combustion particles",
    "opts": ["Deep-seated electrical fires producing large chunks of soot", "Slow-smouldering fires producing thick, heavy smoke", "Chemical fires producing invisible, odorless toxic gases", "Fast-flaming fires producing very small, invisible combustion particles"],
    "exp": "Ionisation detectors excel at detecting the microscopic particles created by fast, violently flaming fires before thick smoke even becomes visible.",
    "cat": "DETECTORS",
    "id": "T15F_174"
  },
  {
    "q": "What are the primary internal components of a Photoelectric (Optical) smoke detector?",
    "a": "An LED (Light Emitting Diode) and a photodetector arranged in a dark chamber",
    "opts": ["An LED (Light Emitting Diode) and a photodetector arranged in a dark chamber", "A bimetallic strip and a microswitch", "An Americium source and two charged electrodes", "A laser and a moving mirror assembly"],
    "exp": "The LED shoots a beam of light. Normally, it misses the photodetector. When smoke enters, the particles scatter the light onto the photodetector, triggering the alarm.",
    "cat": "DETECTORS",
    "id": "T15F_175"
  },
  {
    "q": "Which type of fire is a Photoelectric smoke detector best suited to detect?",
    "a": "Slow-smouldering fires that produce large, visible smoke particles",
    "opts": ["Explosive gas flashes", "Slow-smouldering fires that produce large, visible smoke particles", "High-heat alcohol fires with no visible smoke", "Metal fires (Class D)"],
    "exp": "Large smoke particles (like from a smouldering mattress) are highly effective at scattering the LED light beam inside the optical chamber.",
    "cat": "DETECTORS",
    "id": "T15F_176"
  },
  {
    "q": "Why is a Photoelectric smoke detector preferred over an Ionisation type near a galley or shower room?",
    "a": "It is less prone to false alarms caused by cooking steam or high humidity",
    "opts": ["It is less prone to false alarms caused by cooking steam or high humidity", "It is completely waterproof and IP68 rated", "It operates much faster in high-heat environments", "It can detect the chemical signature of burning cooking fat"],
    "exp": "Ionisation detectors mistake steam and humidity for combustion particles easily. Optical detectors are much more resilient to steam, reducing nuisance false alarms.",
    "cat": "DETECTORS",
    "id": "T15F_177"
  },
  {
    "q": "What are the typical activation setpoints for a Fixed-Temperature Heat Detector?",
    "a": "58\u00b0C, 72\u00b0C, or 93\u00b0C depending on the ambient temperature of the space",
    "opts": ["250\u00b0C strictly for engine room applications", "100\u00b0C, 150\u00b0C, or 200\u00b0C depending on the ambient temperature of the space", "58\u00b0C, 72\u00b0C, or 93\u00b0C depending on the ambient temperature of the space", "30\u00b0C, 40\u00b0C, or 50\u00b0C depending on the ambient temperature of the space"],
    "exp": "Standard cabins might use 58\u00b0C, while an engine room or galley roof requires 93\u00b0C to prevent the normal heat of operation from triggering false alarms.",
    "cat": "DETECTORS",
    "id": "T15F_178"
  },
  {
    "q": "What physical mechanism is most commonly used inside a Fixed-Temperature Heat Detector?",
    "a": "A bimetallic strip or a fusible metal link",
    "opts": ["A bimetallic strip or a fusible metal link", "A vibrating piezoelectric crystal", "A mercury tilt switch", "An expanding gas bladder"],
    "exp": "When the specific temperature is reached, a bimetallic strip bends to close an electrical contact, or a fusible link melts to release a spring-loaded switch.",
    "cat": "DETECTORS",
    "id": "T15F_179"
  },
  {
    "q": "At what condition does a 'Rate-of-Rise' (ROR) heat detector typically trigger an alarm?",
    "a": "When the ambient temperature increases faster than 8 to 10\u00b0C per minute",
    "opts": ["When the ambient temperature increases faster than 1 to 2\u00b0C per minute", "When the ambient temperature increases faster than 8 to 10\u00b0C per minute", "When the absolute temperature hits exactly 100\u00b0C", "When the ambient temperature drops suddenly due to a CO2 discharge"],
    "exp": "ROR detectors measure the speed of heating. If the room jumps 15 degrees in one minute, it alarms, even if the room is only 40\u00b0C. This provides very early warning for rapidly developing fires.",
    "cat": "DETECTORS",
    "id": "T15F_180"
  },
  {
    "q": "What is the primary advantage of a Rate-of-Rise (ROR) heat detector over a Fixed-Temperature type?",
    "a": "It detects rapidly developing fires much earlier, long before the absolute room temperature reaches the fixed limit",
    "opts": ["It detects rapidly developing fires much earlier, long before the absolute room temperature reaches the fixed limit", "It can be installed directly inside a boiler exhaust stack", "It uses zero electrical power to operate", "It also detects the presence of carbon monoxide"],
    "exp": "If a room is 20\u00b0C and a fast fire starts, the ROR will alarm at 30\u00b0C (if it heated up in 30 seconds). A fixed-temp detector would wait silently until the entire ceiling reached 72\u00b0C.",
    "cat": "DETECTORS",
    "id": "T15F_181"
  },
  {
    "q": "What is a 'Combined' Heat Detector?",
    "a": "A detector that features both Rate-of-Rise and Fixed-Temperature sensing, triggering an alarm if either condition is met",
    "opts": ["A detector that features both Rate-of-Rise and Fixed-Temperature sensing, triggering an alarm if either condition is met", "A unit that sprays water while simultaneously detecting heat", "A detector that combines smoke and heat detection in one unit", "A detector linked to both the main and emergency switchboards"],
    "exp": "Combined heat detectors are the most versatile. If a fire grows slowly, it might beat the ROR logic, but the fixed-temp element will still catch it when it crosses 72\u00b0C.",
    "cat": "DETECTORS",
    "id": "T15F_182"
  },
  {
    "q": "How does a 'Pneumatic Tube' heat detector operate?",
    "a": "A long, sealed tube is run along the deckhead; fire heats the trapped air inside, which expands and pushes a diaphragm to actuate a pressure switch",
    "opts": ["A tube pumps continuous air; a fire blocks the flow, triggering an alarm", "A tube filled with water boils, sending steam to a sensor", "A long, sealed tube is run along the deckhead; fire heats the trapped air inside, which expands and pushes a diaphragm to actuate a pressure switch", "A plastic tube melts, dropping air pressure to trigger an alarm"],
    "exp": "This is a simple, highly robust system. Because the tube covers a vast area, a fire anywhere along its length heats the air, raising the internal pressure enough to trip the sensor at the end of the line.",
    "cat": "DETECTORS",
    "id": "T15F_183"
  },
  {
    "q": "What is the main advantage of a Pneumatic Tube heat detector system?",
    "a": "It is simple, robust, requires no electrical wiring along the deckhead, and is ideal for very large, harsh machinery spaces",
    "opts": ["It pinpoints the exact millimeter where the fire started", "It is simple, robust, requires no electrical wiring along the deckhead, and is ideal for very large, harsh machinery spaces", "It automatically repairs itself after the fire is extinguished", "It reacts in milliseconds to tiny puffs of smoke"],
    "exp": "Because it's just a hollow copper or stainless tube, it survives incredible heat, vibration, and dirt without the failure points associated with running hundreds of meters of sensitive electrical cable.",
    "cat": "DETECTORS",
    "id": "T15F_184"
  },
  {
    "q": "What specific physical property does a Flame Detector look for to trigger an alarm?",
    "a": "Ultraviolet (UV) or Infrared (IR) electromagnetic radiation emitted directly by the combustion process",
    "opts": ["The physical heat of the flames touching the sensor", "The sudden drop in oxygen concentration in the room", "Ultraviolet (UV) or Infrared (IR) electromagnetic radiation emitted directly by the combustion process", "The exact sound frequency of a roaring fire"],
    "exp": "Flame detectors are optical devices. They 'see' the invisible UV and IR light given off by chemical combustion, allowing them to react instantly without waiting for heat or smoke to drift up to the ceiling.",
    "cat": "DETECTORS",
    "id": "T15F_185"
  },
  {
    "q": "What is the typical response time of a UV Flame Detector?",
    "a": "3 to 5 milliseconds",
    "opts": ["3 to 5 milliseconds", "1 to 2 minutes", "10 to 15 seconds", "3 to 5 seconds"],
    "exp": "Because they work at the speed of light, UV detectors react almost instantaneously to the flash of a fuel explosion, making them critical for high-risk areas like the purifier room or boiler front.",
    "cat": "DETECTORS",
    "id": "T15F_186"
  },
  {
    "q": "What are common causes of 'False Alarms' on a standalone UV Flame Detector?",
    "a": "Direct sunlight, arc welding, lightning, and certain types of unshielded fluorescent lights",
    "opts": ["Thick black smoke and steam", "High ambient engine room temperatures", "Direct sunlight, arc welding, lightning, and certain types of unshielded fluorescent lights", "Loud noises and severe engine vibration"],
    "exp": "Arc welding emits massive amounts of UV radiation. If a fitter strikes an arc in the engine room and the UV detector has line-of-sight, it will instantly trigger a full fire alarm. Many modern systems use combined UV/IR to filter out welding.",
    "cat": "DETECTORS",
    "id": "T15F_187"
  },
  {
    "q": "How does an ETO safely perform routine testing on a UV Flame Detector?",
    "a": "By aiming a specially calibrated, manufacturer-supplied UV Test Lamp at the detector window from a prescribed distance",
    "opts": ["By aiming a specially calibrated, manufacturer-supplied UV Test Lamp at the detector window from a prescribed distance", "By lighting a piece of paper on fire under the sensor", "By using a standard high-power LED flashlight", "By short-circuiting the sensor terminals with a jumper wire"],
    "exp": "The test lamp emits a safe pulse of UV radiation at the exact wavelength the detector is looking for. It proves the lens is clean and the electronics work without creating a massive fire hazard.",
    "cat": "DETECTORS",
    "id": "T15F_188"
  },
  {
    "q": "Why is it strictly forbidden to use an open flame (like a gas lighter) to test a flame or heat detector in the engine room?",
    "a": "It creates a massive, genuine fire risk near fuel/vapors, and the excessive heat can permanently damage or destroy the delicate sensor housing",
    "opts": ["It causes the fire alarm panel to permanently lock up", "It creates a massive, genuine fire risk near fuel/vapors, and the excessive heat can permanently damage or destroy the delicate sensor housing", "The flame is not hot enough to trigger marine-grade sensors", "It drains the ship's oxygen supply"],
    "exp": "Surveyors will fail a candidate for suggesting the use of a lighter. It is a severe safety violation to introduce naked flames into a machinery space just for testing. It also melts the plastic of the detectors.",
    "cat": "DETECTORS",
    "id": "T15F_189"
  },
  {
    "q": "Why must the ETO routinely wipe the glass window of a UV Flame Detector?",
    "a": "An invisible film of engine oil or dust heavily attenuates (blocks) UV light, blinding the sensor to a real fire",
    "opts": ["To ensure the glass doesn't shatter from thermal shock", "An invisible film of engine oil or dust heavily attenuates (blocks) UV light, blinding the sensor to a real fire", "To allow the internal laser to escape the housing", "To prevent static electricity from building up on the glass"],
    "exp": "UV light cannot easily pass through grease or oil. In an engine room, a fine mist of oil eventually coats everything. If the lens isn't cleaned, a raging fire could occur and the blind sensor would never trigger.",
    "cat": "DETECTORS",
    "id": "T15F_190"
  },
  {
    "q": "How does an ETO correctly test a conventional smoke detector?",
    "a": "By spraying an approved, synthetic 'Test Smoke' aerosol directly into the detector's sensing chamber",
    "opts": ["By covering the detector with a dark cloth for 10 seconds", "By blowing cigarette smoke into the detector", "By spraying an approved, synthetic 'Test Smoke' aerosol directly into the detector's sensing chamber", "By burning a specialized smoke pellet on the floor below"],
    "exp": "Approved aerosol 'canned smoke' simulates combustion particles perfectly but leaves no sticky residue and evaporates harmlessly. Real smoke contains tar and soot which permanently ruins the optical chamber.",
    "cat": "DETECTORS",
    "id": "T15F_191"
  },
  {
    "q": "Why must real smoke or burning candles NEVER be used to test an Ionisation smoke detector?",
    "a": "The soot and tar permanently contaminate the sensing chamber, and can coat the radioactive Am-241 source, ruining its calibration and safety",
    "opts": ["Candles generate a magnetic field that disrupts the electronics", "The soot and tar permanently contaminate the sensing chamber, and can coat the radioactive Am-241 source, ruining its calibration and safety", "Real smoke contains too much oxygen to trigger the alarm", "The heat of the candle will melt the radioactive isotope"],
    "exp": "Tar from real smoke sticks to the Americium source, physically blocking the alpha particles from ionizing the air. This permanently destroys the detector's ability to function.",
    "cat": "DETECTORS",
    "id": "T15F_192"
  },
  {
    "q": "How is a Heat Detector correctly tested during routine maintenance?",
    "a": "Using a specially designed, battery-powered portable heat gun or hot-air blower placed over the detector head",
    "opts": ["Using a standard industrial blowtorch held 10cm away", "By shorting the internal thermistor wires", "Using a specially designed, battery-powered portable heat gun or hot-air blower placed over the detector head", "By pouring boiling water over the waterproof sensor casing"],
    "exp": "Marine-approved heat testers cup the detector and blow a controlled stream of warm air (e.g., 80\u00b0C) safely onto the bimetallic strip or thermistor, testing it without melting the plastic housing.",
    "cat": "DETECTORS",
    "id": "T15F_193"
  },
  {
    "q": "What is the working principle of an Ultrasonic or Aspirating Smoke Detector (like VESDA)?",
    "a": "A high-efficiency fan actively draws air samples continuously through a pipe network into a highly sensitive, centralized laser detection chamber",
    "opts": ["A high-efficiency fan actively draws air samples continuously through a pipe network into a highly sensitive, centralized laser detection chamber", "It uses underwater sonar technology adapted for dense smoke", "It sprays a chemical mist that reacts audibly when touching smoke", "It blasts ultrasonic sound waves across the ceiling to listen for the crackle of fire"],
    "exp": "VESDA (Very Early Smoke Detection Apparatus) doesn't wait for smoke to reach it. It actively vacuums the room air. Its laser chamber is hundreds of times more sensitive than a standard spot detector.",
    "cat": "DETECTORS",
    "id": "T15F_194"
  },
  {
    "q": "How is an Aspirating (VESDA) smoke detection system properly tested?",
    "a": "By introducing approved synthetic test smoke aerosol directly into the furthest sampling hole of the pipe network to ensure the pump draws it back to the panel",
    "opts": ["By removing the main laser and cleaning it", "By introducing approved synthetic test smoke aerosol directly into the furthest sampling hole of the pipe network to ensure the pump draws it back to the panel", "By spraying water into the pipes to clear dust", "By blocking all the holes to test the vacuum pressure"],
    "exp": "You must prove two things: that the laser works, and that the pipe isn't blocked or crushed. Spraying smoke at the far end proves the air actually travels all the way down the pipe to the sensor.",
    "cat": "DETECTORS",
    "id": "T15F_195"
  },
  {
    "q": "What happens if the internal air filter on an Aspirating (VESDA) system becomes completely choked with dust?",
    "a": "The airflow drops below limits, and the panel triggers a 'Low Flow Fault' alarm, indicating the room is no longer being actively sampled",
    "opts": ["The system automatically switches to a backup optical sensor", "The system triggers a full fire alarm to evacuate the space", "The airflow drops below limits, and the panel triggers a 'Low Flow Fault' alarm, indicating the room is no longer being actively sampled", "The vacuum fan reverses direction to blow the filter clean"],
    "exp": "The system constantly monitors its own airflow. If the filter is dirty, it can't breathe. It warns the ETO with a yellow Fault light so the filter can be replaced before fire protection is totally lost.",
    "cat": "DETECTORS",
    "id": "T15F_196"
  },
  {
    "q": "Why are UV Flame Detectors preferred over Visible Light or Infrared sensors for monitoring the main boiler burner flames?",
    "a": "Because the hot refractory bricks inside the furnace glow bright orange/red, which would fool a visible/IR sensor, but they emit virtually zero UV radiation",
    "opts": ["Because UV sensors do not require any electrical power", "Because the hot refractory bricks inside the furnace glow bright orange/red, which would fool a visible/IR sensor, but they emit virtually zero UV radiation", "Because heavy fuel oil smoke completely blocks all infrared light", "Because UV light can bend around corners in the furnace"],
    "exp": "A boiler is essentially a glowing red cave. IR sensors would look at the walls and think 'flame is present' even if the burner went out. The UV sensor only sees the chemical reaction of the actual flame.",
    "cat": "DETECTORS",
    "id": "T15F_197"
  },
  {
    "q": "In which specific shipboard areas are Flame Detectors most critically required?",
    "a": "Engine room bilges, purifier rooms, boiler fronts, and tanker pump rooms where highly flammable liquids could cause instantaneous explosive fires",
    "opts": ["The emergency generator room and the steering flat", "Engine room bilges, purifier rooms, boiler fronts, and tanker pump rooms where highly flammable liquids could cause instantaneous explosive fires", "Passenger cabins, mess rooms, and the bridge", "Paint lockers, dry provision stores, and the funnel uptake"],
    "exp": "Areas with a massive risk of a high-pressure oil spray hitting a hot exhaust require sensors that react in milliseconds (flame detectors), rather than waiting minutes for smoke to rise.",
    "cat": "DETECTORS",
    "id": "T15F_198"
  },
  {
    "q": "Where are Fixed-Temperature Heat Detectors typically preferred over Smoke Detectors?",
    "a": "In galleys, laundries, and engine room workshop areas where normal steam, dust, or welding fumes would cause constant false alarms for smoke detectors",
    "opts": ["Inside the main switchboard panels", "In the cargo control room and radio room", "In galleys, laundries, and engine room workshop areas where normal steam, dust, or welding fumes would cause constant false alarms for smoke detectors", "In the hospital and accommodation corridors"],
    "exp": "You cannot put a smoke detector above a stove or a shower; it will alarm every day. Heat detectors provide excellent, false-alarm-free protection in naturally steamy or dusty environments.",
    "cat": "DETECTORS",
    "id": "T15F_199"
  },
  {
    "q": "Is the radioactive Am-241 source inside an Ionisation detector a health hazard to the ETO during normal maintenance?",
    "a": "No, it emits only low-energy alpha particles which cannot penetrate the plastic casing or human skin; it is entirely safe unless the detector is broken open and the source is ingested or inhaled",
    "opts": ["No, it emits only low-energy alpha particles which cannot penetrate the plastic casing or human skin; it is entirely safe unless the detector is broken open and the source is ingested or inhaled", "No, because the radiation naturally expires completely every 2 years", "Yes, the ETO must wear a lead-lined apron when changing the detector", "Yes, it emits high-level gamma radiation that ruins mobile phones"],
    "exp": "Alpha particles travel only a few centimeters in air and are stopped by a sheet of paper. As long as the ETO does not smash the detector and eat the foil source, it is perfectly safe to handle.",
    "cat": "DETECTORS",
    "id": "T15F_200"
  },
  {
    "q": "What is the approximate expansion ratio of liquid CO2 when it is discharged into an engine room at atmospheric pressure?",
    "a": "1:450 (One liter of liquid expands to 450 liters of gas)",
    "opts": ["1:50", "1:1700", "1:200", "1:450 (One liter of liquid expands to 450 liters of gas)"],
    "exp": "This massive expansion ratio is why a relatively compact bank of heavy steel cylinders can completely fill and suffocate a giant three-story engine room in seconds.",
    "cat": "CO2_SYS",
    "id": "T15F_201"
  },
  {
    "q": "To successfully extinguish a fire, a CO2 total flooding system must displace enough air to drop the ambient Oxygen (O2) concentration below what critical threshold?",
    "a": "Below 15% Oxygen",
    "opts": ["Below 21% Oxygen", "Below 15% Oxygen", "Below 5% Oxygen", "Exactly 0% Oxygen"],
    "exp": "Normal air is 21% oxygen. Most standard fires cannot sustain the chemical chain reaction of combustion if the oxygen drops below 15%. CO2 physically displaces the air to achieve this.",
    "cat": "CO2_SYS",
    "id": "T15F_202"
  },
  {
    "q": "What is the minimum required design concentration of CO2 (by volume) for protecting the main machinery space (engine room)?",
    "a": "Minimum 34% CO2 by volume",
    "opts": ["Minimum 10% CO2 by volume", "Minimum 50% CO2 by volume", "Minimum 34% CO2 by volume", "Minimum 85% CO2 by volume"],
    "exp": "SOLAS specifies that enough cylinders must be released to achieve a 34% concentration of CO2 gas within the gross volume of the largest machinery space.",
    "cat": "CO2_SYS",
    "id": "T15F_203"
  },
  {
    "q": "In what physical state is CO2 stored inside the high-pressure steel cylinders in the CO2 room, and at what approximate pressure (at 20\u00b0C)?",
    "a": "It is stored as a liquid under its own vapor pressure, at approximately 57 bar",
    "opts": ["As a solid block of dry ice at atmospheric pressure", "It is stored as a liquid under its own vapor pressure, at approximately 57 bar", "As a compressed gas at 200 bar", "As a cryogenic liquid at 5 bar and -150\u00b0C"],
    "exp": "Because CO2 liquefies easily under pressure at room temperature, the heavy steel cylinders contain liquid CO2 with a cushion of pressurized vapor at the top (~57 bar at normal room temp).",
    "cat": "CO2_SYS",
    "id": "T15F_204"
  },
  {
    "q": "According to SOLAS, how frequently must the CO2 cylinders in the fixed system be checked for contents, and how is it done?",
    "a": "Annually; they must be physically weighed, or checked with an approved liquid level indicator",
    "opts": ["Daily; by checking the main control panel for fault lights", "Annually; they must be physically weighed, or checked with an approved liquid level indicator", "Every 5 years; by discharging a test cylinder", "Monthly; by reading the pressure gauges on each cylinder"],
    "exp": "Because they contain liquid under its own vapor pressure, a pressure gauge will read '57 bar' whether the cylinder is 100% full or 10% full (as long as a drop of liquid remains). The ONLY way to know how much CO2 is inside is to weigh the heavy cylinder.",
    "cat": "CO2_SYS",
    "id": "T15F_205"
  },
  {
    "q": "During the annual weighing, at what point MUST a CO2 cylinder be sent ashore for recharging?",
    "a": "If its weight shows a loss of more than 10% of its original stamped charge weight",
    "opts": ["If its weight shows a loss of more than 10% of its original stamped charge weight", "If it loses more than 50% of its weight", "If it loses more than 1% of its weight", "If the pressure drops below 50 bar"],
    "exp": "If the cylinder was originally filled with 45kg of CO2, a loss of more than 4.5kg means the cylinder has leaked unacceptably and must be refilled to guarantee the 34% concentration rule can be met.",
    "cat": "CO2_SYS",
    "id": "T15F_206"
  },
  {
    "q": "The main CO2 release station typically utilizes a 'Two-Valve' sequential operation. What are these two valves?",
    "a": "The Pilot Valve (which opens the pilot gas lines and sounds the alarm) and the Main Valve (which opens the manifold to flood the space)",
    "opts": ["The Exhaust Valve and the Intake Valve", "The High Pressure Valve and the Low Pressure Valve", "The Red Valve and the Green Valve", "The Pilot Valve (which opens the pilot gas lines and sounds the alarm) and the Main Valve (which opens the manifold to flood the space)"],
    "exp": "This sequential logic prevents accidental discharge. Pulling lever 1 opens a small pilot cylinder to sound alarms and pressurize the pneumatic actuators. Pulling lever 2 then allows that pilot pressure to slam open the 100+ main cylinder valves simultaneously.",
    "cat": "CO2_SYS",
    "id": "T15F_207"
  },
  {
    "q": "What happens immediately when the Pilot Valve is opened in the CO2 release cabinet?",
    "a": "A distinct, loud pre-discharge alarm sounds in the protected space, and a time delay (usually 20-30 seconds) begins before the gas can release",
    "opts": ["The ship's main engine instantly shuts down", "A distinct, loud pre-discharge alarm sounds in the protected space, and a time delay (usually 20-30 seconds) begins before the gas can release", "The main cylinder bank immediately empties into the engine room", "All the watertight doors spring open"],
    "exp": "The pre-discharge alarm (often a very loud pneumatic horn driven by the CO2 pilot gas) screams a unique tone. This warns anyone trapped inside the engine room that lethal gas is imminent, giving them 20-30 seconds to run for the exit.",
    "cat": "CO2_SYS",
    "id": "T15F_208"
  },
  {
    "q": "Why is the 20-30 second time delay absolutely critical in a CO2 total flooding system?",
    "a": "CO2 is a lethal, asphyxiating gas; the delay provides the only chance for any remaining crew members to evacuate the engine room before it floods",
    "opts": ["CO2 is a lethal, asphyxiating gas; the delay provides the only chance for any remaining crew members to evacuate the engine room before it floods", "It allows the fire to grow large enough for the CO2 to work effectively", "It gives the main engine time to cool down slowly", "It allows the CO2 liquid to turn into a gas inside the pipes"],
    "exp": "A massive dump of CO2 drops oxygen below 15% in seconds. Anyone caught inside without a BA set will collapse and die of asphyxiation almost instantly. The alarm and delay are the ultimate life-safety features.",
    "cat": "CO2_SYS",
    "id": "T15F_209"
  },
  {
    "q": "What is the MOST IMPORTANT administrative check the ETO/Chief Engineer must perform before physically opening the CO2 release valves?",
    "a": "Perform a physical headcount to ensure EVERY single crew member is accounted for and safely outside the protected space",
    "opts": ["Check the level of the heavy fuel oil tanks", "Email the company technical superintendent for permission", "Perform a physical headcount to ensure EVERY single crew member is accounted for and safely outside the protected space", "Test the CO2 alarm panel using the lamp-test button"],
    "exp": "You cannot rely solely on the alarm horn. If an oiler is unconscious in the bilges, or wearing ear defenders, they will not escape. You MUST do a muster and headcount. If one man is missing, you do NOT pull the lever.",
    "cat": "CO2_SYS",
    "id": "T15F_210"
  },
  {
    "q": "Before releasing CO2 into an engine room fire, what critical action must be taken regarding the space's ventilation?",
    "a": "All fans must be stopped, and all fire dampers, skylights, and louvers must be tightly closed to perfectly seal the space",
    "opts": ["All exhaust fans must be run at maximum speed to pull the CO2 in", "All fans must be stopped, and all fire dampers, skylights, and louvers must be tightly closed to perfectly seal the space", "The skylights must be opened fully to let the smoke out", "The air conditioning must be switched to recirculate mode"],
    "exp": "If the space is not hermetically sealed, the CO2 gas will just blow out the funnel or open vents, fresh oxygen will rush in, and the fire will not go out. You must seal it like a tomb.",
    "cat": "CO2_SYS",
    "id": "T15F_211"
  },
  {
    "q": "Why must all fuel oil quick-closing valves be shut before dumping CO2?",
    "a": "To stop feeding combustible fuel to the fire; starvation is the first step before smothering",
    "opts": ["Because the fuel pumps run on CO2 pressure", "To stop feeding combustible fuel to the fire; starvation is the first step before smothering", "To protect the ship's fuel reserve for the rest of the voyage", "To prevent the CO2 from freezing the fuel in the pipes"],
    "exp": "If a ruptured pipe is pumping 100 liters of diesel a minute onto the fire, the CO2 will temporarily put the flame out, but the hot engine will just re-ignite the fresh fuel moments later. Shut the quick-closing valves first.",
    "cat": "CO2_SYS",
    "id": "T15F_212"
  },
  {
    "q": "What is Step 1 of the physical release sequence at the CO2 remote release cabinet?",
    "a": "Break the glass, open the cabinet door, and verify the 'Selector Valve' is pointing to the correct space (e.g., Engine Room vs. Cargo Hold 2)",
    "opts": ["Pull the Main Valve lever immediately", "Wait 24 hours for the fire to cool", "Shut off the lights in the CO2 room", "Break the glass, open the cabinet door, and verify the 'Selector Valve' is pointing to the correct space (e.g., Engine Room vs. Cargo Hold 2)"],
    "exp": "The CO2 room has one massive bank of cylinders shared by multiple spaces. If the engine room is on fire, but the selector valve is aimed at Cargo Hold 1, you will waste your only shot of CO2 into an empty box.",
    "cat": "CO2_SYS",
    "id": "T15F_213"
  },
  {
    "q": "What specifically does the 'Pilot Valve' do mechanically in a massive multi-cylinder CO2 system?",
    "a": "It releases gas from 1 or 2 small pilot cylinders, which travels down pneumatic lines to physically push open the heavy brass valves on the 100+ main cylinders simultaneously",
    "opts": ["It physically locks the engine room doors to prevent escape", "It releases gas from 1 or 2 small pilot cylinders, which travels down pneumatic lines to physically push open the heavy brass valves on the 100+ main cylinders simultaneously", "It ignites a small flare to burn off excess oxygen", "It measures the exact weight of the gas being deployed"],
    "exp": "A human cannot manually twist open 150 high-pressure cylinder valves in 10 seconds. The pilot valve uses high-pressure CO2 gas to actuate a pneumatic manifold that slams all 150 valves open at the exact same millisecond.",
    "cat": "CO2_SYS",
    "id": "T15F_214"
  },
  {
    "q": "After successfully flooding the engine room with CO2 and putting the fire out, how long MUST the crew wait before even considering opening a door or re-entering the space?",
    "a": "A minimum of 24 hours to allow the massive heavy metal components to cool below the auto-ignition temperature of the fuel",
    "opts": ["1 hour", "They can enter immediately if they hold their breath", "15 minutes", "A minimum of 24 hours to allow the massive heavy metal components to cool below the auto-ignition temperature of the fuel"],
    "exp": "CO2 offers poor cooling. The fire is out, but the 30-ton iron engine block is still 500\u00b0C. If you open the door after 2 hours, oxygen rushes in, hits the hot iron and the fuel mist, and causes a massive, explosive backdraft (re-ignition). Keep it sealed.",
    "cat": "CO2_SYS",
    "id": "T15F_215"
  },
  {
    "q": "When re-entry is finally permitted after 24 hours, what equipment MUST the first inspection team wear?",
    "a": "Full Self-Contained Breathing Apparatus (SCBA) sets and a lifeline, as the engine room will still be completely filled with lethal CO2 gas",
    "opts": ["Just a dust mask and a flashlight", "Nothing, provided they leave the door open for 5 minutes first", "Full Self-Contained Breathing Apparatus (SCBA) sets and a lifeline, as the engine room will still be completely filled with lethal CO2 gas", "A 15-minute EEBD hood"],
    "exp": "CO2 is heavier than air. Even with doors open, the lower platforms will be a death trap of invisible, suffocating gas. The first team goes in on air (SCBA) to verify the fire is out and start the ventilation fans.",
    "cat": "CO2_SYS",
    "id": "T15F_216"
  },
  {
    "q": "What is a 'Low Pressure (LP) CO2 System', typically found on large Ro-Ro vessels or car carriers?",
    "a": "A system where CO2 is stored in one or two massive, refrigerated bulk tanks at -18\u00b0C, rather than hundreds of individual high-pressure cylinders",
    "opts": ["A system where CO2 is mixed with seawater to lower the pressure safely", "A system that relies entirely on portable 9kg extinguishers", "A system where CO2 is stored in one or two massive, refrigerated bulk tanks at -18\u00b0C, rather than hundreds of individual high-pressure cylinders", "A system that uses air compressors to pump CO2 out of the exhaust stack"],
    "exp": "Instead of 600 separate steel bottles (which take up massive space and are hard to weigh), an LP system uses a giant insulated cryogenic tank. A refrigeration unit keeps the liquid CO2 chilled to -18\u00b0C, which drops its vapor pressure to a manageable 20 bar.",
    "cat": "CO2_SYS",
    "id": "T15F_217"
  },
  {
    "q": "At what approximate pressure and temperature is CO2 stored in an LP CO2 bulk tank?",
    "a": "Approximately 20 bar at -18\u00b0C",
    "opts": ["Approximately 20 bar at -18\u00b0C", "200 bar at 40\u00b0C", "57 bar at 20\u00b0C", "1 bar at -50\u00b0C"],
    "exp": "Chilling the CO2 drops the pressure drastically. The ETO's main job on this system is maintaining the dual refrigeration compressors that keep the tank at -18\u00b0C.",
    "cat": "CO2_SYS",
    "id": "T15F_218"
  },
  {
    "q": "What critical ETO maintenance check must be performed on an LP CO2 system daily/weekly?",
    "a": "Verifying that the refrigeration compressors are running properly to maintain -18\u00b0C, and checking the liquid level gauge",
    "opts": ["Verifying that the refrigeration compressors are running properly to maintain -18\u00b0C, and checking the liquid level gauge", "Replacing the spark plugs in the pilot cylinders", "Releasing 1 kg of CO2 to ensure the pipes are not frozen", "Manually weighing the massive bulk tank with a crane"],
    "exp": "If the refrigeration unit fails, the liquid CO2 warms up to room temperature. The pressure will skyrocket to 60+ bar, blowing the safety relief valves and venting the entire ship's firefighting supply safely but uselessly into the sky.",
    "cat": "CO2_SYS",
    "id": "T15F_219"
  },
  {
    "q": "What is the function of the 'Selector Valve' (or distribution valve) manifold in a CO2 room?",
    "a": "It ensures the CO2 gas is routed only into the specific space that is on fire (e.g., Hold 3), preventing it from being wasted in healthy compartments",
    "opts": ["It ensures the CO2 gas is routed only into the specific space that is on fire (e.g., Hold 3), preventing it from being wasted in healthy compartments", "It selects whether to use CO2, foam, or water mist", "It switches the power supply to the emergency generator", "It allows the crew to select the exact percentage of CO2 required"],
    "exp": "A ship has one central bank of CO2. The manifold has heavy valves pointing to Hold 1, Hold 2, Engine Room, etc. The pilot system automatically opens the correct selector valve so the gas goes to the right place.",
    "cat": "CO2_SYS",
    "id": "T15F_220"
  },
  {
    "q": "Under SOLAS, what is the required CO2 design concentration for a Paint Locker fixed smothering system?",
    "a": "At least 40% CO2 by volume",
    "opts": ["34% CO2", "100% pure CO2", "At least 40% CO2 by volume", "10% CO2"],
    "exp": "Paint lockers are extremely dangerous, packed with highly flammable solvents and thinners. They require a thicker 'knock-down' concentration (40%) compared to the standard engine room diesel-fire requirement (34%).",
    "cat": "CO2_SYS",
    "id": "T15F_221"
  },
  {
    "q": "Where MUST the CO2 release station for the Paint Locker be physically located?",
    "a": "Outside the paint locker, typically at the access door, so it can be operated safely without entering the burning space",
    "opts": ["On the main navigation bridge only", "Inside the paint locker next to the exhaust fan", "Outside the paint locker, typically at the access door, so it can be operated safely without entering the burning space", "Deep inside the main engine room bilges"],
    "exp": "If the paint locker is on fire, you cannot walk inside to pull the fire extinguisher lever. SOLAS requires the release handle to be safely mounted on the bulkhead just outside the door.",
    "cat": "CO2_SYS",
    "id": "T15F_222"
  },
  {
    "q": "Why is CO2 considered a 'Clean Agent' and highly preferred for electrical switchboard fires?",
    "a": "It leaves absolutely no residue, powder, or water damage, allowing delicate electronic equipment to survive the extinguishment process",
    "opts": ["It physically scrubs the soot off the copper busbars", "It is the cheapest fire extinguishing agent to manufacture", "It leaves absolutely no residue, powder, or water damage, allowing delicate electronic equipment to survive the extinguishment process", "It converts the toxic smoke into pure oxygen"],
    "exp": "If you blast a switchboard with Dry Chemical Powder, the fire goes out, but the abrasive baking-soda-like powder ruins every relay and contactor, causing millions in damage. CO2 puts the fire out and vanishes perfectly into the air.",
    "cat": "CO2_SYS",
    "id": "T15F_223"
  },
  {
    "q": "How does the CO2 Pre-Discharge Alarm differ from a normal electronic fire bell, ensuring it works even during a total blackout?",
    "a": "It is typically a loud pneumatic horn powered directly by the pressurized CO2 gas from the pilot cylinder, requiring zero electricity to operate",
    "opts": ["It uses an optical strobe light that absorbs ambient heat to flash", "It relies on the ship's 440V main busbar exclusively", "It uses a hand-cranked siren operated by the Chief Engineer", "It is typically a loud pneumatic horn powered directly by the pressurized CO2 gas from the pilot cylinder, requiring zero electricity to operate"],
    "exp": "If the engine room is blazing and the ship is blacked out, electronic sirens might fail. Routing a bit of the 57-bar pilot CO2 gas through a physical brass horn guarantees an ear-piercing scream that cannot fail.",
    "cat": "CO2_SYS",
    "id": "T15F_224"
  },
  {
    "q": "Why is a Fixed CO2 System NEVER set to 'Automatic Release' upon smoke detection on a commercial cargo ship?",
    "a": "Due to the lethal, asphyxiating nature of CO2, a human must ALWAYS visually verify the space is evacuated before pulling the lever, to prevent mass casualties on a false alarm",
    "opts": ["Because automatic valves are prone to freezing shut at -18\u00b0C", "Because computers cannot calculate the correct 34% volume required", "Due to the lethal, asphyxiating nature of CO2, a human must ALWAYS visually verify the space is evacuated before pulling the lever, to prevent mass casualties on a false alarm", "Because maritime law requires the Captain to sign a physical paper permit first"],
    "exp": "If a steam leak tricks a smoke detector and the computer auto-dumps 5 tons of CO2 into the engine room, every mechanic on watch dies instantly. The system is strictly manual-release for life safety.",
    "cat": "CO2_SYS",
    "id": "T15F_225"
  },
  {
    "q": "When checking the CO2 Room door during monthly maintenance, what strict safety rule applies to its hinges?",
    "a": "The door MUST open outwards (away from the room), preventing the crew from being trapped inside if the pressure rises or cylinders leak",
    "opts": ["The door must slide vertically on hydraulic tracks", "The door must be padlocked from the outside with no internal handle", "The door MUST open outwards (away from the room), preventing the crew from being trapped inside if the pressure rises or cylinders leak", "The door must open inwards to trap the CO2 gas inside the room"],
    "exp": "If a cylinder leaks heavily, the CO2 room fills with gas. CO2 expands and builds pressure. If the door opened inwards, the gas pressure would hold it permanently shut, trapping and suffocating anyone inside. Outward-opening doors are mandatory.",
    "cat": "CO2_SYS",
    "id": "T15F_226"
  },
  {
    "q": "What major Class requirement occurs for high-pressure CO2 cylinders every 10 years?",
    "a": "They must be removed from the ship, emptied, and subjected to a strict Hydrostatic Pressure Test to prove the steel casing hasn't weakened",
    "opts": ["They must be removed from the ship, emptied, and subjected to a strict Hydrostatic Pressure Test to prove the steel casing hasn't weakened", "They must be thrown overboard as artificial reefs", "They must be weighed twice in one day", "They must be painted a bright neon yellow"],
    "exp": "Storing gas at 57+ bar puts immense stress on the steel. After 10 years, rust or fatigue might weaken the bottles, turning them into bombs. Shore facilities pump them full of high-pressure water (hydro-test) to prove they won't burst.",
    "cat": "CO2_SYS",
    "id": "T15F_227"
  },
  {
    "q": "What is the consequence of failing to stop the engine room ventilation fans before dumping CO2?",
    "a": "The massive fans will blow the CO2 gas right out the funnel, failing to reach the 34% concentration, and sucking fresh oxygen in to feed the fire",
    "opts": ["The fans will overspeed due to the density of the CO2 gas", "Nothing, the CO2 is heavy enough to ignore the fans", "The massive fans will blow the CO2 gas right out the funnel, failing to reach the 34% concentration, and sucking fresh oxygen in to feed the fire", "The fans will freeze solid and shatter due to the -78\u00b0C gas"],
    "exp": "CO2 only works if it stays trapped in the room like water in a bathtub. Fans act like a drain, venting your only firefighting agent into the atmosphere while pumping fresh air into the flames.",
    "cat": "CO2_SYS",
    "id": "T15F_228"
  },
  {
    "q": "Why is the CO2 room strictly located OUTSIDE the main machinery space?",
    "a": "So that an engine room fire cannot cut off access to the release controls or overheat the cylinders and cause them to explode",
    "opts": ["To allow the Chief Engineer to sleep closer to the controls", "To save space on the bottom platform for fuel purifiers", "So that an engine room fire cannot cut off access to the release controls or overheat the cylinders and cause them to explode", "Because the main switchboard magnetic field interferes with the cylinders"],
    "exp": "If the fire is in the engine room, and your firefighting equipment is inside the engine room, you can't reach it. The CO2 room must be safely on the main deck, completely separated from the risk zone.",
    "cat": "CO2_SYS",
    "id": "T15F_229"
  },
  {
    "q": "If the main CO2 system fails to discharge when the main valve is pulled, what backup mechanism exists?",
    "a": "A specialized tool or lever is provided to allow an engineer to physically, manually actuate the master cylinder valves to bypass the pneumatic pilot system",
    "opts": ["A specialized tool or lever is provided to allow an engineer to physically, manually actuate the master cylinder valves to bypass the pneumatic pilot system", "The engineer must cut the pipes with a hacksaw to let the gas out", "There is a secondary, identical CO2 room on the opposite side of the ship", "The system automatically drops the anchor to signal for help"],
    "exp": "If the pneumatic pilot lines are leaking or frozen, the heavy brass valves won't open. Engineers are trained to use a manual release lever directly on the manifold valves as a last-resort override.",
    "cat": "CO2_SYS",
    "id": "T15F_230"
  },
  {
    "q": "Under the BS EN 3 standard, what visually identifies a Foam fire extinguisher?",
    "a": "A red cylinder with a CREAM colored panel above the operating instructions",
    "opts": ["A red cylinder with a CREAM colored panel above the operating instructions", "A yellow cylinder with a red handle", "A completely solid blue cylinder", "A red cylinder with a BLACK colored panel"],
    "exp": "Color codes are critical for split-second decisions. Red = Water. Cream = Foam. Black = CO2. Blue = Dry Powder. Yellow = Wet Chemical.",
    "cat": "PORTABLE",
    "id": "T15F_231"
  },
  {
    "q": "Under the BS EN 3 standard, what visually identifies a CO2 fire extinguisher?",
    "a": "A red cylinder with a BLACK colored panel, and a distinctly large, cone-shaped discharge horn",
    "opts": ["A black cylinder with a red panel", "A green cylinder with a metal nozzle", "A red cylinder with a BLUE panel and a thin rubber hose", "A red cylinder with a BLACK colored panel, and a distinctly large, cone-shaped discharge horn"],
    "exp": "The black panel indicates CO2. The large plastic horn is required to allow the rapidly expanding, freezing gas (-78\u00b0C) to slow down and expand without clogging, and protects the user's hands from frostbite.",
    "cat": "PORTABLE",
    "id": "T15F_232"
  },
  {
    "q": "Under the BS EN 3 standard, what visually identifies a Dry Chemical Powder (DCP) extinguisher?",
    "a": "A red cylinder with a BLUE colored panel",
    "opts": ["A blue cylinder with a white handle", "A completely white cylinder", "A red cylinder with a BLUE colored panel", "A red cylinder with a CREAM colored panel"],
    "exp": "Blue indicates Dry Powder. DCP is the multi-tool of extinguishers, highly effective on Class A, B, and C fires, and safe for E (electrical).",
    "cat": "PORTABLE",
    "id": "T15F_233"
  },
  {
    "q": "Under the BS EN 3 standard, what visually identifies a Wet Chemical fire extinguisher?",
    "a": "A red cylinder with a YELLOW colored panel",
    "opts": ["A red cylinder with a YELLOW colored panel", "A completely silver cylinder", "A yellow cylinder with a black panel", "A red cylinder with a GREEN panel"],
    "exp": "Yellow indicates Wet Chemical. These are exclusively located in or near the galley, as they are the only extinguisher approved for Class F (deep fat fryer) fires.",
    "cat": "PORTABLE",
    "id": "T15F_234"
  },
  {
    "q": "What does a completely solid RED portable fire extinguisher contain?",
    "a": "Plain Water",
    "opts": ["CO2", "Halon", "Plain Water", "AFFF Foam"],
    "exp": "Solid red (no secondary color panel) indicates Water. It is strictly for Class A (wood/paper) fires and is lethal if used on Class B (oil) or Class E (electrical).",
    "cat": "PORTABLE",
    "id": "T15F_235"
  },
  {
    "q": "At what approximate internal pressure is a portable CO2 extinguisher stored?",
    "a": "Approximately 57 bar",
    "opts": ["150 bar", "Approximately 57 bar", "2 bar", "10 bar"],
    "exp": "Because it stores liquid CO2 at room temperature, the vapor pressure rests around 57 bar (820 psi). This high pressure means the cylinder shell is much thicker and heavier than a water extinguisher.",
    "cat": "PORTABLE",
    "id": "T15F_236"
  },
  {
    "q": "What is the major safety hazard to the operator when discharging a portable CO2 extinguisher?",
    "a": "Frostbite; the rapidly expanding gas drops to -78\u00b0C, which can instantly freeze the operator's bare hand if they grip the uninsulated parts of the horn",
    "opts": ["The cylinder exploding like a grenade", "Electrocution from static buildup inside the cylinder", "Frostbite; the rapidly expanding gas drops to -78\u00b0C, which can instantly freeze the operator's bare hand if they grip the uninsulated parts of the horn", "Third-degree burns from the exothermic chemical reaction"],
    "exp": "As the liquid CO2 flashes to gas, it absorbs massive amounts of heat. The metal piping and the base of the horn become dangerously cold. Operators must ONLY hold the designated insulated handle.",
    "cat": "PORTABLE",
    "id": "T15F_237"
  },
  {
    "q": "What is the correct way to hold and aim a portable CO2 extinguisher?",
    "a": "Hold it by the insulated handle or grip, aim the horn at the BASE of the flames, and sweep side-to-side",
    "opts": ["Grip the widest part of the plastic horn to aim it precisely at the top of the flames", "Hold it upside down and spray it over the top of the fire like rain", "Hold it by the insulated handle or grip, aim the horn at the BASE of the flames, and sweep side-to-side", "Rest the horn directly against the burning material"],
    "exp": "Aiming at the base targets the fuel source, displacing the oxygen right where combustion is happening. Sweeping pushes the flames back.",
    "cat": "PORTABLE",
    "id": "T15F_238"
  },
  {
    "q": "What are the primary active ingredients inside a standard Dry Chemical Powder (DCP) extinguisher?",
    "a": "Sodium Bicarbonate or Potassium Bicarbonate powder, mixed with Magnesium Stearate and pressurized by Nitrogen gas",
    "opts": ["Sodium Bicarbonate or Potassium Bicarbonate powder, mixed with Magnesium Stearate and pressurized by Nitrogen gas", "Crushed glass and aluminum oxide", "Calcium carbonate pressurized with pure Oxygen", "Pure carbon dust mixed with liquid water"],
    "exp": "The bicarbonate powder physically binds with free radicals in the flame. The Nitrogen is an inert propellant gas used to blow the powder out.",
    "cat": "PORTABLE",
    "id": "T15F_239"
  },
  {
    "q": "Why is Magnesium Stearate explicitly added to the powder in a DCP extinguisher?",
    "a": "It acts as a water-repellent, anti-caking 'flow agent' that prevents the powder from compacting into a solid brick due to engine room vibration and humidity",
    "opts": ["It makes the powder burn hotter, destroying the fire faster", "It acts as a water-repellent, anti-caking 'flow agent' that prevents the powder from compacting into a solid brick due to engine room vibration and humidity", "It dissolves the oil in a Class B fire into harmless water", "It provides the blue color to the powder for visibility"],
    "exp": "Without magnesium stearate (or silicones), the constant vibration of the ship and high humidity would turn the baking soda powder into a solid block of concrete inside the cylinder, making it useless.",
    "cat": "PORTABLE",
    "id": "T15F_240"
  },
  {
    "q": "What is the primary maintenance task the crew must perform monthly on all portable DCP extinguishers?",
    "a": "Invert the cylinder and tap or shake it firmly to agitate the powder, ensuring it remains free-flowing and hasn't settled at the bottom",
    "opts": ["Invert the cylinder and tap or shake it firmly to agitate the powder, ensuring it remains free-flowing and hasn't settled at the bottom", "Paint the cylinder red to prevent rusting", "Spray a small amount of powder out to test the nozzle", "Top up the pressure with the ship's compressed air line"],
    "exp": "Even with anti-caking agents, powder settles over time. Flipping the cylinder upside down and feeling the heavy powder 'thud' against the top proves it is still loose and ready to fire.",
    "cat": "PORTABLE",
    "id": "T15F_241"
  },
  {
    "q": "What are the contents of a portable Foam extinguisher?",
    "a": "Water mixed with a small percentage of AFFF (Aqueous Film-Forming Foam) concentrate, pressurized by a gas cartridge or stored pressure",
    "opts": ["Water mixed with a small percentage of AFFF (Aqueous Film-Forming Foam) concentrate, pressurized by a gas cartridge or stored pressure", "Pure liquid CO2 mixed with soap", "High-pressure steam and detergents", "Dry chemical powder mixed with expanding polyurethane"],
    "exp": "The cylinder holds a soapy water mixture. The actual physical foam bubbles are only created at the very tip of the nozzle, where the fast-moving liquid sucks in ambient air (aspiration) to whip it into foam.",
    "cat": "PORTABLE",
    "id": "T15F_242"
  },
  {
    "q": "How does Foam physically extinguish a Class B (flammable liquid) fire?",
    "a": "It forms a light, continuous physical blanket floating on top of the oil, smothering the oxygen supply and sealing the hot, flammable vapors inside the liquid",
    "opts": ["It forms a light, continuous physical blanket floating on top of the oil, smothering the oxygen supply and sealing the hot, flammable vapors inside the liquid", "It freezes the oil into a solid plastic block", "It sinks to the bottom of the tank and cools the metal from below", "It chemically reacts with the oil to turn it into CO2 gas"],
    "exp": "Foam is lighter than oil. It creates an airtight, unbroken seal across the pool of burning diesel. Without oxygen, the flames die. Without escaping vapors, re-ignition is impossible.",
    "cat": "PORTABLE",
    "id": "T15F_243"
  },
  {
    "q": "What is the active ingredient inside a Wet Chemical extinguisher?",
    "a": "An alkaline solution of Potassium Acetate or Potassium Citrate",
    "opts": ["Pure distilled water and baking soda", "An alkaline solution of Potassium Acetate or Potassium Citrate", "Fluoroprotein foam concentrate", "Liquid nitrogen"],
    "exp": "This specific alkaline chemical is the only thing capable of dealing with the extreme heat (350\u00b0C+) and chemical nature of burning cooking fat.",
    "cat": "PORTABLE",
    "id": "T15F_244"
  },
  {
    "q": "How does a Wet Chemical extinguisher defeat a Class F (cooking fat) fire?",
    "a": "Through 'Saponification'; the chemical reacts with the hot fat to instantly create a thick, soapy, non-flammable crust over the surface, while the water content provides rapid cooling",
    "opts": ["Through 'Saponification'; the chemical reacts with the hot fat to instantly create a thick, soapy, non-flammable crust over the surface, while the water content provides rapid cooling", "Through 'Oxidation'; it burns up all the fat instantly", "By freezing the deep fryer to absolute zero", "By starving the fire of oxygen using a heavy cloud of CO2"],
    "exp": "Saponification literally turns the top layer of the burning cooking oil into soap. This soapy crust seals the intensely hot oil from the oxygen in the air, preventing it from bursting back into flames.",
    "cat": "PORTABLE",
    "id": "T15F_245"
  },
  {
    "q": "A fire breaks out in the bottom platform bilges involving electrical cables and a running motor. Which extinguisher is the BEST choice?",
    "a": "CO2; it is electrically non-conductive, smothers the fire, and leaves absolutely no residue to damage the surviving electronics",
    "opts": ["Water; to provide maximum cooling to the steel plates", "CO2; it is electrically non-conductive, smothers the fire, and leaves absolutely no residue to damage the surviving electronics", "Foam; because the bilges are oily", "Wet Chemical; to saponify the melting plastic cables"],
    "exp": "While DCP is non-conductive and would put the fire out, it blasts a highly corrosive, abrasive powder everywhere, ruining open motors and relays. CO2 is a 'clean agent' that kills the fire and vanishes.",
    "cat": "PORTABLE",
    "id": "T15F_246"
  },
  {
    "q": "Why is Dry Chemical Powder (DCP) considered acceptable but NOT preferred for an electrical fire?",
    "a": "Although it safely extinguishes the fire without electrocuting the user, the powder residue is highly abrasive and corrosive, often permanently destroying the delicate contacts and circuit boards",
    "opts": ["Although it safely extinguishes the fire without electrocuting the user, the powder residue is highly abrasive and corrosive, often permanently destroying the delicate contacts and circuit boards", "The powder is highly flammable when mixed with burning copper", "It freezes the wires, causing them to shatter like glass", "It conducts electricity if the voltage is above 220V"],
    "exp": "DCP is technically rated for Class E. However, using it inside an expensive main switchboard will require weeks of vacuuming and replacing ruined contactors. CO2 should always be the first grab for electrical.",
    "cat": "PORTABLE",
    "id": "T15F_247"
  },
  {
    "q": "Why is throwing a bucket of Water on a Class F (galley deep fryer) fire incredibly dangerous?",
    "a": "The water instantly sinks below the 350\u00b0C oil, flashes into steam, expands 1700 times in volume, and violently erupts, blowing the burning oil all over the chef and the galley",
    "opts": ["The water instantly sinks below the 350\u00b0C oil, flashes into steam, expands 1700 times in volume, and violently erupts, blowing the burning oil all over the chef and the galley", "The water dissolves the oil into toxic mustard gas", "The water cools the oil too quickly, shattering the steel fryer", "The water conducts electricity straight to the stove element"],
    "exp": "This is a classic 'boilover' steam explosion. Water is heavier than oil, so it sinks. The intense heat flashes it to steam. The massive volume expansion throws the burning oil straight up in the air like a bomb.",
    "cat": "PORTABLE",
    "id": "T15F_248"
  },
  {
    "q": "Why is CO2 strongly discouraged for use on a Class F (galley deep fryer) fire?",
    "a": "The high-pressure blast scatters the burning oil, and CO2 lacks the cooling capacity to drop the oil below its auto-ignition point, causing it to instantly re-ignite when the gas clears",
    "opts": ["CO2 ruins the food, which violates maritime catering laws", "CO2 is highly flammable when mixed with vegetable oil", "The high-pressure blast scatters the burning oil, and CO2 lacks the cooling capacity to drop the oil below its auto-ignition point, causing it to instantly re-ignite when the gas clears", "CO2 freezes the oil into a solid, explosive block"],
    "exp": "Cooking oil burns because it is incredibly hot (above its auto-ignition temperature). CO2 puts the flame out by displacing oxygen, but it doesn't cool the oil down. Two seconds later, oxygen rushes back in, and the still-boiling oil instantly erupts into flames again.",
    "cat": "PORTABLE",
    "id": "T15F_249"
  },
  {
    "q": "Why is Water strictly forbidden for use on a Class E (energized electrical) fire?",
    "a": "Water is highly electrically conductive; spraying a solid jet onto a live 440V panel provides a direct path for the current to travel up the hose and electrocute the firefighter",
    "opts": ["Water shorts out the fuses, preventing the alarms from sounding", "Water dissolves the plastic insulation into explosive hydrogen gas", "Water is highly electrically conductive; spraying a solid jet onto a live 440V panel provides a direct path for the current to travel up the hose and electrocute the firefighter", "Water causes the copper busbars to rust instantly"],
    "exp": "Seawater and impure freshwater are excellent conductors. Shooting a hose at a live switchboard will kill the operator. The absolute first step for Class E is to isolate the power, turning it into a dead Class A/B fire.",
    "cat": "PORTABLE",
    "id": "T15F_250"
  },
  {
    "q": "How does a standard Water extinguisher put out a Class A (wood/paper) fire?",
    "a": "By massive Heat Extraction; water absorbs huge amounts of heat as it turns to steam, cooling the fuel well below its ignition temperature while soaking the deep-seated embers",
    "opts": ["By replacing the oxygen in the room with hydrogen", "By creating a soapy crust over the wood", "By massive Heat Extraction; water absorbs huge amounts of heat as it turns to steam, cooling the fuel well below its ignition temperature while soaking the deep-seated embers", "By chemical chain reaction interruption"],
    "exp": "Water has the highest specific heat capacity. It sucks the heat out of the fire triangle. It also soaks into porous materials like mattresses and rope, ensuring the fire doesn't secretly smoulder and re-ignite hours later.",
    "cat": "PORTABLE",
    "id": "T15F_251"
  },
  {
    "q": "What is the standard procedure for attacking a Class C (flammable gas) fire involving a leaking Acetylene bottle?",
    "a": "Do NOT extinguish the flame directly; use water spray to cool the bottle, and carefully close the supply valve to starve the fire. If you extinguish the flame without stopping the leak, the room will fill with explosive gas and detonate",
    "opts": ["Submerge the entire bottle in a barrel of seawater", "Smother the bottle with a heavy fire blanket", "Do NOT extinguish the flame directly; use water spray to cool the bottle, and carefully close the supply valve to starve the fire. If you extinguish the flame without stopping the leak, the room will fill with explosive gas and detonate", "Blast the flame with CO2 to freeze the leak shut"],
    "exp": "A burning gas leak is safe because you know exactly where the gas is (it's burning). If you put the flame out with powder, invisible gas fills the room until a spark triggers a massive volumetric explosion. Shut the valve first (starvation).",
    "cat": "PORTABLE",
    "id": "T15F_252"
  },
  {
    "q": "What is the recommended safe working distance when discharging a CO2 extinguisher at an electrical panel?",
    "a": "Keep a minimum distance of 1 meter to avoid accidental static discharge or arc flash to the metal horn",
    "opts": ["Aim it blindly from outside the room", "Keep a minimum distance of 1 meter to avoid accidental static discharge or arc flash to the metal horn", "Press the horn firmly against the panel door", "Stand exactly 5 meters away"],
    "exp": "The rapidly flowing CO2 gas can generate a massive static electrical charge on the metal horn. Keeping a safe air gap prevents static shocks and ensures the operator is clear of any unexpected electrical arc blasts from the panel.",
    "cat": "PORTABLE",
    "id": "T15F_253"
  },
  {
    "q": "When using any portable extinguisher, where should the operator aim the nozzle for maximum effectiveness?",
    "a": "Directly at the BASE of the fire, where the fuel is vaporizing, sweeping side-to-side",
    "opts": ["Directly at the BASE of the fire, where the fuel is vaporizing, sweeping side-to-side", "At the highest tip of the flames to push them down", "At the ceiling above the fire to create a falling cloud", "Directly at the smoke plume"],
    "exp": "The flames are just the visible result. The actual reaction is happening at the base where the solid or liquid fuel is heating up and vaporizing. Aiming at the top of the flames wastes the extinguisher.",
    "cat": "PORTABLE",
    "id": "T15F_254"
  },
  {
    "q": "Which of the following scenarios describes a Class A fire?",
    "a": "A pile of cardboard boxes, wooden pallets, and cotton rags burning in the dry provision store",
    "opts": ["A main switchboard circuit breaker violently arcing", "A deep fat fryer boiling over in the galley", "A leaking diesel pipe spraying onto the turbocharger", "A pile of cardboard boxes, wooden pallets, and cotton rags burning in the dry provision store"],
    "exp": "Class A is for ordinary solid combustibles that leave an Ash. Water is the best weapon here.",
    "cat": "PORTABLE",
    "id": "T15F_255"
  },
  {
    "q": "Which of the following scenarios describes a Class B fire?",
    "a": "A ruptured lubricating oil pipe spraying onto the hot exhaust manifold of an auxiliary generator",
    "opts": ["A magnesium casting igniting in the workshop", "A 440V motor terminal box catching fire", "A ruptured lubricating oil pipe spraying onto the hot exhaust manifold of an auxiliary generator", "A trash can full of paper towels burning in a cabin"],
    "exp": "Class B is for boiling liquids and flammable gases. The oil hits the hot exhaust, flashes into vapor, and ignites. Foam or CO2/DCP is required.",
    "cat": "PORTABLE",
    "id": "T15F_256"
  },
  {
    "q": "Which of the following scenarios describes a Class C fire?",
    "a": "A pressurized Acetylene welding hose rupturing and igniting",
    "opts": ["A pressurized Acetylene welding hose rupturing and igniting", "A deep fat fryer burning", "A pile of rope smouldering", "A pool of spilled paint thinner catching fire"],
    "exp": "Class C is specifically for pressurized flammable gases. Isolate the valve first.",
    "cat": "PORTABLE",
    "id": "T15F_257"
  },
  {
    "q": "Which of the following scenarios describes a Class D fire?",
    "a": "A pile of magnesium or titanium shavings igniting from a grinder spark in the engine room workshop",
    "opts": ["A pool of heavy fuel oil catching fire", "A cotton mattress smouldering from a cigarette", "A pile of magnesium or titanium shavings igniting from a grinder spark in the engine room workshop", "A 220V lighting transformer burning out"],
    "exp": "Class D represents dangerous combustible metals. They burn with blinding white heat. Normal extinguishers will cause a violent explosion. You must use Special Dry Powder (often graphite/salt based) to bury the metal and seal out oxygen.",
    "cat": "PORTABLE",
    "id": "T15F_258"
  },
  {
    "q": "If you encounter a Class D (metal) fire and do not have a specialized Class D extinguisher, what is the best makeshift alternative?",
    "a": "Completely bury the burning metal in totally dry sand to cut off the oxygen supply",
    "opts": ["Completely bury the burning metal in totally dry sand to cut off the oxygen supply", "Spray it with AFFF foam", "Throw a bucket of seawater on it", "Blast it with a standard CO2 extinguisher"],
    "exp": "Dry sand acts as an inert smothering blanket, similar to the graphite powder in a Class D extinguisher. Any moisture (water/foam) will cause an explosive reaction.",
    "cat": "PORTABLE",
    "id": "T15F_259"
  },
  {
    "q": "What is the fundamental defining characteristic of a Class E fire?",
    "a": "It involves energized (live) electrical equipment, presenting an immediate lethal electrocution hazard to the firefighter if the wrong extinguishing agent is used",
    "opts": ["It is a fire that can only be fought using high-pressure water mist", "It only occurs in explosive gas environments", "It is a fire that burns in an oxygen-depleted atmosphere", "It involves energized (live) electrical equipment, presenting an immediate lethal electrocution hazard to the firefighter if the wrong extinguishing agent is used"],
    "exp": "Class E is not really a 'fuel' type; it's a hazard condition. Electricity doesn't burn; the plastic insulation or copper melts and burns. The 'E' classification simply warns you: DO NOT USE WATER OR FOAM. Once you flick the breaker and kill the power, it downgrades to a standard Class A or B fire.",
    "cat": "PORTABLE",
    "id": "T15F_260"
  },
  {
    "q": "You are the ETO on watch and notice thick acrid smoke pouring from the Main Switchboard (MSB). What is your absolute FIRST action?",
    "a": "Raise the fire alarm by smashing the manual call point and inform the Bridge and Chief Engineer immediately",
    "opts": ["Run and grab a CO2 extinguisher and start spraying blindly", "Open the switchboard doors fully to let the smoke out", "Hit the emergency blackout button to drop all power", "Raise the fire alarm by smashing the manual call point and inform the Bridge and Chief Engineer immediately"],
    "exp": "Never fight a major shipboard fire alone without telling anyone. You might get electrocuted or overcome by toxic smoke. Alerting the command structure and waking the crew is always the absolute first step.",
    "cat": "MSB_FIRE",
    "id": "T15F_261"
  },
  {
    "q": "When approaching an electrical panel fire, what extinguishing agents MUST NEVER be used?",
    "a": "Water and Foam (AFFF)",
    "opts": ["Water and Foam (AFFF)", "Halon and Novec 1230", "CO2 and Dry Chemical Powder", "Sand and FM-200"],
    "exp": "Both water and AFFF foam are highly conductive. Spraying a solid stream onto exposed 440V busbars provides a direct, low-resistance path for the current to travel up the hose and electrocute the firefighter.",
    "cat": "MSB_FIRE",
    "id": "T15F_262"
  },
  {
    "q": "Why is Water electrocution a major risk in an MSB fire?",
    "a": "Impure water and seawater act as excellent conductors, completing a circuit between the live busbars and the grounded human operator holding the hose",
    "opts": ["Impure water and seawater act as excellent conductors, completing a circuit between the live busbars and the grounded human operator holding the hose", "Water creates an explosive gas when it touches copper", "Water reacts with PVC to create deadly mustard gas", "Water drastically lowers the ambient temperature, causing the breakers to freeze"],
    "exp": "While pure distilled water is an insulator, shipboard water (especially seawater from the fire main) is full of salts and ions, making it highly conductive.",
    "cat": "MSB_FIRE",
    "id": "T15F_263"
  },
  {
    "q": "You observe a small, localized incipient fire (e.g., a smoking contactor) inside a specific MSB cubicle. What is the safest, most targeted firefighting action?",
    "a": "Using insulated tools and PPE, trip the specific feeder breaker to isolate power to that section, then snuff the flames with a portable CO2 extinguisher",
    "opts": ["Using insulated tools and PPE, trip the specific feeder breaker to isolate power to that section, then snuff the flames with a portable CO2 extinguisher", "Initiate a total ship blackout immediately", "Spray dry chemical powder blindly through the ventilation louvers", "Wait for the fixed CO2 system to auto-release"],
    "exp": "If it's just a smoking wire, you don't need to plunge the entire ship into darkness. Removing the energy source (tripping the specific breaker) kills the electrical arcing. CO2 puts out the residual flame cleanly without ruining the rest of the board.",
    "cat": "MSB_FIRE",
    "id": "T15F_264"
  },
  {
    "q": "If the MSB fire is massive, uncontrollable, and spreading violently across the main busbars, what drastic action MUST be taken?",
    "a": "Initiate a total ship BLACKOUT by hitting the remote emergency stops for all running generators, completely de-energizing the massive electrical energy feeding the arc fire",
    "opts": ["Open the sea chests to deliberately flood the bottom platform", "Start all standby generators to pump more power into the fire pumps", "Initiate a total ship BLACKOUT by hitting the remote emergency stops for all running generators, completely de-energizing the massive electrical energy feeding the arc fire", "Seal the engine room and abandon the ship immediately"],
    "exp": "An electrical arc fire generates immense heat (thousands of degrees) as long as power flows. You cannot put it out with an extinguisher until you cut the power. Dropping all generators kills the busbars, turning a lethal electrical fire into a manageable standard Class A/B plastic and metal fire.",
    "cat": "MSB_FIRE",
    "id": "T15F_265"
  },
  {
    "q": "Why is initiating a total blackout critical for stopping a massive switchboard fire?",
    "a": "Because the electrical arc acts as a continuous, massive ignition source; removing the voltage stops the arc, downgrading the emergency to a standard material fire",
    "opts": ["Because it automatically triggers the CO2 room alarms", "Because the fire pumps run better on the emergency generator", "Because SOLAS prohibits fighting fires with the lights on", "Because the electrical arc acts as a continuous, massive ignition source; removing the voltage stops the arc, downgrading the emergency to a standard material fire"],
    "exp": "Firefighting is impossible if the source of the heat (the short-circuiting electrical current) is still actively pouring thousands of amps into the fault. De-energizing the board is 'Starving' the fire of its ignition energy.",
    "cat": "MSB_FIRE",
    "id": "T15F_266"
  },
  {
    "q": "How can the ETO quickly and safely initiate a total blackout without approaching the burning switchboard?",
    "a": "By pressing the hardwired 'Remote Emergency Stop' buttons for the prime movers (diesel generators) located outside the engine room or on the ECR console",
    "opts": ["By ordering the bridge to drop the anchor", "By closing the main fuel valves manually on the bottom platform", "By manually tripping each ACB on the burning switchboard using a broom handle", "By pressing the hardwired 'Remote Emergency Stop' buttons for the prime movers (diesel generators) located outside the engine room or on the ECR console"],
    "exp": "The remote E-stops bypass all PLCs and physically shut the fuel racks to the diesel engines. As the engines spin down, the voltage collapses, safely killing the switchboard from a distance.",
    "cat": "MSB_FIRE",
    "id": "T15F_267"
  },
  {
    "q": "Immediately after you successfully initiate a blackout to kill the MSB fire, what automatic safety sequence will occur?",
    "a": "The Emergency Generator will auto-start within 45 seconds, powering the Emergency Switchboard to restore critical lighting, steering, and the Emergency Fire Pump",
    "opts": ["All watertight doors will spring open to vent the smoke", "The ship's main engine will automatically go to Full Ahead", "The Emergency Generator will auto-start within 45 seconds, powering the Emergency Switchboard to restore critical lighting, steering, and the Emergency Fire Pump", "The CO2 total flooding system will auto-release into the engine room"],
    "exp": "SOLAS guarantees that even if you intentionally kill the main board to fight a fire, the ship survives. The independent Emergency Generator wakes up in the dark, providing the power you need to run fire hoses and see what you are doing.",
    "cat": "MSB_FIRE",
    "id": "T15F_268"
  },
  {
    "q": "After successfully extinguishing an MSB fire with CO2, why is intensive ventilation of the ECR/Switchboard room absolutely critical before removing breathing apparatus (BA)?",
    "a": "Burning electrical insulation (PVC, rubber) produces extremely toxic, highly corrosive, and lethal gases such as Hydrogen Chloride and Carbon Monoxide",
    "opts": ["To cool the copper busbars so they don't melt the deck", "To dry out the water used to fight the fire", "To blow the used CO2 gas back into the fire extinguishers", "Burning electrical insulation (PVC, rubber) produces extremely toxic, highly corrosive, and lethal gases such as Hydrogen Chloride and Carbon Monoxide"],
    "exp": "Electrical smoke is incredibly poisonous. Even a small wire fire creates thick, choking, acidic smoke that can permanently damage lungs or cause rapid unconsciousness. The room must be heavily purged with fresh air.",
    "cat": "MSB_FIRE",
    "id": "T15F_269"
  },
  {
    "q": "What lethal gas is specifically released when PVC wire insulation burns?",
    "a": "Hydrogen Chloride gas, which turns into highly corrosive hydrochloric acid when inhaled into the moist lungs",
    "opts": ["Hydrogen sulfide", "Pure nitrogen", "Methane", "Hydrogen Chloride gas, which turns into highly corrosive hydrochloric acid when inhaled into the moist lungs"],
    "exp": "Polyvinyl Chloride (PVC) is heavily used in wire casing. When burned, it releases choking white smoke containing HCl. This is why electrical fires are disproportionately dangerous to breathe.",
    "cat": "MSB_FIRE",
    "id": "T15F_270"
  },
  {
    "q": "What is the most likely root mechanical/electrical cause of a sudden fire breaking out inside a previously healthy Main Switchboard?",
    "a": "A loose busbar bolted joint causing high resistance and extreme localized I\u00b2R heating, leading to copper glowing red-hot and igniting nearby insulation",
    "opts": ["The generator spinning slightly too fast (e.g., 61 Hz) generating excess friction", "A loose busbar bolted joint causing high resistance and extreme localized I\u00b2R heating, leading to copper glowing red-hot and igniting nearby insulation", "The ambient engine room temperature reaching 35\u00b0C", "The ship sailing through a high-magnetic anomaly near the equator"],
    "exp": "Ship vibration loosens massive bolts over time. If a joint carrying 1000 Amps gets loose, resistance jumps. Watts = I\u00b2R. 1000\u00b2 * 0.05 ohms = 50,000 Watts of heat generated at a single bolt. The copper melts and catches the plastic wire casing on fire.",
    "cat": "MSB_FIRE",
    "id": "T15F_271"
  },
  {
    "q": "Why is Dry Chemical Powder (DCP) considered a 'last resort' for electrical switchboard fires compared to CO2?",
    "a": "DCP leaves a thick, corrosive, and highly abrasive dust coating that gets sucked into every microchip and magnetic coil, often doing more financial damage than the fire itself and requiring massive cleanup",
    "opts": ["DCP freezes the copper wires, causing them to shatter like glass", "DCP leaves a thick, corrosive, and highly abrasive dust coating that gets sucked into every microchip and magnetic coil, often doing more financial damage than the fire itself and requiring massive cleanup", "DCP is highly electrically conductive and will immediately shock the user", "DCP chemically reacts with copper to create explosive hydrogen gas"],
    "exp": "CO2 is a 'Clean Agent'. It puts the fire out and vanishes into the air. DCP is a giant cloud of baking soda-like powder. While it stops the fire safely, the residue destroys the delicate sliding contacts of relays and permanently ruins printed circuit boards.",
    "cat": "MSB_FIRE",
    "id": "T15F_272"
  },
  {
    "q": "How does a loose busbar joint lead directly to a fire?",
    "a": "It creates high electrical resistance; as massive current flows across the gap, it generates intense heat (I\u00b2R loss), eventually melting the metal and igniting surrounding plastic insulation",
    "opts": ["It generates a high-voltage static charge that attracts flammable dust", "It creates high electrical resistance; as massive current flows across the gap, it generates intense heat (I\u00b2R loss), eventually melting the metal and igniting surrounding plastic insulation", "It allows sparks to jump directly to the ship's steel hull", "It allows moisture to enter the copper, creating explosive steam"],
    "exp": "This is why thermographic (IR camera) surveys of switchboards are critical. They spot the glowing hot spots of loose joints months before they get hot enough to actually start a fire.",
    "cat": "MSB_FIRE",
    "id": "T15F_273"
  },
  {
    "q": "When approaching a live switchboard to manually open a breaker during a fire, what specific Personal Protective Equipment (PPE) should the ETO wear if time permits?",
    "a": "High-voltage insulated rubber gloves (with leather protectors) and a flash-rated face shield to protect against electrical shock and arc flash burns",
    "opts": ["A standard boiler suit and safety glasses", "A lifejacket and an immersion suit", "A fully enclosed chemical splash suit", "High-voltage insulated rubber gloves (with leather protectors) and a flash-rated face shield to protect against electrical shock and arc flash burns"],
    "exp": "Operating a faulty breaker can trigger a massive arc flash explosion (a fireball of vaporized copper). Proper arc-flash PPE and high-voltage gloves protect the operator from the blast and the live busbars.",
    "cat": "MSB_FIRE",
    "id": "T15F_274"
  },
  {
    "q": "Is it ever safe to use water on an electrical fire?",
    "a": "NEVER use water while the equipment is energized; it is only acceptable as a last resort AFTER the equipment is completely isolated and visually confirmed dead, to cool deep-seated embers",
    "opts": ["No, water will always explode when touching copper", "Yes, provided you use a fine mist setting", "Yes, if the voltage is below 220V", "NEVER use water while the equipment is energized; it is only acceptable as a last resort AFTER the equipment is completely isolated and visually confirmed dead, to cool deep-seated embers"],
    "exp": "Water conducts electricity. If the board is totally dead (blackout confirmed), it is technically a Class A/B fire, and water mist can be used to cool the smouldering plastics. But it is still heavily avoided to prevent collateral water damage.",
    "cat": "MSB_FIRE",
    "id": "T15F_275"
  },
  {
    "q": "How can the ETO physically confirm the Main Switchboard is dead before fighting the fire with a non-electrical agent?",
    "a": "Visually verify that all generator ACBs are tripped open, and check that all panel voltmeters read exactly 0 Volts",
    "opts": ["By touching the outer casing to see if it vibrates", "By pressing the lamp-test button on the synchroscope", "Visually verify that all generator ACBs are tripped open, and check that all panel voltmeters read exactly 0 Volts", "By checking if the emergency generator is running"],
    "exp": "Trust the meters. If the breakers are mechanically open and the busbar voltmeters are resting at zero, the immense electrical hazard has been removed.",
    "cat": "MSB_FIRE",
    "id": "T15F_276"
  },
  {
    "q": "Within what maximum time limit MUST the Emergency Generator auto-start and provide power to the emergency switchboard during a blackout?",
    "a": "45 seconds",
    "opts": ["2 minutes", "10 seconds", "5 minutes", "45 seconds"],
    "exp": "SOLAS requires a maximum 45-second recovery time for cargo ships. This ensures you aren't fighting a massive fire in pitch blackness for long.",
    "cat": "MSB_FIRE",
    "id": "T15F_277"
  },
  {
    "q": "After initiating a blackout to fight a fire, what critical life-safety systems will be restored by the Emergency Switchboard?",
    "a": "Emergency lighting, steering gear, GMDSS radio communications, fire detection panels, and the Emergency Fire Pump",
    "opts": ["Emergency lighting, steering gear, GMDSS radio communications, fire detection panels, and the Emergency Fire Pump", "Main engine cooling pumps and purifiers", "The bow thruster and cargo cranes", "Air conditioning and galley ovens"],
    "exp": "The emergency board keeps the ship alive and provides the tools needed to fight the fire (lights, comms, and fire-main water pressure).",
    "cat": "MSB_FIRE",
    "id": "T15F_278"
  },
  {
    "q": "Why is CO2 overwhelmingly considered the 'Best' portable extinguisher for the Engine Control Room (ECR) and switchboards?",
    "a": "It is electrically non-conductive and a 'clean agent', meaning it puts the fire out by smothering it and then dissipates entirely, leaving no damaging chemical residue on the delicate electronics",
    "opts": ["It provides a chemical crust that permanently fireproofs the cables", "It is the only extinguisher that can cool copper below its melting point", "It is significantly lighter and easier to carry than DCP", "It is electrically non-conductive and a 'clean agent', meaning it puts the fire out by smothering it and then dissipates entirely, leaving no damaging chemical residue on the delicate electronics"],
    "exp": "A small fire behind a panel can be killed with a squirt of CO2. Ten minutes later, you can find the burnt wire, replace it, and restore power. If you used DCP, the entire panel is coated in corrosive powder, requiring days of cleaning before it is safe to energize again.",
    "cat": "MSB_FIRE",
    "id": "T15F_279"
  },
  {
    "q": "Before attempting to restore power to a switchboard after a fire has been extinguished, what absolutely MUST the ETO do?",
    "a": "Thoroughly investigate, identify, and permanently rectify the root cause of the fault (e.g., replace the burnt cable or tighten the loose busbar joint) to prevent an immediate re-ignition",
    "opts": ["Thoroughly investigate, identify, and permanently rectify the root cause of the fault (e.g., replace the burnt cable or tighten the loose busbar joint) to prevent an immediate re-ignition", "Bypass the preferential trip relay", "Turn the AVR voltage up to 120% to burn off the carbon", "Spray the entire board with a water hose to wash away the soot"],
    "exp": "If you just put the fire out and blindly close the breaker again, the exact same short circuit is still there. The arc will instantly re-establish, and the fire will start all over again.",
    "cat": "MSB_FIRE",
    "id": "T15F_280"
  },
  {
    "q": "What is 'Tracking' across an insulator, and how can it lead to a switchboard fire?",
    "a": "It is the formation of a conductive path across the surface of an insulator due to dirt, moisture, or carbon dust; this allows high-voltage current to leak across, generating intense heat and eventually causing a flashover arc",
    "opts": ["It is the process of updating the software on the power management system", "It is the physical movement of the busbars due to thermal expansion", "It is the formation of a conductive path across the surface of an insulator due to dirt, moisture, or carbon dust; this allows high-voltage current to leak across, generating intense heat and eventually causing a flashover arc", "It is the magnetic alignment of the copper atoms in the wires"],
    "exp": "If carbon brush dust from the generators blows into the switchboard and coats the plastic insulators, 440V will start 'tracking' (leaking) across the dust to ground. This sparks, burns the plastic, creates a carbon trail, and eventually explodes into a dead short circuit.",
    "cat": "MSB_FIRE",
    "id": "T15F_281"
  },
  {
    "q": "Is FM-200 (or Novec 1230) safe and effective to use on an electrical switchboard fire?",
    "a": "Yes, they are electrically non-conductive, highly effective 'clean agents' that interrupt the chemical chain reaction without leaving any residue, making them excellent replacements for Halon",
    "opts": ["Yes, but only if mixed with 50% water first", "No, they chemically react with copper to form explosive gases", "No, they are highly conductive liquids that will cause electrocution", "Yes, they are electrically non-conductive, highly effective 'clean agents' that interrupt the chemical chain reaction without leaving any residue, making them excellent replacements for Halon"],
    "exp": "Like CO2, FM-200 and Novec 1230 are clean agents. They are often used as fixed total-flooding systems for high-value server rooms and ECRs because they put out the fire safely without killing the people inside (unlike CO2).",
    "cat": "MSB_FIRE",
    "id": "T15F_282"
  },
  {
    "q": "Are the discharge horns on portable CO2 extinguishers electrically conductive?",
    "a": "No, they are purposefully made of thick plastic, rubber, or composite materials to prevent them from conducting electricity back to the operator if they accidentally touch a live wire",
    "opts": ["No, they are purposefully made of thick plastic, rubber, or composite materials to prevent them from conducting electricity back to the operator if they accidentally touch a live wire", "Yes, they contain a copper grounding wire inside the plastic", "No, they are made of pure glass", "Yes, they are made of solid brass to withstand the extreme cold"],
    "exp": "The non-conductive horn is a safety feature specifically designed for fighting Class E fires. However, you should still maintain a 1-meter safe distance to avoid arc flash jumping the air gap.",
    "cat": "MSB_FIRE",
    "id": "T15F_283"
  },
  {
    "q": "Why must Foam (AFFF) extinguishers never be used on a Main Switchboard?",
    "a": "Because Foam is primarily composed of water (approx. 94-97%), making it an excellent conductor of electricity and a lethal hazard to the operator",
    "opts": ["Because Foam is primarily composed of water (approx. 94-97%), making it an excellent conductor of electricity and a lethal hazard to the operator", "Because Foam is lighter than air and will float away from the panel", "Because Foam freezes instantly when it touches copper", "Because Foam generates massive static electricity charges"],
    "exp": "AFFF is just soapy water mixed with air. Shooting soapy water into 440 Volts is a fatal error.",
    "cat": "MSB_FIRE",
    "id": "T15F_284"
  },
  {
    "q": "You detect a small electrical arc and the smell of burning plastic behind a breaker, but there are no visible flames yet. What is the most appropriate, measured response?",
    "a": "Open the feeder breaker for that specific section to remove the power source, stand by with a CO2 extinguisher, and investigate; a full blackout is likely unnecessary for an incipient arc",
    "opts": ["Ignore it until smoke detectors activate", "Dump the fixed CO2 system into the engine room", "Initiate a total ship blackout immediately to be safe", "Open the feeder breaker for that specific section to remove the power source, stand by with a CO2 extinguisher, and investigate; a full blackout is likely unnecessary for an incipient arc"],
    "exp": "Overreacting is dangerous too. Killing all power to the ship while navigating a busy channel because one small breaker is smoking could cause a collision. Isolate the small fault locally first.",
    "cat": "MSB_FIRE",
    "id": "T15F_285"
  },
  {
    "q": "What is the ultimate worst-case scenario if an MSB fire is not extinguished and spreads wildly out of control?",
    "a": "Total loss of ship's propulsion, steering, and automated control, leaving the vessel completely dead in the water and highly vulnerable to sinking or collision",
    "opts": ["The main engines will automatically run at full speed uncontrollably", "The ship's hull will become highly magnetized, ruining the compass", "The fire will travel up the cables and ignite the bridge radar", "Total loss of ship's propulsion, steering, and automated control, leaving the vessel completely dead in the water and highly vulnerable to sinking or collision"],
    "exp": "The MSB is the beating heart of the ship. If it burns to the ground, the diesel engines might survive, but you cannot run the cooling pumps, the fuel purifiers, or the steering gear. The ship is dead.",
    "cat": "MSB_FIRE",
    "id": "T15F_286"
  },
  {
    "q": "Do Main Switchboards typically have internal, automatic fixed fire suppression systems installed inside the cabinets?",
    "a": "Rarely; because they are heavily ventilated, localized gas systems are ineffective. They rely on the Engine Room's overall total flooding system (CO2/Hi-Fog) or manual intervention",
    "opts": ["Always; SOLAS requires every cubicle to have its own sprinkler head", "Yes, they are constantly purged with inert Nitrogen gas", "Rarely; because they are heavily ventilated, localized gas systems are ineffective. They rely on the Engine Room's overall total flooding system (CO2/Hi-Fog) or manual intervention", "Yes, they all use automatic dry chemical powder dusters"],
    "exp": "While some highly specialized modern panels have tiny Novec 1230 tubes inside, the vast majority of commercial ship MSBs are open-air cabinets. You cannot flood them locally because the gas just escapes through the ventilation louvers.",
    "cat": "MSB_FIRE",
    "id": "T15F_287"
  },
  {
    "q": "Why is the heavy, black soot left behind by a switchboard fire so dangerous to the surviving electronics?",
    "a": "Carbon soot is highly electrically conductive; if it settles on healthy insulators or circuit boards, it can create thousands of micro-shorts and trigger a secondary flashover when power is restored",
    "opts": ["Soot is extremely acidic and will dissolve the steel casing", "Carbon soot is highly electrically conductive; if it settles on healthy insulators or circuit boards, it can create thousands of micro-shorts and trigger a secondary flashover when power is restored", "Soot acts as a thermal insulator, preventing the breakers from cooling", "Soot absorbs oxygen from the air, causing asphyxiation"],
    "exp": "A fire creates carbon. Carbon conducts electricity. If a fire burns in Cubicle A, the soot blows into Cubicle B. If you energize Cubicle B without vacuuming it meticulously first, the 440V will track across the soot and blow up Cubicle B.",
    "cat": "MSB_FIRE",
    "id": "T15F_288"
  },
  {
    "q": "What should the ETO do if multiple portable CO2 extinguishers fail to knock down a raging fire inside the MSB room?",
    "a": "Evacuate all personnel, seal the doors and ventilation to the room, initiate a full blackout, and prepare to release the fixed CO2 Total Flooding system",
    "opts": ["Run and grab the nearest fire hose and use a solid jet of water", "Evacuate all personnel, seal the doors and ventilation to the room, initiate a full blackout, and prepare to release the fixed CO2 Total Flooding system", "Abandon the ship immediately", "Open all the doors to let the heat escape into the engine room"],
    "exp": "If handheld extinguishers fail, the fire is out of control. Human intervention is no longer safe. Retreat, seal the tomb, kill the power, and let the massive fixed system suffocate it.",
    "cat": "MSB_FIRE",
    "id": "T15F_289"
  },
  {
    "q": "Why must you NEVER lean directly in front of an electrical breaker while manually opening or closing it during a fault investigation?",
    "a": "To protect yourself from an Arc Flash; if the breaker explodes or arcs violently during operation, the fireball and shrapnel project directly outward",
    "opts": ["To avoid breathing in the ozone generated by the contacts", "To prevent your shadow from blocking the indicator lights", "To ensure you have enough leverage to pull the handle", "To protect yourself from an Arc Flash; if the breaker explodes or arcs violently during operation, the fireball and shrapnel project directly outward"],
    "exp": "Standard safety protocol: Stand to the side, turn your face away, use your right hand (if standing on the right), and operate the lever. If it blows, the 10,000\u00b0C fireball shoots past you, not into your chest.",
    "cat": "MSB_FIRE",
    "id": "T15F_290"
  },
  {
    "q": "According to SOLAS, where must the ship's Fire Control Plan be permanently displayed for immediate access by shore-based fire brigades?",
    "a": "At the ship's gangway or accommodation entrance, usually in a prominently marked, weatherproof enclosure",
    "opts": ["Inside the Master's private office", "At the ship's gangway or accommodation entrance, usually in a prominently marked, weatherproof enclosure", "Deep inside the main engine control room", "Only in digital format on the ECDIS screen"],
    "exp": "If a ship is burning in port, the local fire department won't know the layout. They run up the gangway, open the red tube/box, and pull out the Fire Plan to see exactly where the CO2 room, fuel tanks, and stairs are located.",
    "cat": "SAFETY_REG",
    "id": "T15F_291"
  },
  {
    "q": "What specific information is meticulously detailed on the ship's Fire Control Plan?",
    "a": "Location of all A-class and B-class fire divisions, fire detectors, manual call points, fixed suppression systems, portable extinguishers, fire pumps, dampers, and escape routes",
    "opts": ["Location of all A-class and B-class fire divisions, fire detectors, manual call points, fixed suppression systems, portable extinguishers, fire pumps, dampers, and escape routes", "The electrical wiring diagrams for the main switchboard", "The daily work schedules of the engineering crew", "The maintenance history of the emergency generator"],
    "exp": "The fire plan is a tactical map. It shows a commander exactly where every weapon (extinguisher, pump) and shield (fire doors, A-class bulkheads) is located on the vessel.",
    "cat": "SAFETY_REG",
    "id": "T15F_292"
  },
  {
    "q": "What does the acronym EEBD stand for?",
    "a": "Emergency Escape Breathing Device",
    "opts": ["Emergency Escape Breathing Device", "External Evacuation Boat Davit", "Electrical Enclosure Blanket Dispenser", "Engine Environmental Breathing Dome"],
    "exp": "EEBDs are small, portable breathing hoods explicitly designed to save your life if a room suddenly fills with toxic smoke.",
    "cat": "SAFETY_REG",
    "id": "T15F_293"
  },
  {
    "q": "What is the SOLE, strictly defined purpose of an EEBD?",
    "a": "To provide short-duration breathing air solely for the purpose of ESCAPING from a smoke-filled or toxic space",
    "opts": ["To provide short-duration breathing air solely for the purpose of ESCAPING from a smoke-filled or toxic space", "To be used as a diving apparatus for underwater hull inspections", "To allow firefighters to enter a burning room and extinguish the fire", "To provide oxygen to unconscious victims like a medical ventilator"],
    "exp": "An EEBD is for running away. It provides no thermal protection for the face, and its air supply is far too small for working. If you use it to fight a fire, you will likely die when the air runs out 10 minutes later.",
    "cat": "SAFETY_REG",
    "id": "T15F_294"
  },
  {
    "q": "Approximately how long does the air supply in a standard EEBD last?",
    "a": "10 to 15 minutes",
    "opts": ["30 to 45 minutes", "1 to 2 minutes", "1 to 2 hours", "10 to 15 minutes"],
    "exp": "A small 6-liter cylinder pressurized to 200 bar provides just enough air for a frantic, 10-minute climb up the engine room stairs to the open deck.",
    "cat": "SAFETY_REG",
    "id": "T15F_295"
  },
  {
    "q": "Can an EEBD be used by a crew member to enter a space and fight a fire?",
    "a": "NO; it is strictly prohibited. It lacks the duration, demand-valve performance, and thermal protection required for firefighting",
    "opts": ["Yes, it is the primary piece of equipment for the ship's fire party", "Yes, but only for fires smaller than 1 square meter", "NO; it is strictly prohibited. It lacks the duration, demand-valve performance, and thermal protection required for firefighting", "Yes, provided they hold their breath intermittently to save air"],
    "exp": "Fighting a fire requires heavy exertion (breathing hard) and exposes the face to extreme heat. The thin plastic hood of an EEBD will melt to your face, and the continuous-flow air will run out rapidly.",
    "cat": "SAFETY_REG",
    "id": "T15F_296"
  },
  {
    "q": "What does the acronym SCBA stand for?",
    "a": "Self-Contained Breathing Apparatus",
    "opts": ["Smoke Control and Blower Assembly", "Survival Cylinder for Breathable Atmosphere", "Self-Contained Breathing Apparatus", "Shipboard Chemical Breathing Air"],
    "exp": "SCBAs are the heavy, professional-grade breathing sets worn on the back by the dedicated fire party.",
    "cat": "SAFETY_REG",
    "id": "T15F_297"
  },
  {
    "q": "What is the primary operational purpose of an SCBA?",
    "a": "To provide full respiratory and facial protection for trained personnel ENTERING a hazardous atmosphere to fight a fire or perform a rescue",
    "opts": ["To provide full respiratory and facial protection for trained personnel ENTERING a hazardous atmosphere to fight a fire or perform a rescue", "To spray a cooling mist of water over the firefighter's face", "To filter toxic smoke particles out of the ambient room air", "To provide 10 minutes of air for emergency escape only"],
    "exp": "SCBA sets use a positive-pressure demand valve, meaning they only supply air when you inhale, and keep a slight outward pressure in the mask so toxic smoke cannot leak in around the rubber seal.",
    "cat": "SAFETY_REG",
    "id": "T15F_298"
  },
  {
    "q": "Approximately how long does the air supply in a standard marine SCBA cylinder last during moderate exertion?",
    "a": "30 to 40 minutes",
    "opts": ["1 to 2 hours", "30 to 40 minutes", "3 to 4 hours", "10 to 15 minutes"],
    "exp": "A typical 6-liter steel or composite cylinder charged to 300 bar holds 1800 liters of free air. At a heavy breathing rate of 40 L/min, it lasts about 45 minutes, with a safety whistle sounding when 10 minutes are left.",
    "cat": "SAFETY_REG",
    "id": "T15F_299"
  },
  {
    "q": "What is the standard Outside Diameter of the flange for the International Shore Connection (ISC)?",
    "a": "178 mm",
    "opts": ["250 mm", "178 mm", "100 mm", "300 mm"],
    "exp": "Surveyors strictly test this number. The ISC ensures that a fire truck in New York and a fire truck in Tokyo can both bolt their hoses seamlessly to your ship's fire main.",
    "cat": "SAFETY_REG",
    "id": "T15F_300"
  },
  {
    "q": "What is the standard Inner Bore Diameter of the International Shore Connection (ISC)?",
    "a": "64 mm",
    "opts": ["100 mm", "128 mm", "32 mm", "64 mm"],
    "exp": "64 mm (approx 2.5 inches) is the standard internal pipe diameter allowing massive water flow from the shore pumps.",
    "cat": "SAFETY_REG",
    "id": "T15F_301"
  },
  {
    "q": "What is the Pitch Circle Diameter (PCD) for the bolts on the International Shore Connection?",
    "a": "132 mm",
    "opts": ["200 mm", "132 mm", "150 mm", "100 mm"],
    "exp": "The PCD is the diameter of the invisible circle intersecting the center of all four bolt holes. It guarantees the shore flange bolts align perfectly with the ship's flange holes.",
    "cat": "SAFETY_REG",
    "id": "T15F_302"
  },
  {
    "q": "How many bolts are required for the International Shore Connection, and what is their diameter?",
    "a": "4 bolts, 16 mm in diameter",
    "opts": ["8 bolts, 10 mm in diameter", "6 bolts, 20 mm in diameter", "2 bolts, 25 mm in diameter", "4 bolts, 16 mm in diameter"],
    "exp": "Four M16 bolts are required to securely clamp the flanges together against the 10+ bar of water pressure from the fire truck.",
    "cat": "SAFETY_REG",
    "id": "T15F_303"
  },
  {
    "q": "If a fire breaks out in a shipping container down inside a cargo hold, what is the absolute FIRST and most important action to take?",
    "a": "Close all hold ventilation flaps, fans, and trunking to starve the fire of oxygen",
    "opts": ["Close all hold ventilation flaps, fans, and trunking to starve the fire of oxygen", "Open the massive cargo hatches to let the smoke escape", "Send a team with SCBAs down the ladders to open the container doors", "Pump seawater continuously into the hold until the container is submerged"],
    "exp": "Container holds act like chimneys. If you leave the vents open, the fire draws in massive amounts of fresh air and grows uncontrollably. Sealing the hold chokes the fire down to a manageable smoulder.",
    "cat": "SAFETY_REG",
    "id": "T15F_304"
  },
  {
    "q": "Why must you NEVER open the main weather deck hatch to inspect a container fire burning deep in the hold?",
    "a": "Allowing a massive rush of fresh oxygen into a semi-suffocated, super-heated space will cause an explosive re-ignition known as a backdraft",
    "opts": ["Because the smoke will damage the bridge windows", "Because the heat will melt the hatch cover rubber seals", "Allowing a massive rush of fresh oxygen into a semi-suffocated, super-heated space will cause an explosive re-ignition known as a backdraft", "Because it violates MARPOL air pollution regulations"],
    "exp": "A sealed, burning hold is full of hot, unburnt fuel gases desperately waiting for oxygen. Opening the lid is like pulling the pin on a giant bomb.",
    "cat": "SAFETY_REG",
    "id": "T15F_305"
  },
  {
    "q": "Why is randomly pumping water into a cargo hold to fight a container fire heavily discouraged?",
    "a": "It dilutes the CO2 gas, reacts explosively with certain dangerous goods, and adds massive free-surface weight that can capsize the ship",
    "opts": ["Because the water will instantly freeze due to the endothermic reaction", "It dilutes the CO2 gas, reacts explosively with certain dangerous goods, and adds massive free-surface weight that can capsize the ship", "Because it ruins the paint on the containers", "Because saltwater accelerates the burning of cardboard"],
    "exp": "Water adds thousands of tons of sloshing weight (free surface effect) which destroys the ship's stability. Also, if a container has Class 4.3 (dangerous when wet) chemicals, water will create explosive hydrogen gas.",
    "cat": "SAFETY_REG",
    "id": "T15F_306"
  },
  {
    "q": "What major environmental and safety ban takes effect regarding marine firefighting foam on January 1, 2026?",
    "a": "The use, storage, and carriage of firefighting foam containing PFOS (Perfluorooctane Sulfonate) is strictly PROHIBITED",
    "opts": ["The use, storage, and carriage of firefighting foam containing PFOS (Perfluorooctane Sulfonate) is strictly PROHIBITED", "The use of high-expansion foam in engine rooms is prohibited", "The use of seawater mixed with foam is prohibited", "The use of dry powder extinguishers in galleys is prohibited"],
    "exp": "PFOS is a highly toxic 'forever chemical'. Ships must identify any older AFFF drums containing PFOS, pump them ashore, and replace them with safer C6 or Fluorine-Free Foams (FFF) before their first survey after 2026.",
    "cat": "SAFETY_REG",
    "id": "T15F_307"
  },
  {
    "q": "What is the specific hazard of PFOS that led to its global ban under the Stockholm Convention?",
    "a": "It is a Persistent Organic Pollutant (POP); it never breaks down in nature, accumulates in the food chain, and is highly toxic and carcinogenic",
    "opts": ["It dissolves the rubber seals in firefighting hoses", "It is a Persistent Organic Pollutant (POP); it never breaks down in nature, accumulates in the food chain, and is highly toxic and carcinogenic", "It spontaneously combusts when exposed to sunlight", "It emits high levels of gamma radiation over time"],
    "exp": "When a ship dumps PFOS foam into the ocean (even for a drill), those chemicals stay in the water forever, eventually contaminating fish and the humans that eat them.",
    "cat": "SAFETY_REG",
    "id": "T15F_308"
  },
  {
    "q": "Under the new SOLAS II-2/20 regulations effective in 2026, how must fire detection be upgraded on Ro-Ro passenger ship vehicle decks?",
    "a": "They must be fitted with Combined Smoke AND Heat detectors (or linear heat detectors) instead of relying solely on smoke detectors",
    "opts": ["They must rely entirely on manual patrols by the crew", "They must be fitted with Combined Smoke AND Heat detectors (or linear heat detectors) instead of relying solely on smoke detectors", "They must use only flame detectors", "They must use acoustic sensors that listen for exploding tires"],
    "exp": "Car fires can start in two ways: deep-seated smouldering electrical fires (which produce smoke but low heat) or rapid fuel ruptures (which produce intense heat but less initial smoke). Combined detectors catch both threats much faster.",
    "cat": "SAFETY_REG",
    "id": "T15F_309"
  },
  {
    "q": "What visual technology is mandated by the 2026 SOLAS update for Ro-Ro vehicle spaces to aid in early fire detection?",
    "a": "Continuous CCTV video monitoring covering all areas of the vehicle deck, with a minimum 24-hour recorded playback capability",
    "opts": ["Robotic drones that fly over the cars every 10 minutes", "Motion sensors that trigger floodlights", "Infrared laser tripwires crossing every vehicle lane", "Continuous CCTV video monitoring covering all areas of the vehicle deck, with a minimum 24-hour recorded playback capability"],
    "exp": "CCTV allows the bridge to spot a smoking car visually before the smoke physically reaches the detectors on the high ceiling. The 24-hour playback ensures investigators can determine exactly how and where the fire started.",
    "cat": "SAFETY_REG",
    "id": "T15F_310"
  },
  {
    "q": "For OPEN (weather) vehicle decks on Ro-Ro passenger ships, what new fixed firefighting equipment is mandated by 2026?",
    "a": "Fixed water-based fire-extinguishing monitors (water cannons) to provide immediate high-volume remote suppression",
    "opts": ["Fixed water-based fire-extinguishing monitors (water cannons) to provide immediate high-volume remote suppression", "Automated foam sprinkler heads embedded in the deck plates", "Massive CO2 total flooding nozzles", "Dry chemical powder drop-bags attached to the mast"],
    "exp": "Open decks cannot use CO2 or High-Expansion Foam because the wind blows it away. Water monitors allow the crew to remotely blast thousands of liters of water onto a burning truck without walking into the dangerous open-deck fire zone.",
    "cat": "SAFETY_REG",
    "id": "T15F_311"
  },
  {
    "q": "What are the ventilation requirements for a ship's Paint Locker under SOLAS?",
    "a": "Mechanical extraction ventilation with the extraction point located at the BOTTOM of the space, because heavy paint and solvent vapors sink to the floor",
    "opts": ["Mechanical extraction ventilation with the extraction point located at the BOTTOM of the space, because heavy paint and solvent vapors sink to the floor", "Natural ventilation only, using open louvers on the doors", "No ventilation is allowed; the room must be hermetically sealed", "Positive pressure ventilation pumping fresh air into the top of the room"],
    "exp": "Unlike hot smoke which rises, the highly explosive VOCs (Volatile Organic Compounds) evaporating from paint thinner are heavier than air. They pool like invisible water on the deck. The exhaust fan must suck air from the bottom to clear them.",
    "cat": "SAFETY_REG",
    "id": "T15F_312"
  },
  {
    "q": "What type of fixed fire extinguishing system is required by SOLAS for a Paint Locker?",
    "a": "A fixed smothering system (usually CO2) capable of achieving a 40% concentration by volume, with the release handle located OUTSIDE the space",
    "opts": ["A fixed smothering system (usually CO2) capable of achieving a 40% concentration by volume, with the release handle located OUTSIDE the space", "A standard water sprinkler system", "A wet chemical system identical to the galley hood", "A portable 9kg DCP extinguisher mounted near the door"],
    "exp": "Because of the extreme flammability of solvents, a thicker 40% CO2 knock-down concentration is required (compared to 34% for engine rooms). The release must be outside because walking into a burning paint locker is suicidal.",
    "cat": "SAFETY_REG",
    "id": "T15F_313"
  },
  {
    "q": "On an oil tanker, what is the purpose of the large compressed air bottle strapped inside a totally enclosed lifeboat?",
    "a": "To provide positive-pressure breathable air for the occupants and the engine for at least 10 minutes, allowing the boat to safely motor through a surface oil fire",
    "opts": ["To power the pneumatic lowering winches on the davits", "To spray firefighting foam out of the lifeboat's exhaust pipe", "To provide positive-pressure breathable air for the occupants and the engine for at least 10 minutes, allowing the boat to safely motor through a surface oil fire", "To inflate the self-righting airbags if the boat capsizes"],
    "exp": "If the ocean is burning, the crew must seal the lifeboat hatches completely to survive. The air bottle provides clean air for breathing and engine combustion, keeping the toxic smoke out until they drive 1 mile clear of the flames.",
    "cat": "SAFETY_REG",
    "id": "T15F_314"
  },
  {
    "q": "What is the required air consumption rate used to calculate the size of the breathing air bottle in a totally enclosed lifeboat?",
    "a": "40 liters per minute, per person",
    "opts": ["100 liters per minute, per person", "500 liters total for the entire boat", "10 liters per minute, per person", "40 liters per minute, per person"],
    "exp": "For a 25-person boat, 40 L/min * 25 people * 10 minutes = 10,000 liters of expanded air required. This dictates the size and pressure of the steel cylinder installed.",
    "cat": "SAFETY_REG",
    "id": "T15F_315"
  },
  {
    "q": "How does the Lifeboat Sprinkler (Water Spray) system operate during an escape through a fire?",
    "a": "An engine-driven centrifugal pump draws seawater through the hull and sprays a continuous film of water over the entire outer canopy, absorbing the intense radiant heat of the flames",
    "opts": ["It sprays highly expanded foam over the water to extinguish the path ahead", "It sprays water internally to cool the occupants", "An engine-driven centrifugal pump draws seawater through the hull and sprays a continuous film of water over the entire outer canopy, absorbing the intense radiant heat of the flames", "It releases CO2 gas over the exterior to smother the flames touching the boat"],
    "exp": "Fiberglass melts in an oil fire. The sprinkler blankets the boat in flowing water. The water boils off into steam, absorbing massive amounts of heat and keeping the fiberglass canopy safely below its melting point.",
    "cat": "SAFETY_REG",
    "id": "T15F_316"
  },
  {
    "q": "If the pressure gauge on the lifeboat breathing air cylinder is low, why must it ONLY be recharged using a certified Class E 'Breathing Air' compressor?",
    "a": "Standard industrial compressors use oil lubrication which vaporizes into the air; breathing this oil mist or carbon monoxide inside a sealed lifeboat is lethal",
    "opts": ["Class E compressors chemically generate pure oxygen", "Standard industrial compressors use oil lubrication which vaporizes into the air; breathing this oil mist or carbon monoxide inside a sealed lifeboat is lethal", "Standard compressors remove too much humidity, causing static sparks", "Standard compressors cannot reach pressures above 10 bar"],
    "exp": "Breathing air must be medically pure. Dedicated BA compressors use specialized filters (activated carbon, hopcalite) and food-grade lubricants to ensure no toxic CO or oil mist enters the cylinder.",
    "cat": "SAFETY_REG",
    "id": "T15F_317"
  },
  {
    "q": "Under SOLAS, what happens if the main fire pump is located in the same space (e.g., Engine Room) as the ship's primary power source?",
    "a": "An Emergency Fire Pump must be installed outside that space, powered by an independent source, ensuring firefighting capability survives an engine room fire",
    "opts": ["An Emergency Fire Pump must be installed outside that space, powered by an independent source, ensuring firefighting capability survives an engine room fire", "The space must be protected by a triple-layer A-60 bulkhead", "The main fire pump must be encased in a watertight submarine vault", "A second main fire pump must be stacked on top of it"],
    "exp": "Redundancy is the core of SOLAS. If the engine room burns down, you lose the main pumps and the main switchboard. The Emergency Fire Pump (driven by its own diesel or the emergency generator) sits far away in the bow, ensuring you always have water pressure to fight the fire.",
    "cat": "SAFETY_REG",
    "id": "T15F_318"
  },
  {
    "q": "What is the primary difference in operation between a 'Rate-of-Rise' heat detector and a 'Fixed-Temperature' heat detector?",
    "a": "Rate-of-Rise triggers if the temperature climbs unusually fast (e.g., 10\u00b0C in one minute) even if the room is still cool; Fixed-Temperature only triggers when the room reaches a specific, absolute hot temperature (e.g., 72\u00b0C)",
    "opts": ["Rate-of-Rise triggers if the temperature climbs unusually fast (e.g., 10\u00b0C in one minute) even if the room is still cool; Fixed-Temperature only triggers when the room reaches a specific, absolute hot temperature (e.g., 72\u00b0C)", "Rate-of-Rise detects smoke speed, Fixed-Temperature detects flame heat", "Rate-of-Rise is for cold climates, Fixed-Temperature is for tropical climates", "Rate-of-Rise requires 220V power, Fixed-Temperature requires no power"],
    "exp": "Rate-of-Rise provides much earlier warning for explosive, fast-growing fires in normally cool rooms. Fixed-Temperature is immune to fast but normal heat spikes (like opening a massive oven door) and only alarms when the room is genuinely on fire.",
    "cat": "SAFETY_REG",
    "id": "T15F_319"
  },
  {
    "q": "Why is the use of Halon gas (like Halon 1301) heavily restricted and largely banned on modern ships?",
    "a": "It is an extremely potent Ozone Depleting Substance (ODS) and a potent greenhouse gas, leading to its ban under the Montreal Protocol",
    "opts": ["It is an extremely potent Ozone Depleting Substance (ODS) and a potent greenhouse gas, leading to its ban under the Montreal Protocol", "It is highly corrosive and instantly destroys electrical switchboards", "It is highly toxic and causes immediate death upon inhalation", "It freezes into solid blocks of ice when released at room temperature"],
    "exp": "Halon was the ultimate firefighting gas\u2014clean, non-toxic, and incredibly effective at stopping fires chemically. Unfortunately, it destroys the Earth's ozone layer. It was phased out and replaced by environmentally friendlier clean agents like FM-200, Novec 1230, and high-pressure water mist.",
    "cat": "SAFETY_REG",
    "id": "T15F_320"
  }
]);
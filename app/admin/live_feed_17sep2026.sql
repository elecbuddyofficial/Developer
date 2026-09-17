-- The 17 September 2026 sitting, added to the running September sitting.
--
-- SOURCE: ETO_Oral_Questions.docx, 17/09/2026, surveyor recorded as "Vallath
-- Chandrashekaran". Blesson confirmed this is the surveyor the bank already
-- carries as "V.K. Chandrasekharan", so that spelling is used here and in the
-- bank, keeping his questions under one name.
--
-- 63 lines became 53 cards. Folded: power cable (what / vs control cable /
-- construction, twice), MSDS (three times), sequential starting (twice),
-- "generator not building voltage" and "running but no voltage", "blackout
-- cross questions" with "blackout recovery", SOLAS power management with SOLAS
-- electrical power requirements. Dropped: "Other questions related to deck and
-- its safety", a note rather than a question. Interpreted, and said so in the
-- answer: "Seasons" as load line seasonal zones, "EESI" as EEXI, "purpose of a
-- bow" as the bulbous bow, "BT" as bow thruster.
--
-- ALL 53 ARE ANSWERED AND PUBLISHED. 33 answers were written for this sitting
-- and are in the bank as SQ-1058 onwards; 20 reuse bank entries named in
-- ai_flags. No new sitting: the September sitting (16 to 30 Sep) is extended
-- only in the sense that it gains a second day.
--
-- SAFE TO RUN MORE THAN ONCE: a question is skipped if its text is already
-- recorded for the September sitting on 17 Sep.

begin;

insert into public.exam_questions
  (sitting_id, asked_on, surveyor, question_text, topic, answer_text, sort_order,
   ai_model, ai_flags, ai_confidence, is_published)
select s.id, date '2026-09-17', 'V.K. Chandrasekharan', v.question_text, v.topic, v.answer_text, v.sort_order,
       v.ai_model, v.ai_flags, 'high', true
  from public.exam_sittings s
 cross join (values
  ('Difference between high voltage and 440 V', 'T02', 'Safety First: HV carries far greater shock, arc-flash, and residual-charge hazards, requiring permits, specialised PPE, and trained personnel that LV does not
Definition Threshold: LV is up to 1000V AC (1500V DC); HV is above 1000V AC
Common Marine Values: LV distribution at 440V/220V; HV at 3.3kV, 6.6kV, or 11kV on large vessels
Neutral Earthing: LV typically insulated neutral; HV uses NER-earthed neutral to control fault current and avoid overvoltage
Switchgear: LV uses air-break (ACB); HV uses vacuum (VCB) or SF6 breakers
Selection Driver: HV chosen for very large power demand to reduce current and cable size
Regulation: HV installations have additional requirements under SOLAS/IEC 60092-503 and stricter safe-working procedures', 1, 'bank', 'answer reused from bank entry SQ-0549'),
  ('Why is insulation monitoring used on the 440 V system but not on high voltage?', 'T02', 'The Short Answer: the two systems earth their neutral differently, so they deal with an earth fault differently.
440 V, Insulated Neutral: the neutral is not connected to the hull. A first earth fault lets almost no current flow, so nothing trips and essential services keep running. The fault still has to be found, because a second earth fault on another phase is a full short circuit. That is why the LV system carries an insulation monitor or earth lamps: the fault gives no other sign.
High Voltage, Earthed Neutral: the generator neutral is earthed through a neutral earthing resistor. An earth fault now drives a limited, measurable current through the resistor, so an earth fault relay detects it and alarms or trips the faulty feeder selectively.
Why HV Is Not Left Insulated: on an insulated HV system an earth fault raises the healthy phases towards line voltage, and an intermittent arcing fault can build up damaging overvoltages. The resistor limits both the fault current and those overvoltages.
Follow Up: HV insulation is still tested, by megger and polarisation index during maintenance, and some HV systems also have insulation monitoring. The difference is that on HV the protection relies on the earth fault relay, not on continuous insulation monitoring.', 2, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1058'),
  ('Auto transformer starter', 'T03', 'Principle: An auto-transformer starter reduces the voltage applied to the motor during starting by using tapped transformer windings, reducing starting current and torque
Operation Sequence: Motor is first connected via reduced-voltage transformer taps (e.g. 50-80%) for starting, then switched directly to full line voltage once it has accelerated sufficiently
Advantage Over DOL: Significantly reduces starting current surge compared to Direct-On-Line starting, protecting the supply system from excessive voltage dip
Advantage Over Star-Delta: Provides higher starting torque per unit of starting current compared to star-delta starting, useful for higher-inertia or higher-load-torque applications
Application: Used for large induction motors where DOL starting would cause excessive voltage dip, but where star-delta starting torque would be insufficient for the load', 3, 'bank', 'answer reused from bank entry SQ-0110'),
  ('Where are the hatch covers placed?', 'T20', 'Where: over the hatchways, the deck openings that give access to the cargo holds. The cover sits on a raised steel frame around the opening called the hatch coaming.
Why A Coaming: it raises the opening above the deck so water on deck does not run straight into the hold, and it forms a strong rim for the cover to seal against. Under the Load Line Convention the coaming must be at least 600 mm high in position 1 (exposed freeboard and raised quarter decks, and superstructure decks in the forward quarter of the ship''s length) and at least 450 mm in position 2 (exposed superstructure decks further aft), unless special cover arrangements are approved.
How The Cover Seals: rubber packing on the cover presses on a compression bar on the coaming, held down by cleats, and drain channels carry away any water that gets past the packing. The cover has to be weathertight.
Common Types: folding covers worked by hydraulic cylinders, side rolling and end rolling covers, and lift-away pontoon covers on container ships, lifted by the shore crane.
The ETO Angle: the hydraulic power pack motor and its starter, limit switches and interlocks on the cover movement, and cable and hose protection around the coaming.', 4, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1059'),
  ('Why do containers not move when the ship rolls?', 'T20', 'Below Deck: containers sit in cell guides, vertical steel guide rails at each corner of the stack. The guides hold the stack in place, so no lashing is needed in the hold.
On Deck: each container is locked to the one below by twist locks fitted into the corner castings. The bottom tier is locked to sockets on the hatch cover or deck. Lashing rods run diagonally from the corner castings of the lower tiers to lashing bridges or the hatch cover and are tightened with turnbuckles, so the stack cannot tip or slide.
Other Fittings: stacking cones, bridge fittings joining the tops of neighbouring stacks, and buttresses in some designs.
Why It Works: the lashings and twist locks take the racking and lifting forces from rolling and pitching, and the stack weights are limited so the lashing forces stay within what the fittings are rated for.
The Plan: SOLAS requires a Cargo Securing Manual approved by the flag State, and the loading computer checks lashing forces for each bay. Heavy weather and parametric rolling are the conditions in which stacks are lost, which is why lashings are checked before and during a voyage.', 5, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1060'),
  ('What is the purpose of the bow (bulbous bow)?', 'T20', 'Reading The Question: surveyors usually mean the bulbous bow, the rounded bulb below the waterline at the front of the ship.
What The Bulb Does: as a ship moves it makes a bow wave, and pushing that wave takes power. The bulb makes its own wave slightly ahead of the bow wave and out of step with it, so the two partly cancel. Wave making resistance falls, and so does fuel consumption at the speed and draught the bulb was designed for.
The Limitation: the benefit depends on speed and draught. Away from the design condition, especially at low speed, the bulb can add resistance, which is why some ships have had their bulbs modified after moving to slow steaming.
The Rest Of The Bow: its shape and flare throw spray and green water aside, it is strengthened against slamming, and it carries the anchors and windlass. The collision bulkhead sits near the bow, and the forepeak tank lies in front of it. The bow thruster tunnel usually passes through the bow below the waterline.
The ETO Angle: the windlass and mooring winch motors, the bow thruster and its interlocks, forward navigation lights, and forepeak level gauging.', 6, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1061'),
  ('How to order a battery', 'T23', 'Specify Voltage: State the nominal system voltage required (e.g. 24V)
Specify Capacity: State the ampere-hour (Ah) capacity needed = load current x required backup duration, with margin for ageing/temperature
Specify Chemistry: Lead-acid or Ni-Cd based on duty - Ni-Cd for critical/emergency, lead-acid for general/starting
Specify Type/Construction: Flooded or sealed (VRLA), terminal type, and physical size/mounting constraints
Regulation: For emergency/GMDSS/lifeboat batteries, confirm the type/capacity meets SOLAS/class requirements and carries approval
Manufacturer Reference: Provide existing battery data/part number for a like-for-like or approved-equivalent replacement
Delivery Considerations: Confirm the battery arrives charged or is commissioned/charged before being placed in service', 7, 'bank', 'answer reused from bank entry SQ-0589'),
  ('Difference between the lifeboat battery and the GMDSS battery', 'T23', 'What Each One Is For: the lifeboat battery starts the lifeboat engine and powers the boat''s searchlight and lights. The GMDSS battery is the ship''s reserve source of energy for the radio installations if the main and emergency supplies both fail.
Where They Are: the lifeboat batteries are in the boat. The GMDSS batteries are on board, usually near the radio installation or in a battery locker, as high as practicable.
The Rules: the lifeboat battery comes under the LSA Code: an electrically started engine needs two independent rechargeable sources, and the batteries are charged from the ship''s supply at not more than 50 V or by a solar charger. The GMDSS battery comes under SOLAS Chapter IV Regulation 13: it must run the VHF and the MF or MF/HF installation together for at least 1 hour on ships with an emergency source of power that fully meets the rules, or 6 hours on ships without one.
Charging: the GMDSS battery has an automatic charger, and its charge and capacity are checked, normally daily for voltage and with a capacity test at intervals. The lifeboat battery is kept on charge through the disconnectable lead.
Typical Type: both are usually 24 V, lead acid or nickel cadmium. A lifeboat starting battery needs high cranking current for a short time. A GMDSS battery needs steady current for hours.', 8, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1062'),
  ('How do you check whether the AVR is working?', 'T01', 'Watch It Work: with the generator running on load, the terminal voltage should hold steady as load changes. In steady conditions the variation should stay within about 2.5 per cent of nominal. On a large load step the dip should stay within about 15 per cent and recover within about 1.5 seconds.
Check The Signals: measure the sensing voltage the AVR receives from the generator, the supply to the AVR, and its output to the exciter field. A healthy AVR raises its output as load comes on and lowers it as load comes off.
Check In Parallel: with two generators sharing load, the reactive load (kVAR) or power factor should be shared evenly. A generator taking far more kVAR than its partner points to its AVR or its droop setting.
Signs Of A Fault: voltage that drifts or hunts, a generator that will not build up voltage, voltage that rises out of control (a lost sensing signal), or a blown AVR fuse.
Adjusting: set voltage with the trim potentiometer, and check stability and droop settings against the maker''s manual. Record the readings before and after.', 9, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1063'),
  ('Parallel operation of generators, with cross questions', 'T01', 'Ensure the incoming generator''s voltage matches the bus-bar voltage using the AVR or manual voltage trimmer
Adjust the prime mover''s governor to make the incoming generator''s frequency slightly higher than the bus-bar frequency
Verify that the phase sequence matches between the incoming generator and the live bus-bars
Monitor the synchroscope to ensure the pointer rotates slowly in the clockwise (fast) direction at about one revolution every 4 seconds
Close the generator''s circuit breaker just before the synchroscope pointer reaches the 12 o''clock position to compensate for the breaker''s mechanical closing delay
After closing the breaker, adjust the governor to share the active power (kW) proportionally and adjust the AVR to balance the reactive power (kVAR)', 10, 'bank', 'answer reused from bank entry Q-0235'),
  ('What is a dielectric?', 'T12', 'Definition: an insulating material that does not conduct electricity but can be polarised by an electric field. When voltage is applied, its charges shift slightly without flowing, which is how it stores energy in a capacitor.
Dielectric Constant: how much electric energy the material can store compared with a vacuum. It sets the capacitance of a capacitor or a cable.
Dielectric Strength: the highest electric field the material can withstand before it breaks down, given in kV/mm. It sets how thick insulation must be for a given voltage.
Dielectric Loss: a small part of the energy is lost as heat. The loss grows as insulation ages or absorbs moisture, which is what a tan delta test on HV cables measures.
Examples On Board: cable insulation (EPR, XLPE, PVC), transformer oil, mica and resin in windings, air and vacuum in breakers, and SF6 gas in some HV switchgear.
Why It Matters: moisture, heat and contamination lower both the resistance and the dielectric strength of insulation, which is what an insulation resistance test detects.', 11, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1064'),
  ('What is a semiconductor', 'T08', 'Definition: A material (typically silicon) with conductivity between a conductor and an insulator, controllable by doping
Intrinsic vs Doped: Pure (intrinsic) silicon has few carriers; doping creates N-type (electrons) or P-type (holes) material
PN Junction: Joining P and N regions forms the junction basis of diodes and transistors
Temperature Effect: Conductivity increases with temperature (opposite to metals)
Devices: Diodes, transistors, thyristors, and ICs are all semiconductor devices
Applications: Rectifiers, AVRs, VFDs, and control electronics throughout the ship
Importance: The foundation of all modern power electronics and control systems onboard', 12, 'bank', 'answer reused from bank entry SQ-0865'),
  ('What is a PLC', 'T07', 'Definition: A Programmable Logic Controller (PLC) is an industrial digital computer designed to execute control logic reliably in harsh industrial/marine environments
Architecture: Comprises a CPU, input/output modules, and a power supply, executing a stored program in a continuous scan cycle
Programming: Commonly programmed using ladder logic, function block diagrams, or structured text, allowing relay-logic-like control implemented in software
Shipboard Applications: Used in engine control rooms for auxiliary machinery automation, cargo/ballast control, and alarm monitoring systems
Advantages: Offers easier troubleshooting via diagnostic displays, flexible reprogramming without rewiring, and greater reliability than large banks of electromechanical relays', 13, 'bank', 'answer reused from bank entry SQ-0296'),
  ('Power cable: what it is, how it is built, and how it differs from a control cable', 'T12', 'What It Is: a cable that carries load current from the switchboard to a motor, transformer or distribution board.
Construction, From The Inside: stranded tinned copper conductors. Insulation around each conductor, usually EPR or XLPE. Fillers to round the cable. An inner sheath. Armour or braid, usually galvanised steel wire or tinned copper braid, for mechanical protection and screening. An outer sheath, halogen free and flame retardant on modern ships. Marine cables are built to IEC 60092 cable standards.
Rating: LV power cables are usually rated 0.6/1 kV. The conductor size is chosen for the load current, the voltage drop and the fault level, with correction for grouping and ambient temperature.
Control Cable: carries signals and control circuits, not load current. It has more cores of smaller size, lower voltage rating, and is often screened, overall or per pair, against interference.
The Difference In One Line: a power cable is sized for current and heat, a control cable is sized for many circuits and protected against noise.
Installation: power and control or instrumentation cables are run apart, or screened, so induced voltages do not reach the signals.', 14, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1065'),
  ('Intrinsically safe: explain', 'T19', 'Safety First: Intrinsic safety prevents ignition of a flammable atmosphere by limiting electrical energy - it protects against fire/explosion rather than containing one
Definition: A protection technique limiting circuit energy so it cannot produce an igniting spark or thermal effect, even under fault
Energy Limiting Principle: Voltage and current are limited to safe levels even with a short or open circuit in the field wiring
Zener Barrier Role: Safe-area barriers/galvanic isolators enforce the energy limits between standard equipment and the hazardous-area device
Regulation: Certified to the IEC 60079 series (Ex ia/ib/ic) matching the area''s gas group and temperature class
Application: Instrumentation such as level, temperature and gas sensors in cargo tanks and other hazardous zones
Contrast with Flameproof: Ex i prevents ignition; Ex d instead contains an internal explosion', 15, 'bank', 'answer reused from bank entry SQ-0291'),
  ('What are Ex i, Ex d and the other Ex protection types?', 'T19', 'The Idea: equipment in a hazardous area must not ignite the gas around it. Each Ex type does that a different way, under the IEC 60079 series.
Ex d, Flameproof: the enclosure is strong enough to contain an explosion inside it, and its joints cool the escaping gases so they cannot ignite the outside. Used for motors, light fittings and junction boxes.
Ex e, Increased Safety: no sparking parts in normal service, with extra measures against high temperature and arcing, such as good terminals and creepage distances. Used for terminal boxes and cage motors.
Ex i, Intrinsic Safety: the circuit energy is limited so low that no spark or hot surface can ignite the gas, even under faults. Ex ia is suitable for Zone 0, Ex ib for Zone 1. Used for instruments and sensors.
Ex p, Pressurised: the enclosure is kept at a pressure above the surroundings with clean air or inert gas, so the gas cannot enter. Used for control panels and large motors.
Ex n, Non Sparking: for Zone 2 only, equipment that does not spark in normal operation.
Ex m, Ex o, Ex q: encapsulation in resin, immersion in oil, and filling with powder or sand.
Zones: Zone 0 gas present continuously, Zone 1 likely in normal operation, Zone 2 not likely and only briefly. Zone 0 needs the highest protection level, such as Ex ia.', 16, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1066'),
  ('ICCP', 'T10', 'Definition: Impressed Current Cathodic Protection (ICCP) is an active corrosion protection system that impresses a controlled DC current onto the hull to make it cathodic relative to seawater, preventing corrosion
Components: Comprises anodes (platinum-coated titanium/niobium), reference electrodes (Ag/AgCl) for feedback, and a control unit regulating anode current
Control Principle: The controller continuously compares the hull''s measured potential (via reference electrodes) to a target protection potential and adjusts anode current accordingly
Advantage Over Sacrificial Anodes: Provides continuously adjustable protection current and much longer anode life compared to fixed sacrificial (zinc/aluminium) anodes, which deplete and require periodic replacement
Maintenance: Requires periodic inspection of anodes and reference cells (especially at drydock), and monitoring of controller output and hull potential readings for correct operation', 17, 'bank', 'answer reused from bank entry SQ-0145'),
  ('IMDG Code: the classes, and the role of the ETO', 'T16', 'What It Is: the International Maritime Dangerous Goods Code, mandatory under SOLAS Chapter VII for dangerous goods in packaged form.
The Nine Classes: 1 explosives. 2 gases (flammable, non flammable, toxic). 3 flammable liquids. 4 flammable solids, substances liable to spontaneous combustion, and substances dangerous when wet. 5 oxidising substances and organic peroxides. 6 toxic and infectious substances. 7 radioactive material. 8 corrosives. 9 miscellaneous dangerous substances, which includes lithium batteries.
Where The ETO Comes In: cargo spaces that carry dangerous goods must meet SOLAS Chapter II-2 Regulation 19. Electrical equipment in those spaces has to be of a certified safe type or be isolated. The ETO keeps that equipment in order, keeps the fire detection, ventilation and bilge alarms working, and makes sure electrical isolation arrangements are in place.
Reefer And Container Checks: dangerous goods containers are stowed as the Document of Compliance allows, and an ETO does not open or work on a unit carrying dangerous goods without following the Emergency Schedule and the ship''s procedures.
In An Emergency: the IMDG Emergency Schedules (EmS) guide the response, including whether water can be used on the cargo.', 18, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1067'),
  ('Seasons (load line seasonal zones)', 'T16', 'Reading The Question: "seasons" is taken here as the load line seasonal zones. If the surveyor meant something else, ask him to clarify before answering.
What They Are: the Load Line Convention divides the world''s oceans into zones and seasonal areas. Each has a permitted load line for a given time of year, because sea conditions differ by region and season.
The Marks: TF tropical fresh water, F fresh water, T tropical, S summer, W winter and WNA winter North Atlantic, which applies only to ships up to 100 m long. The summer mark is level with the centre of the load line disc.
How The Zones Work: tropical zones allow the deepest draught, summer zones the summer mark, and winter seasonal areas the winter mark during the winter months. A ship must not be loaded so that the appropriate mark is submerged when she sails into, or while she is in, a zone or area.
Fresh Water: in fresh water a ship floats deeper, so the fresh water marks allow for that. The fresh water allowance is the difference.
Certificate: the International Load Line Certificate, with annual surveys and renewal every five years.', 19, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1068'),
  ('Bow thruster interlocks', 'T09', 'Why Interlocks: a bow thruster is a large motor, often the largest single load on the switchboard. Starting it at the wrong time can black out the ship or damage the thruster.
Power Interlock: the power management system must confirm enough generator capacity is on line before it allows a start. On many ships a second generator has to be running.
Pitch At Zero: on a controllable pitch thruster the pitch must be at zero before starting, so the motor starts without load.
Speed Limit: ship''s speed must be below the maker''s limit, a few knots, because the thruster is not effective at speed and the loads on it rise.
Other Permissives: control position selected (local or bridge), no earth fault or trip standing on the circuit, lubricating oil pressure or level and cooling confirmed where fitted, and the tunnel grids or doors in the correct position on designs that have them.
Protection While Running: overcurrent and earth fault protection, winding and bearing temperature sensors, and on larger units vibration monitoring. A trip must be investigated before a restart.
The ETO''s Checks: prove each interlock from the sensor end before manoeuvring, and check the PMS start request and load check work.', 20, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1069'),
  ('Generator tripped on low lube oil pressure: what do you check?', 'T01', 'First, Keep The Ship Safe: confirm the standby generator came on line and the load is secure. Do not restart the tripped set until the cause is known.
Is The Pressure Really Low: check the lube oil level in the sump and look for leaks. Check the oil for water or fuel dilution and for the right viscosity. Check the filters for blockage, the lube oil pump and its drive, the relief valve, and the oil temperature, since hot oil thins and pressure falls.
Or Is It A False Trip: check the pressure switch or transmitter. Compare its reading with the local gauge, check its set point and calibration, and check the wiring and connector for faults. A shut isolating valve or a blocked sensing line also gives a false low reading.
Check The Protection: confirm the trip delay and the pre-alarm worked as designed.
After The Repair: prime the lube oil system, start the engine, check the pressure builds normally, and record the fault, cause and action in the log.', 21, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1070'),
  ('Generator running but not building voltage: what to check', 'T01', 'Confirm Speed: Verify the prime mover is running at correct rated speed, since voltage build-up depends on correct frequency/speed
Check AVR Status: Look for AVR fault indications, blown fuses, or tripped protection preventing excitation
Check Field Circuit: Verify the field breaker is closed and there is continuity through the field winding circuit including brushes/slip rings
Suspect Residual Magnetism Loss: If no fault is found in the above, suspect loss of residual magnetism as the most likely cause
Flash the Field: Following manufacturer procedure, briefly apply an external DC supply with correct polarity to the field winding to restore residual magnetism, then restart the generator normally', 22, 'bank', 'answer reused from bank entry SQ-0259'),
  ('Sequential starting after a blackout: what starts first, and when?', 'T04', 'Why Sequential: every motor draws six to eight times its full load current when it starts. Restoring all loads at once can overload the generator that has just come on line and black the ship out again.
How It Works: the power management system or restart timers bring motors back in groups, a few seconds apart, most essential first. The actual times are set for each ship and recorded in its PMS settings, so quote your own ship''s figures.
A Typical Order: steering gear pumps restart automatically as soon as power returns, as SOLAS requires. Then the main engine lube oil and cooling water pumps and the fuel supply and booster pumps. Then the sea water and fresh water cooling pumps. Then the engine room ventilation fans, compressors and other auxiliaries. Air conditioning, galley and other non essential loads come last.
Example Timings: a ship might restart the essential pumps immediately or at about 5 seconds, cooling pumps at about 10 seconds, and ventilation and compressors at about 15 seconds, with further groups after that.
The ETO''s Checks: test the sequence during the blackout test, confirm each group restarts, and adjust the timers if the generator struggles.', 23, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1071'),
  ('MSDS: full form and contents', 'T16', 'Full Form: Material Safety Data Sheet. The current name under the Globally Harmonised System is Safety Data Sheet (SDS).
What It Is: a document from the supplier describing the hazards of a chemical and how to handle it safely.
The Sixteen Sections: 1 identification. 2 hazards. 3 composition. 4 first aid. 5 fire fighting. 6 accidental release. 7 handling and storage. 8 exposure controls and PPE. 9 physical and chemical properties. 10 stability and reactivity. 11 toxicology. 12 ecology. 13 disposal. 14 transport information. 15 regulatory information. 16 other information.
The SOLAS Requirement: Chapter VI Regulation 5-1 requires ships carrying oil or oil fuel to be given material safety data sheets before loading oil cargo in bulk or bunkering.
On Board: MSDS are kept for all chemicals carried, such as cleaning agents, paints, refrigerants, battery electrolyte and water treatment chemicals, and are available where the chemicals are used.
The ETO''s Use: before working with battery acid, contact cleaner or refrigerant, read the MSDS for the PPE, first aid and spill response.', 24, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1072'),
  ('What is an enclosed space, and which gases can be present?', 'T16', 'Definition: a space with limited natural ventilation where the atmosphere may be hazardous. Examples are cargo holds, double bottoms, fuel and ballast tanks, cofferdams, void spaces, duct keels, pump rooms, chain lockers and battery rooms.
The Gases: hydrogen sulphide from crude oil and decaying matter. Hydrocarbon vapour from cargo or fuel. Carbon monoxide from fires or engines. Carbon dioxide from cargo or fire extinguishing systems. Methane from coal cargoes. Hydrogen from battery charging. Phosphine from fumigated cargo. Nitrogen or inert gas, which displaces oxygen. The common danger is a low oxygen level.
Safe Entry: a permit and risk assessment, ventilation first, the atmosphere tested with a gas meter, a personal gas detector carried, a person standing by at the entrance, and communication and rescue equipment ready.
The Drill: SOLAS requires crew who enter or rescue from enclosed spaces to take part in an enclosed space entry and rescue drill at least every two months.
Warning Signs: dizziness, headache and shortness of breath. Several deaths have happened when crew went in to rescue someone without protection.', 25, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1073'),
  ('EESI (EEXI, Energy Efficiency Existing Ship Index)', 'T17', 'Reading The Question: "EESI" is taken here as EEXI, the Energy Efficiency Existing Ship Index. If the surveyor meant something else, ask.
What It Is: a MARPOL Annex VI requirement for existing ships of 400 gross tonnage and above, in force since 1 January 2023. It rates the design energy efficiency of a ship already in service, as EEDI does for a new ship.
How It Works: the ship''s attained EEXI, calculated from its engine power, fuel consumption and capacity, must be equal to or better than the required EEXI for its type and size.
Compliance Options: most ships comply with an engine power limitation (EPL) or shaft power limitation (ShaPoLi), which caps the power that can be used in normal service while leaving it available in an emergency. Other options are energy saving devices or propeller changes.
Documents: the EEXI technical file, the onboard management manual for the power limitation, and the IEE certificate.
Related Rule: CII rates how efficiently the ship actually operates each year, A to E.
The ETO Angle: power limitation systems, the shaft power meter, and records of any emergency override.', 26, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1074'),
  ('SOLAS requirements for electrical power and power management', 'T16', 'Main Source, Regulation 41: at least two generating sets. If any one is stopped, the others must still supply the services needed for normal propulsion and safety, and minimum comfortable conditions of habitability.
Emergency Source, Regulations 42 and 43: a self-contained emergency generator or battery, above the uppermost continuous deck and outside the machinery spaces, that supplies the emergency services automatically within 45 seconds, for 18 hours on cargo ships and 36 hours on passenger ships.
Transitional Source: where required, a battery supplies essential services until the emergency generator takes over.
Load Shedding: where generators run in parallel, arrangements must protect the remaining set against overload when one trips, usually by automatic preferential tripping of non essential loads.
Starting The Emergency Set, Regulation 44: stored energy for at least three consecutive starts, and a second source for three more within 30 minutes unless manual starting is shown to work.
Power Management In Practice: the PMS starts a standby generator on overload or failure, synchronises and shares load, sheds non essential loads, and restarts essential motors in sequence after a blackout. On ships with unattended machinery spaces, automatic start and connection of the standby generator is expected.
Precautions, Regulation 45: earthing, protection against shock and fire, and no fuses in an earthed conductor.', 27, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1075'),
  ('SSAS (Ship Security Alert System)', 'T13', 'What It Is: a system that sends a covert alert when the ship''s security is threatened, for example by piracy or armed robbery. Required by SOLAS Chapter XI-2 Regulation 6 and the ISPS Code.
How It Works: when activated, it transmits a ship to shore alert to the competent authority named by the flag State, which usually passes it to the company. The alert identifies the ship and gives its position, and continues until it is reset.
Covert: it raises no alarm on board and alerts no other ship, so attackers do not know it has been sent.
Activation Points: at least two, one on the navigation bridge and at least one other, designed to prevent accidental activation.
Equipment: usually a dedicated satellite unit or a function of the ship''s satellite communication equipment.
Testing: tested as the Ship Security Plan requires, after telling the company and authority in advance so the test is not taken as a real alert.
Confidentiality: the location of the activation points is known only to those who need to know, and is recorded in the Ship Security Plan.', 28, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1076'),
  ('ISM Code: objectives', 'T16', 'Definition: ISM is the International Safety Management Code, made mandatory by SOLAS Chapter IX, providing an international standard for safe ship operation and pollution prevention.
Objectives: Safe practices in ship operation and a safe working environment, assessment of all identified risks with safeguards put in place, and continuous improvement of shore and shipboard safety management skills.
Key Requirements: A documented Safety Management System, a designated safety and environmental protection policy, defined responsibilities and authority, and procedures for emergency preparedness, maintenance and reporting of non conformities, accidents and hazardous occurrences.
Designated Person Ashore: The DPA has direct access to the highest level of management and links the ship to the company, monitoring safety and pollution aspects of each ship.
Master''s Authority: The Code requires the company to state clearly that the Master has overriding authority and responsibility to make decisions for safety and pollution prevention and to request company assistance.
Certification: The company holds a Document of Compliance and each ship a Safety Management Certificate, subject to internal audits and to external audits with interim, initial, intermediate and renewal verification.', 29, 'bank', 'answer reused from bank entry SQ-1010'),
  ('Name five IMO codes', 'T16', 'ISM Code: International Safety Management, for safe operation and pollution prevention (SOLAS Chapter IX).
ISPS Code: International Ship and Port Facility Security (SOLAS Chapter XI-2).
IMDG Code: International Maritime Dangerous Goods, for packaged dangerous goods (SOLAS Chapter VII).
LSA Code: International Life-Saving Appliance Code (SOLAS Chapter III).
FSS Code: International Code for Fire Safety Systems (SOLAS Chapter II-2).
Others To Name: FTP Code for fire test procedures, IBC Code for chemical tankers, IGC Code for gas carriers, IGF Code for gas fuelled ships, IMSBC Code for solid bulk cargoes, Polar Code, NOx Technical Code (MARPOL Annex VI), and the STCW Code.
Tip: name the code and the SOLAS or MARPOL chapter that makes it mandatory. That is what separates a good answer from a list.', 30, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1077'),
  ('ICCP: voltage, current and reference electrode material', 'T10', 'Reference Electrode Material: silver silver chloride (Ag/AgCl) is the most common, because its potential is stable in seawater. Zinc is also used.
Protection Potential: measured between the hull and the reference electrode. About minus 800 mV (Ag/AgCl) is where protection begins. The usual set point is around minus 850 mV, and the normal range is minus 800 to minus 1050 mV. More negative than about minus 1100 mV is overprotection.
Controller Output: a DC voltage of a few volts up to about 25 V, rising as the paint ages and more bare steel is exposed.
Current: depends on hull size and coating condition, typically tens to a few hundred amps in total, shared between the anodes.
Anodes: platinised titanium or niobium, mounted through the hull with a dielectric shield around each to spread the current.
Why Overprotection Matters: too much current releases hydrogen at the hull, which lifts paint and can embrittle high strength steel.', 31, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1078'),
  ('Sacrificial anode material', 'T10', 'Principle: the anode is a metal more active than steel, so in seawater it corrodes in place of the hull and protects it.
Zinc: the traditional choice for hulls, sea chests and tanks, reliable in seawater.
Aluminium Alloy: aluminium with zinc and indium. It gives more current per kilogram than zinc and lasts longer, so it is common for hulls and ballast tanks.
Magnesium: the most active, used in fresh or brackish water. In seawater it would be consumed too quickly.
Tankers: in cargo tanks and spaces next to them, the position of aluminium anodes is restricted, because an aluminium anode falling onto rusty steel can cause an incendive spark.
Care Points: anodes must not be painted over, must be electrically bonded to the steel, and are renewed when they are about half consumed, usually at dry dock.
Contrast: ICCP does the same job with an external DC supply and permanent anodes.', 32, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1079'),
  ('How do you extinguish a fire?', 'T15', 'The Principle: a fire needs fuel, heat and oxygen, and a chain reaction to keep burning. Remove any one and it goes out.
Starving: remove the fuel. Close the fuel valves, isolate electrical power, or move combustibles away.
Smothering: cut off the oxygen. Use a fire blanket, foam, CO2 flooding, or close the space.
Cooling: take away the heat. Water is the main cooling agent, used as jet or spray.
Breaking The Chain Reaction: dry powder and clean agents interrupt the combustion reactions.
The Actions: raise the alarm, inform the bridge, and muster the fire party. Isolate fuel, ventilation and electrical supplies to the area. Choose the medium for the class of fire, cool the boundaries, and keep watch for reignition.
The Wrong Medium: never use water on an oil, cooking oil or electrical fire, or on dangerous goods that react with it.', 33, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1080'),
  ('How do you carry out work on live equipment?', 'T22', 'The Rule: do not work on live equipment. Isolate, lock out, tag and prove dead first.
When It Cannot Be Avoided: only when isolation would itself create danger, for example on an essential service. The Chief Engineer, and the Master where required, must approve it.
Before Starting: a risk assessment and permit to work, a competent person doing the job with a second person present who knows how to isolate and give first aid, and the area barriered off.
Equipment: insulated tools, insulating gloves and mats rated for the voltage, eye protection, and flame resistant clothing. Remove rings and watches.
While Working: expose only what is needed, cover nearby live parts, work with one hand where possible, and never on HV equipment. HV is always isolated and earthed.
Afterwards: remove covers and tools, restore the equipment, and close the permit.', 34, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1081'),
  ('How to do flashing', 'T01', 'Purpose: Restores lost residual magnetism in the rotor core, needed for a self-excited alternator to build up voltage from standstill
When Needed: Performed when a generator fails to develop any output voltage despite the prime mover running at correct rated speed
Procedure: A temporary external DC source (battery or dedicated flashing supply) is connected briefly to the field winding, with correct polarity matching the machine''s original residual field direction
Duration: Applied only for a short time, just enough to re-establish sufficient residual magnetism, then disconnected
After Flashing: The generator is restarted normally, and the AVR takes over to build up full rated voltage using the newly restored residual field as the starting point', 35, 'bank', 'answer reused from bank entry SQ-0265'),
  ('Steering gear alarms', 'T09', 'Safety First: Steering alarms must reach the right people at once, so the standby unit can be started before steering is lost
Regulation: SOLAS Ch.II-1 Reg 29 (power failure, low oil level, hydraulic lock) and Reg 30.3 (overload, phase failure)
Phase Failure Alarm: Warns of loss of one supply phase, since continued single-phase running risks motor damage
Overload Alarm: Indicates excessive motor current, often from high rudder load or hydraulic issues
Power Failure Alarm: Warns of loss of supply to either power unit
Low Oil Level/Pressure Alarm: Warns of low hydraulic oil level/pressure affecting steering capability
Where They Sound: power failure, low oil level and hydraulic lock alarms on the navigation bridge; overload and phase failure alarms in the main machinery space or control room; motors running shown on the bridge (Reg 30.1)', 36, 'bank', 'answer reused from bank entry SQ-0098'),
  ('Hydraulic lock in the steering gear: why it happens, and what to do', 'T09', 'What It Is: the steering gear stops responding, or the rudder does not move, because oil is trapped in the system and cannot flow. The two sides of the actuator oppose each other, or a valve is holding the oil in.
Why It Happens: with two power units or control systems running together, a single failure such as a stuck directional valve or a wrong valve position can set them against each other. Air in the system and faulty non return or bypass valves can also cause it.
The SOLAS Requirement: where hydraulic locking from a single failure could lead to loss of steering, an audible and visual alarm that identifies the failed system must be given on the navigation bridge.
What To Do: inform the bridge. Stop one power unit or switch to the other system, as the alarm indicates. Steer by the non follow up control or the local emergency controls. Then find the fault: check the solenoid valves and their signals, the valve positions, and air in the system.
Prevention: test the alarm and the changeover regularly, and bleed air from the system after maintenance.', 37, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1082'),
  ('The emergency generator did not start: what do you do?', 'T04', 'First: inform the bridge and the Chief Engineer, and confirm the transitional battery supply is holding the emergency services.
Try Again: start it manually from the local panel or by hand, using the second starting source if the first is exhausted. SOLAS requires stored energy for at least three consecutive starts and a second source for three more within 30 minutes unless manual starting is effective.
Check The Starting System: battery voltage and charger, starter motor and solenoid, or air or hydraulic starter pressure.
Check The Engine: fuel level and the fuel supply valve (it must be open), fuel filters, stop solenoid position, emergency stop not pressed, and cooling and lube oil levels.
Check The Control: the selector in AUTO, the control supply and fuses, the undervoltage signal from the main switchboard, and any shutdown or alarm indication.
After Starting: confirm voltage and frequency, close the breaker, and check the emergency switchboard is supplied. Find and fix the cause, then repeat the automatic start test.', 38, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1083'),
  ('Alarms on board other than machinery alarms', 'T13', 'General Emergency Alarm: seven or more short blasts followed by one long blast, on the bell and whistle.
Fire Detection Alarm: from the fire detection panel, with the zone indicated.
Fixed Fire Extinguishing Release Alarm: sounds before CO2 or other gas is released into a space.
Bridge Alarms: bridge navigational watch alarm (BNWAS), navigation equipment failure alarms, and the steering gear alarms.
Watertight Door And Water Ingress Alarms: door position and operation alarms, and water ingress alarms on bulk carriers.
Cargo Alarms: tank high level and overfill alarms, inert gas alarms, and gas detection alarms on tankers.
Personal Safety Alarms: the engineers'' alarm, the refrigerated room or person trapped alarm, and the hospital call alarm.
Security: the SSAS, which sends an alert without sounding on board.', 39, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1084'),
  ('Insulation resistance test on the alternator', 'T01', 'Why: to check the condition of the stator and rotor insulation. Moisture, dirt and ageing show up as low insulation resistance.
Preparation: stop and isolate the generator, lock out the breaker, and discharge the windings. Disconnect or short the AVR, rotating diodes and any electronics so the test voltage cannot damage them.
Test Voltage: 500 V for a 440 V machine. For HV machines, use the higher voltage the maker specifies.
Test: measure each phase to earth and between phases. Read the value after one minute and correct it to a standard temperature, since insulation resistance falls as the winding warms.
Acceptable Value: at least 1 megohm for LV machines as a common minimum, but the trend over time matters more than a single figure. On HV machines the polarisation index (the 10 minute reading divided by the 1 minute reading) is also taken, and a value of about 2 or more shows healthy insulation.
Afterwards: discharge the windings, reconnect everything, and record the results with the temperature.
If It Is Low: clean and dry the windings, for example with space heaters or warm air, and test again.', 40, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1085'),
  ('Generator synchronising requirements', 'T01', 'Voltage Match: Incoming generator voltage must equal the running bus voltage
Frequency Match: Incoming frequency must closely match the bus frequency (set slightly higher so it takes load on closing)
Phase Sequence Match: Phase rotation of the incoming machine must match the bus (checked at commissioning)
Phase Angle Match: The instantaneous phase angle must coincide (via synchroscope/lamps) at the moment of closing
Breaker Timing: Close just before the in-phase point to account for the breaker''s closing delay
Consequence of Mismatch: Closing out of phase causes a large current surge and mechanical shock to the machine and prime mover
Safety First: All four conditions must be satisfied before closing the breaker', 41, 'bank', 'answer reused from bank entry SQ-0741'),
  ('Shore connection requirements', 'T02', 'Safety First: Shore power must match the ship''s system and be safely interlocked to prevent reversed rotation or unsafe dual-source connection
Regulation: Shore connection arrangements follow SOLAS Ch.II-1 / IEC 60092 (and IEC/ISO/IEEE 80005 for HV shore connection)
Voltage/Frequency Compatibility: Shore supply must match the ship''s voltage and frequency, or an approved converter must be used
Phase Sequence: Must match to ensure correct motor rotation, verified with a phase-rotation meter
Earthing Compatibility: The shore earthing arrangement must be compatible with the ship''s insulated/earthed system
Interlock: Prevents paralleling shore supply with ship''s generators without synchronising
Procedure: Megger the cable, check voltage/frequency/phase sequence/earthing, verify interlock, then energise and confirm', 42, 'bank', 'answer reused from bank entry SQ-0525'),
  ('Electrical power system on board', 'T02', 'LV Distribution: Most vessels use a 440V, 3-phase, 60Hz (or 380V/50Hz) main distribution system with an insulated neutral
Lower Voltage: A 220V (or 230V) supply is derived via transformer for lighting and domestic loads
HV Systems: Large vessels (cruise, LNG, electric propulsion) use HV distribution (3.3kV, 6.6kV, 11kV) with NER-earthed neutral
Neutral Arrangement: LV typically insulated neutral (for continuity); HV NER-earthed (to control fault current)
Emergency System: A separate emergency switchboard fed from the main system or the emergency generator
Frequency: Commonly 60Hz (or 50Hz on some vessels)
Regulation: The electrical installation follows class/IEC 60092 and SOLAS requirements', 43, 'bank', 'answer reused from bank entry SQ-0827'),
  ('SOLAS regulations for the emergency generator', 'T16', 'Safety First: The emergency generator is the last line of power for life-safety systems - its automatic start, capacity and independence are strictly regulated
Automatic Start: SOLAS Ch.II-1 requires it to auto-start and supply essential services within 45 seconds of main power failure
Capacity and Duration: Must supply the SOLAS-listed emergency services (emergency lighting, steering gear indication, fire detection/alarm, navigation lights, GMDSS/radio) for the required period (commonly 18 hours cargo ships, 36 hours passenger ships)
Transitional Source: A transitional source (batteries) must supply essential loads for at least 30 minutes while the generator starts
Location: Above the uppermost continuous deck, outside main machinery spaces, readily accessible, with its own independent fuel supply
Starting Independence: Independent starting means not reliant on the main system
Testing: Regular functional and load/blackout testing is mandated to confirm reliable starting and load capability', 44, 'bank', 'answer reused from bank entry SQ-0094'),
  ('Corona effect', 'T02', 'What It Is: a partial discharge around a high voltage conductor. When the electric field at the conductor surface is stronger than the air can withstand, about 30 kV/cm at normal pressure, the air next to it ionises.
Signs: a faint violet glow, a hissing or crackling sound, and a smell of ozone.
Why It Matters: it wastes power, produces ozone and nitric acid that attack insulation, and causes radio interference. Over time it damages HV cable ends, terminations and windings.
What Makes It Worse: higher voltage, small conductor diameter, sharp edges, damp or dirty surfaces, and low air pressure.
How It Is Reduced: larger diameter or bundled conductors, smooth rounded terminations, stress cones on HV cable ends, and clean, dry insulation.
On Ships: relevant to HV systems at 3.3 kV to 11 kV. Partial discharge testing is one way of checking HV insulation.', 45, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1086'),
  ('Classes of insulation', 'T03', 'Definition: Insulation class defines the maximum temperature a winding''s insulation system can withstand continuously without accelerated degradation
Standard Classes: Common classes include Class B (130°C), Class F (155°C), and Class H (180°C), with higher letter classes tolerating higher temperatures
Significance: A higher insulation class allows a machine to run hotter (often permitting higher continuous rating or extended service life) for the same physical size
Temperature Rise vs Total Temperature: The class defines total permissible winding temperature, factoring in ambient temperature plus the allowable temperature rise due to losses
Practical Application: Motors are often designed with a higher insulation class than their rated temperature rise class (e.g. Class F insulation with Class B temperature rise) to provide a safety margin extending insulation life', 46, 'bank', 'answer reused from bank entry SQ-0125'),
  ('How to order a motor', 'T03', 'Rating Details: Specify rated power (kW), voltage, frequency, phase, and full-load current matching the application requirement
Frame and Mounting: Specify frame size, mounting arrangement (foot-mounted, flange-mounted), and shaft dimensions/coupling type to ensure mechanical compatibility
Enclosure and Protection: Specify IP rating (ingress protection) and, if applicable, hazardous area certification (Ex d, Ex e) required for the installation location
Insulation Class and Duty: Specify insulation class (e.g. Class F/H) and duty cycle rating (S1 continuous, S2/S3 intermittent) matching the application
Manufacturer Reference: Provide the existing nameplate details (manufacturer, model, serial number) to the supplier wherever possible to ensure an exact or approved-equivalent replacement', 47, 'bank', 'answer reused from bank entry SQ-0112'),
  ('Draw and explain an Ex i circuit', 'T19', 'The Diagram, From Left To Right: in the safe area, the control system or power supply. Then the intrinsically safe barrier. Then the field wiring into the hazardous area. Then the field instrument, such as a transmitter or level sensor.
Inside A Zener Barrier: a fuse in series, then a current limiting resistor in series, then Zener diodes connected from the line to the intrinsically safe earth, usually two or three for redundancy.
How It Protects: if a fault puts a high voltage on the safe area side, the Zener diodes conduct and clamp the voltage, and the fuse blows. The resistor limits the current. Together they keep the energy reaching the hazardous area below what could ignite the gas.
The IS Earth: a Zener barrier depends on a clean, low resistance earth connection. Without it the protection does not work.
Galvanic Isolator Alternative: uses a transformer or optocoupler to isolate the two sides, and does not need an IS earth.
Wiring Rules: IS cables are identified, usually by a light blue colour, and kept separate from non IS circuits. The equipment and barrier must be certified as a matching pair.', 48, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1087'),
  ('Two generators in parallel not sharing load after a month in service', 'T01', 'Root Cause: Unequal real power (kW) sharing between paralleled generators is primarily caused by mismatched governor droop settings or a faulty/out-of-calibration governor on one unit
Droop Principle: Each generator''s governor is set with a slight speed droop with increasing load; if droop settings differ between machines, they will not share load proportionally to capacity
Symptom Recognition: One generator''s kW meter reads noticeably higher or lower than expected relative to its rated capacity share, while frequency remains normal overall
Corrective Action: Adjust the governor load-sharing/droop setting (via load sharing module or governor control) on the mismatched unit until kW sharing is proportional to each generator''s rated capacity
Distinction from kVAR Sharing: This is a real power (kW, governor-related) issue, distinct from reactive power (kVAR, AVR-related) sharing problems, which require separate investigation of the excitation system', 49, 'bank', 'answer reused from bank entry SQ-0167'),
  ('Hypermist system: working', 'T15', 'What It Is: a fixed local application system that fights a fire in one part of a machinery space with very fine water mist, without flooding the whole space. HI-FOG is a common make, and hypermist is the name many ships use for it.
Why It Is Fitted: SOLAS Chapter II-2 Regulation 10.5.6 requires a fixed local application system in machinery spaces of category A above 500 cubic metres, on cargo ships of 2,000 gross tonnage and above and passenger ships of 500 and above. It covers the fire hazard areas: the fire side of the main and generator engines, boiler fronts, the incinerator and the heated fuel oil purifiers.
How It Puts A Fire Out: water leaves special nozzles at high pressure as droplets a fraction of a millimetre across. Their very large surface area absorbs heat fast and cools the fire, the water flashes to steam and pushes oxygen away from the flame, and the mist blocks radiant heat so nearby surfaces do not reignite. It uses far less water than a sprinkler.
The Plant: a fresh water supply, a high pressure pump unit, a section valve for each protected area, the nozzles, and a control panel.
How It Is Released: by hand from outside the protected area, and in a periodically unattended machinery space automatically as well, from detectors in the protected area. Detection usually combines flame detectors with smoke or heat detectors so that one false signal does not release it. Release gives an alarm in the space and at the manned control station showing which section has operated.
The ETO Angle: detector testing, the control panel, the section valve solenoids and their indication, the pump motor starter, and testing the release without discharging water.', 50, 'bank', 'answer reused from bank entry SQ-1049'),
  ('MLC minimum ages for work on board', 'T16', 'Minimum Age: no one under 16 may be employed or work on a ship.
Night Work: seafarers under 18 may not work at night. Night covers at least nine hours, starting no later than midnight and ending no earlier than 5 a.m. The competent authority can make exceptions for recognised training.
Hazardous Work: seafarers under 18 may not do work likely to endanger their health or safety, as defined by national law.
Ship''s Cook: must be at least 18.
Other Protections: medical certificates, and in MLC terms young seafarers are those under 18.
Where It Comes From: MLC 2006 Regulation 1.1 and Standard A1.1, with the cook''s age in Title 3.', 51, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1088'),
  ('Blackout: recovery procedure and cross questions', 'T22', 'Immediately: confirm the emergency generator has started and the emergency switchboard is supplying the emergency services. Inform the bridge, the Master and the Chief Engineer.
Find The Cause Before Restoring: check the main switchboard relay flags for overcurrent, short circuit, earth fault, reverse power, or a preferential trip, and the generator for a trip such as low lube oil pressure or overspeed. Restoring power into a fault causes a second blackout.
Restore Power: start the standby generator if it has not started automatically, bring it to speed and voltage, and close its breaker onto the dead main switchboard.
Restore Loads In Sequence: essential motors first, such as steering gear, lube oil and cooling pumps, then the main engine auxiliaries, then non essential loads. This stops the starting current overloading the generator.
Restore The Main Engine: start the auxiliaries, then the main engine when the Chief Engineer is ready.
Transfer From Emergency: once the main switchboard is live, the emergency switchboard is fed from it again and the emergency generator is stopped and put back in AUTO.
Record: log the time, cause and actions, and report as the SMS requires.
Likely Cross Questions: why the emergency generator must start within 45 seconds, what a preferential trip is, why steering gear restarts automatically, and how you would prevent the same blackout again.', 52, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1089'),
  ('Sensors used on ships: types and how they work', 'T06', 'Temperature: RTDs such as Pt100, whose resistance rises with temperature, for most points. Thermocouples, which produce a small voltage from two dissimilar metals, for exhaust gas. Thermistors in motor windings.
Pressure: strain gauge or piezoresistive transmitters sending 4 to 20 mA, and pressure switches for alarms and trips. Bourdon tube gauges for local reading.
Level: float switches, differential pressure transmitters for tanks and boiler drums, radar and ultrasonic sensors for tanks, and capacitance probes.
Flow: turbine, Coriolis, electromagnetic and vortex flow meters, and flow switches.
Speed: magnetic pickups and proximity sensors counting gear teeth, and tachogenerators.
Position: proximity sensors, limit switches and LVDTs.
Fire And Gas: smoke detectors (optical or ionisation), heat detectors, flame detectors (UV or IR), and gas detectors (catalytic, infrared or electrochemical).
Machinery Protection: oil mist detectors, vibration sensors, and salinity and oil content meters.
How They Reach The ECR: most send 4 to 20 mA or a switched contact to the alarm and monitoring system.', 53, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1090')
 ) as v(question_text, topic, answer_text, sort_order, ai_model, ai_flags)
 where s.title = 'September 2026'
   and not exists (
     select 1 from public.exam_questions e
      where e.sitting_id = s.id and e.asked_on = date '2026-09-17'
        and e.question_text = v.question_text);

commit;

-- ── verify ────────────────────────────────────────────────────────────────
--   select asked_on, count(*), count(*) filter (where coalesce(answer_text,'')<>'') answered,
--          count(*) filter (where is_published) published
--     from public.exam_questions q join public.exam_sittings s on s.id = q.sitting_id
--    where s.title = 'September 2026' group by 1 order by 1;   -- expect 16 Sep 26/26/26, 17 Sep 53/53/53
--   select title, question_count, answered_count, surveyor_count from public.v_current_exam_sitting;
--
-- ── undo ──────────────────────────────────────────────────────────────────
--   delete from public.exam_questions q using public.exam_sittings s
--    where s.id = q.sitting_id and s.title = 'September 2026' and q.asked_on = date '2026-09-17';

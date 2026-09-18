-- The 18 September 2026 sitting, added to the running September sitting.
--
-- SOURCE: ETO_Oral_Exam_Questions_18-09-2026.docx. Internal examiner Arvind,
-- external examiner Somesh. Blesson confirmed this is the pair the bank
-- already carries as "Arbind Choudhary / Somesh Prakash", so that name is used.
--
-- 35 lines became 18 cards. Dropped at Blesson's instruction: the personal
-- questions (introduce yourself, INDOS number, CDC and admit card, show your
-- room, dress code, ships sailed on, number of attempts, where you are
-- appearing from). Folded: international shore connection with "draw flange"
-- and "thickness of flange"; the three GMDSS equipment questions; the two
-- lifeboat type questions; the three lifeboat brake questions; the two
-- emergency escape questions; oil monitor testing with the 15 ppm alarm test.
--
-- ALL 18 ARE ANSWERED AND PUBLISHED. 7 answers were written for this sitting
-- and are in the bank as SQ-1091 onwards; 11 reuse bank entries named in
-- ai_flags, two of them built from a pair of entries.
--
-- SAFE TO RUN MORE THAN ONCE: a question is skipped if its text is already
-- recorded for the September sitting on 18 Sep.

begin;

insert into public.exam_questions
  (sitting_id, asked_on, surveyor, question_text, topic, answer_text, sort_order,
   ai_model, ai_flags, ai_confidence, is_published)
select s.id, date '2026-09-18', 'Arbind Choudhary / Somesh Prakash', v.question_text, v.topic, v.answer_text, v.sort_order,
       v.ai_model, v.ai_flags, 'high', true
  from public.exam_sittings s
 cross join (values
  ('Objective of the ISM Code', 'T16', 'Definition: ISM is the International Safety Management Code, made mandatory by SOLAS Chapter IX, providing an international standard for safe ship operation and pollution prevention.
Objectives: Safe practices in ship operation and a safe working environment, assessment of all identified risks with safeguards put in place, and continuous improvement of shore and shipboard safety management skills.
Key Requirements: A documented Safety Management System, a designated safety and environmental protection policy, defined responsibilities and authority, and procedures for emergency preparedness, maintenance and reporting of non conformities, accidents and hazardous occurrences.
Designated Person Ashore: The DPA has direct access to the highest level of management and links the ship to the company, monitoring safety and pollution aspects of each ship.
Master''s Authority: The Code requires the company to state clearly that the Master has overriding authority and responsibility to make decisions for safety and pollution prevention and to request company assistance.
Certification: The company holds a Document of Compliance and each ship a Safety Management Certificate, subject to internal audits and to external audits with interim, initial, intermediate and renewal verification.', 1, 'bank', 'answer reused from bank entry SQ-1010'),
  ('International shore connection: what it is, sketch it, and the flange thickness', 'T15', 'What It Is: a standard flange that lets a shore fire main, or another ship, feed water into this ship''s fire main when her own pumps cannot. One side of the fitting is the standard international flange; the other side is made to suit the ship''s own hydrant and hose coupling.
The Rule: SOLAS Chapter II-2 requires at least one international shore connection on ships of 500 gross tonnage and above, to the specification in the FSS Code.
The Numbers Surveyors Want: outside diameter 178 mm. Inside diameter (bore) 64 mm. Bolt circle diameter 132 mm. Four holes of 19 mm diameter, equally spaced on the bolt circle and slotted to the flange edge. Flange thickness at least 14.5 mm. Supplied with four bolts of 16 mm diameter and 50 mm length, four nuts, eight washers and a gasket.
How To Sketch It: draw a circle 178 across, a 64 bore in the middle, a dashed bolt circle at 132, and four slots of 19 opening to the rim at 90 degrees to each other. Mark the flange thickness 14.5 mm on a side view.
Material And Keeping: steel or equivalent, faced flat on the international side, rated for the fire main pressure. It is kept with its bolts, nuts, washers and gasket together, usually in a marked box, accessible from both sides of the ship near the accommodation or gangway.
Why It Matters: it is checked at every PSC inspection because it is useless if the bolts have gone missing.', 2, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1091'),
  ('Muster list: what it shows, and why it is on board', 'T21', 'What It Is: the ship''s emergency organisation on one sheet, required by SOLAS Chapter III Regulation 37. It tells every person on board where to go and what to do before anyone has time to think.
The Alarms: it gives the details of the general emergency alarm and the public address system, the action to take when the alarm sounds, and how the order to abandon ship will be given. The general emergency alarm is seven or more short blasts followed by one long blast.
The Duties: it sets out each crew member''s duties, including closing watertight and fire doors, valves, scuppers, side scuttles, skylights and portholes, equipping the survival craft and other life saving appliances, preparing and launching them, mustering passengers where carried, using the communication equipment, and manning the fire parties.
The Substitutes: it names substitutes for key people, because the person with a duty may be the casualty.
Who Maintains The Gear: it names the officers responsible for keeping the life saving and fire fighting appliances ready for use.
Where It Is: drawn up before the ship sails, kept up to date after crew changes, and posted where everyone sees it, including the bridge, the engine room and the accommodation. Emergency instructions are provided for every person on board, in the working language of the ship and in English.
The ETO''s Part: know your own station and duty, usually with the emergency generator, the emergency switchboard and the fire alarm panel.', 3, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1092'),
  ('What type of lifeboat is fitted on a container ship?', 'T21', 'The Usual Answer: a container ship normally carries totally enclosed lifeboats, davit launched, one on each side, each able to take everyone on board.
What SOLAS Requires: on a cargo ship, either lifeboats on each side with capacity for everyone, or one free fall lifeboat at the stern with capacity for everyone (SOLAS Chapter III Regulation 31).
Free Fall: common on bulk carriers and tankers, and fitted to some container ships. The whole boat slides down a ramp at the stern and is launched by its own weight, so it needs no falls and gets clear quickly.
Partially Enclosed: allowed on passenger ships, not on cargo ships. If the surveyor says "semi enclosed", that is what he means by it: a boat with rigid covers at each end and a collapsible canopy over the middle.
Why Totally Enclosed On Cargo Ships: a rigid weathertight canopy protects against fire, weather and capsize, it self rights, and on tankers it carries a water spray and air support system for launching through burning oil.
The ETO''s Part: the boat''s battery and charger, the engine starting circuit, the searchlight and lights, the davit winch motor and limit switches, and the embarkation lighting.', 4, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1093'),
  ('How is the lifeboat braked on lowering, and what is a centrifugal brake?', 'T21', 'The Boat Comes Down By Gravity: the winch motor only hoists. Lowering is by releasing the brake, so the boat can be launched with no power at all.
The Holding Brake: a spring applied, electromagnetically released brake on the winch. It is on whenever nothing is holding it off, so a power failure stops the boat rather than dropping it. It is released by a hand lever at the winch, and by a remote wire from inside the boat so the crew can lower themselves.
The Hand Lever Is A Dead Man: the operator has to hold it. Let go, and the spring puts the brake back on and the boat stops.
The Centrifugal Brake: the speed limiter on the winch. As the drum turns faster, weighted shoes are thrown outwards against a brake drum, and the friction holds the descent to a safe speed. It cannot be adjusted by the operator; it simply prevents the boat running away.
The Speed It Holds: the LSA Code sets the lowering speed by S = 0.4 + 0.02H, where H is the height from the davit head to the waterline in the lightest seagoing condition, and the loaded boat is not lowered faster than 1.3 m/s.
Also On The Winch: a limit switch to stop hoisting at the stowed position, and hand gear for recovering the boat by hand.
Not The Engine: the lifeboat engine has no brake, and is not used to slow the descent. That is what the surveyor is checking.', 5, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1094'),
  ('What equipment makes up GMDSS, and what communication equipment is carried', 'T13', 'VHF DSC Radio: Digital Selective Calling VHF for Sea Area A1 distress/communication
MF/HF DSC Radio: For Sea Areas A2/A3/A4 medium/high-frequency distress/communication
Inmarsat Satellite Equipment: Inmarsat-C or Fleet for satellite distress/communication in A3
EPIRB: Emergency Position-Indicating Radio Beacon (406 MHz) transmitting distress position via satellite
SART: Search and Rescue Transponder responding to radar for locating survival craft
NAVTEX Receiver: Receives navigational and meteorological safety information
Reserve Battery: Dedicated reserve power source for the GMDSS equipment, sized per SOLAS Ch.IV', 6, 'bank', 'answer reused from bank entry SQ-0897'),
  ('What does the IOPP survey mean?', 'T17', 'What It Is: the survey behind the International Oil Pollution Prevention certificate, required by MARPOL Annex I for ships of 400 gross tonnage and above (and for oil tankers of 150 and above). The certificate is valid for up to five years.
The Four Surveys: initial, before the certificate is first issued. Annual, within three months before or after each anniversary date. Intermediate, around the middle of the certificate''s life, between the second and third anniversary. Renewal, before the certificate expires.
What Is Actually Examined: the oily water separator and its 15 ppm alarm with their certificates, the automatic stopping device and the three way valve, the sealing of the arrangements, the sludge and bilge holding tanks and their pipework, the standard discharge connection, the Oil Record Book entries against the tank soundings, and the SOPEP with its equipment.
The Thing They Look Hardest For: any bypass around the separator, or broken seals. That is treated as intent, and is how Oil Record Book prosecutions start.
The Supplement: the certificate carries a Record of Construction and Equipment, Form A for non tankers and Form B for tankers, listing what the ship has. What is on the form must be on board and working.
The ETO''s Part: the 15 ppm alarm and its sensor, the automatic stopping arrangement and valve control, the interlocks and alarms, and the records of tests and calibration.', 7, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1095'),
  ('Oil monitoring equipment: how do you test it and prove it works? What is the 15 ppm alarm test?', 'T17', 'Say This First: the 15 ppm bilge alarm is not calibrated on board. Under MEPC.107(49) the accuracy check is done only by the manufacturer or a person authorised by them, at intervals not exceeding five years, and the calibration certificate is kept aboard for inspection. What you do on board is test it and prove it, following the maker''s instructions.
The Zero Check: run clean fresh water through the measuring cell and confirm the instrument reads zero or close to it. A reading that will not come down on clean water is usually a dirty or fouled cell, an aged lamp, or condensation on the optics, not real oil content.
The Alarm Test: use the unit''s built in test facility, which either inserts an optical filter into the light path or injects a simulated signal, to drive the reading above 15 ppm. Confirm three things happen. The alarm annunciates locally and wherever it is repeated, the three way overboard valve moves to recirculate back to the bilge holding tank, and the event is logged where the unit has a recorder.
Prove The Valve, Not Only The Lamp: this is what the surveyor is really testing. An alarm that sounds while the overboard valve stays open is a pollution incident waiting to happen, so watch the valve move and confirm its position feedback.
Cleaning And Routine: clean the measuring cell and the optics to the maker''s interval, check the sample pump is drawing and the sample line is clear, and check lamp hours where the unit logs them.
Records And Seals: the automatic stopping device and the sampling arrangement are sealed. Broken seals, or a fitted bypass, are treated as evidence of intent and are how Oil Record Book prosecutions begin. Log every test.', 8, 'bank', 'answer reused from bank entry SQ-1037'),
  ('Different types of heat detectors used on board', 'T04', 'Fixed-Temperature Type: Triggers when the ambient temperature reaches a fixed set point (e.g. 68°C)
Rate-of-Rise Type: Triggers when temperature rises faster than a set rate, detecting rapidly developing fires even before the fixed limit
Combined Type: Many detectors combine fixed-temperature and rate-of-rise elements
Application: Used where smoke detectors would give false alarms - galleys, machinery spaces, and dusty/steamy areas
Working: A bimetallic/thermistor/pneumatic element responds to heat to operate the detector
Regulation: Type-approved and installed per SOLAS Ch.II-2
Selection: Chosen for spaces where heat detection is more reliable than smoke detection', 9, 'bank', 'answer reused from bank entry SQ-0885'),
  ('Why is the main propulsion shaft earthed?', 'T10', 'Purpose: Shaft earthing provides a low-resistance path to discharge static and stray electrical charge that builds up on the rotating propeller shaft
Why Needed: The oil film in the shaft bearings insulates the shaft, allowing potential to build up which would otherwise discharge through the bearing, causing pitting/fluting damage
Construction: A carbon brush or silver-graphite brush rides on a slip ring/collar on the shaft, connected via a bonding cable to the hull
Monitoring: A shaft potential monitoring system may be fitted to measure shaft voltage and alarm if the earthing brush contact degrades
Maintenance: Brushes are inspected for wear and good contact pressure, as poor contact allows shaft potential to build up and cause bearing damage', 10, 'bank', 'answer reused from bank entry SQ-0437'),
  ('ISPS Code and its elements', 'T16', 'What It Is: the International Ship and Port Facility Security Code, made mandatory by SOLAS Chapter XI-2 after 2001. It sets a framework for assessing security risk and applying measures against unlawful acts.
Two Parts: Part A is mandatory. Part B is guidance on how to meet Part A, and some flags make parts of it mandatory.
Security Levels: level 1 normal, with minimum protective measures always in force. Level 2 heightened, with additional measures for a period of increased risk. Level 3 exceptional, when an incident is probable or imminent.
The People: the Company Security Officer, the Ship Security Officer, and ashore the Port Facility Security Officer.
The Documents: the Ship Security Assessment, the Ship Security Plan approved by the flag State, the International Ship Security Certificate (five years, with at least one intermediate verification), the Continuous Synopsis Record, and the Declaration of Security between ship and port when required.
The Measures On Board: access control and identity checks, restricted areas, control of cargo and ship''s stores, deck watches and rounds, lighting and monitoring, and the ship security alert system.
Training And Records: security drills at least once every three months, exercises at least once a year, and records of drills, security level changes and DoS kept on board.
The ETO''s Part: the SSAS and its test, CCTV, access control and alarm equipment, and the lighting used for security rounds.', 11, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1096'),
  ('Main switchboard safeties', 'T04', 'Safety First: The main switchboard is dead-front with interlocks to protect personnel and guard against unsafe switching
Dead-Front Construction: No live parts exposed on the operating face
Protection Devices: Overcurrent, earth-fault, reverse-power, and undervoltage protection on generators and feeders
Interlocks: Prevent unsafe operations (racking closed breakers, unsafe paralleling)
Insulation Monitoring: An insulation monitoring device alarms on reduced insulation on the insulated-neutral system
Preferential Trip: Sheds non-essential loads on overload to protect generators and prevent blackout
Busbar Integrity: Busbar joints kept tight and inspected, as loose connections are a common fire cause
Regulation: Switchboard construction/protection follows class/IEC 60092', 12, 'bank', 'answer reused from bank entry SQ-0765'),
  ('Emergency escape from the engine room: what it is, how many, and what is required', 'T15', 'What It Is: a route that lets everyone get out of a machinery space if the normal way is blocked by fire, smoke or flooding.
How Many: SOLAS Chapter II-2 Regulation 13 requires two means of escape from each machinery space of category A, as widely separated as possible.
The Two Usual Arrangements: two sets of steel ladders leading to doors in the upper part of the space, one of them inside a protected enclosure, the escape trunk, running from the lower part of the space to a safe position outside it. Or one steel ladder to a door in the upper part, plus a steel door in the lower part that can be worked from both sides and opens on a safe escape route.
What The Escape Trunk Gives You: fire rated boundaries and self closing fire doors, so the route stays usable while the space burns.
Other Requirements: escape routes kept clear and never used for storage, doors that open from both sides, handrails and non slip treads, inclined ladders no steeper than 60 degrees and at least 600 mm wide, low location lighting or photoluminescent marking, and emergency lighting from the emergency switchboard. EEBDs are stowed in the machinery space so a person can reach one on the way out.
Drills: the escape route is walked during drills, and the EEBDs are part of the training.
The ETO''s Part: the escape and emergency lighting on that route, the door hold open magnets that release on the fire alarm, and the photoluminescent marking.', 13, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1097'),
  ('What is three-term (three-mode) control?', 'T07', 'Definition: Three-mode (PID) control combines Proportional, Integral, and Derivative control actions to achieve fast, accurate, and stable process control
Proportional Action: Provides an output proportional to the current error, giving fast initial response but leaving a steady-state offset if used alone
Integral Action: Accumulates error over time and eliminates the steady-state offset left by proportional action alone, ensuring the process reaches the exact setpoint
Derivative Action: Responds to the rate of change of error, providing a damping/anticipatory effect that reduces overshoot and improves stability
Combined Benefit: The three modes together provide fast response (P), zero steady-state error (I), and improved stability/reduced overshoot (D), making PID control the standard approach for most shipboard process control loops', 14, 'bank', 'answer reused from bank entry SQ-0177'),
  ('Smoke detectors on board, the ionisation type, and its radioactive source', 'T04', 'Working Principle: A small radioactive source ionises air in a chamber, creating a small steady ion current between electrodes
Smoke Effect: Smoke particles entering the chamber attach to ions, reducing the ion current
Alarm Trigger: The drop in ion current is detected and triggers the fire alarm
Responsiveness: Responds quickly to fast-flaming fires producing small combustion particles
Construction: Comprises the ionisation chamber, radioactive source, electrodes, and detection circuit
Limitation: Less responsive to slow smouldering fires (optical detectors are better for those)
Regulation: Type-approved and installed per SOLAS Ch.II-2; the radioactive source requires proper handling/disposal
Source Material: Americium-241 is the radioactive isotope commonly used in ionisation smoke detectors
Emission: It emits alpha particles that ionise the air in the detection chamber
Quantity: A very small, sealed amount is used, considered safe in normal use
Function: The ionised air conducts a small steady current that smoke disrupts, triggering the alarm
Handling: The sealed source requires no handling in normal use; detectors must be disposed of properly per radioactive-material regulations
Safety: The sealed low-activity source poses negligible risk during normal operation
Disposal: End-of-life detectors are disposed of through approved channels due to the radioactive source', 15, 'bank', 'answer reused from bank entry SQ-0883 + SQ-0884'),
  ('Precautions when connecting shore power to the ship', 'T02', 'Safety First: A wrong-phase or incompatible shore connection can reverse motor rotation or back-feed a live system - verify everything before closing the breaker
Regulation: Shore connection arrangements follow SOLAS Ch.II-1 / IEC 60092 and IEC/ISO/IEEE 80005 for high-voltage shore connection where fitted
Procedure (step by step): 1) Megger-test the shore cable  2) Confirm voltage and frequency match (or converter fitted)  3) Check phase sequence with a phase-rotation meter  4) Confirm earthing arrangement compatibility  5) Verify interlock with ship''s generator breakers  6) Energise and check indication
Phase Sequence: Must match the ship''s system to avoid reversed rotation of connected motors
Earthing: Confirm the shore earthing is compatible with the ship''s insulated/earthed system to avoid unintended fault paths
Interlock: Ensure shore supply and ship''s generators cannot be paralleled without proper synchronising
Insulation: Confirm the shore cable is undamaged and moisture-free before use', 16, 'bank', 'answer reused from bank entry SQ-0088'),
  ('Electrical survey on board: what is surveyed', 'T22', 'Purpose: Periodic classification society surveys verify the ship''s electrical systems remain in compliant, safe operating condition per class rules and statutory requirements
Scope of Inspection: Covers switchboards, generators, motors, cabling, emergency power systems, and safety devices (protection relays, interlocks)
Documentation Reviewed: Insulation resistance test records, planned maintenance history, and equipment certificates are reviewed alongside physical inspection
Functional Testing: Includes verification of protective device operation (overcurrent, earth fault, reverse power relays) and emergency system function (blackout test, emergency generator start)
Outcome: Findings are recorded, with any deficiencies noted for rectification within a specified timeframe to maintain the vessel''s class certification', 17, 'bank', 'answer reused from bank entry SQ-0243'),
  ('What is a proximity sensor, and what types are there?', 'T06', 'Definition: A proximity sensor detects the presence/absence of a target without physical contact
Inductive Type: Detects metal targets via the change in an electromagnetic field (eddy-current loading)
Capacitive Type: Detects metallic and non-metallic targets via a change in capacitance
Operation: The sensor output switches when a target enters its sensing range
Advantage: Non-contact, robust, and reliable with no mechanical wear
Applications: Position/end-limit detection, speed/rotation sensing, and interlock inputs (e.g. Framo cargo system)
Hazardous Area: In cargo/hazardous areas, proximity sensors are intrinsically safe/Ex-certified
Inductive: Detects metallic targets via electromagnetic field/eddy-current change - the most common industrial type
Capacitive: Detects metallic and non-metallic targets (liquids, powders) via capacitance change
Magnetic (Reed/Hall): Detects a magnet''s field, using reed switches or Hall-effect sensors
Optical/Photoelectric: Detects targets by interrupting/reflecting a light beam
Ultrasonic: Detects targets by reflected ultrasonic sound, for distance/level sensing
Selection: Based on target material, sensing distance, and environment
Application: Position, level, and interlock sensing throughout shipboard machinery/automation', 18, 'bank', 'answer reused from bank entry SQ-0872 + SQ-0873')
 ) as v(question_text, topic, answer_text, sort_order, ai_model, ai_flags)
 where s.title = 'September 2026'
   and not exists (
     select 1 from public.exam_questions e
      where e.sitting_id = s.id and e.asked_on = date '2026-09-18'
        and e.question_text = v.question_text);

commit;

-- ── verify ────────────────────────────────────────────────────────────────
--   select asked_on, count(*), count(*) filter (where coalesce(answer_text,'')<>'') answered
--     from public.exam_questions q join public.exam_sittings s on s.id = q.sitting_id
--    where s.title = 'September 2026' group by 1 order by 1;  -- 16th 26, 17th 53, 18th 18
--   select title, question_count, answered_count, today_count from public.v_current_exam_sitting;
--
-- ── undo ──────────────────────────────────────────────────────────────────
--   delete from public.exam_questions q using public.exam_sittings s
--    where s.id = q.sitting_id and s.title = 'September 2026' and q.asked_on = date '2026-09-18';

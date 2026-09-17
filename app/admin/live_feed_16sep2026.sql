-- The 16 September 2026 sitting: a new September sitting in the live exam feed.
--
-- WHY A NEW SITTING THIS TIME. v_current_exam_sitting shows only the newest
-- published sitting. Blesson asked for September to run from 16 Sep and for
-- August to leave the feed, so a new row is the intent here, unlike 31 Aug.
-- August's rows are NOT deleted: all 168 of its questions are in the Surveyor
-- Q&A bank (checked with _intake.cjs, 0 missing), and the sitting stays in
-- the database for the record.
--
-- SOURCE: ETO_Oral_Exam_Questions.docx, 16/09/2026, 35 lines. The last line
-- was the candidate's note that cross questions were asked, not a question.
-- "PID controller" / "(cross questions)", "Motor frame" / "(cross
-- questions)", "CT/PT" / "CT cross questions", the three Annex VI lines,
-- the two ETO-duty lines and the two liferaft lines were each folded into one
-- card. 26 cards.
--
-- ALL 26 ARE ANSWERED AND PUBLISHED. lxCard() shows an unanswered question as
-- "Model answer being written". 12 answers were written for this sitting and
-- are in the bank as SQ-1039 to SQ-1050; 14 reuse an existing bank answer,
-- named in ai_flags. No surveyor was named, so surveyor is NULL and the feed
-- shows "Not attributed". The centre was not stated; Mumbai is the column
-- default and matches every earlier sitting.
--
-- SAFE TO RUN MORE THAN ONCE: the sitting is created only if no September
-- 2026 sitting exists, and a question is skipped if its text is already
-- recorded for that sitting and date.

begin;

insert into public.exam_sittings (title, centre, starts_on, ends_on, is_published, note)
select 'September 2026', 'Mumbai', date '2026-09-16', date '2026-09-30', true,
       'Loaded 17 Sep 2026 from a candidate''s recollection of 16 Sep. Answers checked against the course notes and the regulations; 14 reuse bank answers.'
where not exists (select 1 from public.exam_sittings where title = 'September 2026');

insert into public.exam_questions
  (sitting_id, asked_on, surveyor, question_text, topic, answer_text, sort_order,
   ai_model, ai_flags, ai_confidence, is_published)
select s.id, date '2026-09-16', null, v.question_text, v.topic, v.answer_text, v.sort_order,
       v.ai_model, v.ai_flags, 'high', true
  from public.exam_sittings s
 cross join (values
  ('Steering gear safety: with only an overload alarm and no trip, the motor can burn. Why is it arranged this way?', 'T09', 'The Rule: SOLAS Chapter II-1 Regulation 30.2. Each electric or electrohydraulic steering gear motor and its circuit get short circuit protection and an overload alarm. There is no overload trip.
The Reason: losing steering is the greater danger. A ship that loses her rudder in a narrow channel, in traffic or coming alongside can ground or collide within minutes. A motor running hot for that time is a repairable loss. The rule accepts the risk to the motor to keep the rudder moving.
What Still Trips: a short circuit, because the motor cannot ride through it and leaving it on would take the supply away from the whole gear. Where excess current protection is fitted, it must be set at not less than twice the full load current and let the starting current through, so it only acts on a real fault.
How The Motor Is Looked After Instead: the overload alarm is given on the navigation bridge and at the machinery control position, along with the phase failure and low hydraulic oil level alarms. The watch starts the standby power unit, then stops the overloaded one once steering is secure and investigates.
The Supply: two separate circuits from the main switchboard, one of which may be routed through the emergency switchboard.
Follow Up: phase failure is also alarm only, for the same reason. A motor that has lost a phase keeps turning and draws more current, so the answer is the same: warn, change over, then find the fault.', 1, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1039'),
  ('Deck tanker safety: how intrinsically safe and flameproof equipment work', 'T19', 'Ex d (Flameproof): The equipment is housed in a robust enclosure designed to securely contain any internal electrical explosion and prevent the hot gases from escaping to ignite the surrounding hazardous atmosphere
Ex d Applications: It is used for equipment that normally produces sparks or arcs, such as electric motors, junction boxes, and luminaires, typically installed in Zone 1 areas like the cargo pump room or deck
Ex i (Intrinsically Safe): The circuit''s design ensures that its maximum electrical energy (voltage and current) is kept safely below the ignition level of the specific gas mixture, even under multiple fault conditions
Ex i Applications: It is used exclusively for low-power instrumentation circuits, such as tank level gauges, pressure/temperature sensors, and gas detectors, and is the only protection type permitted in Zone 0 (continuous hazard) spaces
Ex i Protection Mechanism: Requires a Zener barrier or galvanic isolator installed in a safe area (like the control room) to strictly limit the energy entering the field circuit in the hazardous zone', 2, 'bank', 'answer reused from bank entry Q-0407'),
  ('Lead acid battery: the electrolyte', 'T23', 'Safety First: Battery electrolyte is corrosive and batteries emit explosive hydrogen - use PPE, ventilation, and keep ignition sources away
Electrolyte Type: Dilute sulphuric acid (H2SO4) in distilled water
Role in Reaction: The sulphuric acid actively participates in the charge/discharge chemical reaction, so its concentration changes with state of charge
Specific Gravity: SG falls as the battery discharges (acid consumed) and rises when charged, making SG a useful charge indicator
Fully Charged SG: Typically around 1.265-1.280 for a fully charged cell
Topping Up: Only distilled water is added to replace evaporation losses, never acid
Safety Handling: Neutralise spills with an alkali (e.g. baking soda), and keep separate from alkaline-battery equipment', 3, 'bank', 'answer reused from bank entry SQ-0517'),
  ('Battery room safeties', 'T23', 'Safety First: The battery room is a hydrogen-explosion and corrosive-electrolyte hazard - ventilation, explosion-proof fittings, and no ignition sources are the primary controls
Ventilation: Exhaust ventilation from a high point disperses hydrogen released on charging
Explosion-Proof Fittings: All lights/switches/fittings certified explosion-proof/flameproof
No Ignition Sources: No smoking/naked flame, clear signage, no unauthorised electrical equipment
PPE and Neutraliser: Acid/alkali-resistant PPE and appropriate neutraliser available for spillage
Charger Control: Controlled charging to limit gassing; ventilation confirmed during charging
Regulation: Battery-space ventilation and equipment rating follow SOLAS/class and IEC 60092', 4, 'bank', 'answer reused from bank entry SQ-0893'),
  ('How do pressure and temperature gauges send their signal to the ECR, and which parameters can we read there?', 'T06', 'Two Different Things: the local gauge at the machine, a Bourdon tube or a dial thermometer, has no output at all. What reaches the ECR comes from a transmitter or a switch fitted alongside it.
Pressure: a transmitter senses pressure on a diaphragm, usually with a strain gauge or piezoresistive element, and sends a 4 to 20 mA current on a two wire loop that also powers it. 4 mA is 0 per cent of range and 20 mA is 100 per cent, so a 0 to 10 bar transmitter reading 12 mA is showing 5 bar.
Temperature: a Pt100 resistance thermometer, wired three wire so the lead resistance cancels out, or a thermocouple for exhaust gas temperatures. Either goes straight to a temperature input card or through a head mounted transmitter that gives 4 to 20 mA.
Why 4 mA And Not 0: live zero. A broken wire gives 0 mA, which the alarm system reads as a sensor fault rather than as zero pressure. Readings below about 3.6 mA or above about 21 mA are treated as faults.
Switches: pressure and temperature switches give an on or off contact for alarms and shutdowns, such as lube oil low pressure, separate from the analogue reading.
In The ECR: the alarm and monitoring system shows the live value, the alarm set points and trends, and keeps the alarm history. Typical points are lube oil and fuel oil pressure, jacket and piston cooling temperatures, exhaust temperature for each cylinder and after the turbocharger, bearing and thrust temperatures, starting air pressure and sea water pressure.
Reading A Fault: a value stuck at the bottom of the scale usually means an open loop, a steady offset means calibration drift, and a jumping value often means a poor screen or earth.', 5, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1040'),
  ('PID controller, with cross questions', 'T07', 'Definition: A PID (Proportional-Integral-Derivative) controller combines all three control actions to achieve fast, accurate, and stable process control
Proportional Action: Provides output proportional to current error, giving fast response but leaving a residual steady-state offset if used alone
Integral Action: Eliminates the steady-state offset by accumulating error over time and continuing correction until error reaches zero
Derivative Action: Responds to the rate of change of error, providing a damping effect that reduces overshoot and improves stability
Shipboard Application: Standard approach for boiler level, temperature, and pressure control loops, where fast, accurate, and stable regulation is required despite disturbances', 6, 'bank', 'answer reused from bank entry SQ-0328'),
  ('Motor frame, with cross questions', 'T03', 'The frame number of a motor is a standardized alphanumeric code on the nameplate that primarily specifies the shaft centre height in millimeters for IEC standard motors
For example, an IEC frame 132 motor signifies that the center of the shaft is exactly 132 mm above the base of the mounting feet
Suffix letters in the code provide additional physical specifications, such as ''M'' for medium body length, ''L'' for long body, and ''S'' for a short shaft
Mounting configurations are also indicated within the standard, using codes like ''B3'' for horizontal foot-mounted or ''B5'' for flange-mounted
Matching the exact frame number during motor replacement is critical to ensure the new motor fits the existing mounting footprint and aligns accurately with the driven machinery
Installing a motor with an incorrect frame number results in mismatched shaft heights, leading to severe misalignment, excessive vibration, and premature bearing failure', 7, 'bank', 'answer reused from bank entry Q-0218'),
  ('CT and PT, with cross questions on the CT', 'T04', 'Definition: A current transformer steps down high line current to a standard low secondary (1A or 5A) for metering and protection
Principle: Operates on mutual induction, with the primary being the line conductor (often passing through the core)
Connection: Connected in series (primary carries line current), secondary feeding low-impedance relays/meters
Open-Circuit Danger: The secondary must never be open-circuited while primary current flows - dangerous high voltage results
Accuracy: Metering CTs accurate at normal load; protection CTs accurate at high fault currents
PT Applications: Voltmeters, synchronising equipment, and voltage-sensing for protection (under/overvoltage, AVR sensing)
CT Applications: Ammeters, kW/kVAR meters, and current-sensing for protection (overcurrent, earth fault, differential, reverse power)
Metering: Both provide safe scaled signals to switchboard instruments
Protection: Both feed protection relays with proportional voltage/current signals
Isolation: Both isolate instruments/relays from the high primary voltage/current for safety
Precautions: Do not short-circuit a PT secondary; do not open-circuit a CT secondary
Combined Use: Protection relays often use both PT (voltage) and CT (current) inputs, e.g. reverse-power and directional relays', 8, 'bank', 'answer reused from bank entry SQ-0776'),
  ('Scrubber temperature sensor: how would you troubleshoot it if the reading is incorrect?', 'T06', 'Why It Matters: scrubber temperatures feed the control system, and a high temperature after the scrubber is read as a loss of wash or cooling water. A false high reading can alarm or shut the plant down, and a false low one can hide a real failure. This applies to an exhaust gas scrubber and to the scrubber on an inert gas plant.
First, Prove It Is Wrong: compare it with a second sensor, a local thermometer, or the same point on another stream. Whether the value is frozen, jumping or steadily offset tells you where to look.
Check The Sensor: usually a Pt100. Isolate it and measure the element at its head against the table, about 100 ohms at 0 degrees C and about 138.5 ohms at 100 degrees C. Open circuit means a broken element, a very low reading means a short.
Check The Wiring: this is where scrubbers cause trouble. The area is wet and the wash water is acidic, so look for corroded terminals, water in the sensor head or junction box, and damaged cable glands. Check each core for continuity and for insulation resistance to earth. On a three wire Pt100, unequal lead resistance gives a steady offset.
Check The Pocket: deposits on the thermowell slow the response, so the reading lags behind the real temperature.
Check The Signal Path: inject a known value with a loop calibrator at the transmitter or input card and confirm the monitoring system shows it. That separates a field fault from a card or configuration fault, such as the wrong sensor type or range entered.
Put It Right: clean and reseal, remake the terminals, replace the element if it fails the resistance check, then verify against a reference and record it. Because this reading can shut the plant down, tell the Chief Engineer before working on it and log that the loop was out of service.', 9, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1041'),
  ('MARPOL Annex VI: what it says, with SOx and NOx (many questions asked)', 'T17', 'What Annex VI Covers: prevention of air pollution from ships. Ozone depleting substances (Regulation 12), NOx (13), SOx and particulate matter (14), volatile organic compounds from tankers (15), shipboard incineration (16) and fuel oil quality (18), plus the energy efficiency chapter: EEDI and EEXI for the ship''s design, the SEEMP, and the operational carbon intensity rating, CII.
Certificates: the IAPP certificate for the ship, an EIAPP certificate for each diesel engine over 130 kW with its NOx Technical File, and the IEE certificate for ships of 400 gross tonnage and above.
SOx, Regulation 14: controlled through the sulphur content of the fuel. The global limit has been 0.50 per cent by mass since 1 January 2020, and inside an emission control area it is 0.10 per cent. The SOx ECAs are the Baltic, the North Sea, North America, the US Caribbean and, since 1 May 2025, the Mediterranean. A ship meets the limit with compliant fuel or with an approved scrubber.
NOx, Regulation 13: controlled by engine design, in three tiers set by the ship''s build date and the engine speed. Tier I for ships built from 2000, Tier II from 2011, and Tier III, about 80 per cent below Tier I, which applies inside a NOx ECA. For a slow speed engine under 130 rpm the limits are 17.0, 14.4 and 3.4 g/kWh. Tier III is met with SCR or exhaust gas recirculation.
Why They Matter: SOx forms acid rain and fine particles that damage health. NOx adds to smog and ground level ozone.
Fuel Records: bunker delivery notes kept for three years, and the sealed MARPOL sample kept until the fuel is substantially used and for at least 12 months. The changeover to compliant fuel before entering an ECA is logged with the date, time and position.', 10, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1042'),
  ('Duties of an ETO under MARPOL Annex VI: what are the emissions, and what are your responsibilities to reduce them?', 'T17', 'The Emissions: CO2 from burning fuel, SOx from the sulphur in it, NOx formed at high combustion temperatures, particulate matter and black carbon, ozone depleting refrigerants, and VOCs from cargo on tankers.
Monitoring: keep the exhaust gas analysers on the scrubber and SCR working and calibrated, with the calibration records. The SO2 to CO2 ratio and the NOx readings are the ship''s evidence that it complies.
Scrubber And SCR: the sensors, dosing pumps, valve actuators, heat tracing on the urea lines, alarms and interlocks. A scrubber that fails in service has to be reported to the flag and port State, so keeping it running matters.
Fuel Changeover: the changeover valves and their indication, so the switch to compliant fuel before an ECA happens on time and is logged.
Refrigerants: leak detection and repair on the provision and air conditioning plants. Deliberate release is prohibited, and every top up goes into the ODS record book.
Efficiency, Which Is Where CO2 Comes Down: variable frequency drives on pumps and fans, LED lighting, running generators at an efficient load, and shore power where the port offers it. These support the SEEMP and the ship''s CII rating.
Data: the fuel flow meters and the figures behind the annual fuel oil consumption report under Regulation 27.
Incinerator: its temperature controls and interlocks, so it burns only what Annex VI allows.
At A PSC Inspection: be ready to show the certificates, calibration records, alarm tests and record book entries.', 11, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1043'),
  ('Liferafts, asked as "B1, B2" (SOLAS)', 'T21', 'Reading The Question: nothing in SOLAS is called B1 or B2. The surveyor was most likely asking about the two equipment packs a liferaft can carry, SOLAS A and SOLAS B, so answer that and describe the raft types too.
SOLAS A Pack: the full equipment list, for ships on international voyages. It includes food rations and drinking water, a first aid kit, rocket parachute flares, hand flares and smoke signals, a torch, a signalling mirror, a whistle, sea anchors, paddles, a bailer and sponges, fishing tackle, seasickness tablets and bags, thermal protective aids and survival instructions.
SOLAS B Pack: a reduced list allowed for passenger ships on short international voyages. It keeps the essentials but carries fewer pyrotechnics and leaves out some of the survival stores.
Reading The Container: the pack type is marked on the canister as SOLAS A PACK or SOLAS B PACK, with the capacity, the service date and the HRU expiry.
Types Of Raft: throw overboard rafts, released by hand or floated free through the HRU, and davit launched rafts, boarded at deck level and lowered by a davit with an automatic release hook.
Numbers On A Cargo Ship: enough raft capacity for everyone on board that can be launched on either side. If the rafts cannot be moved easily from side to side, there must be enough on each side for everyone. Every raft takes at least six persons and is serviced at an approved station at intervals not exceeding 12 months.', 12, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1044'),
  ('Difference between a lifeboat and a rescue boat', 'T21', 'Purpose: a lifeboat is a survival craft, built to keep everyone alive after abandoning ship. A rescue boat is built to pick people out of the water and to gather the liferafts together.
Capacity: on a cargo ship the lifeboats carry everyone on board on each side, or a single free fall boat at the stern carries everyone. A rescue boat carries at least five persons seated and one lying on a stretcher.
Construction: cargo ship lifeboats are totally enclosed. A rescue boat can be rigid, inflated, or a combination of the two, and is between 3.8 and 8.5 metres long.
Performance: a lifeboat must make 6 knots fully loaded, with fuel for 24 hours at that speed. A rescue boat must make at least 6 knots for 4 hours, and must be able to tow the largest liferaft on board, fully loaded, at not less than 2 knots.
Launching: a rescue boat must be ready to launch in not more than 5 minutes, and its launching appliance must work with the ship making headway of up to 5 knots in calm water.
One Boat Doing Both: a lifeboat may be accepted as the rescue boat if it also meets the rescue boat requirements, which is common on cargo ships.
The ETO Angle: the boat batteries and their chargers, the searchlight, the davit winch motor and its limit switches, and the emergency lowering arrangement.', 13, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1045'),
  ('HRU (Hydrostatic Release Unit)', 'T21', 'What It Does: frees a liferaft from its cradle automatically if the ship sinks before the raft can be launched by hand.
How It Works: the raft''s lashing is secured through the HRU. When the unit is carried down to a depth of not more than 4 metres, water pressure acts on a diaphragm, a spring loaded knife cuts the rope, and the lashing falls away. The raft container floats up.
The Painter And Weak Link: the raft''s painter is still made fast to the ship through a weak link. As the ship keeps going down, the painter comes tight, pulls the firing head on the gas cylinder and inflates the raft. The buoyancy of the inflated raft then breaks the weak link, rated at 2.2 kN plus or minus 0.4 kN, and the raft floats free.
Why The Weak Link Matters: without it the sinking ship would drag the inflated raft under. A painter made fast directly to the ship, missing the weak link, defeats the whole arrangement.
Service: most HRUs are disposable units with a two year life, marked with an expiry date and replaced rather than serviced. Serviceable types are overhauled at an approved station at intervals not exceeding 12 months.
What Surveyors Check: the expiry date, the painter attached through the weak link, the lashing correctly routed through the HRU, a slip hook so the raft can still be released by hand, and no paint over the unit.', 14, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1046'),
  ('Emergency generator (EDG) requirements', 'T04', 'Safety First: Regulated as a life-safety system - automatic start, guaranteed capacity, protected location and proven reliability are all mandatory
Automatic Start: SOLAS Ch.II-1 requires auto-start and supply of essential services within 45 seconds of main power failure
Location: Above the bulkhead deck, outside main machinery spaces, readily accessible, with dedicated fuel
Capacity/Duration: Must supply all SOLAS-listed emergency services for the required duration (commonly 18h cargo / 36h passenger)
Transitional Source: Batteries supply essential loads for at least 30 minutes during start-up
Starting Independence: Independent starting arrangement not dependent on the main system
Testing: Routine functional and blackout/load testing confirms continued compliance', 15, 'bank', 'answer reused from bank entry SQ-0209'),
  ('Main switchboard short circuit: how it happens', 'T04', 'Safety First: A busbar short circuit produces very high fault current with intense heat and large mechanical forces - a severe hazard requiring fast protection
High Fault Current: The low-impedance fault draws very high current, limited mainly by the source impedance
Mechanical Forces: Electromagnetic forces between busbars can be enormous, requiring robust bracing/insulator support
Thermal Damage: Intense heat can cause fire and equipment damage if not cleared quickly
Protection: Busbar differential protection (HV/large systems) or fast overcurrent isolates the fault quickly
Causes: Loose/failed connections, insulation failure, foreign objects, or moisture/contamination
Prevention: Tight, clean, well-insulated busbar connections and correct bracing minimise the risk', 16, 'bank', 'answer reused from bank entry SQ-0798'),
  ('Emergency lighting on the ship', 'T16', 'Safety First: Emergency lighting supports safe evacuation and continued essential operation during a blackout - its locations are defined by SOLAS
Escape Routes: Corridors, stairways, and exits along all escape routes
Muster/Embarkation Stations: Muster points and lifeboat/liferaft embarkation areas, including overside
Machinery Spaces: Main machinery spaces and around essential equipment/starting positions
Control Stations: The bridge, ECR, and other control stations
Safety Equipment Locations: At fire-fighting equipment, and where essential operations continue
Regulation: Locations and duration defined by SOLAS Ch.II-1; supplied from the emergency source
Duration: Supplied for the SOLAS-required period (commonly 18h cargo / 36h passenger)', 17, 'bank', 'answer reused from bank entry SQ-0948'),
  ('Shore power connection', 'T02', 'Safety First: Shore power must match the ship''s system and be safely interlocked to prevent reversed rotation or unsafe dual-source connection
Regulation: Shore connection arrangements follow SOLAS Ch.II-1 / IEC 60092 (and IEC/ISO/IEEE 80005 for HV shore connection)
Voltage/Frequency Compatibility: Shore supply must match the ship''s voltage and frequency, or an approved converter must be used
Phase Sequence: Must match to ensure correct motor rotation, verified with a phase-rotation meter
Earthing Compatibility: The shore earthing arrangement must be compatible with the ship''s insulated/earthed system
Interlock: Prevents paralleling shore supply with ship''s generators without synchronising
Procedure: Megger the cable, check voltage/frequency/phase sequence/earthing, verify interlock, then energise and confirm', 18, 'bank', 'answer reused from bank entry SQ-0525'),
  ('Phase sequence indicator (phase sequencer)', 'T22', 'What It Tells You: the order in which the three phases reach their peak, R Y B or R B Y. That order sets which way every three phase motor turns, so it has to be right before taking shore power or connecting a new supply.
Rotating Type: a small three phase winding with a free aluminium disc, working like a tiny induction motor. On the correct sequence the disc turns in the direction of the arrow on the case, and it turns the other way when two phases are swapped.
Static Type: a resistor and capacitor network with two lamps or LEDs. The capacitor shifts one phase, so one lamp glows brighter than the other depending on the sequence. Modern instruments show the result on a display.
Where It Is Used On Board: the shore connection box, which must have a means of checking phase sequence, and test instruments used when reconnecting motors and generators after work.
Putting It Right: if the sequence is wrong, isolate the supply and swap any two of the three incoming phases, then check again before connecting.', 19, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1047'),
  ('Alternative method if the phase sequence indicator is not working', 'T22', 'Lamp and Capacitor Method: A simple phase-sequence tester can be made with two lamps and a capacitor connected to the three phases; the brighter lamp indicates the sequence
Rotating Machine Check: Momentarily running a known three-phase motor and observing its rotation direction confirms the sequence (matches known correct rotation)
Induction Motor Test Method: A small induction motor/disc device rotates in a direction dependent on phase sequence
Procedure: 1) Use an alternative tester (lamp-capacitor or motor)  2) Compare against the known correct sequence  3) Confirm before connecting/paralleling
Cross-Reference: Compare against a circuit known to have correct sequence
Safety First: Any live testing must use correctly rated equipment and observe electrical safety
Importance: Correct phase sequence is essential before paralleling or connecting shore supply to avoid reversed rotation/faults', 20, 'bank', 'answer reused from bank entry SQ-0993'),
  ('Auto transformer', 'T05', 'Construction: a single winding on a laminated core, with a tapping. Part of the winding is common to both primary and secondary, so the two sides are connected electrically as well as magnetically.
Why Use One: the common part of the winding carries only the difference between the primary and secondary currents. It therefore needs less copper and is smaller, lighter and cheaper than a two winding transformer of the same rating, with lower losses. The saving is greatest when the ratio is close to one.
The Drawback: there is no isolation between primary and secondary. If the common part of the winding opens, the full primary voltage appears on the secondary side, and an earth fault on one side reaches the other. That is why it is never used to step a supply down to a safe low voltage.
Uses On Board: auto transformer starters for large motors such as fire pumps, ballast pumps and bow thrusters, with taps of about 50, 65 and 80 per cent, to reduce starting current while keeping more torque than star delta gives. Also small voltage adjustments and, as a variac, a variable test supply.
Follow Up: line current and starting torque both fall with the square of the tapping. On a 65 per cent tap they are both about 42 per cent of their direct on line values.', 21, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1048'),
  ('Alternator routine maintenance', 'T01', 'Insulation Resistance Testing: Megger test stator windings phase-to-earth and phase-to-phase, tracking IR and Polarization Index trends over time
Air Gap Measurement: Check air gap at multiple points using feeler gauges to detect bearing wear or rotor eccentricity
Brush/Slip Ring Inspection: Check carbon brush wear and slip ring surface condition for pitting on brushed excitation designs
Cleaning and Visual Inspection: Clean windings of dust/oil contamination and check for overheating discolouration or loose connections
Bearing Monitoring: Check bearing temperature, vibration, and lubrication condition, verifying alignment during major overhauls', 22, 'bank', 'answer reused from bank entry SQ-0362'),
  ('Crane safety', 'T09', 'Safety First: Overhead lifting is high-risk - overload, over-travel and load-drop are the primary hazards, guarded by cutouts, limits and a fail-safe brake
Overload Protection: A load-limiting cutout prevents lifting beyond the safe working load (SWL)
Limit Switches: Upper/lower hoist limits prevent hook over-travel and block/rope damage
Fail-Safe Brake: A spring-applied, electromagnetically released brake engages automatically on power loss, preventing load drop
Emergency Stop: A readily accessible e-stop immediately isolates crane power
Electrical Protection: Overcurrent and phase-failure protection guard the hoist/travel motors
Regulation and Testing: Periodic load testing, wire-rope inspection and brake testing per statutory lifting equipment and class requirements', 23, 'bank', 'answer reused from bank entry SQ-0117'),
  ('Auto tensioning on the mooring winch', 'T09', 'Function: An auto-tensioning mooring winch automatically maintains a set line tension by paying out or hauling in as the vessel moves
Operation: If tension rises above the set point (vessel moving away), the winch pays out; if tension falls (vessel moving closer), it hauls in
Tension Sensing: The system senses line tension (via motor current/load) and controls the winch accordingly
Purpose: Keeps the vessel safely moored despite tide, wind, and draft changes without constant manual adjustment
Safety First: Auto-tension keeps lines within safe tension, but crew must monitor, as failures or extreme conditions still need intervention
Render Function: The winch renders (slips) at a set tension to prevent line breakage
Application: Used for automatic mooring line management alongside', 24, 'bank', 'answer reused from bank entry SQ-0988'),
  ('Hypermist (high pressure water mist): working', 'T15', 'What It Is: a fixed local application system that fights a fire in one part of a machinery space with very fine water mist, without flooding the whole space. HI-FOG is a common make, and hypermist is the name many ships use for it.
Why It Is Fitted: SOLAS Chapter II-2 Regulation 10.5.6 requires a fixed local application system in machinery spaces of category A above 500 cubic metres, on cargo ships of 2,000 gross tonnage and above and passenger ships of 500 and above. It covers the fire hazard areas: the fire side of the main and generator engines, boiler fronts, the incinerator and the heated fuel oil purifiers.
How It Puts A Fire Out: water leaves special nozzles at high pressure as droplets a fraction of a millimetre across. Their very large surface area absorbs heat fast and cools the fire, the water flashes to steam and pushes oxygen away from the flame, and the mist blocks radiant heat so nearby surfaces do not reignite. It uses far less water than a sprinkler.
The Plant: a fresh water supply, a high pressure pump unit, a section valve for each protected area, the nozzles, and a control panel.
How It Is Released: by hand from outside the protected area, and in a periodically unattended machinery space automatically as well, from detectors in the protected area. Detection usually combines flame detectors with smoke or heat detectors so that one false signal does not release it. Release gives an alarm in the space and at the manned control station showing which section has operated.
The ETO Angle: detector testing, the control panel, the section valve solenoids and their indication, the pump motor starter, and testing the release without discharging water.', 25, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1049'),
  ('Rest hour criteria and regulations', 'T16', 'The Rules: STCW Regulation VIII/1 and Section A-VIII/1 for watchkeepers and those with safety and pollution prevention duties, and MLC 2006 Regulation 2.3 for all seafarers.
The Numbers: at least 10 hours of rest in any 24 hour period, and at least 77 hours in any 7 day period. The rest may be split into no more than two periods, one of them at least 6 hours long, and the interval between consecutive periods of rest must not exceed 14 hours.
Hours Of Work Instead: MLC lets a flag set maximum hours of work instead, not more than 14 hours in any 24 hours and 72 hours in any 7 days.
Drills And Call Outs: musters and drills are held so they disturb rest as little as possible. A seafarer called out during rest, such as an ETO on call for an alarm in an unattended machinery space, gets adequate compensatory rest.
Exceptions: under STCW the flag may allow the weekly rest to fall to not less than 70 hours, for no more than two consecutive weeks. The master may also suspend the schedule for the immediate safety of the ship, people or cargo, or to help another ship, and must give compensatory rest afterwards.
Records: a table of shipboard working arrangements posted where it can easily be seen, and daily records of rest in the approved format, signed by the master or a person he authorises and by the seafarer, who gets a copy. PSC checks these, and false records can lead to detention.', 26, 'claude-opus-5', 'written for this sitting, in the bank as SQ-1050')
 ) as v(question_text, topic, answer_text, sort_order, ai_model, ai_flags)
 where s.title = 'September 2026'
   and not exists (
     select 1 from public.exam_questions e
      where e.sitting_id = s.id and e.asked_on = date '2026-09-16'
        and e.question_text = v.question_text);

commit;

-- ── verify ────────────────────────────────────────────────────────────────
--   select title, starts_on, ends_on, is_published from public.exam_sittings order by starts_on;
--   select count(*), count(*) filter (where coalesce(answer_text,'')<>'') answered,
--          count(*) filter (where is_published) published
--     from public.exam_questions q join public.exam_sittings s on s.id = q.sitting_id
--    where s.title = 'September 2026';          -- expect 26 / 26 / 26
--   select title, is_running, question_count, answered_count from public.v_current_exam_sitting;
--                                               -- expect September 2026, true, 26, 26
--
-- ── undo ──────────────────────────────────────────────────────────────────
--   delete from public.exam_sittings where title = 'September 2026';   -- cascades to its questions
--   (August 2026 then becomes the current sitting again, unchanged.)

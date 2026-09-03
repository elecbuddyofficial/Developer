-- The 31 August 2026 sitting, folded into the running August sitting.
--
-- WHY NOT A NEW SITTING. v_current_exam_sitting returns only the newest
-- sitting, so creating one for 31 Aug would hide the 132 answered questions
-- from 20 to 28 Aug behind 23 new ones. That exact mistake was made on
-- 29 Aug 2026 and had to be undone the same day; see CHANGE_LEDGER.md.
-- Extending ends_on keeps one sitting running from 20 to 31 August.
--
-- Two surveyors, both new to this sitting: Anil Deshwal and V. Iyer.
-- Note the spelling. The Surveyor Q&A bank has carried "Anil Deswal" for
-- 127 questions, and this recollection writes "Deshwal". They are taken to be
-- the same person. The bank keeps its existing spelling so a 58th near
-- duplicate surveyor is not created; the feed shows what the candidate wrote.
--
-- ALL 23 ARE ANSWERED AND PUBLISHED. lxCard() renders a question with no
-- answer as an empty body, so an unanswered row must never be published.
-- Thirteen carry answers written for this batch and now in the bank as
-- SQ-1026 to SQ-1038. The other ten were already in the bank, and their
-- answer here is that bank answer, mapped by hand to a named bank question
-- rather than by any matching score.
--
-- SAFE TO RUN MORE THAN ONCE: the insert skips any question text already
-- recorded against this sitting for this date.

begin;

update public.exam_sittings
   set ends_on = date '2026-08-31'
 where id = '10ae3a89-f008-4a79-918e-c975f7c9986b'
   and ends_on < date '2026-08-31';

insert into public.exam_questions
  (sitting_id, asked_on, surveyor, topic, question_text, answer_text, is_published, sort_order)
select v.* from (values
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'Anil Deshwal', 'T20', 'Lightning arrestor', 'What It Is For: a mast is the highest point on the ship and is bonded steel, so it is the natural strike point. The arrester gives the strike a low resistance path straight to the sea through the hull, so the energy never travels through radio aerials, the masthead lights or the wiring in the mast.
Construction: a spike or rod at the masthead, standing clear above everything else on the mast, connected by a continuous copper conductor of substantial cross section down to the hull. On a steel ship the hull is the earth, so the conductor is bonded to the structure. On a wooden or GRP vessel it has to run to a copper plate that stays immersed at all angles of heel.
Why Cross Section Matters: a strike is a very large current for a very short time. Too thin a conductor and it will vaporise, so the joint or the run becomes the resistance and the energy finds another way through the ship.
Maintenance And Survey Points: continuity from spike to hull measured and recorded, joints clean, tight and protected from corrosion, no paint trapped under a bonding clamp, and the run kept clear of aerials and cabling. A rising resistance between surveys means a corroding joint, which is the fault to look for.
Common Follow Up: why bond the mast at all on a steel ship. Because the aerials, the lights and their cables are not the hull, and without bonding they become the path.', true, 147)   -- None,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'Anil Deshwal', 'T17', 'MARPOL Annex IV & V', 'Reading The Question: two annexes in one breath, so name each and then give the numbers. The examiner is checking whether you know the distances or only the titles.
Annex IV, Sewage: discharge is prohibited unless one of three conditions is met. With an approved sewage treatment plant certified to MEPC.227(64), discharge is permitted at any distance provided the effluent produces no visible floating solids and no discolouration. Comminuted and disinfected sewage through an approved system may go beyond 3 nautical miles from the nearest land. Sewage that is neither comminuted nor disinfected may go beyond 12 nautical miles, with the ship en route at not less than 4 knots, discharged at a moderate rate approved by the Administration under MEPC.157(55) rather than dumped in one go.
Annex V, Garbage: all plastics are prohibited absolutely, at any distance, including synthetic ropes and nets and incinerator ash from plastic products. Food waste comminuted to pass a screen of 25 mm may go beyond 3 nautical miles, food waste not comminuted beyond 12. Cargo residues and cleaning agents carry their own conditions. Special areas are stricter: generally only comminuted food waste, beyond 12 miles and en route. The Red Sea became a special area on 1 January 2025.
The Records: a Sewage Record Book where required, the Garbage Record Book and the Garbage Management Plan, and the placards. The ETO angle is that the treatment plant, the comminutor and the incinerator all carry alarms and interlocks that have to work and be provable.', true, 148)   -- None,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'Anil Deshwal', 'T14', 'VDR (Voyage Data Recorder)', 'What It Is: the ship''s equivalent of an aircraft black box, required by SOLAS Chapter V Regulation 20. It records a defined set of data continuously so an investigation can reconstruct what happened before an incident.
What It Records: date and time, position, speed and heading, bridge audio through the microphones, VHF communications, radar and ECDIS image, echo sounder, main alarms, rudder and engine order and response, hull opening and watertight door status, wind, and on later units AIS data.
Retention, The Number Examiners Ask For: to MSC.333(90), which applies to VDRs installed on or after 1 July 2014, at least 48 hours on the fixed protective capsule and on the float free capsule, and at least 30 days, meaning 720 hours, on the long term internal recording medium.
Parts Of The System: the data acquisition unit, the main electronics unit, the fixed capsule mounted externally so it survives fire and immersion, the float free capsule on later installations, the bridge microphones, and the remote save button.
The ETO''s Responsibility: the annual performance test by an approved service supplier with the certificate kept aboard, checking the backup battery so recording continues through a blackout, keeping the microphones clean and proving they pick up, and knowing how to press save so the data is preserved and not overwritten after an incident. That save function is the whole reason the data survives.', true, 149)   -- None,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'Anil Deshwal', 'T17', 'SCR Scrubber', 'Careful, These Are Two Different Machines: SCR treats NOx, a scrubber treats SOx. Candidates lose this question by merging them, and SCR in an electrical context also means silicon controlled rectifier, which is a third thing entirely. Say which one you mean before you start.
SCR, Selective Catalytic Reduction: fitted to meet the NOx Tier III limit inside an Emission Control Area under MARPOL Annex VI Regulation 13. Urea solution is injected into the exhaust upstream of a catalyst block. The urea decomposes to ammonia, and over the catalyst the ammonia reacts with the NOx to give nitrogen and water. The reaction needs the exhaust hot enough to run, so on a two stroke the reactor often sits before the turbocharger where the gas is hottest. Electrically it brings a urea dosing pump and its heating and tracing, a control cabinet, NOx and temperature sensors, and interlocks.
Scrubber, Exhaust Gas Cleaning System: fitted as an equivalent arrangement under Annex VI Regulation 4, so the ship may burn high sulphur fuel and still meet the 0.50 per cent global limit or the 0.10 per cent ECA limit. Exhaust is washed with water and the SO2 is absorbed. Open loop uses seawater and its natural alkalinity, closed loop uses fresh water dosed with caustic soda and recirculated, hybrid does both.
How Compliance Is Proved: the SO2 to CO2 ratio in the exhaust, monitored continuously. A ratio of 4.3 corresponds to 0.10 per cent sulphur fuel and 21.7 to 0.50 per cent. Wash water is monitored for pH, PAH and turbidity to the 2021 Guidelines, MEPC.340(77), which replaced MEPC.259(68) and apply to installations from 1 June 2022.', true, 150)   -- None,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'Anil Deshwal', 'T01', 'Draw graphical representation of alternator for V, I, Power', 'Reading The Question: he wants the load characteristic, how terminal voltage behaves as load current rises, with real power on the same picture. Draw and label the axes before you start talking.
The Open Circuit Curve: excitation current on the x axis, generated EMF on the y axis. It rises almost as a straight line and then bends over as the iron saturates. Use the word saturation, because that bend is the whole point of the curve.
The Load Characteristic: load current on the x axis, terminal voltage on the y. With the AVR switched out, terminal voltage droops as load current rises, and the shape depends on power factor. At unity it falls gently. At lagging power factor it falls steeply, because armature reaction is demagnetising. At leading power factor it can rise, because armature reaction is magnetising. Drawing that family of three curves is what earns the marks.
Why It Droops: three causes together. Armature resistance drop, armature leakage reactance drop, and armature reaction. The first two are small. Armature reaction is the one that matters.
With The AVR In: draw a nearly flat line across the top and explain that the AVR restores excitation as load comes on, holding terminal voltage within the SOLAS steady state requirement of plus or minus 2.5 per cent.
Power On The Same Picture: P equals root three times V times I times cos phi. At constant voltage and power factor, power against current is a straight line through the origin. Load sharing then follows from the droop line, typically 3 to 5 per cent, which is what lets two sets share kW stably in parallel.', true, 151)   -- None,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'V. Iyer', 'T15', 'How sprinkler is engaged', 'The System At Rest: the pipework above the heads is charged with fresh water and held under pressure by a pressure tank, roughly two thirds water and one third air, pressurised so the pressure at the highest head is still enough to work it. The heads themselves are closed by a quartz bulb or a fusible link.
How It Engages: fire heats a head and the bulb bursts, around 68 degrees C in accommodation spaces and higher in warm spaces such as galleys and drying rooms. That head alone opens, so only the area over the fire is wetted. Water flows, system pressure falls, and the falling pressure does two jobs: it operates the pressure switch that automatically starts the dedicated sprinkler pump and sounds the alarm, and it identifies which section has gone.
Why The Tank Exists: it puts water on the fire instantly and keeps the line pressurised so that a fall in pressure is a reliable signal. Without it there is nothing to detect and no water until the pump has run up.
The Pump: a dedicated automatic pump drawing from the sea, so the supply is unlimited once it runs. It has to start on the pressure switch with nobody in the machinery space, and it cannot be the general service pump.
Alarms And Indication: each section has its own alarm valve and flow switch, and the panel on the bridge and in the machinery space shows which section operated, so the party goes to the right place.
The ETO''s Part: the pump starter and its automatic start, the pressure switch setting, the section alarms and their indication, the emergency supply to pump and panel, and the weekly test, which is opening the test valve on a section to drop pressure and confirming the pump starts.', true, 152)   -- None,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'V. Iyer', 'T09', 'Modes of main air compressor', 'The Two Modes: automatic and manual, selected at the starter or the control panel.
Automatic: the normal seagoing setting. A pressure switch on the air bottle starts the compressor when bottle pressure falls to the cut in setting and stops it at the cut out, typically around 25 and 30 bar on a 30 bar system. The machine runs unloaded for a few seconds on starting and unloads again before it stops, so it never starts or stops against full discharge pressure.
Manual: used for testing, after maintenance, and for topping up under supervision. The operator starts and stops it and the safety protections stay live. It is not a way of running past a fault.
Loaded And Unloaded: add this yourself, because it is the usual follow up. Unloading holds the suction valve open, or operates a solenoid unloader, so the machine turns without compressing. It gives the motor an easy start and stops the compressor short cycling.
Protections That Stay Live In Both Modes: low lubricating oil pressure, high air discharge temperature, high cooling water temperature, motor overload, and the relief valve on each stage. The bursting disc or fusible plug on the intercooler is the one candidates forget.
The Regulatory Point: the air receivers must hold enough air for the required number of main engine starts without replenishment, twelve for a reversible engine and six for a non reversible one, and there must be at least two compressors with one of them independent of the main engine.', true, 153)   -- None,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'V. Iyer', 'T09', 'Leading and lagging compressor function', 'What The Terms Mean: with two identical air compressors, the control selects one as lead and the other as lag. The lead is the machine that starts first on falling bottle pressure. The lag is reserve capacity that only starts if the lead cannot hold the pressure up.
How It Works: two pressure settings rather than one. The lead cuts in at, say, 25 bar and cuts out at 30. The lag cuts in lower, perhaps 23 bar, and cuts out at 30 as well. In normal service the lead alone meets the demand and the lag never runs. During a heavy start sequence, with an air leak, or with the lead running inefficiently, pressure keeps falling past the lag setting and the second machine joins in.
Why It Is Arranged This Way: it gives automatic standby with nobody selecting anything, and a failure of the lead is covered, because pressure simply falls to the lag setting and the other machine starts. It also stops both machines short cycling together on every small demand.
Changeover: lead and lag are swapped on a routine, weekly or at a duty change, so running hours are shared and neither machine sits idle long enough to seize or lose its oil film. That rotation is a selector switch, and on newer ships it is automatic in the PLC.
The ETO Angle: the pressure switches and their differentials, the selector logic, and actually proving the lag starts. Testing only the lead leaves a standby that nobody has ever seen run, which is exactly the one that fails when it is wanted.', true, 154)   -- None,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'V. Iyer', 'T08', 'How to check faulty PCB board', 'First, The Approach: say that you do not repair boards to component level at sea and you do not start by changing parts. You confirm the board is genuinely at fault, because most calls of a faulty card turn out to be supply, signal or connection.
Before Touching It: isolate and prove dead where you can, observe antistatic precautions, use a wrist strap, and handle the board by its edges. Note the exact symptom and any alarm code first, and have the manual and the card layout with you.
Look And Smell: a great many faults are found here. Burnt or discoloured components, a cracked or lifted track, dry or cracked solder joints particularly around heavy components and connectors, bulged or leaking electrolytic capacitors, corrosion and salt tracking, water ingress, dirty or loose edge connectors, and blown fuses on the card itself.
Measurements: confirm the incoming supply to the card is present and within tolerance, then check the on board rails, typically 24 V, 15 V and 5 V, at their test points. A missing rail with a healthy input points at the regulator on the card. Check that input signals are arriving and output signals leaving, so you can say whether the card is being fed properly and whether it is responding.
Substitution: the real shipboard test. Swap with a known good identical card, or exchange the suspect card with the identical one in a duplicated channel and see whether the fault follows the card. If it follows, the card is faulty. If it stays put, the fault is external.
Afterwards: record it, order the spare, and label the faulty card rather than returning it to the spares drawer. Never bridge or file a track to keep a machine running.', true, 155)   -- None,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'V. Iyer', 'T03', 'Turning gear interlock', 'What It Is: a safety interlock that makes it impossible to start the main engine while the turning gear is engaged. Engaging the turning gear meshes a pinion with the flywheel, and starting the engine against it would wreck the gear and could kill somebody working on the engine.
How It Works: a limit switch on the turning gear senses the engaged position. When the gear is in, that switch does two things. It cuts the starting air, normally by de-energising a solenoid on the starting air shut off valve or the main starting valve so air cannot reach the cylinders, and it sends an engaged signal to the engine control system, so the telegraph and the remote start are inhibited and an indication appears in the engine control room and on the bridge.
It Works Both Ways: the arrangement also normally prevents the turning gear motor being started while the engine is running or while starting air is available, so the pinion cannot be engaged against a turning engine.
Where The ETO Comes In: proving the limit switch actually operates rather than assuming it does, checking the solenoid and its wiring, and confirming the indication appears at every station. The test belongs in the pre-departure checks and before any main engine movement after work on the engine.
The Trap: candidates say the interlock stops the engine starting and leave it there. Say how it stops it. Name the limit switch and the starting air shut off, and say that it blocks the remote and bridge control too, not only the local start.', true, 156)   -- None,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'V. Iyer', 'T08', 'What is flyback in a controller', 'The Root Of It: flyback is what happens when current in an inductive load is interrupted. The inductor opposes the change, and since V equals L di by dt, a very fast collapse of current produces a very large reverse voltage spike. Across a relay or solenoid coil that spike can reach several hundred volts from a 24 V supply.
Why It Matters In A Controller: the output transistor of a PLC card or a controller driving a relay coil, a solenoid valve or a contactor sees that spike across it. It punches through the transistor and destroys the output, and the spike also radiates and puts spurious signals on neighbouring inputs. It is a common reason for a PLC output card failing again and again in the same position.
The Cure, The Flyback Diode: a diode across the coil, reverse biased in normal operation so it does nothing at all. When the switch opens, the diode becomes forward biased and gives the collapsing field a path to circulate and decay, clamping the spike to about one diode drop above the supply. It is also called a freewheeling or suppression diode. A diode cannot be used on an AC coil, where an RC snubber or a varistor does the same job.
The Other Sense Of The Word: in a switch mode power supply, the flyback converter is a topology that deliberately stores energy in the transformer during the on period and releases it to the output during the off period. Many small controller and instrument supplies aboard are flyback converters. If the examiner has a power supply card in his hand this is the sense he means, so ask which he wants rather than guessing.
Fitting It: polarity is everything. A flyback diode fitted the wrong way round is a dead short across the supply the instant the coil is energised.', true, 157)   -- None,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'V. Iyer', 'T17', 'How to test 15 ppm sensors', 'Say This First: the 15 ppm bilge alarm is not calibrated on board. Under MEPC.107(49) the accuracy check is done only by the manufacturer or a person authorised by them, at intervals not exceeding five years, and the calibration certificate is kept aboard for inspection. What you do on board is test it and prove it, following the maker''s instructions.
The Zero Check: run clean fresh water through the measuring cell and confirm the instrument reads zero or close to it. A reading that will not come down on clean water is usually a dirty or fouled cell, an aged lamp, or condensation on the optics, not real oil content.
The Alarm Test: use the unit''s built in test facility, which either inserts an optical filter into the light path or injects a simulated signal, to drive the reading above 15 ppm. Confirm three things happen. The alarm annunciates locally and wherever it is repeated, the three way overboard valve moves to recirculate back to the bilge holding tank, and the event is logged where the unit has a recorder.
Prove The Valve, Not Only The Lamp: this is what the surveyor is really testing. An alarm that sounds while the overboard valve stays open is a pollution incident waiting to happen, so watch the valve move and confirm its position feedback.
Cleaning And Routine: clean the measuring cell and the optics to the maker''s interval, check the sample pump is drawing and the sample line is clear, and check lamp hours where the unit logs them.
Records And Seals: the automatic stopping device and the sampling arrangement are sealed. Broken seals, or a fitted bypass, are treated as evidence of intent and are how Oil Record Book prosecutions begin. Log every test.', true, 158)   -- None,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'V. Iyer', 'T17', 'Bilge water discharge criteria', 'The Governing Rule: MARPOL Annex I Regulation 15, machinery space bilges, for a ship of 400 gross tonnage and above.
Outside A Special Area, All Of These Together: the ship is proceeding en route, the oily mixture is processed through oil filtering equipment meeting Regulation 14.7, the oil content of the effluent without dilution does not exceed 15 parts per million, and the mixture does not originate from cargo pump room bilges and is not mixed with cargo oil residues.
Inside A Special Area: the same conditions, and the equipment must additionally have the 15 ppm alarm and the automatic stopping device that stops the discharge when 15 ppm is exceeded.
The Two Phrases That Carry Marks: en route, meaning the ship is under way on passage and not stopped or manoeuvring in port, and without dilution, meaning you may not reach 15 ppm by adding clean water. Diluting to pass is the classic offence and the one the surveyor is listening for.
What Must Be Fitted: the oil filtering equipment, the 15 ppm bilge alarm, and the automatic three way valve that returns the effluent to the bilge holding tank on alarm. The alarm and the valve are sealed.
The Records: every transfer, discharge and disposal ashore is entered in the Oil Record Book Part I, signed by the officer in charge and by the master on each completed page. It is the first thing Port State Control asks for, and an entry that does not agree with tank soundings or equipment running hours is what starts an investigation.
The ETO''s Part: proving the alarm and the automatic stop as above, and never being talked into bypassing either.', true, 159)   -- None,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'Anil Deshwal', 'T23', 'Bulk carrier', 'Hull Design & Form: Bulk carriers are constructed with double-hull designs to protect cargo and fuel tanks from groundings, typically featuring a "full form" hull with a high Block Coefficient (Cb) between.8 and.9 to maximize capacity
Water Ingress Detection: Per SOLAS Chapter XII, bulk carriers must be fitted with a Water Ingress Detection and Alarm System (WIDAS) using float or electrochemical sensors to provide early warning of flooding in cargo holds, forepeak tanks, and double bottoms
Cargo Hold Monitoring: Electrical safety systems in the holds often include RTD or thermocouple sensors to continuously monitor for the spontaneous heating of dangerous bulk cargoes, such as coal
Grain Carriage Stability: When carrying bulk grain, the vessel must comply with the International Grain Code (SOLAS Chapter VI) to prevent cargo shifting, which requires a minimum initial metacentric height (GM) of.3 meters before sailing
Power Factor Management: Because bulk carriers often run significant inductive motor loads, they may utilize systems like a synchronous condenser to supply continuous, adjustable leading KVAR and improve the overall electrical power factor', true, 160)   -- Q-0048,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'Anil Deshwal', 'T21', 'Magnetron', 'Function: A magnetron is a high-power microwave oscillator tube that generates the radio-frequency pulses used by radar transmitters
Construction: Consists of a cylindrical cathode surrounded by an anode with resonant cavities, all placed within a strong permanent magnetic field
Operating Principle: Electrons emitted from the heated cathode are forced into curved paths by the magnetic field, inducing microwave oscillations in the anode cavities as they pass
Output: Produces short, high-power microwave pulses fed via a waveguide to the antenna for transmission
Maintenance Note: Magnetrons have a finite service life and gradually lose output power with age, requiring periodic performance checks and eventual replacement', true, 161)   -- SQ-0074,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'Anil Deshwal', 'T16', 'Non conformity', 'Definition: A major non conformity is an identifiable deviation that poses a serious threat to personnel or ship safety or to the environment, or a serious and systematic failure to implement a requirement of the ISM Code.
Source: The definition is in the ISM Code, and the reporting is handled through the company''s Safety Management System.
Examples: Fire pump not operational, lifeboat engine or launching arrangement not working, no valid certificate onboard, ISM procedures not implemented at all in a critical area, or repeated failure to close out earlier non conformities.
Consequence: A major NC must be downgraded before the ship sails, either by correcting it or by an agreed corrective action plan, otherwise the Safety Management Certificate or Document of Compliance can be withdrawn or suspended.
Handling: Raise it in the SMS, carry out root cause analysis, set corrective and preventive action with responsibility and target date, verify effectiveness at the next internal audit.
Versus Minor: A minor non conformity is an observed situation where objective evidence shows a requirement is not met but there is no serious threat, it is closed within an agreed period rather than before sailing.', true, 162)   -- SQ-1018,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'Anil Deshwal', 'T04', 'How is busbar fitted in MSB', 'Function: A busbar is a rigid conductor (typically copper or aluminium bar) used to distribute electrical power within a switchboard from incoming sources to multiple outgoing feeders
Construction: Made of high-conductivity, low-resistance material, often silver-plated at joints to reduce contact resistance and prevent oxidation-related heating
Current Carrying Capacity: Sized based on the maximum current it must carry, with adequate clearance and support insulators to withstand both normal operation and fault current mechanical/thermal stresses
Connection Arrangement: Circuit breakers, generators, and outgoing feeders connect to the busbar, which acts as the common electrical node distributing power throughout the switchboard
Maintenance Considerations: Regular checks for tightness of joints, signs of overheating (discolouration), and cleanliness are important, as loose or corroded busbar connections are a common cause of switchboard fires', true, 163)   -- SQ-0254,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'Anil Deshwal', 'T03', 'Motor used for turning gear of M/E', 'Common Type: A squirrel cage induction motor is typically used to drive the turning gear (jacking gear) that slowly rotates the main engine crankshaft for maintenance
Speed Reduction: Driven through a high-ratio gearbox/worm drive to achieve the very slow rotational speed required for safely turning the large engine crankshaft
High Torque, Low Speed Design: Selected for high starting/running torque at low speed rather than high-speed operation, matching the heavy load of rotating the engine
Interlock with Main Engine: Electrically and/or mechanically interlocked with the main engine starting system to prevent the main engine from being started while turning gear is still engaged
Safety Feature: Engagement/disengagement is typically monitored with a limit switch feeding an alarm/interlock, preventing damage from starting the engine with turning gear engaged', true, 164)   -- SQ-0102,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'Anil Deshwal', 'T23', 'SOLAS requirement for steering gear motor power supply', 'Capacity & Power Units: Under SOLAS Chapter II-1, vessels over,000 GT must have at least two independent power units capable of moving the rudder from 35° on one side to 30° on the other within 28 seconds at maximum ahead service speed
Main Supply Arrangement: The electrical supply to each steering gear power unit must come from entirely separate sections of the main switchboard and, where practicable, be supplied from different generators to ensure redundancy
Emergency Power Supply: At least one steering gear power unit must be connected to the Emergency Switchboard (ESB)
. It must also be supported by the ship''s transitional source battery (for up to 30 seconds) to maintain steering control while the emergency generator starts
Overload Protection (Alarm Only): By strictly enforced SOLAS rules, steering gear motors are fitted with an overload alarm only, not a trip; it is considered safer to risk burning out the motor than to lose steering control during a critical maneuver
Phase Failure Protection: A phase failure relay is absolutely mandatory to immediately detect the loss of any phase (single-phasing) or a reversed phase sequence, which protects the motor from drawing.7x rated current and prevents the rudder from turning the wrong way', true, 165)   -- Q-0060,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'V. Iyer', 'T03', 'Electromagnetic fail brake', 'Definition: An electromagnetic brake uses an electromagnet to control a friction brake, commonly in a fail-safe (spring-applied) configuration
Spring-Applied Type: Springs apply the brake; energising the coil releases it. On power loss the spring re-applies the brake (fail-safe)
Operation: When the motor is energised, the coil is energised and the brake is released; when power is removed, the brake engages
Fail-Safe Feature: The brake automatically holds the load on any power loss, preventing uncontrolled movement
Application: Cranes, winches, hoists, and lifts requiring reliable holding and fail-safe operation
Control: Braking can be applied on stopping and held whenever the drive is de-energised
Safety First: The fail-safe characteristic is a key safety feature for lifting equipment', true, 166)   -- SQ-0923,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'V. Iyer', 'T06', 'How to change hydrophore tank pressure switch and how to set cut-in and cut-out pressure', 'Cut-In Setting: The falling pressure at which the switch closes to start the hydrophore pump
Cut-Out Setting: The rising pressure at which the switch opens to stop the pump
Differential (Deadband): The gap between cut-in and cut-out, set wide enough to avoid rapid short-cycling
Procedure (step by step): 1) Set the cut-out (range) pressure  2) Set the differential to give the desired cut-in  3) Apply a calibrated reference pressure  4) Confirm start/stop occur at the correct values
Calibration: Verified against a calibrated test gauge
Too Narrow Differential: Causes short-cycling and motor overheating
Too Wide Differential: Causes large pressure swings in the system', true, 167)   -- SQ-0725,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'V. Iyer', 'T01', 'Alternator produces 270V instead of 440V - what action will you take', 'Voltmeter Calibration: First, verify if the switchboard voltmeter is actually accurate and functioning correctly
AVR Voltage Trimmer: Try adjusting the AVR voltage trimmer setting to see if the output voltage can be corrected back to 440V
AVR Input (Sensing Circuit): Check if the Potential Transformer (PT) is supplying the correct sensing voltage to the AVR
AVR Output: Use a voltmeter to measure the AVR''s output and confirm it is supplying the correct DC excitation to the exciter field
Exciter Field Resistance: Check the exciter field winding for a partial open circuit or abnormal resistance values
Terminal Connections: Inspect all wiring and terminals on the AVR for any loose connections that could be causing a voltage drop', true, 168)   -- Q-0058,
  ('10ae3a89-f008-4a79-918e-c975f7c9986b'::uuid, date '2026-08-31', 'Anil Deshwal', 'T06', 'How to check boiler high level alarm with DPS', 'DP Transmitter Function: Measures boiler drum level by comparing the pressure of a constant-head reference leg against the variable pressure from the drum water level
Working Principle: A diaphragm deflects proportionally to the differential pressure, converting it to a standard electrical output (commonly 4-20mA)
Density Compensation: Accurate measurement requires compensation for steam/water density variation with pressure/temperature, which the transmitter accounts for
Level Alarm Testing: The low/high level alarm and trip functions are tested by simulating level signals or by controlled variation of actual level, confirming correct alarm and burner trip response
Calibration: Zero and span are calibrated against known reference differential pressures to ensure accurate level indication and correct alarm/trip operation', true, 169)   -- SQ-0502
) as v(sitting_id, asked_on, surveyor, topic, question_text, answer_text,
              is_published, sort_order)
where not exists (
  select 1 from public.exam_questions e
   where e.sitting_id = v.sitting_id
     and e.asked_on   = v.asked_on
     and e.question_text = v.question_text
);

commit;

-- ── verify ────────────────────────────────────────────────────────────────
--   select starts_on, ends_on from public.exam_sittings
--    where id = '10ae3a89-f008-4a79-918e-c975f7c9986b';
--     -- expect 2026-08-20 .. 2026-08-31
--
--   select asked_on, count(*) as questions, count(answer_text) as answered,
--          count(*) filter (where is_published) as published
--     from public.exam_questions
--    where sitting_id = '10ae3a89-f008-4a79-918e-c975f7c9986b'
--    group by asked_on order by asked_on;
--     -- expect a 2026-08-31 row reading 23 / 23 / 23
--
--   select * from public.v_current_exam_sitting;
--     -- must still resolve to this sitting, now 155 answered
--
-- ── undo ──────────────────────────────────────────────────────────────────
--   delete from public.exam_questions
--    where sitting_id = '10ae3a89-f008-4a79-918e-c975f7c9986b' and asked_on = date '2026-08-31';
--   update public.exam_sittings set ends_on = date '2026-08-28'
--    where id = '10ae3a89-f008-4a79-918e-c975f7c9986b';

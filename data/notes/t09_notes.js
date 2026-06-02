window.loadNotes("T09", `<div class="view" id="view-notes-t09">
<div class="note-doc">
  <div style="margin-bottom:16px"><button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button></div>
  <div class="note-title">
    <h1>Topic 09 — ShipMachinery v2</h1>
    <div class="sub">ETO MMD Oral Examination · Function 5 · Class 2 · Mumbai & Noida</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-1')">ETO MMD ORAL EXAMINA...</button>
    <button class="anc-btn" onclick="jumpTo('s-2')">TOPIC 9: SHIP MACHIN...</button>
    <button class="anc-btn" onclick="jumpTo('s-3')">MECHANICAL SAFETIES:</button>
    <button class="anc-btn" onclick="jumpTo('s-4')">1. Overload/Overhois...</button>
    <button class="anc-btn" onclick="jumpTo('s-5')">2. Slack rope safety</button>
    <button class="anc-btn" onclick="jumpTo('s-6')">3. Collision safety ...</button>
    <button class="anc-btn" onclick="jumpTo('s-7')">4. Anemometer cut</button>
    <button class="anc-btn" onclick="jumpTo('s-8')">5. Level luffing</button>
    <button class="anc-btn" onclick="jumpTo('s-written')">📝 Written Section</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">
  <table class="n-table">
    <tr><th>🆕 UPDATED</th><th>May 2026 — New gap-fill sections added at the end of this document. Scroll to bottom to see additions.</th></tr>
  </table>

  <div class="n-h1" id="s-1">ETO MMD ORAL EXAMINATION</div>
  <div class="body">COMPREHENSIVE STUDY NOTES — v2.0</div>

  <div class="n-h1" id="s-2">TOPIC 9: SHIP MACHINERY — ELECTRICAL SIDE</div>
  <div class="body">Function 5 | Class 2 ETO | Mumbai & Noida MMD</div>
  <div class="body">Compiled from 2025-2026 Oral Question Bank — All Surveyors Combined</div>
  <table class="n-table">
    <tr><th>COLOUR CODE LEGEND</th></tr>
    <tr><td>YELLOW = Key exam points / must-know concepts / formulae / numbers GREEN = Memory aids / mnemonics / analogies ORANGE = Cross questions + ideal answers / step-by-step procedures BLUE = Comparison tables / regulation tables / SOLAS references RED = Safety critical / warnings / most asked by surveyors</td></tr>
  </table>
  <table class="n-table">
    <tr><th>MOST ASKED — SHIP MACHINERY (ELECTRICAL SIDE)</th></tr>
    <tr><td>OMD — principle, calibration (zero + span), what action on alarm, reference tube — Deswal, Kamath, Sanjib Purifier vibration trip — causes, why no brake on stop, critical speed — Deswal, Kamath, Vishwanathan Steering gear — rudder hunting, solenoid valve, SOLAS overload alarm-not-trip rule — Vishwanathan, Nair Boiler trips — all trips, flame failure lockout, UV scanner, pre-purge mandatory — Wad, Nair, Deswal Viscotherm / viscosity controller — working, why not temperature control — Kamath, Gupta, Deswal Bow thruster — why won't start, all interlocks, protection relay — Vishwanathan, Deswal Crane / windlass EM brake — spring-applied fail-safe, air gap, coil failure — Sanjib, Kamath LP/HP cutouts — difference, why HP manual reset, oil differential cutout — Gupta, Nair Dashpot — what is it, where used, governor hunting — Deswal, Wad Auto-tension winch — torque control principle, how it maintains tension — Sanjib, Vishwanathan Main engine slow-down vs trip — what triggers each, can bridge override — Nair, Kamath Overspeed trip — principle, independence from governor, test procedure — Deswal, Wad</td></tr>
  </table>
  <table class="n-table">
    <tr><th>1. OIL MIST DETECTOR (OMD) — PRINCIPLE, CALIBRATION & TRIP ACTIONS</th></tr>
  </table>
  <div class="body">1.1 Working Principle — Photocell / Light Extinction Method</div>
  <div class="body">An Oil Mist Detector (OMD) continuously monitors the crankcase atmosphere of a diesel engine for elevated oil mist concentration. Oil mist forms when bearing surfaces begin to overheat — the oil film vaporises and condenses into fine droplets. This is an early warning of impending failure, occurring well before a catastrophic crankcase explosion. The OMD provides the crucial minutes needed to slow down or stop the engine safely.</div>
  <div class="body">The working principle is photoelectric light extinction (opacity measurement). A rotary sampling valve draws gas from each crankcase unit in sequence and passes it through a measuring tube. A calibrated light source (lamp) shines through the tube onto a photocell at the other end. When oil mist concentration is elevated, the mist droplets scatter and absorb the light beam, reducing the intensity reaching the photocell. The photocell output decreases in proportion to mist concentration. This signal is compared against a sealed reference tube containing clean air at the same optical path length — the differential measurement gives the true mist reading independent of lamp aging.</div>
  <table class="n-table">
    <tr><th>KEY EXAM POINTS — OMD PRINCIPLE & STANDARDS</th></tr>
    <tr><td>Principle: Photoelectric LIGHT EXTINCTION (opacity) — NOT chemical, NOT smoke detector — light beam attenuated by mist droplets Make: Graviner (most common on vessels worldwide), also Dräger MK8, Kidde Sampling: Rotary valve draws gas from EACH crankcase unit in sequence — continuous scan of all units Reference tube: Sealed clean-air tube at same path length — differential output compensates for lamp aging and contamination drift Alarm threshold: Typically 2.5 mg/L (milligrams per litre) — manufacturer-specific, may be 2.0 mg/L on newer units Trip action: Slow-down (reduce to safe RPM) OR shutdown depending on vessel/engine setting — bridge notified immediately SOLAS requirement: Ch II-1 Reg 16 — crankcase explosion protection MANDATORY for engines > <span class="n-val">2250 kW</span> OR cylinder bore > 300 mm Lower Explosive Limit (LEL) of oil mist: approximately 50 mg/L — alarm at 2.5 mg/L gives 20x safety margin before explosion risk Response time: < 20 seconds from mist entering sampling point to alarm — fast enough for protective action</td></tr>
  </table>
  <div class="body">1.2 OMD Calibration Procedure — Zero and Span (Graviner Type)</div>
  <div class="body">Calibration ensures the OMD accurately reads true mist concentration. Two adjustments are made: zero (baseline with clean air) and span (gain adjustment using known concentration). The engine alarm system must be isolated before calibration to prevent spurious trips during the procedure.</div>
  <table class="n-table">
    <tr><th>STEP-BY-STEP — OMD CALIBRATION (Graviner / Dräger)</th></tr>
    <tr><td>Step 1: ISOLATE — inform bridge and ECR, inhibit/bypass OMD alarm output to prevent false trips during calibration Step 2: PURGE all sample tubes and reference tube with clean instrument-quality dry air for minimum 2 minutes to clear any residual mist or contamination Step 3: ZERO CALIBRATION — with clean air in all tubes and reference tube, adjust the zero potentiometer until the meter reads exactly 0.00 mg/L (or 0% on display). This sets the baseline with no mist present. Step 4: SPAN CALIBRATION — introduce certified calibration gas of known oil mist concentration (e.g. 2.5 mg/L standard) through the calibration port on the measuring tube. Adjust the span potentiometer until display reads the exact certified value. This sets the sensitivity/gain of the optical system. Step 5: ALARM CHECK — verify the alarm relay activates at the correct setpoint (e.g. 2.5 mg/L). If alarm does not trip at correct level, adjust alarm setpoint potentiometer. Step 6: TRIP/SLOW-DOWN CHECK — verify the output relay for slow-down or shutdown operates at the correct threshold (usually 1.5x alarm level, e.g. 3.5-4 mg/L for shutdown). Step 7: RESTORE — purge calibration gas, reconnect clean air reference, allow system to stabilise. Confirm reading returns to near zero with clean air. Step 8: REINSTATE ALARM SYSTEM — remove inhibit/bypass. Notify bridge and ECR that OMD is back in service. Step 9: LOG — record: date, calibration gas batch number and certificate, zero and span readings before and after adjustment, technician name, next calibration due date in maintenance record. Frequency: Every 3 months per PMS, or after any lamp replacement, photocell replacement, or following an alarm event.</td></tr>
  </table>
  <div class="body">1.3 OMD Alarm and Trip — Actions and SOLAS Requirement</div>
  <table class="n-table">
    <tr><th>SAFETY CRITICAL — OMD ALARM ACTIONS</th></tr>
    <tr><td>ON ALARM: Do NOT immediately open crankcase. Reduce engine load — slow to DEAD SLOW or slow-down speed. WAIT minimum 20 minutes after engine stopped before opening crankcase (hot surfaces inside can ignite residual mist). Check indicator cocks to identify which unit has elevated mist — compare exhaust temperatures and bearing temperatures. After cool-down and safe entry: inspect bearings, piston crown, liner surface for scoring, discolouration, hot spots. NEVER reset and restart without identifying root cause — OMD alarm = bearing failure in progress until proven otherwise. SOLAS Ch II-1 Reg 16: crankcase must be maintained at negative pressure (slight vacuum) to prevent mist leakage. Relief valves fitted to prevent explosion pressure wave.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>What is the principle of the OMD?</td><td>The OMD uses the photoelectric light extinction (opacity) principle. A rotary sampling valve draws crankcase gas from each cylinder unit in sequence and passes it through a measuring tube. A calibrated light source shines through the tube onto a photocell. When oil mist is present, the droplets scatter and absorb the light beam, reducing photocell output in proportion to mist concentration. This output is compared to a sealed reference tube containing clean air at the same optical path length. The differential signal gives the true mist reading regardless of lamp aging. Alarm activates at approximately 2.5 mg/L — well below the Lower Explosive Limit of 50 mg/L. SOLAS Ch II-1 Reg 16 mandates this protection on engines above <span class="n-val">2250 kW</span> or bore above 300 mm.</td></tr>
    <tr><td>What is the reference tube in the OMD and why is it important?</td><td>The reference tube is a sealed tube of equal optical path length to the measuring tube, filled with clean air and permanently sealed. Both the measuring tube photocell and the reference tube photocell outputs are compared electronically. The differential signal is used as the mist reading. The reference tube is critical because lamp intensity decreases over time due to aging, and lamp or optical surface contamination reduces output. Without the reference tube, these changes would cause the reading to drift — appearing as false high mist readings. The reference tube experiences exactly the same lamp degradation as the measuring tube, so the differential output remains stable and accurate even as the lamp ages. It is the feature that distinguishes a reliable OMD from a simple opacity sensor.</td></tr>
    <tr><td>How do you calibrate the OMD?</td><td>OMD calibration has two steps: zero and span. First, isolate the alarm output to prevent spurious trips and inform bridge. Purge all sample tubes with clean dry air for at least 2 minutes. Zero calibration: with only clean air present in all tubes, adjust the zero potentiometer until the display reads exactly 0.00 mg/L. This sets the baseline. Span calibration: introduce certified calibration gas of known concentration (e.g. 2.5 mg/L) through the calibration inlet port and adjust the span potentiometer until the display matches the certified value exactly. Verify alarm relay fires at correct setpoint. Restore system, remove inhibit, log the calibration with gas certificate number and date. Calibration is performed every 3 months per PMS, and after any lamp or photocell replacement.</td></tr>
    <tr><td>OMD alarmed at sea — what do you do?</td><td>Do not open the crankcase immediately — this is the most critical point. First, verify the alarm is genuine by checking the OMD reading and which sampling unit is elevated. Reduce engine speed to dead slow or initiate slow-down to reduce heat generation. Inform bridge, Chief Engineer, and OOW. If alarm persists or reading increases, stop the engine. Do NOT restart without investigation. Wait a minimum of 20 minutes after engine stop before crankcase entry — hot surfaces and residual mist create explosion risk. Use indicator cocks to identify the affected unit. After safe cool-down, inspect bearings, piston crown, and cylinder liner for overheating, scoring, or discolouration. Identify the root cause (bearing white metal failure, lack of lubrication, piston ring failure) before any restart. Log all actions in the engine room log.</td></tr>
    <tr><td>Why does OMD give slow-down instead of immediate shutdown?</td><td>Slow-down rather than immediate shutdown is preferred because a sudden stop of a running engine can cause thermal shock — rapid temperature differential between hot and cool surfaces risks distortion and cracking of components including cylinder liners and pistons. Reducing to slow speed also allows the lubrication system to continue circulating oil, helping to cool the affected bearing. Additionally, from a navigation safety perspective, an immediate blackout-type engine stop at sea could endanger the vessel. The slow-down buys time for the engineer to assess whether a full stop is necessary. However, if mist concentration continues to rise at slow speed, full shutdown is mandatory. Some installations allow bridge override of slow-down to maintain steerage in restricted waters.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>2. VISCOTHERM — FUEL OIL VISCOSITY CONTROLLER</th></tr>
  </table>
  <div class="body">2.1 Purpose and Need for Viscosity Control</div>
  <div class="body">Heavy Fuel Oil (HFO) used in marine diesel engines must be heated before injection. The purpose of heating is to reduce viscosity to a level where the fuel can be properly atomised through the injector nozzle. Atomisation quality directly determines combustion efficiency, exhaust temperature, carbon deposit formation, and specific fuel consumption. Too high a viscosity means the fuel jet does not break into fine droplets — incomplete combustion follows. Too low a viscosity (over-heated) means reduced lubrication between the fuel pump plunger and barrel, accelerating wear and allowing fuel to blow past the plunger, causing injection timing errors.</div>
  <div class="body">The correct injection viscosity is 10–14 cSt (centistokes) for most main engines, and 14–20 cSt for auxiliary diesel engines. This does not correspond to a fixed temperature — different HFO grades (e.g. RMG 380 with 380 cSt at <span class="n-val">50°C</span>, versus RME 180 with 180 cSt at <span class="n-val">50°C</span>) reach the same injection viscosity at different temperatures. This is the fundamental reason a viscosity controller is used rather than a temperature controller.</div>
  <table class="n-table">
    <tr><th>KEY EXAM POINTS — VISCOTHERM</th></tr>
    <tr><td>Target injection viscosity: 10–14 cSt for main engine injectors; 14–20 cSt for auxiliary engines Viscometer type: Rotational (rotating spindle) — motor drives spindle at constant speed through flowing fuel; torque required = function of viscosity; motor current proportional to torque proportional to viscosity Alternative type: Capillary tube viscometer — timed pressure drop across fixed restriction proportional to viscosity Control output: PI controller (not PID — temperature/viscosity = slow process, D action not needed, would amplify pump noise) Final control element: Steam control valve on HFO pre-heater (shell and tube or plate heat exchanger type) Fail-safe: Steam valve FAIL CLOSE — instrument air or signal loss closes steam = fuel cools = engine slows rather than overheats fuel system Why not temperature control: RMG 380 requires ~<span class="n-val">130°C</span> to reach 14 cSt; RME 180 requires only ~<span class="n-val">105°C</span>. Same temperature = wrong viscosity for different grades. Viscosity control adapts automatically to fuel grade change. Fuel grade change procedure: When changing from one HFO grade to another, keep viscotherm in AUTO — it will automatically adjust heating to maintain 14 cSt regardless of new grade characteristics.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>What is a Viscotherm and how does it work?</td><td>A Viscotherm is an automatic viscosity controller fitted in the HFO fuel supply line between the settling/service tank and the engine injection system. HFO must be heated to achieve the correct injection viscosity of 10–14 cSt for proper atomisation. The Viscotherm uses a rotational viscometer — a motor drives a spindle at constant speed through the flowing fuel. The torque required to maintain constant speed is directly proportional to fuel viscosity. This torque demand is measured as motor current, converted to a 4–<span class="n-val">20 mA</span> signal, and fed to a PI controller. The controller compares actual viscosity against the setpoint and adjusts the steam control valve on the HFO heater to add or reduce heating until the setpoint is reached. The system closes the loop continuously.</td></tr>
    <tr><td>Why is viscosity control better than temperature control for HFO?</td><td>Different grades of HFO have different viscosity-temperature characteristics. RMG 380 (380 cSt at <span class="n-val">50°C</span>) must be heated to approximately 130–<span class="n-val">140°C</span> to achieve 14 cSt injection viscosity. RME 180 (180 cSt at <span class="n-val">50°C</span>) only needs 100–<span class="n-val">110°C</span> to reach the same 14 cSt. If a temperature controller was set to <span class="n-val">130°C</span> when bunkering RME 180, the fuel would be heated to only 65–70 cSt — too viscous for good atomisation. Conversely, setting it for RME 180 would over-heat RMG 380 fuel, reducing viscosity below 10 cSt and causing injector wear. The viscosity controller measures what actually matters for injection quality and automatically compensates for fuel grade, batch, and temperature changes without any manual adjustment. This is its key practical advantage over temperature control.</td></tr>
    <tr><td>What happens if the Viscotherm fails?</td><td>If the Viscotherm viscometer or controller fails, the system must be switched to manual temperature control mode using the HFO heater temperature indicator. The engineer sets a fixed temperature corresponding to the known fuel grade — typically read from the fuel oil viscosity-temperature chart supplied with the bunker delivery note. The target temperature is set to achieve the 14 cSt injection viscosity for the specific fuel grade on board. This is a degraded mode — if fuel grade changes during manual mode, the engineer must manually recalculate and adjust the temperature setpoint. A fault alarm is activated and the Chief Engineer must be informed. The defective viscometer or controller should be repaired or replaced at the earliest opportunity. Engine injection quality should be monitored during manual mode by observing exhaust temperatures and smoke.</td></tr>
    <tr><td>What is the control action used in a Viscotherm and why?</td><td>The Viscotherm uses a PI (Proportional plus Integral) controller. Proportional action gives immediate response to viscosity error — if viscosity rises above setpoint, the steam valve opens proportionally. However, P-only action leaves a steady-state offset — the valve never fully corrects back to exactly the setpoint viscosity. Integral action accumulates the error over time and drives the output until the error reaches exactly zero, eliminating this offset. Derivative (D) action is not used because: firstly, viscosity changes are slow (thermal process with large time constant), so rapid anticipation is not needed; secondly, the rotating spindle signal contains mechanical vibration noise from the fuel system pumps, and derivative action would amplify this noise, causing erratic valve hunting. PI is therefore the correct choice for this application.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>3. DASHPOT — FUNCTION, TYPES AND APPLICATIONS</th></tr>
  </table>
  <div class="body">A dashpot is a hydraulic or pneumatic damping device that introduces a controlled time delay into a mechanical or electrical system by resisting movement through a calibrated orifice. The piston or plunger can only move as fast as fluid (oil or air) can transfer through the orifice restriction. This controlled resistance converts an instantaneous input into a delayed or dampened output — essential in systems where abrupt movements cause instability or mechanical damage.</div>
  <table class="n-table">
    <tr><th>KEY EXAM POINTS — DASHPOT</th></tr>
    <tr><td>Definition: Hydraulic or pneumatic device — piston moves fluid through orifice — movement rate controlled by orifice size Governor application: Diesel engine governor with dashpot — damps actuator response to prevent hunting (speed oscillation) Governor hunting: Without dashpot — speed drops → governor opens fuel rack → engine over-responds → speed rises → governor closes rack → speed drops → oscillates continuously Orifice adjustment: Variable needle valve on orifice — increase restriction = longer time delay = more damping. Reduce restriction = faster response = less damping ACB inverse-time protection: Dashpot in oil-filled cylinder on trip mechanism — large overcurrent displaces piston fast (small orifice restriction effect at high delta-P) → fast trip. Small overcurrent displaces slowly → long time delay → inverse time characteristic Relay application: Dashpot relay provides time-delayed overcurrent protection — adjustable time delay 0.1 to 30 seconds depending on application Over-damping: Too much restriction — governor responds too slowly — speed drifts without correction — sluggish Under-damping: Too little restriction — fast response but still hunts — continuous oscillation Optimal setting: Critical damping — fastest response without overshoot — usually set by manufacturer or commissioning engineer</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>What is a dashpot? Where is it used on a ship?</td><td>A dashpot is a hydraulic damping device that introduces a controlled time delay by forcing fluid through a calibrated orifice. The piston or plunger in the dashpot cylinder can only move at the rate fluid displaces through the orifice restriction — larger orifice = faster movement = less delay; smaller orifice = slower movement = more delay. On ships, dashpots are used in three main applications: firstly, diesel engine governors — to prevent hunting by damping the fuel rack actuator movement so corrections are smooth and proportional; secondly, air circuit breaker trip mechanisms — to provide inverse-time overcurrent protection where large fault currents cause fast trips and small overloads cause delayed trips; thirdly, control valves — to prevent slam-opening or slam-closing which causes water hammer or pressure surge in pipework.</td></tr>
    <tr><td>What is governor hunting and how does the dashpot prevent it?</td><td>Governor hunting is a continuous oscillation of engine speed above and below the setpoint, caused by over-correction of the fuel rack. The sequence is: speed drops below setpoint → governor increases fuel → engine over-responds → speed rises above setpoint → governor reduces fuel → speed drops below setpoint again — repeating indefinitely. The dashpot in the governor actuator damps this behaviour by slowing the fuel rack movement. Instead of the rack snapping immediately to the new position, it moves gradually at a rate controlled by the orifice. This gives the engine time to respond to the initial correction before the rack moves further — preventing overshoot. The orifice is adjusted to achieve critical damping: fastest correction speed that does not cause overshoot. Too little damping still allows hunting; too much makes the governor sluggish and the speed recovers slowly after load changes.</td></tr>
    <tr><td>How does a dashpot give inverse-time protection in an ACB?</td><td>In an oil-dashpot overcurrent relay or ACB trip mechanism, the trip lever is connected to a piston in an oil-filled cylinder with a calibrated orifice. When overcurrent occurs, the electromagnetic force on the trip plunger tries to move the piston. The oil resistance through the orifice controls how fast the piston moves. For a large fault current, the electromagnetic force is much larger than the oil resistance, so the piston moves quickly — trip occurs in a short time. For a small overload current, the force barely exceeds the oil resistance, so the piston creeps slowly — trip takes much longer. This gives the inverse-time characteristic: trip time is inversely proportional to the magnitude of the overcurrent. This is important for selectivity — downstream fuses or breakers clear small faults first, and the upstream ACB only trips for large uncleared faults.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>4. STEERING GEAR — ELECTRICAL SYSTEM, PROTECTION & SOLAS REQUIREMENTS</th></tr>
  </table>
  <div class="body">4.1 SOLAS Requirements and Overview</div>
  <div class="body">The steering gear electrical system is governed by SOLAS Chapter II-1 Regulation 29. For vessels above 10,000 GT, two independent steering gear power units are required, each capable of putting the rudder from 35° one side to 30° the other side in not more than 28 seconds, with the vessel at deepest seagoing draught running at maximum ahead service speed. Each power unit is driven by a dedicated motor with its own starter and protection. The motors are supplied from separate sections of the main switchboard or from separate distribution boards fed from different sections.</div>
  <table class="n-table">
    <tr><th>KEY EXAM POINTS — STEERING GEAR ELECTRICAL</th></tr>
    <tr><td>SOLAS requirement: 2 independent power units for vessels >10,000 GT; rudder 35° to 30° in <span class="n-val">28 sec</span> at maximum ahead speed Follow-up (FU) system: Helm order → transmitter → solenoid valve energised → hydraulic RAM moves rudder → rudder position feedback via hunting gear → feedback cancels solenoid signal when demanded angle reached Non-follow-up (NFU): Solenoid energised for as long as lever held — no position feedback — rudder moves continuously while lever held — used in emergencies Hunting gear: Mechanical or electrical feedback linkage between rudder stock and solenoid valve pilot — cancels solenoid signal proportional to rudder angle achieved — prevents overshoot and continuous movement Phase failure relay: MANDATORY per SOLAS — detects loss of any phase, reverse phase sequence — trips motor immediately. Single-phasing causes motor to draw 1.7x rated current on two phases → rapid overheating and burnout SOLAS overload rule: Steering motor overload = ALARM ONLY, NOT TRIP — loss of steering more dangerous than motor burnout. Engineer must investigate but steering must be maintained. Running alarm: If motor runs continuously for longer than normal (e.g. 30 seconds continuously at sea) — alarm to bridge. Indicates rudder not reaching demanded position. Auto-changeover: On vessels fitted with two power units — if running unit fails, standby starts and comes on line automatically within 45 seconds Emergency: SOLAS requires steering gear to be operable from an emergency position (local control at steering gear room) independent of bridge</td></tr>
  </table>
  <div class="body">4.2 Rudder Hunting — Cause and Diagnosis</div>
  <div class="body">Rudder hunting is continuous oscillation of the rudder about the demanded angle, even when no helm order is being given. The rudder sweeps continuously from side to side. This is caused by failure or maladjustment of the hunting gear (follow-up cancellation feedback). In the follow-up system, the hunting gear linkage generates a signal proportional to rudder position and uses it to cancel the solenoid valve command when the demanded angle is reached. If this linkage is disconnected, worn, or misadjusted, the solenoid never sees the cancellation signal and drives the rudder continuously.</div>
  <table class="n-table">
    <tr><th>STEP-BY-STEP — RUDDER HUNTING FAULT DIAGNOSIS</th></tr>
    <tr><td>Step 1: Observe — rudder angle indicator shows continuous sweeping left-right without helm input. This confirms hunting, not a control signal issue. Step 2: Switch to NFU (Non-Follow-Up) mode — in NFU mode, feedback is bypassed. If rudder stabilises and responds correctly in NFU, fault is confirmed in the follow-up feedback path. Step 3: Inspect hunting gear linkage — check for: loose/worn pin in lever arm, disconnected linkage rod, worn feedback potentiometer shaft, seized pivot. Step 4: Check hunting gear adjustment — linkage geometry must be set so that movement from 0° to 35° generates exactly the correct cancellation signal range. Check manufacturer's alignment marks. Step 5: In autopilot mode — check gain setting. Excessive proportional gain in autopilot also causes hunting. Reduce gain and observe. Step 6: Check rudder angle feedback transmitter (telemotor or rotary potentiometer) — open circuit or incorrect zero gives constant error signal = continuous solenoid energisation. Step 7: Emergency — remain in NFU mode and steer manually from bridge or steering gear room. Log fault and arrange repair at first opportunity.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>Parameter</th><th>Follow-Up (FU) System</th><th>Non-Follow-Up (NFU) System</th></tr>
    <tr><td>Feedback</td><td>YES — hunting gear cancels signal at demanded angle</td><td>NO — no position feedback</td></tr>
    <tr><td>Operation</td><td>Helm order → rudder moves to ordered angle → stops</td><td>Lever held → rudder moves continuously → release = stop</td></tr>
    <tr><td>Use</td><td>Normal steering — autopilot, bridge manual</td><td>Emergency, maintenance, fault bypass</td></tr>
    <tr><td>Risk of overshoot</td><td>No — feedback prevents overshoot</td><td>Yes — operator must judge and release at correct angle</td></tr>
    <tr><td>Hunting gear required</td><td>YES — essential for correct operation</td><td>Not used — bypassed</td></tr>
    <tr><td>Failure effect</td><td>Hunting if feedback fails; rudder doesn't reach angle if gain wrong</td><td>Simpler — fewer failure modes — preferred for emergency</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>What is the SOLAS requirement for steering gear?</td><td>SOLAS Chapter II-1 Regulation 29 requires that vessels above 10,000 GT are fitted with two independent steering gear power units. Each unit must be capable of putting the rudder over from 35° on one side to 30° on the other side in not more than 28 seconds, with the vessel at its deepest seagoing draught and running at maximum ahead service speed. Both units must be capable of operating simultaneously if required. The electrical supply to each power unit must be from separate sections of the switchboard and, where practicable, supplied from different generators. An alarm must be provided at the bridge if power to either steering unit fails. Emergency steering from the steering gear room must also be possible, independent of bridge control.</td></tr>
    <tr><td>Why does SOLAS require overload ALARM only — not trip — on steering motor?</td><td>SOLAS requires that steering gear motor overload protection initiates an alarm only and does NOT automatically trip the motor. This is because loss of steering control at sea — particularly in congested waters, during manoeuvring, or in heavy weather — is a greater danger to the vessel and crew than the risk of burning out the steering motor. If the motor tripped on overload during an emergency manoeuvre, the helmsman would lose all control at the most critical moment. The overload alarm alerts the Engineer Officer of the Watch and the bridge to the abnormal condition, allowing investigation and corrective action, but the steering must be maintained. This is a critical distinction the ETO must know: all other motors may have automatic overload trips — the steering motor alarm-only rule is unique and SOLAS-mandated.</td></tr>
    <tr><td>What is a phase failure relay and why is it mandatory on steering gear?</td><td>A phase failure relay monitors all three phases of the three-phase supply to the steering gear motor and trips the circuit if any phase is lost, has a phase reversal, or has a phase voltage imbalance exceeding the set threshold. On steering gear motors, phase failure protection is mandatory per SOLAS because single-phasing — loss of one phase — is particularly dangerous. When a three-phase motor loses one phase, it continues to run but draws approximately 1.73 times its normal current in the remaining two phases, causing rapid overheating and winding burnout within minutes. Additionally, phase reversal would cause the motor to run in the wrong direction, turning the rudder the wrong way, creating a severe navigation hazard. The phase failure relay provides immediate protection against both conditions and operates much faster than a thermal overload relay.</td></tr>
    <tr><td>What is rudder hunting and how do you cure it?</td><td>Rudder hunting is continuous oscillation of the rudder about the demanded position, caused by failure or maladjustment of the follow-up (hunting gear) feedback system. In normal follow-up operation, the hunting gear generates a mechanical or electrical feedback signal proportional to actual rudder position and uses it to cancel the solenoid valve command once the demanded angle is reached. If the hunting gear linkage is worn, disconnected, or incorrectly adjusted, the cancellation signal is absent or incorrect, so the solenoid remains energised, driving the rudder past the setpoint, then reversing, creating continuous oscillation. Diagnosis: switch to NFU mode — if hunting stops, fault is confirmed in the follow-up feedback path. Check hunting gear pin and linkage for wear, check feedback potentiometer. Repair the linkage or, as temporary measure, operate in NFU mode.</td></tr>
    <tr><td>How does the solenoid valve work in steering gear?</td><td>The solenoid valve in an electro-hydraulic steering gear is a directional control valve that directs hydraulic fluid to the correct side of the RAM cylinder (or vane type actuator) to move the rudder in the demanded direction. It is a 4/3 or 4/2 way valve — energising the port solenoid directs hydraulic pressure to the port side of the RAM, moving rudder to port; energising starboard solenoid directs to starboard side. When both solenoids are de-energised (rudder at demanded position), the valve centres under spring force and blocks hydraulic flow — holding the rudder at that position. Solenoid coil faults (open or short circuit) are common — an open circuit coil gives no movement in that direction; a short circuit causes coil overheating and may blow the solenoid fuse. Coil resistance should be checked and compared to specification during maintenance.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>5. BOILER — ELECTRICAL TRIPS, BMS SEQUENCE & FLAME FAILURE</th></tr>
  </table>
  <div class="body">5.1 All Boiler Safety Trips and Setpoints</div>
  <div class="body">The boiler Burner Management System (BMS) is a dedicated safety PLC or hardwired interlock system that supervises all safety conditions before, during, and after burner operation. ALL safety trips listed below must be satisfied (healthy) before the BMS allows ignition. Any single trip causes immediate burner shutdown and lockout. The ETO must know every trip, its sensor type, its setpoint, and the consequence of failure.</div>
  <table class="n-table">
    <tr><th>KEY EXAM POINTS — ALL BOILER TRIPS</th></tr>
    <tr><td>LOW-LOW WATER LEVEL: Float switch or conductivity probe — IMMEDIATE shutdown — NO time delay — most critical trip. Exposed heating surface → tube failure → explosion. Reset: refill drum to normal level, manual reset of BMS. HIGH STEAM PRESSURE: Pressure switch (manual reset type) — set approximately 3–5% above normal working pressure — trips burner. Must be MANUALLY RESET — prevents restart against uncleared high pressure condition. FLAME FAILURE: UV scanner (ultraviolet) or ionisation probe — if flame not detected within 10 seconds of ignition attempt OR fails during run → immediate fuel valve closure → LOCKOUT. Manual reset required. FORCED DRAFT FAN FAILURE: Differential pressure switch across FD fan outlet, or air flow switch — trips burner if airflow falls below minimum. No air = unburnt fuel accumulates in furnace = explosion risk. HIGH FLUE GAS TEMPERATURE: Thermocouple or RTD in uptake — alarm at first threshold, trip at second — indicates incomplete combustion or afterburning. FUEL OIL LOW PRESSURE: Pressure switch on HFO supply line — trips burner if fuel pressure drops below minimum. Prevents injector starvation and flame failure. FUEL OIL HIGH TEMPERATURE: Thermostat on HFO supply — alarm and trip if HFO temperature exceeds maximum (typically <span class="n-val">160°C</span> for HFO). LOW DRUM LEVEL (first stage): Float switch — ALARM only — warns operator before low-low trip activates. HIGH DRUM LEVEL: Float switch — alarm — risk of water carryover into steam lines and turbines. PURGE TIMER: Proven purge sequence (typically 3–5 air changes of furnace volume) MUST complete before fuel valve opens — enforced by BMS timer, cannot be bypassed.</td></tr>
  </table>
  <div class="body">5.2 Burner Management System — Light-Off Sequence</div>
  <table class="n-table">
    <tr><th>STEP-BY-STEP — BOILER BMS LIGHT-OFF SEQUENCE</th></tr>
    <tr><td>Step 1: PRE-CONDITIONS CHECK — BMS verifies: drum water level OK (not low-low), fuel pressure OK, FD fan running, no active lockouts, steam pressure below trip setpoint. Step 2: PRE-PURGE — FD fan runs at full speed. BMS timer enforces purge of 3–5 air changes of furnace and flue volume. This clears any accumulated unburnt fuel vapour from a previous failed start. Timer cannot be bypassed — hardwired interlock. Step 3: PILOT IGNITION — ignition transformer fires high-voltage spark at pilot electrode. Pilot fuel valve opens — small pilot flame established. Step 4: PILOT FLAME PROVING — UV scanner must confirm pilot flame within 10 seconds of pilot valve opening. If no UV signal within 10 seconds: pilot valve closes, BMS goes to LOCKOUT. If UV confirmed: proceed. Step 5: MAIN FUEL VALVE OPENS — main burner fuel valve opens, main flame ignites from pilot flame. Step 6: MAIN FLAME PROVING — UV scanner confirms main flame within safety proving time (typically 5–10 seconds). If not confirmed: main fuel valve closes immediately → lockout. Step 7: PILOT EXTINGUISHED — pilot fuel valve closes (on supervised pilot systems). Main burner now runs alone. BMS hands control to modulating burner controller. Step 8: MODULATING CONTROL — burner modulates between high and low fire based on steam pressure demand. BMS continues to monitor all safety interlocks throughout. Step 9: SHUTDOWN — on normal stop command: modulate to low fire → main fuel valve closes → post-purge cycle → FD fan runs to clear residual fuel vapour → fan stops. Step 10: FLAME FAILURE DURING RUN — main fuel valve closes IMMEDIATELY on loss of UV signal. BMS initiates post-purge → LOCKOUT. Manual reset and investigation required before restart.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>Trip</th><th>Sensor Type</th><th>Action</th><th>Reset Type</th><th>Why Critical</th></tr>
    <tr><td>Low-Low Water Level</td><td>Float switch / conductivity probe</td><td>IMMEDIATE shutdown</td><td>Manual</td><td>Exposed tubes overheat → tube failure → explosion</td></tr>
    <tr><td>Flame Failure</td><td>UV scanner / ionisation probe</td><td>Immediate fuel valve close + lockout</td><td>Manual</td><td>Unburnt fuel accumulates → furnace explosion</td></tr>
    <tr><td>High Steam Pressure</td><td>Bourdon pressure switch</td><td>Burner shutdown</td><td>MANUAL ONLY</td><td>Repeated cycling at high pressure → PRV damage</td></tr>
    <tr><td>FD Fan Failure</td><td>DP switch / airflow switch</td><td>Burner shutdown</td><td>Auto (if fan restored)</td><td>No air = unburnt fuel = explosion risk</td></tr>
    <tr><td>Fuel Oil Low Pressure</td><td>Pressure switch</td><td>Burner shutdown</td><td>Auto (if pressure restored)</td><td>Injector starvation → flame failure</td></tr>
    <tr><td>High Flue Gas Temp</td><td>Thermocouple K-type</td><td>Alarm then trip</td><td>Auto</td><td>Afterburning / incomplete combustion</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>What trips a boiler immediately with no time delay?</td><td>Two conditions cause immediate boiler shutdown with no time delay: low-low drum water level, and flame failure during running. Low-low water level is the highest priority trip — if the heating surfaces (tubes or furnace crown) are uncovered, they overheat and fail within seconds, potentially causing a catastrophic explosion. There is deliberately no time delay because every second of delay increases the risk of tube failure. Flame failure also causes immediate fuel valve closure during running — if flame is lost, unburnt fuel continues to enter the furnace where it accumulates; any delayed trip allows an explosive fuel-air mixture to build up. The UV scanner sends the flame loss signal directly to the fuel valve solenoid with no time delay in the circuit. All other trips (high pressure, high flue temperature, fuel pressure) may have brief delays to avoid spurious trips from transient conditions.</td></tr>
    <tr><td>What is a flame failure lockout and how do you reset it?</td><td>A flame failure lockout is a safety state entered by the BMS when flame cannot be established during the ignition sequence, or when flame is lost during normal running. On flame failure, the fuel valve closes immediately to prevent unburnt fuel accumulation. The BMS enters lockout — a persistent safe state that requires deliberate manual intervention to exit. The lockout cannot be cleared by simply pressing start again. Before resetting a lockout, the engineer must investigate the cause: check UV scanner cleanliness and function (clean lens if contaminated), check fuel oil pressure and temperature, check ignition electrode condition and gap, check pilot fuel supply. After rectifying the fault, the manual reset button on the BMS panel is pressed. The BMS then runs a fresh pre-purge cycle before allowing a new ignition attempt. Repeated lockouts without investigation are not acceptable — a persistent fault must be found and corrected.</td></tr>
    <tr><td>Why is pre-purge mandatory and what happens if it is bypassed?</td><td>Pre-purge is mandatory because in any previous failed ignition attempt, unburnt fuel oil may have collected in the furnace as vapour, fog, or liquid. If ignition is attempted without purging this accumulated fuel, the initial spark or pilot flame can ignite it explosively — a furnace explosion. The pre-purge uses the FD fan to circulate a minimum of 3–5 complete air changes through the furnace volume and flue before any fuel is introduced. This dilutes and clears all combustible vapour. The purge timer is hardwired into the BMS interlock chain — the fuel valve solenoid circuit is physically prevented from energising until the timer has completed its count. Any attempt to bypass the purge timer (e.g. by jumpering the timer contact) is a serious safety violation and could be grounds for loss of class. Classification societies verify the purge timer function during surveys.</td></tr>
    <tr><td>What is the function of the UV scanner on a boiler?</td><td>The UV (ultraviolet) scanner is the flame detection sensor that proves to the BMS that a flame is present. It is mounted in the burner front with a direct line of sight to the flame. The scanner detects ultraviolet radiation (wavelength 185–260 nm) emitted by the active combustion flame. UV is used rather than visible light or infrared because the hot refractory furnace surfaces emit significant infrared and visible radiation even when no flame is present — this would give a false flame-present signal. UV emission is specific to the chemical reactions occurring in an active flame — refractory glow does not emit UV. The scanner output is a flicker frequency signal (a healthy flame flickers at 10–<span class="n-val">100 Hz</span>) which the BMS uses to confirm genuine flame. A failed scanner or contaminated lens (obscured by soot) is a common cause of spurious flame failure lockouts — the lens must be cleaned regularly.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>6. CRANE / WINDLASS — ELECTROMAGNETIC BRAKE & MOTOR CONTROL</th></tr>
  </table>
  <div class="body">Deck cranes, windlasses, and mooring winches use electromagnetic (EM) brakes as the primary holding brake. The EM brake is fail-safe by design: it is spring-applied and electrically released. This means the brake is always engaged when no power is present, and is released only when the motor is energised. This is the fundamental safety principle — power failure always results in the load being held, never dropped.</div>
  <table class="n-table">
    <tr><th>KEY EXAM POINTS — EM BRAKE</th></tr>
    <tr><td>Fail-safe principle: SPRING ON, ELECTRICALLY OFF — brake engaged at all times except when motor is running Construction: Electromagnet coil mounted in housing. Armature plate faces magnet. Brake disc (friction lining) between armature and rotor/drum coupling. Spring(s) push armature against disc when coil de-energised. Operation: Motor energised → brake coil energised simultaneously (same power supply or dedicated supply from motor starter auxiliary contact) → electromagnet attracts armature → armature compresses against magnet face, away from disc → disc releases → motor shaft free to rotate Power failure: Coil de-energises → spring force pushes armature against disc → friction braking holds load immediately Air gap: Distance between electromagnet face and armature plate when brake applied. As disc wears, armature sits further from magnet. Excessive air gap: magnet force insufficient to pull armature in fully → brake drags or fails to release. Typical correct air gap: 0.2–0.5 mm. Check and shim annually. Coil failure (open circuit): No current, no magnetic force → spring always holds brake ON → motor runs but load does not move → high motor current (straining against brake) → motor overheats → OLR trips Coil failure (short circuit): Coil overheats → eventual open circuit → or fuse blows → brake locks ON Brake dragging: Air gap too large OR partial coil failure → braking force not fully released → motor overloads → reduced load capacity → overheating of brake disc Testing: Electrical test — de-energise motor, observe brake engagement time. Manual release test — emergency handle releases brake manually to verify disc condition and spring tension.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>How does an electromagnetic brake work on a crane? Why is it fail-safe?</td><td>An electromagnetic crane brake is spring-applied and electrically released. When the crane motor is de-energised (at rest or on power failure), the brake spring pushes the armature plate against the brake disc, clamping it against the stationary housing — this holds the suspended load securely. When the crane motor is energised, the brake coil is simultaneously energised (connected via an auxiliary contact on the motor contactor or directly to motor supply terminals). The energised coil creates a strong magnetic field that attracts the armature plate towards the electromagnet face, compressing the spring and releasing the brake disc — the motor shaft is now free to rotate. The fail-safe principle is: power present = brake released; power absent = brake applied. This ensures that in the event of any power failure, control system fault, or E-stop activation, the load is immediately and automatically held by the brake spring without any control action required.</td></tr>
    <tr><td>What is the air gap in an EM brake and what happens if it is too large?</td><td>The air gap is the physical clearance between the electromagnet face and the armature plate when the brake is in the applied (spring-engaged) position. As the brake disc friction lining wears down through normal use, the armature sits slightly further away from the electromagnet — increasing the air gap. If the air gap exceeds the manufacturer's maximum specification (typically 0.3–0.5 mm), the magnetic flux path weakens significantly because flux decreases with the square of the gap distance. The electromagnet can no longer generate sufficient force to fully attract the armature against the spring. The result is: slow or incomplete brake release (brake drags), chatter and vibration during lifting, excessive coil current draw as the coil tries to pull the armature (risk of coil overheating), reduced braking torque. The remedy is to measure the gap with feeler gauges and shim the brake or adjust the armature stop screws to restore correct gap. This is a standard PMS task performed at regular intervals.</td></tr>
    <tr><td>What happens if the EM brake coil fails open circuit while the crane is in use?</td><td>If the brake coil fails open circuit (break in the coil winding, broken connection, or blown coil fuse), no current flows through the coil, no magnetic field is generated, and the spring holds the brake permanently engaged — even when the motor is energised. The operator will observe: crane motor starts (motor current flows), motor makes normal running noise, but the load does not lift and the drum does not rotate. High motor current is drawn because the motor is trying to drive against the locked brake — the overload relay will trip after a short period if the operator continues to attempt hoisting. There is no immediate danger because the brake is holding the load. The operator must stop immediately to prevent motor damage. The coil resistance should be measured (should match specification — typically 20–200 ohms depending on coil) and compared to a known good value. Replace coil if open circuit is confirmed. Check coil connections and supply voltage before condemning the coil.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>7. BOW THRUSTER — ELECTRICAL INTERLOCKS, STARTING & PROTECTION</th></tr>
  </table>
  <div class="body">Bow thrusters are high-power transverse propulsion units used for port manoeuvring and dynamic positioning. They range from approximately <span class="n-val">500 kW</span> on small vessels to 3,<span class="n-val">000 kW</span> or more on large ferries and offshore vessels. The large motor power, high starting current, and critical safety implications of tunnel flooding or mechanical failure require a comprehensive interlock system before the motor can be started.</div>
  <table class="n-table">
    <tr><th>KEY EXAM POINTS — BOW THRUSTER INTERLOCKS</th></tr>
    <tr><td>Zero pitch interlock (CPP type): Controllable pitch propeller (CPP) bow thruster must be at ZERO PITCH before motor start is permitted. Starting on pitch means starting the motor under full load — starting current of 6–8x rated would be sustained, possibly causing generator overload and switchboard trip. Tunnel hatch closed interlock: Deck access hatch to thruster tunnel must be closed and locked. Open hatch = flooding risk if vessel heels or pitches. Limit switch on hatch confirms closed. Lube oil pressure interlock: Gear box and thrust bearing lube oil pressure must be proven before and during operation. Some designs pre-lube on start command — LO pump starts, pressure switch confirms, then motor start permitted. Cooling water flow interlock: Seal cooling water (shaft seal water) flow switch must be satisfied. Without cooling water, mechanical shaft seals overheat and fail, allowing seawater ingress. Shaft earth brush: Earth brush must be in contact with shaft to provide return path for bearing currents (induced by motor magnetic fields). Protects bearings from pitting caused by arc discharge. VFD interlocks (if fitted): Drive ready signal must be present, DC bus fully charged, no active drive fault — all checked before start command is sent. Generator capacity interlock: PMS checks that available running generation exceeds the thruster motor rated kW plus a margin (typically 10–15%). If insufficient generation, thruster start is blocked and alarm given. Starting method: Fixed pitch = DOL or star-delta (FP thrusters are small, <<span class="n-val">500 kW</span>). CPP = direct on-line at zero pitch, then pitch applied gradually. Large units use soft-starter or VFD for smooth ramp-up.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>Why won't the bow thruster start? — list all reasons</td><td>A bow thruster will not start if any of the following interlocks are not satisfied: (1) Pitch not at zero — for CPP type, starting on pitch causes sustained high starting current. (2) Tunnel access hatch open — limit switch not made. (3) Lube oil pressure not proven — gear and bearing protection. (4) Cooling water flow not confirmed — seal protection interlock open. (5) VFD fault present and not cleared — drive not in ready state. (6) Insufficient generator capacity — PMS blocks start to prevent overload. (7) Shaft earth brush not in contact. (8) Control supply failure — fuse blown or MCB tripped on <span class="n-val">24V</span> DC control circuit. (9) Emergency stop button activated — check all E-stops including local and remote. (10) Contactor or circuit breaker fault — check main feeder breaker position. Systematically check each interlock status lamp on the control panel and use the fault display to identify which interlock is open.</td></tr>
    <tr><td>What electrical protection is fitted to a bow thruster motor?</td><td>Bow thruster motors are protected by a comprehensive set of electrical protection devices: motor protection relay covering overcurrent, thermal overload, negative sequence (phase failure and unbalance), and earth fault; HRC fuses or MCCB for short circuit protection on the main feeder; stator winding temperature sensors (PT100 or PTC thermistors) with alarm at <span class="n-val">130°C</span> and trip at <span class="n-val">155°C</span> for class F insulation; bearing temperature sensors (PT100) on motor drive-end and non-drive-end bearings with alarm and trip setpoints; vibration sensors on large units for early bearing fault detection; and thermal memory in the motor protection relay which prevents restart if the motor has not sufficiently cooled after a start — this protects against thermal damage from repeated starts in quick succession. The complete protection package ensures the motor is protected against both electrical and mechanical overload conditions.</td></tr>
    <tr><td>What is the zero pitch interlock and why is it important?</td><td>The zero pitch interlock on a CPP (controllable pitch propeller) bow thruster prevents the motor from starting unless the propeller blade pitch is confirmed at zero (no thrust). When pitch is at zero, the propeller disc creates no resistance — the motor starts unloaded, drawing normal starting current (approximately 6x rated for a DOL start, but for only a few seconds). If the motor were started with pitch set to full thrust, the propeller would be pushing against the water immediately — equivalent to starting a heavily loaded motor. The starting current would be sustained at 6–8x rated for an extended period, potentially tripping the generator overcurrent protection and causing a blackout during the most critical time — port manoeuvring. The interlock is typically a pitch feedback signal from the servo system confirming zero pitch position, hardwired into the motor starter control circuit.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>8. PURIFIER — ELECTRICAL SYSTEM, VIBRATION TRIP & CRITICAL SPEED</th></tr>
  </table>
  <div class="body">8.1 Purifier Electrical Components and Starting</div>
  <div class="body">The centrifugal purifier (separator) operates at very high rotational speeds — typically 6,000 to 12,000 RPM depending on bowl size — to separate fuel or lube oil from water and sludge by centrifugal force. The high-speed rotating bowl represents a large stored kinetic energy and generates significant dynamic forces. Any imbalance at these speeds causes severe vibration that can damage the bowl, spindle bearings, and frame — potentially causing catastrophic bowl disintegration. The vibration trip is the primary protection against this.</div>
  <table class="n-table">
    <tr><th>KEY EXAM POINTS — PURIFIER ELECTRICAL</th></tr>
    <tr><td>Motor: 3-phase induction motor, typically 1.5–<span class="n-val">7.5 kW</span> for fuel oil purifier; 7.5–<span class="n-val">15 kW</span> for lube oil purifier (larger bowl) Starting: Star-delta or soft-starter — high-inertia bowl requires smooth acceleration to prevent belt/gear shock and to limit starting current during long run-up time (typically 3–8 minutes to reach operating speed) Speed sensor: Inductive proximity sensor on gear wheel or spindle — confirms bowl has reached operating speed before process valves open Vibration trip: Piezoelectric accelerometer (measures g-force) or mechanical vibration switch (spring-mass-contact type) mounted on frame — set to trip at approximately 10–12 mm/s vibration velocity Vibration trip action: Motor de-energised immediately. NO mechanical braking applied on deceleration. Bowl coasts to rest under its own friction. Seal water: Fresh water seal (paring disc system) must be maintained — prevents process liquid from reaching motor and bearings. Low seal water flow = trip. Water transducer: Conductivity or density sensor in water discharge — detects separation quality, controls desludging (ejection) cycle timing Motor protection: Standard thermal overload + phase failure relay + motor protection relay. Also: belt drive — belt slip alarm or belt break detection on some designs.</td></tr>
  </table>
  <div class="body">8.2 Vibration Trip — Causes, Critical Speed, and Restart Procedure</div>
  <div class="body">The vibration trip is the most commonly asked purifier topic in MMD orals. The examiner wants to know: what causes vibration, what is critical speed, why is no brake applied on shutdown, and the correct restart procedure.</div>
  <table class="n-table">
    <tr><th>VIBRATION TRIP — CAUSES (Must Know All)</th></tr>
    <tr><td>Bowl imbalance — most common: uneven sludge accumulation on bowl wall (asymmetric deposits). Also: bowl incorrectly reassembled after maintenance (disc stack not properly seated, locking ring not fully torqued, missing separator disc). Worn spindle bearings: main vertical spindle bearings (upper and lower) allow lateral play. At high speed, lateral movement manifests as vibration. Regular bearing replacement is mandatory PMS item. Incorrect disc spacing: damaged, missing, or incorrectly placed disc spacing rings cause uneven disc loading and mass distribution in the stack. Operating at critical (resonant) speed: every rotating bowl has a natural resonant frequency determined by bowl mass and bearing stiffness. Passing through this speed during run-up or coast-down causes resonant vibration. This is NORMAL and expected — the bowl must pass through quickly during acceleration. Foreign objects in bowl: grit, carbon particles, or metal fragments lodged against bowl wall create localised imbalance. Excessive feed rate: feeding too much sludge-laden oil too fast — sludge builds up asymmetrically before ejection cycle runs.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>STEP-BY-STEP — PURIFIER VIBRATION TRIP RESPONSE & RESTART</th></tr>
    <tr><td>Step 1: VIBRATION TRIP ACTIVATES — motor de-energises immediately. Do NOT attempt immediate restart. Do NOT apply mechanical brake — braking a high-speed imbalanced bowl worsens the vibration forces and risks structural damage to spindle and frame. Step 2: ALLOW COAST-DOWN — bowl decelerates slowly under its own bearing friction. During coast-down, bowl WILL pass through its critical (resonant) speed — some vibration is NORMAL during this phase. This is NOT the same as the fault-induced vibration that caused the trip. Step 3: WAIT FOR FULL STOP — confirm bowl has completely stopped (zero speed reading on tachometer or proximity sensor output is steady). This may take 20–40 minutes for large bowls. Step 4: OPEN AND INSPECT — remove top cover, open bowl. Check: disc stack assembly and seating, all separator disc spacers present and correctly positioned, locking ring torque, bowl wall for heavy or asymmetric sludge deposits. Clean bowl thoroughly if sludge fouled. Step 5: CHECK BEARINGS — feel for roughness by hand-spinning spindle. Check bearing clearance. Replace if in doubt — spindle bearings are high-wear items. Step 6: REASSEMBLE CAREFULLY — follow manufacturer's assembly sequence exactly. Tighten locking ring to specified torque. Verify all parts are correctly seated before closing. Step 7: TEST RUN — restart and observe during acceleration phase. Monitor vibration indicator. If vibration is within normal range at operating speed, return to service. If vibration high again: bowl requires workshop balancing. Step 8: LOG — record trip event, cause found, action taken. Report to Chief Engineer.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>What causes vibration trip on a purifier?</td><td>The most common cause is bowl imbalance — uneven distribution of mass in the rotating bowl. This occurs when sludge accumulates asymmetrically on the bowl wall between ejection cycles, or when the bowl is incorrectly reassembled after maintenance (disc not properly seated, spacer ring missing, locking ring not torqued correctly). Other causes include: worn vertical spindle bearings that allow lateral movement of the bowl at high speed; incorrect disc spacing due to damaged spacer rings; foreign objects (grit, metal particles) lodged against the bowl wall; and operating the machine under excessive feed rate causing rapid uneven sludge build-up. Normal critical speed passage during run-up and coast-down produces temporary vibration that should not be confused with a fault-induced trip.</td></tr>
    <tr><td>Why must no brake be applied when a purifier vibration trips?</td><td>When a vibration trip occurs, the bowl is already vibrating excessively due to imbalance at high speed. Applying a mechanical brake to an imbalanced rotating bowl at high speed dramatically increases the dynamic forces on the spindle, bearings, and frame. The braking torque, combined with the imbalance forces, can cause the spindle to deflect, the bearings to fail, or in extreme cases the bowl to disintegrate — a catastrophic failure that releases heavy metal fragments at high velocity. The correct action is to allow the bowl to decelerate naturally under its own bearing friction, even though this takes a long time (20–40 minutes for large bowls). During coast-down, the bowl will pass through its resonant (critical) speed, causing a brief increase in vibration — this is normal and expected, and should not cause concern or prompt any intervention.</td></tr>
    <tr><td>What is critical speed in a purifier?</td><td>Critical speed (resonant speed) is the rotational speed at which the rotating frequency of the bowl matches the natural frequency of the spindle-bearing system. At this speed, even small imbalance forces are amplified by resonance, producing large vibration amplitudes. For a typical purifier, the critical speed is at approximately 20–40% of the operating speed — well below the normal running speed. During run-up, the bowl accelerates through this critical speed zone as quickly as possible — the electric motor provides the driving torque to push through it rapidly. During coast-down after a stop or trip, the bowl passes through critical speed again as it decelerates — this produces a brief burst of vibration that is completely normal and expected. The vibration trip setpoint is designed to be above the amplitude seen during normal critical speed passage, so it should not cause spurious trips during normal coast-down.</td></tr>
    <tr><td>What electrical checks do you do before starting a purifier?</td><td>Before starting a purifier: (1) Check motor insulation resistance (megger) if machine has been idle for an extended period — stator winding should read above 1 MΩ for <span class="n-val">440V</span> motor. (2) Check motor protection relay settings — overload, phase failure. (3) Verify control supply fuses and MCBs healthy. (4) Confirm seal water supply is connected and flowing — check flow indicator. (5) Check bowl speed sensor (proximity switch) alignment and air gap — should be 1–2 mm from gear tooth. (6) Confirm vibration switch or accelerometer is connected and alarm system is not inhibited. (7) Check that bowl is correctly assembled and locking ring is torqued. (8) Confirm heating system (steam or electric) is working — fuel oil must be at correct viscosity before feeding to purifier. (9) Check water transducer for cleanliness. (10) Verify bowl ejection system (operating water supply) is available.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>9. REFRIGERATION — LP/HP CUTOUTS, OIL DIFFERENTIAL & ELECTRICAL PROTECTION</th></tr>
  </table>
  <div class="body">Refrigeration compressors protect the crew's food supplies and temperature-sensitive cargo. They operate continuously and are relatively unattended, making robust electrical protection essential. The two primary pressure protection devices are the Low Pressure (LP) cutout and the High Pressure (HP) cutout. Their difference — particularly why LP resets automatically and HP requires manual reset — is a favourite surveyor question.</div>
  <table class="n-table">
    <tr><th>KEY EXAM POINTS — LP/HP CUTOUTS</th></tr>
    <tr><td>LP cutout: Fitted on SUCTION side of compressor. Trips when suction pressure falls BELOW setpoint. Setpoint typically -0.3 to +<span class="n-val">0.5 bar</span> gauge depending on refrigerant type and application. AUTO-RESET — resets and allows restart when suction pressure recovers. HP cutout: Fitted on DISCHARGE side of compressor. Trips when discharge pressure EXCEEDS setpoint. Setpoint typically 18–<span class="n-val">24 bar</span> gauge for R404A, 14–<span class="n-val">16 bar</span> for R134a. MANUAL RESET — must be physically reset at the compressor control panel. Why LP = auto reset: Low suction pressure is often transient and self-correcting — e.g. during defrost cycle the evaporator is isolated, suction pressure drops, LP trips. When defrost ends and evaporator reconnects, suction pressure recovers and compressor can restart automatically without operator intervention. Why HP = manual reset: High discharge pressure indicates a persistent fault that will NOT self-correct — condenser fouled, cooling water flow restricted, non-condensable gas in system. Auto-reset would allow compressor to restart against the same high pressure repeatedly, risking: compressor valve damage, PRV (pressure relief valve) operation, refrigerant release, compressor burnout. Oil differential pressure cutout: Measures difference between crankcase oil pump discharge pressure and suction (crankcase) pressure. Must be minimum 1.4–<span class="n-val">1.8 bar</span> differential. TIME DELAY of 30–90 seconds on start — allows oil pressure to build before cutout evaluates. Immediate cut on pressure loss during run. Refrigerant type: MARPOL Annex VI — CFCs (R11, R12) banned. HCFCs (R22) being phased out. HFCs (R134a, R404A, R410A) current standard. Natural refrigerants (R717 ammonia, R744 CO2) emerging.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>Parameter</th><th>LP Cutout (Low Pressure)</th><th>HP Cutout (High Pressure)</th></tr>
    <tr><td>Location in circuit</td><td>Suction side (low pressure side)</td><td>Discharge side (high pressure side)</td></tr>
    <tr><td>Trip condition</td><td>Pressure FALLS below setpoint</td><td>Pressure RISES above setpoint</td></tr>
    <tr><td>Typical setpoint (R404A)</td><td>−0.3 to +<span class="n-val">0.5 bar</span> gauge</td><td>18–<span class="n-val">22 bar</span> gauge</td></tr>
    <tr><td>Reset type</td><td>AUTOMATIC — self-resets when pressure recovers</td><td>MANUAL — physical reset button at panel only</td></tr>
    <tr><td>Common causes</td><td>Low refrigerant charge, blocked evaporator, TEV stuck closed, defrost cycle isolation</td><td>Fouled condenser, high sea temperature, non-condensable gas, condenser water pump failure</td></tr>
    <tr><td>Risk if protection absent</td><td>Compressor operates in vacuum → liquid slugging, oil loss from crankcase, motor overload</td><td>Compressor valve damage, PRV operation, refrigerant release, system overpressure</td></tr>
    <tr><td>During normal defrost</td><td>LP trips — NORMAL and expected — auto-resets when defrost ends</td><td>Should not trip — if HP trips during defrost, investigate condenser cooling</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>Difference between LP and HP cutout — which resets automatically and why?</td><td>The LP (low pressure) cutout is fitted on the suction side and trips when suction pressure falls below the setpoint — indicating low refrigerant charge, blocked evaporator, or closed suction valve. The LP cutout is automatic reset because low suction pressure is often transient and self-correcting. The most common reason is the defrost cycle: during defrost, the evaporator is electrically heated and isolated from the refrigerant circuit, causing suction pressure to drop and trip the LP cutout. When the defrost cycle ends and the evaporator reconnects, suction pressure recovers and the compressor restarts automatically. The HP (high pressure) cutout is on the discharge side and trips when discharge pressure exceeds the setpoint — indicating condenser fouling, loss of cooling water, or non-condensable gases. HP cutout is manual reset because these causes are persistent faults that will not self-correct. Auto-reset would allow the compressor to repeatedly restart against the high head pressure, risking compressor valve damage or PRV operation.</td></tr>
    <tr><td>What is the oil differential pressure cutout on a reciprocating refrigeration compressor?</td><td>The oil differential pressure cutout (ODPC) protects the compressor crankshaft bearings against loss of lubrication. It measures the pressure difference between the oil pump discharge (forced lubrication pressure) and the crankcase pressure (suction pressure). If this differential falls below the setpoint (typically 1.4–<span class="n-val">1.8 bar</span>), it indicates the oil pump is not maintaining sufficient lubrication pressure to the bearings, and the compressor trips to prevent bearing failure. On startup, there is a deliberate time delay of 30–90 seconds before the ODPC begins evaluating the pressure — this is because the oil pump takes time to prime and build pressure from cold start. Without this delay, the compressor would trip on every start. During running, if the differential drops below setpoint (oil pump failure, blocked oil filter, excessive bearing clearance), the trip is immediate with no delay. The ODPC is a distinct circuit from the LP and HP cutouts and uses a differential pressure switch rather than a gauge pressure switch.</td></tr>
    <tr><td>What causes HP cutout to trip repeatedly?</td><td>Repeated HP trips indicate a persistent cause of high discharge pressure. The most common causes in order of frequency are: (1) Condenser fouling — seawater or freshwater condenser tubes fouled with scale, marine growth, or biofilm — reduced heat transfer increases head pressure. Remedy: clean condenser tubes. (2) Cooling water flow reduced — condenser cooling water pump fault, sea chest partially blocked, cooling water valve partially closed. Check flow and pump operation. (3) Non-condensable gas in system — air or nitrogen dissolved in refrigerant comes out of solution at high pressure side, accumulates in condenser, reduces effective condensing surface area. Remedy: purge non-condensables from condenser top. (4) High sea temperature — in tropical waters, condensing pressure rises with seawater temperature. May require reducing cargo or provision room set temperatures slightly. (5) Overcharge — too much refrigerant in system floods condenser. Check refrigerant charge level. Before each manual reset, identify and rectify the cause.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>10. AUTO-TENSION MOORING WINCH — ELECTRICAL CONTROL PRINCIPLE</th></tr>
  </table>
  <div class="body">An auto-tension mooring winch automatically maintains a preset rope tension during port operations as the vessel moves due to tidal rise and fall, loading/discharging draft changes, or swell. Without auto-tension, mooring ropes would either go dangerously slack (allowing vessel to drift) or become over-tight (risk of parting). The electrical control system uses torque control rather than position or speed control to achieve this.</div>
  <table class="n-table">
    <tr><th>KEY EXAM POINTS — AUTO-TENSION WINCH</th></tr>
    <tr><td>Operating mode: TORQUE CONTROL — the motor drive is set to maintain a constant output torque corresponding to the desired rope tension. The motor speed is whatever is needed to maintain that torque — the system is not trying to reach a position or maintain a speed. Pays out: If rope tension RISES above set tension (e.g. tide falling, vessel dropping) → drive control allows motor to run in reverse (pay out) just fast enough to relieve the excess tension — holds tension at setpoint. Heaves in: If rope tension FALLS below set tension (e.g. tide rising, vessel lifting) → motor drives in heave direction to take up slack → holds tension at setpoint. Drive type: Ward-Leonard (older vessels) or modern IGBT variable speed drive (VSD) with torque control mode. VSD uses torque current reference rather than speed reference. Tension measurement: Load cell on fairlead or mooring head gives tension feedback, OR inferred from motor torque current (motor current proportional to torque proportional to tension in rope). Upper limit switch: Prevents over-haul (drum emptied). Lower limit switch: prevents over-pay-out. Both are absolute limits that override auto-tension. Maximum tension limit: Programmed maximum torque in drive. If tension rises above maximum (e.g. unexpected surge), drive allows pay-out rather than holding — prevents rope snap. Mechanical backup: Friction slip clutch between motor and drum provides final mechanical overload protection — slips at preset torque if electrical system fails or exceeds maximum. Brake: EM spring-applied brake holds rope when motor is de-energised. Auto-tension mode: motor continuously energised maintaining tension — brake not engaged during operation.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>How does an auto-tension mooring winch work electrically?</td><td>An auto-tension mooring winch uses a torque-controlled variable speed drive. The operator sets the desired line tension (e.g. 5 tonnes) as a torque setpoint on the drive. The drive runs the motor in torque control mode — maintaining exactly the motor torque corresponding to the set tension. If the vessel rises on the tide and the rope goes slack, the tension (and therefore motor torque) falls below the setpoint — the drive commands the motor to heave in at whatever speed is needed to restore the tension to the setpoint. Conversely, if the vessel drops and the rope tightens, tension rises above the setpoint — the drive allows the motor to pay out, relieving the excess tension. The system continuously balances rope tension within the set band without any operator intervention, day and night, throughout the port stay.</td></tr>
    <tr><td>What protects against rope snap on an auto-tension winch?</td><td>Multiple layers of protection prevent rope snap on an auto-tension winch. The primary protection is the maximum torque limit programmed into the variable speed drive — if rope tension exceeds this maximum (due to an unexpected swell, tug movement, or surge), the drive allows the motor to pay out rope rather than resist, preventing the rope from reaching breaking load. A mechanical friction slip clutch between the motor shaft and the winch drum provides a secondary backup — it slips at a fixed preset torque regardless of electrical system state. Lower limit switches on the drum prevent the drum from emptying completely (paying out all rope). A load cell on the mooring head or fairlead provides direct tension measurement for the most accurate control — alternatively, motor torque current is used as an indirect tension indicator. The combination of electrical torque limiting, slip clutch, and limit switches provides a robust multi-layer protection system.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>11. MAIN ENGINE — SLOW-DOWN vs TRIP, OVERSPEED PROTECTION</th></tr>
  </table>
  <div class="body">11.1 Slow-Down vs Shutdown — Comparison</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>SLOW-DOWN</th><th>SHUTDOWN (Emergency Trip)</th></tr>
    <tr><td>Action</td><td>Reduces engine RPM to preset safe speed (typically 40-60% of rated)</td><td>Stops engine completely — fuel cut off</td></tr>
    <tr><td>Purpose</td><td>Allow continued navigation while investigating fault</td><td>Prevent catastrophic mechanical damage</td></tr>
    <tr><td>Bridge override</td><td>CAN be overridden by bridge (Dead Slow ahead or similar)</td><td>Some can be overridden in extremis — alarm given</td></tr>
    <tr><td>Triggers</td><td>High bearing temp (><span class="n-val">80°C</span> alarm, ><span class="n-val">90°C</span> slow-down), high exhaust temp, high scavenge temp, high coolant temp</td><td>Low lube oil pressure (<<span class="n-val">2.5 bar</span>), OMD high mist, overspeed (>115% RPM), manual E-stop</td></tr>
    <tr><td>Recovery</td><td>Investigate cause, rectify, increase speed when safe</td><td>Full stop — investigate before restart — minimum cool-down time</td></tr>
    <tr><td>SOLAS/Class requirement</td><td>Required on vessels with automatic bridge/UMS</td><td>Required on all vessels regardless of size</td></tr>
  </table>
  <div class="body">11.2 Overspeed Trip — Principle and Testing</div>
  <div class="body">The overspeed trip is an independent safety device that shuts down the engine if speed exceeds 10–15% above rated RPM. It is completely independent of the governor and electronic control system — if the governor fails and allows the engine to accelerate uncontrolled, the overspeed trip provides the last line of defence against engine destruction. Connecting rods, crankshaft, and turbocharger impeller blades can fail at overspeed with catastrophic results.</div>
  <table class="n-table">
    <tr><th>KEY EXAM POINTS — OVERSPEED TRIP</th></tr>
    <tr><td>Trip setpoint: 10–15% above rated RPM. Example: 120 RPM rated → overspeed trip at 132–138 RPM Mechanical-hydraulic type (Woodward / Regulateurs Europa): Flyweights on camshaft gear — at overspeed, centrifugal force exceeds spring → weights fly out → trip latch releases → fuel cut-off lever activates → fuel rack to zero. Air shut-off valve closes simultaneously (4-stroke). Electronic type: Tachometer pickup (proximity sensor on flywheel teeth) → speed relay → if calculated RPM exceeds setpoint → ECU signals fuel shutoff solenoid AND air start valve isolation AND bridge alarm simultaneously Independence: MUST be independent of the main governor system. Even if governor is failed, overspeed trip must operate. Tested annually to verify independence. Test procedure: ENGINE MUST BE UNLOADED — in port at anchor, generator disconnected. Slowly increase fuel manually by bypassing governor — observe tachometer — trip must activate at correct RPM. NEVER test on load — vessel would lose power. After trip: Engine stopped, must be restarted manually. Inspect for damage to turbocharger, connecting rods, main bearings before restart. Investigate cause of overspeed (governor failure, sudden load loss).</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>How does an overspeed trip work and how is it tested?</td><td>The overspeed trip is an independent device that stops the engine if speed exceeds 10–15% above rated RPM. In the mechanical-hydraulic type, flyweights are mounted on the camshaft or governor drive gear and rotate with the engine. At normal speed, spring force holds the weights inward. When speed exceeds the trip setpoint, centrifugal force overcomes the spring and the weights fly outward. This mechanical movement trips a latch that releases the fuel cutoff lever, driving the fuel rack to zero and cutting the air start valve simultaneously. In the electronic type, a proximity sensor counts flywheel teeth, and the speed relay trips a fuel shutoff solenoid if calculated RPM exceeds the setpoint. Testing must be done with the engine unloaded — in port, disconnected from propeller or with no load. The governor is manually bypassed or its reference raised gradually until the trip activates, and the trip RPM is recorded and compared to specification. Never test under load at sea.</td></tr>
    <tr><td>What are the main engine slow-down triggers and what happens on slow-down?</td><td>Main engine slow-down is triggered by: high bearing temperature (typically ><span class="n-val">90°C</span> on main or crankpin bearings measured by PT100 sensors), high exhaust gas temperature at any cylinder (indicating fuel or valve problem), high scavenge air temperature (cooler fault or fire), high jacket cooling water temperature (cooling water failure or heat exchanger fouling), and high turbocharger bearing temperature. On slow-down activation, the RPM reference to the governor is automatically reduced to a preset safe speed — typically 40–60% of maximum continuous rating. This reduces heat generation in the affected component while maintaining propulsion for navigation safety. The bridge is alarmed immediately. Unlike an emergency stop, the vessel retains manoeuvring capability during investigation. The bridge can override the slow-down to dead slow or minimum speed in genuine emergencies such as collision avoidance, but this must be logged and reported to the Chief Engineer.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>12. ADDITIONAL TOPICS — SALINOMETER, FWG, PRE-START CHECKS</th></tr>
  </table>
  <div class="body">12.1 Salinometer</div>
  <div class="body">A salinometer measures the electrical conductivity of water to determine its salt (NaCl) content in parts per million (ppm) or mg/litre. Pure distilled water has very low conductivity (~0.5 µS/cm). As dissolved salt (Na⁺ and Cl⁻ ions) increases, conductivity increases proportionally. An AC voltage is applied between two electrodes immersed in the sample — AC is used rather than DC to prevent electrolytic polarisation of the electrodes, which would change the electrode surface and give a drifting reading. The current flow is proportional to conductivity which is proportional to salinity.</div>
  <table class="n-table">
    <tr><th>KEY EXAM POINTS — SALINOMETER</th></tr>
    <tr><td>Principle: Electrical conductivity of water proportional to dissolved salt content (ppm) AC electrodes: AC prevents electrode polarisation (DC would cause electrolysis, coating electrodes with gas bubbles/deposits, giving drift) Boiler feedwater limit: Manufacturer-specific — typically <2 ppm (HT boilers), <5–10 ppm (saturated steam boilers). High salinity → scale formation (CaCO3, MgCO3) on heating surfaces → hot spots → tube failure FWG distillate limit: <5 ppm before routing to fresh water tank. Automatic divert valve opens if salinity exceeds limit — rejects contaminated water overboard. OWS monitoring: Salinometer used as indirect indicator of oil content in OWS discharge — oil-in-water reduces conductivity (oil = non-conducting). Not primary oil detection but useful cross-check. Calibration: Zero in pure distilled water (should read near 0 ppm). Span with certified NaCl standard solution of known concentration. Temperature compensation: Conductivity of water increases ~2% per °C. Modern salinometers have built-in temperature compensation circuit.</td></tr>
  </table>
  <div class="body">12.2 Fresh Water Generator — Electrical Components</div>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>What is a salinometer and where is it used on a ship?</td><td>A salinometer measures the salinity (salt content) of water by measuring its electrical conductivity. Dissolved sodium and chloride ions carry electrical current — as salt concentration increases, conductivity increases proportionally. An AC voltage is applied between two electrodes in the water sample; the resulting current is measured and displayed in ppm. AC is used rather than DC to prevent electrode polarisation. On ships, salinometers are used in three main locations: (1) Boiler feedwater monitoring — high salinity causes scale on heating surfaces leading to tube failures; limit typically 2–10 ppm depending on boiler type; (2) Fresh water generator output — distillate is monitored continuously, and if salinity exceeds 5 ppm, an automatic divert valve routes the sub-standard water overboard rather than into the fresh water tank; (3) Oily water separator output — as a supplementary check, since oil reduces conductivity. Calibration: zero with distilled water, span with certified NaCl standard solution.</td></tr>
    <tr><td>What electrical components does a fresh water generator have?</td><td>A fresh water generator (vacuum evaporator) uses main engine jacket cooling water (at 70–<span class="n-val">90°C</span>) as its heat source, operating under vacuum at approximately 45–60 mbar absolute, causing sea water to evaporate at 35–<span class="n-val">40°C</span>. Its electrical components include: (1) Vacuum pump motor (typically 0.75–<span class="n-val">1.5 kW</span>) — creates and maintains the operating vacuum; (2) Ejector pump motor — on water ejector type, circulates sea water to create vacuum via venturi effect; (3) Salinometer — continuously monitors distillate quality, controls divert valve; (4) Distillate pump motor — pumps product water to fresh water tank; (5) Flow switches — on distillate outlet, jacket water inlet/outlet, and sea water flow; (6) Level switches in shell — prevent shell flooding (high level stop) and confirm shell is dry before shutdown; (7) Temperature sensors — jacket water inlet and outlet, shell temperature; (8) Main engine load interlock — FWG cannot operate below minimum engine load (typically 40% MCR) because jacket water temperature is insufficient at low load for effective evaporation.</td></tr>
    <tr><td>What checks do you do before starting a diesel generator?</td><td>Before starting a diesel generator, the following checks are essential: (1) Lube oil level in sump — must be between min and max marks; some generators have pre-lube pumps that must be run to build oil pressure before starting; (2) Cooling water level in header tank and jacket — check for leaks; (3) Fuel oil supply pressure and temperature — for HFO generators, fuel must be at injection viscosity; confirm service tank level; (4) AVR (Automatic Voltage Regulator) supply healthy — control supply fuse or MCB on; (5) Governor control supply energised — check <span class="n-val">24V</span> DC or compressed air governor supply; (6) Generator circuit breaker open — generator must NEVER be started on load; (7) Starting medium available — air start pressure above minimum (typically <span class="n-val">25 bar</span> for air start engines); (8) Insulation resistance — if machine has been idle for extended period or in damp conditions, megger stator winding before starting (minimum 1 MΩ for <span class="n-val">440V</span>); (9) No earth faults on busbar — check earth fault relay on switchboard; (10) All local/remote selector switches in correct position for intended starting method.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>13. QUICK REVISION — SHIP MACHINERY (ELECTRICAL SIDE)</th></tr>
  </table>
  <table class="n-table">
    <tr><th>TOPIC</th><th>FREQUENCY & KEY POINTS</th></tr>
    <tr><td>Oil Mist Detector (OMD)</td><td>⭐⭐⭐⭐⭐ Photocell light extinction. Reference tube = lamp aging compensation. Alarm 2.5 mg/L. SOLAS ><span class="n-val">2250 kW</span> or >300 mm bore. Calibration: zero (clean air) + span (certified gas). ON ALARM: do NOT open crankcase — wait <span class="n-val">20 min</span> after stop.</td></tr>
    <tr><td>Viscotherm</td><td>⭐⭐⭐⭐⭐ Rotating spindle — motor current ∝ torque ∝ viscosity. Target 10–14 cSt (ME), 14–20 cSt (AE). PI controller. Steam valve FAIL CLOSE. Why not temp control: different HFO grades — same temp = different viscosity.</td></tr>
    <tr><td>Dashpot</td><td>⭐⭐⭐⭐ Fluid through orifice = time delay = damping. Governor hunting prevention — damps fuel rack movement. ACB inverse-time protection — high current = fast trip, small overload = long delay. Orifice size = time delay.</td></tr>
    <tr><td>Steering Gear Electrical</td><td>⭐⭐⭐⭐⭐ Follow-up (hunting gear feedback cancels solenoid). NFU = no feedback, lever held. Phase failure relay MANDATORY. Overload = ALARM ONLY — NEVER TRIP (SOLAS). Running alarm if continuous motor run. Two power units >10,000 GT.</td></tr>
    <tr><td>Boiler Trips & BMS</td><td>⭐⭐⭐⭐⭐ Low-low water level = IMMEDIATE trip (no delay). Flame failure = LOCKOUT, manual reset. UV scanner — UV specific to flame not refractory. Pre-purge 3–5 air changes MANDATORY. HP steam trip = manual reset. FD fan fail = trip.</td></tr>
    <tr><td>EM Brake (Crane)</td><td>⭐⭐⭐⭐ SPRING ON, ELECTRICALLY OFF. Fail-safe. Air gap 0.2–0.5 mm — too large = incomplete release = drag. Coil open circuit = brake always ON, motor strains, OLR trips. Annual air gap check + shim.</td></tr>
    <tr><td>Bow Thruster Interlocks</td><td>⭐⭐⭐⭐⭐ Zero pitch (CPP). Tunnel hatch closed. LO pressure. Cooling water flow. Shaft earth brush. VFD ready. Generator capacity (PMS check). Starting method: zero pitch DOL then pitch applied.</td></tr>
    <tr><td>Purifier Vibration Trip</td><td>⭐⭐⭐⭐⭐ Causes: bowl imbalance (most common), worn bearings, disc stack fault, foreign object. NO BRAKE on deceleration. Critical speed = normal during coast-down — not a fault. Full coast-down 20–<span class="n-val">40 min</span> before opening bowl.</td></tr>
    <tr><td>LP/HP Cutouts (Refrig.)</td><td>⭐⭐⭐⭐⭐ LP = suction side, pressure LOW, AUTO reset (transient cause). HP = discharge side, pressure HIGH, MANUAL reset (persistent cause). Oil diff. cutout: 30–<span class="n-val">90 sec</span> delay on start. HP trips: condenser fouled, non-condensables, high sea temp.</td></tr>
    <tr><td>Auto-Tension Winch</td><td>⭐⭐⭐⭐ TORQUE control mode — not speed, not position. Pays out if tight, heaves in if slack. Max torque limit prevents rope snap. Slip clutch = mechanical backup. Load cell or motor current = tension feedback.</td></tr>
    <tr><td>Overspeed Trip</td><td>⭐⭐⭐⭐ 10–15% above rated RPM. INDEPENDENT of governor — last defence. Flyweight (mechanical) or proximity sensor (electronic). Test: UNLOADED only in port. After trip: inspect before restart.</td></tr>
    <tr><td>Salinometer</td><td>⭐⭐⭐⭐ Conductivity ∝ salinity. AC electrodes (prevents polarisation). Boiler FW <2–10 ppm. FWG distillate <5 ppm — divert valve auto-opens if exceeded. Temperature compensation built in.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>FINAL MEMORY AID — SHIP MACHINERY ELECTRICAL</th></tr>
    <tr><td>OMD: PHOTO cell | LIGHT extinction | REFERENCE tube = lamp compensation | 2.5 mg/L alarm | Wait <span class="n-val">20 min</span> before opening crankcase | SOLAS ><span class="n-val">2250 kW</span> VISCOTHERM: SPINDLE current ∝ viscosity | 10-14 cSt ME | 14-20 cSt AE | PI controller | FAIL CLOSE steam valve | Different grades = different temp needed = viscosity control wins DASHPOT: FLUID + ORIFICE = delay | Governor hunting = cure with dashpot | ACB inverse-time = high current fast trip | Orifice size = time constant STEERING: FU = hunting gear feedback cancels solenoid | NFU = no feedback, lever held | Phase fail relay MANDATORY | Overload = ALARM ONLY never trip (SOLAS) | 2 units >10k GT BOILER: LOW-LOW water = IMMEDIATE no delay | FLAME FAIL = lockout manual reset | UV scanner = UV specific to flame | PRE-PURGE = 3-5 air changes MANDATORY | HP steam = manual reset EM BRAKE: SPRING ON, COIL OFF | Air gap 0.2-0.5 mm | Too big gap = drag | Coil open = motor runs, load stuck, OLR trips | Fail-safe: power off = brake on BOW THRUSTER: ZERO PITCH first | HATCH closed | LO pressure | CW flow | SHAFT EARTH | VFD ready | GEN capacity | NFU then pitch PURIFIER: IMBALANCE = most common | NO BRAKE on deceleration | CRITICAL speed = normal during coastdown | <span class="n-val">20-40 min</span> full stop before bowl open | Check disc stack + bearings LP/HP: LP = suction LOW pressure AUTO reset (transient) | HP = discharge HIGH pressure MANUAL reset (persistent) | Oil diff = <span class="n-val">30-90 sec</span> delay | HP causes: condenser fouled, non-condensables AUTO-TENSION: TORQUE control | Pays out if tight | Heaves in if slack | MAX torque limit = rope snap prevention | SLIP CLUTCH = mechanical backup OVERSPEED: 10-15% above rated | INDEPENDENT of governor | FLYWEIGHT or PROXIMITY sensor | Test UNLOADED in port | Inspect before restart</td></tr>
  </table>
  <div class="body">────────────────────────────────────────────────────────────</div>
  <div class="n-h2">GAP ADDITIONS — v2.1 (Added May 2026)</div>
  <div class="body">DEAD SHIP CONDITION / BLACKOUT RECOVERY — Manual Restart Sequence</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Sanjib, Deswal, Vishwanathan — most critical gap identified</div></div>
  <div class="body">This is DIFFERENT from automatic blackout recovery. Dead ship = no power, no compressed air, no running machinery. Manual process only.</div>
  <div class="body">Step 1: Check all necessary valves and lines are open (fuel, cooling water, lube oil to AE).</div>
  <div class="body">Step 2: Start emergency generator from emergency switchboard (battery start).</div>
  <div class="body">Step 3: Using emergency power, start emergency air compressor to build air pressure.</div>
  <div class="body">Step 4: Once main air bottles at sufficient pressure, attempt to start first auxiliary engine by compressed air.</div>
  <div class="body">Step 5: Check and confirm voltage, frequency, and phase rotation of AE output.</div>
  <div class="body">Step 6: Close ACB of first AE — power on main busbar. Inform bridge: 'Main power restored.'</div>
  <div class="body">Step 7: Start second AE, synchronise and parallel onto main bus.</div>
  <div class="body">Step 8: Load essential services one by one — in sequence: steering gear, bilge pumps, cooling pumps, then non-essential.</div>
  <div class="body">Step 9: Switch off emergency generator once main power confirmed stable.</div>
  <div class="body">Step 10: Restore all normal distribution — log event, notify C/E and bridge, investigate root cause.</div>
  <div class="body">IGBT in cycloconverter note: If thruster uses cycloconverter drive — cannot restart until main power fully restored and drive re-initialised.</div>
  <div class="body">Boiler Electrical Alarms and Troubleshoot — ETO Role</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Sanjib, Sudhir — 'what is your role in boiler fault?'</div></div>
  <div class="body">ETO owns: All sensors (PT100 temperature sensors, pressure transmitters, level gauges/DP transmitters), solenoid valves, ignition transformer, FD fan motor, burner management controller (PLC/BMS).</div>
  <div class="body">C/E owns: Mechanical issues — tube leaks, pump failures, combustion tuning.</div>
  <div class="body">Flame failure alarm: Check UV/IR flame detector (clean lens), check ignition transformer output voltage, check solenoid valve energises (test with <span class="n-val">24V</span>), check BMS controller output signal.</div>
  <div class="body">High/low water level alarm: Check DP transmitter calibration, check reference leg isolation valve open, check drain valve closed, compare with sight glass.</div>
  <div class="body">FD fan motor fault: Check motor overload relay reset, check thermistor resistance (normal: 100–<span class="n-val">200Ω</span>, tripped: >3kΩ), check starter contactors, check duct pressure switch.</div>
  <div class="body">BMS power fault: Check <span class="n-val">24V</span> DC supply rail, check MCB/fuse, check supply cable earth fault.</div>
  <div class="body">Boiler FD fan motor vs normal motor contactor: FD fan has high inertia → uses star-delta starter or soft starter. Normal motor may use DOL. Key difference for exam.</div>
  <div class="body">Turbocharger RPM Sensor — Type and Working</div>
  <div class="body">Type: Magnetic pickup (variable reluctance) sensor — most common. Some high-speed TCs use eddy current or optical sensors.</div>
  <div class="body">Working: Ferromagnetic toothed wheel (phonic wheel) on TC shaft rotates past sensor tip. Each tooth passing changes magnetic flux through sensor coil — induces voltage pulse. Frequency of pulses = RPM of TC.</div>
  <div class="body">Calibration: Count teeth × pulses per tooth × conversion factor = RPM. Usually preconfigured in tachometer.</div>
  <div class="body">Faults: Oil on sensor tip → weak signal. Air gap too large (>2mm) → no signal. Broken tooth → erratic RPM. Cable fault → zero reading. Clean tip, check gap during maintenance.</div>
  <div class="body">Anti-Heeling System — ETO Role</div>
  <div class="body">Purpose: Transfers ballast between port and starboard tanks to maintain ship upright during one-sided cargo loading/discharging.</div>
  <div class="body">ETO controls: Motor-driven centrifugal pump (transfers ballast). Remote valve actuators on cross-flooding valves. Heel angle sensor (inclinometer) input to control panel.</div>
  <div class="body">Safeties ETO must know: Pump motor overload protection, tank overfill alarm, remote stop from bridge and CCR, limit switches on valves.</div>
  <div class="body">Monitoring: Check heel angle display matches inclinometer reading. Check transfer pump current for correct value. Verify tank level sensors reading correctly.</div>
  <div class="body">TEV — Thermostatic Expansion Valve (Reefer System)</div>
  <div class="body">Function: Regulates refrigerant flow into evaporator to maintain constant superheat at evaporator outlet.</div>
  <div class="body">Working: Sensor bulb on suction line detects superheat temperature. Bellows transmit pressure to valve needle. High superheat → valve opens more → more refrigerant flow → superheat reduced. Low superheat → valve closes → less flow.</div>
  <div class="body">Typical superheat setting: 4–<span class="n-val">6°C</span> above saturation temperature at evaporator pressure.</div>
  <div class="body">ETO check: Measure suction line temperature and suction pressure → calculate actual superheat → compare to set value. Adjust TEV if needed.</div>
  <div class="body">Mooring Winch Autotension — Working and ETO Maintenance</div>
  <div class="body">Working: Motor drives drum. Load cell or current sensing detects rope tension. When tension > setpoint → motor reverses/brakes → pays out rope. When tension < setpoint → motor hauls in. Maintains constant tension automatically during tidal/current changes.</div>
  <div class="body">ETO maintenance: Check motor IR, check brake condition (air gap of electromagnetic brake), check limit switches (inboard/outboard), check hydraulic pressure if hydraulic drive type, verify load cell calibration.</div>
  <div class="body">Autotension interlock: Must be manually cancelled before departure — if left in auto, winch will keep paying out rope as ship moves away.</div>
  <div class="body">Lube Oil Low Pressure Alarm — ETO Action</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> 'Generators running, suddenly LO low pressure alarm — ETO action?'</div></div>
  <div class="body">Step 1: Do NOT immediately stop engine. Inform C/E and bridge.</div>
  <div class="body">Step 2: Check local LO pressure gauge — confirm alarm is genuine (not sensor fault).</div>
  <div class="body">Step 3: Check LO pump running (listen, check ammeter, check local pressure).</div>
  <div class="body">Step 4: Check LO sump level — if low, immediate risk of bearing damage.</div>
  <div class="body">Step 5: Check LO pump inlet strainer — blocked strainer = low pressure.</div>
  <div class="body">Step 6: If pressure keeps dropping → prepare to switch to manual emergency stop to prevent bearing damage. Log all actions.</div>
  <div class="body">ETO scope: Check LO pressure sensor calibration, check LO level sensor, check pump motor running (electrical side). C/E handles mechanical cause.</div>
  <div class="body">────────────────────────────────────────────────────────────</div>
  <div class="body">ADDITIONAL GAP ADDITIONS — v2.2 (Added May 2026)</div>
  <div class="body">Crane Safeties — ALL Types (ER Crane + Deck Crane)</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Deswal, Gopikrishna — 'all crane safeties' asked frequently</div></div>

  <div class="n-h1" id="s-3">MECHANICAL SAFETIES:</div>

  <div class="n-h1" id="s-4">1. Overload/Overhoist limit switch — trips hoist motor when SWL exceeded or hook reaches top</div>

  <div class="n-h1" id="s-5">2. Slack rope safety — trips if wire becomes slack (rope jumps off drum)</div>

  <div class="n-h1" id="s-6">3. Collision safety (anti-collision) — prevents crane jibs colliding on multi-crane ships</div>

  <div class="n-h1" id="s-7">4. Anemometer cut-out — trips crane if wind speed exceeds safe limit</div>

  <div class="n-h1" id="s-8">5. Level luffing — keeps hook at constant height while jib moves in/out</div>

  <div class="n-h1" id="s-9">ELECTRICAL SAFETIES:</div>

  <div class="n-h1" id="s-10">6. Electromagnetic brake — fail-safe (spring-applied, electrically released). If power fails → brake applies automatically. This is why crane holds load during power cut.</div>

  <div class="n-h1" id="s-11">7. Motor overload relay — protects hoist/slew/travel motors</div>

  <div class="n-h1" id="s-12">8. Limit switches — travel limits for slewing, luffing, hoisting in all directions</div>

  <div class="n-h1" id="s-13">9. Interlocks — cannot operate hoist and slew simultaneously in some cranes</div>

  <div class="n-h1" id="s-14">10. Emergency stop — accessible from crane cab and ground level</div>
  <div class="body">Exam Q: 'Load hoisted mid-air, crane stopped, power cut — what holds the load?' → Electromagnetic brake — spring-applied, fail-safe.</div>
  <div class="body">Steering Gear — Electrical Alarms and Trips</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Sanjib, Gopikrishna, Sudhir — very commonly asked</div></div>
  <div class="body">ALARMS (warning only — no trip):</div>

  <div class="n-h1" id="s-15">1. Hydraulic oil low level alarm</div>

  <div class="n-h1" id="s-16">2. Hydraulic oil high temperature alarm</div>

  <div class="n-h1" id="s-17">3. Phase failure alarm (loss of one phase to motor)</div>

  <div class="n-h1" id="s-18">4. Pump motor overload alarm — before trip</div>

  <div class="n-h1" id="s-19">5. Control power failure alarm</div>
  <div class="body">TRIPS (automatic shutdown):</div>

  <div class="n-h1" id="s-20">6. Motor overload trip — sustained overcurrent</div>

  <div class="n-h1" id="s-21">7. Hydraulic oil high pressure trip — relief valve plus electrical trip</div>

  <div class="n-h1" id="s-22">8. Rudder hunting trip — rudder oscillates continuously without reaching setpoint → NFU trip</div>

  <div class="n-h1" id="s-23">9. Power unit isolation trip — emergency shutdown from bridge</div>
  <div class="body">SOLAS requirement: Steering gear must have independent power from emergency source. Two separate power circuits. Audible alarm on bridge for any fault.</div>
  <div class="body">How to RESET hydraulic lock: Switch to NFU (Non-Follow-Up) control. Move tiller manually. Identify cause of hunting. Reset trip. Return to FU (Follow-Up) autopilot mode.</div>
  <div class="body">Governor Types — Which Used Where</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Kamath, Wad — 'types of governors? which type on main engine?'</div></div>

  <div class="n-h1" id="s-24">1. MECHANICAL (Centrifugal / Flyball) governor: Rotating flyweights driven by engine. As speed increases → flyweights fly out → fuel rack reduces. Simple, robust, no external power. Used on older main engines and some AEs.</div>

  <div class="n-h1" id="s-25">2. HYDRAULIC-MECHANICAL (Woodward type): Flyball + hydraulic servo amplifier. More precise than pure mechanical. Used on most diesel generators onboard.</div>

  <div class="n-h1" id="s-26">3. ELECTRONIC (PID-based): Speed sensor (magnetic pickup) → electronic controller → actuator on fuel rack. Most precise. Used on modern DGs and electronically controlled main engines.</div>
  <div class="body">Main engine governor type: Most 2-stroke slow-speed diesels use hydraulic-mechanical (Woodward) or electronic governor. Modern MAN B&W/Wartsila → electronic.</div>
  <div class="body">Exam answer: 'DG typically uses hydraulic-mechanical Woodward governor. ME uses electronic governor on modern ships.'</div>
  <div class="body">Overspeed Relay Test Procedure</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Kamath, Wad — 'how do you test overspeed relay?'</div></div>
  <div class="body">Method 1 (Setpoint reduction): Slowly reduce governor speed setpoint using speed trim while engine is running → engine speed falls, overspeed relay does NOT activate (this tests governor, not overspeed relay).</div>
  <div class="body">Method 2 (Mechanical lift test — CORRECT for overspeed relay): While engine runs at governed speed → manually lift the overspeed trip lever → confirm trip activates → engine shuts down. Reset manually after test.</div>
  <div class="body">Method 3 (Electronic test where available): Press 'Overspeed test' button on governor panel → electronic unit simulates overspeed signal → confirm relay trips.</div>
  <div class="body">Why two separate systems: Governor adjusts fuel to maintain speed. Overspeed trip is a BACKUP — activates if governor fails and speed runs away. They are independent — testing one does not test the other.</div>
  <div class="body">After test: Reset trip manually. Restart engine. Record test in log with date, time, speed at which trip activated, and who witnessed.</div>
  <div class="body">────────────────────────────────────────────────────────────</div>
  <div class="n-h2">GAP ADDITIONS — v2.3 (Candidate Exam Experiences)</div>
  <div class="body">JCW (Jacket Cooling Water) System — Operation</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Surveyor asked ETO about JCW system — "explain JCW system and your role"</div></div>
  <div class="body">What is JCW?</div>
  <div class="body">JCW = Jacket Cooling Water. A CLOSED-LOOP fresh water system that cools the cylinder liners, cylinder heads, exhaust valve cages, and turbocharger casing of main and auxiliary diesel engines. It prevents overheating of hot parts and maintains ideal liner temperatures for efficient combustion and to prevent cold corrosion.</div>
  <div class="body">JCW System Flow Path:</div>

  <div class="n-h1" id="s-27">1. JCW PUMP (centrifugal): Circulates FW through engine jackets under pressure (typically 2–4 bar).</div>

  <div class="n-h1" id="s-28">2. ENGINE JACKETS: Water passages in cylinder liner and head castings — absorbs heat from combustion.</div>

  <div class="n-h1" id="s-29">3. FRESH WATER COOLER (FWC): Shell-and-tube heat exchanger — JCW (hot) cooled by sea water (cold side).</div>

  <div class="n-h1" id="s-30">4. THERMOSTATIC 3-WAY VALVE: Bypasses or routes through FWC to maintain correct JCW outlet temperature.</div>

  <div class="n-h1" id="s-31">5. EXPANSION TANK: Above engine — maintains system pressure head, allows thermal expansion, vents air. Contains immersion heater for pre-heating.</div>

  <div class="n-h1" id="s-32">6. PRE-HEATER: Electric immersion heater in expansion tank keeps JCW at 50–60°C while engine stopped — prevents cold-start thermal shock.</div>

  <div class="n-h1" id="s-33">7. DOSING UNIT: Adds nitrite/molybdate corrosion inhibitor — prevents liner pitting and galvanic corrosion.</div>
  <div class="body">Operating temperatures and why they matter:</div>
  <div class="body">JCW inlet to engine: ~60–<span class="n-val">70°C</span>. JCW outlet from engine: ~75–<span class="n-val">85°C</span>.</div>
  <div class="body">Too cold (<<span class="n-val">55°C</span>): Combustion gases condense on liner → sulphuric acid formed → cold corrosion of liner — very expensive damage.</div>
  <div class="body">Too hot (><span class="n-val">90°C</span>): Risk of localised boiling in cylinder head passages → hot spots → thermal cracking.</div>
  <div class="body">Correct temperature is critical — thermostatic valve maintains this automatically.</div>
  <div class="body">ETO Responsibilities:</div>

  <div class="n-h1" id="s-34">1. Immersion heater (pre-heater): Test element resistance with megger, check thermostat setpoint, verify temperature at expansion tank.</div>

  <div class="n-h1" id="s-35">2. Temperature sensors (PT100/thermocouple): Calibrate against reference thermometer, check cable integrity.</div>

  <div class="n-h1" id="s-36">3. High-temperature alarm and trip: Test with simulated signal — verify alarm activates at correct value and engine trip works.</div>

  <div class="n-h1" id="s-37">4. Low-level alarm on expansion tank: Test float switch or level sensor function.</div>

  <div class="n-h1" id="s-38">5. JCW pump motor: Scheduled megger test, bearing greasing, impeller inspection.</div>

  <div class="n-h1" id="s-39">6. Inhibitor concentration: Test monthly with kit, top up as required, record in chemical log.</div>

  <div class="n-h1" id="s-40">7. Fresh water cooler: Inspect SW side for scale/fouling, check tube plate for leaks across to JCW side.</div>
  <div class="body">Reefer Compressor — LO Pressure Sensor Measurement and Calibration</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Surveyor asked how ETO measures and calibrates the reefer compressor LO pressure sensor</div></div>
  <div class="body">Why is LO pressure monitoring critical on reefer compressor?</div>
  <div class="body">The lubricating oil pressure sensor protects compressor bearings. If LO pressure drops below minimum (typically 1.5–<span class="n-val">2 bar</span>), the compressor must trip immediately — without LO, bearings seize within minutes causing catastrophic mechanical failure and refrigerant leak. The trip is a safety-critical function.</div>
  <div class="body">Calibration procedure (electronic 4–<span class="n-val">20mA</span> transmitter):</div>

  <div class="n-h1" id="s-41">1. Permit to work — notify C/E, stop compressor, allow LO pressure to equalise to zero.</div>

  <div class="n-h1" id="s-42">2. Isolate sensor at 3-valve manifold: close PROCESS ISOLATION valve (stops live pressure). Open EQUALISING BYPASS valve to safely vent residual pressure.</div>

  <div class="n-h1" id="s-43">3. Connect calibrated reference gauge (dead-weight tester or certified digital pressure calibrator) to test tapping on manifold.</div>

  <div class="n-h1" id="s-44">4. Apply increasing test pressures in steps — 0%, 25%, 50%, 75%, 100% of sensor range.</div>

  <div class="n-h1" id="s-45">5. At each step: compare panel/DCS reading with reference gauge. Acceptable error: ±2% of full scale.</div>

  <div class="n-h1" id="s-46">6. If deviation exists: use HART communicator or trim screws to adjust zero and span.</div>

  <div class="n-h1" id="s-47">7. Test TRIP SETPOINT: Slowly reduce test pressure — note exact pressure when compressor trip alarm activates on panel.</div>

  <div class="n-h1" id="s-48">8. Verify trip setpoint matches maintenance record. If wrong: adjust via relay calibration or DCS setpoint change (with C/E approval).</div>

  <div class="n-h1" id="s-49">9. Typical setpoints: LO pressure alarm at ~2 bar, trip at ~1.5 bar.</div>

  <div class="n-h1" id="s-50">10. Restore manifold: close equalise valve, open isolation valve. Verify normal system pressure on panel.</div>

  <div class="n-h1" id="s-51">11. Document: test pressures, panel readings, deviations, setpoint confirmation, date, calibration cert reference.</div>
  <div class="body">Bilge Injection Valve — Purpose and Emergency Fire Pump Priming</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Surveyor asked about bilge injection valve — "what is it and when do you use it?"</div></div>
  <div class="body">What is the Bilge Injection Valve?</div>
  <div class="body">The bilge injection valve is a large-bore valve (100–150 mm) fitted to the SUCTION SIDE of the main sea water cooling pump, connecting the SW cooling pump suction directly to the engine room bilge. It exists for ONE purpose: emergency dewatering of the engine room when normal bilge pumps cannot cope with the rate of flooding.</div>
  <div class="body">Why it matters — comparison of capacities:</div>
  <div class="body">Dedicated bilge pump capacity: typically 10–50 m³/hr</div>
  <div class="body">Main SW cooling pump capacity: typically 200–600 m³/hr (depending on engine size)</div>
  <div class="body">In a serious flooding situation — a broken sea chest valve or large pipe fracture — only the main pump has the capacity to keep up</div>
  <div class="body">The bilge injection valve allows the main pump to switch from sea suction to bilge suction instantly</div>
  <div class="body">Precautions and procedure:</div>
  <div class="body">Valve is sealed or wired shut under normal operation — label says "EMERGENCY BILGE SUCTION — AUTHORISED USE ONLY"</div>
  <div class="body">Opening procedure posted at valve location (SOLAS II-1/Reg 35 requirement)</div>
  <div class="body">Before opening: Inform C/E and Master. Close SW cooling pump discharge to coolers (to avoid pumping bilge water through engine cooling systems).</div>
  <div class="body">After flooding controlled: Close bilge injection valve, restore SW cooling suction, reseal valve, log usage.</div>
  <div class="body">NEVER use for normal bilge pumping — it is not designed for regular use and uses the main cooling pump, which cannot simultaneously cool the engine</div>
  <div class="body">Emergency Fire Pump — Priming:</div>
  <div class="body">Emergency fire pump is typically self-priming — positive displacement (gear pump) type or jet-assisted centrifugal.</div>
  <div class="body">Located in emergency fire pump room OUTSIDE and SEPARATE from main engine room (SOLAS II-2/Reg 10).</div>
  <div class="body">Self-priming: Internal mechanism maintains liquid seal in pump body. Foot valve on suction line retains water when stopped.</div>
  <div class="body">If prime is lost (after long idle): Fill priming chamber through priming cock at top of pump casing. Use bucket or hose — prime with sea water.</div>
  <div class="body">Operational check (monthly): Start pump, open fire main valve, check discharge pressure (typically 4–<span class="n-val">5 bar</span> at fire main). Record in log.</div>
  <div class="body">Smoke Density Meter — Working Principle and ETO Maintenance</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Surveyor asked "how does a smoke density meter work?"</div></div>
  <div class="body">The smoke density meter (opacity meter) measures the density of exhaust gases from boiler or engine stacks. It serves two purposes: (1) monitoring combustion quality — black smoke means incomplete combustion and wasted fuel; and (2) MARPOL Annex VI compliance — excessive visible smoke is prohibited under Reg 14.</div>
  <div class="body">Working Principle (Optical Transmission type):</div>

  <div class="n-h1" id="s-52">1. LIGHT SOURCE: LED or halogen lamp mounted on one side of exhaust duct — projects a beam across the flue gas path.</div>

  <div class="n-h1" id="s-53">2. DETECTOR: Photodiode or photocell on opposite side — measures received light intensity.</div>

  <div class="n-h1" id="s-54">3. AIR PURGE SYSTEM: Compressed air continuously purges across lamp and detector optical windows — prevents soot deposit on lenses. Critical — without purge, readings are false high.</div>

  <div class="n-h1" id="s-55">4. OPACITY CALCULATION: Opacity % = (1 − I_received / I_reference) × 100. 0% = clear flue gas. 100% = completely opaque (black smoke). Typically alarmed above 30–40%.</div>

  <div class="n-h1" id="s-56">5. CLEAN AIR REFERENCE: Unit autozeros against clean air reading — compensates for ambient light and lens condition changes.</div>
  <div class="body">ETO Maintenance:</div>

  <div class="n-h1" id="s-57">1. Verify compressed air purge pressure and flow — this is the most common failure mode. Purge pressure typically 0.3–0.5 bar.</div>

  <div class="n-h1" id="s-58">2. Clean optical windows monthly (or as per PMS) — remove lens covers and wipe with lens tissue when purge is off.</div>

  <div class="n-h1" id="s-59">3. Calibration check with reference filters (zero and span) — typically quarterly. Record values.</div>

  <div class="n-h1" id="s-60">4. Verify alarm setpoint at DCS/alarm panel.</div>

  <div class="n-h1" id="s-61">5. Check cable connections — high-temperature resistant cables near exhaust duct, inspect for heat damage annually.</div>
  <div class="body">UMS Checks and Pre-Arrival Procedures for ETO</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Multiple candidates — "what are your pre-arrival duties as ETO?" and "how do you transfer from UMS?"</div></div>
  <div class="body">Transfer from UMS (Unmanned Machinery Space) to manned watch — typically 4 hours before arrival at port or anchorage:</div>

  <div class="n-h1" id="s-62">1. POST ENGINE ROOM WATCHKEEPER: Official entry in engine room log — time and name of watchkeeper. Inform bridge.</div>

  <div class="n-h1" id="s-63">2. TEST UMS ALARM EXTENSION: Check all ER alarms extend to bridge and accommodation. Walk-around — verify audible/visual alarms present at all required locations (bridge, C/E cabin, duty mess).</div>

  <div class="n-h1" id="s-64">3. FIRE DETECTION SYSTEM: All zones show HEALTHY on panel. No latched fire alarms. Test detector response if required by schedule.</div>

  <div class="n-h1" id="s-65">4. BILGE ALARM SYSTEM: Check bilge high-level alarms, verify bilge pump auto-start is armed and functional.</div>

  <div class="n-h1" id="s-66">5. START STANDBY GENERATOR: Warm up. Load test briefly. Confirm ready for port electrical load (cranes, mooring winches, reefer plugs).</div>

  <div class="n-h1" id="s-67">6. MOORING WINCH MOTORS: Test-run each winch motor. Check brake — apply and release. Verify control from local pendant AND from remote station. Check PLC status — no fault codes.</div>

  <div class="n-h1" id="s-68">7. SHORE CONNECTION EQUIPMENT: Inspect shore power cable — no damage to insulation, correct connector type. Lay out near gangway if cold ironing expected.</div>

  <div class="n-h1" id="s-69">8. BOW THRUSTER: Test run. Check hydraulic oil level (if hydraulic type), motor insulation, cooling water flow.</div>

  <div class="n-h1" id="s-70">9. CAPSTAN/WINDLASS: Test run. Check clutch, brake, remote control from bridge wings.</div>

  <div class="n-h1" id="s-71">10. STEERING GEAR: Full movement test both sides. Changeover test between main and auxiliary unit. Check hydraulic oil levels. Verify bridge communication.</div>

  <div class="n-h1" id="s-72">11. NAVIGATION LIGHTS: Full test from bridge panel — all lights operational. Check BITT if fitted.</div>

  <div class="n-h1" id="s-73">12. CCTV: All cameras operational — gangway, deck, ER.</div>

  <div class="n-h1" id="s-74">13. EMERGENCY GENERATOR: Check fuel, oil, cooling water levels. Confirm in AUTO-START mode.</div>

  <div class="n-h1" id="s-75">14. RECORD: All pre-arrival checks, readings, and watchkeeping transfer in electrical log. Signed by ETO and acknowledged by C/E.</div>
  <div class="body">Drydock Duties — ETO Responsibilities and Working Aloft Safety</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Surveyor asked "what are your duties during drydock?"</div></div>
  <div class="body">ETO Drydock Duties — comprehensive list (typically scheduled over 10–14 day drydock):</div>

  <div class="n-h1" id="s-76">1. PRE-DRYDOCK BASELINE IR: Megger test ALL motors, generators, cables before ship enters dock. Record values. Repeat post-drydock. Detect any damage caused during docking operations.</div>

  <div class="n-h1" id="s-77">2. ICCP SYSTEM: Set to MANUAL/OFF before docking — hull must be in water for ICCP to work. With hull in air: clean reference electrode faces, inspect cable connections from electrodes to control panel, inspect anode condition and record remaining material.</div>

  <div class="n-h1" id="s-78">3. SHAFT EARTHING DEVICE: Access is only possible in drydock. Inspect carbon brush condition, brush spring pressure, contact surface on propeller shaft. Replace brush if worn below 50% length. Clean slip ring surface on shaft.</div>

  <div class="n-h1" id="s-79">4. HULL TRANSDUCERS (echo sounder, Doppler log, ADCP): Inspect hull fitting condition, antifouling paint around transducer face, zinc anodes fitted to transducer frame. Check cable penetration seals (deck glands). Record any damage.</div>

  <div class="n-h1" id="s-80">5. SACRIFICIAL ANODES: Inspect all zinc/aluminium hull anodes. Record remaining mass as % of original. Renew anodes below 50% remaining. Class surveyor may require anode renewal records.</div>

  <div class="n-h1" id="s-81">6. NAVIGATION LIGHTS: Physical inspection — corrosion, cracked lens, water ingress in fitting. Replace lamps/LEDs per schedule. Test complete system from bridge panel with surveyor present.</div>

  <div class="n-h1" id="s-82">7. MOORING WINCH AND WINDLASS: Electrical overhaul if on schedule — new motor bearings, winding IR test, contactor renewal, control panel inspection.</div>

  <div class="n-h1" id="s-83">8. FIRE DETECTION: Class survey may require full system test — every detector tested. ETO prepares detector map, operates system, witnesses test alongside class surveyor.</div>

  <div class="n-h1" id="s-84">9. EMERGENCY GENERATOR CLASS SURVEY: Typically done in drydock — overspeed test, blackout test, load test, fuel consumption check. Surveyor witnesses and issues endorsement.</div>

  <div class="n-h1" id="s-85">10. DEFECT LIST: Maintain running drydock defect list — all jobs, materials used, test results. Class-relevant work must be surveyor-witnessed and documented with class certificate.</div>
  <div class="body">Working Aloft Safety Requirements:</div>
  <div class="body">Working Aloft Permit (WAP): Required for ANY work at height — mast, funnel, radar platform, bridge wings above main deck level. Master signature required.</div>
  <div class="body">Weather check: Wind speed within limits (typically <10 knots). Check weather forecast before starting.</div>
  <div class="body">Buddy system: Minimum two persons. No lone working at height. One standby on deck below.</div>
  <div class="body">PPE: Full-body safety harness with two lanyards (100% attachment while moving — one always clipped). Hard hat. Safety footwear. High-visibility vest.</div>
  <div class="body">Tool control: ALL tools secured with lanyards or in tool bags. No loose items. Exclusion zone on deck below with barrier and signage.</div>
  <div class="body">Electrical isolation: Radar scanner motor isolated, navigation light circuits locked off, antenna discharge devices in place — before approaching any electrical equipment at height.</div>
  <div class="body">Communication: Portable radio — contact maintained with bridge and ER throughout.</div>
  <div class="body">Rescue plan: Established BEFORE starting. Stretcher, first-aid kit, rescue harness accessible. Personnel trained in working-at-height rescue.</div>
  <div class="body">After work: Remove all tools and materials from height, restore all isolations, cancel permit, inspect work area is clear.</div>
  <div class="body">Air Bottle in Lifeboat — Purpose and Lifeboat Sprinkler System Design</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Surveyor asked "what is the compressed air bottle in the lifeboat for?"</div></div>
  <div class="body">Air Bottle in Lifeboat — Two Distinct Purposes:</div>

  <div class="n-h1" id="s-86">1. ENGINE STARTING AIR: Backup starting method if electric starter motor or battery fails. Compressed air (200–300 bar) is piped directly to the engine starting air valve — acts like a large air starter. Essential for ensuring lifeboat engine starts even with flat battery after long storage.</div>

  <div class="n-h1" id="s-87">2. BREATHING AIR SUPPLY (Fire-protected lifeboats on tankers/dangerous goods ships): SOLAS requires totally enclosed lifeboats on these ships to have fire protection. When the lifeboat is launched through burning oil on water surface with all hatches closed, occupants need breathable air. Air bottle provides this supply for minimum 10 minutes — enough time to clear the fire zone.</div>
  <div class="body">Specifications and calculation:</div>
  <div class="body">Breathing air requirement: 40 litres/minute per person × 10 minutes × number of persons = required cylinder volume at working pressure.</div>
  <div class="body">Example: 26 persons × 40 L/min × <span class="n-val">10 min</span> = 10,400 litres at standard pressure. At <span class="n-val">300 bar</span> cylinder: capacity ≈ 10,400/300 ≈ 35 litres water capacity cylinder.</div>
  <div class="body">Pressure gauge: Must be readable from inside lifeboat without opening hatch.</div>
  <div class="body">Reduction valve: Steps down <span class="n-val">300 bar</span> cylinder pressure to low-pressure breathing air for distribution system.</div>
  <div class="body">Safety relief valve (burst disc): Protects against overpressure if cylinder exposed to heat.</div>
  <div class="body">Maintenance checklist:</div>

  <div class="n-h1" id="s-88">1. Monthly: Check pressure gauge — must be at or above minimum working pressure. Record in lifeboat maintenance log.</div>

  <div class="n-h1" id="s-89">2. If pressure low: Recharge using Class E (breathing quality) air compressor only. NEVER use industrial or workshop compressed air — oil contamination risk.</div>

  <div class="n-h1" id="s-90">3. Annual: Inspect cylinder body for corrosion, dents, heat exposure. Any damaged cylinder must be withdrawn and condemned.</div>
  <div class="body">4. 5-year (or per regulation): Hydrostatic pressure test — cylinder filled with water and tested at 1.5× working pressure. Certificate required for class/SOLAS survey.</div>

  <div class="n-h1" id="s-91">5. Pressure reduction valve and safety valve: Overhaul per manufacturer schedule.</div>
  <div class="body">Lifeboat Sprinkler (Water Spray Fire Protection) System:</div>
  <div class="body">Purpose: Protects lifeboat from radiant heat and direct contact with burning oil on sea surface during embarkation and escape through fire area.</div>
  <div class="body">Design: Engine-driven centrifugal pump draws sea water through hull sea cock → distributes to piping system → spray nozzles covering entire outer hull surface including windows.</div>
  <div class="body">Spray pattern: Full coverage — top, sides, and bottom covered with continuous water film.</div>
  <div class="body">Activation: Manual valve inside lifeboat (coxswain opens when required). Some designs automatic on engine start.</div>
  <div class="body">SOLAS LSC 4.4 / IMO MSC.218(82): Totally enclosed lifeboats on oil and chemical tankers in regular service must have fire protection system.</div>
  <div class="body">Test procedure: Start lifeboat engine → open sea cock → open spray valve → verify all nozzles operating, no blockages, adequate pressure. Test quarterly per PMS. Record date and result.</div>
  <div class="body">ER Crane — Speed Adjustment in Detail</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Surveyor asked "how do you adjust the speed of the ER crane?"</div></div>
  <div class="body">The answer depends on the type of drive installed. ETO must identify the system first. Common types on ship engine room cranes:</div>
  <div class="body">TYPE 1 — POLE CHANGING (DAHLANDER) MOTOR: Speed is fixed at two steps (typically low = 6 or 8 pole / high = 2 or 4 pole). No adjustment possible beyond selecting HIGH or LOW from pendant. Maintenance: check both speed contactors, check Dahlander winding connections U1/U2, V1/V2, W1/W2, check motor IR value for both winding configurations.</div>
  <div class="body">TYPE 2 — ROTOR RESISTANCE CONTROL (WOUND ROTOR / SLIP RING MOTOR): Speed varies by switching resistance in or out of rotor circuit. More resistance = more slip = lower speed. Typically 3–5 fixed speed steps. Speed adjustment by ETO: change resistance tap connections to alter step values — requires isolating control circuit, changing wiring at resistance bank terminal board. Detailed procedure: isolate crane (lockout), open resistance panel, change tap position, restore, test each speed.</div>
  <div class="body">TYPE 3 — VFD (VARIABLE FREQUENCY DRIVE): Full variable speed from 0–100%. Speed controlled by pendant potentiometer or up/down buttons. ETO adjustment parameters via VFD keypad: Maximum frequency (Hz) to limit top speed. Minimum frequency to set creep speed. Acceleration ramp time (seconds from 0 to max). Deceleration ramp time. These can be changed in the VFD parameter menu — refer to VFD manual for parameter numbers (e.g. Siemens MICROMASTER P1082 = max frequency).</div>
  <div class="body">TYPE 4 — HYDRAULIC (motor-driven hydraulic power pack): Motor speed is fixed. Crane speed controlled by hydraulic proportional valve. ETO role: maintain electric motor driving pump, not the crane speed setting itself — hydraulic valve adjustment is a mechanical job.</div>
  <div class="body">SOLAS II-1/3-13 — Lifting Appliances and Anchor Handling Winches (New 2026 Regulation)</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Effective January 1, 2026, SOLAS Regulation II-1/3-13 formally brings shipboard lifting appliances and anchor handling winches under SOLAS statutory regulation for the first time. Previously governed only by a patchwork of classification society rules and ILO conventions. Surveyors will ask about SWL marking, load testing, and Safety Construction Certificate implications.</div></div>
  <div class="body">What the New Regulation Covers</div>
  <div class="body">Scope: All lifting appliances and anchor handling winches onboard ships subject to SOLAS. This includes: deck cranes (stores crane, provision crane, rescue boat davit winch), engine room overhead cranes (ER crane), anchor windlass, mooring winches used for anchor handling operations, and any other winch or lifting device used to lift loads or persons.</div>
  <div class="body">Key Requirements Under SOLAS II-1/3-13</div>

  <div class="n-h1" id="s-92">1. Thorough load testing based on IMO guidelines: All lifting appliances must be load-tested to the proof load specified in the IMO guidelines (typically 125% of Safe Working Load for cranes, or as specified by class). Load test must be documented, witnessed by class surveyor, and the certificate retained onboard. Subsequent periodic proof tests required at intervals specified by class (typically every 5 years).</div>

  <div class="n-h1" id="s-93">2. Permanent SWL marking: Every lifting appliance must be permanently and legibly marked with its Safe Working Load (SWL) in tonnes. The SWL must be visible to the operator at the control position. Variable SWL (e.g. crane at different radii) must show the SWL at each radius on a clearly readable load chart. Faded, damaged, or missing SWL markings are now a statutory deficiency under SOLAS.</div>

  <div class="n-h1" id="s-94">3. Impact on Safety Construction Certificate: This is the key change. Mechanical failure of a crane now directly impacts the vessel's statutory Safety Construction Certificate (the main SOLAS certificate). A crane found to be defective, not load-tested, or with missing SWL markings can now trigger a condition of class and a deficiency on the Safety Construction Certificate — potentially preventing the ship from sailing until rectified. Previously, a crane defect was a class-only matter that did not directly affect statutory certificates.</div>
  <div class="body">Background — Why This Change Was Made</div>
  <div class="body">Before 2026, shipboard cranes and winches were regulated by a fragmented framework: classification society rules (e.g. Lloyd's Register, DNV crane rules), ILO Convention 152 (Occupational Safety and Health in Dock Work), and national port regulations. Ships could have cranes that were never load-tested to a unified standard, with SWL markings applied by the manufacturer only and never re-verified. Several crane collapses and falls resulting in crew fatalities prompted IMO to bring lifting appliances directly under SOLAS, giving port state control (PSC) officers the authority to detain ships where lifting appliances are not certified.</div>
  <div class="body">ETO Responsibilities Under SOLAS II-1/3-13</div>

  <div class="n-h1" id="s-95">1. Maintain all electrical systems of lifting appliances in safe and serviceable condition — motor, VFD/controller, limit switches, EM brake, overload protection, pendant controls.</div>

  <div class="n-h1" id="s-96">2. Verify SWL markings are legible at each crane and at the ER overhead crane — report to C/E if markings are faded or damaged. This is now a SOLAS statutory requirement.</div>

  <div class="n-h1" id="s-97">3. Ensure overload limit switch (hoist cut-out at SWL) is functional — this is the primary electronic safety preventing overloading. Test annually. Calibrate to correct SWL value if load cell-based.</div>

  <div class="n-h1" id="s-98">4. Ensure load test certificate is onboard, current, and available for PSC inspection. Flag to C/E and Master if certificate is approaching expiry (typically 5-year cycle).</div>
  <div class="body">SOLAS II-1/3-13 — Quick Revision Summary</div>
  <div class="body">Effective: 1 January 2026. Covers: all lifting appliances and anchor handling winches. Requirements: (1) Load-tested to IMO guidelines (125% SWL proof load). (2) Permanently marked with SWL — legible at control position. (3) Certificate of test onboard. Key change: crane defect now directly impacts Safety Construction Certificate — a SOLAS statutory certificate. PSC can now detain ship for crane defects. ETO: maintain electrical systems, verify SWL markings, ensure overload switches calibrated, flag certificate expiry to C/E.</div>


  <!-- ═══ WRITTEN SECTION ═══ -->
  <div class="n-h1" id="s-written">📝 Written Section</div>
  <div class="n-info"><div class="icon">📝</div><div class="body"><strong>Coming Soon:</strong> The written preparation module is currently under development.</div></div>


  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>No Surveyor Q&A available</strong> for this topic yet.</div></div>


  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📋 Quick Revision</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">Revision tables coming soon.</div></div>

  </div>
</div>
</div>`);

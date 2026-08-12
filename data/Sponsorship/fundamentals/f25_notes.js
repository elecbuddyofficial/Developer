window.loadNotes("F25", `<div class="view" id="view-notes-f25">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F25')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F25 - Practical Engineering Questions</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 25 of 25 · Difficulty ★★★★★ · Study Time 50-65 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-overload')">Overload Trip</button>
    <button class="anc-btn" onclick="jumpTo('s-irzero')">IR Reads Zero</button>
    <button class="anc-btn" onclick="jumpTo('s-alternator')">No Voltage Build-Up</button>
    <button class="anc-btn" onclick="jumpTo('s-breaker')">Breaker Won't Reset</button>
    <button class="anc-btn" onclick="jumpTo('s-dimming')">Lights Dim on Starting</button>
    <button class="anc-btn" onclick="jumpTo('s-hotcable')">Hot Cable</button>
    <button class="anc-btn" onclick="jumpTo('s-earthhunt')">Earth Fault Hunting</button>
    <button class="anc-btn" onclick="jumpTo('s-bearing')">Hot Bearing</button>
    <button class="anc-btn" onclick="jumpTo('s-livework')">Live Board Work</button>
    <button class="anc-btn" onclick="jumpTo('s-summary')">Quick Reference</button>
    <button class="anc-btn" onclick="jumpTo('s-interview')">Interview Answers</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">This module introduces no new theory. It takes theory already covered in F09 (induction motors), F12 (motor protection), F13 (switchgear) and F15 (insulation testing) and tests whether you can apply it under pressure, in the order a real engineer applies it. Each scenario is a genuine oral exam pattern: a symptom is described, and you reason through a diagnostic sequence out loud rather than naming a single cause. By the end you should be able to work through nine shipboard faults, state what you check first and why at each step, and finish every answer with what you would report and to whom. That last part is marked: an ETO who finds a fault but never tells the Chief Engineer has not finished the job.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Why sequence matters more than the answer.</strong> Two candidates can both eventually say "it was a loose connection" and score very differently, one checked things in the right order, the other guessed. Say your reasoning out loud, in order, every time.</div></div>

  <div class="n-h1" id="s-overload">Scenario 1: A Motor Has Tripped on Overload</div>
  <p class="n-p">You are called to a pump that has tripped, the overload relay flag is out. How do you investigate before even thinking about resetting it?</p>

  <div class="n-steps">
    <p class="n-p">1. <strong>Do not reset it yet.</strong> Resetting blind risks repeating whatever caused the trip, and if it's a stalled rotor or a developing winding fault, a second start can finish the winding off. From F12, an overload trip almost always means sustained overload or a stall, a short circuit would have taken out the fuse or MCCB instead.</p>
    <p class="n-p">2. <strong>Check the load side first.</strong> Overload almost always means the motor was asked to do more work than it's rated for: a throttled discharge valve, a choked strainer, a jammed impeller, a closed damper. The most common real cause, and it costs nothing to check before opening anything electrical.</p>
    <p class="n-p">3. <strong>Check for mechanical binding.</strong> With the motor isolated, try turning the shaft by hand. A seized bearing or misaligned coupling makes the motor work harder for the same electrical input and shows up as overload current, links to Scenario 8 if the bearing is also hot.</p>
    <p class="n-p">4. <strong>Check insulation resistance and phase balance.</strong> Take an IR reading (Scenario 2, F15) to rule out a developing winding fault, and check all three phases, a lost phase on a light load can look exactly like a moderate overload trip, the single phasing signature from F12.</p>
    <p class="n-p">5. <strong>Only once the load side is clear, insulation is sound and phases are balanced, reset and restart under observation.</strong> Watch the running current settle rather than walking away. A repeat trip means stop and escalate, not reset again, the wrong instinct in Scenario 4.</p>
  </div>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Report.</strong> Log the trip, suspected cause and corrective action, and inform the Chief Engineer before returning the motor to service. A process issue gets fed back to whoever was operating the system, not just fixed silently.</div></div>

  <div class="n-h1" id="s-irzero">Scenario 2: Insulation Resistance Reads Zero</div>
  <p class="n-p">You megger a motor and the reading is zero, or very close to it. What now?</p>

  <div class="n-steps">
    <p class="n-p">1. <strong>Suspect the test before the winding.</strong> A zero reading is as likely to be a test error as a genuine short. Check the meter on a known good circuit, check the leads for a short between them, check the clips aren't touching each other or an earthed surface.</p>
    <p class="n-p">2. <strong>Confirm the motor is genuinely isolated,</strong> then re-test phase by phase and phase to earth. A reading taken through a still-connected space heater circuit or a neutral link left in can give a misleadingly low result. A genuine fault repeats, a test artefact does not.</p>
    <p class="n-p">3. <strong>If it repeats, move to physical inspection.</strong> Open the terminal box: a loose gland, tracking or carbon staining, a chafed cable touching the frame, standing water. Often the fastest route to an answer.</p>
    <p class="n-p">4. <strong>Distinguish moisture from a genuine breakdown.</strong> Moisture-related low IR is often unstable and affects more than one phase similarly. A genuine breakdown is a firm, repeatable low reading that doesn't improve on its own. If moisture, follow F12's recovery procedure: wash off contamination, dry with monitored rising IR readings, test at reduced voltage while wet.</p>
    <p class="n-p">5. <strong>If it's a genuine breakdown,</strong> the motor doesn't return to service on one low reading, it needs opening up or workshop diagnosis beyond a hand-held megger.</p>
  </div>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Never assume zero means "test it again harder."</strong> Cranking a <span class="n-val">500V</span> megger onto a genuine near-short risks driving further damage into failing insulation. Once two clean retests agree, move to physical inspection instead.</div></div>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Report.</strong> A confirmed zero or near-zero IR is a motor that cannot be safely re-energised. Report it to the Chief Engineer, log the readings, and isolate and tag it out rather than leaving it connected "just in case."</div></div>

  <div class="n-h1" id="s-alternator">Scenario 3: The Alternator Will Not Build Up Voltage</div>
  <p class="n-p">The generator is at rated speed but the voltmeter stays at zero, or only a few volts. Work the causes in order rather than guessing.</p>

  <div class="n-steps">
    <p class="n-p">1. <strong>Confirm the prime mover is genuinely at rated, stable speed,</strong> since a self-excited machine's frequency and voltage both depend on shaft speed, and confirm the field breaker or switch is closed.</p>
    <p class="n-p">2. <strong>Measure residual voltage at the output terminals.</strong> A self-excited machine relies on leftover residual magnetism in the rotor poles to generate a few volts the instant the shaft turns, which the AVR amplifies and feeds back into the field in a self-reinforcing loop. With no residual voltage at all, there's nothing for the AVR to amplify, and it sits at zero.</p>
    <p class="n-p">3. <strong>If residual magnetism is confirmed lost</strong> (long shutdown, a severe fault event, or field wiring disturbed and reconnected reversed), the fix is <strong>field flashing</strong>: briefly applying a low voltage DC source, commonly a <span class="n-val">12V</span> battery, to the field winding with the AVR disconnected first, never with the AVR still connected, external DC into a live AVR can destroy its electronics.</p>
    <p class="n-p">4. <strong>If residual voltage is present but collapses or never rises,</strong> suspect the AVR or its sensing fuse, since a blown sensing fuse can make a healthy AVR believe target voltage is already reached.</p>
    <p class="n-p">5. <strong>If the AVR checks out, move to the field circuit:</strong> an open field winding, a failed rectifier diode on a brushless machine, or worn slip ring brushes can all stop field current flowing with a healthy AVR trying to drive it. Confirm the generator breaker is open too, build-up should happen on open circuit.</p>
  </div>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>The reasoning to say out loud.</strong> Build-up is a loop: residual magnetism gives a small starting voltage, the AVR amplifies it into more field current, which raises voltage further, until it settles at rated value. Break the loop anywhere and voltage never climbs.</div></div>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Report.</strong> Loss of a generator's ability to build voltage is a machinery availability issue, report it to the Chief Engineer immediately, particularly if it leaves the vessel short of standby capacity. If field flashing restores it, log why it happened rather than just fixing and forgetting.</div></div>

  <div class="n-h1" id="s-breaker">Scenario 4: A Breaker Trips and Will Not Reset</div>
  <p class="n-p">You close a breaker and it trips again, or won't close at all. The instinct to just keep trying is exactly the wrong one.</p>

  <div class="n-steps">
    <p class="n-p">1. <strong>Read the trip indication first.</strong> A modern MCCB or ACB shows what tripped it: overcurrent, instantaneous short circuit, earth fault, undervoltage, or a mechanical fault flag. Check this before a single reset attempt.</p>
    <p class="n-p">2. <strong>If it indicates a genuine fault, do not reset again.</strong> Repeatedly forcing a closure onto a persisting fault stresses the mechanism and risks a violent failure on the next attempt, potentially an arc flash. Isolate and investigate downstream as in Scenario 1 or 7.</p>
    <p class="n-p">3. <strong>If it won't close mechanically, suspect an interlock:</strong> a door interlock with the cubicle open, a racking interlock not fully connected, an interlock with an adjacent breaker, or a closing spring not yet charged, and check for a latched trip that needs the lever moved firmly past its mechanical reset position.</p>
    <p class="n-p">4. <strong>If it closes but trips with no apparent fault,</strong> suspect the trip unit or its CTs, a drifting electronic trip unit or damaged CT gives false trips, this is a trip unit test, not something to keep forcing.</p>
    <p class="n-p">5. <strong>Once the actual cause is cleared,</strong> close under observation and watch the current settle, rather than closing and walking away.</p>
  </div>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>The trap this scenario is built around.</strong> "It won't reset, so try again" loses marks. A breaker that trips repeatedly on a real fault is doing its job correctly every time, and the fault is downstream, not in the breaker.</div></div>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Report.</strong> A breaker that won't hold in is reported to the Chief Engineer before repeated attempts are made, particularly on a main or essential feeder, a hard fault forced closed onto a live board risks equipment damage and injury.</div></div>

  <div class="n-h1" id="s-dimming">Scenario 5: Lights Dim When a Large Motor Starts</div>
  <p class="n-p">A large motor starts, the lighting visibly dims for a second, and contactors elsewhere chatter or drop out. Why, and what would you check?</p>

  <div class="n-steps">
    <p class="n-p">1. <strong>Recognise the textbook voltage dip from F11, now in the field.</strong> A DOL start draws <span class="n-val">five to seven times full load</span> current through the generator and cable's internal impedance, producing a real voltage drop across the whole busbar, felt by every load simultaneously, recovering as the motor accelerates.</p>
    <p class="n-p">2. <strong>Check the motor's size relative to the generator actually on line.</strong> At sea the supply is a genuinely limited source, not an infinite grid, a dip barely noticeable with two generators paralleled can be severe on one alone.</p>
    <p class="n-p">3. <strong>Check whether the starting method fits.</strong> A DOL start against an undersized supply is very possibly the whole answer, check whether star-delta, autotransformer, soft starter or VFD (F11) would suit better.</p>
    <p class="n-p">4. <strong>Check the AVR's transient response and the governor.</strong> A healthy AVR recovers busbar voltage within a second or two; a large step load also asks the governor for a power step it takes time to answer, so frequency can dip too.</p>
    <p class="n-p">5. <strong>Explain the dropped-out contactors properly,</strong> not as a coincidence: a contactor coil is held in by the voltage across it, and a deep busbar dip can genuinely drop lightly-margined coils elsewhere, the same no-volt release mechanism from F12, triggered by a transient rather than a real supply failure.</p>
  </div>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Say this in the interview.</strong> The dip isn't a fault, it's physics: a current surge through finite source impedance produces a real voltage drop felt by everything on the board. The fix is matching motor size, starting method and generator capacity, not tolerating each event as a one-off nuisance.</div></div>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Report.</strong> An occasional, brief, in-limits dip is normal and worth noting in the log. A worsening dip, or one that newly drops equipment out, is reported to the Chief Engineer as a possible sign of degrading AVR performance or reduced generating capacity.</div></div>

  <div class="n-h1" id="s-hotcable">Scenario 6: You Find a Hot Cable</div>
  <p class="n-p">On rounds, a cable run is noticeably warm compared to those around it. What do you do, in order?</p>

  <div class="n-steps">
    <p class="n-p">1. <strong>Take the immediate safety action first.</strong> A hot cable is a fire risk and a potential insulation failure in progress. Reduce or remove the load, usually by isolating the circuit, before theorising with the fault still live. Any smell of burning or smoke is a fire risk, follow the vessel's fire response procedure.</p>
    <p class="n-p">2. <strong>Once safe, confirm it's genuinely abnormal,</strong> not just normal warmth from grouping in a tray, which derating tables already account for. Compare against similar cables carrying similar loads.</p>
    <p class="n-p">3. <strong>If genuinely abnormal, work through causes in order.</strong> <strong>Overload</strong>, carrying more than it's rated for. <strong>Poor connection</strong>, a loose or corroded termination creating a high resistance hot spot, one of the most common real causes given vibration over time. <strong>Undersized cable</strong> for the load. <strong>Harmonics</strong>, on a circuit feeding VFDs (F16), third harmonic currents can add up in the neutral and cause unexpected heating there specifically.</p>
    <p class="n-p">4. <strong>Physically inspect terminations once isolated.</strong> A hot spot localised at a gland or joint, rather than even warmth along the run, points to a loose connection rather than a general overload.</p>
    <p class="n-p">5. <strong>Measure load current against rated ampacity, and check insulation resistance</strong> (Scenario 2), sustained overheating degrades insulation, and a hot cable today can be tomorrow's failure if the root cause isn't fixed.</p>
  </div>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Safety before diagnosis, every time.</strong> Make it safe first, understand it second. Launching straight into "overload or loose connection" without first isolating answers a theory question when the examiner asked a practical one.</div></div>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Report.</strong> Confirmed abnormal cable heating is reported to the Chief Engineer immediately given the fire risk, with action taken and suspected cause logged. A loose termination gets properly remade and torqued, not just tightened "good enough."</div></div>

  <div class="n-h1" id="s-earthhunt">Scenario 7: Tracing an Earth Fault on an Insulated System</div>
  <p class="n-p">The switchboard's earth fault indicator shows a fault but nothing has tripped, and the ship keeps running. How do you find it?</p>

  <div class="n-steps">
    <p class="n-p">1. <strong>Understand why nothing tripped.</strong> Most marine systems use an insulated (high impedance or ungrounded) neutral specifically so a single earth fault does not cause an automatic trip, since losing supply is more dangerous at sea than running with one fault present. No complete circuit exists back to source through a single fault alone, so no large current flows. Finding it is entirely on you, not the protection system.</p>
    <p class="n-p">2. <strong>Treat it as urgent, not routine.</strong> A second, independent fault on a different phase while the first persists can complete a genuine fault path, behaving like a phase to phase short. Note which phase the indicator shows before touching any breakers.</p>
    <p class="n-p">3. <strong>Hunt systematically by sectionalising, not randomly.</strong> From the main switchboard outward, open feeder breakers one at a time following the vessel's procedure, watching the earth fault indication after each. Clearing it means the fault is downstream of that breaker, no change means close it and move to the next, narrowing section by section.</p>
    <p class="n-p">4. <strong>Confirm with a megger once narrowed to a single circuit,</strong> testing that cable or item directly to earth (Scenario 2, F15) rather than relying on the switchboard indication alone.</p>
    <p class="n-p">5. <strong>Physically inspect the confirmed item:</strong> moisture in a terminal box, a chafed cable at a gland or bulkhead, or breaking-down winding insulation, the same causes as Scenario 2 and F12's saltwater recovery procedure. Restore each section as it's confirmed healthy.</p>
  </div>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Say this in the interview.</strong> An insulated neutral system deliberately keeps running through one earth fault, because losing propulsion at sea is more dangerous than one insulation fault. That's why hunting it is active work: sectionalise systematically, narrowing from the whole ship to one cable, because nothing points directly at it for you.</div></div>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Report.</strong> Report an earth fault indication to the Chief Engineer as soon as it's noticed, even with nothing tripped, the danger is a second fault while the first sits unaddressed. Log when it appeared, the section found, and corrective action.</div></div>

  <div class="n-h1" id="s-bearing">Scenario 8: A Bearing Is Running Hot</div>
  <p class="n-p">On rounds, a motor's bearing housing is noticeably hotter than similar machines, or hotter than usual. Work through it.</p>

  <div class="n-steps">
    <p class="n-p">1. <strong>Confirm it's genuinely abnormal.</strong> Get an actual temperature if instrumentation allows, and compare against that machine's normal running temperature and sister machines, rather than judging by hand alone.</p>
    <p class="n-p">2. <strong>Check lubrication first,</strong> the most common and easiest cause: is grease or oil reaching the bearing, is the type correct, has it been over-greased (as damaging as under-greased, causing churning heat), is the schedule being followed.</p>
    <p class="n-p">3. <strong>Check for misalignment and for overload on the driven machine,</strong> exactly the Scenario 1 reasoning, a coupling out of alignment or extra load forces the bearing to carry loads it wasn't designed for and generates heat directly.</p>
    <p class="n-p">4. <strong>Check the bearing itself for wear,</strong> noise, vibration or roughness points to a bearing nearing end of life, pitting or spalling, independent of lubrication or alignment.</p>
    <p class="n-p">5. <strong>On a VFD-driven motor, consider electrical bearing currents specifically.</strong> High frequency IGBT switching (F11, F16) can induce shaft voltages that discharge through the bearing as small repeated arcing, fluting, pitting the races over time, worth raising since a non-VFD motor doesn't have this cause and the fix, insulated bearings or a shaft grounding brush, differs from anything mechanical.</p>
  </div>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Work outward from cheap and likely to expensive and rare.</strong> Lubrication and alignment explain the overwhelming majority of hot bearings and should be ruled out first. VFD bearing currents are the answer to "what else could it be," not the first thing to jump to.</div></div>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Report.</strong> A confirmed abnormal bearing temperature, particularly with noise or vibration, is reported to the Chief Engineer, a failed bearing can seize the shaft and cause secondary damage. Log the temperature, suspected cause, and whether it stayed running under observation or was taken out of service.</div></div>

  <div class="n-h1" id="s-livework">Scenario 9: You Are Asked to Work on a Live Board</div>
  <p class="n-p">A senior officer, under time pressure, asks you to work on a switchboard without isolating it first, "it'll only take a minute." What do you refuse, and what do you insist on instead?</p>

  <div class="n-steps">
    <p class="n-p">1. <strong>Refuse to work live where isolation is genuinely possible.</strong> The overwhelming majority of shipboard electrical work can and should be done dead. "It's quicker live" doesn't survive contact with what a fault at hand-distance from busbars does to a person: arc flash, arc blast and direct shock are real, immediate risks.</p>
    <p class="n-p">2. <strong>Insist on a permit to work first,</strong> formally identifying the job, equipment, hazards and isolation points per the vessel's safety management system, so everyone agrees exactly what is isolated and why.</p>
    <p class="n-p">3. <strong>Insist on lockout/tagout at every isolation point.</strong> Open and physically lock the breaker with a personal lock, tag it with name and job. Each person working applies their own lock, so the circuit can't be re-energised until everyone has personally removed theirs.</p>
    <p class="n-p">4. <strong>Insist on proving dead before touching anything, no exceptions.</strong> Test the tester on a known live source, test the circuit and confirm zero, then re-test the tester afterward. Isolating a breaker is not the same as proving dead, a wiring error or backfeed only a direct test rules out.</p>
    <p class="n-p">5. <strong>Insist on correct PPE and a second person present,</strong> insulated gloves and tools rated for the voltage, arc-rated clothing where the risk assessment calls for it, and someone briefed and able to raise the alarm if something goes wrong.</p>
  </div>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>The line to hold under pressure.</strong> Time pressure doesn't change what electricity does to a body. Refusing unsafe live work is not insubordination, it's the correct exercise of stop-work authority every crew member has under the ISM Code, and a competent officer backs down once reminded of that.</div></div>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Report.</strong> Any instruction to bypass isolation, permit or lockout/tagout is raised immediately with the Chief Engineer and documented, a near-miss the safety management system exists to capture.</div></div>

  <div class="n-h1" id="s-summary">Quick Reference: First Check, By Scenario</div>
  <p class="n-p">A fast recall table, not a substitute for the reasoning above.</p>
  <table class="n-table">
    <tr><th>Scenario</th><th>First priority</th><th>Escalates to</th></tr>
    <tr><td>Overload trip</td><td>Don't reset blind, check the load side</td><td>Mechanical binding, IR, phase balance</td></tr>
    <tr><td>IR reads zero</td><td class="hl">Suspect the test before the winding</td><td>Physical inspection, moisture vs. genuine breakdown</td></tr>
    <tr><td>No voltage build-up</td><td>Confirm speed and residual voltage</td><td>Field flash, AVR, field circuit continuity</td></tr>
    <tr><td>Breaker won't reset</td><td class="hl">Read the trip indication, don't force it</td><td>Mechanical interlock vs. genuine fault vs. trip unit</td></tr>
    <tr><td>Lights dim on start</td><td>Motor size vs. generator capacity on line</td><td>Starting method, AVR response, governor</td></tr>
    <tr><td>Hot cable</td><td class="hl">Make safe first, diagnose second</td><td>Overload, loose connection, undersizing, harmonics</td></tr>
    <tr><td>Earth fault hunt</td><td>Note the indicated phase, don't panic</td><td>Systematic sectionalising, then megger to confirm</td></tr>
    <tr><td>Hot bearing</td><td>Lubrication and alignment first</td><td>Overload, wear, VFD bearing currents</td></tr>
    <tr><td>Live board work</td><td class="hl">Refuse it, isolation is possible</td><td>Permit, LOTO, prove dead, PPE, second person</td></tr>
  </table>

  <div class="n-h1" id="s-interview">Interview Answers, Rapid Fire</div>

  <p class="n-p"><strong>A motor has tripped on overload. What's the first thing you check, and why not just reset it?</strong><br>
  The load side first, a throttled valve, a choked strainer, a binding shaft, that costs nothing to rule out before opening anything electrical. Never reset blind: the relay tripped for a reason, and resetting risks repeating whatever caused it. Find the cause, then restart under observation.</p>

  <p class="n-p"><strong>You get an IR reading of zero. Is the motor definitely faulty?</strong><br>
  Not necessarily, check the test setup first, a test error gives the same reading as a genuine fault. Only a repeatable, clean, isolated retest confirms it's real.</p>

  <p class="n-p"><strong>Why won't a self-excited alternator build voltage if it's lost residual magnetism?</strong><br>
  Build-up is a self-reinforcing loop, residual magnetism gives a small starting voltage the AVR amplifies into more field current. With no residual magnetism there's nothing to amplify, so the fix is field flashing, external DC to the field with the AVR disconnected.</p>

  <p class="n-p"><strong>A breaker won't reset. What do you do?</strong><br>
  Read the trip indication before touching it again. A genuine fault means isolate and investigate downstream. Won't close mechanically points to an interlock or spring charge, not an electrical cause.</p>

  <p class="n-p"><strong>Why do lights dim when a large motor starts?</strong><br>
  A DOL start's surge, five to seven times full load current, flows through the generator and cable's internal impedance and produces a real voltage drop across the whole busbar, felt by every load simultaneously.</p>

  <p class="n-p"><strong>You find a hot cable. What's your very first action?</strong><br>
  Make it safe, reduce or remove the load, before diagnosing anything. Cause comes second: overload, a loose connection, undersizing, or harmonics on a neutral feeding non-linear loads.</p>

  <p class="n-p"><strong>Why doesn't a single earth fault trip anything on an insulated system, and how do you trace it?</strong><br>
  It's built that way deliberately, no complete circuit exists back to source through a single fault alone, so no large current flows, that's why you have to go hunting for it. Sectionalise systematically from the main board outward, opening one feeder at a time and watching the indication, narrowing section by section until confirmed by megger.</p>

  <p class="n-p"><strong>A bearing is running hot. What do you check first?</strong><br>
  Lubrication and alignment, the cheapest and most common causes, then overload and mechanical wear, and on a VFD-driven motor, electrical bearing currents from the inverter's switching.</p>

  <p class="n-p"><strong>You're asked to work on a live board because it's urgent. What do you say?</strong><br>
  It gets isolated first: permit to work, lockout/tagout, prove dead, correct PPE, a second person present. Refusing unsafe work is stop-work authority, not insubordination.</p>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F25')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the F25 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

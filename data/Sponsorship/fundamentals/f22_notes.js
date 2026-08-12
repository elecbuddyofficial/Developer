window.loadNotes("F22", `<div class="view" id="view-notes-f22">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F22')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F22 - Refrigeration</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 22 of 25 · Difficulty ★★★★☆ · Study Time 55-75 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-scope')">Why This Is on the Syllabus</button>
    <button class="anc-btn" onclick="jumpTo('s-vcrs')">The VCRS Cycle</button>
    <button class="anc-btn" onclick="jumpTo('s-refrigerants')">Refrigerants</button>
    <button class="anc-btn" onclick="jumpTo('s-controls')">Electrical Controls</button>
    <button class="anc-btn" onclick="jumpTo('s-motor')">Compressor Motor</button>
    <button class="anc-btn" onclick="jumpTo('s-door')">The Open Door Question</button>
    <button class="anc-btn" onclick="jumpTo('s-interview')">Interview Answers</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to explain why refrigeration is on an ETO's oral and where the electrical boundary of your responsibility sits, name the four main components of a VCRS and describe what happens to the refrigerant's pressure and temperature at each stage as a real physical process, give an outline account of the refrigerant phase-out from CFCs through HCFCs to HFCs and lower-GWP alternatives, describe every electrical control on a shipboard plant, the thermostat, LP/HP cut-outs, oil differential switch, solenoid valve and defrost control, and derive from first principles, using an energy balance, why opening a fridge door does not cool the room but actually warms it on net.</p>

  <div class="n-h1" id="s-scope">Why Refrigeration Is on an ETO's Syllabus</div>
  <p class="n-p">Refrigeration and air conditioning on a merchant ship are mechanical plant in the sense that the refrigeration engineer's trade, brazing pipework, charging refrigerant, valve plates, gas recovery, is not electrical work and is not yours. So it is fair to ask why an oral examiner spends any time on it with an ETO candidate at all.</p>
  <p class="n-p">The answer is that every provision plant, cargo hold cooling system and air conditioning unit on the ship is driven by an electric motor, controlled by electrical switches and protected by electrical relays, and every one of those motors, switches and relays is unambiguously your responsibility. A compressor that will not start, trips repeatedly, or runs without the room cooling, very often turns out to be electrical once investigated: a tripped overload, a failed pressure switch, a burnt contactor, a blown control fuse. An ETO who cannot reason through a refrigeration control circuit is blind to a large share of the troubleshooting they will actually be called on to do at sea, even though they will never touch a refrigerant hose.</p>

  <div class="n-h2">Where the boundary actually sits</div>
  <table class="n-table">
    <tr><th>ETO's scope (electrical)</th><th>Refrigeration engineer / mechanical scope</th></tr>
    <tr><td>Compressor motor, starting, running, protection, its contactor and overload</td><td>Compressor mechanical condition: valves, pistons, crankshaft, seals</td></tr>
    <tr><td>Control circuit: thermostat, LP/HP cut-outs, oil differential switch, solenoids, defrost timer/heater</td><td>Refrigerant charge: leak detection, recovery, evacuation, recharging</td></tr>
    <tr><td>Condenser fan and pump motors, and their controls</td><td>Pipework, brazed joints, expansion valve setting and superheat</td></tr>
    <tr><td>Fault finding on the wiring diagram: voltage present, switch made, coil energised</td><td>Fault finding on the pressure-enthalpy diagram: charge, restrictions, compressor pumping properly</td></tr>
  </table>
  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Say this in the interview.</strong> My electrical responsibility is the motor, the starter, and every control device in the circuit, the thermostat, the pressure switches, the solenoids and the defrost control. The refrigerant side, charging, leak repair and mechanical work, is the refrigeration engineer's trade. A lot of "the fridge won't start" complaints turn out to be a tripped cut-out or failed switch, exactly where my job and the fault meet.</div></div>

  <div class="n-h1" id="s-vcrs">The Vapour Compression Refrigeration System (VCRS)</div>
  <p class="n-p">Almost every shipboard refrigeration and air conditioning plant, provision fridge and freezer rooms, cargo hold cooling, accommodation AC, works on the same cycle: the vapour compression refrigeration cycle. It has exactly four main components, connected in a closed loop, and the refrigerant circulates through all four continuously while the plant runs.</p>

  <table class="n-table">
    <tr><th>Component</th><th>Role</th></tr>
    <tr><td><strong>Compressor</strong></td><td>Draws in low pressure vapour and compresses it to high pressure, raising its temperature</td></tr>
    <tr><td><strong>Condenser</strong></td><td>Heat exchanger where hot high pressure vapour rejects heat to seawater or air and condenses to high pressure liquid</td></tr>
    <tr><td><strong>Expansion valve</strong></td><td>Restriction that throttles high pressure liquid to low pressure, flashing part to vapour and dropping temperature sharply</td></tr>
    <tr><td><strong>Evaporator</strong></td><td>Heat exchanger inside the cooled space where the cold mixture absorbs heat and boils off to low pressure vapour</td></tr>
  </table>

  <p class="n-p">Do not just name these four in order and stop, because that is naming the cycle, not understanding it. What actually earns marks is being able to say, for each of the four stages, what is physically happening to the refrigerant's pressure and temperature, and why. Work through it as one continuous physical story, not four disconnected facts.</p>

  <div class="n-h2">Stage 1: Compressor, low pressure vapour in, high pressure vapour out</div>
  <p class="n-p">Refrigerant vapour arrives at the compressor at low pressure and low temperature, having just boiled off in the evaporator. The compressor mechanically squeezes that vapour into a much smaller volume. Compressing a gas does real work on it, and that work has to go somewhere: it appears as an increase in the internal energy of the gas, which shows up as a rise in temperature. So leaving the compressor the refrigerant is vapour at high pressure and, importantly, at a temperature well above its saturation temperature at that pressure, it is superheated. That matters for the next stage: it has to be genuinely hotter than the cooling medium available, or it could never reject heat to it.</p>

  <div class="n-formula">Compressor: P low → P high, T low → T high (superheated vapour)</div>

  <div class="n-h2">Stage 2: Condenser, high pressure vapour in, high pressure liquid out</div>
  <p class="n-p">The hot, high pressure vapour now passes through the condenser, a heat exchanger cooled by seawater (a shell and tube condenser, very common on ships) or by air. Because the vapour is hotter than the cooling medium, heat flows from refrigerant to water or air, hot to cold. It first cools to its saturation temperature, then continues rejecting heat while condensing at essentially constant pressure and temperature, changing phase from vapour to liquid. It leaves the condenser as a high pressure liquid, usually slightly subcooled below saturation temperature, so only liquid, not a liquid-vapour mixture, arrives at the expansion valve.</p>

  <div class="n-formula">Condenser: P stays high, T falls to saturation then holds while it condenses (heat rejected to seawater/air)</div>

  <div class="n-h2">Stage 3: Expansion valve, high pressure liquid in, low pressure liquid/vapour mixture out</div>
  <p class="n-p">The high pressure liquid meets a deliberate restriction, the expansion valve (thermostatic, on most shipboard plant). Forcing the liquid through a small orifice drops its pressure sharply. This is throttling: no external work is done and no heat is exchanged with the surroundings, so enthalpy is essentially unchanged crossing the valve. But at the new, much lower pressure, saturation temperature is much lower too, so the liquid cannot all remain liquid. Part flashes instantly into vapour, drawing its latent heat from the remaining liquid, which is what drops the mixture's temperature sharply. What leaves is a cold, low pressure mixture of liquid and vapour, ready to do the actual cooling.</p>

  <div class="n-formula">Expansion valve: P drops sharply, T drops sharply (throttling, enthalpy essentially unchanged)</div>

  <div class="n-h2">Stage 4: Evaporator, low pressure liquid/vapour mixture in, low pressure vapour out</div>
  <p class="n-p">This cold mixture enters the evaporator, a heat exchanger sitting inside the space to be cooled, the fridge room, the freezer room, or an air handling unit's cooling coil. The refrigerant is colder than the air (or brine, or chilled water) around it, so heat flows the other way this time, from the space into the refrigerant. That heat boils the remaining liquid off into vapour at essentially constant low pressure and temperature, and it is precisely this boiling, this absorption of latent heat, that does the actual job of cooling the space. The vapour leaving is usually given a little superheat, warmed slightly past full vaporisation, to guarantee no liquid droplets reach the compressor, which is not built to compress liquid. That low pressure vapour then returns to the compressor, and the cycle repeats.</p>

  <div class="n-formula">Evaporator: P stays low, T stays low while it boils (heat absorbed from the cooled space)</div>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>The examiner's actual test.</strong> "Describe the refrigeration cycle" is not answered by reciting compressor, condenser, expansion valve, evaporator as four nouns. It is answered by narrating pressure and temperature at each stage and why: compression raises both by doing work on the vapour, the condenser rejects that heat at constant high pressure while the refrigerant condenses, the expansion valve throttles the liquid to low pressure with a sharp temperature drop, and the evaporator absorbs heat at constant low pressure while the refrigerant boils. Two heat exchangers, one compressor doing work, one valve just restricting flow. That is the physical cycle, not just its component list.</div></div>

  <div class="n-h1" id="s-refrigerants">Refrigerants and the Environmental Position</div>
  <p class="n-p">This is worth knowing in outline, because an interviewer may ask what refrigerant a given plant uses and why it is not the older type any more.</p>
  <p class="n-p"><strong>CFCs</strong> (chlorofluorocarbons, R11, R12 and similar) were the original refrigerants of choice: chemically stable, non-flammable, effective. That same chlorine content, however, is what made them destructive to the stratospheric ozone layer once released, and the Montreal Protocol phased them out from the late 1980s onward.</p>
  <p class="n-p"><strong>HCFCs</strong> (hydrochlorofluorocarbons, principally <span class="n-val">R22</span>) were the transitional replacement: still containing chlorine and therefore still ozone depleting, but far less so than a CFC, and were used very widely on ships for decades, including in many provision plants still in service. R22 has itself been phased out under the same Montreal Protocol timeline (production and import banned in most jurisdictions from the early 2020s, with servicing exceptions tapering off further), so an R22 system found on an older ship is running on a refrigerant bank that can no longer be freely replenished, a real constraint that is pushing retrofits and plant replacement across the industry.</p>
  <p class="n-p"><strong>HFCs</strong> (hydrofluorocarbons) contain no chlorine, so they have zero ozone depletion potential, and became the standard replacement. <span class="n-val">R404A</span> and <span class="n-val">R134a</span> are the two most commonly encountered on ships from this generation, R404A on low and medium temperature plant (freezer rooms, provision chill and freeze), R134a on medium and higher temperature duties such as air conditioning. HFCs solved the ozone problem but not the climate one: they carry a high Global Warming Potential (GWP), so a given mass released traps far more heat over time than the same mass of carbon dioxide, driving the next round of regulatory pressure (the EU F-Gas Regulation being the clearest driver) away from high-GWP HFCs as well.</p>
  <p class="n-p">The current direction is toward <strong>lower-GWP alternatives</strong>: HFO/HFC blends such as <span class="n-val">R448A</span> and <span class="n-val">R449A</span> as drop-in-style replacements for R404A, and natural refrigerants, principally <strong>R290 (propane)</strong>, where equipment is specifically designed to handle a flammable charge safely. This module will not attach one precise GWP figure to each in isolation, since published values vary by reporting standard and blend composition, quoting the general trend correctly, CFC to HCFC to HFC to lower-GWP blends or naturals, matters more here than a number that may be misremembered.</p>

  <table class="n-table">
    <tr><th>Generation</th><th>Examples</th><th>Ozone</th><th>Climate</th><th>Status</th></tr>
    <tr><td>CFC</td><td>R11, R12</td><td>Ozone depleting, contains chlorine</td><td>&nbsp;</td><td>Phased out, Montreal Protocol, from the late 1980s</td></tr>
    <tr><td>HCFC</td><td><span class="n-val">R22</span></td><td>Still ozone depleting, less so</td><td>&nbsp;</td><td>Phased out, early 2020s, servicing exceptions tapering</td></tr>
    <tr><td>HFC</td><td><span class="n-val">R404A</span>, <span class="n-val">R134a</span></td><td>Zero, no chlorine</td><td>High GWP</td><td>In service, under regulatory pressure</td></tr>
    <tr><td>Lower-GWP</td><td><span class="n-val">R448A</span>, <span class="n-val">R449A</span>, <span class="n-val">R290</span></td><td>Zero</td><td>Much lower GWP</td><td>Current direction; R290 is flammable</td></tr>
  </table>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Shipboard safety point worth having ready.</strong> A refrigerant leak in an enclosed space, a compressor room or the cooled space itself, is an asphyxiation hazard even for a refrigerant that is otherwise non-toxic and non-flammable, because it can displace breathable air. That is why refrigeration machinery spaces carry mandatory ventilation and gas detection, and why entry into a space with a suspected leak follows enclosed space entry procedure, checking the atmosphere first, not assuming a "safe" refrigerant makes it safe to walk in unchecked. Where a flammable refrigerant such as R290 is used, that space additionally carries an explosion risk, so such plants are built and ventilated for a flammable charge specifically.</div></div>

  <div class="n-h1" id="s-controls">Electrical Controls on a Shipboard Plant</div>
  <p class="n-p">This is the section that is squarely your responsibility, and it is also where most real troubleshooting happens. Each control below exists to answer a specific question about the state of the plant, and each is worth knowing by what it protects against, not just its name.</p>

  <div class="n-h2">Thermostat</div>
  <p class="n-p">The thermostat senses the temperature of the cooled space (or of the return air/brine) and is the normal, everyday control that starts and stops the plant, or opens and closes a solenoid valve feeding an evaporator, to hold the space at setpoint. It is not a safety device, it is the ordinary running control: room too warm, thermostat calls for cooling; setpoint reached, thermostat cuts it off. A built-in differential (a gap between cut-in and cut-out temperature) stops the plant rapidly cycling on and off right at setpoint, which would be hard on the compressor and its motor.</p>

  <div class="n-h2">Low pressure (LP) cut-out</div>
  <p class="n-p">Senses suction pressure, the pressure of vapour returning to the compressor from the evaporator, and trips the compressor if that pressure falls too low. A falling suction pressure normally means either the space has reached temperature and the solenoid has shut off refrigerant flow, so there is no more vapour returning (in this everyday role the LP cut-out is often doing the actual stop/start job, cycling the plant), or something abnormal, a leak, a blocked filter or restricted expansion valve starving the evaporator, or a solenoid stuck shut. Either way, running with too little suction pressure draws the system down toward or into a vacuum: air and moisture can be drawn in past any imperfect seal once pressure falls below atmospheric, contaminating refrigerant and oil, and a compressor pulling almost no returning vapour has little cold suction gas left to cool its motor and cylinder heads. The LP cut-out is normally self-resetting, since low suction pressure from a satisfied thermostat cycling the solenoid is a routine daily event, not a fault.</p>

  <div class="n-h2">High pressure (HP) cut-out</div>
  <p class="n-p">Senses discharge pressure, the pressure the compressor is pushing out to the condenser, and trips the compressor if that pressure rises too high. A high discharge pressure means the condenser is not rejecting heat properly: a fouled or scaled condenser, a failed seawater cooling pump or blocked strainer, air trapped in the system reducing effective heat transfer surface, or simple overcharging. Left unchecked it overloads the compressor mechanically (valves, bearings, crankshaft all see higher loads) and risks a burst fitting on the high side. Because the underlying cause always needs a person to investigate and fix, the HP cut-out is deliberately <strong>manual reset</strong>: someone has to find out why discharge pressure rose and physically reset it before the compressor restarts, the same design logic as no-volt release in F12, built so a fault gets looked at rather than the machine quietly cycling back and repeating the trip.</p>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>The pairing question.</strong> "Why is one auto-reset and the other manual?" The LP cut-out very often trips as part of completely normal operation, thermostat satisfied, solenoid shut, suction pressure falling, so forcing a manual reset every cycle would be absurd and would train people to defeat the safety function out of irritation. The HP cut-out only trips when something is genuinely wrong with heat rejection or the charge, a condition that will not fix itself, so it is built to force investigation by staying tripped until someone deliberately resets it.</div></div>

  <div class="n-h2">Oil pressure / oil differential pressure switch</div>
  <p class="n-p">Protects the compressor's own bearings and crankshaft by ensuring the oil pump is delivering adequate oil pressure. Because the oil pump draws suction from the same crankcase that is at suction (low side) pressure, what matters for lubrication is not absolute oil pressure but the <strong>differential</strong> between oil pump discharge pressure and crankcase suction pressure, since that differential is what forces oil through the bearing clearances. The switch compares the two pressures directly and trips, on manual reset, if the differential falls below a safe minimum, guarding against a failed oil pump, a blocked filter, or low oil level, any of which would let the compressor run its bearings dry.</p>

  <div class="n-h2">Solenoid valve</div>
  <p class="n-p">An electrically operated valve fitted in the liquid line just ahead of the expansion valve for each evaporator (a multi-room plant typically has one solenoid per room). The thermostat energises or de-energises the coil to open or shut refrigerant flow to that evaporator. This is what lets one compressor serve several spaces independently, each room's own thermostat and solenoid deciding whether that room is currently calling for cooling, while the compressor itself runs on a wider LP cut-out or pump-down control governed by overall suction pressure.</p>

  <div class="n-h2">Defrost control</div>
  <p class="n-p">On any evaporator <span class="n-val">running below 0°C</span>, moisture in the air freezes onto its surface as frost. That frost layer insulates and progressively blocks airflow, steadily reducing the evaporator's ability to absorb heat even though the plant runs normally otherwise. The defrost control periodically interrupts cooling and melts that frost off, commonly by an electric heater built into the coil, by briefly reversing hot gas from the compressor discharge through the evaporator (hot gas defrost), or by simply stopping the compressor and letting room air melt the ice (off-cycle defrost, more common near 0°C than in a hard freezer). A timer or a demand-based sensor initiates the cycle, runs it for a set duration, and returns the plant to normal cooling once a termination sensor confirms the coil is clear.</p>

  <div class="n-h1" id="s-motor">Compressor Motor Starting and Protection</div>
  <p class="n-p">The compressor is driven by a three phase induction motor, and everything that applies to starting and protecting any other shipboard motor applies here without modification. This module will not repeat that material, it is covered properly in <strong>F11 (Motor Starting)</strong> and <strong>F12 (Motor Protection)</strong>, and an interviewer asking about starting or protecting a compressor motor is testing whether you can apply those two modules to this specific machine, not testing new material.</p>
  <p class="n-p">Two points are specific to a refrigeration compressor and worth stating when the two modules are brought together here:</p>
  <div class="n-steps">
    <p class="n-p">1. <strong>Starting against pressure.</strong> A reciprocating compressor that has just stopped still has discharge pressure trapped above its valves. Starting back into that residual pressure asks the motor for more starting torque than starting unloaded, the F11 consideration of whether the load needs torque at rest, which is why many plants fit a short <strong>pump-down or anti-recycle delay</strong> after a stop, letting the pressure differential equalise before the next start.</p>
    <p class="n-p">2. <strong>Stall protection matters more here.</strong> A compressor that has ingested liquid refrigerant, from a badly set expansion valve or a plant fault, can hydraulically lock, since liquid does not compress the way vapour does. The inverse-time overload relay from F12 catches that stalled condition, sustained high current with no acceleration, the same mechanism as any locked rotor, which is why its trip class has to be matched to this machine's own starting behaviour rather than assumed generic.</p>
  </div>

  <div class="n-h1" id="s-door">The Open Fridge Door Question</div>
  <p class="n-p">A classic oral question, asked because it is easy to get wrong by instinct and only gets answered correctly by reasoning it through: if you leave the fridge or freezer room door open, does it cool the surrounding space? The honest, physically correct answer is no, it warms it, and the reasoning is worth building from first principles rather than just quoting the conclusion, because the derivation is what the examiner is actually listening for.</p>

  <div class="n-h2">Setting up the energy balance</div>
  <p class="n-p">Treat the whole machine, compressor, condenser, expansion valve and evaporator together, as a single system with two places where energy crosses its boundary as heat, plus one place where energy is put in as work. At the evaporator the machine absorbs heat from the cooled space, call this <strong>Q<sub>absorbed</sub></strong>, the cooling effect, the whole reason the plant exists. At the compressor, electrical energy drives the motor, which does mechanical work compressing the vapour, call this <strong>W<sub>compressor</sub></strong>; this energy does not vanish, it is added to the refrigerant, which is exactly why the vapour comes out hotter, as derived above. At the condenser the machine rejects heat, everything the refrigerant is carrying, call this <strong>Q<sub>rejected</sub></strong>.</p>
  <p class="n-p">Apply the first law of thermodynamics, energy is conserved, to the refrigerant as it goes right around the closed loop once. Whatever energy enters must equal whatever leaves, since the refrigerant returns to the same state it started at after one full cycle:</p>

  <div class="n-formula">Q<sub>rejected</sub> = Q<sub>absorbed</sub> + W<sub>compressor</sub></div>

  <p class="n-p">In words: the heat thrown away at the condenser is not just the heat picked up at the evaporator, it is that heat <strong>plus</strong> the mechanical work the compressor did to move it there. This falls straight out of energy conservation applied to the refrigerant loop, and it is true of every vapour compression machine that exists, a domestic fridge, a ship's provision plant, or a split unit air conditioner.</p>

  <div class="n-h2">Now place the machine inside the room</div>
  <p class="n-p">The evaporator, which does the cooling, sits inside the cold room. But the condenser, which rejects the larger heat quantity, and the compressor motor's own losses do not: on a fridge or freezer room the compressor and condenser unit is typically outside the cooled space entirely, in the machinery space or on deck, rejecting heat to seawater or the surrounding air, not back into the room being cooled. So under normal, closed-door operation, the room only ever sees one side of the machine, the evaporator absorbing Q<sub>absorbed</sub>, while Q<sub>rejected</sub>, the larger quantity, leaves the system entirely through the condenser. The room is cooled, and the extra heat, the compressor's work, is dumped elsewhere, usually straight overboard via the seawater cooling.</p>

  <div class="n-h2">What actually changes with the door open</div>
  <p class="n-p">Leaving the door open does not add a condenser into the room. It lets warm air from outside flood in and mix with the cold air inside (cold air is denser and sinks, warm air rises in through the top of the doorway), so the thermostat sees continuous demand and the compressor runs flat out rather than cycling. The evaporator is now only removing heat from air that is being replaced by more warm air just as fast, while the compressor, running continuously, does considerably more work, W<sub>compressor</sub>, drawing more power for longer than with the door shut, for less net cooling actually retained in the room.</p>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>The precise, defensible answer.</strong> An open fridge door does not cool the surrounding room, because the room's own air keeps leaking out and being replaced by warmer air faster than the evaporator can usefully chill the space, while the compressor, now running continuously instead of cycling, does considerably more work than it otherwise would. By Q<sub>rejected</sub> = Q<sub>absorbed</sub> + W<sub>compressor</sub>, every joule the evaporator absorbs is rejected again at the condenser plus the compressor's own work on top, so the machine is, if anything, pumping more total heat into circulation around the room than it would running normally with the door shut. Net effect: the room does not cool, and once the extra compressor work and motor losses are accounted for, the surrounding space is warmer for the exercise, not cooler. This is the same reasoning behind why "cooling a kitchen by leaving the fridge door open" is a textbook physics fallacy: the condenser always rejects more heat into the room than the evaporator removes from it.</div></div>

  <p class="n-p">The reasoning generalises: a vapour compression machine only produces a net cooling effect on a space if its condenser rejects heat somewhere <strong>outside</strong> that space, seawater, outside air, or a separately ventilated machinery space. The moment the condenser's rejected heat and the room being cooled share the same air, the machine cannot net-cool that combined space, because by the energy balance it always puts more heat in at the condenser than it takes out at the evaporator.</p>

  <div class="n-h1" id="s-interview">Interview Answers, Rapid Fire</div>

  <p class="n-p"><strong>Why is refrigeration on an ETO's syllabus if it isn't your trade?</strong><br>
  Every provision plant and AC unit is driven by an electric motor and controlled by electrical switches and relays, all the ETO's responsibility. Many "the fridge won't start" faults turn out to be a tripped cut-out, a failed switch or a burnt contactor, not a refrigerant problem, so reasoning through the control circuit is a real, everyday part of the job even though charging and mechanical compressor work are not.</p>

  <p class="n-p"><strong>Describe the refrigeration cycle.</strong><br>
  Four components in a closed loop. The compressor takes in low pressure vapour and compresses it, raising pressure and temperature by doing work on it. The condenser rejects that heat to seawater or air at constant high pressure while the vapour condenses to liquid. The expansion valve throttles the liquid down to low pressure, dropping temperature sharply as part flashes to vapour. The evaporator absorbs heat from the cooled space at constant low pressure while the refrigerant boils back to vapour, which returns to the compressor to repeat the cycle.</p>

  <p class="n-p"><strong>What is VCRS?</strong><br>
  The vapour compression refrigeration system, the standard cycle behind almost every shipboard refrigeration and AC plant: compressor, condenser, expansion valve, evaporator, moving refrigerant continuously around a closed loop, alternating between high and low pressure sides and between liquid and vapour phases, to move heat from a cold space to a warmer one by doing mechanical work on the refrigerant.</p>

  <p class="n-p"><strong>Does an open fridge door cool the room?</strong><br>
  No, it warms it on net. By the energy balance, Q rejected at the condenser equals Q absorbed at the evaporator plus the compressor's own work input. With the door open, cold air keeps escaping and being replaced by warm air faster than the evaporator can usefully chill the space, while the compressor runs continuously instead of cycling, doing more work than normal. The condenser always rejects more heat than the evaporator absorbs, so a machine cannot net-cool a space that shares air with its own condenser.</p>

  <p class="n-p"><strong>What is the difference between the LP and HP cut-outs?</strong><br>
  The LP cut-out senses suction pressure and trips on low pressure, which happens routinely during normal cycling once the thermostat is satisfied, so it is self-resetting. The HP cut-out senses discharge pressure and trips on high pressure, which always means a real problem, a fouled condenser, lost cooling water, or overcharge, so it is manual reset, forcing someone to find and fix the cause before restarting.</p>

  <p class="n-p"><strong>What does the oil pressure switch protect?</strong><br>
  The compressor's bearings and crankshaft. It compares oil pump discharge pressure against crankcase suction pressure, since that differential forces oil through the bearings, and trips on manual reset if it falls too low, guarding against a failed pump, blocked filter, or low oil level.</p>

  <p class="n-p"><strong>What does a solenoid valve do in a refrigeration plant?</strong><br>
  An electrically operated valve in the liquid line ahead of each evaporator, opened and closed by that room's thermostat to control refrigerant flow into it. It is what lets one compressor serve several rooms independently, each with its own thermostat and solenoid.</p>

  <p class="n-p"><strong>Why does an evaporator need defrosting?</strong><br>
  Moisture freezes onto any evaporator <span class="n-val">running below 0°C</span>, and that frost insulates the coil and blocks airflow, steadily reducing cooling capacity. A defrost control periodically melts it off, by electric heater, hot gas defrost, or off-cycle, on a timer or demand basis, then returns the plant to normal cooling.</p>

  <p class="n-p"><strong>How do you start and protect a refrigeration compressor motor?</strong><br>
  The same way as any other three phase induction motor, F11 for starting method, F12 for protection, since it is the same machine doing the same job electrically. Specific to a compressor: it may need to start against residual discharge pressure, handled by a short pump-down delay after stopping, and the overload relay's trip class has to be matched to this machine's own starting behaviour to still catch a genuine hydraulic lock or stall.</p>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F22')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the F22 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

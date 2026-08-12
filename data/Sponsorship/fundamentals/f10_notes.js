window.loadNotes("F10", `<div class="view" id="view-notes-f10">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F10')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F10 - DC Motors</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 10 of 25 · Difficulty ★★★☆☆ · Study Time 50-70 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-construction')">Construction</button>
    <button class="anc-btn" onclick="jumpTo('s-principle')">Working Principle</button>
    <button class="anc-btn" onclick="jumpTo('s-backemf')">Back EMF</button>
    <button class="anc-btn" onclick="jumpTo('s-types')">Types of DC Motor</button>
    <button class="anc-btn" onclick="jumpTo('s-speedcontrol')">Speed Control</button>
    <button class="anc-btn" onclick="jumpTo('s-commutation')">Commutation</button>
    <button class="anc-btn" onclick="jumpTo('s-armreaction')">Armature Reaction</button>
    <button class="anc-btn" onclick="jumpTo('s-starter')">3-Point Starter</button>
    <button class="anc-btn" onclick="jumpTo('s-onboard')">DC On Board Today</button>
    <button class="anc-btn" onclick="jumpTo('s-interview')">Interview Answers</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to draw and label a DC motor's construction, apply Fleming's Left Hand Rule, derive the back EMF equation and explain why it makes a DC motor self-regulating, explain why a DC motor cannot be started direct on line, describe the speed and torque behaviour of shunt, series and compound motors with a marine example for each, explain the three ways of controlling DC motor speed, describe what the commutator does and why brushes spark, explain armature reaction and its remedies, draw a three point starter with the no-volt and overload coils, and state where DC still appears on a modern ship.</p>

  <div class="n-h1" id="s-construction">Construction of a DC Motor</div>
  <p class="n-p">A DC motor and a DC generator are the same machine. Feed mechanical power in, take electrical power out, it is a generator. Feed electrical power in, take mechanical power out, it is a motor. The construction is identical, only the direction of energy flow differs, worth saying in an interview since it shows you understand the machine rather than two separate ones.</p>

  <table class="n-table">
    <tr><th>Part</th><th>Function</th></tr>
    <tr><td><strong>Yoke (frame)</strong></td><td>Outer body, usually cast or rolled steel. Mechanical support, and part of the magnetic circuit carrying flux between poles.</td></tr>
    <tr><td><strong>Field poles and field winding</strong></td><td>Fixed inside the yoke. The field winding, carrying DC, produces the stationary field the armature works against. In a small motor the poles may be permanent magnets instead.</td></tr>
    <tr><td><strong>Armature core</strong></td><td>The rotating part, built from thin insulated silicon steel laminations rather than a solid block, breaking up eddy current paths and cutting eddy current loss. Slotted to carry the armature winding.</td></tr>
    <tr><td><strong>Armature winding</strong></td><td>Copper conductors in the armature slots, connected to the commutator segments. Carries the load current and develops the motive force.</td></tr>
    <tr><td><strong>Commutator</strong></td><td>A cylinder of hard drawn copper segments, insulated from each other and the shaft by mica, rotating with the armature. The mechanical rectifier of the machine, detailed in the Commutation section below.</td></tr>
    <tr><td><strong>Brushes</strong></td><td>Carbon or carbon-graphite blocks, spring loaded onto the rotating commutator. The sliding contact between the fixed external circuit and the rotating winding.</td></tr>
    <tr><td><strong>Shaft and bearings</strong></td><td>Carry the mechanical load and support the rotating assembly.</td></tr>
  </table>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>The field is stationary, the armature rotates.</strong> This is opposite to how many candidates first picture it, and it is worth stating plainly. The current carrying armature conductors sit inside the fixed magnetic field of the poles, and it is the force on those conductors, not on the field, that turns the shaft.</div></div>

  <div class="n-h1" id="s-principle">Working Principle and Fleming's Left Hand Rule</div>
  <p class="n-p">The principle is simple to state: whenever a current carrying conductor is placed in a magnetic field, it experiences a mechanical force. In a DC motor, the field poles supply the magnetic field, the armature winding carries the current, and the resulting force on each armature conductor, multiplied around the whole armature and converted to a turning effect at the commutator, produces the torque that turns the shaft.</p>

  <div class="n-formula">F = B × I × L<div class="label">F = force (N) · B = flux density (T) · I = conductor current (A) · L = conductor length in the field (m)</div></div>

  <p class="n-p">The direction of that force is found with <strong>Fleming's Left Hand Rule</strong>. Hold the thumb, first finger and second finger of the left hand mutually at right angles. The <strong>First</strong> finger points along the <strong>Field</strong>, the se<strong>Cond</strong> finger along the <strong>Current</strong>, and the thu<strong>M</strong>b then gives the resulting <strong>Motion</strong> (force).</p>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Left hand for motors, right hand for generators.</strong> An easy slip under pressure. Fleming's <strong>Left</strong> Hand Rule gives the force (motor action, electrical in, mechanical out). Fleming's <strong>Right</strong> Hand Rule gives the induced EMF (generator action, mechanical in, electrical out). Say "left hand, motor" a few times before the interview so it does not swap on you.</div></div>

  <p class="n-p">Because the armature conductors under one pole all carry current in the same direction relative to that pole's flux, and the conductors under the opposite pole carry current the opposite way relative to the opposite flux, the forces on both sides of the armature add up to a continuous turning torque rather than cancelling. Keeping each conductor's current pointing the correct way as it rotates past alternating N and S poles is exactly the job the commutator does, covered below.</p>

  <div class="n-h1" id="s-backemf">Back EMF: Its Significance</div>
  <p class="n-p">This is one of the two or three most heavily asked concepts in the whole DC machines topic, and it deserves to be understood from first principles rather than memorised as a formula.</p>

  <div class="n-h2">Why a back EMF exists at all</div>
  <p class="n-p">Once the armature starts to rotate, its conductors are moving through the same magnetic field that is driving them. A conductor moving through a magnetic field has an EMF induced in it, exactly as in a generator, by Faraday's law, which does not care whether the conductor moves because you spun it by hand or because motor torque is spinning it. By Lenz's law, the induced EMF always opposes the applied voltage driving the current, which is why it is called the <strong>back EMF</strong>, E<sub>b</sub>.</p>

  <div class="n-formula">E<sub>b</sub> = V − I<sub>a</sub> × R<sub>a</sub><div class="label">E<sub>b</sub> = back EMF (V) · V = supply voltage (V) · I<sub>a</sub> = armature current (A) · R<sub>a</sub> = armature resistance (Ω)</div></div>

  <p class="n-p">Rearranged, this is just Kirchhoff's Voltage Law applied to the armature circuit: the supply voltage V is used partly to overcome the back EMF and partly to drive the armature current through the armature's own resistance.</p>
  <div class="n-formula">V = E<sub>b</sub> + I<sub>a</sub> × R<sub>a</sub></div>

  <div class="n-h2">Why this makes the motor self-regulating</div>
  <p class="n-p">Back EMF is proportional to armature speed: E<sub>b</sub> = k × φ × N, where φ is the field flux and N is the speed. As the motor speeds up, E<sub>b</sub> rises, and from I<sub>a</sub> = (V − E<sub>b</sub>) / R<sub>a</sub>, a rising E<sub>b</sub> shrinks (V − E<sub>b</sub>), so I<sub>a</sub> automatically falls.</p>
  <p class="n-p">Now throw a mechanical load onto the shaft. The motor momentarily slows, a lower speed means a lower back EMF, a lower back EMF means a larger (V − E<sub>b</sub>), so I<sub>a</sub> automatically increases. Since torque is proportional to I<sub>a</sub> (T = k × φ × I<sub>a</sub>), the extra current produces exactly the extra torque needed, and the motor settles at a new, very slightly lower speed. Take load off and the reverse happens automatically.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>The one line answer.</strong> Back EMF is what makes a DC motor draw exactly the current it needs to supply the load, no more and no less, without any external control action. It is a built-in negative feedback loop: more load, less back EMF, more current, more torque, all happening automatically because back EMF depends on speed and speed is what the load is trying to change.</div></div>

  <div class="n-h2">Why starting current would be huge without a starter</div>
  <p class="n-p">At the instant of starting, the armature is not turning, so N = 0, and therefore E<sub>b</sub> = k × φ × 0 = <span class="n-val">0</span>. There is no back EMF at all to oppose the supply. Looking at I<sub>a</sub> = (V − E<sub>b</sub>) / R<sub>a</sub> with E<sub>b</sub> at zero, the entire supply voltage V is left to drive current through only the armature's own resistance R<sub>a</sub>, and R<sub>a</sub> is deliberately made very low, typically well under an ohm on a machine of any size, to keep running losses (I<sub>a</sub>²R<sub>a</sub>) small.</p>
  <p class="n-p">A small resistance across full supply voltage with nothing else opposing it produces a very large current. Different sources quote different multiples for an unstarted machine, roughly four times full load current up into the mid teens or higher, and the exact multiple is machine specific, not worth memorising as a fixed number. What matters for the interview is the reasoning: at standstill there is no back EMF, so the only thing limiting current is the armature's own very low resistance, and that current is large enough to damage the commutator, brushes and winding insulation.</p>
  <p class="n-p">This is why a DC motor of any real size is never connected straight to the supply. A starter (see the 3-Point Starter section) inserts external resistance in series with the armature at starting, limiting current to a safe value, roughly one and a half to two times full load current, while the motor builds speed and its own back EMF takes over. The starter resistance is then cut out step by step, matched to rising back EMF, until at full speed back EMF alone is doing the regulating.</p>

  <div class="n-h1" id="s-types">Types of DC Motor</div>
  <p class="n-p">All three types are built from the same armature and field, only the way the field winding is connected relative to the armature differs, and that single wiring choice is what gives each type its distinct speed and torque personality.</p>

  <div class="n-h2">Shunt motor</div>
  <p class="n-p">The field winding is connected in <strong>parallel</strong> with the armature, across the same supply. Because it sees a constant voltage, the field current, and therefore the flux φ, stays essentially constant regardless of load, changing only slightly as the armature voltage drop changes with load current.</p>
  <p class="n-p">With φ nearly constant, speed N = E<sub>b</sub> / (k × φ) depends almost entirely on E<sub>b</sub>, which itself only falls a little as load increases (because I<sub>a</sub>R<sub>a</sub> is a small term). The result is a speed that stays <strong>almost constant from no load to full load</strong>, a flat speed-load characteristic. Torque rises roughly in proportion to armature current since φ is constant, T = k × φ × I<sub>a</sub>.</p>
  <p class="n-p"><strong>Marine application:</strong> anywhere steady, load-independent speed matters, classically machine tools, workshop lathes, and DC driven fans and blowers. Shunt is also the baseline the other two types are compared against.</p>

  <div class="n-h2">Series motor</div>
  <p class="n-p">The field winding is connected in <strong>series</strong> with the armature, so the same current flows through both. The field winding carries the full load current and is wound with few turns of heavy conductor, unlike the shunt field's many turns of fine wire.</p>
  <p class="n-p">Since field current equals armature current, flux φ rises with load, at least until the iron saturates. Torque, T = k × φ × I<sub>a</sub>, then rises roughly with the square of current, giving <strong>very high starting torque</strong>. Speed does the opposite: N = E<sub>b</sub> / (k × φ), so a rising φ as load increases drives speed sharply down, a steeply drooping characteristic.</p>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>A series motor must never be started or run unloaded.</strong> At light or no load, φ collapses toward the small residual value and, since N = E<sub>b</sub>/(kφ), speed rises without a natural limit, a condition called <strong>racing</strong>, which can destroy the motor mechanically before anything else intervenes. A series motor must always be coupled to its load through a solid or geared connection, never through a belt that could slip or break.</div></div>

  <p class="n-p"><strong>Marine application:</strong> anywhere very high starting torque against a heavy stationary load matters more than constant speed, classically electric winches, windlasses and cranes, and historically DC traction on some deck machinery, all cases where the load is heaviest at the moment of starting and eases as motion begins.</p>

  <div class="n-h2">Compound motor</div>
  <p class="n-p">A compound motor has <strong>both</strong> a shunt field and a series field on the same poles, combining the two characteristics. In a <strong>cumulative compound</strong> motor the two fields aid each other: high starting torque like a series motor from the series field, but inherently safe to run unloaded because the shunt field alone maintains some flux and prevents racing. Speed falls somewhat with load, more than a pure shunt motor but far less steeply than a pure series motor.</p>
  <p class="n-p"><strong>Marine application:</strong> cargo winches and windlasses where high starting torque is wanted but the machine must also be safe to run light, for instance reeling in slack wire with no load on the hook. The cumulative compound motor gives series-like torque to break away a heavy load, then settles to a controlled, non-racing speed as load comes off.</p>

  <table class="n-table">
    <tr><th>Type</th><th>Speed with load</th><th>Starting torque</th><th>Marine example</th></tr>
    <tr><td><strong>Shunt</strong></td><td class="ok">Almost constant</td><td>Moderate</td><td>Fans, blowers, machine tools</td></tr>
    <tr><td><strong>Series</strong></td><td class="hl">Falls sharply as load falls, races if unloaded</td><td class="hl">Very high</td><td>Winches, windlasses, cranes, traction</td></tr>
    <tr><td><strong>Compound (cumulative)</strong></td><td>Falls moderately with load</td><td>High</td><td>Cargo winches needing both high starting torque and safe light running</td></tr>
  </table>

  <div class="n-h1" id="s-speedcontrol">Speed Control of DC Motors</div>
  <p class="n-p">All three methods fall directly out of the same speed equation used above, so derive them from it rather than listing them as unrelated facts:</p>
  <div class="n-formula">N = E<sub>b</sub> / (k × φ) = (V − I<sub>a</sub>R<sub>a</sub>) / (k × φ)</div>
  <p class="n-p">There are only two variables on the right that can be manipulated from outside the machine, the flux φ and the terms making up E<sub>b</sub>, which gives exactly three control methods.</p>

  <div class="n-h2">1. Field control</div>
  <p class="n-p">A rheostat in series with the shunt field winding reduces field current, which reduces φ. Since N is inversely proportional to φ, <strong>reducing the field increases speed</strong>. This is a compact, low power way to control speed because the rheostat only carries the small field current, not the heavy armature current, but it only works to raise speed <strong>above</strong> base speed, and torque falls as speed rises since T = k × φ × I<sub>a</sub> and φ has been reduced. It also cannot be used on a series motor's own field without care, since a very weak series field risks racing.</p>

  <div class="n-h2">2. Armature control (armature resistance control)</div>
  <p class="n-p">A rheostat in series with the armature deliberately increases the voltage dropped across I<sub>a</sub>R<sub>a</sub>, reducing E<sub>b</sub> at a given supply voltage and so <strong>reducing speed below</strong> base speed. It is inherently wasteful, the extra resistance dissipates power as heat proportional to I<sub>a</sub>² at every speed below full, so it suits starting duty or intermittent low power use rather than continuous variable speed running.</p>

  <div class="n-h2">3. Voltage control (armature voltage control)</div>
  <p class="n-p">Instead of wasting power in a resistor, the supply voltage V applied to the armature is varied directly, changing E<sub>b</sub> and therefore N smoothly without lossy resistance. Historically this was done with a Ward Leonard set, a dedicated DC generator whose output voltage was varied to feed the motor armature. A modern installation achieves the same result electronically, with a controlled rectifier or DC-DC converter. This gives smooth, efficient speed control both above and below base speed and is the method used wherever DC motors still do variable speed duty today.</p>

  <table class="n-table">
    <tr><th>Method</th><th>What is varied</th><th>Speed range</th><th>Efficiency</th></tr>
    <tr><td>Field control</td><td>Field current (φ)</td><td>Above base speed</td><td>Good, small power in the field circuit</td></tr>
    <tr><td>Armature resistance control</td><td>Resistance in series with armature</td><td>Below base speed</td><td>Poor, wastes power as heat</td></tr>
    <tr><td>Voltage control</td><td>Armature supply voltage directly</td><td>Above and below base speed</td><td>Good, no resistive loss</td></tr>
  </table>

  <div class="n-h1" id="s-commutation">Commutation and Brushes</div>
  <p class="n-p">The armature winding, as it physically rotates, has each individual coil passing first under a north pole and then under a south pole. For the force on that coil to keep contributing torque in the same rotational direction, the current in the coil must reverse direction every time it crosses from one pole to the next. Left alone, a coil connected to a fixed external DC supply would have no way to do this.</p>
  <p class="n-p">The <strong>commutator</strong> is what solves it. It is a mechanical rotary switch, a ring of copper segments fixed to and rotating with the shaft, each segment connected to one or a group of armature coil ends. The brushes stay fixed in space and press against whichever segments are passing underneath at that instant. As the armature turns, at the exact moment a coil crosses from one pole to the next, its segment passes under the gap between brushes and the brush contact switches to the next segment, reversing the coil's connection to the fixed external terminals at exactly the moment its position requires the current to reverse.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>The one line answer.</strong> The commutator is a mechanical rectifier: it continuously reverses the connection between each armature coil and the fixed brushes at the instant that coil needs its current reversed, so the brushes always see current flowing in a consistent direction despite the winding itself carrying alternating current.</div></div>

  <p class="n-p"><strong>Why brushes spark.</strong> The moment a coil is short circuited by a brush bridging two adjacent segments is the commutation period. If the coil's current is not brought cleanly to zero and reversed within that brief period, it is broken open still carrying current, and that abrupt interruption in an inductive coil produces a spark, the same physics as breaking any inductive circuit at a switch. Sparking damages the brush surface and burns the commutator over time. Brush position, pressure, material and interpoles all exist partly to keep commutation clean.</p>

  <div class="n-h1" id="s-armreaction">Armature Reaction</div>
  <p class="n-p">When the armature carries load current, that current is itself a set of current carrying conductors, and by the same physics that makes the motor turn in the first place, those conductors produce their own magnetic field. So the total field in the machine is not just the field winding's flux alone, it is the field winding's flux <strong>combined with</strong> the magnetic field produced by the armature current itself. This distortion and weakening of the main field by the armature's own field is <strong>armature reaction</strong>.</p>

  <div class="n-h2">Its two effects</div>
  <p class="n-p"><strong>1. Distortion of the field.</strong> The combined field is no longer symmetrical about the pole centre, it is skewed in the direction of rotation. This shifts the magnetic neutral axis, where a coil's current genuinely needs to reverse, away from the geometric axis where the brushes physically sit. If brushes stay on the geometric axis while the magnetic axis has shifted, coils are commutated while still carrying significant EMF, a direct cause of sparking.</p>
  <p class="n-p"><strong>2. Weakening of the field (demagnetisation).</strong> With the iron working on its saturation curve, the pole face regions where armature reaction adds to the main flux saturate and cannot add proportionally more, while regions where it subtracts are free to lose flux proportionally. The net effect is a small but real reduction in total flux as load increases, which for a shunt motor tends to raise speed slightly with load, working against the flat characteristic the shunt motor is prized for.</p>

  <div class="n-h2">Remedies</div>
  <p class="n-p"><strong>Interpoles (commutating poles).</strong> Small additional poles fitted between the main poles, wound with a few turns of heavy wire and connected <strong>in series with the armature</strong> so their strength automatically tracks armature current. Their job is narrow: induce just enough EMF in the coil undergoing commutation to cancel the effect of the shifted magnetic neutral axis, restoring clean, sparkless commutation without needing to physically shift the brushes as load changes. They correct commutation, not the field distortion across the whole pole face.</p>
  <p class="n-p"><strong>Compensating windings.</strong> Conductors embedded in slots cut into the main pole faces, also series-connected so their effect tracks load current, positioned so their magnetomotive force directly opposes the armature's across the whole pole face, not just at the commutation zone. A more complete fix, used on large or heavily loaded machines subject to rapid load changes, where interpoles alone are not enough.</p>

  <table class="n-table">
    <tr><th>Remedy</th><th>Where fitted</th><th>What it fixes</th></tr>
    <tr><td>Interpoles</td><td>Small poles between the main poles, in series with armature</td><td>Restores clean commutation at the brushes</td></tr>
    <tr><td>Compensating windings</td><td>Slots in the main pole faces, in series with armature</td><td>Corrects field distortion across the whole pole face</td></tr>
  </table>

  <div class="n-h1" id="s-starter">The 3-Point Starter</div>
  <p class="n-p">As established above, a DC motor at standstill has no back EMF, so it must never be connected directly to full supply voltage. The three point starter is the traditional device for starting a shunt or compound motor safely, and one of the most commonly drawn circuits in an oral exam.</p>

  <div class="n-h2">Why "three point"</div>
  <p class="n-p">It has three main terminals: <strong>L</strong> (Line, positive supply), <strong>A</strong> (Armature) and <strong>F</strong> (Field). A pivoted handle, spring loaded back toward OFF, is moved by hand across a row of resistance studs. Moving it from OFF toward RUN progressively cuts out a starting resistance in series with the armature, while the field winding stays connected directly across full supply throughout, so it always has full field current, since a shunt field left without current risks the racing condition described earlier for series motors.</p>

  <div class="n-h2">The two protective coils</div>
  <p class="n-p"><strong>No-volt coil (NVC), also the hold-on coil.</strong> An electromagnet in the field circuit that, once the handle reaches RUN, magnetically holds it there against the spring. If supply fails, or the field breaks, the NVC loses its magnetism and the spring snaps the handle to OFF, giving undervoltage protection and guaranteeing a correct restart back through the full resistance.</p>
  <p class="n-p"><strong>Overload coil (OLR), also the overload release.</strong> An electromagnet carrying armature current, with no effect under normal load. Above a set overload threshold, its magnetism pulls in an armature that short circuits the NVC, which then loses its hold exactly as though supply had failed, and the spring returns the handle to OFF before sustained overcurrent can damage the windings.</p>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>The follow-up question to expect:</strong> "What happens if the field circuit develops an open circuit while running?" With no field current, the NVC, wired in the field circuit, loses its hold and the spring returns the handle to OFF. It is the same protective action doing double duty: undervoltage protection and loss-of-field protection together, exactly the fault that would otherwise let the motor race.</div></div>

  <div class="n-steps">
    <p class="n-p">1. Handle at OFF. Full starting resistance is in the armature circuit, motor disconnected.</p>
    <p class="n-p">2. Handle moved toward RUN, cutting resistance out progressively while the field is energised from the first movement.</p>
    <p class="n-p">3. As the motor accelerates its rising back EMF progressively takes over the current-limiting job.</p>
    <p class="n-p">4. At RUN, all resistance is out, armature is across full supply, and the NVC holds the handle in place.</p>
    <p class="n-p">5. On stop, loss of supply, loss of field or overload, the handle springs back to OFF, ready for the next start.</p>
  </div>

  <p class="n-p">The natural follow-up: a <strong>four point starter</strong> moves the NVC out of the field circuit onto its own protected branch across the line, so weakening the field for field-control speed regulation does not risk starving the NVC and dropping the handle out. A three point starter cannot be combined with field control speed regulation for that reason.</p>

  <div class="n-h1" id="s-onboard">Where DC Still Appears on a Ship Today</div>
  <p class="n-p">Modern main distribution on almost every ship is AC: easy transformation, rugged induction motors, easier fault breaking. But DC has never left the ship, it has retreated to the roles it is genuinely better suited to.</p>
  <p class="n-p"><strong>Battery systems.</strong> Ship's batteries are inherently DC. A common nominal battery voltage found aboard is <span class="n-val">24 V DC</span>, though larger emergency lighting or battery-only emergency power arrangements on some vessels use higher nominal voltages such as <span class="n-val">110 V</span> or <span class="n-val">220 V</span> DC. The exact voltage fitted varies by vessel and class society requirement, and should be confirmed from the ship's own drawings rather than assumed.</p>
  <p class="n-p"><strong>Emergency and essential services.</strong> Radio equipment, the general alarm, fire detection panels and telephone exchanges are commonly kept on a DC battery supply, backed by a charger from the AC system, because a battery is directly usable stored energy that rides through a blackout with no switching delay.</p>
  <p class="n-p"><strong>Engine and generator starting.</strong> Cranking the main engine or an auxiliary diesel generator is a heavy, short duration DC load, drawn straight from dedicated starting batteries.</p>
  <p class="n-p"><strong>Control, electronics and low voltage systems.</strong> Alarm panels, PLCs, instrumentation and much shipboard electronics run internally on low voltage DC, fed from AC via rectifiers and chargers, with the battery bank across that DC bus to ride through any interruption.</p>
  <p class="n-p"><strong>DC motors specifically.</strong> Purpose-built wound-field DC motors are increasingly rare as new-build main machinery, largely displaced by AC induction motors run from variable frequency drives, which now give AC machines the same flexible torque and speed control that used to be DC's main advantage. Genuine DC motors still turn up in older tonnage and specific auxiliary applications, but a candidate should not assume every ship still carries them as standard rotating machinery.</p>

  <div class="n-h1" id="s-interview">Interview Answers, Rapid Fire</div>

  <p class="n-p"><strong>What is back EMF and what is its significance?</strong><br>
  It is the EMF induced in the armature conductors as they rotate through the field, opposing the applied voltage by Lenz's law, E<sub>b</sub> = V minus I<sub>a</sub>R<sub>a</sub>. Its significance is that it makes the motor self-regulating: back EMF depends on speed, so if load increases and speed dips, back EMF falls, the current the armature draws automatically rises, and that extra current supplies the extra torque needed, all without any external control action.</p>

  <p class="n-p"><strong>What about back EMF in an AC machine, is it only a DC motor idea?</strong><br>
  No. In an induction motor the rotor has an EMF induced in it by the rotating stator field, and by Lenz's law that rotor EMF opposes the relative motion causing it, the same underlying principle as DC back EMF. As the motor speeds up, slip falls, less rotor EMF is induced, less rotor current flows, and correspondingly less stator current is drawn to support it, the AC equivalent of the DC back EMF story.</p>

  <p class="n-p"><strong>What is commutation, and why do brushes spark?</strong><br>
  The commutator mechanically reverses the connection of each armature coil to the fixed brushes at the instant that coil's current needs to reverse as it crosses from one pole to the next, so the winding can carry internally alternating current while presenting steady current at the brushes. Brushes spark when a coil's current is not brought cleanly to zero within the short commutation period, so it gets interrupted while still carrying current, which produces an arc, the same effect as breaking any inductive circuit at a switch.</p>

  <p class="n-p"><strong>What is armature reaction?</strong><br>
  The magnetic field produced by armature current itself combining with and distorting the main field from the poles. Two effects: it shifts the magnetic neutral axis away from the brush position, causing sparking, and it weakens total flux due to saturation. Corrected with interpoles, small series-connected poles that fix commutation, and on larger machines with compensating windings in the pole faces that fix the field distortion across the whole pole.</p>

  <p class="n-p"><strong>Explain the 3-point starter.</strong><br>
  It limits starting current with resistance in series with the armature, cut out progressively as rising back EMF takes over. The no-volt coil, wired in the field circuit, holds the handle at run and releases it to spring back to off on loss of supply or field, giving undervoltage protection and a correct restart through the resistance. The overload coil senses armature current and, on sustained overload, short circuits the no-volt coil to release the handle.</p>

  <p class="n-p"><strong>What are the types of DC motor and where would you use each?</strong><br>
  Shunt, series and compound, distinguished by how the field winding connects relative to the armature. Shunt gives almost constant speed regardless of load, good for fans and machine tools. Series gives very high starting torque but must never run unloaded since it will race, suited to winches and windlasses. Cumulative compound combines both, series-like starting torque but safe at light load because the shunt field prevents racing, which is why it turns up on cargo winches.</p>

  <p class="n-p"><strong>Why can't you just switch a DC motor straight onto the supply?</strong><br>
  At standstill there is no back EMF, since back EMF depends on speed and speed is zero, so the entire supply voltage is applied across only the armature's own very low resistance. That produces a current large enough to damage the commutator, brushes and winding insulation. A starter inserts external resistance to hold current down to a safe value until the motor's own back EMF builds up and takes over that job.</p>

  <p class="n-p"><strong>How do you control the speed of a DC motor?</strong><br>
  Three ways, all falling out of the same speed equation. Field control weakens the field to raise speed above base speed, cheaply, since it only handles the small field current. Armature resistance control adds resistance in the armature circuit to reduce speed below base speed, but wastes power as heat. Voltage control varies the armature supply voltage directly, giving efficient control both above and below base speed, done historically with a Ward Leonard set and now with electronic converters.</p>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F10')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the F10 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

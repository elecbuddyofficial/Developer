window.loadNotes("F08", `<div class="view" id="view-notes-f08">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F08')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F08 - Three-Phase System</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 8 of 25 · Difficulty ★★★★☆ · Study Time 60-80 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-why3ph')">Why Three Phase</button>
    <button class="anc-btn" onclick="jumpTo('s-generation')">Generation</button>
    <button class="anc-btn" onclick="jumpTo('s-sequence')">Phase Sequence</button>
    <button class="anc-btn" onclick="jumpTo('s-stardelta')">Star &amp; Delta</button>
    <button class="anc-btn" onclick="jumpTo('s-terminalbox')">Terminal Box Links</button>
    <button class="anc-btn" onclick="jumpTo('s-power')">Three Phase Power</button>
    <button class="anc-btn" onclick="jumpTo('s-balance')">Balanced/Unbalanced</button>
    <button class="anc-btn" onclick="jumpTo('s-neutral')">The Neutral</button>
    <button class="anc-btn" onclick="jumpTo('s-singlephasing')">Single Phasing</button>
    <button class="anc-btn" onclick="jumpTo('s-paralleling')">Paralleling Alternators</button>
    <button class="anc-btn" onclick="jumpTo('s-interview')">Interview Answers</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to explain why ships run on three phase rather than single phase, describe how a three phase EMF is generated and why the windings are 120 electrical degrees apart, explain phase sequence and why getting it wrong reverses a motor, derive the line-phase voltage relationship in star and the line-phase current relationship in delta, distinguish the standalone star/delta connection from how those connections are actually wired on a motor's terminal links, derive the three phase power formula, explain balanced/unbalanced loading and the neutral's role, explain single phasing, and describe how two alternators are brought into parallel safely. You should answer the rapid fire questions at the end without pausing to think.</p>

  <div class="n-h1" id="s-why3ph">Single Phase vs Polyphase, and Why Ships Use Three Phase</div>
  <p class="n-p">A single phase AC supply is one alternating voltage, one winding, one waveform, fine for small loads like a cabin socket or a fluorescent fitting, but it has a fundamental weakness that shows up the moment you try to run a ship's electrical plant on it.</p>

  <div class="n-h2">The power pulsates in single phase</div>
  <p class="n-p">Instantaneous power in a single phase circuit is the product of the instantaneous voltage and current:</p>
  <div class="n-formula">p(t) = v(t) × i(t) = V<sub>m</sub>sin(ωt) × I<sub>m</sub>sin(ωt − φ)</div>
  <p class="n-p">Expand that product with the standard trig identity and it splits into two terms: a constant term equal to the average real power, and a term oscillating at twice the supply frequency:</p>
  <div class="n-formula">p(t) = VI cos(φ) − VI cos(2ωt − φ)</div>
  <p class="n-p">That second term averages to zero only over a full cycle, not at every instant. Power delivered rises and falls twice every cycle, and with a resistive load it actually touches zero twice a cycle. A single phase motor therefore receives a pulsating torque, not a steady one, which is why single phase motors vibrate and hum, and why they are not self-starting: at the current zero crossing there is momentarily no torque at all, and nothing to make a stationary rotor pick a direction.</p>

  <div class="n-h2">Three phase gives constant instantaneous power</div>
  <p class="n-p">Add two more identical windings, same waveform, displaced 120 electrical degrees, and sum the three instantaneous powers:</p>
  <div class="n-formula">p(t) = VI cos(φ) + VI cos(φ) + VI cos(φ) = 3VI cos(φ)</div>
  <p class="n-p">The oscillating terms are also 120 degrees apart, and three equal-amplitude cosines spaced 120 degrees apart cancel exactly at every instant, not merely on average. What is left is constant, ripple free total power. This is the core reason three phase exists: steady, non-pulsating power and torque, built from windings that are each still just pulsating single phase AC.</p>

  <div class="n-h2">Smaller conductors for the same power</div>
  <p class="n-p">For a given power transmitted, three phase needs less conductor material than single phase. A single phase circuit needs two conductors each carrying the full current. Three phase splits that current across three conductors, and the geometry of the three phase relationships means the total conductor cross section needed works out lower for the same power and the same loss. On a ship that means lighter, cheaper cabling through a hull where weight and space are always at a premium.</p>

  <div class="n-h2">A rotating field falls out for free</div>
  <p class="n-p">This is the property that makes three phase indispensable for motors. Three fixed windings spaced 120 degrees apart in space, fed with three currents spaced 120 degrees apart in time, produce a magnetic field of constant magnitude that physically rotates around the stator at synchronous speed. A single phase winding cannot do this alone, it only produces a field pulsating along one fixed axis (which resolves into two counter-rotating fields of equal magnitude, precisely why a single phase motor develops zero net starting torque and needs an auxiliary winding or capacitor to get going). A three phase induction motor is inherently self-starting: switch it onto the supply and the rotating field alone drags the rotor around. That is why every significant motor on a ship, steering gear, bow thrusters, seawater pumps, is three phase.</p>

  <div class="n-h1" id="s-generation">Generation of Three Phase and the 120 Degree Displacement</div>
  <p class="n-p">A ship's alternator generates three phase EMF by placing three separate stator windings physically 120 mechanical degrees apart around the stator bore (for a two pole machine; with more pole pairs the electrical displacement is still 120 degrees even though the mechanical spacing differs). A rotating field winding on the rotor, excited with DC, sweeps past all three stator windings as the rotor turns.</p>
  <p class="n-p">Because the windings are spaced 120 degrees apart in space, the rotating field induces an EMF in each that peaks 120 degrees later (in time) than the winding before it. The three EMFs are:</p>
  <div class="n-formula">e<sub>R</sub> = E<sub>m</sub>sin(ωt) &nbsp;&nbsp; e<sub>Y</sub> = E<sub>m</sub>sin(ωt − 120°) &nbsp;&nbsp; e<sub>B</sub> = E<sub>m</sub>sin(ωt − 240°)</div>
  <p class="n-p">Each has the same magnitude and frequency, only the phase differs, and at any instant the three sum to zero, exactly as with the power terms above. This is why a healthy, balanced three phase source needs no return conductor for the generated EMFs themselves, and is the starting point for understanding the neutral later in this module. The 120 degree spacing is not arbitrary, it is exactly the spacing that makes both the power-summing result above and the rotating field result work; any other spacing leaves ripple in the summed power and a wobbling, non-circular field instead of a smooth rotating one.</p>

  <div class="n-h1" id="s-sequence">Phase Sequence and Why It Matters</div>
  <p class="n-p">Phase sequence (phase rotation) is the order in which the three phase voltages reach their peak: R then Y then B, repeating. Standard marine practice designates this R-Y-B (or equivalently 1-2-3, or L1-L2-L3), and it must be identical for the ship's supply, for any alternator being paralleled onto it, and for any three phase motor, in the sense that swapping it changes the motor's behaviour.</p>
  <p class="n-p">The rotating field inside a three phase motor sweeps around the stator in the direction set by which winding's current peaks first. If the supply sequence is R-Y-B, the field rotates one way; swap any two of the three supply leads (say Y and B) and the sequence seen by the motor becomes R-B-Y, reversing the rotating field, and the rotor reverses with it. This is exactly why the standard way to reverse a three phase induction motor is to swap any two supply leads, never all three (which changes nothing, since it is relative sequence, not absolute polarity, that matters).</p>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Why this matters practically on board.</strong> After any work on a supply, a switchboard changeover, a new motor installation, or reconnecting after maintenance, phase sequence must be checked with a phase sequence indicator before starting rotating machinery. Running a pump or steering gear motor backwards can damage the driven equipment (a centrifugal pump running backwards can cavitate or fail to develop head; a fan running backwards moves far less air and can overheat). It is also one of the four conditions that must be matched before paralleling two alternators, covered later in this module.</div></div>

  <div class="n-h1" id="s-stardelta">Star and Delta Connections</div>
  <p class="n-p">Star and delta are the two ways of connecting three windings (or three loads) together to form a three phase system. This section covers them as standalone electrical connections and derives the line/phase voltage and current relationships properly. The separate question of how a motor's terminal box links are physically arranged to select star or delta is covered in its own section below: examiners ask these as two different questions, and mixing them up is a common way to lose marks.</p>

  <div class="n-h2">Star (wye) connection</div>
  <p class="n-p">In star, one end of each of the three windings is joined at a common point, the star point or neutral point. The other end of each winding is brought out as a line terminal (R, Y, B). The voltage across a winding, the phase voltage, is therefore the voltage from that line to the star point.</p>
  <p class="n-p">The line voltage, measured between any two line terminals, is not simply twice the phase voltage, because the two phase voltages are not in phase with each other, they are 120 degrees apart. You must subtract the phasors, not their magnitudes.</p>
  <p class="n-p">Take V<sub>RY</sub> as the phasor difference V<sub>R</sub> − V<sub>Y</sub>. Both have magnitude V<sub>ph</sub> and are separated by 120 degrees. Draw them tip to tail and the resulting triangle is isosceles, with the two known sides of length V<sub>ph</sub> meeting at 60 degrees. Dropping a perpendicular bisector splits it into two 30-60-90 right triangles, each with hypotenuse V<sub>line</sub>/2 and a 30 degree angle at the star point. From that geometry:</p>
  <div class="n-formula">V<sub>line</sub> = 2 × V<sub>ph</sub> × cos(30°) = 2 × V<sub>ph</sub> × (√3/2) = √3 × V<sub>ph</sub></div>
  <p class="n-p">So in star:</p>
  <div class="n-formula">V<sub>line</sub> = √3 × V<sub>phase</sub> &nbsp;&nbsp;&nbsp;&nbsp; I<sub>line</sub> = I<sub>phase</sub></div>
  <p class="n-p">The current relationship in star needs no derivation: each line conductor connects to only one winding, in series, so the winding current and the line current are the same current. No splitting occurs at the line terminal, so I<sub>line</sub> = I<sub>phase</sub> directly.</p>

  <div class="n-h2">Delta connection</div>
  <p class="n-p">In delta, the windings are connected end to end in a closed loop, forming a triangle, and the three line terminals are taken from the three junctions. There is no common star point and no neutral is available from delta.</p>
  <p class="n-p">Each line terminal sits directly at a junction between two windings, and each winding spans directly between two line terminals, so the phase voltage in delta is simply the full line voltage:</p>
  <div class="n-formula">V<sub>line</sub> = V<sub>phase</sub> (delta)</div>
  <p class="n-p">The current relationship needs deriving, by the same phasor method used above for star voltage, applied here at a junction instead of a winding. At each line terminal, the line current is supplied by two phase currents arriving from two different windings, and by Kirchhoff's current law the line current is the phasor difference of those two. The two phase currents have equal magnitude I<sub>ph</sub> and are 120 degrees apart, the same geometry as the star voltage triangle, so the same result follows:</p>
  <div class="n-formula">I<sub>line</sub> = 2 × I<sub>ph</sub> × cos(30°) = √3 × I<sub>phase</sub></div>
  <p class="n-p">So in delta:</p>
  <div class="n-formula">I<sub>line</sub> = √3 × I<sub>phase</sub> &nbsp;&nbsp;&nbsp;&nbsp; V<sub>line</sub> = V<sub>phase</sub></div>

  <div class="n-crit"><span class="icon">💡</span><div class="body">Star gets its root three factor on <strong>voltage</strong> (windings share a common point, voltages must be phasor-subtracted across it); delta gets its root three factor on <strong>current</strong> (windings share a common junction, currents must be phasor-subtracted at it). Same 120 degree geometry, same root three, whichever quantity involves two phasors meeting at the shared point.</div></div>

  <div class="n-h1" id="s-terminalbox">Star and Delta as Wired on a Motor's Terminal Box Links</div>
  <p class="n-p">This is a genuinely separate question from the one above, asked separately in interviews. The question above is: given a star or delta connection, what is the relationship between line and phase quantities. This question is: given a real motor with its terminal box open, how do you physically arrange the connecting links, the small brass or copper strips inside the box, to put it into star or delta. Be ready to draw this from memory.</p>

  <div class="n-h2">The six leads</div>
  <p class="n-p">A motor built for dual voltage or dual connection operation brings out all six ends of its three windings to the terminal box, rather than commoning any of them internally. Using the standard IEC 60034-8 marking convention, the six terminals are labelled:</p>
  <table class="n-table">
    <tr><th>Winding</th><th>Start end</th><th>Finish end</th></tr>
    <tr><td>Phase 1 (U)</td><td>U1</td><td>U2</td></tr>
    <tr><td>Phase 2 (V)</td><td>V1</td><td>V2</td></tr>
    <tr><td>Phase 3 (W)</td><td>W1</td><td>W2</td></tr>
  </table>
  <p class="n-p">The standard IEC layout places the three start ends U1, V1, W1 across the top row and the three finish ends U2, V2, W2 across the bottom row, with U2 sitting below V1 rather than directly below U1 (the bottom row offset by one position). That offset is deliberate: it lets the star and delta links sit as short bridges rather than long diagonal wires. Older equipment may carry the legacy marking U/X, V/Y, W/Z, functionally identical: treat U, V, W as U1, V1, W1 and X, Y, Z as U2, V2, W2.</p>

  <div class="n-h2">Star and delta at the terminal box</div>
  <p class="n-p"><strong>Star:</strong> the three finish ends, U2, V2, W2, are linked together with short bridging links to form the common star point inside the box. The three start ends, U1, V1, W1, are left separate as the terminals to which supply is connected.</p>
  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Physically:</strong> two identical short links across the bottom row, one bridging U2 to V2, the other bridging V2 to W2 (V2 being common to both ties all three together). Nothing is linked on the top row. Supply goes to U1, V1, W1 only.</div></div>
  <p class="n-p"><strong>Delta:</strong> each winding's finish end is linked to the next winding's start end, forming a closed loop, the same triangle described in the standalone connection section above. Concretely: U2 to V1, V2 to W1, W2 to U1. Supply connects to the same three junction points used for star, U1, V1, W1, except each now also carries a link running diagonally down to the finish end of the next winding.</p>
  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Physically:</strong> three diagonal links, U1 to V2, V1 to W2, W1 to U2, each running from the top row down to the offset bottom row terminal. This is why the bottom row is offset: it keeps the three diagonal delta links short, identical strips, rather than long crossed wires. Supply again lands on U1, V1, W1.</div></div>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>The trap.</strong> An interviewer will sometimes get a correct answer on the standalone star/delta voltage and current relationships, then immediately ask "now show me how you would actually link that up in the terminal box." Candidates who only memorised V<sub>L</sub> = √3V<sub>ph</sub> and never looked inside a real terminal box are caught out here. Be ready to sketch the six terminals in their two offset rows from memory.</div></div>

  <div class="n-h1" id="s-power">Three Phase Power, Derived</div>
  <p class="n-p">The power drawn by any one winding, treated as a single phase circuit on its own, is the standard single phase real power formula:</p>
  <div class="n-formula">P<sub>per winding</sub> = V<sub>ph</sub> × I<sub>ph</sub> × cos(φ)</div>
  <p class="n-p">where φ is the angle between phase voltage and phase current, set by the load's power factor. A balanced three phase load has three identical windings, so total power is three times that single winding figure:</p>
  <div class="n-formula">P<sub>total</sub> = 3 × V<sub>ph</sub> × I<sub>ph</sub> × cos(φ)</div>
  <p class="n-p">This is correct but expressed in phase quantities, awkward on a ship where switchboard meters read line voltage and line current, not phase values buried inside a delta-connected load. Converting into line quantities, and checking both connections give the same result:</p>
  <p class="n-p"><strong>Star:</strong> V<sub>ph</sub> = V<sub>L</sub>/√3, I<sub>ph</sub> = I<sub>L</sub>. Substitute: P = 3 × (V<sub>L</sub>/√3) × I<sub>L</sub>cos(φ) = (3/√3)V<sub>L</sub>I<sub>L</sub>cos(φ) = √3 × V<sub>L</sub>I<sub>L</sub>cos(φ) (since 3/√3 = √3).</p>
  <p class="n-p"><strong>Delta:</strong> V<sub>ph</sub> = V<sub>L</sub>, I<sub>ph</sub> = I<sub>L</sub>/√3. Substitute: P = 3 × V<sub>L</sub> × (I<sub>L</sub>/√3)cos(φ) = (3/√3)V<sub>L</sub>I<sub>L</sub>cos(φ) = √3 × V<sub>L</sub>I<sub>L</sub>cos(φ).</p>
  <p class="n-p">Both connections collapse to the same result, exactly as expected since the line-quantity formula must describe the same physical machine regardless of internal connection:</p>
  <div class="n-formula">P = √3 × V<sub>L</sub> × I<sub>L</sub> × cos(φ)</div>
  <p class="n-p">This is the formula on every switchboard power meter and generator nameplate. Reactive and apparent power follow the same pattern:</p>
  <div class="n-formula">Q = √3 × V<sub>L</sub>I<sub>L</sub>sin(φ) &nbsp;&nbsp;&nbsp;&nbsp; S = √3 × V<sub>L</sub>I<sub>L</sub></div>

  <div class="n-crit"><span class="icon">💡</span><div class="body">If asked where the root three in the power formula comes from: converting phase quantities to line quantities in star or delta, not anything mysterious about three phase power itself. The underlying statement is always just three lots of single phase power, V<sub>ph</sub>I<sub>ph</sub>cos(φ), added together.</div></div>

  <div class="n-h1" id="s-balance">Balanced vs Unbalanced Loads</div>
  <p class="n-p">A balanced three phase load draws identical current magnitude on all three phases, with identical power factor on each. The three line currents are then three phasors of equal length, 120 degrees apart, and (as shown under generation above) three such phasors sum to zero at every instant. Nothing needs to flow in a return or neutral path.</p>
  <p class="n-p">An unbalanced load draws unequal current on the three phases, either because single phase items are spread across the three phases unevenly (lighting, small power fed phase to neutral) or because a three phase load has developed a fault such as a partially shorted or open winding. The three line currents no longer sum to zero, and the residual has to flow somewhere: on a star-connected four wire system it flows in the neutral; on a three wire system with no neutral, unbalance instead shifts the star point voltage away from true electrical centre (neutral point displacement), distorting the voltage each phase of the load sees.</p>
  <p class="n-p">Unbalance matters on a ship because it wastes generator capacity (rated for the highest of the three phase currents, even though the other two carry less), and it heats windings unevenly and, in a motor fed an unbalanced supply, adds a braking torque component on top of normal load heating. Loads are deliberately distributed across the three phases to keep unbalance small.</p>

  <div class="n-h1" id="s-neutral">The Neutral and Its Role</div>
  <p class="n-p">The neutral is the conductor brought out from the star point of a star-connected source (no neutral is available from delta, since delta has no common point). Its roles on board:</p>
  <div class="n-steps">
    <p class="n-p">1. <strong>Return path for unbalanced current.</strong> Any imbalance between the three phase currents has to return somewhere, and on a four wire system that is the neutral. A perfectly balanced load draws zero neutral current.</p>
    <p class="n-p">2. <strong>Reference point, fixing phase-to-neutral voltage.</strong> With the star point earthed or referenced, each phase's voltage relative to neutral is held at a fixed value, V<sub>L</sub>/√3, letting single phase loads be fed phase to neutral at a stable voltage rather than the higher phase to phase voltage.</p>
    <p class="n-p">3. <strong>Enables mixed distribution.</strong> A four wire star distribution (three lines plus neutral) lets one section feed both three phase motors (phase to phase) and single phase loads (phase to neutral) from the same source.</p>
  </div>
  <p class="n-p">Marine generator distribution systems are often deliberately not solidly earthed the way a shore supply is; earthing philosophy on board (insulated, high resistance earthed, first earth fault alarmed rather than tripping) is its own topic, but the neutral's role as an unbalance return path and phase-to-neutral reference holds regardless of the earthing arrangement chosen.</p>

  <div class="n-h1" id="s-singlephasing">Single Phasing</div>
  <p class="n-p">Single phasing is the condition where a three phase motor, already running, loses one of its three supply phases while the other two remain live. This is different from a motor that fails to start on two phases (which it typically cannot do, or does with a loud stall and high current); single phasing specifically describes an already-running motor continuing to turn on the remaining two phases.</p>

  <div class="n-h2">Cause</div>
  <p class="n-p">A blown fuse, a failed contactor pole, a loose or corroded terminal, or a broken conductor can remove one of the three supply phases while leaving the other two intact. Because the motor is already turning, the rotor's residual rotation and the remaining two energised windings keep it running, which is exactly what makes single phasing dangerous: unlike a dead short or total loss of supply, there is no obvious dramatic event, the motor keeps turning and may look fine at a casual glance.</p>

  <div class="n-h2">Effect on the motor</div>
  <p class="n-p">With one phase gone, the motor is effectively driven by two windings instead of three, but is still trying to deliver the same mechanical load and torque as before, so the remaining two windings have to carry more current to make up for the missing third winding's contribution. The rise is commonly cited in the region of √3, roughly 173 percent of the previous per-phase current, following from a simple power balance: if the motor must still deliver roughly the same power from two windings that three previously shared, each remaining winding's current rises by a factor in that region. Treat this as an order-of-magnitude guide, not an exact universal figure, since the real rise depends on loading at the moment of the fault and on how winding impedance and power factor shift; some sources cite figures up to roughly double rated current. What is certain: current in the surviving phases rises well above rated, and if left running, windings overheat and the motor can burn out. A lightly loaded motor may keep running with only a modest rise, which is exactly what makes single phasing a hidden hazard, unnoticed until the winding has already taken damage.</p>

  <div class="n-h2">Detection and protection</div>
  <p class="n-p">A conventional overload relay sized for general overcurrent may not respond to single phasing on a lightly loaded motor, since the absolute current may not cross its trip threshold even though the motor is running unbalanced. The reliable protection is a current unbalance (phase failure) relay, comparing the three phase currents against each other rather than against a single fixed threshold, tripping on the asymmetry itself. Modern motor protection relays typically combine thermal overload with a dedicated phase loss / current unbalance function in one unit.</p>

  <div class="n-h1" id="s-paralleling">Paralleling Alternators</div>
  <p class="n-p">Bringing a second alternator onto a busbar already fed by another (or onto a live shore or bus supply) is a standard practical evolution on board, and a heavily asked interview topic.</p>

  <div class="n-h2">The four conditions that must match</div>
  <p class="n-p">Before the incoming machine's breaker is closed onto the live bus, four things must be matched between it and the busbar it is joining:</p>
  <div class="n-steps">
    <p class="n-p">1. <strong>Voltage.</strong> The incoming machine's terminal voltage must equal busbar voltage, adjusted via its AVR/field excitation.</p>
    <p class="n-p">2. <strong>Frequency.</strong> Must equal busbar frequency, adjusted via the prime mover's governor. Normal practice is to bring the incoming machine's frequency marginally higher than the bus, so once paralleled it naturally tends to pick up load rather than motor (be driven as a motor by the bus).</p>
    <p class="n-p">3. <strong>Phase sequence.</strong> Must match the busbar's phase sequence. This only needs checking once, at commissioning, since it is a fixed property of the wiring rather than something that drifts, but it is listed among the four because getting it wrong is catastrophic and must have been verified correct.</p>
    <p class="n-p">4. <strong>Phase angle (in phase).</strong> At the instant of closing, the incoming voltage phasor must align with the busbar phasor. This changes moment to moment as the two machines run at slightly different frequencies, and is the condition the synchroscope or lamps are watching.</p>
  </div>

  <div class="n-h2">The synchroscope method</div>
  <p class="n-p">A synchroscope is a dedicated instrument with a rotating pointer on a dial marked "fast" and "slow" either side of a top centre "in phase" mark, comparing the incoming machine's phase against the bus. The pointer rotates at a rate reflecting the frequency difference: slow rotation means the frequencies are close, fast rotation means they are further apart. Rotation in the "fast" direction means the incoming machine is running faster than the bus; the breaker is closed just before the pointer reaches vertical, timed for the breaker's own closing delay.</p>

  <div class="n-h2">The lamp methods</div>
  <p class="n-p">Where no synchroscope is fitted, or as a backup check, synchronizing lamps connected between phases of the incoming machine and the bus give a visual indication of phase difference. <strong>Dark lamp method:</strong> a lamp is connected so it goes fully dark at the instant the two voltages are in phase (zero potential difference across it) and is brightest at exact phase opposition; the breaker is closed in the middle of the dark period. Its weakness is that darkness is hardest to judge precisely, since the eye compares "off" against "just barely off." <strong>Two bright, one dark method:</strong> three lamps are cross-connected so that as the machines approach synchronism, two brighten together while the third dims towards darkness, reaching correct phase match at the instant the dark lamp is dimmest and the other two are equally bright, a more distinct visual event and generally easier to judge; the brightening/dimming sequence across the lamps also shows whether the incoming machine is running fast or slow. Either arrangement is a supplementary check to a synchroscope, or a fallback where one is not fitted.</p>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>What happens if you close out of phase.</strong> The incoming machine's voltage and the bus voltage are effectively fighting each other across the closed breaker. Because both are low impedance sources, even a modest phase mismatch drives a very large circulating current, far above normal load current, which can trip protective devices and stress or damage stator windings and breaker contacts. Mechanically it produces a sudden, severe torque transient on both machines' shafts and couplings, a shock load similar to (or worse than) an across the line motor start, capable of damaging the coupling, shaft line, or the alternator's bearings and windings. This is why the four conditions are checked carefully and the breaker is closed at the correct instant, not "close enough."</div></div>

  <div class="n-h1" id="s-interview">Interview Answers, Rapid Fire</div>

  <p class="n-p"><strong>Why does a ship use three phase instead of single phase?</strong><br>
  Constant instantaneous power (single phase pulsates, even though its average is steady), less conductor material for the same power transmitted, and an inherent rotating field that makes three phase induction motors self-starting.</p>

  <p class="n-p"><strong>Why are the three phases 120 degrees apart?</strong><br>
  That is the spacing at which three equal sinusoids sum to exactly zero at every instant, giving constant total power and a smooth rotating field. Any other spacing leaves ripple in both.</p>

  <p class="n-p"><strong>What is phase sequence and why does it matter?</strong><br>
  The order the three phases reach peak voltage, R-Y-B standard. It sets the motor's direction of rotation; swapping any two supply leads reverses it. Must also match when paralleling alternators.</p>

  <p class="n-p"><strong>Derive the line-phase voltage relationship in star.</strong><br>
  Line voltage is the phasor difference of two equal phase voltages 120 degrees apart. That 120 degree triangle geometry gives 2 × V<sub>ph</sub> × cos(30°), so V<sub>line</sub> = √3 × V<sub>phase</sub>.</p>

  <p class="n-p"><strong>Derive the line-phase current relationship in delta.</strong><br>
  By KCL, line current at each junction is the phasor sum of two adjacent phase currents, again 120 degrees apart and equal magnitude, same geometry as the star voltage case: I<sub>line</sub> = √3 × I<sub>phase</sub>.</p>

  <p class="n-p"><strong>How do you connect a motor's terminal links for star versus delta?</strong><br>
  Six leads, U1-U2, V1-V2, W1-W2, starts on the top row, finishes on the offset bottom row. Star: bridge U2-V2 and V2-W2, forming the star point, supply to U1/V1/W1. Delta: three diagonal links, U1-V2, V1-W2, W1-U2, forming a closed loop, supply still to U1/V1/W1.</p>

  <p class="n-p"><strong>Derive the three phase power formula.</strong><br>
  Start from 3 × V<sub>ph</sub>I<sub>ph</sub>cos(φ). Substitute star's or delta's phase-to-line relationships and the 3/√3 term simplifies to √3 both times: P = √3 × V<sub>L</sub>I<sub>L</sub>cos(φ), regardless of internal connection.</p>

  <p class="n-p"><strong>What is the neutral for?</strong><br>
  The conductor from the star point. Carries the residual current of an unbalanced load (zero if balanced), fixes phase-to-neutral voltage as a stable reference, and lets a four wire system feed both three phase and single phase loads.</p>

  <p class="n-p"><strong>What is single phasing, and how is it protected against?</strong><br>
  A running motor loses one supply phase (blown fuse, failed contactor pole, broken connection) but keeps turning on the remaining two, which carry more current to maintain torque, heating up and risking burnout. A plain overload relay may not catch it on a lightly loaded motor, so protection is a dedicated current unbalance (phase failure) relay.</p>

  <p class="n-p"><strong>What conditions must be matched before paralleling two alternators?</strong><br>
  Voltage, frequency, phase sequence, and phase angle at the moment of closing. Sequence is checked once at commissioning; the other three every time, with phase angle being what the synchroscope or lamps watch at the instant of closing.</p>

  <p class="n-p"><strong>What happens if you close the breaker out of synchronism?</strong><br>
  A large circulating current flows between the two low impedance sources because their voltages are misaligned, producing severe electrical stress on windings and switchgear and a severe mechanical shock on both machines' shafts, couplings and bearings.</p>

  <p class="n-p"><strong>How does the two bright, one dark lamp method work?</strong><br>
  Lamps are cross-connected so that, approaching synchronism, two brighten together while the third dims to its darkest point at the same instant, correct phase match. Easier to judge than a single dark lamp, and the sequence also shows whether the incoming machine is running fast or slow.</p>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F08')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the F08 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

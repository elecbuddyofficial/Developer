window.loadNotes("F14", `<div class="view" id="view-notes-f14">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F14')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F14 - Measuring Instruments</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 14 of 25 · Difficulty ★★★☆☆ · Study Time 50-70 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-analogue')">Analogue vs Digital</button>
    <button class="anc-btn" onclick="jumpTo('s-pmmc')">PMMC</button>
    <button class="anc-btn" onclick="jumpTo('s-movingiron')">Moving Iron</button>
    <button class="anc-btn" onclick="jumpTo('s-ammeter')">Ammeter and Shunt</button>
    <button class="anc-btn" onclick="jumpTo('s-voltmeter')">Voltmeter and Multiplier</button>
    <button class="anc-btn" onclick="jumpTo('s-wattmeter')">Wattmeter</button>
    <button class="anc-btn" onclick="jumpTo('s-energy')">Energy Meter</button>
    <button class="anc-btn" onclick="jumpTo('s-multiclamp')">Multimeter and Clamp Meter</button>
    <button class="anc-btn" onclick="jumpTo('s-ctvt')">CTs and VTs</button>
    <button class="anc-btn" onclick="jumpTo('s-interview')">Interview Answers</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to explain the working principle of a PMMC instrument and a moving iron instrument, state which reads average value and which reads true RMS and why, explain why an ammeter must have very low resistance and how a shunt is calculated with a worked numeric example, explain why a voltmeter must have very high resistance and how a multiplier is calculated with a worked numeric example, describe wattmeter construction and the outline of the two-wattmeter method, explain how an energy meter differs from a wattmeter, describe what a multimeter and clamp meter measure, and state the safety rule for CT secondaries and why it exists.</p>

  <div class="n-h1" id="s-analogue">Analogue vs Digital Instruments</div>
  <p class="n-p"><strong>Analogue instruments</strong> deflect a pointer against a scale by some physical effect of the current or voltage being measured (a force on a coil, a force between two pieces of iron). Accuracy is typically 1 to 2.5 percent of full scale. Their strength on board is that a swinging needle gives an instant sense of a trend, load rising, a value hunting, in a way a jumping digital number does not.</p>
  <p class="n-p"><strong>Digital instruments</strong> sample the signal, convert it with an analogue-to-digital converter, and display a numeric value. They are generally far more accurate (0.1 percent or better is common), have no moving parts to wear, and often add functions (data logging, auto-ranging, true RMS conversion). The trade is that a fast-changing quantity can flicker too quickly to read digitally.</p>
  <table class="n-table">
    <tr><th>&nbsp;</th><th>Analogue</th><th>Digital</th></tr>
    <tr><td>How it reads</td><td>Pointer deflected by a physical effect of the quantity</td><td>Signal sampled and converted by an ADC</td></tr>
    <tr><td>Typical accuracy</td><td><span class="n-val">1 to 2.5%</span> of full scale</td><td><span class="n-val">0.1%</span> or better</td></tr>
    <tr><td>Moving parts</td><td>Yes, they wear</td><td>None</td></tr>
    <tr><td>Best at</td><td>Showing a trend at a glance</td><td>Accuracy, logging, auto-ranging, true RMS</td></tr>
    <tr><td>Weak at</td><td>Precision reading</td><td>Fast-changing values, the display flickers</td></tr>
    <tr><td>Found on board</td><td>Main switchboard ammeters and voltmeters</td><td>Portable test instruments</td></tr>
  </table>

  <p class="n-p">A ship's main switchboard still commonly carries analogue ammeters and voltmeters for the "glance and see the trend" reason, while portable test instruments are almost universally digital now for the accuracy.</p>

  <div class="n-h1" id="s-pmmc">Permanent Magnet Moving Coil (PMMC) Instrument</div>

  <div class="n-h2">Construction</div>
  <p class="n-p">A light coil of fine wire is wound on an aluminium former and mounted so it can rotate in the narrow annular air gap of a strong permanent magnet, shaped with curved pole pieces around a fixed soft iron core so the air gap field is uniform and radial. The coil rides on jewelled pivots, with two hairsprings that carry current into and out of it and also provide a restoring torque. A pointer fixed to the coil moves over a calibrated scale.</p>

  <div class="n-h2">Principle</div>
  <p class="n-p">Current flowing through the coil sits in the magnet's radial field, and every current-carrying conductor in a magnetic field experiences a force, <span class="hl">F = BIL</span>. Because the field is radial and the coil is a rectangular loop, that force acts tangentially on both sides of the coil and produces a torque that tries to rotate it. The hairsprings oppose that rotation with a torque proportional to angle turned, so the coil settles where deflecting and restoring torque balance. Since deflecting torque is directly proportional to coil current, deflection is linear with current, which is why a PMMC scale is evenly divided, unlike a moving iron scale.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Why PMMC only works on DC.</strong> The deflecting torque is proportional to current, not to current squared, so it reverses direction every time the current reverses. Apply a genuine AC waveform and the coil is asked to swing positive for one half cycle and negative for the next. The pointer, and the coil with its inertia, cannot follow the electrical frequency (even 50 Hz is far too fast for a mechanical system with mass and springs), so it simply averages the drive it receives. For a symmetrical AC waveform the positive and negative half cycles are equal and opposite, the average torque over a full cycle is <span class="n-val">zero</span>, and the pointer just sits at zero. It is a <strong>DC-only</strong> instrument by nature: it measures the average value of whatever current actually flows through the coil, and on pure DC the average value is simply the DC value itself.</div></div>

  <p class="n-p">This is also why a PMMC instrument can be made to read AC at all: put a rectifier (a bridge of diodes) ahead of it, so the coil only ever sees pulsating DC of one polarity, and now has something non-zero to average. The scale is printed assuming a sinusoidal input, so it can be calibrated to show the equivalent RMS value even though the movement itself is still only ever averaging a rectified current. Feed it a badly distorted (non-sinusoidal) waveform and the reading will be wrong, since the RMS/average conversion factor baked into the scale no longer applies. This is the origin of the "true RMS" feature on better digital multimeters, which does the conversion mathematically instead of assuming a clean sine wave.</p>

  <p class="n-p"><strong>Where used on board:</strong> DC ammeters and voltmeters (battery chargers, DC motor circuits where still fitted), and as the movement inside analogue multimeters on the DC ranges, with internal rectification added for the AC ranges.</p>

  <div class="n-h1" id="s-movingiron">Moving Iron Instrument</div>

  <div class="n-h2">Construction and principle</div>
  <p class="n-p">A fixed coil carries the current (or a current proportional to voltage, for a voltmeter movement) and produces a field proportional to that current. A piece of soft iron is mounted so it can move, either drawn into the field of the fixed coil (attraction type) or repelled from a second fixed vane magnetised by the same coil (repulsion type). A pointer attached to the moving iron sweeps the scale against a restoring spring.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Why moving iron reads true RMS and works on AC or DC.</strong> The force pulling the iron into the field does not depend on the direction of the current, only on the field strength, and field strength is proportional to current. So the force, and therefore the deflecting torque, is proportional to <span class="hl">I²</span>, not to I. Whichever way the current flows, the iron is always pulled in the same direction, so there is no cancellation on AC the way there is with PMMC. Because the coil and iron cannot follow the instantaneous swings of a 50 Hz waveform, what the pointer settles at is the time-average of I², and the square root of the average of I² is, by definition, the <strong>RMS value</strong>. A moving iron instrument therefore reads true RMS directly on any waveform, and reads correctly on AC or DC (on DC, I² is just a constant, so the reading is simply the DC value). Key distinction: PMMC is DC-only and reads average; moving iron works on AC and DC alike and reads true RMS.</div></div>

  <table class="n-table">
    <tr><th>&nbsp;</th><th>PMMC</th><th>Moving iron</th></tr>
    <tr><td>Deflecting torque</td><td>Proportional to I</td><td>Proportional to I&sup2;</td></tr>
    <tr><td>Reads</td><td>Average value</td><td><span class="n-val">True RMS</span>, on any waveform</td></tr>
    <tr><td>Works on</td><td>DC only</td><td>AC and DC alike</td></tr>
    <tr><td>Scale</td><td>Linear, evenly spaced</td><td>Square law, cramped at the low end</td></tr>
    <tr><td>Accuracy</td><td>Higher</td><td>Coarser, hysteresis and eddy losses in the iron</td></tr>
    <tr><td>Typical use</td><td>DC measurement, and the movement inside a multimeter</td><td>Switchboard AC ammeters and voltmeters</td></tr>
  </table>

  <p class="n-p">The trade for that versatility is a non-linear (square law) scale, cramped at the low end, and coarser accuracy than PMMC due to hysteresis and eddy current losses in the iron. Moving iron instruments are the standard analogue AC ammeters and voltmeters fitted to marine switchboards.</p>

  <div class="n-h1" id="s-ammeter">Ammeter: Series Connection and the Shunt</div>

  <div class="n-h2">Why an ammeter is connected in series</div>
  <p class="n-p">An ammeter measures current, and current is the same at every point around a single series path, so the meter has to be inserted directly into that path, breaking the circuit and reconnecting it through the meter, so that the full circuit current is forced to flow through the coil.</p>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Why it must be low resistance.</strong> Being in series, any resistance the ammeter adds is added to the circuit itself, dropping a voltage V = I × R<sub>m</sub> and consuming power I² × R<sub>m</sub>. If its resistance were significant compared with the circuit's, inserting it would itself reduce the current flowing, so you would be measuring a current that only exists because you connected the meter. An ideal ammeter has zero resistance; a real one is built with as little as practically possible so its effect on the circuit is negligible.</div></div>

  <div class="n-h2">Extending range with a shunt</div>
  <p class="n-p">A PMMC or moving iron movement is only sensitive enough to carry a small current at full scale, often in the milliamp range. To measure a larger current, a low resistance <strong>shunt</strong> is connected in <strong>parallel</strong> with the movement. Most of the circuit current takes the low resistance path through the shunt, and only a small, known fraction passes through the movement itself, deflecting it to full scale.</p>
  <p class="n-p">Because the shunt and movement are in parallel, they share the same terminal voltage:</p>
  <div class="n-formula">I<sub>m</sub> × R<sub>m</sub> = I<sub>sh</sub> × R<sub>sh</sub></div>
  <p class="n-p">where I<sub>m</sub>, R<sub>m</sub> are the movement's full scale current and coil resistance, and I<sub>sh</sub>, R<sub>sh</sub> are the shunt's current and resistance. Rearranged:</p>
  <div class="n-formula">R<sub>sh</sub> = (I<sub>m</sub> × R<sub>m</sub>) / I<sub>sh</sub></div>

  <div class="n-steps">
    <p class="n-p"><strong>Worked example.</strong> A PMMC movement has I<sub>m</sub> = <span class="n-val">1 mA</span> (0.001 A), R<sub>m</sub> = 100 Ω. Build an ammeter reading up to 1 A full scale.</p>
    <p class="n-p">1. The shunt carries the rest of the current: I<sub>sh</sub> = 1 A − 0.001 A = 0.999 A.</p>
    <p class="n-p">2. R<sub>sh</sub> = (I<sub>m</sub> × R<sub>m</sub>) / I<sub>sh</sub> = (0.001 × 100) / 0.999 ≈ <span class="n-val">0.1 Ω</span>.</p>
    <p class="n-p">3. Check: voltage across the pair at full scale is I<sub>m</sub>R<sub>m</sub> = 0.1 V, so I<sub>sh</sub> = 0.1 / 0.1 = 1 A, almost all of the 1 A total, with the movement carrying just <span class="n-val">1 mA</span>. The scale is relabelled 0 to 1 A.</p>
  </div>
  <p class="n-p">Note how small R<sub>sh</sub> came out compared with R<sub>m</sub>: the shunt is a heavy, thick, low resistance strip (often manganin, for stable resistance with temperature) able to carry nearly the full circuit current, exactly what "low resistance in series with the circuit" demands. Multi-range ammeters simply switch between several shunts.</p>

  <div class="n-h1" id="s-voltmeter">Voltmeter: Parallel Connection and the Multiplier</div>

  <div class="n-h2">Why a voltmeter is connected in parallel</div>
  <p class="n-p">A voltmeter measures the potential difference across a component or a section of circuit, and that potential difference exists between two points regardless of what else is connected there. So the meter is connected directly across those two points, in parallel with whatever it is measuring, without breaking the circuit.</p>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Why it must be high resistance.</strong> Connecting anything in parallel gives current an extra path, and some will flow through the meter instead of the circuit it is measuring. If the voltmeter's resistance were low, it would draw significant extra current, load the circuit down, and pull the voltage away from its true unloaded value. An ideal voltmeter has infinite resistance and draws no current; a real one is built with as high a resistance as practically possible so the diverted current is negligible.</div></div>

  <div class="n-h2">Extending range with a multiplier</div>
  <p class="n-p">The same small movement that deflects fully at a small current only develops a small voltage across its own coil resistance at full scale (V = I<sub>m</sub> × R<sub>m</sub>). To read a larger voltage, a high resistance <strong>multiplier</strong> is connected in <strong>series</strong> with the movement, dropping almost all of the applied voltage and leaving only the small share needed to drive the movement to full scale.</p>
  <p class="n-p">The same current I<sub>m</sub> flows through both in series, and the applied voltage divides between the two drops:</p>
  <div class="n-formula">V = I<sub>m</sub> × (R<sub>m</sub> + R<sub>s</sub>)</div>
  <p class="n-p">Rearranged for the multiplier resistance R<sub>s</sub>:</p>
  <div class="n-formula">R<sub>s</sub> = (V / I<sub>m</sub>) − R<sub>m</sub></div>

  <div class="n-steps">
    <p class="n-p"><strong>Worked example.</strong> Same movement, I<sub>m</sub> = 1 mA, R<sub>m</sub> = 100 Ω, reads only 0.1 V full scale alone. Build a voltmeter reading up to 100 V full scale.</p>
    <p class="n-p">1. Total resistance needed: R<sub>total</sub> = V / I<sub>m</sub> = 100 / 0.001 = 100,000 Ω.</p>
    <p class="n-p">2. R<sub>s</sub> = R<sub>total</sub> − R<sub>m</sub> = 100,000 − 100 = <span class="n-val">99,900 Ω</span> (≈ 99.9 kΩ).</p>
    <p class="n-p">3. Check: 99,900 Ω in series with 100 Ω across 100 V gives 100/100,000 = <span class="n-val">1 mA</span>, exactly full scale, with 0.1 V across the movement, which is "full scale" on a dial now printed 0 to 100 V.</p>
  </div>
  <p class="n-p">The multiplier came out large (<span class="n-val">99.9 kΩ</span>), nearly a thousand times R<sub>m</sub>, exactly what "high resistance in parallel with the circuit under test" requires. Multi-range voltmeters, and the ohms-per-volt sensitivity rating on an analogue meter, follow directly from how large a multiplier is used per range.</p>

  <div class="n-h1" id="s-wattmeter">Wattmeter</div>
  <p class="n-p">Power is volts times amps (and, for AC, times the power factor), so a wattmeter has to sense both quantities at once and combine them. The standard electrodynamometer wattmeter does this with two coils:</p>
  <table class="n-table">
    <tr><th>Coil</th><th>Connection</th><th>Function</th></tr>
    <tr><td><strong>Current coil</strong></td><td>Fixed, connected in series with the load (few turns, thick wire, low resistance)</td><td>Produces a field proportional to the load current, exactly like an ammeter connection</td></tr>
    <tr><td><strong>Voltage (pressure) coil</strong></td><td>Moving, connected in parallel across the supply (many turns, thin wire, high resistance, usually with a series multiplier resistor built in)</td><td>Carries a current proportional to the voltage, exactly like a voltmeter connection</td></tr>
  </table>
  <p class="n-p">The moving voltage coil sits in the field produced by the fixed current coil, so the torque on it depends on the product of the two, current times voltage, and (because the coils are wound so the torque also depends on the phase angle between them) times the cosine of the phase angle between voltage and current, which is the power factor. The deflection is a direct reading of real power, <span class="hl">P = VI cos φ</span>, not just volts or amps separately.</p>

  <div class="n-h2">Two-wattmeter method for three phase power</div>
  <p class="n-p">The total real power in <strong>any</strong> three phase three wire system, balanced or unbalanced, star or delta, can be measured with only two single phase wattmeters, not three. Each wattmeter has its current coil in one line and its voltage coil connected between that line and the third (the line without a wattmeter in it), with the third line as the common reference for both voltage coils. Total power is the algebraic sum of the two readings:</p>
  <div class="n-formula">P<sub>total</sub> = W<sub>1</sub> + W<sub>2</sub></div>
  <p class="n-p">At low power factor one wattmeter can read backwards (negative), and it is subtracted rather than added: expected behaviour, not a fault, and it is also used to estimate power factor of a balanced load from the ratio of the two readings.</p>

  <div class="n-h1" id="s-energy">Energy Meter</div>
  <p class="n-p">A wattmeter reads instantaneous power, watts, at the moment you look at it. An <strong>energy meter</strong> answers a different question: how much energy, in kilowatt-hours, has been consumed over a period of time. It senses current and voltage for real power exactly like a wattmeter, and then <strong>integrates that power over time</strong>.</p>
  <p class="n-p">The traditional electromechanical (spinning-disc) meter does this mechanically: current and voltage coils, arranged like a wattmeter's, induce eddy currents in a thin aluminium disc and produce a torque on it proportional to instantaneous power, so the disc rotates at a speed proportional to power, braked by a permanent magnet so that speed stays exactly proportional to load power. Because the disc is a physical wheel, total revolutions over time is a mechanical integration of power over time, which is energy, and a geared counter converts revolutions into a kWh reading.</p>
  <p class="n-p">Modern electronic energy meters replace the disc with a sampling circuit that digitises voltage and current, multiplies them many times a second for instantaneous power, and accumulates that power over each interval in a microcontroller, performing the same integration numerically instead of mechanically. Either way, the difference from a wattmeter is the same: a wattmeter gives power now, an energy meter gives the running total consumed over time.</p>

  <div class="n-h1" id="s-multiclamp">Multimeter and Clamp Meter</div>
  <p class="n-p"><strong>Multimeter.</strong> A single portable instrument combining ammeter, voltmeter and ohmmeter functions (often with continuity and diode test) behind one selector switch and display. Internally it uses the same principles above: a sensitive movement or an analogue-to-digital converter, with shunts extending current ranges, multipliers extending voltage ranges, and an internal battery driving a known current through an unknown resistance for the ohms function. To measure current it still has to be broken into the circuit in series, exactly like a standalone ammeter, which is its main practical limitation on a live switchboard.</p>
  <p class="n-p"><strong>Clamp meter.</strong> Built to measure current without ever breaking the circuit. A hinged, split iron core clamps around a single current-carrying conductor. The alternating current in that conductor produces a changing magnetic field, and the clamp's core and winding act exactly like the secondary of a current transformer: the changing flux induces a proportional current in the winding, scaled down and displayed as amps. Because it works by picking up an induced field rather than being wired into the circuit, it needs only physical access to clamp around one conductor, no shutdown, no breaking of terminals, which is why it is the everyday tool for checking running current on board without de-energising anything. Basic clamp meters only sense AC, since they rely on changing flux; models that also read DC use a Hall effect sensor in the jaw alongside the transformer action.</p>

  <div class="n-h1" id="s-ctvt">Current Transformers (CTs) and Voltage Transformers (VTs)</div>
  <p class="n-p">Switchboard instruments and protective relays are never connected directly to the high currents and voltages of a ship's main busbars. Instead they connect through instrument transformers, which scale the quantity down to a small, standard, safe value and isolate the instrument from the primary.</p>
  <p class="n-p">A <strong>voltage transformer (VT)</strong> works like a conventional step-down transformer: its primary is connected across the line (in parallel, like a voltmeter), and its secondary delivers a scaled-down voltage, commonly 110 V, to feed instruments and relays. Connected like a voltmeter, it behaves like one: the secondary should not be short circuited, since that drives a very heavy fault current through the winding.</p>
  <p class="n-p">A <strong>current transformer (CT)</strong> works the opposite way round. Its primary is the busbar or cable itself, connected in series with the load like an ammeter, and its secondary delivers a scaled-down current, commonly standardised to 1 A or 5 A at full load, to feed ammeters, wattmeter current coils, energy meters and protection relays.</p>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>The critical safety rule, and it will be asked directly: a CT secondary must NEVER be left open circuit while the primary is energised.</strong> A CT is designed to work with its secondary always closed through a low impedance burden (an ammeter coil, a relay coil), so that the secondary's own magnetomotive force very nearly cancels the primary's, and only a small magnetising current is needed to maintain the working flux in the core. Open the secondary while the primary conductor still carries full load current, and that cancelling ampere-turns disappears. The full primary current now has nothing to oppose it, so essentially all of it becomes magnetising current, driving the core into deep saturation. Because induced secondary voltage is proportional to the <em>rate of change</em> of flux, the sharp flux transitions at each saturation reversal induce short, extremely high voltage spikes at the open terminals, from hundreds of volts into the kilovolt range depending on the CT's design and burden. That voltage is lethal to touch, can flash over and break down the winding's own insulation, and can overheat the core. The rule in practice: before disconnecting any instrument from a CT secondary, first <strong>short circuit the secondary terminals</strong> (many CT terminal blocks have a shorting link built in for this reason), and only then open the connection to the instrument.</div></div>

  <p class="n-p">The parallel with a VT is the mirror image and worth holding in mind together: a VT secondary must never be short circuited (that is the dangerous condition for a device wired like a voltmeter), while a CT secondary must never be left open (that is the dangerous condition for a device wired like an ammeter). Each instrument transformer inherits the same connection rule, and the same failure mode, as the type of meter it is built to resemble.</p>

  <div class="n-h1" id="s-interview">Interview Answers, Rapid Fire</div>

  <p class="n-p"><strong>Why is an ammeter connected in series, and how is the reading derived?</strong><br>
  Current is common along a single path, so the meter is inserted directly into that path to force the full circuit current through its coil. It is built with very low resistance so it does not itself drop a significant voltage or reduce the current being measured. For higher ranges, most current is diverted through a low resistance shunt in parallel with the movement, and the reading is derived from I<sub>m</sub>R<sub>m</sub> = I<sub>sh</sub>R<sub>sh</sub>, with the scale relabelled for the full current.</p>

  <p class="n-p"><strong>Why is a voltmeter connected in parallel, and how is the reading derived?</strong><br>
  A voltage exists between two points regardless of what else is connected there, so the meter is simply connected across those points without breaking the circuit. It is built with very high resistance so it diverts only negligible current and does not pull the voltage down from its true value. For higher ranges, a high resistance multiplier in series with the movement drops most of the applied voltage, using V = I<sub>m</sub>(R<sub>m</sub> + R<sub>s</sub>), with the scale relabelled for the full applied voltage.</p>

  <p class="n-p"><strong>What is the difference between an energy meter and a wattmeter?</strong><br>
  A wattmeter gives instantaneous real power at the moment you read it. An energy meter senses the same power but integrates it over time, mechanically (a disc rotating at a speed proportional to power, so revolutions give energy) or electronically (sampling and accumulating power), to give total energy in kWh over a period.</p>

  <p class="n-p"><strong>Why does a PMMC instrument only work on DC?</strong><br>
  Torque is proportional to current, not current squared, so it reverses every time the current reverses. On AC the positive and negative half cycles cancel, the coil cannot follow the electrical frequency mechanically, and average torque over a cycle is zero. It only reads meaningfully on DC, or on AC first rectified ahead of the movement.</p>

  <p class="n-p"><strong>Why does a moving iron instrument read true RMS and work on AC and DC?</strong><br>
  Torque is proportional to current squared and always acts the same direction regardless of current direction, so there is no cancellation on AC. The pointer settles at the time average of I², and the square root of that average is by definition the RMS value. On DC, I² is constant, so the reading is simply the DC value.</p>

  <p class="n-p"><strong>How does a clamp meter measure current without breaking the circuit?</strong><br>
  It clamps a split iron core around a single conductor. The AC current produces a changing magnetic field, inducing a proportional current in a winding inside the clamp, acting exactly like a CT with the conductor as the primary. No physical connection into the circuit is needed.</p>

  <p class="n-p"><strong>Why must a CT secondary never be left open circuit while the primary is energised?</strong><br>
  A CT normally works with secondary ampere-turns almost cancelling the primary's. Open the secondary and that cancellation disappears, so nearly all primary current becomes magnetising current, driving the core into deep saturation. The resulting sharp flux transitions induce very high voltage spikes at the open terminals, which can be lethal and can damage the CT. Always short the secondary before disconnecting an instrument from it.</p>

  <p class="n-p"><strong>What is the two-wattmeter method?</strong><br>
  Measures total real power in any three phase three wire system, balanced or not, using two single phase wattmeters, each with its current coil in one line and voltage coil referenced to the third line. Total power is the algebraic sum of the two readings; at low power factor one can read negative, which is expected and subtracted.</p>

  <p class="n-p"><strong>What is the difference between a shunt and a multiplier?</strong><br>
  A shunt is a low resistance in parallel with an ammeter movement, diverting most of the current to extend the current range. A multiplier is a high resistance in series with a voltmeter movement, dropping most of the voltage to extend the voltage range: low resistance in parallel for current, high resistance in series for voltage.</p>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F14')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the F14 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

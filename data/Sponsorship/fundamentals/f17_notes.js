window.loadNotes("F17", `<div class="view" id="view-notes-f17">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F17')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F17 - Basic Electronics</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 17 of 25 · Difficulty ★★★☆☆ · Study Time 50-70 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-semi')">Semiconductors</button>
    <button class="anc-btn" onclick="jumpTo('s-pn')">PN Junction</button>
    <button class="anc-btn" onclick="jumpTo('s-transistor')">Transistor</button>
    <button class="anc-btn" onclick="jumpTo('s-switch')">Transistor as Switch</button>
    <button class="anc-btn" onclick="jumpTo('s-amp')">Amplifier</button>
    <button class="anc-btn" onclick="jumpTo('s-opamp')">Op-Amp</button>
    <button class="anc-btn" onclick="jumpTo('s-comparator')">Comparator</button>
    <button class="anc-btn" onclick="jumpTo('s-logic')">Logic Gates</button>
    <button class="anc-btn" onclick="jumpTo('s-strobe')">Stroboscopic Effect</button>
    <button class="anc-btn" onclick="jumpTo('s-ir')">IR Remote Control</button>
    <button class="anc-btn" onclick="jumpTo('s-interview')">Interview Answers</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to explain what makes a semiconductor different from a conductor and an insulator, explain doping and the difference between N-type and P-type material, describe the PN junction and its behaviour under forward and reverse bias, name the three terminals of a transistor and its three regions of operation, explain why a saturated transistor behaves as a closed switch, describe the basic idea of amplification and gain, explain what a comparator is and give a real shipboard example, outline what an op-amp is, read a truth table for the basic logic gates, explain the stroboscopic effect and why it is a genuine hazard around rotating machinery lit by discharge lighting, and explain how an infrared remote control works and why its signal is modulated. This module is short on calculation and long on physical reasoning: interviewers use it to check whether you actually understand what is happening inside the black boxes you work with every day, not whether you can recite a datasheet.</p>

  <div class="n-h1" id="s-semi">Semiconductors and Doping</div>
  <p class="n-p">A conductor, like copper, has a huge number of free electrons and conducts easily. An insulator, like rubber, has almost none and does not conduct at all. A <strong>semiconductor</strong>, typically silicon or germanium, sits in between. At absolute zero it behaves as an insulator because every electron is locked into a covalent bond. At room temperature, thermal energy is enough to break a small number of those bonds free, so it conducts a little, and critically, that conductivity can be controlled deliberately. That controllability is the entire reason semiconductors are useful.</p>

  <div class="n-h2">Pure silicon and covalent bonding</div>
  <p class="n-p">Silicon has four electrons in its outer shell. In a pure silicon crystal, each atom shares one electron with each of four neighbours, forming four covalent bonds. Every outer electron is tied up in a bond, so pure ("intrinsic") silicon is a poor conductor. To make it useful, a tiny controlled quantity of impurity is deliberately added: this is <strong>doping</strong>.</p>

  <div class="n-h2">N-type material</div>
  <p class="n-p">Add a small amount of a pentavalent impurity, an element with five outer electrons (phosphorus or arsenic, commonly), into the silicon lattice. Four of those five electrons form the usual covalent bonds with the surrounding silicon atoms. The fifth has no bond to enter, so it is only loosely held and is easily set free to conduct. The material now has an excess of free electrons, and since the electron carries negative charge, this is called <strong>N-type</strong> (negative charge carriers are the majority). Electrons are the majority carriers, and a small population of thermally generated holes are the minority carriers. The doped material as a whole is still electrically neutral: the donor atom still has all its protons, it has simply released one electron to wander the lattice.</p>

  <div class="n-h2">P-type material</div>
  <p class="n-p">Add instead a trivalent impurity, an element with three outer electrons (boron or gallium). It can only form three of the four covalent bonds a silicon atom would normally make, leaving one bond incomplete: a missing electron, called a <strong>hole</strong>. A hole behaves, for practical purposes, as a mobile positive charge carrier, because a nearby electron can hop into that gap, which simply shifts the hole one position over, and the process repeats through the lattice. The material has an excess of these positive-behaving holes, so it is called <strong>P-type</strong>. Holes are the majority carriers here, electrons the minority.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>The idea to hold onto.</strong> Doping does not add or remove any net charge from the material, N-type and P-type silicon are both still electrically neutral overall. What doping changes is the number of <em>free charge carriers available to move</em>, electrons in N-type, holes in P-type. Neither type conducts anything on its own that is useful. The useful behaviour appears only when the two are brought together, which is the PN junction.</div></div>

  <div class="n-h1" id="s-pn">The PN Junction</div>
  <p class="n-p">A PN junction is formed by growing N-type and P-type material together in a single continuous crystal. It is the basic building block of the diode, and of every transistor described below.</p>

  <div class="n-h2">The depletion layer</div>
  <p class="n-p">The moment the junction forms, free electrons near the boundary on the N-side diffuse across into the P-side, where they fall into and fill nearby holes. Likewise holes near the boundary on the P-side effectively migrate into the N-side. This diffusion leaves a thin region right at the junction that has no free carriers left in it at all: the N-side atoms that lost an electron near the boundary are now fixed positive ions, and the P-side atoms that gained an electron near the boundary are now fixed negative ions. This carrier-free zone is the <strong>depletion layer</strong>, and the fixed ion charges either side of it set up a small internal electric field (the barrier potential, roughly <span class="n-val">0.7 V</span> for silicon) that opposes any further diffusion. Left alone, the junction settles into this equilibrium and no more current flows.</p>

  <div class="n-h2">Forward bias</div>
  <p class="n-p">Connect the positive terminal of an external supply to the P-side and the negative terminal to the N-side. The external field pushes holes in the P-side toward the junction and electrons in the N-side toward the junction, both moving against the depletion layer's own field. This narrows the depletion layer. Once the applied voltage exceeds the barrier potential (about <span class="n-val">0.7 V</span> for silicon, about <span class="n-val">0.3 V</span> for germanium), the depletion layer effectively collapses and majority carriers stream across the junction freely: current flows easily.</p>

  <div class="n-h2">Reverse bias</div>
  <p class="n-p">Connect the supply the other way, positive to the N-side, negative to the P-side. Now the external field pulls majority carriers on both sides away from the junction, which <strong>widens</strong> the depletion layer and strengthens the barrier. Almost no majority-carrier current can cross. A tiny leakage current still flows, carried by the small population of minority carriers (thermally generated electrons in the P-side, holes in the N-side) drifting the other way, but for most practical purposes reverse bias is treated as blocking current entirely.</p>

  <div class="n-formula">Forward bias: depletion layer narrows, current flows easily above ≈0.7 V (Si)
Reverse bias: depletion layer widens, current is blocked (a small leakage current only)</div>

  <p class="n-p">This one-way behaviour, easy conduction one way, blocking the other, is exactly what a diode is: a single PN junction with two leads brought out, the anode from the P-side and the cathode from the N-side. It is the basis of rectification, converting AC to DC, and it underlies every semiconductor device covered in this module.</p>

  <div class="n-h1" id="s-transistor">The Bipolar Junction Transistor</div>
  <p class="n-p">A transistor is built from three doped regions in sequence, forming two PN junctions back to back, either NPN or PNP. It has three terminals.</p>

  <table class="n-table">
    <tr><th>Terminal</th><th>Function</th></tr>
    <tr><td><strong>Emitter (E)</strong></td><td>Heavily doped. Its job is to emit, that is, inject, a large supply of majority carriers into the base.</td></tr>
    <tr><td><strong>Base (B)</strong></td><td>Very thin and lightly doped, sandwiched between emitter and collector. A small current here controls a much larger current between emitter and collector.</td></tr>
    <tr><td><strong>Collector (C)</strong></td><td>Moderately doped and physically the largest region. Its job is to collect the carriers that cross from the emitter through the base.</td></tr>
  </table>

  <p class="n-p">The base is deliberately made extremely thin and lightly doped. Most of the carriers injected by the emitter shoot straight across the thin base and are swept into the collector, rather than recombining inside the base. Only a small fraction recombine, and that small fraction is what shows up as base current. The result is that a small base current controls a much larger collector current: this ratio is the current gain, often called beta (β) or h<sub>FE</sub>, typically in the range of 50 to a few hundred for a general-purpose transistor.</p>

  <div class="n-h2">The three regions of operation</div>
  <table class="n-table">
    <tr><th>Region</th><th>Junction bias</th><th>Behaviour</th><th>Used for</th></tr>
    <tr><td><strong>Cutoff</strong></td><td>Both junctions reverse biased</td><td>No base current, no collector current. Transistor is effectively an open circuit between collector and emitter.</td><td>Switch, OFF state</td></tr>
    <tr><td><strong>Active</strong></td><td>Base-emitter forward biased, base-collector reverse biased</td><td>Collector current is proportional to base current, I<sub>C</sub> = β × I<sub>B</sub>. The transistor behaves as a controlled current source.</td><td>Amplifier</td></tr>
    <tr><td><strong>Saturation</strong></td><td>Both junctions forward biased</td><td>Base current is driven well beyond what is needed to support the maximum possible collector current. Collector-emitter voltage collapses to a small residual value (typically 0.1 to 0.3 V).</td><td>Switch, ON state</td></tr>
  </table>

  <p class="n-p">Notice the pattern: a transistor used as a <strong>switch</strong> is deliberately driven between the two extremes, cutoff (fully off) and saturation (fully on), and is never left sitting in the active region. A transistor used as an <strong>amplifier</strong> is deliberately kept in the active region and biased so it sits mid-way between the two extremes, so that a small varying base signal produces a correspondingly varying, larger collector signal without ever hitting either extreme and clipping the waveform.</p>

  <div class="n-h1" id="s-switch">Why Saturation Behaves as a Closed Switch</div>
  <p class="n-p">This is worth deriving rather than just asserting, because it is a genuinely common interview follow-up.</p>
  <p class="n-p">In the active region, I<sub>C</sub> = β × I<sub>B</sub>, and β is large, commonly 100 or more. If you keep increasing the base current, the collector current predicted by that formula would keep rising too, but it physically cannot: the collector current is limited by the external collector circuit, principally the load resistance and the supply voltage, through I<sub>C</sub> = (V<sub>CC</sub> - V<sub>CE</sub>)/R<sub>C</sub>. There is a ceiling on how much current the collector circuit can actually deliver.</p>
  <p class="n-p">Once the base current is driven high enough that the collector current has already hit that ceiling, injecting still more base current cannot push the collector current any higher: the demand for carriers in the collector is already fully satisfied. At that point both the base-emitter and base-collector junctions are forward biased (both depletion layers have collapsed), carriers flood across freely, and the residual voltage drop from collector to emitter falls to a small value, typically only <span class="n-val">0.1 to 0.3 V</span>, called V<sub>CE(sat)</sub>.</p>
  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Say this in the interview.</strong> A saturated transistor is not literally a perfect short circuit, there is still a small residual V<sub>CE(sat)</sub> across it and it does dissipate a little heat, but that residual voltage is small enough, and the current is limited by the external load rather than by the transistor, that it behaves for practical circuit purposes exactly like a closed switch. Symmetrically, a cut-off transistor carries no current at all, so it behaves like an open switch. Driving a transistor hard between these two states rather than leaving it partway is exactly what a digital logic gate or a relay-driver output stage does.</div></div>

  <div class="n-h1" id="s-amp">Amplifier Basics and Gain</div>
  <p class="n-p">An amplifier takes a small input signal and produces a larger output signal that is a faithful, scaled-up copy of it, using energy drawn from the DC supply rather than from the input signal itself. The input signal only <em>controls</em> how the supply's energy is released; it does not supply that energy itself. This is the fundamental distinction between amplification and, say, a transformer stepping up a voltage: a transformer cannot increase power, only trade voltage for current, whereas an amplifier genuinely delivers more power out than the tiny input signal carried in, because the extra power comes from the DC supply.</p>
  <p class="n-p">The transistor achieves this because, in the active region, a small varying base current produces a much larger, proportionally varying collector current (I<sub>C</sub> = β × I<sub>B</sub>). Pass that varying collector current through a load resistor and the varying voltage dropped across it is the amplified output signal.</p>
  <div class="n-formula">Gain = Output / Input</div>
  <p class="n-p">Gain can be expressed for current, voltage or power, depending on what is being compared, and is a pure ratio (or expressed in decibels, dB, on a logarithmic scale). A voltage gain of 100 means a 10 mV input signal appears as a 1 V output signal, in the same waveform shape, drawn from the supply.</p>
  <p class="n-p"><strong>Shipboard relevance:</strong> the small signal from a sensor, a thermocouple, a strain gauge, a microphone in a PA system, is far too weak to drive an indicator, a relay, or a loudspeaker directly. An amplifier stage sits between the sensor and the load specifically to bridge that gap, without altering the shape or timing of the original signal.</p>

  <div class="n-h1" id="s-opamp">The Operational Amplifier, in Outline</div>
  <p class="n-p">An operational amplifier (op-amp) is a high-gain, multi-stage amplifier built as a single integrated circuit, with two inputs and one output. The two inputs are marked <strong>inverting (-)</strong> and <strong>non-inverting (+)</strong>. In its raw form, an op-amp has an enormous open-loop voltage gain, often on the order of 100,000 or more, which means it amplifies the tiny difference between its two input voltages by that huge factor and drives the result to its output.</p>
  <p class="n-p">Used with external feedback components (resistors typically, connecting the output back to the inverting input), the op-amp is the standard building block for precise amplifiers, adders, filters and integrators throughout instrumentation and control electronics. Used <em>without</em> feedback, that same enormous open-loop gain is what turns it into a comparator, covered next.</p>

  <div class="n-h1" id="s-comparator">The Comparator</div>
  <p class="n-p">A comparator is a circuit, very commonly built from an op-amp used without feedback, whose job is to compare two input voltages and report which one is larger by driving its output fully to one supply rail or the other. It does not produce a proportional, in-between output the way an amplifier does; it produces a decisive, two-state (digital) output.</p>
  <p class="n-p">Because the op-amp's open-loop gain is so enormous, even a genuinely tiny voltage difference between the two inputs is enough to drive the output all the way to one saturation limit or the other. If the non-inverting input is even slightly higher than the inverting input, the output slams to the positive supply rail; if it is even slightly lower, the output slams to the negative supply rail (or to zero, in a single-supply circuit). There is effectively no middle ground: the comparator's output is either "high" or "low," never partway.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Shipboard example: an alarm setpoint trip.</strong> Take a temperature sensor whose output voltage rises with temperature, feeding one input of a comparator. The other input is held at a fixed reference voltage set to correspond to the alarm setpoint, say a bearing high-temperature alarm at <span class="n-val">80°C</span>. While the sensor voltage stays below the reference, the comparator output sits low and nothing happens. The instant the sensor voltage crosses the reference, the comparator output snaps high, and that clean digital transition is used directly to light an alarm lamp, sound a buzzer, or trip a relay. This is exactly how a huge number of shipboard alarm and trip circuits work at the component level: a comparator turning a continuously varying analogue measurement into a single, decisive go/no-go decision at a chosen setpoint.</div></div>

  <p class="n-p">The same idea appears anywhere a system must decide "has this value crossed a limit," rather than "what is this value": bilge high-level alarms, low lube-oil pressure trips, overspeed trips, battery low-voltage cutouts. The comparator is the component that turns the crossing of a threshold into a clean switching action.</p>

  <div class="n-h1" id="s-logic">Logic Gates and Truth Tables</div>
  <p class="n-p">A logic gate is a circuit, ultimately built from transistors switched between cutoff and saturation exactly as described above, that produces a digital output (0 or 1, low or high) based on its digital inputs, following a fixed logical rule. These are the building blocks of every digital control, interlock and alarm-logic circuit on board.</p>

  <table class="n-table">
    <tr><th>Gate</th><th>Rule</th><th>Truth table (A, B → Out)</th></tr>
    <tr><td><strong>AND</strong></td><td>Output is 1 only if <em>all</em> inputs are 1.</td><td>0,0→0 · 0,1→0 · 1,0→0 · 1,1→1</td></tr>
    <tr><td><strong>OR</strong></td><td>Output is 1 if <em>any</em> input is 1.</td><td>0,0→0 · 0,1→1 · 1,0→1 · 1,1→1</td></tr>
    <tr><td><strong>NOT</strong></td><td>Single input. Output is the inverse of the input.</td><td>0→1 · 1→0</td></tr>
    <tr><td><strong>NAND</strong></td><td>AND followed by NOT. Output is 0 only if all inputs are 1.</td><td>0,0→1 · 0,1→1 · 1,0→1 · 1,1→0</td></tr>
    <tr><td><strong>NOR</strong></td><td>OR followed by NOT. Output is 1 only if all inputs are 0.</td><td>0,0→1 · 0,1→0 · 1,0→0 · 1,1→0</td></tr>
  </table>

  <p class="n-p"><strong>Shipboard interlock example:</strong> an AND gate is the natural fit for a permissive interlock, for instance "allow the steering gear motor to start" only when "power available" AND "no local isolation applied" AND "hydraulic level normal" are all true simultaneously. An OR gate is the natural fit for an alarm summary, where any one of several independent fault conditions, high temperature OR low pressure OR low level, should raise the same common alarm.</p>

  <div class="n-h1" id="s-strobe">The Stroboscopic Effect</div>
  <p class="n-p">This is a genuinely important practical safety topic, not just a curiosity, and it is worth understanding the physics rather than memorising the conclusion.</p>

  <div class="n-h2">Why discharge lighting flickers</div>
  <p class="n-p">A discharge lamp, fluorescent or similar, run directly from an AC mains supply does not glow with constant brightness. The arc within the tube is re-struck and effectively re-ignited on every half-cycle of the supply as the current passes through zero and reverses. On a 50 Hz supply, that means the light output fluctuates at <span class="n-val">100 Hz</span> (two flashes per cycle, one on each half-cycle); on a 60 Hz supply, at <span class="n-val">120 Hz</span>. This flicker is far too fast for the human eye to perceive directly under normal viewing, which is exactly why the hazard is easy to miss.</p>

  <div class="n-h2">Why a rotating machine can appear stationary or slow</div>
  <p class="n-p">If a rotating part, a shaft, a coupling, a fan blade, a chuck, completes exactly one revolution (or a whole number of revolutions) in the time between successive light flashes, then every single flash catches that part in the same angular position. To the eye, integrating what is effectively a rapid sequence of still frames, the part appears completely stationary, even though it is spinning at full speed. If the rotational speed is close to, but not exactly, a multiple of the flash rate, the part appears to rotate very slowly, and can even appear to rotate backwards, depending on exactly how far it has advanced between flashes. This is the <strong>stroboscopic effect</strong>: the same illusion used deliberately in a workshop strobe tachometer to measure rotational speed, but here occurring accidentally and unwanted under ordinary lighting.</p>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Why it is a genuine hazard on board.</strong> Machinery spaces are full of rotating equipment running at speeds that can easily coincide with, or land close to, a simple multiple of 100 Hz or 120 Hz: couplings, fan blades, pump shafts, lathe chucks in the workshop. Under a single fluorescent fitting with no other light present, such a part can look motionless, or can look like it is barely creeping, when it is actually spinning at full operating speed. A person who trusts that visual impression and reaches in to touch, clean, or adjust what looks like a stopped part can suffer serious injury. This is a documented and recognised hazard in industrial and marine engineering practice, not a theoretical one, which is exactly why it is treated as a standing safety point in workshops and machinery spaces lit by discharge lighting.</div></div>

  <div class="n-h2">The remedy</div>
  <p class="n-p">The underlying cause is that all the light in the space is flickering in step, at the same instants, so every flash catches the machine at the same phase of rotation. Break that synchronism and the illusion collapses. Two practical approaches are used:</p>
  <p class="n-p"><strong>Staggered, phase-shifted lighting.</strong> Where twin-lamp fittings are used, one lamp is wired with a simple series capacitor (a "lead-lag" circuit) so its current, and therefore its flicker, is shifted in phase relative to the other lamp. The two lamps then flash at different instants rather than together, and light reaching the machine is effectively never fully dark between flashes, removing the freeze-frame effect. On a wider scale, feeding adjacent lighting circuits from different phases of a three-phase supply has the same effect: the flicker from one fitting no longer lines up with the flicker from its neighbour.</p>
  <p class="n-p"><strong>Awareness and not relying on visual judgement alone.</strong> Whatever the lighting arrangement, the standing safe practice is simple: never judge whether a rotating machine has actually stopped by eye alone under discharge lighting. Confirm a machine is stopped by other means, isolation status, a hand on a bearing housing (with appropriate caution), a tachometer reading, before treating it as safe to approach or touch.</p>

  <div class="n-h1" id="s-ir">Infrared (IR) Remote Control</div>
  <p class="n-p">An IR remote is a simple two-part system: a transmitter in the handset and a receiver in the equipment being controlled.</p>

  <div class="n-h2">The transmitter</div>
  <p class="n-p">Pressing a button on the handset causes a small microcontroller to generate a coded pulse pattern, a unique sequence representing that particular command, and use it to switch an infrared LED on and off very rapidly. Rather than simply pulsing the LED on and off at the slow rate needed to encode the command itself, the LED is switched on and off rapidly at a <strong>carrier frequency</strong>, commonly around <span class="n-val">38 kHz</span>, only during the "on" portions of the coded command. So the actual transmitted signal is a burst of <span class="n-val">38 kHz</span> pulses, gated on and off in the pattern that represents the button pressed.</p>

  <div class="n-h2">The receiver</div>
  <p class="n-p">The receiver module contains an infrared-sensitive photodiode (or phototransistor), followed by an amplifier and a filter/demodulator stage that is tuned specifically to respond to a 38 kHz modulated signal and to ignore everything else. When it detects genuine 38 kHz modulated IR, it produces a clean digital output pulse matching the original coded command, which the equipment's own microcontroller then decodes into the actual command (volume up, channel change, and so on).</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Why the modulation is used, and this is exactly the question asked.</strong> Infrared is not unique to remote controls: sunlight, incandescent lamps, and ordinary room lighting all radiate plenty of infrared as background noise. If the receiver simply responded to "any infrared light present," it would be triggered constantly by ambient sources and would be useless. By modulating the transmitted signal onto a rapidly oscillating carrier, around 38 kHz, and building the receiver to respond <em>only</em> to that specific oscillating frequency, the ambient IR, which is steady or only slowly varying, is completely rejected, while the genuine, rapidly pulsing 38 kHz signal from the remote is picked out clearly. Modulation is what lets a weak, deliberately coded IR signal be reliably separated from a background flooded with unmodulated IR noise.</div></div>

  <p class="n-p">The same basic sensor-and-modulation principle appears elsewhere on board wherever infrared is used for a deliberate signal rather than passive sensing, such as some optical data links and certain proximity or level detectors, for exactly the same reason: modulation lets the wanted signal be picked cleanly out of an ambient IR background.</p>

  <div class="n-h1" id="s-interview">Interview Answers, Rapid Fire</div>

  <p class="n-p"><strong>What is a semiconductor?</strong><br>
  A material, typically silicon, whose conductivity lies between a conductor and an insulator, and which can be deliberately controlled by doping. Pure silicon conducts poorly because every outer electron is tied up in a covalent bond; doping deliberately introduces free charge carriers, electrons in N-type material, holes in P-type material.</p>

  <p class="n-p"><strong>What happens at a PN junction?</strong><br>
  Diffusion of carriers across the junction leaves a carrier-free depletion layer with a small internal barrier voltage, about <span class="n-val">0.7 V</span> for silicon. Forward bias narrows the depletion layer and lets current flow easily above that barrier voltage. Reverse bias widens it and blocks current, aside from a small leakage current.</p>

  <p class="n-p"><strong>Transistor basics, what are the three terminals and three regions?</strong><br>
  Emitter, base and collector. The emitter injects carriers, the thin lightly-doped base controls how many reach the collector, and the collector collects them. The three regions are cutoff, both junctions reverse biased, no current, used as an open switch; active, base-emitter forward biased and base-collector reverse biased, collector current proportional to base current, used for amplification; and saturation, both junctions forward biased, collector-emitter voltage collapses to a small residual value, used as a closed switch.</p>

  <p class="n-p"><strong>Why does a saturated transistor behave as a closed switch?</strong><br>
  Once base current is driven high enough that the collector current has already hit the ceiling set by the external load and supply, extra base current cannot raise it further. Both junctions are forward biased, carriers flow freely, and the residual collector-emitter voltage drops to only a fraction of a volt. Current is then limited by the load, not the transistor, which is functionally a closed switch.</p>

  <p class="n-p"><strong>What is a comparator?</strong><br>
  A circuit, usually an op-amp used without feedback, that compares two input voltages and drives its output fully to one supply rail or the other depending on which input is higher. It gives a decisive two-state output rather than a proportional one, because the op-amp's very high open-loop gain drives even a tiny input difference to full output swing. A common shipboard use is an alarm setpoint trip: comparing a sensor signal against a fixed reference voltage so the output switches cleanly the instant a measured value, such as bearing temperature, crosses the alarm setpoint.</p>

  <p class="n-p"><strong>What is the difference between an amplifier and a comparator, if both can use an op-amp?</strong><br>
  An amplifier uses feedback to hold the gain at a controlled, finite value so the output is a scaled, proportional copy of the input. A comparator has no feedback, so the op-amp's enormous open-loop gain is left uncontrolled, and any tiny input difference drives the output straight to one supply rail. One gives a proportional output, the other gives an on/off decision.</p>

  <p class="n-p"><strong>What is an op-amp?</strong><br>
  A high-gain integrated circuit amplifier with two inputs, inverting and non-inverting, and one output. With external feedback components it becomes a precise, controlled-gain amplifier or filter; without feedback its very high open-loop gain makes it behave as a comparator.</p>

  <p class="n-p"><strong>What is the stroboscopic effect, and why is it dangerous?</strong><br>
  Discharge lighting run from AC mains flickers at twice the supply frequency, <span class="n-val">100 Hz</span> on a <span class="n-val">50 Hz</span> supply, too fast to see directly. If a rotating part completes a whole number of revolutions between flashes, every flash catches it in the same position and it appears stationary, or appears to creep slowly if the speeds are close but not exact. Around machinery this is dangerous because a part that is actually spinning at full speed can look stopped, and someone trusting that appearance can reach in and be injured. The remedy is phase-shifted or staggered twin-lamp fittings, or feeding adjacent lighting from different supply phases, so the flicker no longer lines up, plus never judging a machine to be stopped by eye alone under such lighting.</p>

  <p class="n-p"><strong>How does a TV remote or IR remote actually work?</strong><br>
  The handset encodes the button press as a digital pulse pattern and uses it to switch an infrared LED on and off, but does so on a rapid carrier, commonly around <span class="n-val">38 kHz</span>, rather than pulsing the LED directly at the slow command rate. The receiver's photodiode and demodulator circuit are tuned to respond only to that 38 kHz modulated signal, decode it back into the original command, and pass it to the equipment's control circuit.</p>

  <p class="n-p"><strong>Why is the IR signal modulated rather than sent as plain on/off pulses?</strong><br>
  Because ordinary ambient infrared, from sunlight and room lighting, is a steady background that would swamp a receiver looking for plain infrared light. Modulating the signal onto a specific rapidly oscillating carrier frequency, and building the receiver to respond only to that frequency, lets the receiver reject the steady ambient background completely and pick out only the genuine, deliberately coded signal from the remote.</p>

  <p class="n-p"><strong>What is the difference between AND and OR gates, and where might you see them on board?</strong><br>
  An AND gate outputs 1 only when every input is 1, which suits a permissive interlock where several conditions must all be satisfied before an action is allowed, such as starting steering gear only when power is available, no isolation is applied, and hydraulic level is normal. An OR gate outputs 1 if any input is 1, which suits a common alarm, where any one of several independent faults should raise the same alarm.</p>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F17')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the F17 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

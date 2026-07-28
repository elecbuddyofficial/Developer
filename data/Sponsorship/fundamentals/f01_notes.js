window.loadNotes("F01", `<div class="view" id="view-notes-f01">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F01')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F01 - Basic Electrical Fundamentals</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 1 of 25 · Difficulty ★★☆☆☆ · Study Time 45-60 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-charge')">Charge</button>
    <button class="anc-btn" onclick="jumpTo('s-current')">Current</button>
    <button class="anc-btn" onclick="jumpTo('s-voltage')">Voltage</button>
    <button class="anc-btn" onclick="jumpTo('s-resistance')">Resistance</button>
    <button class="anc-btn" onclick="jumpTo('s-ohm')">Ohm's Law</button>
    <button class="anc-btn" onclick="jumpTo('s-series-parallel')">Series &amp; Parallel</button>
    <button class="anc-btn" onclick="jumpTo('s-kcl')">KCL</button>
    <button class="anc-btn" onclick="jumpTo('s-kvl')">KVL</button>
    <button class="anc-btn" onclick="jumpTo('s-power')">Power</button>
    <button class="anc-btn" onclick="jumpTo('s-energy')">Energy</button>
    <button class="anc-btn" onclick="jumpTo('s-acdc')">AC &amp; DC</button>
    <button class="anc-btn" onclick="jumpTo('s-acdc-diff')">AC vs DC</button>
    <button class="anc-btn" onclick="jumpTo('s-frequency')">Frequency</button>
    <button class="anc-btn" onclick="jumpTo('s-phase')">Phase Angle</button>
    <button class="anc-btn" onclick="jumpTo('s-rms')">RMS &amp; Peak</button>
    <button class="anc-btn" onclick="jumpTo('s-pf')">Power Factor</button>
    <button class="anc-btn" onclick="jumpTo('s-units')">Units &amp; Formulae</button>
    <button class="anc-btn" onclick="jumpTo('s-numericals')">Worked Numericals</button>
    <button class="anc-btn" onclick="jumpTo('s-viva')">Viva Questions</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
    <button class="anc-btn" onclick="jumpTo('s-summary')">Module Summary</button>
  </div>

  <div class="note-content">


  <!-- OBJECTIVES -->
  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to define charge, current, voltage and resistance to the standard, state Ohm's Law with its condition, explain the difference between EMF and potential difference, analyse series and parallel circuits, apply Kirchhoff's Current and Voltage Laws, distinguish power from energy, explain why I²R governs cable and transmission design, compare AC and DC and justify why ships run AC with DC backup, work with frequency, phase angle, RMS/peak/average values and power factor at an introductory level, and solve basic numericals on all of the above without hesitation.</p>
  <p class="n-p">This module matters because it is the opening filter in almost every sponsorship interview. Panels test understanding, not memory, by following a definition with "but why?" A candidate who answers fundamentals clearly and precisely sets the tone for the whole interview. <strong>Voltage is the push, current is the flow, resistance opposes the flow</strong>. Nearly every concept below is a variation on these three ideas.</p>


  <!-- CHARGE -->
  <div class="n-h1" id="s-charge">Electric Charge</div>
  <p class="n-p"><strong>Definition:</strong> a fundamental property of matter that causes it to experience a force in an electric field. Exists as positive charge (protons) and negative charge (electrons). SI unit: <strong>coulomb (C)</strong>. One electron carries 1.6 × 10<sup>-19</sup> C, so one coulomb is roughly 6.24 × 10<sup>18</sup> electrons, meaning charge is quantised.</p>
  <div class="n-formula">Q = I × t<div class="label">Q = charge (C) · I = current (A) · t = time (s)</div></div>
  <p class="n-p"><strong>Analogy:</strong> charge is the water itself in a pipe; current is how fast that water moves. <strong>Shipboard:</strong> battery capacity in amp-hours (Ah) is a direct application of Q = I × t. A 200 Ah battery supplies 200 A for one hour, or 20 A for ten hours, before discharge.</p>
  <p class="n-p"><strong>Interview answer:</strong> "Charge is a basic property of matter, measured in coulombs. Electrons carry negative charge, protons carry positive. When free electrons move through a conductor, that movement is what we call current."</p>


  <!-- CURRENT -->
  <div class="n-h1" id="s-current">Electric Current</div>
  <p class="n-p"><strong>Definition:</strong> the rate of flow of electric charge through a conductor. SI unit: <strong>ampere (A)</strong>. One ampere equals one coulomb per second. <strong>Analogy:</strong> current is the flow rate in a pipe, litres per second: a larger flow needs a thicker pipe, exactly why higher-current circuits need thicker cable.</p>
  <div class="n-formula">I = Q / t<div class="label">I = current (A) · Q = charge (C) · t = time (s)</div></div>

  <div class="n-crit"><div class="icon">❌</div><div class="body"><strong>Interview trap:</strong> "Which direction does current actually flow?" Conventional current, used in every diagram and formula, flows positive to negative. Electrons physically flow negative to positive. The convention predates the discovery of the electron and was kept because the mathematics is identical either way. Do not state electron flow as the only "correct" answer.</div></div>
  <table class="n-table">
    <tr><th></th><th>Conventional Current</th><th>Electron Flow</th></tr>
    <tr><td>Direction</td><td class="hl">Positive to negative</td><td class="hl">Negative to positive</td></tr>
    <tr><td>Used in</td><td class="ok">All diagrams, formulas, industry practice</td><td>Physics explanations only</td></tr>
  </table>

  <p class="n-p"><strong>Shipboard current values:</strong> pump motors 20-150 A, steering gear 30-100 A, bow thruster 100-500 A, battery charging circuits 5-40 A. For comparison, current fatal to a human is only 50-100 mA, far less than a single lamp draws. It is current, not voltage, that injures; voltage only drives that current through the body. Covered fully in F02, Electrical Safety.</p>
  <p class="n-p"><strong>Interview answer:</strong> "Conventional current flows from positive to negative, and that is what we use in all diagrams and calculations. Physically it is electrons that move, negative to positive. The convention was fixed before the electron was discovered and kept because the maths works out the same."</p>


  <!-- VOLTAGE -->
  <div class="n-h1" id="s-voltage">Voltage, Potential Difference and EMF</div>
  <p class="n-p"><strong>Definition:</strong> voltage, or potential difference, is the work done in moving a unit charge from one point to another in an electric field. SI unit: <strong>volt (V)</strong>. One volt equals one joule per coulomb. <strong>Analogy:</strong> voltage is pressure, like the height of a water tank on a tower. The key word is <em>difference</em>: current only flows if there is a voltage difference between two points, just as water only flows if there is a height difference.</p>
  <div class="n-formula">V = W / Q<div class="label">V = voltage (V) · W = work or energy (J) · Q = charge (C)</div></div>

  <div class="n-crit"><div class="icon">❌</div><div class="body"><strong>Interview trap:</strong> "Does voltage kill?" No. Voltage drives current, and it is current passing through the body that causes injury. Voltage only creates the potential for current to flow; without a completed circuit through the body, no current flows and there is no injury. This is also why a bird sitting on a live wire is unharmed: both feet are at the same potential, so there is no difference across the bird and no current flows through it.</div></div>

  <div class="n-h2">EMF vs Potential Difference</div>
  <table class="n-table">
    <tr><th>Aspect</th><th>EMF</th><th>Potential Difference (PD)</th></tr>
    <tr><td>Meaning</td><td>Energy supplied per coulomb by the source</td><td>Energy used per coulomb by the load</td></tr>
    <tr><td>Where measured</td><td class="ok">Across the source, open circuit</td><td class="hl">Across the load, current flowing</td></tr>
    <tr><td>Symbol / Unit</td><td>E, volt</td><td>V, volt</td></tr>
  </table>
  <div class="n-formula">V = E - (I × r)<div class="label">V = terminal voltage · E = EMF · I = current · r = internal resistance of the source</div></div>
  <p class="n-p"><strong>E equals V only when no current is flowing.</strong> With the circuit open, I is zero, so V = E - (I × r) collapses to V = E, and the two are genuinely equal. This is the exact case most textbook problems use, which is why students start treating E and V as always interchangeable. The moment current is drawn, they differ by the drop across internal resistance, and V falls below E.</p>
  <p class="n-p"><strong>Shipboard:</strong> a starter battery reads 12 V on open circuit but sags to 10-11 V while cranking a large engine. The EMF has not changed; terminal voltage drops because current now flows through the battery's internal resistance. A larger sag under load is a standard battery health check.</p>
  <p class="n-p"><strong>Interview answer:</strong> "EMF is the voltage a source produces on open circuit. Potential difference is the voltage across a load when current is flowing. The difference between the two is the drop across the source's own internal resistance."</p>


  <!-- RESISTANCE -->
  <div class="n-h1" id="s-resistance">Resistance</div>
  <p class="n-p"><strong>Definition:</strong> the property of a material that opposes the flow of electric current. SI unit: <strong>ohm (Ω)</strong>. One ohm of resistance means one volt across it produces one ampere of current. <strong>Analogy:</strong> how narrow and rough a pipe is; a wide smooth pipe is low resistance, a narrow rusty pipe is high resistance. Free electrons collide with vibrating metal atoms as they move, and each collision converts a little electrical energy into heat, which is the direct evidence of resistance.</p>

  <div class="n-formula">R = ρ × L / A<div class="label">R = resistance (Ω) · ρ = resistivity (Ω·m) · L = length (m) · A = cross-sectional area (m²)</div></div>
  <table class="n-table">
    <tr><th>Factor</th><th>Relationship</th><th>Practical Meaning</th></tr>
    <tr><td>Length (L)</td><td class="hl">Directly proportional</td><td>Longer cable, higher resistance, more voltage drop</td></tr>
    <tr><td>Area (A)</td><td class="hl">Inversely proportional</td><td>Thicker cable, lower resistance, heavier loads need thicker cable</td></tr>
    <tr><td>Material (ρ)</td><td class="hl">Lower ρ, lower R</td><td>Silver best, copper the practical shipboard choice</td></tr>
    <tr><td>Temperature</td><td class="hl">R rises with heat, for metals</td><td>Hot winding reads higher resistance than cold</td></tr>
  </table>
  <p class="n-p">Resistance and resistivity are commonly confused: resistance depends on the actual piece of wire and its dimensions, while resistivity is a property of the material alone, independent of size or shape.</p>

  <div class="n-h2">Temperature Coefficient of Resistance (α)</div>
  <div class="n-formula">R<sub>t</sub> = R<sub>0</sub> (1 + α × t)<div class="label">R<sub>t</sub> = resistance at t°C · R<sub>0</sub> = resistance at 0°C</div></div>
  <table class="n-table">
    <tr><th>Material</th><th>α</th><th>Behaviour</th></tr>
    <tr><td>Metals (copper)</td><td>Positive, ≈0.004/°C</td><td>Resistance rises with temperature</td></tr>
    <tr><td>Semiconductors</td><td>Negative</td><td>Resistance falls with temperature, basis of the thermistor</td></tr>
    <tr><td>Manganin alloy</td><td>Near zero</td><td>Used for shunts in precision meters</td></tr>
  </table>
  <p class="n-p"><strong>Shipboard:</strong> winding resistance rises as copper heats, so cold and hot readings never match. Insulation resistance must always be logged with winding temperature; comparing readings at different temperatures without correction gives a false trend. <strong>Memory trick:</strong> metals get harder to push through when hot (higher R); semiconductors get more carriers when hot (lower R), opposite behaviour, opposite sign of α.</p>


  <!-- OHM'S LAW -->
  <div class="n-h1" id="s-ohm">Ohm's Law</div>
  <p class="n-p">The single most asked question in any electrical interview. <strong>Definition:</strong> current through a conductor is directly proportional to the potential difference across it, provided the physical conditions such as temperature remain constant. <strong>Analogy:</strong> push harder on the water, more flows; narrow the pipe, less flows.</p>
  <div class="n-formula">V = I × R<div class="label">Also written I = V / R and R = V / I</div></div>

  <div class="n-crit"><div class="icon">❌</div><div class="body"><strong>Interview trap:</strong> "State Ohm's Law." Stating only "V equals IR" is incomplete. The condition, "provided temperature and other physical conditions remain constant," is part of the law itself. Leaving it out invites an immediate follow-up that catches most candidates off guard.</div></div>

  <table class="n-table">
    <tr><th>Type</th><th>Behaviour</th><th>Examples</th></tr>
    <tr><td>Ohmic</td><td class="ok">Obeys Ohm's Law, straight-line V-I graph</td><td>Copper, most metals, standard resistors</td></tr>
    <tr><td>Non-ohmic</td><td class="bad">Curved V-I graph, resistance not constant</td><td>Diode, transistor, filament lamp, thermistor</td></tr>
  </table>
  <p class="n-p"><strong>Interview answer:</strong> "Ohm's Law states that current through a conductor is directly proportional to the voltage across it, provided temperature and physical conditions stay constant. V equals I times R. It applies to ohmic conductors like copper, but not to devices like diodes where resistance is not constant."</p>


  <!-- SERIES / PARALLEL -->
  <div class="n-h1" id="s-series-parallel">Series and Parallel Circuits</div>
  <p class="n-p"><strong>Analogy:</strong> series is a single-lane road, every car passes every point, so one stoppage blocks everyone. Parallel is a multi-lane highway, each lane independent, so one blocked lane does not stop the others.</p>
  <table class="n-table">
    <tr><th>Property</th><th>Series</th><th>Parallel</th></tr>
    <tr><td>Current</td><td class="ok">Same everywhere</td><td class="hl">Divides between branches</td></tr>
    <tr><td>Voltage</td><td class="hl">Divides across components</td><td class="ok">Same across all branches</td></tr>
    <tr><td>Total resistance</td><td>R = R₁ + R₂ + R₃, increases</td><td>1/R = 1/R₁ + 1/R₂ + 1/R₃, less than the smallest branch</td></tr>
    <tr><td>One component fails open</td><td class="bad">Entire circuit stops</td><td class="ok">Other branches keep working</td></tr>
    <tr><td>Practical use</td><td>Fuses, switches, ammeters</td><td>All ship distribution, lighting, sockets</td></tr>
  </table>
  <div class="n-formula">Two resistors in parallel: R = (R<sub>1</sub> × R<sub>2</sub>) / (R<sub>1</sub> + R<sub>2</sub>)<div class="label">Product over sum, valid only for exactly two resistors</div></div>
  <p class="n-p"><strong>Shipboard:</strong> all ship distribution is parallel, so every load gets full rated voltage, each can be switched independently, and one blown lamp does not take down the circuit. <strong>Interview answer:</strong> "Ship wiring is parallel so every load gets full rated voltage, each is independently switched, and one failed load does not kill the rest of the circuit. Old fairy lights wired in series are the classic counter-example, where one blown bulb killed the entire string."</p>


  <!-- KCL -->
  <div class="n-h1" id="s-kcl">Kirchhoff's Current Law (KCL)</div>
  <p class="n-p"><strong>Definition:</strong> at any junction in a circuit, the algebraic sum of all currents is zero; total current entering equals total current leaving. <strong>Analogy:</strong> a water pipe junction, if 10 litres per second flows in, exactly 10 litres per second flows out however the branches divide it. KCL is conservation of charge stated for circuits.</p>
  <div class="n-formula">Σ I<sub>in</sub> = Σ I<sub>out</sub></div>
  <p class="n-p"><strong>Worked numerical:</strong> two cables carry current into a busbar, 30 A and 45 A. By KCL, the single outgoing cable carries 30 + 45 = <span class="n-val">75 A</span>, exactly the reasoning used to size a busbar or check a distribution panel.</p>
  <p class="n-p"><strong>Interview answer:</strong> "The sum of currents entering a node equals the sum leaving it. It is based on conservation of charge, since charge cannot accumulate at a junction."</p>


  <!-- KVL -->
  <div class="n-h1" id="s-kvl">Kirchhoff's Voltage Law (KVL)</div>
  <p class="n-p"><strong>Definition:</strong> around any closed loop in a circuit, the algebraic sum of all EMFs and voltage drops is zero; total voltage supplied equals total voltage dropped. <strong>Analogy:</strong> walking around a hill back to your start, whatever you climbed you descended by exactly the same amount. KVL is conservation of energy stated for circuits.</p>
  <div class="n-formula">Σ E = Σ (I × R)</div>
  <p class="n-p"><strong>Worked numerical:</strong> a 24 V battery supplies two series resistors. The first drops 10 V, so the second must drop 24 - 10 = <span class="n-val">14 V</span>. The drops always add up to the supply.</p>
  <p class="n-p"><strong>Shipboard fault-finding:</strong> if a measured 24 V supply only shows 20 V across the measured drops, the missing 4 V is being lost somewhere unaccounted for, almost always a loose terminal, corroded joint, or damaged cable. KVL is a standard tool for locating bad connections.</p>
  <p class="n-p"><strong>Interview answer:</strong> "Around any closed loop, the sum of EMFs equals the sum of voltage drops, from conservation of energy. Practically, if measured drops do not add up to the supply, the missing voltage points to a bad connection."</p>


  <!-- POWER -->
  <div class="n-h1" id="s-power">Electrical Power</div>
  <p class="n-p"><strong>Definition:</strong> the rate at which electrical energy is converted into another form, or the rate at which work is done. SI unit: <strong>watt (W)</strong>, one joule per second. <strong>Analogy:</strong> power is how much work the water is doing per second; high pressure with low flow, or low pressure with high flow, can do equal work, which is why power is voltage multiplied by current.</p>
  <div class="n-formula">P = V × I&nbsp;&nbsp;&nbsp;&nbsp;P = I² × R&nbsp;&nbsp;&nbsp;&nbsp;P = V² / R</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Why interviewers push on I²R:</strong> because power loss depends on current <em>squared</em>, doubling the current quadruples the heat, halving it cuts loss to a quarter. This single fact explains high-voltage transmission, current-based cable sizing, and why a loose connection burns out.</div></div>
  <table class="n-table">
    <tr><th>Current becomes</th><th>Heat loss becomes</th><th>Consequence</th></tr>
    <tr><td>2×</td><td class="bad">4×</td><td>Cable temperature rises sharply</td></tr>
    <tr><td>3×</td><td class="bad">9×</td><td>Insulation damage likely</td></tr>
    <tr><td>0.5×</td><td class="ok">0.25×</td><td>Cooler running, better efficiency</td></tr>
  </table>
  <p class="n-p"><strong>Shipboard:</strong> a loose terminal has high contact resistance. Current is unchanged, but with R increased, I²R heat at that one point rises sharply, which is why loose terminals glow, discolour, and eventually fail while the rest of the cable stays cool. Thermal imaging surveys exist to find these hot spots.</p>


  <!-- ENERGY -->
  <div class="n-h1" id="s-energy">Electrical Energy</div>
  <p class="n-p"><strong>Definition:</strong> the total work done by an electric current over a period of time. SI unit: <strong>joule (J)</strong>; commercial unit: <strong>kilowatt hour (kWh)</strong>. Power is the rate, energy is the total amount: a 2 kW heater has fixed power, but left running for 5 hours it has consumed 10 kWh of energy.</p>
  <div class="n-formula">E = P × t<div class="label">1 kWh = 1000 W for 1 hour = 3.6 × 10<sup>6</sup> joules</div></div>
  <p class="n-p"><strong>Interview trap:</strong> "Difference between a wattmeter and an energy meter?" A wattmeter reads instantaneous power right now. An energy meter accumulates that power over time and reads total energy in kWh, what you are billed for. Same relationship as a speedometer versus an odometer.</p>


  <!-- AC / DC -->
  <div class="n-h1" id="s-acdc">AC and DC</div>
  <p class="n-p"><strong>DC:</strong> current flows steadily in one direction, magnitude essentially constant. Produced by batteries, DC generators, rectifiers. <strong>AC:</strong> current periodically reverses direction, magnitude varies as a sine wave. Produced by alternators. <strong>Analogy:</strong> DC is a river, always one way. AC is a tide, in then out, fifty times a second on a 50 Hz system.</p>
  <p class="n-p">When a coil rotates inside a magnetic field, the direction in which conductors cut the flux reverses every half revolution, so the induced EMF naturally alternates. AC is the natural output of a rotating machine; producing DC requires extra hardware, a commutator or a rectifier, to force the output into one direction.</p>


  <!-- AC vs DC -->
  <div class="n-h1" id="s-acdc-diff">AC vs DC: Full Comparison</div>
  <table class="n-table">
    <tr><th>Aspect</th><th>AC</th><th>DC</th></tr>
    <tr><td>Direction</td><td>Reverses periodically</td><td>Constant, one direction</td></tr>
    <tr><td>Frequency</td><td>50 Hz or 60 Hz</td><td class="hl">Zero</td></tr>
    <tr><td>Generated by</td><td>Alternator</td><td>Battery, DC generator, rectifier</td></tr>
    <tr><td>Voltage transformation</td><td class="ok">Easy, via transformer</td><td class="bad">Difficult, needs converters</td></tr>
    <tr><td>Transmission over distance</td><td class="ok">Efficient at high voltage</td><td class="bad">Higher losses at usable voltages</td></tr>
    <tr><td>Can be stored</td><td class="bad">No, not directly</td><td class="ok">Yes, in batteries</td></tr>
    <tr><td>Switching / breaking</td><td class="ok">Easier, current passes through zero</td><td class="bad">Harder, arc does not self-extinguish</td></tr>
    <tr><td>Shipboard use</td><td>Main supply, motors, lighting, distribution</td><td>Emergency batteries, UPS, electronics, control, starting</td></tr>
  </table>
  <p class="n-p"><strong>Why ships use AC as the main supply:</strong> voltage steps up or down easily with a transformer, alternator generation is simpler with no commutator or brushes, AC induction motors are rugged and low-maintenance, and AC fault current is easier to break since it passes through zero twice per cycle. <strong>Why DC is still essential:</strong> batteries are inherently DC, so all emergency power, UPS, starting systems, alarm and control circuits, and electronics run on DC. A ship is AC distribution with critical DC backup, not a purely AC system.</p>


  <!-- FREQUENCY -->
  <div class="n-h1" id="s-frequency">Frequency and Time Period</div>
  <p class="n-p"><strong>Frequency:</strong> number of complete cycles per second, unit <strong>hertz (Hz)</strong>. <strong>Time period:</strong> time to complete one cycle, unit <strong>second (s)</strong>.</p>
  <div class="n-formula">f = 1 / T&nbsp;&nbsp;&nbsp;&nbsp;f = (P × N) / 120<div class="label">f = frequency (Hz) · T = period (s) · P = poles · N = speed (RPM)</div></div>
  <table class="n-table">
    <tr><th>System</th><th>Frequency</th><th>Time Period</th><th>Used In</th></tr>
    <tr><td>European standard</td><td><span class="n-val">50 Hz</span></td><td><span class="n-val">20 ms</span></td><td>India, UK, most of the world, most ships</td></tr>
    <tr><td>American standard</td><td><span class="n-val">60 Hz</span></td><td><span class="n-val">16.67 ms</span></td><td>USA, some vessels and offshore units</td></tr>
  </table>
  <p class="n-p"><strong>Shipboard:</strong> motor speed is tied directly to supply frequency. If frequency drifts, every motor on board changes speed, pumps deliver the wrong flow, and timing-based equipment misbehaves, which is why the governor holds engine speed tightly.</p>


  <!-- PHASE -->
  <div class="n-h1" id="s-phase">Phase and Phase Angle</div>
  <p class="n-p"><strong>Definition:</strong> phase describes the position of an alternating quantity at a given instant. Phase angle is the angular difference between two alternating quantities of the same frequency. <strong>Analogy:</strong> two runners on a track at the same speed; starting together they stay together, in phase, zero degrees. A quarter-lap head start never closes, 90 degrees out of phase.</p>
  <table class="n-table">
    <tr><th>Condition</th><th>Phase Angle</th><th>Meaning</th></tr>
    <tr><td>In phase</td><td><span class="n-val">0°</span></td><td>Pure resistive load</td></tr>
    <tr><td>Current lags voltage</td><td>Up to 90°</td><td>Inductive load: motor, transformer</td></tr>
    <tr><td>Current leads voltage</td><td>Up to 90°</td><td>Capacitive load: capacitor bank</td></tr>
    <tr><td>Three-phase supply</td><td>120° apart</td><td>Each phase displaced by 120 degrees</td></tr>
  </table>
  <p class="n-p"><strong>Memory trick, CIVIL:</strong> in a <strong>C</strong>apacitor, <strong>I</strong> before <strong>V</strong>, current leads. In an inductor (<strong>L</strong>), <strong>V</strong> before <strong>I</strong>, voltage leads and current lags.</p>


  <!-- RMS -->
  <div class="n-h1" id="s-rms">RMS, Peak and Average Values</div>
  <div class="n-crit"><div class="icon">❌</div><div class="body"><strong>Interview trap:</strong> "Your ship supply is 440 V. Is that the peak value?" No, it is the RMS value; the peak is about 622 V. Not knowing this suggests unfamiliarity with what the numbers on your own switchboard represent.</div></div>
  <p class="n-p">An AC voltage is constantly changing, zero at some instants, maximum at others, so a single instantaneous value is meaningless for rating equipment. RMS answers a more useful question: what steady DC voltage would produce the same heating effect in a resistor as this AC voltage does? That equivalent DC value is the RMS value, and it is what every meter, nameplate and switchboard is calibrated in.</p>
  <div class="n-formula">V<sub>RMS</sub> = 0.707 × V<sub>peak</sub>&nbsp;&nbsp;&nbsp;&nbsp;V<sub>peak</sub> = 1.414 × V<sub>RMS</sub>&nbsp;&nbsp;&nbsp;&nbsp;V<sub>avg</sub> = 0.637 × V<sub>peak</sub><div class="label">Average is over one half cycle only; the full-cycle average of a sine wave is zero</div></div>
  <table class="n-table">
    <tr><th>Quantity</th><th>Formula</th><th>For a 440 V system</th></tr>
    <tr><td>RMS value</td><td>0.707 × peak</td><td class="ok"><span class="n-val">440 V</span> (what the meter reads)</td></tr>
    <tr><td>Peak value</td><td>1.414 × RMS</td><td class="hl"><span class="n-val">622 V</span> (what insulation withstands)</td></tr>
    <tr><td>Average (half cycle)</td><td>0.637 × peak</td><td><span class="n-val">396 V</span></td></tr>
  </table>
  <p class="n-p"><strong>Shipboard:</strong> insulation experiences the actual instantaneous voltage, not RMS. On a 440 V system, insulation is stressed to 622 V twice every cycle, which is why insulation is rated well above nominal voltage and tested at elevated DC voltages.</p>
  <p class="n-p"><strong>Interview answer:</strong> "All AC nameplate and meter values are RMS, the equivalent DC value producing the same heating effect. For a sine wave, RMS is peak divided by root two. Our 440 V supply actually peaks at around 622 V, which is what the insulation has to withstand."</p>


  <!-- POWER FACTOR -->
  <div class="n-h1" id="s-pf">Power Factor (Introduction)</div>
  <p class="n-p"><strong>Definition:</strong> the cosine of the phase angle between voltage and current, also the ratio of active power to apparent power. Indicates how effectively supplied power converts into useful work. <strong>Analogy:</strong> a glass of beer. Beer is active power (kW), what you actually wanted. Foam is reactive power (kVAR), taking up space but undrinkable. The full glass is apparent power (kVA), the size you paid for. Power factor is the proportion of the glass that is beer.</p>
  <div class="n-formula">PF = cos φ = kW / kVA<div class="label">Always between 0 and 1, no units</div></div>
  <table class="n-table">
    <tr><th>Load Type</th><th>Power Factor</th><th>Example</th></tr>
    <tr><td>Purely resistive</td><td class="ok">1.0 (unity)</td><td>Heater, filament lamp</td></tr>
    <tr><td>Inductive</td><td class="hl">Lagging, 0.7-0.9</td><td>Motors, transformers, most ship loads</td></tr>
    <tr><td>Capacitive</td><td class="hl">Leading</td><td>Capacitor banks</td></tr>
  </table>
  <p class="n-p"><strong>Shipboard:</strong> for the same useful kW, poor power factor forces the alternator and cables to carry more current, driving up I²R heat and voltage drop, and pushing the alternator toward its kVA limit while delivering less useful kW, exactly why alternators are rated in kVA rather than kW. The power triangle and PF improvement are covered fully in F04, Electrical Power.</p>


  <!-- UNITS -->
  <div class="n-h1" id="s-units">Units, Prefixes and Formula Sheet</div>
  <table class="n-table">
    <tr><th>Quantity</th><th>Symbol</th><th>Unit</th></tr>
    <tr><td>Charge</td><td>Q</td><td>coulomb (C)</td></tr>
    <tr><td>Current</td><td>I</td><td>ampere (A)</td></tr>
    <tr><td>Voltage / EMF / PD</td><td>V or E</td><td>volt (V)</td></tr>
    <tr><td>Resistance</td><td>R</td><td>ohm (Ω)</td></tr>
    <tr><td>Resistivity</td><td>ρ</td><td>ohm metre (Ω·m)</td></tr>
    <tr><td>Power</td><td>P</td><td>watt (W)</td></tr>
    <tr><td>Energy</td><td>E</td><td>joule (J) or kWh</td></tr>
    <tr><td>Frequency</td><td>f</td><td>hertz (Hz)</td></tr>
  </table>
  <table class="n-table">
    <tr><th>Prefix</th><th>Symbol</th><th>Multiplier</th><th>Example</th></tr>
    <tr><td>micro</td><td>µ</td><td>10<sup>-6</sup></td><td>Capacitor, 470 µF</td></tr>
    <tr><td>milli</td><td>m</td><td>10<sup>-3</sup></td><td>Relay current, 20 mA</td></tr>
    <tr><td>kilo</td><td>k</td><td>10<sup>3</sup></td><td>Ship HV supply, 6.6 kV</td></tr>
    <tr><td>mega</td><td>M</td><td>10<sup>6</sup></td><td>Insulation resistance, 100 MΩ</td></tr>
  </table>
  <p class="n-p"><strong>Watch the case:</strong> lowercase m means milli, one thousandth; uppercase M means mega, one million. Confusing mA with MA, or mΩ with MΩ, is a factor of a billion error. On an insulation test, 2 MΩ and 2 mΩ are the difference between a healthy machine and a dead short.</p>
  <table class="n-table">
    <tr><th>Formula</th><th>Finds</th><th>Use When</th></tr>
    <tr><td>Q = I × t</td><td>Charge</td><td>Current and time known</td></tr>
    <tr><td>V = I × R</td><td>Voltage</td><td>Ohm's Law, the workhorse</td></tr>
    <tr><td>R = ρL / A</td><td>Resistance from dimensions</td><td>Cable sizing</td></tr>
    <tr><td>R<sub>t</sub> = R<sub>0</sub>(1 + αt)</td><td>Resistance at temperature</td><td>Hot vs cold winding</td></tr>
    <tr><td>P = VI, I²R, V²/R</td><td>Power</td><td>Depends on knowns</td></tr>
    <tr><td>E = P × t</td><td>Energy</td><td>Consumption over time</td></tr>
    <tr><td>f = PN/120</td><td>Frequency</td><td>Alternator poles and speed</td></tr>
    <tr><td>V<sub>RMS</sub> = 0.707 V<sub>peak</sub></td><td>RMS value</td><td>Peak known</td></tr>
    <tr><td>PF = cos φ = kW / kVA</td><td>Power factor</td><td>Phase angle or powers known</td></tr>
  </table>


  <!-- NUMERICALS -->
  <div class="n-h1" id="s-numericals">Worked Numericals</div>
  <p class="n-p">State the formula out loud, substitute clearly, and state the unit in the final answer. An answer without a unit is treated as wrong.</p>

  <div class="n-h2">1. Ohm's Law</div>
  <p class="n-p">A 24 V control circuit has resistance 12 Ω. Find the current.</p>
  <ol class="n-steps"><li>I = V / R = 24 / 12 = <span class="n-val">2 A</span></li></ol>

  <div class="n-h2">2. Power and Current</div>
  <p class="n-p">A 440 V single phase heater is rated 8.8 kW. Find current and resistance.</p>
  <ol class="n-steps">
    <li>I = P / V = 8800 / 440 = <span class="n-val">20 A</span></li>
    <li>R = V / I = 440 / 20 = <span class="n-val">22 Ω</span></li>
    <li>Check: I²R = 20² × 22 = 8800 W. Correct.</li>
  </ol>

  <div class="n-h2">3. Cable Heat Loss</div>
  <p class="n-p">A cable of resistance 0.2 Ω carries 30 A, then 60 A. Find the power lost as heat in each case.</p>
  <ol class="n-steps">
    <li>At 30 A: P = I²R = 900 × 0.2 = <span class="n-val">180 W</span></li>
    <li>At 60 A: P = 3600 × 0.2 = <span class="n-val">720 W</span></li>
    <li>Current doubled, heat loss became four times, the I² relationship in action.</li>
  </ol>

  <div class="n-h2">4. Energy Consumption</div>
  <p class="n-p">A 5 kW motor runs 8 hours per day. Find the energy consumed.</p>
  <ol class="n-steps"><li>E = P × t = 5 × 8 = <span class="n-val">40 kWh</span> per day</li></ol>

  <div class="n-h2">5. Series and Parallel</div>
  <p class="n-p">Three resistors, 10 Ω, 20 Ω and 30 Ω. Find total resistance in series, then in parallel.</p>
  <ol class="n-steps">
    <li>Series: R = 10 + 20 + 30 = <span class="n-val">60 Ω</span></li>
    <li>Parallel: 1/R = 6/60 + 3/60 + 2/60 = 11/60, so R = <span class="n-val">5.45 Ω</span></li>
    <li>Sanity check: parallel result is less than the smallest resistor, always true.</li>
  </ol>

  <div class="n-h2">6. RMS and Peak</div>
  <p class="n-p">A ship supply is 440 V. Find the peak voltage the insulation must withstand.</p>
  <ol class="n-steps"><li>V<sub>peak</sub> = 1.414 × 440 = <span class="n-val">622 V</span> approximately</li></ol>

  <div class="n-h2">7. Frequency from Alternator Speed</div>
  <p class="n-p">A 4 pole alternator runs at 1500 RPM. Find the output frequency.</p>
  <ol class="n-steps"><li>f = PN/120 = (4 × 1500)/120 = <span class="n-val">50 Hz</span></li></ol>

  <div class="n-h2">8. Temperature Effect on Resistance</div>
  <p class="n-p">A copper winding has resistance 10 Ω at 0°C. Find its resistance at 75°C, α = 0.004/°C.</p>
  <ol class="n-steps">
    <li>R<sub>75</sub> = 10 × (1 + 0.004 × 75) = 10 × 1.3 = <span class="n-val">13 Ω</span></li>
    <li>A 30 percent rise from heating alone, why winding resistance must always be recorded with its temperature.</li>
  </ol>


  <!-- VIVA -->
  <div class="n-h1" id="s-viva">Viva and Interview Questions</div>
  <p class="n-p">These reflect the actual pattern of questions asked from this module. Attempt each answer in your head first, then check against the model answer.</p>
  <table class="n-table">
    <tr><th>Question</th><th>Model Answer</th></tr>
    <tr><td>What is electric current?</td><td>The rate of flow of electric charge through a conductor, measured in amperes. One ampere is one coulomb per second.</td></tr>
    <tr><td>Which direction does current flow?</td><td>Conventional current flows positive to negative and is used in all diagrams. Electrons physically flow negative to positive. The convention was set before the electron was discovered.</td></tr>
    <tr><td>What is voltage?</td><td>Work done per unit charge in moving charge between two points. A potential difference, so it always exists between two points, never at one alone.</td></tr>
    <tr><td>Difference between EMF and potential difference?</td><td>EMF is the source voltage on open circuit. PD is the voltage across the load when current flows. The difference is the drop across internal resistance.</td></tr>
    <tr><td>State Ohm's Law.</td><td>Current through a conductor is directly proportional to the voltage across it, provided temperature and physical conditions remain constant. V equals I times R.</td></tr>
    <tr><td>Give an example of a non-ohmic device.</td><td>A diode. Its resistance is not constant, so its V-I graph is a curve, not a straight line.</td></tr>
    <tr><td>What are the factors affecting resistance?</td><td>Length, cross-sectional area, material resistivity, and temperature. R equals rho L over A.</td></tr>
    <tr><td>Difference between resistance and resistivity?</td><td>Resistance depends on the actual wire and its dimensions. Resistivity is a material property, independent of size or shape.</td></tr>
    <tr><td>Why does a bird on a live wire not get shocked?</td><td>Both feet are at the same potential, so no potential difference exists across the bird and no current flows through it.</td></tr>
    <tr><td>State Kirchhoff's Current Law.</td><td>Sum of currents entering a junction equals the sum leaving it, from conservation of charge.</td></tr>
    <tr><td>State Kirchhoff's Voltage Law.</td><td>Around any closed loop, the sum of EMFs equals the sum of voltage drops, from conservation of energy.</td></tr>
    <tr><td>Why is house and ship wiring in parallel?</td><td>Each load gets full rated voltage, each can be switched independently, and one failure does not kill the rest of the circuit.</td></tr>
    <tr><td>Difference between power and energy?</td><td>Power is the rate of doing work, in watts. Energy is total work over time, in kWh. Power is instantaneous, energy accumulates.</td></tr>
    <tr><td>Difference between a wattmeter and an energy meter?</td><td>A wattmeter reads instantaneous power. An energy meter accumulates it over time and reads total energy in kWh.</td></tr>
    <tr><td>Why is power transmitted at high voltage?</td><td>For the same power, higher voltage means lower current. Since losses are I squared R, reducing current sharply cuts heat loss and voltage drop.</td></tr>
    <tr><td>Why is AC preferred on ships?</td><td>Voltage is easily transformed, alternators need no commutator, induction motors are rugged and low maintenance, and AC fault current breaks more easily.</td></tr>
    <tr><td>Why is DC still needed on a ship?</td><td>Batteries are DC, so emergency power, UPS, starting systems, alarms, control circuits and electronics all need DC.</td></tr>
    <tr><td>What is frequency?</td><td>Complete cycles per second, in hertz. On 50 Hz, one cycle takes 20 milliseconds.</td></tr>
    <tr><td>What is RMS value?</td><td>The equivalent DC value that produces the same heating effect. For a sine wave, peak divided by root two.</td></tr>
    <tr><td>Is 440 V the peak value?</td><td>No, it is the RMS value. Peak is 1.414 times that, around 622 V, which the insulation must withstand.</td></tr>
    <tr><td>Why is the average value of a sine wave zero?</td><td>Over a full cycle the positive and negative halves are equal and cancel, so average is quoted over a half cycle instead.</td></tr>
    <tr><td>What is power factor?</td><td>The cosine of the phase angle between voltage and current, also the ratio of kW to kVA.</td></tr>
    <tr><td>Why is a loose connection dangerous?</td><td>High contact resistance with unchanged current means I squared R heat rises sharply at that point, causing overheating and fire risk.</td></tr>
    <tr><td>Does current flow in an open circuit?</td><td>No. Current needs a complete closed path back to the source. With the path broken, no current flows even though voltage is present.</td></tr>
  </table>


  <!-- QUICK REVISION -->
  <div class="n-h1" id="s-quickrev">Quick Revision</div>
  <p class="n-p">Read this the morning of your interview. If you can explain each line in your own words, you are ready.</p>
  <table class="n-table">
    <tr><th>Concept</th><th>One Line</th></tr>
    <tr><td>Charge</td><td>The stuff that flows. Coulombs. One electron is 1.6 × 10<sup>-19</sup> C.</td></tr>
    <tr><td>Current</td><td>Rate of flow of charge. Amperes. I equals Q over t.</td></tr>
    <tr><td>Voltage</td><td>The push. Work per unit charge. Always a difference between two points.</td></tr>
    <tr><td>EMF vs PD</td><td>EMF at the source on open circuit, PD across the load when current flows.</td></tr>
    <tr><td>Resistance</td><td>Opposition to flow. Depends on length, area, material, temperature.</td></tr>
    <tr><td>Ohm's Law</td><td>V equals IR, provided temperature stays constant.</td></tr>
    <tr><td>Series</td><td>Same current, voltage divides, resistances add.</td></tr>
    <tr><td>Parallel</td><td>Same voltage, current divides, total R less than the smallest.</td></tr>
    <tr><td>KCL / KVL</td><td>Current in equals current out. Sum of EMFs equals sum of drops.</td></tr>
    <tr><td>Power / I²R</td><td>P equals VI, I²R or V²/R. Double the current, quadruple the heat.</td></tr>
    <tr><td>Energy</td><td>Power times time, kWh. Power is the rate, energy is the total.</td></tr>
    <tr><td>AC / DC</td><td>AC reverses periodically, natural alternator output. DC is one direction, batteries and control circuits.</td></tr>
    <tr><td>Frequency</td><td>Cycles per second. 50 Hz means 20 ms per cycle. f equals PN over 120.</td></tr>
    <tr><td>Phase angle</td><td>Angular difference between two waves. CIVIL: C leads, L lags.</td></tr>
    <tr><td>RMS / Peak</td><td>RMS is 0.707 times peak. Peak is 1.414 times RMS. 440 V RMS peaks at 622 V.</td></tr>
    <tr><td>Power factor</td><td>cos φ, equals kW over kVA. Beer is kW, foam is kVAR, full glass is kVA.</td></tr>
  </table>
  <p class="n-p">If asked something here you genuinely do not know, do not invent an answer. State what you do know, then say honestly you are not certain about the rest. Panels respect that far more than confident guessing. For the concepts above, there is no excuse; these are the ones every interviewer expects a serious candidate to have solid.</p>


  <!-- SUMMARY -->
  <div class="n-h1" id="s-summary">Module Summary</div>
  <p class="n-p">You should now be able to explain charge, current and voltage in standard terms; state Ohm's Law with its condition and identify ohmic versus non-ohmic behaviour; apply KCL and KVL including basic fault-finding logic; differentiate power from energy and explain the I² relationship in cable and transmission design; compare AC and DC and justify their shipboard use; work with frequency, phase angle, RMS, peak and power factor at an introductory level; and solve the eight worked numerical types above without hesitation.</p>
  <table class="n-table">
    <tr><th>Estimated Study Time</th><th>Quiz Difficulty</th><th>Next Module</th></tr>
    <tr><td>45-60 minutes</td><td>★★★★☆</td><td>F02, Electrical Safety and Earthing</td></tr>
  </table>

  <div style="margin-top:20px; text-align:center;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F01')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:10px 24px;font-size:14px;">Take the F01 Quiz →</button>
  </div>


  </div>
</div>
</div>`);

window.loadNotes("F03", `<div class="view" id="view-notes-f03">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F03')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F03 - Components &amp; Materials</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 3 of 25 · Difficulty ★★★☆☆ · Study Time 50-65 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-resistor')">Resistor</button>
    <button class="anc-btn" onclick="jumpTo('s-capacitor')">Capacitor</button>
    <button class="anc-btn" onclick="jumpTo('s-inductor')">Inductor</button>
    <button class="anc-btn" onclick="jumpTo('s-conductors')">Conductors</button>
    <button class="anc-btn" onclick="jumpTo('s-semiconductors')">Semiconductors</button>
    <button class="anc-btn" onclick="jumpTo('s-insulators')">Insulators</button>
    <button class="anc-btn" onclick="jumpTo('s-resistivity')">Resistance vs Resistivity</button>
    <button class="anc-btn" onclick="jumpTo('s-conductivity')">Conductivity</button>
    <button class="anc-btn" onclick="jumpTo('s-tempco')">Temperature Coefficient</button>
    <button class="anc-btn" onclick="jumpTo('s-ccc')">Current Carrying Capacity</button>
    <button class="anc-btn" onclick="jumpTo('s-numericals')">Worked Numericals</button>
    <button class="anc-btn" onclick="jumpTo('s-viva')">Viva Questions</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
    <button class="anc-btn" onclick="jumpTo('s-summary')">Module Summary</button>
  </div>

  <div class="note-content">


  <!-- OBJECTIVES -->
  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to describe the behaviour of resistors, capacitors and inductors individually and how each responds to DC and AC, classify materials as conductors, semiconductors or insulators based on their atomic structure, distinguish resistance from resistivity and explain what determines conductivity, apply the temperature coefficient of resistance to predict how component behaviour changes with heat, and explain what current carrying capacity means for a cable and why it is not a fixed universal number.</p>
  <p class="n-p">This module bridges F01's abstract quantities, voltage, current, resistance, with the physical components that actually create those effects in real circuits. Interviewers use it to check whether a candidate understands components as physical objects with real behaviour, not just symbols in a formula.</p>


  <!-- RESISTOR -->
  <div class="n-h1" id="s-resistor">Resistor</div>
  <p class="n-p"><strong>Definition:</strong> a passive component designed to introduce a specific, known value of resistance into a circuit, opposing current flow and dissipating energy as heat. Its behaviour is described by Ohm's Law, V = IR, and it does not store energy, it dissipates it.</p>
  <p class="n-p"><strong>Types:</strong> fixed resistors have a single set value. Variable resistors, such as potentiometers and rheostats, allow the resistance to be adjusted, potentiometers typically used to derive a variable voltage and rheostats used to directly control current. <strong>Power rating</strong> matters as much as resistance value: a resistor exceeding its rated wattage overheats and can fail open or even char and burn, since P = I²R applies to the resistor itself exactly as it applies to any conductor.</p>
  <p class="n-p"><strong>Colour coding</strong> is used on small fixed resistors to indicate value and tolerance without printed numbers, since space is too limited for text, but the exact colour sequence is a specialised detail rarely probed deeply in a sponsorship interview beyond acknowledging that it exists.</p>
  <p class="n-p"><strong>Shipboard use:</strong> resistors appear in control circuits, indicator lamp current limiting, heater elements at a larger scale, and as shunts and bleed resistors in protection and metering circuits.</p>


  <!-- CAPACITOR -->
  <div class="n-h1" id="s-capacitor">Capacitor</div>
  <p class="n-p"><strong>Definition:</strong> a passive component that stores electrical energy in an electric field between two conductive plates separated by an insulating dielectric. Its capacity to store charge is called capacitance, measured in <strong>farads (F)</strong>, defined as the charge stored per volt applied.</p>
  <div class="n-formula">C = Q / V<div class="label">C = capacitance (F) · Q = stored charge (C) · V = voltage across the plates (V)</div></div>
  <p class="n-p"><strong>Behaviour with DC:</strong> a capacitor charges up to the supply voltage and then blocks further current, behaving as an open circuit once fully charged. <strong>Behaviour with AC:</strong> since the voltage is constantly changing direction, the capacitor is continuously charging and discharging, allowing AC to effectively pass through while presenting an opposition called capacitive reactance, which decreases as frequency increases.</p>
  <p class="n-p"><strong>Analogy:</strong> a capacitor behaves like a small elastic tank in a water system. Push water in under pressure and it stores some, pushing back once you stop, but it never lets a steady one-way flow pass through indefinitely; it only responds to changes in pressure.</p>
  <p class="n-p"><strong>Shipboard use:</strong> power factor correction capacitor banks, motor starting and running capacitors on single-phase motors, and smoothing capacitors in DC power supplies and electronic equipment. This is why a capacitor bank left connected can retain a dangerous stored charge even after the supply is isolated, directly connecting to the discharge precaution covered for insulation testing in F02.</p>


  <!-- INDUCTOR -->
  <div class="n-h1" id="s-inductor">Inductor</div>
  <p class="n-p"><strong>Definition:</strong> a passive component, typically a coil of wire, that stores energy in a magnetic field when current flows through it and opposes any change in that current. Its property is called inductance, measured in <strong>henries (H)</strong>.</p>
  <p class="n-p"><strong>Behaviour with DC:</strong> once current reaches a steady value, an ideal inductor behaves as a plain conductor with only its wire resistance limiting current, offering no ongoing opposition. <strong>Behaviour with AC:</strong> a constantly changing current induces a constantly opposing back EMF, presenting an opposition called inductive reactance, which increases with frequency.</p>
  <p class="n-p"><strong>Analogy:</strong> an inductor behaves like a heavy flywheel in the water system. It resists any sudden change in flow, whether starting or stopping, due to its inertia, but once flow is steady it offers no further resistance to it.</p>
  <p class="n-p"><strong>Shipboard use:</strong> every motor winding and transformer winding is fundamentally an inductor, which is exactly why motors draw a large inrush current at starting, the inductance initially opposing the sudden change from zero to running current, and why switching off an inductive circuit produces a voltage spike, since the collapsing magnetic field forces current to continue momentarily, a real hazard addressed by suppression components across contactor coils and similar devices.</p>


  <!-- CONDUCTORS -->
  <div class="n-h1" id="s-conductors">Conductors</div>
  <p class="n-p"><strong>Definition:</strong> materials that allow electric current to flow easily, characterised by having a large number of free electrons available to move under an applied electric field. Metals are the classic example, with silver, copper and aluminium being the best practical conductors in that order of performance, copper chosen almost universally on ships for its strong balance of conductivity, cost and mechanical strength.</p>
  <p class="n-p"><strong>Why metals conduct well:</strong> in a metallic bond, outer electrons are loosely held and shared across the whole structure rather than bound to individual atoms, forming what is often described as a "sea of electrons" that can drift freely when a voltage is applied.</p>


  <!-- SEMICONDUCTORS -->
  <div class="n-h1" id="s-semiconductors">Semiconductors</div>
  <p class="n-p"><strong>Definition:</strong> materials with electrical conductivity between that of a conductor and an insulator, whose conductivity can be controlled and dramatically altered by temperature, light, or the deliberate addition of impurities, a process called doping. Silicon and germanium are the classic examples, silicon being by far the more widely used in modern electronics.</p>
  <p class="n-p"><strong>Why this matters:</strong> the controllability of semiconductor conductivity is precisely what makes diodes, transistors, and all modern power electronics possible, devices whose behaviour cannot be reproduced by a simple fixed conductor or insulator. As covered in F01, semiconductors show a negative temperature coefficient, resistance falling as temperature rises, the opposite of a metal, because heat frees additional charge carriers.</p>


  <!-- INSULATORS -->
  <div class="n-h1" id="s-insulators">Insulators</div>
  <p class="n-p"><strong>Definition:</strong> materials that strongly resist the flow of electric current, since their electrons are tightly bound to individual atoms with very few free to move under an applied field. Common examples include rubber, PVC, glass, mica, and dry air. Insulators are essential wherever conductors must be kept safely separated from each other or from earth, cable sheathing being the most obvious shipboard example.</p>
  <p class="n-p"><strong>No insulator is perfect.</strong> Every insulating material has a very high but finite resistance, and a small leakage current always exists, which is precisely why insulation resistance is measured in megohms rather than treated as infinite, and why insulation gradually degrades with age, heat, moisture and contamination, the entire basis for the insulation testing programme covered in F02.</p>


  <!-- RESISTANCE VS RESISTIVITY -->
  <div class="n-h1" id="s-resistivity">Resistance vs Resistivity</div>
  <p class="n-p"><strong>Resistance</strong> is a property of a specific object, a particular piece of wire or component, and depends on its length, cross-sectional area, material and temperature. <strong>Resistivity</strong> is a property of the material itself, independent of the shape or size of any particular sample, and represents how strongly that material inherently opposes current flow.</p>
  <div class="n-formula">R = ρ × L / A<div class="label">R = resistance (Ω) · ρ = resistivity (Ω·m) · L = length (m) · A = cross-sectional area (m²)</div></div>
  <table class="n-table">
    <tr><th>Material</th><th>Relative Resistivity</th><th>Note</th></tr>
    <tr><td>Silver</td><td class="ok">Lowest</td><td>Best conductor, too costly for general shipboard cabling</td></tr>
    <tr><td>Copper</td><td class="ok">Very low</td><td>The practical shipboard standard</td></tr>
    <tr><td>Aluminium</td><td>Low, but higher than copper</td><td>Lighter and cheaper, used where weight matters, needs a larger cross-section for equivalent resistance</td></tr>
    <tr><td>Nichrome</td><td class="hl">High</td><td>Deliberately high resistivity, used in heating elements</td></tr>
    <tr><td>Rubber, PVC, mica</td><td class="bad">Extremely high</td><td>Insulators, resistivity so high they are treated as effectively non-conducting</td></tr>
  </table>
  <p class="n-p">Two pieces of copper, one short and thick and one long and thin, have the same resistivity since they are the same material, but very different resistance, since resistance also depends on their individual dimensions.</p>


  <!-- CONDUCTIVITY -->
  <div class="n-h1" id="s-conductivity">Conductivity</div>
  <p class="n-p"><strong>Definition:</strong> the reciprocal of resistivity, representing how easily a material allows current to flow, measured in siemens per metre. A high conductivity material has a low resistivity and vice versa; they describe the same underlying property from opposite directions.</p>
  <div class="n-formula">σ = 1 / ρ<div class="label">σ = conductivity (S/m) · ρ = resistivity (Ω·m)</div></div>
  <p class="n-p">Conductance, the reciprocal of resistance for a specific component rather than a material, is measured in siemens and follows the same inverse relationship: G = 1/R. The distinction mirrors resistance versus resistivity, conductance is object-specific, conductivity is material-specific.</p>


  <!-- TEMPERATURE COEFFICIENT -->
  <div class="n-h1" id="s-tempco">Temperature Coefficient of Resistance</div>
  <p class="n-p">Covered in F01 and expanded here in the context of materials generally. The temperature coefficient, α, describes how much a material's resistance changes per degree Celsius of temperature change. Metals have a positive α, resistance rising with heat as atomic vibration increases and impedes electron flow. Semiconductors have a negative α, resistance falling with heat as more charge carriers become available. Certain alloys such as manganin and constantan are deliberately engineered to have a near-zero α, so their resistance remains essentially constant across a working temperature range.</p>
  <div class="n-formula">R<sub>t</sub> = R<sub>0</sub> (1 + α × t)</div>
  <p class="n-p"><strong>Why manganin and constantan matter practically:</strong> precision measuring instruments, shunts and standard resistors need a resistance value that does not drift as the component warms up during use, which is exactly why these near-zero-α alloys are chosen for that specific role rather than ordinary copper.</p>


  <!-- CURRENT CARRYING CAPACITY -->
  <div class="n-h1" id="s-ccc">Current Carrying Capacity</div>
  <p class="n-p"><strong>Definition:</strong> the maximum current a cable or conductor can carry continuously without its temperature rising beyond a safe limit for its insulation. It is not a fixed universal number for a given cable size, since it depends on the conductor's cross-sectional area and material, the insulation type and its maximum rated temperature, the method of installation, how many cables are bundled together, and the ambient temperature at the installation location.</p>
  <p class="n-p"><strong>Why bundling and ambient temperature matter:</strong> a cable's rated current assumes a certain ability to dissipate the I²R heat it generates. Bundling several current-carrying cables tightly together traps heat and reduces each cable's ability to cool, so the safe current rating for cables in a crowded bundle is lower than for a single cable run in free air, and the same cable is rated for less current in a hot engine room than in a cool space, since the ambient temperature reduces the available margin before the insulation's maximum safe temperature is reached.</p>
  <p class="n-p"><strong>Interview relevance:</strong> a candidate who states current carrying capacity as a single number "for a cable size" without acknowledging these dependencies is giving an incomplete answer. The correct framing is that a published current rating always assumes a stated set of installation conditions, and those conditions must be checked against the actual installation before accepting the rating at face value.</p>


  <!-- WORKED NUMERICALS -->
  <div class="n-h1" id="s-numericals">Worked Numericals</div>

  <div class="n-h2">1. Capacitance from Charge and Voltage</div>
  <p class="n-p">A capacitor stores <span class="n-val">600 µC</span> of charge when <span class="n-val">100 V</span> is applied. Find its capacitance.</p>
  <ol class="n-steps"><li>C = Q / V = 600 × 10<sup>-6</sup> / 100 = <span class="n-val">6 µF</span></li></ol>

  <div class="n-h2">2. Resistance from Resistivity</div>
  <p class="n-p">A copper conductor is 50 m long with cross-sectional area 2 × 10<sup>-6</sup> m². Copper resistivity is 1.7 × 10<sup>-8</sup> Ω·m. Find its resistance.</p>
  <ol class="n-steps">
    <li>R = ρL / A = (1.7 × 10<sup>-8</sup> × 50) / (2 × 10<sup>-6</sup>)</li>
    <li>R = (8.5 × 10<sup>-7</sup>) / (2 × 10<sup>-6</sup>) = <span class="n-val">0.425 Ω</span></li>
  </ol>

  <div class="n-h2">3. Conductivity from Resistivity</div>
  <p class="n-p">A material has resistivity 2 × 10<sup>-7</sup> Ω·m. Find its conductivity.</p>
  <ol class="n-steps"><li>σ = 1 / ρ = 1 / (2 × 10<sup>-7</sup>) = <span class="n-val">5 × 10<sup>6</sup> S/m</span></li></ol>

  <div class="n-h2">4. Resistance Change with Temperature</div>
  <p class="n-p">A copper resistor reads <span class="n-val">20 Ω</span> at <span class="n-val">0°C</span>. Find its resistance at 100°C, taking α = 0.004 per °C.</p>
  <ol class="n-steps">
    <li>R<sub>100</sub> = 20 × (1 + 0.004 × 100) = 20 × 1.4 = <span class="n-val">28 Ω</span></li>
  </ol>


  <!-- VIVA -->
  <div class="n-h1" id="s-viva">Viva and Interview Questions</div>
  <table class="n-table">
    <tr><th>Question</th><th>Model Answer</th></tr>
    <tr><td>What does a resistor do?</td><td>Introduces a known resistance, opposing current and dissipating energy as heat, obeying V = IR.</td></tr>
    <tr><td>How does a capacitor behave on DC versus AC?</td><td>On DC it charges up then blocks current, acting as an open circuit once charged. On AC it continuously charges and discharges, effectively passing the alternating current while presenting capacitive reactance.</td></tr>
    <tr><td>How does an inductor behave on DC versus AC?</td><td>On steady DC it behaves as a plain conductor with only wire resistance. On AC it opposes the changing current with inductive reactance, which rises with frequency.</td></tr>
    <tr><td>Why do motors draw a large inrush current at starting?</td><td>Motor windings are inductive, and inductance opposes any sudden change in current, so the current surges before settling as the motor comes up to speed.</td></tr>
    <tr><td>What makes a good conductor at the atomic level?</td><td>A large number of free electrons, loosely held and able to drift under an applied field, as in the metallic bonding of metals like copper and silver.</td></tr>
    <tr><td>What distinguishes a semiconductor from a conductor or insulator?</td><td>Its conductivity lies between the two and can be deliberately controlled by temperature, light or doping, which is what makes diodes and transistors possible.</td></tr>
    <tr><td>Why is no insulator perfect?</td><td>Every insulator has a very high but finite resistance, so a small leakage current always exists, which is why insulation resistance is measured in megohms rather than assumed infinite.</td></tr>
    <tr><td>Difference between resistance and resistivity?</td><td>Resistance belongs to a specific object and depends on its dimensions. Resistivity is a property of the material itself, independent of size or shape.</td></tr>
    <tr><td>What is conductivity?</td><td>The reciprocal of resistivity, describing how easily a material conducts, measured in siemens per metre.</td></tr>
    <tr><td>Why are manganin and constantan used in precision instruments?</td><td>Their temperature coefficient of resistance is near zero, so their resistance stays essentially constant as they warm during use, unlike copper.</td></tr>
    <tr><td>Is current carrying capacity a fixed number for a given cable size?</td><td>No. It depends on conductor material and size, insulation type, installation method, cable bundling, and ambient temperature, all of which must be checked against the stated rating conditions.</td></tr>
    <tr><td>Why does bundling cables together reduce their safe current rating?</td><td>Bundled cables trap each other's I²R heat and cannot dissipate it as effectively as a single cable in free air, so the safe current for each cable in the bundle is lower.</td></tr>
  </table>


  <!-- QUICK REVISION -->
  <div class="n-h1" id="s-quickrev">Quick Revision</div>
  <table class="n-table">
    <tr><th>Concept</th><th>One Line</th></tr>
    <tr><td>Resistor</td><td>Opposes current, dissipates heat, obeys V = IR.</td></tr>
    <tr><td>Capacitor</td><td>Stores charge in an electric field. Blocks DC once charged, passes AC via capacitive reactance.</td></tr>
    <tr><td>Inductor</td><td>Stores energy in a magnetic field. Plain conductor on steady DC, opposes changing current via inductive reactance.</td></tr>
    <tr><td>Conductors</td><td>Many free electrons. Copper is the shipboard standard.</td></tr>
    <tr><td>Semiconductors</td><td>Controllable conductivity via doping, temperature, light. Negative α.</td></tr>
    <tr><td>Insulators</td><td>Very high but finite resistance. No insulator is perfect.</td></tr>
    <tr><td>Resistance vs resistivity</td><td>Resistance is object-specific. Resistivity is material-specific.</td></tr>
    <tr><td>Conductivity</td><td>Reciprocal of resistivity, siemens per metre.</td></tr>
    <tr><td>Temperature coefficient</td><td>Positive for metals, negative for semiconductors, near zero for manganin/constantan.</td></tr>
    <tr><td>Current carrying capacity</td><td>Not fixed. Depends on material, insulation, bundling, and ambient temperature.</td></tr>
  </table>


  <!-- SUMMARY -->
  <div class="n-h1" id="s-summary">Module Summary</div>
  <p class="n-p">You should now be able to describe resistor, capacitor and inductor behaviour on DC and AC, classify materials as conductors, semiconductors or insulators, distinguish resistance from resistivity and describe conductivity, apply temperature coefficient reasoning to metals, semiconductors and precision alloys, and explain why current carrying capacity depends on real installation conditions rather than being a single fixed number.</p>
  <table class="n-table">
    <tr><th>Estimated Study Time</th><th>Quiz Difficulty</th><th>Next Module</th></tr>
    <tr><td>50-65 minutes</td><td>★★★☆☆</td><td>F04, Electrical Power</td></tr>
  </table>

  <div style="margin-top:20px; text-align:center;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F03')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:10px 24px;font-size:14px;">Take the F03 Quiz →</button>
  </div>


  </div>
</div>
</div>`);

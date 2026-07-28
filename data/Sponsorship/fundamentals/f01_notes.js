window.loadNotes("F01", `<div class="view" id="view-notes-f01">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F01')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F01 - Basic Electrical Fundamentals</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 1 of 25</div>
    <div class="tags">
      <span class="tag tag-blue">Module 01 / 25</span>
      <span class="tag tag-orange">Difficulty ★★☆☆☆</span>
      <span class="tag tag-purple">Study Time 45-60 min</span>
    </div>
  </div>

  <table class="n-table">
    <tr><th>Topics Covered</th><th>Interview Frequency</th><th>Prerequisite</th></tr>
    <tr><td>Charge, Current, Voltage, Resistance, Ohm's Law, Series/Parallel, KCL, KVL, Power, Energy, AC/DC, Frequency, Phase, RMS, Power Factor</td><td class="bad">Asked in nearly every interview</td><td>None. This is the starting module.</td></tr>
  </table>

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


  <!-- ═══════════════════════════════════════════════════════════
       LEARNING OBJECTIVES
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-objectives">🎯 Learning Objectives</div>
  <div class="n-info"><div class="icon">📋</div><div class="body"><strong>By the end of this module you will be able to:</strong>
    <ul class="n-list">
      <li>Define charge, current, voltage and resistance to the standard, and state Ohm's Law with its condition</li>
      <li>Explain the difference between EMF and potential difference, and between conventional current and electron flow</li>
      <li>Analyse series and parallel circuits, and apply Kirchhoff's Current and Voltage Laws</li>
      <li>Distinguish power from energy, and explain why I²R governs cable and transmission design</li>
      <li>Compare AC and DC, and justify why ships use AC as the main supply with DC for critical backup</li>
      <li>Work with frequency, phase angle, RMS/peak/average values and power factor at an introductory level</li>
      <li>Solve basic numericals using these relationships without hesitation</li>
    </ul>
  </div></div>

  <div class="n-h2">Why This Matters</div>
  <ul class="n-list">
    <li><strong>It is the opening filter.</strong> Nearly every sponsorship interview starts with a basic question from this module.</li>
    <li><strong>It tests understanding, not memory.</strong> Panels probe with a follow-up "why?" A candidate who only memorised the formula stalls here.</li>
    <li><strong>It sets the tone for the rest of the interview.</strong> A confident, precise answer on fundamentals earns credibility that carries into harder topics.</li>
  </ul>
  <div class="n-ok"><div class="icon">⭐</div><div class="body"><strong>Remember This</strong><br>Voltage is the push. Current is the flow. Resistance opposes the flow. Every concept in this module is a variation on these three ideas.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       ELECTRIC CHARGE
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-charge">⚛️ Electric Charge</div>

  <div class="n-h2">Definition</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">Electric charge is a fundamental property of matter that causes it to experience a force in an electric field. It exists as positive charge (protons) and negative charge (electrons). SI unit: <strong>coulomb (C)</strong>.</div></div>

  <div class="n-h2">Why It Matters</div>
  <ul class="n-list">
    <li>It is the base quantity. Current, voltage and power are all defined in terms of charge.</li>
    <li>Understanding that charge is quantised (comes in fixed, discrete units) is a common conceptual check.</li>
    <li>It sets up conservation of charge, which underlies Kirchhoff's Current Law later in this module.</li>
  </ul>

  <div class="n-grid">
    <div class="n-card"><div class="card-title">CHARGE OF ONE ELECTRON</div><div class="card-val">1.6 × 10<sup>-19</sup> C</div><div class="card-desc">Negative. The smallest unit of free charge, so charge is quantised.</div></div>
    <div class="n-card"><div class="card-title">ELECTRONS IN ONE COULOMB</div><div class="card-val">6.24 × 10<sup>18</sup></div><div class="card-desc">Roughly six billion billion electrons.</div></div>
  </div>
  <div class="n-formula">Q = I × t<div class="label">Q = charge (C) · I = current (A) · t = time (s)</div></div>

  <div class="n-h2">⚓ Shipboard Application</div>
  <div class="n-ok"><div class="icon">⚓</div><div class="body">Battery capacity is rated in amp-hours (Ah), a direct application of Q = I × t. A 200 Ah battery can theoretically supply 200 A for one hour, or 20 A for ten hours, before it is discharged.</div></div>

  <div class="n-h2">Interview Answer (30-second version)</div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body">"Charge is a basic property of matter, measured in coulombs. Electrons carry negative charge, protons carry positive. When free electrons move through a conductor, that movement is what we call current."</div></div>

  <div class="n-h2">💡 Easy Analogy</div>
  <p class="n-p">Charge is the water itself in a pipe. Current is how fast that water moves. You cannot have flow without something to flow.</p>


  <!-- ═══════════════════════════════════════════════════════════
       ELECTRIC CURRENT
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-current">🌊 Electric Current</div>

  <div class="n-h2">Definition</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">The rate of flow of electric charge through a conductor. SI unit: <strong>ampere (A)</strong>. One ampere equals one coulomb per second.</div></div>
  <div class="n-formula">I = Q / t<div class="label">I = current (A) · Q = charge (C) · t = time (s)</div></div>

  <div class="n-h2">💡 Easy Analogy</div>
  <p class="n-p">Current is the flow rate in a pipe, litres per second. A larger flow needs a thicker pipe, exactly why a 100 A circuit needs a much thicker cable than a 5 A circuit.</p>

  <div class="n-h2">Conventional Current vs Electron Flow</div>
  <div class="n-warn"><div class="icon">❌</div><div class="body"><strong>Interview Trap</strong><br><strong>Question:</strong> "Which direction does current actually flow?"<br><strong>Wrong answer:</strong> "From negative to positive" (stated without qualification, or stated as the only answer).<br><strong>Correct answer:</strong> Conventional current, used in every diagram and formula, flows positive to negative. Electrons physically flow negative to positive. The convention predates the discovery of the electron and was kept because the mathematics is identical either way.</div></div>
  <table class="n-table">
    <tr><th></th><th>Conventional Current</th><th>Electron Flow</th></tr>
    <tr><td>Direction</td><td class="hl">Positive to negative</td><td class="hl">Negative to positive</td></tr>
    <tr><td>What actually moves</td><td>Nothing physical, a convention</td><td class="ok">Real electrons</td></tr>
    <tr><td>Used in</td><td class="ok">All diagrams, formulas, industry practice</td><td>Physics explanations only</td></tr>
  </table>

  <div class="n-h2">⚓ Shipboard Application</div>
  <table class="n-table">
    <tr><th>Load</th><th>Typical Current</th></tr>
    <tr><td>Pump motors</td><td><span class="n-val">20-150 A</span></td></tr>
    <tr><td>Steering gear motor</td><td><span class="n-val">30-100 A</span></td></tr>
    <tr><td>Bow thruster</td><td><span class="n-val">100-500 A</span></td></tr>
    <tr><td>Emergency generator (rated)</td><td><span class="n-val">Depends on kVA rating</span></td></tr>
    <tr><td>Battery charging circuit</td><td><span class="n-val">5-40 A</span></td></tr>
  </table>

  <div class="n-h2">⚠️ Common Mistakes</div>
  <ul class="n-list">
    <li>Stating electron flow direction as the "correct" one and dismissing conventional current as wrong. Both exist for different purposes.</li>
    <li>Forgetting that current requires a closed loop. An open circuit carries zero current even with full voltage present.</li>
  </ul>

  <div class="n-h2">Interview Answer (30-second version)</div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body">"Conventional current flows from positive to negative, and that is what we use in all diagrams and calculations. Physically it is electrons that move, negative to positive. The convention was fixed before the electron was discovered and kept because the maths works out the same."</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>It is current, not voltage, that injures.</strong> A current far too small to light a bulb properly, around 50-100 mA, is enough to stop a human heart. Voltage only drives that current through the body. Covered fully in the Electrical Safety module (F02).</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       VOLTAGE
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-voltage">⚡ Voltage, Potential Difference and EMF</div>

  <div class="n-h2">Definition</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">Voltage, also called potential difference, is the work done in moving a unit charge from one point to another in an electric field. SI unit: <strong>volt (V)</strong>. One volt equals one joule per coulomb.</div></div>
  <div class="n-formula">V = W / Q<div class="label">V = voltage (V) · W = work or energy (J) · Q = charge (C)</div></div>

  <div class="n-h2">💡 Easy Analogy</div>
  <p class="n-p">Voltage is pressure, like the height of a water tank on a tower. The higher the tank, the harder the water is pushed out. The key word is <em>difference</em>: current only flows if there is a voltage difference between two points, just as water only flows if there is a height difference.</p>

  <div class="n-warn"><div class="icon">❌</div><div class="body"><strong>Interview Trap</strong><br><strong>Question:</strong> "Does voltage kill?"<br><strong>Wrong answer:</strong> "Yes."<br><strong>Correct answer:</strong> Voltage drives current. Current passing through the body causes injury. Voltage only creates the potential for current to flow; without a completed circuit through the body, no current flows and there is no injury.</div></div>

  <div class="n-warn"><div class="icon">❌</div><div class="body"><strong>Interview Trap</strong><br><strong>Question:</strong> "Why does a bird sitting on a live high voltage line not get electrocuted?"<br><strong>Wrong answer:</strong> "Because birds are immune to electricity" or "because the wire is insulated."<br><strong>Correct answer:</strong> Both feet are at the same potential, so there is no potential <em>difference</em> across the bird and no current flows through it. Touching a second wire at a different potential, or an earthed pole, creates a difference and current would flow.</div></div>

  <div class="n-h2">EMF vs Potential Difference</div>
  <table class="n-table">
    <tr><th>Aspect</th><th>EMF (Electromotive Force)</th><th>Potential Difference (PD)</th></tr>
    <tr><td>Meaning</td><td>Energy supplied per coulomb by the source</td><td>Energy used per coulomb by the load</td></tr>
    <tr><td>Where measured</td><td class="ok">Across the source: battery, generator, alternator</td><td class="hl">Across the load: lamp, motor, resistor</td></tr>
    <tr><td>Condition</td><td>Open circuit, no load</td><td>Load connected, current flowing</td></tr>
    <tr><td>Symbol / Unit</td><td>E, volt</td><td>V, volt</td></tr>
  </table>
  <div class="n-formula">V = E - (I × r)<div class="label">V = terminal voltage · E = EMF · I = current · r = internal resistance of the source</div></div>

  <div class="n-h2">⚓ Shipboard Application</div>
  <div class="n-ok"><div class="icon">⚓</div><div class="body">A starter battery reads 12 V on open circuit but sags to around 10-11 V while cranking a large engine. The EMF has not changed; the terminal voltage has dropped because current is now flowing through the battery's internal resistance. Heavily loaded, weak, or aged batteries show a larger sag, which is a standard health check.</div></div>

  <div class="n-h2">Interview Answer (30-second version)</div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body">"EMF is the voltage a source produces on open circuit, the energy it gives per coulomb. Potential difference is the voltage measured across a load when current is actually flowing. The difference between the two is the drop across the source's own internal resistance."</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       RESISTANCE
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-resistance">🚧 Resistance</div>

  <div class="n-h2">Definition</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">Resistance is the property of a material that opposes the flow of electric current. SI unit: <strong>ohm (Ω)</strong>. A conductor has one ohm of resistance when one volt across it produces one ampere of current.</div></div>

  <div class="n-h2">💡 Easy Analogy</div>
  <p class="n-p">Resistance is how narrow and rough the pipe is. A wide, smooth pipe lets water through easily (low resistance). A narrow, rusty, kinked pipe fights the flow (high resistance).</p>

  <div class="n-h2">Concept Explanation</div>
  <p class="n-p">Free electrons in a conductor do not travel in a straight line. They constantly collide with the vibrating metal atoms in their path, and each collision converts a small amount of electrical energy into heat. Resistance is the measure of how much a material obstructs this flow, and heat is the direct evidence of it.</p>

  <div class="n-h2">The Four Factors Affecting Resistance</div>
  <div class="n-formula">R = ρ × L / A<div class="label">R = resistance (Ω) · ρ = resistivity (Ω·m) · L = length (m) · A = cross-sectional area (m²)</div></div>
  <table class="n-table">
    <tr><th>Factor</th><th>Relationship</th><th>Practical Meaning</th></tr>
    <tr><td><strong>Length (L)</strong></td><td class="hl">Directly proportional</td><td>Double the cable length, double the resistance. Root cause of voltage drop on long runs.</td></tr>
    <tr><td><strong>Area (A)</strong></td><td class="hl">Inversely proportional</td><td>Double the cross-section, halve the resistance. Why heavy loads need thick cables.</td></tr>
    <tr><td><strong>Material (ρ)</strong></td><td class="hl">Lower ρ, lower R</td><td>Silver best, then copper, then aluminium. Copper is the practical shipboard choice.</td></tr>
    <tr><td><strong>Temperature</strong></td><td class="hl">R rises with temperature for metals</td><td>A hot motor winding reads higher resistance than a cold one.</td></tr>
  </table>

  <div class="n-h2">⚠️ Common Mistakes</div>
  <ul class="n-list">
    <li>Confusing resistance with resistivity. Resistance depends on the actual piece of wire and its dimensions. Resistivity is a property of the material alone, independent of size or shape.</li>
    <li>Assuming resistance is fixed regardless of temperature. For metals it is not.</li>
  </ul>

  <div class="n-h2">Temperature Coefficient of Resistance</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">The change in resistance per ohm per degree Celsius rise in temperature. Symbol: α (alpha).</div></div>
  <div class="n-formula">R<sub>t</sub> = R<sub>0</sub> (1 + α × t)<div class="label">R<sub>t</sub> = resistance at t°C · R<sub>0</sub> = resistance at 0°C · α = temperature coefficient</div></div>
  <div class="n-grid-3">
    <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">METALS</div><div class="card-val">Positive α</div><div class="card-desc">Resistance rises with temperature. Copper α ≈ 0.004 per °C.</div></div>
    <div class="n-card" style="border-color:rgba(6,182,212,.3)"><div class="card-title" style="color:var(--cyan)">SEMICONDUCTORS</div><div class="card-val">Negative α</div><div class="card-desc">Resistance falls with temperature. Basis of the thermistor.</div></div>
    <div class="n-card"><div class="card-title">ALLOYS (MANGANIN)</div><div class="card-val">Near-zero α</div><div class="card-desc">Resistance nearly constant. Used for shunts in precision meters.</div></div>
  </div>

  <div class="n-h2">⚓ Shipboard Application</div>
  <div class="n-ok"><div class="icon">⚓</div><div class="body">Winding resistance rises as copper heats up, so readings taken cold and hot will not match. Insulation resistance readings must always be logged with the winding temperature; comparing readings at different temperatures without correction produces a false trend.</div></div>

  <div class="n-h2">Memory Trick</div>
  <div class="n-ok"><div class="icon">🧠</div><div class="body">Metals: hotter means harder to push through (higher R). Semiconductors: hotter means more carriers available (lower R). Opposite behaviour, opposite sign of α.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       OHM'S LAW
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ohm">📐 Ohm's Law</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">The single most asked question in any electrical interview. State the law properly, including its condition, not just the formula.</div></div>

  <div class="n-h2">Definition</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">The current flowing through a conductor is directly proportional to the potential difference across it, provided the physical conditions such as temperature remain constant.</div></div>
  <div class="n-formula">V = I × R<div class="label">Also written I = V / R and R = V / I</div></div>

  <div class="n-warn"><div class="icon">❌</div><div class="body"><strong>Interview Trap</strong><br><strong>Question:</strong> "State Ohm's Law."<br><strong>Wrong answer:</strong> "V equals IR" (formula only, no condition stated).<br><strong>Correct answer:</strong> State the proportionality and explicitly add "provided temperature and other physical conditions remain constant." Leaving out the condition invites an immediate follow-up that catches most candidates off guard.</div></div>

  <div class="n-h2">💡 Easy Analogy</div>
  <p class="n-p">Push harder on the water, more flows. Narrow the pipe, less flows. More voltage gives more current. More resistance gives less current.</p>

  <div class="n-h2">Ohmic and Non-Ohmic Conductors</div>
  <table class="n-table">
    <tr><th>Type</th><th>Behaviour</th><th>Examples</th></tr>
    <tr><td><strong>Ohmic</strong></td><td class="ok">Obeys Ohm's Law. V-I graph is a straight line through the origin.</td><td>Copper, most metals, standard resistors</td></tr>
    <tr><td><strong>Non-ohmic</strong></td><td class="bad">Does not obey Ohm's Law. V-I graph is curved.</td><td>Diode, transistor, filament lamp, thermistor, electrolytes</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body">A filament lamp is non-ohmic because as current rises, the filament heats dramatically and its resistance changes, bending the graph. If asked for a clean example of a non-ohmic device, a diode is the safest answer.</div></div>

  <div class="n-h2">Interview Answer (30-second version)</div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body">"Ohm's Law states that current through a conductor is directly proportional to the voltage across it, provided temperature and physical conditions stay constant. So V equals I times R. It applies to ohmic conductors like copper, but not to devices like diodes where resistance is not constant."</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SERIES AND PARALLEL
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-series-parallel">🔗 Series and Parallel Circuits</div>

  <div class="n-h2">💡 Easy Analogy</div>
  <p class="n-p">Series is a single lane road: every car passes every point, so one stoppage blocks everyone. Parallel is a multi-lane highway: each lane is independent, so one blocked lane does not stop the others.</p>

  <div class="n-h2">Series Circuit</div>
  <ul class="n-list">
    <li><strong>Current is the same</strong> through every component. One path, so what goes in must come out.</li>
    <li><strong>Voltage divides</strong> across the components in proportion to their resistance.</li>
    <li><strong>Total resistance adds:</strong> R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub></li>
    <li>If one component fails open, the whole circuit dies.</li>
  </ul>

  <div class="n-h2">Parallel Circuit</div>
  <ul class="n-list">
    <li><strong>Voltage is the same</strong> across every branch.</li>
    <li><strong>Current divides</strong> between branches, inversely proportional to their resistance.</li>
    <li><strong>Total resistance:</strong> 1/R<sub>total</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + 1/R<sub>3</sub>, always less than the smallest branch.</li>
    <li>If one branch fails, the others keep working.</li>
  </ul>
  <div class="n-formula">Two resistors in parallel: R = (R<sub>1</sub> × R<sub>2</sub>) / (R<sub>1</sub> + R<sub>2</sub>)<div class="label">Product over sum shortcut, valid only for exactly two resistors</div></div>

  <table class="n-table">
    <tr><th>Property</th><th>Series</th><th>Parallel</th></tr>
    <tr><td>Current</td><td class="ok">Same everywhere</td><td class="hl">Divides between branches</td></tr>
    <tr><td>Voltage</td><td class="hl">Divides across components</td><td class="ok">Same across all branches</td></tr>
    <tr><td>Total resistance</td><td>Sum of all, increases</td><td>Less than the smallest, decreases</td></tr>
    <tr><td>One component fails open</td><td class="bad">Entire circuit stops</td><td class="ok">Other branches keep working</td></tr>
    <tr><td>Practical use</td><td>Fuses, switches, ammeters</td><td>All ship distribution, lighting, sockets</td></tr>
  </table>

  <div class="n-h2">⚓ Shipboard Application</div>
  <div class="n-ok"><div class="icon">⚓</div><div class="body">All ship distribution is parallel. Every cabin light, socket and small motor is wired in parallel from the switchboard so each gets full rated voltage, each can be switched independently, and one blown lamp does not take down the circuit.</div></div>

  <div class="n-h2">Interview Answer (30-second version)</div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body">"Ship and house wiring is parallel. Every load gets the full rated voltage, each can be switched independently, and one failed load does not kill the rest of the circuit. Old fairy lights wired in series are the classic counter-example, where one blown bulb killed the entire string."</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       KIRCHHOFF'S CURRENT LAW
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-kcl">🔀 Kirchhoff's Current Law (KCL)</div>

  <div class="n-h2">Definition</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">At any junction or node in a circuit, the algebraic sum of all currents is zero. Total current entering a junction equals total current leaving it.</div></div>
  <div class="n-formula">Σ I<sub>in</sub> = Σ I<sub>out</sub><div class="label">Also written Σ I = 0 at any node</div></div>

  <div class="n-h2">💡 Easy Analogy</div>
  <p class="n-p">A water pipe junction. If 10 litres per second flows in, exactly 10 litres per second must flow out, however the branches divide it. KCL is conservation of charge stated for circuits.</p>

  <div class="n-h2">Worked Numerical</div>
  <ol class="n-steps">
    <li>Three cables meet at a busbar. Two carry current in: 30 A and 45 A. One carries current away.</li>
    <li>By KCL: outgoing current = 30 + 45 = <span class="n-val">75 A</span></li>
    <li>Used directly when sizing a busbar or checking a distribution panel.</li>
  </ol>

  <div class="n-h2">Interview Answer (30-second version)</div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body">"Kirchhoff's Current Law says the sum of currents entering a node equals the sum leaving it. It is based on conservation of charge, since charge cannot accumulate at a junction."</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       KIRCHHOFF'S VOLTAGE LAW
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-kvl">🔁 Kirchhoff's Voltage Law (KVL)</div>

  <div class="n-h2">Definition</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">In any closed loop of a circuit, the algebraic sum of all EMFs and all voltage drops is zero. Total voltage supplied equals total voltage dropped around that loop.</div></div>
  <div class="n-formula">Σ E = Σ (I × R)<div class="label">Sum of EMFs equals sum of IR drops around any closed loop</div></div>

  <div class="n-h2">💡 Easy Analogy</div>
  <p class="n-p">Walking around a hill and returning to your starting point: whatever you climbed, you descended by exactly the same amount. Net height change is zero. KVL is conservation of energy stated for circuits.</p>

  <div class="n-h2">Worked Numerical</div>
  <ol class="n-steps">
    <li>A 24 V battery supplies two resistors in series. First resistor drops 10 V.</li>
    <li>Second resistor must drop: 24 - 10 = <span class="n-val">14 V</span></li>
    <li>The drops must always add up to the supply.</li>
  </ol>

  <div class="n-h2">⚓ Shipboard Application (Fault-Finding)</div>
  <div class="n-ok"><div class="icon">⚓</div><div class="body">If a measured supply is 24 V but the measured drops across the components only total 20 V, the missing 4 V is being lost somewhere unaccounted for, almost always a loose terminal, a corroded joint, or damaged cable. KVL is a standard fault-finding tool for locating bad connections.</div></div>

  <div class="n-h2">Interview Answer (30-second version)</div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body">"Kirchhoff's Voltage Law says that around any closed loop, the sum of EMFs equals the sum of voltage drops. It comes from conservation of energy. I also use it practically: if the measured drops do not add up to the supply, the missing voltage points to a bad connection."</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       ELECTRICAL POWER
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-power">💪 Electrical Power</div>

  <div class="n-h2">Definition</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">The rate at which electrical energy is converted into another form, or the rate at which work is done. SI unit: <strong>watt (W)</strong>. One watt equals one joule per second.</div></div>
  <div class="n-formula">P = V × I&nbsp;&nbsp;&nbsp;&nbsp;P = I² × R&nbsp;&nbsp;&nbsp;&nbsp;P = V² / R<div class="label">Three forms of the same relationship; use whichever matches the given quantities</div></div>

  <div class="n-h2">💡 Easy Analogy</div>
  <p class="n-p">Power is how much work the water is doing per second. High pressure with low flow, or low pressure with high flow, can do equal work. It is the combination that matters, exactly why power is voltage multiplied by current.</p>

  <div class="n-h2">Why interviewers ask about I²R</div>
  <ul class="n-list">
    <li>Tests whether you understand power loss, not just power delivery.</li>
    <li>Explains why power is transmitted at high voltage.</li>
    <li>Leads directly into questions about cable sizing and hot terminals.</li>
    <li>Builds confidence in the panel that you think in terms of consequences, not just formulas.</li>
  </ul>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">Because power loss depends on current <em>squared</em>, doubling the current does not double the heat, it quadruples it. This single fact explains high-voltage transmission, current-based cable sizing, and why a loose connection burns out.</div></div>
  <table class="n-table">
    <tr><th>If current becomes</th><th>Heat loss becomes</th><th>Consequence</th></tr>
    <tr><td>2 times</td><td class="bad">4 times</td><td>Cable temperature rises sharply</td></tr>
    <tr><td>3 times</td><td class="bad">9 times</td><td>Insulation damage likely</td></tr>
    <tr><td>Half</td><td class="ok">One quarter</td><td>Much cooler running, better efficiency</td></tr>
  </table>

  <div class="n-h2">⚓ Shipboard Application</div>
  <div class="n-ok"><div class="icon">⚓</div><div class="body">A loose terminal has high contact resistance. Current through it is unchanged, but with R increased, I²R heat at that one point rises sharply. That is why loose terminals glow, discolour, and eventually fail, while the rest of the cable stays cool. Thermal imaging surveys exist precisely to find these hot spots.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       ENERGY
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-energy">🔋 Electrical Energy</div>

  <div class="n-h2">Definition</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">The total work done by an electric current over a period of time. SI unit: <strong>joule (J)</strong>; commercial unit: <strong>kilowatt hour (kWh)</strong>.</div></div>
  <div class="n-formula">E = P × t<div class="label">1 kWh = 1000 W running for 1 hour = 3.6 × 10<sup>6</sup> joules</div></div>

  <div class="n-h2">⭐ Remember This</div>
  <div class="n-ok"><div class="icon">⭐</div><div class="body">Power is the rate. Energy is the total amount. A 2 kW heater has a fixed power, but left running for 5 hours it has consumed 10 kWh of energy. Power is instant, energy accumulates over time.</div></div>

  <div class="n-warn"><div class="icon">❌</div><div class="body"><strong>Interview Trap</strong><br><strong>Question:</strong> "What is the difference between a wattmeter and an energy meter?"<br><strong>Wrong answer:</strong> "They measure the same thing."<br><strong>Correct answer:</strong> A wattmeter reads instantaneous power, what is being consumed right now. An energy meter accumulates that power over time and reads total energy in kWh, which is what you are billed for. Same relationship as a speedometer versus an odometer.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       AC AND DC
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-acdc">〰️ AC and DC</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title">DIRECT CURRENT (DC)</div><div class="card-val">One direction</div><div class="card-desc">Current flows steadily in one direction, magnitude essentially constant. Produced by batteries, DC generators, rectifiers.</div></div>
    <div class="n-card" style="border-color:rgba(168,85,247,.3)"><div class="card-title">ALTERNATING CURRENT (AC)</div><div class="card-val">Reverses periodically</div><div class="card-desc">Current periodically reverses direction, magnitude varies as a sine wave. Produced by alternators.</div></div>
  </div>

  <div class="n-h2">💡 Easy Analogy</div>
  <p class="n-p">DC is a river, always flowing one way. AC is a tide, flowing in then out, fifty times a second on a 50 Hz system.</p>

  <div class="n-h2">Why AC Exists Naturally</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">When a coil rotates inside a magnetic field, the direction in which the conductors cut the flux reverses every half revolution, so the induced EMF naturally alternates. AC is the natural output of a rotating machine; producing DC requires extra hardware, either a commutator or a rectifier, to force the output into one direction.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       AC VS DC COMPARISON
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-acdc-diff">⚖️ AC vs DC: Full Comparison</div>
  <table class="n-table">
    <tr><th>Aspect</th><th>AC</th><th>DC</th></tr>
    <tr><td>Direction</td><td>Reverses periodically</td><td>Constant, one direction</td></tr>
    <tr><td>Waveform</td><td>Sinusoidal normally</td><td>Straight line</td></tr>
    <tr><td>Frequency</td><td>50 Hz or 60 Hz</td><td class="hl">Zero</td></tr>
    <tr><td>Generated by</td><td>Alternator</td><td>Battery, DC generator, rectifier</td></tr>
    <tr><td>Voltage transformation</td><td class="ok">Easy, via transformer</td><td class="bad">Difficult, needs electronic converters</td></tr>
    <tr><td>Transmission over distance</td><td class="ok">Efficient at high voltage</td><td class="bad">Higher losses at usable voltages</td></tr>
    <tr><td>Can be stored</td><td class="bad">No, not directly</td><td class="ok">Yes, in batteries</td></tr>
    <tr><td>Switching and breaking</td><td class="ok">Easier, current passes through zero</td><td class="bad">Harder, arc does not self-extinguish</td></tr>
    <tr><td>Shipboard use</td><td>Main supply, motors, lighting, distribution</td><td>Emergency batteries, UPS, electronics, control, starting</td></tr>
  </table>

  <div class="n-h2">⚓ Shipboard Application</div>
  <div class="n-ok"><div class="icon">⚓</div><div class="body"><strong>Why ships use AC as the main supply:</strong> voltage steps up/down easily with a transformer; alternator generation is simpler, no commutator or brushes to maintain; AC induction motors are rugged, cheap, low-maintenance; breaking AC fault current is easier since it passes through zero twice per cycle, assisting arc extinction.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why DC is still essential on board:</strong> batteries are inherently DC, so all emergency power, UPS supplies, starting systems, alarm and control circuits, and all electronics run on DC. A ship is AC distribution with critical DC backup, not a purely AC system.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       FREQUENCY AND TIME PERIOD
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-frequency">🔁 Frequency and Time Period</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Frequency:</strong> the number of complete cycles of an alternating quantity per second. Unit: <strong>hertz (Hz)</strong>.<br><strong>Time period:</strong> the time to complete one full cycle. Unit: <strong>second (s)</strong>.</div></div>
  <div class="n-formula">f = 1 / T&nbsp;&nbsp;&nbsp;&nbsp;T = 1 / f<div class="label">f = frequency (Hz) · T = time period (s)</div></div>
  <table class="n-table">
    <tr><th>System</th><th>Frequency</th><th>Time Period</th><th>Used In</th></tr>
    <tr><td>European standard</td><td><span class="n-val">50 Hz</span></td><td><span class="n-val">20 ms</span></td><td>India, UK, most of the world, most ships</td></tr>
    <tr><td>American standard</td><td><span class="n-val">60 Hz</span></td><td><span class="n-val">16.67 ms</span></td><td>USA, some vessels and offshore units</td></tr>
  </table>
  <div class="n-formula">f = (P × N) / 120<div class="label">f = frequency (Hz) · P = number of poles · N = speed (RPM)</div></div>

  <div class="n-h2">⚓ Shipboard Application</div>
  <div class="n-ok"><div class="icon">⚓</div><div class="body">Motor speed is directly tied to supply frequency. If frequency drifts, every motor on board changes speed, pumps deliver the wrong flow, and timing-based equipment misbehaves. This is why the generator governor holds engine speed tightly, since frequency is effectively the speed reference for the whole vessel.</div></div>

  <div class="n-h2">Interview Answer (30-second version)</div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body">"Frequency is the number of complete cycles per second, measured in hertz. On a 50 Hz system one cycle takes 20 milliseconds. Frequency depends on alternator speed and pole count, f equals P times N over 120, which is why the governor has to hold engine speed steady."</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       PHASE ANGLE
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-phase">📐 Phase and Phase Angle</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">Phase describes the position of an alternating quantity at a given instant within its cycle. Phase angle, in degrees or radians, is the angular difference between two alternating quantities of the same frequency.</div></div>

  <div class="n-h2">💡 Easy Analogy</div>
  <p class="n-p">Two runners on a circular track at the same speed. Starting together, they stay together, in phase, zero degrees. If one starts a quarter lap behind, the gap never closes, 90 degrees out of phase. Same speed, permanent offset, which is the phase angle.</p>

  <table class="n-table">
    <tr><th>Condition</th><th>Phase Angle</th><th>What It Means</th></tr>
    <tr><td>In phase</td><td><span class="n-val">0°</span></td><td>Both waves peak together. Pure resistive load.</td></tr>
    <tr><td>Current lags voltage</td><td><span class="n-val">Up to 90°</span></td><td>Inductive load: motor, transformer</td></tr>
    <tr><td>Current leads voltage</td><td><span class="n-val">Up to 90°</span></td><td>Capacitive load: capacitor bank</td></tr>
    <tr><td>Three-phase supply</td><td><span class="n-val">120° apart</span></td><td>Each phase displaced by 120 degrees</td></tr>
    <tr><td>Completely opposite</td><td class="bad"><span class="n-val">180°</span></td><td>One peaks positive as the other peaks negative</td></tr>
  </table>

  <div class="n-h2">Memory Trick</div>
  <div class="n-ok"><div class="icon">🧠</div><div class="body"><strong>CIVIL.</strong> In a <strong>C</strong>apacitor, <strong>I</strong> before <strong>V</strong>, current leads. In an inductor (<strong>L</strong>), <strong>V</strong> before <strong>I</strong>, voltage leads and current lags. Read it as C-I-V, V-I-L.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       RMS, PEAK AND AVERAGE
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-rms">📊 RMS, Peak and Average Values</div>

  <div class="n-warn"><div class="icon">❌</div><div class="body"><strong>Interview Trap</strong><br><strong>Question:</strong> "Your ship supply is 440 V. Is that the peak value?"<br><strong>Wrong answer:</strong> "Yes."<br><strong>Correct answer:</strong> No, it is the RMS value. The peak is about 622 V. Not knowing this suggests unfamiliarity with what the numbers on your own switchboard actually represent.</div></div>

  <div class="n-h2">Why RMS Exists</div>
  <ul class="n-list">
    <li>An AC voltage is constantly changing, zero at some instants, maximum at others, so a single instantaneous value is meaningless for rating equipment.</li>
    <li>RMS answers a more useful question: what steady DC voltage would produce the same heating effect in a resistor as this AC voltage does?</li>
    <li>That equivalent DC value is the RMS value, and it is what every meter, nameplate and switchboard on your ship is calibrated in.</li>
  </ul>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Definition:</strong> the RMS or root mean square value of an alternating quantity is the steady direct current value which, flowing through a given resistance for a given time, produces the same heat as the AC does in the same resistance over the same time. Also called the effective or virtual value.</div></div>
  <div class="n-formula">V<sub>RMS</sub> = V<sub>peak</sub> / √2 = 0.707 × V<sub>peak</sub><div class="label">And V<sub>peak</sub> = √2 × V<sub>RMS</sub> = 1.414 × V<sub>RMS</sub></div></div>
  <div class="n-formula">V<sub>average</sub> = 0.637 × V<sub>peak</sub><div class="label">Average over one half cycle. Over a full cycle the sine wave average is zero.</div></div>

  <table class="n-table">
    <tr><th>Quantity</th><th>Formula (sine wave)</th><th>For a 440 V system</th></tr>
    <tr><td>RMS value</td><td>0.707 × peak</td><td class="ok"><span class="n-val">440 V</span> (what the meter reads)</td></tr>
    <tr><td>Peak value</td><td>1.414 × RMS</td><td class="hl"><span class="n-val">622 V</span> (what insulation must withstand)</td></tr>
    <tr><td>Peak to peak</td><td>2 × peak</td><td><span class="n-val">1244 V</span></td></tr>
    <tr><td>Average (half cycle)</td><td>0.637 × peak</td><td><span class="n-val">396 V</span></td></tr>
    <tr><td>Form factor</td><td>RMS / average</td><td><span class="n-val">1.11</span></td></tr>
    <tr><td>Peak factor (crest factor)</td><td>Peak / RMS</td><td><span class="n-val">1.414</span></td></tr>
  </table>

  <div class="n-h2">⚓ Shipboard Application</div>
  <div class="n-ok"><div class="icon">⚓</div><div class="body">Insulation experiences the actual instantaneous voltage, not the RMS value. On a 440 V system, insulation is stressed to 622 V twice every cycle. This is why insulation is always rated well above nominal system voltage, and why insulation testing uses elevated DC voltages.</div></div>

  <div class="n-h2">⚠️ Common Mistakes</div>
  <ul class="n-list">
    <li>Assuming the full-cycle average of a sine wave is meaningful. It is always zero, since positive and negative halves cancel; that is why average is always quoted over a half cycle.</li>
    <li>Mixing up the 0.637 (average) and 0.707 (RMS) multipliers.</li>
  </ul>

  <div class="n-h2">Interview Answer (30-second version)</div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body">"All AC values on nameplates and meters are RMS values, the equivalent DC value that produces the same heating effect. For a sine wave, RMS is peak divided by root two. So our 440 V supply actually peaks at around 622 V, which is what the insulation has to withstand."</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       POWER FACTOR
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-pf">📈 Power Factor (Introduction)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">The cosine of the phase angle between voltage and current. Also the ratio of active power to apparent power, indicating how effectively supplied power converts into useful work.</div></div>
  <div class="n-formula">Power Factor = cos φ = Active Power (kW) / Apparent Power (kVA)<div class="label">Always between 0 and 1, no units</div></div>

  <div class="n-h2">💡 Easy Analogy</div>
  <p class="n-p">A glass of beer. The liquid beer is active power (kW), what you actually wanted. The foam is reactive power (kVAR), it takes up space in the glass but cannot be drunk. The full glass, beer plus foam, is apparent power (kVA), the size of glass you paid for. Power factor is the proportion of the glass that is beer.</p>

  <table class="n-table">
    <tr><th>Load Type</th><th>Power Factor</th><th>Current Behaviour</th><th>Example</th></tr>
    <tr><td>Purely resistive</td><td class="ok"><span class="n-val">1.0</span> (unity)</td><td>In phase with voltage</td><td>Heater, filament lamp</td></tr>
    <tr><td>Inductive</td><td class="hl">Lagging, 0.7-0.9</td><td>Current lags voltage</td><td>Motors, transformers, most ship loads</td></tr>
    <tr><td>Capacitive</td><td class="hl">Leading</td><td>Current leads voltage</td><td>Capacitor banks, some electronic loads</td></tr>
  </table>

  <div class="n-h2">⚓ Shipboard Application</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body">For the same useful kW, poor power factor forces the alternator and cables to carry more current, driving up I²R heat, voltage drop, cable sizing, and pushing the alternator toward its kVA limit while delivering less useful kW. This is exactly why alternators are rated in kVA rather than kW: heating depends on current, which depends on kVA.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body">Power factor, the power triangle and PF improvement are covered in full detail in module F04, Electrical Power. Here you need the definition, the formula, and the reason it matters.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       UNITS AND FORMULAE
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-units">📚 Units, Prefixes and Formula Sheet</div>

  <div class="n-h2">Quantities and Their Units</div>
  <table class="n-table">
    <tr><th>Quantity</th><th>Symbol</th><th>Unit</th><th>Unit Symbol</th></tr>
    <tr><td>Charge</td><td>Q</td><td>coulomb</td><td>C</td></tr>
    <tr><td>Current</td><td>I</td><td>ampere</td><td>A</td></tr>
    <tr><td>Voltage / EMF / PD</td><td>V or E</td><td>volt</td><td>V</td></tr>
    <tr><td>Resistance</td><td>R</td><td>ohm</td><td>Ω</td></tr>
    <tr><td>Resistivity</td><td>ρ</td><td>ohm metre</td><td>Ω·m</td></tr>
    <tr><td>Conductance</td><td>G</td><td>siemens</td><td>S</td></tr>
    <tr><td>Power</td><td>P</td><td>watt</td><td>W</td></tr>
    <tr><td>Energy</td><td>E or W</td><td>joule, or kilowatt hour</td><td>J, kWh</td></tr>
    <tr><td>Frequency</td><td>f</td><td>hertz</td><td>Hz</td></tr>
    <tr><td>Time period</td><td>T</td><td>second</td><td>s</td></tr>
    <tr><td>Capacitance</td><td>C</td><td>farad</td><td>F</td></tr>
    <tr><td>Inductance</td><td>L</td><td>henry</td><td>H</td></tr>
    <tr><td>Impedance</td><td>Z</td><td>ohm</td><td>Ω</td></tr>
  </table>

  <div class="n-h2">SI Prefixes</div>
  <table class="n-table">
    <tr><th>Prefix</th><th>Symbol</th><th>Multiplier</th><th>Example</th></tr>
    <tr><td>micro</td><td>µ</td><td>10<sup>-6</sup></td><td>Capacitor value, 470 µF</td></tr>
    <tr><td>milli</td><td>m</td><td>10<sup>-3</sup></td><td>Relay coil current, 20 mA</td></tr>
    <tr><td>kilo</td><td>k</td><td>10<sup>3</sup></td><td>Ship HV supply, 6.6 kV</td></tr>
    <tr><td>mega</td><td>M</td><td>10<sup>6</sup></td><td>Insulation resistance, 100 MΩ</td></tr>
    <tr><td>giga</td><td>G</td><td>10<sup>9</sup></td><td>Very high insulation values</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Watch the case.</strong> Lowercase m means milli, one thousandth. Uppercase M means mega, one million. Confusing mA with MA, or mΩ with MΩ, is a factor of a billion. On an insulation test, 2 MΩ and 2 mΩ are the difference between a healthy machine and a dead short.</div></div>

  <div class="n-h2">Master Formula Sheet</div>
  <table class="n-table">
    <tr><th>Formula</th><th>Finds</th><th>Use When</th></tr>
    <tr><td>Q = I × t</td><td>Charge</td><td>Current and time known</td></tr>
    <tr><td>V = I × R</td><td>Voltage</td><td>Ohm's Law, the workhorse</td></tr>
    <tr><td>I = V / R</td><td>Current</td><td>Voltage and resistance known</td></tr>
    <tr><td>R = V / I</td><td>Resistance</td><td>Voltage and current known</td></tr>
    <tr><td>R = ρL / A</td><td>Resistance from dimensions</td><td>Cable sizing problems</td></tr>
    <tr><td>R<sub>t</sub> = R<sub>0</sub>(1 + αt)</td><td>Resistance at temperature</td><td>Hot vs cold winding</td></tr>
    <tr><td>P = V × I</td><td>Power</td><td>Voltage and current known</td></tr>
    <tr><td>P = I²R</td><td>Power loss</td><td>Heat in a cable or winding</td></tr>
    <tr><td>P = V²/R</td><td>Power</td><td>Voltage and resistance known</td></tr>
    <tr><td>E = P × t</td><td>Energy</td><td>Consumption over time</td></tr>
    <tr><td>f = 1/T</td><td>Frequency</td><td>Time period known</td></tr>
    <tr><td>f = PN/120</td><td>Frequency</td><td>Alternator poles and speed known</td></tr>
    <tr><td>V<sub>RMS</sub> = 0.707 V<sub>peak</sub></td><td>RMS value</td><td>Peak known</td></tr>
    <tr><td>V<sub>peak</sub> = 1.414 V<sub>RMS</sub></td><td>Peak value</td><td>RMS known</td></tr>
    <tr><td>PF = cos φ = kW / kVA</td><td>Power factor</td><td>Phase angle or powers known</td></tr>
  </table>


  <!-- ═══════════════════════════════════════════════════════════
       WORKED NUMERICALS
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-numericals">🧮 Worked Numericals</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>How to handle a calculation in an interview:</strong> state the formula out loud, substitute the numbers clearly, state the unit in your final answer. An answer without a unit is treated as wrong.</div></div>

  <div class="n-h2">Example 1: Ohm's Law</div>
  <p class="n-p"><strong>Question:</strong> A 24 V control circuit has a resistance of 12 Ω. Find the current.</p>
  <ol class="n-steps">
    <li>Formula: I = V / R</li>
    <li>Substitute: I = 24 / 12</li>
    <li>Answer: I = <span class="n-val">2 A</span></li>
  </ol>

  <div class="n-h2">Example 2: Power and Current</div>
  <p class="n-p"><strong>Question:</strong> A 440 V single phase heater is rated 8.8 kW. Find the current it draws and its resistance.</p>
  <ol class="n-steps">
    <li>Current: I = P / V = 8800 / 440 = <span class="n-val">20 A</span></li>
    <li>Resistance: R = V / I = 440 / 20 = <span class="n-val">22 Ω</span></li>
    <li>Check using P = I²R: 20² × 22 = 400 × 22 = 8800 W. Correct.</li>
  </ol>

  <div class="n-h2">Example 3: Cable Heat Loss, the I²R Point</div>
  <p class="n-p"><strong>Question:</strong> A cable of resistance 0.2 Ω carries 30 A. Find the power lost as heat. Then find the loss if current doubles to 60 A.</p>
  <ol class="n-steps">
    <li>At 30 A: P = I²R = 30² × 0.2 = 900 × 0.2 = <span class="n-val">180 W</span></li>
    <li>At 60 A: P = 60² × 0.2 = 3600 × 0.2 = <span class="n-val">720 W</span></li>
    <li><strong>Observation:</strong> Current doubled, heat loss became four times. The I² relationship in action, and the best answer to "why is power transmitted at high voltage?"</li>
  </ol>

  <div class="n-h2">Example 4: Energy Consumption</div>
  <p class="n-p"><strong>Question:</strong> A 5 kW motor runs for 8 hours per day. Find the energy consumed in one day.</p>
  <ol class="n-steps">
    <li>Formula: E = P × t</li>
    <li>Substitute: E = 5 kW × 8 h</li>
    <li>Answer: E = <span class="n-val">40 kWh</span> per day</li>
  </ol>

  <div class="n-h2">Example 5: Series and Parallel</div>
  <p class="n-p"><strong>Question:</strong> Three resistors, 10 Ω, 20 Ω and 30 Ω. Find total resistance in series, then in parallel.</p>
  <ol class="n-steps">
    <li><strong>Series:</strong> R = 10 + 20 + 30 = <span class="n-val">60 Ω</span></li>
    <li><strong>Parallel:</strong> 1/R = 1/10 + 1/20 + 1/30 = 6/60 + 3/60 + 2/60 = 11/60</li>
    <li>So R = 60 / 11 = <span class="n-val">5.45 Ω</span></li>
    <li><strong>Sanity check:</strong> The parallel result is less than the smallest resistor, 10 Ω. Always true, and a quick way to catch a mistake.</li>
  </ol>

  <div class="n-h2">Example 6: RMS and Peak</div>
  <p class="n-p"><strong>Question:</strong> A ship supply is 440 V. Find the peak voltage the insulation must withstand.</p>
  <ol class="n-steps">
    <li>Formula: V<sub>peak</sub> = 1.414 × V<sub>RMS</sub></li>
    <li>Substitute: V<sub>peak</sub> = 1.414 × 440</li>
    <li>Answer: V<sub>peak</sub> = <span class="n-val">622 V</span> approximately</li>
  </ol>

  <div class="n-h2">Example 7: Frequency from Alternator Speed</div>
  <p class="n-p"><strong>Question:</strong> A 4 pole alternator runs at 1500 RPM. Find the output frequency.</p>
  <ol class="n-steps">
    <li>Formula: f = (P × N) / 120</li>
    <li>Substitute: f = (4 × 1500) / 120 = 6000 / 120</li>
    <li>Answer: f = <span class="n-val">50 Hz</span></li>
  </ol>

  <div class="n-h2">Example 8: Temperature Effect on Resistance</div>
  <p class="n-p"><strong>Question:</strong> A copper winding has resistance 10 Ω at 0°C. Find its resistance at 75°C. Take α = 0.004 per °C.</p>
  <ol class="n-steps">
    <li>Formula: R<sub>t</sub> = R<sub>0</sub>(1 + αt)</li>
    <li>Substitute: R<sub>75</sub> = 10 × (1 + 0.004 × 75) = 10 × (1 + 0.3)</li>
    <li>Answer: R<sub>75</sub> = <span class="n-val">13 Ω</span></li>
    <li><strong>Observation:</strong> A 30 percent rise in resistance simply from heating, why winding resistance must always be recorded with its temperature.</li>
  </ol>


  <!-- ═══════════════════════════════════════════════════════════
       VIVA QUESTIONS
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-viva">❓ Viva and Interview Questions</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>These reflect the actual pattern of questions asked from this module.</strong> Attempt each answer in your head first, then check against the model answer. Speaking an answer out loud once is worth reading it five times.</div></div>

  <table class="n-table">
    <tr><th>Question</th><th>Model Answer</th></tr>
    <tr><td><strong>What is electric current?</strong></td><td>The rate of flow of electric charge through a conductor, measured in amperes. One ampere is one coulomb per second.</td></tr>
    <tr><td><strong>Which direction does current flow?</strong></td><td>Conventional current flows positive to negative and is used in all diagrams. Electrons physically flow negative to positive. The convention was set before the electron was discovered.</td></tr>
    <tr><td><strong>What is voltage?</strong></td><td>The work done per unit charge in moving charge between two points. It is a potential difference, so it always exists between two points, never at one point alone.</td></tr>
    <tr><td><strong>Difference between EMF and potential difference?</strong></td><td>EMF is the voltage produced by the source on open circuit. PD is the voltage across the load when current flows. The difference is the drop across the source's internal resistance.</td></tr>
    <tr><td><strong>State Ohm's Law.</strong></td><td>Current through a conductor is directly proportional to the voltage across it, provided temperature and physical conditions remain constant. V equals I times R.</td></tr>
    <tr><td><strong>Give an example of a non-ohmic device.</strong></td><td>A diode. Its resistance is not constant, so its voltage-current graph is a curve, not a straight line.</td></tr>
    <tr><td><strong>What are the factors affecting resistance?</strong></td><td>Length, cross-sectional area, material resistivity, and temperature. R equals rho L over A.</td></tr>
    <tr><td><strong>Difference between resistance and resistivity?</strong></td><td>Resistance depends on the actual piece of wire and its dimensions. Resistivity is a property of the material itself, independent of size or shape.</td></tr>
    <tr><td><strong>Why does a bird on a live wire not get shocked?</strong></td><td>Both feet are at the same potential, so there is no potential difference across the bird and no current flows through it.</td></tr>
    <tr><td><strong>State Kirchhoff's Current Law.</strong></td><td>The sum of currents entering a junction equals the sum leaving it. Follows from conservation of charge.</td></tr>
    <tr><td><strong>State Kirchhoff's Voltage Law.</strong></td><td>Around any closed loop, the sum of EMFs equals the sum of voltage drops. Follows from conservation of energy.</td></tr>
    <tr><td><strong>Why is house and ship wiring in parallel?</strong></td><td>So each load gets full rated voltage, each can be switched independently, and one failure does not kill the rest of the circuit.</td></tr>
    <tr><td><strong>Difference between power and energy?</strong></td><td>Power is the rate of doing work, measured in watts. Energy is the total work done over time, measured in kWh. Power is instantaneous, energy accumulates.</td></tr>
    <tr><td><strong>Difference between a wattmeter and an energy meter?</strong></td><td>A wattmeter reads instantaneous power in watts. An energy meter accumulates it over time and reads total energy in kWh.</td></tr>
    <tr><td><strong>Why is power transmitted at high voltage?</strong></td><td>For the same power, higher voltage means lower current. Since losses are I squared R, reducing current sharply reduces heat loss and voltage drop.</td></tr>
    <tr><td><strong>Why is AC preferred on ships?</strong></td><td>Voltage is easily transformed, alternators need no commutator, induction motors are rugged and low maintenance, and AC fault current is easier to break because it passes through zero.</td></tr>
    <tr><td><strong>Why is DC still needed on a ship?</strong></td><td>Batteries are DC, so emergency power, UPS, starting systems, alarms, control circuits and electronics all need DC.</td></tr>
    <tr><td><strong>What is frequency?</strong></td><td>The number of complete cycles per second, in hertz. On 50 Hz one cycle takes 20 milliseconds.</td></tr>
    <tr><td><strong>What is RMS value?</strong></td><td>The equivalent DC value that produces the same heating effect in a resistor. For a sine wave it is peak divided by root two, 0.707 times peak.</td></tr>
    <tr><td><strong>Is 440 V the peak value?</strong></td><td>No, it is the RMS value. The peak is 1.414 times that, around 622 V, and that is what the insulation must withstand.</td></tr>
    <tr><td><strong>Why is the average value of a sine wave zero?</strong></td><td>Over a full cycle the positive and negative halves are equal and cancel. Average value is therefore quoted over a half cycle instead.</td></tr>
    <tr><td><strong>What is power factor?</strong></td><td>The cosine of the phase angle between voltage and current, and also the ratio of kW to kVA. It shows how much of the supplied power does useful work.</td></tr>
    <tr><td><strong>Why is a loose connection dangerous?</strong></td><td>It has high contact resistance. Current is unchanged, so I squared R heat at that point rises sharply, causing overheating and a fire risk.</td></tr>
    <tr><td><strong>Does current flow in an open circuit?</strong></td><td>No. Current needs a complete closed path back to the source. In an open circuit the path is broken, so no current flows even though voltage is present.</td></tr>
  </table>


  <!-- ═══════════════════════════════════════════════════════════
       QUICK REVISION
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-quickrev">📌 Quick Revision</div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Read this section the morning of your interview.</strong> If you can explain each line in your own words, you are ready.</div></div>

  <table class="n-table">
    <tr><th>Concept</th><th>One Line to Remember</th></tr>
    <tr><td>Charge</td><td>The stuff that flows. Coulombs. One electron is 1.6 × 10<sup>-19</sup> C.</td></tr>
    <tr><td>Current</td><td>Rate of flow of charge. Amperes. I equals Q over t.</td></tr>
    <tr><td>Voltage</td><td>The push. Work per unit charge. Volts. Always a difference between two points.</td></tr>
    <tr><td>EMF vs PD</td><td>EMF at the source on open circuit, PD across the load when current flows.</td></tr>
    <tr><td>Resistance</td><td>Opposition to flow. Ohms. Depends on length, area, material and temperature.</td></tr>
    <tr><td>Ohm's Law</td><td>V equals IR, provided temperature stays constant.</td></tr>
    <tr><td>Series</td><td>Same current, voltage divides, resistances add.</td></tr>
    <tr><td>Parallel</td><td>Same voltage, current divides, total R less than the smallest.</td></tr>
    <tr><td>KCL</td><td>Current in equals current out. Conservation of charge.</td></tr>
    <tr><td>KVL</td><td>Sum of EMFs equals sum of drops. Conservation of energy.</td></tr>
    <tr><td>Power</td><td>Rate of work. Watts. P equals VI, I²R or V²/R.</td></tr>
    <tr><td>I²R</td><td>Double the current, quadruple the heat. Explains HV transmission and hot terminals.</td></tr>
    <tr><td>Energy</td><td>Power times time. kWh. Power is the rate, energy is the total.</td></tr>
    <tr><td>AC</td><td>Reverses direction periodically. Natural output of a rotating alternator.</td></tr>
    <tr><td>DC</td><td>One direction only. Batteries, UPS, control circuits, electronics.</td></tr>
    <tr><td>Frequency</td><td>Cycles per second. 50 Hz means 20 ms per cycle. f equals PN over 120.</td></tr>
    <tr><td>Phase angle</td><td>Angular difference between two waves. CIVIL: C leads, L lags.</td></tr>
    <tr><td>RMS</td><td>Equivalent DC heating value. 0.707 times peak. All meters read RMS.</td></tr>
    <tr><td>Peak</td><td>1.414 times RMS. 440 V RMS peaks at 622 V. Insulation feels the peak.</td></tr>
    <tr><td>Power factor</td><td>cos φ, equals kW over kVA. Beer is kW, foam is kVAR, full glass is kVA.</td></tr>
  </table>

  <div class="n-crit"><div class="icon">🎯</div><div class="body"><strong>Final advice for this module.</strong> If asked something here you genuinely do not know, do not invent an answer. State what you do know, then say honestly you are not certain about the rest. Panels respect that far more than confident guessing. For the twenty concepts above, there is no excuse. These are the ones every interviewer expects a serious candidate to have solid.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       MODULE SUMMARY
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-summary">✅ Module Summary</div>
  <div class="n-info"><div class="icon">📋</div><div class="body"><strong>You should now be able to:</strong>
    <ul class="n-list">
      <li>Explain charge, current and voltage in standard terms and in a shipboard analogy</li>
      <li>State Ohm's Law with its condition, and identify ohmic versus non-ohmic behaviour</li>
      <li>Apply KCL and KVL to a simple circuit, including basic fault-finding logic</li>
      <li>Differentiate power from energy, and explain the I² relationship in cable and transmission design</li>
      <li>Compare AC and DC, and justify the shipboard use of each</li>
      <li>Work with frequency, phase angle, RMS, peak and power factor at an introductory level</li>
      <li>Solve the eight worked numerical types shown above without hesitation</li>
    </ul>
  </div></div>

  <table class="n-table">
    <tr><th>Estimated Study Time</th><th>Quiz Difficulty</th><th>Next Module</th></tr>
    <tr><td>45-60 minutes</td><td>★★★★☆</td><td>F02, Electrical Safety and Earthing</td></tr>
  </table>

  <div class="n-ok"><div class="icon">➡️</div><div class="body"><strong>Next module:</strong> F02, Electrical Safety and Earthing. That module carries even more weight in a sponsorship interview, since it tells the panel whether you can be trusted around live equipment.</div></div>

  <div style="margin-top:20px; text-align:center;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F01')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:10px 24px;font-size:14px;">Take the F01 Quiz →</button>
  </div>


  </div>
</div>
</div>`);

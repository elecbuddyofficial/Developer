window.loadNotes("F01", `<div class="view" id="view-notes-f01">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F01')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F01 - Basic Electrical Fundamentals</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 1 of 25 · Start here</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Asked in Every Interview</span>
      <span class="tag tag-orange">Foundation Topic</span>
      <span class="tag tag-purple">Analogies Inside</span>
    </div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-why')">Why This Matters</button>
    <button class="anc-btn" onclick="jumpTo('s-analogy')">Master Analogy</button>
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
  </div>

  <div class="note-content">


  <!-- ═══════════════════════════════════════════════════════════
       WHY THIS MODULE MATTERS
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-why">🎯 Why This Module Decides Your Interview</div>
  <p class="n-p">Almost every ETO sponsorship interview opens the same way. The panel asks something that sounds embarrassingly simple: "What is current?" or "Tell me Ohm's Law." They are not testing whether you can recite a textbook. They are testing whether you actually understand the thing you are about to spend a career working with.</p>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>The pattern to understand:</strong> Interviewers use basics as a filter. A candidate who explains current clearly, in their own words, with a real example, is marked as solid. A candidate who blurts out a memorised line and then freezes on the follow-up "but why?" is marked as weak, no matter how many advanced topics they know. Depth of understanding on simple topics beats shallow knowledge of complex ones.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>How to use this module:</strong> For every concept below you get four things. The <strong>standard definition</strong> to keep you technically correct, an <strong>everyday analogy</strong> so you never go blank, the <strong>formula</strong> with units, and a <strong>one-line interview answer</strong> you can actually say out loud. Learn the analogy first. The definition sticks much better once the picture is in your head.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       THE MASTER ANALOGY
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-analogy">🚰 The Master Analogy: Electricity Is Water in a Pipe</div>
  <p class="n-p">Before any definitions, fix this one picture in your mind. Almost every basic electrical question can be answered from it, and interviewers genuinely appreciate a candidate who can explain electricity without hiding behind jargon.</p>
  <table class="n-table">
    <tr><th>Water System</th><th>Electrical System</th><th>What It Means</th></tr>
    <tr><td>Water molecules</td><td class="hl">Electrons (charge)</td><td>The stuff that actually moves</td></tr>
    <tr><td>Pump pressure or tank height</td><td class="hl">Voltage</td><td>The push that makes it move</td></tr>
    <tr><td>Flow rate, litres per second</td><td class="hl">Current</td><td>How much is moving per second</td></tr>
    <tr><td>Narrow or rusty pipe</td><td class="hl">Resistance</td><td>What opposes the movement</td></tr>
    <tr><td>Pipe bursts from over-pressure</td><td class="bad">Insulation failure</td><td>Too much voltage breaks the barrier</td></tr>
    <tr><td>Pipe overheats from too much flow</td><td class="bad">Cable overheating</td><td>Too much current burns the conductor</td></tr>
    <tr><td>Closing a valve</td><td class="hl">Opening a switch</td><td>Stops the flow completely</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Where the analogy breaks down, and it is worth knowing:</strong> Water can spill out of an open pipe. Electricity cannot. Electrons only flow if there is a complete loop back to the source. This single difference explains why an open circuit carries no current, and it is one of the most commonly asked follow-up questions. Keep the water picture, but remember electricity always needs a closed path.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       ELECTRIC CHARGE
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-charge">⚛️ Electric Charge</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standard definition:</strong> Electric charge is a fundamental property of matter that causes it to experience a force in an electric field. It exists in two forms, positive and negative. Its SI unit is the <strong>coulomb (C)</strong>.</div></div>
  <p class="n-p">Every atom has a nucleus containing protons, which carry positive charge, surrounded by electrons, which carry negative charge. In a balanced atom the two cancel out and the atom is neutral. Electricity happens when electrons get separated from their atoms and start moving.</p>
  <div class="n-grid">
    <div class="n-card"><div class="card-title">CHARGE OF ONE ELECTRON</div><div class="card-val">1.6 × 10<sup>-19</sup> C</div><div class="card-desc">Negative. This is the smallest unit of free charge found in nature, so charge is said to be quantised.</div></div>
    <div class="n-card"><div class="card-title">ELECTRONS IN ONE COULOMB</div><div class="card-val">6.24 × 10<sup>18</sup></div><div class="card-desc">That is roughly six billion billion electrons. One coulomb is a very large amount of charge.</div></div>
  </div>
  <div class="n-formula">Q = I × t<div class="label">Q = charge in coulombs (C) · I = current in amperes (A) · t = time in seconds (s)</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Analogy:</strong> Charge is the water itself. Current is how fast that water is flowing. You cannot have flow without something to flow.</div></div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body"><strong>Say this in the interview:</strong> "Charge is a basic property of matter, measured in coulombs. Electrons carry negative charge, protons carry positive. When free electrons move through a conductor, that movement is what we call current."</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       ELECTRIC CURRENT
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-current">🌊 Electric Current</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standard definition:</strong> Electric current is the rate of flow of electric charge through a conductor. Its SI unit is the <strong>ampere (A)</strong>. One ampere is one coulomb of charge passing a point in one second.</div></div>
  <div class="n-formula">I = Q / t<div class="label">I = current (A) · Q = charge (C) · t = time (s)</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Analogy:</strong> Current is the flow rate in the pipe, litres per second. A thin trickle is a small current. A fire hose is a large current. Notice the analogy already tells you something useful: a bigger flow needs a bigger pipe, which is exactly why a 100 A circuit needs a much thicker cable than a 5 A circuit.</div></div>

  <div class="n-h2">Conventional Current vs Electron Flow</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>This is a favourite trick question.</strong> Interviewers ask it because it catches candidates who memorised without understanding. Know both, and know why the confusion exists.</div></div>
  <table class="n-table">
    <tr><th></th><th>Conventional Current</th><th>Electron Flow</th></tr>
    <tr><td>Direction</td><td class="hl">Positive to negative</td><td class="hl">Negative to positive</td></tr>
    <tr><td>What actually moves</td><td>Nothing physical, it is a convention</td><td class="ok">Real electrons</td></tr>
    <tr><td>Used in</td><td class="ok">All circuit diagrams, all textbooks, all industry practice</td><td>Physics explanations only</td></tr>
    <tr><td>Origin</td><td>Benjamin Franklin guessed the direction before the electron was discovered</td><td>Electron discovered later, in 1897</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why we did not simply correct it:</strong> By the time the electron was discovered, every circuit diagram, every formula and every rule such as Fleming's rules had already been written using the old convention. Changing it would have meant rewriting all of electrical engineering. Since the mathematics works out identically either way, the convention was kept. As a working ETO you will always use conventional current.</div></div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body"><strong>Say this in the interview:</strong> "Conventional current flows from positive to negative, and that is what we use in all diagrams and calculations. Physically it is electrons that move, and they go from negative to positive. The convention was fixed before the electron was discovered, and it was kept because the maths works out the same."</div></div>

  <div class="n-h2">Practical Current Values You Should Know</div>
  <table class="n-table">
    <tr><th>Situation</th><th>Typical Current</th><th>Note</th></tr>
    <tr><td>LED indicator lamp</td><td><span class="n-val">20 mA</span></td><td>Milliamps, very small</td></tr>
    <tr><td>Mobile phone charger</td><td><span class="n-val">1 to 2 A</span></td><td>Everyday reference</td></tr>
    <tr><td>Small ship ventilation fan motor</td><td><span class="n-val">5 to 15 A</span></td><td>Depends on rating</td></tr>
    <tr><td>Ballast pump motor</td><td><span class="n-val">50 to 200 A</span></td><td>Heavy load</td></tr>
    <tr><td>Current fatal to a human</td><td class="bad"><span class="n-val">50 to 100 mA</span></td><td>Far less than a single lamp draws</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Remember this comparison, it impresses panels:</strong> A current far too small to light a bulb properly is more than enough to stop a human heart. It is <em>current</em> that kills, not voltage. Voltage is only what drives that current through you. This is covered fully in the Electrical Safety module.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       VOLTAGE
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-voltage">⚡ Voltage, Potential Difference and EMF</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standard definition:</strong> Voltage, also called potential difference, is the work done in moving a unit charge from one point to another in an electric field. Its SI unit is the <strong>volt (V)</strong>. One volt is one joule of work per coulomb of charge.</div></div>
  <div class="n-formula">V = W / Q<div class="label">V = voltage (V) · W = work or energy (joules, J) · Q = charge (C)</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Analogy:</strong> Voltage is pressure. Picture a water tank on a tower. The higher the tank, the greater the pressure at the tap below, and the harder the water is pushed out. Voltage is that height difference. Note the word <em>difference</em>. Water only flows if there is a height difference between two points. In exactly the same way, current only flows if there is a voltage difference between two points.</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>The birds on a power line question.</strong> Interviewers love this one. Why does a bird sitting on a live high voltage line not get electrocuted? Because both its feet are at the same potential. There is no <em>difference</em> across the bird, so no current flows through it. The moment it touches a second wire at a different potential, or touches an earthed pole, a difference exists and current flows. This single example proves you understand that voltage is a difference and not an absolute quantity.</div></div>

  <div class="n-h2">EMF vs Potential Difference</div>
  <table class="n-table">
    <tr><th>Aspect</th><th>EMF (Electromotive Force)</th><th>Potential Difference (PD)</th></tr>
    <tr><td>Meaning</td><td>Energy supplied per coulomb by the source</td><td>Energy used per coulomb by the load</td></tr>
    <tr><td>Where it appears</td><td class="ok">Across the source: battery, generator, alternator</td><td class="hl">Across the load: lamp, motor, resistor</td></tr>
    <tr><td>Role</td><td>Causes current to flow</td><td>Result of current flowing</td></tr>
    <tr><td>Measured when</td><td>No load connected, open circuit</td><td>Load connected, current flowing</td></tr>
    <tr><td>Symbol</td><td>E</td><td>V</td></tr>
    <tr><td>Unit</td><td>Volt</td><td>Volt</td></tr>
  </table>
  <div class="n-formula">V = E - (I × r)<div class="label">V = terminal voltage · E = EMF · I = current · r = internal resistance of the source</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why terminal voltage drops under load:</strong> Every real source has some internal resistance. When current flows, part of the EMF is lost inside the source itself. That is why a battery reads 12 V with nothing connected but drops to around 11 V when you crank an engine. The EMF has not changed, the terminal voltage has, because current is now flowing through that internal resistance. This is exactly why a fully charged battery can still read low if it is heavily loaded.</div></div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body"><strong>Say this in the interview:</strong> "EMF is the voltage a source produces on open circuit, the energy it gives per coulomb. Potential difference is the voltage measured across a load when current is actually flowing. The difference between them is the drop across the source's own internal resistance."</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       RESISTANCE
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-resistance">🚧 Resistance</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standard definition:</strong> Resistance is the property of a material that opposes the flow of electric current. Its SI unit is the <strong>ohm (Ω)</strong>. A conductor has a resistance of one ohm when a potential difference of one volt across it causes a current of one ampere to flow.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Analogy:</strong> Resistance is how narrow and rough the pipe is. A wide, smooth pipe lets water through easily, which is low resistance. A narrow, rusty, kinked pipe fights the flow, which is high resistance. Squeeze the pipe and less water gets through for the same pressure.</div></div>

  <div class="n-h2">What Physically Causes Resistance</div>
  <p class="n-p">Inside a conductor, free electrons do not travel in a clean straight line. They constantly collide with the vibrating metal atoms in their path. Each collision converts a little electrical energy into heat. Resistance is simply the measure of how much the material obstructs those electrons, and heat is the direct evidence of it. This is why every resistive component gets warm, and why cables must be sized so they do not overheat.</p>

  <div class="n-h2">The Four Factors Affecting Resistance</div>
  <div class="n-formula">R = ρ × L / A<div class="label">R = resistance (Ω) · ρ = resistivity of the material (Ω·m) · L = length (m) · A = cross-sectional area (m²)</div></div>
  <table class="n-table">
    <tr><th>Factor</th><th>Relationship</th><th>Practical Meaning</th></tr>
    <tr><td><strong>Length (L)</strong></td><td class="hl">R is directly proportional to L</td><td>Double the cable length, double the resistance. This is why long cable runs suffer voltage drop.</td></tr>
    <tr><td><strong>Area (A)</strong></td><td class="hl">R is inversely proportional to A</td><td>Double the cross-section, halve the resistance. This is why heavy loads need thick cables.</td></tr>
    <tr><td><strong>Material (ρ)</strong></td><td class="hl">Lower resistivity means lower R</td><td>Silver is best, then copper, then aluminium. Copper is the practical choice on ships.</td></tr>
    <tr><td><strong>Temperature</strong></td><td class="hl">For metals, R rises as temperature rises</td><td>A hot motor winding reads a higher resistance than a cold one.</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Resistance vs resistivity, a common follow-up:</strong> Resistance depends on the actual piece of wire, its length and thickness. Resistivity is a property of the <em>material</em> itself, independent of size or shape. Copper always has the same resistivity whether it is a short thick bar or a long thin wire, but those two pieces have very different resistances.</div></div>

  <div class="n-h2">Temperature Coefficient of Resistance</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Definition:</strong> The temperature coefficient of resistance is the change in resistance per ohm per degree Celsius rise in temperature. Its symbol is α, alpha.</div></div>
  <div class="n-formula">R<sub>t</sub> = R<sub>0</sub> (1 + α × t)<div class="label">R<sub>t</sub> = resistance at t°C · R<sub>0</sub> = resistance at 0°C · α = temperature coefficient · t = temperature in °C</div></div>
  <div class="n-grid-3">
    <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">METALS</div><div class="card-val">Positive α</div><div class="card-desc">Resistance increases with temperature. Atoms vibrate more and obstruct electrons harder. Copper α is about 0.004 per °C.</div></div>
    <div class="n-card" style="border-color:rgba(6,182,212,.3)"><div class="card-title" style="color:var(--cyan)">SEMICONDUCTORS</div><div class="card-val">Negative α</div><div class="card-desc">Resistance decreases with temperature. Heat frees more charge carriers. This is the basis of the thermistor.</div></div>
    <div class="n-card"><div class="card-title">ALLOYS (MANGANIN)</div><div class="card-val">Near zero α</div><div class="card-desc">Resistance stays almost constant. This is why precision measuring instruments use these alloys for their shunts.</div></div>
  </div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>The shipboard question that follows:</strong> "Why does a motor behave differently when hot?" Because winding resistance rises as the copper heats up. Higher resistance shifts the winding characteristics, so readings taken cold and hot will not match. It is also why insulation resistance readings must always be recorded along with the winding temperature, otherwise you are comparing meaningless numbers.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       OHM'S LAW
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ohm">📐 Ohm's Law</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>The single most asked question in any electrical interview.</strong> You will be asked this. Do not just state the formula. State the law properly, including its condition, then show you can apply it.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standard definition:</strong> Ohm's Law states that the current flowing through a conductor is directly proportional to the potential difference across it, provided the physical conditions such as temperature remain constant.</div></div>
  <div class="n-formula">V = I × R<div class="label">Also written as I = V / R and R = V / I</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Do not forget the condition.</strong> The phrase "provided temperature and other physical conditions remain constant" is part of the law. Candidates who leave it out get an immediate follow-up: "Under what condition?" Saying it upfront shows you learned the law, not just the formula.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Analogy:</strong> Push harder on the water, more flows. Narrow the pipe, less flows. That is the entire law. More voltage gives more current. More resistance gives less current.</div></div>

  <div class="n-h2">Ohmic and Non-Ohmic Conductors</div>
  <table class="n-table">
    <tr><th>Type</th><th>Behaviour</th><th>Examples</th></tr>
    <tr><td><strong>Ohmic</strong></td><td class="ok">Obeys Ohm's Law. V against I graph is a straight line through the origin.</td><td>Copper, most metals, standard resistors</td></tr>
    <tr><td><strong>Non-ohmic</strong></td><td class="bad">Does not obey Ohm's Law. V against I graph is curved.</td><td>Diode, transistor, filament lamp, thermistor, electrolytes</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why a filament lamp is non-ohmic:</strong> As current increases the filament heats up dramatically, its resistance rises, and so the graph bends. The lamp is still a resistor, but its resistance is not constant, so it falls outside the strict condition of Ohm's Law. If asked for a non-ohmic device, a diode is the cleanest answer.</div></div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body"><strong>Say this in the interview:</strong> "Ohm's Law states that current through a conductor is directly proportional to the voltage across it, provided temperature and physical conditions stay constant. So V equals I times R. It applies to ohmic conductors like copper, but not to devices like diodes where resistance is not constant."</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SERIES AND PARALLEL
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-series-parallel">🔗 Series and Parallel Circuits</div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Analogy:</strong> Series is a single lane road. Every car must pass through every point, so if one car stops, everyone stops. Parallel is a multi-lane highway. Each lane is independent, so one blocked lane does not stop the others.</div></div>

  <div class="n-h2">Series Circuit</div>
  <ul class="n-list">
    <li><strong>Current is the same</strong> through every component. There is only one path, so what goes in must come out.</li>
    <li><strong>Voltage divides</strong> across the components in proportion to their resistance.</li>
    <li><strong>Total resistance adds up:</strong> R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub></li>
    <li>If one component fails open, <em>the whole circuit dies</em>.</li>
  </ul>

  <div class="n-h2">Parallel Circuit</div>
  <ul class="n-list">
    <li><strong>Voltage is the same</strong> across every branch. Both ends of each branch sit on the same two points.</li>
    <li><strong>Current divides</strong> between branches, inversely proportional to their resistance.</li>
    <li><strong>Total resistance:</strong> 1/R<sub>total</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + 1/R<sub>3</sub></li>
    <li>Total resistance is always <em>less</em> than the smallest individual branch.</li>
    <li>If one branch fails, the others keep working.</li>
  </ul>
  <div class="n-formula">Two resistors in parallel: R = (R<sub>1</sub> × R<sub>2</sub>) / (R<sub>1</sub> + R<sub>2</sub>)<div class="label">The product over sum shortcut. Only valid for exactly two resistors.</div></div>

  <table class="n-table">
    <tr><th>Property</th><th>Series</th><th>Parallel</th></tr>
    <tr><td>Current</td><td class="ok">Same everywhere</td><td class="hl">Divides between branches</td></tr>
    <tr><td>Voltage</td><td class="hl">Divides across components</td><td class="ok">Same across all branches</td></tr>
    <tr><td>Total resistance</td><td>Sum of all, increases</td><td>Less than the smallest, decreases</td></tr>
    <tr><td>One component fails open</td><td class="bad">Entire circuit stops</td><td class="ok">Other branches keep working</td></tr>
    <tr><td>Practical use</td><td>Fuses, switches, ammeters, old fairy lights</td><td>All ship distribution, all lighting, all sockets</td></tr>
  </table>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>The classic interview question:</strong> "Why is house and ship wiring done in parallel and not series?" Three reasons. One, every load gets the full rated voltage. Two, each load can be switched independently. Three, one failed lamp does not kill the whole circuit. Compare it to old fairy lights wired in series where one blown bulb killed the entire string, and the panel will know you understand it practically.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       KIRCHHOFF'S CURRENT LAW
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-kcl">🔀 Kirchhoff's Current Law (KCL)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standard definition:</strong> At any junction or node in an electrical circuit, the algebraic sum of all currents is zero. Put more simply, the total current entering a junction equals the total current leaving it.</div></div>
  <div class="n-formula">Σ I<sub>in</sub> = Σ I<sub>out</sub><div class="label">Also written as Σ I = 0 at any node, taking entering as positive and leaving as negative</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Analogy:</strong> A water pipe junction. If 10 litres per second flows into a T-junction, then exactly 10 litres per second must flow out, split however the branches divide it. Water does not vanish inside the joint, and neither does charge. KCL is simply the conservation of charge stated for circuits.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Worked example:</strong> Three cables meet at a busbar. Two carry current into it, 30 A and 45 A. One carries current away. By KCL, the outgoing cable must carry 30 + 45 = <span class="n-val">75 A</span>. This is exactly the reasoning used when sizing a busbar or checking a distribution panel.</div></div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body"><strong>Say this in the interview:</strong> "Kirchhoff's Current Law says the sum of currents entering a node equals the sum leaving it. It is based on conservation of charge, because charge cannot accumulate at a junction."</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       KIRCHHOFF'S VOLTAGE LAW
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-kvl">🔁 Kirchhoff's Voltage Law (KVL)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standard definition:</strong> In any closed loop of an electrical circuit, the algebraic sum of all EMFs and all voltage drops is zero. In other words, the total voltage supplied equals the total voltage dropped around that loop.</div></div>
  <div class="n-formula">Σ E = Σ (I × R)<div class="label">Sum of EMFs equals sum of IR drops around any closed loop</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Analogy:</strong> Walking around a hill and returning to your exact starting point. However much you climbed, you must have descended exactly the same amount, because you are back where you began. The net change in height is zero. In a circuit loop, the voltage gained from the source is exactly the voltage lost across the components. KVL is conservation of energy stated for circuits.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Worked example:</strong> A 24 V battery supplies two resistors in series. If the first resistor drops 10 V, the second must drop 24 - 10 = <span class="n-val">14 V</span>. The drops must always add up to the supply. If they do not, something is wrong with your measurement or there is an additional drop you have missed, such as a bad connection.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Practical fault-finding use:</strong> If you measure a supply of 24 V but the drops across your components only add up to 20 V, then 4 V is being lost somewhere you did not account for. That missing 4 V is almost always a loose terminal, a corroded joint, or a damaged cable. KVL is how you hunt down a bad connection.</div></div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body"><strong>Say this in the interview:</strong> "Kirchhoff's Voltage Law says that around any closed loop, the sum of EMFs equals the sum of voltage drops. It comes from conservation of energy. I also use it practically, because if the measured drops do not add up to the supply, the missing voltage points me to a bad connection."</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       ELECTRICAL POWER
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-power">💪 Electrical Power</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standard definition:</strong> Power is the rate at which electrical energy is converted into another form of energy, or the rate at which work is done. Its SI unit is the <strong>watt (W)</strong>. One watt is one joule per second.</div></div>
  <div class="n-formula">P = V × I&nbsp;&nbsp;&nbsp;&nbsp;P = I² × R&nbsp;&nbsp;&nbsp;&nbsp;P = V² / R<div class="label">Three forms of the same relationship. Pick whichever matches the quantities you are given.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Analogy:</strong> Power is how much work the water is doing per second. High pressure with low flow, or low pressure with high flow, can both do the same work. It is the combination that matters, which is exactly why power is voltage multiplied by current and not either one alone.</div></div>

  <div class="n-h2">Why I²R Matters More Than You Expect</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>This formula explains half of electrical engineering.</strong> Because power loss depends on current <em>squared</em>, doubling the current does not double the heat, it quadruples it. Halving the current cuts the loss to a quarter. This single fact is why power is transmitted at high voltage, why cables are sized by current and not voltage, and why a loose connection burns out.</div></div>
  <table class="n-table">
    <tr><th>If current becomes</th><th>Heat loss becomes</th><th>Consequence</th></tr>
    <tr><td>2 times</td><td class="bad">4 times</td><td>Cable temperature rises sharply</td></tr>
    <tr><td>3 times</td><td class="bad">9 times</td><td>Insulation damage likely</td></tr>
    <tr><td>Half</td><td class="ok">One quarter</td><td>Much cooler running, better efficiency</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why a loose terminal burns:</strong> A loose connection has high contact resistance. The current through it is unchanged, but R has gone up, so I²R heat at that one point shoots up. That is why loose terminals glow, discolour, and eventually catch fire, while the rest of the cable stays cool. Thermal imaging surveys exist precisely to find these hot spots.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       ENERGY
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-energy">🔋 Electrical Energy</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standard definition:</strong> Electrical energy is the total work done by an electric current over a period of time. Its SI unit is the <strong>joule (J)</strong>, but for practical use the commercial unit is the <strong>kilowatt hour (kWh)</strong>.</div></div>
  <div class="n-formula">Energy = Power × Time&nbsp;&nbsp;&nbsp;&nbsp;E = P × t<div class="label">1 kWh = 1000 W running for 1 hour = 3.6 × 10<sup>6</sup> joules</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Power vs energy, the difference that trips people up:</strong> Power is the <em>rate</em>. Energy is the <em>total amount</em>. A car engine has power, measured in horsepower. The fuel it burns on a journey is energy. A 2 kW heater has a fixed power, but leave it running for 5 hours and it has consumed 10 kWh of energy. Power is instant, energy accumulates over time.</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Related interview question:</strong> "What is the difference between a wattmeter and an energy meter?" A wattmeter reads instantaneous power in watts, what is being consumed right now. An energy meter accumulates that power over time and reads total energy in kWh, which is what you are billed for. Same reason a speedometer and an odometer are different instruments.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       AC AND DC
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-acdc">〰️ AC and DC</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title">DIRECT CURRENT (DC)</div><div class="card-val">One direction</div><div class="card-desc">Current flows steadily in one direction only. Magnitude stays essentially constant. Produced by batteries, DC generators and rectifiers.</div></div>
    <div class="n-card" style="border-color:rgba(168,85,247,.3)"><div class="card-title">ALTERNATING CURRENT (AC)</div><div class="card-val">Reverses periodically</div><div class="card-desc">Current periodically reverses direction and its magnitude varies continuously, normally as a sine wave. Produced by alternators.</div></div>
  </div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Analogy:</strong> DC is a river, always flowing one way. AC is the tide, flowing in then out, back and forth, fifty times every second on a 50 Hz system. Both move water and both can do work, but they behave very differently.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>How AC is generated:</strong> When a coil rotates inside a magnetic field, the direction in which the conductors cut the flux reverses every half revolution. Since the induced EMF direction depends on that cutting direction, the EMF naturally alternates. AC is not a design choice imposed on the generator, it is the natural output of a rotating machine. Making DC actually requires extra hardware, either a commutator or a rectifier, to force the output into one direction.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       AC VS DC COMPARISON
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-acdc-diff">⚖️ AC vs DC: The Full Comparison</div>
  <table class="n-table">
    <tr><th>Aspect</th><th>AC</th><th>DC</th></tr>
    <tr><td>Direction</td><td>Reverses periodically</td><td>Constant, one direction</td></tr>
    <tr><td>Waveform</td><td>Sinusoidal normally</td><td>Straight line</td></tr>
    <tr><td>Frequency</td><td>50 Hz or 60 Hz</td><td class="hl">Zero</td></tr>
    <tr><td>Generated by</td><td>Alternator</td><td>Battery, DC generator, rectifier</td></tr>
    <tr><td>Voltage transformation</td><td class="ok">Easy, using a transformer</td><td class="bad">Difficult, needs electronic converters</td></tr>
    <tr><td>Transmission over distance</td><td class="ok">Efficient at high voltage</td><td class="bad">Higher losses at usable voltages</td></tr>
    <tr><td>Can be stored</td><td class="bad">No, not directly</td><td class="ok">Yes, in batteries</td></tr>
    <tr><td>Switching and breaking</td><td class="ok">Easier, current naturally passes through zero</td><td class="bad">Harder, arc does not self-extinguish</td></tr>
    <tr><td>Shipboard use</td><td>Main supply, motors, lighting, distribution</td><td>Emergency batteries, UPS, electronics, control circuits, starting</td></tr>
  </table>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Why ships use AC as the main supply.</strong> Answer with these four points. First, AC voltage can be stepped up or down easily with a transformer, so the same generated power can serve 440 V motors and 220 V lighting. Second, AC generation is simpler, since an alternator has no commutator or brushes to maintain. Third, AC induction motors are rugged, cheap and almost maintenance free compared with DC motors. Fourth, breaking an AC fault current is easier because the current naturally passes through zero twice every cycle, which helps the arc extinguish.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why DC is still essential on board:</strong> Batteries are inherently DC, so all emergency power, UPS supplies, starting systems, alarm and control circuits and all electronics run on DC. A ship is not purely AC, it is AC distribution with critical DC backup. Saying this shows you understand the real system rather than a textbook one.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       FREQUENCY AND TIME PERIOD
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-frequency">🔁 Frequency and Time Period</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Frequency:</strong> The number of complete cycles of an alternating quantity occurring in one second. Unit is the <strong>hertz (Hz)</strong>.<br><br><strong>Time period:</strong> The time taken to complete one full cycle. Unit is the <strong>second (s)</strong>.</div></div>
  <div class="n-formula">f = 1 / T&nbsp;&nbsp;&nbsp;&nbsp;and&nbsp;&nbsp;&nbsp;&nbsp;T = 1 / f<div class="label">f = frequency (Hz) · T = time period (s)</div></div>
  <table class="n-table">
    <tr><th>System</th><th>Frequency</th><th>Time Period</th><th>Used In</th></tr>
    <tr><td>European standard</td><td><span class="n-val">50 Hz</span></td><td><span class="n-val">20 ms</span></td><td>India, UK, most of the world, most ships</td></tr>
    <tr><td>American standard</td><td><span class="n-val">60 Hz</span></td><td><span class="n-val">16.67 ms</span></td><td>USA, some vessels and offshore units</td></tr>
  </table>
  <div class="n-formula">f = (P × N) / 120<div class="label">f = frequency (Hz) · P = number of poles · N = speed in RPM</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why frequency must be held steady on a ship:</strong> Motor speed is directly tied to supply frequency. If frequency drifts, every motor on board changes speed, pumps deliver the wrong flow, and timing-based equipment misbehaves. This is why the generator governor controls speed so tightly. Frequency is not just a number on a meter, it is the speed of every machine on the vessel.</div></div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body"><strong>Say this in the interview:</strong> "Frequency is the number of complete cycles per second, measured in hertz. On a 50 Hz system one cycle takes 20 milliseconds. Frequency depends on the alternator speed and number of poles, f equals P times N over 120, which is why the governor has to hold the engine speed steady."</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       PHASE ANGLE
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-phase">📐 Phase and Phase Angle</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standard definition:</strong> Phase describes the position of an alternating quantity at a particular instant within its cycle. Phase angle, measured in degrees or radians, is the angular difference between two alternating quantities of the same frequency.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Analogy:</strong> Two runners on a circular track, running at exactly the same speed. If they start together they stay together, which is in phase, zero degrees. If one starts a quarter lap behind, that gap never closes, and they are 90 degrees out of phase. Same speed, permanent offset. That offset is the phase angle.</div></div>
  <table class="n-table">
    <tr><th>Condition</th><th>Phase Angle</th><th>What It Means</th></tr>
    <tr><td>In phase</td><td><span class="n-val">0°</span></td><td>Both waves peak at the same instant. Pure resistive load.</td></tr>
    <tr><td>Current lags voltage</td><td><span class="n-val">Up to 90°</span></td><td>Inductive load such as a motor or transformer</td></tr>
    <tr><td>Current leads voltage</td><td><span class="n-val">Up to 90°</span></td><td>Capacitive load such as a capacitor bank</td></tr>
    <tr><td>Three-phase supply</td><td><span class="n-val">120° apart</span></td><td>Each of the three phases is displaced by 120 degrees</td></tr>
    <tr><td>Completely opposite</td><td class="bad"><span class="n-val">180°</span></td><td>One peaks positive as the other peaks negative</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Memory aid used everywhere in industry:</strong> <strong>CIVIL</strong>. In a <strong>C</strong>apacitor, <strong>I</strong> comes before <strong>V</strong>, so current leads. In an inductor (<strong>L</strong>), <strong>V</strong> comes before <strong>I</strong>, so voltage leads and current lags. Reading it as C-I-V, V-I-L gives you both cases in one word.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       RMS, PEAK AND AVERAGE
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-rms">📊 RMS, Peak and Average Values</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Guaranteed follow-up question:</strong> "Your ship supply is 440 V. Is that the peak value?" The answer is no, it is the RMS value, and the peak is actually about 622 V. Candidates who do not know this look weak immediately, because it means they do not know what the numbers on their own switchboard represent.</div></div>

  <div class="n-h2">Why RMS Exists At All</div>
  <p class="n-p">An AC voltage is constantly changing. It is zero at some instants and maximum at others. So if someone says the supply is 440 V, which instant are they talking about? None of them. RMS solves this by asking a much more useful question: what steady DC voltage would produce exactly the same heating effect in a resistor as this alternating voltage does? That equivalent DC value is the RMS value. It lets us compare AC and DC fairly, and it is why every meter, every nameplate and every switchboard on your ship is calibrated in RMS.</p>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standard definition:</strong> The RMS or root mean square value of an alternating quantity is that value of steady direct current which, when flowing through a given resistance for a given time, produces the same amount of heat as the alternating current produces in the same resistance over the same time. It is also called the effective value or virtual value.</div></div>
  <div class="n-formula">V<sub>RMS</sub> = V<sub>peak</sub> / √2 = 0.707 × V<sub>peak</sub><div class="label">And conversely V<sub>peak</sub> = √2 × V<sub>RMS</sub> = 1.414 × V<sub>RMS</sub></div></div>
  <div class="n-formula">V<sub>average</sub> = 0.637 × V<sub>peak</sub><div class="label">Average over one half cycle. Over a full cycle the average of a pure sine wave is zero.</div></div>
  <table class="n-table">
    <tr><th>Quantity</th><th>Formula (sine wave)</th><th>For a 440 V system</th></tr>
    <tr><td>RMS value</td><td>0.707 × peak</td><td class="ok"><span class="n-val">440 V</span> (what the meter reads)</td></tr>
    <tr><td>Peak value</td><td>1.414 × RMS</td><td class="hl"><span class="n-val">622 V</span> (what the insulation must withstand)</td></tr>
    <tr><td>Peak to peak</td><td>2 × peak</td><td><span class="n-val">1244 V</span></td></tr>
    <tr><td>Average (half cycle)</td><td>0.637 × peak</td><td><span class="n-val">396 V</span></td></tr>
    <tr><td>Form factor</td><td>RMS / average</td><td><span class="n-val">1.11</span></td></tr>
    <tr><td>Peak factor (crest factor)</td><td>Peak / RMS</td><td><span class="n-val">1.414</span></td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why the peak value genuinely matters:</strong> Insulation does not care about the RMS value, it experiences the actual instantaneous voltage. On a 440 V system the insulation is stressed to 622 V twice every cycle. This is why insulation is always rated well above the nominal system voltage, and why insulation testing is done at elevated DC voltages. If you only think in RMS, you will underestimate what the insulation is really enduring.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why the full cycle average is zero:</strong> A pure sine wave spends exactly as much time positive as negative, and the two halves cancel out perfectly. That is why average value is always quoted over a half cycle, otherwise the number is meaningless. It also explains why an ordinary moving coil meter cannot read AC directly, it would simply read zero, which is why a rectifier is needed first.</div></div>
  <div class="n-crit"><div class="icon">🎤</div><div class="body"><strong>Say this in the interview:</strong> "All AC values on nameplates and meters are RMS values. RMS is the equivalent DC value that would produce the same heating effect. For a sine wave, RMS is peak divided by root two. So our 440 V supply actually peaks at around 622 V, and that is what the insulation has to withstand."</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       POWER FACTOR
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-pf">📈 Power Factor (Introduction)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standard definition:</strong> Power factor is the cosine of the phase angle between voltage and current. It is also the ratio of active power to apparent power, and it indicates how effectively the supplied power is being converted into useful work.</div></div>
  <div class="n-formula">Power Factor = cos φ = Active Power (kW) / Apparent Power (kVA)<div class="label">Always a value between 0 and 1. No units.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>The beer glass analogy, and interviewers do smile at this one:</strong> You order a glass of beer. The liquid beer is the <strong>active power in kW</strong>, the part you actually wanted. The foam on top is the <strong>reactive power in kVAR</strong>, it takes up space in the glass but you cannot drink it. The total glass, beer plus foam, is the <strong>apparent power in kVA</strong>, and that is the size of glass you had to pay for. Power factor is the proportion of the glass that is actually beer. Lots of foam means poor power factor, because you paid for a big glass and got little beer.</div></div>
  <table class="n-table">
    <tr><th>Load Type</th><th>Power Factor</th><th>Current Behaviour</th><th>Example</th></tr>
    <tr><td>Purely resistive</td><td class="ok"><span class="n-val">1.0</span> (unity)</td><td>In phase with voltage</td><td>Heater, filament lamp</td></tr>
    <tr><td>Inductive</td><td class="hl">Lagging, 0.7 to 0.9</td><td>Current lags voltage</td><td>Motors, transformers, most ship loads</td></tr>
    <tr><td>Capacitive</td><td class="hl">Leading</td><td>Current leads voltage</td><td>Capacitor banks, some electronic loads</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why low power factor is a real problem on ships:</strong> For the same useful work in kW, a poor power factor means the alternator and cables must carry more current. More current means more I²R heat, more voltage drop, larger cables, and an alternator that reaches its kVA limit while delivering less useful kW. This is exactly why alternators are rated in kVA and not kW, since heating depends on current, which depends on kVA.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Note:</strong> Power factor, the power triangle, and power factor improvement are covered in full detail in module F04, Electrical Power. What you need here is the definition, the formula, and the reason it matters.</div></div>


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

  <div class="n-h2">SI Prefixes You Must Know</div>
  <table class="n-table">
    <tr><th>Prefix</th><th>Symbol</th><th>Multiplier</th><th>Everyday Example</th></tr>
    <tr><td>micro</td><td>µ</td><td>10<sup>-6</sup>, one millionth</td><td>Capacitor values, 470 µF</td></tr>
    <tr><td>milli</td><td>m</td><td>10<sup>-3</sup>, one thousandth</td><td>Relay coil current, 20 mA</td></tr>
    <tr><td>kilo</td><td>k</td><td>10<sup>3</sup>, thousand</td><td>Ship HV supply, 6.6 kV</td></tr>
    <tr><td>mega</td><td>M</td><td>10<sup>6</sup>, million</td><td>Insulation resistance, 100 MΩ</td></tr>
    <tr><td>giga</td><td>G</td><td>10<sup>9</sup>, billion</td><td>Very high insulation values</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Watch the case.</strong> A small m means milli, one thousandth. A capital M means mega, one million. Confusing mA with MA, or mΩ with MΩ, is a factor of one billion error. In an insulation test, 2 MΩ and 2 mΩ are the difference between a healthy machine and a dead short.</div></div>

  <div class="n-h2">Master Formula Sheet for This Module</div>
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
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>How to handle a calculation in an interview:</strong> Say the formula out loud before you use it, substitute the numbers clearly, and state the unit in your final answer. An answer without a unit is treated as wrong. Working slowly and correctly beats working fast and getting it wrong.</div></div>

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
  <p class="n-p"><strong>Question:</strong> A cable of resistance 0.2 Ω carries 30 A. Find the power lost as heat. Then find the loss if current is doubled to 60 A.</p>
  <ol class="n-steps">
    <li>At 30 A: P = I²R = 30² × 0.2 = 900 × 0.2 = <span class="n-val">180 W</span></li>
    <li>At 60 A: P = 60² × 0.2 = 3600 × 0.2 = <span class="n-val">720 W</span></li>
    <li><strong>Observation:</strong> Current doubled, but heat loss became four times. This is the I² relationship in action, and it is the single best answer to "why is power transmitted at high voltage?"</li>
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
    <li><strong>Sanity check:</strong> The parallel result is less than the smallest resistor, 10 Ω. That is always true, and it is a quick way to catch a mistake.</li>
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
    <li><strong>Observation:</strong> A 30 percent rise in resistance simply from heating. This is why winding resistance must always be recorded with its temperature.</li>
  </ol>


  <!-- ═══════════════════════════════════════════════════════════
       VIVA QUESTIONS
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-viva">🎤 Viva and Interview Questions</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>These are the actual questions asked from this module.</strong> Read the question, try to answer in your head first, then check yourself against the model answer. Speaking the answer out loud once is worth reading it five times.</div></div>

  <table class="n-table">
    <tr><th>Question</th><th>Model Answer</th></tr>
    <tr><td><strong>What is electric current?</strong></td><td>The rate of flow of electric charge through a conductor, measured in amperes. One ampere is one coulomb per second.</td></tr>
    <tr><td><strong>Which direction does current flow?</strong></td><td>Conventional current flows positive to negative and is used in all diagrams. Electrons physically flow negative to positive. The convention was set before the electron was discovered.</td></tr>
    <tr><td><strong>What is voltage?</strong></td><td>The work done per unit charge in moving charge between two points. It is a potential difference, so it always exists between two points, never at one point alone.</td></tr>
    <tr><td><strong>Difference between EMF and potential difference?</strong></td><td>EMF is the voltage produced by the source on open circuit. PD is the voltage across the load when current flows. The difference is the drop across the source internal resistance.</td></tr>
    <tr><td><strong>State Ohm's Law.</strong></td><td>Current through a conductor is directly proportional to the voltage across it, provided temperature and physical conditions remain constant. So V equals I times R.</td></tr>
    <tr><td><strong>Give an example of a non-ohmic device.</strong></td><td>A diode. Its resistance is not constant, so its voltage-current graph is a curve, not a straight line.</td></tr>
    <tr><td><strong>What are the factors affecting resistance?</strong></td><td>Length, cross-sectional area, material resistivity, and temperature. R equals rho L over A.</td></tr>
    <tr><td><strong>Difference between resistance and resistivity?</strong></td><td>Resistance depends on the actual piece of wire and its dimensions. Resistivity is a property of the material itself, independent of size or shape.</td></tr>
    <tr><td><strong>Why does a bird on a live wire not get shocked?</strong></td><td>Both feet are at the same potential, so there is no potential difference across the bird and no current flows through it.</td></tr>
    <tr><td><strong>State Kirchhoff's Current Law.</strong></td><td>The sum of currents entering a junction equals the sum leaving it. It follows from conservation of charge.</td></tr>
    <tr><td><strong>State Kirchhoff's Voltage Law.</strong></td><td>Around any closed loop, the sum of EMFs equals the sum of voltage drops. It follows from conservation of energy.</td></tr>
    <tr><td><strong>Why is house wiring in parallel?</strong></td><td>So each load gets full rated voltage, each can be switched independently, and one failure does not kill the rest of the circuit.</td></tr>
    <tr><td><strong>Difference between power and energy?</strong></td><td>Power is the rate of doing work, measured in watts. Energy is the total work done over time, measured in kWh. Power is instantaneous, energy accumulates.</td></tr>
    <tr><td><strong>Difference between a wattmeter and an energy meter?</strong></td><td>A wattmeter reads instantaneous power in watts. An energy meter accumulates it over time and reads total energy in kWh.</td></tr>
    <tr><td><strong>Why is power transmitted at high voltage?</strong></td><td>For the same power, higher voltage means lower current. Since losses are I squared R, reducing current sharply reduces heat loss and voltage drop.</td></tr>
    <tr><td><strong>Why is AC preferred on ships?</strong></td><td>Voltage is easily transformed, alternators need no commutator, induction motors are rugged and low maintenance, and AC fault current is easier to break because it passes through zero.</td></tr>
    <tr><td><strong>Why is DC still needed on a ship?</strong></td><td>Batteries are DC, so emergency power, UPS, starting systems, alarms, control circuits and electronics all need DC.</td></tr>
    <tr><td><strong>What is frequency?</strong></td><td>The number of complete cycles per second, in hertz. On 50 Hz one cycle takes 20 milliseconds.</td></tr>
    <tr><td><strong>What is RMS value?</strong></td><td>The equivalent DC value that produces the same heating effect in a resistor. For a sine wave it is peak divided by root two, or 0.707 times peak.</td></tr>
    <tr><td><strong>Is 440 V the peak value?</strong></td><td>No, it is the RMS value. The peak is 1.414 times that, around 622 V, and that is what the insulation must withstand.</td></tr>
    <tr><td><strong>Why is the average value of a sine wave zero?</strong></td><td>Over a full cycle the positive and negative halves are equal and cancel. That is why average value is quoted over a half cycle instead.</td></tr>
    <tr><td><strong>What is power factor?</strong></td><td>The cosine of the phase angle between voltage and current, and also the ratio of kW to kVA. It shows how much of the supplied power does useful work.</td></tr>
    <tr><td><strong>Why is a loose connection dangerous?</strong></td><td>It has high contact resistance. Current is unchanged, so I squared R heat at that point rises sharply, causing overheating and a fire risk.</td></tr>
    <tr><td><strong>Does current flow in an open circuit?</strong></td><td>No. Current needs a complete closed path back to the source. In an open circuit the path is broken, so no current flows even though voltage is present.</td></tr>
  </table>


  <!-- ═══════════════════════════════════════════════════════════
       QUICK REVISION
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-quickrev">⚡ Quick Revision</div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Read this section the morning of your interview.</strong> Everything below is the compressed version of this module. If you can explain each line in your own words, you are ready.</div></div>

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

  <div class="n-crit"><div class="icon">🎯</div><div class="body"><strong>Final advice for this module.</strong> If you are asked something here and you genuinely do not know it, do not invent an answer. Say what you do know, then say honestly that you are not sure about the rest. Panels respect that far more than confident nonsense, and they will usually move on. But for the twenty concepts in the table above, there is no excuse. These are the ones every interviewer expects a serious candidate to have solid.</div></div>

  <div class="n-ok"><div class="icon">➡️</div><div class="body"><strong>Next module:</strong> F02, Electrical Safety and Earthing. That module carries even more weight than this one in a sponsorship interview, because it tells the panel whether you can be trusted around live equipment.</div></div>


  </div>
</div>
</div>`);

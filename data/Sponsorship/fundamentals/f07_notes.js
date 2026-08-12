window.loadNotes("F07", `<div class="view" id="view-notes-f07">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F07')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F07 - Electrical Machines: Overview</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 7 of 25 · Difficulty ★★☆☆☆ · Study Time 30-40 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-whatis')">What Is a Machine</button>
    <button class="anc-btn" onclick="jumpTo('s-duality')">Motor/Generator Duality</button>
    <button class="anc-btn" onclick="jumpTo('s-classification')">Classification Tree</button>
    <button class="anc-btn" onclick="jumpTo('s-construction')">Common Construction</button>
    <button class="anc-btn" onclick="jumpTo('s-onboard')">Where Used Onboard</button>
    <button class="anc-btn" onclick="jumpTo('s-ip')">IP Ratings</button>
    <button class="anc-btn" onclick="jumpTo('s-insulation')">Insulation Classes</button>
    <button class="anc-btn" onclick="jumpTo('s-duty')">Duty Types</button>
    <button class="anc-btn" onclick="jumpTo('s-interview')">Interview Answers</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">This is a short overview module, not a deep dive. By the end of it you should be able to state what a rotating electrical machine is and explain the motor/generator duality, draw the classification tree that sorts every machine you will meet into AC or DC and then into its family, name the parts common to almost any rotating machine, say where each machine type is typically found on board, read an IP rating digit by digit and state typical marine values, name the insulation classes in order with their maximum temperatures, and describe S1, S2 and S3 duty in outline. Detailed working theory, starting methods and protection are deliberately left out of this module: induction motor working theory is covered in <strong>F09</strong>, DC motor working theory in <strong>F10</strong>, motor starting in <strong>F11</strong>, and motor protection in <strong>F12</strong>. Cross-reference those modules rather than expecting the detail here.</p>

  <div class="n-h1" id="s-whatis">What a Machine Is</div>
  <p class="n-p">An electrical machine, in the sense used throughout this and the following modules, is a device that converts energy between the electrical and mechanical forms by the interaction of a magnetic field with current carrying conductors. Every rotating machine on a ship, whatever its type, is built on exactly two pieces of physics: a current in a magnetic field experiences a force (the basis of every motor), and a conductor moving through a magnetic field has an EMF induced in it (the basis of every generator). Nothing else is needed to build the whole family tree that follows.</p>

  <div class="n-h1" id="s-duality">The Motor/Generator Duality</div>
  <p class="n-p">A motor and a generator of a given type are, mechanically, the same machine. The construction, the windings, the magnetic circuit, none of it changes. What changes is only the <strong>direction of energy conversion</strong>.</p>
  <div class="n-formula">Mechanical power in, electrical power out = generator &nbsp;&nbsp;&nbsp;&nbsp; Electrical power in, mechanical power out = motor</div>
  <p class="n-p">Turn a DC motor's shaft by an external prime mover instead of feeding it current, and it becomes a DC generator, producing exactly the EMF equation you would use to design it as a motor, just used the other way round. The same is true of a synchronous machine: the main engine driven alternator that supplies the ship's board is, if you were to drive its shaft with the roles reversed, capable of running as a synchronous motor. Even an induction machine can be driven above synchronous speed to feed power back into the supply as an induction generator, though this is rarely used at sea.</p>
  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Say this in the interview.</strong> A motor and a generator are not two different machines, they are the same machine used in opposite directions. If asked to explain a generator having just described a motor, do not start again from scratch, explain the reversal of energy flow.</div></div>

  <div class="n-h1" id="s-classification">Classification Tree</div>
  <p class="n-p">Every rotating machine you will be asked about at the oral splits down this tree. Know it well enough to draw it from memory.</p>
  <div class="n-steps">
    <p class="n-p"><strong>AC machines</strong> split into two families: <strong>induction</strong> machines, where the rotor is fed with no external electrical connection and works entirely by what is induced into it (the squirrel cage motor being the dominant shipboard example, detailed in F09), and <strong>synchronous</strong> machines, where the rotor carries a DC excited field and locks in step with the rotating stator field, running at exactly synchronous speed with no slip (the main alternators supplying the ship's board being the prime example).</p>
    <p class="n-p"><strong>DC machines</strong> split by how the field winding is connected relative to the armature into <strong>shunt</strong> (field in parallel with the armature, near constant speed with load), <strong>series</strong> (field in series with the armature, very high starting torque but must never run unloaded), and <strong>compound</strong> (both field windings on the same poles, combining the two behaviours). All three are detailed in F10.</p>
  </div>
  <div class="n-formula">Machines &nbsp;→&nbsp; AC (Induction, Synchronous) &nbsp;|&nbsp; DC (Shunt, Series, Compound)</div>

  <div class="n-h1" id="s-construction">Construction Common to All Rotating Machines</div>
  <p class="n-p">In outline only, since the detail belongs to the module for each specific type. Almost every rotating machine, AC or DC, is built from the same handful of parts.</p>
  <table class="n-table">
    <tr><th>Part</th><th>Role, in outline</th></tr>
    <tr><td><strong>Stator</strong></td><td>The stationary outer part. Carries the fixed winding or the field poles, depending on machine type, and forms part of the magnetic circuit.</td></tr>
    <tr><td><strong>Rotor</strong></td><td>The rotating inner part, coupled to the shaft. Carries whichever winding or conductor arrangement the machine type calls for.</td></tr>
    <tr><td><strong>Air gap</strong></td><td>The small clearance between stator and rotor that the magnetic flux must cross. Kept as small as mechanically practical, since a larger gap demands more magnetising current for the same flux.</td></tr>
    <tr><td><strong>Bearings</strong></td><td>Support the rotor and shaft, allow free rotation, and hold the air gap uniform. A worn bearing that lets the rotor sag is a common practical cause of a rubbed stator.</td></tr>
    <tr><td><strong>Frame and enclosure</strong></td><td>The outer casing, which also sets the machine's IP rating and how it is cooled. See the IP Ratings section below.</td></tr>
  </table>
  <p class="n-p">What differs between an induction motor, a synchronous alternator and a DC motor is <strong>what sits on the rotor and the stator</strong>, and how each is wound and connected, not the presence of these basic parts. Holding this common skeleton in mind makes each type-specific module easier to place.</p>

  <div class="n-h1" id="s-onboard">Where Each Type Is Typically Used On Board</div>
  <table class="n-table">
    <tr><th>Machine type</th><th>Typical shipboard use</th></tr>
    <tr><td><strong>Squirrel cage induction motor</strong></td><td>The overwhelming majority of rotating machinery on a ship: pumps, fans, compressors, most auxiliaries. See the trap below for why.</td></tr>
    <tr><td><strong>Slip ring induction motor</strong></td><td>Larger machines historically needing high starting torque with controlled current, some older cargo winches and cranes, now largely superseded by VFD driven cage motors.</td></tr>
    <tr><td><strong>Synchronous machine</strong></td><td>The main and auxiliary alternators generating the ship's AC supply, driven by the diesel generators or shaft generator.</td></tr>
    <tr><td><strong>DC shunt motor</strong></td><td>Where steady, load-independent speed matters, workshop machine tools, some fans and blowers.</td></tr>
    <tr><td><strong>DC series motor</strong></td><td>Very high starting torque against a heavy stationary load: winches, windlasses, cranes, historically DC traction.</td></tr>
    <tr><td><strong>DC compound motor</strong></td><td>Cargo winches needing both high starting torque and safety running light.</td></tr>
  </table>
  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>The trap: candidates list motor types but cannot say why the squirrel cage dominates at sea.</strong> Listing induction, synchronous, shunt, series and compound answers "what types exist," not "why is one everywhere." The squirrel cage induction motor dominates shipboard machinery because it has <strong>no brushes and no slip rings</strong>, so there is nothing to spark, wear or need periodic inspection, which means it can be built with a <strong>sealed enclosure</strong> and survive a hot, humid, salt laden engine room with minimal maintenance for years. A DC motor or a slip ring induction motor exposes brush gear to exactly the environment that is hardest on it. Say this reasoning explicitly if asked why cage motors are preferred, a bare list of construction features does not answer the question actually being asked.</div></div>

  <div class="n-h1" id="s-ip">IP Ratings, Read Digit by Digit</div>
  <p class="n-p">IP stands for Ingress Protection, the standard code (IEC 60529, applied to rotating machines via IEC 60034-5) for how well an enclosure keeps solids and liquids out. It is always two digits after the letters IP, and each digit means something different. Read them separately, never as a single number.</p>
  <div class="n-formula">IP &nbsp; X &nbsp; Y &nbsp;&nbsp;&nbsp;&nbsp; X = first digit, protection against solids &nbsp;&nbsp;&nbsp;&nbsp; Y = second digit, protection against water</div>
  <table class="n-table">
    <tr><th>First digit (solids)</th><th>Protects against</th></tr>
    <tr><td>0</td><td>No protection</td></tr>
    <tr><td>2</td><td>Fingers and objects over 12 mm</td></tr>
    <tr><td>4</td><td>Objects over 1 mm, and most dust ingress</td></tr>
    <tr><td>5</td><td>Dust protected, limited ingress that does not interfere with operation</td></tr>
    <tr><td>6</td><td>Dust tight, no ingress at all</td></tr>
  </table>
  <table class="n-table">
    <tr><th>Second digit (water)</th><th>Protects against</th></tr>
    <tr><td>0</td><td>No protection</td></tr>
    <tr><td>4</td><td>Splashing water from any direction</td></tr>
    <tr><td>5</td><td>Low pressure water jets from any direction</td></tr>
    <tr><td>6</td><td>Powerful water jets, heavy seas</td></tr>
    <tr><td>7</td><td>Temporary immersion</td></tr>
  </table>
  <p class="n-p"><strong>Typical marine values.</strong> A motor in a dry, sheltered indoor space might only need <span class="n-val">IP44</span>. A motor in a normal engine room, where oil mist, dust and occasional washdown or drip must be kept out, is commonly specified at <span class="n-val">IP54</span> or <span class="n-val">IP55</span>, and IP55 is widely accepted by class societies as the standard for sheltered engine room machinery. Equipment mounted in the open, on deck, exposed to spray, rain and heavy seas needs a higher water rating again, commonly <span class="n-val">IP56</span> or above, with fully submersible locations such as a bilge well needing IP67 or higher. Do not over-specify: a higher IP enclosure is more expensive and, because it is more fully sealed, can run hotter, so the rating fitted should match what the installation location actually demands, not simply the highest number available.</p>
  <div class="n-crit"><span class="icon">⚠️</span><div class="body">The exact IP figure fitted to a given motor on a given ship is a design choice recorded on that motor's nameplate and the ship's equipment list, not a fixed universal number. Confirm from the nameplate or drawings rather than assuming a figure, if asked about a specific installation.</div></div>

  <div class="n-h1" id="s-insulation">Insulation Classes</div>
  <p class="n-p">The winding insulation in a machine is the weak link that heat destroys first. Each insulation class is defined by the <strong>maximum continuous temperature</strong> the material can withstand for its rated service life, ambient temperature plus temperature rise combined.</p>
  <table class="n-table">
    <tr><th>Class</th><th>Maximum temperature</th></tr>
    <tr><td><strong>A</strong></td><td><span class="n-val">105°C</span></td></tr>
    <tr><td><strong>E</strong></td><td><span class="n-val">120°C</span></td></tr>
    <tr><td><strong>B</strong></td><td><span class="n-val">130°C</span></td></tr>
    <tr><td><strong>F</strong></td><td><span class="n-val">155°C</span></td></tr>
    <tr><td><strong>H</strong></td><td><span class="n-val">180°C</span></td></tr>
  </table>
  <p class="n-p">Note the order is A, E, B, F, H, not alphabetical, a common trap when reciting it under pressure. Most modern shipboard motors are wound in <strong>Class F</strong> insulation but conservatively run at a <strong>Class B temperature rise</strong>, deliberately leaving a thermal margin between what the insulation can survive and what the motor is actually allowed to reach in normal service. That margin buys tolerance for a poorly ventilated space, a fouled cooler, or a higher than design ambient, all common at sea, without shortening the winding's life.</p>

  <div class="n-h1" id="s-duty">Duty Types, in Outline</div>
  <p class="n-p">A motor's rated output on its nameplate is only meaningful together with its duty type, since the same frame can be rated differently depending on how it is loaded over time.</p>
  <table class="n-table">
    <tr><th>Duty</th><th>Meaning</th></tr>
    <tr><td><strong>S1, continuous</strong></td><td>Operation at constant load for long enough to reach thermal equilibrium, and staying there indefinitely. Most shipboard pumps and fans are S1.</td></tr>
    <tr><td><strong>S2, short time</strong></td><td>Operation at constant load for a defined, limited period, not long enough to reach thermal equilibrium, followed by a rest period long enough to cool back to ambient before the next run.</td></tr>
    <tr><td><strong>S3, intermittent</strong></td><td>A repeating cycle of a load period and a rest period, neither long enough by itself to reach thermal equilibrium, expressed as a percentage cyclic duration factor. Typical of winches and windlasses, which work in short bursts with rest between.</td></tr>
  </table>

  <div class="n-h1" id="s-interview">Interview Answers, Rapid Fire</div>

  <p class="n-p"><strong>What is an electrical machine?</strong><br>
  A device converting energy between electrical and mechanical form using the interaction of a magnetic field with current carrying conductors, motor action when electrical power in gives mechanical power out, generator action when mechanical power in gives electrical power out.</p>

  <p class="n-p"><strong>What are the types of motor?</strong><br>
  Two broad families. AC motors split into induction, where the rotor has no external electrical connection and works entirely by induction, and synchronous, where a DC excited rotor locks in step with the field. DC motors split by field connection into shunt, series and compound. The squirrel cage induction motor dominates shipboard use because it has no brushes or slip rings, so it needs minimal maintenance and can be sealed against a wet, salty environment.</p>

  <p class="n-p"><strong>What is the IP value of motors?</strong><br>
  Not a single fixed value, it depends on where the motor is installed, and is read as two digits, first for solids protection, second for water protection. A dry indoor space might only need IP44. A normal engine room motor is commonly IP54 or IP55. Open deck equipment exposed to spray and heavy seas needs a higher figure again, commonly IP56 or above, with fully submersible locations needing IP67 or higher. The actual figure fitted is confirmed from the motor's nameplate.</p>

  <p class="n-p"><strong>Name the insulation classes in order.</strong><br>
  A, E, B, F, H, with maximum continuous temperatures of 105, 120, 130, 155 and 180 degrees Celsius. Most modern shipboard motors are wound in Class F but run conservatively at a Class B temperature rise, leaving a thermal margin.</p>

  <p class="n-p"><strong>What is the difference between S1, S2 and S3 duty?</strong><br>
  S1 is continuous duty, running at constant load long enough to reach thermal equilibrium and staying there. S2 is short time duty, a limited run at constant load followed by a full cool down before the next run. S3 is intermittent duty, a repeating cycle of load and rest periods, neither long enough alone to reach thermal equilibrium, typical of winches and windlasses.</p>

  <p class="n-p"><strong>Why does a squirrel cage motor dominate at sea rather than a DC or slip ring motor?</strong><br>
  No brushes and no slip rings, so nothing to spark, wear or need regular inspection, which allows a fully sealed enclosure that copes with a hot, humid, salt laden engine room with minimal maintenance. A DC or slip ring motor exposes brush gear directly to that same environment.</p>

  <p class="n-p"><strong>Is a generator a different machine from a motor?</strong><br>
  No, mechanically the same machine, only the direction of energy conversion differs: mechanical in and electrical out is generator action, electrical in and mechanical out is motor action.</p>

  <p class="n-p"><strong>Where does starting, protection and induction motor theory get covered, since it is not here?</strong><br>
  Induction motor working theory, synchronous speed, slip and torque-slip behaviour is in F09. Motor starting methods, DOL, star-delta, soft starter and VFD, is in F11. Motor protection is in F12. This module is only the overview and classification that sits above all three.</p>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F07')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the F07 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

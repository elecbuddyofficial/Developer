window.loadNotes("F20", `<div class="view" id="view-notes-f20">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F20')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F20 - Cables, Wiring & Drawings</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 20 of 25 · Difficulty ★★★☆☆ · Study Time 50-70 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-construction')">Cable Construction</button>
    <button class="anc-btn" onclick="jumpTo('s-insulation')">Insulation Materials</button>
    <button class="anc-btn" onclick="jumpTo('s-sizing')">Sizing & De-rating</button>
    <button class="anc-btn" onclick="jumpTo('s-firecable')">Flame Retardant vs Fire Resistant</button>
    <button class="anc-btn" onclick="jumpTo('s-glanding')">Glanding & Earthing</button>
    <button class="anc-btn" onclick="jumpTo('s-segregation')">Segregation</button>
    <button class="anc-btn" onclick="jumpTo('s-drawings')">Reading Drawings</button>
    <button class="anc-btn" onclick="jumpTo('s-symbols')">Symbols</button>
    <button class="anc-btn" onclick="jumpTo('s-tracing')">Tracing a Circuit</button>
    <button class="anc-btn" onclick="jumpTo('s-interview')">Interview Answers</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to name every layer of a marine cable and state what each does, explain the common insulation materials and their temperature ratings, work through cable ampacity de-rating, explain flame retardant versus fire resistant cable, explain why armour is earthed and cables are segregated, and read a single line diagram, schematic and wiring diagram for what each is for, including tracing a circuit from drawing to hardware.</p>

  <div class="n-h1" id="s-construction">Cable Construction: What Each Layer Is For</div>
  <p class="n-p">A marine power or control cable is built up in layers, and every layer earns its place. Working outward from the centre:</p>

  <table class="n-table">
    <tr><th>Layer</th><th>Function</th></tr>
    <tr><td><strong>Conductor</strong></td><td>Copper, almost always on ships rather than aluminium, for higher conductivity per cross section, better marine corrosion resistance, and more reliable small-size termination. Stranded rather than solid, so it stays flexible under vibration without the strands work-hardening and cracking.</td></tr>
    <tr><td><strong>Conductor screen (larger cables)</strong></td><td>A thin semi-conducting layer that smooths the electric field at the conductor surface, avoiding stress concentrations that could initiate insulation breakdown.</td></tr>
    <tr><td><strong>Insulation</strong></td><td>Withstands the working voltage and keeps the conductor electrically separated. Material and thickness are set by voltage rating and running temperature; covered below.</td></tr>
    <tr><td><strong>Bedding</strong></td><td>Applied over the laid-up cores before the armour. Purely mechanical: gives the armour wires a smooth surface and stops the hard armour digging into the insulation, especially at bends.</td></tr>
    <tr><td><strong>Armour</strong></td><td>Galvanised steel wire or steel/aluminium braid over the bedding. Mechanical protection against impact, crushing and abrasion in trays, penetrations and cargo handling areas. Often doubles as earth continuity conductor.</td></tr>
    <tr><td><strong>Sheath (outer covering)</strong></td><td>Outermost layer, extruded over the armour. Protects it from corrosion, weather and oil/chemical contact; its compound is chosen for flame and fire performance as much as weather resistance, covered below.</td></tr>
  </table>

  <p class="n-p">Not every cable has every layer. A small control cable in a protected space may skip armour and rely on conduit or trunking instead. A single core cable at higher voltage may have a metallic screen rather than armour, doing a similar job in a lighter construction.</p>

  <div class="n-h1" id="s-insulation">Insulation Materials and Temperature Ratings</div>
  <p class="n-p">Insulation is chosen for the voltage it must withstand and, just as importantly, the maximum conductor temperature it can tolerate without degrading. That rating sets how much current the cable can carry, since ampacity is fundamentally a heat problem: the conductor heats under load from I²R losses, and the limit is whatever temperature the insulation can stand continuously without ageing.</p>

  <table class="n-table">
    <tr><th>Material</th><th>Type</th><th>Max continuous conductor temp</th><th>Notes</th></tr>
    <tr><td><strong>PVC</strong> (polyvinyl chloride)</td><td>Thermoplastic</td><td><span class="n-val">70°C</span></td><td>Cheapest, widely used for lower voltage and lighter duty circuits. Softens on heating; short circuit withstand comparatively low.</td></tr>
    <tr><td><strong>XLPE</strong> (cross-linked polyethylene)</td><td>Thermoset</td><td><span class="n-val">90°C</span></td><td>Cross-linking turns the polyethylene into a thermoset, so unlike PVC it does not soften when hot. Higher continuous rating, better short circuit withstand. Standard choice for marine power cables today.</td></tr>
    <tr><td><strong>EPR</strong> (ethylene propylene rubber)</td><td>Thermoset (elastomer)</td><td><span class="n-val">90°C</span> typical, some to 105°C</td><td>More flexible than XLPE, suiting repeated flexing, and tolerates some emergency overload well. Traditionally common in marine and offshore installations.</td></tr>
  </table>

  <p class="n-p">Under short circuit conditions, lasting only a second or so, the insulation is allowed a brief excursion well above its continuous rating: broadly on the order of 160°C for PVC and up to around 250°C for XLPE and EPR. This is why thermoset materials dominate marine power cabling: a higher short circuit withstand means the cable survives a fault without permanent damage, which matters when a ship cannot simply pull into a manufacturer's yard for a replacement run.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Why the temperature rating matters beyond "how hot can it get".</strong> Current carrying capacity tables are built around this figure. A 90°C-rated XLPE cable carries more current than a 70°C-rated PVC cable of identical conductor size, simply because it has more thermal headroom before its insulation is damaged.</div></div>

  <div class="n-h1" id="s-sizing">Cable Sizing: Current Carrying Capacity, Voltage Drop, Short Circuit Withstand and De-rating</div>
  <p class="n-p">Choosing a cable size is not just "pick a conductor that carries the running current". A correctly sized cable must satisfy three checks, all of which have to pass.</p>

  <div class="n-h2">1. Current carrying capacity</div>
  <p class="n-p">The cable must be able to carry the full load current continuously without its conductor temperature exceeding the insulation's rating, under the actual installed conditions rather than a manufacturer's reference test bench conditions. This is where de-rating comes in, covered below.</p>

  <div class="n-h2">2. Voltage drop</div>
  <p class="n-p">Every metre of cable has resistance and, in AC circuits, reactance, so current flowing through it produces a voltage drop along its length. A cable can be thick enough to carry the current without overheating and still be too thin if the voltage drop at the far end starves the equipment of proper supply, particularly on long runs to remote spaces. Rules set a maximum allowable voltage drop, commonly a few percent of nominal voltage, checked separately from the thermal check. A long, lightly loaded run can fail on voltage drop while passing the ampacity check; the fix either way is a larger conductor.</p>

  <div class="n-h2">3. Short circuit withstand</div>
  <p class="n-p">During a fault the cable must survive the fault current for the time it takes upstream protection to clear it, without the conductor reaching a temperature that damages the insulation. This depends on conductor cross section, the insulation's short circuit temperature limit above, and the clearing time of the breaker or fuse protecting the circuit. A cable sized purely on running current can still fail this check if protection is slow or fault current is high, which is why cable sizing and protective device selection are done together.</p>

  <div class="n-h2">De-rating for grouping and ambient temperature</div>
  <p class="n-p">A cable's tabulated current rating, like a breaker's nameplate current in F13, is measured at one defined set of reference conditions: a reference ambient (commonly 30 to 40°C depending on the standard), laid singly in free air, with no other heat sources nearby. Change those conditions and the current it can actually carry safely falls below the table figure. The two factors that matter most on board:</p>

  <table class="n-table">
    <tr><th>Factor</th><th>Why it matters</th></tr>
    <tr><td><strong>Ambient temperature</strong></td><td>Engine room and switchboard room ambients run well above a cool reference figure. The hotter the surrounding air starts, the less headroom before I²R heating pushes the conductor to its insulation limit, so allowable current is reduced.</td></tr>
    <tr><td><strong>Grouping</strong></td><td>Cables run together in a tray each add heat and block each other's convection cooling. The more cables grouped, and the closer packed, the lower the current each is allowed, expressed as a grouping (bunching) de-rating factor on the base table value.</td></tr>
  </table>

  <p class="n-p">The logic is the same as MCCB de-rating in F13: a tabulated figure is only valid under the specific reference conditions it was measured against, and the job of whoever is sizing the cable is to apply correction factors for the real ambient and grouping rather than assume the table figure is automatically available. See F13's de-rating section for the fuller reasoning; the same principle applies here with different correction tables.</p>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>A likely interview framing.</strong> "How do you size a cable for a new load?" Walk through all three checks: ampacity corrected for actual ambient and grouping; voltage drop against the allowable percentage; short circuit withstand against fault current and clearing time. The final size is whichever check demands the largest cross section.</div></div>

  <div class="n-h1" id="s-firecable">Marine Cable Requirements: Flame Retardant vs Fire Resistant</div>
  <p class="n-p">These two terms sound similar and are often confused, but they describe different properties, tested by different standards, and required in different places on a ship.</p>

  <div class="n-h2">Flame retardant cable</div>
  <p class="n-p">A flame retardant cable has an outer sheath formulated so that, if exposed to flame, it does not actively sustain or propagate that flame along its own length once the ignition source is removed. The point is to stop a fire in one cable route spreading to adjacent cables. It is not designed to keep working while burning; once the fire has taken hold it fails electrically like any other cable. The test family is <strong>IEC 60332</strong>: single cable propagation (60332-1) and bunched cables in a tray (60332-3), the more realistic test for how cables are actually installed.</p>
  <p class="n-p">Flame retardant performance is the baseline expectation everywhere on a ship, since a cable route that propagates fire is a hazard regardless of what it feeds.</p>

  <div class="n-h2">Fire resistant cable</div>
  <p class="n-p">A fire resistant cable, also called fire survival or circuit integrity cable, keeps conducting while directly exposed to fire for a specified period at a specified temperature. This is much harder than simply not spreading fire: it typically relies on a mica or ceramic-forming tape wrapped around the conductor, fusing into an insulating barrier under flame that keeps the circuit closed after the polymer insulation has burned away. The standard is <strong>IEC 60331</strong>: a defined flame temperature for a defined duration while the cable stays energised and monitored for continuity.</p>
  <p class="n-p">Fire resistant cable is required, under SOLAS and classification society rules, for circuits that must stay operational during a fire because safety depends on them working while it happens, not just surviving it: emergency fire pumps, emergency lighting, fire detection and alarm, general alarm, emergency generator control, and steering gear in some arrangements.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>The clean interview distinction.</strong> Flame retardant cable stops a fire spreading along the cable route. Fire resistant cable keeps a circuit working while it is on fire. Every cable on the ship should be flame retardant as a baseline. Only circuits that must stay alive during a fire, fire pumps, emergency lighting, fire and gas detection, general alarm, get the additional fire resistant construction.</div></div>

  <div class="n-h1" id="s-glanding">Glanding and Earthing of Armour</div>
  <p class="n-p">Wherever an armoured cable enters equipment, a switchboard, junction box or bulkhead, it is terminated in a cable gland. A correctly fitted gland does two jobs, and it is easy to only think about the first.</p>

  <div class="n-h2">Mechanical retention and sealing</div>
  <p class="n-p">The gland clamps onto the outer sheath and grips the armour, so any pull or vibration is taken by the gland and armour, not the conductor terminations inside. Where it passes through a bulkhead or deck, it must also maintain that structure's fire and watertight integrity, which is why gland installation on penetrations is checked at survey.</p>

  <div class="n-h2">Earthing the armour</div>
  <p class="n-p">The armour is a substantial mass of conductive steel or aluminium running the cable's full length, and must be bonded to earth, normally at both ends through the gland's earthing arrangement, back to the equipment's earth bar and the ship's hull. This matters for several reasons:</p>
  <div class="n-steps">
    <p class="n-p">1. <strong>Fault current path.</strong> If the insulation fails and a live conductor touches the armour, a solidly earthed armour gives the fault current a low impedance path back to source, so the upstream device sees a large fault current and trips quickly. An unearthed armour leaves it, and everything touching it, at a dangerous potential with no fast trip.</p>
    <p class="n-p">2. <strong>Continuity of the earth system.</strong> On an insulated (IT) system, which most ships use, a bonded armour helps an earth fault monitor detect the first fault anywhere on the network, before a second fault turns it into a genuine short circuit.</p>
    <p class="n-p">3. <strong>Screening.</strong> A continuously earthed armour, especially near instrumentation runs, provides some electromagnetic screening, reducing interference into nearby signal cables.</p>
  </div>
  <p class="n-p">Armour continuity must be maintained along the entire run, including through joints, checked by a continuity test between gland earth tags at each end. A break partway along defeats the earthing at every point beyond it.</p>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>A common oral question.</strong> "Why must armour be earthed?" It gives an earth fault a low impedance return path so protection can detect and clear it quickly, rather than leaving the armour sitting at a dangerous potential. On an insulated hull system it also helps the earth fault monitor catch the first fault before it becomes a second, more dangerous one.</div></div>

  <div class="n-h1" id="s-segregation">Segregation of Power and Signal Cables</div>
  <p class="n-p">Power and signal or instrumentation cables are routed separately wherever practicable, kept apart in different trays, and where they must cross, made to cross at right angles rather than run parallel. The reason is electromagnetic interference.</p>
  <p class="n-p">A power cable carrying AC generates a changing magnetic field around it. Run a signal cable parallel and close to it, and that field induces a small unwanted voltage in the signal conductors, the way a transformer induces voltage in a nearby secondary winding. Signal circuits carry low level signals, millivolts to a few volts, so interference insignificant on a 440V power circuit can be a large fraction of the actual signal, corrupting readings or triggering false alarms.</p>
  <p class="n-p">Crossing at right angles minimises the length over which the fields overlap, since the induced effect depends on shared parallel length, not proximity at one point. Screened signal cable, earthed at one end only, gives further protection by intercepting the field before it reaches the conductors.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Say this plainly.</strong> Power cables induce interference into nearby signal cables through their magnetic field, the same physics as a transformer. Segregating them in separate trays, and crossing at right angles, keeps that interference low enough that instrumentation and control signals stay accurate.</div></div>

  <div class="n-h1" id="s-drawings">Reading a Drawing: Single Line, Schematic and Wiring</div>
  <p class="n-p">These three drawing types answer three different questions, and confusing them is a common way to waste time troubleshooting. Know what each one is actually for before you look for detail it was never meant to show.</p>

  <table class="n-table">
    <tr><th>Drawing type</th><th>What it answers</th><th>What it shows</th></tr>
    <tr><td><strong>Single line diagram</strong></td><td>"How is power distributed around the ship, at overview level?"</td><td>The whole generation and distribution system with one line representing all three phases: generators, switchboards, bus ties, main and feeder breakers, and the loads or sub-boards they feed, with cable and breaker ratings. Omits control wiring and terminal detail, so you see the overall architecture and how a trip propagates at a glance.</td></tr>
    <tr><td><strong>Schematic (circuit) diagram</strong></td><td>"How does this circuit actually work, functionally?"</td><td>The logical arrangement of a specific circuit: contacts, coils, relays, interlocks, timers, drawn for logical clarity rather than physical layout. Used to understand why a motor starts, why a protection trips, or what sequence an interlock requires.</td></tr>
    <tr><td><strong>Wiring diagram</strong></td><td>"Which physical terminal connects to which?"</td><td>Actual point to point connections: terminal numbers, strip layout, cable numbers and cores, showing where real wires physically go. The drawing in hand when tracing a wire, replacing a component, or reinstating connections.</td></tr>
  </table>

  <p class="n-p">Keep them straight this way: the single line diagram tells you where you are in the ship's power system, the schematic tells you why the circuit behaves the way it does, and the wiring diagram tells you where to put your meter probe or screwdriver.</p>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>The trap.</strong> Fault-finding from only a single line diagram is a common mistake; it was never meant to show control logic or terminal detail. Understanding system architecture from a wiring diagram is equally painful, since it has no logical grouping. Reach for the drawing that answers the actual question.</div></div>

  <div class="n-h1" id="s-symbols">Standard Electrical Symbols, in Outline</div>
  <p class="n-p">Drawings use a broadly standardised symbol set, based on IEC conventions, so a drawing from one yard is still readable by an engineer trained elsewhere. Recognising the common ones on sight is a practical skill, not just an exam topic.</p>

  <table class="n-table">
    <tr><th>Symbol represents</th><th>General convention</th></tr>
    <tr><td>Circuit breaker</td><td>A break in the line with a distinctive switch symbol, often boxed, reflecting its automatic tripping function.</td></tr>
    <tr><td>Fuse</td><td>A small rectangle in the line, sometimes with the rating marked alongside.</td></tr>
    <tr><td>Contactor / relay coil</td><td>A circle or small rectangle, with its contacts shown elsewhere on the drawing but cross-referenced by a label or contact number.</td></tr>
    <tr><td>Normally open / closed contact</td><td>A short break in the line for normally open, the same break with a diagonal stroke for normally closed, showing the contact's state with nothing energised.</td></tr>
    <tr><td>Motor</td><td>A circle with "M" inside, sometimes with phase count or type marking.</td></tr>
    <tr><td>Transformer</td><td>Two coupled coil symbols (loops), sometimes with core lines between them.</td></tr>
    <tr><td>Earth / ground</td><td>A short set of horizontal lines of decreasing length, or a hatched symbol, at the earth connection point.</td></tr>
    <tr><td>Lamp / indication light</td><td>A circle with a cross or filament mark inside, often colour-annotated (red running, green stopped, amber tripped).</td></tr>
    <tr><td>Cable / conductor count</td><td>Short diagonal tick marks across a line indicate the number of conductors or cores it represents.</td></tr>
  </table>

  <p class="n-p">Every drawing set should carry its own legend, and where a manufacturer uses a non-standard symbol, that legend is the authority, not memory. Confirm against it on an unfamiliar drawing set rather than guessing from habit.</p>

  <div class="n-h1" id="s-tracing">Tracing a Circuit From a Drawing to the Actual Hardware</div>
  <p class="n-p">This is a practical skill examiners like to probe, because it is exactly what an ETO does during real troubleshooting: start with a drawing, end with a hand on the right terminal.</p>

  <div class="n-steps">
    <p class="n-p">1. <strong>Establish where you are in the system first.</strong> Use the single line diagram to identify which switchboard, feeder and breaker the circuit comes from, so you know what to isolate.</p>
    <p class="n-p">2. <strong>Understand the logic before touching anything.</strong> Read the schematic: what has to be true for a contactor to pull in, what interlocks exist, what sequence applies. Trying to trace wiring before understanding the logic means you cannot tell a genuine fault from normal behaviour you do not yet recognise.</p>
    <p class="n-p">3. <strong>Get the terminal and cable references from the wiring diagram.</strong> Identify the cable number, core number and terminal numbers at each end for the point you need to test.</p>
    <p class="n-p">4. <strong>Physically locate the terminal strip or component.</strong> Cross-reference the drawing's panel reference to the actual location, using equipment labelling and terminal box tags.</p>
    <p class="n-p">5. <strong>Verify with a meter before assuming.</strong> Confirm continuity, voltage or resistance matches what the drawing and fault symptom suggest, rather than assuming the drawing is current. Ships accumulate field modifications that do not always reach the master drawing set.</p>
    <p class="n-p">6. <strong>Isolate correctly before working.</strong> Once the point is identified, isolate at the correct upstream breaker or fuse, confirmed dead with a meter, before any physical work, following permit to work and lock-out procedure.</p>
  </div>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Worth saying explicitly.</strong> Jumping straight to the wiring diagram and pulling wires without understanding the schematic logic first is how genuine faults get missed and good components get needlessly replaced. The hierarchy exists so troubleshooting goes from the general picture down to the specific terminal, not the reverse.</div></div>

  <div class="n-h1" id="s-interview">Interview Answers, Rapid Fire</div>

  <p class="n-p"><strong>Name the layers of an armoured cable and what each does.</strong><br>
  Conductor for carrying current, insulation to withstand working voltage, bedding to protect the insulation from the armour, armour for mechanical protection and often earth continuity, and an outer sheath protecting the armour and providing the weather and fire performance barrier.</p>

  <p class="n-p"><strong>What is the difference between PVC and XLPE insulation?</strong><br>
  PVC is a thermoplastic rated to 70°C continuous and softens under heat. XLPE is cross-linked into a thermoset during manufacture, rated to 90°C, and does not soften when hot, giving a much higher short circuit withstand too. XLPE is the modern standard for marine power cable for those reasons.</p>

  <p class="n-p"><strong>What three checks does a cable have to pass when it is sized?</strong><br>
  Current carrying capacity corrected for actual ambient and grouping, voltage drop over the run length against the allowable percentage, and short circuit withstand for fault current and upstream clearing time. The final size is whichever check demands the largest conductor.</p>

  <p class="n-p"><strong>Why does a cable's current rating need de-rating on board?</strong><br>
  The tabulated rating is measured at a reference ambient with the cable laid singly. A hotter actual ambient, or grouping loaded cables in one tray, both reduce the current the cable can actually carry without exceeding its insulation limit, the same logic as MCCB de-rating.</p>

  <p class="n-p"><strong>What is the difference between flame retardant and fire resistant cable?</strong><br>
  Flame retardant, tested to IEC 60332, does not propagate fire along its own length once the ignition source is removed. Fire resistant, tested to IEC 60331, keeps conducting while actually on fire. Flame retardant is the baseline everywhere on board; fire resistant is required for circuits that must keep working during a fire, such as emergency fire pumps, emergency lighting and fire detection.</p>

  <p class="n-p"><strong>Why must cable armour be earthed?</strong><br>
  So an earth fault has a low impedance path back to source, letting protection detect and trip quickly, instead of leaving the armour floating at a dangerous potential. On an insulated hull system it also supports the earth fault monitor catching the first fault before a second one becomes a short circuit.</p>

  <p class="n-p"><strong>Why are power and signal cables segregated?</strong><br>
  A power cable's changing magnetic field induces unwanted voltage into a nearby parallel signal cable, the same principle as a transformer. Signal circuits run at low levels, so induced interference can be a large fraction of the real signal, corrupting readings or causing false alarms. Separate routing, and crossing at right angles where unavoidable, keeps coupling low.</p>

  <p class="n-p"><strong>What is the difference between a single line diagram, a schematic and a wiring diagram?</strong><br>
  A single line diagram shows overall power distribution architecture for the system at a glance. A schematic shows a circuit's functional logic, drawn for clarity rather than physical layout. A wiring diagram shows the actual physical terminal to terminal connections, used when tracing or reconnecting wiring.</p>

  <p class="n-p"><strong>How would you trace a circuit from a drawing to the actual hardware?</strong><br>
  Start with the single line diagram to establish switchboard and feeder, read the schematic for the intended logic, get cable and terminal references from the wiring diagram, physically locate that terminal, verify with a meter rather than assuming the drawing is current, then isolate correctly before any physical work.</p>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F20')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the F20 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

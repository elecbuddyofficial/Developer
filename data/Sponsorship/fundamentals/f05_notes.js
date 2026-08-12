window.loadNotes("F05", `<div class="view" id="view-notes-f05">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F05')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F05 - Electromagnetism and Generation</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 5 of 25 · Difficulty ★★★☆☆ · Study Time 75-90 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-magfield')">Magnetic Field</button>
    <button class="anc-btn" onclick="jumpTo('s-flux')">Flux &amp; Flux Density</button>
    <button class="anc-btn" onclick="jumpTo('s-mmf')">MMF &amp; Reluctance</button>
    <button class="anc-btn" onclick="jumpTo('s-faraday')">Faraday's Laws</button>
    <button class="anc-btn" onclick="jumpTo('s-lenz')">Lenz's Law</button>
    <button class="anc-btn" onclick="jumpTo('s-fleming')">Fleming's Rules</button>
    <button class="anc-btn" onclick="jumpTo('s-self-ind')">Self Inductance</button>
    <button class="anc-btn" onclick="jumpTo('s-mutual-ind')">Mutual Inductance</button>
    <button class="anc-btn" onclick="jumpTo('s-emf-eq')">EMF Equation</button>
    <button class="anc-btn" onclick="jumpTo('s-construction')">Alternator Construction</button>
    <button class="anc-btn" onclick="jumpTo('s-working')">Generation, Step by Step</button>
    <button class="anc-btn" onclick="jumpTo('s-types')">Salient vs Cylindrical</button>
    <button class="anc-btn" onclick="jumpTo('s-excitation')">Excitation Systems</button>
    <button class="anc-btn" onclick="jumpTo('s-nameplate')">Alternator Nameplate</button>
    <button class="anc-btn" onclick="jumpTo('s-units')">Units &amp; Formulae</button>
    <button class="anc-btn" onclick="jumpTo('s-numericals')">Worked Numericals</button>
    <button class="anc-btn" onclick="jumpTo('s-viva')">Viva Questions</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
    <button class="anc-btn" onclick="jumpTo('s-summary')">Module Summary</button>
  </div>

  <div class="note-content">


  <!-- OBJECTIVES -->
  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to describe a magnetic field and explain flux and flux density to the standard, define magnetomotive force and reluctance and see the magnetic circuit's parallel with Ohm's Law, state Faraday's Laws and Lenz's Law and explain why the minus sign in Faraday's equation matters, apply Fleming's Right Hand and Left Hand Rules without hesitation and without confusing them, explain self and mutual inductance physically, derive and apply the EMF equation of an alternator, describe the construction of a rotating-field alternator part by part with the purpose of each component, explain step by step how rotating a field inside a stator produces a three-phase AC output, distinguish salient pole from cylindrical rotor construction, describe how an alternator is excited, and read and explain every figure on an alternator's nameplate.</p>
  <p class="n-p">Everything that generates electricity on a ship, and almost everything that uses it, is a magnetic machine at its core. F01 established charge, voltage, current and resistance; this module is where those quantities are turned into rotating machines. Every later module on transformers, motors, protection and generators leans directly on the principles covered here, so this is one of the most heavily tested modules in any sponsorship interview.</p>


  <!-- MAGNETIC FIELD -->
  <div class="n-h1" id="s-magfield">The Magnetic Field</div>
  <p class="n-p"><strong>Definition:</strong> the region of space around a magnet or a current-carrying conductor within which a magnetic force can be detected. Represented visually by magnetic field lines, imaginary lines showing the direction a free north pole would move if placed in the field. <strong>Explanation, simple English:</strong> just as a mass creates a gravitational field that pulls other masses toward it, a magnet or a moving charge creates a magnetic field that exerts a force on other moving charges or magnetic materials nearby.</p>
  <table class="n-table">
    <tr><th>Source</th><th>Field Pattern</th><th>Direction Rule</th></tr>
    <tr><td>Permanent magnet</td><td>Lines leave north pole, enter south pole, closed loops</td><td>North to south, outside the magnet</td></tr>
    <tr><td>Straight current-carrying conductor</td><td>Concentric circles around the conductor</td><td class="hl">Right-Hand Grip Rule: thumb points along current, fingers curl in field direction</td></tr>
    <tr><td>Current-carrying coil (solenoid)</td><td>Behaves like a bar magnet, field lines through the core</td><td>Curl fingers in current direction, thumb points to north pole</td></tr>
  </table>
  <p class="n-p"><strong>Why it matters:</strong> every generator, motor, transformer and relay on a ship works because a current-carrying conductor creates a magnetic field, or a changing magnetic field creates a current. Magnetism is not a side topic to electricity; on a ship, it is the mechanism that converts mechanical energy into electrical energy and back again at every motor and generator on board.</p>


  <!-- FLUX -->
  <div class="n-h1" id="s-flux">Magnetic Flux and Flux Density</div>
  <p class="n-p"><strong>Definition, flux:</strong> the total number of magnetic field lines passing through a given area. SI unit: <strong>weber (Wb)</strong>. <strong>Definition, flux density:</strong> the amount of flux per unit area, a measure of how concentrated the field is at a point. SI unit: <strong>tesla (T)</strong>, equal to one weber per square metre.</p>
  <div class="n-formula">B = Φ / A<div class="label">B = flux density (T) · Φ = flux (Wb) · A = cross-sectional area (m²)</div></div>
  <p class="n-p"><strong>Analogy:</strong> flux is the total amount of water flowing through a river cross-section; flux density is how tightly packed that flow is at a narrow point in the river versus a wide point. Squeezing the same total flow through a narrower area produces a higher flux density, exactly why a machine's air gap and core are shaped to concentrate flux where it is needed.</p>
  <p class="n-p"><strong>Shipboard:</strong> a generator or motor core is designed to keep flux density within the iron's saturation limit, typically 1.4-1.8 tesla for machine cores. Push flux density beyond saturation and the core stops responding proportionally to further current, magnetising current rises sharply for little extra flux, and losses climb, which is one reason machines must not be run at excessive voltage relative to frequency (a V/f limit, referenced again in F07 and F09).</p>


  <!-- MMF -->
  <div class="n-h1" id="s-mmf">Magnetomotive Force and Reluctance</div>
  <p class="n-p"><strong>Definition, MMF:</strong> the "magnetic pressure" that drives flux around a magnetic circuit, produced by current flowing through a coil of wire. SI unit: <strong>ampere-turn (AT)</strong>. <strong>Definition, reluctance:</strong> the opposition a magnetic circuit offers to the establishment of flux, the magnetic equivalent of electrical resistance.</p>
  <div class="n-formula">MMF = N × I<div class="label">N = number of turns · I = current (A)</div></div>
  <div class="n-formula">Φ = MMF / S<div class="label">Φ = flux (Wb) · S = reluctance (AT/Wb)</div></div>
  <table class="n-table">
    <tr><th>Magnetic Circuit</th><th>Electric Circuit</th></tr>
    <tr><td>MMF (ampere-turns)</td><td class="ok">EMF (volts)</td></tr>
    <tr><td>Flux Φ (weber)</td><td class="hl">Current I (amperes)</td></tr>
    <tr><td>Reluctance S</td><td>Resistance R</td></tr>
  </table>
  <p class="n-p"><strong>Why the analogy exists:</strong> the magnetic circuit obeys a relationship structurally identical to Ohm's Law, Φ = MMF / S mirrors I = V / R exactly. This is genuinely useful, not just a memory device: it lets an engineer reason about air gaps, laminated cores, and flux paths using intuition already built from electrical circuits. A larger air gap sharply increases reluctance, since air has far higher reluctance than iron, which is why machine air gaps are kept as small as mechanically practical.</p>


  <!-- FARADAY -->
  <div class="n-h1" id="s-faraday">Faraday's Laws of Electromagnetic Induction</div>
  <p class="n-p">The single most important principle in this module, every generator on every ship afloat exists because of these two laws.</p>
  <div class="n-h2">Faraday's First Law</div>
  <p class="n-p"><strong>Definition:</strong> whenever a conductor is placed in a changing magnetic field, or a conductor moves through a magnetic field such that it cuts flux lines, an EMF is induced in that conductor.</p>
  <div class="n-h2">Faraday's Second Law</div>
  <p class="n-p"><strong>Definition:</strong> the magnitude of the induced EMF is directly proportional to the rate of change of flux linkage.</p>
  <div class="n-formula">e = -N × (dΦ / dt)<div class="label">e = induced EMF (V) · N = number of turns · dΦ/dt = rate of change of flux (Wb/s) · negative sign is Lenz's Law</div></div>
  <p class="n-p"><strong>Explanation, simple English:</strong> nothing happens to a stationary conductor sitting in a steady, unchanging magnetic field, no matter how strong that field is. An EMF only appears when the flux linking the conductor is changing, either the conductor physically moves through the field (as in a rotating generator), or the field itself changes strength (as in a transformer with alternating current). This is the single fact that explains why a generator must rotate and a transformer must run on AC, never DC.</p>

  <div class="n-crit"><div class="icon">❌</div><div class="body"><strong>Interview trap:</strong> "Will a stationary conductor next to a stationary, unchanging strong permanent magnet generate any voltage?" No, regardless of how strong the magnet is. Faraday's Law depends entirely on <em>change</em> of flux linkage, not on the magnitude of flux present. A very strong but constant field induces exactly zero EMF in a stationary conductor. Candidates who answer based on field strength alone, rather than rate of change, are marked down immediately.</div></div>

  <p class="n-p"><strong>Shipboard:</strong> this is the working principle behind every alternator, every transformer, and every induction motor on the vessel. In an alternator, the rotor's magnetic field physically rotates past stationary stator windings, continuously changing the flux each winding links, inducing an AC voltage. In a transformer, the flux itself alternates because the supply current alternates; there is no rotation at all, only a changing field, which is exactly why a transformer cannot work on steady DC.</p>


  <!-- LENZ -->
  <div class="n-h1" id="s-lenz">Lenz's Law</div>
  <p class="n-p"><strong>Definition:</strong> the direction of an induced EMF, and the current it drives, is always such as to oppose the change in flux that produced it. This is the physical meaning of the minus sign in Faraday's equation above.</p>
  <p class="n-p"><strong>Why it exists:</strong> Lenz's Law is a direct statement of conservation of energy applied to electromagnetism. If the induced current instead <em>assisted</em> the change producing it, the effect would reinforce its own cause, flux would run away uncontrolled, and energy would appear from nowhere, which nothing in nature permits. Opposition is not a coincidence; it is required for energy to balance.</p>
  <p class="n-p"><strong>Working principle, step by step, moving a magnet toward a coil:</strong></p>
  <ol class="n-steps">
    <li>The magnet approaches the coil, flux linking the coil increases.</li>
    <li>An EMF is induced, driving a current in the coil.</li>
    <li>By Lenz's Law, that induced current creates its own magnetic field opposing the increasing flux, meaning the coil's near face becomes the same pole as the approaching magnet's face, repelling it.</li>
    <li>Work must be done against this repulsion to keep pushing the magnet in; that mechanical work is exactly what becomes the electrical energy delivered by the induced current.</li>
  </ol>
  <p class="n-p"><strong>Shipboard:</strong> Lenz's Law is why a generator's prime mover must supply more mechanical power the moment more electrical load is connected, the increased induced current opposes the rotor's motion (as extra torque needed to overcome it), so the diesel engine driving the alternator genuinely works harder as electrical load increases, exactly as a chief engineer observes on the fuel rack when a large motor starts.</p>


  <!-- FLEMING -->
  <div class="n-h1" id="s-fleming">Fleming's Rules</div>
  <p class="n-p">Two closely related but opposite rules, both using the same three fingers of a hand held mutually perpendicular, and confusing them is one of the most common interview slips.</p>
  <table class="n-table">
    <tr><th>Rule</th><th>Hand</th><th>Used For</th><th>Thumb</th><th>First Finger</th><th>Second Finger</th></tr>
    <tr><td>Right Hand Rule</td><td class="ok">Right hand</td><td>Generator, finding induced current direction</td><td>Motion of conductor</td><td>Field (N to S)</td><td>Induced Current</td></tr>
    <tr><td>Left Hand Rule</td><td class="hl">Left hand</td><td>Motor, finding force/motion direction</td><td>Force / Motion produced</td><td>Field (N to S)</td><td>Current</td></tr>
  </table>
  <p class="n-p"><strong>Memory trick:</strong> "generators Right, motors Left", alphabetically <strong>g</strong>enerator comes before <strong>m</strong>otor, and <strong>r</strong>ight comes before <strong>l</strong>eft in the same relative order, so pair them: right hand with generator, left hand with motor. Another common trick: "FBI" for the left hand motor rule, Force, B (field), I (current), spelling out thumb, first finger, second finger in order.</p>
  <div class="n-crit"><div class="icon">❌</div><div class="body"><strong>Interview trap:</strong> "Which hand rule applies to a generator?" Candidates under pressure frequently answer "left hand" by reflex, since Fleming's Left Hand Rule is more commonly quoted in general physics teaching for motors. On a ship, generators vastly outnumber the specific need for this rule day to day, but the correct pairing must be automatic: Right Hand for generators (effect: induced EMF, from a known cause: motion in a field), Left Hand for motors (effect: force/motion, from a known cause: current in a field).</div></div>
  <p class="n-p"><strong>Interview answer:</strong> "Fleming's Right Hand Rule finds the direction of induced current in a generator: thumb for motion, first finger for field, second finger for current. Fleming's Left Hand Rule finds the direction of force in a motor: thumb for force, first finger for field, second finger for current. I remember it as right hand for generators, left hand for motors."</p>


  <!-- SELF INDUCTANCE -->
  <div class="n-h1" id="s-self-ind">Self Inductance</div>
  <p class="n-p"><strong>Definition:</strong> the property of a coil by which a changing current through it induces an EMF in the same coil, opposing the change that caused it. SI unit: <strong>henry (H)</strong>. One henry is the inductance of a coil in which a current changing at one ampere per second induces one volt.</p>
  <div class="n-formula">e = -L × (dI / dt)<div class="label">e = self-induced EMF (V) · L = self-inductance (H) · dI/dt = rate of change of current (A/s)</div></div>
  <p class="n-p"><strong>Explanation:</strong> as current in a coil changes, the flux it produces changes with it, and by Faraday's Law that changing self-flux induces an EMF back into the very coil producing it. By Lenz's Law that self-induced EMF always opposes the change, opposing a rise in current, and opposing a fall in current, which is why an inductor resists sudden changes in current far more than it resists steady current.</p>
  <p class="n-p"><strong>Shipboard:</strong> self-inductance is exactly why switching off a large inductive load, a motor, a contactor coil, a relay, produces a voltage spike far higher than the supply voltage: the collapsing field tries to maintain the current that was flowing, and with the circuit suddenly opened, that energy discharges as a brief high-voltage arc across the opening contacts. This is the reason contactors and relays are fitted with suppression devices (freewheel diodes on DC coils, RC snubbers on AC coils) to protect contacts and nearby electronics.</p>


  <!-- MUTUAL INDUCTANCE -->
  <div class="n-h1" id="s-mutual-ind">Mutual Inductance</div>
  <p class="n-p"><strong>Definition:</strong> the property by which a changing current in one coil induces an EMF in a second, magnetically linked but electrically separate coil. SI unit: <strong>henry (H)</strong>.</p>
  <div class="n-formula">e<sub>2</sub> = -M × (dI<sub>1</sub> / dt)<div class="label">e<sub>2</sub> = EMF induced in the second coil · M = mutual inductance (H) · dI<sub>1</sub>/dt = rate of change of current in the first coil</div></div>
  <p class="n-p"><strong>Why it matters:</strong> mutual inductance is the entire working principle of a transformer, covered fully in F06. Two coils, wound on a common iron core with no electrical connection between them, transfer energy purely through the changing magnetic field one induces in the other. It is also the principle behind current transformers used for metering and protection throughout a ship's switchboard.</p>
  <table class="n-table">
    <tr><th>Self Inductance</th><th>Mutual Inductance</th></tr>
    <tr><td class="ok">EMF induced in the same coil carrying the changing current</td><td class="hl">EMF induced in a separate, magnetically coupled coil</td></tr>
    <tr><td>Symbol L</td><td>Symbol M</td></tr>
    <tr><td>Relevant to: chokes, relay coils, contactors</td><td>Relevant to: transformers, current transformers, ignition coils</td></tr>
  </table>


  <!-- EMF EQUATION -->
  <div class="n-h1" id="s-emf-eq">EMF Equation of an Alternator</div>
  <p class="n-p">The formula that ties together everything above into the single most tested numerical topic for generator theory. It gives the RMS value of the voltage induced per phase in an alternator winding.</p>
  <div class="n-formula">E = 4.44 × f × Φ × N × K<sub>w</sub><div class="label">E = RMS EMF per phase (V) · f = frequency (Hz) · Φ = flux per pole (Wb) · N = turns per phase · K<sub>w</sub> = winding factor</div></div>
  <p class="n-p"><strong>Where the 4.44 comes from:</strong> it is not an arbitrary constant. If flux varies sinusoidally, the average rate of change of flux over a quarter cycle, combined with the RMS-to-average conversion factor for a sine wave (1.11, from F01's RMS work), and a factor of 4 from the quarter-cycle relationship, multiply out to 4 × 1.11 = 4.44. Every term in the constant traces back to properties of a sine wave already covered in earlier modules.</p>
  <p class="n-p"><strong>Winding factor K<sub>w</sub>:</strong> a factor slightly less than 1 that accounts for the winding not being perfectly concentrated at a single point per pole, but distributed and often short-pitched across several slots, a design deliberately chosen to produce a more sinusoidal output waveform and reduce harmonics, at the small cost of slightly reduced EMF. Typical values are around 0.95-0.96.</p>
  <p class="n-p"><strong>Shipboard:</strong> this equation is exactly why an alternator's output voltage depends on three things an ETO can actually influence or must monitor: frequency (locked to engine/turbine speed and pole count), flux (controlled by field/excitation current through the automatic voltage regulator), and the fixed winding design. Adjusting the AVR changes flux Φ, which is precisely how output voltage is regulated without changing speed or frequency.</p>


  <!-- CONSTRUCTION -->
  <div class="n-h1" id="s-construction">Construction of a Marine Alternator</div>
  <p class="n-p">Nearly all marine alternators are of the <strong>rotating field, stationary armature</strong> type: the field (electromagnet) rotates, and the armature (the winding that supplies the load) stays fixed. This is the opposite arrangement to a small DC generator, and the reason why is explained after the parts below.</p>
  <table class="n-table">
    <tr><th>Part</th><th>Located</th><th>Purpose</th></tr>
    <tr><td>Stator</td><td>Fixed outer frame</td><td>Holds the stationary three-phase armature winding where output EMF is induced</td></tr>
    <tr><td>Stator winding (armature)</td><td>Slots in the stator core</td><td class="ok">Three-phase winding in which the load current flows; connects directly to the switchboard</td></tr>
    <tr><td>Rotor</td><td>Rotating shaft, driven by prime mover</td><td>Carries the field winding that produces the rotating magnetic flux</td></tr>
    <tr><td>Field (rotor) winding</td><td>Wound on the rotor poles</td><td class="hl">Carries DC excitation current, creates the rotating magnetic field</td></tr>
    <tr><td>Slip rings and brushes (or exciter)</td><td>On the shaft, or replaced by a brushless exciter</td><td>Deliver DC field current to the rotating field winding</td></tr>
    <tr><td>Prime mover coupling</td><td>Shaft end</td><td>Connects to the diesel engine, turbine, or shaft generator drive</td></tr>
    <tr><td>Laminated core (stator and rotor)</td><td>Iron core, both members</td><td>Thin insulated laminations minimise eddy current loss (detailed in F23)</td></tr>
    <tr><td>Cooling fan / air or water cooling system</td><td>Shaft-mounted or external</td><td>Removes I²R and iron losses generated during operation</td></tr>
  </table>

  <div class="n-h2">Why the Field Rotates, Not the Armature</div>
  <p class="n-p">A small DC generator has a rotating armature because a commutator is needed anyway to convert AC to DC, and slip rings would defeat that purpose. A three-phase AC alternator has no such requirement, and rotating the low-power field winding instead of the high-power armature brings clear engineering advantages, particularly at the currents and voltages a ship's main generator produces.</p>
  <table class="n-table">
    <tr><th>Aspect</th><th>Rotating Armature (rare)</th><th>Rotating Field (standard)</th></tr>
    <tr><td>What must pass through slip rings/brushes</td><td class="bad">Full load current, at full output voltage</td><td class="ok">Small DC field current only</td></tr>
    <tr><td>Insulation stress on rotating windings</td><td class="bad">High, full output voltage present</td><td class="ok">Low, only field voltage present</td></tr>
    <tr><td>Mechanical robustness</td><td>Lower, heavier rotating winding</td><td class="ok">Higher, rotor can be built compact and strong</td></tr>
    <tr><td>Maintenance of sliding contacts</td><td class="bad">Heavy sparking risk at full load current</td><td class="ok">Light sparking, low current, or none at all if brushless</td></tr>
    <tr><td>Practical use</td><td>Small, low-power machines only</td><td>Virtually all modern alternators, marine and shore</td></tr>
  </table>
  <p class="n-p"><strong>Interview answer:</strong> "Marine alternators use a rotating field and a stationary armature so that only the small DC field current passes through the slip rings, not the full output current at full voltage. That keeps insulation stress and brush wear low, and lets the high-power armature winding be solidly fixed in the stator instead of having to survive continuous rotation under full load."</p>


  <!-- WORKING STEP BY STEP -->
  <div class="n-h1" id="s-working">How Three-Phase AC Is Generated, Step by Step</div>
  <ol class="n-steps">
    <li>The prime mover, diesel engine or turbine, rotates the rotor shaft at a speed fixed by the required frequency and pole count.</li>
    <li>DC excitation current flows through the rotor field winding, creating a fixed magnetic field pattern that rotates with the shaft.</li>
    <li>As the rotor turns, its magnetic field sweeps past the three stationary stator windings, which are physically arranged 120 electrical degrees apart around the stator.</li>
    <li>Each stator winding experiences a continuously changing flux linkage as the rotating field passes it, and by Faraday's Law, an EMF is induced in each winding.</li>
    <li>Because the three windings are spaced 120° apart, the three induced EMFs are also 120° apart in time, producing a balanced three-phase output.</li>
    <li>The magnitude of each phase EMF follows the EMF equation above; its frequency is fixed by rotor speed and pole count via f = PN/120, from F01.</li>
    <li>The three-phase output is taken from the stator winding terminals directly to the main switchboard, with no commutator or rectification needed since the output is meant to remain AC.</li>
  </ol>
  <p class="n-p"><strong>Shipboard:</strong> this is precisely the sequence an ETO restates when explaining, during an oral exam, "how does your ship's generator actually make electricity." Every stage above maps to something physically inspectable on the machine: the coupling to the engine, the slip rings or exciter, the rotor poles, the stator winding, and the output terminals to the switchboard.</p>


  <!-- SALIENT VS CYLINDRICAL -->
  <div class="n-h1" id="s-types">Salient Pole vs Cylindrical Rotor</div>
  <table class="n-table">
    <tr><th>Aspect</th><th>Salient Pole Rotor</th><th>Cylindrical (Non-Salient) Rotor</th></tr>
    <tr><td>Shape</td><td>Projecting, distinct poles</td><td class="ok">Smooth cylindrical, poles embedded in slots</td></tr>
    <tr><td>Typical speed</td><td class="hl">Low to medium speed</td><td>High speed</td></tr>
    <tr><td>Pole count</td><td>Many poles (4 and above)</td><td>Usually 2 or 4 poles</td></tr>
    <tr><td>Mechanical strength at speed</td><td>Lower, not suited to very high speed</td><td class="ok">Higher, withstands high centrifugal stress</td></tr>
    <tr><td>Typical prime mover</td><td class="ok">Diesel engine, water turbine</td><td class="hl">Steam turbine, gas turbine</td></tr>
    <tr><td>Marine relevance</td><td class="ok">Most diesel-driven marine alternators</td><td>Turbo-alternators on some LNG/steam vessels</td></tr>
  </table>
  <p class="n-p"><strong>Why the distinction matters:</strong> a diesel engine's practical speed range is comparatively low and torque-heavy, well suited to a robust, many-poled salient rotor. A steam or gas turbine runs at very high speed, where a smooth cylindrical rotor is essential to survive the resulting centrifugal forces without the mechanical weak points that projecting poles would introduce. Choosing the wrong rotor type for the prime mover is not a design option; the two are matched by physics.</p>


  <!-- EXCITATION -->
  <div class="n-h1" id="s-excitation">Excitation Systems</div>
  <p class="n-p"><strong>Definition:</strong> the system that supplies DC current to the rotor field winding to create the rotating magnetic field. Without excitation current, the rotor has no field, and no output voltage is generated regardless of rotor speed.</p>
  <table class="n-table">
    <tr><th>Type</th><th>How Field Current Reaches the Rotor</th><th>Notes</th></tr>
    <tr><td>Separately excited (slip ring type)</td><td>External DC source through brushes and slip rings</td><td>Simple, but brushes need periodic inspection and replacement</td></tr>
    <tr><td class="ok">Brushless excitation</td><td class="ok">A small pilot exciter (AC generator) on the same shaft feeds a rotating rectifier, no brushes or slip rings at all</td><td>Standard on most modern marine alternators; far less maintenance</td></tr>
    <tr><td>Self-excited</td><td>Uses a fraction of the machine's own output, rectified, to supply the field</td><td>Relies on residual magnetism in the core to "build up" from a standing start</td></tr>
  </table>
  <p class="n-p"><strong>Automatic Voltage Regulator (AVR):</strong> continuously senses output voltage and adjusts field (excitation) current up or down to hold output voltage constant as load changes, since a heavier load naturally tends to sag terminal voltage. The AVR's job is entirely about controlling flux Φ in the EMF equation above; it never touches frequency, which is instead held by governor control of prime mover speed. Full treatment of AVR behaviour and generator characteristics is expanded in F07, Electrical Machines.</p>


  <!-- NAMEPLATE -->
  <div class="n-h1" id="s-nameplate">Reading an Alternator Nameplate</div>
  <table class="n-table">
    <tr><th>Nameplate Item</th><th>Meaning</th></tr>
    <tr><td>Rated kVA</td><td class="ok">Apparent power capacity, the true thermal/current limit (see F04)</td></tr>
    <tr><td>Rated power factor</td><td>The power factor at which the rated kW figure applies, commonly 0.8 lagging on ships</td></tr>
    <tr><td>Rated voltage</td><td>Line voltage at rated load, e.g. 440 V or 6.6 kV</td></tr>
    <tr><td>Rated current</td><td class="hl">Full-load line current, derived from kVA and voltage</td></tr>
    <tr><td>Rated frequency</td><td>50 Hz or 60 Hz, fixed by speed and pole count</td></tr>
    <tr><td>Rated speed</td><td>RPM at rated frequency, tied to pole count via f = PN/120</td></tr>
    <tr><td>Number of phases</td><td>Almost universally 3 for main ship generators</td></tr>
    <tr><td>Insulation class</td><td>Maximum safe winding temperature rise, e.g. Class F or H</td></tr>
    <tr><td>Excitation voltage / current</td><td>DC field supply rating for the excitation system</td></tr>
  </table>
  <p class="n-p"><strong>Interview trap check:</strong> quoting only the kW figure from memory without stating the power factor it assumes is an incomplete answer, since (as covered fully in F04) kW without a stated power factor tells you nothing about the machine's true current-carrying limit.</p>


  <!-- UNITS -->
  <div class="n-h1" id="s-units">Units, Symbols and Formula Sheet</div>
  <table class="n-table">
    <tr><th>Quantity</th><th>Symbol</th><th>Unit</th></tr>
    <tr><td>Magnetic flux</td><td>Φ</td><td>weber (Wb)</td></tr>
    <tr><td>Flux density</td><td>B</td><td>tesla (T)</td></tr>
    <tr><td>Magnetomotive force</td><td>MMF</td><td>ampere-turn (AT)</td></tr>
    <tr><td>Reluctance</td><td>S</td><td>AT/Wb</td></tr>
    <tr><td>Self / mutual inductance</td><td>L / M</td><td>henry (H)</td></tr>
    <tr><td>Induced EMF</td><td>e, E</td><td>volt (V)</td></tr>
  </table>
  <table class="n-table">
    <tr><th>Formula</th><th>Finds</th><th>Use When</th></tr>
    <tr><td>B = Φ / A</td><td>Flux density</td><td>Flux and area known</td></tr>
    <tr><td>MMF = N × I</td><td>Magnetomotive force</td><td>Turns and current known</td></tr>
    <tr><td>Φ = MMF / S</td><td>Flux</td><td>Magnetic circuit "Ohm's Law"</td></tr>
    <tr><td>e = -N(dΦ/dt)</td><td>Induced EMF, Faraday</td><td>Rate of flux change known</td></tr>
    <tr><td>e = -L(dI/dt)</td><td>Self-induced EMF</td><td>Rate of current change known</td></tr>
    <tr><td>E = 4.44 f Φ N K<sub>w</sub></td><td>Alternator EMF per phase</td><td>Frequency, flux/pole, turns known</td></tr>
    <tr><td>f = PN/120</td><td>Frequency from speed</td><td>Poles and RPM known, from F01</td></tr>
  </table>


  <!-- NUMERICALS -->
  <div class="n-h1" id="s-numericals">Worked Numericals</div>
  <p class="n-p">State the formula, substitute clearly, and always give the unit with the final answer.</p>

  <div class="n-h2">1. Flux Density</div>
  <p class="n-p">A machine pole face has an area of 0.05 m² and carries a flux of 0.06 Wb. Find the flux density.</p>
  <ol class="n-steps"><li>B = Φ / A = 0.06 / 0.05 = <span class="n-val">1.2 T</span></li></ol>

  <div class="n-h2">2. Magnetomotive Force</div>
  <p class="n-p">A field coil has 400 turns carrying 6 A. Find the MMF.</p>
  <ol class="n-steps"><li>MMF = N × I = 400 × 6 = <span class="n-val">2400 AT</span></li></ol>

  <div class="n-h2">3. Self-Induced EMF</div>
  <p class="n-p">A coil of inductance 2 H has its current changed from 5 A to 1 A in 0.2 seconds. Find the average self-induced EMF.</p>
  <ol class="n-steps">
    <li>dI/dt = (1 - 5) / 0.2 = -20 A/s</li>
    <li>e = -L(dI/dt) = -2 × (-20) = <span class="n-val">40 V</span>, opposing the fall in current, from Lenz's Law</li>
  </ol>

  <div class="n-h2">4. Alternator Speed and Frequency</div>
  <p class="n-p">A ship's alternator has 6 poles and must produce 60 Hz. Find the required speed.</p>
  <ol class="n-steps">
    <li>f = PN/120, so N = 120f/P = (120 × 60)/6 = <span class="n-val">1200 RPM</span></li>
  </ol>

  <div class="n-h2">5. EMF Equation of an Alternator</div>
  <p class="n-p">An alternator has 120 turns per phase, flux per pole of 0.05 Wb, winding factor 0.96, running at 50 Hz. Find the induced EMF per phase.</p>
  <ol class="n-steps">
    <li>E = 4.44 × f × Φ × N × K<sub>w</sub> = 4.44 × 50 × 0.05 × 120 × 0.96</li>
    <li>E = 4.44 × 50 = 222; 222 × 0.05 = 11.1; 11.1 × 120 = 1332; 1332 × 0.96 = <span class="n-val">1278.7 V</span> approximately per phase</li>
  </ol>

  <div class="n-h2">6. Effect of Flux Change on Voltage (AVR Reasoning)</div>
  <p class="n-p">An alternator's flux per pole is increased by 10% via the AVR while speed and turns stay constant. Find the percentage change in induced EMF.</p>
  <ol class="n-steps">
    <li>E is directly proportional to Φ in the EMF equation, all else constant.</li>
    <li>A 10% increase in Φ produces a <span class="n-val">10% increase in E</span>, confirming why AVR trim of field current directly trims output voltage.</li>
  </ol>


  <!-- VIVA -->
  <div class="n-h1" id="s-viva">Viva and Interview Questions</div>
  <table class="n-table">
    <tr><th>Question</th><th>Model Answer</th></tr>
    <tr><td>What is magnetic flux and what is its unit?</td><td>The total number of magnetic field lines through an area, measured in weber.</td></tr>
    <tr><td>What is flux density?</td><td>Flux per unit area, measured in tesla, indicating how concentrated the field is.</td></tr>
    <tr><td>State the magnetic circuit's equivalent of Ohm's Law.</td><td>Flux equals MMF divided by reluctance, structurally identical to current equals voltage divided by resistance.</td></tr>
    <tr><td>State Faraday's First Law.</td><td>A changing magnetic field, or a conductor cutting flux lines, induces an EMF in that conductor.</td></tr>
    <tr><td>State Faraday's Second Law.</td><td>Induced EMF is directly proportional to the rate of change of flux linkage.</td></tr>
    <tr><td>Will a stationary conductor near a strong but unchanging magnet generate voltage?</td><td>No. Only a change in flux linkage induces EMF; field strength alone, without change, induces nothing.</td></tr>
    <tr><td>State Lenz's Law and explain why it must be true.</td><td>Induced current always opposes the change that produced it. It must be true by conservation of energy; if it assisted the change instead, energy would be created from nothing.</td></tr>
    <tr><td>Which hand rule applies to a generator?</td><td>Fleming's Right Hand Rule: thumb for motion, first finger for field, second finger for induced current.</td></tr>
    <tr><td>Which hand rule applies to a motor?</td><td>Fleming's Left Hand Rule: thumb for force, first finger for field, second finger for current.</td></tr>
    <tr><td>What is self inductance?</td><td>The property by which a changing current in a coil induces an opposing EMF in that same coil, measured in henries.</td></tr>
    <tr><td>Why does switching off a motor produce a voltage spike?</td><td>The collapsing magnetic field tries to maintain the current that was flowing; with the circuit suddenly opened, that energy discharges as a brief high-voltage arc.</td></tr>
    <tr><td>What is mutual inductance and where is it used?</td><td>A changing current in one coil inducing EMF in a separate, magnetically coupled coil. It is the working principle of transformers and current transformers.</td></tr>
    <tr><td>State the EMF equation of an alternator.</td><td>E equals 4.44 times frequency times flux per pole times turns per phase times winding factor.</td></tr>
    <tr><td>Where does the 4.44 in the EMF equation come from?</td><td>It combines a factor of 4 from the quarter-cycle relationship of a sine wave with the 1.11 RMS-to-average conversion factor for a sine wave.</td></tr>
    <tr><td>Why is winding factor less than 1?</td><td>Because windings are distributed and often short-pitched across several slots rather than concentrated at one point, deliberately done to produce a more sinusoidal output, at a small cost to EMF magnitude.</td></tr>
    <tr><td>Why do marine alternators use a rotating field and stationary armature?</td><td>So that only the small DC field current passes through slip rings, keeping insulation stress and brush wear low, while the high-power armature winding stays fixed and robust.</td></tr>
    <tr><td>Explain, step by step, how an alternator generates three-phase power.</td><td>The prime mover rotates the DC-excited rotor field, which sweeps past three stator windings spaced 120 degrees apart, inducing three EMFs 120 degrees apart in time by Faraday's Law, giving a balanced three-phase output.</td></tr>
    <tr><td>Difference between salient pole and cylindrical rotor?</td><td>Salient pole has projecting poles, suits lower speed, many-pole diesel-driven machines. Cylindrical rotor is smooth, suits high speed turbine-driven machines, withstanding higher centrifugal stress.</td></tr>
    <tr><td>What does the AVR actually control?</td><td>It controls field (excitation) current, and therefore flux, to hold output voltage constant as load varies. It does not control frequency.</td></tr>
    <tr><td>What controls an alternator's frequency?</td><td>Prime mover speed, held constant by the governor, together with the fixed pole count, via f = PN/120.</td></tr>
    <tr><td>What is brushless excitation?</td><td>A small pilot exciter on the same shaft supplies AC to a rotating rectifier, which feeds DC to the field winding, with no brushes or slip rings required.</td></tr>
    <tr><td>Why is an alternator rated in kVA and at a stated power factor?</td><td>Because its true current limit is apparent power, and kW alone is meaningless without stating the power factor at which that kW figure applies, as covered in F04.</td></tr>
  </table>


  <!-- QUICK REVISION -->
  <div class="n-h1" id="s-quickrev">Quick Revision</div>
  <table class="n-table">
    <tr><th>Concept</th><th>One Line</th></tr>
    <tr><td>Flux / Flux density</td><td>Φ in weber, B = Φ/A in tesla.</td></tr>
    <tr><td>MMF / Reluctance</td><td>MMF = NI, Φ = MMF/S, magnetic Ohm's Law.</td></tr>
    <tr><td>Faraday's Law</td><td>EMF needs changing flux linkage, not just strong flux.</td></tr>
    <tr><td>Lenz's Law</td><td>Induced effect always opposes its cause, conservation of energy.</td></tr>
    <tr><td>Fleming's Right</td><td>Generator: thumb motion, first finger field, second finger current.</td></tr>
    <tr><td>Fleming's Left</td><td>Motor: thumb force, first finger field, second finger current.</td></tr>
    <tr><td>Self inductance</td><td>Coil opposes its own current change. Cause of switch-off voltage spikes.</td></tr>
    <tr><td>Mutual inductance</td><td>One coil induces EMF in another, the transformer principle.</td></tr>
    <tr><td>EMF equation</td><td>E = 4.44 f Φ N K<sub>w</sub>. AVR changes Φ, governor changes f.</td></tr>
    <tr><td>Rotating field design</td><td>Only small DC field current through slip rings, not full load current.</td></tr>
    <tr><td>Salient vs cylindrical</td><td>Salient: low speed, diesel. Cylindrical: high speed, turbine.</td></tr>
    <tr><td>Brushless excitation</td><td>Shaft-mounted exciter and rotating rectifier, no brushes.</td></tr>
  </table>
  <p class="n-p">If asked something here you genuinely do not know, do not invent an answer. State what you do know, then say honestly you are not certain about the rest.</p>


  <!-- SUMMARY -->
  <div class="n-h1" id="s-summary">Module Summary</div>
  <p class="n-p">You should now be able to describe magnetic flux and flux density, use the magnetic-circuit equivalent of Ohm's Law, state and correctly apply Faraday's Laws and Lenz's Law, use both Fleming's Rules without confusing them, explain self and mutual inductance and their practical consequences, derive and apply the alternator EMF equation, describe rotating-field alternator construction and explain why it is preferred, walk through the generation process step by step, distinguish salient pole from cylindrical rotor construction, describe excitation systems including the AVR's role, and read a full alternator nameplate. This module underpins F06, Transformers, which uses mutual inductance directly, and F07, Electrical Machines, which expands rotor construction, excitation and generator characteristics further.</p>
  <table class="n-table">
    <tr><th>Estimated Study Time</th><th>Quiz Difficulty</th><th>Next Module</th></tr>
    <tr><td>75-90 minutes</td><td>★★★★☆</td><td>F06, Transformers</td></tr>
  </table>

  <div style="margin-top:20px; text-align:center;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F05')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:10px 24px;font-size:14px;">Take the F05 Quiz →</button>
  </div>


  </div>
</div>
</div>`);

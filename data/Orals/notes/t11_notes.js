window.loadNotes("T11", `<div class="view" id="view-notes-t11">
<div class="note-doc">
  <div style="margin-bottom:16px;display:flex;justify-content:space-between">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T11')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 11 - Power Factor &amp; Harmonics</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Power Triangle · kVA vs kW · Droop</span>
      <span class="tag tag-purple">Harmonics · VFD · THD · K-Factor</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-triangle')">Power Triangle</button>
    <button class="anc-btn" onclick="jumpTo('s-kva')">kVA vs kW</button>
    <button class="anc-btn" onclick="jumpTo('s-reactive')">Reactive Power</button>
    <button class="anc-btn" onclick="jumpTo('s-lowpf')">Low PF Effects</button>
    <button class="anc-btn" onclick="jumpTo('s-pf-load')">PF vs Load Level</button>
    <button class="anc-btn" onclick="jumpTo('s-correction')">PF Correction</button>
    <button class="anc-btn" onclick="jumpTo('s-sync-start')">Sync Motor</button>
    <button class="anc-btn" onclick="jumpTo('s-droop')">Droop</button>
    <button class="anc-btn" onclick="jumpTo('s-lossexcitation')">Loss Excitation</button>
    <button class="anc-btn" onclick="jumpTo('s-avrsolas')">AVR SOLAS</button>
    <button class="anc-btn" onclick="jumpTo('s-harmonics')">Harmonics &amp; THD</button>
    <button class="anc-btn" onclick="jumpTo('s-notching')">Notching</button>
    <button class="anc-btn" onclick="jumpTo('s-harmonic-filters')">Harmonic Filters</button>
    <button class="anc-btn" onclick="jumpTo('s-kfactor')">K-Factor Transformer</button>
    <button class="anc-btn" onclick="jumpTo('s-formfactor')">Form Factor</button>
    <button class="anc-btn" onclick="jumpTo('s-preftrip')">Pref Trip</button>
    <button class="anc-btn" onclick="jumpTo('s-shorepower')">Shore Power</button>
    <button class="anc-btn" onclick="jumpTo('s-kirchhoff')">Kirchhoff</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <!-- ═══ SECTION 1: POWER TRIANGLE ═══ -->
  <div class="n-h1" id="s-triangle">📐 Power Triangle - Foundations</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Sanjib, Vishwanathan ask in almost every oral.</strong> Know the triangle, all three formulas, the three units, and the ship's typical PF value. This is the single most-tested topic in T11.</div></div>

  <div class="n-formula">PF = kW / kVA = cos φ<div class="label">Active Power (kW) = V × I × cos φ &nbsp;·&nbsp; Reactive Power (kVAR) = V × I × sin φ &nbsp;·&nbsp; Apparent Power (kVA) = V × I = √(kW² + kVAR²)</div></div>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t11-power-triangle.webp" alt="Power triangle — kW active power, kVAR reactive power, kVA apparent power, phase angle φ" loading="lazy" decoding="async">
    <div class="note-diagram-cap">Fig. Power Triangle — kW (base), kVAR (vertical), kVA (hypotenuse); PF = cos φ = kW/kVA (note: Power Factor = Active Power ÷ Apparent Power, not Reactive Power)</div>
  </div>

  <table class="n-table">
    <tr><th>Power Type</th><th>Symbol</th><th>Unit</th><th>Description</th><th>Formula</th></tr>
    <tr><td><strong>Active Power</strong></td><td class="hl">P</td><td class="hl">kW</td><td>Does useful work - heats, drives motors, lights. Real energy consumed.</td><td>P = V × I × cos φ</td></tr>
    <tr><td><strong>Reactive Power</strong></td><td class="hl">Q</td><td class="hl">kVAR</td><td>Magnetising power for inductors/capacitors. No net energy consumed - oscillates back and forth.</td><td>Q = V × I × sin φ</td></tr>
    <tr><td><strong>Apparent Power</strong></td><td class="hl">S</td><td class="hl">kVA</td><td>Total power supplied by generator. Determines generator and cable sizing.</td><td>S = V × I = √(P² + Q²)</td></tr>
    <tr><td><strong>Power Factor</strong></td><td class="hl">PF</td><td class="hl">0 to 1</td><td>Ratio of useful to total power. Unity = perfect efficiency.</td><td>PF = kW / kVA = cos φ</td></tr>
  </table>

  <div class="n-h2">PF Values to Know - Exam Table</div>
  <table class="n-table">
    <tr><th>Circuit / Load Type</th><th>PF</th><th>Phase Angle φ</th><th>Ship Example</th></tr>
    <tr><td>Pure resistive (heaters, incandescent lights)</td><td class="ok"><span class="n-val">1.0</span> (unity)</td><td>0° - current in phase with voltage</td><td>Electric cargo hold heaters, trace heating</td></tr>
    <tr><td>Pure inductive (ideal transformer, choke)</td><td class="bad"><span class="n-val">0</span> (lagging)</td><td>90° lag - current lags voltage</td><td>Unloaded transformer magnetising current</td></tr>
    <tr><td>Pure capacitive</td><td class="bad"><span class="n-val">0</span> (leading)</td><td>90° lead - current leads voltage</td><td>Capacitor bank energised at no-load</td></tr>
    <tr><td><strong>Typical ship at sea</strong></td><td class="hl"><span class="n-val">0.8 lagging</span></td><td>~37° lag</td><td><strong>Standard exam answer - memorise this</strong></td></tr>
    <tr><td>Ship in port</td><td class="hl"><span class="n-val">0.7–0.75 lagging</span></td><td>Fewer main motors, more hotel loads</td><td>Lower PF because magnetising current fraction is higher relative to kW</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why always lagging on ships?</strong> Over 70% of ship loads are induction motors - sea water pumps, boiler feed pumps, refrigeration compressors, cargo fans, HVAC compressors, deck cranes, winches. All induction motors are inherently inductive - they must draw lagging magnetising current from the supply to sustain their rotating magnetic field. Even lightly loaded motors draw a disproportionately large lagging kVAR. Ship PF is almost always lagging, never leading under normal operation.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Power Triangle:</strong> Draw a right-angle triangle. Horizontal base = kW (real, useful work). Vertical side = kVAR (magnetism, wasted in transmission). Hypotenuse = kVA (what the generator actually supplies). Angle at origin = φ. cos φ = base/hypotenuse = kW/kVA = PF. The bigger the kVAR side, the worse the PF.</div></div>

  <!-- ═══ SECTION 2: kVA vs kW ═══ -->
  <div class="n-h1" id="s-kva">🔋 Why Alternator is Rated in kVA, Not kW</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Every surveyor asks this.</strong> The most fundamental power factor question in every oral. Know the two physical limits by name and be able to give the worked numerical example.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Two physical limits of the alternator - both defined by kVA:</strong><br>
  1. <strong>Thermal limit (Stator Winding):</strong> Maximum current the stator copper windings can carry without overheating due to I²R losses. Current = kVA ÷ Voltage. So kVA determines current → determines heating.<br>
  2. <strong>Insulation limit (Voltage):</strong> Maximum voltage the winding insulation can withstand before breakdown.<br><br>
  Both limits depend on <strong>Apparent Power (kVA = V × I)</strong> - completely independent of the load's power factor. The machine does not "know" what load's PF is - it only "knows" how much current is flowing and what voltage is present.</div></div>

  <div class="n-formula">Example: 1000 kVA Generator at Different PF<div class="label">At PF 1.0: delivers 1000 kW (full capacity used as useful work) &nbsp;·&nbsp; At PF 0.8: delivers only 800 kW (but machine carries the SAME current, SAME heating) &nbsp;·&nbsp; The physical machine is identical - only the connected load changed</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why not rate in kW?</strong> If rated in kW, the rating would be ambiguous without also specifying the PF. Two generators could have identical kVA nameplate ratings and identical windings but different kW outputs - this would be confusing and meaningless for cable sizing, protection relay settings, and parallel operation calculations. kVA is the PF-independent universal capacity statement.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Copper burns from current (I²R). Current = Amps = kVA ÷ Voltage. So kVA determines winding heating - not kW. That's why the generator nameplate says kVA. Motors are rated in kW because their useful mechanical output matters, not their heating. Generators are rated in kVA because their heating limit matters.</div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">Generators → kVA Rating</div><div class="card-desc">Physical capacity determined by current (heating) and voltage (insulation). Both = V × I = kVA. PF-independent. Tells you the maximum current the machine can handle regardless of load type.</div></div>
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">Motors → kW Rating</div><div class="card-desc">Useful mechanical shaft output is what matters - expressed in kW. Motor efficiency and PF are separate nameplate data. The motor's job is to do work - so rated by work done per second.</div></div>
    <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">Transformers → kVA Rating</div><div class="card-desc">Like generators - transformer iron and copper losses depend on current and voltage (kVA), not on the load's PF. Transformer does not generate or consume active power - rated by the kVA it can pass without overheating.</div></div>
  </div>

  <!-- ═══ SECTION 3: REACTIVE POWER ═══ -->
  <div class="n-h1" id="s-reactive">🔄 Reactive Power - Where Does It Go?</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL (Kamath): "Where does reactive power go? Is it wasted?"</strong> Many candidates say "it is wasted" - this is WRONG. Know the correct answer precisely.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body">Reactive power (kVAR) is <strong>NOT</strong> lost or dissipated as heat. It <strong>oscillates</strong> between the source and the load at twice the supply frequency - flowing from source to load during one quarter cycle, returning from load to source during the next. Over a complete cycle, the net energy transfer due to kVAR alone is <strong>zero</strong>.</div></div>

  <ul class="n-list">
    <li><strong>In an induction motor:</strong> kVAR sustains the rotating magnetic field in the stator that creates the flux linking the rotor. Without kVAR there is no magnetic field, no slip, no induced rotor current, no torque, no rotation. kVAR is essential - not wasted.</li>
    <li><strong>In a transformer:</strong> kVAR maintains the core magnetisation. Without magnetising kVAR the transformer cannot transfer energy between primary and secondary.</li>
    <li><strong>In cables and generators:</strong> Although kVAR itself causes no net energy loss, the <em>current</em> required to carry it causes I²R heating losses in cables and windings. This is the indirect harm - not the kVAR itself.</li>
    <li><strong>Answer in one sentence:</strong> "Reactive power oscillates between the source and the load at twice line frequency - it sustains the motor's magnetic field and is returned to the source each half cycle, not consumed."</li>
  </ul>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Voltage Collapse - what happens when reactive power is insufficient:</strong><br>
  Reactive power (kVAR) is what maintains voltage levels throughout the network. If reactive power becomes too <em>low</em>: inductive loads (motors, transformers) cannot maintain their electromagnetic fields → terminal voltage drops → more current drawn to compensate → further voltage drop → cascade failure = <strong>voltage collapse</strong> → blackout.<br>
  If reactive power is too <em>high</em>: excessive I²R heating losses in cables, risk of over-voltage and insulation damage.<br>
  <strong>Summary:</strong> Reactive power is the "voltage support" of the network - not wasted, but essential for stable operation.</div></div>

  <!-- ═══ SECTION 4: LOW PF EFFECTS ═══ -->
  <div class="n-h1" id="s-lowpf">⚠️ Effects of Low Power Factor on Ships</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Sanjib ask:</strong> "What is the significance of PF and what happens if PF is low?" Give the worked current example - it demonstrates immediate practical understanding.</div></div>

  <ul class="n-list">
    <li><strong>Higher current for same kW:</strong> More current must flow to deliver the same useful power → cables, generators, transformers carry more current</li>
    <li><strong>I²R heating losses:</strong> Higher current → more heat in cables and windings → increased energy waste, reduced efficiency, accelerated insulation ageing</li>
    <li><strong>Voltage drop:</strong> Increased current causes more voltage drop across cable impedance → reduced terminal voltage at loads → motors run hotter, may stall under load</li>
    <li><strong>Generator reaches kVA limit early:</strong> Generator hits its current (kVA) limit before its engine power (kW) limit → effective generation capacity is reduced - must run an extra generator for same kW load</li>
    <li><strong>Increased fuel consumption:</strong> Prime mover drives generator at higher reactive current → more fuel burned per kW delivered to useful loads</li>
    <li><strong>Shore power cost:</strong> Port utilities charge for reactive power (kVAR) in addition to active power (kW) - poor PF directly increases port electricity bills</li>
  </ul>

  <div class="n-formula">Worked Example: PF = 0.6 vs PF = 0.8 for same 600 kW load<div class="label">At PF 0.6: kVA = 600 ÷ 0.6 = 1000 kVA → Current at 440V 3φ = 1000000 ÷ (√3 × 440) = 1312A &nbsp;·&nbsp; At PF 0.8: kVA = 600 ÷ 0.8 = 750 kVA → Current = 984A &nbsp;·&nbsp; Low PF draws 33% more current for the same useful 600 kW - 33% more cable heating for zero extra work</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Practical Consequence for Parallel Operation:</strong> At low PF, a generator reaches its kVA (current) rating limit while the prime mover is still far below its kW (engine power) limit. The prime mover fuel is being paid for but the kW capacity is locked out by the high kVAR demand - you must start an extra generator or run at reduced kW throughput. PF correction directly unlocks hidden kW capacity.</div></div>

  <!-- ═══ SECTION 5: PF AT DIFFERENT LOAD LEVELS ═══ -->
  <div class="n-h1" id="s-pf-load">📉 Power Factor at Different Load Levels</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why does PF change with load level?</strong> An induction motor's magnetising current (kVAR) is approximately constant regardless of shaft load - it is determined by the core geometry and air-gap. The active power (kW) drawn varies directly with shaft load. This creates an important relationship between load level and PF.</div></div>

  <table class="n-table">
    <tr><th>Motor Load Level</th><th>kW (Active)</th><th>kVAR (Magnetising)</th><th>PF</th><th>Significance</th></tr>
    <tr><td>No-load (just spinning)</td><td class="bad">Very low</td><td class="hl">Near full (constant)</td><td class="bad"><span class="n-val">0.2–0.3 lagging</span></td><td>Worst PF - nearly all current is magnetising</td></tr>
    <tr><td>25% load</td><td class="hl">Low</td><td class="hl">Near full (constant)</td><td class="bad"><span class="n-val">~0.5 lagging</span></td><td>Very poor - common cause of bad ship PF in port</td></tr>
    <tr><td>50% load</td><td class="hl">Medium</td><td class="hl">Slightly increasing</td><td class="hl"><span class="n-val">~0.7 lagging</span></td><td>Moderate - acceptable for port operations</td></tr>
    <tr><td>75% load</td><td class="ok">Good</td><td class="hl">Slightly higher</td><td class="ok"><span class="n-val">~0.8 lagging</span></td><td>Near design PF - efficient operation zone</td></tr>
    <tr><td>100% (full load)</td><td class="ok">Maximum</td><td class="hl">Full</td><td class="ok"><span class="n-val">0.85–0.9 lagging</span></td><td>Best PF - design point of the motor</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why ship PF is worse in port (0.7–0.75) vs at sea (0.8):</strong><br>
  At sea: propulsion motors, large pumps, compressors all run at or near full load → high kW relative to kVAR → good PF.<br>
  In port: main propulsion stopped, many auxiliary motors running at part-load, cargo ventilation fans at reduced speed → kW drops sharply but kVAR stays similar → PF worsens.<br>
  <strong>Practical implication:</strong> Port operations increase reactive current and worsen PF - exactly when shore power utility is metering and charging for kVAR.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Practical fix for lightly-loaded motors:</strong> Stop motors that are not needed rather than running them at light load. An idling motor at near-zero PF contributes significant kVAR to the busbar with almost no useful kW. Even switching off a pump and starting it on demand rather than running continuously improves overall ship PF.</div></div>

  <!-- ═══ SECTION 6: PF CORRECTION ═══ -->
  <div class="n-h1" id="s-correction">🔧 Power Factor Correction - Methods &amp; Comparison</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan, Kamath ask about all methods.</strong> Know advantages, disadvantages, and which is continuously variable vs stepped. The synchronous condenser question is particularly popular.</div></div>

  <table class="n-table">
    <tr><th>Method</th><th>How It Works</th><th>Advantage</th><th>Disadvantage</th></tr>
    <tr><td><strong>Capacitor Banks (Static)</strong></td><td>Connected in parallel with inductive loads - supply leading kVAR that cancels lagging kVAR from motors</td><td class="ok">Cheap, simple, no moving parts, maintenance-free, long life</td><td class="bad">Fixed steps only - cannot be continuously varied. Switching transients. Risk of resonance with harmonic sources. Over-correction at light load.</td></tr>
    <tr><td><strong>Synchronous Condenser</strong></td><td>Overexcited synchronous motor running at no mechanical load - generates continuously variable leading kVAR by varying DC field current</td><td class="ok">Continuously variable - precise control. Also improves voltage stability and fault level. Absorbs as well as supplies kVAR (underexcited).</td><td class="bad">Expensive. Moving parts need maintenance. Consumes small active power (bearing friction, windage). Needs starting arrangement.</td></tr>
    <tr><td><strong>Reduce lightly-loaded motors</strong></td><td>Stop or replace motors running at very low load - they draw proportionally more kVAR than at full load</td><td class="ok">No extra equipment. Reduces I²R losses and wear.</td><td class="bad">Not always operationally practical - many pumps must run continuously for safety.</td></tr>
    <tr><td><strong>Active Front-End (AFE) VFD</strong></td><td>IGBT rectifier stage draws near-sinusoidal current at near-unity PF from supply - no lagging kVAR generation</td><td class="ok">Near-zero harmonics and near-unity PF at source. Regenerative braking possible.</td><td class="bad">High capital cost. More complex than standard VFD. Requires clean supply for IGBT firing.</td></tr>
  </table>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t11-capacitor-banks.webp" alt="Capacitor bank PF correction — capacitors in parallel with inductive loads, leading kVAR cancels lagging kVAR" loading="lazy" decoding="async">
    <div class="note-diagram-cap">Fig. Capacitor Bank Power Factor Correction — capacitors connected in parallel with motor loads; leading kVAR cancels lagging kVAR, reducing apparent power (kVA) and improving PF</div>
  </div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Synchronous Condenser - Detailed Working (Kamath, Sanjib, Upendra Kumar):</strong> A synchronous motor connected to the busbars running with NO mechanical load on its shaft - the shaft is connected to nothing, just spins freely. When the DC field excitation current is increased above the normal (synchronous) level → the motor is <em>over-excited</em> → it generates leading reactive current (kVAR) into the busbars. This leading kVAR exactly cancels the lagging kVAR drawn by induction motors on the same busbar. The amount of leading kVAR is varied by adjusting the DC field current - giving continuous, smooth, stepless control. When the excitation is reduced below normal → the condenser absorbs leading kVAR (useful if capacitor banks have over-corrected). Construction: mechanically identical to a synchronous motor but shaft is not connected to any driven equipment.</div></div>

  <!-- ═══ SECTION 7: SYNCHRONOUS MOTOR STARTING ═══ -->
  <div class="n-h1" id="s-sync-start">🔄 Synchronous Motor - Why Cannot Self-Start &amp; Starting Methods</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Sanjib ask why synchronous motors cannot self-start and what methods are used onboard.</strong> This ties directly into the synchronous condenser explanation.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why cannot self-start:</strong> A synchronous motor's rotor must reach synchronous speed before the stator rotating magnetic field can magnetically lock onto the rotor poles. At standstill, the 50 Hz stator field rotates at 1500 rpm (for a 4-pole machine) - it passes the stationary rotor poles so fast that a magnetic attraction torque in one direction is immediately followed by an equal repulsion in the reverse direction → net average torque = zero → motor does not start.</div></div>

  <div class="n-h2">Three Starting Methods</div>
  <ul class="n-list">
    <li><strong>Amortisseur / Damper Windings (Most Common Onboard):</strong> Short-circuited copper or aluminium bars embedded in the faces of the salient rotor poles - exactly like a squirrel cage. At start, the motor behaves as an induction motor (rotor bars carry induced currents) and accelerates. At approximately 95% of synchronous speed: DC excitation is applied to the field winding → strong magnetic lock-in torque → rotor snaps into synchronism and runs locked. <em>Important detail:</em> During run-up, the field winding is loaded with a discharge resistance (not short-circuited, not open) to limit the high voltage induced in it by the rapidly changing stator flux.</li>
    <li><strong>Variable Frequency Drive (VFD) Ramp:</strong> VFD smoothly ramps output frequency from near 0 Hz to rated 50/60 Hz. Stator field rotates slowly at start → rotor poles can magnetically lock and follow as speed gradually increases. Used for large synchronous propulsion motors (podded drives, shaft generators used as motors). Gives the smoothest start with full torque throughout acceleration.</li>
    <li><strong>Pony Motor:</strong> A small external motor (often induction type) mechanically coupled to the shaft - runs the main rotor up to near synchronous speed before stator windings and DC field excitation are energised. Less common in modern practice but still seen on some older installations.</li>
  </ul>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Synchronous motor = needs to be at speed before locking. Like a carousel you need to already be running at the right speed to jump on safely. Damper windings = squirrel cage for run-up, then DC field locks the rotor like a magnet grabbing iron.</div></div>

  <!-- ═══ SECTION 8: DROOP ═══ -->
  <div class="n-h1" id="s-droop">⚖️ Droop - Governor &amp; AVR Droop for Parallel Operation</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Praveen Nair, Rajeev Wad ask droop with graph.</strong> Know BOTH types and which controls kW vs kVAR - this distinction is the most common mistake candidates make.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why droop is essential:</strong> Without droop (isochronous = zero droop), parallel generators are unstable - if one machine picks up extra load, its governor adds fuel → it speeds up → takes more load → runs away until it is carrying everything and the other machine motorises (becomes a motor, drawing current from busbar). Droop prevents this by making each machine's speed (or voltage) fall proportionally as its load increases, creating a natural load-sharing equilibrium.</div></div>

  <table class="n-table">
    <tr><th>Parameter</th><th>Governor Droop (Speed Droop)</th><th>AVR Droop (Voltage Droop)</th></tr>
    <tr><td><strong>Controls</strong></td><td class="hl">kW (Active Power) sharing</td><td class="hl">kVAR (Reactive Power) sharing</td></tr>
    <tr><td>Mechanism</td><td>As kW load increases → frequency (speed) falls slightly - typically <span class="n-val">3–5%</span> from no-load to full-load</td><td>As kVAR load increases → terminal voltage falls slightly - typically <span class="n-val">3–5%</span> from no-load to full-load</td></tr>
    <tr><td>Symptom if mis-set</td><td class="bad">kW meters unequal - one generator carries e.g. 400 kW, other carries 250 kW</td><td class="bad">kVAR meters unequal - PF meters show different values on two generators</td></tr>
    <tr><td>Remedy</td><td>Adjust governor droop potentiometer on <em>overloaded</em> generator (increase its droop to shed kW to the other)</td><td>Adjust AVR droop on generator with more kVAR (increase AVR droop → shed reactive load)</td></tr>
    <tr><td>Isochronous (0% droop)</td><td class="bad">Only for single generator - NEVER in parallel (causes hunting/instability)</td><td class="bad">Cannot use in parallel - causes reactive power oscillation</td></tr>
  </table>

  <div class="n-formula">Droop % = (No-load speed − Full-load speed) ÷ No-load speed × 100<div class="label">Example: 50 Hz supply, 5% droop → No-load frequency 50 Hz, full-load frequency 47.5 Hz &nbsp;·&nbsp; Generator with LESS droop takes MORE load (its speed falls less for same load increase) &nbsp;·&nbsp; To shift kW from Gen A to Gen B: increase droop% on Gen A</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> kW unequal → touch the Governor. kVAR unequal → touch the AVR. Never mix them up - adjusting AVR to fix kW imbalance is a common mistake. Think: "G for Governor = G for Generating kW. A for AVR = A for Amperes reactive (kVAR)." Droop is the "sharing handshake" between parallel generators.</div></div>

  <!-- ═══ SECTION 9: LOSS OF EXCITATION ═══ -->
  <div class="n-h1" id="s-lossexcitation">⚡ Loss of Excitation During Parallel Operation</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib, Kamath ask this - heavily tested.</strong> Know the step-by-step electrical sequence, how it looks on the MSB meters, and which relay trips first. This is also linked to the Under-Voltage Relay (UVR) and Loss of Field relay.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>What happens:</strong> When one generator loses excitation (rotor field collapses - due to AVR failure, rotating diode failure, field winding open circuit), it can no longer produce its own EMF from DC excitation. Still connected to busbars → it is driven by the busbar voltage → begins operating as an <em>induction generator</em> → ABSORBS reactive power (kVAR) from the busbar instead of generating it.</div></div>

  <div class="n-h2">Electrical Sequence - Loss of Excitation (Step by Step)</div>
  <ol class="n-steps">
    <li>Rotor field collapses - generator terminal voltage starts to fall</li>
    <li>AVR detects low voltage and attempts to increase excitation - but excitation circuit is faulty, cannot respond</li>
    <li>Generator terminal voltage falls further - now below busbar voltage</li>
    <li>Generator transitions to induction-generator mode - rotor experiences slip relative to busbar frequency</li>
    <li>Generator begins ABSORBING kVAR from the other generator via busbars</li>
    <li>Healthy generator's AVR increases excitation to compensate - its reactive current load increases</li>
    <li>kVAR balance disrupted - healthy generator may trip on overcurrent or AVR overload</li>
    <li>Under-excitation relay (or loss of field relay) should detect and trip the faulty generator first</li>
  </ol>

  <div class="n-h2">What the MSB Meters Show</div>
  <ul class="n-list">
    <li><strong>Faulty generator:</strong> PF meter moves toward leading (or swings to near zero) | kVAR meter REVERSES - shows negative (absorbing kVAR instead of generating)</li>
    <li><strong>Faulty generator:</strong> Current may increase (absorbing kVAR means reactive current flows into it)</li>
    <li><strong>Healthy generator:</strong> Current increases to supply the extra reactive load demanded by faulty machine</li>
    <li><strong>Busbar voltage:</strong> May drop as reactive power balance is lost</li>
  </ul>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Action as ETO on watch:</strong> Observe reversed kVAR meter on one generator → manually trip that generator's ACB immediately → increase output of healthy generator (load governor) → start standby generator → investigate excitation fault (AVR components, rotating diodes in rotating rectifier assembly, field winding continuity).</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Loss of Excitation Trip Sequence (relay order):</strong> The <strong>Under-excitation relay (Loss of Field relay / 40 relay)</strong> activates FIRST, detecting the massive reactive power absorption - this is its designed function. If it fails to trip, the resulting kVAR overload on the healthy generator will eventually trigger overcurrent relay or preferential trip. The UVR (Under-Voltage Relay) may also activate if busbar voltage collapses.</div></div>

  <!-- ═══ SECTION 10: AVR SOLAS ═══ -->
  <div class="n-h1" id="s-avrsolas">📜 AVR - SOLAS Regulation &amp; Function</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS II-1/Reg 40.3:</strong> The Automatic Voltage Regulator must maintain voltage within <strong>±2.5%</strong> of rated voltage under any steady-state load from no-load to full-load. Transient response after sudden load change must recover within <strong>1.5 seconds</strong>.</div></div>

  <ul class="n-list">
    <li><strong>Steady-state voltage tolerance:</strong> ±2.5% of rated voltage at any load between 0% and 100% - ensures all connected loads receive stable supply</li>
    <li><strong>Transient voltage tolerance:</strong> Must recover to within ±2.5% within 1.5 seconds of sudden full-load pickup or full-load rejection - protects against voltage sags on motor starting</li>
    <li><strong>Why remove AVR during IR (Megger) test:</strong> AVR contains semiconductors (thyristors, transistors, capacitors, diodes) sensitive to DC test voltages. Megger applies 500V–1000V DC - will permanently destroy these components. Also prevents the test voltage from back-feeding into the field winding and giving false insulation resistance readings.</li>
    <li><strong>AVR input:</strong> Senses terminal voltage via voltage transformer (VT) → compares with setpoint → adjusts field current via thyristor firing angle → corrects output voltage</li>
  </ul>

  <!-- ═══ SECTION 11: HARMONICS & THD ═══ -->
  <div class="n-h1" id="s-harmonics">〰️ Harmonics, THD &amp; Sources</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan, Kamath ask about VFD harmonics and THD limits.</strong> Know exact IEC numbers, harmonic orders and frequencies, effects, and mitigation methods. This is a growing exam topic as modern ships become VFD-heavy.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>What are harmonics?</strong> Harmonic currents are sinusoidal currents at integer multiples of the fundamental frequency (50 Hz). Non-linear loads distort the sinusoidal current waveform - instead of drawing a clean 50 Hz sine wave, they draw a distorted waveform that can be decomposed into the fundamental plus 3rd, 5th, 7th, 11th... harmonics by Fourier analysis. These harmonic currents are injected back into the supply and affect all other connected equipment.</div></div>

  <div class="n-h2">Sources of Harmonics on Ships</div>
  <ul class="n-list">
    <li><strong>Variable Frequency Drives (VFDs):</strong> The 6-pulse diode rectifier front-end draws current in pulses - primary source of 5th and 7th harmonics. Largest harmonic source on modern ships.</li>
    <li><strong>Battery chargers:</strong> Uncontrolled or thyristor-controlled rectifiers - similar waveform distortion to VFDs</li>
    <li><strong>UPS inverters:</strong> Both input rectifier and output inverter generate harmonics</li>
    <li><strong>Fluorescent lighting with magnetic ballasts:</strong> Generate 3rd harmonics (150 Hz) in single-phase circuits</li>
    <li><strong>Thyristor drives (DC motor drives):</strong> Controlled rectifiers generating 5th, 7th, 11th, 13th harmonics plus notching disturbances (see Notching section)</li>
  </ul>

  <table class="n-table">
    <tr><th>Harmonic Order</th><th>Frequency (50 Hz system)</th><th>Primary Source</th><th>Main Effect</th></tr>
    <tr><td><strong>3rd (triple-N)</strong></td><td class="hl"><span class="n-val">150 Hz</span></td><td>Single-phase non-linear loads (PCs, fluorescent lighting)</td><td>Add in phase in neutral conductor → neutral overloading in 3-phase 4-wire systems</td></tr>
    <tr><td><strong>5th</strong></td><td class="hl"><span class="n-val">250 Hz</span></td><td>6-pulse VFD rectifier - largest component</td><td>Transformer overheating, motor vibration, stray flux losses</td></tr>
    <tr><td><strong>7th</strong></td><td class="hl"><span class="n-val">350 Hz</span></td><td>6-pulse VFD rectifier - second largest</td><td>Protection relay timing interference, overheating</td></tr>
    <tr><td><strong>11th</strong></td><td class="hl"><span class="n-val">550 Hz</span></td><td>12-pulse rectifiers (residual)</td><td>Transformer losses, interference with communications</td></tr>
    <tr><td><strong>13th</strong></td><td class="hl"><span class="n-val">650 Hz</span></td><td>12-pulse rectifiers (residual)</td><td>Reduced by 12-pulse design but not eliminated</td></tr>
  </table>

  <div class="n-h2">Effects of Harmonics</div>
  <ul class="n-list">
    <li><strong>Transformer overheating:</strong> Harmonic currents increase eddy current losses in core (∝ f²) and stray losses → severe overheating of transformer cores - a 100 kVA transformer may need to be derated to 70 kVA when feeding VFDs</li>
    <li><strong>Motor overheating and vibration:</strong> Harmonic torques at non-synchronous speeds cause vibration, increased winding losses, premature bearing wear</li>
    <li><strong>Protection relay interference:</strong> Distorted waveform can cause incorrect timing in overcurrent relays - especially older electromagnetic types calibrated for pure sine waves</li>
    <li><strong>Increased form factor:</strong> Raises RMS/Average above 1.11 → more heating in resistive loads</li>
    <li><strong>Neutral conductor overloading:</strong> Triple-N harmonics (3rd, 9th, 15th) add arithmetically in the neutral - can carry 1.73× phase current, overloading cables sized for balanced 3-phase load</li>
    <li><strong>Capacitor resonance:</strong> Power factor correction capacitors can resonate with system inductance at harmonic frequencies → very large harmonic currents → capacitor and cable damage</li>
    <li><strong>Metering errors:</strong> Average-responding kWh meters read incorrectly with distorted waveforms - financial impact on shore power billing</li>
  </ul>

  <div class="n-h2">THD Limits - IEC/IEEE 80005-1 (HVSC Ships)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>THD = Total Harmonic Distortion.</strong> Standard: <span class="n-val">IEC/IEEE 80005-1</span> for High Voltage Shore Connection systems - THD ≤ <span class="n-val">5%</span> total at all load conditions. No single harmonic order may exceed <span class="n-val">3%</span>. Exceeding these limits causes transformer overheating, protection relay misoperation, and communications interference.</div></div>

  <div class="n-formula">Total Harmonic Distortion (THD)<div class="label">THD = √(V₂² + V₃² + V₄² + ...) ÷ V₁ × 100% &nbsp;·&nbsp; Where V₁ = fundamental, V₂, V₃... = harmonic components &nbsp;·&nbsp; IEC 80005-1 limit: THD ≤ 5%, individual harmonic ≤ 3%</div></div>

  <!-- ═══ SECTION 12: NOTCHING ═══ -->
  <div class="n-h1" id="s-notching">⚡ Voltage Notching - Thyristor Drive Effect</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>What is notching?</strong> Voltage notching is a periodic voltage disturbance caused by the commutation process in thyristor (SCR) controlled rectifiers, typically found in DC motor drives (thruster drives, steering gear drives, older deck machinery). It appears as sharp notches (dips) in the voltage waveform at the moment thyristors commutate (switch current from one phase to another).</div></div>

  <div class="n-h2">How Notching Occurs</div>
  <ol class="n-steps">
    <li>Thyristor rectifier is in normal operation, conducting current through one pair of thyristors</li>
    <li>A new thyristor pair is fired (gate pulse applied) - commutation begins</li>
    <li>During commutation overlap period, the two thyristor pairs that are both conducting create a momentary <em>line-to-line short circuit</em> via the transformer leakage inductance</li>
    <li>This short circuit creates a sharp voltage dip (notch) at the AC supply terminals - typically lasting 100–500 µs and 20–50% deep in voltage</li>
    <li>The notch repeats at 6× supply frequency for a 6-pulse drive (300 Hz notch rate on 50 Hz system)</li>
  </ol>

  <div class="n-h2">Effects of Notching on the Network</div>
  <ul class="n-list">
    <li><strong>Voltage waveform distortion:</strong> Sharp notches contain very high-frequency components - measured as very high individual harmonic orders and high THD</li>
    <li><strong>Zero-crossing disturbance:</strong> Notches near voltage zero crossings confuse protection relays and synchronising circuits - can cause false firing of thyristors in other drives</li>
    <li><strong>Interference with sensitive electronics:</strong> Navigation equipment, communication systems, and control systems may malfunction</li>
    <li><strong>Motor damage:</strong> High dv/dt from notch edges stresses motor insulation - especially harmful to motors with long cable runs (reflected wave effect)</li>
  </ul>

  <div class="n-h2">Mitigation of Notching</div>
  <ul class="n-list">
    <li><strong>AC line reactors (series inductors):</strong> Inductors connected in series with the drive input - limit rate of change of current during commutation → reduce notch depth and duration</li>
    <li><strong>Isolation transformers:</strong> Provide impedance between the drive and the main busbar - confine notches to the drive feeder circuit</li>
    <li><strong>Replace thyristor drives with IGBT drives (AFE VFDs):</strong> Modern IGBT-based drives use PWM switching at 2–20 kHz - no commutation notches. Preferred solution for new installations.</li>
    <li><strong>Physical separation:</strong> Route sensitive instrumentation circuits separately from power drive cabling - reduces conducted and radiated interference</li>
  </ul>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Notching vs Harmonics - Key Difference:</strong> Harmonics are steady-state continuous current distortion (present whenever the drive runs). Notching is a transient voltage disturbance (brief, repetitive voltage dips during commutation). Both cause problems but through different mechanisms. Notching is most critical for zero-crossing-sensitive control and protection circuits. Harmonics are most critical for thermal overloading of transformers and cables.</div></div>

  <!-- ═══ SECTION 13: HARMONIC FILTERS ═══ -->
  <div class="n-h1" id="s-harmonic-filters">🔩 Harmonic Filters - Passive vs Active</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Active harmonic filters are increasingly asked as VFD-heavy ships become common.</strong> Know how each type works, the key difference in operating principle, and when each is preferred.</div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">Passive Harmonic Filter (PHF)</div><div class="card-desc"><strong>Construction:</strong> Tuned series LC (inductor + capacitor) circuits connected in shunt (parallel) between the VFD input and the busbar.<br><br><strong>Working:</strong> Each LC circuit is tuned to resonate at a specific harmonic frequency (e.g. 250 Hz for 5th harmonic, 350 Hz for 7th). At resonance, the filter presents near-zero impedance for that harmonic → harmonic current is absorbed into the filter rather than flowing into the supply network.<br><br><strong>Advantages:</strong> Simple, no active components, robust, low maintenance, low cost, also provides power factor correction (capacitive).<br><br><strong>Disadvantages:</strong> Fixed tuning - only effective at designed harmonic frequencies. Can create parallel resonance with the supply impedance at other frequencies. Performance degrades as load varies. May need detuning resistor to avoid over-correction at light load.</div></div>
    <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">Active Harmonic Filter (AHF)</div><div class="card-desc"><strong>Construction:</strong> Power electronics converter (IGBT inverter) connected in shunt with the non-linear load. Contains current transformers to monitor load current, DSP controller, and IGBT bridge.<br><br><strong>Working:</strong> CT continuously monitors the current drawn by the non-linear load → DSP analyses the waveform using real-time FFT → controller identifies all harmonic components → IGBT bridge generates an equal and opposite (anti-phase) harmonic current and injects it into the network. Harmonic currents cancel → supply sees only the fundamental component.<br><br><strong>Advantages:</strong> Adapts to ALL harmonic frequencies dynamically - no fixed tuning required. Handles changing load conditions. Can correct PF simultaneously. Does not create resonance issues. Much more effective for complex harmonic spectra.<br><br><strong>Disadvantages:</strong> High capital cost. Complex electronics - requires maintenance. Adds another point of potential failure.</div></div>
  </div>

  <div class="n-h2">12-Pulse Rectifier</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>12-pulse drive:</strong> Two 6-pulse rectifiers fed from the same supply via a special transformer with two secondary windings - one connected star (0°), the other connected delta (phase-shifted 30°). The two rectifiers operate in parallel. The 5th and 7th harmonic currents generated by the two rectifiers are 180° out of phase due to the 30° phase shift → they cancel each other → significant reduction in 5th and 7th harmonics. Only 11th and 13th harmonics remain at significant amplitude. More expensive than a single 6-pulse drive but cheaper than an active filter.</div></div>

  <div class="n-h2">Active Front End (AFE) VFD</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>AFE VFD:</strong> Replaces the uncontrolled diode rectifier front-end of a standard VFD with a fully controlled IGBT inverter bridge. The IGBT bridge uses PWM switching to draw a near-sinusoidal current at near-unity power factor from the supply. Near-zero harmonics generated - THD typically &lt;5% without any additional filter. Also allows regenerative braking (energy fed back to supply during deceleration). Higher cost but best harmonic performance. Preferred solution for new large motor installations on modern vessels.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Harmonic Mitigation - Comparison Summary:</strong> Passive filter: cheap, fixed, good for specific harmonics. Active filter: expensive, adaptive, handles all harmonics. 12-pulse: halves 5th and 7th, no help with others. AFE VFD: no harmonics at source - best solution but only for new drives. Sequence of preference (cost vs performance): 12-pulse → Passive filter → AFE → Active filter (most expensive, most effective).</div></div>

  <!-- ═══ SECTION 14: K-FACTOR TRANSFORMER ═══ -->
  <div class="n-h1" id="s-kfactor">🔁 K-Factor Transformers - Derating for Harmonic Loads</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why standard transformers overheat with harmonic loads:</strong> Standard power transformers are designed for sinusoidal (fundamental frequency) currents. When feeding non-linear loads (VFDs, UPS, rectifiers), harmonic currents circulate in the transformer windings and core. These harmonics cause significantly higher losses than a standard calculation would suggest - specifically: (1) Eddy current losses in windings ∝ f², so 5th harmonic causes 25× the eddy current loss per ampere compared to fundamental; (2) Stray losses in core and structure also increase. Result: a transformer delivering rated kVA to harmonic loads overheats and has a shortened lifespan.</div></div>

  <div class="n-h2">K-Factor - What It Is</div>
  <div class="n-formula">K-Factor = Σ(Iₙ/I₁)² × n²<div class="label">Where Iₙ = harmonic current of order n, I₁ = fundamental current, n = harmonic order &nbsp;·&nbsp; Pure sine wave: K = 1 (all current at fundamental) &nbsp;·&nbsp; Mix of 5th, 7th, 11th harmonics: K = 4–13 typical for VFD loads &nbsp;·&nbsp; The higher the K-factor, the more harmonic content, the worse for standard transformers</div></div>

  <div class="n-h2">Typical K-Factor Values by Load Type</div>
  <table class="n-table">
    <tr><th>Load Type</th><th>Typical K-Factor</th><th>Transformer Required</th></tr>
    <tr><td>Pure resistive (heaters, lighting)</td><td class="ok"><span class="n-val">K-1</span></td><td>Standard transformer</td></tr>
    <tr><td>Welding machines, electric furnaces</td><td class="hl"><span class="n-val">K-4</span></td><td>K-4 rated transformer</td></tr>
    <tr><td>6-pulse VFD / UPS (typical ship)</td><td class="hl"><span class="n-val">K-4 to K-13</span></td><td>K-13 transformer for heavy VFD feeders</td></tr>
    <tr><td>PC / server loads (3rd harmonic heavy)</td><td class="bad"><span class="n-val">K-13 to K-20</span></td><td>K-20 for data centre applications</td></tr>
  </table>

  <div class="n-h2">How K-Factor Transformers Differ from Standard</div>
  <ul class="n-list">
    <li><strong>Smaller cross-sectional winding conductors in multiple strands:</strong> Reduces skin effect and eddy current losses at high frequencies</li>
    <li><strong>Lower flux density design:</strong> Core operated at reduced flux to reduce harmonic-induced core losses</li>
    <li><strong>Electrostatic shield between primary and secondary:</strong> Reduces capacitive coupling of high-frequency noise</li>
    <li><strong>Neutral conductor rated for 200% of phase conductor:</strong> Handles triple-N harmonic currents that add in the neutral</li>
    <li><strong>Higher rated temperature insulation:</strong> Typically Class H (180°C) vs standard Class F (155°C) - tolerates the extra heating</li>
  </ul>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Practical ship implication:</strong> On modern vessels where transformers feed UPS systems, variable-speed thruster drives, or hotel load VFDs, using a standard K-1 transformer will result in: premature winding insulation failure, overheating alarms, and unplanned transformer replacement. Classification societies (Lloyd's, DNV, ABS) require K-factor rated transformers where THD analysis shows significant harmonic loading. The K-factor should be specified at the transformer procurement stage - it cannot be retrofitted.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - K-Factor:</strong> "K = Killers of transformers = K-urrent harmonics". The K number tells you how many times more harmful the harmonic load is compared to a pure sine wave load. K-13 = the harmonic currents cause 13× more eddy current damage than pure fundamental current. A K-13 transformer is built to handle that extra heating without failing.</div></div>

  <!-- ═══ SECTION 15: FORM FACTOR ═══ -->
  <div class="n-h1" id="s-formfactor">📐 Form Factor &amp; Crest Factor</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Form Factor = RMS value ÷ Average value.</strong> For a pure sine wave: Form Factor = π ÷ (2√2) ≈ <strong>1.11</strong>. Also appears directly in the generator EMF equation as the constant 4.44 (= 4 × 1.11).</div></div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Significance of Form Factor:</strong> Transformers are designed based on this 1.11 factor for sine waves. If the supply is distorted by harmonics, the form factor increases above 1.11 → transformer core flux is higher than designed → increased iron losses → severe overheating. Also appears in the generator EMF equation: E = 4.44 × f × N × Φm (where 4.44 = 4 × form factor = 4 × 1.11).</div></div>

  <table class="n-table">
    <tr><th>Parameter</th><th>Formula</th><th>Pure Sine Wave Value</th><th>Significance</th></tr>
    <tr><td><strong>Form Factor</strong></td><td class="hl">RMS ÷ Average</td><td class="hl"><span class="n-val">1.11</span></td><td>Used in transformer and generator EMF calculations. Increases with harmonic distortion.</td></tr>
    <tr><td><strong>Crest Factor</strong></td><td class="hl">Peak ÷ RMS</td><td class="hl"><span class="n-val">√2 ≈ 1.414</span></td><td>Determines insulation peak voltage stress. VFD loads have crest factor &gt; 1.414 due to current peaks during rectifier conduction.</td></tr>
    <tr><td><strong>RMS Value</strong></td><td class="hl">√(mean of squares)</td><td class="hl">0.707 × Peak</td><td>The heating-equivalent value - what determines I²R losses and true power.</td></tr>
    <tr><td><strong>Average Value</strong></td><td class="hl">0.637 × Peak</td><td class="hl">0.637 × Peak</td><td>Used in rectifier output calculations. RMS/Average = Form Factor = 1.11.</td></tr>
  </table>

  <!-- ═══ SECTION 16: PREFERENTIAL TRIP ═══ -->
  <div class="n-h1" id="s-preftrip">🛑 Preferential Trip System</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>What it is:</strong> Also called sequential load shedding. An automatic protection system that disconnects non-essential loads in a predetermined sequence when the main generator is overloaded, preventing a total blackout.</div></div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Purpose:</strong> Prevents the remaining generator(s) from tripping on overcurrent during an overload - for example, after restoring power from a blackout with only one generator available. Losing some non-essential loads (galley, HVAC) is far better than a total blackout that stops steering and navigation.</div></div>

  <ul class="n-list">
    <li><strong>SOLAS Requirement:</strong> Chapter II-1 Reg 42/43 requires arrangements to ensure continuity of essential services in an emergency - sequential load shedding is the implementation.</li>
    <li><strong>Sequence Example (typical 3-stage):</strong> Stage 1 (5s delay): Galley, Laundry → Stage 2 (10s delay): AC compressors, non-essential ventilation → Stage 3 (15s delay): Cargo ventilation fans, deck lighting</li>
    <li><strong>Essential Loads (Never Tripped):</strong> Steering gear, navigation lights, communications, fire pumps, emergency lighting, bridge equipment</li>
    <li><strong>Reset after Pref Trip:</strong> Loads are reconnected manually after additional generator is started and load is verified - not automatic reconnection</li>
  </ul>

  <!-- ═══ SECTION 17: SHORE POWER ═══ -->
  <div class="n-h1" id="s-shorepower">🔌 Shore Power Connection (Cold Ironing)</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Electrical Checks Before Connection (Deswal, Kamath ask):</strong><br>1. Verify shore <strong>voltage</strong> matches ship (e.g. 440V or 6.6 kV for HVSC).<br>2. Verify shore <strong>frequency</strong> matches ship (50 Hz or 60 Hz - different in US vs Europe ports).<br>3. Check <strong>cable rating</strong>, connection polarity, and condition of shore connection box (plugs, sockets, interlocks).<br>4. Ensure ship's generators are standby with ACBs OPEN before shore breaker is closed - prevents paralleling with shore supply.<br>5. Verify <strong>Phase Sequence</strong> using a phase sequence meter - incorrect sequence would reverse motor rotation directions.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Power Factor Implication (Shore Power):</strong> Shore utility companies charge for reactive power (kVAR) in addition to active power (kW) - typically a kVAR demand charge or poor PF penalty on the bill. This creates a strong financial incentive to improve PF while on shore power. Unlike onboard where the shipowner simply absorbs poor PF losses internally, port electricity costs increase directly with low PF. This is one reason ports require vessels to maintain PF ≥ 0.85 for HVSC connections per IEC/ISO 80005-1.</div></div>

  <!-- ═══ SECTION 18: KIRCHHOFF'S LAWS ═══ -->
  <div class="n-h1" id="s-kirchhoff">🧮 Kirchhoff's Laws - Marine Applications</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Basic circuit laws applied to shipboard switchboard and protection analysis:</strong></div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">KCL - Kirchhoff's Current Law</div><div class="card-desc"><strong>Rule:</strong> The algebraic sum of all currents at any node equals zero: ΣI = 0, or equivalently ΣI_in = ΣI_out. (Conservation of charge - charge cannot accumulate at a junction.)<br><br><strong>Ship applications:</strong><br>• Main busbar current distribution analysis - sum of generator currents = sum of load currents<br>• Differential protection - comparing current entering a stator winding vs current leaving to detect internal short circuits (Merz-Price protection)<br>• Earth fault detection - sum of three-phase currents ≠ 0 when earth fault present → residual current detected by earth leakage relay</div></div>
    <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">KVL - Kirchhoff's Voltage Law</div><div class="card-desc"><strong>Rule:</strong> The algebraic sum of all voltages around any closed loop equals zero: ΣV = 0. (Conservation of energy - energy cannot be created or destroyed in a loop.)<br><br><strong>Ship applications:</strong><br>• Calculate voltage drops along long cable runs to deck machinery - busbar voltage minus cable drops = terminal voltage<br>• Configure protection relay trip thresholds based on loop voltage distribution<br>• Determine earthing transformer neutral voltage during earth fault analysis</div></div>
  </div>

  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 11</div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the power factor on your ship? Is it lagging or leading? (Kamath, Sanjib, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> Approximately <span class="n-val">0.8 lagging</span> at sea, about <span class="n-val">0.7–0.75 lagging</span> in port. Always lagging because the dominant loads are induction motors - sea water pumps, boiler feed pumps, refrigeration compressors, cargo fans, HVAC - all inherently inductive, drawing lagging magnetising current from the supply. PF is worse in port because large propulsion motors are stopped while smaller motors run at light load where kVAR is high relative to kW.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why is the alternator rated in kVA and not kW? (Every surveyor)</strong><br><strong>Ideal Answer:</strong> kVA rating defines the machine's two physical capacity limits: (1) Thermal limit - maximum stator current before overheating (I²R losses in conductors). (2) Insulation limit - maximum voltage before insulation breakdown. Both depend on kVA = V × I, independent of the load's power factor. A <span class="n-val">1000 kVA</span> generator delivers <span class="n-val">1000 kW</span> at PF <span class="n-val">1.0</span> but only <span class="n-val">800 kW</span> at PF <span class="n-val">0.8</span> - the physical machine is identical, only the load changed. Copper heats from current not from kW, so kVA is the correct rating unit.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What happens if power factor is low? (Kamath, Sanjib)</strong><br><strong>Ideal Answer:</strong> More current must flow for the same useful kW → severe I²R heating losses in cables and windings → reduced terminal voltage at loads → generators hit their kVA (current) limit before the kW (engine) limit, reducing effective generation capacity → increased fuel consumption. For example: at PF <span class="n-val">0.6</span> vs <span class="n-val">0.8</span>, same <span class="n-val">600 kW</span> load draws about <span class="n-val">1312A</span> vs <span class="n-val">984A</span> at 440V three-phase - 33% more current for the same useful work. In port, shore utility also charges for the reactive power (kVAR), increasing electricity costs.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Two generators paralleled, PF of one is 0.8 and other is 0.7. What do you do? (Kamath)</strong><br><strong>Ideal Answer:</strong> The generator at <span class="n-val">0.7 PF</span> is supplying proportionally more reactive current (kVAR) than the other. To balance: <strong>increase the AVR droop setting on the generator carrying more reactive load</strong> (the 0.7 PF machine) - this reduces its terminal voltage slightly, causing it to shed some kVAR to the other generator. Adjust gradually, monitoring both PF meters, until both operate at similar PF. Governor droop is not touched - kW balance is a separate issue controlled by governor droop only.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>How do you improve power factor onboard? What is a synchronous condenser? (Vishwanathan)</strong><br><strong>Ideal Answer:</strong> Improvement methods: (1) <strong>Static capacitor banks</strong> in parallel with inductive loads - supply leading kVAR cancelling lagging kVAR. Fixed-step, cheap, virtually maintenance-free. (2) <strong>Synchronous condenser</strong> - overexcited synchronous motor running with no mechanical load. Adjusting DC field current above normal makes it generate continuously variable leading kVAR into busbars - perfect stepless cancellation of lagging kVAR. More flexible and precise than capacitors. (3) Avoid lightly-loaded motors - stop pumps and fans not operationally required. (4) Active front-end VFDs draw near-unity PF from supply, eliminating lagging kVAR at source.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What are VFD harmonics and how are they mitigated? (Vishwanathan, Kamath)</strong><br><strong>Ideal Answer:</strong> VFD diode rectifier stages are non-linear loads - they draw current in pulses rather than a sine wave, generating harmonic currents (mainly 5th at 250 Hz, 7th at 350 Hz on 50 Hz system) injected back into the power system. Effects: transformer overheating, motor vibration, protection relay interference. THD limit per <span class="n-val">IEC/IEEE 80005-1</span>: total THD ≤ <span class="n-val">5%</span>, single harmonic ≤ <span class="n-val">3%</span>. Mitigation: passive harmonic filters (tuned LC absorb 5th/7th), active harmonic filters (inject anti-phase currents - most effective), 12-pulse rectifiers (cancel 5th/7th by phase shift), or active front-end (AFE) VFDs (IGBT draws near-sinusoidal current).</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is a K-factor transformer and when is it used? (Kamath, Vishwanathan - increasingly asked)</strong><br><strong>Ideal Answer:</strong> A K-factor transformer is specially designed to handle non-linear (harmonic) loads without overheating. Standard transformers overheat when feeding VFDs, UPS, or rectifiers because harmonic currents cause eddy current losses proportional to f² - 5th harmonic causes 25× more eddy current loss per ampere than the fundamental. The K-factor number (e.g. K-13) quantifies the harmonic loading - a K-13 transformer has reduced eddy currents (stranded windings), higher insulation class, and a neutral conductor rated for 200% of phase current to handle triple-N harmonics. Required onboard wherever transformers feed significant VFD or UPS loads - should be specified at procurement.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is voltage notching? How does it differ from harmonics? (Kamath - advanced question)</strong><br><strong>Ideal Answer:</strong> Voltage notching is a transient voltage dip occurring at the AC supply terminals of thyristor (SCR) drives during the commutation overlap period - when two thyristor pairs are momentarily both conducting, creating a brief line-to-line short circuit. Notches are sharp (100–500 µs), occur 6× per cycle in a 6-pulse drive, and can be 20–50% deep. Main hazard: disturbs zero-crossing detection in protection relays and synchronising circuits, and can interfere with navigation electronics. Mitigation: AC line reactors, isolation transformers, or replacing thyristor drives with IGBT VFDs. Harmonics are continuous steady-state waveform distortion; notching is a brief transient - they are related but distinct phenomena.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Where does reactive power go? Is it wasted? (Kamath)</strong><br><strong>Ideal Answer:</strong> Reactive power is NOT wasted or dissipated as heat. It oscillates between the source and the inductive load at twice the supply frequency - flowing into the motor during one quarter cycle to build the magnetic field, returning to the source during the next quarter cycle as the field collapses. The net energy transfer due to kVAR over a complete cycle is zero. However, the current required to carry this oscillating kVAR does cause I²R heating losses in cables and windings - that is the indirect harm. Without kVAR there is no rotating magnetic field in the motor and no torque - it is essential, not wasted.</div></div>

  <!-- ═══ QUICK REVISION - LAST SECTION ═══ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 11</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Exam Frequency</th><th>Key Points to Memorise</th></tr>
    <tr><td><strong>Why kVA not kW</strong></td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>Thermal limit (I²R) + insulation limit both depend on kVA = V×I. PF-independent. <span class="n-val">1000 kVA</span> → <span class="n-val">1000 kW</span> at PF 1.0, only <span class="n-val">800 kW</span> at PF 0.8.</td></tr>
    <tr><td><strong>Ship PF value</strong></td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Sanjib, Vishwanathan</td><td><span class="n-val">0.8 lagging</span> at sea | <span class="n-val">0.7–0.75 lagging</span> in port | Always lagging (induction motors). Worse in port because motors at light load draw high kVAR relative to kW.</td></tr>
    <tr><td><strong>Effects of low PF</strong></td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Sanjib</td><td>More current → I²R heating → voltage drop → generator hits kVA limit early → fuel waste → shore power extra charges. 600 kW at PF 0.6 = 1312A vs PF 0.8 = 984A.</td></tr>
    <tr><td><strong>PF correction methods</strong></td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Kamath</td><td>Capacitor banks (fixed, cheap) | Synchronous condenser (variable, flexible - overexcited syn motor at no load) | Reduce lightly-loaded motors | AFE VFDs</td></tr>
    <tr><td><strong>Synchronous condenser</strong></td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Sanjib</td><td>Overexcited synchronous motor with no shaft load. Increase field current → generates leading kVAR. Decrease → absorbs kVAR. Stepless variable control.</td></tr>
    <tr><td><strong>THD limits</strong></td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Kamath</td><td><span class="n-val">IEC/IEEE 80005-1</span>: Total THD ≤ <span class="n-val">5%</span> | Any single harmonic ≤ <span class="n-val">3%</span></td></tr>
    <tr><td><strong>VFD harmonics</strong></td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Kamath</td><td>6-pulse VFD → 5th (250 Hz) + 7th (350 Hz) | Passive filters, 12-pulse, AFE, Active harmonic filter</td></tr>
    <tr><td><strong>Active vs Passive filter</strong></td><td class="hl">⭐⭐⭐ Vishwanathan, Kamath</td><td>Passive: LC tuned to fixed frequency, cheap, fixed | Active: injects anti-phase current via DSP+IGBT, adaptive to all harmonics, expensive</td></tr>
    <tr><td><strong>K-factor transformer</strong></td><td class="hl">⭐⭐⭐ Kamath, Vishwanathan</td><td>K-factor = Σ(Iₙ/I₁)² × n². K-13 for VFD/UPS feeders. Stranded windings, 200% neutral, Class H insulation. Needed because eddy losses ∝ f².</td></tr>
    <tr><td><strong>Voltage notching</strong></td><td class="hl">⭐⭐⭐ Kamath (advanced)</td><td>Thyristor drive commutation → brief voltage notch (100–500 µs, 6× per cycle). Disturbs zero-crossing circuits. Fix: AC line reactor or replace with IGBT VFD.</td></tr>
    <tr><td><strong>Droop - kW vs kVAR</strong></td><td class="hl">⭐⭐⭐⭐ Kamath, Praveen Nair, Wad</td><td>kW unequal → Governor droop | kVAR/PF unequal → AVR droop | Do NOT mix them. Isochronous = only single gen. 3–5% droop typical.</td></tr>
    <tr><td><strong>Loss of excitation</strong></td><td class="hl">⭐⭐⭐⭐ Sanjib, Kamath</td><td>Gen absorbs kVAR → kVAR meter reverses → PF meter swings leading → Loss of field relay (40) trips first → trip ACB → start standby</td></tr>
    <tr><td><strong>SOLAS AVR requirement</strong></td><td class="hl">⭐⭐⭐⭐ All surveyors</td><td>SOLAS II-1/Reg 40.3: ±2.5% voltage at all loads. Transient: recover within 1.5 s. Remove AVR for Megger test (semiconductor damage).</td></tr>
    <tr><td><strong>Reactive power - where does it go?</strong></td><td class="hl">⭐⭐⭐ Kamath</td><td>NOT wasted - oscillates between source and load at 2× line frequency. Sustains motor magnetic field. Zero net energy over full cycle. Indirect harm = I²R in cables carrying it.</td></tr>
    <tr><td><strong>Form factor / Crest factor</strong></td><td class="hl">⭐⭐⭐ General</td><td>Form factor = RMS/Average = 1.11 (sine) | Crest factor = Peak/RMS = 1.414 (sine) | Increases with harmonics → transformer overheating</td></tr>
    <tr><td><strong>Shore power PF check</strong></td><td class="hl">⭐⭐⭐ Deswal, Kamath</td><td>Match voltage, frequency, phase sequence. Shore utility charges for kVAR → financial incentive for PF correction. IEC 80005-1: PF ≥ 0.85 for HVSC.</td></tr>
    <tr><td><strong>Synchronous motor starting</strong></td><td class="hl">⭐⭐⭐ Sanjib, Kamath</td><td>Cannot self-start - stator field too fast for rotor poles to lock. Methods: damper windings (IM start → DC lock), VFD ramp (frequency 0→rated), pony motor.</td></tr>
    <tr><td><strong>KCL / KVL</strong></td><td class="hl">⭐⭐ General</td><td>KCL: ΣI at node = 0 → busbar distribution, differential protection | KVL: ΣV in loop = 0 → cable voltage drop, relay threshold calculation</td></tr>
  </table>

    </div>
</div>
</div>
`);
window.loadNotes("T03", `<div class="view" id="view-notes-t03">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T03')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 3 - Motors &amp; Starters</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Induction Motors</span>
      <span class="tag tag-purple">Starters &amp; VFD</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s3-induction-principle')">Principle</button>
    <button class="anc-btn" onclick="jumpTo('s3-syncspeed')">Sync Speed</button>
    <button class="anc-btn" onclick="jumpTo('s3-slip-detail')">Slip</button>
    <button class="anc-btn" onclick="jumpTo('s3-rmf-extra')">RMF</button>
    <button class="anc-btn" onclick="jumpTo('s3-startcurrent-qa')">Starting Current</button>
    <button class="anc-btn" onclick="jumpTo('s3-startmethods-table')">Starting Methods</button>
    <button class="anc-btn" onclick="jumpTo('s3-stardelta-extra')">Star-Delta</button>
    <button class="anc-btn" onclick="jumpTo('s3-sd-contactors')">SD Contactors</button>
    <button class="anc-btn" onclick="jumpTo('s3-open-close-trans')">Open/Closed Transition</button>
    <button class="anc-btn" onclick="jumpTo('s3-autotrans-seq')">Autotransformer</button>
    <button class="anc-btn" onclick="jumpTo('s3-softvfd-detail')">Soft Starter vs VFD</button>
    <button class="anc-btn" onclick="jumpTo('s3-vfd-cii')">VFD &amp; CII</button>
    <button class="anc-btn" onclick="jumpTo('s3-contactor-overload')">Contactor &amp; Overload</button>
    <button class="anc-btn" onclick="jumpTo('s3-protect')">Protection</button>
    <button class="anc-btn" onclick="jumpTo('s3-hrc-bearing')">HRC &amp; Bearings</button>
    <button class="anc-btn" onclick="jumpTo('s3-motor-physics')">Advanced Physics</button>
    <button class="anc-btn" onclick="jumpTo('s3-dc-motors')">DC Motors</button>
    <button class="anc-btn" onclick="jumpTo('s3-arm-react')">Armature Reaction</button>
    <button class="anc-btn" onclick="jumpTo('s3-wardleonard')">Ward-Leonard</button>
    <button class="anc-btn" onclick="jumpTo('s3-back-emf')">Back EMF</button>
    <button class="anc-btn" onclick="jumpTo('s3-braking')">Braking</button>
    <button class="anc-btn" onclick="jumpTo('s3-sync-detail')">Sync Motors</button>
    <button class="anc-btn" onclick="jumpTo('s3-overheating')">Overheating</button>
    <button class="anc-btn" onclick="jumpTo('s3-single-phase')">Single Phasing</button>
    <button class="anc-btn" onclick="jumpTo('s3-voltage-sag')">Voltage Sag</button>
    <button class="anc-btn" onclick="jumpTo('s3-440v-vs-110v')">440V vs 110V</button>
    <button class="anc-btn" onclick="jumpTo('s3-dc-on-ac')">DC on AC Supply</button>
    <button class="anc-btn" onclick="jumpTo('s3-special-motors')">Special Motors</button>
    <button class="anc-btn" onclick="jumpTo('s3-crane-speed')">Crane Speed Control</button>
    <button class="anc-btn" onclick="jumpTo('s3-rewind')">After Rewinding</button>
    <button class="anc-btn" onclick="jumpTo('s-motorframe')">Frame Number</button>
    <button class="anc-btn" onclick="jumpTo('s-motorchecks')">Motor Checks</button>
    <button class="anc-btn" onclick="jumpTo('s3-frame-detail')">Alignment &amp; Grease</button>
    <button class="anc-btn" onclick="jumpTo('s3-motor-procurement')">Procurement</button>
    <button class="anc-btn" onclick="jumpTo('s3-motor-overhaul')">Overhauling</button>
    <button class="anc-btn" onclick="jumpTo('s3-hydrophore-auto')">Hydrophore Auto</button>
    <button class="anc-btn" onclick="jumpTo('s3-troubleshoot')">Troubleshooting</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyor-qa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s3-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <!-- ═══ INDUCTION MOTOR PRINCIPLE ═══ -->
  <div class="n-h1" id="s3-induction-principle">⚙️ Induction Motor - Complete Working Principle</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most asked topic - every surveyor without exception.</strong> Based on Faraday's law of electromagnetic induction and the interaction between magnetic fields.</div></div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t03-induction-motor.webp" alt="Induction motor construction — stator, rotor, windings, shaft" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAACQBACdASocABYAPu1srVEppaQiqAqpMB2JaQAETdBXtKgIe1n2RXKvoX1fwAAA/vHPiglxBqXcARH+hkubg2l3dOJbwMgVyclBoxpy9g1iQJoGFBQ+EeOSwElfYzdMTpmIu6wLv1ce35Q+BBb4HaTyB9KQyL1UVHkVOlUAAAA=">
    <div class="note-diagram-cap">Fig. Induction Motor — stator winding, squirrel-cage rotor, air gap, end rings</div>
  </div>
  <div class="n-h2">Construction</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">STATOR (Stationary)</div>
      <div class="card-desc">Three-phase winding distributed in stator slots 120° apart spatially. Connected to three-phase supply. Produces the rotating magnetic field (RMF). Core made of laminated silicon steel to minimise eddy current losses.</div>
    </div>
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">ROTOR (Rotating)</div>
      <div class="card-desc"><strong>Squirrel cage:</strong> aluminium or copper bars cast/fitted into rotor slots and short-circuited at both ends by end rings - no external connection. Robust, cheap, maintenance-free. <strong>Slip ring (wound):</strong> 3-phase winding, ends brought out via slip rings and brushes to external resistance - allows control of starting torque and speed.</div>
    </div>
  </div>
  <div class="n-h2">Working Sequence - Step by Step</div>
  <ol class="n-steps">
    <li>Three-phase AC supply applied to stator winding.</li>
    <li>Three-phase currents (120° apart in time) in the 120°-spaced stator windings create a <strong>Rotating Magnetic Field (RMF)</strong> in the air gap.</li>
    <li>RMF rotates at <strong>synchronous speed</strong>: Ns = 120f/P (RPM).</li>
    <li>RMF cuts across stationary rotor conductors → EMF induced (Faraday's law).</li>
    <li>Rotor conductors are short-circuited → induced EMF drives current through rotor bars.</li>
    <li>Rotor current in magnetic field → force on rotor (<strong>F = BIL</strong>) in the direction of RMF → rotor rotates.</li>
    <li>Rotor accelerates but <strong>NEVER reaches synchronous speed</strong> - if it did, there would be no relative motion, no induced EMF, no current, no force → motor would stop. The gap between rotor speed and RMF speed is called <strong>slip</strong>.</li>
  </ol>
  <div class="n-formula">Ns = 120 × f / P<div class="label">Synchronous speed in RPM - f = supply frequency (Hz), P = number of poles</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why called "Induction" Motor:</strong> Rotor current is INDUCED by the rotating magnetic field - no direct electrical connection to the rotor (squirrel cage). The rotor is energised entirely by electromagnetic induction - exactly like a transformer secondary. Stator = primary, rotor = secondary.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "RMF chases the rotor, the rotor chases the RMF - but never catches it - that gap is slip." More load → more slip → more rotor current → more torque. The motor is self-regulating.</div></div>

  <!-- ═══ SYNCHRONOUS SPEED ═══ -->
  <div class="n-h1" id="s3-syncspeed">📐 Synchronous Speed - Worked Examples</div>
  <div class="n-formula">Ns = 120 × f / P<div class="label">f = frequency in Hz · P = number of poles · Result in RPM</div></div>
  <table class="n-table">
    <tr><th>Poles</th><th><span class="n-val">50 Hz</span> - Ns</th><th>Actual rotor (full load)</th><th>Slip (%)</th></tr>
    <tr><td>2-pole</td><td class="hl">3000 RPM</td><td>~2950 RPM</td><td>~1.7%</td></tr>
    <tr><td>4-pole</td><td class="hl">1500 RPM</td><td>~1450 RPM</td><td>~3.3%</td></tr>
    <tr><td>6-pole</td><td class="hl">1000 RPM</td><td>~960 RPM</td><td>~4%</td></tr>
    <tr><td>8-pole</td><td class="hl">750 RPM</td><td>~720 RPM</td><td>~4%</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong><span class="n-val">60 Hz</span> vessels:</strong> multiply all Ns values by 60/50 = 1.2×. A 4-pole motor gives Ns = 1800 RPM at 60 Hz, running at ~1750 RPM. Common on US-flag vessels and some chemical tankers.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: What is the synchronous speed of a 6-pole motor at <span class="n-val">50 Hz</span>?</strong><br><strong>Ideal Answer:</strong> Ns = 120 × 50 / 6 = 1000 RPM. Actual rotor speed at full load ≈ 960–980 RPM. Slip = (1000 − 960)/1000 = 4%. For a 4-pole motor: Ns = 1500 RPM, actual ~1450 RPM. For a 2-pole: Ns = 3000 RPM, actual ~2950 RPM.</div></div>

  <!-- ═══ SLIP ═══ -->
  <div class="n-h1" id="s3-slip-detail">🔁 Slip - Full Detail</div>
  <div class="n-formula">Slip (s) = (Ns − N) / Ns × 100%<div class="label">Ns = synchronous speed (RPM) · N = actual rotor speed (RPM) · Result in %</div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">No Load Slip</div>
      <div class="card-val">0.1 – 0.5%</div>
      <div class="card-desc">Motor nearly at synchronous speed - only overcome friction and windage losses.</div>
    </div>
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Full Load - Cage Rotor</div>
      <div class="card-val">3 – 8%</div>
      <div class="card-desc">Standard squirrel cage motor under rated mechanical load.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Full Load - Slip Ring</div>
      <div class="card-val">10 – 15%</div>
      <div class="card-desc">Wound rotor with external resistance inserted - deliberately increased slip for speed control.</div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">Standstill (Starting)</div>
      <div class="card-val">s = 1 (100%)</div>
      <div class="card-desc">Rotor stationary. Rotor frequency = supply frequency (50 Hz). Maximum induced EMF and rotor current.</div>
    </div>
  </div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Slip frequency</strong> = frequency of rotor currents = s × f (supply frequency × slip). At standstill: rotor frequency = 50 Hz. At full load (s = 0.04): rotor frequency = 0.04 × 50 = 2 Hz. This low frequency at running speed means rotor reactance (X = 2πfL) is very low → rotor current shifts to near-unity power factor → good running efficiency.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Deswal, Nair): What is slip and why is it important?</strong><br><strong>Ideal Answer:</strong> Slip = (Ns − N)/Ns × 100%. Slip must always exist - without it, no relative motion between RMF and rotor, no induced EMF, no rotor current, no torque → motor stops. No-load slip is 0.1–0.5%, full-load slip is 3–8% for a cage motor. More mechanical load → more slip needed → more rotor current → more torque. Slip also determines rotor frequency (s × f) and hence rotor impedance. Excessive slip means inefficient operation and winding overheating.</div></div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t03-slip-torque-curve.webp" alt="Torque-slip curve showing relationship between torque and slip for various rotor resistances" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAABQBACdASocABQAPu1qrVCppaQiqAqpMB2JaWHgABvhcclSLMmXxrVSkWAAAP7wlr7uj1d0ypfeqg+nG9IgwCYrJuvZzIFPuv85FI3hD44owWJXWMHyKUfbTGLSOtCo9wAAAA==">
    <div class="note-diagram-cap">Fig. Torque–Slip Curve — max torque at different rotor resistances; slip-ring motor shifts curve right</div>
  </div>

  <!-- ═══ RMF ═══ -->
  <div class="n-h1" id="s3-rmf-extra">🌀 Rotating Magnetic Field (RMF) - How It Forms</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why three-phase produces RMF:</strong> Three currents 120° apart in time, flowing in three stator windings placed 120° apart in space, produce a resultant magnetic flux of constant magnitude that rotates around the stator bore at synchronous speed. At any instant, the vector sum of the three flux components gives a resultant that points in a specific direction - and this direction advances 360° for every cycle of the supply.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Single-phase vs three-phase:</strong> A single-phase supply produces only a pulsating (alternating) stationary flux - it oscillates along a fixed axis, it does NOT rotate. This means a single-phase induction motor has zero net starting torque (the equal forward and reverse components cancel). It needs an auxiliary start winding with a capacitor to create a phase shift and produce a weak rotating field for starting. Once running, the rotor's own rotating field supports continued operation.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Why does a three-phase motor produce a rotating magnetic field but a single-phase motor does not?</strong><br><strong>Ideal Answer:</strong> Three currents separated by 120° in time and space produce a resultant flux of constant magnitude that continuously rotates - an RMF. A single-phase supply produces only an alternating pulsating field along one axis - not rotating. The equal and opposite torques cancel, giving zero net starting torque. That is why a single-phase motor requires an auxiliary start winding and capacitor to create a phase difference and produce a starting torque.</div></div>

  <div class="n-h2">Single-Phase Induction Motor - Reversing Direction</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why reversing a single-phase IM is different:</strong> In a three-phase motor, reversing is simply swapping any two supply phases. In a single-phase motor, the "rotation direction" is set by the auxiliary (start) winding's position and the phase shift produced by its capacitor. The motor cannot determine direction from a single-phase supply alone - the main winding produces equal forward and backward flux components. The auxiliary winding creates the initial asymmetry that sets direction.</div></div>
  <ul class="n-list">
    <li><strong>Method - Swap auxiliary winding leads:</strong> The direction of rotation is reversed by swapping the two terminals of the <strong>auxiliary (start) winding</strong> only. This reverses the phase angle of the auxiliary flux relative to the main winding flux, reversing the direction of the net starting torque.</li>
    <li><strong>Do NOT swap the main winding:</strong> Swapping the main winding leads reverses the main flux direction - but because both main and auxiliary are reversed together, the net torque direction is unchanged. Only swapping the auxiliary winding changes the relative direction.</li>
    <li><strong>Practical steps:</strong> (1) Stop motor completely. (2) Identify auxiliary winding terminals in terminal box (usually labelled A1/A2 or P1/P2, or colour-coded). (3) Swap the two auxiliary winding leads. (4) Restart - motor now runs in opposite direction.</li>
    <li><strong>Ship application:</strong> Galley ventilation fans, small sump pumps, single-phase compressors in domestic refrigerators - all may require direction reversal during maintenance.</li>
  </ul>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory:</strong> Single-phase IM reversal = swap AUXILIARY winding leads. Not the main winding - only the aux winding's polarity matters for direction. Three-phase reversal = swap any two phases.</div></div>

  <!-- ═══ STARTING CURRENT Q&A ═══ -->
  <div class="n-h1" id="s3-startcurrent-qa">📈 Starting Current - Why So High</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Asked by Deswal, Kamath, Nair, Vishwanathan - explain the rotor impedance reason, not just the number.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Rotor Impedance at Standstill:</strong> Z_rotor = √(R_rotor² + (s·X_rotor)²). At s = 1 (standstill): Z_rotor = √(R² + X²). For a squirrel cage rotor, R_rotor is very small (thick copper/aluminium bars, short-circuited by end rings) - so impedance is low, allowing very large rotor current. The machine behaves like a transformer with a short-circuited secondary.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Deswal, Kamath, Nair, Vishwanathan): Why does an induction motor draw high current at starting?</strong><br><strong>Ideal Answer:</strong> At standstill (slip = 1), the RMF cuts the rotor conductors at full supply frequency (50 Hz). Rotor induced EMF is at its maximum. The squirrel cage rotor has very low resistance (thick conductors, short-circuited by end rings). Large EMF + low impedance = very large rotor current - like a short-circuited transformer secondary. To maintain the MMF balance, the stator draws proportionally large current from the supply. Starting current = 5–8× rated current for DOL. Effects: busbar voltage dip (10–15%), cable heating (I²R losses), risk of generator overcurrent trip.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Which starting method gives the best torque and current control?</strong><br><strong>Ideal Answer:</strong> VFD gives the best overall starting performance. It starts at low frequency (5–10 Hz) with proportionally reduced voltage - V/f ratio is kept constant. Motor flux is maintained at rated level at all speeds. Near-rated torque is available even at very low speed with starting current as low as 100–150% of rated (vs 500–800% for DOL). VFD also provides smooth, continuous speed control during running. For high-inertia loads without VFD, a slip ring motor with external rotor resistance also gives excellent starting torque with reduced current historically used for cranes and winches.</div></div>

  <!-- ═══ COGGING / CRAWLING ═══ -->
  <div class="n-h2">Cogging (Magnetic Locking) - Why It Happens &amp; Remedy</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Definition:</strong> Cogging (also called <em>magnetic locking</em> or <em>detent effect</em>) is a condition where the squirrel-cage induction motor <strong>refuses to start</strong> or starts with difficulty when the number of rotor slots equals or is a multiple of the number of stator poles. At standstill, the rotor teeth align magnetically with the stator slot openings, creating a series of strong preferred positions - the rotor "locks" into a minimum-reluctance position.</div></div>
  <ul class="n-list">
    <li><strong>Cause:</strong> Equal or harmonically related stator-slot and rotor-slot numbers → the RMF induces strong reluctance torque that holds the rotor in specific angular positions → a starting torque dip (or zero net torque) at standstill.</li>
    <li><strong>Symptom:</strong> Motor hums at startup but fails to rotate, or starts only when given a manual push. Current remains high.</li>
    <li><strong>Remedy - Skewed Rotor:</strong> The rotor bars are <strong>skewed</strong> (twisted at a small angle along the rotor length, typically one stator slot pitch). This spreads the reluctance effect across multiple positions simultaneously, smoothing out the torque dips and eliminating the stationary cogging lock. Virtually all squirrel-cage motors are manufactured with skewed rotors.</li>
    <li><strong>Secondary benefit of skewing:</strong> Also reduces harmonic noise, vibration, and harmonic losses in the rotor bars.</li>
  </ul>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory:</strong> Cogging = magnetic locking at standstill = rotor refuses to start. Cause: equal slot numbers. Remedy: skewed rotor bars smooth out the reluctance torque dips → motor starts freely.</div></div>

  <!-- ═══ STARTING METHODS TABLE ═══ -->
  <div class="n-h1" id="s3-startmethods-table">📊 Starting Methods - All Compared</div>
  <table class="n-table">
    <tr><th>Method</th><th>How It Reduces Current</th><th>Starting Torque</th><th>Speed Control</th><th>Suitable For</th></tr>
    <tr><td class="hl">DOL</td><td>No reduction - full voltage applied directly</td><td class="ok">Maximum (100% DOL)</td><td class="bad">None</td><td>Small motors &lt;<span class="n-val">5 kW</span> on large generators</td></tr>
    <tr><td class="hl">Star-Delta</td><td>Voltage ÷ √3 in star → current reduced to 1/3 of DOL</td><td class="bad">Reduced to 1/3 of DOL</td><td class="bad">None</td><td>Unloaded start - fans, pumps, compressors (unloaded)</td></tr>
    <tr><td class="hl">Autotransformer</td><td>Tapped transformer (65% or 80% tap) reduces voltage</td><td class="hl">∝ voltage² - adjustable by tap</td><td class="bad">None</td><td>Medium controlled start - larger motors needing more torque than star-delta</td></tr>
    <tr><td class="hl">Soft Starter</td><td>Thyristors ramp voltage from near-zero to full over set time</td><td class="hl">Adjustable - better than star-delta</td><td class="bad">Start/stop ramp only</td><td>Frequent starts, pumps (eliminates water hammer), all sizes</td></tr>
    <tr><td class="hl">VFD</td><td>Low frequency + proportionally low voltage simultaneously</td><td class="ok">Excellent - near-rated torque at all speeds</td><td class="ok">Full variable speed 0 – above rated</td><td>Best method - all sizes + energy saving + speed control</td></tr>
    <tr><td class="hl">Slip Ring (Rotor R)</td><td>External rotor resistance raises rotor impedance</td><td class="ok">High starting torque with reduced current</td><td class="hl">Stepped speed control by varying resistance</td><td>High inertia loads - cranes, hoists, windlasses, anchor windlass</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Effects of high DOL starting current:</strong> (1) Busbar voltage dip 10–15% affecting relays, contactors, automation. (2) Cable overheating - I²R losses proportional to current². (3) Generator overcurrent protection may trip. (4) Mechanical shock to shaft, coupling, and driven machinery. (5) Repeated starts accumulate thermal stress in windings.</div></div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t03-dol-starter.webp" alt="DOL starter circuit — main contactor, thermal overload relay, start/stop pushbuttons" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAACwAwCdASocABkAPu1urlKppiQiqAgBMB2JZ12cJg6UUZdzvnsFAAD+8E69B6dfsB+CYcweAlyz+vxgCdkZEZes9llfH7gYYLQX5ZpqsOKC1j4VeGfkfRROYroL4K5OFOcqPuhkWQtINU5ruSQ3no9eHvElO6kfq4sjei5L9GAAAA==">
    <div class="note-diagram-cap">Fig. DOL Starter Circuit — supply, main contactor (KM), thermal overload, motor terminals</div>
  </div>

  <!-- ═══ STAR-DELTA ═══ -->
  <div class="n-h1" id="s3-stardelta-extra">🔄 Star-Delta Starting - Suitability &amp; Mathematics</div>
  <div class="n-h2">The Maths - Why 1/3 and Not 1/√3</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">In star: voltage per winding = 440/√3 = <span class="n-val">254 V</span> (vs 440 V in delta). Current per winding ∝ voltage → winding current = 1/√3 of delta winding current. But line current in star = winding current (series path). In delta, line current = √3 × winding current. So line current ratio: Star/Delta = (1/√3) / √3 = <strong>1/3</strong>. Torque ∝ voltage² → torque ratio = (1/√3)² = <strong>1/3</strong>.</div></div>
  <div class="n-h2">When NOT Suitable</div>
  <ul class="n-list">
    <li>Motor must start the load in star with only 1/3 torque - if load requires high starting torque, star-delta is NOT suitable.</li>
    <li>Pump starting against open discharge valve: may need higher starting torque - consider soft starter.</li>
    <li>Compressor: start unloaded (unloader valve open) - star-delta acceptable.</li>
    <li>Crane hoist: high starting torque needed - slip ring motor or VFD preferred.</li>
    <li>Motor must be designed for star-delta - must have 6 terminals accessible (U1, U2, V1, V2, W1, W2) - not all motors do.</li>
    <li>Motor must be rated for delta connection voltage (440V delta = 440V on each winding). A motor rated for 440V star-connected cannot be used with star-delta starting.</li>
  </ul>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: What is the starting current and torque in star-delta compared to DOL?</strong><br><strong>Ideal Answer:</strong> Star-delta starting current = 1/3 of DOL. If DOL gives <span class="n-val">600 A</span>, star-delta gives <span class="n-val">200 A</span>. Starting torque = 1/3 of DOL torque. If DOL torque is 300 Nm, star-delta gives 100 Nm. The motor must accelerate the load to near full speed within the star period using only 1/3 torque. If load torque exceeds 1/3 of stall torque during the start, the motor will not accelerate - star-delta is unsuitable for that load.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Why is dead time important in star-delta transition?</strong><br><strong>Ideal Answer:</strong> When the star contactor opens, the motor is still spinning and generating back-EMF from residual rotor flux. This back-EMF may be out of phase with the supply at the moment of transition. If the delta contactor closes immediately, the phase difference creates a very large transient current - potentially worse than DOL - causing mechanical shock to the coupling, overcurrent relay trip, or winding damage. A dead time of 20–50 ms allows the motor's back-EMF to decay before the delta connection is made.</div></div>

  <div class="n-h2">Terminal-Box Reconnection for Star-Delta (6-Terminal Motor)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>When a motor arrives from the rewind shop or is being installed, the terminal box links must be set for the correct connection mode.</strong> A standard 6-terminal motor has terminals labelled U1, U2, V1, V2, W1, W2. The star-delta starter's contactors make or break these links - but ETO must verify the terminal-box links (shorting bars) are set correctly for the supply voltage.</div></div>
  <table class="n-table">
    <tr><th>Connection Mode</th><th>Terminal-Box Links</th><th>When Used</th></tr>
    <tr><td><strong>STAR (Y) - manual/static</strong></td><td class="hl">U2–V2–W2 shorted together (winding ends tied to neutral)<br>Supply connected to U1, V1, W1</td><td>Motors rated 440V star - normal running on 440V supply without a star-delta starter</td></tr>
    <tr><td><strong>DELTA (Δ) - manual/static</strong></td><td class="hl">U2 shorted to V1 (link A2-B1)<br>V2 shorted to W1 (link B2-C1)<br>W2 shorted to U1 (link C2-A1)<br>Supply connected to U1, V1, W1</td><td>Motors rated 440V delta - full voltage on each winding</td></tr>
    <tr><td><strong>STAR-DELTA starter</strong></td><td class="hl">All 6 terminals brought out to the starter panel - no permanent shorting links. Starter contactors (KY and KD) make and break the links dynamically during starting sequence.</td><td>Star-delta starting on a 440V delta-rated motor</td></tr>
  </table>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Delta connection link sequence (the A2-B1, B2-C1, C2-A1 rule):</strong> Each winding <em>end</em> (U2, V2, W2) is linked to the <em>start</em> of the <em>next</em> phase's winding (V1, W1, U1 respectively), forming a closed delta loop. In the older A/B/C terminal notation: A2→B1, B2→C1, C2→A1. Verify with continuity tester across each pair before energising - and always megger after any terminal-box work.</div></div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t03-star-delta-terminals.webp" alt="Star and delta terminal-box connections — W2/U2/V2 links for star; cross-links for delta" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAAAQBQCdASocABYAPu1kqk+ppSOiMBgIATAdiWcAzNAQ+G9eSyi20rMLq2yB7UnFz8kAAP7wJ+B4SV1GhyTOn/JvYcIzgNaPAs10uaSWNkUzBcSRj+otzGKfCilDuuMjdrs4faI24mJSAeaHBWL/Hfc98GVfb1TXI41ft9mOCEUH6zRz3uZFn5IcAAA=">
    <div class="note-diagram-cap">Fig. Terminal-Box Reconnection — star (U2-V2-W2 shorted) vs. delta (U2→V1, V2→W1, W2→U1)</div>
  </div>

  <!-- ═══ STAR-DELTA CONTACTORS ═══ -->
  <div class="n-h1" id="s3-sd-contactors">🔌 Star-Delta - Three Contactors &amp; Interlock</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">KM - Main Contactor</div>
      <div class="card-desc">Connects motor to the three-phase supply. Energised at start and remains closed throughout the entire running period - both star and delta phases.</div>
    </div>
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">KY - Star Contactor</div>
      <div class="card-desc">Shorts the three winding ends together in star configuration. Energised at start only - de-energises when the timer expires to allow transition to delta.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">KD - Delta Contactor</div>
      <div class="card-desc">Connects the motor windings in delta configuration. Energised only after the star contactor has opened and the dead-time has elapsed.</div>
    </div>
  </div>
  <div class="n-h2">Sequence - Step by Step</div>
  <ol class="n-steps">
    <li>Press START. KM closes (supply). KY closes (star). Motor starts in star at <span class="n-val">254 V</span> per winding (440/√3).</li>
    <li>Timer energised - after 5–15 seconds KY OPENS (star disconnected).</li>
    <li>Brief 20–50 ms dead time - star current decays, motor back-EMF partially collapses.</li>
    <li>KD CLOSES - motor now in delta at full <span class="n-val">440 V</span> per winding. Motor accelerates to full speed.</li>
  </ol>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Critical Interlock:</strong> KY and KD are ELECTRICALLY AND MECHANICALLY interlocked - both cannot close simultaneously under any fault condition. If both closed together, the winding ends would form a direct three-phase short circuit across the supply → catastrophic arc, busbar fault, possible fire. The interlock is the most safety-critical feature of the star-delta starter.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Star = √3 less volts per winding → 1/√3 winding current → 1/3 line current → 1/3 torque. The 1/3 factor comes from two separate √3 reductions multiplied together: (1/√3)² = 1/3.</div></div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t03-star-delta-starter.webp" alt="Star-delta starter circuit with KM main contactor, KY star contactor, KD delta contactor and timer" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAgCdASocAA8APu1iqU2ppaOiMAgBMB2JaVefADdYAAD+8HpbIoEzzJI/zpN9tf5m5hksZ1ef/vXTwcWx0m6aalrxeyYHWAAAAA==">
    <div class="note-diagram-cap">Fig. Star-Delta Starter — KM (main), KY (star), KD (delta), timer KT1; electrical interlock shown</div>
  </div>

  <!-- ═══ OPEN/CLOSED TRANSITION ═══ -->
  <div class="n-h1" id="s3-open-close-trans">🔄 Open Transition vs Closed Transition Starting</div>
  <div class="n-grid">
    <div class="n-card" style="border-left:4px solid var(--red)">
      <div class="card-title" style="color:var(--red)">Open Transition (Standard Star-Delta)</div>
      <div class="card-desc"><strong>Break-before-make.</strong> There is a brief dead time when the motor is completely disconnected from the supply before the delta contactor closes. During this gap, motor back-EMF decays but may still be significant. Reconnection out of phase causes a transient current spike - potentially as large as DOL starting current. Causes a mechanical jolt on the coupling. Simplest and cheapest configuration.</div>
    </div>
    <div class="n-card" style="border-left:4px solid var(--green)">
      <div class="card-title" style="color:var(--green)">Closed Transition (Korndörfer / Wye-Delta)</div>
      <div class="card-desc"><strong>Make-before-break.</strong> An additional resistor (or reactor) is briefly inserted in series with the motor as the transition happens - the motor is never fully disconnected from the supply. Eliminates the transition current spike and mechanical jolt. Requires an extra contactor and transition resistors. Preferred for sensitive loads, large motors, and applications where current transients must be minimised.</div>
    </div>
  </div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Can a star-delta starter be modified for closed transition?</strong><br><strong>Ideal Answer:</strong> Yes - by adding a transition contactor with current-limiting resistors (Korndörfer configuration). As the star contactor opens, resistors are inserted in series briefly, before the delta contactor closes, maintaining a continuous current path throughout the changeover. This prevents the back-EMF transient current spike of open transition. The extra contactor and resistors increase cost and complexity but eliminate the mechanical shock and current spike. Preferred for large motors and sensitive applications.</div></div>

  <!-- ═══ AUTOTRANSFORMER STARTER ═══ -->
  <div class="n-h1" id="s3-autotrans-seq">⚡ Autotransformer Starter - Contactor Sequence</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Autotransformer starting uses a tapped transformer (typically 65% or 80% voltage tap) to limit starting current. Three contactors operate in sequence. Current reduction is proportional to the square of the voltage ratio.</strong></div></div>
  <ol class="n-steps">
    <li><strong>KS (Star / neutral contactor)</strong> closes FIRST - connects the autotransformer winding in star, forming the neutral point of the transformer.</li>
    <li><strong>KA (Autotransformer contactor)</strong> closes SECOND - applies reduced voltage (tapped point, e.g. 65% or 80%) to the motor. Motor begins to accelerate at reduced voltage with reduced current.</li>
    <li><strong>Timer expires</strong> (motor near running speed) - KS and KA open, disconnecting the transformer from the supply.</li>
    <li><strong>KM (Main / run contactor)</strong> closes - motor connected directly to full supply voltage for normal operation.</li>
  </ol>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Current reduction by tap:</strong> At 65% tap: line current = 0.65² = 42% of DOL starting current. At 80% tap: 0.80² = 64% of DOL starting current. Torque also reduces as V² - appropriate tap must be selected to ensure the motor can accelerate the connected load in the required time.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Which contactor closes first in an autotransformer starter?</strong><br><strong>Ideal Answer:</strong> The star (neutral) contactor closes first to form the star point of the autotransformer winding. Then the autotransformer contactor closes to apply reduced voltage to the motor. After the timing period, both open and the main run contactor closes to connect the motor directly to full supply. The current reduction is proportional to the square of the voltage tap ratio - at 65% tap, line current is 42% of DOL.</div></div>

  <!-- ═══ SOFT STARTER & VFD ═══ -->
  <div class="n-h1" id="s3-softvfd-detail">💻 Soft Starter &amp; VFD - Full Working Detail</div>
  <div class="n-h2">Soft Starter - Working Principle, Advantages &amp; Limitations</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working:</strong> Six SCR thyristors (two per phase, inverse-parallel) are connected in series with the motor. The firing angle of each thyristor pair is controlled by the electronics to progressively increase the RMS voltage delivered to the motor from near-zero up to full supply voltage over a programmable ramp time (typically 3–30 seconds). At the end of the ramp, a bypass contactor closes, shorting the thyristors - motor then runs at full voltage directly with no losses in the thyristors.</div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">✅ Advantages</div>
      <div class="card-desc">Smooth starting - no torque jerk. Reduced starting current (programmable limit 150–350% rated). Soft stop option - prevents water hammer in pump systems. Smaller and cheaper than VFD. No harmonics during running (thyristors bypassed by contactor after full speed reached). Suitable for frequent starts.</div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">❌ Limitations</div>
      <div class="card-desc">Controls voltage ONLY during start/stop - NO speed control during running (motor runs at full speed only). Reduced starting torque at reduced voltage - not suitable for high-starting-torque loads. Cannot be used for variable speed applications. Generates harmonics during starting period (before bypass).</div>
    </div>
  </div>
  <div class="n-h2">VFD - Working Principle, Advantages &amp; Limitations</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working (AC→DC→AC conversion):</strong> <strong>Rectifier stage:</strong> 3-phase AC supply converted to DC by a diode or active rectifier bridge. <strong>DC link:</strong> DC is smoothed by capacitors (and sometimes inductors) - stores energy and decouples the rectifier from the inverter. <strong>Inverter stage:</strong> IGBTs (Insulated Gate Bipolar Transistors) switched at high frequency using PWM (Pulse Width Modulation) to synthesise a variable-frequency, variable-voltage AC output. The V/f ratio is kept constant (e.g. 8 V/Hz at 50 Hz base) to maintain motor flux at rated level at all speeds.</div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">✅ Advantages</div>
      <div class="card-desc">Full speed control 0 to above rated speed. Starting current 100–150% rated - minimal generator stress. Full torque at very low speed (especially with vector control). Energy saving: centrifugal load power ∝ speed³ - 20% speed reduction = 49% power saving, 30% reduction = 66% saving. Built-in soft start/stop and comprehensive motor protection. Eliminates water hammer.</div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">❌ Limitations</div>
      <div class="card-desc">Generates harmonics (5th, 7th, 11th order) - needs harmonic filter. More expensive and complex (IGBT failures, capacitor aging). Motor cable must be screened (EMI from PWM switching). Motor must be VFD-rated - insulation class F minimum, dV/dt withstand rated. Cable length limit - reflected wave voltage can double terminal voltage on long cables.</div>
    </div>
  </div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Where are VFDs used on ships?</strong><br><strong>Ideal Answer:</strong> Ballast water pumps (variable flow rate control), HVAC fans (variable air volume), cargo pumps on tankers (discharge rate control), bow thrusters, seawater cooling pumps, crane hoists, reefer compressors, and main propulsion on electric drive vessels. Energy saving: for centrifugal loads, power reduces with cube of speed - 80% speed = 51% power - significant daily fuel saving. VFD also eliminates water hammer on pump start/stop.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Soft starter = "voltage ramp, then bypass" - start and stop ramp only, full speed running. VFD = "AC → DC → AC, V/f constant" - full life speed control. Soft starter saves your coupling and pipe fittings; VFD saves your fuel bill.</div></div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t03-vfd-block.webp" alt="VFD block diagram — rectifier, DC link capacitors, IGBT inverter, motor" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAAAQAwCdASocABEAPu1ur1IppiQiqAgBMB2JaR9AAAKEV0AA/vBoV1dqOJdisTE2lPBeu9lYR4mBS5ALNJjkDHlus4rSL7s8N41hWk3/L3wAAAAA">
    <div class="note-diagram-cap">Fig. VFD Block Diagram — rectifier → DC bus → IGBT inverter (PWM) → variable-frequency AC output</div>
  </div>

  <!-- ═══ VFD & CII ═══ -->
  <div class="n-h1" id="s3-vfd-cii">📊 VFDs &amp; SEEMP Part III / CII Compliance (2024)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>VFDs are now critical for CII compliance:</strong> SEEMP Part III mandates CII tracking for ships ≥<span class="n-val">5,000 GT</span>. VFDs on cooling pumps, HVAC fans, and seawater pumps reduce fuel consumption by running loads at lower speeds when full capacity is not needed - directly reducing the ship's CO2 emissions per cargo-tonne-mile. When integrated with ESS for load levelling: PMS runs generators at their optimal Specific Fuel Consumption (SFC) curve point rather than at low-load inefficient operation → directly improves the annual A–E CII rating. Results submitted to the IMO Fuel Oil Consumption Database (IMO DCS) annually.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: How do VFDs contribute to SEEMP Part III compliance? (New 2024 question)</strong><br><strong>Ideal Answer:</strong> SEEMP Part III requires granular CII tracking. VFDs optimise centrifugal loads - pumps and fans - by running at lower speeds, cutting fuel burn. Combined with ESS load levelling, the PMS runs generators at peak SFC efficiency, not at low-load inefficient operation. Lower fuel = lower CO2 = better CII A–E rating. CII results are submitted to the IMO DCS annually. A D-rating for 3 consecutive years or an E-rating triggers a mandatory Corrective Action Plan (CAP) as part of SEEMP.</div></div>

  <!-- ═══ MAGNETIC CONTACTOR & THERMAL OVERLOAD RELAY ═══ -->
  <div class="n-h1" id="s3-contactor-overload">🔌 Magnetic Contactor &amp; Thermal Overload Relay</div>
  <div class="n-h2">Magnetic Contactor - Definition and Construction</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>A magnetic contactor is an electrically-operated switching device used to make and break a power circuit under load.</strong> It uses an electromagnet (coil) energised by a small control voltage to open and close heavy-duty main contacts. When the coil is energised, the electromagnet pulls the movable armature down, closing the main contacts. On de-energisation, a spring returns the armature and contacts to the open position. Fails safe: loss of control voltage → motor stops. Widely used because it allows remote and automatic switching with a low-power control circuit.</div></div>
  <div class="n-grid">
    <div class="n-card">
      <div class="card-title">Main Contacts</div>
      <div class="card-desc">Heavy silver-cadmium oxide contacts. Carry full load current. Rated AC-3 for motor duty (make and break under full load current). Contacts wear with arcing and must be inspected periodically - check gap and pressure during planned maintenance and refit.</div>
    </div>
    <div class="n-card">
      <div class="card-title">Auxiliary Contacts</div>
      <div class="card-desc">Small NO/NC control contacts. Used for interlocking (prevents KY and KD closing simultaneously in star-delta), self-hold (seal-in) circuits, indication lamps, remote status signals to PMS, and PLC inputs.</div>
    </div>
    <div class="n-card">
      <div class="card-title">Coil</div>
      <div class="card-desc">Energised by control circuit - typically 110V AC or 24V DC. Control voltage is entirely separate from power circuit. If control supply fails, contactor drops out → motor stops. Coil can burn out if supply voltage is too high or if the armature is mechanically prevented from closing (coil draws high inrush indefinitely).</div>
    </div>
    <div class="n-card">
      <div class="card-title">Ship Applications</div>
      <div class="card-desc">All motor starters (DOL, star-delta, reversing duty), bus coupler switching, lighting and heating circuits, PMS automatic load control, emergency generator automatic transfer switching.</div>
    </div>
  </div>
  <div class="n-h2">Thermal Overload Relay - Working Principle</div>
  <ol class="n-steps">
    <li>Motor load current passes through <strong>three bimetallic strips</strong> (one per phase) inside the relay.</li>
    <li>Overcurrent heats the strips - each strip is made of two metals bonded together with different thermal expansion coefficients.</li>
    <li>Heating causes the strip to <strong>bend</strong> at a rate dependent on the current magnitude (I²t characteristic - inverse time delay).</li>
    <li>When bending reaches the set threshold, the strip actuates a <strong>trip mechanism</strong> - opens the normally-closed (NC) contact in the contactor coil circuit.</li>
    <li>Coil de-energises → contactor opens → motor stops. Trip indicator flag shows that the relay has operated.</li>
    <li><strong>Reset:</strong> Strip cools and returns to straight position. Manual reset (press reset button) or auto-reset closes the NC contact again. Investigate cause before resetting.</li>
  </ol>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Key limitation - single phasing detection:</strong> A single-element relay will NOT adequately detect single phasing - the remaining two phases draw √3 × rated current (≈173% FLA), which may trip eventually but not fast enough to prevent winding burn damage. Use 3-element relays (one bimetallic strip per phase) with a differential trip mechanism, or a dedicated phase-failure relay with instantaneous response.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: How does a thermal overload relay work?</strong><br><strong>Ideal Answer:</strong> It contains three bimetallic strips - one per phase - carrying the motor current. Overload current heats the strips, causing them to bend due to the differential thermal expansion of the two bonded metals. When bending exceeds the set point, it trips a contact that opens the contactor coil circuit, stopping the motor. The relay has an inverse-time delay (I²t characteristic) - small sustained overloads take longer to trip than large surges. Normal setting is 105–115% of rated FLA. Three-element relays are required for reliable single-phasing protection.</div></div>

  <!-- ═══ MOTOR PROTECTION ═══ -->
  <div class="n-h1" id="s3-protect">🛡️ Motor Protection - Complete List with Settings</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: list all motor protections with settings and purposes. Know all seven with values.</strong></div></div>
  <table class="n-table">
    <tr><th>Protection</th><th>Setting / Type</th><th>Purpose</th></tr>
    <tr><td><strong>Overload relay (thermal)</strong></td><td class="hl"><span class="n-val">105–115%</span> FLA (up to <span class="n-val">125%</span> for 1.15 service-factor motors), inverse time delay (I²t)</td><td>Sustained overload - prevents winding insulation thermal degradation from prolonged overcurrent</td></tr>
    <tr><td><strong>Winding thermistor (NTC/PTC)</strong></td><td class="hl">Embedded in stator winding - trips at insulation class temperature limit</td><td>Direct winding temperature protection - detects overheating regardless of cause (ambient, ventilation failure, overload)</td></tr>
    <tr><td><strong>Short circuit (HRC fuse / MCB)</strong></td><td class="hl">Instantaneous at fault current - rated 1.5–2.5 × FLC</td><td>Cable and winding inter-turn / phase-to-phase fault protection - clears fault before arc damage escalates</td></tr>
    <tr><td><strong>Earth fault relay</strong></td><td class="hl">Residual current to earth &gt; set value (typically 30–100 mA on TN systems)</td><td>Insulation breakdown protection - detects current leaking from live conductors to earth (frame)</td></tr>
    <tr><td><strong>Undervoltage relay</strong></td><td class="hl"><span class="n-val">~85%</span> rated voltage, time delay</td><td>Prevents motor drawing high current on sustained low voltage → overheating. Also prevents automatic restart after blackout on safety-critical machinery (manual restart required)</td></tr>
    <tr><td><strong>Phase failure relay</strong></td><td class="hl">Instantaneous on loss of any phase</td><td>Single phasing → remaining two phases carry <span class="n-val">√3 × (≈1.73×)</span> normal current → rapid winding damage. Phase failure relay trips instantaneously, far faster than thermal relay</td></tr>
    <tr><td><strong>Bearing temperature (PT100)</strong></td><td class="hl">Alarm <span class="n-val">80°C</span> / Trip <span class="n-val">95°C</span></td><td>Bearing failure early warning - prevents seizure, journal damage, and consequential rotor/stator contact</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - 7 protections:</strong> <strong>O</strong>verload (thermal) | <strong>T</strong>hermistor (winding temp) | <strong>S</strong>hort circuit | <strong>E</strong>arth fault | <strong>U</strong>ndervoltage | <strong>P</strong>hase failure | <strong>B</strong>earing temp. Mnemonic: <strong>OT SEU PB</strong> - "On The Ship Every Unit Protects Bearings."</div></div>

  <!-- ═══ HRC & BEARING CODES ═══ -->
  <div class="n-h1" id="s3-hrc-bearing">🔧 HRC Fuses &amp; ISO Bearing Codes</div>
  <div class="n-h2">HRC Fuse - Internal Architecture &amp; Motor Selection</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>HRC (High Rupturing Capacity) fuse internal construction:</strong><br>
  • <strong>Ceramic body:</strong> High-strength ceramic tube withstands the arc energy without shattering.<br>
  • <strong>Fuse element:</strong> Silver or silver-copper alloy (low resistance, precise melting characteristic) - designed to vaporise cleanly at fault current. Waist-sections in the element cause controlled melting at multiple points simultaneously for fast, clean interruption.<br>
  • <strong>Arc-quenching filler:</strong> Silica sand (quartz granules) packed tightly around the element - when element vaporises, the arc energy is absorbed and quenched by the sand granules. Arc products solidify as glassy silicates.<br>
  • <strong>Breaking capacity:</strong> <span class="n-val">80–100 kA</span> - safely interrupts very high fault currents without explosive failure or fire risk.<br>
  <strong>Motor circuit fuse selection rule:</strong> HRC fuse must be rated at <span class="n-val">1.5–2.5 × motor FLC</span>. Must pass the starting surge (6–8 × FLC lasting 5–15 seconds) without blowing due to I²t thermal capacity of the element, but must clear a fault current quickly. Never use a rewirable fuse on a 440V MSB motor feeder - unsafe, inaccurate rating, dangerously slow operation.</div></div>
  <div class="n-h2">ISO Bearing Code - How to Decode</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Example: Bearing 6205-2RS - decoded digit by digit:</strong><br>
  • <strong>6</strong> = Deep-groove ball bearing (type designation). 7 = angular contact, 2 = spherical roller, 3 = cylindrical roller, 5 = thrust bearing.<br>
  • <strong>2</strong> = Bearing series (load capacity). 0/1 = extra light, <strong>2 = light</strong>, 3 = medium, 4 = heavy. Higher number = wider and taller bearing for same bore.<br>
  • <strong>05</strong> = Bore size code → Bore diameter = <span class="n-val">05 × 5 = 25 mm</span> (for codes 04 and above, multiply by 5. Codes 00=10 mm, 01=12 mm, 02=15 mm, 03=17 mm are exceptions).<br>
  • <strong>2RS</strong> = Double-sided rubber seal (both sides sealed, pre-packed with grease, maintenance-free for life).<br>
  Other suffix examples: Z = one metal shield, ZZ = two metal shields, C3 = extra internal clearance (for hot applications or interference-fit shafts), E = reinforced design, M = brass cage.<br>
  <strong>When ordering:</strong> Quote the full number from the old bearing. If unreadable from wear - measure bore diameter (d), outer diameter (D), and width (B) with callipers and look up in bearing catalogue.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Bearing &amp; Frame:</strong> Bearing last two digits × 5 = bore in mm (6<strong>205</strong> → 05 × 5 = 25 mm bore). Frame number = shaft centre height in mm (Frame <strong>132</strong>M = 132 mm). HRC = silver element + silica sand, 80–100 kA breaking capacity, sized 1.5–2.5 × FLC.</div></div>

  <!-- ═══ ADVANCED MOTOR PHYSICS ═══ -->
  <div class="n-h1" id="s3-motor-physics">⚡ Advanced Motor Physics</div>
  <div class="n-h2">Motor Crawling - Cause &amp; Remedy</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kolkata surveyors, Sanjib - "motor runs at slow speed after starting and will not accelerate"</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Motor crawling:</strong> A squirrel cage induction motor locks into a stable but very low running speed of approximately <span class="n-val">1/7 of synchronous speed (Ns)</span> instead of accelerating to normal speed. Caused by the <strong>7th harmonic component</strong> in the air-gap flux (due to the non-sinusoidal distributed winding). The 7th harmonic produces a synchronous torque at 1/7 Ns that can be large enough to create a stable "dip" in the torque-speed curve, locking the motor at this low speed. Recognition: motor starts, accelerates slowly to ~1/7 speed (~200 RPM for a 4-pole motor), stops accelerating, runs noisily and draws overcurrent. <strong>Remedy:</strong> Use a skewed rotor (rotor bars angled relative to shaft axis) - distributes the harmonic torque and prevents a stable crawling torque dip. Alternative: use chorded (short-pitched) stator windings to reduce harmonic content.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Why does a motor crawl and how is it prevented?</strong><br><strong>Ideal Answer:</strong> Crawling is when the motor runs stably at 1/7 of synchronous speed due to the 7th harmonic air-gap flux component creating a locking synchronous torque at that speed. The motor starts and reaches ~1/7 speed, then refuses to accelerate further, running noisily with overcurrent. It is prevented by skewed rotor slots - the most common solution - which distributes and cancels the harmonic torque. Alternatively, chorded stator windings reduce the harmonic content in the flux waveform.</div></div>
  <div class="n-h2">Eddy Current Losses - Cause &amp; Prevention</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Eddy currents:</strong> Circulating currents induced in the iron core by the changing magnetic flux (Faraday's law). They flow in closed loops perpendicular to the flux direction and generate heat (I²R losses in the iron). <strong>Prevention:</strong> Assemble the core from thin insulated laminations of <span class="n-val">0.3–0.5 mm</span> thickness, made from high-resistivity silicon-iron alloy. Each lamination is insulated from the next by a thin oxide coating or insulating varnish. Eddy currents are forced to circulate within each thin lamination only - the resistance of each thin path is very high → eddy current magnitude drops dramatically → I²R losses greatly reduced. Same solution used in transformers.</div></div>
  <div class="n-h2">Double-Cage Rotor - Design &amp; Ship Applications</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Sanjib - where used on ships and why? High-value question.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Double-cage rotor design:</strong> Two concentric squirrel cages on the same rotor stack. <strong>Outer cage:</strong> High resistance (thin, narrow bars near the air gap) and low leakage reactance. <strong>Inner cage:</strong> Low resistance (thick bars deep in the rotor iron) and high leakage reactance. <strong>At starting (high slip, high rotor frequency ~50 Hz):</strong> Skin effect concentrates rotor current in the outer high-resistance cage → produces high starting torque with limited starting current (high R in rotor circuit limits current just like adding external resistance to a slip-ring rotor, but automatically). <strong>At running speed (low slip, low rotor frequency ~2–3 Hz):</strong> Low frequency means reactance of inner cage is negligible → current shifts to the inner low-resistance cage → low I²R losses → high efficiency. <strong>Used on ships for:</strong> anchor windlass, mooring winch, bow thruster motors, cargo winches - all need high starting torque to overcome static inertia. Advantage over single cage: better starting torque without external rotor resistance starter, better PF at running speed.</div></div>
  <div class="n-h2">Insulation Class</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Insulation class defines the maximum continuous operating temperature of the winding insulation:</strong><br>
  Class B: <span class="n-val">130°C</span> maximum. Class F: <span class="n-val">155°C</span> maximum. Class H: <span class="n-val">180°C</span> maximum.<br>
  <strong>Ship's generator:</strong> typically Class F (155°C max) - operated at Class B temperature (130°C) to give a 25°C thermal margin for reliability and extended insulation life. This is called Class F winding with Class B temperature rise.<br>
  <strong>Pump room motors (wet/humid environment):</strong> Class F or H minimum. <strong>VFD-fed motors:</strong> Must be Class F minimum to withstand dV/dt voltage spikes from IGBT switching. Why asked: Surveyor checks you understand the motor's thermal limits - important for IR test interpretation, alarm/trip settings, and motor selection when ordering.</div></div>
  <div class="n-h2">Self-Synchronous Motor (Synchro / Selsyn)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>A transmitter-receiver pair that maintain exact angular correspondence without a mechanical linkage.</strong> Working: AC supply is applied to the transmitter rotor. The transmitter stator outputs a 3-phase signal whose amplitude and phase is proportional to the rotor angle. The receiver stator receives this same signal - and its rotor aligns to exactly the same angular position as the transmitter. Used on ships for: rudder angle indicator (bridge display tracks actual rudder position), remote valve position indicators, fuel tank level gauges. Advantage: continuous, accurate remote position feedback over long cable distances without mechanical linkage or separate power circuit.</div></div>

  <!-- ═══ DC MOTORS ═══ -->
  <div class="n-h1" id="s3-dc-motors">🧲 DC Motor Subtypes - All Three Types</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Sanjib ask DC motor types and characteristics.</strong> The series motor's runaway risk at no-load is exam-critical - never leave a series motor unloaded at speed.</div></div>
  <table class="n-table">
    <tr><th>Type</th><th>Field Winding</th><th>Speed-Load Characteristic</th><th>Ship Applications</th><th>Critical Risk</th></tr>
    <tr><td><strong>Series</strong></td><td>In series with armature - heavy gauge wire, few turns. Field current = armature current.</td><td class="bad">Speed varies inversely with load - very fast at no-load (theoretically infinite speed)</td><td>Hoists, cranes, winches - highest starting torque of all DC types</td><td class="bad">RUNAWAY at no-load - must never be uncoupled from load while running. Mechanical failure of coupling at load → dangerously high speed → fly apart.</td></tr>
    <tr><td><strong>Shunt</strong></td><td>In parallel with armature - fine gauge wire, many turns. Field current independent of armature current.</td><td class="ok">Approximately constant speed regardless of load (slight droop)</td><td>Pumps, fans, conveyors, machine tools - wherever constant speed is needed</td><td class="ok">Field failure → speed runaway (similar risk if field open-circuits)</td></tr>
    <tr><td><strong>Compound</strong></td><td>Both series and shunt windings on the same poles. Series adds to shunt (cumulative) or opposes (differential).</td><td class="ok">Compromise - good starting torque (series component) + relatively stable speed (shunt component)</td><td>Windlasses, capstans, cargo winches</td><td class="ok"> - </td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>DC Motor Speed Control:</strong><br>
  <strong>Below base speed:</strong> Armature voltage control - reduce armature voltage while maintaining full field current. Full torque capability maintained (V/f control equivalent). Method: Ward-Leonard, thyristor drive (chopper or phase-controlled rectifier).<br>
  <strong>Above base speed:</strong> Field weakening - reduce field current. Motor accelerates beyond rated speed but with proportionally reduced torque (constant power region). Only suitable for light loads above base speed.</div></div>

  <div class="n-h2">DC Shunt Motor - 3-Point Starter</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why a starter is needed:</strong> At standstill, back-EMF = 0. If the full supply voltage is applied to the armature, the only current limit is the armature resistance (R ≈ 0.5–2 Ω). For a 220 V motor: starting current = 220/1 = <span class="n-val">220 A</span> vs rated ~10 A. This causes severe commutator sparking and possible winding damage. A starter limits current by inserting external resistance in the armature circuit and progressively cutting it out as speed (and back-EMF) builds.</div></div>
  <div class="n-h2">3-Point Starter - Construction &amp; Operation</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>The three terminals:</strong> L (Line supply), A (Armature), F (Field). The field is connected directly to full supply voltage from the start - ensuring maximum field flux for maximum starting torque. The armature is connected through a resistor bank with a spring-loaded handle.</div></div>
  <ol class="n-steps">
    <li>Field winding is connected to full supply (L to F) before the armature is energised - establishes full flux.</li>
    <li>Move handle to stud 1 → full resistance in series with armature → armature current limited to safe value (≈ 1.5× FLC). Motor starts slowly.</li>
    <li>As back-EMF builds with increasing speed, move handle progressively through studs 2, 3, 4… each step cuts out one section of resistance - allows more current and more acceleration.</li>
    <li>At the final stud, all resistance is cut out. The handle is held in the RUN position by the <strong>No-Volt Release (NVR)</strong> electromagnet, which is energised by the field current.</li>
  </ol>
  <table class="n-table">
    <tr><th>Safety Device</th><th>How It Works</th><th>Purpose</th></tr>
    <tr><td><strong>No-Volt Release (NVR)</strong></td><td>Electromagnet (in series with field winding) holds handle at RUN position. If supply fails (or field circuit opens) → NVR de-energises → spring pulls handle back to OFF position automatically.</td><td class="ok">Prevents motor from starting on full voltage DOL when supply is restored after a power interruption.</td></tr>
    <tr><td><strong>Overload Release (OLR)</strong></td><td>Electromagnet in series with armature. If armature current exceeds set level → OLR energises → short-circuits the NVR coil → NVR drops → handle springs to OFF.</td><td class="ok">Protects motor from sustained overload.</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why field must never open while running:</strong> If field winding opens while motor is running (field failure), the NVR electromagnet de-energises → handle snaps to OFF → armature circuit also opens. But even a brief period of field failure causes back-EMF to collapse and motor to accelerate dangerously (runaway tendency of shunt motor on field loss). The NVR's connection to the field circuit is the reason the 3-point starter only has <strong>three</strong> terminals and not a separate field rheostat connection - if you need field speed control, you need a 4-point starter where the NVR is connected directly to the line, not through the field circuit.</div></div>

  <!-- ═══ ARMATURE REACTION ═══ -->
  <div class="n-h1" id="s3-arm-react">🧲 Armature Reaction in DC Machines</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Definition:</strong> Armature reaction is the distortion and weakening of the main field flux caused by the magnetic field set up by current flowing in the armature conductors. The armature MMF acts at right angles to the main pole MMF (cross-magnetising). Asked by Sanjib &amp; Kamath.</div></div>
  <div class="n-h2">Two Effects</div>
  <ul class="n-list">
    <li><strong>Cross-magnetising effect:</strong> Armature MMF acts perpendicular to the main field - distorts the resultant flux, shifting the Magnetic Neutral Axis (MNA) away from the Geometric Neutral Axis (GNA). In a motor the MNA shifts <strong>against</strong> the direction of rotation. The brushes, positioned at the GNA, are now no longer at the zero-EMF point → sparking at commutator under the brushes.</li>
    <li><strong>Demagnetising effect:</strong> A component of the armature MMF directly opposes the main field - weakens the overall flux, reducing torque at the same armature current and altering speed regulation.</li>
  </ul>
  <div class="n-h2">Bad Effects</div>
  <ul class="n-list">
    <li>Shift of the neutral axis → brushes no longer at zero-EMF point → <strong>sparking at brushes</strong> and rapid brush wear and commutator pitting.</li>
    <li>Reduced main flux → reduced torque at the same armature current.</li>
    <li>Localised flux density rise at one pole tip → possible flashover (arcing across adjacent commutator segments).</li>
  </ul>
  <div class="n-h2">Remedies</div>
  <table class="n-table">
    <tr><th>Method</th><th>How It Works</th><th>Application</th></tr>
    <tr><td class="hl">Interpoles (Commutating poles)</td><td>Small auxiliary poles placed between main poles, connected in series with the armature winding. Produce a flux that exactly neutralises the armature reaction at the brush zone and aids commutation. Current through interpoles is proportional to armature current → automatically correct at all loads.</td><td>Most common remedy - used in virtually all modern DC machines</td></tr>
    <tr><td class="hl">Compensating windings</td><td>Conductors embedded in the face of the main poles themselves, carrying armature current in the opposite sense - neutralise the cross-magnetising armature MMF directly under the entire pole face. Far more complete cancellation than interpoles alone.</td><td>Large or heavy-duty machines with rapid load changes (rolling mills, traction)</td></tr>
    <tr><td>Brush shift</td><td>Physically move the brushes to the new MNA position - only correct at one load level, varies with load. Not suitable for variable-load machines.</td><td>Rarely used in modern machines</td></tr>
  </table>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Sanjib, Kamath): What is armature reaction and how is it overcome?</strong><br><strong>Ideal Answer:</strong> Armature reaction is the effect of the armature current's magnetic field distorting and weakening the main field flux. It has a cross-magnetising effect (shifts the magnetic neutral axis, causing brush sparking and commutator damage) and a demagnetising effect (reduces flux and torque at the same current). Overcome by interpoles - small auxiliary poles connected in series with the armature to neutralise the armature reaction at the brush zone - and by compensating windings embedded in the main pole faces for large machines.</div></div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t03-armature-reaction.webp" alt="Armature reaction in DC machines — main field, armature field, resultant flux, MNA shift" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAAAQBACdASocAB8APu1wsFKppiSiqAgBMB2JaVefABtnkjwRW9VMiwoHAAD+7/ToiIn9hp8PpnE2bVdm2THzN6/D/Yr3+ApJ5G3/XYezGp/d9CN4S4/cnjrQ7iOq2EP8vE+9qHkdQ8w48I0rVvYWAtmEQG4Gvr9h7ajwlR7QiUtHtNAAAAA=">
    <div class="note-diagram-cap">Fig. Armature Reaction — GNA, MNA shift under load, cross-magnetising distortion, interpole position</div>
  </div>

  <!-- ═══ WARD-LEONARD ═══ -->
  <div class="n-h1" id="s3-wardleonard">⚙️ Ward-Leonard Speed Control System</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Context:</strong> Asked by Kamath &amp; Sanjib. A classic method of smooth, wide-range, reversible speed control of a DC motor by varying its armature supply voltage from a DC generator driven by a constant-speed AC motor.</div></div>
  <div class="n-h2">Arrangement (M-G Set)</div>
  <ul class="n-list">
    <li><strong>AC driving motor</strong> (induction or synchronous) runs at constant speed, mechanically coupled to a <strong>DC generator</strong>.</li>
    <li>The DC generator output feeds the armature of the main <strong>DC motor</strong> (the driven machine - crane, pump, etc.).</li>
    <li>A small <strong>DC exciter</strong> supplies field current to both the generator field and the motor field via rheostats.</li>
  </ul>
  <div class="n-h2">Working</div>
  <ol class="n-steps">
    <li>Varying the <strong>generator field rheostat</strong> changes the generator output voltage from zero to maximum, smoothly varying the DC motor armature voltage → stepless speed control below base speed.</li>
    <li><strong>Reversing the generator field</strong> reverses the generator output polarity → reverses motor armature current → reverses motor direction smoothly, without switching the armature directly.</li>
    <li>Weakening the <strong>motor field</strong> via the motor field rheostat gives speed above base speed (field-weakening region, reduced torque).</li>
    <li>When the load over-speeds the motor (e.g. lowering a crane load), the DC motor acts as a generator, returning energy back to the AC supply through the generator - <strong>inherent regenerative braking</strong>.</li>
  </ol>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">✅ Advantages</div>
      <div class="card-desc">Stepless speed control over a very wide range in both directions. Excellent for high-inertia loads. Built-in regenerative braking (no energy wasted in resistors). No large starting resistances required. Good speed regulation at all loads.</div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">❌ Disadvantages</div>
      <div class="card-desc">Three machines required (AC motor + DC generator + DC driving motor) - bulky, heavy, very expensive. Lower overall efficiency due to multiple energy conversions. High maintenance: three sets of commutators, brushes, bearings. Now almost entirely replaced by modern thyristor-controlled drives and VFDs.</div>
    </div>
  </div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Kamath, Sanjib): Explain the Ward-Leonard system.</strong><br><strong>Ideal Answer:</strong> A motor-generator set where a constant-speed AC motor drives a DC generator, whose variable voltage output feeds the armature of the main DC motor. By varying the generator field rheostat, the armature voltage - and hence motor speed - is controlled smoothly from zero to maximum. Reversing the generator field reverses motor direction. It gives stepless wide-range speed control in both directions with inherent regenerative braking, but requires three machines making it bulky, inefficient and expensive to maintain - now largely replaced by thyristor and VFD drives.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Ward-Leonard:</strong> "Vary the generator's field, and you steer the motor's speed and direction." Constant AC in → variable DC generator out → smooth DC motor speed control - with free regenerative braking when the load drives the motor.</div></div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t03-ward-leonard.webp" alt="Ward-Leonard M-G set — AC driving motor, DC generator, exciter, DC drive motor" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRqYAAABXRUJQVlA4IJoAAAAQBQCdASocABcAPu1qrVEppaQiqAqpMB2JaQAAI7kUVXz52Nf5HqfI04QPPfct9NAAAP7wOcMDBiHt7GHMDKkknSe0/b2FxRoaJb+8bll6ApBY4lGpjH7EXrYsCQRY+6pnDKXzUmtw74JojZdkdiZ+AKsu7XbwoWdJAcpqYdZJ2/dS5lMaWnKoRjMhR82xE3n8qVED28vz1wAA">
    <div class="note-diagram-cap">Fig. Ward-Leonard System — AC motor + DC generator (M-G set) feeding DC drive motor via field rheostat</div>
  </div>

  <!-- ═══ BACK EMF ═══ -->
  <div class="n-h1" id="s3-back-emf">⚡ Back EMF - Principle and Reversing Switch</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>"What is back EMF?" and reversing switch operation - exam critical. Asked by multiple surveyors.</strong></div></div>
  <ul class="n-list">
    <li><strong>Back EMF (Counter-EMF):</strong> As the motor armature rotates in the magnetic field, it generates a voltage (by Faraday's law) that opposes the supply voltage - this is back EMF. It increases proportionally with rotor speed.</li>
    <li><strong>At no load:</strong> Back EMF ≈ supply voltage → very small net driving voltage → small current (just magnetising current and friction losses).</li>
    <li><strong>At full load:</strong> Load slows rotor → back EMF drops → net voltage increases → more armature current → more torque → motor self-regulates to new speed.</li>
    <li><strong>At starting:</strong> Rotor stationary → back EMF = 0 → full supply voltage appears across winding resistance alone → 6–8× FLC starting current flows. This is why starting resistors, star-delta, or VFDs are needed.</li>
    <li><strong>DC motor formula:</strong> Back EMF (E) = φ × N × K, where φ = flux, N = speed, K = machine constant. Speed is directly proportional to back EMF. Field weakening reduces φ → motor accelerates to restore E - this is the basis of above-base-speed control.</li>
    <li><strong>3-pole double-throw (reversing) switch:</strong> Swaps any two phases → reverses the phase sequence (R-Y-B to Y-R-B) → reverses direction of RMF → rotor follows. MUST stop motor completely before switching - never switch direction under load (plugging) except for emergency stop, as it creates a huge current surge equivalent to adding the back-EMF to the supply voltage.</li>
  </ul>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: What is back EMF and what is its significance?</strong><br><strong>Ideal Answer:</strong> Back EMF is the counter-voltage generated by the rotating armature (or rotor) opposing the supply voltage. It increases with speed. At starting, back EMF is zero - full supply voltage drives current through winding resistance → very high starting current. As speed increases, back EMF increases → net driving voltage decreases → current falls to normal running level. This is the self-regulating mechanism: increased load slows the motor → back EMF drops → more current → more torque automatically - without any external control.</div></div>

  <!-- ═══ BRAKING ═══ -->
  <div class="n-h1" id="s3-braking">🛑 Braking Methods - Regenerative, DC Injection &amp; Others</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Context:</strong> Asked by Sanjib &amp; Vishwanathan. Several electrical braking methods replace or supplement mechanical brakes to decelerate motors quickly and controllably.</div></div>
  <table class="n-table">
    <tr><th>Method</th><th>Principle</th><th>Energy</th><th>Ship Application</th></tr>
    <tr><td class="hl">Regenerative Braking</td><td>Motor driven above synchronous speed by the load (e.g. lowering crane). Slip becomes negative → machine acts as induction generator → energy fed back to supply busbar. Smooth braking.</td><td class="ok">Energy recovered to supply</td><td>Cranes (lowering), lifts, electric propulsion, VFD applications</td></tr>
    <tr><td class="hl">DC Injection (Dynamic) Braking</td><td>AC supply disconnected, DC injected into stator winding → produces a stationary (non-rotating) magnetic field. Rotating rotor cuts this stationary field → induces rotor currents → braking torque → brings motor rapidly to standstill. Braking energy dissipated as heat in rotor bars.</td><td class="bad">Energy dissipated as rotor heat</td><td>Rapid stop of fans, pumps, centrifuges - where quick stop is needed without a mechanical brake</td></tr>
    <tr><td>Plugging (Reverse current braking)</td><td>Two supply phases interchanged while motor running → RMF reverses direction → produces strong reverse torque → rapid braking. Very abrupt; high current surge (≈2× DOL starting current). Motor must be disconnected at standstill or it will reverse.</td><td class="bad">Energy wasted in winding resistance</td><td>Emergency quick reversal of small machines, printing presses</td></tr>
    <tr><td>Rheostatic Braking</td><td>Motor disconnected from supply, armature (DC) or rotor (slip-ring AC) energy dissipated in external resistors. Motor acts as generator, braking energy absorbed by resistor bank.</td><td class="bad">Energy dissipated in resistors</td><td>DC machines, slip-ring motors, crane and hoist applications</td></tr>
  </table>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Sanjib): What is DC injection braking?</strong><br><strong>Ideal Answer:</strong> The AC supply to the stator is disconnected and a DC voltage is injected into the stator windings. This produces a stationary (non-rotating) magnetic field. The still-rotating rotor cuts this stationary field, inducing currents in the rotor bars that create a braking torque - the motor decelerates rapidly and smoothly to standstill. The braking energy is dissipated as heat in the rotor. There is no mechanical wear on brake pads or drums. Common on fans and pumps needing a quick, clean stop.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Vishwanathan): What is regenerative braking?</strong><br><strong>Ideal Answer:</strong> When the load drives the motor above synchronous speed (e.g. a heavy load being lowered by a crane), slip becomes negative and the induction machine acts as a generator, feeding power back into the supply busbar. This provides controlled braking while recovering the gravitational energy of the load. It is efficient, smooth, and produces no heat in the motor itself. Used in cranes, lifts, and electric propulsion. VFDs with regenerative capability can return this energy directly to the vessel's busbar.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Four Braking Types:</strong> <strong>R</strong>egenerative = "give energy back to supply" (over-speed). <strong>D</strong>C injection = "freeze the field with DC" (stationary DC field brakes rotor). <strong>P</strong>lugging = "throw RMF in reverse" (abrupt, high current). <strong>R</strong>heostatic = "burn energy in resistors" (DC and slip-ring machines).</div></div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t03-dc-injection-braking.webp" alt="DC injection braking circuit — AC supply disconnected, DC injected to stator, stationary field brakes rotor" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAgCdASocABEAPu1qrFEppaQiqAqpMB2JaQAAOsg2AAD+8H2zqwNQv+NyfIOyqkefruibmV/ALePasng3Xv+gAAA=">
    <div class="note-diagram-cap">Fig. DC Injection Braking — AC disconnected, DC applied to two stator phases, stationary field brakes spinning rotor</div>
  </div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t03-plugging-braking.webp" alt="Plugging (counter-current) braking — DC motor circuit with armature A1-A2, field F1-F2, and braking resistor Rb limiting reverse current" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAgCdASocAA8APu1iqU2ppaOiMAgBMB2JaWllADi6AAD+8JP4nhXL2WdrzIaErG6d6niseEW5P45AAAA=">
    <div class="note-diagram-cap">Fig. Plugging (Counter-Current Braking) — DC motor: supply polarity reversed with braking resistor Rb inserted to limit current; reverse torque decelerates motor to standstill; supply tripped before motor can run in reverse direction</div>
  </div>

  <!-- ═══ SYNCHRONOUS MOTOR DETAIL ═══ -->
  <div class="n-h1" id="s3-sync-detail">🔄 Synchronous Motor - Damper Windings, Hunting &amp; Safety</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why synchronous motors cannot self-start:</strong> A synchronous motor's rotor must be rotating at synchronous speed before the RMF can lock onto it. At standstill, the RMF passes the rotor poles at supply frequency (50 Hz) - the rotor has too much inertia to follow. A torque pulse forward is immediately followed by an equal reverse torque pulse - net starting torque = zero. The motor hums but does not rotate.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Damper winding (cage winding) - starting solution:</strong> Short-circuited copper bars embedded in slots in the rotor pole faces - identical in principle to a squirrel cage. At starting: rotor is stationary → damper winding acts as a squirrel cage → motor starts and accelerates asynchronously (as an induction motor). As rotor speed approaches synchronous speed: DC excitation is applied to the field winding → rotor pulls into synchronism and locks to the RMF. Damper winding also suppresses hunting during normal synchronised operation.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Hunting:</strong> Oscillation of the rotor about the synchronous equilibrium position when load fluctuates suddenly. The rotor tries to restore the equilibrium power angle but overshoots - oscillates back and forth. The damper winding damps these oscillations by creating a braking torque proportional to the speed difference between rotor and RMF. <strong>Pole slipping:</strong> If applied torque exceeds the maximum pull-out torque - the rotor loses synchronism completely, pulling out of step. The motor must be stopped and re-started. Causes: sudden large overload, severe voltage dip, excitation failure.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Synchronous condenser:</strong> An overexcited synchronous motor running with NO mechanical load on its shaft. Overexcitation causes it to absorb leading current - it supplies leading kVAR to the busbar, improving the system power factor. Used where continuously variable leading kVAR is needed. More flexible than fixed capacitor banks - the kVAR output is adjusted by varying the DC field current.</div></div>
  <div class="n-h2">Synchronous Motor - Safety Features</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyor asked SG motor safety features - know all five. Each has a specific function and consequence.</strong></div></div>
  <ul class="n-list">
    <li><strong>Field failure relay:</strong> Trips if DC excitation is lost. Without field current, the motor loses synchronism, starts acting as an induction motor pulling high slip current, overheats rapidly - motor must be tripped immediately.</li>
    <li><strong>Out-of-step protection (loss-of-synchronism relay):</strong> Detects when the rotor falls out of synchronism even with field intact (due to overload or voltage dip) - trips the motor before pole-slipping causes armature current surges.</li>
    <li><strong>Under-voltage trip:</strong> Protects on supply voltage failure or severe sag.</li>
    <li><strong>Overcurrent protection:</strong> Standard motor protection against fault current.</li>
    <li><strong>Starting protection (field suppression):</strong> During asynchronous starting via damper windings, the DC field winding must be short-circuited through a resistor - prevents high voltage being induced in the open field winding during the starting period (which could damage the field insulation).</li>
  </ul>

  <!-- ═══ MOTOR OVERHEATING ═══ -->
  <div class="n-h1" id="s3-overheating">🌡️ Motor Overheating - 8 Causes and Actions</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Multiple surveyors - "why is the motor overheating?" Know all 8 causes with the specific electrical reason for each.</strong></div></div>
  <ul class="n-list">
    <li><strong>1. OVERLOAD:</strong> Motor driving excessive mechanical load - current exceeds rated FLA → I²R heat in stator and rotor windings exceeds cooling capacity.</li>
    <li><strong>2. SINGLE PHASING:</strong> One of three phases lost (blown fuse, broken connection, contactor contact failure) - remaining two phase windings carry ~√3 (1.73×) normal current to maintain torque → severe and rapid overheating.</li>
    <li><strong>3. UNDER-VOLTAGE:</strong> Low supply voltage → motor must draw higher current to maintain same torque (P = √3 × V × I × PF) → I²R losses increase → overheating.</li>
    <li><strong>4. VENTILATION FAILURE:</strong> Blocked air filters, failed internal cooling fan (open circuit), clogged cooling fins, or dirty motor housing - heat generated in windings cannot be removed → temperature rises.</li>
    <li><strong>5. HIGH AMBIENT TEMPERATURE:</strong> Engine room temperature exceeds design limit (usually 45°C) - reduces the temperature margin between winding temperature and maximum insulation class limit.</li>
    <li><strong>6. FREQUENT STARTING:</strong> Each DOL start = 6–8× FLC inrush for 5–15 seconds - deposits substantial heat energy in windings. Frequent starts (more than 5–6 per hour for many motors) prevent windings from cooling between starts → cumulative overheating.</li>
    <li><strong>7. BEARING FAILURE:</strong> Seized or heavily worn bearing increases mechanical friction load on shaft → motor draws higher current → thermal overload.</li>
    <li><strong>8. PHASE IMBALANCE / PHASE UNBALANCE:</strong> Unequal phase voltages (even 5% imbalance) create negative sequence currents in the motor that cause additional rotor eddy current heating and reduce torque, requiring more current → overheating disproportionate to the small voltage imbalance.</li>
  </ul>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Action on discovering overheating:</strong> Stop motor → identify and correct cause before restarting → check overload relay setting (is it correctly set to 105–115% FLA?) → inspect bearings (temperature, noise, grease condition) → check supply voltage on all three phases and check balance → check cooling system (fan, filters, housing) → log finding and action taken.</div></div>

  <!-- ═══ SINGLE PHASING ═══ -->
  <div class="n-h1" id="s3-single-phase">⚡ Single Phasing - Effect and Detection</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal, Kamath - "what is single phasing and how do you detect it?" - asked without exception.</strong></div></div>
  <ul class="n-list">
    <li>Single phasing: one of three phases is lost - typically due to blown HRC fuse (one phase), contactor contact failure, or a break in one supply cable conductor.</li>
    <li><strong>Running motor in single-phase condition:</strong> Motor continues running on two phases - the two remaining phase windings carry approximately √3 (1.73×) of normal current each to maintain torque. Severe overheating follows. Motor will stall if loaded beyond approximately 86% of rated torque.</li>
    <li>Negative sequence currents produced by the unbalance create a counter-rotating magnetic field component → increased vibration, noise, and rotor heating.</li>
    <li><strong>Stopped motor in single-phase condition:</strong> Motor CANNOT start - no RMF is established with only two phases → motor hums and draws approximately locked-rotor current → winding damage within seconds if protection does not trip.</li>
    <li><strong>Detection:</strong> (1) Ammeter per phase - missing phase shows zero. (2) Phase failure relay - trips instantaneously on loss of any phase. (3) Imbalanced vibration and noise from negative sequence heating.</li>
    <li><strong>Protection:</strong> Use 3-element thermal overload relay with differential trip, or a dedicated phase failure relay (best - instantaneous response). A single-element overload relay will NOT adequately protect against single-phasing.</li>
  </ul>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: What happens when a motor single-phases while running?</strong><br><strong>Ideal Answer:</strong> The motor continues running but on two phases only. The remaining two phase windings carry approximately √3 (1.73×) of normal current to maintain torque. The motor overheats rapidly - winding insulation degrades and may fail. If heavily loaded it will stall. The 3-element thermal overload relay or instantaneous phase failure relay should trip it. A motor that has single-phased at standstill cannot start - it hums and draws locked-rotor current in two phases until protection trips, which must be within seconds to prevent winding damage.</div></div>

  <!-- ═══ VOLTAGE SAG ═══ -->
  <div class="n-h1" id="s3-voltage-sag">📉 Voltage Sag - Definition and Causes</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>A voltage sag (voltage dip) is a short-duration reduction in RMS supply voltage below normal, lasting from half a cycle to a few seconds.</strong> Distinct from a sustained undervoltage (generator fault) - a sag is temporary and self-correcting as the AVR responds. Voltage sags are the most common power quality disturbance on ships.</div></div>
  <div class="n-h2">Causes on Board Ship</div>
  <ul class="n-list">
    <li><strong>Large motor starting (DOL):</strong> 5–8× FLC starting current draws heavily from the generator - busbar voltage dips during the starting period. Typical dip: 10–15% for 3–5 seconds. Most common cause on ships. Risk: adjacent automation PLCs reset, or contactors drop out if voltage falls below ~80%.</li>
    <li><strong>Sudden large load connection:</strong> Bow thruster, cargo pump, or large air compressor switched on without reduced-voltage starting creates an instantaneous large load step.</li>
    <li><strong>Generator AVR lag:</strong> Automatic Voltage Regulator corrects the sag within 1–3 seconds, but there is an inherent sensing and response delay during which voltage remains depressed.</li>
    <li><strong>Generator under-loaded / high impedance:</strong> A generator operating well below rated output has a high effective impedance - it drops more terminal voltage for a given load step.</li>
  </ul>
  <div class="n-h2">Effects of Voltage Sag</div>
  <ul class="n-list">
    <li>Automation controllers and PLCs may reset or misoperate at voltages below ~85% rated - causing unexpected shutdowns of automation systems.</li>
    <li>Running motors draw higher current to maintain torque at reduced voltage → thermal overload risk.</li>
    <li>Magnetic contactors may drop out if terminal voltage falls below ~80% rated → unexpected motor stops, possible process upset.</li>
    <li>Fluorescent and HID lamps flicker or extinguish.</li>
    <li><strong>Mitigation:</strong> Use soft starters or VFDs for large motors. PMS load-shedding to protect generators before starting large loads. Ensure sufficient spinning reserve (kW headroom) before starting large loads. Pre-notify automation systems via PMS start sequence.</li>
  </ul>

  <!-- ═══ 440V vs 110/220V ═══ -->
  <div class="n-h1" id="s3-440v-vs-110v">⚡ Why 440V for Motors &amp; 110/220V for Lighting?</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Voltage level is chosen based on safety (for personnel) and economics (for cables and switchgear).</strong></div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">440V for Large Motors - Economics</div>
      <div class="card-desc"><strong>Lower current for same power.</strong> P = √3 × V × I × PF. At 440V, current is half that at 220V for the same kW. Half the current → cable cross-section is ¼ (I²R losses and cable sizing both ∝ current²). Smaller cables are lighter, cheaper, and easier to route through ship structure. Contactors, fuses, and busbars are all smaller and cheaper at higher voltage for the same power delivered. Example: 50 kW motor draws ~75A at 440V vs ~150A at 220V.</div>
    </div>
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">110/220V for Lighting - Personnel Safety</div>
      <div class="card-desc"><strong>Lower shock risk in damp/wet conditions.</strong> Ship lighting is in accommodation, machinery spaces, and on deck - all locations where crew may contact live parts, often in wet or damp conditions. A shock from 440V in a wet environment is almost certainly fatal. 110V significantly reduces electrocution risk. Below 50V AC is considered safe - portable hand tools in high-risk areas (bilges, tanks) should use 50V via an isolating transformer per SOLAS and class requirements. Consumer equipment (galley, cabin appliances) standardised at 220/230V.</div>
    </div>
  </div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Why is 440V used for motors and 110/220V for lighting on ships?</strong><br><strong>Ideal Answer:</strong> For motors, higher voltage gives lower current for the same power - smaller cables, lower I²R losses, and smaller switchgear. For a 50 kW motor, 440V requires ~75A compared to ~150A at 220V, so cable cross-section is 4 times smaller. For lighting, lower voltage is used for personnel safety - lighting is in locations where crew may contact live parts in damp conditions. A 440V shock in a wet engine room would be lethal; 110V greatly reduces this risk. Portable tools in high-risk areas (tanks, bilges) should use 50V via an isolating transformer.</div></div>

  <!-- ═══ DC MOTOR ON AC SUPPLY ═══ -->
  <div class="n-h1" id="s3-dc-on-ac">⚠️ DC Motor Connected to AC Supply - Effects</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Never connect a standard DC machine to an AC supply - severe and rapid damage will result.</strong></div></div>
  <ul class="n-list">
    <li><strong>Severe brush/commutator arcing:</strong> AC alternates polarity 50 times per second. The commutator is not designed for alternating current - large reactive voltages are induced across the segments, causing destructive arcing, rapid brush wear, and commutator pitting and burning.</li>
    <li><strong>Excessive iron losses (heat):</strong> The field poles and armature core are solid or lightly laminated - designed for DC where flux is constant. AC flux at 50 Hz creates massive eddy current and hysteresis losses in the iron - the motor overheats rapidly and may catch fire.</li>
    <li><strong>In a DC shunt motor:</strong> The field winding (high inductance) presents very high inductive reactance to 50 Hz AC → field current is nearly zero → field flux collapses → motor attempts to over-speed dangerously (approaches runaway condition, similar to a series motor at no-load).</li>
    <li><strong>In a DC series motor:</strong> Both field and armature polarities reverse together with each AC half-cycle → torque alternates direction → motor runs at reduced speed with violent vibration and pulsating, noisy torque.</li>
    <li><strong>Result:</strong> Motor overheats severely, brushes and commutator are destroyed, insulation fails. Motor must be isolated immediately if accidentally connected to AC.</li>
  </ul>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Exception - Universal motor:</strong> Some small motors (hand power tools, vacuum cleaners, blenders) are specifically designed to run on both AC and DC. They are series-wound with fully laminated cores and purpose-built high-frequency commutators. Standard shipboard DC machines are NOT universal motors and must never be connected to AC supply.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: What happens if a DC motor is fed with AC supply?</strong><br><strong>Ideal Answer:</strong> The motor runs poorly with heavy sparking at the brushes and commutator. The iron core - not designed for 50 Hz alternating flux - generates excessive eddy current and hysteresis losses, overheating rapidly. The commutator is destroyed by sustained arcing. In a shunt motor, the high inductance of the field winding presents high reactance to AC - field current collapses - the motor may attempt to over-speed dangerously. The motor must be isolated immediately. It is not suitable and would burn out rapidly.</div></div>

  <!-- ═══ SPECIAL SHIP MOTORS ═══ -->
  <div class="n-h1" id="s3-special-motors">⚓ Special Ship Motor Applications</div>
  <div class="n-h2">Steering Motor - Protection Philosophy is the Opposite of Normal</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Steering gear motors are subject to SOLAS Chapter II-1 and class rules. Their protection philosophy is the OPPOSITE of a normal motor - maintaining steering control takes absolute priority over protecting the motor from damage.</strong></div></div>
  <table class="n-table">
    <tr><th>Feature</th><th>Steering Motor</th><th>Normal Motor</th></tr>
    <tr><td>Overload condition</td><td class="bad">Alarm only to bridge - does NOT trip. Tripping during hard-over manoeuvre would cause loss of steering and collision risk.</td><td>Trips on sustained overload to protect winding</td></tr>
    <tr><td>Phase failure</td><td class="hl">Alarm to bridge only - does not trip immediately.</td><td>Phase failure relay trips motor instantaneously</td></tr>
    <tr><td>Power restoration</td><td class="hl">Must auto-restart after power interruption WITHOUT manual reset at the steering gear room</td><td>Manual restart required after UV trip</td></tr>
    <tr><td>SOLAS redundancy</td><td class="ok">Two independent power-operated units required, each operable independently and transferable in ≤ 2 minutes from within the steering gear room</td><td>Single motor acceptable</td></tr>
    <tr><td>Thermal protection</td><td class="hl">Winding thermistor → alarm only - does NOT trip the motor</td><td>Thermistor can trip the motor</td></tr>
  </table>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Is there any specific difference in steering motors compared to other motors?</strong><br><strong>Ideal Answer:</strong> A steering motor will NOT trip on overload - it only gives an alarm to the bridge, because losing steering while manoeuvring is more dangerous than damaging the motor. It also gives a phase failure alarm but does not trip immediately. It must auto-restart after any power interruption without manual reset. SOLAS Chapter II-1 requires two independent power-operated steering units, each capable of operating independently, with the ability to transfer between them within 2 minutes from the steering gear room.</div></div>
  <div class="n-h2">Purifier Motor - Long Starting, High Temperature</div>
  <table class="n-table">
    <tr><th>Feature</th><th>Purifier Motor</th><th>Typical ER Motor</th></tr>
    <tr><td>Starting protection</td><td class="hl">Overcurrent relay bypassed during start - bowl's high rotational inertia requires 3–8 minutes to reach operating speed. A timer keeps the OC relay bypassed for ~10 minutes (set longer than the run-up). Normal relay would trip motor before it reaches speed.</td><td>Full overload protection from time of start</td></tr>
    <tr><td>Bearing grease</td><td class="hl">High-temperature grease specified - purifier room operates at 45–55°C; standard grease liquefies and runs out of the bearing, causing seizure.</td><td>Standard bearing grease</td></tr>
    <tr><td>Speed</td><td class="hl">Motor runs at ~1450 RPM driving a gearbox → bowl runs at 6,000–12,000 RPM (typically 7,000–9,000 RPM). Very high centrifugal forces in bowl.</td><td>Motor shaft speed = operating speed of machine</td></tr>
    <tr><td>Starting time</td><td class="hl">3–8 minutes to reach operating speed. A timer keeps the overcurrent relay bypassed for ~10 minutes, then re-inserts the overload protection.</td><td>Seconds to reach full speed</td></tr>
  </table>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: What is the difference between a purifier motor and other engine room motors? Why does it not trip on starting?</strong><br><strong>Ideal Answer:</strong> A purifier motor has its overcurrent relay bypassed during starting because the separator bowl has very high rotational inertia - it takes 3–8 minutes to reach operating speed, during which the motor draws high current. A timer keeps the OC relay bypassed for ~10 minutes (set longer than the run-up). A normal relay would trip the motor before it gets up to speed. High-temperature grease is used in bearings because the purifier room operates at elevated temperature. The motor drives the bowl through a gear train to bowl speeds of 6,000–12,000 RPM (typically 7,000–9,000 RPM). After the timed starting period, the overcurrent relay is re-inserted for normal running protection.</div></div>

  <div class="n-h2">Main Engine Governor - Actuator Motor</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">The electronic / electro-hydraulic governor (e.g. Woodward) positions the fuel rack through an <strong>actuator</strong>. The internal drive is a small <strong>proportional actuator - a moving-coil / torque motor or a stepper (servo) motor</strong> - fed by the governor's speed-error signal; on electro-hydraulic types this small motor pilots a hydraulic amplifier that moves the fuel racks. The <strong>speed-setting (raise / lower) motor</strong> is a small reversible DC motor. ETO checks the actuator coil, its feedback (LVDT / potentiometer) and the wiring.</div></div>

  <!-- ═══ CRANE SPEED CONTROL ═══ -->
  <div class="n-h1" id="s3-crane-speed">🏗️ ER Crane - Speed Control Methods</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Multiple candidates asked about crane motor speed control - know all four methods with how each works.</strong></div></div>
  <ul class="n-list">
    <li><strong>1. POLE CHANGING (Dahlander winding):</strong> Motor has a special winding that can be reconnected to give 2-pole (high speed) or 4-pole (low speed) operation. Simple switching gives two discrete speeds only - no intermediate speed. Fast for hoisting, slow for precise load placement.</li>
    <li><strong>2. ROTOR RESISTANCE (Slip ring motor):</strong> External resistance inserted in the rotor circuit via slip rings - increases effective rotor impedance → increases slip → reduces speed. Stepped speed control (one step per resistance value). Good torque maintained at reduced speed - used historically for ship cranes. Energy wasted in resistors.</li>
    <li><strong>3. VFD (Variable Frequency Drive):</strong> Full variable speed from zero to above rated, smooth and stepless. Regenerative braking when lowering loads. Modern ship cranes - best method for efficiency, smoothness, and precise control. Energy recovered during lowering.</li>
    <li><strong>4. CASCADE CONTROL (Concatenation):</strong> Two motors mechanically coupled - auxiliary motor fed from the slip-ring rotor circuit of the main motor. Rotor frequency of main motor supplies auxiliary motor. Gives a fixed reduced speed (approximately half synchronous). Less common, rarely seen in modern installations.</li>
  </ul>

  <!-- ═══ WOUND-ROTOR (SLIP RING) MOTOR ═══ -->
  <div class="n-h1" id="s3-woundrotor">🔄 Wound-Rotor (Slip-Ring) Induction Motor - Full Detail</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask about wound-rotor construction, how starting torque is maximised, speed control, and why slip rings and brushes need maintenance.</strong></div></div>

  <div class="n-h2">Construction - Difference from Squirrel Cage</div>
  <table class="n-table">
    <tr><th>Feature</th><th>Squirrel Cage Rotor</th><th>Wound Rotor</th></tr>
    <tr><td>Rotor winding</td><td>Aluminium/copper bars short-circuited by end rings - self-contained, no external connection</td><td>Three-phase winding (same number of poles as stator), wound on rotor with insulated conductors</td></tr>
    <tr><td>External connection</td><td class="bad">None - short-circuited internally</td><td class="ok">Three slip rings on shaft → brushes → external resistance banks</td></tr>
    <tr><td>Resistance control</td><td class="bad">Not possible - fixed rotor resistance</td><td class="ok">Variable - external resistance added/removed in steps</td></tr>
    <tr><td>Starting performance</td><td class="bad">High starting current (5–8× FLC), moderate starting torque</td><td class="ok">High starting torque with reduced starting current when resistance is maximised</td></tr>
    <tr><td>Running efficiency</td><td class="ok">High - short-circuit rotor, no external losses</td><td class="bad">Lower - energy lost in external resistors when used for speed control</td></tr>
    <tr><td>Cost and maintenance</td><td class="ok">Low cost, low maintenance (no brushes/slip rings)</td><td class="bad">Higher cost, brush and slip ring wear requires regular maintenance</td></tr>
  </table>

  <div class="n-h2">Starting - Maximum Torque with Minimum Current</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle (Thévenin / circle diagram):</strong> Maximum torque in an induction motor occurs when rotor resistance = rotor reactance (R_rotor = X_rotor). In a squirrel-cage rotor, R_rotor is fixed and small → maximum torque occurs at high speed, not at starting. In a wound-rotor motor, external resistance is added to make <strong>(R_rotor + R_external) = X_rotor at s=1</strong> → maximum torque is achieved at <em>standstill</em>. Starting current is also reduced because the higher rotor impedance limits stator-side reflected current. As speed builds, resistance is cut out in steps to maintain near-maximum torque throughout the acceleration.</div></div>

  <div class="n-h2">Speed Control with Rotor Resistance</div>
  <ul class="n-list">
    <li>Adding external resistance → rotor current at a given speed decreases → torque decreases → rotor must slip more to develop the required torque → speed falls. More resistance = lower speed.</li>
    <li><strong>Speed range:</strong> From nearly zero to near-synchronous speed. Speed is load-dependent (soft characteristic) - speed changes with load changes, unlike VFD.</li>
    <li><strong>Efficiency penalty:</strong> The power lost in external resistors = slip × rated power. At 50% speed (s = 0.5), 50% of air-gap power is dissipated as heat in resistors. Highly inefficient for continuous variable-speed operation - only justified for intermittent duty (starting/jogging cranes).</li>
  </ul>

  <div class="n-h2">Slip Ring &amp; Brush Maintenance</div>
  <ul class="n-list">
    <li><strong>Slip ring inspection:</strong> Monthly - check for scoring, copper deposits, or eccentricity. Smooth with fine emery paper (<em>not</em> silicon carbide - leaves conducting grit). Polish with leather strip running.</li>
    <li><strong>Brush inspection:</strong> Check brush length (replace when worn to 50% original length), check spring pressure (100–200 g/cm² typical), check for sparking (indicates poor contact or overload). Ensure brushes move freely in holders without sticking.</li>
    <li><strong>Short-circuit device:</strong> Once motor is at full speed, the external resistance is fully cut out and a short-circuit bar (or contactor) shorts all three slip rings together - rotor becomes equivalent to a squirrel cage for running, eliminating brush wear during normal operation.</li>
  </ul>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory:</strong> Wound rotor = three-phase winding + slip rings + brushes + external resistance. Max starting torque when R_external makes R_total = X_rotor. Speed control by adding resistance = higher slip = lower speed. Running: short-circuit the rings to reduce brush wear. Ship uses: cranes, windlasses, high-inertia loads.</div></div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t03-slip-ring-motor.webp" alt="Slip-ring induction motor — rotor winding, slip rings on shaft, brushes, external resistance bank" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAADwAwCdASocABAAPu1kqk4ppaQiMAgBMB2JaQAAW+qd+ji77BxnOA3QAP7v2mEaghKUqprtG4rMucEzTf7i12TsMngvQ4ke5Bbkzn8bt9K6b4YKXeJpAcNCr8+Go+IKAAA=">
    <div class="note-diagram-cap">Fig. Wound-Rotor (Slip-Ring) Motor — rotor winding, slip rings, brush gear, external resistance for starting/speed control</div>
  </div>

  <!-- ═══ AFTER REWINDING ═══ -->
  <div class="n-h1" id="s3-rewind">🔧 Motor Checks After Rewinding</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal: "Motor came back from shore after rewinding - what checks do you do before putting it back into service?"</strong></div></div>
  <ol class="n-steps">
    <li><strong>Insulation Resistance (IR) test:</strong> All 3 phases to earth and between phases with 500V DC megger (1000V DC for motors above 1 kV). Minimum acceptable: 1 MΩ per kV rated + 1 MΩ (IEEE 43-2013). A healthy new rewound winding should show ≫ 100 MΩ. Low IR = moisture in winding or poor resin impregnation - dry in oven before proceeding.</li>
    <li><strong>Winding resistance balance:</strong> Measure DC resistance of all 3 phases with a DLRO or Wheatstone bridge. Should be balanced within 2–5% - imbalance beyond 5% indicates shorted turns or poor solder/connection joints in one phase. Return to rewind shop.</li>
    <li><strong>Terminal markings check:</strong> Confirm U1/U2, V1/V2, W1/W2 correctly labelled. If markings missing → identify by battery polarity test (connect battery to one winding, check induced voltage polarity in others to determine winding starts and finishes).</li>
    <li><strong>Phase rotation check:</strong> Use phase rotation meter at terminals before connecting to supply - confirm same rotation direction as required by driven machinery. Swap any two phases if wrong.</li>
    <li><strong>Surge / impulse test:</strong> Detects turn-to-turn insulation weakness not found by simple IR test - a high-voltage surge is applied to each winding pair and waveforms compared. An imbalance indicates a weak spot in the insulation.</li>
    <li><strong>High Voltage (Hi-Pot) test:</strong> Applied AC = 2 × rated voltage + 1000 V for 1 minute (IEC 60034-1). Example: for a 440V motor: 2 × 440 + 1000 = <span class="n-val">1880 V AC</span> for 1 minute. Proves insulation integrity at above-rated voltage.</li>
    <li><strong>Air gap check:</strong> Rotate shaft by hand and listen for bearing roughness or internal rubbing. Measure air gap at 4 cardinal points (top, bottom, left, right) using feeler gauges between rotor and stator bore. Maximum variation must be within ±10% - unequal air gap causes unbalanced magnetic pull, vibration, and accelerated bearing failure.</li>
    <li><strong>No-load running test:</strong> Run uncoupled and unloaded. Check: starting current (should be 5–8× FLC briefly then drop), running current balance on all three phases (within 2–3% of each other), bearing temperature (should stabilise within 30 min), vibration level, and any abnormal noise.</li>
    <li><strong>IP rating maintained:</strong> Check all cable gland seals, terminal box cover gasket, and drain plugs are correctly reinstated. A rewound motor with a poorly sealed terminal box will absorb moisture and fail the IR test rapidly.</li>
  </ol>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: What checks would you do on a motor after rewinding?</strong><br><strong>Ideal Answer:</strong> IR test (phase-earth and phase-phase - minimum 1 MΩ), winding resistance balance on all three phases (within 2–5%), confirm terminal markings and phase rotation, Hi-Pot test at 2×Vrated + 1000V for 1 minute, air gap measurement at 4 points, then no-load run checking current balance, vibration, and bearing temperature. Confirm IP rating is maintained by checking all gland seals and the terminal box cover.</div></div>

  <!-- ═══ MOTOR FRAME NUMBER ═══ -->
  <div class="n-h1" id="s-motorframe">📐 Motor Frame Number (IEC Standard)</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> The IEC motor frame number directly indicates the <strong>shaft centre height in millimetres</strong> from the mounting base feet to the shaft centreline.</div></div>
  <ul class="n-list">
    <li><strong>Example:</strong> IEC 132M B3 - the shaft centre is <strong>132 mm</strong> above the base. M = Medium body length. B3 = Foot-mounted.</li>
    <li><strong>Why critical when ordering:</strong> Matching the frame number guarantees the replacement motor will fit the existing foundation footprint, mounting bolt hole pattern, shaft centre height, and coupling height without structural modifications. A wrong frame = wrong bolt pattern, wrong shaft height = permanent misalignment, vibration, and premature bearing failure.</li>
    <li><strong>Body length suffixes:</strong> S = short body (shorter core stack, lower output). M = medium (standard). L = long body (higher output from same frame height).</li>
    <li><strong>Mounting suffixes:</strong> B3 = foot-mounted (IEC standard floor mount). B5 = face/flange-mounted (no feet). B35 = foot + flange (both). The mounting suffix determines the physical shape of the motor end.</li>
  </ul>

  <!-- ═══ MOTOR RECEIVED CHECKS ═══ -->
  <div class="n-h1" id="s-motorchecks">✅ Received Motor Checks &amp; Terminal Identification</div>
  <div class="n-p"><strong>Checks for a new motor received from shore before installation:</strong> Verify documents match the order (kW, voltage, frame, IP) → Physical inspect for transport damage → <strong>Megger test (&gt;1 MΩ phase-to-earth and phase-to-phase)</strong> → Turn shaft by hand to check bearing freedom and listen for roughness → Inspect terminal box for correct terminal markings and any moisture → Compare nameplate FLA with starter overload relay setting → Perform bump test (momentary energisation uncoupled) to confirm rotation direction → No-load run test to check current balance, vibration, and bearing temperature.</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Identifying Rewound Motor Terminals When Markings Are Obscured:</strong><br>
  <strong>Step 1 - Continuity test:</strong> Find the 3 winding pairs using a continuity tester. Label pairs provisionally as Winding 1 (1a–1b), Winding 2 (2a–2b), Winding 3 (3a–3b).<br>
  <strong>Step 2 - Battery polarity test:</strong> Connect a 12V battery momentarily to Winding 1 (1a = +, 1b = −). Check induced voltage in Winding 2 and Winding 3 with a millivoltmeter. Positive deflection = same polarity sense (both are "starts"). Negative deflection = opposite sense (that lead is a "finish"). This establishes which terminals are the U1, V1, W1 starts and U2, V2, W2 finishes.<br>
  <strong>Step 3 - Connect accordingly:</strong> Star = join all three "finish" ends (U2, V2, W2) together. Delta = connect U2→V1, V2→W1, W2→U1.</div></div>
  <div class="n-h2">Post-Rewinding Acceptance Protocol - 4 Steps</div>
  <ul class="n-list">
    <li><strong>1. Insulation Resistance (IR) Test:</strong> 500V or 1000V DC megger between each phase and phase-to-earth. Must register &gt;100 MΩ for a new rewound winding. Polarisation Index (PI) = IR₁₀min / IR₁min &gt; 2.0 is required for HV motors - indicates the insulation is clean and not contaminated with moisture.</li>
    <li><strong>2. Winding Resistance Balance Test:</strong> Use a DLRO or low-resistance ohmmeter to measure phase resistance for all three phases. Readings must be balanced within 2% of each other. Significant imbalance indicates turn-to-turn shorts - motor must be returned for rework.</li>
    <li><strong>3. Mechanical Inspection - Air Gap Check:</strong> Rotate shaft by hand and listen for bearing roughness or internal rubbing. Measure air gap at 4 cardinal points (top, bottom, left, right) using feeler gauges. Maximum variation between measurements must be within ±10% to confirm concentric alignment. Unequal air gap causes unbalanced magnetic pull → vibration → rapid bearing failure.</li>
    <li><strong>4. Rotation Bump Test:</strong> Before coupling the mechanical load, momentarily energise the motor (apply power for 1–2 seconds only). Verify shaft rotation direction matches the driven equipment requirement. If wrong, reverse any two supply phases.</li>
  </ul>

  <!-- ═══ ALIGNMENT & GREASE ═══ -->
  <div class="n-h1" id="s3-frame-detail">📏 Motor Alignment &amp; Bearing Greasing Procedure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal, Vishwanathan ask alignment procedure and frame number interpretation.</strong> Frame number encodes physical dimensions - wrong frame = wrong bolt pattern, wrong shaft height = structural misalignment and premature bearing failure.</div></div>
  <div class="n-h2">DTI Precision Alignment Procedure</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Dial Test Indicator (DTI) coupling alignment - two types of measurement required:</strong><br>
  <strong>Parallel offset (rim readings):</strong> Mount DTI on one coupling half, rotate the shaft 360°, read the dial at 12/3/6/9 o'clock positions on the other coupling rim. The difference between top (12) and bottom (6) readings = 2× parallel vertical offset. Left (9) vs right (3) = horizontal parallel offset.<br>
  <strong>Angular misalignment (face readings):</strong> Mount DTI on the coupling face (axial direction, not radial), rotate 360°, read axial movement at 4 positions. Difference top vs bottom = angular misalignment in the vertical plane. Correct by shimming the motor mounting feet.<br>
  <strong>Tolerance limit:</strong> &lt;<span class="n-val">0.05 mm</span> TIR for both parallel and angular misalignment. Exceeding this causes vibration, premature bearing wear, seal failure, and coupling fatigue cracking.</div></div>
  <div class="n-h2">Motor Coupling Check Procedure</div>
  <ol class="n-steps">
    <li><strong>Alignment check (DTI):</strong> Rim readings for parallel, face readings for angular. Tolerance &lt;0.05 mm. Also use a straight edge across coupling flanges to detect gross misalignment before applying DTI.</li>
    <li><strong>Coupling bolts:</strong> Check torque to manufacturer specification. Check condition of anti-vibration rubber inserts (for flexible couplings) - cracking or compression set indicates replacement needed.</li>
    <li><strong>End float check:</strong> Measure axial movement (thrust) at the coupling - must be within spec to avoid overloading thrust bearings on motor or pump.</li>
    <li><strong>After brief run:</strong> Re-check vibration (compare to baseline record), bearing temperature (should stabilise within 30 minutes). No abnormal noise.</li>
    <li><strong>Record:</strong> Log alignment readings, bolt torques, coupling condition, date, and next inspection due in the maintenance management system (PMS).</li>
  </ol>
  <div class="n-h2">Bearing Greasing - Correct Procedure &amp; Formula</div>
  <div class="n-formula">G = 0.005 × D × B<div class="label">G = grease quantity (grams) · D = bearing outer diameter (mm) · B = bearing width (mm)</div></div>
  <ol class="n-steps">
    <li>Clean the grease nipple thoroughly with a clean rag before attaching the grease gun - prevents contaminant injection into the bearing.</li>
    <li>Calculate the correct quantity using G = 0.005 × D × B. Example: bearing OD = 100 mm, width = 25 mm → G = 0.005 × 100 × 25 = 12.5 grams.</li>
    <li>Open the relief plug (or remove it entirely) - this allows old displaced grease to be expelled rather than building up excessive pressure inside the bearing housing.</li>
    <li>Inject the calculated quantity slowly and steadily - do NOT overgrease. Excess grease causes churning heat, elevated bearing temperature, and accelerated cage and seal wear.</li>
    <li>Run motor for 30 minutes at operating temperature with the relief plug open - old degraded grease is expelled through the relief.</li>
    <li>Close relief plug. Log: date, bearing identification number, quantity injected, grease type used, and next service due date in the maintenance record.</li>
  </ol>

  <!-- ═══ MOTOR PROCUREMENT ═══ -->
  <div class="n-h1" id="s3-motor-procurement">📦 Motor Procurement - 14-Point Specification Checklist</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: "what specifications do you provide when ordering a replacement motor?" Know all 14 items - getting any one wrong could mean the replacement motor cannot be installed or operated safely.</strong></div></div>
  <ol class="n-steps">
    <li><strong>Power rating:</strong> kW (shaft output power) - not kVA</li>
    <li><strong>Voltage:</strong> 440V / 6.6 kV / 11 kV as applicable</li>
    <li><strong>Frequency:</strong> 50 Hz or 60 Hz</li>
    <li><strong>Speed:</strong> RPM at full load (or synchronous speed + number of poles)</li>
    <li><strong>Type:</strong> AC squirrel cage induction / slip ring / synchronous / DC</li>
    <li><strong>Phases:</strong> 3-phase</li>
    <li><strong>Frame size:</strong> IEC frame number (encodes shaft height, bolt pattern, physical dimensions)</li>
    <li><strong>Insulation class:</strong> Class F (155°C max) or Class H (180°C max)</li>
    <li><strong>IP rating:</strong> IP44 (ER), IP55 (exposed deck), IP56 (wash-down areas), IP68 (submersible)</li>
    <li><strong>Mounting:</strong> B3 (foot), B5 (flange), B35 (foot + flange combined)</li>
    <li><strong>Duty cycle:</strong> S1 continuous / S2 short-time / S3 intermittent percentage</li>
    <li><strong>Efficiency class:</strong> IE2 or IE3 (IE3 mandatory under many flag state regulations now)</li>
    <li><strong>Ambient temperature rating:</strong> 40°C standard for open-air applications; 45°C or 55°C for high-ambient ER locations</li>
    <li><strong>Ex certification:</strong> EEx d (flameproof enclosure) or EEx e (increased safety) if for hazardous area (cargo pump room, paint store, battery room)</li>
  </ol>
  <div class="n-h2">IP Rating by Ship Location</div>
  <table class="n-table">
    <tr><th>Location</th><th>Min IP Rating</th><th>Protection Level</th></tr>
    <tr><td>General engine room (dry)</td><td class="hl"><span class="n-val">IP44</span></td><td>Objects &gt;1 mm, water splashes from any direction</td></tr>
    <tr><td>Exposed cargo decks</td><td class="hl"><span class="n-val">IP55</span></td><td>Dust-tight, low-pressure water jets from any direction</td></tr>
    <tr><td>Wash-down / RoRo / car deck</td><td class="hl"><span class="n-val">IP56</span></td><td>High-impact heavy water jets from any direction</td></tr>
    <tr><td>Bilge / intermittent submersion</td><td class="hl"><span class="n-val">IP68</span></td><td>Continuous underwater submersion to rated depth</td></tr>
  </table>
  <div class="n-h2">5 kW 440V Motor - FLC Calculation &amp; Starter Selection</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyor asked motor nameplate data and starter selection for a specific 5 kW pump motor.</strong></div></div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t03-motor-nameplate.webp" alt="Motor nameplate with annotated fields — kW, voltage, current, RPM, frame, IP, insulation class, duty" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwAgCdASocABAAPu1iqU2ppaOiMAgBMB2JaV2AADdYAAD+8BP2RnBwB6Wy4F00ffN7oL3jfWDVvmpCJazhN0rH+HUVlosO5BCZcpjsP3t/1aDUIAA=">
    <div class="note-diagram-cap">Fig. Motor Nameplate — kW, V, A, RPM, Hz, frame size, IP rating, insulation class, efficiency, duty cycle</div>
  </div>
  <ul class="n-list">
    <li>FLC = P / (√3 × V × PF × η) ≈ 5000 / (1.732 × 440 × 0.85 × 0.90) ≈ <span class="n-val">8.5 A</span></li>
    <li>Starting current (DOL): approximately 6–8× FLC = <span class="n-val">51–68 A</span></li>
    <li>Speed: ~1450 RPM (4-pole, 50 Hz synchronous = 1500 RPM, ~3% slip at full load)</li>
    <li>HRC fuse selection: 1.5–2.5 × FLC = 12.75–21.25 A → select nearest standard size, typically <span class="n-val">16A or 20A</span></li>
    <li><strong>Starter selection for a pump:</strong> Soft starter preferred - gentle voltage ramp eliminates water hammer, protects pipe fittings, and limits starting current to ~150% FLC. Star-delta is also acceptable for a lightly loaded start, but soft starter gives superior starting control.</li>
  </ul>

  <!-- ═══ MOTOR OVERHAULING ═══ -->
  <div class="n-h1" id="s3-motor-overhaul">🔧 Motor Overhauling Procedure - 9 Steps</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Multiple candidates asked about motor overhauling procedure - know all 9 steps in order.</strong></div></div>
  <ol class="n-steps">
    <li><strong>Isolate, permit to work:</strong> Lock off at MCB/ACB, apply padlock and danger tag, verify dead with calibrated voltage tester on all three phases at motor terminals. Obtain PTW from chief engineer.</li>
    <li><strong>Disconnect all cables:</strong> Mark with identification tags (phase L1/L2/L3, earth) for correct reconnection. Photograph terminal box before disconnection.</li>
    <li><strong>Remove motor from mounting:</strong> Support shaft during removal to avoid putting bending load on bearings. Mark coupling alignment positions before separating.</li>
    <li><strong>Disassemble:</strong> Remove end shields (noting orientation for reassembly), extract rotor carefully (protect windings from rotor contact). Inspect bearings for wear, pitting, discolouration, and cage damage.</li>
    <li><strong>Clean windings:</strong> Use dry compressed air (not high-pressure steam). Inspect for burn marks, tracking marks, and visible conductor damage. Wipe accessible winding surfaces with clean dry cloth.</li>
    <li><strong>Replace bearings:</strong> Standard practice during overhaul - fit correct ISO bearing per nameplate or bearing code. Never refit old bearings if in doubt - bearing cost is minimal compared to consequential damage.</li>
    <li><strong>Reassemble and align:</strong> Refit end shields in original orientation. Refit to mounting. Check coupling alignment with DTI - parallel and angular within 0.05 mm.</li>
    <li><strong>Megger test before energising:</strong> IR test all phases to earth and between phases. Record value - compare to previous records (trending is as important as the absolute value). Minimum 1 MΩ before proceeding.</li>
    <li><strong>Commission:</strong> Check rotation direction (bump test before coupling). Measure running current on all three phases and check balance (within 2–3%). Check vibration against baseline and bearing temperature stabilisation after 30 minutes running.</li>
  </ol>

  <!-- ═══ HYDROPHORE AUTO MODE ═══ -->
  <div class="n-h1" id="s3-hydrophore-auto">💧 Hydrophore Pump - Auto Mode Starter</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>A hydrophore (pressure tank) system maintains constant water pressure on the domestic water ring main. The pump motor is started and stopped automatically by a pressure switch that senses the pressure inside the pressure vessel containing an air cushion.</strong></div></div>
  <div class="n-h2">Auto Mode Operating Sequence</div>
  <ol class="n-steps">
    <li><strong>Selector switch set to AUTO.</strong> Starter control circuit energised via the pressure switch contacts.</li>
    <li><strong>Pressure falls below lower set point (e.g. 2.5 bar):</strong> Pressure switch closes → contactor coil energises → motor starts and pump runs.</li>
    <li><strong>Pump runs, tank pressure rises</strong> - water compresses the air cushion in the upper part of the vessel.</li>
    <li><strong>Pressure reaches upper set point (e.g. 4.0 bar):</strong> Pressure switch opens → coil de-energises → motor stops.</li>
    <li><strong>Tank holds pressure</strong> (air cushion acts as accumulator) until consumption draws it below the lower set point, repeating the cycle.</li>
    <li><strong>Auto reset overload:</strong> Overload relay must be set to auto-reset for unmanned automated operation; otherwise a tripped relay requires manual intervention at the starter - defeating the purpose of auto mode.</li>
  </ol>
  <div class="n-grid">
    <div class="n-card">
      <div class="card-title">Differential Pressure Setting</div>
      <div class="card-desc">= difference between upper (stop) and lower (start) pressures. Typical: 1.0–1.5 bar differential. Too narrow → motor cycles too rapidly (short-cycling → overheating). Too wide → unacceptably large pressure swings at taps and fixtures.</div>
    </div>
    <div class="n-card">
      <div class="card-title">Anti Short-Cycle Timer</div>
      <div class="card-desc">A time-delay relay prevents motor restart for 30–60 seconds after stopping - protects motor from repeated starts that accumulate heat in windings before cooling occurs. Sometimes built into the pressure switch electronics or PLC logic.</div>
    </div>
  </div>

  <!-- ═══ MOTOR TROUBLESHOOTING ═══ -->
  <div class="n-h1" id="s3-troubleshoot">🔍 Motor Troubleshooting - Practical Scenarios</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask practical fault-finding scenarios - know the systematic approach for each. Demonstrate you think logically: safe first, simple checks before dismantling.</strong></div></div>
  <div class="n-h2">Motor Trips on Starting or Running - Systematic Check</div>
  <ol class="n-steps">
    <li><strong>Check overload relay setting:</strong> Is it set correctly to 105–115% of rated FLA? An under-set relay trips on the legitimate starting surge of DOL starting.</li>
    <li><strong>Check supply voltage on all three phases:</strong> Low voltage → higher current → thermal relay trips. Look for voltage imbalance between phases (more than 5% imbalance is significant).</li>
    <li><strong>Check for single phasing:</strong> Three ammeters - missing phase shows zero reading. Phase failure relay indicator should also show.</li>
    <li><strong>Check driven machinery:</strong> Is the mechanical load jammed? Is the pump suction blocked? Is a discharge valve closed causing deadhead overload? Is a bearing seized?</li>
    <li><strong>Check starting method:</strong> DOL starting surge on a large motor may trip a borderline relay - consider switching to soft starter or reviewing relay time setting.</li>
    <li><strong>If all above normal and motor still trips:</strong> Megger the motor (phase-to-earth and phase-to-phase). Low IR indicates winding fault or moisture ingress. Measure winding DC resistance on all three phases - imbalance &gt;2–5% indicates turn-to-turn short. If IR and winding balance are both OK, check the overload relay itself or its CT for fault (spurious trip). If a thermal replica relay: check if it has accumulated heat from previous starts and cooling time has not elapsed.</li>
  </ol>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Motor trips immediately on starting - what do you check? Still trips after checking all obvious causes - what next?</strong><br><strong>Ideal Answer:</strong> First check: overload relay setting, supply voltage balance, load condition (jammed machinery), single phasing, and starting method suitability. If all OK: megger the motor - low IR indicates winding fault or moisture. Measure winding resistance on all three phases - imbalance &gt;2–5% indicates a turn-to-turn short. If IR and winding resistance are both normal, the relay or its CT may be faulty. If a thermal replica relay, check if accumulated heat from previous starts is preventing restart until the relay cools down.</div></div>
  <div class="n-h2">Motor Gives Electric Shock After Isolation - Causes</div>
  <ul class="n-list">
    <li><strong>Capacitor charge:</strong> A power-factor correction capacitor in the motor circuit retains charge after supply is removed. Discharge through a resistor before working on any motor with PF capacitors.</li>
    <li><strong>Breaker / isolator fault:</strong> The isolation switch or MCB has a defective contact and has not fully opened - one phase may still be live at the motor terminals.</li>
    <li><strong>Induced back-EMF (coastdown):</strong> Motor rotating after isolation acts as a generator - back-EMF voltage present on terminals until rotation stops completely. Always wait for complete standstill.</li>
    <li><strong>Earthing failure:</strong> Motor frame not properly earthed - adjacent live equipment can induce voltage onto the unearthed frame.</li>
    <li><strong>Action:</strong> Always verify isolation with a calibrated voltage tester on all three phases at the motor terminals themselves (not just at the starter). Wait for rotor to stop completely before touching any part. Discharge any capacitors through a resistor. Never assume isolated = dead.</li>
  </ul>
  <div class="n-h2">Ballast Pump Motor Will Not Start - Fault-Finding</div>
  <ol class="n-steps">
    <li><strong>PMS inhibit:</strong> Power Management System may be preventing start due to insufficient generator load headroom - check PMS status screen and available kW margin.</li>
    <li><strong>Remote stop / E-stop engaged:</strong> Check all remote stop buttons and all emergency stops in the circuit are cleared, released, and reset.</li>
    <li><strong>Valve / interlock not satisfied:</strong> Some starters have suction or discharge valve position interlocks - valve not confirmed open → start command is blocked.</li>
    <li><strong>Control fuse or supply:</strong> Check control voltage to starter coil (typically 110V AC or 24V DC). Check all fuses in the control circuit supply.</li>
    <li><strong>Overload relay tripped:</strong> Check trip indicator. Reset after investigating why it tripped (motor cool? load jammed?) - never reset blindly without finding cause.</li>
    <li><strong>Earth fault relay operated:</strong> Megger the motor and cable insulation before resetting any earth fault protection - do not reset until the fault is found and cleared.</li>
    <li><strong>Contactor coil fault:</strong> Coil not energising - check coil for open circuit (resistance measurement), check for mechanical jam in contactor mechanism, check main contact condition and gap.</li>
    <li><strong>Automation interlock:</strong> High tank level interlock, strainer differential pressure switch tripped, or remote automation control system preventing start - check all PLC inputs to the starter.</li>
  </ol>
  <div class="n-h2">Abnormal Motor Noise - Causes and Actions</div>
  <table class="n-table">
    <tr><th>Noise Type</th><th>Likely Cause</th><th>Action</th></tr>
    <tr><td>Rumbling / grinding</td><td>Worn or dry bearing - insufficient grease, water ingress, bearing pitting or spalling</td><td>Stop motor promptly, replace bearing per formula, regrease correctly</td></tr>
    <tr><td>High-pitched whine / squeal</td><td>Belt slipping (belt-driven motor), misalignment at coupling, or resonance at running speed</td><td>Check belt tension / sheave alignment; check DTI alignment</td></tr>
    <tr><td>Thumping / cyclic knock</td><td>Loose rotor bar (broken bar in cage), unbalanced rotor, eccentricity, or bent shaft</td><td>Stop, measure vibration spectrum analysis, check rotor air gap at 4 points</td></tr>
    <tr><td>Increased hum / buzz</td><td>Single phasing (negative sequence current produces noisy rotor field), loose stator laminations</td><td>Check all three phase currents immediately for imbalance or zero reading</td></tr>
    <tr><td>Rattling</td><td>Loose terminal box cover, loose end-shield bolts, debris inside motor through damaged drain plug</td><td>Inspect and tighten all external fasteners; check drain plugs and cooling fan cover</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Action principle on abnormal noise:</strong> Increase monitoring frequency of bearing temperature and vibration. If noise is severe or rapidly deteriorating - stop immediately and investigate. Running a motor with a grinding bearing to catastrophic failure turns a €50 bearing replacement into a full rewound-motor and re-machined shaft job - days out of service instead of hours.</div></div>

  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyor-qa">🗣️ Surveyor Q&amp;A - Topic 3: Electric Motors (Complete)</div>
  <table class="n-table">
    <tr><th>Examiner &amp; Question</th><th>Ideal Answer - Key Points to State</th></tr>
    <tr><td><strong>Q (Sanjib): Why does a 3-phase induction motor draw 6–8× FLC on starting?</strong></td><td>At standstill, motor acts like a transformer with a short-circuited secondary (squirrel cage rotor). Slip = 1. RMF cuts stationary rotor bars at maximum rate → maximum induced EMF → maximum rotor current (R_rotor very low). Stator must supply balancing current. As rotor accelerates, slip decreases, back-EMF builds, current drops to normal running level.</td></tr>
    <tr><td><strong>Q (Nair): Single-phasing - running motor vs standstill?</strong></td><td>Running: motor continues on two phases, remaining two windings carry ~√3 (1.73×) current in remaining phases, overheats rapidly, overload relay or phase failure relay should trip. Standstill: motor cannot start - hums at locked-rotor current because no RMF is established with only two phases - will burn winding insulation within seconds if protection fails.</td></tr>
    <tr><td><strong>Q (Kamath): How to change direction of rotation?</strong></td><td>Swap any two of the three supply phases. This reverses the phase sequence (R-Y-B → Y-R-B), which reverses the direction of rotation of the RMF, and the rotor follows the reversed RMF.</td></tr>
    <tr><td><strong>Q (Deswal): Why high starting current in induction motor?</strong></td><td>At standstill, slip = 1, rotor frequency = 50 Hz, squirrel cage rotor has very low resistance → large induced EMF + low impedance = 5–8× FLC. Machine behaves like a short-circuited transformer. Causes: busbar voltage dip, cable heating, possible generator overcurrent trip.</td></tr>
    <tr><td><strong>Q (Kamath, Sanjib): Explain the Ward-Leonard system.</strong></td><td>AC motor drives a DC generator at constant speed. Generator field rheostat varied → generator output voltage varies 0 to max → DC motor armature voltage and speed controlled smoothly. Reversing generator field reverses motor direction. Stepless, both directions, inherent regenerative braking. Three machines needed - bulky, now replaced by VFD/thyristor drives.</td></tr>
    <tr><td><strong>Q (Sanjib): What is DC injection braking?</strong></td><td>AC supply disconnected, DC injected into stator → produces a stationary (non-rotating) magnetic field. Rotating rotor cuts the stationary field → induced rotor currents → braking torque → rapid standstill. Heat dissipated in rotor bars. No mechanical brake wear. Common on fans and pumps needing a quick controlled stop.</td></tr>
    <tr><td><strong>Q (Sanjib, Kamath): What is armature reaction?</strong></td><td>Distortion and weakening of main field flux by the armature current's magnetic field. Cross-magnetising effect shifts the MNA → brush sparking and commutator damage. Demagnetising effect reduces torque at same current. Remedied by interpoles (connected in series with armature) and compensating windings embedded in main pole faces for large machines.</td></tr>
    <tr><td><strong>Q (Kolkata, Sanjib): Motor crawling - cause and prevention?</strong></td><td>Motor locks at 1/7 Ns due to 7th harmonic flux component in the air gap creating a synchronous locking torque at that speed. Motor starts, accelerates to ~1/7 speed, then refuses to accelerate further. Prevented by skewed rotor slots (most common solution) or chorded stator windings to reduce harmonic content.</td></tr>
    <tr><td><strong>Q (Multiple): Motor overheating - all causes?</strong></td><td>8 causes: (1) Overload, (2) Single phasing (√3 × I), (3) Under-voltage (higher I for same torque), (4) Ventilation failure, (5) High ambient temperature, (6) Frequent starting (I²t heat accumulation), (7) Bearing failure (increased friction load), (8) Phase imbalance (negative sequence currents).</td></tr>
    <tr><td><strong>Q (Deswal): Motor after rewinding - checks?</strong></td><td>IR test (phase-earth + phase-phase, minimum 1 MΩ), winding resistance balance ±2–5%, terminal marking confirmation, phase rotation check, Hi-Pot test at 2×Vrated + 1000V for 1 min, air gap measurement at 4 cardinal points, no-load run checking current balance, vibration, bearing temperature. Confirm IP rating maintained - all gland seals and terminal box cover replaced.</td></tr>
    <tr><td><strong>Q (Multiple): Crane motor speed control methods?</strong></td><td>4 methods: (1) Pole changing (Dahlander - 2 fixed speeds). (2) Rotor resistance (slip ring motor - stepped speed reduction, good torque). (3) VFD (full variable, modern, regenerative braking). (4) Cascade control (concatenation - fixed reduced speed, less common).</td></tr>
    <tr><td><strong>Q: What is back EMF and its significance?</strong></td><td>Counter-voltage generated by rotating armature opposing supply voltage. Zero at standstill → full supply drives high starting current. Increases with speed → net driving voltage reduces → current falls to running level. Self-regulating: more load → motor slows → back EMF drops → more current → more torque automatically. In DC motors: E = φ × N × K (speed proportional to back EMF).</td></tr>
    <tr><td><strong>Q (Kamath, Sanjib): Double-cage rotor - where used and why?</strong></td><td>Outer cage: high-R, low-X (near air gap). Inner cage: low-R, high-X (deep in rotor). At starting (high slip, high frequency): skin effect pushes current to outer cage → high starting torque, limited current. At running (low slip, low frequency): current shifts to inner cage → efficient low-loss running. Used: anchor windlass, mooring winch, bow thruster motor - all need high starting torque without external rotor resistance starter.</td></tr>
    <tr><td><strong>Q: Synchronous motor safety features?</strong></td><td>5 features: (1) Field failure relay (loss of DC excitation → trips instantly). (2) Out-of-step protection (loss of synchronism detection). (3) Under-voltage trip. (4) Overcurrent protection. (5) Starting protection - field winding short-circuited through resistor during asynchronous starting to prevent high induced voltage in open field winding.</td></tr>
    <tr><td><strong>Q: Steering motor vs normal motor differences?</strong></td><td>Steering motor: overload gives alarm only - does NOT trip (losing steering in a manoeuvre is more dangerous than motor damage). Phase failure gives alarm only. Must auto-restart after any power interruption without manual reset. SOLAS requires two independent units. Winding thermistor gives alarm only. Complete opposite protection philosophy to a normal motor.</td></tr>
    <tr><td><strong>Q: What specifications do you provide when ordering a replacement motor?</strong></td><td>14 items: kW, voltage, frequency, RPM/poles, type (AC cage/wound/sync/DC), phases (3), IEC frame number, insulation class (F or H), IP rating (IP44/55/56/68 by location), mounting (B3/B5/B35), duty cycle (S1/S2/S3), efficiency class (IE2/IE3), ambient temperature rating (40/45/55°C), Ex certification (EEx d or EEx e if hazardous area).</td></tr>
    <tr><td><strong>Q: Why 440V for motors and 110/220V for lighting?</strong></td><td>440V for motors: lower current for same power → smaller cables, lower I²R losses, smaller switchgear. 50 kW at 440V draws ~75A vs ~150A at 220V - cable cross-section 4× smaller. Lighting at 110/220V: personnel safety - crew contact live parts in damp/wet spaces. 440V shock in wet ER is likely fatal; 110V greatly reduces risk. Portable tools in high-risk areas (bilges, tanks): 50V via isolating transformer.</td></tr>
    <tr><td><strong>Q: Which contactor closes first in an autotransformer starter?</strong></td><td>Star (neutral) contactor closes first - forms the star point of the autotransformer winding. Then the autotransformer contactor closes - applies reduced voltage (65% or 80% tap) to motor. After timing period, both open and the main run contactor closes for full voltage running. Current reduction = tap ratio² (at 65% tap: 0.65² = 42% of DOL).</td></tr>
    <tr><td><strong>Q: Open transition vs closed transition - what is the difference?</strong></td><td>Open transition (standard star-delta): brief dead time - motor completely disconnected from supply during changeover. Back-EMF out of phase with supply causes transient current spike and mechanical jolt on reconnection. Closed transition (Korndörfer): transition resistors inserted so motor never disconnected - eliminates transient spike and jolt. More expensive (extra contactor + resistors) but preferred for large motors and sensitive loads.</td></tr>
  </table>

  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s3-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic / Question</th><th>Exam Frequency</th><th>Key Points to State</th></tr>
    <tr><td>Starting current of induction motor - reason</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>Slip = 1 at standstill. Maximum rotor EMF. Squirrel cage = very low R. High EMF + low Z = 5–8× FLC. Like short-circuited transformer. Causes: busbar dip, cable heat, generator trip.</td></tr>
    <tr><td>Single-phasing effects</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>Running: √3 (1.73×) current in two phases, overheats, stalls on heavy load. Standstill: no RMF, hums, draws locked-rotor current, burns quickly. Phase failure relay = instantaneous trip. 3-element overload required.</td></tr>
    <tr><td>Changing direction of rotation</td><td class="hl">⭐⭐⭐⭐⭐</td><td>Swap any two of the three supply phases. Reverses phase sequence (R-Y-B → Y-R-B). Reverses RMF direction. Rotor follows reversed RMF.</td></tr>
    <tr><td>Checks after motor rewinding</td><td class="hl">⭐⭐⭐⭐⭐</td><td>IR test (phase-earth + phase-phase, &gt;1 MΩ minimum, &gt;100 MΩ ideal), winding resistance balance ±2–5%, terminal markings + phase rotation, Hi-Pot (2×V+1000V, 1 min), air gap 4 points, no-load run current balance + bearing temp.</td></tr>
    <tr><td>List all motor protections with values</td><td class="hl">⭐⭐⭐⭐⭐ Multiple surveyors</td><td>Overload thermal (105–115% FLA), Thermistor (class limit °C), Short circuit (instantaneous fuse), Earth fault relay, Undervoltage (~85% rated), Phase failure (instantaneous, √3 × I), Bearing temp PT100 (alarm 80°C / trip 95°C). Mnemonic: OT SEU PB.</td></tr>
    <tr><td>Motor crawling - cause and remedy</td><td class="hl">⭐⭐⭐⭐</td><td>Locks at 1/7 Ns. Cause: 7th harmonic air-gap flux locking torque. Recognition: motor reaches ~1/7 speed then stops accelerating with overcurrent. Remedy: skewed rotor slots (primary) or chorded stator windings.</td></tr>
    <tr><td>Back EMF - principle and significance</td><td class="hl">⭐⭐⭐⭐</td><td>Counter-voltage opposing supply. Zero at start → high current. Increases with speed → current drops. Self-regulating load response. DC motor: E = φ × N × K. Reversing: stop first - plugging creates 2× back-EMF + supply surge.</td></tr>
    <tr><td>HRC fuse construction and selection</td><td class="hl">⭐⭐⭐⭐</td><td>Silver element + silica sand arc quencher in ceramic body. Breaking capacity 80–100 kA. Sized 1.5–2.5 × FLC - must withstand 6–8× FLC starting surge without blowing. Never use rewirable fuse on 440V motor feeder.</td></tr>
    <tr><td>ISO Bearing Code (e.g. 6205-2RS)</td><td class="hl">⭐⭐⭐⭐</td><td>6 = deep-groove ball. 2 = light series. 05 = bore code → 05 × 5 = 25 mm bore. 2RS = double rubber sealed, pre-greased. C3 = extra clearance for hot applications. Quote full code when ordering.</td></tr>
    <tr><td>Crane motor speed control</td><td class="hl">⭐⭐⭐</td><td>4 methods: Pole changing (Dahlander, 2 fixed speeds), Slip ring + rotor resistance (stepped, good torque), VFD (full variable, modern, regenerative braking), Cascade / concatenation (fixed reduced speed, rare).</td></tr>
    <tr><td>DC injection braking</td><td class="hl">⭐⭐⭐</td><td>Disconnect AC. Inject DC into stator → stationary magnetic field. Rotating rotor cuts stationary field → braking torque. Heat in rotor bars. No mechanical wear. Quick controlled stop for fans and pumps.</td></tr>
    <tr><td>Armature reaction in DC machines</td><td class="hl">⭐⭐⭐</td><td>Distorts main flux. Cross-magnetising effect → MNA shifts → brush sparking. Demagnetising effect → reduces torque. Remedies: interpoles (series with armature) for all machines; compensating windings (in pole faces) for large machines.</td></tr>
    <tr><td>Ward-Leonard system</td><td class="hl">⭐⭐⭐</td><td>AC motor + DC generator + DC driving motor. Vary generator field → vary armature voltage → smooth stepless speed both directions. Inherent regenerative braking. 3 machines = bulky, replaced by VFD/thyristor drives.</td></tr>
    <tr><td>Star-delta - maths and interlock</td><td class="hl">⭐⭐⭐⭐</td><td>Current = 1/3 DOL. Torque = 1/3 DOL. Star voltage per winding = 440/√3 = 254 V. 3 contactors: KM (main, always on), KY (star, start only), KD (delta, after transition). KY and KD mechanically + electrically interlocked - simultaneous close = 3-phase short circuit.</td></tr>
    <tr><td>Motor procurement - specification</td><td class="hl">⭐⭐⭐</td><td>14 items: kW, voltage, Hz, RPM, type, phases, IEC frame, insulation class, IP rating, mounting (B3/B5/B35), duty (S1/S2/S3), efficiency class, ambient temp, Ex certification. Frame number = shaft height in mm.</td></tr>
    <tr><td>Steering motor vs normal motor</td><td class="hl">⭐⭐⭐</td><td>No trip on overload (alarm only). No trip on phase failure (alarm only). Auto-restart after power interruption. SOLAS two independent units. Winding thermistor = alarm only. Opposite protection philosophy - steering safety &gt; motor protection.</td></tr>
  </table>

</div>
</div>
</div>
`);

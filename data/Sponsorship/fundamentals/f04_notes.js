window.loadNotes("F04", `<div class="view" id="view-notes-f04">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F04')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>F04 - Electrical Power</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 4 of 25 · Difficulty ★★★☆☆ · Study Time 60-75 min</div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-recap')">Power Recap</button>
    <button class="anc-btn" onclick="jumpTo('s-triangle')">Power Triangle</button>
    <button class="anc-btn" onclick="jumpTo('s-reactive')">Reactive Power</button>
    <button class="anc-btn" onclick="jumpTo('s-pf')">Power Factor</button>
    <button class="anc-btn" onclick="jumpTo('s-pf-problems')">Why Low PF Hurts</button>
    <button class="anc-btn" onclick="jumpTo('s-pf-improve')">PF Improvement</button>
    <button class="anc-btn" onclick="jumpTo('s-3phase-power')">Three-Phase Power</button>
    <button class="anc-btn" onclick="jumpTo('s-measurement')">Power Measurement</button>
    <button class="anc-btn" onclick="jumpTo('s-demand')">Demand &amp; Load Factors</button>
    <button class="anc-btn" onclick="jumpTo('s-rating')">Why kVA, Not kW</button>
    <button class="anc-btn" onclick="jumpTo('s-gtd')">Generation to Distribution</button>
    <button class="anc-btn" onclick="jumpTo('s-tariff')">Tariffs &amp; Billing</button>
    <button class="anc-btn" onclick="jumpTo('s-units')">Units &amp; Formulae</button>
    <button class="anc-btn" onclick="jumpTo('s-numericals')">Worked Numericals</button>
    <button class="anc-btn" onclick="jumpTo('s-viva')">Viva Questions</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
    <button class="anc-btn" onclick="jumpTo('s-summary')">Module Summary</button>
  </div>
  <div class="note-content">
  <!-- OBJECTIVES -->
  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to separate active, reactive and apparent power on the power triangle, explain physically what reactive power is and why it does no useful work, define power factor and state why it is almost always lagging on a ship, explain in engineering and financial terms why a low power factor is a problem, size a capacitor bank to correct power factor, apply the three-phase power formula confidently, explain how a wattmeter and the two-wattmeter method measure power, distinguish demand factor, load factor and diversity factor, explain why alternators and transformers are rated in kVA rather than kW, describe the generation-to-distribution chain both ashore and on a ship, and solve numericals on all of the above without hesitation.</p>
  <p class="n-p">F01 introduced power as P = VI and gave power factor a one-paragraph preview. This module is where that preview becomes a fully engineered topic: the power triangle, why ships run at a lagging power factor, what it costs when that factor is poor, and how it is corrected. Interview panels treat power factor as a signature ETO topic, because it sits exactly at the intersection of electrical theory and real operating cost, and a candidate who can explain it cleanly demonstrates both.</p>
  <!-- RECAP -->
  <div class="n-h1" id="s-recap">Recap: Power and Energy from F01</div>
  <p class="n-p">Power is the rate of doing work, measured in watts. For a DC circuit or a purely resistive AC load, <strong>P = V × I</strong> is the whole story. The moment a circuit contains inductance or capacitance, that single formula stops being enough, because voltage and current are no longer in step with each other. This module exists entirely to handle that "no longer in step" case, which describes almost every load on a ship.</p>
  <div class="n-formula">P = V × I&nbsp;&nbsp;&nbsp;&nbsp;P = I² × R&nbsp;&nbsp;&nbsp;&nbsp;E = P × t<div class="label">Valid as written only for DC or a purely resistive AC load</div></div>
  <p class="n-p"><strong>Why AC is different:</strong> a motor winding, a transformer coil, a fluorescent ballast, all are inductive. In an inductor, current lags voltage; in a capacitor, current leads voltage. When voltage and current are out of step, multiplying their instantaneous values no longer gives a steady, fully useful power number. Some of that product oscillates back and forth without ever leaving the source. Separating the useful part from the oscillating part is exactly what the power triangle does.</p>
  <!-- POWER TRIANGLE -->
  <div class="n-h1" id="s-triangle">The Power Triangle</div>
  <p class="n-p"><strong>Definition:</strong> a right-angled triangle representation of the three components of AC power, active power, reactive power and apparent power, related by simple trigonometry through the phase angle φ between voltage and current. <strong>Analogy, continuing F01's beer glass:</strong> active power is the beer, the part you actually wanted and can use. Reactive power is the foam, real, taking up space in the glass, but not drinkable. Apparent power is the full glass, the total size the brewery, and your alternator, must supply.</p>
  <div class="n-h2">Active Power (P)</div>
  <p class="n-p"><strong>Definition:</strong> the power that is actually converted into useful work, mechanical rotation, heat, light. SI unit: <strong>watt (W)</strong>, commercially <strong>kilowatt (kW)</strong>. This is what a motor's shaft delivers, what a heater radiates, what appears on the fuel-consumption side of the ship's energy balance.</p>
  <div class="n-formula">P = V × I × cos φ<div class="label">P = active power (W) · V, I = RMS voltage and current · φ = phase angle between V and I</div></div>
  <div class="n-h2">Reactive Power (Q)</div>
  <p class="n-p"><strong>Definition:</strong> the power that oscillates between source and load to build and collapse magnetic or electric fields, and is returned to the source every half cycle without doing useful work. SI unit: <strong>volt-ampere reactive (VAR)</strong>, commercially <strong>kVAR</strong>.</p>
  <div class="n-formula">Q = V × I × sin φ<div class="label">Q = reactive power (VAR) · positive (lagging) for inductive loads, negative (leading) for capacitive loads</div></div>
  <div class="n-h2">Apparent Power (S)</div>
  <p class="n-p"><strong>Definition:</strong> the total power supplied by the source, the vector combination of active and reactive power, and the quantity that actually determines the current the alternator, cable and switchgear must carry. SI unit: <strong>volt-ampere (VA)</strong>, commercially <strong>kVA</strong>.</p>
  <div class="n-formula">S = V × I&nbsp;&nbsp;&nbsp;&nbsp;S² = P² + Q²&nbsp;&nbsp;&nbsp;&nbsp;S = P / cos φ<div class="label">S = apparent power (VA) · the hypotenuse of the power triangle</div></div>
  <table class="n-table">
    <tr><th>Quantity</th><th>Symbol</th><th>Unit</th><th>Physical Meaning</th></tr>
    <tr><td>Active power</td><td>P</td><td>W, kW</td><td class="ok">Does real work, rotation, heat, light</td></tr>
    <tr><td>Reactive power</td><td>Q</td><td>VAR, kVAR</td><td class="hl">Builds fields, returned every half cycle, no net work</td></tr>
    <tr><td>Apparent power</td><td>S</td><td>VA, kVA</td><td>Total power the source must be capable of supplying</td></tr>
  </table>
  <div class="n-crit"><div class="icon">❌</div><div class="body"><strong>Interview trap:</strong> "If reactive power does no useful work, why does it matter at all?" Because although it does no net work, it still flows as real current through the alternator windings, cables, and switchgear, all of which must be sized for that current. Reactive power is not imaginary in the sense of not existing; it is real current that produces I²R heating and occupies capacity, it simply does not convert into shaft power, heat, or light at the load.</div></div>
  <p class="n-p"><strong>Shipboard:</strong> a 3000 kW alternator does not mean 3000 kW of motors can be connected. Its true limit is its kVA rating, and how much of that kVA becomes usable kW depends entirely on the power factor of the connected load. Chief engineers and ETOs track kW, kVAR and kVA together on the switchboard precisely because kW alone hides how close the alternator is to its real limit.</p>
  <p class="n-p"><strong>Interview answer:</strong> "Active power does the real work and is measured in kW. Reactive power builds and collapses the magnetic fields in motors and transformers and is measured in kVAR; it flows as real current but does no net work. Apparent power is their vector sum in kVA, and it is apparent power, not active power, that actually sizes the alternator, cable and switchgear."</p>
  <!-- REACTIVE POWER PHYSICAL -->
  <div class="n-h1" id="s-reactive">Why Reactive Power Physically Exists</div>
  <p class="n-p">A motor winding is a coil. Passing current through a coil creates a magnetic field, and building that field takes energy, the coil draws current from the supply as the field grows. As the AC current falls back toward zero, the collapsing field pushes that same energy back into the circuit. Over one full cycle, the energy taken to build the field and the energy returned as it collapses are equal; net energy transferred for that purpose is zero, yet current genuinely flowed both ways to make it happen. That back-and-forth current is reactive current, and V × I × sin φ is a bookkeeping value for how much of it there is.</p>
  <p class="n-p"><strong>Working principle, step by step:</strong></p>
  <ol class="n-steps">
    <li>Voltage rises, current begins to rise but lags behind because the coil resists any change in current (self-inductance).</li>
    <li>While current is rising, the coil is absorbing energy from the source to build its magnetic field.</li>
    <li>Current peaks after voltage has already started falling; the field is now fully built.</li>
    <li>As current falls, the collapsing field pushes stored energy back toward the source.</li>
    <li>This cycle repeats fifty times a second on a 50 Hz system, energy shuttling out and back, never fully departing as useful work.</li>
  </ol>
  <p class="n-p"><strong>Memory trick:</strong> reactive power is like a tenant who moves a heavy sofa into a room and then, an hour later, moves the identical sofa back out. Real physical effort was spent both times, real trucks, real fuel, real labour, but nothing useful was net-delivered to the room. The mover's van (the cable and alternator) still had to be sized to carry that sofa either way.</p>
  <!-- POWER FACTOR -->
  <div class="n-h1" id="s-pf">Power Factor in Depth</div>
  <p class="n-p"><strong>Definition, restated precisely:</strong> power factor is the cosine of the phase angle between voltage and current, and equivalently the ratio of active power to apparent power. It expresses what fraction of the current the source supplies is actually doing useful work.</p>
  <div class="n-formula">PF = cos φ = P / S = kW / kVA<div class="label">Dimensionless, always between 0 and 1; described as lagging, leading, or unity</div></div>
  <table class="n-table">
    <tr><th>Type</th><th>Current vs Voltage</th><th>Caused By</th><th>Ship Example</th></tr>
    <tr><td>Unity (PF = 1)</td><td>In phase</td><td>Purely resistive load</td><td>Heaters, incandescent lamps, resistive galley equipment</td></tr>
    <tr><td class="hl">Lagging</td><td class="hl">Current lags voltage</td><td>Inductive load</td><td class="ok">Induction motors, transformers, chokes, most of a ship's load</td></tr>
    <tr><td>Leading</td><td>Current leads voltage</td><td>Capacitive load</td><td>Capacitor banks, lightly loaded long cables, some electronic drives</td></tr>
  </table>
  <p class="n-p"><strong>Why a ship's power factor is almost always lagging:</strong> the overwhelming majority of shipboard load is induction motors, pumps, fans, compressors, winches, thrusters, plus transformers for lighting and control supplies. Every one of these is inductive. Unless corrected, a typical merchant ship's overall switchboard power factor sits around 0.75 to 0.85 lagging, meaning roughly 15 to 25 percent of the alternator's apparent power capacity is being consumed by reactive current that does no shaft work.</p>
  <div class="n-crit"><div class="icon">❌</div><div class="body"><strong>Interview trap:</strong> "Give an example of a leading power factor load on a ship." Candidates often cannot name one and guess randomly. The honest, correct answer is that leading power factor on a ship is uncommon, and where it appears it is usually deliberate, a power factor correction capacitor bank overcorrecting, or certain variable frequency drives and lightly loaded long cable runs exhibiting a small capacitive effect. It is acceptable, and better, to say plainly that leading PF is rare on ships and explain why, rather than invent an example.</div></div>
  <p class="n-p"><strong>Interview answer:</strong> "Power factor is the cosine of the phase angle between voltage and current, equal to kW divided by kVA. On a ship it is almost always lagging because the load is dominated by induction motors and transformers, which are inductive. A typical uncorrected ship might run around 0.8 lagging, meaning about 20 percent of the alternator's apparent power capacity is reactive current doing no useful work."</p>
  <!-- WHY LOW PF HURTS -->
  <div class="n-h1" id="s-pf-problems">Why a Low Power Factor Is a Problem</div>
  <p class="n-p">A low power factor means more current is needed to deliver the same useful kW. Everything downstream of that current, alternator windings, cables, switchgear, circuit breakers, pays for it.</p>
  <div class="n-formula">I = P / (V × cos φ)<div class="label">For fixed P and V, current rises as power factor falls</div></div>
  <table class="n-table">
    <tr><th>Power Factor</th><th>Current for Same kW</th><th>Consequence</th></tr>
    <tr><td>1.0 (unity)</td><td class="ok">Minimum possible current</td><td>Best case, rarely achieved in practice</td></tr>
    <tr><td>0.8 lagging</td><td class="hl">25% more current than unity</td><td>Typical uncorrected ship condition</td></tr>
    <tr><td>0.6 lagging</td><td class="bad">67% more current than unity</td><td>Poor; heavy cable and alternator loading for the same useful work</td></tr>
  </table>
  <p class="n-p">Because power loss in a cable follows I²R, that extra current does not cost proportionally, it costs by the <em>square</em>, exactly as covered in F01. The consequences chain together:</p>
  <ol class="n-steps">
    <li>More current flows for the same delivered kW.</li>
    <li>I²R heating rises in windings, cables and switchgear, all in proportion to the current squared.</li>
    <li>Voltage drop along cables increases, since drop is I × R.</li>
    <li>The alternator reaches its kVA limit while still delivering less kW than its nameplate suggests it should, its true ceiling is apparent power, not active power.</li>
    <li>Ashore, utilities financially penalise consumers with poor power factor through a separate tariff charge, since the utility must still build generation and network capacity for the unused kVA.</li>
  </ol>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Why interviewers push on this:</strong> a common wrong belief is that low power factor "wastes energy" in the sense of burning extra fuel to produce reactive power. It does not waste energy in that sense, no net kWh is consumed producing reactive power, because it is returned every half cycle. What it wastes is <em>capacity</em>, alternator kVA, cable current rating, and switchgear headroom, plus the real I²R losses caused by the extra current those reactive amps add to the circuit. Precision on this point separates strong candidates from average ones.</div></div>
  <p class="n-p"><strong>Interview answer:</strong> "A low power factor does not directly waste fuel energy, since reactive power returns to the source each half cycle. What it does is force more current to flow for the same useful kW, which increases I squared R losses in cables and windings, increases voltage drop, and eats into the alternator's kVA headroom faster than its kW output would suggest. Ashore it also attracts a financial penalty from the utility."</p>
  <!-- PF IMPROVEMENT -->
  <div class="n-h1" id="s-pf-improve">Power Factor Improvement</div>
  <p class="n-p"><strong>Principle:</strong> since most shipboard load is inductive and lagging, connecting a capacitive load in parallel supplies reactive power locally, capacitors and inductors exchange reactive power exactly out of phase with each other. The capacitor's leading reactive current cancels part of the inductive load's lagging reactive current at the point where it is connected, so less reactive current needs to travel all the way back to the alternator.</p>
  <div class="n-h2">Method 1: Static Capacitor Banks</div>
  <p class="n-p">Banks of capacitors connected across the switchboard or a large motor, sized to supply a fixed amount of leading kVAR that offsets the lagging kVAR of the load. Common on ships with large compressor or thruster loads. Simple, no moving parts, but the correction is fixed unless capacitor banks are switched in stages.</p>
  <div class="n-h2">Method 2: Synchronous Condenser</div>
  <p class="n-p">A synchronous motor running unloaded with an over-excited field behaves as a variable source of leading kVAR; adjusting excitation varies the correction continuously. Rare on merchant ships due to cost and complexity, more common in large shore installations.</p>
  <div class="n-h2">Method 3: Correct Motor Selection and Loading</div>
  <p class="n-p">An oversized, lightly loaded induction motor runs at a poor power factor because its magnetising current stays roughly constant while useful current falls. Selecting correctly rated motors, and avoiding chronic underloading, is the simplest and cheapest form of power factor management, addressed before any capacitor is fitted.</p>
  <div class="n-h2">Sizing a Capacitor Bank, the kVAR Method</div>
  <p class="n-p">Given the existing lagging power factor and a target power factor, the required capacitor kVAR is found from the difference in reactive power at the two angles for the same active power.</p>
  <div class="n-formula">Q<sub>c</sub> = P × (tan φ<sub>1</sub> - tan φ<sub>2</sub>)<div class="label">Q<sub>c</sub> = capacitor kVAR required · P = active power (kW) · φ<sub>1</sub> = original angle · φ<sub>2</sub> = target angle</div></div>
  <p class="n-p"><strong>Shipboard:</strong> capacitor banks correcting power factor are usually sized to bring the switchboard from around 0.75-0.8 lagging up to about 0.95 lagging, deliberately not all the way to unity, because slight overcorrection risks tipping the system into a leading power factor under light load, which some alternator automatic voltage regulators and protection schemes handle poorly. Full worked sizing is done in the numericals section below.</p>
  <div class="n-crit"><div class="icon">❌</div><div class="body"><strong>Interview trap:</strong> "Does fitting capacitors reduce the load's kW consumption?" No. The motor still needs exactly the same kW to do its mechanical work; that never changes. What changes is the kVA and current the alternator and cables must supply to deliver that same kW, because the capacitor supplies the reactive component locally instead of it travelling from the alternator.</div></div>
  <!-- THREE PHASE POWER -->
  <div class="n-h1" id="s-3phase-power">Power in a Three-Phase System</div>
  <p class="n-p">Full three-phase theory, star and delta connections, and line versus phase quantities are covered in depth in F08, Three-Phase Systems. This section gives only the power formula needed at this stage, because almost every shipboard power calculation from here on is three-phase.</p>
  <div class="n-formula">P = √3 × V<sub>L</sub> × I<sub>L</sub> × cos φ<div class="label">P = total active power (W) · V<sub>L</sub> = line voltage · I<sub>L</sub> = line current · valid for both star and delta when line values are used</div></div>
  <div class="n-formula">S = √3 × V<sub>L</sub> × I<sub>L</sub>&nbsp;&nbsp;&nbsp;&nbsp;Q = √3 × V<sub>L</sub> × I<sub>L</sub> × sin φ<div class="label">Same √3 factor applies to apparent and reactive power</div></div>
  <p class="n-p"><strong>Why √3 appears:</strong> in a balanced three-phase system, the three phases are 120° apart. Combining three single-phase powers of V<sub>ph</sub> × I<sub>ph</sub> × cos φ, using the star or delta relationship between line and phase quantities, algebraically collapses to √3 × V<sub>L</sub> × I<sub>L</sub> × cos φ regardless of whether the machine is star or delta connected, which is exactly why one formula covers both.</p>
  <p class="n-p"><strong>Shipboard:</strong> the main switchboard, alternators, and virtually all motors above a few kW are three-phase, typically 440 V (some vessels 690 V for large drives) at 60 Hz, or 380-415 V at 50 Hz depending on flag and yard. Every load calculation an ETO performs, checking an alternator is not overloaded, sizing a cable, verifying a motor's running current, uses this formula.</p>
  <!-- POWER MEASUREMENT -->
  <div class="n-h1" id="s-measurement">Measuring Power</div>
  <p class="n-p"><strong>The wattmeter:</strong> an instrument that measures active power directly, by internally multiplying instantaneous voltage and current and averaging the result. It has two coils, a current coil, carrying load current, connected in series in the circuit, and a pressure (voltage) coil, connected across the supply, in parallel. Its deflection is proportional to V × I × cos φ, active power, not simply V × I.</p>
  <table class="n-table">
    <tr><th>Coil</th><th>Connection</th><th>Analogous To</th></tr>
    <tr><td>Current coil</td><td class="hl">Series with the load</td><td>An ammeter's connection</td></tr>
    <tr><td>Pressure coil</td><td class="ok">Parallel across the supply</td><td>A voltmeter's connection</td></tr>
  </table>
  <div class="n-h2">Two-Wattmeter Method for Three-Phase Power</div>
  <p class="n-p">Total power in a balanced or unbalanced three-phase three-wire system can be measured with only two wattmeters, not three, by connecting their current coils in two of the three lines and both pressure coils referenced to the third line.</p>
  <div class="n-formula">P<sub>total</sub> = W<sub>1</sub> + W<sub>2</sub><div class="label">Algebraic sum, one wattmeter can read negative at low power factor and must then be subtracted</div></div>
  <table class="n-table">
    <tr><th>Power Factor</th><th>W<sub>1</sub> and W<sub>2</sub> Behaviour</th></tr>
    <tr><td>1.0 (unity)</td><td class="ok">Both wattmeters read equal, positive values</td></tr>
    <tr><td>0.5 lagging</td><td class="hl">One wattmeter reads exactly zero</td></tr>
    <tr><td>Below 0.5 lagging</td><td class="bad">One wattmeter reads negative; its leads must be reversed to read it, then subtracted, not added</td></tr>
  </table>
  <p class="n-p"><strong>Bonus relationship:</strong> the two-wattmeter readings also give power factor directly, without a separate power factor meter.</p>
  <div class="n-formula">tan φ = √3 × (W<sub>1</sub> - W<sub>2</sub>) / (W<sub>1</sub> + W<sub>2</sub>)<div class="label">Useful cross-check during switchboard load surveys</div></div>
  <p class="n-p"><strong>Shipboard:</strong> modern switchboards use digital power meters that display kW, kVAR, kVA and PF simultaneously from current transformers and voltage transformers feeding a microprocessor-based meter, but the underlying two-wattmeter principle is exactly what older analogue switchboards and many oral exam questions still test.</p>
  <!-- DEMAND / LOAD FACTOR -->
  <div class="n-h1" id="s-demand">Demand Factor, Load Factor and Diversity Factor</div>
  <p class="n-p">These three factors describe how the connected load, the actual load, and the maximum load relate to each other over time, essential for sizing an alternator correctly instead of oversizing it for a peak that rarely occurs.</p>
  <div class="n-h2">Demand Factor</div>
  <div class="n-formula">Demand Factor = Maximum Demand / Total Connected Load<div class="label">Always ≤ 1, since not everything runs at once at full rating</div></div>
  <p class="n-p">If a ship's total connected load, adding up every motor and heater's nameplate rating, is 4000 kW, but the highest load ever actually drawn is 2800 kW, the demand factor is 2800/4000 = 0.7. Not every piece of equipment runs simultaneously at full nameplate rating.</p>
  <div class="n-h2">Load Factor</div>
  <div class="n-formula">Load Factor = Average Load / Maximum Demand<div class="label">Indicates how steadily the load is used over a period</div></div>
  <p class="n-p">A high load factor means the load stays close to its peak most of the time, an alternator running near-continuously loaded, efficient use of installed capacity. A low load factor means brief high peaks with mostly light load, the alternator is oversized for most of its operating time, purely to cover rare peaks such as bow thruster use during mooring.</p>
  <div class="n-h2">Diversity Factor</div>
  <div class="n-formula">Diversity Factor = Sum of Individual Maximum Demands / Maximum Demand of the Whole System<div class="label">Always ≥ 1</div></div>
  <p class="n-p">Individual sections of a ship's distribution, accommodation, engine room, deck machinery, each have their own peak, but those peaks rarely coincide. Diversity factor captures that non-coincidence and is used ashore and in large installations to avoid oversizing the main supply for a peak that no single instant actually produces.</p>
  <table class="n-table">
    <tr><th>Factor</th><th>Formula Basis</th><th>Typical Value</th><th>Purpose</th></tr>
    <tr><td>Demand factor</td><td>Max demand ÷ connected load</td><td class="ok">Less than 1</td><td>Avoid oversizing for nameplate totals</td></tr>
    <tr><td>Load factor</td><td>Average load ÷ max demand</td><td class="hl">Less than 1</td><td>Shows how steadily capacity is used</td></tr>
    <tr><td>Diversity factor</td><td>Sum of peaks ÷ system peak</td><td class="ok">Greater than 1</td><td>Accounts for peaks not coinciding</td></tr>
  </table>
  <!-- WHY kVA -->
  <div class="n-h1" id="s-rating">Why Alternators and Transformers Are Rated in kVA, Not kW</div>
  <p class="n-p">An alternator's windings and a transformer's windings are limited by heating caused by the current they carry, and by the voltage their insulation can withstand, neither of which knows or cares what power factor the connected load happens to have. Current-carrying capacity is a function of I²R heating alone, which depends on current, not on how much of that current is doing useful work.</p>
  <p class="n-p">Rating the machine in kW would silently assume a fixed power factor, and the actual connected load's power factor is decided by whatever is switched on at the switchboard at any given moment, not by the machine builder. Rating in kVA sidesteps the assumption entirely: kVA is what the machine can safely carry regardless of load power factor, and the kW actually delivered simply follows from whatever power factor the load happens to present.</p>
  <table class="n-table">
    <tr><th>Nameplate kVA</th><th>Power Factor</th><th>Usable kW</th></tr>
    <tr><td>1000 kVA</td><td class="ok">1.0 (unity)</td><td class="ok">1000 kW</td></tr>
    <tr><td>1000 kVA</td><td class="hl">0.8 lagging</td><td class="hl">800 kW</td></tr>
    <tr><td>1000 kVA</td><td class="bad">0.6 lagging</td><td class="bad">600 kW</td></tr>
  </table>
  <p class="n-p"><strong>Interview answer:</strong> "Alternators and transformers are rated in kVA because their windings are limited by heating from current, and current depends on apparent power, not active power. Rating in kW would assume a fixed power factor, but the actual power factor is set by whatever load is connected at the switchboard, which the machine builder cannot control. kVA is the true, load-independent limit; usable kW then depends on the power factor actually presented."</p>
  <!-- GENERATION TO DISTRIBUTION -->
  <div class="n-h1" id="s-gtd">From Generation to Distribution</div>
  <p class="n-p">Ashore, electrical power moves through four broad stages, and a ship's own power system mirrors the same logic on a much smaller, self-contained scale.</p>
  <table class="n-table">
    <tr><th>Stage</th><th>Ashore</th><th>Shipboard Equivalent</th></tr>
    <tr><td>Generation</td><td>Power stations, thermal, hydro, nuclear, renewable</td><td class="ok">Diesel or turbo alternators driven by the ship's engines</td></tr>
    <tr><td>Transmission</td><td>High voltage lines, 100s of kV, over long distance</td><td>High-voltage distribution on large vessels, 6.6 kV or 11 kV, over short runs</td></tr>
    <tr><td>Distribution</td><td>Substations stepping down to usable voltage</td><td class="hl">Main switchboard, section boards, distribution transformers to 440 V and 220 V</td></tr>
    <tr><td>Utilisation</td><td>Homes, industry, offices</td><td>Motors, lighting, navigation and automation equipment</td></tr>
  </table>
  <p class="n-p"><strong>Why high voltage for transmission, recapped from F01:</strong> for the same power, higher voltage means proportionally lower current, and since I²R losses fall with the square of current, stepping up voltage for transmission then stepping back down for use is dramatically more efficient than transmitting at utilisation voltage over any real distance. A large cruise ship or LNG carrier with very high total electrical demand may generate and distribute at 6.6 kV or 11 kV for exactly this reason, then step down through distribution transformers close to the load.</p>
  <p class="n-p"><strong>Shipboard chain in practice:</strong> diesel or turbo alternator, main switchboard (bus-tie arrangement between multiple generators), section/distribution boards, local starters, distribution transformers, and final consumer units, the motor, pump, light or navigation instrument. Every stage in that chain is a place an ETO is expected to be able to explain, measure, and fault-find.</p>
  <!-- TARIFFS -->
  <div class="n-h1" id="s-tariff">Electrical Tariffs and Billing (Awareness Level)</div>
  <p class="n-p">Not directly a shipboard system, since a vessel generates its own power rather than buying it from a grid, but tariff structure is a standard general-knowledge interview question because it demonstrates whether a candidate understands power factor's financial consequence ashore, reinforcing why the topic matters at all.</p>
  <table class="n-table">
    <tr><th>Tariff Component</th><th>Basis</th><th>Purpose</th></tr>
    <tr><td>Energy charge</td><td>kWh consumed</td><td>Pays for actual energy generated</td></tr>
    <tr><td>Demand charge</td><td>Maximum kW or kVA demand</td><td>Pays for capacity the utility must keep available</td></tr>
    <tr><td>Power factor penalty</td><td>PF below a set threshold, often 0.85-0.9</td><td>Recovers cost of extra kVA capacity used by reactive current</td></tr>
  </table>
  <p class="n-p">A shore installation that improves its power factor with capacitor banks reduces its billed kVA demand and avoids the penalty, without changing its actual kWh energy consumption at all, the same distinction covered earlier: power factor correction changes capacity used, not energy consumed.</p>
  <!-- UNITS -->
  <div class="n-h1" id="s-units">Units, Symbols and Formula Sheet</div>
  <table class="n-table">
    <tr><th>Quantity</th><th>Symbol</th><th>Unit</th></tr>
    <tr><td>Active power</td><td>P</td><td>watt (W), kilowatt (kW)</td></tr>
    <tr><td>Reactive power</td><td>Q</td><td>VAR, kilovar (kVAR)</td></tr>
    <tr><td>Apparent power</td><td>S</td><td>volt-ampere (VA), kilovolt-ampere (kVA)</td></tr>
    <tr><td>Power factor</td><td>cos φ</td><td>no unit, 0 to 1</td></tr>
  </table>
  <table class="n-table">
    <tr><th>Formula</th><th>Finds</th><th>Use When</th></tr>
    <tr><td>P = VI cos φ</td><td>Active power, single-phase</td><td>V, I, PF known</td></tr>
    <tr><td>Q = VI sin φ</td><td>Reactive power, single-phase</td><td>V, I, PF known</td></tr>
    <tr><td>S² = P² + Q²</td><td>Apparent power from P and Q</td><td>Power triangle problems</td></tr>
    <tr><td>PF = P / S</td><td>Power factor</td><td>P and S known</td></tr>
    <tr><td>P = √3 V<sub>L</sub> I<sub>L</sub> cos φ</td><td>Active power, three-phase</td><td>Line values known, star or delta</td></tr>
    <tr><td>Q<sub>c</sub> = P (tan φ<sub>1</sub> - tan φ<sub>2</sub>)</td><td>Capacitor kVAR for PF correction</td><td>Original and target PF known</td></tr>
    <tr><td>tan φ = √3 (W<sub>1</sub>-W<sub>2</sub>) / (W<sub>1</sub>+W<sub>2</sub>)</td><td>Power factor from two-wattmeter readings</td><td>Wattmeter survey</td></tr>
  </table>
  <!-- NUMERICALS -->
  <div class="n-h1" id="s-numericals">Worked Numericals</div>
  <p class="n-p">State the formula, substitute clearly, keep units consistent throughout, and always state the unit in the final answer.</p>
  <div class="n-h2">1. Power Triangle, Basic</div>
  <p class="n-p">A single-phase load draws 440 V at 20 A with a power factor of 0.8 lagging. Find active, reactive and apparent power.</p>
  <ol class="n-steps">
    <li>S = V × I = 440 × 20 = <span class="n-val">8.8 kVA</span></li>
    <li>P = S × cos φ = 8.8 × 0.8 = <span class="n-val">7.04 kW</span></li>
    <li>sin φ = √(1 - 0.8²) = 0.6, so Q = 8.8 × 0.6 = <span class="n-val">5.28 kVAR</span></li>
  </ol>
  <div class="n-h2">2. Three-Phase Motor Load</div>
  <p class="n-p">A three-phase motor draws 440 V line, 50 A line current, at 0.85 lagging power factor. Find the power drawn.</p>
  <ol class="n-steps">
    <li>P = √3 × V<sub>L</sub> × I<sub>L</sub> × cos φ = 1.732 × 440 × 50 × 0.85 = <span class="n-val">32.4 kW</span> approximately</li>
    <li>S = √3 × 440 × 50 = <span class="n-val">38.1 kVA</span></li>
  </ol>
  <div class="n-h2">3. Capacitor Bank Sizing</div>
  <p class="n-p">A switchboard load of 500 kW runs at 0.75 lagging power factor. Find the capacitor kVAR needed to raise the power factor to 0.95 lagging.</p>
  <ol class="n-steps">
    <li>φ<sub>1</sub> = cos⁻¹(0.75) = 41.4°, tan φ<sub>1</sub> = 0.882</li>
    <li>φ<sub>2</sub> = cos⁻¹(0.95) = 18.2°, tan φ<sub>2</sub> = 0.329</li>
    <li>Q<sub>c</sub> = P (tan φ<sub>1</sub> - tan φ<sub>2</sub>) = 500 × (0.882 - 0.329) = <span class="n-val">276.5 kVAR</span></li>
    <li>A capacitor bank of about 277 kVAR is required.</li>
  </ol>
  <div class="n-h2">4. Effect of PF Correction on Current</div>
  <p class="n-p">A 500 kW, 440 V, three-phase load runs first at 0.75 lagging, then after correction at 0.95 lagging. Find the line current in each case.</p>
  <ol class="n-steps">
    <li>Before: I = P / (√3 × V<sub>L</sub> × cos φ) = 500000 / (1.732 × 440 × 0.75) = <span class="n-val">874 A</span> approximately</li>
    <li>After: I = 500000 / (1.732 × 440 × 0.95) = <span class="n-val">690 A</span> approximately</li>
    <li>Current fell by roughly 21% for the identical 500 kW delivered, the direct benefit of correction.</li>
  </ol>
  <div class="n-h2">5. Two-Wattmeter Method</div>
  <p class="n-p">Two wattmeters on a balanced three-phase load read W<sub>1</sub> = 6 kW and W<sub>2</sub> = 2 kW. Find total power and power factor.</p>
  <ol class="n-steps">
    <li>P<sub>total</sub> = W<sub>1</sub> + W<sub>2</sub> = 6 + 2 = <span class="n-val">8 kW</span></li>
    <li>tan φ = √3 × (6-2)/(6+2) = 1.732 × 0.5 = 0.866, so φ = 40.9°</li>
    <li>PF = cos(40.9°) = <span class="n-val">0.756 lagging</span></li>
  </ol>
  <div class="n-h2">6. Demand and Load Factor</div>
  <p class="n-p">A ship's total connected load is 3600 kW. Recorded maximum demand is 2400 kW, and average load over the day is 1500 kW. Find demand factor and load factor.</p>
  <ol class="n-steps">
    <li>Demand factor = 2400 / 3600 = <span class="n-val">0.667</span></li>
    <li>Load factor = 1500 / 2400 = <span class="n-val">0.625</span></li>
  </ol>
  <div class="n-h2">7. kVA Rating and Usable kW</div>
  <p class="n-p">An alternator is rated 1250 kVA. Find the maximum kW it can deliver at 0.8 lagging power factor, and at unity power factor.</p>
  <ol class="n-steps">
    <li>At 0.8 PF: kW = 1250 × 0.8 = <span class="n-val">1000 kW</span></li>
    <li>At unity PF: kW = 1250 × 1.0 = <span class="n-val">1250 kW</span></li>
    <li>The same machine delivers 250 kW more useful power purely because the connected load's power factor improved, current and heating stayed within the same kVA limit throughout.</li>
  </ol>
  <!-- VIVA -->
  <div class="n-h1" id="s-viva">Viva and Interview Questions</div>
  <p class="n-p">Attempt each answer mentally before checking the model answer.</p>
  <table class="n-table">
    <tr><th>Question</th><th>Model Answer</th></tr>
    <tr><td>What is active power?</td><td>The power actually converted into useful work, mechanical rotation, heat, light, measured in kW. P = VI cos φ.</td></tr>
    <tr><td>What is reactive power and does it do useful work?</td><td>The power that builds and collapses magnetic or electric fields, measured in kVAR. It does no net useful work, but it is real current that must still be supplied and carried by the system.</td></tr>
    <tr><td>What is apparent power and why does it matter?</td><td>The vector sum of active and reactive power, in kVA. It matters because it is what actually sizes the alternator, cables and switchgear, since they respond to total current, not just the useful portion of it.</td></tr>
    <tr><td>Define power factor.</td><td>The cosine of the phase angle between voltage and current, equal to kW divided by kVA.</td></tr>
    <tr><td>Why is a ship's power factor almost always lagging?</td><td>Because most shipboard load is induction motors and transformers, which are inductive, causing current to lag voltage.</td></tr>
    <tr><td>Does a poor power factor waste fuel energy?</td><td>Not directly, since reactive power returns to the source each half cycle. It wastes current-carrying capacity and causes extra I squared R losses from the higher current needed, not extra net energy consumption from the reactive component itself.</td></tr>
    <tr><td>How is power factor improved on a ship?</td><td>Mainly with capacitor banks connected in parallel with the load, supplying leading reactive power locally so less needs to travel from the alternator. Correct motor sizing also helps avoid poor power factor from underloading.</td></tr>
    <tr><td>Does a capacitor bank reduce the kW consumed by a motor?</td><td>No. The motor's kW requirement for its mechanical work is unchanged. The capacitor only reduces the reactive current, and therefore total current, that the alternator and cables must supply.</td></tr>
    <tr><td>Why are alternators and transformers rated in kVA, not kW?</td><td>Because their windings are limited by current-driven heating, which depends on apparent power, not active power. kVA is a load-independent limit; usable kW depends on whatever power factor the connected load presents.</td></tr>
    <tr><td>State the three-phase power formula.</td><td>P equals root three times line voltage times line current times cosine phi, valid for both star and delta connections when line values are used.</td></tr>
    <tr><td>Why does root three appear in the three-phase power formula?</td><td>It comes from combining three phases 120 degrees apart using the star or delta relationship between line and phase quantities; the algebra collapses to a single root three factor regardless of connection type.</td></tr>
    <tr><td>How does a wattmeter measure power?</td><td>It has a current coil in series with the load and a pressure coil in parallel across the supply. Its deflection is proportional to V times I times cosine phi, active power, not simply V times I.</td></tr>
    <tr><td>Explain the two-wattmeter method.</td><td>Two wattmeters, current coils in two of the three lines, pressure coils referenced to the third line, measure total three-phase power as the algebraic sum of their two readings. Below 0.5 power factor, one wattmeter reads negative and must be subtracted.</td></tr>
    <tr><td>What does it mean if one wattmeter in the two-wattmeter method reads zero?</td><td>The power factor is exactly 0.5, corresponding to a 60 degree phase angle.</td></tr>
    <tr><td>Define demand factor.</td><td>Maximum demand divided by total connected load; always less than one since not all equipment runs simultaneously at full rating.</td></tr>
    <tr><td>Define load factor.</td><td>Average load divided by maximum demand; a high load factor means the load stays close to its peak most of the time.</td></tr>
    <tr><td>Define diversity factor.</td><td>Sum of individual maximum demands divided by the system's overall maximum demand; always greater than one since individual peaks do not usually coincide.</td></tr>
    <tr><td>Why is high voltage used for power transmission?</td><td>For the same power, higher voltage means lower current, and since losses are proportional to current squared, transmission losses fall sharply, even after accounting for step-up and step-down transformation.</td></tr>
    <tr><td>What happens if a ship's power factor is overcorrected past unity?</td><td>The system becomes leading, which some voltage regulation and protection schemes handle poorly; correction is usually deliberately targeted to about 0.95 lagging rather than exactly unity.</td></tr>
    <tr><td>Give a shipboard example of the demand versus connected load difference.</td><td>Total connected load adds up every motor's nameplate rating, but the bow thruster, mooring winches and cargo gear rarely all run at once, so actual maximum demand is well below the connected total.</td></tr>
    <tr><td>Why might an oversized, lightly loaded motor run at poor power factor?</td><td>Its magnetising current stays roughly constant regardless of load, so at light load the fixed magnetising current becomes a larger fraction of total current, dragging the power factor down.</td></tr>
    <tr><td>What is the relationship between the power triangle and Pythagoras' theorem?</td><td>Apparent power is the hypotenuse, active power and reactive power are the two perpendicular sides, so S squared equals P squared plus Q squared.</td></tr>
  </table>
  <!-- QUICK REVISION -->
  <div class="n-h1" id="s-quickrev">Quick Revision</div>
  <p class="n-p">Read this the morning of your interview. If you can explain each line in your own words, you are ready.</p>
  <table class="n-table">
    <tr><th>Concept</th><th>One Line</th></tr>
    <tr><td>Active power P</td><td>Real work. kW. P = VI cos φ.</td></tr>
    <tr><td>Reactive power Q</td><td>Builds fields, returns every half cycle. kVAR. No net work, but real current.</td></tr>
    <tr><td>Apparent power S</td><td>Total, the hypotenuse. kVA. Sizes the alternator and cables.</td></tr>
    <tr><td>Power factor</td><td>cos φ = kW/kVA. Ships run lagging, typically 0.75-0.85 uncorrected.</td></tr>
    <tr><td>Low PF problem</td><td>More current for the same kW, more I²R loss, eats alternator kVA headroom.</td></tr>
    <tr><td>PF correction</td><td>Capacitor banks supply leading kVAR locally, kW unchanged, current falls.</td></tr>
    <tr><td>Three-phase power</td><td>P = √3 V<sub>L</sub> I<sub>L</sub> cos φ, same formula for star and delta.</td></tr>
    <tr><td>Wattmeter</td><td>Current coil in series, pressure coil in parallel, reads VI cos φ.</td></tr>
    <tr><td>Two-wattmeter method</td><td>P = W₁ + W₂. Below 0.5 PF, one reading is negative.</td></tr>
    <tr><td>Demand factor</td><td>Max demand ÷ connected load. Less than one.</td></tr>
    <tr><td>Load factor</td><td>Average load ÷ max demand. High means steady use of capacity.</td></tr>
    <tr><td>Diversity factor</td><td>Sum of peaks ÷ system peak. Greater than one, peaks don't coincide.</td></tr>
    <tr><td>Why kVA rating</td><td>Windings limited by current-driven heat, independent of power factor.</td></tr>
  </table>
  <p class="n-p">If asked something here you genuinely do not know, do not invent an answer. State what you do know, then say honestly you are not certain about the rest. For the concepts above, there is no excuse; these are the ones every interviewer expects a serious candidate to have solid.</p>
  <!-- SUMMARY -->
  <div class="n-h1" id="s-summary">Module Summary</div>
  <p class="n-p">You should now be able to separate active, reactive and apparent power on the power triangle and explain each physically; define power factor and explain why ships run lagging; explain in engineering and financial terms why a low power factor is costly, without claiming it wastes net energy; size a capacitor bank for power factor correction; apply the three-phase power formula; explain how a wattmeter and the two-wattmeter method measure power; distinguish demand, load and diversity factor; explain why alternators and transformers are rated in kVA; and describe the generation-to-distribution chain both ashore and aboard. Power factor was introduced briefly in F01 and is now a complete, interview-ready topic; it will resurface when alternators are covered in F05 and F07, and again in F13 when protection against overcurrent from a degraded power factor is discussed.</p>
  <table class="n-table">
    <tr><th>Estimated Study Time</th><th>Quiz Difficulty</th><th>Next Module</th></tr>
    <tr><td>60-75 minutes</td><td>★★★★☆</td><td>F05, Electromagnetism and Generation</td></tr>
  </table>
  <div style="margin-top:20px; text-align:center;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F04')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:10px 24px;font-size:14px;">Take the F04 Quiz →</button>
  </div>
  </div>
</div>
</div>`);

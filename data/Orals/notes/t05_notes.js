window.loadNotes("T05", `<div class="view" id="view-notes-t05">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T05')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 05 - Transformers</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
    <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-principle')">Principle & EMF</button>
    <button class="anc-btn" onclick="jumpTo('s-losses')">Iron & Copper Losses</button>
    <button class="anc-btn" onclick="jumpTo('s-hum')">Transformer Hum</button>
    <button class="anc-btn" onclick="jumpTo('s-noload')">No-Load vs Load</button>
    <button class="anc-btn" onclick="jumpTo('s-auto')">Auto vs Double</button>
    <button class="anc-btn" onclick="jumpTo('s-ctpt')">CT & PT</button>
    <button class="anc-btn" onclick="jumpTo('s-buchholz')">Buchholz Relay</button>
    <button class="anc-btn" onclick="jumpTo('s-oil')">Oil Tests</button>
    <button class="anc-btn" onclick="jumpTo('s-coolingmethods')">Cooling Methods</button>
    <button class="anc-btn" onclick="jumpTo('s-parallel')">Parallel Operation</button>
    <button class="anc-btn" onclick="jumpTo('s-flyback')">Flyback Transformer</button>
    <button class="anc-btn" onclick="jumpTo('s-tests')">OC & SC Tests</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


    

  

  <!-- ═══ REORDERED SECTIONS ═══ -->

<div class="n-h1" id="s-principle">1A. EMF EQUATION - WORKED EXAMPLES & SURVEYOR Q&A</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Worked Example 1:</strong> Single phase transformer. Primary: N1 = <span class="n-val">500 turns</span>, V1 = <span class="n-val">440V</span>, f = <span class="n-val">50Hz</span>.<br>Φ_max = E / (4.44 × f × N) = 440 / (4.44 × 50 × 500) = 440 / 111,000 = <span class="n-val">0.00396 Wb</span>.<br>Secondary: N2 = 100 turns → V2 = 440 × (100/500) = <span class="n-val">88V</span>.</div></div>

  <div class="n-formula">E = 4.44 × f × N × Φmax &nbsp;|&nbsp; 4.44 = 4 × ff &nbsp;|&nbsp; ff = π / (2√2) ≈ 1.11 (form factor of sine wave)<div class="label">Origin of 4.44: RMS/Average ratio of a sine wave (form factor ≈ 1.11) × 4 = 4.44</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (All surveyors):</strong> What is the working principle of a transformer?<br><strong>Ideal Answer:</strong> Mutual electromagnetic induction. AC in primary creates alternating magnetic flux in core. Alternating flux links secondary winding. By Faraday's law, EMF induced in secondary is proportional to rate of change of flux and number of secondary turns. V1/V2 = N1/N2. Step-up: more secondary turns = higher secondary voltage, lower current. Cannot work on DC - DC gives constant flux, no change, no induction. Transformer is essentially a magnetic coupling between two electrically isolated circuits.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Numerical - common):</strong> A 440V/110V transformer has 400 primary turns. How many secondary turns? If secondary current is 20A, find primary current.<br><strong>Ideal Answer:</strong> Turns ratio = V1/V2 = N1/N2. 440/110 = 400/N2 → N2 = 400 × 110/440 = <span class="n-val">100 turns</span>. Primary current I1 = I2 × N2/N1 = 20 × 100/400 = <span class="n-val">5A</span>. Check: V1×I1 = 440×5 = 2200VA. V2×I2 = 110×20 = 2200VA. Energy balanced (ideal transformer).</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "Transformer is a magnetic machine - DC is useless because DC gives constant flux - no change = no induction." Turns ratio = voltage ratio. Current ratio = INVERSE of turns ratio. Step UP voltage → step DOWN current. EMF: E = 4.44 × f × N × Φ - more turns or more flux = more EMF.</div></div>

<div class="n-h1" id="s-losses">2A. LOSS FORMULAS & EFFICIENCY - DETAIL</div>
  <div class="n-h2">Hysteresis & Eddy Current Loss Formulas</div>
  <div class="n-grid">
  <div class="n-card" style="border-color:var(--orange-border)">
    <div class="card-title" style="color:var(--orange)">Wh = Kh × f × Bmax^1.6 × Volume</div>
    <div class="card-desc"><strong>Hysteresis loss.</strong> Kh = material constant. Higher Bmax or frequency = more loss. Reduce with grain-oriented silicon steel & lower flux density.</div>
  </div>
  <div class="n-card" style="border-color:var(--red-border)">
    <div class="card-title" style="color:var(--red)">We = Ke × f² × Bmax² × t² × Volume</div>
    <div class="card-desc"><strong>Eddy current loss.</strong> t = lamination thickness. Proportional to thickness SQUARED - halving thickness reduces eddy loss to <span class="n-val">1/4</span>.</div>
  </div>
  </div>

  <div class="n-formula">Maximum Efficiency occurs when COPPER LOSS = IRON LOSS<div class="label">Efficiency = output / (output + iron loss + copper loss)</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal, Kamath, Sanjib):</strong> What are the losses in a transformer?<br><strong>Ideal Answer:</strong> Iron losses (core, constant, no-load): Hysteresis (domain reversal - reduce with silicon steel) + Eddy current (circulating currents in core - reduce by laminating with thin insulated sheets 0.3–0.5mm). Copper losses (winding, variable, load-dependent): I1²R1 + I2²R2 - proportional to load current squared. Efficiency = output / (output + iron + copper). Maximum efficiency when copper loss = iron loss.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> Why is the transformer core laminated?<br><strong>Ideal Answer:</strong> To reduce eddy current losses. Alternating flux induces circulating currents causing I²R heating in the core. Eddy loss ∝ thickness² (We ∝ t²). Thin laminations (<span class="n-val">0.3–0.5mm</span>) of silicon steel, each insulated with varnish, break the eddy current path - high resistance - small currents - much less loss. Halving thickness reduces eddy losses to <span class="n-val">1/4</span>.</div></div>

  



  <div class="n-h1" id="s-hum">🔊 Transformer Hum - Causes and Warnings</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan, Nair: Transformer is humming louder than usual - causes?</strong></div></div>
  <div class="n-h2">Normal Hum</div>
  <p class="n-p">Transformers hum at <strong>TWICE</strong> the supply frequency (100Hz for 50Hz supply).<br>
  <strong>CAUSE:</strong> Magnetostriction - core laminations physically expand and contract with each magnetic flux cycle. At 50Hz: flux cycles 50 times per second. Core dimensions change twice per cycle (in both positive and negative peaks of flux). Result: mechanical vibration at 100Hz - transmitted as hum through mounting structure and oil.</p>
  <div class="n-h2">Increased Hum - When to Worry</div>
  <ul class="n-list">
    <li><strong>1. OVERVOLTAGE:</strong> Higher voltage → higher flux density → more magnetostriction → louder hum.</li>
    <li><strong>2. LOOSE LAMINATIONS:</strong> Laminations vibrate more freely → louder rattle/hum. Indicates maintenance needed.</li>
    <li><strong>3. LOOSE CORE BOLTS:</strong> Core not clamped tightly → laminations rattle.</li>
    <li><strong>4. OVERLOAD:</strong> High current → higher forces on windings → additional vibration.</li>
    <li><strong>5. HARMONICS in supply:</strong> Non-sinusoidal flux creates additional vibration frequencies.</li>
    <li><strong>6. LOOSE ACCESSORIES:</strong> External fittings vibrating sympathetically.</li>
  </ul>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Action on increased hum:</strong> Check supply voltage (not overvoltage). Check load (not overloaded). Check and tighten core bolts. Check for loose laminations. Check oil level and temperature. If persists: schedule inspection.</div></div>


<div class="n-h1" id="s-noload">3A. NO-LOAD vs ON-LOAD - COMPONENTS & SURVEYOR Q&A</div>
  <div class="n-h2">Components of No-Load Current (I0)</div>
  <ul class="n-list">
  <li><strong>Ic (core loss component):</strong> In phase with voltage - supplies iron losses.</li>
  <li><strong>Im (magnetising component):</strong> <span class="n-val">90° lagging</span> - creates the magnetic flux.</li>
  <li><strong>I0 = √(Ic² + Im²)</strong> - power factor on no-load very low (<span class="n-val">0.1 to 0.3</span> lagging).</li>
  </ul>
  <div class="n-formula">I1 = I0 + (N2/N1) × I2<div class="label">On-load: primary current = no-load current + reflected load current</div></div>
  <p class="n-p">On-load power factor depends on load PF - typically <span class="n-val">0.8–0.9 lagging</span> for inductive loads. Primary voltage is balanced by back-EMF from flux plus small drops across primary resistance and leakage reactance.</p>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Kamath, Deswal):</strong> What current flows at no load?<br><strong>Ideal Answer:</strong> A small magnetising current I0 (<span class="n-val">2–10%</span> of rated). Two components: Im (magnetising, 90° lagging - creates flux) and Ic (core-loss, in-phase - supplies iron losses). PF very low (0.1–0.3 lagging) as current is mainly reactive. No secondary current. This is why iron losses exist even with no load connected.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> Why does primary current increase when load is added?<br><strong>Ideal Answer:</strong> Secondary current I2 creates demagnetising MMF (N2×I2) opposing core flux. If flux fell, primary back-EMF would fall and primary draws more current. This extra reflected current (I2×N2/N1) creates equal-opposite MMF, restoring flux. Core flux stays nearly constant. Primary current = no-load + reflected load current - automatically rises with load.</div></div>

<div class="n-h1" id="s-auto">4A. AUTO vs DOUBLE-WOUND - COMPLETE COMPARISON & Q&A</div>
  <table class="n-table">
  <tr><th>Feature</th><th>Auto-Transformer</th><th>Double-Wound</th></tr>
  <tr><td>Number of windings</td><td>One - shared (tapped)</td><td>Two - separate</td></tr>
  <tr><td>Electrical isolation</td><td class="bad">NO - electrically connected</td><td class="ok">YES - full galvanic isolation</td></tr>
  <tr><td>Size / weight</td><td class="ok">Smaller, lighter</td><td>Larger, heavier</td></tr>
  <tr><td>Efficiency</td><td class="ok">Higher (less copper)</td><td>Lower (two windings)</td></tr>
  <tr><td>Cost</td><td class="ok">Lower</td><td>Higher</td></tr>
  <tr><td>Voltage ratio</td><td>Best for small ratios (≈1:1)</td><td>Any ratio</td></tr>
  <tr><td>Ship application</td><td>Motor starters, voltage adaptation</td><td>Shore connection, safety circuits, HV step-down</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Auto-starter taps:</strong> Reduced-voltage motor starting uses <span class="n-val">65%</span> or <span class="n-val">80%</span> taps. Step-down: V2 = V1 × (N2/N1), current in tapped section = I2 − I1 (circulating component).</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Sanjib, Vishwanathan):</strong> What is an auto-transformer and where used on ships?<br><strong>Ideal Answer:</strong> One winding, part primary part secondary (tapped). Advantages: smaller, lighter, cheaper, more efficient. Disadvantage: NO isolation - primary and secondary share winding, fault can transfer full voltage. Ship use: auto-transformer starters (65%/80% tap), voltage adaptation (440V↔415V/380V). NOT used where isolation required: shore connection, safety circuits, intrinsically safe equipment.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal):</strong> Why is a double-wound transformer used for shore connection?<br><strong>Ideal Answer:</strong> Shore connection needs complete isolation. Shore supply is solidly earthed (TN-S); ship uses IT (unearthed) system. The double-wound isolation transformer gives galvanic isolation between shore primary and ship secondary. Without it, shore earth connects to ship system - stray currents - electrolytic hull corrosion. An auto-transformer cannot isolate as windings are electrically connected.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> AUTO = One winding, cheap & efficient, NO isolation. DOUBLE-WOUND = Two windings, isolation = SAFETY. Shore connection ALWAYS double-wound to break the earth loop.</div></div>

<div class="n-h1" id="s-ctpt">📐 Current Transformer (CT) &amp; Potential Transformer (PT)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask CT open-circuit danger and PT earthing rule.</strong></div></div>
  <div class="n-h2">Current Transformer (CT)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Construction:</strong> Very few primary turns (often just a solid busbar passing through a toroidal core) vs many secondary turns. Steps down current to safe measurement levels (e.g. 100A primary → 5A secondary or 1A secondary).<br>
  <strong>Accuracy classes:</strong> Metering: 0.1, 0.2, 0.5 - very accurate for billing/metering. Protection: 5P10, 10P10 - must saturate at predefined fault current multiples to protect connected protection relays from damage.<br>
  <strong>5P10 means:</strong> 5% composite error, accuracy limit factor 10× rated current - must stay accurate up to 10× FLC.<br>
  <strong>CRITICAL DANGER:</strong> Never open-circuit a CT secondary while primary current flows. The primary flux has no secondary path to cancel it → entire flux drives the secondary → dangerously HIGH voltage (hundreds/thousands of volts) appears at secondary terminals → arc flash + equipment damage. Always short-circuit CT secondary before disconnecting.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>CT open-circuit rule: ALWAYS short the CT secondary before disconnecting ANY instrument or relay from it.</strong> Use shorting links provided on terminal blocks. This is the primary CT safety rule.</div></div>
  <div class="n-h2">Potential Transformer (PT)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Construction:</strong> Steps down high line voltage to safe <span class="n-val">110V AC</span> secondary (standard for instruments). High primary impedance. Connected in parallel with the circuit being monitored.<br>
  <strong>Mandatory PT earthing rule:</strong> One end of the PT secondary winding MUST be permanently earthed. Reason: if internal insulation fails between primary and secondary, primary-level voltage (e.g. 440V or 6.6kV) would appear on the secondary connected to instruments and meters - potentially lethal. The earth connection ensures this fault immediately becomes a ground fault that trips protection.<br>
  <strong>Fusing:</strong> PT primary must be fused to protect against PT internal faults and to allow safe isolation.</div></div>

<div class="n-h1" id="s-buchholz">🛡️ Buchholz Relay - Transformer Protection</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib, Kamath ask Buchholz relay working and two-stage response. Top 5-star surveyor topic.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>What is it:</strong> A gas-actuated relay installed in the pipe connecting the main transformer tank to the conservator oil expansion tank. Only fitted to oil-filled transformers with a conservator - not to hermetically sealed units or dry-type transformers.</div></div>
  <div class="n-h2">Two-Stage Operation</div>
  <table class="n-table">
    <tr><th>Stage</th><th>Trigger</th><th>Response</th><th>Fault Indicated</th></tr>
    <tr><td class="hl"><strong>Stage 1 - ALARM</strong></td><td>Slow accumulation of gas in the relay housing (upper float rises)</td><td class="hl">Alarm only - transformer stays online</td><td>Minor internal fault: core hot-spot, partial discharge, insulation deterioration slowly generating gas</td></tr>
    <tr><td class="bad"><strong>Stage 2 - TRIP</strong></td><td>Rapid oil surge caused by sudden violent fault (lower float or surge plate activates)</td><td class="bad">Instantaneous transformer isolation - HV and LV breakers trip</td><td>Severe internal fault: winding short circuit, inter-turn fault, flashover - producing explosive oil/gas surge</td></tr>
  </table>
  <div class="n-h2">Why Gas Collects</div>
  <p class="n-p">When transformer insulation or oil degrades due to an internal fault, the heat decomposes the oil and paper insulation. This decomposition releases gases - predominantly hydrogen (H₂), methane (CH₄), ethylene (C₂H₄), and acetylene (C₂H₂). These gases rise through the oil and collect in the upper dome of the Buchholz relay housing.</p>
  <div class="n-h2">Gas Analysis (Dissolved Gas Analysis - DGA)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>H₂ (Hydrogen):</strong> Partial discharge (corona). Early warning sign.<br>
  <strong>C₂H₂ (Acetylene):</strong> Arcing - most serious indicator. Transformer should be taken offline for investigation.<br>
  <strong>C₂H₄ (Ethylene):</strong> Thermal fault - hot metal above 700°C<br>
  <strong>CO (Carbon Monoxide) + CO₂:</strong> Paper insulation overheating - ageing<br>
  <strong>ETO Duty:</strong> After a Buchholz Stage 1 alarm, collect the trapped gas using the test cock, test with a lighter (combustible gas = fault). Send oil sample for laboratory DGA. Do NOT re-energise until fault is identified.
  </div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Stage 1 = slow gas = ALARM = minor fault. Stage 2 = oil surge = TRIP = major fault. Acetylene = arcing = danger. CO = paper burning.</div></div>

<div class="n-h1" id="s-oil">🛢️ Transformer Oil - Specifications &amp; Testing</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask BDV test values and moisture limits.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Transformer oil properties:</strong><br>
  <strong>Flash point:</strong> Must exceed <span class="n-val">140°C</span> - fire safety requirement<br>
  <strong>Low viscosity:</strong> Essential for natural thermosiphon convection cooling circulation<br>
  <strong>High dielectric strength:</strong> Must insulate between windings and core<br>
  <strong>Good chemical stability:</strong> Resists oxidation over years of service</div></div>
  <div class="n-h2">BDV (Breakdown Voltage) Test</div>
  <div class="n-formula">Electrodes: 2.5 mm gap · New oil: ≥70 kV · In-service minimum: ≥30 kV<div class="label">Oil sample placed between two electrodes 2.5 mm apart · AC voltage raised until oil flashes over</div></div>
  <div class="n-h2">Karl Fischer Moisture Test</div>
  <table class="n-table">
    <tr><th>Moisture Content</th><th>Condition</th><th>Action</th></tr>
    <tr><td>&lt;<span class="n-val">20 ppm</span></td><td class="ok">Healthy</td><td class="ok">Normal operation</td></tr>
    <tr><td><span class="n-val">20–50 ppm</span></td><td class="hl">Marginal</td><td class="hl">Increase monitoring frequency</td></tr>
    <tr><td>&gt;<span class="n-val">50 ppm</span></td><td class="bad">Requires treatment</td><td class="bad">Immediate centrifugal filtration or vacuum drying treatment</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>DGA (Dissolved Gas Analysis):</strong> Sample of transformer oil analysed for dissolved gases - each gas indicates a specific internal fault:<br>
  • <strong>H₂ (Hydrogen):</strong> Low-energy partial discharges<br>
  • <strong>C₂H₂ (Acetylene):</strong> High-energy internal electrical arcing - CRITICAL, indicates severe internal fault<br>
  • <strong>C₂H₄ (Ethylene):</strong> Severe thermal oil degradation<br>
  • <strong>CO + CO₂:</strong> Dangerous overheating of cellulose/paper winding insulation</div></div>

<div class="n-h1" id="s-coolingmethods">8. COOLING METHODS - ONAN, ONAF, OFAF</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Kamath</strong> asks the cooling designations and what each letter means.</div></div>
  <p class="n-p">Cooling codes use four letters: <strong>(1) Internal cooling medium, (2) Internal circulation, (3) External cooling medium, (4) External circulation.</strong> O = Oil, A = Air, W = Water, N = Natural, F = Forced.</p>
  <table class="n-table">
  <tr><th>Code</th><th>Meaning</th><th>Application</th></tr>
  <tr><td class="hl">ONAN</td><td>Oil Natural, Air Natural - oil convection + natural air over radiators.</td><td>Small/medium transformers. Simplest, no fans.</td></tr>
  <tr><td class="hl">ONAF</td><td>Oil Natural, Air Forced - fans blow air over radiators to boost capacity.</td><td>Medium/large. Fans cut in at high temperature.</td></tr>
  <tr><td class="hl">OFAF</td><td>Oil Forced, Air Forced - pump circulates oil + fans force air.</td><td>Large HV transformers, high load.</td></tr>
  <tr><td>AN / AF</td><td>Air Natural / Air Forced - dry-type (cast resin) transformers.</td><td>Common on modern ships - no oil, fire-safe.</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> First two letters = inside (oil); last two = outside (air). O→F means a PUMP added. A→F means FANS added. ONAN → ONAF → OFAF = progressively more forced cooling for bigger ratings.</div></div>

<div class="n-h1" id="s-parallel">9. PARALLEL OPERATION OF TRANSFORMERS - CONDITIONS</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Deswal</strong> asks the conditions for paralleling transformers.</div></div>
  <ol class="n-steps">
  <li><strong>Same voltage ratio (turns ratio):</strong> Unequal ratios cause circulating current even at no-load.</li>
  <li><strong>Same polarity:</strong> Wrong polarity = dead short circuit. Mandatory.</li>
  <li><strong>Same phase sequence</strong> (for 3-phase): Otherwise dangerous cross-phase short.</li>
  <li><strong>Same vector group / phase displacement:</strong> e.g. both Dyn11 - mismatched groups cannot parallel.</li>
  <li><strong>Same per-unit impedance (%Z):</strong> Ensures load shared in proportion to kVA rating. Unequal %Z → unequal load sharing, one overloads.</li>
  </ol>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Two absolute musts:</strong> Same POLARITY and same PHASE SEQUENCE - getting these wrong creates a direct short circuit. Voltage ratio and %Z affect load sharing; polarity and sequence affect safety.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal):</strong> Conditions for parallel operation of transformers?<br><strong>Ideal Answer:</strong> (1) Same voltage/turns ratio - avoid circulating current; (2) Same polarity - else short circuit; (3) Same phase sequence; (4) Same vector group/phase displacement (e.g. Dyn11 with Dyn11); (5) Same per-unit impedance - for proportional load sharing. If %Z differs, transformer with lower impedance takes more load and may overload.</div></div>

  <div class="n-h1" id="s-flyback">🔄 Flyback Transformer - Electronics-Linked</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: Sanjib asks this - electronics-linked question.</strong></div></div>
  <p class="n-p">A flyback transformer (line output transformer / LOPT) is a special type used in switch-mode power supplies (SMPS) and older CRT displays. It stores energy in the magnetic core during the switch-ON phase and releases it during switch-OFF.</p>
  <div class="n-h2">Working (Different from Normal Transformer)</div>
  <ol class="n-steps">
    <li><strong>PHASE 1 (SWITCH ON):</strong> Switch (MOSFET) closes. Primary current flows - energy stored in magnetic core as flux (like an inductor). Secondary diode is reverse biased - NO secondary current.</li>
    <li><strong>PHASE 2 (FLYBACK/SWITCH OFF):</strong> Switch opens. Magnetic field collapses - polarity reverses - secondary diode is now forward biased - stored energy releases into secondary circuit.</li>
  </ol>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Ship Applications:</strong> SMPS (all modern 24V DC, 12V DC control supplies), radar transmitter (high voltage pulse for magnetron), isolated DC-DC converters. Provides full galvanic isolation.</div></div>


  <div class="n-h1" id="s-tests">🧪 Transformer Open Circuit and Short Circuit Tests</div>
  <div class="n-h2">Open Circuit (No-Load) Test</div>
  <ul class="n-list">
    <li><strong>Setup:</strong> Apply rated voltage to primary. Secondary open-circuited. Measure: P0 (watts), V1, I0.</li>
    <li><strong>Results:</strong> P0 = iron losses (core losses). I0 = no-load current. PF0 = P0 / (V1 × I0).</li>
    <li><strong>Practice:</strong> Run on LOW VOLTAGE side (secondary) to save power - apply rated LV voltage.</li>
  </ul>
  <div class="n-h2">Short Circuit (Load) Test</div>
  <ul class="n-list">
    <li><strong>Setup:</strong> Short-circuit secondary. Apply REDUCED voltage to primary until rated current flows. Measure: Psc (watts), Vsc, I1.</li>
    <li><strong>Results:</strong> Psc = copper losses at rated current. Vsc = percentage impedance voltage.</li>
    <li><strong>Practice:</strong> Run on HIGH VOLTAGE side (primary) - apply reduced voltage.</li>
    <li><strong>Impedance:</strong> Percentage impedance Z% = (Vsc / V1rated) × 100%. Typical Z%: 4-8% for power transformers.</li>
  </ul>


<div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">These are exact question formats from MMD orals. Study the key points.</div></div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>Why must a CT secondary never be open-circuited? (All)</td>
      <td>With no secondary current, there is no opposing MMF. The primary current fully magnetises the core into deep saturation. The massive rate of flux change induces thousands of lethal volts on the secondary terminals, risking electrocution and destroying the CT core via extreme heat. Always short-circuit the CT before disconnecting instruments.</td>
    </tr>
    <tr>
      <td>Why do we laminate the transformer core? (Deswal)</td>
      <td>To reduce eddy current losses. Alternating flux induces circulating currents in the steel core, causing I²R heating. By slicing the core into <span class="n-val">0.3mm</span> laminations insulated with varnish, we break the electrical path. Eddy loss is proportional to the square of thickness, so laminating drastically reduces the loss.</td>
    </tr>
    <tr>
      <td>Why use a double-wound transformer for shore connection instead of an auto-transformer? (Kamath)</td>
      <td>A shore connection requires complete galvanic isolation to break the earth loop between the solidly-earthed shore supply and the floating ship IT system. An auto-transformer shares a winding and provides NO electrical isolation. Without isolation, stray currents would cause massive electrolytic corrosion to the hull.</td>
    </tr>
  </table>

<div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>CT Safety</td>
      <td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td>
      <td>NEVER open circuit. High voltage electrocution hazard. Short circuit it first.</td>
    </tr>
    <tr>
      <td>EMF Equation</td>
      <td class="hl">⭐⭐⭐⭐⭐ All</td>
      <td>E = 4.44 × f × N × Φ_max. If freq drops, flux increases → core saturation → overheat.</td>
    </tr>
    <tr>
      <td>Buchholz Relay</td>
      <td class="hl">⭐⭐⭐⭐⭐ Sanjib, Kamath</td>
      <td>Upper float = alarm (slow gas). Lower float = trip (surge). Acetylene = serious arc fault.</td>
    </tr>
    <tr>
      <td>Iron vs Copper Loss</td>
      <td class="hl">⭐⭐⭐⭐ Deswal</td>
      <td>Iron = constant (hysteresis/eddy). Copper = variable (I²R). Laminate core to stop eddy currents.</td>
    </tr>
    <tr>
      <td>Parallel Conditions</td>
      <td class="hl">⭐⭐⭐⭐ Deswal</td>
      <td>Same voltage ratio, polarity, Z%, phase sequence. Wrong Z% causes unequal load sharing.</td>
    </tr>
    <tr>
      <td>Transformer Hum</td>
      <td class="hl">⭐⭐⭐ Vishwanathan</td>
      <td>Caused by magnetostriction at <span class="n-val">100Hz</span>. Increases if overvoltage, overload, or loose bolts.</td>
    </tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Coming Soon:</strong> The written preparation module is currently under development. It will feature past papers, detailed numerical solutions, and structured answers for this topic.  </div>
</div>
</div>
`);
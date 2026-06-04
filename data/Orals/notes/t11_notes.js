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
      <span class="tag tag-orange">Power Triangle · kVA vs kW</span>
      <span class="tag tag-purple">Harmonics · VFD · THD</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-triangle')">Power Triangle</button>
    <button class="anc-btn" onclick="jumpTo('s-kva')">kVA vs kW</button>
    <button class="anc-btn" onclick="jumpTo('s-lowpf')">Low PF Effects</button>
    <button class="anc-btn" onclick="jumpTo('s-correction')">PF Correction</button>
    <button class="anc-btn" onclick="jumpTo('s-harmonics')">Harmonics</button>
    <button class="anc-btn" onclick="jumpTo('s-triangle-detail')">Triangle Detail</button>
    <button class="anc-btn" onclick="jumpTo('s-droop')">Droop</button>
    <button class="anc-btn" onclick="jumpTo('s-lossexcitation')">Loss Excitation</button>
    <button class="anc-btn" onclick="jumpTo('s-pfcorrect')">PF Correct Detail</button>
    <button class="anc-btn" onclick="jumpTo('s-harmonics-detail')">Harmonics Detail</button>
    <button class="anc-btn" onclick="jumpTo('s-preftrip')">Pref Trip</button>
    <button class="anc-btn" onclick="jumpTo('s-shorepower')">Shore Power</button>
    <button class="anc-btn" onclick="jumpTo('s-formfactor')">Form Factor</button>
    <button class="anc-btn" onclick="jumpTo('s-reactive')">Reactive Pwr</button>
    <button class="anc-btn" onclick="jumpTo('s-avrsolas')">AVR SOLAS</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-sync-start')">Sync Motor</button>
    <button class="anc-btn" onclick="jumpTo('s-kirchhoff')">Kirchhoff</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-triangle">📐 Power Triangle</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Sanjib, Vishwanathan ask in almost every oral.</strong> Know the triangle, all three formulas, and the ship's typical PF value.</div></div>

  <div class="n-formula">PF = kW / kVA = cos φ<div class="label">Active Power (kW) = V × I × cos φ · Reactive Power (kVAR) = V × I × sin φ · Apparent Power (kVA) = V × I = √(kW² + kVAR²)</div></div>

  <table class="n-table">
    <tr><th>Power Type</th><th>Symbol</th><th>Unit</th><th>Description</th></tr>
    <tr><td><strong>Active Power</strong></td><td class="hl">P</td><td class="hl">kW</td><td>Does useful work - heats, drives motors, lights. Real energy consumed.</td></tr>
    <tr><td><strong>Reactive Power</strong></td><td class="hl">Q</td><td class="hl">kVAR</td><td>Magnetising power for inductors/capacitors. No net energy consumed but causes real current flow.</td></tr>
    <tr><td><strong>Apparent Power</strong></td><td class="hl">S</td><td class="hl">kVA</td><td>Total power supplied by generator. Determines generator and cable sizing.</td></tr>
    <tr><td><strong>Power Factor</strong></td><td class="hl">PF</td><td class="hl"> - </td><td>Ratio of useful to total power. Range 0 to 1.0.</td></tr>
  </table>

  <div class="n-h2">PF Values to Know</div>
  <table class="n-table">
    <tr><th>Circuit Type</th><th>PF</th><th>Phase Angle</th></tr>
    <tr><td>Pure resistive (heaters, incandescent lights)</td><td class="ok"><span class="n-val">1.0</span> (unity)</td><td>0°</td></tr>
    <tr><td>Pure inductive</td><td class="bad"><span class="n-val">0</span> (lagging)</td><td>90° lag</td></tr>
    <tr><td>Pure capacitive</td><td class="bad"><span class="n-val">0</span> (leading)</td><td>90° lead</td></tr>
    <tr><td>Typical ship at sea</td><td class="hl"><span class="n-val">0.8 lagging</span></td><td>Range 0.7–0.85</td></tr>
    <tr><td>Typical ship in port</td><td class="hl"><span class="n-val">0.7–0.75 lagging</span></td><td>More inductive loads</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why always lagging on ships?</strong> Dominant loads are induction motors (sea water pumps, boiler feed pumps, refrigeration compressors, fans, HVAC) - all inherently inductive → draw lagging reactive current (kVAR) from supply. Ship PF is almost always lagging, never leading under normal operation.</div></div>

  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-kva">🔋 Why Alternator Rated in kVA, Not kW</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Every surveyor asks this.</strong> The most fundamental power factor question. Know the two physical limits.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Two physical limits of the alternator:</strong><br>
  1. <strong>Thermal limit:</strong> Maximum current the stator copper windings can carry without overheating (I²R losses).<br>
  2. <strong>Insulation limit:</strong> Maximum voltage the winding insulation can withstand.<br>
  Both depend on <strong>Apparent Power (kVA = V × I)</strong> - independent of the load's power factor.<br><br>
  If rated in kW, the rating would be ambiguous without specifying PF. A <span class="n-val">1000 kVA</span> generator delivers <span class="n-val">1000 kW</span> at PF <span class="n-val">1.0</span> but only <span class="n-val">800 kW</span> at PF <span class="n-val">0.8</span> - the physical machine is identical, only the connected load changes. kVA rating is PF-independent and defines the true machine capacity.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Copper burns from current (I²R). Current = Amps = kVA ÷ Voltage. So kVA determines winding heating - not kW. Motors rated in kW because useful mechanical output matters, not heating.</div></div>

  <!-- ═══ SECTION 3 ═══ -->
  <div class="n-h1" id="s-lowpf">⚠️ Effects of Low Power Factor on Ships</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Sanjib ask:</strong> "What is the significance of PF and what happens if PF is low?"</div></div>

  <ul class="n-list">
    <li><strong>Higher current for same kW:</strong> More current must flow to deliver the same useful power → cables, generators, transformers carry more current</li>
    <li><strong>I²R heating losses:</strong> Higher current → more heat in cables and windings → increased energy waste, reduced efficiency</li>
    <li><strong>Voltage drop:</strong> Increased current causes more voltage drop across cable impedance → reduced terminal voltage at loads</li>
    <li><strong>Generator reaches kVA limit early:</strong> Generator hits its current (kVA) limit before its engine power (kW) limit → effective generation capacity is reduced</li>
    <li><strong>Increased fuel consumption:</strong> Prime mover drives generator at higher reactive current → more fuel burned per kW delivered</li>
    <li><strong>Shore power cost:</strong> Port utilities charge for reactive power (kVAR) in addition to active power (kW)</li>
  </ul>

  <div class="n-formula">Example: PF = 0.6 vs PF = 0.8 for same 600 kW load<div class="label">At PF 0.6: kVA = 600/0.6 = 1000 kVA (1000A at 600V) · At PF 0.8: kVA = 600/0.8 = 750 kVA (750A) · Low PF draws 33% more current for same useful work</div></div>

  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-correction">🔧 Power Factor Correction</div>
  <div class="n-h2">Capacitor Banks (Static Correction)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working:</strong> Capacitor banks connected in parallel with inductive loads. Supply leading reactive current (kVAR) that cancels out the lagging reactive current drawn by induction motors. Net kVAR demand on generator decreases → PF improves toward unity. Fixed-step switching - switched in blocks, not continuously variable. Low capital cost, virtually maintenance-free.</div></div>

  <div class="n-h2">Synchronous Condenser</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Synchronous condenser:</strong> An overexcited synchronous motor running with no mechanical load on its shaft. By increasing its field current above normal, it generates continuously variable leading kVAR - perfectly cancels lagging kVAR from motors. More flexible than fixed capacitor banks but higher capital cost and requires maintenance. Provides smooth, stepless PF correction.</div></div>

  <div class="n-h2">Other Methods</div>
  <ul class="n-list">
    <li><strong>Avoid lightly-loaded motors:</strong> Induction motors at low load draw proportionally more reactive current - stop or consolidate where possible</li>
    <li><strong>VFDs on large motors:</strong> Modern active front-end VFDs draw near-unity PF from the supply</li>
    <li><strong>Paralleling generators:</strong> Distribute reactive load evenly between generators via AVR droop adjustment</li>
  </ul>

  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s-harmonics">〰️ Harmonics &amp; THD</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan, Kamath ask about VFD harmonics and THD limits.</strong> Know exact IEC numbers and mitigation methods.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Harmonic sources on ships:</strong> Non-linear loads that distort the sinusoidal current waveform. VFD rectifier stages are the largest source, generating 5th, 7th, and 11th harmonic currents injected back into the power system. Also: rectifiers, battery chargers, UPS inverters, fluorescent lighting ballasts.</div></div>

  <div class="n-h2">Effects of Harmonics</div>
  <ul class="n-list">
    <li><strong>Transformer overheating:</strong> Harmonic currents increase core flux → higher iron losses → overheating of transformer cores</li>
    <li><strong>Motor overheating:</strong> Harmonic torques cause vibration and increased winding losses</li>
    <li><strong>Protection relay interference:</strong> Distorted waveform can cause incorrect timing in overcurrent relays</li>
    <li><strong>Increased form factor:</strong> Raises V_rms/V_avg above 1.11 → more heating in resistive loads</li>
    <li><strong>Neutral conductor overloading:</strong> Triple-N (3rd, 9th harmonics) add in the neutral - can overload neutral conductors in 4-wire systems</li>
  </ul>

  <div class="n-h2">THD Limits</div>
  <table class="n-table">
    <tr><th>Standard</th><th>Limit</th><th>Application</th></tr>
    <tr><td><span class="n-val">IEC/IEEE 80005-1</span></td><td class="hl">THD ≤ <span class="n-val">5%</span></td><td>Total harmonic distortion - all load ranges (HVSC)</td></tr>
    <tr><td><span class="n-val">IEC/IEEE 80005-1</span></td><td class="hl">Single harmonic ≤ <span class="n-val">3%</span></td><td>Any individual harmonic component</td></tr>
  </table>

  <div class="n-h2">VFD Harmonic Mitigation</div>
  <ul class="n-list">
    <li><strong>Passive harmonic filters:</strong> Tuned LC circuits connected at VFD input - absorb specific harmonic frequencies (5th, 7th)</li>
    <li><strong>Active harmonic filters:</strong> Inject equal and opposite harmonic currents - more effective but expensive</li>
    <li><strong>Active front-end (AFE) VFDs:</strong> Modern VFDs with IGBT rectifier stages draw near-unity PF and near-zero harmonics from supply</li>
    <li><strong>12-pulse rectifier:</strong> Two 6-pulse rectifiers with transformers phase-shifted by 30° - cancels 5th and 7th harmonics</li>
    <li><strong>Isolation transformers with K-factor rating:</strong> Specially designed transformers tolerant of harmonic loads</li>
  </ul>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> PF triangle = kW (work) + kVAR (magnetism) = kVA (total). Low PF = more current for same work = heating + fuel waste. THD limit = <span class="n-val">5%</span> total, <span class="n-val">3%</span> per harmonic (IEC 80005-1). VFD = 5th, 7th harmonics → filter them.</div></div>

  <!-- ═══ SURVEYOR Q&A ═══ -->
  
  <!-- ═══ T11 EXPANDED FROM DOCX ═══ -->

  <div class="n-h1" id="s-triangle-detail">📐 Power Triangle - Full Detail</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Every surveyor asks PF on your ship, why lagging, and why kVA not kW.</strong> Know all three formulas and the power triangle by heart. Vishwanathan, Sanjib, Kamath.</div></div>
  <div class="n-formula">PF = kW / kVA = cos φ<div class="label">φ = phase angle between voltage and current waveforms</div></div>
  <table class="n-table">
    <tr><th>Power Type</th><th>Symbol</th><th>Unit</th><th>Meaning</th><th>Formula</th></tr>
    <tr><td><strong>Active Power</strong></td><td class="hl">P</td><td class="hl">kW</td><td>Real power - useful work (mechanical, heat)</td><td>P = V × I × cos φ</td></tr>
    <tr><td><strong>Reactive Power</strong></td><td class="hl">Q</td><td class="hl">kVAR</td><td>Magnetising power - no net work done, oscillates</td><td>Q = V × I × sin φ</td></tr>
    <tr><td><strong>Apparent Power</strong></td><td class="hl">S</td><td class="hl">kVA</td><td>Total power supplied by generator</td><td>S = V × I = √(kW² + kVAR²)</td></tr>
    <tr><td><strong>Power Factor</strong></td><td class="hl">cos φ</td><td class="hl">0–1.0</td><td>Efficiency ratio: useful/total power</td><td>PF = kW / kVA</td></tr>
  </table>
  <table class="n-table">
    <tr><th>Load Type</th><th>PF Value</th><th>Phase Angle</th><th>Ship Example</th></tr>
    <tr><td>Pure inductive</td><td class="bad"><span class="n-val">0 (lagging)</span></td><td>Current lags voltage 90°</td><td>Ideal unloaded transformer</td></tr>
    <tr><td>Pure resistive</td><td class="ok"><span class="n-val">1.0 (unity)</span></td><td>Current in phase</td><td>Electric heaters, incandescent lamps</td></tr>
    <tr><td>Pure capacitive</td><td class="bad"><span class="n-val">0 (leading)</span></td><td>Current leads voltage 90°</td><td>Capacitor banks at no load</td></tr>
    <tr><td><strong>Typical ship at sea</strong></td><td class="hl"><span class="n-val">0.8 lagging</span></td><td>~37°</td><td>Standard exam answer</td></tr>
    <tr><td>Ship in port</td><td class="hl"><span class="n-val">0.7–0.75 lagging</span></td><td>Fewer motors = more inductive</td><td>Reduced propulsion load</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why ships always lagging:</strong> &gt;70% of ship loads are induction motors (main SW pumps, FW pumps, boiler feed pumps, cargo fans, AC compressors, deck cranes, winches). All induction motors are inherently inductive - they draw lagging magnetising current from supply. Even lightly loaded motors draw relatively more lagging KVAR.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why rated kVA not kW? (Vishwanathan, Sanjib)</strong><br>kVA rating defines the machine's true physical capacity - the maximum current the stator can carry without overheating (thermal limit) and the maximum voltage insulation can withstand. Both limits depend on kVA = V × I, independent of power factor. At PF 0.8: a 1000 kVA generator delivers only 800 kW. At PF 1.0: same machine delivers 1000 kW. Rating in kW would require specifying PF to be meaningful. kVA is the universal capacity statement.</div></div>

  <div class="n-h1" id="s-droop">⚖️ Droop - Governor &amp; AVR</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Praveen Nair, Wad ask droop with graph.</strong> Know BOTH types and which controls kW vs kVAR.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why droop is essential:</strong> Without droop (isochronous = zero droop), parallel generators are unstable - if one picks up extra load its governor adds fuel → takes more load → runaway until it takes everything and other machine motorises. Droop prevents this by making speed/voltage drop proportionally as load increases.</div></div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Governor Droop (Speed Droop)</th><th>AVR Droop (Voltage Droop)</th></tr>
    <tr><td><strong>Controls</strong></td><td class="hl">kW (Active Power) sharing</td><td class="hl">kVAR (Reactive Power) sharing</td></tr>
    <tr><td>Mechanism</td><td>As kW load increases → speed falls <span class="n-val">3–5%</span></td><td>As kVAR load increases → voltage falls <span class="n-val">3–5%</span></td></tr>
    <tr><td>Symptom if wrong</td><td class="bad">kW meters unequal (e.g. 400 kW vs 250 kW)</td><td class="bad">kVAR meters or PF unequal between generators</td></tr>
    <tr><td>Remedy</td><td>Adjust governor droop potentiometer on overloaded generator</td><td>Adjust AVR droop potentiometer on generator with more kVAR</td></tr>
    <tr><td>Isochronous mode</td><td class="bad">0% droop - ONLY for single generator</td><td class="bad">Cannot use in parallel - causes instability</td></tr>
  </table>
  <div class="n-formula">Droop% = (No-load speed − Full-load speed) / No-load speed × 100<div class="label">Example: 60 Hz, 5% droop → full-load frequency = 57 Hz · Generator with LESS droop takes MORE load</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> kW unequal → Governor droop. kVAR unequal → AVR droop. To shift kW from Gen A to Gen B: increase droop on Gen A OR decrease droop on Gen B. Droop is why parallel generators share load stably - it's the "sharing mechanism."</div></div>

  <div class="n-h1" id="s-lossexcitation">⚡ Loss of Excitation During Parallel Operation</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib, Kamath ask this - heavily tested.</strong> Know the step-by-step electrical sequence and how it looks on the MSB meters.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>What happens:</strong> When one generator loses excitation (rotor field collapses), it can no longer produce its own EMF. Still connected to busbars → begins operating as an induction generator → ABSORBS reactive power (kVAR) from the busbar instead of generating it.</div></div>
  <div class="n-h2">Electrical Sequence - Loss of Excitation</div>
  <ol class="n-steps">
    <li>Rotor field collapses - generator terminal voltage starts to fall</li>
    <li>AVR detects low voltage and attempts to increase excitation - but excitation circuit is faulty, cannot respond</li>
    <li>Generator begins ABSORBING kVAR from the other generator via busbars</li>
    <li>Healthy generator's AVR increases excitation to compensate - its reactive current load increases</li>
    <li>kVAR balance disrupted - healthy generator may trip on overcurrent or AVR overload</li>
    <li>Under-excitation relay (or loss of field relay) should detect and trip the faulty generator</li>
  </ol>
  <div class="n-h2">What the MSB Meters Show</div>
  <ul class="n-list">
    <li>Faulty generator: PF meter moves toward leading (or near zero) | kVAR meter REVERSES/goes negative</li>
    <li>Faulty generator: current may increase (absorbing kVAR)</li>
    <li>Healthy generator: current increases to supply the extra reactive load</li>
    <li>Busbar voltage may drop as reactive balance is lost</li>
  </ul>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Action as ETO:</strong> Recognise reversed kVAR → manually trip faulty generator ACB immediately → increase output of healthy generator → start standby generator → investigate excitation fault (AVR, rotating diodes, field winding).</div></div>

  <div class="n-h1" id="s-pfcorrect">🔧 Power Factor Correction Methods</div>
  <table class="n-table">
    <tr><th>Method</th><th>How it Works</th><th>Advantage</th><th>Disadvantage</th></tr>
    <tr><td><strong>Capacitor Banks</strong></td><td>Connected in parallel with inductive loads - supply leading kVAR to cancel lagging kVAR</td><td class="ok">Cheap, simple, maintenance-free, no moving parts</td><td class="bad">Fixed steps only - cannot be continuously varied. May cause voltage spikes on switching.</td></tr>
    <tr><td><strong>Synchronous Condenser</strong></td><td>Overexcited synchronous motor running on no load - generates continuously variable leading kVAR</td><td class="ok">Continuously variable - precise control. Also improves voltage stability.</td><td class="bad">Expensive, requires maintenance (rotating machine), consumes some active power</td></tr>
    <tr><td><strong>Reduce lightly loaded motors</strong></td><td>Stop or replace motors running at very low load - they draw proportionally more kVAR than at full load</td><td class="ok">No extra equipment needed</td><td class="bad">Not always operationally practical</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Synchronous condenser working (Kamath, Sanjib, Upendra Kumar):</strong> A synchronous motor connected to the busbars running with NO mechanical load on its shaft. When overexcited (DC field current increased above normal), it generates leading reactive current (kVAR) into the busbars - exactly cancelling the lagging kVAR drawn by induction motors. The amount of leading kVAR is varied by adjusting the excitation current - continuous, smooth control. Construction: identical to a synchronous motor but shaft is not connected to any driven equipment.</div></div>

  <div class="n-h1" id="s-harmonics-detail">〰️ Harmonics &amp; THD</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Sources of harmonics on ships:</strong> Non-linear loads distort the sinusoidal current waveform. VFDs (rectifier stages) are the largest source - generate 5th and 7th harmonics primarily. Also: battery chargers, UPS inverters, fluorescent lighting ballasts, rectifiers.</div></div>
  <table class="n-table">
    <tr><th>Harmonic</th><th>Order</th><th>Source</th><th>Effect</th></tr>
    <tr><td>5th harmonic</td><td class="hl"><span class="n-val">250 Hz</span> (at 50 Hz supply)</td><td>6-pulse VFD rectifier</td><td>Transformer overheating, motor vibration</td></tr>
    <tr><td>7th harmonic</td><td class="hl"><span class="n-val">350 Hz</span> (at 50 Hz supply)</td><td>6-pulse VFD rectifier</td><td>Protection relay interference</td></tr>
    <tr><td>Triple-N (3rd, 9th)</td><td class="hl"><span class="n-val">150 Hz, 450 Hz</span></td><td>Single-phase non-linear loads</td><td>Neutral conductor overloading in 4-wire systems</td></tr>
  </table>
  <div class="n-h2">THD Limits per IEC/IEEE 80005-1 (HVSC)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>THD Total Harmonic Distortion ≤ <span class="n-val">5%</span> at all loads. No single harmonic &gt; <span class="n-val">3%</span>.</strong> Exceeding these limits causes transformer overheating and protection relay misoperation. Standard: IEC/IEEE 80005-1.</div></div>
  <div class="n-h2">Harmonic Mitigation</div>
  <ul class="n-list">
    <li><strong>Active Front End (AFE) VFD:</strong> IGBT rectifier draws near-sinusoidal current - near-zero harmonics generated</li>
    <li><strong>12-pulse drive:</strong> Two 6-pulse drives with phase-shifted transformers - cancels 5th and 7th harmonics</li>
    <li><strong>Passive harmonic filters:</strong> Tuned LC circuits at VFD input absorb specific harmonic frequencies</li>
    <li><strong>Active harmonic filters:</strong> Inject equal and opposite harmonic currents - most effective</li>
  </ul>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> PF triangle: kW (work) + kVAR (magnetism) = kVA (total). Ship = 0.8 lagging (motors). kW unequal → governor droop. kVAR unequal → AVR droop. Loss of excitation = reversed kVAR meter. THD limit = 5% total, 3% per harmonic. VFD = 5th + 7th harmonics → filter them.</div></div>


  <div class="n-h1" id="s-preftrip">🛑 Preferential Trip System</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>What it is:</strong> Also called sequential load shedding. An automatic protection system that disconnects non-essential loads in a predetermined sequence when the main generator is overloaded.</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Purpose:</strong> Prevents the remaining generator(s) from tripping on overcurrent during an overload (e.g., after restoring power from blackout with only one generator). Losing some non-essential loads (galley, HVAC) is better than a total blackout.</div></div>
  <ul class="n-list">
    <li><strong>SOLAS Requirement:</strong> Chapter II-1 Reg 42/43 requires arrangements to ensure continuity of essential services in an emergency.</li>
    <li><strong>Sequence Example:</strong> Trip 1 (5s) Galley/Laundry → Trip 2 (10s) AC compressors → Trip 3 (15s) Cargo vent fans.</li>
    <li><strong>Essential Loads (Never Tripped):</strong> Steering gear, nav lights, comms, fire pumps, emergency lighting.</li>
  </ul>

  <div class="n-h1" id="s-shorepower">🔌 Shore Power Connection (Cold Ironing)</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Electrical Checks Before Connection (Deswal asks):</strong><br>1. Verify shore voltage matches ship (e.g. 440V or 6.6kV).<br>2. Verify shore frequency matches ship (e.g. 60Hz or 50Hz).<br>3. Check cable rating, connection polarity, and condition of shore connection box.<br>4. Ensure ship's generators are standby with ACBs OPEN before shore breaker is closed.<br>5. Verify Phase Sequence using a phase sequence meter.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Power Factor Implication:</strong> Shore utility charges for reactive power (kVAR) in addition to kW. This creates an incentive to improve PF while on shore power, unlike onboard where the shipowner just absorbs the poor PF losses internally.</div></div>

  <div class="n-h1" id="s-formfactor">📐 Form Factor</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Form Factor = RMS value / Average value.</strong> For a pure sine wave: π/(2√2) ≈ <strong>1.11</strong>.</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Significance:</strong> Transformers are designed based on this 1.11 factor. If supply is distorted by harmonics, the form factor increases above 1.11 → transformer core flux is higher than designed → increased iron losses → severe overheating. Also appears in generator EMF equation: E = 4.44 × f × N × Φm (where 4.44 = 4 × 1.11).</div></div>

  <div class="n-h1" id="s-reactive">🔄 Reactive Power — Where Does It Go?</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL (Kamath): "Where does reactive power go?"</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body">Reactive power (kVAR) is <strong>NOT</strong> lost or dissipated as heat. It oscillates between the source and the load at twice the supply frequency. It is returned to the source every half cycle.</div></div>
  <ul class="n-list">
    <li><strong>In an induction motor:</strong> kVAR sustains the rotating magnetic field enabling torque. No kVAR = no magnetic field = no torque.</li>
    <li><strong>In a transformer:</strong> kVAR maintains the core magnetisation.</li>
    <li><strong>Answer in one sentence:</strong> "Reactive power goes to the motor to sustain its magnetic field — it is returned to the source every half cycle, not consumed."</li>
  </ul>

  <div class="n-h1" id="s-avrsolas">📜 SOLAS Regulation for AVR</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS II-1/Reg 40.3:</strong> Automatic Voltage Regulator must maintain voltage within <strong>±2.5%</strong> of rated voltage under any load from no-load to full-load.</div></div>
  <ul class="n-list">
    <li><strong>Transient voltage:</strong> Must recover to ±2.5% within 1.5 seconds of sudden full-load pickup or rejection.</li>
    <li><strong>Why remove AVR during IR test:</strong> AVR contains semiconductors (thyristors, transistors, capacitors) sensitive to DC test voltage. Megger at 500V-1000V DC will permanently destroy them. Also prevents test voltage injecting back into winding giving false readings.</li>
  </ul>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Loss of Excitation Trip Sequence:</strong> If asked which trip activates FIRST when excitation is lost in parallel: The <strong>Under-excitation relay (Loss of Field relay)</strong> activates FIRST, detecting the massive reactive power absorption. If it fails, the resulting reverse kVAR overload would trip the healthy generator on overcurrent or trigger a preferential trip.</div></div>

<div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 11</div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the power factor on your ship? Is it lagging or leading? (Kamath, Sanjib, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> Approximately <span class="n-val">0.8 lagging</span>. Always lagging because dominant loads are induction motors (sea water pumps, boiler feed pumps, refrigeration compressors, fans, HVAC) - all inherently inductive, drawing lagging reactive current from the supply.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why is the alternator rated in kVA and not kW? (Every surveyor)</strong><br><strong>Ideal Answer:</strong> kVA rating defines the machine's two physical capacity limits: (1) Thermal limit - maximum stator current before overheating (I²R losses in conductors). (2) Insulation limit - maximum voltage before insulation breakdown. Both depend on kVA = V × I, independent of the load's power factor. If rated in kW: a <span class="n-val">1000 kVA</span> generator delivers <span class="n-val">1000 kW</span> at PF <span class="n-val">1.0</span> but only <span class="n-val">800 kW</span> at PF <span class="n-val">0.8</span> - the physical machine is identical, the load changed.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What happens if power factor is low? (Kamath, Sanjib)</strong><br><strong>Ideal Answer:</strong> More current must flow for same useful kW → severe I²R heating losses in cables and windings → reduced terminal voltage at loads → generators hit kVA (current) limit before kW (engine) limit, reducing effective generation capacity → increased fuel consumption. For example: at PF <span class="n-val">0.6</span> vs <span class="n-val">0.8</span>, same <span class="n-val">600 kW</span> load draws <span class="n-val">1000A</span> vs <span class="n-val">750A</span> - 33% more current for same useful work.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Two generators paralleled, PF of one is 0.8 and other is 0.7. What do you do? (Kamath)</strong><br><strong>Ideal Answer:</strong> After normal synchronisation, the generator at <span class="n-val">0.7 PF</span> is supplying proportionally more reactive current (kVAR). To balance: increase the AVR droop setting on the generator carrying more reactive load (0.7 PF machine) to shed kVAR to the other generator. Adjust gradually until both operate at similar PF. Never touch governors - kW balance is separate.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>How do you improve power factor onboard? What is a synchronous condenser? (Vishwanathan)</strong><br><strong>Ideal Answer:</strong> Improvement methods: (1) Static capacitor banks in parallel with inductive loads - supply leading kVAR cancelling lagging kVAR. Fixed-step, cheap, maintenance-free. (2) Synchronous condenser - overexcited synchronous motor running with no mechanical load. Continuously variable leading kVAR output - perfect cancellation. More flexible than capacitors. (3) Avoid lightly-loaded motors. (4) Active front-end VFDs draw near-unity PF.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What are VFD harmonics and how are they mitigated? (Vishwanathan, Kamath)</strong><br><strong>Ideal Answer:</strong> VFD rectifier stages are non-linear loads - generate harmonic currents (mainly 5th, 7th, 11th) injected back into the power system. Effects: transformer overheating, motor vibration, protection relay interference. THD limit per <span class="n-val">IEC/IEEE 80005-1</span>: total <span class="n-val">≤ 5%</span>, single harmonic <span class="n-val">≤ 3%</span>. Mitigation: passive harmonic filters (tuned LC), active harmonic filters, 12-pulse rectifiers, or active front-end (AFE) VFDs.</div></div>

  <!-- ═══ QUICK REVISION ═══ -->
  
  <!-- ═══ T11 GAPS ADDED ═══ -->

  <div class="n-h1" id="s-sync-start">🔄 Synchronous Motor Starting Methods</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Sanjib ask why synchronous motors cannot self-start and what methods are used onboard.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why cannot self-start:</strong> A synchronous motor's rotor must reach synchronous speed before the stator magnetic field can lock onto it. At standstill, the 50/60 Hz alternating stator field passes the rotor poles too quickly - a torque pulse in one direction is immediately followed by an equal reverse pulse → net torque = zero → motor does not start.</div></div>
  <div class="n-h2">Three Starting Methods</div>
  <ul class="n-list">
    <li><strong>Amortisseur / Damper Windings (Most Common):</strong> Short-circuited copper bars embedded in rotor pole faces - same principle as squirrel cage. Motor starts asynchronously as induction motor. At ~95% of Ns: DC excitation applied to field → magnetic lock → rotor pulled into synchronism. During run-up: field winding loaded with resistance to prevent high induced voltages damaging insulation.</li>
    <li><strong>Variable Frequency Drive (VFD) Ramp:</strong> VFD smoothly adjusts output frequency from 0 Hz to rated. Stator field rotates slowly at start → rotor poles can magnetically lock and follow as speed increases. Used for large synchronous propulsion motors.</li>
    <li><strong>Pony Motor:</strong> Small external motor mechanically coupled to shaft - runs main rotor up to near synchronous speed before stator windings and DC field excitation are energised. Less common today.</li>
  </ul>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Synchronous condenser (power factor correction):</strong> Overexcited synchronous motor running at no mechanical load. When overexcited → generates leading kVAR into busbars → cancels lagging kVAR from induction motors → PF improvement. More flexible than fixed capacitor banks - continuously variable by adjusting field current.</div></div>

  <div class="n-h1" id="s-kirchhoff">🧮 Kirchhoff's Laws - Marine Applications</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Basic circuit laws applied to shipboard switchboard and protection analysis:</strong></div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">KCL - Kirchhoff's Current Law</div><div class="card-desc"><strong>Rule:</strong> Sum of all currents entering any node = sum of all currents leaving that node: ΣI_in = ΣI_out (conservation of charge).<br><strong>Ship use:</strong> Main busbar current distribution analysis. Differential protection - comparing current entering vs leaving stator windings to detect internal short circuits.</div></div>
    <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">KVL - Kirchhoff's Voltage Law</div><div class="card-desc"><strong>Rule:</strong> Algebraic sum of all voltages around any closed loop = zero: ΣV = 0 (conservation of energy).<br><strong>Ship use:</strong> Calculate voltage drops along long cable runs to deck machinery. Configure protection relay trip thresholds based on loop voltage distribution.</div></div>
  </div>

<div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 11</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points</th></tr>
    <tr><td>Why kVA not kW</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>Thermal limit (I²R) + insulation limit both depend on kVA = V×I. PF-independent. <span class="n-val">1000 kVA</span> → <span class="n-val">1000 kW</span> at PF 1.0, only <span class="n-val">800 kW</span> at PF 0.8</td></tr>
    <tr><td>Ship's power factor</td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Sanjib, Vishwanathan</td><td><span class="n-val">0.8 lagging</span> at sea | <span class="n-val">0.7–0.75</span> in port | Always lagging (induction motors)</td></tr>
    <tr><td>Effects of low PF</td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Sanjib</td><td>More current → I²R heating → voltage drop → generator hits kVA limit early → fuel waste</td></tr>
    <tr><td>PF correction methods</td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Kamath</td><td>Capacitor banks (fixed, cheap) | Synchronous condenser (variable, flexible) | AFE VFDs</td></tr>
    <tr><td>THD limits</td><td class="hl">⭐⭐⭐⭐ Vishwanathan</td><td><span class="n-val">IEC/IEEE 80005-1</span>: THD ≤ <span class="n-val">5%</span> | Single harmonic ≤ <span class="n-val">3%</span></td></tr>
    <tr><td>VFD harmonics</td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Kamath</td><td>5th, 7th, 11th harmonics | Passive filters, AFE, 12-pulse rectifier</td></tr>
  </table>

    </div>
</div>
</div>
`);

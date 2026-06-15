window.loadNotes("T06", `<div class="view" id="view-notes-t06">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T06')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 06 - Sensors &amp; Instrumentation</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-temp')">RTD vs TC</button>
    <button class="anc-btn" onclick="jumpTo('s-thermowell')">Thermowell</button>
    <button class="anc-btn" onclick="jumpTo('s-loop')">4-20mA &amp; HART</button>
    <button class="anc-btn" onclick="jumpTo('s-intrinsic')">Intrinsic Safety</button>
    <button class="anc-btn" onclick="jumpTo('s-sipart')">SIPART PS2</button>
    <button class="anc-btn" onclick="jumpTo('s-dp')">DP Transmitter</button>
    <button class="anc-btn" onclick="jumpTo('s-flowmeters')">Flowmeters</button>
    <button class="anc-btn" onclick="jumpTo('s-analyzers')">Analyzers</button>
    <button class="anc-btn" onclick="jumpTo('s-proximity')">Proximity Sensors</button>
    <button class="anc-btn" onclick="jumpTo('s-magpickup')">Magnetic Pick-Up</button>
    <button class="anc-btn" onclick="jumpTo('s-modbus')">Modbus Protocol</button>
    <button class="anc-btn" onclick="jumpTo('s-megger')">Megger &amp; PI Test</button>
    <button class="anc-btn" onclick="jumpTo('s-ums')">UMS &amp; Calibration</button>
    <button class="anc-btn" onclick="jumpTo('s-calibration')">Calibration Traceability</button>
    <button class="anc-btn" onclick="jumpTo('s-level')">Level Sensors</button>
    <button class="anc-btn" onclick="jumpTo('s-straingauge')">Strain Gauge &amp; LVDT</button>
    <button class="anc-btn" onclick="jumpTo('s-gasdetect')">Gas Detectors</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-temp">🌡️ RTD vs Thermocouple - Principles, Types &amp; CJC</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>ALL surveyors:</strong> RTD vs Thermocouple is the single most common instrumentation question. Know the full comparison table, all TC types with sensitivities, extension-cable error, and cold junction compensation.</div></div>

  <div class="n-h2">RTD (PT100) - Principle &amp; Resistance Values</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> Pure platinum wire whose electrical resistance increases predictably with temperature (Positive Temperature Coefficient - PTC). The element has exactly <strong>100 Ω at 0 °C</strong>. α (temperature coefficient) = 0.00385 Ω/Ω/°C for industrial PT100. "PT" = Platinum, "100" = resistance in ohms at 0 °C.</div></div>
  <div class="n-formula">R(T) = 100 × [1 + (0.00385 × T)] ≈ 100 + (T × 0.385) Ω<div class="label">PT100 resistance at temperature T (°C) - linear approximation valid for 0 to 850 °C</div></div>
  <table class="n-table">
    <tr><th>Temperature</th><th>Resistance</th><th>Note</th></tr>
    <tr><td>0 °C</td><td class="hl">100.00 Ω</td><td>Reference point</td></tr>
    <tr><td>100 °C</td><td><span class="n-val">138.5 Ω</span></td><td>Standard check point</td></tr>
    <tr><td>200 °C</td><td><span class="n-val">177.0 Ω</span></td><td>LO temp range</td></tr>
    <tr><td>−50 °C</td><td><span class="n-val">80.75 Ω</span></td><td>Refrigeration range</td></tr>
  </table>
  <p class="n-p"><strong>Why platinum?</strong> Chemically inert (survives engine room atmosphere), highly stable and reproducible, nearly linear over −200 to +850 °C, well-characterised international standard (IEC 60751).</p>

  <div class="n-h2">RTD Connection Methods - Lead Resistance Error</div>
  <table class="n-table">
    <tr><th>Method</th><th>Lead Resistance Effect</th><th>Use</th></tr>
    <tr><td>2-wire</td><td class="bad">Both lead resistances added directly to reading - uncorrectable error</td><td>Short leads only / low accuracy</td></tr>
    <tr><td class="hl">3-wire</td><td class="ok">One lead goes to each bridge arm - errors cancel in Wheatstone bridge</td><td><strong>Most common on ships</strong></td></tr>
    <tr><td>4-wire</td><td class="ok">Separate current and voltage leads - lead resistance fully eliminated by Kelvin method</td><td>Laboratory / highest accuracy</td></tr>
  </table>

  <div class="n-h2">Thermocouple - Seebeck Effect &amp; Types</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Seebeck Effect:</strong> When two dissimilar metals are joined at both ends (forming a loop), and the two junctions are at different temperatures, a small EMF (voltage) is generated proportional to the temperature difference. The junction at the measurement point is the <em>hot junction</em>; the junction at the instrument terminals is the <em>cold junction</em>. Output in millivolts, non-linear.</div></div>
  <table class="n-table">
    <tr><th>Type</th><th>Metals</th><th>Range</th><th>Sensitivity</th><th>Ship Use</th></tr>
    <tr><td class="hl">K</td><td>Chromel (+) / Alumel (−)</td><td>−200 to +1260 °C</td><td><span class="n-val">41 µV/°C</span></td><td><strong>Exhaust gas, boiler flue gas - most common on ships</strong></td></tr>
    <tr><td>J</td><td>Iron (+) / Constantan (−)</td><td>−40 to +750 °C</td><td><span class="n-val">52 µV/°C</span></td><td>General industrial, LO temps</td></tr>
    <tr><td>T</td><td>Copper (+) / Constantan (−)</td><td>−200 to +370 °C</td><td>43 µV/°C</td><td>Low temp, refrigeration plants</td></tr>
    <tr><td>E</td><td>Chromel (+) / Constantan (−)</td><td>−200 to +900 °C</td><td><span class="n-val">68 µV/°C</span></td><td>Cryogenic - highest sensitivity of all base metal TCs</td></tr>
    <tr><td>N</td><td>Nicrosil / Nisil</td><td>−200 to +1300 °C</td><td>39 µV/°C</td><td>High-temp, more stable than Type K at high temps</td></tr>
  </table>

  <div class="n-h2">Full RTD vs Thermocouple Comparison</div>
  <table class="n-table">
    <tr><th>Feature</th><th>RTD (PT100)</th><th>Thermocouple (K-type)</th></tr>
    <tr><td>Principle</td><td>Resistance ↑ with temp (PTC)</td><td>Seebeck EMF from dissimilar metals</td></tr>
    <tr><td>Output</td><td>Resistance (Ω), 100 Ω base</td><td>Voltage (mV), ~41 µV/°C</td></tr>
    <tr><td>Accuracy</td><td class="ok">High (±0.1 °C or better)</td><td class="bad">Medium (±1–2 °C)</td></tr>
    <tr><td>Temperature Range</td><td>−200 to +850 °C</td><td class="ok">−200 to +1600 °C</td></tr>
    <tr><td>Linearity</td><td class="ok">Very good, near-linear</td><td class="bad">Non-linear - requires lookup tables</td></tr>
    <tr><td>Self-heating error</td><td class="bad">YES - measuring current through element causes error</td><td class="ok">None - passive EMF generation</td></tr>
    <tr><td>Response time</td><td class="bad">Slower (larger element mass)</td><td class="ok">Faster (fine wire, small bead)</td></tr>
    <tr><td>Cost</td><td class="bad">Higher</td><td class="ok">Lower</td></tr>
    <tr><td>Special wiring</td><td>Standard copper OK</td><td class="bad">Matching extension cable required</td></tr>
    <tr><td>CJC needed?</td><td>No</td><td class="bad">Yes - cold junction compensation essential</td></tr>
    <tr><td>Ship use</td><td>LO temps, CW temps, bearing temps (accurate, moderate range)</td><td>Exhaust gas, boiler flue (high temp range)</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (All):</strong> What is cold junction compensation?<br><strong>Ideal Answer:</strong> Thermocouple output (mV) represents the temperature DIFFERENCE between the hot junction (measurement point) and the cold junction (instrument terminals). If terminal temperature changes (e.g. hot engine room), the reading shifts. CJC: the instrument contains its own temperature sensor (RTD or thermistor) measuring the actual terminal temperature, then electronically ADDS the equivalent mV to give true hot-junction temperature. Without CJC, accuracy holds only if cold junction is at a fixed known temperature - traditionally an ice bath at 0 °C.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Kamath, Sanjib):</strong> Why must thermocouple extension cable be the same material as the TC?<br><strong>Ideal Answer:</strong> The TC works by the Seebeck effect - EMF generated where two dissimilar metals meet. If ordinary copper extension cable is used, a NEW thermocouple junction is created where copper meets the thermocouple wire at the junction box. This parasitic junction generates its own EMF that adds to or subtracts from the measurement signal, causing a temperature error. Matching extension cable (same alloy or compensating cable) has the same Seebeck coefficient as the TC wire, so no additional EMF is generated and accuracy is preserved.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - RTTC Rule:</strong> <strong>R</strong>TD = <strong>R</strong>esistance (high <strong>R</strong>esolution, limited Range). <strong>T</strong>C = <strong>T</strong>hermal EMF (<strong>T</strong>ough high-temp service). "Couple = Cooks hot" - thermocouples serve up to 1600 °C. RTD at bearing = precise. TC at exhaust = wide range.</div></div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-thermowell">🔩 Thermowell - Purpose, Resonance &amp; Failure</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Examiners ask:</strong> Why does a thermowell fail mechanically? What is wake frequency? How do you specify a thermowell correctly? This is a favourite "deep knowledge" question from surveyors testing applied understanding.</div></div>

  <div class="n-h2">Purpose of a Thermowell</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Function:</strong> A thermowell is a closed-end tube inserted into a pipe or vessel that allows a temperature sensor (RTD or TC) to be removed, replaced, or calibrated without shutting down the process or breaking process containment. The sensor is inserted into the thermowell bore and makes thermal contact through the well wall.<br><br><strong>Benefits:</strong> Sensor can be changed under pressure (no process interruption). Protects sensor from flow-induced vibration, corrosion, abrasion, and mechanical damage. Allows sensor calibration by ice-bath or comparison method without disturbing the pipe.</div></div>

  <div class="n-h2">Wake Frequency Resonance - Why Thermowells Fail</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Kármán Vortex Shedding:</strong> When fluid flows past a cylindrical obstacle (the thermowell shank), alternating vortices shed periodically from each side of the cylinder. These vortices create an alternating lateral force on the well at a frequency called the <em>Strouhal frequency</em> (or wake frequency).<br><br><strong>Strouhal Number relationship:</strong></div></div>
  <div class="n-formula">f_s = S × V / d<div class="label">f_s = Strouhal (shedding) frequency (Hz), S = Strouhal number (~0.22 for cylinders), V = flow velocity (m/s), d = thermowell outer diameter (m)</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Resonance Failure:</strong> Every thermowell has a natural frequency (like a tuning fork) determined by its length, diameter, material, and tip mass. If the Strouhal shedding frequency f_s matches or approaches the thermowell's natural frequency f_n, <strong>resonance occurs</strong>. The well vibrates with rapidly increasing amplitude. The result is fatigue fracture at the root (where the well enters the pipe wall). A broken thermowell fragment is then carried downstream through pumps, heat exchangers, and valves - causing catastrophic damage. This is why thermowell specification is safety-critical.<br><br><strong>Rule:</strong> Natural frequency must be at least 20% above the maximum shedding frequency at maximum flow velocity. The ratio f_n / f_s > 1.25 is required (ASME PTC 19.3 TW standard).</div></div>

  <div class="n-h2">Thermowell Design to Prevent Resonance</div>
  <table class="n-table">
    <tr><th>Design Factor</th><th>Effect on Natural Frequency</th><th>Action</th></tr>
    <tr><td>Shorter insertion length</td><td class="ok">f_n increases (stiffer, shorter beam)</td><td>Use minimum required insertion length</td></tr>
    <tr><td>Larger diameter / tapered shank</td><td class="ok">f_n increases, stronger cross-section</td><td>Tapered thermowell preferred over uniform bore</td></tr>
    <tr><td>Reduce flow velocity</td><td class="ok">f_s decreases</td><td>Install in wider section of pipe</td></tr>
    <tr><td>Heavier tip mass</td><td class="bad">f_n decreases - more risk of resonance</td><td>Avoid heavy sensor heads; use lightweight RTD</td></tr>
    <tr><td>Stiffer material (e.g. Inconel vs SS)</td><td class="ok">f_n increases</td><td>High-velocity steam lines: use Inconel wells</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> Why can a thermowell break in service? What is the governing standard?<br><strong>Answer:</strong> Vortex shedding from fluid flow creates an oscillating lateral force on the thermowell shank. If the shedding frequency matches the well's mechanical natural frequency, resonance occurs and the well fails by fatigue fracture at the root. Governed by ASME PTC 19.3 TW. To prevent failure: shorter well, larger/tapered diameter, or reduce flow velocity at installation point. A broken well fragment causes serious downstream damage.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> A thermowell behaves like a flagpole in wind - if the wind frequency matches the pole's natural sway frequency, it snaps. Proper thermowell design = prevent resonance = specify correct length and diameter for the flow conditions.</div></div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-loop">📡 4-20mA Signal, Smart Transmitter &amp; HART Protocol</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-h2">4-20mA Signal Meaning - Live Zero</div>
  <table class="n-table">
    <tr><th>Current</th><th>Meaning</th><th>Example (0–10 bar Transmitter)</th></tr>
    <tr><td class="bad">0 mA</td><td class="bad">FAULT - wire break or transmitter power failure</td><td class="bad">Not a valid reading - alarm generated</td></tr>
    <tr><td class="hl">4 mA</td><td>0% - minimum (Live Zero)</td><td>0 bar</td></tr>
    <tr><td>8 mA</td><td>25% of span</td><td>2.5 bar</td></tr>
    <tr><td>12 mA</td><td>50% of span</td><td>5.0 bar</td></tr>
    <tr><td>16 mA</td><td>75% of span</td><td>7.5 bar</td></tr>
    <tr><td class="hl">20 mA</td><td>100% - full scale</td><td>10.0 bar</td></tr>
    <tr><td class="bad">&gt;20.5 mA</td><td class="bad">Over-range / hardware fault signal</td><td class="bad">Some transmitters signal ~22 mA on fault</td></tr>
  </table>
  <div class="n-formula">mA = 4 + [ (PV − LRV) / (URV − LRV) ] × 16<div class="label">Convert any measured value PV to its 4-20mA equivalent; LRV = Lower Range Value, URV = Upper Range Value</div></div>
  <p class="n-p"><strong>Two-wire (loop-powered) transmitter:</strong> Only 2 wires carry BOTH <span class="n-val">24V DC</span> power supply AND the 4-20mA process signal simultaneously. The transmitter modulates the current drawn from the loop in proportion to the measured variable - no separate power wiring required. Most common arrangement on modern ships.</p>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Why 4 mA and not 0 mA? (The Live Zero concept):</strong> 4 mA is the "live zero" - it proves the entire loop (power supply, wiring, transmitter) is functional. A 0 mA reading unambiguously indicates a broken wire or dead transmitter. If the standard were 0–20 mA, a valid zero measurement and a wire break would both read 0 mA - indistinguishable. The 4 mA offset makes fault detection certain. It also powers the transmitter electronics from the loop current - the electronics need a minimum of ~3–4 mA to operate.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why 20 mA maximum? (Safety rationale):</strong> The human heart can withstand approximately <span class="n-val">30 mA</span> before ventricular fibrillation becomes a risk. The 4–20 mA standard was deliberately set so that even a direct contact with the full-scale signal loop current of 20 mA remains below the cardiac threshold with a safety margin. This makes 4–20 mA inherently safer to handle than higher-current systems, particularly relevant in damp engine room environments.</div></div>

  <div class="n-h2">HART Protocol - Superimposed Digital on Analogue</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Highway Addressable Remote Transducer (HART):</strong> HART superimposes a low-level FSK (Frequency Shift Keying) digital signal onto the existing 4-20mA analogue wire - <span class="n-val">1200 Hz = logic 1</span>, <span class="n-val">2200 Hz = logic 0</span>. The digital signal amplitude is only ±0.5mA, so it does not disturb the analogue reading. Both analogue and digital signals coexist on the same pair of wires simultaneously.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>HART Resistor Requirement:</strong> A minimum resistance of <span class="n-val">250 Ω</span> must be present in the loop (DCS input card or added resistor) to develop sufficient voltage for the HART communicator to read the FSK signal. Voltage developed = I × R = 20mA × 250Ω = <span class="n-val">5V</span> (max). The HART communicator clips across this resistor to communicate with the transmitter. Without 250Ω, the FSK voltage amplitude is too small to decode reliably.</div></div>

  <div class="n-h2">HART - What It Allows (Remote Operations)</div>
  <ul class="n-list">
    <li><strong>Read configuration:</strong> Tag number, LRV/URV range, engineering units, damping time constant.</li>
    <li><strong>Remote calibration:</strong> Adjust zero/span trim from control room - no physical access to transmitter needed.</li>
    <li><strong>Diagnostics:</strong> Read sensor temperature, electronics temperature, device status, error/fault codes.</li>
    <li><strong>Multivariable:</strong> Transmit additional process variables (e.g. temperature + pressure from one transmitter).</li>
    <li><strong>Square root extract:</strong> Configure DP flow transmitter to output √DP directly - eliminates DCS calculation.</li>
  </ul>

  <div class="n-h2">Smart Transmitter - 8 Key Smart Features</div>
  <ol class="n-steps">
    <li><strong>Digital communication</strong> - HART, Foundation Fieldbus, or Profibus for remote configuration and diagnostics.</li>
    <li><strong>Self-diagnostics</strong> - continuously monitors internal electronics and reports faults to DCS automatically.</li>
    <li><strong>Signal characterisation</strong> - linearises non-linear sensors (e.g. square root extraction for DP flow measurement).</li>
    <li><strong>Temperature compensation</strong> - internal ambient temperature sensor corrects for electronics drift due to temperature change.</li>
    <li><strong>Multi-range capability</strong> - LRV and URV are software-configurable via HART; no physical trimmer adjustment or span pot.</li>
    <li><strong>Engineering unit conversion</strong> - reads out directly in bar, kPa, mH₂O, PSI without external scaling at DCS.</li>
    <li><strong>Tag identification</strong> - stores instrument tag number, location, installation date, last calibration date in non-volatile memory.</li>
    <li><strong>Datalogging</strong> - high-end smart transmitters store historical process variable data for trend analysis.</li>
  </ol>
  <table class="n-table">
    <tr><th>Feature</th><th>Conventional (Dumb)</th><th>Smart Transmitter</th></tr>
    <tr><td>Calibration method</td><td class="bad">Screwdriver trimmer pots on electronics board</td><td class="ok">Software via HART communicator - remote, documented</td></tr>
    <tr><td>Range change</td><td class="bad">Fixed - must replace/reorder a different ranged unit</td><td class="ok">Flexible - change LRV/URV configuration via HART</td></tr>
    <tr><td>Diagnostics</td><td class="bad">None - no fault reporting</td><td class="ok">Continuous self-diagnostics, sends fault codes to DCS</td></tr>
    <tr><td>Linearisation</td><td class="bad">External signal conditioner required for √DP</td><td class="ok">Built-in √DP, polynomial linearisation</td></tr>
  </table>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-intrinsic">⚡ Intrinsic Safety - Zener Barrier vs Galvanic Isolator</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Exam-relevant:</strong> Any time instruments are installed in hazardous areas (cargo pump rooms, gas compressor spaces, paint stores), intrinsic safety protection is required. Surveyors ask how Zener barriers and galvanic isolators work and differ.</div></div>

  <div class="n-h2">What is Intrinsic Safety (IS)?</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> An intrinsically safe circuit limits the electrical energy (voltage and current) available in a hazardous area to levels so low that - even under fault conditions (open circuit, short circuit, component failure) - ignition of a flammable atmosphere is impossible. IS protection is achieved by placing a safety interface device (Zener barrier or galvanic isolator) between the safe area (control room) and the hazardous area (field instrument).<br><br>International standard: <strong>IEC 60079-11</strong> (equipment for explosive atmospheres - intrinsic safety "i"). Zone 0, 1, 2 classification determines which IS level (ia, ib, ic) is required.</div></div>

  <div class="n-h2">Zener Barrier - Working Principle</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Construction:</strong> Series resistors limit current. Back-to-back Zener diodes clamp voltage to a safe level (typically 5.6V to 28V). A fast-blow fuse protects against Zener failure. All three elements are in a simple passive circuit - no power supply needed.<br><br><strong>How it limits energy in hazardous area:</strong><br>• Series resistor (R) limits maximum fault current: I_max = V_supply / R<br>• Zener diodes clamp voltage: V_max = Zener voltage (e.g. 28V)<br>• Therefore maximum power into hazardous area = V × I stays below ignition threshold.<br><br><strong>Critical requirement:</strong> The barrier must be connected to a certified clean earth (intrinsically safe earth) with conductor resistance &lt;<span class="n-val">1 Ω</span>. If earth is lost, the Zener clamp is ineffective and the full supply voltage can appear in the hazardous area.</div></div>

  <div class="n-h2">Galvanic Isolator - Working Principle</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Construction:</strong> An active device using a combination of transformer (for signal transfer) and optocoupler (for galvanic isolation) - no direct electrical connection between safe and hazardous area circuits. Requires a 24V DC power supply on the safe side. Many galvanic isolators include signal conditioning (amplification, 4-20mA re-generation, HART pass-through).<br><br><strong>How it protects:</strong> The galvanic isolation barrier provides complete electrical separation. Even if the safe-side voltage spikes to dangerous levels (e.g. lightning strike on control room, wiring error), no current path exists to the hazardous area - the transformer core and optocoupler photon link carry only signal energy, not power faults.</div></div>

  <div class="n-h2">Zener Barrier vs Galvanic Isolator - Comparison</div>
  <table class="n-table">
    <tr><th>Feature</th><th>Zener Barrier</th><th>Galvanic Isolator</th></tr>
    <tr><td>Construction</td><td>Passive (resistors + Zener diodes + fuse)</td><td>Active (transformer/optocoupler + power supply)</td></tr>
    <tr><td>Power needed</td><td class="ok">No - passive, no supply needed</td><td class="bad">Yes - 24V DC external supply required</td></tr>
    <tr><td>Earth requirement</td><td class="bad">MUST have &lt;1Ω IS earth - critical safety requirement</td><td class="ok">No IS earth required - full galvanic isolation</td></tr>
    <tr><td>Signal isolation</td><td class="bad">Not isolated - earth is common reference</td><td class="ok">Full galvanic isolation - no common earth</td></tr>
    <tr><td>HART compatibility</td><td>Compatible (passive, transparent)</td><td class="ok">Most models pass HART bidirectionally</td></tr>
    <tr><td>Cost</td><td class="ok">Cheap - simple passive device</td><td class="bad">More expensive - active electronics</td></tr>
    <tr><td>Signal quality</td><td class="bad">Slightly loads the loop; limits cable length</td><td class="ok">Active re-generation - restores signal integrity over long runs</td></tr>
    <tr><td>Preferred when</td><td>Simple retrofit, cost-sensitive, IS earth available</td><td>Multi-drop systems, no IS earth available, new installations</td></tr>
    <tr><td>Ship use examples</td><td>Older retrofit to cargo pump room level transmitters</td><td>New IMACS/IAS field instruments in hazardous zones</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is a Zener barrier and why is the earth connection critical?<br><strong>Answer:</strong> A Zener barrier is a passive IS interface device using series resistors (to limit current) and back-to-back Zener diodes (to clamp voltage) to restrict energy in a hazardous area below ignition levels. The earth connection is critical because the Zener diodes conduct excess voltage to earth. If the IS earth is missing or its resistance exceeds 1Ω, the Zener cannot clamp properly - the full supply voltage can pass to the hazardous area, defeating the IS protection and creating an ignition risk.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> <strong>Zener = Cheap but earthed</strong> (needs that &lt;1Ω clean earth or fails). <strong>Galvanic = Isolated</strong> (galvanic = disconnected, like sacrificial anode logic - no common path at all). Galvanic isolators are the modern preference for new installations.</div></div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-sipart">🎛️ SIPART PS2 Positioner - Function &amp; Calibration</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>What is a positioner?</strong> A positioner is a feedback controller that ensures a valve actuator moves to the exact position demanded by the 4-20mA signal from the DCS/controller. Without a positioner, valve friction, hysteresis, and varying supply air pressure cause the actual valve position to deviate from the demanded setpoint. The SIPART PS2 (Siemens) is the most common electro-pneumatic positioner on modern ships.<br><br><strong>Operation loop:</strong> 4-20mA setpoint received → SIPART converts to demanded position (0–100%) → internal potentiometer/NAMUR sensor measures actual stem position → position error calculated → piezoelectric actuator adjusts instrument air to actuator cylinder until position error = zero.</div></div>

  <div class="n-h2">SIPART PS2 Self-Calibration - Run Sequence</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal asks this in detail. Know all 5 runs and what each determines.</strong></div></div>
  <ol class="n-steps">
    <li><strong>Run 1 - Initialisation:</strong> System checks, reads parameter settings, prepares for auto-cal sequence.</li>
    <li><strong>Run 2 - Closed (CLOSED stop detection):</strong> SIPART drives valve fully CLOSED, detects mechanical end-stop, records closed position as 0% (4mA).</li>
    <li><strong>Run 3 - Open (OPEN stop detection):</strong> SIPART drives valve fully OPEN, detects mechanical end-stop, records open position as 100% (20mA). Total travel range now known.</li>
    <li><strong>Run 4 - Travel time measurement:</strong> Valve driven open-to-close and close-to-open to measure actual stroking time. Used for diagnostics and positioning speed calculations.</li>
    <li><strong>Run 5 - Friction characterisation:</strong> SIPART performs multiple partial strokes across the travel range to characterise static friction (stiction) and dynamic friction. Friction compensation map stored in memory. Enables accurate positioning to within ±0.5% without hunting.</li>
  </ol>
  <p class="n-p">After Run 5, SIPART displays <span class="n-val">'END'</span> or <span class="n-val">'FINISH'</span>. The positioner now knows: closed position, open position, total travel, stroking time, and full friction map. It returns to automatic mode and responds accurately to the 4-20mA setpoint.</p>

  <div class="n-h2">Split Range Operation</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Split range:</strong> When TWO valves are controlled from ONE 4-20mA output by dividing the signal range between them. Common on temperature/pressure control where one valve handles heating and the other handles cooling, or where two differently-sized valves provide wide-range control (one for fine control, one for coarse).<br><br><strong>Example:</strong> Valve A opens 4-12mA (first half of range). Valve B opens 12-20mA (second half). Each valve's positioner is individually configured to its sub-range. SIPART PS2 has a built-in split range parameter for this - positioner configured to treat 4-12mA as its 0-100% travel.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal):</strong> When would you recalibrate a SIPART PS2?<br><strong>Ideal Answer:</strong> After valve packing replacement (changes friction), after actuator diaphragm or spring replacement (changes travel force), after complete valve overhaul, on new valve installation, if position indication is erratic or valve hunts (oscillates around setpoint - friction mis-characterisation), after instrument air supply pressure change, or after any mechanical work on the valve assembly. The Run 1-5 auto-calibration sequence corrects all mechanical changes automatically - no manual adjustment of potentiometers or screws.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Prerequisites for calibration:</strong> Instrument air connected at correct pressure (typically 4–7 bar), 4-20mA supply connected to SIPART terminals, valve mechanically free to move through full travel (no mechanical obstruction, packing not over-tightened), and process line depressurised or valve in bypass if safe to move valve.</div></div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-dp">📐 DP Transmitter - Capsule, Manifold &amp; Zero Suppression</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-h2">DP Transmitter - How It Works</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Construction:</strong> Two pressure ports - HP (High Pressure) and LP (Low Pressure) - each connected to one side of a sealed DP capsule. The capsule contains a silicon or metal diaphragm with strain gauges deposited on it (Wheatstone bridge). Applied pressure differential deflects the diaphragm, changing strain gauge resistances → bridge output mV proportional to DP → signal conditioned to 4-20mA. Range: from a few mbar (low-range for orifice flow) up to hundreds of bar.</div></div>

  <div class="n-h2">Formulas</div>
  <div class="n-formula">Q = K × √(ΔP)<div class="label">Volumetric flow through orifice plate; K = orifice flow coefficient; ΔP in Pa or mbar</div></div>
  <div class="n-formula">h = ΔP / (ρ × g)<div class="label">Liquid level from hydrostatic pressure; ρ = fluid density (kg/m³), g = 9.81 m/s²</div></div>

  <div class="n-h2">3-Valve Manifold - Purpose and Operation</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>The 3-valve manifold</strong> (two isolation valves + one equalising valve) is fitted between the process impulse lines and the DP transmitter. Its purposes:<br><br><strong>1. Isolation:</strong> HP and LP isolation valves allow transmitter to be isolated from process for removal or calibration without shutting down the process.<br><br><strong>2. Equalisation:</strong> The equalising valve connects HP and LP ports of the transmitter directly - equalises both sides to the same pressure - so transmitter reads zero DP. Used for zero check and for safe pressurisation before opening isolation valves.<br><br><strong>Correct procedure to connect transmitter to process (startup sequence):</strong></div></div>
  <ol class="n-steps">
    <li>Open LP isolation valve first (or open equalising valve first to equalise pressure on both sides of DP capsule - prevents over-range)</li>
    <li>Open HP isolation valve</li>
    <li>Close equalising valve - transmitter now reads process DP</li>
    <li>Check zero - should read 4mA with no flow (for flow measurement)</li>
  </ol>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Never</strong> open the HP isolation valve with equalising valve closed and LP valve closed - full process pressure applied to only one side of the DP capsule causes over-range damage (burst diaphragm). Always equalise before opening to process.</div></div>

  <div class="n-h2">Wet Leg and Zero Suppression</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Zero Suppression (Wet Leg):</strong> On level measurement in closed tanks or boiler drums, the HP connecting impulse leg from the tap at the bottom of the tank fills with the process liquid (wet leg) - this creates a constant hydrostatic head pressure on the HP side even when the tank is empty. The transmitter reads HIGH at empty. A <strong>zero trim</strong> is applied during commissioning to suppress this constant offset so that empty tank = 4mA and full tank = 20mA.<br><br>On open tanks or DP flow measurement, a <strong>dry leg</strong> is used - HP and LP impulse lines contain only gas/vapour, no static liquid head. Simpler to calibrate but care needed for condensation blocking lines.</div></div>

  <div class="n-h2">Pressure Mismatch - Full Cause List</div>
  <p class="n-p"><em>Classic surveyor scenario: "Local pressure gauge shows 3.0 bar, but DP transmitter on the same line shows 2.5 bar - what are the possible causes?"</em></p>
  <ol class="n-steps">
    <li><strong>Height difference</strong> - Transmitter mounted at a different elevation than the gauge creates a hydrostatic pressure head difference in the connecting pipe (ρgh).</li>
    <li><strong>Transmitter calibration error</strong> - Transmitter zero or span incorrectly set (off-calibration).</li>
    <li><strong>Gauge calibration error</strong> - Local bourdon tube gauge not calibrated or spring fatigued.</li>
    <li><strong>Process pulsation</strong> - Pulsating flow (reciprocating pump) causes gauge needle to average differently from electronic signal which uses damping.</li>
    <li><strong>Partially blocked impulse line</strong> - Sludge, wax, or corrosion deposits restrict HP impulse port → transmitter reads low.</li>
    <li><strong>Wet leg not balanced</strong> - Reference (LP) leg liquid level has changed (evaporation or partial drain) → constant offset error added.</li>
  </ol>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> Can a DP transmitter be used as a gauge pressure switch with only one port connected?<br><strong>Answer:</strong> Yes - leave the LP port open to atmosphere (or vent/blank it). The transmitter then measures gauge pressure (process pressure referenced to atmospheric). HP side = process line, LP side = atmosphere = reference. Common use: filter DP monitoring (HP to inlet, LP to outlet - rising DP indicates blockage).</div></div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-flowmeters">🌀 Flowmeters - Coriolis, Turbine, Vortex &amp; Orifice</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Coriolis and turbine/vortex comparison are frequently asked at MMD instrumentation orals. Coriolis is the only flowmeter that directly measures MASS flow without knowing density.</strong></div></div>

  <div class="n-h2">Coriolis Flowmeter - Principle</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>The Coriolis Effect:</strong> When a mass moves within a rotating frame of reference, it experiences a force perpendicular to its velocity and the axis of rotation. A Coriolis meter exploits this by flowing fluid through a pair of vibrating tubes.<br><br><strong>Construction:</strong> One or two curved (U-shaped or straight) tubes mounted inside a sensor housing. An electromagnetic driver vibrates the tubes at their natural resonant frequency (typically 100–300 Hz). Pick-up coils at inlet and outlet ends measure the instantaneous position of each tube.<br><br><strong>How it measures mass flow:</strong> With zero flow, both tubes vibrate in phase - inlet and outlet pick-up coils see identical motion simultaneously. With flow, the fluid moving through the vibrating tubes experiences a Coriolis force that twists the tubes slightly out of phase - the outlet tube leads the inlet tube. The phase difference (time lag) between inlet and outlet signals is directly proportional to the mass flow rate. Critically, this measurement is <strong>independent of fluid density, viscosity, temperature, or pressure</strong>.<br><br><strong>How it measures density:</strong> The resonant frequency of the vibrating tube changes with the mass of fluid inside it. Denser fluid = lower resonant frequency. By measuring the oscillation frequency, the transmitter calculates fluid density accurately.</div></div>

  <div class="n-formula">ṁ = K_cf × Δt<div class="label">Mass flow rate ṁ (kg/s) directly proportional to phase time difference Δt (seconds) between inlet/outlet signals; K_cf = meter calibration factor</div></div>
  <div class="n-formula">ρ = K_ρ / f²<div class="label">Fluid density ρ (kg/m³) inversely proportional to square of tube resonant frequency f (Hz); K_ρ = density calibration constant</div></div>

  <div class="n-h2">Coriolis Flowmeter - Key Advantages &amp; Ship Applications</div>
  <table class="n-table">
    <tr><th>Feature</th><th>Detail</th></tr>
    <tr><td>Direct mass flow measurement</td><td class="ok">No density correction needed - truly measures kg/s, not m³/s</td></tr>
    <tr><td>Simultaneous density measurement</td><td class="ok">Calculates fluid density from tube resonant frequency</td></tr>
    <tr><td>No moving parts in flow path</td><td class="ok">No wear, no maintenance, highly reliable</td></tr>
    <tr><td>Bidirectional measurement</td><td class="ok">Measures flow in both directions - useful for bunkering reconciliation</td></tr>
    <tr><td>High accuracy</td><td class="ok">±0.1–0.2% of reading - highest accuracy of all flowmeter types</td></tr>
    <tr><td>Sensitivity to vibration</td><td class="bad">External mechanical vibration can interfere with tube phase measurement</td></tr>
    <tr><td>Gas entrained in liquid</td><td class="bad">Two-phase flow (bubbles in fuel) causes errors and tube damping</td></tr>
    <tr><td>Cost</td><td class="bad">Most expensive flowmeter type</td></tr>
  </table>
  <p class="n-p"><strong>Ship Applications:</strong> Bunkering flow measurement (custody transfer - mass of fuel oil received), HFO mass consumption monitoring (engine performance calculation requires mass not volume), chemical injection skids (accurate dosing by mass), cargo loading on chemical tankers.</p>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Coriolis:</strong> Think of a spinning sprinkler - water flying outward twists the arms (Coriolis force on rotating mass). In the meter, flowing fluid through vibrating tubes creates a twist proportional to mass flow. <strong>Phase lag = Mass flow. Frequency shift = Density.</strong></div></div>

  <div class="n-h2">Turbine Flowmeter</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> A multi-bladed rotor (turbine) is mounted on bearings in the flow stream. The flowing fluid imparts a torque proportional to velocity, causing the turbine to spin. The rotational speed is measured by a magnetic or inductive pick-up counting the blade passing frequency. Pulse output: frequency proportional to volumetric flow rate.<br><br><strong>Flow range:</strong> Accurate over about 10:1 turndown ratio. Best accuracy at mid-range (10:1 to 5:1).<br><br><strong>Limitation:</strong> Measures VOLUMETRIC flow only (m³/s). To get mass flow, density must be known. Has moving parts (bearings, rotor) - subject to wear. Not suitable for dirty or viscous fluids (clogs bearings). Requires straight pipe runs (10× D upstream, 5× D downstream) for accuracy.</div></div>

  <div class="n-h2">Vortex Flowmeter</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> A bluff body (shedder bar) is inserted across the flow pipe. The flowing fluid sheds Kármán vortices alternately from each side of the bluff body, exactly as described in thermowell resonance (above). The vortex shedding frequency is proportional to the flow velocity - this is the von Kármán relationship. A piezoelectric sensor or capacitive sensor detects the pressure pulses of each vortex and counts them.<br><br><strong>Key property:</strong> The Strouhal number (ratio of shedding frequency × diameter to velocity) is constant for a given geometry. Therefore frequency ∝ velocity ∝ volumetric flow rate. Output: pulse frequency proportional to volumetric flow.<br><br><strong>Advantages over turbine:</strong> No moving parts (except the sensor itself - no bearings, no rotor), better suited to steam, gases, high-temperature fluids. Good for steam flow measurement in engine rooms.</div></div>

  <div class="n-h2">Turbine vs Vortex vs Coriolis - Comparison</div>
  <table class="n-table">
    <tr><th>Feature</th><th>Turbine</th><th>Vortex</th><th>Coriolis</th></tr>
    <tr><td>Measurement principle</td><td>Mechanical rotation count</td><td>Vortex shedding frequency</td><td>Coriolis phase shift</td></tr>
    <tr><td>Output type</td><td>Volumetric (m³/s)</td><td>Volumetric (m³/s)</td><td class="ok">Mass flow (kg/s)</td></tr>
    <tr><td>Moving parts in flow</td><td class="bad">Yes (rotor + bearings)</td><td class="ok">None</td><td class="ok">None</td></tr>
    <tr><td>Suitable for steam</td><td class="bad">No - high temp, wet steam damages bearings</td><td class="ok">Yes - common steam meter</td><td class="bad">Not typical</td></tr>
    <tr><td>Suitable for dirty fluid</td><td class="bad">No - clogs bearings</td><td>Limited - shedder can scale</td><td class="ok">Usually yes</td></tr>
    <tr><td>Viscosity effect</td><td class="bad">High - viscous fluids brake turbine below accurate range</td><td>Moderate</td><td class="ok">Independent</td></tr>
    <tr><td>Density measurement</td><td class="bad">No</td><td class="bad">No</td><td class="ok">Yes - simultaneous</td></tr>
    <tr><td>Accuracy</td><td>±0.5–1.0%</td><td>±1.0–1.5%</td><td class="ok">±0.1–0.2%</td></tr>
    <tr><td>Relative cost</td><td>Low</td><td>Medium</td><td class="bad">High</td></tr>
    <tr><td>Ship applications</td><td>Lube oil monitoring, clean fuel lines</td><td>Steam flow, boiler water, compressed air</td><td>Bunkering, HFO consumption, chemical dosing</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> Why is a Coriolis meter preferred for bunkering? Why not a turbine meter?<br><strong>Answer:</strong> Bunkering involves custody transfer - the mass of fuel received must be accurately measured for payment and consumption records. Coriolis directly measures mass flow regardless of fuel density (which varies between bunker grades and temperatures). A turbine meter only measures volume - it requires a density correction which introduces additional uncertainty. Coriolis also measures bidirectionally, accounting for any backflow. For financial and legal accuracy in custody transfer, Coriolis is the accepted standard.</div></div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-analyzers">🎚️ Analysers - O₂, Salinometer, Viscotherm &amp; Exhaust Gas</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Sanjib, Vishwanathan, Deswal ask these across every oral. Exhaust gas analyser (SOx, NOx, CO) is increasingly asked due to MARPOL/TIER III compliance.</strong></div></div>

  <div class="n-h2">Oxygen Analyser - 4 Types</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Vishwanathan, Sanjib ask: "How does the paramagnetic oxygen analyser work? What is the magnetic-wind principle?"</strong> Know both paramagnetic sub-types.</div></div>
  <table class="n-table">
    <tr><th>Type</th><th>Principle</th><th>Ship Use</th></tr>
    <tr><td><strong>Paramagnetic - Dumbbell (Suspension) Type</strong></td><td>O₂ is strongly paramagnetic (attracted to magnetic fields). A suspension of two nitrogen-filled glass spheres (dumbbell) sits in a strong non-uniform magnetic field. O₂ in the sample displaces the nitrogen-filled spheres - the dumbbell rotates in proportion to O₂ concentration. Rotation is measured optically or by restoring torque feedback.</td><td>Boiler combustion control - most accurate, laboratory-grade, used for precise combustion optimisation</td></tr>
    <tr><td><strong>Paramagnetic - Thermomagnetic ("Magnetic Wind") Type</strong></td><td>Two chambers connected by a horizontal tube. A strong permanent magnet creates a high-field zone across the tube junction. Two platinum resistance wires are wound along the tube - one inside the magnetic field, one outside. Sample O₂ is drawn into the high-field zone by its paramagnetism. The Pt wire heats the O₂; when heated, O₂ loses paramagnetism (Curie's Law) and is expelled. Cooler, strongly-paramagnetic fresh O₂ continuously displaces it - creating a convective <strong>"magnetic wind"</strong> flow in the tube. This flow cools the Pt wire inside the field, changing its resistance and unbalancing the Wheatstone bridge. Bridge imbalance is proportional to O₂ concentration. No moving parts in the detection zone.</td><td>Boiler/engine flue gas O₂ - most common industrial type asked by AIIMS and surveyors; robust, no moving parts</td></tr>
    <tr><td><strong>Electrochemical (Galvanic cell)</strong></td><td>O₂ diffuses through a gas-permeable membrane, then is reduced at a gold/platinum cathode. A zinc or lead anode is simultaneously oxidised. The current produced is proportional to O₂ partial pressure. Cell is <em>consumed over time</em> - typical life 1–3 years.</td><td>Portable enclosed space entry checks (personal O₂ meter)</td></tr>
    <tr><td><strong>Zirconia (ZrO₂)</strong></td><td>Zirconia ceramic cell heated to 650–900 °C acts as an O₂ ion conductor. EMF (Nernst voltage) is generated proportional to the logarithm of the O₂ concentration ratio between the measured flue gas and a reference air pocket. In-situ, no sample conditioning needed.</td><td>Direct high-temperature exhaust O₂ measurement in boiler/main engine flue</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Calibration - Oxygen Analyser:</strong> Zero = pass pure nitrogen gas (0% O₂), adjust zero trim to 0.0%. Span = pass certified span gas or clean atmospheric air (<span class="n-val">20.9% O₂</span>), adjust span trim to match. Record gas certificate reference numbers for traceability.</div></div>

  <div class="n-h2">Exhaust Gas Analyser - SOx, NOx, CO (MARPOL Monitoring)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>MARPOL Annex VI</strong> requires continuous monitoring of exhaust emissions from main engines, auxiliary engines, and boilers. Key parameters monitored:<br><br>
  <strong>• CO₂</strong> (carbon dioxide) - measured by <strong>NDIR (Non-Dispersive Infrared)</strong>. CO₂ strongly absorbs IR at 4.26 µm wavelength. Detector measures residual IR after passage through sample gas - CO₂ concentration proportional to IR absorption. Used for combustion efficiency calculations.<br><br>
  <strong>• CO</strong> (carbon monoxide) - also <strong>NDIR</strong>, different wavelength (4.67 µm). Elevated CO indicates incomplete combustion - too rich mixture, injector fault, or insufficient air.<br><br>
  <strong>• SOx</strong> (sulphur oxides, SO₂) - measured by <strong>UV fluorescence or electrochemical</strong>. MARPOL Annex VI Tier III: SOx limit 0.5% global (0.1% in ECAs). Scrubber bypass alarm triggers if SOx exceeds ECA limit.<br><br>
  <strong>• NOx</strong> (nitrogen oxides) - measured by <strong>chemiluminescence detector (CLD)</strong>. NO reacts with O₃ to produce excited NO₂ which emits light - photomultiplier detects intensity proportional to NOx concentration. MARPOL Tier III: NOx ≤ 3.4 g/kWh for slow-speed engines (ECA waters).<br><br>
  <strong>• Opacity / Smoke</strong> - measured by <strong>opacity meter (photocell)</strong> - measures light obscuration across exhaust stack.</div></div>
  <table class="n-table">
    <tr><th>Gas</th><th>Measurement Principle</th><th>Regulation</th><th>Action on Alarm</th></tr>
    <tr><td>CO₂</td><td>NDIR (4.26 µm IR absorption)</td><td>Used for EEXI/CII calculation</td><td>Combustion adjustment</td></tr>
    <tr><td>CO</td><td>NDIR (4.67 µm IR absorption)</td><td>Combustion quality indicator</td><td>Adjust air/fuel ratio</td></tr>
    <tr><td>SOx (SO₂)</td><td>UV fluorescence / electrochemical</td><td>MARPOL Annex VI: 0.5% global, 0.1% ECA</td><td>Fuel switch to low-sulphur or scrubber mode</td></tr>
    <tr><td>NOx</td><td>Chemiluminescence (CLD)</td><td>Tier III: ≤3.4 g/kWh in ECA</td><td>EGR/SCR activation</td></tr>
    <tr><td>O₂ (flue)</td><td>Zirconia cell or paramagnetic</td><td>Combustion optimisation</td><td>Adjust combustion air</td></tr>
  </table>

  <div class="n-h2">Salinometer</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> Salt content measured by proportional electrical conductivity. <strong>AC voltage</strong> applied between submerged electrodes (AC is mandatory to prevent electrode polarisation errors - DC would cause ion migration and electrode coating). Dissolved Na⁺ and Cl⁻ ions carry electric current - higher salt concentration = higher conductivity = higher output signal. Maintains boiler feed water below <span class="n-val">5–15 ppm</span> salinity. If salinity exceeds the setpoint, the dump solenoid valve automatically diverts the distillate to bilge rather than contaminating the freshwater tanks or boiler feed system.</div></div>

  <div class="n-h2">Viscotherm HFO Controller</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Purpose:</strong> Maintains HFO at ideal injection viscosity (<span class="n-val">10–15 cSt</span>) at engine fuel injectors regardless of fuel grade or ambient temperature. <strong>Why viscosity and not temperature?</strong> Different fuel grades (IFO 180, IFO 380, VLSFO) have different viscosity-temperature (V-T) curves. Direct viscosity measurement achieves the correct injection viscosity for <em>any</em> grade - temperature-only control would require a setpoint change on every fuel switch.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Primary Type - Differential Pressure (Capillary / Gear-Pump) Type (AIIMS asks this type):</strong><br>
  A small gear pump driven at a <strong>constant speed of 40–42 RPM</strong> draws a continuous sample of HFO at a constant volumetric flow rate (Q) through a <strong>narrow capillary tube</strong>. By the Hagen-Poiseuille law for laminar flow, the pressure drop across the capillary is directly proportional to viscosity:<br>
  <code style="background:var(--surface3);padding:2px 8px;border-radius:4px;font-size:0.9em">μ = A × ΔP &nbsp;&nbsp; where A = πD⁴ / (128 × Q × L)</code><br>
  The differential pressure (ΔP) across the capillary is measured by a <strong>DP transmitter → 4–20 mA signal → PI controller (ECR)</strong>. The controller output (mV) is converted by an <strong>I/P converter</strong> (instrument air: 3–15 psi) to proportionally open or close the <strong>steam control valve</strong> on the HFO heater.<br><br>
  <strong>3-Step Calibration Procedure:</strong><br>
  1. <strong>Air Venting:</strong> Purge all trapped air from the capillary tube and DP transmitter - air compresses and falsifies the ΔP reading.<br>
  2. <strong>Zeroing:</strong> With pump running on reference oil, adjust zero trimmer so the displayed viscosity matches the maker's temperature-viscosity chart value.<br>
  3. <strong>Spanning:</strong> Adjust the span potentiometer so the transmitter mA output follows: <code style="background:var(--surface3);padding:2px 8px;border-radius:4px;font-size:0.9em">mV output = viscosity (cSt) × 1.8</code> - e.g. at 15 cSt → 27 mV. Verified against certified reference oil.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Secondary Type - Rotational (Spindle) Type:</strong> A spindle rotates at constant speed through the flowing HFO sample. Higher viscosity = more drag torque = higher motor current. Motor current is the PV. Controller adjusts the steam valve to maintain setpoint (12 cSt). This type exists on older vessels and is simpler to maintain but less accurate at low viscosity than the capillary type.</div></div>

  <div class="n-h2">Galvanometer</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working Principle (Moving Coil):</strong> A rectangular coil of fine wire is suspended on a pivot in the field of a permanent magnet. Current through the coil produces a force (F = BIL) causing the coil to rotate against a restoring spring. Deflection is proportional to current - very sensitive (microamperes to nanoamperes full scale).<br><strong>Ship Applications:</strong> Earth leakage monitoring (insulation monitoring relay), battery internal resistance measurement, Wheatstone bridge null-point detector, thermocouple circuit checks.</div></div>

  <div class="n-h2">Explosion Meter (Combustible Gas Indicator) - Pellistor/Catalytic Bead</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle (Catalytic bead / Pellistor):</strong> Air-gas mixture drawn over a heated catalytic platinum bead. Combustible gas oxidises on the catalyst surface, releasing heat → bead temperature rises → bead resistance rises → Wheatstone bridge goes off-null → reading in % LEL (Lower Explosive Limit).<br><strong>Scale:</strong> 0–100% LEL. <strong>NEVER read beyond 100% LEL</strong> - meter cannot be accurate in explosive or overly rich mixtures.<br><strong>Safe entry limits:</strong> Space must be below <span class="n-val">10% LEL</span> for entry with ignition sources. Below <span class="n-val">1% LEL</span> for hot work.<br><strong>Annual calibration:</strong> With certified span gas (50% LEL n-pentane or methane). Bump test before each use.</div></div>

  <div class="n-h2">Oxygen Meter - Checks Before Use</div>
  <ul class="n-list">
    <li><strong>Bump test:</strong> Expose sensor to enriched O₂ or depleted (inert gas) atmosphere - reading must respond correctly. Confirms sensor is alive and responding.</li>
    <li><strong>Fresh air check:</strong> Reading must show <span class="n-val">20.9% O₂</span> in a clean atmosphere before use.</li>
    <li><strong>Zero check:</strong> Cover sensor - reading should hold steady (if drops immediately, cell is dead or membrane damaged).</li>
    <li><strong>Sensor life:</strong> Electrochemical cell is consumed in use. Typical life 1–3 years. Replace entire cell, not just sensor tip.</li>
    <li><strong>Calibration:</strong> Zero = certified nitrogen (0% O₂). Span = clean atmospheric air (20.9%) or certified span gas.</li>
  </ul>
  <table class="n-table">
    <tr><th>Instrument</th><th>Principle</th><th>Scale</th><th>Safe Limit for Entry</th></tr>
    <tr><td>Oxygen Meter</td><td>Galvanic electrochemical cell (consumed)</td><td>0–25% O₂</td><td><span class="n-val">19.5% – 23.5%</span> O₂</td></tr>
    <tr><td>Explosimeter</td><td>Catalytic bead (Pellistor)</td><td>0–100% LEL</td><td>Below <span class="n-val">10% LEL</span></td></tr>
    <tr><td>Toxic Gas (H₂S)</td><td>Electrochemical amperometric cell</td><td>0–100 ppm</td><td>Below <span class="n-val">10 ppm</span> (TLV-TWA)</td></tr>
  </table>

  <div class="n-h2">Flame Eye (Flame Detector / Photocell)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Type:</strong> UV or UV/IR photocell fitted on the boiler or incinerator refractory viewing port.<br><strong>Working:</strong> UV radiation from the flame strikes the photocell → generates a small current → amplified → relay signals "flame present". No UV signal → relay drops out → flame failure trip activates → fuel solenoid de-energised within seconds.<br><strong>If flame eye fails or is removed:</strong> Controller sees "no flame" continuously. In auto mode → immediate fuel shut-off (fail-safe). In manual mode, control system may inhibit firing or lock out the fuel valve. A faulty photocell can cause nuisance shutdowns if the UV-sensitive window becomes sooty - clean the window regularly.</div></div>

  <div class="n-h2">OWS - Oil Discharge Monitoring (Photocell Sensor)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>MARPOL Annex I requirement:</strong> Bilge water discharged overboard must be below <span class="n-val">15 ppm</span> oil content (outside special areas).<br><strong>OWS Sensor Working:</strong> Treated bilge water passes through a measurement cell where a light beam (LED or laser) shines across the flow. A photodetector on the opposite side measures light transmission. Clean water = maximum light transmission = low ppm reading. Oil droplets scatter and absorb light = less light reaches detector = higher ppm reading. If reading exceeds 15 ppm, the overboard discharge valve closes automatically and the pump diverts back to bilge tank. Annual calibration with certified oil-in-water emulsion standard solution.</div></div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-proximity">🎯 Proximity Sensors - Inductive, Capacitive &amp; Others</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Praveen Nair and Vishwanathan test eddy current physics and sensor application variances in detail.</strong></div></div>

  <div class="n-h2">Inductive Proximity Sensor - Eddy Current Principle</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working:</strong> An internal oscillator drives a coil at high frequency (<span class="n-val">10 kHz – 1 MHz</span>), projecting a high-frequency alternating electromagnetic field ahead of the sensor face. When a metallic target enters this field, eddy currents are induced in the metal surface - these eddy currents draw energy from the oscillator (eddy current damping). The oscillator amplitude drops → detection circuit triggers → output switches. <strong>Metallic targets only.</strong><br><br><strong>Sensing range correction factor for non-ferrous metals:</strong> Ferrous steel = 100% rated range. Aluminium ≈ 60%. Copper ≈ 40% (higher eddy current conductivity means different interaction).<br><br><strong>Advantages:</strong> Completely unaffected by oil film, water, dust, or contamination on sensor face. No moving parts. No physical contact with target. Response time &lt;1 ms.<br><br><strong>Ship uses:</strong> Shaft RPM sensing (reluctor ring on crankshaft), valve position (open/closed limit detection), crankshaft TDC detection for timing reference, gear tooth counting.</div></div>

  <div class="n-h2">Sensor Comparison Table</div>
  <table class="n-table">
    <tr><th>Type</th><th>Principle</th><th>Target Materials</th><th>Ship Application</th></tr>
    <tr><td><strong>Inductive</strong></td><td>Eddy current damping of EM oscillator field</td><td class="bad">Metals ONLY</td><td>Shaft RPM, valve position, crank TDC</td></tr>
    <tr><td><strong>Capacitive</strong></td><td>Target changes dielectric constant of capacitor field - modifies oscillation frequency</td><td class="ok">Metals AND non-metals (plastics, liquids, powders)</td><td>Level switches in non-metallic tanks, bulk material detection</td></tr>
    <tr><td><strong>Magnetic (Reed switch)</strong></td><td>Moving permanent magnet actuates sealed reed switch contacts inside the sensor</td><td>Magnetic fields only</td><td>Float level switches, bilge float alarms, door/hatch position</td></tr>
    <tr><td><strong>Ultrasonic</strong></td><td>Acoustic pulse travel time (time-of-flight echo)</td><td>Any solid/liquid reflective surface</td><td>Tank level monitoring (non-contact), object detection</td></tr>
    <tr><td><strong>Photoelectric</strong></td><td>Light beam interruption or reflection - emitter + receiver pair</td><td>Any opaque object</td><td>Conveyor systems, counting, bin overflow detection</td></tr>
    <tr><td><strong>LVDT</strong></td><td>Moving iron core shifts mutual inductance between primary and secondary coils</td><td>Mechanical linkage/stem only</td><td>Governor fuel rack, control valve stem feedback, rudder angle</td></tr>
  </table>
  <div class="n-formula">RPM = (Pulses per second × 60) / Number of teeth on gear wheel<div class="label">Toothed gear wheel + inductive/magnetic pick-up counting teeth per second</div></div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-magpickup">⚙️ Magnetic Pick-Up &amp; Electric Tachometers</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Magnetic Pick-Up (Variable Reluctance Sensor):</strong> A permanent magnet with a coil wound around it. As a ferrous gear tooth (on flywheel, crankshaft, or reluctor ring) passes close to the sensor tip, the magnetic flux through the coil changes → rate of flux change induces an EMF in the coil (Faraday's Law). Each tooth passing = one voltage pulse. Frequency of pulses directly = shaft speed.<br><br><strong>Typical output:</strong> 1V–50V AC sine wave at low speed, increasing to higher amplitude and frequency at higher RPM. Frequency range: 1 Hz to 10 kHz depending on tooth count and speed.<br><br><strong>Key property - Passive / Self-generating:</strong> No external power supply needed whatsoever. EMF is generated purely by the changing magnetic flux. Very reliable in high-temperature and high-vibration environments (engine room conditions).<br><br><strong>Ship Applications:</strong> Crankshaft RPM measurement for engine governor control, overspeed trip detection (if pulse frequency exceeds limit → immediate fuel shut-off), propeller shaft speed, turbocharger RPM monitoring.</div></div>

  <div class="n-formula">RPM = (f × 60) / N<div class="label">f = pulse frequency (Hz), N = number of teeth on the gear wheel (reluctor ring tooth count)</div></div>

  <div class="n-h2">Electric Tachometer - Types Comparison</div>
  <table class="n-table">
    <tr><th>Type</th><th>Principle</th><th>Output</th><th>Notes</th></tr>
    <tr><td><strong>DC Tachogenerator</strong></td><td>Small DC generator coupled to shaft. Output voltage ∝ speed. V = K × RPM.</td><td>DC voltage (0–100V)</td><td>Simple, direct reading. Brush wear limits life.</td></tr>
    <tr><td><strong>AC Tachogenerator</strong></td><td>Small AC alternator. Output frequency AND amplitude both ∝ speed. Frequency is more stable indicator than amplitude.</td><td>AC voltage, frequency ∝ RPM</td><td>No brush gear. Frequency counter at receiver gives accurate speed.</td></tr>
    <tr><td><strong>Magnetic Pick-Up</strong></td><td>Variable reluctance - flux change in permanent magnet coil as gear teeth pass. Passive, self-generating.</td><td>AC pulse train, frequency ∝ RPM</td><td>No power supply needed. Most common on ship main engines.</td></tr>
    <tr><td><strong>Photoelectric</strong></td><td>Light beam interrupted by slotted disc on shaft. Each slot passage = one pulse. Pulses counted per second.</td><td>Digital pulse train</td><td>Very high resolution. Suitable for slow-speed precise applications.</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is a magnetic pick-up and where is it used onboard?<br><strong>Answer:</strong> A variable reluctance electromagnetic sensor - a permanent magnet surrounded by a coil. A toothed ferrous reluctor ring on the shaft passes the sensor tip. Each tooth changes the magnetic flux, inducing a voltage pulse. Pulse frequency is counted and converted to RPM by the tachometer electronics. Used for crankshaft overspeed trip (safety critical), engine governor speed feedback, and propeller shaft tachometer. It is a passive device - generates its own EMF from magnetic flux change, needs no external power supply. Highly reliable in high-temperature, high-vibration engine room conditions.</div></div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-modbus">🖥️ Modbus Communication Protocol</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib focuses on protocol architecture and function codes. Know RTU vs TCP/IP and register types.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Architecture:</strong> Strictly Master/Slave (now called Client/Server in newer documents). Only ONE Master (PLC/DCS) initiates all requests. Up to <span class="n-val">247</span> slave device addresses on a single RS-485 bus. Slaves only respond when addressed by the master - never transmit spontaneously.<br><br><strong>Variants:</strong> Modbus RTU (binary encoding, RS-485, <span class="n-val">up to 115200 baud</span>), Modbus ASCII (text encoding, RS-485, slower), Modbus TCP/IP (Ethernet frame encapsulation, <span class="n-val">10–1000 Mbps</span>, port <span class="n-val">502</span>).</div></div>

  <div class="n-h2">Modbus Function Codes</div>
  <table class="n-table">
    <tr><th>FC</th><th>Function Name</th><th>Data Type</th><th>R/W</th><th>Use</th></tr>
    <tr><td><span class="n-val">01</span></td><td>Read Coil Status</td><td>1-bit Digital Output</td><td>R</td><td>Read solenoid/relay ON/OFF states</td></tr>
    <tr><td><span class="n-val">02</span></td><td>Read Discrete Input</td><td>1-bit Digital Input</td><td>R</td><td>Read contact/limit switch states</td></tr>
    <tr><td><span class="n-val">03</span></td><td>Read Holding Registers</td><td>16-bit Analogue Output</td><td>R</td><td>Read configuration/setpoint parameters - read-write registers</td></tr>
    <tr><td><span class="n-val">04</span></td><td>Read Input Registers</td><td>16-bit Analogue Input</td><td>R</td><td>Read live sensor measurements - read-only process values</td></tr>
    <tr><td><span class="n-val">05</span></td><td>Write Single Coil</td><td>1-bit Digital</td><td>W</td><td>Force a single relay/coil ON or OFF</td></tr>
    <tr><td><span class="n-val">06</span></td><td>Write Single Register</td><td>16-bit Analogue</td><td>W</td><td>Update a single setpoint value</td></tr>
    <tr><td><span class="n-val">16</span></td><td>Write Multiple Registers</td><td>16-bit Array</td><td>W</td><td>Configure multiple parameters in one transaction</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>RS-485 Termination Rule:</strong> RS-485 differential pair bus runs up to <span class="n-val">1200 m</span> at low baud rates. A <span class="n-val">120 Ω</span> termination resistor must be connected across the A and B differential wires at BOTH extreme ends of the bus (first device and last device). Without termination, signal reflections travel back down the cable at high baud rates, corrupting data - causing CRC errors and communication failures. Devices in the middle of the bus must NOT have termination resistors fitted.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - FC 01-04:</strong> Think "01-02 = Digitals (bits), 03-04 = Analogues (16-bit registers)". FC 01 and 03 = Outputs (you can write to them). FC 02 and 04 = Inputs (read-only sensor data). The even numbers (02, 04) are always read-only inputs.</div></div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-megger">⚡ Megger Test, Insulation Resistance &amp; PI Test</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask testing physics, component precautions, and PI test interpretation. Know PI values and what they mean.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why DC (not AC) for IR testing:</strong> AC causes continuous capacitive charging current to flow through cable and winding capacitance - this capacitive current adds to the genuine leakage current, giving an artificially low (pessimistic) IR reading. With DC: after the initial transient capacitive charge settles (in the first 30–60 seconds), only pure resistive leakage current flows → accurate insulation resistance measurement. This is why meggers use high-voltage DC.</div></div>

  <div class="n-h2">Test Voltage Selection</div>
  <table class="n-table">
    <tr><th>Equipment Type</th><th>Test Voltage</th><th>Minimum Acceptable IR</th></tr>
    <tr><td>LV equipment and cables (up to 440V)</td><td class="hl"><span class="n-val">500V DC</span></td><td class="hl"><span class="n-val">1 MΩ</span> minimum</td></tr>
    <tr><td>HV equipment (3.3–6.6 kV)</td><td class="hl"><span class="n-val">2500–5000V DC</span></td><td class="hl"><span class="n-val">kV rating + 1 MΩ</span> (so 3.3kV = 4.3 MΩ min)</td></tr>
    <tr><td class="bad">Sensitive electronics / PCBs / transducers</td><td class="bad"><span class="n-val">50–100V DC ONLY</span></td><td class="bad">Standard 500V megger DESTROYS semiconductors - use low-voltage megger or multimeter only</td></tr>
    <tr><td>Instrumentation cables (twisted pair shielded)</td><td><span class="n-val">100–250V DC</span></td><td><span class="n-val">≥10 MΩ</span> between conductors and screen</td></tr>
  </table>

  <div class="n-h2">Polarisation Index (PI) Test</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Definition:</strong> PI = (IR at 10 minutes) / (IR at 1 minute)<br><br><strong>Physics behind PI:</strong> Good, dry insulation has a genuine polarisation mechanism (dipole alignment) - as the DC test voltage is applied, the molecular dipoles in the insulation gradually align with the field over 10 minutes, causing the absorption current to decay. IR increases over time → 10-min IR is higher than 1-min IR → PI &gt; 1. In moist/contaminated insulation, ionic conduction dominates - moisture provides a steady leakage path. Current stays constant → IR stays flat → PI approaches 1.0.</div></div>
  <table class="n-table">
    <tr><th>PI Value</th><th>Interpretation</th><th>Action</th></tr>
    <tr><td class="bad">PI &lt; 1.5</td><td class="bad">Poor - moist, contaminated, or deteriorated insulation</td><td class="bad">Do NOT energise. Dry out immediately (space heaters, baking).</td></tr>
    <tr><td class="hl">PI 1.5–2.0</td><td>Marginal - investigate further</td><td>Monitor closely. Plan remedial maintenance.</td></tr>
    <tr><td class="ok">PI &gt; 2.0</td><td class="ok">Good - dry, healthy insulation</td><td class="ok">Safe to energise. Log and record date.</td></tr>
    <tr><td class="ok">PI &gt; 4.0</td><td class="ok">Excellent</td><td class="ok">New or recently dried/cleaned insulation.</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>DAR (Dielectric Absorption Ratio) test:</strong> Quick variant of PI for cases where a full 10-minute test is impractical. DAR = IR(60 sec) / IR(30 sec). DAR &gt; 1.6 = good insulation. DAR &lt; 1.4 = poor insulation. Faster test but less discriminating than PI.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Post-test discharge - mandatory safety step:</strong> After any DC megger test, connect a shorting/grounding probe between the test terminal and earth and hold for a minimum of <span class="n-val">4× the test duration</span> (or minimum 30 seconds for short tests). Winding and cable capacitance stores significant charge at high test voltage - this stored charge can cause a serious electric shock if the test leads are touched immediately after testing. Never assume the circuit is safe until discharged.</div></div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>BEFORE megger testing:</strong> Disconnect AVRs (Automatic Voltage Regulators) from alternator windings - sensitive SCR/transistor circuits will be destroyed by 500V test voltage. Disconnect all electronic cards from motor starters and drives. Isolate all PLC/DCS analogue input cards from field terminals. Only then apply megger.</div></div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-ums">🚨 UMS Alarm System &amp; Pressure Transmitter Calibration</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>SOLAS UMS requirements:</strong> When the machinery space is unattended (UMS - Unmanned Machinery Space), all engineering alarms must be simultaneously routed to the bridge watchkeeper AND the duty engineer officer's cabin. If an alarm is not acknowledged within <span class="n-val">3 minutes</span> → Stage 1 escalation (bridge alarm activates) → If still unacknowledged → Stage 2 (chief engineer/master alarm). This escalation ensures assistance is summoned if the duty engineer collapses or is incapacitated alone in the machinery space.</div></div>

  <div class="n-h2">Mandatory UMS Monitoring Points</div>
  <ul class="n-list">
    <li><strong>Main/auxiliary engines:</strong> High cooling water temperature, high LO temperature, low LO pressure, high exhaust temp (individual cylinder), overspeed</li>
    <li><strong>Bilge network:</strong> Float level alarms in all machinery space bilge wells - high bilge level alarm</li>
    <li><strong>Generators:</strong> Overcurrent trip, under-voltage alarm, reverse power relay, overfrequency/underfrequency</li>
    <li><strong>Steering gear:</strong> Motor overload alarm, complete power failure alarm, low hydraulic oil level</li>
    <li><strong>Boiler:</strong> Low water level (LWL, VLWL), high steam pressure, flame failure alarm</li>
    <li><strong>Fuel oil:</strong> Low pressure, high temperature, HFO viscosity out of range</li>
  </ul>

  <div class="n-h2">Standard Pressure Transmitter Calibration - 6 Steps</div>
  <ol class="n-steps">
    <li>Isolate transmitter from process - close the root/isolation valve, then bleed trapped process pressure via the bleed plug or 3-valve manifold equalise valve. Confirm transmitter is at zero pressure (reads 4.000 mA or close to it).</li>
    <li>Connect a precision calibration pressure source (dead-weight tester or HART calibrator) to the HP port. Connect a calibrated digital multimeter in series with the 4-20mA loop to accurately read loop current.</li>
    <li>Apply <span class="n-val">0% pressure</span> (0 bar / LRV) → adjust ZERO trim → output must read exactly <span class="n-val">4.000 mA</span>. Repeat until stable.</li>
    <li>Apply <span class="n-val">100% pressure</span> (full scale / URV) → adjust SPAN trim → output must read exactly <span class="n-val">20.000 mA</span>. Repeat until stable.</li>
    <li>Apply <span class="n-val">50% pressure</span> (mid-scale) → verify output = <span class="n-val">12.000 mA</span>. This is the linearity check - no further adjustment; if in error, re-check zero and span.</li>
    <li>Log all as-found and as-left readings. Update calibration due tag affixed to the transmitter. Re-connect to process following startup sequence. Issue permit-to-work clearance.</li>
  </ol>

  <div class="n-h2">RTD (PT100) Calibration - Resistance Injection Method</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyor Q (Kamath, Deswal): "How do you calibrate an RTD on board or verify a temperature controller is reading correctly?"</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Method 1 - Resistance Injection (Controller Input Verification):</strong><br>
  1. Disconnect the RTD leads from the temperature controller input terminals.<br>
  2. Connect a precision resistance decade box (or calibrated resistance substitution box) in place of the RTD.<br>
  3. Dial in known resistance values corresponding to specific temperatures from the PT100 resistance-temperature table (e.g. 100.0 Ω = 0 °C · 119.4 Ω = 50 °C · 138.5 Ω = 100 °C).<br>
  4. Verify the controller display reads the correct temperature at each injected resistance - any deviation indicates a fault in the controller input card or calibration trim.<br>
  5. Record as-found and as-left deviations against the PT100 IEC 60751 table. Trim controller offset if within adjustment range.<br><br>
  <strong>Method 2 - Comparison with Calibrated Thermocouple:</strong><br>
  Immerse both the RTD under test and a calibrated reference thermocouple in the same thermally stable bath or dry block calibrator. Compare displayed temperature from each against the bath setpoint. Deviation of the RTD from the calibrated thermocouple = RTD measurement error. Correct by adjusting RTD trim or replacing the element.<br><br>
  <strong>Certificate requirement:</strong> Both methods require a traceable calibration certificate for the resistance decade box or reference thermocouple, referencing the national standard (NPL/NIST/NABL).</div></div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-calibration">📋 Calibration Traceability - Standards &amp; Certification</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>What is calibration traceability?</strong> Traceability means that a measurement result can be related, through a documented and unbroken chain of comparisons, to a national or international measurement standard. Each calibration in the chain has a stated uncertainty, and these uncertainties are combined to give the total uncertainty of the final measurement. Without traceability, an instrument may be "calibrated" against another instrument that was itself never referenced to any standard - the calibration is meaningless.</div></div>

  <div class="n-h2">The Traceability Chain</div>
  <ol class="n-steps">
    <li><strong>Primary Standard</strong> - Held at national metrology institutes (e.g. NIST - National Institute of Standards and Technology, USA; NPL - National Physical Laboratory, UK; BIPM - International Bureau of Weights and Measures, France). These standards define the SI units. Example: The temperature scale is defined by ITS-90 (International Temperature Scale of 1990) - fixed points at triple point of water (0.01 °C), freezing point of aluminium (660.32 °C), etc.</li>
    <li><strong>Secondary / Transfer Standard</strong> - Calibrated against primary standards at an accredited calibration laboratory. Examples: Precision resistance decades, dead-weight testers, platinum resistance thermometers traceable to ITS-90. Ship management company calibration facility or approved calibration house.</li>
    <li><strong>Working Standard / Calibration Equipment</strong> - The actual calibrator used on board or in the workshop (HART communicator, pressure calibrator, reference multimeter). Must have a valid calibration certificate referencing a secondary standard.</li>
    <li><strong>Field Instrument</strong> - Pressure transmitter, RTD, flow meter on the ship being calibrated against the working standard.</li>
  </ol>

  <div class="n-h2">Calibration Certificate - What Must Be On It</div>
  <ul class="n-list">
    <li><strong>Instrument identification:</strong> Make, model, serial number, tag number</li>
    <li><strong>Calibration date</strong> and due date (next calibration)</li>
    <li><strong>As-found readings</strong> (before adjustment) and <strong>as-left readings</strong> (after adjustment) at multiple calibration points</li>
    <li><strong>Measurement uncertainty</strong> - stated at 95% confidence level (U = k × u_c, where k = 2)</li>
    <li><strong>Reference standard used</strong> - identification, calibration certificate number, expiry date</li>
    <li><strong>Traceability statement</strong> - "Traceable to national/international standards via [calibration lab name and accreditation number]"</li>
    <li><strong>Environmental conditions</strong> at time of calibration (temperature, humidity)</li>
    <li><strong>Technician signature</strong> and calibration lab stamp/accreditation mark (NABL in India, UKAS in UK, A2LA in USA)</li>
  </ul>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is NIST/NPL traceability and why does it matter for ship instruments?<br><strong>Answer:</strong> NIST (USA) and NPL (UK) are national metrology institutes that maintain primary measurement standards - the most accurate realisations of SI units. Traceability to these institutes means our calibration instruments are validated through an unbroken chain back to these primary standards, giving a known and documented measurement uncertainty. This matters because: (1) PSC/Flag State inspections may request calibration records; (2) custody transfer measurements (bunkering, cargo) require certified accuracy; (3) MARPOL emissions monitoring data must be defensible in court if challenged. A calibration done against an uncertified reference is legally inadmissible.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Traceability Pyramid:</strong> BIPM/NPL/NIST at the top (national). Accredited lab in the middle. Ship working standard at the bottom. Each level is calibrated against the level above. The calibration certificate is your paper trail - no certificate = no traceability = calibration is unverifiable.</div></div>

  <div class="n-h2">Instrument Accuracy Class</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Accuracy class</strong> is the maximum permissible error of an instrument expressed as a <strong>percentage of Full Scale Deflection (FSD)</strong>.<br>
  <strong>Example - Class 2 instrument with 0–100 V FSD:</strong> Max permissible error = 2% × 100 V = <span class="n-val">±2 V</span> at <em>any point on the scale</em>.<br>
  <strong>Important:</strong> A Class 2 instrument reading 10 V still has a possible error of ±2 V - which is a 20% error on the actual reading. Accuracy class errors are worst at low-end readings. This is why instruments should be selected so the normal operating range is in the upper 60–80% of scale.<br>
  <strong>Common instrument classes:</strong> Class 0.2 (precision laboratory/metering) · Class 0.5 (revenue metering) · Class 1.0 (general industrial) · Class 2.5 (indicating meters on panels).</div></div>

  <div class="n-h2">Bimetal Thermostat</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> Two metals with different thermal expansion coefficients (typically <strong>invar</strong> - very low expansion, and <strong>brass</strong> - high expansion) are bonded together along their length. When heated, the brass expands more than the invar - the strip bends toward the invar side. The bending actuates a snap-action switch contact. When cooled below the setpoint, the strip returns and contacts open/close in the reverse direction.<br>
  <strong>On-board uses:</strong> Cabin space heaters, engine room HVAC, galley equipment, oil heater control, battery room temperature monitoring.<br>
  <strong>Adjustment:</strong> A calibration screw adjusts the contact gap, setting the temperature at which the strip trips the switch.</div></div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-level">💧 Level Sensors - Float, Capacitance, Ultrasonic, Radar</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask:</strong> Types of level sensors onboard and their working principles. Know at least 5 types with clear explanations.</div></div>

  <table class="n-table">
    <tr><th>Type</th><th>Principle</th><th>Ship Application</th></tr>
    <tr><td><strong>Float Sensor</strong></td><td>Mechanical float rises/falls with liquid level. Attached arm rotates a potentiometer (continuous) or actuates a micro-switch (on/off). Output: on/off alarm or proportional 4-20mA.</td><td>FW tanks, bilge high-level alarms, boiler drum high/low level switches</td></tr>
    <tr><td><strong>Capacitance Probe</strong></td><td>The probe (one capacitor plate) and the tank wall (other plate) form a capacitor. Liquid between them (higher dielectric constant than air/vapour) increases capacitance proportional to immersion depth. Electronics convert capacitance change to 4-20mA.</td><td>FO service/settling tanks, chemical tanks, non-metallic tanks where float cannot be used</td></tr>
    <tr><td><strong>Conductivity Probe</strong></td><td>Two bare electrode tips submerged in conductive liquid complete an electrical circuit. Current flows only when electrode tip contacts conductive liquid (not suitable for non-conductive oils). Salinometer uses this principle.</td><td>Bilge level alarm (salt water detects ingress), salinometer, conductive liquid level switches</td></tr>
    <tr><td><strong>Ultrasonic (Time-of-Flight)</strong></td><td>Piezoelectric transducer at top of tank emits a short ultrasonic pulse downward. Measures time for echo to return from liquid surface. Level = total tank height − (speed of sound × time ÷ 2). Non-contact, no moving parts. Speed of sound varies with vapour temperature - correction needed.</td><td>Cargo tank level gauging, FW tank remote reading, non-invasive measurement</td></tr>
    <tr><td><strong>DP (Hydrostatic Head)</strong></td><td>Measures static head pressure = ρ × g × h. HP port at tank bottom, LP port vents to atmosphere (open tank) or to tank blanket gas space (closed tank). 4-20mA output proportional to level. Affected by fluid density changes - must correct for temperature/density.</td><td>Fuel oil tanks, ballast tanks, boiler drum level control</td></tr>
    <tr><td><strong>Radar (Microwave Pulse)</strong></td><td>High-frequency microwave pulse (5–80 GHz) reflects off liquid surface. Time-of-flight calculated using speed of light (much faster than ultrasound, insensitive to temperature). Unaffected by vapour, foam, temperature, or composition changes. Guided wave radar variant uses a wire/rod wave guide for low dielectric liquids.</td><td>Cargo oil tanks on tankers - custody transfer accuracy; LNG carrier cargo tanks</td></tr>
    <tr><td><strong>Magnetic Float (Sight Glass type)</strong></td><td>A sealed float with embedded permanent magnets rides on liquid surface inside a non-magnetic chamber. External magnetic followers (flippers/indicators) on the chamber wall flip between coloured sides as the magnet level changes - provides visual local indication. Can also drive a 4-20mA transmitter via magnetic coupling.</td><td>LO sump tanks, HFO tank local sight gauges, boiler water sight glasses</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (All):</strong> Salinometer - how does it detect salinity and why must it use AC?<br><strong>Answer:</strong> Measures electrical conductivity of the water. Dissolved Na⁺ and Cl⁻ ions carry current - higher salt content = higher conductivity. <strong>AC must be used</strong> because DC causes electrolysis - ions migrate toward electrodes and form a film (polarisation) that increases electrode resistance over time, giving a false high reading. AC reverses ion migration with each half-cycle, preventing polarisation. Output in ppm. If ppm exceeds the setpoint alarm, the dump valve opens to divert distillate to bilge instead of FW tanks. Boiler feed water limit: 5–15 ppm.</div></div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-straingauge">🔩 Strain Gauge, Wheatstone Bridge &amp; LVDT</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-h2">Strain Gauge - Principle &amp; Gauge Factor</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> A metallic resistance wire or foil element bonded to a thin flexible substrate (backing). When the substrate experiences mechanical strain (stretch = tension, compression = crush), the bonded wire changes in length and cross-sectional area simultaneously:<br>• Tension: wire lengthens (L ↑) and narrows (A ↓) → resistance R = ρL/A increases<br>• Compression: wire shortens (L ↓) and widens (A ↑) → resistance decreases<br><br>The Gauge Factor (GF) quantifies sensitivity: GF = (ΔR/R) / ε, where ε = strain (dimensionless = ΔL/L). Metallic gauge: GF ≈ 2. Semiconductor gauge: GF ≈ 100–150 (much more sensitive but temperature-dependent and fragile).<br><br>Resistance change is typically milliohms out of hundreds of ohms - too small to measure directly with an ohmmeter. A <strong>Wheatstone bridge</strong> circuit is used to detect these tiny changes with high precision.</div></div>

  <div class="n-h2">Wheatstone Bridge - Balance Condition</div>
  <div class="n-formula">V_out = V_supply × [ R3/(R3+R4) − R2/(R1+R2) ]<div class="label">Bridge output voltage. At balance (null): R1/R2 = R3/R4, V_out = 0. Strain gauge replaces one or more of R1–R4.</div></div>
  <p class="n-p">In a pressure transmitter, four strain gauges are deposited onto a metal diaphragm (two in compression, two in tension when pressure is applied - full bridge configuration). Applied pressure deflects the diaphragm, straining all four gauges simultaneously. Two gauges increase in resistance while two decrease - this differential effect doubles the sensitivity and cancels temperature error. Bridge output voltage is proportional to applied pressure. This mV signal is amplified and conditioned to 4-20mA.</p>

  <div class="n-h2">Pressure Transducer vs Pressure Transmitter</div>
  <table class="n-table">
    <tr><th>Device</th><th>Output Signal</th><th>Power Supply</th><th>Signal Conditioning</th></tr>
    <tr><td><strong>Pressure Transducer</strong></td><td>Raw bridge mV (typically 0–100 mV full scale)</td><td>Needs external excitation voltage (5–10V DC to bridge)</td><td>None - raw signal requires amplification at receiver</td></tr>
    <tr><td><strong>Pressure Transmitter</strong></td><td><span class="n-val">4-20 mA</span> industry standard</td><td>Loop-powered - 24V DC from DCS/PLC card</td><td>Full internal: amplifier + lineariser + temperature compensator</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> <strong>Trans-ducer</strong> = trans-duces (converts) but does NOT transmit cleanly over distance - output is raw mV, susceptible to noise. <strong>Trans-mitter</strong> = transmits the signal - 4-20mA immune to noise over hundreds of metres of cable. On ships, transmitters are universally used; transducers only inside local panel-mounted instruments.</div></div>

  <div class="n-h2">LVDT - Linear Variable Differential Transformer</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Construction:</strong> One primary coil (driven by AC excitation, typically 1–10 kHz) and two secondary coils (S1 and S2) wound in opposition and placed symmetrically on either side of the primary. A soft iron core is mechanically connected to the object whose position is being measured (valve stem, governor fuel rack, rudder shaft).<br><br><strong>Working:</strong> AC in primary induces voltage in both secondaries by mutual induction. Output = V_S1 − V_S2 (connected in series opposition).<br>• Core central (null position): V_S1 = V_S2 → V_out = 0 (no net output)<br>• Core moves toward S1: V_S1 increases, V_S2 decreases → V_out = positive voltage proportional to displacement<br>• Core moves toward S2: V_S1 decreases, V_S2 increases → V_out = negative voltage proportional to displacement<br>• Phase of output (0° or 180° relative to primary) indicates direction of movement<br><br><strong>Advantages:</strong> Contactless - no physical friction or wear between core and coils. Infinite resolution (analogue, not digital steps). Highly accurate (±0.25% full scale). Rugged - sealed in oil or epoxy, suitable for harsh conditions.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is an LVDT and where is it used onboard?<br><strong>Answer:</strong> Linear Variable Differential Transformer - converts linear mechanical displacement into an AC voltage proportional to displacement. Used for: (1) Engine governor fuel rack position feedback - the governor controller needs to know exactly how much fuel is being injected, (2) Main engine telegraph repeater system, (3) Autopilot rudder angle feedback transmitter, (4) Stabiliser fin angle measurement, (5) Control valve stem position indication. Key advantage: no physical contact between the moving iron core and the coil assembly - no friction, no wear, suitable for continuous and high-cycle operation in all sea conditions.</div></div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-gasdetect">🔥 Gas Detectors - Pellistor, NDIR, PID &amp; Electrochemical</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Exam critical:</strong> Fixed gas detection types, principles, and limitations are asked at every MMD oral. Know at least 3 types of combustible gas detector and their operating principles.</div></div>

  <div class="n-h2">Fixed Gas Detection - Types and Principles</div>
  <table class="n-table">
    <tr><th>Detector Type</th><th>Operating Principle</th><th>Gas Detected</th><th>Ship Application</th></tr>
    <tr><td><strong>Catalytic Bead (Pellistor)</strong></td><td>Combustible gas oxidises on heated platinum catalyst bead → heat released → bead resistance rises → Wheatstone bridge deflects → % LEL reading</td><td>All combustible gases (HC, H₂, CO)</td><td>Cargo pump rooms, battery rooms, CO₂ flooding systems (pre-warning)</td></tr>
    <tr><td><strong>NDIR (Non-Dispersive Infrared)</strong></td><td>IR radiation passes through sample gas. CO₂, CO, hydrocarbons absorb IR at specific wavelengths. Residual IR measured by detector - absorption proportional to concentration. Different wavelength for each gas (CO₂: 4.26 µm; CO: 4.67 µm; CH₄: 3.3 µm).</td><td>CO₂, CO, CH₄, other hydrocarbons</td><td>Exhaust gas analysers, boiler furnace CO monitoring, refrigerant leak detection (R-134a, R-404a)</td></tr>
    <tr><td><strong>Electrochemical (Amperometric)</strong></td><td>Target gas diffuses through a membrane and is oxidised/reduced at an electrode. Current produced is proportional to gas concentration. Cell is consumed over time (1–3 year life). Different electrode materials for different gases.</td><td>O₂, H₂S, CO, SO₂, Cl₂ (specific to electrode type)</td><td>Enclosed space entry O₂ meter, H₂S personal monitor, toxic gas fixed head</td></tr>
    <tr><td><strong>Photoionisation Detector (PID)</strong></td><td>UV light from a lamp ionises gas molecules (if ionisation potential &lt; lamp photon energy). Resulting ions and electrons are collected by electrodes → current proportional to gas concentration. Very sensitive - ppb to ppm range. Cannot detect methane (ionisation potential too high).</td><td>VOCs (benzene, toluene, xylene), BTEX, organic solvents - not methane/CO₂</td><td>Cargo space entry on chemical tankers, tank atmosphere checks before hot work</td></tr>
    <tr><td><strong>Semiconductor (MOS)</strong></td><td>Metal oxide semiconductor (SnO₂) changes resistance when target gas adsorbs on heated surface. Resistance decreases as reducing gas concentration increases. Simple, cheap, but cross-sensitive to many gases, humidity-dependent.</td><td>General combustibles (LPG, natural gas) - non-specific</td><td>Domestic use, basic alarm applications - not suitable for SOLAS-certified detection</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Pellistor Limitation - Inhibition / Poisoning:</strong> Catalytic bead sensors can be permanently poisoned by halogen compounds (Freon refrigerants, chlorinated solvents), silicones, sulphur compounds, and lead compounds. A poisoned pellistor reads ZERO even in a flammable atmosphere - the most dangerous failure mode. Ships with refrigerant leaks in spaces where pellistor heads are fitted must be aware of this. NDIR is immune to chemical poisoning. Pellistors must also not be used in oxygen-deficient atmospheres - combustion reaction requires O₂ to function.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Gas Detector Selection:</strong> <strong>Pellistor</strong> = Fire risk (LEL %). <strong>Electrochemical</strong> = People risk (O₂, H₂S, CO ppm). <strong>NDIR</strong> = Boiler/exhaust analysis. <strong>PID</strong> = Chemical tanker VOC checks. Each has a different job - know which to reach for in which scenario.</div></div>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body">These are exact question formats from MMD orals (DG Shipping India). Study the key points - surveyor attribution tells you who is most likely to ask each question.</div></div>

  <table class="n-table">
    <tr><th>Examiner Question</th><th>Surveyor</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>Why use 4-20mA instead of 0-20mA?</td>
      <td>Deswal</td>
      <td><span class="n-val">4 mA</span> = live zero. A wire break or transmitter failure gives 0 mA - unambiguously different from the minimum valid signal (4 mA). With 0-20mA, zero measurement and wire break both read 0 mA - fault detection is impossible. 4 mA also powers two-wire transmitter electronics directly from the loop.</td>
    </tr>
    <tr>
      <td>Explain the PI test and why it is better than a simple IR test.</td>
      <td>All surveyors</td>
      <td>PI = (10-min IR) ÷ (1-min IR). Dry, good insulation polarises over 10 minutes - IR increases → PI &gt; 2. Moist insulation has steady ionic leakage - IR stays flat → PI ≈ 1. A simple 1-minute IR reading can look acceptable even on moist insulation if absolute IR value happens to be above the minimum (1 MΩ). PI reveals the TREND over time, exposing moisture that a single reading would miss.</td>
    </tr>
    <tr>
      <td>How does a smart transmitter differ from a conventional one?</td>
      <td>Vishwanathan</td>
      <td>Smart transmitters contain a microprocessor. HART protocol allows remote configuration (LRV/URV change), remote calibration, continuous self-diagnostics, non-linear signal compensation (square root for DP flow), and tag identification - all via the existing 4-20mA wires without physical access to the transmitter. Conventional transmitters require physical screwdriver adjustment on trimmer pots.</td>
    </tr>
    <tr>
      <td>What is a DP transmitter? How is it used for level?</td>
      <td>Kamath, All</td>
      <td>Measures the pressure difference between two tapping points. For level: HP port connected to tank bottom (measures hydrostatic head = ρgh), LP port vents to atmosphere (open tank) or to blanket gas (closed tank). Output 4-20mA proportional to level. On closed tanks with wet legs: zero suppression trim needed to cancel constant HP offset when tank is empty. Full tank pressure minus wet leg pressure = net DP proportional to actual level.</td>
    </tr>
    <tr>
      <td>When would you recalibrate a SIPART PS2?</td>
      <td>Deswal</td>
      <td>After valve packing replacement, actuator diaphragm/spring replacement, complete valve overhaul, new valve installation, if position indication is erratic, after instrument air pressure supply change, or if the valve hunts (oscillates) around the setpoint - all these change friction or travel characteristics. The Run 1-5 auto-calibration sequence re-learns closed stop, open stop, travel time, and friction - no manual adjustment needed.</td>
    </tr>
    <tr>
      <td>What is cold junction compensation in a thermocouple?</td>
      <td>All</td>
      <td>Thermocouple output represents the temperature DIFFERENCE between the hot junction (measurement point) and the cold junction (instrument terminals). If terminal temperature changes (engine room heat), readings shift. CJC: a separate temperature sensor (RTD/thermistor) in the instrument measures actual terminal temperature, adds the equivalent mV correction to give the true hot junction temperature. Without CJC, accuracy only holds if the cold junction is at a fixed known temperature (0 °C ice bath).</td>
    </tr>
    <tr>
      <td>What is a Coriolis flowmeter? Why is it used for bunkering?</td>
      <td>Sanjib, Kamath</td>
      <td>Vibrating tube flowmeter that directly measures mass flow from the phase shift (time lag) between inlet and outlet tube vibration signals caused by the Coriolis force on the flowing fluid. Measures mass (kg/s) - not volume - independent of fluid density, temperature, or viscosity. For bunkering: mass of fuel received is the commercial basis of payment (not volume, which changes with temperature and density). Coriolis is also bidirectional, capturing any backflow. Highest accuracy of all flowmeter types (±0.1–0.2%).</td>
    </tr>
    <tr>
      <td>Why can a thermowell break? What can you do to prevent it?</td>
      <td>Kamath, Vishwanathan</td>
      <td>Kármán vortex shedding from flowing fluid creates an oscillating lateral force on the thermowell shank at the Strouhal frequency (f = S × V / d). If this shedding frequency matches the thermowell's mechanical natural frequency, resonance occurs - amplitude increases rapidly and the well fails by fatigue fracture at the root. Prevention: use shorter insertion length, tapered/larger diameter thermowell, or install in a wider pipe section with lower flow velocity. Govern by ASME PTC 19.3 TW - f_n must be ≥ 1.25 × f_s maximum.</td>
    </tr>
    <tr>
      <td>What is the difference between a Zener barrier and a galvanic isolator?</td>
      <td>Vishwanathan, Sanjib</td>
      <td>Both are IS (intrinsically safe) interface devices protecting hazardous area instruments. Zener barrier: passive - Zener diodes clamp voltage and series resistors limit current; must have &lt;1Ω IS earth connection or protection fails; cheap. Galvanic isolator: active - transformer/optocoupler completely isolates safe and hazardous area electrically; no IS earth required; more expensive but superior isolation. Galvanic isolator is the modern preference for new installations because IS earth is not required and signal quality is better over long cable runs.</td>
    </tr>
    <tr>
      <td>What is Modbus? What is the difference between RTU and TCP/IP?</td>
      <td>Sanjib</td>
      <td>Modbus is a serial communication protocol using master/slave architecture. Only one master (PLC/DCS) communicates at a time; up to 247 slaves. RTU: binary encoding over RS-485 serial bus, up to 1200m, 120Ω termination at both ends. TCP/IP: Modbus frames encapsulated in Ethernet packets, port 502 - no distance limit, full network infrastructure. FC03 reads holding registers (analogue outputs / config), FC04 reads input registers (analogue inputs / live sensor values).</td>
    </tr>
    <tr>
      <td>How do you calibrate an oxygen analyser?</td>
      <td>All</td>
      <td>Zero calibration: flush sensor with certified pure nitrogen (0% O₂), adjust zero trim potentiometer or HART parameter until display reads 0.0%. Span calibration: flush sensor with clean atmospheric air (20.9% O₂) or certified span gas, adjust span trim until display reads 20.9% (or certified gas value). Record gas batch certificate numbers for traceability. For electrochemical cell: perform bump test first to confirm sensor is alive before attempting calibration.</td>
    </tr>
    <tr>
      <td>What is NDIR and where is it used on ships?</td>
      <td>Deswal, Kamath</td>
      <td>Non-Dispersive Infrared - measures gas concentration by how much infrared light of a specific wavelength is absorbed by the gas sample. Each gas absorbs at a unique wavelength (CO₂ at 4.26 µm, CO at 4.67 µm, CH₄ at 3.3 µm). Used in exhaust gas analysers (CO, CO₂ for combustion efficiency and MARPOL Annex VI compliance) and in refrigerant leak detectors (halogenated refrigerants absorb in mid-IR range). Advantages: no moving parts, no consumable, immune to chemical poisoning - unlike pellistor catalytic bead sensors.</td>
    </tr>
  </table>

<!-- ═══════════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
<!-- ═══════════════════════════════════════════════════════════════════ -->

  <table class="n-table">
    <tr><th>Topic</th><th>Surveyor Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>RTD vs Thermocouple</td>
      <td class="hl">⭐⭐⭐⭐⭐ ALL</td>
      <td>RTD = Resistance↑ (PT100, 100Ω@0°C, 138.5Ω@100°C). TC = Seebeck EMF, needs CJC. K-type most common ship TC = 41 µV/°C. Extension cable must match TC alloy.</td>
    </tr>
    <tr>
      <td>4-20mA Loop / Live Zero</td>
      <td class="hl">⭐⭐⭐⭐⭐ ALL</td>
      <td>0 mA = FAULT (wire break). 4 mA = Live Zero (proves loop alive). 4-20mA = noise immune, 2-wire powers Tx. HART = 250Ω minimum in loop, FSK 1200/2200 Hz.</td>
    </tr>
    <tr>
      <td>Megger &amp; PI Test</td>
      <td class="hl">⭐⭐⭐⭐⭐ ALL</td>
      <td>Disconnect AVRs before testing. Use DC not AC. PI = 10min/1min IR. PI&gt;2 = Good/Dry. PI&lt;1.5 = Wet/Dangerous. Discharge 30 sec after test.</td>
    </tr>
    <tr>
      <td>Coriolis Flowmeter</td>
      <td class="hl">⭐⭐⭐⭐⭐ Kamath, Sanjib</td>
      <td>Measures MASS flow directly (phase shift = mass flow; frequency shift = density). No density correction needed. ±0.1% accuracy. Used for bunkering/custody transfer.</td>
    </tr>
    <tr>
      <td>DP Transmitter</td>
      <td class="hl">⭐⭐⭐⭐ ALL</td>
      <td>Q = K√DP (flow). h = DP/ρg (level). 3-valve manifold: open LP first, then HP, then close equalise. Wet leg = zero suppression needed.</td>
    </tr>
    <tr>
      <td>HART &amp; 250 Ω</td>
      <td class="hl">⭐⭐⭐⭐ Kamath, Sanjib</td>
      <td>Digital FSK over 4-20mA wire. 250Ω minimum loop resistance to develop signal voltage. Remote config/calibration/diagnostics possible.</td>
    </tr>
    <tr>
      <td>SIPART PS2 Calibration</td>
      <td class="hl">⭐⭐⭐⭐ Deswal</td>
      <td>Run 2 = Closed stop. Run 3 = Open stop. Run 4 = Travel time. Run 5 = Friction map. Recal after packing/diaphragm change or if hunting.</td>
    </tr>
    <tr>
      <td>Thermowell Resonance</td>
      <td class="hl">⭐⭐⭐⭐ Kamath, Vishwanathan</td>
      <td>Kármán vortex shedding frequency f = SV/d. If f_shed = f_natural → resonance → fatigue fracture at root. ASME PTC 19.3: f_n/f_s &gt; 1.25. Shorter/wider/tapered well prevents resonance.</td>
    </tr>
    <tr>
      <td>Intrinsic Safety - Zener vs Galvanic</td>
      <td class="hl">⭐⭐⭐⭐ Vishwanathan, Sanjib</td>
      <td>Zener barrier: passive, cheap, MUST have &lt;1Ω IS earth. Galvanic isolator: active, no IS earth needed, full galvanic isolation. Galvanic = modern preference for new installs.</td>
    </tr>
    <tr>
      <td>Gas Detectors</td>
      <td class="hl">⭐⭐⭐⭐ ALL</td>
      <td>Pellistor = LEL %, poisoned by halogens. Electrochemical = O₂/H₂S/CO in ppm. NDIR = CO₂/CO exhaust analysis, immune to poisoning. PID = VOC trace detection.</td>
    </tr>
    <tr>
      <td>Proximity Sensors</td>
      <td class="hl">⭐⭐⭐ Praveen Nair</td>
      <td>Inductive = metals only (eddy current damping). Capacitive = metals + non-metals + liquids. Magnetic pick-up = passive, no power needed, RPM sensing.</td>
    </tr>
    <tr>
      <td>Level Sensors</td>
      <td class="hl">⭐⭐⭐ ALL</td>
      <td>Float = on/off or proportional. Capacitance = immersion depth. Ultrasonic = TOF echo. Radar = microwave TOF. DP = hydrostatic head. Salinometer = conductivity, AC only.</td>
    </tr>
    <tr>
      <td>Strain Gauge &amp; LVDT</td>
      <td class="hl">⭐⭐⭐ Sanjib, Kamath</td>
      <td>Strain gauge: ΔR = GF × ε × R. Full bridge on diaphragm. LVDT: contactless linear displacement → AC voltage. Used for governor fuel rack and valve stem.</td>
    </tr>
    <tr>
      <td>Modbus Protocol</td>
      <td class="hl">⭐⭐⭐ Sanjib</td>
      <td>Master/slave. FC01/02=Digital, FC03/04=Analogue. RS-485: 120Ω at both ends, max 1200m. TCP/IP: port 502, Ethernet. Max 247 slave addresses.</td>
    </tr>
    <tr>
      <td>Calibration Traceability</td>
      <td class="hl">⭐⭐⭐ Deswal, Vishwanathan</td>
      <td>Chain: NIST/NPL → accredited lab → working standard → field instrument. Certificate must show: as-found/as-left readings, uncertainty, reference standard, traceability statement, technician signature.</td>
    </tr>
    <tr>
      <td>Turbine vs Vortex vs Coriolis</td>
      <td class="hl">⭐⭐⭐ Kamath</td>
      <td>Turbine: volumetric, moving parts, bearings, not for steam. Vortex: volumetric, no moving parts, good for steam. Coriolis: MASS flow, no moving parts, best accuracy, bunkering use.</td>
    </tr>
    <tr>
      <td>UMS Alarms</td>
      <td class="hl">⭐⭐⭐ ALL</td>
      <td>3 minutes unacknowledged → bridge alarm → master alarm. Must monitor: ME temps, bilge levels, generator protection, steering gear, boiler water level.</td>
    </tr>
    <tr>
      <td>Analysers (O₂, SOx, NOx)</td>
      <td class="hl">⭐⭐⭐ ALL</td>
      <td>Paramagnetic = O₂ boiler control. Zirconia = flue gas O₂ in-situ. Electrochemical = portable O₂ check. NDIR = CO/CO₂. CLD = NOx. UV fluorescence = SOx.</td>
    </tr>
  </table>

  </div>
</div>
</div>
`);
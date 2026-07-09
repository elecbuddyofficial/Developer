window.loadNotes("T08", `<div class="view" id="view-notes-t08">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T08')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 08 - Electronics &amp; Semiconductors</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-diodes')">Diodes &amp; Zener</button>
    <button class="anc-btn" onclick="jumpTo('s-rectifiers')">Rectifiers</button>
    <button class="anc-btn" onclick="jumpTo('s-transistors')">Transistors</button>
    <button class="anc-btn" onclick="jumpTo('s-thyristors')">Thyristor &amp; IGBT</button>
    <button class="anc-btn" onclick="jumpTo('s-transistor-matrix')">Transistor Matrix</button>
    <button class="anc-btn" onclick="jumpTo('s-cyclo')">Cycloconverter</button>
    <button class="anc-btn" onclick="jumpTo('s-synchroconv')">Synchroconverter</button>
    <button class="anc-btn" onclick="jumpTo('s-opto')">Optocouplers</button>
    <button class="anc-btn" onclick="jumpTo('s-amplifiers')">Amplifiers</button>
    <button class="anc-btn" onclick="jumpTo('s-grid-bias')">Grid Bias</button>
    <button class="anc-btn" onclick="jumpTo('s-opamp-iv')">Op-Amp &amp; I/V</button>
    <button class="anc-btn" onclick="jumpTo('s-digital')">Logic &amp; Digital</button>
    <button class="anc-btn" onclick="jumpTo('s-smps')">SMPS</button>
    <button class="anc-btn" onclick="jumpTo('s-vfd-igbt')">VFD &amp; IGBT</button>
    <button class="anc-btn" onclick="jumpTo('s-hall-effect')">Hall Effect Sensor</button>
    <button class="anc-btn" onclick="jumpTo('s-pwm-harmonics')">PWM Harmonics</button>
    <button class="anc-btn" onclick="jumpTo('s-protection-diodes')">Protection Diodes</button>
    <button class="anc-btn" onclick="jumpTo('s-ex-zones')">Hazardous Areas</button>
    <button class="anc-btn" onclick="jumpTo('s-is-entity')">Intrinsic Safety</button>
    <button class="anc-btn" onclick="jumpTo('s-emf-pd')">EMF vs PD</button>
    <button class="anc-btn" onclick="jumpTo('s-components')">Components</button>
    <button class="anc-btn" onclick="jumpTo('s-diode-apps')">Diode Apps</button>
    <button class="anc-btn" onclick="jumpTo('s-megger-ir')">Megger &amp; IR</button>
    <button class="anc-btn" onclick="jumpTo('s-avr-circuit')">AVR Circuit</button>
    <button class="anc-btn" onclick="jumpTo('s-rot-diode-fail')">Rotating Rectifier</button>
    <button class="anc-btn" onclick="jumpTo('s-electronics-formulae')">Key Formulae</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most Asked Topics:</strong> Thyristor (SCR) working and commutation · IGBT vs Thyristor vs MOSFET · Diode testing · Rectifiers and ripple factor · Amplifier classes (A, B, AB, C, D) · Cycloconverter · Optocoupler · Zener diode applications · Hall effect sensor · VFD harmonics and motor insulation effects.</div></div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 1 - DIODES & ZENER -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-diodes">1. P-N Junction Diode &amp; Zener Diode</div>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t08-diode-zener-vi-char.png" alt="Diode and Zener V-I characteristics — forward bias, reverse bias, breakdown region">
    <div class="note-diagram-cap">Fig. P-N Diode &amp; Zener V-I Characteristics — forward knee at 0.6 V, Zener breakdown voltage Vz in reverse</div>
  </div>

  <div class="n-h2">P-N Junction Diode - Fundamentals</div>
  <div class="n-p">P-type and N-type semiconductor joined together. A built-in potential barrier forms at the junction: <span class="n-val">0.6–0.7 V</span> for silicon, <span class="n-val">0.2–0.3 V</span> for germanium.</div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">Forward Bias (Anode +, Cathode −)</div>
      <div class="card-desc">Applied voltage overcomes the built-in barrier. Depletion region collapses. Current flows freely once threshold is exceeded. Knee voltage: <span class="n-val">0.6–0.7 V</span> (Si).</div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">Reverse Bias (Anode −, Cathode +)</div>
      <div class="card-desc">Applied voltage reinforces the barrier. Depletion region widens. Only tiny leakage current flows. Diode blocks until PIV (Peak Inverse Voltage) is exceeded - then breakdown occurs.</div>
    </div>
  </div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Doping Basics:</strong> N-type semiconductor doped with pentavalent atoms (e.g. phosphorus) → extra free electrons. P-type doped with trivalent atoms (e.g. boron) → holes (positive carriers). When joined, electrons diffuse into P-side, holes into N-side → depletion region with built-in electric field.</div></div>

  <div class="n-h2">Diode Testing with Multimeter</div>
  <table class="n-table">
    <tr><th>Test Condition</th><th>Good Silicon Diode</th><th>Shorted Diode</th><th>Open-Circuit Diode</th></tr>
    <tr><td>Forward bias (Red → Anode)</td><td class="ok">0.5–0.7 V</td><td class="bad">~0 V (near zero)</td><td class="bad">OL</td></tr>
    <tr><td>Reverse bias (Red → Cathode)</td><td class="ok">OL (open loop)</td><td class="bad">~0 V (near zero)</td><td class="bad">OL</td></tr>
    <tr><td>Conclusion</td><td class="ok">Healthy</td><td class="bad">Internal short - replace</td><td class="bad">Internal open - replace</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Rotating Rectifier Diodes:</strong> Must stop the alternator completely before testing. Disconnect each diode from the rotor circuit. Test individually - you cannot test while running. Stop → Isolate → Disconnect → Test.</div></div>

  <div class="n-h2">Zener Diode</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">Specially doped to operate safely in <strong>REVERSE BREAKDOWN</strong>. Maintains a CONSTANT VOLTAGE (Vz) across it regardless of current variations. Always connected in <strong>reverse bias</strong> with a series resistor to limit current.</div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Zener Breakdown Types</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Zener breakdown (&lt;5V):</strong> High electric field directly breaks covalent bonds.</li>
          <li><strong>Avalanche breakdown (&gt;7V):</strong> Carrier multiplication by collision. Both are self-sustaining at Vz.</li>
        </ul>
      </div>
    </div>
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">Ship Applications</div>
      <div class="card-desc">
        <ul class="n-list">
          <li>AVR reference voltage (stable setpoint)</li>
          <li>Control circuit power supply (5 V, 12 V)</li>
          <li>Overvoltage clamping on PCBs</li>
          <li>Zener/HART barriers in hazardous areas (IS circuits)</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Memory Aid - Zener vs Normal Diode:</strong> "Normal diode works FORWARD (opens the door). Zener works REVERSE (holds the door at fixed voltage)."</div></div>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t08-types-of-diodes.png" alt="Types of diodes — P-N junction, Zener, Schottky, Varactor, LED, photodiode symbols and applications">
    <div class="note-diagram-cap">Fig. Types of Diodes — P-N (rectifier), Zener (voltage reference), Schottky (fast switching), Varactor (variable capacitor), LED (light emission), Photodiode (light detection)</div>
  </div>

  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 2 - RECTIFIERS -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-rectifiers">2. Rectifiers &amp; Ripple Factor</div>

  <table class="n-table">
    <tr><th>TYPE</th><th>DIODES</th><th>RIPPLE FACTOR</th><th>EFFICIENCY</th><th>RIPPLE FREQ</th><th>SHIP USE</th></tr>
    <tr><td><strong>Half Wave</strong></td><td>1</td><td class="bad">1.21 (121%)</td><td class="bad">40.6%</td><td>50 Hz</td><td>Rare - trickle chargers only</td></tr>
    <tr><td><strong>Full Wave (Centre Tap)</strong></td><td>2 + CT transformer</td><td>0.482 (48.2%)</td><td>81.2%</td><td>100 Hz</td><td>Older battery chargers</td></tr>
    <tr><td><strong>Full Wave Bridge</strong></td><td>4</td><td>0.482 (48.2%)</td><td class="ok">81.2%</td><td>100 Hz</td><td>Most common - AVR feeds, chargers</td></tr>
    <tr><td><strong>3-Phase Bridge</strong></td><td>6</td><td class="ok">0.042 (4.2%)</td><td class="ok">95.4%</td><td class="ok">300 Hz</td><td>VFD DC link, large rectifier panels</td></tr>
  </table>

  <div class="n-formula">γ = V_rms(ripple) / V_dc(output)<div class="label">Ripple Factor γ - lower = smoother DC output - 3-phase bridge at 0.042 is nearly pure DC</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why 3-Phase Bridge Ripple is So Low:</strong> The 6-diode bridge (3 positive + 3 negative rail diodes) produces six output pulses per mains cycle. Ripple frequency = <span class="n-val">6 × 50 Hz = 300 Hz</span>. At 300 Hz, a small filter capacitor easily smooths the remaining ripple to produce a near-pure DC link for the VFD inverter stage.</div></div>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t08-rectifier-circuits.png" alt="Half-wave, full-wave centre-tap, and bridge rectifier circuits with output waveforms">
    <div class="note-diagram-cap">Fig. Rectifier Circuits — half-wave (1 diode), full-wave bridge (4 diodes, D1D3/D2D4 pairs), output waveform and ripple comparison</div>
  </div>

  <div class="n-h2">Full Wave Bridge - Working (Critical for Oral)</div>
  <div class="n-p"><strong>4 diodes D1–D4 in an H-bridge arrangement:</strong></div>
  <ol class="n-steps">
    <li><strong>Positive half-cycle (A+, B−):</strong> Current flows: A → D1 → Load → D3 → B. D2 &amp; D4 are reverse-biased and blocked.</li>
    <li><strong>Negative half-cycle (A−, B+):</strong> Current flows: B → D2 → Load → D4 → A. D1 &amp; D3 are now reverse-biased.</li>
    <li><strong>Result:</strong> Current flows through the load in the SAME direction on both half-cycles. Average output voltage = <span class="n-val">0.9 × V_rms</span>.</li>
  </ol>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Memory Aid - Bridge Rectifier:</strong> "D1D3 conduct on Positive half. D2D4 conduct on Negative half. Load sees same direction both times." (Think: D-1-D-3 P, D-2-D-4 N)</div></div>

  <div class="n-h2">Form Factor &amp; Useful Derived Values</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Formula</th><th>Value (Full Wave Bridge)</th></tr>
    <tr><td>Form Factor</td><td>V_rms / V_dc</td><td>1.11</td></tr>
    <tr><td>Average (DC) output</td><td>0.9 × V_rms</td><td>396 V from 440 V supply</td></tr>
    <tr><td>Peak voltage</td><td>V_rms × √2 = V_rms × 1.414</td><td>622 V from 440 V supply</td></tr>
    <tr><td>PIV (each diode)</td><td>2 × V_peak (half-wave); V_peak (bridge)</td><td>622 V for bridge diodes on 440 V</td></tr>
  </table>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 3 - TRANSISTORS -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-transistors">3. Transistors - BJT &amp; MOSFET</div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">BJT - Bipolar Junction Transistor</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Terminals:</strong> Base (B), Collector (C), Emitter (E).</li>
          <li><strong>Control:</strong> CURRENT controlled. I_C = h_FE × I_B.</li>
          <li><strong>Types:</strong> NPN (most common, current in at Base) and PNP (current out at Base).</li>
          <li><strong>Operating Regions:</strong>
            <ul class="n-list" style="margin-top:4px;">
              <li>Cutoff (OFF): V_BE &lt; 0.6 V → no I_C</li>
              <li>Active: Linear amplification region</li>
              <li>Saturation (ON): V_CE ≈ 0.2 V → fully ON</li>
            </ul>
          </li>
          <li><strong>Testing (NPN):</strong> B→E forward = 0.5–0.7 V. B→C forward = 0.5–0.7 V. C→E = OL.</li>
          <li><strong>Ship Use:</strong> Signal amplifiers, relay drivers, AVR error stages.</li>
        </ul>
      </div>
    </div>
    <div class="n-card" style="border-color:var(--purple)">
      <div class="card-title" style="color:var(--purple)">MOSFET - Metal Oxide Semiconductor FET</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Terminals:</strong> Gate (G), Drain (D), Source (S).</li>
          <li><strong>Control:</strong> VOLTAGE controlled - no gate current (insulated oxide layer).</li>
          <li><strong>Working:</strong> V_GS &gt; threshold (2–4 V) creates inversion channel → current flows Drain to Source.</li>
          <li><strong>Advantage:</strong> Extremely fast switching, no base-current drain, easy to parallel, low gate drive power.</li>
          <li><strong>Limitation:</strong> High on-resistance at high voltages (R_DS_on rises with voltage rating).</li>
          <li><strong>Ship Use:</strong> SMPS switchers (20 kHz–1 MHz), gate drive circuits, Class D audio.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t08-bjt-structure.png" alt="BJT NPN transistor structure — emitter, base, collector, depletion regions, current flow directions">
    <div class="note-diagram-cap">Fig. BJT Structure — NPN: emitter (heavily doped N), thin base (P), collector (N); I_C = β × I_B; current-controlled device; CE, CB, CC configurations</div>
  </div>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t08-mosfet-structure.png" alt="N-channel enhancement MOSFET structure — source, drain, gate oxide, inversion channel formed when V_GS exceeds threshold">
    <div class="note-diagram-cap">Fig. N-channel Enhancement MOSFET — gate oxide (SiO₂) insulates gate; V_GS &gt; V_th creates inversion channel (electrons) linking source to drain; voltage-controlled, zero gate current</div>
  </div>

  <div class="n-h2">BJT Configurations - CE, CB, CC</div>
  <table class="n-table">
    <tr><th>Config</th><th>Input</th><th>Output</th><th>Voltage Gain</th><th>Current Gain</th><th>Phase</th><th>Use</th></tr>
    <tr><td><strong>Common Emitter (CE)</strong></td><td>Base</td><td>Collector</td><td class="ok">High</td><td class="ok">High (h_FE)</td><td>180° (inverts)</td><td>General amplifiers</td></tr>
    <tr><td><strong>Common Base (CB)</strong></td><td>Emitter</td><td>Collector</td><td class="ok">High</td><td>&lt;1</td><td>0° (no inversion)</td><td>RF, high freq.</td></tr>
    <tr><td><strong>Common Collector (CC)</strong></td><td>Base</td><td>Emitter</td><td>&lt;1</td><td class="ok">High</td><td>0° (no inversion)</td><td>Emitter follower, impedance match</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Current Gain β (h_FE):</strong> Ratio of collector current to base current. Typical values: 50–300. The small base current controls the much larger collector current. Used as switch: I_B = 0 → OFF (cutoff); I_B = I_C/h_FE → ON (saturation).</div></div>


  <div class="n-h2">JFET - Junction Field Effect Transistor</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Unipolar device</strong> - conducts using only one carrier type (electrons in N-channel, holes in P-channel). No gate current flows in normal operation. Terminals: Gate (G), Drain (D), Source (S).<br><br>
  <strong>N-channel construction:</strong> Lightly-doped N-type silicon slab with Drain and Source at opposite ends. Heavily-doped P-type regions form the Gate on both sides of the slab centre, creating reverse-biased PN junctions with the channel.<br><br>
  <strong>Working principle:</strong> A natural depletion region exists at the gate junction. Applying increasing reverse bias (negative V_GS for N-channel) expands the depletion regions inward, narrowing the conductive channel and increasing its resistance - reducing drain current. The channel width is controlled by V_GS alone (voltage-controlled device).<br><br>
  <strong>Pinch-off voltage (V_P):</strong> The gate reverse-bias voltage at which the depletion regions completely close the channel. No further drain current flows - effective OFF state. Typical V_P = 2–8 V depending on device.<br><br>
  <strong>Drain current saturation:</strong> At large V_DS, the depletion region near the drain end widens and acts as a bottleneck - current saturates at I_DSS (maximum, at V_GS = 0). Increasing V_DS further does not increase current. For negative V_GS, saturation current is lower than I_DSS.</div></div>

  <table class="n-table">
    <tr><th>Parameter</th><th>JFET</th><th>MOSFET</th></tr>
    <tr><td>Gate isolation</td><td>Reverse-biased PN junction - small leakage current possible</td><td class="ok">Oxide insulation - virtually zero gate current</td></tr>
    <tr><td>Control type</td><td>Depletion mode only (ON at V_GS = 0, turned OFF by reverse bias)</td><td>Enhancement (OFF at V_GS = 0) or depletion</td></tr>
    <tr><td>Input impedance</td><td class="ok">Very high (10⁷–10⁹ Ω)</td><td class="ok">Extremely high (10¹⁰–10¹² Ω)</td></tr>
    <tr><td>Noise</td><td class="ok">Very low - preferred for sensitive pre-amplifiers</td><td>Low</td></tr>
    <tr><td>Power rating</td><td class="bad">Signal-level only - low power</td><td class="ok">High power switching (VFDs, SMPS)</td></tr>
    <tr><td>Ship use</td><td>Low-noise front-end of GMDSS radio receivers, O₂/pH sensor signal conditioning</td><td>SMPS switchers, IGBT gate drive circuits</td></tr>
  </table>

  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 4 - THYRISTOR & IGBT -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-thyristors">4. Thyristor (SCR) &amp; IGBT</div>

  <div class="n-h2">Thyristor (SCR) - Silicon Controlled Rectifier</div>
  <div class="n-p"><strong>4-layer PNPN device. Terminals: Anode (A), Cathode (K), Gate (G).</strong></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Turning ON - Two Conditions Required</div>
      <div class="card-desc">
        <ol class="n-steps">
          <li>Anode must be forward-biased (Anode + w.r.t. Cathode)</li>
          <li>A short positive Gate pulse applied to trigger firing</li>
        </ol>
        Once these conditions are met → SCR latches ON.
      </div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">Turning OFF - Gate LOSES Control After Firing</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Natural commutation:</strong> In AC circuits, current naturally reaches zero at every half-cycle → SCR turns OFF automatically.</li>
          <li><strong>Forced commutation:</strong> In DC circuits, an external circuit (LC or capacitor pulse) momentarily drives anode current below holding current (I_h).</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Key SCR Fact - Latching:</strong> Once fired, the Gate LOSES ALL CONTROL. The SCR remains ON until anode current falls below the Holding Current (I_h) - typically a few milliamps. This is why SCRs cannot be used in PWM inverters that need rapid ON/OFF switching.</div></div>

  <div class="n-h2">Firing Angle Control</div>
  <table class="n-table">
    <tr><th>Firing Angle (α)</th><th>Conduction Period</th><th>Average Output Voltage</th><th>Application</th></tr>
    <tr><td>α = 0°</td><td class="ok">Maximum (half-cycle)</td><td class="ok">Full output (0.9 Vrms)</td><td>Full power demand</td></tr>
    <tr><td>α = 90°</td><td>Quarter-cycle</td><td>~50% output</td><td>Half-power operation</td></tr>
    <tr><td>α = 150°</td><td>Small pulse only</td><td>Minimum output</td><td>Soft start / low speed</td></tr>
    <tr><td>α = 180°</td><td class="bad">Zero (no conduction)</td><td class="bad">Zero output</td><td>Fully OFF</td></tr>
  </table>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t08-scr-thyristor.png" alt="SCR thyristor structure — PNPN four-layer device, anode, cathode, gate trigger, latching characteristic">
    <div class="note-diagram-cap">Fig. SCR (Thyristor) — PNPN four-layer structure; gate pulse fires when anode is forward-biased; latches ON until I_A falls below holding current I_h; firing angle α controls output voltage</div>
  </div>

  <div class="n-p"><strong>Ship Applications of SCR:</strong> Soft starters (slow motor acceleration), battery chargers, AVR excitation control, DC motor speed controllers, electro-hydraulic thrusters.</div>

  <div class="n-h2">IGBT - Insulated Gate Bipolar Transistor</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">IGBT = <strong>MOSFET input</strong> (voltage controlled, high impedance, fast) + <strong>BJT output</strong> (low V_CE(sat) of 1.5–3 V, handles high current). Best of both worlds for high-power fast-switching.</div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">IGBT Turn-ON</div>
      <div class="card-desc">Apply V_GE &gt; <span class="n-val">+15 V</span> to the Gate. Channel forms immediately. Conducts. <em>No latching.</em></div>
    </div>
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">IGBT Turn-OFF</div>
      <div class="card-desc">Apply V_GE &lt; <span class="n-val">0 V</span> (usually −15 V) to remove the channel. Turns OFF completely - <em>no commutation circuit needed.</em></div>
    </div>
  </div>

  <ul class="n-list">
    <li><strong>Switching speed:</strong> Up to 50 kHz (practical VFD: 2–20 kHz PWM carrier).</li>
    <li><strong>Voltage ratings:</strong> 600 V to 6.5 kV - suitable for 440 V, 3.3 kV, 6.6 kV ship systems.</li>
    <li><strong>VFD Use:</strong> 6 IGBTs in 3-phase bridge configuration switch the DC link to create variable-frequency variable-voltage AC output using PWM.</li>
    <li><strong>Why NOT a thyristor in VFD inverter:</strong> The inverter section runs on DC - there is no zero crossing to achieve natural commutation. An SCR would latch ON permanently. IGBT turns OFF on command.</li>
  </ul>

  <div class="n-h2">IGBT Testing with a Multimeter - 4-Step Procedure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyor Q (Kamath, Deswal): "How do you test an IGBT with a multimeter?"</strong> Know all four checks, especially the gate-oxide test - this distinguishes a faulty IGBT from a good one.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Pre-test:</strong> De-energise the circuit completely. Discharge all capacitors (DC link). Disconnect the IGBT from the circuit board - never test in-circuit.<br><br>
  <strong>Step 1 - Collector to Emitter (C→E):</strong> Set multimeter to diode-test mode. Place red probe on C, black on E. Reading should be <strong>open-circuit (OL / ∞)</strong> - no internal diode in this direction. A low resistance reading = collector-emitter short → IGBT failed.<br><br>
  <strong>Step 2 - Emitter to Collector (E→C):</strong> Reverse probes - red on E, black on C. Should read a <strong>forward-biased diode voltage (~0.5–0.7 V)</strong> - this is the reverse body diode (anti-parallel freewheeling diode) built into the IGBT package. This reading is correct and expected.<br><br>
  <strong>Step 3 - Gate to Emitter (G→E):</strong> Red on G, black on E, then reverse. <strong>Both directions must read OL (infinity)</strong> - the gate oxide must be a perfect insulator. Any measurable resistance or diode reading = gate oxide breakdown → IGBT is destroyed and must be replaced.<br><br>
  <strong>Step 4 - Gate to Collector (G→C):</strong> Same as Step 3 - red on G, black on C, then reverse. <strong>Both directions must read OL (infinity)</strong>. Any conduction = internal gate-to-collector short → failed.<br><br>
  <strong>Summary:</strong> A healthy IGBT shows: C→E = OL · E→C = ~0.6 V · G→E = OL both ways · G→C = OL both ways.</div></div>

  <div class="n-h2">DIAC and TRIAC</div>
  <div class="n-grid">
    <div class="n-card">
      <div class="card-title">DIAC</div>
      <div class="card-desc">Bidirectional trigger diode. Conducts in EITHER direction once breakover voltage (~30 V) is reached. Used to trigger TRIACs at a precise point in the AC cycle.</div>
    </div>
    <div class="n-card">
      <div class="card-title">TRIAC</div>
      <div class="card-desc">Bidirectional SCR - conducts on BOTH half-cycles of AC. Can be triggered in all four quadrants. Used in AC lamp dimmers, heating controls, fan speed regulators on ships.</div>
    </div>
  </div>

  <div class="n-h2">IGCT - Integrated Gate-Commutated Thyristor</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">A <strong>hard-driven GTO</strong> with its gate-drive unit built into the device package. At turn-off the whole cathode current is momentarily diverted through the gate, so it switches off almost instantly with very low storage time. It combines the <strong>low conduction loss of a thyristor</strong> with near <strong>IGBT-like switching speed</strong> - it sits between the GTO and the IGBT. Used in <strong>medium-voltage drives and electric-propulsion converters</strong> (multi-MW); rugged and allows snubberless turn-off.</div></div>

  <div class="n-h2">Snubber Circuit</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">A small <strong>R-C network (sometimes with a diode)</strong> connected across a thyristor / IGBT / power switch. It limits the <strong>rate of rise of voltage (dv/dt)</strong> and absorbs the turn-off voltage spike caused by circuit inductance, preventing <strong>false triggering</strong> and device breakdown. Fitted across SCRs in converters, across VFD inverter switches, and across contactor coils. (See also the surge-suppression zener across the rotating diode wheel in Topic 1.)</div></div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 5 - TRANSISTOR COMPARISON MATRIX -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-transistor-matrix">5. Power Transistor Comparison - BJT vs MOSFET vs IGBT vs SCR</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors (Deswal, Kamath) frequently ask: "Why is IGBT used in VFDs instead of BJT or SCR? Compare all power devices."</strong></div></div>

  <table class="n-table">
    <tr><th>Feature</th><th>BJT</th><th>MOSFET</th><th>IGBT</th><th>SCR (Thyristor)</th></tr>
    <tr><td>Control type</td><td>Current (I_B)</td><td class="ok">Voltage (V_GS)</td><td class="ok">Voltage (V_GE)</td><td>Current pulse (Gate)</td></tr>
    <tr><td>Turn-OFF method</td><td>Remove I_B</td><td class="ok">Remove V_GS</td><td class="ok">Apply V_GE &lt; 0</td><td class="bad">Natural / Forced commutation only</td></tr>
    <tr><td>Input impedance</td><td class="bad">Low - base current needed</td><td class="ok">Very high - no gate current</td><td class="ok">Very high - insulated gate</td><td class="bad">Low - needs trigger current</td></tr>
    <tr><td>Latching</td><td class="ok">No</td><td class="ok">No</td><td class="ok">No</td><td class="bad">YES - latches ON after gate pulse</td></tr>
    <tr><td>Switching freq.</td><td>Moderate (&lt;100 kHz)</td><td class="ok">Very fast (1–100 MHz)</td><td>Fast (1–50 kHz)</td><td class="bad">Very slow (line freq. max)</td></tr>
    <tr><td>Voltage rating</td><td>Low–medium (&lt;500 V)</td><td>Low–medium (&lt;1000 V)</td><td class="ok">High (600 V–6.5 kV)</td><td class="ok">Very high (up to 10 kV)</td></tr>
    <tr><td>On-state losses</td><td class="ok">Low (V_CE_sat ≈ 0.2 V)</td><td>High R_DS_on at HV</td><td class="ok">Low (1.5–3 V)</td><td class="ok">Very low (V_T ≈ 1–2 V)</td></tr>
    <tr><td>Gate drive complexity</td><td>High (current source needed)</td><td class="ok">Simple voltage</td><td class="ok">Simple ±15 V</td><td>Medium (pulse circuit)</td></tr>
    <tr><td>Ship application</td><td>Signal amps, relay drivers</td><td>SMPS, gate drive</td><td class="ok">VFD inverters, UPS, propulsion</td><td>Soft starters, AVR, chargers, cycloconverters</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why IGBT wins for VFDs:</strong> VFD inverters need (1) HIGH voltage/current → BJT &amp; MOSFET fall short; (2) FAST gate-controlled turn-off → SCR fails here; (3) LOW drive power → BJT fails here; (4) LOW on-state losses → MOSFET fails at high voltage. IGBT satisfies ALL four requirements simultaneously.</div></div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 6 - CYCLOCONVERTER -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-cyclo">6. Cycloconverter</div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body">Converts AC power directly to AC power at a DIFFERENT (lower) frequency - <strong>WITHOUT an intermediate DC link.</strong> No rectification. No inversion. Direct frequency synthesis.</div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">How It Works</div>
      <div class="card-desc">Uses back-to-back thyristor groups (positive converter P-group + negative converter N-group per phase). Each group selects voltage segments from the 3-phase mains to synthesise the lower-frequency output waveform by phase-angle control of firing pulses.</div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">Critical Limitations</div>
      <div class="card-desc">
        <ul class="n-list">
          <li>Output frequency max ≈ <span class="n-val">1/3 of input</span> (0–16 Hz from 50 Hz supply)</li>
          <li>Large number of thyristors (36 per 3-phase output)</li>
          <li>Poor power factor at light load</li>
          <li>Complex control</li>
        </ul>
      </div>
    </div>
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Advantages</div>
      <div class="card-desc">
        <ul class="n-list">
          <li>Natural commutation - very low switching losses</li>
          <li>Full torque at 0 Hz (DC torque capability)</li>
          <li>Regenerative capability (power can flow back to grid)</li>
          <li>High efficiency at rated load</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="n-p"><strong>Ship Application:</strong> Large low-speed synchronous motors on LNG carriers and icebreakers for direct-drive propulsion. No gearbox required. Motor runs at <span class="n-val">0–16 rpm equivalent</span> electrical speed. Full torque available from standstill - ideal for ice-breaking where hull resistance is maximum at low speed.</div>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t08-cycloconverter.png" alt="Cycloconverter — back-to-back thyristor P and N groups per phase, synthesising lower-frequency AC output directly from 3-phase mains">
    <div class="note-diagram-cap">Fig. Cycloconverter — P-group and N-group thyristors per output phase; firing angle control synthesises low-frequency AC directly from mains; no DC link; output max ≈ ⅓ input frequency</div>
  </div>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Memory Aid - Cycloconverter vs VFD:</strong> "CycloConverter = <strong>C</strong>uts (thyristors) segments directly. <strong>C</strong>annot go above 1/3 freq. <strong>C</strong>argo ships (LNG, icebreakers)." No DC link. No IGBTs. All thyristors. Slow and powerful.</div></div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 7 - SYNCHROCONVERTER -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-synchroconv">7. Synchroconverter (Line-Commutated Drive)</div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Different from PWM/IGBT VFD:</strong> A synchroconverter uses fully-controlled thyristor stages at BOTH rectifier and inverter ends. Natural (line) commutation only. No forced turn-off circuits. No PWM.</div></div>

  <div class="n-p"><strong>Power Flow:</strong> 3-phase AC mains → Controlled thyristor RECTIFIER (varies DC voltage/current) → DC link reactor (smoothing inductance → current source) → Thyristor INVERTER (commutates current into motor windings sequentially) → Synchronous AC motor.</div>

  <table class="n-table">
    <tr><th>Feature</th><th>Synchroconverter (Thyristor Drive)</th><th>PWM Drive (IGBT VFD)</th></tr>
    <tr><td>Commutation method</td><td>Natural (line commutation)</td><td class="ok">Forced (gate turn-off)</td></tr>
    <tr><td>DC link type</td><td>Current source (DC reactor)</td><td>Voltage source (DC capacitor)</td></tr>
    <tr><td>Switching frequency</td><td class="bad">Low (6 pulses/cycle)</td><td class="ok">1–20 kHz PWM</td></tr>
    <tr><td>Output frequency range</td><td>Variable (high power)</td><td class="ok">0–100+ Hz</td></tr>
    <tr><td>Power regeneration</td><td class="ok">Yes (thyristors, inherent)</td><td>Requires extra active front end</td></tr>
    <tr><td>Motor type</td><td>Synchronous (wound-rotor)</td><td>Induction or synchronous</td></tr>
    <tr><td>Ship application</td><td>Large shaft generators, older large drives (LNG, bulk carriers)</td><td class="ok">General purpose all motor drives</td></tr>
  </table>

  <ul class="n-list">
    <li><strong>Motor speed:</strong> Determined by inverter switching rate (how fast thyristors sequence current into motor windings).</li>
    <li><strong>Motor torque:</strong> Controlled by DC link current magnitude - set by rectifier thyristor firing angle (α).</li>
    <li><strong>Torque formula:</strong> Torque ∝ DC link current × motor flux. Adjusting α → adjusts DC current → adjusts torque.</li>
    <li><strong>Six-pulse output:</strong> Six thyristors provide six current pulses per cycle, creating the motor's rotating magnetic field.</li>
  </ul>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 8 - OPTOCOUPLERS -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-opto">8. Optocouplers &amp; Commutators</div>

  <div class="n-h2">Optocoupler (Opto-Isolator)</div>
  <div class="n-p">Transfers electrical signals using <strong>LIGHT</strong>, providing complete electrical isolation. Internal structure: LED on input side emits infrared light when current flows → phototransistor or photodiode on output side detects the light and conducts.</div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">Why Optocouplers Are Used</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Electrical isolation:</strong> Input and output circuits are 100% electrically isolated (no conductive path) - critical for safety in hazardous areas.</li>
          <li><strong>Noise rejection:</strong> Eliminates ground loops - high-power drive noise cannot enter sensitive PLC logic circuits.</li>
          <li><strong>Level shifting:</strong> Interface between 5 V PLC logic and 24 V control circuits without voltage damage.</li>
          <li><strong>Protection:</strong> Protects expensive PLC inputs from voltage transients on field wiring.</li>
        </ul>
      </div>
    </div>
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Ship Applications</div>
      <div class="card-desc">
        <ul class="n-list">
          <li>PLC digital I/O interfaces (isolates logic from field)</li>
          <li>VFD run/stop signals from automation controller</li>
          <li>IGBT gate drive circuits (isolates high-voltage bus from control board)</li>
          <li>HART/Zener barrier output isolation</li>
          <li>Alarm system field contacts to monitoring computer</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t08-optocoupler.png" alt="Optocoupler — LED on input side emits IR light, phototransistor on output side conducts, complete electrical isolation">
    <div class="note-diagram-cap">Fig. Optocoupler (Opto-Isolator) — LED emits IR when input current flows; phototransistor conducts proportionally; no conductive path between input and output; typical isolation 2.5–5 kV</div>
  </div>

  <div class="n-h2">Isolation Amplifier</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Isolation Amplifier:</strong> An amplifier where input and output are fully galvanically isolated (typically via optocoupler, transformer, or capacitive coupling inside the IC). Provides signal amplification plus isolation simultaneously. Used on ships for: (1) measuring voltages in high-voltage DC bus circuits without exposing the measurement system to bus voltage, (2) 4–20 mA signal transmission across large potential differences (engine room to bridge), (3) protection in hazardous area sensor interfaces where intrinsic safety is required. Key spec: isolation voltage (typically 2.5 kV to 5 kV working). Examples: ISO124, AD210 ICs.</div></div>

  <div class="n-h2">Commutator (DC Machines)</div>
  <div class="n-p">Mechanical switch on rotor shaft: copper segments with carbon brush contacts. <strong>In DC Motor:</strong> Reverses current direction in each armature coil as it passes through the brush contact zone - ensures consistent torque direction regardless of rotor position. <strong>In DC Generator:</strong> Rectifies the generated AC voltage to DC at the brushes - converts alternating EMF in rotating coils to unidirectional output.</div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 9 - AMPLIFIERS -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-amplifiers">9. Amplifier Classes &amp; Op-Amps</div>

  <div class="n-h2">Amplifier Class Comparison</div>
  <table class="n-table">
    <tr><th>CLASS</th><th>CONDUCTION ANGLE</th><th>Q-POINT</th><th>EFFICIENCY</th><th>DISTORTION</th><th>SHIP/MARINE USE</th></tr>
    <tr><td><strong>A</strong></td><td>360° (full cycle)</td><td>Mid-point active region</td><td class="bad">Max 25–30%</td><td class="ok">Very low (linear)</td><td>Precision audio, PA system pre-amp, medical sensors</td></tr>
    <tr><td><strong>B</strong></td><td>180° (one half-cycle each transistor)</td><td>Cut-off</td><td>Up to 78.5%</td><td class="bad">Crossover notch distortion</td><td>Rarely used alone</td></tr>
    <tr><td><strong>AB</strong></td><td>Slightly &gt;180°</td><td>Just above cut-off</td><td>Good (~70%)</td><td class="ok">Low (crossover eliminated)</td><td>Audio PA systems, ship public address</td></tr>
    <tr><td><strong>C</strong></td><td>&lt;180° (peaks only)</td><td>Beyond cut-off</td><td class="ok">Up to 90%</td><td class="bad">Severe (needs tuned circuit)</td><td>RF transmitters (GMDSS, VHF, radar)</td></tr>
    <tr><td><strong>D</strong></td><td>Switching (PWM on/off)</td><td>Switch - no linear Q</td><td class="ok">95–98%</td><td>Needs LC output filter</td><td>Modern PA amplifiers, subwoofers, Class D</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Crossover Distortion (Class B issue):</strong> Near the 0 V zero-crossing, both NPN and PNP output transistors are OFF simultaneously for a brief instant. Output flatlines near zero → "notch" in waveform. <strong>Fix in Class AB:</strong> Add a small forward bias (~0.6 V from a diode or VBE multiplier) to both transistors so they are just barely conducting at zero-crossing - eliminates the dead zone.</div></div>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Memory Aid - Amplifier Classes:</strong><br>
  <strong>A</strong> = Always conducting (360°, clean but hot)<br>
  <strong>B</strong> = Both off at zero (180° each, efficient but notch distortion)<br>
  <strong>AB</strong> = Almost both on (between A &amp; B, audio standard)<br>
  <strong>C</strong> = Clips massively (peaks only, RF tuned circuits)<br>
  <strong>D</strong> = Digital switching (PWM, most efficient)</div></div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 10 - GRID BIAS -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-grid-bias">10. Grid Bias Voltage</div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Grid Bias:</strong> A fixed DC voltage applied to the control grid of a vacuum tube (valve/thermionic valve) to set its quiescent operating point (Q-point). Determines the class of amplification: Class A requires bias in the middle of the active region; Class B biases at cut-off; Class C biases beyond cut-off.</div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Vacuum Tube Grid Bias</div>
      <div class="card-desc">
        <ul class="n-list">
          <li>Control grid is maintained at a fixed negative voltage relative to cathode.</li>
          <li>More negative bias → less anode current → higher Q-point toward cut-off.</li>
          <li>Keeps the tube conducting continuously for linear (Class A) operation.</li>
          <li>Grid bias supply failure → uncontrolled anode current → valve burnout risk.</li>
        </ul>
      </div>
    </div>
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">Modern Equivalent - Transistor Biasing</div>
      <div class="card-desc">
        <ul class="n-list">
          <li>Voltage divider bias (R1, R2 from supply) sets V_BE ≈ 0.6–0.7 V on BJT base.</li>
          <li>Emitter resistor provides self-bias stability (negative feedback).</li>
          <li>Same function as grid bias: sets Q-point for linear operation.</li>
          <li>Ship application: older radar and radio transmitters used valve technology where grid bias supplies were critical maintenance items.</li>
        </ul>
      </div>
    </div>
  </div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 11 - OP-AMP -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-opamp-iv">11. Operational Amplifier (Op-Amp) &amp; I/V Converter</div>

  <div class="n-h2">Op-Amp Configurations</div>
  <table class="n-table">
    <tr><th>Configuration</th><th>Gain Formula</th><th>Phase Shift</th><th>Ship Application</th></tr>
    <tr><td><strong>Inverting</strong></td><td>A = −R_f / R_in</td><td>180° (inverts signal)</td><td>Signal conditioning (reverses polarity)</td></tr>
    <tr><td><strong>Non-Inverting</strong></td><td>A = 1 + R_f / R_in</td><td>0° (same phase)</td><td>Buffer amplifiers, AVR error stage</td></tr>
    <tr><td><strong>Unity Gain Buffer</strong></td><td>A = 1 (R_f = 0, R_in = ∞)</td><td>0°</td><td>Impedance matching, sensor isolation</td></tr>
    <tr><td><strong>Differential</strong></td><td>A = R_f/R_in × (V₂ − V₁)</td><td>Depends on input</td><td>Wheatstone bridge interface, error detection</td></tr>
    <tr><td><strong>Integrator</strong></td><td>V_out = −1/(RC) ∫V_in dt</td><td>−90°</td><td>PID controller integral term</td></tr>
    <tr><td><strong>Comparator</strong></td><td>HIGH if V+ &gt; V−; LOW if V+ &lt; V−</td><td>N/A</td><td>Overvoltage alarm, AVR threshold detection</td></tr>
  </table>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t08-opamp-circuits.png" alt="Op-amp configurations — inverting, non-inverting, differential amplifier, I/V converter">
    <div class="note-diagram-cap">Fig. Op-Amp Configurations — inverting (−Rf/Rin), non-inverting (1+Rf/Rin), differential, integrator, and I/V converter (transimpedance)</div>
  </div>

  <div class="n-h2">Current-to-Voltage (I/V) Converter - 4–20 mA to Voltage</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Application:</strong> Many analogue inputs (PLC, DCS, ADC) can only read voltage, not current. An op-amp with a feedback resistor converts the 4–20 mA loop signal to a proportional voltage. The op-amp's virtual earth (inverting input held at 0 V by feedback) forces all input current through R_f.</div></div>

  <div class="n-formula">V_out = I_in × R_f<div class="label">Output voltage · I_in = input current · R_f = feedback resistance (transimpedance amplifier)</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>HART Loop Example:</strong> 4–20 mA across a 250 Ω resistor (standard HART burden):<br>
  At 4 mA (0% span): 0.004 × 250 = <span class="n-val">1.0 V</span><br>
  At 20 mA (100% span): 0.020 × 250 = <span class="n-val">5.0 V</span><br>
  This gives a standard 1–5 V range at the analogue input card. The op-amp I/V stage produces this voltage from the loop current.</div></div>

  <div class="n-p"><strong>Op-Amp in AVR:</strong> The error amplifier stage in a shipboard AVR uses an op-amp comparator. V+ = sensed terminal voltage (rectified &amp; scaled). V− = Zener reference (desired voltage setpoint). Op-amp output error signal drives the SCR firing angle - more error → earlier firing → more field excitation → higher output voltage.</div>

  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 12 - LOGIC & DIGITAL -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-digital">12. Logic Gates, Digital System &amp; D/A Resolution</div>

  <div class="n-h2">Logic Gate Functions</div>
  <table class="n-table">
    <tr><th>Gate</th><th>Symbol Rule</th><th>Truth (2-input)</th><th>Ship Application Example</th></tr>
    <tr><td><strong>AND</strong></td><td>Output HIGH only if ALL inputs HIGH</td><td>0·0=0, 0·1=0, 1·1=1</td><td>Motor start interlock (both guards closed AND contactor energised)</td></tr>
    <tr><td><strong>OR</strong></td><td>Output HIGH if ANY input HIGH</td><td>0+0=0, 0+1=1, 1+1=1</td><td>Alarm activation from multiple sensors (bilge level OR smoke)</td></tr>
    <tr><td><strong>NOT</strong></td><td>Output = inversion of input</td><td>NOT 0=1, NOT 1=0</td><td>Normally-closed contact logic inversion</td></tr>
    <tr><td><strong>NAND</strong></td><td>NOT AND - inverted AND output (universal)</td><td>0·0=1, 1·1=0</td><td>Any logic (NAND alone can build all other gates)</td></tr>
    <tr><td><strong>NOR</strong></td><td>NOT OR - inverted OR output (universal)</td><td>0+0=1, 0+1=0</td><td>Any logic (NOR alone can build all other gates)</td></tr>
    <tr><td><strong>XOR</strong></td><td>Output HIGH if inputs DIFFERENT</td><td>0⊕0=0, 1⊕1=0, 0⊕1=1</td><td>Parity checking, comparator circuits</td></tr>
  </table>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t08-all-gates.png" alt="Logic gate symbols — AND, OR, NOT, NAND, NOR, XOR with truth tables">
    <div class="note-diagram-cap">Fig. Logic Gate Symbols — AND (D-shape), OR (curved), NOT (triangle + bubble), NAND/NOR (universal gates with inversion bubble), XOR (curved with extra arc)</div>
  </div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>De Morgan's Theorem:</strong> NOT(A AND B) = NOT A OR NOT B - i.e. NAND(A,B) = NOR(NOT A, NOT B). Allows logic circuit simplification and conversion between gate types. A NAND gate with both inputs tied together = a NOT gate.</div></div>

  <div class="n-h2">Binary &amp; Number Systems</div>
  <div class="n-p">1 byte = 8 bits → values 0–255 (decimal). Hexadecimal (base 16): digits 0–9, A–F. Example: 0xFF = 255 decimal = 11111111 binary. Used in PLC registers, MODBUS addresses, fault codes.</div>

  <div class="n-h2">Digital vs Analogue I/O - Resolution &amp; Quantisation</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">ADC Resolution</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>8-bit ADC:</strong> 2⁸ = 256 steps. On 0–10 V range: 1 step = 10/256 = <span class="n-val">39.1 mV</span>. Suitable for basic on/off sensing.</li>
          <li><strong>12-bit ADC:</strong> 2¹² = 4096 steps. On 0–10 V range: 1 step = 10/4096 = <span class="n-val">2.4 mV</span>. Standard for 4–20 mA PLC I/O modules.</li>
          <li><strong>16-bit ADC:</strong> 65,536 steps. Resolution ≈ 0.15 mV. Used in precision temperature, flow, and navigation instruments.</li>
        </ul>
      </div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Quantisation Error</div>
      <div class="card-desc">
        <ul class="n-list">
          <li>Error introduced because analogue values are rounded to nearest discrete digital step.</li>
          <li>Maximum quantisation error = ±½ LSB (Least Significant Bit).</li>
          <li>For 12-bit on 10 V range: max error = ±1.2 mV.</li>
          <li>Cannot be eliminated - fundamental to digital conversion. Minimised by using higher resolution ADC.</li>
          <li>Ship impact: Temperature sensors using 8-bit vs 16-bit show very different accuracy on trend displays.</li>
        </ul>
      </div>
    </div>
  </div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 13 - SMPS -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-smps">13. Switch Mode Power Supply (SMPS)</div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">SMPS (Switch Mode)</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Working:</strong> Rectify AC → DC → MOSFET switches at HF (20 kHz–1 MHz) → small HF transformer → rectify/filter → smooth DC output. PWM feedback loop regulates output.</li>
          <li><strong>Efficiency:</strong> 70–90% (heat is minimal).</li>
          <li><strong>Pros:</strong> Small, lightweight, wide input range (universal 85–264 V AC).</li>
          <li><strong>Cons:</strong> Generates EMI (switching noise at carrier and harmonics), complex design.</li>
          <li><strong>Ship Use:</strong> 24 V control supplies, battery chargers, PLC power rails, navigation electronics.</li>
        </ul>
      </div>
    </div>
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Linear Power Supply (Comparison)</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Working:</strong> Series pass transistor drops excess voltage as heat. Heavy 50 Hz transformer. No high-frequency switching.</li>
          <li><strong>Efficiency:</strong> 30–60% (wastes power as heat).</li>
          <li><strong>Pros:</strong> Very clean output, no EMI generated, simple design.</li>
          <li><strong>Cons:</strong> Heavy, hot, large, poor efficiency.</li>
          <li><strong>Ship Use:</strong> Precision analog instrumentation circuits, audio, metrology.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="n-h2">SMPS Topologies</div>
  <table class="n-table">
    <tr><th>Topology</th><th>Output vs Input</th><th>Isolation</th><th>Ship Use</th></tr>
    <tr><td><strong>Buck (Step-Down)</strong></td><td>V_out &lt; V_in</td><td>No</td><td>24 V from 48 V battery bus</td></tr>
    <tr><td><strong>Boost (Step-Up)</strong></td><td>V_out &gt; V_in</td><td>No</td><td>Emergency lighting boost converters</td></tr>
    <tr><td><strong>Buck-Boost</strong></td><td>V_out = variable</td><td>No</td><td>UPS output regulation</td></tr>
    <tr><td><strong>Flyback</strong></td><td>Variable</td><td class="ok">Yes (transformer isolation)</td><td>Multi-output PSU (5 V + 12 V + 24 V from one unit)</td></tr>
    <tr><td><strong>Forward Converter</strong></td><td>V_out &lt; V_in</td><td class="ok">Yes</td><td>High-power isolated supplies (&gt;150 W)</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why High Switching Frequency Helps:</strong> Transformer and inductor size is inversely proportional to frequency (V = N × dΦ/dt). At 100 kHz instead of 50 Hz, the transformer can be 2000× smaller for the same power throughput. This is why an SMPS charger fits in your palm while a 50 Hz transformer charger of the same rating would be the size of a toolbox.</div></div>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t08-smps.png" alt="SMPS block diagram — AC input, rectifier/filter, HF MOSFET switch, HF transformer, output rectifier, PWM feedback loop">
    <div class="note-diagram-cap">Fig. SMPS Block Diagram — AC mains → rectify to DC → MOSFET switches at 20–100 kHz → HF transformer (small/light) → output rectify/filter → PWM controller closes feedback loop to regulate output voltage</div>
  </div>

  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 14 - VFD & IGBT -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-vfd-igbt">14. VFD with IGBT - Operation, PWM &amp; Motor Impact</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Can SCR replace IGBT in a VFD Inverter?</strong> NO. SCR requires natural commutation (AC zero crossing) to turn off. VFD inverter runs from the DC bus - SCR would latch ON forever with no commutation. IGBT is gate-controlled OFF - essential for PWM.</div></div>

  <div class="n-h2">VFD Block Diagram - 3 Stages</div>
  <ol class="n-steps">
    <li><strong>RECTIFIER:</strong> 6-diode 3-phase bridge converts 440 V AC to ~600 V DC (uncontrolled). Ripple factor 0.042. Filter capacitors smooth the DC bus voltage.</li>
    <li><strong>DC LINK:</strong> Capacitor bank stores energy. Voltage typically 600–700 V DC for a 440 V system (= 440 × √2). Acts as voltage source reservoir.</li>
    <li><strong>INVERTER:</strong> 6 IGBTs in 3-phase bridge. PWM switching at 2–16 kHz carrier frequency produces variable-frequency variable-voltage output to motor.</li>
  </ol>

  <div class="n-h2">PWM - How Variable Frequency Is Produced</div>
  <div class="n-p">The IGBT inverter produces a series of variable-width ON/OFF pulses. The pulse width is modulated (PWM) so that the <em>average</em> voltage over each cycle follows a sinusoidal reference. Carrier frequency (switching frequency) is 2–16 kHz. Motor's inductive winding integrates the pulses into a near-sinusoidal current.</div>

  <table class="n-table">
    <tr><th>Carrier Frequency</th><th>Motor Noise</th><th>Switching Losses</th><th>Motor Heating</th></tr>
    <tr><td class="bad">2 kHz (low)</td><td class="bad">Audible whine</td><td class="ok">Low</td><td>Moderate</td></tr>
    <tr><td>8 kHz (typical)</td><td class="ok">Above hearing</td><td>Moderate</td><td class="ok">Lower</td></tr>
    <tr><td class="ok">16 kHz (high)</td><td class="ok">Silent</td><td class="bad">High (IGBT heats up)</td><td class="ok">Minimum</td></tr>
  </table>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 15 - HALL EFFECT SENSOR (NEW) -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-hall-effect">15. Hall Effect Sensor</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Examiners ask:</strong> "How does a VFD measure motor current without contact?" and "What is a non-contact current measurement method?" - Answer: Hall effect sensor.</div></div>

  <div class="n-h2">Principle</div>
  <div class="n-p">When a current-carrying conductor is placed in a magnetic field perpendicular to the current flow, a voltage (<strong>Hall voltage, V_H</strong>) is developed across the conductor perpendicular to both the current and the magnetic field. This voltage is proportional to the product of the current and the field strength.</div>

  <div class="n-formula">V_H = (I × B) / (n × e × t)<div class="label">V_H = Hall voltage · I = current through conductor · B = magnetic flux density · n = carrier density · e = electron charge · t = thickness</div></div>

  <div class="n-h2">Hall Effect Current Transformer (HECT)</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">Construction &amp; Operation</div>
      <div class="card-desc">
        <ul class="n-list">
          <li>Current-carrying conductor (the cable being measured) passes through a toroidal ferrite core - no electrical connection needed.</li>
          <li>Hall effect sensor element is placed in a small gap in the toroid core.</li>
          <li>The primary current creates a magnetic flux in the core.</li>
          <li>Hall sensor detects this flux and outputs a proportional voltage or current signal.</li>
          <li>Closed-loop HECT includes a compensation winding that nulls the core flux → very high accuracy and bandwidth.</li>
        </ul>
      </div>
    </div>
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Advantages Over Standard CT</div>
      <div class="card-desc">
        <ul class="n-list">
          <li>Measures DC current - conventional CT cannot (no changing flux with DC)</li>
          <li>No electrical contact with measured circuit - galvanic isolation</li>
          <li>Measures both AC and DC on same device</li>
          <li>Wide bandwidth (DC to 200 kHz) - captures PWM harmonics</li>
          <li>Output signal available as ±10 V or 4–20 mA</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="n-h2">Ship Applications of Hall Effect Sensors</div>
  <ul class="n-list">
    <li><strong>VFD current measurement:</strong> Hall effect sensors in VFD feedback measure motor phase current for overcurrent protection and torque control - the only way to measure DC link current and PWM current simultaneously.</li>
    <li><strong>Shaft/position sensing:</strong> Hall effect switches detect ferromagnetic teeth on rotating shafts - used in RPM measurement, shaft encoder backup, diesel engine crankshaft position.</li>
    <li><strong>Battery current monitoring:</strong> Non-contact measurement of battery charge/discharge current on ESDs (Energy Storage Devices) in hybrid propulsion systems.</li>
    <li><strong>Busbar current measurement:</strong> On high-current busbars (main switchboard), HECT avoids inserting conventional CT into bus - clamp-on measurement only.</li>
  </ul>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Memory Aid:</strong> "Hall effect = Magnetic Hall of Fame - measures current from outside the wire. Like a VIP watching traffic from the balcony, never on the road." DC current? Hall can. AC current? Hall can. No contact? Hall can. CT cannot do DC - Hall can.</div></div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 16 - PWM HARMONICS (NEW) -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-pwm-harmonics">16. PWM Harmonics &amp; Effect on Motor Insulation</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Examiner question:</strong> "What is the effect of a VFD on motor insulation?" This is heavily asked by Deswal and Kamath. Full answer required.</div></div>

  <div class="n-h2">PWM Waveform Harmonic Content</div>
  <div class="n-p">A PWM waveform is NOT a pure sine wave - it consists of the fundamental frequency (e.g. 50 Hz) PLUS a large number of harmonic frequencies (multiples of the carrier frequency). Example: 8 kHz carrier with 50 Hz fundamental produces harmonics at 8 kHz, 16 kHz, 24 kHz, and sidebands at 8 kHz ± 50 Hz, 8 kHz ± 100 Hz, etc.</div>

  <div class="n-formula">THD = √(V₂² + V₃² + V₄² + ... Vₙ²) / V₁ × 100%<div class="label">Total Harmonic Distortion - V₁ = fundamental RMS, V₂..Vₙ = harmonic RMS voltages</div></div>

  <div class="n-h2">Effects of PWM on Motor</div>
  <table class="n-table">
    <tr><th>Effect</th><th>Mechanism</th><th>Consequence</th></tr>
    <tr><td class="bad"><strong>Insulation stress (dV/dt)</strong></td><td>PWM pulses switch very rapidly (rise time &lt;100 ns). High dV/dt = high rate of voltage change at motor terminals.</td><td>Capacitive coupling injects high-frequency voltage transients deep into winding insulation. Can cause partial discharge (corona) in motor coil insulation, accelerating degradation.</td></tr>
    <tr><td class="bad"><strong>Voltage reflection (standing wave)</strong></td><td>Long cable between VFD and motor acts as transmission line at high dV/dt frequencies. Voltage wave reflects at motor terminal (impedance mismatch) and adds to incident wave.</td><td>Motor terminal voltage can reach up to 2× DC bus voltage (~1200 V for 440 V system). Standard motor insulation (Class F = 1000 V peak) can be exceeded.</td></tr>
    <tr><td class="bad"><strong>Bearing currents</strong></td><td>High-frequency common-mode voltages induced by PWM create capacitive currents through the shaft and bearings (rotor → bearing → frame).</td><td>Electrical erosion (EDM pitting) of bearing races and rolling elements. Leads to premature bearing failure - recognised by fluted bearing race marks.</td></tr>
    <tr><td class="bad"><strong>Additional heating</strong></td><td>Harmonic currents cause additional I²R losses in stator windings AND increase hysteresis and eddy current losses in core.</td><td>Motor runs hotter than nameplate rating for same load. Must derate by 5–10% or use inverter-rated motor.</td></tr>
    <tr><td class="bad"><strong>Acoustic noise</strong></td><td>Motor laminations vibrate at PWM carrier frequency and harmonics.</td><td>Audible whine/hum (especially at low carrier frequency &lt;4 kHz). Increasing carrier to &gt;8 kHz moves noise above audible range but increases IGBT switching losses.</td></tr>
  </table>

  <div class="n-h2">Mitigation Measures</div>
  <ul class="n-list">
    <li><strong>Use inverter-rated motors:</strong> Enhanced winding insulation (Class H or F+), thicker slot liner insulation rated for high dV/dt. Mandatory for VFD duty above certain cable length thresholds.</li>
    <li><strong>Output dV/dt filter:</strong> Series inductor (reactor) on VFD output limits the rate of voltage rise - slows the pulse edge from nanoseconds to microseconds. Dramatically reduces voltage reflection.</li>
    <li><strong>Sine filter (LC filter):</strong> Full LC filter on VFD output converts PWM waveform back to near-sinusoidal - eliminates harmonics completely at the motor. Reduces losses, noise, and bearing currents. Heavier and more expensive.</li>
    <li><strong>Cable length limit:</strong> Keep VFD-to-motor cable as short as possible. Longer cable = more severe reflections. Rule of thumb: for cable &gt;50 m, always fit output reactor.</li>
    <li><strong>Insulated bearings:</strong> Non-drive end bearing with ceramic coating or insulated housing interrupts bearing current path. Standard practice on VFD-driven motors above 75 kW on ships.</li>
    <li><strong>Shaft grounding brush:</strong> Carbon brush on shaft bleeds capacitive charge continuously - prevents charge build-up and subsequent bearing arcing discharge.</li>
    <li><strong>EMC (EMI) filter on VFD input:</strong> Prevents high-frequency switching noise from flowing back into the shipboard power system and interfering with navigation electronics.</li>
  </ul>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Memory Aid for VFD Motor Damage:</strong> "PWM Pulses BASH motors: <strong>B</strong>earing currents, <strong>A</strong>dditional heating, <strong>S</strong>tanding wave overvoltage, <strong>H</strong>armonic stress on insulation." Counter with: inverter-rated motor + dV/dt filter + insulated bearings + cable length limits.</div></div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 17 - PROTECTION DIODES (NEW) -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-protection-diodes">17. Protection Diodes - TVS, Schottky &amp; Flyback</div>

  <div class="n-h2">Types of Specialised Diodes</div>
  <table class="n-table">
    <tr><th>Type</th><th>Symbol/Structure</th><th>Key Property</th><th>Ship Application</th></tr>
    <tr><td><strong>TVS (Transient Voltage Suppressor)</strong></td><td>Avalanche breakdown, very fast response (&lt;1 ps)</td><td>Clamps transient overvoltage spikes in nanoseconds. Bidirectional TVS handles both polarities. Much faster than Zener.</td><td>Protection on PCB inputs (sensor cables entering from deck), ESD protection on navigation electronics, relay output line protection.</td></tr>
    <tr><td><strong>Schottky Diode</strong></td><td>Metal-semiconductor junction (no P-N junction)</td><td>Very low forward voltage drop (0.2–0.45 V vs 0.7 V for Si). Very fast switching (no minority carrier storage). Low reverse recovery time.</td><td>SMPS output rectifiers (low-voltage, high-current). Gate drive circuits (speed). Prevent reverse current in parallel battery strings.</td></tr>
    <tr><td><strong>Flyback (Freewheeling) Diode</strong></td><td>Standard diode, placed reverse-biased across inductive load</td><td>When inductive load (relay coil, solenoid) is de-energised, the collapsing magnetic field generates a reverse high-voltage spike. Flyback diode clamps this and provides a current path.</td><td>Across ALL relay coils in PLC output circuits. Across solenoid valves. Protects transistor/FET drivers from inductive kickback.</td></tr>
    <tr><td><strong>Varactor (Varicap)</strong></td><td>Reverse-biased junction used as variable capacitor</td><td>Capacitance varies with reverse bias voltage. Used as electronically-controlled tuning capacitor.</td><td>VHF/UHF radio receiver tuning (GMDSS equipment), frequency synthesis circuits.</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why Flyback Diodes are Critical:</strong> Without a flyback diode across a relay coil, when the driving transistor turns OFF, the coil's stored magnetic energy must go somewhere. It generates a spike of −100 V to −300 V (or more) in microseconds. A BJT rated 40 V VCES will be instantly destroyed. The flyback diode provides a safe current path, clamping the spike to only one forward voltage drop (0.7 V) above the supply rail.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>TVS vs Zener for Protection:</strong> Zener diodes are designed for steady-state voltage regulation. TVS diodes are optimised for instantaneous energy absorption from brief transient spikes - they have a much larger junction and can absorb hundreds of watts peak power for microseconds without damage. Always use TVS (not Zener) for transient protection; use Zener for voltage reference/regulation.</div></div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 18 - HAZARDOUS AREAS -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ex-zones">18. Hazardous Area Equipment (Ex Zones)</div>

  <div class="n-h2">ATEX Zone Classification</div>
  <table class="n-table">
    <tr><th>Zone</th><th>Definition</th><th>Required Ex Category</th><th>Ship Example</th></tr>
    <tr><td><strong>Zone 0</strong></td><td>Explosive gas atmosphere present <em>continuously</em> or for long periods</td><td class="bad">Cat 1G (Ex ia only)</td><td>Inside cargo tank vapour space (tanker), inside cofferdam</td></tr>
    <tr><td><strong>Zone 1</strong></td><td>Explosive gas atmosphere <em>likely</em> in normal operation</td><td>Cat 2G (Ex d, Ex e, Ex ia, Ex ib)</td><td>Pump room, compressor room, gas detector vicinity on tanker</td></tr>
    <tr><td><strong>Zone 2</strong></td><td>Explosive gas atmosphere <em>unlikely</em> in normal operation, but possible</td><td class="ok">Cat 3G (Ex n, Ex d, etc.)</td><td>Battery room, paint locker, EO store on cargo ships</td></tr>
  </table>

  <div class="n-h2">Protection Concepts - Ex d vs Ex e vs Ex i vs Ex n</div>
  <table class="n-table">
    <tr><th>Concept</th><th>Code</th><th>Principle</th><th>Typical Use</th></tr>
    <tr><td><strong>Flameproof</strong></td><td>Ex d</td><td>Enclosure strong enough to CONTAIN explosion internally. Flame quenched through precise flameproof gaps (joints). External atmosphere not ignited.</td><td>Ex motors, large junction boxes, solenoid valves on tankers</td></tr>
    <tr><td><strong>Increased Safety</strong></td><td>Ex e</td><td>Sparks PREVENTED by design - wider creepage/clearance, better insulation, tight seals, no hot surfaces. Does NOT contain explosion if one occurs.</td><td>Terminal boxes, lighting fittings (Zone 1/2)</td></tr>
    <tr><td><strong>Intrinsic Safety</strong></td><td>Ex i</td><td>Electrical energy in circuit LIMITED below the minimum ignition energy (MIE) of the gas/dust. Spark cannot ignite even if circuit fault occurs.</td><td>Sensors, transmitters, thermocouples (Zone 0/1/2)</td></tr>
    <tr><td><strong>Non-incendive</strong></td><td>Ex n</td><td>Circuit will not ignite under <em>normal operation</em>. No protection against fault conditions. Zone 2 only.</td><td>Some Zone 2 instruments, simple switches</td></tr>
    <tr><td><strong>Pressurised</strong></td><td>Ex p</td><td>Enclosure pressurised with clean air/inert gas to keep hazardous atmosphere out.</td><td>Control panels, VFD enclosures in Zone 1</td></tr>
  </table>

  <div class="n-h2">Zener Barrier - Circuit for Intrinsic Safety</div>
  <div class="n-p">Limits energy entering hazardous area to prevent ignition. Three elements:</div>
  <ol class="n-steps">
    <li><strong>Fuse:</strong> Protects Zener diode from sustained overcurrent.</li>
    <li><strong>Resistor:</strong> Limits short-circuit current from safe-area supply into hazardous area.</li>
    <li><strong>Zener Diode:</strong> Clamps voltage to a safe level - prevents overvoltage from entering hazardous zone.</li>
  </ol>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Zener barrier must be connected to a certified, low-impedance earth.</strong> The Zener clamps to earth - if earth connection is poor or broken, clamping action fails and hazardous voltage can enter Zone 0/1. Earth resistance &lt;1 Ω required.</div></div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 19 - INTRINSIC SAFETY ENTITY -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-is-entity">19. Intrinsic Safety - Entity Concept &amp; Fault Tolerance</div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Entity concept parameters</strong> (must match between Zener barrier and field instrument):<br>
  • <strong>Uo (Max open-circuit voltage):</strong> Highest voltage spike the barrier can pass into hazardous area<br>
  • <strong>Io (Max short-circuit current):</strong> Maximum current the barrier will supply (enforced by internal series resistor)<br>
  • <strong>Po (Max power output):</strong> Maximum thermal power entering hazardous area (Uo × Io / 4 for resistive load)</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Fault-tolerance classification:</strong><br>
  <strong>Category ia (Zone 0 mandatory):</strong> Must remain incapable of ignition during <em>normal operation</em> PLUS <em>two</em> simultaneous independent component failures. Highest level of protection.<br>
  <strong>Category ib (Zone 1 acceptable):</strong> Must remain incapable of ignition during normal operation PLUS a <em>single</em> component failure.</div></div>

  <div class="n-p"><strong>Practical matching rule:</strong> Instrument's V_i (max input voltage rating) must be ≥ Uo of the barrier. Instrument's I_i (max input current) must be ≥ Io of the barrier. Instrument's C_i (internal capacitance) and L_i (internal inductance) must be within the barrier's allowed cable capacitance/inductance budget for the gas group.</div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 20 - EMF vs PD -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-emf-pd">20. EMF vs Potential Difference</div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Electromotive Force (EMF) - ε</div>
      <div class="card-desc">
        Energy per unit charge provided by the source (battery, generator). Measured at <strong>OPEN CIRCUIT</strong> when no current flows. Represents the maximum voltage the source can produce. EMF is a property of the source, not of the circuit.<br><br>
        <code style="color:var(--cyan)">EMF (ε) = I × (R_external + r_internal)</code>
      </div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Potential Difference (PD) - Terminal Voltage</div>
      <div class="card-desc">
        Voltage measured at the source terminals <strong>WHEN CURRENT IS FLOWING</strong>. Always less than EMF because of internal resistance drop.<br><br>
        <code style="color:var(--cyan)">PD = EMF − (I × r_internal)</code><br><br>
        As load current increases → PD drops further → battery or generator terminal voltage falls.
      </div>
    </div>
  </div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Ship Example - Battery Under Load:</strong> Battery open-circuit = 12.6 V (EMF). Under load (engine start, 200 A), internal resistance = 0.01 Ω: PD = 12.6 − (200 × 0.01) = <span class="n-val">10.6 V</span>. The terminal voltage drops 2 V under load. Measuring 12.6 V on a battery that immediately drops to 10 V under load indicates high internal resistance (sulphation) - battery is weak even though open-circuit reading looks good.</div></div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 21 - ADDITIONAL COMPONENTS -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-components">21. Additional Components &amp; Properties</div>

  <ul class="n-list">
    <li><strong>555 Timer IC:</strong> Versatile timer. <em>Astable mode:</em> oscillator/LED flasher (continuous square wave). <em>Monostable mode:</em> one-shot delay (pulse output). <em>Bistable mode:</em> SR flip-flop. Pulse width T = 1.1 × R × C seconds.</li>
    <li><strong>Capacitor in AC Circuit:</strong> Current LEADS voltage by 90° (CIVIL mnemonic). Higher frequency → lower capacitive reactance X_C = 1/(2πfC). Blocks DC completely. <strong>SAFETY: Always discharge capacitor before touching!</strong></li>
    <li><strong>Surge Arrester (MOV):</strong> Metal Oxide Varistor - non-linear resistance device that clamps transient overvoltages to a safe level, shunting energy to earth. Used on signal cable entries and on PLC power supplies. Arc arrester for radio antennas uses spark gaps.</li>
    <li><strong>Doping:</strong> Adding impurities to pure semiconductor. N-type: pentavalent dopant (phosphorus, arsenic) → extra free electrons (majority carrier). P-type: trivalent dopant (boron, gallium) → holes (majority carrier).</li>
    <li><strong>RMS Value:</strong> Equivalent DC heating value. V_rms = 0.707 × V_peak. <span class="n-val">440 V RMS</span> = <span class="n-val">622 V Peak</span>. Insulation must withstand peak!</li>
    <li><strong>Phase Advancer:</strong> Injects AC EMF into rotor circuit of a wound-rotor induction motor to improve power factor locally (reactive power supplied by phase advancer, not drawn from grid).</li>
    <li><strong>Ebonite:</strong> Hard vulcanised rubber - excellent electrical insulator but brittle, degrades with UV. Used in older switchboard handles and bus bar supports.</li>
    <li><strong>Impulse Voltage Generator (Marx Generator):</strong> Produces high-voltage 1.2/50 µs lightning impulse waveform (1.2 µs rise time, 50 µs to half-value decay) for testing cable and transformer insulation to simulate lightning strikes.</li>
    <li><strong>Rotary Converter:</strong> A single machine that acts as both synchronous motor and DC generator. AC is fed in via slip rings on one shaft end (motor action); DC is extracted from the commutator on the other end (generator action). The field and armature coils are similar to a standard DC generator. Used on older vessels to convert AC to DC for alternator excitation current. Now replaced by solid-state rectifiers (rotating diode assemblies) on modern ships.</li>
    <li><strong>PCB (Printed Circuit Board):</strong> Insulating base board that mechanically supports and electrically connects components through etched copper tracks. Standard substrate is <strong>FR-4</strong> (woven glass-fibre reinforced epoxy laminate, flame-retardant grade 4), clad with copper foil and finished with a solder mask and silkscreen. Cheaper boards use FR-2 (phenolic/paper). Multi-layer boards stack several copper layers with prepreg insulation between them.</li>
  </ul>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 22 - DIODE APPLICATIONS -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-diode-apps">22. Shipboard Diode Applications</div>

  <ul class="n-list">
    <li><strong>Standard Rectifier Diodes:</strong> AC-to-DC conversion in battery charging banks, secondary AVR power feeds, and SMPS power supplies. Rated for PIV and average current of the application.</li>
    <li><strong>Rotating Rectifier Diodes:</strong> Mounted on brushless alternator rotor shaft - convert exciter AC to DC for main field winding. Critical maintenance item: test with multimeter in diode mode. Must stop alternator before testing. Open or shorted diode directly affects excitation and generator output voltage.</li>
    <li><strong>Freewheeling (Flyback) Diodes:</strong> Connected reverse-biased across inductive relay coils and solenoid valves - suppress the high back-EMF voltage spike when coil is de-energised. Prevents transistor/PLC output destruction from inductive kickback.</li>
    <li><strong>Polarity Protection Diodes:</strong> Wired in series with DC instrumentation lines - block accidental reverse polarity connection from destroying electronics. Common on sensor power supply inputs.</li>
    <li><strong>Zener Diodes:</strong> Voltage reference in AVR circuits. Clamping in Zener barriers for intrinsic safety. Overvoltage protection on control PCBs.</li>
    <li><strong>TVS Diodes:</strong> Transient protection on signal cables entering from exposed locations on deck. Protects PCB inputs from lightning-induced transients.</li>
    <li><strong>Schottky Diodes:</strong> In SMPS output rectifier circuits where low forward voltage drop and fast recovery reduce power loss and output ripple.</li>
  </ul>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 23 - MEGGER & IR TESTING -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-megger-ir">23. Insulation Resistance Testing (Megger)</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask:</strong> <em>"Why use a megger and not a multimeter for insulation testing?"</em></div></div>

  <table class="n-table">
    <tr><th>Aspect</th><th>Megger</th><th>Multimeter (Ohmmeter)</th></tr>
    <tr><td>Test voltage applied</td><td class="ok">500 V DC (min), up to 5 kV for HV</td><td class="bad">1.5–9 V DC (battery)</td></tr>
    <tr><td>Why voltage matters</td><td class="ok">Stresses insulation realistically (line voltage is 440 V+). Reveals cracks, moisture paths at working voltage.</td><td class="bad">Low voltage doesn't reveal degraded insulation that breaks down at 440 V.</td></tr>
    <tr><td>Measurement range</td><td class="ok">Megohms to gigaohms</td><td class="bad">Only kilohms (insufficient for insulation)</td></tr>
    <tr><td>Polarisation Index (PI)</td><td class="ok">Yes - compares 1-min and 10-min readings to assess insulation condition</td><td class="bad">No</td></tr>
  </table>

  <div class="n-h2">Minimum Acceptable IR Values</div>
  <ul class="n-list">
    <li><strong>General rule:</strong> IR ≥ <span class="n-val">1 MΩ per kV</span> of rated voltage + <span class="n-val">1 MΩ</span>. For 440 V machine: minimum <span class="n-val">1.44 MΩ</span>.</li>
    <li><strong>Absolute minimum (any circuit):</strong> ≥ <span class="n-val">1 MΩ</span>. Below this: investigate, dry out, repair before energising.</li>
    <li><strong>Polarisation Index (PI):</strong> Good insulation = PI ≥ 2 (10-min reading ÷ 1-min reading). PI &lt;1.5 = investigate. PI &lt;1 = dangerous.</li>
  </ul>

  <div class="n-h2">Generator IR Test Procedure</div>
  <ol class="n-steps">
    <li>Switch off power. Open circuit breaker. Apply LOTO (lockout/tagout).</li>
    <li><strong>Disconnect AVR and all electronic components</strong> from generator terminals - high megger voltage WILL destroy AVR semiconductors.</li>
    <li>Short-circuit all outgoing cable terminals at the generator end (test cables separately if needed).</li>
    <li>Apply an earth connection across the windings for <span class="n-val">1 minute</span> to discharge any stored capacitive charge before testing.</li>
    <li>Connect megger between winding terminal and earth (hull). Apply 500 V DC for 1 minute.</li>
    <li>Record reading. Good result ≥ <span class="n-val">1 MΩ</span> (ideally ≫10 MΩ on a well-maintained machine).</li>
    <li>After test, immediately ground the winding for at least 4× the test duration to discharge residual capacitive charge.</li>
  </ol>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Never megger with AVR connected.</strong> The 500 V surge will destroy the AVR's Zener diodes, bridge rectifier, and SCR gate circuits instantly. Always disconnect AVR terminals first.</div></div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 24 - AVR CIRCUIT -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-avr-circuit">24. AVR Electronic Control Circuit</div>

  <div class="n-p">The Automatic Voltage Regulator maintains constant generator terminal voltage under varying load by automatically adjusting rotor field excitation current.</div>

  <div class="n-h2">AVR Circuit Stages</div>
  <ol class="n-steps">
    <li><strong>Sensing / Scaling:</strong> Step-down transformer reduces generator terminal voltage (440 V) to a safe low voltage for the sensing circuit.</li>
    <li><strong>Rectify &amp; Smooth:</strong> Bridge rectifier + filter capacitor converts sensed AC to a smooth DC signal proportional to generator output voltage.</li>
    <li><strong>Reference:</strong> Zener diode circuit provides a stable, constant DC reference voltage representing the DESIRED terminal voltage setpoint.</li>
    <li><strong>Error Comparator / Amplifier:</strong> Op-amp compares actual DC signal vs zener reference. If actual &lt; reference → positive error → command to increase excitation. Output is the error signal.</li>
    <li><strong>Power Thyristor (SCR):</strong> Error signal adjusts firing angle of a power thyristor in the exciter field circuit. Earlier firing = more field current = higher output voltage.</li>
    <li><strong>Stabilising Feedback:</strong> Derivative feedback damping prevents voltage hunting (oscillation) during load transients.</li>
  </ol>

  <table class="n-table">
    <tr><th>Condition</th><th>AVR Response</th></tr>
    <tr><td>Load increases → voltage dips</td><td class="ok">Error signal increases → earlier thyristor firing → more excitation → voltage restored</td></tr>
    <tr><td>Load removed → voltage rises</td><td class="ok">Error signal reverses → later thyristor firing → less excitation → voltage reduced</td></tr>
    <tr><td>AVR fails / defective</td><td class="bad">Generator cannot maintain constant voltage. Adding load causes voltage to collapse.</td></tr>
  </table>


  <div class="n-h2">Magnetic-Amplifier (Mag-Amp) AVR - Older Type</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Pre-SCR Technology:</strong> Older brushless alternators used a <em>magnetic amplifier</em> (saturable reactor) instead of a thyristor as the power-control element. A DC control winding on a ferrite core saturates the core, reducing its AC impedance, and thereby controlling the exciter field current - no switching semiconductors. Advantage: extremely robust (no gate circuits to damage). Disadvantage: slow response, heavier. Replaced by SCR/thyristor AVRs from the 1970s onwards. If a surveyor references a "static exciter" with no diodes or thyristors to test, it is almost certainly a mag-amp type.</div></div>

  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 25 - ROTATING RECTIFIER -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-rot-diode-fail">25. Rotating Rectifier Diode Failure Effects</div>

  <div class="n-p">Brushless alternator: diode assembly mounted on rotor. Failures are detected by observing generator behaviour - diodes cannot be tested while running.</div>

  <table class="n-table">
    <tr><th>Failure Mode</th><th>What Happens</th><th>AVR Response</th><th>Observable Symptoms</th></tr>
    <tr><td><strong>Open Circuit</strong> (diode fails open)</td><td>Exciter AC no longer fully rectified. Ripple appears in field current.</td><td>AVR boosts exciter field to compensate. Likely to hold voltage at first.</td><td>Slight voltage instability (AC ripple on DC output). Increase in alternator hum. AVR field current higher than normal.</td></tr>
    <tr><td><strong>Short Circuit</strong> (diode fails short)</td><td class="bad">Exciter output short-circuited through failed diode. Large circulating current. Rotor fuse may blow.</td><td class="bad">AVR cannot compensate. Generator voltage collapses.</td><td class="bad">Voltage collapse. Severe current through exciter if multiple diodes short. Possible rotor damage, overheating, alarm and trip.</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Procedure to test rotating rectifier diodes:</strong> Stop the alternator completely → Disconnect each diode from the rotor circuit → Test individually with multimeter in diode mode. Forward: 0.5–0.7 V, Reverse: OL. Shorted diode reads ~0 V both directions. Open diode reads OL both directions. Replace any failed diode in a matched set where possible.</div></div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 26 - KEY FORMULAE -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-electronics-formulae">26. Key Electronics Formulae</div>

  <div class="n-formula">T = 1.1 × R × C<div class="label">555 Timer monostable pulse width (seconds) · R = Ohms · C = Farads</div></div>

  <div class="n-formula">Xc = 1 / (2π × f × C)<div class="label">Capacitive reactance (Ω) · f = frequency (Hz) · C = Farads · Higher f = lower Xc = more current flows</div></div>

  <div class="n-formula">Vpeak = Vrms × √2 = 440 × 1.414 = 622 V<div class="label">For 440 V AC supply · Peak voltage = 622 V · Insulation must withstand peak, not RMS</div></div>

  <div class="n-formula">IC = hFE × IB<div class="label">BJT collector current · hFE = current gain (50–300 typical) · IB = base current (small signal controls large)</div></div>

  <div class="n-formula">Gain (inverting op-amp) = −Rf / Rin<div class="label">Negative sign = phase inversion · Rf = feedback resistor · Rin = input resistor</div></div>

  <div class="n-formula">Gain (non-inverting) = 1 + Rf / Rin<div class="label">Non-inverting configuration · always ≥ 1 · Rf = 0 gives unity gain buffer</div></div>

  <div class="n-formula">PD = EMF − (I × r)<div class="label">Terminal voltage under load · r = internal resistance of battery/generator · PD always less than EMF when current flows</div></div>

  <div class="n-formula">VH = (I × B) / (n × e × t)<div class="label">Hall voltage · I = primary current · B = magnetic flux density · n = carrier density · e = electron charge · t = semiconductor thickness</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why V_rms ≠ V_peak matters on ships:</strong> The 440 V rating of a motor or cable refers to RMS voltage (equivalent heating effect). But insulation must withstand the actual peak of 622 V. VFD-driven motors see up to 2× this (≈1200 V) due to PWM standing wave reflections on long cables. Surge suppressors, varistors, and TVS diodes must be rated for peak plus transient margin.</div></div>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- SECTION 26 - CAPACITOR & RESISTOR TESTING -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-cap-res-test">26. Capacitor &amp; Resistor Testing</div>

  <div class="n-h2">Capacitor Test with a Multimeter - 4-Step Procedure</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Always discharge the capacitor first</strong> - short terminals through a 10 kΩ resistor for several seconds before touching. A charged capacitor can deliver a lethal shock.</div></div>

  <ol class="n-steps">
    <li><strong>Visual check:</strong> Inspect for bulging top (electrolytic), leaking electrolyte, or scorch marks → condemn immediately if found.</li>
    <li><strong>Resistance check (Ω mode):</strong> Set multimeter to highest resistance range. Touch probes across capacitor terminals (observe polarity for electrolytic). Needle / reading should kick toward 0 Ω then slowly rise back to ∞ as capacitor charges from multimeter battery. If reading stays at <span class="n-val">0 Ω</span> → <strong>shorted</strong>. If reading is immediately ∞ with no kick → <strong>open-circuit</strong> (internal break).</li>
    <li><strong>Capacitance mode (if available):</strong> Many modern multimeters have a Cx or F range. Discharge capacitor, insert into capacitance socket or use probes. Compare reading against marked value. Acceptable: within <span class="n-val">±20%</span> of rated value (±10% for precision types).</li>
    <li><strong>Leakage check (DC voltage mode):</strong> Charge capacitor to its working voltage via an external supply. Remove supply. Measure voltage across terminals after 30 seconds. Good capacitor holds voltage; rapid decay indicates high leakage (poor dielectric).</li>
  </ol>

  <table class="n-table">
    <tr><th>Test Result</th><th>Diagnosis</th><th>Action</th></tr>
    <tr><td>Resistance kicks to 0 Ω then rises to ∞</td><td class="ok">Good - capacitor charging</td><td>Acceptable</td></tr>
    <tr><td>Stays at 0 Ω throughout</td><td class="bad">Shorted capacitor</td><td>Replace</td></tr>
    <tr><td>Immediate ∞, no kick</td><td class="bad">Open-circuit (internal break)</td><td>Replace</td></tr>
    <tr><td>Capacitance reading &gt;20% low</td><td class="bad">Dried-out / aged electrolytic</td><td>Replace</td></tr>
  </table>

  <div class="n-h2">Resistor Colour Code - 4-Band System</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">Read <strong>left to right</strong>: Band 1 = 1st digit, Band 2 = 2nd digit, Band 3 = multiplier (× 10ⁿ), Band 4 = tolerance. Hold resistor with tolerance band (gold/silver) to the <em>right</em>.</div></div>

  <table class="n-table">
    <tr><th>Colour</th><th>Digit (Bands 1–2)</th><th>Multiplier (Band 3)</th><th>Tolerance (Band 4)</th></tr>
    <tr><td><strong>Black</strong></td><td>0</td><td>×1</td><td>—</td></tr>
    <tr><td><strong>Brown</strong></td><td>1</td><td>×10</td><td>±1%</td></tr>
    <tr><td><strong>Red</strong></td><td>2</td><td>×100</td><td>±2%</td></tr>
    <tr><td><strong>Orange</strong></td><td>3</td><td>×1 kΩ</td><td>—</td></tr>
    <tr><td><strong>Yellow</strong></td><td>4</td><td>×10 kΩ</td><td>—</td></tr>
    <tr><td><strong>Green</strong></td><td>5</td><td>×100 kΩ</td><td>±0.5%</td></tr>
    <tr><td><strong>Blue</strong></td><td>6</td><td>×1 MΩ</td><td>±0.25%</td></tr>
    <tr><td><strong>Violet</strong></td><td>7</td><td>×10 MΩ</td><td>±0.1%</td></tr>
    <tr><td><strong>Grey</strong></td><td>8</td><td>—</td><td>—</td></tr>
    <tr><td><strong>White</strong></td><td>9</td><td>—</td><td>—</td></tr>
    <tr><td><strong>Gold</strong></td><td>—</td><td>×0.1</td><td>±5%</td></tr>
    <tr><td><strong>Silver</strong></td><td>—</td><td>×0.01</td><td>±10%</td></tr>
  </table>

  <div class="n-card">
    <div class="n-h2">Worked Example</div>
    <div class="n-p">Bands: <strong>Yellow – Violet – Red – Gold</strong></div>
    <ul class="n-list">
      <li>Yellow = <span class="n-val">4</span>, Violet = <span class="n-val">7</span>, Red = ×100, Gold = ±5%</li>
      <li>Value = <span class="n-val">47 × 100 = 4,700 Ω = 4.7 kΩ ±5%</span></li>
    </ul>
    <div class="n-p">Memory aid: <strong>BB ROY of Great Britain has Very Good Wife</strong> → Black Brown Red Orange Yellow Green Blue Violet Grey White</div>
  </div>

  <!-- ═══════════════════════════════════════════════ -->
  <!-- SURVEYOR Q&A - SECOND TO LAST -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">Exact MMD oral questions with key points to hit. Targeted by named surveyors where known.</div></div>

  <table class="n-table">
    <tr><th>Examiner Question</th><th>Surveyor</th><th>Ideal Answer - Key Points to Hit</th></tr>
    <tr>
      <td>How do you test a diode with a multimeter?</td>
      <td>All</td>
      <td>Diode mode. Forward bias (Red→Anode): 0.5–0.7 V. Reverse bias: OL. Shorted = 0 V both ways. Open = OL both ways. Rotating rectifiers: stop alternator, disconnect each, test individually.</td>
    </tr>
    <tr>
      <td>What is a zener diode? Where is it used?</td>
      <td>Vishwanathan</td>
      <td>Designed for reverse breakdown to hold constant Vz. Used for: AVR voltage reference, 24 V/5 V regulation on PCBs, Zener barriers in intrinsic safety (IS) circuits.</td>
    </tr>
    <tr>
      <td>What is ripple factor? Best type of rectifier?</td>
      <td>Kamath, Deswal</td>
      <td>Ripple factor = Vrms(ripple)/Vdc(output). Half wave=1.21. Full wave bridge=0.482. 3-phase bridge=0.042 - best (very smooth DC, used in VFD DC links). Lower ripple = smoother DC.</td>
    </tr>
    <tr>
      <td>Difference between BJT and MOSFET?</td>
      <td>All</td>
      <td>BJT is CURRENT controlled (IC = hFE × IB), has base current drain. MOSFET is VOLTAGE controlled (VGS threshold), no gate current, ultra-fast switching, better for SMPS/PWM.</td>
    </tr>
    <tr>
      <td>What is a thyristor? How does it turn off?</td>
      <td>All</td>
      <td>4-layer PNPN device. Turns ON: forward bias + gate pulse. LATCHES ON - gate loses control. Turns OFF ONLY when anode current drops below holding current (Ih). Natural commutation at AC zero crossing. Forced commutation needed for DC circuits.</td>
    </tr>
    <tr>
      <td>Why use IGBT instead of thyristor in a VFD?</td>
      <td>Deswal, Kamath</td>
      <td>IGBT can be turned OFF by gate (−15 V on VGE). No commutation circuit needed. Switches at 1–20 kHz for PWM. No latching. VFD inverter is on DC bus - thyristor cannot commutate on DC. IGBT combines high voltage/current with fast gate control.</td>
    </tr>
    <tr>
      <td>What is a cycloconverter?</td>
      <td>Sanjib</td>
      <td>Direct AC-to-AC (variable lower frequency). NO DC link - thyristors select voltage segments from mains. Max output ≈ 1/3 of input (0–16 Hz from 50 Hz). Used for large low-speed propulsion (LNG, icebreakers). Full torque at 0 Hz. Regenerative.</td>
    </tr>
    <tr>
      <td>What is an optocoupler? Why use it?</td>
      <td>Sanjib, Deswal</td>
      <td>LED + phototransistor in one package. Transfers signal via LIGHT - total galvanic isolation. Used for: safety isolation, noise immunity (no ground loops), level shifting (5V PLC to 24V), PLC-VFD interface, hazardous area IS barriers.</td>
    </tr>
    <tr>
      <td>What is crossover distortion? How is it corrected?</td>
      <td>Nair, Sanjib</td>
      <td>Class B: both transistors turn OFF briefly near 0 V crossing → notch in output waveform. Corrected by Class AB: small forward bias (~0.6 V) keeps transistors just barely conducting at zero - eliminates dead zone.</td>
    </tr>
    <tr>
      <td>What is SMPS? Advantages?</td>
      <td>Vishwanathan</td>
      <td>Switch Mode Power Supply. Rectifies AC → switches MOSFET at 20 kHz–1 MHz → HF transformer → output DC. 70–90% efficient, small, lightweight, wide input range. Generates EMI. Used for 24 V control supplies, chargers.</td>
    </tr>
    <tr>
      <td>Difference between Ex d and Ex i?</td>
      <td>All</td>
      <td>Ex d (flameproof): contains explosion inside strong enclosure, quenches flame through precision gaps. Ex i (intrinsically safe): limits circuit energy below minimum ignition energy - spark cannot ignite even if fault occurs. Ex i is safer (prevents ignition). Ex d contains ignition after it occurs.</td>
    </tr>
    <tr>
      <td>What is grid bias voltage?</td>
      <td>Rajeev Wad</td>
      <td>Fixed DC voltage applied to control grid of a vacuum tube to set its operating Q-point. Determines class of amplification (A, B, C). Modern equivalent: transistor voltage divider biasing network sets V_BE for same purpose.</td>
    </tr>
    <tr>
      <td>Difference between EMF and potential difference?</td>
      <td>All</td>
      <td>EMF = open-circuit voltage of source (no current). PD (terminal voltage) = EMF − I×r (drops due to internal resistance when current flows). Always PD &lt; EMF under load.</td>
    </tr>
    <tr>
      <td>What is a phase advancer?</td>
      <td>Nair</td>
      <td>Injects AC EMF into rotor circuit of wound-rotor motor to improve power factor locally (reactive power supplied by phase advancer itself, not drawn from the ship's supply grid).</td>
    </tr>
    <tr>
      <td>What is RMS value? Why does it matter?</td>
      <td>All</td>
      <td>Equivalent DC heating value. Vrms = 0.707 × Vpeak. 440 V RMS = 622 V peak. Insulation must withstand peak voltage. VFD motors can see up to 1200 V peak due to PWM reflections - must use inverter-rated motors.</td>
    </tr>
    <tr>
      <td>What happens with a capacitor in an AC circuit?</td>
      <td>All</td>
      <td>Current LEADS voltage by 90° (CIVIL). Higher frequency = lower reactance (Xc = 1/2πfC). Blocks DC. Always discharge before touching - holds charge at peak voltage.</td>
    </tr>
    <tr>
      <td>What is a Hall effect sensor? Where is it used on ships?</td>
      <td>Deswal, Kamath</td>
      <td>Generates a voltage (Hall voltage) proportional to magnetic field when current flows through a semiconductor in a perpendicular field. Used for: non-contact DC/AC current measurement in VFDs (measures DC bus and phase currents), shaft RPM sensing, battery current monitoring in hybrid propulsion, busbar current measurement. Advantage: measures DC current (conventional CT cannot).</td>
    </tr>
    <tr>
      <td>What is the effect of a VFD on motor insulation?</td>
      <td>Deswal, Kamath</td>
      <td>PWM pulses create high dV/dt → partial discharge in winding insulation. Voltage reflection on long cables → terminal voltage up to 2× DC bus (≈1200 V). High-frequency bearing currents → EDM pitting of bearings. Additional harmonic heating. Mitigation: inverter-rated motor, dV/dt filter on output, insulated bearings, shaft grounding brush, limit cable length.</td>
    </tr>
    <tr>
      <td>What is a flyback diode? Why is it needed?</td>
      <td>Sanjib</td>
      <td>Standard diode placed reverse-biased across an inductive load (relay coil, solenoid). When the coil is de-energised, collapsing magnetic field generates reverse high-voltage spike. Flyback diode provides a current path, clamping spike to 0.7 V above supply. Without it, the driving transistor or PLC output is instantly destroyed by the transient.</td>
    </tr>
    <tr>
      <td>Why do we use a megger and not a multimeter for insulation testing?</td>
      <td>All</td>
      <td>Megger applies 500 V–5 kV DC - stresses insulation at working voltage, revealing cracks and moisture paths that break down at 440 V. Multimeter ohmmeter uses 1.5–9 V - far too low to stress insulation. Megger measures in megohms–gigaohms. Multimeter only reads kilohms. Megger can measure PI (polarisation index).</td>
    </tr>
  </table>


  <!-- ═══════════════════════════════════════════════ -->
  <!-- QUICK REVISION - LAST SECTION -->
  <!-- ═══════════════════════════════════════════════ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>

  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>Thyristor Working</td>
      <td class="hl">⭐⭐⭐⭐⭐ All surveyors</td>
      <td>PNPN. Gate fires, latches ON. Turns OFF at zero crossing (natural) or forced commutation. Gate loses control after firing.</td>
    </tr>
    <tr>
      <td>IGBT vs Thyristor</td>
      <td class="hl">⭐⭐⭐⭐⭐ Deswal, Kamath</td>
      <td>IGBT: gate-controlled OFF, fast PWM (20 kHz), no latching. Thyristor: latches, needs commutation, slow. IGBT wins for VFD inverter - DC bus = no natural commutation for SCR.</td>
    </tr>
    <tr>
      <td>Diode Testing</td>
      <td class="hl">⭐⭐⭐⭐⭐ All surveyors</td>
      <td>Forward = 0.5–0.7 V. Reverse = OL. Shorted = 0 V both. Open = OL both. Stop alternator for rotating rectifiers.</td>
    </tr>
    <tr>
      <td>VFD Effect on Motor Insulation</td>
      <td class="hl">⭐⭐⭐⭐⭐ Deswal, Kamath</td>
      <td>PWM → dV/dt stress, voltage reflection (2× DC bus), bearing currents (EDM pitting), extra heating. Fix: inverter motor + dV/dt filter + insulated bearings.</td>
    </tr>
    <tr>
      <td>Cycloconverter</td>
      <td class="hl">⭐⭐⭐⭐⭐ Sanjib</td>
      <td>No DC link. Direct AC-to-AC. Max 1/3 input frequency. Thyristors. Large slow propulsion (LNG, icebreakers).</td>
    </tr>
    <tr>
      <td>Amplifier Classes</td>
      <td class="hl">⭐⭐⭐⭐ Nair, Sanjib</td>
      <td>A=360° clean. B=180° crossover notch. AB=audio standard. C=RF (peaks only). D=PWM switching (95–98%).</td>
    </tr>
    <tr>
      <td>Rectifiers &amp; Ripple</td>
      <td class="hl">⭐⭐⭐⭐ Kamath, Deswal</td>
      <td>3-phase bridge = 0.042 (smoothest). 6 diodes. 300 Hz ripple. VFD DC link. Full wave bridge = 0.482.</td>
    </tr>
    <tr>
      <td>Zener Diode</td>
      <td class="hl">⭐⭐⭐⭐ Vishwanathan</td>
      <td>Reverse breakdown, constant Vz. AVR reference. IS barriers. Series resistor always needed.</td>
    </tr>
    <tr>
      <td>Optocoupler</td>
      <td class="hl">⭐⭐⭐⭐ Sanjib, Deswal</td>
      <td>LED + phototransistor. Light coupling. Total galvanic isolation. PLC-VFD interface, IS barriers.</td>
    </tr>
    <tr>
      <td>Hall Effect Sensor</td>
      <td class="hl">⭐⭐⭐⭐ Deswal, Kamath</td>
      <td>Hall voltage ∝ current × B-field. Non-contact. Measures DC AND AC current. VFD feedback, shaft RPM, battery current. CT cannot measure DC - Hall can.</td>
    </tr>
    <tr>
      <td>Ex d vs Ex i</td>
      <td class="hl">⭐⭐⭐⭐ All surveyors</td>
      <td>Ex d: contains explosion. Ex i: prevents ignition by limiting energy. Ex i better - no spark possible. Zener barrier = Ex i method.</td>
    </tr>
    <tr>
      <td>Megger vs Multimeter</td>
      <td class="hl">⭐⭐⭐⭐ All surveyors</td>
      <td>Megger: 500 V–5 kV, MΩ–GΩ range, PI measurement. Multimeter: 9 V only, kΩ range - cannot stress insulation. Never megger with AVR connected.</td>
    </tr>
    <tr>
      <td>SMPS Topologies</td>
      <td class="hl">⭐⭐⭐ Vishwanathan</td>
      <td>Buck (step-down), Boost (step-up), Flyback (isolated). HF switching (20 kHz+). Efficient (70–90%). EMI generated.</td>
    </tr>
    <tr>
      <td>EMF vs PD</td>
      <td class="hl">⭐⭐⭐ All</td>
      <td>EMF = open circuit. PD = terminal voltage under load = EMF − I×r.</td>
    </tr>
    <tr>
      <td>Flyback Diode</td>
      <td class="hl">⭐⭐⭐ Sanjib</td>
      <td>Reverse-biased across relay coil. Clamps inductive kickback spike to 0.7 V. Protects transistor/PLC driver from destruction.</td>
    </tr>
    <tr>
      <td>TVS vs Schottky</td>
      <td class="hl">⭐⭐⭐ Deswal</td>
      <td>TVS: ultra-fast transient clamping (&lt;1 ps), high peak power. Schottky: low forward drop (0.2–0.45 V), fast recovery - SMPS rectifiers, gate drives.</td>
    </tr>
    <tr>
      <td>ADC Resolution</td>
      <td class="hl">⭐⭐⭐ Kamath</td>
      <td>8-bit = 256 steps. 12-bit = 4096 steps. 16-bit = 65536 steps. More bits = finer resolution = less quantisation error.</td>
    </tr>
  </table>

  </div>
</div>
</div>
`);
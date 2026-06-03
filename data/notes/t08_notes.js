window.loadNotes("T08", `<div class="view" id="view-notes-t08">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T08')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 08 - Electronics & Semiconductors</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-diodes')">Diodes & Zener</button>
    <button class="anc-btn" onclick="jumpTo('s-rectifiers')">Rectifiers</button>
    <button class="anc-btn" onclick="jumpTo('s-transistors')">Transistors</button>
    <button class="anc-btn" onclick="jumpTo('s-thyristors')">Thyristor & IGBT</button>
    <button class="anc-btn" onclick="jumpTo('s-cyclo')">Cycloconverter</button>
    <button class="anc-btn" onclick="jumpTo('s-opto')">Optocouplers</button>
    <button class="anc-btn" onclick="jumpTo('s-amplifiers')">Amplifiers</button>
    <button class="anc-btn" onclick="jumpTo('s-digital')">Logic & Digital</button>
    <button class="anc-btn" onclick="jumpTo('s-smps')">SMPS</button>
    <button class="anc-btn" onclick="jumpTo('s-gap')">Gap Additions</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most Asked Topics:</strong> Thyristor (SCR) working and commutation, IGBT vs Thyristor, MOSFET working, Diode testing, Rectifiers and ripple factor, Amplifier classes (A, B, C, D), Cycloconverter, Optocoupler, Zener diode applications.</div></div>

  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-diodes">1. P-N Junction Diode & Zener Diode</div>
  
  <div class="n-h2">P-N Junction Diode</div>
  <div class="n-p">P-type and N-type semiconductor joined together. Built-in potential barrier (<span class="n-val">0.6-0.7V</span> for silicon, <span class="n-val">0.2-0.3V</span> for germanium).</div>
  <ul class="n-list">
    <li><strong>Forward Bias (Anode +, Cathode -):</strong> Overcomes barrier → depletion region collapses → current flows.</li>
    <li><strong>Reverse Bias (Anode -, Cathode +):</strong> Reinforces barrier → depletion region widens → blocks (only leakage current).</li>
    <li><strong>PIV (Peak Inverse Voltage):</strong> Maximum reverse voltage before breakdown.</li>
  </ul>

  <table class="n-table">
    <tr><th>DIODE TESTING (MULTIMETER IN DIODE MODE)</th></tr>
    <tr><td><strong>Good Silicon Diode:</strong> Forward bias = <span class="n-val">0.5-0.7V</span>. Reverse bias = OL (open circuit).</td></tr>
    <tr><td><strong>Shorted Diode:</strong> Reads near <span class="n-val">0V</span> in BOTH directions.</td></tr>
    <tr><td><strong>Open Circuit Diode:</strong> Reads OL in BOTH directions.</td></tr>
    <tr><td><strong>Rotating Rectifiers:</strong> Stop alternator, disconnect diodes, test individually.</td></tr>
  </table>

  <div class="n-h2">Zener Diode</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">Specially doped to operate safely in <strong>REVERSE BREAKDOWN</strong> to maintain a CONSTANT VOLTAGE (Vz) across it. Connected in reverse bias with a series resistor.</div></div>
  <div class="n-p"><strong>Ship Applications:</strong> AVR reference voltage, control circuit power supply (<span class="n-val">5V</span>, <span class="n-val">12V</span>), overvoltage clamping, and Zener/HART barriers in hazardous areas (IS circuits).</div>


  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-rectifiers">2. Rectifiers & Ripple Factor</div>

  <table class="n-table">
    <tr><th>TYPE</th><th>DIODES</th><th>RIPPLE FACTOR</th><th>EFFICIENCY</th><th>SHIP USE</th></tr>
    <tr><td><strong>Half Wave</strong></td><td>1 diode</td><td class="bad">1.21 (121%)</td><td>40.6%</td><td>Rare, trickle chargers</td></tr>
    <tr><td><strong>Full Wave (Centre Tap)</strong></td><td>2 + transformer</td><td>0.482 (48.2%)</td><td>81.2%</td><td>Older chargers</td></tr>
    <tr><td><strong>Full Wave Bridge</strong></td><td>4 diodes</td><td>0.482 (48.2%)</td><td class="ok">81.2%</td><td>Most common (AVR, chargers)</td></tr>
    <tr><td><strong>3-Phase Bridge</strong></td><td>6 diodes</td><td class="ok">0.042 (4.2%)</td><td class="ok">95.4%</td><td>VFD DC link, large rectifiers</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Ripple Factor (<span class="n-formula">γ = Vrms_ripple / Vdc_output</span>):</strong> Measures quality of DC. Lower ripple factor = smoother DC = smaller filter capacitor needed. 3-phase bridge provides <span class="n-val">300Hz</span> ripple on <span class="n-val">50Hz</span> supply, which is very smooth.</div></div>
  
  <div class="n-p"><strong>Full Wave Bridge Working:</strong> 4 diodes (D1-D4). Positive half cycle: D1 & D3 conduct. Negative half cycle: D2 & D4 conduct. Current always flows in same direction through the load. Average output = <span class="n-val">0.9 × Vrms</span>.</div>


  <!-- ═══ SECTION 3 ═══ -->
  <div class="n-h1" id="s-transistors">3. Transistors - BJT & MOSFET</div>

  <div class="n-grid">
    <div class="n-card">
      <div class="card-title">BJT (Bipolar Junction Transistor)</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Terminals:</strong> Base, Collector, Emitter.</li>
          <li><strong>Control:</strong> CURRENT controlled (<span class="n-val">IC = hFE × IB</span>).</li>
          <li><strong>Regions:</strong> Cutoff (OFF, VBE &lt; <span class="n-val">0.6V</span>), Active (Amplifier), Saturation (ON, VCE ~ <span class="n-val">0.2V</span>).</li>
          <li><strong>Testing (NPN):</strong> B-E and B-C forward = <span class="n-val">0.5-0.7V</span>. C-E = OL.</li>
          <li><strong>Usage:</strong> Amplifiers, relay drivers.</li>
        </ul>
      </div>
    </div>
    <div class="n-card">
      <div class="card-title">MOSFET</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Terminals:</strong> Gate, Drain, Source.</li>
          <li><strong>Control:</strong> VOLTAGE controlled (no gate current).</li>
          <li><strong>Working:</strong> VGS > threshold (<span class="n-val">2-4V</span>) creates channel → conducts.</li>
          <li><strong>Advantage:</strong> Very fast switching, no base current loading, easy to parallel.</li>
          <li><strong>Usage:</strong> SMPS, high-frequency PWM, audio Class D.</li>
        </ul>
      </div>
    </div>
  </div>


  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-thyristors">4. Thyristor (SCR) & IGBT</div>

  <div class="n-h2">Thyristor (SCR)</div>
  <div class="n-p"><strong>4-layer PNPN device. Terminals: Anode, Cathode, Gate.</strong></div>
  <ul class="n-list">
    <li><strong>Turning ON:</strong> Needs forward bias AND a short positive Gate pulse.</li>
    <li><strong>Latching:</strong> Once ON, GATE LOSES CONTROL. Stays ON until anode current drops below holding current (Ih).</li>
    <li><strong>Commutation (Turn OFF):</strong> Natural (at AC zero crossing) or Forced (using external DC circuit to drive current below Ih).</li>
    <li><strong>Firing Angle (α):</strong> Determines conduction period. α=0° (full output), α=90° (half), α=180° (zero). Phase control varies average voltage.</li>
    <li><strong>Applications:</strong> Soft starters, battery chargers, AVR excitation.</li>
  </ul>

  <div class="n-h2">IGBT (Insulated Gate Bipolar Transistor)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">Combines MOSFET input (voltage controlled, fast, high impedance) with BJT output (low ON voltage drop <span class="n-val">1.5-3V</span>, high current).</div></div>
  <ul class="n-list">
    <li><strong>Control:</strong> VGE > <span class="n-val">15V</span> turns ON. VGE &lt; <span class="n-val">0V</span> turns OFF. <strong>NO LATCHING.</strong></li>
    <li><strong>Why prefer over Thyristor for VFD:</strong> Can be turned OFF by gate (no commutation circuit needed). Switches very fast (up to 20 kHz) for PWM.</li>
    <li><strong>VFD Use:</strong> 6 IGBTs switch DC link using PWM to create variable frequency/voltage AC.</li>
  </ul>


  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s-cyclo">5. Cycloconverter</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body">Converts AC power directly to AC power at a DIFFERENT (lower) frequency - <strong>WITHOUT an intermediate DC link.</strong></div></div>
  <ul class="n-list">
    <li><strong>Working:</strong> Uses thyristors to assemble output from input waveform segments.</li>
    <li><strong>Limitation:</strong> Output frequency max is ~1/3 of input (<span class="n-val">0-16Hz</span> from <span class="n-val">50Hz</span> supply).</li>
    <li><strong>Advantage:</strong> Natural commutation of thyristors (low losses), full torque at <span class="n-val">0 Hz</span>, regenerative capability.</li>
    <li><strong>Ship Use:</strong> Large low-speed synchronous motors (LNG carriers, icebreakers) for direct drive propulsion without gearboxes.</li>
  </ul>


  <!-- ═══ SECTION 6 ═══ -->
  <div class="n-h1" id="s-opto">6. Optocouplers & Commutators</div>

  <div class="n-h2">Optocoupler</div>
  <div class="n-p">Transfers electrical signals using LIGHT, providing COMPLETE electrical isolation. LED on input emits IR light, phototransistor on output detects it and conducts.</div>
  <ul class="n-list">
    <li><strong>Why used:</strong> Electrical isolation (safety), noise rejection (no ground loops), level shifting (<span class="n-val">5V</span> to <span class="n-val">24V</span>).</li>
    <li><strong>Ship Use:</strong> PLC digital inputs, VFD interface (keeps drive noise out of PLC), HART/Zener barriers.</li>
  </ul>

  <div class="n-h2">Commutator (DC Machines)</div>
  <div class="n-p">Mechanical switch on rotor shaft (copper segments + carbon brushes). <strong>Motor:</strong> reverses current in armature coil to maintain consistent torque direction. <strong>Generator:</strong> rectifies generated AC to DC at brushes.</div>


  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s-amplifiers">7. Amplifier Classes & Op-Amps</div>

  <table class="n-table">
    <tr><th>CLASS</th><th>CONDUCTION</th><th>EFFICIENCY</th><th>DISTORTION</th><th>USE</th></tr>
    <tr><td><strong>A</strong></td><td>360° (Full)</td><td class="bad">Max 25-30%</td><td class="ok">Very Low</td><td>Precision, Hi-Fi</td></tr>
    <tr><td><strong>B</strong></td><td>180° (Half)</td><td>Up to 78.5%</td><td>Crossover Notch</td><td>Rarely pure B</td></tr>
    <tr><td><strong>AB</strong></td><td>Slightly > 180°</td><td>Good</td><td>Low (eliminates notch)</td><td>Audio (PA Systems)</td></tr>
    <tr><td><strong>C</strong></td><td>&lt; 180° (Peaks)</td><td class="ok">Up to 90%</td><td class="bad">Severe</td><td>RF transmitters (GMDSS)</td></tr>
    <tr><td><strong>D</strong></td><td>Switching (PWM)</td><td class="ok">95-98%</td><td>Needs filtering</td><td>Modern PA, subwoofers</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Crossover Distortion:</strong> In Class B, both transistors turn OFF briefly near <span class="n-val">0V</span> crossing. Fixed by Class AB (adding small forward bias <span class="n-val">0.6V</span>).</div></div>

  <div class="n-h2">Operational Amplifier (Op-Amp)</div>
  <div class="n-p">High-gain differential amplifier. Inverting (<span class="n-formula">Gain = -Rf/Rin</span>), Non-inverting (<span class="n-formula">Gain = 1 + Rf/Rin</span>), Comparator (outputs HIGH/LOW). Used in AVR error amplifiers, PID logic, and <span class="n-val">4-20mA</span> signal conditioning.</div>


  <!-- ═══ SECTION 8 ═══ -->
  <div class="n-h1" id="s-digital">8. Logic Gates & Binary System</div>

  <ul class="n-list">
    <li><strong>AND:</strong> Output HIGH only if ALL inputs HIGH. (Motor start interlock).</li>
    <li><strong>OR:</strong> Output HIGH if ANY input HIGH. (Alarms).</li>
    <li><strong>NOT:</strong> Inverts input.</li>
    <li><strong>NAND / NOR:</strong> Universal gates (can build any logic).</li>
    <li><strong>XOR:</strong> Output HIGH if inputs are DIFFERENT.</li>
  </ul>
  
  <div class="n-p"><strong>Binary:</strong> 1 byte = 8 bits (<span class="n-val">0-255</span>). Hexadecimal (base 16) 0-9, A-F. FF hex = <span class="n-val">255</span>.</div>


  <!-- ═══ SECTION 9 ═══ -->
  <div class="n-h1" id="s-smps">9. Switch Mode Power Supply (SMPS)</div>

  <div class="n-grid">
    <div class="n-card">
      <div class="card-title">SMPS (Switch Mode)</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Working:</strong> Rectify AC → DC. Switch MOSFET at HF (20kHz-1MHz) → small HF transformer → rectify/filter → smooth DC. PWM feedback regulates.</li>
          <li><strong>Efficiency:</strong> <span class="n-val">70-90%</span>.</li>
          <li><strong>Pros:</strong> Small, lightweight, wide input range.</li>
          <li><strong>Cons:</strong> Generates EMI (switching noise), complex.</li>
          <li><strong>Ship Use:</strong> <span class="n-val">24V</span> control supplies, chargers.</li>
        </ul>
      </div>
    </div>
    <div class="n-card">
      <div class="card-title">Linear Power Supply</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Working:</strong> Series transistor drops excess voltage as heat. Heavy <span class="n-val">50Hz</span> transformer.</li>
          <li><strong>Efficiency:</strong> <span class="n-val">30-60%</span>.</li>
          <li><strong>Pros:</strong> Very clean output, no EMI.</li>
          <li><strong>Cons:</strong> Heavy, inefficient (hot).</li>
          <li><strong>Ship Use:</strong> Precision analog/audio circuits.</li>
        </ul>
      </div>
    </div>
  </div>


  <!-- ═══ SECTION 10 ═══ -->
  <div class="n-h1" id="s-gap">10. Gap Additions (v2.1 to v2.3)</div>

  <div class="n-h2">Thyristor vs IGBT in VFDs</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Can SCR replace IGBT in a VFD Inverter?</strong> NO. SCR requires natural commutation (AC zero crossing) to turn off. Inverter runs on DC - SCR would latch ON forever. IGBT is gate-controlled OFF.</div></div>

  <div class="n-h2">Zener Barrier (Intrinsic Safety)</div>
  <div class="n-p">Limits energy entering hazardous area to prevent ignition. Uses (1) Zener diode to clamp voltage, (2) Resistor to limit current, (3) Fuse to protect zener. Uses Ex i (Intrinsically Safe) protection concept.</div>

  <div class="n-h2">Ex d vs Ex e vs Ex i</div>
  <ul class="n-list">
    <li><strong>Ex d (Flameproof):</strong> Enclosure contains explosion and quenches flame through gaps. (Motors).</li>
    <li><strong>Ex e (Increased Safety):</strong> Eliminates sparks by design, better seals/clearances. Does not contain explosion. (Terminal boxes).</li>
    <li><strong>Ex i (Intrinsically Safe):</strong> Limits circuit energy below ignition threshold. (Sensors in Zone 0/1).</li>
  </ul>

  <div class="n-h2">Components & Properties</div>
  <ul class="n-list">
    <li><strong>555 Timer:</strong> Used for astable (oscillator), monostable (one-shot delay), bistable.</li>
    <li><strong>Capacitor in AC:</strong> Current LEADS voltage by 90°. Higher frequency = lower reactance. Blocks DC. Always discharge before touching!</li>
    <li><strong>Surge Arrester:</strong> MOV clamps transient overvoltages, shunting to earth. Arc arrestor uses spark gaps (radio antennas).</li>
    <li><strong>Doping:</strong> N-type (pentavalent = extra electrons). P-type (trivalent = holes).</li>
    <li><strong>RMS Value:</strong> Equivalent DC heating value. <span class="n-formula">Vrms = 0.707 × Vpeak</span>. <span class="n-val">440V</span> RMS = <span class="n-val">622V</span> Peak.</li>
    <li><strong>Phase Advancer:</strong> Injects AC EMF into rotor of wound-rotor motor to improve PF, instead of drawing reactive power from grid.</li>
    <li><strong>Ebonite:</strong> Hard vulcanised rubber, good insulator but brittle with UV. Used in older switchboards.</li>
    <li><strong>Impulse Voltage Generator:</strong> Produces high-voltage <span class="n-val">1.2/50 µs</span> lightning impulse waveform for testing insulation (Marx generator).</li>
  </ul>


  <!-- ═══ SURVEYOR Q&A ═══ -->
  
  <!-- ═══ T08 GAPS ADDED ═══ -->

  <div class="n-h1" id="s-diode-apps">💡 Shipboard Diode Applications</div>
  <ul class="n-list">
    <li><strong>Standard Rectifier Diodes:</strong> AC-to-DC conversion in battery charging banks, secondary AVR power feeds, and SMPS power supplies</li>
    <li><strong>Rotating Rectifier Diodes:</strong> Mounted on brushless alternator rotor shaft - convert exciter AC to DC for main field winding. Critical maintenance item: test with multimeter for open/short circuit.</li>
    <li><strong>Freewheeling (Flyback) Diodes:</strong> Connected reverse-biased across inductive relay coils - suppress the high back-EMF voltage spike when coil is de-energised. Prevents transistor/PLC output destruction.</li>
    <li><strong>Polarity Protection Diodes:</strong> Wired in series with DC instrumentation lines - block accidental reverse polarity connection from destroying electronics</li>
    <li><strong>Zener Diodes:</strong> Used as voltage reference and clamping devices in AVR circuits, Zener barriers for intrinsic safety, and overvoltage protection on control boards</li>
  </ul>

  <div class="n-h1" id="s-transistor-matrix">⚡ Power Transistor Comparison - BJT vs MOSFET vs IGBT</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask why IGBT is used in VFDs instead of BJT or SCR.</strong></div></div>
  <table class="n-table">
    <tr><th>Feature</th><th>BJT</th><th>MOSFET</th><th>IGBT</th></tr>
    <tr><td>Control mechanism</td><td>Current controlled (Ic = hFE × Ib)</td><td class="ok">Voltage controlled (VGS)</td><td class="ok">Voltage controlled (VGE)</td></tr>
    <tr><td>Input impedance</td><td class="bad">Low - needs active base current</td><td class="ok">Very high - no gate current drain</td><td class="ok">Very high - insulated gate</td></tr>
    <tr><td>Switching frequency</td><td>Moderate</td><td class="ok">Ultra-fast (MHz range)</td><td>Fast (up to <span class="n-val">50 kHz</span>)</td></tr>
    <tr><td>Voltage/current rating</td><td>Medium</td><td>Low-medium voltage</td><td class="ok">High voltage (up to <span class="n-val">6.5 kV</span>) / high current</td></tr>
    <tr><td>ON-state losses</td><td class="ok">Low (Vce_sat ≈ 0.2V)</td><td>High at high voltage</td><td class="ok">Low saturation (<span class="n-val">1.5–3V</span>)</td></tr>
    <tr><td>Ship applications</td><td>Signal amplifiers, relay drivers</td><td>SMPS switchers, gate drivers</td><td class="ok">VFD inverters, heavy UPS bridges, traction</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why IGBT for VFDs:</strong> VFDs need high voltage (600V–6.6kV) + high current + fast switching (1–20 kHz PWM) + low losses. IGBT combines the voltage-controlled easy drive of MOSFET with the high-current low-saturation output of BJT. SCRs cannot be gate-turned-off - unusable in PWM inverters.</div></div>

  <div class="n-h1" id="s-opamp-iv">📐 Op-Amp Current-to-Voltage Converter</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Application:</strong> Many analogue inputs can only read voltage, not current. An op-amp with a feedback resistor converts the 4-20 mA loop signal to a proportional voltage.</div></div>
  <div class="n-formula">V_out = I_in × R_f<div class="label">Output voltage · I_in = input current · R_f = feedback resistance</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>HART loop example:</strong> 4-20 mA across a <span class="n-val">250 Ω</span> resistor:<br>
  At 4 mA (0%): 0.004 × 250 = <span class="n-val">1.0V</span><br>
  At 20 mA (100%): 0.020 × 250 = <span class="n-val">5.0V</span><br>
  This gives a standard 1-5V output suitable for analogue inputs.</div></div>

  <div class="n-h1" id="s-is-entity">🛡️ Intrinsic Safety - Entity Concept &amp; Fault Tolerance</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Entity concept parameters (must match between Zener barrier and field instrument):</strong><br>
  • <strong>Uo (Max open-circuit voltage):</strong> Highest voltage spike the barrier can pass<br>
  • <strong>Io (Max short-circuit current):</strong> Current limit enforced by internal resistor<br>
  • <strong>Po (Max power output):</strong> Maximum thermal energy entering hazardous area</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Fault-tolerance classification:</strong><br>
  <strong>Category ia (Zone 0 mandatory):</strong> Must remain incapable of ignition during normal operation PLUS two simultaneous independent component failures.<br>
  <strong>Category ib (Zone 1):</strong> Must remain incapable of ignition during normal operation PLUS a single component failure.</div></div>

  <div class="n-h1" id="s-electronics-formulae">📊 Key Electronics Formulae</div>
  <div class="n-formula">T = 1.1 × R × C<div class="label">555 Timer monostable pulse width (seconds) · R = Ohms · C = Farads</div></div>
  <div class="n-formula">Xc = 1 / (2π × f × C)<div class="label">Capacitive reactance (Ω) · f = frequency (Hz) · C = Farads · Increases at lower frequency</div></div>
  <div class="n-formula">Vpeak = Vrms × √2 = 440 × 1.414 = 622V<div class="label">For 440V AC supply · Peak voltage = 622V · Insulation must withstand peak, not RMS</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why Vrms ≠ Vpeak matters:</strong> The 440V rating of a motor or cable refers to RMS voltage (equivalent heating effect). But insulation must withstand the actual peak voltage of 622V. Surge suppression circuits and varistors must be rated for at least the peak voltage plus transient margins.</div></div>

<div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">Exact MMD oral questions and key points to hit.</div></div>

  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>How do you test a diode with a multimeter?</td>
      <td>Diode mode. Forward: <span class="n-val">0.5-0.7V</span>. Reverse: OL. Shorted reads <span class="n-val">0V</span> both ways. Stop alternator to test rotating rectifiers individually.</td>
    </tr>
    <tr>
      <td>What is a zener diode and where is it used?</td>
      <td>Designed for reverse breakdown to hold Vz constant. Used for AVR reference, <span class="n-val">24V/5V</span> regulation, HART/Zener barriers.</td>
    </tr>
    <tr>
      <td>What is ripple factor?</td>
      <td>RMS ripple / DC output. Half wave=1.21. Full wave=0.482. 3-phase bridge=0.042 (best, used in VFD DC links).</td>
    </tr>
    <tr>
      <td>Difference between BJT and MOSFET?</td>
      <td>BJT is current controlled (<span class="n-val">hFE</span>), has base current. MOSFET is voltage controlled, no gate current, switches much faster, better for PWM.</td>
    </tr>
    <tr>
      <td>What is a thyristor and how does it turn off?</td>
      <td>4-layer PNPN. Turns ON via gate pulse + forward bias. LATCHES ON. Turns OFF only when current drops below holding current (natural commutation at AC zero).</td>
    </tr>
    <tr>
      <td>Why use IGBT instead of thyristor in VFD?</td>
      <td>IGBT can be turned OFF by gate (no commutation circuit needed), switches at 20kHz for PWM, no latching.</td>
    </tr>
    <tr>
      <td>What is a cycloconverter?</td>
      <td>Direct AC to variable AC (NO DC LINK). Thyristor phase control. Max output 1/3 of input freq. Used for large low-speed propulsion.</td>
    </tr>
    <tr>
      <td>What is an optocoupler?</td>
      <td>Transfers signal via light (LED + phototransistor). Provides total electrical isolation (safety, noise immunity).</td>
    </tr>
    <tr>
      <td>What is crossover distortion and how is it corrected?</td>
      <td>Class B notch at zero crossing when both transistors are OFF. Corrected by Class AB small forward bias (<span class="n-val">0.6V</span>).</td>
    </tr>
    <tr>
      <td>What is SMPS?</td>
      <td>Switch Mode Power Supply. High frequency switching (MOSFET), HF transformer, 70-90% efficient, small, but generates EMI.</td>
    </tr>
    <tr>
      <td>Difference between Ex d and Ex i?</td>
      <td>Ex d contains the explosion. Ex i limits electrical energy below ignition threshold to prevent spark.</td>
    </tr>
  </table>


  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>Thyristor Working</td>
      <td class="hl">⭐⭐⭐⭐⭐ All</td>
      <td>Fires via gate pulse, latches ON, natural commutation at zero.</td>
    </tr>
    <tr>
      <td>IGBT vs Thyristor</td>
      <td class="hl">⭐⭐⭐⭐⭐ Deswal, Kamath</td>
      <td>IGBT turns OFF via gate, fast PWM. Thyristor latches, needs commutation.</td>
    </tr>
    <tr>
      <td>Diode Testing</td>
      <td class="hl">⭐⭐⭐⭐⭐ All</td>
      <td>Forward=<span class="n-val">0.6V</span>, Reverse=OL. Shorted=<span class="n-val">0V</span> both.</td>
    </tr>
    <tr>
      <td>Cycloconverter</td>
      <td class="hl">⭐⭐⭐⭐⭐ Sanjib</td>
      <td>No DC link. Max 1/3 freq. Large slow propulsion.</td>
    </tr>
    <tr>
      <td>Amplifier Classes</td>
      <td class="hl">⭐⭐⭐⭐ Nair, Sanjib</td>
      <td>A=360°(low dist). B=180°(crossover dist). AB=audio. C=RF. D=PWM.</td>
    </tr>
    <tr>
      <td>Rectifiers & Ripple</td>
      <td class="hl">⭐⭐⭐⭐ Kamath, Deswal</td>
      <td>3-phase bridge = 0.042 (very smooth). 6 diodes. VFD DC link.</td>
    </tr>
    <tr>
      <td>Zener Diode</td>
      <td class="hl">⭐⭐⭐⭐ Vishwanathan</td>
      <td>Reverse breakdown, constant Vz, AVR reference, IS barriers.</td>
    </tr>
    <tr>
      <td>Optocoupler</td>
      <td class="hl">⭐⭐⭐⭐ Sanjib, Deswal</td>
      <td>Light coupling, total electrical isolation.</td>
    </tr>
  </table>

  </div>
</div>`);

window.loadWrittenNotes("W01", `<div class="view" id="view-notes-w01">
<div class="note-doc">
  
  
  
    <div style="margin-bottom:16px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px;">
    <button class="anc-btn" onclick="showView('written-notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" style="background-color:var(--bg-card);border-color:var(--text-muted);color:var(--text-muted);opacity:0.5;cursor:not-allowed;">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 1 - Electrical Topics</h1>
    <div class="sub">ETO MMD EXAMINATION · COMPLETE STUDY NOTES · Theory Questions Only</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">16-Mark Answers</span>
      <span class="tag tag-purple">Mark-by-Mark</span>
    </div>
  </div>
  
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('t4-freq')">Question Frequency</button>
    <button class="anc-btn" onclick="jumpTo('t4-semi')">1. Semiconductors</button>
    <button class="anc-btn" onclick="jumpTo('t4-dep')">2. Diesel Electric</button>
    <button class="anc-btn" onclick="jumpTo('t4-esb')">3. Emergency Power</button>
    <button class="anc-btn" onclick="jumpTo('t4-alt')">4. Alternators</button>
    <button class="anc-btn" onclick="jumpTo('t4-revpower')">5. Reverse Power</button>
    <button class="anc-btn" onclick="jumpTo('t4-overcurrent')">6. Overcurrent</button>
    <button class="anc-btn" onclick="jumpTo('t4-pref')">7. Pref. Tripping</button>
    <button class="anc-btn" onclick="jumpTo('t4-neutral')">8. Neutral Systems</button>
    <button class="anc-btn" onclick="jumpTo('t4-hv')">9. High Voltage</button>
    <button class="anc-btn" onclick="jumpTo('t4-indmotor')">10. Induction Motors</button>
    <button class="anc-btn" onclick="jumpTo('t4-starters')">11. Motor Starters</button>
    <button class="anc-btn" onclick="jumpTo('t4-syncmotor')">12. Sync Motors</button>
    <button class="anc-btn" onclick="jumpTo('t4-dcmotor')">13. DC Motors</button>
    <button class="anc-btn" onclick="jumpTo('t4-trafo')">14. Transformers</button>
    <button class="anc-btn" onclick="jumpTo('t4-rect')">15. Rectifiers</button>
    <button class="anc-btn" onclick="jumpTo('t4-plc')">16. PLC</button>
    <button class="anc-btn" onclick="jumpTo('t4-ums')">17. UMS</button>
    <button class="anc-btn" onclick="jumpTo('t4-pi')">18. P+I Control</button>
    <button class="anc-btn" onclick="jumpTo('t4-quick')">Quick Reference</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="t4-freq">📊 All Electrical Topics - Question Frequency</div>
  <div class="n-card">
    <table class="n-table">
      <tr><th>Topic</th><th>Exam Years</th><th>Section</th><th>Marks</th></tr>
      <tr><td>Semiconductor Devices - Zener, Transistor, Photocell, Thyristor</td><td class="hl">2019/JUL, 2019/OCT, 2022/APR, 2022/JUN, 2023/OCT, 2024/JUN, 2025/JUN, 2025/OCT, 2025/DEC</td><td>I</td><td>16</td></tr>
      <tr><td>Diesel Electric Propulsion System</td><td class="hl">2019/JUL, 2019/OCT, 2019/DEC, 2022/APR, 2023/NOV, 2024/JUN, 2025/JUN, 2025/DEC</td><td>I</td><td>16 (8+8)</td></tr>
      <tr><td>Emergency Source of Electrical Power</td><td class="hl">2019/JUL, 2019/DEC, 2021/MAR, 2023/NOV, 2024/JUN, 2025/JUN, 2025/DEC</td><td>I</td><td>16 (8+8)</td></tr>
      <tr><td>Alternators - True Power, Apparent Power, Power Factor</td><td>2018/FEB, 2018/DEC, 2019/FEB, 2025/AUG, 2025/JAN</td><td>II</td><td>8+8</td></tr>
      <tr><td>Brushless Alternator - Operation &amp; Rotating Diode Failure</td><td class="hl">2018/FEB-2025/AUG</td><td>II</td><td>16</td></tr>
      <tr><td>Alternators in Parallel - Synchronising, Excitation</td><td>2023/SEP, 2025/NOV</td><td>I</td><td>8+8</td></tr>
      <tr><td>Reverse Power Protection for Alternators</td><td class="hl">2021/JAN, 2022/FEB, 2024/MAR, 2024/JUL</td><td>I</td><td>16 (6+5+5)</td></tr>
      <tr><td>Overcurrent Protection - 3 Methods + Inverse Time</td><td class="hl">2018/FEB-2025/AUG (very frequent)</td><td>II</td><td>8+8</td></tr>
      <tr><td>Short Circuit Protection</td><td>2023/NOV, 2025/DEC</td><td>II</td><td>6</td></tr>
      <tr><td>Circuit Breakers vs HRC Fuse</td><td>2019/JUL, 2021/JAN, 2024/JUN, 2025/JUN, 2025/OCT</td><td>II</td><td>6+10</td></tr>
      <tr><td>Preferential Tripping in Marine Distribution</td><td>2024/FEB, 2024/OCT</td><td>II/III</td><td>10+6</td></tr>
      <tr><td>Insulated and Earthed Neutral Systems</td><td>2018/DEC, 2020/DEC, 2021/JUL1, 2022/JUL, 2024/DEC</td><td>I</td><td>8+4+4</td></tr>
      <tr><td>High Voltage Systems - Classification, Testing, PI Test</td><td class="hl">2021/SEP, 2023/JAN, 2024/AUG, 2024/NOV</td><td>I</td><td>16</td></tr>
      <tr><td>Marine Growth Protection System (MGPS)</td><td>2024/DEC</td><td>II</td><td>16</td></tr>
      <tr><td>Induction Motors - Principle, Slip, Star-Delta</td><td class="hl">2018/FEB-2025/OCT (very frequent)</td><td>I</td><td>4+4+8</td></tr>
      <tr><td>DOL Starter - Circuit, Torque-Speed Curve</td><td>2023/FEB, 2025/FEB, 2025/JUL</td><td>II</td><td>8+8</td></tr>
      <tr><td>Star-Delta Starter</td><td>2021/OCT, 2022/JAN, 2025/NOV</td><td>II</td><td>8+8</td></tr>
      <tr><td>Soft Starting of Induction Motor</td><td>2023/JUL, 2024/APR, 2025/APR</td><td>I</td><td>16</td></tr>
      <tr><td>Crawling and Cogging</td><td>2019/JUL, 2024/JUN, 2025/JUN, 2025/OCT</td><td>II</td><td>6</td></tr>
      <tr><td>Induction Motor Speed Control</td><td>2023/SEP, 2023/DEC, 2024/FEB</td><td>I</td><td>16</td></tr>
      <tr><td>Synchronous Motors - Application, Capacitor</td><td>2019/AUG, 2019/OCT2, 2019/DEC, 2024/SEP, 2025/JAN</td><td>I</td><td>16</td></tr>
      <tr><td>DC Motors - Characteristics, Max Torque, Back EMF</td><td>2024/OCT, 2024/MAR, 2025/JUL</td><td>II</td><td>4+4+8</td></tr>
      <tr><td>DC Generator - Preventing Motorisation</td><td class="hl">2023/JAN, 2024/MAR, 2024/NOV</td><td>I</td><td>16</td></tr>
      <tr><td>Transformers - Losses, Efficiency, Liquid Cooled Hazards</td><td class="hl">2023/FEB-2025/DEC (very frequent)</td><td>II</td><td>3+3+10</td></tr>
      <tr><td>3-Phase Transformers - Parallel Operation, Bank vs Unit</td><td>2018/FEB, 2019/AUG, 2025/JAN, 2025/AUG</td><td>II</td><td>5+5+6</td></tr>
      <tr><td>Transformer - Open/Short Circuit Tests</td><td>2023/AUG, 2024/AUG</td><td>II</td><td>12+4</td></tr>
      <tr><td>Rectifiers - Half Wave, Full Wave, Bridge, Peak</td><td>2024/OCT, 2025/FEB, 2025/JUL</td><td>I</td><td>16</td></tr>
      <tr><td>Semiconductor Devices - Detailed (Zener, BJT, Photocell, SCR)</td><td class="hl">2019-2025 (very frequent)</td><td>I</td><td>16</td></tr>
      <tr><td>PLC - Block Diagram, Applications, Advantages</td><td>2020/FEB, 2021/JAN, 2021/FEB, 2022/FEB, 2025/MAR</td><td>I</td><td>8+4+4</td></tr>
      <tr><td>UMS - False Alarms, Safe Operation, Fault Location</td><td>2023/APR, 2025/SEP</td><td>III</td><td>7+7+6</td></tr>
      <tr><td>Electrical Propulsion Systems</td><td>2025/AUG</td><td>I</td><td>16</td></tr>
      <tr><td>Marine Electrical Surveys</td><td>2025/AUG</td><td>I</td><td>16</td></tr>
      <tr><td>Batteries - Lead Acid vs Alkaline, Testing</td><td>2023/AUG, 2024/SEP</td><td>I</td><td>6+6+4</td></tr>
      <tr><td>Condition Monitoring of Electrical Machinery</td><td>2024/JAN</td><td>I</td><td>8+8</td></tr>
      <tr><td>Intrinsic Safety - Flameproof Equipment</td><td>2024/JUL</td><td>I</td><td>8+8</td></tr>
      <tr><td>Oscillations and RC Phase Shift Oscillator</td><td>2023/JAN, 2023/APR, 2024/JAN, 2024/NOV, 2025/SEP</td><td>I</td><td>16</td></tr>
      <tr><td>Transistor Amplifier - Frequency Response</td><td>2022/NOV, 2023/APR, 2024/APR, 2025/SEP</td><td>I</td><td>16</td></tr>
      <tr><td>Proportional + Integral (P+I) Control</td><td>2021/APR2, 2021/SEP, 2022/MAR, 2023/APR, 2023/SEP, 2025/MAR</td><td>II</td><td>6+10</td></tr>
      <tr><td>Electronic Control - Temperature Control Block Diagram</td><td>2023/AUG, 2023/NOV</td><td>I</td><td>8+8</td></tr>
    </table>
  </div>

  <!-- ==========================================
       1. SEMICONDUCTOR DEVICES
       ========================================== -->
  <div class="n-h1" id="t4-semi">💻 1. SEMICONDUCTOR DEVICES</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Regulation/Standard:</strong> Electronics fundamentals - all 16 marks questions in Section I<br>
  <strong>Asked in:</strong> 2019/JUL/Q2, 2019/OCT1/Q3, 2022/APR/Q3, 2022/JUN/Q3, 2023/OCT/Q1, 2024/JUN/Q1, 2025/JUN/Q1, 2025/OCT/Q3, 2025/DEC/Q3</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> What are semiconductor devices? Advantages over thermionic devices? Describe working principle and application of: (a) Zener Diode (b) Transistor (c) Photocell (d) Thyristor - 16 marks</div></div>

  <div class="n-card">
    <p class="n-p"><strong>What are Semiconductor Devices? (2 marks)</strong><br>
    Semiconductor devices are electronic components made from semiconductor materials (silicon or germanium) whose electrical conductivity lies between that of conductors and insulators. Their conductivity can be precisely controlled by doping with impurities (P-type and N-type) and by applied voltage or light.</p>
  </div>

  <div class="n-h2">Advantages Over Thermionic (Valve) Devices (4 marks)</div>
  <div class="n-card">
    <table class="n-table">
      <tr><th>Thermionic Devices (Valves)</th><th>Semiconductor Devices</th></tr>
      <tr><td>Require heating filament - high power consumption</td><td>No heating required - operate at room temperature</td></tr>
      <tr><td>Large and bulky</td><td>Very small and compact</td></tr>
      <tr><td>Fragile - glass envelope, vacuum</td><td>Robust - solid state construction</td></tr>
      <tr><td>High operating voltages (100s of volts)</td><td>Low operating voltages (few volts)</td></tr>
      <tr><td>Slow warm-up time</td><td>Instant operation</td></tr>
      <tr><td>Short lifespan - filament burns out</td><td>Very long lifespan</td></tr>
      <tr><td>Generate significant heat</td><td>Low heat generation</td></tr>
      <tr><td>Expensive</td><td>Very inexpensive - mass produced</td></tr>
    </table>
  </div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">(a) Zener Diode - 3 marks</div>
      <div class="card-desc">
        <strong>Working Principle:</strong> A Zener diode is a specially doped P-N junction diode designed to operate in REVERSE BIAS at a specific voltage called the Zener voltage (Vz). Normal diodes block reverse current, but a Zener diode is designed to break down at a precise reverse voltage and maintain that voltage across its terminals regardless of current variations.<br>
        In forward bias: behaves like a normal diode - conducts at ~<span class="n-val">0.7V</span>.<br>
        In reverse bias: blocks current until Zener voltage is reached.<br>
        At Zener voltage (Vz): breaks down - conducts in reverse - voltage across it remains constant at Vz.<br>
        Current can increase greatly but voltage stays at Vz - this is the VOLTAGE REGULATION property.<br><br>
        <strong>Applications Onboard:</strong> VOLTAGE REGULATORS - maintains constant output voltage despite varying input or load. OVERVOLTAGE PROTECTION - protects sensitive circuits from voltage spikes. VOLTAGE REFERENCE - provides stable reference voltage in measuring circuits. CLIPPER CIRCUITS - clips voltage waveforms to Zener voltage level.
      </div>
    </div>
    
    <div class="n-card" style="border-color:var(--purple-border)">
      <div class="card-title" style="color:var(--purple)">(b) Transistor (BJT) - 3 marks</div>
      <div class="card-desc">
        <strong>Working Principle:</strong> A transistor consists of three semiconductor layers: Emitter (E), Base (B) and Collector (C). In an NPN transistor, a small base current controls a much larger collector-emitter current - this is the AMPLIFICATION property.<br>
        Small current into BASE controls large current from COLLECTOR to EMITTER.<br>
        Current gain (hFE or beta) = Ic / Ib - typically <span class="n-val">50 to 500</span>.<br>
        Three operating regions: Cutoff (off), Active (amplifying), Saturation (fully on).<br>
        Used as SWITCH: Base current zero = transistor off (cutoff) | Base current sufficient = transistor fully on (saturation).<br>
        Used as AMPLIFIER: small AC signal at base produces large amplified signal at collector.<br><br>
        <strong>Applications Onboard:</strong> AMPLIFIERS - in radio receivers, alarm systems, sensor signal conditioning. SWITCHING - control relays, solenoids, alarms from small signal inputs. OSCILLATORS - generate AC signals of specific frequency. LOGIC CIRCUITS - in PLCs, alarm panels, control systems. MOTOR CONTROL - in variable speed drives, soft starters.
      </div>
    </div>

    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">(c) Photocell - 3 marks</div>
      <div class="card-desc">
        <strong>Working Principle:</strong> A photocell (or photodiode/phototransistor) converts LIGHT ENERGY into ELECTRICAL ENERGY. When light photons strike the semiconductor material, they knock electrons free from their bonds - this is the PHOTOELECTRIC EFFECT - creating electron-hole pairs and generating a current.<br>
        More light intensity = more electron-hole pairs = more current generated.<br>
        Photodiode: light creates reverse current proportional to light intensity.<br>
        Phototransistor: light acts as base current - amplifies the photocurrent.<br>
        LDR (Light Dependent Resistor): resistance DECREASES as light increases.<br><br>
        <strong>Applications Onboard:</strong> FIRE DETECTION - photoelectric smoke detectors detect smoke by light scattering. FLAME DETECTORS - UV/IR flame detectors in boiler burner management systems. LIQUID LEVEL SENSING - optical level sensors in tanks. NAVIGATION LIGHTS MONITORING - detect if navigation lights have failed. CARGO MONITORING - optical sensors for cargo presence detection. DAYLIGHT SENSORS - automatic switching of deck lighting.
      </div>
    </div>

    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">(d) Thyristor (SCR) - 4 marks</div>
      <div class="card-desc">
        <strong>Working Principle:</strong> A thyristor is a four-layer PNPN semiconductor device with three terminals: Anode (A), Cathode (K) and Gate (G). It acts as a BISTABLE SWITCH - it can be triggered ON by a gate pulse and will remain ON until the current falls below the holding current.<br>
        FORWARD BLOCKED state: Anode positive, no gate pulse - thyristor blocks current (off).<br>
        TRIGGERED ON: small gate pulse applied - thyristor switches on fully - conducts large current from anode to cathode.<br>
        Once triggered ON, gate has no further control - thyristor stays on.<br>
        TURNS OFF only when anode current falls below holding current (natural or forced commutation).<br>
        Can handle very large currents and voltages - ideal for power control.<br>
        Half-controlled rectifier: SCRs control firing angle - varying DC output voltage.<br><br>
        <strong>Applications Onboard:</strong> MOTOR SPEED CONTROL - variable voltage DC drives, soft starters. BATTERY CHARGERS - controlled rectifier circuits for charging batteries. AC VOLTAGE CONTROLLERS - dimmers, heater control. SOFT STARTERS - control inrush current during motor starting using phase angle control. STATIC CONVERTERS - convert AC to DC or control AC power. UNINTERRUPTIBLE POWER SUPPLIES (UPS) - inverter circuits in UPS systems.
      </div>
    </div>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: Semiconductor Devices</strong><br>
  Z-T-P-S: Zener (voltage regulation), Transistor (amplification/switching), Photocell (light detection), SCR/Thyristor (power control)</div></div>

  <!-- ==========================================
       2. DIESEL ELECTRIC PROPULSION
       ========================================== -->
  <div class="n-h1" id="t4-dep">🚢 2. DIESEL ELECTRIC PROPULSION SYSTEM</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Asked in:</strong> 2019/JUL/Q3, 2019/OCT1/Q4, 2019/DEC/Q2, 2022/APR/Q2, 2023/NOV/Q1, 2024/JUN/Q2, 2025/JUN/Q2, 2025/DEC/Q1</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Diesel electric propulsion is being chosen for increasingly wide variety of vessels. a) Sketch a simple layout of such an installation (8). b) Explain the advantages of selecting such a plant (8). - 16 marks</div></div>

  <div class="n-card">
    <p class="n-p"><strong>A) Sketch of Diesel Electric Propulsion Installation (8 marks)</strong></p>
    <strong>Main Components:</strong>
    <ul class="n-list">
      <li><strong>PRIME MOVERS</strong> - 3 to 6 diesel generator sets (medium speed engines) located anywhere in ship - not necessarily aft</li>
      <li><strong>MAIN GENERATORS</strong> - AC generators coupled to each diesel engine - generate electrical power (typically <span class="n-val">6.6 kV</span> or <span class="n-val">11 kV</span> on large ships)</li>
      <li><strong>MAIN SWITCHBOARD</strong> - distributes power from generators to all consumers including propulsion</li>
      <li><strong>PROPULSION TRANSFORMER</strong> - steps down voltage for propulsion drives if required</li>
      <li><strong>VARIABLE FREQUENCY DRIVES (VFD) / POWER CONVERTERS</strong> - convert AC to variable frequency AC or DC to control motor speed</li>
      <li><strong>PROPULSION MOTORS</strong> - large electric motors (synchronous or induction) connected directly to propeller shaft or through gearbox</li>
      <li><strong>PROPELLER SHAFT AND PROPELLER</strong> - driven by propulsion motor</li>
      <li><strong>CONTROL SYSTEM</strong> - integrated automation system controlling all generators, drives and propulsion motors</li>
    </ul>
    <div class="n-info"><div class="icon">✏️</div><div class="body"><strong>Sketch Description:</strong> Draw: Multiple diesel generator sets (3-4 shown) connected to main switchboard via bus bars. From main switchboard, propulsion transformers feed into frequency converters/drives. Drives feed propulsion motors. Motors connect to propeller shaft. Show service switchboard branching from main switchboard for ship's service loads.</div></div>

    <div class="note-diagram-wrap"><img src="../data/diagrams/w01-diesel-electric-propulsion.webp" alt="Diesel-electric propulsion single-line: diesel generator sets on main switchboard bus, feeding propulsion transformers and drives to propulsion motors, with service switchboard branching off" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAACwAwCdASoYABIAPu1wsFKppiSiqAgBMB2JaQAALnhdLWokHuaYQAD+8DYDggT1fcLJvV+oFRLNGNUNTaxKafoS89siaVerLKGl9+BegAA=">
      <div class="note-diagram-cap">Fig. Diesel-electric single-line - each DG set feeds the main switchboard bus (with harmonic filters); rectifier/converter drive trains take power off the bus to the propulsion motor and shaft, while a service switchboard branches off the same bus for ship's auxiliary loads.</div>
    </div>
  </div>

  <div class="n-h2">B) Advantages of Diesel Electric Propulsion (8 marks)</div>
  <div class="n-card">
    <ol class="n-steps">
      <li><strong>Flexibility of Generator Arrangement:</strong> Generator sets can be located ANYWHERE in the ship - not restricted to engine room aft. Enables better ship design - more cargo space, better weight distribution, lower centre of gravity. Used on cruise ships, ferries, drilling ships, cable layers, ice breakers.</li>
      <li><strong>Fuel Efficiency:</strong> Diesel generators operate at CONSTANT OPTIMAL SPEED (rpm) regardless of ship speed. Only the NUMBER of generators running changes with load - not the speed of each. Generators can be run at their most EFFICIENT LOAD POINT - significant fuel saving at part load. On conventional mechanical propulsion, engine speed must vary - less efficient at low speeds.</li>
      <li><strong>Redundancy and Reliability:</strong> Multiple generator sets - failure of one does not stop ship - others provide power. REDUNDANT propulsion - on some ships two propulsion motors - one can fail and ship still manoeuvres. Dynamic positioning vessels REQUIRE this redundancy for safety.</li>
      <li><strong>Excellent Manoeuvring:</strong> Electric motors provide MAXIMUM TORQUE at zero speed - ideal for manoeuvring in ports. Speed control is smooth and precise - variable frequency drive gives infinite speed variation. Direction reversal is FAST - just reverse motor current - no mechanical reversing gear needed. No need for clutch or reversing gearbox - simpler mechanical transmission.</li>
      <li><strong>Azimuth Thrusters / Pod Drives:</strong> Electric propulsion allows use of PODDED DRIVES (Azipods) - motor in pod below hull, rotates 360 degrees. Eliminates need for rudder - pod provides steering by rotation. Dramatically improves manoeuvrability - ship can move in any direction.</li>
      <li><strong>Reduced Noise and Vibration:</strong> Generators can be on ANTI-VIBRATION MOUNTS - vibration isolated from hull. Electric motors run very smoothly - less vibration than direct mechanical drive. Important for passenger comfort on cruise ships and noise-sensitive research vessels.</li>
      <li><strong>Integrated Power System:</strong> ALL ship's power (propulsion + services) from SAME generators. In light traffic or port - propulsion power available for cargo handling, hotel loads. More efficient use of installed generator capacity.</li>
    </ol>
    <br>
    <strong>Disadvantages (briefly - for balance):</strong>
    <ul class="n-list">
      <li>Higher initial CAPITAL COST - converters, motors, cables are expensive</li>
      <li>Higher TRANSMISSION LOSSES - electrical conversion has losses (~<span class="n-val">5-8%</span>)</li>
      <li>More complex ELECTRICAL SYSTEM - requires skilled ETO</li>
    </ul>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: DE Propulsion Advantages</strong><br>
  F-R-M-P-N-I: Flexibility of layout, Redundancy, Manoeuvring (max torque at zero speed), Pods enabled, Noise reduction, Integrated power</div></div>

  <!-- ==========================================
       3. EMERGENCY SOURCE OF ELECTRICAL POWER
       ========================================== -->
  <div class="n-h1" id="t4-esb">🚨 3. EMERGENCY SOURCE OF ELECTRICAL POWER</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Regulation/Standard:</strong> SOLAS Chapter II-1 Reg 42, 43, 44 - Emergency electrical power requirements<br>
  <strong>Asked in:</strong> 2019/JUL/Q1, 2019/DEC/Q3, 2021/MAR/Q1, 2023/NOV/Q2, 2024/JUN/Q3, 2025/JUN/Q3, 2025/DEC/Q2</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> With reference to emergency source of electrical power in cargo ships: a) Describe a typical power source (8). b) Give a typical list of essential services which must be supplied simultaneously. Explain how the emergency installation can be periodically tested (8). - 16 marks</div></div>

  <div class="n-card">
    <p class="n-p"><strong>A) Typical Emergency Power Source - Cargo Ships (8 marks)</strong></p>
    <ul class="n-list">
      <li><strong>Location Requirements:</strong> Emergency generator and switchboard must be located <strong>ABOVE THE BULKHEAD DECK</strong> - outside machinery spaces. Must be in a separate space from the main machinery space - fire or flooding in engine room must not affect emergency power. Located as high as practicable - protection from flooding.</li>
      <li><strong>Emergency Generator:</strong> Self-contained diesel generator - independent of main engine room. Capacity: sufficient to supply ALL required emergency services simultaneously. Starting: must be capable of AUTO-START within <strong><span class="n-val">45 seconds</span></strong> of main power failure - automatically and manually. Fuel: sufficient for MINIMUM <strong><span class="n-val">18 HOURS</span></strong> of operation at full emergency load. Fuel supply: independent - not shared with main generators. Cooling: self-contained - does not rely on main cooling systems.</li>
      <li><strong>Emergency Battery:</strong> Provides power for FIRST <strong><span class="n-val">30 MINUTES</span></strong> before emergency generator starts and takes over - or in case generator fails to start. Batteries located in emergency switchboard room or dedicated battery room. Automatically connected to emergency bus when main power fails - no manual intervention. Must maintain supply for minimum <span class="n-val">30 minutes</span> for specified loads.</li>
      <li><strong>Emergency Switchboard:</strong> Separate switchboard fed from emergency generator and batteries. Located adjacent to emergency generator - ABOVE BULKHEAD DECK. Connected to main switchboard via emergency feeder - can receive power from main when available. Has PREFERENCE RELAY - automatically disconnects non-essential loads if emergency generator overloaded.</li>
      <li><strong>Transition from Main to Emergency Power:</strong> Main power fails - batteries immediately supply emergency loads. Emergency generator auto-starts - reaches rated voltage and frequency. After <span class="n-val">45 seconds</span> - emergency generator takes over from batteries. Essential services restored in correct priority order.</li>
    </ul>
  </div>

  <div class="n-h2">B) Essential Services and Periodic Testing (8 marks)</div>
  <div class="n-card">
    <p class="n-p"><strong>List of Essential Services - Must All Be Supplied Simultaneously:</strong></p>
    <table class="n-table">
      <tr><th>Category</th><th>Essential Services</th></tr>
      <tr><td>Navigation</td><td>Navigation lights | All internal navigation aids - radar, ECDIS, GPS, echo sounder, gyrocompass | Daylight signalling lamp | Whistle</td></tr>
      <tr><td>Communication</td><td>GMDSS equipment - VHF, MF/HF, EPIRB, SART | Internal communications - PA, telephone | Ship-to-shore radio</td></tr>
      <tr><td>Fire Safety</td><td>Fire detection and alarm system | Emergency fire pump | Sprinkler pump | Fire door indicators | Fixed firefighting system controls</td></tr>
      <tr><td>Flooding Safety</td><td>Emergency bilge pump | Watertight door indicators and controls | Bilge level alarms</td></tr>
      <tr><td>Lifesaving</td><td>Emergency lighting throughout ship - corridors, stairways, muster stations, lifeboats, machinery spaces | Lifeboat launching equipment</td></tr>
      <tr><td>Control Systems</td><td>General alarm | Emergency shutdown systems | Steering gear (if connected to emergency)</td></tr>
    </table>
    
    <p class="n-p" style="margin-top:16px;"><strong>How Emergency Installation is Periodically Tested:</strong></p>
    <ul class="n-list">
      <li><strong>WEEKLY:</strong> Run emergency generator under load for minimum <strong><span class="n-val">30 minutes</span></strong> - record voltage, frequency, current, oil pressure, temperature.</li>
      <li><strong>WEEKLY:</strong> Test auto-start of emergency generator - simulate main power failure - verify starts within <strong><span class="n-val">45 seconds</span></strong>.</li>
      <li><strong>WEEKLY:</strong> Test emergency lighting - check all circuits.</li>
      <li><strong>MONTHLY:</strong> Full changeover test - switch entire ship to emergency power - verify all essential services supplied.</li>
      <li><strong>MONTHLY:</strong> Test battery capacity - verify can maintain load for <strong><span class="n-val">30 minutes</span></strong>.</li>
      <li><strong>ANNUALLY:</strong> Full inspection and test by qualified person - fuel system, cooling, starting system.</li>
      <li><strong>ANNUALLY:</strong> Verify all essential service cables are intact and circuits functional.</li>
      <li>All tests <strong>RECORDED</strong> in machinery logbook - available for PSC inspection.</li>
      <li>Testing done WITHOUT disrupting ship's normal operations where possible - or at anchor/in port.</li>
    </ul>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: Emergency Power</strong><br>
  L-S-F-C: Located above bulkhead deck, Starts in <span class="n-val">45 seconds</span>, Fuel for <span class="n-val">18 hours</span>, Covers all essential services.</div></div>

  <!-- ==========================================
       4. ALTERNATORS
       ========================================== -->
  <div class="n-h1" id="t4-alt">⚙️ 4. ALTERNATORS - POWER FACTOR, TRUE/APPARENT POWER, PARALLEL OPERATION</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Asked in:</strong> True/Apparent Power: 2018/FEB, 2018/DEC, 2019/FEB, 2025/JAN, 2025/AUG | Parallel: 2023/SEP, 2025/NOV | Reverse Power: 2021/JAN, 2022/FEB, 2024/MAR, 2024/JUL</div></div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Briefly explain true power, apparent power and power factor. 2025/AUG/Q4, 2025/JAN/Q4 - 8 marks</div></div>

  <div class="n-card">
    <p class="n-p"><strong>A) True Power, Apparent Power and Power Factor (8 marks)</strong></p>
    
    <ul class="n-list">
      <li><strong>True Power (Active Power) - P:</strong><br>
      True power is the ACTUAL power consumed by the resistive component of a circuit and converted into useful work (heat, mechanical work).<br>
      <strong>Unit:</strong> WATTS (W) or Kilowatts (kW).<br>
      <strong>Formula:</strong> <strong>P = V x I x cos(phi)</strong> - where cos(phi) is the power factor.<br>
      This is what the electricity meter measures - the power you actually pay for.<br>
      For purely resistive load: True power = Apparent power (power factor = 1).</li>
      
      <li><strong>Apparent Power - S:</strong><br>
      Apparent power is the TOTAL power supplied by the alternator - product of RMS voltage and RMS current.<br>
      <strong>Unit:</strong> VOLT-AMPERES (VA) or Kilo-Volt-Amperes (kVA).<br>
      <strong>Formula:</strong> <strong>S = V x I</strong>.<br>
      This is what the alternator must be RATED for - it must supply this total volt-amperes.<br>
      Apparent power includes both useful (true) power and reactive (wasted) power.</li>
      
      <li><strong>Reactive Power - Q:</strong><br>
      Reactive power is exchanged between source and reactive components (inductors and capacitors) - not consumed.<br>
      <strong>Unit:</strong> VOLT-AMPERES REACTIVE (VAR) or kVAR.<br>
      Inductive loads (motors, transformers) ABSORB reactive power - lagging power factor.<br>
      Capacitive loads SUPPLY reactive power - leading power factor.</li>
      
      <li><strong>Power Factor (cos phi):</strong><br>
      Power factor = True Power / Apparent Power = <strong>P / S = cos(phi)</strong>.<br>
      Range: <span class="n-val">0 to 1</span> - unity power factor (<span class="n-val">1.0</span>) means all apparent power is true power.<br>
      LOW power factor: alternator must supply more current for same true power - wastes capacity.<br>
      Typical shipboard power factor: <span class="n-val">0.8 lagging</span> - motors and transformers cause lagging PF.<br>
      POWER FACTOR CORRECTION: capacitors added to improve power factor - reduces reactive current.</li>
      
      <li><strong>Practical Importance for Marine Engineers:</strong><br>
      Alternator rated in kVA - maximum true power = kVA x power factor.<br>
      A <span class="n-val">750 kVA</span> alternator at <span class="n-val">0.85 PF</span> provides maximum <span class="n-val">637.5 kW</span> true power.<br>
      If PF falls to <span class="n-val">0.70</span>, same alternator provides only <span class="n-val">525 kW</span> - less useful power for same machine size.<br>
      Poor power factor causes: higher current, more cable losses, possible alternator overheating.</li>
    </ul>
  </div>

  <div class="n-crit" style="margin-top:16px;"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Two alternators connected in parallel - what happens when we increase the excitation of one machine? 2025/NOV/Q1 - 8 marks</div></div>

  <div class="n-card">
    <p class="n-p"><strong>B) Two Alternators in Parallel - What Happens When Excitation Increased (8 marks)</strong></p>
    <p class="n-p">When two alternators are running in parallel and the excitation (field current) of one alternator is increased:</p>
    <ul class="n-list">
      <li>EXCITATION controls the TERMINAL VOLTAGE and REACTIVE POWER (VAr) of the alternator.</li>
      <li>Increasing excitation does NOT directly change the load sharing of ACTIVE POWER (kW) between machines - that is controlled by the prime mover (fuel/throttle).</li>
    </ul>
    
    <p class="n-p" style="margin-top:12px;"><strong>What Happens Step by Step:</strong></p>
    <ol class="n-steps">
      <li>Increasing excitation increases the EMF of that alternator.</li>
      <li>With both machines connected to the same bus bars (fixed voltage), the machine with higher excitation tries to push more current.</li>
      <li>The REACTIVE CURRENT (magnetising current) of the over-excited machine INCREASES.</li>
      <li>This machine now supplies MORE REACTIVE POWER (kVAR) to the system.</li>
      <li>The other machine's excitation is now relatively UNDER-EXCITED by comparison - it absorbs reactive power.</li>
      <li><strong>Result:</strong> the over-excited machine GENERATES reactive power | the under-excited machine ABSORBS reactive power.</li>
      <li>Bus bar voltage may rise slightly if total excitation increased overall.</li>
    </ol>
    
    <p class="n-p" style="margin-top:12px;"><strong>In Practice:</strong></p>
    <ul class="n-list">
      <li>Over-excitation causes machine to operate at LEADING power factor - supplies reactive power to other machine and loads.</li>
      <li>Under-excitation causes machine to operate at LAGGING power factor - absorbs reactive power.</li>
      <li>To maintain correct load sharing - BOTH excitation AND throttle must be adjusted together.</li>
      <li>Excitation too high: machine overheats due to excess current - risk of overload.</li>
    </ul>
  </div>

  <div class="n-crit" style="margin-top:16px;"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Explain with neat diagram operation of a brushless alternator. What would likely happen if one rotating diode fails and becomes: a) An open circuit, b) A short circuit. - 16 marks<br>
  <em>Asked in: 2018/FEB-2025/AUG - very frequently asked - 16 marks</em></div></div>


  <div class="n-card">
    <p class="n-p"><strong>C) Brushless Alternator - Operation and Rotating Diode Failure (16 marks)</strong></p>
    
    <strong>Construction of Brushless Alternator:</strong>
    <ul class="n-list">
      <li>Main alternator - main stator (armature) and main rotor (field winding)</li>
      <li>Exciter - small AC generator with STATIONARY FIELD and ROTATING ARMATURE - mounted on same shaft as main alternator</li>
      <li>Rotating rectifier assembly - full wave bridge rectifier using diodes - mounted on rotating shaft</li>
      <li>AVR (Automatic Voltage Regulator) - controls exciter field current to maintain constant terminal voltage</li>
    </ul>
    
    <strong>How It Works - Step by Step:</strong>
    <ol class="n-steps">
      <li>AVR senses terminal voltage of main alternator</li>
      <li>AVR supplies DC current to EXCITER STATOR (field) - this is the only DC required from external source</li>
      <li>Exciter rotor (rotating armature) cuts exciter stator field - three-phase AC induced in exciter rotor</li>
      <li>This AC is rectified by ROTATING DIODES (mounted on shaft) - converted to DC</li>
      <li>DC from rotating diodes supplied directly to MAIN ROTOR FIELD WINDING - no brushes or slip rings needed</li>
      <li>Main rotor field creates rotating magnetic field in main stator - main AC output generated</li>
      <li>If terminal voltage drops - AVR increases exciter field current - more DC to main rotor - more main output - voltage restored</li>
    </ol>
    
    <strong>Advantages of Brushless Design:</strong>
    <ul class="n-list">
      <li>NO BRUSHES OR SLIP RINGS - no carbon dust, no brush maintenance, no sparking</li>
      <li>Suitable for HAZARDOUS AREAS - no sparks from brushes</li>
      <li>Lower maintenance - major source of failures eliminated</li>
      <li>Higher reliability - no brush wear, no brush bounce</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>Rotating Diode Failure Effects:</strong></p>
    <div class="n-grid">
      <div class="n-card" style="border-color:var(--orange-border); border-width:2px; box-shadow:none;">
        <div class="card-title" style="color:var(--orange)">a) Open Circuit Rotating Diode</div>
        <div class="card-desc">
          One diode in the rotating bridge opens - that half-cycle of exciter output is lost.<br>
          DC supplied to main field becomes PULSATING (half-wave ripple instead of smooth DC).<br>
          Main field current REDUCES - terminal voltage DROPS and becomes UNSTABLE.<br>
          Output voltage shows AC RIPPLE at exciter frequency - typically 3x shaft frequency.<br>
          AVR attempts to compensate - increases exciter field - but ripple remains.<br>
          Generator may still operate but with reduced output and unstable voltage.<br>
          <strong>Symptoms:</strong> AC ripple on DC bus, unstable output voltage, AVR hunting.
        </div>
      </div>
      <div class="n-card" style="border-color:var(--red-border); border-width:2px; box-shadow:none;">
        <div class="card-title" style="color:var(--red)">b) Short Circuit Rotating Diode</div>
        <div class="card-desc">
          One diode shorts - short circuit across that diode - creates path for reverse current.<br>
          Short circuit diode allows REVERSE CURRENT through the exciter winding at each half cycle.<br>
          This OPPOSES and partially cancels the excitation current.<br>
          Net field current REDUCES significantly - terminal voltage DROPS sharply.<br>
          AVR tries to compensate by increasing exciter field - but short circuit limits effect.<br>
          The shorted diode may overheat rapidly - thermal failure of other components possible.<br>
          Severe case: voltage collapses, generator trips on undervoltage.<br>
          <strong>Symptoms:</strong> sudden voltage drop, AVR at maximum output, generator may trip.
        </div>
      </div>
    </div>
  
    <div class="note-diagram-wrap"><img src="../data/diagrams/t01-brushless-system.webp" alt="Brushless alternator - AVR, exciter stator, exciter rotor, rotating diodes, main field and stator output" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAABQAwCdASocAA4APu1iqU2ppaOiMAgBMB2JZwAAXBug2s+K4AD+8c/8Gu8SoiLI22LPEOYxWQU2zTS7m0H+52SbUfdS2EQ34AAAAA==">
      <div class="note-diagram-cap">Fig. Brushless Alternator - AVR feeds the exciter STATOR (DC); the exciter ROTOR generates 3-phase AC; the rotating rectifier converts it to DC for the main field; the main rotor induces the stator output. Trace this chain when answering the rotating-diode failure part.</div>
    </div>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: Brushless Alternator</strong><br>
  AVR → Exciter field (stator) → Exciter armature (rotor) → Rotating diodes → Main field (rotor) → Main output (stator)</div></div>

  <!-- ==========================================
       5. REVERSE POWER PROTECTION
       ========================================== -->
  <div class="n-h1" id="t4-revpower">🔄 5. REVERSE POWER PROTECTION FOR ALTERNATORS</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Asked in:</strong> 2021/JAN/Q2, 2022/FEB/Q3, 2022/NOV/Q1, 2024/MAR/Q1, 2024/JUL/Q2</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> a) Explain why it is necessary to have reverse power protection for alternators intended for parallel operation (6). b)(i) Sketch a reverse power trip (5). b)(ii) Briefly explain the principle and how tripping is activated (5). - 16 marks</div></div>

  <div class="n-card">
    <p class="n-p"><strong>A) Why Reverse Power Protection is Necessary (6 marks)</strong><br>
    When two or more alternators are running in parallel and the prime mover (diesel engine) of one machine loses power or is throttled back too far, that alternator can become a <strong>SYNCHRONOUS MOTOR</strong> - it draws power FROM the busbar instead of supplying power TO the busbar.</p>
    
    <strong>What Happens Without Protection:</strong>
    <ul class="n-list">
      <li>The alternator whose engine loses power starts to MOTOR - draws power from the switchboard.</li>
      <li>This OVERLOADS the remaining generators - they must now supply their own load PLUS drive the motoring machine.</li>
      <li>The motoring machine acts as a LOAD on the system - absorbs real power.</li>
      <li>The diesel engine of the motoring machine is being DRAGGED - it may overspeed or be damaged.</li>
      <li>Risk of OVERLOAD TRIP on remaining generators - total blackout.</li>
    </ul>

    <strong>For DC Generators Specifically:</strong>
    <ul class="n-list">
      <li>When a DC generator becomes motorised - it draws current from the bus.</li>
      <li>This reverses the direction of current through the generator.</li>
      <li>In a DC generator acting as a motor, the armature reaction and field can lead to RUNAWAY if compound wound.</li>
      <li>Risk of mechanical damage to engine.</li>
    </ul>

    <strong>Why Protection is Needed:</strong>
    <ul class="n-list">
      <li>Prevents OVERLOADING of healthy generators.</li>
      <li>Prevents BLACKOUT from cascade tripping.</li>
      <li>Protects the DIESEL ENGINE from damage from being driven as a motor.</li>
      <li>Required by SOLAS and classification society rules for parallel operation.</li>
    </ul>
  </div>

  <div class="n-card" style="margin-top:16px;">
    <p class="n-p"><strong>B) Reverse Power Trip - Sketch and Principle (10 marks)</strong></p>
    <div class="n-info"><div class="icon">✏️</div><div class="body"><strong>Sketch Description:</strong> Draw: Alternator connected to busbar via circuit breaker. Current transformer (CT) in one phase measures current. Voltage transformer (VT) measures voltage. Both CT and VT outputs fed to REVERSE POWER RELAY (wattmetric relay). Relay output connected to trip coil of circuit breaker. Show direction of normal current flow and reverse current flow arrows.</div></div>

    <div class="note-diagram-wrap"><img src="../data/diagrams/w01-reverse-power-trip-circuit.webp" alt="Reverse power trip schematic: prime mover and generator, CT and PT sensing at the bus, directional relay comparing Va and Ia, tripping the breaker on loss of prime mover" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAABQAwCdASoYAAwAPu1iqU2ppaQiMAgBMB2JaWDrADc2+dngAAD+8JQsjWwDIWgVJjkHQjbRuIkwLHI1WEik9gr6zvhqLqCAAAA=">
      <div class="note-diagram-cap">Fig. Reverse power trip - the directional relay compares bus voltage Va and generator current Ia; if a lost prime mover lets the alternator motor instead of generate, current direction reverses relative to voltage and the relay fires the trip.</div>
    </div>
    
    <strong>Principle of Operation:</strong>
    <ul class="n-list">
      <li>The reverse power relay is a <strong>WATTMETRIC relay</strong> - it measures the direction of REAL POWER (watts) flow.</li>
      <li>It uses both VOLTAGE (from VT) and CURRENT (from CT) to determine the phase relationship.</li>
      <li>When alternator is generating: current flows OUT from alternator to busbar - power is POSITIVE.</li>
      <li>When alternator is motoring: current flows IN to alternator from busbar - power is NEGATIVE (REVERSE).</li>
      <li>The relay detects this phase reversal - power goes negative beyond the set threshold.</li>
    </ul>

    <strong>How Tripping is Activated:</strong>
    <ol class="n-steps">
      <li>CT measures line current | VT measures line voltage - both connected to relay.</li>
      <li>Relay computes: <strong>P = V x I x cos(phi)</strong> - continuously.</li>
      <li>Normal operation: P is positive - relay is stable - no trip.</li>
      <li>Engine fuel reduces - alternator starts motoring - power flow reverses.</li>
      <li>P goes NEGATIVE - beyond set threshold (typically <span class="n-val">-3%</span> to <span class="n-val">-8%</span> of rated power for AC alternators).</li>
      <li>After <strong>TIME DELAY</strong> (to prevent nuisance tripping on transients) - relay energises trip coil.</li>
      <li>CIRCUIT BREAKER OPENS - faulty alternator disconnected from busbar.</li>
      <li>Alarm sounds - engineer alerted to investigate.</li>
    </ol>

    <strong>Threshold Settings:</strong>
    <ul class="n-list">
      <li><strong>AC alternators:</strong> typically <strong><span class="n-val">3-8%</span> of rated kW</strong> in reverse before tripping.</li>
      <li><strong>DC generators:</strong> reverse current relay - trips when current reverses direction.</li>
      <li><strong>Time delay:</strong> typically <strong><span class="n-val">5-15 seconds</span></strong> - prevents nuisance trips during load swings.</li>
    </ul>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: Reverse Power Protection</strong><br>
  MOTOR = Motoring alternator draws power | Wattmetric relay detects negative power | Trips circuit breaker after time delay.</div></div>

  <!-- ==========================================
       6. OVERCURRENT PROTECTION
       ========================================== -->
  <div class="n-h1" id="t4-overcurrent">⚡ 6. OVERCURRENT PROTECTION - 3 METHODS + INVERSE TIME</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Asked in:</strong> 2018/FEB-2025/AUG (VERY FREQUENTLY ASKED)</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> a) Explain three methods of overcurrent protection for electrical circuit (8). b) Explain with aid of diagram the meaning of the term inverse current time characteristic (8). - 16 marks</div></div>

  <div class="n-card">
    <p class="n-p"><strong>A) Three Methods of Overcurrent Protection (8 marks)</strong></p>
    
    <div class="n-grid">
      <div class="n-card">
        <div class="card-title">Method 1 - FUSE</div>
        <div class="card-desc">
          A fuse is a thin wire of low melting point metal (usually tin-lead alloy) enclosed in a cartridge.<br>
          When current EXCEEDS the fuse rating, the wire HEATS UP and MELTS - breaking the circuit.<br>
          HRC (High Rupturing Capacity) fuses have sand-filled cartridge - arc quenched by sand when fuse blows.<br>
          <strong>Advantage:</strong> simple, cheap, reliable, self-resetting not required - clear indication of operation.<br>
          <strong>Disadvantage:</strong> SINGLE USE - must be replaced after operation | Cannot be tested without replacing | Risk of single-phasing if only one fuse blows in 3-phase circuit.<br>
          <strong>Used for:</strong> feeder protection, motor branch circuits, transformer primary protection.
        </div>
      </div>
      <div class="n-card">
        <div class="card-title">Method 2 - MCB / MCCB</div>
        <div class="card-desc">
          An automatic switch that TRIPS when current exceeds set value - can be RESET manually after fault is cleared.<br>
          <strong>THERMAL ELEMENT:</strong> bimetallic strip heats and bends with overload current - trips after time delay proportional to overload (inverse time characteristic).<br>
          <strong>MAGNETIC ELEMENT:</strong> electromagnet provides INSTANTANEOUS trip on heavy fault current (short circuit).<br>
          <strong>Advantage:</strong> resettable - no replacement needed | Adjustable trip setting | Can be used as isolator | Tests possible.<br>
          <strong>Disadvantage:</strong> more expensive than fuse | May not be as fast as HRC fuse on heavy fault.<br>
          <strong>Used for:</strong> distribution boards, motor starters, final circuits.
        </div>
      </div>
      <div class="n-card" style="grid-column: span 2;">
        <div class="card-title">Method 3 - OVERCURRENT RELAY with CIRCUIT BREAKER</div>
        <div class="card-desc">
          Current Transformer (CT) measures line current - provides scaled replica to overcurrent relay.<br>
          Overcurrent relay continuously monitors current level.<br>
          When current exceeds set value - relay energises after time delay - sends trip signal to circuit breaker.<br>
          Circuit breaker opens - isolates fault.<br>
          <strong>Advantage:</strong> VERY ACCURATE and ADJUSTABLE settings | Selectivity - can be coordinated with other protection | Can trip very large currents safely | Remote indication and recording.<br>
          <strong>Disadvantage:</strong> more complex and expensive | Requires CT and CB coordination.<br>
          <strong>Used for:</strong> main switchboard feeders, large motor circuits, alternator protection.
        </div>
      </div>
    </div>
  </div>

  <div class="n-card" style="margin-top:16px;">
    <p class="n-p"><strong>B) Inverse Current Time Characteristic (8 marks)</strong></p>
    <ul class="n-list">
      <li><strong>Definition:</strong> The inverse time characteristic is a protection characteristic where the <strong>TIME TAKEN TO TRIP is INVERSELY PROPORTIONAL to the MAGNITUDE OF THE OVERCURRENT</strong> - that is, the greater the overcurrent, the faster the relay trips.</li>
    </ul>
    
    <div class="n-info"><div class="icon">✏️</div><div class="body"><strong>Sketch Description:</strong> Draw axes - X axis = Current (as multiple of rated current, e.g. 1x to 10x), Y axis = Time to trip (seconds, from 0.1 to 100 on log scale). Draw a curve that starts at top left (just above rated current = slow trip, e.g. 100 seconds at 1.2x) and falls steeply towards bottom right (heavy fault current = very fast trip, e.g. 0.1 seconds at 10x). Show the current setting (pickup point) where relay starts to respond.</div></div>

    <strong>Why This Characteristic is Important:</strong>
    <ul class="n-list">
      <li>SMALL OVERLOADS (e.g. motor starting): allowed to persist for longer - motor may be starting legitimately - tripping immediately would be nuisance.</li>
      <li>MODERATE OVERLOADS: trip after intermediate time - time for operator to investigate and shed load.</li>
      <li>HEAVY FAULT CURRENT (short circuit): INSTANT trip - protects equipment from severe damage.</li>
      <li>This characteristic mirrors how equipment tolerates overcurrent - equipment can handle small overloads for longer than severe faults.</li>
    </ul>

    <strong>Standard Characteristics - IEC 60255:</strong>
    <table class="n-table">
      <tr><th>Characteristic</th><th>Description</th><th>Use</th></tr>
      <tr><td>Standard Inverse (SI)</td><td>Moderate inverse curve</td><td>General feeder protection</td></tr>
      <tr><td>Very Inverse (VI)</td><td>Steeper inverse curve - faster at moderate overcurrent</td><td>Motor protection</td></tr>
      <tr><td>Extremely Inverse (EI)</td><td>Very steep - fastest for high overcurrents</td><td>Fuse replacement, transformer protection</td></tr>
      <tr><td>Definite Time (DT)</td><td>Fixed time delay regardless of current magnitude</td><td>Where selectivity requires fixed delay</td></tr>
    </table>

    <strong>Selectivity Using Inverse Time:</strong>
    <ul class="n-list">
      <li>Multiple relays in series can be coordinated - downstream relay trips faster than upstream relay.</li>
      <li>This ISOLATES only the faulted section - healthy sections continue to operate.</li>
      <li>Called GRADED PROTECTION or DISCRIMINATION.</li>
    </ul>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: Overcurrent Protection</strong><br>
  F-M-R: Fuse (melts, single use), MCB (resets, thermal+magnetic), Relay+CB (accurate, adjustable, for large circuits)</div></div>

  <!-- ==========================================
       7. PREFERENTIAL TRIPPING
       ========================================== -->
  <div class="n-h1" id="t4-pref">🔌 7. PREFERENTIAL TRIPPING IN MARINE ELECTRICAL DISTRIBUTION</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Asked in:</strong> 2024/FEB/Q3, 2024/OCT/Q3 - 10+6 marks (16 total)</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> With reference to preferential tripping in a marine electrical distribution system: a) With the aid of a sketch, describe a typical arrangement to provide three stages of tripping giving instantaneous protection against short circuit (10). b) State why this protection is required (6). - 16 marks</div></div>

  <div class="n-card">
    <p class="n-p"><strong>What is Preferential Tripping:</strong><br>
    Preferential tripping is a system where non-essential loads are automatically disconnected in a predetermined order (preference) when the ship's generators are OVERLOADED - to protect essential services and prevent total blackout.</p>
    
    <p class="n-p" style="margin-top:12px;"><strong>A) Three Stage Preferential Tripping Arrangement (10 marks)</strong></p>
    <ul class="n-list">
      <li><strong>Stage 1 - Instantaneous Short Circuit Protection:</strong>
        <ul style="margin-bottom:8px">
          <li>Provided by INSTANTANEOUS OVERCURRENT RELAYS or magnetic trip on circuit breakers.</li>
          <li>Operates in <strong>MILLISECONDS</strong> - instantaneous response to short circuit fault.</li>
          <li>Directly trips the faulted circuit breaker.</li>
          <li>Does NOT wait for time delay - clears fault immediately to prevent damage to switchboard, cables and equipment.</li>
          <li>Set at high current (typically 8-12 times rated current) to discriminate from motor starting currents.</li>
        </ul>
      </li>
      <li><strong>Stage 2 - First Preferential Trip (Non-Essential Loads):</strong>
        <ul style="margin-bottom:8px">
          <li>When generator overloads beyond first threshold - typically <span class="n-val">10-15%</span> above rated load.</li>
          <li>FIRST PREFERENTIAL TRIP RELAY operates after SHORT TIME DELAY (e.g. <strong><span class="n-val">10-15 seconds</span></strong>).</li>
          <li>Automatically disconnects NON-ESSENTIAL LOADS in first priority group.</li>
          <li>Examples: air conditioning, galley equipment, workshop machinery, entertainment systems, cargo fans (non-critical).</li>
          <li>Load immediately reduced - generator overload relieved. Alarm sounds - engineer alerted.</li>
        </ul>
      </li>
      <li><strong>Stage 3 - Second Preferential Trip (Semi-Essential Loads):</strong>
        <ul style="margin-bottom:8px">
          <li>If overload continues despite Stage 2 (or overload is greater) - second threshold reached.</li>
          <li>SECOND PREFERENTIAL TRIP RELAY operates after LONGER TIME DELAY (e.g. <strong><span class="n-val">20-30 seconds</span></strong> from overload onset).</li>
          <li>Automatically disconnects SEMI-ESSENTIAL LOADS.</li>
          <li>Examples: non-critical pumps, deck machinery, hotel loads, second auxiliary boiler.</li>
          <li>Further load reduction - essential services protected.</li>
        </ul>
      </li>
      <li><strong>Essential Services - Never Tripped:</strong>
        <ul>
          <li>Navigation lights | GMDSS | Fire detection | Emergency lighting | Steering gear | Bilge pumps</li>
          <li>These are NEVER shed by preferential tripping - protected at all times.</li>
        </ul>
      </li>
    </ul>

    <div class="n-info"><div class="icon">✏️</div><div class="body"><strong>Sketch Description:</strong> Draw main switchboard with generator connected. Show main bus bar. From bus bar, show three categories of feeder circuit breakers: 1) Essential services (never tripped - bottom layer), 2) Semi-essential (tripped by second preference relay), 3) Non-essential (tripped by first preference relay). Show preference relays connected to overload sensing on generator. Show instantaneous short circuit protection on each feeder breaker.</div></div>

    <p class="n-p" style="margin-top:16px;"><strong>B) Why Preferential Tripping is Required (6 marks)</strong></p>
    <ul class="n-list">
      <li><strong>PREVENTS TOTAL BLACKOUT</strong> - if generator overloads, uncontrolled tripping would cause complete power failure - more dangerous than controlled load shedding.</li>
      <li><strong>MAINTAINS ESSENTIAL SERVICES</strong> - navigation, safety, fire protection never compromised even during overload.</li>
      <li><strong>PROTECTS GENERATOR</strong> - sustained overload damages generator windings - preferential tripping prevents this.</li>
      <li><strong>AUTOMATIC RESPONSE</strong> - faster than manual intervention - engineer cannot react quickly enough to prevent damage.</li>
      <li><strong>DISCRIMINATING PROTECTION</strong> - only non-essential loads shed - ship continues to operate safely.</li>
      <li><strong>REQUIRED BY SOLAS AND CLASS</strong> - mandatory for all merchant ships - part of electrical installation requirements.</li>
      <li><strong>PREVENTS CASCADE FAILURE</strong> - without preference tripping, generator trip causes blackout, emergency generator overloads, emergency generator trips - catastrophic.</li>
    </ul>
  
    <div class="note-diagram-wrap"><img src="../data/diagrams/t01-dashpot.webp" alt="Dashpot preferential trip arrangement - three stages of tripping with delayed non-essential load shedding and instantaneous short circuit contacts" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAACwAwCdASocABIAPu1mq06ppaOiKA1RMB2JaQAAO7tqaeEDwGVWYAD+8GVx0+I6G5jAWVbAA0GIJ6AaxuuIw4Zm3aHC0hoswjPJNAzksirnibWJJAyjydD4AAA=">
      <div class="note-diagram-cap">Fig. Dashpot Preferential Trip - this is the sketch part (a) asks for. Each trip relay carries a dashpot that sets its own time delay, so the stages act in order: non-essential loads shed first, semi-essential next, and only if the overload persists does the main breaker trip. The instantaneous short circuit contact bypasses the dashpot altogether, which is why a fault clears in milliseconds while a mere overload is given time to correct itself. The times marked (5 s / 10 s / 15 s) are one typical setting: the dashpot needle valve adjusts them, so other installations use longer delays.</div>
    </div>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: Preferential Tripping</strong><br>
  I-F-S-E: Instantaneous (short circuit), First preference (non-essential), Second preference (semi-essential), Essential (never tripped)</div></div>

  <!-- ==========================================
       8. NEUTRAL SYSTEMS
       ========================================== -->
  <div class="n-h1" id="t4-neutral">⚡ 8. INSULATED AND EARTHED NEUTRAL SYSTEMS</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Asked in:</strong> 2018/DEC, 2020/DEC, 2021/JUL1, 2022/JUL, 2024/DEC - 8+4+4 marks</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> With respect to Insulated and Earthed Neutral Systems used on board: a) Discuss advantages and disadvantages of both systems (8). b) What is earth fault and how do you identify earth fault in 440V system onboard (4). c) Discuss consequences of earth fault in an earthed distribution system (4). - 16 marks</div></div>

  <div class="n-card">
    <p class="n-p"><strong>A) Insulated vs Earthed Neutral - Advantages and Disadvantages (8 marks)</strong></p>
    <table class="n-table">
      <tr><th>Feature</th><th>Insulated Neutral (IT System)</th><th>Earthed Neutral (TN System)</th></tr>
      <tr><td>First earth fault</td><td class="ok">NO fault current flows on first earth fault - system continues to operate safely</td><td class="bad">LARGE fault current flows - breaker trips immediately on first fault</td></tr>
      <tr><td>Continuity of supply</td><td class="ok">Excellent - first fault does not cause loss of supply</td><td class="bad">Poor - first fault causes immediate disconnection</td></tr>
      <tr><td>Safety to personnel</td><td class="hl">First fault is safe - no shock path - second fault is dangerous</td><td class="hl">First fault trips breaker - personnel protected from sustained fault</td></tr>
      <tr><td>Fault detection</td><td>Earth lamps or insulation monitoring device (IMD) indicates fault - but fault NOT cleared</td><td>Protection relay or fuse clears fault - circuit isolated</td></tr>
      <tr><td>Fault location</td><td>Requires systematic tracing to find fault location</td><td>Fault location automatic - tripped circuit indicates fault</td></tr>
      <tr><td>Complexity</td><td>Requires insulation monitoring device - more complex</td><td>Simpler protection - standard overcurrent devices</td></tr>
      <tr><td>Application</td><td class="hl">Used for MAIN POWER DISTRIBUTION onboard (440V) - continuity essential</td><td class="hl">Used for low voltage lighting (220V) and shore supply systems</td></tr>
      <tr><td>Risk of second fault</td><td class="bad">Very dangerous - two simultaneous earth faults create short circuit - high current</td><td class="ok">Low risk - first fault already cleared</td></tr>
    </table>

    <p class="n-p" style="margin-top:16px;"><strong>B) Earth Fault and How to Identify in 440V System (4 marks)</strong></p>
    <p class="n-p"><strong>What is an Earth Fault:</strong> An earth fault occurs when a live conductor comes into contact with the metallic structure of the ship (earth) due to insulation failure, damage, or moisture ingress. Current flows from the live conductor through the fault path to earth.</p>
    
    <p class="n-p"><strong>How to Identify Earth Fault in 440V Insulated Neutral System:</strong></p>
    <ul class="n-list">
      <li><strong>EARTH LAMPS:</strong> Three lamps connected from each phase to earth. Normally all three glow at equal brightness. When earth fault occurs on one phase - that lamp DIMS or goes OUT - the other two lamps become BRIGHTER.</li>
      <li><strong>INSULATION MONITORING DEVICE (IMD):</strong> Continuously monitors insulation resistance of each phase to earth. Gives ALARM when resistance falls below set threshold (typically <span class="n-val">50 kOhm</span>). Digital display shows which phase has reduced insulation.</li>
      <li><strong>SYSTEMATIC TRACING:</strong> Trip feeders one at a time and observe earth lamps/IMD. When the faulty feeder is isolated, earth lamps return to normal brightness - fault located to that circuit.</li>
      <li><strong>MEGOHMMETER TEST:</strong> With circuit isolated, use megohmmeter to measure insulation resistance of each conductor to earth.</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>C) Consequences of Earth Fault in EARTHED Neutral System (4 marks)</strong></p>
    <ul class="n-list">
      <li><strong>IMMEDIATE CIRCUIT DISCONNECTION</strong> - earth fault creates a short circuit (fault current flows through earth path) - overcurrent protection trips the circuit breaker or blows fuse immediately.</li>
      <li><strong>LOSS OF SUPPLY</strong> - the faulted circuit loses power - if this is an essential service circuit, immediate loss of that service.</li>
      <li><strong>HIGH FAULT CURRENT</strong> - earth fault current can be very large - causes heat damage to conductors, insulation, switchgear at fault point.</li>
      <li><strong>FIRE RISK</strong> - if fault current flows for any time before protection operates, heating may ignite surrounding insulation or materials.</li>
      <li><strong>SHOCK RISK</strong> at fault location - before protection operates, fault point is at earth potential but touch voltage risk exists.</li>
      <li>Earthed system advantage: fault CLEARED quickly - less time for damage to accumulate.</li>
    </ul>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: Earth Fault Detection</strong><br>
  L-I-S-M: Lamps (phase to earth), IMD (insulation monitor), Systematic tracing (trip feeders), Megohmmeter (measure insulation resistance)</div></div>

  <!-- ==========================================
       9. HIGH VOLTAGE SYSTEMS
       ========================================== -->
  <div class="n-h1" id="t4-hv">⚠️ 9. HIGH VOLTAGE SYSTEMS - CLASSIFICATION, DISTRIBUTION, TESTING &amp; PI TEST</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Asked in:</strong> 2021/SEP/Q1, 2023/JAN/Q1, 2024/AUG/Q1, 2024/NOV/Q1 - 16 marks</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Discuss criteria of classification of marine high voltage for AC and DC systems. Sketch a ships high voltage distribution system and explain its features. Discuss various methods of testing insulation of HV system. Mention significance of PI test, why 3 terminals insulation testers are used in HV insulation measurements. - 16 marks</div></div>

  <div class="n-card">
    <p class="n-p"><strong>A) Classification of Marine High Voltage (4 marks)</strong></p>
    <p class="n-p">Under IEC 60092 and classification society rules, voltages are classified as:</p>
    <table class="n-table">
      <tr><th>Classification</th><th>AC Voltage</th><th>DC Voltage</th></tr>
      <tr><td>Low Voltage (LV)</td><td>Up to <span class="n-val">1000V AC</span></td><td>Up to <span class="n-val">1500V DC</span></td></tr>
      <tr><td>High Voltage (HV)</td><td>Above <span class="n-val">1000V AC</span></td><td>Above <span class="n-val">1500V DC</span></td></tr>
      <tr><td>Medium Voltage (typical shipboard HV)</td><td><span class="n-val">3.3 kV</span>, <span class="n-val">6.6 kV</span>, <span class="n-val">11 kV</span> AC</td><td>Common in large propulsion systems</td></tr>
    </table>
    <ul class="n-list">
      <li>Typical shipboard HV systems: <span class="n-val">3.3 kV</span> (older ships), <span class="n-val">6.6 kV</span> (common), <span class="n-val">11 kV</span> (large cruise and container ships).</li>
      <li>HV used for: main propulsion motors, large cargo pumps, bow thrusters on large vessels.</li>
      <li>HV reduces current for same power - smaller cable cross-sections, lower losses.</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>B) HV Distribution System Features (4 marks)</strong></p>
    <div class="n-info"><div class="icon">✏️</div><div class="body"><strong>Sketch Description:</strong> Draw: HV generators (3.3kV or 6.6kV) connected to HV main switchboard via HV circuit breakers (vacuum or SF6 type). From HV switchboard - HV feeders to propulsion transformers/converters and large HV motors. Also show HV/LV step-down transformers feeding 440V main switchboard for ship's service loads.</div></div>

    <div class="note-diagram-wrap"><img src="../data/diagrams/w01-hv-distribution-system.webp" alt="HV electrical single-line diagram: main generators on HV switchboard with harmonic filters, propulsion transformer/rectifier/motor drive trains, auxiliary and emergency generators, step-down transformers to LV switchboards" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAAAwAwCdASoYAA4APu1iqU2ppaOiMAgBMB2JaQAAetv2viAAAP7wfO38HJ7psiesXRg6uadtM0rw1QCNd5y4vBAAAAA=">
      <div class="note-diagram-cap">Fig. HV single-line - main generators feed the 6.6 kV HV switchboard (with harmonic filters), splitting to propulsion drive trains (rectifier-motor) on either side; the auxiliary generator ties in as backup, and step-down transformers feed the 440 V ECR sub-board and the 440 V emergency switchboard, backed by the emergency generator.</div>
    </div>
    
    <strong>Key Features:</strong>
    <ul class="n-list">
      <li><strong>VACUUM CIRCUIT BREAKERS (VCB)</strong> - used for HV switching - arc quenched in vacuum.</li>
      <li><strong>SF6 CIRCUIT BREAKERS</strong> - sulphur hexafluoride gas quenches arc - used in very high voltage systems.</li>
      <li><strong>EARTHING TRANSFORMERS</strong> - provide artificial neutral for protection purposes in insulated HV systems.</li>
      <li><strong>PROTECTION RELAYS</strong> - differential, overcurrent, earth fault protection for HV equipment.</li>
      <li><strong>INTERLOCKS</strong> - prevent unsafe switching sequences - earthing switch cannot be closed with circuit breaker closed.</li>
      <li><strong>RESTRICTED ACCESS</strong> - HV switchrooms require special permission to enter - safety critical.</li>
      <li><strong>BUSBAR PROTECTION</strong> - differential protection monitors all currents into and out of busbar.</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>C) Methods of Testing HV Insulation (4 marks)</strong></p>
    <ol class="n-steps">
      <li><strong>Megohmmeter (Insulation Resistance) Test:</strong> Apply DC voltage (typically 500V, 1000V or 5000V) across insulation - measure resistance in MOhm. Simple test - quick result - indicates general insulation condition. Limitation: single reading affected by temperature and moisture - not reliable for trending alone.</li>
      <li><strong>Polarisation Index (PI) Test - Most Important for HV:</strong> Measure insulation resistance at 1 minute and at 10 minutes under same DC test voltage. <strong>PI = R (10 min) / R (1 min)</strong>. PI > 2.0: good insulation - dry and clean. PI 1.0 to 2.0: questionable - requires investigation. PI < 1.0: POOR insulation - contaminated or damaged - do not energise.</li>
      <li><strong>Dielectric Absorption (DA) Test:</strong> Similar to PI test - uses 30 second and 60 second readings - DA ratio = <strong>R60/R30</strong>. Good insulation: ratio above 1.25.</li>
      <li><strong>Hi-Pot (High Potential) Test:</strong> Apply MUCH HIGHER voltage than operating voltage - tests insulation integrity. For new equipment: typically 2 x rated voltage + 1000V. Pass: insulation withstands test voltage - no breakdown. Destructive if insulation is borderline - may damage ageing insulation.</li>
    </ol>

    <p class="n-p" style="margin-top:16px;"><strong>D) Why 3-Terminal Insulation Testers are Used for HV (4 marks)</strong></p>
    <ul class="n-list">
      <li>Standard 2-terminal megohmmeter measures total insulation resistance - but this INCLUDES surface leakage currents across the insulation surface (due to moisture, dust, contamination) - not just through-the-insulation resistance.</li>
      <li><strong>3-TERMINAL TESTERS</strong> have a <strong>GUARD</strong> terminal - the third terminal.</li>
      <li>Guard terminal connected to any conducting surface layer on the insulation.</li>
      <li>Surface leakage current is <strong>DIVERTED</strong> through the guard terminal - not measured by the meter.</li>
      <li>Only <strong>TRUE VOLUME RESISTANCE</strong> of insulation is measured - not surface leakage.</li>
      <li>This gives accurate reading of actual insulation quality - not affected by surface contamination.</li>
      <li>Particularly important for HV insulation where surface tracking and creepage are significant concerns.</li>
      <li>Gives RELIABLE and REPEATABLE results - allows proper trending of insulation condition.</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>E) Significance of PI Test</strong></p>
    <ul class="n-list">
      <li>PI test reveals MOISTURE and CONTAMINATION in insulation - not just overall resistance.</li>
      <li>Dry, clean insulation shows RISING resistance over 10 minutes - PI > 2.</li>
      <li>Wet or contaminated insulation shows FLAT or DECLINING resistance - PI < 2.</li>
      <li>Simple IR test can give misleadingly high reading immediately but falls - PI reveals this trend.</li>
      <li>PI is STANDARD REQUIREMENT before energising HV equipment after overhaul or dry-docking.</li>
      <li>IEEE Std 43 and IEC 60034-27 recommend PI testing for HV rotating machines.</li>
    </ul>
  </div>

  <!-- ==========================================
       10. INDUCTION MOTORS
       ========================================== -->
  <div class="n-h1" id="t4-indmotor">⚙️ 10. INDUCTION MOTORS - PRINCIPLE, SLIP, STAR-DELTA, CRAWLING &amp; COGGING</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Asked in:</strong> 2018/FEB-2025/OCT - very frequently asked across multiple papers</div></div>

  <div class="n-card">
    <p class="n-p"><strong>A) Principle of Operation of Induction Motor (4 marks)</strong></p>
    <div class="n-crit" style="margin-bottom:8px;"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Briefly explain the principle of operation of induction motors. 2024/DEC, 2025/OCT - 4 marks</div></div>
    <p class="n-p">An induction motor operates on the principle of ELECTROMAGNETIC INDUCTION - the same principle as a transformer. The motor has no electrical connection between stator and rotor.</p>
    <ul class="n-list">
      <li>THREE-PHASE AC supply to stator windings creates a ROTATING MAGNETIC FIELD - rotates at synchronous speed <strong>Ns = 120f/P</strong> (where f = frequency, P = number of poles).</li>
      <li>Rotating stator field CUTS the stationary rotor conductors - EMF induced in rotor by Faraday's law.</li>
      <li>Rotor conductors are short-circuited (squirrel cage) - induced EMF drives current through rotor.</li>
      <li>Current-carrying rotor conductors in stator magnetic field experience FORCE (Lenz's law) - rotor rotates in direction of stator field.</li>
      <li>Rotor NEVER reaches synchronous speed - if it did, no relative motion between rotor and field - no induced EMF - no current - no force - rotor would slow down.</li>
      <li>Rotor always runs at SLIGHTLY LESS than synchronous speed - the difference is SLIP.</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>B) What is Slip? (4 marks)</strong></p>
    <div class="n-crit" style="margin-bottom:8px;"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> What is slip for an induction motor? 2024/DEC, 2025/OCT - 4 marks</div></div>
    <p class="n-p">Slip is the difference between the synchronous speed of the rotating magnetic field and the actual speed of the rotor, expressed as a fraction or percentage of synchronous speed.</p>
    <div class="n-formula">s = (Ns - Nr) / Ns x 100%<div class="label">Ns = synchronous speed = 120f/P | Nr = actual rotor speed</div></div>
    <ul class="n-list">
      <li>At no load: slip is very small - typically <span class="n-val">0.1% to 0.5%</span>.</li>
      <li>At full load: slip is typically <span class="n-val">3% to 8%</span> for squirrel cage motors.</li>
      <li>At standstill (starting): slip = <span class="n-val">1 (100%)</span>.</li>
      <li>Slip increases with load - more torque required = rotor slows more relative to field = more slip = more induced EMF = more current = more torque.</li>
      <li>Rotor current frequency = slip x supply frequency - at full load: <strong>fr = s x f</strong>.</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>C) Star-Delta Starter - Circuit and Operation (8 marks)</strong></p>
    <div class="n-crit" style="margin-bottom:8px;"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Draw a simple ladder logic diagram of star delta starting of an induction motor. 2025/OCT/Q1, 2024/DEC/Q2 - 8 marks</div></div>
    
    <strong>Why Star-Delta Starter is Used:</strong>
    <ul class="n-list">
      <li>Direct-on-line (DOL) starting draws 5-7 times full load current - causes voltage dip on switchboard.</li>
      <li>Star-delta reduces starting current to approximately <strong><span class="n-val">1/3</span></strong> of DOL starting current.</li>
      <li>Also reduces starting torque to <strong><span class="n-val">1/3</span></strong> - suitable for low-load start applications.</li>
    </ul>

    <strong>How Star-Delta Starter Works:</strong>
    <ul class="n-list">
      <li>START button pressed - MAIN CONTACTOR (KM) and STAR CONTACTOR (KY) close simultaneously.</li>
      <li>Motor stator windings connected in STAR - each winding receives REDUCED voltage (Vline/sqrt3).</li>
      <li>Motor accelerates under reduced voltage - current is 1/3 of delta DOL current.</li>
      <li>After preset TIME DELAY (typically <span class="n-val">5-10 seconds</span>) - motor has accelerated.</li>
      <li>STAR CONTACTOR opens - brief moment with no contactor closed - motor coasts.</li>
      <li>DELTA CONTACTOR (KD) closes - motor windings now connected in DELTA - full line voltage.</li>
      <li>Motor runs normally in delta configuration.</li>
    </ul>

    <strong>Interlock Between Star and Delta:</strong>
    <ul class="n-list">
      <li>Star and delta contactors are ELECTRICALLY INTERLOCKED - cannot close simultaneously.</li>
      <li>Closing both simultaneously would SHORT CIRCUIT the windings - catastrophic damage.</li>
      <li>Mechanical interlock also provided as backup.</li>
    </ul>

    <strong>Ladder Logic Description:</strong>
    <ul class="n-list">
      <li><strong>Rung 1:</strong> START button (NO) + STOP button (NC) + KM contact (sealing) → KM coil (main contactor)</li>
      <li><strong>Rung 2:</strong> KM contact (NO) + KD contact (NC interlock) + Timer (not yet timed out) → KY coil (star contactor)</li>
      <li><strong>Rung 3:</strong> KM contact (NO) + Timer contact (timed out) + KY contact (NC interlock) → KD coil (delta contactor)</li>
      <li><strong>Rung 4:</strong> KM contact (NO) → Timer coil (starts timing when main contactor closes)</li>
    </ul>

    <div class="note-diagram-wrap"><img src="../data/diagrams/w01-star-delta-ladder-logic.webp" alt="Star-delta motor starter ladder logic diagram with start/stop/overload rungs, main contactor Q1, timer T001, star contactor Q2 and delta contactor Q3" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRpwAAABXRUJQVlA4IJAAAABwBACdASoYAB8APu1oq08ppiOiMBgIATAdiWldgAAbocz8f+T3HvwqS42mcAD+8DN5bWPtfjGIAdo7D8K9iQRvadpx2VhQGpboy4xO5vzk9jy97dDbdpEp+HPqyqWh8aMQ9+OSXHcDIjt3S7+BvaYmG5NNG40vuaWtGjG2C37h6+7xHdsiJDiZKzCfLozwAAA=">
      <div class="note-diagram-cap">Fig. Ladder logic - Rung 1 seals in the main contactor Q1; Rung 2 energises star contactor Q2 through the timer's NC contact; the timer then drops Q2 and, via its NO contact, energises delta contactor Q3 - Q2 and Q3 rungs carry each other's NC contact as the electrical interlock.</div>
    </div>

    <p class="n-p" style="margin-top:16px;"><strong>D) Crawling and Cogging (6 marks)</strong></p>
    <div class="n-crit" style="margin-bottom:8px;"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Explain the phenomenon of crawling and cogging in three phase induction motors. 2025/JUN, 2025/OCT, 2019/JUL - 6 marks</div></div>
    
    <strong>Crawling:</strong>
    <ul class="n-list">
      <li>CRAWLING is the tendency of a squirrel cage induction motor to run steadily at a very low speed - approximately <strong><span class="n-val">1/7th</span></strong> of synchronous speed - instead of accelerating to full speed.</li>
      <li><strong>CAUSE:</strong> The stator winding produces not only fundamental (1st harmonic) rotating field but also higher harmonic fields - particularly the 7th harmonic.</li>
      <li>The 7th harmonic field rotates at 1/7th of synchronous speed - if the rotor speed coincides with this harmonic field speed, the motor can get stuck at this low speed.</li>
      <li><strong>Result:</strong> motor runs at 1/7 Ns continuously - draws high current - overheats - does not accelerate.</li>
      <li><strong>PREVENTION:</strong> Careful design of rotor slot shape - skewing of rotor slots disrupts harmonic fields.</li>
    </ul>

    <strong>Cogging (or Magnetic Locking):</strong>
    <ul class="n-list">
      <li>COGGING is the tendency of induction motor rotor to REFUSE TO START even when full voltage is applied - or to start jerkily.</li>
      <li><strong>CAUSE:</strong> When number of rotor slots equals number of stator slots (or a simple multiple/submultiple), the rotor slots align with stator slots creating regions of MINIMUM RELUCTANCE.</li>
      <li>At these positions, the rotor is magnetically LOCKED - reluctance torque opposes rotation.</li>
      <li><strong>Result:</strong> motor fails to start from certain positions, or starts with jerky rotation.</li>
      <li><strong>PREVENTION:</strong> Number of rotor slots must NOT equal or be simple multiple of stator slots | Rotor slots are SKEWED - slanted along the axis - this ensures continuous reluctance change and smooth starting.</li>
    </ul>
  </div>

  <!-- ==========================================
       11. MOTOR STARTERS
       ========================================== -->
  <div class="n-h1" id="t4-starters">🔄 11. MOTOR STARTERS - DOL, STAR-DELTA, SOFT STARTER</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Asked in:</strong> DOL: 2023/FEB, 2025/FEB, 2025/JUL | Soft start: 2023/JUL, 2024/APR, 2025/APR - 8+8 marks</div></div>

  <div class="n-card">
    <p class="n-p"><strong>A) Direct Online (DOL) Contactor Starter (8 marks)</strong></p>
    <div class="n-crit" style="margin-bottom:8px;"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Sketch a circuit diagram of a push button direct online contactor starter for a three phase incorporating overload and short circuit protection (8). Indicate on a sketch the typical characteristic curves of current and torque against speed, disadvantages of direct online start squirrel cage induction motor (8). - 16 marks</div></div>
    
    <strong>DOL Starter Circuit Description:</strong>
    <ul class="n-list">
      <li><strong>MAIN CIRCUIT:</strong> Three-phase supply → Main fuses (HRC) for short circuit protection → Overload relay (thermal) → Main contactor → Motor terminals</li>
      <li><strong>CONTROL CIRCUIT:</strong> Start button (NO) → Stop button (NC) in series → Contactor coil | Auxiliary contact of contactor (NO) in parallel with start button for HOLD-IN (sealing circuit)</li>
      <li><strong>OVERLOAD PROTECTION:</strong> Bimetallic overload relay - trips control circuit if current exceeds setting</li>
      <li><strong>SHORT CIRCUIT PROTECTION:</strong> HRC fuses in main circuit - clears short circuit fault</li>
      <li><strong>UNDERVOLTAGE PROTECTION:</strong> If supply fails, contactor de-energises - motor stops - does not restart automatically when power returns - inherent protection</li>
    </ul>

    <strong>Torque-Speed and Current-Speed Characteristics:</strong>
    <ul class="n-list">
      <li><strong>Sketch description:</strong> Draw two curves on same graph (X axis = speed from 0 to Ns, Y axis = current and torque). CURRENT curve: starts very HIGH at standstill (5-7 x FLC), falls as speed increases, reaches normal running current near synchronous speed. TORQUE curve: starts moderate at standstill, dips slightly (saddle), peaks around 70-80% synchronous speed (breakdown torque), then falls to zero at synchronous speed.</li>
    </ul>

    <div class="note-diagram-wrap"><img src="../data/diagrams/w01-dol-starter-torque-current-curves.webp" alt="DOL starter power circuit with fuses, contactor and thermal overload, paired with torque-speed and current-speed characteristic curves showing acceleration torque above resistive torque and current falling from Id to In" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAACwAwCdASoYAB4APu1usFKppiSiqAgBMB2JaWWRABtpNReX7KKfIAD+8H/ho5nfpOrNV/CPMyIDvjLlkEkVli/bptTTAEfBZ8JBsBxbV3Q/WwiRK4wAAA==">
      <div class="note-diagram-cap">Fig. DOL circuit (Q1 fuses, KM1 contactor, F2 thermal overload) alongside its characteristic curves - torque climbs to Tmax then collapses to zero at synchronous speed with the shaded gap between acceleration and resistive torque driving the run-up; current falls steeply from its locked-rotor peak (Id) down to the normal running value (In).</div>
    </div>

    <strong>Disadvantages of DOL Starting:</strong>
    <ul class="n-list">
      <li><strong>HIGH STARTING CURRENT:</strong> 5-7 times full load current - causes VOLTAGE DIP on switchboard - affects other loads</li>
      <li><strong>HIGH MECHANICAL SHOCK:</strong> Full torque applied instantly - shock to drive train, couplings, driven equipment</li>
      <li><strong>HIGH STARTING TORQUE AT LOW SPEEDS:</strong> Not always suitable - risk of damage to belt drives or centrifugal pumps</li>
      <li><strong>SWITCHBOARD VOLTAGE DIP:</strong> Lights flicker, sensitive electronics may reset, other motors may trip</li>
      <li>Only suitable for SMALL MOTORS where starting current can be tolerated by the supply</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>B) Soft Starter for Induction Motor (16 marks)</strong></p>
    <div class="n-crit" style="margin-bottom:8px;"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> What is soft starting of an Induction Motor? Describe with a circuit using thyristors used for soft starting. Discuss its advantages and disadvantages. - 16 marks | 2023/JUL, 2024/APR, 2025/APR</div></div>
    
    <strong>What is Soft Starting:</strong>
    <p class="n-p">Soft starting is a method of starting an induction motor by GRADUALLY increasing the applied voltage from a reduced value to full voltage - using thyristors (SCRs) to control the firing angle. This limits the starting current and torque to acceptable values.</p>

    <strong>Circuit Description Using Thyristors:</strong>
    <ul class="n-list">
      <li>Three pairs of thyristors (SCRs) connected in ANTI-PARALLEL configuration - one pair per phase</li>
      <li>Each pair consists of two thyristors connected back-to-back - allows both half-cycles of AC to be controlled</li>
      <li>FIRING CONTROL CIRCUIT: continuously monitors motor current and controls the firing angle (alpha) of each thyristor</li>
      <li>At START: firing angle is large - thyristors conduct for short portion of each cycle - reduced voltage to motor</li>
      <li>As motor accelerates: firing angle PROGRESSIVELY REDUCED - more voltage passed - current controlled at set ramp rate</li>
      <li>At FULL SPEED: thyristors fully conducting - full voltage applied - or bypass contactor closes, bypassing thyristors</li>
      <li>BYPASS CONTACTOR: closed when motor reaches full speed - thyristors then taken out of circuit to avoid thermal losses</li>
    </ul>

    <div class="note-diagram-wrap"><img src="../data/diagrams/w01-soft-starter-thyristor-circuit.webp" alt="Soft starter circuit showing fuse/CB, contactor, thermal overload, back-to-back SCR pairs per phase with thyristor firing circuit and run bypass contactor feeding a three-phase induction motor" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAABQAwCdASoYAA8APu1iqU2ppaOiMAgBMB2JaV2AADc1i3IoAAD+8GkGUa+jHftba3XN90WEVrmgihVKA1WPs6DbAOYqgAAA">
      <div class="note-diagram-cap">Fig. Soft starter - transformer/rectifier feeds a microcontroller that drives the thyristor firing circuit, which controls the back-to-back SCR pair in each phase; once up to speed the RUN bypass contactor closes across the SCRs to avoid continuous thermal loss in the thyristors.</div>
    </div>

    <div class="n-grid" style="margin-top:12px">
      <div class="n-card" style="border-color:var(--green-border)">
        <div class="card-title" style="color:var(--green)">Advantages of Soft Starter</div>
        <ul class="n-list" style="margin-top:8px">
          <li><strong>CONTROLLED STARTING CURRENT:</strong> current limited to typically 2-3 x full load current - no damaging current spike</li>
          <li><strong>REDUCED VOLTAGE DIP:</strong> less impact on other consumers on same switchboard</li>
          <li><strong>SMOOTH TORQUE:</strong> gradual acceleration - no mechanical shock to shaft, couplings, gearboxes</li>
          <li><strong>ADJUSTABLE RAMP:</strong> starting time and current limit adjustable to suit application</li>
          <li><strong>MOTOR PROTECTION:</strong> built-in overload and phase failure protection</li>
          <li><strong>REDUCED WEAR:</strong> less stress on mechanical components during starting</li>
          <li><strong>ENERGY SAVING:</strong> can reduce voltage during light load running (not all soft starters)</li>
        </ul>
      </div>
      <div class="n-card" style="border-color:var(--red-border)">
        <div class="card-title" style="color:var(--red)">Disadvantages of Soft Starter</div>
        <ul class="n-list" style="margin-top:8px">
          <li><strong>COST:</strong> more expensive than DOL or star-delta starter</li>
          <li><strong>HEAT GENERATION:</strong> thyristors generate heat - require cooling (heatsinks or forced air cooling)</li>
          <li><strong>HARMONIC DISTORTION:</strong> thyristor firing generates harmonics - can affect sensitive equipment</li>
          <li><strong>COMPLEXITY:</strong> more complex to maintain and fault-find than simple contactors</li>
          <li><strong>REDUCED TORQUE AT START:</strong> may not provide enough torque for high-inertia or high-load starts</li>
          <li><strong>BYPASS CONTACTOR REQUIRED:</strong> thyristors are bypassed at full speed to avoid losses - adds complexity</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- ==========================================
       12. SYNCHRONOUS MOTORS
       ========================================== -->
  <div class="n-h1" id="t4-syncmotor">⚡ 12. SYNCHRONOUS MOTORS - OPERATION, APPLICATION, CAPACITOR FUNCTION</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Asked in:</strong> 2019/AUG, 2019/OCT2, 2019/DEC, 2024/SEP, 2025/JAN - 16 marks</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> State the application of synchronous motors. Discuss how a synchronous motor can function as a synchronous capacitor. Compare synchronous motors with induction motor drives. - 16 marks</div></div>

  <div class="n-card">
    <p class="n-p"><strong>A) Principle of Operation (4 marks)</strong></p>
    <p class="n-p">A synchronous motor is an AC motor that runs at EXACTLY synchronous speed - it does not have slip. The rotor field (from DC excitation) locks onto the rotating stator field and is dragged around at synchronous speed.</p>
    <ul class="n-list">
      <li>Rotor carries DC field winding - fed via slip rings or brushless exciter</li>
      <li>Stator has three-phase AC winding - creates rotating magnetic field at Ns = 120f/P</li>
      <li>Rotor DC field locks onto stator rotating field - rotor rotates at EXACTLY synchronous speed</li>
      <li>NOT self-starting - must be accelerated to near synchronous speed before DC excitation applied</li>
    </ul>

    <strong>Starting Methods:</strong>
    <ul class="n-list">
      <li>DAMPER WINDINGS (amortisseur): squirrel cage bars embedded in rotor poles - acts as induction motor during starting - once near synchronous speed, DC field switched on - pulls into step</li>
      <li>VARIABLE FREQUENCY DRIVE: gradually increase frequency from 0 - motor accelerates synchronously</li>
      <li>PONY MOTOR: separate small motor accelerates main motor to near synchronous speed</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>B) Applications of Synchronous Motors Onboard (4 marks)</strong></p>
    <ul class="n-list">
      <li>LARGE PUMPS: main sea water circulating pumps, cargo pumps on tankers - large, constant speed loads</li>
      <li>COMPRESSORS: air conditioning and refrigeration compressors - constant speed required</li>
      <li>PROPULSION: electric propulsion systems on cruise ships and naval vessels</li>
      <li>POWER FACTOR CORRECTION: operating as synchronous capacitor (see below)</li>
      <li>PRECISION EQUIPMENT: equipment requiring exact constant speed - not affected by load changes</li>
      <li>WINCHES AND HOISTS: where precise speed control is needed</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>C) Synchronous Motor as Synchronous Capacitor (4 marks)</strong></p>
    <ul class="n-list">
      <li>When a synchronous motor is OVER-EXCITED (DC field current above normal), it draws LEADING current from the supply - it behaves like a capacitor and SUPPLIES reactive power to the system.</li>
      <li>UNDER-EXCITED: motor draws LAGGING current (like an inductor) - absorbs reactive power</li>
      <li>NORMALLY EXCITED: motor draws current at UNITY power factor - no reactive power exchange</li>
      <li>OVER-EXCITED: motor draws LEADING current - GENERATES reactive power - acts as capacitor</li>
      <li>By varying excitation, reactive power can be continuously and smoothly CONTROLLED</li>
      <li>Used for POWER FACTOR CORRECTION: improve overall system power factor of ship's electrical system</li>
      <li>Advantage over static capacitors: continuously variable and REVERSIBLE - can supply or absorb VAr</li>
      <li>Called SYNCHRONOUS CONDENSER or synchronous compensator in this application</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>D) Comparison: Synchronous Motor vs Induction Motor (4 marks)</strong></p>
    <table class="n-table">
      <tr><th>Feature</th><th>Synchronous Motor</th><th>Induction Motor (Squirrel Cage)</th></tr>
      <tr><td>Speed</td><td>Exactly synchronous speed - constant</td><td>Slightly less than synchronous - has slip</td></tr>
      <tr><td>Self-starting</td><td>NOT self-starting - requires auxiliary means</td><td>Self-starting - starts as induction motor</td></tr>
      <tr><td>Excitation</td><td>Requires separate DC excitation supply</td><td>No separate excitation needed</td></tr>
      <tr><td>Power factor</td><td>Controllable - can be unity, leading or lagging</td><td>Always lagging - 0.7 to 0.9 typically</td></tr>
      <tr><td>Efficiency</td><td>Higher at full load - no slip losses</td><td>Slightly lower - slip losses exist</td></tr>
      <tr><td>Cost</td><td>Higher - more complex construction</td><td>Lower - simpler, robust construction</td></tr>
      <tr><td>Maintenance</td><td>Higher - slip rings (unless brushless)</td><td>Lower - virtually no maintenance</td></tr>
      <tr><td>Application</td><td>Large loads requiring constant speed and PF correction</td><td>General purpose - most common shipboard motor</td></tr>
    </table>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: Synchronous Capacitor</strong><br>
  Over-excited = Leading current = Capacitor = Generates VAr = Improves power factor | Under-excited = Lagging current = Inductor = Absorbs VAr</div></div>

  <!-- ==========================================
       13. DC MOTORS
       ========================================== -->
  <div class="n-h1" id="t4-dcmotor">🔋 13. DC MOTORS - CHARACTERISTICS, BACK EMF, DC GENERATOR MOTORISATION</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Asked in:</strong> DC motor characteristics: 2024/OCT/Q2 | DC generator motorisation: 2023/JAN, 2024/MAR, 2024/NOV - 16 marks</div></div>

  <div class="n-card">
    <p class="n-p"><strong>A) Characteristics of DC Motor (4 marks)</strong></p>
    <div class="n-crit" style="margin-bottom:8px;"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Describe the characteristics of a DC motor. Explain advantages for deck machinery. Describe control system for the motor. 2024/OCT/Q2 - 4+4+8</div></div>
    
    <strong>Shunt Motor Characteristics:</strong>
    <ul class="n-list">
      <li>SPEED: nearly constant from no load to full load - slight droop due to armature resistance voltage drop</li>
      <li>TORQUE: proportional to armature current - linear relationship</li>
      <li>STARTING: low starting torque - needs external resistance to limit starting current</li>
      <li>Speed control: vary armature voltage (below base speed) or field weakening (above base speed)</li>
    </ul>

    <strong>Series Motor Characteristics:</strong>
    <ul class="n-list">
      <li>SPEED: varies greatly with load - high speed at light load, low speed at heavy load</li>
      <li>TORQUE: proportional to SQUARE of current at low currents - very high starting torque</li>
      <li>NEVER run on no load - speed becomes dangerously high (runaway)</li>
      <li>Ideal for: traction, cranes, winches - high starting torque loads</li>
    </ul>

    <strong>Advantages for Deck Machinery (Winches, Windlass):</strong>
    <ul class="n-list">
      <li>DC series motor provides HIGH TORQUE at LOW SPEED - ideal for heavy lift and anchoring</li>
      <li>Speed easily controlled by varying armature voltage - smooth and precise</li>
      <li>Regenerative braking possible - motor acts as generator - energy returned to supply</li>
      <li>Robust construction - handles shock loads well</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>B) Back EMF - Definition and Derivation (6 marks)</strong></p>
    <div class="n-crit" style="margin-bottom:8px;"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> What is back emf? Derive the relation for the back emf and the supplied voltage in terms of armature resistance. 2024/APR, 2023/OCT, 2025/APR - 6 marks</div></div>
    
    <p class="n-p">When a DC motor armature rotates in the magnetic field, it generates an EMF by Lenz's law - this induced EMF OPPOSES the applied voltage and is called BACK EMF (Eb).</p>
    <div class="n-formula">Eb = PHINZN/60A<div class="label">PHI = flux per pole | N = speed | Z = total conductors | P = poles | A = parallel paths</div></div>
    <ul class="n-list">
      <li>Eb is proportional to SPEED and FLUX - faster rotation = higher back EMF</li>
      <li>At standstill: Eb = 0 - full supply voltage drives current through armature resistance</li>
      <li>As motor accelerates: Eb increases - net voltage across armature resistance decreases - current reduces</li>
      <li>At full speed: Eb is just below supply voltage - only small current flows for no-load losses</li>
    </ul>

    <strong>Voltage Equation:</strong>
    <div class="n-formula">V = Eb + Ia x Ra<div class="label">V = supply voltage | Eb = back EMF | Ia = armature current | Ra = armature resistance</div></div>
    <ul class="n-list">
      <li>Therefore: <strong>Ia = (V - Eb) / Ra</strong></li>
      <li>Starting (Eb = 0): Ia = V/Ra - VERY LARGE CURRENT - this is why starter resistance is needed</li>
      <li>Running (Eb near V): Ia = small - normal running current</li>
      <li>Back EMF is a SELF-REGULATING mechanism - if load increases, speed drops, Eb drops, Ia increases, torque increases - automatically compensates</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>C) Which Device Prevents DC Generator from Becoming Motorised (16 marks)</strong></p>
    <div class="n-crit" style="margin-bottom:8px;"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Which of the following devices will prevent a DC generator from becoming motorized? (i) Over current relay (4) (ii) Motorization trip (4) (iii) Reverse power relay (4) (iv) Reverse current relay (4). Give detailed explanations as to why the remaining options were not considered (8). - 2023/JAN, 2024/MAR, 2024/NOV</div></div>
    
    <p class="n-p"><strong>Answer: REVERSE CURRENT RELAY prevents DC generator from motorising</strong></p>
    
    <ul class="n-list">
      <li><strong>(i) Over Current Relay - NOT suitable (4 marks):</strong><br>
      Overcurrent relay trips when current EXCEEDS a set value. When a DC generator becomes motorised, it DRAWS current from the bus instead of supplying it. The current drawn by a motorised generator may not exceed the overcurrent relay setting - it depends on load. Overcurrent relay cannot detect the DIRECTION of current flow - only the magnitude. Therefore it CANNOT reliably detect motorisation - it is NOT the correct device.</li>
      
      <li><strong>(ii) Motorisation Trip - NOT a standard protection device (4 marks):</strong><br>
      Motorisation trip is a general term - not a specific standalone relay. In practice, motorisation protection IS achieved, but through the REVERSE CURRENT RELAY - the motor trip function is the RESULT of the reverse current relay operation. There is no specific discrete device called only a motorisation trip - it is the function, not the device. Therefore this description is imprecise - the correct device is the reverse current relay.</li>
      
      <li><strong>(iii) Reverse Power Relay - Used for AC generators, NOT DC (4 marks):</strong><br>
      Reverse power relay (wattmetric relay) detects reversal of REAL POWER FLOW - designed for AC alternators. For AC systems: measures V x I x cos(phi) - detects when power direction reverses. For DC generators: power reversal detection is simpler - just current direction. A reverse power relay requires AC voltage and current phasors to compute power - NOT applicable to DC systems. Therefore the REVERSE POWER RELAY is for AC generators - NOT the correct device for DC generators.</li>
      
      <li><strong>(iv) Reverse Current Relay - CORRECT device (4 marks):</strong><br>
      The REVERSE CURRENT RELAY detects when the direction of current through the DC generator REVERSES. Normal operation: generator supplies current TO the busbar - current flows OUT of positive terminal. Motorising: generator draws current FROM the busbar - current flows INTO positive terminal - DIRECTION REVERSES. Reverse current relay uses a directional current sensing element (polarised electromagnet or rectifier circuit). When current direction reverses beyond threshold - relay trips the generator circuit breaker. Threshold typically set at <span class="n-val">5-8%</span> of rated current in reverse direction - time delay to prevent nuisance trips. After tripping, the generator is isolated - engine can be stopped or investigated. CONCLUSION: Reverse current relay is the ONLY device that correctly detects motorisation in DC generators by sensing current reversal.</li>
    </ul>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: DC Generator Protection</strong><br>
  Reverse CURRENT relay (DC) = detects current direction reversal | Reverse POWER relay (AC) = detects power flow reversal</div></div>

  <!-- ==========================================
       14. TRANSFORMERS
       ========================================== -->
  <div class="n-h1" id="t4-trafo">🔌 14. TRANSFORMERS - LOSSES, EFFICIENCY, LIQUID-COOLED HAZARDS, 3-PHASE</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Asked in:</strong> Liquid-cooled hazards: 2023/FEB, 2023/APR, 2023/JUL, 2023/SEP, 2023/NOV, 2024/JUL, 2024/OCT, 2025/FEB, 2025/SEP, 2025/NOV - VERY FREQUENTLY ASKED</div></div>

  <div class="n-card">
    <p class="n-p"><strong>A) Potential Hazards of Liquid-Cooled Transformers (6 marks)</strong></p>
    <div class="n-crit" style="margin-bottom:8px;"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Explain the potential hazards if liquid-cooled transformers are used. - 2023/FEB onwards, 6 marks almost every paper</div></div>
    
    <p class="n-p">Liquid-cooled transformers use oil (mineral or synthetic) for both cooling and insulation. While effective, they introduce several significant hazards onboard ship:</p>
    <ul class="n-list">
      <li><strong>Hazard 1 - FIRE HAZARD:</strong> Transformer oil is FLAMMABLE - if the transformer overheats or has an internal fault (arc), the oil can ignite. The fire can be difficult to extinguish - oil fires require foam or CO2. In an engine room environment, an oil transformer fire can rapidly escalate.</li>
      <li><strong>Hazard 2 - EXPLOSION RISK:</strong> Internal arcing or severe overheating causes oil to VAPORISE rapidly. The sudden expansion of oil vapour can RUPTURE the transformer tank - explosion of the tank can cause structural damage and propel burning oil fragments throughout the space.</li>
      <li><strong>Hazard 3 - OIL SPILL POLLUTION:</strong> Transformer oil is an ENVIRONMENTAL POLLUTANT under MARPOL Annex I. Any leakage or rupture releases oil that can contaminate bilges, enter the sea, and cause pollution offences.</li>
      <li><strong>Hazard 4 - TOXIC FUMES:</strong> Older transformers may contain PCB (polychlorinated biphenyl) oil - known carcinogen. Even modern transformer oil, when burned, produces toxic combustion products including carbon monoxide, acrolein and other harmful gases.</li>
      <li><strong>Hazard 5 - ELECTRICAL HAZARD:</strong> Oil-cooled transformers operate at HIGH VOLTAGE. Oil provides insulation - if oil quality degrades (moisture ingress, contamination) insulation breaks down - risk of electric shock to personnel and equipment damage.</li>
      <li><strong>Hazard 6 - MOISTURE INGRESS:</strong> Oil is HYGROSCOPIC - absorbs moisture from atmosphere. Moisture reduces insulation quality, promotes partial discharge, and accelerates insulation deterioration.</li>
    </ul>

    <strong>Precautions and Alternatives:</strong>
    <ul class="n-list">
      <li><strong>DRY-TYPE TRANSFORMERS</strong> (resin-encapsulated) - preferred for shipboard use - no oil - no fire risk - no pollution risk - suitable for enclosed spaces.</li>
      <li>If oil-type used: install in FIRE RESISTANT ENCLOSURE | Provide OIL CONTAINMENT TRAY (bund) | Install BUCHHOLZ RELAY (detects gas from internal faults) | Regular OIL SAMPLING AND TESTING.</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>B) Transformer Losses - Types and Factors Affecting (3 marks)</strong></p>
    <div class="n-crit" style="margin-bottom:8px;"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> What are the losses in transformers? Mention various factors which affect these losses. - Part of frequently asked question</div></div>
    
    <ul class="n-list">
      <li><strong>Iron Losses (Core Losses) - CONSTANT:</strong><br>
      HYSTERESIS LOSS: Energy lost in magnetising and demagnetising the core material each cycle - proportional to frequency and flux density (Bmax^1.6).<br>
      EDDY CURRENT LOSS: Circulating currents induced in the laminated core - proportional to frequency squared and flux density squared.<br>
      Minimised by: using SILICON STEEL core (high resistivity) and THIN LAMINATIONS (0.3-0.5 mm).<br>
      Iron losses are CONSTANT - do not depend on load current - present whenever transformer is energised.</li>
      
      <li><strong>Copper Losses (I^2R Losses) - VARIABLE:</strong><br>
      Heat dissipated in primary and secondary winding resistances.<br>
      Copper losses = I1^2 x R1 + I2^2 x R2.<br>
      VARIABLE - proportional to SQUARE OF LOAD CURRENT - increase with load.<br>
      Minimised by: using large cross-section conductors (lower resistance).</li>
    </ul>

    <strong>Factors Affecting Losses:</strong>
    <ul class="n-list">
      <li>FREQUENCY: higher frequency increases both hysteresis and eddy current losses</li>
      <li>FLUX DENSITY: higher flux density increases core losses - determined by applied voltage</li>
      <li>LOAD CURRENT: higher load increases copper losses proportionally to I^2</li>
      <li>TEMPERATURE: higher temperature increases resistance - more copper losses</li>
      <li>CORE MATERIAL: silicon steel has lower losses than plain iron</li>
      <li>LAMINATION THICKNESS: thinner laminations reduce eddy current losses</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>C) 3-Phase Transformers - Parallel Operation and Bank vs Unit (16 marks)</strong></p>
    <div class="n-crit" style="margin-bottom:8px;"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> With reference to 3-phase transformers: a) Essential and desirable conditions for parallel operation (5). b) Advantages of transformer bank of three 1-phase transformers over unit 3-phase transformer (5). c) Efficiency calculation at half load 0.8 PF (6). - 2025/JAN, 2025/AUG</div></div>
    
    <strong>Essential Conditions for Parallel Operation of 3-Phase Transformers:</strong>
    <ul class="n-list">
      <li><strong>Essential 1 - SAME VOLTAGE RATIO:</strong> both transformers must have same turns ratio - equal primary and secondary voltages. If different - circulating current will flow between the transformers even at no load.</li>
      <li><strong>Essential 2 - SAME POLARITY:</strong> both transformers must have same polarity - angular displacement between primary and secondary must be the same. Incorrect polarity causes large circulating currents.</li>
      <li><strong>Essential 3 - SAME PHASE SEQUENCE:</strong> the phase rotation of both must be identical. Wrong phase sequence causes large fault currents and equipment damage.</li>
      <li><strong>Essential 4 - SAME VECTOR GROUP:</strong> both transformers must have same vector group (e.g. both Dyn11 or both YNyn0). Different vector groups cause phase displacement - large circulating currents.</li>
    </ul>

    <strong>Desirable Conditions:</strong>
    <ul class="n-list">
      <li><strong>SAME PERCENTAGE IMPEDANCE:</strong> transformers with same per-unit impedance share load proportionally to their ratings. Different impedances cause unequal load sharing - smaller impedance transformer takes more load.</li>
      <li><strong>SAME KVA RATING:</strong> for most efficient utilisation - equal ratings share load equally.</li>
      <li><strong>SAME FREQUENCY:</strong> obvious but important - must both be on same supply.</li>
    </ul>

    <strong>Advantages of Three Single-Phase Transformer Bank Over Unit 3-Phase Transformer:</strong>
    <ul class="n-list">
      <li><strong>SPARE:</strong> one single-phase transformer of the bank can be carried as a spare - unit 3-phase transformer spare is the entire unit (very expensive and heavy)</li>
      <li>If one transformer FAILS: the bank can continue with remaining two in open-delta (V-connection) at 57.7% capacity - unit 3-phase transformer is completely out of service on failure</li>
      <li><strong>TRANSPORTATION:</strong> single-phase units are smaller and lighter - easier to transport to ship through narrow passages and hatches</li>
      <li><strong>MAINTENANCE:</strong> individual units can be serviced one at a time - bank can continue operating at reduced capacity</li>
      <li><strong>REPAIR:</strong> single units can be sent ashore for repair - more workshop options available</li>
    </ul>

    <strong>Advantages of Unit 3-Phase Transformer:</strong>
    <ul class="n-list">
      <li>SMALLER OVERALL SIZE AND WEIGHT: single unit is more compact than three separate units</li>
      <li>LOWER COST: single unit generally less expensive than three single-phase units of equivalent total rating</li>
      <li>SIMPLER CONNECTIONS: only one set of connections required</li>
    </ul>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: Transformer Parallel Conditions</strong><br>
  V-P-PS-VG: Voltage ratio (same), Polarity (same), Phase Sequence (same), Vector Group (same)</div></div>

  <!-- ==========================================
       15. RECTIFIERS
       ========================================== -->
  <div class="n-h1" id="t4-rect">〽️ 15. RECTIFIERS - HALF WAVE, FULL WAVE, BRIDGE, PEAK</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Asked in:</strong> 2024/OCT/Q1, 2025/FEB/Q3, 2025/JUL/Q3 - 16 marks</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Differentiate between half and full wave rectification. State where half wave rectification may be used and purpose for which it is not well adapted. Sketch a bridge connection by which full wave rectification may be obtained. - 16 marks</div></div>

  <div class="n-card">
    <div class="note-diagram-wrap"><img src="../data/diagrams/t08-rectifier-circuits.webp" alt="Half-wave, full-wave centre-tap and bridge rectifier circuits with their output waveforms" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAgCdASocAA4APwFqrU8rJiQiMAgBYCAJaWVuADdYAAD+7/MkuCVykR/HBOTvhP3YwccJe9EXuHiugbfzVhoAAAA=">
      <div class="note-diagram-cap">Fig. Rectifier Circuits - half-wave (1 diode), full-wave centre-tap, and the bridge connection (4 diodes, D1/D3 conducting on one half cycle and D2/D4 on the other), with output waveforms and ripple compared. The bridge is the one the question asks you to sketch.</div>
    </div>
  </div>



  <div class="n-card">
    <p class="n-p"><strong>A) Half Wave Rectifier (4 marks)</strong></p>
    <p class="n-p">A half wave rectifier uses a SINGLE DIODE to pass only ONE HALF CYCLE of the AC input - either the positive or negative half cycle.</p>
    <ul class="n-list">
      <li>CIRCUIT: Single diode in series with load resistor across AC supply</li>
      <li>OPERATION: Positive half cycle - diode forward biased - conducts - current flows through load. Negative half cycle - diode reverse biased - blocks - no current</li>
      <li>OUTPUT: Pulsating DC - only positive half cycles appear at output - large gaps between pulses</li>
      <li>DC OUTPUT VOLTAGE (average): <strong>Vdc = Vm / pi = 0.318 x Vm</strong> - where Vm = peak AC voltage</li>
      <li>RIPPLE: very high - 121% ripple factor - requires large capacitor filter to smooth</li>
    </ul>
    
    <strong>Where Half Wave Used:</strong>
    <ul class="n-list">
      <li>Signal detection circuits - AM radio demodulation</li>
      <li>Battery chargers where smooth DC not critical</li>
      <li>Signal rectification in instruments and meters</li>
    </ul>
    
    <strong>Where NOT Well Adapted:</strong>
    <ul class="n-list">
      <li>NOT suitable for POWER SUPPLIES requiring smooth DC - excessive ripple</li>
      <li>NOT suitable for HIGH POWER applications - only uses half of AC waveform - inefficient (transformer utilisation factor 28.7%)</li>
      <li>NOT suitable for motor drives - pulsating current causes torque ripple</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>B) Full Wave Rectifier - Bridge Connection (8 marks)</strong></p>
    <p class="n-p">A BRIDGE RECTIFIER uses FOUR DIODES arranged in a bridge configuration to rectify BOTH HALF CYCLES of AC - producing smoother DC output.</p>
    
    <strong>Bridge Circuit Description:</strong>
    <p class="n-p">Draw a diamond/square arrangement of four diodes (D1, D2, D3, D4). Label the four corners: top (A+), bottom (A-), left (AC input +) and right (AC input -). Diodes arranged so that: D1 top-left to top, D2 top-right to top, D3 bottom to bottom-left, D4 bottom to bottom-right. Show load connected between top (positive) and bottom (negative) output. Show AC input across left and right corners.</p>
    
    <strong>Operation:</strong>
    <ul class="n-list">
      <li>POSITIVE HALF CYCLE: Current flows through D1 → load → D4 - load sees positive voltage</li>
      <li>NEGATIVE HALF CYCLE: Current flows through D2 → load → D3 - load STILL sees positive voltage</li>
      <li>Both half cycles produce current in SAME direction through load - full wave rectification</li>
      <li>DC OUTPUT VOLTAGE: <strong>Vdc = 2Vm/pi = 0.637 x Vm</strong> - twice the half wave output</li>
      <li>RIPPLE: much lower - 48% ripple factor - easier to filter</li>
      <li>RIPPLE FREQUENCY: 2 x supply frequency - 100Hz for 50Hz supply - easier to filter than 50Hz</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>C) Comparison Table (4 marks)</strong></p>
    <table class="n-table">
      <tr><th>Feature</th><th>Half Wave</th><th>Full Wave (Bridge)</th></tr>
      <tr><td>Diodes required</td><td>1</td><td>4</td></tr>
      <tr><td>Output frequency</td><td>Same as supply (50Hz)</td><td>Twice supply (100Hz)</td></tr>
      <tr><td>DC output voltage (avg)</td><td><span class="n-val">0.318 x Vm</span></td><td><span class="n-val">0.637 x Vm</span></td></tr>
      <tr><td>Ripple factor</td><td>121% - very high</td><td>48% - much lower</td></tr>
      <tr><td>Transformer utilisation</td><td>28.7% - very inefficient</td><td>81.2% - much better</td></tr>
      <tr><td>Filter required</td><td>Very large filter needed</td><td>Smaller filter needed</td></tr>
      <tr><td>Efficiency</td><td>40.6%</td><td>81.2%</td></tr>
      <tr><td>Applications</td><td>Low power, signal detection</td><td>Power supplies, battery chargers, drives</td></tr>
    </table>

    <p class="n-p" style="margin-top:16px;"><strong>D) Peak Rectifier (4 marks)</strong></p>
    <div class="n-crit" style="margin-bottom:8px;"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> By means of schematic circuit diagram illustrate the peak rectifier. If supply voltage is v(t) = Vm Sin(wt), what is the voltage across the load resistor? - 2023/OCT, 2025/APR</div></div>
    
    <ul class="n-list">
      <li>A peak rectifier (or peak detector/clamper circuit) captures and holds the PEAK VALUE of the AC input voltage.</li>
      <li>CIRCUIT: Diode in series + capacitor in parallel with load resistor</li>
      <li>OPERATION: During positive half cycle, diode conducts and charges capacitor to peak voltage Vm</li>
      <li>When AC falls below capacitor voltage: diode reverse biased - capacitor HOLDS charge - maintains output near Vm</li>
      <li>OUTPUT VOLTAGE: approximately equal to PEAK voltage Vm - much higher than average rectifier output</li>
      <li>If v(t) = Vm sin(wt) then <strong>Vload ≈ Vm</strong> (peak voltage, with small ripple if capacitor is large)</li>
      <li>APPLICATIONS: Power supplies needing high DC voltage from AC | Amplitude detection in communications | Voltage multiplier circuits</li>
    </ul>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: Rectifier Output Voltages</strong><br>
  Half wave: Vdc = 0.318 x Vm | Full wave bridge: Vdc = 0.637 x Vm | Peak rectifier: Vdc ≈ Vm</div></div>

  <!-- ==========================================
       16. PLC
       ========================================== -->
  <div class="n-h1" id="t4-plc">💻 16. PLC - PROGRAMMABLE LOGIC CONTROLLERS</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Asked in:</strong> 2020/FEB, 2021/JAN, 2021/FEB, 2022/FEB, 2025/MAR - 8+4+4 marks</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> With respect to PLCs used onboard ships: a) Draw and explain the block diagram of a PLC (8). b) Name the onboard ship equipment where PLCs are used (4). c) What are the advantages of PLC controllers over other types of controllers? (4). - 16 marks</div></div>

  <div class="n-card">
    <p class="n-p"><strong>A) Block Diagram of PLC (8 marks)</strong></p>
    <p class="n-p">Main Sections of a PLC:</p>
    
    <ul class="n-list">
      <li><strong>1. Input Section (Input Module):</strong> Receives signals from FIELD DEVICES - sensors, switches, transmitters, limit switches, push buttons. Converts signals to logic levels (24VDC or 5VDC) for CPU processing. ISOLATES field signals from CPU using optocouplers - protection from surges. Monitors: discrete inputs (on/off switches) and analogue inputs (temperature, pressure, flow signals).</li>
      <li><strong>2. CPU (Central Processing Unit):</strong> The BRAIN of the PLC - executes the control program. Continuously scans program in a repeating SCAN CYCLE: Read inputs → Execute program → Update outputs. Contains: processor, memory (program and data storage), internal timers and counters. Program stored in FLASH MEMORY - retained when power is off. Scan cycle time: typically <span class="n-val">1-100 milliseconds</span>.</li>
      <li><strong>3. Memory:</strong> PROGRAM MEMORY: stores the user control program (ladder logic, function block diagram). DATA MEMORY: stores input/output status, timer values, counter values, internal variables. Battery-backed RAM: retains data during power failure.</li>
      <li><strong>4. Output Section (Output Module):</strong> Receives logic signals from CPU - converts to OUTPUT SIGNALS for field devices. Drives: contactors, solenoid valves, motor starters, alarm indicators, displays. Output types: relay outputs (can switch AC or DC), transistor outputs (DC only, fast), triac outputs (AC). ISOLATED from CPU - protects processor from load switching transients.</li>
      <li><strong>5. Power Supply:</strong> Converts incoming supply (24VDC or 230VAC) to regulated voltages for all modules. Provides backup battery for memory retention.</li>
      <li><strong>6. Programming Device / HMI:</strong> PC or handheld terminal used to write, upload and modify program. HMI (Human Machine Interface) - touchscreen display for operator monitoring and control. Communication via USB, Ethernet, RS232/485.</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>B) Onboard Ship Equipment Using PLCs (4 marks)</strong></p>
    <ul class="n-list">
      <li>CARGO HANDLING SYSTEMS: container ship cranes, tanker cargo pump control, bulk carrier conveyor systems</li>
      <li>BALLAST WATER MANAGEMENT SYSTEM: automatic control of ballast pumps and valves</li>
      <li>ENGINE ROOM AUTOMATION (UMS): monitoring and control of main engine, boilers, pumps, separators</li>
      <li>FIRE DETECTION AND CONTROL: fire detection panels, deluge system control</li>
      <li>DYNAMIC POSITIONING SYSTEM: automatic position control using GPS, gyro, wind sensors</li>
      <li>REFRIGERATION CONTROL: reefer container temperature control, refrigerated cargo hold control</li>
      <li>SEWAGE TREATMENT PLANT: automatic control of treatment process</li>
      <li>HVAC SYSTEM: heating, ventilation and air conditioning control</li>
      <li>STEERING GEAR CONTROL: autopilot and steering control systems</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>C) Advantages of PLCs Over Other Controllers (4 marks)</strong></p>
    <table class="n-table">
      <tr><th>Advantage</th><th>Explanation</th></tr>
      <tr><td>Flexibility</td><td>Program can be CHANGED without rewiring - simply reprogram. Relay logic requires complete rewiring for any logic change.</td></tr>
      <tr><td>Reliability</td><td>No moving parts in logic - more reliable than relay panels. Mean time between failures (MTBF) very high - years of continuous operation.</td></tr>
      <tr><td>Fault diagnosis</td><td>Built-in FAULT DETECTION - monitors its own operation, inputs and outputs. LED indicators show status of each I/O - quick fault finding.</td></tr>
      <tr><td>Compact size</td><td>One PLC replaces hundreds of relays, timers, counters - massive space saving in control panels.</td></tr>
      <tr><td>Easy maintenance</td><td>Modular design - faulty module simply swapped. No need to trace wiring in complex relay panels.</td></tr>
      <tr><td>Data logging</td><td>PLC can LOG data - alarms, events, process values - stored for analysis and reporting.</td></tr>
      <tr><td>Communication</td><td>Can connect to SCADA, DCS, HMI systems - data sharing across the ship network.</td></tr>
      <tr><td>Cost effective</td><td>Lower lifetime cost - reduced wiring, faster installation, less maintenance, longer life.</td></tr>
    </table>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: PLC Scan Cycle</strong><br>
  I-E-O: Input scan (read all inputs), Execute program (run ladder logic), Output update (write all outputs) - repeats continuously</div></div>

  <!-- ==========================================
       17. UMS
       ========================================== -->
  <div class="n-h1" id="t4-ums">🚨 17. UMS - UNATTENDED MACHINERY SPACES</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Asked in:</strong> 2023/APR/Q7, 2025/SEP/Q7 - 7+7+6 marks (20 marks in some papers)</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> UMS monitoring and control system giving false alarms and incorrect data printouts. State possible causes if: i) Localised to a particular area of engine operation ii) General to the engine room. State action as Electrical Engineer. Explain procedure to locate and rectify a general fault in the UMS system. - 2023/APR, 2025/SEP</div></div>

  <div class="n-card">
    <p class="n-p"><strong>A) Possible Causes of False Alarms - Localised to Particular Area (7 marks)</strong></p>
    <p class="n-p">If false alarms are localised to ONE particular area or system:</p>
    <ul class="n-list">
      <li>FAULTY SENSOR: The sensor (temperature, pressure, level, flow) in that area has failed - drifted out of calibration or developed an internal fault - gives incorrect reading</li>
      <li>DAMAGED SIGNAL CABLE: Cable from sensor to alarm panel in that area has developed a fault - short circuit, open circuit, moisture ingress, mechanical damage causing intermittent signal</li>
      <li>LOOSE CONNECTION: Terminal connections at sensor, junction box or panel have become loose - causing intermittent or spurious signals</li>
      <li>SENSOR CONTAMINATION: Sensor is physically blocked or contaminated - pressure transmitter blocked with sludge, temperature sensor with scale - gives wrong reading</li>
      <li>INCORRECT ALARM SETPOINT: Alarm setpoint for that specific sensor has been changed inadvertently or drifted - alarm activates at wrong value</li>
      <li>VIBRATION: Excessive vibration in that area causing micro-fractures in sensor wiring or loose connectors</li>
      <li>LOCAL EARTHING FAULT: Earth fault in that area introducing noise into signal cables - causing spurious readings</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>B) Possible Causes - General to Engine Room (7 marks)</strong></p>
    <p class="n-p">If false alarms and incorrect data are GENERAL throughout the engine room:</p>
    <ul class="n-list">
      <li>POWER SUPPLY FAILURE/INSTABILITY: Unstable power supply to UMS (24VDC or 110VAC) - voltage fluctuations affect all sensors and processing simultaneously</li>
      <li>COMMON EARTH FAULT: Earth fault in common power supply or signal ground - introduces noise across all channels simultaneously</li>
      <li>CPU/PROCESSOR FAULT: Failure of the central processing unit or data acquisition card - affects all processing and output</li>
      <li>COMMUNICATION BUS FAULT: Fault in the fieldbus or data communication network (Modbus, PROFIBUS etc.) - data from all sensors corrupted or lost</li>
      <li>POWER SURGE: Lightning strike or switching surge has damaged the input cards - multiple channels affected</li>
      <li>ENVIRONMENTAL: Excessive heat or humidity in UMS control room affecting all electronics</li>
      <li>SOFTWARE FAULT: Software corruption or watchdog failure causing erratic system behaviour</li>
      <li>BATTERY FAILURE: Backup battery failure causing memory corruption - system resets to incorrect state</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>C) Action as Electrical Engineer (7 marks)</strong></p>
    <strong>Immediate Actions:</strong>
    <ul class="n-list">
      <li>INFORM MASTER and Chief Engineer immediately - may need to post an engine room watch (cancel UMS)</li>
      <li>ACTIVATE MANUAL WATCH: If UMS reliability is in doubt - post continuous watch in engine room as per SOLAS requirements for UMS ships</li>
      <li>CHECK POWER SUPPLY: Verify UMS power supply voltages are correct and stable - check fuses, isolators</li>
      <li>IDENTIFY FAULT SCOPE: Determine if fault is localised or general - check alarm panel for which zones/channels are affected</li>
      <li>CHECK RECENT MAINTENANCE: Any recent work done that may have disturbed cables or connections?</li>
      <li>BACKUP MONITORING: Ensure all critical parameters being manually monitored during investigation</li>
    </ul>

    <strong>Investigation Procedure:</strong>
    <ul class="n-list">
      <li>CHECK UMS DIAGNOSTIC DISPLAY: Modern UMS systems have built-in diagnostics - check error logs and fault indicators</li>
      <li>ISOLATE SUSPECT AREA: If localised - isolate that sensor/circuit and observe if general alarms clear</li>
      <li>CHECK SIGNAL CABLES: Measure cable insulation resistance - check for open circuits or shorts</li>
      <li>VERIFY SENSORS: Check sensor calibration - measure actual physical parameter independently (thermometer, pressure gauge) and compare</li>
      <li>CHECK EARTH CONTINUITY: Test all earth connections - look for earth loops or broken earths</li>
      <li>POWER SUPPLY CHECK: Measure all supply voltages - check ripple and stability with oscilloscope</li>
    </ul>

    <p class="n-p" style="margin-top:16px;"><strong>D) Procedure to Locate and Rectify General UMS Fault (6 marks)</strong></p>
    <ul class="n-list">
      <li>DIVIDE THE SYSTEM: Systematically divide UMS into sections - power supply, input cards, processor, output cards, communication, display</li>
      <li>START WITH POWER: Check all supply voltages and fuses - most common cause of general failures</li>
      <li>CHECK COMMUNICATION BUS: Use diagnostic tools to test communication between nodes - identify any nodes not responding</li>
      <li>ISOLATE SUSPECT MODULE: If a card or module suspected - isolate and replace with spare if available - observe if fault clears</li>
      <li>SENSOR VERIFICATION: Cross-check sensor readings against independent measurement</li>
      <li>SOFTWARE: Perform controlled SYSTEM RESTART if hardware checks are satisfactory - may clear software glitch</li>
      <li>DOCUMENT ALL FINDINGS: Record all measurements, parts replaced, tests done - for future reference</li>
      <li>RETURN TO UMS: Once fault found and rectified - verify system is reading correctly across ALL parameters before withdrawing manual watch</li>
    </ul>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: UMS Fault Investigation</strong><br>
  P-C-I-S-E-S: Power supply check, Communication bus, Input card test, Sensor verification, Earth check, Software restart if needed</div></div>

  <!-- ==========================================
       18. PROPORTIONAL + INTEGRAL CONTROL
       ========================================== -->
  <div class="n-h1" id="t4-pi">🎛️ 18. PROPORTIONAL + INTEGRAL (P+I) CONTROL</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Asked in:</strong> 2021/APR2/Q2, 2021/SEP/Q3, 2022/MAR/Q3, 2023/APR/Q5, 2023/SEP/Q4, 2025/MAR/Q2, 2025/NOV/Q5 - 6+10 marks</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> a) Sketch an arrangement showing the principal of a proportional plus integral (P+I) control loop (6). b) Compare the series and parallel resonance circuits (10). - 16 marks (P+I part is 6 marks)</div></div>

  <div class="n-card">
    <p class="n-p"><strong>A) Proportional Plus Integral (P+I) Control - 6 marks</strong></p>
    
    <ul class="n-list">
      <li><strong>What is Control Error:</strong><br>
      ERROR (e) = Set Point (SP) - Process Variable (PV) - the difference between desired and actual value.<br>
      Controller's job: drive error to ZERO - maintain process at set point.</li>
      
      <li><strong>Proportional Control (P):</strong><br>
      Output proportional to current error: Output = Kp x e.<br>
      PROBLEM: Proportional control alone leaves a STEADY STATE ERROR (offset) - cannot eliminate it completely.<br>
      As error reduces, controller output reduces - before reaching zero error, output is insufficient to hold process at set point.</li>
      
      <li><strong>Integral Control (I):</strong><br>
      Output proportional to the INTEGRAL (sum over time) of the error.<br>
      Output = Ki x integral of e.dt.<br>
      Integral action continues to increase output as long as ANY error exists - however small.<br>
      ELIMINATES STEADY STATE ERROR - only stops integrating when error = ZERO.<br>
      Disadvantage: INTEGRAL WINDUP - if error persists for long time, integral term grows very large - causes overshoot when error finally reduces.</li>
      
      <li><strong>P+I Combined Action:</strong><br>
      Total output = <strong>Kp x e + Ki x integral(e.dt)</strong>.<br>
      Proportional: provides immediate response proportional to current error.<br>
      Integral: eliminates steady state error - drives error to zero over time.<br>
      Together: fast initial response (P) + accurate steady state (I).</li>
    </ul>

    <div class="n-info"><div class="icon">✏️</div><div class="body"><strong>Sketch Description:</strong> Draw block diagram: Set Point (SP) input → Summing junction (subtract PV) → Error signal (e) → P+I controller block (showing two parallel paths: Kp multiplier and Ki integrator) → Summed output → Process (plant) → Output = Process Variable (PV) → feedback arrow back to summing junction.</div></div>

    <p class="n-p" style="margin-top:16px;"><strong>Applications Onboard:</strong></p>
    <ul class="n-list">
      <li>TEMPERATURE CONTROL: boiler temperature, HVAC, refrigeration</li>
      <li>PRESSURE CONTROL: boiler pressure, air pressure regulators</li>
      <li>SPEED CONTROL: generator AVR, engine speed governors</li>
      <li>LEVEL CONTROL: boiler water level, tank level control</li>
    </ul>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: P+I Control</strong><br>
  P = proportional to current error (fast response) | I = proportional to accumulated error (eliminates offset) | P+I = best of both</div></div>

  <!-- ==========================================
       QUICK REFERENCE
       ========================================== -->
  <div class="n-h1" id="t4-quick">⚡ QUICK REFERENCE - ALL ELECTRICAL KEY FIGURES</div>
  <div class="n-card">
    <table class="n-table">
      <tr><th>Topic</th><th>Key Formula / Figure</th></tr>
      <tr><td>Synchronous speed</td><td class="hl">Ns = 120f/P (rpm) - f=frequency, P=poles</td></tr>
      <tr><td>Slip</td><td>s = (Ns-Nr)/Ns x 100% - full load: <span class="n-val">3-8%</span></td></tr>
      <tr><td>Rotor frequency</td><td>fr = s x f</td></tr>
      <tr><td>Star-Delta current reduction</td><td class="hl">Starting current = <span class="n-val">1/3</span> of DOL current | Starting torque = <span class="n-val">1/3</span></td></tr>
      <tr><td>Back EMF equation</td><td>V = Eb + Ia.Ra | Ia = (V-Eb)/Ra</td></tr>
      <tr><td>Power factor</td><td>PF = P(kW) / S(kVA) = cos(phi)</td></tr>
      <tr><td>Apparent power</td><td>S = V x I (kVA)</td></tr>
      <tr><td>True power</td><td>P = V x I x cos(phi) (kW)</td></tr>
      <tr><td>Half wave Vdc</td><td>Vdc = Vm/pi = <span class="n-val">0.318 x Vm</span></td></tr>
      <tr><td>Full wave Vdc</td><td class="hl">Vdc = 2Vm/pi = <span class="n-val">0.637 x Vm</span></td></tr>
      <tr><td>Peak rectifier</td><td>Vdc ≈ Vm (peak voltage)</td></tr>
      <tr><td>PI test</td><td>PI = R(10min)/R(1min) | > <span class="n-val">2.0</span> good | < <span class="n-val">1.0</span> poor</td></tr>
      <tr><td>Emergency generator auto-start</td><td class="hl">Within <span class="n-val">45 seconds</span> of main power failure</td></tr>
      <tr><td>Emergency fuel capacity</td><td class="hl">Minimum <span class="n-val">18 hours</span> at full emergency load</td></tr>
      <tr><td>Emergency battery duration</td><td>Minimum <span class="n-val">30 minutes</span></td></tr>
      <tr><td>Transistor current gain</td><td>hFE = Ic/Ib - typically <span class="n-val">50 to 500</span></td></tr>
      <tr><td>P+I control</td><td>Output = Kp.e + Ki.integral(e.dt)</td></tr>
      <tr><td>HV classification</td><td class="hl">Above <span class="n-val">1000V AC</span> or above <span class="n-val">1500V DC</span></td></tr>
      <tr><td>Reverse power relay threshold</td><td class="hl"><span class="n-val">3-8%</span> of rated kW in reverse for AC alternators</td></tr>
      <tr><td>Zener diode</td><td>Operates in REVERSE BIAS at Zener voltage - voltage regulation</td></tr>
    </table>
  </div>

  

  </div>
</div>
</div>
`);
window.loadNotes("T08", `<div class="view" id="view-notes-t08">
<div class="note-doc">
  <div style="margin-bottom:16px"><button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button></div>
  <div class="note-title">
    <h1>Topic 08 — Electronics</h1>
    <div class="sub">ETO MMD Oral Examination · Function 5 · Class 2 · Mumbai & Noida</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-1')">ETO MMD ORAL EXAMINA...</button>
    <button class="anc-btn" onclick="jumpTo('s-2')">TOPIC 8: ELECTRONICS...</button>
    <button class="anc-btn" onclick="jumpTo('s-written')">📝 Written Section</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">
  <table class="n-table">
    <tr><th>🆕 UPDATED</th><th>May 2026 — New gap-fill sections added at the end of this document. Scroll to bottom to see additions.</th></tr>
  </table>

  <div class="n-h1" id="s-1">ETO MMD ORAL EXAMINATION</div>
  <div class="body">COMPREHENSIVE STUDY NOTES — v2.0</div>

  <div class="n-h1" id="s-2">TOPIC 8: ELECTRONICS & SEMICONDUCTORS</div>
  <div class="body">Function 5 | Class 2 ETO | Mumbai & Noida MMD</div>
  <div class="body">Compiled from 2025-2026 Oral Question Bank — All Surveyors Combined</div>
  <table class="n-table">
    <tr><th>COLOUR CODE LEGEND</th></tr>
    <tr><td>YELLOW = Key Exam Points    GREEN = Memory Aids    ORANGE = Cross Questions    BLUE = Comparison Tables    RED = Safety / Warnings</td></tr>
  </table>
  <table class="n-table">
    <tr><th>MOST ASKED — ELECTRONICS & SEMICONDUCTORS</th></tr>
    <tr><td>Thyristor (SCR) — working, how to fire, how to commutate — ALL surveyors IGBT — why used in VFD, difference from thyristor — Deswal, Kamath, Vishwanathan MOSFET — working, vs BJT — Sanjib, Vishwanathan Diode testing — forward/reverse bias — ALL surveyors Rectifier types — half wave, full wave, 3-phase bridge — Kamath, Deswal Amplifier classes A, B, C, D — Nair, Sanjib Cycloconverter — what it is and where used — Sanjib (Mumbai specific) Optocoupler — working and why used — Sanjib, Deswal Ripple factor — definition and values — Kamath Zener diode — application, voltage regulator — Vishwanathan BJT vs MOSFET vs IGBT comparison — Kamath, Deswal Transistor testing with multimeter — Vishwanathan</td></tr>
  </table>
  <table class="n-table">
    <tr><th>1. P-N JUNCTION DIODE & ZENER DIODE</th></tr>
  </table>
  <table class="n-table">
    <tr><th>DIODE — Working and Testing</th></tr>
    <tr><td>P-N JUNCTION DIODE: P-type and N-type semiconductor joined together. Built-in potential barrier (<span class="n-val">0.6-0.7V</span> for silicon, <span class="n-val">0.2-0.3V</span> for germanium) at junction.  FORWARD BIAS (Anode +, Cathode -): Applied voltage overcomes barrier → depletion region collapses → current flows freely. REVERSE BIAS (Anode -, Cathode +): Applied voltage reinforces barrier → depletion region widens → only tiny leakage current → diode BLOCKS. PIV (Peak Inverse Voltage): Maximum reverse voltage diode can withstand — exceeding causes breakdown.  DIODE TESTING WITH MULTIMETER:    Set to DIODE TEST mode.    FORWARD BIAS: Red probe to ANODE, Black to CATHODE → good silicon diode: <span class="n-val">0.5-0.7V</span>.    REVERSE BIAS: Swap probes → good diode: OL (open circuit — blocks).    SHORTED diode: reads near <span class="n-val">0V</span> in BOTH directions — conducts both ways.    OPEN CIRCUIT diode: reads OL in BOTH directions — blocks both ways.    For rotating rectifier diodes: stop alternator, disconnect diodes, test individually.  SHIP APPLICATIONS:    Rectifier diodes — AC to DC conversion (battery chargers, AVR supply).    Rotating rectifier diodes — brushless alternator rotor (exciter AC to DC for main field).    Freewheeling (flyback) diodes — across relay coils to suppress back-EMF spike.    Protection diodes — reverse polarity protection in DC circuits.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>ZENER DIODE — Exam Answer</th></tr>
    <tr><td>Zener diode: specially doped P-N junction designed to operate in REVERSE BREAKDOWN without damage — maintains CONSTANT VOLTAGE across it.  Normal diode: reverse breakdown = damage — must avoid. Zener: reverse breakdown = NORMAL OPERATING REGION — designed for this.  VOLTAGE REGULATION: Connected in REVERSE BIAS across load with series resistor.    Supply voltage varies: zener current changes but output voltage stays fixed at Vz.    Load current changes: zener current compensates — output stays at Vz.  SHIP APPLICATIONS:    AVR reference voltage — stable reference for comparison with generator output.    Control circuit voltage regulation — <span class="n-val">5V</span>, <span class="n-val">12V</span>, <span class="n-val">15V</span> DC for electronics.    Overvoltage protection — clamps voltage to Vz when supply rises.    Zener barrier (HART barrier) — limits voltage and current to intrinsically safe levels in hazardous area instrument circuits.  COMMON VALUES: <span class="n-val">3.3V</span>, <span class="n-val">4.7V</span>, <span class="n-val">5.1V</span>, <span class="n-val">6.2V</span>, <span class="n-val">9.1V</span>, <span class="n-val">12V</span>, <span class="n-val">15V</span>, <span class="n-val">24V</span>.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>How do you test a diode with a multimeter?</td><td>Set multimeter to diode test mode. Forward bias (red to anode, black to cathode): good silicon diode reads <span class="n-val">0.5-0.7V</span>. Reverse bias (swap probes): good diode reads OL (open circuit). Shorted diode: reads near <span class="n-val">0V</span> both directions. Open diode: reads OL both directions. For rotating rectifier diodes in brushless alternator: stop alternator, disconnect diode from circuit, test each individually — all should show forward <span class="n-val">0.6V</span> and reverse OL.</td></tr>
    <tr><td>What is a zener diode and where is it used on ships?</td><td>Zener diode designed for reverse breakdown operation — maintains constant voltage (Vz) regardless of current variation. Connected in reverse bias with series resistor for voltage regulation. Ship uses: AVR reference voltage (stable reference against which generator output is compared), control circuit power supplies (<span class="n-val">5V</span>, <span class="n-val">12V</span> regulation), overvoltage protection (clamps to Vz protecting downstream circuits), zener/HART barriers in hazardous area instrument loops (limits energy to intrinsically safe levels for Ex-i circuits in Zone 1/0 areas).</td></tr>
  </table>
  <table class="n-table">
    <tr><th>2. RECTIFIERS — TYPES AND RIPPLE FACTOR</th></tr>
  </table>
  <table class="n-table">
    <tr><th>TYPE</th><th>CIRCUIT</th><th>OUTPUT FREQ</th><th>RIPPLE FACTOR</th><th>EFFICIENCY</th><th>SHIP USE</th></tr>
    <tr><td>Half Wave</td><td>1 diode in series with load</td><td><span class="n-val">50Hz</span> (supply freq)</td><td>1.21 (121%) — very high</td><td>40.6%</td><td>Rarely — too much ripple. Simple trickle chargers only.</td></tr>
    <tr><td>Full Wave Centre Tap</td><td>2 diodes + centre-tapped transformer</td><td><span class="n-val">100Hz</span> (2x supply)</td><td>0.482 (48.2%)</td><td>81.2%</td><td>Older charger designs — needs centre-tap transformer</td></tr>
    <tr><td>Full Wave Bridge</td><td>4 diodes in bridge</td><td><span class="n-val">100Hz</span> (2x supply)</td><td>0.482 (48.2%)</td><td>81.2%</td><td>Most common — battery chargers, AVR supply, DC control supplies</td></tr>
    <tr><td>3-Phase Bridge</td><td>6 diodes in 3-phase bridge</td><td><span class="n-val">300Hz</span> (6x supply)</td><td>0.042 (4.2%) — very low</td><td>95.4%</td><td>VFD DC link, large rectifier units — very smooth DC</td></tr>
  </table>
  <table class="n-table">
    <tr><th>RIPPLE FACTOR — Exam Answer</th></tr>
    <tr><td>RIPPLE FACTOR (gamma) = Vrms_ripple / Vdc_output Measures quality of DC from rectifier — how much AC ripple remains on DC output.  Half wave: 1.21 (121% ripple) — very poor quality DC. Full wave bridge: 0.482 (48.2% ripple) — acceptable with filtering. 3-phase bridge: 0.042 (4.2% ripple) — excellent — very little filtering needed.  Lower ripple factor = smoother DC = less filtering needed = smaller capacitor. 3-phase bridge used for VFD DC link — very smooth DC needed for IGBT switching.  SMOOTHING: Large filter capacitor across output. Charges to peak, discharges slowly into load. Larger capacitor = less ripple. 3-phase bridge needs much smaller capacitor than single-phase.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>BRIDGE RECTIFIER WORKING</th></tr>
    <tr><td>4 diodes D1, D2, D3, D4 in bridge. Input AC. Output DC.  POSITIVE HALF CYCLE (top of AC is positive):    D1 and D3 conduct. D2 and D4 blocked. Current flows: AC top → D1 → Load + → Load - → D3 → AC bottom.  NEGATIVE HALF CYCLE (bottom of AC is positive):    D2 and D4 conduct. D1 and D3 blocked. Current flows: AC bottom → D4 → Load + → Load - → D2 → AC top.  RESULT: Both half cycles used. Current through load always in SAME direction (positive). Average DC output = 0.636 x Vpeak = 0.9 x Vrms.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>What is ripple factor and which rectifier has lowest ripple?</td><td>Ripple factor = ratio of RMS ripple voltage to average DC output voltage. Measures how much AC remains on DC output. Half wave: 1.21 (121% — very poor). Full wave bridge: 0.482 (48.2%). 3-phase bridge: 0.042 (4.2% — excellent). 3-phase bridge has lowest ripple because output has 6 pulses per cycle (<span class="n-val">300Hz</span> for <span class="n-val">50Hz</span> supply) — much smoother than single-phase. Used for VFD DC link and large DC supplies where smooth DC is critical.</td></tr>
    <tr><td>How does a full wave bridge rectifier work?</td><td>4 diodes in bridge. Positive half cycle: D1 and D3 conduct — current flows through load top-to-bottom. Negative half cycle: D2 and D4 conduct — current still flows through load top-to-bottom (same direction). Both half cycles converted to same polarity DC. Output frequency = 2x supply (<span class="n-val">100Hz</span> for <span class="n-val">50Hz</span>). Average output = 0.9 x Vrms. Filter capacitor smooths ripple to near-pure DC. Most common rectifier on ships: battery chargers, AVR supply, control circuit power supplies.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>3. TRANSISTORS — BJT, MOSFET & TESTING</th></tr>
  </table>
  <table class="n-table">
    <tr><th>BJT — Bipolar Junction Transistor</th></tr>
    <tr><td>TERMINALS: BASE (B), COLLECTOR (C), EMITTER (E). NPN or PNP construction. CURRENT CONTROLLED: Small base current (IB) controls large collector current (IC). IC = hFE x IB   (hFE = current gain, typically 20-1000)  THREE OPERATING REGIONS:    CUTOFF: VBE < <span class="n-val">0.6V</span> → transistor OFF → no collector current → OPEN SWITCH.    ACTIVE: VBE = <span class="n-val">0.6-0.7V</span> → IC = hFE x IB → AMPLIFIER region.    SATURATION: Base overdriven → transistor fully ON → VCE approx <span class="n-val">0.2V</span> → CLOSED SWITCH.  TESTING NPN WITH MULTIMETER:    B-E junction: Red to Base, Black to Emitter → <span class="n-val">0.5-0.7V</span> (forward biased junction).    B-C junction: Red to Base, Black to Collector → <span class="n-val">0.5-0.7V</span>.    C-E: Red to Collector, Black to Emitter → OL (reverse biased — blocked).    hFE test: multimeter hFE socket — insert transistor — reads current gain.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>MOSFET — Metal Oxide Semiconductor Field Effect Transistor</th></tr>
    <tr><td>TERMINALS: GATE (G), DRAIN (D), SOURCE (S). VOLTAGE CONTROLLED: Gate voltage (VGS) controls drain current — NO gate current flows. Gate insulated from channel by thin oxide layer — very high input impedance.  N-CHANNEL ENHANCEMENT MOSFET (most common):    VGS = 0: No channel → MOSFET OFF → no drain current.    VGS > threshold (typically <span class="n-val">2-4V</span>): Channel forms → MOSFET ON → current flows Drain to Source.    Higher VGS: lower channel resistance → more current.  ADVANTAGES OVER BJT:    No gate current needed — easy to drive (no base current loading).    Much faster switching — ideal for high-frequency PWM (SMPS, audio Class D).    No secondary breakdown failure mode.    Parallel connection easy — positive temperature coefficient of RDS(on) causes natural current sharing.  SHIP USE: SMPS (switch mode power supplies), PWM circuits, low-voltage high-frequency drives.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>FEATURE</th><th>BJT</th><th>MOSFET</th><th>IGBT</th></tr>
    <tr><td>Control type</td><td>Current controlled (base current)</td><td>Voltage controlled (gate voltage)</td><td>Voltage controlled (gate voltage)</td></tr>
    <tr><td>Input current</td><td>Base current needed (loads driver)</td><td>No gate current (very high impedance)</td><td>No gate current</td></tr>
    <tr><td>Switching speed</td><td>Moderate</td><td>Very fast (MHz possible)</td><td>Fast (up to 50 kHz)</td></tr>
    <tr><td>Voltage/current rating</td><td>Medium</td><td>Low-medium voltage, medium current</td><td>High voltage (up to 6.5 kV), high current</td></tr>
    <tr><td>ON state loss</td><td>Low (VCEsat approx <span class="n-val">0.2V</span>)</td><td>Low at low voltage, high at high voltage</td><td>Low (VCEsat approx <span class="n-val">1.5-3V</span>)</td></tr>
    <tr><td>Turn-off method</td><td>Remove base current</td><td>Remove gate voltage</td><td>Remove gate voltage</td></tr>
    <tr><td>Applications</td><td>Amplifiers, low-power switching</td><td>SMPS, PWM, low-voltage drives</td><td>VFD inverters, UPS, medium voltage drives</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>What is the difference between BJT and MOSFET?</td><td>BJT: current controlled — base current controls collector current (IC = hFE x IB). Has base current — loads driving circuit. Moderate switching speed. NPN or PNP. MOSFET: voltage controlled — gate voltage controls drain current — NO gate current (insulated gate, very high impedance). Much faster switching. No secondary breakdown. Better for high-frequency PWM and SMPS. At low voltages: lower ON resistance than BJT. At high voltages: IGBT replaces both for best performance.</td></tr>
    <tr><td>How do you test a BJT transistor with a multimeter?</td><td>NPN BJT: B-E junction — Red to Base, Black to Emitter → <span class="n-val">0.5-0.7V</span> (forward biased). B-C junction — Red to Base, Black to Collector → <span class="n-val">0.5-0.7V</span>. C-E — Red to Collector, Black to Emitter → OL (reverse — blocked). Shorted junction: reads <span class="n-val">0V</span> both ways. Open junction: OL both ways. hFE test: insert in multimeter hFE socket (NPN or PNP) — reads current gain. Low hFE = degraded transistor. Use: check driver transistors in AVR, relay drivers, control circuits.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>4. THYRISTOR (SCR) & IGBT — DETAILED COVERAGE</th></tr>
  </table>
  <table class="n-table">
    <tr><th>THYRISTOR (SCR) — Complete Exam Answer</th></tr>
    <tr><td>THYRISTOR = Silicon Controlled Rectifier. 4-layer PNPN device. TERMINALS: ANODE (A), CATHODE (K), GATE (G).  TURNING ON:    Forward biased (Anode +, Cathode -) BUT gate not triggered: thyristor BLOCKS (like open switch).    Short positive GATE PULSE applied: thyristor FIRES — turns ON — current flows anode to cathode.    Once ON: GATE LOSES CONTROL — thyristor stays ON even if gate pulse removed (LATCHING).    Stays ON as long as anode current > holding current (IH).  TURNING OFF (COMMUTATION):    NATURAL COMMUTATION: In AC circuits — thyristor turns off automatically at AC current zero crossing (current reverses — drops below IH).    FORCED COMMUTATION: In DC circuits — must force current below IH by external circuit (reverse voltage pulse, capacitor discharge).  FIRING ANGLE (alpha):    alpha = 0 deg: fires at start of positive half cycle → maximum output (full half cycle).    alpha = 90 deg: fires at peak → approximately half output.    alpha = 180 deg: fires at end → minimum output (nearly zero).    Varying alpha = PHASE CONTROL = how thyristor varies output power.  SHIP APPLICATIONS:    Soft starters — phase angle control of motor starting voltage.    Battery chargers — controlled rectifier adjusts charging current.    AVR excitation control — thyristors control DC to alternator field.    Large AC heater control — electric boiler, heating elements.    DC motor drives (older ships) — thyristor bridge controls armature voltage.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>IGBT — Complete Exam Answer</th></tr>
    <tr><td>IGBT = Insulated Gate Bipolar Transistor. Combines MOSFET input characteristics with BJT output characteristics. MOSFET input: voltage controlled, no gate current, fast switching. BJT output: low ON voltage drop (<span class="n-val">1.5-3V</span>), high current handling.  TERMINALS: GATE (G), COLLECTOR (C), EMITTER (E). Looks like BJT but is voltage-controlled.  WORKING:    VGE < threshold (typically <span class="n-val">6V</span>): IGBT OFF — blocks.    VGE > threshold (typically <span class="n-val">15V</span> for full ON): IGBT ON — current flows Collector to Emitter.    Gate voltage removed: IGBT turns OFF — unlike thyristor which latches ON.  WHY IGBT PREFERRED OVER THYRISTOR FOR VFD:    CAN BE TURNED OFF by gate signal — no commutation circuit needed.    Much faster switching (up to 20 kHz+) — allows high-frequency PWM.    High current AND high voltage capability.    6 IGBTs in VFD inverter bridge — switch DC link using PWM.    Create variable voltage, variable frequency AC for motor speed control.  GATE DRIVE: Isolated gate driver applies +<span class="n-val">15V</span> (ON) and -<span class="n-val">8V</span> or <span class="n-val">0V</span> (OFF) to each IGBT gate. PROTECTION: Desaturation protection, overcurrent, temperature monitoring on heatsink.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>What is a thyristor? How does it work?</td><td>Thyristor (SCR) is a 4-layer PNPN device with three terminals: Anode, Cathode, Gate. Forward biased but gate not triggered: blocks. Short positive gate pulse: fires — turns ON, current flows anode to cathode. Once ON: gate loses control — stays ON (latches) until anode current drops below holding current. Natural commutation: turns off at AC zero crossing. Forced commutation needed in DC circuits. Firing angle alpha controls average output: alpha=0 = full power, alpha=180 = minimum. Used in soft starters, AVR, battery chargers, DC motor drives.</td></tr>
    <tr><td>Why is IGBT used in VFD instead of thyristor?</td><td>Thyristor latches ON — needs complex commutation circuit to turn off — slow (line frequency). IGBT: voltage controlled (no gate current), turns ON and OFF by gate voltage — no commutation needed. Switches at up to 20 kHz — enables high-frequency PWM for smooth motor current. Handles high current and voltage (up to 6.5 kV, 3.6 kA). 6 IGBTs in 3-phase bridge inverter stage of VFD switch DC link voltage using PWM to create variable frequency AC for motor speed control. IGBT has completely replaced thyristors in modern variable speed drives.</td></tr>
    <tr><td>What is firing angle in a thyristor circuit?</td><td>Firing angle (alpha) is the angle in the AC cycle at which the gate pulse triggers the thyristor. alpha = 0: fires at start of positive half cycle — maximum DC output (full half cycle conducted). alpha = 90: fires at peak — approximately half output. alpha = 180: fires at end — minimum output. By varying alpha (phase control), average output voltage is varied from maximum to near-zero. Used in soft starters (varies motor voltage), battery chargers (varies charging current), AVR excitation (varies field current). More delay = larger alpha = less average output.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>5. CYCLOCONVERTER — WORKING & SHIP APPLICATION</th></tr>
  </table>
  <table class="n-table">
    <tr><th>CYCLOCONVERTER — Complete Exam Answer (Sanjib Asks)</th></tr>
    <tr><td>A cycloconverter is a power electronic device that converts AC power at one frequency DIRECTLY to AC power at a DIFFERENT (usually lower) frequency — WITHOUT an intermediate DC stage.  KEY DIFFERENCE FROM VFD:    VFD: AC → DC (rectifier) → DC link → variable frequency AC (inverter). Two conversion stages.    Cycloconverter: AC → variable frequency AC DIRECTLY. One conversion stage — NO DC link.  HOW CYCLOCONVERTER WORKS:    Uses thyristors (SCRs) arranged in positive and negative converter groups.    By selectively firing thyristors at specific points in the input AC cycles:    The output voltage is assembled from segments of the input waveform.    Firing pattern changed slowly → output frequency can be varied from 0 to approximately 1/3 of input frequency.    3-phase input at <span class="n-val">50Hz</span> → output variable from 0 to approximately <span class="n-val">16 Hz</span>.  CHARACTERISTICS:    Output frequency: 0 to maximum approximately 1/3 of input frequency.    Output is regenerative — can return energy from motor to supply (4-quadrant operation).    Produces harmonics in supply — needs harmonic filtering.    Large and expensive — many thyristors needed (18-36 for 3-phase output).  SHIP APPLICATIONS:    Large low-speed synchronous motors: main propulsion of some large ships (LNG carriers, large cruise ships).      Motor runs at very low speed (0-20 RPM) for podded propulsion or shaft propulsion.      Direct drive — no gearbox needed — very efficient at low speeds.    Icebreaker propulsion: variable speed from 0 to full — needs very low speed control.    Large Azipod / pod drives on some vessels: cycloconverter drives large synchronous motor in pod.  WHY CYCLOCONVERTER FOR LOW SPEED (not VFD)?    Cycloconverter handles very low output frequencies (near <span class="n-val">0 Hz</span>) with full torque — ideal for slow shaft propulsion.    At very low speeds: IGBT VFD has switching losses and thermal issues at low frequency.    Cycloconverter: thyristors naturally commutate with supply frequency — very low conduction losses.    However: cycloconverter limited to output frequency < 1/3 of input — not suitable for higher speeds.    Modern alternative: LCI (Load Commutated Inverter) or matrix converter for similar applications.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>What is a cycloconverter and where is it used on ships?</td><td>Cycloconverter converts AC at one frequency directly to AC at a different (lower) frequency without DC link stage. Uses thyristors firing pattern to assemble output from input waveform segments. Output frequency: 0 to approximately 1/3 of input (<span class="n-val">0-16 Hz</span> from <span class="n-val">50Hz</span> supply). Ship use: large low-speed synchronous motor propulsion (LNG carriers, cruise ships, icebreakers) — direct drive at very low RPM without gearbox. Advantage: full torque from <span class="n-val">0 Hz</span> (zero speed) — ideal for variable speed propulsion. Limitation: output frequency limited to 1/3 of input — not for high-speed applications.</td></tr>
    <tr><td>What is the difference between a cycloconverter and a VFD?</td><td>VFD (Variable Frequency Drive): two conversion stages — AC to DC (rectifier with DC link capacitor) then DC to variable AC (IGBT inverter). Output frequency: 0 to above rated motor frequency (full speed range). Cycloconverter: single stage — AC directly to variable frequency AC using thyristor firing. No DC link. Output frequency limited to approximately 1/3 of input. VFD: general purpose, all motor sizes, all speeds. Cycloconverter: large very low-speed synchronous motors, 4-quadrant regenerative operation, natural commutation (lower losses in thyristors vs IGBT at very low frequency).</td></tr>
  </table>
  <table class="n-table">
    <tr><th>6. OPTOCOUPLER, COMMUTATOR & SPECIAL SEMICONDUCTOR DEVICES</th></tr>
  </table>
  <table class="n-table">
    <tr><th>OPTOCOUPLER — Working and Why Used (Sanjib, Deswal)</th></tr>
    <tr><td>OPTOCOUPLER (Opto-isolator): transfers electrical signal between two circuits using LIGHT — providing complete electrical isolation between them.  CONSTRUCTION:    INPUT SIDE: LED (Light Emitting Diode) — emits infrared light when input current flows.    OUTPUT SIDE: Phototransistor (or photodiode) — detects infrared light → conducts when light present.    Both sealed in a single IC package — no electrical connection between input and output — only light coupling.  WORKING:    Input signal drives current through LED → LED emits IR light → phototransistor detects light → conducts → output signal.    No input signal → LED off → no light → phototransistor off → no output.  WHY OPTOCOUPLER IS USED:    1. ELECTRICAL ISOLATION: Input and output completely isolated — no direct electrical path. Safety: operator at low voltage side isolated from high voltage.    2. NOISE REJECTION: Signal crosses as light — immune to electrical noise and ground loops.    3. LEVEL SHIFTING: Input at one voltage (e.g., <span class="n-val">5V</span> PLC signal), output drives different voltage circuit (e.g., <span class="n-val">24V</span> relay coil).    4. PROTECTION: Fault on output side cannot propagate back to input side electronics.    5. HAZARDOUS AREA: Optocoupler in barrier isolates safe area electronics from field circuit in hazardous area.  SHIP APPLICATIONS:    PLC digital input cards: field signals (<span class="n-val">24V</span> DC) isolated from PLC internal logic (<span class="n-val">5V</span>) by optocoupler on each input.    HART barriers: optocoupler type barriers in zone 1 circuits.    Drive interface: PLC to VFD reference signal — isolation prevents drive switching noise from entering PLC.    Feedback isolation: encoder signals, tachometer signals from high-power drives to controllers.</td></tr>
  </table>
  <div class="body">Commutator — Working in DC Machines</div>
  <table class="n-table">
    <tr><th>COMMUTATOR — Exam Answer</th></tr>
    <tr><td>Commutator is a mechanical switch on the rotor shaft of a DC machine (motor or generator) that converts DC (at brushes) to AC (in armature conductors) for motors, or converts generated AC to DC output for generators.  CONSTRUCTION:    Multiple copper segments mounted on rotor shaft. Each segment connected to one armature coil end.    Carbon brushes press against commutator surface — provide fixed electrical connection between external circuit and rotating armature.  FOR DC MOTOR — HOW COMMUTATOR MAINTAINS TORQUE DIRECTION:    As armature coil rotates past brush: commutator switches the connection — reverses current direction in the coil.    Result: force on conductor always in same direction (consistent torque) regardless of coil position.    Without commutator: torque would reverse every half revolution — net zero torque — motor would not rotate consistently.  FOR DC GENERATOR — CONVERTS GENERATED AC TO DC OUTPUT:    Armature coils generate AC as they rotate in field.    Commutator switches connections at zero crossing — rectifies AC to pulsating DC at brushes.  MAINTENANCE:    Commutator surface must be smooth and cylindrical. Polish with fine sandpaper (not emery).    Undercut mica insulation between segments to prevent mica riding up.    Carbon brush condition: check length, spring pressure, smooth running surface.    Sparking at brushes: check brush pressure, commutator condition, armature reaction (interpoles).</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>What is an optocoupler and why is it used in ship systems?</td><td>Optocoupler transfers signal between two circuits using light — complete electrical isolation. LED on input emits IR light → phototransistor on output conducts. No direct electrical path between input and output. Uses on ships: PLC input cards (field <span class="n-val">24V</span> DC isolated from PLC <span class="n-val">5V</span> logic on every input), VFD interface (drive switching noise isolated from PLC), HART barriers (safe area electronics isolated from hazardous area field circuit), encoder/tachometer signal isolation. Benefits: isolation protects low-voltage electronics, eliminates ground loops, immune to electrical noise.</td></tr>
    <tr><td>What is the function of the commutator in a DC motor?</td><td>Commutator maintains consistent torque direction in DC motor armature. As armature coil rotates past the brush position: commutator segments switch the current direction in the coil. This reversal ensures the force on the conductor (F=BIL) always acts in the same rotational direction regardless of coil position. Without commutator: torque would reverse every half turn — net torque = zero — motor would not rotate. Commutator is a mechanical rectifier for motors (converts external DC to AC in armature conductors) and a mechanical inverter for generators (converts generated AC to DC at brushes).</td></tr>
  </table>
  <table class="n-table">
    <tr><th>7. AMPLIFIER CLASSES & OPERATIONAL AMPLIFIERS</th></tr>
  </table>
  <table class="n-table">
    <tr><th>AMPLIFIER CLASSES — Complete Exam Answer</th></tr>
    <tr><td>CLASS A:    Transistor conducts for FULL 360 degrees of input cycle — always in active region.    Output: faithful amplified replica of input — very low distortion.    Efficiency: maximum 25-30% — most power wasted as heat in transistor.    Used: hi-fi audio amplifiers, instrument amplifiers, precision signal amplification.  CLASS B:    Two complementary transistors (NPN + PNP push-pull pair). Each conducts for 180 degrees (one half cycle).    Efficiency: up to 78.5%. Problem: CROSSOVER DISTORTION at zero crossing (both transistors briefly off).    Used: audio power amplifiers (with Class AB modification).  CLASS AB:    Small forward bias keeps both transistors slightly ON — eliminates crossover distortion of Class B.    Efficiency: better than A, less distortion than pure B.    Used: most common for audio — ship PA systems, intercom amplifiers.  CLASS C:    Transistor conducts less than 180 degrees — only peaks of input.    Efficiency: up to 90% — very high.    Severe distortion — NOT suitable for audio.    Used: RF (radio frequency) power amplifiers with tuned resonant circuits — radio transmitters, GMDSS MF/HF.  CLASS D:    Transistors work as SWITCHES only (fully ON or fully OFF — PWM).    Output is PWM — low-pass filter extracts audio. Efficiency: up to 95-98%.    Used: modern compact audio systems, ship PA amplifiers, subwoofer amplifiers.  CLASS E, F, G, H: Advanced high-efficiency designs for specialised RF and audio applications — rarely asked in ETO exams.</td></tr>
  </table>
  <div class="body">Operational Amplifier (Op-Amp)</div>
  <table class="n-table">
    <tr><th>OP-AMP — Key Points</th></tr>
    <tr><td>Op-Amp is a high-gain DC-coupled differential amplifier IC. Very high input impedance, very low output impedance.  KEY CONFIGURATIONS:    Inverting amplifier: Gain = -(Rf/Rin). Output inverted.    Non-inverting amplifier: Gain = 1 + (Rf/Rin). Output same polarity.    Comparator: Compares two inputs — output HIGH or LOW depending on which input is higher.    Integrator: Output is integral of input — PID integral action.    Differentiator: Output proportional to rate of change — PID derivative action.  SHIP APPLICATIONS: AVR error amplifier (compares reference with generator output), signal conditioning in <span class="n-val">4-20mA</span> circuits, PID controller implementation, comparator circuits for alarm level detection.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>What are the classes of amplifiers and which is most efficient?</td><td>Class A: 360 deg conduction, low distortion, max 30% efficient — precision instruments. Class B: 180 deg push-pull, 78.5% efficient, crossover distortion. Class AB: small bias eliminates crossover, most common for audio (ship PA). Class C: <180 deg conduction, up to 90% efficient, high distortion, only for RF transmitters with tuned circuits (GMDSS radio). Class D: switching (PWM), 95-98% efficient, low-pass filter reconstructs signal — modern ship audio. Class D is most efficient. Class C is most efficient for RF (single frequency).</td></tr>
    <tr><td>What is crossover distortion in a Class B amplifier and how is it corrected?</td><td>Crossover distortion: in push-pull Class B, at the zero crossing of the input signal both transistors are briefly OFF (below their <span class="n-val">0.6V</span> threshold). This creates a distorted dead zone around zero — visible as notch distortion in the output waveform. Corrected by Class AB operation: small forward bias (typically <span class="n-val">0.6-1.2V</span>) applied to both transistors to keep them just barely conducting even with no signal. This eliminates the dead zone — both transistors are always slightly ON — one takes over smoothly from the other at zero crossing. Class AB sacrifices a small amount of efficiency to eliminate crossover distortion.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>8. LOGIC GATES, NUMBER SYSTEMS & DIGITAL ELECTRONICS</th></tr>
  </table>
  <table class="n-table">
    <tr><th>LOGIC GATES — Complete</th></tr>
    <tr><td>AND GATE: Output HIGH only when ALL inputs HIGH. Ship use: interlocking — all conditions met.    Truth: 0+0=0, 0+1=0, 1+0=0, 1+1=1.  OR GATE: Output HIGH when ANY input HIGH. Ship use: any one of several alarms activates output.    Truth: 0+0=0, 0+1=1, 1+0=1, 1+1=1.  NOT GATE (Inverter): Output is OPPOSITE of input. 0→1, 1→0.  NAND: AND then NOT — output LOW only when ALL inputs HIGH. Universal gate. NOR: OR then NOT — output HIGH only when ALL inputs LOW. Universal gate. XOR: Output HIGH when inputs are DIFFERENT. Used: parity checking, comparators.  UNIVERSAL GATES: NAND and NOR — any logic function can be built from NAND alone or NOR alone.  SHIP APPLICATION — MOTOR START INTERLOCK (AND gate):    Inlet valve open (1) AND overload relay healthy (1) AND start button pressed (1) → Motor starts (1).    Any condition = 0: motor cannot start — interlock enforced.</td></tr>
  </table>
  <div class="body">Binary Number System</div>
  <table class="n-table">
    <tr><th>BINARY — Conversion Examples</th></tr>
    <tr><td>DECIMAL TO BINARY: Divide by 2 repeatedly — read remainders bottom to top.    25 decimal: 25/2=12r1, 12/2=6r0, 6/2=3r0, 3/2=1r1, 1/2=0r1 → read up: 11001 binary.    Check: 16+8+0+0+1 = 25. Correct.  BINARY TO DECIMAL: Multiply each bit by positional value (power of 2) and sum.    1011 binary: 1x8 + 0x4 + 1x2 + 1x1 = 8+0+2+1 = 11 decimal.  HEXADECIMAL: Base 16. Digits 0-9 then A(10) B(11) C(12) D(13) E(14) F(15).    FF hex = 15x16 + 15 = 240+15 = 255 decimal. 1 byte = 8 bits = 0-255 = 00-FF hex.  KEY VALUES: 8 bits = 1 byte (0-255). 16 bits = 1 word (-32768 to +32767 signed). 32 bits = 1 double word.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>What is an AND gate? Give a ship application.</td><td>AND gate: output is HIGH only when ALL inputs are HIGH. If any input is LOW, output is LOW. Ship application: motor start interlock — motor can only start when: inlet valve is open (input 1 = HIGH) AND overload relay is healthy (input 2 = HIGH) AND start button is pressed (input 3 = HIGH). All three must be true simultaneously. Equivalent to series interlock in relay logic. Also: fire detection — annunciator only activates when detector is triggered AND power is healthy AND zone is not isolated.</td></tr>
    <tr><td>Convert 45 decimal to binary.</td><td>45 ÷ 2 = 22 remainder 1. 22 ÷ 2 = 11 remainder 0. 11 ÷ 2 = 5 remainder 1. 5 ÷ 2 = 2 remainder 1. 2 ÷ 2 = 1 remainder 0. 1 ÷ 2 = 0 remainder 1. Read remainders bottom to top: 101101 binary = 45 decimal. Verification: 32+0+8+4+0+1 = 45. Correct. In hex: 45 = 2x16 + 13 = 2D hex.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>9. SWITCH MODE POWER SUPPLY (SMPS) & POWER SUPPLY TYPES</th></tr>
  </table>
  <table class="n-table">
    <tr><th>SMPS vs LINEAR POWER SUPPLY</th></tr>
    <tr><td>LINEAR POWER SUPPLY:    Series pass transistor in ACTIVE (linear) region — drops excess voltage as heat.    Efficiency: 30-60%. Large heavy <span class="n-val">50Hz</span> transformer. Very clean output — low noise.    Used: audio amplifiers, precision instruments, laboratory supplies.  SMPS — SWITCH MODE POWER SUPPLY:    MOSFET/BJT switches at HIGH FREQUENCY (20 kHz - 1 MHz) → small high-frequency transformer → rectifier → filter → regulated DC output.    Efficiency: 70-90%. Small and light (HF transformer tiny). Wide input voltage range.    Used: all modern <span class="n-val">24V</span> DC control supplies, battery chargers, VFD control boards, UPS chargers.  SMPS STAGES:    1. INPUT RECTIFIER: AC mains (230/<span class="n-val">440V</span>) → bridge rectifier → unregulated DC (approx <span class="n-val">325V</span> from <span class="n-val">230V</span> AC).    2. SWITCHING: MOSFET switches at 20kHz-1MHz — creates high-frequency square wave on DC.    3. HF TRANSFORMER: Steps down (or up) at high frequency — small, light. Provides isolation.    4. OUTPUT RECTIFIER + FILTER: Diodes + inductor + capacitor → smooth regulated DC.    5. FEEDBACK CONTROL: Output voltage sampled → compared with reference → error → adjusts PWM duty cycle → maintains constant output.  SMPS DISADVANTAGE: Generates SWITCHING NOISE (EMI) — can interfere with instruments and radio. Needs EMI filter on input and output.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>EXAMINER QUESTION</th><th>IDEAL ANSWER</th></tr>
    <tr><td>What is SMPS and why is it preferred on ships?</td><td>SMPS (Switch Mode Power Supply) converts AC to regulated DC by switching transistors at high frequency (20kHz-1MHz) through a small high-frequency transformer. Preferred on ships because: 70-90% efficiency vs 30-60% for linear (less heat), very small and light (HF transformer tiny vs large <span class="n-val">50Hz</span> transformer), wide input voltage range (works on <span class="n-val">100-240V</span> AC), output isolation. Used for all <span class="n-val">24V</span> DC control supplies, battery chargers, VFD control boards on modern ships. Disadvantage: generates switching noise (EMI) — needs filtering.</td></tr>
    <tr><td>What is the disadvantage of SMPS compared to linear power supply?</td><td>SMPS generates switching noise (electromagnetic interference — EMI) from high-frequency transistor switching. This can interfere with: sensitive navigation instruments, radio communications (especially MF/HF), GMDSS equipment. Requires EMI filter design on input and output. Also more complex — more components — harder to repair at sea. Linear supply: very clean output, no switching noise — preferred for sensitive audio and precision measurement circuits. On ships: SMPS used for digital control systems, linear supplies used for sensitive analogue circuits like audio and precision instruments.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>10. QUICK REVISION — ELECTRONICS & SEMICONDUCTORS</th></tr>
  </table>
  <table class="n-table">
    <tr><th>TOPIC</th><th>FREQUENCY & KEY POINTS</th></tr>
    <tr><td>Diode testing</td><td>⭐⭐⭐⭐⭐ Forward: <span class="n-val">0.6-0.7V</span> silicon. Reverse: OL. Shorted: <span class="n-val">0V</span> both ways. Open: OL both ways. Stop alternator before testing rotating diodes.</td></tr>
    <tr><td>Thyristor working</td><td>⭐⭐⭐⭐⭐ Gate pulse fires it. LATCHES ON. Gate loses control. Turns off at AC zero (natural) or forced commutation. Firing angle alpha controls output.</td></tr>
    <tr><td>IGBT vs Thyristor</td><td>⭐⭐⭐⭐⭐ IGBT: voltage controlled, CAN turn off by gate, fast PWM (20kHz), used in VFD. Thyristor: latches, needs commutation, slower, high power.</td></tr>
    <tr><td>Cycloconverter</td><td>⭐⭐⭐⭐⭐ AC to variable frequency AC directly — NO DC link. Uses thyristors. Output max 1/3 of input frequency. Used for large low-speed synchronous motor propulsion.</td></tr>
    <tr><td>Optocoupler</td><td>⭐⭐⭐⭐ LED + phototransistor. Signal transfers as light. Complete electrical isolation. PLC inputs, VFD interface, hazardous area barriers.</td></tr>
    <tr><td>Rectifier ripple factor</td><td>⭐⭐⭐⭐ Half wave 1.21 (very poor). Bridge 0.482. 3-phase bridge 0.042 (excellent). Lower = smoother DC. 3-phase bridge for VFD.</td></tr>
    <tr><td>BJT vs MOSFET vs IGBT</td><td>⭐⭐⭐⭐ BJT: current control. MOSFET: voltage, fast, low voltage. IGBT: voltage, high V+I, VFD inverters. All: voltage controlled except BJT.</td></tr>
    <tr><td>Zener diode</td><td>⭐⭐⭐⭐ Designed for reverse breakdown. Holds constant Vz. Used: AVR reference, voltage regulation, overvoltage protection, HART barriers.</td></tr>
    <tr><td>Amplifier classes</td><td>⭐⭐⭐⭐ A: 360 deg, 30%, low distortion. B: 180 deg push-pull, 78.5%, crossover distortion. AB: compromise, most common. C: RF only, 90%. D: PWM, 95%.</td></tr>
    <tr><td>Commutator working</td><td>⭐⭐⭐ Mechanical switch on DC machine rotor. Switches current direction in armature coils — maintains consistent torque direction. Replaced by IGBT inverter in modern AC drives.</td></tr>
    <tr><td>SMPS working</td><td>⭐⭐⭐ AC → rectify → switch at HF → HF transformer → filter → DC output. Feedback adjusts PWM. 70-90% efficient. Small. Generates EMI.</td></tr>
    <tr><td>Logic gates</td><td>⭐⭐⭐ AND=all HIGH. OR=any HIGH. NOT=invert. NAND/NOR=universal. XOR=different=HIGH. AND gate = series interlock.</td></tr>
  </table>
  <table class="n-table">
    <tr><th>FINAL MEMORY AID — Electronics & Semiconductors</th></tr>
    <tr><td>DIODE: PN junction. Forward <span class="n-val">0.6V</span> conducts. Reverse blocks. Test: <span class="n-val">0.6V</span> forward, OL reverse. Shorted=<span class="n-val">0V</span> both, Open=OL both. ZENER: Reverse breakdown by design. Holds Vz constant. AVR reference, overvoltage protection, HART barrier. RECTIFIER: Bridge (4 diodes, 81%, <span class="n-val">100Hz</span> ripple) most common. 3-phase bridge (6 diodes, 95%, 4.2% ripple) for VFD DC link. BJT: Base-Collector-Emitter. IC=hFE x IB. Current controlled. Cutoff=OFF, Saturation=ON, Active=amplify. MOSFET: Gate-Drain-Source. Voltage controlled. No gate current. Fast. SMPS and PWM. THYRISTOR: 4-layer PNPN. Gate pulse fires — LATCHES. Turns off at AC zero. Alpha controls output. Soft starters, chargers, AVR. IGBT: MOSFET input + BJT output. Gate controlled ON and OFF. Fast PWM. 6 IGBTs = VFD inverter. Replaces thyristor in drives. CYCLOCONVERTER: AC to variable AC direct (no DC link). Thyristors. Output max 1/3 input freq. Large slow propulsion motors. OPTOCOUPLER: LED + phototransistor. Signal by light. Complete isolation. PLC inputs, drive interface, hazardous area barriers. AMPLIFIERS: A=360 deg(30%). B=180 deg push-pull(78.5%). AB=no crossover distortion. C=RF(90%). D=PWM(95%). COMMUTATOR: Mechanical switch on DC rotor. Maintains torque direction. Carbon brushes + mica-insulated copper segments.</td></tr>
  </table>
  <div class="body">────────────────────────────────────────────────────────────</div>
  <div class="n-h2">GAP ADDITIONS — v2.1 (Added May 2026)</div>
  <div class="body">Thyristor / SCR — Firing Angle and Phase Control</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Sanjib, Gopikrishna — follow-up after thyristor explanation</div></div>
  <div class="body">Firing angle (α): The angle in the AC cycle at which the gate pulse is applied to turn the thyristor on.</div>
  <div class="body">Effect: Lower α → thyristor conducts for longer period → higher average output voltage. α=0° → full output. α=180° → zero output.</div>
  <div class="body">In a soft starter: Back-to-back SCRs per phase. At start: α=180° (zero voltage). Gradually decreased to 0° over starting period → voltage ramps up smoothly → torque ramps up → avoids inrush.</div>
  <div class="body">Natural commutation: SCR turns OFF automatically when AC supply crosses zero — this is why SCR needs AC supply to turn off.</div>
  <div class="body">Cycloconverter — Working and IGBT Function</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Sanjib — 'Function of IGBT in cycloconverter'</div></div>
  <div class="body">Cycloconverter: Converts AC power directly to AC power at a DIFFERENT (lower) frequency — NO intermediate DC link.</div>
  <div class="body">Limitation: Output frequency limited to <1/3 of input frequency. On <span class="n-val">60Hz</span> supply → max output <span class="n-val">20Hz</span>. On <span class="n-val">50Hz</span> → max <span class="n-val">16.7Hz</span>.</div>
  <div class="body">Application: Large low-speed motors where low frequency needed (e.g. large propulsion drives, cement mills, rolling mills).</div>
  <div class="body">IGBT in cycloconverter: IGBT (Insulated Gate Bipolar Transistor) replaces SCR in modern designs. IGBT advantage: Gate-controlled turn-OFF (no natural commutation needed). Faster switching (2–20kHz vs 50–<span class="n-val">60Hz</span> for SCR). Lower conduction losses. Better waveform quality.</div>
  <div class="body">Dead ship context: After blackout, if cycloconverter-driven thruster — cannot start until ship's power restored fully.</div>
  <div class="body">Can SCR Replace IGBT in VFD? (Yes/No Exam Question)</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Gopikrishna, Sanjib — trick question in 2025-26 bank</div></div>
  <div class="body">Answer: NO — SCR cannot replace IGBT in the inverter stage of a VFD.</div>
  <div class="body">Why: SCR requires natural commutation — needs AC supply voltage to cross zero for turn-off. In the inverter stage the supply is DC — SCR cannot self-commutate in DC. It would stay ON permanently.</div>
  <div class="body">SCR CAN be used in: Rectifier stage (AC→DC) of a VFD — used in regenerative/4-quadrant drives. But NOT the inverter stage (DC→AC).</div>
  <div class="body">IGBT controls: Gate-controlled turn-on AND turn-off. Switched at 2–20kHz. Essential for PWM inverter.</div>
  <div class="body">Modern VFD: Diode bridge rectifier + IGBT inverter (most common) OR SCR rectifier (regenerative) + IGBT inverter.</div>
  <div class="body">Zener Barrier — Circuit and Application</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Kamath, ALL — 'draw the zener barrier circuit'</div></div>
  <div class="body">Purpose: Limits the electrical energy entering a hazardous area to below the level that can ignite flammable atmosphere — makes circuit intrinsically safe.</div>
  <div class="body">Circuit (3 components): (1) Zener diode — clamps voltage to safe level (Uo). (2) Resistor — limits current to safe level (Io). (3) Fuse — protects zener from sustained overcurrent.</div>
  <div class="body">Safe area side: Instrument power supply and display. Hazardous area side: Sensor/transmitter.</div>
  <div class="body">Entity concept: Uo (max open-circuit voltage), Io (max short-circuit current), Po (max power) — must be below sensor's entity parameters.</div>
  <div class="body">Applications on ships: Sensors in Ex zones — gas detectors on tankers, cargo tank level sensors, pump room instruments.</div>
  <div class="body">Current-to-Voltage Converter (I/V Converter)</div>
  <div class="body">Op-amp circuit with feedback resistor Rf. Output voltage = Input current × Rf (Vout = Iin × Rf).</div>
  <div class="body">Used to convert 4–<span class="n-val">20mA</span> sensor signal to 1–<span class="n-val">5V</span> for analog input cards of PLC/DCS.</div>
  <div class="body">Example: <span class="n-val">250Ω</span> resistor on HART loop. <span class="n-val">4mA</span> × <span class="n-val">250Ω</span> = <span class="n-val">1V</span> (minimum). <span class="n-val">20mA</span> × <span class="n-val">250Ω</span> = <span class="n-val">5V</span> (maximum).</div>
  <div class="body">Why needed: Some controllers accept voltage input only — I/V converter adapts current-output sensors.</div>
  <div class="body">────────────────────────────────────────────────────────────</div>
  <div class="body">ADDITIONAL GAP ADDITIONS — v2.2 (Added May 2026)</div>
  <div class="body">Ex d (Flameproof) vs Ex e (Increased Safety) vs Ex i (Intrinsically Safe)</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Kamath, Vallatho — 'difference between intrinsically safe and explosion proof?'</div></div>
  <div class="body">Ex d — FLAMEPROOF (Explosion Proof): Enclosure strong enough to contain any internal explosion without igniting external atmosphere. Enclosure has flame path — gap allows pressure relief but quenches flame. Used for: motors, switchgear, junction boxes in hazardous areas.</div>
  <div class="body">Ex e — INCREASED SAFETY: Normal equipment made extra safe — wider creepage distances, better seals, no sparking parts, tight tolerances. Does NOT contain explosion — prevents ignition by eliminating spark sources. Used for: terminal boxes, luminaires.</div>
  <div class="body">Ex i — INTRINSICALLY SAFE: Limits electrical energy in circuit to below ignition level — even if component fails. Uses Zener barriers or galvanic isolators. No spark can ignite the atmosphere. Used for: sensors, transmitters, instruments in cargo tanks, pump rooms, hazardous areas.</div>
  <div class="body">EEx i maximum voltage: Zone 0 — 'ia' (fault-tolerant × 2 faults). Zone 1 — 'ib' (fault-tolerant × 1 fault). Typically max <span class="n-val">30V</span> and few mA.</div>
  <div class="body">Key exam answer: 'Ex d contains the explosion. Ex i prevents ignition by limiting energy. Ex e prevents ignition by design. ETO must check zone classification before installing any equipment.'</div>
  <div class="body">────────────────────────────────────────────────────────────</div>
  <div class="n-h2">GAP ADDITIONS — v2.3 (Candidate Exam Experiences)</div>
  <div class="body">Grid Bias Voltage</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Older surveyor — "what is grid bias voltage?"</div></div>
  <div class="body">Grid bias: Fixed DC voltage applied to control grid of vacuum tube (valve) to set its operating point</div>
  <div class="body">Transistor equivalent: base bias voltage — sets transistor quiescent (no-signal) operating point</div>
  <div class="body">Negative grid bias (Class A): keeps tube conducting continuously — linear amplification</div>
  <div class="body">Modern equivalent: transistor biasing networks (voltage divider, emitter bias) serve same function</div>
  <div class="body">Ship application: Older radar and radio transmitters used valve technology — grid bias supplies were critical maintenance items</div>
  <div class="body">555 Timer — Applications</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> "What is a 555 timer used for?"</div></div>
  <div class="body">555 Timer IC: versatile IC for timing and oscillator applications</div>
  <div class="body">Astable mode (oscillator): output continuously toggles HIGH/LOW — square wave. Frequency set by two resistors and capacitor.</div>
  <div class="body">Monostable mode (one-shot): triggered by input → output HIGH for fixed time = 1.1 × R × C → returns LOW</div>
  <div class="body">Bistable mode (flip-flop): set/reset inputs latch output HIGH or LOW</div>
  <div class="body">Ship applications: Alarm timer delays (avoid nuisance alarms). Flasher circuits for warning lights. PWM for DC motor speed control. Watchdog timer circuits. Buzzer/alarm generators.</div>
  <div class="body">Capacitor Behaviour in AC Circuit & Measurement</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> "What happens with a capacitor in an AC circuit?"</div></div>
  <div class="body">Capacitor in AC circuit: current LEADS voltage by 90° (CIVIL: C — I before V in capacitor)</div>
  <div class="body">Capacitive reactance: Xc = 1/(2πfC) — higher frequency → lower reactance → more current flows</div>
  <div class="body">Capacitor in DC: blocks DC (acts as open circuit once fully charged)</div>
  <div class="body">Measuring capacitance: Use LCR meter or capacitance function on digital multimeter</div>
  <div class="body">SAFETY: Discharge capacitor FIRST — large capacitors (UPS, VFD DC bus) store lethal charge. Verify discharged with voltmeter before touching.</div>
  <div class="body">Checking capacitor: Good → reads near rated value. Shorted → near zero on resistance. Open → no reading on capacitance meter.</div>
  <div class="body">Arc Arrestor and Surge Arrester — Functions</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> "What is a surge arrester?"</div></div>
  <div class="body">Surge arrester: Protective device that clamps transient over-voltages to a safe level — diverts energy to earth</div>
  <div class="body">Working: Metal oxide varistor (MOV) — high resistance at normal voltage, conducts heavily above clamping voltage</div>
  <div class="body">Installation: Line-to-earth at cable entry points, transformer terminals, MSB busbars</div>
  <div class="body">Rating: Clamping voltage must be below equipment insulation withstand voltage. Discharge capacity in kA.</div>
  <div class="body">Arc arrestor: Used on radio antenna systems — spark gap type — conducts arc to earth on lightning transient</div>
  <div class="body">Ship applications: HV cable terminations, transformer LV terminals, radio antenna discharge points</div>
  <div class="body">Doping in Semiconductors</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> "What is doping in semiconductors?"</div></div>
  <div class="body">Doping: Adding impurity atoms to pure semiconductor (silicon/germanium) to change conductivity</div>
  <div class="body">N-type: Add pentavalent atoms (phosphorus, arsenic — 5 valence electrons) → 1 free electron per atom. Majority carriers: electrons.</div>
  <div class="body">P-type: Add trivalent atoms (boron — 3 valence electrons) → 1 "hole" per atom. Majority carriers: holes.</div>
  <div class="body">PN junction: P-type and N-type joined → depletion zone forms → built-in potential barrier (~<span class="n-val">0.7V</span> silicon)</div>
  <div class="body">Forward bias: overcomes barrier → current flows. Reverse bias: widens depletion zone → blocks current.</div>
  <div class="body">Application: Diodes, transistors, thyristors, solar cells — all based on doped semiconductor junctions</div>
  <div class="body">EMF vs Potential Difference (PD)</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> "Difference between EMF and potential difference"</div></div>
  <div class="body">EMF (Electromotive Force): Energy per unit charge provided by source — measured at OPEN CIRCUIT (no current flowing)</div>
  <div class="body">PD / Terminal Voltage: Voltage across source WHEN CURRENT FLOWS = EMF − (I × r_internal)</div>
  <div class="body">Example: Battery EMF = <span class="n-val">12.6V</span>. Load current <span class="n-val">100A</span>, internal resistance <span class="n-val">0.01Ω</span> → Terminal voltage = 12.6 − (100 × 0.01) = <span class="n-val">11.6V</span></div>
  <div class="body">Ship application: Generator rated terminal voltage = what loads receive. AVR adjusts excitation to maintain terminal voltage under varying load.</div>
  <div class="body">Phase Advancer — Operation</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> "What is a phase advancer?"</div></div>
  <div class="body">Phase advancer: Improves power factor of wound-rotor (slip ring) induction motors</div>
  <div class="body">Problem: Large induction motors draw significant reactive kVAR from supply for magnetisation</div>
  <div class="body">Solution: Phase advancer mounted on motor shaft — injects AC EMF into rotor slip rings at slip frequency</div>
  <div class="body">Provides reactive (magnetising) current locally — motor no longer draws it from supply</div>
  <div class="body">Result: Supply sees improved power factor, less reactive current from grid</div>
  <div class="body">Alternative (more common): Capacitor bank at motor terminals — simpler static PF correction</div>
  <div class="body">Ship application: Large cargo pump motors — phase advancers or capacitor banks for PF improvement</div>
  <div class="body">RMS Value — Definition and Calculation</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> "What is RMS value?"</div></div>
  <div class="body">RMS = Root Mean Square: Equivalent DC value producing same heating (I²R) effect as the AC waveform</div>
  <div class="body">Formula: V_rms = V_peak / √2 = 0.707 × V_peak</div>
  <div class="body">For <span class="n-val">440V</span> AC supply: V_rms = <span class="n-val">440V</span> → V_peak = 440 × √2 = <span class="n-val">622V</span></div>
  <div class="body">Why RMS: Heating effect depends on V² — simple average of AC sinewave = 0, RMS gives useful heating equivalent</div>
  <div class="body">Instruments: Ship voltmeters and ammeters read RMS — used for all power calculations (P = V_rms × I_rms × cosφ)</div>
  <div class="body">Peak voltage importance: Cable insulation must withstand peak voltage (<span class="n-val">622V</span> on <span class="n-val">440V</span> system) — not just RMS</div>
  <div class="body">Ebonite — Properties and Applications</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Older surveyor — "what is ebonite and where is it used?"</div></div>
  <div class="body">Ebonite (hard rubber/vulcanite): Hard, black insulating material made by vulcanising rubber with high sulphur content</div>
  <div class="body">Properties: Excellent electrical insulator. Hard and rigid. Resistant to common acids/alkalis. Brittle with age and UV.</div>
  <div class="body">Triboelectric: Ebonite rod becomes negatively charged when rubbed with fur — classic electrostatics demonstration</div>
  <div class="body">Ship/electrical uses: Switchboard handles, busbar support insulators (older installations), battery separators</div>
  <div class="body">Modern replacement: Phenolic resin (Bakelite), PTFE, polypropylene — better UV resistance and longer life</div>
  <div class="body">Impulse Voltage Generator — Operation</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Surveyor asked about impulse testing of HV insulation</div></div>
  <div class="body">Impulse voltage generator (Marx generator): produces high-voltage short-duration pulses for insulation testing</div>
  <div class="body">Working: Multiple capacitors charged in parallel, then switched in series by spark gaps → series voltage = n × V_charge</div>
  <div class="body">Output: Standard lightning impulse waveform — 1.2/50 µs (rises in 1.2 µs, falls to 50% in 50 µs)</div>
  <div class="body">Purpose: Tests cable insulation, transformer insulation, switchgear against lightning and switching surges</div>
  <div class="body">Ship use: Manufacturer type-testing of HV cables/transformers — NOT routine onboard testing</div>


  <!-- ═══ WRITTEN SECTION ═══ -->
  <div class="n-h1" id="s-written">📝 Written Section</div>
  <div class="n-info"><div class="icon">📝</div><div class="body"><strong>Coming Soon:</strong> The written preparation module is currently under development.</div></div>


  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>No Surveyor Q&A available</strong> for this topic yet.</div></div>


  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📋 Quick Revision</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">Revision tables coming soon.</div></div>

  </div>
</div>
</div>`);

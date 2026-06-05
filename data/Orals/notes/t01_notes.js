window.loadNotes("T01", `<div class="view" id="view-notes-t01">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T01')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 1 - Alternator &amp; Generator</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">SOLAS II-1/Reg 40</span>
      <span class="tag tag-purple">Brushless Focus</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-principle')">Principle</button>
    <button class="anc-btn" onclick="jumpTo('s-placement')">Placement</button>
    <button class="anc-btn" onclick="jumpTo('s-excitation')">Excitation</button>
    <button class="anc-btn" onclick="jumpTo('s-brushless')">Brushless</button>
    <button class="anc-btn" onclick="jumpTo('s-avr')">AVR</button>
    <button class="anc-btn" onclick="jumpTo('s-solas')">SOLAS</button>
    <button class="anc-btn" onclick="jumpTo('s-synchroscope')">Synchronisation</button>
    <button class="anc-btn" onclick="jumpTo('s-parallel')">Parallel Ops</button>
    <button class="anc-btn" onclick="jumpTo('s-protection')">Protections</button>
    <button class="anc-btn" onclick="jumpTo('s-maint')">Maintenance</button>
    <button class="anc-btn" onclick="jumpTo('s-pitting')">Slip Rings</button>
    <button class="anc-btn" onclick="jumpTo('s-residual')">Flashing</button>
    <button class="anc-btn" onclick="jumpTo('s-procedures')">Procedures</button>
    <button class="anc-btn" onclick="jumpTo('s-blackout')">Blackout Test</button>
    <button class="anc-btn" onclick="jumpTo('s-undervoltage')">280V Motor Effect</button>
    <button class="anc-btn" onclick="jumpTo('s-dashpot')">Dashpot</button>
    <button class="anc-btn" onclick="jumpTo('s-avr-limiter')">AVR Limiter</button>
    <button class="anc-btn" onclick="jumpTo('s-kva-example')">kVA vs kW</button>
    <button class="anc-btn" onclick="jumpTo('s-winding-clean')">Winding Clean</button>
    <button class="anc-btn" onclick="jumpTo('s-cyber-gen')">Cybersecurity</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyor-qa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  

  <div class="n-h1" id="s-principle">⚡ Working Principle &amp; Construction</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Faraday's Law of Electromagnetic Induction:</strong> EMF is induced in a conductor when there is a relative change in magnetic flux linkage. In a marine alternator, the rotating DC-excited rotor field cuts the stationary stator armature conductors - balanced 3-phase AC EMF is induced. Foundation question asked by every surveyor.</div></div>
  <div class="n-grid">
    <div class="n-card"><div class="card-title">ROTOR (Rotating)</div><div class="card-val">DC Field Winding</div><div class="card-desc">Carries excitation current supplied by the AVR. Creates the rotating magnetic field. Low DC current means small slip rings if a brush-type unit is used.</div></div>
    <div class="n-card"><div class="card-title">STATOR (Stationary)</div><div class="card-val">3-Phase AC Output</div><div class="card-desc">Stationary stator conductors cut by the rotating rotor field. High-voltage output (440V, 6.6kV) is taken directly from stationary terminals - no slip rings needed for heavy current.</div></div>
  </div>
  <div class="n-formula">f = (P &times; N) / 120<div class="label">f = frequency (Hz) · P = number of poles · N = shaft speed (RPM)</div></div>
  <table class="n-table">
    <tr><th>Poles</th><th>Speed for 50 Hz</th><th>Speed for 60 Hz</th></tr>
    <tr><td>2</td><td class="hl"><span class="n-val">3000 RPM</span></td><td class="hl"><span class="n-val">3600 RPM</span></td></tr>
    <tr><td>4</td><td class="hl"><span class="n-val">1500 RPM</span></td><td class="hl"><span class="n-val">1800 RPM</span></td></tr>
    <tr><td>6</td><td class="hl"><span class="n-val">1000 RPM</span></td><td class="hl"><span class="n-val">1200 RPM</span></td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Why rated in kVA and not kW?</strong> Alternator winding heating depends directly on current (I<sup>2</sup>R), which is determined by apparent power (kVA), not active power (kW). The same kVA causes the same winding temperature rise regardless of the load power factor. kW = kVA × PF. Motors are rated in kW because their useful mechanical output is active power.</div></div>

  <div class="n-h2" id="s-placement">⚓ Why Alternators Are Not Placed on the Bottom Platform (Tank Top)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Highly asked by Kamath and Wad.</strong> Alternators are always installed on the intermediate or upper platform of the engine room, never directly on the double bottom tank top.</div></div>
  <ul class="n-list">
    <li><strong>1. Flooding Protection (SOLAS II-1/Reg 40):</strong> In the event of an engine room leak or flooding, the bottom platform (bilge/tank top level) is the first to be submerged. Elevating the generators ensures they remain functional longer during an emergency to supply power to bilge pumps, steering, and emergency systems.</li>
    <li><strong>2. Structural Vibration Mitigation:</strong> The tank top is subject to the highest mechanical vibration from the main engine crankshaft and propeller thrust. Placing alternators on upper structural platforms dampens these vibrations, protecting bearing alignments and stator windings.</li>
    <li><strong>3. Access for Overhaul (Crane Access):</strong> Upper platforms allow the engine room overhead gantry crane to be positioned directly above the alternator for stator/rotor extraction and heavy engine component maintenance.</li>
    <li><strong>4. Ventilation and Cooling:</strong> Upper platforms enjoy much better fresh air circulation and forced draft fan cooling compared to the hot, humid, and oily atmosphere restricted near the tank top.</li>
  </ul>

  <div class="n-h1" id="s-excitation">🔋 Excitation Systems - All 4 Types</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr">
    <div class="n-card"><div class="card-title">1. Separately Excited</div><div class="card-desc">External DC source (batteries or rectifier) supplies rotor field winding via slip rings. Simple but requires carbon brush maintenance.</div></div>
    <div class="n-card"><div class="card-title">2. Self-Excited Shunt</div><div class="card-desc">Generator output is stepped down and rectified to supply its own field via slip rings. Strictly requires initial residual magnetism to start bootstrapping.</div></div>
    <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">3. ✓ Brushless (Modern Marine)</div><div class="card-desc">PMG → AVR → Exciter → Rotating rectifiers on the same shaft. Completely eliminates brushes and slip rings. Ideal for Unattended Machinery Spaces (UMS).</div></div>
    <div class="n-card" style="border-color:rgba(57,208,216,.3)"><div class="card-title" style="color:var(--cyan)">4. Static Excitation</div><div class="card-desc">Thyristor-controlled rectifier supplies DC directly from stator output to the rotor field via slip rings. Offers exceptionally fast transient response.</div></div>
  </div>

  <div class="n-h1" id="s-brushless">🔄 Brushless Alternator - Full Chain</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>The Three-Machine System on One Shaft.</strong> All rotating together, eliminating electrical transfer via physical contact. Essential for hazardous areas due to zero brush sparking.</div></div>
  <ol class="n-steps">
    <li><strong>PMG (Permanent Magnet Generator):</strong> Permanent magnets on rotor shaft generate initial AC voltage without external excitation. Feeds the AVR directly, bypassing residual magnetism dependency.</li>
    <li><strong>AVR (Automatic Voltage Regulator):</strong> Rectifies and controls DC excitation. Feeds the stationary <strong>Exciter Stator Field Winding</strong>.</li>
    <li><strong>Main Exciter:</strong> Reversed construction. Armature winding on rotor generates 3-phase AC as it cuts the stationary exciter stator field.</li>
    <li><strong>Rotating Rectifier (Diode Wheel):</strong> Mounted on the rotor shaft. Converts 3-phase AC from the exciter armature directly into DC.</li>
    <li><strong>Main Alternator Field:</strong> Rotating field winding on the rotor is energized by the rectified DC from the diode wheel on the same shaft.</li>
    <li><strong>Main Alternator Armature:</strong> Stationary stator winding is cut by the main rotating field, inducing the <strong>balanced 3-phase AC output ✓</strong> to the busbars.</li>
  </ol>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Rotating Diode Failures - Diagnostic Details:</strong><br>
  • <strong>One Diode Open-Circuit:</strong> Unbalanced DC fed to the main field. Results in voltage fluctuations and an increased ripple component. Output voltage drops by approximately <span class="n-val">15–20% under load</span>. <em>Critical:</em> Winding may appear normal at no-load but will show heavy hunting and voltage sag when loaded.<br>
  • <strong>One Diode Short-Circuit:</strong> Allows current to flow in the reverse direction, introducing an AC component into the DC field winding. Causes severe voltage fluctuations, waveform distortion, rapid rotor heating, and <strong>increased electrical vibration</strong> (unbalanced magnetic forces). Can cause winding burnout if not detected immediately via AVR hunting alarms or rotor thermistors.</div></div>

  <div class="n-h1" id="s-avr">🎛️ AVR - Automatic Voltage Regulator</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>AVR Megger Protection Rule:</strong> ALWAYS disconnect the AVR entirely (including sensing PTs and PMG connections) before carrying out winding insulation resistance tests. Megger voltages (500V or 2500V DC) will permanently destroy sensitive AVR semiconductors (thyristors, diodes, and zener diodes) and can back-feed voltage, causing false IR readings.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working Principle:</strong> Closed-loop feedback system. Output voltage is sensed by PTs → stepped down and rectified → compared against internal Reference Voltage → error signal is amplified → controls thyristor firing angle to adjust the DC excitation fed to the exciter stator field.</div></div>
  <table class="n-table">
    <tr><th>Trimmer</th><th>Function</th></tr>
    <tr><td><strong>Voltage Adjust</strong></td><td>Sets the nominal output voltage setpoint (e.g. <span class="n-val">440V</span>)</td></tr>
    <tr><td><strong>Droop</strong></td><td>Sets reactive (kVAR) load sharing characteristic - voltage sags slightly with increasing reactive current</td></tr>
    <tr><td><strong>Stability</strong></td><td>Damping trimmer - prevents voltage hunting, recovery oscillations, or sluggish response</td></tr>
    <tr><td><strong>Soft Start</strong></td><td>Controls rate of voltage build-up during starting sequence to prevent overvoltage spikes</td></tr>
  </table>

  <div class="n-h1" id="s-solas">📋 SOLAS Electrical Requirements</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS II-1/Reg 40.3 - Voltage and Frequency Regulation Tolerances:</strong></div></div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Steady State</th><th>Transient Excursion</th><th>Settling Recovery Target</th></tr>
    <tr><td>Voltage</td><td class="hl">±<span class="n-val">2.5%</span> of rated</td><td class="hl">±<span class="n-val">10% to 20%</span> max limit</td><td class="ok">Recovers to within <strong>±3%</strong> in &le; <span class="n-val">1.5 seconds</span></td></tr>
    <tr><td>Frequency</td><td class="hl">±<span class="n-val">5%</span> of rated</td><td class="hl">±<span class="n-val">10%</span> max limit</td><td class="ok">Recovers to nominal within &le; <span class="n-val">5 seconds</span></td></tr>
  </table>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">Emergency DG - Cargo</div><div class="card-val" style="color:var(--orange)">45 s / 18 h</div><div class="card-desc">Must auto-start and supply emergency switchboard (ESB) within <span class="n-val">45 seconds</span> on blackout. Fuel supply must last 18 hours.</div></div>
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">Emergency DG - Passenger</div><div class="card-val" style="color:var(--orange)">30 s / 36 h</div><div class="card-desc">Must auto-start and supply ESB within <span class="n-val">30 seconds</span>. Fuel supply must last 36 hours. Requires transitional battery source for 30 minutes.</div></div>
  </div>

  <div class="n-h1" id="s-synchroscope">🕐 Synchroscope - Construction, Working &amp; Paralleling</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Asked by EVERY Surveyor.</strong> Indicates frequency difference and phase angle difference between the incoming generator and the running busbar.</div></div>
  <p class="n-p">The synchroscope is a small single-phase induction-motor-type instrument designed for phase comparison.</p>
  <ul class="n-list">
    <li><strong>Stator:</strong> Connected to the running busbar voltage - creates a rotating magnetic field at busbar frequency.</li>
    <li><strong>Rotor:</strong> Connected to the incoming generator - has two coils wound 90° apart with a phase-shifting circuit - creates a pulsating field.</li>
    <li>Rotor has no mechanical restraint, allowing it to spin freely depending on the rotating fields' interaction.</li>
  </ul>
  <table class="n-table">
    <tr><th>Needle Behaviour</th><th>Physical Condition</th><th>Action Requirement</th></tr>
    <tr><td>Needle stands still</td><td class="ok">Incoming frequency = Busbar frequency</td><td>Determine phase angle (needs to be at 12 o'clock)</td></tr>
    <tr><td>Needle rotates CLOCKWISE</td><td class="hl">Incoming generator frequency is <strong>faster</strong> than busbar</td><td>Optimal state: adjust to slow clockwise rotation</td></tr>
    <tr><td>Needle rotates ANTICLOCKWISE</td><td class="hl">Incoming generator frequency is <strong>slower</strong> than busbar</td><td>Incorrect: adjust governor to speed up incoming generator</td></tr>
    <tr><td>Pointer stationary at 12 o'clock</td><td class="ok">Incoming and busbar voltages are perfectly in phase</td><td><strong>SAFE TO CLOSE BREAKER ✓</strong></td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why Close Just BEFORE 12 o'clock?</strong> Close the ACB when the needle is rotating slowly in the clockwise direction, at approximately the 11 o'clock position (10° to 15° before 12). This compensates for the mechanical closing time of the breaker (approx. <span class="n-val">50–100 ms</span>). By closing slightly early as frequency is higher, the incoming machine is caught moving in phase; it instantly takes up a small active load upon connection rather than motoring.</div></div>

  <div class="n-h2">Wrong Synchronisation Consequences</div>
  <table class="n-table">
    <tr><th>Synchroscope Position</th><th>Consequence</th><th>Severity</th></tr>
    <tr><td>6 o'clock (180° out of phase)</td><td class="bad">CATASTROPHIC - massive circulating current (up to 15× rated), severe mechanical shock to shaft/coupling, stator winding damage, and potential prime mover failure.</td><td class="bad">Extremely Severe (Winding Burnout)</td></tr>
    <tr><td>Needle moving fast clockwise</td><td class="hl">Incoming generator takes heavy sudden active load surge upon connection - trips immediately on overcurrent.</td><td class="hl">Moderate to Severe</td></tr>
    <tr><td>Needle moving anticlockwise</td><td class="hl">Incoming generator connects in a slow state - instantly motoring and drawing active power from the busbar.</td><td class="hl">Moderate (Reverse Power Trip)</td></tr>
    <tr><td>Phase sequence incorrect</td><td class="bad">Unbalanced circulating currents flow immediately, creating short-circuit conditions. Results in an instantaneous overcurrent trip.</td><td class="bad">Severe - Must correct phase links</td></tr>
  </table>

  <div class="n-warn"><div class="icon">❓</div><div class="body"><strong>MMD Examiner Trick Question: What happens if you press the "ACB Close" button on an idle, non-running generator?</strong><br>
  • <strong>Theoretical Expectation:</strong> Some expect nothing to happen since the incoming generator has 0V.<br>
  • <strong>Actual Physical Event:</strong> The active, running generator on the busbar will instantaneously <strong>back-feed</strong> the stationary generator's windings. <br>
  • <strong>Motoring Effect:</strong> The idle generator will suddenly act as an <strong>induction motor</strong>, drawing massive starting current from the busbar in an attempt to spin. This will cause extreme mechanical stress, potential winding damage, and a severe busbar voltage dip.<br>
  • <strong>Protection Response:</strong> The <strong>Reverse Power Relay</strong> of the idle machine should detect power flowing <em>into</em> it instead of <em>out</em> of it and trip its ACB within 3–5 seconds. If the reverse power relay fails to trip, the running generator's <strong>Overcurrent Relay (OCR)</strong> will trip, causing a total ship <strong>blackout</strong>.</div></div>

  <div class="n-h2">Paralleling Without Synchroscope</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr">
    <div class="n-card"><div class="card-title">Dark Lamp Method</div><div class="card-desc">Three lamps connected across corresponding phases of incoming and busbar. When all three lamps go dark simultaneously, the generators are in phase. <em>Limitation:</em> Cannot detect wrong phase sequence (all dark even at 180° out of phase if sequence is reversed).</div></div>
    <div class="n-card"><div class="card-title">Bright Lamp Method</div><div class="card-desc">Lamps are cross-connected. Perfect in-phase condition is reached when one lamp is completely dark and two are at maximum, equal brightness.</div></div>
    <div class="n-card"><div class="card-title">Check Synchronise Relay</div><div class="card-desc">An electronic guard relay that monitors phase, frequency, and voltage difference. It inhibits manually closing the ACB unless safe parameters are met.</div></div>
    <div class="n-card"><div class="card-title">Voltmeter / Frequency Method</div><div class="card-desc">Monitor dual voltmeters and frequency meters. Adjust governor to match frequencies, and close breaker when the synchronized meter pointer rests in the safety band.</div></div>
  </div>

  <div class="n-h1" id="s-parallel">⚖️ Parallel Operation &amp; Load Sharing</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title">Active Power (kW) Sharing</div><div class="card-desc">Controlled exclusively by the prime mover's <strong>GOVERNOR</strong>. Adjust governor speed trimmers to balance fuel inputs.</div></div>
    <div class="n-card" style="border-color:rgba(167,139,250,.3)"><div class="card-title">Reactive Power (kVAR) Sharing</div><div class="card-desc">Controlled exclusively by the alternator's <strong>AVR EXCITATION</strong>. Adjust the AVR voltage trimmers to balance reactive currents.</div></div>
  </div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>The Necessity of Droop:</strong> <br>
  • <strong>Governor Droop (3-5%):</strong> Speed decreases slightly as active load (kW) increases. This ensures stable load sharing without hunting. <br>
  • <strong>AVR Droop (3-5%):</strong> Voltage drops slightly as reactive load (kVAR) increases. This stabilizes reactive currents and prevents current swings between machines. <br>
  <em>Note:</em> Isochronous mode (zero droop / constant speed) can only be used on a single, isolated generator. If run in parallel, isochronous generators will "fight" and immediately trip on overload or reverse power.</div></div>

  <div class="n-h1" id="s-protection">🛡️ Protection &amp; Safeties - Complete List</div>
  <table class="n-table">
    <tr><th>Protection</th><th>Setpoint Value</th><th>Test Method Description</th></tr>
    <tr><td>Overcurrent Relay (OCR)</td><td class="hl"><span class="n-val">105–110%</span> rated current (IDMT)</td><td>Secondary current injection using a calibration kit</td></tr>
    <tr><td>Over-voltage Relay</td><td class="hl"><span class="n-val">110%</span> rated voltage (sustained)</td><td>Voltage injection to the relay sensing card</td></tr>
    <tr><td>Under-voltage Relay (UVT)</td><td class="hl"><span class="n-val">85%</span> rated voltage</td><td>Reduce control voltage supply; verifies ACB trip on complete loss</td></tr>
    <tr><td>Differential Relay</td><td class="hl">Instantaneous: <span class="n-val">10–20%</span> mismatch</td><td>Secondary injection comparing CT current from neutral vs line end</td></tr>
    <tr><td>Reverse Power Relay</td><td class="hl"><span class="n-val">5–10%</span> rated kW, <span class="n-val">3–5 s</span> delay</td><td>VCB racked out: inject simulated reverse phase current and voltage</td></tr>
    <tr><td>Earth Fault Relay</td><td class="hl"><span class="n-val">95%</span> stator coverage alarm</td><td>Neutral earth monitoring or insulation monitoring test key</td></tr>
    <tr><td>Bearing Temperature (PT100)</td><td class="ok">Alarm <span class="n-val">80°C</span></td><td class="bad">Trip <span class="n-val">95°C</span></td></tr>
    <tr><td>Winding Thermistor</td><td class="hl">Class F insulation: trip at <span class="n-val">155°C</span></td><td>Measure thermistor resistance curve during heating</td></tr>
    <tr><td>Preferential Trip</td><td class="hl">Sustained overload: staged delay</td><td>Simulate current overload on CT, check staged breaker drops</td></tr>
    <tr><td>Overspeed Trip</td><td class="hl"><span class="n-val">110–115%</span> rated engine RPM</td><td>Mechanical governor override or simulator signal injection</td></tr>
    <tr><td><strong>ACB Mechanical Trip</strong></td><td class="bad">Instantaneous short-circuit rating</td><td>Mechanical magnetic trip mechanism built inside the ACB (fail-safe)</td></tr>
  </table>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Preferential Trip Logic:</strong> Automatically sheds non-essential loads in stages (Stage 1: galley, HVAC, deck machinery; Stage 2: accommodation ventilation, laundry) to prevent a complete ship blackout. <strong>NEVER sheds essential services:</strong> Steering gear, navigation lights, fire pumps, bilge pumps, or GMDSS. It uses a dashpot or digital timer delay.</div></div>

  <div class="n-h1" id="s-maint">🔧 Maintenance &amp; IR Testing</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Value / Threshold</th><th>Diagnostic Meaning</th></tr>
    <tr><td>Megger Test Voltage</td><td class="hl"><span class="n-val">500V DC</span> (for 440V machine)</td><td>Standard test voltage for low-voltage systems</td></tr>
    <tr><td>Minimum Winding IR</td><td class="bad"><span class="n-val">1.0 MΩ</span></td><td>Absolute minimum. DO NOT ENERGISE if below this value.</td></tr>
    <tr><td>Polarization Index (PI)</td><td class="ok">PI &gt; <span class="n-val">2.0</span></td><td>Good, dry insulation</td></tr>
    <tr><td>Polarization Index (PI)</td><td class="hl">PI <span class="n-val">1.0–2.0</span></td><td>Fair condition, moisture present. Dry out recommended.</td></tr>
    <tr><td>Polarization Index (PI)</td><td class="bad">PI &lt; <span class="n-val">1.0</span></td><td>Dangerous condition. Do not energize; insulation is wet.</td></tr>
    <tr><td>New Winding IR</td><td class="ok">&gt;<span class="n-val">100 MΩ</span></td><td>Expected value after high-quality workshop rewinding</td></tr>
  </table>
  
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Critical Megger Earthing Safety Rule:</strong> After performing an insulation resistance test, the tested alternator windings hold a dangerous capacitive charge. The winding <strong>must be shorted to earth for at least 30 seconds</strong> to safely and fully dissipate the residual charge before allowing physical contact.</div></div>
<div class="n-info">
  <div class="icon">🛑</div>
  <div class="body">
    <strong>Verifying an Alternator as "Electrically Dead" with Residual Magnetism Present:</strong><br>
    Because residual magnetism can induce a small voltage even with the ACB open, follow this strict protocol before physical contact:<br>
    1. <strong>Isolate:</strong> Open the main ACB and rack it out into the Lockout/Tagout position.<br>
    2. <strong>Isolate Field:</strong> Completely disconnect the AVR module wiring to cut off potential field paths.<br>
    3. <strong>Test Voltage:</strong> Use an approved voltage detector to test lines across all phases and to the hull earth frame.<br>
    4. <strong>Ground Terminals:</strong> Connect safe temporary earth clamps to the stator terminals to fully discharge any sub-sensitivity residual charge.
  </div>
</div>

  <div class="n-info"><div class="icon">❄️</div><div class="body"><strong>Cold Region Drydock &amp; Anti-Condensation Heaters:</strong> In cold environments, atmospheric moisture condenses rapidly on cold windings, dropping IR values dangerously low.<br>
  • <strong>Prevention:</strong> Anti-condensation (space) heaters must be kept energized to maintain the internal winding temperature just above the ambient dew point. If heaters are insufficient, circulate warm dry air through the machine.<br>
  • <strong>Interlock Verification:</strong> Always verify the automation interlock: the heaters must automatically turn <strong>ON</strong> the moment the main generator breaker/run-signal turns <strong>OFF</strong>.</div></div>

  <div class="n-h2" id="s-pitting">⚡ Slip Ring Pitting Marks - Causes &amp; Actions</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Pitting on slip rings (for brush-type alternators/motors) is a critical wear sign that must be addressed immediately.</strong></div></div>
  <table class="n-table">
    <tr><th>Root Causes of Pitting</th><th>Practical Onboard Corrective Actions</th></tr>
    <tr>
      <td>
        • High-current sparking from worn, loose, or misaligned carbon brushes.<br>
        • Oil, moisture, or carbon dust contamination on the slip ring surface.<br>
        • Incorrect brush grade (too hard or too soft) causing uneven wear.<br>
        • Insufficient brush spring tension.
      </td>
      <td>
        <strong>1. Reduce Load:</strong> Immediately reduce the alternator load to the minimum possible to lower excitation current.<br>
        <strong>2. Inspect Brush Pressure:</strong> Verify brush spring tension is within <strong>150–200 g/cm²</strong> using a spring balance.<br>
        <strong>3. Dressing the Rings:</strong> Carefully use a fine emery cloth or dressing stone mounted on an insulated holder to smooth out minor pitting marks while the machine is running.<br>
        <strong>4. Check Brush Contact:</strong> Ensure the brush matches the manufacturer's specified grade and has at least 80% surface contact with the ring.<br>
        <strong>5. Dry Dock Action:</strong> If pitting is deep/severe, the rotor must be landed, and slip rings machined on a lathe in a workshop. Monitor for sparking for 30 minutes post-maintenance.
      </td>
    </tr>
  </table>

  <div class="n-h1" id="s-residual">✨ Residual Magnetism &amp; Field Flashing</div>
  <div class="n-warn"><div class="icon">🚦</div><div class="body"><strong>The "No Voltage" Diagnostic Sequence (Surveyor Trap):</strong> If a generator is started and shows zero voltage, do not immediately assume lost residual magnetism. Follow this strict hierarchy:<br>
  1. <strong>Check Actual Frequency:</strong> The engine RPM gauge might show 1500 RPM, but a faulty governor sensor could mean it's actually running too slow to build voltage. Verify via the Hz meter.<br>
  2. <strong>Voltmeter Calibration:</strong> Ensure the meter itself hasn't failed (check with a portable multimeter).<br>
  3. <strong>AVR Output:</strong> Check if the AVR is outputting any DC milli-amps to the exciter.<br>
  4. <strong>Flashing:</strong> Only after verifying speed and meters should you attempt to restore residual magnetism.<br>
  5. <strong>Hardware Faults:</strong> If flashing fails, investigate rotating diodes, PMG output, or an open-circuit field winding.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Air Gap Measurement:</strong> Measured with long feeler gauges inserted through stator frame ventilation slots. <br>
  • Measure at minimum <strong>4 positions per pole:</strong> Top (12 o'clock), Bottom (6 o'clock), Left (9 o'clock), and Right (3 o'clock). <br>
  • Standard clearance: <span class="n-val">1.5 to 3.0 mm</span>. Max allowable deviation between positions: <span class="n-val">±10%</span>. <br>
  • <em>Significance:</em> Too small risks catastrophic rotor-stator rubbing. Too large causes high reluctance, requiring excess excitation current from the AVR. Uneven gap creates unbalanced magnetic pull, leading to severe vibration and bearing wear.</div></div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Blackout sequential load restoration is heavily tested.</strong> Once the main generator is synchronised back on the dead board, you cannot start all motors at once. Their combined starting current (5-8× rated) would trip the generator on overcurrent. Start auxiliaries in a strict step-by-step sequence with <span class="n-val">30-second to 2-minute delays</span>:</div></div>
  <div class="n-formula">HFO Separator &rarr; Cooling Pumps &rarr; FW Generator &rarr; Starting Air Compressor &rarr; L.O. Pump &rarr; Main Engine Start</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">This specific sequence ensures fuel preparation, system cooling, and control air are established before starting the heavy lube oil pumps, which allows the main engine to be safely pre-lubricated and started.</div></div>

  <div class="n-h2" id="s-blackout">🔌 Blackout Test - Full Procedure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS requirement:</strong> Emergency generator must auto-start and supply essential loads within <span class="n-val">45 seconds</span> (cargo ships) or <span class="n-val">30 seconds</span> (passenger ships). PSC inspectors test this - know every step.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Preparation (before tripping):</strong><br>
  1. Inform bridge - obtain permission - confirm ship is NOT manoeuvring, berthing, or in restricted waters.<br>
  2. Inform chief engineer and all ER staff. Brief every person on their manual-start station.<br>
  3. Confirm emergency generator is in <strong>AUTO start</strong> mode. Check fuel level and starting battery charge.<br>
  4. Note all equipment currently running - reference list for post-restoration checks.<br>
  5. Verify emergency switchboard (ESB) is healthy and transfer breaker is in AUTO.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Test Execution:</strong><br>
  6. Trip all main generator ACBs - simulate complete blackout.<br>
  7. Start timer immediately.<br>
  8. Verify: emergency generator auto-cranks, fires, and builds voltage.<br>
  9. Verify: ESB incomer breaker closes automatically within <span class="n-val">45 seconds</span>.<br>
  10. Check essential loads supplied: emergency lighting, navigation lights, GMDSS, fire detection, steering gear power.<br>
  11. <strong>If auto-start fails:</strong> immediately initiate manual start per ER manual procedure - do not wait.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Restoration - Sequential Load Pickup (critical - do NOT restore all at once):</strong><br>
  12. Start main generator 1 - allow voltage and frequency to stabilise at rated values.<br>
  13. Synchronise and close main ACB onto dead busbar (or onto ESB via tie-breaker).<br>
  14. Transfer essential loads from ESB back to MSB.<br>
  15. Restore auxiliaries in strict sequence with <span class="n-val">30-second to 2-minute delays</span> between each:<br>
  &nbsp;&nbsp;&nbsp;➜ HFO Separator → Cooling Water Pumps → Auxiliary Blower (M/E) → FW Generator → Starting Air Compressor → L.O. Pump → Main Engine Start<br>
  16. Restore non-essential loads last: galley, HVAC, deck equipment.<br>
  17. Record: auto-start time, ESB close time, full restoration time. Report to master and chief engineer.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Why sequential restoration?</strong> Each motor draws 5–8× rated current on starting. Starting all auxiliaries simultaneously would produce a combined inrush that would trip the main generator on overcurrent, causing a second blackout. Time delays allow each motor to reach running speed and drop back to normal current before the next is started.</div></div>

  <div class="n-h1" id="s-undervoltage">⚡ Motor on Under-Voltage - Torque Drop</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Scenario Question: A 440V motor receives only 280V. Explain the effects.</strong> Asked by Kamath and Deswal.</div></div>
  <div class="n-formula">Torque &prop; V<sup>2</sup></div>
  <div class="n-formula">Torque Ratio = (V<sub>actual</sub> / V<sub>rated</sub>)<sup>2</sup> = (280 / 440)<sup>2</sup> &approx; 0.40 (i.e. only 40% of rated torque available)</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>At 280V instead of 440V:</strong><br>
  1. Available motor starting torque drops to only <strong>40%</strong> of rated design. <br>
  2. Motor cannot accelerate the coupled load, causing speed to drop and slip to increase dramatically. <br>
  3. Increased slip causes stator current to rise to <strong>2–3× rated value</strong> in a desperate bid to maintain torque.<br>
  4. Massively increased current causes rapid overheating (I<sup>2</sup>R). Windings will burn out within minutes if the overload relay (OLR) is incorrectly set or fails to trip. <br>
  5. The motor will stall immediately if the load torque exceeds the reduced 40% capability.</div></div>

  <div class="n-h1" id="s-dashpot">⏱️ Dashpot - How It Works</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Dashpot Assembly:</strong> A pneumatic or hydraulic time-delay device used in mechanical preferential trip relays to provide a configurable delay before shedding loads.<br>
  • <strong>Construction:</strong> Comprises a piston moving inside an oil or air cylinder. The rate of fluid displacement is controlled by a micro-orifice with an adjustable needle valve. <br>
  • <strong>Adjustment:</strong> Turning the needle valve alters the flow restriction. Opening the valve reduces flow resistance, speeding up piston travel and shortening the delay. Closing the valve restricts flow, lengthening the delay (typically set for <span class="n-val">5–10 seconds</span>). <br>
  • <strong>Purpose:</strong> Allows temporary current spikes (like motor starting currents) to pass without tripping the breaker. Only sustained overloads will force the piston to complete its travel and trip the non-essential contacts. <br>
  • <strong>Modern Alternative:</strong> Electronic digital timer relays (precise, no maintenance, zero risk of oil leaks).</div></div>

  <div class="n-h1" id="s-avr-limiter">🎛️ Brushless Excitation Chain Safeties</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Two critical internal safety components in a brushless alternator:</strong><br>
  1. <strong>Zener Diode Suppressor (Varistor) across the rotating diode wheel:</strong> Protects the rotating diodes against transient overvoltage spikes. These spikes occur when the alternator excitation field is suddenly broken or switched. The Zener diode clamps the high voltage spike, dissipating it safely to prevent diode breakdown. <br>
  2. <strong>Excitation Current Limiter in the AVR:</strong> Continuously monitors the excitation current supplied to the exciter stator field. If the alternator is overloaded, the AVR will try to force excitation to maintain terminal voltage. This limiter caps the excitation current to approximately <span class="n-val">110–120%</span> of rated current, protecting the rotor windings from overtemperature and potential thermal burnout.</div></div>

  <div class="n-h1" id="s-kva-example">🔢 kVA vs kW - Numerical Example</div>
  <div class="n-formula">Active Power (kW) = Apparent Power (kVA) &times; PF</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Numerical Comparison:</strong> Consider a <strong>500 kVA</strong> marine alternator: <br>
  • At a Power Factor of <strong>0.8</strong>: Useful Power = $500 \\times 0.8 =$ <span class="n-val">400 kW</span> <br>
  • At a Power Factor of <strong>1.0</strong>: Useful Power = $500 \\times 1.0 =$ <span class="n-val">500 kW</span> <br>
  Improving the ship's power factor from 0.8 to 1.0 increases the useful active power capacity by <strong>25%</strong> without adding structural load to the diesel engine or generator frame. This highlights the importance of maintaining on-board capacitor banks in good working order.</div></div>

  <div class="n-h1" id="s-winding-clean">🔧 Winding Maintenance, Cleaning &amp; Workshop Checks</div>
  
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Checks on Rewound Alternators from Shore:</strong> <br>
  1. <strong>Visual check:</strong> Confirm even varnish application, tight slot wedges, and clean termination boxes. <br>
  2. <strong>Insulation Resistance (IR):</strong> 500V Megger test must indicate $\ge$ <span class="n-val">100 MΩ</span> at room temperature. <br>
  3. <strong>Winding Resistance Balance:</strong> Check resistance of all 3 phases with a micro-ohmmeter. All readings must be **equal within 1%** deviation. Any greater variance indicates a coil turn count or connection error. <br>
  4. <strong>High-Potential (Hi-Pot) Test:</strong> Apply $2 \\times \\text{Rated Voltage} + 1000\\text{V}$ for 1 minute to test insulation integrity. <br>
  5. <strong>Air Gap:</strong> Take feeler gauge baseline readings. <br>
  6. <strong>No-load test:</strong> Run uncoupled to check for balance, vibrations, and hot bearings. Verify rotation direction. Check certificate.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Winding Cleaning Technique &amp; Routine Maintenance:</strong> <br>
  • <strong>Air Flow Maintenance:</strong> Regularly clean air filters and ventilation ducts. Blocked filters restrict heat dissipation and cause rapid winding overheating under load.<br>
  • <strong>Dust Cleaning:</strong> Blow out dry dust using <strong>low-pressure dry compressed air</strong>. High pressure can force conductive carbon dust deep into winding slots or physically damage aging insulation. <br>
  • <strong>Oil Contamination:</strong> Clean windings using <strong>approved electrical contact cleaner solvent</strong>. Never use water, kerosene, or petrol (which dissolves insulation varnish). <br>
  • <strong>Critical Evaporation Window:</strong> After solvent application, you <strong>must allow 100% full evaporation</strong> of the solvent before re-assembling, meggering, or applying power. Trapped solvent can dissolve insulation internally under load or cause explosive flashovers.<br>
  • <strong>PMS Logging:</strong> Ensure all insulation values, bearing temperatures, and maintenance dates are formally entered into the ship's Planned Maintenance System (PMS).</div></div>

  <div class="n-h1" id="s-cyber-gen">🔐 Cybersecurity - Generator Control Systems (IACS E26/E27)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>IACS Unified Requirements E26 &amp; E27:</strong> Mandatory for vessels with construction contracts on or after <span class="n-val">1 July 2024</span>. Generator PMS and electronic AVR systems are classified as <strong>Category III Operational Technology (OT) Systems</strong>. Cyber-attacks on these systems represent an immediate, catastrophic risk to ship propulsion and electrical safety.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Mandatory Control Port Protocol for Technicians:</strong> Before an OEM technician connects a diagnostics laptop or firmware update USB to the generator control panel or AVR: <br>
  1. <strong>Malware Scan:</strong> Scan the laptop/USB using an approved, offline maritime security tool. <br>
  2. <strong>Physical Interlock:</strong> ETO must provide physical authorization (unlocking the RJ45/USB port cover and turning the key-switch to enable "Local Program Mode"). <br>
  3. <strong>MFA &amp; Logging:</strong> If remote support is active, enforce Multi-Factor Authentication (MFA). Ensure all actions are written to an immutable, non-modifiable digital audit log. <br>
  4. <strong>Credential Reset:</strong> Change any default or temporary passwords used during the diagnostic session as soon as the technician departs the vessel.</div></div>

  <div class="n-h1" id="s-surveyor-qa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">Sanjib, Vishwanathan, Deswal, Kamath, Gupta, and Wad test these specific questions regularly. Focus on delivering these exact technical key points to score maximum marks.</div></div>

  <div class="n-h2">Synchroscope, Paralleling &amp; Wrong Synchronization</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr><td>Describe synchroscope construction and working</td><td>Small induction-motor type instrument. Stator → busbar (rotating field at busbar frequency). Rotor → incoming generator (two coils 90° apart). CW pointer = incoming faster. CCW = incoming slower. Stationary at 12 o'clock = in phase - close ACB. Close just before 12 to account for breaker closing time.</td></tr>
    <tr><td>Synchroscope not working - how will you parallel?</td><td>Dark lamp method: connect 3 lamps between corresponding phases of incoming and busbar. ALL THREE dark simultaneously = in phase → close ACB. Verify phase sequence separately first. Use separate voltmeters and frequency meters. Log: synchroscope unserviceable, alternate method used.</td></tr>
    <tr><td>Junior engineer closed breaker without synchronising - what happens?</td><td>Massive circulating current - depends on phase angle at closure. Worst case (180°): current 10–15× rated - severe mechanical shock to coupling, possible winding insulation damage, overcurrent relay trips. Both generators may trip. Can cause permanent winding damage or coupling failure.</td></tr>
  </table>

  <div class="n-h2">Load Sharing &amp; Droop</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr><td>Two generators - one showing <span class="n-val">600 kW</span>, other <span class="n-val">200 kW</span>. What is the problem?</td><td>Unequal active (kW) load - governor droop settings differ. Fix: adjust governor of under-loaded machine (more fuel/speed) while reducing overloaded machine. Watch kW meters balance. Do NOT touch AVR (that affects kVAR not kW).</td></tr>
    <tr><td>Two generators - kW equal but current different. What is the problem?</td><td>Equal kW but different current = unequal reactive (kVAR) sharing. AVR issue - droop settings differ. Fix: increase AVR voltage trimmer of under-loaded machine (more excitation → more kVAR). Decrease AVR of over-loaded machine. Do NOT touch governors - kW balance is already correct.</td></tr>
    <tr><td>What is droop and why is it important?</td><td>Intentional slight reduction in output (speed or voltage) as load increases. Governor droop 3–5%: speed drops as active load rises → stable kW sharing in parallel. AVR droop 3–5%: voltage drops as reactive load rises → stable kVAR sharing. Without droop: generators hunt and are unstable - one takes all load.</td></tr>
  </table>

  <div class="n-h2">Protection &amp; Maintenance</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr><td>How do you test the overcurrent relay at survey?</td><td>Secondary injection: rack ACB to TEST position. Disconnect CT secondary from relay. Connect injection test set to relay current coils. Inject calibrated AC current at 2×, 5×, 10× rated. Record trip time at each multiple. Compare with IDMT curve. Reconnect, return to service. Record results.</td></tr>
    <tr><td>How do you test reverse power relay when VCB is racked out?</td><td>Method 1 (injection): use power relay test set - inject simulated reverse power (voltage + current at required phase angle) → verify trips at 5–10% rated kW. Method 2 (shore power): when ship on shore power and generator ACB closed for transfer - reverse power flows → verify relay trips. Method 3: integral test button - verifies wiring and trip coil only.</td></tr>
    <tr><td>Generator running at rated load but voltage is not <span class="n-val">440V</span> - what will you check?</td><td>1. Voltmeter calibration. 2. AVR voltage trimmer setting. 3. AVR input (PT supply). 4. AVR output DC to exciter field (voltmeter). 5. Exciter field resistance - partial open circuit? 6. Adjust voltage trimmer. 7. Check loose connections on AVR terminals. Report to chief engineer if uncorrectable.</td></tr>
    <tr><td>Machine received from rewind shop - checks before commissioning?</td><td>Visual check of winding quality. IR test (<span class="n-val">500V</span> megger, min 100 MΩ). Winding resistance balance (all 3 phases within 1% imbalance). Hi-Pot test (2× rated V <span class="n-val">+1000V</span>, 1 minute). No-load run: check current, temperature, vibration. Verify rotation direction. Air gap measurement. Obtain test certificate.</td></tr>
    <tr><td>PSC inspector wants blackout test - describe procedure</td><td>Inform bridge - get clearance - ship in safe condition. Brief all staff. Verify emergency DG in AUTO. Trip all main ACBs - start timer. Verify auto-start and ESB closes within 45 seconds. <strong>If auto-start fails, immediately initiate manual start per ER manual.</strong> Check all essential loads supplied. Start main generator, synchronise, transfer loads from ESB to MSB. Restore auxiliaries in sequence with time delays. Record all times. Present records to PSC inspector.</td></tr>
  </table>

  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic / Question</th><th>Exam Frequency</th><th>Key Points to State</th></tr>
    <tr><td>Synchroscope construction + working</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>Stator=busbar. Rotor=incoming. CW=fast. CCW=slow. Close just before 12.</td></tr>
    <tr><td>Generator no voltage - reasons + actions</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>Residual magnetism, AVR fault, diodes, PMG, field OC, speed, voltmeter fault.</td></tr>
    <tr><td>Brushless alternator - full working</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>PMG → AVR → Exciter field(S) → Exciter armature(R) AC → Rotating diodes → Main field(R) → Stator AC output.</td></tr>
    <tr><td>Flashing procedure</td><td class="hl">⭐⭐⭐⭐⭐</td><td>12/<span class="n-val">24V</span> battery to exciter field. Correct polarity. 2–3 sec only. Machine at rated speed. Wear gloves, CO2 extinguisher standby.</td></tr>
    <tr><td>Alternator safeties - all with values</td><td class="hl">⭐⭐⭐⭐⭐ Multiple surveyors</td><td>OCR, Reverse power (5–10%), Differential, OV (110%), UV (85%), Preferential trip, Overspeed (110–115% RPM), Earth fault, Bearing temp (80°/95°C), Winding temp (155°C).</td></tr>
    <tr><td>Droop - governor and AVR</td><td class="hl">⭐⭐⭐⭐⭐</td><td>Governor droop = kW sharing. AVR droop = kVAR sharing. Both 3–5%. Equal on both machines.</td></tr>
    <tr><td>Two DGs not sharing equal load - reason</td><td class="hl">⭐⭐⭐⭐⭐</td><td>Unequal kW: governor issue. Unequal kVAR/current: AVR issue.</td></tr>
    <tr><td>Diode open/short in running alternator</td><td class="hl">⭐⭐⭐⭐</td><td>Open: voltage fluctuation, 15–20% drop under load. Short: severe fluctuation, electrical vibration, field overheating.</td></tr>
    <tr><td>IR test of alternator</td><td class="hl">⭐⭐⭐⭐</td><td>Disconnect AVR first. <span class="n-val">500V</span> megger. Min 1 MΩ. PI &gt; 2 = good. Discharge winding 30 seconds after test.</td></tr>
    <tr><td>Air gap - measurement and effects</td><td class="hl">⭐⭐⭐⭐</td><td>Feeler gauge, 4 positions per pole. Too small: rub. Too large: AVR overworks. Uneven: vibration.</td></tr>
    <tr><td>Overspeed trip test</td><td class="hl">⭐⭐⭐⭐</td><td>Actual or simulated. Trip at 110–115% RPM. Record in log.</td></tr>
    <tr><td>Blackout test - full procedure</td><td class="hl">⭐⭐⭐⭐</td><td>Brief staff, trip ACBs, verify DG starts in 45 sec, restore in sequence with time delays.</td></tr>
    <tr><td>SOLAS voltage limits</td><td class="hl">⭐⭐⭐⭐ Sanjib, Upendra, Deswal</td><td>Steady ±2.5%. Transient ±20%. Recovery to within ±3% in 1.5 sec. Frequency: ±5% steady, ±10% transient, 5 sec recovery.</td></tr>
    <tr><td>Why generator not at tank top</td><td class="hl">⭐⭐⭐⭐ Kamath, Wad</td><td>Flooding risk, vibration, no crane access, poor ventilation, SOLAS flood protection.</td></tr>
    <tr><td>Slip ring pitting - action</td><td class="hl">⭐⭐⭐</td><td>Reduce load, check brush pressure (150–200 g/cm²), fine emery cloth, check brush grade. Machine slip rings in lathe at drydock if severe.</td></tr>
    <tr><td>Close ACB on non-running generator</td><td class="hl">⭐⭐⭐⭐ Trick question</td><td>Back-feeds as induction motor → motoring → reverse power relay trips ACB. Answer: "motoring + reverse power trip".</td></tr>
  </table>

  </div>
</div>
</div>
`);
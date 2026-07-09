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
    <button class="anc-btn" onclick="jumpTo('s-ocr-idmt')">OCR / IDMT</button>
    <button class="anc-btn" onclick="jumpTo('s-maint')">Maintenance</button>
    <button class="anc-btn" onclick="jumpTo('s-pitting')">Slip Rings</button>
    <button class="anc-btn" onclick="jumpTo('s-residual')">Flashing</button>
    <button class="anc-btn" onclick="jumpTo('s-blackout')">Blackout Test</button>
    <button class="anc-btn" onclick="jumpTo('s-undervoltage')">280V Motor Effect</button>
    <button class="anc-btn" onclick="jumpTo('s-dashpot')">Dashpot</button>
    <button class="anc-btn" onclick="jumpTo('s-avr-limiter')">AVR Limiter</button>
    <button class="anc-btn" onclick="jumpTo('s-kva-example')">kVA vs kW</button>
    <button class="anc-btn" onclick="jumpTo('s-winding-clean')">Winding Clean</button>
    <button class="anc-btn" onclick="jumpTo('s-advanced-topics')">Advanced Topics</button>
    <button class="anc-btn" onclick="jumpTo('s-cyber-gen')">Cybersecurity</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyor-qa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 1 - WORKING PRINCIPLE & CONSTRUCTION
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-principle">⚡ Working Principle &amp; Construction</div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t01-ac-generator-principle.png" alt="AC Generator - Working Principle">
    <div class="note-diagram-cap">Fig. AC Generator — N/S poles, rotating coil, slip ring &amp; AC output waveform</div>
  </div>
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


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 2 - WHY NOT AT TANK TOP
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-placement">⚓ Why Alternators Are Not Placed on the Bottom Platform (Tank Top)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Highly asked by Kamath and Wad.</strong> Alternators are always installed on the intermediate or upper platform of the engine room, never directly on the double bottom tank top.</div></div>
  <ul class="n-list">
    <li><strong>1. Flooding Protection (SOLAS II-1/Reg 40):</strong> In the event of an engine room leak or flooding, the bottom platform (bilge/tank top level) is the first to be submerged. Elevating the generators ensures they remain functional longer during an emergency to supply power to bilge pumps, steering, and emergency systems.</li>
    <li><strong>2. Structural Vibration Mitigation:</strong> The tank top is subject to the highest mechanical vibration from the main engine crankshaft and propeller thrust. Placing alternators on upper structural platforms dampens these vibrations, protecting bearing alignments and stator windings.</li>
    <li><strong>3. Access for Overhaul (Crane Access):</strong> Upper platforms allow the engine room overhead gantry crane to be positioned directly above the alternator for stator/rotor extraction and heavy engine component maintenance.</li>
    <li><strong>4. Ventilation and Cooling:</strong> Upper platforms enjoy much better fresh air circulation and forced draft fan cooling compared to the hot, humid, and oily atmosphere restricted near the tank top.</li>
  </ul>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 3 - EXCITATION SYSTEMS
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-excitation">🔋 Excitation Systems - All 4 Types</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr">
    <div class="n-card"><div class="card-title">1. Separately Excited</div><div class="card-desc">External DC source (batteries or rectifier) supplies rotor field winding via slip rings. Simple but requires carbon brush maintenance.</div></div>
    <div class="n-card"><div class="card-title">2. Self-Excited Shunt</div><div class="card-desc">Generator output is stepped down and rectified to supply its own field via slip rings. Strictly requires initial residual magnetism to start bootstrapping.</div></div>
    <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">3. ✓ Brushless (Modern Marine)</div><div class="card-desc">PMG → AVR → Exciter → Rotating rectifiers on the same shaft. Completely eliminates brushes and slip rings. Ideal for Unattended Machinery Spaces (UMS).</div></div>
    <div class="n-card" style="border-color:rgba(57,208,216,.3)"><div class="card-title" style="color:var(--cyan)">4. Static Excitation</div><div class="card-desc">Thyristor-controlled rectifier supplies DC directly from stator output to the rotor field via slip rings. Offers exceptionally fast transient response. Used on large turbo-alternators and shore-based power stations.</div></div>
  </div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Comparison Summary:</strong><br>
  • Separately excited &amp; self-excited shunt both use slip rings → brush maintenance, sparking risk in hazardous areas.<br>
  • Brushless eliminates all sliding contacts → preferred for UMS, engine rooms with oil mist, and cargo pump rooms.<br>
  • Static excitation uses thyristors for very fast voltage recovery (milliseconds) → preferred where tight voltage regulation is critical (large alternators, shore grids).</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 4 - BRUSHLESS ALTERNATOR FULL CHAIN
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-brushless">🔄 Brushless Alternator - Full Chain</div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t01-brushless-system.png" alt="Brushless Alternator System">
    <div class="note-diagram-cap">Fig. Brushless Alternator — AVR, exciter stator (DC), exciter rotor (3PH AC), rotating rectifier, surge suppressor, main field (DC), stator output with CT feedback</div>
  </div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>The Three-Machine System on One Shaft.</strong> All rotating together, eliminating electrical transfer via physical contact. Essential for hazardous areas due to zero brush sparking.</div></div>
  <ol class="n-steps">
    <li><strong>PMG (Permanent Magnet Generator):</strong> Permanent magnets on rotor shaft generate initial AC voltage without external excitation. Feeds the AVR directly, bypassing residual magnetism dependency.</li>
    <li><strong>AVR (Automatic Voltage Regulator):</strong> Rectifies and controls DC excitation. Feeds the stationary <strong>Exciter Stator Field Winding</strong>.</li>
    <li><strong>Main Exciter:</strong> Reversed construction. Armature winding on rotor generates 3-phase AC as it cuts the stationary exciter stator field.</li>
    <li><strong>Rotating Rectifier (Diode Wheel):</strong> Mounted on the rotor shaft. Converts 3-phase AC from the exciter armature directly into DC.</li>
    <li><strong>Main Alternator Field:</strong> Rotating field winding on the rotor is energized by the rectified DC from the diode wheel on the same shaft.</li>
    <li><strong>Main Alternator Armature:</strong> Stationary stator winding is cut by the main rotating field, inducing the <strong>balanced 3-phase AC output ✓</strong> to the busbars.</li>
  </ol>
  <div class="n-formula">PMG → AVR → Exciter Field (S) → Exciter Armature (R) AC → Rotating Diodes → Main Field (R) DC → Stator AC Output<div class="label">S = stationary · R = rotating · memorise this chain verbatim</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Rotating Diode Failures - Diagnostic Details:</strong><br>
  • <strong>One Diode Open-Circuit:</strong> Unbalanced DC fed to the main field. Results in voltage fluctuations and an increased ripple component. Output voltage drops by approximately <span class="n-val">15–20% under load</span>. <em>Critical:</em> Winding may appear normal at no-load but will show heavy hunting and voltage sag when loaded.<br>
  • <strong>One Diode Short-Circuit:</strong> Allows current to flow in the reverse direction, introducing an AC component into the DC field winding. Causes severe voltage fluctuations, waveform distortion, rapid rotor heating, and <strong>increased electrical vibration</strong> (unbalanced magnetic forces). Can cause winding burnout if not detected immediately via AVR hunting alarms or rotor thermistors.<br><br>
  <strong>How to identify a faulty diode while running:</strong> Monitor terminal voltage under load - a fluctuating, hunting voltage with a 15–20% sag compared to no-load indicates an open diode. A stroboscope can be used at standstill on accessible diode assemblies to compare forward-bias voltage drop across each diode (should be equal, ~0.6–0.7V). Replace the full set at next opportunity - diodes age together.</div></div>

  <div class="n-h2" id="s-surge-suppress">Surge Suppression in Brushless Excitation</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Surge Suppression:</strong><br>
  • The rotating rectifier assembly (diodes on rotor) feeds DC to the main rotor field. When the generator is suddenly disconnected from load (ACB trips), the stored magnetic energy in the main field winding collapses rapidly.<br>
  • This creates a high-voltage transient (back-EMF spike) that can <strong>destroy the rotating diodes</strong>.<br>
  • <strong>Surge suppressor (varistor / flywheel diode / RC snubber):</strong> Connected across the main field winding on the rotor. Absorbs and dissipates the energy spike, clamping the voltage to a safe level.<br><br>
  <strong>Why exciter frequency differs from main alternator output frequency:</strong><br>
  • The exciter is a small AC generator on the same shaft. Its stator has a different number of poles than the main alternator. By choosing a higher pole number on the exciter, it produces a higher frequency output (e.g. <span class="n-val">200–400 Hz</span>) → after rectification by the rotating diodes, the DC ripple is smoother, giving a cleaner, more stable field current → better voltage regulation of the main alternator.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 5 - AVR
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-avr">🎛️ AVR - Automatic Voltage Regulator</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>AVR Megger Protection Rule:</strong> ALWAYS disconnect the AVR entirely (including sensing PTs and PMG connections) before carrying out winding insulation resistance tests. Megger voltages (500V or 2500V DC) will permanently destroy sensitive AVR semiconductors (thyristors, diodes, and zener diodes) and can back-feed voltage, causing false IR readings.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working Principle:</strong> Closed-loop feedback system. Output voltage is sensed by PTs → stepped down and rectified → compared against internal Reference Voltage → error signal is amplified → controls thyristor firing angle to adjust the DC excitation fed to the exciter stator field.</div></div>
  <table class="n-table">
    <tr><th>Trimmer</th><th>Function</th><th>Effect if Misadjusted</th></tr>
    <tr><td><strong>Voltage Adjust</strong></td><td>Sets the nominal output voltage setpoint (e.g. <span class="n-val">440V</span>)</td><td>Generator runs over- or under-voltage; SOLAS limits breached</td></tr>
    <tr><td><strong>Droop</strong></td><td>Sets reactive (kVAR) load sharing characteristic - voltage sags slightly with increasing reactive current</td><td>Unequal kVAR sharing between machines in parallel; circulating reactive currents</td></tr>
    <tr><td><strong>Stability</strong></td><td>Damping trimmer - prevents voltage hunting, recovery oscillations, or sluggish response</td><td>Too low: voltage oscillates (hunts). Too high: sluggish, slow transient recovery</td></tr>
    <tr><td><strong>Soft Start</strong></td><td>Controls rate of voltage build-up during starting sequence to prevent overvoltage spikes</td><td>Too fast: overvoltage spike on startup trips OV relay</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>AVR Fault Finding - Generator Running but Low/No Voltage:</strong><br>
  1. Check voltmeter calibration first (portable multimeter across terminals).<br>
  2. Check PMG output - small AC voltage at AVR input terminals. If absent: PMG magnets demagnetised or winding open-circuit.<br>
  3. Check AVR DC output to exciter field - measure with DC voltmeter at exciter field terminals. If absent: AVR board faulty.<br>
  4. Check exciter field winding resistance - should be a few ohms. Open circuit = no excitation.<br>
  5. Check rotating diodes - see Brushless section.<br>
  6. Last resort: field flash the exciter field directly.</div></div>


  <div class="n-h2">Carbon-Pile AVR - Older Type (Pre-Electronic)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working principle:</strong> A stack (pile) of carbon discs is mounted in series with the exciter field circuit. Carbon has a unique property: resistance decreases as pressure on the discs increases. An electromagnet, energised from the generator terminal voltage, squeezes the carbon pile. When terminal voltage rises → electromagnet pulls harder → pile compressed → resistance drops → <em>but</em> the carbon pile is in series with a fixed resistor such that as pile resistance drops, more current is shunted away from the field → excitation reduces → voltage corrects back down. <br>Conversely, if voltage drops → less electromagnetic force → spring releases pile → resistance increases → more current to field → voltage restores.</div></div>
  <table class="n-table">
    <tr><th>Feature</th><th>Carbon-Pile AVR</th><th>Electronic (SCR) AVR</th></tr>
    <tr><td>Control element</td><td>Variable-resistance carbon stack</td><td>Thyristor (SCR) firing angle</td></tr>
    <tr><td>Speed of response</td><td class="bad">Slow (mechanical movement)</td><td class="ok">Fast (microseconds)</td></tr>
    <tr><td>Maintenance</td><td class="bad">Carbon discs wear, need replacing; spring fatigue; contact cleaning</td><td class="ok">No moving parts; PCB replacement only</td></tr>
    <tr><td>Reliability</td><td class="ok">Very robust - no semiconductors to fail from surges</td><td class="bad">Semiconductors sensitive to transient overvoltage</td></tr>
    <tr><td>Still found on</td><td>Very old tonnage, coastal vessels, some navy auxiliaries</td><td>All modern vessels</td></tr>
  </table>

  <div class="n-h2">Dynamic vs Static vs Trimming AVR - Surveyor Terms</div>
  <table class="n-table">
    <tr><th>Type</th><th>How It Works</th><th>Where Used</th></tr>
    <tr><td><strong>Dynamic AVR</strong></td><td>Electro-mechanical regulator with a moving control element (the carbon pile above, or a rotating amplifier / amplidyne). Slow, mechanical, needs maintenance.</td><td>Old tonnage</td></tr>
    <tr><td><strong>Static AVR</strong></td><td>Fully solid-state - no moving parts. PT senses voltage → rectifier → comparator vs reference → thyristor (SCR) firing angle sets the exciter-field DC. Fast and accurate.</td><td>All modern brushless sets</td></tr>
    <tr><td><strong>Trimming AVR</strong></td><td>A small auxiliary regulator that fine-trims excitation on top of the main AVR - used to balance <span class="n-val">kVAR</span> and match voltage precisely between machines in parallel.</td><td>Paralleling / load sharing</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Alternator Running Under-Voltage - Effects:</strong> If terminal voltage falls below rated (AVR fault, loss of excitation, or overload): connected motors draw more current for the same power (I &prop; 1/V) → stator and feeder overheating; motor torque falls (T &prop; V<sup>2</sup>) so large motors may stall or fail to start; lighting dims and contactors may drop out. Sustained under-voltage overheats windings and should trip the under-voltage / overcurrent protection.</div></div>

  <!-- ═══════════════════════════════════════════════════════════
       SECTION 5b - VOLTAGE REGULATION METHODS
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-voltage-regulation">⚡ Voltage Regulation Calculation Methods</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: "What is the EMF method and MMF method for predetermining voltage regulation?" Know the key difference and which gives pessimistic results.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Voltage regulation (VR%) = (E₀ − V) / V × 100</strong><br>Where E₀ = no-load terminal voltage; V = full-load terminal voltage.<br><br>
  Predetermining VR before building or fully loading the machine requires two tests: <strong>Open Circuit Characteristic (OCC)</strong> and <strong>Short Circuit Characteristic (SCC)</strong> - both plotted against field current (I_f).</div></div>

  <div class="n-h2">EMF Method (Synchronous Impedance Method)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> Obtain synchronous impedance Z_s from OCC and SCC, then calculate E₀ (the no-load EMF that would be needed to supply rated current at full load) using the phasor equation: <strong>E₀ = √[(V cosφ + I_a R_a)² + (V sinφ ± I_a X_s)²]</strong><br><br>
  <strong>Step-by-step:</strong><br>
  1. From SCC: find I_sc (short-circuit current) at a given field current I_f1.<br>
  2. From OCC: find E_oc (open-circuit voltage) at the same I_f1.<br>
  3. Z_s = E_oc / I_sc (this is the synchronous impedance per phase).<br>
  4. Resolve the phasor diagram above to find E₀.<br>
  5. VR% = (E₀ − V) / V × 100.<br><br>
  <strong>Limitation:</strong> Uses a <em>single</em> value of Z_s derived from the linear (air-gap) region of the OCC - it ignores magnetic saturation. The method overestimates Z_s and hence overestimates E₀, giving a <span class="n-val">pessimistic (higher) VR%</span> than the machine actually exhibits. Also called the "optimistic" method in older texts, but in current practice it is regarded as pessimistic because it overestimates regulation losses.</div></div>

  <div class="n-h2">MMF Method (Ampere-Turn Method)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> Works in terms of <em>field current (MMF)</em> rather than voltage (EMF). The field current serves two purposes simultaneously: (a) it overcomes armature reaction, and (b) it produces the required terminal voltage under load. These two field current components are added phasorially.<br><br>
  <strong>Step-by-step:</strong><br>
  1. From OCC: find field current I_f1 needed to generate rated terminal voltage V at no load.<br>
  2. From SCC: find field current I_f2 needed to circulate rated armature current I_a through the short circuit - this represents the leakage flux and armature reaction MMF.<br>
  3. Add I_f1 and I_f2 as phasors (with appropriate load power factor angle) → resultant I_f_total.<br>
  4. Re-enter the OCC at I_f_total to read off E₀.<br>
  5. VR% = (E₀ − V) / V × 100.<br><br>
  <strong>Advantage:</strong> By working on the actual OCC curve (including the saturation knee), the MMF method accounts for magnetic saturation in the iron. This gives a more accurate - slightly <span class="n-val">optimistic (lower) VR%</span> than the EMF method, closer to the machine's real performance.<br><br>
  <strong>Key difference from EMF method:</strong> In the EMF method, one field current value produces one impedance value (ignores saturation). In the MMF method, the field current is split and added phasorially in MMF space, so the magnetic circuit non-linearity (saturation) is implicitly included.</div></div>

  <table class="n-table">
    <tr><th>Aspect</th><th>EMF Method</th><th>MMF Method</th></tr>
    <tr><td>Works in terms of</td><td>Voltage (EMF) - phasor voltage diagram</td><td>Field current (ampere-turns) - phasor MMF diagram</td></tr>
    <tr><td>Tests needed</td><td>OCC + SCC to derive Z_s</td><td>OCC + SCC for separate I_f components</td></tr>
    <tr><td>Saturation considered?</td><td class="bad">No - uses linear Z_s, ignores iron saturation</td><td class="ok">Yes - re-enters actual OCC curve at the resultant field current</td></tr>
    <tr><td>Result tends to be</td><td class="bad">Pessimistic - overestimates VR%</td><td class="ok">Optimistic - underestimates VR%, closer to actual</td></tr>
    <tr><td>Accuracy</td><td class="bad">Less accurate, especially for saturated machines</td><td class="ok">More accurate for practical machines</td></tr>
    <tr><td>Ease of calculation</td><td class="ok">Simpler arithmetic - single Z_s value</td><td class="hl">Slightly more involved - two I_f phasors</td></tr>
  </table>

  <!-- ═══════════════════════════════════════════════════════════
       SECTION 6 - SOLAS ELECTRICAL REQUIREMENTS
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-solas">📋 SOLAS Electrical Requirements</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS II-1/Reg 40.3 - Voltage and Frequency Regulation Tolerances:</strong> Tested by Sanjib, Upendra, and Deswal. Know all six values.</div></div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Steady State</th><th>Transient Excursion</th><th>Settling Recovery Target</th></tr>
    <tr><td>Voltage</td><td class="hl">±<span class="n-val">2.5%</span> of rated</td><td class="hl">±<span class="n-val">10% to 20%</span> max limit</td><td class="ok">Recovers to within <strong>±3%</strong> in &le; <span class="n-val">1.5 seconds</span></td></tr>
    <tr><td>Frequency</td><td class="hl">±<span class="n-val">5%</span> of rated</td><td class="hl">±<span class="n-val">10%</span> max limit</td><td class="ok">Recovers to nominal within &le; <span class="n-val">5 seconds</span></td></tr>
  </table>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">Emergency DG - Cargo</div><div class="card-val" style="color:var(--orange)">45 s / 18 h</div><div class="card-desc">Must auto-start and supply emergency switchboard (ESB) within <span class="n-val">45 seconds</span> on blackout. Fuel supply must last 18 hours.</div></div>
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">Emergency DG - Passenger</div><div class="card-val" style="color:var(--orange)">30 s / 36 h</div><div class="card-desc">Must auto-start and supply ESB within <span class="n-val">30 seconds</span>. Fuel supply must last 36 hours. Requires transitional battery source for 30 minutes.</div></div>
  </div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>SOLAS II-1/Reg 41 - Emergency Source Location:</strong><br>
  • Emergency DG must be located <strong>above the bulkhead deck</strong> (above the deepest load waterline), outside the machinery spaces, in a dedicated compartment.<br>
  • Must be capable of operating independently of the main machinery space - separate fuel tank, separate cooling, separate starting system (batteries or hydraulic accumulator).<br>
  • Primary starting batteries must be capable of <strong>3 consecutive starts</strong> without recharging; a secondary independent source (pneumatic/hydraulic) must provide a further <strong>3 starts within 30 minutes</strong> (the "3 + 3" rule), unless effective hand-starting is provided. EG must be readily startable in cold conditions down to 0°C.<br>
  • Emergency switchboard (ESB) must be in the same compartment as the emergency DG or in an immediately adjacent space accessible without passing through the main machinery space.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 7 - SYNCHROSCOPE & PARALLELING
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-synchroscope">🕐 Synchroscope - Construction, Working &amp; Paralleling</div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t01-synchroscope-construction.png" alt="Synchroscope Construction">
    <div class="note-diagram-cap">Fig. Synchroscope — poles, armature, resistance, inductance coil; connected to incoming alternator &amp; main bus-bars via instrument transformer</div>
  </div>
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

  <div class="n-h2">Four Conditions for Safe Paralleling</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>All four must be satisfied simultaneously before closing the ACB:</strong><br>
  1. <strong>Equal Voltage:</strong> Incoming voltage = Busbar voltage (adjust AVR voltage trimmer).<br>
  2. <strong>Equal Frequency:</strong> Incoming Hz = Busbar Hz (adjust governor speed).<br>
  3. <strong>In Phase:</strong> Synchroscope needle at 12 o'clock, rotating slowly clockwise.<br>
  4. <strong>Correct Phase Sequence:</strong> R-Y-B on incoming = R-Y-B on busbar (verified once during installation by phase rotation meter; lamp test limitations - see below).</div></div>

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
  • <strong>Actual Physical Event:</strong> The active, running generator on the busbar will instantaneously <strong>back-feed</strong> the stationary generator's windings.<br>
  • <strong>Motoring Effect:</strong> The idle generator will suddenly act as an <strong>induction motor</strong>, drawing massive starting current from the busbar in an attempt to spin. This will cause extreme mechanical stress, potential winding damage, and a severe busbar voltage dip.<br>
  • <strong>Protection Response:</strong> The <strong>Reverse Power Relay</strong> of the idle machine should detect power flowing <em>into</em> it instead of <em>out</em> of it and trip its ACB within 3–5 seconds. If the reverse power relay fails to trip, the running generator's <strong>Overcurrent Relay (OCR)</strong> will trip, causing a total ship <strong>blackout</strong>.</div></div>

  <div class="n-h2">Paralleling Without Synchroscope</div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t01-dark-lamp-sync.png" alt="Dark Lamp Synchronizing Circuit">
    <div class="note-diagram-cap">Fig. Dark Lamp Method — busbars (R₁Y₁B₁), synchronising switches, synchronising lamps, incoming machine</div>
  </div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr">
    <div class="n-card"><div class="card-title">Dark Lamp Method</div><div class="card-desc">Three lamps connected across corresponding phases of incoming and busbar. When all three lamps go dark simultaneously, the generators are in phase. <em>Limitation:</em> Cannot detect wrong phase sequence (all dark even at 180° out of phase if sequence is reversed).</div></div>
    <div class="n-card"><div class="card-title">Bright Lamp Method</div><div class="card-desc">Lamps are cross-connected. Perfect in-phase condition is reached when one lamp is completely dark and two are at maximum, equal brightness. <em>Advantage:</em> Detects phase sequence error (lamps never all dark).</div></div>
    <div class="n-card"><div class="card-title">Check Synchronise Relay</div><div class="card-desc">An electronic guard relay that monitors phase, frequency, and voltage difference. It inhibits manually closing the ACB unless safe parameters are met.</div></div>
    <div class="n-card"><div class="card-title">Voltmeter / Frequency Method</div><div class="card-desc">Monitor dual voltmeters and frequency meters. Adjust governor to match frequencies, and close breaker when the synchronized meter pointer rests in the safety band.</div></div>
  </div>


  <div class="n-h2">Voltmeter Method - Third Paralleling Method (Detailed)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>When used:</strong> Synchroscope unserviceable and lamp methods are unavailable or impractical. Requires two voltmeters and two frequency meters visible simultaneously from the ACB closing position.</div></div>
  <ol class="n-steps">
    <li>Connect a <strong>500 V AC voltmeter</strong> across one phase of the incoming generator and the corresponding phase on the busbar (e.g. R-phase of incoming to R-phase busbar). This voltmeter reads the <em>voltage difference</em> between the two systems.</li>
    <li>Adjust the incoming generator governor until the incoming frequency meter reads slightly above busbar frequency (slow clockwise approach, as with synchroscope).</li>
    <li>Match terminal voltages using the AVR trimmer - both voltmeters (busbar and incoming) should read the same value (<span class="n-val">440 V</span>).</li>
    <li>Watch the <strong>500 V difference voltmeter</strong>: as the two systems approach phase alignment, the needle sweeps slowly. The reading cycles between <span class="n-val">0 V</span> (in phase) and <span class="n-val">880 V</span> (180° out of phase).</li>
    <li>Close the ACB when the difference voltmeter needle is <strong>passing through zero</strong> on a slow upswing - this is the in-phase moment. The time-of-passage must be judged to compensate for breaker closing time (<span class="n-val">~50–100 ms</span>).</li>
  </ol>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Limitation:</strong> The 500 V voltmeter does NOT confirm phase sequence. Phase sequence must have been verified separately (by phase rotation meter or lamp test) before using this method. Incorrect phase sequence with the voltmeter showing zero will still cause catastrophic out-of-phase parallel.</div></div>

  <div class="n-h2">Key-Lamp (Single-Lamp) Synchronising Method</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>What it is:</strong> A simplification of the dark-lamp method using a single lamp connected across one phase pair (busbar R-phase to incoming R-phase). Also sometimes called the "keyhole lamp" method - a single lamp mounted in the ACB panel key aperture or on the front panel.</div></div>
  <ul class="n-list">
    <li>When generators are out of phase: lamp is bright (the phase difference voltage drives current through it).</li>
    <li>As phase difference approaches zero: lamp dims.</li>
    <li>At exact in-phase (0° difference): lamp goes <strong>dark</strong> - close the ACB.</li>
    <li><strong>Limitation:</strong> Same as dark-lamp - cannot detect phase sequence reversal (lamp also goes dark at 180° if sequence is reversed). Verify sequence separately.</li>
  </ul>

  <div class="n-h2">Lamp Triangle Method - Three Lamps Cross-Connected</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Connection:</strong> Each lamp is connected between a different phase of the incoming generator and a non-corresponding phase of the busbar, forming a triangle pattern:</div></div>
  <table class="n-table">
    <tr><th>Lamp</th><th>Connected Between</th></tr>
    <tr><td>Lamp 1</td><td>Incoming R-phase → Busbar Y-phase</td></tr>
    <tr><td>Lamp 2</td><td>Incoming Y-phase → Busbar B-phase</td></tr>
    <tr><td>Lamp 3</td><td>Incoming B-phase → Busbar R-phase</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Reading pattern - correct phase sequence:</strong> As frequency is approached, all three lamps cycle in brightness sequentially (chasing effect - 1 → 2 → 3 → 1 → …). The lamps never all go dark simultaneously. Correct moment to close ACB: when <strong>Lamp 1 is dark</strong> and Lamps 2 &amp; 3 are equally bright. <br><strong>Wrong phase sequence:</strong> All three lamps cycle together (all brighten and dim together) - never use this method in that condition; correct sequence first.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory - three methods comparison:</strong> Dark lamp (all dark simultaneously = close) | Bright lamp (one dark, two equal-bright = close) | Lamp triangle (chasing pattern, one dark + two equal-bright = close). Voltmeter method: difference meter at zero = close. Key-lamp: single dark = close.</div></div>

  <!-- ═══════════════════════════════════════════════════════════
       SECTION 8 - PARALLEL OPERATION & LOAD SHARING
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-parallel">⚖️ Parallel Operation &amp; Load Sharing</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title">Active Power (kW) Sharing</div><div class="card-desc">Controlled exclusively by the prime mover's <strong>GOVERNOR</strong>. Adjust governor speed trimmers to balance fuel inputs.</div></div>
    <div class="n-card" style="border-color:rgba(167,139,250,.3)"><div class="card-title">Reactive Power (kVAR) Sharing</div><div class="card-desc">Controlled exclusively by the alternator's <strong>AVR EXCITATION</strong>. Adjust the AVR voltage trimmers to balance reactive currents.</div></div>
  </div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>The Necessity of Droop:</strong><br>
  • <strong>Governor Droop (3-5%):</strong> Speed decreases slightly as active load (kW) increases. This ensures stable load sharing without hunting.<br>
  • <strong>AVR Droop (3-5%):</strong> Voltage drops slightly as reactive load (kVAR) increases. This stabilizes reactive currents and prevents current swings between machines.<br>
  <em>Note:</em> Isochronous mode (zero droop / constant speed) can only be used on a single, isolated generator. If run in parallel, isochronous generators will "fight" and immediately trip on overload or reverse power.</div></div>

  <div class="n-h2">Load Sharing Fault Diagnosis</div>
  <table class="n-table">
    <tr><th>Symptom</th><th>Root Cause</th><th>Corrective Action</th></tr>
    <tr><td>Gen 1: <span class="n-val">600 kW</span>, Gen 2: <span class="n-val">200 kW</span></td><td class="hl">Governor droop settings unequal</td><td>Increase governor of under-loaded machine; decrease overloaded machine. <strong>Do NOT touch AVR.</strong></td></tr>
    <tr><td>Equal kW but different line current</td><td class="hl">AVR droop settings unequal (kVAR sharing imbalance)</td><td>Increase AVR voltage trimmer on under-loaded machine. <strong>Do NOT touch governors.</strong></td></tr>
    <tr><td>Both machines hunting (oscillating load)</td><td class="hl">Governor droop set to zero (isochronous in parallel) or stability trimmer incorrect</td><td>Add droop to governor. Adjust AVR stability trimmer.</td></tr>
  </table>

  <div class="n-h2" id="s-procedures">Load Transfer &amp; Shutdown Procedure</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Taking a Generator Off-Load (Handover Procedure):</strong><br>
  1. Confirm a second generator is already running in parallel and bearing load.<br>
  2. Gradually reduce governor fuel input of machine to be shut down - watch kW transfer to remaining machine.<br>
  3. Reduce to near-zero kW - machine approaches no-load/motoring condition.<br>
  4. Reduce AVR voltage trimmer slightly on outgoing machine to transfer kVAR.<br>
  5. When kW meter reads zero (or just before reverse power relay trips), open the ACB.<br>
  6. Allow machine to run unloaded for 5–10 minutes to cool turbine/engine if applicable.<br>
  7. Shut down prime mover. <strong>DO NOT open ACB under heavy load - causes busbar voltage surge.</strong></div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 9 - PROTECTIONS & SAFETIES
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-protection">🛡️ Protection &amp; Safeties - Complete List</div>
  <table class="n-table">
    <tr><th>Protection</th><th>Setpoint Value</th><th>Test Method Description</th></tr>
    <tr><td>Overcurrent Relay (OCR) - IDMT</td><td class="hl"><span class="n-val">105–110%</span> rated current (IDMT curve)</td><td>Secondary current injection using a calibration kit</td></tr>
    <tr><td>Over-voltage Relay</td><td class="hl"><span class="n-val">110%</span> rated voltage (sustained)</td><td>Voltage injection to the relay sensing card</td></tr>
    <tr><td>Under-voltage Relay (UVT)</td><td class="hl"><span class="n-val">85%</span> rated voltage</td><td>Reduce control voltage supply; verifies ACB trip on complete loss</td></tr>
    <tr><td>Differential Relay</td><td class="hl">Instantaneous: <span class="n-val">10–20%</span> mismatch</td><td>Secondary injection comparing CT current from neutral vs line end</td></tr>
    <tr><td>Reverse Power Relay</td><td class="hl"><span class="n-val">5–10%</span> rated kW, <span class="n-val">3–5 s</span> delay</td><td>VCB racked out: inject simulated reverse phase current and voltage</td></tr>
    <tr><td>Earth Fault Relay</td><td class="hl"><span class="n-val">95%</span> stator coverage alarm</td><td>Neutral earth monitoring or insulation monitoring test key</td></tr>
    <tr><td>Bearing Temperature (PT100)</td><td class="ok">Alarm <span class="n-val">80°C</span></td><td class="bad">Trip <span class="n-val">95°C</span></td></tr>
    <tr><td>Winding Thermistor</td><td class="hl">Class F insulation: trip at <span class="n-val">155°C</span></td><td>Measure thermistor resistance curve during heating</td></tr>
    <tr><td>Preferential Trip</td><td class="hl">Sustained overload: staged delay (5–10 s)</td><td>Simulate current overload on CT, check staged breaker drops</td></tr>
    <tr><td>Overspeed Trip</td><td class="hl"><span class="n-val">110–115%</span> rated engine RPM</td><td>Mechanical governor override or simulator signal injection</td></tr>
    <tr><td>Negative Phase Sequence (NPS) Relay</td><td class="hl"><span class="n-val">≈ 0.2 × In</span> (very sensitive)</td><td>Inject unbalanced current into relay CT circuits; verify alarm and trip</td></tr>
    <tr><td><strong>ACB Mechanical Trip</strong></td><td class="bad">Instantaneous short-circuit rating</td><td>Mechanical magnetic trip mechanism built inside the ACB (fail-safe)</td></tr>
  </table>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Preferential Trip Logic:</strong> Automatically sheds non-essential loads in stages (Stage 1: galley, HVAC, deck machinery; Stage 2: accommodation ventilation, laundry) to prevent a complete ship blackout. <strong>NEVER sheds essential services:</strong> Steering gear, navigation lights, fire pumps, bilge pumps, or GMDSS. It uses a dashpot or digital timer delay to discriminate between motor starting inrush (temporary) and genuine sustained overload.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 10 - OCR & IDMT CHARACTERISTICS
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ocr-idmt">📈 Overcurrent Relay (OCR) &amp; IDMT Characteristics</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>IDMT = Inverse Definite Minimum Time.</strong> The operating time of the relay is inversely proportional to the fault current magnitude - the higher the fault current, the faster the relay trips. This is the operating characteristic of every OCR on the ship's main alternator. Surveyors expect you to describe this curve and its purpose.</div></div>

  <div class="n-h2">Why IDMT - Not Instantaneous or Fixed Time?</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Three reasons IDMT is ideal for marine alternator protection:</strong><br>
  1. <strong>Discrimination:</strong> A small overload (e.g. 120% rated current) could be a motor starting - IDMT allows extra time for the overload to clear naturally before tripping. A bolted short circuit (e.g. 800% rated) trips almost instantly - no delay needed or wanted.<br>
  2. <strong>Selectivity:</strong> Multiple relays in series (main ACB OCR, feeder MCB, motor starter overload) can be graded so the one closest to the fault clears first, isolating only the faulted circuit, not the entire busbar.<br>
  3. <strong>Machine Protection:</strong> I<sup>2</sup>t thermal damage to windings follows the same inverse law - the relay mirrors the actual heating curve of the winding it is protecting.</div></div>

  <div class="n-h2">The IDMT Curve - Shape &amp; Regions</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr">
    <div class="n-card"><div class="card-title">Inverse Region (Low Multiples)</div><div class="card-val">1.05× – ~10× In</div><div class="card-desc">Trip time falls steeply as current rises. This is the operating region for overloads and motor starting discrimination. Time = K / (I/Is – 1)^α where K is the time multiplier setting (TMS) and α depends on curve type.</div></div>
    <div class="n-card"><div class="card-title">Definite Minimum Time (High Multiples)</div><div class="card-val">&gt;~20× In</div><div class="card-desc">The curve flattens to a minimum operating time regardless of how much higher the current rises. This minimum is defined by the relay's definite minimum time (DMT) setting - typically a few cycles. Prevents relay mechanism from operating faster than it is designed.</div></div>
  </div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Three standard IEC IDMT curve types (IEC 60255):</strong><br>
  • <strong>Standard Inverse (SI):</strong> Moderate inverse slope. Most common for marine generator OCR. Used when discrimination margins are comfortable.<br>
  • <strong>Very Inverse (VI):</strong> Steeper slope. Better discrimination when source impedance is high (e.g. long feeder cables). Faster at high multiples.<br>
  • <strong>Extremely Inverse (EI):</strong> Very steep slope - approaches instantaneous at high fault currents. Used where maximum speed of clearance is critical and discrimination margins are wide.<br><br>
  <strong>Marine practice:</strong> Standard Inverse is most common for 440V main alternator OCR. The relay is set at <span class="n-val">105–110% In</span> pickup with a Time Multiplier Setting (TMS) that allows motor starting inrush to pass but clears sustained faults.</div></div>

  <div class="n-h2">IDMT Relay Settings - Key Parameters</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Typical Value (440V Marine)</th><th>Purpose</th></tr>
    <tr><td>Plug Setting (Is) / Pickup</td><td class="hl"><span class="n-val">105–110% In</span></td><td>The minimum current at which the relay starts to operate. Below this: relay resets.</td></tr>
    <tr><td>Time Multiplier Setting (TMS)</td><td class="hl"><span class="n-val">0.1 – 1.0</span> (dimensionless)</td><td>Scales the entire time-current curve up or down. Higher TMS = slower operation at all multiples. Set to achieve correct grading margin.</td></tr>
    <tr><td>Grading Margin (between relays in series)</td><td class="hl"><span class="n-val">0.3 – 0.4 s</span></td><td>Minimum time difference between successive relay operating times at the same fault current. Ensures selectivity - downstream relay clears before upstream relay.</td></tr>
    <tr><td>Definite Minimum Time</td><td class="hl"><span class="n-val">≈ 0.05 – 0.1 s</span></td><td>Floor operating time regardless of fault current magnitude.</td></tr>
  </table>

  <div class="n-h2">Testing the OCR at Survey</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Secondary Injection Test Procedure (surveyor standard answer):</strong><br>
  1. Rack the ACB to <strong>TEST position</strong> - physically isolates the power circuit while maintaining control connections.<br>
  2. Disconnect the CT secondary wiring from the relay current coil terminals.<br>
  3. Connect the portable injection test set to the relay current coil terminals.<br>
  4. Inject calibrated AC current at <strong>2×, 5×, and 10× the relay's pickup setting (Is)</strong>.<br>
  5. Record the trip time at each multiple using the test set's internal timer.<br>
  6. Plot or compare recorded times against the published IDMT characteristic curve for the selected curve type and TMS.<br>
  7. Results within ±5% of curve values = relay in calibration. Outside tolerance = recalibrate or replace relay.<br>
  8. Reconnect CT secondary - verify polarity markings (S1, S2) are correct.<br>
  9. Rack ACB back to SERVICE position. Record test results in PMS and relay test register.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>CT Secondary Open-Circuit Warning:</strong> Never open-circuit a live CT secondary - the CT will develop a dangerously high voltage across its secondary terminals (thousands of volts) due to the missing burden. This will destroy CT insulation and can cause flashover injury. Always short-circuit the CT secondary before disconnecting the relay during injection testing.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 11 - MAINTENANCE & IR TESTING
  ════════════════════════════════════════════════════════════ -->
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
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Polarization Index (PI) - What It Is:</strong><br>
  PI = IR reading at 10 minutes ÷ IR reading at 1 minute (both at 500V DC).<br>
  • Dry, healthy insulation slowly absorbs charge (high polarization) → 10-minute reading much higher than 1-minute → high PI.<br>
  • Wet or contaminated insulation reaches leakage equilibrium quickly → 10-minute reading barely higher than 1-minute → low PI.<br>
  • Always record temperature - IR values double approximately every 10°C temperature drop. Correct to 40°C reference if required by manufacturer.</div></div>

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


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 12 - SLIP RING PITTING
  ════════════════════════════════════════════════════════════ -->
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


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 13 - RESIDUAL MAGNETISM & FIELD FLASHING
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-residual">✨ Residual Magnetism &amp; Field Flashing</div>
  <div class="n-warn"><div class="icon">🚦</div><div class="body"><strong>The "No Voltage" Diagnostic Sequence (Surveyor Trap):</strong> If a generator is started and shows zero voltage, do not immediately assume lost residual magnetism. Follow this strict hierarchy:<br>
  1. <strong>Check Actual Frequency:</strong> The engine RPM gauge might show 1500 RPM, but a faulty governor sensor could mean it's actually running too slow to build voltage. Verify via the Hz meter.<br>
  2. <strong>Voltmeter Calibration:</strong> Ensure the meter itself hasn't failed (check with a portable multimeter).<br>
  3. <strong>AVR Output:</strong> Check if the AVR is outputting any DC milli-amps to the exciter.<br>
  4. <strong>Flashing:</strong> Only after verifying speed and meters should you attempt to restore residual magnetism.<br>
  5. <strong>Hardware Faults:</strong> If flashing fails, investigate rotating diodes, PMG output, or an open-circuit field winding.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Field Flashing Procedure:</strong><br>
  • Use a <span class="n-val">12V or 24V DC</span> battery connected momentarily to the <strong>exciter field winding</strong> (stator terminals of the exciter, not the main field).<br>
  • <strong>Correct polarity is critical</strong> - reversed polarity will wipe the residual magnetism further instead of restoring it. Mark polarity before disconnecting originally.<br>
  • Apply for <strong>2–3 seconds only</strong> - prolonged contact risks over-magnetising or thermally damaging the field winding.<br>
  • Machine must be at or near <strong>rated speed (1500 RPM / 1800 RPM)</strong> so that the restored residual flux can bootstrap the AVR feedback loop.<br>
  • Safety requirements: wear insulated rubber gloves, position a CO2 fire extinguisher nearby, use insulated leads with crocodile clips.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Air Gap Measurement:</strong> Measured with long feeler gauges inserted through stator frame ventilation slots.<br>
  • Measure at minimum <strong>4 positions per pole:</strong> Top (12 o'clock), Bottom (6 o'clock), Left (9 o'clock), and Right (3 o'clock).<br>
  • Standard clearance: <span class="n-val">1.5 to 3.0 mm</span>. Max allowable deviation between positions: <span class="n-val">±10%</span>.<br>
  • <em>Significance:</em> Too small risks catastrophic rotor-stator rubbing. Too large causes high reluctance, requiring excess excitation current from the AVR. Uneven gap creates unbalanced magnetic pull, leading to severe vibration and bearing wear.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 14 - BLACKOUT TEST
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-blackout">🔌 Blackout Test - Full Procedure</div>
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


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 15 - UNDER-VOLTAGE MOTOR EFFECTS
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-undervoltage">⚡ Motor on Under-Voltage - Torque Drop</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Scenario Question: A 440V motor receives only 280V. Explain the effects.</strong> Asked by Kamath and Deswal.</div></div>
  <div class="n-formula">Torque &prop; V<sup>2</sup></div>
  <div class="n-formula">Torque Ratio = (V<sub>actual</sub> / V<sub>rated</sub>)<sup>2</sup> = (280 / 440)<sup>2</sup> &approx; 0.40 (i.e. only 40% of rated torque available)</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>At 280V instead of 440V:</strong><br>
  1. Available motor starting torque drops to only <strong>40%</strong> of rated design.<br>
  2. Motor cannot accelerate the coupled load, causing speed to drop and slip to increase dramatically.<br>
  3. Increased slip causes stator current to rise to <strong>2–3× rated value</strong> in a desperate bid to maintain torque.<br>
  4. Massively increased current causes rapid overheating (I<sup>2</sup>R). Windings will burn out within minutes if the overload relay (OLR) is incorrectly set or fails to trip.<br>
  5. The motor will stall immediately if the load torque exceeds the reduced 40% capability.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why does voltage drop to 280V?</strong> Common causes on a ship:<br>
  • Generator AVR fault or incorrect voltage trimmer setting.<br>
  • Excessive voltage drop in long cable runs (high resistance or undersized cable).<br>
  • Generator overloaded - terminal voltage sags (SOLAS allows transient dip to 80% rated under sudden full-load application).<br>
  • Loose connection at switchboard busbar or motor terminal box - partial contact resistance.<br>
  • Transformer tap setting incorrect (for 6.6kV/440V step-down transformers).</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 16 - DASHPOT
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-dashpot">⏱️ Dashpot - How It Works</div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t01-dashpot.png" alt="Dashpot Preferential Trip">
    <div class="note-diagram-cap">Fig. Dashpot preferential trip — 5s/10s non-essential trips, 15s main breaker trip, delayed &amp; instantaneous contacts, alarm circuit</div>
  </div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Dashpot Assembly:</strong> A pneumatic or hydraulic time-delay device used in mechanical preferential trip relays to provide a configurable delay before shedding loads.<br>
  • <strong>Construction:</strong> Comprises a piston moving inside an oil or air cylinder. The rate of fluid displacement is controlled by a micro-orifice with an adjustable needle valve.<br>
  • <strong>Adjustment:</strong> Turning the needle valve alters the flow restriction. Opening the valve reduces flow resistance, speeding up piston travel and shortening the delay. Closing the valve restricts flow, lengthening the delay (typically set for <span class="n-val">5–10 seconds</span>).<br>
  • <strong>Purpose:</strong> Allows temporary current spikes (like motor starting currents) to pass without tripping the breaker. Only sustained overloads will force the piston to complete its travel and trip the non-essential contacts.<br>
  • <strong>Modern Alternative:</strong> Electronic digital timer relays (precise, no maintenance, zero risk of oil leaks).<br>
  • <strong>Maintenance:</strong> Check oil level in dashpot cylinder annually. Oil viscosity changes with temperature - re-time relay if ambient temperature changes significantly (e.g. tropical to arctic route). Clean needle valve orifice if relay timing has drifted.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 17 - BRUSHLESS EXCITATION CHAIN SAFETIES
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-avr-limiter">🎛️ Brushless Excitation Chain Safeties</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Two critical internal safety components in a brushless alternator:</strong><br>
  1. <strong>Zener Diode Suppressor (Varistor) across the rotating diode wheel:</strong> Protects the rotating diodes against transient overvoltage spikes. These spikes occur when the alternator excitation field is suddenly broken or switched. The Zener diode clamps the high voltage spike, dissipating it safely to prevent diode breakdown.<br>
  2. <strong>Excitation Current Limiter in the AVR:</strong> Continuously monitors the excitation current supplied to the exciter stator field. If the alternator is overloaded, the AVR will try to force excitation to maintain terminal voltage. This limiter caps the excitation current to approximately <span class="n-val">110–120%</span> of rated current, protecting the rotor windings from overtemperature and potential thermal burnout.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 18 - kVA vs kW
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-kva-example">🔢 kVA vs kW - Numerical Example</div>
  <div class="n-formula">Active Power (kW) = Apparent Power (kVA) &times; PF</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Numerical Comparison:</strong> Consider a <strong>500 kVA</strong> marine alternator:<br>
  • At a Power Factor of <strong>0.8</strong>: Useful Power = 500 &times; 0.8 = <span class="n-val">400 kW</span><br>
  • At a Power Factor of <strong>1.0</strong>: Useful Power = 500 &times; 1.0 = <span class="n-val">500 kW</span><br>
  Improving the ship's power factor from 0.8 to 1.0 increases the useful active power capacity by <strong>25%</strong> without adding structural load to the diesel engine or generator frame. This highlights the importance of maintaining on-board capacitor banks in good working order.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Power Triangle - Surveyor Expects You to Draw/Describe This:</strong><br>
  • kVA (Apparent Power) = hypotenuse of the power triangle.<br>
  • kW (Active Power) = horizontal leg = kVA × cos φ.<br>
  • kVAR (Reactive Power) = vertical leg = kVA × sin φ.<br>
  • cos φ = Power Factor (PF). Marine standard design PF = <span class="n-val">0.8 lagging</span>.<br>
  • kVAR is exchanged between alternator and inductive loads (motors, transformers) - it does no useful work but heats generator windings and cables.<br>
  • Capacitor banks reduce kVAR demand from the generator → lower current → less heating → more available kW capacity.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 19 - WINDING MAINTENANCE & WORKSHOP CHECKS
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-winding-clean">🔧 Winding Maintenance, Cleaning &amp; Workshop Checks</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Checks on Rewound Alternators from Shore:</strong><br>
  1. <strong>Visual check:</strong> Confirm even varnish application, tight slot wedges, and clean termination boxes.<br>
  2. <strong>Insulation Resistance (IR):</strong> 500V Megger test must indicate &ge; <span class="n-val">100 MΩ</span> at room temperature.<br>
  3. <strong>Winding Resistance Balance:</strong> Check resistance of all 3 phases with a micro-ohmmeter. All readings must be equal within <strong>1%</strong> deviation. Any greater variance indicates a coil turn count or connection error.<br>
  4. <strong>High-Potential (Hi-Pot) Test:</strong> Apply <strong>2 &times; Rated Voltage + 1000 V</strong> for 1 minute to test insulation integrity.<br>
  5. <strong>Air Gap:</strong> Take feeler gauge baseline readings.<br>
  6. <strong>No-load test:</strong> Run uncoupled to check for balance, vibrations, and hot bearings. Verify rotation direction. Check certificate.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Winding Cleaning Technique &amp; Routine Maintenance:</strong><br>
  • <strong>Air Flow Maintenance:</strong> Regularly clean air filters and ventilation ducts. Blocked filters restrict heat dissipation and cause rapid winding overheating under load.<br>
  • <strong>Dust Cleaning:</strong> Blow out dry dust using <strong>low-pressure dry compressed air</strong>. High pressure can force conductive carbon dust deep into winding slots or physically damage aging insulation.<br>
  • <strong>Oil Contamination:</strong> Clean windings using <strong>approved electrical contact cleaner solvent</strong>. Never use water, kerosene, or petrol (which dissolves insulation varnish).<br>
  • <strong>Critical Evaporation Window:</strong> After solvent application, you <strong>must allow 100% full evaporation</strong> of the solvent before re-assembling, meggering, or applying power. Trapped solvent can dissolve insulation internally under load or cause explosive flashovers.<br>
  • <strong>PMS Logging:</strong> Ensure all insulation values, bearing temperatures, and maintenance dates are formally entered into the ship's Planned Maintenance System (PMS).</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 20 - ADVANCED TOPICS
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-advanced-topics">📚 Advanced Study Topics</div>

  <div class="n-h2" id="s-armature-rxn">Armature Reaction in Alternator</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Armature Reaction:</strong> When load is connected, current flows in the stator (armature) windings and creates its own magnetic flux. This armature flux <strong>opposes and distorts the main rotor field flux</strong> - this effect is called armature reaction.<br><br>
  • <strong>Lagging load (inductive):</strong> Armature flux opposes rotor flux → <em>demagnetising effect</em> → terminal voltage drops.<br>
  • <strong>Leading load (capacitive):</strong> Armature flux aids rotor flux → <em>magnetising effect</em> → terminal voltage rises.<br>
  • <strong>Unity PF load:</strong> Armature flux is <em>cross-magnetising</em> → distorts flux distribution but no net weakening.<br>
  • <strong>Why air gap is kept large in alternators:</strong> A larger air gap increases the reluctance path for the armature flux, thereby <em>reducing the armature reaction effect</em>. This is why the stator air gap of an alternator is several times larger than that of an induction motor of the same rating.<br>
  • <strong>AVR response:</strong> The AVR automatically compensates for armature reaction - it senses terminal voltage drop (on lagging load) and increases excitation to maintain 440V. This is why AVR excitation current increases with lagging load.</div></div>

  <div class="n-h2" id="s-neg-phase-seq">Negative Phase Sequence (NPS) Current</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Negative Phase Sequence:</strong> Caused by <em>unbalanced three-phase voltages or currents</em> (unequal R-Y-B magnitudes). NPS currents create a <strong>counter-rotating magnetic field</strong> at double system frequency in the rotor → induces <strong>eddy currents in rotor body, excitation winding, stator end windings and stator iron</strong> → excessive heating.<br><br>
  • NPS relay setting: <span class="n-val">≈ 0.2 × In</span> (very sensitive - even small imbalance is dangerous).<br>
  • Effect: Rotor experiences the NPS field at <strong>2× system frequency</strong> (120 Hz on a 60 Hz ship) → rapid overheating even at low imbalance levels.<br>
  • Causes: Single-phase loads, open-circuit fuse on one phase, unequal load distribution, fault conditions.<br>
  • Zero-sequence current: Present only during earth fault conditions; absent under normal unbalanced load.</div></div>

  <div class="n-h2" id="s-shaft-gen">Shaft Generator</div>
  <div class="n-ok"><div class="icon">✅</div><div class="body"><strong>Shaft Generator:</strong> Mechanically coupled to the main engine shaft, using the main engine as its prime mover.<br><br>
  • <strong>Problem:</strong> Main engine speed varies (manoeuvring vs. sea speed) → output frequency varies.<br>
  • <strong>Solution - Frequency Converter:</strong> A thyristor-controlled AC/DC/AC converter (also called a cycloconverter or static frequency converter). Rectifies the variable frequency AC to DC, then inverts back to a constant <span class="n-val">60 Hz / 440V</span> supply regardless of engine RPM.<br>
  • <strong>Restriction:</strong> Can only be used at <em>full sea speed</em> - NOT during manoeuvring (insufficient and unstable speed → converter cannot regulate properly).<br>
  • <strong>Advantage:</strong> Recovers engine shaft power, reduces fuel consumption and generator running hours. Can supply up to 30–50% of ship's normal load from shaft power alone.<br>
  • <strong>PTO variant:</strong> A <strong>Power Take-Off (PTO)</strong> gearbox is used on some vessels to drive the shaft generator at constant speed regardless of engine RPM (using variable speed fluid couplings). This eliminates the need for a frequency converter.<br>
  • <strong>Protection:</strong> Fitted with overcurrent, reverse power, and synchronising check relays identical to main alternators.</div></div>

  <div class="n-h2" id="s-salinometer">Salinometer – Working Principle</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Salinometer:</strong> Measures salinity of fresh water generator (FWG) distillate in <span class="n-val">parts per million (ppm)</span>.<br><br>
  <strong>Working Principle:</strong> Pure water is a non-conductor. Dissolved salts (impurities) increase conductivity. A DC electrical supply passes through a conductivity cell immersed in the water sample. More impurity = more current flow.<br><br>
  • <strong>Alarm relay (Relay 2):</strong> Operates when impurity exceeds the set ppm → activates visual/audible alarm AND commands the <em>bypass/dump valve</em> to divert distillate back to sea (not to the FW tank).<br>
  • <strong>Meter protection (Relay 1):</strong> At very high current (heavy contamination), Relay 1 short-circuits the meter to protect it.<br>
  • <strong>Temperature compensation:</strong> Higher water temperature increases conductivity → reading error. A thermometer shunt across the meter adjusts resistance with temperature to compensate.<br>
  • Supply must be <strong>DC</strong> (AC would cause electrolytic effects on electrodes, destroying them).<br>
  • Typical alarm setting: <span class="n-val">5–10 ppm</span> for potable water.</div></div>

  <div class="n-h2" id="s-elec-tacho">Electric Tachometer</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Electric Tachometer:</strong> A small generator (tachogenerator) whose output <em>voltage is proportional to shaft speed</em>. The voltmeter scale is calibrated in RPM.<br><br>
  • <strong>DC Tachogenerator:</strong> Small DC generator mechanically coupled to the shaft. Output voltage (V<sub>out</sub>) = k × RPM. Used where precise speed control is needed - e.g. DC motor drives, governor feedback loops.<br>
  • <strong>AC Tachogenerator (drag-cup type):</strong> AC output <em>frequency</em> is proportional to speed. A drag-cup rotor (thin hollow aluminium cup) is magnetically coupled to the drive shaft without physical contact. Outer magnet rotates → eddy currents induced in drag cup → drag cup rotates against a hairspring → deflection proportional to speed. Used in shaft speed indicators on bridge panels.<br>
  • <strong>Fitted to:</strong> Main engine crankshaft, propeller shaft, generator shaft, boiler fan motors.<br>
  • <strong>Signal use:</strong> Output fed to bridge speed indicator, governor control loop, and blackout detection logic.<br>
  • <strong>Failure mode:</strong> If tachogenerator fails on a governor, the governor loses speed feedback → speed may runaway → overspeed trip actuates. This is why governors have a mechanical overspeed trip as backup.</div></div>

  <div class="n-h2" id="s-logic-gates-gen">Logic Gates in Generator Protection</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Logic Gates in Generator Control:</strong><br><br>
  • <strong>OR Gate:</strong> LO pressure low trip, HT coolant high temperature trip, and overspeed trip are connected via OR gate logic → <em>any one</em> of these faults will trip the generator and shut down the prime mover.<br>
  • <strong>AND Gate:</strong> Used for permissive start circuits - e.g. generator can only be started if: LO pressure OK <em>AND</em> coolant level OK <em>AND</em> starting air available.<br>
  • <strong>NOT Gate:</strong> Used in interlocks - e.g. ACB close permissive is NOT given while the machine is not up to rated speed.<br>
  • <strong>Practical use:</strong> Diesel engine protection relays output a logic signal (0/1) to the governor trip solenoid via OR gate combination - allows any fault to initiate shutdown independently.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 21 - CYBERSECURITY
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-cyber-gen">🔐 Cybersecurity - Generator Control Systems (IACS E26/E27)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>IACS Unified Requirements E26 &amp; E27:</strong> Mandatory for vessels with construction contracts on or after <span class="n-val">1 July 2024</span>. Generator PMS and electronic AVR systems are classified as <strong>Category III Operational Technology (OT) Systems</strong>. Cyber-attacks on these systems represent an immediate, catastrophic risk to ship propulsion and electrical safety.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Mandatory Control Port Protocol for Technicians:</strong> Before an OEM technician connects a diagnostics laptop or firmware update USB to the generator control panel or AVR:<br>
  1. <strong>Malware Scan:</strong> Scan the laptop/USB using an approved, offline maritime security tool.<br>
  2. <strong>Physical Interlock:</strong> ETO must provide physical authorization (unlocking the RJ45/USB port cover and turning the key-switch to enable "Local Program Mode").<br>
  3. <strong>MFA &amp; Logging:</strong> If remote support is active, enforce Multi-Factor Authentication (MFA). Ensure all actions are written to an immutable, non-modifiable digital audit log.<br>
  4. <strong>Credential Reset:</strong> Change any default or temporary passwords used during the diagnostic session as soon as the technician departs the vessel.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 22 - SURVEYOR Q&A
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-surveyor-qa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">Sanjib, Vishwanathan, Deswal, Kamath, Gupta, and Wad test these specific questions regularly. Focus on delivering these exact technical key points to score maximum marks.</div></div>

  <div class="n-h2">Synchroscope, Paralleling &amp; Wrong Synchronization</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr><td>Describe synchroscope construction and working</td><td>Small induction-motor type instrument. Stator → busbar (rotating field at busbar frequency). Rotor → incoming generator (two coils 90° apart). CW pointer = incoming faster. CCW = incoming slower. Stationary at 12 o'clock = in phase - close ACB. Close just before 12 to account for breaker closing time (~50–100 ms).</td></tr>
    <tr><td>Synchroscope not working - how will you parallel?</td><td>Dark lamp method: connect 3 lamps between corresponding phases of incoming and busbar. ALL THREE dark simultaneously = in phase → close ACB. Verify phase sequence separately first. Use separate voltmeters and frequency meters. Log: synchroscope unserviceable, alternate method used.</td></tr>
    <tr><td>Junior engineer closed breaker without synchronising - what happens?</td><td>Massive circulating current - depends on phase angle at closure. Worst case (180°): current 10–15× rated - severe mechanical shock to coupling, possible winding insulation damage, overcurrent relay trips. Both generators may trip. Can cause permanent winding damage or coupling failure.</td></tr>
    <tr><td>What are the four conditions for paralleling?</td><td>Equal voltage (adjust AVR). Equal frequency (adjust governor). In phase - synchroscope at 12, rotating slowly CW. Correct phase sequence R-Y-B. ALL four must be met simultaneously before closing ACB.</td></tr>
  </table>

  <div class="n-h2">Load Sharing &amp; Droop</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr><td>Two generators - one showing <span class="n-val">600 kW</span>, other <span class="n-val">200 kW</span>. What is the problem?</td><td>Unequal active (kW) load - governor droop settings differ. Fix: adjust governor of under-loaded machine (more fuel/speed) while reducing overloaded machine. Watch kW meters balance. Do NOT touch AVR (that affects kVAR not kW).</td></tr>
    <tr><td>Two generators - kW equal but current different. What is the problem?</td><td>Equal kW but different current = unequal reactive (kVAR) sharing. AVR issue - droop settings differ. Fix: increase AVR voltage trimmer of under-loaded machine (more excitation → more kVAR). Decrease AVR of over-loaded machine. Do NOT touch governors - kW balance is already correct.</td></tr>
    <tr><td>What is droop and why is it important?</td><td>Intentional slight reduction in output (speed or voltage) as load increases. Governor droop 3–5%: speed drops as active load rises → stable kW sharing in parallel. AVR droop 3–5%: voltage drops as reactive load rises → stable kVAR sharing. Without droop: generators hunt and are unstable - one takes all load.</td></tr>
  </table>

  <div class="n-h2">OCR, IDMT &amp; Protection Testing</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr><td>What does IDMT mean and why is it used?</td><td>Inverse Definite Minimum Time - trip time is inversely proportional to fault current. High fault current trips fast; small overload given time to clear. Used because it mirrors I²t winding damage curve, allows motor starting discrimination, and provides selectivity between relays in series.</td></tr>
    <tr><td>How do you test the overcurrent relay at survey?</td><td>Secondary injection: rack ACB to TEST position. Short-circuit CT secondary first to prevent open-circuit. Disconnect CT from relay. Connect injection test set. Inject at 2×, 5×, 10× Is. Record trip times. Compare with IDMT curve. Must be within ±5%. Reconnect, restore to service, record results in PMS.</td></tr>
    <tr><td>What is TMS on an IDMT relay?</td><td>Time Multiplier Setting - dimensionless factor (0.1–1.0) that scales the entire IDMT curve up or down. Higher TMS = slower operation. Set to achieve correct grading margin (~0.3–0.4 s) between upstream and downstream relays.</td></tr>
    <tr><td>How do you test reverse power relay when VCB is racked out?</td><td>Method 1 (injection): use power relay test set - inject simulated reverse power (voltage + current at required phase angle) → verify trips at 5–10% rated kW. Method 2 (shore power): when ship on shore power and generator ACB closed for transfer - reverse power flows → verify relay trips. Method 3: integral test button - verifies wiring and trip coil only.</td></tr>
    <tr><td>Generator running at rated load but voltage is not <span class="n-val">440V</span> - what will you check?</td><td>1. Voltmeter calibration. 2. AVR voltage trimmer setting. 3. AVR input (PT supply). 4. AVR output DC to exciter field (voltmeter). 5. Exciter field resistance - partial open circuit? 6. Adjust voltage trimmer. 7. Check loose connections on AVR terminals. Report to chief engineer if uncorrectable.</td></tr>
    <tr><td>Machine received from rewind shop - checks before commissioning?</td><td>Visual check of winding quality. IR test (<span class="n-val">500V</span> megger, min 100 MΩ). Winding resistance balance (all 3 phases within 1% imbalance). Hi-Pot test (2× rated V <span class="n-val">+1000V</span>, 1 minute). No-load run: check current, temperature, vibration. Verify rotation direction. Air gap measurement. Obtain test certificate.</td></tr>
    <tr><td>PSC inspector wants blackout test - describe procedure</td><td>Inform bridge - get clearance - ship in safe condition. Brief all staff. Verify emergency DG in AUTO. Trip all main ACBs - start timer. Verify auto-start and ESB closes within 45 seconds. <strong>If auto-start fails, immediately initiate manual start per ER manual.</strong> Check all essential loads supplied. Start main generator, synchronise, transfer loads from ESB to MSB. Restore auxiliaries in sequence with time delays. Record all times. Present records to PSC inspector.</td></tr>
  </table>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 23 - QUICK REVISION
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic / Question</th><th>Exam Frequency</th><th>Key Points to State</th></tr>
    <tr><td>Synchroscope construction + working</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>Stator=busbar. Rotor=incoming. CW=fast. CCW=slow. Close just before 12.</td></tr>
    <tr><td>Generator no voltage - reasons + actions</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>Residual magnetism, AVR fault, diodes, PMG, field OC, speed, voltmeter fault.</td></tr>
    <tr><td>Brushless alternator - full working</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>PMG → AVR → Exciter field(S) → Exciter armature(R) AC → Rotating diodes → Main field(R) → Stator AC output.</td></tr>
    <tr><td>Flashing procedure</td><td class="hl">⭐⭐⭐⭐⭐</td><td>12/<span class="n-val">24V</span> battery to exciter field. Correct polarity. 2–3 sec only. Machine at rated speed. Wear gloves, CO2 extinguisher standby.</td></tr>
    <tr><td>Alternator safeties - all with values</td><td class="hl">⭐⭐⭐⭐⭐ Multiple surveyors</td><td>OCR (IDMT, 105–110%), Reverse power (5–10%), Differential (10–20%), OV (110%), UV (85%), Preferential trip, Overspeed (110–115% RPM), Earth fault, Bearing (80°/95°C), Winding (155°C), NPS (0.2×In).</td></tr>
    <tr><td>Droop - governor and AVR</td><td class="hl">⭐⭐⭐⭐⭐</td><td>Governor droop = kW sharing. AVR droop = kVAR sharing. Both 3–5%. Equal on both machines.</td></tr>
    <tr><td>Two DGs not sharing equal load - reason</td><td class="hl">⭐⭐⭐⭐⭐</td><td>Unequal kW: governor issue. Unequal kVAR/current: AVR issue.</td></tr>
    <tr><td>IDMT - what is it and why used</td><td class="hl">⭐⭐⭐⭐⭐ Your current topic</td><td>Inverse Definite Minimum Time. Trip time inversely proportional to current magnitude. Mirrors I²t winding damage. Allows motor starting discrimination. Provides selectivity between relays. TMS scales the curve. Grading margin 0.3–0.4 s.</td></tr>
    <tr><td>Diode open/short in running alternator</td><td class="hl">⭐⭐⭐⭐</td><td>Open: voltage fluctuation, 15–20% drop under load. Short: severe fluctuation, electrical vibration, field overheating.</td></tr>
    <tr><td>IR test of alternator</td><td class="hl">⭐⭐⭐⭐</td><td>Disconnect AVR first. <span class="n-val">500V</span> megger. Min 1 MΩ. PI &gt; 2 = good. Discharge winding 30 seconds after test.</td></tr>
    <tr><td>Air gap - measurement and effects</td><td class="hl">⭐⭐⭐⭐</td><td>Feeler gauge, 4 positions per pole. Too small: rub. Too large: AVR overworks. Uneven: vibration.</td></tr>
    <tr><td>Overspeed trip test</td><td class="hl">⭐⭐⭐⭐</td><td>Actual or simulated. Trip at 110–115% RPM. Record in log.</td></tr>
    <tr><td>Blackout test - full procedure</td><td class="hl">⭐⭐⭐⭐</td><td>Brief staff, trip ACBs, verify DG starts in 45 sec, restore in sequence with time delays.</td></tr>
    <tr><td>SOLAS voltage limits</td><td class="hl">⭐⭐⭐⭐ Sanjib, Upendra, Deswal</td><td>Steady ±2.5%. Transient ±20%. Recovery to within ±3% in 1.5 sec. Frequency: ±5% steady, ±10% transient, 5 sec recovery.</td></tr>
    <tr><td>Why generator not at tank top</td><td class="hl">⭐⭐⭐⭐ Kamath, Wad</td><td>Flooding risk, vibration, no crane access, poor ventilation, SOLAS flood protection.</td></tr>
    <tr><td>Slip ring pitting - action</td><td class="hl">⭐⭐⭐</td><td>Reduce load, check brush pressure (150–200 g/cm²), fine emery cloth, check brush grade. Machine slip rings in lathe at drydock if severe.</td></tr>
    <tr><td>Close ACB on non-running generator</td><td class="hl">⭐⭐⭐⭐ Trick question</td><td>Back-feeds as induction motor → motoring → reverse power relay trips ACB. Answer: "motoring + reverse power trip".</td></tr>
    <tr><td>Four conditions for paralleling</td><td class="hl">⭐⭐⭐⭐</td><td>Equal voltage. Equal frequency. In phase (12 o'clock, slow CW). Correct phase sequence R-Y-B.</td></tr>
    <tr><td>Power factor - why capacitors on ship</td><td class="hl">⭐⭐⭐</td><td>Inductive loads (motors) consume lagging kVAR → capacitor banks supply leading kVAR locally → reduces generator kVAR load → lower current → less heating → more usable kW capacity.</td></tr>
  </table>

  </div>
</div>
</div>
`);

window.loadNotes("T14", `<div class="view" id="view-notes-t14">
<div class="note-doc">
  <div style="margin-bottom:16px;display:flex;justify-content:space-between">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T14')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 14 - Bridge Equipment II</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Sensors · Gyrocompass · VDR</span>
      <span class="tag tag-purple">Echo Sounder · Doppler Log</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-temp')">Temperature Sensors</button>
    <button class="anc-btn" onclick="jumpTo('s-pressure')">Pressure/DP Cell</button>
    <button class="anc-btn" onclick="jumpTo('s-speed')">Speed Sensors</button>
    <button class="anc-btn" onclick="jumpTo('s-viscotherm')">Viscotherm</button>
    <button class="anc-btn" onclick="jumpTo('s-gas-cargo')">Gas &amp; Cargo</button>
    <button class="anc-btn" onclick="jumpTo('s-echo')">Echo Sounder</button>
    <button class="anc-btn" onclick="jumpTo('s-gyro')">Gyrocompass</button>
    <button class="anc-btn" onclick="jumpTo('s-vdr')">VDR</button>
    <button class="anc-btn" onclick="jumpTo('s-ecdis-widas')">ECDIS &amp; WIDAS</button>
    <button class="anc-btn" onclick="jumpTo('s-solas-2026')">2026 SOLAS</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  <div class="n-h1" id="s-temp">🌡️ Temperature Sensors - RTD, Thermocouple, Thermistor</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask RTD vs thermocouple difference and what PT100 means.</strong> Know the working principle, typical applications, and specific values for each.</div></div>

  <table class="n-table">
    <tr><th>Sensor</th><th>Principle</th><th>Range</th><th>Ship Use</th></tr>
    <tr><td><strong>PT100 (RTD)</strong></td><td>Resistance increases linearly with temp (PTC)</td><td class="hl"><span class="n-val">-200 to +850°C</span></td><td>Bearings, cooling water, lube oil temp</td></tr>
    <tr><td><strong>Thermocouple (Type K)</strong></td><td>Seebeck Effect - dissimilar metals generate EMF</td><td class="hl"><span class="n-val">up to 1350°C</span></td><td>Exhaust gas, boiler combustion</td></tr>
    <tr><td><strong>Thermistor (NTC)</strong></td><td>Semiconductor - resistance decreases with temp</td><td class="hl"><span class="n-val">-50 to +150°C</span></td><td>Motor winding protection, bilge alarms</td></tr>
    <tr><td><strong>Bimetallic</strong></td><td>Two metals with different expansion rates bend on heating</td><td>Limited range</td><td>HVAC thermostats, motor overload relays</td></tr>
  </table>

  <div class="n-h2">PT100 - Detail</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>PT100 means:</strong> Platinum (Pt) sensing element with exactly <span class="n-val">100 Ω</span> resistance at <span class="n-val">0°C</span>. Resistance increases by <span class="n-val">0.385 Ω</span> per °C (Positive Temperature Coefficient). Requires external excitation current (<span class="n-val">1–5 mA</span>). Standard ship installation uses <strong>3-wire connection</strong> to cancel lead resistance errors. Very accurate, linear - preferred for precision temperature measurement.</div></div>

  <div class="n-h2">Thermocouple - Detail</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Seebeck Effect:</strong> Two dissimilar metals joined at a hot junction (measuring point) and cold junction (reference). Temperature difference creates a small EMF (millivolts). Type K (Chromel-Alumel): sensitivity <span class="n-val">~40–50 µV/°C</span>, range up to <span class="n-val">1350°C</span>. Self-powered - no excitation needed. Requires cold junction compensation for accuracy. Used for main engine exhaust and boiler combustion where temperatures far exceed RTD range.</div></div>

  <div class="n-h2">Thermistor - Detail</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>NTC (Negative Temperature Coefficient):</strong> Semiconductor - resistance decreases sharply by <span class="n-val">3–5%</span> per °C rise. Highly sensitive but non-linear. Limited range <span class="n-val">-50 to +150°C</span>. Used embedded in motor windings for winding temperature protection - trips motor before insulation damage. Also used in bilge level alarms (float-free thermistor type).</div></div>

  
  <div class="n-h2">Advanced Bimetallic Expansion Materials</div>
  <p class="n-p">A bimetallic strip consists of two dissimilar metals - typically brass (high coefficient of expansion) and <strong>invar</strong> (a low-expansion nickel-iron alloy), or brass and steel - firmly bonded along their interface length. Temperature shifts cause the two metals to expand at unequal rates, forcing the strip to mechanically bend toward the side with lower expansion as heat increases.</p>
  <ul class="n-list">
    <li><strong>Mechanical Indicators:</strong> Coiling the strip into a spiral translates linear displacement into rotational deflection to drive local mechanical dial thermometers.</li>
    <li><strong>Electrical Protection:</strong> Implemented inside thermostats, circuit breakers, and thermal motor overload relays. The bimetallic element wrapped in a heating coil carrying motor phase current - sustained overcurrent forces the strip to bend and opens the safety circuit.</li>
  </ul>
<div class="n-h1" id="s-pressure">📊 Pressure Sensors &amp; DP Cell</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>DP Cell (Differential Pressure Cell):</strong> Capacitance diaphragm between two plates. For tank level: High-pressure port connects to tank bottom, Low-pressure port to vapour space at top. DP = ρ × g × h (liquid head). Reading is independent of tank pressure changes - measures only liquid column height. Output: <span class="n-val">4–20 mA</span> proportional to pressure.</div></div>

  <div class="n-formula">DP = ρ × g × h<div class="label">ρ = liquid density · g = 9.81 m/s² · h = liquid head height · Output: 4 mA = 0% · 20 mA = 100%</div></div>

  <div class="n-h2">Transducer Wheatstone Bridges &amp; Dual-Plate Capacitance Shift</div>
  <p class="n-p">Basic pressure transmitters convert physical diaphragm deflection into an electrical signal using an internal <strong>Wheatstone bridge circuit</strong>. Strain gauges are bonded directly onto a flexible diaphragm; as fluid pressure deforms the diaphragm, the strain gauges stretch or compress, modifying their electrical resistance proportionally to break bridge balance and output a calibrated 4-20mA current loop.</p>
  <p class="n-p">A Differential Pressure (DP) cell monitors level and flow by tracking changes across two isolation spaces via a centrally suspended <strong>thin metallic sensing diaphragm positioned between two fixed capacitor plates</strong>. Mismatches between the High Pressure (H) and Low Pressure (L) ports deflect the central diaphragm toward the low-pressure cavity. This shift dynamically alters the internal capacitance gaps - simultaneously increasing capacitance on one side while reducing it on the other - allowing the internal electronics to precisely output a current signal isolated from common-mode tank pressure fluctuations. Standard for pressurized boiler steam drums, fuel lines, and filter contamination monitoring.</p>


  <div class="n-h2">DP Cell Calibration Procedure</div>
  <ol class="n-steps">
    <li>Isolate and bleed process pressure - zero differential across cell</li>
    <li>Apply exactly zero pressure. Adjust ZERO potentiometer until output reads exactly <span class="n-val">4.000 mA</span></li>
    <li>Apply full-scale pressure (e.g. <span class="n-val">10 bar</span>). Adjust SPAN potentiometer until output reads exactly <span class="n-val">20.000 mA</span></li>
    <li>Verify linearity at <span class="n-val">25%, 50%, 75%</span> of range - check against expected mA values</li>
    <li>Document all readings in calibration record with date, engineer name, next due date</li>
  </ol>

  <div class="n-h1" id="s-speed">⚡ Speed Sensors - Doppler Log &amp; Tachometer</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Magnetic Pickup Tachometer:</strong> Fixed magnet and coil mounted <span class="n-val">1–3 mm</span> from toothed flywheel. Passing teeth alter magnetic flux → induces voltage pulses. Formula: Speed = (pulse frequency × 60) / number of teeth. Turbocharger sensor counts blade passing at <span class="n-val">10,000–30,000+ RPM</span> - triggers overspeed alarm at <span class="n-val">110–120%</span> rated speed.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Doppler Log - Working:</strong> Measures ship speed via Doppler Effect (frequency shift of reflected wave). Transmits ultrasonic pulses (<span class="n-val">100–300 kHz</span>) at <span class="n-val">~30°</span> angle from vertical. Echo reflects from seabed (bottom tracking, SOG, depth up to <span class="n-val">~200 m</span>) or subsurface water layer (water tracking, STW, layer <span class="n-val">~10–20 m</span> deep). Uses 4 transducers in Janus configuration - cancels sound velocity errors due to temperature/salinity changes.</div></div>

  <div class="n-formula">Δf = (2 × f × v × cos θ) / c<div class="label">Δf = frequency shift · f = transmitted frequency · v = ship speed · θ = beam angle (~30°) · c = sound speed in water (~1500 m/s)</div></div>

  
  <div class="n-h2">Magnetic Pickup Contamination &amp; Multi-Type Speed Transducers</div>
  <p class="n-p">A variable reluctance magnetic pickup tachometer contains an internal coil wrapped around a permanent magnet core. Because the pickup tip generates a persistent static magnetic field, it continuously attracts fine ferrous metal wear particles from the engine room's lube oil mist. This metallic debris builds up on the sensor tip, shunting the magnetic flux path and damping the induced AC voltage pulses until the RPM display reads false zero. ETOs must clean the sensor tip regularly, verify a mechanical air gap of <span class="n-val">1–3 mm</span> from flywheel teeth, and log output pulse profiles using an oscilloscope or multimeter on AC voltage mode.</p>
  <ul class="n-list">
    <li><strong>Hall Effect Sensors:</strong> Generate a transverse voltage pulse when a ferromagnetic tooth passes through an active semiconductor layer. Superior low-speed tracking resolution compared to passive magnetic pickups, which fail at low crank speeds because the rate of flux change is too small to induce a clear voltage signal.</li>
    <li><strong>Tachogenerators:</strong> Small, brush-equipped AC or DC generator coupled to the engine shaft, outputting voltage directly proportional to RPM. Replaced in modern setups by non-contact magnetic pickup arrays to eliminate mechanical wear.</li>
    <li><strong>Shaft Encoders:</strong> High-resolution optical or magnetic slotted discs tracking precise angular positions and speed components. Used for continuous feedback calculations inside Controllable Pitch Propeller (CPP) hubs and azimuth thruster controls.</li>
  </ul>

  <!-- GAP: Viscotherm -->
  <div class="n-h1" id="s-viscotherm">🛢️ Viscotherm - Fuel Oil Viscosity Controller</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: Explain the working of a viscotherm and why viscosity control is essential for HFO.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Purpose:</strong> Maintains HFO (Heavy Fuel Oil) at the correct viscosity (typically <span class="n-val">10–17 cSt</span>) for proper atomisation and combustion in the main engine. HFO must be heated (usually to <span class="n-val">100–150°C</span>) to reduce its viscosity.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working Principle:</strong> Uses a vibrating rod or torsional vibration element immersed in the fuel flow. The damping effect of the oil on the rod's vibration is directly proportional to the viscosity (higher viscosity = more damping = lower amplitude). The controller compares measured viscosity to the setpoint (e.g. 12 cSt). If viscosity is too high (cold), it opens the steam heating valve. If too low (hot), it reduces heating. This ensures continuous correct viscosity regardless of fuel grade changes.</div></div>

  <!-- GAP: Gas Detection, UTI, Cargo Gauging -->
  <div class="n-h1" id="s-gas-cargo">🛢️ Gas Detection, UTI Devices &amp; Cargo Gauging</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Tanker and gas carrier candidates face intensive panel screening regarding inert gas limits, NDIR absorption physics, and intrinsically safe loop parameters.</strong></div></div>

  <div class="n-h2">Explosimeter Pellistors vs Tankscope Infrared Absorbers</div>
  <ul class="n-list">
    <li><strong>The Explosimeter (%LEL Range):</strong> Engineered exclusively to clear fresh-air enclosed spaces before entry by verifying gas is below explosive boundaries (0–100% LEL). Sensor employs a <strong>pellistor catalytic bead design</strong> configured as a Wheatstone bridge. An active platinum coil coated in a palladium catalyst burns a minute gas sample. This combustion raises coil heat and resistance to unbalance the bridge. <strong>Critical Safety Constraint:</strong> Because pellistors rely on actual catalytic combustion, <strong>they require a minimum oxygen level to function</strong>. If introduced into an oxygen-depleted or inert environment (below 10% O₂), combustion fails completely - the meter registers a false <span class="n-val">0% LEL</span> even in a gas-rich environment.</li>
    <li><strong>The Tankscope (% Volume Range):</strong> Engineered to analyze the raw gas-dense atmosphere inside cargo tanks and inert gas lines. Hydrocarbon tracking via <strong>Non-Dispersive Infrared (NDIR) absorption sensor</strong>. IR beam passes through sample cell to a filtered detector. Flammable cargo molecules (Propane C₃H₈, Butane C₄H₁₀) naturally absorb specific IR spectrum waves at the <span class="n-val">3.4 μm</span> carbon-hydrogen bond-stretching band. Higher concentration reduces IR energy reaching the detector. Because NDIR requires no combustion, <strong>it functions perfectly in zero-oxygen or inert gas environments</strong>.</li>
  </ul>

  <div class="n-h2">Portable UTI Dipping Tapes &amp; Intrinsically Safe (Ex ia) Parameters</div>
  <p class="n-p">A portable Ullage Temperature Interface (UTI) tape executes closed, vapor-tight tank level measurements. Three parameters from a single deployment:</p>
  <ul class="n-list">
    <li><strong>Ullage:</strong> Empty space volume between tank top reference plug and liquid surface (Ullage = Total Height − Liquid Level). Read via graduated stainless steel tape.</li>
    <li><strong>Temperature:</strong> Captured via internal thermistor probe to adjust volume calculations to normalised baseline of 15°C for custody transfer billing.</li>
    <li><strong>Interface:</strong> Pinpoints exact boundary layer between oil cargo and free water settling at tank bottom. Probe houses an ultrasonic or high-sensitivity <strong>conductivity sensor</strong> that instantly changes output when transitioning from non-conductive hydrocarbons to conductive water.</li>
  </ul>
  <p class="n-p"><strong>Ex ia Zone 0 Power Limitations:</strong> Because the probe drops into explosive Category I gas zones, it must be intrinsically safe. Circuit power restricted to a <span class="n-val">6–9 V DC</span> battery supply designed with inline zener barriers. Open-circuit voltage must remain <strong>below 25 V</strong> and short-circuit current choked <strong>below 25 mA</strong>. This guarantees any electronic fault lacks thermal energy to produce an ignition spark.</p>

  <div class="n-h2">Remote Cargo Level Gauging</div>
  <table class="n-table">
    <tr><th>Gauging Type</th><th>Operating Physics</th><th>Accuracy</th><th>Application</th></tr>
    <tr><td><strong>Servo Float</strong></td><td>Motorized servo drives a small displacer float to track the fluid layer. Encoder counts tape payout.</td><td class="ok">±1 mm</td><td>Main cargo tanks, custody transfer</td></tr>
    <tr><td><strong>FMCW Radar</strong></td><td>Frequency Modulated Continuous Wave microwave beam directed downward. Time-of-flight checks target distance.</td><td class="ok">±1–3 mm (non-contact)</td><td>Crude oil, chemical, LPG tanks</td></tr>
    <tr><td><strong>Hydrostatic DP</strong></td><td>Measures differential pressure between tank bottom and upper vapour seal (DP = ρ·g·h).</td><td>±10–20 mm</td><td>Fuel oil settling, ballast, brine</td></tr>
    <tr><td><strong>Capacitance Probe</strong></td><td>Vertical rod arrays evaluate shifts in dielectric capacitance caused by rising fluid volumes.</td><td>±5–10 mm</td><td>Engine bilges, overflow alarms, sludge tanks</td></tr>
  </table>

<div class="n-h1" id="s-echo">🌊 Echo Sounder</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> Transmits vertical ultrasonic pulses, measures time for echo to return from seabed. Depth = speed of sound × time / 2. Speed of sound in seawater ≈ <span class="n-val">1500 m/s</span>.</div></div>

  <div class="n-formula">Depth = (1500 × t) / 2 = 750 × t<div class="label">t = two-way travel time in seconds · Depth in metres</div></div>

  <table class="n-table">
    <tr><th>Frequency</th><th>Use</th><th>Property</th></tr>
    <tr><td><span class="n-val">30–50 kHz</span></td><td class="ok">Shallow water</td><td>High resolution, good for harbour/coastal</td></tr>
    <tr><td><span class="n-val">3–12 kHz</span></td><td class="ok">Deep water</td><td>Better penetration, longer range</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Piezoelectric Effect (transducer principle):</strong> PZT (lead zirconate titanate) crystal. <strong>Reverse effect:</strong> electrical voltage deforms crystal → generates sound pulse (transmit mode). <strong>Direct effect:</strong> incoming sound pressure deforms crystal → generates electrical voltage (receive mode). Same crystal used for both transmitting and receiving.</div></div>

  <div class="n-h1" id="s-gyro">🧭 Gyrocompass</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> Indicates True North using two gyroscope properties: (1) <strong>Rigidity in space</strong> - spinning gyro maintains its axis direction in inertial space. (2) <strong>Precession</strong> - a force applied to a spinning gyro causes movement 90° ahead in direction of rotation. Earth's gravity and rotation cause the gyro's spin axis to slowly precess and settle on the True North meridian.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Key values:</strong> Takes <span class="n-val">2–6 hours</span> to settle on True North after startup. Small errors from ship speed, latitude, and course - must be checked against GPS/celestial bearings. ETO maintenance: UPS power supply check (loss requires 2-6h re-settling), oil level, slip rings, brushes, motor temperature, repeater alignment.</div></div>

  
  <!-- GAP: ECDIS + WIDAS -->
  <div class="n-h1" id="s-ecdis-widas">🗺️ ECDIS, WIDAS Networks &amp; Telemotor Failures</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS mandated electronic chart formatting and bulk carrier water ingress sensor diagnostics.</strong></div></div>

  <div class="n-h2">ECDIS Vector ENCs vs Raster RNCs</div>
  <ul class="n-list">
    <li><strong>ENC (Electronic Navigational Chart):</strong> Official approved vector chart standard conforming to <strong>IHO S-57 guidelines</strong>. Chart data saved as smart discrete objects paired with specific attributes (exact depth lines, light characteristics, hazard tags). Allows the ECDIS processor to execute intelligent background queries, adapt scales cleanly, and dynamically fire automatic anti-grounding alarms when the safety contour is breached.</li>
    <li><strong>RNC (Raster Navigational Chart):</strong> Simple digital scan of a traditional paper nautical chart. Zero underlying database intelligence - cannot query chart elements or generate automated anti-grounding alarms. Carrying RNCs requires maintaining a full paper chart backup portfolio onboard. ENCs require weekly security updates via VSAT or USB.</li>
  </ul>

  <div class="n-h2">Water Ingress Detection and Alarm Systems (WIDAS - SOLAS XII/12)</div>
  <p class="n-p">All bulk carriers ≥150 m in length must be fitted with a WIDAS to prevent structural failures from hidden cargo space flooding. Sensors installed inside each cargo hold, ballast tank (fore/aft peaks), cofferdams, and bilge well.</p>
  <ul class="n-list">
    <li><strong>Mechanical Float Switches:</strong> Float inside a slotted steel shroud rises with rising fluid levels to actuate a magnetic microswitch. No sensor-side excitation power required, but floats can jam if clogged with grain dust or cargo scale residue.</li>
    <li><strong>Conductivity Probes:</strong> Two exposed stainless steel electrodes separated by an air gap. When rising water floods the housing and bridges the gap, electrical current flows to activate the circuit. Resists fouling - ideal for sludgy bilge wells.</li>
  </ul>
  <p class="n-p">Master bridge panel monitors loop integrity. Three operational states: <strong>Normal (Green)</strong>, <strong>Alarm (Red - water ingress)</strong>, <strong>Fault (Yellow - broken wire/open circuit)</strong>. Data interfaces with VDR. ETOs must perform quarterly field tests by manually lifting hold floats or shorting conductivity probes to verify bridge panel relay response.</p>

  <div class="n-h2">Emergency Steering Telemotor Failure Protocol</div>
  <ol class="n-steps">
    <li>Alert bridge immediately - OOW reduces main engine load and signals navigational warning per COLREG.</li>
    <li>Dispatch engineer to aft steering gear flat to initiate emergency local manual control.</li>
    <li><strong>Isolate the Telemotor Link:</strong> Turn local changeover switch from Remote/Bridge to <strong>Local Manual Control</strong>. Completely disconnects defective bridge telemotor signal loop from steering pumps.</li>
    <li>Establish communication between bridge and steering gear room via sound-powered telephone or handheld VHF.</li>
    <li>Bridge watch officer calls out rudder degrees verbally; steering room operator manually actuates pump solenoids or local hydraulic levers. If failure due to low telemotor oil, top up closed-loop circuit reservoir using specified hydraulic fluid grade.</li>
  </ol>

<div class="n-h1" id="s-vdr">🔴 VDR - Voyage Data Recorder</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS V/20:</strong> Mandatory on passenger ships <span class="n-val">&gt;150 GT</span> and cargo ships <span class="n-val">&gt;3,000 GT</span> (built after <span class="n-val">July 2002</span>). Know all 12 mandatory inputs.</div></div>

  <div class="n-h2">12 Mandatory Inputs (IEC 61996)</div>
  <ol class="n-steps">
    <li>Date and time (UTC)</li>
    <li>GPS position (latitude/longitude)</li>
    <li>Speed through water (STW)</li>
    <li>Speed over ground (SOG)</li>
    <li>Gyro heading</li>
    <li>Bridge audio / microphones</li>
    <li>VHF communications (radio audio)</li>
    <li>RADAR display (video capture)</li>
    <li>AIS data</li>
    <li>ECDIS display (chart + own ship position)</li>
    <li>Rudder order and response</li>
    <li>Engine telegraph order and response</li>
  </ol>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>VDR Capsule:</strong> Orange, float-free crash-proof capsule. Designed to withstand <span class="n-val">260°C</span> for <span class="n-val">10 hours</span> and water pressure at <span class="n-val">6,000 m</span> depth. Annual performance test required. Replaced every <span class="n-val">5 years</span> or after any incident.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> PT100 = 100Ω at 0°C, Pt metal, 0.385Ω/°C. Thermocouple = Seebeck effect, high temp (exhaust). Thermistor = NTC, motor windings. DP cell = tank level, 4–20mA, independent of tank pressure. VDR = 12 inputs in orange float-free capsule, SOLAS V/20. Gyro takes 2–6h to settle.</div></div>

  
  <!-- GAP: 2026 SOLAS Amendments -->
  <div class="n-h1" id="s-solas-2026">🚢 2026 SOLAS Amendments - Electronic Inclinometers &amp; Container Loss Protocols</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>STATUTORY FORCE EFFECTIVE 1 JANUARY 2026. Non-compliance compromises the vessel's Safety Construction Certificate and triggers PSC detention.</strong></div></div>

  <div class="n-h2">Mandatory Electronic Inclinometers (SOLAS V Amendments)</div>
  <p class="n-p">To mitigate severe container loss accidents caused by parametric rolling, <strong>all containerships and bulk carriers ≥3,000 GT must carry an approved electronic inclinometer system</strong>. Parametric rolling occurs when the wave encounter frequency aligns directly with the hull's natural roll period, triggering sudden extreme rolling angles that rip apart deck lashing gear.</p>
  <ul class="n-list">
    <li><strong>Conning Tower Display:</strong> Real-time illuminated roll angle display visible to OOW at all times. Must be wired to UPS for data survival during switchboard disturbances.</li>
    <li><strong>Precision Resolution:</strong> Must measure roll metrics with <span class="n-val">±0.5° or better</span>.</li>
    <li><strong>VDR Integration:</strong> Inclinometer's digital data stream interfaces directly with VDR for unalterable post-incident history. Programmable alarms trigger on bridge if hull exceeds safe stability roll thresholds. ETO calibrates the sensor at even-keel in a calm harbour.</li>
  </ul>

  <div class="n-h2">Mandatory Lost Container Reporting &amp; ETO VDR Freeze Mandate</div>
  <p class="n-p">Also entering into force <strong>1 January 2026</strong> is a strict SOLAS V and MARPOL Protocol I amendment regarding container cargo lost overboard. The vessel must immediately transmit a detailed hazard report to the nearest coastal state MRCC: exact number of lost containers, last known GPS coordinates, timestamp, and whether IMDG dangerous goods are involved.</p>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Critical ETO Emergency Action:</strong> In a container loss or heavy rolling incident, the ETO must immediately <strong>activate the VDR data preservation save function</strong>. Standard VDR capsules run a continuous loop that can overwrite memory after 48 hours. Activating the preservation lock freezes the last 48 hours of radar sweeps, bridge audio, and inclinometer rolling data in a secure partition. Failure to lock the data represents a major statutory violation.</div></div>

<div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 14</div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Thermocouple vs RTD - difference, working, applications. What does PT100 mean? (All surveyors)</strong><br><strong>Ideal Answer:</strong> Thermocouple: Seebeck Effect - two dissimilar metals (Type K: Chromel-Alumel) at measuring junction generate EMF proportional to temp. Self-powered, range up to <span class="n-val">1350°C</span>. Used for exhaust gas/boiler combustion. RTD: pure metal resistance increases linearly with temperature (PTC). PT100 = Platinum sensing element with <span class="n-val">100 Ω</span> at <span class="n-val">0°C</span>, increases <span class="n-val">0.385 Ω/°C</span>. Needs excitation current, 3-wire connection. Range <span class="n-val">-200 to +850°C</span>. Used for bearing/cooling water temperatures - more accurate.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>How do you calibrate a pressure transmitter / DP cell? (Kamath, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> Isolate and bleed process pressure. Apply zero pressure → adjust ZERO pot to exactly <span class="n-val">4.000 mA</span>. Apply full-scale pressure → adjust SPAN pot to exactly <span class="n-val">20.000 mA</span>. Verify linearity at <span class="n-val">25%, 50%, 75%</span>. Document date, engineer, next calibration due.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Echo sounder working principle and piezoelectric effect? (Vishwanathan, Sanjib)</strong><br><strong>Ideal Answer:</strong> Measures depth via vertical ultrasonic pulses. Depth = <span class="n-val">1500 × t / 2 = 750 × t</span>. Transducer uses piezoelectric effect: reverse effect (voltage → deformation → sound pulse for transmit); direct effect (returned echo pressure → deformation → electrical voltage for receive). Same PZT crystal does both. Frequencies: <span class="n-val">30–50 kHz</span> shallow water, <span class="n-val">3–12 kHz</span> deep water.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is VDR, its 12 inputs, and SOLAS requirement? (All surveyors)</strong><br><strong>Ideal Answer:</strong> VDR records bridge data for accident investigation. SOLAS V/20: mandatory cargo ships <span class="n-val">&gt;3000 GT</span>. 12 inputs: date/time UTC, GPS position, STW, SOG, gyro heading, bridge audio, VHF audio, RADAR, AIS, ECDIS, rudder order/response, engine telegraph order/response. Stored in orange float-free capsule - withstands <span class="n-val">260°C/10 hours</span> and <span class="n-val">6000 m</span> depth. Annual performance test.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Gyrocompass - working principle and ETO maintenance? (Kamath, Deswal)</strong><br><strong>Ideal Answer:</strong> Indicates True North using gyroscopic rigidity in space and precession. Earth's gravity and rotation cause the spin axis to precess toward the True North meridian. ETO maintenance: ensure uninterrupted UPS power (loss requires <span class="n-val">2–6 hours</span> to resettle - never cut gyro power without notifying bridge), check oil levels, clean slip rings, verify motor temperature, confirm alignment of all ship's repeaters.</div></div>

  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 14</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points</th></tr>
    <tr><td>RTD vs Thermocouple</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>PT100 = <span class="n-val">100Ω at 0°C</span>, <span class="n-val">0.385Ω/°C</span>, bearings | TC = Seebeck, up to <span class="n-val">1350°C</span>, exhaust</td></tr>
    <tr><td>DP cell calibration</td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Vishwanathan</td><td>Zero → <span class="n-val">4mA</span> | Full scale → <span class="n-val">20mA</span> | Check <span class="n-val">25/50/75%</span></td></tr>
    <tr><td>VDR - 12 inputs + SOLAS</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>SOLAS V/20, &gt;<span class="n-val">3000 GT</span> | 12 inputs | Orange capsule <span class="n-val">260°C/6000m</span></td></tr>
    <tr><td>Echo sounder</td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Sanjib</td><td>Depth = <span class="n-val">750 × t</span> | Piezoelectric effect | <span class="n-val">30-50 kHz</span> shallow</td></tr>
    <tr><td>Gyrocompass</td><td class="hl">⭐⭐⭐⭐ Kamath, Deswal</td><td>Rigidity + precession → True North | <span class="n-val">2–6 hrs</span> settle | Never cut power</td></tr>
    <tr><td>Thermistor</td><td class="hl">⭐⭐⭐⭐ Vishwanathan</td><td>NTC semiconductor | <span class="n-val">3-5%/°C</span> decrease | Motor winding protection</td></tr>
  </table>

    </div>
</div>
</div>
`);

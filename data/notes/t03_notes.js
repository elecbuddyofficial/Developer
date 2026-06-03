window.loadNotes("T03", `<div class="view" id="view-notes-t03">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T03')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 3 - Motors &amp; Starters</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Induction Motors</span>
      <span class="tag tag-purple">Starters & VFD</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s3-induction-principle')">Principle</button>
    <button class="anc-btn" onclick="jumpTo('s3-startcurrent-qa')">Starting Current</button>
    <button class="anc-btn" onclick="jumpTo('s3-stardelta-extra')">Star-Delta</button>
    <button class="anc-btn" onclick="jumpTo('s3-softvfd-detail')">Soft Starter vs VFD</button>
    <button class="anc-btn" onclick="jumpTo('s3-wardleonard')">Speed Control</button>
    <button class="anc-btn" onclick="jumpTo('s3-frame-detail')">Alignment & Grease</button>
    <button class="anc-btn" onclick="jumpTo('s3-dc-motors')">DC Motors</button>
    <button class="anc-btn" onclick="jumpTo('s3-protect')">Protection</button>
    <button class="anc-btn" onclick="jumpTo('s3-sync-detail')">Sync Motors</button>

<div class="n-h1" id="s3-startcurrent-qa">📈 Starting Current - Surveyor Q&A & Rotor Impedance</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Rotor Impedance at Standstill:</strong> Z_rotor = √(R_rotor² + (s·X_rotor)²). At s=1 (standstill): Z_rotor = √(R² + X²). For squirrel cage rotor, R_rotor is very small (thick copper/aluminium bars, short-circuited) - so impedance is low, allowing very large rotor current.</div></div>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Deswal, Kamath, Nair, Vishwanathan): Why does an induction motor draw high current at starting?</strong><br><strong>Ideal Answer:</strong> At standstill (slip=1), RMF cuts rotor conductors at full supply frequency (<span class="n-val">50Hz</span>). Rotor EMF is maximum. Squirrel cage rotor has very low resistance (thick conductors, short-circuited). Large EMF + low impedance = very large rotor current. This demands proportionally large stator current to maintain ampere-turn balance - like a short-circuited transformer. Starting current = 5–8× rated current for DOL. Causes: busbar voltage dip, cable heating, possible generator trip.</div></div>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Which method gives the best starting torque and current control?</strong><br><strong>Ideal Answer:</strong> VFD gives best overall starting. Starts at low frequency (5–<span class="n-val">10 Hz</span>) and proportionally low voltage. Motor flux and impedance matched at all speeds - near-rated torque available even at very low speed with minimum current. Starting current as low as 100–150% of rated (vs 500–800% for DOL). Also provides smooth continuous speed control. Slip ring motor with rotor resistance also gives excellent starting torque with reduced current - historically used for cranes and heavy loads.</div></div>

<div class="n-h1" id="s3-stardelta-extra">🔄 Star-Delta - Suitability & Detailed Q&A</div>
<div class="n-h2">Star-Delta - When NOT Suitable</div>
<ul class="n-list">
  <li>Motor must START the load in star (with only 1/3 torque) - if load requires high starting torque, star-delta NOT suitable.</li>
  <li>Pump starting against open discharge valve: may need higher starting torque - consider soft starter instead.</li>
  <li>Compressor: start unloaded (unloader valve open) - star-delta acceptable.</li>
  <li>Crane hoist: high starting torque needed - slip ring or VFD preferred.</li>
  <li>Motor must be designed for star-delta - must have 6 terminals accessible (not all motors do).</li>
</ul>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: What is the starting current and torque in star-delta compared to DOL?</strong><br><strong>Ideal Answer:</strong> Star-delta starting current = 1/3 of DOL. If DOL gives <span class="n-val">600A</span>, star-delta gives <span class="n-val">200A</span>. Starting torque = 1/3 of DOL torque. If DOL torque is 300 Nm, star-delta gives 100 Nm. The motor must accelerate the load to near full speed within the star period using only 1/3 torque. If load torque exceeds 1/3 of stall torque during start, motor will not accelerate - star-delta unsuitable.</div></div>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Why is dead time important in star-delta transition?</strong><br><strong>Ideal Answer:</strong> When star contactor opens, motor is still spinning and generating back-EMF from residual flux. This back-EMF may be out of phase with supply at the moment of transition. If delta contactor closes immediately, the phase difference causes a very large transient current - potentially worse than DOL - causing mechanical shock to coupling, overcurrent relay trip, or winding damage. Dead time of 20–50ms allows motor EMF to decay before delta connection.</div></div>

<div class="n-h1" id="s3-softvfd-detail">💻 Soft Starter & VFD - Full Working Detail</div>
<div class="n-h2">Soft Starter - Advantages & Limitations</div>
<div class="n-grid">
  <div class="n-card"><div class="card-title">✅ Advantages</div><div class="card-desc">Smooth starting - no torque jerk. Reduced starting current (programmable limit 150–350% rated). Soft stop - prevents water hammer in pumps. Smaller & cheaper than VFD. No harmonics during running (thyristors bypassed by contactor after start).</div></div>
  <div class="n-card"><div class="card-title">❌ Limitations</div><div class="card-desc">Controls voltage only during start/stop - NO speed control during running. Reduced starting torque at low voltage. Not suitable for high-starting-torque loads. Cannot be used for variable speed applications.</div></div>
</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Bypass:</strong> After motor reaches full speed, bypass contactor closes - thyristors bypassed - motor runs at full voltage directly (no losses). Soft starter is NOT used during running.</div></div>
<div class="n-h2">VFD - Advantages & Limitations</div>
<div class="n-grid">
  <div class="n-card"><div class="card-title">✅ Advantages</div><div class="card-desc">Full speed control 0 to above rated. Starting current 100–150% rated - minimum generator stress. Full torque at very low speed (vector control). Energy saving: centrifugal load power ∝ speed³ - 20% speed reduction = 50% power saving. Built-in soft start/stop and motor protection.</div></div>
  <div class="n-card"><div class="card-title">❌ Limitations</div><div class="card-desc">Generates harmonics (5th, 7th, 11th) - needs filter. More expensive & complex (IGBT failures). Motor cable must be screened (EMI from PWM). Motor must be VFD-rated - insulation class F minimum, dV/dt rated.</div></div>
</div>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Where are VFDs used on ships?</strong><br><strong>Ideal Answer:</strong> Ballast water pumps (variable flow), HVAC fans (variable air volume), cargo pumps on tankers (discharge rate), bow thruster, seawater cooling pumps, crane hoists, reefer compressors. Energy saving: for centrifugal loads, power reduces with cube of speed - 80% speed = 51% power - significant fuel saving. VFD also eliminates water hammer.</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Soft starter = "voltage ramp, then bypass" (start only). VFD = "AC→DC→AC, V/f constant" (full life speed control). Soft starter saves your coupling; VFD saves your fuel.</div></div>

<div class="n-h1" id="s3-rewind">🔧 Motor Checks After Rewinding</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Context:</strong> Asked by multiple surveyors. After a motor is rewound (shore workshop or onboard), several checks confirm correct, safe operation before returning to service.</div></div>
<ol class="n-steps">
  <li><strong>Insulation Resistance (IR) test:</strong> Megger between each phase and earth, and between phases. Minimum acceptable per IEEE 43 rule of thumb = 1 MΩ per kV + 1 MΩ; healthy new winding ≫ 100 MΩ.</li>
  <li><strong>Winding resistance balance:</strong> Measure each phase with a low-resistance ohmmeter (micro-ohmmeter). All three phases must be balanced within ±5% - unbalance indicates shorted turns or poor connections.</li>
  <li><strong>Polarity / phase sequence:</strong> Confirm winding connections correct so direction of rotation matches the driven machine.</li>
  <li><strong>Surge / impulse test:</strong> Detects turn-to-turn insulation weakness not found by simple IR (high-voltage surge comparison).</li>
  <li><strong>High Voltage (Hi-Pot) test:</strong> Applied AC test voltage = 2 × rated voltage + <span class="n-val">1000 V</span> for 1 minute (IEC 60034-1) to prove insulation strength.</li>
  <li><strong>No-load running test:</strong> Run uncoupled - check current balance on three phases, vibration, bearing temperature and noise.</li>
  <li><strong>Bearing & grease check:</strong> Confirm correct grease type/quantity and free rotation by hand before energising.</li>
  <li><strong>Nameplate/data verification:</strong> Confirm rewound coil data (turns, wire gauge) matches original - wrong turns alter speed/torque and overheating.</li>
</ol>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: What checks would you do on a motor after rewinding?</strong><br><strong>Ideal Answer:</strong> IR test (phase-earth and phase-phase, min 1 MΩ/kV+1), balanced winding resistance across all three phases (within ±5%), polarity/phase sequence for correct rotation, surge test for turn-to-turn faults, Hi-Pot test at 2×Vrated+<span class="n-val">1000V</span> for 1 minute, then no-load run checking current balance, vibration, bearing temperature, and confirm grease and free rotation before coupling.</div></div>

<div class="n-h1" id="s3-arm-react">🧲 Armature Reaction in DC Motors</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Definition:</strong> Armature reaction is the distortion and weakening of the main field flux caused by the magnetic field set up by current flowing in the armature conductors. Asked by Sanjib & Kamath.</div></div>
<ul class="n-list">
  <li><strong>Cross-magnetising effect:</strong> Armature MMF acts at right angles to main field - distorts the resultant flux, shifting the Magnetic Neutral Axis (MNA) away from the Geometric Neutral Axis (GNA). In a motor the MNA shifts <strong>against</strong> the direction of rotation.</li>
  <li><strong>Demagnetising effect:</strong> Component of armature MMF directly opposing the main field - weakens overall flux, reducing torque and altering speed.</li>
</ul>
<div class="n-h2">Bad Effects</div>
<ul class="n-list">
  <li>Shift of neutral axis → brushes no longer at zero-EMF point → <strong>sparking at brushes</strong> and commutation problems.</li>
  <li>Reduced main flux → reduced torque at the same current.</li>
  <li>Localised flux density rise → possible flashover around commutator.</li>
</ul>
<div class="n-h2">Remedies</div>
<table class="n-table">
  <tr><th>Method</th><th>How it Works</th></tr>
  <tr><td class="hl">Interpoles (Commutating poles)</td><td>Small poles between main poles, connected in series with armature - produce flux that neutralises armature reaction at the brush zone and aids commutation. Most common remedy.</td></tr>
  <tr><td class="hl">Compensating windings</td><td>Conductors embedded in main pole faces, carrying armature current in opposite sense - neutralise cross-magnetising effect under the pole face. Used in large/heavy-duty machines.</td></tr>
  <tr><td>Brush shift</td><td>Shifting brushes to new MNA - only works at one load; rarely used now.</td></tr>
</table>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Sanjib, Kamath): What is armature reaction and how is it overcome?</strong><br><strong>Ideal Answer:</strong> Armature reaction is the effect of armature current's magnetic field distorting and weakening the main field flux. It has a cross-magnetising effect (shifts the magnetic neutral axis, causing brush sparking) and a demagnetising effect (reduces flux and torque). It is overcome by interpoles (commutating poles) connected in series with the armature to neutralise it at the brush zone, and by compensating windings in the pole faces for large machines.</div></div>

<div class="n-h1" id="s3-braking">🛑 Braking Methods - Regenerative & DC Injection</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Context:</strong> Asked by Sanjib & Vishwanathan. Several electrical braking methods replace or supplement mechanical brakes for motors.</div></div>
<table class="n-table">
  <tr><th>Method</th><th>Principle</th><th>Use</th></tr>
  <tr><td class="hl">Regenerative Braking</td><td>Motor driven above synchronous speed by the load (e.g. lowering crane) - acts as generator, feeds energy back to supply. Slip becomes negative. Smooth, energy-saving.</td><td>Cranes, lifts, hybrid/electric propulsion descents</td></tr>
  <tr><td class="hl">DC Injection (Dynamic) Braking</td><td>AC supply removed, DC injected into stator winding → produces a stationary magnetic field. Rotor cutting this stationary field induces currents → braking torque dissipated as heat in rotor. Brings motor rapidly to standstill.</td><td>Fast stop of fans, pumps, conveyors</td></tr>
  <tr><td>Plugging (Reverse current)</td><td>Two supply phases interchanged → RMF reverses → strong reverse torque brakes motor quickly. Very abrupt; high current.</td><td>Quick reversal of small machines</td></tr>
  <tr><td>Rheostatic Braking</td><td>Motor disconnected, rotor/armature energy dissipated in external resistors.</td><td>DC machines, slip-ring motors</td></tr>
</table>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Sanjib): What is DC injection braking?</strong><br><strong>Ideal Answer:</strong> The AC supply to the stator is disconnected and a DC voltage is injected into the stator windings. This produces a stationary (non-rotating) magnetic field. The still-rotating rotor cuts this stationary field, inducing currents that create a braking torque, dissipated as heat in the rotor. It brings the motor rapidly and smoothly to standstill without mechanical wear - common on fans and pumps that need a quick stop.</div></div>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Vishwanathan): What is regenerative braking?</strong><br><strong>Ideal Answer:</strong> When the load drives the motor above synchronous speed (e.g. lowering a heavy load on a crane), slip becomes negative and the machine acts as an induction generator, feeding energy back into the supply. This provides controlled braking while recovering energy - efficient and smooth, used in cranes, lifts and electric propulsion.</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Braking:</strong> Regenerative = "give energy back" (over-speed). DC injection = "freeze the field" (stationary DC field). Plugging = "throw it in reverse". Rheostatic = "burn it in resistors".</div></div>

<div class="n-h1" id="s3-wardleonard">⚙️ Ward-Leonard Speed Control System</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Context:</strong> Asked by Kamath & Sanjib. A classic method of smooth, wide-range speed control of a DC motor by varying its armature supply voltage.</div></div>
<div class="n-h2">Arrangement (M-G Set)</div>
<ul class="n-list">
  <li><strong>AC driving motor</strong> (induction/synchronous) runs at constant speed driving a <strong>DC generator</strong>.</li>
  <li>The DC generator output feeds the armature of the main <strong>DC motor</strong> (the driven machine).</li>
  <li>A small <strong>DC exciter</strong> supplies field current to both generator and motor.</li>
</ul>
<div class="n-h2">Working</div>
<ol class="n-steps">
  <li>Varying the <strong>generator field rheostat</strong> changes the generator output voltage from zero to maximum, smoothly varying the DC motor armature voltage → speed control below base speed.</li>
  <li><strong>Reversing the generator field</strong> reverses output polarity → reverses motor direction smoothly without switching the armature.</li>
  <li>Weakening the <strong>motor field</strong> gives speed above base speed (field-weakening region).</li>
  <li>When the load over-speeds the motor, it returns energy to the generator (acts as generator) → <strong>regenerative braking</strong> is inherent.</li>
</ol>
<div class="n-grid">
  <div class="n-card"><div class="card-title">✅ Advantages</div><div class="card-desc">Very smooth, stepless speed control over a wide range in both directions. Excellent for high-inertia loads. Built-in regenerative braking. No starting resistances needed.</div></div>
  <div class="n-card"><div class="card-title">❌ Disadvantages</div><div class="card-desc">Three machines required - bulky, heavy, expensive. Lower overall efficiency (multiple conversions). High maintenance (commutators, brushes). Largely replaced by modern thyristor/VFD drives.</div></div>
</div>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Kamath, Sanjib): Explain the Ward-Leonard system.</strong><br><strong>Ideal Answer:</strong> A motor-generator set where a constant-speed AC motor drives a DC generator, whose variable output feeds the armature of the main DC motor. By varying the generator field rheostat, the armature voltage - and hence motor speed - is controlled smoothly from zero to maximum. Reversing the generator field reverses direction. It gives stepless wide-range speed control in both directions with inherent regenerative braking, but needs three machines, so it is bulky and now mostly replaced by thyristor and VFD drives.</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Ward-Leonard:</strong> "Vary the generator's field, and you steer the motor's speed and direction." Constant AC in → variable DC out → smooth motor control with free regenerative braking.</div></div>


<div class="n-h1" id="s3-induction-principle">⚙️ Induction Motor - Complete Working Principle</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Most asked topic - every surveyor without exception.</strong> Based on Faraday's law of electromagnetic induction and the interaction between magnetic fields.</div></div>
<div class="n-h2">Construction</div>
<div class="n-grid">
  <div class="n-card"><div class="card-title">STATOR (Stationary)</div><div class="card-desc">Three-phase winding distributed in stator slots 120° apart. Produces the rotating magnetic field.</div></div>
  <div class="n-card"><div class="card-title">ROTOR (Rotating)</div><div class="card-desc"><strong>Squirrel cage:</strong> aluminium/copper bars short-circuited by end rings. <strong>Slip ring (wound):</strong> 3-phase winding with external resistance via slip rings.</div></div>
</div>
<div class="n-h2">Working Sequence</div>
<ol class="n-steps">
  <li>Three-phase AC supply applied to stator winding.</li>
  <li>Three-phase currents create a <strong>Rotating Magnetic Field (RMF)</strong> in the air gap.</li>
  <li>RMF rotates at <strong>synchronous speed</strong>: Ns = 120f/P (RPM).</li>
  <li>RMF cuts across stationary rotor conductors → EMF induced (Faraday's law).</li>
  <li>Rotor conductors short-circuited → induced EMF drives current through rotor bars.</li>
  <li>Rotor current in magnetic field → force on rotor (<strong>F = BIL</strong>) → rotor rotates.</li>
  <li>Rotor accelerates but <strong>NEVER reaches synchronous speed</strong> - if it did, no relative motion, no EMF, no current, no force. Always rotates slightly slower than RMF.</li>
</ol>
<div class="n-formula">Ns = 120 × f / P<div class="label">Synchronous speed in RPM - f = frequency, P = number of poles</div></div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why called "Induction" Motor:</strong> Rotor current is INDUCED by the rotating magnetic field - no direct electrical connection to rotor (squirrel cage). Rotor energised entirely by electromagnetic induction - like a transformer secondary.</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "RMF chases rotor, rotor chases RMF - but never catches it - that gap is slip." More load = more slip = more rotor current = more torque.</div></div>

<div class="n-h1" id="s3-syncspeed">📐 Synchronous Speed - Worked Examples</div>
<table class="n-table">
  <tr><th>Poles</th><th><span class="n-val">50 Hz</span> Ns</th><th>Actual (full load)</th></tr>
  <tr><td>2-pole</td><td class="hl">3000 RPM</td><td>~2950 RPM</td></tr>
  <tr><td>4-pole</td><td class="hl">1500 RPM</td><td>~1450 RPM</td></tr>
  <tr><td>6-pole</td><td class="hl">1000 RPM</td><td>~960 RPM</td></tr>
  <tr><td>8-pole</td><td class="hl">750 RPM</td><td>~720 RPM</td></tr>
</table>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong><span class="n-val">60 Hz</span> vessels:</strong> multiply all above values by 60/50 = 1.2×.</div></div>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: What is the synchronous speed of a 6-pole motor at <span class="n-val">50Hz</span>?</strong><br><strong>Ideal Answer:</strong> Ns = 120 × 50 / 6 = 1000 RPM. Actual rotor speed at full load ≈ 960–980 RPM. Slip = (1000−960)/1000 = 4%. For 4-pole: Ns = 1500 RPM, actual ~1450. For 2-pole: Ns = 3000 RPM, actual ~2950.</div></div>

<div class="n-h1" id="s3-slip-detail">🔁 Slip - Full Detail</div>
<div class="n-formula">Slip = (Ns − N) / Ns × 100%<div class="label">Ns = synchronous speed, N = actual rotor speed</div></div>
<div class="n-grid">
  <div class="n-card"><div class="card-title">No Load Slip</div><div class="card-val">0.1–0.5%</div><div class="card-desc">Motor nearly at synchronous speed.</div></div>
  <div class="n-card"><div class="card-title">Full Load - Cage</div><div class="card-val">3–8%</div><div class="card-desc">Standard squirrel cage motor.</div></div>
  <div class="n-card"><div class="card-title">Full Load - Slip Ring</div><div class="card-val">10–15%</div><div class="card-desc">Wound rotor with resistance.</div></div>
  <div class="n-card"><div class="card-title">Standstill</div><div class="card-val">s = 1</div><div class="card-desc">Rotor frequency = supply freq. At Ns, s = 0.</div></div>
</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Slip frequency</strong> = frequency of rotor currents = s × f (supply frequency × slip).</div></div>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Deswal, Nair): What is slip and why is it important?</strong><br><strong>Ideal Answer:</strong> Slip = (Ns − N)/Ns × 100%. Slip must always exist - without it, no relative motion between RMF and rotor, no induced EMF, no rotor current, no torque, motor stops. No-load slip 0.1–0.5%, full-load 3–8% for cage. More mechanical load = more slip needed = more rotor current = more torque. Slip determines rotor frequency (s×f) and rotor impedance.</div></div>

<div class="n-h1" id="s3-startmethods-table">📊 Starting Current Reduction - All Methods Compared</div>
<table class="n-table">
  <tr><th>Method</th><th>How It Reduces Current</th><th>Starting Torque</th><th>Suitable For</th></tr>
  <tr><td class="hl">DOL</td><td>No reduction - full voltage</td><td>Maximum (100%)</td><td>Small motors &lt;<span class="n-val">5kW</span></td></tr>
  <tr><td class="hl">Star-Delta</td><td>Voltage ÷√3 in star - current to 1/3 DOL</td><td>Reduced to 1/3</td><td>Unloaded start - fans, pumps</td></tr>
  <tr><td class="hl">Auto-Transformer</td><td>Tapped transformer - 65% or 80% tap</td><td>∝ voltage² - adjustable</td><td>Medium controlled start</td></tr>
  <tr><td class="hl">Soft Starter</td><td>Thyristors ramp voltage from zero</td><td>Adjustable - better than star-delta</td><td>Frequent starts, all sizes</td></tr>
  <tr><td class="hl">VFD</td><td>Low frequency + low voltage together</td><td>Excellent - full torque low speed</td><td>Best method - all sizes + speed control</td></tr>
  <tr><td class="hl">Slip Ring (Rotor R)</td><td>External rotor resistance raises impedance</td><td>Full torque at start possible</td><td>High inertia - cranes, hoists, mills</td></tr>
</table>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Effects of high starting current:</strong> (1) Busbar voltage dip affecting other equipment. (2) Cable overheating - I²R losses ∝ current². (3) Generator overloading - protection may trip. (4) Mechanical stress on shaft and coupling.</div></div>

<div class="n-h1" id="s3-sd-contactors">🔌 Star-Delta - Three Contactors & Interlock</div>
<div class="n-grid-3">
  <div class="n-card"><div class="card-title">KM - Main</div><div class="card-desc">Connects motor to supply - energised throughout.</div></div>
  <div class="n-card"><div class="card-title">KY - Star</div><div class="card-desc">Shorts winding ends in star - energised at start only.</div></div>
  <div class="n-card"><div class="card-title">KD - Delta</div><div class="card-desc">Connects motor in delta - energised after transition.</div></div>
</div>
<div class="n-h2">Sequence</div>
<ol class="n-steps">
  <li>Press START. KM closes (supply). KY closes (star). Motor starts in star at <span class="n-val">254V</span> per winding (440/√3).</li>
  <li>Timer energised - after 5–15 seconds: KY OPENS (star disconnected).</li>
  <li>Brief 20–50ms dead time - star current decays.</li>
  <li>KD CLOSES - motor now in delta at full <span class="n-val">440V</span>.</li>
</ol>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Interlock - Critical:</strong> KY and KD are ELECTRICALLY AND MECHANICALLY interlocked - both cannot close simultaneously. If both close together = <strong>three-phase short circuit</strong> - catastrophic damage.</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Star = √3 less volts → 1/3 current → 1/3 torque. Power reduction = (1/√3)² = 1/3 of DOL.</div></div>

<div class="n-h1" id="s3-rmf-extra">🌀 RMF & Single-Phase Note</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why three-phase produces RMF:</strong> Three currents 120° apart in time and 120° spatial windings produce a resultant flux of constant magnitude that rotates around the air gap at synchronous speed. A single-phase supply produces only a pulsating (stationary) field - no inherent starting torque - hence single-phase motors need a start winding/capacitor.</div></div>

    <button class="anc-btn" onclick="jumpTo('s-surveyor-qa')">Quick Revision</button>
  <button class="anc-btn" onclick="jumpTo('s-surveyor-qa')">Surveyor Q&amp;A</button>
  </div>

  <div class="body"><strong>Coming Soon:</strong> The written preparation module is currently under development. It will feature past papers, detailed numerical solutions, and structured answers for this topic.</div></div>

  <!-- ═══ SURVEYOR Q&A ═══ -->
  
  <div class="n-h1" id="s3-vfd-cii">📊 VFDs &amp; SEEMP Part III / CII Compliance (2024)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>VFDs now critical for CII compliance:</strong> SEEMP Part III mandates CII tracking for ships ≥<span class="n-val">5,000 GT</span>. VFDs on cooling pumps, HVAC fans, and seawater pumps reduce fuel consumption by running loads at lower speeds when full capacity not needed. When integrated with ESS for load leveling: PMS runs generators at optimal SFC curve → directly improves annual A–E CII rating. Results submitted to IMO Fuel Oil Consumption Database (IMO DCS).</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>How do VFDs contribute to SEEMP Part III compliance? (New 2024 question)</strong><br><strong>Ideal Answer:</strong> SEEMP Part III requires granular CII tracking. VFDs optimize centrifugal loads (pumps, fans) by running at lower speeds - reduces fuel burn. Combined with ESS load leveling: PMS runs generators at peak SFC efficiency, not low-load inefficient operation. Lower fuel = lower CO2 = better CII A–E rating. CII results submitted to IMO DCS annually. D×3 or E×1 = mandatory Corrective Action Plan.</div></div>


  <!-- ═══ T03 GAPS ADDED FROM DOCX VERIFICATION ═══ -->

  <div class="n-h1" id="s3-frame-detail">📏 Motor Frame Numbers &amp; Precision Alignment</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal, Vishwanathan ask frame numbers and alignment procedure.</strong> Frame number encodes physical dimensions - getting this wrong means ordering a motor that physically cannot fit.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>IEC Frame Number = Shaft Centre Height in mm:</strong> Frame 132 = 132 mm from bottom of mounting feet to shaft centreline. Frame 180 = 180 mm shaft height. This defines: footprint size, mounting bolt hole positions, shaft bore dimension, and coupling hub size. A frame mismatch = wrong bolt pattern, wrong shaft height = structural misalignment, vibration, bearing failure.</div></div>
  <div class="n-h2">DTI Precision Alignment Procedure</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Dial Test Indicator (DTI) coupling alignment:</strong><br>
  <strong>Parallel offset (rim readings):</strong> Mount DTI on one coupling half, rotate shaft 360°, read dial at 12/3/6/9 o'clock positions on the other coupling rim. The difference between top (12) and bottom (6) readings = parallel vertical offset. Left (9) vs right (3) = horizontal offset.<br>
  <strong>Angular misalignment (face readings):</strong> Mount DTI on coupling face (not rim), rotate 360°, read axial movement. Difference top vs bottom = angular misalignment in vertical plane.<br>
  <strong>Tolerance limit:</strong> &lt;<span class="n-val">0.05 mm</span> for both parallel and angular misalignment. Exceeding this causes vibration, bearing wear, seal failure, coupling fatigue.</div></div>
  <div class="n-h2">Bearing Greasing - Correct Procedure &amp; Formula</div>
  <div class="n-formula">G = 0.005 × D × B<div class="label">G = grease quantity (grams) · D = bearing outer diameter (mm) · B = bearing width (mm)</div></div>
  <ol class="n-steps">
    <li>Clean grease nipple with a clean rag before attaching grease gun</li>
    <li>Calculate correct quantity using G = 0.005 × D × B formula</li>
    <li>Open the relief plug (or remove it) - allows old grease to be expelled</li>
    <li>Inject calculated quantity slowly - do not overgrease (excess grease causes churning heat)</li>
    <li>Run motor for 30 minutes at operating temperature with relief plug open - old grease expelled</li>
    <li>Close relief plug. Log: date, bearing number, quantity injected, next service due.</li>
  </ol>

  <div class="n-h1" id="s3-dc-motors">🧲 DC Motor Subtypes - All Three</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Sanjib ask DC motor types and their characteristics.</strong> Series motor has a critical runaway risk at no load.</div></div>
  <table class="n-table">
    <tr><th>Type</th><th>Field Winding</th><th>Speed-Load Characteristic</th><th>Ship Applications</th><th>Critical Risk</th></tr>
    <tr><td><strong>Series</strong></td><td>In series with armature - heavy gauge wire, few turns</td><td class="bad">Speed varies inversely with load - very fast at no-load</td><td>Hoists, cranes, winches (high starting torque)</td><td class="bad">RUNAWAY at no-load - must never be unloaded at speed. Speed can reach destructive levels.</td></tr>
    <tr><td><strong>Shunt</strong></td><td>In parallel with armature - fine gauge wire, many turns</td><td class="ok">Approximately constant speed regardless of load</td><td>Pumps, fans, conveyors (constant speed needed)</td><td> - </td></tr>
    <tr><td><strong>Compound</strong></td><td>Both series and shunt windings</td><td class="ok">Compromise - good starting torque + relatively stable speed</td><td>Windlasses, capstans</td><td> - </td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>DC Motor Speed Control:</strong><br>
  <strong>Below base speed:</strong> Armature voltage control - reduce voltage to armature while maintaining full field current. Torque capability maintained. Used: Ward-Leonard system, thyristor drive.<br>
  <strong>Above base speed:</strong> Field weakening - reduce field current. Motor accelerates beyond rated speed but with reduced torque. Suitable for light-load applications only.</div></div>

  <div class="n-h1" id="s3-sync-detail">🔄 Synchronous Motor - Damper Windings &amp; Hunting</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why synchronous motors cannot self-start:</strong> A synchronous motor's rotor must be rotating at synchronous speed before the rotating magnetic field can lock onto it. At standstill, the RMF passes the rotor poles too quickly (60 Hz alternation) - the rotor cannot follow. A torque pulse in one direction is immediately followed by an equal reverse pulse - net torque = zero.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Damper winding (cage winding) solution:</strong> Short-circuited copper bars embedded in slots in the rotor pole faces - same principle as a squirrel cage. At starting: rotor stationary → damper winding acts as a squirrel cage → motor starts asynchronously (as induction motor). As speed reaches near-synchronous: DC excitation applied to field → rotor pulled into synchronism. Damper also suppresses hunting during synchronised operation.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Hunting:</strong> Oscillation of the rotor about the synchronous position when load fluctuates suddenly. The rotor tries to restore the equilibrium power angle but overshoots - oscillates. Damper winding damps these oscillations (acts as a brake on relative motion). <strong>Pole slipping:</strong> If the applied torque exceeds the maximum pull-out torque - the rotor loses synchronism completely. Motor must be stopped and re-started. Cause: sudden large overload, severe voltage dip.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Synchronous condenser:</strong> An overexcited synchronous motor running with NO mechanical load on its shaft. Overexcitation causes it to draw leading current - supplies leading kVAR to the busbar. Used for power factor correction where continuously variable leading kVAR is needed. More flexible than fixed capacitor banks.</div></div>

  <div class="n-h1" id="s3-motor-physics">⚡ Advanced Motor Physics (2026 Gap Additions)</div>
  <div class="n-h2">Motor Crawling - Cause &amp; Remedy</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Motor crawling:</strong> A squirrel cage induction motor locks into a stable but very low running speed of approximately <span class="n-val">1/7 of synchronous speed (Ns)</span> instead of accelerating to normal speed. Caused by the <strong>7th harmonic component</strong> in the air-gap flux (due to the non-sinusoidal distributed winding). The 7th harmonic produces a synchronous torque at 1/7 Ns that can be large enough to hold the motor at this low speed. <strong>Remedy:</strong> Use a skewed rotor (rotor bars angled relative to shaft axis) - this distributes the harmonic torque and prevents stable crawling torque dips. Alternative: use chorded (short-pitched) stator windings to reduce harmonic content.</div></div>
  <div class="n-h2">Eddy Current Losses - Cause &amp; Prevention</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Eddy currents:</strong> Circulating currents induced in the iron core by the changing magnetic flux. These flow in closed loops perpendicular to the flux and generate heat (I²R losses). <strong>Prevention:</strong> Assemble the core from thin insulated laminations of <span class="n-val">0.3–0.5 mm</span> thickness made from high-resistivity silicon steel. Each lamination is insulated from the next by a thin oxide coating or varnish. Eddy currents are forced to circulate within each thin lamination - path length and resistance increase dramatically → eddy current losses greatly reduced.</div></div>
  <div class="n-h2">Double-Cage Rotor</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Double-cage rotor design:</strong> Two concentric squirrel cages on the same rotor. <strong>Outer cage:</strong> High resistance, low reactance (near the air gap). <strong>Inner cage:</strong> Low resistance, high reactance (deep in the rotor iron). At starting (high slip, high frequency rotor currents): skin effect concentrates current in outer high-resistance cage → high starting torque with limited starting current. At running speed (low slip, low frequency): current shifts to inner low-resistance cage → high efficiency, low copper losses. Used on ships for: windlass, mooring winch, anchor windlass, bow thruster motors - all need high starting torque.</div></div>

  <div class="n-h1" id="s3-motor-procurement">📦 Motor Procurement - 14-Point Checklist</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: "what specifications do you give when ordering a replacement motor?"</strong> Know all 14 items.</div></div>
  <ol class="n-steps">
    <li><strong>Power rating:</strong> kW (active output power)</li>
    <li><strong>Voltage:</strong> 440V / 6.6 kV / other</li>
    <li><strong>Frequency:</strong> 50 Hz or 60 Hz</li>
    <li><strong>Speed:</strong> RPM (or synchronous speed + number of poles)</li>
    <li><strong>Type:</strong> AC induction / synchronous / DC</li>
    <li><strong>Phases:</strong> 3-phase</li>
    <li><strong>Frame size:</strong> IEC frame number (physical dimensions, shaft height)</li>
    <li><strong>Insulation class:</strong> Class F (155°C) or Class H (180°C)</li>
    <li><strong>IP rating:</strong> IP44 (ER), IP55 (exposed deck), IP56 (wash-down areas)</li>
    <li><strong>Mounting:</strong> B3 (foot), B5 (flange), B35 (foot + flange)</li>
    <li><strong>Duty cycle:</strong> S1 continuous / S2 short-time / S3 intermittent</li>
    <li><strong>Efficiency class:</strong> IE2 or IE3</li>
    <li><strong>Ambient temperature rating:</strong> 40°C standard</li>
    <li><strong>Ex certification:</strong> EEx d (flameproof) or EEx e (increased safety) if hazardous area</li>
  </ol>
  <div class="n-h2">IP Rating by Ship Location</div>
  <table class="n-table">
    <tr><th>Location</th><th>Min IP Rating</th><th>Exposure</th></tr>
    <tr><td>General engine room</td><td class="hl"><span class="n-val">IP44</span></td><td>Objects &gt;1 mm, general water splashes</td></tr>
    <tr><td>Exposed cargo decks</td><td class="hl"><span class="n-val">IP55</span></td><td>Dust-tight, low-pressure water jets from any direction</td></tr>
    <tr><td>Wash-down / car decks / RoRo</td><td class="hl"><span class="n-val">IP56</span></td><td>High-impact heavy water jets from any direction</td></tr>
    <tr><td>Intermittent bilge / submersion</td><td class="hl"><span class="n-val">IP68</span></td><td>Continuous underwater submersion</td></tr>
  </table>

  <div class="n-h1" id="s3-hrc-bearing">🔧 HRC Fuses &amp; ISO Bearing Codes</div>
  <div class="n-h2">HRC Fuse - Internal Architecture &amp; Motor Selection</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>HRC (High Rupturing Capacity) fuse internal construction:</strong><br>
  • <strong>Fuse element:</strong> Silver or silver-copper alloy (low resistance, high melting point) - designed to vaporise cleanly at fault current<br>
  • <strong>Arc quenching filler:</strong> Silica sand (quartz granules) packed around the element - when element vaporises, the arc energy is absorbed and quenched by the sand<br>
  • <strong>Breaking capacity:</strong> <span class="n-val">80–100 kA</span> - safely interrupts very high fault currents without explosive failure<br>
  <strong>Motor circuit fuse selection rule:</strong> HRC fuse must be rated at <span class="n-val">1.5–2.5 × motor Full Load Current (FLC)</span>. Must pass the starting surge (6–8 × FLC lasting 5–15 seconds) without blowing, but must clear a fault current quickly.</div></div>
  <div class="n-h2">ISO Bearing Code - Decoder</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Example: Bearing 6205-2RS</strong><br>
  • <strong>6</strong> = Deep-groove ball bearing (type designation)<br>
  • <strong>2</strong> = Bearing series (light series - 2 = light, 3 = medium, 4 = heavy)<br>
  • <strong>05</strong> = Bore size code → Bore diameter = <span class="n-val">05 × 5 = 25 mm</span> (for codes 04 and above, multiply by 5)<br>
  • <strong>2RS</strong> = Double-sided rubber seal (both sides sealed, pre-greased, maintenance-free)<br>
  Other suffix examples: Z = metal shield, ZZ = double metal shield, C3 = extra clearance (for hot applications)</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Frame number = shaft height in mm. Alignment tolerance &lt;0.05 mm. Series motor = runaway at no-load (hoist use). Crawling = 1/7 Ns from 7th harmonic. Laminations 0.3-0.5 mm = eddy current prevention. Double-cage = outer high-R starts it, inner low-R runs it. HRC = silver element + silica sand, 80-100 kA. Bearing code: first digit = type, last 2 digits × 5 = bore in mm.</div></div>

<div class="n-h1" id="s-surveyor-qa">🗣️ Surveyor Q&amp;A (Topic 3: Electric Motors)</div>
  <div class="n-crit"><div class="icon">❓</div><div class="body">
    <p><strong>Q (Surveyor Sanjib): Why does a 3-phase induction motor draw 6-8 times full load current on starting?</strong></p>
    <p>Sanjib focuses on fundamental concepts. Answer: At standstill, the motor acts like a transformer with a short-circuited secondary (the squirrel cage rotor). The slip is 1 (100%). The rotating magnetic field cuts the stationary rotor bars at maximum speed, inducing maximum EMF and current in the rotor. This massive rotor current requires a proportionally massive balancing current from the stator. As the rotor accelerates, slip decreases, back-EMF builds up, and the current drops to normal running levels.</p>

    <p><strong>Q (Surveyor Nair): Explain single-phasing of a motor. What happens if it occurs while running vs. at standstill?</strong></p>
    <p>If one phase is lost while RUNNING: The motor will continue to run but will draw excessive current (approx 1.73 times normal) on the remaining two phases to maintain the mechanical load. It will overheat and the overload relay should trip. If lost at STANDSTILL: The motor will not start. It will just hum and draw locked-rotor current because a rotating magnetic field cannot be established with only two phases. It will burn out quickly if not tripped.</p>

    <p><strong>Q (Surveyor Kamath): How do you change the direction of rotation of a 3-phase induction motor, and why does this work?</strong></p>
    <p>You swap any two of the three supply phases (e.g., swap L1 and L2). Why it works: The direction of the rotating magnetic field depends on the phase sequence (R-Y-B vs Y-R-B). Swapping two phases reverses the sequence, which reverses the direction of the rotating magnetic field, and the rotor follows it.</p>
  </div></div>

</div>


  <div class="n-h1" id="s3-protect">🛡️ Motor Protection</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: list all motor protections with values.</strong></div></div>
  <table class="n-table">
    <tr><th>Protection</th><th>Setting</th><th>Purpose</th></tr>
    <tr><td>Overload relay (thermal)</td><td class="hl"><span class="n-val">105–125%</span> FLA, time-delay</td><td>Sustained overload winding protection</td></tr>
    <tr><td>Winding thermistor (NTC)</td><td class="hl">Embedded in stator - trips at insulation class limit</td><td>Direct winding temperature protection</td></tr>
    <tr><td>Short circuit (fuse/MCB)</td><td class="hl">Instantaneous at fault current</td><td>Cable and motor fault protection</td></tr>
    <tr><td>Earth fault relay</td><td class="hl">Current to earth &gt; set value</td><td>Insulation breakdown protection</td></tr>
    <tr><td>Undervoltage relay</td><td class="hl">~<span class="n-val">85%</span> rated voltage</td><td>Prevents high current on low voltage</td></tr>
    <tr><td>Phase failure relay</td><td class="hl">Instantaneous on phase loss</td><td>Single-phasing = <span class="n-val">1.73×</span> current in remaining phases</td></tr>
    <tr><td>Bearing temperature (PT100)</td><td class="hl">Alarm <span class="n-val">80°C</span> / Trip <span class="n-val">95°C</span></td><td>Bearing failure early warning</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Motor protections - Overload (thermal) | Thermistor (winding temp) | Short circuit | Earth fault | Undervoltage | Phase failure (√3 × current). Never run without all protections.</div></div>

</div>
</div>`);

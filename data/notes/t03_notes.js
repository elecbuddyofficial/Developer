window.loadNotes("T03", `<div class="view" id="view-notes-t03">
<div class="note-doc">
  <div style="margin-bottom:16px"><button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button></div>
  <div class="note-title">
    <h1>Topic 3 — Motors &amp; Starters</h1>
    <div class="sub">ETO MMD Oral Examination · Function 5 · Class 2 · Mumbai &amp; Noida</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Induction Motors</span>
      <span class="tag tag-purple">Starters & VFD</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s3-principle')">Principle</button>
    <button class="anc-btn" onclick="jumpTo('s3-startcurrent')">Starting Current</button>
    <button class="anc-btn" onclick="jumpTo('s3-stardelta')">Star-Delta</button>
    <button class="anc-btn" onclick="jumpTo('s3-softvfd')">Soft Starter vs VFD</button>
    <button class="anc-btn" onclick="jumpTo('s3-speed')">Speed Control</button>
    <button class="anc-btn" onclick="jumpTo('s3-frame')">Alignment & Grease</button>
    <button class="anc-btn" onclick="jumpTo('s3-dc')">DC Motors</button>
    <button class="anc-btn" onclick="jumpTo('s3-protect')">Protection</button>
    <button class="anc-btn" onclick="jumpTo('s3-sync')">Sync Motors</button>

<div class="n-h1" id="s3-startcurrent-qa">📈 Starting Current — Surveyor Q&A & Rotor Impedance</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Rotor Impedance at Standstill:</strong> Z_rotor = √(R_rotor² + (s·X_rotor)²). At s=1 (standstill): Z_rotor = √(R² + X²). For squirrel cage rotor, R_rotor is very small (thick copper/aluminium bars, short-circuited) — so impedance is low, allowing very large rotor current.</div></div>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Deswal, Kamath, Nair, Vishwanathan): Why does an induction motor draw high current at starting?</strong><br><strong>Ideal Answer:</strong> At standstill (slip=1), RMF cuts rotor conductors at full supply frequency (<span class="n-val">50Hz</span>). Rotor EMF is maximum. Squirrel cage rotor has very low resistance (thick conductors, short-circuited). Large EMF + low impedance = very large rotor current. This demands proportionally large stator current to maintain ampere-turn balance — like a short-circuited transformer. Starting current = 5–8× rated current for DOL. Causes: busbar voltage dip, cable heating, possible generator trip.</div></div>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Which method gives the best starting torque and current control?</strong><br><strong>Ideal Answer:</strong> VFD gives best overall starting. Starts at low frequency (5–<span class="n-val">10 Hz</span>) and proportionally low voltage. Motor flux and impedance matched at all speeds — near-rated torque available even at very low speed with minimum current. Starting current as low as 100–150% of rated (vs 500–800% for DOL). Also provides smooth continuous speed control. Slip ring motor with rotor resistance also gives excellent starting torque with reduced current — historically used for cranes and heavy loads.</div></div>

<div class="n-h1" id="s3-stardelta-extra">🔄 Star-Delta — Suitability & Detailed Q&A</div>
<div class="n-h2">Star-Delta — When NOT Suitable</div>
<ul class="n-list">
  <li>Motor must START the load in star (with only 1/3 torque) — if load requires high starting torque, star-delta NOT suitable.</li>
  <li>Pump starting against open discharge valve: may need higher starting torque — consider soft starter instead.</li>
  <li>Compressor: start unloaded (unloader valve open) — star-delta acceptable.</li>
  <li>Crane hoist: high starting torque needed — slip ring or VFD preferred.</li>
  <li>Motor must be designed for star-delta — must have 6 terminals accessible (not all motors do).</li>
</ul>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: What is the starting current and torque in star-delta compared to DOL?</strong><br><strong>Ideal Answer:</strong> Star-delta starting current = 1/3 of DOL. If DOL gives <span class="n-val">600A</span>, star-delta gives <span class="n-val">200A</span>. Starting torque = 1/3 of DOL torque. If DOL torque is 300 Nm, star-delta gives 100 Nm. The motor must accelerate the load to near full speed within the star period using only 1/3 torque. If load torque exceeds 1/3 of stall torque during start, motor will not accelerate — star-delta unsuitable.</div></div>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Why is dead time important in star-delta transition?</strong><br><strong>Ideal Answer:</strong> When star contactor opens, motor is still spinning and generating back-EMF from residual flux. This back-EMF may be out of phase with supply at the moment of transition. If delta contactor closes immediately, the phase difference causes a very large transient current — potentially worse than DOL — causing mechanical shock to coupling, overcurrent relay trip, or winding damage. Dead time of 20–50ms allows motor EMF to decay before delta connection.</div></div>

<div class="n-h1" id="s3-softvfd-detail">💻 Soft Starter & VFD — Full Working Detail</div>
<div class="n-h2">Soft Starter — Advantages & Limitations</div>
<div class="n-grid">
  <div class="n-card"><div class="card-title">✅ Advantages</div><div class="card-desc">Smooth starting — no torque jerk. Reduced starting current (programmable limit 150–350% rated). Soft stop — prevents water hammer in pumps. Smaller & cheaper than VFD. No harmonics during running (thyristors bypassed by contactor after start).</div></div>
  <div class="n-card"><div class="card-title">❌ Limitations</div><div class="card-desc">Controls voltage only during start/stop — NO speed control during running. Reduced starting torque at low voltage. Not suitable for high-starting-torque loads. Cannot be used for variable speed applications.</div></div>
</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Bypass:</strong> After motor reaches full speed, bypass contactor closes — thyristors bypassed — motor runs at full voltage directly (no losses). Soft starter is NOT used during running.</div></div>
<div class="n-h2">VFD — Advantages & Limitations</div>
<div class="n-grid">
  <div class="n-card"><div class="card-title">✅ Advantages</div><div class="card-desc">Full speed control 0 to above rated. Starting current 100–150% rated — minimum generator stress. Full torque at very low speed (vector control). Energy saving: centrifugal load power ∝ speed³ — 20% speed reduction = 50% power saving. Built-in soft start/stop and motor protection.</div></div>
  <div class="n-card"><div class="card-title">❌ Limitations</div><div class="card-desc">Generates harmonics (5th, 7th, 11th) — needs filter. More expensive & complex (IGBT failures). Motor cable must be screened (EMI from PWM). Motor must be VFD-rated — insulation class F minimum, dV/dt rated.</div></div>
</div>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Where are VFDs used on ships?</strong><br><strong>Ideal Answer:</strong> Ballast water pumps (variable flow), HVAC fans (variable air volume), cargo pumps on tankers (discharge rate), bow thruster, seawater cooling pumps, crane hoists, reefer compressors. Energy saving: for centrifugal loads, power reduces with cube of speed — 80% speed = 51% power — significant fuel saving. VFD also eliminates water hammer.</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Soft starter = "voltage ramp, then bypass" (start only). VFD = "AC→DC→AC, V/f constant" (full life speed control). Soft starter saves your coupling; VFD saves your fuel.</div></div>

<div class="n-h1" id="s3-rewind">🔧 Motor Checks After Rewinding</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Context:</strong> Asked by multiple surveyors. After a motor is rewound (shore workshop or onboard), several checks confirm correct, safe operation before returning to service.</div></div>
<ol class="n-steps">
  <li><strong>Insulation Resistance (IR) test:</strong> Megger between each phase and earth, and between phases. Minimum acceptable per IEEE 43 rule of thumb = 1 MΩ per kV + 1 MΩ; healthy new winding ≫ 100 MΩ.</li>
  <li><strong>Winding resistance balance:</strong> Measure each phase with a low-resistance ohmmeter (micro-ohmmeter). All three phases must be balanced within ±5% — unbalance indicates shorted turns or poor connections.</li>
  <li><strong>Polarity / phase sequence:</strong> Confirm winding connections correct so direction of rotation matches the driven machine.</li>
  <li><strong>Surge / impulse test:</strong> Detects turn-to-turn insulation weakness not found by simple IR (high-voltage surge comparison).</li>
  <li><strong>High Voltage (Hi-Pot) test:</strong> Applied AC test voltage = 2 × rated voltage + <span class="n-val">1000 V</span> for 1 minute (IEC 60034-1) to prove insulation strength.</li>
  <li><strong>No-load running test:</strong> Run uncoupled — check current balance on three phases, vibration, bearing temperature and noise.</li>
  <li><strong>Bearing & grease check:</strong> Confirm correct grease type/quantity and free rotation by hand before energising.</li>
  <li><strong>Nameplate/data verification:</strong> Confirm rewound coil data (turns, wire gauge) matches original — wrong turns alter speed/torque and overheating.</li>
</ol>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: What checks would you do on a motor after rewinding?</strong><br><strong>Ideal Answer:</strong> IR test (phase-earth and phase-phase, min 1 MΩ/kV+1), balanced winding resistance across all three phases (within ±5%), polarity/phase sequence for correct rotation, surge test for turn-to-turn faults, Hi-Pot test at 2×Vrated+<span class="n-val">1000V</span> for 1 minute, then no-load run checking current balance, vibration, bearing temperature, and confirm grease and free rotation before coupling.</div></div>

<div class="n-h1" id="s3-arm-react">🧲 Armature Reaction in DC Motors</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Definition:</strong> Armature reaction is the distortion and weakening of the main field flux caused by the magnetic field set up by current flowing in the armature conductors. Asked by Sanjib & Kamath.</div></div>
<ul class="n-list">
  <li><strong>Cross-magnetising effect:</strong> Armature MMF acts at right angles to main field — distorts the resultant flux, shifting the Magnetic Neutral Axis (MNA) away from the Geometric Neutral Axis (GNA). In a motor the MNA shifts <strong>against</strong> the direction of rotation.</li>
  <li><strong>Demagnetising effect:</strong> Component of armature MMF directly opposing the main field — weakens overall flux, reducing torque and altering speed.</li>
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
  <tr><td class="hl">Interpoles (Commutating poles)</td><td>Small poles between main poles, connected in series with armature — produce flux that neutralises armature reaction at the brush zone and aids commutation. Most common remedy.</td></tr>
  <tr><td class="hl">Compensating windings</td><td>Conductors embedded in main pole faces, carrying armature current in opposite sense — neutralise cross-magnetising effect under the pole face. Used in large/heavy-duty machines.</td></tr>
  <tr><td>Brush shift</td><td>Shifting brushes to new MNA — only works at one load; rarely used now.</td></tr>
</table>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Sanjib, Kamath): What is armature reaction and how is it overcome?</strong><br><strong>Ideal Answer:</strong> Armature reaction is the effect of armature current's magnetic field distorting and weakening the main field flux. It has a cross-magnetising effect (shifts the magnetic neutral axis, causing brush sparking) and a demagnetising effect (reduces flux and torque). It is overcome by interpoles (commutating poles) connected in series with the armature to neutralise it at the brush zone, and by compensating windings in the pole faces for large machines.</div></div>

<div class="n-h1" id="s3-braking">🛑 Braking Methods — Regenerative & DC Injection</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Context:</strong> Asked by Sanjib & Vishwanathan. Several electrical braking methods replace or supplement mechanical brakes for motors.</div></div>
<table class="n-table">
  <tr><th>Method</th><th>Principle</th><th>Use</th></tr>
  <tr><td class="hl">Regenerative Braking</td><td>Motor driven above synchronous speed by the load (e.g. lowering crane) — acts as generator, feeds energy back to supply. Slip becomes negative. Smooth, energy-saving.</td><td>Cranes, lifts, hybrid/electric propulsion descents</td></tr>
  <tr><td class="hl">DC Injection (Dynamic) Braking</td><td>AC supply removed, DC injected into stator winding → produces a stationary magnetic field. Rotor cutting this stationary field induces currents → braking torque dissipated as heat in rotor. Brings motor rapidly to standstill.</td><td>Fast stop of fans, pumps, conveyors</td></tr>
  <tr><td>Plugging (Reverse current)</td><td>Two supply phases interchanged → RMF reverses → strong reverse torque brakes motor quickly. Very abrupt; high current.</td><td>Quick reversal of small machines</td></tr>
  <tr><td>Rheostatic Braking</td><td>Motor disconnected, rotor/armature energy dissipated in external resistors.</td><td>DC machines, slip-ring motors</td></tr>
</table>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Sanjib): What is DC injection braking?</strong><br><strong>Ideal Answer:</strong> The AC supply to the stator is disconnected and a DC voltage is injected into the stator windings. This produces a stationary (non-rotating) magnetic field. The still-rotating rotor cuts this stationary field, inducing currents that create a braking torque, dissipated as heat in the rotor. It brings the motor rapidly and smoothly to standstill without mechanical wear — common on fans and pumps that need a quick stop.</div></div>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Vishwanathan): What is regenerative braking?</strong><br><strong>Ideal Answer:</strong> When the load drives the motor above synchronous speed (e.g. lowering a heavy load on a crane), slip becomes negative and the machine acts as an induction generator, feeding energy back into the supply. This provides controlled braking while recovering energy — efficient and smooth, used in cranes, lifts and electric propulsion.</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid — Braking:</strong> Regenerative = "give energy back" (over-speed). DC injection = "freeze the field" (stationary DC field). Plugging = "throw it in reverse". Rheostatic = "burn it in resistors".</div></div>

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
  <div class="n-card"><div class="card-title">❌ Disadvantages</div><div class="card-desc">Three machines required — bulky, heavy, expensive. Lower overall efficiency (multiple conversions). High maintenance (commutators, brushes). Largely replaced by modern thyristor/VFD drives.</div></div>
</div>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Kamath, Sanjib): Explain the Ward-Leonard system.</strong><br><strong>Ideal Answer:</strong> A motor-generator set where a constant-speed AC motor drives a DC generator, whose variable output feeds the armature of the main DC motor. By varying the generator field rheostat, the armature voltage — and hence motor speed — is controlled smoothly from zero to maximum. Reversing the generator field reverses direction. It gives stepless wide-range speed control in both directions with inherent regenerative braking, but needs three machines, so it is bulky and now mostly replaced by thyristor and VFD drives.</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid — Ward-Leonard:</strong> "Vary the generator's field, and you steer the motor's speed and direction." Constant AC in → variable DC out → smooth motor control with free regenerative braking.</div></div>


<div class="n-h1" id="s3-induction-principle">⚙️ Induction Motor — Complete Working Principle</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Most asked topic — every surveyor without exception.</strong> Based on Faraday's law of electromagnetic induction and the interaction between magnetic fields.</div></div>
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
  <li>Rotor accelerates but <strong>NEVER reaches synchronous speed</strong> — if it did, no relative motion, no EMF, no current, no force. Always rotates slightly slower than RMF.</li>
</ol>
<div class="n-formula">Ns = 120 × f / P<div class="label">Synchronous speed in RPM — f = frequency, P = number of poles</div></div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why called "Induction" Motor:</strong> Rotor current is INDUCED by the rotating magnetic field — no direct electrical connection to rotor (squirrel cage). Rotor energised entirely by electromagnetic induction — like a transformer secondary.</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "RMF chases rotor, rotor chases RMF — but never catches it — that gap is slip." More load = more slip = more rotor current = more torque.</div></div>

<div class="n-h1" id="s3-syncspeed">📐 Synchronous Speed — Worked Examples</div>
<table class="n-table">
  <tr><th>Poles</th><th><span class="n-val">50 Hz</span> Ns</th><th>Actual (full load)</th></tr>
  <tr><td>2-pole</td><td class="hl">3000 RPM</td><td>~2950 RPM</td></tr>
  <tr><td>4-pole</td><td class="hl">1500 RPM</td><td>~1450 RPM</td></tr>
  <tr><td>6-pole</td><td class="hl">1000 RPM</td><td>~960 RPM</td></tr>
  <tr><td>8-pole</td><td class="hl">750 RPM</td><td>~720 RPM</td></tr>
</table>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong><span class="n-val">60 Hz</span> vessels:</strong> multiply all above values by 60/50 = 1.2×.</div></div>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: What is the synchronous speed of a 6-pole motor at <span class="n-val">50Hz</span>?</strong><br><strong>Ideal Answer:</strong> Ns = 120 × 50 / 6 = 1000 RPM. Actual rotor speed at full load ≈ 960–980 RPM. Slip = (1000−960)/1000 = 4%. For 4-pole: Ns = 1500 RPM, actual ~1450. For 2-pole: Ns = 3000 RPM, actual ~2950.</div></div>

<div class="n-h1" id="s3-slip-detail">🔁 Slip — Full Detail</div>
<div class="n-formula">Slip = (Ns − N) / Ns × 100%<div class="label">Ns = synchronous speed, N = actual rotor speed</div></div>
<div class="n-grid">
  <div class="n-card"><div class="card-title">No Load Slip</div><div class="card-val">0.1–0.5%</div><div class="card-desc">Motor nearly at synchronous speed.</div></div>
  <div class="n-card"><div class="card-title">Full Load — Cage</div><div class="card-val">3–8%</div><div class="card-desc">Standard squirrel cage motor.</div></div>
  <div class="n-card"><div class="card-title">Full Load — Slip Ring</div><div class="card-val">10–15%</div><div class="card-desc">Wound rotor with resistance.</div></div>
  <div class="n-card"><div class="card-title">Standstill</div><div class="card-val">s = 1</div><div class="card-desc">Rotor frequency = supply freq. At Ns, s = 0.</div></div>
</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Slip frequency</strong> = frequency of rotor currents = s × f (supply frequency × slip).</div></div>
<div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Deswal, Nair): What is slip and why is it important?</strong><br><strong>Ideal Answer:</strong> Slip = (Ns − N)/Ns × 100%. Slip must always exist — without it, no relative motion between RMF and rotor, no induced EMF, no rotor current, no torque, motor stops. No-load slip 0.1–0.5%, full-load 3–8% for cage. More mechanical load = more slip needed = more rotor current = more torque. Slip determines rotor frequency (s×f) and rotor impedance.</div></div>

<div class="n-h1" id="s3-startmethods-table">📊 Starting Current Reduction — All Methods Compared</div>
<table class="n-table">
  <tr><th>Method</th><th>How It Reduces Current</th><th>Starting Torque</th><th>Suitable For</th></tr>
  <tr><td class="hl">DOL</td><td>No reduction — full voltage</td><td>Maximum (100%)</td><td>Small motors &lt;<span class="n-val">5kW</span></td></tr>
  <tr><td class="hl">Star-Delta</td><td>Voltage ÷√3 in star — current to 1/3 DOL</td><td>Reduced to 1/3</td><td>Unloaded start — fans, pumps</td></tr>
  <tr><td class="hl">Auto-Transformer</td><td>Tapped transformer — 65% or 80% tap</td><td>∝ voltage² — adjustable</td><td>Medium controlled start</td></tr>
  <tr><td class="hl">Soft Starter</td><td>Thyristors ramp voltage from zero</td><td>Adjustable — better than star-delta</td><td>Frequent starts, all sizes</td></tr>
  <tr><td class="hl">VFD</td><td>Low frequency + low voltage together</td><td>Excellent — full torque low speed</td><td>Best method — all sizes + speed control</td></tr>
  <tr><td class="hl">Slip Ring (Rotor R)</td><td>External rotor resistance raises impedance</td><td>Full torque at start possible</td><td>High inertia — cranes, hoists, mills</td></tr>
</table>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Effects of high starting current:</strong> (1) Busbar voltage dip affecting other equipment. (2) Cable overheating — I²R losses ∝ current². (3) Generator overloading — protection may trip. (4) Mechanical stress on shaft and coupling.</div></div>

<div class="n-h1" id="s3-sd-contactors">🔌 Star-Delta — Three Contactors & Interlock</div>
<div class="n-grid-3">
  <div class="n-card"><div class="card-title">KM — Main</div><div class="card-desc">Connects motor to supply — energised throughout.</div></div>
  <div class="n-card"><div class="card-title">KY — Star</div><div class="card-desc">Shorts winding ends in star — energised at start only.</div></div>
  <div class="n-card"><div class="card-title">KD — Delta</div><div class="card-desc">Connects motor in delta — energised after transition.</div></div>
</div>
<div class="n-h2">Sequence</div>
<ol class="n-steps">
  <li>Press START. KM closes (supply). KY closes (star). Motor starts in star at <span class="n-val">254V</span> per winding (440/√3).</li>
  <li>Timer energised — after 5–15 seconds: KY OPENS (star disconnected).</li>
  <li>Brief 20–50ms dead time — star current decays.</li>
  <li>KD CLOSES — motor now in delta at full <span class="n-val">440V</span>.</li>
</ol>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Interlock — Critical:</strong> KY and KD are ELECTRICALLY AND MECHANICALLY interlocked — both cannot close simultaneously. If both close together = <strong>three-phase short circuit</strong> — catastrophic damage.</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Star = √3 less volts → 1/3 current → 1/3 torque. Power reduction = (1/√3)² = 1/3 of DOL.</div></div>

<div class="n-h1" id="s3-rmf-extra">🌀 RMF & Single-Phase Note</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why three-phase produces RMF:</strong> Three currents 120° apart in time and 120° spatial windings produce a resultant flux of constant magnitude that rotates around the air gap at synchronous speed. A single-phase supply produces only a pulsating (stationary) field — no inherent starting torque — hence single-phase motors need a start winding/capacitor.</div></div>

    <button class="anc-btn" onclick="jumpTo('s3-quickrev')">Quick Revision</button>
    <button class="anc-btn" onclick="jumpTo('s3-gap')">Gap Additions</button>
  <button class="anc-btn" onclick="jumpTo('s-written')">Written Section</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyor-qa')">Surveyor Q&amp;A</button>
  </div>

  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s3-principle">⚡ 1. Induction Motor — Working Principle</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> Based on Faraday's law of electromagnetic induction and the interaction between magnetic fields.</div></div>
  <div class="n-grid">
    <div class="n-card"><div class="card-title">Stator (Stationary)</div><div class="card-desc">Three-phase winding distributed in stator slots 120 degrees apart. Creates the Rotating Magnetic Field (RMF).</div></div>
    <div class="n-card"><div class="card-title">Rotor (Rotating)</div><div class="card-desc"><strong>Squirrel cage:</strong> aluminium/copper bars short-circuited by end rings. <strong>Slip ring:</strong> 3-phase winding with external resistance.</div></div>
  </div>
  
  <div class="n-h2">Working Sequence</div>
  <ol class="n-steps">
    <li><strong>Step 1:</strong> Three-phase AC supply applied to stator winding.</li>
    <li><strong>Step 2:</strong> Three-phase currents in stator create a ROTATING MAGNETIC FIELD (RMF) in the air gap.</li>
    <li><strong>Step 3:</strong> RMF rotates at SYNCHRONOUS SPEED: <strong>Ns = 120f/P (RPM)</strong>.</li>
    <li><strong>Step 4:</strong> RMF cuts across stationary rotor conductors → EMF induced in rotor by Faraday's law.</li>
    <li><strong>Step 5:</strong> Rotor conductors are short-circuited → induced EMF drives current through rotor bars.</li>
    <li><strong>Step 6:</strong> Rotor current in magnetic field → force on rotor (F = BIL) → rotor ROTATES.</li>
    <li><strong>Step 7:</strong> Rotor accelerates but NEVER reaches synchronous speed. If it did, there would be no relative motion, no EMF, no current, no force → rotor would slow down. It always rotates SLIGHTLY SLOWER than RMF.</li>
  </ol>

  <div class="n-h2">Slip</div>
  <ul style="margin-bottom:16px;line-height:1.6;color:var(--text)">
    <li><strong>Formula:</strong> Slip = (Ns - N) / Ns x 100%</li>
    <li><strong>At no load:</strong> slip very small (0.1-0.5%) — motor nearly at synchronous speed.</li>
    <li><strong>At full load:</strong> slip 3-8% for squirrel cage, up to 10-15% for slip ring motors.</li>
    <li><strong>Slip frequency:</strong> frequency of rotor currents = s x f.</li>
    <li><strong>At standstill:</strong> slip = 1 (100%) — rotor at supply frequency. At Ns: slip = 0.</li>
  </ul>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid — Induction Motor:</strong> 'RMF chases rotor, rotor chases RMF — but never catches it — that gap is slip.' Ns = 120f/P. SLIP = how far behind rotor is from RMF. More load = more slip = more rotor current = more torque.</div></div>

  <div class="n-h2">Synchronous Speed — Worked Examples</div>
  <table class="n-table">
    <tr><th>Poles</th><th>Sync Speed (<span class="n-val">50Hz</span>)</th><th>Actual Speed (~Full Load)</th></tr>
    <tr><td>2-pole</td><td>3000 RPM</td><td>~2950 RPM</td></tr>
    <tr><td>4-pole</td><td>1500 RPM</td><td>~1450 RPM</td></tr>
    <tr><td>6-pole</td><td>1000 RPM</td><td>~960 RPM</td></tr>
    <tr><td>8-pole</td><td>750 RPM</td><td>~720 RPM</td></tr>
  </table>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">For <span class="n-val">60Hz</span> supply (some US vessels): multiply by 60/50 = 1.2x above values.</div></div>

  <div class="n-h2">Surveyor Q&amp;A</div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>How does an induction motor work?</strong><br>Three-phase AC on stator creates Rotating Magnetic Field (RMF) at synchronous speed Ns = 120f/P. RMF cuts rotor conductors — induces EMF (Faraday) — drives current through short-circuited rotor bars — current in magnetic field produces force (F=BIL) — rotor rotates. Rotor runs slightly slower than RMF (slip) — relative motion always exists — ensuring continuous EMF induction and torque production. Called induction motor because rotor current is induced.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is slip in an induction motor and why is it important?</strong><br>Slip = (Ns - N) / Ns x 100%. Slip must always exist — without slip, no relative motion between RMF and rotor, no induced EMF, no rotor current, no torque — motor stops. No-load slip: 0.1-0.5%. Full-load slip: 3-8%. More mechanical load = more slip needed = more rotor current = more torque. Slip determines rotor frequency (s x f) and rotor impedance.</div></div>

  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s3-startcurrent">📈 2. High Starting Current — Why and How to Reduce</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Why High Starting Current?</strong> At STANDSTILL (starting): Slip = 1 (100%). Rotor is stationary — RMF cuts rotor at full supply frequency (<span class="n-val">50Hz</span>). Large EMF + small rotor impedance = VERY LARGE rotor current. This demands large stator current to maintain magnetic balance (like short-circuited transformer). Starting current = 5 to 8 times rated full-load current (DOL start).</div></div>
  
  <div class="n-h2">Effects of High Starting Current</div>
  <ul style="margin-bottom:16px;line-height:1.6;color:var(--text)">
    <li>Voltage dip on busbar — affects other equipment.</li>
    <li>Cable overheating during start — I²R losses proportional to current squared.</li>
    <li>Generator overloading — may cause generator protection to trip.</li>
    <li>Mechanical stress on motor shaft and coupling from high starting torque.</li>
  </ul>

  <div class="n-h2">Methods to Reduce Starting Current</div>
  <table class="n-table">
    <tr><th>Method</th><th>How it reduces current</th><th>Starting Torque</th><th>Suitable For</th></tr>
    <tr><td>Direct On Line (DOL)</td><td>No reduction — full voltage applied directly</td><td>Maximum (100%)</td><td>Small motors &lt;<span class="n-val">5kW</span>, quick-start needed</td></tr>
    <tr><td>Star-Delta Starter</td><td>Reduces voltage to stator by 1/√3 during star — current reduced to 1/3 of DOL</td><td>Reduced to 1/3 of DOL</td><td>Motors that start unloaded — fans, pumps</td></tr>
    <tr><td>Auto-Transformer Starter</td><td>Tapped transformer reduces voltage — 65% or 80% tap commonly</td><td>Proportional to voltage squared</td><td>Medium motors needing controlled start</td></tr>
    <tr><td>Soft Starter (Electronic)</td><td>Thyristors gradually increase voltage from zero to full</td><td>Adjustable — better than star-delta</td><td>All motor sizes — preferred for frequent starts</td></tr>
    <tr><td>VFD</td><td>Starts at low frequency AND low voltage — reduces flux and current</td><td>Excellent — full torque at low speed possible</td><td>All sizes — best method — gives speed control</td></tr>
    <tr><td>Slip Ring Starter</td><td>External resistance added to rotor circuit — increases rotor impedance</td><td>Can achieve full torque at starting</td><td>High inertia loads — cranes, hoists, mills</td></tr>
  </table>

  <!-- ═══ SECTION 3 ═══ -->
  <div class="n-h1" id="s3-stardelta">🔄 3. Star-Delta Starter — Complete Working</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> Motor starts in STAR connection (reduced voltage) then switched to DELTA (full voltage) after running up to speed.</div></div>
  
  <div class="n-grid">
    <div class="n-card"><div class="card-title">STAR Connection (During Start)</div><div class="card-desc">Voltage across each winding = Line voltage / √3 = <span class="n-val">254V</span>. Starting current reduces to 1/3 of DOL delta current. Starting torque in star = 1/3 of DOL starting torque.</div></div>
    <div class="n-card"><div class="card-title">DELTA Connection (After Running)</div><div class="card-desc">Full line voltage (<span class="n-val">440V</span>) across each winding. Motor runs at normal rated conditions.</div></div>
  </div>

  <div class="n-h2">Three Contactors &amp; Sequence</div>
  <ul style="margin-bottom:16px;line-height:1.6;color:var(--text)">
    <li><strong>KM (MAIN contactor):</strong> connects motor to supply — energised throughout.</li>
    <li><strong>KY (STAR contactor):</strong> shorts motor winding ends together in star — energised at start only.</li>
    <li><strong>KD (DELTA contactor):</strong> connects motor in delta — energised after transition.</li>
  </ul>
  <ol class="n-steps">
    <li><strong>Step 1:</strong> Press START. KM closes. KY closes. Motor starts in star.</li>
    <li><strong>Step 2:</strong> Timer energised — after preset time (typically 5-15 seconds): KY OPENS (star disconnected).</li>
    <li><strong>Step 3:</strong> Brief pause (20-50ms DEAD TIME) — allows star current to decay.</li>
    <li><strong>Step 4:</strong> KD CLOSES — motor now in delta at full voltage.</li>
  </ol>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>DEAD TIME — WHY ESSENTIAL:</strong> When KY opens, motor still has back-EMF (spinning) which may be out of phase with supply. If KD closes immediately, large transient current (worse than DOL) occurs. Dead time allows motor EMF to decay or come back into phase. KY and KD are electrically and mechanically <strong>interlocked</strong> — if both closed together: 3-phase short circuit.</div></div>

  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s3-softvfd">💻 4. Soft Starter vs VFD — Detailed Comparison</div>
  <div class="n-grid">
    <div class="n-card"><div class="card-title">Soft Starter</div><div class="card-desc">Thyristors (back-to-back SCR pairs) gradually increase the voltage applied to motor from near-zero to full voltage over a programmable ramp time. Controls <strong>VOLTAGE only</strong>. Bypassed after starting. No speed control during running.</div></div>
    <div class="n-card"><div class="card-title">VFD (Variable Frequency Drive)</div><div class="card-desc">Converts AC → DC → AC using IGBT PWM. Controls <strong>BOTH voltage AND frequency</strong> simultaneously. Keeps V/f ratio constant. Gives full speed control and energy savings.</div></div>
  </div>

  <div class="n-h2">Comparison</div>
  <table class="n-table">
    <tr><th>Feature</th><th>Soft Starter</th><th>VFD</th></tr>
    <tr><td>Controls</td><td>Voltage only (ramp start/stop)</td><td>Both voltage and frequency</td></tr>
    <tr><td>Speed control during running</td><td class="hl" style="color:var(--red)">NO — fixed speed only</td><td class="hl" style="color:var(--green)">YES — 0 to 150% of rated speed</td></tr>
    <tr><td>Starting current</td><td>150-350% rated</td><td>100-150% rated</td></tr>
    <tr><td>Starting torque</td><td>Reduced</td><td>Full torque at any speed (vector control)</td></tr>
    <tr><td>Energy saving during running</td><td>None (bypassed)</td><td>Significant for variable load (pumps, fans)</td></tr>
    <tr><td>Harmonics generated</td><td>Minimal (bypassed during running)</td><td>Yes — 5th, 7th harmonics — needs filter</td></tr>
    <tr><td>Cost</td><td>Lower</td><td>Higher</td></tr>
  </table>

  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s3-speed">⚙️ 5. Speed Control of Induction Motor</div>
  <div class="n-h2">Speed Control Methods</div>
  <ol class="n-steps">
    <li><strong>Vary Supply Frequency (VFD):</strong> Controls frequency → controls synchronous speed. Best method, smooth, efficient. Maintains constant V/f ratio.</li>
    <li><strong>Vary Number of Poles (Pole Changing):</strong> Stator winding reconnected for different pole numbers. Discrete speed steps (e.g., crane high/low speed).</li>
    <li><strong>Rotor Resistance (Slip Ring Motor):</strong> Add external resistance to rotor. Higher resistance → higher slip → lower speed. Wastes energy as heat.</li>
    <li><strong>Vary Supply Voltage (Thyristor):</strong> Reduce voltage → reduces flux → increases slip. Very inefficient.</li>
    <li><strong>Cascade Control (Scherbius Drive):</strong> Rotor slip power recovered electrically and fed back to supply via inverter. Highly efficient for large motors (FD fans, large pumps).</li>
  </ol>

  <div class="n-h2">Ward-Leonard System (DC Motor Speed Control)</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">AC motor drives a DC generator. DC generator field current is varied to change output voltage. Variable DC voltage is applied to a DC drive motor armature, varying its speed proportionally. Very smooth, reversible, precise speed control (historically used for cranes/steering). Disadvantage: 3 machines needed, high maintenance.</div></div>

  <!-- ═══ SECTION 6 ═══ -->
  <div class="n-h1" id="s3-frame">📏 6. Motor Frame Number, Alignment & Greasing</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Motor Frame Number:</strong> Standardised designation encoding physical dimensions — primarily the <strong>SHAFT CENTRELINE HEIGHT</strong> in mm. Frame 180 = shaft centreline is <span class="n-val">180mm</span> from base. Essential when replacing a motor to ensure perfect coupling alignment without excessive shimming.</div></div>

  <div class="n-h2">Coupling Alignment Procedure</div>
  <ol class="n-steps">
    <li>Ensure machine is secured. Check for soft foot (shim if needed).</li>
    <li>Set motor shaft height (shims).</li>
    <li>ROUGH ALIGNMENT: use straight edge (parallel) and feeler gauge (angular).</li>
    <li>PRECISION ALIGNMENT: use dial indicator (DTI). Mount on one shaft, sweep other. Rim reading = parallel offset. Face reading = angular misalignment. Rotate shafts together, read at 12/3/6/9 o'clock.</li>
    <li>Adjust shims/jack screws until tolerance met (&lt;<span class="n-val">0.05mm</span>).</li>
    <li>Check cold alignment vs hot alignment. Fit bolts, run briefly, recheck after 24 hrs.</li>
  </ol>

  <div class="n-h2">Motor Greasing Procedure</div>
  <ul style="margin-bottom:16px;line-height:1.6;color:var(--text)">
    <li>Identify exact grease type (do NOT mix soap bases).</li>
    <li>Clean grease nipple. Pump slowly (1-3 shots).</li>
    <li>Run motor during greasing if possible to distribute grease.</li>
    <li>Leave relief plug open to allow old grease to escape.</li>
    <li><strong>DO NOT OVER-GREASE:</strong> Excess grease causes churning, overheating, seal damage, and winding contamination.</li>
  </ul>

  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s3-dc">🧲 7. DC Motors, Armature Reaction & Braking</div>
  <div class="n-h2">Armature Reaction</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body">The distortion of the main magnetic field caused by the magnetic field produced by the armature current. Armature MMF acts at 90° to the main field, distorting it. Effects: Magnetic neutral axis shifts, flux weakening, brush sparking. Remedies: Interpoles (most effective), brush shift, compensating windings.</div></div>

  <div class="n-h2">Braking Methods</div>
  <div class="n-grid">
    <div class="n-card"><div class="card-title">Regenerative Braking</div><div class="card-desc">Motor acts as a GENERATOR during braking — converts kinetic energy back to electrical energy. Most efficient method. Used in cranes (lowering) and VFDs.</div></div>
    <div class="n-card"><div class="card-title">DC Injection Braking (for AC motors)</div><div class="card-desc">AC supply disconnected. DC voltage injected into stator. Creates STATIC magnetic field. Rotating rotor cuts static field → induced current → braking force. Smooth stop, no brake wear. Braking force reduces as speed drops.</div></div>
  </div>

  <!-- ═══ SECTION 8 ═══ -->
  <div class="n-h1" id="s3-protect">🛡️ 8. Motor Protection</div>
  <ul style="margin-bottom:16px;line-height:1.6;color:var(--text)">
    <li><strong>Overload Relay (OLR/Thermal):</strong> Bimetallic strip, trips on sustained overload (105-115%), IDMT characteristic.</li>
    <li><strong>Short Circuit Protection (MCB/HRC Fuse):</strong> Fast-acting on very high current (5-10x rated).</li>
    <li><strong>Under-voltage Protection (UVT):</strong> Contactor drops out when voltage falls below 70-80%.</li>
    <li><strong>Single Phasing Protection:</strong> Negative phase sequence relay or 3-phase OLR detects phase loss. Prevents rapid overheating.</li>
    <li><strong>Thermistor Protection:</strong> PTC thermistors embedded in stator winding trip on high temperature. More sensitive than OLR.</li>
    <li><strong>Earth Fault Protection:</strong> Core balance CT (CBCT) detects leakage to earth.</li>
    <li><strong>Anti-condensation Heater:</strong> Operates when motor is STOPPED to prevent moisture condensation.</li>
  </ul>

  <!-- ═══ SECTION 9 ═══ -->
  <div class="n-h1" id="s3-sync">⏳ 9. Synchronous & Special Motors</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Synchronous Motor:</strong> Runs EXACTLY at synchronous speed. Stator has 3-phase AC, rotor has DC field. Needs damper winding to self-start as induction motor. If over-excited, it supplies leading reactive power (acts as a Synchronous Condenser for power factor correction).</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Self-Synchronous Motor (Selsyn/Synchro):</strong> Transmitter-receiver pair that maintain exact angular correspondence. Used for rudder angle indicators, engine telegraphs, gyrocompass repeaters.</div></div>

  <!-- ═══ SECTION 10 ═══ -->
  <div class="n-h1" id="s3-quickrev">📝 10. Quick Revision</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Key Points to Remember</th></tr>
    <tr><td>IM Working</td><td>3-phase stator → RMF → induces rotor EMF → rotor current → F=BIL → rotation. SLIP is always present.</td></tr>
    <tr><td>Star-Delta</td><td>Star gives 1/3 current AND 1/3 torque. Dead time prevents surge. KY and KD NEVER both closed.</td></tr>
    <tr><td>VFD</td><td>V+f both → full speed control → energy saving. Harmonics generated → filter needed.</td></tr>
    <tr><td>Ward-Leonard</td><td>AC motor → DC gen → DC drive motor. Smooth reversible speed. Old tech.</td></tr>
    <tr><td>Frame Number</td><td>IEC = shaft centreline height in mm. Frame 180 = <span class="n-val">180mm</span> from base.</td></tr>
    <tr><td>Greasing</td><td>Correct type. 1-3 shots. Run motor. No over-grease. Relief plug open.</td></tr>
    <tr><td>Single Phasing</td><td>Remaining phases carry ~2x current. Motor stalls or severely overheats. Need negative sequence relay.</td></tr>
  </table>

  <!-- ═══ GAP ADDITIONS ═══ -->
  <div class="n-h1" id="s3-gap">🆕 Gap Additions (v2.1 - v2.3)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Double Cage Induction Motor:</strong> Two rotor cages. Outer cage (high res, low reactance) gives high starting torque. Inner cage (low res, high reactance) gives efficient running. Used for windlass, mooring winch, bow thruster auxiliary.</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Motor Crawling:</strong> Motor runs stably at 1/7th synchronous speed. Caused by 7th harmonic in air-gap flux creating a reluctance torque dip. Prevention: Skew rotor slots, proper slot combination, chording of stator winding.</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Motor Ordering Specs:</strong> Type, kW, Voltage, Hz, Speed/Poles, Phases, Frame size (IEC), IP rating, Insulation class, Mounting (B3/B5), Duty cycle (S1/S2), Efficiency class (IE2/IE3), Ex certification.</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Motor After Rewinding Checks:</strong> 1. IR test (1 MΩ min). 2. Resistance balance (within 2%). 3. Terminal markings. 4. Phase rotation. 5. No-load trial run (current, vibration, temp). 6. Air gap / end-shield alignment.</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>IP Rating & Insulation Class:</strong> ER (IP44), Exposed deck (IP55), Wash-down (IP56), Submerged (IP68). Insulation Class F = 155°C max. Class H = 180°C max.</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Single Phasing:</strong> One phase lost. Running motor draws ~2x current in remaining phases. Cannot restart if stopped. Detection: Ammeter, phase failure relay, negative sequence relay.</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>HRC Fuses (<span class="n-val">440V</span>):</strong> High Rupturing Capacity. Ceramic body, silver element, silica sand. Rated at 1.5-2.5x motor FLC. Current limiting (80-100 kA breaking capacity).</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Bearing Numbers:</strong> e.g., 6205-2RS. 6 = deep groove ball. 05 x 5 = <span class="n-val">25mm</span> bore. 2RS = double rubber seal. ZZ = double metal shield. C3 = high clearance.</div>
  
  <!-- ═══ WRITTEN SECTION ═══ -->
  <div class="n-h1" id="s-written">📝 Written Section</div>
  <div class="n-info"><div class="icon">📝</div><div class="body"><strong>Coming Soon:</strong> The written preparation module is currently under development. It will feature past papers, detailed numerical solutions, and structured answers for this topic.</div></div>

  <!-- ═══ SURVEYOR Q&A ═══ -->
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

</div>
</div>`);

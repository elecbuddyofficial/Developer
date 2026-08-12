window.loadNotes("F09", `<div class="view" id="view-notes-f09">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F09')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F09 - Induction Motors</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 9 of 25 · Difficulty ★★★★☆ · Study Time 60-80 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-construction')">Construction</button>
    <button class="anc-btn" onclick="jumpTo('s-rmf')">Rotating Field</button>
    <button class="anc-btn" onclick="jumpTo('s-synchronous')">Synchronous Speed</button>
    <button class="anc-btn" onclick="jumpTo('s-slip')">Slip</button>
    <button class="anc-btn" onclick="jumpTo('s-rotor')">Rotor Frequency & EMF</button>
    <button class="anc-btn" onclick="jumpTo('s-open')">Open Rotor Circuit</button>
    <button class="anc-btn" onclick="jumpTo('s-torque')">Torque-Slip Curve</button>
    <button class="anc-btn" onclick="jumpTo('s-power')">Power Flow & Air Gap Power</button>
    <button class="anc-btn" onclick="jumpTo('s-loadeffect')">Effect of Load Change</button>
    <button class="anc-btn" onclick="jumpTo('s-crawling')">Crawling & Cogging</button>
    <button class="anc-btn" onclick="jumpTo('s-interview')">Interview Answers</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to describe the construction of squirrel cage and slip ring induction motors, explain how a rotating magnetic field is produced from a three phase supply, derive synchronous speed and slip from first principles, explain why the rotor current and rotor frequency depend on slip, describe the torque-slip curve and identify starting, pull-up and breakdown torque on it, trace the power flow through the machine from stator input to shaft output including where every loss sits, explain what happens to speed, current and power factor as load changes, and explain crawling and cogging. This module deliberately does not cover starting current or starting methods, which are dealt with fully in F11. Cross-reference that module rather than repeating it here.</p>

  <div class="n-h1" id="s-construction">Construction</div>
  <p class="n-p">An induction motor has two main parts, a stationary <strong>stator</strong> and a rotating <strong>rotor</strong>, separated by a small air gap. Unlike a DC machine or a synchronous machine, nothing is electrically connected to the rotor from outside in the most common design, which is exactly why the induction motor is the workhorse of a ship.</p>

  <div class="n-h2">Stator</div>
  <p class="n-p">A laminated silicon steel core, slotted on the inside, carrying a three phase winding. The laminations are thin and insulated from each other to reduce eddy current loss. The three windings are physically displaced by 120 electrical degrees around the core and are connected to the three phase supply, usually in star.</p>

  <div class="n-h2">Rotor, two types</div>
  <table class="n-table">
    <tr><th>Type</th><th>Construction</th><th>Where used</th></tr>
    <tr><td><strong>Squirrel cage</strong></td><td>Copper or aluminium bars laid in slots around a laminated core, all bars short circuited together at each end by a conducting end ring. No external connection at all, nothing to wear, nothing to spark.</td><td>The overwhelming majority of motors on a ship: pumps, fans, compressors, most auxiliaries.</td></tr>
    <tr><td><strong>Slip ring (wound rotor)</strong></td><td>A three phase winding on the rotor, similar to the stator winding, with the three winding ends brought out to three insulated slip rings on the shaft. Carbon brushes bear on the rings to bring the rotor circuit out to external resistors.</td><td>Larger motors needing high starting torque with controlled starting current, some cargo winches and cranes, now largely superseded by VFDs.</td></tr>
  </table>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Why the squirrel cage dominates at sea.</strong> No brushes, no slip rings, nothing exposed to spark or wear, and nothing for salt laden, humid engine room air to attack. It needs almost no maintenance and can be sealed to a high IP rating. A slip ring motor trades that simplicity for controllability at starting, at the cost of brush gear that needs inspection and is a source of arcing and dust. Say this when asked "why is squirrel cage preferred on ships", because a list of construction features alone does not answer the question that is actually being asked.</div></div>

  <div class="n-h1" id="s-rmf">The Rotating Magnetic Field</div>
  <p class="n-p">This is the idea the whole machine is built on, and it is worth being able to explain it rather than just state that it happens.</p>
  <p class="n-p">The three stator windings are set 120 mechanical degrees apart around the core, and they carry three currents that are 120 electrical degrees apart in time, being a balanced three phase supply. At any instant, each winding produces a magnetic field along its own axis, with a strength set by the instantaneous value of its current at that moment.</p>
  <p class="n-p">Add the three fields together as vectors at a series of instants through one cycle. What emerges is not a field that grows and shrinks along fixed axes, it is a field of <strong>constant magnitude</strong> whose direction <strong>rotates</strong> steadily around the stator bore, completing one full revolution every electrical cycle of the supply, for a two pole winding. This is the single most important geometric fact in the whole machine: three fixed windings, fed with currents displaced in time, produce a field that is displaced in space and sweeps round continuously.</p>
  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Say it in one sentence.</strong> Three phase currents, 120 degrees apart in time, flowing in three windings, 120 degrees apart in space, combine to produce a magnetic field of constant magnitude that rotates at a speed fixed by the supply frequency and the number of poles.</div></div>
  <p class="n-p">This rotating field sweeps past the rotor conductors. By Faraday's law a conductor cut by a changing flux has an EMF induced in it, and because the squirrel cage bars are short circuited by the end rings, that EMF drives a current. That current, sitting in the magnetic field, experiences a force by the motor effect, and that force is the torque that turns the rotor. The whole chain, rotating field, induced EMF, induced current, force on a current-carrying conductor in a field, is why the machine is called an <strong>induction</strong> motor: the rotor is never electrically connected to the supply, it works entirely by what is induced into it.</p>

  <div class="n-h1" id="s-synchronous">Synchronous Speed</div>
  <p class="n-p">The speed at which that field rotates is the <strong>synchronous speed</strong>, N<sub>s</sub>, and it depends on only two things, the supply frequency and the number of poles the winding is wound for.</p>
  <div class="n-formula">N<sub>s</sub> = 120f / P (rpm)</div>
  <p class="n-p">where f is the supply frequency in Hz and P is the number of poles, always an even number, since poles come in north-south pairs.</p>
  <p class="n-p">Work it both ways, because both directions of the question are asked.</p>
  <table class="n-table">
    <tr><th>Given</th><th>Find</th><th>Working</th></tr>
    <tr><td>50 Hz, 4 pole</td><td>N<sub>s</sub></td><td>120 × 50 / 4 = <span class="n-val">1500 rpm</span></td></tr>
    <tr><td>60 Hz, 6 pole</td><td>N<sub>s</sub></td><td>120 × 60 / 6 = <span class="n-val">1200 rpm</span></td></tr>
    <tr><td>50 Hz, motor runs near 2900 rpm</td><td>Number of poles</td><td>Nearest synchronous speed above 2900 is 3000 rpm, so P = 120 × 50 / 3000 = <span class="n-val">2 pole</span></td></tr>
  </table>
  <p class="n-p">Note the last row. You are never given the number of poles directly from a measured running speed, because the rotor never actually reaches N<sub>s</sub>. You find the nearest standard synchronous speed above the measured speed and work the pole count from that. This is exactly the idea the next section explains.</p>

  <div class="n-h1" id="s-slip">Slip</div>
  <p class="n-p">If the rotor ever reached synchronous speed, the rotating field would no longer be sweeping past the rotor conductors at all, since both would be turning at the same speed together. No relative motion means no change of flux linking the rotor bars, no induced EMF, no rotor current, and therefore no torque. A rotor with zero torque acting on it, other than friction, would slow down again. So the rotor can physically never reach N<sub>s</sub> under load, and must always run slightly slower than the field. That difference is the <strong>slip</strong>.</p>
  <div class="n-formula">Slip, s = (N<sub>s</sub> − N<sub>r</sub>) / N<sub>s</sub> (often expressed as a percentage)</div>
  <p class="n-p">where N<sub>r</sub> is the actual rotor speed. Typical full load slip on an induction motor is <span class="n-val">2 to 5 percent</span>. At standstill, before the motor starts, N<sub>r</sub> = 0, so s = 1. As the rotor accelerates, s falls steadily toward its small running value.</p>
  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>The one line answer.</strong> Slip is the fractional difference between the speed of the rotating field and the actual rotor speed, and it exists because it is precisely that difference, that relative motion, which induces the rotor current the machine needs to produce torque in the first place. A slip of zero would mean zero torque.</div></div>

  <div class="n-h1" id="s-rotor">Rotor Frequency and Rotor EMF as Functions of Slip</div>
  <p class="n-p">The rate at which the rotating field sweeps past a rotor bar, and therefore the frequency of the EMF induced in that bar, depends on the <strong>relative</strong> speed between field and rotor, not on the supply frequency directly.</p>
  <div class="n-formula">Rotor frequency, f<sub>r</sub> = s × f</div>
  <p class="n-p">At standstill, s = 1, so the rotor frequency equals the supply frequency, 50 Hz. This is the condition where the machine most resembles a transformer with its secondary shorted, which is exactly the picture used in F11 to explain the starting surge. As the rotor speeds up and slip falls to, say, 4 percent, the rotor frequency falls to 0.04 × 50 = <span class="n-val">2 Hz</span>, a very slow beat.</p>
  <p class="n-p">Rotor EMF follows the same law, because it is induced by the same relative motion:</p>
  <div class="n-formula">E<sub>r</sub> = s × E<sub>r0</sub></div>
  <p class="n-p">where E<sub>r0</sub> is the rotor EMF at standstill, the maximum value, induced when the field sweeps past at full relative speed. As slip falls with acceleration, the induced rotor EMF falls in direct proportion, and so does the rotor current, which is why the heavy starting current settles down to the small full load value as the motor comes up to speed.</p>

  <div class="n-h1" id="s-open">The Open Rotor Circuit Trap</div>
  <p class="n-p">This is asked as a standalone question and it catches people who have only studied the squirrel cage case.</p>
  <p class="n-p">In a squirrel cage rotor, the bars are permanently short circuited by the end rings, built into the casting. There is no external circuit to open. So the question "does current flow if the terminals are left open" only makes sense for a <strong>slip ring</strong> motor, where the rotor winding is brought out through brushes to an external circuit, normally a bank of starting resistors, and that circuit can genuinely be opened.</p>
  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Answer it precisely.</strong> If a slip ring motor's rotor terminals are left open circuit, the rotating field still sweeps past the rotor conductors and an EMF is still induced in them exactly as before, because induction depends only on relative motion between field and conductor. But with the external circuit open there is no closed path for current to flow, so rotor current is <strong>zero</strong>. With zero rotor current there is zero force on the rotor conductors and therefore <strong>zero torque</strong>. The motor will sit at standstill, fully energised on the stator side, with a full EMF induced in the rotor, developing no starting torque at all. This is precisely why a slip ring motor must never be started with its rotor circuit open: the starting resistors must be connected in, not left disconnected, or the motor simply will not turn.</div></div>
  <p class="n-p">Contrast that plainly with the squirrel cage case in your answer: there the rotor is always a closed circuit by construction, so it is not physically possible to leave its terminals open, and current always flows whenever there is relative motion between the field and the rotor. The open circuit question exists only because slip ring motors expose a rotor circuit that can be opened.</p>

  <div class="n-h1" id="s-torque">Torque-Slip Curve</div>
  <p class="n-p">Plot torque on the vertical axis against slip on the horizontal axis, from s = 1 at standstill down to s = 0 at synchronous speed, and the shape tells most of the machine's story in one picture.</p>
  <div class="n-steps">
    <p class="n-p"><strong>At s = 1 (standstill):</strong> torque is not zero, it is the <strong>starting torque</strong>, typically 1.5 to 2.5 times full load torque for a standard cage motor, though modest compared to what full voltage current would suggest, because at standstill the rotor is highly inductive and current lags voltage by a large angle, so much of the current contributes little useful torque.</p>
    <p class="n-p"><strong>As slip falls from 1:</strong> torque rises, because the rotor circuit is becoming progressively less inductively dominated relative to its resistance as rotor frequency falls, improving the rotor power factor faster than the falling EMF reduces current.</p>
    <p class="n-p"><strong>Pull-up torque:</strong> the lowest point the torque curve dips to on its way up from standstill, before it rises to the peak. It matters because it is the torque available while accelerating through the early part of the run-up, and it must clear whatever the load demands at that speed or the motor stalls partway through starting.</p>
    <p class="n-p"><strong>Breakdown (pull-out) torque:</strong> the peak of the curve, the maximum torque the motor can produce at any slip, occurring at a slip of perhaps 15 to 25 percent for a standard cage motor. Load the motor beyond this point and it cannot develop enough torque to hold that load, the rotor decelerates further, slip increases further, torque falls further on the far side of the peak, and the motor stalls. This is why breakdown torque, not starting torque, is the real ceiling on how much load a running motor can carry.</p>
    <p class="n-p"><strong>Beyond breakdown, toward s = 0:</strong> the curve falls away steeply. Full load operation sits on this steep, near-linear part of the curve, close to synchronous speed, at only a few percent slip, which is exactly why the motor is described as running at an almost constant speed regardless of load within its normal working range.</p>
  </div>
  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Trap.</strong> Candidates often assume starting torque is the peak of the curve. It is not. The peak, breakdown torque, sits further along at moderate slip, well past standstill. Starting torque and breakdown torque are two different points on the curve and are frequently confused in a rushed answer.</div></div>

  <div class="n-h1" id="s-power">Power Flow and Air Gap Power</div>
  <p class="n-p">Trace the power step by step from the supply terminals to the shaft, because this is where the marks are, and know exactly where each loss is subtracted.</p>
  <div class="n-steps">
    <p class="n-p">1. <strong>Stator input power</strong>, P<sub>in</sub>, drawn from the supply, three phase, P<sub>in</sub> = √3 V<sub>L</sub> I<sub>L</sub> cos φ.</p>
    <p class="n-p">2. Subtract <strong>stator copper loss</strong> (I²R in the stator winding) and <strong>stator iron loss</strong> (hysteresis and eddy current loss in the stator core). What crosses the air gap into the rotor is the <strong>air gap power</strong>, P<sub>g</sub>, also called the rotor input.</p>
    <p class="n-p">3. The air gap power splits in a fixed ratio set entirely by slip. A fraction s of it is dissipated as <strong>rotor copper loss</strong> in the rotor bars, and the remaining fraction (1 − s) is converted to <strong>mechanical power developed</strong>, P<sub>m</sub>.</p>
    <p class="n-p">4. Subtract <strong>friction, windage and stray losses</strong> from the mechanical power to get the useful <strong>shaft output power</strong> delivered to the driven load.</p>
  </div>
  <div class="n-formula">Rotor copper loss = s × P<sub>g</sub> &nbsp;&nbsp;&nbsp;&nbsp; Mechanical power developed, P<sub>m</sub> = (1 − s) × P<sub>g</sub></div>
  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>This exact relationship is asked directly.</strong> "What is air gap power and how does it split with slip?" State the ratio, rotor copper loss to mechanical power developed, is s to (1 − s), and that both are fractions of the same air gap power. It follows immediately that a motor running at low slip converts almost all the air gap power to useful mechanical power and wastes very little as rotor heating, while a motor forced to run at high slip, for instance stalled or heavily overloaded, dissipates a large fraction of the air gap power as rotor heat instead of turning it into work. This is also the reason a stalled or slow running motor overheats quickly: nearly all of P<sub>g</sub> is going into I²R heating in the rotor with almost nothing left over as P<sub>m</sub>.</div></div>
  <p class="n-p">A short worked example makes the ratio concrete. A motor's air gap power is 10 kW and it is running at 4 percent slip. Rotor copper loss = 0.04 × 10 = <span class="n-val">400 W</span>. Mechanical power developed = 0.96 × 10 = <span class="n-val">9.6 kW</span>. Almost all of the power crossing the air gap becomes useful mechanical work, which is exactly why induction motors are efficient machines when run near their rated speed.</p>

  <div class="n-h1" id="s-loadeffect">Effect of Load Change on Speed, Current and Power Factor</div>
  <p class="n-p">Understand this as cause and effect, not as three separate facts to memorise.</p>
  <div class="n-steps">
    <p class="n-p"><strong>Load increases.</strong> The extra mechanical load momentarily demands more torque than the rotor is producing at its present slip, so the rotor decelerates slightly. That is the only way an induction motor can produce more torque: by slipping a little further behind the field.</p>
    <p class="n-p"><strong>Speed</strong> therefore falls slightly, and correspondingly <strong>slip rises</strong> slightly. The change is small, because the torque-slip curve is steep in the normal operating region, so a large change in torque needs only a small change in slip.</p>
    <p class="n-p"><strong>Rotor EMF and rotor current rise</strong> in direct proportion to the increased slip, exactly as the earlier relationship E<sub>r</sub> = s × E<sub>r0</sub> describes, and this larger rotor current reflects back to the stator as a larger stator current drawn from the supply.</p>
    <p class="n-p"><strong>Power factor improves</strong> as load increases from light load toward full load, because the magnetising component of current, which is largely fixed regardless of load and is the reason an induction motor's no-load power factor is poor, becomes a smaller fraction of a total current that is now dominated by the load-related, more resistive component. Beyond full load, as slip rises further, the rotor circuit becomes more reactive again and power factor falls back.</p>
  </div>
  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>The interview-ready summary.</strong> As load goes up, speed drops slightly, slip rises slightly, and both rotor and stator current rise to supply the extra torque needed, because the only mechanism an induction motor has for producing more torque is running at a slightly larger slip.</div></div>

  <div class="n-h1" id="s-crawling">Crawling and Cogging</div>
  <p class="n-p">Two distinct starting faults, easy to confuse, worth keeping strictly separate in an answer.</p>
  <table class="n-table">
    <tr><th>Fault</th><th>Cause</th><th>Effect</th></tr>
    <tr><td><strong>Crawling</strong></td><td>Harmonics present in the air gap flux, chiefly the seventh harmonic in a poorly designed or poorly wound stator, produce a weak additional rotating field at one seventh of synchronous speed, superimposed on the main field.</td><td>The motor accelerates normally but can lock on to and stabilise running at roughly one seventh of synchronous speed instead of continuing up to full speed, particularly under a light starting load. It sounds and feels like the motor has stalled at a low, steady speed rather than failed to start.</td></tr>
    <tr><td><strong>Cogging (magnetic locking)</strong></td><td>The number of stator slots and rotor slots are equal, or simple multiples of each other, so slot harmonics from the stator and rotor align and produce strong magnetic locking torques at particular rotor positions.</td><td>The rotor refuses to start at all, magnetically locked in position, even though the stator is fully energised. It is a design and manufacturing fault, corrected by choosing stator and rotor slot numbers that do not share simple ratios, and sometimes by skewing the rotor bars slightly along their length.</td></tr>
  </table>
  <p class="n-p">Both are manufacturing and design issues rather than something an ETO fixes at sea; the practical takeaway for an interview is being able to state the cause of each cleanly and not mix them up.</p>

  <div class="n-h1" id="s-interview">Interview Answers, Rapid Fire</div>

  <p class="n-p"><strong>Explain the working of an induction motor and what slip is.</strong><br>
  A three phase supply in three stator windings 120 degrees apart in space produces a rotating magnetic field. That field sweeps past the rotor conductors, inducing an EMF and, since the rotor circuit is closed, a current. That current in the field produces a force, which is the torque turning the rotor. The rotor can never reach the speed of the field itself, because at equal speed there would be no relative motion, no induced EMF, and no torque, so it always runs slightly slower. That fractional speed difference is the slip, typically 2 to 5 percent at full load.</p>

  <p class="n-p"><strong>What is synchronous speed and how do you calculate it?</strong><br>
  The speed of the rotating stator field, N<sub>s</sub> = 120f/P, fixed only by supply frequency and the number of poles the winding is wound for. It is not the speed the rotor actually runs at.</p>

  <p class="n-p"><strong>Does current flow in the rotor if the terminals are left open?</strong><br>
  Only meaningful for a slip ring motor, since a squirrel cage rotor has no external terminals to open. EMF is still induced in an open rotor winding, because induction depends only on relative motion, but with the circuit open there is no path for current, so rotor current is zero and therefore torque is zero. The motor will not start. This is why a slip ring motor's starting resistors must always be connected before starting, never left open.</p>

  <p class="n-p"><strong>What is air gap power and how does it split?</strong><br>
  The power crossing from stator to rotor across the air gap, after stator copper and iron losses are removed from the input. It splits in the ratio of slip: a fraction s is dissipated as rotor copper loss, and the remaining (1 − s) is converted to mechanical power developed on the shaft.</p>

  <p class="n-p"><strong>What is breakdown torque?</strong><br>
  The maximum torque point on the torque-slip curve, at a moderate slip, typically 15 to 25 percent. Loading the motor beyond this point causes it to stall, since torque falls away on the far side of the peak as slip increases further.</p>

  <p class="n-p"><strong>What happens to current and power factor as load increases?</strong><br>
  Speed falls slightly, slip rises slightly, rotor and stator current rise to produce the extra torque, and power factor improves toward full load as the fixed magnetising current becomes a smaller share of a larger total current, before falling again if the motor is pushed toward breakdown.</p>

  <p class="n-p"><strong>What is crawling?</strong><br>
  A stator winding harmonic, usually the seventh, produces a weak rotating field at about one seventh of synchronous speed, and under light load the motor can stabilise running at that low speed instead of accelerating to full speed.</p>

  <p class="n-p"><strong>What is cogging?</strong><br>
  Magnetic locking caused by equal or simply related numbers of stator and rotor slots, which prevents the rotor from starting at all. Corrected at the design stage by slot number selection and rotor skew.</p>

  <p class="n-p"><strong>Why does a squirrel cage motor draw high starting current, and what limits it?</strong><br>
  At standstill slip is 1, rotor frequency equals supply frequency, and the induced rotor EMF is at its maximum, so the rotor behaves like a shorted transformer secondary and draws heavy current, typically 5 to 7 times full load current. Limiting that surge is the job of a starter, covered fully in F11, not this module.</p>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F09')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the F09 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

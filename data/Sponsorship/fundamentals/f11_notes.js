window.loadNotes("F11", `<div class="view" id="view-notes-f11">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F11')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F11 - Motor Starting</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 11 of 25 · Difficulty ★★★☆☆ · Study Time 50-70 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-why')">Why a Starter</button>
    <button class="anc-btn" onclick="jumpTo('s-dol')">DOL</button>
    <button class="anc-btn" onclick="jumpTo('s-stardelta')">Star-Delta</button>
    <button class="anc-btn" onclick="jumpTo('s-autotx')">Autotransformer</button>
    <button class="anc-btn" onclick="jumpTo('s-soft')">Soft Starter</button>
    <button class="anc-btn" onclick="jumpTo('s-vfd')">VFD</button>
    <button class="anc-btn" onclick="jumpTo('s-compare')">Comparison</button>
    <button class="anc-btn" onclick="jumpTo('s-select')">Choosing One</button>
    <button class="anc-btn" onclick="jumpTo('s-interview')">Interview Answers</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to explain why an induction motor draws a large current at the instant of starting and why that is a problem on a ship rather than ashore, draw and describe a direct-on-line starter including the function of every component in it, explain star-delta starting and prove why both the current and the torque fall to one third, describe autotransformer, soft starter and variable frequency drive starting, state the starting current and starting torque of each method in terms of full load values, and justify which method you would fit to a given machine on a given vessel. You should also be able to answer the short interview questions at the end without pausing to think.</p>

  <div class="n-h1" id="s-why">Why a Motor Needs a Starter at All</div>
  <p class="n-p">Switch a three phase induction motor straight onto the board and it will run perfectly well. The difficulty is not running, it is the first two or three seconds.</p>

  <div class="n-h2">What happens at the instant of switching on</div>
  <p class="n-p">At standstill the rotor is not turning, so the slip is <span class="n-val">1</span>. The rotating field cuts the rotor bars at full synchronous speed, induces the maximum possible rotor EMF, and the rotor is effectively a short circuited secondary winding. The motor at that moment behaves very much like a transformer with its secondary shorted, and it draws:</p>

  <div class="n-formula">Starting current = 5 to 7 times full load current (typical, DOL)</div>

  <p class="n-p">As the rotor accelerates, slip falls, the rotor EMF falls with it, and the current settles back to full load value. The whole event is over in a few seconds. The question is what that surge does on its way past.</p>

  <div class="n-h2">Why it matters more on a ship than ashore</div>
  <p class="n-p">This is the part that separates a marine answer from a textbook answer, and it is worth saying in an interview.</p>
  <p class="n-p">Ashore, the supply is a national grid of effectively infinite capacity. A motor starting is a rounding error to it. On a ship the supply is one or two generators of a few hundred kW to a few MW, and a single large motor may be a significant fraction of the connected generator. So:</p>
  <p class="n-p"><strong>Voltage dip.</strong> The inrush current flowing through the generator and cable impedance drops the busbar voltage. Everything else on the board sees that dip. Lighting flickers, contactors on other starters can drop out because their coils no longer hold in, and sensitive electronics may reset.</p>
  <p class="n-p"><strong>Torque falls with the square of voltage.</strong> If the board dips, every other running motor loses torque, and they lose it as the square of the voltage drop, not in proportion. A 10 percent dip costs roughly 19 percent of torque.</p>
  <p class="n-p"><strong>Generator and prime mover loading.</strong> A large sudden load asks the diesel for a step change in power. The engine governor takes time to respond, so the frequency dips as well as the voltage.</p>
  <p class="n-p"><strong>Thermal and mechanical stress.</strong> Repeated heavy starts heat the windings and shock the coupling, the shaft and the driven machine.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>The one line answer.</strong> A starter exists to limit the starting current so that starting a motor does not disturb the rest of the ship's electrical system, and to give the motor overload and undervoltage protection while it runs. It is not there to make the motor turn.</div></div>

  <div class="n-h2">The relationship you must know</div>
  <p class="n-p">Every reduced voltage starting method is a trade, and it is always the same trade:</p>

  <div class="n-formula">Starting current ∝ V &nbsp;&nbsp;&nbsp;&nbsp; Starting torque ∝ V²</div>

  <p class="n-p">Halve the voltage applied at start and the current halves, but the torque falls to a quarter. That is why you cannot simply keep reducing the voltage until the surge is comfortable: at some point the motor will not have enough torque to break the load away, and it will sit there stalled, drawing heavy current and heating up. Every method below is an attempt to get around that square law, and only one of them genuinely does.</p>

  <div class="n-h1" id="s-dol">Direct On Line (DOL) Starting</div>
  <p class="n-p">The simplest method. Full line voltage is applied to the motor terminals in one step by closing a contactor.</p>

  <div class="n-h2">What is in a DOL starter</div>
  <p class="n-p">Know every component and what it does. This is a very common interview question and it is easy to score full marks on.</p>

  <table class="n-table">
    <tr><th>Component</th><th>Function</th></tr>
    <tr><td><strong>Main contactor</strong></td><td>The switching element. An electromagnetic coil pulls in the contacts to connect the motor to the supply.</td></tr>
    <tr><td><strong>Start push button</strong></td><td>Normally open, momentary. Energises the contactor coil.</td></tr>
    <tr><td><strong>Stop push button</strong></td><td>Normally closed, in series with the coil. Pressing it breaks the coil circuit and drops the contactor out.</td></tr>
    <tr><td><strong>Hold-in (latching) contact</strong></td><td>An auxiliary normally open contact on the contactor, wired in parallel with the start button. Once the contactor pulls in, this contact closes and maintains the coil supply after the start button is released.</td></tr>
    <tr><td><strong>Overload relay</strong></td><td>Thermal or electronic. Senses motor current and trips the coil circuit on a sustained overload. It protects against overload, not short circuit.</td></tr>
    <tr><td><strong>Short circuit protection</strong></td><td>Fuses or a circuit breaker upstream. The overload relay is far too slow to clear a short circuit.</td></tr>
    <tr><td><strong>Indication lamps</strong></td><td>Running, stopped and tripped.</td></tr>
  </table>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>The hold-in contact is the question.</strong> "Why does the motor keep running when you let go of the start button?" The answer is the auxiliary contact in parallel with the start button, and it does a second job: on a supply failure the contactor drops out and the hold-in contact opens, so when the supply comes back the motor does <strong>not</strong> restart on its own. Somebody has to press start. That is <strong>undervoltage protection</strong>, or no-volt release, and it is a safety feature, not an accident of the circuit.</div></div>

  <div class="n-h2">Characteristics</div>
  <table class="n-table">
    <tr><th>Quantity</th><th>Value</th></tr>
    <tr><td>Starting current</td><td><span class="n-val">5 to 7 × FLC</span></td></tr>
    <tr><td>Starting torque</td><td><span class="n-val">100% of DOL torque</span> (full, by definition)</td></tr>
    <tr><td>Cost and complexity</td><td>Lowest of all methods</td></tr>
  </table>

  <p class="n-p"><strong>Where it is used on board:</strong> small and medium motors where the surge is acceptable, and anything that must develop full torque from rest. Fans, small pumps, and most auxiliaries.</p>
  <p class="n-p"><strong>Limitation:</strong> the practical size limit for DOL on a ship is not a fixed horsepower figure, whatever a general purpose table says. It is set by the <strong>generator capacity and the acceptable voltage dip</strong>. A motor that would be DOL started on a large vessel may need reduced voltage starting on a small one running a single generator.</p>

  <div class="n-h1" id="s-stardelta">Star-Delta Starting</div>
  <p class="n-p">The classic reduced voltage method, and the one most likely to be asked about in detail.</p>

  <div class="n-h2">How it works</div>
  <p class="n-p">The motor is started with its three windings connected in <strong>star</strong>, then switched to <strong>delta</strong> once it has accelerated. It requires a motor with <strong>all six winding ends brought out</strong> to the terminal box, and the motor must be one designed to run in delta at the supply voltage.</p>

  <p class="n-p">In star, each winding sees the line voltage divided by root three:</p>
  <div class="n-formula">V<sub>phase(star)</sub> = V<sub>line</sub> / √3 = 0.577 × V<sub>line</sub></div>

  <div class="n-h2">Why the current falls to one third</div>
  <p class="n-p">Work it through, because being able to derive this rather than quote it is what earns the mark.</p>
  <p class="n-p">In <strong>delta</strong>, each winding has the full line voltage across it, so the phase current is V<sub>L</sub>/Z, and the line current is √3 times the phase current:</p>
  <div class="n-formula">I<sub>line(delta)</sub> = √3 × V<sub>L</sub> / Z</div>
  <p class="n-p">In <strong>star</strong>, each winding has only V<sub>L</sub>/√3 across it, and in star the line current equals the phase current:</p>
  <div class="n-formula">I<sub>line(star)</sub> = V<sub>L</sub> / (√3 × Z)</div>
  <p class="n-p">Divide one by the other:</p>
  <div class="n-formula">I<sub>star</sub> / I<sub>delta</sub> = 1/3</div>

  <p class="n-p">And because torque follows the square of the voltage, and the winding voltage has fallen by a factor of √3, the torque falls by (1/√3)² which is also <strong>one third</strong>.</p>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>The trap, and it is the follow-up question.</strong> You get the reduction in current, but you pay for it with exactly the same reduction in torque. A star-delta starter is therefore only suitable for a motor that can accelerate <strong>on light or no load</strong>. If the load is heavy the motor will not reach enough speed in star, and when it switches to delta at low speed it draws a current surge almost as bad as a DOL start, which defeats the whole purpose. Centrifugal pumps and fans start unloaded and suit it well. A loaded compressor does not.</div></div>

  <div class="n-h2">Open and closed transition</div>
  <p class="n-p"><strong>Open transition</strong> is the common arrangement: the star contactor opens, then the delta contactor closes. For a brief instant the motor is disconnected. The motor is still turning and generating a back EMF, and when the supply is reconnected out of phase with it there is a current and torque transient. Simple and cheap, and used almost everywhere.</p>
  <p class="n-p"><strong>Closed transition</strong> inserts resistors so the motor is never fully disconnected during the changeover, removing that transient. More components, used where the transient cannot be tolerated.</p>

  <div class="n-h2">Sequence of operation</div>
  <div class="n-steps">
    <p class="n-p">1. Start pressed. The <strong>main contactor</strong> and the <strong>star contactor</strong> close. The winding ends are shorted together to form the star point and the motor accelerates at reduced voltage.</p>
    <p class="n-p">2. A <strong>timer</strong> runs, typically a few seconds, set so the motor reaches roughly 75 to 80 percent of full speed.</p>
    <p class="n-p">3. The star contactor opens.</p>
    <p class="n-p">4. The <strong>delta contactor</strong> closes, connecting each winding across full line voltage. The motor pulls up to full speed and runs in delta.</p>
    <p class="n-p">An <strong>electrical and mechanical interlock</strong> between the star and delta contactors is essential. If both closed together the supply would be short circuited through the windings.</p>
  </div>

  <div class="n-h1" id="s-autotx">Autotransformer Starting</div>
  <p class="n-p">A tapped autotransformer applies a reduced voltage at start and then steps up to full voltage. Taps are commonly at <span class="n-val">50, 65 and 80 percent</span> of line voltage.</p>
  <p class="n-p">The advantage over star-delta is that the reduction is <strong>selectable</strong>. If a load needs more starting torque than star-delta can give, an 80 percent tap gives 0.8² which is <span class="n-val">64 percent</span> of full torque, where star-delta only gives 33 percent. You choose the compromise instead of accepting a fixed one.</p>
  <p class="n-p">The <strong>Korndorfer</strong> connection is the closed transition version, where the motor is never disconnected during the change to full voltage.</p>
  <p class="n-p">The disadvantages are size, weight and cost, which is why it appears on larger machines rather than throughout the ship.</p>

  <div class="n-h1" id="s-soft">Soft Starter</div>
  <p class="n-p">A soft starter uses <strong>back to back thyristors (SCRs)</strong> in each phase. By delaying the firing angle it controls how much of each half cycle reaches the motor, and so controls the RMS voltage applied. It ramps that voltage up smoothly over a set time.</p>

  <table class="n-table">
    <tr><th>Quantity</th><th>Value</th></tr>
    <tr><td>Starting current</td><td><span class="n-val">2 to 4 × FLC</span></td></tr>
    <tr><td>Ramp time</td><td>Typically <span class="n-val">5 to 30 seconds</span>, adjustable</td></tr>
    <tr><td>Torque</td><td>Reduced, following the square of the applied voltage</td></tr>
  </table>

  <p class="n-p"><strong>Advantages:</strong> genuinely smooth acceleration with no step change and no transition transient, adjustable ramp to suit the load, a soft stop facility that is valuable on pumps because it avoids water hammer, and much less mechanical shock on couplings and belts.</p>
  <p class="n-p"><strong>Limitations:</strong> it still only controls voltage, so it is still bound by the V² torque law and cannot give full torque at reduced current. It generates harmonics while ramping. It usually has a <strong>bypass contactor</strong> that closes once the motor is up to speed, so the thyristors are not conducting continuously and generating heat during normal running.</p>

  <div class="n-h1" id="s-vfd">Variable Frequency Drive (VFD)</div>
  <p class="n-p">The VFD is different in kind from everything above, and understanding why is the point of this section.</p>

  <div class="n-h2">How it breaks the trade-off</div>
  <p class="n-p">Every other method reduces the <strong>voltage</strong> and accepts the loss of torque. A VFD reduces the <strong>frequency and the voltage together</strong>, holding the ratio between them constant:</p>

  <div class="n-formula">V / f = constant</div>

  <p class="n-p">Torque in an induction motor depends on the magnetic flux in the air gap, and that flux depends on V/f, not on V alone. Hold V/f constant and the flux stays at its design value, so the motor can develop <strong>full torque</strong> even at low speed.</p>
  <p class="n-p">At the same time, starting at a low frequency means the rotating field is barely moving faster than the stationary rotor, so the <strong>slip is small</strong>, the rotor EMF is small, and the current drawn is small. The drive then raises the frequency progressively and the motor follows it up to speed.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Say this in the interview.</strong> Every other starting method trades torque away to reduce current, because torque follows voltage squared. A VFD does not make that trade: by lowering the frequency with the voltage it keeps the flux, and therefore the torque, while keeping slip and current low. That is why it can start at roughly <span class="n-val">1 to 1.5 × FLC</span> with full torque available, which no reduced voltage method can do.</div></div>

  <div class="n-h2">The three stages of a VFD</div>
  <p class="n-p">Be able to draw this block diagram. It is asked directly, and it is also how the IGBT question is asked.</p>
  <div class="n-steps">
    <p class="n-p">1. <strong>Rectifier.</strong> The incoming three phase AC is rectified to DC, usually by a six pulse diode bridge.</p>
    <p class="n-p">2. <strong>DC link.</strong> Capacitors, and often an inductor, smooth the rectified DC into a stable DC bus.</p>
    <p class="n-p">3. <strong>Inverter.</strong> <strong>IGBTs</strong> switch the DC bus to synthesise a three phase AC output of the required voltage and frequency, using pulse width modulation.</p>
  </div>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Asked directly in a recent interview:</strong> "Which electronic component is used to convert the DC supply into variable AC in an inverter?" The answer is the <strong>IGBT</strong>. It is chosen because it combines the voltage driven, high impedance gate of a MOSFET, which is easy to drive, with the high current and high voltage handling of a bipolar transistor. That makes it the right device for the switching frequencies and power levels an inverter needs.</div></div>

  <p class="n-p"><strong>Other advantages:</strong> speed control while running, which is the real reason VFDs are fitted rather than just soft starting. On pumps and fans the power varies with the cube of speed, so running at 80 percent speed uses roughly half the power. That energy saving is why VFDs appear on ballast pumps, engine room fans and cargo pumps.</p>
  <p class="n-p"><strong>Disadvantages:</strong> cost and complexity, <strong>harmonics</strong> injected back into the ship's system, and the need for the motor insulation to withstand the fast switching edges. Long cable runs can produce voltage reflections that stress the motor windings. A VFD driven motor also runs cooler air over itself at low speed, so a separately driven cooling fan may be needed.</p>

  <div class="n-h1" id="s-compare">Comparison of All Methods</div>
  <p class="n-p">If you memorise one table from this module, make it this one.</p>

  <table class="n-table">
    <tr><th>Method</th><th>Starting current</th><th>Starting torque</th><th>Cost</th><th>Best for</th></tr>
    <tr><td><strong>DOL</strong></td><td><span class="n-val">5-7 × FLC</span></td><td>100%</td><td>Lowest</td><td>Small motors, loads needing full torque from rest</td></tr>
    <tr><td><strong>Star-Delta</strong></td><td><span class="n-val">1/3 of DOL</span> (approx 2 × FLC)</td><td>33%</td><td>Low</td><td>Medium motors starting on light or no load</td></tr>
    <tr><td><strong>Autotransformer</strong></td><td>Set by tap (V/V<sub>L</sub>)²</td><td>64% at 80% tap</td><td>Medium-high</td><td>Large motors needing a chosen compromise</td></tr>
    <tr><td><strong>Soft starter</strong></td><td><span class="n-val">2-4 × FLC</span></td><td>Reduced, ramped</td><td>Medium</td><td>Smooth acceleration, avoiding mechanical shock and water hammer</td></tr>
    <tr><td><strong>VFD</strong></td><td><span class="n-val">1-1.5 × FLC</span></td><td>Full torque available</td><td>Highest</td><td>Speed control, energy saving, hardest starting duties</td></tr>
  </table>

  <div class="n-h1" id="s-select">Choosing a Starter on a Ship</div>
  <p class="n-p">An interviewer may give you a machine and ask what you would fit. Reason it out in this order rather than naming a method immediately.</p>
  <div class="n-steps">
    <p class="n-p">1. <strong>Does the load need torque at rest?</strong> A loaded conveyor or a compressor that starts against pressure needs torque immediately, which rules star-delta out.</p>
    <p class="n-p">2. <strong>How big is the motor relative to the generator on line?</strong> This sets whether the voltage dip from a DOL start is acceptable. It is the marine specific consideration and the one candidates forget.</p>
    <p class="n-p">3. <strong>Does the speed need to vary in service?</strong> If yes, a VFD is justified on its own merits and starting is a side benefit.</p>
    <p class="n-p">4. <strong>Is mechanical shock a problem?</strong> Water hammer in a pipeline, or belt and coupling wear, points to a soft starter.</p>
    <p class="n-p">5. <strong>How often does it start?</strong> Frequent starting favours methods that limit heating and stress.</p>
    <p class="n-p">6. <strong>Cost, space and spares.</strong> The simplest thing that meets the requirement is usually the right answer at sea, because it is the thing you can repair.</p>
  </div>

  <div class="n-h1" id="s-interview">Interview Answers, Rapid Fire</div>

  <p class="n-p"><strong>Why does a motor draw high current at starting?</strong><br>
  At standstill the slip is 1, the rotor is effectively a short circuited secondary, maximum EMF is induced in it, and the motor behaves like a transformer with a shorted secondary. Typically 5 to 7 times full load current, falling as the rotor accelerates and slip reduces.</p>

  <p class="n-p"><strong>What is the purpose of a starter?</strong><br>
  To limit that starting current so it does not disturb the rest of the ship's system, and to provide overload and undervoltage protection. Not to make the motor rotate.</p>

  <p class="n-p"><strong>What is a DOL starter?</strong><br>
  A starter that applies full line voltage in one step through a contactor. Contactor, start and stop buttons, hold-in contact, overload relay, with short circuit protection upstream. Simplest and cheapest, highest inrush, full starting torque.</p>

  <p class="n-p"><strong>Why does star-delta reduce the starting current to one third?</strong><br>
  In star each winding sees only line voltage divided by root three, and in star the line current equals the phase current. Working the ratio through gives one third of the delta line current. The torque also falls to one third, because torque follows the square of the voltage.</p>

  <p class="n-p"><strong>What is the disadvantage of star-delta?</strong><br>
  Starting torque is only one third, so it suits light or no load starting only. The motor must have six leads brought out, and open transition produces a current transient at changeover.</p>

  <p class="n-p"><strong>What is a VFD and why is it better at starting?</strong><br>
  A drive that varies both frequency and voltage together, holding V/f constant. That maintains the air gap flux so full torque is available, while low frequency at start keeps the slip and therefore the current low. Around 1 to 1.5 times full load current with full torque, which no voltage-only method can achieve. It also gives speed control in service, with a cube law energy saving on pumps and fans.</p>

  <p class="n-p"><strong>Which component converts DC to variable AC in the inverter?</strong><br>
  The IGBT, switching the DC link under pulse width modulation. Chosen because it has the easily driven voltage controlled gate of a MOSFET together with the high voltage and current capability of a bipolar transistor.</p>

  <p class="n-p"><strong>What are the three stages of a VFD?</strong><br>
  Rectifier, DC link, inverter. AC in, rectified to DC, smoothed by the DC link capacitors, then switched by IGBTs into AC of the required voltage and frequency.</p>

  <p class="n-p"><strong>Why does a motor not restart by itself after a blackout?</strong><br>
  Because the contactor drops out when the supply fails, and its hold-in contact opens with it. When the supply returns the coil circuit is still broken, so somebody has to press start. That is undervoltage or no-volt release protection, and it exists so machinery does not start unexpectedly on people working on it.</p>

  <p class="n-p"><strong>What is the difference between a soft starter and a VFD?</strong><br>
  A soft starter only ramps the voltage, so it reduces the current but loses torque with the square of the voltage, and once the motor is up to speed it is bypassed and does nothing more. A VFD controls voltage and frequency together, keeps full torque available, and continues to control the speed for as long as the motor runs.</p>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F11')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the F11 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

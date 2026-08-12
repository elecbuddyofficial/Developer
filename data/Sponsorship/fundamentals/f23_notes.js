window.loadNotes("F23", `<div class="view" id="view-notes-f23">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F23')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F23 - Electrical Losses</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 23 of 25 · Difficulty ★★★☆☆ · Study Time 40-55 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-conductor')">Conductor Losses</button>
    <button class="anc-btn" onclick="jumpTo('s-machine')">Losses in a Rotating Machine</button>
    <button class="anc-btn" onclick="jumpTo('s-transformer')">Losses in a Transformer</button>
    <button class="anc-btn" onclick="jumpTo('s-efficiency')">Efficiency & Maximum Efficiency</button>
    <button class="anc-btn" onclick="jumpTo('s-transmission')">Transmission Losses</button>
    <button class="anc-btn" onclick="jumpTo('s-pf')">Power Factor & Losses</button>
    <button class="anc-btn" onclick="jumpTo('s-practical')">Reducing Losses on Board</button>
    <button class="anc-btn" onclick="jumpTo('s-interview')">Interview Answers</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to explain why I²R loss dominates every conductor in the ship's electrical system, list and describe the loss mechanisms inside a rotating machine and a transformer, explain why a transformer's no-load loss is essentially all iron loss while its load loss is essentially all copper loss, derive the classical condition for maximum efficiency rather than just quoting it, explain why high voltage transmission reduces line losses for a given delivered power, explain how a poor power factor increases losses without changing real power delivered, and list the practical steps an ETO takes on board to keep losses down.</p>

  <div class="n-h1" id="s-conductor">Losses in a Conductor: I²R</div>
  <p class="n-p">Every loss in this module traces back to one mechanism: current forcing its way through resistance and dissipating heat. Get this relationship solid first, because it reappears in every section that follows.</p>
  <div class="n-formula">Power dissipated, P = I² × R</div>
  <p class="n-p">A conductor, whether a run of ship's cable, a motor winding, or a transformer coil, has some fixed resistance R set by its length, cross section and material. Push a current I through it and the heat dissipated rises with the <strong>square</strong> of the current, not in proportion to it. Double the current through the same cable and the loss does not double, it quadruples.</p>
  <p class="n-p">This square-law relationship is why I²R loss dominates almost every loss discussion in this module: why a doubled load current on a feeder cable is a much bigger problem than it first looks, why starting current surges (covered in F11) are thermally punishing even though brief, and why, as later sections show, high voltage transmission and good power factor both exist to keep current down rather than to do anything to the resistance.</p>
  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Why this is the dominant loss in cables and windings.</strong> A cable or winding has essentially one loss mechanism worth naming: resistive heating in the copper itself. No separate core to magnetise, no relative motion, nothing else consuming energy. So for a plain conductor, I²R is effectively the only loss, and cable sizing, loading and connection maintenance all come back to keeping I, and to a lesser extent R, as low as practically possible.</div></div>

  <div class="n-h1" id="s-machine">Losses in a Rotating Machine</div>
  <p class="n-p">A motor or generator has more going on than a plain conductor: a magnetic core continuously re-magnetised, and moving parts. Four distinct loss mechanisms sit inside it.</p>

  <div class="n-h2">Copper loss</div>
  <p class="n-p">I²R heating in the stator and, where applicable, rotor windings, exactly the mechanism above: a <strong>variable loss</strong> rising and falling with the square of load current. F09 (Induction Motors) already derives how air gap power splits between rotor copper loss and mechanical power developed, in the ratio s to (1 − s). Not repeated here; see F09's power flow section for the working.</p>

  <div class="n-h2">Iron loss (core loss)</div>
  <p class="n-p">The stator core is a magnetic circuit continuously taken through a full magnetisation cycle at supply frequency whenever the machine is energised, whether or not it is loaded. That re-magnetisation costs energy, through two mechanisms worth keeping distinct.</p>
  <p class="n-p"><strong>Hysteresis loss.</strong> A magnetic material does not follow the applied field instantly and reversibly; the domains inside the steel resist realigning as the field reverses, and that lag, traced as a magnetisation curve, forms a loop rather than a single retraceable line. The area enclosed by that loop is energy absorbed and dissipated as heat every cycle, overcoming the material's own magnetic "friction." Hysteresis loss rises with frequency and with steel grade; silicon steel is used because it has a narrow loop, and therefore low hysteresis loss.</p>
  <p class="n-p"><strong>Eddy current loss.</strong> The core is itself conductive steel in a changing field, so the same induction mechanism that makes the machine work also induces circulating currents within the core steel, not the windings. Those currents flow against the core's own resistance and dissipate as I²R heat.</p>
  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Why laminating the core specifically reduces eddy current loss.</strong> Laminating does little to hysteresis loss, a property of the steel grade, not its shape. What it attacks is eddy current: instead of one solid block, where eddy currents form large loops across the whole cross section, the core is built from many thin, mutually insulated sheets, confining each eddy current to a small loop within one lamination. Eddy current loss varies with the <strong>square of lamination thickness</strong>, so halving the thickness cuts the loss to roughly a quarter, not just a half. Typical laminations are 0.25 to 0.5 mm thick, a trade between minimising eddy loss and practical manufacturing.</div></div>
  <p class="n-p">Because iron loss depends on the core being magnetised at all, not on load current, it is present at essentially the same value whether the machine is running light or fully loaded: a <strong>constant loss</strong>, in direct contrast to copper loss, a <strong>variable loss</strong> tracking the square of load current. This split is the exact idea the efficiency section below is built on.</p>

  <div class="n-h2">Mechanical loss (friction and windage)</div>
  <p class="n-p">Bearing friction, brush friction where fitted, and windage, the power spent churning air (or driving a cooling fan) as the rotor spins. This depends mainly on speed, not electrical load, so like iron loss it stays close to constant across the machine's loading range at a given speed.</p>

  <div class="n-h2">Stray load loss</div>
  <p class="n-p">A smaller category covering what the other three do not cleanly capture: leakage flux inducing small eddy currents in nearby structural steel, and flux distortion under load. Usually a small percentage of total loss, but always present, and why measured machine efficiency is always slightly lower than a calculation using only copper and iron loss would predict.</p>

  <table class="n-table">
    <tr><th>Loss</th><th>Depends mainly on</th><th>Behaviour with load</th></tr>
    <tr><td><strong>Copper loss</strong></td><td>Load current, I²R</td><td>Variable, rises with the square of load current</td></tr>
    <tr><td><strong>Iron loss (hysteresis + eddy current)</strong></td><td>Supply voltage and frequency, core magnetisation</td><td>Essentially constant, present whenever energised</td></tr>
    <tr><td><strong>Mechanical loss (friction and windage)</strong></td><td>Running speed</td><td>Roughly constant at a given speed</td></tr>
    <tr><td><strong>Stray load loss</strong></td><td>Leakage flux and flux distortion under load</td><td>Small, appears mainly under load</td></tr>
  </table>

  <div class="n-h1" id="s-transformer">Losses in a Transformer</div>
  <p class="n-p">A transformer has no rotor, bearings or windage, so its loss picture is simpler: just the two mechanisms already introduced, sorted into two categories tested by two different standard tests.</p>

  <div class="n-h2">No-load loss is essentially all iron loss</div>
  <p class="n-p">Whenever a transformer is energised, its core carries the full rated flux and is taken through a complete hysteresis cycle at supply frequency, regardless of whether the secondary is drawing power. Since the core is excited at essentially rated voltage the moment the primary is energised, this loss is present at almost the same value whether the transformer is unloaded or fully loaded. It is measured by the <strong>open circuit test</strong>, secondary left open: the primary wattmeter reading is, for practical purposes, the iron loss alone, since with no secondary current there is negligible copper loss included.</p>

  <div class="n-h2">Load loss is essentially all copper loss</div>
  <p class="n-p">The moment a load is connected, current flows in both windings and dissipates I²R heat in their resistance exactly as in any conductor. This depends on the square of load current, so it is zero at no load and rises steeply with load. It is measured by the <strong>short circuit test</strong>, secondary shorted, with just enough primary voltage applied to circulate rated current. At that reduced voltage the core is barely magnetised, so the wattmeter reading is, for practical purposes, the copper loss alone.</p>
  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>State it as one clean pair.</strong> No-load loss equals iron loss, because the core is always fully excited whenever the transformer is energised, independent of load. Load loss equals copper loss, because it only exists when current flows to a load, and it scales with the square of that current. The open circuit test isolates the first; the short circuit test isolates the second. Total loss at any load is iron loss (fixed) plus copper loss at that load current, exactly what the efficiency derivation below depends on.</div></div>

  <div class="n-h1" id="s-efficiency">Efficiency and the Condition for Maximum Efficiency</div>
  <p class="n-p">Efficiency is simply useful output power divided by input power, or equivalently output over output plus total losses:</p>
  <div class="n-formula">η = Output / Input = Output / (Output + Losses)</div>
  <p class="n-p">The total loss at any load splits cleanly into the two categories established above: a <strong>constant loss</strong>, P<sub>c</sub>, the iron loss, fixed by supply voltage and frequency; and a <strong>variable loss</strong>, the copper loss, rising with the square of load current. Write the variable loss at load fraction x as x² × P<sub>cu</sub>, where P<sub>cu</sub> is the copper loss at full load (x = 1).</p>

  <div class="n-h2">Deriving the condition, not just quoting it</div>
  <p class="n-p">Let the output at load fraction x be x × S × cos φ, where S is the full load rated output and cos φ the power factor, both constant while x varies. Efficiency is then:</p>
  <div class="n-formula">η = (x S cos φ) / (x S cos φ + P<sub>c</sub> + x² P<sub>cu</sub>)</div>
  <p class="n-p">Differentiating with respect to x and setting the result to zero gives the value of x that maximises η. The conceptual route matters more than the algebra: output rises in direct proportion to x, but total loss is a fixed term P<sub>c</sub> that never moves, plus a term x² P<sub>cu</sub> growing with the <em>square</em> of x. At low load, P<sub>c</sub> is the larger share of total loss, dragging efficiency down. As load rises, the variable loss grows faster than output can dilute the fixed loss, and the two effects cross:</p>
  <div class="n-formula">Maximum efficiency occurs when: Constant loss (iron loss) = Variable loss (copper loss)</div>
  <p class="n-p">that is, when P<sub>c</sub> = x² P<sub>cu</sub>, or x = √(P<sub>c</sub> / P<sub>cu</sub>). Below that loading the fixed overhead has not yet been diluted by output; above it, copper loss outgrows output. The crossover, where the two losses are exactly equal, is the peak of the efficiency curve.</p>
  <p class="n-p">Worked example: iron loss 800 W, full load copper loss 1250 W. Maximum efficiency occurs at x = √(800/1250) = √0.64 = <span class="n-val">0.8, i.e. 80 percent of full load</span>. At that loading, copper loss = 0.8² × 1250 = 800 W, exactly equal to the iron loss, confirming the condition.</p>
  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Why this matters for sizing equipment on board.</strong> A transformer or generator sized somewhat larger than its typical running load, so it usually runs a little below full rated output, is not simply "oversized and wasteful." If its losses are reasonably balanced, running nearer the crossover load fraction can genuinely give better efficiency day to day than an exactly-rated unit flat out at 100 percent, where variable loss dominates.</div></div>

  <div class="n-h1" id="s-transmission">Transmission Losses</div>
  <p class="n-p">The same I²R relationship from the first section, applied to the cable run between source and load, explains why high voltage distribution exists at all, on a national grid ashore and, at the ship's own scale, on the larger vessels covered in F13's LV/HV boundary discussion.</p>
  <p class="n-p">For a given real power P delivered to a load, power equals voltage times current, near enough for a reasonable power factor:</p>
  <div class="n-formula">P = V × I, so for fixed P: I = P / V</div>
  <p class="n-p">Raise the distribution voltage V while holding P fixed, and the current I needed falls in direct, inverse proportion. Since cable loss is I²R and I has fallen in proportion to V, the loss falls with the <strong>square</strong> of that factor. Double the transmission voltage for the same delivered power and the current halves, but the I²R loss falls to a quarter.</p>
  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Tie this to F13.</strong> This P = VI relationship, and the resulting I²R saving, is exactly the reasoning F13 gives for why marine practice draws the LV/HV boundary at 1000 V AC under IEC 60092, and why larger vessels with heavy loads such as podded or thruster electric propulsion distribute at several kV rather than low voltage throughout. Refer to F13's LV/HV boundary section for the cable-size argument alongside this loss argument; both benefits come from the same fact, that raising voltage lowers the current needed for a given power.</div></div>

  <div class="n-h1" id="s-pf">Power Factor and Its Effect on Losses</div>
  <p class="n-p">Power factor does not change how much real, useful power is being delivered to a load, but it changes how much current has to flow to deliver it, and current is exactly what drives I²R loss.</p>
  <div class="n-formula">Real power, P = V × I × cos φ, so for fixed P and V: I = P / (V × cos φ)</div>
  <p class="n-p">A lower power factor, cos φ, means a smaller fraction of the total current flowing is doing useful work; the rest is reactive current circulating to and from magnetising components like motor windings and transformers, without delivering net energy to the load. To deliver the same real power P at a lower cos φ, the total current I drawn must be <strong>larger</strong>, in inverse proportion to cos φ. Since I²R loss depends on the square of that current, a drop in power factor produces a disproportionately larger loss rise throughout the cables, transformers, generator windings and switchgear carrying it.</p>
  <p class="n-p">Worked comparison: a load drawing 100 kW at unity power factor needs a certain current. The same 100 kW at 0.7 power factor needs roughly 1/0.7, about 1.43 times that current, and the I²R loss rises to roughly 1.43², about <span class="n-val">2 times</span>, for exactly the same delivered real power. Nothing useful was gained for that extra loss.</p>
  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>The one line answer.</strong> A poor power factor increases the current needed to deliver a given real power, and because I²R loss scales with the square of current, even a modest drop produces a disproportionately larger loss increase, without delivering any extra useful power. This is why power factor correction, adding capacitance to offset the lagging reactive current drawn by motors, is worth fitting even though it does no "work" of its own.</div></div>

  <div class="n-h1" id="s-practical">Practical Steps to Reduce Losses on Board</div>
  <p class="n-p">Most of this follows directly from the relationships derived above: routine electrical maintenance viewed through the lens of where losses actually come from.</p>
  <div class="n-steps">
    <p class="n-p"><strong>Maintain connections properly.</strong> A loose, corroded or dirty terminal adds resistance at a single point, and I²R loss there can produce serious local heating even on a lightly loaded circuit. Regular inspection and correct torquing is one of the simplest, most effective loss and fire-risk reductions available.</p>
    <p class="n-p"><strong>Load motors and transformers correctly.</strong> Running well under rated load wastes constant iron and mechanical losses over a small useful output; running overloaded pushes copper loss up the current-squared curve and risks thermal damage. Match the equipment to the actual duty.</p>
    <p class="n-p"><strong>Correct the power factor.</strong> Correction capacitors, sized to the reactive demand of the connected motors, bring the system power factor closer to unity, reducing total current for the same real power and cutting I²R loss throughout.</p>
    <p class="n-p"><strong>Size cabling correctly.</strong> An undersized cable runs hot, wasting energy as I²R heat and shortening insulation life. An oversized one is an unnecessary weight, space and cost penalty. Size to the actual expected load.</p>
    <p class="n-p"><strong>Avoid unnecessary voltage drop.</strong> Long runs, undersized conductors and poor connections all add resistance, each contributing its own I²R loss and dropping the voltage available at the load.</p>
    <p class="n-p"><strong>Keep cores and cooling paths clean.</strong> Dust, oil and blocked ventilation raise operating temperature, which raises winding resistance and therefore I²R loss for the same current, on top of shortening insulation life.</p>
  </div>

  <div class="n-h1" id="s-interview">Interview Answers, Rapid Fire</div>

  <p class="n-p"><strong>Why does I²R loss dominate cable and winding losses?</strong><br>
  A plain conductor has essentially no other loss mechanism, no core to magnetise and no moving parts, so resistive heating is effectively its only loss, and it rises with the square of current, not in direct proportion.</p>

  <p class="n-p"><strong>What are the losses in a rotating machine?</strong><br>
  Copper loss, I²R in the windings, a variable loss rising with the square of load current. Iron loss, hysteresis and eddy current loss in the core, essentially constant since the core is excited whenever the machine is energised. Mechanical loss, friction and windage, roughly constant at a given speed. Stray load loss, a small extra loss appearing mainly under load.</p>

  <p class="n-p"><strong>Why does laminating the core reduce eddy current loss specifically?</strong><br>
  Eddy current loss is I²R heating from currents induced within the conductive core steel by the changing flux. Laminating into thin, insulated sheets confines each induced current to a small loop within one lamination instead of a large loop across the whole core, and since eddy current loss varies with the square of lamination thickness, thin laminations cut it drastically. Lamination does little for hysteresis loss, which depends on the steel grade, not its shape.</p>

  <p class="n-p"><strong>Why is a transformer's no-load loss essentially all iron loss, and its load loss essentially all copper loss?</strong><br>
  The core is fully excited the moment the transformer is energised, regardless of load, so iron loss is present at no load and stays essentially constant. Copper loss only exists when load current flows, and scales with its square, so it is zero at no load and rises steeply with load. The open circuit test isolates the first, the short circuit test the second.</p>

  <p class="n-p"><strong>What is the condition for maximum efficiency?</strong><br>
  Maximum efficiency occurs at the load where constant loss (iron loss) equals variable loss (copper loss) at that point. Below that load the fixed overhead drags efficiency down; above it, copper loss grows faster than output and outweighs the gain.</p>

  <p class="n-p"><strong>Why does transmitting power at higher voltage reduce losses?</strong><br>
  For a fixed power delivered, P = VI, so raising voltage lowers current in direct proportion. Since I²R loss depends on the square of current, that reduction gives a squared reduction in loss, the same reasoning behind the marine LV/HV boundary covered in F13.</p>

  <p class="n-p"><strong>How does power factor affect losses?</strong><br>
  A lower power factor means more current is needed to deliver the same real power. Because I²R loss scales with the square of current, a drop in power factor gives a disproportionately larger rise in loss, without delivering extra useful power.</p>

  <p class="n-p"><strong>What practical steps reduce electrical losses on board?</strong><br>
  Clean, properly torqued connections, correctly loaded motors and transformers, power factor correction, correctly sized cabling, minimised voltage drop, and clean cores and cooling paths so operating temperature and resistance do not rise unnecessarily.</p>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F23')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the F23 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

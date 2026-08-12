window.loadNotes("A03", `<div class="view" id="view-notes-a03">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('aptitude')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('A03')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>A03 - Height and Distance</h1>
    <div class="sub">Aptitude Test Preparation · Quantitative · Difficulty ★★★☆☆ · Study Time 45-55 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-ratios')">The Six Ratios</button>
    <button class="anc-btn" onclick="jumpTo('s-identities')">Identities</button>
    <button class="anc-btn" onclick="jumpTo('s-table')">Standard Angles</button>
    <button class="anc-btn" onclick="jumpTo('s-angles')">Elevation and Depression</button>
    <button class="anc-btn" onclick="jumpTo('s-method')">Method</button>
    <button class="anc-btn" onclick="jumpTo('s-worked')">Worked Examples</button>
    <button class="anc-btn" onclick="jumpTo('s-traps')">Traps</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to write the six trigonometric ratios from a right angled triangle without hesitating, derive the three Pythagorean identities rather than recalling them, reproduce the standard angle table from two triangles you can draw from memory, distinguish an angle of elevation from an angle of depression and explain why the two are equal between the same pair of points, and turn a worded height problem into a triangle with one unknown.</p>
  <p class="n-p">If your trigonometry is rusty, start at the beginning of this module rather than the formula summary. Everything here is built up from one right angled triangle, and it is a topic that rewards understanding over recall because the exam changes the diagram, not the mathematics.</p>

  <div class="n-h1" id="s-ratios">The Six Ratios, From One Triangle</div>
  <p class="n-p">Take a right angled triangle OAB with the right angle at A, and let the angle at O be θ. Relative to θ, the three sides have names:</p>
  <table class="n-table">
    <tr><th>Side</th><th>Which one it is</th><th>Does it depend on θ?</th></tr>
    <tr><td><strong>Hypotenuse</strong></td><td>The side opposite the right angle, always the longest</td><td>No, it is fixed by the triangle</td></tr>
    <tr><td><strong>Perpendicular</strong></td><td>The side opposite θ</td><td>Yes, it swaps if you measure from the other angle</td></tr>
    <tr><td><strong>Base</strong></td><td>The remaining side, next to θ</td><td>Yes, same reason</td></tr>
  </table>
  <p class="n-p">The three primary ratios are then:</p>
  <div class="n-formula">sin θ = <span class="n-val">Perpendicular / Hypotenuse</span> &nbsp;&nbsp; cos θ = <span class="n-val">Base / Hypotenuse</span> &nbsp;&nbsp; tan θ = <span class="n-val">Perpendicular / Base</span></div>
  <p class="n-p">The other three are simply their reciprocals, and there is nothing more to them than that:</p>
  <div class="n-formula">cosec θ = <span class="n-val">1 / sin θ</span> &nbsp;&nbsp;&nbsp; sec θ = <span class="n-val">1 / cos θ</span> &nbsp;&nbsp;&nbsp; cot θ = <span class="n-val">1 / tan θ</span></div>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>The pairing that catches people out.</strong> The reciprocal of <strong>sin</strong> is <strong>cosec</strong>, not sec, and the reciprocal of <strong>cos</strong> is <strong>sec</strong>, not cosec. They are deliberately crossed. The way to keep it straight is to look at the third letter: co<strong>s</strong>ec pairs with <strong>s</strong>in, and <strong>sec</strong> pairs with <strong>c</strong>os by elimination.</div></div>

  <p class="n-p">For height problems specifically, <strong>tan</strong> does almost all the work. A height question gives you a vertical height and a horizontal ground distance, which are exactly the perpendicular and the base, and tan is the only ratio that connects those two without involving the hypotenuse. If you find yourself reaching for sin or cos in a height problem, check whether you actually need the sloping line of sight at all.</p>

  <div class="n-h1" id="s-identities">The Three Identities, Derived</div>
  <p class="n-p">These follow from Pythagoras in one step each, so there is no need to memorise them separately.</p>
  <p class="n-p">Start with Pythagoras for the triangle above, writing P, B and H for perpendicular, base and hypotenuse:</p>
  <div class="n-formula">P² + B² = H²</div>
  <p class="n-p"><strong>Divide through by H².</strong> Each term becomes a ratio you already know:</p>
  <div class="n-formula">P²/H² + B²/H² = 1 &nbsp;&nbsp;⟹&nbsp;&nbsp; <span class="n-val">sin²θ + cos²θ = 1</span></div>
  <p class="n-p"><strong>Divide the same equation by B²</strong> instead:</p>
  <div class="n-formula">P²/B² + 1 = H²/B² &nbsp;&nbsp;⟹&nbsp;&nbsp; <span class="n-val">1 + tan²θ = sec²θ</span></div>
  <p class="n-p"><strong>Divide by P²</strong> for the third:</p>
  <div class="n-formula">1 + B²/P² = H²/P² &nbsp;&nbsp;⟹&nbsp;&nbsp; <span class="n-val">1 + cot²θ = cosec²θ</span></div>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>One equation, three dresses.</strong> All three identities are Pythagoras divided by a different side. If you ever blank on which squared term sits with which, write P² + B² = H² and divide by whichever side does not appear in the ratio you want. It takes ten seconds and it cannot be misremembered.</div></div>

  <div class="n-h1" id="s-table">The Standard Angle Table</div>
  <p class="n-p">Exam questions use only a handful of angles, chosen so the arithmetic stays exact.</p>
  <table class="n-table">
    <tr><th>θ</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>
    <tr><td><strong>sin θ</strong></td><td>0</td><td><span class="n-val">1/2</span></td><td><span class="n-val">1/√2</span></td><td><span class="n-val">√3/2</span></td><td>1</td></tr>
    <tr><td><strong>cos θ</strong></td><td>1</td><td><span class="n-val">√3/2</span></td><td><span class="n-val">1/√2</span></td><td><span class="n-val">1/2</span></td><td>0</td></tr>
    <tr><td><strong>tan θ</strong></td><td>0</td><td><span class="n-val">1/√3</span></td><td><span class="n-val">1</span></td><td><span class="n-val">√3</span></td><td>not defined</td></tr>
  </table>

  <div class="n-h2">Rebuilding it from two triangles</div>
  <p class="n-p">Rather than memorising twelve values, draw two triangles and read them off.</p>
  <div class="n-steps">
    <p class="n-p">1. <strong>For 45°</strong>, take a right angled triangle with both short sides equal to 1. The angles must then be 45° and 45°, and Pythagoras gives a hypotenuse of √2. So sin 45° = cos 45° = <span class="n-val">1/√2</span> and tan 45° = <span class="n-val">1</span>.</p>
    <p class="n-p">2. <strong>For 30° and 60°</strong>, take an equilateral triangle of side 2 and cut it in half down the middle. The half is right angled with hypotenuse 2, base 1, and by Pythagoras a height of √3. The 30° angle sits at the top and the 60° at the bottom.</p>
    <p class="n-p">3. Read the ratios off that half triangle: sin 30° = 1/2 (opposite over hypotenuse), cos 30° = √3/2, tan 30° = 1/√3. For 60° the opposite and adjacent swap, giving sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3.</p>
  </div>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Why tan 90° is not defined.</strong> tan θ is sin θ over cos θ, and cos 90° = <span class="n-val">0</span>. Dividing by zero has no value, so tan 90° does not exist rather than being infinite. Physically it is the statement that a line of sight straight up never meets the ground at any finite distance, which is exactly what a horizontal distance of zero would mean.</div></div>

  <div class="n-h1" id="s-angles">Angle of Elevation and Angle of Depression</div>
  <p class="n-p">Both are measured from the <strong>horizontal</strong>, never from the vertical. That single sentence prevents most errors in this topic.</p>
  <table class="n-table">
    <tr><th>&nbsp;</th><th>Angle of elevation</th><th>Angle of depression</th></tr>
    <tr><td>Observer is</td><td>Below the object</td><td>Above the object</td></tr>
    <tr><td>Line of sight goes</td><td>Upward</td><td>Downward</td></tr>
    <tr><td>Measured from</td><td>The horizontal through the observer</td><td>The horizontal through the observer</td></tr>
    <tr><td>Typical wording</td><td>"a man looks up at the top of a tower"</td><td>"from the top of a lighthouse, a boat is seen"</td></tr>
  </table>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>They are the same angle, seen from opposite ends.</strong> If the elevation of P from O is 30°, then the depression of O from P is also <span class="n-val">30°</span>. The two horizontals are parallel and the line of sight is a transversal cutting them, so the two angles are alternate angles and therefore equal. Exam questions exploit this constantly: a depression angle given from the top of a cliff can be moved to the bottom of the triangle and used as an elevation, which is usually what turns an awkward diagram into a standard one.</div></div>

  <div class="n-h1" id="s-method">Method: Turning Words Into a Triangle</div>
  <div class="n-steps">
    <p class="n-p">1. <strong>Draw it.</strong> A vertical line for the height, a horizontal line for the ground, and a sloping line of sight joining them. Nearly every question in this topic is that one picture.</p>
    <p class="n-p">2. <strong>Mark the angle at the correct corner.</strong> Elevation angles sit at the observer's end on the ground; depression angles sit at the top, between the horizontal and the line of sight.</p>
    <p class="n-p">3. <strong>Label what you know and what you want.</strong> If both are a height and a ground distance, you need <span class="n-val">tan</span>. Only reach for sin or cos if the sloping distance itself is involved.</p>
    <p class="n-p">4. <strong>Write one equation per triangle.</strong> Two angles in a question means two triangles sharing the same height, which gives two equations in two unknowns.</p>
    <p class="n-p">5. <strong>Eliminate the height</strong> when you want the distance, or the distance when you want the height. The shared side is what links the two equations.</p>
  </div>

  <div class="n-h1" id="s-worked">Worked Examples</div>

  <div class="n-h2">1. The 45° case, which needs no arithmetic</div>
  <p class="n-p">The angle of elevation of the top of a tower from a point on the ground is 45°, and the point is 60 m from the foot. Find the height.</p>
  <p class="n-p">tan 45° = height / distance, and tan 45° = <span class="n-val">1</span>, so the height equals the distance: <span class="n-val">60 m</span>. Whenever you see 45°, height and base are equal and there is nothing to calculate.</p>

  <div class="n-h2">2. Using 30°</div>
  <p class="n-p">A tower is 60 m high. Find the distance of a point on the ground from which its elevation is 30°.</p>
  <p class="n-p">tan 30° = 60 / d, and tan 30° = 1/√3, so 1/√3 = 60/d and d = 60√3 ≈ <span class="n-val">103.9 m</span>. Note the pattern: a smaller angle means you are standing further away, so if your answer came out smaller than the height, you have inverted the ratio.</p>

  <div class="n-h2">3. Using 60°</div>
  <p class="n-p">Same 60 m tower, elevation now 60°. Find the distance.</p>
  <p class="n-p">tan 60° = √3 = 60/d, so d = 60/√3 ≈ <span class="n-val">34.6 m</span>. Comparing with the previous example, the 30° point is exactly <span class="n-val">3 times</span> as far out as the 60° point, because tan 60° / tan 30° = √3 ÷ (1/√3) = 3.</p>

  <div class="n-h2">4. Two angles, one tower</div>
  <p class="n-p">A man walks towards a tower. The elevation changes from 30° to 60° after he covers 40 m. Find the height of the tower.</p>
  <p class="n-p">Let the height be h and let the nearer point be x from the foot. From the near point, tan 60° = h/x, so x = h/√3. From the far point, tan 30° = h/(x + 40), so x + 40 = h√3.</p>
  <p class="n-p">Subtracting the first from the second: 40 = h√3 − h/√3 = h(3 − 1)/√3 = 2h/√3. So h = 40√3/2 = <span class="n-val">20√3 ≈ 34.6 m</span>.</p>

  <div class="n-h2">5. A depression angle, converted</div>
  <p class="n-p">From the top of a 45 m lighthouse, the angle of depression of a boat is 45°. How far is the boat from the foot?</p>
  <p class="n-p">The depression from the lighthouse equals the elevation of the lighthouse top from the boat, so the angle at the boat is also 45°. Then tan 45° = 45/d gives d = <span class="n-val">45 m</span>. Converting the depression into an elevation at the other end is what makes the triangle a standard one.</p>

  <div class="n-h1" id="s-traps">Traps That Cost Marks</div>
  <table class="n-table">
    <tr><th>Trap</th><th>What goes wrong</th><th>Guard</th></tr>
    <tr><td>Angle measured from vertical</td><td>Using the complement of the true angle</td><td>Both elevation and depression are from the horizontal</td></tr>
    <tr><td>tan inverted</td><td>Writing base over perpendicular</td><td>tan is perpendicular over base; a smaller angle must give a larger distance</td></tr>
    <tr><td>sin and cos reciprocals crossed</td><td>Calling sec the reciprocal of sin</td><td>cosec goes with sin, sec goes with cos</td></tr>
    <tr><td>Observer height ignored</td><td>Treating the eye as being on the ground when a height is given</td><td>If the question gives the observer's height, subtract it from the object's height</td></tr>
    <tr><td>Depression not transferred</td><td>Marking the depression angle at the base of the triangle</td><td>It sits at the top, or move it to the base as the equal elevation</td></tr>
    <tr><td>Leaving a surd unrationalised</td><td>Answer written as 60/√3 when options show 20√3</td><td>Multiply top and bottom by √3 before comparing with the options</td></tr>
  </table>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>If you remember one thing.</strong> Draw the triangle, mark the angle at the observer, and use <span class="n-val">tan θ = height / horizontal distance</span>. Two angles in a question means two triangles sharing one vertical side, and eliminating that shared side between the two equations is the whole solution.</div></div>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('A03')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the A03 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

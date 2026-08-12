window.loadNotes("A02", `<div class="view" id="view-notes-a02">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('aptitude')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('A02')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>A02 - Time and Distance</h1>
    <div class="sub">Aptitude Test Preparation · Quantitative · Difficulty ★★☆☆☆ · Study Time 35-45 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-triangle')">The Three Relations</button>
    <button class="anc-btn" onclick="jumpTo('s-units')">Units</button>
    <button class="anc-btn" onclick="jumpTo('s-inverse')">Speed and Time Are Inverse</button>
    <button class="anc-btn" onclick="jumpTo('s-average')">Average Speed</button>
    <button class="anc-btn" onclick="jumpTo('s-summary')">Formula Summary</button>
    <button class="anc-btn" onclick="jumpTo('s-worked')">Worked Examples</button>
    <button class="anc-btn" onclick="jumpTo('s-traps')">Traps</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to move freely between speed, time and distance, convert units without pausing, explain why two speeds in the ratio a : b give times in the ratio b : a over the same distance, and derive the average speed for equal distances rather than assuming it is the ordinary average. That last point is where most marks in this topic are won and lost, so it gets a section of its own.</p>
  <p class="n-p">This module is the foundation for <strong>A01 Problems on Trains</strong>, which adds the single extra idea that a train has length. If you are comfortable here, that module is mostly bookkeeping.</p>

  <div class="n-h1" id="s-triangle">The Three Relations, Which Are One Relation</div>
  <p class="n-p">Speed is distance covered per unit of time. That is the whole definition, and the other two forms are it rearranged:</p>
  <div class="n-formula">Speed = <span class="n-val">Distance / Time</span> &nbsp;&nbsp;&nbsp; Time = <span class="n-val">Distance / Speed</span> &nbsp;&nbsp;&nbsp; Distance = <span class="n-val">Speed × Time</span></div>
  <p class="n-p">Do not memorise three formulas. Memorise the first and rearrange, the same way you would with any equation. If you can write speed = distance over time, the other two are one algebraic step away and you cannot get them the wrong way up.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Check by units, every time.</strong> Distance divided by time gives km/hr, which is a speed. Distance divided by speed gives km ÷ (km/hr) = hours, which is a time. If the units of your answer are not the units the question asked for, you have used the wrong rearrangement, and this catches the error before the arithmetic does.</div></div>

  <div class="n-h1" id="s-units">Units</div>
  <p class="n-p">Same conversions as <strong>A01</strong>, derived from 1000 metres in a kilometre and 3600 seconds in an hour:</p>
  <div class="n-formula">km/hr → m/s: × <span class="n-val">5/18</span> &nbsp;&nbsp;&nbsp;&nbsp; m/s → km/hr: × <span class="n-val">18/5</span></div>
  <p class="n-p">The direction check is that a speed expressed in m/s is always the smaller number, so converting to m/s must multiply by less than one. Speeds that are multiples of <span class="n-val">18 km/hr</span> convert to whole m/s, which is why exam speeds are so often 18, 36, 54, 72 or 90.</p>

  <div class="n-h1" id="s-inverse">Speed and Time Are Inversely Proportional</div>
  <p class="n-p">Over a <strong>fixed distance</strong>, speed and time multiply to a constant. Double the speed and the time halves. That single fact answers a large share of the questions in this topic without any calculation at all.</p>
  <p class="n-p">Put it algebraically. If A and B cover the same distance d at speeds a and b, their times are:</p>
  <div class="n-formula">t<sub>A</sub> = d / a &nbsp;&nbsp;&nbsp;&nbsp; t<sub>B</sub> = d / b</div>
  <p class="n-p">Dividing one by the other, the distance cancels because it is the same distance:</p>
  <div class="n-formula">t<sub>A</sub> : t<sub>B</sub> = (d/a) : (d/b) = <span class="n-val">1/a : 1/b</span> = <span class="n-val">b : a</span></div>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Speeds in the ratio a : b give times in the ratio b : a.</strong> The ratio flips. If A is twice as fast as B, speeds are 2 : 1 and times are 1 : 2, because the faster one takes less time. The sanity check is always available: whichever is faster must have the smaller time, so if your ratio makes the faster runner take longer, you have written it the wrong way round.</div></div>

  <p class="n-p">This is also the fastest route through "if he had walked faster" questions. A man who walks at 5 km/hr instead of 4 km/hr is going 5/4 as fast, so he takes 4/5 of the time. If the slower walk took 60 minutes, the faster takes 48, and the difference of 12 minutes often is the answer without ever finding the distance.</p>

  <div class="n-h1" id="s-average">Average Speed, and the Trap in It</div>
  <p class="n-p">Average speed is never the average of the speeds unless you are careful about what was held constant. The definition is fixed and always safe:</p>
  <div class="n-formula">Average speed = <span class="n-val">Total distance / Total time</span></div>
  <p class="n-p">Everything else in this section is that definition applied to a particular case. If you forget the shortcuts, fall back to this and you cannot go wrong.</p>

  <div class="n-h2">Equal distances at two speeds</div>
  <p class="n-p">A man covers a distance at x km/hr and an equal distance at y km/hr. Call each distance d. He spends d/x hours on the first and d/y on the second, so:</p>
  <div class="n-formula">Average = 2d / (d/x + d/y) = 2d / [d(x + y)/xy] = <span class="n-val">2xy / (x + y)</span></div>
  <p class="n-p">The distance cancels, which is why the result depends only on the two speeds. This quantity is the <strong>harmonic mean</strong>, and it is always less than the ordinary average, equal only when the two speeds are the same.</p>

  <div class="n-h2">Equal times at two speeds</div>
  <p class="n-p">Change one word and the answer changes completely. If he travels for equal <em>times</em> rather than equal distances, spending t hours at each speed, the distances are xt and yt, so:</p>
  <div class="n-formula">Average = (xt + yt) / 2t = <span class="n-val">(x + y) / 2</span></div>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>The distinction that decides the question.</strong> Equal <span class="n-val">distances</span> gives <span class="n-val">2xy/(x+y)</span>. Equal <span class="n-val">times</span> gives <span class="n-val">(x+y)/2</span>. Take 60 and 40 km/hr: equal distances averages <span class="n-val">48 km/hr</span>, equal times averages <span class="n-val">50 km/hr</span>. Both are offered as options in almost every exam version of this question, so reading which one is held equal is worth more than knowing either formula.</p><p class="n-p">Why the equal-distance answer is the lower one: you spend <em>longer</em> at the slow speed than at the fast one, because the slow leg takes more time to cover the same ground. The slow speed therefore carries more weight in the average, and drags it below the halfway point.</div></div>

  <div class="n-h1" id="s-summary">Formula Summary</div>
  <table class="n-table">
    <tr><th>Situation</th><th>Result</th><th>Why</th></tr>
    <tr><td>Basic relation</td><td><span class="n-val">Speed = Distance / Time</span></td><td>Definition; the other two are rearrangements</td></tr>
    <tr><td>km/hr to m/s</td><td>× <span class="n-val">5/18</span></td><td>1000 m over 3600 s</td></tr>
    <tr><td>m/s to km/hr</td><td>× <span class="n-val">18/5</span></td><td>The same fraction inverted</td></tr>
    <tr><td>Speeds a : b, same distance</td><td>times <span class="n-val">b : a</span></td><td>Distance cancels, so time goes as 1/speed</td></tr>
    <tr><td>Equal distances at x and y</td><td><span class="n-val">2xy / (x + y)</span></td><td>Total distance over total time; harmonic mean</td></tr>
    <tr><td>Equal times at x and y</td><td><span class="n-val">(x + y) / 2</span></td><td>Distances are proportional to the speeds</td></tr>
    <tr><td>Anything else</td><td><span class="n-val">Total distance / Total time</span></td><td>Always valid, needs no special case</td></tr>
  </table>

  <div class="n-h1" id="s-worked">Worked Examples</div>

  <div class="n-h2">1. Straight substitution</div>
  <p class="n-p">A car covers 240 km in 4 hours. Find its speed, and the time to cover 420 km at that speed.</p>
  <p class="n-p">Speed = 240 / 4 = <span class="n-val">60 km/hr</span>. Time = 420 / 60 = <span class="n-val">7 hours</span>.</p>

  <div class="n-h2">2. Using the inverse ratio, without finding the distance</div>
  <p class="n-p">A man walking at 4 km/hr reaches his office in 30 minutes. How long at 5 km/hr?</p>
  <p class="n-p">Speeds are 4 : 5, so times are 5 : 4. The new time is 30 × 4/5 = <span class="n-val">24 minutes</span>. The distance was never needed, and computing it (2 km) is extra work for the same answer.</p>

  <div class="n-h2">3. Equal distances</div>
  <p class="n-p">A man drives 90 km at 60 km/hr and returns the same 90 km at 40 km/hr. Find his average speed.</p>
  <p class="n-p">Equal distances, so use 2xy/(x+y) = 2 × 60 × 40 / 100 = 4800/100 = <span class="n-val">48 km/hr</span>. Confirm from the definition: 1.5 hours out plus 2.25 hours back is 3.75 hours for 180 km, and 180/3.75 = 48. Note it is <em>not</em> 50.</p>

  <div class="n-h2">4. Equal times, for contrast</div>
  <p class="n-p">The same man now drives for 1 hour at 60 km/hr and 1 hour at 40 km/hr. Average speed?</p>
  <p class="n-p">Equal times, so the ordinary average applies: (60 + 40)/2 = <span class="n-val">50 km/hr</span>. Checking: 60 + 40 = 100 km in 2 hours. The only thing that changed from example 3 is which quantity was equal, and the answer moved by 2 km/hr.</p>

  <div class="n-h2">5. Three legs, where no shortcut applies</div>
  <p class="n-p">A journey is 120 km at 60 km/hr, then 80 km at 40 km/hr, then 100 km at 50 km/hr. Average speed?</p>
  <p class="n-p">No two legs are equal in distance or time, so go back to the definition. Times are 2, 2 and 2 hours, total <span class="n-val">6 hours</span>, for a total distance of 300 km. Average = 300/6 = <span class="n-val">50 km/hr</span>. Here the times happen to be equal, so the ordinary average of the speeds also gives 50, but that was luck rather than a rule.</p>

  <div class="n-h2">6. Finding a distance from a difference in times</div>
  <p class="n-p">A boy walking at 4 km/hr reaches school 5 minutes late; at 5 km/hr he arrives 10 minutes early. Find the distance.</p>
  <p class="n-p">Let the distance be d km. The two travel times differ by 15 minutes, which is <span class="n-val">1/4 hour</span>: d/4 − d/5 = 1/4. The left side is d(5 − 4)/20 = d/20, so d/20 = 1/4 and d = <span class="n-val">5 km</span>.</p>

  <div class="n-h1" id="s-traps">Traps That Cost Marks</div>
  <table class="n-table">
    <tr><th>Trap</th><th>What goes wrong</th><th>Guard</th></tr>
    <tr><td>Averaging the speeds</td><td>Using (x+y)/2 when the distances are equal</td><td>Ask what is equal: distance or time</td></tr>
    <tr><td>Ratio not flipped</td><td>Writing times as a : b instead of b : a</td><td>The faster one must have the smaller time</td></tr>
    <tr><td>Mixed units</td><td>Minutes with km/hr, or metres with km/hr</td><td>Convert before substituting, not after</td></tr>
    <tr><td>Late and early not combined</td><td>Using 5 or 10 minutes instead of the 15 between them</td><td>The gap between the two arrivals is the difference in travel time</td></tr>
    <tr><td>Shortcut used where legs are unequal</td><td>Applying 2xy/(x+y) to three legs, or to unequal distances</td><td>It only holds for exactly two equal distances</td></tr>
  </table>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>If you remember one thing.</strong> <span class="n-val">Average speed = total distance ÷ total time</span>, always, with no exceptions. Every shortcut in this module is that definition pre-solved for a special case. When a question does not fit a special case, or you cannot remember which one applies, computing the totals directly costs one extra line and cannot be wrong.</div></div>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('A02')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the A02 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

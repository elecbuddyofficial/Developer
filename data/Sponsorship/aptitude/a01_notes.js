window.loadNotes("A01", `<div class="view" id="view-notes-a01">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('aptitude')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('A01')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>A01 - Problems on Trains</h1>
    <div class="sub">Aptitude Test Preparation · Quantitative · Difficulty ★★☆☆☆ · Study Time 35-45 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-units')">Units and 5/18</button>
    <button class="anc-btn" onclick="jumpTo('s-length')">The One Idea</button>
    <button class="anc-btn" onclick="jumpTo('s-relative')">Relative Speed</button>
    <button class="anc-btn" onclick="jumpTo('s-crossing')">Two Trains Crossing</button>
    <button class="anc-btn" onclick="jumpTo('s-ratio')">The Root Ratio Result</button>
    <button class="anc-btn" onclick="jumpTo('s-summary')">Formula Summary</button>
    <button class="anc-btn" onclick="jumpTo('s-worked')">Worked Examples</button>
    <button class="anc-btn" onclick="jumpTo('s-traps')">Traps</button>
    <button class="anc-btn" onclick="jumpTo('s-practice')">Practice Set</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to convert between km/hr and m/s without hesitating, explain why a train passing a pole and a train passing a platform are two different distances, derive relative speed for objects moving in the same and in opposite directions, work out how long two trains take to cross each other in either case, and derive the speed ratio result for two trains that start together and continue after crossing. Every formula here is derived rather than listed, because the exam varies the wording far more than it varies the physics.</p>

  <div class="n-h1" id="s-units">Units, and Where 5/18 Comes From</div>
  <p class="n-p">Train questions mix km/hr for speeds with metres for lengths, so almost every problem starts with a conversion. Do not memorise the fraction, derive it once and it will never leave you.</p>
  <p class="n-p">One kilometre is 1000 metres and one hour is 3600 seconds, so:</p>
  <div class="n-formula">1 km/hr = 1000 m / 3600 s = 10/36 = <span class="n-val">5/18</span> m/s</div>
  <p class="n-p">That gives the pair you will use constantly:</p>
  <div class="n-formula">km/hr → m/s: multiply by <span class="n-val">5/18</span> &nbsp;&nbsp;&nbsp;&nbsp; m/s → km/hr: multiply by <span class="n-val">18/5</span></div>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Sanity check that stops you inverting it.</strong> A speed in m/s is always a <em>smaller</em> number than the same speed in km/hr, because a metre per second covers less ground per unit than a kilometre per hour implies. So going to m/s you multiply by something less than 1, which is <span class="n-val">5/18</span>. Going the other way you multiply by something greater than 1, which is <span class="n-val">18/5</span>. If your answer moves the wrong way, you have flipped the fraction.</div></div>

  <p class="n-p">Two conversions worth knowing on sight, because they come up repeatedly and make the arithmetic clean:</p>
  <table class="n-table">
    <tr><th>km/hr</th><th>m/s</th><th>Why it is convenient</th></tr>
    <tr><td><span class="n-val">18</span></td><td><span class="n-val">5</span></td><td>The fraction in its simplest form</td></tr>
    <tr><td><span class="n-val">36</span></td><td><span class="n-val">10</span></td><td>Doubles cleanly</td></tr>
    <tr><td><span class="n-val">54</span></td><td><span class="n-val">15</span></td><td>Very common exam speed</td></tr>
    <tr><td><span class="n-val">72</span></td><td><span class="n-val">20</span></td><td>The most common of all</td></tr>
    <tr><td><span class="n-val">90</span></td><td><span class="n-val">25</span></td><td>Multiples of 18 always land whole</td></tr>
  </table>
  <p class="n-p">Notice the pattern: any speed that is a multiple of 18 km/hr converts to a whole number of m/s. Examiners choose these deliberately, so a messy conversion is often a hint that you have misread the question.</p>

  <div class="n-h1" id="s-length">The One Idea Behind Every Train Problem</div>
  <p class="n-p">A train is not a point. It has length, and that single fact is what separates this topic from ordinary speed, time and distance work. Everything else follows from asking one question: <strong>what distance does the train actually travel between the start of the event and the end of it?</strong></p>
  <p class="n-p">Define the event carefully. A train has "passed" something when its <strong>rear end</strong> has cleared it, not when its front reaches it. So the distance covered is measured from where the front starts to where the rear finishes.</p>

  <div class="n-h2">Passing a pole, a standing person, or a signal post</div>
  <p class="n-p">A pole has no meaningful length. Put the front of the train level with the pole at the start. The train has fully passed when the rear reaches the pole, and the rear began one train-length behind the front. So the train travels exactly its own length:</p>
  <div class="n-formula">Time to pass a pole = <span class="n-val">l / u</span> &nbsp;&nbsp; (l = length of train, u = its speed)</div>

  <div class="n-h2">Passing a platform, bridge, tunnel, or a stationary train</div>
  <p class="n-p">Now the object itself has length b. The front starts at the near end of the object; the train is clear only when the rear passes the far end. The rear must therefore travel the length of the object <em>plus</em> the length of the train:</p>
  <div class="n-formula">Time to pass an object of length b = <span class="n-val">(l + b) / u</span></div>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>This is the single most common mistake in the topic.</strong> Using l alone where the object has length, or (l + b) where it does not. Read the object, not the sentence: a pole, a man, a signal post and a tree are all zero length, so the distance is <span class="n-val">l</span>. A platform, bridge, tunnel and any second train are all real lengths, so the distance is <span class="n-val">l + b</span>. A question that gives you both a pole time and a platform time is handing you two equations, and their difference is the platform length divided by the speed.</div></div>

  <div class="n-h1" id="s-relative">Relative Speed, Derived</div>
  <p class="n-p">When both objects move, work in the frame of one of them. Relative speed is how fast the gap between them changes, and it is what you divide the distance by.</p>

  <div class="n-h2">Same direction</div>
  <p class="n-p">Two trains move the same way at u and v m/s with u &gt; v. In one second the faster covers u metres and the slower covers v metres, so the gap between them shrinks by only (u − v) metres. From the slower train's point of view the faster one is approaching at:</p>
  <div class="n-formula">Relative speed (same direction) = <span class="n-val">u − v</span></div>
  <p class="n-p">This is why overtaking takes so long in these questions. Two trains at 72 and 54 km/hr close on each other at only 18 km/hr, which is <span class="n-val">5 m/s</span>.</p>

  <div class="n-h2">Opposite directions</div>
  <p class="n-p">Now they move towards each other. In one second one covers u metres and the other covers v metres, in opposite senses, so the gap shrinks by (u + v) metres:</p>
  <div class="n-formula">Relative speed (opposite directions) = <span class="n-val">u + v</span></div>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>One sentence that covers both.</strong> Add the speeds when the motions oppose, subtract them when they agree. A stationary object is just the case v = 0, which is why a train passing a standing man uses the train's own speed and nothing else. You do not need three formulas, you need one idea applied three times.</div></div>

  <div class="n-h1" id="s-crossing">Two Trains Crossing Each Other</div>
  <p class="n-p">Combine the two ideas above and the whole topic collapses into one line. Both trains have length, so the distance to be covered is the sum of both lengths. Both move, so the speed to use is the relative speed.</p>
  <div class="n-formula">Time to cross = <span class="n-val">(total length) / (relative speed)</span></div>
  <p class="n-p">Written out for the two cases, with trains of length a and b metres at u and v m/s:</p>
  <table class="n-table">
    <tr><th>Situation</th><th>Distance</th><th>Speed</th><th>Time</th></tr>
    <tr><td>Opposite directions</td><td>a + b</td><td>u + v</td><td><span class="n-val">(a + b) / (u + v)</span></td></tr>
    <tr><td>Same direction, faster crossing slower</td><td>a + b</td><td>u − v</td><td><span class="n-val">(a + b) / (u − v)</span></td></tr>
  </table>
  <p class="n-p">The distance is a + b in both cases. Only the speed changes. Candidates who memorise the two formulas separately tend to mix up which denominator goes with which; candidates who understand that the numerator is always "both trains must clear each other" never do.</p>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Watch the units before you divide.</strong> Lengths are in metres and speeds are usually quoted in km/hr, so convert the speeds to m/s first and the answer comes out in seconds. Dividing metres by km/hr gives a number with no useful meaning, and it is a mistake that produces a plausible-looking wrong answer rather than an obvious one.</div></div>

  <div class="n-h1" id="s-ratio">Two Trains That Continue After Crossing</div>
  <p class="n-p">This one looks like a memory question and is actually a short derivation. Two trains leave A and B at the same moment, heading towards each other. After they cross, the first takes a seconds to reach B and the second takes b seconds to reach A. Find the ratio of their speeds.</p>

  <div class="n-steps">
    <p class="n-p">1. Let their speeds be u and v, and let them meet after time t. At that moment the first has covered a distance u·t from A, and the second has covered v·t from B.</p>
    <p class="n-p">2. After crossing, the first train still has to cover the ground the second has already travelled, which is v·t. At speed u that takes a = v·t / u.</p>
    <p class="n-p">3. Symmetrically, the second still has to cover u·t at speed v, so b = u·t / v.</p>
    <p class="n-p">4. Divide one by the other: a / b = (v·t / u) × (v / u·t) = v² / u².</p>
    <p class="n-p">5. Therefore u² / v² = b / a, and taking square roots gives the result.</p>
  </div>

  <div class="n-formula">(first train's speed) : (second train's speed) = <span class="n-val">√b : √a</span></div>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Note the swap, it is the whole trap.</strong> The train that takes the <em>shorter</em> time after crossing is the <em>faster</em> one, so its speed pairs with the <em>other</em> train's time. If train A finishes in 9 seconds and train B in 16, the ratio is √16 : √9 = <span class="n-val">4 : 3</span>, not 3 : 4. Writing the times in the same order as the speeds is the single most common way this question is dropped.</div></div>

  <div class="n-h1" id="s-summary">Formula Summary</div>
  <p class="n-p">Everything above on one page. If you can rebuild each line from the idea in the right-hand column, you do not need to memorise the left.</p>
  <table class="n-table">
    <tr><th>Situation</th><th>Result</th><th>Why</th></tr>
    <tr><td>km/hr to m/s</td><td>× <span class="n-val">5/18</span></td><td>1000 m over 3600 s</td></tr>
    <tr><td>m/s to km/hr</td><td>× <span class="n-val">18/5</span></td><td>The same fraction inverted</td></tr>
    <tr><td>Train passes a pole or a person</td><td><span class="n-val">l / u</span></td><td>Object has no length, so the train covers its own</td></tr>
    <tr><td>Train passes a platform or bridge of length b</td><td><span class="n-val">(l + b) / u</span></td><td>Rear must clear the far end</td></tr>
    <tr><td>Same direction, speeds u and v</td><td>relative speed <span class="n-val">u − v</span></td><td>Gap closes only by the difference</td></tr>
    <tr><td>Opposite directions</td><td>relative speed <span class="n-val">u + v</span></td><td>Both contribute to closing the gap</td></tr>
    <tr><td>Two trains cross, opposite directions</td><td><span class="n-val">(a + b) / (u + v)</span></td><td>Both lengths, closing speed</td></tr>
    <tr><td>Faster train crosses slower, same direction</td><td><span class="n-val">(a + b) / (u − v)</span></td><td>Both lengths, difference in speed</td></tr>
    <tr><td>Start together, take a and b sec after crossing</td><td>speeds in <span class="n-val">√b : √a</span></td><td>Derived above, note the swap</td></tr>
  </table>

  <div class="n-h1" id="s-worked">Worked Examples</div>

  <div class="n-h2">1. Train passing a pole</div>
  <p class="n-p">A train 150 m long runs at 90 km/hr. How long to pass a signal post?</p>
  <p class="n-p">A signal post has no length, so the distance is the train's own 150 m. Convert the speed: 90 × 5/18 = <span class="n-val">25 m/s</span>. Time = 150 / 25 = <span class="n-val">6 seconds</span>.</p>

  <div class="n-h2">2. Train passing a platform</div>
  <p class="n-p">The same train passes a 100 m platform. How long now?</p>
  <p class="n-p">The rear must clear the far end, so the distance is 150 + 100 = 250 m. Time = 250 / 25 = <span class="n-val">10 seconds</span>. The extra 4 seconds is exactly the platform's 100 m at 25 m/s, which is a useful check.</p>

  <div class="n-h2">3. Finding a length from two times</div>
  <p class="n-p">A train passes a pole in 6 seconds and a 120 m platform in 14 seconds. Find its speed and length.</p>
  <p class="n-p">Let the speed be u m/s and the length l. From the pole, l = 6u. From the platform, l + 120 = 14u. Substituting: 6u + 120 = 14u, so 8u = 120 and u = <span class="n-val">15 m/s</span>, which is 15 × 18/5 = <span class="n-val">54 km/hr</span>. Then l = 6 × 15 = <span class="n-val">90 m</span>.</p>

  <div class="n-h2">4. Two trains, opposite directions</div>
  <p class="n-p">Trains of 120 m and 80 m run towards each other at 72 km/hr and 108 km/hr. How long to cross?</p>
  <p class="n-p">Speeds in m/s: 72 × 5/18 = 20, and 108 × 5/18 = 30. Opposite directions, so relative speed = 20 + 30 = <span class="n-val">50 m/s</span>. Total length = 120 + 80 = 200 m. Time = 200 / 50 = <span class="n-val">4 seconds</span>.</p>

  <div class="n-h2">5. Two trains, same direction</div>
  <p class="n-p">The same two trains now run the same way. How long for the faster to cross the slower?</p>
  <p class="n-p">Relative speed = 30 − 20 = <span class="n-val">10 m/s</span>. Distance is still 200 m. Time = 200 / 10 = <span class="n-val">20 seconds</span>, five times longer than the head-on case. That factor of five is the ratio of the relative speeds, not a coincidence.</p>

  <div class="n-h2">6. The root ratio</div>
  <p class="n-p">Two trains start at the same time from A and B towards each other. After crossing, one reaches B in 4 seconds and the other reaches A in 9 seconds. Find the ratio of their speeds.</p>
  <p class="n-p">Using √b : √a with the times swapped: √9 : √4 = <span class="n-val">3 : 2</span>. The train that took only 4 seconds is the faster one, and 3 : 2 correctly makes it faster. If you had written √4 : √9 = 2 : 3 you would be claiming the quicker finisher is the slower train, which the answer itself contradicts.</p>

  <div class="n-h1" id="s-traps">Traps That Cost Marks</div>
  <table class="n-table">
    <tr><th>Trap</th><th>What goes wrong</th><th>Guard</th></tr>
    <tr><td>Zero-length objects</td><td>Adding a length for a pole, man, tree or signal post</td><td>Ask whether the object physically has length</td></tr>
    <tr><td>Forgetting the train's own length</td><td>Using only the platform length</td><td>The rear clears the far end, so always both</td></tr>
    <tr><td>Mixed units</td><td>Dividing metres by km/hr</td><td>Convert to m/s before dividing</td></tr>
    <tr><td>Wrong relative speed</td><td>Adding when they travel the same way</td><td>Same way subtract, opposing add</td></tr>
    <tr><td>Root ratio written straight</td><td>√a : √b instead of √b : √a</td><td>Check the faster train has the shorter time</td></tr>
    <tr><td>Stationary train treated as an object</td><td>Using only the moving train's length</td><td>A stationary train still has length, so use a + b with v = 0</td></tr>
  </table>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>If you remember one thing.</strong> Every question in this topic is <span class="n-val">distance ÷ relative speed</span>. The only two decisions are what counts as the distance (add every length involved) and what counts as the speed (add if opposing, subtract if agreeing, and a stationary object contributes zero). Get those two right and there is nothing else to recall.</div></div>

  <div class="n-h1" id="s-practice">Practice Set: 20 Problems</div>
  <p class="n-p">Work each one before reading the solution. Every answer below was recomputed from the numbers in the question rather than copied from a source, and the last one is included on purpose because it does not behave.</p>

  <div class="n-h2">1. Passing a pole</div>
  <p class="n-p">A train runs at 60 km/hr and crosses a pole in 9 seconds. Find its length.</p>
  <p class="n-p"><strong>Solution.</strong> Speed = 60 &times; 5/18 = 50/3 m/s. A pole has no length, so the train covers only itself: (50/3) &times; 9. Answer: <span class="n-val">150 m</span></p>

  <div class="n-h2">2. Passing a platform</div>
  <p class="n-p">A train 180 m long runs at 54 km/hr. How long does it take to cross a platform 120 m long?</p>
  <p class="n-p"><strong>Solution.</strong> Speed = 15 m/s. Distance = 180 + 120 = 300 m. Time = 300/15. Answer: <span class="n-val">20 seconds</span></p>

  <div class="n-h2">3. Length from a signal post</div>
  <p class="n-p">A train at 72 km/hr crosses a signal post in 10 seconds. Find its length.</p>
  <p class="n-p"><strong>Solution.</strong> Speed = 20 m/s. A signal post is zero length, so length = 20 &times; 10. Answer: <span class="n-val">200 m</span></p>

  <div class="n-h2">4. Platform length</div>
  <p class="n-p">A 250 m train crosses a platform in 25 seconds at 72 km/hr. Find the platform length.</p>
  <p class="n-p"><strong>Solution.</strong> Speed = 20 m/s, so total distance = 20 &times; 25 = 500 m. Subtract the train: 500 &minus; 250. Answer: <span class="n-val">250 m</span></p>

  <div class="n-h2">5. Opposite directions</div>
  <p class="n-p">Trains 150 m and 250 m long run in opposite directions at 45 km/hr and 55 km/hr. How long to cross?</p>
  <p class="n-p"><strong>Solution.</strong> Total length = 400 m. Relative speed = 45 + 55 = 100 km/hr = 250/9 m/s. Time = 400 &divide; (250/9). Answer: <span class="n-val">14.4 seconds</span></p>

  <div class="n-h2">6. Same direction</div>
  <p class="n-p">A 120 m train at 72 km/hr overtakes a 180 m train at 54 km/hr. How long does it take?</p>
  <p class="n-p"><strong>Solution.</strong> Total length = 300 m. Relative speed = 72 &minus; 54 = 18 km/hr = 5 m/s. Time = 300/5. Answer: <span class="n-val">60 seconds</span></p>

  <div class="n-h2">7. Bridge length</div>
  <p class="n-p">A 300 m train crosses a bridge in 30 seconds at 54 km/hr. Find the bridge length.</p>
  <p class="n-p"><strong>Solution.</strong> Speed = 15 m/s, total distance = 450 m, so the bridge is 450 &minus; 300. Answer: <span class="n-val">150 m</span></p>

  <div class="n-h2">8. A man running the same way</div>
  <p class="n-p">A 125 m train passes a man running the same way at 5 km/hr in 10 seconds. Find the train's speed.</p>
  <p class="n-p"><strong>Solution.</strong> Relative speed = 125/10 = 12.5 m/s = 45 km/hr. Same direction means speeds subtract, so the train is 45 + 5. Answer: <span class="n-val">50 km/hr</span></p>

  <div class="n-h2">9. A man running the opposite way</div>
  <p class="n-p">A 180 m train passes a man running towards it at 9 km/hr in 6 seconds. Find the train's speed.</p>
  <p class="n-p"><strong>Solution.</strong> Relative speed = 180/6 = 30 m/s = 108 km/hr. Opposite directions means speeds add, so the train is 108 &minus; 9. Answer: <span class="n-val">99 km/hr</span></p>

  <div class="n-h2">10. Two platforms, no length given</div>
  <p class="n-p">A train crosses a 200 m platform in 20 seconds and a 300 m platform in 25 seconds. Find its speed.</p>
  <p class="n-p"><strong>Solution.</strong> The train's own length appears in both, so subtracting removes it: 100 extra metres took 5 extra seconds. Speed = 100/5 = 20 m/s. Answer: <span class="n-val">72 km/hr</span></p>

  <div class="n-h2">11. Pole and platform together</div>
  <p class="n-p">A train crosses a pole in 12 seconds and a 180 m platform in 24 seconds. Find its length.</p>
  <p class="n-p"><strong>Solution.</strong> With speed v, the pole gives L = 12v and the platform gives L + 180 = 24v. Subtracting, 180 = 12v, so v = 15 m/s and L = 12 &times; 15. Answer: <span class="n-val">180 m</span></p>

  <div class="n-h2">12. Opposite directions again</div>
  <p class="n-p">Trains 200 m and 300 m long run in opposite directions at 36 km/hr and 54 km/hr. Find the crossing time.</p>
  <p class="n-p"><strong>Solution.</strong> Total = 500 m. Relative speed = 90 km/hr = 25 m/s. Time = 500/25. Answer: <span class="n-val">20 seconds</span></p>

  <div class="n-h2">13. Overtaking a cyclist</div>
  <p class="n-p">A train at 90 km/hr overtakes a cyclist at 18 km/hr in 10 seconds. Find the train's length.</p>
  <p class="n-p"><strong>Solution.</strong> Relative speed = 90 &minus; 18 = 72 km/hr = 20 m/s. A cyclist is a point, so length = 20 &times; 10. Answer: <span class="n-val">200 m</span></p>

  <div class="n-h2">14. Tunnel length</div>
  <p class="n-p">A 240 m train at 72 km/hr crosses a tunnel in 36 seconds. Find the tunnel length.</p>
  <p class="n-p"><strong>Solution.</strong> Speed = 20 m/s, total = 720 m, so the tunnel is 720 &minus; 240. Answer: <span class="n-val">480 m</span></p>

  <div class="n-h2">15. Meeting between two stations</div>
  <p class="n-p">Two trains start from stations 300 km apart and move towards each other at 60 km/hr and 40 km/hr. When do they meet?</p>
  <p class="n-p"><strong>Solution.</strong> Train lengths are irrelevant here, since only the meeting instant is asked. Relative speed = 100 km/hr, so time = 300/100. Answer: <span class="n-val">3 hours</span></p>

  <div class="n-h2">16. Platform length again</div>
  <p class="n-p">A 150 m train crosses a platform in 15 seconds at 72 km/hr. Find the platform length.</p>
  <p class="n-p"><strong>Solution.</strong> Speed = 20 m/s, total = 300 m, so the platform is 300 &minus; 150. Answer: <span class="n-val">150 m</span></p>

  <div class="n-h2">17. Same direction overtaking</div>
  <p class="n-p">Trains 100 m and 140 m long run the same way at 63 km/hr and 45 km/hr. How long for the faster to cross the slower?</p>
  <p class="n-p"><strong>Solution.</strong> Total = 240 m. Relative speed = 18 km/hr = 5 m/s. Time = 240/5. Answer: <span class="n-val">48 seconds</span></p>

  <div class="n-h2">18. Platform from two crossing times</div>
  <p class="n-p">A train crosses a platform in 40 seconds and a standing person in 16 seconds, at 72 km/hr. Find the platform length.</p>
  <p class="n-p"><strong>Solution.</strong> Speed = 20 m/s. The person gives the train's own length: 20 &times; 16 = 320 m. The platform crossing covers 20 &times; 40 = 800 m, so the platform is 800 &minus; 320. Answer: <span class="n-val">480 m</span></p>

  <div class="n-h2">19. Train length from two times</div>
  <p class="n-p">A train crosses a pole in 8 seconds and a 400 m bridge in 28 seconds. Find its length.</p>
  <p class="n-p"><strong>Solution.</strong> The pole gives speed = L/8. The bridge gives L + 400 = 28(L/8), so 8L + 3200 = 28L and 20L = 3200. Answer: <span class="n-val">160 m</span></p>

  <div class="n-h2">20. Two conditions, two unknowns</div>
  <p class="n-p">Two trains are 100 m and 80 m long. They cross each other in 9 seconds moving in opposite directions, and the faster overtakes the slower in 18 seconds moving the same way. Find their speeds.</p>
  <p class="n-p"><strong>Solution.</strong> The total length is 180 m in both cases. Opposite directions give a relative speed of 180/9 = 20 m/s = 72 km/hr, so u + v = 72. Same direction gives 180/18 = 10 m/s = 36 km/hr, so u &minus; v = 36. Adding the two equations, 2u = 108. Answer: <span class="n-val">54 km/hr</span> and <span class="n-val">18 km/hr</span>.</p>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Question 20 is a lesson in not trusting the options.</strong> This problem circulates with four choices, usually 45 and 35, 50 and 30, 60 and 20, or 72 and 28. <span class="n-val">None of them is correct.</span> The two conditions force u + v = 72 and u &minus; v = 36, which has exactly one solution, 54 and 18. Test any option that attracts you against both conditions: 50 and 30 sum to 80 rather than 72 and differ by 20 rather than 36, so it fails both. An answer you have derived and checked beats an option that merely looks plausible.</div></div>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('A01')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the A01 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

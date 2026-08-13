window.loadNotes("A13", `<div class="view" id="view-notes-a13">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('aptitude')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('A13')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>A13 - Average</h1>
    <div class="sub">Aptitude Test Preparation · Quantitative · Difficulty ★★☆☆☆ · Study Time 30-40 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-basic')">The Definition</button>
    <button class="anc-btn" onclick="jumpTo('s-shortcuts')">Sequences</button>
    <button class="anc-btn" onclick="jumpTo('s-change')">Adding and Replacing</button>
    <button class="anc-btn" onclick="jumpTo('s-weighted')">Combining Groups</button>
    <button class="anc-btn" onclick="jumpTo('s-speed')">Average Speed</button>
    <button class="anc-btn" onclick="jumpTo('s-summary')">Formula Summary</button>
    <button class="anc-btn" onclick="jumpTo('s-worked')">Worked Examples</button>
    <button class="anc-btn" onclick="jumpTo('s-traps')">Traps</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to move between an average and a total without thinking about it, find the average of a run of consecutive numbers by inspection, work out what changed when a member of a group is added or replaced, combine two groups correctly, and explain why the average speed over equal distances is not the average of the two speeds.</p>

  <div class="n-h1" id="s-basic">The Definition, and the Form You Actually Use</div>
  <div class="n-formula">Average = <span class="n-val">Sum of observations / Number of observations</span></div>
  <p class="n-p">That is the definition, and it is worth stating the rearrangement immediately, because in an exam it is used far more often than the definition itself:</p>
  <div class="n-formula">Sum = <span class="n-val">Average × Number</span></div>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Think in totals, not averages.</strong> Almost every question in this topic is solved by converting each average back into a total, doing ordinary arithmetic on the totals, then converting once at the end. Averages cannot be added, subtracted or averaged with each other safely; totals can. If a question has you manipulating averages directly, you are probably about to make the mistake it was written to catch.</div></div>

  <div class="n-h1" id="s-shortcuts">Averages You Can Read Off Without Calculating</div>
  <p class="n-p">For evenly spaced numbers the average is simply the middle of the run, because the values above the centre and below it cancel exactly.</p>
  <table class="n-table">
    <tr><th>Set</th><th>Average</th><th>Example</th></tr>
    <tr><td>Consecutive numbers, odd count</td><td>The <span class="n-val">middle term</span></td><td>7, 8, 9, 10, 11 → <span class="n-val">9</span></td></tr>
    <tr><td>Consecutive numbers, even count</td><td>Midpoint of the two middle terms</td><td>4, 5, 6, 7 → <span class="n-val">5.5</span></td></tr>
    <tr><td>Any evenly spaced run</td><td><span class="n-val">(first + last) / 2</span></td><td>3, 7, 11, 15 → (3+15)/2 = <span class="n-val">9</span></td></tr>
    <tr><td>First n natural numbers</td><td><span class="n-val">(n + 1) / 2</span></td><td>1 to 100 → <span class="n-val">50.5</span></td></tr>
  </table>
  <p class="n-p">The last one follows from the row above it: the first term is 1 and the last is n, so the average is (1 + n)/2. There is nothing separate to remember.</p>

  <div class="n-h1" id="s-change">When Somebody Joins, Leaves or Is Replaced</div>
  <p class="n-p">This is the most common question shape in the topic, and it has one idea behind all three versions: <strong>work with the change in the total</strong>.</p>

  <div class="n-h2">Replacement</div>
  <p class="n-p">A group of n people has one member swapped for another. Only that one value changed, so the change in the total is exactly the difference between the two values. Since the total is the average times n:</p>
  <div class="n-formula">(new value) − (old value) = <span class="n-val">n × (change in average)</span></div>
  <p class="n-p">This is why the count is always given in these questions and why the individual values of everyone else never are: they cancel.</p>

  <div class="n-h2">Adding a new member</div>
  <p class="n-p">Now the count goes from n to n + 1. The newcomer has to supply their own share of the new average, plus enough extra to lift all n existing members up to it:</p>
  <div class="n-formula">new value = <span class="n-val">new average + n × (new average − old average)</span></div>
  <p class="n-p">Reading that in words is the fastest way to keep it: <em>the new arrival is worth the new average, plus n times however much they raised it</em>.</p>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>The sign tells you the story.</strong> If the average goes up, the newcomer is above average and the change is positive. If it goes down, they are below. Before committing to a number, check that its direction matches: a "new member raised the average" question that produces a value below the old average has gone wrong somewhere, and the check costs nothing.</div></div>

  <div class="n-h1" id="s-weighted">Combining Two Groups</div>
  <p class="n-p">Two groups of different sizes cannot have their averages averaged. Convert both to totals, add, and divide by the combined count:</p>
  <div class="n-formula">Combined average = <span class="n-val">(n₁a₁ + n₂a₂) / (n₁ + n₂)</span></div>
  <p class="n-p">The weights are the <strong>counts</strong>, not the averages. Take 30 boys averaging 12 years and 20 girls averaging 17. The combined average is (30×12 + 20×17)/50 = 700/50 = <span class="n-val">14 years</span>, not (12+17)/2 = 14.5. The answer sits nearer 12 because there are more boys, and it always leans towards the larger group.</p>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>The ordinary average of the two averages is only correct when the two groups are the same size.</strong> That special case is exactly why the mistake survives: it works often enough to feel right. Both wrong answers are normally offered as options, and the one that leans towards the bigger group is the correct one.</div></div>

  <div class="n-h1" id="s-speed">Average Speed, Which Is Not an Average of Speeds</div>
  <p class="n-p">A man covers a distance at x kmph and an equal distance at y kmph. Because the legs are equal in <strong>distance</strong> and not in time, he spends longer on the slow leg, so the slow speed carries more weight:</p>
  <div class="n-formula">Average speed = <span class="n-val">2xy / (x + y)</span></div>
  <p class="n-p">Derived from the definition rather than assumed. Each leg is d, so the times are d/x and d/y and the total distance is 2d:</p>
  <div class="n-formula">2d / (d/x + d/y) = 2d / [d(x + y)/xy] = <span class="n-val">2xy / (x + y)</span></div>
  <p class="n-p">The distance cancels, which is why the answer depends only on the two speeds. At 60 and 40 kmph this gives <span class="n-val">48 kmph</span>, not 50. It is always below the ordinary average, and equal to it only when the two speeds are the same.</p>
  <p class="n-p">Change the word "distance" to "time" and the answer changes completely: equal <em>times</em> at x and y give the ordinary average <span class="n-val">(x + y)/2</span>, because the distances then scale with the speeds. Covered in full in <strong>A02 Time and Distance</strong>.</p>

  <div class="n-h1" id="s-summary">Formula Summary</div>
  <table class="n-table">
    <tr><th>Situation</th><th>Result</th><th>Why</th></tr>
    <tr><td>Definition</td><td><span class="n-val">Sum / Number</span></td><td>Use it as Sum = Average × Number</td></tr>
    <tr><td>Evenly spaced run</td><td><span class="n-val">(first + last) / 2</span></td><td>Values above and below the centre cancel</td></tr>
    <tr><td>First n naturals</td><td><span class="n-val">(n + 1) / 2</span></td><td>The row above, with first 1 and last n</td></tr>
    <tr><td>One member replaced</td><td>diff = <span class="n-val">n × change in average</span></td><td>Everyone else cancels out of the total</td></tr>
    <tr><td>One member added</td><td><span class="n-val">new avg + n(new avg − old avg)</span></td><td>Their own share, plus lifting the other n</td></tr>
    <tr><td>Two groups combined</td><td><span class="n-val">(n₁a₁ + n₂a₂)/(n₁ + n₂)</span></td><td>Weighted by counts, never by averages</td></tr>
    <tr><td>Equal distances at x and y</td><td><span class="n-val">2xy / (x + y)</span></td><td>Longer is spent at the slower speed</td></tr>
    <tr><td>Equal times at x and y</td><td><span class="n-val">(x + y) / 2</span></td><td>Distances scale with the speeds</td></tr>
  </table>

  <div class="n-h1" id="s-worked">Worked Examples</div>

  <div class="n-h2">1. Working through the total</div>
  <p class="n-p">The average of 5 numbers is 27. If one number is removed the average of the rest is 25. Find the removed number.</p>
  <p class="n-p">Total before = 27 × 5 = 135. Total after = 25 × 4 = 100. The removed number is 135 − 100 = <span class="n-val">35</span>. Converting to totals turns the whole question into one subtraction.</p>

  <div class="n-h2">2. Replacement</div>
  <p class="n-p">The average weight of 8 men increases by 2.5 kg when a new man replaces one weighing 65 kg. Find the new man's weight.</p>
  <p class="n-p">The total rose by 8 × 2.5 = 20 kg, and only one value changed, so the new man is 65 + 20 = <span class="n-val">85 kg</span>. Nobody else's weight is needed, or given.</p>

  <div class="n-h2">3. Adding a member</div>
  <p class="n-p">The average age of 10 students is 15. A teacher joins and the average becomes 16. Find the teacher's age.</p>
  <p class="n-p">Using the formula: 16 + 10 × (16 − 15) = <span class="n-val">26</span>. Checking through totals: 10 × 15 = 150 before, 11 × 16 = 176 after, and 176 − 150 = 26. The direction is right, since the average rose and 26 is above it.</p>

  <div class="n-h2">4. Combining groups</div>
  <p class="n-p">A class has 30 boys averaging 12 years and 20 girls averaging 17. Find the class average.</p>
  <p class="n-p">(30 × 12 + 20 × 17)/50 = (360 + 340)/50 = 700/50 = <span class="n-val">14 years</span>. It leans towards 12 because the boys outnumber the girls, and 14.5 is the trap.</p>

  <div class="n-h2">5. A run of consecutive numbers</div>
  <p class="n-p">Find the average of the first 100 natural numbers, and of the even numbers from 2 to 40.</p>
  <p class="n-p">First 100 naturals: (100 + 1)/2 = <span class="n-val">50.5</span>. The evens 2 to 40 are evenly spaced, so (2 + 40)/2 = <span class="n-val">21</span>. Neither needs a sum to be computed.</p>

  <div class="n-h2">6. Average speed</div>
  <p class="n-p">A man drives to a town at 60 kmph and returns along the same road at 40 kmph. Find his average speed.</p>
  <p class="n-p">Equal distances, so 2 × 60 × 40 / 100 = <span class="n-val">48 kmph</span>. Confirming from the definition with a 120 km leg: 2 hours out, 3 hours back, 240 km in 5 hours, which is 48.</p>

  <div class="n-h1" id="s-traps">Traps That Cost Marks</div>
  <table class="n-table">
    <tr><th>Trap</th><th>What goes wrong</th><th>Guard</th></tr>
    <tr><td>Averaging two averages</td><td>Ignoring that the groups differ in size</td><td>Weight by the counts; the answer leans to the bigger group</td></tr>
    <tr><td>Averaging two speeds</td><td>Using (x+y)/2 for equal distances</td><td>Ask whether distance or time is equal</td></tr>
    <tr><td>Forgetting the count changes</td><td>Dividing by n when a member was added</td><td>Adding makes it n + 1, removing makes it n − 1</td></tr>
    <tr><td>Working in averages</td><td>Adding or subtracting averages directly</td><td>Convert to totals, work there, convert back once</td></tr>
    <tr><td>Sign of the change</td><td>A newcomer below average said to have raised it</td><td>Check the direction before committing</td></tr>
  </table>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>If you remember one thing.</strong> <span class="n-val">Sum = Average × Number.</span> Turn every average in the question into a total, do the arithmetic on totals where addition and subtraction actually work, and divide once at the very end. Most of the traps above exist only because somebody tried to stay in averages the whole way through.</div></div>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('A13')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the A13 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

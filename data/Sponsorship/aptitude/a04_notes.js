window.loadNotes("A04", `<div class="view" id="view-notes-a04">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('aptitude')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('A04')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>A04 - Time and Work</h1>
    <div class="sub">Aptitude Test Preparation · Quantitative · Difficulty ★★☆☆☆ · Study Time 35-45 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-rate')">Work Rate</button>
    <button class="anc-btn" onclick="jumpTo('s-ratio')">Efficiency Ratios</button>
    <button class="anc-btn" onclick="jumpTo('s-together')">Working Together</button>
    <button class="anc-btn" onclick="jumpTo('s-pipes')">Pipes and Negative Work</button>
    <button class="anc-btn" onclick="jumpTo('s-wages')">Wages</button>
    <button class="anc-btn" onclick="jumpTo('s-summary')">Formula Summary</button>
    <button class="anc-btn" onclick="jumpTo('s-worked')">Worked Examples</button>
    <button class="anc-btn" onclick="jumpTo('s-traps')">Traps</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to convert freely between "days to finish" and "work done per day", explain why efficiency and time are inverse, derive the combined time for two or more workers rather than recalling it, handle a leak or an outlet pipe as negative work, and split wages correctly. The whole topic rests on one substitution, so it is short and it repays getting the first idea exactly right.</p>

  <div class="n-h1" id="s-rate">The One Substitution: Work Per Day</div>
  <p class="n-p">Days taken cannot be added. If A takes 10 days and B takes 15, they do not together take 25 days, or 12.5, and any attempt to combine the day figures directly gives nonsense. Rates can be added, so convert to rates first and everything follows.</p>
  <p class="n-p">Treat the whole job as <strong>1 unit of work</strong>. Then:</p>
  <div class="n-formula">If A finishes in n days, A's one day's work = <span class="n-val">1/n</span></div>
  <p class="n-p">And read backwards, which is how half the questions are set:</p>
  <div class="n-formula">If A's one day's work = <span class="n-val">1/n</span>, then A finishes in <span class="n-val">n</span> days</div>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Why "1 unit" is safe.</strong> The size of the job never appears in the answer, because every rate is a fraction <em>of the same job</em> and the job cancels out. Calling it 1 is the simplest choice. If fractions become awkward, call the job the <strong>LCM of the given days</strong> instead: for 10 and 15 days, call it 30 units, so A does 3 units a day and B does 2. Same answer, whole numbers throughout.</div></div>

  <div class="n-h1" id="s-ratio">Efficiency and Time Are Inverse</div>
  <p class="n-p">"A is thrice as good a workman as B" is a statement about <strong>rate</strong>, not about time. A does three times as much per day, so A needs a third of the time.</p>
  <div class="n-formula">Work ratio A : B = <span class="n-val">3 : 1</span> &nbsp;&nbsp;⟹&nbsp;&nbsp; Time ratio A : B = <span class="n-val">1 : 3</span></div>
  <p class="n-p">This is the same inverse relationship as speed and time in <strong>A02</strong>, for the same reason: the job is fixed, so doing more per day means finishing sooner.</p>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>The ratio flips, and the check is always available.</strong> Whichever worker is better must have the <em>smaller</em> time. If your time ratio makes the faster worker take longer, it is written the wrong way round. This single check catches most errors in the topic before any arithmetic happens.</div></div>

  <div class="n-h1" id="s-together">Working Together, Derived</div>
  <p class="n-p">If A finishes in a days and B in b days, their daily rates are 1/a and 1/b. Working together they complete the sum of their rates each day:</p>
  <div class="n-formula">Combined rate = <span class="n-val">1/a + 1/b</span> = (a + b) / ab</div>
  <p class="n-p">Time taken is one job divided by that rate, which inverts it:</p>
  <div class="n-formula">Time together = <span class="n-val">ab / (a + b)</span></div>
  <p class="n-p">For three or more, do not look for a bigger formula. Add all the rates and invert:</p>
  <div class="n-formula">Time = 1 / (<span class="n-val">1/a + 1/b + 1/c</span>)</div>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Sanity check that catches a wrong answer instantly.</strong> Two people working together must finish <span class="n-val">faster than either alone</span>. If A takes 12 days and B takes 18, the answer must be under 12. It is 7.2 days. Any answer above 12, and certainly anything near 30, means the days were added instead of the rates.</div></div>

  <p class="n-p">The same idea run backwards answers the common "find B alone" question. If A and B together take 6 days and A alone takes 10, then B's rate is the difference of the rates, not of the days:</p>
  <div class="n-formula">1/B = 1/6 − 1/10 = (5 − 3)/30 = 2/30 &nbsp;&nbsp;⟹&nbsp;&nbsp; B = <span class="n-val">15 days</span></div>

  <div class="n-h1" id="s-pipes">Pipes, Cisterns and Negative Work</div>
  <p class="n-p">A pipe filling a tank is doing work. A leak or an outlet pipe is doing the same work with a <strong>minus sign</strong>, and no new mathematics is needed.</p>
  <p class="n-p">If an inlet fills in 10 hours and a leak empties in 15 hours, the net rate is:</p>
  <div class="n-formula">1/10 − 1/15 = (3 − 2)/30 = 1/30 &nbsp;&nbsp;⟹&nbsp;&nbsp; <span class="n-val">30 hours</span> to fill</div>
  <p class="n-p">Note how badly the leak hurts: a tank that filled in 10 hours now takes 30. If the emptying pipe were <em>faster</em> than the filling pipe, the net rate would be negative, which correctly means the tank never fills at all and instead drains.</p>

  <div class="n-h1" id="s-wages">Wages</div>
  <p class="n-p">Wages are shared in the ratio of <strong>work done</strong>, which means the ratio of rates, not of days. This is the most common place the inverse relationship is forgotten.</p>
  <p class="n-p">If A finishes in 6 days and B in 12, their rates are 1/6 and 1/12, which is <span class="n-val">2 : 1</span>. A takes two thirds of the money, not one third. Splitting 6 : 12 in favour of B would pay the slower worker more, which the question is testing you to notice.</p>

  <div class="n-h1" id="s-summary">Formula Summary</div>
  <table class="n-table">
    <tr><th>Situation</th><th>Result</th><th>Why</th></tr>
    <tr><td>A finishes in n days</td><td>rate = <span class="n-val">1/n</span></td><td>The job is 1 unit</td></tr>
    <tr><td>A is k times as good as B</td><td>times in <span class="n-val">1 : k</span></td><td>Fixed job, so time goes as 1/rate</td></tr>
    <tr><td>A and B together</td><td><span class="n-val">ab / (a + b)</span></td><td>Rates add, then invert</td></tr>
    <tr><td>Three or more together</td><td><span class="n-val">1 / (1/a + 1/b + 1/c)</span></td><td>Same rule, more terms</td></tr>
    <tr><td>B alone, from A and the pair</td><td>1/B = <span class="n-val">1/together − 1/A</span></td><td>Subtract rates, never days</td></tr>
    <tr><td>Leak or outlet pipe</td><td>subtract its rate</td><td>Negative work, same algebra</td></tr>
    <tr><td>Wage split</td><td>ratio of <span class="n-val">rates</span></td><td>Pay follows work done, not days spent</td></tr>
  </table>

  <div class="n-h1" id="s-worked">Worked Examples</div>

  <div class="n-h2">1. Two working together</div>
  <p class="n-p">A can do a job in 12 days and B in 18. How long together?</p>
  <p class="n-p">Rates are 1/12 and 1/18. Combined = (3 + 2)/36 = 5/36 per day, so time = <span class="n-val">36/5 = 7.2 days</span>. It is under 12, as it must be.</p>

  <div class="n-h2">2. Using LCM units instead of fractions</div>
  <p class="n-p">Same question, worked without fractions. Call the job LCM(12, 18) = 36 units. A does 3 units a day, B does 2, together 5. Time = 36/5 = <span class="n-val">7.2 days</span>. Identical answer, no fraction arithmetic.</p>

  <div class="n-h2">3. Finding the second worker</div>
  <p class="n-p">A and B together finish in 6 days; A alone takes 10. How long does B alone take?</p>
  <p class="n-p">1/B = 1/6 − 1/10 = 2/30 = 1/15, so B takes <span class="n-val">15 days</span>. Subtracting the days (10 − 6 = 4) is the classic wrong answer and is always offered as an option.</p>

  <div class="n-h2">4. Three workers</div>
  <p class="n-p">A, B and C take 10, 15 and 30 days respectively. Together?</p>
  <p class="n-p">1/10 + 1/15 + 1/30 = (3 + 2 + 1)/30 = 6/30 = 1/5, so <span class="n-val">5 days</span>. Adding rates scales to any number of workers without a new formula.</p>

  <div class="n-h2">5. Efficiency stated as a ratio</div>
  <p class="n-p">A is twice as efficient as B and together they finish in 8 days. How long does B take alone?</p>
  <p class="n-p">Let B's rate be r, so A's is 2r and the pair does 3r per day. Three times B's rate finishes in 8 days, so B alone needs <span class="n-val">24 days</span>, and A alone needs 12.</p>

  <div class="n-h2">6. A cistern with a leak</div>
  <p class="n-p">A pipe fills a tank in 10 hours. A leak empties the full tank in 15 hours. With both open, how long to fill?</p>
  <p class="n-p">Net rate = 1/10 − 1/15 = 1/30, so <span class="n-val">30 hours</span>. The leak triples the filling time even though it is slower than the inlet.</p>

  <div class="n-h2">7. Wages</div>
  <p class="n-p">A can do a job in 6 days, B in 12. Working together they are paid 900 in total. What is A's share?</p>
  <p class="n-p">Rates 1/6 and 1/12 give the ratio <span class="n-val">2 : 1</span>. A's share = 900 × 2/3 = <span class="n-val">600</span>. Splitting in the ratio of days would give A only 300 and pay the slower worker double, which is the trap.</p>

  <div class="n-h1" id="s-traps">Traps That Cost Marks</div>
  <table class="n-table">
    <tr><th>Trap</th><th>What goes wrong</th><th>Guard</th></tr>
    <tr><td>Adding days</td><td>10 + 15 = 25 days together</td><td>Days never add; convert to rates first</td></tr>
    <tr><td>Subtracting days</td><td>B = 10 − 6 = 4 days</td><td>Subtract the rates, then invert</td></tr>
    <tr><td>Efficiency ratio used directly as time</td><td>Thrice as good written as 3 : 1 in time</td><td>Better worker must have the smaller time</td></tr>
    <tr><td>Wages split by days</td><td>Paying the slower worker more</td><td>Wages follow rates, so invert the days first</td></tr>
    <tr><td>Leak added instead of subtracted</td><td>Tank fills faster with a leak</td><td>An emptying pipe is a negative rate</td></tr>
    <tr><td>Answer slower than one worker alone</td><td>Combined time above the smaller of the two</td><td>Together must always beat either alone</td></tr>
  </table>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>If you remember one thing.</strong> <span class="n-val">Convert days into work per day, add or subtract the rates, then invert at the end.</span> Every formula in this module is that sentence applied once. If fractions get messy, set the job to the LCM of the given days and work in whole units instead.</div></div>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('A04')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the A04 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

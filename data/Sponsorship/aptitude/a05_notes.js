window.loadNotes("A05", `<div class="view" id="view-notes-a05">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('aptitude')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('A05')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>A05 - Simple Interest</h1>
    <div class="sub">Aptitude Test Preparation · Quantitative · Difficulty ★★☆☆☆ · Study Time 30-40 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-terms')">The Four Terms</button>
    <button class="anc-btn" onclick="jumpTo('s-formula')">The Formula</button>
    <button class="anc-btn" onclick="jumpTo('s-rearrange')">Rearranging It</button>
    <button class="anc-btn" onclick="jumpTo('s-multiples')">Doubling and Tripling</button>
    <button class="anc-btn" onclick="jumpTo('s-summary')">Formula Summary</button>
    <button class="anc-btn" onclick="jumpTo('s-worked')">Worked Examples</button>
    <button class="anc-btn" onclick="jumpTo('s-traps')">Traps</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to state what principal, rate, time and amount mean, write the simple interest formula and rearrange it for any of the four quantities, recognise that simple interest grows in a straight line while compound interest does not, and use the doubling and tripling shortcuts without deriving them each time.</p>

  <div class="n-h1" id="s-terms">The Four Terms</div>
  <table class="n-table">
    <tr><th>Term</th><th>Symbol</th><th>Meaning</th></tr>
    <tr><td><strong>Principal</strong></td><td>P</td><td>The money borrowed or lent, also called the sum</td></tr>
    <tr><td><strong>Rate</strong></td><td>R</td><td>Percent per annum, so a rate of 8 means 8% each year</td></tr>
    <tr><td><strong>Time</strong></td><td>T</td><td>In years, which is what "per annum" requires</td></tr>
    <tr><td><strong>Amount</strong></td><td>A</td><td>What is finally repaid, <span class="n-val">A = P + SI</span></td></tr>
  </table>
  <p class="n-p"><strong>Interest</strong> is the extra money paid for the use of someone else's money. It is called <strong>simple</strong> when it is reckoned uniformly, meaning it is always calculated on the original principal and never on interest already earned. That last clause is the entire difference from compound interest.</p>

  <div class="n-h1" id="s-formula">The Formula, and Why It Looks Like That</div>
  <p class="n-p">A rate of R percent per annum means each year the lender earns R hundredths of the principal, which is <span class="n-val">P × R/100</span>. Over T years, and because nothing ever compounds, that same yearly amount simply repeats T times:</p>
  <div class="n-formula">SI = <span class="n-val">P × R × T / 100</span></div>
  <p class="n-p">The 100 is not a mysterious constant. It is there only because R is quoted as a percentage rather than as a decimal fraction. If you preferred to write the rate as 0.08 instead of 8, the formula would be SI = P × r × T with no hundred in sight.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Simple interest is a straight line.</strong> Because the interest each year is always the same figure, the total grows in equal steps: the same money at 10% for two years earns exactly twice what it earns in one year. This is the property every shortcut in this module depends on, and it is exactly what fails once interest starts compounding.</div></div>

  <div class="n-h1" id="s-rearrange">Rearranging for Any Unknown</div>
  <p class="n-p">The exam rarely asks for the interest. It gives you three of the four quantities and asks for the fourth, so be fluent in all three rearrangements:</p>
  <div class="n-formula">P = <span class="n-val">100 × SI / (R × T)</span> &nbsp;&nbsp;&nbsp; R = <span class="n-val">100 × SI / (P × T)</span> &nbsp;&nbsp;&nbsp; T = <span class="n-val">100 × SI / (P × R)</span></div>
  <p class="n-p">All three are the same equation with a different letter isolated. Rather than memorising them as separate facts, write SI = PRT/100, multiply both sides by 100, then divide by whatever multiplies the unknown.</p>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Watch for the amount being given instead of the interest.</strong> A question that says "a sum becomes 1240 in 3 years" is giving you the <span class="n-val">amount</span>, not the interest. The interest is A − P, and substituting 1240 straight into the formula as SI is the most common single error in this topic. Time in months must also be converted: 9 months is <span class="n-val">3/4 year</span>, not 9.</div></div>

  <div class="n-h1" id="s-multiples">When a Sum Doubles or Triples</div>
  <p class="n-p">A sum doubles when the interest earned equals the principal itself, so SI = P. Substituting:</p>
  <div class="n-formula">P = P × R × T / 100 &nbsp;&nbsp;⟹&nbsp;&nbsp; <span class="n-val">R × T = 100</span></div>
  <p class="n-p">The principal cancels, which is why these questions never tell you the sum: the answer does not depend on it. Tripling means the interest is twice the principal, so SI = 2P:</p>
  <div class="n-formula">Doubles: <span class="n-val">RT = 100</span> &nbsp;&nbsp;&nbsp;&nbsp; Triples: <span class="n-val">RT = 200</span> &nbsp;&nbsp;&nbsp;&nbsp; n times: <span class="n-val">RT = 100(n − 1)</span></div>
  <p class="n-p">So money at 10% simple interest doubles in 10 years and triples in 20. Note that tripling takes twice as long as doubling, not three times, because the first doubling already supplied one principal's worth of interest.</p>

  <div class="n-h1" id="s-summary">Formula Summary</div>
  <table class="n-table">
    <tr><th>Want</th><th>Formula</th><th>Note</th></tr>
    <tr><td>Interest</td><td><span class="n-val">SI = PRT/100</span></td><td>The one to remember; the rest are rearrangements</td></tr>
    <tr><td>Principal</td><td><span class="n-val">P = 100·SI/(RT)</span></td><td>&nbsp;</td></tr>
    <tr><td>Rate</td><td><span class="n-val">R = 100·SI/(PT)</span></td><td>&nbsp;</td></tr>
    <tr><td>Time</td><td><span class="n-val">T = 100·SI/(PR)</span></td><td>In years; convert months first</td></tr>
    <tr><td>Amount</td><td><span class="n-val">A = P + SI</span></td><td>Subtract P before using an amount as interest</td></tr>
    <tr><td>Sum becomes n times</td><td><span class="n-val">RT = 100(n − 1)</span></td><td>Principal cancels, so it is never needed</td></tr>
  </table>

  <div class="n-h1" id="s-worked">Worked Examples</div>

  <div class="n-h2">1. Straight substitution</div>
  <p class="n-p">Find the simple interest on 5000 at 8% per annum for 3 years, and the amount repayable.</p>
  <p class="n-p">SI = 5000 × 8 × 3 / 100 = <span class="n-val">1200</span>. Amount = 5000 + 1200 = <span class="n-val">6200</span>.</p>

  <div class="n-h2">2. Finding the rate</div>
  <p class="n-p">A sum of 4000 earns 720 in 3 years. Find the rate.</p>
  <p class="n-p">R = 100 × 720 / (4000 × 3) = 72000/12000 = <span class="n-val">6% per annum</span>.</p>

  <div class="n-h2">3. Amount given, not interest</div>
  <p class="n-p">A sum becomes 1240 in 3 years at 8% simple interest. Find the sum.</p>
  <p class="n-p">Here 1240 is the amount. In 3 years at 8%, the interest is 24% of the principal, so the amount is 124% of it. Therefore P = 1240 × 100/124 = <span class="n-val">1000</span>, and the interest was 240. Substituting 1240 as the interest would have given a principal of 5166, which is larger than the amount and is the check that catches the mistake.</p>

  <div class="n-h2">4. Two amounts, no principal given</div>
  <p class="n-p">A sum amounts to 1240 in 3 years and 1400 in 5 years at the same rate. Find the sum and the rate.</p>
  <p class="n-p">The extra 2 years added 1400 − 1240 = 160, so the interest is <span class="n-val">80 per year</span>. Working back 3 years from 1240 removes 240, giving P = <span class="n-val">1000</span>. Then R = 100 × 80 / (1000 × 1) = <span class="n-val">8%</span>. Subtracting the two amounts is the standard first move whenever two amounts at different times are quoted.</p>

  <div class="n-h2">5. Time in months</div>
  <p class="n-p">Find the interest on 7200 at 5% for 9 months.</p>
  <p class="n-p">9 months is 9/12 = 0.75 year. SI = 7200 × 5 × 0.75 / 100 = <span class="n-val">270</span>. Using T = 9 would give 3240, which is twelve times too big.</p>

  <div class="n-h2">6. Doubling</div>
  <p class="n-p">In how many years will a sum double itself at 12.5% simple interest?</p>
  <p class="n-p">RT = 100, so T = 100/12.5 = <span class="n-val">8 years</span>. The sum was never needed, and the same money would triple in 16 years.</p>

  <div class="n-h1" id="s-traps">Traps That Cost Marks</div>
  <table class="n-table">
    <tr><th>Trap</th><th>What goes wrong</th><th>Guard</th></tr>
    <tr><td>Amount used as interest</td><td>Substituting A where SI belongs</td><td>SI = A − P; interest is always smaller than the amount</td></tr>
    <tr><td>Months left unconverted</td><td>T = 6 for six months</td><td>Rate is per annum, so T must be in years</td></tr>
    <tr><td>Rate as a decimal and the 100 kept</td><td>Using 0.08 and still dividing by 100</td><td>Either R = 8 with /100, or r = 0.08 without it</td></tr>
    <tr><td>Tripling assumed to take 3x doubling</td><td>Answering 30 years where 20 is right</td><td>RT = 100(n − 1), so tripling is twice doubling</td></tr>
    <tr><td>Simple treated as compound</td><td>Applying growth to the accumulated total</td><td>Simple interest is always on the original principal</td></tr>
  </table>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>If you remember one thing.</strong> <span class="n-val">SI = PRT/100</span>, with T in years and SI meaning interest alone, never the amount. Every other formula here is that one rearranged, and every trap in the table above is one of those two conditions being broken.</div></div>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('A05')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the A05 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

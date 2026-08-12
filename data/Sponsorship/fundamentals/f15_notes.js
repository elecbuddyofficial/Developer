window.loadNotes("F15", `<div class="view" id="view-notes-f15">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F15')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F15 - Insulation Testing</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 15 of 25 · Difficulty ★★★☆☆ · Study Time 50-70 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-what')">What IR Is</button>
    <button class="anc-btn" onclick="jumpTo('s-megger')">The Megger</button>
    <button class="anc-btn" onclick="jumpTo('s-voltages')">Test Voltages</button>
    <button class="anc-btn" onclick="jumpTo('s-acceptable')">Acceptable Values</button>
    <button class="anc-btn" onclick="jumpTo('s-pi')">Polarization Index</button>
    <button class="anc-btn" onclick="jumpTo('s-dar')">DAR</button>
    <button class="anc-btn" onclick="jumpTo('s-terminals')">Which Terminals</button>
    <button class="anc-btn" onclick="jumpTo('s-safety')">Safety Practice</button>
    <button class="anc-btn" onclick="jumpTo('s-recovery')">Link to F12</button>
    <button class="anc-btn" onclick="jumpTo('s-interview')">Interview Answers</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to explain what insulation resistance physically is and name the four main ways it degrades over the life of a machine, explain how a megger generates and applies its test voltage and why that voltage is deliberately high and DC, state the test voltages used against equipment voltage class, quote and explain the classic one megohm per kV plus one rule alongside the modern flat-minimum figures, calculate and interpret Polarization Index and Dielectric Absorption Ratio and know what a low value of each is actually telling you about the winding, know which terminal pairs to test and what a failure on each one specifically points to, and describe the safety practice around isolating, discharging and testing a winding correctly.</p>

  <div class="n-h1" id="s-what">What Insulation Resistance Actually Is</div>
  <p class="n-p">Every winding in a motor, generator, cable or transformer is copper conductor wrapped in an insulating material, varnish, enamel, mica, resin or a synthetic film, whose entire job is to keep current inside the conductor and stop it finding a path to the earthed frame or to an adjacent winding. That insulation is never a perfect, infinite resistance. A tiny leakage current always flows through it and across its surface, and <strong>insulation resistance (IR)</strong> is simply the resistance that opposes that leakage, measured in megohms because it is normally a very large number when the insulation is healthy.</p>
  <div class="n-formula">IR = V<sub>test</sub> / I<sub>leakage</sub></div>
  <p class="n-p">IR is not fixed for the life of the machine. It falls over time, and it falls for a small number of well understood reasons, each of which leaves its own signature and is worth being able to name individually rather than lumping them all together as "the insulation got old."</p>

  <table class="n-table">
    <tr><th>Cause</th><th>What is actually happening</th></tr>
    <tr><td><strong>Moisture ingress</strong></td><td>Water, or worse, seawater, is absorbed into or condenses on the insulation surface. Water is a far better conductor than the insulating material itself, so it opens a parallel leakage path across and through the insulation. This is usually the largest, fastest-acting cause, and the one most likely to be tested on.</td></tr>
    <tr><td><strong>Dirt and contamination</strong></td><td>Carbon dust, oily film, salt deposits or general grime build up on the winding surface over years of service. A layer of contamination, especially one that has absorbed a trace of moisture from the air, provides a conductive surface path (a leakage track) across the insulation that was not there when the winding was clean.</td></tr>
    <tr><td><strong>Heat aging (thermal degradation)</strong></td><td>Insulating varnish and resin are organic materials. Running consistently hot, or a series of overload events, slowly bakes and embrittles them, driving off the volatiles that keep them flexible. The material becomes brittle, cracks under vibration, and its resistance falls permanently. This is a one-way, cumulative process, not something that recovers with drying the way moisture does.</td></tr>
    <tr><td><strong>General age and mechanical degradation</strong></td><td>Thermal cycling, vibration and the sheer number of years in service gradually crack and abrade the insulation film even without a single dramatic event. A winding's IR trend over its life, tested and logged at intervals, is the real diagnostic tool: a slow, steady decline over years is normal aging: a sudden drop between two tests points to a specific event, most often moisture.</td></tr>
  </table>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Why the distinction matters.</strong> Moisture and surface contamination are both recoverable, drying or cleaning restores the IR. Heat aging and mechanical cracking are not recoverable by any on-board procedure, they represent real, permanent loss of insulating material. A single IR reading cannot tell you which of these you are looking at on its own, which is exactly why Polarization Index exists, covered later in this module.</div></div>

  <div class="n-h1" id="s-megger">The Megger: How an Insulation Resistance Tester Works</div>
  <p class="n-p">"Megger" is technically a trade name (from Megger Instruments), used the way "Hoover" is used for a vacuum cleaner, but it has become the generic term on board for any insulation resistance tester.</p>

  <div class="n-h2">What it does</div>
  <p class="n-p">A megger generates a stabilised, well-regulated DC test voltage, historically by hand-cranking a small generator, today almost always electronically from a battery, and applies that voltage across the insulation under test, between a winding and earth, or between two windings. It then measures the tiny leakage current that flows through the insulation as a result, and computes the resistance directly from Ohm's law, displaying the result straight in megohms.</p>
  <div class="n-formula">IR (MΩ) = V<sub>test</sub> (V) / I<sub>leakage</sub> (µA) × 1,000,000</div>

  <div class="n-h2">Why a high DC voltage, not a low-voltage ohmmeter reading</div>
  <p class="n-p">An ordinary multimeter on its resistance range could technically put some voltage across a winding and show a number, so the question worth being able to answer properly is why that is not what is actually done.</p>
  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Say this in the interview.</strong> The megger deliberately applies a high DC voltage, hundreds to thousands of volts, because that stresses the insulation the way it will actually be stressed in service, at or above its rated working voltage, and reveals weaknesses a gentle low-voltage ohmmeter reading would never uncover. A hairline crack, a thin contaminated track, or a moisture-bridged weak spot may show a perfectly normal resistance at a couple of volts because the leakage path has not yet been driven into conduction, but the same weak spot breaks down or leaks heavily once several hundred volts is pushed across it. The test has to reproduce the electrical stress the insulation actually sees, not a token current.</div></div>
  <p class="n-p">The reason the test voltage is <strong>DC</strong> rather than AC is equally deliberate: a DC voltage lets the meter separate genuine resistive leakage current from the capacitive charging current that a winding, which is effectively a large capacitor relative to earth, always draws for the first few seconds after voltage is applied. On AC the capacitive current would never settle out and would swamp the resistive leakage reading. A steady DC test voltage lets the charging current decay away and leaves a stable, meaningful leakage current to measure, which is also exactly the mechanism that makes Polarization Index possible later in this module.</p>

  <div class="n-h1" id="s-voltages">Test Voltages by Equipment Class</div>
  <p class="n-p">The test voltage is not picked at random, it is matched to the equipment's own rated voltage, following the same logic just covered: test at a voltage that genuinely stresses the insulation without being needlessly severe on gear that was never designed for it. IEEE 43 sets out the conventional bands, and although it is an IEEE standard rather than a SOLAS or class requirement, its voltage bands are the ones in near-universal practical use, ashore and at sea:</p>

  <table class="n-table">
    <tr><th>Equipment rated voltage</th><th>Typical DC test voltage</th></tr>
    <tr><td>Below 1 kV (most ship's 220/440/690V motors, lighting and small power circuits)</td><td><span class="n-val">500 V DC</span></td></tr>
    <tr><td>1 kV to 2.5 kV</td><td><span class="n-val">1000 V DC</span></td></tr>
    <tr><td>2.5 kV to 5 kV (high voltage ship's plant, e.g. 3.3 kV or 6.6 kV motors and generators)</td><td><span class="n-val">2500 V DC</span></td></tr>
    <tr><td>Above 5 kV</td><td><span class="n-val">5000 V DC</span></td></tr>
  </table>
  <p class="n-p">On the vast majority of ships, where the distribution is 440V or 690V, the everyday megger in the electrical workshop is a 500V or 500/1000V instrument, and that is what will be reached for on almost every practical question. High voltage installations, some larger vessels running 3.3kV or 6.6kV generation and propulsion motors, need the higher test voltages above, and testing them is usually a job for specialist HV test equipment and a permit to work, not the everyday hand-held megger.</p>

  <div class="n-h1" id="s-acceptable">Acceptable Insulation Resistance Values</div>
  <p class="n-p">Two different figures show up in the literature for what counts as a passing IR, and it is worth knowing both exist and where each comes from, rather than quoting one as universally correct. This is the same point made in F12's recovery section, restated here because it is central to this whole module rather than a side note.</p>

  <div class="n-h2">The traditional rule: one megohm per kV, plus one</div>
  <p class="n-p">The older, still widely quoted rule of thumb for a minimum acceptable IR, tested at the appropriate voltage and corrected to roughly 20°C, is:</p>
  <div class="n-formula">IR<sub>min</sub> (MΩ) = kV<sub>rated</sub> + 1</div>
  <p class="n-p">So a machine rated at 440V (0.44kV) should show at least roughly 1.44MΩ, and a 6.6kV HV motor should show at least roughly 7.6MΩ, as an absolute floor below which the machine should not be considered fit to energise. It is a simple, memorable rule, and it remains genuinely useful as a quick sanity check, but it was never meant to be the last word on a specific machine's condition.</p>

  <div class="n-h2">The modern rule: IEEE 43 flat minimums</div>
  <p class="n-p">IEEE 43-2000 (and its later revisions) moved away from the per-kV formula for most machines and instead specifies flat minimum IR values, corrected to 40°C, that do not scale with voltage at all:</p>
  <table class="n-table">
    <tr><th>Winding type</th><th>Minimum IR (at 40°C)</th></tr>
    <tr><td>Random-wound, low voltage stator or armature windings</td><td><span class="n-val">5 MΩ</span></td></tr>
    <tr><td>Form-wound windings (larger, high voltage machines)</td><td><span class="n-val">100 MΩ</span></td></tr>
  </table>
  <p class="n-p">Either rule gives only a bare floor for whether a machine may safely be energised at all, not a statement of good health. A healthy, dry, clean modern winding routinely reads in the hundreds or thousands of megohms, far above either minimum. The number that actually matters in practice is the <strong>trend for that specific machine</strong>, compared against its own historical readings, not a generic pass mark. A motor that has always read 2000MΩ and now reads 40MΩ has a real problem, even though 40MΩ comfortably clears both minimums above.</p>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>The trap.</strong> Do not present the per-kV rule and the IEEE flat minimums as if they are two ways of getting the same answer, they can diverge significantly, especially on higher voltage machines. Know both exist, know the flat minimums are the more modern IEEE 43 position, and know that a single IR reading against either one is a floor, not a health check, on its own.</div></div>

  <div class="n-h1" id="s-pi">Polarization Index (PI)</div>
  <p class="n-p">A single IR reading is a snapshot. Two readings taken minutes apart on the same test, without disconnecting anything, turn that snapshot into a trend, and that trend is far more diagnostic than either reading alone. This is the real reason a megger test is left running rather than read the instant the needle settles.</p>

  <div class="n-h2">Why the reading climbs with time in the first place</div>
  <p class="n-p">When DC voltage is first applied to a winding, the current flowing has three components: a brief capacitive charging current that decays away in the first second or two (the winding acting as a capacitor), a genuine resistive leakage current that stays roughly constant, and a slower "absorption" current caused by polar molecules within the insulating material gradually aligning themselves with the applied field, called dielectric absorption. That third component decays away much more slowly, over minutes rather than seconds. As total current falls while voltage is held constant, the calculated resistance (V over I) climbs. In a clean, dry winding this rise continues steadily out to ten minutes and beyond. In a wet or contaminated winding, the resistive leakage current is large and roughly constant from the start, and it swamps the slow absorption effect, so the reading barely climbs at all.</p>

  <div class="n-formula">PI = IR at 10 minutes / IR at 1 minute</div>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>What PI is actually telling you.</strong> PI is not a second measurement of resistance, it is a measurement of how much the resistance climbs. A clean, dry winding's genuine dielectric absorption keeps building for the full ten minutes, so the 10-minute reading is substantially higher than the 1-minute reading and PI is high. Moisture or heavy contamination provides a steady conductive leakage path that dominates the current from the very first second, absorption effects barely register against it, and the 10-minute reading is barely different from the 1-minute reading, so PI sits close to 1.0. A low PI is specifically a moisture/contamination signature, distinct from a simple low absolute IR value.</div></div>

  <p class="n-p">IEEE 43 gives minimum acceptable PI values by insulation class: <span class="n-val">1.5</span> for Class A insulation, and <span class="n-val">2.0</span> for Class B, F and H insulation, which covers the great majority of modern marine motors and generators. A commonly used interpretation band, useful for talking through what a given PI figure means rather than just pass/fail, is:</p>
  <table class="n-table">
    <tr><th>PI value</th><th>Interpretation</th></tr>
    <tr><td>Below 1.0</td><td>Questionable, resistance actually falling with time. Strong indicator of significant moisture, contamination or serious insulation deterioration.</td></tr>
    <tr><td>1.0 to 2.0</td><td>Marginal. Below the IEEE 43 minimum for Class B/F/H insulation; investigate, dry or clean before returning to service.</td></tr>
    <tr><td>2.0 to 4.0</td><td>Good, normal range for a healthy modern winding.</td></tr>
    <tr><td>Above 4.0</td><td>Excellent. Very clean, dry insulation with strong dielectric absorption.</td></tr>
  </table>
  <p class="n-p">One genuine limitation worth knowing: if the 1-minute IR reading is already extremely high, in the thousands of megohms, PI stops being a meaningful diagnostic, since there is so little leakage current to begin with that the ratio can swing on measurement noise rather than real absorption behaviour. In that situation the absolute IR value and its trend over successive tests matter more than the PI figure from a single test.</p>

  <div class="n-h1" id="s-dar">Dielectric Absorption Ratio (DAR)</div>
  <p class="n-p">DAR is the short-duration relative of PI, useful when a full ten-minute test is impractical, or on smaller machines where a full PI test is not standard practice:</p>
  <div class="n-formula">DAR = IR at 60 seconds / IR at 30 seconds</div>
  <p class="n-p">It works on exactly the same underlying principle as PI, dielectric absorption still building through the first minute, moisture and contamination still swamping it if present, just compressed into a much shorter window. A widely used interpretation band is DAR below 1.0 indicating bad or contaminated insulation, 1.0 to 1.25 questionable, 1.25 to 1.6 good, and above 1.6 excellent, though these bands are less rigidly standardised than the PI figures IEEE 43 sets out, and DAR should be treated as a quicker, rougher indicator rather than a substitute for a full PI test where time allows one.</p>
  <p class="n-p">The two are not interchangeable readings of the same thing; DAR trades some diagnostic power for speed, and on a genuinely borderline winding, running the full ten minutes for PI is the more reliable call.</p>

  <div class="n-h1" id="s-terminals">Which Terminals to Test Between</div>
  <p class="n-p">A three-phase winding gives more than one meaningful pair of terminals to test between, and which one fails is itself diagnostic, not just whether the machine passes overall.</p>
  <table class="n-table">
    <tr><th>Test</th><th>What it checks</th><th>What a low reading specifically suggests</th></tr>
    <tr><td><strong>Each phase to earth</strong> (U-E, V-E, W-E)</td><td>Breakdown of the main insulation between a winding and the earthed frame/core</td><td>Insulation to frame has broken down, most commonly from moisture, contamination or aged/cracked main wall insulation. This is the fault an earth fault relay (F12) is built to catch once the machine is running.</td></tr>
    <tr><td><strong>Phase to phase</strong> (U-V, V-W, W-U)</td><td>Breakdown of the interwinding insulation between two separate phase windings</td><td>An interwinding, or turn to turn near the phase boundary, breakdown. This points at the winding insulation itself rather than the path to the frame, and is generally the more serious finding since it usually means physical damage within the winding rather than surface contamination.</td></tr>
  </table>
  <p class="n-p">In practice all phases are shorted together and tested to earth as a single combined reading for a quick pass/fail check, then, if time and the situation warrant it, tested individually phase to earth and phase to phase to localise a suspect result. On a machine that fails the combined test, going to the individual pairs is exactly how the fault gets narrowed down before deciding whether it is a drying job or a rewind job.</p>

  <div class="n-h1" id="s-safety">Safety Practice</div>
  <div class="n-steps">
    <p class="n-p">1. <strong>Isolate and prove dead first.</strong> Standard electrical safety practice in full, lock off the supply before connecting any test leads. A megger applies its own separate test voltage, but the circuit must still be confirmed dead of the normal supply before work begins.</p>
    <p class="n-p">2. <strong>Discharge the winding before testing.</strong> Any residual charge left on the winding from previous testing or from the machine's own operation should be bled off to earth before applying a fresh test voltage, so the reading being taken is a clean one and not distorted by leftover charge.</p>
    <p class="n-p">3. <strong>Discharge the winding after testing too, and this is the step people forget.</strong> A winding behaves as a capacitor, and the megger's own test voltage charges it up over the course of the test. At the end of a test at, say, 500V or more, that capacitive charge is still sitting on the winding even after the test instrument is switched off and disconnected. Touching the terminals at that point can deliver a real and unpleasant electric shock from a machine that is nominally isolated and "off." The winding must be deliberately discharged to earth, most meggers have a discharge function or a dedicated discharge lead for exactly this, and held discharged for a period before anyone works on the terminals.</p>
    <p class="n-p">4. <strong>Disconnect other connected equipment before testing.</strong> Where practical, isolate the winding from anything else wired to it, VFDs, surge capacitors, other parallel cables, since the test voltage will also be applied to them and can damage sensitive electronics not rated for it.</p>
    <p class="n-p">5. <strong>Never megger a winding known or suspected to be wet at full test voltage.</strong> Covered in depth in F12: full voltage across moisture-bridged insulation can cause an actual breakdown that the same winding, once properly dried, would have withstood without damage. Use a reduced test voltage, or a slow, cautious reading, until the winding is confirmed dry.</p>
  </div>

  <div class="n-h1" id="s-recovery">Link to F12: Meggering During Saltwater Recovery</div>
  <p class="n-p">F12 covers the full saltwater ingress recovery procedure for a motor, isolate, wash with fresh water, drain, dry, and it is not repeated here. What belongs in this module is why meggering is part of that procedure at all, and what the reading is telling the person doing the drying.</p>
  <p class="n-p">A wet winding is meggered periodically <strong>through</strong> the drying process, not just at the start and end, because IR is the one measurement that directly tracks how much moisture is still present in the insulation. As free and absorbed water evaporates out of the winding during drying, the leakage path it was providing shrinks, and IR climbs. A steadily rising IR trend over the drying period is the confirmation that the process is actually working. A reading that plateaus low, or one that fluctuates rather than climbing, is telling the person drying the motor that moisture is not actually leaving it, or that there is a fault beyond simple wetting, exactly the signal F12 describes as the trigger to consider rejecting the motor for a rewind rather than continuing to dry it on board.</p>
  <p class="n-p">The one rule that ties this module directly back to F12's safety point: while the winding is still wet, test at reduced voltage only, per the safety practice above, and only return to full test voltage once the IR trend has plateaued at a healthy, stable value.</p>

  <div class="n-h1" id="s-interview">Interview Answers, Rapid Fire</div>

  <p class="n-p"><strong>What is insulation resistance and why does it fall over time?</strong><br>
  The resistance opposing leakage current through a winding's insulation to earth or between windings. It falls mainly for four reasons: moisture ingress, which opens a conductive leakage path: dirt and surface contamination, which does the same at the surface: heat aging, which embrittles and permanently degrades the insulating material: and general mechanical age and cracking from thermal cycling and vibration. Moisture and contamination are recoverable by drying or cleaning; heat aging and mechanical degradation are not.</p>

  <p class="n-p"><strong>How does a megger work, and why does it use a high DC voltage rather than a low-voltage ohmmeter?</strong><br>
  It applies a stabilised DC test voltage across the insulation and measures the resulting leakage current, computing resistance from V over I. A high voltage is used because it stresses the insulation the way it is actually stressed in service and reveals weak spots that a gentle low-voltage reading would miss entirely. DC specifically is used so the meter can let capacitive charging current decay away and read a clean, stable resistive leakage current, which is also what makes PI possible.</p>

  <p class="n-p"><strong>What test voltages are used, and how are they chosen?</strong><br>
  Matched to the equipment's rated voltage: roughly 500V DC for equipment below 1kV, which covers most ship's 440V and 690V motors, up to 1000V, 2500V and 5000V DC for higher voltage classes, per IEEE 43. Test too low and weaknesses are not revealed; test needlessly high on low voltage gear and there is no benefit, only unnecessary stress.</p>

  <p class="n-p"><strong>What is an acceptable insulation resistance value?</strong><br>
  Two rules exist. The traditional one is one megohm per kV of rated voltage, plus one, as a bare minimum. The more modern IEEE 43 position gives flat minimums instead, 5 megohms for a random-wound low voltage winding, 100 megohms for a form-wound winding, both corrected to 40°C. Either is only a floor for safe energisation, not a health check: what actually matters is the trend for that specific machine against its own historical readings.</p>

  <p class="n-p"><strong>What is Polarization Index and what does a low value mean?</strong><br>
  PI is the ratio of the insulation resistance reading at 10 minutes to the reading at 1 minute, on the same continuous test. In a clean dry winding, genuine dielectric absorption keeps the reading climbing for the full ten minutes, giving a high PI. In a wet or contaminated winding, a steady leakage current dominates from the first second and swamps that absorption effect, so the reading barely climbs and PI sits close to 1.0. IEEE 43 sets a minimum PI of 1.5 for Class A insulation and 2.0 for Class B, F and H, which covers most marine machines; PI in the 2.0 to 4.0 range is considered good, above 4.0 excellent, below 1.0 questionable.</p>

  <p class="n-p"><strong>What is Dielectric Absorption Ratio and how does it differ from PI?</strong><br>
  DAR is the ratio of the reading at 60 seconds to the reading at 30 seconds, the same underlying principle as PI but compressed into a one-minute test instead of a ten-minute one. It is a quicker, rougher check, useful when a full PI test is impractical, but is treated as less definitive than a full PI test on a genuinely borderline winding.</p>

  <p class="n-p"><strong>Which terminals do you test between on a motor, and what does a failure on each tell you?</strong><br>
  Each phase to earth, which checks the main insulation to the frame, and phase to phase, which checks the interwinding insulation between two phases. A phase-to-earth failure points to breakdown to the frame, commonly from moisture or contamination. A phase-to-phase failure points to interwinding breakdown within the winding itself, generally the more serious finding since it usually means physical damage rather than surface contamination.</p>

  <p class="n-p"><strong>What safety steps do you take before and after a megger test?</strong><br>
  Isolate and prove dead first, standard practice. Discharge the winding before the test so the reading is not distorted by leftover charge, and discharge it again after the test, because the test voltage itself charges the winding like a capacitor and it can deliver a real shock from terminals that are otherwise isolated. Disconnect other connected equipment that is not rated for the test voltage, and never test a wet winding at full voltage.</p>

  <p class="n-p"><strong>Why do you megger a motor while it is being dried after saltwater ingress?</strong><br>
  Because IR directly tracks how much moisture remains in the insulation. As the winding dries, the leakage path moisture was providing shrinks and IR climbs, so a steadily rising trend confirms the drying is actually working. A reading that plateaus low or fluctuates instead of climbing means moisture is not leaving, or there is damage beyond simple wetting, and is the signal to consider rejecting the motor rather than continuing to dry it, as covered fully in F12.</p>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F15')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the F15 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

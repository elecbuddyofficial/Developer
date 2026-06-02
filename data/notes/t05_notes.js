window.loadNotes("T05", `<div class="view" id="view-notes-t05">
<div class="note-doc">
  <div style="margin-bottom:16px"><button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button></div>
  <div class="note-title">
    <h1>Topic 05 — Transformers</h1>
    <div class="sub">ETO MMD Oral Examination · Function 5 · Class 2 · Mumbai & Noida</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-principle')">Principle & EMF</button>
    <button class="anc-btn" onclick="jumpTo('s-losses')">Iron & Copper Losses</button>
    <button class="anc-btn" onclick="jumpTo('s-noload')">No-Load vs Load</button>
    <button class="anc-btn" onclick="jumpTo('s-auto')">Auto vs Double</button>
    <button class="anc-btn" onclick="jumpTo('s-ctpt')">CT & PT</button>
    <button class="anc-btn" onclick="jumpTo('s-buchholz')">Buchholz Relay</button>
    <button class="anc-btn" onclick="jumpTo('s-oil')">Oil Tests</button>
    <button class="anc-btn" onclick="jumpTo('s-parallel')">Cooling & Parallel</button>
    <button class="anc-btn" onclick="jumpTo('s-flyback')">Flyback & Tests</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <div class="body"><strong>Coming Soon:</strong> The written preparation module is currently under development. It will feature past papers, detailed numerical solutions, and structured answers for this topic.</div></div>

  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">These are exact question formats from MMD orals. Study the key points.</div></div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer — Key Points</th></tr>
    <tr>
      <td>Why must a CT secondary never be open-circuited? (All)</td>
      <td>With no secondary current, there is no opposing MMF. The primary current fully magnetises the core into deep saturation. The massive rate of flux change induces thousands of lethal volts on the secondary terminals, risking electrocution and destroying the CT core via extreme heat. Always short-circuit the CT before disconnecting instruments.</td>
    </tr>
    <tr>
      <td>Why do we laminate the transformer core? (Deswal)</td>
      <td>To reduce eddy current losses. Alternating flux induces circulating currents in the steel core, causing I²R heating. By slicing the core into <span class="n-val">0.3mm</span> laminations insulated with varnish, we break the electrical path. Eddy loss is proportional to the square of thickness, so laminating drastically reduces the loss.</td>
    </tr>
    <tr>
      <td>Why use a double-wound transformer for shore connection instead of an auto-transformer? (Kamath)</td>
      <td>A shore connection requires complete galvanic isolation to break the earth loop between the solidly-earthed shore supply and the floating ship IT system. An auto-transformer shares a winding and provides NO electrical isolation. Without isolation, stray currents would cause massive electrolytic corrosion to the hull.</td>
    </tr>
  </table>

  <!-- ═══ QUICK REVISION ═══ -->

<div class="n-h1" id="s-emf-worked">1B. EMF EQUATION — WORKED EXAMPLES & SIGNIFICANCE</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Form factor constant:</strong> The <span class="n-val">4.44</span> in the EMF equation = 4 × (RMS/average) form factor = <strong>4 × √2 / √2</strong> for sinusoidal flux. Always quote this if asked where 4.44 comes from.</div></div>

<div class="n-h2">Worked Example 1 — Find Max Flux</div>
<ol class="n-steps">
  <li>Given: N1 = <span class="n-val">500 turns</span>, V1 = <span class="n-val">440V</span>, f = <span class="n-val">50Hz</span>.</li>
  <li>Φ_max = E / (4.44 × f × N) = 440 / (4.44 × 50 × 500).</li>
  <li>Φ_max = 440 / 111,000 = <span class="n-val">0.00396 Wb</span>.</li>
  <li>If N2 = <span class="n-val">100 turns</span> → V2 = 440 × (100/500) = <span class="n-val">88V</span>.</li>
</ol>

<div class="n-h2">Worked Example 2 — Turns & Current (Common Oral Numerical)</div>
<ol class="n-steps">
  <li>440V/110V transformer with N1 = <span class="n-val">400 turns</span>. Find N2.</li>
  <li>V1/V2 = N1/N2 → 440/110 = 400/N2 → N2 = 400 × 110/440 = <span class="n-val">100 turns</span>.</li>
  <li>If secondary current I2 = 20A → I1 = I2 × N2/N1 = 20 × 100/400 = <span class="n-val">5A</span>.</li>
  <li>Check power balance: V1×I1 = 440×5 = <span class="n-val">2200 VA</span>; V2×I2 = 110×20 = <span class="n-val">2200 VA</span>. ✔ Balanced (ideal transformer).</li>
</ol>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (All surveyors):</strong> What is the working principle of a transformer?<br><strong>Ideal Answer:</strong> Mutual electromagnetic induction. AC in primary creates alternating flux in core; flux links secondary; by Faraday's Law EMF induced ∝ rate of change of flux × secondary turns. V1/V2 = N1/N2. Step-up = more secondary turns = higher voltage, lower current. Cannot work on DC — DC gives constant flux, no change, no induction. It is essentially a magnetic coupling between two electrically isolated circuits.</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> A 440V/110V transformer has 400 primary turns. How many secondary turns?<br><strong>Ideal Answer:</strong> N2 = 400 × 110/440 = 100 turns. If secondary current is 20A, primary = 20 × 100/400 = 5A. Power check: 440×5 = 110×20 = 2200 VA, energy balanced.</div></div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "Transformer is a magnetic machine — DC is useless because DC gives constant flux — no change = no induction." Turns ratio = voltage ratio. Current ratio = INVERSE. Step UP voltage → step DOWN current. More turns or more flux = more EMF.</div></div>

<div class="n-h1" id="s-loss-formulas">2B. LOSS FORMULAS & EFFICIENCY</div>
<div class="n-grid">
  <div class="n-card" style="border-color:var(--red-border)">
    <div class="card-title" style="color:var(--red)">Hysteresis Loss</div>
    <div class="card-desc"><strong>Wh = Kh × f × Bmax<sup>1.6</sup> × Volume</strong><br>Kh = material constant. Higher Bmax or frequency = more loss. Reduce with grain-oriented silicon steel.</div>
  </div>
  <div class="n-card" style="border-color:var(--red-border)">
    <div class="card-title" style="color:var(--red)">Eddy Current Loss</div>
    <div class="card-desc"><strong>We = Ke × f² × Bmax² × t² × Volume</strong><br>t = lamination thickness. Loss ∝ t². Halving thickness → loss to <span class="n-val">1/4</span>.</div>
  </div>
</div>
<div class="n-formula">η = Output / (Output + Iron Loss + Copper Loss)<div class="label">Transformer efficiency</div></div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Condition for Maximum Efficiency:</strong> Occurs when <strong>Copper Losses = Iron Losses</strong> (variable loss = constant loss). Frequently asked follow-up.</div></div>

<div class="n-h2">Loss Summary Table</div>
<table class="n-table">
  <tr><th>Loss Type</th><th>Cause</th><th>Varies With</th><th>Reduce By</th><th>Measured By</th></tr>
  <tr><td class="bad">Hysteresis</td><td>Domain reversal in core</td><td>f, Bmax<sup>1.6</sup></td><td>Silicon steel, lower Bmax</td><td>No-load test</td></tr>
  <tr><td class="bad">Eddy Current</td><td>Circulating currents in core</td><td>f², Bmax², t²</td><td>Laminations 0.3–0.5mm</td><td>No-load test</td></tr>
  <tr><td class="bad">Copper (I²R)</td><td>Winding resistance</td><td>Load current²</td><td>Larger conductor, better copper</td><td>Short-circuit test</td></tr>
</table>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal, Kamath, Sanjib):</strong> Why is the transformer core laminated?<br><strong>Ideal Answer:</strong> To reduce eddy current losses. Alternating flux induces circulating currents in the bulk core causing I²R heating. Eddy loss ∝ lamination thickness² (We ∝ t²). Thin sheets (0.3–0.5mm) each varnish-insulated break the eddy current path — high resistance — small currents — minimal loss. Halving thickness reduces eddy loss to 1/4.</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What are the losses in a transformer?<br><strong>Ideal Answer:</strong> Iron losses (constant, no-load) = hysteresis + eddy current. Copper losses (variable, load-dependent) = I1²R1 + I2²R2 ∝ load current². Efficiency = output/(output + iron + copper). Maximum efficiency when copper losses = iron losses.</div></div>

<div class="n-h1" id="s-noload-qa">3B. NO-LOAD CURRENT COMPONENTS & SURVEYOR Q&A</div>
<div class="n-grid">
  <div class="n-card" style="border-color:var(--blue-border)">
    <div class="card-title" style="color:var(--blue)">Ic — Core Loss Component</div>
    <div class="card-desc"><strong>In phase</strong> with applied voltage. Supplies the iron (hysteresis + eddy) losses.</div>
  </div>
  <div class="n-card" style="border-color:var(--orange-border)">
    <div class="card-title" style="color:var(--orange)">Im — Magnetising Component</div>
    <div class="card-desc"><strong>90° lagging</strong> the voltage. Creates the magnetic flux in the core.</div>
  </div>
</div>
<div class="n-formula">I0 = √(Ic² + Im²)<div class="label">Total no-load current — typically 2–10% of rated, PF 0.1–0.3 lagging</div></div>
<div class="n-formula">I1 = I0 + (N2/N1) × I2<div class="label">On-load primary current = magnetising + reflected load component</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Kamath, Deswal):</strong> What current flows in a transformer at no load?<br><strong>Ideal Answer:</strong> A small magnetising current I0 = 2–10% of rated, with two components: Im (90° lagging — creates flux) and Ic (in phase — supplies iron losses). PF very low (0.1–0.3 lagging) as current is mainly reactive. No secondary current flows. This is why iron losses exist even with no load connected.</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Kamath, Deswal):</strong> Why does primary current increase when load is added to the secondary?<br><strong>Ideal Answer:</strong> Secondary current I2 creates a demagnetising MMF (N2×I2) opposing the core flux. As flux tends to fall, induced back-EMF in primary falls, so the primary draws extra load current (I2×N2/N1). This restores flux to its original level. Core flux stays nearly constant — transformer is a constant-flux device. More secondary load = more primary current drawn automatically.</div></div>

<div class="n-h1" id="s-auto-qa">4B. AUTO-TRANSFORMER DETAIL & SHORE CONNECTION Q&A</div>
<div class="n-h2">Step-Down Auto-Transformer Construction</div>
<ul class="n-list">
  <li>Single continuous winding tapped at a point. Portion AB = full winding (primary), portion CB = tapped section (secondary).</li>
  <li><strong>V2 = V1 × (N2/N1)</strong>; current in the tapped section = <span class="n-val">I2 − I1</span> (circulating component — this is why less copper is needed).</li>
  <li>Common ship taps for motor starters: <span class="n-val">65%</span> or <span class="n-val">80%</span>.</li>
</ul>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Critical disadvantage:</strong> If the winding breaks at the tap, FULL primary voltage appears on the secondary — dangerous. Hence auto-transformers are NEVER used for shore connection, intrinsically safe circuits or GMDSS.</div></div>

<table class="n-table">
  <tr><th>Feature</th><th>Auto-Transformer</th><th>Double-Wound</th></tr>
  <tr><td>Windings</td><td>One — shared (tapped)</td><td>Two — separate</td></tr>
  <tr><td>Isolation</td><td class="bad">NO galvanic isolation</td><td class="ok">YES — full isolation</td></tr>
  <tr><td>Size/Weight</td><td class="ok">Smaller, lighter</td><td class="bad">Larger, heavier</td></tr>
  <tr><td>Efficiency</td><td class="ok">Higher (less copper)</td><td>Lower</td></tr>
  <tr><td>Voltage ratio</td><td>Best for small ratios (≈1:1)</td><td class="ok">Any ratio</td></tr>
  <tr><td>Ship use</td><td>Motor starters, voltage adaptation</td><td>Shore connection, safety circuits, HV step-down</td></tr>
</table>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Sanjib, Vishwanathan):</strong> What is an auto-transformer and where is it used on ships?<br><strong>Ideal Answer:</strong> One winding, part serving as primary and part as secondary (tapped). Advantages: smaller, lighter, cheaper, more efficient than double-wound. Disadvantage: no electrical isolation — a fault can transfer full voltage. Used for auto-transformer starters (65%/80% tap reduced-voltage motor starting) and voltage adaptation (440V to 415V/380V). NOT used where isolation is required.</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal):</strong> Why is a double-wound transformer used for shore connection?<br><strong>Ideal Answer:</strong> Shore supply is solidly earthed (TN-S); the ship uses an unearthed IT system. A double-wound isolation transformer provides galvanic isolation — no electrical link between shore (primary) and ship (secondary). Without it, the shore earth would connect to the ship system causing stray currents and electrolytic hull corrosion. An auto-transformer cannot do this — primary and secondary are electrically connected.</div></div>

<div class="n-h1" id="s-parallel-cooling">8. PARALLEL OPERATION & COOLING METHODS</div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Deswal</strong> asks parallel conditions; <strong>Kamath</strong> asks cooling designations (ONAN/ONAF/OFAF).</div></div>

<div class="n-h2">Conditions for Parallel Operation of Transformers</div>
<ol class="n-steps">
  <li><strong>Same voltage ratio</strong> (same turns ratio) — unequal ratios cause circulating current even at no-load.</li>
  <li><strong>Same polarity</strong> — wrong polarity = dead short circuit.</li>
  <li><strong>Same percentage impedance</strong> — ensures load shares in proportion to kVA rating. Mismatch overloads the lower-impedance unit.</li>
  <li><strong>Same phase sequence</strong> (3-phase) — must match.</li>
  <li><strong>Same vector group / phase displacement</strong> (3-phase, e.g. Dyn11 with Dyn11) — different groups cause large circulating currents.</li>
</ol>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid — "VPIPS":</strong> <strong>V</strong>oltage ratio · <strong>P</strong>olarity · <strong>I</strong>mpedance (%) · <strong>P</strong>hase sequence · <strong>S</strong>ame vector group.</div></div>

<div class="n-h2">Cooling Method Designations</div>
<p class="n-p">A 4-letter code: 1st = internal cooling medium, 2nd = internal circulation, 3rd = external medium, 4th = external circulation.</p>
<table class="n-table">
  <tr><th>Code</th><th>Meaning</th><th>Application</th></tr>
  <tr><td class="hl">ONAN</td><td>Oil Natural, Air Natural — oil convects by thermosiphon, air cools radiators naturally.</td><td>Small/medium transformers, baseline rating.</td></tr>
  <tr><td class="hl">ONAF</td><td>Oil Natural, Air Forced — fans blow air over radiators for higher rating.</td><td>Boosts rating ~25–30% over ONAN.</td></tr>
  <tr><td class="hl">OFAF</td><td>Oil Forced, Air Forced — oil pump circulates oil + fans force air.</td><td>Large high-power transformers.</td></tr>
</table>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Dry-type transformers</strong> are designated <strong>AN</strong> (Air Natural) or <strong>AF</strong> (Air Forced) — most marine LV distribution transformers are air-cooled dry-type (no oil = no fire/leak risk in machinery spaces).</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal):</strong> What are the conditions for parallel operation of transformers?<br><strong>Ideal Answer:</strong> Same voltage/turns ratio, same polarity, same percentage impedance, same phase sequence and same vector group (for 3-phase). Equal ratio and impedance ensure no circulating current and proportional load sharing.</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Kamath):</strong> Explain ONAN, ONAF and OFAF.<br><strong>Ideal Answer:</strong> Oil-cooling designations. ONAN = oil natural/air natural (convection only). ONAF = oil natural/air forced (fans on radiators raise rating). OFAF = oil forced/air forced (oil pump + fans for large units). The first two letters describe the oil, the last two the external air.</div></div>

<div class="n-h1" id="s-flyback-qa">9. FLYBACK TRANSFORMER</div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Sanjib</strong> asks this as an electronics-linked question.</div></div>
<p class="n-p">A <strong>flyback transformer (FBT / line output transformer)</strong> is a special high-frequency transformer used in switched-mode power supplies (SMPS) and older CRT displays. It both transfers energy and stores it in the core during the switching cycle.</p>
<ul class="n-list">
  <li>Operates at <strong>high frequency</strong> (tens of kHz) — small ferrite core, not silicon steel.</li>
  <li>Energy is <strong>stored in the air-gapped core</strong> when the switch (transistor) is ON, then released to the secondary when the switch turns OFF ("fly-back").</li>
  <li>Provides multiple isolated output voltages and high step-up (e.g. CRT EHT of several kV) from one core.</li>
  <li><strong>Ferrite core</strong> chosen because high frequency would cause huge eddy/hysteresis losses in steel laminations.</li>
</ul>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Sanjib):</strong> What is a flyback transformer?<br><strong>Ideal Answer:</strong> A high-frequency transformer used in SMPS and CRT supplies. During the switch-ON period it stores energy in its air-gapped ferrite core; during switch-OFF the stored energy "flies back" to the secondary, delivering isolated, often high step-up voltages. Uses a ferrite core (not laminated steel) because of high switching frequency to keep core losses low.</div></div>

<div class="n-h1" id="s-quickrev-add">10. QUICK REVISION — ADDED POINTS</div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>One-liners to fire off:</strong>
<ul class="n-list">
<li>EMF: E = 4.44 f N Φ — 4.44 = 4√2/√2 form factor.</li>
<li>Max efficiency when <strong>Cu loss = Iron loss</strong>.</li>
<li>No-load current = 2–10%, PF 0.1–0.3 lagging.</li>
<li>Hum at <strong>100Hz</strong> = 2 × supply freq (magnetostriction).</li>
<li>Parallel conditions = VPIPS.</li>
<li>Cooling: ONAN → ONAF → OFAF (rising rating).</li>
<li>Auto-transformer = no isolation; shore connection = double-wound only.</li>
<li>CT secondary NEVER open; PT secondary NEVER short.</li>
</ul></div></div>


<div class="n-h1" id="s-emfexample">1A. EMF EQUATION — WORKED EXAMPLES & SURVEYOR Q&A</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Worked Example 1:</strong> Single phase transformer. Primary: N1 = <span class="n-val">500 turns</span>, V1 = <span class="n-val">440V</span>, f = <span class="n-val">50Hz</span>.<br>Φ_max = E / (4.44 × f × N) = 440 / (4.44 × 50 × 500) = 440 / 111,000 = <span class="n-val">0.00396 Wb</span>.<br>Secondary: N2 = 100 turns → V2 = 440 × (100/500) = <span class="n-val">88V</span>.</div></div>

<div class="n-formula">4.44 = 4 × √2 / √2 = form factor constant for sinusoidal flux<div class="label">Origin of the 4.44 constant in the EMF equation</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (All surveyors):</strong> What is the working principle of a transformer?<br><strong>Ideal Answer:</strong> Mutual electromagnetic induction. AC in primary creates alternating magnetic flux in core. Alternating flux links secondary winding. By Faraday's law, EMF induced in secondary is proportional to rate of change of flux and number of secondary turns. V1/V2 = N1/N2. Step-up: more secondary turns = higher secondary voltage, lower current. Cannot work on DC — DC gives constant flux, no change, no induction. Transformer is essentially a magnetic coupling between two electrically isolated circuits.</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Numerical — common):</strong> A 440V/110V transformer has 400 primary turns. How many secondary turns? If secondary current is 20A, find primary current.<br><strong>Ideal Answer:</strong> Turns ratio = V1/V2 = N1/N2. 440/110 = 400/N2 → N2 = 400 × 110/440 = <span class="n-val">100 turns</span>. Primary current I1 = I2 × N2/N1 = 20 × 100/400 = <span class="n-val">5A</span>. Check: V1×I1 = 440×5 = 2200VA. V2×I2 = 110×20 = 2200VA. Energy balanced (ideal transformer).</div></div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "Transformer is a magnetic machine — DC is useless because DC gives constant flux — no change = no induction." Turns ratio = voltage ratio. Current ratio = INVERSE of turns ratio. Step UP voltage → step DOWN current. EMF: E = 4.44 × f × N × Φ — more turns or more flux = more EMF.</div></div>

<div class="n-h1" id="s-lossformulas">2A. LOSS FORMULAS & EFFICIENCY — DETAIL</div>
<div class="n-h2">Hysteresis & Eddy Current Loss Formulas</div>
<div class="n-grid">
  <div class="n-card" style="border-color:var(--orange-border)">
    <div class="card-title" style="color:var(--orange)">Wh = Kh × f × Bmax^1.6 × Volume</div>
    <div class="card-desc"><strong>Hysteresis loss.</strong> Kh = material constant. Higher Bmax or frequency = more loss. Reduce with grain-oriented silicon steel & lower flux density.</div>
  </div>
  <div class="n-card" style="border-color:var(--red-border)">
    <div class="card-title" style="color:var(--red)">We = Ke × f² × Bmax² × t² × Volume</div>
    <div class="card-desc"><strong>Eddy current loss.</strong> t = lamination thickness. Proportional to thickness SQUARED — halving thickness reduces eddy loss to <span class="n-val">1/4</span>.</div>
  </div>
</div>

<div class="n-formula">Maximum Efficiency occurs when COPPER LOSS = IRON LOSS<div class="label">Efficiency = output / (output + iron loss + copper loss)</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal, Kamath, Sanjib):</strong> What are the losses in a transformer?<br><strong>Ideal Answer:</strong> Iron losses (core, constant, no-load): Hysteresis (domain reversal — reduce with silicon steel) + Eddy current (circulating currents in core — reduce by laminating with thin insulated sheets 0.3–0.5mm). Copper losses (winding, variable, load-dependent): I1²R1 + I2²R2 — proportional to load current squared. Efficiency = output / (output + iron + copper). Maximum efficiency when copper loss = iron loss.</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> Why is the transformer core laminated?<br><strong>Ideal Answer:</strong> To reduce eddy current losses. Alternating flux induces circulating currents causing I²R heating in the core. Eddy loss ∝ thickness² (We ∝ t²). Thin laminations (<span class="n-val">0.3–0.5mm</span>) of silicon steel, each insulated with varnish, break the eddy current path — high resistance — small currents — much less loss. Halving thickness reduces eddy losses to <span class="n-val">1/4</span>.</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Vishwanathan, Nair):</strong> Transformer is humming louder than usual — causes?<br><strong>Ideal Answer:</strong> Hums at <span class="n-val">100Hz</span> (twice supply frequency) due to magnetostriction. Increased hum: (1) Overvoltage — higher flux, more magnetostriction; (2) Loose laminations/core bolts — rattle freely; (3) Overload — greater electromagnetic forces; (4) Harmonics — extra vibration frequencies. Action: check supply voltage (not over), check load (not over), tighten core clamping bolts, check oil level, check loose fittings. Report if persists.</div></div>

<div class="n-h1" id="s-noloadqa">3A. NO-LOAD vs ON-LOAD — COMPONENTS & SURVEYOR Q&A</div>
<div class="n-h2">Components of No-Load Current (I0)</div>
<ul class="n-list">
  <li><strong>Ic (core loss component):</strong> In phase with voltage — supplies iron losses.</li>
  <li><strong>Im (magnetising component):</strong> <span class="n-val">90° lagging</span> — creates the magnetic flux.</li>
  <li><strong>I0 = √(Ic² + Im²)</strong> — power factor on no-load very low (<span class="n-val">0.1 to 0.3</span> lagging).</li>
</ul>
<div class="n-formula">I1 = I0 + (N2/N1) × I2<div class="label">On-load: primary current = no-load current + reflected load current</div></div>
<p class="n-p">On-load power factor depends on load PF — typically <span class="n-val">0.8–0.9 lagging</span> for inductive loads. Primary voltage is balanced by back-EMF from flux plus small drops across primary resistance and leakage reactance.</p>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Kamath, Deswal):</strong> What current flows at no load?<br><strong>Ideal Answer:</strong> A small magnetising current I0 (<span class="n-val">2–10%</span> of rated). Two components: Im (magnetising, 90° lagging — creates flux) and Ic (core-loss, in-phase — supplies iron losses). PF very low (0.1–0.3 lagging) as current is mainly reactive. No secondary current. This is why iron losses exist even with no load connected.</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> Why does primary current increase when load is added?<br><strong>Ideal Answer:</strong> Secondary current I2 creates demagnetising MMF (N2×I2) opposing core flux. If flux fell, primary back-EMF would fall and primary draws more current. This extra reflected current (I2×N2/N1) creates equal-opposite MMF, restoring flux. Core flux stays nearly constant. Primary current = no-load + reflected load current — automatically rises with load.</div></div>

<div class="n-h1" id="s-autoqa">4A. AUTO vs DOUBLE-WOUND — COMPLETE COMPARISON & Q&A</div>
<table class="n-table">
  <tr><th>Feature</th><th>Auto-Transformer</th><th>Double-Wound</th></tr>
  <tr><td>Number of windings</td><td>One — shared (tapped)</td><td>Two — separate</td></tr>
  <tr><td>Electrical isolation</td><td class="bad">NO — electrically connected</td><td class="ok">YES — full galvanic isolation</td></tr>
  <tr><td>Size / weight</td><td class="ok">Smaller, lighter</td><td>Larger, heavier</td></tr>
  <tr><td>Efficiency</td><td class="ok">Higher (less copper)</td><td>Lower (two windings)</td></tr>
  <tr><td>Cost</td><td class="ok">Lower</td><td>Higher</td></tr>
  <tr><td>Voltage ratio</td><td>Best for small ratios (≈1:1)</td><td>Any ratio</td></tr>
  <tr><td>Ship application</td><td>Motor starters, voltage adaptation</td><td>Shore connection, safety circuits, HV step-down</td></tr>
</table>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Auto-starter taps:</strong> Reduced-voltage motor starting uses <span class="n-val">65%</span> or <span class="n-val">80%</span> taps. Step-down: V2 = V1 × (N2/N1), current in tapped section = I2 − I1 (circulating component).</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Sanjib, Vishwanathan):</strong> What is an auto-transformer and where used on ships?<br><strong>Ideal Answer:</strong> One winding, part primary part secondary (tapped). Advantages: smaller, lighter, cheaper, more efficient. Disadvantage: NO isolation — primary and secondary share winding, fault can transfer full voltage. Ship use: auto-transformer starters (65%/80% tap), voltage adaptation (440V↔415V/380V). NOT used where isolation required: shore connection, safety circuits, intrinsically safe equipment.</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal):</strong> Why is a double-wound transformer used for shore connection?<br><strong>Ideal Answer:</strong> Shore connection needs complete isolation. Shore supply is solidly earthed (TN-S); ship uses IT (unearthed) system. The double-wound isolation transformer gives galvanic isolation between shore primary and ship secondary. Without it, shore earth connects to ship system — stray currents — electrolytic hull corrosion. An auto-transformer cannot isolate as windings are electrically connected.</div></div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> AUTO = One winding, cheap & efficient, NO isolation. DOUBLE-WOUND = Two windings, isolation = SAFETY. Shore connection ALWAYS double-wound to break the earth loop.</div></div>

<div class="n-h1" id="s-coolingmethods">8. COOLING METHODS — ONAN, ONAF, OFAF</div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Kamath</strong> asks the cooling designations and what each letter means.</div></div>
<p class="n-p">Cooling codes use four letters: <strong>(1) Internal cooling medium, (2) Internal circulation, (3) External cooling medium, (4) External circulation.</strong> O = Oil, A = Air, W = Water, N = Natural, F = Forced.</p>
<table class="n-table">
  <tr><th>Code</th><th>Meaning</th><th>Application</th></tr>
  <tr><td class="hl">ONAN</td><td>Oil Natural, Air Natural — oil convection + natural air over radiators.</td><td>Small/medium transformers. Simplest, no fans.</td></tr>
  <tr><td class="hl">ONAF</td><td>Oil Natural, Air Forced — fans blow air over radiators to boost capacity.</td><td>Medium/large. Fans cut in at high temperature.</td></tr>
  <tr><td class="hl">OFAF</td><td>Oil Forced, Air Forced — pump circulates oil + fans force air.</td><td>Large HV transformers, high load.</td></tr>
  <tr><td>AN / AF</td><td>Air Natural / Air Forced — dry-type (cast resin) transformers.</td><td>Common on modern ships — no oil, fire-safe.</td></tr>
</table>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> First two letters = inside (oil); last two = outside (air). O→F means a PUMP added. A→F means FANS added. ONAN → ONAF → OFAF = progressively more forced cooling for bigger ratings.</div></div>

<div class="n-h1" id="s-parallelcond">9. PARALLEL OPERATION OF TRANSFORMERS — CONDITIONS</div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Deswal</strong> asks the conditions for paralleling transformers.</div></div>
<ol class="n-steps">
  <li><strong>Same voltage ratio (turns ratio):</strong> Unequal ratios cause circulating current even at no-load.</li>
  <li><strong>Same polarity:</strong> Wrong polarity = dead short circuit. Mandatory.</li>
  <li><strong>Same phase sequence</strong> (for 3-phase): Otherwise dangerous cross-phase short.</li>
  <li><strong>Same vector group / phase displacement:</strong> e.g. both Dyn11 — mismatched groups cannot parallel.</li>
  <li><strong>Same per-unit impedance (%Z):</strong> Ensures load shared in proportion to kVA rating. Unequal %Z → unequal load sharing, one overloads.</li>
</ol>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Two absolute musts:</strong> Same POLARITY and same PHASE SEQUENCE — getting these wrong creates a direct short circuit. Voltage ratio and %Z affect load sharing; polarity and sequence affect safety.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal):</strong> Conditions for parallel operation of transformers?<br><strong>Ideal Answer:</strong> (1) Same voltage/turns ratio — avoid circulating current; (2) Same polarity — else short circuit; (3) Same phase sequence; (4) Same vector group/phase displacement (e.g. Dyn11 with Dyn11); (5) Same per-unit impedance — for proportional load sharing. If %Z differs, transformer with lower impedance takes more load and may overload.</div></div>

<div class="n-h1" id="s-flybackdetail">10. FLYBACK TRANSFORMER — ELECTRONICS-LINKED</div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Sanjib</strong> asks this as an electronics-linked question.</div></div>
<p class="n-p">A <strong>flyback transformer</strong> is a special transformer used in switched-mode power supplies (SMPS) and CRT/display circuits. It stores energy in the core during the switch ON period and releases it to the secondary during the OFF (flyback) period.</p>
<ul class="n-list">
  <li><strong>Operation:</strong> Acts as a coupled inductor — energy STORED in the gapped core when primary switch conducts, then DELIVERED to secondary when switch turns off.</li>
  <li><strong>Air gap:</strong> Has a deliberate core air gap to store magnetic energy without saturating.</li>
  <li><strong>Polarity dots:</strong> Primary and secondary windings are wound in OPPOSITE phase so they conduct alternately, not simultaneously.</li>
  <li><strong>Output:</strong> Can step voltage up or down, provides isolation, generates very high voltages (used for CRT EHT, generates multiple output rails).</li>
</ul>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "Flyback = STORE then FLY back." Unlike a normal transformer (continuous energy transfer), the flyback STORES energy in its gapped core in one half and RELEASES it in the other. Found in SMPS battery chargers, navigation/display power supplies on board.</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Sanjib):</strong> What is a flyback transformer?<br><strong>Ideal Answer:</strong> A coupled-inductor transformer used in SMPS. During switch ON, energy is stored in the gapped magnetic core; during switch OFF (flyback period), stored energy transfers to the secondary. Provides isolation, can step up/down, and generate high voltages. The deliberate air gap stores energy without saturating. Used in ship electronic power supplies, chargers, and display circuits.</div></div>

  <div class="n-h1" id="s-quickrev">📊 Quick Revision — Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>CT Safety</td>
      <td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td>
      <td>NEVER open circuit. High voltage electrocution hazard. Short circuit it first.</td>
    </tr>
    <tr>
      <td>EMF Equation</td>
      <td class="hl">⭐⭐⭐⭐⭐ All</td>
      <td>E = 4.44 × f × N × Φ_max. If freq drops, flux increases → core saturation → overheat.</td>
    </tr>
    <tr>
      <td>Buchholz Relay</td>
      <td class="hl">⭐⭐⭐⭐⭐ Sanjib, Kamath</td>
      <td>Upper float = alarm (slow gas). Lower float = trip (surge). Acetylene = serious arc fault.</td>
    </tr>
    <tr>
      <td>Iron vs Copper Loss</td>
      <td class="hl">⭐⭐⭐⭐ Deswal</td>
      <td>Iron = constant (hysteresis/eddy). Copper = variable (I²R). Laminate core to stop eddy currents.</td>
    </tr>
    <tr>
      <td>Parallel Conditions</td>
      <td class="hl">⭐⭐⭐⭐ Deswal</td>
      <td>Same voltage ratio, polarity, Z%, phase sequence. Wrong Z% causes unequal load sharing.</td>
    </tr>
    <tr>
      <td>Transformer Hum</td>
      <td class="hl">⭐⭐⭐ Vishwanathan</td>
      <td>Caused by magnetostriction at <span class="n-val">100Hz</span>. Increases if overvoltage, overload, or loose bolts.</td>
    </tr>
  </table>

  </div>
</div>
</div>`);

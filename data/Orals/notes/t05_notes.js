window.loadNotes("T05", `<div class="view" id="view-notes-t05">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T05')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 05 - Transformers</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-principle')">Principle &amp; EMF</button>
    <button class="anc-btn" onclick="jumpTo('s-losses')">Iron &amp; Copper Losses</button>
    <button class="anc-btn" onclick="jumpTo('s-noload')">No-Load vs On-Load</button>
    <button class="anc-btn" onclick="jumpTo('s-hum')">Transformer Hum</button>
    <button class="anc-btn" onclick="jumpTo('s-kva-rating')">kVA Rating</button>
    <button class="anc-btn" onclick="jumpTo('s-dc-supply')">DC on Transformer</button>
    <button class="anc-btn" onclick="jumpTo('s-frequency-compat')">Frequency Compatibility</button>
    <button class="anc-btn" onclick="jumpTo('s-auto')">Auto vs Double-Wound</button>
    <button class="anc-btn" onclick="jumpTo('s-ctpt')">CT &amp; PT</button>
    <button class="anc-btn" onclick="jumpTo('s-ct-knee')">CT Knee Point</button>
    <button class="anc-btn" onclick="jumpTo('s-buchholz')">Buchholz Relay</button>
    <button class="anc-btn" onclick="jumpTo('s-oil')">Oil Tests</button>
    <button class="anc-btn" onclick="jumpTo('s-coolingmethods')">Cooling Methods</button>
    <button class="anc-btn" onclick="jumpTo('s-parallel')">Parallel Operation</button>
    <button class="anc-btn" onclick="jumpTo('s-tests')">OC &amp; SC Tests</button>
    <button class="anc-btn" onclick="jumpTo('s-flyback')">Flyback Transformer</button>
    <button class="anc-btn" onclick="jumpTo('s-lvdt')">LVDT</button>
    <button class="anc-btn" onclick="jumpTo('s-msb-interlock')">MSB Interlock</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

<!-- ═══════════════════════════════════════════════════════════════
     SECTION 1 - PRINCIPLE & EMF EQUATION
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-principle">1. Working Principle &amp; EMF Equation</div>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask:</strong> "What is the working principle of a transformer?"<br>Answer must include: mutual induction · AC only · Faraday's law · turns ratio.</div></div>

<div class="n-h2">Core Principle</div>
<div class="n-info"><div class="icon">📖</div><div class="body">
  A transformer operates on <strong>mutual electromagnetic induction</strong>.<br><br>
  AC in the primary winding creates an <strong>alternating magnetic flux</strong> in the laminated iron core. This alternating flux links the secondary winding. By <strong>Faraday's Law</strong> (EMF = −N × dΦ/dt), an EMF is induced in the secondary proportional to the rate of change of flux and the number of secondary turns.<br><br>
  <strong>V₁ / V₂ = N₁ / N₂ = I₂ / I₁</strong><br><br>
  Step-up: N₂ &gt; N₁ → higher secondary voltage, lower secondary current.<br>
  Step-down: N₂ &lt; N₁ → lower secondary voltage, higher secondary current.<br><br>
  <strong>Cannot work on DC</strong>: DC gives constant flux → dΦ/dt = 0 → no induction → no output. (See Section 6 for full DC hazard analysis.)
</div></div>

<div class="note-diagram-wrap">
  <img src="../data/diagrams/t05-transformer-principle.webp" alt="Transformer working principle — primary winding, core flux, secondary winding, turns ratio" loading="lazy" decoding="async">
  <div class="note-diagram-cap">Fig. Transformer Working Principle — mutual induction, core flux, V₁/V₂ = N₁/N₂ turns ratio</div>
</div>

<div class="n-h2">EMF Equation</div>
<div class="n-formula">E = 4.44 × f × N × Φ<sub>max</sub>
<div class="label">where 4.44 = 2π / √2 × 2 = 4 × form-factor. Form factor of a sine wave = RMS/Average = π/(2√2) ≈ 1.11. Therefore 4 × 1.11 = 4.44.</div></div>

<div class="n-grid">
  <div class="n-card" style="border-color:var(--blue-border)">
    <div class="card-title" style="color:var(--blue)">Origin of 4.44</div>
    <div class="card-desc">For a sinusoidal flux: average EMF = 4 × f × N × Φ<sub>max</sub>. To get <em>RMS</em> EMF, multiply by the form factor of a sine wave (1.11). So E<sub>rms</sub> = 4 × 1.11 × f × N × Φ<sub>max</sub> = <strong>4.44 × f × N × Φ<sub>max</sub></strong>.</div>
  </div>
  <div class="n-card" style="border-color:var(--green-border)">
    <div class="card-title" style="color:var(--green)">Rearranged forms</div>
    <div class="card-desc">
      <strong>Φ<sub>max</sub> = E / (4.44 × f × N)</strong> - use this when asked about core flux.<br>
      <strong>N = E / (4.44 × f × Φ<sub>max</sub>)</strong> - use this to find turns for a given flux.<br>
      If frequency drops → Φ<sub>max</sub> must rise → saturation risk.
    </div>
  </div>
</div>

<div class="n-h2">Worked Example 1 - Finding Flux and Secondary Voltage</div>
<div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>Given:</strong> Single-phase transformer. N₁ = <span class="n-val">500 turns</span>, V₁ = <span class="n-val">440 V</span>, f = <span class="n-val">50 Hz</span>. Secondary N₂ = <span class="n-val">100 turns</span>.<br><br>
  <strong>Step 1 - Core flux:</strong><br>
  Φ<sub>max</sub> = 440 / (4.44 × 50 × 500) = 440 / 111,000 = <span class="n-val">0.00396 Wb ≈ 3.96 mWb</span><br><br>
  <strong>Step 2 - Secondary voltage:</strong><br>
  V₂ = V₁ × (N₂ / N₁) = 440 × (100 / 500) = <span class="n-val">88 V</span>
</div></div>

<div class="n-h2">Worked Example 2 - Turns &amp; Current Calculation (Common Surveyor Numerical)</div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body">
  <strong>Surveyor Q (numerical - Deswal, Kamath, Sanjib):</strong> A 440 V / 110 V transformer has 400 primary turns. How many secondary turns? If secondary current is 20 A, find primary current.<br><br>
  <strong>Step 1 - Secondary turns:</strong><br>
  V₁/V₂ = N₁/N₂ → N₂ = N₁ × (V₂/V₁) = 400 × (110/440) = <span class="n-val">100 turns</span><br><br>
  <strong>Step 2 - Primary current:</strong><br>
  I₁ = I₂ × (N₂/N₁) = 20 × (100/400) = <span class="n-val">5 A</span><br><br>
  <strong>Verification (ideal transformer - energy balance):</strong><br>
  V₁ × I₁ = 440 × 5 = 2200 VA. V₂ × I₂ = 110 × 20 = 2200 VA. ✅ Balanced.
</div></div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Turns/Current Rule:</strong> "Transformer is a magnetic machine. Voltage ratio = turns ratio (same direction). Current ratio = INVERSE of turns ratio. Step-UP voltage → step-DOWN current. More turns = more EMF. No AC → no change → no induction."</div></div>

<!-- ═══════════════════════════════════════════════════════════════
     SECTION 2 - IRON & COPPER LOSSES
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-losses">2. Iron (Core) &amp; Copper (Winding) Losses</div>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal, Sanjib, Kamath:</strong> "What are the losses in a transformer?" and "Why is the core laminated?" - both in every MMD oral.</div></div>

<div class="n-grid">
  <div class="n-card" style="border-color:var(--orange-border)">
    <div class="card-title" style="color:var(--orange)">Iron (Core) Losses - CONSTANT</div>
    <div class="card-desc">
      Present at no-load and full-load equally. Depend only on voltage and frequency - not on load current.<br><br>
      <strong>1. Hysteresis Loss</strong><br>
      Caused by the repeated reversal of magnetic domains in the core with each AC cycle.<br>
      <em>W<sub>h</sub> = K<sub>h</sub> × f × B<sub>max</sub><sup>1.6</sup> × Volume</em><br>
      Reduce by: grain-oriented silicon steel (low K<sub>h</sub>), and keeping B<sub>max</sub> low.<br><br>
      <strong>2. Eddy Current Loss</strong><br>
      AC flux induces circulating currents in the solid core → I²R heating.<br>
      <em>W<sub>e</sub> = K<sub>e</sub> × f² × B<sub>max</sub>² × t² × Volume</em><br>
      t = lamination thickness. <strong>W<sub>e</sub> ∝ t²</strong>: halving thickness → loss reduced to ¼.<br>
      Reduce by: laminating core with 0.3–0.5 mm silicon-steel sheets, each insulated with varnish.
    </div>
  </div>
  <div class="n-card" style="border-color:var(--red-border)">
    <div class="card-title" style="color:var(--red)">Copper (Winding) Losses - VARIABLE</div>
    <div class="card-desc">
      Present only under load. Proportional to the square of load current.<br><br>
      <strong>P<sub>cu</sub> = I₁²R₁ + I₂²R₂</strong><br><br>
      At full load: P<sub>cu(FL)</sub> measured during Short Circuit test.<br>
      At half load: P<sub>cu</sub> = (0.5)² × P<sub>cu(FL)</sub> = 0.25 × full-load copper loss.<br><br>
      Reduce by: using larger cross-section conductors (lower R), or transposed Litz wire in large transformers.
    </div>
  </div>
</div>

<div class="n-formula">Maximum Efficiency: η<sub>max</sub> occurs when Copper Loss = Iron Loss
<div class="label">η = P<sub>out</sub> / (P<sub>out</sub> + P<sub>iron</sub> + P<sub>cu</sub>) × 100%   |   At max efficiency: P<sub>cu</sub> = P<sub>iron</sub> → load = √(P<sub>iron</sub>/P<sub>cu(FL)</sub>) × rated kVA</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body">
  <strong>Surveyor Q (Deswal, Sanjib):</strong> What are the losses in a transformer?<br>
  <strong>Ideal Answer:</strong> Two types. (1) <strong>Iron (core) losses</strong> - constant, present at no-load. Two sub-components: <em>hysteresis</em> (domain reversal, reduced with silicon steel) and <em>eddy current</em> (circulating currents, reduced by laminating core with 0.3–0.5 mm insulated sheets). (2) <strong>Copper losses</strong> - variable, proportional to I²R in both windings, zero at no-load, maximum at full load. Efficiency is maximum when copper loss equals iron loss.
</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body">
  <strong>Surveyor Q (Deswal, Kamath):</strong> Why is the transformer core laminated?<br>
  <strong>Ideal Answer:</strong> To reduce eddy current losses. Alternating flux induces circulating currents in the core material, causing I²R heating. Eddy loss is proportional to the <strong>square of lamination thickness</strong> (W<sub>e</sub> ∝ t²). By cutting the core into thin laminations - <span class="n-val">0.3–0.5 mm</span> - each insulated with varnish, we break the eddy current path, greatly increasing resistance. Result: much smaller circulating currents and much lower heating. Halving thickness reduces eddy loss to <span class="n-val">¼</span>.
</div></div>

<table class="n-table">
  <tr><th>Loss Type</th><th>Cause</th><th>Varies with…</th><th>How to Reduce</th><th>Test that Measures It</th></tr>
  <tr><td>Hysteresis</td><td>Domain reversal in core per cycle</td><td>f, B<sub>max</sub><sup>1.6</sup></td><td>Silicon steel, low flux density</td><td>Open Circuit (OC) Test</td></tr>
  <tr><td>Eddy Current</td><td>Circulating currents in core</td><td>f², B<sub>max</sub>², t²</td><td>Laminations (0.3–0.5 mm), varnish insulation</td><td>Open Circuit (OC) Test</td></tr>
  <tr><td>Copper (I²R)</td><td>Resistance of windings</td><td>I² (load current squared)</td><td>Larger conductors; lower resistance</td><td>Short Circuit (SC) Test</td></tr>
</table>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Iron vs Copper:</strong> "Iron losses are CORE and CONSTANT (voltage-dependent). Copper losses are WINDING and VARIABLE (current-dependent, ∝ I²). Laminate the core to kill eddy currents - half the thickness, quarter the loss."</div></div>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 3 - NO-LOAD vs ON-LOAD
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-noload">3. No-Load vs On-Load Behaviour</div>

<div class="n-h2">Components of No-Load Current (I₀)</div>
<div class="n-info"><div class="icon">📖</div><div class="body">
  At no-load (secondary open), a small current I₀ flows in the primary - typically <span class="n-val">2–10%</span> of rated primary current.<br><br>
  I₀ has two components:<br>
  • <strong>I<sub>m</sub> (magnetising component):</strong> <span class="n-val">90° lagging</span> - creates and maintains the core flux. Pure reactive - does no real work.<br>
  • <strong>I<sub>c</sub> (core-loss component):</strong> In phase with voltage - supplies the iron losses (hysteresis + eddy current).<br><br>
  <strong>I₀ = √(I<sub>c</sub>² + I<sub>m</sub>²)</strong><br><br>
  No-load power factor is very low (<span class="n-val">0.1 to 0.3 lagging</span>) because the current is predominantly reactive (magnetising).
</div></div>

<div class="n-formula">I₁ = I₀ + (N₂/N₁) × I₂
<div class="label">On-load: primary current = no-load current + reflected secondary (load) current. Core flux remains approximately constant.</div></div>

<div class="n-h2">Why Primary Current Increases Under Load</div>
<div class="n-info"><div class="icon">📖</div><div class="body">
  When load is connected, secondary current I₂ produces a <strong>demagnetising MMF</strong> (N₂ × I₂) that opposes the core flux. If flux fell, back-EMF in the primary would reduce, causing primary to draw more current from the supply. This additional primary current (I₂ × N₂/N₁) creates an equal and opposite MMF that exactly cancels the secondary demagnetising MMF, <strong>restoring the flux to its original value</strong>.<br><br>
  Result: core flux stays essentially constant from no-load to full-load. Primary current automatically rises to match every increase in load current.
</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body">
  <strong>Surveyor Q (Kamath, Deswal):</strong> What current flows at no-load? What are its components?<br>
  <strong>Ideal Answer:</strong> A small magnetising current I₀, typically <span class="n-val">2–10%</span> of rated current. Two components: I<sub>m</sub> (magnetising, 90° lagging - creates flux) and I<sub>c</sub> (core-loss component, in-phase - supplies iron losses). Power factor very low (0.1–0.3 lagging) because the current is mainly reactive. No secondary current flows. This is why iron losses exist even with no load connected - the core is always energised.
</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body">
  <strong>Surveyor Q:</strong> Why does primary current increase when load is added?<br>
  <strong>Ideal Answer:</strong> Secondary current creates a demagnetising MMF (N₂ × I₂) that opposes the core flux. To maintain constant flux (required to maintain constant back-EMF and hence voltage), the primary automatically draws extra current from the supply. This extra reflected current (I₂ × N₂/N₁) produces equal-opposite MMF, restoring flux. Core flux stays nearly constant at all loads.
</div></div>

<table class="n-table">
  <tr><th>Condition</th><th>Secondary Circuit</th><th>Primary Current</th><th>Power Factor</th><th>Losses Present</th></tr>
  <tr><td>No-load</td><td>Open circuit</td><td class="hl">I₀ (2–10% of rated)</td><td class="bad">0.1–0.3 lagging (very low)</td><td>Iron losses only</td></tr>
  <tr><td>On-load</td><td>Load connected</td><td class="ok">I₀ + reflected load current</td><td>Depends on load PF (0.8–0.9 lagging typical)</td><td>Iron + copper losses</td></tr>
</table>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 4 - TRANSFORMER HUM
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-hum">4. Transformer Hum - Causes &amp; Action</div>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan, Nair:</strong> "Transformer is humming louder than usual - causes?"</div></div>

<div class="n-h2">Normal Hum</div>
<p class="n-p">Transformers hum at <strong>TWICE the supply frequency (100 Hz for 50 Hz supply)</strong>. Cause: <strong>magnetostriction</strong> - core laminations physically expand and contract with each magnetic flux cycle. At 50 Hz, flux cycles 50 times per second but core dimensions change twice per cycle (in both positive and negative flux peaks). Result: mechanical vibration at 100 Hz, transmitted through the mounting structure and oil as an audible hum.</p>

<div class="n-h2">Increased Hum - Causes &amp; Action</div>
<ul class="n-list">
  <li><strong>1. OVERVOLTAGE:</strong> Higher voltage → higher flux density → more magnetostriction → louder hum. Check supply voltage immediately.</li>
  <li><strong>2. LOOSE LAMINATIONS:</strong> Laminations vibrate more freely → louder rattle/hum. Core bolts must be tightened. Indicates maintenance needed.</li>
  <li><strong>3. LOOSE CORE BOLTS:</strong> Core not clamped tightly → laminations rattle against each other.</li>
  <li><strong>4. OVERLOAD:</strong> High current → higher magnetic forces on windings (due to I²) → additional mechanical vibration at 100 Hz.</li>
  <li><strong>5. HARMONICS IN SUPPLY:</strong> Non-sinusoidal flux from VFDs or rectifiers creates additional vibration frequencies above 100 Hz, changing the hum character.</li>
  <li><strong>6. LOOSE ACCESSORIES:</strong> External fittings (terminal box covers, radiator fins, bushings) vibrating sympathetically at 100 Hz.</li>
</ul>

<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Action on increased hum:</strong> (1) Check supply voltage - not overvoltage. (2) Check load - not overloaded. (3) Check and tighten core bolts. (4) Check for loose laminations. (5) Check oil level and temperature. (6) If harmonics suspected, check supply waveform with power analyser. If hum persists: schedule transformer inspection and take out of service if condition worsens.</div></div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Normal hum = 2× supply frequency (100 Hz at 50 Hz supply) = magnetostriction. Louder hum = Over-Voltage, Loose bolts, Overload, Harmonics, Accessories loose. "<strong>VOLHA</strong>".</div></div>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 5 - kVA RATING
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-kva-rating">5. Why Transformers &amp; Alternators Are Rated in kVA - Not kW</div>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyor favourite:</strong> "Why are transformers rated kVA, not kW?" and "Why are motors rated kW?" - top 5 question across all MMD examiners.</div></div>

<div class="n-grid">
  <div class="n-card" style="border-color:var(--orange-border)">
    <div class="card-title" style="color:var(--orange)">Transformer / Alternator → kVA Rating</div>
    <div class="card-desc">
      Two loss types limit the transformer:<br>
      • <strong>Copper losses (I²R)</strong> - depend on current magnitude only. Not affected by power factor.<br>
      • <strong>Iron losses (core)</strong> - depend on voltage magnitude only. Not affected by power factor.<br><br>
      Neither loss depends on power factor (cos φ). What limits the machine is the product <strong>V × I</strong> (volt-amperes), not V × I × cos φ (watts).<br><br>
      The transformer cannot control whether the connected load is 0.8 PF or unity PF. The same voltage causes the same iron loss; the same current causes the same copper loss.<br><br>
      Therefore: <strong>kVA is the correct rating</strong> - it expresses the actual loading limit of the machine.
    </div>
  </div>
  <div class="n-card" style="border-color:var(--blue-border)">
    <div class="card-title" style="color:var(--blue)">Motor → kW Rating</div>
    <div class="card-desc">
      A motor converts electrical energy into <strong>mechanical shaft output</strong>. The useful output is measured in <strong>watts (kW)</strong> because it is doing real work - turning a shaft against a mechanical load.<br><br>
      The kW rating tells you what mechanical power it delivers at the shaft. Motors have a nameplate power factor (typically 0.85–0.9), but the kW rating is what matters for sizing the driven machinery (pump, compressor, winch, etc.).<br><br>
      <strong>One-liner:</strong> Motor output = real work → kW. Transformer / alternator rating limit = V × I → kVA.
    </div>
  </div>
</div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>One-liner for the surveyor:</strong> "Transformer losses depend on voltage (iron) and current (copper) separately - both independent of power factor. Therefore the rating limit is V × I = kVA, not real power. A motor delivers shaft work, so it is rated in kW."</div></div>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 6 - DC ON TRANSFORMER
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-dc-supply">6. What Happens When DC Is Applied to a Transformer Primary</div>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask:</strong> "Can a transformer work on DC? What happens if DC is applied?"</div></div>

<div class="n-info"><div class="icon">📖</div><div class="body">
  A transformer works on electromagnetic induction: EMF is induced only when flux is <em>changing</em> (Faraday: EMF = −N × dΦ/dt).<br><br>
  <strong>With DC supply applied:</strong><br>
  • DC produces <strong>constant current</strong> → constant magnetic flux → dΦ/dt = 0 → <strong>no EMF induced in secondary</strong> → zero output.<br>
  • The primary winding behaves as a plain low-resistance coil. With DC, inductive reactance X<sub>L</sub> = 2πfL = 0 (f = 0 for DC).<br>
  • Primary resistance is very small (fraction of an ohm). With full DC voltage and no back-EMF, primary current = V / R<sub>winding</sub> → <strong>extremely large current</strong>.<br>
  • This massive overcurrent causes <strong>rapid, severe overheating</strong> → winding insulation melts → winding burns out → transformer is destroyed.
</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Summary:</strong> DC on a transformer primary = <strong>no output + dangerously high current + winding burnout</strong>. A transformer cannot operate on DC under any circumstances.</div></div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "No change → no induction → no output. But DC turns the primary into a near-short circuit: V ÷ R<sub>tiny</sub> = enormous current → winding fire."</div></div>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 7 - FREQUENCY COMPATIBILITY
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-frequency-compat">7. Operating a Transformer at Different Frequencies</div>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask:</strong> "What happens if you run a 60 Hz transformer on 50 Hz?" and "What about higher than rated frequency?"</div></div>

<div class="n-h2">Running a 60 Hz Transformer at 50 Hz (Lower Frequency)</div>
<div class="n-info"><div class="icon">📖</div><div class="body">
  From the EMF equation: <strong>Φ<sub>max</sub> = E / (4.44 × f × N)</strong><br><br>
  At lower frequency (50 Hz instead of 60 Hz), with the same voltage applied:<br>
  → <strong>Φ<sub>max</sub> increases</strong> - flux must rise to maintain the same induced EMF.<br>
  → Core approaches or enters <strong>magnetic saturation</strong>.<br>
  → Magnetising current increases sharply (non-linear B-H curve region).<br>
  → <strong>Increased copper losses</strong> from high magnetising current (I²R).<br>
  → <strong>Increased iron losses</strong> (P<sub>core</sub> ∝ B²).<br>
  → Risk of overheating and burnout.<br><br>
  <strong>Correct procedure:</strong> Reduce applied voltage in proportion:<br>
  V<sub>50Hz</sub> = V<sub>rated</sub> × (50/60) ≈ <span class="n-val">83% of rated voltage</span> to avoid saturation.
</div></div>

<div class="n-h2">Running a 50 Hz Transformer at Higher Frequency (e.g. 60 Hz)</div>
<div class="n-info"><div class="icon">📖</div><div class="body">
  At higher frequency, for the same applied voltage:<br>
  → Φ<sub>max</sub> <strong>decreases</strong> - flux reduces at higher frequency.<br>
  → Core operates well away from saturation - no saturation risk.<br>
  → Inductive reactance X<sub>L</sub> = 2πfL increases → reduced magnetising current → better power factor.<br>
  → Iron losses (eddy current ∝ f², hysteresis ∝ f × B<sup>1.6</sup>) may increase somewhat, but the dominant effect of lower flux means net core losses are generally manageable.<br><br>
  <strong>Generally safe</strong> to operate at slightly higher frequency, though design limits should still be respected.
</div></div>

<table class="n-table">
  <tr><th>Scenario</th><th>Effect on Flux (Φ<sub>max</sub>)</th><th>Core State</th><th>Risk</th><th>Correction</th></tr>
  <tr><td>60 Hz design run at 50 Hz (same V)</td><td class="bad">Increases (∝ 1/f)</td><td class="bad">Approaches saturation</td><td class="bad">Overheating, burnout</td><td>Reduce V to 83% of rated</td></tr>
  <tr><td>50 Hz design run at 60 Hz (same V)</td><td class="ok">Decreases</td><td class="ok">Further from saturation</td><td class="ok">Generally safe</td><td>None critical, watch iron losses</td></tr>
</table>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Rule of thumb:</strong> Lower frequency = higher flux = saturation risk → must reduce voltage. Higher frequency = lower flux = generally safe.</div></div>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 8 - AUTO vs DOUBLE-WOUND
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-auto">8. Auto-Transformer vs Double-Wound Transformer</div>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib, Vishwanathan, Deswal:</strong> "What is an auto-transformer?" and "Why is a double-wound transformer used for shore connection?"</div></div>

<table class="n-table">
  <tr><th>Feature</th><th>Auto-Transformer</th><th>Double-Wound</th></tr>
  <tr><td>Number of windings</td><td>One - shared (tapped)</td><td>Two - electrically separate</td></tr>
  <tr><td>Electrical isolation</td><td class="bad">❌ NONE - electrically connected</td><td class="ok">✅ Full galvanic isolation</td></tr>
  <tr><td>Size / weight</td><td class="ok">Smaller, lighter</td><td>Larger, heavier</td></tr>
  <tr><td>Efficiency</td><td class="ok">Higher (less copper used)</td><td>Slightly lower (two full windings)</td></tr>
  <tr><td>Cost</td><td class="ok">Lower</td><td>Higher</td></tr>
  <tr><td>Best voltage ratio</td><td>Small ratios (close to 1:1)</td><td>Any ratio</td></tr>
  <tr><td>Ship application</td><td>Motor starters (65%/80% tap), voltage adaptation (440↔380V)</td><td>Shore connection, safety circuits, HV step-down, medical space supply</td></tr>
</table>

<div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>Auto-transformer starter taps:</strong> For reduced-voltage motor starting, common taps are <span class="n-val">65%</span> and <span class="n-val">80%</span> of line voltage.<br>
  • At 65% tap: starting voltage = 0.65 × 440 = 286 V. Starting current drawn from supply = 65%² × DOL current = <span class="n-val">42% of DOL</span>. Starting torque = <span class="n-val">42% of DOL torque</span>.<br>
  • At 80% tap: starting current from supply = <span class="n-val">64% of DOL</span>. Starting torque = <span class="n-val">64% of DOL torque</span>.<br>
  The key advantage: supply current reduces as the <em>square</em> of the voltage ratio, unlike star-delta which cannot provide an intermediate voltage.
</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body">
  <strong>Surveyor Q (Sanjib, Vishwanathan):</strong> What is an auto-transformer and where is it used on ships?<br>
  <strong>Ideal Answer:</strong> One winding with a tapping - part acts as primary, part as secondary. Advantages: smaller, lighter, cheaper, more efficient than double-wound. Critical disadvantage: <strong>NO galvanic isolation</strong> - primary and secondary are electrically connected through the shared winding - fault can transfer full primary voltage to secondary circuit. Ship uses: auto-transformer starters (65%/80% tap reduces starting current ∝ tap²), voltage adaptation between different ship supplies (e.g. 440 V ↔ 415 V ↔ 380 V). <strong>NOT used</strong> where isolation is required: shore connection, safety circuits, intrinsically safe equipment, medical spaces.
</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body">
  <strong>Surveyor Q (Deswal, Kamath):</strong> Why is a double-wound transformer used for shore connection?<br>
  <strong>Ideal Answer:</strong> Shore connection requires complete galvanic isolation. Shore supply is solidly earthed (TN-S system); ship uses IT (unearthed, floating) system. The double-wound isolation transformer provides galvanic isolation between the shore primary and the ship's secondary. Without it, shore earth would connect directly to ship's distribution system, creating a stray current path → massive electrolytic corrosion of hull plating. An auto-transformer cannot provide this isolation as its windings are electrically continuous.
</div></div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> AUTO = one winding, cheap &amp; efficient, <strong>NO isolation</strong>. DOUBLE-WOUND = two windings, <strong>isolation = SAFETY</strong>. Shore connection ALWAYS double-wound to break the earth loop and protect the hull.</div></div>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 9 - CT & PT
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-ctpt">9. Current Transformer (CT) &amp; Potential Transformer (PT)</div>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>ALL surveyors ask CT open-circuit danger.</strong> PT earthing rule is also common. These are exam-critical safety items.</div></div>

<div class="n-h2">Current Transformer (CT)</div>
<div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>Purpose:</strong> Steps down high primary current to a safe, measurable secondary current (standard outputs: <span class="n-val">5 A</span> or <span class="n-val">1 A</span>) for instruments, energy meters, and protection relays without breaking the main circuit.<br><br>
  <strong>Construction:</strong> Very few primary turns - often just the main busbar or cable passing once through a toroidal core (N₁ = 1). Many secondary turns wound on the core. Ratio: e.g. 100/5 A, 1000/1 A.<br><br>
  <strong>Accuracy classes:</strong><br>
  • Metering CT: 0.1, 0.2, 0.5 - very accurate near rated current for billing and kWh metering.<br>
  • Protection CT: 5P10, 10P10 - designed to maintain accuracy up to 10× rated current, then may saturate. "5P10" = 5% composite error at accuracy limit factor of 10× rated.<br><br>
  <strong>CRITICAL SAFETY RULE - CT Open-Circuit Danger:</strong><br>
  If the CT secondary circuit is opened while primary current flows:<br>
  → No secondary current → no opposing MMF from secondary.<br>
  → Entire primary MMF drives the core into deep saturation.<br>
  → Flux swings create extremely high rate of change (dΦ/dt) every half-cycle.<br>
  → Dangerously <strong>HIGH secondary voltage induced</strong> - potentially hundreds or thousands of volts.<br>
  → Risk of: lethal electrocution, destruction of connected instruments, CT core damage from extreme heating, arc flash at terminals.<br><br>
  <strong>RULE: Always short-circuit the CT secondary using the shorting link before disconnecting any instrument, relay, or meter from the CT terminals.</strong>
</div></div>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>CT Safety Rule:</strong> NEVER open-circuit a CT secondary while primary current flows. Always apply the shorting link first. This is the single most critical CT rule in every MMD oral.</div></div>

<div class="n-h2">Potential Transformer (PT)</div>
<div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>Purpose:</strong> Steps down high line voltage to a safe secondary voltage - typically <span class="n-val">110 V AC</span> - for voltmeters, synchroscopes, protection relays, and AVR sensing, without loading the main circuit significantly.<br><br>
  <strong>Construction:</strong> High primary impedance. Connected in <strong>parallel</strong> with the circuit being monitored. High turns ratio for HV applications (e.g. 6600/110 V).<br><br>
  <strong>PT Earthing Rule (MANDATORY):</strong><br>
  One terminal of the PT secondary winding must be <strong>permanently earthed</strong>.<br>
  Reason: If internal insulation breaks down between primary and secondary windings, primary-level voltage (e.g. 440 V, 6.6 kV) would appear at secondary terminals, which are connected to instruments and operator-accessible meters. This would be <strong>instantly lethal</strong>. The earth connection ensures any such insulation fault immediately causes a ground fault → protection trips → safe isolation.<br><br>
  <strong>PT fusing:</strong> PT primary circuit must be fused to protect against PT internal faults and to enable safe isolation for maintenance. Fuse also protects the HV circuit from PT winding short circuit.
</div></div>

<table class="n-table">
  <tr><th>Feature</th><th>CT (Current Transformer)</th><th>PT (Potential Transformer)</th></tr>
  <tr><td>Measures</td><td>Current (A)</td><td>Voltage (V)</td></tr>
  <tr><td>Connected</td><td>In series with circuit</td><td>In parallel with circuit</td></tr>
  <tr><td>Secondary rating</td><td class="hl">5 A or 1 A standard</td><td class="hl">110 V standard</td></tr>
  <tr><td>Open-circuit hazard</td><td class="bad">LETHAL - high voltage on open secondary</td><td class="ok">Safe to open-circuit (not harmful)</td></tr>
  <tr><td>Short-circuit hazard</td><td class="ok">Safe - always operated near short-circuit</td><td class="bad">DANGEROUS - large short-circuit current in primary</td></tr>
  <tr><td>Safety rule</td><td class="bad">Never open-circuit; always short secondary first</td><td>Earth one secondary terminal permanently; fuse primary</td></tr>
</table>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 10 - CT KNEE POINT
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-ct-knee">10. CT Knee Point - Saturation &amp; Protection CT Specification</div>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: "What is the knee point of a CT?" - especially alongside protection relay topics.</strong></div></div>

<div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>Definition:</strong> The knee point voltage (V<sub>k</sub>) is the point on the CT secondary excitation curve at which a <strong>10% increase</strong> in secondary voltage produces a <strong>50% (or more) increase</strong> in the magnetising (excitation) current.<br><br>
  <strong>Physical meaning - two operating regions:</strong><br>
  • <strong>Below knee point (linear region):</strong> Core is unsaturated. Secondary current faithfully follows primary current. CT behaves correctly - protection relay receives accurate signal.<br>
  • <strong>Above knee point (saturation region):</strong> Core enters saturation. Relationship becomes non-linear. CT output <strong>stops faithfully reproducing primary current</strong>. The relay sees a distorted, reduced signal → may fail to operate or operate incorrectly.<br><br>
  <strong>Why it matters for protection CTs:</strong><br>
  During a fault, primary current may be 10×–20× rated current. If the CT saturates, the relay does not see the true fault current → protection fails to trip → severe equipment damage or fire.<br><br>
  <strong>Specification requirement:</strong> V<sub>k</sub> ≥ 2 × I<sub>fault_max</sub> × (R<sub>lead</sub> + R<sub>relay</sub>)
</div></div>

<table class="n-table">
  <tr><th>Region</th><th>Core State</th><th>CT Behaviour</th></tr>
  <tr><td>Below knee point</td><td class="ok">Unsaturated - linear</td><td class="ok">Secondary faithfully follows primary - accurate</td></tr>
  <tr><td>At knee point</td><td class="hl">Transition zone</td><td class="hl">10% voltage rise → 50% magnetising current rise - start of saturation</td></tr>
  <tr><td>Above knee point</td><td class="bad">Saturated - non-linear</td><td class="bad">Output distorted - protection may fail to trip</td></tr>
</table>

<div class="n-warn"><div class="icon">⚠️</div><div class="body">
  <strong>Metering CTs vs Protection CTs - opposite requirements:</strong><br>
  • <strong>Metering CTs</strong> are designed to <em>saturate</em> at high overcurrents - this <strong>protects</strong> the meters from high fault currents by limiting secondary current.<br>
  • <strong>Protection CTs</strong> must <em>NOT</em> saturate during fault conditions - they must stay linear so the relay sees the real fault current and can operate correctly.
</div></div>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 11 - BUCHHOLZ RELAY
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-buchholz">11. Buchholz Relay - Transformer Protection</div>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib, Kamath:</strong> Buchholz relay working and two-stage response. Top 5-star surveyor topic for oil-type transformers.</div></div>

<div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>What it is:</strong> A gas-and-oil-actuated protective relay installed in the pipe connecting the main transformer tank to the conservator (oil expansion) tank. Only fitted to oil-filled transformers with a conservator - not to hermetically sealed units or dry-type (cast-resin) transformers.
</div></div>

<div class="n-h2">Two-Stage Operation</div>
<table class="n-table">
  <tr><th>Stage</th><th>Trigger</th><th>Response</th><th>Fault Indicated</th></tr>
  <tr>
    <td class="hl"><strong>Stage 1 - ALARM</strong></td>
    <td>Slow accumulation of gas in relay housing - upper float rises as gas collects</td>
    <td class="hl">Alarm only - transformer remains online</td>
    <td>Minor internal fault: core hot-spot, partial discharge, insulation deterioration slowly generating gas</td>
  </tr>
  <tr>
    <td class="bad"><strong>Stage 2 - TRIP</strong></td>
    <td>Rapid oil surge caused by sudden violent internal fault - lower float or surge plate activates</td>
    <td class="bad">Instantaneous isolation - both HV and LV breakers trip simultaneously</td>
    <td>Severe internal fault: winding short circuit, inter-turn fault, flashover - producing explosive oil/gas surge</td>
  </tr>
</table>

<div class="n-h2">Why Gas Collects</div>
<p class="n-p">When transformer insulation or oil degrades due to an internal fault, heat decomposes the oil and paper insulation. This decomposition releases gases - predominantly hydrogen (H₂), methane (CH₄), ethylene (C₂H₄), and acetylene (C₂H₂). These gases rise through the oil and collect in the upper dome of the Buchholz relay housing, displacing oil and lifting the upper float to trigger Stage 1 alarm.</p>

<div class="n-h2">Gas Analysis (Dissolved Gas Analysis - DGA)</div>
<div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>H₂ (Hydrogen):</strong> Partial discharge (corona). Early warning - low-energy fault.<br>
  <strong>CH₄ (Methane):</strong> Low-temperature thermal fault in oil.<br>
  <strong>C₂H₄ (Ethylene):</strong> Thermal fault - hot metal above <span class="n-val">700°C</span>. Severe thermal deterioration.<br>
  <strong>C₂H₂ (Acetylene):</strong> <span style="color:var(--red);font-weight:bold">Arcing - most serious indicator.</span> Transformer should be taken offline immediately for investigation.<br>
  <strong>CO (Carbon Monoxide) + CO₂:</strong> Paper insulation (cellulose) overheating and ageing - winding insulation burning.<br><br>
  <strong>ETO duty after Stage 1 alarm:</strong> (1) Collect trapped gas using the test cock. (2) Test gas with a lighter - combustible gas confirms a fault. (3) Send oil sample to laboratory for full DGA. (4) Do NOT re-energise until fault is identified and cleared.
</div></div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Stage 1 = slow gas = ALARM = minor fault (warn, investigate). Stage 2 = oil surge = TRIP = major fault (isolate immediately). Gas interpretation: <strong>Acetylene = Arcing = Abandon (take offline). CO = Cellulose burning. H₂ = Partial discharge (early warning).</strong></div></div>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 12 - OIL TESTS
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-oil">12. Transformer Oil - Specifications &amp; Testing</div>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask BDV test values, moisture limits, and DGA gas interpretation.</strong></div></div>

<div class="n-h2">Transformer Oil Properties</div>
<div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>Flash point:</strong> Must exceed <span class="n-val">140°C</span> - fire safety requirement (SOLAS)<br>
  <strong>Low viscosity:</strong> Essential for natural thermosiphon convection cooling (ONAN) - oil must circulate freely<br>
  <strong>High dielectric strength:</strong> Must insulate between windings, taps, and core - prevents internal flashover<br>
  <strong>Good chemical stability:</strong> Resists oxidation over years of service - inhibited mineral oil standard<br>
  <strong>Low pour point:</strong> Must remain fluid at low ambient temperatures (especially in cold climates)
</div></div>

<div class="n-h2">BDV (Breakdown Voltage) Test</div>
<div class="n-formula">Electrodes: 2.5 mm gap · New oil: ≥ 70 kV · In-service minimum: ≥ 30 kV
<div class="label">Oil sample placed between two spherical electrodes 2.5 mm apart. AC voltage raised at a standard rate until oil flashes over (breakdown). Test repeated 6 times; average recorded.</div></div>

<div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>Why BDV decreases:</strong><br>
  • Moisture contamination - water molecules lower dielectric strength dramatically (even trace moisture is critical).<br>
  • Particulate contamination - carbon, metallic particles, fibres create conduction paths.<br>
  • Oxidation products - acid and sludge form after prolonged service.<br><br>
  <strong>Action if BDV falls below 30 kV:</strong> Transformer must not be energised. Oil must be centrifuged (for particulates and moisture) or vacuum-treated and filtered before returning to service.
</div></div>

<div class="n-h2">Karl Fischer Moisture Test</div>
<table class="n-table">
  <tr><th>Moisture Content</th><th>Condition</th><th>Action</th></tr>
  <tr><td>&lt; <span class="n-val">20 ppm</span></td><td class="ok">Healthy</td><td class="ok">Normal operation - continue routine monitoring</td></tr>
  <tr><td><span class="n-val">20–50 ppm</span></td><td class="hl">Marginal</td><td class="hl">Increase monitoring frequency - schedule treatment</td></tr>
  <tr><td>&gt; <span class="n-val">50 ppm</span></td><td class="bad">Requires treatment</td><td class="bad">Immediate centrifugal filtration or vacuum drying - do not delay</td></tr>
</table>

<div class="n-h2">DGA (Dissolved Gas Analysis)</div>
<div class="n-info"><div class="icon">📖</div><div class="body">
  Laboratory analysis of a transformer oil sample for dissolved gases - each gas or gas ratio diagnoses a specific internal fault:<br>
  • <strong>H₂ (Hydrogen):</strong> Low-energy partial discharges (corona) - early warning of insulation stress.<br>
  • <strong>CH₄ (Methane):</strong> Low-temperature thermal fault in oil (below 300°C).<br>
  • <strong>C₂H₂ (Acetylene):</strong> High-energy internal electrical arcing - <strong>CRITICAL</strong>. Indicates severe fault; offline immediately.<br>
  • <strong>C₂H₄ (Ethylene):</strong> Severe thermal oil degradation - hot metal above 700°C.<br>
  • <strong>CO + CO₂:</strong> Overheating of cellulose/paper winding insulation - ageing or thermal fault in solid insulation.
</div></div>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 13 - COOLING METHODS
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-coolingmethods">13. Cooling Methods - ONAN, ONAF, OFAF</div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Kamath</strong> asks the cooling designations and what each letter means.</div></div>

<p class="n-p">Cooling codes use <strong>four letters</strong>: (1) Internal cooling medium, (2) Internal circulation method, (3) External cooling medium, (4) External circulation method.<br>
Letters: <strong>O</strong> = Oil · <strong>A</strong> = Air · <strong>W</strong> = Water · <strong>N</strong> = Natural (convection) · <strong>F</strong> = Forced (pump or fan)</p>

<table class="n-table">
  <tr><th>Code</th><th>Full Meaning</th><th>Mechanism</th><th>Application</th></tr>
  <tr><td class="hl"><strong>ONAN</strong></td><td>Oil Natural, Air Natural</td><td>Oil rises by thermosiphon convection through radiators; radiators cooled by natural air convection and radiation</td><td class="ok">Small/medium transformers. Simplest - no pumps or fans. Most reliable.</td></tr>
  <tr><td class="hl"><strong>ONAF</strong></td><td>Oil Natural, Air Forced</td><td>Oil circulates by natural convection; fans blow forced air over external radiators to increase heat transfer</td><td>Medium/large transformers. Fans cut in at high temperature to boost capacity by 25–30%.</td></tr>
  <tr><td class="hl"><strong>OFAF</strong></td><td>Oil Forced, Air Forced</td><td>Oil pump circulates oil through external radiators; fans force air over radiators for maximum cooling</td><td>Large HV transformers, high continuous load. Maximum rating capability.</td></tr>
  <tr><td><strong>AN / AF</strong></td><td>Air Natural / Air Forced</td><td>Dry-type (cast-resin) transformer. No oil. Natural or forced air cooling of encapsulated windings</td><td>Common on modern ships - no oil, no fire risk, no conservator. Preferred for accommodation and engine room.</td></tr>
  <tr><td><strong>OFWF</strong></td><td>Oil Forced, Water Forced</td><td>Oil pump + water-cooled heat exchanger</td><td>Shore-based power station large transformer - not typical shipboard but may be asked.</td></tr>
</table>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> First two letters = what cools the <em>inside</em> (oil). Last two letters = what cools the <em>outside</em> (air). O→F (last two) = FANS added. N→F (second letter) = PUMP added. Progression: ONAN → ONAF → OFAF = progressively more forced cooling for progressively larger power ratings.</div></div>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 14 - PARALLEL OPERATION
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-parallel">14. Parallel Operation of Transformers - Conditions</div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Deswal, Kamath</strong> ask the conditions for paralleling transformers. Know all five conditions and which two are safety-critical.</div></div>

<ol class="n-steps">
  <li><strong>Same voltage ratio (turns ratio):</strong> If ratios differ, secondary voltages differ → circulating current flows even at no-load → winding heating and possible overload. Both transformers must have the same voltage ratio (e.g. both 440/110 V).</li>
  <li><strong>Same polarity:</strong> If polarities (terminal markings) are opposite, the secondary voltages buck each other → effective voltage = sum of both secondaries across a near-zero impedance → <strong>dead short circuit</strong>. Absolutely mandatory - check before connecting.</li>
  <li><strong>Same phase sequence</strong> (3-phase transformers): If phase sequences differ, phase-to-phase voltage differences cause cross-phase short circuits. Must be identical.</li>
  <li><strong>Same vector group / phase displacement:</strong> Both transformers must have the same vector group (e.g. both Dyn11). Transformers with different vector groups (e.g. Dyn11 and Dyn1) have 30° phase displacement between their secondary voltages → large circulating current → cannot be paralleled.</li>
  <li><strong>Same per-unit impedance (%Z):</strong> Ensures load shared in proportion to kVA rating. If %Z differs, transformer with lower %Z takes proportionally more load and may overload while the higher-impedance unit is underloaded. Ideal: both have the same %Z.</li>
</ol>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Two absolute musts - safety critical:</strong><br>
(2) Same POLARITY and (3) same PHASE SEQUENCE - wrong polarity or phase sequence creates a direct short circuit → catastrophic damage.<br>
Conditions (1), (4), and (5) affect load sharing quality and performance but not immediate safety.
</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body">
  <strong>Surveyor Q (Deswal):</strong> Conditions for parallel operation of transformers?<br>
  <strong>Ideal Answer:</strong> Five conditions: (1) Same voltage/turns ratio - avoid circulating no-load current; (2) Same polarity - else direct short circuit; (3) Same phase sequence - else cross-phase short; (4) Same vector group/phase displacement (e.g. Dyn11 with Dyn11) - else 30° phase difference and large circulating current; (5) Same per-unit impedance %Z - for proportional load sharing proportional to kVA rating. Conditions 2 and 3 are safety-critical. If %Z differs, lower-impedance transformer takes more load and may overload.
</div></div>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 14b - THREE-PHASE TRANSFORMER BANKS & CT ACCURACY
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-3phase-banks">🔁 Three Single-Phase Transformer Banks &amp; CT Accuracy Class</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: "One transformer in a 3-phase bank fails at sea - what can you do? What is an open-delta connection? What is a CT Class 0.2S and why is it used?"</strong></div></div>

<div class="n-h2">Three Single-Phase Transformers Forming a Three-Phase Bank</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why used on ships:</strong> A single three-phase transformer of very high rating (e.g. 5 MVA) is too large and heavy to ship or replace at sea. Three single-phase units of 1.67 MVA each can be handled individually, one spare can be carried, and any one can be replaced at sea by the ship's crane.<br><br>
<strong>Normal operation (delta-delta):</strong> All three single-phase transformers connected in delta-delta (or star-delta / delta-star). Total three-phase bank rating = <span class="n-val">3 × single-phase nameplate kVA</span>. Each unit handles one-third of total three-phase load.<br><br>
<strong>Failure of one unit:</strong> Remove the faulty transformer. The remaining two transformers can be reconnected in <strong>open-delta (V-connection)</strong> to maintain three-phase supply.</div></div>

<div class="n-h2">Open-Delta (V-Connection) - Emergency Operation</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Construction:</strong> Two single-phase transformers connected in a V-shape across the three-phase lines - one winding per phase pair, with the third side of the delta left open. The three-phase output is maintained (all three line voltages present) but the current capacity is shared between only two windings.<br><br>
<strong>Capacity in open-delta:</strong> Available three-phase kVA = <span class="n-val">√3 × single-unit kVA</span> = <span class="n-val">57.7%</span> of the original closed-delta bank kVA (not 2/3 = 66.7%). This is because the two units must now share the √3 phase displacement - each unit carries 1/√3 of what it would in a balanced three-phase closed delta. Utilisation factor = <span class="n-val">86.6%</span> of rated capacity of the two remaining units.<br><br>
<strong>Practical rule:</strong> Open-delta gives approximately <span class="n-val">58%</span> of original closed-delta capacity. Load must be reduced accordingly to avoid overloading the two remaining transformers.</div></div>

<table class="n-table">
  <tr><th>Configuration</th><th>Available kVA (3-phase bank)</th><th>Notes</th></tr>
  <tr><td class="ok"><strong>Closed delta-delta (all 3 units)</strong></td><td class="ok"><span class="n-val">3 × S₁</span></td><td>Normal operation; each unit at rated load</td></tr>
  <tr><td class="hl"><strong>Open-delta / V-connection (2 units)</strong></td><td class="hl"><span class="n-val">√3 × S₁ ≈ 1.732 × S₁</span><br><span style="font-size:0.85em">(= 57.7% of original 3S₁)</span></td><td>Emergency supply maintained; reduce total load to ≤58% of original bank rating</td></tr>
  <tr><td class="bad"><strong>Two units in simple parallel (wrong)</strong></td><td class="bad">Not applicable</td><td>Cannot maintain 3-phase balance - wrong configuration</td></tr>
</table>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory check:</strong> "Two out of three transformers → open delta → 58% capacity → must shed load." The number 57.7% comes from √3/3 = 1/√3 ≈ 0.577 - the ratio of open-delta to closed-delta power delivery capability.</div></div>

<div class="n-h2">CT Accuracy Class 0.2S - What the "S" Means</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standard CT accuracy classes (IEC 61869-2):</strong> 0.1, 0.2, 0.5, 1, 3, 5 - the number is the % ratio error at rated current. A Class 0.2 CT maintains ±0.2% accuracy from <span class="n-val">5% to 120%</span> of rated current.<br><br>
<strong>Class 0.2S - "Special" extended range:</strong> The "S" suffix designates a special class designed for <strong>revenue metering at low loads</strong>. A 0.2S CT maintains ±0.2% accuracy from <span class="n-val">1% to 120%</span> of rated current (extended down to 1% of rated current).<br><br>
<strong>Why it matters on ships:</strong> Port-side electrical metering (billing by port authority), generator output metering for fuel cost allocation, and LNG boil-off measurement systems operate at very low current when the vessel is at anchor or at berth. A standard 0.2 CT loses accuracy below 5% rated current - small loads are under-metered. A 0.2S CT accurately captures consumption even at 1–2% rated current.<br><br>
<strong>Other "S" class CTs:</strong> 0.5S is the next tier - accurate from 1% to 120%, ±0.5% error. Standard 0.5 is only accurate from 5%–120%.</div></div>

<table class="n-table">
  <tr><th>Class</th><th>Accuracy</th><th>Current Range</th><th>Typical Use</th></tr>
  <tr><td class="hl"><strong>0.2S</strong></td><td class="ok"><span class="n-val">±0.2%</span></td><td class="ok"><span class="n-val">1% to 120%</span> of I_rated</td><td>Revenue billing, port metering, LNG metering</td></tr>
  <tr><td>0.2</td><td class="ok">±0.2%</td><td class="hl">5% to 120% of I_rated</td><td>Precision metering at normal loads</td></tr>
  <tr><td class="hl"><strong>0.5S</strong></td><td class="hl"><span class="n-val">±0.5%</span></td><td class="ok"><span class="n-val">1% to 120%</span> of I_rated</td><td>Extended-range energy meters at moderate precision</td></tr>
  <tr><td>0.5</td><td>±0.5%</td><td>5% to 120% of I_rated</td><td>Standard energy meters, power monitoring</td></tr>
  <tr><td>1</td><td>±1%</td><td>5% to 120% of I_rated</td><td>General metering panels</td></tr>
  <tr><td>3, 5</td><td>±3%, ±5%</td><td>50%–120% of I_rated</td><td>Protection only - not for metering</td></tr>
</table>

<!-- ═══════════════════════════════════════════════════════════════
     SECTION 15 - OC & SC TESTS
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-tests">15. Open Circuit (OC) &amp; Short Circuit (SC) Tests</div>

<div class="n-h2">Open Circuit (No-Load) Test - Measures Iron Losses</div>
<div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>Setup:</strong> Apply rated voltage to the LV winding (low voltage side). Leave HV secondary <strong>open-circuited</strong>. Measure: P₀ (wattmeter), V₁ (voltmeter), I₀ (ammeter).<br><br>
  <strong>Why conducted on LV side:</strong> Rated voltage on LV side is safer and cheaper (lower voltage instruments); since iron losses are the target and primary current I₀ is small, measurements are easier on LV side.<br><br>
  <strong>Results from OC test:</strong><br>
  • P₀ = <strong>Iron losses</strong> (hysteresis + eddy current) at rated voltage - valid for all load conditions as iron loss is constant.<br>
  • I₀ = No-load current (magnetising + core-loss components).<br>
  • PF₀ = P₀ / (V₁ × I₀) - gives no-load power factor.<br>
  • Core-loss component I<sub>c</sub> = I₀ × cos φ₀; Magnetising component I<sub>m</sub> = I₀ × sin φ₀.
</div></div>

<div class="n-h2">Short Circuit (SC) Test - Measures Copper Losses</div>
<div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>Setup:</strong> <strong>Short-circuit the LV secondary</strong>. Apply REDUCED voltage to the HV primary - just enough to circulate rated current. Measure: P<sub>sc</sub> (wattmeter), V<sub>sc</sub> (voltmeter), I₁ (ammeter).<br><br>
  <strong>Why conducted on HV side:</strong> HV side has higher resistance → larger voltage drop measurable. Reduced voltage (typically 4–8% of rated) is needed - safer to apply to HV winding.<br><br>
  <strong>Results from SC test:</strong><br>
  • P<sub>sc</sub> = <strong>Copper losses</strong> at rated current (I₁²R₁ + I₂²R₂).<br>
  • V<sub>sc</sub> = Short circuit (impedance) voltage at rated current.<br>
  • <strong>Percentage impedance:</strong> Z% = (V<sub>sc</sub> / V₁<sub>rated</sub>) × 100%. Typical for power transformers: <span class="n-val">4–8%</span>.<br>
  • Lower Z% → higher fault current if secondary is short-circuited. Also determines load sharing when paralleled.
</div></div>

<table class="n-table">
  <tr><th>Test</th><th>Side Applied</th><th>Other Side</th><th>Voltage Applied</th><th>Measures</th></tr>
  <tr><td class="hl">Open Circuit (OC)</td><td>LV (low voltage side)</td><td>HV - open circuit</td><td class="ok">Full rated voltage</td><td>Iron losses, I₀, PF₀</td></tr>
  <tr><td class="hl">Short Circuit (SC)</td><td>HV (high voltage side)</td><td>LV - short circuit</td><td class="bad">Reduced (4–8% of rated)</td><td>Copper losses, Z%, V<sub>sc</sub></td></tr>
</table>

<div class="note-diagram-wrap">
  <img src="../data/diagrams/t05-transformer-oc-sc-test.webp" alt="Transformer SC (short circuit) test circuit — reduced voltage applied to HV side, LV side short-circuited; ammeter, voltmeter and wattmeter measure copper losses" loading="lazy" decoding="async">
  <div class="note-diagram-cap">Fig. SC Test Circuit — reduced voltage applied to HV side until rated current flows; LV side shorted; wattmeter reads copper losses (I²R); voltmeter reads V_sc used to calculate percentage impedance Z%</div>
</div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "OC test - Open secondary, rated voltage on LV side → Iron losses. SC test - Short secondary, reduced voltage on HV side → Copper losses and %Z."</div></div>

<div class="n-h2">Continuity / Winding-Resistance Test</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Purpose:</strong> confirm each winding is electrically continuous (no broken turn, joint or tap-changer fault) and that the phases are balanced. <strong>Method:</strong> isolate and discharge the transformer; with a <strong>low-resistance ohmmeter / micro-ohmmeter</strong> (a normal multimeter cannot read the very low winding resistance accurately) measure each winding end-to-end. A reading close to the expected few-ohm value = continuous; <strong>infinity / OL = open winding or broken tap connection</strong>. Compare the three phases - they should match within about 1-2%; a large difference points to a shorted turn or a bad joint. Also megger between windings and to earth for insulation.</div></div>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 16 - FLYBACK TRANSFORMER
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-flyback">16. Flyback Transformer - SMPS &amp; Power Electronics</div>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL:</strong> Sanjib asks this as an electronics-linked question. Different working principle from a conventional transformer.</div></div>

<p class="n-p">A flyback transformer (also called a line output transformer / LOPT) is a specialised magnetic component used in switch-mode power supplies (SMPS) and older CRT displays. Unlike a conventional transformer - where primary and secondary carry current simultaneously - a flyback transformer stores energy in the magnetic core during the switch-ON phase and releases it during switch-OFF.</p>

<div class="n-h2">Working - Two Phases (Fundamentally Different from Normal Transformer)</div>
<ol class="n-steps">
  <li><strong>PHASE 1 - SWITCH ON (Energy Store):</strong> The switching transistor (MOSFET or IGBT) closes. Primary current flows and increases linearly. Energy is stored in the magnetic core as increasing flux (core acts as an inductor). The <strong>secondary diode is reverse-biased</strong> - no secondary current flows during this phase. No energy is transferred to the load yet.</li>
  <li><strong>PHASE 2 - SWITCH OFF (Flyback / Energy Release):</strong> The transistor opens abruptly. The magnetic field in the core collapses rapidly - the polarity of the secondary induced voltage reverses (flyback). The secondary diode is now <strong>forward-biased</strong>. Stored magnetic energy is released into the secondary circuit, charging the output capacitor and supplying the load.</li>
</ol>

<div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>Key differences from a conventional transformer:</strong><br>
  • In a conventional transformer, primary and secondary currents flow simultaneously (mutual transfer of power).<br>
  • In a flyback transformer, primary and secondary currents are complementary - they flow in alternate phases (store then release).<br>
  • The core must have an air gap to store energy (gapped ferrite core). A conventional power transformer has no intentional air gap.<br><br>
  <strong>Ship Applications:</strong><br>
  • SMPS - all modern 24 V DC, 12 V DC, 5 V DC control power supplies for automation, navigation instruments, and IAS.<br>
  • Radar transmitter - high-voltage pulse generation for the magnetron (25–30 kV pulses).<br>
  • Isolated DC-DC converters - providing galvanic isolation between different voltage rails.<br>
  • VDR and GMDSS equipment power supplies.
</div></div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "Flyback = store then release. ON = store in core (diode blocks secondary). OFF = flyback releases energy into secondary (diode conducts). Core must have an air gap to store energy. Found in SMPS, radar, and all control power supplies."</div></div>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 17 - LVDT
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-lvdt">17. LVDT - Linear Variable Differential Transformer</div>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: "What is an LVDT and where is it used on board?"</strong></div></div>

<div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>Full name:</strong> Linear Variable Differential Transformer<br>
  <strong>Type:</strong> Inductive transducer - converts linear mechanical displacement into an AC electrical output voltage proportional to the displacement.<br><br>
  <strong>Construction:</strong><br>
  • One <strong>primary coil</strong> in the centre, energised with AC excitation.<br>
  • Two <strong>secondary coils</strong> (S1 and S2) wound symmetrically on either side of the primary, connected in <strong>series-opposition</strong> (outputs subtracted - differential output).<br>
  • A movable <strong>ferromagnetic core</strong> (the plunger) that slides axially inside the coil assembly without any physical contact - frictionless operation.
</div></div>

<div class="n-h2">Operating Principle</div>
<div class="n-info"><div class="icon">📖</div><div class="body">
  • <strong>Null (centre) position:</strong> Both secondary coils are coupled equally by the core. Induced voltages in S1 and S2 are equal and opposite → differential output = <strong>0 V</strong>.<br>
  • <strong>Core displaced towards S1:</strong> S1 coupling increases, S2 coupling decreases → net differential output voltage, in phase with primary excitation, proportional to displacement magnitude.<br>
  • <strong>Core displaced towards S2:</strong> Output is equal magnitude but <strong>reversed in phase</strong>.<br>
  • <strong>Output magnitude</strong> = amount of displacement. <strong>Output phase</strong> = direction of displacement.
</div></div>

<div class="n-h2">Key Advantages</div>
<div class="n-info"><div class="icon">📖</div><div class="body">
  ✅ <strong>No physical contact</strong> between core and coils - frictionless, no wear, infinite service life in theory.<br>
  ✅ <strong>High sensitivity and accuracy</strong> - can measure displacements down to micrometres (μm).<br>
  ✅ Rugged construction - suitable for marine and industrial environments (vibration, temperature, humidity).<br>
  ✅ Output is proportional and linear over the full working range.<br>
  ✅ Provides inherent galvanic isolation between input (mechanical) and output (electrical).
</div></div>

<div class="n-h2">Marine Applications</div>
<div class="n-info"><div class="icon">📖</div><div class="body">
  • <strong>Governor actuator feedback</strong> - measuring fuel rack position or valve stem travel on main engine governor.<br>
  • <strong>Autopilot / steering gear</strong> - measuring rudder position feedback signal to the steering control system.<br>
  • <strong>Engine control systems</strong> - measuring throttle or fuel valve linear position for precise control.<br>
  • <strong>Cargo valve position feedback</strong> on tankers - measuring valve opening percentage.<br>
  • <strong>Hull stress monitoring</strong> - measuring structural deflection in some installations.
</div></div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> LVDT = "Linear Variable Differential Transformer." Three coils - one primary, two secondary. Moving core. No contact. Output ∝ displacement magnitude. Phase of output = direction. Found in governors, autopilots, and valve position sensors.</div></div>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 18 - MSB MECHANICAL INTERLOCK
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-msb-interlock">18. Mechanical Interlock for Transformer / Bus Sources at MSB</div>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: "What is a mechanical interlock on the MSB bus-tie or transformer incoming breakers?"</strong></div></div>

<div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>Purpose:</strong> When two or more independent power sources (e.g. two transformer feeders, or two incoming ACBs from different busbars) are connected to a common bus, a mechanical interlock <strong>physically prevents both source breakers from being closed simultaneously</strong>.<br><br>
  <strong>Why it is needed:</strong><br>
  • If two transformer secondaries are both connected to the same bus without proper synchronisation, they may not be in phase with each other.<br>
  • This creates a large <strong>circulating fault current</strong> (fault kVA × voltage phase difference) → tripping of both transformers and potential winding damage.<br>
  • Even if voltages are matched in magnitude, any phase difference or frequency difference causes large circulating currents.<br><br>
  <strong>How the interlock works:</strong><br>
  • A physical <strong>key-exchange interlock</strong> or <strong>sliding bar mechanism</strong> is fitted to the two breaker operating handles.<br>
  • Closing breaker A captures the operating key. The key must be extracted from A (which requires A to be open) before it can be inserted into B to close B.<br>
  • Result: only ONE source breaker can be closed at any time - physically impossible to close both simultaneously.<br><br>
  <strong>Where applied on ships:</strong><br>
  • Shore connection transformer incoming breaker vs. main generator ACB - prevents accidental paralleling of unsynchronised shore supply with running generator.<br>
  • MSB bus-section (bus-tie) breaker with section breakers in split-bus arrangements - prevents all three from closing simultaneously.<br>
  • Emergency switchboard - between shore emergency supply and emergency generator.
</div></div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>One-liner:</strong> Mechanical interlock = physical lock preventing two source breakers from closing simultaneously → prevents paralleling of unmatched or unsynchronised sources without proper synchronisation check.</div></div>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 19 - SURVEYOR Q&A
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-surveyorqa">19. Surveyor Questions &amp; Ideal Answers</div>

<div class="n-crit"><div class="icon">🔴</div><div class="body">These are exact question formats from MMD orals (Mumbai/Noida). Study the key points and named examiners.</div></div>

<table class="n-table">
  <tr><th>Examiner Question</th><th>Named Surveyor(s)</th><th>Ideal Answer - Key Points</th></tr>
  <tr>
    <td>What is the working principle of a transformer?</td>
    <td class="hl">All surveyors</td>
    <td>Mutual electromagnetic induction. AC in primary → alternating flux in core → by Faraday's law (EMF = −N×dΦ/dt) → EMF induced in secondary. V₁/V₂ = N₁/N₂. Step-up: more secondary turns = higher voltage, lower current. Cannot work on DC - constant flux, no dΦ/dt, no induction.</td>
  </tr>
  <tr>
    <td>Why must a CT secondary NEVER be open-circuited?</td>
    <td class="hl">ALL surveyors - ⭐⭐⭐⭐⭐</td>
    <td>With no secondary current, there is no opposing MMF. Primary current drives the core into deep saturation. Massive dΦ/dt each half-cycle induces thousands of lethal volts on the secondary terminals - risk of electrocution and CT core destruction. <strong>Always short the CT secondary first before disconnecting any instrument.</strong></td>
  </tr>
  <tr>
    <td>Why is the transformer core laminated?</td>
    <td class="hl">Deswal, Kamath</td>
    <td>To reduce eddy current losses. Eddy loss ∝ t² (thickness squared). Laminating into 0.3–0.5 mm sheets, each insulated with varnish, breaks the eddy current path → high resistance → tiny currents → very low loss. Halving thickness → eddy loss reduced to ¼.</td>
  </tr>
  <tr>
    <td>What are the losses in a transformer?</td>
    <td class="hl">Deswal, Sanjib, Kamath</td>
    <td>Iron (core) losses = constant, no-load: hysteresis (domain reversal, reduce with silicon steel) + eddy current (reduce by laminating). Copper losses = variable, load-dependent: I²R in both windings. Max efficiency when copper loss = iron loss.</td>
  </tr>
  <tr>
    <td>Why is a double-wound transformer used for shore connection instead of an auto-transformer?</td>
    <td class="hl">Kamath, Deswal</td>
    <td>Shore connection requires galvanic isolation. Shore supply = TN-S (solidly earthed). Ship = IT system (floating/unearthed). Double-wound transformer breaks the earth loop. Without isolation: stray currents via hull → massive electrolytic corrosion. Auto-transformer has no isolation - shared winding = electrically connected.</td>
  </tr>
  <tr>
    <td>Conditions for paralleling transformers?</td>
    <td class="hl">Deswal, Kamath</td>
    <td>(1) Same voltage ratio - no circulating no-load current. (2) Same polarity - else direct short circuit. (3) Same phase sequence - else cross-phase short. (4) Same vector group - else phase displacement and circulating current. (5) Same %Z - for proportional load sharing. Conditions 2 and 3 are safety-critical.</td>
  </tr>
  <tr>
    <td>Transformer humming louder than usual - causes?</td>
    <td class="hl">Vishwanathan, Nair</td>
    <td>Normal hum = magnetostriction at 100 Hz (2× supply frequency). Louder hum: overvoltage (higher flux → more magnetostriction), overload (higher winding forces), loose core bolts, loose laminations, harmonics in supply, loose external accessories.</td>
  </tr>
  <tr>
    <td>What is a Buchholz relay?</td>
    <td class="hl">Sanjib, Kamath</td>
    <td>Gas-actuated protective relay in the pipe between main tank and conservator. Stage 1: slow gas accumulation → alarm only (minor fault: partial discharge, insulation degradation). Stage 2: rapid oil surge → instantaneous trip of HV and LV breakers (major fault: winding short circuit, flashover). Acetylene in gas sample = arcing = serious fault → take offline immediately.</td>
  </tr>
  <tr>
    <td>Why are transformers rated in kVA and not kW?</td>
    <td class="hl">All surveyors</td>
    <td>Transformer losses: iron loss depends on voltage, copper loss depends on current - neither depends on power factor. What limits the transformer is V × I (kVA), not V × I × cosφ (kW). Motors are rated kW because they deliver mechanical shaft output (real work).</td>
  </tr>
  <tr>
    <td>What is an LVDT?</td>
    <td class="hl">Sanjib, Vishwanathan</td>
    <td>Linear Variable Differential Transformer. Inductive transducer - converts linear mechanical displacement to AC output voltage. Three coils: one primary, two secondary in series-opposition. Moving ferromagnetic core. No contact. Output magnitude = displacement; output phase = direction. Used in governors, steering gear, valve position sensing.</td>
  </tr>
  <tr>
    <td>What happens if DC is applied to a transformer?</td>
    <td class="hl">Sanjib, Deswal</td>
    <td>No output - DC gives constant flux, no dΦ/dt, no induction. Primary acts as a low-resistance coil - V / R<sub>winding</sub> = huge current → rapid overheating → winding burnout. Transformer is destroyed.</td>
  </tr>
</table>


<!-- ═══════════════════════════════════════════════════════════════
     SECTION 20 - QUICK REVISION
═══════════════════════════════════════════════════════════════ -->
<div class="n-h1" id="s-quickrev">20. Quick Revision - Surveyor Frequency Guide</div>

<table class="n-table">
  <tr><th>Topic</th><th>Surveyor Frequency</th><th>Key Points to Memorise</th></tr>
  <tr>
    <td>CT Open-Circuit Safety</td>
    <td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td>
    <td>NEVER open-circuit CT secondary under load. Thousands of volts → electrocution. Short the secondary first. Always.</td>
  </tr>
  <tr>
    <td>EMF Equation</td>
    <td class="hl">⭐⭐⭐⭐⭐ All surveyors</td>
    <td>E = 4.44 × f × N × Φ<sub>max</sub>. If frequency drops → flux rises → saturation → overheat. Must reduce voltage proportionally.</td>
  </tr>
  <tr>
    <td>Buchholz Relay</td>
    <td class="hl">⭐⭐⭐⭐⭐ Sanjib, Kamath</td>
    <td>Stage 1 = slow gas = alarm (minor). Stage 2 = oil surge = trip (major). Acetylene = arcing = serious. CO = paper burning.</td>
  </tr>
  <tr>
    <td>Iron vs Copper Loss</td>
    <td class="hl">⭐⭐⭐⭐ Deswal, Sanjib</td>
    <td>Iron = constant (voltage-dependent, core). Copper = variable (I²R, winding). Max η when P<sub>cu</sub> = P<sub>iron</sub>. Laminate to kill eddy: half thickness → ¼ loss.</td>
  </tr>
  <tr>
    <td>kVA vs kW Rating</td>
    <td class="hl">⭐⭐⭐⭐ All surveyors</td>
    <td>Losses independent of PF → rating limit = V × I = kVA. Motor delivers shaft work → kW.</td>
  </tr>
  <tr>
    <td>Parallel Conditions</td>
    <td class="hl">⭐⭐⭐⭐ Deswal, Kamath</td>
    <td>5 conditions. Safety-critical: same polarity + same phase sequence (else short circuit). Performance: same V ratio, vector group, %Z (load sharing).</td>
  </tr>
  <tr>
    <td>Auto vs Double-Wound</td>
    <td class="hl">⭐⭐⭐⭐ Sanjib, Vishwanathan, Deswal</td>
    <td>Auto = one winding, cheap, NO isolation. Double-wound = two windings, full isolation. Shore connection ALWAYS double-wound (TN-S to IT earth loop break).</td>
  </tr>
  <tr>
    <td>Transformer Hum</td>
    <td class="hl">⭐⭐⭐ Vishwanathan, Nair</td>
    <td>Normal = magnetostriction at 100 Hz. Louder = overvoltage / overload / loose bolts / loose laminations / harmonics / loose accessories.</td>
  </tr>
  <tr>
    <td>Oil BDV Test</td>
    <td class="hl">⭐⭐⭐ Kamath, Sanjib</td>
    <td>2.5 mm electrode gap. New oil ≥ 70 kV. In-service minimum ≥ 30 kV. Below 30 kV: do not energise, treat oil immediately.</td>
  </tr>
  <tr>
    <td>Cooling Codes</td>
    <td class="hl">⭐⭐⭐ Kamath</td>
    <td>ONAN = oil/air natural. ONAF = fans added. OFAF = oil pump + fans. AN/AF = dry type (no oil, ships).</td>
  </tr>
  <tr>
    <td>OC / SC Tests</td>
    <td class="hl">⭐⭐⭐ Deswal, Sanjib</td>
    <td>OC test on LV side → iron losses. SC test on HV side → copper losses + %Z (4–8% typical).</td>
  </tr>
  <tr>
    <td>DC on Transformer</td>
    <td class="hl">⭐⭐⭐ Sanjib, Deswal</td>
    <td>No output (constant flux, no induction). Huge current (V / R<sub>tiny</sub>) → winding burnout. Transformer destroyed.</td>
  </tr>
  <tr>
    <td>Flyback Transformer</td>
    <td class="hl">⭐⭐⭐ Sanjib</td>
    <td>SMPS / switching. ON = store energy in core. OFF = flyback releases to secondary. Primary and secondary NOT simultaneous. Found in control PSUs, radar HV supplies.</td>
  </tr>
  <tr>
    <td>CT Knee Point</td>
    <td class="hl">⭐⭐⭐ Sanjib, Kamath</td>
    <td>Knee point = start of saturation. Protection CT must NOT saturate during fault (V<sub>k</sub> ≥ 2 × I_fault × R_burden). Metering CT designed to saturate (protects meter).</td>
  </tr>
  <tr>
    <td>LVDT</td>
    <td class="hl">⭐⭐ Sanjib, Vishwanathan</td>
    <td>Linear displacement → AC voltage. Three coils, moving core, no contact. Output magnitude = displacement, phase = direction. Used: governor, steering gear, valve position.</td>
  </tr>
  <tr>
    <td>MSB Mechanical Interlock</td>
    <td class="hl">⭐⭐ All surveyors</td>
    <td>Physical key-exchange or bar mechanism preventing two source breakers closing simultaneously → prevents unsynchronised paralleling → no circulating fault current.</td>
  </tr>
  <tr>
    <td>Karl Fischer Moisture Test</td>
    <td class="hl">⭐⭐ Kamath, Sanjib</td>
    <td>&lt;20 ppm = healthy. 20–50 ppm = marginal. &gt;50 ppm = treat immediately (centrifuge / vacuum dry).</td>
  </tr>
</table>

  </div>
</div>
</div>
`);
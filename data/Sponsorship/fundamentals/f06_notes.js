window.loadNotes("F06", `<div class="view" id="view-notes-f06">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F06')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F06 - Transformers</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 6 of 25 · Difficulty ★★★★☆ · Study Time 90-105 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-principle')">Working Principle</button>
    <button class="anc-btn" onclick="jumpTo('s-emf-eq')">EMF Equation</button>
    <button class="anc-btn" onclick="jumpTo('s-turnsratio')">Turns Ratio</button>
    <button class="anc-btn" onclick="jumpTo('s-construction')">Construction</button>
    <button class="anc-btn" onclick="jumpTo('s-types')">Types of Transformers</button>
    <button class="anc-btn" onclick="jumpTo('s-losses')">Losses</button>
    <button class="anc-btn" onclick="jumpTo('s-efficiency')">Efficiency</button>
    <button class="anc-btn" onclick="jumpTo('s-regulation')">Voltage Regulation</button>
    <button class="anc-btn" onclick="jumpTo('s-cooling')">Cooling Methods</button>
    <button class="anc-btn" onclick="jumpTo('s-parallel')">Parallel Operation</button>
    <button class="anc-btn" onclick="jumpTo('s-vectorgroups')">Three-Phase Connections</button>
    <button class="anc-btn" onclick="jumpTo('s-instrument')">Instrument Transformers</button>
    <button class="anc-btn" onclick="jumpTo('s-marine')">Marine Applications</button>
    <button class="anc-btn" onclick="jumpTo('s-units')">Units &amp; Formulae</button>
    <button class="anc-btn" onclick="jumpTo('s-numericals')">Worked Numericals</button>
    <button class="anc-btn" onclick="jumpTo('s-viva')">Viva Questions</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
    <button class="anc-btn" onclick="jumpTo('s-summary')">Module Summary</button>
  </div>

  <div class="note-content">


  <!-- OBJECTIVES -->
  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to explain the transformer's working principle from mutual inductance, derive and apply the transformer EMF equation, use turns ratio to relate voltage, current and impedance between windings, describe core type and shell type construction and why laminated cores are used, distinguish step-up, step-down, isolation, auto and current transformers, separate iron loss from copper loss and explain why each behaves differently with load, calculate efficiency and explain why it peaks where copper loss equals iron loss, define voltage regulation and explain what causes it, describe cooling methods and their designations, state the conditions for parallel operation of transformers, describe common three-phase transformer connections and why a star-delta connection is favoured for shipboard step-down duty, explain the role of current and potential transformers in metering and protection, and solve numericals on all of the above.</p>
  <p class="n-p">F05 covered mutual inductance as one coil inducing EMF in another. A transformer is that principle built into a complete, purpose-engineered machine, and it is arguably the single most common piece of electrical equipment on a ship after the alternator and the motor, lighting transformers, control transformers, and where fitted, high-to-low voltage distribution transformers all work on exactly the theory below.</p>


  <!-- PRINCIPLE -->
  <div class="n-h1" id="s-principle">Working Principle</div>
  <p class="n-p"><strong>Definition:</strong> a transformer is a static electrical machine that transfers electrical energy from one circuit to another, at the same frequency, usually with a change in voltage and current, through the principle of mutual inductance, with no direct electrical connection between the two circuits and no moving parts.</p>
  <p class="n-p"><strong>Explanation, simple English:</strong> two separate coils, the primary and the secondary, are wound on a common iron core but never touch each other electrically. When AC flows in the primary, it creates an alternating flux in the core. That alternating flux links the secondary winding too, and by Faraday's Law from F05, an EMF is induced in the secondary purely because the flux linking it is changing. No current ever crosses from primary to secondary directly; only the changing magnetic field does the work.</p>
  <div class="n-crit"><div class="icon">❌</div><div class="body"><strong>Interview trap:</strong> "Can a transformer work on DC?" No. A steady DC current produces a steady, unchanging flux, and as established in F05, Faraday's Law induces EMF only from a <em>changing</em> flux linkage. With DC, after the brief instant of switch-on, flux stops changing and secondary EMF collapses to zero, worse, sustained DC applied to a transformer's low-resistance primary draws a very high steady current with nothing to limit it, since the inductive reactance that normally limits current only exists for changing current, risking winding burnout.</div></div>
  <p class="n-p"><strong>Shipboard:</strong> this is exactly why a ship's DC-fed emergency and battery systems (covered fully in F19) cannot use ordinary transformers to change DC voltage; DC-DC conversion instead uses switching power electronics, which effectively chop the DC into a changing waveform first, precisely to satisfy the same requirement a transformer needs, changing flux.</p>


  <!-- EMF EQUATION -->
  <div class="n-h1" id="s-emf-eq">EMF Equation of a Transformer</div>
  <p class="n-p">The same underlying relationship derived for the alternator in F05 applies here, since both are cases of Faraday's Law applied to a sinusoidal flux.</p>
  <div class="n-formula">E = 4.44 × f × Φ<sub>m</sub> × N<div class="label">E = RMS induced EMF (V) · f = frequency (Hz) · Φ<sub>m</sub> = maximum flux in the core (Wb) · N = number of turns</div></div>
  <p class="n-p">Applied separately to each winding using its own turns count, with the same f and Φ<sub>m</sub> common to both since they share the same core:</p>
  <div class="n-formula">E<sub>1</sub> = 4.44 f Φ<sub>m</sub> N<sub>1</sub>&nbsp;&nbsp;&nbsp;&nbsp;E<sub>2</sub> = 4.44 f Φ<sub>m</sub> N<sub>2</sub><div class="label">Subscript 1 = primary · subscript 2 = secondary</div></div>
  <p class="n-p"><strong>Why frequency never changes across a transformer:</strong> the secondary EMF is induced by the same alternating flux that the primary current created in the shared core; the flux alternates at exactly the primary supply frequency, so the induced secondary EMF must alternate at that same frequency. A transformer changes voltage and current; it can never change frequency, a distinction interviewers frequently probe.</p>


  <!-- TURNS RATIO -->
  <div class="n-h1" id="s-turnsratio">Turns Ratio and the Ideal Transformer</div>
  <p class="n-p">Dividing the two EMF equations above cancels the common 4.44 f Φ<sub>m</sub> term, leaving a clean, purely geometric relationship.</p>
  <div class="n-formula">E<sub>1</sub> / E<sub>2</sub> = N<sub>1</sub> / N<sub>2</sub> = a<div class="label">a = turns ratio · N<sub>1</sub>, N<sub>2</sub> = primary, secondary turns</div></div>
  <p class="n-p">For an ideal (lossless) transformer, input apparent power equals output apparent power, which forces current to scale inversely with the turns ratio, exactly opposite to how voltage scales.</p>
  <div class="n-formula">I<sub>1</sub> / I<sub>2</sub> = N<sub>2</sub> / N<sub>1</sub> = 1/a<div class="label">Step up in voltage always means step down in current, and vice versa</div></div>
  <table class="n-table">
    <tr><th>Ratio N₁/N₂</th><th>Effect on Voltage</th><th>Effect on Current</th><th>Type</th></tr>
    <tr><td>Greater than 1</td><td class="bad">Steps down</td><td class="ok">Steps up</td><td>Step-down transformer</td></tr>
    <tr><td>Less than 1</td><td class="ok">Steps up</td><td class="bad">Steps down</td><td>Step-up transformer</td></tr>
    <tr><td>Equal to 1</td><td>No change</td><td>No change</td><td>Isolation transformer</td></tr>
  </table>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Why interviewers push on this:</strong> a transformer is often loosely described as "increasing power," which is wrong and worth correcting cleanly in an interview. An ideal transformer changes the voltage-to-current ratio, never the power. Apparent power in equals apparent power out (minus small real losses in a real machine); a step-up transformer trades current for voltage, it never manufactures extra energy.</div></div>
  <p class="n-p"><strong>Impedance transformation:</strong> because voltage scales by a and current scales by 1/a, impedance viewed from the primary side scales by a². This property is used deliberately in audio and instrumentation matching transformers, and explains why a fault or short on the low-voltage secondary reflects back to the primary as a very different, much lower apparent impedance.</p>
  <div class="n-formula">Z<sub>1</sub> = a² × Z<sub>2</sub><div class="label">Impedance referred from secondary to primary</div></div>


  <!-- CONSTRUCTION -->
  <div class="n-h1" id="s-construction">Construction</div>
  <table class="n-table">
    <tr><th>Part</th><th>Purpose</th></tr>
    <tr><td>Core</td><td class="ok">Provides a low-reluctance path for flux, linking primary and secondary windings tightly</td></tr>
    <tr><td>Primary winding</td><td>Connected to the incoming supply, sets up the alternating flux</td></tr>
    <tr><td>Secondary winding</td><td class="hl">Delivers the transformed output voltage to the load</td></tr>
    <tr><td>Insulation between windings and core</td><td>Maintains electrical isolation while allowing magnetic coupling</td></tr>
    <tr><td>Tank and cooling medium (oil-filled types)</td><td>Removes heat generated by losses, provides additional insulation</td></tr>
    <tr><td>Tap changer (where fitted)</td><td>Adjusts turns ratio in steps to compensate for supply voltage variation</td></tr>
    <tr><td>Bushings / terminals</td><td>Bring winding connections out through the tank or enclosure safely</td></tr>
  </table>

  <div class="n-h2">Why the Core Is Laminated</div>
  <p class="n-p">A solid iron core, sitting in an alternating flux, would itself act like a short-circuited single-turn secondary, with large circulating eddy currents induced directly in the iron and dissipated as heat, an effect explained fully under losses below. Splitting the core into thin sheets (laminations), each individually insulated with a thin varnish coating, breaks up the paths available for these circulating currents, confining them to small loops within each thin sheet and sharply cutting the resulting loss. This is a construction detail, not a minor manufacturing choice; an unlaminated power transformer core would overheat destructively within minutes.</p>

  <div class="n-h2">Core Type vs Shell Type</div>
  <table class="n-table">
    <tr><th>Aspect</th><th>Core Type</th><th>Shell Type</th></tr>
    <tr><td>Arrangement</td><td class="ok">Windings surround the core limbs</td><td class="hl">Core surrounds the windings</td></tr>
    <tr><td>Flux path</td><td>One path per limb</td><td>Core provides two paths, flux splits around the windings</td></tr>
    <tr><td>Mechanical strength</td><td>Lower, windings more exposed</td><td class="ok">Higher, core gives mechanical protection to windings</td></tr>
    <tr><td>Typical use</td><td>Large power transformers</td><td>Smaller distribution and control transformers</td></tr>
  </table>


  <!-- TYPES -->
  <div class="n-h1" id="s-types">Types of Transformers</div>
  <table class="n-table">
    <tr><th>Type</th><th>Function</th><th>Shipboard Example</th></tr>
    <tr><td>Step-down</td><td class="hl">Reduces voltage from primary to secondary</td><td class="ok">440 V to 220 V lighting transformer, control transformers to 110/24 V</td></tr>
    <tr><td>Step-up</td><td>Raises voltage from primary to secondary</td><td>Rare on ships except at HV generation, 690 V/6.6 kV systems</td></tr>
    <tr><td>Isolation transformer</td><td>Same voltage both sides, electrically isolates the secondary circuit</td><td>Safety supplies for portable tools, medical or sensitive electronics</td></tr>
    <tr><td>Auto-transformer</td><td>Single winding, shared between primary and secondary, tapped partway</td><td>Motor soft-starting (star-delta and auto-transformer starters, F11)</td></tr>
    <tr><td>Current transformer (CT)</td><td>Steps down a large current to a small, standard metering/protection current</td><td>Ammeters, protection relays across the switchboard</td></tr>
    <tr><td>Potential transformer (PT/VT)</td><td>Steps down a high voltage to a small, standard metering voltage</td><td>Voltmeters and protection relays on HV systems</td></tr>
  </table>

  <div class="n-h2">Auto-Transformer, a Closer Look</div>
  <p class="n-p"><strong>Definition:</strong> a transformer with a single winding, part of which is common to both the primary and secondary circuits, transferring some energy by direct electrical connection and the rest by the usual transformation principle.</p>
  <div class="n-crit"><div class="icon">❌</div><div class="body"><strong>Interview trap:</strong> "Does an auto-transformer provide electrical isolation like a two-winding transformer?" No, and this is a genuinely important safety distinction. Because the windings are physically joined and share a common connection, a fault on one side can be conducted directly to the other side. A two-winding transformer's windings are magnetically coupled but electrically separate; an auto-transformer sacrifices that isolation in exchange for being smaller, lighter and cheaper for a given rating, which is exactly why it is popular for motor starting duty (F11) but unsuitable wherever isolation itself is the safety requirement.</div></div>


  <!-- LOSSES -->
  <div class="n-h1" id="s-losses">Transformer Losses</div>
  <p class="n-p">A transformer has no rotating parts and therefore no friction or windage loss, unlike a motor or alternator; its losses fall into exactly two categories, and the distinction between them is one of the most frequently tested points in this module.</p>

  <div class="n-h2">Iron Loss (Core Loss)</div>
  <p class="n-p"><strong>Definition:</strong> loss occurring in the core due to the alternating magnetic flux, made up of hysteresis loss and eddy current loss. <strong>Key property: iron loss is essentially constant</strong> from no-load to full-load, because it depends on flux, and flux depends on supply voltage and frequency, both of which are held essentially constant regardless of load.</p>
  <table class="n-table">
    <tr><th>Component</th><th>Cause</th><th>Reduced By</th></tr>
    <tr><td>Hysteresis loss</td><td>Energy lost repeatedly reversing the core's magnetic domains each cycle</td><td class="ok">Using core material (silicon steel) with a narrow hysteresis loop</td></tr>
    <tr><td>Eddy current loss</td><td>Circulating currents induced directly in the core iron by the changing flux</td><td class="ok">Laminating the core into thin, insulated sheets</td></tr>
  </table>

  <div class="n-h2">Copper Loss (I²R Loss)</div>
  <p class="n-p"><strong>Definition:</strong> loss occurring in the winding resistance due to load current, exactly the I²R heating covered in F01. <strong>Key property: copper loss varies with the square of the load current</strong>, so it is near zero at no load and reaches its rated maximum at full load.</p>
  <div class="n-formula">Copper Loss = I² × R<div class="label">R = winding resistance · rises sharply as load current rises, unlike iron loss</div></div>

  <table class="n-table">
    <tr><th>Loss Type</th><th>Depends On</th><th>Behaviour with Load</th></tr>
    <tr><td>Iron loss</td><td class="ok">Voltage and frequency</td><td class="hl">Essentially constant, present even at no load</td></tr>
    <tr><td>Copper loss</td><td class="bad">Load current</td><td class="bad">Rises with the square of load, near zero at no load</td></tr>
  </table>
  <p class="n-p"><strong>Interview answer:</strong> "Iron loss is caused by hysteresis and eddy currents in the core, depends on voltage and frequency, and stays essentially constant regardless of load. Copper loss is I squared R in the windings, depends on load current, and rises with the square of the load. That's why an idle transformer still draws some power, purely from iron loss, even with no load connected."</p>


  <!-- EFFICIENCY -->
  <div class="n-h1" id="s-efficiency">Efficiency</div>
  <div class="n-formula">η = Output Power / (Output Power + Iron Loss + Copper Loss)<div class="label">η = efficiency, usually expressed as a percentage</div></div>
  <p class="n-p"><strong>Condition for maximum efficiency:</strong> because iron loss stays essentially fixed while copper loss rises with the square of the load, total loss as a function of load has a minimum point relative to output, efficiency is maximum exactly at the load where copper loss equals iron loss.</p>
  <div class="n-formula">Copper Loss = Iron Loss, at maximum efficiency<div class="label">The load fraction at which this occurs is x = √(Iron Loss / Full-Load Copper Loss)</div></div>
  <p class="n-p"><strong>Why this matters practically:</strong> transformers are deliberately designed so this maximum-efficiency point falls near their typical, most common operating load, not at full load, since most transformers spend the bulk of their life at partial load rather than continuously at rated capacity. A distribution transformer feeding lighting circuits, mostly lightly loaded outside peak hours, is a textbook case for this design choice.</p>


  <!-- VOLTAGE REGULATION -->
  <div class="n-h1" id="s-regulation">Voltage Regulation</div>
  <p class="n-p"><strong>Definition:</strong> the change in secondary terminal voltage from no-load to full-load, expressed as a percentage of the no-load (or rated) voltage, at a stated power factor.</p>
  <div class="n-formula">% Regulation = [(E<sub>2</sub> - V<sub>2</sub>) / E<sub>2</sub>] × 100<div class="label">E<sub>2</sub> = no-load secondary voltage · V<sub>2</sub> = full-load secondary voltage</div></div>
  <p class="n-p"><strong>Why it happens:</strong> exactly as with the alternator's EMF vs terminal voltage relationship in F01 and F05, a real transformer has winding resistance and leakage reactance, so as load current is drawn, an internal voltage drop appears across those internal impedances, and the terminal voltage delivered to the load sags below the ideal no-load value. Regulation also depends on the load's power factor: a lagging power factor load generally produces worse (higher) regulation than a unity or leading power factor load, for the same current magnitude, because of how the resistive and reactive drops combine with the phase angle.</p>
  <p class="n-p"><strong>Shipboard:</strong> voltage regulation is why a lightly loaded ship's lighting transformer secondary reads slightly above nominal, and why it sags back toward nominal as more lighting and small load is switched on, a normal, expected behaviour, not a fault, provided it stays within design tolerance.</p>


  <!-- COOLING -->
  <div class="n-h1" id="s-cooling">Cooling Methods</div>
  <table class="n-table">
    <tr><th>Designation</th><th>Meaning</th><th>Typical Use</th></tr>
    <tr><td>AN (Air Natural / Dry type)</td><td class="ok">Natural air convection, no forced cooling</td><td>Small control and lighting transformers</td></tr>
    <tr><td>AF (Air Forced)</td><td>Fan-assisted air cooling</td><td>Larger dry-type transformers needing more capacity in the same size</td></tr>
    <tr><td>ONAN (Oil Natural, Air Natural)</td><td class="hl">Oil circulates naturally, radiator cooled by natural air</td><td>Larger oil-filled power transformers, where fitted</td></tr>
    <tr><td>ONAF (Oil Natural, Air Forced)</td><td>Oil circulates naturally, radiator cooling assisted by fans</td><td>Higher-capacity oil-filled transformers under heavier load</td></tr>
  </table>
  <p class="n-p"><strong>Shipboard:</strong> most transformers found aboard merchant ships, lighting, control, navigation supply, are small dry-type units, naturally or fan cooled, chosen specifically to avoid the fire risk and maintenance burden of oil-filled transformers in a confined engine room or switchboard space. Oil-filled units appear mainly on larger vessels with genuine high-voltage distribution needs.</p>


  <!-- PARALLEL OPERATION -->
  <div class="n-h1" id="s-parallel">Conditions for Parallel Operation</div>
  <p class="n-p">Two or more transformers are connected in parallel to share load, exactly as generators are paralleled at the switchboard, but transformers require their own distinct set of matching conditions before they can be safely connected together.</p>
  <table class="n-table">
    <tr><th>Condition</th><th>Why It Matters</th></tr>
    <tr><td class="ok">Same voltage ratio (turns ratio)</td><td>Mismatched ratios drive a circulating current between the transformers even with no external load connected</td></tr>
    <tr><td class="ok">Same polarity / vector group</td><td class="hl">Wrong polarity can create a severe internal short-circuit condition the instant they are connected</td></tr>
    <tr><td>Same percentage impedance</td><td>Ensures load current divides between the transformers in proportion to their kVA rating, not unevenly</td></tr>
    <tr><td>Same phase sequence</td><td>Required for correct three-phase operation without internal circulating currents</td></tr>
  </table>
  <p class="n-p">Of these, mismatched polarity/vector group is the single most dangerous error, since it is a wiring mistake capable of producing an immediate high-current fault the instant the paralleling switch closes, rather than a gradual performance issue.</p>


  <!-- VECTOR GROUPS -->
  <div class="n-h1" id="s-vectorgroups">Three-Phase Transformer Connections</div>
  <p class="n-p">Star and delta connections themselves are covered fully in F08, Three-Phase Systems; this section covers only how the two are combined across a transformer's primary and secondary, since a three-phase transformer is effectively three single-phase transformers whose primaries and secondaries can each independently be connected star or delta.</p>
  <table class="n-table">
    <tr><th>Connection</th><th>Notation</th><th>Common Use</th></tr>
    <tr><td>Star - Star</td><td>Yy</td><td>Both sides need a neutral; less common alone due to third-harmonic issues</td></tr>
    <tr><td>Delta - Delta</td><td>Dd</td><td>No neutral needed either side; one unit can be removed for open-delta running in an emergency</td></tr>
    <tr><td class="ok">Star - Delta</td><td class="ok">Yd</td><td class="ok">Common for step-down: primary star gives a neutral point and reduced primary insulation stress, delta secondary suppresses third-harmonic distortion</td></tr>
    <tr><td>Delta - Star</td><td>Dy</td><td>Common for step-up and distribution transformers needing a secondary neutral for single-phase loads</td></tr>
  </table>
  <p class="n-p"><strong>Why star-delta suits shipboard step-down duty:</strong> the star-connected high-voltage primary reduces the voltage each winding must be insulated for, while the delta-connected secondary provides a closed path for third-harmonic currents that would otherwise distort the output waveform, without needing a neutral conductor on that side. This combination is standard for HV-to-440 V shipboard distribution transformers where fitted.</p>
  <p class="n-p"><strong>Interview trap check:</strong> star-delta and delta-star connections introduce a fixed phase shift, commonly 30°, between primary and secondary line voltages. This is normal and by design, but it is exactly the "same vector group" condition from the parallel operation table above, two transformers with different vector groups cannot simply be paralleled even if their voltage ratios match, because their secondary voltages would be out of phase with each other.</p>


  <!-- INSTRUMENT TRANSFORMERS -->
  <div class="n-h1" id="s-instrument">Instrument Transformers: CT and PT</div>
  <p class="n-p">Metering and protection equipment cannot be connected directly across a switchboard's full voltage or in series with its full load current; instrument transformers step these down to small, standardised, safe values that meters and relays are built to handle.</p>

  <div class="n-h2">Current Transformer (CT)</div>
  <p class="n-p"><strong>Definition:</strong> a transformer whose primary is connected in series with the line carrying the current to be measured, and whose secondary supplies a small, standard current, commonly 5 A or 1 A at full primary rated current, to an ammeter or protection relay.</p>
  <div class="n-crit"><div class="icon">❌</div><div class="body"><strong>Interview trap, and a genuine safety rule:</strong> "What happens if a current transformer's secondary is left open-circuited while the primary is still carrying current?" A dangerously high voltage is induced across the open secondary, since with no secondary current to oppose it, the primary ampere-turns are left unopposed and drive the core into deep saturation, inducing a large, potentially lethal peak voltage. A CT secondary must always be short-circuited (or connected to its meter/relay) before the primary circuit is energised, and must never be opened while primary current flows.</div></div>

  <div class="n-h2">Potential (Voltage) Transformer</div>
  <p class="n-p"><strong>Definition:</strong> a transformer whose primary is connected across the line voltage to be measured, and whose secondary supplies a small, standard voltage, commonly 110 V, to a voltmeter or protection relay. Unlike a CT, a PT secondary is normally fused and should not be short-circuited, since it behaves as an ordinary voltage source referenced down from the line.</p>
  <table class="n-table">
    <tr><th>Aspect</th><th>Current Transformer (CT)</th><th>Potential Transformer (PT)</th></tr>
    <tr><td>Primary connection</td><td class="hl">Series with the line</td><td class="ok">Parallel across the line</td></tr>
    <tr><td>Secondary rating</td><td>5 A or 1 A</td><td>110 V typically</td></tr>
    <tr><td>Never leave secondary</td><td class="bad">Open-circuited</td><td class="bad">Short-circuited</td></tr>
    <tr><td>Feeds</td><td>Ammeters, overcurrent relays</td><td>Voltmeters, protection relays needing voltage</td></tr>
  </table>


  <!-- MARINE -->
  <div class="n-h1" id="s-marine">Marine Applications Summary</div>
  <table class="n-table">
    <tr><th>Application</th><th>Typical Transformer</th></tr>
    <tr><td>Lighting supply</td><td>440 V / 220 V step-down, dry type, ONAN rare</td></tr>
    <tr><td>Control and automation supply</td><td>Step-down to 110 V / 24 V control transformers</td></tr>
    <tr><td>Motor starting</td><td>Auto-transformer starters (F11)</td></tr>
    <tr><td>Switchboard metering</td><td>Current and potential transformers feeding meters and protection relays</td></tr>
    <tr><td>HV distribution (larger vessels)</td><td>6.6 kV / 440 V step-down, star-delta connected</td></tr>
    <tr><td>Isolation for portable equipment</td><td>Isolation transformers, no voltage change, electrical separation only</td></tr>
  </table>


  <!-- UNITS -->
  <div class="n-h1" id="s-units">Units, Symbols and Formula Sheet</div>
  <table class="n-table">
    <tr><th>Formula</th><th>Finds</th><th>Use When</th></tr>
    <tr><td>E = 4.44 f Φ<sub>m</sub> N</td><td>Induced EMF per winding</td><td>Frequency, flux, turns known</td></tr>
    <tr><td>E₁/E₂ = N₁/N₂ = a</td><td>Turns ratio</td><td>Voltage transformation</td></tr>
    <tr><td>I₁/I₂ = N₂/N₁</td><td>Current transformation</td><td>Ideal transformer, inverse of voltage ratio</td></tr>
    <tr><td>Z₁ = a² Z₂</td><td>Impedance referred to primary</td><td>Impedance matching problems</td></tr>
    <tr><td>Copper loss = I²R</td><td>Winding loss at a given load</td><td>Load current and resistance known</td></tr>
    <tr><td>η = Output/(Output+Losses)</td><td>Efficiency</td><td>Given output and both losses</td></tr>
    <tr><td>%Reg = [(E₂-V₂)/E₂] × 100</td><td>Voltage regulation</td><td>No-load and full-load secondary voltage known</td></tr>
  </table>


  <!-- NUMERICALS -->
  <div class="n-h1" id="s-numericals">Worked Numericals</div>

  <div class="n-h2">1. Turns Ratio and Voltage</div>
  <p class="n-p">A transformer has 1000 primary turns and 100 secondary turns. Primary voltage is 440 V. Find secondary voltage.</p>
  <ol class="n-steps"><li>E₂ = E₁ × (N₂/N₁) = 440 × (100/1000) = <span class="n-val">44 V</span></li></ol>

  <div class="n-h2">2. Current Transformation</div>
  <p class="n-p">For the same transformer, secondary current is 30 A. Find primary current, assuming an ideal transformer.</p>
  <ol class="n-steps"><li>I₁ = I₂ × (N₂/N₁) = 30 × (100/1000) = <span class="n-val">3 A</span></li></ol>

  <div class="n-h2">3. Efficiency</div>
  <p class="n-p">A transformer delivers 50 kW output. Iron loss is 500 W, copper loss at this load is 800 W. Find efficiency.</p>
  <ol class="n-steps">
    <li>Total loss = 500 + 800 = 1300 W = 1.3 kW</li>
    <li>η = 50 / (50 + 1.3) = 50 / 51.3 = <span class="n-val">97.5%</span> approximately</li>
  </ol>

  <div class="n-h2">4. Maximum Efficiency Load Point</div>
  <p class="n-p">A transformer has full-load copper loss of 1200 W and iron loss of 300 W. Find the load fraction at which efficiency is maximum.</p>
  <ol class="n-steps">
    <li>x = √(Iron Loss / Full-Load Copper Loss) = √(300/1200) = √0.25 = <span class="n-val">0.5, or 50% of full load</span></li>
  </ol>

  <div class="n-h2">5. Voltage Regulation</div>
  <p class="n-p">A transformer's secondary reads 230 V on no load and 218 V on full load. Find the percentage regulation.</p>
  <ol class="n-steps">
    <li>%Reg = [(230-218)/230] × 100 = (12/230) × 100 = <span class="n-val">5.2%</span> approximately</li>
  </ol>

  <div class="n-h2">6. Current Transformer Ratio</div>
  <p class="n-p">A CT is rated 400/5 A and the switchboard ammeter reads 3.5 A on the secondary. Find the actual primary (line) current.</p>
  <ol class="n-steps">
    <li>CT ratio = 400/5 = 80</li>
    <li>Primary current = secondary reading × ratio = 3.5 × 80 = <span class="n-val">280 A</span></li>
  </ol>


  <!-- VIVA -->
  <div class="n-h1" id="s-viva">Viva and Interview Questions</div>
  <table class="n-table">
    <tr><th>Question</th><th>Model Answer</th></tr>
    <tr><td>What is the working principle of a transformer?</td><td>Mutual inductance, an alternating current in the primary creates an alternating flux in the shared core, inducing an EMF in the secondary by Faraday's Law.</td></tr>
    <tr><td>Can a transformer work on DC? Why not?</td><td>No. Steady DC produces unchanging flux, and Faraday's Law needs changing flux to induce EMF; sustained DC would also draw a very high current through the primary's low resistance with no reactance to limit it, risking burnout.</td></tr>
    <tr><td>Does frequency change across a transformer?</td><td>No, never. Secondary EMF is induced by the same alternating flux the primary produces, at the same frequency.</td></tr>
    <tr><td>Does a transformer increase power?</td><td>No. Apparent power in equals apparent power out, minus small real losses. It trades voltage for current, or current for voltage; it never creates energy.</td></tr>
    <tr><td>Why is a transformer core laminated?</td><td>To break up the paths for eddy currents that would otherwise circulate in a solid core, sharply reducing eddy current loss.</td></tr>
    <tr><td>Difference between core type and shell type construction?</td><td>Core type has windings surrounding the core limbs; shell type has the core surrounding the windings, giving better mechanical protection.</td></tr>
    <tr><td>What is an auto-transformer and how does it differ from a two-winding transformer?</td><td>A single tapped winding shared between primary and secondary. Unlike a two-winding transformer it provides no electrical isolation, since the windings are directly connected.</td></tr>
    <tr><td>Name the two types of transformer loss and what each depends on.</td><td>Iron loss, from hysteresis and eddy currents, depends on voltage and frequency and stays roughly constant with load. Copper loss, I squared R in the windings, depends on load current and rises with its square.</td></tr>
    <tr><td>Why does an unloaded transformer still consume some power?</td><td>Because iron loss is present continuously due to the alternating flux, regardless of whether any load current flows.</td></tr>
    <tr><td>At what load is transformer efficiency maximum?</td><td>Where copper loss equals iron loss, not necessarily at full load.</td></tr>
    <tr><td>What is voltage regulation?</td><td>The percentage change in secondary voltage from no load to full load, caused by internal resistance and leakage reactance drops under load.</td></tr>
    <tr><td>Name the conditions for paralleling two transformers.</td><td>Same voltage ratio, same polarity or vector group, same percentage impedance, and same phase sequence.</td></tr>
    <tr><td>What happens if two transformers of different vector groups are paralleled?</td><td>Their secondary voltages are out of phase with each other even if the ratio matches, producing damaging circulating currents; they cannot be safely paralleled.</td></tr>
    <tr><td>Why is a star-delta connection common for shipboard step-down transformers?</td><td>The star primary reduces per-winding insulation stress, and the delta secondary provides a path for third-harmonic currents without needing a secondary neutral.</td></tr>
    <tr><td>What is a current transformer used for?</td><td>Stepping down a large line current to a small standard current, typically 5 A or 1 A, to safely supply ammeters and protection relays.</td></tr>
    <tr><td>What happens if a CT secondary is left open while current flows in the primary?</td><td>A dangerously high voltage is induced across the open secondary as the core saturates with unopposed primary ampere-turns; the secondary must always be shorted or connected to its burden before the primary is energised.</td></tr>
    <tr><td>What is a potential transformer used for?</td><td>Stepping down a high line voltage to a small standard voltage, typically 110 V, to safely supply voltmeters and protection relays.</td></tr>
    <tr><td>Should a PT secondary ever be short-circuited?</td><td>No, it should never be short-circuited, as it behaves as a voltage source and a short would drive damaging current through it; this is the opposite rule to a CT.</td></tr>
    <tr><td>Why are most shipboard transformers dry type rather than oil filled?</td><td>To avoid the fire risk and maintenance burden of oil in a confined engine room or switchboard space; oil-filled units appear mainly where genuine high-voltage distribution capacity is needed.</td></tr>
    <tr><td>State the transformer EMF equation.</td><td>E equals 4.44 times frequency times maximum flux times number of turns, the same underlying relationship as the alternator EMF equation from F05.</td></tr>
  </table>


  <!-- QUICK REVISION -->
  <div class="n-h1" id="s-quickrev">Quick Revision</div>
  <table class="n-table">
    <tr><th>Concept</th><th>One Line</th></tr>
    <tr><td>Principle</td><td>Mutual inductance, changing flux in a shared core, no electrical connection.</td></tr>
    <tr><td>DC on a transformer</td><td>No induced EMF, and risk of winding burnout, never apply DC.</td></tr>
    <tr><td>Frequency</td><td>Never changes across a transformer.</td></tr>
    <tr><td>Turns ratio</td><td>E₁/E₂ = N₁/N₂. Current ratio is the inverse.</td></tr>
    <tr><td>Power</td><td>Transferred, not created, kVA in ≈ kVA out.</td></tr>
    <tr><td>Lamination</td><td>Cuts eddy current loss by breaking circulating current paths.</td></tr>
    <tr><td>Iron loss</td><td>Constant with load, depends on V and f.</td></tr>
    <tr><td>Copper loss</td><td>Rises with I², depends on load.</td></tr>
    <tr><td>Max efficiency</td><td>Where copper loss = iron loss.</td></tr>
    <tr><td>Voltage regulation</td><td>% drop from no-load to full-load secondary voltage.</td></tr>
    <tr><td>Auto-transformer</td><td>Single winding, no isolation, used for motor starting.</td></tr>
    <tr><td>Parallel operation</td><td>Match ratio, vector group, %impedance, phase sequence.</td></tr>
    <tr><td>Star-delta</td><td>Preferred for shipboard step-down: reduced insulation stress + harmonic suppression.</td></tr>
    <tr><td>CT rule</td><td>Never open the secondary under load, induces dangerous voltage.</td></tr>
    <tr><td>PT rule</td><td>Never short the secondary, opposite of CT rule.</td></tr>
  </table>
  <p class="n-p">If asked something here you genuinely do not know, do not invent an answer. State what you do know, then say honestly you are not certain about the rest.</p>


  <!-- SUMMARY -->
  <div class="n-h1" id="s-summary">Module Summary</div>
  <p class="n-p">You should now be able to explain the transformer's mutual-inductance working principle and why it cannot work on DC, apply turns ratio to voltage, current and impedance, describe core construction and why lamination is essential, distinguish step-up, step-down, isolation, auto and instrument transformers, separate iron loss from copper loss and locate the point of maximum efficiency, calculate voltage regulation, describe cooling designations, state the four conditions for parallel operation, explain why star-delta is preferred for shipboard step-down duty, and apply the CT and PT safety rules correctly. This module builds directly on F05's mutual inductance and feeds forward into F07, Electrical Machines, and F13, Electrical Protection, where CT and PT applications in relaying are developed further.</p>
  <table class="n-table">
    <tr><th>Estimated Study Time</th><th>Quiz Difficulty</th><th>Next Module</th></tr>
    <tr><td>90-105 minutes</td><td>★★★★☆</td><td>F07, Electrical Machines</td></tr>
  </table>

  <div style="margin-top:20px; text-align:center;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F06')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:10px 24px;font-size:14px;">Take the F06 Quiz →</button>
  </div>


  </div>
</div>
</div>`);

window.loadNotes("T01", `<div class="view" id="view-notes-t01">
<div class="note-doc">
  <div style="margin-bottom:16px"><button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button></div>
  <div class="note-title">
    <h1>Topic 1 — Alternator &amp; Generator</h1>
    <div class="sub">ETO MMD Oral Examination · Function 5 · Class 2 · Mumbai &amp; Noida</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">SOLAS II-1/Reg 40</span>
      <span class="tag tag-purple">Brushless Focus</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-principle')">Principle</button>
    <button class="anc-btn" onclick="jumpTo('s-excitation')">Excitation</button>
    <button class="anc-btn" onclick="jumpTo('s-brushless')">Brushless</button>
    <button class="anc-btn" onclick="jumpTo('s-avr')">AVR</button>
    <button class="anc-btn" onclick="jumpTo('s-solas')">SOLAS</button>
    <button class="anc-btn" onclick="jumpTo('s-residual')">Flashing</button>
    <button class="anc-btn" onclick="jumpTo('s-sync')">Synchronisation</button>
    <button class="anc-btn" onclick="jumpTo('s-parallel')">Parallel Ops</button>
    <button class="anc-btn" onclick="jumpTo('s-protection')">Protections</button>
    <button class="anc-btn" onclick="jumpTo('s-maint')">Maintenance</button>
    <button class="anc-btn" onclick="jumpTo('s-procedures')">Procedures</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyor-qa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="body"><strong>Coming Soon:</strong> The written preparation module is currently under development. It will feature past papers, detailed numerical solutions, and structured answers for this topic.</div></div>

  <div class="n-h1" id="s-surveyor-qa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">These are the exact Q&A formats used by surveyors. Study these answers — they are scored based on specific points. Sanjib, Vishwanathan, Deswal, Kamath, Gupta, Wad all ask these.</div></div>

  <div class="n-h2">Synchroscope, Paralleling &amp; Wrong Synchronization</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer — Key Points</th></tr>
    <tr><td>Describe synchroscope construction and working</td><td>Small induction-motor type instrument. Stator → busbar (rotating field at busbar frequency). Rotor → incoming generator (two coils 90° apart). CW pointer = incoming faster. CCW = incoming slower. Stationary at 12 o'clock = in phase — close ACB. Close just before 12 to account for breaker closing time.</td></tr>
    <tr><td>Synchroscope not working — how will you parallel?</td><td>Dark lamp method: connect 3 lamps between corresponding phases of incoming and busbar. ALL THREE dark simultaneously = in phase → close ACB. Verify phase sequence separately first. Use separate voltmeters and frequency meters. Log: synchroscope unserviceable, alternate method used.</td></tr>
    <tr><td>Junior engineer closed breaker without synchronising — what happens?</td><td>Massive circulating current — depends on phase angle at closure. Worst case (180°): current 10–15× rated — severe mechanical shock to coupling, possible winding insulation damage, overcurrent relay trips. Both generators may trip. Can cause permanent winding damage or coupling failure.</td></tr>
  </table>

  <div class="n-h2">Load Sharing &amp; Droop</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer — Key Points</th></tr>
    <tr><td>Two generators — one showing <span class="n-val">600 kW</span>, other <span class="n-val">200 kW</span>. What is the problem?</td><td>Unequal active (kW) load — governor droop settings differ. Fix: adjust governor of under-loaded machine (more fuel/speed) while reducing overloaded machine. Watch kW meters balance. Do NOT touch AVR (that affects kVAR not kW).</td></tr>
    <tr><td>Two generators — kW equal but current different. What is the problem?</td><td>Equal kW but different current = unequal reactive (kVAR) sharing. AVR issue — droop settings differ. Fix: increase AVR voltage trimmer of under-loaded machine (more excitation → more kVAR). Decrease AVR of over-loaded machine. Do NOT touch governors — kW balance is already correct.</td></tr>
    <tr><td>What is droop and why is it important?</td><td>Intentional slight reduction in output (speed or voltage) as load increases. Governor droop 3–5%: speed drops as active load rises → stable kW sharing in parallel. AVR droop 3–5%: voltage drops as reactive load rises → stable kVAR sharing. Without droop: generators hunt and are unstable — one takes all load.</td></tr>
  </table>

  <div class="n-h2">Protection &amp; Maintenance</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer — Key Points</th></tr>
    <tr><td>How do you test the overcurrent relay at survey?</td><td>Secondary injection: rack ACB to TEST position. Disconnect CT secondary from relay. Connect injection test set to relay current coils. Inject calibrated AC current at 2×, 5×, 10× rated. Record trip time at each multiple. Compare with IDMT curve. Reconnect, return to service. Record results.</td></tr>
    <tr><td>How do you test reverse power relay when VCB is racked out?</td><td>Method 1 (injection): use power relay test set — inject simulated reverse power (voltage + current at required phase angle) → verify trips at 5–10% rated kW. Method 2 (shore power): when ship on shore power and generator ACB closed for transfer — reverse power flows → verify relay trips. Method 3: integral test button — verifies wiring and trip coil only.</td></tr>
    <tr><td>Generator running at rated load but voltage is not <span class="n-val">440V</span> — what will you check?</td><td>1. Voltmeter calibration. 2. AVR voltage trimmer setting. 3. AVR input (PT supply). 4. AVR output DC to exciter field (voltmeter). 5. Exciter field resistance — partial open circuit? 6. Adjust voltage trimmer. 7. Check loose connections on AVR terminals. Report to chief engineer if uncorrectable.</td></tr>
    <tr><td>Machine received from rewind shop — checks before commissioning?</td><td>Visual check of winding quality. IR test (<span class="n-val">500V</span> megger, min 100 MΩ). Winding resistance balance (all 3 phases within 1%). Hi-Pot test (2× rated V + <span class="n-val">1000V</span>, 1 minute). No-load run: check current, temperature, vibration. Verify rotation direction. Air gap measurement. Obtain test certificate.</td></tr>
    <tr><td>PSC inspector wants blackout test — describe procedure</td><td>Inform bridge — get clearance — ship in safe condition. Brief all staff. Verify emergency DG in AUTO. Trip all main ACBs — start timer. Verify auto-start and ESB closes within 45 seconds. Check all essential loads supplied. Start main generator, synchronise, transfer loads from ESB to MSB. Restore auxiliaries in sequence with time delays. Record all times. Present records to PSC inspector.</td></tr>
  </table>

  <!-- ═══ SECTION 13: QUICK REVISION ═══ -->

<div class="n-h1" id="s-synchroscope">🕐 Synchroscope — Construction, Working & Paralleling</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Asked by EVERY surveyor</strong> (Sanjib, Vishwanathan, Deswal, Kamath, Gupta, Wad). Know synchroscope construction, working direction, and why you close just before 12 o'clock.</div></div>
<p class="n-p">A synchroscope indicates two things: <strong>(1)</strong> speed (frequency) difference between the incoming generator and the busbar, and <strong>(2)</strong> phase angle difference between incoming and busbar.</p>

<div class="n-h2">Construction</div>
<ul class="n-list">
  <li>A small <strong>single-phase induction-motor-type instrument</strong>.</li>
  <li><strong>Stator:</strong> fed from busbar voltage — creates a rotating magnetic field at busbar frequency.</li>
  <li><strong>Rotor:</strong> fed from incoming generator voltage — has two coils wound 90° apart — creates a pulsating field.</li>
  <li>The rotor carries no mechanical power — only the phase difference drives the needle rotation.</li>
</ul>

<div class="n-h2">Working — Needle Direction</div>
<table class="n-table">
  <tr><th>Condition</th><th>Needle Behaviour</th></tr>
  <tr><td>Incoming frequency = busbar</td><td class="ok">Frequency difference = 0 → needle <strong>stands still</strong></td></tr>
  <tr><td>Incoming <strong>faster</strong> than busbar</td><td class="hl">Needle rotates <strong>CLOCKWISE</strong></td></tr>
  <tr><td>Incoming <strong>slower</strong> than busbar</td><td class="hl">Needle rotates <strong>ANTICLOCKWISE</strong></td></tr>
  <tr><td>In phase (12 o'clock)</td><td class="ok"><strong>SAFE TO CLOSE BREAKER</strong></td></tr>
</table>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Note:</strong> Faster clockwise rotation = larger frequency difference. Aim for slow clockwise rotation before closing.</div></div>

<div class="n-h2">Paralleling Procedure</div>
<ol class="n-steps">
  <li>Match voltage — incoming voltage = busbar voltage (using voltmeter).</li>
  <li>Match phase sequence — use phase sequence meter before first connection.</li>
  <li>Adjust governor — bring incoming frequency <strong>slightly ABOVE</strong> busbar (needle rotating slowly clockwise).</li>
  <li>Close ACB <strong>just BEFORE 12 o'clock</strong> — so incoming takes load immediately (not motored).</li>
  <li>After closing — adjust governor to balance kW. Adjust AVR to balance kVAR.</li>
</ol>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why close just BEFORE 12 o'clock (not exactly at 12)?</strong> Mechanical closing time of the ACB ≈ 50–100 ms. Closing slightly early compensates for this delay. With the frequency slightly high (slow clockwise rotation), the incoming generator arrives at sync exactly as the breaker closes — it immediately takes a small active load and does not motor.</div></div>

<div class="n-h2">Wrong Synchronisation Consequences</div>
<table class="n-table">
  <tr><th>Synchroscope Position</th><th>Consequence</th><th>Severity</th></tr>
  <tr><td>6 o'clock (180° out of phase)</td><td class="bad">CATASTROPHIC — huge circulating current, severe mechanical shock to coupling, possible damage to alternator windings and prime mover</td><td class="bad">Extremely severe — winding burnout</td></tr>
  <tr><td>Clockwise (too fast)</td><td class="hl">Incoming takes heavy sudden load — high current surge — may trip on overcurrent</td><td class="hl">Moderate — likely trip</td></tr>
  <tr><td>Anticlockwise (too slow)</td><td class="hl">Incoming is MOTORED by the bus — reverse power relay should trip it</td><td class="hl">Moderate — reverse power trip</td></tr>
  <tr><td>Phase sequence wrong</td><td class="bad">Large circulating current even at same voltage — immediate overcurrent trip</td><td class="bad">Severe — correct before reconnect</td></tr>
</table>

<div class="n-h2">Paralleling Without Synchroscope</div>
<div class="n-grid" style="grid-template-columns:1fr 1fr">
  <div class="n-card"><div class="card-title">Dark Lamp Method</div><div class="card-desc">Three lamps connected between corresponding phases of incoming and busbar. When all three lamps are <strong>DARK</strong> (off) → in phase → close breaker. <strong>Limitation:</strong> cannot detect wrong phase sequence (all dark even at 180° out with wrong sequence).</div></div>
  <div class="n-card"><div class="card-title">Bright Lamp Method</div><div class="card-desc">Lamps connected differently — brightest when in phase → close at maximum brightness.</div></div>
  <div class="n-card"><div class="card-title">Check Synchronise Relay</div><div class="card-desc">If fitted — automatically prevents closing unless all conditions are met.</div></div>
  <div class="n-card"><div class="card-title">Voltmeter Method</div><div class="card-desc">Two voltmeters (busbar + incoming) — match voltages, watch frequency meters, close when frequencies equal and in phase.</div></div>
</div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid — Slow & Clockwise:</strong> "Catch the needle going slowly UP to 12, close it just before noon." Slow clockwise = incoming slightly fast = takes load on closing, never motors.</div></div>

<div class="n-h1" id="s-residual">✨ Residual Magnetism & Field Flashing</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>4th most-asked topic.</strong> "Generator started at rated RPM but no voltage" — give all reasons and actions as 2E. Residual magnetism is the first suspect; restore by flashing.</div></div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Residual Magnetism:</strong> the small amount of magnetic flux retained in the rotor core material even when field current is zero. Essential for self-excited generators — this residual flux generates a small initial voltage → AVR uses it to supply field current → field builds up → full voltage builds up.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>If residual magnetism is lost:</strong> when the alternator is started and brought to rated speed, <strong>no voltage develops</strong> (zero output). The generator runs but voltmeter reads zero volts. Restore by <strong>flashing the field</strong>.</div></div>

<div class="n-h2">Generator at Rated RPM but No Voltage — Reasons & Actions (2E answer)</div>
<table class="n-table">
  <tr><th>Possible Cause</th><th>Action</th></tr>
  <tr><td>Residual magnetism lost</td><td class="ok">Restore by flashing the field</td></tr>
  <tr><td>AVR fault</td><td class="ok">Check AVR output (milliamp meter), replace if faulty</td></tr>
  <tr><td>Rotating rectifier diode failure</td><td class="ok">Stop machine, test diodes with multimeter</td></tr>
  <tr><td>PMG fault</td><td class="ok">Check PMG output</td></tr>
  <tr><td>Field winding open circuit</td><td class="ok">Check winding resistance</td></tr>
  <tr><td>Speed too low despite RPM showing correct (governor sensor fault)</td><td class="ok">Verify actual frequency on frequency meter</td></tr>
  <tr><td>Voltmeter / meter fault</td><td class="ok">Cross-check with another meter (esp. if recently calibrated)</td></tr>
</table>

<div class="n-h2">Field Flashing Procedure</div>
<ol class="n-steps">
  <li>Use a DC source — typically a <span class="n-val">12V</span> or <span class="n-val">24V</span> battery.</li>
  <li>Connect positive to the field (+) and negative to field (−) terminals momentarily through a resistor/lamp.</li>
  <li>Apply for a few seconds — this re-establishes residual magnetism in the rotor core.</li>
  <li>Observe voltage build-up; remove the flashing supply once the AVR takes over and voltage builds.</li>
  <li>Always observe correct polarity — wrong polarity reduces/cancels residual magnetism.</li>
</ol>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "No volts at full revs → flash the field." Always check frequency first to confirm speed, then AVR, then diodes, then flash.</div></div>

<div class="n-h1" id="s-surveyor-qa-extra">🎓 Additional Surveyor Q&A</div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is the function of the rotating rectifier diodes?<br><strong>Ideal Answer:</strong> They are mounted on the rotor shaft between the exciter armature and the main field. They convert the 3-phase AC produced by the exciter armature into DC, which feeds directly to the main alternator field winding (also on the rotor) — all on the same rotating shaft. This eliminates the need for slip rings and brushes to transfer DC to the rotating field.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Kamath, Deswal):</strong> Generator running at rated load but voltage is not <span class="n-val">440V</span> — what will you check?<br><strong>Ideal Answer:</strong> (1) Voltmeter calibration. (2) AVR voltage trimmer setting. (3) AVR input — is PT supplying correct voltage? (4) AVR output — correct DC to exciter field (measure). (5) Exciter field resistance for partial open circuit. (6) If consistently low, increase voltage trimmer. (7) Check for loose AVR terminal connections. Report to chief engineer if not correctable.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> Why must the AVR be disconnected before meggering the alternator?<br><strong>Ideal Answer:</strong> The AVR contains sensitive semiconductors — thyristors, diodes, zener diodes, transistors. The megger applies high DC voltage (<span class="n-val">500V</span>, or <span class="n-val">2500V</span> for HV) which would permanently destroy these components. Disconnect the AVR from all connections — including the PMG output — before meggering stator, field, or any connected circuit. Replace the AVR if accidentally damaged.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> One diode is short circuit in the rotating rectifier — what happens?<br><strong>Ideal Answer:</strong> A shorted diode allows reverse current flow → an AC component appears in the DC field current → excessive heat in the field winding. Result: severe voltage fluctuation, waveform distortion, rotor field overheating, possible winding burnout if not detected quickly — more dangerous than an open circuit. Detect via AVR hunting, voltage instability, electrical vibration, and field over-temperature if a thermistor is fitted.</div></div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Frequency Examples to quote:</strong> 4-pole @ 1500 RPM → f = (4×1500)/120 = <span class="n-val">50 Hz</span>. 6-pole @ 1000 RPM → f = (6×1000)/120 = <span class="n-val">50 Hz</span>.</div></div>


<div class="n-h1" id="s-synchroscope">🕐 Synchroscope — Construction, Working & Paralleling</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Asked by EVERY surveyor</strong> (Sanjib, Vishwanathan, Deswal, Kamath, Gupta, Wad). The synchroscope construction and working is the single most asked sub-topic in this entire chapter. Know it cold.</div></div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>What it indicates:</strong> (1) Speed/frequency difference between incoming generator and busbar. (2) Phase angle difference between incoming and busbar.</div></div>
<div class="n-h2">Construction</div>
<div class="n-grid">
  <div class="n-card"><div class="card-title">Type</div><div class="card-val" style="font-size:13px;margin-bottom:6px">Single-Phase Induction Motor Instrument</div><div class="card-desc">Small motor-type instrument. Rotor carries no mechanical load — only phase difference drives the needle.</div></div>
  <div class="n-card"><div class="card-title">Stator</div><div class="card-val" style="font-size:13px;margin-bottom:6px">Fed from BUSBAR</div><div class="card-desc">Creates a rotating magnetic field at busbar frequency.</div></div>
  <div class="n-card"><div class="card-title">Rotor</div><div class="card-val" style="font-size:13px;margin-bottom:6px">Fed from INCOMING Generator</div><div class="card-desc">Two coils wound 90° apart → creates a pulsating field. The phase difference between bus and incoming drives needle rotation.</div></div>
</div>
<div class="n-h2">Working</div>
<table class="n-table">
  <tr><th>Condition</th><th>Needle Behaviour</th></tr>
  <tr><td>Incoming f = busbar f</td><td class="ok">Frequency difference = 0 → needle stands STILL</td></tr>
  <tr><td>Incoming FASTER than busbar</td><td class="hl">Needle rotates CLOCKWISE</td></tr>
  <tr><td>Incoming SLOWER than busbar</td><td class="hl">Needle rotates ANTICLOCKWISE</td></tr>
  <tr><td>Larger frequency difference</td><td>Faster needle rotation</td></tr>
  <tr><td>Needle at 12 o'clock</td><td class="ok">Both machines exactly IN PHASE = SAFE TO CLOSE BREAKER</td></tr>
</table>
<div class="n-h2">Paralleling Procedure</div>
<ol class="n-steps">
  <li>Match voltage — incoming voltage = busbar voltage (using voltmeter)</li>
  <li>Match phase sequence — use phase sequence meter before first connection</li>
  <li>Adjust governor — bring incoming frequency slightly <strong>ABOVE</strong> busbar (needle rotating SLOWLY CLOCKWISE)</li>
  <li>Close ACB just <strong>BEFORE 12 o'clock</strong> — so incoming takes load immediately (not motored)</li>
  <li>After closing — adjust governor to balance <strong>kW</strong>. Adjust AVR to balance <strong>kVAR</strong></li>
</ol>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why close JUST BEFORE 12 o'clock (not exactly at 12)?</strong> Mechanical closing time of ACB = ≈50–100 ms. Close slightly early to compensate for this delay. With frequency slightly high (slow clockwise) and breaker closed just before 12, the incoming generator comes into sync exactly as the contacts make → immediately takes slight active load → does not motor.</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "<strong>FAST = CLOCKWISE = Close before 12.</strong>" Slow needle, rotating clockwise, breaker shut just before top dead centre. kW with governor, kVAR with AVR.</div></div>

<div class="n-h2">What Happens at Wrong Synchronisation</div>
<table class="n-table">
  <tr><th>Synchroscope Position</th><th>Consequence</th><th>Severity</th></tr>
  <tr><td>6 o'clock (180° out of phase)</td><td class="bad">CATASTROPHIC — huge circulating current, severe mechanical shock to coupling, possible winding & prime-mover damage</td><td class="bad">Extremely severe — possible winding burnout</td></tr>
  <tr><td>Clockwise (too fast)</td><td class="hl">Incoming takes heavy sudden load — high current surge — may trip on overcurrent</td><td>Moderate — likely trip</td></tr>
  <tr><td>Anticlockwise (too slow)</td><td class="hl">Incoming is MOTORED by bus — reverse power relay should trip it</td><td>Moderate — reverse power trip activates</td></tr>
  <tr><td>Phase sequence wrong</td><td class="bad">Large circulating current even at same voltage — immediate overcurrent trip</td><td class="bad">Severe — correct before reconnecting</td></tr>
</table>

<div class="n-h2">Paralleling Without Synchroscope</div>
<div class="n-grid" style="grid-template-columns:1fr 1fr">
  <div class="n-card"><div class="card-title">Dark Lamp Method</div><div class="card-desc">Three lamps connected between corresponding phases of incoming and busbar. When all three lamps are <strong>DARK</strong> (off) → generators in phase → close breaker. <strong>Limitation:</strong> cannot detect wrong phase sequence (all dark even at 180° out with wrong sequence).</div></div>
  <div class="n-card"><div class="card-title">Bright Lamp Method</div><div class="card-desc">Lamps connected differently — brightest when in phase — close at maximum brightness.</div></div>
  <div class="n-card"><div class="card-title">Voltmeter Method</div><div class="card-desc">Two voltmeters (busbar + incoming). Match voltages, watch frequency meters, close when both frequencies equal and in phase.</div></div>
  <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">Check-Synchronise Relay</div><div class="card-desc">If fitted, automatically inhibits ACB closing unless voltage, frequency and phase conditions are all met. Essential interlock.</div></div>
</div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Sanjib, Vishwanathan, Deswal, Kamath, Gupta, Wad):</strong> Explain synchroscope construction and working.<br><strong>Ideal Answer:</strong> It is a single-phase induction-motor-type instrument. The stator is fed from the busbar and produces a rotating field at busbar frequency. The rotor is fed from the incoming generator and has two coils 90° apart producing a pulsating field. The interaction makes the needle rotate at the difference frequency. Incoming faster → clockwise; slower → anticlockwise; equal → needle stationary. At 12 o'clock both are in phase → safe to close. I close just before 12 o'clock to compensate for the ACB mechanical closing delay of about 50–100 ms.</div></div>

<div class="n-h1" id="s-residual-flash">🧲 Residual Magnetism & Flashing the Field</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>"Generator not developing voltage" is the 2nd most asked question in this topic.</strong> Always link it back to residual magnetism, AVR, diodes, PMG and field.</div></div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>What is residual magnetism?</strong> The small amount of magnetic flux retained in the rotor core material even when the field current is zero. In self-excited machines this residual flux generates a small initial voltage → AVR uses this to supply field current → field builds up → output voltage builds up (bootstrapping).</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>If residual magnetism is lost:</strong> when the alternator is started and brought to rated speed, no voltage develops (zero output). The generator runs normally but the voltmeter reads zero. Restored by <strong>flashing the field</strong>.</div></div>
<div class="n-h2">Generator Started at Rated RPM but No Voltage — Reasons & Actions</div>
<table class="n-table">
  <tr><th>Possible Cause</th><th>Action</th></tr>
  <tr><td class="hl">Residual magnetism lost</td><td>Restore by flashing the field</td></tr>
  <tr><td class="hl">AVR fault</td><td>Check AVR output, replace if faulty</td></tr>
  <tr><td class="hl">Rotating rectifier diode failure</td><td>Stop machine, check diodes with multimeter</td></tr>
  <tr><td>PMG fault</td><td>Check PMG output</td></tr>
  <tr><td>Field winding open circuit</td><td>Check winding resistance</td></tr>
  <tr><td>Actual speed low (governor/sensor fault)</td><td>Verify actual frequency — RPM meter may read wrong</td></tr>
  <tr><td>Voltmeter / meter fault</td><td>Confirm with second meter if recently calibrated</td></tr>
</table>
<div class="n-h2">Flashing Procedure</div>
<ol class="n-steps">
  <li>Stop the generator (or have it running at no load as per maker's manual)</li>
  <li>Identify the exciter field terminals (after disconnecting AVR if required)</li>
  <li>Apply a DC source (<span class="n-val">12V</span> or <span class="n-val">24V</span> battery) momentarily across the exciter field, observing correct polarity</li>
  <li>Apply for a few seconds only — re-establishes residual magnetism in the core</li>
  <li>Remove the DC source, reconnect AVR, restart and confirm voltage builds up to rated value</li>
  <li>If correct polarity gives no build-up, reverse the battery polarity and retry</li>
</ol>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "<strong>No volts? Flash, AVR, Diodes, PMG, Field, Speed, Meter.</strong>" Always check frequency first to confirm the prime mover is actually at speed before chasing electrical faults.</div></div>

<div class="n-h1" id="s-survey-qa-extra">🎓 Additional Surveyor Q&A — Excitation, Diodes & Voltage</div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What are the types of excitation systems?<br><strong>Ideal Answer:</strong> (1) Separately excited — external DC source via slip rings. (2) Self-excited shunt — generator supplies its own field via rectifier and slip rings, needs residual magnetism to start. (3) Brushless (most common) — PMG + exciter + rotating rectifiers on the same shaft, no slip rings or brushes. (4) Static excitation — thyristor rectifier from stator output to field via slip rings, very fast response. Modern ships predominantly use brushless for reliability and low maintenance.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is the function of the rotating rectifier diodes?<br><strong>Ideal Answer:</strong> They are a diode wheel mounted on the rotor shaft between the exciter armature and the main field. They convert the 3-phase AC produced by the exciter armature into DC and feed it directly to the main alternator field winding, also on the rotor. Because everything rotates together, no slip rings or brushes are needed to transfer DC to the field.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> One diode is OPEN circuit in the rotating rectifier — what happens?<br><strong>Ideal Answer:</strong> One phase of the exciter AC is not rectified → unbalanced DC to the main field → uneven field current → voltage fluctuation and increased ripple → output voltage drop of about 15–20%. At no load it may appear normal but under load it shows fluctuation. Detect by checking output voltage under load, measuring exciter output, and visual inspection with the machine stopped.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> One diode is SHORT circuit — what happens?<br><strong>Ideal Answer:</strong> A shorted diode lets current flow in reverse → an AC component appears in the DC field current → excessive heat in the field winding → severe voltage fluctuation and waveform distortion → possible winding burnout if not caught quickly. More dangerous than an open circuit. Detect by AVR hunting, voltage instability, electrical vibration, and field over-temperature if a thermistor is fitted.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> Generator running at rated load but voltage is not <span class="n-val">440V</span> — what will you check?<br><strong>Ideal Answer:</strong> (1) Voltmeter calibration. (2) AVR voltage trimmer setting. (3) AVR input — is the PT feeding correct voltage? (4) AVR output DC to exciter field. (5) Exciter field resistance for partial open circuit. (6) If consistently low, increase the voltage trimmer. (7) Check for loose AVR terminal connections. Report to the chief engineer if it cannot be corrected.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> Why must AVR be disconnected before meggering the alternator?<br><strong>Ideal Answer:</strong> The AVR contains sensitive semiconductors — thyristors, diodes, zener diodes, transistors. The megger applies high DC voltage (<span class="n-val">500V</span> or <span class="n-val">2500V</span> for HV) which would permanently destroy these components. Disconnect the AVR from all connections including the PMG output before meggering the stator or field windings. Replace the AVR if it is accidentally damaged.</div></div>

<div class="n-info"><div class="icon">📖</div><div class="body"><strong>SOLAS recovery values to note:</strong> Steady-state voltage ±2.5%; transient voltage ±20%; voltage recovery to within ±3% in ≤1.5 s. Steady frequency ±5%; transient frequency ±10%; frequency recovery in ≤5 s (SOLAS Ch. II-1, Part D).</div></div>

  <div class="n-h1" id="s-quickrev">📊 Quick Revision — Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points</th></tr>
    <tr><td>Synchroscope construction + working</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>Stator=busbar. Rotor=incoming. CW=fast. CCW=slow. Close just before 12.</td></tr>
    <tr><td>Generator no voltage — reasons + actions</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>Residual magnetism, AVR fault, diodes, PMG, field OC, speed, voltmeter fault.</td></tr>
    <tr><td>Brushless alternator — full working</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>PMG → AVR → Exciter field(S) → Exciter armature(R) AC → Rotating diodes → Main field(R) → Stator AC output.</td></tr>
    <tr><td>Flashing procedure</td><td class="hl">⭐⭐⭐⭐⭐</td><td>12/<span class="n-val">24V</span> battery to exciter field. Correct polarity. 2–3 sec only. Machine at rated speed.</td></tr>
    <tr><td>Alternator safeties — all with values</td><td class="hl">⭐⭐⭐⭐⭐ Multiple surveyors</td><td>OCR, Reverse power (5–10%), Differential, OV (110%), UV (85%), Preferential trip, Overspeed (110–115% RPM), Earth fault, Bearing temp (80°/95°C), Winding temp (155°C).</td></tr>
    <tr><td>Droop — governor and AVR</td><td class="hl">⭐⭐⭐⭐⭐</td><td>Governor droop = kW sharing. AVR droop = kVAR sharing. Both 3–5%. Equal on both machines.</td></tr>
    <tr><td>Two DGs not sharing equal load — reason</td><td class="hl">⭐⭐⭐⭐⭐</td><td>Unequal kW: governor issue. Unequal kVAR/current: AVR issue.</td></tr>
    <tr><td>Diode open/short in running alternator</td><td class="hl">⭐⭐⭐⭐</td><td>Open: voltage fluctuation, 15–20% drop. Short: severe fluctuation, field overheating.</td></tr>
    <tr><td>IR test of alternator</td><td class="hl">⭐⭐⭐⭐</td><td>Disconnect AVR first. <span class="n-val">500V</span> megger. Min 1 MΩ. PI &gt; 2 = good. Discharge after.</td></tr>
    <tr><td>Air gap — measurement and effects</td><td class="hl">⭐⭐⭐⭐</td><td>Feeler gauge, 4 positions per pole. Too small: rub. Too large: AVR overworks. Uneven: vibration.</td></tr>
    <tr><td>Overspeed trip test</td><td class="hl">⭐⭐⭐⭐</td><td>Actual or simulated. Trip at 110–115% RPM. Record in log.</td></tr>
    <tr><td>Blackout test — full procedure</td><td class="hl">⭐⭐⭐⭐</td><td>Brief staff, trip ACBs, verify DG starts in 45 sec, restore in sequence with time delays.</td></tr>
    <tr><td>SOLAS voltage limits</td><td class="hl">⭐⭐⭐⭐ Sanjib, Upendra, Deswal</td><td>Steady ±2.5%. Transient ±20%. Recovery 1.5 sec. Frequency: ±5% steady, ±10% transient, 5 sec recovery.</td></tr>
    <tr><td>Why generator not at tank top</td><td class="hl">⭐⭐⭐⭐ Kamath, Wad</td><td>Flooding risk, vibration, no crane access, poor ventilation, SOLAS flood protection.</td></tr>
    <tr><td>Slip ring pitting — action</td><td class="hl">⭐⭐⭐</td><td>Reduce load, check brush pressure (150–200 g/cm²), fine emery cloth, check brush grade. Machine slip rings in lathe at drydock if severe.</td></tr>
    <tr><td>Close ACB on non-running generator</td><td class="hl">⭐⭐⭐⭐ Trick question</td><td>Back-feeds as induction motor → motoring → reverse power relay trips ACB. Answer: "motoring + reverse power trip".</td></tr>
  </table>

</div>
</div>



<!-- QUIZ -->`);

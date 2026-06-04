window.loadNotes("T10", `<div class="view" id="view-notes-t10">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T10')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 10 - ICCP &amp; Cathodic Protection</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">ICCP · Reference Electrode</span>
      <span class="tag tag-purple">Bonding · MGPS</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-principle')">Principle</button>
    <button class="anc-btn" onclick="jumpTo('s-types')">Types</button>
    <button class="anc-btn" onclick="jumpTo('s-values')">Key Values</button>
    <button class="anc-btn" onclick="jumpTo('s-potentials')">Protection Potentials</button>
    <button class="anc-btn" onclick="jumpTo('s-electrodes')">Ref Electrodes</button>
    <button class="anc-btn" onclick="jumpTo('s-comparison')">ICCP vs Anodes</button>
    <button class="anc-btn" onclick="jumpTo('s-operation')">Operation</button>
    <button class="anc-btn" onclick="jumpTo('s-stray')">Stray Current</button>
    <button class="anc-btn" onclick="jumpTo('s-faults')">ICCP Faults</button>
    <button class="anc-btn" onclick="jumpTo('s-bonding')">Bonding</button>
    <button class="anc-btn" onclick="jumpTo('s-shaft-detail')">Shaft Earthing</button>
    <button class="anc-btn" onclick="jumpTo('s-mgps')">MGPS Basic</button>
    <button class="anc-btn" onclick="jumpTo('s-mgps-detail')">MGPS Detailed</button>
    <button class="anc-btn" onclick="jumpTo('s-drydock')">Dry Dock</button>
    <button class="anc-btn" onclick="jumpTo('s-commissioning')">Drydock Re-comm</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  <div class="n-h1" id="s-principle">⚡ Cathodic Protection - Principle</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask ICCP working, reference electrode, and port switch-off rule.</strong> Know protection potential range, why switched off at berth, and dry dock maintenance.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why hulls corrode:</strong> Seawater is an electrolyte (conductivity <span class="n-val">~50 mS/cm</span>). Hull steel develops anodic areas (corrode: Fe→Fe²⁺+2e⁻) and cathodic areas (protected) due to grain variations, welds, surface differences. <strong>Cathodic protection</strong> forces the entire hull to act as a cathode by externally supplying electrons - suppresses anodic dissolution completely.</div></div>

  <div class="n-h1" id="s-types">🔋 Types of Cathodic Protection</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Sacrificial Anode</th><th>ICCP (Impressed Current)</th></tr>
    <tr><td>Principle</td><td>Passive galvanic - Zinc/Aluminium dissolves to protect hull</td><td class="ok">Active - external DC forces hull to cathodic potential</td></tr>
    <tr><td>Anode material</td><td>Zinc alloy (Al-Zn-In) or Aluminium alloy</td><td class="ok">Mixed Metal Oxide (MMO) on Titanium - non-consumable</td></tr>
    <tr><td>Control</td><td class="bad">Passive - no control, fixed output</td><td class="ok">Automatic - adjusts via reference electrode feedback</td></tr>
    <tr><td>Running cost</td><td class="bad">Anodes consumed - replace every <span class="n-val">~2.5 years</span></td><td class="ok">Anodes last <span class="n-val">20–25 years</span></td></tr>
    <tr><td>Typical use</td><td>Small vessels, critical backup</td><td class="ok">Large vessels <span class="n-val">&gt; 100m LOA</span></td></tr>
  </table>

  <div class="n-h1" id="s-values">📊 Key Values - Memorise These</div>
  <div class="n-h2">Reference Electrode Potentials</div>
  <table class="n-table">
    <tr><th>Electrode</th><th>Potential vs SHE</th><th>Use</th></tr>
    <tr><td><strong>Ag/AgCl</strong></td><td class="hl"><span class="n-val">+0.222 V</span></td><td>Most stable, most widely used on ships</td></tr>
    <tr><td>Zinc (Zn)</td><td class="hl"><span class="n-val">-0.76 V</span></td><td>Alternative reference</td></tr>
    <tr><td>Cu/CuSO₄</td><td class="hl"><span class="n-val">+0.316 V</span></td><td>Dry dock / pipeline testing</td></tr>
  </table>
  <div class="n-h2">Protection Potential Range (vs Ag/AgCl)</div>
  <table class="n-table">
    <tr><th>Condition</th><th>Potential</th><th>Result</th></tr>
    <tr><td>Under-protection</td><td class="bad">Above <span class="n-val">-800 mV</span></td><td class="bad">Corrosion continues</td></tr>
    <tr><td>Minimum protection</td><td class="hl"><span class="n-val">-800 mV</span></td><td>NACE/DNV criterion - absolute minimum</td></tr>
    <tr><td><strong>Target setpoint</strong></td><td class="ok"><span class="n-val">-850 mV</span></td><td class="ok">Optimal protection</td></tr>
    <tr><td>Normal range</td><td class="ok"><span class="n-val">-800 to -1050 mV</span></td><td class="ok">Acceptable</td></tr>
    <tr><td>Over-protection</td><td class="bad">Below <span class="n-val">-1100 mV</span></td><td class="bad">Hydrogen evolution, paint disbondment, steel embrittlement</td></tr>
  </table>
  <div class="n-grid">
    <div class="n-card"><div class="card-title">DC Output Voltage</div><div class="card-val"><span class="n-val">6–25 V DC</span></div><div class="card-desc">Increases as hull paint ages and more bare steel is exposed.</div></div>
    <div class="n-card"><div class="card-title">DC Output Current</div><div class="card-val"><span class="n-val">5–100 A DC</span></div><div class="card-desc">Current density: <span class="n-val">10–50 mA/m²</span> bare steel | <span class="n-val">5–10 mA/m²</span> painted hull.</div></div>
  </div>

  <div class="n-h1" id="s-operation">⚙️ ICCP System Operation</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>How ICCP works:</strong> Controller converts AC → adjustable DC. (+) terminal → MMO/Ti anodes (flush below waterline, HDPE insulated housings, wired in parallel). (−) terminal → hull. DC flows from anodes through seawater to hull → drives hull potential negative. Ag/AgCl reference electrodes measure hull-to-seawater potential → controller maintains <span class="n-val">-850 mV</span> automatically.</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Switch OFF at berth - mandatory.</strong><br><strong>Canal transits (Suez/Panama) - also switch OFF:</strong> Close proximity of lock walls and shallow banks alters the electrochemical environment. Class society and manufacturer guidelines typically mandate ICCP switched OFF during canal transits to prevent localised over-protection or stray current faults to lock infrastructure. Stray current flows through mooring wires and seawater into jetty pilings and nearby vessels. <span class="n-val">10 A</span> DC dissolves <span class="n-val">~10 kg</span> steel per year. Also causes false reference readings → over-protection and paint damage.</div></div>
  <div class="n-h2">Voltage Trends Over Time</div>
  <ul class="n-list">
    <li><strong>After dry dock:</strong> Low voltage - fresh paint, minimal bare steel exposure</li>
    <li><strong>After 6+ months:</strong> Voltage rises - paint abrades, more bare steel, more current needed</li>
    <li><strong>Warm/tropical water:</strong> Voltage lower - higher conductivity, less resistance</li>
    <li><strong>Cold/Arctic water:</strong> Voltage higher - lower conductivity, more resistance</li>
  </ul>
  <div class="n-h2">Regional Salinity &amp; Bio-Fouling Variations</div>
  <ul class="n-list">
    <li><strong>Baltic Sea (brackish water ~8 ppt):</strong> Low salinity = high resistance electrolyte = higher ICCP driving voltage required. Controller output will be significantly higher than open ocean.</li>
    <li><strong>North Sea (~35 ppt, standard ocean):</strong> High conductivity = lower driving voltage needed. Controller output will be lower.</li>
    <li><strong>Micro-organism bio-fouling:</strong> Barnacle, algae, weed accumulation locally distorts electrical conductivity - alters ionic current paths and can cause reference electrode reading drift. Clean anodes at drydock.</li>
  </ul>

  <div class="n-h1" id="s-bonding">🔗 Electrical Bonding</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Bonding vs Earthing:</strong> <strong>Bonding</strong> connects all metallic components (hull, propeller shaft, rudder, piping) with low-resistance conductors → identical electrical potential → prevents bimetallic galvanic corrosion. <strong>Earthing</strong> provides fault current path to trip breaker on insulation failure. Difference: bonding = corrosion prevention, no current flows normally. Earthing = safety, only during faults. Bonding resistance target: <span class="n-val">&lt; 1 Ω</span>.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Shaft earthing brush:</strong> Carbon brush maintains continuity between rotating propeller shaft and hull. Without it: stray currents from propulsion inverters arc through bearing oil film → bearing pitting and failure. Check wear at every survey. Target resistance: <span class="n-val">&lt; 1 Ω</span> shaft to hull.</div></div>

  <div class="n-h1" id="s-mgps">🌊 MGPS - Marine Growth Prevention System</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>MGPS ≠ ICCP.</strong> MGPS = internal seawater pipes. ICCP = external hull. Surveyors ask the difference.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>MGPS Working:</strong> Prevents bio-fouling inside sea chests and seawater cooling pipes. Low DC (<span class="n-val">0.5–4V</span>, <span class="n-val">0.5–4A</span>) through copper anodes in sea chest → Cu²⁺ ions at <span class="n-val">~2 ppb</span> → toxic to marine larvae, prevents attachment. Aluminium anodes paired with copper create anti-fouling coating on internal pipe surfaces.</div></div>

  <div class="n-h1" id="s-drydock">🏗️ Dry Dock Maintenance</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>ICCP OFF before dry docking - mandatory.</strong> Running anodes in air creates arcing/fire. Commission in MANUAL after flooding - verify reference potentials before switching to auto.</div></div>
  <ol class="n-steps">
    <li>Switch off ICCP before docking</li>
    <li>Inspect MMO/Ti anodes for damage. Check HDPE insulating housings are intact.</li>
    <li>Continuity test all anode cables from deck junction boxes</li>
    <li>Replace ALL Ag/AgCl reference electrodes - mandatory every <span class="n-val">~2.5 years</span></li>
    <li>Inspect junction boxes for water ingress. Megger-test cables.</li>
    <li>Inspect shaft earthing brush for wear. Test rudder bonding: &lt;<span class="n-val">1 Ω</span></li>
    <li>After flooding: commission in manual mode first, verify potentials, then switch to auto</li>
  </ol>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - A-R-A-C:</strong> Anodes (MMO/Ti, parallel) | Reference (Ag/AgCl, sense hull potential) | Auto controller | Cable connections (+ to anodes, − to hull).<br><strong>Numbers: "Eight-Fifty in the Middle"</strong> <span class="n-val">--850 mV</span> target | <span class="n-val">-800 mV</span> minimum | <span class="n-val">-1100 mV</span> over-protection limit.</div></div>

  
  <!-- ═══ EXPANDED CONTENT ═══ -->

  <div class="n-h1" id="s-potentials">📊 Protection Potential - Full Breakdown</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Every surveyor asks these exact values.</strong> Know what happens at each level - the consequences of under and over protection are exam critical.</div></div>
  <table class="n-table">
    <tr><th>Potential (vs Ag/AgCl)</th><th>Condition</th><th>What Happens</th><th>Remedy</th></tr>
    <tr><td class="bad">Above <span class="n-val">-800 mV</span><br>(e.g. -700 mV)</td><td class="bad">UNDER-PROTECTION</td><td class="bad">Corrosion continues - hull pitting, anodic dissolution of steel</td><td>Increase controller output. Check anode circuit and reference electrodes for faults.</td></tr>
    <tr><td class="hl"><span class="n-val">-800 mV</span></td><td class="hl">Minimum protection limit (NACE/DNV)</td><td class="ok">Protection just begins</td><td>Target setpoint is -850 mV for safety margin</td></tr>
    <tr><td class="ok"><span class="n-val">-850 mV</span></td><td class="ok">TARGET SETPOINT (optimal)</td><td class="ok">Full protection - corrosion completely suppressed</td><td>Normal automatic control</td></tr>
    <tr><td class="ok"><span class="n-val">-800 to -1050 mV</span></td><td class="ok">Normal protection zone</td><td class="ok">Hull fully protected</td><td>Normal operation</td></tr>
    <tr><td class="bad">Below <span class="n-val">-1100 mV</span><br>(e.g. -1200 mV)</td><td class="bad">OVER-PROTECTION - DANGEROUS</td><td class="bad">Excessive hydrogen evolution (2H⁺+2e⁻→H₂). Cathodic paint disbondment. Hydrogen embrittlement of high-strength steel fasteners and propeller shafts.</td><td>IMMEDIATELY reduce output. Check setpoint. Recalibrate or replace reference electrode.</td></tr>
  </table>

  <div class="n-h1" id="s-electrodes">🔬 Reference Electrode Types - All Three</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Reference electrodes must be non-polarisable</strong> - maintain stable potential regardless of temperature, salinity, or current flow. They are the EYES of the ICCP system.</div></div>
  <table class="n-table">
    <tr><th>Type</th><th>Potential vs SHE</th><th>Construction</th><th>Marine Use</th></tr>
    <tr><td><strong>Ag/AgCl (Silver/Silver Chloride)</strong></td><td class="hl"><span class="n-val">+0.222 V</span></td><td>Silver wire coated in AgCl, KCl gel, porous ceramic junction</td><td class="ok">Most common shipboard ICCP - most stable and accurate. Replace every drydock (~2.5 yr).</td></tr>
    <tr><td>Zinc (Zn)</td><td class="hl"><span class="n-val">-0.76 V</span></td><td>Pure zinc rod in zinc sulphate gel</td><td class="hl">Simpler, cheaper backup - less stable than Ag/AgCl</td></tr>
    <tr><td>Copper/Copper Sulphate (Cu/CuSO₄)</td><td class="hl"><span class="n-val">+0.316 V</span></td><td>Copper rod in CuSO₄ solution</td><td>Drydock and temporary measurements only. Pipeline and dock structure testing.</td></tr>
  </table>

  <div class="n-h1" id="s-comparison">⚖️ ICCP vs Sacrificial Anodes - Full Comparison</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Sacrificial Anode</th><th>ICCP (Impressed Current)</th></tr>
    <tr><td>Working principle</td><td>Passive galvanic cell - Zn/Al anode naturally dissolves to protect hull</td><td class="ok">Active - external DC forces hull to cathodic potential with inert anodes</td></tr>
    <tr><td>Anode material</td><td>Zinc alloy (Al-Zn-In) or Aluminium alloy - consumed over time</td><td class="ok">Mixed Metal Oxide on Titanium (MMO/Ti) - virtually non-consumable</td></tr>
    <tr><td>Current control</td><td class="bad">Passive - fixed output, cannot adjust</td><td class="ok">Active closed-loop - auto-adjusts based on reference electrode feedback</td></tr>
    <tr><td>Protection potential</td><td>Naturally reaches <span class="n-val">-800 to -1000 mV</span></td><td class="ok">Precisely regulated to <span class="n-val">-800 to -1050 mV</span></td></tr>
    <tr><td>Anode replacement</td><td class="bad"><span class="n-val">50-70%</span> consumed - replace every drydock (~2.5 yr)</td><td class="ok">MMO/Ti anodes last <span class="n-val">20-25 years</span>. Reference electrodes replaced at drydock.</td></tr>
    <tr><td>Capital cost</td><td class="ok">Low capital cost</td><td class="bad">Higher capital investment, skilled ETO maintenance needed</td></tr>
    <tr><td>Running cost</td><td class="bad">High recurring replacement cost</td><td class="ok">Minimal running cost after installation</td></tr>
    <tr><td>Best for</td><td>Small vessels, areas inaccessible to ICCP cables, backup protection</td><td class="ok">Large vessels (&gt;100m LOA), trading in varying temperatures</td></tr>
  </table>

  <div class="n-h1" id="s-stray">⚡ Stray Current Corrosion at Berth - Exact Mechanism</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask: why switch ICCP off at berth?</strong> Know the exact mechanism - not just "stray current" but HOW and WHERE the corrosion occurs.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Mechanism step by step:</strong><br>
  1. ICCP drives current from anodes → through seawater → to hull (normal operation).<br>
  2. At berth: mooring wires, gangways, shore power cables, and seawater all provide alternative metallic paths to the jetty's steel piling.<br>
  3. ICCP current strays into these alternative paths instead of returning normally.<br>
  4. When stray current EXITS from the jetty metalwork back into seawater to complete the circuit → that exit point becomes the ANODE → rapid anodic dissolution = corrosion of jetty steel.<br>
  5. <span class="n-val">10 amps</span> of stray DC = dissolves <span class="n-val">~10 kg</span> of steel per year. A typical ICCP outputs 5-100A.<br>
  6. Shore power connection additionally links ship hull to terminal earthing system - creates unpredictable current paths and false reference electrode readings.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Double problem at berth:</strong> (1) Stray current corrodes jetty infrastructure and nearby vessels. (2) Nearby metallic structures cause ship's reference electrode to read falsely → controller may over-protect the hull → hydrogen evolution + paint disbondment on own hull. Must switch OFF and fit galvanic isolator on shore earth conductor.</div></div>

  <div class="n-h1" id="s-commissioning">🔄 Drydock Re-commissioning Procedure</div>
  <ol class="n-steps">
    <li><strong>Switch OFF and isolate</strong> before docking - lock out power, log time. Fire hazard from arcing without seawater.</li>
    <li><strong>Visual anode inspection</strong> - check MMO/Ti anodes for physical damage, substrate corrosion. Verify HDPE housing intact (prevents direct hull short-circuit).</li>
    <li><strong>Anode continuity test</strong> - multimeter: cable continuity controller to anode terminals. Verify infinite resistance between anode body and hull (HDPE isolation intact).</li>
    <li><strong>Replace all Ag/AgCl reference electrodes</strong> - gel electrolyte depletes after <span class="n-val">~2.5 years</span>. Apply thread sealant for watertight seal. Record new serial numbers.</li>
    <li><strong>Junction box and cable inspection</strong> - check cable glands for water ingress. Clean terminals. Megger test cables (&gt;1 MΩ). Replace cracked or oxidised cables.</li>
    <li><strong>Sacrificial anode and bonding checks</strong> - replace hull/rudder sacrificial anodes if &gt;<span class="n-val">50-60%</span> consumed. Inspect shaft earthing brush (length, spring tension). Test rudder bonding strap: resistance &lt;<span class="n-val">1 Ω</span>.</li>
    <li><strong>After flooding</strong> - switch on in MANUAL mode at minimum output. Gradually increase while verifying reference electrode readings. Switch to AUTO mode when readings are stable. Log all commissioning parameters.</li>
  </ol>

  <div class="n-h1" id="s-mgps-detail">🌊 MGPS - Full Technical Details</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Marine Growth Prevention System (MGPS):</strong> Prevents biological fouling (barnacles, algae, mussels) inside sea chests, internal seawater pipework, and heat exchangers by releasing trace copper ions.</div></div>
  <div class="n-h2">Working Principle</div>
  <ul class="n-list">
    <li><strong>Electrolytic process:</strong> Low DC voltage (<span class="n-val">0.5–4V</span>) and current (<span class="n-val">0.5–4A</span> per anode) passed between copper anodes in sea chest and surrounding pipework (cathode)</li>
    <li><strong>Copper dissolution:</strong> Copper anodes slowly dissolve releasing Cu²⁺ ions at <span class="n-val">~2 ppb</span> (parts per billion) - highly toxic to marine larvae at attachment stage, below environmental discharge limits</li>
    <li><strong>Aluminium anodes:</strong> Often paired with copper. Dissolving Al³⁺ ions create thin anti-corrosive coating on internal surfaces of copper alloy heat exchanger tubes</li>
    <li><strong>Controller:</strong> Simple fixed-current controller - distinct from ICCP's closed-loop feedback system</li>
    <li><strong>Anode life:</strong> MGPS copper anodes consumed - typically last <span class="n-val">1–3 years</span>, replaced at drydock</li>
  </ul>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>MGPS vs ICCP - Critical difference:</strong> MGPS = biological fouling prevention inside internal pipes. ICCP = electrochemical corrosion prevention of external hull. Different anodes, different voltages, different purposes. Both may be running simultaneously on the same ship.</div></div>

  <div class="n-h1" id="s-shaft-detail">⚙️ Shaft Earthing Brush - Full Specifications &amp; Testing</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why shaft earthing is needed:</strong> Bronze propeller (+0.3V vs SHE) and steel hull (-0.5V vs SHE) naturally form a bimetallic galvanic cell. Without bonding, this potential difference + stray VFD/alternator currents cause current to arc through bearing oil film → electrolytic corrosion and spark pitting of main engine bearing surfaces and shaft.</div></div>
  <div class="n-h2">Construction</div>
  <ul class="n-list">
    <li>Slip ring fitted to propeller shaft (or intermediate shaft)</li>
    <li>High-conductivity carbon brush rides against slip ring</li>
    <li>Brush holder with spring to maintain contact pressure</li>
    <li>Cables bonding shaft → hull earth bar</li>
  </ul>
  <div class="n-h2">ETO Checks and Testing</div>
  <ol class="n-steps">
    <li>Measure shaft-to-hull resistance: must be &lt;<span class="n-val">1 Ω</span> - if higher: brush worn or slip ring contaminated</li>
    <li>Inspect carbon brush length - replace if worn below minimum length (typically &lt;50% of original)</li>
    <li>Check brush holder spring tension - spring must maintain adequate contact force on slip ring</li>
    <li>Clean slip ring surface - remove carbon deposits, oil contamination. Polish if pitted. Pitting = evidence of arcing from insufficient brush contact.</li>
    <li>Log resistance reading with date in maintenance record</li>
  </ol>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - why shaft brush matters:</strong> Propeller is bronze, hull is steel = bimetallic couple. Oil film in bearings = electrical insulator. Without shaft brush: shaft at different potential = stray currents arc through bearing oil film = bearing pitting = bearing failure. Shaft brush = continuous metallic path bypassing the oil film insulator.</div></div>

  <div class="n-h1" id="s-faults">🔌 ICCP Fault-Finding Principles</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: Deswal and Sanjib ask ICCP faults in depth.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Systematic Diagnosis:</strong> The ICCP system is a closed loop. Faults must be isolated to either the <strong>Power Circuit</strong> or the <strong>Sensing Circuit</strong>.</div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">POWER CIRCUIT FAULTS</div>
      <div class="card-desc">
        <em>Path: Controller → Anodes → Seawater → Hull → Controller</em><br><br>
        <strong>Symptom:</strong> High Voltage, Zero/Low Current.<br>
        <strong>Cause:</strong> Open circuit in anode feed. Disconnected cable, corroded deck junction box, or sheared anode.<br>
        <strong>Action:</strong> Check continuity from controller to anode terminals.
      </div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">SENSING CIRCUIT FAULTS</div>
      <div class="card-desc">
        <em>Path: Reference Electrode → Controller</em><br><br>
        <strong>Symptom:</strong> Erratic potential display, controller swings between min and max output.<br>
        <strong>Cause:</strong> Reference electrode failure (gel depleted, junction contaminated) or broken sense cable.<br>
        <strong>Action:</strong> Switch to MANUAL mode. Measure potential with portable Ag/AgCl reference.
      </div>
    </div>
  </div>

<div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 10</div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Explain ICCP working in detail.</strong><br><strong>Ideal Answer:</strong> Controller converts AC → adjustable DC. (+) to inert MMO/Ti anodes (flush below waterline, parallel wiring). (−) to hull. DC flows through seawater → drives hull potential negative. Ag/AgCl reference electrodes continuously measure hull-to-seawater potential → controller adjusts output to maintain <span class="n-val">-850 mV</span> setpoint vs Ag/AgCl automatically.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the reference electrode? Material? Why replaced at dry dock?</strong><br><strong>Ideal Answer:</strong> Sensing element of ICCP control loop - measures hull-to-seawater electrochemical potential for automatic control, preventing both under and over-protection. Material: silver wire coated with silver chloride (Ag/AgCl) in gel electrolyte, porous ceramic housing. Replaced every <span class="n-val">~2.5 years</span> because internal gel depletes and porous junction contaminates → reading drift → incorrect protection.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why switch off ICCP at berth? What happens if not?</strong><br><strong>Ideal Answer:</strong> Stray current corrosion. DC strays through mooring wires, shore connections and seawater into jetty pilings and nearby vessels <span class="n-val">-10A</span> dissolves <span class="n-val">~10 kg</span> steel/year. Also: nearby metalwork causes false reference readings → over-protection → hydrogen evolution and paint disbondment on own hull. Switch off is mandatory per SMS and class rules.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>ICCP panel voltage - will it increase or decrease after 6 months?</strong><br><strong>Ideal Answer:</strong> Increase. After dry dock, fresh paint gives &gt;95% coverage - small bare steel area, low current demand. Over 6 months, paint abrades from anchor work, tidal scrubbing, wear → more bare steel exposed → controller outputs more current at higher voltage to maintain <span class="n-val">-850 mV</span> setpoint.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>ICCP panel shows high voltage but zero current. What is the fault?</strong><br><strong>Ideal Answer:</strong> Open circuit in anode feed. Controller pushes voltage but circuit is broken - no current flows. Causes: disconnected cable, corroded junction box, or anode sheared from hull. <strong>Critical scenario - if this occurs during drydock:</strong> If the ICCP was accidentally left running while the ship is out of the water, air cannot act as an ionic electrolyte. Current drops to zero, voltage spikes. System must be shut down immediately to prevent high-voltage arcing near fresh paint vapours and solvents. Always switch OFF before docking. Action at sea: switch to manual, reduce output, use multimeter to check continuity from controller through deck junction boxes to each anode.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is MGPS? Difference from ICCP?</strong><br><strong>Ideal Answer:</strong> MGPS (Marine Growth Prevention System) prevents bio-fouling inside sea chests and seawater cooling pipes. Low DC (<span class="n-val">0.5–4V</span>, <span class="n-val">0.5–4A</span>) through copper anodes → Cu²⁺ ions at <span class="n-val">~2 ppb</span> - toxic to marine larvae. ICCP protects external hull using MMO/Ti anodes. MGPS = internal pipes. ICCP = external hull.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Bonding vs earthing - what is the difference?</strong><br><strong>Ideal Answer:</strong> Bonding connects all metallic components at identical electrical potential - prevents bimetallic galvanic corrosion, no current flows normally. Earthing provides fault current path to trip breaker on insulation failure. Bonding = corrosion prevention. Earthing = safety. Shaft bonding brush and rudder bonding cable: resistance target <span class="n-val">&lt; 1 Ω</span>.</div></div>

  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 10</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points</th></tr>
    <tr><td>ICCP working principle</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Hull = cathode | MMO/Ti anodes parallel | Ag/AgCl reference | <span class="n-val">-850 mV</span> setpoint | AC→DC controller</td></tr>
    <tr><td>Protection potential values</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Min <span class="n-val">-800 mV</span> | Target <span class="n-val">-850 mV</span> | Over-protection &lt;<span class="n-val">-1100 mV</span> | Output <span class="n-val">6–25V, 5–100A</span></td></tr>
    <tr><td>Switch off at berth</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Stray current | <span class="n-val">10A</span> = <span class="n-val">10 kg</span> steel/year | False ref readings → over-protection</td></tr>
    <tr><td>Reference electrode</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Ag/AgCl | Replace every <span class="n-val">2.5 years</span> | Gel depletes → drift</td></tr>
    <tr><td>Voltage trend over time</td><td class="hl">⭐⭐⭐⭐ Multiple surveyors</td><td>Aging hull → UP | Warm water → DOWN | Cold water → UP</td></tr>
    <tr><td>Bonding vs earthing</td><td class="hl">⭐⭐⭐⭐ Multiple surveyors</td><td>Bonding = equi-potential corrosion prevention | Earthing = safety fault path | &lt;<span class="n-val">1 Ω</span></td></tr>
    <tr><td>MGPS vs ICCP</td><td class="hl">⭐⭐⭐⭐ Multiple surveyors</td><td>MGPS = internal pipes, Cu ions <span class="n-val">2 ppb</span> | ICCP = external hull</td></tr>
    <tr><td>Dry dock maintenance</td><td class="hl">⭐⭐⭐ Deswal, Kamath</td><td>OFF before docking | Replace Ag/AgCl | Commission manual after flooding</td></tr>
  </table>

    </div>
</div>
</div>
`);

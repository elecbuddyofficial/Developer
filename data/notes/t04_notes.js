window.loadNotes("T04", `<div class="view" id="view-notes-t04">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T04')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 04 - Switchboard & Circuit Breakers</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">ACB & Protection</span>
      <span class="tag tag-purple">Emergency Generator</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-ups')">UPS</button>
    <button class="anc-btn" onclick="jumpTo('s-battery-sg')">Battery SG</button>
    <button class="anc-btn" onclick="jumpTo('s-pref-detail')">Pref Trip</button>
    <button class="anc-btn" onclick="jumpTo('s-pi-physics')">PI Test</button>
    <button class="anc-btn" onclick="jumpTo('s-dielectric')">Dielectric</button>
    <button class="anc-btn" onclick="jumpTo('s-msb-survey')">MSB Survey</button>
    <button class="anc-btn" onclick="jumpTo('s-msb-safeties')">MSB Safeties</button>
    <button class="anc-btn" onclick="jumpTo('s-hrc-fuses')">HRC Fuses</button>
    <button class="anc-btn" onclick="jumpTo('s-diff-relay')">Diff Relay</button>
    <button class="anc-btn" onclick="jumpTo('s-esb-location')">ESB Location</button>
    <button class="anc-btn" onclick="jumpTo('s-overload-test')">Overload Test</button>
    <button class="anc-btn" onclick="jumpTo('s-acb-ratings')">ACB Ratings</button>
    <button class="anc-btn" onclick="jumpTo('s-acb-maint')">ACB Maint.</button>
    <button class="anc-btn" onclick="jumpTo('s-revpower-detail')">Reverse Power</button>
    <button class="anc-btn" onclick="jumpTo('s-mcc-detail')">Group Starter</button>
    <button class="anc-btn" onclick="jumpTo('s-emerg-autostart')">Emerg. Gen</button>
    <button class="anc-btn" onclick="jumpTo('s-fire-detector')">Fire Detector</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  

  <!-- ═══ SURVEYOR Q&A ═══ -->
  
  <div class="n-h1" id="s-ups">🔌 UPS - Uninterruptible Power Supply</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan, Nair ask UPS working and bypass switch.</strong></div></div>
  <table class="n-table">
    <tr><th>Type</th><th>How It Works</th><th>Switchover</th></tr>
    <tr><td><strong>Online (Double Conversion)</strong></td><td class="ok">AC → Rectifier → DC bus (batteries) → Inverter → AC output. Load ALWAYS through inverter.</td><td class="ok"><span class="n-val">ZERO</span></td></tr>
    <tr><td><strong>Offline (Standby)</strong></td><td>Load from mains normally. On failure: switches to inverter/battery.</td><td class="hl"><span class="n-val">4–12 ms</span></td></tr>
    <tr><td><strong>Line Interactive</strong></td><td>Auto-transformer handles voltage variations. Battery for failure.</td><td class="hl"><span class="n-val">2–4 ms</span></td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Ship UPS supplies:</strong> ECDIS, GMDSS, IAS/SCADA, fire alarm panel, bridge navigation (AIS, BNWAS, SSAS), alarm monitoring (must not lose memory on power loss).</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Bypass switch:</strong> Static bypass (thyristor, automatic) - transfers to direct mains on UPS fault, no interruption. Maintenance bypass (manual) - isolates UPS for servicing while load continues from mains.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Online = always through inverter = zero switchover. Offline = switches on failure = small gap. GMDSS needs UPS for continuous comms. Static bypass = automatic. Maintenance bypass = manual, for servicing.</div></div>


  <!-- ═══ T04 GAPS ADDED FROM DOCX VERIFICATION ═══ -->

  <div class="n-h1" id="s-battery-sg">🔋 Battery SG Thresholds &amp; Testing Procedure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib, Kamath ask SG values and battery testing procedure.</strong> Know all thresholds and the 5-step maintenance routine.</div></div>
  <div class="n-h2">Specific Gravity (SG) Hydrometer Thresholds - Lead-Acid</div>
  <table class="n-table">
    <tr><th>State of Charge</th><th>SG Reading</th><th>Action</th></tr>
    <tr><td>Fully charged</td><td class="ok"><span class="n-val">1.280–1.300</span></td><td class="ok">Normal - no action</td></tr>
    <tr><td>Half charged</td><td class="hl"><span class="n-val">~1.200</span></td><td class="hl">Recharge soon</td></tr>
    <tr><td>Fully discharged</td><td class="bad"><span class="n-val">1.100–1.120</span></td><td class="bad">Recharge immediately - risk of sulphation if left discharged</td></tr>
    <tr><td>Inter-cell variation</td><td class="bad">&gt;<span class="n-val">0.050</span> difference between cells</td><td class="bad">Cell fault - that cell has sulphation or internal short - investigate</td></tr>
  </table>
  <div class="n-h2">5-Step Battery Maintenance Procedure</div>
  <ol class="n-steps">
    <li>Check electrolyte level - must cover plates by <span class="n-val">10–15 mm</span>. Top up with distilled water ONLY (not acid).</li>
    <li>Check SG of each cell with a hydrometer. Record all readings. Flag any cell with SG &gt;0.050 below average.</li>
    <li>Clean terminal posts - remove white sulphate deposits with wire brush, apply petroleum jelly to prevent corrosion.</li>
    <li>Check terminal torque - loose connections cause resistance heating and voltage drops.</li>
    <li>Equalising charge (if required): charge at higher voltage for extended period to bring all cells to full capacity and dissolve mild sulphation.</li>
  </ol>

  <div class="n-h1" id="s-pref-detail">⚖️ Preferential Trip - Stage Details &amp; Dashpot</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Wad ask preferential trip stages and dashpot working.</strong> Know both stages and the NEVER shed list.</div></div>
  <table class="n-table">
    <tr><th>Stage</th><th>Trigger</th><th>What Gets Shed</th><th>Delay</th></tr>
    <tr><td><strong>Stage 1</strong></td><td>Generator load reaches <span class="n-val">~90%</span> rated</td><td>Galley ovens, water heaters, laundry (non-essential domestic loads)</td><td class="hl"><span class="n-val">5–10 seconds</span> dashpot delay</td></tr>
    <tr><td><strong>Stage 2</strong></td><td>Generator load reaches <span class="n-val">~95%</span> rated</td><td>Accommodation ventilation, remaining non-essential HVAC, deck machinery not in use</td><td class="hl"><span class="n-val">Additional delay</span></td></tr>
    <tr><td class="bad"><strong>NEVER shed</strong></td><td> - </td><td class="bad">Navigation lights, steering gear, fire pump, bilge pump, GMDSS, emergency lighting, fire detection</td><td> - </td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Dashpot mechanism (surveyor's favourite cross-question):</strong> The dashpot is a pneumatic or hydraulic time-delay device. Construction: a cylinder containing a piston connected to the relay contact. The piston moves through oil or air - the flow rate is controlled by a needle valve orifice. A narrow orifice = slow piston movement = longer delay. A wider orifice = faster piston = shorter delay. This delay allows motor starting surges (which are transient overloads) to pass without triggering load shedding. Only sustained overloads above the set level trigger the trip sequence. Modern alternative: electronic digital timer relay - digitally set, no mechanical wear, no oil leakage risk.</div></div>

  <div class="n-h1" id="s-pi-physics">📈 PI Test - Why 10 Minutes (3-Component Current)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask why we wait 10 minutes for a PI test.</strong> Know the three current components.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Three components of current during a DC insulation test:</strong><br>
  <strong>1. Capacitive current:</strong> Decays in seconds - the initial surge as the insulation capacitance charges. Falls to near-zero within 10–30 seconds. This component has nothing to do with insulation quality.<br>
  <strong>2. Absorption current (dielectric polarisation):</strong> Decays slowly over minutes - caused by molecular dipoles in the insulation material aligning to the applied electric field (dielectric polarisation). In good dry insulation, this is significant and takes ~10 minutes to decay. In wet/degraded insulation, this component is small (molecules already disordered by contamination).<br>
  <strong>3. True (conductive) leakage current:</strong> Constant - represents actual current flowing through the insulation resistance. This is what we want to measure - it reflects true insulation quality.<br>
  <strong>Why 10 minutes:</strong> At 1 minute, absorption current is still significant - IR reading is artificially low. By 10 minutes, absorption current has mostly decayed - reading approaches true leakage resistance. PI = IR(10min)/IR(1min) - a high ratio means the absorption component was large (good dry insulation), confirming healthy insulation.</div></div>

  <div class="n-h1" id="s-dielectric">⚡ Dielectric Strength - ACB vs VCB vs SF6</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why VCB and SF6 are used for HV, not ACB:</strong> Dielectric strength determines how well a medium resists electrical breakdown (arc formation) per unit distance.</div></div>
  <table class="n-table">
    <tr><th>Medium</th><th>Dielectric Strength</th><th>Implication</th></tr>
    <tr><td>Air (ACB)</td><td class="bad"><span class="n-val">2–3 kV/mm</span></td><td class="bad">Poor - needs large physical separation distances for HV. Air ionises easily under arc energy.</td></tr>
    <tr><td>Vacuum (VCB)</td><td class="ok"><span class="n-val">8–10 kV/mm</span></td><td class="ok">Excellent - vacuum is a perfect insulator. No gas molecules to ionise. Arc extinguishes at first current zero.</td></tr>
    <tr><td>SF6 gas (at 4 bar pressure)</td><td class="ok"><span class="n-val">~89 kV/mm</span></td><td class="ok">Exceptional - SF6 is electronegative (absorbs free electrons). At 4 bar pressure: 2.5× per atmosphere = ~30× air strength at pressure.</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why ACB is limited to LV systems:</strong> At 6.6 kV, the arc energy is roughly (6600/440)² = 225 times higher than at 440V. Air cannot quench this arc - it ionises and sustains, potentially exploding the breaker. VCB and SF6 are the only viable solutions at HV.</div></div>

  <div class="n-h1" id="s-msb-survey">🔍 MSB Survey Preparation - 14-Point Checklist</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Before a class society electrical survey, prepare the MSB thoroughly:</strong></div></div>
  <ol class="n-steps">
    <li>Strip dust and oxidation from all copper busbars - use fine emery cloth on contact surfaces</li>
    <li>Tighten all busbar connections to specified torque - loose connections = thermal hotspots = IR drop = class finding</li>
    <li>IR test all feeder circuits with ACBs open - minimum <span class="n-val">1 MΩ</span> to earth required for each circuit</li>
    <li>Check all cable gland sealing compounds - no cracking, proper seal against moisture and vermin</li>
    <li>Test synchroscope lamp synchronisation - all dark lamp method functioning correctly</li>
    <li>Verify rubber mats correct thickness in front and rear of MSB <span class="n-val">-6 mm minimum</span> for LV, <span class="n-val">12 mm</span> for HV</li>
    <li>Check earth bus connections - all equipment frames bonded to earth bar</li>
    <li>Verify ACB maintenance records are current - last test dates, trip times recorded</li>
    <li>Check OCR settings against approved load analysis document</li>
    <li>Test preferential trip sequence - verify stage timing and correct loads shed</li>
    <li>Verify emergency generator test records - last monthly auto-start test, last annual load test</li>
    <li>Check phase barriers between busbars intact - no cracks, secure mounting</li>
    <li>Verify all instruments (voltmeters, ammeters, power factor meters) calibrated and in tolerance</li>
    <li>Prepare all certificates and maintenance records for surveyor review</li>
  </ol>
  <div class="n-h1" id="s-msb-safeties">🛡️ MSB Safeties — Complete List</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Asked by ALL surveyors — most common switchboard question. Know all 10 safeties by name and purpose.</strong></div></div>
  <ol class="n-steps">
    <li><strong>Dead-front panel construction:</strong> Cannot open live panel door — physical/electrical interlock prevents access to live busbars. Contact is impossible during normal operation.</li>
    <li><strong>IDMT Over-current relay (OCR):</strong> Inverse Definite Minimum Time — trips FASTER for higher fault current. Protects busbars, cables and ACBs from sustained overcurrent and short circuit.</li>
    <li><strong>Under-voltage (UV) trip relay:</strong> Trips generator ACB if voltage drops below <span class="n-val">~85%</span> rated. Prevents motoring of the alternator on voltage collapse.</li>
    <li><strong>Reverse power relay:</strong> Detects power flow FROM busbar INTO generator — trips ACB. Prevents motoring of alternator when prime mover fails (engine damage without combustion/lubrication).</li>
    <li><strong>Earth fault indicator (IRM / lamp system):</strong> Three lamps in star configuration. Normal = all glow equally. Fault = earthed phase lamp dims, other two brighten. IRM (Insulation Resistance Monitor) gives continuous reading.</li>
    <li><strong>Bus-tie (BTB) interlock:</strong> Prevents wrong buses being paralleled. Ensures only correctly synchronised sections connect. Prevents circulating currents and fault propagation.</li>
    <li><strong>Preferential trip relay:</strong> Sheds non-essential loads sequentially (in stages) to prevent overload and blackout when generator is near limit.</li>
    <li><strong>Standby start interlock:</strong> Auto-starts standby generator on overload or main generator failure — prevents single-point blackout.</li>
    <li><strong>Emergency stop push button:</strong> Trips all generator ACBs simultaneously for emergency shutdown of the entire MSB.</li>
    <li><strong>Overvoltage relay:</strong> Trips generator if output voltage exceeds <span class="n-val">~110%</span> rated — protects connected equipment from overvoltage damage.</li>
  </ol>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid — 10 Safeties:</strong> Dead-front → OCR (IDMT) → UV trip → Reverse power → Earth fault (IRM) → BTB interlock → Preferential trip → Standby auto-start → Emergency stop → Overvoltage. "Dead OCR UV Reverse Earth BTB Pref Standby E-stop Over"</div></div>

  <div class="n-h1" id="s-hrc-fuses">⚡ HRC Fuse Types — Rewirable vs Cartridge vs HRC</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal, Sanjib — difference between fuse types. Never use rewirable on 440V MSB feeder.</strong></div></div>
  <table class="n-table">
    <tr><th>Type</th><th>Rating</th><th>Breaking Capacity</th><th>Ship Use</th></tr>
    <tr><td><strong>Rewirable (Kit-Kat)</strong></td><td class="bad">Unknown — depends on wire gauge inserted</td><td class="bad">Low — unsafe for high fault current</td><td class="bad">Domestic/low-voltage only. NEVER on MSB feeders.</td></tr>
    <tr><td><strong>Cartridge</strong></td><td class="hl">Known — printed on body</td><td class="bad">Low-medium — may not safely interrupt high fault current</td><td>Small panel distribution circuits</td></tr>
    <tr><td><strong>HRC (High Rupturing Capacity)</strong></td><td class="ok">Stamped on end cap — accurate, repeatable</td><td class="ok"><span class="n-val">80–100 kA</span> — safe for highest ship fault currents</td><td class="ok">MSB feeders, motor feeders, HV protection</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>HRC internals:</strong> Ceramic or glass body → silver fuse element (calibrated cross-section, notched to control blow point) → silica sand filler (quenches arc when element vaporises). Blows in <span class="n-val">0.25–3 cycles</span> — current-limiting (interrupts before current reaches first peak). No arc flash. Accurate, repeatable rating. Non-replaceable — whole fuse replaced after operation.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Deswal, Sanjib): What type of fuse is used on 440V ship circuits and why?</strong><br><strong>Ideal Answer:</strong> HRC (High Rupturing Capacity) fuse. Rated current stamped on end cap — accurate and repeatable. Breaking capacity 80–100 kA — safely interrupts highest fault currents on ship without explosive failure. Current-limiting — interrupts fault before current peak, minimising equipment damage. Internal silver element + silica sand arc quench. Rewirable fuses must NOT be used — inaccurate rating, low breaking capacity, unsafe for high fault currents.</div></div>

  <div class="n-h1" id="s-diff-relay">🔁 Protection Relays — Overload vs OCR vs Differential</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Common surveyor confusion trap — know the difference between all three protection types.</strong></div></div>
  <table class="n-table">
    <tr><th>Relay Type</th><th>Principle</th><th>Protects Against</th><th>Speed</th><th>Used For</th></tr>
    <tr><td><strong>Overload relay (thermal bimetallic)</strong></td><td>Bimetallic strip heated by current — bends and trips at set temperature</td><td class="hl">Sustained overload (overcurrent &lt;10× FLA)</td><td class="bad">Slow — thermal time constant matches motor heating</td><td>Motor winding protection</td></tr>
    <tr><td><strong>OCR — IDMT</strong></td><td>Current transformer → relay coil → IDMT characteristic — inverse time vs current</td><td class="hl">Fault current and heavy short circuits</td><td class="ok">Fast at high multiples — trips in &lt;100 ms at 10× set</td><td>MSB busbars, cable feeders</td></tr>
    <tr><td><strong>Differential relay</strong></td><td>Compares CT current IN vs CT current OUT of protected zone — if IN ≠ OUT → internal fault</td><td class="ok">Internal faults — earth fault, winding fault, low-level short circuit</td><td class="ok">Very fast — no intentional delay. Detects even small faults</td><td>Large generators, large transformers, main busbars</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Fuse vs OCR:</strong> Fuse is sacrificial (single-use) — operates once, must be replaced. OCR resets after fault clearance — reusable. Fuse protects cables from overcurrent. OCR protects the generator and busbar system with selectivity (time-graded). Both may be present: HRC fuse for short-circuit backup, OCR for time-graded overload/fault protection.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: What is a differential relay and how does it differ from a fuse?</strong><br><strong>Ideal Answer:</strong> A differential relay monitors current flowing INTO a protected zone (generator, transformer, busbar section) and current flowing OUT. Under normal conditions IN = OUT. If there is an internal fault (earth fault, winding short, insulation breakdown), current leaks internally — IN ≠ OUT — relay trips immediately. It detects very small internal faults that would not cause enough current to blow a fuse or operate an OCR. A fuse only protects against overcurrent from external causes — it cannot detect internal low-level faults. Differential relay is used for large generators, large transformers and main busbars where internal fault protection is critical.</div></div>

  <div class="n-h1" id="s-esb-location">📋 Emergency Switchboard — SOLAS II-1/Reg 42 Location</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS II-1/Reg 42 — ESB location requirements. Distinct from MSB. Know all three location criteria.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ESB must be located:</strong>
  <ul class="n-list">
    <li>Above the bulkhead deck (freeboard deck) — not in the engine room or spaces below</li>
    <li>Outside machinery spaces — accessible even if fire in engine room renders MSB inaccessible</li>
    <li>In a position readily accessible from the navigation bridge — for manual operation during emergency</li>
  </ul>
  <strong>Purpose:</strong> If fire in engine room destroys or makes MSB inaccessible, ESB remains operable for essential services.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ESB power sources:</strong><br>
  Primary: Emergency generator (must connect within <span class="n-val">45 seconds</span> for cargo ships, <span class="n-val">30 seconds</span> for passenger ships).<br>
  Transitional source: Battery/UPS for <span class="n-val">30 minutes</span> minimum during the 45-second generator start-up gap — bridges the blackout window.<br>
  Shore supply connection point (for in-port use).</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Essential services on ESB (SOLAS II-1/Reg 42):</strong> Emergency lighting throughout ship and lifeboats, fire pump, bilge pump, GMDSS radio, navigation lights, general alarm, steering gear (one motor), sprinkler system pump, daylight signalling lamp, CCTV, fire detection panel.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Where must the Emergency Switchboard be located and why?</strong><br><strong>Ideal Answer:</strong> SOLAS II-1/Reg 42 requires it above the bulkhead deck, outside all machinery spaces, readily accessible from the navigation bridge. The reason: if the main engine room is on fire, the MSB becomes inaccessible. The ESB must remain reachable to supply emergency lighting, fire pump, steering, GMDSS and navigation lights. It is fed by the emergency generator (starts within 45 seconds) with a 30-minute transitional battery source to bridge the startup gap.</div></div>

  <div class="n-h1" id="s-overload-test">🔧 Overload Test Procedure — Generator OCR</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal — "how do you do an overload test on the generator OCR?" Secondary injection method is standard answer.</strong></div></div>
  <div class="n-h2">Secondary Injection Method (Preferred — No Actual Overload on System)</div>
  <ol class="n-steps">
    <li><strong>Obtain PTW:</strong> Permit to Work. Inform bridge and Chief Engineer before any relay testing.</li>
    <li><strong>Rack ACB to TEST position:</strong> Power contacts disconnected from busbars; control circuits remain connected. Generator not loaded.</li>
    <li><strong>Isolate OCR trip circuit or use test block:</strong> Prevents the relay output from tripping the ACB during current injection.</li>
    <li><strong>Connect relay test set</strong> (e.g. Omicron CMC, FREJA) to OCR current input terminals.</li>
    <li><strong>Inject 1.05× pickup current</strong> — relay must NOT trip (verifies threshold is correct).</li>
    <li><strong>Inject 2× pickup current</strong> — measure time to trip, compare with IDMT characteristic curve in relay manual.</li>
    <li><strong>Inject 5× and 10× pickup</strong> — record trip times at each multiple; verify IDMT curve shape.</li>
    <li><strong>Verify trip output:</strong> Confirm relay output contact operates the ACB trip coil correctly.</li>
    <li><strong>Reconnect CT secondary leads</strong>, rack ACB to SERVICE, remove test set.</li>
    <li><strong>Record and sign:</strong> Current injected, trip time at each multiple, relay setting (pickup current, time multiplier), date, test set serial and calibration date, surveyor witness signature.</li>
  </ol>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Alternative — Load bank test:</strong> Connect calibrated load bank to generator. Increase load beyond rated kW. Verify OCR trips ACB at set value. Less precise than secondary injection — actual system loads vary. Only used where relay test equipment unavailable.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>IDMT reminder:</strong> Inverse Definite Minimum Time — trips faster for higher multiples of set current. At 2× set: slow trip (seconds). At 10× set: very fast trip (milliseconds). The curve shape is verified during the test — not just the pickup point.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Deswal): How do you do an overload test on the generator OCR?</strong><br><strong>Ideal Answer:</strong> Secondary injection method. Rack ACB to test position. Connect relay test set (Omicron/FREJA) to OCR current terminals. Inject at 1.05× pickup — relay must not trip. Inject at 2×, 5×, 10× — record trip times and compare against IDMT characteristic curve. Verify trip output operates ACB. Reconnect CT secondary, rack to service. Record all values with date and witness signature. The IDMT curve shape, not just the pickup, must be verified.</div></div>


  <div class="n-h1" id="s-acb-ratings">⚙️ ACB Ratings - Technical Terminology</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Surveyors expect you to use the correct IEC nameplate symbols.</strong> ACB nameplates carry these ratings - know what each means.</div></div>
  <div class="n-grid">
  <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">In - Normal Current Rating</div><div class="card-desc">Continuous current the ACB can carry indefinitely without overheating.</div></div>
  <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">Icu / Ics - Breaking Capacity</div><div class="card-desc"><strong>Icu</strong> = ultimate short-circuit breaking capacity. <strong>Ics</strong> = service breaking capacity (% of Icu the breaker can repeat). Max current the ACB can interrupt safely.</div></div>
  <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">Ue - Rated Operational Voltage</div><div class="card-desc">Maximum voltage for normal operation (e.g. <span class="n-val">440 V</span>).</div></div>
  <div class="n-card" style="border-color:rgba(167,139,250,.3)"><div class="card-title" style="color:var(--purple)">Ui - Rated Insulation Voltage</div><div class="card-desc">Maximum voltage the insulation can withstand - always <strong>higher than Ue</strong>.</div></div>
  </div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Shunt Trip vs Trip Coil:</strong> The <strong>Shunt Trip</strong> is an external trip input - protection relays energise it to fire the trip coil (TC) and open contacts instantly. The <strong>Close Coil (CC)</strong> is an electromagnet that closes the contacts against the spring on a close command.</div></div>

  <div class="n-h1" id="s-acb-maint">🔧 ACB — Routine Maintenance and Isolation Procedure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: Kamath, ALL surveyors</strong></div></div>
  <div class="n-h2">Routine Maintenance</div>
  <ul class="n-list">
    <li>Clean arc chutes (remove carbon deposits with dry cloth and compressed air).</li>
    <li>Check contact erosion — measure wear indicator.</li>
    <li>Lubricate operating mechanism (manufacturer-specified grease).</li>
    <li>Test trip coils (secondary injection).</li>
    <li>Check arc extinction plates alignment.</li>
  </ul>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Secondary injection test:</strong> Inject known AC current into relay secondary coil using test set. Increase until relay trips. Compare with IDMT curve. Tests relay WITHOUT passing real fault current — safe, repeatable.</div></div>
  <div class="n-h2">ACB Isolation Procedure</div>
  <ol class="n-steps">
    <li>Obtain PTW (Permit to Work).</li>
    <li>Open ACB — visually confirm open.</li>
    <li>Rack out to isolated position.</li>
    <li>Apply LOTO (Lockout/Tagout) on racking handle.</li>
    <li>Test for dead at ACB terminals BOTH sides.</li>
    <li>Apply earth clamps to bus side.</li>
    <li>Post 'Man Working' notice.</li>
  </ol>

  <div class="n-h1" id="s-revpower-detail">🔁 Reverse Power Relay - Causes, Effects & Testing</div>
  <div class="n-h2">What Causes Reverse Power</div>
  <ul class="n-list">
  <li>Prime mover (diesel engine) fuel supply fails or trips.</li>
  <li>Engine governor malfunctions and closes the fuel rack - engine slows.</li>
  <li>Coupling failure between engine and generator.</li>
  <li>Generator coasts down - the busbar then drives it as a motor.</li>
  </ul>
  <div class="n-h2">Three Testing Methods</div>
  <table class="n-table">
  <tr><th>Method</th><th>How</th></tr>
  <tr><td class="hl">1. VCB in test position</td><td>Inject simulated reverse power signal (voltage + current at the required phase angle for reverse power) into the relay input. Verify relay operates at set percentage.</td></tr>
  <tr><td class="hl">2. During shore power transfer</td><td>When ship switches from generators to shore, a brief reverse power may flow - relay should operate - note the reading.</td></tr>
  <tr><td class="hl">3. Power relay test set</td><td>Specialised equipment applies correct voltage and current phasors at the required angle to simulate reverse power accurately.</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Reverse power = "generator turns into a motor." The phasor angle, not just magnitude, defines reverse power - that's why a true power relay test set is needed, not just a current source.</div></div>

  <div class="n-h1" id="s-mcc-detail">🎛️ Group Starter Panel - Unit Contents & Lamp Codes</div>
  <div class="n-h2">Contents Per Starter Unit</div>
  <ul class="n-list">
  <li>Incoming fuse or MCB (short-circuit protection).</li>
  <li>Main contactor (switching).</li>
  <li>Overload relay (thermal or electronic).</li>
  <li>Control circuit (start/stop push buttons or remote control).</li>
  <li>Indication lamps (run / stop / fault).</li>
  </ul>
  <div class="n-h2">Full IEC 60073 Indicator & Push-button Codes</div>
  <table class="n-table">
  <tr><th>Colour</th><th>Lamp Meaning</th><th>Push Button</th></tr>
  <tr><td class="ok">GREEN</td><td>Motor STOPPED (safe state)</td><td>START</td></tr>
  <tr><td class="bad">RED</td><td>Motor RUNNING (danger)</td><td>STOP / EMERGENCY STOP</td></tr>
  <tr><td class="hl">AMBER / YELLOW</td><td>FAULT or ALARM condition</td><td> - </td></tr>
  <tr><td>WHITE</td><td>Power available / supply healthy</td><td> - </td></tr>
  <tr><td>BLUE</td><td>Mandatory action required / remote-auto mode</td><td> - </td></tr>
  </table>
  <div class="n-h2">Advantages of Group Starter Panel</div>
  <ul class="n-list">
  <li>Centralised control - all starters in one location (ECR or panel room).</li>
  <li>Easier maintenance - all starters accessible in one place.</li>
  <li>Compact - less space than scattered individual starters.</li>
  <li>Common busbars - efficient power distribution.</li>
  <li>Remote start/stop from ECR - supports UMS (unmanned machinery space) operation.</li>
  </ul>

  <div class="n-h1" id="s-emerg-autostart">⏱️ Emergency Generator - Auto-Start Sequence (Step by Step)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS II-1 Reg 42 & 43.</strong> Cargo ship auto-start within <span class="n-val">45 s</span>; passenger ship within <span class="n-val">30 s</span>. Fuel for <span class="n-val">18 h</span> (cargo) / <span class="n-val">36 h</span> (passenger). EG located <strong>above the bulkhead deck, outside the main ER</strong>, not sharing a common boundary.</div></div>
  <ol class="n-steps">
  <li><strong>Trigger:</strong> Voltage monitoring relay on the ESB detects loss of main supply voltage.</li>
  <li>Signal sent to the emergency generator starting system - automatic start initiated.</li>
  <li>Starting motor (battery-powered) cranks the emergency engine.</li>
  <li>Engine fires and builds up to rated speed (<span class="n-val">5–15 seconds</span> typically).</li>
  <li>Voltage builds to rated, frequency stabilises - checks complete.</li>
  <li>Emergency ACB closes - EG supplies the emergency switchboard and essential loads.</li>
  </ol>
  <div class="n-h2">Starting System - Two Independent Means</div>
  <ul class="n-list">
  <li><strong>Means 1:</strong> Dedicated battery start - batteries NOT used for any other purpose.</li>
  <li><strong>Means 2:</strong> Hydraulic start, pneumatic start, or a second independent battery bank.</li>
  <li>Starting batteries kept charged by a trickle charger from main power, and also charged by the emergency generator when running.</li>
  </ul>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Transitional Source of Power:</strong> Batteries supply essential loads (steering gear, nav lights, GMDSS, internal comms, emergency lighting) for a minimum of <span class="n-val">30 minutes</span> while the EG starts. Switchover is <strong>automatic - no manual action required</strong>.</div></div>
  <div class="n-h2">Full List of Essential Services Supplied by EG</div>
  <ul class="n-list">
  <li>Navigation lights and shapes</li>
  <li>GMDSS radio equipment</li>
  <li>Fire detection and alarm system</li>
  <li>Emergency bilge pumping system</li>
  <li>Watertight door operation and indicators</li>
  <li>Emergency lighting (accommodation, escape routes, muster stations)</li>
  <li>Steering gear (transitional source if EG not yet running)</li>
  <li>One dedicated fire pump motor</li>
  <li>Sprinkler system</li>
  </ul>

  <div class="n-h1" id="s-fire-detector">🔥 Fire Detector — SC vs OC vs Fire Alarm</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: "How does fire panel differentiate SC from OC from actual fire?"</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Fire detection loop uses EOL (End Of Line) resistor — creates known normal circuit resistance/current.</strong></div></div>
  <ul class="n-list">
    <li><strong>NORMAL:</strong> Fixed current flows through EOL resistor → panel reads HEALTHY.</li>
    <li><strong>FIRE/ALARM:</strong> Detector activates → current changes (increase or decrease per detector design) → panel reads FIRE ALARM.</li>
    <li><strong>OPEN CIRCUIT fault:</strong> Wire break → no current flows → panel reads FAULT (OC) — distinct from fire alarm.</li>
    <li><strong>SHORT CIRCUIT fault:</strong> Wire-to-wire short → current bypasses EOL → different current level → panel reads SC FAULT.</li>
  </ul>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Result:</strong> Three distinct current levels → three distinct panel states: NORMAL / FIRE ALARM / FAULT.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Addressable systems:</strong> Each detector has unique address, sends digital ID → exact location identified immediately.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>SOLAS requirement:</strong> Fire detection system must give "fault" alarm distinct from "fire" alarm when circuit breaks.</div></div>

  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>ACB arc quenching</td>
      <td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td>
      <td>Arc driven into chutes → split by plates → shorter arcs → total arc voltage > <span class="n-val">440V</span> supply → extinguishes. Arc contacts open last.</td>
    </tr>
    <tr>
      <td>Reverse power relay</td>
      <td class="hl">⭐⭐⭐⭐⭐ Deswal, Kamath</td>
      <td>Trips ACB when generator absorbs power. Prevents motoring/engine damage. <span class="n-val">5-10%</span> rated kW, <span class="n-val">3-5 sec</span> delay.</td>
    </tr>
    <tr>
      <td>Emergency Gen SOLAS</td>
      <td class="hl">⭐⭐⭐⭐⭐ Sanjib, Nair</td>
      <td><span class="n-val">45 sec</span> cargo, <span class="n-val">30 sec</span> passenger. <span class="n-val">18 hr</span> fuel. Above bulkhead deck. Monthly test.</td>
    </tr>
    <tr>
      <td>Sequential Load Restore</td>
      <td class="hl">⭐⭐⭐⭐ Deswal</td>
      <td>Cooling → LO → fuel → boiler → air → HVAC. <span class="n-val">30s - 2m</span> delays. Prevents starting current overload.</td>
    </tr>
    <tr>
      <td>Shore connection</td>
      <td class="hl">⭐⭐⭐⭐ Kamath</td>
      <td>Isolation transformer MANDATORY to break galvanic earth path between solidly earthed shore and floating ship. Stops hull corrosion.</td>
    </tr>
    <tr>
      <td>GMDSS Battery</td>
      <td class="hl">⭐⭐⭐ Vishwanathan</td>
      <td><span class="n-val">1 hour</span> (with UPS) or <span class="n-val">6 hours</span> (no UPS). Dedicated battery. Annual load test. Replace at <span class="n-val">80%</span>.</td>
    </tr>
  </table>

  </div>
</div>
</div>
`);
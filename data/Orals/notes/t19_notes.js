window.loadNotes("T19", `<div class="view" id="view-notes-t19">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T19')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 19 - Tanker &amp; Special Topics</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-zones')">Hazardous Zone Classification</button>
    <button class="anc-btn" onclick="jumpTo('s-exprotection')">Ex Protection Types</button>
    <button class="anc-btn" onclick="jumpTo('s-atex-label')">ATEX Label Reading</button>
    <button class="anc-btn" onclick="jumpTo('s-ex-inspection')">Ex Equipment Inspection</button>
    <button class="anc-btn" onclick="jumpTo('s-deck')">Tanker Deck Electrical System</button>
    <button class="anc-btn" onclick="jumpTo('s-igsystem')">IG System Trips &amp; Values</button>
    <button class="anc-btn" onclick="jumpTo('s-cargo-heating')">Cargo Heating System</button>
    <button class="anc-btn" onclick="jumpTo('s-bowthruster')">Bow Thruster</button>
    <button class="anc-btn" onclick="jumpTo('s-static')">Static Electricity</button>
    <button class="anc-btn" onclick="jumpTo('s-pumproom')">Pump Room Safety</button>
    <button class="anc-btn" onclick="jumpTo('s-gasdetect')">Gas Detection Systems</button>
    <button class="anc-btn" onclick="jumpTo('s-misc')">Auto-Tension, Hose IR, Anti-Heeling</button>
    <button class="anc-btn" onclick="jumpTo('s-framo')">Framo &amp; Cargo Pumps</button>
    <button class="anc-btn" onclick="jumpTo('s-updates')">Tanker Ops &amp; 2026 Additions</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most Asked Topics:</strong> Ex d / Ex e / Ex i protection - zones and specific use cases. ATEX label reading (Ex II 2G IIB T4 Gb). IG system trip values (exact numbers). Bow thruster interlocks and CPP pitch rule. Static electricity prevention and relaxation time. Pump room light gasket inspection. IS limits (&lt;30 V, &lt;50 mA). Exia vs Exib fault counts. LPG compressor room safety (2026 trend).</div></div>


  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-zones">1. Hazardous Area Zone Classification (IEC 60079-10-1)</div>

  <p class="n-p">On oil, chemical, and gas tankers, hazardous spaces are strictly categorised based on the <strong>frequency and duration</strong> of an explosive gas atmosphere. The zone system is used internationally under IEC 60079-10-1; ATEX Directive uses the same zone numbers.</p>

  <div class="n-grid" style="grid-template-columns:1fr 1fr 1fr; gap:12px; margin:12px 0;">
    <div class="n-card" style="border-color:var(--red);">
      <div class="card-title" style="color:var(--red);">Zone 0</div>
      <div class="card-desc"><strong>Continuously present</strong> explosive gas atmosphere - present continuously, for long periods, or frequently.<br><br><strong>Examples:</strong> Inside cargo tanks, slop tanks, vapour recovery piping.<br><br><strong>Equipment:</strong> Only <span class="n-val">Ex ia</span> (intrinsically safe, Category 1G) permitted. Milliwatt energy levels.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange);">
      <div class="card-title" style="color:var(--orange);">Zone 1</div>
      <div class="card-desc"><strong>Occasionally present</strong> in normal operation - likely during routine operations.<br><br><strong>Examples:</strong> Open deck within 3 m of cargo vents/manifolds, cargo pump room, cable transit trunks on deck.<br><br><strong>Equipment:</strong> <span class="n-val">Ex d</span> (flameproof), <span class="n-val">Ex e</span> (increased safety), <span class="n-val">Ex ib</span> (Category 2G) permitted.</div>
    </div>
    <div class="n-card" style="border-color:var(--green);">
      <div class="card-title" style="color:var(--green);">Zone 2</div>
      <div class="card-desc"><strong>Unlikely to occur</strong> in normal operation and if it does, only for a short time.<br><br><strong>Examples:</strong> Areas adjacent to Zone 1 rings, enclosed deck lockers, spaces beyond the 3 m ring.<br><br><strong>Equipment:</strong> <span class="n-val">Ex n</span> (non-sparking), all Zone 0/1 types also acceptable.</div>
    </div>
  </div>

  <div class="n-h2">NEC Division System (North American equivalent)</div>
  <table class="n-table">
    <tr><th>NEC Division</th><th>IEC Zone Equivalent</th><th>Description</th></tr>
    <tr><td><strong>Division 1</strong></td><td class="hl">Zone 0 + Zone 1</td><td>Ignitable concentrations present under normal conditions</td></tr>
    <tr><td><strong>Division 2</strong></td><td class="hl">Zone 2</td><td>Ignitable concentrations present only under abnormal conditions</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Zone Frequency:</strong> Zone 0 = <strong>Always</strong> (inside the tank). Zone 1 = <strong>Sometimes</strong> (normal ops on deck). Zone 2 = <strong>Rarely</strong> (fringe/adjacent). Higher zone number = lower risk = less stringent equipment requirement.</div></div>


  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-exprotection">2. Explosion-Protected (Ex) Equipment - All Types</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyor Favourite (Sanjib, Deswal, Kamath):</strong> "Explain Ex d, Ex e, and Ex i. Where is each used on a tanker? What is the heart of Ex d protection?"</div></div>

  <table class="n-table">
    <tr><th>Ex Type</th><th>Full Name</th><th>Protection Principle</th><th>Zones</th><th>Used For</th></tr>
    <tr>
      <td><strong>Ex d</strong></td><td>Flameproof</td>
      <td>Enclosure <strong>withstands internal explosion</strong> without igniting outside atmosphere. Flame extinguished in the long, narrow flame-path gap before it exits. Heart = <span class="n-val">flame-path gasket</span>.</td>
      <td class="hl">Zone 1</td>
      <td>Motors, junction boxes, light fittings, switch-gear in pump room and on deck.</td>
    </tr>
    <tr>
      <td><strong>Ex e</strong></td><td>Increased Safety</td>
      <td>No arcing or sparking parts in normal operation. Tighter seals, wider creepage distances, better quality insulation - <strong>prevents fault conditions</strong> that could create ignition.</td>
      <td class="hl">Zone 1 &amp; 2</td>
      <td>Terminal boxes, lighting in accommodations-adjacent areas, junction boxes, fluorescent fittings.</td>
    </tr>
    <tr>
      <td><strong>Ex i</strong></td><td>Intrinsically Safe</td>
      <td>Circuit energy limited so that neither a spark nor heat generated can ignite the atmosphere. Achieved via <strong>Zener barriers</strong> or galvanic isolators in the safe area. <span class="n-val"><strong>NEVER Megger Ex i circuits.</strong></span> Limits: <span class="n-val">&lt;30 V</span>, <span class="n-val">&lt;50 mA</span> (or 30 mA in some specifications).</td>
      <td class="hl">Zone 0 &amp; 1</td>
      <td>Sensors, transmitters, gas detectors, UTI tapes, pressure transmitters - all instruments inside or near tanks.</td>
    </tr>
    <tr>
      <td><strong>Ex p</strong></td><td>Pressurised / Purged</td>
      <td>Enclosure kept at <strong>positive pressure</strong> with clean air or inert gas so that flammable atmosphere cannot enter. Purge cycle must complete before energisation is permitted.</td>
      <td class="hl">Zone 1 &amp; 2</td>
      <td>Large control panels, analysers, instrumentation cabinets placed in hazardous areas.</td>
    </tr>
    <tr>
      <td><strong>Ex n</strong></td><td>Non-Sparking</td>
      <td>Designed so that no arcs, sparks, or hot surfaces capable of causing ignition are produced in normal operation. Simpler construction than Ex d.</td>
      <td class="hl">Zone 2 only</td>
      <td>Light fittings, junction boxes in Zone 2 peripheral areas.</td>
    </tr>
  </table>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t19-zener-barrier.png" alt="Zener barrier intrinsic safety — series resistor, back-to-back Zener diodes, IS earth connection, hazardous area field instrument">
    <div class="note-diagram-cap">Fig. Zener Barrier (Ex i) — series resistor limits fault current; back-to-back Zener diodes clamp voltage; IS earth (&lt;1 Ω) essential; safe area to hazardous area field instrument</div>
  </div>

  <div class="n-h2">Intrinsic Safety - Exia vs Exib Fault Counts</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">
    <strong>Exia (Category 1G - Zone 0):</strong> Safe with <strong>two independent faults</strong> simultaneously. Provides the highest level of protection. Two separate Zener barriers or a certified galvanic isolator required in the safe area.<br><br>
    <strong>Exib (Category 2G - Zone 1):</strong> Safe with <strong>one fault</strong>. Single Zener barrier sufficient. Used for sensors and transmitters mounted on deck (Zone 1) rather than inside tanks (Zone 0).<br><br>
    <strong>Key values to quote:</strong> Ex i circuits must operate at <span class="n-val">&lt;30 V</span> and <span class="n-val">&lt;50 mA</span>. Never apply Megger (500V test) to an Ex i circuit - it will destroy the Zener barrier and potentially the sensor.
  </div></div>

  <!-- ═══ SECTION 3 ═══ -->
  <div class="n-h1" id="s-atex-label">3. ATEX Certification Label Reading</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Classic Oral Trap (Kamath, Vishwanathan):</strong> "Here is a label - Ex II 2G IIB T4 Gb - read it to me and explain every part." This is asked verbally and candidates must decode each element without hesitation.</div></div>

  <div class="n-h2">Example Label: <span style="font-family:monospace; background:var(--blue-border); padding:2px 8px; border-radius:4px;">⬡ Ex II 2G IIB T4 Gb</span></div>

  <table class="n-table">
    <tr><th>Label Element</th><th>Meaning</th><th>Options &amp; Values</th></tr>
    <tr>
      <td><strong>⬡ (hexagon)</strong></td>
      <td>ATEX European Certification Mark</td>
      <td>Confirms equipment certified under ATEX Directive 2014/34/EU</td>
    </tr>
    <tr>
      <td><strong>Ex</strong></td>
      <td>Explosion-protected equipment</td>
      <td>Always present; signals the equipment meets IEC 60079 standards</td>
    </tr>
    <tr>
      <td><strong>II</strong></td>
      <td class="hl">Equipment Group</td>
      <td><strong>Group I</strong> = mining (firedamp/methane). <strong>Group II</strong> = surface industries including ships/tankers. All tanker equipment is Group II.</td>
    </tr>
    <tr>
      <td><strong>2G</strong></td>
      <td class="hl">Equipment Category &amp; Atmosphere</td>
      <td>Category 1 = Zone 0 (very high protection). <strong>Category 2 = Zone 1 (high protection).</strong> Category 3 = Zone 2 (normal protection). "G" = Gas atmosphere. "D" = Dust atmosphere. <em>So "2G" = Zone 1, gas hazard.</em></td>
    </tr>
    <tr>
      <td><strong>IIB</strong></td>
      <td class="hl">Gas Group (Explosion Subgroup)</td>
      <td><strong>IIA</strong> = propane-like gases (weakest, safest gap). <strong>IIB</strong> = ethylene-like gases (medium). <strong>IIC</strong> = hydrogen/acetylene (most energetic, smallest safe gap). Equipment marked IIB can also be used where IIA is the hazard. IIC equipment is safe for all.</td>
    </tr>
    <tr>
      <td><strong>T4</strong></td>
      <td class="hl">Temperature Class (max surface temp)</td>
      <td>T1 = 450°C · T2 = 300°C · T3 = 200°C · <strong>T4 = 135°C</strong> · T5 = 100°C · T6 = 85°C. Must be below the auto-ignition temperature of the hazardous gas present. Cargo vapours typically require T3 or T4.</td>
    </tr>
    <tr>
      <td><strong>Gb</strong></td>
      <td class="hl">Equipment Protection Level (EPL)</td>
      <td>Ga = Zone 0 (very high). <strong>Gb = Zone 1 (high).</strong> Gc = Zone 2 (enhanced). EPL was introduced by IEC 60079-0:2011 to align with ATEX categories.</td>
    </tr>
  </table>

  <div class="n-h2">Worked Reading Exercise</div>
  <div class="n-ok"><div class="icon">💡</div><div class="body">
    <strong>"Ex II 2G Ex d IIB T4 Gb"</strong> - full reading:<br>
    "This equipment is ATEX-certified, Group II (surface industries / ships), Category 2G (suitable for Zone 1 gas atmospheres), protection type flameproof enclosure (Ex d), Gas Group IIB (suitable for ethylene-type gases and weaker), Temperature Class T4 (max surface temperature 135°C), Equipment Protection Level Gb (Zone 1). This fitting can be used in the cargo pump room or on the tanker main deck."<br><br>
    <strong>"Ex II 1G Ex ia IIC T6 Ga"</strong> - full reading:<br>
    "Category 1G = Zone 0 capable, intrinsically safe, Gas Group IIC (hydrogen-safe, also covers all weaker gases), T6 max surface 85°C, Ga = highest EPL. Suitable for sensors directly inside cargo tanks."
  </div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Gas Group Hierarchy:</strong> IIC equipment can substitute for IIB or IIA applications (more stringent design covers all lower groups). IIA equipment <strong>cannot</strong> be used where IIB or IIC is required. Always use equipment rated for equal or higher gas group than the actual hazard.</div></div>


  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-ex-inspection">4. Ex Equipment Inspection (IEC 60079-17)</div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>IEC 60079-17</strong> is the standard for inspection and maintenance of Ex electrical installations. The ETO is responsible for implementing and documenting this inspection programme onboard.</div></div>

  <div class="n-h2">Three Grades of Inspection</div>
  <table class="n-table">
    <tr><th>Grade</th><th>Frequency</th><th>What is Checked</th><th>Who</th></tr>
    <tr>
      <td><strong>Visual</strong></td>
      <td class="hl">Monthly (or at each port)</td>
      <td>Obvious defects without opening: missing bolts, cracks in enclosure, damaged conduit, ingress of water or dirt, damaged Ex label, paint filling flame path.</td>
      <td>ETO or competent officer</td>
    </tr>
    <tr>
      <td><strong>Close</strong></td>
      <td class="hl">Quarterly / Annual</td>
      <td>Visual inspection PLUS: open enclosure to check gasket condition, confirm correct screws and thread engagement, check cable gland tightness, verify earth continuity, check for corrosion inside, confirm correct lamp type and wattage in Ex fittings.</td>
      <td>ETO with proper tools</td>
    </tr>
    <tr>
      <td><strong>Detailed</strong></td>
      <td class="hl">Every 3 years or at class survey</td>
      <td>Close inspection PLUS: measure flame-path gap with feeler gauge (must meet drawing dimensions), insulation resistance test of external non-Ex cables, check intrinsic safety barriers for correct type/rating, verify all earthing connections.</td>
      <td>Competent person (certified)</td>
    </tr>
  </table>

  <div class="n-h2">What to Check on an Ex d (Flameproof) Fitting - Exam Answer</div>
  <ol class="n-steps">
    <li><strong>Flame-path gasket:</strong> Must not be cracked, squashed, missing, or replaced with incorrect material. The gasket is the heart of Ex d - if degraded, the fitting is NO LONGER explosion-protected regardless of other condition.</li>
    <li><strong>All fixing bolts present and correct:</strong> All special bolts (often stainless) must be present and torqued. Standard bolts are NOT acceptable substitutes.</li>
    <li><strong>Flame-path surfaces not painted:</strong> Paint in the flame-path gap alters the gap dimension and must be removed.</li>
    <li><strong>Enclosure integrity:</strong> No cracks, corrosion holes, or physical damage to the body that could transmit an internal explosion externally.</li>
    <li><strong>Cable gland integrity:</strong> Ex-certified glands only; correct type for cable outer diameter; inner seal around cable jacket must be tight.</li>
    <li><strong>Correct lamp or component:</strong> For Ex fittings with lamps - correct wattage (overloaded lamp increases surface temperature; could exceed T-class).</li>
  </ol>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Exd Likely Defects List:</strong> Flame-path tightness lost by vibration · Casing corrosion or cracks allowing flame escape · Sealing cement aging and shrinking away from body · Wrong or missing screws (standard hex replacing special anti-tamper) · Deteriorated conduit entries and cable box seals. Any ONE of these defects means the equipment must be de-energised and repaired before use.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>ETO Record-Keeping under IEC 60079-17:</strong> Maintain an Ex Equipment Register listing every Ex-certified item onboard with its certificate number, type, zone location, and inspection dates. Each inspection entry must record: grade performed, findings, remedial action taken, and signature. Class surveyors check this register during electrical surveys.</div></div>


  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s-deck">5. Tanker Deck Electrical System</div>

  <ul class="n-list">
    <li><strong>Electrical Specification:</strong> LV system usually <span class="n-val">440 V</span> IT (insulated neutral). HV (6.6 kV) used on VLCCs for large cargo pump motors. Minimum IR acceptable in hazardous areas is <span class="n-val">5 MΩ</span> (vs 1 MΩ on normal ships).</li>
    <li><strong>Cable System:</strong> Armoured steel wire (SWA) cable only in hazardous areas. No flexible conduit on deck. Steel rigid conduit used for cable runs to hazardous-area fittings.</li>
    <li><strong>Deck Zones Summary:</strong> Zone 0 (inside tanks) → Zone 1 (within 3 m of cargo openings/vents, pump rooms) → Zone 2 (3–5 m from Zone 1 boundary).</li>
    <li><strong>Deck Lighting:</strong> Must be Ex e or Ex d floodlights rated for the zone. Surface temperature class must be below auto-ignition temperature of the carried cargo.</li>
    <li><strong>Bonding Cable:</strong> Ship-to-shore bonding cable MUST be connected before any cargo hose is connected - equalises static potential and prevents spark on first metallic contact.</li>
  </ul>

  <div class="n-h2">Accommodation Pressurisation &amp; Air Locks</div>
  <p class="n-p">HVAC maintains a continuous <strong>positive pressure of <span class="n-val">50 Pa (0.5 mbar)</span></strong> inside the accommodation relative to the outside atmosphere, preventing heavy hydrocarbon vapours from drifting in from the cargo deck.</p>
  <ul class="n-list">
    <li><strong>Mechanical Interlock:</strong> Double-door air locks electronically and mechanically interlocked - both doors can never be open simultaneously. Opening one door locks the second.</li>
    <li><strong>60-Second Countdown:</strong> If an air lock door is held open for longer than <span class="n-val">60 seconds</span>, audible/visual alarm triggers on bridge and ECR. Beyond critical timeout, main accommodation HVAC intake fans trip automatically and fire dampers slam shut to isolate the superstructure.</li>
  </ul>


  <!-- ═══ SECTION 6 ═══ -->
  <div class="n-h1" id="s-igsystem">6. Inert Gas (IG) System - Safeties, Trips &amp; Complete Pressure Cascade</div>

  <div class="n-p">The IG system displaces flammable vapour with inert gas (target O₂ &lt; 5% by volume) to maintain cargo tank atmosphere below the flammable limit (8% O₂), preventing explosion during loading, discharging, and crude washing.</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All Surveyors Ask:</strong> IG trip values - know every number below. The full pressure cascade (700 → 200 → 100 → 1400 → 1600 → 2500 mmWG) is asked as a single connected question by Kamath, Vishwanathan, and Gokhale.</div></div>

  <div class="n-h2">IG System Trip Conditions</div>
  <table class="n-table">
    <tr><th>Trip Condition</th><th>Value</th><th>Action</th></tr>
    <tr><td><strong>High O₂ Content</strong></td><td class="bad"><span class="n-val">&gt; 8% by volume</span></td><td class="bad">System Shutdown - gas is no longer safe to deliver to tanks</td></tr>
    <tr><td><strong>High IG Supply Pressure</strong></td><td class="hl"><span class="n-val">&gt; 1500–1600 mmWG</span></td><td>System Shutdown - recirculation valve opens first; if pressure still rises, shutdown</td></tr>
    <tr><td><strong>Low IG Supply Pressure (Low-Low)</strong></td><td class="hl"><span class="n-val">&lt; 100 mmWG</span></td><td>System Shutdown - prevents air ingress that would form explosive atmosphere. All cargo ops stop.</td></tr>
    <tr><td><strong>High IG Temperature</strong></td><td class="bad"><span class="n-val">&gt; 65°C</span></td><td class="bad">System Shutdown - indicates scrubber cooling failure</td></tr>
    <tr><td><strong>Deck Seal Low Water Level</strong></td><td class="hl">Low level switch</td><td>System Shutdown - prevents vapour backflow from tanks to boiler flue gas system</td></tr>
    <tr><td><strong>Scrubber SW (Seawater) Failure</strong></td><td class="hl">Flow/pressure switch</td><td>System Shutdown - scrubber cannot cool/clean flue gas</td></tr>
    <tr><td><strong>Blower Motor Trip</strong></td><td class="hl">Motor overload or fault</td><td>System Shutdown - no IG supply possible</td></tr>
  </table>

  <div class="n-h2">Complete IG Pressure Cascade (Exam Answer for "Give Me All Values")</div>
  <table class="n-table">
    <tr><th>Stage</th><th>Pressure (mmWG)</th><th>Action / Significance</th></tr>
    <tr><td><strong>Normal Operating Pressure</strong></td><td class="ok"><span class="n-val">700 – 800</span></td><td class="ok">Positive pressure maintained in cargo tanks at sea. Keeps tanks inerted, prevents air ingress.</td></tr>
    <tr><td><strong>Low Pressure Alarm</strong></td><td class="hl"><span class="n-val">~200</span></td><td>IG deck main pressure drops - alarm in ECR and CCR. Investigate blower output, deck isolating valve, leaks.</td></tr>
    <tr><td><strong>Low-Low Pressure Trip / Cargo Pump Stop</strong></td><td class="bad"><span class="n-val">&lt; 100</span></td><td class="bad">IG supply failed. System shuts down blower. Cargo pumps trip. Prevents atmospheric air ingress.</td></tr>
    <tr><td><strong>IG Recirculation Valve Opens</strong></td><td class="hl"><span class="n-val">1200 – 1300</span></td><td>Deck pressure rising. Recirculation valve diverts excess IG back to scrubber inlet before PV valve lifts.</td></tr>
    <tr><td><strong>PV Valve Lifts (per tank mast riser)</strong></td><td class="hl"><span class="n-val">+1400 / −250</span></td><td>Pressure side: vents excess vapour to atmosphere. Vacuum side: admits atmosphere to prevent tank structural collapse during discharge.</td></tr>
    <tr><td><strong>PV Breaker (Deck Hydraulic Breaker)</strong></td><td class="bad"><span class="n-val">+1600–1800 / −400</span></td><td class="bad">Last line of defence on IG main line. Breaks hydraulic seal if multiple tank PV valves fail simultaneously.</td></tr>
    <tr><td><strong>Tank Structural Test Pressure</strong></td><td class="bad"><span class="n-val">+2500 / −750</span></td><td class="bad">Newbuild/repair survey proof test only. NEVER reached in service.</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Sequence:</strong> <span class="n-val">700</span> (normal) → <span class="n-val">200</span> (alarm) → <span class="n-val">100</span> (trip/stop pumps) → <span class="n-val">1200–1300</span> (recirculate) → <span class="n-val">1400</span> (PV valve lifts) → <span class="n-val">1600–1800</span> (PV breaker lifts) → <span class="n-val">2500</span> (structural test - never in service). <br>Think of it as: <strong>Normal · Warn · Stop · Recirculate · Vent · Break · Test</strong>.</div></div>

  <div class="n-h2">Inert Gas O₂ Measurement - Target and Analysers</div>
  <p class="n-p">The statutory limit for IG delivered to cargo tanks is <span class="n-val">&lt; 5% O₂ by volume</span>. This is monitored continuously. Two main sensor types:</p>
  <ul class="n-list">
    <li><strong>Zirconia Sensor (Paramagnetic principle):</strong> Heated to <span class="n-val">600–700°C</span>, the ZrO₂ element becomes an O₂ ion conductor. Concentration mismatch between reference air and sample generates voltage via the Nernst equation. Precise, drift-free, fast response. Used on fixed IG panel analysers.</li>
    <li><strong>Electrochemical Fuel Cell (Portable):</strong> Gold cathode, consumable lead anode, KOH gel electrolyte. O₂ diffuses through Teflon membrane → reduction reaction generates microamp current proportional to O₂ partial pressure. Finite lifespan: <span class="n-val">1–2 years</span>; cell replaced when lead anode fully converted to PbO.</li>
  </ul>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Gas-Free Certificate:</strong> Before any hot work (welding, cutting, grinding) in a tank or adjacent space, a Gas-Free Certificate must be issued by a competent person (usually Chief Officer or designated officer). Prerequisites: O₂ = 20.9% (atmospheric), LEL = 0% (hydrocarbon-free), H₂S &lt; 1 ppm. The space must be declared gas-free and the certificate must be renewed if the space is re-entered after a break or if conditions change. Hot work permit is then issued separately by the Master.</div></div>


  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s-cargo-heating">7. Cargo Heating System</div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why cargo heating?</strong> Viscous cargoes (crude oil, heavy fuel oil, palm oil, molasses, bitumen) must be maintained above their pour point to remain pumpable. Steam coils or electric trace heating achieve this. On chemical tankers, precise temperature control prevents polymerisation or degradation.</div></div>

  <div class="n-h2">Steam Heating Coils (Most Common on Tankers)</div>
  <ul class="n-list">
    <li><strong>Construction:</strong> Serpentine mild steel or stainless steel coils fitted at the bottom of the cargo tank. Steam at typically 6–7 bar passes through the coils; condensate returns to the hotwell.</li>
    <li><strong>Control:</strong> Temperature sensor (Pt100 RTD or thermocouple) measures cargo temperature. Temperature controller modulates a steam control valve to regulate flow. High-temperature alarm and trip protect cargo quality and tank structure.</li>
    <li><strong>Temperature Uniformity:</strong> Uniformity is achieved by even coil distribution across the tank floor and ensuring condensate drains freely (no steam-locking). Multiple coil sections with individual control valves improve uniformity in large tanks.</li>
    <li><strong>ETO Scope:</strong> Temperature sensor calibration, signal wiring, 4–20 mA transmitter function, control valve actuator, thermostat and alarm setpoints, recording temperature on the Cargo Temperature Log.</li>
    <li><strong>Condensate Contamination Test:</strong> If cargo contamination of the condensate is suspected, a conductivity/salinity test is done on the condensate return. Hydrocarbon contamination causes a slick or discolouration in the hotwell.</li>
  </ul>

  <div class="n-h2">Electric Cargo Heating (Chemical/Product Tankers)</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr; gap:12px; margin:12px 0;">
    <div class="n-card" style="border-color:var(--orange);">
      <div class="card-title">Electric Trace Heating</div>
      <div class="card-desc">Self-regulating mineral-insulated heating cable laid along cargo pipe runs and fittings. Resistance increases with temperature, self-limiting power draw. Prevents pipe freeze-up / wax deposition in lines. ETO checks: IR test of cable (min 1 MΩ to earth), thermostat setpoint, current draw vs rated.</div>
    </div>
    <div class="n-card" style="border-color:var(--blue);">
      <div class="card-title">Immersion Heaters (Electric)</div>
      <div class="card-desc">Sheathed element heaters mounted through tank bulkheads. Temperature controlled by thermostat and PLC. Must be Ex d rated for Zone 1. Safety: Over-temperature cutout (independent bimetal thermostat) prevents element burnout if cargo level drops below heater. ETO logs current draw, thermostat setpoints, alarm tests.</div>
    </div>
  </div>

  <div class="n-h2">ETO Responsibilities for Cargo Heating</div>
  <ol class="n-steps">
    <li>Record cargo temperature log every watch (temperature sensor reading vs setpoint).</li>
    <li>Test high-temperature alarm and thermostat trip setpoints at each port.</li>
    <li>Calibrate Pt100/thermocouple sensors against reference thermometer annually.</li>
    <li>For electric systems: IR test heating cables (min <span class="n-val">1 MΩ</span>). Check element resistance (open circuit = failed element). Verify thermostat operation.</li>
    <li>For steam systems: verify correct condensate drain. Check steam trap function. Log steam consumption anomalies (possible coil leak).</li>
  </ol>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Electric Heating Safety:</strong> All electric heating elements inside cargo tanks or in tank spaces are Ex-rated. Minimum class Ex d or Ex e. Never energise heating elements when cargo level is below the element - thermal runaway, element burnout, and potential fire/explosion risk.</div></div>


  <!-- ═══ SECTION 8 ═══ -->
  <div class="n-h1" id="s-bowthruster">8. Bow Thruster - Interlocks &amp; Troubleshooting</div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>CPP Pitch Rule:</strong> Pitch MUST be zero to start, but must NEVER be held exactly at zero during operation. Operating at exactly zero pitch causes asymmetric blade loading, severe vibration, and cavitation. Move pitch immediately after the motor reaches rated speed.</div></div>

  <div class="n-h2">Starting Interlocks (All Must Be Satisfied)</div>
  <ol class="n-steps">
    <li><strong>Tunnel Flooded:</strong> Pressure switch confirms water present. Prevents catastrophic dry running of the propeller and tunnel.</li>
    <li><strong>Ventilation Fan Running:</strong> Motor compartment ventilation fan must be confirmed running to cool the motor during operation. Fan stopped = interlock prevents start.</li>
    <li><strong>Ship Speed Below Limit:</strong> Usually <span class="n-val">5–8 knots</span>. At higher speeds, hydrodynamic forces on the tunnel create severe mechanical stress. Speed derived from log or GPS feed to the PMS.</li>
    <li><strong>Generator Capacity Confirmed:</strong> PMS confirms sufficient available power - typically requires 2 generators paralleled. A large bow thruster motor (often 1–3 MW) can overload a single generator.</li>
    <li><strong>Pitch at Zero:</strong> CPP blade pitch confirmed at zero setpoint before start. Allows the SCIM motor to start on-load with no mechanical torque until rated speed is reached.</li>
  </ol>

  <div class="n-h2">Troubleshooting: "No Thrust - Joystick Commanded But Ship Not Moving"</div>
  <ol class="n-steps">
    <li>Check main switchboard - is the main breaker tripped? Check ACB status.</li>
    <li>Check E-stop buttons (local, bridge, ECR) - any latched in?</li>
    <li>Check all interlocks: tunnel flood pressure switch tripped? Ventilation fan alarm? Speed limit exceeded?</li>
    <li>Check pitch servo feedback - if pitch potentiometer feedback shows zero despite pitch command, thrust is zero even with motor running at rated speed. Recalibrate zero-pitch dead-band on control card.</li>
    <li>Check control circuit fuses on local panel and bridge panel.</li>
    <li>Switch from bridge control to local manual override at the thruster motor room and test.</li>
  </ol>

  <div class="n-h2">Variable Reluctance Speed Pickup - Theory</div>
  <p class="n-p">The bow thruster automation tracks shaft RPM using a <strong>variable reluctance magnetic pickup sensor</strong> mounted perpendicular to a phonic toothed steel wheel keyed to the thruster shaft. Passing gear teeth distort the sensor's permanent magnetic flux, inducing an AC voltage pulse string. Speed is computed from pulse frequency:</p>
  <div class="n-formula">f (Hz) = (RPM × Number of Teeth) / 60<div class="label">Shaft pulse frequency - variable reluctance magnetic pickup sensor</div></div>

  <div class="n-h2">Tunnel Anode Protection</div>
  <ul class="n-list">
    <li>Bow thruster tunnel (bronze or stainless steel) is fitted with <strong>sacrificial zinc anodes</strong> to protect against galvanic corrosion where dissimilar metals (propeller hub, tunnel liner) are in contact with seawater.</li>
    <li>ETO checks anode condition at dry dock or when accessible. Depleted anodes (&lt;50% remaining) should be replaced. Records kept in PMS.</li>
    <li>The tunnel is electrically bonded to the ship's hull to ensure equipotential bonding and prevent stray current corrosion.</li>
  </ul>


  <!-- ═══ SECTION 9 ═══ -->
  <div class="n-h1" id="s-static">9. Static Electricity - Risks &amp; Prevention</div>

  <p class="n-p">Static electricity is generated by <strong>friction/charge separation</strong> when non-conductive liquid hydrocarbons flow through pipes, are filtered, or are sprayed. Refined products (low electrical conductivity - marine gas oil, jet fuel, ULSD) accumulate charge easily because they cannot dissipate it back to the pipe walls.</p>

  <div class="n-h2">Prevention Measures</div>
  <ul class="n-list">
    <li><strong>Bonding Cable First:</strong> Ship-to-shore bonding cable connected <strong>BEFORE</strong> cargo hoses. Equalises potential between ship and shore facility before any metallic contact through hoses.</li>
    <li><strong>Low Initial Flow Rate:</strong> Maximum <span class="n-val">1 m/s</span> until bottom inlet submerged by <span class="n-val">1 metre</span> of liquid. Prevents electrostatic mist/spray generation above the liquid surface.</li>
    <li><strong>Relaxation Time:</strong> Wait minimum <span class="n-val">30 minutes</span> after loading stops before dipping, ullaging, or sampling. Allows accumulated surface charge to decay through the cargo to the hull earthing.</li>
    <li><strong>Use Ex i Instruments Only:</strong> Intrinsically safe UTI tapes, portable gas detectors, and sampling equipment - certified for use in Zone 0/1.</li>
    <li><strong>No Free Fall of Cargo:</strong> Bottom loading only (submerged inlet) prevents the mechanical agitation and spray that generates charge at the liquid surface.</li>
  </ul>

  <div class="n-h2">Streaming Currents - Physics</div>
  <p class="n-p">When non-conductive hydrocarbons are pumped at high velocities through pipeline manifolds, charge separation occurs at the fluid-pipe interface. The moving cargo carries away ions of one polarity - this is a <strong>streaming current</strong>. Charge accumulates in the receiving cargo tank.</p>
  <p class="n-p">Because refined cargo acts as an electrical insulator, accumulated surface charge <strong>cannot easily bleed to the hull earth plate</strong>. The charge decays exponentially over time based on the fluid's dielectric relaxation constant (τ = ε/σ).</p>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>30-Minute Rule:</strong> Introducing any metallic conductor - steel ullage tape, UTI probe, sampling can - directly into a charged cargo tank within 30 minutes of loading stopping creates a spark gap. If the tank atmosphere is not fully inerted, this can cause detonation. This rule is absolute and non-negotiable.</div></div>


  <!-- ═══ SECTION 10 ═══ -->
  <div class="n-h1" id="s-pumproom">10. Pump Room Safety &amp; Light Inspection</div>

  <div class="n-h2">Pump Room Entry Procedure</div>
  <ol class="n-steps">
    <li>Run forced ventilation for minimum <span class="n-val">15–30 minutes</span> before entry. Confirm ventilation fan is running before opening access.</li>
    <li>Gas test at multiple levels (H₂S is heavier than air - test low; vapours at mid-height): O₂ &gt; 19.5%, LEL &lt; 1%, H₂S &lt; 1 ppm.</li>
    <li>Obtain Enclosed Space Entry Permit signed by Chief Officer and Master.</li>
    <li>Standby person stationed at top of access ladder with BA set and communications.</li>
    <li>LOTO (Lock Out / Tag Out) all pumps to be worked on - isolate at MSB, apply lock, tag, and test that the pump cannot be energised.</li>
    <li>Enter with calibrated personal gas detector. Limit stay time per entry permit.</li>
  </ol>

  <div class="n-h2">Pump Room Light Inspection - Exam Favourite</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>The pump room is Zone 1. All luminaires are Ex d (flameproof) or Ex e (increased safety). The critical maintenance task is the gasket.</strong></div></div>
  <ol class="n-steps">
    <li>Gas test the immediate area before starting work.</li>
    <li>Isolate the circuit feeding the fitting at the MSB. Apply LOTO. Verify dead with voltage tester.</li>
    <li>Open the Ex enclosure carefully - do not force the gasket groove.</li>
    <li><strong>Inspect the Ex gasket:</strong> The gasket maintains the Ex d flame-path seal. If it is <strong>cracked, missing, squashed, or incorrect type</strong>, the fitting is NO LONGER EXPLOSION PROTECTED. Do not re-energise until replaced with an identical manufacturer-specified spare.</li>
    <li>Check lamp type and wattage matches the fitting certificate (overloaded lamp = higher surface temperature = possible T-class violation).</li>
    <li>Inspect all fixing screws - all must be present, correct type, and properly torqued.</li>
    <li>Re-close, verify enclosure sealed. Document inspection in Ex Equipment Register.</li>
  </ol>

  <div class="n-h2">Pump Room Electrical Safety Summary</div>
  <ul class="n-list">
    <li><strong>Lighting:</strong> All Ex d or Ex e rated. Steel conduit wiring. No clip-on or flexible conduit.</li>
    <li><strong>Portable Equipment:</strong> Only Ex-certified portable lights and tools. No standard domestic equipment.</li>
    <li><strong>IR Requirement:</strong> Minimum <span class="n-val">5 MΩ</span> insulation resistance for pump room electrical equipment (vs 1 MΩ general ship standard).</li>
    <li><strong>Gas Detectors:</strong> Fixed heads in pump room lower zones. Alarm at 20% LEL; trip non-essential equipment at 40% LEL.</li>
  </ul>


  <!-- ═══ SECTION 11 ═══ -->
  <div class="n-h1" id="s-gasdetect">11. Gas Detection Systems</div>

  <div class="n-h2">Detector Types - Comparison</div>
  <table class="n-table">
    <tr><th>Type</th><th>Principle</th><th>Detects</th><th>Used For</th><th>Limitations</th></tr>
    <tr>
      <td><strong>Catalytic Bead (Pellistor)</strong></td>
      <td>Combustion on platinum catalyst bead raises temperature → Wheatstone bridge imbalance</td>
      <td class="hl">Flammable gases (LEL-based)</td>
      <td>Pump rooms, compressor rooms, enclosed hazardous spaces</td>
      <td class="bad">Poisoned by silicones, H₂S, lead. Requires O₂ to function. Cannot detect CO, inert gases, or when O₂ is depleted.</td>
    </tr>
    <tr>
      <td><strong>NDIR (Non-Dispersive Infrared)</strong></td>
      <td>Gas absorbs specific IR wavelength → detector measures attenuation</td>
      <td class="hl">CO, CO₂, hydrocarbons, specific molecules</td>
      <td>IG O₂ analyser supplement, boiler rooms, refrigeration spaces (CO₂)</td>
      <td class="hl">Does not detect H₂ or O₂. Specific to gas type - not universal.</td>
    </tr>
    <tr>
      <td><strong>Electrochemical (EC)</strong></td>
      <td>Target gas oxidised at electrode → current generated ∝ concentration</td>
      <td class="hl">Toxic gases: O₂ deficiency, H₂S, CO, NH₃</td>
      <td>Enclosed space entry monitors, personal detectors</td>
      <td class="hl">Finite lifespan (1–2 years). Cross-sensitive to other gases. Temperature dependent.</td>
    </tr>
    <tr>
      <td><strong>Photoionisation (PID)</strong></td>
      <td>UV lamp ionises gas molecules → ion current measured</td>
      <td class="hl">VOCs, aromatic compounds at ppm levels</td>
      <td>Chemical tanker cargo spaces, benzene detection</td>
      <td class="hl">Cannot detect methane. Expensive. UV lamp replacement required.</td>
    </tr>
  </table>

  <div class="n-h2">Alarm Levels (Standard)</div>
  <table class="n-table">
    <tr><th>Level</th><th>% LEL</th><th>Action</th></tr>
    <tr><td>First Alarm</td><td class="hl"><span class="n-val">10%</span></td><td>Investigate - something is releasing gas</td></tr>
    <tr><td>Entry Limit</td><td class="hl"><span class="n-val">10% LEL</span></td><td>Maximum safe LEL for enclosed space entry</td></tr>
    <tr><td>High Alarm</td><td class="hl"><span class="n-val">20%</span></td><td>Evacuate the space. Do not energise/de-energise any equipment.</td></tr>
    <tr><td>Power Isolation</td><td class="bad"><span class="n-val">40–60%</span></td><td class="bad">Non-essential equipment power tripped automatically</td></tr>
    <tr><td>LFL (Lower Flammable Limit)</td><td class="bad"><span class="n-val">100% LEL</span></td><td class="bad">The gas is at its lower flammable limit - explosive atmosphere present</td></tr>
  </table>

  <div class="n-h2">Methanol - Invisible Flame Hazard (2026 Trend)</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Methanol burns with a virtually invisible pale blue flame in daylight.</strong> Standard smoke/heat detectors are insufficient. Fire detection for methanol spaces must include optical IR thermal imaging cameras (TICs) or UV/IR flame detectors. Standard AFFF foam breaks down in methanol - must use <strong>Alcohol-Resistant AR-AFFF</strong> foam which forms a polymer barrier.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Methanol toxicity vs flammability gap:</strong> TLV = <span class="n-val">200 ppm</span>. Lethal doses accumulate long before standard LEL alarms trigger (set at <span class="n-val">20% LEL ≈ 6,000 ppm</span>). Toxic concentrations occur at much lower levels than explosive concentrations - toxic threat comes first.</div></div>

  <div class="n-h2">Ammonia - Toxic at Very Low Concentrations (2026 Trend)</div>
  <table class="n-table">
    <tr><th>Level</th><th>Concentration</th><th>Action</th></tr>
    <tr><td>TLV (8-hour exposure limit)</td><td class="hl"><span class="n-val">25 ppm</span></td><td>Warning alarm - investigate source</td></tr>
    <tr><td>Evacuation Alarm</td><td class="bad"><span class="n-val">~50 ppm</span></td><td class="bad">Clear the space immediately</td></tr>
    <tr><td>IDLH</td><td class="bad"><span class="n-val">300 ppm</span></td><td class="bad">Immediately dangerous to life - SCBA mandatory</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Methanol = invisible flame → IR cameras + AR-AFFF. Ammonia = toxic at 25 ppm → electrochemical continuous sensors + SCBA at all fuel space entry points. Both are new 2026 surveyor topics reflecting alternative fuel ship growth.</div></div>


  <!-- ═══ SECTION 12 ═══ -->
  <div class="n-h1" id="s-misc">12. Auto-Tension, Cargo Hose IR Test, Anti-Heeling</div>

  <table class="n-table">
    <tr><th>System</th><th>Description &amp; ETO Scope</th></tr>
    <tr>
      <td><strong>Auto-Tension Mooring Winch</strong></td>
      <td>Load cell (strain gauge) or hydraulic pressure transducer measures mooring rope tension. Controller commands VFD motor to heave/pay out to maintain preset tension setpoint. <strong>ETO scope:</strong> Calibrate load cell, set overload alarm and trip setpoints on controller, maintain VFD, test limit switches, record in PMS.</td>
    </tr>
    <tr>
      <td><strong>Cargo Hose IR Test</strong></td>
      <td><strong>Conducting hose</strong> = near 0 Ω (static dissipative - used for clean products to bleed charge). <strong>Non-conducting hose</strong> = &gt; 1 MΩ (isolates stray currents from shore facility). Test with <span class="n-val">500 V Megger</span>, flange to flange. Record in hose certificate. Test before each cargo operation.</td>
    </tr>
    <tr>
      <td><strong>Anti-Heeling Pump</strong></td>
      <td>Inclinometer measures heel angle. Controller activates reversible ballast pump to transfer water port ↔ starboard to keep ship upright during rapid cargo operations (Container/RoRo). <strong>ETO monitors:</strong> inclinometer calibration, pump motor current and IR, control PLC alarms, transfer valve limit switches.</td>
    </tr>
    <tr>
      <td><strong>Reefer Container Sockets</strong></td>
      <td>ETO checks: IR &gt; 1 MΩ, socket housing for cracks, contacts clean, MCB trips correctly. Log setpoint vs supply/return temperatures every 6–12 h. Troubleshoot: check compressor current, condenser temp (40–50°C normal), sight glass for bubbles (low charge).</td>
    </tr>
  </table>


  <!-- ═══ SECTION 13 ═══ -->
  <div class="n-h1" id="s-framo">13. Framo Hydraulic Powerpack &amp; Cargo Pumps</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL (Deswal, Praveen Nair):</strong> "What are the pre-start interlocks for the Framo hydraulic powerpack?" and "What are the operating parameters?" are both asked as separate questions.</div></div>

  <div class="n-h2">Framo Pre-Start Interlocks</div>
  <ol class="n-steps">
    <li><strong>IGS Operational:</strong> Cargo tanks must be under positive IG pressure before starting hydraulic powerpack or cargo pumps.</li>
    <li><strong>Tank Atmosphere Safe:</strong> O₂ confirmed &lt; 8% in tank space.</li>
    <li><strong>Hydraulic Oil Level OK:</strong> Level switch in HPU tank confirmed normal.</li>
    <li><strong>Hydraulic Oil Temperature:</strong> Oil must be within <span class="n-val">30–60°C</span> before full load. Cold oil (high viscosity) can damage pump internals.</li>
    <li><strong>Isolation Valves Correct:</strong> All cargo pump isolation valves confirmed in correct positions.</li>
    <li><strong>Electrical Interlocks:</strong> Motor overload relay reset, motor thermistors reading normal temperature, earth fault cleared on motor circuit.</li>
  </ol>

  <div class="n-h2">Framo Operating Values &amp; Alarm Points</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Normal Range</th><th>Alarm / Trip</th></tr>
    <tr><td>Hydraulic Working Pressure</td><td class="ok"><span class="n-val">200–250 bar</span></td><td class="bad">High pressure trip: ~280 bar; Low pressure alarm: &lt;180 bar</td></tr>
    <tr><td>HPU Hydraulic Oil Temperature</td><td class="ok"><span class="n-val">40–60°C</span></td><td class="bad">High temp alarm: 70°C; High-High trip: 80°C</td></tr>
    <tr><td>Hydraulic Oil Level</td><td class="ok">Normal level indicator</td><td class="bad">Low level: alarm → system shutdown to prevent pump cavitation</td></tr>
    <tr><td>Cargo Pump Speed (via hydraulic motor)</td><td class="ok">Controlled by hydraulic flow control valve</td><td class="hl">Speed transmitter via tachometer on pump shaft</td></tr>
  </table>

  <div class="n-h2">ETO Scope on Framo System</div>
  <ul class="n-list">
    <li><strong>Electrical side:</strong> HPU motor protection (overload, thermistor, IR), control panel PLC, alarm system, pressure transmitter calibration, motor starter and VFD (if fitted).</li>
    <li><strong>NOT ETO scope:</strong> Hydraulic system (pipework, hydraulic pump, flow control valves, filters) - this is Chief Engineer scope.</li>
    <li><strong>Transmitter locations:</strong> Pressure transmitters on HPU discharge line and at cargo pump submerged hydraulic motor outlet. Temperature transmitter in HPU oil tank.</li>
  </ul>

  <div class="n-h2">UTI Tape &amp; Cargo Tank Pressure Sensor</div>
  <ul class="n-list">
    <li><strong>UTI Tape (Ullage, Temperature, Interface):</strong> Capacitance sensor to detect oil/water interface. ETO maintains calibration and ensures Ex i certification is current.</li>
    <li><strong>Cargo Tank Pressure Sensor Calibration:</strong> Isolate sensor (3-valve manifold), vent pressure. Connect calibrated dead-weight tester/hand pump. Apply known pressures (0–100% of range). Confirm high/low alarm setpoints trigger. Record in maintenance log.</li>
  </ul>


  <!-- ═══ SECTION 14 ═══ -->
  <div class="n-h1" id="s-updates">14. Tanker Operations &amp; 2026 Updates</div>

  <div class="n-h2">LPG Compressor Room - Electrical Safety</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL (2026 Trend):</strong> "What are the electrical safety requirements for an LPG compressor room?"</div></div>
  <p class="n-p">Classified as <strong>Zone 1</strong>. All equipment MUST be Ex-certified:</p>
  <ul class="n-list">
    <li><strong>Ex Types:</strong> Ex d (flameproof) for motors and switchgear, Ex e (increased safety) for lighting and terminal boxes, Ex i (intrinsically safe) for sensors and gas detectors.</li>
    <li><strong>Rules:</strong> NO PORTABLE ELECTRICAL EQUIPMENT unless Ex-certified and approved for Zone 1. Light switches mounted outside or Ex e rated. All cable glands must be Ex-certified (double-sealed).</li>
    <li><strong>Ventilation Interlock:</strong> Minimum <span class="n-val">20 air changes per hour</span>. Failure of ventilation trips power to compressor room within 30 seconds.</li>
    <li><strong>Gas Detection:</strong> Trips power automatically to non-essential equipment at <span class="n-val">~40% LEL</span>.</li>
    <li><strong>LPG Interbarrier Space (Gas Carriers):</strong> The space between the inner tank wall and outer hull in Type A/B gas carriers is maintained with dry air or nitrogen. Purpose: prevent moisture condensation and icing on the inner tank surface (which could cause brittle fracture of low-temperature steel) and provide a leak detection space for early warning of cargo tank integrity failure.</li>
  </ul>

  <div class="n-h2">IGF Code 2026 Amendments - Gas-Fuelled Ships</div>
  <ul class="n-list">
    <li><strong>Change 1 - Bunkering Checklist:</strong> Must explicitly document and agree on min/max transfer pressures, min/max transfer temperatures, and relief valve settings BEFORE bunkering begins.</li>
    <li><strong>Change 2 - Fuel Prep Room Extinguisher:</strong> Mandatory <span class="n-val">5 kg Dry Chemical Powder (DCP)</span> extinguisher inside each fuel preparation room. ETO maintains and records in PMS.</li>
    <li><strong>Change 3 - Ammonia as Fuel:</strong> Permitted on Type 2G/2PG ships. Toxic hazard (TLV 25 ppm, IDLH 300 ppm). Requires continuous NH₃ detection and remote solenoid isolation of fuel supply.</li>
  </ul>

  <div class="n-h2">Streaming Currents - Additional ESD Physics</div>
  <p class="n-p">When non-conductive liquid hydrocarbons are pumped at high velocities through pipeline manifolds, charge accumulation inside the receiving tank depends on fluid velocity, pipe inner diameter, and fluid conductivity constant. Charge decays exponentially: <strong>τ = ε/σ</strong> (dielectric relaxation time). For ULSD, τ can be several minutes - hence the 30-minute rule provides a safety margin of 5× the relaxation constant.</p>

  <div class="n-h2">Reefer Container - ETO Monitoring Routines</div>
  <ul class="n-list">
    <li><strong>Routine Checks (Every 6–12 h):</strong> Setpoint vs actual supply temperature. Return air temp (2–5°C above supply). Compressor current draw. Alarms: high pressure, compressor fault, defrost running.</li>
    <li><strong>Troubleshooting Temperature Excursion:</strong> Check compressor running. Clean condenser if dirty (should be 40–50°C). Check sight glass for bubbles (low refrigerant charge). Check door seals for warm-air infiltration.</li>
  </ul>


  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>

  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>Explain Ex d, Ex e, and Ex i. Where is each used on a tanker? (All surveyors)</td>
      <td>Ex d is flameproof - the enclosure withstands an internal explosion without igniting the outside atmosphere. The flame-path gasket is the heart. Used for motors, switchgear, and light fittings in Zone 1 (pump room, main deck). Ex e is increased safety - no arcing parts, tighter seals and wider creepage distances. Used for terminal boxes, JBs, fluorescent fittings in Zone 1 and 2. Ex i is intrinsically safe - circuit energy limited to below ignition thresholds (&lt;30 V, &lt;50 mA). Used for sensors, gas detectors, UTI tapes in Zone 0 and Zone 1. NEVER Megger an Ex i circuit.</td>
    </tr>
    <tr>
      <td>Read me this label: Ex II 2G IIB T4 Gb. (Kamath, Vishwanathan)</td>
      <td>ATEX certified (hexagon mark). Group II - surface industries including ships. Category 2G - suitable for Zone 1 gas atmospheres. Gas Group IIB - suitable for ethylene-type gases and weaker (IIB covers IIA, not IIC). Temperature Class T4 - maximum surface temperature 135°C. Equipment Protection Level Gb - Zone 1, high protection level. This equipment can be used in the cargo pump room or on the tanker main deck.</td>
    </tr>
    <tr>
      <td>What are the trips on the Inert Gas system? (All surveyors)</td>
      <td>High O₂ content &gt; 8% - system shuts down. High IG supply pressure &gt; 1500–1600 mmWG - system shuts down. High IG temperature &gt; 65°C - shutdown (scrubber failing). Deck seal low water level - shutdown (prevents vapour backflow). Scrubber seawater failure - shutdown. Blower motor trip - shutdown. Low-low tank pressure &lt; 100 mmWG - cargo pumps trip, system stops (prevents air ingress).</td>
    </tr>
    <tr>
      <td>Give me the full IG pressure cascade. (Kamath, Vishwanathan, Gokhale)</td>
      <td>700–800 mmWG normal operating. ~200 mmWG low pressure alarm. &lt;100 mmWG low-low trip and cargo pump stop. 1200–1300 mmWG recirculation valve opens. +1400 / −250 mmWG individual tank PV valve lifts. +1600–1800 / −400 mmWG deck PV breaker (last line of defence). +2500 / −750 mmWG structural test pressure - never in service.</td>
    </tr>
    <tr>
      <td>How do you prevent static electricity on a tanker deck? (Deswal, Praveen)</td>
      <td>Connect ship-shore bonding cable before cargo hoses. Keep initial loading rate below 1 m/s until bottom inlet submerged by 1 m. Wait 30-minute relaxation time after loading stops before dipping or sampling. Use only Ex i certified instruments (UTI tapes) inside tanks. No free-fall loading - always submerged inlet.</td>
    </tr>
    <tr>
      <td>What are the Exia and Exib fault counts? What is the voltage/current limit for Ex i? (Kamath, Mumbai)</td>
      <td>Exia is safe with two simultaneous independent faults - Category 1G, used in Zone 0. Exib is safe with one fault - Category 2G, used in Zone 1. The energy limits for intrinsically safe circuits are &lt;30 V and &lt;50 mA (some specs state 30 mA). These levels are below the minimum ignition energy of any hydrocarbon gas. Two Zener barriers for Exia; one for Exib.</td>
    </tr>
    <tr>
      <td>Before entering the pump room, you must open a light fitting. What do you check? (Sanjib, Deswal)</td>
      <td>First: gas test the area, obtain enclosed space entry permit. Isolate the circuit at MSB and LOTO. Open the fitting carefully. Check the Ex gasket - it maintains the Ex d flame-path seal. If cracked, squashed, or missing, the fitting is NO LONGER explosion-protected and must not be re-energised until the identical manufacturer-specified spare gasket is fitted. Also check: all fixing screws present and correct type, lamp wattage matches certificate, no paint on flame-path surfaces.</td>
    </tr>
    <tr>
      <td>What are the bow thruster interlocks? (Kamath, Mumbai)</td>
      <td>Five interlocks: (1) Tunnel flooded - pressure switch confirms water present. (2) Ventilation fan running - motor compartment cooling confirmed. (3) Ship speed below limit - typically 5–8 knots. (4) Sufficient generator capacity confirmed by PMS - typically 2 generators paralleled. (5) Pitch at zero - CPP blades flat for no-load start. All five must be satisfied before the ACB closes and the motor starts.</td>
    </tr>
    <tr>
      <td>What are the electrical safety requirements for an LPG compressor room? (2026 Trend)</td>
      <td>Zone 1 classification. All equipment must be Ex rated - Ex d for motors, Ex e for lighting, Ex i for sensors. No non-Ex portable devices. Ventilation interlock: minimum 20 air changes/hour; fan failure trips power within 30 seconds. Gas detection trips power to non-essential equipment at ~40% LEL. All cable glands must be Ex-certified (double-sealed). Light switches located outside the room or Ex e rated.</td>
    </tr>
    <tr>
      <td>What is the Framo pre-start interlock list? (Deswal, Praveen Nair)</td>
      <td>IGS operational and tanks under positive pressure. Tank atmosphere safe (O₂ &lt; 8%). Hydraulic oil level normal in HPU tank. Hydraulic oil temperature in range 30–60°C. Isolation valves in correct positions. Electrical interlocks: motor overload reset, motor thermistors normal, earth fault cleared. All must be confirmed before HPU motor ACB can close.</td>
    </tr>
    <tr>
      <td>How do you inspect Ex equipment - what standard and what grades? (Vishwanathan)</td>
      <td>IEC 60079-17 standard. Three grades: Visual - monthly, external checks only, no opening. Close - quarterly or annual, open enclosure, check gasket, screws, cable glands, corrosion. Detailed - every 3 years at survey, includes flame-path gap measurement, IR testing, barrier verification. All inspections recorded in the Ex Equipment Register with date, grade, findings, and remedial action.</td>
    </tr>
    <tr>
      <td>What are the cargo heating ETO responsibilities? (New - Chemical/Product Tanker)</td>
      <td>Log cargo temperature every watch against setpoint. Test high-temperature alarm and thermostat trip at each port. Calibrate temperature sensors annually. For electric systems: IR test heating cables (min 1 MΩ), check element resistance, verify thermostat. For steam systems: verify condensate drain, check steam trap function, log steam consumption anomalies. Never energise electric heaters with cargo level below the element.</td>
    </tr>
  </table>


  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>

  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>IG System Trips &amp; Full Pressure Cascade</td>
      <td class="hl">⭐⭐⭐⭐⭐ All Surveyors</td>
      <td>O₂ &gt;8% shut. Temp &gt;65°C shut. Press &gt;1500 shut. Cascade: 700→200→100→1400→1600→2500 mmWG.</td>
    </tr>
    <tr>
      <td>ATEX Label Reading (Ex II 2G IIB T4 Gb)</td>
      <td class="hl">⭐⭐⭐⭐⭐ Kamath, Vishwanathan</td>
      <td>Group II=ships. 2G=Zone 1. IIB=ethylene gases. T4=135°C max. Gb=EPL Zone 1.</td>
    </tr>
    <tr>
      <td>Pump Room Light Gasket</td>
      <td class="hl">⭐⭐⭐⭐⭐ Sanjib, Deswal</td>
      <td>Gasket is the heart of Ex d. Cracked/missing = NO Ex protection. Identical spare only.</td>
    </tr>
    <tr>
      <td>Bow Thruster Interlocks</td>
      <td class="hl">⭐⭐⭐⭐⭐ Kamath, Mumbai</td>
      <td>5 interlocks: Tunnel flooded · Fan running · Speed &lt;5–8 kts · 2 gens paralleled · Pitch=0.</td>
    </tr>
    <tr>
      <td>Ex i Limits - IS Voltage/Current + Fault Counts</td>
      <td class="hl">⭐⭐⭐⭐⭐ Kamath, Mumbai</td>
      <td>&lt;30 V, &lt;50 mA. Exia = 2 faults (Zone 0). Exib = 1 fault (Zone 1). NEVER Megger.</td>
    </tr>
    <tr>
      <td>Static Relaxation Time</td>
      <td class="hl">⭐⭐⭐⭐ Deswal, Praveen</td>
      <td>30 minutes after loading stops before dipping. Bonding cable first. &lt;1 m/s initial rate.</td>
    </tr>
    <tr>
      <td>Ex Inspection Standard &amp; Grades</td>
      <td class="hl">⭐⭐⭐⭐ Vishwanathan</td>
      <td>IEC 60079-17. Visual (monthly) · Close (quarterly) · Detailed (3-yearly). Ex Register.</td>
    </tr>
    <tr>
      <td>LPG Compressor Room Safety</td>
      <td class="hl">⭐⭐⭐⭐ 2026 Trend</td>
      <td>Zone 1. 20 AC/h ventilation interlock. 40% LEL trips power. All Ex equipment.</td>
    </tr>
    <tr>
      <td>IGF Code 2026 Updates</td>
      <td class="hl">⭐⭐⭐⭐ New 2026 Trend</td>
      <td>Bunkering checklist mandated. 5 kg DCP extinguisher. Ammonia TLV 25 ppm / IDLH 300 ppm.</td>
    </tr>
    <tr>
      <td>Framo Pre-Start Interlocks</td>
      <td class="hl">⭐⭐⭐ Deswal, Praveen Nair</td>
      <td>IGS on · O₂ safe · Hyd oil level/temp (30–60°C) · Valves correct · Motor interlocks clear.</td>
    </tr>
    <tr>
      <td>Cargo Heating ETO Scope</td>
      <td class="hl">⭐⭐⭐ Chemical/Product Tanker</td>
      <td>Log temperature each watch. Test alarms. Calibrate sensors annually. IR test cables (≥1 MΩ). Never energise below cargo level.</td>
    </tr>
    <tr>
      <td>Methanol &amp; Ammonia Gas Detection</td>
      <td class="hl">⭐⭐⭐⭐ 2026 Alternative Fuel</td>
      <td>Methanol: IR cameras + AR-AFFF. Ammonia: EC sensor. NH₃ TLV 25 ppm, IDLH 300 ppm.</td>
    </tr>
    <tr>
      <td>Gas-Free Certificate for Hot Work</td>
      <td class="hl">⭐⭐⭐ All Tanker Surveyors</td>
      <td>O₂=20.9%, LEL=0%, H₂S &lt;1 ppm. Issued by competent officer. Renewed after each break. Separate hot work permit from Master.</td>
    </tr>
  </table>

  </div>
</div>
</div>
`);
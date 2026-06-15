window.loadNotes("T21", `<div class="view" id="view-notes-t21">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T21')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 21 - LSA (Life Saving Appliances)</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · SOLAS Ch. III · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
      <span class="tag tag-purple">Exam Verified</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-lb-equip')">Lifeboat Equipment</button>
    <button class="anc-btn" onclick="jumpTo('s-lb-types')">Lifeboat Types & Markings</button>
    <button class="anc-btn" onclick="jumpTo('s-battery')">Lifeboat Battery</button>
    <button class="anc-btn" onclick="jumpTo('s-batt-room')">Battery Room Safeties</button>
    <button class="anc-btn" onclick="jumpTo('s-engine')">Lifeboat Engine & Starter</button>
    <button class="anc-btn" onclick="jumpTo('s-davit')">Davit & Release Mechanisms</button>
    <button class="anc-btn" onclick="jumpTo('s-rescue')">Rescue Boat</button>
    <button class="anc-btn" onclick="jumpTo('s-liferaft')">Liferaft & HRU</button>
    <button class="anc-btn" onclick="jumpTo('s-pyro')">Pyrotechnics</button>
    <button class="anc-btn" onclick="jumpTo('s-immersion')">Immersion Suit & TPA</button>
    <button class="anc-btn" onclick="jumpTo('s-eebd')">EEBD & SCBA</button>
    <button class="anc-btn" onclick="jumpTo('s-embark')">Embarkation Lighting & MOB</button>
    <button class="anc-btn" onclick="jumpTo('s-epirb-sart')">EPIRB &amp; SART</button>
    <button class="anc-btn" onclick="jumpTo('s-updates')">LSA Amendments (2026+)</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most Asked Topics:</strong> Lifeboat battery CCA rating &amp; commissioning. Battery room safeties. Pyrotechnics list &amp; expiry. EEBD operation. New 1.3 m/s lowering speed limit. On-load vs Off-load release. EPIRB vs SART frequencies. Lifeboat engine starting circuit - negative return via engine body.</div></div>


  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-lb-equip">1. Lifeboat Electrical Equipment &amp; ETO Checks</div>

  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>SOLAS Ch. III Reg. 31/32:</strong> All survival craft electrical equipment must be powered at <span class="n-val">24 V DC</span> and operate even after full immersion. ETO is responsible for all electrical maintenance.</div></div>

  <div class="n-h2">Complete Electrical Equipment List (SOLAS)</div>
  <table class="n-table">
    <tr><th>EQUIPMENT</th><th>SOLAS SPECIFICATION</th><th>ETO MAINTENANCE</th></tr>
    <tr><td><strong>Engine Starting Motor</strong></td><td>Must provide min <span class="n-val">6 consecutive cold starts</span> at −15°C without recharging. Axial (pre-engaged) type.</td><td class="ok">Monthly engine run test (3 min). Annual motor winding IR test.</td></tr>
    <tr><td><strong>Searchlight</strong></td><td><span class="n-val">55–100 W</span>, min <span class="n-val">3 hours</span> continuous operation, min <span class="n-val">180 m</span> visibility radius. Adjustable beam.</td><td>Monthly functional test. Annual illuminance check.</td></tr>
    <tr><td><strong>Interior Lighting</strong></td><td>Sufficient to read survival/operating instructions. Waterproof fitting.</td><td>Monthly lamp test.</td></tr>
    <tr><td><strong>2-Way VHF Radios</strong></td><td>Min <span class="n-val">2 portable</span> units per lifeboat. Waterproof, Ch 16 capable. Battery life min 8 h.</td><td>Monthly charge check &amp; functional test.</td></tr>
    <tr><td><strong>SART (Radar Transponder)</strong></td><td>Min <span class="n-val">1 per lifeboat</span>. 9 GHz. Standby 96 h + active 8 h.</td><td>Annual self-test. Battery replacement per schedule.</td></tr>
    <tr><td><strong>Illuminated Compass</strong></td><td>Luminous or electrically lit. Gimballed.</td><td>Monthly lamp/readability check.</td></tr>
    <tr><td><strong>Electric Bilge Pump</strong></td><td>Motor-driven. Must clear flooding water within the lifeboat.</td><td>Quarterly run test. Check impeller &amp; strainer.</td></tr>
    <tr><td><strong>Trickle Charger</strong></td><td>Shore/ship-connected. Maintains battery at full charge in stowed position.</td><td>Weekly: verify charging current on panel indicator.</td></tr>
    <tr><td><strong>Davit Limit Switches</strong></td><td>Inductive proximity sensors: up-limit (stowed) &amp; travel-limit (embarkation deck). Prevents motor overrun.</td><td class="hl">Weekly: manually test operation in stowed position.</td></tr>
  </table>

  <div class="n-h2">ETO Maintenance Schedule</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr 1fr; gap:12px;">
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title">Weekly Checks</div>
      <ul class="n-list">
        <li>Trickle charger voltage/current on panel</li>
        <li>Battery electrolyte level (visual or BMS)</li>
        <li>Davit limit switches - manual test in stowed position</li>
        <li>Lowering motor brake release - manual lever free movement</li>
        <li>Searchlight operational</li>
        <li>VHF radio battery charge indicator</li>
      </ul>
    </div>
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title">Monthly Checks</div>
      <ul class="n-list">
        <li>Run engine for min <span class="n-val">3 min</span></li>
        <li>Test searchlight, interior lights, bilge pump</li>
        <li>Test VHF radios on Ch 16</li>
        <li>Check battery voltage and SG (target 1.265–1.280)</li>
        <li>Check SART battery indicator</li>
        <li>Inspect davit arm, fall wires, hooks for corrosion</li>
      </ul>
    </div>
    <div class="n-card" style="border-color:var(--orange)">
      <div class="card-title">Annual Checks</div>
      <ul class="n-list">
        <li>Full battery capacity/discharge test (6-cold-start CCA)</li>
        <li>Megger insulation test on all cables</li>
        <li>Centrifugal brake speed test (≤1.3 m/s)</li>
        <li>IR test on motor windings</li>
        <li>On-load release hook trip mechanism test</li>
        <li>Fall wire end-for-end or renewal (per class requirement)</li>
      </ul>
    </div>
  </div>


  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-lb-types">2. Lifeboat Types, Carriage &amp; Markings</div>

  <div class="n-h2">Lifeboat Types</div>
  <table class="n-table">
    <tr><th>TYPE</th><th>DESCRIPTION</th><th>CARRIAGE REQUIREMENT</th></tr>
    <tr><td><strong>Totally Enclosed (TELB)</strong></td><td>Fully enclosed GRP hull with self-righting capability. Standard on cargo ships. Air supply system &amp; fire-protection sprinkler on tankers.</td><td class="ok">Cargo ships: one each side, total 200% capacity of persons on board.</td></tr>
    <tr><td><strong>Partially Enclosed (PELB)</strong></td><td>Open-top but with canopy. Less common on modern ships.</td><td>Grandfathered on older vessels only.</td></tr>
    <tr><td><strong>Free-Fall Lifeboat</strong></td><td>Launched by dropping from stern ramp. Self-righting. High protection from fires/explosions. Common on tankers &amp; bulk carriers.</td><td class="hl">One free-fall at stern + partial complement capacity on sides.</td></tr>
  </table>

  <div class="n-h2">3-Monthly Launching Requirement (SOLAS)</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">SOLAS Reg. III/20: Each lifeboat must be launched with its assigned crew and manoeuvred in the water at <strong>least every 3 months</strong>. The free-fall lifeboat must be launched by free-fall every 6 months. ETO must ensure full electrical readiness before each drill.</div></div>

  <div class="n-h2">Fall Wire Renewal Regulation</div>
  <ul class="n-list">
    <li><strong>End-for-End:</strong> Lifeboat falls (wire ropes) must be end-for-ended or renewed every <span class="n-val">30 months</span> (whichever comes first). This ensures the section with the most wear (at the hook end) is reversed.</li>
    <li><strong>Maximum Lifespan:</strong> Falls must be renewed every <span class="n-val">5 years</span> regardless of condition.</li>
    <li><strong>ETO Role:</strong> Inspect sheaves and fall terminations for corrosion during annual overhaul. Record in PMS.</li>
  </ul>

  <div class="n-h2">Lifeboat &amp; Liferaft Container Markings</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib, Kamath ask:</strong> "What markings are on a lifeboat?" and "What is written on a liferaft container?" - Memorise both lists.</div></div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr; gap:12px;">
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title">Lifeboat Hull Markings</div>
      <ul class="n-list">
        <li><strong>Ship's name</strong> (in block letters)</li>
        <li><strong>Port of registry</strong></li>
        <li><strong>Dimensions</strong> - length × breadth (in metres)</li>
        <li><strong>Persons capacity</strong> (number of persons)</li>
        <li><strong>Serial number</strong> / IMO identification</li>
        <li><strong>Boat number</strong> (P1, P2, S1, S2)</li>
        <li>SOLAS retroreflective tape on hull</li>
      </ul>
    </div>
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title">Liferaft Container Markings</div>
      <ul class="n-list">
        <li><strong>Manufacturer's name</strong> &amp; serial number</li>
        <li><strong>Persons capacity</strong></li>
        <li><strong>SOLAS Pack type</strong> (A or B)</li>
        <li><strong>Service/inspection date</strong> (expiry)</li>
        <li><strong>Light</strong> (water-activated light on container)</li>
        <li>Hydrostatic Release Unit (HRU) expiry date</li>
        <li>Total weight &amp; dimensions</li>
        <li>Retroreflective tape on container</li>
      </ul>
    </div>
  </div>


  <!-- ═══ SECTION 3 ═══ -->
  <div class="n-h1" id="s-battery">3. Lifeboat Battery - Specs, Ordering &amp; Commissioning</div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical - All Surveyors:</strong> The <strong>CCA (Cold Cranking Amps)</strong> rating is the most-asked lifeboat battery question. Know the definition, the temperature, the voltage threshold, and the SOLAS cold-start requirement.</div></div>

  <div class="n-h2">CCA - Cold Cranking Amps (Definition)</div>
  <div class="n-card" style="border-color:var(--red)">
    <div class="card-title" style="color:var(--red)">CCA Definition - Memorise Exactly</div>
    <p class="n-p">CCA is the maximum current (in amperes) a fully charged battery can deliver for <span class="n-val">30 seconds</span> at <span class="n-val">−18°C</span> without the terminal voltage dropping below <span class="n-val">14.4 V</span> (for a 24 V system, both cells tested individually at 12 V). A higher CCA = more reliable cold-climate engine cranking.</p>
    <p class="n-p"><strong>SOLAS Requirement:</strong> The lifeboat battery must provide min <span class="n-val">6 consecutive cold starts</span> at <span class="n-val">−15°C</span> without recharging. After any real abandon-ship exercise, the trickle charger must restore full charge within <span class="n-val">24 hours</span> of returning to stowed position.</p>
  </div>

  <div class="n-h2">Battery Types Used in Lifeboats</div>
  <table class="n-table">
    <tr><th>TYPE</th><th>FULL FORM</th><th>CHARACTERISTICS</th><th>MAINTENANCE</th></tr>
    <tr><td><strong>VRLA</strong></td><td>Valve Regulated Lead Acid</td><td class="ok">Sealed, maintenance-free (no topping up). AGM or Gel sub-types. Good CCA.</td><td>Check OCV. No electrolyte top-up. Replace every 3–4 years.</td></tr>
    <tr><td><strong>NiCd</strong></td><td>Nickel Cadmium (alkaline)</td><td class="hl">Better performance at extreme temps. Does not sulphate. Longer life.</td><td>Check SG of KOH electrolyte. Renew electrolyte every 5 years.</td></tr>
    <tr><td><strong>Flooded Lead-Acid</strong></td><td>Conventional wet cell</td><td class="bad">Older type. Requires water top-up. Hydrogen gas emission.</td><td>Monthly SG check (1.265–1.280 full). Top up with distilled water only.</td></tr>
  </table>

  <div class="n-h2">Ordering Specifications (What to Tell Purchasing)</div>
  <ul class="n-list">
    <li><strong>Voltage:</strong> <span class="n-val">24 V</span> (two 12 V units in series, or dedicated 24 V block)</li>
    <li><strong>Capacity:</strong> Ah rating (sufficient for 6 cold starts + 3 h searchlight + radio operation)</li>
    <li><strong>CCA rating:</strong> Matching or exceeding OEM spec on the engine dataplate</li>
    <li><strong>Type:</strong> VRLA or NiCd (per maker's recommendation)</li>
    <li><strong>Dimensions/Weight:</strong> Must fit the battery box without modification</li>
    <li><strong>Class Approval Certificate:</strong> MED (Marine Equipment Directive) or equivalent flag-state approval</li>
    <li><strong>Terminal type:</strong> Bolt-on posts (not clip-on) for marine use</li>
  </ul>

  <div class="n-h2">Commissioning Procedure (New Battery)</div>
  <ol class="n-steps">
    <li><strong>Check documents:</strong> Verify class certificate, MED approval, manufacturer datasheet.</li>
    <li><strong>Physical inspection:</strong> Check for transit damage - cracks, terminal damage, leaks.</li>
    <li><strong>Check manufacturing date:</strong> Shelf life. VRLA: max 6 months unactivated. NiCd: longer.</li>
    <li><strong>Measure OCV or SG:</strong> OCV should be ≥12.6 V (12 V unit) or SG = 1.265–1.280 (flooded). If low, give initial charge.</li>
    <li><strong>Initial charge if required:</strong> Connect to approved charger at specified C/10 rate. Charge until SG stable for 3 consecutive hours.</li>
    <li><strong>Install &amp; connect terminals:</strong> Install positive terminal <strong>first</strong>, negative last (to prevent accidental short via tool). Apply anti-oxidant grease to terminals.</li>
    <li><strong>Connect trickle charger:</strong> Verify charging current flows. Check charger output voltage (typically 27.2–27.6 V for 24 V VRLA).</li>
    <li><strong>Functional test all loads:</strong> Test engine crank (brief), searchlight, interior lights, bilge pump, VHF radios.</li>
    <li><strong>Capacity test:</strong> Discharge at rated CCA load for 30 s - verify terminal voltage above 14.4 V. (Annual thereafter.)</li>
    <li><strong>Record in PMS:</strong> Log battery serial number, date installed, commissioning test results, OCV, SG.</li>
  </ol>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Battery Commissioning: "CDC-I-ITC-R"</strong> - Check docs → Damage inspect → Check date → Initial charge → Install (+ first) → Trickle charger → Capacity test → Record PMS.</div></div>


  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-batt-room">4. Battery Room - Safeties &amp; SOLAS</div>

  <div class="n-p">Lead-acid batteries produce <strong>Hydrogen (H₂)</strong> gas during charging - particularly during the equalising/gassing phase. Hydrogen is explosive: Lower Flammability Limit (LFL) = <span class="n-val">4%</span> by volume in air. A single spark can ignite an H₂-air mixture above this concentration.</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Battery Room Safety - Every Surveyor Asks This:</strong> 4 requirements to memorise: (1) Extraction ventilation, (2) Ex-rated lighting, (3) Acid-resistant tray, (4) PPE + eye-wash. No open flames. No smoking. No tools left on top of batteries.</div></div>

  <table class="n-table">
    <tr><th>REQUIREMENT</th><th>SPECIFICATION</th><th>REASON</th></tr>
    <tr><td><strong>Ventilation</strong></td><td class="hl">Continuous mechanical <strong>extraction</strong> (NOT supply). Min <span class="n-val">6 air changes/hour</span>. Exhaust duct exits directly to atmosphere from the <strong>highest point</strong> of the room (H₂ is lighter than air - rises).</td><td>Prevent H₂ accumulation above 4% LFL. Extraction ensures H₂ exits, not recirculates.</td></tr>
    <tr><td><strong>Lighting</strong></td><td class="hl">MUST be <strong>Ex-rated</strong> - specifically <strong>Ex d</strong> (flameproof) or <strong>Ex e</strong> (increased safety). Gas Group <strong>IIC</strong> rating (covers H₂). NO standard fluorescent or incandescent fittings.</td><td>Prevent ignition of H₂ by electrical sparks from lamp contacts or ballast. IIC = highest hazard group, covers hydrogen.</td></tr>
    <tr><td><strong>Spill Control</strong></td><td>Acid-resistant containment tray (GRP or coated steel) under ALL batteries to catch electrolyte leaks. Bunded sill at door.</td><td>Sulphuric acid at SG 1.28 will corrode steel decks and hull structure; also corrosive to personnel.</td></tr>
    <tr><td><strong>PPE &amp; Safety</strong></td><td>Acid-resistant gloves, apron, and goggles posted at entrance. Emergency <strong>eye-wash station</strong> immediately adjacent. No smoking, no naked flame, no tools resting across battery terminals.</td><td>Acid splash is the primary injury risk. Eye wash required by SOLAS. Short-circuit across terminals can cause explosive current and terminal melt.</td></tr>
    <tr><td><strong>Separate Room</strong></td><td>Lead-acid and NiCd batteries must <strong>NOT</strong> be stored or charged in the same room. <span class="n-val">Separate rooms, separate tools, separate ventilation.</span></td><td class="bad">Acid fumes from lead-acid contaminate the alkaline KOH electrolyte in NiCd cells - ruins NiCd performance. Cross-contamination is permanent damage.</td></tr>
    <tr><td><strong>Discharge Monitoring</strong></td><td>Battery Management System (BMS) or periodic voltage/SG checks. Log results.</td><td>Early detection of cell failure before capacity falls below SOLAS requirement.</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Battery Room SOLAS 4-point: "VESP"</strong> - <strong>V</strong>entilation (extraction, 6 ACH, highest point) · <strong>E</strong>x-rated lighting (IIC, Ex d/e) · <strong>S</strong>pill tray (acid-resistant) · <strong>P</strong>PE + eye-wash. Bonus: Separate rooms for Pb-acid &amp; NiCd.</div></div>


  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s-engine">5. Lifeboat Engine &amp; Electrical Starting Circuit</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Vishwanathan - Classic Deep Question:</strong> "Explain the lifeboat engine starting circuit. Where does the negative current return?" Surveyors specifically check if you know the engine block is the negative return conductor. This separates good answers from excellent answers.</div></div>

  <div class="n-h2">Engine Type &amp; Specifications</div>
  <ul class="n-list">
    <li><strong>Type:</strong> Compression ignition (diesel) engine. 4-stroke or 2-stroke depending on maker. Air-cooled or water-cooled.</li>
    <li><strong>Fuel:</strong> Diesel (marine gasoil - MGO). Fuel tank integral to lifeboat structure. Sufficient fuel for <span class="n-val">24 hours</span> continuous operation at 6 knots.</li>
    <li><strong>Starting:</strong> Electric start (primary) + manual/mechanical backup (SOLAS requirement). Electric start must provide min <span class="n-val">6 consecutive cold starts at −15°C</span>.</li>
    <li><strong>Speed:</strong> Lifeboat must achieve min <span class="n-val">6 knots</span> in calm water with full complement and equipment.</li>
    <li><strong>Reverse:</strong> Reversible drive (ahead and astern capability via gearbox).</li>
  </ul>

  <div class="n-h2">Starting Circuit - Full Electrical Path</div>
  <div class="n-card" style="border-color:var(--blue)">
    <div class="card-title">Positive (+ve) Circuit Path</div>
    <p class="n-p">Battery positive terminal → <strong>main fuse/isolator switch</strong> → ignition switch (turned to START position) → <strong>starter solenoid coil</strong> (low current, energises solenoid) → solenoid main contacts close → heavy current flows → <strong>starter motor armature</strong> → engine cranks.</p>
  </div>
  <div class="n-card" style="border-color:var(--orange)" style="margin-top:8px;">
    <div class="card-title">Negative (−ve) Return Path - The Key Detail</div>
    <p class="n-p">The negative return does <strong>NOT</strong> run a long cable back to the battery. Instead: <strong>starter motor body → engine block → short earth strap bolted to engine mounting frame → battery negative terminal</strong>. The <strong>engine body itself forms the negative return conductor</strong> (earth return system). This is identical to automotive practice and is the answer surveyors want to hear.</p>
  </div>

  <div class="n-h2">Why Axial (Pre-Engaged) Starter?</div>
  <p class="n-p">In a pre-engaged starter, the solenoid simultaneously: (1) pushes the drive pinion forward to mesh with the flywheel ring gear, AND (2) closes the main motor current contacts. This ensures the pinion is fully engaged before heavy cranking current flows - preventing ring gear damage from a spinning-but-not-meshed pinion. Standard on marine lifeboats.</p>

  <div class="n-h2">ETO Engine Maintenance Role</div>
  <table class="n-table">
    <tr><th>INTERVAL</th><th>TASK</th></tr>
    <tr><td><strong>Weekly</strong></td><td>Check fuel level in integral tank. Check oil level on dipstick. Inspect for fuel/oil leaks. Verify trickle charger maintaining battery.</td></tr>
    <tr><td><strong>Monthly</strong></td><td>Start and run engine for min <strong>3 minutes</strong>. Check cooling water flow. Check exhaust colour (clear = good). Check all instruments on engine panel. Test manual/hand-crank backup start.</td></tr>
    <tr><td><strong>6-Monthly</strong></td><td>Change engine oil and filter. Check injectors (external inspection). Check gearbox oil. Clean fuel filter/strainer. Test governor response. Check raw-water impeller (if water-cooled).</td></tr>
    <tr><td><strong>Annual</strong></td><td>Full engine service as per maker's manual. Inspect starter motor brushes and commutator. Verify 6-cold-start battery CCA test. Test full-speed on water during drill.</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Starting Circuit:</strong> Positive through switch → solenoid → starter armature. Negative BACK through engine block → battery. <strong>Engine body IS the return conductor.</strong></div></div>


  <!-- ═══ SECTION 6 ═══ -->
  <div class="n-h1" id="s-davit">6. Davit Safety Devices &amp; Release Mechanisms</div>

  <div class="n-h2">Davit Safety Devices - Full List</div>
  <ol class="n-steps">
    <li><strong>Centrifugal Brake / Speed Governor:</strong> Limits lowering speed to max <span class="n-val">1.3 m/s</span> (LSA Code 2026 amendment). Prevents uncontrolled free-fall into water. ETO must verify brake setting and test annually.</li>
    <li><strong>Limit Switches (Inductive Proximity Sensors):</strong> Up-limit (detects fully stowed position) and travel-limit (embarkation deck). Prevent motor overrun. ETO checks operation weekly.</li>
    <li><strong>Mechanical Brake (Hand Brake + Automatic):</strong> Must hold lifeboat stationary in stowed position under full load. Tested by applying brake and attempting motor release.</li>
    <li><strong>On-Load Release Hook (Hydrostatic Trip):</strong> Releases both falls simultaneously when lifeboat is waterborne. Hydrostatic interlock prevents accidental release while in mid-air. ETO checks trip mechanism for corrosion and free movement at each annual drill.</li>
    <li><strong>Painter Line:</strong> Connected to ship's side - keeps lifeboat alongside during boarding. Slipped after engine starts and lifeboat is clear of ship.</li>
    <li><strong>Tricing Pennants:</strong> Hold lifeboat against ship's side at embarkation deck for safe boarding. Released after all persons embarked.</li>
  </ol>

  <div class="n-h2">On-Load vs Off-Load Release</div>
  <table class="n-table">
    <tr><th>TYPE</th><th>WHEN USED</th><th>HOW OPERATED</th><th>SAFETY FEATURE</th></tr>
    <tr><td class="ok"><strong>On-Load Release</strong></td><td>Normal launch - when lifeboat is waterborne with full load on hooks</td><td class="ok">Red handle pulled - simultaneously releases both hooks under load</td><td>Hydrostatic interlock: prevents in-air release unless deliberately overridden. Must be waterborne for interlock to release.</td></tr>
    <tr><td class="hl"><strong>Off-Load Release</strong></td><td>Resetting hooks after drill, OR emergency when boat is not loaded</td><td class="hl">Deliberate secondary action required - typically removing a pin or lifting a guard</td><td>Requires conscious secondary operation to prevent accidental activation during hook maintenance/resetting.</td></tr>
    <tr><td class="bad"><strong>Hook Safety Design (2026)</strong></td><td>New design requirement</td><td>Single fall hooks CANNOT support load unless completely &amp; correctly reset</td><td class="bad">Partially engaged hook will NOT hold weight - prevents accidental drop due to incomplete reset.</td></tr>
  </table>

  <div class="n-h2">Lifeboat Sprinkler (Fire Protection) System</div>
  <p class="n-p">Required on <strong>tankers and gas carriers</strong>. Allows the totally enclosed lifeboat to pass through burning oil (withstands min <span class="n-val">8 minutes</span> of fire).</p>
  <ul class="n-list">
    <li><strong>Operation:</strong> Bottom-mounted sea cock opens automatically when waterborne. Engine-driven pump supplies spray nozzles covering the entire GRP hull with a continuous seawater film.</li>
    <li><strong>Limitation:</strong> Can only operate when waterborne. Indefinite duration (uses seawater).</li>
    <li><strong>ETO Maintenance:</strong> Visual inspection of nozzles and piping. Quarterly flow test in water. Clean salt-blocked nozzles.</li>
  </ul>


  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s-rescue">7. Rescue Boat</div>

  <table class="n-table">
    <tr><th>TYPE</th><th>SPECIFICATION</th><th>REQUIREMENT</th></tr>
    <tr><td><strong>Rescue Boat</strong></td><td>Min <span class="n-val">5 knots</span> speed. Rigid, semi-rigid, or inflatable. Capacity min 5 persons. Must be capable of rescuing person from water.</td><td class="ok">Required on all cargo ships ≥500 GT (SOLAS Ch. III Reg. 9). Can be one of the lifeboats on some configurations.</td></tr>
    <tr><td><strong>Fast Rescue Boat (FRB)</strong></td><td>Min <span class="n-val">8 knots</span> speed for <span class="n-val">4 hours</span>. Rigid hull. Launched and recovered within <span class="n-val">5 minutes</span> in adverse weather.</td><td class="hl">Required on passenger ships. Capable of operating in sea state up to Beaufort 6.</td></tr>
  </table>
  <ul class="n-list">
    <li><strong>Rescue Boat Lighting:</strong> Must be illuminated at the embarkation station (fed from emergency switchboard). Deck light and spotlight required for night SAR operations.</li>
    <li><strong>Equipment:</strong> Paddles, painter line, buoyant lifeline, first-aid kit, knife, bailer, whistle. Rescue hook for recovering person from water.</li>
    <li><strong>ETO Role:</strong> Maintain engine/motor, battery, and lighting. Ensure davit or launching system operational. Test searchlight monthly.</li>
  </ul>


  <!-- ═══ SECTION 8 ═══ -->
  <div class="n-h1" id="s-liferaft">8. Liferaft, HRU &amp; Weak Link</div>

  <div class="n-h2">Hydrostatic Release Unit (HRU) - How It Works</div>
  <div class="n-card" style="border-color:var(--blue)">
    <div class="card-title">HRU Operation Sequence</div>
    <ol class="n-steps">
      <li>Ship sinks. At depth of <span class="n-val">1.5 to 4 metres</span>, water pressure acts on the HRU capsule.</li>
      <li>HRU contains a knife mechanism - pressure activates and cuts the <strong>lashing/securing strap</strong> holding the liferaft container to the cradle.</li>
      <li>Liferaft container floats free to the surface.</li>
      <li>The painter line (connecting raft to ship) tightens as ship sinks further, pulling the CO₂ inflation trigger.</li>
      <li>Raft inflates fully. <strong>Weak link</strong> (breaking strength <span class="n-val">2.2 kN</span>) breaks when painter line tension exceeds this, freeing the raft from the sinking ship.</li>
      <li>Raft floats free and inflated, ready for survivors.</li>
    </ol>
  </div>

  <div class="n-h2">HRU Specifications</div>
  <ul class="n-list">
    <li><strong>Activation depth:</strong> <span class="n-val">1.5 to 4 metres</span> below surface</li>
    <li><strong>HRU expiry:</strong> Every <span class="n-val">2 years</span> (regardless of condition - mandatory replacement)</li>
    <li><strong>Weak link breaking strength:</strong> <span class="n-val">2.2 kN</span> (breaks to free raft from sinking ship, but not from survivor weight)</li>
    <li><strong>Buoyancy:</strong> Container is designed to float - made of GRP/fibreglass with positive buoyancy</li>
  </ul>

  <div class="n-h2">SOLAS Liferaft Packs</div>
  <table class="n-table">
    <tr><th>PACK TYPE</th><th>VESSELS</th><th>CONTENTS (per person unless stated)</th></tr>
    <tr><td class="ok"><strong>SOLAS Pack A - Offshore</strong></td><td>Ships operating &gt;20 nm from land</td><td>Seasick pills: 6/person · <strong>TPA (Thermal Protective Aid): 10% of capacity or min 2</strong> · Food rations: 10,000 kJ · Water: 1.5 L + desalting kits · Parachute flares: 4 · Hand flares: 6 · Buoyant smoke signals: 2 · First aid kit · Jackknife (1 per raft) · Radar reflector · Survival instructions · Sea anchor · Bailers &amp; sponges · Fishing tackle · Whistle · Signal mirror</td></tr>
    <tr><td class="hl"><strong>SOLAS Pack B - Inshore</strong></td><td>Ships operating ≤20 nm from land</td><td>Reduced equipment: fewer rations, water, and pyrotechnics vs Pack A. Still includes TPA and seasick tablets.</td></tr>
  </table>

  <div class="n-h2">Seasickness Tablets &amp; First Aid - SOLAS Medical Pack</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Lifeboat Medical &amp; Survival Pack - Direct Exam Content:</strong>
    <ul class="n-list">
      <li><strong>Seasick tablets:</strong> <span class="n-val">6 per person</span> in raft. Important as survival in a raft is severely compromised by incapacitating seasickness.</li>
      <li><strong>First aid kit:</strong> Bandages, antiseptic, burn dressings, eye wash. SOLAS specifies contents per LSA Code.</li>
      <li><strong>Fresh water:</strong> <span class="n-val">1.5 L per person</span> in sealed rations packs + desalting kit for seawater.</li>
      <li><strong>Food rations:</strong> <span class="n-val">10,000 kJ per person</span> (high-calorie, minimal water requirement to metabolise).</li>
      <li><strong>Anti-exposure coveralls (TPA):</strong> See immersion suit section.</li>
    </ul>
  </div></div>


  <!-- ═══ SECTION 9 ═══ -->
  <div class="n-h1" id="s-pyro">9. Pyrotechnics</div>

  <div class="n-p">All pyrotechnics have a <strong>3-year expiry</strong> from the date of manufacture (stamped on each device). Expired pyrotechnics must not be discarded at sea - return to approved disposal facility ashore.</div>

  <table class="n-table">
    <tr><th>TYPE</th><th>QTY (Lifeboat)</th><th>SPECIFICATIONS</th><th>USE</th></tr>
    <tr><td><strong>Parachute Flare</strong></td><td class="hl">4</td><td>Rocket propelled to <span class="n-val">300 m</span> minimum height. Burns <strong>bright red</strong> for min <span class="n-val">40 seconds</span>. Visible up to <span class="n-val">40 km</span>.</td><td>Long-range alerting - aircraft and ships on horizon. Night or reduced visibility.</td></tr>
    <tr><td><strong>Hand Flare</strong></td><td class="hl">6</td><td>Burns <strong>bright red</strong> for min <span class="n-val">1 minute</span>. Waterproof. Held in outstretched arm, downwind.</td><td>Close-range location marking when rescue vessel is nearby.</td></tr>
    <tr><td><strong>Buoyant Smoke Signal</strong></td><td class="hl">2</td><td>Emits dense <strong>orange smoke</strong> for min <span class="n-val">3 minutes</span>. Floats on water.</td><td>Daytime helicopter wind direction indication and position marking.</td></tr>
  </table>

  <div class="n-h2">Storage &amp; Disposal</div>
  <ul class="n-list">
    <li><strong>Storage:</strong> Dedicated, dry, ventilated pyrotechnic locker. Away from heat sources and accommodation. Clearly labelled. Only authorised persons with access.</li>
    <li><strong>Expiry:</strong> Check monthly. Replace before expiry date. <strong>Do not throw expired pyrotechnics overboard</strong> - retain for approved shore disposal or use in approved exercises.</li>
    <li><strong>Surveyor check:</strong> Surveyor will ask for expiry dates. Keep logbook entries current.</li>
    <li><strong>Inspection:</strong> Check for corrosion, deformed bodies, illegible markings. Any suspect pyrotechnic - remove from service.</li>
  </ul>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Pyrotechnics: "4-6-2, 3 years"</strong> - <strong>4</strong> parachute flares (300m, 40s red) · <strong>6</strong> hand flares (1min red) · <strong>2</strong> smoke signals (3min orange) · All expire in <strong>3 years</strong>.</div></div>


  <!-- ═══ SECTION 10 ═══ -->
  <div class="n-h1" id="s-immersion">10. Immersion Suit, TPA &amp; Lifejacket</div>

  <div class="n-h2">Immersion Suit</div>
  <ul class="n-list">
    <li><strong>Donning Time:</strong> Must be donnable within <span class="n-val">2 minutes</span> including lifejacket, without assistance.</li>
    <li><strong>Thermal Performance:</strong> Must maintain body core temperature above <span class="n-val">34°C</span> after <span class="n-val">6 hours</span> in calm water at 0–2°C.</li>
    <li><strong>Buoyancy:</strong> Positive buoyancy. Must turn an unconscious person face-up within <span class="n-val">5 seconds</span>.</li>
    <li><strong>Coverage:</strong> Full body. Includes gloves, boots, hood. Retroreflective tape on chest and back.</li>
  </ul>

  <div class="n-h2">Immersion Suit Maintenance Checks</div>
  <ul class="n-list">
    <li><strong>Integrity Test (inflation):</strong> Close zip fully. Exhale into the suit via the blow-up valve. Suit should hold pressure - no leaks at seams, zip, or face seal. Check monthly.</li>
    <li><strong>Zip operation:</strong> Lubricate zip with approved wax/lubricant. Ensure smooth operation without binding.</li>
    <li><strong>Reflective tape:</strong> Check adhesion and reflectivity. Replace if peeling or faded.</li>
    <li><strong>Face seal/hood seal:</strong> Check for cracks or deterioration in neoprene/rubber seals.</li>
    <li><strong>Servicing:</strong> Approved shore station every <span class="n-val">3 years</span> for full hydraulic pressure test and certification.</li>
  </ul>

  <div class="n-h2">Thermal Protective Aid (TPA) - SOLAS Requirement</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors check SOLAS compliance on this:</strong> TPA is a separate item from the immersion suit. Both are required. Know the numbers.</div></div>
  <table class="n-table">
    <tr><th>ITEM</th><th>SPECIFICATION</th></tr>
    <tr><td><strong>What is TPA?</strong></td><td>Thermal Protective Aid - a lightweight waterproof bag/wrapper made of low thermal conductance material. Covers person from head to toe except face. Prevents hypothermia when immersion suit is not available or as additional protection.</td></tr>
    <tr><td><strong>SOLAS Requirement (Lifeboats)</strong></td><td class="hl">Min <span class="n-val">10%</span> of the lifeboat's capacity, or min <span class="n-val">2 TPAs</span> per lifeboat, whichever is greater. (Also 10% or min 2 per liferaft Pack A .)</td></tr>
    <tr><td><strong>Performance</strong></td><td>Must reduce heat loss of wearer. Must not significantly impede mobility or donning of lifejacket. Colour: bright orange or red.</td></tr>
    <tr><td><strong>Why TPA and not just immersion suit?</strong></td><td>TPA is quick-don, lightweight, and provides thermal protection for persons who cannot (medically or physically) don a full immersion suit. Also provides redundancy.</td></tr>
  </table>

  <div class="n-h2">Lifejacket (2026 Amendment)</div>
  <ul class="n-list">
    <li><strong>Buoyancy:</strong> Min <span class="n-val">150 N</span> (SOLAS 2026 amendment - in-water buoyancy retention test for <span class="n-val">24 hours</span>).</li>
    <li><strong>Self-righting:</strong> Must right an unconscious person face-up within <span class="n-val">5 seconds</span>.</li>
    <li><strong>Whistle &amp; light:</strong> Water-activated light (min 8 h) and distress whistle attached.</li>
  </ul>


  <!-- ═══ SECTION 11 ═══ -->
  <div class="n-h1" id="s-eebd">11. EEBD &amp; SCBA</div>

  <table class="n-table">
    <tr><th>EQUIPMENT</th><th>FULL FORM</th><th>DETAILS</th></tr>
    <tr>
      <td class="hl"><strong>EEBD</strong></td>
      <td>Emergency Escape Breathing Device</td>
      <td><strong>Purpose:</strong> ESCAPE ONLY from toxic/smoke-filled atmosphere. NOT for firefighting.<br>
      <strong>Duration:</strong> Min <span class="n-val">10 minutes</span> breathable air.<br>
      <strong>Operation:</strong> Pull cord → hood inflates with compressed air → place hood over head → breathe normally (positive pressure inside hood).<br>
      <strong>Type:</strong> Compressed air cylinder + demand valve + hood. Single person, single use.<br>
      <strong>Locations:</strong> Engine Room, ECR, Bridge, and all escape routes. Min <span class="n-val">2 per space</span> where crew regularly work.<br>
      <strong>Check:</strong> Monthly - verify cylinder pressure indicator (green zone). Check hood for damage. Check seal integrity.</td>
    </tr>
    <tr>
      <td class="ok"><strong>SCBA</strong></td>
      <td>Self-Contained Breathing Apparatus</td>
      <td><strong>Purpose:</strong> Firefighting AND entry into toxic/oxygen-deficient spaces.<br>
      <strong>Duration:</strong> Min <span class="n-val">30 minutes</span> (some sets: 45–60 min with larger cylinder).<br>
      <strong>Pressure:</strong> Positive pressure - mask maintained above ambient pressure. Prevents ingress of toxic gases even if mask slightly dislodged.<br>
      <strong>Carriage:</strong> At least <span class="n-val">2 sets per cargo ship</span> in readily accessible locations (fire station/bridge).<br>
      <strong>Pre-use check:</strong> Cylinder pressure ≥90% of rated (200–300 bar). Check low-pressure alarm activates at ~55 bar. Check mask seal. Check bypass valve operates.<br>
      <strong>Servicing:</strong> Annual by approved workshop. Cylinder hydrostatic test every 5 years.</td>
    </tr>
  </table>

  <div class="n-h2">EEBD vs SCBA - Key Differences</div>
  <table class="n-table">
    <tr><th>PARAMETER</th><th>EEBD</th><th>SCBA</th></tr>
    <tr><td>Purpose</td><td class="bad">Escape ONLY</td><td class="ok">Firefighting AND escape</td></tr>
    <tr><td>Duration</td><td class="bad">Min 10 minutes</td><td class="ok">Min 30 minutes</td></tr>
    <tr><td>Donning time</td><td class="ok">Seconds (hood over head)</td><td class="hl">~1 minute (backpack + mask)</td></tr>
    <tr><td>Re-use</td><td class="bad">Single use only</td><td class="ok">Reusable after cylinder refill</td></tr>
    <tr><td>Pressure</td><td>Positive pressure hood</td><td>Positive pressure mask (higher protection)</td></tr>
    <tr><td>Required quantity</td><td>Min 2 per manned space</td><td>Min 2 per ship</td></tr>
  </table>

  <div class="n-h2">SCBA Donning Procedure</div>
  <ol class="n-steps">
    <li>Remove from stowage. Check cylinder pressure (must be ≥200 bar). Turn on cylinder valve (anti-clockwise).</li>
    <li>Don the backpack - arms through harness straps. Tighten shoulder, chest, and waist straps.</li>
    <li>Check low-pressure alarm sounds briefly when valve opened (audible test).</li>
    <li>Hold mask to face - inhale sharply to create suction and check demand valve operation.</li>
    <li>Fit mask over face: chin first, then pull harness over crown of head. Tighten all straps symmetrically.</li>
    <li>Check seal: cover demand valve inlet and inhale - mask should collapse slightly and hold (no air leaks at face seal).</li>
    <li>Connect demand valve to mask port. Open bypass valve to verify it works, then close.</li>
    <li>Communicate readiness to team leader. Work in pairs - never alone in SCBA.</li>
  </ol>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - EEBD vs SCBA:</strong> EEBD = <strong>E</strong>scape (10 min, hood, single use). SCBA = <strong>F</strong>ight fire (30+ min, mask, reusable). EEBD is "run away" kit. SCBA is "fight the fire" kit.</div></div>

  <div class="n-h2">Lifeboat Air Bottle Maintenance</div>
  <ul class="n-list">
    <li><strong>Pressure Check:</strong> Monthly check of pressure gauge (&gt;90% of rated pressure).</li>
    <li><strong>Recharging:</strong> MUST use <strong>Breathing Quality air compressor</strong> (Class E - oil-free, filtered, moisture-dried). <strong>NEVER use industrial air</strong> (oil aerosol is toxic at confined-space concentrations).</li>
    <li><strong>Hydrostatic Test:</strong> Cylinder pressure tested every <span class="n-val">5 years</span> at 1.5× working pressure.</li>
    <li><strong>Record keeping:</strong> Log each fill: date, cylinder ID, pressure, operator signature.</li>
  </ul>


  <!-- ═══ SECTION 12 ═══ -->
  <div class="n-h1" id="s-embark">12. Embarkation Lighting, Embarkation Ladder &amp; MOB</div>

  <div class="n-h2">Embarkation Station Lighting</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">SOLAS Ch. III Reg. 11: Embarkation stations and survival craft stowage positions must be illuminated to allow preparation for launching in darkness.</div></div>
  <ul class="n-list">
    <li><strong>Power supply:</strong> Fed directly from the <strong>Emergency Switchboard (ESB)</strong> - remains operational during main switchboard blackout.</li>
    <li><strong>Illumination area:</strong> Must illuminate: (1) the embarkation station deck area, (2) the embarkation ladder, (3) the sea surface below the ladder/lifeboat davit area.</li>
    <li><strong>Type:</strong> Fixed floodlights or deck lights (watertight, IP56 minimum). Some installations also have self-illuminating signs.</li>
    <li><strong>ETO Check:</strong> Test monthly - switch ESB to emergency power and verify illumination. Log in maintenance record.</li>
  </ul>

  <div class="n-h2">Embarkation Ladder - SOLAS Requirement</div>
  <ul class="n-list">
    <li><strong>Requirement:</strong> SOLAS Reg. III/11.7 - Embarkation ladder must be provided where height between embarkation deck and light waterline exceeds <span class="n-val">1.5 metres</span>.</li>
    <li><strong>Design:</strong> Rope ladder with rigid horizontal wooden or GRP steps, non-slip surface. Steps minimum <span class="n-val">480 mm wide</span>, spaced evenly. Extends from deck to lowest light waterline.</li>
    <li><strong>Lighting:</strong> The ladder area must be lit from ESB as above. Steps and rails must have retroreflective markings.</li>
    <li><strong>Inspection:</strong> Monthly visual inspection of ropes, steps, and fixing points. Annual load test.</li>
  </ul>

  <div class="n-h2">Man Overboard (MOB) Equipment</div>
  <table class="n-table">
    <tr><th>EQUIPMENT</th><th>FUNCTION</th><th>SOLAS REQUIREMENT</th></tr>
    <tr><td><strong>MOB Marker (Dan buoy)</strong></td><td>Self-illuminating float with staff and flag deployed at MOB position. Water-activated light. Provides a visible datum for the person in water and the bridge.</td><td class="ok">Min 1 each side on bridge wings. Automatically deploys via quick-release mounting when grabbed.</td></tr>
    <tr><td><strong>Lifebuoy with Line</strong></td><td>Ring lifebuoy (min 2.5 kg, 30 m buoyant line, retroreflective tape). Thrown to MOB person.</td><td class="hl">Min <span class="n-val">8 lifebuoys per ship</span>. At least half with self-igniting lights. At least 2 with buoyant lifelines.</td></tr>
    <tr><td><strong>MOB Button (GMDSS / AIS)</strong></td><td>Pressing MOB on GMDSS console or AIS unit: (1) activates MOB alarm on bridge, (2) records GPS position of MOB event with timestamp, (3) broadcasts MOB digital selective calling (DSC) on VHF Ch 70 with vessel MMSI and position.</td><td class="hl">AIS transponders must have MOB function. GMDSS DSC controller MOB function mandatory.</td></tr>
    <tr><td><strong>Smoke Float (MOB)</strong></td><td>Smoke marker thrown near MOB - gives smoke for helicopter wind direction and visual contact in high seas. Also acts as datum marker.</td><td>Recommended. Some vessels carry combined light + smoke MOB markers.</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MOB Action Sequence:</strong> (1) SHOUT "Man Overboard - Starboard/Port side!" (2) Press MOB button on GMDSS - records position. (3) Throw lifebuoy + smoke float. (4) Post lookout - never lose sight of person. (5) Alert OOW/Master. (6) Release rescue boat for recovery. <strong>ETO role:</strong> Ensure MOB button tested monthly in GMDSS weekly check. Ensure rescue boat &amp; embarkation lighting operational.</div></div>


  <!-- ═══ SECTION 13 ═══ -->
  <div class="n-h1" id="s-epirb-sart">13. EPIRB &amp; SART - Electrical Details</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib, Kamath - Most Common Cross-Question:</strong> "What is the difference between EPIRB and SART?" Know frequencies, battery life, carriage requirement, and activation method.</div></div>

  <table class="n-table">
    <tr><th>Parameter</th><th>EPIRB</th><th>SART</th></tr>
    <tr><td><strong>Function</strong></td><td>Global distress alerting via satellite - alerts rescue coordination centres</td><td class="ok">Local homing - activates on X-band radar of rescuing ship/aircraft</td></tr>
    <tr><td><strong>Frequency</strong></td><td class="hl"><span class="n-val">406 MHz</span> (satellite link - COSPAS-SARSAT) <br><span class="n-val">+121.5 MHz</span> (aircraft homing, secondary)</td><td class="hl"><span class="n-val">9 GHz</span> (X-band radar frequency)</td></tr>
    <tr><td><strong>Range</strong></td><td>Global via COSPAS-SARSAT Low Earth Orbit (LEO) and Geostationary (GEO) satellites</td><td class="hl">~<span class="n-val">5 nm</span> (surface ship radar) / ~<span class="n-val">10 nm</span> (aircraft radar)</td></tr>
    <tr><td><strong>Activation</strong></td><td>Manual (switch) OR automatic HRU (floats free at <span class="n-val">1–4 m</span> depth)</td><td>Manual OR automatic on water immersion (conductivity sensor)</td></tr>
    <tr><td><strong>Battery Life</strong></td><td class="hl">Min <span class="n-val">48 hours</span> continuous transmitting</td><td class="hl"><span class="n-val">96 hours</span> standby + <span class="n-val">8 hours</span> transmitting</td></tr>
    <tr><td><strong>Carriage (SOLAS)</strong></td><td class="hl">Min <span class="n-val">1 per ship</span> - Category I float-free bracket on bridge wing</td><td class="hl">Min <span class="n-val">2 per ship</span> &gt; <span class="n-val">500 GT</span></td></tr>
    <tr><td><strong>HRU replacement</strong></td><td class="hl">Every <span class="n-val">2 years</span></td><td>—</td></tr>
    <tr><td><strong>Battery replacement</strong></td><td class="hl">Every <span class="n-val">5 years</span> (or after any activation)</td><td class="hl">Per manufacturer schedule</td></tr>
    <tr><td><strong>Radar display</strong></td><td>—</td><td class="ok"><span class="n-val">12 dots</span> in a line pattern on X-band radar PPI display (from 12 sequential responses to radar sweeps)</td></tr>
    <tr><td><strong>Registration</strong></td><td class="hl">Must be registered with flag state (unique 15-digit MMSI-linked code at 406 MHz)</td><td>No registration needed</td></tr>
    <tr><td><strong>Alert destination</strong></td><td>Rescue Coordination Centre (RCC) - gets vessel MMSI, position, nature of distress</td><td>Only visible to ships/aircraft in radar range - no shore alert</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> <strong>EPIRB = 406 MHz satellite global alert</strong>. <strong>SART = 9 GHz radar 12 dots local homing</strong>. EPIRB <strong>1</strong> per ship. SART <strong>2</strong> per ship &gt;500 GT. EPIRB battery = <strong>5 years</strong>. SART battery = per maker. Both in lifeboats and grab-bags.</div></div>


  <!-- ═══ SECTION 14 ═══ -->
  <div class="n-h1" id="s-updates">14. LSA Updates &amp; Amendments (2026 and Beyond)</div>

  <div class="n-h2">LSA Code Amendments</div>
  <ul class="n-list">
    <li><strong>Lowering Speed Limit (1.3 m/s) - IN FORCE:</strong> Maximum permitted lowering speed for survival craft is explicitly capped at <span class="n-val">1.3 m/s (78 m/min)</span> to prevent hard water impacts and hook release issues. ETO must verify davit centrifugal brake or VFD speed settings. Document verified speed in PMS.</li>
    <li><strong>Hook Safety Design - IN FORCE:</strong> Single fall hooks CANNOT support a load unless completely and correctly reset. A partially engaged hook will not hold weight - prevents accidental drops during maintenance/resetting operations.</li>
    <li><strong>Lifeboat Ventilation (Jan 2029):</strong> Totally enclosed lifeboats must have a dedicated ventilation system (min <span class="n-val">5 m³/hr/person</span>) independent of the main propulsion engine to prevent heatstroke and CO₂ buildup during prolonged survival. ETO responsibility: maintain the battery-backed fan motor and ducting.</li>
    <li><strong>Lifejacket Testing (Jan 2026 - IN FORCE):</strong> New lifejackets must pass two in-water tests: (1) 24-hour buoyancy retention (min <span class="n-val">150 N</span>), (2) 5-second self-righting for an unconscious person.</li>
    <li><strong>Fall Wire Renewal:</strong> Renewed or end-for-ended every <span class="n-val">30 months</span>, or renewed every <span class="n-val">5 years</span>.</li>
  </ul>

  <div class="n-h2">Drill Frequency Requirements (SOLAS Ch. III)</div>
  <table class="n-table">
    <tr><th>ACTIVITY</th><th>FREQUENCY</th><th>ETO ROLE</th></tr>
    <tr><td>Abandon ship (muster) drill</td><td class="hl">Weekly (at sea) - all crew mustered</td><td>Verify all electrical LSA equipment ready before drill.</td></tr>
    <tr><td>Lifeboat lowering (waterborne)</td><td class="hl">Every <span class="n-val">3 months</span> - manoeuvre in water with assigned crew</td><td>Battery full charge confirmed. All electrics tested post-drill. Recharge within 24 h of return.</td></tr>
    <tr><td>Rescue boat launch</td><td class="hl">Every month</td><td>Engine/battery check. Davit and lighting operational.</td></tr>
    <tr><td>EPIRB self-test</td><td class="hl">Weekly (on internal test mode only - NOT live 406 MHz transmission)</td><td>ETO verifies test mode; logs result.</td></tr>
    <tr><td>SART self-test</td><td class="hl">Monthly</td><td>ETO verifies light/audio test response. Log.</td></tr>
    <tr><td>Free-fall lifeboat full launch</td><td class="hl">Every <span class="n-val">6 months</span></td><td>Full electrical pre-launch check required.</td></tr>
  </table>


  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>

  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>How do you commission a new lifeboat battery? What is CCA?</td>
      <td>Check documents and class certificate. Physical inspection for transit damage. Check manufacturing date and OCV/SG. Apply initial charge if required. Install positive terminal first, negative last. Connect trickle charger and verify charging current. Test all loads - engine start, searchlight, lights. Perform CCA capacity test.<br><strong>CCA:</strong> Cold Cranking Amps - current delivered at −18°C for 30 seconds without voltage dropping below 14.4 V. Crucial for cold weather starting. SOLAS requires 6 consecutive cold starts at −15°C without recharging.</td>
    </tr>
    <tr>
      <td>What are the safety requirements for a battery room?</td>
      <td>Four key requirements: (1) Extraction ventilation - min 6 air changes/hour, exhausting directly to atmosphere from highest point (hydrogen rises). (2) Ex-rated lighting only - Ex d or Ex e, Gas Group IIC (hydrogen). No standard fittings. (3) Acid-resistant containment tray under all batteries. (4) PPE at entrance (gloves/goggles/apron) and emergency eye-wash station immediately adjacent. No smoking or open flames. Lead-acid and NiCd batteries must NOT be in the same room - acid fumes contaminate KOH electrolyte.</td>
    </tr>
    <tr>
      <td>What is the difference between On-load and Off-load release?</td>
      <td>On-load release is used when the lifeboat is waterborne - hooks are under full load. Operated by pulling the red handle. A hydrostatic interlock prevents accidental in-air release. Off-load release is used to reset hooks or in emergencies when there is no load on the hooks. Requires a deliberate secondary action (removing a pin or guard). The 2026 hook safety design also ensures a partially engaged hook will not hold weight.</td>
    </tr>
    <tr>
      <td>What pyrotechnics are carried in a lifeboat?</td>
      <td>4 parachute flares - rocket propelled to 300 m, burns bright red for min 40 seconds. 6 hand flares - burns bright red for 1 minute. 2 buoyant orange smoke signals - 3 minutes duration. All have a 3-year expiry from date of manufacture. Expired pyrotechnics returned ashore for disposal - not dumped at sea.</td>
    </tr>
    <tr>
      <td>What is an EEBD and how long does it operate?</td>
      <td>Emergency Escape Breathing Device - for ESCAPE ONLY from toxic or smoke-filled spaces, not firefighting. Provides a minimum of 10 minutes of breathable air via a positive-pressure hood over the head. Pull-cord activation - hood inflates immediately. Single person, single use. Located in ER, ECR, Bridge, and escape routes. Min 2 per manned space. Monthly check: pressure indicator must be in green zone.</td>
    </tr>
    <tr>
      <td>What is the difference between EPIRB and SART?</td>
      <td>EPIRB (406 MHz + 121.5 MHz): global distress alert via COSPAS-SARSAT satellite to Rescue Coordination Centre. Battery life 48 hours. 1 per ship. Activates manually or by HRU at 1–4 m depth. Must be registered with flag state.<br>SART (9 GHz): local radar homing transponder - shows 12 dots on X-band radar of approaching rescue ship. Range ~5 nm (ship) / ~10 nm (aircraft). Battery 96 h standby + 8 h active. 2 per ship over 500 GT. No satellite link - purely local homing tool.</td>
    </tr>
    <tr>
      <td>What is a TPA? How many are required?</td>
      <td>Thermal Protective Aid - lightweight waterproof wrap/bag of low thermal conductance material. Provides thermal protection when immersion suit is unavailable or as additional protection. Required: min 10% of lifeboat/raft capacity, or min 2 per survival craft, whichever is greater. Does not replace immersion suit - it complements it for crew unable to don a suit.</td>
    </tr>
    <tr>
      <td>How does the HRU release a liferaft if the ship sinks?</td>
      <td>HRU contains a water-pressure activated knife mechanism. At 1.5–4 m depth, water pressure cuts the securing lashing on the raft container. Container floats free. The painter line (still connected to ship) tightens as ship sinks deeper, pulling the CO₂ inflation trigger. Raft inflates. The weak link (2.2 kN breaking strength) then parts when painter line tension exceeds this, freeing the raft from the sinking ship. HRU must be replaced every 2 years.</td>
    </tr>
  </table>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Explain the lifeboat engine starting circuit. How does current flow from the battery to start the engine? (Kamath, Vishwanathan)</strong><br><br>
  <strong>Circuit path - Positive (+ve) side:</strong><br>
  Battery positive → main fuse/isolator → ignition/start switch (turned to START position) → starter solenoid coil energises → solenoid main contacts close → heavy current → starter motor armature → engine cranks.<br><br>
  <strong>Circuit path - Negative (−ve) side:</strong><br>
  This is the key detail surveyors ask: the negative return does <strong>NOT</strong> run a separate cable all the way back. The <span class="n-val">engine body / block itself forms the negative return path</span> (earth return). Current flows: starter motor body → engine block → short earth strap bolted to engine mounting frame → battery negative terminal via earth strap.<br><br>
  <strong>Why axial (pre-engaged) starter?</strong> Solenoid simultaneously pushes drive pinion forward to mesh with the ring gear AND closes main motor current contacts. Ensures pinion is fully meshed before heavy cranking current flows - prevents ring gear damage.<br><br>
  <strong>6 consecutive cold starts:</strong> SOLAS requires the battery to provide at least <span class="n-val">6 consecutive cold starts at −15°C</span> without recharging. Battery recharged by trickle charger within <span class="n-val">24 hours</span> of returning to stowed position.<br><br>
  <strong>Memory:</strong> Positive through switch → solenoid → starter. Negative back through engine block → battery. <strong>Engine body IS the return conductor.</strong></div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What are the davit safety devices on a lifeboat launching system? What checks does the ETO do? (All surveyors)</strong><br><br>
  <strong>Davit Safety Devices:</strong><br>
  1. <span class="n-val">Centrifugal brake / speed governor:</span> Limits lowering speed to max <span class="n-val">1.3 m/s</span> (LSA Code 2026 amendment). Prevents uncontrolled free-fall. ETO verifies setting and tests annually.<br>
  2. <span class="n-val">Limit switches (inductive proximity sensors):</span> Detect fully stowed (up-limit) and embarkation deck (travel-limit). Prevent motor overrun. ETO checks weekly.<br>
  3. <span class="n-val">Mechanical brake (hand + automatic):</span> Holds lifeboat in stowed position. Tested by applying brake and attempting motor release under load.<br>
  4. <span class="n-val">On-load release hook (hydrostatic trip):</span> Releases both falls simultaneously when waterborne. Hydrostatic interlock prevents in-air release. ETO checks corrosion and free movement at each annual drill.<br>
  5. <span class="n-val">Painter line:</span> Keeps lifeboat alongside ship during boarding. Slipped after engine starts.<br><br>
  <strong>ETO Weekly Checks:</strong> Trickle charger voltage/current. Battery electrolyte level. Davit limit switches (manual test in stowed position). Lowering motor brake release lever - free movement. Searchlight operational. VHF radio battery charge indicator.<br><br>
  <strong>ETO Annual Checks:</strong> Full battery discharge/capacity test (CCA). Megger insulation test on all cables. Centrifugal brake speed test (≤1.3 m/s). IR test on motor windings. On-load release trip mechanism test. Fall wire inspection.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What markings are on a lifeboat hull? What is written on a liferaft container? (Sanjib, Kamath)</strong><br><br>
  <strong>Lifeboat hull markings:</strong> Ship's name · Port of registry · Dimensions (L × B in metres) · Persons capacity · Serial/identification number · Boat number (P1, S1 etc.) · SOLAS retroreflective tape.<br><br>
  <strong>Liferaft container markings:</strong> Manufacturer name &amp; serial number · Persons capacity · SOLAS Pack type (A or B) · Service/inspection date (expiry) · HRU expiry date · Total weight &amp; dimensions · Retroreflective tape · Water-activated light (on container lid).</div></div>


  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>Lifeboat Battery &amp; CCA</td>
      <td class="hl">⭐⭐⭐⭐⭐ All Surveyors</td>
      <td>24V. CCA = −18°C, 30s, ≥14.4V. VRLA or NiCd. 6 cold starts at −15°C. Recharge within 24h. + first, − last on install.</td>
    </tr>
    <tr>
      <td>Battery Room Safeties</td>
      <td class="hl">⭐⭐⭐⭐⭐ Mumbai, ORAL2026</td>
      <td>Ex d/e IIC lighting. Extraction ventilation (6 ACH, highest point). Acid tray. PPE + eye-wash. Pb &amp; NiCd NEVER same room.</td>
    </tr>
    <tr>
      <td>EEBD Time &amp; Purpose</td>
      <td class="hl">⭐⭐⭐⭐ All Surveyors</td>
      <td>10 min minimum. Escape ONLY (not firefighting). Hood-type. Single use per person. Min 2 per manned space. SCBA = 30 min, firefighting.</td>
    </tr>
    <tr>
      <td>Pyrotechnics Expiry</td>
      <td class="hl">⭐⭐⭐⭐ ORAL2026</td>
      <td>4 parachute (300m, 40s red) · 6 hand flares (1min red) · 2 buoyant smoke (3min orange). 3-year expiry from manufacture.</td>
    </tr>
    <tr>
      <td>Lowering Speed Limit (2026)</td>
      <td class="hl">⭐⭐⭐⭐ New LSA Amend</td>
      <td>Max <span class="n-val">1.3 m/s</span> (78 m/min). Centrifugal brake or VFD setting. ETO verifies annually.</td>
    </tr>
    <tr>
      <td>EPIRB vs SART</td>
      <td class="hl">⭐⭐⭐⭐ Sanjib, Kamath</td>
      <td>EPIRB = 406 MHz satellite, 48h, 1/ship, HRU 2yr, battery 5yr, global alert to RCC. SART = 9 GHz radar, 12 dots, 5nm, 96h standby+8h active, 2/ship &gt;500GT.</td>
    </tr>
    <tr>
      <td>Lifeboat Engine Starting Circuit</td>
      <td class="hl">⭐⭐⭐⭐ Kamath, Vishwanathan</td>
      <td>Positive: battery → fuse → switch → solenoid → starter motor. Negative: engine block IS the return conductor (earth strap to battery −ve). Axial starter = pinion meshes before current flows.</td>
    </tr>
    <tr>
      <td>HRU Operation &amp; Weak Link</td>
      <td class="hl">⭐⭐⭐ All Surveyors</td>
      <td>Activates at 1.5–4m depth. Cuts lashing. Raft floats free. Painter inflates raft. Weak link 2.2 kN parts raft from sinking ship. HRU expires every 2 years.</td>
    </tr>
    <tr>
      <td>TPA - Thermal Protective Aid</td>
      <td class="hl">⭐⭐⭐ Examiner Confirmed</td>
      <td>10% of capacity or min 2 per survival craft. Lightweight wrap - prevents hypothermia. Not a substitute for immersion suit. In both lifeboat and liferaft (Pack A).</td>
    </tr>
    <tr>
      <td>Immersion Suit</td>
      <td class="hl">⭐⭐⭐ All Surveyors</td>
      <td>Donning ≤2 min (incl. lifejacket). Maintains core temp ≥34°C for 6h in 0–2°C water. Integrity test: inflate by mouth. Service every 3 years at approved station.</td>
    </tr>
    <tr>
      <td>Lifeboat Markings &amp; Raft Container</td>
      <td class="hl">⭐⭐⭐ Sanjib, Kamath</td>
      <td>Boat: ship name, port, dimensions, capacity, number. Raft container: maker, serial, capacity, SOLAS pack type (A/B), service date, HRU expiry.</td>
    </tr>
    <tr>
      <td>On-Load vs Off-Load Release</td>
      <td class="hl">⭐⭐⭐ All Surveyors</td>
      <td>On-load = boat waterborne, red handle, hydrostatic interlock prevents in-air release. Off-load = no load, deliberate secondary action required (remove pin/guard).</td>
    </tr>
    <tr>
      <td>MOB Button &amp; Equipment</td>
      <td class="hl">⭐⭐ All Surveyors</td>
      <td>GMDSS MOB button: records GPS position, broadcasts DSC alert on Ch 70. MOB marker (dan buoy) + lifebuoy with line + smoke float. 8 lifebuoys per ship (SOLAS).</td>
    </tr>
    <tr>
      <td>Lifeboat Ventilation (2029)</td>
      <td class="hl">⭐⭐ New LSA Amend</td>
      <td>Min 5 m³/hr/person. Independent of propulsion engine. Battery-backed fan motor. ETO maintains. Prevents CO₂ buildup and heatstroke.</td>
    </tr>
  </table>

      </div>
</div>
</div>
`);
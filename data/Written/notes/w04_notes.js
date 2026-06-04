window.loadWrittenNotes("W04", `
<div class="view" id="view-notes-w04">
<div class="note-doc">
  
  
  
    <div style="margin-bottom:16px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px;">
    <button class="anc-btn" onclick="showView('written-notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" style="background-color:var(--bg-card);border-color:var(--text-muted);color:var(--text-muted);opacity:0.5;cursor:not-allowed;">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 4 - SOLAS</h1>
    <div class="sub">ETO MMD EXAMINATION · DETAILED STUDY NOTES · Safety of Life at Sea</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Full 16-Mark Answers</span>
      <span class="tag tag-orange">IMO Regulations</span>
      <span class="tag tag-purple">Question Bank Complete</span>
    </div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-freq')">Frequency & Overview</button>
    <button class="anc-btn" onclick="jumpTo('s-enclosed')">Enclosed Spaces</button>
    <button class="anc-btn" onclick="jumpTo('s-lifeboats')">Lifeboats & Drills</button>
    <button class="anc-btn" onclick="jumpTo('s-nav')">Safety of Navigation</button>
    <button class="anc-btn" onclick="jumpTo('s-steering')">Steering Gear</button>
    <button class="anc-btn" onclick="jumpTo('s-electrical')">Essential Services & Cables</button>
    <button class="anc-btn" onclick="jumpTo('s-shore')">Shore Electrical Connection</button>
    <button class="anc-btn" onclick="jumpTo('s-psc')">Port State Control (PSC)</button>
    <button class="anc-btn" onclick="jumpTo('s-class')">Classification Societies</button>
    <button class="anc-btn" onclick="jumpTo('s-quickref')">Quick Reference</button>
  </div>

  <div class="note-content">

  <!-- ==========================================
       FREQUENCY & FOUNDATION
       ========================================== -->
  <div class="n-h1" id="s-freq">📊 SOLAS - Question Frequency & Foundation</div>
  
  <div class="n-card">
    <table class="n-table">
      <tr><th>Topic</th><th>SOLAS Chapter</th><th>Exam Years</th><th>Marks</th></tr>
      <tr><td>Enclosed Spaces - Entry Procedures, Hazards, Rescue</td><td>Chap III / II-2</td><td class="hl">2018-2025 (MOST FREQUENT)</td><td>16</td></tr>
      <tr><td>Lifeboats - Free Fall, Gravity Davit, Drills & Maintenance</td><td>Chapter III</td><td class="hl">2023/SEP, 2024/SEP, 2024/NOV, 2025/FEB, 2025/APR, 2025/AUG, 2025/OCT</td><td>16</td></tr>
      <tr><td>Safety of Navigation - BNWAS, LRIT, VDR/S-VDR</td><td>Chapter V</td><td class="hl">2019-2025 (very frequent)</td><td>16</td></tr>
      <tr><td>Steering Gear Tests & Emergency Drills</td><td>Chap II-1 / V</td><td>2023/JAN, 2024/NOV</td><td>16</td></tr>
      <tr><td>Essential Electrical Services & Fire Resistant Cables</td><td>Chapter II-1</td><td class="hl">2025/FEB, 2025/JUL</td><td>16</td></tr>
      <tr><td>Shore Electrical Supply Connection</td><td>Chapter II-1</td><td class="hl">2023/FEB, 2023/APR, 2023/JUN, 2025/SEP, 2025/NOV</td><td>16</td></tr>
      <tr><td>Port State Control (PSC) vs Flag State Control</td><td>Chapter I</td><td>2024/JAN, 2024/MAR, 2025/MAR</td><td>16</td></tr>
      <tr><td>Classification Society, ESP & Condition of Class</td><td>Chapter I</td><td>2024/JAN</td><td>16</td></tr>
      <tr><td>Fire Protection - Passenger Vessels</td><td>Chapter II-2</td><td>2024/OCT</td><td>16</td></tr>
      <tr><td>Automatic Sprinkler System</td><td>Chapter II-2</td><td>Multiple years</td><td>16</td></tr>
    </table>
  </div>

  <div class="n-info"><div class="icon">📖</div><div class="body">
    <strong>Regulation:</strong> International Convention for the Safety of Life at Sea - Adopted by IMO | Currently in force: SOLAS 1974 with successive amendments<br>
    <strong>Full Name:</strong> International Convention for the Safety of Life at Sea<br>
    <strong>Adopted:</strong> 1974 (replacing earlier 1929 and 1948 versions) - continuously amended<br>
    <strong>Administered by:</strong> IMO - International Maritime Organization, London<br>
    <strong>Purpose:</strong> To specify minimum safety standards for construction, equipment and operation of merchant ships<br>
    <strong>Compliance:</strong> Flag state responsibility - verified through surveys and certification
  </div></div>

  <div class="n-h2">Introduction to SOLAS</div>
  <div class="n-card">
    <p class="n-p">SOLAS - Safety of Life at Sea - is the most important international treaty dealing with the safety of merchant ships. It was first adopted in 1914 following the Titanic disaster of 1912, and has been revised several times since. The current version is SOLAS 1974 with amendments adopted through IMO.</p>
    <p class="n-p">SOLAS sets minimum standards for the construction, equipment and operation of ships, compatible with their safety. Flag States are responsible for ensuring that ships flying their flag comply with these requirements. Ships are issued with certificates as proof of compliance.</p>
  </div>

  <div class="n-h2">Structure of SOLAS Convention</div>
  <div class="n-card">
    <table class="n-table">
      <tr><th>Chapter</th><th>Title</th><th>Key Content</th></tr>
      <tr><td><strong>Chapter I</strong></td><td>General Provisions</td><td>Surveys, certification, port state control - the administrative framework</td></tr>
      <tr><td><strong>Chapter II-1</strong></td><td>Construction - Subdivision, Stability, Machinery</td><td>Watertight subdivision, stability, electrical installations, steering gear</td></tr>
      <tr><td><strong>Chapter II-2</strong></td><td>Fire Protection, Detection and Extinction</td><td>Fire safety - structural fire protection, detection systems, firefighting</td></tr>
      <tr><td><strong>Chapter III</strong></td><td>Life-Saving Appliances and Arrangements</td><td>Lifeboats, liferafts, survival craft, immersion suits, EPIRBs</td></tr>
      <tr><td><strong>Chapter IV</strong></td><td>Radiocommunications</td><td>GMDSS - Global Maritime Distress and Safety System</td></tr>
      <tr><td><strong>Chapter V</strong></td><td>Safety of Navigation</td><td>Navigational equipment, watchkeeping, BNWAS, LRIT, VDR, weather routing</td></tr>
      <tr><td><strong>Chapter VI</strong></td><td>Carriage of Cargoes</td><td>Safe stowage and securing of cargo</td></tr>
      <tr><td><strong>Chapter VII</strong></td><td>Carriage of Dangerous Goods</td><td>IMDG Code - packaged dangerous goods, bulk solids, liquid chemicals, gas</td></tr>
      <tr><td><strong>Chapter VIII</strong></td><td>Nuclear Ships</td><td>Nuclear-powered vessels - special requirements</td></tr>
      <tr><td><strong>Chapter IX</strong></td><td>Management for Safe Operation</td><td>ISM Code - Safety Management System mandatory</td></tr>
      <tr><td><strong>Chapter X</strong></td><td>Safety Measures for High-Speed Craft</td><td>HSC Code requirements</td></tr>
      <tr><td><strong>Chapter XI-1</strong></td><td>Special Measures to Enhance Maritime Safety</td><td>Enhanced surveys, ship identification numbers, port state control</td></tr>
      <tr><td><strong>Chapter XI-2</strong></td><td>Special Measures to Enhance Maritime Security</td><td>ISPS Code - International Ship and Port Facility Security</td></tr>
      <tr><td><strong>Chapter XII</strong></td><td>Additional Safety Measures for Bulk Carriers</td><td>Structural requirements for bulk carriers</td></tr>
    </table>
  </div>

  <div class="n-h2">Ships SOLAS Applies To</div>
  <div class="n-card">
    <ul class="n-list">
      <li>All ships engaged on international voyages - passenger ships of all sizes, cargo ships of <span class="n-val">500 GT</span> and above</li>
      <li>Ships of flag states that are parties to SOLAS - virtually all merchant shipping nations</li>
      <li>Warships, naval auxiliaries and government ships are generally exempt</li>
      <li>Ships not engaged on international voyages may be subject to equivalent national legislation</li>
    </ul>
  </div>

  <div class="n-h2">SOLAS Certificates - Key Documents</div>
  <div class="n-card">
    <table class="n-table">
      <tr><th>Certificate</th><th>Issued To</th><th>Validity</th><th>Covers</th></tr>
      <tr><td>Passenger Ship Safety Certificate</td><td>Passenger ships</td><td><span class="n-val">12 months</span></td><td>Construction, equipment, fire, lifesaving, radio, stability</td></tr>
      <tr><td>Cargo Ship Safety Construction Certificate</td><td>Cargo ships <span class="n-val">500 GT+</span></td><td><span class="n-val">5 years</span></td><td>Structural safety and watertight integrity</td></tr>
      <tr><td>Cargo Ship Safety Equipment Certificate</td><td>Cargo ships <span class="n-val">500 GT+</span></td><td><span class="n-val">5 years</span></td><td>Life-saving and fire-fighting equipment</td></tr>
      <tr><td>Cargo Ship Safety Radio Certificate</td><td>Cargo ships <span class="n-val">300 GT+</span></td><td><span class="n-val">5 years</span></td><td>GMDSS radio equipment</td></tr>
      <tr><td>Cargo Ship Safety Certificate</td><td>Cargo ships</td><td><span class="n-val">5 years</span></td><td>Combined certificate replacing above three</td></tr>
    </table>
  </div>

  <!-- ==========================================
       1. ENCLOSED SPACES
       ========================================== -->
  <div class="n-h1" id="s-enclosed">⚠️ 1. ENCLOSED SPACES - ENTRY PROCEDURES & HAZARDS</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">
    <strong>Asked in:</strong> 2018/FEB, 2018/AUG, 2018/SEP, 2018/OCT, 2018/NOV, 2018/DEC, 2019/JAN, 2019/FEB, 2019/MAR, 2019/APR, 2019/JUN, 2019/JUL, 2019/SEP, 2019/OCT, 2020/MAR, 2021/JAN, 2021/MAR, 2021/JUL, 2021/NOV, 2021/DEC, 2022/JAN, 2022/FEB, 2022/APR, 2022/JUN, 2023/DEC, 2025/JUN - MOST FREQUENTLY ASKED TOPIC IN THE ENTIRE EXAM<br><br>
    <strong>Regulation:</strong> SOLAS Chapter III Reg 19 | IMO Resolution A.1050(27) - Revised Recommendations for Entering Enclosed Spaces Aboard Ships (2011) | Code of Safe Working Practices (COSWP) Chapter 15
  </div></div>

  <div class="n-card">
    <p class="n-p"><strong>Introduction - Why Enclosed Spaces are Dangerous:</strong> Enclosed spaces on ships represent one of the most serious and persistent causes of fatalities at sea. Despite decades of safety regulations and training, seafarers continue to die in enclosed spaces every year. The tragedy is that many deaths occur because well-intentioned crew members enter a space to rescue a colleague without taking proper precautions - and become casualties themselves.</p>
    <p class="n-p">The International Maritime Organization, through Resolution A.1050(27), has issued detailed recommendations for entering enclosed spaces. SOLAS Chapter III Regulation 19 requires ships to carry equipment for testing the atmosphere of enclosed spaces before entry. The Code of Safe Working Practices (COSWP) provides the practical guidance for implementation.</p>
  </div>

  <div class="n-h2">A) Definition of Enclosed Space</div>
  <div class="n-card">
    <p class="n-p">Under IMO Resolution A.1050(27), an enclosed space is defined as a space which has any of the following characteristics:</p>
    <ul class="n-list">
      <li>Limited openings for entry and exit</li>
      <li>Inadequate ventilation - natural ventilation is insufficient to maintain safe atmospheric conditions</li>
      <li>Not designed for continuous worker occupancy - the space is entered occasionally for maintenance, inspection or cargo work rather than as a workplace</li>
    </ul>
    <p class="n-p">The key point is that a space does NOT need to be sealed or confined to be classified as an enclosed space. Even a space with an open hatch can be an enclosed space if it has inadequate natural ventilation.</p>
  </div>

  <div class="n-h2">B) Examples of Enclosed Spaces Onboard</div>
  <div class="n-card">
    <table class="n-table">
      <tr><th>Category</th><th>Examples</th><th>Primary Hazard</th></tr>
      <tr><td>Cargo spaces</td><td>Cargo holds, cargo tanks (tankers), ballast tanks, void spaces, cofferdams</td><td>Oxygen depletion from cargo oxidation, inert gas, chemical vapours</td></tr>
      <tr><td>Machinery spaces</td><td>Double bottom tanks, duct keels, pipe tunnels, engine room bilge spaces, shaft tunnels</td><td>Accumulation of gases from machinery, poor ventilation</td></tr>
      <tr><td>Service spaces</td><td>Chain lockers, store rooms, paint lockers, pump rooms (tankers)</td><td>Chemical vapours, inert gas, poor ventilation</td></tr>
      <tr><td>Deck spaces</td><td>Fore peak, after peak, bosun's store, emergency generator room (if poorly ventilated)</td><td>Accumulation of fumes, poor ventilation</td></tr>
    </table>
  </div>

  <div class="n-h2">C) Hazards Associated with Enclosed Spaces - Detailed</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">1. Oxygen Deficiency (Most Common Fatal Hazard)</div>
      <div class="card-desc">
        Normal air contains approx <span class="n-val">20.9%</span> oxygen. Oxygen deficiency can occur without warning - the air may look and smell normal.
        <ul class="n-list" style="margin-top:8px">
          <li><strong>Below <span class="n-val">19.5%</span>:</strong> Mildly impaired judgment, increased breathing rate - first warning level</li>
          <li><strong>Below <span class="n-val">16%</span>:</strong> Headache, dizziness, rapid fatigue</li>
          <li><strong>Below <span class="n-val">14%</span>:</strong> Extreme fatigue, coordination problems, may lose consciousness</li>
          <li><strong>Below <span class="n-val">10%</span>:</strong> Nausea, vomiting, rapid loss of consciousness - death within minutes</li>
          <li><strong>Below <span class="n-val">6%</span>:</strong> Spasmodic breathing, convulsions, death in seconds</li>
        </ul>
        <em>CAUSE:</em> Rusting of steel (oxidation), biological decomposition of cargo residues, bacterial action, burning of fuel.
      </div>
    </div>
    
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">2. Toxic Gases</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Hydrogen Sulphide (H2S):</strong> From decaying organic matter, fish cargo, sewage. Heavier than air. <strong>DANGEROUS:</strong> smells like rotten eggs at low concentrations but SMELL DISAPPEARS at high concentrations. TLV: <span class="n-val">1 ppm</span> (short-term exposure).</li>
          <li><strong>Carbon Monoxide (CO):</strong> From incomplete combustion. Colourless and ODOURLESS - undetectable by senses. Binds to haemoglobin. TLV: <span class="n-val">35 ppm</span> TWA.</li>
          <li><strong>Carbon Dioxide (CO2):</strong> From biological processes, inert gas systems, fire. Displaces oxygen. Dangerous above <span class="n-val">5%</span>.</li>
          <li><strong>Sulphur Dioxide (SO2):</strong> From burning sulphur-containing fuels. Irritant.</li>
        </ul>
      </div>
    </div>

    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">3. Flammable and Explosive Atmospheres</div>
      <div class="card-desc">
        <ul class="n-list">
          <li>Hydrocarbon vapours from oil cargo, fuel residues, or methane can form EXPLOSIVE MIXTURES with air.</li>
          <li><strong>LEL (Lower Explosive Limit):</strong> below this concentration mixture is too lean to ignite.</li>
          <li><strong>UEL (Upper Explosive Limit):</strong> above this concentration mixture is too rich to ignite.</li>
          <li>Between LEL and UEL: EXPLOSIVE - any spark or flame causes explosion.</li>
          <li>A space can be simultaneously oxygen-deficient AND contain explosive vapours.</li>
        </ul>
      </div>
    </div>

    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">4. Other Hazards</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Oxygen Enrichment:</strong> Above <span class="n-val">23.5%</span> oxygen - greatly increased fire and explosion risk. Even clothing can catch fire. Caused by leaking oxygen equipment.</li>
          <li><strong>Inert Gas Atmosphere:</strong> Cargo tanks may contain inert gas (CO2 or nitrogen) to prevent explosion. Contains virtually NO OXYGEN - immediately fatal.</li>
          <li><strong>Physical/Biological:</strong> Poor visibility, physical hazards (falls, entrapment), biological activity, residual cargo vapours.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="n-h2">D) Safe Atmospheric Limits for Entry</div>
  <div class="n-card">
    <p class="n-p">The atmosphere MUST be tested before entry and continuously monitored during work:</p>
    <table class="n-table">
      <tr><th>Parameter</th><th>Safe Range</th><th>Instrument Used</th><th>Action if Outside Range</th></tr>
      <tr><td><strong>Oxygen (O2)</strong></td><td class="hl"><span class="n-val">19.5%</span> to <span class="n-val">23.5%</span></td><td>Electrochemical O2 sensor</td><td class="bad">Do NOT enter. Ventilate and retest. Find cause.</td></tr>
      <tr><td><strong>Flammable gas (% LEL)</strong></td><td class="hl">Below <span class="n-val">1%</span> LEL</td><td>Catalytic bead sensor</td><td class="bad">Do NOT enter. Ventilate and retest. Locate source.</td></tr>
      <tr><td><strong>Hydrogen Sulphide (H2S)</strong></td><td class="hl">Below <span class="n-val">1 ppm</span> (short exposure)</td><td>Electrochemical H2S sensor</td><td class="bad">Do NOT enter. Ventilate, let disperse, retest.</td></tr>
      <tr><td><strong>Carbon Monoxide (CO)</strong></td><td class="hl">Below <span class="n-val">35 ppm</span> TWA</td><td>Electrochemical CO sensor</td><td class="bad">Do NOT enter. Ventilate, identify source, retest.</td></tr>
    </table>
  </div>

  <div class="n-h2">E) Full Entry Procedure - Step by Step</div>
  <div class="n-card">
    <p class="n-p">The following procedure must be followed every time an enclosed space is entered, without exception. There are no shortcuts - cutting corners in enclosed space entry has killed experienced seafarers.</p>
    <ol class="n-steps">
      <li><strong>OBTAIN PERMIT TO WORK:</strong> A formal written permit must be issued and signed by the responsible officer (Chief Officer for deck spaces, Chief Engineer for machinery spaces). The permit specifies the space, work to be done, duration, persons involved, precautions and emergency arrangements. No entry without a signed permit.</li>
      <li><strong>ATMOSPHERE TESTING:</strong> Test the atmosphere with a CALIBRATED, APPROVED gas detector before entry and continuously during work. Test must be done by a competent person. Test for: O2, flammable gas, toxic gases. Test at different levels - top, middle and bottom - as different gases have different densities.</li>
      <li><strong>VENTILATION:</strong> Thoroughly ventilate the space using forced ventilation before entry. Natural ventilation is insufficient. Minimum ventilation period: as recommended by risk assessment (typically at least <span class="n-val">30 minutes</span> forced ventilation, or minimum <span class="n-val">24 hours</span> where possible). Continue forced ventilation during work.</li>
      <li><strong>ISOLATE ALL HAZARDOUS SOURCES:</strong> Apply Lock Out Tag Out (LOTO) to all pipelines, valves, mechanical equipment. Blank flanges on pipelines. Isolate electrical equipment. Ensure no steam, water, gas or chemicals can enter.</li>
      <li><strong>COMMUNICATION SYSTEM:</strong> Establish reliable communication between entrant and standby person (telephone, radio, or voice). Test before entry. Agree distress signals.</li>
      <li><strong>STANDBY PERSON:</strong> A trained standby person must be stationed at the entrance AT ALL TIMES while anyone is inside.</li>
      <li><strong>RESCUE EQUIPMENT READY:</strong> Before entry, position rescue equipment at entrance: BA set (Breathing Apparatus), lifeline and harness, rescue tripod/mechanical advantage system, first aid kit, resuscitation equipment, communications.</li>
      <li><strong>BRIEF ALL PERSONNEL:</strong> Brief all entrants and standby person: hazards, emergency signals, escape routes, communication protocol.</li>
      <li><strong>ENTER WITH APPROPRIATE EQUIPMENT:</strong> Minimum two persons (entrant + standby). Enter with personal gas detector, communications, torch. In atmospheres that may deteriorate: wear BA set, appropriate PPE. NEVER enter alone.</li>
      <li><strong>CONTINUOUS MONITORING:</strong> Monitor atmosphere CONTINUOUSLY during work. If alarm activates - LEAVE IMMEDIATELY via escape route. Do not investigate - exit first.</li>
    </ol>
  </div>

  <div class="n-h2">F) Standby Person - Duties and Restrictions</div>
  <div class="n-card">
    <p class="n-p">The standby person has a critical and difficult role. Many fatalities have occurred precisely because the standby person entered without BA to help and became a second casualty.</p>
    <ul class="n-list">
      <li>Station at entrance and <strong>DO NOT LEAVE</strong> under any circumstances while someone is inside.</li>
      <li>Maintain <strong>CONTINUOUS COMMUNICATION</strong> with entrant - if communication lost, treat as emergency.</li>
      <li>Monitor atmosphere at the entrance level.</li>
      <li>Hold lifeline if entrant is using one.</li>
      <li>Control the permit - ensure no unauthorised persons enter.</li>
      <li>Know the emergency procedure - including who to call and how to summon rescue team.</li>
      <li style="color:var(--red)"><strong>CRITICAL: NEVER enter the space to attempt rescue</strong> - raise the alarm and wait for a properly equipped rescue team. The number one rule: DO NOT become a second casualty.</li>
    </ul>
  </div>

  <div class="n-h2">G) Emergency Rescue from Enclosed Space - Full Procedure</div>
  <div class="n-card">
    <p class="n-p">If a person collapses or becomes unresponsive in an enclosed space, the correct procedure is immediate escalation to a full emergency response - NOT a single person rushing in to help.</p>
    <ol class="n-steps">
      <li><strong>RAISE ALARM IMMEDIATELY</strong> - shout, press alarm button, contact bridge or engine room. Do not attempt solo rescue.</li>
      <li><strong>CALL MASTER</strong> - activate ship's emergency response plan.</li>
      <li><strong>ALERT MEDICAL OFFICER</strong> or person with first aid training.</li>
      <li><strong>RESCUE TEAM ASSEMBLES</strong> - minimum two persons, both equipped with BA sets, lifelines, torch, first aid equipment.</li>
      <li><strong>Rescue team DONS BA SETS BEFORE ENTERING</strong> - do not enter without BA regardless of how urgent the situation seems.</li>
      <li>Rescuers use <strong>LIFELINES</strong> connected to a fixed point outside - so they can be pulled out if incapacitated.</li>
      <li><strong>CASUALTY DRAGGED OUT</strong> - do not attempt to carry in a confined space - dragging is faster and requires less space.</li>
      <li>Do <strong>NOT</strong> remove casualty's BA set if they are wearing one - do not interrupt their air supply.</li>
      <li>Pass casualty to <strong>MEDICAL TEAM</strong> waiting outside - immediately commence first aid and CPR if required.</li>
      <li>Do <strong>NOT re-enter</strong> the space until atmosphere has been retested and confirmed safe.</li>
    </ol>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>KEY EXAM POINTS (ENCLOSED SPACES):</strong><br>
  • Definition: Limited openings + inadequate ventilation + not designed for continuous occupancy.<br>
  • Safe O2: <span class="n-val">19.5%</span> to <span class="n-val">23.5%</span> - below 19.5% DANGER, above 23.5% FIRE RISK.<br>
  • H2S: smell disappears at lethal concentrations - most treacherous toxic gas - cannot detect by smell.<br>
  • PERMIT TO WORK is mandatory - no exceptions - signed by responsible officer.<br>
  • STANDBY PERSON at entrance AT ALL TIMES - NEVER enters to rescue alone.<br>
  • Rescue team: minimum TWO persons, BOTH in BA sets, with lifelines.<br>
  • DRAG casualty out - do not carry - do not remove their BA set.<br>
  • Test atmosphere at MULTIPLE LEVELS - different gases have different densities. (Must use CALIBRATED instruments).</div></div>
  
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: Entry Procedure</strong><br>
  P-A-V-I-C-S-R-B-E-M: Permit, Atmosphere test, Ventilate, Isolate, Communication, Standby person, Rescue equipment ready, Brief personnel, Enter, Monitor continuously.</div></div>

  <!-- ==========================================
       2. LIFEBOATS
       ========================================== -->
  <div class="n-h1" id="s-lifeboats">🚤 2. LIFE-SAVING APPLIANCES - LIFEBOATS, DAVITS AND DRILLS</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">
    <strong>Asked in:</strong> Free fall: 2023/SEP, 2023/DEC, 2025/FEB, 2025/APR, 2025/AUG | Gravity davit: 2024/SEP, 2025/OCT | Drills: Multiple years<br><br>
    <strong>Regulation:</strong> SOLAS Chapter III - Life-Saving Appliances and Arrangements | LSA Code (Life-Saving Appliances Code) | MSC/Circ.1392 - Revised guidelines for maintenance and inspection of safety equipment
  </div></div>

  <div class="n-card">
    <p class="n-p"><strong>Introduction - SOLAS Chapter III:</strong> Deals with life-saving appliances and arrangements. Specifies types, quantities, standards, and maintenance for survival craft, rescue boats, personal LSA, and related equipment. The LSA Code provides technical standards. The fundamental philosophy is to provide sufficient means for all persons onboard to abandon ship safely and survive until rescued. Key principle: All persons onboard must be able to reach and embark survival craft within <span class="n-val">10 minutes</span> of alarm.</p>
  </div>

  <div class="n-h2">A) Gravity Davit Arrangement</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Q: a) Sketch the arrangement showing the lifeboat both in the housed position and at maximum point of outboard travel (8). b) Describe the lowering and raising of lifeboat stating safety features and requirement as per SOLAS 74 with respect to time for hoisting (8). - 2024/SEP/Q8, 2025/OCT/Q8</div></div>
  
  <div class="n-card">
    <p class="n-p"><strong>Introduction:</strong> A gravity davit is a mechanical system for stowing, handling, and launching a lifeboat. 'Gravity' means gravity acts on the davit arms to swing them outboard when released - no powered mechanism needed for outboard swing. Once outboard, falls and winch are used to lower. Most common on cargo ships. SOLAS requires launch even with list up to 20 degrees.</p>
    
    <strong>Components of Gravity Davit:</strong>
    <ul class="n-list">
      <li><strong>Davit arms</strong> - curved steel arms pivoted at bottom. Swing outboard under gravity when gripes released.</li>
      <li><strong>Tricing pendants</strong> - ropes/wires holding lifeboat tight against ship's side when stowed.</li>
      <li><strong>Gripes</strong> - steel wires with quick-release hooks securing lifeboat in cradle. First released.</li>
      <li><strong>Cradle</strong> - curved steel cradle on deck supporting lifeboat weight when stowed.</li>
      <li><strong>Falls (wire ropes)</strong> - run from winch drum, over sheaves at davit head, to hooks. Carry weight during lower/hoist.</li>
      <li><strong>Winch with centrifugal brake</strong> - motor-driven for hoisting. Centrifugal brake controls descent speed - prevents free fall.</li>
      <li><strong>Limit switches</strong> - stop winch motor at correct upper/lower positions (prevent overwind/over-lower).</li>
      <li><strong>Bowsing tackle</strong> - additional line to pull boat towards ship's side for embarkation.</li>
      <li><strong>Painter</strong> - line connecting bow to ship, keeps boat alongside during embarkation.</li>
      <li><strong>On-load release hooks</strong> - can release falls while load is on hooks - releases at water level.</li>
      <li><strong>Off-load release</strong> - backup release when no load on falls.</li>
      <li><strong>Hydrostatic interlock</strong> - prevents accidental on-load release at height - only allows release when waterborne.</li>
    </ul>

    <strong>Lowering Procedure - Step by Step:</strong>
    <ol class="n-steps">
      <li><strong>MUSTER ALARM:</strong> 7 or more short blasts followed by 1 long blast. Crew muster at station.</li>
      <li><strong>PREPARE LIFEBOAT:</strong> Remove covers, check engine/fuel/water. Ensure painter secured to ship.</li>
      <li><strong>RELEASE GRIPES:</strong> Quick-release gripes holding boat in cradle.</li>
      <li><strong>SWING OUTBOARD:</strong> Release tricing pendants - davit arms swing outboard under gravity, boat suspended on falls.</li>
      <li><strong>EMBARKATION:</strong> When at embarkation deck level, crew board via ladder/directly. Officer last to board.</li>
      <li><strong>LOWER USING FALLS:</strong> Winch operator lowers using centrifugal brake - controlled, steady descent.</li>
      <li><strong>WATER LEVEL:</strong> When lifeboat touches water - on-load release hooks activated - falls released.</li>
      <li><strong>CAST OFF PAINTER:</strong> Release painter, start engine, move clear of ship.</li>
    </ol>

    <strong>Hoisting - SOLAS Requirements & Safety Features:</strong>
    <ul class="n-list">
      <li><strong>Hoisting time:</strong> Lifeboat must be capable of being hoisted from water to stowed position in <strong>MAXIMUM <span class="n-val">30 MINUTES</span></strong> with full complement onboard.</li>
      <li>Falls must have sufficient strength to support fully loaded lifeboat.</li>
      <li>Winch must be capable of operating from local and remote positions.</li>
      <li><strong>Centrifugal brake:</strong> Speed-sensitive brake on winch drum - applies as lowering speed increases. <strong>Most important safety feature</strong> (prevents uncontrolled free fall).</li>
      <li><strong>Hydrostatic interlock:</strong> On on-load release, prevents accidental release of falls at height.</li>
      <li><strong>Limit switches:</strong> Prevent overwinding during hoisting.</li>
      <li><strong>Hand brake:</strong> Manual backup for power failure.</li>
      <li><strong>Anti-reeve device:</strong> Prevents falls jumping off sheaves.</li>
    </ul>
  </div>

  <div class="n-h2">B) Free Fall Lifeboat</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Q: With reference to free fall lifeboat: a) Periodical maintenance, tests and checks on lifeboat and releasing gear (6). b) Secondary means of lowering (5). c) Lifeboat Drills (5). - 16 marks | 2023/SEP/Q8, 2023/DEC/Q9, 2025/FEB/Q8, 2025/APR/Q9, 2025/AUG/Q8</div></div>
  
  <div class="n-card">
    <p class="n-p"><strong>Introduction:</strong> Positioned on an inclined ramp at the stern. When released, slides down and enters water as a projectile. Crew experience significant deceleration forces. Mandatory on bulk carriers and oil tankers built after certain dates. Can be released quickly even as ship sinks/capsizes.</p>
    
    <strong>A) Periodical Maintenance, Tests & Checks:</strong>
    <table class="n-table">
      <tr><th>Frequency</th><th>Maintenance / Check / Test</th></tr>
      <tr><td><strong>Weekly</strong></td><td>Visual inspection of hull exterior, equipment. Check engine oil/coolant, fuel level, battery charge. Visual check of launching rail/ramp for obstructions.</td></tr>
      <tr><td><strong>Monthly</strong></td><td>Run engine in gear for <strong>minimum <span class="n-val">3 minutes</span></strong>. Test controls (throttle, helm, bilge pump). Check safety equipment. Inspect/test release mechanism (corrosion, smooth operation). Lubricate moving parts.</td></tr>
      <tr><td><strong>3 Monthly</strong></td><td>Conduct lowering drill - lower boat to water using secondary means, manoeuvre, recover.</td></tr>
      <tr><td><strong>6 Monthly</strong></td><td>Conduct actual free fall launch OR simulated free fall using secondary means. Check wire ropes, shackles, lifting points on ramp/release gear.</td></tr>
      <tr><td><strong>Annually</strong></td><td>Full inspection by competent person/class surveyor. Service engine. Test hydrostatic release, EPIRB, SART. Replace expired items. Check hull integrity.</td></tr>
      <tr><td><strong>5 Yearly</strong></td><td>Thorough examination of all falls, davit components. Load test of hooks and release mechanism. Class survey.</td></tr>
    </table>

    <strong>B) Secondary Means of Lowering:</strong>
    <p class="n-p">SOLAS requires every free fall lifeboat to have a secondary means of launching. Needed if free fall is not possible/safe (severe list making trajectory dangerous, injured crew, blocked ramp).<br>
    Typically a set of <strong>FALLS</strong> (wire ropes) and davit/sheaves connected to winch or manual release.<br>
    Must launch boat with full complement. Operated by crew remaining on deck. Can be used by one person. Tested during 3-monthly drills.</p>

    <strong>C) Lifeboat Drills - SOLAS Requirements:</strong>
    <p class="n-p">Drills keep crew familiar with duties, test equipment, ensure launch within required time.</p>
    <table class="n-table">
      <tr><th>Drill/Test</th><th>SOLAS Requirement</th><th>Notes</th></tr>
      <tr><td>Abandon ship drill</td><td class="hl"><strong>Monthly</strong> - (Within <span class="n-val">24 hours</span> of leaving port if ><span class="n-val">25%</span> crew changed)</td><td>All crew participate. Muster within <span class="n-val">10 minutes</span>.</td></tr>
      <tr><td>Lifeboat engine run</td><td class="hl"><strong>Weekly</strong> - minimum <span class="n-val">3 minutes</span> in gear</td><td>Check oil, fuel, cooling. Record in logbook.</td></tr>
      <tr><td>Lifeboat lowered to water</td><td class="hl"><strong>Every 3 months</strong> - must be manoeuvred</td><td>Can use secondary means for free fall. All crew participate.</td></tr>
      <tr><td>Free fall launch</td><td class="hl"><strong>Every 6 months</strong> - actual OR simulated</td><td>Simulated using secondary means acceptable.</td></tr>
      <tr><td>Rescue boat drill</td><td class="hl"><strong>Monthly</strong></td><td>Launch and recovery practice (includes person recovery dummy).</td></tr>
      <tr><td>Time requirement</td><td class="hl">Muster station within <strong><span class="n-val">10 minutes</span></strong> of alarm</td><td>Time to board and lower: 10 mins from muster to waterborne.</td></tr>
      <tr><td>Logbook recording</td><td class="hl">All drills must be recorded in official logbook</td><td>Date, time, type, participants, defects found.</td></tr>
    </table>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>KEY EXAM POINTS (LIFEBOATS):</strong><br>
  • Gravity davit hoisting: MAXIMUM <span class="n-val">30 MINUTES</span> with full complement - SOLAS requirement.<br>
  • Muster station: all crew within <span class="n-val">10 MINUTES</span> of alarm.<br>
  • Centrifugal brake: most important safety feature - prevents free fall of conventional lifeboat.<br>
  • On-load release: hydrostatic interlock prevents accidental release at height.<br>
  • Engine run: WEEKLY minimum <span class="n-val">3 minutes</span> in gear.<br>
  • Lowering to water: EVERY <span class="n-val">3 MONTHS</span> - must be manoeuvred.<br>
  • Free fall actual/simulated: EVERY <span class="n-val">6 MONTHS</span>.<br>
  • Abandon ship drill: MONTHLY (within <span class="n-val">24 hours</span> of leaving port if ><span class="n-val">25%</span> crew changed).<br>
  • Secondary means: mandatory for ALL free fall lifeboats - for situations where free fall is not safe.</div></div>
  
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: Lifeboat Drill Frequencies</strong><br>
  W-M-3M-6M: Weekly (engine <span class="n-val">3 min</span>), Monthly (abandon ship drill), Every 3 Months (to water), Every 6 Months (free fall).</div></div>

  <!-- ==========================================
       3. SAFETY OF NAVIGATION
       ========================================== -->
  <div class="n-h1" id="s-nav">🧭 3. SAFETY OF NAVIGATION - BNWAS, LRIT AND VDR</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">
    <strong>Asked in:</strong> 2019/JAN, 2019/APR, 2019/JUL, 2019/DEC, 2021/MAR, 2021/NOV, 2022/APR, 2022/JUN, 2023/SEP, 2025/FEB, 2025/JUN, 2025/JUL, 2025/OCT - asked in almost every paper<br><br>
    <strong>Regulation:</strong> SOLAS Chapter V - Safety of Navigation | Reg 19 (navigational systems) | Reg 19-1 (LRIT) | Reg 19-2 (BNWAS) | Reg 20 (VDR) | Reg 20-1 (S-VDR)
  </div></div>

  <div class="n-card">
    <p class="n-p"><strong>Introduction - SOLAS Chapter V:</strong> Deals with navigational equipment, watchkeeping, and safety procedures. Applies to ALL ships on ALL voyages (even domestic). BNWAS, LRIT, and VDR/S-VDR were introduced in response to accidents to improve watchkeeping monitoring and casualty investigation.</p>
  </div>

  <div class="n-h2">A) BNWAS - Bridge Navigational Watch Alarm System</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Q: Briefly discuss with respect to safety of navigation - a) Bridge Navigation Watchkeeping Alarm System (BNWAS) (6 marks)</div></div>
  <div class="n-card">
    <p class="n-p"><strong>Background & Purpose:</strong> Introduced due to accidents caused by incapacitated OOW (medical, asleep, distracted) with no alarm raised. BNWAS monitors alertness of OOW during bridge watchkeeping. Continuously requires OOW to prove they are conscious by acknowledging periodic signals. Esculates to wake OOW or summon assistance.</p>
    
    <strong>How BNWAS Works - Three Stage Escalation:</strong>
    <ul class="n-list">
      <li><strong>Stage 0: DORMANT PERIOD:</strong> Set dormant period (typically <span class="n-val">3-12 minutes</span>). No acknowledgement required.</li>
      <li><strong>Stage 1: BRIDGE ALARM:</strong> After dormant period, audible/visual signal on bridge. OOW must acknowledge within set time (typically <span class="n-val">15 seconds</span> to <span class="n-val">3 minutes</span>).</li>
      <li><strong>Stage 2: OFFICER/MASTER CABINS:</strong> If Stage 1 not acknowledged, alarm escalates to designated cabins (Master, Chief Officer, etc.) to investigate.</li>
      <li><strong>Stage 3: GENERAL ALARM:</strong> If Stage 2 not acknowledged, system activates ship's general alarm - alerting all crew to potential incapacitation.</li>
    </ul>

    <strong>Acknowledgement Methods:</strong> Pressing dedicated buttons, operating helm controls, operating radar/ECDIS controls, movement detection (infrared).

    <strong>SOLAS Requirements:</strong>
    <ul class="n-list">
      <li>Mandatory for all ships <span class="n-val">150 GT</span>+ on international voyages.</li>
      <li>Must be in CONTINUOUS OPERATION during all sea watches.</li>
      <li>Cannot be disabled by watch officer - only MASTER can switch to standby/off.</li>
      <li>Three-stage escalation. Must be fail-safe (power failure activates alarm).</li>
    </ul>
  </div>

  <div class="n-h2">B) LRIT - Long Range Identification and Tracking</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Q: Long Range Identification and Tracking of ships (LRIT) - 5 marks</div></div>
  <div class="n-card">
    <p class="n-p"><strong>Background & Purpose:</strong> Introduced post-9/11 for global tracking beyond AIS range (<span class="n-val">40-70 nm</span>). Provides automatic, mandatory position reporting to shore authorities via satellite to authorised parties (flag, coastal, port states).</p>
    
    <strong>How LRIT Works:</strong>
    <ul class="n-list">
      <li>Ship's LRIT system (Inmarsat-C terminal) automatically polls GPS position.</li>
      <li>Position, ship identity (IMO num), date/time transmitted to LRIT Data Centre via SATELLITE every <strong><span class="n-val">6 HOURS</span></strong> automatically.</li>
      <li>In emergencies: SAR authorities can request POLLING ON DEMAND (as frequent as every <span class="n-val">15 minutes</span>).</li>
    </ul>

    <strong>Who Receives LRIT Data:</strong>
    <table class="n-table">
      <tr><th>Authority</th><th>Data Access</th><th>Purpose</th></tr>
      <tr><td>Flag State</td><td>All positions of own flagged ships at all times</td><td>Oversight of fleet</td></tr>
      <tr><td>Coastal State</td><td>Positions of ships within <strong><span class="n-val">1000 nm</span></strong> of coastline</td><td>Monitor approaching ships</td></tr>
      <tr><td>Port State</td><td>Positions of ships up to <strong><span class="n-val">24 hours</span></strong> before arrival</td><td>Advance notice for port planning</td></tr>
      <tr><td>SAR Authorities</td><td>On-demand polling - up to every <strong><span class="n-val">15 minutes</span></strong></td><td>Search and rescue operations</td></tr>
    </table>

    <strong>SOLAS Requirements:</strong> Mandatory for all international voyages (passenger, cargo <span class="n-val">300 GT</span>+). Operational 24/7. Cannot turn off without flag state authorisation. Failure to transmit is a violation.
  </div>

  <div class="n-h2">C) VDR and S-VDR - Voyage Data Recorder</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Q: Voyage Simplified Voyage Recorder (VDR/S-VDR) - 5 marks</div></div>
  <div class="n-card">
    <p class="n-p"><strong>Background & Purpose:</strong> Marine 'black box'. Introduced to provide objective, tamper-proof record of events before an accident for accurate investigation and root cause identification.</p>
    
    <strong>Data Recorded by VDR:</strong>
    <ul class="n-list">
      <li><strong>Navigation:</strong> Position (GPS), speed, heading (gyro), depth (echo sounder) - continuous.</li>
      <li><strong>Bridge audio:</strong> All conversations, telephones, radio comms - continuous (most valuable record).</li>
      <li><strong>Radar:</strong> Radar picture including targets - continuous video.</li>
      <li><strong>Machinery/Safety:</strong> Rudder angle, engine telegraph, thruster status, watertight doors, all alarms.</li>
      <li><strong>Weather:</strong> Wind speed/direction.</li>
    </ul>

    <strong>VDR vs S-VDR:</strong>
    <table class="n-table">
      <tr><th>Feature</th><th>VDR (Full)</th><th>S-VDR (Simplified)</th></tr>
      <tr><td><strong>Applies to</strong></td><td>Passenger & cargo <span class="n-val">3000 GT</span>+ built AFTER 1 July 2002</td><td>Cargo <span class="n-val">3000 GT</span>+ built BEFORE 1 July 2002 (retrofitted)</td></tr>
      <tr><td><strong>Data recorded</strong></td><td>Full data set including radar image & bridge audio</td><td>Simplified data set (may exclude radar image)</td></tr>
      <tr><td><strong>Storage capsule</strong></td><td>Float-free, highly visible. Survives: <span class="n-val">6000m</span> depth, <span class="n-val">1100°C</span> fire for 1 hr, 6 tonne crush</td><td>Fixed or float-free capsule. Similar survivability.</td></tr>
      <tr><td><strong>Data retention</strong></td><td class="hl">Minimum <strong><span class="n-val">12 hours</span></strong> continuously overwritten</td><td class="hl">Minimum <strong><span class="n-val">12 hours</span></strong></td></tr>
    </table>

    <strong>Annual Testing Requirements:</strong> Annual performance test by an <strong>APPROVED SERVICE PROVIDER</strong> (not crew). All sensors verified. Data capsule integrity inspected. Playback test. Test certificate issued/retained. Must repair before departure if failed.
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>KEY EXAM POINTS (NAVIGATION):</strong><br>
  • BNWAS: THREE stages - Bridge (Stage 1), Officer cabins (Stage 2), General alarm (Stage 3).<br>
  • BNWAS: ships <span class="n-val">150 GT</span>+ on international voyages | Cannot be disabled by watch officer - Master only.<br>
  • LRIT: transmits position every <span class="n-val">6 HOURS</span> via satellite automatically.<br>
  • LRIT: coastal state within <span class="n-val">1000 nm</span> | Port state <span class="n-val">24 hours</span> before arrival | SAR every <span class="n-val">15 minutes</span> on demand.<br>
  • VDR records MINIMUM <span class="n-val">12 HOURS</span> - continuously overwritten - latest 12 hours always retained.<br>
  • VDR annual performance test: by APPROVED service provider - not crew.<br>
  • VDR capsule survives: <span class="n-val">6000m</span> depth, <span class="n-val">1100°C</span> fire for 1 hour, 6 tonne crush.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: BNWAS Stages</strong><br>
  B-O-G: Bridge alarm (Stage 1 - OOW must acknowledge), Officer cabins (Stage 2), General alarm (Stage 3) - escalates if not acknowledged.</div></div>

  <!-- ==========================================
       4. STEERING GEAR
       ========================================== -->
  <div class="n-h1" id="s-steering">⚙️ 4. STEERING GEAR - TESTS, DRILLS AND REQUIREMENTS</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">
    <strong>Asked in:</strong> 2023/JAN/Q9, 2024/NOV/Q9 - 6+5+5 marks (16 total)<br><br>
    <strong>Regulation:</strong> SOLAS Chapter II-1 Reg 26, 29 - Steering gear requirements and testing | SOLAS Chapter V Reg 26 - Steering gear: testing and drills
  </div></div>

  <div class="n-card">
    <p class="n-p"><strong>Introduction:</strong> Loss of steering is highly dangerous. SOLAS Ch II-1 specifies design/redundancy. Ch V specifies testing/drills. Testing within <span class="n-val">12 hours</span> before departure catches failures before sailing.</p>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Q: With reference to the 1978 SOLAS protocol which outlines mandatory requirements for steering gear tests and drills: a) Describe the test procedure to be carried out within 12 hours before departure on a sea voyage (6). b) Describe the emergency steering drills that must take place at least every 3 months (5). c) State how often the tests in (a) and the drill in (b) should be carried out for ships which regularly engage on voyages of short duration (5). - 16 marks | 2023/JAN/Q9, 2024/NOV/Q9</div></div>

  <div class="n-h2">A) Test Procedure Within 12 Hours Before Departure (6 marks)</div>
  <div class="n-card">
    <p class="n-p">SOLAS Chapter V Regulation 26.1 requires the following checks to be completed within <strong><span class="n-val">12 hours</span></strong> before departure on every voyage. Results entered in official logbook.</p>
    <ul class="n-list">
      <li><strong>CHECK MAIN STEERING GEAR:</strong> Operate from bridge. Order helm hard port/starboard and midships. Verify rudder responds and indicator matches actual position.</li>
      <li><strong>CHECK AUXILIARY STEERING GEAR:</strong> Switch to auxiliary, operate from bridge, verify function.</li>
      <li><strong>CHECK REMOTE STEERING FROM BRIDGE WINGS:</strong> Test from port and starboard wing positions. Verify control transfer and response.</li>
      <li><strong>CHECK RUDDER ANGLE INDICATOR:</strong> Compare reading at bridge, steering gear room, and actual rudder position. Must agree at hard over and midships.</li>
      <li><strong>CHECK RATE OF TURN INDICATOR:</strong> Verify functioning if fitted.</li>
      <li><strong>CHECK COMMUNICATION:</strong> Test all systems (telephone, telegraph) between bridge and steering gear room. Must be reliable two-way.</li>
      <li><strong>CHECK EMERGENCY LIGHTING:</strong> Verify operational in steering gear room.</li>
      <li><strong>CHECK HYDRAULIC OIL LEVEL:</strong> Verify level, look for leakage.</li>
      <li><strong>CHECK OVERRIDE CONTROLS:</strong> Verify operational and marked.</li>
      <li><strong>RECORD IN LOGBOOK:</strong> All checks, times, results recorded and signed.</li>
    </ul>
  </div>

  <div class="n-h2">B) Emergency Steering Drills - Every 3 Months (5 marks)</div>
  <div class="n-card">
    <p class="n-p">SOLAS Chapter V Regulation 26.4 requires emergency steering drills at least every <strong><span class="n-val">THREE MONTHS</span></strong>. Purpose is to train crew to operate from alternative positions.</p>
    <ul class="n-list">
      <li><strong>NOTIFICATION:</strong> Notify relevant personnel (navigating/engineer officers, crew).</li>
      <li><strong>TRANSFER TO STEERING GEAR ROOM:</strong> Transfer control from bridge to LOCAL CONTROL in steering gear room (simulates main failure mode).</li>
      <li><strong>COMMUNICATION ESTABLISHED:</strong> Bridge gives orders by phone/radio. Room executes manually.</li>
      <li><strong>STEERING FROM LOCAL CONTROL:</strong> Conduct steering using local control (typically operating hydraulic controls directly).</li>
      <li><strong>PRACTICE CHANGEOVER PROCEDURES:</strong> Main to auxiliary, electric to manual, bridge to aft steering.</li>
      <li><strong>PARTICIPATION:</strong> All officers and relevant crew with steering gear duties on muster list must participate.</li>
      <li><strong>RECORD IN LOGBOOK:</strong> Date, time, participants, observations, deficiencies.</li>
    </ul>
  </div>

  <div class="n-h2">C) Tests and Drills for Short Duration Voyages (5 marks)</div>
  <div class="n-card">
    <p class="n-p">For ships regularly engaged in short duration voyages (multiple departures within a 12-hour period, like ferries):</p>
    <ul class="n-list">
      <li>Pre-departure test may be conducted AT LEAST ONCE PER WEEK instead of before every departure.</li>
      <li>The weekly test must be as comprehensive as the pre-departure test.</li>
      <li>If there is a gap of 12 hours or more between voyages, the full test must be done before departure.</li>
      <li>Emergency steering drills: still every 3 months (same requirement applies).</li>
      <li>All tests and drills must still be recorded in logbook.</li>
    </ul>
  </div>

  <div class="n-h2">SOLAS Construction Requirements for Steering Gear</div>
  <div class="n-card">
    <ul class="n-list">
      <li><strong>Main steering gear:</strong> must put rudder from 35 degrees one side to 30 degrees other side in <strong>NOT MORE THAN <span class="n-val">28 SECONDS</span></strong> at maximum ahead service speed.</li>
      <li><strong>Auxiliary steering gear:</strong> must be capable of steering ship in emergency.</li>
      <li><strong>Power-operated steering gear:</strong> must have at least TWO INDEPENDENT power units.</li>
      <li><strong>Automatic restart:</strong> If one power unit fails, the other must automatically start and restore steering within <span class="n-val">45 seconds</span>.</li>
      <li>High water level alarm in steering gear room - detects flooding.</li>
      <li>Accessible from weather deck without going through interior spaces.</li>
    </ul>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>KEY EXAM POINTS (STEERING GEAR):</strong><br>
  • Pre-departure test: within <span class="n-val">12 HOURS</span> before departure - check main, aux, wings, indicators, comms.<br>
  • Emergency steering drill: every <span class="n-val">3 MONTHS</span> minimum - transfer to local control.<br>
  • Short voyage ships: weekly test acceptable.<br>
  • Main steering gear: 35 to 30 degrees in <span class="n-val">28 SECONDS</span> at max speed.<br>
  • Two independent power units required. Automatic restart of second unit within <span class="n-val">45 seconds</span>.<br>
  • All tests and drills MUST be recorded in official logbook.</div></div>
  
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: Steering Gear Tests</strong><br>
  12H-3M-W: <span class="n-val">12 Hours</span> before departure (full test), <span class="n-val">3 Months</span> (emergency drill), Weekly (short voyage ships).</div></div>

  <!-- ==========================================
       5. ELECTRICAL SERVICES & CABLES
       ========================================== -->
  <div class="n-h1" id="s-electrical">🔌 5. ESSENTIAL ELECTRICAL SERVICES AND FIRE RESISTANT CABLES</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">
    <strong>Asked in:</strong> 2025/FEB/Q1, 2025/JUL/Q1 - 5+5+6 marks (16 total)<br><br>
    <strong>Regulation:</strong> SOLAS Chapter II-1 Reg 41, 42, 43, 44 - Emergency electrical power | SOLAS Chapter II-2 - Fire resistant cables for essential services | IEC 60092 Series
  </div></div>

  <div class="n-card">
    <p class="n-p"><strong>Introduction:</strong> At sea, crew must remain on ship to fight fire. Certain electrical services must remain operational EVEN when there is a fire. Ch II-1 specifies essential services. Ch II-2 requires cables for these services to be fire resistant so they do not fail and disconnect the services.</p>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Q: a) State essential electrical services on board that are able to be operable under fire conditions (5). b) Explain how electric cables for the essential services in part (a) pass through bulkheads whilst maintaining gas tight and watertight integrity (5). c) State the requirements for the cables which supply electrically driven emergency fire pumps (6). - 16 marks</div></div>

  <div class="n-h2">A) Essential Electrical Services - Must Remain Under Fire Conditions (5 marks)</div>
  <div class="n-grid">
    <div class="n-card">
      <div class="card-title">Navigation & Lifesaving</div>
      <div class="card-desc">
        • Navigation lights<br>
        • All navigational aids (radar, ECDIS, GPS, echo sounder, gyrocompass)<br>
        • Daylight signalling lamp and whistle<br>
        • Emergency lighting (accommodation, escape routes, muster stations, machinery spaces)<br>
        • Lifeboat launching equipment (if electric)<br>
        • General alarm system
      </div>
    </div>
    <div class="n-card">
      <div class="card-title">Comms & Safety/Firefighting</div>
      <div class="card-desc">
        • GMDSS equipment (VHF, MF/HF, EPIRB, SART)<br>
        • Internal communications (PA system, telephones, telegraph)<br>
        • Ship-to-shore communication<br>
        • Fire detection and alarm system<br>
        • Emergency fire pump<br>
        • Sprinkler system pump<br>
        • Fixed firefighting system controls (CO2, foam, inert gas)<br>
        • Fire door control and indicators
      </div>
    </div>
    <div class="n-card" style="grid-column: span 2">
      <div class="card-title">Flooding and Damage Control</div>
      <div class="card-desc">• Emergency bilge pump • Watertight door indicators/controls • Bilge level alarms</div>
    </div>
  </div>

  <div class="n-h2">B) How Essential Service Cables Pass Through Bulkheads (5 marks)</div>
  <div class="n-card">
    <p class="n-p">Fire divisions (A/B-class bulkheads) prevent fire/smoke spread. Cables passing through must use approved transits so the penetration doesn't become a weak point.</p>
    <ul class="n-list">
      <li><strong>APPROVED CABLE TRANSIT SYSTEMS:</strong> Specifically designed fittings to maintain fire rating of bulkhead.</li>
      <li><strong>INTUMESCENT MATERIAL:</strong> Most common sealing method. Expands rapidly when heated to fill gaps around cables, providing fire/smoke/gas-tight seal for rated period (30/60 mins).</li>
      <li><strong>CERAMIC WOOL / MINERAL WOOL:</strong> High temp resistant material used with or instead of intumescent material.</li>
      <li><strong>MAINTAIN SAME FIRE RATING:</strong> Transit must maintain SAME fire rating as bulkhead (e.g., A-60 bulkhead requires A-60 rated transit).</li>
      <li><strong>WATERTIGHT AND GAS-TIGHT INTEGRITY:</strong> Transits through watertight bulkheads must remain watertight under pressure.</li>
      <li><strong>MINIMISE PENETRATIONS:</strong> Keep to ABSOLUTE MINIMUM. Group cables through few transits.</li>
      <li><strong>RECORD ON FIRE CONTROL PLAN:</strong> All transits must be recorded for firefighters.</li>
      <li><strong>REGULAR INSPECTION:</strong> Check seal undamaged, no gaps from added/removed cables.</li>
    </ul>
  </div>

  <div class="n-h2">C) Requirements for Cables Supplying Emergency Fire Pumps (6 marks)</div>
  <div class="n-card">
    <p class="n-p">The emergency fire pump provides water when main fire pump is unavailable (e.g., engine room on fire). Its electrical supply must have special properties to remain available.</p>
    <ul class="n-list">
      <li><strong>Requirement 1 - FIRE RESISTANT CABLES:</strong> Must maintain electrical integrity and continue to supply power even when directly exposed to fire (different from fire retardant).</li>
      <li><strong>Requirement 2 - SEPARATE ROUTING:</strong> Must be routed SEPARATELY from main fire pump cables to ensure a single fire doesn't destroy both supplies. Keep away from engine room.</li>
      <li><strong>Requirement 3 - ROUTE AWAY FROM HIGH-RISK AREAS:</strong> Route away from engine room, galley, paint store. Prefer accessible deck spaces/accommodation (lower risk).</li>
      <li><strong>Requirement 4 - CLEARLY IDENTIFIED:</strong> Distinctively marked throughout length for maintenance/inspection.</li>
      <li><strong>Requirement 5 - INDEPENDENCE:</strong> Pump and supply completely independent of main machinery space (operable if ER inaccessible).</li>
      <li><strong>Requirement 6 - POWERED FROM EMERGENCY SWITCHBOARD:</strong> Receives power from emergency generator if main power fails.</li>
      <li><strong>Requirement 7 - EMERGENCY SWITCHBOARD LOCATION:</strong> ESB and emergency generator located ABOVE THE BULKHEAD DECK outside engine room.</li>
    </ul>
  </div>

  <div class="n-h2">The Three Types of Marine Cable</div>
  <div class="n-card">
    <table class="n-table">
      <tr><th>Cable Type</th><th>Property</th><th>Used For</th></tr>
      <tr><td>Fire Retardant</td><td>Does not spread flame - self-extinguishing. Will eventually fail in direct fire.</td><td>General use throughout ship for non-essential circuits.</td></tr>
      <tr><td class="hl"><strong>Fire Resistant</strong></td><td class="hl">Maintains electrical integrity when exposed to fire for specified period.</td><td class="hl">Essential services - emergency fire pump, fire detection, emergency lighting, GMDSS.</td></tr>
      <tr><td>LSOH (Low Smoke Zero Halogen)</td><td>No significant smoke/toxic halogen gases when burning.</td><td>Accommodation, escape routes - minimise toxic hazard to evacuees.</td></tr>
    </table>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>KEY EXAM POINTS (ELECTRICAL):</strong><br>
  • Essential services under fire: nav lights, GMDSS, fire detection, emergency fire pump, emergency lighting, watertight doors.<br>
  • Cable transits: intumescent material + ceramic wool - MUST maintain SAME fire rating as the bulkhead (A-60 needs A-60).<br>
  • Emergency fire pump cable: FIRE RESISTANT (not just retardant), separate routing, away from machinery spaces.<br>
  • Powered from EMERGENCY SWITCHBOARD - independent of main switchboard.<br>
  • Cable types: Fire Retardant (general), Fire Resistant (essential services), LSOH (accommodation).<br>
  • Minimise cable penetrations through fire divisions.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: Cable Types</strong><br>
  Retardant = does not spread flame | Resistant = maintains circuit in fire | LSOH = no toxic smoke | Essential services use RESISTANT cables.</div></div>

  <!-- ==========================================
       6. SHORE ELECTRICAL SUPPLY
       ========================================== -->
  <div class="n-h1" id="s-shore">🔌 6. SHORE ELECTRICAL SUPPLY CONNECTION</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">
    <strong>Asked in:</strong> 2023/FEB/Q1, 2023/APR/Q3, 2023/JUN/Q3, 2025/SEP/Q3, 2025/NOV/Q3 - 8+8 marks (16 total)<br><br>
    <strong>Regulation:</strong> SOLAS Chapter II-1 Reg 11 - Shore connection | IEC 60092-502 | IEC 60309 (international shore connection standard)
  </div></div>

  <div class="n-card">
    <p class="n-p"><strong>Introduction:</strong> Supplying ship from shore reduces fuel consumption, emissions, and noise, and allows generator servicing. However, shore supply must be compatible (voltage, frequency, phase sequence). Mismatches cause serious damage and hazards.</p>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Q: With reference to the provision of a shore electrical supply to a ship: a) Sketch an arrangement for taking AC shore supply and checks to be carried out prior taking shore connection (8). b) Describe the methods of safely connecting the arrangement sketched in (a) to the shore supply (8). - 16 marks</div></div>

  <div class="n-h2">A) Arrangement and Pre-Connection Checks (8 marks)</div>
  <div class="n-card">
    <strong>Components of Shore Connection Arrangement (Sketch Description):</strong>
    <ul class="n-list">
      <li><strong>Shore power cable</strong> - heavy duty flexible cable, sufficient rating for full ship load.</li>
      <li><strong>International shore connection socket/inlet</strong> - standardised flange fitting (IEC 60309).</li>
      <li><strong>Shore connection box</strong> - on deck, contains connection point, cover, cable support.</li>
      <li><strong>Isolation switch/circuit breaker</strong> - on ship side to isolate shore supply without disconnecting cable.</li>
      <li><strong>Voltmeter & Frequency meter</strong> - shows incoming shore voltage and frequency.</li>
      <li><strong>Phase sequence indicator</strong> - confirms phase rotation matches ship's system.</li>
      <li><strong>Synchroscope</strong> - for parallel operation with ship's generators.</li>
      <li><strong>Shore supply circuit breaker</strong> - on main switchboard (final switch to bus bars).</li>
      <li><strong>Reverse power relay</strong> - prevents ship power feeding back to shore grid.</li>
      <li><strong>Earth connection</strong> - safety earth from shore to ship's hull.</li>
    </ul>

    <strong>Checks Before Taking Shore Connection:</strong>
    <ul class="n-list">
      <li><strong>Check 1: VERIFY SHORE VOLTAGE:</strong> Must match ship's system (e.g., 440V vs 380V). Check using voltmeter at shore connection box.</li>
      <li><strong>Check 2: VERIFY SHORE FREQUENCY:</strong> Must match (50 Hz vs 60 Hz). 50 Hz equipment on 60 Hz runs too fast (overheating/damage). 60 Hz on 50 Hz runs too slow (overheating).</li>
      <li><strong>Check 3: CHECK PHASE SEQUENCE:</strong> Must match ship's system (A-B-C). Incorrect sequence causes ALL 3-phase motors to run in REVERSE (dangerous for pumps/fans). Use indicator.</li>
      <li><strong>Check 4: INSPECT CABLE CONDITION:</strong> Check for physical damage (cuts, crushing, bare conductors). Check rating and connectors.</li>
      <li><strong>Check 5: ENSURE EARTH CONNECTION:</strong> Verify earth (protective conductor) will be made. Earth MUST be connected before live conductors are energised.</li>
      <li><strong>Check 6: CHECK SHIP'S GENERATOR STATUS:</strong> Decide if shutting down (shed non-essential loads) or paralleling (prepare synchronising equipment).</li>
      <li><strong>Check 7: CHECK REVERSE POWER RELAY:</strong> Ensure set and operational to prevent backfeed.</li>
    </ul>
  </div>

  <div class="n-h2">B) Safe Connection Procedure (8 marks)</div>
  <div class="n-card">
    <strong>Procedure for Transfer to Shore Power (Shutting Down Ship's Generators):</strong>
    <ol class="n-steps">
      <li><strong>PREPARE SHIP:</strong> Reduce generator load to minimum. Shed non-essential loads. Inform engine room.</li>
      <li><strong>CONNECT EARTH FIRST:</strong> Connect earth conductor between shore supply and ship's hull BEFORE making live connections (prevents static, ensures safety).</li>
      <li><strong>CONNECT CABLE:</strong> Connect shore cable - earth first, then live conductors. Ensure tight connections (loose causes arcing/heat).</li>
      <li><strong>VERIFY PARAMETERS:</strong> At connection box, measure/confirm: voltage correct, frequency correct, phase sequence correct.</li>
      <li><strong>CLOSE SHORE ISOLATING SWITCH:</strong> Close switch on connection box (voltage now at main breaker but not bus bars).</li>
      <li><strong>PARALLEL WITH GENERATORS (if applicable):</strong> Use synchroscope to match shore voltage, frequency, and phase angle to running generator before closing shore breaker.</li>
      <li><strong>CLOSE SHORE CIRCUIT BREAKER:</strong> Close breaker on main switchboard (power now on bus bars).</li>
      <li><strong>TRANSFER LOAD:</strong> Gradually increase load on shore supply while reducing generator load (or in one step if not paralleling).</li>
      <li><strong>OPEN GENERATOR CIRCUIT BREAKER:</strong> Shut down generator.</li>
      <li><strong>MONITOR:</strong> Monitor shore voltage, frequency, current continuously (can fail without warning).</li>
    </ol>

    <strong>Important Safety Points:</strong>
    <ul class="n-list">
      <li>NEVER connect without verifying voltage, frequency, phase sequence (mismatches cause damage/hazards).</li>
      <li class="bad"><strong>EARTH FIRST</strong> - always connect earth before live, disconnect live before earth.</li>
      <li class="bad"><strong>Phase sequence error</strong> causes ALL motors to reverse (bilge pumps, fire pumps) - serious safety risk.</li>
      <li>Post <strong>WARNING SIGNS</strong> clearly visible: 'SHORE POWER CONNECTED - DO NOT START GENERATORS'.</li>
      <li>When disconnecting: reverse the procedure - restore generator, transfer load, disconnect shore (live first, earth last).</li>
      <li>KEEP RECORDS in machinery logbook.</li>
    </ul>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>KEY EXAM POINTS (SHORE CONNECTION):</strong><br>
  • Verify THREE things before connecting: Voltage, Frequency, Phase sequence.<br>
  • EARTH FIRST - connect earth before live, disconnect live before earth.<br>
  • Phase sequence error: ALL motors run in REVERSE - dangerous.<br>
  • Reverse power relay: prevents ship's generators accidentally supplying shore grid.<br>
  • Post WARNING SIGNS: shore power connected - do not start generators.<br>
  • IEC 60309 - standard international shore connection plug and socket specification.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: Shore Connection Checks</strong><br>
  V-F-P-C-E-Warning: Voltage, Frequency, Phase sequence, Cable condition, Earth first, Warning signs posted.</div></div>

  <!-- ==========================================
       7. PORT STATE CONTROL
       ========================================== -->
  <div class="n-h1" id="s-psc">🚢 7. PORT STATE CONTROL (PSC)</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">
    <strong>Asked in:</strong> 2024/JAN/Q7, 2024/MAR/Q7, 2025/MAR/Q7 - 8+8 marks (16 total)<br><br>
    <strong>Regulation:</strong> SOLAS Chapter I Reg 19 - Control of ships by port states | Paris MOU, Tokyo MOU, Indian Ocean MOU | IMO Res. A.1120(30)
  </div></div>

  <div class="n-card">
    <p class="n-p"><strong>Introduction:</strong> PSC is the inspection regime allowing a country to inspect foreign ships in its ports to ensure they meet international standards (SOLAS, MARPOL, MLC, STCW). It is the last line of defence against substandard ships evading flag state oversight.</p>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Q: a) Explain how PSC is different from FSC/FSI. Discuss Clear Grounds under SOLAS, MARPOL and STCW with examples (16). OR b) List certificates PSC may inspect. List life-saving appliances and fire-fighting equipment likely inspected by PSCO (8+8). - 2024/MAR/Q7, 2025/MAR/Q7</div></div>

  <div class="n-h2">A) PSC vs Flag State Control (FSC/FSI) (8 marks)</div>
  <div class="n-card">
    <table class="n-table">
      <tr><th>Aspect</th><th>Port State Control (PSC)</th><th>Flag State Control/Inspection (FSC)</th></tr>
      <tr><td><strong>Who conducts it</strong></td><td>Port State (country currently visiting)</td><td>Flag State (country of registry)</td></tr>
      <tr><td><strong>Legal basis</strong></td><td>SOLAS Chapter I Reg 19</td><td>International law (sovereign responsibility)</td></tr>
      <tr><td><strong>When conducted</strong></td><td>When ship is in port of inspecting state</td><td>Periodic surveys (annual, intermediate, renewal)</td></tr>
      <tr><td><strong>Ship selection</strong></td><td>Risk-based targeting (high risk profile selected)</td><td>All ships of that flag state (mandatory)</td></tr>
      <tr><td><strong>Authority</strong></td><td class="hl">Can DETAIN ship in port until corrected. Can ban repeated offenders.</td><td>Can withdraw certificates, impose conditions, reject from register.</td></tr>
      <tr><td><strong>Certificates</strong></td><td>Does NOT issue certificates - inspects validity of existing ones.</td><td>Issues and endorses all statutory certificates.</td></tr>
      <tr><td><strong>Jurisdiction</strong></td><td>Only when ship is voluntarily in port.</td><td>Global - applies wherever flag ship operates.</td></tr>
      <tr><td><strong>Organisation</strong></td><td>Coordinated regionally through MOUs (Paris, Tokyo, Indian Ocean).</td><td>Individual flag state or delegated to Recognised Organisation (RO).</td></tr>
    </table>
    <p class="n-p" style="margin-top:8px"><strong>Regional PSC MOUs:</strong> Members share inspection data. A ship detained in one port is flagged for inspection in all MOU ports (Paris MOU = Europe, Tokyo MOU = Asia-Pacific).</p>
  </div>

  <div class="n-h2">B) Certificates PSC Officer May Inspect</div>
  <div class="n-card">
    <ul class="n-list">
      <li><strong>SOLAS Certificates:</strong> Cargo Ship Safety Construction Certificate (SCC), Safety Equipment Certificate (SEC), Safety Radio Certificate (SRC), OR combined Cargo Ship Safety Certificate. Passenger Ship Safety Certificate.</li>
      <li><strong>MARPOL Certificates:</strong> IOPP (Annex I), ISPP (Annex IV), IAPP (Annex VI).</li>
      <li><strong>Other Statutory Certificates:</strong> Load Line Certificate, Tonnage Certificate, International Ship Security Certificate (ISSC - ISPS Code), Document of Compliance (DOC - ISM for company), Safety Management Certificate (SMC - ISM for ship), Maritime Labour Certificate (MLC), Minimum Safe Manning Certificate, Officers Certificates of Competency (STCW).</li>
    </ul>
  </div>

  <div class="n-h2">C) LSA and Firefighting Equipment Inspected by PSCO</div>
  <div class="n-card">
    <table class="n-table">
      <tr><th>Equipment</th><th>What PSCO Checks</th></tr>
      <tr><td>Lifeboats</td><td>Hull condition, launching equipment, engine starts/runs, on-load release, equipment (first aid, water, flares), service records.</td></tr>
      <tr><td>Life rafts</td><td>Correct number/capacity, hydrostatic release valid, launching arrangements, service date (within 12 months).</td></tr>
      <tr><td>Immersion suits</td><td>Correct quantity, seals intact, correct sizes, service date, crew can don within 2 minutes.</td></tr>
      <tr><td>Lifejackets</td><td>Quantity (plus child), condition, light/whistle functional, accessible at muster stations.</td></tr>
      <tr><td>Rescue boat</td><td>Operational, engine starts, recovery equipment functional, manning list identified.</td></tr>
      <tr><td>EPIRBs/SARTs</td><td>Annual service/battery date, registered with COSPAS-SARSAT, hydrostatic release.</td></tr>
      <tr><td>Fire extinguishers</td><td>Correct type/quantity, service date, pressure gauges correct, unobstructed.</td></tr>
      <tr><td>Fire detection</td><td>Operational (test points), alarm panel functional, zone indicators correct.</td></tr>
      <tr><td>Fixed firefighting</td><td>(CO2, foam) Cylinder weights within 10%, alarms operational, pipework undamaged.</td></tr>
      <tr><td>Hoses & Hydrants</td><td>Correct number/length, compatible connections, pressure tested, unobstructed.</td></tr>
      <tr><td>BA sets</td><td>Quantity, cylinder pressures, mask seals undamaged, annual service date.</td></tr>
    </table>
  </div>

  <div class="n-h2">D) Clear Grounds for Detention</div>
  <div class="n-card">
    <p class="n-p">PSC can DETAIN a ship when deficiencies pose a danger to safety, health or environment. The ship cannot leave port until deficiencies are corrected.</p>
    <ul class="n-list">
      <li>Certificates missing, invalid or expired.</li>
      <li class="bad">Essential equipment not operational - main engine, steering gear, fire pumps, bilge pumps.</li>
      <li>Life-saving appliances defective or not properly maintained.</li>
      <li>Manning below minimum safe manning level.</li>
      <li class="bad">Crew cannot demonstrate emergency procedures or their duties - failure to demonstrate competence.</li>
      <li>Structural damage affecting seaworthiness.</li>
      <li>Oil record book not maintained or showing evidence of illegal discharge.</li>
      <li>ISM non-compliances - no SMS, certificates expired.</li>
      <li>MLC violations - inadequate accommodation, unpaid crew, excessive working hours.</li>
    </ul>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>KEY EXAM POINTS (PSC):</strong><br>
  • PSC: port country inspects visiting foreign ships | FSC: flag country inspects its own ships.<br>
  • PSC can DETAIN ship in port - cannot leave until deficiencies corrected.<br>
  • Key certificates: SEC, SRC, SCC, IOPP, Load Line, DOC/SMC (ISM), ISSC, MLC, Manning.<br>
  • Detention grounds: invalid certificates, defective essential equipment, crew unable to demonstrate duties.<br>
  • PSC does NOT issue certificates - only verifies existing ones (Flag state issues them).</div></div>
  
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: PSC vs FSC</strong><br>
  PSC = Port State inspects visiting ships (last line of defence) | FSC = Flag State inspects own ships (primary responsibility).<br>
  <strong>Certificates PSC Checks:</strong> SSIL-DOC-IM (Safety Equipment, Safety Radio, Safety Construction, IOPP, Load Line - DOC/SMC (ISM), ISSC (security), MLC, Manning).</div></div>

  <!-- ==========================================
       8. CLASSIFICATION SOCIETIES
       ========================================== -->
  <div class="n-h1" id="s-class">📋 8. CLASSIFICATION SOCIETY - ROLE, ESP AND CONDITION OF CLASS</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">
    <strong>Asked in:</strong> 2024/JAN/Q7 - 6+5+5 marks (16 total)<br><br>
    <strong>Regulation:</strong> SOLAS Chapter I - Surveys and Certificates | IMO Resolution A.739(18) | IACS
  </div></div>

  <div class="n-card">
    <p class="n-p"><strong>Introduction:</strong> A non-governmental technical organisation establishing standards for ship construction/operation. Classification is voluntary but practically necessary for insurance/trading. Societies also act as Recognised Organisations (ROs) conducting statutory surveys for flag states.</p>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM QUESTION:</strong> Q: Write short notes on: a) Role of Classification Society acting as Recognised Organisation (6). b) Enhanced Survey Programme (ESP) and its applicability (5). c) Condition of Class (COC) (5). - 2024/JAN/Q7</div></div>

  <div class="n-h2">A) Role of Classification Society as Recognised Organisation (RO) (6 marks)</div>
  <div class="n-card">
    <p class="n-p">Under SOLAS Chapter I Reg 6, flag states can authorise classification societies to act on their behalf (as ROs) to carry out surveys and issue certificates.</p>
    <ul class="n-list">
      <li><strong>DEVELOP RULES:</strong> Develop technical rules for design, construction, equipment (hull, machinery, electrical, fire).</li>
      <li><strong>SURVEY CONSTRUCTION:</strong> Oversee construction (keel laying, frame erection, testing) to verify rules are met.</li>
      <li><strong>ISSUE CLASS CERTIFICATE:</strong> Issued when ship meets all requirements.</li>
      <li><strong>PERIODIC CLASS SURVEYS:</strong> Conduct ongoing surveys (annual, intermediate, special 5-yearly) to maintain class condition.</li>
      <li><strong>STATUTORY SURVEYS AS RO:</strong> Conduct statutory surveys (SOLAS, MARPOL, Load Lines) and issue corresponding certificates on behalf of the flag state.</li>
      <li><strong>TECHNICAL EXPERTISE:</strong> Provide advice to shipowners and flag states.</li>
    </ul>
    <p class="n-p"><em>Major IACS Members:</em> Lloyd's Register (LR), Bureau Veritas (BV), DNV, ABS, ClassNK, IRS (India).</p>
  </div>

  <div class="n-h2">B) Enhanced Survey Programme (ESP) (5 marks)</div>
  <div class="n-card">
    <p class="n-p">Introduced by IACS after structural failures of ageing bulk carriers/tankers. Found that corrosion in critical areas (ballast tanks/holds) went undetected.</p>
    <ul class="n-list">
      <li><strong>Applies to:</strong> Bulk carriers and oil tankers over <strong><span class="n-val">10 YEARS OLD</span></strong> at their class renewal (5-yearly) survey.</li>
      <li><strong>THICKNESS MEASUREMENTS:</strong> Comprehensive measurement of hull plating/frames in holds/tanks to determine corrosion rates.</li>
      <li><strong>CLOSE-UP SURVEYS:</strong> Surveyors physically enter tanks to inspect critical structural areas (wing tanks, web frames) at close range.</li>
      <li><strong>COATING ASSESSMENT:</strong> Systematic inspection of protective coatings (breakdown causes accelerated corrosion).</li>
      <li><strong>RECORDS:</strong> Comprehensive report/Thickness Measurement file maintained and available for inspection.</li>
    </ul>
  </div>

  <div class="n-h2">C) Condition of Class (COC) (5 marks)</div>
  <div class="n-card">
    <p class="n-p">A qualification attached to a class certificate requiring the shipowner to carry out specific work/submit info within a specified time limit. Used when a finding needs attention but doesn't immediately threaten safety enough to suspend class.</p>
    <ul class="n-list">
      <li><strong>When Raised:</strong> Deficiency found needing rectification, outstanding maintenance, deteriorated component requiring repair before next survey.</li>
      <li><strong>Effect:</strong> Ship <strong>RETAINS CLASS</strong> and can continue trading, but <strong>MUST complete work by the deadline</strong>.</li>
      <li>COC is recorded in register, visible to PSC (likely triggers detailed inspection).</li>
      <li class="bad"><strong>If deadline missed: CLASS IS SUSPENDED</strong>. Class certificate and statutory certificates become invalid. Ship cannot legally trade.</li>
      <li><em>COC (mandatory deadline) vs Recommendation (advisory, no deadline).</em></li>
    </ul>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>KEY EXAM POINTS (CLASSIFICATION):</strong><br>
  • Classification society: sets rules + surveys construction + issues class certificate + statutory surveys as RO.<br>
  • RO = Recognised Organisation - authorised by flag state to issue SOLAS, MARPOL certificates.<br>
  • ESP: bulk carriers and tankers over <span class="n-val">10 YEARS OLD</span> - thickness measurements, close-up surveys, coating inspection.<br>
  • COC: deficiency found - ship can trade but MUST rectify by deadline.<br>
  • COC not cleared = CLASS SUSPENDED = statutory certificates invalid = cannot trade.</div></div>
  
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>MEMORY AID: Class vs COC</strong><br>
  Class maintained = ship meets all standards | COC = deficiency found, ship trades but must fix by deadline | Suspension = deadline missed, ship stops trading.</div></div>

  <!-- ==========================================
       QUICK REFERENCE
       ========================================== -->
  <div class="n-h1" id="s-quickref">⚡ QUICK REFERENCE - ALL SOLAS KEY FIGURES</div>
  <div class="n-card">
    <table class="n-table">
      <tr><th>Topic</th><th>Key Requirement</th><th>Value / Timeframe</th></tr>
      <tr><td>Enclosed Spaces</td><td>Safe O2 range</td><td class="hl"><span class="n-val">19.5%</span> to <span class="n-val">23.5%</span></td></tr>
      <tr><td>Enclosed Spaces</td><td>Flammable gas safe limit</td><td class="hl">Below <span class="n-val">1%</span> LEL</td></tr>
      <tr><td>Enclosed Spaces</td><td>H2S safe limit</td><td class="hl">Below <span class="n-val">1 ppm</span> (short-term)</td></tr>
      <tr><td>Enclosed Spaces</td><td>CO safe limit</td><td class="hl">Below <span class="n-val">35 ppm</span> TWA</td></tr>
      <tr><td>Lifeboat drill</td><td>Abandon ship drill frequency</td><td>Monthly</td></tr>
      <tr><td>Lifeboat drill</td><td>Within 24h of sailing if crew changed</td><td>If ><span class="n-val">25%</span> crew changed since last drill</td></tr>
      <tr><td>Lifeboat</td><td>Engine run frequency</td><td>Weekly - minimum <span class="n-val">3 minutes</span> in gear</td></tr>
      <tr><td>Lifeboat</td><td>Lowering to water</td><td>Every <span class="n-val">3 months</span> minimum</td></tr>
      <tr><td>Lifeboat</td><td>Free fall launch (actual/simulated)</td><td>Every <span class="n-val">6 months</span></td></tr>
      <tr><td>Lifeboat</td><td>Muster station time</td><td class="hl">Within <span class="n-val">10 minutes</span> of alarm</td></tr>
      <tr><td>Lifeboat</td><td>Hoisting time - gravity davit</td><td class="hl">Maximum <span class="n-val">30 minutes</span> with full complement</td></tr>
      <tr><td>Steering gear</td><td>Pre-departure test</td><td class="hl">Within <span class="n-val">12 hours</span> before departure</td></tr>
      <tr><td>Steering gear</td><td>Emergency drill</td><td>Every <span class="n-val">3 months</span></td></tr>
      <tr><td>Steering gear</td><td>Hard over time (main steering)</td><td>35 to 30 degrees in <span class="n-val">28 seconds</span> at max speed</td></tr>
      <tr><td>Steering gear</td><td>Short voyage ships test</td><td>Weekly minimum</td></tr>
      <tr><td>BNWAS</td><td>Ships required on</td><td><span class="n-val">150 GT</span>+ on international voyages</td></tr>
      <tr><td>BNWAS</td><td>Who can disable</td><td class="hl">Master only - not watch officer</td></tr>
      <tr><td>LRIT</td><td>Transmission frequency</td><td class="hl">Every <span class="n-val">6 hours</span> automatically</td></tr>
      <tr><td>LRIT</td><td>Coastal state data range</td><td>Within <span class="n-val">1000 nm</span></td></tr>
      <tr><td>LRIT</td><td>Port state advance notice</td><td><span class="n-val">24 hours</span> before arrival</td></tr>
      <tr><td>LRIT</td><td>SAR polling frequency</td><td>Every <span class="n-val">15 minutes</span> on demand</td></tr>
      <tr><td>VDR</td><td>Data retention time</td><td class="hl">Minimum <span class="n-val">12 hours</span></td></tr>
      <tr><td>VDR</td><td>Annual test</td><td>By approved service provider</td></tr>
      <tr><td>VDR capsule</td><td>Depth survivability</td><td><span class="n-val">6000 metres</span></td></tr>
      <tr><td>VDR capsule</td><td>Fire survivability</td><td><span class="n-val">1100°C</span> for 1 hour</td></tr>
      <tr><td>ESP</td><td>Applies to</td><td class="hl">Bulk carriers and tankers over <span class="n-val">10 years</span> old</td></tr>
      <tr><td>COC</td><td>If not cleared</td><td class="bad">Class suspended - cannot trade</td></tr>
      <tr><td>PSC</td><td>Detention grounds</td><td class="bad">Danger to safety, health or environment</td></tr>
    </table>
  </div>

  

  </div>
</div>
</div>
`);
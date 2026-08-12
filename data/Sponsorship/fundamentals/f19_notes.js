window.loadNotes("F19", `<div class="view" id="view-notes-f19">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F19')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F19 - Batteries, UPS &amp; Lighting</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 19 of 25 · Difficulty ★★★☆☆ · Study Time 60-80 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-construction')">Lead Acid Construction</button>
    <button class="anc-btn" onclick="jumpTo('s-chemistry')">Chemistry</button>
    <button class="anc-btn" onclick="jumpTo('s-gassing')">Charging &amp; Gassing</button>
    <button class="anc-btn" onclick="jumpTo('s-sg')">Specific Gravity</button>
    <button class="anc-btn" onclick="jumpTo('s-maintenance')">Maintenance &amp; Ventilation</button>
    <button class="anc-btn" onclick="jumpTo('s-nicad-li')">Ni-Cd &amp; Lithium</button>
    <button class="anc-btn" onclick="jumpTo('s-banks')">Banks, Ah, C-rating</button>
    <button class="anc-btn" onclick="jumpTo('s-chargemethods')">Charging Methods</button>
    <button class="anc-btn" onclick="jumpTo('s-emergency')">Emergency Battery (SOLAS)</button>
    <button class="anc-btn" onclick="jumpTo('s-ups')">UPS</button>
    <button class="anc-btn" onclick="jumpTo('s-lighting')">Lighting Types</button>
    <button class="anc-btn" onclick="jumpTo('s-emlighting')">Emergency &amp; Escape Lighting</button>
    <button class="anc-btn" onclick="jumpTo('s-led')">Why LED Won</button>
    <button class="anc-btn" onclick="jumpTo('s-interview')">Interview Answers</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to describe the construction and chemistry of a lead acid battery and write its charge/discharge reaction, explain why charging produces hydrogen and why that drives battery room ventilation, explain what specific gravity tells you, describe how nickel-cadmium and lithium batteries differ from lead acid, work out bank voltage and capacity for series/parallel connections and explain C rating, distinguish trickle, boost and float charging, state in outline what SOLAS requires of the emergency source of power, explain online versus offline UPS, describe incandescent, fluorescent, HID and LED lighting including the ballast and starter, and explain why LED has displaced the older technologies at sea.</p>

  <div class="n-h1" id="s-construction">Lead Acid Battery Construction</div>
  <p class="n-p">The lead acid cell is the battery found in the largest numbers on any ship: starting batteries for the emergency generator and lifeboat engines, the emergency battery bank itself, and countless small standby supplies.</p>

  <table class="n-table">
    <tr><th>Plate</th><th>Active material</th><th>Role</th></tr>
    <tr><td><strong>Positive</strong></td><td>Lead dioxide, PbO<sub>2</sub> (dark brown)</td><td>Oxidising electrode</td></tr>
    <tr><td><strong>Negative</strong></td><td>Sponge lead, Pb (grey)</td><td>Reducing electrode</td></tr>
  </table>
  <p class="n-p">Each plate is a lead-antimony or lead-calcium alloy grid giving mechanical strength, with active material pasted into it. Groups of plates are interleaved and kept apart by thin, porous <strong>separators</strong> that stop them touching while still passing ions. A cell nominally develops <span class="n-val">2.0 to 2.2 V</span>, so a 12 V battery has six cells in series and a 24 V battery has twelve.</p>
  <p class="n-p">The plates sit in a container (hard rubber or polypropylene) ribbed at the bottom to keep them clear of the sediment space, where shed material collects without short-circuiting them. The electrolyte is dilute sulphuric acid, H<sub>2</sub>SO<sub>4</sub>, mixed to a specific gravity of around <span class="n-val">1.260 to 1.280</span> fully charged. Vented cells have a removable vent plug per cell for topping up and gas escape; valve-regulated lead acid (VRLA) cells are sealed, recombine most gas internally, and vent only through a relief valve under abnormal conditions.</p>

  <div class="n-h1" id="s-chemistry">Chemistry: Charge and Discharge</div>
  <p class="n-p">This reaction is asked directly, and you should write it both ways without hesitating.</p>

  <div class="n-formula">PbO<sub>2</sub> + Pb + 2H<sub>2</sub>SO<sub>4</sub> &nbsp;&#8652;&nbsp; 2PbSO<sub>4</sub> + 2H<sub>2</sub>O</div>
  <p class="n-p">Left to right (discharging), right to left (charging).</p>

  <p class="n-p"><strong>On discharge</strong>, both plates react with the sulphuric acid and both convert to <strong>lead sulphate, PbSO<sub>4</sub></strong>, a pale compound now chemically similar on both plates. Sulphate ions leave the electrolyte and lock into the plates, and water is produced. So the acid grows weaker (more dilute) as discharge proceeds, and the plates become chemically more alike, which is exactly why a fully discharged cell has a lower voltage: there is less difference in oxidation state left between the plates to drive current.</p>

  <p class="n-p"><strong>On charge</strong>, driving current backwards reverses the reaction: lead sulphate on the positive plate converts back to lead dioxide, lead sulphate on the negative plate converts back to sponge lead, and sulphate ions are released back into the electrolyte, re-strengthening the acid. Once every trace of lead sulphate is converted back and the cell is fully charged, the charging current has nothing left to do at the plates, so it starts to electrolyse the water in the electrolyte instead.</p>

  <div class="n-h1" id="s-gassing">Charging and Gassing</div>
  <p class="n-p">This is the safety-critical part of the module, and the reason a battery room is treated as a hazardous space.</p>

  <p class="n-p">Once the plates approach full charge, further charging current can no longer convert lead sulphate, because there is none left to convert, so it electrolyses water in the electrolyte instead:</p>
  <div class="n-formula">2H<sub>2</sub>O &nbsp;&#8594;&nbsp; 2H<sub>2</sub> (negative plate) + O<sub>2</sub> (positive plate)</div>
  <p class="n-p">Hydrogen at the negative plates, oxygen at the positive, in the classic 2:1 volume ratio of electrolysis. This <strong>gassing</strong> is normal and expected in the final stage of charging a vented battery. Overcharging or a fault that keeps pushing current into an already-full battery makes it far worse, sometimes by an order of magnitude.</p>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Why this matters: hydrogen is explosive.</strong> Hydrogen/air mixtures are flammable across an unusually wide range, roughly <span class="n-val">4% to 75%</span> by volume, and ignite with very little energy: a small spark, a hot surface, or static discharge is enough. Hydrogen is also much lighter than air, so it rises and pools at the deckhead of an enclosed space if there is no escape path. That combination is exactly why battery rooms carry strict ventilation and no-naked-flame, no-smoking, intrinsically-safe-fittings rules.</div></div>

  <p class="n-p">Marine and stationary battery standards (for example IEC 62485) design ventilation to hold hydrogen concentration to around <span class="n-val">1%</span> or less by volume, a wide margin under the roughly 4% lower explosive limit. The practical requirement: a battery room or box must have dedicated, adequate ventilation, air in low down and exhaust high up near the deckhead, sized so gas cannot build up even at the highest normal charging rate.</p>

  <div class="n-h1" id="s-sg">Specific Gravity and State of Charge</div>
  <p class="n-p">Specific gravity (SG) is the density of the electrolyte relative to pure water, measured with a hydrometer, and is the standard way of checking a vented lead acid cell's state of charge without any electrical instrument.</p>

  <p class="n-p">The reason follows directly from the chemistry above: on discharge, sulphate ions leave the electrolyte and lock into the plates, diluting the acid so SG falls; on charge, sulphate is driven back out into the electrolyte, re-concentrating it so SG rises. SG is therefore a direct physical proxy for how much active material is still in the sulphated (discharged) state.</p>

  <table class="n-table">
    <tr><th>Condition</th><th>Typical specific gravity</th></tr>
    <tr><td>Fully charged</td><td><span class="n-val">1.260 to 1.280</span> (varies by maker/climate)</td></tr>
    <tr><td>Fully discharged</td><td><span class="n-val">1.120 to 1.150</span> approx.</td></tr>
  </table>

  <p class="n-p">Readings are taken cell by cell, not once for the whole battery: a low reading in one cell against the rest of the bank is often the first sign that cell is failing, well before it shows on a simple voltage check. Readings should also be temperature-corrected, since hot acid is less dense than cold acid at the same state of charge, typically referenced to 15°C or 25°C depending on the maker's convention.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Say this in the interview.</strong> SG works as a state-of-charge indicator because discharge consumes sulphuric acid from the electrolyte, locking it into the plates as lead sulphate and diluting the acid; charging reverses that, driving sulphate back out and re-concentrating the acid. SG tracks acid concentration directly, cell by cell.</div></div>

  <div class="n-h1" id="s-maintenance">Maintenance and Safety</div>
  <p class="n-p">A battery room or locker inspection is a common practical/oral question, so know the checklist, not just the theory.</p>

  <div class="n-steps">
    <p class="n-p">1. <strong>Electrolyte level.</strong> Top up with distilled or deionised water only, never acid, back above the plates: only water is lost to gassing.</p>
    <p class="n-p">2. <strong>Specific gravity check</strong> on each cell, logged and trended over time.</p>
    <p class="n-p">3. <strong>Terminals.</strong> Clean off corrosion and keep lightly coated with a corrosion-inhibiting compound.</p>
    <p class="n-p">4. <strong>Cleanliness.</strong> Keep cell tops and box dry and free of acid film, which is slightly conductive and creates a slow discharge/corrosion path.</p>
    <p class="n-p">5. <strong>Charger check.</strong> Confirm float/trickle voltage is correct for the battery type; the wrong voltage is the single most common cause of both sulphation and excess gassing/plate damage.</p>
  </div>

  <table class="n-table">
    <tr><th>Ventilation/safety requirement</th><th>Reason</th></tr>
    <tr><td>Dedicated ventilation, low-in/high-out air path</td><td>Hydrogen is lighter than air, must not accumulate near the deckhead</td></tr>
    <tr><td>No naked flames, smoking, or unprotected sparking equipment nearby</td><td>Hydrogen/air ignites with very little energy across a wide flammable range</td></tr>
    <tr><td>Intrinsically safe or explosion-protected fittings where required</td><td>A normal switch or fitting can spark on operation</td></tr>
    <tr><td>Acid-resistant coating on structure around the battery box</td><td>Acid mist and spillage attack ordinary paint and steel</td></tr>
    <tr><td>PPE (goggles, gloves, apron) when handling electrolyte</td><td>Sulphuric acid causes chemical burns</td></tr>
  </table>

  <div class="n-h1" id="s-nicad-li">Alkaline (Nickel-Cadmium) and Lithium Batteries</div>

  <div class="n-h2">Nickel-cadmium (Ni-Cd)</div>
  <p class="n-p">Ni-Cd is the other chemistry met at sea in quantity, often for starting duties (emergency generator, lifeboat engine) where its robustness is valued.</p>
  <table class="n-table">
    <tr><th>Feature</th><th>Lead acid</th><th>Nickel-cadmium</th></tr>
    <tr><td>Plates</td><td>PbO<sub>2</sub> / Pb</td><td>Nickel hydroxide / Cadmium hydroxide</td></tr>
    <tr><td>Electrolyte</td><td>Dilute sulphuric acid, participates in the reaction</td><td>Potassium hydroxide, KOH, concentration barely changes with charge</td></tr>
    <tr><td>SG as charge indicator?</td><td>Yes, works directly</td><td>No; judged by voltage/capacity</td></tr>
    <tr><td>Deep discharge/overcharge, cold</td><td>Poor tolerance, damages plates</td><td>Tolerates neglect and cold well</td></tr>
    <tr><td>Cost</td><td>Lower</td><td>Significantly higher</td></tr>
  </table>
  <p class="n-p">Because KOH does not combine with the active material the way sulphuric acid does, its concentration stays essentially constant across the cycle, which is why hydrometer readings are meaningless for a Ni-Cd cell. It still gasses hydrogen and oxygen near full charge by the same water-electrolysis mechanism, so the same ventilation logic applies to a Ni-Cd battery room.</p>

  <div class="n-h2">Lithium batteries</div>
  <p class="n-p">Lithium batteries, commonly lithium iron phosphate (LiFePO4) in marine use for its better thermal stability, are increasingly seen for UPS backup, emergency lighting packs and hybrid/battery-propulsion systems.</p>
  <table class="n-table">
    <tr><th>Feature</th><th>Lead acid</th><th>Lithium (LiFePO4)</th></tr>
    <tr><td>Energy density</td><td>Low, heavy for energy stored</td><td>High, roughly 2-4x for the same weight</td></tr>
    <tr><td>Maintenance</td><td>Topping up, SG checks</td><td>Effectively maintenance-free</td></tr>
    <tr><td>Management</td><td>Simple charger</td><td>Battery Management System (BMS) essentially mandatory: monitors and balances individual cells</td></tr>
    <tr><td>Failure mode</td><td>Gassing, acid spillage</td><td>Thermal runaway if damaged/overcharged/BMS fails; more severe fire risk</td></tr>
    <tr><td>Cost</td><td>Lowest</td><td>Highest upfront, competitive over the longer life</td></tr>
  </table>
  <p class="n-p">The BMS is the key difference in principle: a lead acid or Ni-Cd bank can be charged as a whole with a simple charger, but a lithium bank needs individual cells monitored and balanced, because an unmonitored cell can be driven into overcharge or overtemperature and reach thermal runaway, a self-sustaining, very rapid heat release far harder to control than a lead acid gassing event.</p>

  <div class="n-h1" id="s-banks">Series and Parallel Banks, Ah Capacity, C Rating</div>

  <table class="n-table">
    <tr><th>Connection</th><th>Effect on voltage</th><th>Effect on capacity (Ah)</th></tr>
    <tr><td><strong>Series</strong> (+ of one cell to − of next)</td><td>Adds up: n cells give n × single-cell voltage</td><td>Unchanged: still one cell's worth</td></tr>
    <tr><td><strong>Parallel</strong> (+ to +, − to −)</td><td>Unchanged: stays at one cell's voltage</td><td>Adds up: n cells give n × single-cell Ah</td></tr>
  </table>
  <p class="n-p">A practical bank is often built both ways: strings of series cells to reach system voltage (six 2 V cells for a 12 V battery), with strings paralleled to reach the required Ah. Batteries paralleled together should match in type, age and state of charge; a strong one paralleled with a weak one drives a circulating current into it.</p>

  <div class="n-h2">Ah capacity and C rating</div>
  <div class="n-formula">Capacity (Ah) = Discharge current (A) × Time (h)</div>
  <p class="n-p">Capacity falls at higher discharge rates (Peukert's relationship), so it is always quoted against a stated rate, commonly the 20-hour rate (C20). The <strong>C rating</strong> expresses charge/discharge current as a multiple of rated capacity: 1C for a 100 Ah battery is 100 A, a current that would nominally discharge it in one hour; C/10 is 10 A, C/20 is 5 A. Trickle/float current is typically a small fraction of a C (roughly C/20 to C/100 depending on chemistry), while a boost charge might run at C/5 or higher within the manufacturer's limits.</p>

  <div class="n-h1" id="s-chargemethods">Charging Methods: Trickle, Boost, Float</div>
  <table class="n-table">
    <tr><th>Method</th><th>What it does</th><th>Typical use</th></tr>
    <tr><td><strong>Trickle</strong></td><td>Small continuous current offsetting self-discharge, holding full charge without significant gassing</td><td>Keeping a standby battery topped up</td></tr>
    <tr><td><strong>Boost</strong></td><td>Higher current for a limited time to recharge quickly</td><td>Recovery after a heavy discharge, e.g. repeated engine cranking</td></tr>
    <tr><td><strong>Float</strong></td><td>Charger permanently connected in parallel with battery and load, supplies the load itself while keeping the battery ready to take over instantly on charger/mains failure</td><td>Standard arrangement for emergency/standby batteries on a DC distribution board</td></tr>
  </table>
  <p class="n-p">Float charging is behind almost every standby battery on a ship: the charger supplies the DC load day to day, the battery sits fully charged in parallel doing nothing until the supply is interrupted, at which point it takes over with no switching delay, since it was already connected across the load the whole time.</p>

  <div class="n-h1" id="s-emergency">Emergency Battery Requirements (SOLAS)</div>
  <p class="n-p">SOLAS Chapter II-1, Part D governs electrical installations, including the emergency source of electrical power. You are not expected to quote regulation numbers, but you are expected to know the structure and the figures involved.</p>

  <div class="n-steps">
    <p class="n-p">1. <strong>Main source fails</strong> (blackout); essential loads lose supply.</p>
    <p class="n-p">2. <strong>Transitional source</strong> takes over immediately and automatically: normally the emergency battery, carrying emergency lighting, navigation lights, fire detection/alarms and internal communications without recharging for at least <span class="n-val">30 minutes</span>, voltage held within roughly 12% of nominal throughout.</p>
    <p class="n-p">3. <strong>Emergency generator starts</strong> automatically, required up and supplying the board within a short time, commonly cited as around <span class="n-val">45 seconds</span>, taking over from the battery.</p>
    <p class="n-p">4. <strong>Emergency generator sustains the emergency board</strong> for the required endurance, commonly cited as around <span class="n-val">18 hours on a cargo ship and 36 hours on a passenger ship</span>.</p>
  </div>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Where certainty ends.</strong> The 30-minute transitional battery duration and roughly 45-second auto-start are consistently cited figures. The 18/36 hour generator endurance figures and exactly which load categories must run the full period versus a shorter part-period vary with ship type and the specific SOLAS regulation in force. Treat 18/36 hours as the commonly taught benchmark, not a substitute for checking current SOLAS text and a vessel's approved documentation.</div></div>

  <p class="n-p">On some smaller vessels the emergency battery may itself serve directly as the emergency source in place of a generator, provided it can meet the full duration and loading on its own; otherwise its job is simply to bridge the gap until the generator picks up the load.</p>

  <div class="n-h1" id="s-ups">UPS: Online vs Offline</div>
  <p class="n-p">A UPS (Uninterruptible Power Supply) sits between the ship's AC supply and a critical load, using an internal battery to ride through supply interruptions. There are two fundamentally different architectures.</p>

  <table class="n-table">
    <tr><th>Feature</th><th>Offline / standby UPS</th><th>Online / double-conversion UPS</th></tr>
    <tr><td>Normal path</td><td>Load fed directly from raw mains; battery/inverter idle</td><td>Mains → rectifier → DC link/battery → inverter → load, continuously</td></tr>
    <tr><td>On mains failure</td><td>Static switch trips onto inverter/battery, a few ms transfer</td><td>Zero transfer time; battery was already feeding the inverter</td></tr>
    <tr><td>Output quality</td><td>Passes through incoming supply quality as-is</td><td>Clean, regulated sine wave always, isolated from mains disturbances</td></tr>
    <tr><td>Cost/complexity</td><td>Lower</td><td>Higher, continuous conversion means more running loss</td></tr>
    <tr><td>Typical marine use</td><td>Less critical loads tolerant of a brief glitch</td><td>Navigation/bridge equipment, GMDSS radio, anything intolerant of interruption</td></tr>
  </table>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Say this in the interview.</strong> An offline UPS feeds the load from mains directly and only switches to inverter/battery when mains fails, a transfer time of a few milliseconds. An online UPS continuously converts mains to DC and back to AC, so the load always runs off the inverter, and on mains failure nothing has to switch, the battery simply keeps the DC link fed: zero transfer time. Online costs more and wastes more power running, but it is what you fit ahead of navigation and GMDSS equipment because both interruption and supply quality matter.</div></div>

  <div class="n-h1" id="s-lighting">Lighting Types</div>

  <div class="n-h2">Incandescent</div>
  <p class="n-p">A tungsten filament is heated by the current passing through it until it glows white hot (incandescence). Simple, cheap, instant on, but very inefficient: most of the input energy leaves as heat rather than visible light, giving a low efficacy of roughly <span class="n-val">10 to 17 lumens per watt</span>, and the filament itself has a short life, commonly around <span class="n-val">1,000 hours</span>, because it slowly evaporates and eventually breaks.</p>

  <div class="n-h2">Fluorescent, and the role of the choke and starter</div>
  <p class="n-p">A fluorescent tube is a low-pressure discharge lamp: mercury vapour and an inert gas in a glass tube, with a phosphor coating inside. Current arcing through the mercury vapour generates ultraviolet light, which the phosphor absorbs and re-emits as visible light. Two things make it awkward to run: it needs a high voltage spike to strike the arc, well above its running voltage, with electrodes preheated first; and once struck it has a negative resistance characteristic, resistance falling as current rises, so an unrestricted tube would draw runaway current and destroy itself.</p>
  <p class="n-p">The <strong>choke (ballast)</strong>, a large iron-cored inductor in series with the tube, does both jobs: its impedance limits the running current to a safe value, and its magnetic field, built up then suddenly collapsed, generates the high-voltage spike that strikes the tube. The <strong>starter</strong> is a small glow-discharge switch across the tube: mains voltage causes a glow discharge inside it, which heats a bimetallic contact until it closes, shorting the starter and passing a heating current through the choke and both filaments to preheat them; the short stops the glow discharge, the bimetal cools and springs open again, and that sudden interruption through the choke releases its stored energy as the voltage spike that strikes the arc. Once running, tube voltage is too low to restart the starter's glow, so it sits open until next switch-on.</p>
  <p class="n-p">Fluorescent efficacy is much better than incandescent, typically <span class="n-val">40 to 100 lumens per watt</span>, life commonly <span class="n-val">7,000 to 15,000 hours</span>, though the ballast and starter are extra failure points and the tube dims and shifts colour with age.</p>

  <div class="n-h2">HID (High Intensity Discharge)</div>
  <p class="n-p">HID lamps (mercury vapour, metal halide, high/low pressure sodium) work on the same discharge principle at much higher pressure and power, needing a ballast just like fluorescent but larger, a warm-up of several minutes to reach full brightness, and a cooling period before they can restrike after being switched off. Their high output for a given fitting size made them the standard choice for deck floodlighting and cargo area lighting, wide-area applications needing a lot of light from one fitting.</p>

  <div class="n-h2">LED (Light Emitting Diode)</div>
  <p class="n-p">An LED produces light directly from a semiconductor p-n junction: forward current causes electrons and holes to recombine, releasing energy as photons (electroluminescence), no filament, gas discharge, ballast or starter required for the basic principle (white LEDs commonly use a phosphor coating over a blue die to broaden the spectrum, but the light generation itself is solid-state). No fragile filament to break, no glass envelope full of gas under pressure to fail.</p>

  <div class="n-h1" id="s-emlighting">Emergency and Escape Lighting Requirements</div>
  <p class="n-p">Emergency lighting is fed from the emergency switchboard (backed by the transitional battery, then the emergency generator, as above) and must illuminate escape routes, muster and embarkation stations, machinery spaces, the steering gear compartment, and other locations essential to safety, so the crew can find their way and carry out emergency duties if main lighting fails.</p>
  <p class="n-p"><strong>Low-location lighting (LLL)</strong> is a related, separate requirement on passenger ships: a lighting or photoluminescent strip mounted low, near the deck, along escape routes, because fire smoke collects at the deckhead first and can obscure normal-height fittings long before floor-level marking. Supplementary emergency lighting in passenger cabins, required to auto-illuminate for a minimum period (commonly around 30 minutes) if cabin lighting is lost, is a further layer aimed at guiding occupants out of an unfamiliar space in the dark.</p>
  <p class="n-p">The common thread is redundancy of supply (main, transitional battery, emergency generator) combined with redundancy of visibility (normal height and low location), because a fire or flooding casualty is exactly the scenario where both electrical supply and visibility through smoke are most likely to be compromised together.</p>

  <div class="n-h1" id="s-led">Why LED Replaced the Older Technologies</div>
  <p class="n-p">This is a "tie it together" question interviewers like, because it draws on everything above. LED delivers more light per watt (commonly over 100 lm/W, versus roughly 10-17 for incandescent and 40-100 for fluorescent), lasts far longer (25,000-50,000+ hours against ~1,000 for incandescent and 7,000-15,000 for fluorescent), and being solid-state has no fragile filament or gas-filled glass envelope, so it survives shipboard vibration and shock far better. It needs no warm-up or restrike delay unlike HID, no ballast and starter to fail unlike fluorescent, and runs cooler, cutting the heat load and burn/ignition risk of the fitting itself. Every factor independently favours LED, and together they are why it is now the default choice for general, navigation, deck and emergency lighting on new-build and retrofit tonnage alike, leaving incandescent, fluorescent and HID as legacy fittings being phased out rather than specified new.</p>

  <div class="n-h1" id="s-interview">Interview Answers, Rapid Fire</div>

  <p class="n-p"><strong>Write the lead acid charge/discharge reaction.</strong><br>
  PbO2 + Pb + 2H2SO4, discharging left to right, charging right to left, gives 2PbSO4 + 2H2O. Both plates convert to lead sulphate on discharge and the electrolyte weakens; charging reverses that.</p>

  <p class="n-p"><strong>Why does a lead acid battery gas hydrogen when charging?</strong><br>
  Once the plates are fully converted back with no lead sulphate left to reduce, further charging current electrolyses the water in the electrolyte instead, releasing hydrogen at the negative plates and oxygen at the positive plates. It worsens sharply with overcharging.</p>

  <p class="n-p"><strong>Why is battery room ventilation so important?</strong><br>
  Hydrogen is flammable across a wide range, roughly 4 to 75 percent by volume, ignites with very little energy, and is lighter than air so it rises and can accumulate at the deckhead. Ventilation keeps concentration well below the flammable limit, typically designed to stay under around 1 percent.</p>

  <p class="n-p"><strong>What does specific gravity tell you and why?</strong><br>
  The state of charge of a lead acid cell: discharge pulls sulphate out of the electrolyte into the plates, diluting the acid and lowering SG; charging drives it back out, raising SG. Roughly 1.26 to 1.28 fully charged, down to around 1.12 to 1.15 discharged.</p>

  <p class="n-p"><strong>How does Ni-Cd differ from lead acid?</strong><br>
  Nickel and cadmium hydroxide plates in a potassium hydroxide electrolyte that does not change concentration with charge state, so SG cannot be used to judge it. Tolerates deep discharge, overcharge and cold far better, with longer cycle life, at higher cost.</p>

  <p class="n-p"><strong>What's different about lithium batteries on board?</strong><br>
  Much higher energy density for the weight and low maintenance, but they require a battery management system to monitor and balance individual cells, since an unmonitored overcharge or overtemperature condition can lead to thermal runaway, a more severe failure mode than lead acid gassing.</p>

  <p class="n-p"><strong>What is a C rating?</strong><br>
  Charge or discharge current expressed as a multiple of rated Ah capacity. 1C for a 100 Ah battery is 100 A, a current that would nominally discharge it in one hour. Trickle runs at a small fraction of a C, boost at a higher fraction or multiple.</p>

  <p class="n-p"><strong>Difference between trickle, boost and float charging?</strong><br>
  Trickle is a small continuous current offsetting self-discharge to hold full charge. Boost is a higher current for a limited time to recharge quickly. Float is a charger permanently in parallel with the battery and the load, supplying the load while keeping the battery ready to take over instantly if the charger fails.</p>

  <p class="n-p"><strong>What does SOLAS require of the emergency source of power in outline?</strong><br>
  On main power failure, a transitional source, normally the emergency battery, carries emergency lighting, alarms and communications for at least 30 minutes without recharging while the emergency generator auto-starts, commonly within around 45 seconds, and takes over. The generator then sustains the emergency board for the vessel's required endurance, commonly cited as around 18 hours cargo, 36 hours passenger, though exact figures depend on ship type and should be checked against current SOLAS text.</p>

  <p class="n-p"><strong>Difference between an online and offline UPS?</strong><br>
  Offline feeds the load from raw mains and only switches to battery/inverter on failure, transfer time a few milliseconds. Online continuously converts mains to DC and back to AC, so nothing has to switch on failure, the battery just keeps the DC link fed: zero transfer time and continuously clean output, at higher cost and running loss.</p>

  <p class="n-p"><strong>Explain the role of the choke and starter in a fluorescent fitting.</strong><br>
  The choke is a series inductor limiting the tube's running current against its negative resistance characteristic, and its collapsing field generates the high voltage spike that strikes the arc. The starter is a glow-switch that shorts to preheat the filaments, then opens suddenly, and that interruption through the choke produces the striking spike.</p>

  <p class="n-p"><strong>Why has LED replaced other lighting types on ships?</strong><br>
  Higher efficacy (100+ lm/W against 10-17 incandescent, 40-100 fluorescent), far longer life (25,000-50,000+ hours), solid-state construction tolerating vibration far better than a filament or glass tube, no warm-up or restrike delay unlike HID, no ballast and starter to fail, and lower heat output.</p>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F19')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the F19 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

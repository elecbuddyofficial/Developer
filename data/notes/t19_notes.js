window.loadNotes("T19", `<div class="view" id="view-notes-t19">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T19')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 19 - Tanker & Special Topics</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-deck')">Deck Safeties (Ex)</button>
    <button class="anc-btn" onclick="jumpTo('s-igsystem')">IG System Trips</button>
    <button class="anc-btn" onclick="jumpTo('s-bowthruster')">Bow Thruster</button>
    <button class="anc-btn" onclick="jumpTo('s-static')">Static Electricity</button>
    <button class="anc-btn" onclick="jumpTo('s-pumproom')">Pump Room Safety</button>
    <button class="anc-btn" onclick="jumpTo('s-misc')">Auto-Tension, Hose IR, Anti-Heeling</button>
    <button class="anc-btn" onclick="jumpTo('s-updates')">New 2026 Additions</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most Asked Topics:</strong> Ex d / Ex e / Ex i protection. IG system trips with exact values. Bow thruster interlocks and CPP pitch. Static electricity prevention. Pump room light gasket inspection. LPG compressor room safety (New 2026).</div></div>


  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-deck">1. Tanker Electrical System & Deck Safeties</div>
  
  <ul class="n-list">
    <li><strong>Electrical Specification:</strong> LV system usually <span class="n-val">440V</span> IT (insulated neutral). HV (6.6kV) used on VLCCs for large cargo pumps. Minimum IR acceptable in hazardous areas is <strong>5 MΩ</strong> (vs 1 MΩ on normal ships).</li>
    
  </ul>
  
  <div class="n-h2">Explosion-Protected (Ex) Equipment</div>
  <table class="n-table">
    <tr><th>Ex TYPE</th><th>PROTECTION METHOD</th><th>WHERE USED</th></tr>
    <tr><td><strong>Ex d (Flameproof)</strong></td><td>Enclosure withstands internal explosion without igniting outside atmosphere.</td><td>Motors, JBs, light fittings in Zone 1. Heart of Ex d is the flame-path gasket.</td></tr>
    <tr><td><strong>Ex e (Increased Safety)</strong></td><td>No arcing/sparking parts in normal operation. Tighter seals, wider creepage.</td><td>Terminal boxes, lighting in Zone 1 & 2.</td></tr>
    <tr><td><strong>Ex i (Intrinsically Safe)</strong></td><td>Circuit energy limited (Voltage/Current too low to spark or heat).</td><td>Sensors, transmitters, gas detectors (Zone 0/1). Requires Zener barrier in safe area. <strong>NEVER Megger Ex i circuits.</strong></td></tr>
  </table>

  <div class="n-h2">Hazardous Area Zone Classifications (IEC 60079-10-1)</div>
  <p class="n-p">On oil, chemical, and gas tankers, hazardous spaces are strictly categorized based on the frequency and duration of an explosive gas atmosphere:</p>
  <ul class="n-list">
    <li><strong>Zone 0:</strong> An area where an explosive gas atmosphere is present <strong>continuously, or for long periods, or frequently</strong>. Examples: Inside cargo tanks, slop tanks, and vapour recovery piping. Demands intrinsically safe <span class="n-val">Ex ia</span> equipment limited to milliwatt thresholds.</li>
    <li><strong>Zone 1:</strong> An area where an explosive gas atmosphere is <strong>likely to occur in normal operation occasionally</strong>. Examples: Open deck space up to 3 metres from cargo vents, the cargo pump room, and cable transit trunks on deck. Accepts <span class="n-val">Ex d (Flameproof)</span> or <span class="n-val">Ex e (Increased Safety)</span> enclosures.</li>
    <li><strong>Zone 2:</strong> An area where an explosive gas atmosphere is <strong>not likely to occur in normal operation</strong> and if it does, will persist for a short period only. Examples: Spaces adjacent to Zone 1 area rings, or enclosed deck lockers. Accepts <span class="n-val">Ex n (Non-sparking)</span> rated components.</li>
  </ul>

  <div class="n-h2">Accommodation Pressurisation Air Locks &amp; Interlocking Delays</div>
  <p class="n-p">To prevent heavy hydrocarbon vapours from drifting off the cargo deck into safe living spaces, the accommodation HVAC ventilation system maintains a continuous <strong>internal positive pressure of <span class="n-val">50 Pa (0.5 mbar)</span></strong> relative to the outside atmosphere. Entryways deploy double-door <strong>air locks</strong> governed by an automated safety PLC loop:</p>
  <ul class="n-list">
    <li><strong>Mechanical Interlock:</strong> The two doors are electronically and mechanically interlocked so that both doors can never be opened simultaneously. Opening one door locks the second door shut to preserve the internal pressure boundary.</li>
    <li><strong>The 60-Second Evacuation Countdown:</strong> If an air lock door is held or jammed open for <strong>longer than <span class="n-val">60 seconds</span></strong>, the localized pressure drop triggers an audible and visual alarm on the bridge and inside the ECR. If the door remains un-closed beyond a critical timeout, the main accommodation HVAC intake fans automatically trip, and the fire dampers slam shut to isolate the entire living superstructure from toxic or explosive gas ingress.</li>
  </ul>



  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-igsystem">2. Inert Gas (IG) System - Safeties, Trips & Values</div>
  
  <div class="n-p">Displaces flammable vapour with IG (target O2 < 5%) to maintain tank atmosphere below 8% O2, preventing explosion.</div>
  
  <table class="n-table">
    <tr><th>TRIP CONDITION</th><th>VALUE</th><th>ACTION</th></tr>
    <tr><td>High O₂ Content</td><td>> 8% by volume</td><td>System Shutdown</td></tr>
    <tr><td>High IG Supply Pressure</td><td>> 1500–1600 mmWG</td><td>System Shutdown</td></tr>
    <tr><td>Low IG Supply Pressure</td><td>< 100 mmWG</td><td>Alarm (Restarts blower to prevent air ingress)</td></tr>
    <tr><td>High IG Temperature</td><td>> 65°C</td><td>System Shutdown (Scrubber failing)</td></tr>
    <tr><td>Deck Seal Low Water</td><td>Low level switch</td><td>System Shutdown (Prevents vapour backflow to boiler)</td></tr>
  </table>

  <div class="n-h2">Inert Gas Oxygen Analyser Micro-Sensor Chemistry</div>
  <p class="n-p">The main IG panel utilizes dual-redundant fixed oxygen analyzers to continuously monitor and verify that flue gas oxygen content remains securely below the statutory limit of <span class="n-val">5% O₂ by volume</span> prior to channeling it to the cargo decks. The internal sensors operate via two main scientific designs:</p>
  <ul class="n-list">
    <li><strong>Zirconia Sensor Core:</strong> Utilizes a zirconium oxide solid electrolyte tube coated with thin platinum layers on both sides. The element is heated to a constant internal operating temperature of <span class="n-val">600°C to 700°C</span>, transforming the zirconia into a selective oxygen ion conductor. Reference air (20.9% O₂) is directed inside the tube while the raw flue sample flows over the exterior face. The oxygen concentration mismatch forces oxygen ions to migrate through the ceramic crystal lattice, generating an internal voltage via the <strong>Nernst Equation</strong>. Outputs a highly precise, drift-free analog voltage curve that maps directly onto the panel's recorders.</li>
    <li><strong>Electrochemical Fuel Cell:</strong> A consumable portable sensor configuration utilizing a gold cathode and a consumable lead anode submerged inside an alkaline KOH gel layer. Oxygen diffusing through a Teflon membrane undergoes reduction at the cathode, oxidizing the lead anode to generate an internal microamp current loop directly proportional to partial oxygen volumes. <em>Lifespan is finite (<span class="n-val">1–2 years</span>); the cell must be discarded once the internal lead anode is fully converted to lead oxide (PbO).</em></li>
  </ul>



  <!-- ═══ SECTION 3 ═══ -->
  <div class="n-h1" id="s-bowthruster">3. Bow Thruster - Interlocks & Troubleshooting</div>
  
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>CPP Pitch Rule:</strong> Pitch MUST be zero to start, but must NEVER be held exactly at zero during operation. Operating at exactly zero pitch causes asymmetric blade loading, severe vibration, and cavitation.</div></div>
  
  <div class="n-h2">Starting Interlocks</div>
  <ul class="n-list">
    <li><strong>1. Tunnel Flooded:</strong> Pressure switch confirms water present (prevents dry running).</li>
    <li><strong>2. Ventilation Fan Stopped:</strong> Prevents motor cooling resonance.</li>
    <li><strong>3. Ship Speed Limit:</strong> Usually cannot start if ship > 5-8 knots (hydrodynamic stress).</li>
    <li><strong>4. Generator Capacity:</strong> PMS confirms sufficient power (typically 2 gens paralleled).</li>
    <li><strong>5. Pitch at Zero:</strong> Starts with no load on the SCIM motor.</li>
  </ul>
  
  <div class="n-p"><strong>Troubleshooting "No Amps" on joystick command:</strong> Check main breaker tripped. Check E-stops. Check interlocks (tunnel flooded?). Check pitch servo (if pitch is zero, thrust is zero despite motor running). Check control circuit fuses. Switch to local manual control.</div>


  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-static">4. Static Electricity - Risks & Prevention</div>
  
  <div class="n-p">Static is generated by fluid flowing through pipes (friction separates charges), spraying/misting, and filtration. Refined products (low conductivity) accumulate charge easily.</div>
  
  <ul class="n-list">
    <li><strong>Bonding:</strong> Ship-to-shore bonding cable connected BEFORE cargo hoses. Equalizes potential.</li>
    <li><strong>Low Initial Flow Rate:</strong> Max 1 m/s until bottom inlet is submerged by 1m of liquid. Prevents misting and splashing.</li>
    <li><strong>Relaxation Time:</strong> Wait minimum <strong>30 minutes</strong> after loading stops before dipping/sampling. Allows static charge to dissipate to earth.</li>
    <li><strong>Use Ex i Instruments:</strong> Only intrinsically safe or static-dissipative tapes (UTI tapes).</li>
  </ul>

  <div class="n-h2">Variable Reluctance Speed Transducers &amp; Dynamic Pitch Governing</div>
  <p class="n-p">The bow thruster automation unit tracks shaft rotational velocity using a non-contact <strong>variable reluctance magnetic pickup sensor</strong> mounted perpendicular to a phonic toothed steel wheel keyed to the thruster shaft. The passing gear teeth continuously distort the sensor's permanent magnetic flux lines, inducing an AC voltage pulse string inside the internal coil. The core processor computes speed metrics via:</p>
  <div class="n-formula">Frequency (Hz) = (RPM × Number of Teeth) / 60<div class="label">Shaft pulse frequency calculation equation for magnetic pickup sensors</div></div>
  <p class="n-p"><strong>The Zero-Amp Dynamic Pitch Hunting Fault:</strong> When a bridge watch officer maneuvers the bow thruster joystick, hydraulic actuators alter the physical pitch angle of the propeller blades. At 'Zero Pitch', the blades are flat, drawing minimum current from the switchboard. If the feedback link or the electronic governor calibration slips, the thruster motor will over-speed slightly when unloaded, forcing the main generator's AVR and speed governor to loop into a state of severe <strong>electrical current hunting</strong>. This can pull massive reactive current fluctuations, risk a preferential trip activation, or overload the running auxiliary generators. The ETO fixes this by recalibrating the zero-pitch potentiometer dead-band inside the control drive card.</p>



  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s-pumproom">5. Pump Room Safety & Light Inspection</div>
  
  <ul class="n-list">
    <li><strong>Entry Procedure:</strong> Run ventilation 15-30m. Gas test (O2 > 19.5%, LEL < 1%, H2S < 1ppm). Enclosed space permit. Standby person with BA set. Lock out (LOTO) any pumps being worked on.</li>
    <li><strong>Light Inspection (Exam Favorite):</strong> Zone 1 area. Gas test area. Isolate circuit. <strong>Check the Ex gasket:</strong> This gasket maintains the Ex d flame-path or Ex e seal. If cracked, missing, or squashed, the fitting is NO LONGER EXPLOSION PROTECTED. Must be replaced with identical spare before re-energizing.</li>
  </ul>


  <!-- ═══ SECTION 6 ═══ -->
  <div class="n-h1" id="s-misc">6. Auto-Tension, Cargo Hose IR, Anti-Heeling</div>
  
  <table class="n-table">
    <tr><th>SYSTEM</th><th>DESCRIPTION</th></tr>
    <tr><td><strong>Auto-Tension Winch</strong></td><td>Load cell (strain gauge) or hydraulic pressure transducer measures rope tension. Controller commands VFD motor to heave/pay out to maintain preset setpoint.</td></tr>
    <tr><td><strong>Cargo Hose IR Test</strong></td><td>Conducting hose = near 0Ω (static dissipation). Non-conducting hose = > 1 MΩ (isolates stray currents). Test with <span class="n-val">500V</span> megger flange to flange.</td></tr>
    <tr><td><strong>Anti-Heeling</strong></td><td>Inclinometer measures heel. Controller activates reversible ballast pump to transfer water port↔starboard to keep ship upright during rapid cargo ops (Container/RoRo).</td></tr>
    <tr><td><strong>Reefer Sockets</strong></td><td>ETO checks: IR >1 MΩ, socket housing for cracks, contacts clean, MCB trips correctly. Log setpoint vs supply/return temps.</td></tr>
  </table>


  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s-updates">7. New 2026 Additions (IGF Code, LPG, UTI)</div>
  
  <ul class="n-list">
    <li><strong>LPG Compressor Room:</strong> Zone 1. NO portable electrical equipment unless Ex certified. Ex d / Ex e equipment used. Mechanical ventilation interlock trips power if ventilation fails. Fixed gas detection trips power at 40% LEL.</li>
    <li><strong>IGF Code 2026 Update 1:</strong> Bunkering checklists must now explicitly agree and record min/max transfer pressure, min/max transfer temp, and relief valve settings BEFORE gas transfer.</li>
    <li><strong>IGF Code 2026 Update 2:</strong> A 5kg Dry Chemical Powder (DCP) extinguisher is now mandatory inside every Fuel Preparation Room.</li>
    <li><strong>IGF Code 2026 Update 3:</strong> Ammonia (NH3) legally permitted as fuel on Type 2G ships. It is toxic (TLV 25 ppm, IDLH 300 ppm). Requires continuous NH3 detection and remote solenoid isolation.</li>
    <li><strong>UTI Tape:</strong> Ullage, Temperature, Interface. Senses oil/water interface via capacitance change. Must be Ex i certified.</li>
    <li><strong>Framo Hydraulic Powerpack:</strong> Pre-start: IG system operating, tank atmosphere safe, hydraulic oil level/temp OK. Electrical: Motor thermistors normal, overload reset.</li>
  </ul>


  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>

  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>Explain Ex d, Ex e, Ex i and where they are used on a tanker.</td>
      <td>Ex d is flameproof, contains internal explosions (used for sparking items like motors/lights in Zone 1). Ex e is increased safety, no sparking parts, tight seals (used for JBs, terminal boxes). Ex i is intrinsically safe, limits circuit energy below ignition (used for sensors in Zone 0/1 with Zener barriers).</td>
    </tr>
    <tr>
      <td>What are the trips on the Inert Gas system?</td>
      <td>Oxygen > 8%. High IG pressure > 1500 mmWG. High IG temp > 65°C. Deck seal low water level. Scrubber SW failure. Blower failure. All these cause a system shutdown. Low tank pressure (<100 mmWG) causes an alarm.</td>
    </tr>
    <tr>
      <td>How do you prevent static electricity on a tanker deck?</td>
      <td>Connect ship-shore bonding cable before hoses. Keep initial loading rate low (<1 m/s) until inlet submerged by 1m. Wait 30 minutes relaxation time after loading before dipping. Use only Ex i instruments (UTI tapes).</td>
    </tr>
    <tr>
      <td>Before entering the pump room, you must open a light fitting. What do you check?</td>
      <td>Gas test the area. Isolate circuit (LOTO). When opening, the critical check is the Ex gasket (flame-path or sealing gasket). If it is cracked or compressed, the Ex integrity is lost. Do not re-energize until replaced.</td>
    </tr>
    <tr>
      <td>What are the bow thruster interlocks?</td>
      <td>Tunnel flooded (pressure switch). Ventilation fan stopped. Ship speed below 5-8 knots. Sufficient generator capacity (typically 2 gens paralleled). CPP pitch must be zero.</td>
    </tr>
    <tr>
      <td>What are the electrical safety requirements for an LPG compressor room?</td>
      <td>It is Zone 1. All equipment must be Ex rated (Ex d, Ex e). No non-Ex portable devices allowed. Ventilation interlock trips power if air changes fail. Gas detection trips power at high LEL. Cable glands must be Ex-certified.</td>
    </tr>
  </table>


  <!-- ═══ QUICK REVISION ═══ -->
  
  <div class="n-h1" id="s-gasdetect">⚗️ Gas Detection - Methanol &amp; Ammonia Hazards</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>With alternative fuel ships increasing, surveyors now ask about methanol and ammonia gas detection.</strong></div></div>
  <div class="n-h2">Methanol - Invisible Flame Hazard</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Methanol burns with a virtually invisible pale blue flame in daylight.</strong> Standard smoke/heat detectors are insufficient. Fire detection for methanol spaces must include optical IR thermal imaging cameras (TICs) or UV/IR flame detectors. Standard AFFF foam breaks down in methanol - must use <strong>Alcohol-Resistant AR-AFFF</strong> foam which forms a polymer barrier.</div></div>

  <div class="n-h2">Streaming Currents &amp; Electrostatic Dissipation Physics</div>
  <p class="n-p">When non-conductive liquid hydrocarbons (marine gas oil, jet fuel, ultra-low sulfur diesel) are pumped through pipeline manifolds at high velocities, a physical separation of electric charges occurs at the fluid-pipe interface boundary. The moving cargo carries away ions of one polarity, generating a high-voltage phenomenon known as a <strong>streaming current</strong>. The charge accumulation rate inside the receiving cargo tank depends on fluid velocity, pipe inner diameter, and fluid conductivity constant.</p>
  <p class="n-p">Because clean distillate cargo serves as an electrical insulator, accumulated surface charge cannot easily bleed down to the hull earth plate. The static charge decays exponentially over time based on the fluid's specific dielectric relaxation constant (τ = ε/σ).</p>
  <p class="n-p"><strong>The Core Safety Mandate:</strong> This is why introducing any metallic object - such as dropping a steel ullage sounding tape, portable UTI probe, or chemical sampling can - directly into a cargo tank is strictly forbidden for a minimum of <span class="n-val">30 minutes after loading stops</span>. Dropping a conductor into a highly charged space reduces the dielectric gap, instantly triggering a high-energy static spark that can detonate explosive hydrocarbon vapours if the space is not properly inerted.</p>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Methanol toxicity vs flammability gap:</strong> TLV = <span class="n-val">200 ppm</span>. Lethal doses accumulate long before standard LEL alarms trigger (set at <span class="n-val">20% LEL</span> = ~<span class="n-val">6,000 ppm</span>). Toxic concentrations occur at much lower levels than explosive concentrations - toxic threat comes first.</div></div>
  <div class="n-h2">Ammonia - Toxic at Very Low Concentrations</div>
  <table class="n-table">
    <tr><th>Level</th><th>Concentration</th><th>Action</th></tr>
    <tr><td>TLV (8h exposure limit)</td><td class="hl"><span class="n-val">25 ppm</span></td><td>Warning alarm - investigate</td></tr>
    <tr><td>Evacuation alarm</td><td class="bad"><span class="n-val">~50 ppm</span></td><td class="bad">Clear the space immediately</td></tr>
    <tr><td>IDLH</td><td class="bad"><span class="n-val">300 ppm</span></td><td class="bad">Immediately life-threatening without SCBA</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Methanol = invisible flame → IR cameras needed + AR-AFFF foam. Ammonia = toxic at 25ppm → electrochemical continuous sensors → SCBA at all entry points to fuel spaces.</div></div>

<div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>IG System Trips (Exact Values)</td>
      <td class="hl">⭐⭐⭐⭐⭐ All Surveyors</td>
      <td>O2 >8%, Press >1500mmWG, Temp >65°C.</td>
    </tr>
    <tr>
      <td>Pump Room Light Gasket</td>
      <td class="hl">⭐⭐⭐⭐⭐ Sanjib, Deswal</td>
      <td>Gasket is the heart of Ex protection. Damaged = NO Ex.</td>
    </tr>
    <tr>
      <td>Bow Thruster Interlocks</td>
      <td class="hl">⭐⭐⭐⭐⭐ Kamath, Mumbai</td>
      <td>Tunnel flooded, Pitch=0, Fan stopped, Speed limit.</td>
    </tr>
    <tr>
      <td>Static Relaxation Time</td>
      <td class="hl">⭐⭐⭐⭐ Deswal, Praveen</td>
      <td>30 minutes after loading stops.</td>
    </tr>
    <tr>
      <td>IGF Code 2026 Updates</td>
      <td class="hl">⭐⭐⭐⭐ New 2026 Trend</td>
      <td>Bunker limits checklist. 5kg DCP. Ammonia toxic fuel.</td>
    </tr>
  </table>

  </div>
</div>`);

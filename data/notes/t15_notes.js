window.loadNotes("T15", `<div class="view" id="view-notes-t15">
<div class="note-doc">
  <div style="margin-bottom:16px;display:flex;justify-content:space-between">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T15')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 15 - Fire Fighting Systems</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">CO2 · Foam · Sprinkler</span>
      <span class="tag tag-purple">Detection · Fire Classes · 2026 Updates</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-classes')">Fire Classes</button>
    <button class="anc-btn" onclick="jumpTo('s-co2')">CO2 System</button>
    <button class="anc-btn" onclick="jumpTo('s-foam')">Foam Systems</button>
    <button class="anc-btn" onclick="jumpTo('s-sprinkler')">Sprinkler</button>
    <button class="anc-btn" onclick="jumpTo('s-watermist')">Water Mist</button>
    <button class="anc-btn" onclick="jumpTo('s-detection')">Detection</button>
    <button class="anc-btn" onclick="jumpTo('s-testing')">Detector Testing</button>
    <button class="anc-btn" onclick="jumpTo('s-pumps')">Fire Pumps</button>
    <button class="anc-btn" onclick="jumpTo('s-hold-roro')">Hold &amp; RoRo 2026</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  <div class="n-h1" id="s-classes">🔥 Fire Classes &amp; Extinguishers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask fire classes.</strong> Know galley fire class (F) and why water is NEVER used on it. Know electrical fire rule (CO2, not water).</div></div>

  <div class="n-h2">The Fire Tetrahedron &amp; Chain Reaction Inhibition</div>
  <p class="n-p">While the traditional Fire Triangle relies on three simultaneous components (Fuel, Heat, and minimum ~16% Oxygen), modern fire science recognizes a fourth essential element: the <strong>free radical chemical chain reaction of combustion</strong>, establishing the <strong>Fire Tetrahedron</strong>. Removing any single side immediately destabilizes and extinguishes the fire.</p>
  <p class="n-p">Gaseous clean agents (Halon, FM-200, Novec 1230) and Dry Chemical Powder (DCP) do not rely on cooling or choking off oxygen. Instead, they extinguish fires via <strong>chain reaction inhibition</strong> - actively injecting chemical radicals into the flame zone to bind with and interrupt the combustion chain reaction at a molecular level. ETOs must understand these physics to match the correct agent to the specific fire threat.</p>


  <table class="n-table">
    <tr><th>Class</th><th>Fuel Type</th><th>Extinguisher</th><th>NEVER use</th></tr>
    <tr><td class="hl"><strong>A</strong></td><td>Solid combustibles (wood, paper, rope)</td><td class="ok">Water, foam</td><td> - </td></tr>
    <tr><td class="hl"><strong>B</strong></td><td>Flammable liquids / oils</td><td class="ok">Foam, CO2, DCP</td><td class="bad">Water (spread fire)</td></tr>
    <tr><td class="hl"><strong>C</strong></td><td>Flammable gases</td><td class="ok">DCP - after isolating gas supply</td><td class="bad">Water, foam</td></tr>
    <tr><td class="hl"><strong>D</strong></td><td>Combustible metals (Mg, Ti)</td><td class="ok">Special dry powder only</td><td class="bad">Water (violent reaction)</td></tr>
    <tr><td class="hl"><strong>E</strong></td><td>Electrical equipment</td><td class="ok">CO2 (preferred - no residue, non-conductive)</td><td class="bad">Water, foam (conductivity)</td></tr>
    <tr><td class="hl"><strong>F</strong></td><td>Cooking oils/fats (deep fryers)</td><td class="ok">Wet chemical only (Ansul R-102)</td><td class="bad">Water (violent steam explosion)</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>CO2 extinguisher - never hold the metal horn.</strong> CO2 discharges at <span class="n-val">-78°C</span> - touching the metal horn causes immediate frostbite. Hold by the plastic handle only.</div></div>

  <div class="n-h1" id="s-co2">💨 Fixed CO2 Total Flooding System</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask CO2 system procedure.</strong> Know the sequence, two-valve system, pre-alarm, and why headcount is mandatory.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> Displaces oxygen in protected space below <span class="n-val">15%</span> - starves fire. Minimum concentration for engine room flooding: <span class="n-val">34%</span> by volume. Stored as liquid at <span class="n-val">~57 bar</span>. Expansion ratio: <span class="n-val">1:450</span> (1 litre liquid → 450 litres gas). Cylinders weighed annually - recharge if weight falls below <span class="n-val">90%</span> of full charge.</div></div>

  <div class="n-h2">CO2 Release Procedure (Two-Valve System)</div>
  <ol class="n-steps">
    <li><strong>Headcount</strong> - confirm all personnel are out of the space. MANDATORY - no exceptions.</li>
    <li>Close all ventilation dampers, skylights, fire dampers, and seal the space</li>
    <li>Stop all fans. Shut fuel oil supply valves to the protected space.</li>
    <li>Operate the <strong>PILOT VALVE</strong> - triggers pre-discharge alarm (<span class="n-val">20–30 second</span> warning) for any remaining personnel</li>
    <li>Operate the <strong>MAIN VALVE</strong> - discharges full CO2 bank into space</li>
    <li>Wait minimum <span class="n-val">24 hours</span> before re-entry</li>
    <li>Re-entry only with SCBA after thorough ventilation and gas measurement (O2 &gt;20.9%, CO2 &lt;0.5%)</li>
  </ol>

  <div class="n-h2">Bulk Low-Pressure (LP) CO2 System Maintenance</div>
  <p class="n-p">Certain modern large-scale vessels replace hundreds of individual high-pressure cylinders with a single bulk <strong>Low-Pressure CO2 system</strong>. The CO2 is stored as a liquid inside heavily insulated steel pressure vessels kept at a constant temperature of <span class="n-val">-18°C</span> under a working pressure of approximately <span class="n-val">20 bar</span>. The ETO carries specific maintenance ownership over the system's electrical sub-layers:</p>
  <ul class="n-list">
    <li><strong>Refrigeration Plant Logs:</strong> Continuously monitor the redundant refrigeration compressors maintaining the internal -18°C profile. Verify zero refrigerant leaks or motor contactor faults. If refrigeration drops, internal vessel pressures spike rapidly.</li>
    <li><strong>Safety Monitoring Loop:</strong> Validate the digital tank liquid level gauge, tank core pressure transmitter, and local safety relief valves. Test the low-liquid-level and high-tank-pressure alarms back to the main IAS loop.</li>
    <li><strong>Annual Class Verification:</strong> Test operational line solenoid valves, verify section valves, run full diagnostic on automated pre-discharge evacuation alarms, and log total remaining CO2 quantity inside the maintenance log.</li>
  </ul>


  <div class="n-h1" id="s-foam">🧯 Fixed Foam Systems</div>
  <table class="n-table">
    <tr><th>Type</th><th>Expansion Ratio</th><th>Use</th></tr>
    <tr><td><strong>Low expansion foam</strong></td><td class="hl">Up to <span class="n-val">20:1</span></td><td>Tanker deck monitors, pump rooms - flows across liquid surface, smothers + cools (Class B)</td></tr>
    <tr><td><strong>High expansion foam</strong></td><td class="hl"><span class="n-val">200:1 to 1000:1</span></td><td>RoRo vehicle decks, large cargo holds, engine rooms - rapidly fills enclosed spaces, displaces oxygen</td></tr>
  </table>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>2026 PFOS Ban:</strong> Firefighting foam containing PFOS (Perfluorooctane Sulfonate) is prohibited on ships. All existing stocks must be replaced with PFOS-free alternatives (C6 AFFF or fluorine-free foam - FFF) before the first survey after <span class="n-val">January 2026</span>. Failure to comply = PSC deficiency.</div></div>

  <div class="n-h1" id="s-sprinkler">🚿 Sprinkler System</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working:</strong> Automatic local discharge using heat-sensitive glass bulbs filled with coloured glycerine. Glycerine expands and shatters glass at rated temperature → releases plug → water discharges. Each sprinkler head activates individually at its rated temperature - only the heads in the fire zone activate.</div></div>

  <table class="n-table">
    <tr><th>Bulb Colour</th><th>Temperature Rating</th><th>Use</th></tr>
    <tr><td>Red</td><td class="hl"><span class="n-val">68°C</span></td><td class="ok">Standard - accommodation, offices</td></tr>
    <tr><td>Yellow</td><td class="hl"><span class="n-val">79°C</span></td><td>Slightly warmer areas</td></tr>
    <tr><td>Green</td><td class="hl"><span class="n-val">93°C</span></td><td>Warm spaces, galley vicinity</td></tr>
    <tr><td>Blue</td><td class="hl"><span class="n-val">141°C</span></td><td>High-temperature areas</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>BLIS (Stop Valve Tamper Alarm):</strong> Triggers supervisory fault alarm on fire panel if the main sprinkler isolation valve is accidentally closed - prevents the system from being unknowingly out of service. Testing: open end-of-line test cock at far end of zone → triggers paddle flow detector → activates zone flow alarm on panel.</div></div>

  <!-- GAP: Water Mist System -->
  <div class="n-h1" id="s-watermist">💦 High-Pressure Water Mist (HI-FOG)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working:</strong> Discharges water at very high pressure (<span class="n-val">70–200 bar</span>) through fine nozzles. Atomises water into extremely fine droplets (<span class="n-val">50–200 µm</span>). Rapid evaporation absorbs massive heat (high latent heat of vaporisation) and the steam volume expansion (<span class="n-val">1700x</span>) displaces oxygen locally. Safer for manned spaces than CO2. Effective on Class A, B, and F fires.</div></div>

  <div class="n-h1" id="s-detection">🔍 Fire Detection - Types &amp; Working</div>
  <table class="n-table">
    <tr><th>Detector</th><th>Principle</th><th>Best For</th></tr>
    <tr><td><strong>Ionisation smoke</strong></td><td>Americium-241 (alpha) ionises air chamber. Smoke particles reduce ion current → alarm. (<span class="n-val">432-year</span> half-life)</td><td class="ok">Fast flaming fires with small combustion particles</td></tr>
    <tr><td><strong>Photoelectric smoke</strong></td><td>LED + photodetector. Smoke scatters light onto sensor → alarm.</td><td class="ok">Slow smouldering fires. Fewer steam false alarms.</td></tr>
    <tr><td><strong>Fixed temperature heat</strong></td><td>Bimetallic strip or fusible link triggers at preset threshold (<span class="n-val">58°C, 72°C, 93°C</span>)</td><td>High temp areas, engine room</td></tr>
    <tr><td><strong>Rate-of-Rise (ROR)</strong></td><td>Triggers when temp rises &gt; <span class="n-val">8–10°C per minute</span></td><td class="ok">Earliest warning for fast-developing fires</td></tr>
    <tr><td><strong>UV/IR flame</strong></td><td>Detects UV or infrared radiation directly from flames. Response: milliseconds.</td><td class="ok">Engine room bilges, boiler fronts</td></tr>
  </table>

  <div class="n-h2">Aspirating Smoke Detectors (VESDA Arrays)</div>
  <p class="n-p">For high-risk critical spaces requiring ultra-early warning (computer server spaces, cargo control rooms, navigation bridge electronics), vessels implement an active <strong>Aspirating Smoke Detector</strong> system. An internal fan aspirator continuously draws air samples through a network of deckhead sampling pipes back into a central sensing chamber. The sample passes across an intense laser light source and photodetector array capable of measuring microscopic obscuration levels.</p>
  <p class="n-p"><strong>Testing &amp; Maintenance:</strong> ETOs must inject certified test aerosol directly into a sampling hole along the pipe run and verify the correct zone triggers at the bridge within seconds. This confirms lines are free from soot blockages and drawing suction cleanly. Air filters and suction fans must be cleaned regularly per the PMS schedule to prevent false fault alarms.</p>

  <div class="n-h2">Fire Panel Electrical Fault Isolation Logic</div>
  <p class="n-p">A fire alarm panel must visually and audibly distinguish an electrical line fault from a genuine fire alarm using a monitored two-state supervised loop. Wiring defects introduce separate parameters:</p>
  <ul class="n-list">
    <li><strong>Open Circuit (OC Fault):</strong> A severed wire or disconnected sensor drops loop current to absolute zero, illuminating a <strong>Yellow/Amber LED Fault alarm</strong> on the panel. Alerts crew that a zone has lost coverage and requires repair.</li>
    <li><strong>Partial Shunt (Moisture Ingress):</strong> Saltwater or condensation leaking into a junction box can cause a partial short-circuit. If it mimics an active alarm current, the panel may cycle a false fire alarm or latch an amber line fault code on that specific address zone.</li>
  </ul>


  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>NEVER test a UV flame detector with a naked flame or lighter.</strong> Use only the calibrated UV test lamp provided by the manufacturer. Naked flame = real fire risk + permanent detector damage + severe safety violation.</div></div>

  <div class="n-h3">Zener Diode Loop Supervision Circuit Physics</div>
  <p class="n-p">To guarantee electrical circuit stability on loop lines, Zener diodes are deployed to configure potential divider networks. In a standard standby line state, the Zener diode remains strictly <strong>reverse-biased</strong>, passing a tiny constant monitoring current that tells the master panel the wiring is structurally healthy. When a sensor activates, it shunts the loop line, shifting the potential difference directly across the base of an internal <strong>PNP transistor</strong>. This voltage transition forces the PNP transistor into full saturation conduction, completing the circuit to energize the master fire alarm relay. This protects delicate panel microelectronics from loop line voltage surges while enforcing three-state monitoring.</p>

  <div class="n-h3">The Universal Condensation Drain Box</div>
  <p class="n-p">On tube-type sampling lines and accommodation zones exposed to extreme thermal differentials (warm internal living spaces vs cold exterior hull plating), moisture condensation naturally forms inside the pipe runs. A <strong>Universal Drain Box (Moisture Trap)</strong> is fitted at the lowest physical point of the network. If unmaintained, accumulated water will bridge detector pins - causing intermittent false fire alarms, wire corrosion, or terminal PCB failures. ETOs must drain these traps during weekly safety rounds and periodically replace the built-in felt absorbent filters.</p>

  <!-- GAP: Detector Testing Procedures -->
  <div class="n-h1" id="s-testing">🧪 Fire Detector Testing Procedures</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: Surveyors ask specifically how to test UV and Heat detectors. NEVER use a lighter.</strong></div></div>
  <div class="n-h2">UV Flame Detector Testing</div>
  <ol class="n-steps">
    <li>Inform bridge/CCR - put fire panel in TEST mode to prevent false alarms.</li>
    <li>Use a CALIBRATED UV TEST LAMP (supplied by manufacturer). DO NOT use naked flame (creates real fire risk, especially in engine room).</li>
    <li>Clean detector window (oil film blocks UV). Hold test lamp at prescribed distance (150-300mm).</li>
    <li>Verify alarm on panel. Reset and log.</li>
  </ol>
  <div class="n-h2">Heat Detector Testing</div>
  <ol class="n-steps">
    <li>Inform bridge/CCR - put fire panel in TEST mode.</li>
    <li>Use APPROVED HEAT GUN or calibrated hot air blower. DO NOT use hair dryer or naked flame (can melt/damage the detector).</li>
    <li>For Fixed Temp: Heat slowly until alarm activates (verify temp is within ±10% of setpoint).</li>
    <li>For Rate-of-Rise (ROR): Heat rapidly (alarm should trigger within 10-15s).</li>
  </ol>

  <div class="n-h1" id="s-pumps">💧 Fire Pumps - SOLAS Requirements</div>
  <table class="n-table">
    <tr><th>Pump</th><th>Location</th><th>Power</th><th>Delivery</th></tr>
    <tr><td><strong>Main fire pump</strong></td><td>Engine room</td><td>Main switchboard</td><td>Fire main pressure at all hydrants</td></tr>
    <tr><td><strong>Emergency fire pump</strong></td><td class="hl">OUTSIDE main machinery space (forepeak or forward compartment)</td><td class="hl">Independent - self-contained diesel OR emergency generator</td><td class="hl">Min <span class="n-val">0.3 MPa (3 bar)</span> while supplying two simultaneous jets</td></tr>
  </table>

  <div class="n-h2">SOLAS International Shore Coupling (ISC) Specifications</div>
  <p class="n-p">Mandated by <strong>SOLAS Regulation II-2/Reg 10</strong>, all vessels must carry an International Shore Coupling accessible on both sides of the deck to allow a shore-side fire brigade or port tug to supply water directly into the ship's fire main anywhere in the world.</p>
  <table class="n-table">
    <tr><th>ISC Parameter</th><th>SOLAS Metric</th></tr>
    <tr><td>Outside Flange Diameter</td><td class="hl"><span class="n-val">178 mm</span></td></tr>
    <tr><td>Inner Diameter (Bore)</td><td class="hl"><span class="n-val">64 mm</span></td></tr>
    <tr><td>Pitch Circle Diameter (PCD)</td><td class="hl"><span class="n-val">132 mm</span></td></tr>
    <tr><td>Flange Bolt Configuration</td><td class="hl"><span class="n-val">4 holes</span></td></tr>
    <tr><td>M16 Bolt Thread Diameter</td><td class="hl"><span class="n-val">16 mm</span></td></tr>
    <tr><td>Minimum Flange Thickness</td><td class="hl"><span class="n-val">14.5 mm</span></td></tr>
    <tr><td>Rated Safe Working Pressure</td><td class="hl"><span class="n-val">10.5 kg/cm² (~10.3 bar)</span></td></tr>
  </table>
  <p class="n-p">The coupling assembly must be stored alongside 4 matching washers, 4 nuts, a gasket sheet, and an approved blank flange to seal the lines when out of service. Flange must be steel or equivalent spark-resistant metal.</p>


  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Fire Classes:</strong> A=water/solid. B=foam/liquid. C=DCP+stop gas. D=special powder/metal. E=CO2/electrical. F=wet chemical/fat (galley). CO2 expansion 1:450. O2 below 15% = fire out. 34% concentration for ER. Sprinkler red bulb = 68°C standard. ROR = earliest warning (8°C/min).</div></div>

  
  <div class="n-h1" id="s-hold-roro">📦 Cargo Hold Container Fires &amp; 2026 Ro-Ro Overhaul</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Effective 2026, surveyors screen container loss containment strategies and new statutory vehicle deck rules.</strong></div></div>

  <div class="n-h2">Container Fire in a Cargo Hold - ETO Emergency Scope</div>
  <ol class="n-steps">
    <li><strong>Oxygen Deprivation (Starvation):</strong> Instantly close all cargo hold ventilation dampers, flaps, trunking paths, and stop all extraction fans. Dog down weathertight hatch covers to seal the space and choke off oxygen entry.</li>
    <li><strong>Prevent Backdraft:</strong> <strong class="bad">NEVER open a hatch cover to inspect fire progress.</strong> Introducing oxygen into a semi-suffocated container fire causes immediate explosive re-ignition (backdraft). Progress tracked exclusively via remote temperature sensors and bulkhead thermal imaging.</li>
    <li><strong>Fixed Suppression Activation:</strong> Once hold is certified sealed and clear of crew, activate the CO2 total flooding system bank. Keep hold sealed for a minimum of <span class="n-val">24 hours</span> to extinguish deep-seated hot spots.</li>
    <li><strong>ETO Core Safeguards:</strong> Verify emergency generator takes load cleanly on ESB. Monitor main fire panel to trace potential spread into adjacent bulkheads. Maintain GMDSS communications and ensure PA system remains operational.</li>
  </ol>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why Water is Forbidden in Holds:</strong> Flooding a sealed cargo hold with water dilutes the existing CO2 gas blanket. Introducing water into unknown container cargo can trigger violent exothermic or explosive gas releases if water-reactive chemicals (IMDG Class 4.3) are present. Massive water accumulation creates a <strong>free surface effect</strong> that destroys vessel stability and can capsize the ship.</div></div>

  <div class="n-h2">Mandatory 2026 Ro-Ro Passenger Ship Safety Overhaul (SOLAS II-2/20)</div>
  <p class="n-p">SOLAS Chapter II-2 Regulation 20 and FSS Code updates enter into full global enforcement on <span class="n-val">1 January 2026</span>. New build and retrofit ships must deploy three electronic safety architectures:</p>
  <ul class="n-list">
    <li><strong>Multi-Sensor Combined Detection:</strong> Vehicle spaces can no longer utilize smoke detectors alone. Must be fitted with <strong>combined smoke AND heat point detectors</strong>, or continuous <strong>linear heat-sensing cables</strong> strung across the deckhead. Smouldering vehicle wiring emits smoke first; rapid fuel fires emit heat first - combined sensors catch both variants.</li>
    <li><strong>Continuous Video Monitoring with 24-Hour Playback:</strong> All vehicle spaces must carry continuous CCTV coverage linked directly to bridge and ECR. System must possess night-vision or thermal profiles and maintain a mandatory <span class="n-val">24-hour unalterable playback loop</span> to assist post-casualty investigations.</li>
    <li><strong>Weather Deck Water Monitors:</strong> Open weather vehicle decks on Ro-Ro passenger vessels must carry fixed high-capacity water-based fire-extinguishing monitors (water cannons). Remotely operated from safety centers to suppress deck fires without sending crew into active heat paths. ETO tests monitor rotation, elevation mechanisms, and system water pressures quarterly.</li>
  </ul>

  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 15</div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Fire in MSB - what action as ETO? (All surveyors)</strong><br><strong>Ideal Answer:</strong> NEVER use water or foam on live switchboard - electrocution. Small incipient fire: isolate affected feeder breaker, use portable CO2 or DCP extinguisher. Large fire: order full blackout - trip all generator ACBs remotely to de-energise busbars. Once voltmeters read zero, apply CO2 freely. Emergency generator auto-starts in 45 seconds. After fire: ventilate toxic PVC fumes, investigate root cause, log incident.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Classes of fire and correct extinguisher for each? Galley fire? (All surveyors)</strong><br><strong>Ideal Answer:</strong> A=solid/water. B=liquid/foam or CO2 or DCP. C=gas/DCP after isolating supply. D=combustible metals/special powder. E=electrical/CO2 preferred (no residue, non-conductive), isolate power first. F=cooking oils/wet chemical only. Galley deep-fat fryer = Class F. Water = violent steam explosion (water flash-boils in 300°C oil). Mandatory wet chemical system (e.g. Ansul R-102).</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>CO2 system procedure for engine room fire - step by step. (All surveyors)</strong><br><strong>Ideal Answer:</strong> 1. Headcount - all personnel out. 2. Seal space: close ventilation dampers, skylights, fire dampers, stop fans. 3. Shut fuel supply. 4. Operate pilot valve → pre-discharge alarm sounds for <span class="n-val">20–30 seconds</span>. 5. Operate main valve → full CO2 bank discharges. 6. Wait minimum <span class="n-val">24 hours</span>. 7. Re-enter with SCBA only after ventilation and gas measurement.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Difference between low expansion and high expansion foam? (Kamath, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> Low expansion: ratio up to <span class="n-val">20:1</span>. Dense wet foam flows across liquid surface forming smothering/cooling film. Used on tanker deck monitors and pump rooms (Class B). High expansion: ratio <span class="n-val">200:1 to 1000:1</span>. Light voluminous dry foam rapidly fills enclosed spaces to physically displace oxygen. Used in RoRo vehicle decks, large cargo holds, engine rooms.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the PFOS ban? When does it apply? (New 2026 question)</strong><br><strong>Ideal Answer:</strong> PFOS (Perfluorooctane Sulfonate) is a toxic persistent chemical in traditional AFFF firefighting foam. It is now prohibited on ships. All existing foam stocks must be replaced with PFOS-free alternatives - C6 AFFF or fluorine-free foam (FFF) - before the first survey after <span class="n-val">January 2026</span>. ETO must ensure current foam inventory is compliant and procure replacement foam before the survey deadline.</div></div>

  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 15</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points</th></tr>
    <tr><td>Fire classes and extinguishers</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>A=water B=foam/CO2 C=DCP+stop gas E=CO2 F=wet chemical | Galley = Class F, wet chemical only</td></tr>
    <tr><td>CO2 system procedure</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Headcount → seal → pilot valve → <span class="n-val">20-30s</span> alarm → main valve → <span class="n-val">24 hr</span> wait → SCBA reentry</td></tr>
    <tr><td>MSB fire action</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Never water on live board → blackout → CO2 after voltmeter = 0 → ventilate PVC fumes</td></tr>
    <tr><td>Foam types</td><td class="hl">⭐⭐⭐⭐ Kamath, Vishwanathan</td><td>Low exp <span class="n-val">20:1</span> = tanker deck | High exp <span class="n-val">200-1000:1</span> = RoRo/cargo holds</td></tr>
    <tr><td>Sprinkler bulb colours</td><td class="hl">⭐⭐⭐⭐ Multiple surveyors</td><td>Red = <span class="n-val">68°C</span> standard | BLIS = stop valve tamper alarm</td></tr>
    <tr><td>PFOS ban 2026</td><td class="hl">⭐⭐⭐⭐ New question 2026</td><td>Replace AFFF with PFOS-free foam before first survey after <span class="n-val">Jan 2026</span></td></tr>
    <tr><td>Emergency fire pump</td><td class="hl">⭐⭐⭐⭐ Nair, Deswal</td><td>Outside ER | Independent power | Min <span class="n-val">0.3 MPa (3 bar)</span> | 2 simultaneous jets</td></tr>
    <tr><td>ROR vs fixed temp detector</td><td class="hl">⭐⭐⭐ Vishwanathan</td><td>ROR = earliest warning (<span class="n-val">8°C/min</span>) | Fixed = preset threshold. UV = millisecond response, test with UV lamp only.</td></tr>
  </table>

    </div>
</div>
</div>
`);

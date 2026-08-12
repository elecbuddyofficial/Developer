window.loadNotes("F18", `<div class="view" id="view-notes-f18">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F18')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F18 - Sensors &amp; Transducers</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 18 of 25 · Difficulty ★★★☆☆ · Study Time 55-75 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-definitions')">Sensor vs Transducer vs Transmitter</button>
    <button class="anc-btn" onclick="jumpTo('s-thermocouple')">Thermocouple</button>
    <button class="anc-btn" onclick="jumpTo('s-rtd')">RTD / Pt100</button>
    <button class="anc-btn" onclick="jumpTo('s-thermistor')">Thermistor</button>
    <button class="anc-btn" onclick="jumpTo('s-temp-compare')">Temperature Sensor Comparison</button>
    <button class="anc-btn" onclick="jumpTo('s-pressure')">Pressure Sensing</button>
    <button class="anc-btn" onclick="jumpTo('s-level')">Level Sensing</button>
    <button class="anc-btn" onclick="jumpTo('s-flow')">Flow Sensing</button>
    <button class="anc-btn" onclick="jumpTo('s-fire')">Smoke &amp; Fire Detection</button>
    <button class="anc-btn" onclick="jumpTo('s-proximity')">Proximity &amp; Speed Sensors</button>
    <button class="anc-btn" onclick="jumpTo('s-420ma')">The 4-20mA Current Loop</button>
    <button class="anc-btn" onclick="jumpTo('s-interview')">Interview Answers</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to distinguish a sensor from a transducer from a transmitter, explain how a thermocouple generates a voltage and why cold junction compensation is needed, state the full set of properties of a Pt100 without prompting, including its wiring, explain why a thermistor is not an RTD even though both are resistive temperature devices, describe the common methods of pressure, level and flow sensing in outline, explain how ionisation and photoelectric smoke detectors differ physically and which fire type each suits, and explain why instrumentation signals are transmitted as a 4-20mA current loop rather than a voltage, including why the zero is 4mA and not 0mA. This module is asked constantly in orals because every automation and alarm question on board eventually comes back to "what sensor is that and how does it work."</p>

  <div class="n-h1" id="s-definitions">Sensor, Transducer and Transmitter</div>
  <p class="n-p">These three words get used loosely on board and interviewers use the confusion to test whether you actually understand the signal chain, so fix the distinction early.</p>
  <table class="n-table">
    <tr><th>Term</th><th>What it does</th><th>Example</th></tr>
    <tr><td><strong>Sensor</strong></td><td>Detects a physical quantity and responds to it. The primary detecting element.</td><td>A Pt100 element sitting in a thermowell, a bourdon tube sensing pressure</td></tr>
    <tr><td><strong>Transducer</strong></td><td>Converts one form of energy or signal into another, usually electrical. Broader term than sensor: a sensor is a transducer, but so is a loudspeaker, which converts electrical energy into sound.</td><td>A strain gauge converting mechanical strain into a change of resistance</td></tr>
    <tr><td><strong>Transmitter</strong></td><td>Takes the transducer's low level output, conditions it (amplifies, linearises, converts to a standard signal) and sends it over distance to a control system.</td><td>A pressure transmitter that turns a millivolt strain gauge signal into a 4-20mA loop signal</td></tr>
  </table>
  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>The one line answer.</strong> A sensor detects the quantity, a transducer converts it into a usable signal, and a transmitter conditions and sends that signal to the control room over a standard, noise resistant format. On a real instrument these three functions are often built into one housing, but they are still three separate jobs.</div></div>

  <div class="n-h1" id="s-thermocouple">Thermocouple</div>
  <p class="n-p">The thermocouple is the most widely used industrial temperature sensor because it is simple, rugged, cheap and covers an enormous temperature range with no external power needed to generate its signal.</p>

  <div class="n-h2">The Seebeck effect</div>
  <p class="n-p">Join two dissimilar metals at one end and heat that junction relative to the other end, and a small voltage appears across the open ends. This is the <strong>Seebeck effect</strong>: a temperature difference between two junctions of dissimilar metals produces an EMF. The magnitude of that EMF is a function of the temperature difference between the two junctions, not the absolute temperature of either one alone. That last point is the whole key to understanding cold junction compensation below.</p>
  <p class="n-p">The junction placed in the process being measured is the <strong>hot junction</strong> (or measuring junction). The point where the thermocouple wires connect to the copper wiring of the instrument is the <strong>cold junction</strong> (or reference junction), and it is a junction whether anyone intended it or not: the moment thermocouple metal meets ordinary copper terminal wiring, a second thermoelectric junction exists there too.</p>

  <div class="n-h2">Common types</div>
  <table class="n-table">
    <tr><th>Type</th><th>Materials</th><th>Typical usable range</th><th>Notes</th></tr>
    <tr><td><strong>J</strong></td><td>Iron / Constantan</td><td>Roughly -40°C to +750°C</td><td>Higher output than K, but iron leg corrodes in oxidising atmospheres at the top end</td></tr>
    <tr><td><strong>K</strong></td><td>Chromel / Alumel (Nickel-Chromium / Nickel-Aluminium)</td><td>Roughly -200°C to +1250°C</td><td>The most common general purpose type, good stability, wide range</td></tr>
    <tr><td><strong>T</strong></td><td>Copper / Constantan</td><td>Roughly -200°C to +350°C</td><td>Very stable and accurate at low temperature, one leg is plain copper</td></tr>
  </table>
  <p class="n-p">Exact quoted range limits vary a little between manufacturers and standards, so treat the figures above as the order of magnitude to quote in an interview rather than a certificate value. The point the examiner wants is the shape of the comparison: J is the mid range general type limited by iron corrosion, K is the wide range workhorse, T is the low temperature precision choice.</p>

  <div class="n-h2">Why cold junction compensation is needed</div>
  <p class="n-p">Because the thermocouple only measures the <em>difference</em> in temperature between its two junctions, its output voltage tells you nothing about the hot junction's actual temperature unless you also know the cold junction's temperature. If the cold junction (the terminal block inside the instrument) is sitting at, say, 25°C rather than the 0°C the tables are written against, the raw millivolt reading will be low by exactly the EMF that 25°C would itself produce, and reading it straight off a 0°C reference table gives a temperature that is too low.</p>
  <p class="n-p"><strong>Cold junction compensation</strong> solves this by separately measuring the actual temperature at the reference junction, usually with a small local sensor such as a thermistor built into the terminal block, and electronically adding back the equivalent EMF that junction would itself be generating. The instrument then reports the true hot junction temperature regardless of how warm or cool its own terminals happen to be.</p>
  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Classic follow up:</strong> "What happens if cold junction compensation fails or is wired wrong?" The reading simply drifts with the ambient temperature at the terminal box, since the instrument is no longer correcting for it. A thermocouple circuit that reads correctly one watch and drifts a few degrees the next, tracking engine room ambient rather than the process, points straight at a cold junction compensation fault.</div></div>
  <p class="n-p"><strong>Where used on board:</strong> exhaust gas temperature on the main engine and generators, where the range and ruggedness needed rules out an RTD, and any high temperature point generally.</p>

  <div class="n-h1" id="s-rtd">RTD and Pt100</div>
  <p class="n-p">A <strong>Resistance Temperature Detector (RTD)</strong> works on the opposite principle to a thermocouple: instead of generating its own small voltage, it is a passive element whose <strong>electrical resistance changes in a known, repeatable way with temperature</strong>, and an external circuit passes a small measuring current through it and reads that resistance.</p>
  <p class="n-p">The element is almost always platinum, because platinum is chemically stable, does not oxidise, and gives a very linear, very repeatable resistance-temperature relationship over a wide range. The near universal industrial RTD is the <strong>Pt100</strong>, and it is asked by name constantly in orals, usually phrased as "what are the properties of a Pt100?"</p>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>The trap.</strong> "What are the properties of a Pt100?" is a five part question disguised as one. Answering only "it's an RTD" or "it's a resistance sensor" scores almost nothing. A complete answer must give all five: the resistance at 0°C, the temperature coefficient, the linearity, the usable range, and the wiring configuration. Have all five ready without having to think.</div></div>

  <div class="n-h2">The five properties</div>
  <table class="n-table">
    <tr><th>Property</th><th>Value / description</th></tr>
    <tr><td><strong>Resistance at 0°C</strong></td><td><span class="n-val">100.00 Ω</span>, by definition, per IEC 60751. This is where the name "Pt100" comes from.</td></tr>
    <tr><td><strong>Temperature coefficient (α)</strong></td><td><span class="n-val">Positive</span>, resistance rises as temperature rises (a PTC device). The standard IEC 60751 alpha value is approximately <span class="n-val">0.00385 Ω/Ω/°C</span> between 0°C and 100°C.</td></tr>
    <tr><td><strong>Linearity</strong></td><td><span class="n-val">Near linear</span> resistance-temperature relationship over its working range, close enough to a straight line that simple linear scaling is usable for many purposes, though precision instruments apply a small correcting polynomial (the Callendar-Van Dusen equation) for full accuracy.</td></tr>
    <tr><td><strong>Usable range</strong></td><td>Typically about <span class="n-val">-200°C to +850°C</span> for a platinum element, though most marine applications use it well inside that, for bearing, winding and cooling water temperatures rather than at the extremes.</td></tr>
    <tr><td><strong>Wiring</strong></td><td><span class="n-val">2-wire, 3-wire or 4-wire</span> connection, see below. This is the part candidates most often forget to mention.</td></tr>
  </table>

  <div class="n-h2">Why the resistance-temperature relationship is near linear</div>
  <p class="n-p">In a metal, raising temperature increases the thermal vibration of the lattice atoms, which increases the rate at which free electrons collide with them as they drift through the conductor, and each extra collision means more opposition to flow. Over a modest temperature span this effect is very close to proportional to the temperature rise, which is why platinum's resistance climbs in an almost straight line with temperature rather than the curved relationship seen in semiconductors.</p>

  <div class="n-h2">2-wire, 3-wire and 4-wire connection: why lead resistance matters</div>
  <p class="n-p">The instrument measures temperature by measuring resistance, and it cannot tell the difference between resistance sitting inside the platinum element itself and resistance sitting in the copper lead wire running out to it. Any resistance in that cable run is read as if it were extra sensor resistance, and is therefore read as extra temperature.</p>
  <p class="n-p">This matters more than it sounds. A Pt100 changes resistance by roughly <span class="n-val">0.385 Ω per °C</span>. A long cable run, especially with thin conductors or in a hot engine room where copper resistance itself is rising with ambient temperature, can easily add an ohm or more of lead resistance, which the instrument would misread as several degrees of error.</p>

  <table class="n-table">
    <tr><th>Configuration</th><th>How it works</th><th>Lead resistance error</th></tr>
    <tr><td><strong>2-wire</strong></td><td>A single pair of wires carries the measuring current to the element and the resulting voltage back to the instrument along the same two conductors.</td><td class="bad">Full lead resistance of both wires is added directly to the reading, uncompensated. Only acceptable for short runs or where accuracy is unimportant.</td></tr>
    <tr><td><strong>3-wire</strong></td><td>A third wire is added. The instrument uses it to measure the lead resistance separately (assuming both leads are matched, equal length, same gauge) and subtracts it from the total reading.</td><td class="hl">Compensated, assuming the two current-carrying leads are matched. The industry standard for most process measurement.</td></tr>
    <tr><td><strong>4-wire</strong></td><td>Two wires carry the constant measuring current to the element, and a completely separate pair, carrying negligible current, measures the voltage directly across the element itself.</td><td class="ok">Lead resistance in the current-carrying wires causes no error at all, because the voltage sensing leads carry effectively no current and so drop no voltage of their own. Used for laboratory and calibration grade accuracy.</td></tr>
  </table>
  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Say this in the interview.</strong> Lead resistance matters because the instrument cannot distinguish resistance in the wire from resistance in the sensor, and both are read as temperature. A 3-wire connection cancels this by measuring and subtracting the lead resistance, and a 4-wire connection eliminates it entirely by separating the current-carrying path from the voltage-sensing path, so the sensing leads never carry current and therefore drop no voltage.</div></div>
  <p class="n-p"><strong>Where used on board:</strong> bearing temperatures, winding temperatures on large motors and generators, cooling water and lube oil temperature, anywhere accuracy over a moderate range matters more than the extreme range or ruggedness a thermocouple offers.</p>

  <div class="n-h1" id="s-thermistor">Thermistor</div>
  <p class="n-p">A thermistor is also a resistive temperature device, but it is made from a sintered semiconductor ceramic rather than a pure metal, and that changes its behaviour completely.</p>
  <table class="n-table">
    <tr><th>Type</th><th>Behaviour</th></tr>
    <tr><td><strong>NTC (Negative Temperature Coefficient)</strong></td><td>Resistance <strong>falls</strong> as temperature rises. As temperature increases, more charge carriers become available in the semiconductor, and this dominates heavily over any increase in collision losses. The common type used for measurement.</td></tr>
    <tr><td><strong>PTC (Positive Temperature Coefficient)</strong></td><td>Resistance <strong>rises</strong> sharply, often over a narrow temperature band, once a threshold is passed. Used less for precision measurement and more as a self-resetting protective device, for example built into motor windings to trip on overheating.</td></tr>
  </table>
  <p class="n-p"><strong>Contrast with the RTD:</strong> a thermistor's resistance change per degree is far larger than a platinum RTD's, which makes it very sensitive over a narrow range, but its resistance-temperature relationship is strongly non-linear (closer to exponential) rather than the RTD's near straight line, and its usable range is much narrower and its long term stability generally poorer. A thermistor is chosen where high sensitivity over a limited band is wanted and cost must stay low, for example cold junction compensation sensors, coolant temperature switches, and small proximity alarms. An RTD is chosen where accuracy and a wide, predictable range matter more.</p>

  <div class="n-h1" id="s-temp-compare">Comparison: Thermocouple vs RTD vs Thermistor</div>
  <p class="n-p">If one table from this module gets memorised, make it this one, since the choice between these three is a recurring "which would you use and why" question.</p>
  <table class="n-table">
    <tr><th>Property</th><th>Thermocouple</th><th>RTD (Pt100)</th><th>Thermistor</th></tr>
    <tr><td>Range</td><td class="ok">Widest, roughly -200°C to over +1000°C depending on type</td><td>Wide, roughly -200°C to +850°C</td><td class="bad">Narrowest, typically -50°C to +150°C</td></tr>
    <tr><td>Linearity</td><td class="hl">Moderately non-linear, needs a reference table or linearisation</td><td class="ok">Near linear</td><td class="bad">Strongly non-linear (exponential)</td></tr>
    <tr><td>Accuracy / sensitivity</td><td>Moderate</td><td class="ok">High and stable</td><td class="ok">Very high sensitivity, but over a narrow band</td></tr>
    <tr><td>Response time</td><td class="ok">Fast, small thermal mass</td><td>Moderate, depends on sheath and mass</td><td class="ok">Fast, small element</td></tr>
    <tr><td>Cost</td><td class="ok">Low</td><td>Moderate</td><td class="ok">Low</td></tr>
    <tr><td>Power needed</td><td class="ok">Self-generating, none needed</td><td>Needs excitation current</td><td>Needs excitation current</td></tr>
    <tr><td>Typical marine use</td><td>Exhaust gas, high temperature points</td><td>Bearings, windings, cooling water, process accuracy</td><td>Cold junction reference, coolant switches, alarm points</td></tr>
  </table>

  <div class="n-h1" id="s-pressure">Pressure Sensing</div>
  <p class="n-p">Four methods cover almost every pressure gauge and transmitter found on a ship. Know the physical principle of each, in outline, rather than the full derivation.</p>
  <table class="n-table">
    <tr><th>Method</th><th>Principle</th></tr>
    <tr><td><strong>Bourdon tube</strong></td><td>A curved, flattened metal tube sealed at one end. Applied pressure tries to straighten the curve, and that mechanical movement is linked through gearing to a pointer. Purely mechanical, no electrical output, the classic local pressure gauge.</td></tr>
    <tr><td><strong>Diaphragm</strong></td><td>A thin flexible disc deflects under applied pressure. That deflection is measured, mechanically as a gauge, or electrically by a strain gauge or capacitive element bonded to or facing the diaphragm.</td></tr>
    <tr><td><strong>Strain gauge</strong></td><td>A resistive element bonded to a diaphragm or structural member stretches or compresses with it, changing its resistance very slightly. Usually wired into a Wheatstone bridge so the tiny resistance change produces a usable voltage output. Common in electronic pressure transmitters.</td></tr>
    <tr><td><strong>Piezoelectric</strong></td><td>Certain crystals (quartz being the classic example) generate a small electrical charge when mechanically stressed. Fast responding, well suited to dynamic or rapidly changing pressure such as combustion pressure indication, but the charge leaks away over time, so it is not suited to measuring a genuinely static pressure held for a long period.</td></tr>
  </table>

  <div class="n-h1" id="s-level">Level Sensing</div>
  <table class="n-table">
    <tr><th>Method</th><th>Principle</th></tr>
    <tr><td><strong>Float</strong></td><td>A float rides on the liquid surface and its position, sensed mechanically or magnetically, indicates level. Simple and reliable, the traditional tank gauge method.</td></tr>
    <tr><td><strong>Capacitance probe</strong></td><td>A probe forms one plate of a capacitor, the tank wall or a reference electrode the other, and the liquid acts as (or displaces) the dielectric between them. As level rises, the capacitance changes in a known way, and that change is converted to a level reading.</td></tr>
    <tr><td><strong>Ultrasonic</strong></td><td>A transducer above the liquid sends a sound pulse down to the surface and times the echo returning. Since the speed of sound in air is known, the time of flight gives the distance to the surface, and therefore the level. Non-contact, but affected by vapour, foam and turbulence at the surface.</td></tr>
    <tr><td><strong>Differential pressure (DP)</strong></td><td>Measures the hydrostatic pressure at the bottom of the tank relative to the pressure at the top (or atmosphere for an open tank). Since that pressure is directly proportional to the height of liquid above the sensor for a given density, the DP reading converts directly to level, provided the liquid's density is known and constant.</td></tr>
    <tr><td><strong>Radar</strong></td><td>Similar principle to ultrasonic but uses a microwave pulse instead of sound, timing its reflection off the surface. Not affected by vapour or gas composition above the liquid the way ultrasonic is, and is the preferred method for cargo tank gauging on tankers.</td></tr>
  </table>

  <div class="n-h1" id="s-flow">Flow Sensing, in Brief</div>
  <p class="n-p">Flow is generally inferred rather than measured directly. A restriction such as an <strong>orifice plate</strong> or <strong>venturi</strong> creates a pressure drop that increases with the square of flow rate, and a DP transmitter across it is scaled to read flow. A <strong>turbine flow meter</strong> uses the fluid to spin a small rotor, and rotor speed is proportional to flow rate, sensed magnetically as pulses. An <strong>electromagnetic flow meter</strong> applies Faraday's law: a conductive fluid moving through a magnetic field induces a voltage proportional to its velocity, with no moving parts and no obstruction in the flow path. Each has its place: orifice plates are cheap and universal, turbine meters are accurate for clean fluids, magnetic meters suit conductive liquids like seawater ballast systems where an unobstructed bore matters.</p>

  <div class="n-h1" id="s-fire">Smoke and Fire Detection</div>
  <p class="n-p">Fire detection is one of the most heavily asked areas of this whole module, because it sits directly under SOLAS and every candidate is expected to know not just how each detector works but which fire type it actually suits.</p>

  <div class="n-h2">Ionisation smoke detector</div>
  <p class="n-p">Contains a small radioactive source (historically americium-241) that ionises the air inside a sensing chamber between two charged electrodes, allowing a small, steady current to flow across the gap. When smoke particles enter the chamber they attach to the ionised air molecules, disrupting that current flow. The detector senses the drop in current and alarms.</p>
  <p class="n-p">Ionisation chambers respond most strongly to the very small, largely invisible combustion particles produced by <strong>fast, flaming fires</strong>, fires that burn hot and quickly, such as paper, flammable liquid or a rapidly developing electrical fire. They are relatively less sensitive to the larger, visible particles of a slow smouldering fire.</p>

  <div class="n-h2">Optical (photoelectric) smoke detector</div>
  <p class="n-p">Contains a light source, an LED, and a light sensor arranged so that in clean air the light does not fall directly on the sensor. When smoke enters the chamber, its particles scatter the light, and some of that scattered light falls on the sensor, which triggers the alarm.</p>
  <p class="n-p">This scattering effect is produced much more strongly by the larger, visible smoke particles typical of a <strong>slow, smouldering fire</strong>, such as smouldering insulation, overheated cable or upholstery, which is exactly the fire type ionisation detectors are weaker on.</p>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>The direct question:</strong> "What is the difference between an ionisation and a photoelectric smoke detector?" Give the mechanism and the suitability together, not just one. Ionisation uses a radioactive source ionising a chamber and senses the current drop as smoke disrupts the ion flow, and it responds best to fast, flaming fires with small particles. Photoelectric uses a light beam and senses scattered light reaching a sensor, and it responds best to slow, smouldering fires with larger particles. Neither is universally "better", which is why many modern systems use combined or multi-sensor detectors.</div></div>

  <div class="n-h2">Heat detectors and rate-of-rise</div>
  <p class="n-p">A <strong>fixed temperature</strong> heat detector alarms once the space reaches a set threshold, commonly around 57 to 74°C depending on the space and its normal ambient. A <strong>rate-of-rise</strong> detector alarms on how fast the temperature is climbing rather than waiting for an absolute value, so it can catch a rapidly developing fire well before the space reaches the fixed threshold, while not nuisance tripping on a slow, normal warm-up such as sunlight on a deckhead or a space simply being warm in the tropics. Many detectors combine both functions in one head. Heat detectors are generally used where smoke detection would nuisance trip constantly, such as galleys, and where the space itself is expected to run warm.</p>

  <div class="n-h2">Flame detectors: UV and IR</div>
  <p class="n-p">A flame produces radiation outside the visible spectrum as well as visible light, and flame detectors sense that radiation directly rather than waiting for smoke or heat to build up, which makes them the fastest responding of all fire detection methods. <strong>Ultraviolet (UV)</strong> detectors respond to the UV radiation a flame emits, and are extremely fast but can be triggered by other UV sources such as welding arcs or lightning. <strong>Infrared (IR)</strong> detectors respond to the characteristic flickering IR radiation a flame produces, and are less prone to some of the nuisance sources that trouble UV but can be affected by hot machinery or direct sunlight. Some units combine both (UV/IR) and require both signatures together before alarming, cutting false alarms substantially.</p>
  <p class="n-p"><strong>Where used on board:</strong> flame detectors are fitted in spaces with a genuine risk of rapid, open fire and where speed of detection matters most, engine rooms, pump rooms handling flammable cargo, and paint lockers. Smoke detectors, generally photoelectric or combined types, cover accommodation and general spaces. Heat detectors cover galleys and other normally warm or steamy spaces where smoke detection would be impractical.</p>

  <div class="n-h1" id="s-proximity">Proximity and Speed Sensors, in Outline</div>
  <p class="n-p">An <strong>inductive proximity sensor</strong> detects a nearby metal object without contact: it generates a small oscillating magnetic field, and a metal target entering that field induces eddy currents in itself, damping the oscillation, which the sensor detects. Used for limit switches, valve position and shaft position sensing where a mechanical switch would wear out. A <strong>capacitive proximity sensor</strong> works similarly but detects any object, metallic or not, that changes the capacitance of its sensing field, useful for level switches and detecting non-metallic targets. Speed is most often measured with a small toothed wheel and a magnetic or inductive pickup that generates one pulse per tooth as the shaft turns, giving a pulse frequency directly proportional to shaft speed, the same basic principle behind most tachometers and many governor speed signals.</p>

  <div class="n-h1" id="s-420ma">The 4-20mA Current Loop</div>
  <p class="n-p">Almost every field transmitter on a ship, pressure, level, temperature, flow, sends its output to the control system as a 4-20mA signal, and this is asked about constantly precisely because it seems arbitrary until you understand the reasoning behind both halves of that range.</p>

  <div class="n-h2">Why current, not voltage</div>
  <p class="n-p">A voltage signal sent down a long cable run is degraded by the cable's own resistance: some of the source voltage is dropped across the cable itself before it ever reaches the receiving instrument, and that drop changes with cable length, temperature and any additional connections in the run, all of which introduce measurement error.</p>
  <p class="n-p">A current signal does not have this problem. In a series loop, the same current flows at every point around the circuit regardless of the resistance of the wire it is flowing through, by Kirchhoff's Current Law: current in equals current out. Whatever voltage is lost across the cable's resistance is simply made up for by the loop power supply, and the current itself, which carries the actual measurement information, arrives at the receiving end unchanged. This is why current, not voltage, is used to carry the signal over distance.</p>
  <div class="n-formula">Loop current is common to every point in the series circuit, cable resistance changes only the voltage dropped, never the current itself</div>

  <div class="n-h2">Why 4mA and not 0mA: the live zero</div>
  <p class="n-p">If the scale simply ran from 0mA to 20mA, a genuine zero reading (for example, an empty tank) would look electrically identical to a broken wire, a disconnected transmitter, or a power failure, all of which also produce 0mA. The control system would have no way to tell a real zero from a fault, and a dangerous fault such as a snapped cable could sit undetected, silently reading as "tank empty" or "pressure zero" instead of raising an alarm.</p>
  <p class="n-p">By starting the live range at <span class="n-val">4mA</span> instead, a genuine zero process value is represented by a current that is still flowing (4mA), while 0mA becomes a signal that can only mean a fault: a broken conductor, a disconnected or unpowered transmitter, or a short. This deliberately non-zero baseline is called the <strong>live zero</strong>, and it lets the control system distinguish "the value is genuinely zero" from "the signal itself has failed" and alarm accordingly. It is also why many two-wire loop-powered transmitters can draw their own operating power from that same 4mA baseline current, since 4mA is always present and available whenever the loop is healthy.</p>
  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Say this in the interview.</strong> Current is used instead of voltage because loop current is unaffected by cable resistance, so it arrives at the receiving end exactly as sent regardless of cable run length. The zero is set at 4mA rather than 0mA so that a real zero reading and a broken wire or dead transmitter do not look the same: 4mA means a real, verified zero, and 0mA can only mean a fault.</div></div>

  <div class="n-h1" id="s-interview">Interview Answers, Rapid Fire</div>

  <p class="n-p"><strong>What is a temperature sensor?</strong><br>
  A device that converts a temperature into a usable electrical signal, most commonly one of three types: a thermocouple, which generates its own small voltage from the Seebeck effect between two dissimilar metal junctions at different temperatures; an RTD such as a Pt100, which is a resistive element whose resistance rises with temperature in a near linear way; or a thermistor, a semiconductor device whose resistance changes much more steeply but non-linearly with temperature. The choice between them depends on the range, accuracy and ruggedness the application needs.</p>

  <p class="n-p"><strong>What are the properties of a Pt100?</strong><br>
  It has a resistance of exactly 100 ohms at 0°C, a positive temperature coefficient of about 0.00385 ohms per ohm per degree C, a near linear resistance-temperature relationship, a usable range of roughly minus 200 to plus 850°C, and it can be wired as 2-wire, 3-wire or 4-wire, with 3-wire and 4-wire used to cancel out the error that lead cable resistance would otherwise introduce into the reading.</p>

  <p class="n-p"><strong>What is an RTD and how does it differ from a thermistor?</strong><br>
  An RTD is a Resistance Temperature Detector, almost always platinum, giving a stable, near linear, positive resistance change with temperature over a wide range, needing an excitation current from the instrument since it generates no signal of its own. A thermistor is a semiconductor device with a much larger but strongly non-linear resistance change, usually negative (NTC), over a much narrower range, cheaper and more sensitive but less stable and less linear than an RTD.</p>

  <p class="n-p"><strong>What is a smoke sensor and what types are there?</strong><br>
  A device that detects the products of combustion before flame or heat becomes significant. An ionisation type ionises air in a chamber with a radioactive source and detects smoke by the drop in current it causes as smoke disrupts the ion flow, and it is more sensitive to fast, flaming fires with small particles. A photoelectric type shines light into a chamber and detects smoke by the light it scatters onto a sensor, and it is more sensitive to slow, smouldering fires with larger particles. Heat detectors and rate-of-rise detectors, and UV or IR flame detectors, cover spaces where smoke detection is unsuitable or where the fastest possible response is needed.</p>

  <p class="n-p"><strong>Why is a thermocouple's cold junction compensated?</strong><br>
  Because a thermocouple only produces a voltage proportional to the temperature difference between its hot and cold junctions, not the absolute temperature of either. If the cold junction, at the instrument terminals, is not at a known reference temperature, the reading is wrong by exactly the amount that junction's own temperature would contribute. Compensation measures the actual cold junction temperature locally and adds back the equivalent EMF electronically, so the instrument reports the true hot junction temperature regardless of ambient conditions at the terminal block.</p>

  <p class="n-p"><strong>Why does lead resistance matter for an RTD, and how is it compensated?</strong><br>
  Because the instrument measures resistance to infer temperature, and it cannot distinguish resistance in the connecting cable from resistance in the sensor element itself, so any lead resistance is read as extra temperature. A 3-wire connection measures and subtracts the lead resistance using a third, matched wire. A 4-wire connection removes the error completely by separating the current-carrying leads from a separate, nearly current-free pair used purely to sense the voltage across the element.</p>

  <p class="n-p"><strong>Why is 4-20mA used instead of a voltage signal?</strong><br>
  Because current is the same at every point around a series loop regardless of the cable's resistance, so a current signal arrives unchanged over a long run, while a voltage signal would be degraded by voltage dropped across the cable itself.</p>

  <p class="n-p"><strong>Why does the loop start at 4mA rather than 0mA?</strong><br>
  So a genuine zero reading can be told apart from a fault. With a live zero of 4mA, a real zero process value still shows 4mA flowing, and 0mA can only mean a broken wire, a disconnected or unpowered transmitter, or a short circuit, which lets the control system alarm on a real signal failure instead of silently misreading it as a valid zero.</p>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F18')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the F18 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

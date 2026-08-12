window.loadNotes("F02", `<div class="view" id="view-notes-f02">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F02')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F02 - Electrical Safety &amp; Earthing</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 2 of 25 · Difficulty ★★★★☆ · Study Time 60-75 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-shock')">Effect of Shock</button>
    <button class="anc-btn" onclick="jumpTo('s-bodyohm')">Ohm's Law on the Body</button>
    <button class="anc-btn" onclick="jumpTo('s-contact')">Types of Contact</button>
    <button class="anc-btn" onclick="jumpTo('s-earthing-why')">Why Earthing Exists</button>
    <button class="anc-btn" onclick="jumpTo('s-earthing-types')">Earthing Systems</button>
    <button class="anc-btn" onclick="jumpTo('s-imd')">Insulation Monitoring</button>
    <button class="anc-btn" onclick="jumpTo('s-equip-earth')">Equipment Earthing</button>
    <button class="anc-btn" onclick="jumpTo('s-rcd')">RCD / ELCB</button>
    <button class="anc-btn" onclick="jumpTo('s-megger')">🔴 Megger Testing</button>
    <button class="anc-btn" onclick="jumpTo('s-isolation')">Safe Isolation</button>
    <button class="anc-btn" onclick="jumpTo('s-ppe')">PPE</button>
    <button class="anc-btn" onclick="jumpTo('s-firstaid')">First Aid</button>
    <button class="anc-btn" onclick="jumpTo('s-numericals')">Worked Numericals</button>
    <button class="anc-btn" onclick="jumpTo('s-viva')">Viva Questions</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
    <button class="anc-btn" onclick="jumpTo('s-summary')">Module Summary</button>
  </div>

  <div class="note-content">


  <!-- OBJECTIVES -->
  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to explain how electric shock affects the human body and why current, path and duration matter more than voltage alone, describe why ships use insulated or high-resistance earthed systems rather than solidly earthed neutrals, explain the working principle and purpose of an insulation monitoring device, describe how an RCD detects an earth fault, carry out and interpret an insulation resistance test with correct safety precautions, follow a safe isolation and permit to work procedure, select correct PPE for a given task, and respond correctly to a person suffering electric shock.</p>
  <p class="n-p">This module carries more weight than any other in a sponsorship interview. Fundamentals test whether you understand electricity. Safety tests whether you can be trusted around it. A wrong or careless answer here raises doubt that no amount of technical knowledge elsewhere will offset, so precision matters more here than in any other module.</p>


  <!-- EFFECT OF SHOCK -->
  <div class="n-h1" id="s-shock">Effect of Electric Shock on the Human Body</div>
  <p class="n-p">Four factors determine the severity of an electric shock: the magnitude of current, the path it takes through the body, the duration of exposure, and the frequency of the supply. Voltage is not on this list directly, since it only matters insofar as it drives current through the body's resistance.</p>

  <table class="n-table">
    <tr><th>Current (approx, AC 50/60 Hz)</th><th>Effect</th></tr>
    <tr><td>1 mA</td><td>Threshold of perception, a tingling sensation</td></tr>
    <tr><td>5-10 mA</td><td>Painful shock, muscle contraction begins</td></tr>
    <tr><td>10-20 mA</td><td class="hl">Let-go threshold exceeded, muscles lock, victim cannot release the conductor</td></tr>
    <tr><td>50-100 mA</td><td class="bad">Ventricular fibrillation risk, potentially fatal</td></tr>
    <tr><td>Above 200 mA</td><td class="bad">Severe burns, cardiac arrest, often less fibrillation risk than the <span class="n-val">50-100 mA</span> band due to sustained muscle clamping of the heart</td></tr>
  </table>

  <p class="n-p"><strong>Path through the body</strong> decides which organs are exposed. Hand-to-hand contact drives current directly across the chest, through the heart, and is considered the most dangerous path. Hand-to-foot is also dangerous but a hand-to-single-foot path on the same side of the body is comparatively less likely to cross the heart. This is why standing with one hand in a pocket while testing live equipment is a recognised precaution, it reduces the chance of a hand-to-hand path if a shock occurs.</p>

  <p class="n-p"><strong>Duration</strong> matters because injury, especially burns and fibrillation risk, accumulates the longer current flows. This is the entire justification for fast-acting protective devices: cutting exposure time from seconds to milliseconds is often the difference between a shock and a fatality.</p>

  <p class="n-p"><strong>Frequency</strong> matters more than most candidates expect. The 50-60 Hz range used for AC power is close to the frequency at which the human heart is most susceptible to fibrillation, making it more dangerous ampere for ampere than either DC or very high frequency AC. This is a genuine, correct, and slightly counter-intuitive fact that impresses a panel when stated confidently.</p>


  <!-- OHM'S LAW ON THE BODY -->
  <div class="n-h1" id="s-bodyohm">Ohm's Law Applied to the Body</div>
  <p class="n-p">The body is a resistor, and Ohm's Law applies to it exactly as it applies to any conductor: I = V / R. Body resistance is not fixed. Dry, unbroken skin can present several thousand ohms of resistance, while wet or broken skin can drop this to a few hundred ohms or less. Internal body resistance, once the skin barrier is bypassed, is much lower still, typically a few hundred ohms.</p>
  <table class="n-table">
    <tr><th>Condition</th><th>Approx. Resistance</th></tr>
    <tr><td>Dry skin</td><td>1000-100,000 Ω</td></tr>
    <tr><td>Wet or sweaty skin</td><td class="bad">300-1000 Ω</td></tr>
    <tr><td>Internal body (skin bypassed)</td><td class="bad">100-500 Ω</td></tr>
  </table>
  <p class="n-p"><strong>Why this matters directly:</strong> at 230 V, dry skin at 100,000 Ω would only drive <span class="n-val">2.3 mA</span>, barely felt. The same 230 V across wet skin at 500 Ω drives 460 mA, well past the fatal range. The voltage did not change. The resistance did. This is the complete answer to the interview trap from F01, "does voltage kill?" It is current that injures, and body resistance, which varies hugely with moisture, is what decides how much current a given voltage produces. This is also the reason engine rooms, deck areas and anywhere with wet or sweaty conditions are treated as higher risk for the exact same equipment and voltage as a dry switchboard room.</p>


  <!-- TYPES OF CONTACT -->
  <div class="n-h1" id="s-contact">Types of Shock and Contact</div>
  <p class="n-p"><strong>Direct contact</strong> is touching a live conductor or terminal that is normally live in operation, for example touching an exposed busbar. <strong>Indirect contact</strong> is touching a conductive part that has become live due to a fault, for example touching a motor frame that has become live because of an insulation failure inside the winding. Indirect contact is the more common real-world hazard on a ship, since it can happen without anyone realising a fault exists, which is exactly why equipment earthing and insulation monitoring exist as continuous protective measures rather than one-time checks.</p>
  <p class="n-p"><strong>Touch potential</strong> is the voltage between a person's hand and their feet if they touch a faulty enclosure while standing on the ground or deck. <strong>Step potential</strong> is the voltage between a person's two feet as they walk near a point where fault current is entering the ground, relevant to HV systems and shore-side substations more than typical shipboard low-voltage equipment, but worth knowing at a basic level since HV distribution exists on larger vessels.</p>


  <!-- WHY EARTHING EXISTS -->
  <div class="n-h1" id="s-earthing-why">Why Earthing Exists</div>
  <p class="n-p"><strong>Definition:</strong> earthing is the intentional connection of specific parts of an electrical system, either a system conductor or the exposed metal frame of equipment, to the general mass of earth or to the ship's hull, which acts as the reference earth on board.</p>
  <p class="n-p">Earthing serves two distinct purposes that are often confused with each other. <strong>System earthing</strong> establishes a reference point for the supply itself, deciding how the system behaves when a fault occurs. <strong>Equipment earthing</strong> connects the metal frames and enclosures of machinery to earth so that if internal insulation fails and the frame becomes live, a low-resistance path exists to carry fault current away and allow protective devices to operate, rather than that fault current having no path except through a person who touches the frame.</p>


  <!-- EARTHING SYSTEMS -->
  <div class="n-h1" id="s-earthing-types">Earthing Systems (IT, TT, TN)</div>
  <table class="n-table">
    <tr><th>System</th><th>Neutral Arrangement</th><th>Behaviour on First Fault</th></tr>
    <tr><td><strong>TN</strong></td><td>Neutral solidly earthed at source, exposed frames connected to that earth</td><td class="bad">Fault current is high, protective device trips immediately</td></tr>
    <tr><td><strong>TT</strong></td><td>Neutral solidly earthed at source, exposed frames earthed separately, locally</td><td class="bad">Fault current limited by earth path resistance, RCD protection typically required</td></tr>
    <tr><td><strong>IT</strong></td><td class="ok">Neutral isolated or earthed only through a high impedance</td><td class="ok">Fault current is very small, system can continue running on a first fault</td></tr>
  </table>
  <p class="n-p"><strong>Ships predominantly use IT systems, or a high-resistance earthed neutral, rather than solidly earthing the neutral.</strong> This is one of the most commonly asked "why" questions in this module. A solidly earthed system trips immediately on a single earth fault, which is acceptable ashore where redundant supply is available, but unacceptable at sea, where an immediate blackout from a single fault could mean loss of steering, propulsion or navigation equipment at a critical moment. An insulated or high-resistance system allows the vessel to continue running safely on a first fault while it is located and rectified, at the cost of needing continuous insulation monitoring to detect that a fault has occurred at all, since there is no large trip current to announce it.</p>
  <p class="n-p"><strong>The trade-off, stated plainly for the interview:</strong> continuity of essential services in exchange for the responsibility of active monitoring. This is precisely why the next section, insulation monitoring, exists as a permanently running system on board rather than an occasional check.</p>


  <!-- IMD -->
  <div class="n-h1" id="s-imd">Insulation Monitoring Device (IMD)</div>
  <p class="n-p">On an insulated or high-resistance earthed system, an IMD continuously injects a small monitoring signal into the system and measures the insulation resistance of the whole network to earth in real time. If insulation resistance anywhere on the system falls below a set threshold, indicating a developing or actual earth fault, the IMD raises an alarm at the switchboard.</p>
  <p class="n-p"><strong>An earth fault alarm does not necessarily mean immediate danger</strong>, since the system is designed to keep running on a first fault, but it means a fault exists somewhere on the network and must be located and cleared before a second, unrelated fault occurs elsewhere. Two simultaneous earth faults on an IT system can create a genuine short circuit path and defeat the entire purpose of the insulated design, which is why an earth fault alarm demands prompt investigation rather than being left running indefinitely.</p>
  <p class="n-p"><strong>Immediate response to an earth fault alarm:</strong> acknowledge the alarm, note which feeder or section is indicated if the system has selective indication, and begin systematically isolating and testing circuits, usually starting with recently worked-on equipment or the most likely suspect, until the faulty circuit is identified. Do not ignore a standing earth fault alarm simply because equipment is still running normally.</p>


  <!-- EQUIPMENT EARTHING -->
  <div class="n-h1" id="s-equip-earth">Equipment Earthing (Protective Earth)</div>
  <p class="n-p">Every motor frame, switchboard enclosure, distribution panel and metal casing of electrical equipment is bonded to the ship's hull or a common earth bar using a low-resistance earth conductor or strap. This ensures that if internal insulation fails and the frame becomes live, the earth connection provides a low-resistance path for fault current, which either operates a protective device or, at minimum, keeps the frame close to earth potential rather than allowing it to float at a dangerous voltage.</p>
  <p class="n-p"><strong>Continuity of the earth conductor is not optional and not permanent by default.</strong> A broken, corroded or disconnected earth strap leaves equipment looking completely normal in daily operation while removing its entire protective function. This is why earth continuity checks are part of routine electrical maintenance and why a missing or loose earth strap found during an inspection is treated as a serious finding, not a cosmetic one, even though nothing appears wrong until the moment an internal fault actually occurs.</p>


  <!-- RCD -->
  <div class="n-h1" id="s-rcd">RCD / ELCB / RCCB</div>
  <p class="n-p"><strong>Working principle:</strong> a residual current device continuously compares the current flowing out through the line conductor with the current returning through the neutral conductor, using a balance transformer. In a healthy circuit these currents are equal. If current is leaking to earth, for example through a person receiving a shock or through damaged insulation, the return current is less than the outgoing current, and this imbalance is detected and used to trip the device within milliseconds.</p>
  <p class="n-p"><strong>Typical trip sensitivity for personnel protection is <span class="n-val">30 mA</span></strong>, chosen because it sits below the fibrillation risk threshold with margin, while higher-rated devices, in the hundreds of milliamps, are used purely for equipment and fire protection rather than personnel protection. RCDs are commonly fitted on single-phase socket circuits serving accommodation, galley equipment, workshops and portable tools, situations where a person is most likely to be in direct contact with a faulty appliance.</p>
  <p class="n-p"><strong>An RCD is not a substitute for earthing or insulation monitoring</strong>, it is an additional, fast-acting layer that specifically protects against earth leakage current through a person, and the two systems are designed to work together rather than replace each other.</p>


  <!-- MEGGER TESTING (ELEVATED) -->
  <div class="n-h1" id="s-megger">🔴 Megger Testing / Insulation Resistance: A Core ETO Duty</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>This is one of the most practically important duties an ETO performs on board, and interviewers know it.</strong> Expect this to be asked as a hands-on, procedural question, not just a definition. A candidate who can only define insulation resistance but cannot describe the actual test procedure will be marked down here even if every other answer in the interview was strong.</div></div>

  <p class="n-p"><strong>What insulation resistance testing measures:</strong> the resistance of the insulation separating current-carrying conductors from each other and from earth, expressed in megohms (MΩ). It is the single most direct indicator of insulation health in a motor, generator, cable or switchboard, and a trend of falling IR values over time is one of the earliest warnings of developing insulation failure, often long before any other symptom appears.</p>

  <p class="n-p"><strong>The instrument:</strong> a megger applies a steady, elevated DC test voltage internally generated by the instrument, well above normal operating voltage, and measures the resulting leakage current to calculate resistance. Common test voltages are <span class="n-val">250 V</span>, <span class="n-val">500 V</span> and <span class="n-val">1000 V</span> for low-voltage equipment, and higher, up to 2500 V or more, for high-voltage machines. The correct test voltage is selected based on the rated voltage of the equipment under test; using an excessive test voltage on low-voltage electronics or control wiring can damage them, which is exactly why associated control and electronic circuits are disconnected before testing.</p>

  <table class="n-table">
    <tr><th>Equipment Class</th><th>Typical Test Voltage</th></tr>
    <tr><td>Control circuits, low voltage electronics</td><td class="hl">250 V (or excluded from the test entirely)</td></tr>
    <tr><td>Standard 440 V motors and cables</td><td>500 V</td></tr>
    <tr><td>Higher voltage machines and generators</td><td>1000 V</td></tr>
    <tr><td>High voltage (3.3 kV, 6.6 kV) systems</td><td class="hl">2500 V or higher, specialised HV megger</td></tr>
  </table>

  <p class="n-p"><strong>Minimum acceptable values, the standard rule of thumb:</strong> a commonly applied guideline is <span class="n-val">1 MΩ per kV</span> of rated voltage, plus a baseline minimum, so a low-voltage 440 V motor is often expected to read well above 1 MΩ, while absolute numeric pass or fail matters less than the trend over successive tests on the same machine. A machine reading 500 MΩ this year and 50 MΩ next year has a real problem developing even though 50 MΩ might still pass a bare minimum threshold, which is why every reading should be logged and compared historically, not treated as a single isolated pass or fail event.</p>

  <p class="n-p"><strong>Step-by-step procedure:</strong></p>
  <ol class="n-steps">
    <li>Isolate the equipment completely and lock out the supply, following the safe isolation procedure described in the next section.</li>
    <li>Disconnect or otherwise protect any sensitive electronics, control wiring, or PMS/monitoring connections, since the test voltage can damage components not rated for it.</li>
    <li>Discharge the equipment fully before connecting the megger, particularly for cables and capacitive loads, to avoid a false or dangerous reading from residual charge.</li>
    <li>Connect test leads: line-to-earth for each phase, and line-to-line between phases, as required by the equipment.</li>
    <li>Apply the test voltage appropriate to the equipment's rating and hold it for the specified duration, commonly one minute as a standard spot reading.</li>
    <li>Record the reading, along with the ambient or winding temperature at the time of test.</li>
    <li><strong>Discharge the winding or cable after the test is complete</strong>, before disconnecting the leads, since insulation behaves capacitively and can retain a dangerous stored charge from the test voltage itself.</li>
  </ol>

  <p class="n-p"><strong>Temperature correction is essential and directly connects back to F01.</strong> Insulation resistance falls as winding temperature rises, in the same way conductor resistance changes with temperature, so a raw IR reading is only meaningful once corrected to a standard reference temperature, commonly 40°C, using a correction factor table or formula. Comparing an uncorrected hot reading against an old cold reading can wrongly suggest insulation has failed when it has not, or the reverse, mask a real deterioration. Any competent discussion of IR testing must mention temperature correction, since omitting it is one of the most common gaps that separates a candidate who has actually performed the test from one who has only read about it.</p>

  <p class="n-p"><strong>Polarization Index (PI) and Dielectric Absorption Ratio (DAR):</strong> rather than relying on a single spot reading, a more thorough test records resistance at multiple points in time during a sustained test, typically at 1 minute and 10 minutes (PI) or 30 seconds and 1 minute (DAR). Healthy, dry insulation shows a rising resistance reading over time as internal polarization charges build up, giving a PI ratio typically above 2. Poor or moisture-contaminated insulation shows little to no rise, giving a PI close to 1, even if the initial spot reading looked acceptable. This is why a single-point reading can be misleading on insulation that is contaminated or damp, and why PI testing is preferred for critical machines such as main generators and large motors.</p>

  <div class="n-crit"><div class="icon">❌</div><div class="body"><strong>Interview trap:</strong> "What if the megger shows infinity, or off the scale?" This is not automatically good news. It can genuinely mean excellent insulation, but it can equally mean an open circuit, a broken test lead, or a faulty connection producing no reading at all. A competent ETO always verifies the instrument first against a known resistance, or checks continuity of the test leads, before accepting an unusually perfect or unusually poor reading at face value.</div></div>

  <p class="n-p"><strong>Shipboard application, when IR testing is actually performed:</strong> before starting up any motor or generator after a lay-up period, after any water ingress or flooding event near electrical equipment, as part of scheduled planned maintenance, after any insulation-related alarm or earth fault indication, and before re-energizing equipment following overhaul or rewinding work. Results are logged and typically require sign-off, often by a senior engineer or the ETO themselves, confirming the equipment is safe to re-energize before power is restored.</p>


  <!-- SAFE ISOLATION -->
  <div class="n-h1" id="s-isolation">Safe Isolation Procedure</div>
  <p class="n-p">The standard sequence is <strong>isolate, lock out, tag out, prove dead</strong>, in that order, before any work begins on equipment that is normally live. Isolate the supply at the appropriate breaker or switch. Lock the isolation point physically so it cannot be re-energized by someone else while work is in progress. Tag it clearly identifying who is working and why. Then, immediately before touching any conductor, prove the circuit is actually dead using a tested voltage indicator, not by assumption.</p>
  <div class="n-crit"><div class="icon">❌</div><div class="body"><strong>Interview trap:</strong> "What's the first thing you do before touching a circuit you've isolated?" The correct answer is not simply "check it's isolated." It is to prove it dead using a test instrument that is itself verified as working immediately before and after the test, since a faulty test instrument giving a false "dead" reading is one of the most dangerous single failure points in the entire procedure.</div></div>
  <p class="n-p"><strong>Permit to work</strong> is the formal document authorizing work on specified equipment under specified conditions, issued and countersigned by a responsible officer, typically required for any work on high-voltage systems, enclosed spaces, or work that isolates equipment other personnel may assume is available. It exists to ensure everyone with a stake in the equipment's status knows work is in progress and no one attempts to restore power while someone is exposed to the circuit.</p>


  <!-- PPE -->
  <div class="n-h1" id="s-ppe">Personal Protective Equipment</div>
  <p class="n-p">Insulated gloves, insulated mats, and voltage-rated tools are the standard protective equipment for electrical work, each rated for a specific maximum working voltage class. <strong>Using PPE rated for the wrong voltage class is arguably worse than using no PPE at all</strong>, since it creates false confidence: a glove rated for low voltage work offers negligible protection against a higher voltage fault, and a worker who believes they are protected may take risks they would otherwise avoid.</p>
  <div class="n-crit"><div class="icon">❌</div><div class="body"><strong>Interview trap:</strong> "Are rubber-soled safety shoes sufficient insulation for electrical work?" No. General-purpose safety footwear is not rated or tested as electrical insulating PPE, and relying on it as if it were is a common but incorrect assumption. Proper insulating mats or rated dielectric footwear, specifically tested and certified for electrical work, are required where insulation from earth is the intended protection.</div></div>


  <!-- FIRST AID -->
  <div class="n-h1" id="s-firstaid">First Aid for Electric Shock</div>
  <p class="n-p"><strong>The first action is always to isolate the supply</strong>, or otherwise break the victim's contact with the live source using a non-conductive object, before touching the victim directly. A rescuer who touches a victim still in contact with a live conductor risks becoming a second casualty, which then leaves two people to rescue instead of one and often delays effective help to both.</p>
  <p class="n-p">Once the supply is isolated and it is safe to approach, check responsiveness and breathing, call for help, and begin CPR immediately if the victim is not breathing normally. Speed of starting CPR matters far more than achieving perfect technique, since even imperfect chest compressions begun quickly outperform perfect technique delayed by hesitation. An automated external defibrillator, where available on board, should be applied as soon as possible following the device's own prompts.</p>


  <!-- WORKED NUMERICALS -->
  <div class="n-h1" id="s-numericals">Worked Numericals</div>

  <div class="n-h2">1. Body Current from Ohm's Law</div>
  <p class="n-p">A person with wet skin, resistance 500 Ω, accidentally contacts a 230 V supply. Find the current through the body and assess the risk.</p>
  <ol class="n-steps">
    <li>I = V / R = 230 / 500 = <span class="n-val">0.46 A</span> = 460 mA</li>
    <li>460 mA is far above the 50-100 mA fibrillation risk range, a potentially fatal shock.</li>
  </ol>

  <div class="n-h2">2. Same Voltage, Dry Skin</div>
  <p class="n-p">The same 230 V supply, but the person has dry, unbroken skin at 100,000 Ω. Find the current.</p>
  <ol class="n-steps">
    <li>I = V / R = 230 / 100,000 = <span class="n-val">0.0023 A</span> = 2.3 mA</li>
    <li>Barely perceptible. Same voltage, same equipment, but the outcome is entirely different because resistance changed. This is the complete demonstration of why current, not voltage alone, decides the outcome.</li>
  </ol>

  <div class="n-h2">3. Insulation Resistance Rule of Thumb</div>
  <p class="n-p">A 6.6 kV motor is megger tested and reads 8 MΩ. Using the 1 MΩ per kV rule, assess whether this passes.</p>
  <ol class="n-steps">
    <li>Minimum expected: 1 MΩ × 6.6 = <span class="n-val">6.6 MΩ</span></li>
    <li>Measured value, 8 MΩ, is above the minimum guideline, so it passes on this basis.</li>
    <li>This single reading should still be compared against the machine's previous test history before being called healthy, since a falling trend toward the minimum is itself a warning sign.</li>
  </ol>

  <div class="n-h2">4. Polarization Index</div>
  <p class="n-p">A generator winding reads 40 MΩ at 1 minute and 95 MΩ at 10 minutes. Find the PI and assess the insulation.</p>
  <ol class="n-steps">
    <li>PI = 10-minute reading / 1-minute reading = 95 / 40 = <span class="n-val">2.4</span></li>
    <li>A PI above 2 generally indicates healthy, dry insulation with good polarization behaviour.</li>
  </ol>


  <!-- VIVA -->
  <div class="n-h1" id="s-viva">Viva and Interview Questions</div>
  <p class="n-p">These reflect the actual pattern of questions asked from this module. Safety questions are asked in a way that checks judgment, so answer as you would actually act, not just what sounds correct.</p>
  <table class="n-table">
    <tr><th>Question</th><th>Model Answer</th></tr>
    <tr><td>Does voltage or current kill?</td><td>Current causes injury. Voltage only drives current through the body; the actual current depends heavily on body resistance, which varies with skin condition.</td></tr>
    <tr><td>What current range is considered the danger zone for fibrillation?</td><td>Roughly <span class="n-val">50 to 100 mA</span> at power frequency, though this depends on path and duration as well.</td></tr>
    <tr><td>Why is a hand-to-hand shock path more dangerous than hand-to-foot on the same side?</td><td>Hand-to-hand drives current directly across the chest and through the heart, increasing fibrillation risk.</td></tr>
    <tr><td>Why does frequency affect shock severity?</td><td>Power frequency, 50-60 Hz, falls in the range the human heart is most susceptible to fibrillation, making it more dangerous than DC or much higher frequencies for the same current.</td></tr>
    <tr><td>Why do ships avoid solidly earthing the neutral?</td><td>A solidly earthed system trips immediately on a single earth fault. An insulated or high-resistance system allows the vessel to keep running on a first fault, critical for maintaining steering and propulsion at sea, at the cost of needing continuous insulation monitoring.</td></tr>
    <tr><td>What does an insulation monitoring device do?</td><td>Continuously monitors the insulation resistance of the whole system to earth and raises an alarm if it falls below a set threshold, indicating a developing or actual earth fault.</td></tr>
    <tr><td>Is an earth fault alarm an immediate emergency?</td><td>Not necessarily, since the system is designed to keep running on a first fault, but it must be investigated and cleared promptly to avoid a second fault creating a genuine short circuit.</td></tr>
    <tr><td>How does an RCD detect a fault?</td><td>It compares outgoing and returning current using a balance transformer. Any imbalance means current is leaking to earth, and the device trips.</td></tr>
    <tr><td>What is the typical RCD trip current for personnel protection?</td><td><span class="n-val">30 mA</span>, chosen to sit safely below the fibrillation risk threshold.</td></tr>
    <tr><td>What does insulation resistance testing measure?</td><td>The resistance of insulation separating conductors from each other and from earth, in megohms, indicating insulation health.</td></tr>
    <tr><td>Why must equipment be discharged after a megger test?</td><td>Insulation behaves capacitively and can retain a dangerous stored charge from the test voltage itself.</td></tr>
    <tr><td>Why is temperature correction needed for IR readings?</td><td>Insulation resistance falls as winding temperature rises, so readings must be corrected to a standard reference temperature, commonly 40°C, before comparing against history.</td></tr>
    <tr><td>What is Polarization Index and why is it useful?</td><td>The ratio of a 10-minute to a 1-minute insulation resistance reading. Healthy dry insulation shows a rising resistance and a PI above 2, while contaminated or damp insulation shows little rise and a PI near 1, even if the spot reading looked acceptable.</td></tr>
    <tr><td>What should you do if a megger reads infinity?</td><td>Verify the instrument against a known resistance and check the test leads, since infinity can mean excellent insulation or an open circuit or broken connection.</td></tr>
    <tr><td>What is the correct sequence before working on isolated equipment?</td><td>Isolate, lock out, tag out, then prove dead with a tested voltage indicator immediately before touching any conductor.</td></tr>
    <tr><td>Are rubber-soled shoes adequate insulation for electrical work?</td><td>No, general safety footwear is not rated or certified as electrical insulating PPE, and should not be relied on as such.</td></tr>
    <tr><td>What is the first action for a person suffering electric shock?</td><td>Isolate the supply or break contact with a non-conductive object before touching the victim, to avoid becoming a second casualty.</td></tr>
    <tr><td>Difference between direct and indirect contact?</td><td>Direct contact is touching a conductor that is normally live. Indirect contact is touching a part that has become live due to a fault, such as a motor frame with failed internal insulation.</td></tr>
    <tr><td>Why is equipment frame earthing necessary even if insulation is healthy?</td><td>It provides a low-resistance path for fault current if insulation ever does fail, ensuring protective devices operate and the frame does not remain at a dangerous potential.</td></tr>
  </table>


  <!-- QUICK REVISION -->
  <div class="n-h1" id="s-quickrev">Quick Revision</div>
  <table class="n-table">
    <tr><th>Concept</th><th>One Line</th></tr>
    <tr><td>What kills</td><td>Current, not voltage. Body resistance decides how much current a given voltage produces.</td></tr>
    <tr><td>Danger current range</td><td><span class="n-val">50-100 mA</span>, ventricular fibrillation risk at power frequency.</td></tr>
    <tr><td>Most dangerous path</td><td>Hand-to-hand, across the chest and heart.</td></tr>
    <tr><td>Why 50-60 Hz is dangerous</td><td>Closest frequency range to human heart's fibrillation sensitivity.</td></tr>
    <tr><td>Ship earthing philosophy</td><td>Insulated or high-resistance neutral, keeps running on first fault, needs active monitoring.</td></tr>
    <tr><td>IMD</td><td>Continuously monitors insulation to earth, alarms on developing faults.</td></tr>
    <tr><td>RCD</td><td>Compares in/out current, trips on imbalance, 30 mA typical for personnel.</td></tr>
    <tr><td>🔴 Megger test</td><td>Isolate, disconnect electronics, discharge, test, record with temperature, discharge again after.</td></tr>
    <tr><td>IR rule of thumb</td><td>1 MΩ per kV of rating, but trend over time matters more than one reading.</td></tr>
    <tr><td>PI</td><td>10-minute reading over 1-minute reading. Above 2 is healthy, near 1 suggests contamination.</td></tr>
    <tr><td>Safe isolation</td><td>Isolate, lock out, tag out, prove dead immediately before touching.</td></tr>
    <tr><td>PPE</td><td>Must be voltage-rated for the task. Wrong rating is worse than none, it gives false confidence.</td></tr>
    <tr><td>Shock first aid</td><td>Isolate supply first, never touch a live victim directly, then start CPR immediately.</td></tr>
  </table>
  <p class="n-p">If asked something here you genuinely do not know, say so honestly rather than guessing. In this module more than any other, a wrong confident answer is worse than an honest "I am not certain, but here is what I do know."</p>


  <!-- SUMMARY -->
  <div class="n-h1" id="s-summary">Module Summary</div>
  <p class="n-p">You should now be able to explain the factors that determine shock severity and why voltage alone does not decide the outcome, describe why ships use insulated or high-resistance earthed systems and how an insulation monitoring device supports that design, explain how an RCD works and where it is used, carry out and interpret a Megger insulation resistance test including temperature correction and Polarization Index, follow a correct safe isolation and permit to work sequence, select appropriate PPE, and respond correctly to a person suffering electric shock.</p>
  <table class="n-table">
    <tr><th>Estimated Study Time</th><th>Quiz Difficulty</th><th>Next Module</th></tr>
    <tr><td>60-75 minutes</td><td>★★★★★</td><td>F03, Components &amp; Materials</td></tr>
  </table>

  <div style="margin-top:20px; text-align:center;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F02')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:10px 24px;font-size:14px;">Take the F02 Quiz →</button>
  </div>


  </div>
</div>
</div>`);

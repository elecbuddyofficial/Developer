window.loadNotes("F13", `<div class="view" id="view-notes-f13">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F13')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F13 - Electrical Protection & Switchgear</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 13 of 25 · Difficulty ★★★★☆ · Study Time 60-80 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-faults')">Fault Types</button>
    <button class="anc-btn" onclick="jumpTo('s-fuse')">Fuses & HRC</button>
    <button class="anc-btn" onclick="jumpTo('s-breakers')">MCB, MCCB, ACB</button>
    <button class="anc-btn" onclick="jumpTo('s-curves')">Trip Curves B/C/D</button>
    <button class="anc-btn" onclick="jumpTo('s-elements')">Thermal & Magnetic Trip</button>
    <button class="anc-btn" onclick="jumpTo('s-derating')">MCCB De-rating</button>
    <button class="anc-btn" onclick="jumpTo('s-breaking')">Breaking Capacity</button>
    <button class="anc-btn" onclick="jumpTo('s-contactor')">Contactor vs Breaker</button>
    <button class="anc-btn" onclick="jumpTo('s-elcb')">ELCB vs RCCB</button>
    <button class="anc-btn" onclick="jumpTo('s-discrimination')">Discrimination</button>
    <button class="anc-btn" onclick="jumpTo('s-acb')">ACB Construction</button>
    <button class="anc-btn" onclick="jumpTo('s-lvhv')">LV / HV Boundary</button>
    <button class="anc-btn" onclick="jumpTo('s-interview')">Interview Answers</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to classify the four basic types of electrical fault and explain what protection each one needs, describe how an HRC fuse actually clears a fault, compare an MCB, an MCCB and an ACB and know why a ship carries all three rather than just one, explain what a B, C or D trip curve means and which loads suit each, describe the thermal and magnetic elements inside an MCB and what each one is actually responding to, explain why a breaker's nameplate current is not the current it can safely carry in every installation, distinguish breaking capacity from rated current, explain why a contactor is not a protective device by itself, compare an ELCB and an RCCB, explain discrimination and why it matters on a ship's board, and state the low voltage to high voltage boundary used in marine practice and why high voltage exists at all on a ship.</p>

  <div class="n-h1" id="s-faults">Fault Types and Classification</div>
  <p class="n-p">Every protective device in this module exists to answer one of four failure modes. Get the classification straight first, because an interviewer will often describe a symptom and expect you to name the fault type before naming the protection.</p>

  <table class="n-table">
    <tr><th>Fault</th><th>What is actually happening</th><th>Typical cause</th><th>What protects against it</th></tr>
    <tr><td><strong>Short circuit</strong></td><td>A near zero impedance path forms between two live conductors, or between a live conductor and the frame with no earth path resistance to limit it. Current rises to many times full load almost instantly.</td><td>Insulation breakdown, crushed cable, a dropped tool across busbars</td><td>Fuse, or the magnetic element of a breaker, acting in milliseconds</td></tr>
    <tr><td><strong>Overload</strong></td><td>The circuit remains electrically sound, but draws more current than it is rated for over a sustained period. Nowhere near short circuit magnitude, but enough to overheat insulation over time.</td><td>A motor driving a jammed or overloaded mechanical load, too many loads on one circuit</td><td>Thermal element of a breaker, or a separate overload relay, acting over seconds to minutes</td></tr>
    <tr><td><strong>Earth fault</strong></td><td>A live conductor makes unintended contact with earth, or with a frame that is itself earthed. Current returns to source through the earth path instead of, or in addition to, the intended return conductor.</td><td>Damaged insulation touching a metal enclosure, moisture ingress</td><td>Earth fault relay, ELCB or RCCB sensing the imbalance this creates</td></tr>
    <tr><td><strong>Open circuit</strong></td><td>A conductor breaks or a connection is lost, interrupting current flow entirely in that path.</td><td>A broken cable core, a burnt out contact, a blown fuse element</td><td>Not really "protected against" in the same sense, since no dangerous overcurrent flows. The hazard is usually a stalled motor drawing single phasing current on the remaining phases, or simply loss of the load</td></tr>
  </table>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Say the distinction cleanly.</strong> A short circuit and an overload are both overcurrent, but they differ by orders of magnitude and by how fast they must be cleared. A short circuit must be cleared in milliseconds because the energy released, proportional to current squared times time, would otherwise destroy cable and equipment. An overload can be tolerated for seconds to minutes because it is a slow thermal problem, not an instantaneous energy problem. That difference in timescale is exactly why a single protective device usually needs two different elements inside it, one fast and one slow, which is covered under the MCB's thermal and magnetic elements below.</div></div>

  <p class="n-p">On a ship, an unusual fifth condition is also worth naming when discussing earth faults specifically: because the ship's LV distribution system is normally run as an <strong>insulated neutral (IT) system</strong> rather than solidly earthed, a single earth fault does not immediately trip anything or cause a large fault current. It is detected and alarmed by an earth fault monitor, but the system is deliberately allowed to keep running on a first fault so that a single fault does not black out the vessel. A second, independent earth fault on a different phase then does produce a genuine short circuit path through earth, which is why any earth fault alarm on board must be investigated and cleared promptly rather than left alone.</p>

  <div class="n-h1" id="s-fuse">Fuses and HRC Construction</div>
  <p class="n-p">The fuse is the oldest and, done properly, still one of the fastest protective devices available. A fuse does not sense current the way a breaker's trip mechanism does. It simply <strong>is</strong> the weak link: a calibrated element sized so that it melts, or "blows," before the cable or equipment it protects is damaged.</p>

  <div class="n-h2">Ordinary fuse versus HRC fuse</div>
  <p class="n-p">A simple rewireable fuse is just a wire of the right cross section in a fuse carrier. It works, but the melting element can vaporise and the resulting arc, sustained by the surrounding air, can continue to burn and even re-strike after the wire has parted. That makes it slow and unpredictable at high fault currents, exactly where you need certainty most.</p>
  <p class="n-p">A <strong>High Rupturing Capacity (HRC)</strong> fuse solves this by construction. Inside a sealed ceramic body, one or more silver or silver alloy elements are surrounded by tightly packed, fine grained <strong>silica sand</strong>. On a fault, the element melts almost instantly at the fault current, and the resulting arc is immediately quenched by the surrounding sand: the heat of the arc fuses the sand around it into a solid glass like channel (fulgurite), which absorbs the arc energy and starves it of the conditions it needs to continue. The result is a very fast, very predictable, and above all current limiting cut off: a good HRC fuse can interrupt a fault before the current even reaches its theoretical peak, which is a property no thermal-magnetic breaker mechanism can match.</p>

  <table class="n-table">
    <tr><th>Property</th><th>Detail</th></tr>
    <tr><td>Body</td><td>Sealed ceramic (steatite) cartridge</td></tr>
    <tr><td>Element</td><td>Silver or silver alloy strip, often with a tin or lead "M-effect" spot to give accurate overload timing at moderate overcurrents</td></tr>
    <tr><td>Filler</td><td>Fine, tightly packed quartz (silica) sand, arc quenching medium</td></tr>
    <tr><td>Action</td><td>Current limiting: cuts off the fault before peak current is reached, on a heavy fault</td></tr>
    <tr><td>Discrimination</td><td>Very good, because the time-current curve is sharp and consistent between fuses of different rating</td></tr>
  </table>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>The one weakness examiners like to probe.</strong> A fuse only protects the phase it is fitted in. On a three phase motor circuit, a fuse blowing on one phase due to a fault does not disconnect the other two: the motor can be left running <strong>single phased</strong>, drawing heavy unbalanced current on the remaining phases and burning out the windings, while looking from the outside like it is still working. This single weakness is a large part of why motor circuits are protected by breakers or by fuses backed up with a separate three phase overload relay, rather than by fuses alone.</div></div>

  <p class="n-p">Fuses are also not resettable: once blown, the element is consumed and the fuse must be physically replaced. That is a genuine advantage in one sense (there is no mechanism to wear out or stick) and a genuine disadvantage in another (a fault at 2am means finding a spare of the exact rating before the circuit can be restored).</p>

  <div class="n-h1" id="s-breakers">MCB, MCCB and ACB</div>
  <p class="n-p">These three devices sit at increasing levels of current, physical size and sophistication, and a ship's switchboard genuinely uses all three, each in the role it is built for. Do not treat them as interchangeable names for "circuit breaker."</p>

  <table class="n-table">
    <tr><th></th><th>MCB (Miniature CB)</th><th>MCCB (Moulded Case CB)</th><th>ACB (Air Circuit Breaker)</th></tr>
    <tr><td><strong>Typical current range</strong></td><td>Up to about <span class="n-val">125 A</span></td><td>From small frames around 16 A up to large frames of <span class="n-val">1600 A</span> or more, in defined frame sizes</td><td>Typically <span class="n-val">630 A up to 6300 A</span> and beyond, built for the heaviest duties</td></tr>
    <tr><td><strong>Typical breaking capacity</strong></td><td>Around <span class="n-val">6-10 kA</span></td><td>Small frames roughly 25-50 kA, larger frames up to around 150 kA</td><td>Typically <span class="n-val">25 kA up to 100-150 kA</span> on large units</td></tr>
    <tr><td><strong>Adjustability</strong></td><td>Fixed trip settings, not field adjustable</td><td>Often has adjustable thermal and magnetic (or fully electronic) trip settings</td><td>Fully adjustable electronic trip unit as standard on marine and industrial types, with multiple protection curves in one device</td></tr>
    <tr><td><strong>Construction</strong></td><td>Small sealed moulded housing, DIN rail mounted</td><td>Sealed moulded plastic case, not normally user serviceable internally</td><td>Open, air insulated construction, draw out (withdrawable) chassis common on marine switchboards, internally maintainable</td></tr>
    <tr><td><strong>Typical shipboard duty</strong></td><td>Final circuits: lighting, small single phase loads, control and instrumentation supplies</td><td>Motor feeders, distribution sub-boards, feeders to smaller switchboards</td><td>Generator circuit breakers, bus tie breakers, main incoming feeders on the main switchboard</td></tr>
  </table>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>The one line answer to "why three different devices?"</strong> Fault current, and the consequence of getting it wrong, both scale up dramatically as you move from a lighting circuit to a generator's own output. An MCB is cheap, compact and disposable-if-damaged, exactly right for hundreds of small final circuits. An ACB is expensive, maintainable, and built to interrupt tens of kiloamps without destroying itself, exactly right for the one or two breakers standing directly across a generator's terminals. Using an ACB everywhere would be needless cost and bulk; using an MCB on a generator breaker would let it through fault energy it cannot safely interrupt.</div></div>

  <div class="n-h1" id="s-curves">MCB Trip Curves: B, C and D</div>
  <p class="n-p">An MCB's magnetic (instantaneous) trip threshold is standardised into curve types under IEC 60898, and this is one of the most commonly asked practical selection questions in an interview.</p>

  <table class="n-table">
    <tr><th>Curve</th><th>Instantaneous trip range</th><th>Suited to</th></tr>
    <tr><td><strong>Type B</strong></td><td><span class="n-val">3 to 5 × In</span></td><td>Resistive and lightly inductive loads with little or no inrush: lighting circuits, heaters, general power outlets</td></tr>
    <tr><td><strong>Type C</strong></td><td><span class="n-val">5 to 10 × In</span></td><td>Loads with moderate inrush: small motors, fluorescent and discharge lighting banks, transformers of modest size</td></tr>
    <tr><td><strong>Type D</strong></td><td><span class="n-val">10 to 20 × In</span></td><td>Loads with heavy inrush: larger motors, transformers, solenoid valves, capacitor banks, anything that produces a sharp current surge on energising that is not itself a fault</td></tr>
  </table>

  <p class="n-p">The number is a multiple of the breaker's rated current, In. Example worked through: a 16 A Type B MCB will trip magnetically somewhere between 48 A and 80 A; the same 16 A frame as a Type C trips between 80 A and 160 A; as a Type D, between 160 A and 320 A.</p>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Why you cannot just pick Type D everywhere "to be safe."</strong> A higher letter buys tolerance of inrush, but at the cost of taking longer, in current terms, to recognise a genuine fault as a fault. Fit a Type D breaker on a lighting circuit and a fault current that would have tripped a Type B instantly may sit below the Type D's magnetic threshold, relying entirely on the much slower thermal element to eventually clear it. The right curve is the lowest one the load's normal inrush will not nuisance-trip, not the highest one available.</div></div>

  <div class="n-h1" id="s-elements">Thermal and Magnetic Elements Inside an MCB</div>
  <p class="n-p">A thermal-magnetic MCB is not one detection mechanism, it is two, working over completely different timescales and responding to completely different physics. This pairs directly with the short circuit versus overload distinction made earlier.</p>

  <table class="n-table">
    <tr><th>Element</th><th>Responds to</th><th>Mechanism</th><th>Timescale</th></tr>
    <tr><td><strong>Thermal element</strong></td><td>Sustained overload</td><td>A bimetallic strip, made of two metals with different rates of thermal expansion bonded together, is heated by the load current passing through or near it. Under overload the strip heats and bends further and faster than it would under normal load, and beyond a set point the bending motion releases the trip latch.</td><td>Seconds to minutes, inverse time: the bigger the overload, the faster it trips</td></tr>
    <tr><td><strong>Magnetic element</strong></td><td>Short circuit / heavy instantaneous fault</td><td>A solenoid coil carries the load current. Under a heavy fault, the surge of current through the coil produces a magnetic field strong enough to pull in a plunger directly and mechanically strike the trip latch open.</td><td>Milliseconds, effectively instantaneous once the threshold current is reached</td></tr>
  </table>

  <p class="n-p">Under IEC 60898-1 the thermal element's timing is standardised at defined test points at a reference ambient of 30°C: broadly, at around <span class="n-val">1.13 × In</span> the breaker must not trip within a stated conventional time (typically over an hour for common ratings), while at around <span class="n-val">1.45 × In</span> it must trip within a shorter conventional time (typically under an hour). This gives a breaker some tolerance for a brief, modest overload while still guaranteeing it will eventually clear a sustained one.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Say it this way in the interview.</strong> The thermal element is slow and current squared in effect, it is really measuring accumulated heat, so it tolerates a brief overload but will always clear a sustained one. The magnetic element is fast and threshold based, it does not care about duration at all, only magnitude, so it clears a genuine short circuit before serious damage or arc energy can build up. One breaker, two protections, because overload and short circuit are physically different problems that cannot both be solved well by a single response curve.</div></div>

  <div class="n-h1" id="s-derating">MCCB De-rating</div>
  <p class="n-p">A breaker's nameplate current, its rated current In, is measured under one specific set of reference conditions, commonly an ambient of around 40°C, in free air or a specified standard enclosure, and at sea level. Change any of those conditions and the current the breaker can actually carry continuously, without nuisance tripping or without exceeding its own thermal design limits, changes with it. This is de-rating, and it is a genuinely practical concern on a ship, not a textbook footnote, because switchboard rooms and engine room panels routinely run hotter and more crowded than a manufacturer's test bench.</p>

  <div class="n-h2">The factors involved</div>
  <table class="n-table">
    <tr><th>Factor</th><th>Why it matters</th></tr>
    <tr><td><strong>Ambient temperature</strong></td><td>A thermal-magnetic breaker's tripping element is itself temperature sensitive, most obviously the bimetallic strip. In a hotter ambient, the strip starts closer to its trip point, so it takes less load current on top of that head start to make it trip. Manufacturers publish de-rating curves, commonly on the order of a few percent reduction in allowable current per 10°C above the reference temperature, and this must be checked against the actual switchboard or panel temperature, not the machinery space design temperature.</td></tr>
    <tr><td><strong>Enclosure</strong></td><td>A breaker mounted inside a closed panel dissipates heat far less effectively than one in open air on a test bench, because it is surrounded by still, already warmed air rather than free ventilation. The panel manufacturer's own enclosure and ventilation design affects how much of the breaker's rated current is actually usable inside it.</td></tr>
    <tr><td><strong>Grouping of adjacent breakers</strong></td><td>Breakers mounted close together in the same enclosure each add their own heat, and each also partially blocks the others' ability to shed heat to the surrounding air. A row of breakers all loaded near their individual nameplate rating can raise the local enclosure temperature well above what any one of them would produce alone, which is why a grouping (or "diversity") factor is applied to the allowable current when several breakers share a small enclosure.</td></tr>
    <tr><td><strong>Altitude</strong></td><td>Air is thinner at altitude, so it carries away heat less effectively (reduced cooling) and it is also a poorer insulator, which affects the breaker's arc quenching and dielectric performance. De-rating is typically applied above around 2000 metres. Genuinely marginal for most ships at sea level, but relevant for equipment destined for high altitude lake or river vessels, and worth knowing conceptually even if it rarely applies in practice.</td></tr>
    <tr><td><strong>Harmonics</strong></td><td>A breaker's thermal rating assumes a clean sinusoidal current. Where a load is fed through variable frequency drives or other power electronics, the current waveform is distorted and carries harmonic content on top of the fundamental. Harmonic current still produces I squared R heating in the breaker and the cable, and in a three phase system with significant triplen harmonics the neutral conductor can carry more current than any one phase, a case the breaker's original sizing may not have anticipated at all. Harmonic-rich loads are generally derated or sized with margin precisely for this reason.</td></tr>
  </table>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>The interview question, answered directly.</strong> "Can you load a 400 A breaker to 400 A continuously in every situation?" No. The 400 A figure is a nameplate value measured at a defined reference ambient, in a defined enclosure arrangement, at sea level, with a clean sinusoidal current. Change the ambient temperature, put it in a poorly ventilated or crowded enclosure, take it to altitude, or feed it a distorted waveform, and the safe continuous current falls below the nameplate figure. The correct approach on board is to check the manufacturer's de-rating curves against the actual installed conditions, not to assume the nameplate figure is always available.</div></div>

  <div class="n-h1" id="s-breaking">Breaking Capacity versus Rated Current</div>
  <p class="n-p">These two numbers on a breaker's nameplate answer completely different questions, and confusing them is a common and costly mistake, not just an interview trap.</p>

  <table class="n-table">
    <tr><th>Quantity</th><th>What it answers</th><th>Typical symbol</th></tr>
    <tr><td><strong>Rated current, In</strong></td><td>How much current can the breaker carry continuously, in normal service, without overheating or nuisance tripping?</td><td>In</td></tr>
    <tr><td><strong>Breaking capacity</strong></td><td>How much fault current can the breaker safely interrupt, once, without the breaker itself being destroyed or failing dangerously?</td><td>Icu (ultimate) and Ics (service)</td></tr>
  </table>

  <p class="n-p">Breaking capacity is expressed in kA and is an entirely separate rating from the continuous current rating. <strong>Icu</strong>, the ultimate breaking capacity, is the maximum fault current the breaker is proven able to interrupt at least once under a defined test sequence, after which the breaker is not guaranteed to remain usable. <strong>Ics</strong>, the service breaking capacity, is a lower figure, expressed as a percentage of Icu (commonly 25, 50, 75 or 100 percent depending on the device and application), representing a fault current the breaker can interrupt and then still be relied upon to go on operating normally afterward. A breaker sized correctly for its continuous load current can still be completely wrong for its position on the board if its breaking capacity is lower than the fault level actually available there: it may interrupt the fault, but destroy itself, or worse, fail to interrupt it cleanly at all.</p>

  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>Say this distinction cleanly.</strong> Rated current is about what the breaker carries every day. Breaking capacity is about what it can survive interrupting on the one worst day. A breaker must be sized for both independently: correct for the load it normally carries, and correct for the maximum fault current the switchboard can actually deliver at that point, which itself depends on generator size, cable impedance and how many generators can be running in parallel at once.</div></div>

  <div class="n-h1" id="s-contactor">Contactor versus Breaker</div>
  <p class="n-p">A contactor and a breaker can look superficially similar, both are electrically operated switching devices, but they are built for opposite duties and one of them is not, by itself, a protective device at all.</p>

  <table class="n-table">
    <tr><th>Property</th><th>Contactor</th><th>Circuit Breaker</th></tr>
    <tr><td><strong>Primary purpose</strong></td><td>Frequent switching of a load under normal operating current, on and off, many thousands of times over its life</td><td>Protection: interrupting overload and fault current, switching under normal conditions is secondary</td></tr>
    <tr><td><strong>Operating duty</strong></td><td>High mechanical and electrical switching endurance, designed for routine on/off cycling</td><td>Designed to switch rarely, but to interrupt a large fault current reliably on the occasions it must</td></tr>
    <tr><td><strong>Fault interruption capability</strong></td><td>Low. A contactor is not built to survive interrupting a short circuit current and will typically weld its contacts shut or be destroyed attempting to</td><td>High, specifically rated and tested for it (its breaking capacity)</td></tr>
    <tr><td><strong>Trip mechanism</strong></td><td>None built in. Simply opens and closes on command from its coil circuit</td><td>Built in thermal and/or magnetic (or electronic) trip elements that open automatically on overload or fault, without external command</td></tr>
  </table>

  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Why "a contactor is not a protective device on its own" is worded exactly that way.</strong> A contactor has no way of knowing a fault is happening, it simply obeys its coil. Fitted alone, it would sit there and try to carry a short circuit current until something else failed, most likely welding its own contacts closed. That is precisely why every contactor-based starter is fitted with a fuse or breaker upstream for short circuit protection, and an overload relay (thermal or electronic) in series to sense sustained overcurrent and trip the coil circuit open. The combination, contactor plus overload relay plus upstream fuse or breaker, is what makes a complete motor starter. The contactor alone is only ever the switching element.</div></div>

  <div class="n-h1" id="s-elcb">ELCB versus RCCB</div>
  <p class="n-p">Both devices exist to catch earth leakage, current escaping to earth through a fault rather than returning properly through the intended conductor, but they sense it in fundamentally different ways.</p>

  <div class="n-h2">RCCB (Residual Current Circuit Breaker), current operated</div>
  <p class="n-p">A toroidal current transformer encircles all the live conductors of the circuit (phase and neutral for single phase, all three phases for three phase). Under healthy conditions, the vector sum of the currents flowing through that core is zero: whatever current flows out on the live conductor(s) returns exactly on the neutral, so the net magnetic flux induced in the core cancels to nothing. If any current is leaking to earth by a path other than through the sensed conductors, the vector sum is no longer zero, a net flux appears in the core, and that induces a small signal in a secondary sensing winding. Once that signal exceeds a threshold, it trips a mechanical latch and opens the circuit. This method senses the leaking current itself directly, regardless of what caused it or what the frame or earth conductor's own resistance happens to be.</p>

  <div class="n-h2">ELCB (Earth Leakage Circuit Breaker), voltage operated, older type</div>
  <p class="n-p">The older, largely superseded voltage operated ELCB works differently: it senses a voltage appearing on the protected equipment's earthed frame relative to true earth (achieved via a separate earth wire routed through the relay's trip coil), rather than sensing a current imbalance directly. If a fault raises the frame to a dangerous potential, the resulting current through the relay's coil trips it. Its major weakness, and the reason it has fallen out of favour, is that its correct operation depends entirely on the integrity and resistance of the separate earth wiring: if that earth connection is broken, corroded, or poorly bonded, the device may fail to detect a genuine fault at all. A current operated RCCB has no such dependency, because it does not rely on the earth conductor at all to detect the imbalance, only on comparing the live conductors against each other.</p>

  <table class="n-table">
    <tr><th></th><th>ELCB (voltage operated)</th><th>RCCB (current operated)</th></tr>
    <tr><td>Senses</td><td>Voltage on the earthed frame relative to true earth</td><td>Current imbalance between live conductors, via a toroidal CT</td></tr>
    <tr><td>Depends on earth wiring integrity</td><td class="bad">Yes, a weak point</td><td class="ok">No</td></tr>
    <tr><td>Modern standard practice</td><td>Largely obsolete, phased out in most modern installations</td><td>Standard device in current use</td></tr>
  </table>

  <div class="n-h2">Typical trip current thresholds</div>
  <p class="n-p">RCCBs (and modern current operated ELCBs, since the terms are sometimes used loosely to mean the same current sensing device in casual shipboard usage) are available in standard sensitivity ratings:</p>
  <table class="n-table">
    <tr><th>Trip current</th><th>Typical duty</th></tr>
    <tr><td><span class="n-val">30 mA</span></td><td>Personnel protection against electric shock: sockets, portable equipment, wet or exposed locations. This is the figure associated with protecting a person from a dangerous shock.</td></tr>
    <tr><td><span class="n-val">100 mA</span></td><td>A broader degree of protection, often used where full 30 mA sensitivity would cause excessive nuisance tripping on larger or slightly leaky circuits, still offering meaningful shock protection</td></tr>
    <tr><td><span class="n-val">300 to 500 mA</span></td><td>Fire protection duty only, on circuits such as fixed lighting distribution. It will not reliably protect a person from a dangerous shock, only from the fire risk of a sustained low level earth leakage</td></tr>
  </table>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Rapid version for the panel.</strong> ELCB is the older, voltage operated device that senses a rise in the frame's potential and depends on a healthy earth wire to work at all. RCCB is the current operated device standard today, sensing the imbalance between live conductors directly through a toroidal transformer, and does not depend on earth wire condition. In everyday shipboard speech the two terms often get used loosely for the same current sensing device, but if asked to distinguish them properly, sensing method and earth wire dependency is the answer.</div></div>

  <div class="n-h1" id="s-discrimination">Discrimination / Selectivity</div>
  <p class="n-p">Discrimination (also called selectivity) is the design principle that, when a fault occurs, only the protective device immediately upstream of the fault should operate, leaving every other, higher level breaker on the system undisturbed. Done properly, a fault on one motor's feeder trips only that motor's breaker; the sub-board it sits on, and the main switchboard feeding that sub-board, both remain live and unaffected.</p>

  <div class="n-h2">Time grading and current grading</div>
  <p class="n-p">Two complementary techniques achieve this:</p>
  <table class="n-table">
    <tr><th>Method</th><th>Principle</th></tr>
    <tr><td><strong>Current grading</strong></td><td>Devices further upstream (closer to the source) are set, or inherently rated, to respond only to progressively higher fault currents than the devices downstream of them. A small final circuit breaker trips on a modest fault; the feeder breaker above it would only trip on a much larger fault, one big enough to suggest the final breaker itself has failed to clear it.</td></tr>
    <tr><td><strong>Time grading</strong></td><td>Devices further upstream are set with a deliberately longer time delay before tripping than the devices below them, even for the same fault current. The downstream device gets first opportunity, for a set margin of time, to clear the fault on its own before the upstream device would step in as a backup.</td></tr>
  </table>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Why it matters specifically on a ship.</strong> A ship's electrical system has no redundancy in the way a shore grid does: there is no wider network to fall back on if the wrong breaker trips. If a fault on one small final circuit is allowed to trip the main switchboard breaker or a generator breaker instead of just its own local breaker, the result is a full or partial blackout for a fault that should only have cost one lighting circuit or one small pump. Good discrimination is what keeps a single, contained fault from becoming a ship-wide loss of power, and it is one of the reasons switchboard protection settings are calculated and coordinated deliberately, not left at manufacturer defaults.</div></div>

  <p class="n-p"><strong>Preferential tripping</strong> is a related but distinct concept: a deliberate, pre-planned shedding of selected non-essential loads (in a set priority order) when the system is overloaded or a generator trips, so that essential services stay powered and the remaining generator(s) are not driven into overload and tripped themselves. It is covered in more depth in the main ETO oral exam content in this app; this module only needs you to know that it exists as a distinct concept from discrimination, and broadly why: discrimination is about isolating a fault to the smallest possible area, preferential tripping is about deliberately dropping load to protect the system as a whole after a loss of generation capacity.</p>

  <div class="n-h1" id="s-acb">ACB Construction and Arc Control, in Outline</div>
  <p class="n-p">An Air Circuit Breaker earns its name because the medium in which its main contacts open, and in which the resulting arc is controlled and extinguished, is simply air at atmospheric pressure, rather than a sealed insulating gas or oil as in some other switchgear types. In outline:</p>
  <div class="n-steps">
    <p class="n-p">1. <strong>Main and arcing contacts.</strong> The main current-carrying contacts separate first under a fault or a normal opening command; a set of dedicated arcing contacts are the last to separate, so the arc forms there rather than damaging the main contact surfaces used for everyday current carrying.</p>
    <p class="n-p">2. <strong>Arc runners and arc chute.</strong> The arc is drawn by its own magnetic field and by shaped metal "arc runner" plates away from the contacts and up into an arc chute, a stack of insulated metal splitter plates.</p>
    <p class="n-p">3. <strong>Splitting and cooling.</strong> The splitter plates divide the single arc into several shorter arcs in series. Each of those shorter arcs is harder to sustain than one long one, and the metal plates conduct heat away rapidly, cooling and de-ionising the arc path until it can no longer be sustained by the system voltage, at which point it extinguishes, typically as the AC current passes through a natural current zero.</p>
    <p class="n-p">4. <strong>Draw out chassis.</strong> Marine and industrial ACBs are very commonly built on a withdrawable (draw-out) truck, so the breaker itself can be racked out from its cubicle for inspection, testing or maintenance while the cubicle's fixed contacts and busbars are isolated, without disturbing the rest of the switchboard.</p>
  </div>
  <p class="n-p">An ACB's electronic trip unit, standard on modern marine types, replaces the fixed thermal-magnetic response of a small MCB with adjustable long time (overload), short time (grading delay for discrimination), instantaneous, and often earth fault protection functions, all in one programmable device. That adjustability is exactly why ACBs sit at the generator and main bus tie positions: those are the positions where discrimination against everything downstream actually has to be engineered and set, not just accepted as a fixed factory curve.</p>

  <div class="n-h1" id="s-lvhv">The LV / HV Boundary on Ships</div>
  <p class="n-p">In marine electrical practice, and consistently across the IEC 60092 series covering electrical installations in ships, the boundary between low voltage and high voltage is drawn at <span class="n-val">1000 V AC</span> (1500 V DC for the equivalent DC figure). Systems up to and including 1000 V AC are treated as low voltage; anything above that is high voltage. This is a clean, single threshold, and marine practice does not use an intermediate "medium voltage" category the way some shore-based utility and industrial standards sometimes do.</p>

  <div class="n-h2">Why HV exists on larger vessels at all</div>
  <p class="n-p">For a given amount of power to be delivered, power equals voltage times current (for a resistive or near-unity power factor case; more generally it is voltage, current and power factor together). Raise the voltage and, for the same power, the current falls proportionally. That has two large, compounding benefits that matter a great deal on a vessel with genuinely large loads, cruise ships, large LNG or drillship thrusters, and similar high power installations:</p>
  <div class="n-steps">
    <p class="n-p">1. <strong>Smaller cables.</strong> Cable cross section is driven by the current it must carry, not directly by the power. Lower current at higher voltage allows a smaller conductor cross section for the same delivered power, which matters enormously on a ship where cable weight, routing space and cost all scale with cross section, and every kilogram and every cable tray of space is a real constraint that does not exist in the same way ashore.</p>
    <p class="n-p">2. <strong>Lower I squared R losses.</strong> Since resistive heating loss in a cable is proportional to current squared, a given percentage reduction in current gives a much larger percentage reduction in loss. Halving the current for the same power quarters the cable heating loss, improving efficiency and reducing the cooling burden on cable runs and switchgear.</p>
  </div>
  <p class="n-p">Large propulsion loads, in particular podded or thruster electric propulsion drawing several megawatts, are the clearest case: at low voltage the current required would demand cable and switchgear of impractical size and weight, so such vessels generate and distribute at high voltage (typically a few kV, commonly figures such as 6.6 kV or 11 kV depending on the vessel and the installed generation, though the exact figure varies by ship and this module will not assert one specific value as universal) and step it down locally with transformers only where lower voltage is genuinely needed, for lighting, small motors, control power and general services.</p>

  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>The one line answer.</strong> Marine practice draws the low voltage / high voltage line at 1000 V AC, per IEC 60092. HV exists on larger vessels purely because of the P = VI relationship: for the same delivered power, a higher distribution voltage means proportionally lower current, which means smaller, lighter cables and, because cable loss scales with current squared, a disproportionately large reduction in resistive losses. It is the same reason national grids transmit at hundreds of kV ashore, applied at a ship's own scale.</div></div>

  <div class="n-h1" id="s-interview">Interview Answers, Rapid Fire</div>

  <p class="n-p"><strong>What are the main types of electrical fault?</strong><br>
  Short circuit, a near zero impedance path giving a very large, fast rising current. Overload, sustained current above rated value on an otherwise healthy circuit. Earth fault, unintended contact between a live conductor and earth. Open circuit, a broken conductor interrupting current flow. Short circuit and overload both need fast and slow protection respectively; earth fault needs a leakage sensing device; open circuit is mostly a loss-of-supply or single phasing concern rather than an overcurrent one.</p>

  <p class="n-p"><strong>How does an HRC fuse work?</strong><br>
  A silver element inside a sealed ceramic body, packed in fine silica sand, melts almost instantly on a heavy fault. The surrounding sand quenches the resulting arc by absorbing its energy and fusing into a solid glass-like channel around it, giving a fast, current limiting cut off that can interrupt the fault before peak current is even reached. Its main weakness on a three phase motor circuit is that it only protects the phase it is fitted in, so a single blown fuse can leave the motor running single phased.</p>

  <p class="n-p"><strong>What is the difference between MCB, MCCB and ACB?</strong><br>
  An MCB is a small, fixed-setting device up to roughly 125 A, used on final circuits like lighting and small power. An MCCB covers a much wider range, small frames from around 16 A up to large frames of 1600 A or more, often with adjustable trip settings, and is typically used on motor feeders and distribution boards. An ACB is the largest, air insulated, usually on a draw out chassis with a fully adjustable electronic trip unit, used on generator breakers, bus ties and main incoming feeders where fault current and the need for engineered discrimination are both highest.</p>

  <p class="n-p"><strong>What do MCB trip curve types B, C and D mean?</strong><br>
  They set the instantaneous, magnetic trip threshold as a multiple of rated current. Type B trips magnetically at 3 to 5 times rated current, for resistive loads like lighting with little inrush. Type C trips at 5 to 10 times, for loads with moderate inrush like small motors. Type D trips at 10 to 20 times, for heavy inrush loads like larger motors, transformers and solenoids. The right choice is the lowest curve the load's normal starting surge will not nuisance trip.</p>

  <p class="n-p"><strong>What do the thermal and magnetic elements in an MCB actually do?</strong><br>
  The thermal element is a bimetallic strip that bends under sustained heating from overload current, tripping the breaker over a timescale of seconds to minutes, faster for a bigger overload. The magnetic element is a solenoid that pulls in a plunger and trips the breaker within milliseconds once current exceeds a fixed instantaneous threshold, for a genuine short circuit. One element is slow and proportional, protecting against sustained overload; the other is fast and threshold based, protecting against a short circuit.</p>

  <p class="n-p"><strong>What is MCCB de-rating and why does it matter?</strong><br>
  A breaker's nameplate current is only valid at the reference conditions it was tested under, typically around 40°C ambient, a defined enclosure, and sea level, with a clean sinusoidal current. Higher ambient temperature, a poorly ventilated or crowded enclosure, breakers grouped closely together, altitude, and harmonic-rich current from drives all reduce the current the breaker can actually carry safely below that nameplate figure. You have to check the manufacturer's de-rating curves against the real installed conditions rather than assume the nameplate rating always applies.</p>

  <p class="n-p"><strong>What is the difference between breaking capacity and rated current?</strong><br>
  Rated current is how much current the breaker carries continuously in normal service without overheating. Breaking capacity, Icu and Ics, is how much fault current it can safely interrupt, a completely separate rating expressed in kA. A breaker must be sized correctly for both: for its everyday load current, and independently for the maximum fault current actually available at its position on the switchboard.</p>

  <p class="n-p"><strong>What is an ACB?</strong><br>
  An Air Circuit Breaker: the largest class of breaker in shipboard use, interrupting current in open air with the arc drawn into an arc chute and split across metal plates that cool and extinguish it. Built with fully adjustable electronic trip settings and usually on a withdrawable draw out chassis for maintenance. Used at generator breakers, bus ties and main switchboard incomers, where fault current and the need for engineered discrimination are highest.</p>

  <p class="n-p"><strong>What is the low and high voltage difference on a ship?</strong><br>
  Marine practice, under IEC 60092, draws the line at 1000 V AC: up to and including 1000 V is low voltage, above it is high voltage, with no medium voltage category in between. High voltage exists on larger vessels with heavy loads, particularly electric propulsion, because for the same power a higher voltage means proportionally lower current, which allows smaller and lighter cables and, since resistive loss scales with current squared, a disproportionately large cut in cable losses.</p>

  <p class="n-p"><strong>What is the difference between ELCB and RCCB?</strong><br>
  An ELCB, the older voltage operated type, senses a rise in voltage on the equipment's earthed frame and depends entirely on a healthy separate earth wire to detect a fault, which is its main weakness. An RCCB, the modern current operated type, uses a toroidal current transformer around the live conductors and trips on a current imbalance directly, with no dependency on earth wire condition. Standard sensitivities are 30 mA for personnel shock protection, 100 mA for broader protection with less nuisance tripping, and 300 to 500 mA for fire protection only on circuits like fixed lighting.</p>

  <p class="n-p"><strong>What is discrimination and why does it matter on a ship?</strong><br>
  Discrimination, or selectivity, means only the protective device closest to a fault should trip, achieved by current grading, upstream devices set to respond only to larger fault currents, and time grading, upstream devices given a longer delay so the downstream device gets first chance to clear the fault. On a ship there is no wider grid to fall back on, so poor discrimination can turn a single small circuit fault into a switchboard or generator trip and a partial or full blackout, which is why switchboard protection settings are calculated and coordinated deliberately.</p>

  <p class="n-p"><strong>What is the difference between a contactor and a breaker?</strong><br>
  A contactor is built for frequent switching under normal load current and has no built in trip mechanism of its own; it simply obeys its coil and has no way of sensing or safely interrupting a fault, so on its own it is not a protective device. A breaker is built to switch rarely but to reliably interrupt overload and fault current via its thermal and magnetic (or electronic) trip elements. A proper motor starter therefore always pairs a contactor with an overload relay and an upstream fuse or breaker, the contactor only ever handles the everyday switching.</p>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F13')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the F13 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

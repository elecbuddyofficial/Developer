window.loadQuizzes("T04_Switchboard", [
  {
    "q": "What is an ACB rated for in terms of its function in the MSB?",
    "a": "Full load current switching AND short-circuit fault current interruption",
    "opts": ["Short-circuit interruption only - contactors handle load switching", "Full load current switching AND short-circuit fault current interruption", "Voltage regulation and current limiting", "Earth fault detection and isolation only"],
    "exp": "An ACB in the MSB performs both roles: normal load switching (closing and opening under load current) AND protection (interrupting fault currents up to its Icu rating). A contactor handles load switching but cannot interrupt fault currents - it requires a backup fuse or ACB.",
    "cat": "ACB",
    "id": "T04_001"
  },
  {
    "q": "What happens if the arc chutes in an ACB become cracked or saturated with carbon deposits?",
    "a": "Arc interruption fails - arc re-strikes or persists - possible ACB explosion and fire",
    "opts": ["ACB opens more slowly but still interrupts successfully", "Arc interruption fails - arc re-strikes or persists - possible ACB explosion and fire", "ACB closes faster due to reduced arc resistance", "Only the trip time is affected - arc is still eventually quenched"],
    "exp": "Cracked or carbon-contaminated arc chutes lose their arc-splitting ability. The arc cannot be divided into manageable short arcs. Without effective quenching, the arc can re-strike, sustain, and cause catastrophic failure of the ACB - possible explosion, fire, and busbar burnout. Arc chute inspection and replacement is a critical maintenance task.",
    "cat": "ACB",
    "id": "T04_002"
  },
  {
    "q": "A ship's ACB fails to trip when the overcurrent relay operates. What should be checked first?",
    "a": "Trip coil continuity and the control circuit supply voltage",
    "opts": ["The arc chute condition", "Trip coil continuity and the control circuit supply voltage", "The main contact silver-tungsten alloy wear", "The spring charging mechanism"],
    "exp": "If relay operates but ACB doesn't trip: first check trip coil (TC) - measure resistance (open circuit = failed coil). Check control circuit supply voltage - NVC coil requires constant voltage to hold, TC requires a pulse to trip. Then check the mechanical latch release mechanism. Secondary injection testing would confirm whether the relay is operating its output contact correctly.",
    "cat": "ACB",
    "id": "T04_003"
  },
  {
    "q": "What is the purpose of having BOTH main contacts AND arc contacts in an ACB?",
    "a": "Arc contacts make first and break last - protecting main contacts from arc damage - keeping main contact resistance low",
    "opts": ["Main contacts carry load, arc contacts carry fault current only", "Arc contacts make first and break last - protecting main contacts from arc damage - keeping main contact resistance low", "Two contact sets provide redundancy if one set fails", "Main contacts open first, arc contacts provide a time delay"],
    "exp": "Sequence on closing: arc contacts close FIRST (take any pre-strike arc), then main contacts close. On opening: main contacts open FIRST (arc jumps to arc contacts), then arc contacts open LAST (take the arc into the chutes). Result: silver-tungsten main contacts stay clean and low-resistance, extending life significantly.",
    "cat": "ACB",
    "id": "T04_004"
  },
  {
    "q": "What is the purpose of 'anti-pumping' on an ACB?",
    "a": "Prevents the ACB from repeatedly closing if the close command is held on while a fault is present",
    "opts": ["Prevents hydraulic oil from pumping through the mechanism", "Prevents the ACB from repeatedly closing if the close command is held on while a fault is present", "Controls the rate of arc chute cooling", "Prevents contact bounce on closing"],
    "exp": "Without anti-pumping: if close command is held energised and a fault exists, the ACB would close, trip on fault, re-close (still getting close command), trip again repeatedly - 'pumping'. Anti-pumping circuitry latches off the close circuit after one close until the command is released and re-applied. Protects ACB from repeated fault interruption damage.",
    "cat": "ACB",
    "id": "T04_005"
  },
  {
    "q": "What is the difference between Ics and Icu in ACB specifications?",
    "a": "Ics is service breaking capacity (maintained after use). Icu is ultimate capacity (may need replacing after)",
    "opts": ["Ics is for AC systems, Icu is for DC systems", "Ics is service breaking capacity (maintained after use). Icu is ultimate capacity (may need replacing after)", "Ics is the closing capacity, Icu is the opening capacity", "Ics is for normal load, Icu is for short-circuit"],
    "exp": "Icu (ultimate breaking capacity): maximum short-circuit current the ACB can interrupt once - after which it must be inspected and may need replacement. Ics (service breaking capacity): current the ACB can interrupt and remain fully serviceable for continued use - typically 25-100% of Icu. Ship MSBs should be specified with Ics matching prospective fault current.",
    "cat": "ACB",
    "id": "T04_006"
  },
  {
    "q": "On a 440V, 60Hz vessel, what is the synchronous speed of a 4-pole emergency generator?",
    "a": "1800 RPM",
    "opts": ["1500 RPM", "1800 RPM", "3000 RPM", "3600 RPM"],
    "exp": "Ns = (120 \u00d7 f) / P = (120 \u00d7 60) / 4 = 1800 RPM. For 50Hz: 1500 RPM. This calculation is directly relevant to the emergency generator - the governor must maintain this speed for correct frequency. At 1800 RPM generating 60Hz, a 2% speed drop = 60 \u00d7 0.98 = 58.8Hz - outside SOLAS \u00b15% band.",
    "cat": "EDG",
    "id": "T04_007"
  },
  {
    "q": "Why must the emergency generator starting batteries NOT be used for any other purpose?",
    "a": "Any discharge from other uses reduces the guaranteed starting energy - risking failure to start in an emergency",
    "opts": ["Battery capacity is too small for any other use", "Any discharge from other uses reduces the guaranteed starting energy - risking failure to start in an emergency", "SOLAS prohibits dual-use batteries on any system", "Using them for other purposes voids the manufacturer warranty"],
    "exp": "SOLAS requires the emergency generator starting batteries to be dedicated solely for starting. If they are also used for lighting, electronics, or other loads, they may be in a partially discharged state when needed for emergency generator starting. The 45-second requirement cannot be met with a partially discharged starter battery.",
    "cat": "EDG",
    "id": "T04_008"
  },
  {
    "q": "What test must be performed on the emergency generator monthly?",
    "a": "Auto-start test - simulate main power failure and verify generator starts and supplies essential loads within 45 seconds",
    "opts": ["Full load test for 4 hours", "Auto-start test - simulate main power failure and verify generator starts and supplies essential loads within 45 seconds", "IR test of all windings", "Manual start and run for 30 minutes at no load"],
    "exp": "Monthly test per SOLAS: simulate main power loss \u2192 verify auto-start initiates \u2192 verify generator reaches rated voltage and frequency \u2192 verify ACB closes and essential loads supplied \u2192 time the whole sequence against the 45-second (cargo) / 30-second (passenger) limit. Log results with date, times, any defects.",
    "cat": "EDG",
    "id": "T04_009"
  },
  {
    "q": "The emergency generator auto-starts but takes 52 seconds to supply essential loads on a cargo ship. What is this?",
    "a": "A SOLAS non-compliance - maximum allowed is 45 seconds - PSC deficiency",
    "opts": ["Acceptable - 52 seconds is within the 60-second tolerance", "A SOLAS non-compliance - maximum allowed is 45 seconds - PSC deficiency", "Only unacceptable for passenger ships - cargo ships have 60 seconds", "Acceptable provided the captain has approved the extended start time"],
    "exp": "SOLAS II-1/Reg 42: cargo ships must have essential loads supplied within 45 seconds. 52 seconds is a clear SOLAS non-compliance. PSC inspectors test this - failure is a deficiency that must be rectified before departure. Common causes: slow engine startup, clogged fuel filters, discharged starting batteries, faulty auto-start sequence relay.",
    "cat": "EDG",
    "id": "T04_010"
  },
  {
    "q": "What SOLAS regulation covers the emergency generator location and performance requirements?",
    "a": "SOLAS Chapter II-1, Regulations 42 and 43",
    "opts": ["SOLAS Chapter II-1, Regulations 42 and 43", "SOLAS Chapter IV, Regulation 13", "SOLAS Chapter III, Regulation 6", "SOLAS Chapter II-2, Regulation 4"],
    "exp": "SOLAS II-1/Reg 42 (emergency source of power on cargo ships) and Reg 43 (passenger ships) cover: location, auto-start time (45/30 seconds), fuel endurance (18/36 hours), starting methods, essential services supplied. Chapter IV Reg 13 covers GMDSS battery specifically. These are the most tested SOLAS references for ETO orals.",
    "cat": "EDG",
    "id": "T04_011"
  },
  {
    "q": "What is the consequence of a generator motoring for more than a few seconds without the reverse power relay operating?",
    "a": "Mechanical damage to engine internals - pistons, rings, and valves run without combustion lubrication",
    "opts": ["Only the generator windings are damaged - the engine is unaffected", "Mechanical damage to engine internals - pistons, rings, and valves run without combustion lubrication", "The busbar voltage collapses as the motored generator absorbs kVAR", "Only the coupling between engine and generator is damaged"],
    "exp": "A diesel engine being motored (driven mechanically without combustion): cylinder walls, piston rings, and valves run without the lubrication provided by fuel combustion chemistry. Within seconds to minutes: metal-to-metal contact \u2192 scoring \u2192 seizure. The motoring load also overloads the running generators on the busbar.",
    "cat": "RPR",
    "id": "T04_012"
  },
  {
    "q": "A generator's prime mover fails. The reverse power relay has a 5-second time delay. What happens during those 5 seconds?",
    "a": "The generator coasts down and begins motoring - absorbing increasing power from the busbar - until relay operates",
    "opts": ["Nothing - the generator maintains output on inertia for 5 seconds", "The generator coasts down and begins motoring - absorbing increasing power from the busbar - until relay operates", "The generator ACB trips immediately on loss of prime mover", "The preferential trip relay operates first, shedding non-essential loads"],
    "exp": "As the engine stops, the generator loses torque and decelerates. The busbar (at constant frequency from other running generators) drives the slowing generator as a motor. Reverse real power flows increasing as the speed differential grows. After the 5-second time delay (which prevents tripping on brief paralleling transients), the reverse power relay trips the ACB.",
    "cat": "RPR",
    "id": "T04_013"
  },
  {
    "q": "Why is the reverse power relay time delay set to 3-5 seconds rather than instantaneous?",
    "a": "To prevent nuisance tripping on brief reverse power transients that occur when paralleling or during load swings",
    "opts": ["Because the relay measuring element needs 3-5 seconds to calculate reverse power accurately", "To prevent nuisance tripping on brief reverse power transients that occur when paralleling or during load swings", "SOLAS requires minimum 5 seconds before any generator protection operates", "To give the prime mover time to restart before the ACB trips"],
    "exp": "During synchronisation and ACB closure, brief momentary reverse power can flow as the incoming generator adjusts to the busbar. Similarly, large load swings can briefly swing the power factor causing momentary reverse flow. The 3-5 second delay prevents these transients from tripping the ACB unnecessarily while still catching a genuine prime mover failure.",
    "cat": "RPR",
    "id": "T04_014"
  },
  {
    "q": "The under-frequency relay sheds non-essential loads (preferential trip) at Stage 2 (47Hz). The frequency then recovers to 50Hz. What was the cause?",
    "a": "Generator was transiently overloaded - load shedding restored balance - generator recovered without tripping",
    "opts": ["The generator developed a fault that was self-correcting", "Generator was transiently overloaded - load shedding restored balance - generator recovered without tripping", "The emergency generator started and assisted the main generator", "A frequency relay malfunction caused incorrect operation"],
    "exp": "This is the intended functioning of the under-frequency protection system. Stage 2 shed sufficient non-essential load to bring load within generator capacity - the prime mover could then accelerate back to rated speed and frequency. No generator trip occurred. Investigation should still follow: why was the generator overloaded, what load caused it, is the generation capacity adequate?",
    "cat": "UFP",
    "id": "T04_015"
  },
  {
    "q": "A ship's system is at 50Hz. During a heavy motor start, frequency dips to 47.5Hz briefly then recovers. Which relay operates?",
    "a": "Stage 1 alarm relay (48Hz) may alarm briefly - but Stage 2 (47Hz) trip would NOT operate as 47.5Hz is above the trip threshold",
    "opts": ["Stage 2 (47Hz) preferential trip operates - any dip below 48Hz triggers shedding", "Stage 1 alarm relay (48Hz) may alarm briefly - but Stage 2 (47Hz) trip would NOT operate as 47.5Hz is above the trip threshold", "No relay operates - 47.5Hz is within SOLAS \u00b15% tolerance", "The overcurrent relay operates due to high starting current"],
    "exp": "Stage 1 alarm is typically set at 48Hz. A dip to 47.5Hz triggers the alarm but does NOT reach the Stage 2 (47Hz) preferential trip threshold. The dashpot timer also requires the condition to persist - a brief transient may not even trigger the alarm timer. This is the intended behaviour: alarm on moderate dip, shed loads only on sustained or severe drop.",
    "cat": "UFP",
    "id": "T04_016"
  },
  {
    "q": "What must the bus tie breaker interlock prevent?",
    "a": "Both generator ACBs and the BTB from being closed simultaneously - preventing the generators from paralleling through the BTB unintentionally",
    "opts": ["The BTB from closing during normal operations", "Both generator ACBs and the BTB from being closed simultaneously - preventing the generators from paralleling through the BTB unintentionally", "Personnel from accessing the BTB cubicle while closed", "The BTB from opening while generators are running in parallel"],
    "exp": "The BTB interlocking scheme typically prevents having all three breakers (Gen 1 ACB, BTB, Gen 2 ACB) closed simultaneously unless intentional paralleling through the BTB is authorised. Without this interlock, closing the BTB while both generators are closed could create an uncontrolled parallel path - with potentially different voltages causing large circulating currents.",
    "cat": "BTB",
    "id": "T04_017"
  },
  {
    "q": "When would a ship close its Bus Tie Breaker as a normal operational procedure?",
    "a": "When transferring load from one generator to the other - briefly closing BTB before opening the first generator ACB",
    "opts": ["During port arrival when all generators must run in parallel through the BTB", "When transferring load from one generator to the other - briefly closing BTB before opening the first generator ACB", "Whenever frequency drops below 48Hz on either section", "During blackout drill to test BTB operation only"],
    "exp": "Load transfer procedure: Run-up incoming generator \u2192 synchronise to its MSB section \u2192 close BTB (now both sections connected) \u2192 transfer loads as needed \u2192 close incoming generator ACB \u2192 open outgoing generator ACB \u2192 open BTB (back to split-bus). The BTB is only briefly closed during the transfer - normal operation is BTB open.",
    "cat": "BTB",
    "id": "T04_018"
  },
  {
    "q": "What does 'cold ironing' or 'Alternative Maritime Power (AMP)' mean?",
    "a": "Supplying the ship from shore electrical power in port - allowing ship's generators to be shut down",
    "opts": ["Using cold (ambient temperature) fuel to reduce generator emissions", "Supplying the ship from shore electrical power in port - allowing ship's generators to be shut down", "Connecting the emergency generator to the main switchboard", "Using renewable energy panels to supplement generator power at anchor"],
    "exp": "Cold ironing = shore power = AMP. The ship connects to the port's electrical grid, allowing all generators to be shut down. Benefits: zero exhaust emissions in port (SOx, NOx, particulates), reduced noise, fuel savings. Required by California Air Resources Board, Port of Rotterdam, and other major ports. IEC 80005-1 covers the HVSC system standard.",
    "cat": "SHC",
    "id": "T04_019"
  },
  {
    "q": "What verifications must be completed BEFORE closing the shore connection ACB?",
    "a": "Verify shore voltage, frequency, and phase sequence match ship's system - then synchronise if transferring under load",
    "opts": ["Only verify voltage - frequency can adjust automatically", "Verify shore voltage, frequency, and phase sequence match ship's system - then synchronise if transferring under load", "Just connect and check power flows in the correct direction", "Verify shore cable insulation resistance is above 1 M\u03a9"],
    "exp": "Before closing shore ACB: 1) Verify shore voltage matches ship's bus voltage (within \u00b15%). 2) Verify frequency matches (or use frequency converter). 3) Verify phase sequence matches (phase rotation meter). 4) If ship's generators are still running: synchronise shore supply to running bus before closing shore ACB (like any parallel operation). Wrong phase sequence = large circulating current on closing.",
    "cat": "SHC",
    "id": "T04_020"
  },
  {
    "q": "What is the difference between Offline UPS and Online UPS for critical ship systems?",
    "a": "Online: always feeds load through inverter - zero switchover. Offline: switches to inverter on mains failure - 4-12ms gap",
    "opts": ["Online is newer technology. Offline is older - they both have zero switchover", "Online: always feeds load through inverter - zero switchover. Offline: switches to inverter on mains failure - 4-12ms gap", "Offline provides better power quality than online", "Online has batteries, offline relies on capacitors for short gaps"],
    "exp": "Online (double-conversion): load ALWAYS through rectifier-inverter - mains failure has zero impact. Offline (standby): load normally direct from mains - on mains failure, switch transfers to inverter (4-12ms gap). 4-12ms is acceptable for most equipment but not for some critical navigation computers and automation systems. Ship critical systems always use online UPS.",
    "cat": "UPS",
    "id": "T04_021"
  },
  {
    "q": "What loads on a ship are supplied from both the Emergency Switchboard AND UPS?",
    "a": "GMDSS radio equipment - it must have both UPS (zero interruption) and emergency generator (long duration)",
    "opts": ["Navigation lights - both systems ensure they never go out", "GMDSS radio equipment - it must have both UPS (zero interruption) and emergency generator (long duration)", "Main engine fuel pumps - both sources ensure propulsion", "Shore connection - both provide redundant power sources"],
    "exp": "GMDSS is supplied from both: UPS provides immediate, uninterrupted power during any brief outage, and the emergency generator provides sustained power (18/36 hours) for extended emergency operations. The UPS covers the gap during emergency generator startup. This dual arrangement ensures GMDSS is never interrupted regardless of the nature of the emergency.",
    "cat": "UPS",
    "id": "T04_022"
  },
  {
    "q": "During a battery capacity test, a 100Ah rated battery delivers 76Ah before voltage drops below minimum. What action is required?",
    "a": "Replace the battery - capacity is below 80% of rated (76Ah < 80Ah threshold)",
    "opts": ["Equalising charge to recover capacity, then retest", "Replace the battery - capacity is below 80% of rated (76Ah < 80Ah threshold)", "Continue using - 76% capacity is within acceptable range", "Investigate individual cells - no replacement needed yet"],
    "exp": "80% of 100Ah = 80Ah minimum acceptable capacity. The battery delivered only 76Ah (76%) - below the 80% replacement threshold. The battery must be replaced. This applies to all safety-critical batteries: GMDSS, emergency generator starting, emergency lighting, UPS. Certificate of the replacement test must be maintained.",
    "cat": "BAT",
    "id": "T04_023"
  },
  {
    "q": "What is 'battery sulphation' and can it be reversed?",
    "a": "Lead sulphate crystal build-up on plates due to chronic undercharging - partially reversible if caught early with equalising charge",
    "opts": ["Contamination of electrolyte with sea water - permanently damages the battery", "Lead sulphate crystal build-up on plates due to chronic undercharging - partially reversible if caught early with equalising charge", "Oxidation of terminal connections - cleaned with sodium bicarbonate", "Gassing of hydrogen during charging - controlled by ventilation"],
    "exp": "Sulphation occurs when a lead-acid battery is kept in a discharged state - lead sulphate crystals harden on plates, reducing active area. Early sulphation: slow equalising charge (above normal float voltage, 2.35-2.40V/cell for extended period) can partially dissolve crystals. Advanced sulphation: irreversible - replace battery. Prevent by keeping batteries on float charge.",
    "cat": "BAT",
    "id": "T04_024"
  },
  {
    "q": "An MSB has forward and aft access doors. What safety purpose do these serve?",
    "a": "Emergency escape - personnel can exit from either end if fire or fault blocks one exit route",
    "opts": ["To allow two engineers to work simultaneously from different ends", "Emergency escape - personnel can exit from either end if fire or fault blocks one exit route", "Required for ventilation airflow through the MSB", "To access busbars from both ends for maintenance"],
    "exp": "SOLAS and IEC 60092 require access from both ends of the MSB for emergency escape. If a fire or arc flash occurs inside the MSB at one end, personnel working at the other end can exit via the opposite door without passing through the fire/arc hazard. A single door would trap people if the hazard was between them and the exit.",
    "cat": "MSB",
    "id": "T04_025"
  },
  {
    "q": "What is the earth bus on a Main Switchboard?",
    "a": "A continuous copper bar running the full length of the MSB to which all equipment frames and cable armour are bonded",
    "opts": ["The busbar that carries the neutral current", "A continuous copper bar running the full length of the MSB to which all equipment frames and cable armour are bonded", "A separate earth fault bus for monitoring insulation resistance", "The busbar connecting the MSB to the hull earth plate"],
    "exp": "The earth bus (earth bar) runs the full length of the MSB. Every cubicle frame, door, cable armour, and equipment housing is bonded to it. It connects to the ship's main earth bar and ultimately to the hull. Provides a low-impedance path for fault currents - ensuring protection relays operate rapidly on earth faults rather than current flowing through personnel.",
    "cat": "MSB",
    "id": "T04_026"
  },
  {
    "q": "What are the arc contacts (arcing contacts) in an ACB made of?",
    "a": "Carbon or copper-graphite",
    "opts": ["Silver-tungsten alloy", "Carbon or copper-graphite", "Tungsten carbide", "Copper-nickel alloy"],
    "exp": "Arc contacts are made of carbon or copper-graphite because they are designed to take the arc damage, protecting the silver-tungsten main contacts. They make FIRST and break LAST - absorbing arc energy so main contacts remain undamaged.",
    "cat": "ACB",
    "id": "T04_027"
  },
  {
    "q": "In an ACB, what is the purpose of the arc chutes?",
    "a": "To split the arc into multiple shorter series arcs, cooling and extinguishing it",
    "opts": ["To store energy for the closing spring", "To split the arc into multiple shorter series arcs, cooling and extinguishing it", "To carry the main load current normally", "To provide short-circuit protection"],
    "exp": "Arc chutes contain insulating splitter plates that divide the arc into many shorter series arcs. Each shorter arc has a higher voltage drop - the total exceeds supply voltage - so the arc cannot sustain itself and extinguishes. Arc chute material absorbs the heat.",
    "cat": "ACB",
    "id": "T04_028"
  },
  {
    "q": "What is the correct sequence of events when an ACB opens under fault?",
    "a": "Trip signal \u2192 contacts open \u2192 arc forms \u2192 arc driven into chutes \u2192 arc split \u2192 arc extinguished",
    "opts": ["Trip signal \u2192 contacts open \u2192 arc forms \u2192 arc driven into chutes \u2192 arc split \u2192 arc extinguished", "Trip signal \u2192 arc quenched \u2192 contacts open \u2192 circuit broken", "Contacts open \u2192 trip signal \u2192 arc forms \u2192 arc extinguished", "Trip coil energised \u2192 arc forms \u2192 contacts open \u2192 spring releases"],
    "exp": "The arc is driven by magnetic force from the arc current itself into the arc chutes where it is split and extinguished. The sequence is precise: trip signal first, then mechanical opening, then arc management inside the chutes.",
    "cat": "ACB",
    "id": "T04_029"
  },
  {
    "q": "What does NVC (No Voltage Coil) / UVT (Under-Voltage Trip) do on an ACB?",
    "a": "Opens the ACB automatically if control voltage is lost - fail-safe operation",
    "opts": ["Prevents the ACB from closing on overload", "Opens the ACB automatically if control voltage is lost - fail-safe operation", "Limits the voltage across the arc contacts", "Provides backup power to the trip coil"],
    "exp": "The NVC/UVT is a continuous-duty coil that holds the ACB closed while control voltage is present. If control voltage fails, the coil de-energises, the latch releases, and the ACB opens automatically. Fail-safe: loss of control power = breaker opens safely. It also prevents auto-reclosing after blackout restoration.",
    "cat": "ACB",
    "id": "T04_030"
  },
  {
    "q": "What rating defines the maximum fault current an ACB can safely interrupt?",
    "a": "Ics / Icu - short circuit breaking capacity",
    "opts": ["In - normal current rating", "Ics / Icu - short circuit breaking capacity", "Ue - rated operational voltage", "Ui - insulation voltage"],
    "exp": "Ics (service breaking capacity) and Icu (ultimate breaking capacity) define how much short-circuit current the ACB can interrupt safely without explosive failure. In is the continuous load current. Ue is the operational voltage.",
    "cat": "ACB",
    "id": "T04_031"
  },
  {
    "q": "Why does an ACB use silver-tungsten alloy for main contacts?",
    "a": "High electrical conductivity combined with arc resistance and low contact resistance when closed",
    "opts": ["Cheapest material available for high-current contacts", "High electrical conductivity combined with arc resistance and low contact resistance when closed", "Magnetic properties help drive the arc into the chutes", "High thermal mass absorbs heat from the arc"],
    "exp": "Silver-tungsten gives the best combination of electrical conductivity (silver) and arc erosion resistance (tungsten). Main contacts carry full load current normally and must have minimal contact resistance to avoid heating. Arc contacts - not main contacts - take the arc damage.",
    "cat": "ACB",
    "id": "T04_032"
  },
  {
    "q": "What is the purpose of the spring-charged operating mechanism in an ACB?",
    "a": "Stores energy to open contacts rapidly - ensuring fast arc interruption independent of operator speed",
    "opts": ["Provides backup power if trip coil fails", "Stores energy to open contacts rapidly - ensuring fast arc interruption independent of operator speed", "Prevents the contacts from bouncing when closing", "Controls the arc chute cooling fans"],
    "exp": "The spring stores energy for both opening (opening spring) and closing (closing spring). On a trip command, the spring releases instantly - opening contacts in milliseconds regardless of operator action. Fast separation is critical for arc interruption in the chutes.",
    "cat": "ACB",
    "id": "T04_033"
  },
  {
    "q": "What is the difference between ACB SERVICE and TEST positions?",
    "a": "Service: power contacts connected to busbars. Test: power contacts disconnected but control circuits remain connected",
    "opts": ["Service: manual operation only. Test: remote operation only", "Service: power contacts connected to busbars. Test: power contacts disconnected but control circuits remain connected", "Service: ACB closed. Test: ACB open but still in switchboard", "Service: full load rating. Test: reduced load for testing"],
    "exp": "In TEST position, the ACB is racked halfway - main busbars are isolated but control wiring stays connected. This allows protection relay testing (secondary injection) without any live power on the circuit. ISOLATED position disconnects both power AND control circuits for full maintenance.",
    "cat": "POS",
    "id": "T04_034"
  },
  {
    "q": "In which ACB position can you perform secondary injection testing of protection relays?",
    "a": "TEST position",
    "opts": ["SERVICE position", "TEST position", "ISOLATED position", "Any position with the ACB tripped open"],
    "exp": "TEST position disconnects main power contacts from busbars but keeps control wiring connected. Secondary injection test set connects to relay inputs to verify trip settings. If done in SERVICE, test currents would flow through live load cables creating hazard.",
    "cat": "POS",
    "id": "T04_035"
  },
  {
    "q": "When must an ACB be placed in the ISOLATED position?",
    "a": "When performing physical maintenance inside the ACB cubicle requiring full isolation of both power and control circuits",
    "opts": ["When performing protection relay calibration tests", "When performing physical maintenance inside the ACB cubicle requiring full isolation of both power and control circuits", "When performing a closing coil operation test", "When performing a load test"],
    "exp": "ISOLATED position fully withdraws the ACB - disconnecting both main power contacts and all control circuits. Required for physical maintenance (contact inspection, mechanism lubrication, spring replacement, arc chute replacement) where no inadvertent operation is acceptable.",
    "cat": "POS",
    "id": "T04_036"
  },
  {
    "q": "Why does an ACB have an interlock preventing racking in/out while in the CLOSED position?",
    "a": "To prevent breaking load current in open air - bypassing the arc chutes - which would cause explosive arc flash",
    "opts": ["To protect the racking mechanism gears from damage", "To prevent breaking load current in open air - bypassing the arc chutes - which would cause explosive arc flash", "To comply with IEC colour-coding requirements", "To allow the closing springs to charge before insertion"],
    "exp": "Racking a closed ACB would separate current-carrying contacts in open air, not inside the arc chutes. The resulting arc - especially at fault current - would be explosive and uncontrolled. The interlock enforces opening (tripping) the ACB first, then racking.",
    "cat": "POS",
    "id": "T04_037"
  },
  {
    "q": "What does IDMT stand for in OCR relay terminology?",
    "a": "Inverse Definite Minimum Time",
    "opts": ["Instantaneous Definite Maximum Trip", "Inverse Definite Minimum Time", "Integrated Digital Metering Technology", "Inductive Differential Monitoring Threshold"],
    "exp": "IDMT = Inverse Definite Minimum Time. Inverse: higher fault current = shorter trip time. Definite Minimum: there is a minimum trip time regardless of how high the current goes (prevents mechanical damage from too-fast operation). This characteristic coordinates protection and avoids nuisance trips on brief transient overloads.",
    "cat": "OCR",
    "id": "T04_038"
  },
  {
    "q": "An OCR has a pick-up setting of 100A. A 500A fault flows. How does the relay respond?",
    "a": "Trips faster than for a 200A fault - higher current multiple = shorter trip time per IDMT characteristic",
    "opts": ["Trips at exactly the same time as for any current above pick-up", "Trips faster than for a 200A fault - higher current multiple = shorter trip time per IDMT characteristic", "Does not trip - 500A exceeds the relay's calibration range", "Trips instantaneously with no time delay"],
    "exp": "IDMT: trip time is inversely proportional to current multiple above pick-up. At 5\u00d7 set (500A = 5\u00d7100A), trip time is much shorter than at 2\u00d7 set (200A). This allows brief overloads to be tolerated while clearing large faults rapidly.",
    "cat": "OCR",
    "id": "T04_039"
  },
  {
    "q": "During secondary injection OCR testing, why is the ACB racked to TEST position?",
    "a": "To isolate power busbars so test current flows only through the relay - not through live load cables",
    "opts": ["To access relay terminals from the rear of the panel", "To isolate power busbars so test current flows only through the relay - not through live load cables", "To allow relay settings to be changed safely during the test", "To reduce the impedance seen by the injection test set"],
    "exp": "With ACB in TEST position, CT secondary leads can be safely disconnected and injection set connected to relay alone. In SERVICE position, disconnecting CT secondary with current flowing creates dangerous open-circuit CT voltage (thousands of volts). TEST position is mandatory for this work.",
    "cat": "OCR",
    "id": "T04_040"
  },
  {
    "q": "What does the TMS (Time Multiplier Setting) on an IDMT relay control?",
    "a": "The overall trip time at any given current multiple - shifts the entire IDMT time-current curve up or down",
    "opts": ["The pick-up current threshold only", "The overall trip time at any given current multiple - shifts the entire IDMT time-current curve up or down", "The shape of the curve from standard to very inverse", "The maximum current the relay can measure"],
    "exp": "TMS multiplies all trip times by a constant factor. TMS=0.5 halves all trip times (faster). TMS=2.0 doubles all times (slower). Pick-up (Is) sets the threshold. TMS sets the speed. Together they define the complete relay characteristic for coordination with other protection devices.",
    "cat": "OCR",
    "id": "T04_041"
  },
  {
    "q": "What is the purpose of the Reverse Power Relay on a ship's generator?",
    "a": "To trip the generator ACB when the generator absorbs power from the busbar instead of supplying it - preventing engine damage",
    "opts": ["To protect the generator from overvoltage during load rejection", "To trip the generator ACB when the generator absorbs power from the busbar instead of supplying it - preventing engine damage", "To prevent reverse rotation of the propeller shaft", "To trip when reactive power (kVAR) reverses"],
    "exp": "When the prime mover fails, the generator remains synchronised to the live busbar and is motored by it - absorbing power. Without reverse power protection, the engine runs without combustion (no lubrication from fuel ignition), causing mechanical damage to pistons, valves, and injectors.",
    "cat": "RPR",
    "id": "T04_042"
  },
  {
    "q": "What is the typical reverse power relay setting for a ship's generator?",
    "a": "5\u201310% of rated kW in reverse, with 3\u20135 second time delay",
    "opts": ["50% rated kW reverse, instantaneous", "5\u201310% of rated kW in reverse, with 3\u20135 second time delay", "100% rated kW reverse, 10 second delay", "2% rated kW reverse, instantaneous"],
    "exp": "Low setting (5-10%) catches even slight motoring. The 3-5 second time delay prevents nuisance trips during paralleling transients when brief momentary reverse power may flow as machines synchronise to the busbar before taking load.",
    "cat": "RPR",
    "id": "T04_043"
  },
  {
    "q": "What physical damage occurs if a diesel engine is motored without reverse power protection?",
    "a": "Pistons and valves run without combustion lubrication - mechanical seizure and severe internal damage",
    "opts": ["Engine runs at excessive speed causing bearing failure", "Pistons and valves run without combustion lubrication - mechanical seizure and severe internal damage", "Reverse rotation damages the propeller coupling", "The AVR loses excitation causing voltage collapse"],
    "exp": "When motored, the engine is driven mechanically but without fuel combustion. No combustion = no lubrication of cylinder walls, injector tips, valve seats from fuel. The loading without proper lubrication causes rapid wear, scoring, and potential seizure of moving parts.",
    "cat": "RPR",
    "id": "T04_044"
  },
  {
    "q": "Which test method verifies both reverse power relay calibration AND trip coil operation?",
    "a": "Secondary injection using a power relay test set with ACB in TEST position",
    "opts": ["Pressing the TEST button on the relay", "Secondary injection using a power relay test set with ACB in TEST position", "Running the generator deliberately under motoring conditions", "Checking relay datasheet values against wiring diagram"],
    "exp": "Secondary injection applies calibrated voltage and current at the correct phase angle (simulating reverse power) to the relay input terminals. With ACB in TEST position, the relay output actuates the trip coil - verifying both calibration accuracy and the complete trip circuit.",
    "cat": "RPR",
    "id": "T04_045"
  },
  {
    "q": "Why does frequency drop when a ship's generator becomes overloaded?",
    "a": "Prime mover cannot supply enough torque for the excess load - it decelerates - reducing frequency proportionally",
    "opts": ["The AVR reduces excitation to protect the windings", "Prime mover cannot supply enough torque for the excess load - it decelerates - reducing frequency proportionally", "The ACB limits current which reduces rotor speed", "The governor closes fuel to prevent overspeeding"],
    "exp": "f = (P \u00d7 N) / 120. If load exceeds prime mover capacity, the engine decelerates. Every RPM reduction directly reduces frequency. The governor adds fuel attempting to restore speed, but if load demand exceeds capacity, frequency continues falling.",
    "cat": "UFP",
    "id": "T04_046"
  },
  {
    "q": "At what frequency does the Under-Frequency relay typically trigger the FIRST stage (alarm) on a 50Hz ship?",
    "a": "48 Hz",
    "opts": ["45 Hz", "47 Hz", "48 Hz", "49.5 Hz"],
    "exp": "Typical 50Hz system settings: Stage 1 alarm: 48Hz. Stage 2 preferential trip (non-essential load shedding): 47Hz. Stage 3 generator ACB trip: 45-46Hz. Staged response allows operator intervention before automatic action. SOLAS requires frequency recovery to within \u00b15% within 5 seconds of a disturbance.",
    "cat": "UFP",
    "id": "T04_047"
  },
  {
    "q": "What happens to ship's cooling pumps when frequency drops to 45Hz on a 50Hz system?",
    "a": "Pump speed drops 10% - reduced flow - risk of engine overheating",
    "opts": ["Pumps stop completely below 47Hz", "Pump speed drops 10% - reduced flow - risk of engine overheating", "Pump draws more current - motor overheats", "Pump speed is unchanged - only voltage is affected"],
    "exp": "Synchronous speed Ns = 120f/P. At 45Hz (90% of 50Hz), all induction motors run 10% slower. Centrifugal pump flow is proportional to speed - 10% speed reduction means ~10% less cooling and lubrication flow. With engines under load, this reduction in cooling can rapidly cause overheating.",
    "cat": "UFP",
    "id": "T04_048"
  },
  {
    "q": "How does low system frequency damage ship's transformers?",
    "a": "Core flux increases (V/f ratio rises) - iron core saturates - overheating and dramatically increased magnetising current",
    "opts": ["Transformer output voltage drops proportionally - insufficient for loads", "Core flux increases (V/f ratio rises) - iron core saturates - overheating and dramatically increased magnetising current", "Winding resistance increases causing voltage drop", "Frequency has no effect on transformer operation"],
    "exp": "Transformer core flux \u03a6 \u221d V/f. At constant voltage, reducing frequency increases flux beyond design. When the core saturates, magnetising current surges (can be 10\u00d7 normal), iron losses increase, and the transformer overheats - potentially damaging windings.",
    "cat": "UFP",
    "id": "T04_049"
  },
  {
    "q": "What is the PRIMARY function of a Bus Tie Breaker (BTB) on a ship with split MSB?",
    "a": "To connect both MSB sections, allowing one generator to supply both when the other fails",
    "opts": ["To protect each MSB section from earth faults", "To connect both MSB sections, allowing one generator to supply both when the other fails", "To disconnect the MSB from the emergency switchboard in an emergency", "To provide backup protection for both generator ACBs simultaneously"],
    "exp": "Large ships have two MSB sections, each normally supplied by its own generator. The BTB normally stays OPEN for maximum fault isolation. Closing the BTB connects both sections - one working generator then supplies the entire ship's load when the other fails.",
    "cat": "BTB",
    "id": "T04_050"
  },
  {
    "q": "Why is the Bus Tie Breaker normally kept OPEN during ship operations?",
    "a": "A fault on one busbar section cannot spread to the other - maximum fault isolation and continuity",
    "opts": ["BTB contacts wear faster when closed under load", "A fault on one busbar section cannot spread to the other - maximum fault isolation and continuity", "Both generators produce more power with sections separated", "Classification society requires BTB open at all times at sea"],
    "exp": "With sections split, a fault (short circuit, earth fault) on one section is isolated - protection only trips that section's generator ACB. The healthy section continues supplying the rest of the ship. If sections are connected when a fault occurs, protection may trip both generators, causing complete blackout.",
    "cat": "BTB",
    "id": "T04_051"
  },
  {
    "q": "What colour lamp indicates a motor is RUNNING on a Group Starter Panel per IEC 60073?",
    "a": "RED",
    "opts": ["GREEN", "RED", "AMBER", "WHITE"],
    "exp": "Per IEC 60073 (international standard for indication colours): RED = motor RUNNING (caution - do not approach moving parts). GREEN = motor STOPPED (safe state). AMBER/YELLOW = fault or alarm. WHITE = power supply available/healthy. This is counterintuitive - RED means running, not danger. Anil Deswal (Mumbai MMD) specifically asks this.",
    "cat": "GSP",
    "id": "T04_052"
  },
  {
    "q": "What colour PUSH BUTTON is used for START on a Group Starter Panel per IEC 60073?",
    "a": "GREEN",
    "opts": ["RED", "GREEN", "WHITE", "BLACK"],
    "exp": "Per IEC 60073: GREEN push button = START. RED push button = STOP and EMERGENCY STOP. Lamp colours: GREEN = stopped, RED = running, AMBER = fault. Push button and lamp colours serve different purposes - learn both separately as surveyors test each independently.",
    "cat": "GSP",
    "id": "T04_053"
  },
  {
    "q": "What is the advantage of a Group Starter Panel (Motor Control Centre) over individual motor starters?",
    "a": "Centralised control and maintenance, compact assembly, common busbars, remote operation - ideal for UMS ships",
    "opts": ["Cheaper than individual starters for single motors", "Centralised control and maintenance, compact assembly, common busbars, remote operation - ideal for UMS ships", "Provides better short-circuit protection than individual MCBs", "Each motor gets a dedicated generator supply"],
    "exp": "Group Starter Panel (MCC) houses all starters in one location with common busbars. Benefits: all starters accessible in one place for maintenance, compact, ECR remote start/stop supports UMS (unattended machinery spaces) operation, common power distribution is more efficient than individual cables from MSB to each starter.",
    "cat": "GSP",
    "id": "T04_054"
  },
  {
    "q": "Per SOLAS Chapter II-1, Regulation 42, where must the emergency generator be located?",
    "a": "Above the bulkhead deck, outside the main engine room, not sharing a boundary with it",
    "opts": ["In the main engine room on a raised platform above floodwater level", "Above the bulkhead deck, outside the main engine room, not sharing a boundary with it", "Adjacent to the main switchboard for fast load transfer", "Directly below the bridge for crew access during emergency"],
    "exp": "SOLAS II-1/Reg 42: Emergency generator must be above the bulkhead (freeboard) deck - protection against flooding of lower spaces. Must be outside the engine room in a separate compartment - protection against fire or flooding of the main machinery space. It must remain available when the main engine room is inaccessible.",
    "cat": "EDG",
    "id": "T04_055"
  },
  {
    "q": "What is the maximum allowed time for a CARGO ship's emergency generator to supply essential loads per SOLAS?",
    "a": "45 seconds",
    "opts": ["30 seconds", "45 seconds", "60 seconds", "2 minutes"],
    "exp": "SOLAS II-1/Reg 42: Cargo ships - 45 seconds from detection of main power failure to emergency generator supplying all essential loads. Passenger ships - 30 seconds. This includes engine startup, voltage/frequency build-up, and ACB closure. Failure to meet this time at PSC inspection results in a deficiency.",
    "cat": "EDG",
    "id": "T04_056"
  },
  {
    "q": "How many independent starting methods must a ship's emergency generator have?",
    "a": "Two independent methods - battery start (dedicated) plus one other",
    "opts": ["One - battery start is sufficient by SOLAS", "Two independent methods - battery start (dedicated) plus one other", "Three methods always required", "One automatic plus one manual cranking"],
    "exp": "SOLAS II-1/Reg 42: Two independent starting means. First method: dedicated batteries (not used for any other purpose, always kept charged). Second method: hydraulic accumulator, compressed air, or second independent battery bank. Both must be independent - failure of one cannot affect the other.",
    "cat": "EDG",
    "id": "T04_057"
  },
  {
    "q": "How long must a CARGO ship's emergency generator fuel supply last per SOLAS?",
    "a": "18 hours",
    "opts": ["6 hours", "12 hours", "18 hours", "36 hours"],
    "exp": "SOLAS II-1/Reg 42: Cargo ships - 18 hours minimum continuous operation. Passenger ships - 36 hours. The emergency generator fuel tank must be separate from the main engine room fuel system - so flooding or fire in the engine room doesn't cut off emergency generator fuel.",
    "cat": "EDG",
    "id": "T04_058"
  },
  {
    "q": "What is the transitional source of power and what minimum duration must it provide?",
    "a": "A battery bank providing immediate essential load supply for minimum 30 minutes while emergency generator starts",
    "opts": ["Shore power connected during the 45-second gap", "A battery bank providing immediate essential load supply for minimum 30 minutes while emergency generator starts", "The main generators running at reduced output", "A separate diesel set for short-term emergency cover"],
    "exp": "The transitional source (ESB batteries) provides INSTANT supply with zero startup delay - covering the 45-second window before the emergency generator comes online. It supplies: navigation lights, GMDSS, steering gear, internal communications, emergency lighting. Automatic switchover, no crew action required.",
    "cat": "EDG",
    "id": "T04_059"
  },
  {
    "q": "Which service is NOT supplied by the emergency generator per SOLAS?",
    "a": "Bow thruster and main propulsion auxiliaries",
    "opts": ["Navigation lights and shapes", "Bow thruster and main propulsion auxiliaries", "GMDSS radio equipment", "Emergency bilge pump"],
    "exp": "Emergency generator supplies SAFETY-CRITICAL systems only: navigation lights, GMDSS, fire detection/alarm, emergency bilge, watertight doors, emergency lighting, steering gear (via transitional first), one fire pump, sprinkler. Bow thruster and main propulsion are non-essential in emergencies and would overload the emergency generator.",
    "cat": "EDG",
    "id": "T04_060"
  },
  {
    "q": "What is the correct specific gravity (SG) of a fully charged lead-acid battery cell?",
    "a": "1.280\u20131.300",
    "opts": ["1.100\u20131.150", "1.200\u20131.230", "1.280\u20131.300", "1.350\u20131.400"],
    "exp": "Fully charged lead-acid cell SG: 1.280\u20131.300 measured at 25\u00b0C. Fully discharged: ~1.100. Cells should agree within 0.050 SG - diverging cells indicate sulphation, internal short, or contamination. Measured with a hydrometer. Low SG with good voltage may indicate electrolyte stratification - equalising charge needed.",
    "cat": "BAT",
    "id": "T04_061"
  },
  {
    "q": "What liquid must be used when topping up a lead-acid battery?",
    "a": "Distilled water only",
    "opts": ["Tap water", "Distilled water only", "Dilute sulphuric acid", "Deionised acid solution"],
    "exp": "ONLY distilled (or demineralised) water. Tap water contains minerals (calcium, magnesium, chlorides) that contaminate electrolyte, react with sulphuric acid, and form deposits on plates - reducing capacity and life. Add acid only if electrolyte has been physically spilled (not for routine topping up).",
    "cat": "BAT",
    "id": "T04_062"
  },
  {
    "q": "A lead-acid cell reads SG 1.150 while all others read SG 1.290. What does this indicate?",
    "a": "That cell is defective - possibly sulphated, internally shorted, or contaminated - investigate and likely replace",
    "opts": ["Normal variation - cells always differ by this amount", "That cell is defective - possibly sulphated, internally shorted, or contaminated - investigate and likely replace", "The cell needs topping up with sulphuric acid", "The cell is overcharged and must be discharged first"],
    "exp": "Cells should agree within 0.050 SG. A cell at 1.150 while others are at 1.290 is far outside tolerance (difference of 0.140). Possible causes: deep sulphation (irrecoverable), internal short circuit (discharges itself), electrolyte contamination. Load test the battery. Replace the cell or battery if capacity is below 80%.",
    "cat": "BAT",
    "id": "T04_063"
  },
  {
    "q": "What is the nominal cell voltage of a Nickel-Cadmium (Ni-Cd) battery?",
    "a": "1.2V per cell",
    "opts": ["2.0V per cell", "1.5V per cell", "1.2V per cell", "3.7V per cell"],
    "exp": "Ni-Cd cells: 1.2V nominal. Lead-acid cells: 2.0V nominal. To build a 24V battery: lead-acid needs 12 cells; Ni-Cd needs 20 cells. Ni-Cd advantages: 10-20 year life (vs 3-7 for lead-acid), excellent cold performance, tolerates overcharge better. Preferred for critical systems - GMDSS, emergency lighting.",
    "cat": "BAT",
    "id": "T04_064"
  },
  {
    "q": "Per SOLAS Chapter IV, Regulation 13, how long must GMDSS reserve battery supply all equipment if NO UPS is fitted?",
    "a": "6 hours",
    "opts": ["1 hour", "3 hours", "6 hours", "12 hours"],
    "exp": "SOLAS Ch IV Reg 13: Without UPS - 6 hours. With UPS (automatic switch to battery) - 1 hour minimum. Battery must be DEDICATED - no other use. Annual load test required. Replace when capacity falls below 80% rated. Frequently missed by candidates - Deswal and Sanjib specifically test this knowledge.",
    "cat": "GMD",
    "id": "T04_065"
  },
  {
    "q": "The GMDSS reserve battery must supply which equipment?",
    "a": "VHF DSC radio, MF/HF (if fitted), NAVTEX, EPIRB/SART charger circuits, Inmarsat terminal",
    "opts": ["All bridge navigation systems including ECDIS and radar", "VHF DSC radio, MF/HF (if fitted), NAVTEX, EPIRB/SART charger circuits, Inmarsat terminal", "Emergency generator starting system and all GMDSS", "All safety systems including fire detection and bilge"],
    "exp": "GMDSS reserve battery supplies communication equipment only: VHF (all channels + DSC Ch 70), MF/HF radio if fitted, NAVTEX receiver, EPIRB/SART charger, Inmarsat terminal. NOT for ECDIS, radar, fire alarm, or propulsion. Dedicated battery - never share capacity with other systems.",
    "cat": "GMD",
    "id": "T04_066"
  },
  {
    "q": "When must the GMDSS battery be replaced?",
    "a": "When load test shows actual capacity below 80% of rated Ah",
    "opts": ["Every 2 years regardless of condition", "When load test shows actual capacity below 80% of rated Ah", "When individual cell SG drops below 1.200", "When it fails to start the emergency generator"],
    "exp": "Annual load test: discharge battery at correct rate, measure actual Ah delivered. When measured capacity < 80% rated, replace the battery. A certificate of test must be maintained onboard. 80% is the industry-standard replacement threshold for all safety-critical batteries, both lead-acid and Ni-Cd.",
    "cat": "GMD",
    "id": "T04_067"
  },
  {
    "q": "How does an Online (Double Conversion) UPS achieve zero switchover time during mains failure?",
    "a": "Load is always fed through the inverter - never from mains directly - so mains failure doesn't affect the load path",
    "opts": ["A fast electronic switch transfers load in less than 4 milliseconds", "Load is always fed through the inverter - never from mains directly - so mains failure doesn't affect the load path", "Batteries provide pulse power during the brief transfer gap", "The static bypass maintains supply during the transfer"],
    "exp": "Online UPS: AC mains \u2192 Rectifier \u2192 DC bus (batteries connected in parallel) \u2192 Inverter \u2192 AC load. The load is ALWAYS fed from the inverter. On mains failure, batteries immediately maintain the DC bus - the inverter sees no change - the load sees no interruption. Zero switchover time is achieved by never switching.",
    "cat": "UPS",
    "id": "T04_068"
  },
  {
    "q": "Which ship systems are typically connected to UPS?",
    "a": "ECDIS, GMDSS, IAS/SCADA, fire alarm control panel, AIS, BNWAS",
    "opts": ["Main engine fuel pumps and bow thruster", "ECDIS, GMDSS, IAS/SCADA, fire alarm control panel, AIS, BNWAS", "Emergency generator starting batteries", "Main switchboard and all 440V distribution"],
    "exp": "UPS supplies systems requiring zero interruption: ECDIS (chart display - power loss = position data loss), GMDSS, Integrated Automation System (loses alarm memory on power loss), fire alarm panel, bridge navigation (AIS, BNWAS, SSAS). These cannot tolerate even the 45-second gap before emergency generator startup.",
    "cat": "UPS",
    "id": "T04_069"
  },
  {
    "q": "What does the STATIC BYPASS on a UPS do?",
    "a": "Automatically transfers load to direct mains supply using thyristors if UPS faults or overloads - no interruption to load",
    "opts": ["Manual switch allowing UPS isolation for maintenance", "Automatically transfers load to direct mains supply using thyristors if UPS faults or overloads - no interruption to load", "Bypass that disconnects batteries to allow faster charging", "Connects batteries directly to load during deep discharge"],
    "exp": "Static bypass uses fast-switching thyristors to transfer load from UPS output to direct mains in microseconds on UPS fault, overload, or overtemperature - critical load sees no interruption. Separate from the maintenance bypass (manual switch for full UPS isolation during servicing while load continues from mains).",
    "cat": "UPS",
    "id": "T04_070"
  },
  {
    "q": "Why must an isolation transformer be used when connecting shore power to a ship?",
    "a": "Shore supply is solidly earthed (TN-S); direct connection would earth the ship's floating system causing stray currents and hull corrosion",
    "opts": ["To step up the shore voltage to match ship's 440V system", "Shore supply is solidly earthed (TN-S); direct connection would earth the ship's floating system causing stray currents and hull corrosion", "To prevent the shore circuit breaker tripping on starting currents", "To match shore supply frequency to ship's frequency"],
    "exp": "Shore TN-S system: neutral solidly connected to ground. Ship IT system: unearthed (floating neutral). Without isolation transformer, shore earth connects to ship neutral - current flows through seawater between hull and jetty creating an electrolytic cell - hull fittings, propeller, and shaft corrode. The isolation transformer breaks this galvanic path.",
    "cat": "SHC",
    "id": "T04_071"
  },
  {
    "q": "What is the IEC standard covering High Voltage Shore Connections?",
    "a": "IEC 80005-1",
    "opts": ["IEC 60092-301", "IEC 80005-1", "SOLAS II-1/Reg 4", "ISO 3046-1"],
    "exp": "IEC 80005-1 is the international standard for High Voltage Shore Connection (HVSC) systems - covering connections up to 11kV. SOLAS II-1 Reg 4(1) requires ships to be capable of connecting to shore power if available. Cold ironing is mandated in some ports (California, major European ports) for environmental regulations.",
    "cat": "SHC",
    "id": "T04_072"
  },
  {
    "q": "A ship at 50Hz connects to a 60Hz shore supply without frequency conversion. What happens?",
    "a": "All induction motors and synchronous machines run 20% faster than rated - risk of overspeeding and mechanical damage",
    "opts": ["Everything works normally - frequency difference is acceptable", "All induction motors and synchronous machines run 20% faster than rated - risk of overspeeding and mechanical damage", "Only transformers are affected - motors are not sensitive to frequency", "The shore ACB trips immediately on frequency mismatch"],
    "exp": "Synchronous speed Ns = 120f/P. At 60Hz, all machines designed for 50Hz run at 120% rated speed (3600 instead of 3000 RPM for 2-pole). Fans, pumps, compressors are overspeeded - bearing damage, imbalance forces, motor overheating. A frequency converter (rectifier \u2192 DC link \u2192 50Hz inverter) is essential.",
    "cat": "SHC",
    "id": "T04_073"
  },
  {
    "q": "What is the function of the Preferential Trip (Load Shedding) relay?",
    "a": "Automatically disconnects non-essential loads in stages when the generator has a sustained overload - preventing ACB trip and blackout",
    "opts": ["Automatically starts the emergency generator when main power fails", "Automatically disconnects non-essential loads in stages when the generator has a sustained overload - preventing ACB trip and blackout", "Trips the generator ACB when reverse power is detected", "Sheds essential loads to protect navigation equipment during overload"],
    "exp": "Preferential trip sheds non-essential loads (galley, HVAC, deck equipment) progressively when sustained overload is detected. By reducing load, the generator returns within its capacity - the OCR does not trip, blackout is prevented. A dashpot timer prevents nuisance shedding from brief motor-starting transients.",
    "cat": "PRT",
    "id": "T04_074"
  },
  {
    "q": "What is the dashpot on a preferential trip relay?",
    "a": "A hydraulic/pneumatic time-delay device using a piston in oil/air - provides delay before shedding to allow transients to pass",
    "opts": ["An oil-filled capacitor for energy storage", "A hydraulic/pneumatic time-delay device using a piston in oil/air - provides delay before shedding to allow transients to pass", "A buffer that softens the mechanical trip action", "A pressure vessel storing energy for the trip coil"],
    "exp": "Dashpot: a cylinder with a piston moving against oil or air through a needle valve orifice. The rate of piston movement (and thus time delay) is adjustable via the needle valve. On overload, dashpot starts timing but doesn't shed immediately - allows motor starting transients (5-30 seconds) to pass without shedding loads.",
    "cat": "PRT",
    "id": "T04_075"
  },
  {
    "q": "Which loads are NEVER shed by the preferential trip relay?",
    "a": "Navigation lights, steering gear, GMDSS, fire pump, bilge pump, emergency lighting",
    "opts": ["Galley, HVAC, and accommodation loads", "Navigation lights, steering gear, GMDSS, fire pump, bilge pump, emergency lighting", "Fresh water generator and laundry equipment", "All loads are shed if the overload is severe enough"],
    "exp": "Essential safety loads are hardwired to be unshedable: navigation lights (SOLAS), steering gear, GMDSS communications, fire detection, fire pump, emergency bilge pump. Preferential trip targets non-essential loads: galley cooking, HVAC, accommodation electrical, deck machinery. Ship SMS defines the exact shedding sequence and priorities.",
    "cat": "PRT",
    "id": "T04_076"
  },
  {
    "q": "How many standard safeties does a Main Switchboard typically have?",
    "a": "14 safeties including dead front, insulating mats, earth bus, phase barriers, fire extinguisher, and locking facilities",
    "opts": ["6 minimum", "10 minimum", "14 safeties including dead front, insulating mats, earth bus, phase barriers, fire extinguisher, and locking facilities", "20 per IEC 60092"],
    "exp": "14 standard MSB safeties: dead front construction, insulating mats (front & rear), insulating handrails, 600mm clearance, earth bus, bus tie breaker, earth fault indicator/IMS, phase barriers, MSB lighting + emergency lighting, CO2 extinguisher, labels & colour coding, locking facilities, forward & aft access doors, ventilation. Anil Deswal tests this - most candidates name only 5-6.",
    "cat": "MSB",
    "id": "T04_077"
  },
  {
    "q": "What minimum working clearance is required at front and rear of a Main Switchboard?",
    "a": "600 mm",
    "opts": ["300 mm", "450 mm", "600 mm", "1000 mm"],
    "exp": "Minimum 600mm working clearance at both front AND rear of MSB. This is required per IEC 60092 and maritime safety standards for safe maintenance access, emergency operation, and personnel safety. Insufficient clearance is a PSC deficiency and prevents safe relay testing and ACB racking.",
    "cat": "MSB",
    "id": "T04_078"
  },
  {
    "q": "What type of fire extinguisher is mandatory at a Main Switchboard?",
    "a": "CO2 - does not conduct electricity and leaves no damaging residue",
    "opts": ["Water mist extinguisher", "CO2 - does not conduct electricity and leaves no damaging residue", "Dry powder extinguisher", "Foam extinguisher"],
    "exp": "CO2 is mandatory at MSBs: non-conductive (safe on live equipment), leaves no residue (dry powder leaves corrosive powder that damages switchgear contacts), smothers fire without water damage. Dry powder is effective but the residue damages sensitive relay contacts and busbars - never use on switchgear.",
    "cat": "MSB",
    "id": "T04_079"
  },
  {
    "q": "What is the purpose of phase barriers in an MSB busbar chamber?",
    "a": "Insulating barriers between busbar phases to contain single-phase faults and prevent phase-to-phase arcing",
    "opts": ["To mechanically support busbars under short-circuit electromagnetic forces", "Insulating barriers between busbar phases to contain single-phase faults and prevent phase-to-phase arcing", "To measure inter-phase voltage for metering", "To prevent condensation bridging between busbars"],
    "exp": "Phase barriers prevent a fault on one phase from arcing to adjacent phases and escalating to a three-phase fault. A single-phase fault is much less severe (lower energy, simpler protection response) than a three-phase fault. Barriers also protect personnel working near busbars from accidental contact with adjacent live phases.",
    "cat": "MSB",
    "id": "T04_080"
  },
  {
    "q": "What does a DUCTOR TEST measure on an ACB?",
    "a": "Main contact resistance in the closed position - acceptable values typically below 100 micro-ohms",
    "opts": ["Insulation resistance between phases at 500V DC", "Main contact resistance in the closed position - acceptable values typically below 100 micro-ohms", "Speed of contact separation on trip command", "Arc chute condition after fault interruption"],
    "exp": "Ductor (micro-ohmmeter) passes known current through closed ACB contacts and measures voltage drop - calculates resistance. New good contacts: <50 \u03bc\u03a9. Action threshold: >100 \u03bc\u03a9 indicates worn, pitted, or oxidised contacts causing heating under load. High contact resistance can cause overheating of busbars and connections at full load current.",
    "cat": "MNT",
    "id": "T04_081"
  },
  {
    "q": "What is the correct isolation procedure before working inside an ACB cubicle?",
    "a": "Trip ACB \u2192 rack to ISOLATED \u2192 apply lock \u2192 apply safety tag \u2192 prove dead \u2192 apply earth clamps",
    "opts": ["Trip ACB and proceed immediately if in a hurry", "Trip ACB \u2192 rack to ISOLATED \u2192 apply lock \u2192 apply safety tag \u2192 prove dead \u2192 apply earth clamps", "Rack to TEST position and disconnect control fuses", "Turn off supply to the MSB and proceed"],
    "exp": "Full Lockout/Tagout (LOTO): 1) Trip ACB (open). 2) Rack fully to ISOLATED. 3) Apply mechanical lock to prevent re-racking. 4) Hang signed safety tag. 5) Test for dead using approved voltage tester on all phases and to earth. 6) Apply earth clamps (discharge cable capacitance). Only then begin work.",
    "cat": "MNT",
    "id": "T04_082"
  },
  {
    "q": "What is the PI (Polarisation Index) and what value indicates good insulation?",
    "a": "PI = IR(10 min) / IR(1 min). PI > 2 indicates dry, good insulation",
    "opts": ["PI = Peak current / Instantaneous current. PI > 5 is good", "PI = IR(10 min) / IR(1 min). PI > 2 indicates dry, good insulation", "PI = Phase Imbalance ratio. PI < 1% is acceptable", "PI = Power Integrity index measured by power quality analyser"],
    "exp": "PI = 10-minute megger reading divided by 1-minute reading. Good dry insulation continues to absorb charging current over 10 minutes (polarisation) \u2192 ratio > 2. Wet or contaminated insulation discharges quickly \u2192 ratio near 1 or less. PI > 2: good. PI 1-2: marginal, investigate moisture. PI < 1: dangerous, do not energise.",
    "cat": "MNT",
    "id": "T04_083"
  },
  {
    "q": "What does an HRC (High Rupturing Capacity) fuse contain that enables it to interrupt large fault currents safely?",
    "a": "Pure silica sand filler that absorbs arc energy and quenches the arc without explosive failure",
    "opts": ["A liquid quenching medium like SF6 gas", "Pure silica sand filler that absorbs arc energy and quenches the arc without explosive failure", "A bimetallic strip providing time-delay protection", "A vacuum chamber similar to a VCB"],
    "exp": "HRC fuses contain pure silica sand packed around the fuse element. On a fault, the element vaporises and the arc forms in the sand. The sand absorbs arc energy, quenches it, and the ceramic body contains everything - no explosion or fire. HRC fuses can safely interrupt up to 80kA fault current. The body remains intact after operation.",
    "cat": "MNT",
    "id": "T04_084"
  },
  {
    "q": "What is the key difference between an Overload Relay and an Overcurrent Relay (OCR)?",
    "a": "Overload relay: thermal protection for motors. OCR: IDMT time-current protection for generators and feeders using CTs",
    "opts": ["They are identical devices with different names in different countries", "Overload relay: thermal protection for motors. OCR: IDMT time-current protection for generators and feeders using CTs", "OCR is faster for the same current multiple than overload relay", "OCR protects motors, overload relay protects generators"],
    "exp": "Overload relay: thermal or electronic element inside the motor starter, trips at 105-125% FLA over minutes, protects motor windings from overheating. OCR: IDMT characteristic relay with CT input, trips at current multiples above set value per inverse-time curve, protects generators, feeders, and transformers from overcurrents and faults.",
    "cat": "MNT",
    "id": "T04_085"
  },
  {
    "q": "Why does a differential relay operate instantaneously with no time delay?",
    "a": "Internal faults (winding short circuits) are immediately destructive - any delay causes more damage - must be instantaneous",
    "opts": ["Differential relays have no timing circuit - they are physically unable to delay", "Internal faults (winding short circuits) are immediately destructive - any delay causes more damage - must be instantaneous", "The differential current is too small to measure with a timing circuit", "A 0.5 second delay is used in practice"],
    "exp": "A differential relay compares current entering and leaving the protected zone. Any difference = internal fault (turn-to-turn short, earth fault inside winding). Internal faults are immediately and progressively destructive - every millisecond of delay causes more winding damage, more fault current, more heat. Differential protection is always instantaneous (< 0.1 seconds).",
    "cat": "MNT",
    "id": "T04_086"
  },
  {
    "q": "What is the primary advantage of a Group Starter Panel (GSP/MCC) over distributed individual starters?",
    "a": "Centralized control, easier maintenance, and compact power distribution via common busbars",
    "opts": ["It allows motors to run on high-voltage DC", "It requires no ventilation or cooling", "It completely eliminates the need for overload relays", "Centralized control, easier maintenance, and compact power distribution via common busbars"],
    "exp": "A Group Starter Panel (Motor Control Centre) houses all starters in one location, making maintenance highly efficient and supporting remote UMS operation from the ECR.",
    "cat": "GSP",
    "id": "T04_087"
  },
  {
    "q": "According to IEC 60073, what does a GREEN indicator lamp on a Group Starter Panel signify?",
    "a": "The motor is STOPPED (safe state)",
    "opts": ["The motor has a FAULT", "Power is available to the panel", "The motor is RUNNING", "The motor is STOPPED (safe state)"],
    "exp": "Under IEC 60073, Green indicates a safe state, meaning the motor is stopped and it is safe to approach the machinery.",
    "cat": "GSP",
    "id": "T04_088"
  },
  {
    "q": "According to IEC 60073, what does a RED indicator lamp on a Group Starter Panel signify?",
    "a": "The motor is RUNNING (hazardous state)",
    "opts": ["The motor is STOPPED", "The motor is RUNNING (hazardous state)", "The emergency stop is active", "An electrical fault has tripped the breaker"],
    "exp": "Counterintuitively for some, IEC 60073 dictates RED means running/danger, warning personnel not to approach moving parts.",
    "cat": "GSP",
    "id": "T04_089"
  },
  {
    "q": "What colour is the START push button on a marine Group Starter Panel per IEC 60073?",
    "a": "GREEN",
    "opts": ["RED", "BLACK", "YELLOW", "GREEN"],
    "exp": "The start button is Green, initiating the operation, while the stop button is Red.",
    "cat": "GSP",
    "id": "T04_090"
  },
  {
    "q": "What colour is the STOP or EMERGENCY STOP push button on a marine Group Starter Panel?",
    "a": "RED",
    "opts": ["WHITE", "BLUE", "GREEN", "RED"],
    "exp": "Red push buttons are universally used to stop machinery or trigger an emergency stop per IEC 60073.",
    "cat": "GSP",
    "id": "T04_091"
  },
  {
    "q": "What does an AMBER or YELLOW lamp signify on a motor starter panel?",
    "a": "A FAULT or ALARM condition (e.g., thermal overload trip)",
    "opts": ["Power supply is healthy", "Normal running state", "A FAULT or ALARM condition (e.g., thermal overload trip)", "The motor is in remote mode"],
    "exp": "Amber/Yellow indicates an abnormal condition requiring attention, such as an overload trip.",
    "cat": "GSP",
    "id": "T04_092"
  },
  {
    "q": "What does a WHITE indicator lamp signify on a marine Group Starter Panel?",
    "a": "Power supply is available and healthy",
    "opts": ["The motor has tripped", "Power supply is available and healthy", "The motor is running", "The space heater is active"],
    "exp": "A white lamp simply confirms that the control power or main supply is live to the panel.",
    "cat": "GSP",
    "id": "T04_093"
  },
  {
    "q": "What does a BLUE indicator lamp typically signify on a Group Starter Panel?",
    "a": "Mandatory action required, or frequently used to indicate remote/auto mode",
    "opts": ["Mandatory action required, or frequently used to indicate remote/auto mode", "Power is disconnected", "Motor is running", "Motor is stopped"],
    "exp": "Blue indicates a special state or mandatory action, often used on ships to show the panel is switched to remote or automatic control.",
    "cat": "GSP",
    "id": "T04_094"
  },
  {
    "q": "What are the standard internal components of a single motor starter unit within a GSP?",
    "a": "Incoming fuse/MCB, main contactor, overload relay, and control circuit",
    "opts": ["Battery charger and inverter", "Isolating transformer and reverse power relay", "VFD, cycloconverter, and sync relay", "Incoming fuse/MCB, main contactor, overload relay, and control circuit"],
    "exp": "Each 'bucket' or unit in an MCC contains the short circuit protection (fuse/MCB), switching (contactor), and thermal protection (overload) for one motor.",
    "cat": "GSP",
    "id": "T04_095"
  },
  {
    "q": "How does a Group Starter Panel support UMS (Unattended Machinery Space) operations?",
    "a": "By allowing centralized remote start/stop and monitoring from the Engine Control Room",
    "opts": ["By bypassing all safety trips", "By eliminating the need for electricity", "By physically moving the motors into the ECR", "By allowing centralized remote start/stop and monitoring from the Engine Control Room"],
    "exp": "Centralized panels easily interface with the IAS/SCADA system, allowing the duty engineer to control all pumps from the ECR without walking the ship.",
    "cat": "GSP",
    "id": "T04_096"
  },
  {
    "q": "Why is the RED/GREEN lamp convention on IEC panels considered counterintuitive by some new engineers?",
    "a": "Because RED means running (danger) and GREEN means stopped (safe), whereas people often associate green with 'go'",
    "opts": ["Because RED means running (danger) and GREEN means stopped (safe), whereas people often associate green with 'go'", "Because the colors are inverted at night", "Because both lamps are on simultaneously", "Because they flash randomly"],
    "exp": "IEC 60073 prioritizes hazard warning. A running machine is a hazard (Red), while a stationary machine is safe (Green).",
    "cat": "GSP",
    "id": "T04_097"
  },
  {
    "q": "What protects the common busbars inside a Group Starter Panel from a massive short circuit?",
    "a": "The feeder circuit breaker located upstream on the Main Switchboard",
    "opts": ["The individual motor thermal overloads", "A reverse power relay", "The feeder circuit breaker located upstream on the Main Switchboard", "An under-voltage coil"],
    "exp": "The GSP itself is fed from the MSB. If the massive common busbars inside the GSP short out, the MSB feeder breaker clears the fault.",
    "cat": "GSP",
    "id": "T04_098"
  },
  {
    "q": "What provides short-circuit protection for an INDIVIDUAL motor within the Group Starter Panel?",
    "a": "The incoming fuse or Motor Circuit Breaker (MCB) located inside that specific starter unit",
    "opts": ["The incoming fuse or Motor Circuit Breaker (MCB) located inside that specific starter unit", "The main contactor coil", "The MSB generator breaker", "The thermal overload relay"],
    "exp": "Each starter module has its own fuses or MCB to clear a short circuit on that specific motor's cable, isolating it without blacking out the rest of the panel.",
    "cat": "GSP",
    "id": "T04_099"
  },
  {
    "q": "What component in the GSP protects the motor from sustained mechanical overloading?",
    "a": "The thermal or electronic overload relay",
    "opts": ["The main contactor", "The earth fault indicator", "The HRC fuses", "The thermal or electronic overload relay"],
    "exp": "The overload relay senses sustained high current (e.g., 115% FLA) and opens the control circuit to drop the contactor before the windings melt.",
    "cat": "GSP",
    "id": "T04_100"
  },
  {
    "q": "Why is proper segregation (partitioning) required between adjacent units in a Group Starter Panel?",
    "a": "To prevent an arc flash or fire in one starter module from spreading to adjacent modules or the main busbars",
    "opts": ["To improve the aesthetic appearance", "To prevent an arc flash or fire in one starter module from spreading to adjacent modules or the main busbars", "To isolate AC from DC voltages", "To keep the motors separated physically"],
    "exp": "Form 3 or Form 4 separation uses metal barriers to contain catastrophic faults to a single 'bucket', saving the rest of the MCC.",
    "cat": "GSP",
    "id": "T04_101"
  },
  {
    "q": "If a GSP is located in the engine room, what typical IP (Ingress Protection) rating is required?",
    "a": "IP44 or IP54 (protected against splashing water and dust)",
    "opts": ["IP20 (finger-proof only)", "IP44 or IP54 (protected against splashing water and dust)", "IP00 (open to air)", "IP68 (submersible)"],
    "exp": "Engine rooms have oil mist and potential water splashing. The enclosure must prevent ingress that could cause tracking faults.",
    "cat": "GSP",
    "id": "T04_102"
  },
  {
    "q": "What maintenance action is critical for the draw-out contacts of a GSP module?",
    "a": "Regular inspection and lubrication with approved contact grease to ensure low resistance connection to the busbars",
    "opts": ["Painting them with insulating varnish", "Filing the contacts aggressively", "Submerging them in distilled water", "Regular inspection and lubrication with approved contact grease to ensure low resistance connection to the busbars"],
    "exp": "Draw-out modules have 'stabs' that grip the live busbars. Poor contact causes extreme I\u00b2R heating and module meltdown.",
    "cat": "GSP",
    "id": "T04_103"
  },
  {
    "q": "When racking out a single starter module from a live GSP, what is the primary safety hazard?",
    "a": "Arc flash if the module is withdrawn while the contactor is closed and drawing load current",
    "opts": ["Arc flash if the module is withdrawn while the contactor is closed and drawing load current", "Harmonic distortion", "Loss of navigation systems", "Reverse power generation"],
    "exp": "Modules are mechanically interlocked to prevent withdrawal under load, but bypassing this and drawing an arc on the main bus is explosive.",
    "cat": "GSP",
    "id": "T04_104"
  },
  {
    "q": "What does 'MCC' stand for in marine electrical terminology?",
    "a": "Motor Control Centre",
    "opts": ["Main Circuit Controller", "Marine Contactor Cabinet", "Master Current Coordinator", "Motor Control Centre"],
    "exp": "MCC is the widely used industrial term for a Group Starter Panel.",
    "cat": "GSP",
    "id": "T04_105"
  },
  {
    "q": "If the WHITE lamp on a GSP starter module goes dark, what is the most likely cause?",
    "a": "The control circuit fuse has blown, or main power to that unit is isolated",
    "opts": ["The motor has tripped on overload", "The control circuit fuse has blown, or main power to that unit is isolated", "The motor is running normally", "The remote control is active"],
    "exp": "The white lamp indicates control power. If it is off, the start/stop buttons will not function.",
    "cat": "GSP",
    "id": "T04_106"
  },
  {
    "q": "What happens if the thermal overload relay in a GSP module trips?",
    "a": "An NC contact opens the contactor coil circuit, stopping the motor, and the AMBER lamp illuminates",
    "opts": ["The main HRC fuses blow instantly", "The motor reverses direction", "An NC contact opens the contactor coil circuit, stopping the motor, and the AMBER lamp illuminates", "The MSB generator trips"],
    "exp": "The thermal relay does not interrupt the main power directly; it breaks the 24V/220V control circuit to the contactor coil.",
    "cat": "GSP",
    "id": "T04_107"
  },
  {
    "q": "How is a motor typically isolated for field maintenance when powered from a GSP?",
    "a": "Turn off the module's main isolator switch, apply LOTO (padlock), and verify dead at the motor terminals",
    "opts": ["Turn off the module's main isolator switch, apply LOTO (padlock), and verify dead at the motor terminals", "Trip the main generator", "Remove the overload relay", "Press the red STOP button and begin work"],
    "exp": "The STOP button is not an isolator. The rotary switch on the module door physically disconnects the 3-phase supply.",
    "cat": "GSP",
    "id": "T04_108"
  },
  {
    "q": "What is the function of an ammeter fitted on a GSP module door?",
    "a": "To monitor the running current of the motor, indicating mechanical load or potential stalling",
    "opts": ["To measure the control circuit voltage", "To monitor the running current of the motor, indicating mechanical load or potential stalling", "To count the running hours", "To indicate the power factor"],
    "exp": "Large motors have ammeters so operators can verify the pump/fan is loaded correctly and not approaching its trip threshold.",
    "cat": "GSP",
    "id": "T04_109"
  },
  {
    "q": "What allows the GSP module door to be opened only when power is disconnected?",
    "a": "A mechanical door interlock connected to the main rotary isolator switch",
    "opts": ["A mechanical door interlock connected to the main rotary isolator switch", "A padlocked chain", "A software timer", "An electronic solenoid"],
    "exp": "This ensures an operator cannot open the panel and expose live 440V terminals without first turning the switch to OFF.",
    "cat": "GSP",
    "id": "T04_110"
  },
  {
    "q": "If an ETO needs to test a GSP control circuit with the door open, how is the mechanical interlock bypassed?",
    "a": "By using a special tool or screwdriver to depress the interlock defeat pin while turning the switch to ON",
    "opts": ["By using a special tool or screwdriver to depress the interlock defeat pin while turning the switch to ON", "By increasing the generator voltage", "By smashing the lock", "By removing the main fuses"],
    "exp": "Defeating the interlock is for expert fault-finding only, carrying extreme live-working risks.",
    "cat": "GSP",
    "id": "T04_111"
  },
  {
    "q": "Why is space heating provided inside a large Group Starter Panel?",
    "a": "To prevent condensation from forming on the busbars and contactors when the panel is de-energized in humid environments",
    "opts": ["To warm up the operators", "To keep the electronics at 100\u00b0C", "To prevent the plastic from cracking", "To prevent condensation from forming on the busbars and contactors when the panel is de-energized in humid environments"],
    "exp": "Anti-condensation heaters keep the air inside the panel slightly above the dew point.",
    "cat": "GSP",
    "id": "T04_112"
  },
  {
    "q": "What connects the individual GSP modules to the main vertical busbars?",
    "a": "Spring-loaded copper stabs or heavy duty bolted connections",
    "opts": ["Magnetic induction coils", "Thin optical fibers", "Wireless power transfer", "Spring-loaded copper stabs or heavy duty bolted connections"],
    "exp": "These physical copper jaws grip the live busbars tightly to handle the heavy motor currents.",
    "cat": "GSP",
    "id": "T04_113"
  },
  {
    "q": "What happens if the control transformer inside a GSP fails?",
    "a": "All starters relying on that transformer lose control power (WHITE lamps go out) and no motors can be started",
    "opts": ["All starters relying on that transformer lose control power (WHITE lamps go out) and no motors can be started", "The motors automatically start", "The MSB explodes", "The motors run at 50% speed"],
    "exp": "GSPs often use a single 440V/220V transformer to provide control voltage to an entire bank of starters.",
    "cat": "GSP",
    "id": "T04_114"
  },
  {
    "q": "How is remote control from the IAS integrated into a GSP?",
    "a": "Via intermediate coupling relays in the GSP that parallel the local start/stop push buttons",
    "opts": ["By isolating the local panel entirely", "Via intermediate coupling relays in the GSP that parallel the local start/stop push buttons", "By physically pressing the buttons with a robot", "By changing the frequency of the MSB"],
    "exp": "The automation system sends a 24V signal to a tiny relay in the GSP, whose contacts act exactly like the human pushing the green button.",
    "cat": "GSP",
    "id": "T04_115"
  },
  {
    "q": "What does a 'Local/Remote' selector switch on a GSP module do?",
    "a": "It shifts control authority, locking out the IAS commands when in 'Local' to ensure safety for engineers working nearby",
    "opts": ["It varies the speed of the motor", "It shifts control authority, locking out the IAS commands when in 'Local' to ensure safety for engineers working nearby", "It connects the motor to shore power", "It changes the motor direction"],
    "exp": "Placing the switch in Local physically breaks the circuit from the automation system, guaranteeing the computer cannot start the pump unexpectedly.",
    "cat": "GSP",
    "id": "T04_116"
  },
  {
    "q": "According to SOLAS Chapter IV Regulation 13, what must a GMDSS reserve battery supply?",
    "a": "All GMDSS radio equipment (VHF, MF/HF, Inmarsat, NAVTEX) and emergency lighting at the radio station",
    "opts": ["The ship's bow thruster", "All GMDSS radio equipment (VHF, MF/HF, Inmarsat, NAVTEX) and emergency lighting at the radio station", "The emergency generator starting motor", "The entire bridge navigation suite including radar"],
    "exp": "The reserve battery is strictly dedicated to distress communications and cannot be burdened by radars or other non-radio loads.",
    "cat": "GMD",
    "id": "T04_117"
  },
  {
    "q": "How long must the GMDSS battery supply all required loads if the ship DOES NOT have an automatic UPS (emergency generator starting gap)?",
    "a": "6 hours",
    "opts": ["3 hours", "1 hour", "6 hours", "18 hours"],
    "exp": "If the emergency generator doesn't auto-start instantly, the battery must be massive enough to run the radios for 6 solid hours.",
    "cat": "GMD",
    "id": "T04_118"
  },
  {
    "q": "How long must the GMDSS battery supply all required loads if the ship HAS an automatic UPS or rapid auto-starting emergency generator?",
    "a": "1 hour",
    "opts": ["24 hours", "30 minutes", "1 hour", "6 hours"],
    "exp": "Because the emergency generator picks up the load within 45 seconds, the battery only needs to bridge the gap and provide a 1-hour ultimate reserve.",
    "cat": "GMD",
    "id": "T04_119"
  },
  {
    "q": "What restriction applies to the GMDSS reserve battery regarding shared usage?",
    "a": "It must be DEDICATED solely to the GMDSS equipment and cannot be used for any other purpose",
    "opts": ["It can be shared with the emergency generator starter", "It can power the ECDIS computers", "It can supply the ship's general alarm", "It must be DEDICATED solely to the GMDSS equipment and cannot be used for any other purpose"],
    "exp": "SOLAS strictly forbids tapping into the GMDSS battery for non-radio functions, ensuring its full capacity is available for a Mayday.",
    "cat": "GMD",
    "id": "T04_120"
  },
  {
    "q": "What charging requirement exists for the GMDSS battery?",
    "a": "An automatic charger must be fitted, capable of recharging the battery from fully discharged to minimum capacity within 10 hours",
    "opts": ["It must be charged by solar panels", "An automatic charger must be fitted, capable of recharging the battery from fully discharged to minimum capacity within 10 hours", "It is charged by a manual hand-crank", "It must only be trickle charged"],
    "exp": "The charger runs continuously from the main/emergency switchboard to keep the battery at 100% readiness.",
    "cat": "GMD",
    "id": "T04_121"
  },
  {
    "q": "What type of battery is most highly recommended for GMDSS installations due to its long life and reliability?",
    "a": "Nickel-Cadmium (Ni-Cd)",
    "opts": ["Alkaline dry cells", "Lithium-Ion", "Nickel-Cadmium (Ni-Cd)", "Standard Flooded Lead-Acid"],
    "exp": "Ni-Cd batteries last 10-20 years, tolerate overcharging, and perform exceptionally well in cold climates compared to lead-acid.",
    "cat": "GMD",
    "id": "T04_122"
  },
  {
    "q": "How often must a complete capacity (load) test be performed on the GMDSS battery?",
    "a": "Annually",
    "opts": ["Only during Special Survey", "Annually", "Every 5 years", "Monthly"],
    "exp": "An annual controlled discharge test proves the battery actually holds its rated Ampere-hours. This test certificate must be kept onboard.",
    "cat": "GMD",
    "id": "T04_123"
  },
  {
    "q": "At what capacity threshold must the GMDSS battery be permanently replaced?",
    "a": "When the measured capacity falls below 80% of its rated Ah",
    "opts": ["When a single cell fails", "When the measured capacity falls below 80% of its rated Ah", "Below 95%", "Below 50%"],
    "exp": "80% is the industry-standard 'end of life' mark for critical safety batteries.",
    "cat": "GMD",
    "id": "T04_124"
  },
  {
    "q": "Where should the GMDSS battery be physically located?",
    "a": "As high as practically possible, usually near the radio room on the bridge deck",
    "opts": ["As high as practically possible, usually near the radio room on the bridge deck", "In the main engine room", "In the cargo control room", "Below the waterline for cooling"],
    "exp": "Placing it high up ensures the radios can still transmit even if the ship experiences severe flooding.",
    "cat": "GMD",
    "id": "T04_125"
  },
  {
    "q": "What happens to the GMDSS equipment if the ship experiences a total blackout (loss of main and emergency generators)?",
    "a": "It automatically switches to the reserve 24V battery seamlessly via a blocking diode or changeover relay",
    "opts": ["The operator must manually connect jumper cables", "It powers down to save energy", "It automatically switches to the reserve 24V battery seamlessly via a blocking diode or changeover relay", "It loses power for 45 seconds"],
    "exp": "The radio operator will not notice the blackout; the battery instantly holds the DC bus voltage up.",
    "cat": "GMD",
    "id": "T04_126"
  },
  {
    "q": "Which GMDSS component draws the most massive current from the battery during an emergency?",
    "a": "The MF/HF transmitter when keying the microphone (transmitting)",
    "opts": ["The NAVTEX printer", "The GPS receiver", "The MF/HF transmitter when keying the microphone (transmitting)", "The VHF receiver"],
    "exp": "A 150W or 250W MF/HF radio draws 20-30 Amps at 24V while transmitting, sizing the entire battery bank requirement.",
    "cat": "GMD",
    "id": "T04_127"
  },
  {
    "q": "What daily check must be performed on the GMDSS battery system?",
    "a": "Verify the charging voltage and charging current on the panel meters without load",
    "opts": ["Verify the charging voltage and charging current on the panel meters without load", "A full 6-hour discharge test", "Top up with distilled water", "Check the specific gravity of all cells"],
    "exp": "A simple daily visual check confirms the charger hasn't tripped and the battery is floating happily.",
    "cat": "GMD",
    "id": "T04_128"
  },
  {
    "q": "What is the typical float charging voltage for a 24V Lead-Acid GMDSS battery?",
    "a": "27.6V",
    "opts": ["12.6V", "30.5V", "27.6V", "24.0V"],
    "exp": "12 cells x 2.30V/cell = 27.6V. This keeps the battery full without boiling away the electrolyte.",
    "cat": "GMD",
    "id": "T04_129"
  },
  {
    "q": "Why are two separate battery chargers often fitted to the GMDSS battery bank?",
    "a": "For redundancy; if the primary charger fails, the backup ensures the distress batteries remain charged",
    "opts": ["To charge the batteries twice as fast", "One charges the VHF, one charges the MF/HF", "One is for AC, one is for DC", "For redundancy; if the primary charger fails, the backup ensures the distress batteries remain charged"],
    "exp": "GMDSS is highly redundant. Losing the only charger mid-ocean would slowly kill the radios.",
    "cat": "GMD",
    "id": "T04_130"
  },
  {
    "q": "How is a GMDSS battery capacity test actually conducted?",
    "a": "By disconnecting the charger, applying a dummy resistor load (e.g., C/10 rate), and timing how long it takes to reach cutoff voltage",
    "opts": ["By transmitting on the MF/HF radio for 6 hours", "By shaking the battery to check for loose plates", "By disconnecting the charger, applying a dummy resistor load (e.g., C/10 rate), and timing how long it takes to reach cutoff voltage", "By measuring the voltage with a multimeter for 5 seconds"],
    "exp": "A controlled, constant-current discharge is the only mathematical way to prove total Ampere-hour health.",
    "cat": "GMD",
    "id": "T04_131"
  },
  {
    "q": "What is the cutoff voltage (empty point) for a 24V Lead-Acid GMDSS battery during a load test?",
    "a": "Approximately 21.0V (1.75V per cell)",
    "opts": ["0V", "24.0V", "18.0V", "Approximately 21.0V (1.75V per cell)"],
    "exp": "Discharging below 1.75V/cell causes permanent plate damage (deep cycling).",
    "cat": "GMD",
    "id": "T04_132"
  },
  {
    "q": "What is the consequence of sharing the GMDSS battery with the bridge window wipers?",
    "a": "It is a severe SOLAS violation and PSC detainable deficiency; non-radio loads drain emergency capacity",
    "opts": ["It charges the battery faster", "It improves radio reception", "It is a severe SOLAS violation and PSC detainable deficiency; non-radio loads drain emergency capacity", "It is perfectly acceptable to save space"],
    "exp": "PSC inspectors specifically look for unauthorized wires connected to the GMDSS battery terminals.",
    "cat": "GMD",
    "id": "T04_133"
  },
  {
    "q": "If the GMDSS battery is a sealed VRLA (Valve Regulated Lead Acid) type, what maintenance is eliminated?",
    "a": "Checking electrolyte levels and topping up with distilled water",
    "opts": ["Terminal cleaning", "Load testing", "Checking electrolyte levels and topping up with distilled water", "Charging"],
    "exp": "VRLA batteries recombine gases internally, making them 'maintenance-free' regarding fluids.",
    "cat": "GMD",
    "id": "T04_134"
  },
  {
    "q": "What alarm must trigger on the bridge regarding the GMDSS power supply?",
    "a": "A 'Charger Failure' or 'Loss of Main Power' alarm indicating the radios are now draining the battery",
    "opts": ["A high-frequency radio alarm", "An antenna short circuit alarm", "A 'Charger Failure' or 'Loss of Main Power' alarm indicating the radios are now draining the battery", "A low temperature alarm"],
    "exp": "The crew must be alerted instantly if the battery stops charging, as the 1-hour or 6-hour clock has started.",
    "cat": "GMD",
    "id": "T04_135"
  },
  {
    "q": "Is the GMDSS battery required to power the EPIRB?",
    "a": "No, the EPIRB has its own internal lithium battery",
    "opts": ["No, the EPIRB has its own internal lithium battery", "Yes, via a long cable", "Yes, it is the primary power source", "Only during testing"],
    "exp": "Float-free EPIRBs are completely autonomous. The GMDSS battery only powers the fixed radios.",
    "cat": "GMD",
    "id": "T04_136"
  },
  {
    "q": "What powers the SART (Search and Rescue Transponder)?",
    "a": "Its own internal non-rechargeable lithium battery",
    "opts": ["A hand-crank dynamo", "Its own internal non-rechargeable lithium battery", "The lifeboat engine", "The GMDSS 24V battery bank"],
    "exp": "Like the EPIRB, SARTs are survival craft equipment and carry their own 5-year internal batteries.",
    "cat": "GMD",
    "id": "T04_137"
  },
  {
    "q": "Why is terminal maintenance critical for the GMDSS battery?",
    "a": "Corrosion introduces high resistance, which causes massive voltage drop when the MF/HF radio draws 30 Amps, causing the radio to reboot",
    "opts": ["Corrosion makes the battery too heavy", "Corrosion drains the water out", "Corrosion causes the battery to explode", "Corrosion introduces high resistance, which causes massive voltage drop when the MF/HF radio draws 30 Amps, causing the radio to reboot"],
    "exp": "A corroded terminal might look fine at 1 Amp, but fails completely under the heavy transmitting load.",
    "cat": "GMD",
    "id": "T04_138"
  },
  {
    "q": "What indicates a dead cell in a 24V GMDSS Ni-Cd battery bank?",
    "a": "The overall open-circuit voltage will drop by exactly 1.2V (e.g., from 25.6V down to 24.4V)",
    "opts": ["The specific gravity will drop to zero", "The overall open-circuit voltage will drop by exactly 1.2V (e.g., from 25.6V down to 24.4V)", "The battery case will bulge massively", "The charger will turn off"],
    "exp": "A shorted cell simply removes its voltage contribution from the series string.",
    "cat": "GMD",
    "id": "T04_139"
  },
  {
    "q": "What is the required capacity of the GMDSS battery measured in?",
    "a": "Ampere-hours (Ah)",
    "opts": ["Volts (V)", "Ampere-hours (Ah)", "Kilowatts (kW)", "Farads (F)"],
    "exp": "Battery storage capacity is always rated in Ah, indicating how many amps it can provide over hours.",
    "cat": "GMD",
    "id": "T04_140"
  },
  {
    "q": "What is the primary function of a Preferential Trip (Load Shedding) relay?",
    "a": "To automatically disconnect non-essential loads in stages during a generator overload, preventing a total blackout",
    "opts": ["To prioritize cooling water pumps", "To start the emergency generator", "To automatically disconnect non-essential loads in stages during a generator overload, preventing a total blackout", "To trip the generator off the busbars"],
    "exp": "Shedding hotel loads like the galley keeps the generator from hitting its 110% overcurrent trip, saving the propulsion systems.",
    "cat": "PRT",
    "id": "T04_141"
  },
  {
    "q": "At what load percentage does Stage 1 of the preferential trip typically activate?",
    "a": "Around 90% of the generator's rated capacity",
    "opts": ["Around 90% of the generator's rated capacity", "105%", "150%", "50%"],
    "exp": "Activating at 90% gives the system a buffer to shed load before reaching the critical 100-110% overload trip zone.",
    "cat": "PRT",
    "id": "T04_142"
  },
  {
    "q": "Why does the preferential trip relay incorporate a time delay (e.g., 5-10 seconds)?",
    "a": "To prevent nuisance shedding caused by the brief, massive starting currents of large electric motors",
    "opts": ["To prevent nuisance shedding during the brief, massive starting currents of large electric motors", "Because the relays are physically slow", "To allow the emergency generator to start", "To give the crew time to cook"],
    "exp": "Starting a thruster spikes current to 150% for 3 seconds. The delay ensures the overload is sustained before dumping the galley.",
    "cat": "PRT",
    "id": "T04_143"
  },
  {
    "q": "What physical device was traditionally used to create the time delay in older preferential trip relays?",
    "a": "A dashpot (a pneumatic or hydraulic cylinder with a restricted orifice)",
    "opts": ["A pendulum", "A quartz crystal", "A massive capacitor", "A dashpot (a pneumatic or hydraulic cylinder with a restricted orifice)"],
    "exp": "The magnetic coil pulls a piston through oil. Opening the needle valve changes the timing. Modern systems use electronic timers.",
    "cat": "PRT",
    "id": "T04_144"
  },
  {
    "q": "What types of loads are strictly FORBIDDEN from being shed by the preferential trip system?",
    "a": "Essential safety loads (Steering gear, Nav lights, GMDSS, Fire pump)",
    "opts": ["Bow thruster and purifiers", "Cargo pumps and winches", "Essential safety loads (Steering gear, Nav lights, GMDSS, Fire pump)", "Air conditioning and laundry"],
    "exp": "SOLAS mandates that critical survival and navigational equipment cannot be auto-tripped unless a total blackout occurs.",
    "cat": "PRT",
    "id": "T04_145"
  },
  {
    "q": "What types of loads are typically shed during Stage 1 (Priority 2)?",
    "a": "Galley ovens, water heaters, laundry equipment, and non-essential HVAC",
    "opts": ["Galley ovens, water heaters, laundry equipment, and non-essential HVAC", "Radar and ECDIS", "Main engine lube oil pumps", "Emergency fire pump"],
    "exp": "These are heavy 'hotel' loads whose temporary loss has absolutely zero impact on the safety or propulsion of the vessel.",
    "cat": "PRT",
    "id": "T04_146"
  },
  {
    "q": "If the generator load remains above 95% after Stage 1 has shed, what happens next?",
    "a": "Stage 2 activates after a further time delay, shedding more significant loads like deck machinery and remaining HVAC",
    "opts": ["Stage 2 activates after a further time delay, shedding more significant loads like deck machinery and remaining HVAC", "The voltage is reduced by 50%", "The generator trips instantly", "The fuel valves shut off"],
    "exp": "Cascading stages slice off progressively more important equipment in a desperate bid to save the generator.",
    "cat": "PRT",
    "id": "T04_147"
  },
  {
    "q": "If the generator load still exceeds 110% after all preferential trip stages have operated, what is the final result?",
    "a": "The Overcurrent Relay (OCR) trips the generator ACB, causing a total blackout",
    "opts": ["The emergency generator connects in parallel", "The ship explodes", "The generator runs until it catches fire", "The Overcurrent Relay (OCR) trips the generator ACB, causing a total blackout"],
    "exp": "Preferential trip is the last defense. If the load is a dead short circuit, the OCR ignores shedding and trips to prevent an explosion.",
    "cat": "PRT",
    "id": "T04_148"
  },
  {
    "q": "How does the preferential trip relay measure the generator load?",
    "a": "It is connected to a Current Transformer (CT) on the generator output busbars",
    "opts": ["By measuring the frequency drop", "By measuring the RPM of the engine", "It is connected to a Current Transformer (CT) on the generator output busbars", "By monitoring the fuel consumption"],
    "exp": "The CT feeds a proportional smaller current (e.g., 5A) into the relay, which activates when the current crosses the 90% threshold.",
    "cat": "PRT",
    "id": "T04_149"
  },
  {
    "q": "Why is the preferential trip superior to just letting the generator trip and auto-starting the standby generator?",
    "a": "A generator trip causes a complete blackout, stopping propulsion and steering, whereas shedding the galley keeps the ship fully manoeuvrable",
    "opts": ["A generator trip causes a complete blackout, stopping propulsion and steering, whereas shedding the galley keeps the ship fully manoeuvrable", "It uses less fuel", "It protects the transformers from high voltage", "It charges the batteries faster"],
    "exp": "Blackouts in narrow channels cause groundings. Keeping the propeller turning is paramount.",
    "cat": "PRT",
    "id": "T04_150"
  },
  {
    "q": "How is a preferential trip test conducted during an annual survey?",
    "a": "With generators running, the surveyor injects a simulated overload signal (or lowers the trip setpoint) to verify the correct sequence and timing of load shedding",
    "opts": ["By tripping the main breaker", "By turning on every piece of equipment on the ship", "By manually pressing the trip buttons on the MSB", "With generators running, the surveyor injects a simulated overload signal (or lowers the trip setpoint) to verify the correct sequence and timing of load shedding"],
    "exp": "Using secondary injection or tricking the PLC proves the timers and relays work without having to dangerously overload the real engine.",
    "cat": "PRT",
    "id": "T04_151"
  },
  {
    "q": "What happens if a crew member tries to restart a shed load (e.g., the galley oven) while the preferential trip is still active?",
    "a": "The circuit breaker for that load will be electrically locked out and will not close until the overload condition clears and the system is reset",
    "opts": ["The generator will trip instantly", "The circuit breaker for that load will be electrically locked out and will not close until the overload condition clears and the system is reset", "The oven will run at half power", "The fire alarm will sound"],
    "exp": "The trip relay maintains an open contact in the shed load's control circuit, physically preventing the cook from re-adding the load.",
    "cat": "PRT",
    "id": "T04_152"
  },
  {
    "q": "Does the preferential trip operate on under-frequency as well as over-current?",
    "a": "Yes, many modern systems integrate load shedding on severe frequency drops (e.g., below 47Hz) to save a stalling engine",
    "opts": ["Yes, many modern systems integrate load shedding on severe frequency drops (e.g., below 47Hz) to save a stalling engine", "Only on passenger ships", "No, frequency has no effect on load", "No, only over-voltage"],
    "exp": "If the prime mover is dying, frequency drops. Shedding load immediately relieves the engine, allowing RPM to recover.",
    "cat": "PRT",
    "id": "T04_153"
  },
  {
    "q": "What is the primary function of the Bus Tie Breaker (BTB) on a large ship's Main Switchboard?",
    "a": "To connect or isolate two separate sections of the MSB, allowing flexible power routing or maximum fault isolation",
    "opts": ["To start the emergency generator", "To connect the ship to shore power", "To connect or isolate two separate sections of the MSB, allowing flexible power routing or maximum fault isolation", "To isolate the high voltage from low voltage"],
    "exp": "The BTB splits the massive busbar down the middle. One side can run Port loads, the other Starboard loads.",
    "cat": "BTB",
    "id": "T04_154"
  },
  {
    "q": "Under normal sailing conditions for highly redundant vessels (e.g., DP vessels, large cruise ships), what is the typical status of the Bus Tie Breaker?",
    "a": "OPEN (Split-bus operation)",
    "opts": ["It constantly toggles", "CLOSED", "Racked out", "OPEN (Split-bus operation)"],
    "exp": "Running with the BTB open means a massive short-circuit on the Port bus cannot drag down the Starboard bus, preventing a total blackout.",
    "cat": "BTB",
    "id": "T04_155"
  },
  {
    "q": "If running in 'Split-Bus' mode (BTB Open), how many generators must be running?",
    "a": "At least two (one connected to each section)",
    "opts": ["At least two (one connected to each section)", "Four generators", "None, the batteries take over", "One large generator"],
    "exp": "Since the buses aren't sharing power, Generator 1 feeds the left side, Generator 2 feeds the right side.",
    "cat": "BTB",
    "id": "T04_156"
  },
  {
    "q": "When is the Bus Tie Breaker CLOSED during normal operations?",
    "a": "When transferring loads between generators on opposite sections, or when a single generator is sufficient to power the entire ship",
    "opts": ["Whenever the ship is in port", "During a blackout", "When transferring loads between generators on opposite sections, or when a single generator is sufficient to power the entire ship", "When the emergency generator is running"],
    "exp": "If load is low, closing the BTB lets one engine power the whole ship, saving fuel and running hours.",
    "cat": "BTB",
    "id": "T04_157"
  },
  {
    "q": "What critical safety interlock is applied to the Bus Tie Breaker?",
    "a": "An interlock preventing it from closing if generators on both sections are running but unsynchronized",
    "opts": ["An interlock preventing it from opening under load", "An interlock preventing it from closing if generators on both sections are running but unsynchronized", "An interlock tying it to the steering gear", "An interlock requiring a key from the captain"],
    "exp": "Slamming the BTB closed while Gen 1 and Gen 2 are out of phase would cause an explosive short-circuit and snap the engine crankshafts.",
    "cat": "BTB",
    "id": "T04_158"
  },
  {
    "q": "What happens if a dead short-circuit occurs on MSB Section A while the Bus Tie Breaker is CLOSED?",
    "a": "The BTB is designed to trip almost instantly, isolating the fault to Section A and saving Section B from blacking out",
    "opts": ["The fault crosses over and trips both generators", "The entire ship blacks out", "The busbars melt together", "The BTB is designed to trip almost instantly, isolating the fault to Section A and saving Section B from blacking out"],
    "exp": "The BTB has its own overcurrent protection to slice the board in half before the healthy generator gets dragged down.",
    "cat": "BTB",
    "id": "T04_159"
  },
  {
    "q": "How does the breaking capacity of the BTB compare to the generator ACBs?",
    "a": "It must have a massive breaking capacity, equal to or greater than the combined fault current of the entire system",
    "opts": ["It must have a massive breaking capacity, equal to or greater than the combined fault current of the entire system", "It is identical to a small motor breaker", "It does not interrupt faults", "It is much lower to save cost"],
    "exp": "If all generators are running, the fault current crossing the tie breaker is colossal. The BTB must be able to clear it without exploding.",
    "cat": "BTB",
    "id": "T04_160"
  },
  {
    "q": "During a blackout recovery drill, if Gen 1 is started and placed on Section A, how does Section B get power?",
    "a": "By manually or automatically closing the Bus Tie Breaker after Gen 1 is verified stable",
    "opts": ["By manually or automatically closing the Bus Tie Breaker after Gen 1 is verified stable", "By starting Gen 2 simultaneously", "It remains dark", "From the shore power cable"],
    "exp": "Closing the tie energizes the dead half of the ship from the live half.",
    "cat": "BTB",
    "id": "T04_161"
  },
  {
    "q": "What is the typical ACB position sequence for routine physical maintenance on the Bus Tie Breaker?",
    "a": "Trip open -> Rack to ISOLATED -> Apply LOTO -> Prove dead on BOTH sides of the breaker",
    "opts": ["Leave closed -> Apply LOTO", "Trip open -> Rack to ISOLATED -> Apply LOTO -> Prove dead on BOTH sides of the breaker", "Rack to TEST -> Clean contacts", "Bypass the breaker -> Remove fuses"],
    "exp": "Because the BTB sits between two potential power sources, you must verify absolutely zero voltage exists on both the left and right stabs.",
    "cat": "BTB",
    "id": "T04_162"
  },
  {
    "q": "Can the Bus Tie Breaker be used to connect the ship's 440V MSB to the 220V lighting switchboard?",
    "a": "No, it only connects sections of the same voltage level; transformers connect different voltage boards",
    "opts": ["No, it only connects sections of the same voltage level; transformers connect different voltage boards", "Yes, if the frequency matches", "Yes, during emergencies only", "Yes, it acts as a step-down unit"],
    "exp": "A breaker cannot alter voltage. Tying 440V directly to 220V would cause a catastrophic explosion.",
    "cat": "BTB",
    "id": "T04_163"
  },
  {
    "q": "Why is the BTB interlock sometimes bypassed with a key switch by senior engineers?",
    "a": "To intentionally close it onto a dead bus during blackout recovery if the automation fails",
    "opts": ["To test the alarm sirens", "To intentionally close it onto a dead bus during blackout recovery if the automation fails", "To disconnect shore power", "To parallel unsynchronized engines"],
    "exp": "Overrides exist for emergencies when the PLC is dead, but they carry massive risk if used improperly.",
    "cat": "BTB",
    "id": "T04_164"
  },
  {
    "q": "What is the 'SERVICE' (or CONNECTED) position of an Air Circuit Breaker?",
    "a": "The breaker is fully racked in; main power contacts are gripped to the busbars, and control wiring is connected. It carries the ship's load.",
    "opts": ["The breaker is testing its own relays", "The breaker is fully racked in; main power contacts are gripped to the busbars, and control wiring is connected. It carries the ship's load.", "The breaker is providing shore power only", "The breaker is removed for repair"],
    "exp": "This is the normal, active operating position for generating electricity or feeding motors.",
    "cat": "POS",
    "id": "T04_165"
  },
  {
    "q": "What is the 'TEST' position of an Air Circuit Breaker?",
    "a": "The breaker is racked out halfway; massive primary power contacts are disconnected from the bus, but tiny secondary control pins remain connected",
    "opts": ["The breaker is completely removed from the cabinet", "The breaker is short-circuited for Meggering", "The breaker is fully connected but tripped", "The breaker is racked out halfway; massive primary power contacts are disconnected from the bus, but tiny secondary control pins remain connected"],
    "exp": "Test mode allows the ETO to safely inject fault currents into the relays and watch the breaker physically trip without 440V danger.",
    "cat": "POS",
    "id": "T04_166"
  },
  {
    "q": "Why is secondary injection testing of an OCR performed in the TEST position?",
    "a": "To ensure test currents do not back-feed into live busbars, which could step-up to lethal voltages or disrupt the ship",
    "opts": ["To ensure test currents do not back-feed into live busbars, which could step-up to lethal voltages or disrupt the ship", "Because it is required by the manufacturer", "Because the test set needs 440V to work", "To ensure test taking less time"],
    "exp": "Testing in Service mode injects current straight into the live grid, posing extreme danger.",
    "cat": "POS",
    "id": "T04_167"
  },
  {
    "q": "What is the 'ISOLATED' (or WITHDRAWN) position of an Air Circuit Breaker?",
    "a": "The breaker is fully racked out; both main power contacts AND secondary control circuits are completely disconnected",
    "opts": ["The breaker is locked by a software password", "The breaker is fully racked out; both main power contacts AND secondary control circuits are completely disconnected", "The breaker is connected to emergency power", "The breaker is closed but carrying no load"],
    "exp": "This provides total physical air-gap isolation. The breaker is dead, safe to touch, and ready for LOTO and mechanical maintenance.",
    "cat": "POS",
    "id": "T04_168"
  },
  {
    "q": "What physical action prevents you from racking an ACB from SERVICE to ISOLATED while it is closed and carrying load?",
    "a": "A mechanical safety interlock prevents the racking handle from being inserted or turned until the breaker is tripped OPEN",
    "opts": ["A mechanical safety interlock prevents the racking handle from being inserted or turned until the breaker is tripped OPEN", "The weight of the electricity", "A warning siren on the bridge", "A software timer"],
    "exp": "Racking a closed breaker would pull the contacts apart in open air, creating a catastrophic, explosive arc flash outside the arc chutes.",
    "cat": "POS",
    "id": "T04_169"
  },
  {
    "q": "Before putting hands inside the ACB housing while in the ISOLATED position, what final mechanical check must be done?",
    "a": "Verify the closing spring indicator says 'DISCHARGED'. If it is charged, manually fire the close/trip buttons to release the tension.",
    "opts": ["Verify the contacts are polished", "Verify the closing spring indicator says 'DISCHARGED'. If it is charged, manually fire the close/trip buttons to release the tension.", "Apply oil to the contacts", "Megger the casing"],
    "exp": "A charged spring holds enough kinetic energy to crush fingers if the mechanism is accidentally nudged.",
    "cat": "POS",
    "id": "T04_170"
  },
  {
    "q": "How is the ACB physically moved between Service, Test, and Isolated positions?",
    "a": "By using a special racking handle (crank) inserted into the front panel to manually wind the breaker chassis in or out on rails",
    "opts": ["By lifting it manually with two people", "By pulling it with a rope", "By pressing an electronic button", "By using a special racking handle (crank) inserted into the front panel to manually wind the breaker chassis in or out on rails"],
    "exp": "The racking mechanism uses high mechanical advantage to push the massive copper stabs securely onto the busbars.",
    "cat": "POS",
    "id": "T04_171"
  },
  {
    "q": "During Lock Out Tag Out (LOTO), where does the ETO typically place the padlock?",
    "a": "On the racking mechanism shutter, preventing the racking handle from being inserted to move the breaker back to Service",
    "opts": ["On the generator terminal box", "On the racking mechanism shutter, preventing the racking handle from being inserted to move the breaker back to Service", "On the main engine telegraph", "On the front glass window"],
    "exp": "Locking the shutter guarantees nobody can wind the breaker onto the live bus while someone is working on the motor.",
    "cat": "POS",
    "id": "T04_172"
  },
  {
    "q": "When re-inserting an ACB, why must you rack it all the way until it 'clunks' or hits the mechanical stop?",
    "a": "To ensure the massive copper stabs fully engage the busbars, preventing high resistance joints and overheating",
    "opts": ["To trigger the alarm bell", "To ensure the massive copper stabs fully engage the busbars, preventing high resistance joints and overheating", "To clean the dust off the rails", "To test the shock absorbers"],
    "exp": "A partially engaged stab will arc and melt under load. The mechanical stop guarantees proper insertion depth.",
    "cat": "POS",
    "id": "T04_173"
  },
  {
    "q": "Can you start the diesel engine while its ACB is in the TEST position?",
    "a": "Yes, but the generator will not connect to the busbars; it is safe for running the engine without producing grid power",
    "opts": ["No, the AVR will explode", "No, the engine is physically locked", "Yes, and it will power the ship", "Yes, but the generator will not connect to the busbars; it is safe for running the engine without producing grid power"],
    "exp": "Test mode isolates the HV output but allows the engine and AVR to run for testing purposes.",
    "cat": "POS",
    "id": "T04_174"
  },
  {
    "q": "What does 'Trip-Free' mean regarding the ACB operating mechanism?",
    "a": "The breaker is free to trip instantly on a fault even if the operator is forcefully holding the mechanical close button down",
    "opts": ["The breaker trips freely without drawing an arc", "The trips can be bypassed for free", "The breaker is free to trip instantly on a fault even if the operator is forcefully holding the mechanical close button down", "It trips without needing any voltage"],
    "exp": "This safety feature ensures a human operator cannot override a massive short-circuit trip by jamming the handle closed.",
    "cat": "POS",
    "id": "T04_175"
  },
  {
    "q": "What happens if you accidentally try to rack out an ACB while the Under-Voltage Trip (UVT) coil is de-energized?",
    "a": "Nothing unusual; the UVT already holds the breaker safely tripped, so racking out is physically permitted",
    "opts": ["The handle jams", "The ship blacks out", "The breaker explodes", "Nothing unusual; the UVT already holds the breaker safely tripped, so racking out is physically permitted"],
    "exp": "Since the breaker is verified OPEN (due to the UVT), the safety interlock allows the racking crank to operate safely.",
    "cat": "POS",
    "id": "T04_176"
  }
]);
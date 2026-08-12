window.loadQuizzes("F12_MotorProtect", [

  /* ═══════════ WHAT CAN ACTUALLY KILL A MOTOR ═══════════ */
  {
    "q": "An interviewer asks \"what protections does a motor have?\" and a candidate answers only \"the overload relay.\" What is wrong with this answer?",
    "a": "It is incomplete, since each distinct failure mode has its own signature and needs its own dedicated device",
    "opts": [
      "It is incomplete, since each distinct failure mode has its own signature and needs its own dedicated device",
      "It is wrong, because the overload relay does not actually protect the motor at all",
      "Nothing, the overload relay is the only protection a motor needs",
      "It is incomplete because the overload relay only exists on DC motors"
    ],
    "exp": "The overload relay answer is not wrong, but it is incomplete. Each failure mode, current rise over seconds, current in milliseconds, current imbalance, current to earth, loss of voltage, or a temperature rise current cannot see, needs a device built to detect that specific signature. Naming one device and stopping is the most common way this question is answered badly.",
    "cat": "KILL",
    "id": "F12_001"
  },
  {
    "q": "A sustained overload, where load torque exceeds design and current rises moderately above FLC for a long period, is guarded against by:",
    "a": "A thermal or electronic overload relay",
    "opts": [
      "A thermal or electronic overload relay",
      "Fuses or an MCCB with instantaneous trip",
      "A core balance current transformer",
      "The contactor's hold-in coil"
    ],
    "exp": "Sustained overload is the everyday job of the overload relay, catching a motor asked to do more work than it is rated for over a sustained period, before the extra heat degrades the winding insulation.",
    "cat": "KILL",
    "id": "F12_002"
  },
  {
    "q": "A short circuit, whether turn-to-turn or phase-to-phase, produces current that rises essentially instantaneously to many times FLC. Which device is built to catch this?",
    "a": "Fuses or a moulded case circuit breaker, sized to open within milliseconds",
    "opts": [
      "Fuses or a moulded case circuit breaker, sized to open within milliseconds",
      "The thermal overload relay, since it responds to any high current",
      "A PTC thermistor embedded in the winding",
      "The space heater's interlock"
    ],
    "exp": "A short circuit rises far faster than the seconds-to-tens-of-seconds timescale the overload relay is built around. Fuses or an MCCB with a magnetic instantaneous trip element are the devices sized to clear it within milliseconds.",
    "cat": "KILL",
    "id": "F12_003"
  },
  {
    "q": "Single phasing, the loss of one supply line while the motor runs, is detected by:",
    "a": "A single phasing preventer, or current-balance sensing in an electronic overload relay",
    "opts": [
      "A single phasing preventer, or current-balance sensing in an electronic overload relay",
      "A core balance current transformer sensing residual earth current",
      "The bimetallic strip of a standard thermal overload relay",
      "An embedded RTD in the winding"
    ],
    "exp": "Single phasing has a current-imbalance signature, not simply a current-rise signature, so it needs a device comparing current between the three phases rather than one watching total current alone.",
    "cat": "KILL",
    "id": "F12_004"
  },
  {
    "q": "An earth fault, where winding insulation breaks down to the frame and current leaks to earth, is detected by:",
    "a": "An earth fault relay working from a core balance current transformer",
    "opts": [
      "An earth fault relay working from a core balance current transformer",
      "The single phasing preventer",
      "The overload relay's thermal memory",
      "A space heater's temperature sensor"
    ],
    "exp": "Earth fault current is small compared to load current and leaves through the earth path rather than adding obviously to any one phase, so ordinary overload sensing at the starter cannot see it. A CBCT, sensing the vector sum of the three phase currents, is the dedicated device.",
    "cat": "KILL",
    "id": "F12_005"
  },
  {
    "q": "A locked or stalled rotor, where current stays at the starting value indefinitely instead of falling as slip reduces, is caught by:",
    "a": "The overload relay, set to trip within the safe stall time, or dedicated stall/jam protection",
    "opts": [
      "The overload relay, set to trip within the safe stall time, or dedicated stall/jam protection",
      "The no-volt release on the contactor's hold-in coil",
      "The core balance current transformer",
      "The single phasing preventer"
    ],
    "exp": "A stalled rotor's current looks just like a starting surge to the overload relay. It is the same device, relying on its inverse time characteristic, that eventually catches a stall that never accelerates away.",
    "cat": "KILL",
    "id": "F12_006"
  },
  {
    "q": "Bearing failure from loss of lubrication or wear is fundamentally guarded against by:",
    "a": "Vibration and temperature monitoring plus routine mechanical maintenance, not an electrical relay function",
    "opts": [
      "Vibration and temperature monitoring plus routine mechanical maintenance, not an electrical relay function",
      "The overload relay's inverse time characteristic",
      "A core balance current transformer",
      "The space heater"
    ],
    "exp": "Bearing failure does not have a clean electrical signature the way an overload or earth fault does, so it falls outside the six electrical protections and is managed instead by vibration/temperature monitoring and routine mechanical maintenance.",
    "cat": "KILL",
    "id": "F12_007"
  },
  {
    "q": "Moisture and condensation forming inside an idle motor's casing, which lowers insulation resistance, is prevented by:",
    "a": "Space heaters fitted inside the casing",
    "opts": [
      "Space heaters fitted inside the casing",
      "The overload relay",
      "An earth fault relay",
      "No-volt release"
    ],
    "exp": "Space heaters keep the internal air a few degrees above ambient so the winding surface stays above the local dew point, preventing the condensation that would otherwise lower insulation resistance while the motor sits idle.",
    "cat": "KILL",
    "id": "F12_008"
  },

  /* ═══════════ THE OVERLOAD RELAY ═══════════ */
  {
    "q": "In a thermal (bimetallic) overload relay, what actually causes the trip?",
    "a": "A heater element carrying line current warms a bimetallic strip, which bends as it heats and mechanically trips a contact",
    "opts": [
      "A heater element carrying line current warms a bimetallic strip, which bends as it heats and mechanically trips a contact",
      "A microprocessor calculates true RMS current and issues a trip signal",
      "A core balance current transformer senses residual current and trips",
      "The strip's resistance rises sharply once a set switching temperature is reached"
    ],
    "exp": "The motor's line current passes through a heater element that warms a bimetallic strip, two dissimilar metals bonded together with different expansion rates. The bend, once large enough, mechanically trips a contact. The sharp-resistance-rise description belongs to a PTC thermistor, not a bimetallic relay.",
    "cat": "OVERLOAD",
    "id": "F12_009"
  },
  {
    "q": "Why is the bimetallic thermal overload relay described as an elegant piece of engineering for mimicking the winding's heating?",
    "a": "The strip heats up for the same reason the winding does, ohmic heating from the current passing through it, so it mimics thermal behaviour mechanically rather than by calculation",
    "opts": [
      "The strip heats up for the same reason the winding does, ohmic heating from the current passing through it, so it mimics thermal behaviour mechanically rather than by calculation",
      "It contains a microprocessor that calculates the winding's exact temperature",
      "It is made from exactly the same copper alloy as the winding itself",
      "It is mounted directly on the winding surface to sense heat by conduction"
    ],
    "exp": "Both the strip's heater element and the winding heat up through I-squared-R (ohmic) heating from the same current, so the strip's temperature rise tracks the winding's temperature rise, giving a mechanical analogue without any computation.",
    "cat": "OVERLOAD",
    "id": "F12_010"
  },
  {
    "q": "A modern electronic overload relay built around current transformers feeding a microprocessor measures:",
    "a": "True RMS current in each phase, running a thermal model of the motor in software",
    "opts": [
      "True RMS current in each phase, running a thermal model of the motor in software",
      "Only the average total current across all three phases combined",
      "Winding temperature directly via an embedded RTD",
      "Only the voltage at the motor terminals"
    ],
    "exp": "The electronic overload relay measures true RMS current in each phase individually and runs a thermal model in software, replacing the bimetal's mechanical analogue with a calculated one.",
    "cat": "OVERLOAD",
    "id": "F12_011"
  },
  {
    "q": "What additional protection can an electronic overload relay provide that a plain bimetallic relay cannot, because it measures each phase separately?",
    "a": "Single phasing protection, by detecting current imbalance between the phases",
    "opts": [
      "Single phasing protection, by detecting current imbalance between the phases",
      "Earth fault protection, by measuring the residual current directly",
      "Short circuit protection, by tripping instantaneously on fault current",
      "No-volt release, by monitoring supply voltage"
    ],
    "exp": "Because it measures RMS current in each phase individually rather than a single combined value, an electronic overload can additionally detect current imbalance between phases, giving it single phasing protection in the same device.",
    "cat": "OVERLOAD",
    "id": "F12_012"
  },
  {
    "q": "Both bimetallic and electronic overload relays exhibit a form of \"thermal memory.\" What does this mean?",
    "a": "A motor that has just tripped and is still warm gets a shorter allowed time on its next start than one starting from cold",
    "opts": [
      "A motor that has just tripped and is still warm gets a shorter allowed time on its next start than one starting from cold",
      "The relay remembers the exact fault current from the last trip and displays it permanently",
      "The relay automatically resets itself after a fixed memory delay regardless of temperature",
      "The relay disables itself permanently after its first trip"
    ],
    "exp": "A bimetallic strip is still physically warm after a recent trip, so it reaches its trip bend sooner on a re-start. An electronic relay does the same thing by software calculation, and can display it precisely, but both are tracking the same real physical effect: a hot motor tolerates less time on restart than a cold one.",
    "cat": "OVERLOAD",
    "id": "F12_013"
  },
  {
    "q": "On a graph of overload current against tripping time, why is the overload relay's curve described as \"inverse time\"?",
    "a": "Trip time falls as overload current rises: a small overload takes long to trip, a large overload trips quickly",
    "opts": [
      "Trip time falls as overload current rises: a small overload takes long to trip, a large overload trips quickly",
      "Trip time is fixed regardless of how large the overload current is",
      "Trip time rises as overload current rises, protecting against small overloads fastest",
      "The relay trips instantly the moment any current above FLC is detected"
    ],
    "exp": "The relay is not a fixed-delay device. Its tripping time falls as overload current rises, plotting as a curve sloping steeply downward, which is exactly why it is called an inverse time characteristic.",
    "cat": "OVERLOAD",
    "id": "F12_014"
  },
  {
    "q": "Why can't the overload relay simply use a fast, flat trip point set just above full load current?",
    "a": "A motor starting DOL draws five to seven times FLC for a few seconds while accelerating, which is normal and would trip a fast, flat relay on every single start",
    "opts": [
      "A motor starting DOL draws five to seven times FLC for a few seconds while accelerating, which is normal and would trip a fast, flat relay on every single start",
      "A fast, flat trip point would be too expensive to manufacture reliably",
      "Fast relays cannot physically be built to carry motor starting current at all",
      "Flat trip points only exist on DC motors, not AC induction motors"
    ],
    "exp": "The DOL starting surge, five to seven times FLC for a few seconds, is normal and harmless. A relay with a fast, flat trip point would nuisance-trip on every start, which is exactly why the inverse curve exists instead.",
    "cat": "OVERLOAD",
    "id": "F12_015"
  },
  {
    "q": "Starting current and a genuine locked-rotor stall current can look identical to an overload relay at any given instant. How does the relay tell them apart?",
    "a": "By time: a healthy motor's high current is brief, a stalled motor's high current is sustained",
    "opts": [
      "By time: a healthy motor's high current is brief, a stalled motor's high current is sustained",
      "By measuring the exact rotor speed directly",
      "By checking whether the contactor coil is still energised",
      "It cannot tell the difference, and simply never trips on either"
    ],
    "exp": "The relay never needs to know which situation is actually occurring. The inverse curve gives a long allowed time at moderate/high overload so a normal start passes, but if that same current persists because the rotor never accelerates, the relay still trips, just later than it would for a short circuit.",
    "cat": "OVERLOAD",
    "id": "F12_016"
  },
  {
    "q": "\"Trip class,\" a number defined in IEC 60947-4-1, states:",
    "a": "The maximum time in seconds the relay is allowed to take to trip when carrying 7.2 times its current setting from a cold start",
    "opts": [
      "The maximum time in seconds the relay is allowed to take to trip when carrying 7.2 times its current setting from a cold start",
      "The maximum number of times the relay can be reset before replacement",
      "The rated full load current of the motor it is protecting",
      "The number of phases the relay is designed to monitor"
    ],
    "exp": "Trip class is a standardised test condition, carrying 7.2 times the current setting from cold, and defines the maximum time in seconds allowed for the relay to trip under that specific test.",
    "cat": "OVERLOAD",
    "id": "F12_017"
  },
  {
    "q": "A Class 10 overload relay is expected to trip at 7.2 times its setting, from a cold start, within approximately:",
    "a": "4 to 10 seconds",
    "opts": ["4 to 10 seconds", "6 to 20 seconds", "9 to 30 seconds", "1 to 2 seconds"],
    "exp": "Class 10 relays trip within roughly 4 to 10 seconds under the standard test. Class 20 is roughly 6 to 20 seconds and Class 30 is roughly 9 to 30 seconds, used for progressively longer starting/higher inertia loads.",
    "cat": "OVERLOAD",
    "id": "F12_018"
  },
  {
    "q": "A Class 30 overload relay, allowing roughly 9 to 30 seconds to trip at 7.2 times setting, is typically chosen for:",
    "a": "Heavy starting duties with large inertia loads, such as some compressor or centrifuge drives",
    "opts": [
      "Heavy starting duties with large inertia loads, such as some compressor or centrifuge drives",
      "Fast starting loads such as a lightly loaded small fan motor",
      "Circuits where short circuit protection alone is considered sufficient",
      "Motors that never need to start under load"
    ],
    "exp": "Class 30 gives the longest allowed run-up time of the three classes, matching heavy starting duties and large-inertia loads that take longer to accelerate than a typical pump or lightly loaded fan.",
    "cat": "OVERLOAD",
    "id": "F12_019"
  },
  {
    "q": "A small fan motor with a short starting time is fitted with a Class 30 relay instead of the correct Class 10. What is the practical consequence?",
    "a": "A genuinely stalled rotor is allowed to cook far longer than the insulation can tolerate before the relay finally trips",
    "opts": [
      "A genuinely stalled rotor is allowed to cook far longer than the insulation can tolerate before the relay finally trips",
      "The relay will nuisance-trip on every normal start of the fan",
      "The relay will fail to detect a short circuit on the supply cable",
      "There is no consequence, since trip class only affects starting current, not stall current"
    ],
    "exp": "Trip class must match the motor's actual starting time. An oversized class allowed for a heavy load, fitted to a fast-starting small motor, lets a genuinely stalled rotor run for far longer than its insulation can tolerate before the relay eventually trips. Fitting an undersized class (e.g. Class 10 on a 15-second-start machine) causes the opposite problem, nuisance tripping on every start.",
    "cat": "OVERLOAD",
    "id": "F12_020"
  },

  /* ═══════════ SHORT CIRCUIT PROTECTION ═══════════ */
  {
    "q": "Compared to a starting surge, a short circuit fault current:",
    "a": "Is many times larger again and rises essentially instantaneously rather than over a few seconds",
    "opts": [
      "Is many times larger again and rises essentially instantaneously rather than over a few seconds",
      "Is roughly the same magnitude as the starting surge, just lasting longer",
      "Is smaller than the starting surge but lasts much longer",
      "Only occurs at the moment of switching off, never while running"
    ],
    "exp": "A short circuit, turn-to-turn, phase-to-phase, or a supply cable fault, produces current many times larger than even the starting surge, and it rises in essentially no time at all rather than over the few seconds of a normal start.",
    "cat": "SHORTCIRCUIT",
    "id": "F12_021"
  },
  {
    "q": "Why can't the overload relay be relied on to clear a short circuit?",
    "a": "Its whole design intent is to be slow at moderate overloads so it survives a normal start, which makes it far too sluggish to clear a fault before damage occurs",
    "opts": [
      "Its whole design intent is to be slow at moderate overloads so it survives a normal start, which makes it far too sluggish to clear a fault before damage occurs",
      "The overload relay is not electrically connected to the same circuit as a short circuit fault",
      "The overload relay can only sense voltage, not current",
      "Short circuits never produce enough current to operate any relay"
    ],
    "exp": "Asking one device to be both patient with a starting surge and instantaneous on a fault is asking for two opposite characteristics from one component. The overload relay is deliberately built slow, so a separate, fast device is needed for short circuit protection.",
    "cat": "SHORTCIRCUIT",
    "id": "F12_022"
  },
  {
    "q": "Short circuit protection on a motor starter is provided by:",
    "a": "Fuses or a moulded case circuit breaker (MCCB) with a magnetic instantaneous trip element",
    "opts": [
      "Fuses or a moulded case circuit breaker (MCCB) with a magnetic instantaneous trip element",
      "The overload relay's thermal memory function",
      "A single phasing preventer",
      "The contactor's hold-in coil"
    ],
    "exp": "Fuses or an MCCB with a magnetic instantaneous trip are sized to let the starting surge pass but open within milliseconds on a genuine fault, exactly the speed a short circuit demands.",
    "cat": "SHORTCIRCUIT",
    "id": "F12_023"
  },
  {
    "q": "Where is short circuit protection (fuses or MCCB) positioned relative to the starter and overload relay?",
    "a": "Upstream of the starter, alongside the overload relay, so together they cover the entire range from just above FLC up to a bolted fault",
    "opts": [
      "Upstream of the starter, alongside the overload relay, so together they cover the entire range from just above FLC up to a bolted fault",
      "Downstream of the motor, after the winding terminals",
      "Inside the overload relay itself, sharing the same bimetallic strip",
      "It replaces the overload relay entirely in most ship starters"
    ],
    "exp": "In many ship starters the fuse/MCCB and overload relay sit side by side upstream. The fuse or MCCB clears the short circuit almost instantly, the overload relay clears a sustained moderate overload over seconds, covering the full current range between them.",
    "cat": "SHORTCIRCUIT",
    "id": "F12_024"
  },
  {
    "q": "Why is short circuit protection split into a separate device from the overload relay rather than combined into one?",
    "a": "Being patient with a starting surge and being instantaneous on a fault are opposite characteristics that cannot both be built into one device",
    "opts": [
      "Being patient with a starting surge and being instantaneous on a fault are opposite characteristics that cannot both be built into one device",
      "Regulations simply require two separate devices regardless of engineering need",
      "A combined device would be cheaper to manufacture but is banned on ships",
      "Fuses and overload relays cannot physically be wired into the same starter"
    ],
    "exp": "The overload relay must tolerate a starting surge for seconds, while a short circuit must be cleared in milliseconds. Those are contradictory requirements for one component, so the job is deliberately split between two devices with different jobs.",
    "cat": "SHORTCIRCUIT",
    "id": "F12_025"
  },
  {
    "q": "A candidate claims the overload relay alone provides adequate short circuit protection for a starter. What is the flaw in this claim?",
    "a": "The overload relay is deliberately slow to survive the starting surge, so it is far too sluggish to clear a fault current rising in milliseconds before it damages cables, contacts and the motor",
    "opts": [
      "The overload relay is deliberately slow to survive the starting surge, so it is far too sluggish to clear a fault current rising in milliseconds before it damages cables, contacts and the motor",
      "The claim is correct, since any high current will eventually trip the overload relay",
      "The overload relay only operates on DC circuits, not AC motor starters",
      "The overload relay actually responds faster than a fuse or MCCB"
    ],
    "exp": "This is the same trap as stopping at \"overload relay\" for the general protection question. Its slow, patient response is a deliberate design choice for surviving normal starts, and that same slowness is exactly what makes it unsuitable for clearing a short circuit fast enough.",
    "cat": "SHORTCIRCUIT",
    "id": "F12_026"
  },

  /* ═══════════ SINGLE PHASING PROTECTION ═══════════ */
  {
    "q": "Single phasing is best defined as:",
    "a": "The loss of one of the three supply lines to a motor while it is still running",
    "opts": [
      "The loss of one of the three supply lines to a motor while it is still running",
      "A motor being started on only one phase intentionally",
      "A short circuit between two of the three phases",
      "A motor running at exactly half its rated frequency"
    ],
    "exp": "Single phasing is the loss of one of the three supply lines to a running motor, distinct from a short circuit or intentional single-phase operation.",
    "cat": "SINGLEPHASE",
    "id": "F12_027"
  },
  {
    "q": "Which of these is NOT listed as a common cause of single phasing?",
    "a": "The overload relay tripping on a normal starting surge",
    "opts": [
      "The overload relay tripping on a normal starting surge",
      "A blown fuse on one supply line",
      "A failed contactor pole",
      "A broken conductor"
    ],
    "exp": "The notes list a blown fuse, a failed contactor pole, or a broken conductor as the most common causes of single phasing. An overload relay tripping on a normal start is unrelated and does not cause single phasing.",
    "cat": "SINGLEPHASE",
    "id": "F12_028"
  },
  {
    "q": "Why is single phasing described as particularly dangerous compared to a short circuit?",
    "a": "It does not announce itself: the motor keeps running and trying to deliver the same output, so the fault is easy to miss",
    "opts": [
      "It does not announce itself: the motor keeps running and trying to deliver the same output, so the fault is easy to miss",
      "It produces a louder, more obvious noise than any other fault",
      "It always trips the main switchboard breaker instantly",
      "It causes the motor to stop dead immediately, damaging the coupling"
    ],
    "exp": "A three phase motor that loses one line does not stop, it keeps trying to deliver the same output on the two remaining phases. If the load is light it may keep running almost normally, which makes the fault easy to miss until a winding overheats.",
    "cat": "SINGLEPHASE",
    "id": "F12_029"
  },
  {
    "q": "During single phasing, what happens to the currents in the three phases?",
    "a": "The two remaining phases carry current well above normal while the lost phase reads zero",
    "opts": [
      "The two remaining phases carry current well above normal while the lost phase reads zero",
      "All three phases drop to zero current simultaneously",
      "All three phases carry exactly the same current as before the fault",
      "The lost phase carries the highest current of the three"
    ],
    "exp": "The two remaining phases must carry current well above normal to try to sustain the same output, while the lost phase's current reads zero, exactly the imbalance signature a current-balance device is built to detect.",
    "cat": "SINGLEPHASE",
    "id": "F12_030"
  },
  {
    "q": "The dedicated protection method against single phasing works by:",
    "a": "Comparing current in each of the three phases against the others (current balance), tripping on the imbalance itself",
    "opts": [
      "Comparing current in each of the three phases against the others (current balance), tripping on the imbalance itself",
      "Measuring the vector sum of the three phase currents through a core balance CT",
      "Monitoring the voltage across the contactor's hold-in coil",
      "Measuring winding temperature directly with an embedded RTD"
    ],
    "exp": "A single phasing preventer, or the phase-balance function in a modern electronic overload relay, trips on the current imbalance itself. The vector-sum-through-a-CBCT description belongs to earth fault protection, a different device for a different signature.",
    "cat": "SINGLEPHASE",
    "id": "F12_031"
  },
  {
    "q": "Why can a generously set, total-current overload relay fail to catch single phasing quickly?",
    "a": "If the load is light, the two-phase current may not climb high enough above FLC to trip an ordinary thermal element, letting the fault run longer than is safe",
    "opts": [
      "If the load is light, the two-phase current may not climb high enough above FLC to trip an ordinary thermal element, letting the fault run longer than is safe",
      "A total-current overload relay physically cannot detect any current at all during single phasing",
      "The overload relay only monitors voltage, never current",
      "Single phasing always trips a plain overload relay instantly regardless of load"
    ],
    "exp": "This is why current-balance sensing, tripping on the imbalance itself, is faster and more certain than relying on an ordinary overload relay to catch single phasing by accident once total current happens to climb high enough.",
    "cat": "SINGLEPHASE",
    "id": "F12_032"
  },

  /* ═══════════ EARTH FAULT PROTECTION ═══════════ */
  {
    "q": "An earth fault in a motor winding is:",
    "a": "A breakdown of winding insulation to the motor frame, so current finds a path to earth instead of returning through the supply conductors",
    "opts": [
      "A breakdown of winding insulation to the motor frame, so current finds a path to earth instead of returning through the supply conductors",
      "A short circuit directly between two phase conductors",
      "The loss of one supply phase while the motor is running",
      "A drop in supply voltage below the motor's rated value"
    ],
    "exp": "An earth fault is insulation breakdown to the frame, current leaking to earth rather than returning entirely through the supply conductors, a different fault from a phase-to-phase short or single phasing.",
    "cat": "EARTHFAULT",
    "id": "F12_033"
  },
  {
    "q": "Earth fault detection is based on which fundamental principle?",
    "a": "Kirchhoff's Current Law: in a healthy circuit, current in equals current out, so the vector sum through all three phase conductors should be zero",
    "opts": [
      "Kirchhoff's Current Law: in a healthy circuit, current in equals current out, so the vector sum through all three phase conductors should be zero",
      "Ohm's Law applied to the winding resistance",
      "The inverse time characteristic of the overload relay",
      "Kirchhoff's Voltage Law around the starter circuit"
    ],
    "exp": "Detection uses the same principle as KCL: current in should equal current out. In a healthy circuit the vector sum of the three phase currents through the CBCT core is zero.",
    "cat": "EARTHFAULT",
    "id": "F12_034"
  },
  {
    "q": "The device that senses earth fault current by passing all three phase conductors through a single core is called a:",
    "a": "Core balance current transformer (CBCT)",
    "opts": [
      "Core balance current transformer (CBCT)",
      "Bimetallic overload element",
      "PTC thermistor",
      "No-volt release coil"
    ],
    "exp": "A CBCT has all three phase conductors passed through its core together, detecting any residual current that does not sum to zero, which indicates a leak to earth.",
    "cat": "EARTHFAULT",
    "id": "F12_035"
  },
  {
    "q": "In a healthy motor circuit, what does the CBCT see, and what changes when an earth fault occurs?",
    "a": "It sees no net flux when healthy, since the vector sum is zero; a leak to earth makes the sum non-zero, producing residual flux the CBCT detects",
    "opts": [
      "It sees no net flux when healthy, since the vector sum is zero; a leak to earth makes the sum non-zero, producing residual flux the CBCT detects",
      "It always sees full line current, healthy or faulted, and simply measures its magnitude",
      "It sees zero current in all conditions and cannot detect a fault at all",
      "It measures voltage rather than current, and trips when voltage rises"
    ],
    "exp": "In a healthy circuit the vector sum of the three currents is zero, so the CBCT sees no net flux. The moment current leaks to earth instead of returning through the phase conductors, the sum is no longer zero, and the CBCT detects that residual current.",
    "cat": "EARTHFAULT",
    "id": "F12_036"
  },
  {
    "q": "The core balance principle used for motor earth fault protection is the same working principle behind which personnel-protection device?",
    "a": "An ELCB or RCD",
    "opts": [
      "An ELCB or RCD",
      "A no-volt release coil",
      "A PTC thermistor trip relay",
      "A trip-class rated overload relay"
    ],
    "exp": "The core balance principle, sensing a non-zero vector sum of currents as evidence of a leak, is the same working principle behind an ELCB or RCD, just applied here to the motor and its cabling rather than to a person.",
    "cat": "EARTHFAULT",
    "id": "F12_037"
  },
  {
    "q": "An earth fault on a motor is often the first sign of which underlying problem?",
    "a": "Moisture ingress",
    "opts": ["Moisture ingress", "A stalled rotor", "Loss of a supply phase", "Excessive supply voltage"],
    "exp": "Earth fault current on a ship's ungrounded or high resistance grounded system is deliberately limited by design, but it still represents insulation breakdown that will worsen if left running, and is often the first sign of moisture ingress.",
    "cat": "EARTHFAULT",
    "id": "F12_038"
  },

  /* ═══════════ UNDERVOLTAGE AND NO-VOLT RELEASE ═══════════ */
  {
    "q": "The motor's protection against undervoltage is provided by which piece of hardware?",
    "a": "The contactor's hold-in coil, the same hardware used for normal hold-in operation",
    "opts": [
      "The contactor's hold-in coil, the same hardware used for normal hold-in operation",
      "A dedicated undervoltage relay separate from the contactor",
      "The overload relay's inverse time curve",
      "A core balance current transformer"
    ],
    "exp": "The hold-in contact that keeps the motor running after the start button is released is the same hardware that, looked at from the failure side, provides undervoltage protection. This is called no-volt release.",
    "cat": "UNDERVOLT",
    "id": "F12_039"
  },
  {
    "q": "If the supply sags badly or fails while a motor is running, what happens at the contactor?",
    "a": "The coil no longer has enough voltage to hold the contacts closed, the contactor drops out, and the hold-in contact opens with it",
    "opts": [
      "The coil no longer has enough voltage to hold the contacts closed, the contactor drops out, and the hold-in contact opens with it",
      "The contactor stays closed regardless, since it is mechanically latched",
      "The overload relay trips instantly to protect the winding",
      "The contactor's coil voltage increases to compensate for the sag"
    ],
    "exp": "The contactor coil needs adequate voltage to hold its contacts closed. A bad sag or loss of supply drops the contactor out, opening the hold-in contact along with the main contacts.",
    "cat": "UNDERVOLT",
    "id": "F12_040"
  },
  {
    "q": "When supply is restored after a blackout, why doesn't the motor restart automatically?",
    "a": "The coil circuit is still open at the hold-in contact, because the start button is not being pressed, so someone must press start again",
    "opts": [
      "The coil circuit is still open at the hold-in contact, because the start button is not being pressed, so someone must press start again",
      "The overload relay remains tripped and must be manually reset before any restart is possible",
      "The motor's insulation resistance is too low to allow current flow",
      "Marine regulations require a 30 minute delay before any motor can restart"
    ],
    "exp": "When the contactor drops out, its hold-in contact opens. Restoring supply does not close that contact by itself, since the start button is not being pressed, so the coil circuit stays open and the motor does not restart on its own.",
    "cat": "UNDERVOLT",
    "id": "F12_041"
  },
  {
    "q": "Why is no-volt release described as a safety protection rather than just a wiring quirk?",
    "a": "It prevents an unannounced restart of live rotating machinery while someone may have hands inside a guard, cleared for a machine that is dead",
    "opts": [
      "It prevents an unannounced restart of live rotating machinery while someone may have hands inside a guard, cleared for a machine that is dead",
      "It exists only to save electricity by not restarting motors unnecessarily",
      "It is required purely to reduce wear on the contactor's main contacts",
      "It has no safety purpose, it is simply a side effect of the hold-in circuit design"
    ],
    "exp": "Picture a motor stopped by a blackout while someone is clearing a jam or greasing a coupling. If the motor restarted the instant supply returned, with no human decision in the loop, that is an unannounced start on live rotating machinery with a person at risk. No-volt release exists specifically to remove that possibility.",
    "cat": "UNDERVOLT",
    "id": "F12_042"
  },
  {
    "q": "The no-volt release function is best understood as:",
    "a": "The same hold-in contact hardware from F11's normal DOL operation, viewed from the failure side rather than the normal operation side",
    "opts": [
      "The same hold-in contact hardware from F11's normal DOL operation, viewed from the failure side rather than the normal operation side",
      "A completely separate relay unrelated to the contactor's normal run circuit",
      "A function only found on electronic overload relays, not on standard DOL starters",
      "A feature that only operates when the overload relay has also tripped"
    ],
    "exp": "F11 covered the hold-in contact as the answer to why the motor keeps running after the start button is released. Looked at from the failure side, that same hardware is the motor's undervoltage protection.",
    "cat": "UNDERVOLT",
    "id": "F12_043"
  },
  {
    "q": "A candidate dismisses no-volt release as \"just how the hold-in circuit happens to behave,\" with no real safety significance. What is missing from this answer?",
    "a": "It ignores that no-volt release specifically prevents an unannounced automatic restart while someone may be working on the machine with hands inside a guard",
    "opts": [
      "It ignores that no-volt release specifically prevents an unannounced automatic restart while someone may be working on the machine with hands inside a guard",
      "The answer is entirely correct, no-volt release has no safety purpose",
      "It ignores that no-volt release actually protects against short circuits, not undervoltage",
      "It ignores that no-volt release only functions on three phase motors"
    ],
    "exp": "The behaviour is not incidental. It is deliberately relied upon as a safety protection, specifically to stop an unannounced restart of live rotating machinery after supply returns, removing the risk to anyone working on the driven equipment.",
    "cat": "UNDERVOLT",
    "id": "F12_044"
  },

  /* ═══════════ THERMISTORS AND EMBEDDED TEMPERATURE DETECTORS ═══════════ */
  {
    "q": "Which failure causes are described as not necessarily pushing current outside normal limits, even though the winding runs hotter than its insulation class allows?",
    "a": "Blocked ventilation, a fouled cooler, high ambient temperature, or a partially blocked filter",
    "opts": [
      "Blocked ventilation, a fouled cooler, high ambient temperature, or a partially blocked filter",
      "A locked rotor and a phase-to-phase short circuit",
      "Loss of a supply phase and a blown fuse",
      "Undervoltage and loss of supply"
    ],
    "exp": "Every current-based protection infers the motor's condition indirectly, from current. Blocked ventilation, a fouled cooler, high ambient temperature and a partially blocked filter are causes of overheating that do not necessarily show up as extra current, so current-based devices cannot reliably catch them.",
    "cat": "THERMISTOR",
    "id": "F12_045"
  },
  {
    "q": "A PTC (positive temperature coefficient) thermistor embedded in a winding behaves how as it heats?",
    "a": "Resistance stays low and roughly flat over most of its range, then rises sharply, by orders of magnitude, once it crosses its rated switching temperature",
    "opts": [
      "Resistance stays low and roughly flat over most of its range, then rises sharply, by orders of magnitude, once it crosses its rated switching temperature",
      "Resistance falls steadily and continuously as temperature rises, with no sharp change",
      "Resistance stays exactly constant regardless of temperature",
      "Resistance rises linearly with temperature from the very start"
    ],
    "exp": "A PTC thermistor behaves oppositely to the copper around it: low, roughly flat resistance over most of its range, then a sharp jump by orders of magnitude once it crosses its rated switching temperature, which a dedicated PTC trip relay watches for.",
    "cat": "THERMISTOR",
    "id": "F12_046"
  },
  {
    "q": "How many PTC thermistors are usually embedded in a motor winding?",
    "a": "Usually one per phase",
    "opts": ["Usually one per phase", "Exactly one for the whole motor regardless of phases", "One per pole pair", "Six, two per phase"],
    "exp": "The notes describe a PTC thermistor embedded directly in the winding, usually one per phase, feeding a dedicated PTC trip relay.",
    "cat": "THERMISTOR",
    "id": "F12_047"
  },
  {
    "q": "Thermistor sets are commonly supplied in matched alarm and trip pairs. What is the purpose of the alarm set?",
    "a": "It warns at a lower temperature, before the trip set shuts the motor down at a higher one",
    "opts": [
      "It warns at a lower temperature, before the trip set shuts the motor down at a higher one",
      "It shuts the motor down immediately, while the trip set only sounds a warning",
      "It monitors supply voltage rather than winding temperature",
      "It replaces the trip set entirely on smaller motors"
    ],
    "exp": "The alarm set warns at a lower temperature so action can be taken before the trip set, set at a higher temperature, actually shuts the motor down.",
    "cat": "THERMISTOR",
    "id": "F12_048"
  },
  {
    "q": "For a Class F insulated winding (rated to roughly 155°C), what does the module say about typical alarm and trip temperatures?",
    "a": "Figures in the region of 140°C and 155°C are typical, but the exact values are set by the manufacturer for that specific machine and should be read from the nameplate, not assumed universal",
    "opts": [
      "Figures in the region of 140°C and 155°C are typical, but the exact values are set by the manufacturer for that specific machine and should be read from the nameplate, not assumed universal",
      "Every Class F motor, regardless of manufacturer, trips at exactly 155°C with no exceptions",
      "Alarm and trip temperatures are irrelevant and never specified for Class F windings",
      "The trip temperature is always exactly double the alarm temperature"
    ],
    "exp": "The module deliberately avoids asserting one universal trip temperature, since it genuinely varies by design choice: figures around 140°C alarm and 155°C trip are typical for Class F, but the exact figures belong to that specific motor's nameplate.",
    "cat": "THERMISTOR",
    "id": "F12_049"
  },
  {
    "q": "How does an embedded RTD's temperature response differ from a PTC thermistor's?",
    "a": "An RTD gives a continuous, near-linear resistance versus temperature relationship, unlike a PTC's sharp step change at a set switching temperature",
    "opts": [
      "An RTD gives a continuous, near-linear resistance versus temperature relationship, unlike a PTC's sharp step change at a set switching temperature",
      "An RTD only trips at a fixed temperature exactly like a PTC, with no readout capability",
      "An RTD measures current rather than temperature",
      "An RTD and a PTC thermistor behave identically in every respect"
    ],
    "exp": "Unlike a PTC's step change, an RTD gives a continuous, near-linear resistance-temperature relationship, allowing an actual temperature readout rather than just a pass/fail alarm or trip signal.",
    "cat": "THERMISTOR",
    "id": "F12_050"
  },
  {
    "q": "Which type of motor is more likely to use embedded RTDs (commonly Pt100 elements) instead of, or alongside, thermistors?",
    "a": "Larger or more critical motors, particularly high voltage machines",
    "opts": [
      "Larger or more critical motors, particularly high voltage machines",
      "Only small single phase fractional horsepower motors",
      "Only motors that never run continuously",
      "Only motors without any overload relay fitted"
    ],
    "exp": "Larger or more critical motors, particularly high voltage machines, often use embedded RTDs instead of or alongside thermistors, useful where the operator wants a logged, continuous temperature reading rather than just a pass/fail signal.",
    "cat": "THERMISTOR",
    "id": "F12_051"
  },
  {
    "q": "What is the key conceptual distinction between current-based motor protections and thermistors/RTDs?",
    "a": "Current-based protection infers winding condition from what is happening at the terminals; thermistors and RTDs measure the winding directly",
    "opts": [
      "Current-based protection infers winding condition from what is happening at the terminals; thermistors and RTDs measure the winding directly",
      "Current-based protection is always more accurate, so thermistors are effectively redundant",
      "Thermistors and RTDs actually measure current, just at a different location",
      "There is no meaningful distinction, the two approaches are interchangeable"
    ],
    "exp": "They are not redundant with each other, they cover different failure paths. Current-based protection (overload relay, single phasing, earth fault) infers condition from the terminals; thermistors and RTDs measure the winding directly, which is exactly the point of naming more than one protection.",
    "cat": "THERMISTOR",
    "id": "F12_052"
  },

  /* ═══════════ SPACE HEATERS ═══════════ */
  {
    "q": "What is the primary purpose of a space heater fitted inside a marine motor's casing?",
    "a": "To prevent condensation forming inside the windings while the motor is idle",
    "opts": [
      "To prevent condensation forming inside the windings while the motor is idle",
      "To pre-warm the motor so it starts faster",
      "To reduce the motor's starting current on the next start",
      "To dry the winding after a saltwater ingress event"
    ],
    "exp": "The space heater's purpose has nothing to do with running performance. It is fitted purely to prevent condensation while the motor is stopped and cooling.",
    "cat": "HEATERS",
    "id": "F12_053"
  },
  {
    "q": "Why does condensation form inside a motor that has been stopped, in humid engine room or deck air?",
    "a": "A cooling casing can fall below the surrounding air's dew point, letting moisture condense inside the windings",
    "opts": [
      "A cooling casing can fall below the surrounding air's dew point, letting moisture condense inside the windings",
      "The motor's own residual current continues to draw in moist air",
      "Stopping the motor causes its internal pressure to rise, drawing in water",
      "Condensation only occurs if the motor was recently washed down externally"
    ],
    "exp": "A motor that has been running is warm; once switched off it cools. In humid, temperature-swinging air, especially in the tropics, a cooling casing can fall below the surrounding air's dew point, and moisture condenses inside the windings.",
    "cat": "HEATERS",
    "id": "F12_054"
  },
  {
    "q": "Which of these motors is described as a typical candidate for a fitted space heater?",
    "a": "A standby fire pump motor that spends long periods idle",
    "opts": [
      "A standby fire pump motor that spends long periods idle",
      "A continuously running main seawater cooling pump motor",
      "A small hand tool motor used briefly on deck",
      "A motor that is permanently disconnected from supply"
    ],
    "exp": "Space heaters are particularly fitted to larger or critical motors and anything that spends long periods idle, such as a standby fire pump motor, an emergency generator's auxiliaries, or deck machinery used only in port.",
    "cat": "HEATERS",
    "id": "F12_055"
  },
  {
    "q": "When is a motor's space heater switched on, and why is it interlocked off while the motor runs?",
    "a": "It switches on automatically whenever the motor is stopped and isolated; it is interlocked off while running because the winding's own losses keep it warm enough by then",
    "opts": [
      "It switches on automatically whenever the motor is stopped and isolated; it is interlocked off while running because the winding's own losses keep it warm enough by then",
      "It runs continuously at all times, whether the motor is stopped or running",
      "It only switches on during motor starting to reduce inrush current",
      "It switches on only when the overload relay has tripped"
    ],
    "exp": "The heater is switched on automatically whenever the motor is stopped and isolated, and interlocked off while running, since the winding's own I-squared-R losses keep it warm enough on their own by then.",
    "cat": "HEATERS",
    "id": "F12_056"
  },
  {
    "q": "What is the direct electrical consequence of condensation forming inside a winding?",
    "a": "It measurably lowers insulation resistance at exactly the point that is most damaging, the insulation surface",
    "opts": [
      "It measurably lowers insulation resistance at exactly the point that is most damaging, the insulation surface",
      "It has no measurable electrical effect until the motor is next started",
      "It raises insulation resistance temporarily before it eventually falls",
      "It only affects the motor's bearings, not its electrical insulation"
    ],
    "exp": "Moisture condenses inside the windings exactly where it is most damaging, on the insulation surface, measurably lowering insulation resistance, the same insulation resistance concept covered in F02.",
    "cat": "HEATERS",
    "id": "F12_057"
  },

  /* ═══════════ MOTOR RECOVERY AFTER SALTWATER INGRESS ═══════════ */
  {
    "q": "What is the correct first step when recovering a motor that has been wetted by seawater?",
    "a": "Isolate the motor electrically, lock off, and prove it dead",
    "opts": [
      "Isolate the motor electrically, lock off, and prove it dead",
      "Immediately begin drying with an oven or heat lamps",
      "Megger the winding at full 500V DC test voltage to assess damage",
      "Wash the windings with fresh water while still electrically live"
    ],
    "exp": "Before touching anything, isolate the motor electrically, lock off, and prove it dead, normal electrical safety practice in full, before any other step in the recovery procedure begins.",
    "cat": "RECOVERY",
    "id": "F12_058"
  },
  {
    "q": "Why must a saltwater-wetted motor be washed with fresh water before any drying takes place?",
    "a": "Salt is hygroscopic and, if left in place, actively draws moisture back out of the air after drying; drying seawater in place also bakes the salt onto the insulation",
    "opts": [
      "Salt is hygroscopic and, if left in place, actively draws moisture back out of the air after drying; drying seawater in place also bakes the salt onto the insulation",
      "Fresh water improves the conductivity of the winding, aiding the drying process",
      "Washing is purely cosmetic and has no effect on insulation resistance",
      "Fresh water is needed only to cool the winding before an oven can be used"
    ],
    "exp": "Seawater's dissolved salt conducts far better than fresh water, and once it evaporates it leaves hygroscopic salt crystals that draw moisture back in afterwards. A motor dried without first removing the salt will simply re-absorb moisture and its IR will fall again.",
    "cat": "RECOVERY",
    "id": "F12_059"
  },
  {
    "q": "A technician dries a saltwater-wetted motor in an oven first, planning to wash it with fresh water afterwards. What is wrong with this order?",
    "a": "Drying seawater in place bakes the salt onto the insulation instead of removing it, and the baked-in salt will still draw moisture back in later",
    "opts": [
      "Drying seawater in place bakes the salt onto the insulation instead of removing it, and the baked-in salt will still draw moisture back in later",
      "The order makes no difference, as long as both steps eventually happen",
      "Ovens cannot be used on any motor that has previously contacted seawater",
      "Washing after drying actually improves the final insulation resistance result"
    ],
    "exp": "Washing before drying is not an optional first step, it is the step that makes the rest of the procedure work. Drying seawater in place bakes the salt onto the insulation rather than removing it, defeating the purpose of the wash.",
    "cat": "RECOVERY",
    "id": "F12_060"
  },
  {
    "q": "After washing and draining a wetted motor, which of the following is NOT listed as an acceptable drying method?",
    "a": "Submerging the motor in fresh water to displace residual moisture",
    "opts": [
      "Submerging the motor in fresh water to displace residual moisture",
      "A low-heat oven or drying cabinet",
      "Internal space heaters if fitted and undamaged",
      "Warm dry air blown through the machine"
    ],
    "exp": "Drying is done using a low-heat oven or drying cabinet, internal space heaters if fitted and undamaged, external heat lamps, or warm dry air blown through the machine. Submerging the motor in water is not part of the drying step, and would work against it.",
    "cat": "RECOVERY",
    "id": "F12_061"
  },
  {
    "q": "During the drying stage, how should insulation resistance be monitored?",
    "a": "Take periodic IR readings through drying, watching for a steady upward trend, rather than drying blind for a fixed time",
    "opts": [
      "Take periodic IR readings through drying, watching for a steady upward trend, rather than drying blind for a fixed time",
      "IR should only be checked once, right at the very end of drying",
      "IR monitoring is unnecessary as long as an oven timer is set correctly",
      "IR should be checked only if the motor visibly smells of smoke"
    ],
    "exp": "A healthy process shows IR climbing steadily as moisture leaves the windings. A motor not improving, or whose IR fluctuates erratically instead of trending upward, is telling you the moisture is not actually leaving, or that there is contamination or damage beyond simple wetting.",
    "cat": "RECOVERY",
    "id": "F12_062"
  },
  {
    "q": "While a motor is still wet, what test voltage should be used for insulation checks?",
    "a": "A low voltage insulation tester, commonly in the 100 to 250V DC range, or a standard 500V tester's slow, hand-cranked setting",
    "opts": [
      "A low voltage insulation tester, commonly in the 100 to 250V DC range, or a standard 500V tester's slow, hand-cranked setting",
      "The normal full 500V DC test voltage at full speed, the same as any other IR test",
      "A test voltage of 1000V DC to compensate for the moisture present",
      "No insulation testing at all should be performed until the motor is completely dry"
    ],
    "exp": "While still wet, testing at the normal full 500V DC voltage risks breakdown across moisture-bridged insulation that would otherwise have survived. A low voltage tester, or a slow hand-cranked reading on a standard tester, avoids stressing compromised insulation before it has dried.",
    "cat": "RECOVERY",
    "id": "F12_063"
  },
  {
    "q": "Why is testing a wet winding at full insulation test voltage dangerous?",
    "a": "Moisture can bridge weak points in the insulation, providing a conductive path that the full test voltage can break down, damaging insulation that would have survived once properly dried",
    "opts": [
      "Moisture can bridge weak points in the insulation, providing a conductive path that the full test voltage can break down, damaging insulation that would have survived once properly dried",
      "Full voltage testing has no effect on wet windings, it is simply an unnecessary precaution",
      "Full voltage testing while wet always produces a falsely high IR reading",
      "Wet insulation always reads exactly zero regardless of test voltage used"
    ],
    "exp": "This is the trap in the procedure: applying the full test voltage across moisture-bridged insulation can cause an actual breakdown that the same winding, once properly dried, would have withstood without damage.",
    "cat": "RECOVERY",
    "id": "F12_064"
  },
  {
    "q": "As a general rule of thumb only, a winding is treated as adequately dried once IR at the standard 500V DC test, corrected to roughly 20-25°C, has climbed to approximately:",
    "a": "0.5 to 1 megohm",
    "opts": ["0.5 to 1 megohm", "0.5 to 1 ohm", "5 to 10 kilohm", "50 to 100 megohm"],
    "exp": "Industry drying guidance treats a winding as adequately dried once IR has climbed to on the order of 0.5 to 1 megohm at the standard 500V DC test, corrected to roughly 20-25°C, as a rough check, not a substitute for the manufacturer's own acceptance criteria.",
    "cat": "RECOVERY",
    "id": "F12_065"
  },
  {
    "q": "Which of these is a valid reason to reject a wetted motor and refer it for a workshop rewind rather than continuing to dry it on board?",
    "a": "IR plateaus low and will not climb further despite proper washing and extended drying",
    "opts": [
      "IR plateaus low and will not climb further despite proper washing and extended drying",
      "IR reaches 0.5 megohm and continues climbing steadily with further drying",
      "The motor was only lightly splashed, not genuinely soaked",
      "The motor's space heater was interlocked off while it ran, as designed"
    ],
    "exp": "Reject-and-refer criteria include: IR plateauing low despite proper washing and extended drying, erratic readings rather than a trend, visible physical damage, corrosion or burning, or prolonged ingress suggesting the windings themselves, not just the surface, are soaked. A steadily improving IR is the sign of a recovery going correctly, not a reason to reject.",
    "cat": "RECOVERY",
    "id": "F12_066"
  },
  {
    "q": "Put these saltwater ingress recovery steps in the correct order: (1) retest at full voltage once dry, (2) isolate and prove dead, (3) wash with fresh water, (4) drain and dry while monitoring IR periodically.",
    "a": "Isolate and prove dead, wash with fresh water, drain and dry while monitoring IR, retest at full voltage once dry",
    "opts": [
      "Isolate and prove dead, wash with fresh water, drain and dry while monitoring IR, retest at full voltage once dry",
      "Wash with fresh water, isolate and prove dead, retest at full voltage once dry, drain and dry while monitoring IR",
      "Drain and dry while monitoring IR, wash with fresh water, isolate and prove dead, retest at full voltage once dry",
      "Retest at full voltage once dry, isolate and prove dead, wash with fresh water, drain and dry while monitoring IR"
    ],
    "exp": "The correct order matters: isolate and prove dead first for safety, wash with fresh water before any drying so salt cannot bake in or later re-absorb moisture, drain and dry with periodic IR monitoring showing an upward trend at reduced test voltage, and only retest at full voltage once IR has climbed to a healthy, stable value.",
    "cat": "RECOVERY",
    "id": "F12_067"
  }

]);

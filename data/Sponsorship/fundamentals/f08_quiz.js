window.loadQuizzes("F08_ThreePhase", [

  /* ═══════════ WHY THREE PHASE ═══════════ */
  {
    "q": "What is the fundamental weakness of a single phase AC supply when driving a motor?",
    "a": "Instantaneous power pulsates, touching zero twice every cycle with a resistive load",
    "opts": [
      "It cannot be stepped up or down with a transformer",
      "Instantaneous power pulsates, touching zero twice every cycle with a resistive load",
      "It cannot be rectified to DC",
      "Its frequency drifts more than a three phase supply"
    ],
    "exp": "Expanding p(t) = v(t) x i(t) for single phase gives a constant term plus a term oscillating at twice supply frequency. That oscillating term only averages to zero over a full cycle, so instantaneous power actually rises and falls, touching zero twice a cycle for a resistive load. Transformers and rectification work fine on single phase, so those are not the weakness being described.",
    "cat": "WHY3PH",
    "id": "F08_001"
  },
  {
    "q": "In the single phase power expression p(t) = VI cos(phi) minus VI cos(2wt minus phi), what happens to the oscillating second term when three such terms, 120 degrees apart, are added together for a three phase system?",
    "a": "The three oscillating terms cancel exactly at every instant, leaving only constant power",
    "opts": [
      "The three oscillating terms cancel exactly at every instant, leaving only constant power",
      "The oscillating terms add together, tripling the ripple",
      "The oscillating terms cancel only when averaged over a full cycle",
      "The oscillating terms shift to four times supply frequency instead of cancelling"
    ],
    "exp": "Three equal amplitude cosines spaced 120 degrees apart sum to zero at every instant, not merely on average, which is exactly why the total three phase power p(t) = 3VIcos(phi) comes out perfectly constant. This is the core mathematical reason three phase exists.",
    "cat": "WHY3PH",
    "id": "F08_002"
  },
  {
    "q": "Why is a single phase induction motor not inherently self-starting?",
    "a": "A single winding produces a pulsating field that resolves into two equal counter-rotating fields, giving zero net starting torque",
    "opts": [
      "A single winding produces a pulsating field that resolves into two equal counter-rotating fields, giving zero net starting torque",
      "Single phase supplies are always DC at the moment of starting",
      "Single phase motors have no rotor winding at all",
      "The frequency of a single phase supply is too low to start a motor"
    ],
    "exp": "A single phase winding alone produces a field pulsating along one fixed axis, which mathematically resolves into two counter-rotating fields of equal magnitude that cancel out net starting torque. This is why single phase motors need an auxiliary winding or capacitor to get going, while a three phase rotating field alone drags the rotor around.",
    "cat": "WHY3PH",
    "id": "F08_003"
  },
  {
    "q": "For a given power transmitted, why does three phase distribution need less conductor material than single phase?",
    "a": "Splitting the same power across three conductors, with the three phase geometry, works out to a lower total conductor cross section for the same loss",
    "opts": [
      "Splitting the same power across three conductors, with the three phase geometry, works out to a lower total conductor cross section for the same loss",
      "Three phase conductors do not need to be insulated as heavily",
      "Three phase current always flows at a lower voltage than single phase",
      "Three phase cables run cooler regardless of current, so thinner insulation suffices"
    ],
    "exp": "A single phase circuit needs two conductors each carrying the full current. Three phase splits that current across three conductors, and the geometry of the three phase relationships means less total conductor cross section is needed for the same power and loss, which matters on a ship where weight and space are always tight.",
    "cat": "WHY3PH",
    "id": "F08_004"
  },
  {
    "q": "What property falls out \"for free\" when three windings, spaced 120 degrees apart in space, are fed with three currents spaced 120 degrees apart in time?",
    "a": "A magnetic field of constant magnitude that physically rotates around the stator at synchronous speed",
    "opts": [
      "A magnetic field of constant magnitude that physically rotates around the stator at synchronous speed",
      "A magnetic field that pulsates but does not rotate",
      "A field that reverses direction once every revolution",
      "A field of constantly changing magnitude that stays fixed in space"
    ],
    "exp": "This rotating field is the property that makes three phase indispensable for motors. It has constant magnitude and physically rotates at synchronous speed, which is exactly what a single phase winding cannot produce alone.",
    "cat": "WHY3PH",
    "id": "F08_005"
  },
  {
    "q": "Why is a three phase induction motor inherently self-starting, unlike a single phase motor?",
    "a": "The rotating field alone drags the stationary rotor around, with no need for an auxiliary starting winding",
    "opts": [
      "The rotating field alone drags the stationary rotor around, with no need for an auxiliary starting winding",
      "Three phase motors always start on DC before switching to AC",
      "The rotor in a three phase motor is permanently magnetised",
      "Three phase supplies never pass through a current zero"
    ],
    "exp": "Switch a three phase motor onto the supply and the rotating field alone drags the rotor around from standstill. This is why every major shipboard motor, steering gear, bow thrusters, seawater pumps, is three phase rather than single phase.",
    "cat": "WHY3PH",
    "id": "F08_006"
  },
  {
    "q": "Aside from constant power and self-starting motors, what other practical benefit does three phase give a ship's electrical system?",
    "a": "Smaller total conductor cross section is needed for the same power transmitted, saving weight and space",
    "opts": [
      "Smaller total conductor cross section is needed for the same power transmitted, saving weight and space",
      "Three phase alternators never need voltage regulation",
      "Three phase systems eliminate the need for circuit breakers",
      "Three phase loads never draw reactive power"
    ],
    "exp": "The three headline reasons three phase is used are constant instantaneous power, an inherent self-starting rotating field, and less conductor material for the same power and loss, a real weight and space saving on board.",
    "cat": "WHY3PH",
    "id": "F08_007"
  },

  /* ═══════════ GENERATION ═══════════ */
  {
    "q": "In a two pole alternator, how many mechanical degrees apart are the three stator windings placed around the stator bore?",
    "a": "120 degrees",
    "opts": ["120 degrees", "90 degrees", "180 degrees", "60 degrees"],
    "exp": "The three stator windings are placed 120 mechanical degrees apart for a two pole machine. With more pole pairs the mechanical spacing differs, but the electrical displacement between the induced EMFs is still 120 degrees.",
    "cat": "GEN",
    "id": "F08_008"
  },
  {
    "q": "The three generated EMFs in a healthy alternator are written e_R = Em sin(wt), e_Y = Em sin(wt minus 120 degrees), and e_B equals:",
    "a": "Em sin(wt minus 240 degrees)",
    "opts": [
      "Em sin(wt minus 240 degrees)",
      "Em sin(wt minus 120 degrees)",
      "Em sin(wt plus 90 degrees)",
      "Em sin(2wt minus 240 degrees)"
    ],
    "exp": "Each winding's EMF peaks 120 degrees later than the one before it, so the third phase is displaced 240 degrees from the reference, e_B = Em sin(wt minus 240 degrees). All three have the same magnitude Em and the same frequency, only the phase differs.",
    "cat": "GEN",
    "id": "F08_009"
  },
  {
    "q": "Why is the 120 degree spacing between three phase windings not an arbitrary choice?",
    "a": "It is exactly the spacing that makes three equal sinusoids sum to zero at every instant and produces a smooth, circular rotating field",
    "opts": [
      "It is exactly the spacing that makes three equal sinusoids sum to zero at every instant and produces a smooth, circular rotating field",
      "It is simply a historical convention with no electrical basis",
      "It is chosen to match the 50 Hz supply frequency",
      "It is the minimum spacing needed to fit three windings physically into a stator"
    ],
    "exp": "Any other spacing leaves ripple in the summed power and produces a wobbling, non-circular field instead of a smooth rotating one. 120 degrees is the unique spacing, for three equal phases, that cancels the oscillating power terms and produces a constant magnitude rotating field.",
    "cat": "GEN",
    "id": "F08_010"
  },
  {
    "q": "Why does a healthy, balanced three phase source need no return conductor for the generated EMFs themselves?",
    "a": "At any instant, the three phase EMFs, being equal magnitude and 120 degrees apart, sum to zero",
    "opts": [
      "At any instant, the three phase EMFs, being equal magnitude and 120 degrees apart, sum to zero",
      "The EMFs are all direct current and require no return path",
      "The alternator frame itself carries all the return current",
      "Only one winding is active at any given instant"
    ],
    "exp": "Just as with the power terms, three equal amplitude sinusoids 120 degrees apart sum to zero at every instant, not just on average. This is the starting point for understanding why a balanced load draws zero neutral current.",
    "cat": "GEN",
    "id": "F08_011"
  },
  {
    "q": "For an alternator with more than one pole pair, how does the mechanical spacing of the stator windings compare to their electrical displacement?",
    "a": "The mechanical spacing differs from the two pole case, but the electrical displacement between the induced EMFs remains 120 degrees",
    "opts": [
      "The mechanical spacing differs from the two pole case, but the electrical displacement between the induced EMFs remains 120 degrees",
      "Both the mechanical spacing and the electrical displacement change together, staying equal to each other",
      "The electrical displacement increases in proportion to the number of poles",
      "Multi-pole alternators cannot produce a true three phase output"
    ],
    "exp": "The notes are explicit on this: for a two pole machine mechanical and electrical spacing are the same 120 degrees, but with more pole pairs the mechanical spacing differs even though the electrical displacement between phases is still 120 degrees.",
    "cat": "GEN",
    "id": "F08_012"
  },

  /* ═══════════ PHASE SEQUENCE ═══════════ */
  {
    "q": "Phase sequence (phase rotation) refers to:",
    "a": "The order in which the three phase voltages reach their peak, repeating cyclically",
    "opts": [
      "The order in which the three phase voltages reach their peak, repeating cyclically",
      "The number of poles in the alternator producing the supply",
      "The order in which fuses blow during a fault",
      "The angle between the neutral and any one phase"
    ],
    "exp": "Phase sequence is the order the three phase voltages peak in, standard marine practice being R then Y then B, repeating. It must be matched for the ship's supply, any alternator being paralleled, and any three phase motor's expected direction of rotation.",
    "cat": "SEQ",
    "id": "F08_013"
  },
  {
    "q": "What is the standard marine designation for phase sequence?",
    "a": "R-Y-B",
    "opts": ["R-Y-B", "B-Y-R", "R-B-Y", "Y-R-B"],
    "exp": "Standard marine practice designates the sequence R-Y-B (equivalently 1-2-3 or L1-L2-L3). Reversing that order, such as R-B-Y, is exactly what happens when two supply leads are swapped and reverses the motor's rotating field.",
    "cat": "SEQ",
    "id": "F08_014"
  },
  {
    "q": "What is the standard way to reverse the direction of a three phase induction motor?",
    "a": "Swap any two of the three supply leads",
    "opts": [
      "Swap any two of the three supply leads",
      "Swap all three supply leads simultaneously",
      "Reverse the polarity of the DC excitation supply",
      "Increase the supply frequency"
    ],
    "exp": "Swapping any two leads reverses the phase sequence seen by the motor (R-Y-B becomes R-B-Y), which reverses the rotating field and the rotor with it. Swapping all three leads changes nothing, since it is relative sequence, not absolute polarity, that determines rotation.",
    "cat": "SEQ",
    "id": "F08_015"
  },
  {
    "q": "Why does swapping all three supply leads to a three phase motor NOT reverse its direction of rotation?",
    "a": "It is the relative phase sequence that determines rotation direction, not the absolute polarity of the leads, and swapping all three leaves the relative sequence unchanged",
    "opts": [
      "It is the relative phase sequence that determines rotation direction, not the absolute polarity of the leads, and swapping all three leaves the relative sequence unchanged",
      "Three phase motors ignore lead polarity entirely",
      "Swapping all three leads trips the motor's protection relay before it can start",
      "The rotating field depends only on frequency, not on which lead carries which phase"
    ],
    "exp": "Only a change in the relative order between the three phases reverses the rotating field. Rotating all three leads together preserves that relative order, so the field, and the motor, still turn the same way.",
    "cat": "SEQ",
    "id": "F08_016"
  },
  {
    "q": "After a switchboard changeover, new motor installation, or reconnection following maintenance, what should be checked before starting rotating machinery?",
    "a": "Phase sequence, using a phase sequence indicator",
    "opts": [
      "Phase sequence, using a phase sequence indicator",
      "Only the supply frequency",
      "Only the insulation resistance of the cable",
      "Only the ambient temperature in the switchboard room"
    ],
    "exp": "Phase sequence must be verified after any work on a supply because running a pump or steering gear motor backwards can damage the driven equipment: a centrifugal pump running backwards can cavitate or fail to develop head, and a fan running backwards moves far less air and can overheat.",
    "cat": "SEQ",
    "id": "F08_017"
  },

  /* ═══════════ STAR AND DELTA CONNECTIONS ═══════════ */
  {
    "q": "In a star connected system, the phase voltage is the voltage measured between:",
    "a": "One line terminal and the star point",
    "opts": [
      "One line terminal and the star point",
      "Any two line terminals",
      "Any two of the finish ends of the windings only",
      "The star point and earth"
    ],
    "exp": "In star, one end of each winding is joined at a common star point, and the other end is a line terminal. The phase voltage, the voltage across a winding, is therefore measured from that line terminal to the star point.",
    "cat": "STARDELTA",
    "id": "F08_018"
  },
  {
    "q": "When deriving the line voltage in star from two phase voltages 120 degrees apart, why can you not simply double the phase voltage?",
    "a": "The two phase voltages are not in phase with each other, so their phasor difference, not their arithmetic sum, must be taken",
    "opts": [
      "The two phase voltages are not in phase with each other, so their phasor difference, not their arithmetic sum, must be taken",
      "Because line voltage is always less than phase voltage in star",
      "Because one of the two phase voltages is always negative",
      "Because star connections do not permit any voltage between two line terminals"
    ],
    "exp": "V_RY is the phasor difference V_R minus V_Y, with both phasors of equal magnitude 120 degrees apart. Drawing them tip to tail gives an isosceles triangle that must be solved with trigonometry, not simple addition, which is exactly where the root three factor comes from.",
    "cat": "STARDELTA",
    "id": "F08_019"
  },
  {
    "q": "In the star voltage triangle derivation, dropping a perpendicular bisector splits the isosceles triangle into two right triangles, each with a 30 degree angle at the star point. This leads directly to:",
    "a": "V_line = 2 x V_phase x cos(30 degrees) = root 3 x V_phase",
    "opts": [
      "V_line = 2 x V_phase x cos(30 degrees) = root 3 x V_phase",
      "V_line = 2 x V_phase x sin(30 degrees) = V_phase",
      "V_line = V_phase x cos(60 degrees)",
      "V_line = 3 x V_phase"
    ],
    "exp": "Each right triangle has hypotenuse V_line/2 and a 30 degree angle at the star point, so V_line = 2 x V_phase x cos(30 degrees) = 2 x V_phase x (root 3 / 2) = root 3 x V_phase, since 2 x (root 3/2) simplifies to root 3.",
    "cat": "STARDELTA",
    "id": "F08_020"
  },
  {
    "q": "In a star connection, why is the line current equal to the phase current, with no derivation needed?",
    "a": "Each line conductor connects to only one winding in series, so the same current flows through both",
    "opts": [
      "Each line conductor connects to only one winding in series, so the same current flows through both",
      "Because star connections always carry very low current",
      "Because the star point splits the current equally between three lines",
      "Because star windings are wound with three times the wire of delta windings"
    ],
    "exp": "In star, there is no splitting of current at the line terminal, the line conductor feeds directly into one winding in series, so I_line = I_phase directly. This contrasts with delta, where the line current is genuinely the phasor combination of two winding currents.",
    "cat": "STARDELTA",
    "id": "F08_021"
  },
  {
    "q": "In a delta connection, why is the phase voltage simply equal to the line voltage, with no derivation needed?",
    "a": "Each winding spans directly between two line terminals, and each line terminal sits at a junction between two windings",
    "opts": [
      "Each winding spans directly between two line terminals, and each line terminal sits at a junction between two windings",
      "Delta windings are always wound for exactly one third of the line voltage",
      "There is a hidden neutral point inside a delta connection that fixes phase voltage",
      "Delta phase voltage must always be calculated using the 30-60-90 triangle"
    ],
    "exp": "In delta, each winding is connected directly between two line terminals, so the full line voltage appears directly across the winding: V_line = V_phase in delta. This is the mirror image of star, where the voltage relationship needs deriving but the current relationship does not.",
    "cat": "STARDELTA",
    "id": "F08_022"
  },
  {
    "q": "The delta line current relationship, I_line = root 3 x I_phase, is derived by applying Kirchhoff's Current Law where?",
    "a": "At each line terminal junction, as the phasor difference of two adjacent phase currents 120 degrees apart",
    "opts": [
      "At each line terminal junction, as the phasor difference of two adjacent phase currents 120 degrees apart",
      "Across the star point, which delta also has",
      "By dividing the total power by the line voltage",
      "At the midpoint of each winding"
    ],
    "exp": "At each line terminal in delta, the line current is supplied by two phase currents from two different windings, and by KCL the line current is the phasor difference of those two, each of magnitude I_phase and 120 degrees apart, exactly the same triangle geometry used for star voltage.",
    "cat": "STARDELTA",
    "id": "F08_023"
  },
  {
    "q": "A star connected alternator winding has a phase voltage of 230 V. What line voltage does it produce?",
    "a": "About 398 V",
    "opts": ["About 398 V", "About 460 V", "About 133 V", "About 690 V"],
    "exp": "V_line = root 3 x V_phase = 1.732 x 230 = about 398 V. Doubling the phase voltage (460 V) ignores the phasor angle between the two windings, and dividing by root 3 instead of multiplying (133 V) inverts the relationship.",
    "cat": "STARDELTA",
    "id": "F08_024"
  },
  {
    "q": "A delta connected load draws a phase current of 15 A in each winding. What is the line current?",
    "a": "About 26 A",
    "opts": ["About 26 A", "About 7.5 A", "45 A", "About 8.7 A"],
    "exp": "I_line = root 3 x I_phase = 1.732 x 15 = about 26 A. Simply tripling the phase current (45 A) ignores the phasor angle, and 7.5 A comes from halving instead of applying the root 3 factor.",
    "cat": "STARDELTA",
    "id": "F08_025"
  },
  {
    "q": "According to the module's callout, which quantity gets the root 3 factor in star, and which gets it in delta?",
    "a": "Star gets root 3 on voltage; delta gets root 3 on current",
    "opts": [
      "Star gets root 3 on voltage; delta gets root 3 on current",
      "Star gets root 3 on current; delta gets root 3 on voltage",
      "Both star and delta apply root 3 to voltage only",
      "Both star and delta apply root 3 to current only"
    ],
    "exp": "Star windings share a common star point, so voltages must be phasor-subtracted across it, giving root 3 on voltage. Delta windings share a common junction, so currents must be phasor-subtracted at it, giving root 3 on current. Same 120 degree geometry, different quantity, depending on which two phasors meet at the shared point.",
    "cat": "STARDELTA",
    "id": "F08_026"
  },
  {
    "q": "Why is no neutral available from a delta connection?",
    "a": "Delta has no common point where all three windings meet; they form a closed triangular loop instead",
    "opts": [
      "Delta has no common point where all three windings meet; they form a closed triangular loop instead",
      "Delta connections are always used only with DC",
      "The neutral in delta is internally shorted to one of the line terminals",
      "Delta windings do not generate a phase voltage"
    ],
    "exp": "A neutral is brought out from a star point, the common junction of the three star-connected windings. Delta has no such common point, the windings form a closed loop end to end, so there is nothing to bring a neutral conductor out from.",
    "cat": "STARDELTA",
    "id": "F08_027"
  },

  /* ═══════════ TERMINAL BOX LINKS ═══════════ */
  {
    "q": "Using the IEC 60034-8 marking convention, what are the six terminal labels brought out for a dual connection motor?",
    "a": "U1, U2, V1, V2, W1, W2",
    "opts": ["U1, U2, V1, V2, W1, W2", "R1, R2, Y1, Y2, B1, B2", "A, B, C, N, E, G", "L1, L2, L3, N, PE, S"],
    "exp": "The three windings are labelled U1/U2, V1/V2, W1/W2 for their start and finish ends respectively. Older equipment may carry the legacy marking U/X, V/Y, W/Z instead, functionally identical.",
    "cat": "TERMBOX",
    "id": "F08_028"
  },
  {
    "q": "In the standard terminal box layout, why is the bottom row of finish ends (U2, V2, W2) offset by one position relative to the top row of start ends (U1, V1, W1)?",
    "a": "The offset lets the star and delta links sit as short bridging strips rather than long diagonal wires",
    "opts": [
      "The offset lets the star and delta links sit as short bridging strips rather than long diagonal wires",
      "The offset is required to prevent the windings from short circuiting",
      "The offset allows the terminal box to be smaller in every case",
      "The offset has no functional purpose, it is purely a labelling convention"
    ],
    "exp": "With U2 sitting below V1 rather than directly below U1, both the star bridges (bottom row) and the delta diagonals (top to offset bottom) end up as short, identical links rather than long crossed or diagonal wires.",
    "cat": "TERMBOX",
    "id": "F08_029"
  },
  {
    "q": "On older equipment carrying the legacy terminal marking U/X, V/Y, W/Z, how does this map onto the modern U1/U2 style marking?",
    "a": "U, V, W correspond to U1, V1, W1 and X, Y, Z correspond to U2, V2, W2",
    "opts": [
      "U, V, W correspond to U1, V1, W1 and X, Y, Z correspond to U2, V2, W2",
      "U, V, W correspond to U2, V2, W2 and X, Y, Z correspond to U1, V1, W1",
      "The legacy marking has no relationship to the modern one and cannot be converted",
      "X, Y, Z are always the star point terminals regardless of the winding"
    ],
    "exp": "The legacy marking is functionally identical to the modern one: U/V/W are the start ends (U1/V1/W1) and X/Y/Z are the finish ends (U2/V2/W2).",
    "cat": "TERMBOX",
    "id": "F08_030"
  },
  {
    "q": "To physically connect a motor's terminal box for star operation, which links are made?",
    "a": "Two short bridging links across the bottom row: U2 to V2, and V2 to W2, with supply going to U1, V1, W1",
    "opts": [
      "Two short bridging links across the bottom row: U2 to V2, and V2 to W2, with supply going to U1, V1, W1",
      "Three diagonal links: U1 to V2, V1 to W2, W1 to U2",
      "A single link joining U1 directly to U2",
      "All six terminals bridged together into one common point"
    ],
    "exp": "For star, the three finish ends (U2, V2, W2) are linked together with two short bridging links across the bottom row, forming the common star point. Nothing is linked on the top row, and supply connects only to U1, V1, W1.",
    "cat": "TERMBOX",
    "id": "F08_031"
  },
  {
    "q": "To physically connect a motor's terminal box for delta operation, which links are made?",
    "a": "Three diagonal links: U1 to V2, V1 to W2, W1 to U2, with supply still going to U1, V1, W1",
    "opts": [
      "Three diagonal links: U1 to V2, V1 to W2, W1 to U2, with supply still going to U1, V1, W1",
      "Two short bridging links across the bottom row: U2 to V2, and V2 to W2",
      "No links at all, delta requires the terminals to remain fully separate",
      "A single link joining V1 directly to W1"
    ],
    "exp": "Delta forms a closed loop by linking each winding's finish end to the next winding's start end: U2 to V1, V2 to W1, W2 to U1, or equivalently described as three diagonal links running from the top row down to the offset bottom row. Supply again lands on U1, V1, W1.",
    "cat": "TERMBOX",
    "id": "F08_032"
  },
  {
    "q": "An interviewer accepts a correct answer on V_line = root 3 x V_phase, then asks the candidate to show how they would physically link a motor's terminal box for that connection. What commonly catches candidates out here?",
    "a": "They memorised the line-phase formulae but never looked inside a real terminal box, so they cannot sketch the six terminals and links from memory",
    "opts": [
      "They memorised the line-phase formulae but never looked inside a real terminal box, so they cannot sketch the six terminals and links from memory",
      "They forget that terminal box wiring only applies to delta, not star",
      "They assume the terminal box question is identical to the line-phase voltage question",
      "They believe star and delta terminal boxes use a different number of terminals"
    ],
    "exp": "This is a deliberately separate question from the standalone line-phase relationship, and interviewers use it precisely because many candidates who quote the formula correctly have never actually looked inside a real terminal box or practised sketching the six terminals in their two offset rows.",
    "cat": "TERMBOX",
    "id": "F08_033"
  },
  {
    "q": "Is the question \"derive the line-phase voltage relationship in star\" the same question as \"show how you would wire a motor's terminal box for star\"?",
    "a": "No, these are two genuinely separate questions, commonly asked separately in interviews",
    "opts": [
      "No, these are two genuinely separate questions, commonly asked separately in interviews",
      "Yes, they are exactly the same question phrased two different ways",
      "Yes, but only for motors rated above 100 kW",
      "No, terminal box wiring is only relevant to delta, never to star"
    ],
    "exp": "The standalone question asks for the relationship between line and phase quantities given a star or delta connection. The terminal box question asks how the physical links inside a real motor are arranged to select star or delta. Mixing the two up, or assuming one covers the other, is a common way to lose marks.",
    "cat": "TERMBOX",
    "id": "F08_034"
  },

  /* ═══════════ THREE PHASE POWER ═══════════ */
  {
    "q": "Treated as a single phase circuit on its own, the power drawn by one winding of a three phase load is:",
    "a": "P = V_phase x I_phase x cos(phi)",
    "opts": [
      "P = V_phase x I_phase x cos(phi)",
      "P = root 3 x V_phase x I_phase",
      "P = V_phase x I_phase x sin(phi)",
      "P = 3 x V_phase x I_phase"
    ],
    "exp": "Each winding, taken alone, obeys the standard single phase real power formula, phase voltage times phase current times cos(phi), where phi is set by the load's power factor. Total three phase power in phase quantities is then three times this figure.",
    "cat": "PWR",
    "id": "F08_035"
  },
  {
    "q": "For a balanced three phase load, total power expressed in phase quantities is:",
    "a": "P = 3 x V_phase x I_phase x cos(phi)",
    "opts": [
      "P = 3 x V_phase x I_phase x cos(phi)",
      "P = root 3 x V_phase x I_phase x cos(phi)",
      "P = V_phase x I_phase x cos(phi) divided by 3",
      "P = 3 x V_phase x I_phase x sin(phi)"
    ],
    "exp": "A balanced load has three identical windings, so total power is simply three times the single winding power, 3 x V_phase x I_phase x cos(phi). This form is correct but awkward on a ship, where switchboard meters read line quantities.",
    "cat": "PWR",
    "id": "F08_036"
  },
  {
    "q": "Substituting star's relationships (V_phase = V_line / root 3, I_phase = I_line) into P = 3V_phaseI_phasecos(phi) gives:",
    "a": "P = root 3 x V_line x I_line x cos(phi)",
    "opts": [
      "P = root 3 x V_line x I_line x cos(phi)",
      "P = 3 x V_line x I_line x cos(phi)",
      "P = V_line x I_line x cos(phi) / root 3",
      "P = V_line x I_line x cos(phi)"
    ],
    "exp": "P = 3 x (V_line / root 3) x I_line x cos(phi) = (3 / root 3) x V_line x I_line x cos(phi), and 3 / root 3 simplifies to root 3, giving the standard line-quantity power formula.",
    "cat": "PWR",
    "id": "F08_037"
  },
  {
    "q": "Substituting delta's relationships (V_phase = V_line, I_phase = I_line / root 3) into P = 3V_phaseI_phasecos(phi) gives:",
    "a": "P = root 3 x V_line x I_line x cos(phi), the same result as star",
    "opts": [
      "P = root 3 x V_line x I_line x cos(phi), the same result as star",
      "P = 3 x V_line x I_line x cos(phi), three times the star result",
      "P = V_line x I_line x cos(phi) / 3, one third of the star result",
      "A different formula from star, since delta has no phase to star point voltage"
    ],
    "exp": "P = 3 x V_line x (I_line / root 3) x cos(phi) = (3 / root 3) x V_line x I_line x cos(phi) = root 3 x V_line x I_line x cos(phi). Both connections collapse to the same line-quantity formula, exactly as expected since it must describe the same physical machine regardless of internal connection.",
    "cat": "PWR",
    "id": "F08_038"
  },
  {
    "q": "Why is it expected that star and delta both give the same P = root 3 x V_line x I_line x cos(phi) formula in line quantities?",
    "a": "The line-quantity formula must describe the same physical machine's power output regardless of which internal connection it happens to use",
    "opts": [
      "The line-quantity formula must describe the same physical machine's power output regardless of which internal connection it happens to use",
      "It is a coincidence with no underlying physical reason",
      "Because star and delta always use identical line and phase voltages",
      "Because power factor is always unity in three phase systems"
    ],
    "exp": "A switchboard meter measuring line voltage and line current cannot know or care whether the load inside is star or delta connected; the power delivered is a physical fact independent of internal wiring, so the line-quantity formula must come out the same either way.",
    "cat": "PWR",
    "id": "F08_039"
  },
  {
    "q": "A three phase load draws 50 A of line current from a 440 V line supply at a power factor of 0.8. What is the power drawn?",
    "a": "About 30.5 kW",
    "opts": ["About 30.5 kW", "17.6 kW", "38.1 kW", "22 kW"],
    "exp": "P = root 3 x V_line x I_line x cos(phi) = 1.732 x 440 x 50 x 0.8 = about 30,483 W = 30.5 kW. 17.6 kW comes from using the single phase formula without root 3, and 38.1 kW comes from forgetting to include power factor.",
    "cat": "PWR",
    "id": "F08_040"
  },
  {
    "q": "A three phase motor is rated at 100 kW, supplied at 440 V line voltage with a power factor of 0.85. What line current does it draw?",
    "a": "About 154 A",
    "opts": ["About 154 A", "About 267 A", "About 131 A", "About 218 A"],
    "exp": "I_line = P / (root 3 x V_line x cos(phi)) = 100,000 / (1.732 x 440 x 0.85) = 100,000 / 647.6 = about 154 A. 267 A results from forgetting the root 3 factor entirely.",
    "cat": "PWR",
    "id": "F08_041"
  },
  {
    "q": "The formula for three phase reactive power, matching the pattern of the real power formula, is:",
    "a": "Q = root 3 x V_line x I_line x sin(phi)",
    "opts": [
      "Q = root 3 x V_line x I_line x sin(phi)",
      "Q = root 3 x V_line x I_line x cos(phi)",
      "Q = 3 x V_line x I_line x sin(phi)",
      "Q = V_line x I_line x sin(phi)"
    ],
    "exp": "Reactive power follows the same root 3 line-quantity pattern as real power, but uses sin(phi) instead of cos(phi): Q = root 3 x V_line x I_line x sin(phi). Apparent power drops the trig term entirely: S = root 3 x V_line x I_line.",
    "cat": "PWR",
    "id": "F08_042"
  },
  {
    "q": "If asked where the root 3 in the three phase power formula physically comes from, the correct answer is:",
    "a": "It comes from converting phase quantities to line quantities in star or delta, not from anything mysterious about three phase power itself",
    "opts": [
      "It comes from converting phase quantities to line quantities in star or delta, not from anything mysterious about three phase power itself",
      "It is an empirical correction factor with no derivation",
      "It arises because three phase alternators are always 20 percent less efficient than single phase",
      "It comes from the ratio of synchronous speed to supply frequency"
    ],
    "exp": "The underlying statement is always just three lots of single phase power, V_phaseI_phasecos(phi), added together. The root 3 appears only when that expression is rewritten in terms of the line voltage and line current that a switchboard meter actually reads.",
    "cat": "PWR",
    "id": "F08_043"
  },

  /* ═══════════ BALANCED / UNBALANCED LOADS ═══════════ */
  {
    "q": "A balanced three phase load is defined as one that draws:",
    "a": "Identical current magnitude on all three phases, with identical power factor on each",
    "opts": [
      "Identical current magnitude on all three phases, with identical power factor on each",
      "Zero current on one phase at all times",
      "Current only through the neutral conductor",
      "The same current as a single phase load of equal kW rating"
    ],
    "exp": "A balanced load has equal current magnitude and equal power factor on all three phases. The resulting three line currents are then equal-length phasors 120 degrees apart, which sum to zero at every instant, exactly as with the generated EMFs.",
    "cat": "BALANCE",
    "id": "F08_044"
  },
  {
    "q": "On a three wire system with no neutral, what happens when the load becomes unbalanced?",
    "a": "The star point voltage shifts away from true electrical centre, a condition called neutral point displacement, distorting the voltage each phase of the load sees",
    "opts": [
      "The star point voltage shifts away from true electrical centre, a condition called neutral point displacement, distorting the voltage each phase of the load sees",
      "The unbalanced current simply disappears with no effect",
      "The supply frequency automatically compensates for the imbalance",
      "All three phase voltages collapse to zero"
    ],
    "exp": "On a four wire star system, unbalance current has a return path through the neutral. Without a neutral, the residual current has nowhere to flow, so instead the star point itself shifts away from true electrical centre, distorting the voltage seen by the unbalanced load.",
    "cat": "BALANCE",
    "id": "F08_045"
  },
  {
    "q": "Why does an unbalanced load waste generator capacity on a ship?",
    "a": "The generator must be rated for the highest of the three phase currents, even though the other two phases carry less",
    "opts": [
      "The generator must be rated for the highest of the three phase currents, even though the other two phases carry less",
      "Unbalanced loads always draw more total kW than balanced ones",
      "Unbalance causes the generator's frequency to fall permanently",
      "Unbalance trips the generator's main breaker automatically"
    ],
    "exp": "A generator is limited by the heating in its most heavily loaded phase, so it effectively has to be rated for the worst-case phase current even while the other two phases run below their share, wasting overall capacity.",
    "cat": "BALANCE",
    "id": "F08_046"
  },
  {
    "q": "Besides wasting generator capacity, what other effect does an unbalanced supply have on a connected three phase motor?",
    "a": "It heats windings unevenly and adds a braking torque component on top of normal load heating",
    "opts": [
      "It heats windings unevenly and adds a braking torque component on top of normal load heating",
      "It has no effect on the motor provided the average current stays within rating",
      "It automatically increases the motor's power factor",
      "It reverses the motor's direction of rotation"
    ],
    "exp": "An unbalanced supply heats the three windings unequally and introduces a braking torque component in the motor, on top of the heating from normal load. This is exactly why loads are deliberately distributed across the three phases to keep unbalance small.",
    "cat": "BALANCE",
    "id": "F08_047"
  },

  /* ═══════════ THE NEUTRAL ═══════════ */
  {
    "q": "Where is the neutral conductor brought out from?",
    "a": "The star point of a star-connected source",
    "opts": [
      "The star point of a star-connected source",
      "Any one of the three line terminals in a delta source",
      "The centre of any single winding",
      "The alternator's rotor shaft"
    ],
    "exp": "The neutral is brought out from the star point of a star-connected source. No neutral is available from delta, since delta has no common point where the three windings meet.",
    "cat": "NEUTRAL",
    "id": "F08_048"
  },
  {
    "q": "With the star point referenced or earthed, what voltage does the neutral fix each phase at, relative to itself?",
    "a": "V_line / root 3",
    "opts": ["V_line / root 3", "V_line x root 3", "V_line / 3", "V_line x 2"],
    "exp": "The neutral gives a stable phase-to-neutral voltage of V_line / root 3, the same phase voltage figure derived earlier for a star connection, letting single phase loads be fed at that lower, stable voltage rather than the higher phase-to-phase voltage.",
    "cat": "NEUTRAL",
    "id": "F08_049"
  },
  {
    "q": "What current flows in the neutral of a perfectly balanced star-connected load?",
    "a": "Zero",
    "opts": ["Zero", "Equal to one phase current", "Equal to root 3 times one phase current", "Equal to the sum of all three phase currents added arithmetically"],
    "exp": "A perfectly balanced load draws zero neutral current, since the three equal-magnitude, 120 degree spaced phase currents sum to zero at every instant. Only the unbalanced residual actually needs to flow in the neutral.",
    "cat": "NEUTRAL",
    "id": "F08_050"
  },
  {
    "q": "What does a four wire star distribution system (three lines plus neutral) allow that a three wire system does not?",
    "a": "Feeding both three phase loads (phase to phase) and single phase loads (phase to neutral) from the same source",
    "opts": [
      "Feeding both three phase loads (phase to phase) and single phase loads (phase to neutral) from the same source",
      "Running the system at twice the normal line voltage",
      "Eliminating the need for any earthing arrangement",
      "Doubling the power factor of connected loads"
    ],
    "exp": "The fourth wire, the neutral, lets one section of the distribution feed three phase motors phase to phase and single phase loads such as lighting phase to neutral, all from the same star-connected source.",
    "cat": "NEUTRAL",
    "id": "F08_051"
  },

  /* ═══════════ SINGLE PHASING ═══════════ */
  {
    "q": "Single phasing is best defined as:",
    "a": "A running three phase motor loses one of its three supply phases while the other two remain live, and it keeps turning",
    "opts": [
      "A running three phase motor loses one of its three supply phases while the other two remain live, and it keeps turning",
      "A motor that fails to start at all because it was only ever wired for one phase",
      "A motor that trips instantly the moment any phase fluctuates",
      "A generator producing only one phase output by design"
    ],
    "exp": "Single phasing specifically describes an already-running motor that loses one phase but continues turning on the remaining two. It is distinct from a motor that fails to start on only two phases, which typically stalls with high current instead.",
    "cat": "SPHASE",
    "id": "F08_052"
  },
  {
    "q": "How does single phasing differ from a motor that simply fails to start when only two of its three phases are energised?",
    "a": "Single phasing describes an already-running motor continuing to turn on two phases after losing the third, not a motor attempting to start on two phases",
    "opts": [
      "Single phasing describes an already-running motor continuing to turn on two phases after losing the third, not a motor attempting to start on two phases",
      "There is no difference, both terms describe exactly the same condition",
      "Single phasing only applies to single phase motors, never three phase ones",
      "A motor that fails to start on two phases is more dangerous than one that is single phasing"
    ],
    "exp": "A motor attempting to start on only two phases typically cannot, or stalls loudly with high current. Single phasing is specifically the case of a motor already running normally that loses one phase and keeps turning on the other two, which is the more insidious condition.",
    "cat": "SPHASE",
    "id": "F08_053"
  },
  {
    "q": "Why is single phasing described as a hidden hazard?",
    "a": "There is no dramatic event, the motor keeps turning and may look fine at a casual glance while its windings overheat",
    "opts": [
      "There is no dramatic event, the motor keeps turning and may look fine at a casual glance while its windings overheat",
      "It always trips the main circuit breaker within seconds, giving no time to react",
      "It is impossible to detect with any instrument",
      "It only occurs on motors that are already faulty"
    ],
    "exp": "Unlike a dead short or total loss of supply, single phasing produces no obvious dramatic event. The motor keeps running and may appear normal, while the two surviving windings quietly overheat from carrying more than their rated current.",
    "cat": "SPHASE",
    "id": "F08_054"
  },
  {
    "q": "Which of the following is NOT listed as a typical cause of single phasing?",
    "a": "The motor's supply frequency drifting slightly from 50 Hz",
    "opts": [
      "The motor's supply frequency drifting slightly from 50 Hz",
      "A blown fuse on one phase",
      "A failed contactor pole",
      "A loose or corroded terminal connection"
    ],
    "exp": "A blown fuse, a failed contactor pole, a loose or corroded terminal, or a broken conductor can each remove one supply phase and cause single phasing. A small frequency drift does not remove a phase and is not a listed cause.",
    "cat": "SPHASE",
    "id": "F08_055"
  },
  {
    "q": "When a motor loses one phase and single phases, roughly how much does current in the surviving two phases rise, as an order of magnitude guide?",
    "a": "In the region of root 3, roughly 173 percent of the previous per-phase current",
    "opts": [
      "In the region of root 3, roughly 173 percent of the previous per-phase current",
      "Exactly 50 percent, always, regardless of loading",
      "It always falls, since one winding is no longer drawing current",
      "It rises to exactly ten times the rated current in every case"
    ],
    "exp": "If the motor must still deliver roughly the same power from two windings that three previously shared, each remaining winding's current rises by a factor in the region of root 3. This is explicitly an order-of-magnitude guide, since the real rise depends on loading at the moment of the fault, and some sources cite figures up to roughly double rated current.",
    "cat": "SPHASE",
    "id": "F08_056"
  },
  {
    "q": "Why might a conventional overload relay, sized for general overcurrent, fail to catch single phasing on a lightly loaded motor?",
    "a": "The absolute current in the surviving phases may not cross the relay's fixed trip threshold even though the motor is now running unbalanced",
    "opts": [
      "The absolute current in the surviving phases may not cross the relay's fixed trip threshold even though the motor is now running unbalanced",
      "Overload relays only monitor voltage, never current",
      "Overload relays are physically incapable of sensing any AC current",
      "A lightly loaded motor draws zero current, so no relay could ever trip"
    ],
    "exp": "A conventional overload relay watches for current exceeding a single fixed threshold. On a lightly loaded motor, the raised current from single phasing may still sit below that threshold, so the relay never trips even though the motor is running dangerously unbalanced.",
    "cat": "SPHASE",
    "id": "F08_057"
  },
  {
    "q": "What is the reliable form of protection against single phasing?",
    "a": "A dedicated current unbalance (phase failure) relay, comparing the three phase currents against each other rather than a single fixed threshold",
    "opts": [
      "A dedicated current unbalance (phase failure) relay, comparing the three phase currents against each other rather than a single fixed threshold",
      "Increasing the setting of the standard overload relay",
      "Fitting a larger fuse on each phase",
      "Running the motor permanently underloaded"
    ],
    "exp": "A current unbalance, or phase failure, relay trips on the asymmetry between the three phase currents itself, rather than relying on an absolute current threshold, catching single phasing even when the motor is lightly loaded. Modern motor protection relays typically combine this with thermal overload in one unit.",
    "cat": "SPHASE",
    "id": "F08_058"
  },

  /* ═══════════ PARALLELING ALTERNATORS ═══════════ */
  {
    "q": "Which four conditions must be matched before an incoming alternator's breaker is closed onto a live busbar?",
    "a": "Voltage, frequency, phase sequence, and phase angle",
    "opts": [
      "Voltage, frequency, phase sequence, and phase angle",
      "Voltage, power factor, phase sequence, and kVA rating",
      "Frequency, phase angle, insulation resistance, and earth fault status",
      "Voltage, current, phase sequence, and power"
    ],
    "exp": "The four conditions are voltage (matched via AVR/excitation), frequency (matched via governor), phase sequence (a fixed wiring property, checked once), and phase angle at the instant of closing (what the synchroscope or lamps watch).",
    "cat": "PARALLEL",
    "id": "F08_059"
  },
  {
    "q": "Why is normal practice to bring the incoming machine's frequency marginally higher than the busbar's before paralleling?",
    "a": "So that once paralleled, the incoming machine naturally tends to pick up load rather than being driven as a motor by the bus",
    "opts": [
      "So that once paralleled, the incoming machine naturally tends to pick up load rather than being driven as a motor by the bus",
      "Because a lower frequency would prevent the breaker from closing at all",
      "Because the synchroscope only works if the incoming machine runs slower than the bus",
      "To reduce the incoming machine's terminal voltage automatically"
    ],
    "exp": "Running marginally faster than the bus ensures that once the breaker closes, the incoming machine tends to pick up load naturally. If it were slightly slower, the bus would instead tend to drive it as a motor, drawing power from the system rather than supplying it.",
    "cat": "PARALLEL",
    "id": "F08_060"
  },
  {
    "q": "Of the four paralleling conditions, which one only needs checking once, at commissioning, rather than every time?",
    "a": "Phase sequence",
    "opts": ["Phase sequence", "Voltage", "Frequency", "Phase angle"],
    "exp": "Phase sequence is a fixed property of the wiring rather than something that drifts, so once verified correct at commissioning it does not need re-checking each time. Voltage, frequency, and phase angle must all be checked and matched at every paralleling evolution.",
    "cat": "PARALLEL",
    "id": "F08_061"
  },
  {
    "q": "On a synchroscope, what does slow rotation of the pointer indicate compared to fast rotation?",
    "a": "Slow rotation means the incoming machine's frequency is close to the bus frequency; fast rotation means they are further apart",
    "opts": [
      "Slow rotation means the incoming machine's frequency is close to the bus frequency; fast rotation means they are further apart",
      "Slow rotation means the incoming voltage is too low; fast rotation means it is too high",
      "Rotation speed indicates phase sequence, not frequency difference",
      "The synchroscope pointer rotates at a fixed speed regardless of frequency difference"
    ],
    "exp": "The pointer's rotation rate reflects the frequency difference between the incoming machine and the bus. Slow rotation means the frequencies are close together, fast rotation means they are further apart, and the direction of rotation (fast or slow) indicates whether the incoming machine is running faster or slower than the bus.",
    "cat": "PARALLEL",
    "id": "F08_062"
  },
  {
    "q": "In the dark lamp synchronizing method, when is the breaker closed?",
    "a": "In the middle of the period when the lamp is fully dark",
    "opts": [
      "In the middle of the period when the lamp is fully dark",
      "At the instant the lamp reaches its brightest point",
      "As soon as the lamp first begins to dim",
      "Exactly halfway between dark and bright"
    ],
    "exp": "The dark lamp goes fully dark at the instant the two voltages are in phase and is brightest at exact phase opposition, so the breaker is closed in the middle of the dark period. Its weakness is that darkness is hard to judge precisely, since the eye compares off against just barely off.",
    "cat": "PARALLEL",
    "id": "F08_063"
  },
  {
    "q": "In the two bright, one dark lamp method, what indicates the correct instant for paralleling?",
    "a": "Two lamps brighten together while the third dims to its darkest point at the same instant",
    "opts": [
      "Two lamps brighten together while the third dims to its darkest point at the same instant",
      "All three lamps go fully dark simultaneously",
      "All three lamps reach maximum brightness simultaneously",
      "One lamp flickers rapidly while the other two stay constant"
    ],
    "exp": "As the machines approach synchronism, two lamps brighten together while the third dims towards darkness, reaching correct phase match when the dark lamp is dimmest and the other two are equally bright. This is a more distinct visual event than watching a single dark lamp, and generally easier to judge.",
    "cat": "PARALLEL",
    "id": "F08_064"
  },
  {
    "q": "Compared to the single dark lamp method, why is the two bright, one dark method generally preferred?",
    "a": "It gives a more distinct visual event to judge, and the brightening/dimming sequence also shows whether the incoming machine is running fast or slow",
    "opts": [
      "It gives a more distinct visual event to judge, and the brightening/dimming sequence also shows whether the incoming machine is running fast or slow",
      "It requires no synchroscope backup at all",
      "It works even when the phase sequence is incorrect",
      "It eliminates the need to match voltage before closing the breaker"
    ],
    "exp": "Judging exact darkness in a single lamp is difficult since the eye compares off against just barely off. The two bright, one dark arrangement gives a clearer transition to watch, and additionally the pattern of which lamps brighten or dim reveals whether the incoming machine is fast or slow relative to the bus.",
    "cat": "PARALLEL",
    "id": "F08_065"
  },
  {
    "q": "What happens electrically and mechanically if an alternator's breaker is closed significantly out of phase with the busbar?",
    "a": "A very large circulating current flows between the two low impedance sources, and a severe mechanical torque transient shocks both machines' shafts and couplings",
    "opts": [
      "A very large circulating current flows between the two low impedance sources, and a severe mechanical torque transient shocks both machines' shafts and couplings",
      "Nothing significant happens provided both machines are at the correct voltage",
      "The incoming machine simply fails to pick up any load, with no other effect",
      "The busbar frequency permanently shifts to match the incoming machine"
    ],
    "exp": "With both machines being low impedance sources fighting each other across the closed breaker, even a modest phase mismatch drives a very large circulating current, far above normal load current, which can trip protection and stress windings and contacts, plus a sudden severe torque transient on both machines' shafts, couplings and bearings, similar to or worse than an across the line motor start.",
    "cat": "PARALLEL",
    "id": "F08_066"
  }

]);

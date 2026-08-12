window.loadQuizzes("F17_Electronics", [

  /* ═══════════ SEMICONDUCTORS AND DOPING ═══════════ */
  {
    "q": "What makes a semiconductor different from a conductor and an insulator?",
    "a": "Its conductivity lies between the two and can be deliberately controlled by doping",
    "opts": [
      "Its conductivity lies between the two and can be deliberately controlled by doping",
      "It conducts perfectly at all temperatures",
      "It is always made from a metal alloy",
      "It has more free electrons than any conductor"
    ],
    "exp": "A semiconductor such as silicon sits between a conductor (huge free electrons) and an insulator (almost none), and critically its conductivity can be controlled deliberately through doping. That controllability is the entire reason semiconductors are useful.",
    "cat": "SEMI",
    "id": "F17_001"
  },
  {
    "q": "Why does pure (intrinsic) silicon conduct poorly at room temperature?",
    "a": "Every outer electron is tied up in a covalent bond, leaving very few free to move",
    "opts": [
      "Every outer electron is tied up in a covalent bond, leaving very few free to move",
      "Silicon atoms have no outer shell electrons at all",
      "Silicon is naturally a perfect insulator at any temperature",
      "Pure silicon contains no atoms capable of conducting"
    ],
    "exp": "In a pure silicon crystal each atom shares one electron with each of four neighbours, forming four covalent bonds, so nearly every outer electron is locked in place. Only a small number of thermally broken bonds allow any conduction at all.",
    "cat": "SEMI",
    "id": "F17_002"
  },
  {
    "q": "Doping silicon with a pentavalent impurity such as phosphorus or arsenic produces:",
    "a": "N-type material, with an excess of free electrons",
    "opts": [
      "N-type material, with an excess of free electrons",
      "P-type material, with an excess of holes",
      "Intrinsic silicon with no change in carriers",
      "A material with no free charge carriers at all"
    ],
    "exp": "A pentavalent atom has five outer electrons; four form the usual covalent bonds and the fifth is loosely held and easily freed. The excess of these free electrons, negative carriers, is why it is called N-type.",
    "cat": "SEMI",
    "id": "F17_003"
  },
  {
    "q": "Doping silicon with a trivalent impurity such as boron or gallium produces:",
    "a": "P-type material, with an excess of holes",
    "opts": [
      "P-type material, with an excess of holes",
      "N-type material, with an excess of free electrons",
      "A perfect conductor with no depletion behaviour",
      "Material identical in behaviour to pure silicon"
    ],
    "exp": "A trivalent atom has only three outer electrons, so it can only form three of the four covalent bonds a silicon atom normally makes, leaving a hole. The excess of these mobile, positive-behaving holes gives P-type material.",
    "cat": "SEMI",
    "id": "F17_004"
  },
  {
    "q": "In N-type material, what are the majority and minority carriers respectively?",
    "a": "Electrons are majority carriers, holes are minority carriers",
    "opts": [
      "Electrons are majority carriers, holes are minority carriers",
      "Holes are majority carriers, electrons are minority carriers",
      "Both electrons and holes are majority carriers in equal number",
      "Neither electrons nor holes carry any current in N-type material"
    ],
    "exp": "The donor impurity releases free electrons in excess, making them the majority carriers, while a small thermally generated population of holes forms the minority carriers.",
    "cat": "SEMI",
    "id": "F17_005"
  },
  {
    "q": "Does doping add or remove any net electric charge from a piece of silicon?",
    "a": "No, both N-type and P-type silicon remain electrically neutral overall",
    "opts": [
      "No, both N-type and P-type silicon remain electrically neutral overall",
      "Yes, N-type silicon becomes negatively charged overall",
      "Yes, P-type silicon becomes positively charged overall",
      "Yes, both types become charged but with opposite signs"
    ],
    "exp": "A donor atom still has all its protons, it has simply released one electron to wander the lattice; the material as a whole stays neutral. What doping changes is the number of free charge carriers available to move, not the net charge.",
    "cat": "SEMI",
    "id": "F17_006"
  },

  /* ═══════════ PN JUNCTION ═══════════ */
  {
    "q": "What is the depletion layer at a PN junction?",
    "a": "A carrier-free region at the junction, created by diffusion, with fixed ion charges either side",
    "opts": [
      "A carrier-free region at the junction, created by diffusion, with fixed ion charges either side",
      "A layer of pure metal deposited between the P and N regions",
      "The region where the highest concentration of free carriers exists",
      "A physical air gap left between the two doped regions"
    ],
    "exp": "As free electrons and holes diffuse across the junction and recombine, they leave behind fixed positive ions on the N-side and fixed negative ions on the P-side, forming a carrier-free depletion layer with an internal barrier field.",
    "cat": "PN",
    "id": "F17_007"
  },
  {
    "q": "The barrier potential of a silicon PN junction is approximately:",
    "a": "0.7 V",
    "opts": ["0.7 V", "5 V", "0.3 V", "12 V"],
    "exp": "Silicon has a barrier potential of roughly 0.7 V, which must be exceeded in forward bias before significant current flows. Germanium's barrier is lower, around 0.3 V.",
    "cat": "PN",
    "id": "F17_008"
  },
  {
    "q": "What happens to the depletion layer when a PN junction is forward biased?",
    "a": "It narrows, and eventually collapses once the applied voltage exceeds the barrier potential",
    "opts": [
      "It narrows, and eventually collapses once the applied voltage exceeds the barrier potential",
      "It widens, blocking current flow completely",
      "It stays exactly the same width regardless of bias",
      "It disappears immediately at any applied voltage, however small"
    ],
    "exp": "In forward bias the external field pushes majority carriers toward the junction, narrowing the depletion layer. Once the applied voltage exceeds the barrier potential (about 0.7 V for silicon), majority carriers stream across freely.",
    "cat": "PN",
    "id": "F17_009"
  },
  {
    "q": "What happens to the depletion layer when a PN junction is reverse biased?",
    "a": "It widens, strengthening the barrier and blocking majority-carrier current",
    "opts": [
      "It widens, strengthening the barrier and blocking majority-carrier current",
      "It narrows, allowing current to flow freely",
      "It collapses entirely, exactly as in forward bias",
      "It has no effect on current in either direction"
    ],
    "exp": "Reverse bias pulls majority carriers away from the junction on both sides, widening the depletion layer and strengthening the barrier so almost no majority-carrier current can cross.",
    "cat": "PN",
    "id": "F17_010"
  },
  {
    "q": "What carries the small leakage current that still flows in a reverse-biased PN junction?",
    "a": "Minority carriers drifting across the junction",
    "opts": [
      "Minority carriers drifting across the junction",
      "Majority carriers forced backward through the barrier",
      "Free ions released from the crystal lattice",
      "No current at all flows under reverse bias, ever"
    ],
    "exp": "A tiny population of thermally generated minority carriers, electrons in the P-side and holes in the N-side, drift the other way and produce a small leakage current, even though majority-carrier flow is blocked.",
    "cat": "PN",
    "id": "F17_011"
  },
  {
    "q": "A diode is built from:",
    "a": "A single PN junction, with the anode from the P-side and the cathode from the N-side",
    "opts": [
      "A single PN junction, with the anode from the P-side and the cathode from the N-side",
      "Two PN junctions back to back, like a transistor",
      "A pure intrinsic silicon crystal with no doping at all",
      "Three doped regions in sequence"
    ],
    "exp": "A diode is simply a single PN junction with two leads brought out: the anode from the P-side and the cathode from the N-side. Its one-way conduction is the basis of rectification.",
    "cat": "PN",
    "id": "F17_012"
  },

  /* ═══════════ THE BIPOLAR JUNCTION TRANSISTOR ═══════════ */
  {
    "q": "What are the three terminals of a bipolar junction transistor?",
    "a": "Emitter, base and collector",
    "opts": [
      "Emitter, base and collector",
      "Anode, cathode and gate",
      "Source, drain and gate",
      "Positive, negative and neutral"
    ],
    "exp": "A BJT has emitter, base and collector terminals. Anode/cathode/gate and source/drain/gate belong to other devices (thyristors and field-effect transistors respectively), not the BJT.",
    "cat": "TRANS",
    "id": "F17_013"
  },
  {
    "q": "Why is the base region of a transistor made extremely thin and lightly doped?",
    "a": "So most carriers injected by the emitter shoot straight across to the collector instead of recombining in the base",
    "opts": [
      "So most carriers injected by the emitter shoot straight across to the collector instead of recombining in the base",
      "So the base can carry the largest current of the three terminals",
      "So the base physically blocks all current between emitter and collector",
      "Because the base does not need to conduct any current at all"
    ],
    "exp": "The thin, lightly doped base lets most emitter-injected carriers pass straight through to the collector, with only a small fraction recombining as base current. That is what allows a small base current to control a much larger collector current.",
    "cat": "TRANS",
    "id": "F17_014"
  },
  {
    "q": "The ratio of collector current to base current in a transistor is called:",
    "a": "Current gain, beta (or hFE)",
    "opts": [
      "Current gain, beta (or hFE)",
      "Power factor",
      "Barrier potential",
      "Saturation voltage"
    ],
    "exp": "Beta (or hFE) is the current gain, typically 50 to a few hundred for a general-purpose transistor, and defines IC = beta x IB in the active region.",
    "cat": "TRANS",
    "id": "F17_015"
  },
  {
    "q": "In the cutoff region of a transistor, the junction bias condition is:",
    "a": "Both junctions reverse biased",
    "opts": [
      "Both junctions reverse biased",
      "Both junctions forward biased",
      "Base-emitter forward biased, base-collector reverse biased",
      "Base-collector forward biased, base-emitter reverse biased"
    ],
    "exp": "In cutoff both junctions are reverse biased, so no base current and no collector current flow, and the transistor is effectively an open circuit, used as the OFF state of a switch.",
    "cat": "TRANS",
    "id": "F17_016"
  },
  {
    "q": "In the active region of a transistor, the junction bias condition is:",
    "a": "Base-emitter forward biased, base-collector reverse biased",
    "opts": [
      "Base-emitter forward biased, base-collector reverse biased",
      "Both junctions reverse biased",
      "Both junctions forward biased",
      "Base-collector forward biased, base-emitter reverse biased"
    ],
    "exp": "The active region requires the base-emitter junction forward biased and the base-collector junction reverse biased, giving collector current proportional to base current, IC = beta x IB. This is the region used for amplification.",
    "cat": "TRANS",
    "id": "F17_017"
  },
  {
    "q": "In the saturation region of a transistor, the junction bias condition is:",
    "a": "Both junctions forward biased",
    "opts": [
      "Both junctions forward biased",
      "Both junctions reverse biased",
      "Base-emitter forward biased, base-collector reverse biased",
      "Neither junction is biased at all"
    ],
    "exp": "In saturation, base current has been driven well beyond what is needed for maximum collector current, forward biasing both junctions and collapsing collector-emitter voltage to a small residual value, used as the ON state of a switch.",
    "cat": "TRANS",
    "id": "F17_018"
  },
  {
    "q": "A transistor used as an amplifier is deliberately kept in which region, and how is it biased?",
    "a": "The active region, biased midway between cutoff and saturation",
    "opts": [
      "The active region, biased midway between cutoff and saturation",
      "The cutoff region, so the output starts from zero",
      "The saturation region, for maximum output swing",
      "It is switched rapidly between cutoff and saturation"
    ],
    "exp": "An amplifier is kept in the active region and biased midway between the extremes so a small varying base signal produces a correspondingly varying, larger collector signal without ever hitting either extreme and clipping the waveform.",
    "cat": "TRANS",
    "id": "F17_019"
  },

  /* ═══════════ TRANSISTOR AS A SWITCH ═══════════ */
  {
    "q": "Once collector current has hit the ceiling set by the load resistance and supply voltage, what happens if base current is increased further?",
    "a": "Collector current cannot rise any further, because the collector circuit cannot deliver more",
    "opts": [
      "Collector current cannot rise any further, because the collector circuit cannot deliver more",
      "Collector current keeps rising in proportion to the extra base current",
      "The transistor is instantly destroyed by the excess base current",
      "Collector current falls back toward zero"
    ],
    "exp": "The collector current is limited by the external collector circuit, IC = (VCC - VCE) / RC. Once that ceiling is reached, injecting more base current cannot push collector current higher, since the demand for carriers is already fully satisfied. This is the point of saturation.",
    "cat": "SWITCH",
    "id": "F17_020"
  },
  {
    "q": "The typical residual collector-emitter voltage of a saturated transistor, VCE(sat), is:",
    "a": "About 0.1 to 0.3 V",
    "opts": ["About 0.1 to 0.3 V", "About 5 V", "Exactly 0 V, a perfect short circuit", "About 12 V"],
    "exp": "A saturated transistor is not a perfect short; a small residual VCE(sat), typically 0.1 to 0.3 V, remains and a little heat is dissipated. That residual is small enough to behave as a closed switch for practical purposes.",
    "cat": "SWITCH",
    "id": "F17_021"
  },
  {
    "q": "Why does a saturated transistor behave, for practical purposes, exactly like a closed switch?",
    "a": "The residual voltage across it is small and the current is set by the external load, not by the transistor",
    "opts": [
      "The residual voltage across it is small and the current is set by the external load, not by the transistor",
      "Because it becomes a literal, ideal, zero-resistance short circuit",
      "Because no current at all flows through it in saturation",
      "Because the base current becomes exactly zero in saturation"
    ],
    "exp": "There is still a small VCE(sat) and some heat dissipated, but with the current limited by the external load rather than the transistor, and the residual voltage so small, the practical circuit behaviour is indistinguishable from a closed switch.",
    "cat": "SWITCH",
    "id": "F17_022"
  },
  {
    "q": "In cutoff, a transistor behaves as:",
    "a": "An open switch, carrying no current at all",
    "opts": [
      "An open switch, carrying no current at all",
      "A closed switch, carrying maximum current",
      "A variable resistor whose value depends on temperature",
      "An amplifier with maximum gain"
    ],
    "exp": "Symmetrically to saturation, cutoff means both junctions are reverse biased and no current flows at all, making the transistor behave like an open switch.",
    "cat": "SWITCH",
    "id": "F17_023"
  },
  {
    "q": "What kind of circuit deliberately drives a transistor hard between cutoff and saturation rather than leaving it partway?",
    "a": "A digital logic gate or a relay-driver output stage",
    "opts": [
      "A digital logic gate or a relay-driver output stage",
      "An audio amplifier stage",
      "A sensor signal amplifier",
      "An operational amplifier used with feedback"
    ],
    "exp": "Digital logic gates and relay-driver outputs need a clean two-state ON/OFF behaviour, so they drive the transistor hard between cutoff (open) and saturation (closed), never leaving it sitting in the active (proportional) region.",
    "cat": "SWITCH",
    "id": "F17_024"
  },

  /* ═══════════ AMPLIFIER BASICS AND GAIN ═══════════ */
  {
    "q": "Where does the extra power in an amplifier's output signal actually come from?",
    "a": "From the DC supply, with the input signal only controlling how that energy is released",
    "opts": [
      "From the DC supply, with the input signal only controlling how that energy is released",
      "Entirely from the input signal itself, simply reshaped",
      "From the load resistor converting heat back into electrical energy",
      "From the base current of the transistor alone"
    ],
    "exp": "An amplifier uses energy drawn from the DC supply; the input signal only controls how that supply energy is released. This is the key distinction from a transformer, which cannot increase power, only trade voltage for current.",
    "cat": "AMP",
    "id": "F17_025"
  },
  {
    "q": "A voltage amplifier has a gain of 100. What output voltage results from a 10 mV input signal?",
    "a": "1 V",
    "opts": ["1 V", "10 V", "100 mV", "0.1 V"],
    "exp": "Gain = Output / Input, so Output = Gain x Input = 100 x 10 mV = 1000 mV = 1 V, in the same waveform shape, drawn from the supply.",
    "cat": "AMP",
    "id": "F17_026"
  },
  {
    "q": "Why is a fundamentally different device, a transformer, unable to do the same job as an amplifier?",
    "a": "A transformer cannot increase power, it can only trade voltage for current",
    "opts": [
      "A transformer cannot increase power, it can only trade voltage for current",
      "A transformer only works on DC, while amplifiers only work on AC",
      "A transformer has no output winding to connect a load to",
      "A transformer always reduces both voltage and current together"
    ],
    "exp": "A transformer steps voltage up or down while stepping current the opposite way, keeping power roughly the same (minus losses). An amplifier genuinely delivers more power out than the tiny input signal carried in, because the extra power comes from its DC supply.",
    "cat": "AMP",
    "id": "F17_027"
  },
  {
    "q": "Why is an amplifier stage typically placed between a shipboard sensor, such as a thermocouple, and the equipment it drives?",
    "a": "The raw sensor signal is far too weak to drive an indicator, relay or loudspeaker directly",
    "opts": [
      "The raw sensor signal is far too weak to drive an indicator, relay or loudspeaker directly",
      "Sensors only produce digital signals that must be converted to analogue",
      "Amplifiers are required to convert AC sensor signals into DC",
      "The sensor signal must first be inverted before use"
    ],
    "exp": "A thermocouple, strain gauge or microphone produces a very weak signal. An amplifier stage bridges the gap between that weak signal and the load, without altering the shape or timing of the original signal.",
    "cat": "AMP",
    "id": "F17_028"
  },

  /* ═══════════ THE OPERATIONAL AMPLIFIER ═══════════ */
  {
    "q": "The two inputs of an operational amplifier are marked:",
    "a": "Inverting (-) and non-inverting (+)",
    "opts": [
      "Inverting (-) and non-inverting (+)",
      "Anode and cathode",
      "Base and collector",
      "Source and drain"
    ],
    "exp": "An op-amp has two inputs, inverting (-) and non-inverting (+), and one output. It amplifies the tiny difference between the two input voltages by its very high open-loop gain.",
    "cat": "OPAMP",
    "id": "F17_029"
  },
  {
    "q": "The open-loop voltage gain of a typical op-amp, with no external feedback, is on the order of:",
    "a": "100,000 or more",
    "opts": ["100,000 or more", "About 10", "About 100", "Exactly 1"],
    "exp": "A raw op-amp has an enormous open-loop gain, often 100,000 or more, so it amplifies even a tiny input difference by that huge factor and drives the output toward one of its supply rails.",
    "cat": "OPAMP",
    "id": "F17_030"
  },
  {
    "q": "Adding external feedback resistors from the output back to the inverting input of an op-amp turns it into:",
    "a": "A precise, controlled-gain amplifier, adder, filter or integrator",
    "opts": [
      "A precise, controlled-gain amplifier, adder, filter or integrator",
      "A comparator with an undefined, uncontrolled output",
      "A transistor operating in cutoff",
      "A pure resistive voltage divider with no amplification"
    ],
    "exp": "With feedback, an op-amp's gain is tamed and controlled by the external components, making it the standard building block for precise amplifiers, adders, filters and integrators.",
    "cat": "OPAMP",
    "id": "F17_031"
  },
  {
    "q": "Used without any feedback, an op-amp's enormous open-loop gain turns it into:",
    "a": "A comparator",
    "opts": ["A comparator", "A pure resistor", "A rectifying diode", "A logic NOT gate"],
    "exp": "Without feedback, the huge open-loop gain means even a tiny input difference drives the output fully to one supply rail or the other, giving decisive on/off comparator behaviour rather than a proportional output.",
    "cat": "OPAMP",
    "id": "F17_032"
  },

  /* ═══════════ THE COMPARATOR ═══════════ */
  {
    "q": "How does a comparator's output differ from an ordinary amplifier's output?",
    "a": "A comparator's output is a decisive two-state (digital) signal, not a proportional, in-between one",
    "opts": [
      "A comparator's output is a decisive two-state (digital) signal, not a proportional, in-between one",
      "A comparator always outputs zero volts regardless of its inputs",
      "A comparator amplifies both inputs equally before combining them",
      "A comparator can only be built from resistors, never an op-amp"
    ],
    "exp": "An amplifier produces an output that is a proportional, scaled copy of its input. A comparator instead reports which of two inputs is larger by driving its output fully to one supply rail or the other, a decisive two-state result.",
    "cat": "COMP",
    "id": "F17_033"
  },
  {
    "q": "Why is even a genuinely tiny voltage difference between a comparator's inputs enough to drive its output fully to one rail?",
    "a": "Because the op-amp's open-loop gain is enormous",
    "opts": [
      "Because the op-amp's open-loop gain is enormous",
      "Because the comparator has no gain at all",
      "Because the inputs are shorted together internally",
      "Because feedback resistors amplify the difference further"
    ],
    "exp": "The op-amp's huge open-loop gain (100,000 or more) means even a millivolt-scale difference between the inputs is multiplied enough to slam the output to one saturation limit or the other.",
    "cat": "COMP",
    "id": "F17_034"
  },
  {
    "q": "In a comparator, if the non-inverting input rises even slightly above the inverting input, the output:",
    "a": "Slams to the positive supply rail",
    "opts": [
      "Slams to the positive supply rail",
      "Slams to the negative supply rail",
      "Stays at whatever voltage it was previously",
      "Rises smoothly and proportionally to the difference"
    ],
    "exp": "If the non-inverting input is even slightly higher, the output snaps to the positive rail; if it is slightly lower, the output snaps to the negative rail (or zero on a single supply). There is effectively no middle ground.",
    "cat": "COMP",
    "id": "F17_035"
  },
  {
    "q": "Describe how a comparator is used in a shipboard bearing high-temperature alarm.",
    "a": "It compares the rising sensor voltage against a fixed reference set at the alarm setpoint, and its output snaps high the instant the sensor crosses that reference",
    "opts": [
      "It compares the rising sensor voltage against a fixed reference set at the alarm setpoint, and its output snaps high the instant the sensor crosses that reference",
      "It continuously displays the exact numeric temperature value on a gauge",
      "It amplifies the temperature signal proportionally to drive a chart recorder",
      "It stores the temperature reading in memory for later retrieval only"
    ],
    "exp": "A comparator turns a continuously varying analogue measurement into a single, decisive go/no-go decision at a chosen setpoint, exactly the mechanism behind bilge high-level alarms, low lube-oil pressure trips and similar shipboard trips.",
    "cat": "COMP",
    "id": "F17_036"
  },
  {
    "q": "If both an amplifier and a comparator can be built from the same op-amp, what makes them behave differently?",
    "a": "The amplifier uses feedback to control gain, the comparator has no feedback and lets the open-loop gain run uncontrolled",
    "opts": [
      "The amplifier uses feedback to control gain, the comparator has no feedback and lets the open-loop gain run uncontrolled",
      "The comparator uses feedback, while the amplifier never does",
      "They use entirely different types of transistor internally",
      "The comparator only works on DC while the amplifier only works on AC"
    ],
    "exp": "Feedback is the deciding factor: with feedback the gain is held at a controlled, finite value for a proportional amplifier output; without it, the enormous open-loop gain drives the comparator's output straight to a rail.",
    "cat": "COMP",
    "id": "F17_037"
  },

  /* ═══════════ LOGIC GATES AND TRUTH TABLES ═══════════ */
  {
    "q": "An AND gate's output is 1:",
    "a": "Only if all of its inputs are 1",
    "opts": [
      "Only if all of its inputs are 1",
      "If any one of its inputs is 1",
      "Only if all of its inputs are 0",
      "Whenever the inputs disagree with each other"
    ],
    "exp": "AND requires every input to be 1 for the output to be 1. With any input at 0, the output is 0.",
    "cat": "LOGIC",
    "id": "F17_038"
  },
  {
    "q": "An OR gate's output is 1:",
    "a": "If any one of its inputs is 1",
    "opts": [
      "If any one of its inputs is 1",
      "Only if all of its inputs are 1",
      "Only if all of its inputs are 0",
      "Never, regardless of the inputs"
    ],
    "exp": "OR requires only one input to be 1 for the output to be 1. Only when every input is 0 does the output stay 0.",
    "cat": "LOGIC",
    "id": "F17_039"
  },
  {
    "q": "For a two-input AND gate, what is the output when A = 1 and B = 0?",
    "a": "0",
    "opts": ["0", "1", "Undefined", "It depends on which input changed first"],
    "exp": "AND needs both inputs at 1. Since B = 0, the output is 0, matching the truth table entry 1,0 → 0.",
    "cat": "LOGIC",
    "id": "F17_040"
  },
  {
    "q": "For a two-input OR gate, what is the output when A = 0 and B = 1?",
    "a": "1",
    "opts": ["1", "0", "Undefined", "It oscillates between 0 and 1"],
    "exp": "OR only needs one input at 1. Since B = 1, the output is 1, matching the truth table entry 0,1 → 1.",
    "cat": "LOGIC",
    "id": "F17_041"
  },
  {
    "q": "A NAND gate is built from:",
    "a": "An AND gate followed by a NOT gate",
    "opts": [
      "An AND gate followed by a NOT gate",
      "An OR gate followed by a NOT gate",
      "Two NOT gates in series",
      "An AND gate followed by another AND gate"
    ],
    "exp": "NAND is AND followed by NOT, so its output is 0 only if all inputs are 1, the exact inverse of a plain AND gate.",
    "cat": "LOGIC",
    "id": "F17_042"
  },
  {
    "q": "For a two-input NAND gate, what is the output when A = 1 and B = 1?",
    "a": "0",
    "opts": ["0", "1", "Undefined", "Equal to whichever input is higher"],
    "exp": "NAND inverts the AND result. Both inputs at 1 would give AND = 1, so NAND gives the inverse, 0, matching the truth table entry 1,1 → 0.",
    "cat": "LOGIC",
    "id": "F17_043"
  },
  {
    "q": "A NOR gate's output is 1 only when:",
    "a": "All of its inputs are 0",
    "opts": [
      "All of its inputs are 0",
      "All of its inputs are 1",
      "Exactly one input is 1",
      "The inputs alternate between 0 and 1"
    ],
    "exp": "NOR is OR followed by NOT. Plain OR is 1 whenever any input is 1, so NOR is 1 only in the one case OR gives 0, which is when every input is 0.",
    "cat": "LOGIC",
    "id": "F17_044"
  },
  {
    "q": "Which logic gate is the natural fit for a permissive interlock, such as allowing a steering gear motor to start only when power is available AND no local isolation is applied AND hydraulic level is normal?",
    "a": "AND gate",
    "opts": ["AND gate", "OR gate", "NOT gate", "NOR gate"],
    "exp": "An AND gate outputs 1 only when every one of its inputs is 1, exactly matching a requirement that all conditions be satisfied simultaneously before an action is permitted.",
    "cat": "LOGIC",
    "id": "F17_045"
  },
  {
    "q": "Which logic gate is the natural fit for a common alarm that should trigger if high temperature OR low pressure OR low level occurs?",
    "a": "OR gate",
    "opts": ["OR gate", "AND gate", "NOT gate", "NAND gate"],
    "exp": "An OR gate outputs 1 if any one of several independent fault conditions is true, exactly matching a summary alarm that should trip on any single fault, not requiring all of them together.",
    "cat": "LOGIC",
    "id": "F17_046"
  },

  /* ═══════════ THE STROBOSCOPIC EFFECT ═══════════ */
  {
    "q": "Why does a discharge (fluorescent) lamp run from AC mains flicker rather than glow steadily?",
    "a": "The arc is re-struck on every half-cycle as the current passes through zero and reverses",
    "opts": [
      "The arc is re-struck on every half-cycle as the current passes through zero and reverses",
      "The lamp filament physically cools and reheats each cycle",
      "The lamp is deliberately pulsed by an internal microcontroller",
      "Discharge lamps only flicker when they are close to failure"
    ],
    "exp": "The arc within a discharge tube is re-struck on every half-cycle of the AC supply as the current passes through zero and reverses, producing two flashes per supply cycle.",
    "cat": "STROBE",
    "id": "F17_047"
  },
  {
    "q": "On a 50 Hz supply, a discharge lamp's light output fluctuates at:",
    "a": "100 Hz",
    "opts": ["100 Hz", "50 Hz", "25 Hz", "150 Hz"],
    "exp": "The lamp flashes twice per supply cycle, once on each half-cycle, so a 50 Hz supply produces a 100 Hz flicker. A 60 Hz supply would give 120 Hz.",
    "cat": "STROBE",
    "id": "F17_048"
  },
  {
    "q": "Why is the flicker of discharge lighting easy to miss as a hazard?",
    "a": "It is far too fast, 100 Hz or 120 Hz, for the human eye to perceive directly under normal viewing",
    "opts": [
      "It is far too fast, 100 Hz or 120 Hz, for the human eye to perceive directly under normal viewing",
      "It only occurs in complete darkness, where no one is watching",
      "Modern discharge lamps are legally required to disclose their flicker rate",
      "The flicker is visible but always mistaken for normal daylight variation"
    ],
    "exp": "At 100 Hz or 120 Hz the flicker is far beyond what the eye perceives as flicker under normal viewing, so the hazard is genuinely easy to overlook even though it is happening constantly.",
    "cat": "STROBE",
    "id": "F17_049"
  },
  {
    "q": "Under stroboscopic conditions, when does a rotating machine part appear completely stationary?",
    "a": "When it completes exactly one revolution, or a whole number of revolutions, between successive light flashes",
    "opts": [
      "When it completes exactly one revolution, or a whole number of revolutions, between successive light flashes",
      "Only when the machine has actually stopped rotating",
      "When the flash rate is much slower than the rotational speed",
      "Only in complete darkness with no lighting at all"
    ],
    "exp": "If a rotating part completes a whole number of revolutions in the time between successive flashes, every flash catches it in the same angular position, so it appears frozen even though it is spinning at full speed.",
    "cat": "STROBE",
    "id": "F17_050"
  },
  {
    "q": "What does a rotating part appear to do if its speed is close to, but not exactly, a multiple of the flash rate?",
    "a": "It appears to rotate very slowly, and can even appear to rotate backwards",
    "opts": [
      "It appears to rotate very slowly, and can even appear to rotate backwards",
      "It disappears from view entirely",
      "It appears to speed up dramatically beyond its true speed",
      "It appears to vibrate rather than rotate"
    ],
    "exp": "When the rotational speed is close to but not exactly a multiple of the flash rate, the part advances slightly between each flash, giving the illusion of slow rotation, which can even appear to run backwards depending on the direction of that small advance.",
    "cat": "STROBE",
    "id": "F17_051"
  },
  {
    "q": "Why is the stroboscopic effect considered a genuine safety hazard in machinery spaces, rather than just a curiosity?",
    "a": "A part actually spinning at full speed can look stopped, and a person trusting that impression can reach in and be seriously injured",
    "opts": [
      "A part actually spinning at full speed can look stopped, and a person trusting that impression can reach in and be seriously injured",
      "It permanently damages eyesight after prolonged exposure",
      "It causes rotating machinery to physically slow down",
      "It only affects electronic instruments, not personnel safety"
    ],
    "exp": "Machinery spaces have plenty of rotating equipment at speeds that can coincide with multiples of 100 Hz or 120 Hz. A part that looks motionless under such lighting can be spinning at full operating speed, and touching it can cause serious injury.",
    "cat": "STROBE",
    "id": "F17_052"
  },
  {
    "q": "How does a staggered, phase-shifted twin-lamp fitting help prevent the stroboscopic illusion?",
    "a": "A series capacitor (lead-lag circuit) shifts one lamp's flicker out of step with the other, so light reaching the machine is never fully synchronised",
    "opts": [
      "A series capacitor (lead-lag circuit) shifts one lamp's flicker out of step with the other, so light reaching the machine is never fully synchronised",
      "It simply increases the total brightness so shadows are eliminated",
      "It converts the AC supply feeding the lamps into DC",
      "It slows the flicker rate down to a frequency the eye can see clearly"
    ],
    "exp": "Wiring one lamp with a series capacitor shifts its current, and therefore its flicker, out of phase with the other lamp, so the two no longer flash together and the freeze-frame illusion collapses. Feeding adjacent circuits from different supply phases achieves the same effect on a wider scale.",
    "cat": "STROBE",
    "id": "F17_053"
  },

  /* ═══════════ INFRARED (IR) REMOTE CONTROL ═══════════ */
  {
    "q": "When a button is pressed on an IR remote handset, what does the internal microcontroller do?",
    "a": "It generates a coded pulse pattern representing that command and uses it to switch an infrared LED",
    "opts": [
      "It generates a coded pulse pattern representing that command and uses it to switch an infrared LED",
      "It sends the command as a continuous, unvarying beam of infrared light",
      "It transmits the command over a radio frequency channel instead of light",
      "It stores the command for the receiver to poll later"
    ],
    "exp": "Pressing a button causes the handset's microcontroller to generate a unique coded pulse pattern for that command and use it to switch an infrared LED on and off.",
    "cat": "IR",
    "id": "F17_054"
  },
  {
    "q": "The infrared LED in a remote handset is switched on and off rapidly at a carrier frequency of commonly around:",
    "a": "38 kHz",
    "opts": ["38 kHz", "38 Hz", "3.8 MHz", "50 Hz"],
    "exp": "Rather than pulsing the LED slowly at the command rate, it is switched rapidly at a carrier frequency, commonly around 38 kHz, only during the 'on' portions of the coded command.",
    "cat": "IR",
    "id": "F17_055"
  },
  {
    "q": "What does the receiver module in the equipment being controlled contain?",
    "a": "An infrared-sensitive photodiode or phototransistor, followed by an amplifier and a filter/demodulator tuned to the carrier",
    "opts": [
      "An infrared-sensitive photodiode or phototransistor, followed by an amplifier and a filter/demodulator tuned to the carrier",
      "A second infrared LED that mirrors the transmitter's signal",
      "A simple resistor network with no active amplification",
      "A microphone tuned to detect ultrasonic pulses"
    ],
    "exp": "The receiver has a photodiode or phototransistor followed by an amplifier and a filter/demodulator stage tuned specifically to respond to the 38 kHz modulated signal and ignore everything else.",
    "cat": "IR",
    "id": "F17_056"
  },
  {
    "q": "Why is the IR remote control signal modulated onto a carrier frequency rather than sent as plain on/off pulses at the command rate?",
    "a": "So the receiver can reject steady ambient infrared from sunlight and room lighting and respond only to the genuine modulated signal",
    "opts": [
      "So the receiver can reject steady ambient infrared from sunlight and room lighting and respond only to the genuine modulated signal",
      "Because unmodulated infrared cannot travel through air at all",
      "Because plain on/off pulses would damage the LED over time",
      "So the signal can be sent using less electrical power overall"
    ],
    "exp": "Ambient infrared from sunlight and lighting is a steady background. By modulating onto a specific oscillating carrier and building the receiver to respond only to that frequency, the receiver can reject that ambient background and pick out the genuine coded signal.",
    "cat": "IR",
    "id": "F17_057"
  },
  {
    "q": "What would happen if an IR receiver simply responded to 'any infrared light present' rather than a specific modulated carrier?",
    "a": "It would be triggered constantly by ambient infrared sources and would be useless",
    "opts": [
      "It would be triggered constantly by ambient infrared sources and would be useless",
      "It would work perfectly, since infrared is rare in most environments",
      "It would only detect signals from remotes, never from lighting",
      "It would become more sensitive to genuine remote signals"
    ],
    "exp": "Sunlight, incandescent lamps and ordinary room lighting all radiate plenty of infrared. A receiver responding to any infrared at all would be swamped by that ambient background and could not reliably detect a real remote signal.",
    "cat": "IR",
    "id": "F17_058"
  },
  {
    "q": "When the receiver detects genuine 38 kHz modulated IR, what does it produce?",
    "a": "A clean digital output pulse matching the original coded command, which the equipment's microcontroller then decodes",
    "opts": [
      "A clean digital output pulse matching the original coded command, which the equipment's microcontroller then decodes",
      "A continuous analogue voltage proportional to signal strength only",
      "An audible tone that a human operator must interpret",
      "A direct mechanical movement of a relay contact"
    ],
    "exp": "The demodulator stage strips the 38 kHz carrier away and outputs a clean digital pulse pattern matching the original coded command, which the equipment's own microcontroller decodes into the actual command such as volume up or channel change.",
    "cat": "IR",
    "id": "F17_059"
  },
  {
    "q": "Besides remote controls, where else does the same modulated-carrier principle appear on board, and why?",
    "a": "In optical data links and some proximity or level detectors, so the wanted signal can be picked cleanly out of ambient IR background",
    "opts": [
      "In optical data links and some proximity or level detectors, so the wanted signal can be picked cleanly out of ambient IR background",
      "In power transformers, to step down the mains voltage safely",
      "In circuit breakers, to detect overcurrent faults",
      "In storage batteries, to prevent overcharging"
    ],
    "exp": "The same sensor-and-modulation principle appears wherever infrared is used for a deliberate signal rather than passive sensing, such as optical data links and certain proximity or level detectors, for exactly the same reason: rejecting ambient IR noise.",
    "cat": "IR",
    "id": "F17_060"
  }

]);

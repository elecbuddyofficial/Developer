window.loadQuizzes("F05_Generation", [

  /* ═══════════ MAGFIELD ═══════════ */
  {
    "q": "The magnetic field is best defined as:",
    "a": "The region of space around a magnet or current-carrying conductor within which a magnetic force can be detected",
    "opts": [
      "The total magnetic flux stored inside a magnet",
      "The region of space around a magnet or current-carrying conductor within which a magnetic force can be detected",
      "The force needed to move a magnet through a coil",
      "The rate of change of flux linking a conductor"
    ],
    "exp": "A magnetic field is the region within which a magnetic force can be detected, represented by field lines. Flux is the total number of field lines through an area, a different quantity. The rate of change of flux linking a conductor is what produces induced EMF, covered later under Faraday's Law, not the definition of the field itself.",
    "cat": "MAGFIELD",
    "id": "F05_001"
  },
  {
    "q": "Which rule gives the direction of the magnetic field around a straight current-carrying conductor?",
    "a": "Right-Hand Grip Rule, thumb along current, fingers curl in the field direction",
    "opts": [
      "Right-Hand Grip Rule, thumb along current, fingers curl in the field direction",
      "Fleming's Left Hand Rule",
      "Fleming's Right Hand Rule",
      "Lenz's Law"
    ],
    "exp": "The Right-Hand Grip Rule gives the circular field pattern around a straight conductor: thumb points along the current, fingers curl in the direction of the field. Fleming's rules are for force/motion in a field (Left Hand) or induced current from motion (Right Hand), a different situation entirely.",
    "cat": "MAGFIELD",
    "id": "F05_002"
  },
  {
    "q": "A current-carrying coil (solenoid) produces a field pattern that:",
    "a": "Behaves like a bar magnet, with field lines running through the core and a distinct north and south pole",
    "opts": [
      "Forms concentric circles around the coil with no distinct poles",
      "Cancels itself out because the turns oppose each other",
      "Behaves like a bar magnet, with field lines running through the core and a distinct north and south pole",
      "Only exists while the coil is stationary"
    ],
    "exp": "A solenoid's field behaves like a bar magnet's, found by curling the fingers in the direction of current flow with the thumb pointing to the north pole. Concentric circles with no distinct poles describes a single straight conductor, not a coil.",
    "cat": "MAGFIELD",
    "id": "F05_003"
  },

  /* ═══════════ FLUX ═══════════ */
  {
    "q": "Magnetic flux is defined as:",
    "a": "The total number of magnetic field lines passing through a given area",
    "opts": [
      "The flux per unit area at a point",
      "The opposition offered to establishing a magnetic field",
      "The magnetic pressure driving flux around a circuit",
      "The total number of magnetic field lines passing through a given area"
    ],
    "exp": "Flux (Φ) is the total number of field lines through an area, measured in webers. Flux per unit area is flux density, not flux itself. Opposition to establishing flux is reluctance, and magnetic pressure is MMF, both different quantities covered separately.",
    "cat": "FLUX",
    "id": "F05_004"
  },
  {
    "q": "Flux density is measured in which unit, and what does it represent?",
    "a": "Tesla, the amount of flux per unit area",
    "opts": [
      "Tesla, the amount of flux per unit area",
      "Weber, the total flux through an area",
      "Henry, the opposition to changing current",
      "Ampere-turn, the magnetic pressure driving flux"
    ],
    "exp": "Flux density B is in tesla, equal to one weber per square metre, a measure of how concentrated the field is. Weber is the unit of flux itself, henry is the unit of inductance, and ampere-turn is the unit of MMF, three different quantities entirely.",
    "cat": "FLUX",
    "id": "F05_005"
  },
  {
    "q": "The notes compare flux to the total water flowing through a river cross-section. On this analogy, flux density represents:",
    "a": "How tightly packed that flow is at a narrow point in the river compared to a wide point",
    "opts": [
      "The total volume of water in the river",
      "The speed of the current alone, regardless of channel width",
      "How tightly packed that flow is at a narrow point in the river compared to a wide point",
      "The direction the river is flowing"
    ],
    "exp": "Flux density is how concentrated the flow is at a given point, exactly why squeezing the same total flux through a narrower area produces a higher flux density. This is why a machine's air gap and core are shaped to concentrate flux where it is needed.",
    "cat": "FLUX",
    "id": "F05_006"
  },
  {
    "q": "Typical marine machine cores are designed to keep flux density within roughly what range before saturation effects set in?",
    "a": "1.4 to 1.8 tesla",
    "opts": [
      "0.14 to 0.18 tesla",
      "0.5 to 0.8 tesla",
      "1.4 to 1.8 tesla",
      "4 to 8 tesla"
    ],
    "exp": "Machine cores are kept within roughly 1.4 to 1.8 T. Beyond saturation, the core stops responding proportionally to further current: magnetising current rises sharply for little extra flux, and losses climb, which is why machines must not be run at excessive voltage relative to frequency.",
    "cat": "FLUX",
    "id": "F05_007"
  },
  {
    "q": "A pole face has an area of 0.08 m² and carries a flux of 0.04 Wb. What is the flux density?",
    "a": "0.5 T",
    "opts": [
      "2 T",
      "0.32 T",
      "0.045 T",
      "0.5 T"
    ],
    "exp": "B = Φ / A = 0.04 / 0.08 = 0.5 T. Inverting the formula to A/Φ gives 2 T, the most common error on this type of question. Multiplying the two figures instead of dividing gives 0.0032 or similar nonsense values.",
    "cat": "FLUX",
    "id": "F05_008"
  },

  /* ═══════════ MMF ═══════════ */
  {
    "q": "Magnetomotive force (MMF) is best described as:",
    "a": "The magnetic pressure that drives flux around a magnetic circuit, produced by current flowing through a coil",
    "opts": [
      "The magnetic pressure that drives flux around a magnetic circuit, produced by current flowing through a coil",
      "The opposition offered to the establishment of flux",
      "The total flux through a cross-sectional area",
      "The rate of change of flux linking a coil"
    ],
    "exp": "MMF is the magnetic pressure driving flux, measured in ampere-turns, the magnetic circuit's equivalent of EMF. Opposition to flux is reluctance. Total flux through an area is simply flux. Rate of change of flux linking a coil is what produces induced EMF under Faraday's Law, a different topic.",
    "cat": "MMF",
    "id": "F05_009"
  },
  {
    "q": "A field coil has 250 turns carrying 8 A. What is the MMF?",
    "a": "2000 AT",
    "opts": [
      "258 AT",
      "31.25 AT",
      "2000 AT",
      "31250 AT"
    ],
    "exp": "MMF = N × I = 250 × 8 = 2000 AT. Adding turns and current instead of multiplying gives 258, and dividing gives 31.25, both common slips under exam pressure.",
    "cat": "MMF",
    "id": "F05_010"
  },
  {
    "q": "Which relationship is the magnetic circuit's direct equivalent of Ohm's Law, I = V/R?",
    "a": "Φ = MMF / S",
    "opts": [
      "MMF = N × I",
      "B = Φ / A",
      "Φ = MMF / S",
      "e = -N(dΦ/dt)"
    ],
    "exp": "Φ = MMF / S mirrors I = V / R exactly: flux corresponds to current, MMF to EMF, and reluctance to resistance. MMF = N×I is how MMF is produced, not the Ohm's Law analogy itself, and B = Φ/A and Faraday's equation are unrelated relationships.",
    "cat": "MMF",
    "id": "F05_011"
  },
  {
    "q": "Why are the air gaps in electrical machines kept as small as mechanically practical?",
    "a": "Air has far higher reluctance than iron, so a larger air gap sharply increases the total reluctance of the magnetic circuit",
    "opts": [
      "Air has far higher reluctance than iron, so a larger air gap sharply increases the total reluctance of the magnetic circuit",
      "Air has higher permeability than iron, wasting flux",
      "A larger air gap increases the MMF required to zero",
      "Smaller air gaps reduce the number of turns needed"
    ],
    "exp": "Air has far higher reluctance than iron, so even a small air gap sharply raises the total reluctance of the magnetic circuit, per Φ = MMF/S. Air actually has much lower permeability than iron, the opposite of the second option, which is why the gap is minimised.",
    "cat": "MMF",
    "id": "F05_012"
  },

  /* ═══════════ FARADAY ═══════════ */
  {
    "q": "Faraday's First Law of electromagnetic induction states that:",
    "a": "Whenever a conductor is placed in a changing magnetic field, or moves through a field so as to cut flux lines, an EMF is induced in it",
    "opts": [
      "Whenever a conductor is placed in a changing magnetic field, or moves through a field so as to cut flux lines, an EMF is induced in it",
      "A current-carrying conductor in a magnetic field always experiences a mechanical force",
      "The induced EMF always opposes the change that produced it",
      "Flux equals MMF divided by reluctance"
    ],
    "exp": "Faraday's First Law: a changing field, or a conductor cutting flux lines, induces an EMF. A conductor experiencing a force from carrying current in a field is the motor effect (Fleming's Left Hand Rule), a different phenomenon. The EMF opposing its cause is Lenz's Law, and Φ = MMF/S is the magnetic circuit's Ohm's Law.",
    "cat": "FARADAY",
    "id": "F05_013"
  },
  {
    "q": "Faraday's Second Law states that the magnitude of induced EMF is:",
    "a": "Directly proportional to the rate of change of flux linkage",
    "opts": [
      "Directly proportional to the total flux present, however slowly it changes",
      "Inversely proportional to the number of turns in the coil",
      "Directly proportional to the rate of change of flux linkage",
      "Independent of the number of turns, dependent only on flux"
    ],
    "exp": "The Second Law ties EMF magnitude to the rate of change of flux linkage, e = -N(dΦ/dt), not to the total flux present. A strong but unchanging flux produces zero EMF, however large it is, and EMF is directly, not inversely, proportional to the number of turns N.",
    "cat": "FARADAY",
    "id": "F05_014"
  },
  {
    "q": "In the equation e = -N(dΦ/dt), what does the negative sign represent?",
    "a": "Lenz's Law, the induced EMF opposes the change in flux that produced it",
    "opts": [
      "A drop in voltage due to winding resistance",
      "A phase lag of 90 degrees between flux and EMF",
      "Lenz's Law, the induced EMF opposes the change in flux that produced it",
      "The fact that flux is decreasing at that instant"
    ],
    "exp": "The negative sign is the mathematical statement of Lenz's Law: the induced EMF opposes the flux change that caused it, regardless of whether flux is rising or falling. It has nothing to do with winding resistance, and it is not simply a marker that flux happens to be decreasing.",
    "cat": "FARADAY",
    "id": "F05_015"
  },
  {
    "q": "A conductor sits stationary beside a very strong, unchanging permanent magnet. What EMF is induced in it?",
    "a": "Zero, because Faraday's Law depends on a change in flux linkage, not on the strength of the flux present",
    "opts": [
      "A small but measurable EMF proportional to the magnet's strength",
      "A large EMF, since the field is very strong",
      "Zero, because Faraday's Law depends on a change in flux linkage, not on the strength of the flux present",
      "An EMF that depends on the conductor's resistance"
    ],
    "exp": "This is a classic interview trap. Faraday's Law depends entirely on change of flux linkage, not on the magnitude of flux present. A very strong but constant field induces exactly zero EMF in a stationary conductor, no matter how strong the magnet is. Candidates who answer based on field strength alone are marked down immediately.",
    "cat": "FARADAY",
    "id": "F05_016"
  },
  {
    "q": "Why can a transformer never work on steady DC?",
    "a": "With steady DC the flux it produces is constant, so there is no changing flux linkage and therefore no induced EMF",
    "opts": [
      "With steady DC the flux it produces is constant, so there is no changing flux linkage and therefore no induced EMF",
      "DC current is too low to create sufficient flux",
      "Transformers require a rotating magnetic field, which DC cannot produce",
      "The core would overheat instantly under DC"
    ],
    "exp": "A transformer works purely through mutual inductance, which requires a changing flux. Steady DC produces a constant flux, so there is nothing to induce a secondary EMF. Transformers have no rotating parts and no rotating field at all; that description applies to alternators and induction motors.",
    "cat": "FARADAY",
    "id": "F05_017"
  },
  {
    "q": "Why must a generator's rotor physically rotate to produce an output?",
    "a": "Only a changing flux linkage induces EMF, and rotation is what continuously changes the flux each stator winding links",
    "opts": [
      "Rotation cools the windings, preventing insulation failure",
      "A stationary rotor would short-circuit the field winding",
      "Only a changing flux linkage induces EMF, and rotation is what continuously changes the flux each stator winding links",
      "Rotation is needed only to drive the cooling fan, not for induction itself"
    ],
    "exp": "By Faraday's Law, EMF requires a changing flux linkage. In an alternator the rotor's field must physically rotate past the stationary stator windings to continuously change the flux each one links, inducing an AC voltage. Cooling is a separate, secondary function, not the reason rotation is required for induction.",
    "cat": "FARADAY",
    "id": "F05_018"
  },

  /* ═══════════ LENZ ═══════════ */
  {
    "q": "Lenz's Law states that the direction of an induced EMF, and the current it drives:",
    "a": "Is always such as to oppose the change in flux that produced it",
    "opts": [
      "Is always in the same direction as the change in flux that produced it",
      "Is always such as to oppose the change in flux that produced it",
      "Depends on whether the circuit is AC or DC",
      "Is determined by Fleming's Left Hand Rule, not the flux change"
    ],
    "exp": "Lenz's Law: the induced EMF and current always oppose the change in flux that produced them, the physical meaning of the minus sign in Faraday's equation. If it assisted the change instead, the effect would reinforce its own cause, which conservation of energy forbids.",
    "cat": "LENZ",
    "id": "F05_019"
  },
  {
    "q": "Why must Lenz's Law be true, according to the notes?",
    "a": "It is a direct statement of conservation of energy; if induced current instead assisted its own cause, flux would run away uncontrolled and energy would appear from nowhere",
    "opts": [
      "It is a direct statement of conservation of energy; if induced current instead assisted its own cause, flux would run away uncontrolled and energy would appear from nowhere",
      "Because Faraday's Law mathematically requires a negative sign for unit consistency",
      "Because magnetic fields always weaken over time due to core losses",
      "Because current can never flow in the same direction twice in a row"
    ],
    "exp": "Lenz's Law is required by conservation of energy: if the induced current assisted the change producing it, that would reinforce its own cause with no external energy input, which nothing in nature permits. The negative sign is a consequence of this physical requirement, not the other way round.",
    "cat": "LENZ",
    "id": "F05_020"
  },
  {
    "q": "As a magnet is pushed toward a coil, Lenz's Law predicts that the coil's near face will:",
    "a": "Become the same pole as the approaching magnet's face, repelling it",
    "opts": [
      "Become the opposite pole, attracting the magnet in faster",
      "Remain unmagnetised until the magnet actually touches the coil",
      "Become the same pole as the approaching magnet's face, repelling it",
      "Alternate between poles as the magnet approaches"
    ],
    "exp": "The induced current creates a field opposing the increasing flux, so the coil's near face becomes the same pole as the approaching magnet, repelling it. Work must be done against this repulsion to keep pushing the magnet in, and that mechanical work is exactly what becomes the electrical energy delivered by the induced current.",
    "cat": "LENZ",
    "id": "F05_021"
  },
  {
    "q": "Why does a diesel engine driving an alternator need more fuel the moment a large electrical load is switched on?",
    "a": "The increased induced current opposes the rotor's motion, requiring more torque, so the engine genuinely works harder against that opposition",
    "opts": [
      "The alternator's frequency increases, demanding more engine speed",
      "Electrical load has no real effect on engine loading, only on voltage",
      "The AVR increases engine speed automatically to compensate",
      "The increased induced current opposes the rotor's motion, requiring more torque, so the engine genuinely works harder against that opposition"
    ],
    "exp": "By Lenz's Law, the extra induced current from added load opposes the rotor's motion, appearing as extra torque the prime mover must overcome. This is exactly what a chief engineer observes on the fuel rack when a large motor starts. The AVR adjusts field current for voltage, not engine speed, which is the governor's job.",
    "cat": "LENZ",
    "id": "F05_022"
  },

  /* ═══════════ FLEMING ═══════════ */
  {
    "q": "Fleming's Right Hand Rule is used to find:",
    "a": "The direction of induced current in a generator, using thumb for motion, first finger for field, second finger for current",
    "opts": [
      "The direction of force on a current-carrying conductor in a motor",
      "The direction of induced current in a generator, using thumb for motion, first finger for field, second finger for current",
      "The direction of magnetic field around a solenoid",
      "The polarity of a permanent magnet"
    ],
    "exp": "The Right Hand Rule finds induced current direction in a generator: thumb for motion, first finger for field, second finger for current. Force on a conductor in a motor uses the Left Hand Rule instead. Field direction around a solenoid uses the curled-fingers rule, a separate rule entirely.",
    "cat": "FLEMING",
    "id": "F05_023"
  },
  {
    "q": "In Fleming's Left Hand Rule, used for motors, what does the thumb represent?",
    "a": "The force or motion produced",
    "opts": [
      "The direction of the magnetic field, from N to S",
      "The direction of current flow",
      "The force or motion produced",
      "The direction of induced EMF"
    ],
    "exp": "In the Left Hand Rule, thumb is force/motion, first finger is field, second finger is current, the FBI order. Field direction is the first finger, and current is the second finger. Induced EMF belongs to the Right Hand Rule for generators, not this rule.",
    "cat": "FLEMING",
    "id": "F05_024"
  },
  {
    "q": "What memory trick do the notes give for pairing hand rules with generators and motors?",
    "a": "Generators Right, motors Left, alphabetically g before m and r before l, in the same relative order",
    "opts": [
      "Generators Right, motors Left, alphabetically g before m and r before l, in the same relative order",
      "Generators Left, motors Right, since left comes before right alphabetically",
      "Both rules apply equally to generators and motors",
      "Right hand for AC machines, left hand for DC machines"
    ],
    "exp": "The trick pairs the alphabetical order of generator/motor with right/left: g before m, r before l, so right hand goes with generator and left hand goes with motor. The two rules are for distinct purposes, not interchangeable, and the pairing has nothing to do with AC versus DC.",
    "cat": "FLEMING",
    "id": "F05_025"
  },
  {
    "q": "Under exam pressure, which hand rule do candidates most commonly answer by mistake when asked about a generator?",
    "a": "Left hand, because Fleming's Left Hand Rule is more commonly quoted in general physics teaching for motors",
    "opts": [
      "Right hand, because it is rarely taught at all",
      "Left hand, because Fleming's Left Hand Rule is more commonly quoted in general physics teaching for motors",
      "Neither, since generators do not use Fleming's Rules",
      "Both hands simultaneously, since generators combine motor and generator action"
    ],
    "exp": "This is a flagged interview trap: candidates often reflexively answer 'left hand' for a generator because the Left Hand Rule is more commonly quoted for motors in general teaching. The correct pairing must be automatic: Right Hand for generators, Left Hand for motors.",
    "cat": "FLEMING",
    "id": "F05_026"
  },
  {
    "q": "The mnemonic 'FBI' for Fleming's Left Hand Rule (motor) stands for, in thumb, first finger, second finger order:",
    "a": "Force, B (field), I (current)",
    "opts": [
      "Field, B (current), I (induction)",
      "Flux, B (balance), I (inductance)",
      "Force, B (field), I (current)",
      "Force, B (brush), I (insulation)"
    ],
    "exp": "FBI spells out the Left Hand Rule in order: thumb for Force, first finger for B (field), second finger for I (current). It is unrelated to brushes or insulation, which are construction details, not part of this rule.",
    "cat": "FLEMING",
    "id": "F05_027"
  },

  /* ═══════════ SELFIND ═══════════ */
  {
    "q": "Self inductance is the property of a coil by which:",
    "a": "A changing current through it induces an EMF in the same coil, opposing the change that caused it",
    "opts": [
      "A changing current through it induces an EMF in the same coil, opposing the change that caused it",
      "A changing current in it induces an EMF in a separate, nearby coil",
      "A steady current through it produces a constant magnetic field",
      "Its resistance changes as current through it changes"
    ],
    "exp": "Self inductance is a coil inducing an EMF in itself as its own current changes, measured in henries. Inducing EMF in a separate coil is mutual inductance instead. A steady current producing a constant field is true but describes ordinary magnetism, not inductance, which requires change.",
    "cat": "SELFIND",
    "id": "F05_028"
  },
  {
    "q": "One henry is defined as the inductance of a coil in which:",
    "a": "A current changing at one ampere per second induces one volt",
    "opts": [
      "One volt applied produces one ampere of current",
      "One ampere flowing produces one weber of flux",
      "A current changing at one ampere per second induces one volt",
      "One coulomb of charge produces one volt of EMF"
    ],
    "exp": "The henry is defined via e = -L(dI/dt): a current changing at one ampere per second induces one volt when L = 1 H. One volt per ampere describes resistance (one ohm), not inductance, and one volt per coulomb describes the volt itself.",
    "cat": "SELFIND",
    "id": "F05_029"
  },
  {
    "q": "Why does an inductor resist a sudden change in current far more than it resists a steady current?",
    "a": "A changing current produces a changing self-flux, which by Faraday's Law induces a self-EMF that, by Lenz's Law, always opposes the change",
    "opts": [
      "A changing current produces a changing self-flux, which by Faraday's Law induces a self-EMF that, by Lenz's Law, always opposes the change",
      "Steady current heats the coil, raising its resistance",
      "An inductor has no effect on current, only on voltage",
      "Sudden current changes are blocked by the coil's capacitance"
    ],
    "exp": "A changing current changes the coil's own flux, which by Faraday's Law induces a self-EMF, and by Lenz's Law that self-EMF opposes the change, whether rising or falling. A steady current produces no changing flux, so no opposing EMF appears at all. Coils are not capacitive elements.",
    "cat": "SELFIND",
    "id": "F05_030"
  },
  {
    "q": "Why does switching off a large inductive load such as a motor contactor coil produce a voltage spike far higher than the supply voltage?",
    "a": "The collapsing magnetic field tries to maintain the current that was flowing, and with the circuit suddenly opened, that energy discharges as a brief high-voltage arc",
    "opts": [
      "The supply voltage briefly doubles due to back-EMF from the source",
      "Switching off increases the coil's resistance instantly",
      "The collapsing magnetic field tries to maintain the current that was flowing, and with the circuit suddenly opened, that energy discharges as a brief high-voltage arc",
      "The AVR overcompensates for the sudden loss of load"
    ],
    "exp": "The collapsing field tries to maintain the current that was flowing; with the circuit suddenly open, that stored energy discharges as a brief high-voltage arc across the opening contacts. This is why contactors and relays are fitted with suppression devices, freewheel diodes on DC coils and RC snubbers on AC coils, to protect contacts and nearby electronics.",
    "cat": "SELFIND",
    "id": "F05_031"
  },

  /* ═══════════ MUTUALIND ═══════════ */
  {
    "q": "Mutual inductance is the property by which:",
    "a": "A changing current in one coil induces an EMF in a second, magnetically linked but electrically separate coil",
    "opts": [
      "A changing current in a coil induces an EMF in that same coil",
      "A changing current in one coil induces an EMF in a second, magnetically linked but electrically separate coil",
      "Two coils share the same electrical connection to transfer energy",
      "A steady current in one coil induces a steady current in another"
    ],
    "exp": "Mutual inductance links a changing current in one coil to an induced EMF in a separate, magnetically coupled coil, with no electrical connection between them, exactly the working principle of a transformer. EMF induced in the same coil carrying the current is self inductance, a different quantity.",
    "cat": "MUTUALIND",
    "id": "F05_032"
  },
  {
    "q": "In e2 = -M(dI1/dt), what does M represent?",
    "a": "Mutual inductance, measured in henries",
    "opts": [
      "The magnetising current of coil 1",
      "Self inductance of coil 2",
      "Mutual inductance, measured in henries",
      "The turns ratio between the two coils"
    ],
    "exp": "M is mutual inductance, in henries, linking the rate of change of current in coil 1 to the EMF induced in coil 2. It is not a current, not the self inductance of either coil individually, and not the same thing as a turns ratio.",
    "cat": "MUTUALIND",
    "id": "F05_033"
  },
  {
    "q": "What is the key difference between self inductance and mutual inductance?",
    "a": "Self inductance induces EMF in the same coil carrying the changing current; mutual inductance induces EMF in a separate, magnetically coupled coil",
    "opts": [
      "Self inductance induces EMF in the same coil carrying the changing current; mutual inductance induces EMF in a separate, magnetically coupled coil",
      "Self inductance only occurs in DC circuits, mutual only in AC circuits",
      "Self inductance has no unit, mutual is measured in henries",
      "Mutual inductance is always larger in magnitude than self inductance"
    ],
    "exp": "Self inductance affects the same coil; mutual inductance affects a separate coupled coil, and both are measured in henries. Self inductance is relevant to chokes and relay coils, while mutual inductance is the transformer principle. Neither is restricted to DC or AC only, since both concern changing, not steady, current.",
    "cat": "MUTUALIND",
    "id": "F05_034"
  },

  /* ═══════════ EMFEQ ═══════════ */
  {
    "q": "The EMF equation of an alternator, E = 4.44 × f × Φ × N × Kw, gives:",
    "a": "The RMS value of the voltage induced per phase in an alternator winding",
    "opts": [
      "The RMS value of the voltage induced per phase in an alternator winding",
      "The peak voltage induced per phase",
      "The DC field current required for rated output",
      "The total three-phase apparent power output"
    ],
    "exp": "This equation gives the RMS EMF per phase, not the peak value; the 4.44 constant already includes the RMS-to-average conversion for a sine wave. It has nothing to do with DC field current, which is set by the excitation system, or with total apparent power, which also needs current and phase count.",
    "cat": "EMFEQ",
    "id": "F05_035"
  },
  {
    "q": "Where does the constant 4.44 in the alternator EMF equation come from?",
    "a": "A factor of 4 from the quarter-cycle relationship of a sine wave, multiplied by 1.11, the RMS-to-average conversion factor for a sine wave",
    "opts": [
      "An empirical value with no theoretical basis, found by testing many machines",
      "4 poles multiplied by 1.11 times rated frequency",
      "A factor of 4 from the quarter-cycle relationship of a sine wave, multiplied by 1.11, the RMS-to-average conversion factor for a sine wave",
      "The number of phases (3) plus a 1.44 correction for winding losses"
    ],
    "exp": "4.44 is not arbitrary: it is 4 (from the quarter-cycle relationship of flux varying sinusoidally) multiplied by 1.11 (the RMS-to-average conversion factor for a sine wave), giving 4 × 1.11 = 4.44. Every term traces back to sine wave properties, not to pole count or phase count.",
    "cat": "EMFEQ",
    "id": "F05_036"
  },
  {
    "q": "Why is the winding factor Kw in the EMF equation always slightly less than 1?",
    "a": "The winding is distributed and often short-pitched across several slots rather than concentrated at one point per pole, deliberately done to produce a more sinusoidal output",
    "opts": [
      "Because winding resistance always dissipates some of the induced EMF",
      "The winding is distributed and often short-pitched across several slots rather than concentrated at one point per pole, deliberately done to produce a more sinusoidal output",
      "Because copper losses reduce the effective number of turns",
      "Because the rotor never reaches full magnetic saturation"
    ],
    "exp": "Kw is less than 1 because the winding is spread across several slots and often short-pitched, a deliberate design choice to produce a more sinusoidal output and reduce harmonics, at the small cost of slightly reduced EMF. Typical values are around 0.95-0.96. It has nothing to do with resistance, copper loss, or saturation.",
    "cat": "EMFEQ",
    "id": "F05_037"
  },
  {
    "q": "In the EMF equation, which quantity does the AVR adjust, and which does the governor control?",
    "a": "The AVR adjusts flux Φ via field current; the governor controls frequency f via prime mover speed",
    "opts": [
      "The AVR controls frequency, the governor controls flux",
      "Both the AVR and governor control frequency, working together",
      "The AVR adjusts flux Φ via field current; the governor controls frequency f via prime mover speed",
      "The AVR controls turns per phase N, the governor controls flux"
    ],
    "exp": "The AVR's job is entirely about controlling flux Φ by adjusting field current; it never touches frequency. Frequency is instead held by governor control of prime mover speed. Turns per phase N is a fixed design quantity that neither system adjusts during operation.",
    "cat": "EMFEQ",
    "id": "F05_038"
  },

  /* ═══════════ CONSTR ═══════════ */
  {
    "q": "Nearly all marine alternators use which construction arrangement?",
    "a": "Rotating field (electromagnet on the rotor) with a stationary armature (stator winding)",
    "opts": [
      "Rotating armature with a stationary field, as in small DC generators",
      "Rotating field (electromagnet on the rotor) with a stationary armature (stator winding)",
      "Both the field and armature rotate together on the same shaft",
      "Neither rotates; flux is switched electronically"
    ],
    "exp": "Marine alternators are almost universally rotating-field, stationary-armature machines. A rotating armature (rare) is the arrangement used only in small, low-power DC generators that already need a commutator anyway. Both field and armature rotating together, or neither rotating, do not describe any real alternator construction.",
    "cat": "CONSTR",
    "id": "F05_039"
  },
  {
    "q": "What is the function of the stator winding (armature) in a marine alternator?",
    "a": "It is the three-phase winding in which the load current flows and output EMF is induced, connecting directly to the switchboard",
    "opts": [
      "It carries the DC excitation current that creates the rotating field",
      "It is the three-phase winding in which the load current flows and output EMF is induced, connecting directly to the switchboard",
      "It provides mechanical support for the rotor shaft bearings",
      "It cools the machine by circulating air through the core"
    ],
    "exp": "The stator winding is the three-phase armature where the output EMF is induced and load current flows, connecting directly to the switchboard. Carrying DC excitation current is the job of the field (rotor) winding instead, a distinct component with a distinct purpose.",
    "cat": "CONSTR",
    "id": "F05_040"
  },
  {
    "q": "What is the function of the field (rotor) winding?",
    "a": "Carries DC excitation current and creates the rotating magnetic field",
    "opts": [
      "Carries the full three-phase load current to the switchboard",
      "Carries DC excitation current and creates the rotating magnetic field",
      "Converts AC output to DC for the ship's DC systems",
      "Provides the laminated path that reduces eddy current loss"
    ],
    "exp": "The field winding, wound on the rotor poles, carries DC excitation current and produces the rotating magnetic field. Carrying the three-phase load current is the stator winding's job. There is no AC-to-DC conversion in a standard alternator output, and laminations are a separate core construction feature, not a winding function.",
    "cat": "CONSTR",
    "id": "F05_041"
  },
  {
    "q": "Why do marine alternators rotate the field winding instead of the armature winding?",
    "a": "Only the small DC field current then passes through the slip rings, keeping insulation stress and brush wear low, while the high-power armature stays fixed and robust",
    "opts": [
      "Only the small DC field current then passes through the slip rings, keeping insulation stress and brush wear low, while the high-power armature stays fixed and robust",
      "Rotating the armature would prevent the machine from producing three-phase output at all",
      "The armature is too heavy to rotate at any practical speed",
      "A rotating armature would eliminate the need for a prime mover"
    ],
    "exp": "Rotating the field means only the low-power DC field current passes through slip rings/brushes, keeping insulation stress and brush wear low, while the high-power armature stays fixed and mechanically robust. A rotating armature can still work (it is used in small DC generators), it is simply impractical at the currents and voltages a ship's main generator produces.",
    "cat": "CONSTR",
    "id": "F05_042"
  },
  {
    "q": "What is the function of slip rings and brushes, or a brushless exciter, on an alternator?",
    "a": "To deliver DC field current to the rotating field winding",
    "opts": [
      "To rectify the three-phase output to DC for switchboard use",
      "To synchronise the alternator with the ship's busbar",
      "To deliver DC field current to the rotating field winding",
      "To provide the mechanical coupling to the prime mover"
    ],
    "exp": "Slip rings and brushes, or a brushless exciter, exist purely to deliver DC field current to the rotating field winding. They do not rectify the three-phase output (which stays AC to the switchboard), handle synchronising, or provide the mechanical coupling, which is a separate shaft-end connection.",
    "cat": "CONSTR",
    "id": "F05_043"
  },

  /* ═══════════ WORKING ═══════════ */
  {
    "q": "In the generation sequence described in the notes, what is the first step?",
    "a": "The prime mover rotates the rotor shaft at a speed fixed by the required frequency and pole count",
    "opts": [
      "The prime mover rotates the rotor shaft at a speed fixed by the required frequency and pole count",
      "DC excitation current is switched on before the shaft begins turning",
      "The AVR raises field current to its maximum starting value",
      "The stator windings are energised to create a starting torque"
    ],
    "exp": "The sequence begins with the prime mover turning the rotor shaft at the speed required for the target frequency and pole count. Excitation current, AVR action, and induced stator EMF are all consequences that follow rotor rotation, not steps that precede it.",
    "cat": "WORKING",
    "id": "F05_044"
  },
  {
    "q": "Why are the three induced EMFs in a marine alternator 120 electrical degrees apart in time?",
    "a": "Because the three stator windings are physically arranged 120 electrical degrees apart around the stator",
    "opts": [
      "Because the rotor itself completes one rotation every 120 degrees",
      "Because the AVR staggers the excitation current across three phases",
      "Because the three stator windings are physically arranged 120 electrical degrees apart around the stator",
      "Because the prime mover pulses at 120-degree intervals"
    ],
    "exp": "The three stator windings are physically spaced 120 electrical degrees apart, so as the rotor's field sweeps past each one in turn, the induced EMFs are also 120 degrees apart in time, giving a balanced three-phase output. The rotor itself simply rotates continuously; it does not complete a rotation in 120 degrees, and the AVR and prime mover play no role in this timing.",
    "cat": "WORKING",
    "id": "F05_045"
  },
  {
    "q": "Why does a three-phase alternator not need a commutator?",
    "a": "The output is meant to remain AC, with no conversion to DC required at the machine terminals",
    "opts": [
      "Because the rotor does not rotate fast enough to need one",
      "The output is meant to remain AC, with no conversion to DC required at the machine terminals",
      "Because commutators only work with single-phase output",
      "Because the stator winding is not connected to any external load"
    ],
    "exp": "The three-phase output is taken straight from the stator winding terminals to the switchboard, with no commutator or rectification needed since the output is meant to remain AC. Rotor speed and phase count are unrelated to why a commutator is unnecessary, and the stator winding is of course connected to the load.",
    "cat": "WORKING",
    "id": "F05_046"
  },
  {
    "q": "In the alternator generation sequence, what fixes the frequency of the output?",
    "a": "Rotor speed and pole count, via f = PN/120",
    "opts": [
      "The AVR setting alone",
      "The number of stator slots per phase",
      "Rotor speed and pole count, via f = PN/120",
      "The rated kVA of the machine"
    ],
    "exp": "Output frequency follows f = PN/120 from rotor speed and pole count. The AVR controls flux (voltage), not frequency, and stator slot count and rated kVA are unrelated to what sets the frequency.",
    "cat": "WORKING",
    "id": "F05_047"
  },

  /* ═══════════ ROTOR ═══════════ */
  {
    "q": "A salient pole rotor is best suited to which type of prime mover, and why?",
    "a": "Diesel engines or water turbines, because it suits the lower, torque-heavy speed range and can be built with many poles",
    "opts": [
      "Steam turbines, because projecting poles withstand very high centrifugal stress best",
      "Diesel engines or water turbines, because it suits the lower, torque-heavy speed range and can be built with many poles",
      "Gas turbines, because it needs only 2 poles to run efficiently",
      "Any prime mover equally, since rotor type has no relation to speed"
    ],
    "exp": "A salient pole rotor, with many poles and projecting construction, suits the comparatively low, torque-heavy speed range of a diesel engine or water turbine. It is not suited to steam or gas turbines, which run at very high speed where projecting poles would introduce mechanical weak points.",
    "cat": "ROTOR",
    "id": "F05_048"
  },
  {
    "q": "A cylindrical (non-salient) rotor is preferred at high speed because:",
    "a": "Its smooth construction gives higher mechanical strength, withstanding the centrifugal stress that projecting poles could not survive",
    "opts": [
      "It produces a stronger magnetic field than a salient rotor at any speed",
      "Its smooth construction gives higher mechanical strength, withstanding the centrifugal stress that projecting poles could not survive",
      "It requires no excitation current at all",
      "It always has more poles than a salient rotor, improving output"
    ],
    "exp": "A cylindrical rotor's smooth construction withstands the high centrifugal stress of steam or gas turbine speeds, unlike a salient rotor's projecting poles. It still needs DC excitation current like any rotor, and it typically has fewer poles (usually 2 or 4) than a salient rotor, not more.",
    "cat": "ROTOR",
    "id": "F05_049"
  },
  {
    "q": "Why must a rotor's construction type be matched to its prime mover rather than chosen freely?",
    "a": "A steam or gas turbine runs at very high speed, where a smooth cylindrical rotor is essential to survive centrifugal forces that projecting salient poles could not withstand",
    "opts": [
      "A steam or gas turbine runs at very high speed, where a smooth cylindrical rotor is essential to survive centrifugal forces that projecting salient poles could not withstand",
      "Salient and cylindrical rotors produce different output frequencies for the same speed",
      "Only cylindrical rotors can be excited using slip rings",
      "Matching is a cost preference only, not a physical requirement"
    ],
    "exp": "The pairing is a physical requirement, not a preference: high-speed turbines need the mechanical robustness of a smooth cylindrical rotor, while diesel engines suit the torque-heavy, many-poled salient design. Frequency depends on speed and pole count for either rotor type equally, and both types can be excited via slip rings or brushless systems.",
    "cat": "ROTOR",
    "id": "F05_050"
  },

  /* ═══════════ EXCIT ═══════════ */
  {
    "q": "What is the purpose of an alternator's excitation system?",
    "a": "To supply DC current to the rotor field winding, creating the rotating magnetic field; without it, no output voltage is generated regardless of rotor speed",
    "opts": [
      "To supply DC current to the rotor field winding, creating the rotating magnetic field; without it, no output voltage is generated regardless of rotor speed",
      "To convert the three-phase AC output into DC for the switchboard",
      "To synchronise alternator frequency with the ship's busbar frequency",
      "To cool the rotor field winding during heavy load"
    ],
    "exp": "The excitation system supplies DC current to the rotor field winding; without it there is no field and no output voltage, no matter how fast the rotor spins. It has no role in converting the output to DC (which stays AC), in synchronising frequency, or in cooling.",
    "cat": "EXCIT",
    "id": "F05_051"
  },
  {
    "q": "How does brushless excitation deliver DC field current to the rotor, avoiding brushes and slip rings entirely?",
    "a": "A small pilot exciter (AC generator) on the same shaft feeds a rotating rectifier mounted on the rotor",
    "opts": [
      "An external DC source connects directly through brushes onto the shaft",
      "A small pilot exciter (AC generator) on the same shaft feeds a rotating rectifier mounted on the rotor",
      "The AVR transmits field current wirelessly via induction coils",
      "A separate battery bank on the rotor supplies field current continuously"
    ],
    "exp": "Brushless excitation uses a small pilot exciter on the same shaft to feed a rotating rectifier, delivering DC field current with no brushes or slip rings at all, standard on most modern marine alternators. Connecting via brushes describes the separately excited (slip ring) type instead, which brushless excitation specifically avoids.",
    "cat": "EXCIT",
    "id": "F05_052"
  },
  {
    "q": "A self-excited alternator initially builds up its field current from a standing start using:",
    "a": "Residual magnetism left in the core, with a fraction of the machine's own output rectified to supply the field",
    "opts": [
      "An external battery connected permanently to the field winding",
      "Residual magnetism left in the core, with a fraction of the machine's own output rectified to supply the field",
      "A separate diesel-driven exciter unit run continuously",
      "The ship's emergency generator, switched in automatically"
    ],
    "cat": "EXCIT",
    "id": "F05_053",
    "exp": "Self-excitation relies on residual magnetism in the core to build up voltage from a standing start, with a fraction of the machine's own output then rectified to supply the field. It does not depend on an external battery, a separate continuously-run exciter, or the emergency generator."
  },
  {
    "q": "What does the Automatic Voltage Regulator (AVR) actually do?",
    "a": "Continuously senses output voltage and adjusts field (excitation) current to hold output voltage constant as load changes",
    "opts": [
      "Continuously senses frequency and adjusts governor speed to hold it constant",
      "Continuously senses output voltage and adjusts field (excitation) current to hold output voltage constant as load changes",
      "Switches the alternator on and off automatically at rated speed",
      "Balances load current equally across all three phases"
    ],
    "exp": "The AVR senses output voltage and adjusts field current to hold voltage constant as load changes, since a heavier load tends to sag terminal voltage. Sensing and adjusting frequency is the governor's job, not the AVR's. The AVR does not switch the machine on/off or balance current between phases.",
    "cat": "EXCIT",
    "id": "F05_054"
  },

  /* ═══════════ NAMEPLATE ═══════════ */
  {
    "q": "On an alternator nameplate, rated kVA represents:",
    "a": "Apparent power capacity, the true thermal and current limit of the machine",
    "opts": [
      "Real power output at unity power factor only",
      "Apparent power capacity, the true thermal and current limit of the machine",
      "The maximum reactive power the AVR can supply",
      "The rated DC excitation power"
    ],
    "exp": "Rated kVA is apparent power, the machine's true thermal and current limit. Real power (kW) depends additionally on the stated power factor. Rated kVA is not a reactive power figure controlled by the AVR, and it is unrelated to the separately-rated DC excitation supply.",
    "cat": "NAMEPLATE",
    "id": "F05_055"
  },
  {
    "q": "Why is quoting only an alternator's rated kW figure from memory, without stating the power factor it assumes, considered an incomplete answer?",
    "a": "Because kW without a stated power factor tells you nothing about the machine's true current-carrying limit, which is set by apparent power (kVA)",
    "opts": [
      "Because kW without a stated power factor tells you nothing about the machine's true current-carrying limit, which is set by apparent power (kVA)",
      "Because kW figures are never printed on marine alternator nameplates",
      "Because kW only applies to DC machines, not alternators",
      "Because power factor only matters for motors, not generators"
    ],
    "exp": "A machine's true current-carrying limit is its apparent power (kVA); kW alone, without the power factor it assumes (commonly 0.8 lagging on ships), tells you nothing about that limit. kW figures are in fact printed on nameplates, and power factor matters for generators just as much as motors.",
    "cat": "NAMEPLATE",
    "id": "F05_056"
  },
  {
    "q": "An alternator's rated speed on the nameplate is directly tied to its rated frequency by which relationship?",
    "a": "f = PN/120",
    "opts": [
      "E = 4.44fΦNKw",
      "f = PN/120",
      "Φ = MMF/S",
      "B = Φ/A"
    ],
    "exp": "Rated speed (RPM) is tied to rated frequency via f = PN/120, using the pole count P. The EMF equation relates voltage to flux, turns and frequency, not speed directly, and the other two formulae describe the magnetic circuit and flux density, unrelated to nameplate speed/frequency.",
    "cat": "NAMEPLATE",
    "id": "F05_057"
  },

  /* ═══════════ NUMERICAL ═══════════ */
  {
    "q": "A coil of inductance 3 H has its current changed from 8 A to 2 A in 0.3 seconds. Find the average self-induced EMF.",
    "a": "60 V",
    "opts": [
      "20 V",
      "60 V",
      "18 V",
      "6 V"
    ],
    "exp": "dI/dt = (2 - 8) / 0.3 = -20 A/s. e = -L(dI/dt) = -3 × (-20) = 60 V, opposing the fall in current by Lenz's Law. Forgetting to divide by 0.3 gives 18 V, and using the wrong sign convention or dropping L gives the other distractors.",
    "cat": "NUMERICAL",
    "id": "F05_058"
  },
  {
    "q": "A ship's alternator has 8 poles and must produce 50 Hz. Find the required speed.",
    "a": "750 RPM",
    "opts": [
      "750 RPM",
      "600 RPM",
      "1500 RPM",
      "375 RPM"
    ],
    "exp": "f = PN/120, so N = 120f/P = (120 × 50)/8 = 750 RPM. Using P=6 by mistake gives 1000 RPM-type errors, and doubling or halving the pole count in the substitution gives the other wrong values shown.",
    "cat": "NUMERICAL",
    "id": "F05_059"
  },
  {
    "q": "An alternator has 150 turns per phase, flux per pole of 0.04 Wb, winding factor 0.95, running at 60 Hz. Find the induced EMF per phase.",
    "a": "1518.5 V",
    "opts": [
      "1598.4 V",
      "266.4 V",
      "1518.5 V",
      "10.656 V"
    ],
    "exp": "E = 4.44 × f × Φ × N × Kw = 4.44 × 60 × 0.04 × 150 × 0.95. Step by step: 4.44 × 60 = 266.4; 266.4 × 0.04 = 10.656; 10.656 × 150 = 1598.4; 1598.4 × 0.95 = 1518.5 V approximately. The other options are intermediate steps of this same calculation, mistaken for the final answer.",
    "cat": "NUMERICAL",
    "id": "F05_060"
  },
  {
    "q": "An alternator's flux per pole is reduced by 15% via the AVR while speed and turns stay constant. Find the percentage change in induced EMF.",
    "a": "Decreases by 15%",
    "opts": [
      "Decreases by 15%",
      "Increases by 15%",
      "Decreases by 7.5%",
      "No change, since frequency is unaffected"
    ],
    "exp": "E is directly proportional to Φ in the EMF equation with everything else constant, so a 15% decrease in Φ produces a 15% decrease in E. This confirms the AVR's mechanism: trimming field current trims flux, which trims output voltage by the same proportion. Frequency being unaffected does not mean voltage is unaffected, since voltage depends on flux, not frequency, in this scenario.",
    "cat": "NUMERICAL",
    "id": "F05_061"
  },
  {
    "q": "A field coil of 500 turns carries 4 A, and the magnetic circuit has a reluctance of 2,000,000 AT/Wb. Find the flux produced.",
    "a": "0.001 Wb",
    "opts": [
      "2000 Wb",
      "1000 Wb",
      "0.5 Wb",
      "0.001 Wb"
    ],
    "exp": "First find MMF = N × I = 500 × 4 = 2000 AT. Then Φ = MMF / S = 2000 / 2,000,000 = 0.001 Wb. Stopping at the MMF value and mistaking it for flux, or forgetting to convert reluctance's scale, produces the other wrong answers.",
    "cat": "NUMERICAL",
    "id": "F05_062"
  },
  {
    "q": "A machine pole face has an area of 0.1 m² and must not exceed a flux density of 1.6 T to stay within the core's saturation limit. What is the maximum flux this pole face can carry?",
    "a": "0.16 Wb",
    "opts": [
      "1.6 Wb",
      "0.16 Wb",
      "16 Wb",
      "0.016 Wb"
    ],
    "exp": "Φ = B × A = 1.6 × 0.1 = 0.16 Wb. This is the flux density formula B = Φ/A rearranged to find flux; multiplying wrongly by a factor of 10 in either direction gives the other listed values.",
    "cat": "NUMERICAL",
    "id": "F05_063"
  }

]);

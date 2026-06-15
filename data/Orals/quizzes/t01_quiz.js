window.loadQuizzes("T01_Alternator", [
  {
    "q": "What law states that EMF is induced when there is a relative change in magnetic flux linkage?",
    "a": "Faraday's Law of Electromagnetic Induction",
    "opts": [
      "Lenz's Law",
      "Faraday's Law of Electromagnetic Induction",
      "Kirchhoff's Voltage Law",
      "Ampere's Circuital Law"
    ],
    "exp": "Faraday's Law is the foundational principle asked by every surveyor regarding alternator operation.",
    "cat": "PRIN",
    "id": "T01A_001"
  },
  {
    "q": "In a marine alternator, which component carries the DC excitation current?",
    "a": "The rotating rotor field winding",
    "opts": [
      "The stationary stator conductors",
      "The rotating rotor field winding",
      "The permanent magnet armature",
      "The AC output terminals"
    ],
    "exp": "The rotor carries the low DC excitation current supplied by the AVR.",
    "cat": "PRIN",
    "id": "T01A_002"
  },
  {
    "q": "Where is the balanced 3-phase AC output induced in a marine alternator?",
    "a": "In the stationary stator conductors",
    "opts": [
      "In the rotating rotor field",
      "In the stationary stator conductors",
      "In the exciter armature",
      "In the rotating diode wheel"
    ],
    "exp": "The stationary stator armature conductors are cut by the rotating rotor field to induce 3-phase AC.",
    "cat": "PRIN",
    "id": "T01A_003"
  },
  {
    "q": "Why are slip rings NOT needed for the main heavy current output?",
    "a": "Because the high-voltage output is taken directly from stationary stator terminals",
    "opts": [
      "Because the rotor uses a brushless excitation system",
      "Because slip rings are only used for AC power",
      "Because the high-voltage output is taken directly from stationary stator terminals",
      "Because the main field is static"
    ],
    "exp": "Heavy AC current is taken from the stationary stator, eliminating the need to transfer it through sliding contacts.",
    "cat": "PRIN",
    "id": "T01A_004"
  },
  {
    "q": "What is the formula to calculate alternator frequency?",
    "a": "f = (P × N) / 120",
    "opts": [
      "f = (P × N) / 60",
      "f = (P × N) / 120",
      "f = 120 / (P × N)",
      "f = (120 × P) / N"
    ],
    "exp": "Frequency (Hz) equals the number of poles (P) times shaft speed (N) divided by 120.",
    "cat": "PRIN",
    "id": "T01A_005"
  },
  {
    "q": "What is the required shaft speed for a 4-pole alternator to produce 60 Hz?",
    "a": "1800 RPM",
    "opts": [
      "1500 RPM",
      "1800 RPM",
      "3600 RPM",
      "1200 RPM"
    ],
    "exp": "Using f = PN/120, N = (60 × 120) / 4 = 1800 RPM.",
    "cat": "PRIN",
    "id": "T01A_006"
  },
  {
    "q": "What is the required shaft speed for a 4-pole alternator to produce 50 Hz?",
    "a": "1500 RPM",
    "opts": [
      "1200 RPM",
      "1800 RPM",
      "1500 RPM",
      "1000 RPM"
    ],
    "exp": "Using f = PN/120, N = (50 × 120) / 4 = 1500 RPM.",
    "cat": "PRIN",
    "id": "T01A_007"
  },
  {
    "q": "What is the required shaft speed for a 2-pole alternator to produce 60 Hz?",
    "a": "3600 RPM",
    "opts": [
      "1800 RPM",
      "3000 RPM",
      "3600 RPM",
      "1200 RPM"
    ],
    "exp": "Using f = PN/120, N = (60 × 120) / 2 = 3600 RPM.",
    "cat": "PRIN",
    "id": "T01A_008"
  },
  {
    "q": "What is the required shaft speed for a 6-pole alternator to produce 50 Hz?",
    "a": "1000 RPM",
    "opts": [
      "1200 RPM",
      "1500 RPM",
      "1800 RPM",
      "1000 RPM"
    ],
    "exp": "Using f = PN/120, N = (50 × 120) / 6 = 1000 RPM.",
    "cat": "PRIN",
    "id": "T01A_009"
  },
  {
    "q": "Why are alternators rated in kVA instead of kW?",
    "a": "Winding heating depends directly on apparent power (kVA), not active power",
    "opts": [
      "Because mechanical output is measured in kW",
      "Winding heating depends directly on apparent power (kVA), not active power",
      "Because they operate at unity power factor",
      "kVA accounts for mechanical losses in the prime mover"
    ],
    "exp": "Current causes I²R heating, which is determined by apparent power (kVA) regardless of the load's power factor.",
    "cat": "PRIN",
    "id": "T01A_010"
  },
  {
    "q": "What is the mathematical relationship between kW and kVA?",
    "a": "kW = kVA × PF",
    "opts": [
      "kVA = kW × PF",
      "kW = kVA / PF",
      "kW = kVA × PF",
      "kW = PF / kVA"
    ],
    "exp": "Active power (kW) is apparent power (kVA) multiplied by the power factor (PF).",
    "cat": "PRIN",
    "id": "T01A_011"
  },
  {
    "q": "Why are motors rated in kW rather than kVA?",
    "a": "Because their useful mechanical output is active power",
    "opts": [
      "Because their useful mechanical output is active power",
      "Because they only consume reactive power",
      "Because motor current does not cause heating",
      "Because they operate independently of voltage"
    ],
    "exp": "Motors convert electrical energy to mechanical work, which is strictly active power (kW).",
    "cat": "PRIN",
    "id": "T01A_012"
  },
  {
    "q": "What happens if a brush-type alternator requires high excitation current?",
    "a": "It needs larger slip rings",
    "opts": [
      "It requires a smaller stator frame",
      "It needs larger slip rings",
      "It reduces output frequency",
      "It bypasses the AVR completely"
    ],
    "exp": "Low DC current means small slip rings; higher current would necessitate larger slip rings for transfer.",
    "cat": "PRIN",
    "id": "T01A_013"
  },
  {
    "q": "Which part of the alternator creates the rotating magnetic field?",
    "a": "The rotor",
    "opts": [
      "The stator armature",
      "The PMG stator",
      "The rotor",
      "The stationary diodes"
    ],
    "exp": "The rotor carries the DC field winding and creates the rotating magnetic field.",
    "cat": "PRIN",
    "id": "T01A_014"
  },
  {
    "q": "What type of voltage is supplied by the AVR to the rotor in a conventional brush-type unit?",
    "a": "Low DC current",
    "opts": [
      "High AC current",
      "Low DC current",
      "High-voltage 3-phase AC",
      "Static AC current"
    ],
    "exp": "The AVR rectifies and controls low DC current fed to the rotor.",
    "cat": "PRIN",
    "id": "T01A_015"
  },
  {
    "q": "Which SOLAS regulation mandates the flooding protection rationale for alternator placement?",
    "a": "SOLAS II-1/Reg 40",
    "opts": [
      "SOLAS II-2/Reg 10",
      "SOLAS II-1/Reg 40",
      "SOLAS III/Reg 6",
      "SOLAS IV/Reg 14"
    ],
    "exp": "SOLAS II-1/Reg 40 dictates electrical installations must be protected, prompting elevated placement above the tank top.",
    "cat": "PLACE",
    "id": "T01A_016"
  },
  {
    "q": "Why are alternators NEVER placed on the double bottom tank top?",
    "a": "To protect them from immediate flooding and severe mechanical vibration",
    "opts": [
      "Because the tank top is reserved for purifiers only",
      "To protect them from immediate flooding and severe mechanical vibration",
      "Because cables cannot be routed below the floor plates",
      "Because cold tank temperatures reduce winding insulation"
    ],
    "exp": "The tank top floods first during a leak and suffers massive vibration from the main engine.",
    "cat": "PLACE",
    "id": "T01A_017"
  },
  {
    "q": "Which systems must the generators power during an engine room flooding emergency?",
    "a": "Bilge pumps, steering, and emergency systems",
    "opts": [
      "Galley ovens, HVAC, and laundry",
      "Purifiers and air compressors",
      "Bilge pumps, steering, and emergency systems",
      "Main engine turning gear"
    ],
    "exp": "Elevating the generators ensures they remain functional to supply critical safety equipment during flooding.",
    "cat": "PLACE",
    "id": "T01A_018"
  },
  {
    "q": "What causes the highest mechanical vibration at the tank top?",
    "a": "Main engine crankshaft and propeller thrust",
    "opts": [
      "Auxiliary blowers and purifiers",
      "Main engine crankshaft and propeller thrust",
      "The steering gear hydraulic pumps",
      "Boiler forced draft fans"
    ],
    "exp": "The structural vibration from the main engine and propeller is concentrated at the bottom framework.",
    "cat": "PLACE",
    "id": "T01A_019"
  },
  {
    "q": "What components are protected by mitigating structural vibrations?",
    "a": "Bearing alignments and stator windings",
    "opts": [
      "Fuel injector nozzles",
      "Governor flyweights",
      "Bearing alignments and stator windings",
      "Cooling water impellers"
    ],
    "exp": "Placing alternators on upper platforms dampens vibrations that would otherwise misalign bearings and loosen windings.",
    "cat": "PLACE",
    "id": "T01A_020"
  },
  {
    "q": "What maintenance access requirement influences alternator placement?",
    "a": "Overhead gantry crane access for stator/rotor extraction",
    "opts": [
      "Forklift access from the workshop",
      "Overhead gantry crane access for stator/rotor extraction",
      "Chain block mounting points on the bulkhead",
      "Access for external shore cranes through the skylight"
    ],
    "exp": "Upper platforms allow the engine room gantry crane to position directly above for heavy lifting.",
    "cat": "PLACE",
    "id": "T01A_021"
  },
  {
    "q": "How does placement on an upper platform affect alternator cooling?",
    "a": "It provides much better fresh air circulation and forced draft cooling",
    "opts": [
      "It allows direct seawater spray cooling",
      "It prevents cooling fans from spinning too fast",
      "It provides much better fresh air circulation and forced draft cooling",
      "It uses engine room exhaust gas for thermal balance"
    ],
    "exp": "Upper platforms are less humid and oily than the tank top, providing cooler, cleaner air for ventilation.",
    "cat": "PLACE",
    "id": "T01A_022"
  },
  {
    "q": "Which environmental condition is highly restricted near the tank top?",
    "a": "Fresh air circulation",
    "opts": [
      "Oil mist accumulation",
      "High humidity",
      "Fresh air circulation",
      "Bilge water"
    ],
    "exp": "The tank top has a hot, humid, and oily atmosphere with poor fresh air circulation.",
    "cat": "PLACE",
    "id": "T01A_023"
  },
  {
    "q": "If an alternator were on the bottom platform, what would be the first hazard during a hull breach?",
    "a": "It would be the first to be submerged",
    "opts": [
      "It would suffer immediate bearing failure",
      "It would be the first to be submerged",
      "The overhead crane would crush it",
      "It would trip on overvoltage"
    ],
    "exp": "The bottom platform (bilge/tank top level) fills with water first during flooding.",
    "cat": "PLACE",
    "id": "T01A_025"
  },
  {
    "q": "Where are alternators ALWAYS installed in the engine room?",
    "a": "On the intermediate or upper platform",
    "opts": [
      "Directly over the propeller shaft",
      "On the intermediate or upper platform",
      "Inside the purifier room",
      "On the bottom platform adjacent to bilges"
    ],
    "exp": "They are placed on elevated platforms to avoid flooding and vibration.",
    "cat": "PLACE",
    "id": "T01A_026"
  },
  {
    "q": "What specific alternator maintenance task requires the gantry crane?",
    "a": "Stator/rotor extraction",
    "opts": [
      "Cleaning the slip rings",
      "Adjusting the AVR trimmer",
      "Stator/rotor extraction",
      "Replacing the air filters"
    ],
    "exp": "Heavy maintenance like extracting the heavy rotor requires overhead lifting equipment.",
    "cat": "PLACE",
    "id": "T01A_027"
  },
  {
    "q": "Why is the atmosphere near the tank top detrimental to alternators?",
    "a": "It is hot, humid, and oily",
    "opts": [
      "It is too cold and dry",
      "It lacks sufficient oxygen for combustion",
      "It is hot, humid, and oily",
      "It has excessive static electricity"
    ],
    "exp": "The bottom of the engine room accumulates oil and moisture, which degrades winding insulation.",
    "cat": "PLACE",
    "id": "T01A_028"
  },
  {
    "q": "What does elevating the generator ensure during an emergency?",
    "a": "It remains functional longer to supply power",
    "opts": [
      "It automatically disconnects from the switchboard",
      "It remains functional longer to supply power",
      "It acts as a mechanical balancer",
      "It sheds non-essential load instantly"
    ],
    "exp": "Keeping the generator above the initial flood level buys critical time to pump out bilges.",
    "cat": "PLACE",
    "id": "T01A_029"
  },
  {
    "q": "Besides the main engine crankshaft, what causes extreme vibration at the tank top?",
    "a": "Propeller thrust",
    "opts": [
      "The ship's bow thruster",
      "Propeller thrust",
      "The windlass drop",
      "Ballast pump cavitation"
    ],
    "exp": "The physical push of the propeller is transmitted directly into the ship's bottom structure.",
    "cat": "PLACE",
    "id": "T01A_030"
  },
  {
    "q": "What external source supplies a separately excited alternator?",
    "a": "Batteries or a rectifier",
    "opts": [
      "The main generator's own output",
      "Batteries or a rectifier",
      "A permanent magnet generator",
      "A static thyristor bank"
    ],
    "exp": "Separately excited units use an external DC source like batteries to supply the rotor field.",
    "cat": "EXCIT",
    "id": "T01A_031"
  },
  {
    "q": "What is a major maintenance disadvantage of separately excited systems?",
    "a": "Requires carbon brush maintenance",
    "opts": [
      "Requires frequent AVR programming",
      "Cannot operate in parallel",
      "Requires carbon brush maintenance",
      "Burns out diodes frequently"
    ],
    "exp": "Separately excited systems use slip rings, meaning carbon brushes must be maintained.",
    "cat": "EXCIT",
    "id": "T01A_032"
  },
  {
    "q": "How does a self-excited shunt system supply its field?",
    "a": "Generator output is stepped down and rectified to supply its own field",
    "opts": [
      "Generator output is stepped down and rectified to supply its own field",
      "It uses a PMG on the same shaft",
      "It takes power directly from the ship's 24V battery bank",
      "It uses static thyristors without a rectifier"
    ],
    "exp": "It feeds a portion of its own AC output back into a rectifier for the rotor.",
    "cat": "EXCIT",
    "id": "T01A_033"
  },
  {
    "q": "What is strictly required for a self-excited shunt generator to start generating voltage?",
    "a": "Initial residual magnetism",
    "opts": [
      "A secondary battery bank",
      "Initial residual magnetism",
      "A PMG system",
      "Static thyristor triggering"
    ],
    "exp": "It relies on residual magnetism to generate a small initial voltage to bootstrap the system.",
    "cat": "EXCIT",
    "id": "T01A_034"
  },
  {
    "q": "Why is the brushless excitation system ideal for Unattended Machinery Spaces (UMS)?",
    "a": "It completely eliminates brushes and slip rings",
    "opts": [
      "It does not require an AVR",
      "It completely eliminates brushes and slip rings",
      "It runs entirely on DC voltage",
      "It generates a constant 50 Hz regardless of RPM"
    ],
    "exp": "No sliding contacts means zero brush maintenance and no sparking, making it ideal for UMS.",
    "cat": "EXCIT",
    "id": "T01A_035"
  },
  {
    "q": "What component in a static excitation system supplies DC directly from the stator to the rotor?",
    "a": "Thyristor-controlled rectifier",
    "opts": [
      "Permanent magnet generator",
      "Thyristor-controlled rectifier",
      "Rotating diode wheel",
      "Carbon-pile stack"
    ],
    "exp": "Static excitation uses thyristors to rectify stator output and feed it straight to the slip rings.",
    "cat": "EXCIT",
    "id": "T01A_036"
  },
  {
    "q": "What is the primary advantage of static excitation?",
    "a": "Offers exceptionally fast transient response",
    "opts": [
      "Eliminates the need for slip rings entirely",
      "Requires zero initial residual magnetism",
      "Offers exceptionally fast transient response",
      "Is the cheapest to manufacture for small boats"
    ],
    "exp": "Thyristors allow for voltage recovery in milliseconds, ideal for tight voltage regulation.",
    "cat": "EXCIT",
    "id": "T01A_037"
  },
  {
    "q": "Where is static excitation most commonly used?",
    "a": "On large turbo-alternators and shore-based power stations",
    "opts": [
      "On emergency generators under 100 kW",
      "On modern marine cargo ships",
      "On separately excited emergency drives",
      "On large turbo-alternators and shore-based power stations"
    ],
    "exp": "Due to its fast response and tight regulation, it's used on large grid-connected generators.",
    "cat": "EXCIT",
    "id": "T01A_038"
  },
  {
    "q": "Why are separately excited and self-excited generators a risk in cargo pump rooms?",
    "a": "Because slip rings create a sparking risk in hazardous areas",
    "opts": [
      "Because they require too much physical space",
      "Because slip rings create a sparking risk in hazardous areas",
      "Because they cannot handle heavy motor starting currents",
      "Because they output DC instead of AC"
    ],
    "exp": "Brushes riding on slip rings create sparks, which is a severe explosion risk in hazardous areas.",
    "cat": "EXCIT",
    "id": "T01A_039"
  },
  {
    "q": "Which excitation type is the standard for modern marine applications?",
    "a": "Brushless",
    "opts": [
      "Separately Excited",
      "Brushless",
      "Self-Excited Shunt",
      "Static Excitation"
    ],
    "exp": "Brushless is the preferred choice to eliminate maintenance and sparking.",
    "cat": "EXCIT",
    "id": "T01A_040"
  },
  {
    "q": "Which excitation systems use slip rings?",
    "a": "Separately excited, self-excited, and static excitation",
    "opts": [
      "Brushless and static excitation only",
      "Separately excited, self-excited, and static excitation",
      "Self-excited and brushless only",
      "Separately excited only"
    ],
    "exp": "All types except brushless require physical slip rings to transfer power to the rotor.",
    "cat": "EXCIT",
    "id": "T01A_041"
  },
  {
    "q": "How does a brushless alternator transfer power to the rotating field?",
    "a": "Via a rotating rectifier mounted on the same shaft",
    "opts": [
      "Via thyristors connected to external slip rings",
      "Via a rotating rectifier mounted on the same shaft",
      "Via inductive coupling across the air gap",
      "Via carbon brushes riding on a commutator"
    ],
    "exp": "The diode wheel converts AC to DC directly on the shaft, avoiding slip rings.",
    "cat": "EXCIT",
    "id": "T01A_042"
  },
  {
    "q": "What does PMG stand for in excitation systems?",
    "a": "Permanent Magnet Generator",
    "opts": [
      "Pulse Modulated Generator",
      "Phase Matched Grid",
      "Permanent Magnet Generator",
      "Power Monitoring Gauge"
    ],
    "exp": "The PMG provides the initial, independent power source for the AVR.",
    "cat": "EXCIT",
    "id": "T01A_043"
  },
  {
    "q": "Which systems rely on initial residual magnetism to start generating?",
    "a": "Self-Excited Shunt",
    "opts": [
      "Separately Excited",
      "Brushless",
      "Self-Excited Shunt",
      "Static Excitation"
    ],
    "exp": "Without a PMG or external battery, self-excited units must bootstrap from residual flux.",
    "cat": "EXCIT",
    "id": "T01A_044"
  },
  {
    "q": "Why is static excitation preferred for shore grids?",
    "a": "Because tight voltage regulation and fast recovery is critical",
    "opts": [
      "Because it eliminates slip rings",
      "Because tight voltage regulation and fast recovery is critical",
      "Because it is immune to short circuits",
      "Because it does not require an AVR"
    ],
    "exp": "Thyristors allow millisecond adjustments, crucial for grid stability.",
    "cat": "EXCIT",
    "id": "T01A_045"
  },
  {
    "q": "What is the correct power flow sequence in a brushless alternator?",
    "a": "PMG → AVR → Exciter Field (S) → Exciter Armature (R) AC → Rotating Diodes → Main Field (R) DC → Stator AC Output",
    "opts": [
      "AVR → PMG → Rotating Diodes → Exciter Field (S) → Main Field (R) DC",
      "PMG → AVR → Exciter Field (S) → Exciter Armature (R) AC → Rotating Diodes → Main Field (R) DC → Stator AC Output",
      "Exciter Armature → Rotating Diodes → PMG → AVR → Main Field → Stator Output",
      "Main Field (R) → Rotating Diodes → Exciter Armature → AVR → PMG"
    ],
    "exp": "This is the exact, verbatim chain of the three-machine system transferring power without brushes.",
    "cat": "BRUSH",
    "id": "T01A_046"
  },
  {
    "q": "What is the function of the PMG in a brushless alternator?",
    "a": "Generates initial AC voltage without external excitation",
    "opts": [
      "Rectifies AC to DC for the main field",
      "Regulates the terminal voltage under load",
      "Generates initial AC voltage without external excitation",
      "Acts as a surge suppressor during breaker trips"
    ],
    "exp": "The PMG uses permanent magnets to supply the AVR directly, bypassing residual magnetism.",
    "cat": "BRUSH",
    "id": "T01A_047"
  },
  {
    "q": "How is the Main Exciter constructed in a brushless system?",
    "a": "Reversed construction: stationary field winding, rotating armature",
    "opts": [
      "Standard construction: rotating field, stationary armature",
      "Reversed construction: stationary field winding, rotating armature",
      "It consists entirely of permanent magnets",
      "It has no windings, only a solid iron core"
    ],
    "exp": "The exciter is reversed so the generated AC is on the rotor, feeding directly into the diode wheel.",
    "cat": "BRUSH",
    "id": "T01A_048"
  },
  {
    "q": "What is the effect if one rotating diode fails open-circuit?",
    "a": "Output voltage drops by approximately 15–20% under load",
    "opts": [
      "The generator trips instantly on reverse power",
      "Output voltage increases by 20% uncontrollably",
      "The alternator motors and draws power from the busbar",
      "Output voltage drops by approximately 15–20% under load"
    ],
    "exp": "An open diode causes unbalanced DC and a 15-20% voltage sag when loaded, despite appearing normal at no-load.",
    "cat": "BRUSH",
    "id": "T01A_049"
  },
  {
    "q": "What physical symptom indicates a short-circuited rotating diode?",
    "a": "Increased electrical vibration and rapid rotor heating",
    "opts": [
      "Complete loss of residual magnetism",
      "Increased electrical vibration and rapid rotor heating",
      "A perfectly smooth voltage waveform with no output",
      "Immediate overspeed trip of the prime mover"
    ],
    "exp": "A shorted diode allows reverse current (AC) into the field, causing unbalanced magnetic forces and severe vibration.",
    "cat": "BRUSH",
    "id": "T01A_050"
  },
  {
    "q": "How can you identify a faulty diode at standstill?",
    "a": "Measure forward-bias voltage drop, which should be ~0.6–0.7V",
    "opts": [
      "Measure insulation resistance with a 500V megger",
      "Check for residual magnetism in the stator",
      "Measure forward-bias voltage drop, which should be ~0.6–0.7V",
      "Apply 440V AC to the diode wheel"
    ],
    "exp": "A healthy silicon diode will show a standard 0.6-0.7V forward-bias drop.",
    "cat": "BRUSH",
    "id": "T01A_051"
  },
  {
    "q": "What is the purpose of the surge suppressor (varistor) on the rotor?",
    "a": "Absorbs the high-voltage transient spike when the generator is disconnected from load",
    "opts": [
      "Increases the voltage output during motor starting",
      "Converts AC to DC when diodes fail",
      "Absorbs the high-voltage transient spike when the generator is disconnected from load",
      "Maintains residual magnetism in the exciter"
    ],
    "exp": "When the ACB trips, the collapsing magnetic field creates a back-EMF spike that can destroy diodes; the varistor clamps it.",
    "cat": "BRUSH",
    "id": "T01A_052"
  },
  {
    "q": "Why does the exciter produce a higher frequency (200–400 Hz) than the main alternator?",
    "a": "To provide a smoother DC ripple after rectification",
    "opts": [
      "To prevent the rotor from over-speeding",
      "To provide a smoother DC ripple after rectification",
      "Because it has fewer poles than the main alternator",
      "To increase the overall active power (kW) output"
    ],
    "exp": "A higher frequency creates a much cleaner, more stable DC current for the main field after passing through the diodes.",
    "cat": "BRUSH",
    "id": "T01A_053"
  },
  {
    "q": "What converts the 3-phase AC from the exciter into DC for the main field?",
    "a": "Rotating Rectifier (Diode Wheel)",
    "opts": [
      "The AVR",
      "The Stator Armature",
      "Rotating Rectifier (Diode Wheel)",
      "The Surge Suppressor"
    ],
    "exp": "The diode wheel, mounted on the shaft, performs this rectification.",
    "cat": "BRUSH",
    "id": "T01A_054"
  },
  {
    "q": "What is the correct action if you find one faulty rotating diode?",
    "a": "Replace the full set because they age together",
    "opts": [
      "Replace only the faulty diode to save costs",
      "Bypass the faulty diode and run at reduced load",
      "Replace the full set because they age together",
      "Replace the AVR board immediately"
    ],
    "exp": "Diodes undergo similar thermal and electrical stress; a full set replacement prevents immediate subsequent failures.",
    "cat": "BRUSH",
    "id": "T01A_055"
  },
  {
    "q": "What happens in the main alternator armature?",
    "a": "Stationary stator winding is cut by the main rotating field, inducing 3-phase AC",
    "opts": [
      "Stationary stator winding is cut by the main rotating field, inducing 3-phase AC",
      "Rotating armature is cut by a stationary field, producing DC",
      "Permanent magnets generate the initial control voltage",
      "High frequency AC is rectified to DC"
    ],
    "exp": "This is the final step in the chain: the main field cuts the stator to produce the ship's 440V output.",
    "cat": "BRUSH",
    "id": "T01A_056"
  },
  {
    "q": "Why might a generator with an open diode appear normal at no-load?",
    "a": "The AVR can force enough excitation to maintain voltage without load",
    "opts": [
      "The PMG bypasses the diode wheel when unloaded",
      "Residual magnetism covers the voltage gap",
      "The AVR can force enough excitation to maintain voltage without load",
      "The exciter frequency drops at no-load"
    ],
    "exp": "The AVR masks the fault at no-load, but once loaded, it maxes out and the voltage heavily sags.",
    "cat": "BRUSH",
    "id": "T01A_057"
  },
  {
    "q": "Where is the main exciter armature located?",
    "a": "On the rotor",
    "opts": [
      "On the stationary stator frame",
      "Inside the AVR panel",
      "On the rotor",
      "Connected directly to the busbars"
    ],
    "exp": "The exciter is reversed; its armature winding is on the rotating shaft.",
    "cat": "BRUSH",
    "id": "T01A_058"
  },
  {
    "q": "What feeds the stationary Exciter Stator Field Winding?",
    "a": "The AVR",
    "opts": [
      "The Main Alternator Field",
      "The Rotating Rectifier",
      "The AVR",
      "The Ship's Battery"
    ],
    "exp": "The AVR outputs controlled DC directly into the stationary exciter field.",
    "cat": "BRUSH",
    "id": "T01A_059"
  },
  {
    "q": "How does an open-circuit diode affect the DC field waveform?",
    "a": "It results in an unbalanced DC feed with an increased ripple component",
    "opts": [
      "It completely flattens the DC to zero",
      "It creates a perfect sine wave AC feed",
      "It results in an unbalanced DC feed with an increased ripple component",
      "It causes the frequency to double"
    ],
    "exp": "Missing one phase of rectification creates a severe voltage dip in the DC ripple, causing hunting.",
    "cat": "BRUSH",
    "id": "T01A_060"
  },
  {
    "q": "What is the absolute rule regarding AVRs and Megger testing?",
    "a": "ALWAYS disconnect the AVR entirely before carrying out winding insulation resistance tests",
    "opts": [
      "Test the AVR with 500V DC to ensure it is waterproof",
      "ALWAYS disconnect the AVR entirely before carrying out winding insulation resistance tests",
      "Short circuit the AVR output before applying 2500V",
      "Leave the AVR connected to check the whole system"
    ],
    "exp": "Megger voltages will permanently destroy the sensitive semiconductors (thyristors, diodes) inside the AVR.",
    "cat": "AVR",
    "id": "T01A_061"
  },
  {
    "q": "What does the AVR compare the sensed output voltage against?",
    "a": "An internal Reference Voltage",
    "opts": [
      "The busbar frequency",
      "An internal Reference Voltage",
      "The PMG current output",
      "The exciter field resistance"
    ],
    "exp": "The AVR works on closed-loop feedback, comparing the PT-sensed voltage against its set internal reference.",
    "cat": "AVR",
    "id": "T01A_062"
  },
  {
    "q": "What is the function of the Droop trimmer on the AVR?",
    "a": "Sets reactive (kVAR) load sharing characteristic",
    "opts": [
      "Sets active (kW) load sharing",
      "Sets the nominal output voltage setpoint",
      "Sets reactive (kVAR) load sharing characteristic",
      "Prevents voltage hunting"
    ],
    "exp": "AVR droop intentionally sags voltage slightly as reactive current increases, balancing kVAR between machines.",
    "cat": "AVR",
    "id": "T01A_063"
  },
  {
    "q": "What happens if the Stability trimmer on the AVR is set too low?",
    "a": "Voltage oscillates (hunts)",
    "opts": [
      "Sluggish, slow transient recovery",
      "Generator trips on overvoltage instantly",
      "Unequal kVAR sharing between machines",
      "Voltage oscillates (hunts)"
    ],
    "exp": "The stability (damping) trimmer prevents hunting. Too low means under-damped oscillations.",
    "cat": "AVR",
    "id": "T01A_064"
  },
  {
    "q": "What does the Soft Start trimmer control?",
    "a": "The rate of voltage build-up during starting sequence",
    "opts": [
      "The speed of the prime mover during cranking",
      "The rate of voltage build-up during starting sequence",
      "The delay before the ACB closes automatically",
      "The amount of active power accepted upon synchronization"
    ],
    "exp": "It ramps up the excitation slowly to prevent overvoltage spikes when the generator is started.",
    "cat": "AVR",
    "id": "T01A_065"
  },
  {
    "q": "If a generator is running but producing low/no voltage, what is the FIRST thing you should check?",
    "a": "Check voltmeter calibration first (portable multimeter across terminals)",
    "opts": [
      "Check the rotating diodes",
      "Field flash the exciter directly",
      "Check voltmeter calibration first (portable multimeter across terminals)",
      "Replace the AVR board immediately"
    ],
    "exp": "Always verify that the panel meter isn't simply broken before dismantling the generator.",
    "cat": "AVR",
    "id": "T01A_066"
  },
  {
    "q": "During fault finding, if the PMG output is absent, what is the likely cause?",
    "a": "PMG magnets demagnetised or winding open-circuit",
    "opts": [
      "Exciter field winding is shorted",
      "AVR board has a blown thyristor",
      "PMG magnets demagnetised or winding open-circuit",
      "The rotating diodes are open-circuit"
    ],
    "exp": "A missing small AC voltage at the AVR input indicates the PMG itself has failed.",
    "cat": "AVR",
    "id": "T01A_067"
  },
  {
    "q": "What should the exciter field winding resistance measure?",
    "a": "A few ohms",
    "opts": [
      "Zero ohms (dead short)",
      "A few ohms",
      "Infinite resistance (open circuit)",
      "Exactly 500 ohms"
    ],
    "exp": "A healthy exciter stator field winding has low resistance (a few ohms). An open circuit means no excitation.",
    "cat": "AVR",
    "id": "T01A_068"
  },
  {
    "q": "How does a Carbon-Pile AVR function?",
    "a": "Resistance decreases as pressure on the carbon discs increases",
    "opts": [
      "Resistance increases as temperature rises",
      "Resistance decreases as pressure on the carbon discs increases",
      "It controls the firing angle of a thyristor",
      "It uses a permanent magnet to modulate flux"
    ],
    "exp": "An electromagnet squeezes the carbon stack; more pressure drops the resistance to regulate field current.",
    "cat": "AVR",
    "id": "T01A_069"
  },
  {
    "q": "What is a major disadvantage of the Carbon-Pile AVR?",
    "a": "Carbon discs wear and need replacing, slow mechanical movement",
    "opts": [
      "It is extremely sensitive to transient overvoltage spikes",
      "It requires a complex PCB replacement to fix",
      "Carbon discs wear and need replacing, slow mechanical movement",
      "It only works on 6.6kV systems"
    ],
    "exp": "Being purely mechanical, it suffers from physical wear, spring fatigue, and slow response.",
    "cat": "AVR",
    "id": "T01A_070"
  },
  {
    "q": "What is the control element in an electronic AVR?",
    "a": "Thyristor (SCR) firing angle",
    "opts": [
      "Variable-resistance carbon stack",
      "Thyristor (SCR) firing angle",
      "Mechanical dashpot delay",
      "Pneumatic bellows"
    ],
    "exp": "Modern AVRs use Silicon Controlled Rectifiers (thyristors) to quickly gate DC current to the field.",
    "cat": "AVR",
    "id": "T01A_071"
  },
  {
    "q": "What component can back-feed voltage causing false IR readings if not disconnected?",
    "a": "The AVR",
    "opts": [
      "The PMG",
      "The AVR",
      "The Reverse Power Relay",
      "The Synchronizing Panel"
    ],
    "exp": "AVR sensing circuits connected to the stator can skew Megger readings and be destroyed in the process.",
    "cat": "AVR",
    "id": "T01A_072"
  },
  {
    "q": "If the Voltage Adjust trimmer is misadjusted, what happens?",
    "a": "Generator runs over- or under-voltage; SOLAS limits breached",
    "opts": [
      "Generator runs over- or under-voltage; SOLAS limits breached",
      "Active power (kW) becomes unbalanced",
      "The prime mover over-speeds",
      "The synchroscope rotates counter-clockwise"
    ],
    "exp": "This trimmer directly sets the 440V output target.",
    "cat": "AVR",
    "id": "T01A_073"
  },
  {
    "q": "What is the consequence of setting the Soft Start trimmer too fast?",
    "a": "Overvoltage spike on startup trips OV relay",
    "opts": [
      "Excitation fails to build up entirely",
      "The generator motors from the busbar",
      "Overvoltage spike on startup trips OV relay",
      "The engine stalls due to immediate load"
    ],
    "exp": "If voltage builds too rapidly before the AVR feedback catches it, the spike will trigger the over-voltage protection.",
    "cat": "AVR",
    "id": "T01A_074"
  },
  {
    "q": "In an electronic AVR, what does the amplified error signal control?",
    "a": "It controls thyristor firing angle to adjust the DC excitation",
    "opts": [
      "It controls the fuel rack on the engine governor",
      "It controls thyristor firing angle to adjust the DC excitation",
      "It controls the tension on the carbon-pile spring",
      "It directly modifies the PMG output frequency"
    ],
    "exp": "The error signal alters the gate timing of the SCR, controlling how much DC flows to the exciter field.",
    "cat": "AVR",
    "id": "T01A_075"
  },
  {
    "q": "What is the formula for calculating voltage regulation (VR%)?",
    "a": "VR% = (E₀ − V) / V × 100",
    "opts": [
      "VR% = (V − E₀) / E₀ × 100",
      "VR% = (E₀ − V) / V × 100",
      "VR% = (E₀ + V) / V × 100",
      "VR% = (V / E₀) × 100"
    ],
    "exp": "It is the no-load voltage minus full-load voltage, divided by full-load voltage, expressed as a percentage.",
    "cat": "VOLT",
    "id": "T01A_076"
  },
  {
    "q": "Which two tests are required to predetermine voltage regulation using either the EMF or MMF method?",
    "a": "Open Circuit Characteristic (OCC) and Short Circuit Characteristic (SCC)",
    "opts": [
      "No-Load Test and Locked Rotor Test",
      "Insulation Resistance Test and Polarization Index",
      "Open Circuit Characteristic (OCC) and Short Circuit Characteristic (SCC)",
      "High-Potential (Hi-Pot) Test and Drop Test"
    ],
    "exp": "OCC and SCC curves plotted against field current are needed for both prediction methods.",
    "cat": "VOLT",
    "id": "T01A_077"
  },
  {
    "q": "What is another name for the EMF Method?",
    "a": "Synchronous Impedance Method",
    "opts": [
      "Ampere-Turn Method",
      "Synchronous Impedance Method",
      "Direct Loading Method",
      "Zero Power Factor Method"
    ],
    "exp": "The EMF method calculates a single synchronous impedance value, hence the name.",
    "cat": "VOLT",
    "id": "T01A_078"
  },
  {
    "q": "What is the major limitation of the EMF method?",
    "a": "It uses a linear synchronous impedance and ignores magnetic saturation",
    "opts": [
      "It is too complicated arithmetically",
      "It requires the machine to be fully loaded during testing",
      "It ignores the effect of armature resistance entirely",
      "It uses a linear synchronous impedance and ignores magnetic saturation"
    ],
    "exp": "By using a single impedance derived from the air-gap line, the EMF method fails to account for iron saturation.",
    "cat": "VOLT",
    "id": "T01A_079"
  },
  {
    "q": "Because the EMF method ignores saturation, what kind of result does it produce?",
    "a": "A pessimistic (higher) VR% than the machine actually exhibits",
    "opts": [
      "An optimistic (lower) VR% than the machine actually exhibits",
      "A pessimistic (higher) VR% than the machine actually exhibits",
      "A perfectly accurate VR%",
      "A negative VR% value"
    ],
    "exp": "It overestimates the required no-load EMF, resulting in a higher (pessimistic) predicted voltage drop.",
    "cat": "VOLT",
    "id": "T01A_080"
  },
  {
    "q": "What is another name for the MMF Method?",
    "a": "Ampere-Turn Method",
    "opts": [
      "Synchronous Impedance Method",
      "Ampere-Turn Method",
      "Potier Triangle Method",
      "Slip Test Method"
    ],
    "exp": "The MMF method works with field current (Ampere-turns) rather than voltage phasors.",
    "cat": "VOLT",
    "id": "T01A_081"
  },
  {
    "q": "How does the MMF method account for the non-linearity of the magnetic circuit?",
    "a": "By re-entering the actual OCC curve at the resultant total field current",
    "opts": [
      "By calculating a variable synchronous impedance",
      "By ignoring the short-circuit characteristic entirely",
      "By re-entering the actual OCC curve at the resultant total field current",
      "By assuming the air-gap line continues infinitely"
    ],
    "exp": "Adding the field currents as phasors and reading the EMF from the actual saturated OCC curve accounts for saturation implicitly.",
    "cat": "VOLT",
    "id": "T01A_082"
  },
  {
    "q": "In the MMF method, the field current represents two components. What is one of them?",
    "a": "Overcoming armature reaction",
    "opts": [
      "Overcoming mechanical friction",
      "Overcoming armature reaction",
      "Producing the synchronous reactance",
      "Combating the negative phase sequence"
    ],
    "exp": "The field current is split into producing terminal voltage and overcoming leakage flux/armature reaction.",
    "cat": "VOLT",
    "id": "T01A_083"
  },
  {
    "q": "Compared to the EMF method, what kind of result does the MMF method produce?",
    "a": "An optimistic (lower) VR%, closer to the actual performance",
    "opts": [
      "A pessimistic (higher) VR%",
      "An optimistic (lower) VR%, closer to the actual performance",
      "Exactly double the EMF method value",
      "A result completely unsuited for practical machines"
    ],
    "exp": "Because it accounts for saturation, it predicts a lower required field current, giving a slightly optimistic but much more accurate result.",
    "cat": "VOLT",
    "id": "T01A_084"
  },
  {
    "q": "Which method uses a phasor voltage diagram?",
    "a": "EMF Method",
    "opts": [
      "MMF Method",
      "Ampere-Turn Method",
      "EMF Method",
      "Potier Method"
    ],
    "exp": "The EMF method resolves voltages (EMF) in a phasor diagram using Z_s.",
    "cat": "VOLT",
    "id": "T01A_085"
  },
  {
    "q": "Which method uses a phasor MMF (field current) diagram?",
    "a": "MMF Method",
    "opts": [
      "EMF Method",
      "Synchronous Impedance Method",
      "MMF Method",
      "Kapp Regulation Method"
    ],
    "exp": "The MMF method adds I_f1 and I_f2 as phasors in MMF space.",
    "cat": "VOLT",
    "id": "T01A_086"
  },
  {
    "q": "How is the synchronous impedance (Z_s) found in the EMF method?",
    "a": "Z_s = E_oc / I_sc at the same field current",
    "opts": [
      "Z_s = V_terminal / I_load",
      "Z_s = I_sc / E_oc at the same field current",
      "Z_s = E_oc / I_sc at the same field current",
      "Z_s = (E_oc - V) / I_sc"
    ],
    "exp": "Z_s is derived by dividing the open-circuit voltage by the short-circuit current at a given I_f.",
    "cat": "VOLT",
    "id": "T01A_087"
  },
  {
    "q": "Which voltage regulation method is considered more accurate for practical, saturated machines?",
    "a": "MMF Method",
    "opts": [
      "EMF Method",
      "Synchronous Impedance Method",
      "MMF Method",
      "Both are equally inaccurate"
    ],
    "exp": "The MMF method's inclusion of the saturated OCC knee makes it much closer to real-world performance.",
    "cat": "VOLT",
    "id": "T01A_088"
  },
  {
    "q": "In older texts, what is the EMF method sometimes called due to how it treats impedance?",
    "a": "The pessimistic method",
    "opts": [
      "The pessimistic method",
      "The exact method",
      "The saturated method",
      "The zero-error method"
    ],
    "exp": "It's called pessimistic because it yields a higher (worse) voltage regulation percentage than reality.",
    "cat": "VOLT",
    "id": "T01A_089"
  },
  {
    "q": "What two variables are plotted against each other to create the OCC?",
    "a": "Open-circuit terminal voltage against field current",
    "opts": [
      "Short-circuit current against armature voltage",
      "Open-circuit terminal voltage against field current",
      "Field current against shaft RPM",
      "Armature current against load power factor"
    ],
    "exp": "The Open Circuit Characteristic plots generated EMF (voltage) versus the excitation (field) current.",
    "cat": "VOLT",
    "id": "T01A_090"
  },
  {
    "q": "According to SOLAS II-1/Reg 40.3, what is the steady-state voltage regulation tolerance?",
    "a": "±2.5% of rated",
    "opts": [
      "±5% of rated",
      "±2.5% of rated",
      "±10% of rated",
      "±1.5% of rated"
    ],
    "exp": "SOLAS dictates voltage must remain within ±2.5% under steady load conditions.",
    "cat": "SOLAS",
    "id": "T01A_091"
  },
  {
    "q": "What is the maximum transient voltage excursion allowed by SOLAS?",
    "a": "±10% to 20% max limit",
    "opts": [
      "±5% max limit",
      "±25% to 30% max limit",
      "±10% to 20% max limit",
      "±2.5% max limit"
    ],
    "exp": "During sudden heavy load applications, voltage may transiently dip between 10% and 20%.",
    "cat": "SOLAS",
    "id": "T01A_092"
  },
  {
    "q": "After a transient excursion, what is the SOLAS requirement for voltage recovery time?",
    "a": "Recovers to within ±3% in ≤ 1.5 seconds",
    "opts": [
      "Recovers to nominal within ≤ 5 seconds",
      "Recovers to within ±3% in ≤ 1.5 seconds",
      "Recovers to within ±2.5% in ≤ 10 seconds",
      "Recovers to within ±5% instantly"
    ],
    "exp": "Voltage must bounce back very quickly, settling within ±3% in 1.5 seconds.",
    "cat": "SOLAS",
    "id": "T01A_093"
  },
  {
    "q": "What is the SOLAS steady-state frequency tolerance?",
    "a": "±5% of rated",
    "opts": [
      "±2.5% of rated",
      "±10% of rated",
      "±5% of rated",
      "±1% of rated"
    ],
    "exp": "The governor must maintain steady-state frequency within ±5% of the nominal 50/60 Hz.",
    "cat": "SOLAS",
    "id": "T01A_094"
  },
  {
    "q": "According to SOLAS, how quickly must frequency recover to nominal after a transient excursion?",
    "a": "Within ≤ 5 seconds",
    "opts": [
      "Within ≤ 1.5 seconds",
      "Within ≤ 3 seconds",
      "Within ≤ 5 seconds",
      "Within ≤ 10 seconds"
    ],
    "exp": "Frequency recovery is allowed up to 5 seconds to settle back to normal limits.",
    "cat": "SOLAS",
    "id": "T01A_095"
  },
  {
    "q": "On a cargo ship, how quickly must the emergency DG auto-start and supply the switchboard?",
    "a": "Within 45 seconds",
    "opts": [
      "Within 10 seconds",
      "Within 30 seconds",
      "Within 45 seconds",
      "Within 60 seconds"
    ],
    "exp": "Cargo ships have a 45-second blackout limit to restore power to the ESB.",
    "cat": "SOLAS",
    "id": "T01A_096"
  },
  {
    "q": "How long must the emergency DG fuel supply last on a cargo ship?",
    "a": "18 hours",
    "opts": [
      "12 hours",
      "18 hours",
      "24 hours",
      "36 hours"
    ],
    "exp": "Cargo ships require an 18-hour fuel autonomy for the emergency generator.",
    "cat": "SOLAS",
    "id": "T01A_097"
  },
  {
    "q": "On a passenger ship, how quickly must the emergency DG auto-start and supply the switchboard?",
    "a": "Within 30 seconds",
    "opts": [
      "Within 15 seconds",
      "Within 30 seconds",
      "Within 45 seconds",
      "Within 60 seconds"
    ],
    "exp": "Passenger ships have a stricter 30-second start requirement.",
    "cat": "SOLAS",
    "id": "T01A_098"
  },
  {
    "q": "How long must the emergency DG fuel supply last on a passenger ship?",
    "a": "36 hours",
    "opts": [
      "18 hours",
      "24 hours",
      "36 hours",
      "48 hours"
    ],
    "exp": "Passenger ships require a 36-hour fuel autonomy.",
    "cat": "SOLAS",
    "id": "T01A_099"
  },
  {
    "q": "Where must the emergency source of power be located according to SOLAS II-1/Reg 41?",
    "a": "Above the bulkhead deck, outside the machinery spaces",
    "opts": [
      "On the bottom platform, next to the main generators",
      "In the steering gear room",
      "Above the bulkhead deck, outside the machinery spaces",
      "Inside the main engine casing"
    ],
    "exp": "To survive severe flooding or engine room fires, it must be elevated and completely separated.",
    "cat": "SOLAS",
    "id": "T01A_100"
  },
  {
    "q": "What is the '3 + 3' rule for emergency generator starting?",
    "a": "Primary batteries for 3 starts, secondary independent source for a further 3 starts within 30 minutes",
    "opts": [
      "3 attempts on main air, 3 attempts on emergency air",
      "3 starts by the ETO, 3 starts by the Chief Engineer",
      "Primary batteries for 3 starts, secondary independent source for a further 3 starts within 30 minutes",
      "3 starts per day, max 3 days without shore power"
    ],
    "exp": "SOLAS requires redundant starting capacity ensuring 6 total attempts split across two independent sources.",
    "cat": "SOLAS",
    "id": "T01A_101"
  },
  {
    "q": "Down to what temperature must the emergency generator be readily startable in cold conditions?",
    "a": "0°C",
    "opts": [
      "-10°C",
      "0°C",
      "10°C",
      "15°C"
    ],
    "exp": "It must crank and fire reliably at 0 degrees Celsius without external engine room heating.",
    "cat": "SOLAS",
    "id": "T01A_102"
  },
  {
    "q": "Where must the emergency switchboard (ESB) be located?",
    "a": "In the same compartment as the emergency DG or an immediately adjacent space",
    "opts": [
      "Inside the main engine control room",
      "On the bridge wings",
      "In the same compartment as the emergency DG or an immediately adjacent space",
      "In the main switchboard room for ease of transfer"
    ],
    "exp": "It must be co-located or safely adjacent, accessible without entering the main machinery space.",
    "cat": "SOLAS",
    "id": "T01A_103"
  },
  {
    "q": "What additional requirement exists for passenger ship blackout transitions?",
    "a": "Requires transitional battery source for 30 minutes",
    "opts": [
      "Requires an uninterrupted power supply (UPS) for 18 hours",
      "Requires transitional battery source for 30 minutes",
      "Requires two separate emergency generators",
      "Requires immediate manual synchronization"
    ],
    "exp": "Passenger ships must have a 30-minute transitional battery bank to keep critical lights and comms alive while the DG starts.",
    "cat": "SOLAS",
    "id": "T01A_104"
  },
  {
    "q": "What is the maximum transient frequency excursion allowed by SOLAS?",
    "a": "±10% max limit",
    "opts": [
      "±5% max limit",
      "±10% max limit",
      "±15% max limit",
      "±20% max limit"
    ],
    "exp": "Under sudden load changes, the frequency is permitted to temporarily jump by up to 10%.",
    "cat": "SOLAS",
    "id": "T01A_105"
  },
  {
    "q": "In a synchroscope, what creates a rotating magnetic field at busbar frequency?",
    "a": "The Stator",
    "opts": [
      "The Rotor",
      "The PMG",
      "The Stator",
      "The Dashpot"
    ],
    "exp": "The stator of the synchroscope is connected directly to the running busbar voltage.",
    "cat": "SYNC",
    "id": "T01A_106"
  },
  {
    "q": "What happens to the synchroscope needle if the incoming generator frequency is faster than the busbar?",
    "a": "Needle rotates CLOCKWISE",
    "opts": [
      "Needle rotates ANTICLOCKWISE",
      "Needle rotates CLOCKWISE",
      "Needle stands still at 6 o'clock",
      "Needle oscillates rapidly left and right"
    ],
    "exp": "A faster incoming frequency causes the resulting magnetic interaction to spin the needle clockwise.",
    "cat": "SYNC",
    "id": "T01A_107"
  },
  {
    "q": "If the synchroscope needle is rotating anticlockwise, what action is required?",
    "a": "Adjust governor to speed up incoming generator",
    "opts": [
      "Close the breaker immediately",
      "Adjust AVR to increase voltage",
      "Adjust governor to slow down the incoming generator",
      "Adjust governor to speed up incoming generator"
    ],
    "exp": "Anticlockwise means the incoming machine is too slow. The governor must be sped up.",
    "cat": "SYNC",
    "id": "T01A_108"
  },
  {
    "q": "When using a synchroscope, exactly when should the ACB be closed?",
    "a": "When the needle is rotating slowly clockwise, at approximately the 11 o'clock position",
    "opts": [
      "When the needle is stationary perfectly at 12 o'clock",
      "When the needle is rotating fast clockwise",
      "When the needle is rotating slowly anticlockwise",
      "When the needle is rotating slowly clockwise, at approximately the 11 o'clock position"
    ],
    "exp": "Closing just before 12 o'clock (~11 o'clock) compensates for the breaker's 50-100ms mechanical closing time.",
    "cat": "SYNC",
    "id": "T01A_109"
  },
  {
    "q": "What is the consequence of closing the ACB at 6 o'clock (180° out of phase)?",
    "a": "CATASTROPHIC - massive circulating current (up to 15× rated), severe mechanical shock",
    "opts": [
      "The incoming generator acts as an induction motor safely",
      "The generator trips on reverse power with no damage",
      "CATASTROPHIC - massive circulating current (up to 15× rated), severe mechanical shock",
      "Only the synchroscope internal fuse blows"
    ],
    "exp": "Being 180 degrees out of phase doubles the voltage difference, driving devastating short-circuit currents and snapping shafts.",
    "cat": "SYNC",
    "id": "T01A_110"
  },
  {
    "q": "What happens if you press the \"ACB Close\" button on an idle, non-running generator?",
    "a": "The idle generator will suddenly act as an induction motor, drawing massive starting current",
    "opts": [
      "Nothing happens because the incoming voltage is zero",
      "The AVR automatically blocks the closure",
      "The idle generator will suddenly act as an induction motor, drawing massive starting current",
      "The generator safely starts up and synchronizes"
    ],
    "exp": "The active busbar will back-feed the idle windings, violently motoring the stationary generator.",
    "cat": "SYNC",
    "id": "T01A_111"
  },
  {
    "q": "Which protection relay should trip if a breaker is closed on an idle generator?",
    "a": "Reverse Power Relay",
    "opts": [
      "Under-voltage Relay",
      "Reverse Power Relay",
      "Negative Phase Sequence Relay",
      "Earth Fault Relay"
    ],
    "exp": "The reverse power relay detects power flowing INTO the generator (motoring) and trips the ACB in 3-5 seconds.",
    "cat": "SYNC",
    "id": "T01A_112"
  },
  {
    "q": "What is the limitation of the Dark Lamp method?",
    "a": "Cannot detect wrong phase sequence",
    "opts": [
      "Cannot detect voltage differences",
      "Requires a digital synchroscope",
      "Lamps burn out too quickly",
      "Cannot detect wrong phase sequence"
    ],
    "exp": "In the dark lamp method, the lamps will still go dark together even if the phase sequence is reversed (180 out of phase).",
    "cat": "SYNC",
    "id": "T01A_113"
  },
  {
    "q": "In the Bright Lamp method, when is the correct moment to close the ACB?",
    "a": "When one lamp is completely dark and two are at maximum, equal brightness",
    "opts": [
      "When all three lamps are completely dark",
      "When all three lamps are at maximum brightness",
      "When one lamp is completely dark and two are at maximum, equal brightness",
      "When the lamps chase in a 1-2-3 sequence"
    ],
    "exp": "Due to the cross-connections, exact phase alignment produces one dark lamp and two equally bright lamps.",
    "cat": "SYNC",
    "id": "T01A_114"
  },
  {
    "q": "When using the 500 V difference Voltmeter method, when should the ACB be closed?",
    "a": "When the needle is passing through zero on a slow upswing",
    "opts": [
      "When the needle shows 440 V",
      "When the needle shows 880 V",
      "When the needle is stationary at 220 V",
      "When the needle is passing through zero on a slow upswing"
    ],
    "exp": "Zero volts difference indicates the two systems are in phase. The upswing confirms it's a slow approach.",
    "cat": "SYNC",
    "id": "T01A_115"
  },
  {
    "q": "What happens if the synchroscope needle is moving fast clockwise when the breaker is closed?",
    "a": "Incoming generator takes heavy sudden active load surge, trips on overcurrent",
    "opts": [
      "It synchronises perfectly and shares load instantly",
      "Incoming generator takes heavy sudden active load surge, trips on overcurrent",
      "It instantly acts as a motor and trips on reverse power",
      "It destroys the rotating diode wheel"
    ],
    "exp": "A fast clockwise approach means high frequency difference; the incoming machine forcibly grabs huge active load upon connection.",
    "cat": "SYNC",
    "id": "T01A_116"
  },
  {
    "q": "How does the Check Synchronise Relay operate?",
    "a": "It inhibits manually closing the ACB unless safe parameters are met",
    "opts": [
      "It automatically adjusts the governor speed",
      "It automatically adjusts the AVR voltage",
      "It physically locks the synchroscope pointer at 12 o'clock",
      "It inhibits manually closing the ACB unless safe parameters are met"
    ],
    "exp": "It acts as an electronic guard, cutting the closing circuit unless V, f, and phase are within safe bands.",
    "cat": "SYNC",
    "id": "T01A_117"
  },
  {
    "q": "In the Lamp Triangle (chasing) method, how do the lamps behave if the phase sequence is INCORRECT?",
    "a": "All three lamps cycle together (all brighten and dim together)",
    "opts": [
      "They chase in a 1-2-3 pattern",
      "They stay permanently dark",
      "All three lamps cycle together (all brighten and dim together)",
      "They stay permanently bright"
    ],
    "exp": "With wrong sequence in a cross-connected setup, the rotational difference cancels out, making them blink in unison.",
    "cat": "SYNC",
    "id": "T01A_118"
  },
  {
    "q": "Before closing the ACB, equal frequency is achieved by adjusting the...",
    "a": "Governor speed",
    "opts": [
      "AVR voltage trimmer",
      "Governor speed",
      "Excitation current limiter",
      "Phase sequence links"
    ],
    "exp": "Frequency is directly tied to the prime mover's RPM, which is controlled by the governor.",
    "cat": "SYNC",
    "id": "T01A_119"
  },
  {
    "q": "What is the Key-Lamp method also known as?",
    "a": "Single-Lamp method",
    "opts": [
      "Three-Lamp chasing method",
      "Bright Lamp method",
      "Single-Lamp method",
      "Check synchronise method"
    ],
    "exp": "It uses only one lamp connected across one phase pair, often located in the keyhole.",
    "cat": "SYNC",
    "id": "T01A_120"
  },
  {
    "q": "What component exclusively controls Active Power (kW) sharing between generators?",
    "a": "Governor",
    "opts": [
      "AVR Excitation",
      "Governor",
      "Rotating Rectifier",
      "Synchroscope"
    ],
    "exp": "Active load (kW) is mechanical energy, dictated entirely by the prime mover's fuel input via the governor.",
    "cat": "LOAD",
    "id": "T01A_121"
  },
  {
    "q": "What component exclusively controls Reactive Power (kVAR) sharing between generators?",
    "a": "AVR EXCITATION",
    "opts": [
      "Governor",
      "AVR EXCITATION",
      "Dashpot",
      "Fuel rack position"
    ],
    "exp": "Reactive currents are dictated by the magnetic field strength, controlled by the AVR voltage trimmers.",
    "cat": "LOAD",
    "id": "T01A_122"
  },
  {
    "q": "What is the purpose of Governor Droop?",
    "a": "Speed decreases slightly as active load (kW) increases to ensure stable load sharing",
    "opts": [
      "Voltage drops slightly as reactive load increases",
      "Speed increases slightly as active load increases",
      "Speed decreases slightly as active load (kW) increases to ensure stable load sharing",
      "It prevents the engine from stalling at low RPM"
    ],
    "exp": "A 3-5% drop in speed with load creates a stable curve, preventing parallel generators from hunting.",
    "cat": "LOAD",
    "id": "T01A_123"
  },
  {
    "q": "Why is isochronous mode (zero droop) dangerous for generators in parallel?",
    "a": "Generators will \"fight\" and immediately trip on overload or reverse power",
    "opts": [
      "They will produce negative phase sequence currents",
      "Generators will \"fight\" and immediately trip on overload or reverse power",
      "They will fail to build up residual magnetism",
      "The frequency will drop to 40 Hz"
    ],
    "exp": "Without droop, both machines refuse to yield speed, causing massive load swings until one trips.",
    "cat": "LOAD",
    "id": "T01A_124"
  },
  {
    "q": "If Gen 1 shows 600 kW and Gen 2 shows 200 kW, what is the root cause?",
    "a": "Governor droop settings unequal",
    "opts": [
      "AVR droop settings unequal",
      "Rotating diode failure on Gen 2",
      "Governor droop settings unequal",
      "Reverse power relay fault"
    ],
    "exp": "Unequal kW directly indicates unequal fuel rack positioning governed by mismatched droop.",
    "cat": "LOAD",
    "id": "T01A_125"
  },
  {
    "q": "If generators have equal kW but different line currents, what is the corrective action?",
    "a": "Increase AVR voltage trimmer on under-loaded machine. Do NOT touch governors.",
    "opts": [
      "Increase governor of under-loaded machine.",
      "Increase AVR voltage trimmer on under-loaded machine. Do NOT touch governors.",
      "Decrease AVR trimmer on the under-loaded machine.",
      "Shut down both generators and flash the fields."
    ],
    "exp": "Different line currents with equal kW means unequal kVAR, which is fixed exclusively via AVR adjustments.",
    "cat": "LOAD",
    "id": "T01A_126"
  },
  {
    "q": "If both machines are hunting (oscillating load), what might be the cause?",
    "a": "Governor droop set to zero (isochronous in parallel) or stability trimmer incorrect",
    "opts": [
      "AVR voltage trimmer set too high",
      "One rotating diode is short-circuited",
      "Governor droop set to zero (isochronous in parallel) or stability trimmer incorrect",
      "The synchroscope is left switched on"
    ],
    "exp": "Zero droop removes the stabilizing slope, causing the governors to constantly overcorrect and hunt.",
    "cat": "LOAD",
    "id": "T01A_127"
  },
  {
    "q": "When taking a generator off-load, what is the first operational step?",
    "a": "Gradually reduce governor fuel input of machine to be shut down",
    "opts": [
      "Open the ACB immediately",
      "Gradually reduce AVR voltage trimmer to zero",
      "Gradually reduce governor fuel input of machine to be shut down",
      "Trip the excitation field switch"
    ],
    "exp": "You must physically transfer the active power (kW) to the running machine by backing off the governor.",
    "cat": "LOAD",
    "id": "T01A_128"
  },
  {
    "q": "During load transfer, what does reducing the AVR voltage trimmer slightly accomplish?",
    "a": "It transfers kVAR to the remaining machine",
    "opts": [
      "It transfers kW to the remaining machine",
      "It transfers kVAR to the remaining machine",
      "It increases the RPM of the incoming machine",
      "It trips the reverse power relay automatically"
    ],
    "exp": "Just as the governor backs off kW, the AVR must be backed off to shed reactive current (kVAR).",
    "cat": "LOAD",
    "id": "T01A_129"
  },
  {
    "q": "When is it safe to open the ACB during a handover?",
    "a": "When kW meter reads zero (or just before reverse power relay trips)",
    "opts": [
      "While it is carrying 50% load",
      "As soon as the second generator is synchronised",
      "When kW meter reads zero (or just before reverse power relay trips)",
      "Only after the engine has completely stopped"
    ],
    "exp": "Opening the breaker at zero load prevents arcing and severe busbar voltage spikes.",
    "cat": "LOAD",
    "id": "T01A_130"
  },
  {
    "q": "Why MUST you avoid opening the ACB under heavy load?",
    "a": "It causes a busbar voltage surge",
    "opts": [
      "It reverses the polarity of the PMG",
      "It causes a busbar voltage surge",
      "It drains the starting batteries instantly",
      "It burns out the synchroscope"
    ],
    "exp": "Interrupting heavy current violently collapses magnetic fields in the system, causing massive transient overvoltage.",
    "cat": "LOAD",
    "id": "T01A_131"
  },
  {
    "q": "After opening the ACB, how long should the machine run unloaded before shutdown?",
    "a": "5–10 minutes to cool turbine/engine",
    "opts": [
      "Immediately shut down to save fuel",
      "30 seconds to let the AVR discharge",
      "5–10 minutes to cool turbine/engine",
      "1 hour to prevent carbonization"
    ],
    "exp": "A cooling period prevents heat soaking and thermal distortion of engine/turbine components.",
    "cat": "LOAD",
    "id": "T01A_132"
  },
  {
    "q": "What is the typical setting range for AVR droop in marine alternators?",
    "a": "3-5%",
    "opts": [
      "0%",
      "3-5%",
      "10-15%",
      "20-25%"
    ],
    "exp": "A 3-5% voltage droop ensures stable kVAR sharing without violating SOLAS voltage tolerance limits.",
    "cat": "LOAD",
    "id": "T01A_133"
  },
  {
    "q": "If you reduce the governor input to near-zero kW without opening the breaker, what condition does the machine approach?",
    "a": "No-load/motoring condition",
    "opts": [
      "Over-speed trip condition",
      "Negative phase sequence condition",
      "No-load/motoring condition",
      "Isochronous lock"
    ],
    "exp": "Dropping kW to zero means the machine stops pushing power and risks being dragged by the busbar (motoring).",
    "cat": "LOAD",
    "id": "T01A_134"
  },
  {
    "q": "If generators show equal kW and equal current, what does this indicate?",
    "a": "Both governors and AVRs are perfectly matched and sharing load correctly",
    "opts": [
      "The reverse power relay is faulty",
      "Both governors and AVRs are perfectly matched and sharing load correctly",
      "The synchroscope is rotating at 12 o'clock",
      "The system is operating at zero power factor"
    ],
    "exp": "Balanced kW and balanced current (kVAR) is the ideal state for parallel operation.",
    "cat": "LOAD",
    "id": "T01A_135"
  },
  {
    "q": "What is the typical setpoint value for the Overcurrent Relay (OCR)?",
    "a": "105–110% rated current (IDMT curve)",
    "opts": [
      "85% rated current",
      "105–110% rated current (IDMT curve)",
      "150% rated current instantly",
      "200% rated current with 5s delay"
    ],
    "exp": "The OCR picks up at a slight overload (105-110%) and follows an IDMT timing curve.",
    "cat": "PROT",
    "id": "T01A_136"
  },
  {
    "q": "At what threshold does the Under-voltage Relay (UVT) typically operate?",
    "a": "85% rated voltage",
    "opts": [
      "110% rated voltage",
      "50% rated voltage",
      "85% rated voltage",
      "95% rated voltage"
    ],
    "exp": "The UVT drops the breaker if busbar voltage sags to 85% of its rated value.",
    "cat": "PROT",
    "id": "T01A_137"
  },
  {
    "q": "What is the typical pickup setting for the Reverse Power Relay?",
    "a": "5–10% rated kW, 3–5 s delay",
    "opts": [
      "105–110% rated kW, instant",
      "50% rated kW, 10 s delay",
      "5–10% rated kW, 3–5 s delay",
      "1–2% rated kW, instant"
    ],
    "exp": "It detects 5-10% reverse active power (motoring) and waits 3-5s to prevent spurious trips during synchronization.",
    "cat": "PROT",
    "id": "T01A_138"
  },
  {
    "q": "What is the purpose of the Preferential Trip relay?",
    "a": "Automatically sheds non-essential loads in stages to prevent a complete ship blackout",
    "opts": [
      "Trips the main ACB instantly on short circuit",
      "Automatically sheds non-essential loads in stages to prevent a complete ship blackout",
      "Trips the emergency generator if it over-speeds",
      "Disconnects the AVR during winding tests"
    ],
    "exp": "It relieves the generator of heavy current by dropping galley, HVAC, etc., before the main OCR trips.",
    "cat": "PROT",
    "id": "T01A_139"
  },
  {
    "q": "Which of the following is NEVER shed by the preferential trip?",
    "a": "Steering gear",
    "opts": [
      "Accommodation ventilation",
      "Galley ovens",
      "Steering gear",
      "Laundry machinery"
    ],
    "exp": "Essential navigational and safety services (steering, fire pumps, GMDSS) must never be shed.",
    "cat": "PROT",
    "id": "T01A_140"
  },
  {
    "q": "At what temperature does the winding thermistor trip for Class F insulation?",
    "a": "155°C",
    "opts": [
      "80°C",
      "95°C",
      "155°C",
      "180°C"
    ],
    "exp": "Class F insulation has a thermal limit; thermistors are embedded to trip the machine at 155°C to prevent burnout.",
    "cat": "PROT",
    "id": "T01A_141"
  },
  {
    "q": "What is the typical trip setting for the Overspeed trip?",
    "a": "110–115% rated engine RPM",
    "opts": [
      "100–105% rated engine RPM",
      "110–115% rated engine RPM",
      "150% rated engine RPM",
      "85% rated engine RPM"
    ],
    "exp": "Overspeed protection shuts down the prime mover if RPM exceeds the 110-115% safe margin.",
    "cat": "PROT",
    "id": "T01A_142"
  },
  {
    "q": "What protection provides an instantaneous trip for a massive short-circuit?",
    "a": "ACB Mechanical Trip",
    "opts": [
      "Preferential Trip",
      "IDMT Overcurrent Relay",
      "Reverse Power Relay",
      "ACB Mechanical Trip"
    ],
    "exp": "A built-in magnetic mechanism forces the ACB open instantly under massive short-circuit current.",
    "cat": "PROT",
    "id": "T01A_143"
  },
  {
    "q": "What is the sensitivity of the Negative Phase Sequence (NPS) Relay?",
    "a": "≈ 0.2 × In",
    "opts": [
      "≈ 1.5 × In",
      "≈ 5.0 × In",
      "≈ 0.2 × In",
      "≈ 1.0 × In"
    ],
    "exp": "NPS relates to unbalanced currents; the relay is very sensitive, picking up at about 20% of rated current.",
    "cat": "PROT",
    "id": "T01A_144"
  },
  {
    "q": "How is the Overcurrent Relay (OCR) tested during a survey?",
    "a": "Secondary current injection using a calibration kit",
    "opts": [
      "Primary current injection up to 10,000 Amps",
      "Measuring winding resistance with a megger",
      "Secondary current injection using a calibration kit",
      "Short-circuiting the generator terminals"
    ],
    "exp": "Portable test sets inject low AC current directly into the relay's secondary coils to verify the IDMT curve.",
    "cat": "PROT",
    "id": "T01A_145"
  },
  {
    "q": "What indicates an earth fault on the alternator stator?",
    "a": "Neutral earth monitoring or insulation monitoring test key",
    "opts": [
      "Reverse power relay operation",
      "Negative phase sequence alarm",
      "Neutral earth monitoring or insulation monitoring test key",
      "Differential relay instantaneous mismatch"
    ],
    "exp": "Earth fault relays monitor the system via neutral earthing transformers or active IR injection.",
    "cat": "PROT",
    "id": "T01A_146"
  },
  {
    "q": "What happens at 95°C regarding bearing temperature?",
    "a": "Trip",
    "opts": [
      "Alarm",
      "Trip",
      "Starts standby lube oil pump",
      "Normal operating temperature"
    ],
    "exp": "Bearing PT100 sensors alarm at 80°C and initiate a full engine trip at 95°C.",
    "cat": "PROT",
    "id": "T01A_147"
  },
  {
    "q": "What does a Differential Relay monitor?",
    "a": "Instantaneous mismatch between CT current from neutral vs line end",
    "opts": [
      "Mismatch between busbar voltage and incoming voltage",
      "Mismatch between active and reactive power",
      "Instantaneous mismatch between CT current from neutral vs line end",
      "Mismatch between phase sequence R-Y-B"
    ],
    "exp": "It detects internal winding faults by comparing current entering the winding versus leaving it.",
    "cat": "PROT",
    "id": "T01A_148"
  },
  {
    "q": "What delay does the Preferential Trip use to discriminate motor starting from genuine overload?",
    "a": "Staged delay (5–10 s)",
    "opts": [
      "Instantaneous trip",
      "Staged delay (5–10 s)",
      "30-minute thermal delay",
      "1.5 second voltage recovery delay"
    ],
    "exp": "A dashpot or digital timer waits 5-10s before shedding load, allowing short starting spikes to pass.",
    "cat": "PROT",
    "id": "T01A_149"
  },
  {
    "q": "How is the Reverse Power relay physically tested safely while alongside?",
    "a": "VCB racked out: inject simulated reverse phase current and voltage",
    "opts": [
      "Close ACB on dead busbar and measure current",
      "VCB racked out: inject simulated reverse phase current and voltage",
      "Push the manual trip button on the prime mover",
      "Drop the terminal voltage to 85%"
    ],
    "exp": "Racking the breaker out isolates the high voltage, allowing a test kit to safely inject reverse power signals.",
    "cat": "PROT",
    "id": "T01A_150"
  },
  {
    "q": "What does IDMT stand for?",
    "a": "Inverse Definite Minimum Time",
    "opts": [
      "Instantaneous Direct Motor Trip",
      "Internal Differential Magnetic Tracking",
      "Inverse Definite Minimum Time",
      "Independent Delay Measurement Tool"
    ],
    "exp": "IDMT denotes the curve where operating time is inversely proportional to fault current, but flattens to a minimum.",
    "cat": "IDMT",
    "id": "T01A_151"
  },
  {
    "q": "Why is an IDMT characteristic used instead of an instantaneous trip for alternator overcurrent?",
    "a": "It allows extra time for motor starting discrimination",
    "opts": [
      "It allows extra time for motor starting discrimination",
      "It trips the breaker instantly on any overload",
      "It uses less power from the control battery",
      "It prevents the generator from operating in parallel"
    ],
    "exp": "IDMT delays the trip for small overloads (like motor starting) but trips fast for heavy short circuits.",
    "cat": "IDMT",
    "id": "T01A_152"
  },
  {
    "q": "What type of damage does the IDMT relay curve accurately mirror?",
    "a": "I²t thermal damage to windings",
    "opts": [
      "Mechanical fatigue of the rotor shaft",
      "I²t thermal damage to windings",
      "Carbon brush wear rate",
      "AVR semiconductor degradation"
    ],
    "exp": "The thermal heating of windings follows an inverse square law, matched perfectly by the IDMT curve.",
    "cat": "IDMT",
    "id": "T01A_153"
  },
  {
    "q": "What happens in the Definite Minimum Time region of the curve (>20× In)?",
    "a": "The curve flattens to a minimum operating time regardless of how much higher current rises",
    "opts": [
      "The relay resets and refuses to trip",
      "The trip time falls steeply towards zero microseconds",
      "The curve flattens to a minimum operating time regardless of how much higher current rises",
      "The current is reduced by a series resistor"
    ],
    "exp": "Mechanical relays can only act so fast; the DMT floor (a few cycles) prevents mechanism damage.",
    "cat": "IDMT",
    "id": "T01A_154"
  },
  {
    "q": "Which IEC curve type is most common for marine generator 440V OCR?",
    "a": "Standard Inverse (SI)",
    "opts": [
      "Standard Inverse (SI)",
      "Very Inverse (VI)",
      "Extremely Inverse (EI)",
      "Long Time Inverse (LTI)"
    ],
    "exp": "Standard Inverse provides the best balance of motor starting discrimination for standard marine busbars.",
    "cat": "IDMT",
    "id": "T01A_155"
  },
  {
    "q": "What is the typical Plug Setting (Is) or Pickup for a marine OCR?",
    "a": "105–110% In",
    "opts": [
      "80–90% In",
      "105–110% In",
      "150–200% In",
      "500–600% In"
    ],
    "exp": "The relay \"wakes up\" and starts timing when current slightly exceeds 100% rated capacity.",
    "cat": "IDMT",
    "id": "T01A_156"
  },
  {
    "q": "What is the function of the Time Multiplier Setting (TMS)?",
    "a": "Scales the entire time-current curve up or down",
    "opts": [
      "Changes the minimum pickup current value",
      "Converts the relay from AC to DC operation",
      "Scales the entire time-current curve up or down",
      "Reverses the phase sequence detection"
    ],
    "exp": "TMS (0.1 - 1.0) shifts the time axis of the curve, allowing precise grading between series relays.",
    "cat": "IDMT",
    "id": "T01A_157"
  },
  {
    "q": "What is the typical Grading Margin required between series relays to ensure selectivity?",
    "a": "0.3 – 0.4 s",
    "opts": [
      "0.01 – 0.05 s",
      "0.3 – 0.4 s",
      "1.0 – 2.0 s",
      "5.0 – 10.0 s"
    ],
    "exp": "A gap of 0.3-0.4s guarantees the downstream breaker clears the fault before the main ACB reacts.",
    "cat": "IDMT",
    "id": "T01A_158"
  },
  {
    "q": "What is the FIRST step in the secondary injection test procedure?",
    "a": "Rack the ACB to TEST position",
    "opts": [
      "Connect the portable injection test set",
      "Disconnect the CT secondary wiring",
      "Rack the ACB to TEST position",
      "Inject 10x the relay setting"
    ],
    "exp": "Physical isolation of the power circuit while maintaining control logic is the absolute first safety step.",
    "cat": "IDMT",
    "id": "T01A_159"
  },
  {
    "q": "At what multiples of the pickup setting (Is) is the OCR typically injected during a survey test?",
    "a": "2×, 5×, and 10×",
    "opts": [
      "0.5×, 1.0×, and 1.5×",
      "2×, 5×, and 10×",
      "10×, 20×, and 50×",
      "1.05× only"
    ],
    "exp": "Testing at these 3 points plots a verifying curve against the manufacturer's spec.",
    "cat": "IDMT",
    "id": "T01A_160"
  },
  {
    "q": "What is the acceptable tolerance for test results compared to the published IDMT curve?",
    "a": "±5%",
    "opts": [
      "±1%",
      "±5%",
      "±10%",
      "±20%"
    ],
    "exp": "Trip times must fall within a strict ±5% window to ensure grading selectivity isn't compromised.",
    "cat": "IDMT",
    "id": "T01A_161"
  },
  {
    "q": "What MUST you avoid doing to a live CT (Current Transformer) secondary?",
    "a": "Never open-circuit it",
    "opts": [
      "Never short-circuit it",
      "Never ground one side of it",
      "Never connect an ammeter to it",
      "Never open-circuit it"
    ],
    "exp": "Open-circuiting a live CT causes a dangerously high voltage (thousands of volts) across the terminals, destroying it.",
    "cat": "IDMT",
    "id": "T01A_162"
  },
  {
    "q": "Before disconnecting the OCR relay during injection testing, what must be done to the CT?",
    "a": "Short-circuit the CT secondary",
    "opts": [
      "Inject 500V DC into the CT primary",
      "Open the CT secondary links",
      "Short-circuit the CT secondary",
      "Remove the CT from the busbar"
    ],
    "exp": "Shorting the CT secondary safely loops its current, preventing dangerous high voltage generation while disconnected.",
    "cat": "IDMT",
    "id": "T01A_163"
  },
  {
    "q": "What ensures selectivity between the main ACB OCR, feeder MCB, and motor starter?",
    "a": "Grading the IDMT curves so the one closest to the fault clears first",
    "opts": [
      "Setting them all to instantaneous trip",
      "Grading the IDMT curves so the one closest to the fault clears first",
      "Using identical TMS settings on all relays",
      "Wiring them all through a single OR gate"
    ],
    "exp": "Selectivity isolates only the faulted branch, preventing a total ship blackout.",
    "cat": "IDMT",
    "id": "T01A_164"
  },
  {
    "q": "In the IDMT formula T = K / (I/Is - 1)^α, what does K represent?",
    "a": "Time multiplier setting (TMS)",
    "opts": [
      "Plug setting (Is)",
      "Fault current (I)",
      "Time multiplier setting (TMS)",
      "Curve type exponent (α)"
    ],
    "exp": "K scales the equation's resulting time, acting as the TMS factor.",
    "cat": "IDMT",
    "id": "T01A_165"
  },
  {
    "q": "What is the standard Megger test voltage for a 440V marine alternator?",
    "a": "500V DC",
    "opts": [
      "250V DC",
      "500V DC",
      "1000V DC",
      "2500V DC"
    ],
    "exp": "500V DC is the standard testing stress voltage for low-voltage (under 1000V) systems.",
    "cat": "MAINT",
    "id": "T01A_166"
  },
  {
    "q": "What is the absolute minimum Winding Insulation Resistance (IR) to energize a 440V machine?",
    "a": "1.0 MΩ",
    "opts": [
      "0.1 MΩ",
      "1.0 MΩ",
      "10.0 MΩ",
      "100 MΩ"
    ],
    "exp": "If IR falls below 1.0 MΩ, the winding is dangerously wet/compromised and must not be energized.",
    "cat": "MAINT",
    "id": "T01A_167"
  },
  {
    "q": "How is the Polarization Index (PI) calculated?",
    "a": "IR reading at 10 minutes ÷ IR reading at 1 minute",
    "opts": [
      "IR reading at 1 minute ÷ IR reading at 10 minutes",
      "IR reading at 10 minutes ÷ IR reading at 1 minute",
      "IR reading at 5 minutes × Voltage",
      "IR reading × Temperature correction factor"
    ],
    "exp": "PI indicates the insulation's ability to absorb charge over a 10-minute period versus 1 minute.",
    "cat": "MAINT",
    "id": "T01A_168"
  },
  {
    "q": "What PI value indicates good, dry insulation?",
    "a": "PI > 2.0",
    "opts": [
      "PI < 1.0",
      "PI 1.0–2.0",
      "PI > 2.0",
      "PI = 0"
    ],
    "exp": "A high PI means the resistance keeps climbing as the dielectric polarizes, indicating it is dry.",
    "cat": "MAINT",
    "id": "T01A_169"
  },
  {
    "q": "What does a Polarization Index (PI) of less than 1.0 indicate?",
    "a": "Dangerous condition. Do not energize; insulation is wet.",
    "opts": [
      "Excellent condition, ready for service.",
      "Fair condition, moisture present. Dry out recommended.",
      "Dangerous condition. Do not energize; insulation is wet.",
      "Expected value after high-quality workshop rewinding."
    ],
    "exp": "A flat or falling PI curve under 1.0 means heavy leakage current through wet/dirty insulation.",
    "cat": "MAINT",
    "id": "T01A_170"
  },
  {
    "q": "What IR value is expected for a newly rewound alternator winding?",
    "a": ">100 MΩ",
    "opts": [
      ">1.0 MΩ",
      ">10 MΩ",
      ">100 MΩ",
      ">1000 MΩ"
    ],
    "exp": "Freshly baked varnish in a workshop should yield well over 100 MΩ.",
    "cat": "MAINT",
    "id": "T01A_171"
  },
  {
    "q": "How does temperature affect Insulation Resistance (IR) readings?",
    "a": "IR values double approximately every 10°C temperature drop",
    "opts": [
      "IR values halve approximately every 10°C temperature drop",
      "IR values double approximately every 10°C temperature drop",
      "IR values remain constant regardless of temperature",
      "IR values increase exponentially with heat"
    ],
    "exp": "Cooler insulation presents higher resistance. Readings must be temperature-corrected (usually to 40°C) for comparison.",
    "cat": "MAINT",
    "id": "T01A_172"
  },
  {
    "q": "What is the critical Megger earthing safety rule after testing?",
    "a": "The winding must be shorted to earth for at least 30 seconds",
    "opts": [
      "The winding must be shorted to earth for at least 30 seconds",
      "The winding must be flashed with 24V DC",
      "The AVR must be reconnected immediately",
      "The generator must be run at no-load for 5 minutes"
    ],
    "exp": "Meggering leaves a dangerous capacitive charge in the huge stator windings which must be safely bled to earth.",
    "cat": "MAINT",
    "id": "T01A_173"
  },
  {
    "q": "Why might a generator stator have a small dangerous voltage even with the ACB open?",
    "a": "Residual magnetism can induce a small voltage if the shaft rotates slightly",
    "opts": [
      "The starting batteries leak voltage into the stator",
      "Static electricity from the engine room air",
      "Residual magnetism can induce a small voltage if the shaft rotates slightly",
      "The anti-condensation heaters back-feed the main terminal"
    ],
    "exp": "Even slowly turning (from draft/turning gear) in residual flux generates dangerous voltage.",
    "cat": "MAINT",
    "id": "T01A_174"
  },
  {
    "q": "When verifying an alternator as 'Electrically Dead', what must be done to the AVR?",
    "a": "Completely disconnect the AVR module wiring",
    "opts": [
      "Turn the AVR trimmer to zero",
      "Completely disconnect the AVR module wiring",
      "Measure AVR output with a multimeter",
      "Short-circuit the AVR input terminals"
    ],
    "exp": "Disconnecting cuts off all potential field paths that could induce voltage.",
    "cat": "MAINT",
    "id": "T01A_175"
  },
  {
    "q": "What is the final physical step before touching the terminals of an isolated generator?",
    "a": "Connect safe temporary earth clamps to the stator terminals",
    "opts": [
      "Close the ACB to ground the system",
      "Spray electrical contact cleaner",
      "Connect safe temporary earth clamps to the stator terminals",
      "Remove the carbon brushes"
    ],
    "exp": "Temporary grounding guarantees any built-up or induced charge goes straight to the hull, not through the worker.",
    "cat": "MAINT",
    "id": "T01A_176"
  },
  {
    "q": "What is the purpose of anti-condensation heaters inside the alternator?",
    "a": "Maintain internal winding temperature just above ambient dew point",
    "opts": [
      "Pre-heat the lube oil for the bearings",
      "Maintain internal winding temperature just above ambient dew point",
      "Burn off accumulated carbon dust",
      "Keep the rotating diodes at operating temperature"
    ],
    "exp": "Keeping the windings warm prevents moisture from condensing out of cold air onto the insulation.",
    "cat": "MAINT",
    "id": "T01A_177"
  },
  {
    "q": "How must the anti-condensation heaters be interlocked?",
    "a": "They must automatically turn ON the moment the main generator breaker/run-signal turns OFF",
    "opts": [
      "They must be manually switched ON by the duty engineer",
      "They must automatically turn OFF when the engine room temperature drops",
      "They must automatically turn ON the moment the main generator breaker/run-signal turns OFF",
      "They run continuously regardless of generator state"
    ],
    "exp": "The interlock ensures heat is applied immediately upon shutdown before cooling causes condensation.",
    "cat": "MAINT",
    "id": "T01A_178"
  },
  {
    "q": "What should the PI be for insulation that is in fair condition with some moisture present?",
    "a": "PI 1.0–2.0",
    "opts": [
      "PI < 1.0",
      "PI 1.0–2.0",
      "PI > 2.0",
      "PI = 5.0"
    ],
    "exp": "A PI between 1.0 and 2.0 suggests the insulation is absorbing some charge but leakage is high; drying is needed.",
    "cat": "MAINT",
    "id": "T01A_179"
  },
  {
    "q": "If deep pitting is found on slip rings, what is the required Dry Dock action?",
    "a": "Rotor must be landed and slip rings machined on a lathe in a workshop",
    "opts": [
      "Use heavy emery paper while running at 1500 RPM",
      "Apply conductive grease to fill the pits",
      "Rotor must be landed and slip rings machined on a lathe in a workshop",
      "Replace only the carbon brushes with a softer grade"
    ],
    "exp": "Deep pits cannot be dressed by hand; the rotor must be removed and true-machined.",
    "cat": "MAINT",
    "id": "T01A_180"
  },
  {
    "q": "If a generator is started and shows zero voltage, what is the FIRST diagnostic check before assuming lost residual magnetism?",
    "a": "Check Actual Frequency / RPM",
    "opts": [
      "Check AVR Output",
      "Check Actual Frequency / RPM",
      "Check Voltmeter Calibration",
      "Field Flash the Exciter"
    ],
    "exp": "If the engine governor sensor is faulty, it may be running too slow to build voltage, deceiving the operator.",
    "cat": "RESID",
    "id": "T01A_181"
  },
  {
    "q": "What power source is used for Field Flashing?",
    "a": "A 12V or 24V DC battery",
    "opts": [
      "A 440V AC shore supply",
      "A 12V or 24V DC battery",
      "A 500V Megger test unit",
      "The ship's 220V lighting circuit"
    ],
    "exp": "A low-voltage DC battery provides enough current to momentarily magnetize the iron core.",
    "cat": "RESID",
    "id": "T01A_182"
  },
  {
    "q": "Where is the flashing voltage connected?",
    "a": "To the exciter field winding (stator terminals of the exciter)",
    "opts": [
      "To the main stator output terminals",
      "To the rotating diode wheel",
      "To the exciter field winding (stator terminals of the exciter)",
      "Directly to the PMG"
    ],
    "exp": "Flashing is applied to the stationary exciter field, NOT the main rotating field.",
    "cat": "RESID",
    "id": "T01A_183"
  },
  {
    "q": "What happens if reversed polarity is used during field flashing?",
    "a": "It will wipe the residual magnetism further instead of restoring it",
    "opts": [
      "The generator will output reverse sequence 3-phase AC",
      "It will wipe the residual magnetism further instead of restoring it",
      "It will over-speed the prime mover",
      "It will instantly burn out the rotating diodes"
    ],
    "exp": "Reversed DC pushes flux in the opposite direction, actively demagnetizing the core.",
    "cat": "RESID",
    "id": "T01A_184"
  },
  {
    "q": "How long should the flashing battery be connected?",
    "a": "2–3 seconds only",
    "opts": [
      "10-15 seconds",
      "2–3 seconds only",
      "Until the voltage reaches 440V",
      "Continuously while the generator is running"
    ],
    "exp": "Prolonged contact risks thermal damage to the winding and over-magnetization.",
    "cat": "RESID",
    "id": "T01A_185"
  },
  {
    "q": "Why must the machine be running at or near rated speed (1500/1800 RPM) during flashing?",
    "a": "So that the restored residual flux can bootstrap the AVR feedback loop",
    "opts": [
      "To provide cooling air for the flashing battery",
      "To prevent the diodes from locking in reverse bias",
      "So that the restored residual flux can bootstrap the AVR feedback loop",
      "To ensure the governor is fully open"
    ],
    "exp": "Speed generates the initial AC voltage from the flashed field, allowing the AVR to take over immediately.",
    "cat": "RESID",
    "id": "T01A_186"
  },
  {
    "q": "What instrument is used to measure the alternator air gap?",
    "a": "Long feeler gauges",
    "opts": [
      "Dial indicator",
      "Long feeler gauges",
      "Ultrasonic thickness gauge",
      "Laser alignment tool"
    ],
    "exp": "Long metal feeler gauges are slid through stator ventilation slots to measure clearance.",
    "cat": "RESID",
    "id": "T01A_187"
  },
  {
    "q": "How many measurement positions per pole are required for an air gap check?",
    "a": "Minimum 4 positions per pole (12, 6, 9, and 3 o'clock)",
    "opts": [
      "1 position per pole (Top)",
      "2 positions per pole (Top and Bottom)",
      "Minimum 4 positions per pole (12, 6, 9, and 3 o'clock)",
      "8 positions per pole"
    ],
    "exp": "Taking Top, Bottom, Left, and Right readings ensures the rotor is perfectly centered.",
    "cat": "RESID",
    "id": "T01A_188"
  },
  {
    "q": "What is the standard clearance for an alternator air gap?",
    "a": "1.5 to 3.0 mm",
    "opts": [
      "0.1 to 0.5 mm",
      "1.5 to 3.0 mm",
      "5.0 to 10.0 mm",
      "10.0 to 15.0 mm"
    ],
    "exp": "Alternator gaps are relatively large (1.5–3.0 mm) to reduce armature reaction.",
    "cat": "RESID",
    "id": "T01A_189"
  },
  {
    "q": "What is the maximum allowable deviation between air gap measurement positions?",
    "a": "±10%",
    "opts": [
      "±1%",
      "±5%",
      "±10%",
      "±25%"
    ],
    "exp": "Deviation beyond 10% indicates worn bearings or an off-center rotor.",
    "cat": "RESID",
    "id": "T01A_190"
  },
  {
    "q": "What is the critical risk if the air gap is too small?",
    "a": "Catastrophic rotor-stator rubbing",
    "opts": [
      "Catastrophic rotor-stator rubbing",
      "Excessive AVR excitation demand",
      "Demagnetization of the PMG",
      "Negative phase sequence generation"
    ],
    "exp": "A tight gap risks physical contact between spinning iron and stationary iron, destroying the machine.",
    "cat": "RESID",
    "id": "T01A_191"
  },
  {
    "q": "What happens if the air gap is too large?",
    "a": "Causes high reluctance, requiring excess excitation current from the AVR",
    "opts": [
      "Causes high reluctance, requiring excess excitation current from the AVR",
      "Reduces the output frequency",
      "Trips the reverse power relay instantly",
      "Causes the diodes to short circuit"
    ],
    "exp": "More magnetic resistance (reluctance) across a wide air gap means the AVR must push more field current to achieve 440V.",
    "cat": "RESID",
    "id": "T01A_192"
  },
  {
    "q": "What is the consequence of an uneven air gap?",
    "a": "Creates unbalanced magnetic pull, leading to severe vibration and bearing wear",
    "opts": [
      "Improves active load sharing",
      "Creates unbalanced magnetic pull, leading to severe vibration and bearing wear",
      "Burns out the PMG",
      "Causes the frequency to hunt continuously"
    ],
    "exp": "The rotor will be magnetically yanked toward the narrowest side, causing intense vibration.",
    "cat": "RESID",
    "id": "T01A_193"
  },
  {
    "q": "During the 'No Voltage' diagnostic sequence, if frequency is OK, what is checked next?",
    "a": "Voltmeter Calibration",
    "opts": [
      "Field Flashing",
      "AVR Output",
      "Voltmeter Calibration",
      "Rotating Diodes"
    ],
    "exp": "Verify the meter hasn't failed using a portable multimeter before digging deeper into the panel.",
    "cat": "RESID",
    "id": "T01A_194"
  },
  {
    "q": "What safety equipment must be nearby during field flashing?",
    "a": "A CO2 fire extinguisher",
    "opts": [
      "A CO2 fire extinguisher",
      "A foam fire extinguisher",
      "A high-voltage earthing rod",
      "A breathing apparatus"
    ],
    "exp": "Flashing carries a risk of sparking or winding fire, necessitating a CO2 extinguisher on standby.",
    "cat": "RESID",
    "id": "T01A_195"
  },
  {
    "q": "What operational state must the ship NOT be in prior to starting a blackout test?",
    "a": "Manoeuvring, berthing, or in restricted waters",
    "opts": [
      "At anchor with cargo operations",
      "Manoeuvring, berthing, or in restricted waters",
      "In deep sea normal sailing",
      "Under shore power connection"
    ],
    "exp": "Blackout tests kill propulsion and steering; doing this while manoeuvring is extremely dangerous.",
    "cat": "BLACK",
    "id": "T01A_196"
  },
  {
    "q": "What mode must the emergency generator be in prior to the test?",
    "a": "AUTO start mode",
    "opts": [
      "MANUAL test mode",
      "AUTO start mode",
      "OFF mode",
      "LOCAL program mode"
    ],
    "exp": "The whole point of the test is to prove it detects the blackout and auto-starts without human intervention.",
    "cat": "BLACK",
    "id": "T01A_197"
  },
  {
    "q": "What initiates the actual blackout test?",
    "a": "Trip all main generator ACBs",
    "opts": [
      "Push the manual start on the emergency DG",
      "Open the ESB transfer breaker",
      "Trip all main generator ACBs",
      "Shut down the main engine fuel pump"
    ],
    "exp": "Tripping the main ACBs simulates a catastrophic failure of the main busbar.",
    "cat": "BLACK",
    "id": "T01A_198"
  },
  {
    "q": "If the emergency generator auto-start fails during the blackout test, what must be done?",
    "a": "Immediately initiate manual start per ER manual procedure - do not wait",
    "opts": [
      "Immediately initiate manual start per ER manual procedure - do not wait",
      "Wait 45 seconds before touching any controls",
      "Restore the main generator ACBs instantly",
      "Call the master and wait for instructions"
    ],
    "exp": "The ship is genuinely blacked out. If auto fails, manual intervention is critically urgent.",
    "cat": "BLACK",
    "id": "T01A_199"
  },
  {
    "q": "Which loads should be verified as supplied by the ESB post-blackout?",
    "a": "Emergency lighting, navigation lights, GMDSS, fire detection, steering gear power",
    "opts": [
      "Galley, HVAC, deck machinery",
      "Main engine lube oil pumps, purifiers",
      "Emergency lighting, navigation lights, GMDSS, fire detection, steering gear power",
      "Bow thruster, windlass, cargo cranes"
    ],
    "exp": "The ESB strictly feeds essential safety and navigational equipment.",
    "cat": "BLACK",
    "id": "T01A_200"
  },
  {
    "q": "What is the critical rule for restoring auxiliaries after the main generator is back online?",
    "a": "Sequential Load Pickup (do NOT restore all at once)",
    "opts": [
      "Start all motors simultaneously to save time",
      "Sequential Load Pickup (do NOT restore all at once)",
      "Restore non-essential loads before essential loads",
      "Wait 1 hour before starting any pump"
    ],
    "exp": "Motors must be started one by one with delays to prevent massive combined inrush current.",
    "cat": "BLACK",
    "id": "T01A_201"
  },
  {
    "q": "How much current does a motor draw on starting compared to its rated running current?",
    "a": "5–8× rated current",
    "opts": [
      "1–2× rated current",
      "5–8× rated current",
      "10–15× rated current",
      "Exactly its rated current"
    ],
    "exp": "This massive starting inrush is why sequential loading is mandatory to prevent tripping the restored generator.",
    "cat": "BLACK",
    "id": "T01A_202"
  },
  {
    "q": "What is the typical time delay required between starting successive auxiliary motors?",
    "a": "30-second to 2-minute delays",
    "opts": [
      "1 to 5 seconds",
      "30-second to 2-minute delays",
      "5 to 10 minutes",
      "No delay is required"
    ],
    "exp": "Delays allow each motor to spin up and its current spike to subside before the next one starts.",
    "cat": "BLACK",
    "id": "T01A_203"
  },
  {
    "q": "Which equipment group is restored LAST in the sequence?",
    "a": "Non-essential loads: galley, HVAC, deck equipment",
    "opts": [
      "Steering gear and navigation lights",
      "Cooling water and lube oil pumps",
      "Starting air compressors",
      "Non-essential loads: galley, HVAC, deck equipment"
    ],
    "exp": "Comfort and cargo systems are lowest priority and restored only when propulsion plant is secure.",
    "cat": "BLACK",
    "id": "T01A_204"
  },
  {
    "q": "During restoration, how does the main generator connect to the dead busbar?",
    "a": "Synchronise and close main ACB onto dead busbar (or onto ESB via tie-breaker)",
    "opts": [
      "Using the dark lamp method exclusively",
      "By overriding the reverse power relay",
      "Synchronise and close main ACB onto dead busbar (or onto ESB via tie-breaker)",
      "By field flashing the running emergency generator"
    ],
    "exp": "The main machine comes online, powers the MSB, and then the tie-breaker syncs with the ESB to take back the load.",
    "cat": "BLACK",
    "id": "T01A_205"
  },
  {
    "q": "What records must be presented to the PSC inspector post-test?",
    "a": "Auto-start time, ESB close time, full restoration time",
    "opts": [
      "Insulation resistance values of all motors",
      "Fuel consumption of the main engine",
      "Auto-start time, ESB close time, full restoration time",
      "AVR droop settings"
    ],
    "exp": "PSC wants proof that the timing requirements (45s/30s) were met and logged.",
    "cat": "BLACK",
    "id": "T01A_206"
  },
  {
    "q": "Who must be briefed on their manual-start stations before tripping?",
    "a": "Chief engineer and all ER staff",
    "opts": [
      "Only the duty oiler",
      "Chief engineer and all ER staff",
      "The Master and deck officers",
      "Only the ETO"
    ],
    "exp": "Every ER person must know what to do instantly if the auto-start fails.",
    "cat": "BLACK",
    "id": "T01A_207"
  },
  {
    "q": "Before starting the test, what is checked regarding the Emergency Switchboard (ESB)?",
    "a": "Verify ESB is healthy and transfer breaker is in AUTO",
    "opts": [
      "Verify ESB is completely isolated",
      "Verify ESB is fed only by shore power",
      "Verify ESB is healthy and transfer breaker is in AUTO",
      "Verify ESB is locked out"
    ],
    "exp": "The tie breaker must be in AUTO to separate from the dead MSB and accept the emergency generator.",
    "cat": "BLACK",
    "id": "T01A_208"
  },
  {
    "q": "What is the consequence of starting all auxiliaries simultaneously?",
    "a": "Combined inrush trips the main generator on overcurrent, causing a second blackout",
    "opts": [
      "The motors spin up faster due to voltage drop",
      "Combined inrush trips the main generator on overcurrent, causing a second blackout",
      "The emergency generator parallels automatically",
      "The preferential trip sheds the steering gear"
    ],
    "exp": "The combined 6x starting spikes of multiple huge pumps will instantly trip the OCR.",
    "cat": "BLACK",
    "id": "T01A_209"
  },
  {
    "q": "In the stated restoration sequence, what follows the HFO separator and Cooling Water pumps?",
    "a": "Auxiliary Blower (M/E)",
    "opts": [
      "Galley ovens",
      "Main Engine Start",
      "Auxiliary Blower (M/E)",
      "Deck cranes"
    ],
    "exp": "Following the strict sequence: Sep -> Cooling -> Blower -> FWG -> Air Comp -> L.O. Pump -> M/E Start.",
    "cat": "BLACK",
    "id": "T01A_210"
  },
  {
    "q": "What is the relationship between a motor's torque and the supplied voltage?",
    "a": "Torque &prop; V²",
    "opts": [
      "Torque &prop; V",
      "Torque &prop; 1/V",
      "Torque &prop; V²",
      "Torque &prop; √V"
    ],
    "exp": "Induction motor torque is proportional to the square of the applied voltage.",
    "cat": "UVMT",
    "id": "T01A_211"
  },
  {
    "q": "If a 440V motor receives only 280V, roughly what percentage of rated torque is available?",
    "a": "40%",
    "opts": [
      "64%",
      "40%",
      "25%",
      "80%"
    ],
    "exp": "(280 / 440)² is approximately 0.40, meaning only 40% of design torque is produced.",
    "cat": "UVMT",
    "id": "T01A_212"
  },
  {
    "q": "What happens to the motor speed when torque drops dramatically due to under-voltage?",
    "a": "Motor cannot accelerate the load, speed drops and slip increases dramatically",
    "opts": [
      "Speed increases slightly to compensate",
      "Motor cannot accelerate the load, speed drops and slip increases dramatically",
      "Speed remains exactly synchronous",
      "Motor spins backwards"
    ],
    "exp": "With only 40% torque, the load bogs the motor down, forcing rotor speed to drop far below synchronous speed (high slip).",
    "cat": "UVMT",
    "id": "T01A_213"
  },
  {
    "q": "How does the stator current react to the dramatically increased slip at 280V?",
    "a": "Stator current rises to 2–3× rated value",
    "opts": [
      "Stator current drops by 40%",
      "Stator current falls to near zero",
      "Stator current rises to 2–3× rated value",
      "Stator current stays exactly at rated value"
    ],
    "exp": "High slip means the rotor cuts the stator field much faster, inducing massive current trying to restore torque.",
    "cat": "UVMT",
    "id": "T01A_214"
  },
  {
    "q": "What is the ultimate consequence of the massive current rise during an under-voltage stall?",
    "a": "Rapid overheating (I²R) and windings burn out within minutes",
    "opts": [
      "The motor cools down due to the lower voltage",
      "Rapid overheating (I²R) and windings burn out within minutes",
      "The bearings seize from lack of lubrication",
      "The slip rings pit heavily"
    ],
    "exp": "2 to 3 times the rated current generates 4 to 9 times the normal heat, quickly burning the insulation.",
    "cat": "UVMT",
    "id": "T01A_215"
  },
  {
    "q": "When will the motor completely stall in an under-voltage scenario?",
    "a": "If the load torque exceeds the reduced 40% capability",
    "opts": [
      "When the frequency drops by 2 Hz",
      "If the load torque exceeds the reduced 40% capability",
      "If the power factor reaches unity",
      "When the AVR limiter activates"
    ],
    "exp": "If the pump or fan requires 60% torque to turn, but the motor only makes 40%, it stalls instantly.",
    "cat": "UVMT",
    "id": "T01A_216"
  },
  {
    "q": "Which protection device MUST correctly operate to save a motor burning out from under-voltage?",
    "a": "Overload relay (OLR)",
    "opts": [
      "Reverse power relay",
      "Overload relay (OLR)",
      "Under-voltage relay on the main busbar",
      "Preferential trip"
    ],
    "exp": "The thermal overload relay (OLR) in the motor starter must detect the 2-3x current and trip before burnout.",
    "cat": "UVMT",
    "id": "T01A_217"
  },
  {
    "q": "Which of the following is a common cause of voltage dropping to 280V?",
    "a": "Generator AVR fault or incorrect voltage trimmer setting",
    "opts": [
      "High insulation resistance",
      "Generator AVR fault or incorrect voltage trimmer setting",
      "Governor droop set to 0%",
      "Excessive reactive power (kVAR) from capacitor banks"
    ],
    "exp": "A faulty AVR or bad setpoint will directly starve the busbar of voltage.",
    "cat": "UVMT",
    "id": "T01A_218"
  },
  {
    "q": "How can cables cause an under-voltage condition at the motor?",
    "a": "Excessive voltage drop in long cable runs (high resistance or undersized)",
    "opts": [
      "Excessive voltage drop in long cable runs (high resistance or undersized)",
      "Cables picking up interference from the synchroscope",
      "Cables being too thick, reducing current flow",
      "Cables crossing high voltage 6.6kV lines"
    ],
    "exp": "V = IR. Long, thin cables have high R, dropping significant voltage before reaching the motor terminal.",
    "cat": "UVMT",
    "id": "T01A_219"
  },
  {
    "q": "What transient voltage dip is allowed by SOLAS under sudden full-load application?",
    "a": "To 80% of rated",
    "opts": [
      "To 50% of rated",
      "To 80% of rated",
      "To 95% of rated",
      "To 60% of rated"
    ],
    "exp": "SOLAS allows a 20% transient drop (meaning 80% remains) when a heavy load is switched on.",
    "cat": "UVMT",
    "id": "T01A_220"
  },
  {
    "q": "How can a switchboard fault cause motor under-voltage?",
    "a": "Loose connection at switchboard busbar or motor terminal box causing partial contact resistance",
    "opts": [
      "Tightened bolts shorting phases together",
      "Loose connection at switchboard busbar or motor terminal box causing partial contact resistance",
      "The ammeter drawing too much voltage",
      "Earth fault relays absorbing the voltage"
    ],
    "exp": "Loose contacts act as a large resistor, dropping voltage right at the connection point.",
    "cat": "UVMT",
    "id": "T01A_221"
  },
  {
    "q": "On a 6.6kV vessel, what could cause a 440V motor to see under-voltage?",
    "a": "Transformer tap setting incorrect",
    "opts": [
      "The 6.6kV alternator running at 60Hz instead of 50Hz",
      "Transformer tap setting incorrect",
      "Using an oil-filled transformer instead of dry-type",
      "Connecting the motor directly to the 6.6kV bus"
    ],
    "exp": "Step-down transformers have taps. If set wrong, they won't output the full 440V to the lower busbar.",
    "cat": "UVMT",
    "id": "T01A_222"
  },
  {
    "q": "If a 440V motor receives 220V, what is the torque ratio?",
    "a": "0.25 (25%)",
    "opts": [
      "0.50 (50%)",
      "0.25 (25%)",
      "1.00 (100%)",
      "0.10 (10%)"
    ],
    "exp": "(220/440)² = (1/2)² = 1/4 = 25% torque.",
    "cat": "UVMT",
    "id": "T01A_223"
  },
  {
    "q": "Why does slip increase dramatically at 280V?",
    "a": "Because the rotor slows down while the synchronous magnetic field remains fast",
    "opts": [
      "Because the AVR boosts the frequency",
      "Because the governor increases fuel input",
      "Because the rotor speeds up to catch the magnetic field",
      "Because the rotor slows down while the synchronous magnetic field remains fast"
    ],
    "exp": "Slip is the difference between synchronous field speed and rotor speed. As torque drops, the rotor lags heavily.",
    "cat": "UVMT",
    "id": "T01A_225"
  },
  {
    "q": "What is the primary function of a Dashpot assembly?",
    "a": "A pneumatic or hydraulic time-delay device used in mechanical preferential trip relays",
    "opts": [
      "A device to instantly extinguish electrical arcs in ACBs",
      "A pneumatic or hydraulic time-delay device used in mechanical preferential trip relays",
      "A sensor for detecting main bearing high temperature",
      "A mechanical governor for active load sharing"
    ],
    "exp": "It provides a physical, fluid-based time delay before shedding loads.",
    "cat": "DASH",
    "id": "T01A_226"
  },
  {
    "q": "What moves inside the dashpot cylinder?",
    "a": "A piston",
    "opts": [
      "A rotating diode",
      "A carbon brush",
      "A piston",
      "A bimetallic strip"
    ],
    "exp": "The dashpot works by pulling a piston through oil or air.",
    "cat": "DASH",
    "id": "T01A_227"
  },
  {
    "q": "How is the rate of fluid displacement controlled in a dashpot?",
    "a": "By a micro-orifice with an adjustable needle valve",
    "opts": [
      "By changing the size of the piston on the fly",
      "By a micro-orifice with an adjustable needle valve",
      "By heating the oil with a thermistor",
      "By a computer-controlled solenoid"
    ],
    "exp": "The needle valve restricts how fast the fluid can escape from in front of the piston, setting the delay.",
    "cat": "DASH",
    "id": "T01A_228"
  },
  {
    "q": "What is the effect of opening the dashpot needle valve?",
    "a": "Reduces flow resistance, speeding up piston travel and shortening the delay",
    "opts": [
      "Increases flow resistance, lengthening the delay",
      "Stops the piston completely, providing infinite delay",
      "Reduces flow resistance, speeding up piston travel and shortening the delay",
      "Converts the dashpot to instantaneous trip mode"
    ],
    "exp": "Opening the valve lets fluid escape easier; the piston moves faster, so the trip happens sooner.",
    "cat": "DASH",
    "id": "T01A_229"
  },
  {
    "q": "What is the typical time delay setting for a preferential trip dashpot?",
    "a": "5–10 seconds",
    "opts": [
      "0.1–0.5 seconds",
      "5–10 seconds",
      "30–60 seconds",
      "1–2 minutes"
    ],
    "exp": "5-10 seconds is long enough to let a motor starting spike pass, but short enough to shed load before the generator burns.",
    "cat": "DASH",
    "id": "T01A_230"
  },
  {
    "q": "What is the operational purpose of the dashpot's delay?",
    "a": "Allows temporary current spikes (like motor starting) to pass without tripping the breaker",
    "opts": [
      "To give the engineer time to manually open the breaker",
      "To allow the synchroscope to complete a full rotation",
      "To delay the start of the emergency generator",
      "Allows temporary current spikes (like motor starting) to pass without tripping the breaker"
    ],
    "exp": "It discriminates between a harmless 3-second motor start and a genuine 10-second overload.",
    "cat": "DASH",
    "id": "T01A_231"
  },
  {
    "q": "What type of overload forces the dashpot piston to complete its travel?",
    "a": "Sustained overloads",
    "opts": [
      "Transient voltage spikes",
      "Sustained overloads",
      "Reverse power flow",
      "Negative phase sequence currents"
    ],
    "exp": "Only an overload that lasts longer than the 5-10s setting will finish moving the piston to hit the trip contact.",
    "cat": "DASH",
    "id": "T01A_232"
  },
  {
    "q": "What modern component replaces the mechanical dashpot?",
    "a": "Electronic digital timer relays",
    "opts": [
      "Carbon-pile regulators",
      "Mercury switches",
      "Electronic digital timer relays",
      "Bimetallic thermal strips"
    ],
    "exp": "Digital timers are precise, zero-maintenance, and don't leak oil.",
    "cat": "DASH",
    "id": "T01A_233"
  },
  {
    "q": "What maintenance check must be performed annually on an oil dashpot?",
    "a": "Check oil level in dashpot cylinder",
    "opts": [
      "Replace the needle valve",
      "Megger the piston coil",
      "Check oil level in dashpot cylinder",
      "Lubricate the outside casing"
    ],
    "exp": "If oil leaks out, there is no resistance, and the relay trips instantaneously, ruining discrimination.",
    "cat": "DASH",
    "id": "T01A_234"
  },
  {
    "q": "How does ambient temperature affect an oil-filled dashpot?",
    "a": "Oil viscosity changes with temperature, altering the delay time",
    "opts": [
      "High temperature boils the oil, causing a fire hazard",
      "Cold temperature shatters the glass cylinder",
      "Oil viscosity changes with temperature, altering the delay time",
      "Temperature has absolutely no effect on dashpot timing"
    ],
    "exp": "Cold oil is thick (slower trip); hot oil is thin (faster trip).",
    "cat": "DASH",
    "id": "T01A_235"
  },
  {
    "q": "If a ship moves from a tropical to an arctic route, what action might be required for the dashpot?",
    "a": "Re-time the relay if ambient temperature changes significantly",
    "opts": [
      "Replace the oil with antifreeze",
      "Remove the dashpot entirely",
      "Re-time the relay if ambient temperature changes significantly",
      "Wrap the dashpot in heating tape"
    ],
    "exp": "The change in viscosity requires adjusting the needle valve to bring the time back to 5-10s.",
    "cat": "DASH",
    "id": "T01A_236"
  },
  {
    "q": "If dashpot relay timing has drifted without temperature change, what is the likely maintenance action?",
    "a": "Clean needle valve orifice",
    "opts": [
      "Replace the entire generator ACB",
      "Clean needle valve orifice",
      "Increase the generator voltage to compensate",
      "Change the prime mover lube oil"
    ],
    "exp": "Dirt blocking the micro-orifice will restrict fluid flow, drastically lengthening the trip time.",
    "cat": "DASH",
    "id": "T01A_237"
  },
  {
    "q": "Closing the dashpot needle valve has what effect?",
    "a": "Restricts flow, lengthening the delay",
    "opts": [
      "Restricts flow, lengthening the delay",
      "Increases flow, shortening the delay",
      "Bypasses the delay entirely",
      "Trips the main breaker instantly"
    ],
    "exp": "A tighter orifice means fluid escapes slower, making the piston travel take longer.",
    "cat": "DASH",
    "id": "T01A_238"
  },
  {
    "q": "What action occurs when the dashpot piston completes its travel?",
    "a": "Trips the non-essential contacts",
    "opts": [
      "Closes the main ACB",
      "Trips the non-essential contacts",
      "Fires the emergency generator",
      "Starts the main engine blower"
    ],
    "exp": "It actuates the preferential trip switch to shed load.",
    "cat": "DASH",
    "id": "T01A_239"
  },
  {
    "q": "Which dashpot medium avoids the problem of oil viscosity changes?",
    "a": "Air (pneumatic)",
    "opts": [
      "Air (pneumatic)",
      "Hydraulic fluid",
      "Water",
      "Mercury"
    ],
    "exp": "Air dashpots are less susceptible to drastic viscosity changes than oil.",
    "cat": "DASH",
    "id": "T01A_240"
  },
  {
    "q": "Where is the Zener Diode Suppressor located in a brushless alternator?",
    "a": "Connected across the rotating diode wheel",
    "opts": [
      "Inside the main switchboard",
      "On the stationary exciter field",
      "Connected across the rotating diode wheel",
      "Inside the AVR panel"
    ],
    "exp": "It rotates with the shaft, wired parallel to the main field to protect the diodes.",
    "cat": "SAFE",
    "id": "T01A_241"
  },
  {
    "q": "What is another common name for the Zener Diode Suppressor?",
    "a": "Varistor",
    "opts": [
      "Thermistor",
      "Varistor",
      "Thyristor",
      "Transistor"
    ],
    "exp": "A varistor (voltage-dependent resistor) is often used to clamp voltage spikes.",
    "cat": "SAFE",
    "id": "T01A_242"
  },
  {
    "q": "What specific hazard does the Zener Diode Suppressor protect against?",
    "a": "Transient overvoltage spikes",
    "opts": [
      "High frequency vibrations",
      "Reverse active power",
      "Under-frequency hunting",
      "Transient overvoltage spikes"
    ],
    "exp": "It absorbs the massive back-EMF spike that occurs when inductive circuits break.",
    "cat": "SAFE",
    "id": "T01A_243"
  },
  {
    "q": "When do these transient overvoltage spikes typically occur?",
    "a": "When the alternator excitation field is suddenly broken or switched",
    "opts": [
      "When the engine first cranks",
      "When the alternator excitation field is suddenly broken or switched",
      "When the synchroscope is turned on",
      "When the fuel rack reaches 100%"
    ],
    "exp": "Tripping the ACB removes load, causing the AVR to radically cut excitation, collapsing the field and inducing a spike.",
    "cat": "SAFE",
    "id": "T01A_244"
  },
  {
    "q": "How does the Zener diode protect the rotating diodes?",
    "a": "It clamps the high voltage spike, dissipating it safely to prevent diode breakdown",
    "opts": [
      "It generates a counter-frequency to cancel the spike",
      "It clamps the high voltage spike, dissipating it safely to prevent diode breakdown",
      "It sends the spike back to the busbars",
      "It physically disconnects the field winding"
    ],
    "exp": "It acts as a pressure relief valve, shorting out safely only above a dangerous voltage threshold.",
    "cat": "SAFE",
    "id": "T01A_245"
  },
  {
    "q": "Where is the Excitation Current Limiter located?",
    "a": "In the AVR",
    "opts": [
      "On the rotor shaft",
      "In the AVR",
      "In the main ACB panel",
      "On the prime mover governor"
    ],
    "exp": "It is an electronic sub-circuit inside the Automatic Voltage Regulator.",
    "cat": "SAFE",
    "id": "T01A_246"
  },
  {
    "q": "What does the Excitation Current Limiter continuously monitor?",
    "a": "The excitation current supplied to the exciter stator field",
    "opts": [
      "The 440V stator output current",
      "The RPM of the prime mover",
      "The PMG AC output frequency",
      "The excitation current supplied to the exciter stator field"
    ],
    "exp": "It measures how much DC the AVR is pumping into the stationary exciter.",
    "cat": "SAFE",
    "id": "T01A_247"
  },
  {
    "q": "Under what condition does the AVR try to force dangerous levels of excitation?",
    "a": "If the alternator is overloaded",
    "opts": [
      "If the alternator is running at no-load",
      "If the alternator is overloaded",
      "If the PMG fails completely",
      "If the governor droop is set to zero"
    ],
    "exp": "On massive overload, terminal voltage drops; the AVR responds by pumping maximum DC to recover 440V.",
    "cat": "SAFE",
    "id": "T01A_248"
  },
  {
    "q": "At what value does the limiter cap the excitation current?",
    "a": "Approximately 110–120% of rated current",
    "opts": [
      "Exactly 100% of rated current",
      "Approximately 110–120% of rated current",
      "At 200% of rated current",
      "At 50% of rated current"
    ],
    "exp": "It allows a slight overload to support motor starting, but cuts off before winding damage occurs.",
    "cat": "SAFE",
    "id": "T01A_249"
  },
  {
    "q": "What physical damage does the Excitation Current Limiter prevent?",
    "a": "Rotor windings from overtemperature and potential thermal burnout",
    "opts": [
      "The synchroscope from burning out",
      "Rotor windings from overtemperature and potential thermal burnout",
      "The main ACB from mechanical fatigue",
      "The slip rings from pitting"
    ],
    "exp": "Excessive DC current would melt the insulation on the exciter field and main rotor windings.",
    "cat": "SAFE",
    "id": "T01A_250"
  },
  {
    "q": "Which component acts as the first line of defense against back-EMF on the rotor?",
    "a": "Zener Diode Suppressor (Varistor)",
    "opts": [
      "Reverse Power Relay",
      "Zener Diode Suppressor (Varistor)",
      "Overcurrent Relay",
      "AVR Soft Start trimmer"
    ],
    "exp": "The varistor handles the immediate high-voltage spike directly on the rotating assembly.",
    "cat": "SAFE",
    "id": "T01A_251"
  },
  {
    "q": "What happens if the Zener Diode Suppressor fails open?",
    "a": "The next transient spike will likely destroy the rotating diodes",
    "opts": [
      "The next transient spike will likely destroy the rotating diodes",
      "The generator will permanently over-speed",
      "The AVR will lose its reference voltage",
      "The stator will short to earth"
    ],
    "exp": "Without the clamping effect, the massive back-EMF hits the diodes directly, punching through their silicon.",
    "cat": "SAFE",
    "id": "T01A_252"
  },
  {
    "q": "Does the Excitation Current Limiter trip the main breaker?",
    "a": "No, it caps the excitation current",
    "opts": [
      "Yes, it sends a trip signal to the ACB",
      "No, it caps the excitation current",
      "Yes, it trips the emergency generator",
      "No, it drops the frequency to 50Hz"
    ],
    "exp": "It doesn't trip; it just refuses to supply more than 120% DC current, causing the 440V to sag instead of burning the rotor.",
    "cat": "SAFE",
    "id": "T01A_253"
  },
  {
    "q": "Why does the AVR need a separate limiter if there is an Overcurrent Relay (OCR)?",
    "a": "The OCR protects the AC stator; the limiter protects the DC rotor circuits",
    "opts": [
      "The OCR is too fast for the AVR",
      "The OCR only works for active power (kW)",
      "The OCR protects the AC stator; the limiter protects the DC rotor circuits",
      "The AVR limiter acts as a backup to the OCR"
    ],
    "exp": "The OCR monitors stator amps. The AVR could theoretically burn up the rotor pushing kVAR before stator amps reach trip levels.",
    "cat": "SAFE",
    "id": "T01A_254"
  },
  {
    "q": "What kind of protection does the Varistor provide compared to the Limiter?",
    "a": "Varistor protects against voltage spikes; Limiter protects against thermal current overload",
    "opts": [
      "Varistor protects against overspeed; Limiter protects against reverse power",
      "Both protect against short circuits on the busbar",
      "Varistor protects against voltage spikes; Limiter protects against thermal current overload",
      "Varistor protects the stator; Limiter protects the diodes"
    ],
    "exp": "Varistor = over-voltage transient control. Limiter = over-current thermal control.",
    "cat": "SAFE",
    "id": "T01A_255"
  },
  {
    "q": "What is the formula linking Active Power to Apparent Power?",
    "a": "Active Power (kW) = Apparent Power (kVA) × PF",
    "opts": [
      "Active Power (kW) = Apparent Power (kVA) / PF",
      "Active Power (kW) = Apparent Power (kVA) × PF",
      "Apparent Power (kVA) = Active Power (kW) × PF",
      "Active Power (kW) = Apparent Power (kVA) + PF"
    ],
    "exp": "kW is the portion of total kVA that performs actual work, determined by the power factor.",
    "cat": "KVA",
    "id": "T01A_256"
  },
  {
    "q": "What is the useful power of a 500 kVA alternator running at 0.8 PF?",
    "a": "400 kW",
    "opts": [
      "500 kW",
      "300 kW",
      "400 kW",
      "625 kW"
    ],
    "exp": "500 kVA × 0.8 = 400 kW.",
    "cat": "KVA",
    "id": "T01A_257"
  },
  {
    "q": "What is the useful power of a 500 kVA alternator running at 1.0 PF?",
    "a": "500 kW",
    "opts": [
      "400 kW",
      "500 kW",
      "600 kW",
      "1000 kW"
    ],
    "exp": "500 kVA × 1.0 = 500 kW.",
    "cat": "KVA",
    "id": "T01A_258"
  },
  {
    "q": "By what percentage does useful kW capacity increase if PF is improved from 0.8 to 1.0 on a 500kVA machine?",
    "a": "25%",
    "opts": [
      "10%",
      "20%",
      "25%",
      "50%"
    ],
    "exp": "It goes from 400kW to 500kW. An increase of 100kW is 25% of the original 400kW capacity.",
    "cat": "KVA",
    "id": "T01A_259"
  },
  {
    "q": "Does improving the ship's power factor add structural load to the diesel engine?",
    "a": "No, it increases electrical capacity without adding structural load to the engine or generator frame",
    "opts": [
      "Yes, the engine must burn 25% more fuel just to turn the shaft",
      "No, it increases electrical capacity without adding structural load to the engine or generator frame",
      "Yes, it drastically increases vibration in the crankshaft",
      "Yes, it requires adding extra cylinders to the engine"
    ],
    "exp": "It reduces wasted reactive current, allowing the engine to utilize its full rated mechanical kW design limit.",
    "cat": "KVA",
    "id": "T01A_260"
  },
  {
    "q": "What represents the hypotenuse of the power triangle?",
    "a": "kVA (Apparent Power)",
    "opts": [
      "kW (Active Power)",
      "kVAR (Reactive Power)",
      "kVA (Apparent Power)",
      "cos φ (Power Factor)"
    ],
    "exp": "kVA is the total vector sum of active (kW) and reactive (kVAR) power.",
    "cat": "KVA",
    "id": "T01A_261"
  },
  {
    "q": "What represents the horizontal leg of the power triangle?",
    "a": "kW (Active Power)",
    "opts": [
      "kW (Active Power)",
      "kVA (Apparent Power)",
      "kVAR (Reactive Power)",
      "sin φ"
    ],
    "exp": "The horizontal leg represents real, working power (kW = kVA × cos φ).",
    "cat": "KVA",
    "id": "T01A_262"
  },
  {
    "q": "What represents the vertical leg of the power triangle?",
    "a": "kVAR (Reactive Power)",
    "opts": [
      "kW (Active Power)",
      "kVA (Apparent Power)",
      "kVAR (Reactive Power)",
      "Voltage Regulation"
    ],
    "exp": "The vertical leg represents the non-working magnetic field exchange power (kVAR = kVA × sin φ).",
    "cat": "KVA",
    "id": "T01A_263"
  },
  {
    "q": "What is the standard marine design Power Factor (PF)?",
    "a": "0.8 lagging",
    "opts": [
      "1.0 unity",
      "0.8 leading",
      "0.8 lagging",
      "0.5 lagging"
    ],
    "exp": "Generators are designed to handle an inductive load base (motors) averaging 0.8 lagging PF.",
    "cat": "KVA",
    "id": "T01A_264"
  },
  {
    "q": "What type of equipment primarily exchanges kVAR with the alternator?",
    "a": "Inductive loads (motors, transformers)",
    "opts": [
      "Resistive heaters",
      "Incandescent lighting",
      "Inductive loads (motors, transformers)",
      "Galley hotplates"
    ],
    "exp": "Motors require magnetic fields to operate, which draw reactive power (kVAR).",
    "cat": "KVA",
    "id": "T01A_265"
  },
  {
    "q": "What physical negative effect does kVAR have on the generator?",
    "a": "It does no useful work but heats generator windings and cables",
    "opts": [
      "It causes the prime mover to stall",
      "It does no useful work but heats generator windings and cables",
      "It causes reverse power trips instantly",
      "It over-speeds the rotor"
    ],
    "exp": "Reactive current still flows physically through the copper, creating I²R heating losses.",
    "cat": "KVA",
    "id": "T01A_266"
  },
  {
    "q": "What component is used to reduce kVAR demand from the generator?",
    "a": "Capacitor banks",
    "opts": [
      "Larger engine governors",
      "Capacitor banks",
      "Neutral earthing resistors",
      "Zener diode suppressors"
    ],
    "exp": "Capacitors supply leading kVAR locally, cancelling out the lagging kVAR of motors so the generator doesn't have to supply it.",
    "cat": "KVA",
    "id": "T01A_267"
  },
  {
    "q": "What is the ultimate benefit of reducing generator kVAR using capacitors?",
    "a": "Lower current → less heating → more available kW capacity",
    "opts": [
      "Higher voltage → more torque → higher speed",
      "Lower current → less heating → more available kW capacity",
      "Increased frequency → faster ship speed",
      "More kVAR → better synchronization"
    ],
    "exp": "Freeing up the current-carrying capacity of the stator windings allows more active kW load to be drawn safely.",
    "cat": "KVA",
    "id": "T01A_268"
  },
  {
    "q": "Which trigonometric function defines the Power Factor (PF)?",
    "a": "cos φ",
    "opts": [
      "sin φ",
      "tan φ",
      "cos φ",
      "sec φ"
    ],
    "exp": "PF is the cosine of the phase angle between voltage and current.",
    "cat": "KVA",
    "id": "T01A_269"
  },
  {
    "q": "Which trigonometric function is used to calculate kVAR from kVA?",
    "a": "sin φ",
    "opts": [
      "cos φ",
      "sin φ",
      "tan φ",
      "cot φ"
    ],
    "exp": "Reactive power uses the sine of the angle: kVAR = kVA × sin φ.",
    "cat": "KVA",
    "id": "T01A_270"
  },
  {
    "q": "When checking a rewound alternator from shore, what is the acceptable winding resistance balance between phases?",
    "a": "All readings must be equal within 1% deviation",
    "opts": [
      "All readings must be equal within 5% deviation",
      "All readings must be equal within 1% deviation",
      "All readings must be equal within 10% deviation",
      "A difference of 1 Ohm is acceptable"
    ],
    "exp": "A micro-ohmmeter verifies identical turn counts; >1% deviation indicates a manufacturing error.",
    "cat": "WIND",
    "id": "T01A_271"
  },
  {
    "q": "What is the formula for the High-Potential (Hi-Pot) test voltage?",
    "a": "2 × Rated Voltage + 1000 V",
    "opts": [
      "2 × Rated Voltage",
      "Rated Voltage + 500 V",
      "2 × Rated Voltage + 1000 V",
      "5 × Rated Voltage"
    ],
    "exp": "This stresses the insulation to ensure it can withstand severe voltage spikes without breaking down.",
    "cat": "WIND",
    "id": "T01A_272"
  },
  {
    "q": "How long should the Hi-Pot test be applied?",
    "a": "For 1 minute",
    "opts": [
      "For 10 minutes",
      "For 1 minute",
      "For 5 seconds",
      "For 30 minutes"
    ],
    "exp": "Applying it for 1 minute tests dielectric strength without degrading the insulation excessively.",
    "cat": "WIND",
    "id": "T01A_273"
  },
  {
    "q": "What does the visual check of a rewound alternator entail?",
    "a": "Confirm even varnish application, tight slot wedges, and clean termination boxes",
    "opts": [
      "Confirm PMG magnetism, diode continuity, and AVR trimmers",
      "Check the oil level in the dashpot and governor",
      "Confirm even varnish application, tight slot wedges, and clean termination boxes",
      "Ensure the air gap is painted"
    ],
    "exp": "Visual inspection ensures mechanical integrity of the winding and professional assembly.",
    "cat": "WIND",
    "id": "T01A_274"
  },
  {
    "q": "What is the IR requirement for a rewound machine at room temperature?",
    "a": "≥ 100 MΩ",
    "opts": [
      "≥ 1.0 MΩ",
      "≥ 500 MΩ",
      "≥ 10 MΩ",
      "≥ 100 MΩ"
    ],
    "exp": "New epoxy vacuum pressure impregnation (VPI) should yield excellent resistance (>100 MΩ).",
    "cat": "WIND",
    "id": "T01A_275"
  },
  {
    "q": "What is the effect of blocked alternator air filters?",
    "a": "Restricts heat dissipation and causes rapid winding overheating under load",
    "opts": [
      "Causes the diodes to run too cold",
      "Reduces the output frequency",
      "Restricts heat dissipation and causes rapid winding overheating under load",
      "Increases the air gap"
    ],
    "exp": "Alternators rely on massive volumes of air to pull I²R heat out. Blocked filters cause immediate thermal trips.",
    "cat": "WIND",
    "id": "T01A_276"
  },
  {
    "q": "What should be used to blow out dry dust from windings?",
    "a": "Low-pressure dry compressed air",
    "opts": [
      "High-pressure steam",
      "Low-pressure dry compressed air",
      "A stiff wire brush",
      "High-pressure wet air"
    ],
    "exp": "Low pressure avoids forcing particles deeper or lifting old varnish.",
    "cat": "WIND",
    "id": "T01A_277"
  },
  {
    "q": "What is the danger of using high-pressure air to clean windings?",
    "a": "Can force conductive carbon dust deep into winding slots or physically damage aging insulation",
    "opts": [
      "It causes the rotor to spin backward",
      "It wipes the residual magnetism",
      "Can force conductive carbon dust deep into winding slots or physically damage aging insulation",
      "It induces a static charge that destroys the AVR"
    ],
    "exp": "High pressure embeds sharp carbon dust into the insulation, creating tracking paths.",
    "cat": "WIND",
    "id": "T01A_278"
  },
  {
    "q": "What is the only approved chemical to clean oil contamination from windings?",
    "a": "Approved electrical contact cleaner solvent",
    "opts": [
      "Fresh water and soap",
      "Kerosene",
      "Petrol",
      "Approved electrical contact cleaner solvent"
    ],
    "exp": "Dielectric safe solvents evaporate without leaving conductive residue or destroying varnish.",
    "cat": "WIND",
    "id": "T01A_279"
  },
  {
    "q": "Why are kerosene and petrol forbidden for cleaning windings?",
    "a": "They dissolve insulation varnish",
    "opts": [
      "They cause the copper to rust",
      "They dissolve insulation varnish",
      "They increase the winding resistance",
      "They are too expensive"
    ],
    "exp": "Petroleum-based fuels strip the protective enamel from the copper wire, causing instant shorts.",
    "cat": "WIND",
    "id": "T01A_280"
  },
  {
    "q": "What is the critical rule AFTER applying electrical solvent to a winding?",
    "a": "You must allow 100% full evaporation of the solvent before re-assembling, meggering, or applying power",
    "opts": [
      "You must megger immediately while wet to check penetration",
      "You must allow 100% full evaporation of the solvent before re-assembling, meggering, or applying power",
      "You must wipe it dry with a cotton rag",
      "You must apply a new coat of varnish immediately"
    ],
    "exp": "Trapped solvent inside slots expands rapidly when heated and is highly explosive.",
    "cat": "WIND",
    "id": "T01A_281"
  },
  {
    "q": "What happens if solvent is trapped inside the winding when power is applied?",
    "a": "It can dissolve insulation internally under load or cause explosive flashovers",
    "opts": [
      "It acts as extra cooling liquid",
      "It increases the power factor",
      "It can dissolve insulation internally under load or cause explosive flashovers",
      "It lubricates the rotor gap"
    ],
    "exp": "The electrical arc and thermal heat will ignite trapped solvent fumes, blowing up the stator.",
    "cat": "WIND",
    "id": "T01A_282"
  },
  {
    "q": "Where must all insulation values and maintenance dates be formally entered?",
    "a": "Planned Maintenance System (PMS)",
    "opts": [
      "The Official Log Book",
      "Planned Maintenance System (PMS)",
      "The Oil Record Book",
      "The bridge bell book"
    ],
    "exp": "The PMS tracks the degradation trend of IR values to predict failure.",
    "cat": "WIND",
    "id": "T01A_283"
  },
  {
    "q": "What does a no-load test of a rewound machine verify?",
    "a": "Balance, vibrations, hot bearings, and rotation direction",
    "opts": [
      "Load sharing capabilities and droop settings",
      "Maximum short-circuit current capacity",
      "Balance, vibrations, hot bearings, and rotation direction",
      "The exact VR% of the EMF method"
    ],
    "exp": "An uncoupled run proves the mechanical rebuild is sound before subjecting it to electrical load.",
    "cat": "WIND",
    "id": "T01A_284"
  },
  {
    "q": "What baseline physical measurement must be taken before putting a rewound alternator back into service?",
    "a": "Air gap feeler gauge readings",
    "opts": [
      "Rotor shaft length",
      "Air gap feeler gauge readings",
      "Carbon brush length",
      "Diode forward voltage"
    ],
    "exp": "Establishing the baseline air gap ensures future wear checks have a reference point.",
    "cat": "WIND",
    "id": "T01A_285"
  },
  {
    "q": "What is Armature Reaction?",
    "a": "When load current in the stator creates a flux that opposes and distorts the main rotor field flux",
    "opts": [
      "When the rotor physically rubs against the stator",
      "When the AVR reacts too slowly to a load change",
      "When load current in the stator creates a flux that opposes and distorts the main rotor field flux",
      "When the diodes rectify AC to DC"
    ],
    "exp": "The magnetic field generated by the load current physically pushes back against the rotor's magnetic field.",
    "cat": "ADV",
    "id": "T01A_286"
  },
  {
    "q": "What is the effect of armature reaction under a lagging (inductive) load?",
    "a": "Demagnetising effect → terminal voltage drops",
    "opts": [
      "Magnetising effect → terminal voltage rises",
      "Cross-magnetising effect → no net weakening",
      "Demagnetising effect → terminal voltage drops",
      "Zero effect → AVR disconnected"
    ],
    "exp": "Inductive loads force the stator flux directly against the rotor flux, squeezing it down and lowering voltage.",
    "cat": "ADV",
    "id": "T01A_287"
  },
  {
    "q": "What is the effect of armature reaction under a leading (capacitive) load?",
    "a": "Magnetising effect → terminal voltage rises",
    "opts": [
      "Demagnetising effect → terminal voltage drops",
      "Magnetising effect → terminal voltage rises",
      "Cross-magnetising effect → no net weakening",
      "No effect on voltage"
    ],
    "exp": "Capacitive loads align stator flux WITH rotor flux, artificially boosting the total field and raising voltage.",
    "cat": "ADV",
    "id": "T01A_288"
  },
  {
    "q": "What is the effect of armature reaction under a unity (1.0) PF load?",
    "a": "Cross-magnetising → distorts flux distribution but no net weakening",
    "opts": [
      "Demagnetising effect",
      "Magnetising effect",
      "Cross-magnetising → distorts flux distribution but no net weakening",
      "Eliminates all flux"
    ],
    "exp": "Purely resistive loads shift the flux sideways across the pole face but do not subtract from its total strength.",
    "cat": "ADV",
    "id": "T01A_289"
  },
  {
    "q": "Why is the air gap kept large in alternators compared to induction motors?",
    "a": "Increases the reluctance path for armature flux, reducing the armature reaction effect",
    "opts": [
      "To allow for poor bearing alignments",
      "Increases the reluctance path for armature flux, reducing the armature reaction effect",
      "To make extraction of the rotor easier",
      "To increase the output frequency"
    ],
    "exp": "A large gap acts as a huge magnetic resistor, weakening the stator's ability to push its flux against the rotor.",
    "cat": "ADV",
    "id": "T01A_290"
  },
  {
    "q": "What causes Negative Phase Sequence (NPS) currents?",
    "a": "Unbalanced three-phase voltages or currents (unequal R-Y-B magnitudes)",
    "opts": [
      "Operating at unity power factor",
      "Overloading the generator equally on all three phases",
      "Unbalanced three-phase voltages or currents (unequal R-Y-B magnitudes)",
      "Zero-sequence earth faults"
    ],
    "exp": "Single-phase loads or blown fuses cause uneven phase draw, generating NPS.",
    "cat": "ADV",
    "id": "T01A_291"
  },
  {
    "q": "What dangerous condition does NPS create in the rotor?",
    "a": "A counter-rotating magnetic field at double system frequency",
    "opts": [
      "A static DC magnetic field locking the rotor",
      "A counter-rotating magnetic field at double system frequency",
      "Total loss of residual magnetism",
      "An identical forward-rotating field"
    ],
    "exp": "The unbalanced phases create a backward-spinning field. The rotor hits this field at 2x normal speed.",
    "cat": "ADV",
    "id": "T01A_292"
  },
  {
    "q": "What is the physical result of NPS fields hitting the rotor at double frequency?",
    "a": "Induces heavy eddy currents resulting in rapid overheating of the rotor body and field winding",
    "opts": [
      "Induces heavy eddy currents resulting in rapid overheating of the rotor body and field winding",
      "Cools the rotor down excessively",
      "Causes the diodes to become reverse-biased",
      "Reduces the prime mover RPM"
    ],
    "exp": "The 120Hz induced currents cause massive I²R and hysteresis heating, destroying the rotor quickly.",
    "cat": "ADV",
    "id": "T01A_293"
  },
  {
    "q": "What allows a Shaft Generator to output 60 Hz even when main engine speed varies?",
    "a": "A thyristor-controlled AC/DC/AC Frequency Converter",
    "opts": [
      "A large slip clutch",
      "A thyristor-controlled AC/DC/AC Frequency Converter",
      "A mechanical governor on the propeller",
      "A massive dashpot assembly"
    ],
    "exp": "The cycloconverter takes variable AC, turns it to DC, and perfectly inverts it back to 60Hz AC.",
    "cat": "ADV",
    "id": "T01A_294"
  },
  {
    "q": "What is a major restriction on using a frequency converter shaft generator?",
    "a": "Can only be used at full sea speed - NOT during manoeuvring",
    "opts": [
      "Can only be used at full sea speed - NOT during manoeuvring",
      "Must be shut down at night",
      "Can only run in parallel with the emergency generator",
      "Requires a 100% purely resistive load"
    ],
    "exp": "Manoeuvring RPM drops too low and erratic for the converter to synthesize 60Hz, requiring auxiliary DGs.",
    "cat": "ADV",
    "id": "T01A_295"
  },
  {
    "q": "How does a salinometer measure water impurity?",
    "a": "A DC electrical supply passes through a conductivity cell; more impurity = more current flow",
    "opts": [
      "It uses an optical laser to count particles",
      "A DC electrical supply passes through a conductivity cell; more impurity = more current flow",
      "It measures the weight of the water sample",
      "An AC current creates an arc to measure gap resistance"
    ],
    "exp": "Pure water doesn't conduct. Dissolved salts provide ions, lowering resistance and allowing DC current to flow.",
    "cat": "ADV",
    "id": "T01A_296"
  },
  {
    "q": "Why MUST a salinometer use DC supply and not AC?",
    "a": "AC would cause electrolytic effects on electrodes, destroying them",
    "opts": [
      "AC is too dangerous for water applications",
      "AC would cause electrolytic effects on electrodes, destroying them",
      "DC provides a better sine wave",
      "Only DC can be stepped down accurately"
    ],
    "exp": "Using AC causes rapid electrolysis and polarization at the probes, ruining the measurement cell.",
    "cat": "ADV",
    "id": "T01A_297"
  },
  {
    "q": "What action does Salinometer Relay 2 perform when ppm is too high?",
    "a": "Activates alarm AND commands bypass/dump valve to divert distillate to sea",
    "opts": [
      "Shuts down the main engine",
      "Short-circuits the meter to protect it",
      "Activates alarm AND commands bypass/dump valve to divert distillate to sea",
      "Trips the freshwater pump breaker"
    ],
    "exp": "It immediately protects the boiler and tanks by throwing the salty water overboard.",
    "cat": "ADV",
    "id": "T01A_298"
  },
  {
    "q": "How does an AC Tachogenerator (drag-cup type) work?",
    "a": "Outer magnet rotates inducing eddy currents in drag cup, causing it to deflect against a spring",
    "opts": [
      "It outputs a high DC voltage proportional to speed",
      "Outer magnet rotates inducing eddy currents in drag cup, causing it to deflect against a spring",
      "It uses an optical sensor to count gear teeth",
      "It connects directly to the ship's 440V busbar"
    ],
    "exp": "Magnetic drag pulls the aluminium cup; the faster it spins, the harder it pulls against the indicator spring.",
    "cat": "ADV",
    "id": "T01A_299"
  },
  {
    "q": "In generator protection logic, what is an AND gate used for?",
    "a": "Permissive start circuits (requires all conditions to be met)",
    "opts": [
      "Tripping the generator from any single fault",
      "Permissive start circuits (requires all conditions to be met)",
      "Inverting the status of an alarm",
      "Bypassing the preferential trip"
    ],
    "exp": "AND gates demand that condition A *AND* condition B *AND* condition C are true before allowing a start.",
    "cat": "ADV",
    "id": "T01A_300"
  },
  {
    "q": "Which IACS Unified Requirements classify generator PMS as Category III OT Systems?",
    "a": "IACS E26 & E27",
    "opts": [
      "IACS M73",
      "IACS E10 & E11",
      "IACS E26 & E27",
      "SOLAS Chapter XI-2"
    ],
    "exp": "E26 and E27 are the new standard specifically addressing cyber resilience of onboard operational technology.",
    "cat": "CYBER",
    "id": "T01A_301"
  },
  {
    "q": "For vessels contracted on or after what date are IACS E26/E27 mandatory?",
    "a": "1 July 2024",
    "opts": [
      "1 January 2020",
      "1 July 2024",
      "1 December 2025",
      "1 January 2030"
    ],
    "exp": "The mandatory application date for the new cyber rules is July 1st, 2024.",
    "cat": "CYBER",
    "id": "T01A_302"
  },
  {
    "q": "How are generator PMS and electronic AVR systems classified under IACS E26?",
    "a": "Category III Operational Technology (OT) Systems",
    "opts": [
      "Category I Informational Technology (IT)",
      "Category II Auxiliary Systems",
      "Category III Operational Technology (OT) Systems",
      "Unclassified mechanical components"
    ],
    "exp": "They are Category III because their failure poses a catastrophic risk to ship safety.",
    "cat": "CYBER",
    "id": "T01A_303"
  },
  {
    "q": "What risk does a cyber-attack on generator control systems represent?",
    "a": "An immediate, catastrophic risk to ship propulsion and electrical safety",
    "opts": [
      "A minor data privacy breach",
      "A temporary loss of internet for the crew",
      "An immediate, catastrophic risk to ship propulsion and electrical safety",
      "A slight increase in fuel consumption"
    ],
    "exp": "Taking control of the generators means taking control of the ship's ability to move and stay afloat.",
    "cat": "CYBER",
    "id": "T01A_304"
  },
  {
    "q": "What is the FIRST mandatory step before an OEM technician connects a USB or laptop to the generator panel?",
    "a": "Scan the laptop/USB using an approved, offline maritime security tool",
    "opts": [
      "Format the USB drive completely",
      "Connect the laptop to the ship's Wi-Fi to update definitions",
      "Scan the laptop/USB using an approved, offline maritime security tool",
      "Turn off the main generator"
    ],
    "exp": "A dedicated offline scanning kiosk must verify the media is clean before it touches the critical OT network.",
    "cat": "CYBER",
    "id": "T01A_305"
  },
  {
    "q": "Who must provide physical authorization for control port access?",
    "a": "The ETO",
    "opts": [
      "The Master",
      "The ETO",
      "The Shore Superintendent",
      "The OEM Technician"
    ],
    "exp": "The Electro-Technical Officer holds the key/authorization to unlock the physical ports.",
    "cat": "CYBER",
    "id": "T01A_306"
  },
  {
    "q": "How is physical authorization enforced at the generator control panel?",
    "a": "Unlocking the RJ45/USB port cover and turning the key-switch to enable Local Program Mode",
    "opts": [
      "Typing a password on a touchscreen",
      "Unlocking the RJ45/USB port cover and turning the key-switch to enable Local Program Mode",
      "Swiping an RFID card on the bridge",
      "Disconnecting the AVR from the busbar"
    ],
    "exp": "It requires physical, air-gapped security: removing a lock and turning a hardwired key-switch.",
    "cat": "CYBER",
    "id": "T01A_307"
  },
  {
    "q": "If remote support is active during generator maintenance, what must be enforced?",
    "a": "Multi-Factor Authentication (MFA)",
    "opts": [
      "Open port forwarding",
      "Multi-Factor Authentication (MFA)",
      "Disabling the firewall",
      "Use of default admin credentials"
    ],
    "exp": "MFA ensures that even if credentials are intercepted, remote access requires a second token.",
    "cat": "CYBER",
    "id": "T01A_308"
  },
  {
    "q": "How must technician actions be recorded?",
    "a": "Written to an immutable, non-modifiable digital audit log",
    "opts": [
      "Handwritten in the engine room rough log",
      "Saved to a plain text file on the USB",
      "Written to an immutable, non-modifiable digital audit log",
      "Emailed to the company IT department"
    ],
    "exp": "An immutable log ensures that malicious actions cannot be erased or covered up later.",
    "cat": "CYBER",
    "id": "T01A_309"
  },
  {
    "q": "What credential action must be taken immediately as soon as the technician departs the vessel?",
    "a": "Change any default or temporary passwords used during the diagnostic session",
    "opts": [
      "Save the passwords on a sticky note for next time",
      "Change any default or temporary passwords used during the diagnostic session",
      "Lock the user account permanently",
      "Share the passwords with all engineer officers"
    ],
    "exp": "Resetting temporary credentials closes the backdoor that was opened for the maintenance event.",
    "cat": "CYBER",
    "id": "T01A_310"
  },
  {
    "q": "What type of security tool is required for scanning media?",
    "a": "An offline maritime security tool",
    "opts": [
      "A standard free antivirus",
      "An offline maritime security tool",
      "A cloud-based real-time scanner",
      "A simple format command"
    ],
    "exp": "It must be an approved, isolated scanning station specific to maritime OT threats, not connected to the internet.",
    "cat": "CYBER",
    "id": "T01A_311"
  },
  {
    "q": "Why is the scanning tool offline?",
    "a": "To prevent it from becoming an infection vector itself",
    "opts": [
      "To save bandwidth on the ship's satellite",
      "To make it faster",
      "To prevent it from becoming an infection vector itself",
      "Because OT networks do not use IP addresses"
    ],
    "exp": "Keeping the scanning kiosk air-gapped stops malware from jumping from the internet directly to the tool.",
    "cat": "CYBER",
    "id": "T01A_312"
  },
  {
    "q": "What state is enabled by turning the physical key-switch?",
    "a": "Local Program Mode",
    "opts": [
      "Auto Sync Mode",
      "Remote Overwrite Mode",
      "Local Program Mode",
      "Firmware Wipe Mode"
    ],
    "exp": "The hardware key permits write-access to the PLC or AVR firmware.",
    "cat": "CYBER",
    "id": "T01A_313"
  },
  {
    "q": "Why are electronic AVRs considered a cyber target?",
    "a": "They control excitation; hacking them can manipulate voltage and black out the ship",
    "opts": [
      "They store crew payroll data",
      "They control excitation; hacking them can manipulate voltage and black out the ship",
      "They are connected to the GMDSS",
      "They process credit card transactions"
    ],
    "exp": "Modern AVRs are microprocessors on a network. Corrupting their logic will physically destroy the busbar stability.",
    "cat": "CYBER",
    "id": "T01A_314"
  },
  {
    "q": "What does 'immutable' mean in the context of the audit log?",
    "a": "Non-modifiable (cannot be edited or deleted)",
    "opts": [
      "Stored in the cloud",
      "Non-modifiable (cannot be edited or deleted)",
      "Encrypted with a password",
      "Printed on paper automatically"
    ],
    "exp": "Immutable logs are locked records that provide a forensic trail of exactly what was touched.",
    "cat": "CYBER",
    "id": "T01A_315"
  },
  {
    "q": "how do you parallel if the synchroscope is not working?",
    "a": "Use Dark lamp method: 3 lamps across corresponding phases, close when all dark. Use separate V/Hz meters.",
    "opts": [
      "Close the breaker at random and rely on the reverse power relay",
      "Use Dark lamp method: 3 lamps across corresponding phases, close when all dark. Use separate V/Hz meters.",
      "Use a single lamp and close when it is brightest",
      "Call shore support to parallel remotely"
    ],
    "exp": "This is the classic MMD surveyor accepted answer for a failed synchroscope.",
    "cat": "SURV",
    "id": "T01A_316"
  },
  {
    "q": "What must you verify before using the Dark Lamp method?",
    "a": "Verify phase sequence separately first",
    "opts": [
      "Verify the fuel rack is at 100%",
      "Verify the AVR is disconnected",
      "Verify phase sequence separately first",
      "Verify the generator is at 440V exactly"
    ],
    "exp": "The dark lamp method masks reversed sequences, so sequence must be proven by other means first.",
    "cat": "SURV",
    "id": "T01A_317"
  },
  {
    "q": "In an exam, how do you fix unequal active (kW) load sharing?",
    "a": "Adjust governor of under-loaded machine (more fuel) while reducing overloaded machine. Do NOT touch AVR.",
    "opts": [
      "Adjust AVR of under-loaded machine (more voltage).",
      "Adjust governor of under-loaded machine (more fuel) while reducing overloaded machine. Do NOT touch AVR.",
      "Adjust governor droop to 0%.",
      "Trip the breaker and start again."
    ],
    "exp": "kW is strictly a mechanical fuel issue managed by the governor.",
    "cat": "SURV",
    "id": "T01A_318"
  },
  {
    "q": "In an exam, how do you fix unequal reactive (current/kVAR) sharing?",
    "a": "Increase AVR voltage trimmer of under-loaded machine. Do NOT touch governors.",
    "opts": [
      "Increase governor speed of under-loaded machine.",
      "Decrease governor speed of overloaded machine.",
      "Increase AVR voltage trimmer of under-loaded machine. Do NOT touch governors.",
      "Adjust the slip ring brushes."
    ],
    "exp": "kVAR/Current imbalances are strictly magnetic issues managed by the AVR.",
    "cat": "SURV",
    "id": "T01A_319"
  },
  {
    "q": "What is the surveyor's expected answer for 'What is droop?'",
    "a": "Intentional slight reduction in output (speed or voltage) as load increases, ensuring stable sharing.",
    "opts": [
      "A complete failure of voltage due to AVR breakdown.",
      "Intentional slight reduction in output (speed or voltage) as load increases, ensuring stable sharing.",
      "The time delay of a dashpot mechanism.",
      "The sagging of the stator windings due to heat."
    ],
    "exp": "Droop acts as a stabilizing spring, trading a small loss of speed/voltage for load-sharing stability.",
    "cat": "SURV",
    "id": "T01A_320"
  },
  {
    "q": "What is the ideal answer for IDMT meaning and purpose?",
    "a": "Inverse Definite Minimum Time. Mirrors I²t damage, allows motor start discrimination, gives selectivity.",
    "opts": [
      "Instantaneous Trip. Trips on any fault immediately to save the busbar.",
      "Inverse Definite Minimum Time. Mirrors I²t damage, allows motor start discrimination, gives selectivity.",
      "Internal Delay Mechanism. Used only for the preferential trip dashpot.",
      "Inverse Differential Multiplier. Checks phase imbalance."
    ],
    "exp": "This hits all three critical points surveyors listen for: I²t, discrimination, and selectivity.",
    "cat": "SURV",
    "id": "T01A_321"
  },
  {
    "q": "How do you test the reverse power relay according to the surveyor guide?",
    "a": "Rack VCB to TEST, use test set to inject simulated reverse power (V+I at phase angle).",
    "opts": [
      "Press the 'ACB Close' button on a dead generator.",
      "Rack VCB to TEST, use test set to inject simulated reverse power (V+I at phase angle).",
      "Short the CT terminals and watch the meter.",
      "Turn the governor speed up until the relay trips."
    ],
    "exp": "Secondary injection testing is the formal, safe method expected in oral exams.",
    "cat": "SURV",
    "id": "T01A_322"
  },
  {
    "q": "If a running generator shows no voltage, what is the surveyor expecting as your FIRST check?",
    "a": "Voltmeter calibration",
    "opts": [
      "Check rotating diodes",
      "Voltmeter calibration",
      "Field flash the exciter",
      "Check AVR PT supply"
    ],
    "exp": "Examiners want to see that you start with the simplest, least invasive check (the meter itself).",
    "cat": "SURV",
    "id": "T01A_323"
  },
  {
    "q": "What checks are required before commissioning a rewound alternator from a workshop?",
    "a": "Visual, IR test (>100 MΩ), Resistance balance (1%), Hi-Pot (2xV+1000), No-load run, Air gap.",
    "opts": [
      "Visual, IR test (>100 MΩ), Resistance balance (1%), Hi-Pot (2xV+1000), No-load run, Air gap.",
      "Only a 500V Megger test is required.",
      "Secondary injection of the AVR and OCR.",
      "Load test to 110% capacity immediately."
    ],
    "exp": "This comprehensive list covers mechanical, insulation, and electrical balance proofing.",
    "cat": "SURV",
    "id": "T01A_324"
  },
  {
    "q": "During a blackout test, what must you do if the auto-start fails?",
    "a": "Immediately initiate manual start per ER manual - do not wait",
    "opts": [
      "Wait for the timer to reach 45 seconds",
      "Call the master to cancel the test",
      "Immediately initiate manual start per ER manual - do not wait",
      "Reset the preferential trip relays"
    ],
    "exp": "Safety dictates that if the automation fails, human intervention must restore power instantly.",
    "cat": "SURV",
    "id": "T01A_325"
  },
  {
    "q": "What does a synchroscope construction consist of?",
    "a": "Small induction-motor type instrument. Stator=busbar, Rotor=incoming.",
    "opts": [
      "A digital multimeter with a rotating dial.",
      "Small induction-motor type instrument. Stator=busbar, Rotor=incoming.",
      "A carbon-pile resistor stack.",
      "A PMG connected to a varistor."
    ],
    "exp": "This concisely describes its physical makeup.",
    "cat": "SURV",
    "id": "T01A_326"
  },
  {
    "q": "What causes massive circulating current, mechanical shock, and winding damage?",
    "a": "Closing breaker at 6 o'clock (180° out of phase)",
    "opts": [
      "Closing breaker at 12 o'clock",
      "Tripping the breaker under heavy load",
      "Closing breaker at 6 o'clock (180° out of phase)",
      "Opening the exciter field"
    ],
    "exp": "This describes the catastrophic consequence of a completely bungled synchronization.",
    "cat": "SURV",
    "id": "T01A_327"
  },
  {
    "q": "What does 'TMS' stand for on an IDMT relay?",
    "a": "Time Multiplier Setting",
    "opts": [
      "Temperature Measurement Sensor",
      "Transient Magnetic Switch",
      "Time Multiplier Setting",
      "Torque Motor Sync"
    ],
    "exp": "TMS scales the trip curve up or down.",
    "cat": "SURV",
    "id": "T01A_328"
  },
  {
    "q": "What is the very first physical action on the ACB before secondary injection testing?",
    "a": "Rack ACB to TEST position",
    "opts": [
      "Press the mechanical trip button",
      "Disconnect the CT wiring",
      "Rack ACB to TEST position",
      "Remove the arc chutes"
    ],
    "exp": "Isolating the high voltage contacts is the primary safety step.",
    "cat": "SURV",
    "id": "T01A_329"
  },
  {
    "q": "What is the expected reading of the exciter field resistance?",
    "a": "A few ohms",
    "opts": [
      "A few ohms",
      "Over 100 Megaohms",
      "Zero ohms",
      "1000 ohms"
    ],
    "exp": "A healthy coil has low but measurable resistance.",
    "cat": "SURV",
    "id": "T01A_330"
  },
  {
    "q": "Trick Question: What happens if you close the ACB on a non-running generator?",
    "a": "Back-feeds as induction motor → motoring → reverse power relay trips ACB",
    "opts": [
      "Nothing happens because it has 0V",
      "Back-feeds as induction motor → motoring → reverse power relay trips ACB",
      "The prime mover starts automatically",
      "The AVR burns out instantly"
    ],
    "exp": "It acts as a huge induction motor, drawing heavy current until the reverse power relay protects it.",
    "cat": "REV",
    "id": "T01A_331"
  },
  {
    "q": "What is the strict time limit for applying flashing voltage?",
    "a": "2–3 sec only",
    "opts": [
      "10 seconds",
      "2–3 sec only",
      "Until 440V is reached",
      "1 minute"
    ],
    "exp": "Applying DC longer risks burning the winding or over-saturating the core.",
    "cat": "REV",
    "id": "T01A_332"
  },
  {
    "q": "What is the typical setting for the Reverse Power relay?",
    "a": "5–10%",
    "opts": [
      "105–110%",
      "5–10%",
      "85%",
      "20%"
    ],
    "exp": "It trips when active power reverses to 5-10% of the machine's forward rating.",
    "cat": "REV",
    "id": "T01A_333"
  },
  {
    "q": "What is the typical setting for the Under-Voltage (UV) relay?",
    "a": "85%",
    "opts": [
      "110%",
      "85%",
      "50%",
      "95%"
    ],
    "exp": "If busbar drops to 85% of rated voltage, the UV relay opens the breaker.",
    "cat": "REV",
    "id": "T01A_334"
  },
  {
    "q": "At what temperature does the Class F winding thermistor trip?",
    "a": "155°C",
    "opts": [
      "80°C",
      "95°C",
      "155°C",
      "180°C"
    ],
    "exp": "155°C is the thermal destruction limit for Class F stator insulation.",
    "cat": "REV",
    "id": "T01A_335"
  },
  {
    "q": "What is the effect of ONE diode open-circuit in a running alternator?",
    "a": "Voltage fluctuation, 15–20% drop under load",
    "opts": [
      "Voltage fluctuation, 15–20% drop under load",
      "Severe fluctuation, electrical vibration, field overheating",
      "Instantaneous trip on reverse power",
      "Generator acts as an induction motor"
    ],
    "exp": "An open diode causes a heavy voltage sag when the AVR maxes out under load.",
    "cat": "REV",
    "id": "T01A_336"
  },
  {
    "q": "What is the critical post-megger safety requirement?",
    "a": "Discharge winding 30 seconds after test",
    "opts": [
      "Flash the field with 24V",
      "Discharge winding 30 seconds after test",
      "Run the generator at no-load",
      "Reconnect the AVR immediately"
    ],
    "exp": "Shorting the winding dissipates the lethal capacitive charge left by the 500V megger.",
    "cat": "REV",
    "id": "T01A_337"
  },
  {
    "q": "How many measurement points are required for an air gap check?",
    "a": "4 positions per pole",
    "opts": [
      "1 position per pole",
      "2 positions per pole",
      "4 positions per pole",
      "8 positions per pole"
    ],
    "exp": "Top, bottom, left, and right (12, 6, 9, 3 o'clock).",
    "cat": "REV",
    "id": "T01A_338"
  },
  {
    "q": "Why is the tank top avoided for generator placement?",
    "a": "Flooding risk, vibration, no crane access, poor ventilation",
    "opts": [
      "It is too close to the main switchboard",
      "The magnetic field affects the ship's compass",
      "Flooding risk, vibration, no crane access, poor ventilation",
      "It interferes with the ballast tanks"
    ],
    "exp": "This is the classic 4-point answer expected by surveyors like Kamath and Wad.",
    "cat": "REV",
    "id": "T01A_339"
  },
  {
    "q": "What is the correct brush pressure to prevent slip ring pitting?",
    "a": "150–200 g/cm²",
    "opts": [
      "50–100 g/cm²",
      "150–200 g/cm²",
      "500 g/cm²",
      "1 kg/cm²"
    ],
    "exp": "Proper spring tension ensures good contact without excessive mechanical wear.",
    "cat": "REV",
    "id": "T01A_340"
  },
  {
    "q": "Why are capacitor banks installed on ships?",
    "a": "To supply leading kVAR locally, reducing generator kVAR load, current, and heating",
    "opts": [
      "To store energy for blackout starting",
      "To smooth the DC ripple on the exciter field",
      "To supply leading kVAR locally, reducing generator kVAR load, current, and heating",
      "To act as surge suppressors for the rotating diodes"
    ],
    "exp": "They improve the power factor, freeing up the generator's thermal capacity for useful kW.",
    "cat": "REV",
    "id": "T01A_341"
  },
  {
    "q": "According to SOLAS, what is the required frequency recovery time?",
    "a": "5 sec recovery",
    "opts": [
      "1.5 sec recovery",
      "5 sec recovery",
      "10 sec recovery",
      "30 sec recovery"
    ],
    "exp": "Frequency must settle back to nominal within 5 seconds after a transient.",
    "cat": "REV",
    "id": "T01A_342"
  },
  {
    "q": "According to SOLAS, what is the allowed voltage transient limit?",
    "a": "±20%",
    "opts": [
      "±2.5%",
      "±10%",
      "±20%",
      "±5%"
    ],
    "exp": "Voltage may temporarily dip by 10% to 20% under sudden load before recovering.",
    "cat": "REV",
    "id": "T01A_343"
  },
  {
    "q": "What is the effect of ONE diode short-circuit in a running alternator?",
    "a": "Severe fluctuation, electrical vibration, field overheating",
    "opts": [
      "Voltage fluctuation, 15–20% drop under load",
      "Severe fluctuation, electrical vibration, field overheating",
      "Perfectly smooth voltage with zero output",
      "Loss of governor control"
    ],
    "exp": "A short allows AC reverse current into the field, causing extreme magnetic imbalance and vibration.",
    "cat": "REV",
    "id": "T01A_344"
  },
  {
    "q": "What is the typical setting for the overspeed trip test?",
    "a": "110–115% RPM",
    "opts": [
      "100–105% RPM",
      "110–115% RPM",
      "120–125% RPM",
      "150% RPM"
    ],
    "exp": "The prime mover must shut down if it exceeds the safe 110-115% rotational speed limit.",
    "cat": "REV",
    "id": "T01A_345"
  }

]);
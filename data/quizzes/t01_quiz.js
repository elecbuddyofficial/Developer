window.loadQuizzes("T01_Alternator", [
  {
    "q": "What is the purpose of the AVR in an alternator?",
    "a": "Automatically maintains constant output voltage by controlling excitation current",
    "opts": ["Controls frequency", "Maintains constant voltage", "Controls speed", "Monitors earth faults"],
    "exp": "AVR = Automatic Voltage Regulator. It senses terminal voltage and adjusts field current to keep voltage constant under varying loads.",
    "cat": "AVR",
    "id": "T01A_001"
  },
  {
    "q": "Why must alternator AVR be disconnected before megger testing?",
    "a": "High megger voltage would damage AVR electronic components",
    "opts": ["To get accurate reading", "High megger voltage would damage AVR electronic components", "To isolate the winding", "AVR is not affected"],
    "exp": "AVR contains sensitive electronics (transistors, ICs) that cannot withstand the 500V\u20131000V applied during insulation resistance testing.",
    "cat": "AVR",
    "id": "T01A_002"
  },
  {
    "q": "What is the function of the droop resistor in an AVR?",
    "a": "Causes terminal voltage to droop with increasing reactive current for stable parallel operation",
    "opts": ["Limits output voltage", "Causes terminal voltage to droop with increasing reactive current for stable parallel operation", "Protects AVR from overcurrent", "Filters voltage ripple"],
    "exp": "Without reactive droop, two paralleled generators with identical AVRs would have unstable reactive power sharing - one machine would take all kVAR.",
    "cat": "AVR",
    "id": "T01A_003"
  },
  {
    "q": "What does the AVR sense to regulate voltage?",
    "a": "Terminal voltage of the alternator (and sometimes reactive current for droop)",
    "opts": ["Speed of prime mover", "Terminal voltage of the alternator (and sometimes reactive current for droop)", "Load current only", "Exciter output"],
    "exp": "AVR compares sensed terminal voltage against setpoint. Error signal adjusts field current. Some AVRs also use reactive current droop feedback for parallel operation stability.",
    "cat": "AVR",
    "id": "T01A_004"
  },
  {
    "q": "What is meant by 'reactive droop compensation' in AVR?",
    "a": "AVR reduces excitation slightly as reactive current increases, enabling stable sharing of kVAR between parallel generators",
    "opts": ["Generator reduces output voltage automatically", "AVR reduces excitation slightly as reactive current increases, enabling stable sharing of kVAR between parallel generators", "Frequency droop for active power", "Voltage drop protection"],
    "exp": "Without reactive droop, parallel generators fight over reactive load. Droop compensation gives a slightly drooping V vs Q characteristic to ensure stable sharing.",
    "cat": "AVR",
    "id": "T01A_005"
  },
  {
    "q": "What is the function of a 'trimmer' potentiometer in the AVR?",
    "a": "Allows fine adjustment of output voltage setpoint",
    "opts": ["Adjusts frequency", "Allows fine adjustment of output voltage setpoint", "Controls exciter speed", "Sets overcurrent threshold"],
    "exp": "Trimmer on AVR panel allows \u00b15% voltage adjustment. Used to equalise voltage between two generators before synchronising and for reactive power sharing adjustment.",
    "cat": "AVR",
    "id": "T01A_006"
  },
  {
    "q": "What is the purpose of a capacitor in the AVR sensing circuit?",
    "a": "Filters out harmonics and smooths the sensed voltage signal",
    "opts": ["Stores energy for AVR", "Filters out harmonics and smooths the sensed voltage signal", "Powers AVR electronics", "Provides excitation"],
    "exp": "Harmonics in terminal voltage (from non-linear loads like VFDs) can cause AVR instability. Input filter capacitors smooth the sensing signal.",
    "cat": "AVR",
    "id": "T01A_007"
  },
  {
    "q": "What is the typical no-load voltage droop percentage allowed in AVR specification?",
    "a": "\u00b11% of nominal voltage",
    "opts": ["\u00b110%", "\u00b15%", "\u00b11% of nominal voltage", "\u00b10.1%"],
    "exp": "Good AVR specification: voltage regulation \u22641% at no-load to full-load. Response time: <1 second for 10% load change. Modern digital AVRs achieve \u00b10.5% regulation.",
    "cat": "AVR",
    "id": "T01A_008"
  },
  {
    "q": "What happens when a generator's AVR fails in the 'full field' position?",
    "a": "Generator output voltage rises rapidly, overvoltage trips, equipment potentially damaged",
    "opts": ["Generator shuts down safely", "Generator output voltage rises rapidly, overvoltage trips, equipment potentially damaged", "No change - another AVR takes over", "Voltage drops to zero"],
    "exp": "AVR fail to full field = field forcing \u2192 voltage shoots up \u2192 overvoltage relay should trip generator breaker \u2192 if OV relay fails, loads and insulation are at risk.",
    "cat": "AVR",
    "id": "T01A_009"
  },
  {
    "q": "What is 'field current limit' in AVR?",
    "a": "Maximum excitation current allowed - prevents overheating of field winding",
    "opts": ["Maximum stator current", "Maximum excitation current allowed - prevents overheating of field winding", "Minimum field current for AVR", "Current limit for AVR electronics"],
    "exp": "If load demands more reactive power than field can supply, AVR hits field current limit. Terminal voltage then drops. Underexcitation limit (UEL) prevents loss of synchronism.",
    "cat": "AVR",
    "id": "T01A_010"
  },
  {
    "q": "What is the primary function of the AVR (Automatic Voltage Regulator)?",
    "a": "Automatically maintains alternator terminal voltage at set value by adjusting excitation current",
    "opts": ["Controls the speed of the prime mover", "Automatically maintains alternator terminal voltage at set value by adjusting excitation current", "Protects the alternator from short circuit", "Monitors and logs alternator performance data"],
    "exp": "AVR continuously senses output voltage, compares it to the setpoint, and adjusts field current via thyristors/transistors to keep voltage constant. If voltage drops (more load added), AVR increases field current. If voltage rises (load removed), it reduces field current.",
    "cat": "AVR",
    "id": "T01A_011"
  },
  {
    "q": "Why must the AVR be DISCONNECTED before performing a megger (IR) test on the alternator?",
    "a": "Megger voltage (500\u20131000V DC) can permanently damage AVR semiconductors (thyristors, transistors, capacitors)",
    "opts": ["To prevent the AVR from showing false readings on the display", "Megger voltage (500\u20131000V DC) can permanently damage AVR semiconductors (thyristors, transistors, capacitors)", "To allow manual field control during testing", "AVR will reverse the polarity of megger readings"],
    "exp": "The megger applies 500\u20131000V DC to the winding. AVR contains sensitive solid-state components rated for much lower voltages. Also, the AVR may back-feed current into the winding, giving a false (higher) IR reading. Always disconnect and short AVR terminals before meggering.",
    "cat": "AVR",
    "id": "T01A_012"
  },
  {
    "q": "What is the 'Voltage Adjust' trimmer in an AVR used for?",
    "a": "Sets the output voltage setpoint (e.g., 440V) of the alternator",
    "opts": ["Sets the maximum current limit", "Sets the output voltage setpoint (e.g., 440V) of the alternator", "Controls the frequency trim", "Adjusts the reactive load sharing between parallel generators"],
    "exp": "The voltage adjust trimmer sets the reference setpoint that AVR tries to maintain. Turning it up \u2192 field current increases \u2192 terminal voltage rises. This is adjusted during commissioning to set exactly 440V (or 6600V on HV ships).",
    "cat": "AVR",
    "id": "T01A_013"
  },
  {
    "q": "What is the 'Droop' trimmer in the AVR used for?",
    "a": "Sets the reactive power (kVAR) sharing between generators running in parallel",
    "opts": ["Reduces output voltage gradually under heavy load for safety", "Sets the reactive power (kVAR) sharing between generators running in parallel", "Adjusts governor response speed", "Controls frequency droop for kW sharing"],
    "exp": "AVR droop causes the terminal voltage to slightly decrease as reactive (kVAR) load increases. When two machines are in parallel, this ensures equal kVAR sharing. Without droop, one AVR 'wins' and supplies all reactive current - other machine runs at near unity PF or capacitive.",
    "cat": "AVR",
    "id": "T01A_014"
  },
  {
    "q": "Describe the control loop of an AVR in one sentence.",
    "a": "AVR senses output voltage, compares to setpoint, and adjusts field current via thyristors to maintain constant voltage",
    "opts": ["AVR measures current and adjusts frequency", "AVR senses output voltage, compares to setpoint, and adjusts field current via thyristors to maintain constant voltage", "AVR controls governor speed to regulate voltage", "AVR switches loads on/off to maintain stable voltage"],
    "exp": "It's a closed-loop feedback control: Sense (voltage transformer samples output) \u2192 Compare (error amplifier: actual vs. setpoint) \u2192 Actuate (thyristor/transistor varies excitation current) \u2192 Effect (field current changes \u2192 flux changes \u2192 EMF changes). Response time: typically 20-200ms.",
    "cat": "AVR",
    "id": "T01A_015"
  },
  {
    "q": "The SOLAS steady-state voltage regulation requirement is \u00b12.5%. What does this mean practically?",
    "a": "From zero load to full rated load, the terminal voltage must not deviate more than \u00b12.5% from the rated value",
    "opts": ["Voltage can vary by 2.5% per second during operation", "From zero load to full rated load, the terminal voltage must not deviate more than \u00b12.5% from the rated value", "2.5% variation is acceptable during paralleling only", "The AVR must respond within 2.5 seconds"],
    "exp": "For a 440V system: \u00b12.5% means voltage must stay within 429V\u2013451V under any load from 0 to 100%. This is tested during sea trials: connect full rated load, then disconnect - voltage must not go outside 429-451V at steady state. The transient (instant response) allowance is \u00b110%.",
    "cat": "AVR",
    "id": "T01A_016"
  },
  {
    "q": "What does the 'stability' trimmer on an AVR control?",
    "a": "Controls the damping of the AVR response - prevents hunting/oscillation of terminal voltage",
    "opts": ["Sets the output voltage setpoint", "Controls reactive load sharing", "Controls the damping of the AVR response - prevents hunting/oscillation of terminal voltage", "Adjusts the frequency trim via governor link"],
    "exp": "If stability trimmer is set too low \u2192 AVR is sluggish, slow response to load changes \u2192 voltage dips. Too high \u2192 AVR over-corrects \u2192 voltage oscillates (hunts). Correct setting: smooth response that reaches steady state without overshoot. Adjusted during commissioning while monitoring a scope or voltmeter.",
    "cat": "AVR",
    "id": "T01A_017"
  },
  {
    "q": "What happens to terminal voltage when two generators run in parallel and one AVR is set significantly higher than the other?",
    "a": "Higher-set AVR supplies all the reactive current (kVAR) - the other machine operates near unity PF or goes capacitive",
    "opts": ["Both machines maintain equal voltage and share kVAR equally", "Higher-set AVR supplies all the reactive current (kVAR) - the other machine operates near unity PF or goes capacitive", "Frequency difference causes one machine to trip on reverse power", "Both machines trip on overcurrent simultaneously"],
    "exp": "In parallel, both machines must have the same terminal voltage (they're connected to the same busbar). The machine with higher AVR setpoint 'pushes' more reactive current into the bus. The other machine absorbs it - effectively operating at leading PF. This causes circulating reactive current and overheating of the over-excited machine. AVR droop prevents this.",
    "cat": "AVR",
    "id": "T01A_018"
  },
  {
    "q": "Define 'AVR droop' and explain its purpose in parallel operation.",
    "a": "Droop = intentional voltage reduction as kVAR load increases; ensures stable reactive load sharing between parallel machines",
    "opts": ["Droop = voltage reduction on no-load for safety", "Droop = intentional voltage reduction as kVAR load increases; ensures stable reactive load sharing between parallel machines", "Droop = speed reduction when overloaded", "Droop = frequency compensation during load shedding"],
    "exp": "Without droop: two AVRs both trying to hold exact voltage \u2192 one machine 'wins' and takes all reactive current \u2192 unstable. With droop: as machine A takes more kVAR, its terminal voltage droops slightly \u2192 AVR backs off \u2192 load redistributes. Droop = (no-load V - full-load V) / rated V \u00d7 100%. Typical: 2-5%.",
    "cat": "AVR",
    "id": "T01A_019"
  },
  {
    "q": "Before performing an IR (megger) test, the ETO forgets to disconnect the AVR. What are the TWO consequences?",
    "a": "(1) Megger voltage damages AVR semiconductors; (2) AVR back-feeds current into winding giving false (high) IR reading",
    "opts": ["No consequences - modern AVRs are rated for megger voltage", "(1) Megger voltage damages AVR semiconductors; (2) AVR back-feeds current into winding giving false (high) IR reading", "(1) AVR blows its fuse; (2) Megger shows zero reading", "(1) Field winding burns out; (2) Stator winding gets double voltage"],
    "exp": "Consequence 1: 500-1000V DC from megger is far above AVR component ratings (thyristors, capacitors, transistors typically rated 400-600V with margins). Irreversible damage likely. Consequence 2: AVR senses an 'undervoltage' (machine not running) and tries to boost excitation - feeds current back through field winding into megger circuit \u2192 falsely elevated IR reading.",
    "cat": "AVR",
    "id": "T01A_020"
  },
  {
    "q": "What component in the AVR directly controls the field current magnitude?",
    "a": "Thyristors (SCRs) or power transistors - phase-angle fired or PWM controlled to vary DC output to exciter field",
    "opts": ["A variable transformer (variac)", "A mechanical rheostat", "Thyristors (SCRs) or power transistors - phase-angle fired or PWM controlled to vary DC output to exciter field", "A relay that switches fixed resistors"],
    "exp": "Modern AVRs use thyristors (SCRs) in a phase-controlled rectifier - by varying the firing angle, the average DC output to the exciter field is varied. Some use IGBT transistors with PWM control. Older AVRs used carbon pile regulators (mechanical). The firing angle/duty cycle is controlled by the error amplifier signal.",
    "cat": "AVR",
    "id": "T01A_021"
  },
  {
    "q": "The terminal voltage is set at 445V but the surveyor says it should be 440V. Which trimmer do you adjust and which way?",
    "a": "Reduce the 'Voltage Adjust' trimmer - this lowers the AVR's reference setpoint, reducing field current and output voltage",
    "opts": ["Increase the Droop trimmer", "Reduce the 'Voltage Adjust' trimmer - this lowers the AVR's reference setpoint, reducing field current and output voltage", "Adjust the governor speed trimmer downward", "Increase the Stability trimmer"],
    "exp": "Voltage Adjust trimmer sets the target voltage. Current output 445V > desired 440V \u2192 reduce voltage setpoint. Turn the trimmer down (usually counterclockwise) in small increments, monitor voltmeter. Adjust under representative load (typically 50-75% rated load) for best accuracy. Log the before/after reading.",
    "cat": "AVR",
    "id": "T01A_022"
  },
  {
    "q": "An AVR has 'under-excitation limiter' (UEL) protection. When does it operate?",
    "a": "When field current drops too low - prevents operation in capacitive (leading PF) region which can cause loss of synchronism",
    "opts": ["When terminal voltage drops below 85% - same as UV relay", "When field current drops too low - prevents operation in capacitive (leading PF) region which can cause loss of synchronism", "When load exceeds 100% rated - reduces field current", "When temperature exceeds Class F limit"],
    "exp": "Under-excitation (low field current) \u2192 generator absorbs reactive power \u2192 operates at leading PF \u2192 stability limit approached \u2192 risk of pulling out of synchronism. UEL prevents the AVR from reducing field current below a minimum safe value. Particularly important for large generators near steady-state stability limits. Common in ship's HV alternators.",
    "cat": "AVR",
    "id": "T01A_023"
  },
  {
    "q": "In a brushless alternator, the rotating rectifiers are mounted on:",
    "a": "The rotor shaft",
    "opts": ["Stator frame", "Rotor shaft", "Exciter stator", "Control panel"],
    "exp": "Rotating rectifiers (diodes) are on the rotor shaft, converting AC from exciter to DC for the main field winding - no brushes needed.",
    "cat": "BL",
    "id": "T01A_024"
  },
  {
    "q": "Why is a brushless alternator preferred in marine applications?",
    "a": "No brush/slip ring maintenance, no sparking, suitable for humid environments",
    "opts": ["Higher output voltage", "No maintenance at all", "No brush/slip ring maintenance, no sparking, suitable for humid environments", "Lower weight"],
    "exp": "No carbon brush dust, no sparking in hazardous areas, suitable for UMS (unattended machinery spaces).",
    "cat": "BL",
    "id": "T01A_025"
  },
  {
    "q": "An open-circuited rotating diode in a brushless alternator causes:",
    "a": "Reduced output voltage and increased ripple/vibration",
    "opts": ["Complete loss of excitation", "Reduced output voltage and increased ripple/vibration", "No effect - other diodes compensate", "Overcurrent trip"],
    "exp": "One diode failing open means only part of the AC cycle is rectified - unbalanced DC to field, causing voltage reduction and vibration.",
    "cat": "BL",
    "id": "T01A_026"
  },
  {
    "q": "A short-circuited rotating diode causes:",
    "a": "Heavy field current, high voltage output, possible AVR instability",
    "opts": ["No voltage output", "Reduced voltage", "Heavy field current, high voltage output, possible AVR instability", "Earth fault alarm"],
    "exp": "Shorted diode short-circuits part of field circuit - current circulates, causing overheating, high excitation, and hunting.",
    "cat": "BL",
    "id": "T01A_027"
  },
  {
    "q": "What is the purpose of the exciter in a brushless alternator?",
    "a": "Provides AC supply that is rectified to give DC field current for main alternator",
    "opts": ["Controls output frequency", "Provides AC supply that is rectified to give DC field current for main alternator", "Provides cooling", "Acts as governor"],
    "exp": "Small AC exciter (stator fixed, rotor rotates) \u2192 rotating diodes rectify \u2192 DC fed to main rotor field \u2192 main alternator produces 3-phase output.",
    "cat": "BL",
    "id": "T01A_028"
  },
  {
    "q": "What maintenance is typically done on a brushless alternator?",
    "a": "Check diodes, IR test windings, clean, check connections, check air gap, check bearings, test safeties",
    "opts": ["Only clean externally", "Check diodes, IR test windings, clean, check connections, check air gap, check bearings, test safeties", "Replace bearings only", "Only check AVR"],
    "exp": "Comprehensive PM: IR test all windings, check/test rotating diodes, check bearing condition (vibration, temperature, noise), clean air passages, verify AVR operation, test all protections.",
    "cat": "BL",
    "id": "T01A_029"
  },
  {
    "q": "What are rotating diodes tested with?",
    "a": "Multimeter on diode test function, or ohmmeter - check forward voltage drop and no reverse conduction",
    "opts": ["Megger 500V", "Multimeter on diode test function, or ohmmeter - check forward voltage drop and no reverse conduction", "High voltage tester", "Insulation tester"],
    "exp": "Rotating diodes: check with multimeter in diode mode. Forward: ~0.6V drop (silicon). Reverse: open circuit (OL). Short: 0 both ways. Open: OL both ways. Test with rotor stationary and diodes accessible.",
    "cat": "BL",
    "id": "T01A_030"
  },
  {
    "q": "What are the THREE machines mounted on the same shaft in a brushless alternator system?",
    "a": "PMG (Permanent Magnet Generator), Main Exciter, Main Alternator",
    "opts": ["AVR, Exciter, Main Alternator", "PMG (Permanent Magnet Generator), Main Exciter, Main Alternator", "Transformer, Rectifier, Generator", "Governor, Exciter, Alternator"],
    "exp": "All three rotate together on one shaft: (1) PMG - provides stable AC to feed AVR. (2) Main Exciter - stator is fed by AVR, rotor generates 3-phase AC. (3) Main Alternator - rotor field carries DC (from rotating rectifiers), stator gives 3-phase output.",
    "cat": "BL",
    "id": "T01A_031"
  },
  {
    "q": "What is the function of the PMG (Permanent Magnet Generator) in a brushless system?",
    "a": "Provides independent, stable AC power supply to the AVR",
    "opts": ["Directly excites the main alternator field", "Provides independent, stable AC power supply to the AVR", "Acts as backup generator during blackout", "Controls the speed of the prime mover"],
    "exp": "PMG uses permanent magnets, so its output is unaffected by main alternator voltage changes. It provides a clean, stable supply to the AVR. This means the AVR functions correctly even when the main alternator is in fault condition.",
    "cat": "BL",
    "id": "T01A_032"
  },
  {
    "q": "Why is the brushless alternator called 'brushless'?",
    "a": "No brushes or slip rings are needed to transfer current from stationary to rotating parts",
    "opts": ["It uses fewer windings than conventional alternators", "No brushes or slip rings are needed to transfer current from stationary to rotating parts", "The stator does not use carbon brush contacts", "It eliminates the need for a commutator"],
    "exp": "In a brushless design, the exciter field is on the stator (stationary), exciter armature is on the rotor. Rotating rectifiers on the shaft convert AC to DC without needing physical contact (no brushes/slip rings). DC goes directly to main field winding on the shaft.",
    "cat": "BL",
    "id": "T01A_033"
  },
  {
    "q": "What is the path of excitation current in a brushless alternator (correct sequence)?",
    "a": "PMG \u2192 AVR \u2192 Exciter field stator \u2192 Exciter rotor AC \u2192 Rotating diodes \u2192 Main field rotor \u2192 Main stator output",
    "opts": ["AVR \u2192 PMG \u2192 Rotating diodes \u2192 Main field", "Battery \u2192 Slip rings \u2192 Field winding \u2192 Output", "PMG \u2192 AVR \u2192 Exciter field stator \u2192 Exciter rotor AC \u2192 Rotating diodes \u2192 Main field rotor \u2192 Main stator output", "Governor \u2192 AVR \u2192 Stator \u2192 Rotor \u2192 Output"],
    "exp": "This is the complete brushless excitation chain. PMG generates AC \u2192 AVR rectifies and controls \u2192 DC fed to exciter stator field \u2192 exciter rotor generates 3-phase AC \u2192 rotating rectifier diodes convert to DC \u2192 DC field on main rotor \u2192 main stator cuts field \u2192 3-phase output.",
    "cat": "BL",
    "id": "T01A_034"
  },
  {
    "q": "Where are the rotating rectifier diodes physically located in a brushless alternator?",
    "a": "Mounted on the rotor shaft between the exciter armature and main field winding",
    "opts": ["Inside the AVR control panel", "On the stator frame near ventilation openings", "Mounted on the rotor shaft between the exciter armature and main field winding", "In a separate rectifier cabinet next to the alternator"],
    "exp": "Rotating rectifiers are a diode wheel mounted directly on the rotating shaft. They spin with the shaft, converting the exciter's 3-phase AC output to DC. Being on the shaft eliminates the need for slip rings - the DC stays within the rotating assembly.",
    "cat": "BL",
    "id": "T01A_035"
  },
  {
    "q": "What happens if ONE rotating rectifier diode goes OPEN CIRCUIT while the alternator is running?",
    "a": "Output voltage drops 15\u201320% with fluctuation; unbalanced excitation causes ripple",
    "opts": ["Complete loss of voltage - machine trips immediately", "Output voltage drops 15\u201320% with fluctuation; unbalanced excitation causes ripple", "No effect - remaining diodes compensate fully", "Frequency drops proportionally to voltage drop"],
    "exp": "With one open diode, one phase of the 3-phase exciter output is not rectified. The remaining diodes handle only partial DC. Result: DC ripple in field current \u2192 pulsating output voltage. Stroboscope check can detect discoloured/pitted diodes while running.",
    "cat": "BL",
    "id": "T01A_036"
  },
  {
    "q": "What happens if ONE rotating rectifier diode goes SHORT CIRCUIT while running?",
    "a": "AC component appears in field current causing severe voltage fluctuation and field overheating",
    "opts": ["Minor voltage fluctuation, self-corrects within minutes", "Generator shuts down automatically via thermal protection", "AC component appears in field current causing severe voltage fluctuation and field overheating", "Output becomes DC instead of AC"],
    "exp": "A shorted diode creates a reverse current path - AC flows through the short, superimposing on the DC field. This causes both severe output voltage fluctuation and dangerous heating in the field winding. Immediate action needed: shut down and inspect.",
    "cat": "BL",
    "id": "T01A_037"
  },
  {
    "q": "How do you detect a faulty rotating diode while the alternator is running?",
    "a": "Using a stroboscope - check for discoloured, pitted or cracked diodes; also check for unbalanced output voltage",
    "opts": ["Remove the diode cover and inspect with a torch", "Using a multimeter on the AC output terminals", "Using a stroboscope - check for discoloured, pitted or cracked diodes; also check for unbalanced output voltage", "Inject test voltage through the slip rings"],
    "exp": "A stroboscope freezes the apparent rotation of the diode wheel, allowing visual inspection while running. Faulty diodes show discolouration or pitting. Electrical symptoms: ripple on output voltage, unbalanced 3-phase voltage. Confirm by shutdown and diode test.",
    "cat": "BL",
    "id": "T01A_038"
  },
  {
    "q": "What is the advantage of a brushless alternator over a conventionally excited alternator for UMS ships?",
    "a": "No brushes means no carbon dust, no brush inspection needed, no sparking - suitable for unattended operation",
    "opts": ["Brushless alternators produce higher voltage", "No brushes means no carbon dust, no brush inspection needed, no sparking - suitable for unattended operation", "Brushless alternators always have higher efficiency", "They can operate on lower frequency for UMS operation"],
    "exp": "UMS (Unattended Machinery Space) ships need equipment that can run reliably without continuous monitoring. Brushless: no brush replacement, no slip ring pitting, no carbon tracking, no brush gear sparking (safer in gas-risk areas). Much lower maintenance requirement - ideal for UMS.",
    "cat": "BL",
    "id": "T01A_039"
  },
  {
    "q": "List the THREE machines on the shaft of a brushless alternator system in correct order from drive end.",
    "a": "PMG \u2192 Main Exciter \u2192 Main Alternator (all on same shaft, driven by prime mover)",
    "opts": ["Main Alternator \u2192 Exciter \u2192 PMG", "Governor \u2192 PMG \u2192 Main Alternator", "PMG \u2192 Main Exciter \u2192 Main Alternator (all on same shaft, driven by prime mover)", "Exciter \u2192 PMG \u2192 Main Alternator"],
    "exp": "Drive end (prime mover) \u2192 PMG (permanent magnet generator, small) \u2192 Main Exciter (stator is fed by AVR; rotor generates 3-phase AC) \u2192 Main Alternator (rotor carries DC field from rotating rectifiers; stator gives 3-phase output). All on one shaft.",
    "cat": "BL",
    "id": "T01A_040"
  },
  {
    "q": "What is the role of the exciter stator winding in a brushless alternator?",
    "a": "Carries DC field current from AVR - creates the magnetic field that the rotating exciter armature cuts",
    "opts": ["Carries the 3-phase AC output to the main switchboard", "Connects to the PMG to boost its output", "Carries DC field current from AVR - creates the magnetic field that the rotating exciter armature cuts", "Acts as the regulating winding for frequency control"],
    "exp": "The exciter is essentially a small DC-excited generator. Its stator (stationary) receives DC from the AVR. This creates a stationary magnetic field. The exciter rotor (rotating with shaft) cuts this field \u2192 generates 3-phase AC on the exciter rotor. This AC goes to rotating rectifiers on the shaft.",
    "cat": "BL",
    "id": "T01A_041"
  },
  {
    "q": "Why are rotating rectifier diodes used instead of slip rings in a brushless alternator?",
    "a": "Rotating diodes eliminate physical sliding contact - no brushes, no sparking, no maintenance, suitable for UMS",
    "opts": ["Diodes produce higher voltage than slip rings", "Rotating diodes eliminate physical sliding contact - no brushes, no sparking, no maintenance, suitable for UMS", "Slip rings cannot handle AC current", "Diodes regulate the field current automatically"],
    "exp": "The exciter rotor generates 3-phase AC. To get DC into the main field winding (also on the rotor), you need rectification. Mounting diodes on the shaft means they rotate with the rotor - converting AC to DC right there on the shaft, without any need for electrical contact between stationary and rotating parts.",
    "cat": "BL",
    "id": "T01A_042"
  },
  {
    "q": "What protection component is fitted across the rotating rectifier diode bank?",
    "a": "Zener diode suppressor - clamps transient overvoltages that could destroy the rectifier diodes",
    "opts": ["A fuse bank rated at 3\u00d7 diode current", "A varistor (MOV) for surge absorption", "Zener diode suppressor - clamps transient overvoltages that could destroy the rectifier diodes", "A thermistor to limit current during starting"],
    "exp": "Transient voltages occur in the field circuit during load changes or faults. Zener diodes across the diode bank clamp these spikes - they conduct when voltage exceeds their breakdown voltage, dissipating the energy. Without this protection, transients could instantly destroy the rectifier diodes.",
    "cat": "BL",
    "id": "T01A_043"
  },
  {
    "q": "During a stroboscope inspection of rotating diodes, what specifically indicates a failed (open circuit) diode?",
    "a": "Discolouration (burn marks), pitting on the diode body, or cracks on the diode casing",
    "opts": ["The diode appears to spin faster than the others", "Discolouration (burn marks), pitting on the diode body, or cracks on the diode casing", "All diodes glow red under the stroboscope", "The diode appears to be at a different angle than neighbours"],
    "exp": "A failed diode that has burnt shows heat discolouration - typically brown/black marks. Pitting indicates arcing. Cracks mean mechanical failure. The stroboscope freezes apparent rotation so these visual defects are visible. An open circuit diode also shows up as: unbalanced 3-phase output voltage + ripple on output.",
    "cat": "BL",
    "id": "T01A_044"
  },
  {
    "q": "A brushless alternator has 6 rotating diodes (3 positive, 3 negative). One negative diode goes open. What is the electrical effect?",
    "a": "One phase of exciter AC is not rectified \u2192 ripple in field current \u2192 pulsating terminal voltage",
    "opts": ["Complete loss of excitation - machine de-excites immediately", "Machine runs normally - remaining 5 diodes compensate", "One phase of exciter AC is not rectified \u2192 ripple in field current \u2192 pulsating terminal voltage", "Frequency drops by 1/6"],
    "exp": "The 3-phase bridge rectifier loses one leg. The remaining 5 diodes still rectify 2 of the 3 phases (partially). The unrectified phase component creates an AC ripple superimposed on the DC field. Result: 'hunting' or pulsating terminal voltage - typically 15-20% drop with visible fluctuation.",
    "cat": "BL",
    "id": "T01A_045"
  },
  {
    "q": "How would you confirm a suspected rotating diode failure WITHOUT stopping the alternator?",
    "a": "Use stroboscope to freeze rotor visually (inspect diodes); measure output voltage imbalance; check for AC ripple on field supply",
    "opts": ["Disconnect the PMG and see if voltage changes", "Use stroboscope to freeze rotor visually (inspect diodes); measure output voltage imbalance; check for AC ripple on field supply", "Open the terminal box and probe with voltmeter", "Increase load to 100% and measure current balance"],
    "exp": "Three diagnostic approaches without stopping: (1) Stroboscope - freeze rotor, visual diode inspection. (2) Voltmeter - check for unbalanced phase voltages or reduced output. (3) If accessible, measure AC ripple on AVR output (field supply side). Full confirmation requires stopping, dismantling the rotating assembly, and testing each diode with a multimeter.",
    "cat": "BL",
    "id": "T01A_046"
  },
  {
    "q": "What is the full excitation current path in a brushless alternator from start to finish?",
    "a": "PMG AC \u2192 AVR rectifier \u2192 DC to exciter stator coil \u2192 exciter rotor cuts stator field \u2192 3-phase AC in exciter rotor \u2192 rotating diodes \u2192 DC field in main rotor \u2192 main rotor cuts stator conductors \u2192 3-phase AC output",
    "opts": ["Battery \u2192 Field winding \u2192 Stator \u2192 Output", "PMG AC \u2192 AVR rectifier \u2192 DC to exciter stator coil \u2192 exciter rotor cuts stator field \u2192 3-phase AC in exciter rotor \u2192 rotating diodes \u2192 DC field in main rotor \u2192 main rotor cuts stator conductors \u2192 3-phase AC output", "Shore supply \u2192 Transformer \u2192 Field \u2192 Output", "AVR \u2192 Rotating diodes \u2192 PMG \u2192 Main stator \u2192 Output"],
    "exp": "This is the complete chain - memorise it for oral exams. Key points: PMG is the start (stable, independent). AVR controls the DC fed to the exciter. The exciter works 'inside out' (stator is DC field, rotor is armature). Rotating diodes do the AC\u2192DC conversion on the shaft without brushes. Final output from main stator.",
    "cat": "BL",
    "id": "T01A_047"
  },
  {
    "q": "What does 'droop' refer to in parallel generator operation?",
    "a": "Deliberate slight speed reduction with increasing load for stable load sharing",
    "opts": ["Voltage drop under fault", "Speed reduction at no load", "Deliberate slight speed reduction with increasing load for stable load sharing", "Frequency fluctuation"],
    "exp": "Droop characteristic allows governors to share load automatically. Without droop, two generators on bus would 'hunt' - fighting each other for load.",
    "cat": "WP",
    "id": "T01A_048"
  },
  {
    "q": "What is the typical insulation class of marine alternator windings?",
    "a": "Class F (155\u00b0C)",
    "opts": ["Class A (105\u00b0C)", "Class B (130\u00b0C)", "Class F (155\u00b0C)", "Class H (180\u00b0C)"],
    "exp": "Class F is standard for marine alternators - allows operation at higher temperatures common in engine rooms.",
    "cat": "WP",
    "id": "T01A_049"
  },
  {
    "q": "Two alternators in parallel - one has higher KW, other has lower KW. Likely cause?",
    "a": "Governor settings differ - one governor allows more fuel than the other",
    "opts": ["AVR of one is faulty", "Governor settings differ - one governor allows more fuel than the other", "Different KVA ratings", "Different number of poles"],
    "exp": "KW (active power) is shared by governor/speed control. Unequal KW = unequal governor droop settings. Adjust governor of the heavily loaded machine.",
    "cat": "WP",
    "id": "T01A_050"
  },
  {
    "q": "Two alternators in parallel - one has higher KVAR, other lower. Likely cause?",
    "a": "AVR settings differ - one has higher excitation voltage",
    "opts": ["Governor fault", "AVR settings differ - one has higher excitation voltage", "Different frequency", "Earth fault"],
    "exp": "KVAR (reactive power) is shared by excitation/AVR. Unequal KVAR = unequal excitation. Adjust AVR of the over-excited machine.",
    "cat": "WP",
    "id": "T01A_051"
  },
  {
    "q": "What is the significance of the KVA rating of a generator?",
    "a": "Maximum apparent power it can deliver continuously without overheating",
    "opts": ["Maximum KW it can produce", "Maximum apparent power it can deliver continuously without overheating", "Maximum current only", "Maximum voltage output"],
    "exp": "KVA = KW/PF. At unity PF, KVA = KW. At low PF, same KVA delivers less KW. Stator current (hence heating) depends on KVA, not KW.",
    "cat": "WP",
    "id": "T01A_052"
  },
  {
    "q": "What is the purpose of the damper winding (amortisseur) in a synchronous machine?",
    "a": "Dampen oscillations during load changes and assist starting",
    "opts": ["Increase output voltage", "Dampen oscillations during load changes and assist starting", "Provide excitation", "Cool the rotor"],
    "exp": "Short-circuited bars in rotor face - induced currents oppose oscillations (hunting). Also allows synchronous motor to start as induction motor.",
    "cat": "WP",
    "id": "T01A_053"
  },
  {
    "q": "What voltage and frequency is standard for ship's main power supply?",
    "a": "440V, 60Hz (common) or 440V/380V, 50Hz/60Hz depending on flag",
    "opts": ["220V, 50Hz", "440V, 60Hz (common) or 440V/380V, 50Hz/60Hz depending on flag", "11kV, 50Hz", "110V, 60Hz"],
    "exp": "Most merchant ships: 440V, 60Hz. Some European vessels: 380V, 50Hz. Emergency lighting: often 220V single phase. High power ships: 6.6kV or 11kV.",
    "cat": "WP",
    "id": "T01A_054"
  },
  {
    "q": "What is the purpose of a load-dependent start (LDS) in an automatic power management system?",
    "a": "Automatically starts standby generator when connected load exceeds a set percentage of running capacity",
    "opts": ["Starts generator at fixed time intervals", "Automatically starts standby generator when connected load exceeds a set percentage of running capacity", "Trips generator on overload", "Adjusts AVR automatically"],
    "exp": "LDS prevents overload by bringing on second generator before first becomes overloaded. Typical setting: 70\u201380% of rated KW.",
    "cat": "WP",
    "id": "T01A_055"
  },
  {
    "q": "What is a synchronous motor?",
    "a": "AC motor that runs exactly at synchronous speed (NS = 120f/P), with no slip",
    "opts": ["Motor that synchronises with AVR", "AC motor that runs exactly at synchronous speed (NS = 120f/P), with no slip", "Motor running at variable speed", "DC motor with brushes"],
    "exp": "NS = 120f/P. No slip. Used for constant speed drives and as synchronous capacitor for PF correction.",
    "cat": "WP",
    "id": "T01A_056"
  },
  {
    "q": "What is the Ward Leonard system used for?",
    "a": "Variable speed DC drive for applications like cranes, winches, and steering gear",
    "opts": ["AC voltage control", "Variable speed DC drive for applications like cranes, winches, and steering gear", "Generator excitation control", "Motor protection"],
    "exp": "Generator-motor set: AC motor drives DC generator, DC generator output feeds DC motor. Smooth, wide-range speed control by varying field excitation.",
    "cat": "WP",
    "id": "T01A_057"
  },
  {
    "q": "Nominal speed of a 4-pole alternator on a 60 Hz system is:",
    "a": "1800 RPM",
    "opts": ["3600 RPM", "1800 RPM", "1500 RPM", "1200 RPM"],
    "exp": "NS = 120f/P = 120\u00d760/4 = 1800 RPM. For 50 Hz with 4 poles: NS = 1500 RPM.",
    "cat": "WP",
    "id": "T01A_058"
  },
  {
    "q": "What action if voltage not building up after starting alternator?",
    "a": "Check residual magnetism, test AVR, check diodes, check exciter winding, check field connections",
    "opts": ["Increase speed only", "Check residual magnetism, test AVR, check diodes, check exciter winding, check field connections", "Replace the alternator", "Check only the ACB"],
    "exp": "Systematic approach: check battery exciter supply \u2192 flash field if needed \u2192 test AVR output \u2192 check rotating diodes \u2192 check exciter winding IR \u2192 check main field connections.",
    "cat": "WP",
    "id": "T01A_059"
  },
  {
    "q": "What is meant by 'cold ironing' or 'shore power connection'?",
    "a": "Supplying ship's electrical power from shore supply while in port to reduce emissions",
    "opts": ["Connecting metal earthing strips", "Supplying ship's electrical power from shore supply while in port to reduce emissions", "Testing cold machinery", "Shore-based maintenance"],
    "exp": "Shore power (cold ironing) allows engines to be shut down in port. Requires careful synchronisation or transfer switching. May need frequency/voltage conversion if shore \u2260 ship standard.",
    "cat": "WP",
    "id": "T01A_060"
  },
  {
    "q": "An alternator is rated 500 kVA at 0.8 PF. What is its kW rating?",
    "a": "400 kW",
    "opts": ["500 kW", "400 kW", "625 kW", "300 kW"],
    "exp": "kW = kVA \u00d7 PF = 500 \u00d7 0.8 = 400 kW.",
    "cat": "WP",
    "id": "T01A_061"
  },
  {
    "q": "What is the effect of increasing excitation on an alternator running in parallel?",
    "a": "Increases reactive power (kVAR) output and raises PF of that machine",
    "opts": ["Increases kW output", "Increases reactive power (kVAR) output and raises PF of that machine", "Increases frequency", "Reduces voltage"],
    "exp": "In parallel operation, excitation controls reactive power sharing. More excitation = more kVAR output = more lagging current supplied to load.",
    "cat": "WP",
    "id": "T01A_062"
  },
  {
    "q": "What is the significance of the number of poles in an alternator?",
    "a": "Determines synchronous speed: NS = 120f/P",
    "opts": ["Determines voltage", "Determines synchronous speed: NS = 120f/P", "Determines kVA rating", "Determines insulation class"],
    "exp": "More poles = lower synchronous speed. A slow diesel engine (typically 750 RPM) needs 8 poles for 50 Hz output.",
    "cat": "WP",
    "id": "T01A_063"
  },
  {
    "q": "What is meant by 'voltage regulation' of an alternator?",
    "a": "Percentage change in terminal voltage from no-load to full load: (VNL\u2212VFL)/VFL \u00d7 100",
    "opts": ["AVR control range", "Percentage change in terminal voltage from no-load to full load: (VNL\u2212VFL)/VFL \u00d7 100", "Voltage drop across winding", "Output voltage stability"],
    "exp": "Good regulation = small percentage. Marine alternators: typically 3\u20135% regulation with AVR active, could be 20\u201340% without AVR.",
    "cat": "WP",
    "id": "T01A_064"
  },
  {
    "q": "What is shaft generator (shaft driven generator)?",
    "a": "Generator driven by main propulsion shaft, providing power at variable frequency corrected by frequency converter",
    "opts": ["Generator on shaft of motor", "Generator driven by main propulsion shaft, providing power at variable frequency corrected by frequency converter", "Emergency generator mounted on propeller shaft", "Auxiliary generator only"],
    "exp": "Power take-off (PTO) from main engine shaft. Uses frequency converter (cycloconverter or rectifier-inverter) to maintain constant 50/60 Hz output despite varying shaft speed.",
    "cat": "WP",
    "id": "T01A_065"
  },
  {
    "q": "What is Automatic Mains Failure (AMF)?",
    "a": "System that automatically starts and connects standby generator when main supply fails",
    "opts": ["Manual start system", "System that automatically starts and connects standby generator when main supply fails", "AVR backup system", "Load monitoring system"],
    "exp": "AMF panel monitors bus voltage/frequency. On failure, starts standby gen, waits for it to reach stable output, closes breaker. Typical time: <10 seconds for start + stabilise.",
    "cat": "WP",
    "id": "T01A_066"
  },
  {
    "q": "Two generators in parallel - what happens if one governor fails and engine races?",
    "a": "Overcurrent, reverse power, frequency relay may trip it; mechanical overspeed trip as last resort",
    "opts": ["Other generator compensates", "Overcurrent, reverse power, frequency relay may trip it; mechanical overspeed trip as last resort", "AVR controls this", "Nothing - the load sharing is stable"],
    "exp": "Racing engine causes that generator to take all load \u2192 overcurrent. If it overspeeds, overspeed trip fires. The 'healthy' generator may have breaker open by reverse current from the racing machine.",
    "cat": "WP",
    "id": "T01A_067"
  },
  {
    "q": "What is the purpose of current transformers (CTs) on the alternator outputs?",
    "a": "Step down high currents to safe levels for metering and protection relays",
    "opts": ["Step up voltage for measurement", "Step down high currents to safe levels for metering and protection relays", "Provide earth fault protection directly", "Measure insulation resistance"],
    "exp": "CTs: typically 5A secondary for standard meters and relays. Never open-circuit a CT secondary when primary is energised - dangerous overvoltage develops.",
    "cat": "WP",
    "id": "T01A_068"
  },
  {
    "q": "Which protection trips immediately on large overcurrent (instantaneous)?",
    "a": "Short circuit/overcurrent instantaneous element of ACB",
    "opts": ["Reverse power relay", "Short circuit/overcurrent instantaneous element of ACB", "Undervoltage relay", "Earth fault relay"],
    "exp": "Instantaneous overcurrent (typically 8\u201310\u00d7 rated current) operates the ACB trip without intentional time delay - for bus bar faults. IDMT overcurrent has time delay for grading.",
    "cat": "WP",
    "id": "T01A_069"
  },
  {
    "q": "What is the main advantage of static excitation over rotating exciter?",
    "a": "Faster response time for AVR control and no rotating exciter maintenance",
    "opts": ["Lower cost", "Faster response time for AVR control and no rotating exciter maintenance", "Better in humid conditions", "Higher output voltage"],
    "exp": "Static exciter (thyristor-controlled) has millisecond response vs seconds for rotating exciter - better for rapid load changes and transient voltage control.",
    "cat": "WP",
    "id": "T01A_070"
  },
  {
    "q": "How do you calculate synchronous speed?",
    "a": "NS = 120 \u00d7 f / P (RPM), where f=frequency in Hz, P=number of poles",
    "opts": ["NS = f \u00d7 P", "NS = 120 \u00d7 f / P (RPM), where f=frequency in Hz, P=number of poles", "NS = P \u00d7 f / 60", "NS = 60 \u00d7 f / P"],
    "exp": "For 4-pole, 50Hz: NS = 120\u00d750/4 = 1500 RPM. For 6-pole, 60Hz: NS = 120\u00d760/6 = 1200 RPM.",
    "cat": "WP",
    "id": "T01A_071"
  },
  {
    "q": "What type of protection prevents circulating currents between two paralleled generators with slight voltage difference?",
    "a": "Reactive droop setting in AVR limits circulating reactive current",
    "opts": ["Earth fault relay", "Reactive droop setting in AVR limits circulating reactive current", "Overcurrent relay", "Reverse power relay"],
    "exp": "Small voltage difference causes reactive circulating current. AVR droop compensation limits this. Differential protection (not common on marine generators) would detect internal faults.",
    "cat": "WP",
    "id": "T01A_072"
  },
  {
    "q": "How do you safely remove a generator from parallel operation?",
    "a": "Transfer load to other generator(s), reduce kW to minimum, open breaker, shut down prime mover",
    "opts": ["Open breaker immediately", "Transfer load to other generator(s), reduce kW to minimum, open breaker, shut down prime mover", "Stop engine first", "Trip overcurrent relay"],
    "exp": "Never open breaker under heavy load - causes voltage spike and potential damage to loads. Always transfer load first, reduce kW to near zero (reverse power protection will trip if you go negative).",
    "cat": "WP",
    "id": "T01A_073"
  },
  {
    "q": "What is 'cold spare' vs 'hot spare' for standby generator?",
    "a": "Cold: off and cold; Hot: running and warm, ready to take load faster",
    "opts": ["Both mean the same", "Cold: off and cold; Hot: running and warm, ready to take load faster", "Cold: on bus at low power; Hot: on bus at full power", "Only cold spare used in marine practice"],
    "exp": "Hot standby: engine running, generator on bus at very low load or just spinning in sync - instant load pickup. Cold standby: stopped, needs start time. AMF bridges the gap for cold standby.",
    "cat": "WP",
    "id": "T01A_074"
  },
  {
    "q": "What is the purpose of the power management system (PMS)?",
    "a": "Automatically manages generator start/stop, load sharing, fault response and load shedding",
    "opts": ["Only monitors power consumption", "Automatically manages generator start/stop, load sharing, fault response and load shedding", "Replaces the AVR", "Controls shore power only"],
    "exp": "PMS monitors total load, starts generators before overload, sheds non-essential loads on fault, manages parallel operation - reduces need for manual intervention in UMS operations.",
    "cat": "WP",
    "id": "T01A_075"
  },
  {
    "q": "What is the construction difference between salient pole and cylindrical rotor alternator?",
    "a": "Salient: protruding poles (low speed, multi-pole), Cylindrical: smooth rotor (high speed, 2-4 poles)",
    "opts": ["Both are the same", "Salient: protruding poles (low speed, multi-pole), Cylindrical: smooth rotor (high speed, 2-4 poles)", "Salient is for AC, cylindrical for DC", "Salient used for HV, cylindrical for LV"],
    "exp": "Marine diesel-driven: salient pole (slow speed, 6-12 poles). Steam turbine driven: cylindrical (high speed, 2-4 poles). Both are synchronous machines.",
    "cat": "WP",
    "id": "T01A_076"
  },
  {
    "q": "Alternator maintenance schedule - what is checked at 250 running hours?",
    "a": "Check connections, clean air filters, check bearing temperatures, record insulation values",
    "opts": ["Replace all bearings", "Check connections, clean air filters, check bearing temperatures, record insulation values", "Full overhaul", "Check only the ACB"],
    "exp": "Typical 250-hour PM: visual inspection, clean air passages, check and tighten connections, take IR reading, check bearing temperature/vibration trend, check cooler condition.",
    "cat": "WP",
    "id": "T01A_077"
  },
  {
    "q": "Before synchronising a generator, which conditions must be met?",
    "a": "Voltage, frequency, phase sequence and phase angle must match",
    "opts": ["Only voltage and frequency", "Voltage and phase sequence only", "Voltage, frequency, phase sequence and phase angle must match", "Only phase sequence"],
    "exp": "All four conditions: same voltage magnitude, same frequency, same phase sequence, and same phase angle (confirmed by synchroscope at 12 o'clock position moving slowly clockwise).",
    "cat": "SY",
    "id": "T01A_078"
  },
  {
    "q": "What happens if a generator is closed onto busbar with wrong phase sequence?",
    "a": "Violent mechanical shock, possible winding damage, catastrophic failure",
    "opts": ["Slight voltage dip only", "Gentle synchronisation", "Violent mechanical shock, possible winding damage, catastrophic failure", "Automatic protection trips instantly with no damage"],
    "exp": "Phase sequence reversal causes the machine to act as a brake against itself - enormous current surge and mechanical stress.",
    "cat": "SY",
    "id": "T01A_079"
  },
  {
    "q": "What is the function of a synchroscope?",
    "a": "Indicates phase difference and relative speed between incoming and running generator",
    "opts": ["Measures power factor", "Indicates phase difference and relative speed between incoming and running generator", "Measures insulation resistance", "Controls AVR"],
    "exp": "Pointer rotating clockwise = incoming is fast (slightly). Pointer at 12 o'clock = in phase. Close breaker just before 12 o'clock while rotating slowly clockwise.",
    "cat": "SY",
    "id": "T01A_080"
  },
  {
    "q": "What checks must be done before closing an ACB for synchronisation?",
    "a": "Voltage match, frequency match, synchroscope at 12 slowly clockwise, phase sequence verified",
    "opts": ["Only voltage check", "Voltage match, frequency match, synchroscope at 12 slowly clockwise, phase sequence verified", "Only frequency check", "Only phase sequence check"],
    "exp": "All four synchronising conditions must be met. Phase sequence checked once at installation - not every time. Voltage, freq and phase angle checked every sync.",
    "cat": "SY",
    "id": "T01A_081"
  },
  {
    "q": "What is a 'dead bus' synchronisation?",
    "a": "Closing generator onto a dead (de-energised) busbar - no synchronisation needed",
    "opts": ["Synchronising two running generators", "Closing generator onto a dead (de-energised) busbar - no synchronisation needed", "Backup synchronisation method", "Synchronising at zero speed"],
    "exp": "Dead bus: just check that busbar is truly dead, confirm polarity and phase sequence, then close breaker. No synchroscope needed since there's nothing to synchronise to.",
    "cat": "SY",
    "id": "T01A_082"
  },
  {
    "q": "What does a synchroscope indicate?",
    "a": "Speed difference and phase angle difference between incoming generator and the running busbar",
    "opts": ["Only the voltage difference between two generators", "The total load on the busbar", "Speed difference and phase angle difference between incoming generator and the running busbar", "The power factor of the incoming generator"],
    "exp": "Synchroscope is a phase-difference measuring instrument. It shows: (1) CW rotation = incoming machine too fast. (2) CCW rotation = too slow. (3) Pointer position = phase angle between incoming and busbar. Close ACB when pointer at 12 o'clock approaching slowly CW.",
    "cat": "SY",
    "id": "T01A_083"
  },
  {
    "q": "Describe the construction of a synchroscope.",
    "a": "Small induction motor: stator connected to busbar, rotor connected to incoming generator, pointer mounted on rotor shaft",
    "opts": ["An electronic digital phase meter", "A galvanometer measuring voltage difference", "Small induction motor: stator connected to busbar, rotor connected to incoming generator, pointer mounted on rotor shaft", "A current transformer connected across two generators"],
    "exp": "Synchroscope stator creates rotating magnetic field from busbar supply. Incoming generator supply feeds the rotor. Relative speed/phase difference makes rotor (and pointer) spin. At synchronism, rotor field and stator field lock \u2192 pointer stops at 12 o'clock.",
    "cat": "SY",
    "id": "T01A_084"
  },
  {
    "q": "When should the ACB be closed during synchronisation using a synchroscope?",
    "a": "When pointer is at 12 o'clock (in phase) and approaching from slightly before 12 (CW - just fast)",
    "opts": ["When pointer is at 6 o'clock for safety margin", "When pointer stops moving completely", "When pointer is at 12 o'clock (in phase) and approaching from slightly before 12 (CW - just fast)", "When pointer is at 3 o'clock position"],
    "exp": "Close ACB just BEFORE the pointer reaches 12, while it moves slowly CW. This ensures the incoming generator takes load immediately (rather than motoring). If closed exactly at 12 but slightly slow (CCW), the machine will briefly motor before taking load.",
    "cat": "SY",
    "id": "T01A_085"
  },
  {
    "q": "What happens if the ACB is closed when the synchroscope pointer is at 6 o'clock (180\u00b0 out of phase)?",
    "a": "CATASTROPHIC - massive circulating current, severe mechanical shock to coupling, possible alternator winding burnout",
    "opts": ["The generator safely comes up to speed on the busbar", "A minor overcurrent trip occurs", "CATASTROPHIC - massive circulating current, severe mechanical shock to coupling, possible alternator winding burnout", "The reverse power relay trips the circuit safely"],
    "exp": "180\u00b0 out of phase means two generators are directly opposing each other. The effective voltage causing circulating current = 2 \u00d7 Vline \u2248 880V across internal impedances. Current is extremely high - enough to instantly burn windings and cause severe mechanical shock to shafts and couplings.",
    "cat": "SY",
    "id": "T01A_086"
  },
  {
    "q": "What happens if the incoming generator is running FASTER than the busbar (synchroscope rotating CW)?",
    "a": "On closing ACB, incoming generator takes a heavy sudden load - high current surge, may trip on overcurrent",
    "opts": ["Generator immediately synchronises perfectly", "On closing ACB, incoming generator takes a heavy sudden load - high current surge, may trip on overcurrent", "Reverse power relay trips the incoming machine", "Frequency of the busbar increases to match"],
    "exp": "Too fast = incoming is ahead in phase. When ACB closes, the incoming generator tries to 'push' current into the busbar. It immediately takes a heavy load surge. If too fast, the surge current may trip OCR. This is why speed should be just slightly fast - not excessively so.",
    "cat": "SY",
    "id": "T01A_087"
  },
  {
    "q": "What happens if the incoming generator is running SLOWER than the busbar (synchroscope rotating CCW)?",
    "a": "On closing ACB, the busbar motors the incoming generator - reverse power relay trips it",
    "opts": ["Nothing - generator continues at lower speed", "The governor automatically speeds up", "On closing ACB, the busbar motors the incoming generator - reverse power relay trips it", "The busbar frequency drops to match"],
    "exp": "Too slow = incoming is behind in phase. When ACB closes, the running generator (busbar side) back-feeds power into the incoming generator, which runs as a motor. Reverse power relay detects this backward power flow and trips the ACB.",
    "cat": "SY",
    "id": "T01A_088"
  },
  {
    "q": "The synchroscope is faulty. How will you parallel the alternator?",
    "a": "Dark lamp method: connect 3 lamps between corresponding phases; close ACB when ALL THREE lamps are simultaneously dark",
    "opts": ["Estimate by ear - match engine speed to busbar frequency", "Use voltmeter across ACB contacts; close when voltage difference is minimum", "Dark lamp method: connect 3 lamps between corresponding phases; close ACB when ALL THREE lamps are simultaneously dark", "Wait for superintendent to arrive with portable synchroscope"],
    "exp": "Dark lamp: lamps glow when phases are out of sync, dim to darkness when in phase. Close when ALL three dark simultaneously. Alternative: Bright lamp (lamps connected in sequence) - close when all three equally bright. Dark lamp is more common in practice.",
    "cat": "SY",
    "id": "T01A_089"
  },
  {
    "q": "What is the phase sequence check done BEFORE paralleling two generators?",
    "a": "Verify both generators have the same phase rotation sequence (R-Y-B) using a phase sequence meter",
    "opts": ["Check frequency only - phase sequence doesn't matter for paralleling", "Verify both generators have the same phase rotation sequence (R-Y-B) using a phase sequence meter", "Measure the voltage at all three phases", "Check the insulation resistance of both machines"],
    "exp": "Phase sequence MUST be identical. If wrong phase sequence is used, even when synchroscope shows 12 o'clock, there's actually a 120\u00b0 voltage difference between phases - causes large circulating current when ACB is closed. Always verify phase sequence on new or rewound generators.",
    "cat": "SY",
    "id": "T01A_090"
  },
  {
    "q": "State the FOUR conditions that must be met before closing the ACB to parallel two generators.",
    "a": "(1) Same voltage, (2) Same frequency, (3) Same phase sequence, (4) Phase angle difference = 0\u00b0 (in phase)",
    "opts": ["(1) Same kVA rating, (2) Same voltage, (3) Same brand, (4) Same fuel type", "(1) Same voltage, (2) Same frequency, (3) Same phase sequence, (4) Phase angle difference = 0\u00b0 (in phase)", "(1) Same voltage, (2) Same frequency, (3) Different phase to cancel", "(1) Same current, (2) Same voltage, (3) Same fuel consumption"],
    "exp": "All four must be satisfied simultaneously: (1) Voltage: equal magnitudes, typically within \u00b12%. (2) Frequency: equal Hz - synchroscope pointer stopped. (3) Phase sequence: R-Y-B must match (checked once at commissioning). (4) Phase angle: 0\u00b0 - synchroscope pointer at 12 o'clock. Miss any one \u2192 current surge on ACB closing.",
    "cat": "SY",
    "id": "T01A_091"
  },
  {
    "q": "The synchroscope pointer rotates ANTICLOCKWISE (CCW). What does this mean and what action do you take?",
    "a": "Incoming generator is SLOWER than busbar - increase governor setting to speed it up",
    "opts": ["Incoming generator is faster - reduce governor speed", "Incoming generator is SLOWER than busbar - increase governor setting to speed it up", "Phase sequence is wrong - swap two phases", "Voltage is too low - increase AVR setting"],
    "exp": "CCW rotation = incoming lags busbar = incoming machine is slow. Action: increase governor (fuel) on incoming machine to raise speed \u2192 pointer slows then stops \u2192 accelerate to just barely CW \u2192 close ACB when pointer at 12 o'clock moving slowly CW. Never close while pointer is moving CCW - machine will motor.",
    "cat": "SY",
    "id": "T01A_092"
  },
  {
    "q": "Why is the ACB closed when the synchroscope pointer is 'just past 11 o'clock moving slowly CW' rather than exactly at 12?",
    "a": "ACB closing takes ~80-100ms - closing just before 12 o'clock accounts for this delay so actual closing occurs at or near 12",
    "opts": ["It doesn't matter - close at any position", "ACB closing takes ~80-100ms - closing just before 12 o'clock accounts for this delay so actual closing occurs at or near 12", "The 11 o'clock position is in-phase for 50 Hz systems", "The synchroscope is 30 seconds behind actual phase"],
    "exp": "Mechanical ACBs have a closing time of 80-150ms. If you wait until exactly 12 o'clock and then press close, the breaker physically closes 80-150ms later - by which time the phase angle has advanced slightly. Anticipating this by closing at ~11 o'clock (for slow-moving pointer) means the breaker contacts meet very close to true in-phase.",
    "cat": "SY",
    "id": "T01A_093"
  },
  {
    "q": "What is the 'dark lamp' method of synchronisation?",
    "a": "Three lamps connected between corresponding phases of incoming and busbar - lamps are dark when in phase, close ACB when ALL three are simultaneously dark",
    "opts": ["Connect one lamp across the ACB - close when it dims", "Three lamps connected between corresponding phases of incoming and busbar - lamps are dark when in phase, close ACB when ALL three are simultaneously dark", "Use flashlight to illuminate the pointer - close at 12 o'clock", "Three lamps connected in star - close when all equally bright"],
    "exp": "Each lamp sees the voltage difference between corresponding phases. When in phase: V_diff = 0 \u2192 lamps dark. When out of phase: V_diff = 2V \u2192 lamps bright. They cycle bright-dim-dark at the difference frequency. Close when ALL THREE dark simultaneously - this confirms phase angle AND frequency match. One dark lamp alone is not sufficient.",
    "cat": "SY",
    "id": "T01A_094"
  },
  {
    "q": "What happens to the 'bright lamp' synchronisation method - when should the ACB be closed?",
    "a": "Close when all three lamps are EQUALLY BRIGHT",
    "opts": ["Close when all three lamps are dark", "Close when all three lamps are EQUALLY BRIGHT", "Close when two are bright and one is dark", "Close when lamps stop flickering"],
    "exp": "Bright lamp: lamps connected in cross-phase sequence (not corresponding phases). At synchronism, each lamp sees 1/3 of line voltage difference - all equal brightness. Out of sync: one bright, one dim, one dark - rotating pattern. Close at equal brightness. Dark lamp is more common - brighter/clearer signal to operator.",
    "cat": "SY",
    "id": "T01A_095"
  },
  {
    "q": "The synchroscope is showing 12 o'clock but rotating VERY FAST CW. What should you do?",
    "a": "DO NOT close ACB - reduce governor speed until pointer barely moves CW before closing",
    "opts": ["Close ACB immediately - it's at 12 o'clock position", "DO NOT close ACB - reduce governor speed until pointer barely moves CW before closing", "Increase AVR voltage to match busbar", "Close ACB and let reverse power relay trip it if wrong"],
    "exp": "Fast rotation means large speed/frequency difference - even at 12 o'clock, the phase angle is changing rapidly. By the time ACB closes (80-100ms), phase angle has already shifted significantly. Result: large current surge, possible overcurrent trip. Speed should be adjusted so pointer rotates at <1 RPM - approaching 12 very slowly - before closing.",
    "cat": "SY",
    "id": "T01A_096"
  },
  {
    "q": "How do you determine the correct PHASE SEQUENCE of a new alternator before paralleling?",
    "a": "Use a phase sequence meter (Ferraris disc type or electronic) - verify R-Y-B rotation matches existing busbar",
    "opts": ["Check the nameplate - phase sequence is always R-Y-B", "Use a phase sequence meter (Ferraris disc type or electronic) - verify R-Y-B rotation matches existing busbar", "Measure voltage between phases - if equal, sequence is correct", "Connect the synchroscope - it will indicate wrong sequence"],
    "exp": "Phase sequence must be physically checked for any new or rewound machine. A Ferraris disc (small induction motor with disc) rotates CW for R-Y-B and CCW for R-B-Y. Electronic meters have LED indicators. Synchroscope will NOT indicate wrong phase sequence - it just shows phase angle. Wrong sequence gives large currents on ACB closing even if synchroscope shows 12 o'clock.",
    "cat": "SY",
    "id": "T01A_097"
  },
  {
    "q": "After paralleling, the incoming generator immediately takes a heavy surge of current and the OCR nearly trips. What was done wrong?",
    "a": "ACB was closed with too large a speed/phase difference - incoming machine was too fast or at wrong phase angle",
    "opts": ["AVR was not set correctly before paralleling", "ACB was closed with too large a speed/phase difference - incoming machine was too fast or at wrong phase angle", "Load was too high on the busbar for paralleling", "Governor was in isochronous mode - should be droop mode"],
    "exp": "Closing ACB with significant phase or speed difference causes a large instantaneous voltage difference between the machines \u2192 large equalising current \u2192 surge. For 'slightly too fast': heavy load surge on incoming machine. For 'large phase angle': both machines see large differential voltage \u2192 can be hundreds of amps. Solution: ensure pointer is barely moving CW at 12 o'clock before closing.",
    "cat": "SY",
    "id": "T01A_098"
  },
  {
    "q": "Air gap in a marine alternator is typically:",
    "a": "2\u20134 mm",
    "opts": ["0.1\u20130.5 mm", "2\u20134 mm", "10\u201315 mm", "50 mm"],
    "exp": "Typical air gap is 2\u20134 mm. Uneven air gap causes vibration, noise, unbalanced magnetic pull and affects output waveform.",
    "cat": "AG",
    "id": "T01A_099"
  },
  {
    "q": "How is the air gap of an alternator measured?",
    "a": "Using feeler gauges at multiple points around the circumference",
    "opts": ["Using a micrometer", "Using feeler gauges at multiple points around the circumference", "Using a dial gauge", "Estimated by visual inspection"],
    "exp": "Feeler gauges inserted between rotor and stator at 4\u20138 positions. Values should be within \u00b110% of each other.",
    "cat": "AG",
    "id": "T01A_100"
  },
  {
    "q": "How is the air gap of an alternator adjusted?",
    "a": "By shimming or adjusting bearing pedestals/end shields - requires major dismantling",
    "opts": ["By adjusting AVR", "By shimming or adjusting bearing pedestals/end shields - requires major dismantling", "By adding more stator copper", "Not adjustable on marine alternators"],
    "exp": "Air gap adjustment requires opening up the machine, removing rotor, shimming bearing housings. This is class/manufacturer-supervised work, typically done in drydock.",
    "cat": "AG",
    "id": "T01A_101"
  },
  {
    "q": "What is the 'air gap' in an alternator?",
    "a": "The clearance between the rotor pole face and the inner surface of the stator bore",
    "opts": ["The space between stator teeth for ventilation", "The clearance between the rotor pole face and the inner surface of the stator bore", "The gap in the rectifier circuit for voltage regulation", "The distance between two phase windings in the stator"],
    "exp": "The air gap is critical: too small \u2192 rotor rubs on stator (mechanical damage). Too large \u2192 increased reluctance \u2192 less efficient, lower output for same excitation. Uneven air gap \u2192 unbalanced magnetic pull \u2192 vibration and bearing wear.",
    "cat": "AG",
    "id": "T01A_102"
  },
  {
    "q": "What happens if the air gap is UNEVEN around the circumference?",
    "a": "Unbalanced magnetic pull causes rotor vibration, bearing wear, and in severe cases rotor-stator contact",
    "opts": ["Nothing - air gap unevenness is normal and acceptable", "Voltage output becomes unbalanced between phases", "Unbalanced magnetic pull causes rotor vibration, bearing wear, and in severe cases rotor-stator contact", "Only affects power factor, no mechanical effects"],
    "exp": "Uneven air gap means the magnetic field is stronger where the gap is smaller. This creates a net radial force pulling the rotor towards the smaller gap side (UMP - Unbalanced Magnetic Pull). This is self-aggravating - as rotor moves closer, force increases. Can lead to bearing failure or rotor/stator contact.",
    "cat": "AG",
    "id": "T01A_103"
  },
  {
    "q": "What is the typical specification for air gap variation in a marine alternator?",
    "a": "Air gap should be uniform within \u00b110% of the mean value around the circumference",
    "opts": ["Air gap must be exactly equal all around - 0% variation allowed", "Air gap should be uniform within \u00b110% of the mean value around the circumference", "Up to \u00b125% variation is acceptable", "Air gap variation is not critical - only total clearance matters"],
    "exp": "Manufacturers specify air gap tolerance typically as \u00b110% of mean. Example: if mean air gap = 3mm, acceptable range = 2.7-3.3mm. Variation beyond \u00b110% indicates bearing wear, rotor eccentricity, or stator bore distortion. The variation creates unbalanced magnetic pull (UMP) proportional to eccentricity - self-aggravating force.",
    "cat": "AG",
    "id": "T01A_104"
  },
  {
    "q": "How many measurement points per pole are typically used when measuring alternator air gap?",
    "a": "4 measurement points per pole (top, bottom, left, right) - or at 90\u00b0 intervals around the full circumference",
    "opts": ["1 point per pole is sufficient", "4 measurement points per pole (top, bottom, left, right) - or at 90\u00b0 intervals around the full circumference", "16 measurements total regardless of pole count", "Only one measurement needed at the largest gap position"],
    "exp": "4 points per pole gives a complete picture of gap uniformity. For a 4-pole machine: 4 \u00d7 4 = 16 measurements. The measurements are taken by inserting feeler gauges through ventilation slots or access openings. Results tabulated: any position deviating by >10% from mean requires investigation.",
    "cat": "AG",
    "id": "T01A_105"
  },
  {
    "q": "During maintenance, air gap is measured and found to be 2mm on one side and 4mm on the opposite side. What does this indicate?",
    "a": "Rotor is eccentric - likely a worn bearing causing the rotor to sag toward the smaller gap side",
    "opts": ["Stator winding insulation has expanded", "Rotor is eccentric - likely a worn bearing causing the rotor to sag toward the smaller gap side", "Air gap variation is normal and requires no action", "Rotor has been machined incorrectly - scrap and replace"],
    "exp": "2mm vs 4mm = 100% variation (vs acceptable \u00b110%). The rotor centre is not coincident with the stator bore centre - it has shifted toward the 2mm side. Most likely cause: worn bearing allowing rotor to sag. Also possible: bent shaft, bearing pedestal misalignment, or improper rotor installation after rewind. Check and replace bearing, realign, recheck gap.",
    "cat": "AG",
    "id": "T01A_106"
  },
  {
    "q": "What is the purpose of the reverse power relay?",
    "a": "Trips the generator breaker if the machine starts motoring (taking power from busbar)",
    "opts": ["Prevents overvoltage", "Trips the generator breaker if the machine starts motoring (taking power from busbar)", "Prevents overfrequency", "Trips on earth fault"],
    "exp": "If prime mover fails with breaker closed, alternator would run as synchronous motor - consuming power. Reverse power relay detects this and opens breaker.",
    "cat": "PR",
    "id": "T01A_107"
  },
  {
    "q": "What is 'preferential trip' / 'dead ship protection'?",
    "a": "Sequential shedding of non-essential loads when generator is overloaded, to maintain essential services",
    "opts": ["Trips all loads simultaneously", "Sequential shedding of non-essential loads when generator is overloaded, to maintain essential services", "Trips the generator itself", "Starts standby generator"],
    "exp": "Loads shed in pre-set sequence (non-essential first) to prevent generator overload trip. Essential services (steering, fire pump, navigation) preserved.",
    "cat": "PR",
    "id": "T01A_108"
  },
  {
    "q": "What safeties are typically fitted to a ship's alternator/generator?",
    "a": "Reverse power, overspeed, overcurrent, earth fault, low oil pressure, high temperature",
    "opts": ["Only overcurrent and earth fault", "Reverse power, overspeed, overcurrent, earth fault, low oil pressure, high temperature", "Only mechanical safeties", "Only electrical safeties"],
    "exp": "Both electrical (reverse power, overcurrent, earth fault, undervoltage) and mechanical (overspeed, low lube oil, high coolant temp) protections.",
    "cat": "PR",
    "id": "T01A_109"
  },
  {
    "q": "What is 'earth fault' on a generator?",
    "a": "One or more phases of stator winding making electrical contact with the earthed frame",
    "opts": ["Open circuit in winding", "One or more phases of stator winding making electrical contact with the earthed frame", "Short between two phases", "Broken field connection"],
    "exp": "Earth fault: phase conductor contacts machine frame (which is earthed). Detected by earth fault relay (usually 64 relay). On high-resistance earthed systems, fault current is limited.",
    "cat": "PR",
    "id": "T01A_110"
  },
  {
    "q": "What does the DIFFERENTIAL PROTECTION RELAY do on an alternator?",
    "a": "Compares current entering and leaving the winding - any difference indicates an internal fault",
    "opts": ["Compares voltage of two generators before paralleling", "Compares current entering and leaving the winding - any difference indicates an internal fault", "Detects frequency differences during synchronisation", "Monitors winding temperature balance"],
    "exp": "Differential protection: current transformers at both ends of stator winding compare ingoing vs outgoing current. Normally identical. Internal fault (turn-to-turn, phase-to-earth within winding) causes an imbalance \u2192 relay trips instantaneously. Highly sensitive - fastest protection for internal faults.",
    "cat": "PR",
    "id": "T01A_111"
  },
  {
    "q": "What is the setting for the REVERSE POWER RELAY on a marine alternator?",
    "a": "Trips at 5\u201310% of rated kW in reverse direction",
    "opts": ["Trips at 50% of rated kW", "Trips at any detectable reverse current", "Trips at 5\u201310% of rated kW in reverse direction", "Trips at 100% reverse power - only for severe motoring"],
    "exp": "Reverse power relay is set at 5\u201310% of rated kW. This is sensitive enough to detect motoring (prime mover failure) but insensitive enough to avoid nuisance trips during normal load fluctuations. Very large generators may have settings as low as 2\u20133%.",
    "cat": "PR",
    "id": "T01A_112"
  },
  {
    "q": "What is the function of the PREFERENTIAL TRIP relay?",
    "a": "Automatically sheds non-essential loads in stages when generator is persistently overloaded - before tripping the generator",
    "opts": ["Instantly disconnects the most important loads", "Automatically sheds non-essential loads in stages when generator is persistently overloaded - before tripping the generator", "Trips the generator if voltage is too high", "Prevents any additional loads from connecting"],
    "exp": "Preferential trip protects the generator from overload without blacking out the ship. It sheds non-essential services (galley, HVAC, etc.) in timed stages while keeping essential loads (navigation, steering, safety systems) running. Much better than total blackout.",
    "cat": "PR",
    "id": "T01A_113"
  },
  {
    "q": "What is a DASHPOT and why is it used with the preferential trip relay?",
    "a": "A pneumatic/hydraulic time-delay device - introduces time delay before shedding, allowing transient overloads to pass without unnecessary tripping",
    "opts": ["An oil reservoir for generator bearing lubrication", "A pneumatic/hydraulic time-delay device - introduces time delay before shedding, allowing transient overloads to pass without unnecessary tripping", "A capacitor that stores energy for instantaneous relay operation", "A mechanical brake on the generator shaft"],
    "exp": "The dashpot provides a settable time delay (typically 5\u201330 seconds). Without it, starting a large motor would trigger immediate load shedding. The dashpot allows the transient overload to pass. If overload persists beyond the delay \u2192 load is shed.",
    "cat": "PR",
    "id": "T01A_114"
  },
  {
    "q": "What bearing temperature values trigger ALARM and TRIP on a marine alternator?",
    "a": "Alarm at approximately 80\u00b0C, Trip at approximately 95\u00b0C",
    "opts": ["Alarm 60\u00b0C, Trip 70\u00b0C", "Alarm 80\u00b0C, Trip 150\u00b0C", "Alarm at approximately 80\u00b0C, Trip at approximately 95\u00b0C", "Alarm 100\u00b0C, Trip 120\u00b0C"],
    "exp": "PT100 resistance temperature detectors in bearings: ~80\u00b0C alarm gives warning to investigate (inadequate lubrication, overload). ~95\u00b0C trip prevents bearing seizure/damage. Different ships may have slightly different values - always check ship's documentation.",
    "cat": "PR",
    "id": "T01A_115"
  },
  {
    "q": "What is the purpose of the THERMISTOR protection in an alternator stator?",
    "a": "Embedded in stator winding - trips if winding temperature exceeds Class F insulation limit (155\u00b0C)",
    "opts": ["Monitors ambient temperature in the engine room", "Embedded in stator winding - trips if winding temperature exceeds Class F insulation limit (155\u00b0C)", "Controls AVR output based on temperature", "Measures coolant temperature of the prime mover"],
    "exp": "Thermistors (PTC type) are embedded directly in stator winding slots during manufacturing. Class F insulation is rated to 155\u00b0C. Trip prevents insulation degradation and winding burnout. The thermistor resistance increases sharply at the trip temperature, triggering the relay circuit.",
    "cat": "PR",
    "id": "T01A_116"
  },
  {
    "q": "What is EARTH FAULT PROTECTION on an alternator, and what percentage of stator is protected?",
    "a": "Detects stator winding earth faults - typically 95% stator earth fault protection (5% nearest neutral is unprotected)",
    "opts": ["100% of stator is protected in all modern ships", "Only the terminal box connections are protected", "Detects stator winding earth faults - typically 95% stator earth fault protection (5% nearest neutral is unprotected)", "Earth fault protection is optional on marine alternators"],
    "exp": "95% protection is standard - the 5% nearest the star-point (neutral) has insufficient voltage to drive the detection relay. For 100% protection, a low-frequency injection method is used. Earth fault protection prevents single earth fault from developing into a phase-to-phase fault.",
    "cat": "PR",
    "id": "T01A_117"
  },
  {
    "q": "What does OVER-VOLTAGE RELAY protect against, and at what setting does it trip?",
    "a": "Protects insulation from damage - trips at approximately 110% of rated voltage",
    "opts": ["Protects against reverse power - trips at 50% over", "Protects insulation from damage - trips at approximately 110% of rated voltage", "Only operates during synchronisation - no trip setting", "Trips at 125% for continuous protection"],
    "exp": "Over-voltage damages insulation and connected equipment. AVR should prevent this, but if AVR fails (thyristor short circuit), voltage can shoot up. Over-voltage relay trips at ~110% rated voltage. Response time is typically definite-time (short delay to avoid nuisance trips on transients).",
    "cat": "PR",
    "id": "T01A_118"
  },
  {
    "q": "Which protection relay prevents an alternator from 'motoring' when connected to the busbar?",
    "a": "Reverse power relay",
    "opts": ["Differential relay", "Under-voltage relay", "Reverse power relay", "Over-current relay"],
    "exp": "Reverse power relay monitors the direction of real power (kW) flow. Normal operation: power flows FROM generator TO busbar. Motoring: power flows FROM busbar TO generator. When reverse power exceeds setpoint (5\u201310% rated) for the set time, relay trips ACB.",
    "cat": "PR",
    "id": "T01A_119"
  },
  {
    "q": "During a survey, the surveyor asks you to test the overcurrent relay. How do you perform this?",
    "a": "Secondary injection test: rack ACB to TEST position, inject calculated current into CT secondary terminals, verify relay trips at set value",
    "opts": ["Overload the generator to 110% and observe relay", "Short the generator terminals briefly and measure response time", "Secondary injection test: rack ACB to TEST position, inject calculated current into CT secondary terminals, verify relay trips at set value", "Simulate fault using an insulation tester connected to phase terminals"],
    "exp": "Secondary injection: don't need to actually overload the machine. Disconnect CT secondary. Inject a measured AC current (using test set) that corresponds to the relay's trip setting when scaled by CT ratio. Time the relay trip. Record: set value, actual trip current, trip time. Compare to manufacturer spec.",
    "cat": "PR",
    "id": "T01A_120"
  },
  {
    "q": "List EIGHT protections fitted to a marine alternator.",
    "a": "OCR, Over-voltage, Under-voltage, Differential, Reverse power, Earth fault, Bearing temp (PT100), Winding temp (thermistor), Preferential trip",
    "opts": ["Only OCR and earth fault are mandatory", "OCR, Over-voltage, Under-voltage, Differential, Reverse power, Earth fault, Bearing temp (PT100), Winding temp (thermistor), Preferential trip", "Only voltage protection is fitted - current is monitored by AVR", "OCR, reverse power, and overspeed are the three mandatory ones"],
    "exp": "Full list: (1) OCR - overcurrent. (2) Over-voltage ~110%. (3) Under-voltage ~85%. (4) Differential relay - internal faults. (5) Reverse power relay ~5-10% rated kW reverse. (6) Earth fault - stator earth (95% coverage). (7) Bearing temperature PT100 - alarm 80\u00b0C, trip 95\u00b0C. (8) Winding thermistor - Class F limit 155\u00b0C. (9) Preferential trip - sustained overload load shedding.",
    "cat": "PR",
    "id": "T01A_121"
  },
  {
    "q": "Why is the differential protection relay considered the 'fastest and most sensitive' protection for internal alternator faults?",
    "a": "It operates instantaneously on any current difference between ends of the winding - does not need to wait for sustained overcurrent",
    "opts": ["It has a mechanical response spring that is the fastest actuator", "It operates instantaneously on any current difference between ends of the winding - does not need to wait for sustained overcurrent", "It is connected directly to the main busbar for fastest detection", "It monitors all three phases simultaneously while OCR monitors only one"],
    "exp": "Differential relay: CT at each end of stator winding compares ingoing and outgoing current. Under normal operation: exactly equal (Kirchhoff's law). Internal fault: current divides - some goes to earth via fault \u2192 unequal CTs \u2192 relay operates INSTANTLY with no intentional time delay. Highly sensitive to low-level internal faults that OCR would not detect.",
    "cat": "PR",
    "id": "T01A_122"
  },
  {
    "q": "The preferential trip relay has a dashpot. A large motor starts and overloads the generator for 8 seconds. The dashpot is set to 10 seconds. What happens?",
    "a": "No load shedding - motor starting overload clears within 10-second dashpot delay and preferential trip does not operate",
    "opts": ["Preferential trip operates after 8 seconds and sheds loads", "No load shedding - motor starting overload clears within 10-second dashpot delay and preferential trip does not operate", "Generator trips immediately on overcurrent", "AVR reduces voltage to protect the generator"],
    "exp": "This is exactly the purpose of the dashpot: transient overloads (motor starting, thruster acceleration) last only seconds - dashpot prevents unnecessary load shedding. Only if overload persists beyond the set time (10 sec in this example) does the trip operate. This avoids nuisance trips during normal operations.",
    "cat": "PR",
    "id": "T01A_123"
  },
  {
    "q": "Under-voltage relay is set at 85% rated voltage. A 440V system drops to 380V due to a fault. Does the UV relay operate?",
    "a": "Yes - 380V is 86.4% of 440V which is close to 85% threshold; sustained drop to this level will operate the relay",
    "opts": ["No - 380V is too close to threshold for relay to operate", "Yes - 380V is 86.4% of 440V which is close to 85% threshold; sustained drop to this level will operate the relay", "UV relay only operates below 50% rated voltage", "UV relay is disabled during fault conditions"],
    "exp": "85% of 440V = 374V. At 380V (86.4%), the relay is just above threshold - may not operate immediately. But if voltage continues to drop to 374V, UV relay operates. UV relay typically has a short time delay (0.5-2 sec) to avoid nuisance trips on transient dips. Sustained undervoltage causes motor stalling - UV relay disconnects generator/loads.",
    "cat": "PR",
    "id": "T01A_124"
  },
  {
    "q": "What is the PT100 and how does it work in bearing temperature monitoring?",
    "a": "PT100 = Platinum Resistance Thermometer with 100\u03a9 at 0\u00b0C - resistance increases linearly with temperature; connected to monitoring panel",
    "opts": ["PT100 = Pressure Temperature sensor rated for 100 bar", "PT100 = Platinum Resistance Thermometer with 100\u03a9 at 0\u00b0C - resistance increases linearly with temperature; connected to monitoring panel", "PT100 is a thermocouple that generates voltage proportional to temperature", "PT100 is an optical sensor that detects bearing colour change"],
    "exp": "PT100 works on resistance-temperature relationship: R = 100 \u00d7 (1 + 0.00385 \u00d7 T\u00b0C). At 80\u00b0C: R \u2248 130.8\u03a9 \u2192 alarm. At 95\u00b0C: R \u2248 136.6\u03a9 \u2192 trip. Monitoring panel converts resistance to temperature reading. PT100s are embedded in bearing housings. Very stable and accurate - suitable for continuous monitoring.",
    "cat": "PR",
    "id": "T01A_125"
  },
  {
    "q": "Why does earth fault protection typically only protect 95% of the stator winding?",
    "a": "The 5% of winding nearest the star-point (neutral) has insufficient voltage to earth to drive the earth fault relay",
    "opts": ["The remaining 5% is protected by the overcurrent relay", "The 5% of winding nearest the star-point (neutral) has insufficient voltage to earth to drive the earth fault relay", "The neutral end is earthed anyway so earth faults there are harmless", "The CTs cannot be installed at the star-point end due to space"],
    "exp": "Earth fault relay operates from the voltage developed between the fault point and earth. At the neutral (star) point: voltage to earth \u2248 0V \u2192 a fault there develops no driving voltage for the relay. As the fault point moves toward the line terminal, voltage increases. The relay has a minimum voltage threshold \u2192 typically 5% of winding (neutral end) below this threshold is unprotected.",
    "cat": "PR",
    "id": "T01A_126"
  },
  {
    "q": "What is the effect of a failed open-circuit reverse power relay on a generator coming off-line?",
    "a": "If prime mover fails and relay doesn't trip, generator motors (runs as induction motor), drawing heavy current from busbar, damaging engine/coupling",
    "opts": ["Generator automatically disconnects via overcurrent relay", "If prime mover fails and relay doesn't trip, generator motors (runs as induction motor), drawing heavy current from busbar, damaging engine/coupling", "No effect - other protections cover this", "Generator overspeeds if relay fails open"],
    "exp": "A failed (open-circuit) reverse power relay means it cannot trip. If prime mover stalls: busbar back-feeds the generator \u2192 induction motoring \u2192 heavy current \u2192 diesel engine driven backward against compression \u2192 severe mechanical shock to couplings, gearbox, engine components. The differential relay may eventually trip (if internal fault develops), but the overcurrent relay may also trip - depending on the level of motoring current.",
    "cat": "PR",
    "id": "T01A_127"
  },
  {
    "q": "What is 'flashing the field' of an alternator?",
    "a": "Applying a momentary DC voltage to restore residual magnetism in the field core",
    "opts": ["Testing insulation with high voltage", "Applying a momentary DC voltage to restore residual magnetism in the field core", "Cleaning the field windings", "Testing AVR response"],
    "exp": "If residual magnetism is lost, voltage won't build up. Momentary DC (usually from battery) restores residual flux and allows voltage to build.",
    "cat": "RM",
    "id": "T01A_128"
  },
  {
    "q": "Emergency generator fuel flash point must be:",
    "a": "Above 43\u00b0C (SOLAS requirement)",
    "opts": ["Above 60\u00b0C", "Above 43\u00b0C (SOLAS requirement)", "Any flash point", "Above 100\u00b0C"],
    "exp": "SOLAS II-1/43.3.2: fuel for emergency generator must have flash point not less than 43\u00b0C. That's why diesel not gasoline - safety in ER.",
    "cat": "RM",
    "id": "T01A_129"
  },
  {
    "q": "What is residual magnetism in an alternator?",
    "a": "Small amount of magnetic flux retained in rotor core material even when field current is zero",
    "opts": ["The permanent magnetic field used in synchronous operation", "Small amount of magnetic flux retained in rotor core material even when field current is zero", "Static charge on stator windings after shutdown", "The minimum field current required to start voltage buildup"],
    "exp": "Rotor core material retains some magnetism after the field current is removed. This residual flux induces a small initial voltage during run-up. The self-excited alternator uses this to bootstrap its own voltage. If lost (e.g., by a large external discharge), flashing is needed.",
    "cat": "RM",
    "id": "T01A_130"
  },
  {
    "q": "An alternator runs at rated RPM but shows zero voltage on the voltmeter. What are the possible causes?",
    "a": "Residual magnetism lost, AVR fault, rotating diode failure, PMG fault, open circuit field winding, or voltmeter fault",
    "opts": ["Only the governor has failed", "Residual magnetism lost, AVR fault, rotating diode failure, PMG fault, open circuit field winding, or voltmeter fault", "Always means the stator winding is burnt", "Caused by wrong phase rotation only"],
    "exp": "Systematic check: (1) Is voltmeter accurate? (2) Residual magnetism - try flashing. (3) Check AVR supply and function. (4) Check PMG output. (5) Check rotating diodes. (6) Measure field winding resistance. Multiple causes - systematic elimination is key.",
    "cat": "RM",
    "id": "T01A_131"
  },
  {
    "q": "What is the procedure for FLASHING an alternator?",
    "a": "Bring to rated speed; connect 12\u201324V battery briefly (2\u20133 sec) to exciter field with correct polarity; check voltage builds",
    "opts": ["Apply 415V AC from shore supply to the stator terminals", "Bring to rated speed; connect 12\u201324V battery briefly (2\u20133 sec) to exciter field with correct polarity; check voltage builds", "Use megger at 500V to restore magnetism in rotor core", "Short circuit the AVR output terminals for 5 seconds"],
    "exp": "Flashing uses a DC battery to restore the residual magnetism in the rotor. CRITICAL: correct polarity must be maintained. Reverse polarity will destroy the residual magnetism further. Connect only 2\u20133 seconds - longer connection risks winding damage. Check voltage builds up as soon as battery is disconnected.",
    "cat": "RM",
    "id": "T01A_132"
  },
  {
    "q": "What is the main risk during a flashing operation?",
    "a": "Wrong polarity destroys residual magnetism; battery sparking can ignite flammable gases",
    "opts": ["Overvoltage in the stator winding", "Wrong polarity destroys residual magnetism; battery sparking can ignite flammable gases", "AVR permanent damage from battery voltage", "Voltmeter burning out from sudden voltage surge"],
    "exp": "Risk 1: Reversed polarity \u2192 residual magnetism is demagnetised further \u2192 harder to restore. Risk 2: Battery spark at connection/disconnection. A fire extinguisher must be nearby. Also ensure all personnel are clear of rotating parts before starting.",
    "cat": "RM",
    "id": "T01A_133"
  },
  {
    "q": "How do you ensure an alternator is electrically safe (dead) when residual magnetism may still be present?",
    "a": "Measure terminal voltage with an approved voltmeter before working - do not assume dead just because ACB is open",
    "opts": ["If ACB is open, machine is always dead - no further check needed", "Only use it if it's been switched off for over 30 minutes", "Measure terminal voltage with an approved voltmeter before working - do not assume dead just because ACB is open", "Remove all three phases from the busbar simultaneously"],
    "exp": "Residual magnetism means a small voltage IS present at stator terminals even with ACB open and no field current. This can cause shock. Always verify with a voltmeter before working on stator terminals. Earth the machine if necessary for complete safety.",
    "cat": "RM",
    "id": "T01A_134"
  },
  {
    "q": "Why might an alternator lose its residual magnetism?",
    "a": "Large external discharge (short circuit, capacitor discharge), prolonged storage, degaussing nearby, or reverse-polarity field connection",
    "opts": ["Excessive lubrication of bearings", "Large external discharge (short circuit, capacitor discharge), prolonged storage, degaussing nearby, or reverse-polarity field connection", "Running at low speed for long periods", "AVR malfunction during load shedding"],
    "exp": "Residual magnetism can be erased by: (1) External magnetic field opposing the existing one - nearby degaussing operations. (2) Capacitor discharge or short circuit creating a demagnetising pulse. (3) Very long storage without running. (4) Incorrectly polarity-flashing. Any of these can leave the rotor with insufficient residual flux to bootstrap voltage buildup.",
    "cat": "RM",
    "id": "T01A_135"
  },
  {
    "q": "An alternator at rated speed shows 5V on voltmeter instead of 440V. What is the most likely cause?",
    "a": "Very low residual magnetism - insufficient to bootstrap voltage buildup; flashing required",
    "opts": ["Governor has failed - speed is too low", "Very low residual magnetism - insufficient to bootstrap voltage buildup; flashing required", "Main busbar has shorted", "All three phases are open circuit"],
    "exp": "5V at rated speed suggests some magnetism exists but insufficient for full voltage buildup. This points to degraded (not completely lost) residual magnetism. Check: Is voltmeter accurate? Is speed actually at rated? If both confirmed \u2192 attempt flashing with 12-24V battery to boost residual magnetism \u2192 voltage should build to rated.",
    "cat": "RM",
    "id": "T01A_136"
  },
  {
    "q": "During flashing: the battery is connected but voltage does NOT build up after disconnection. Next step?",
    "a": "Check polarity was correct; if polarity was wrong, re-flash with OPPOSITE polarity; if polarity correct, investigate AVR and field circuit",
    "opts": ["Apply higher voltage battery (48V)", "Check polarity was correct; if polarity was wrong, re-flash with OPPOSITE polarity; if polarity correct, investigate AVR and field circuit", "Repeat flashing 10 times - residual builds gradually", "Call superintendent - machine is beyond repair"],
    "exp": "If polarity was wrong: the flash destroyed existing residual magnetism instead of restoring it. Re-flash with correct polarity. If polarity was correct but no buildup: (1) Is machine at rated speed? (2) Is AVR functioning? (3) Check field winding continuity (resistance test). (4) Check rotating diodes (brushless). Don't keep flashing blindly.",
    "cat": "RM",
    "id": "T01A_137"
  },
  {
    "q": "What is the correct battery voltage for flashing an alternator?",
    "a": "12V or 24V DC battery - brief connection of 2-3 seconds only",
    "opts": ["6V DC - lower risk of damage", "240V DC from shore supply", "12V or 24V DC battery - brief connection of 2-3 seconds only", "110V DC from emergency battery bank"],
    "exp": "12V or 24V (typical ship's battery) is sufficient to restore residual magnetism. Higher voltage risks overheating the field winding. Duration must be short (2-3 seconds) - sustained current could damage the winding. The goal is just to magnetise the rotor core, not to supply steady field current.",
    "cat": "RM",
    "id": "T01A_138"
  },
  {
    "q": "After successfully flashing, what should you observe at the voltmeter?",
    "a": "Voltage builds progressively from low value to near-rated value as the bootstrap cycle takes effect",
    "opts": ["Voltage jumps instantly to exactly rated value", "Voltage builds progressively from low value to near-rated value as the bootstrap cycle takes effect", "Voltage remains at battery voltage level", "Voltage surges to 120% then settles"],
    "exp": "The bootstrap cycle: residual \u2192 small voltage \u2192 field current \u2192 more flux \u2192 more voltage \u2192 field current \u2192 ... This is progressive, not instant. You should see the voltmeter needle rise steadily over a few seconds until the AVR takes control and stabilises at rated voltage. If voltage doesn't build \u2192 residual still insufficient \u2192 investigate further.",
    "cat": "RM",
    "id": "T01A_139"
  },
  {
    "q": "Emergency generator SOLAS requirement - automatic starting must occur within:",
    "a": "45 seconds for cargo ships, 30 seconds for passenger ships",
    "opts": ["60 seconds", "45 seconds for cargo ships, 30 seconds for passenger ships", "15 seconds", "10 seconds"],
    "exp": "SOLAS II-1/43: cargo ships 45 seconds, passenger ships 30 seconds after main power failure.",
    "cat": "SOL",
    "id": "T01A_140"
  },
  {
    "q": "What is the SOLAS requirement for emergency source of power on cargo ships?",
    "a": "SOLAS II-1/43: must supply for minimum 18 hours with specified services",
    "opts": ["3 hours", "18 hours", "24 hours", "12 hours"],
    "exp": "SOLAS II-1/43.2.1: cargo ships - emergency source must supply essential services for minimum 18 hours (passenger ships: 36 hours).",
    "cat": "SOL",
    "id": "T01A_141"
  },
  {
    "q": "What are the SOLAS requirements for main source of electrical power?",
    "a": "SOLAS II-1/41: maintain all services needed for normal operation and safety, survive any single failure",
    "opts": ["Any three phase supply", "SOLAS II-1/41: maintain all services needed for normal operation and safety, survive any single failure", "Supply lights and navigation only", "Not specified in SOLAS"],
    "exp": "SOLAS II-1/41: main electrical installation must supply all services under normal and emergency conditions. n+1 redundancy concept - losing any single generator must not affect essential services.",
    "cat": "SOL",
    "id": "T01A_142"
  },
  {
    "q": "According to SOLAS, what is the steady-state voltage regulation requirement for marine alternators?",
    "a": "Within \u00b12.5% of rated voltage from no-load to full-load",
    "opts": ["Within \u00b15% of rated voltage", "Within \u00b11% of rated voltage", "Within \u00b12.5% of rated voltage from no-load to full-load", "Within \u00b110% during any transient condition"],
    "exp": "SOLAS Ch. II-1/Reg 40.3: Steady-state voltage must be maintained within \u00b12.5% of rated voltage under any load condition from no-load to full-load. Transient deviation must not exceed \u00b110% before recovering to \u00b12.5%.",
    "cat": "SOL",
    "id": "T01A_143"
  },
  {
    "q": "What is the maximum transient voltage excursion allowed by SOLAS during sudden load changes?",
    "a": "\u00b110% of rated voltage, recovering within required time",
    "opts": ["\u00b12.5% - same as steady state", "\u00b15% maximum", "\u00b110% of rated voltage, recovering within required time", "\u00b115% is acceptable for heavy loads"],
    "exp": "SOLAS allows up to \u00b110% transient excursion on sudden load pickup or shedding - this accounts for the AVR response time. The voltage must then recover to within \u00b12.5% steady-state band. This is tested during load acceptance trials.",
    "cat": "SOL",
    "id": "T01A_144"
  },
  {
    "q": "Why is the main generator NOT placed at the bottom of the engine room (tank top level)?",
    "a": "Flooding risk, excessive vibration, poor maintenance access, inadequate cooling - all prevented by elevated placement",
    "opts": ["It would be too cold at tank top level", "SOLAS specifically prohibits bottom placement for weight distribution", "Flooding risk, excessive vibration, poor maintenance access, inadequate cooling - all prevented by elevated placement", "The prime mover would overheat if placed at tank top"],
    "exp": "(1) Tank top floods first - submerged generator = complete power loss. (2) Tank top vibration from ME + shaft is highest. (3) Overhead crane access needed for major maintenance. (4) Better forced ventilation at upper levels. SOLAS II-1/Reg 40 mandates flood protection for main power sources.",
    "cat": "SOL",
    "id": "T01A_145"
  },
  {
    "q": "Where MUST the emergency generator be located according to SOLAS?",
    "a": "Above the bulkhead deck, OUTSIDE the main machinery space, in a separate compartment",
    "opts": ["In a waterproof enclosure at tank top level", "Adjacent to the main switchboard in the ECR", "Above the bulkhead deck, OUTSIDE the main machinery space, in a separate compartment", "Any location that can be remotely started from bridge"],
    "exp": "SOLAS Ch. II-1 Reg 42/43: Emergency generator must be (1) Above the bulkhead deck (so flooding of machinery space doesn't affect it). (2) Entirely outside the machinery space (so fire or flooding in ER doesn't disable it). Purpose: independent survival in any casualty.",
    "cat": "SOL",
    "id": "T01A_146"
  },
  {
    "q": "SOLAS Chapter II-1 Regulation 40 covers what aspect of electrical systems?",
    "a": "Main source of electrical power - requirements for generating capacity, voltage regulation, and protection against flooding",
    "opts": ["Fire detection and fixed suppression systems", "Main source of electrical power - requirements for generating capacity, voltage regulation, and protection against flooding", "Life-saving appliance electrical requirements", "Emergency battery requirements only"],
    "exp": "SOLAS II-1 Reg 40: (1) Main electrical power must supply essential services. (2) At least 2 generators must be fitted (for most ships). (3) Loss of any one generator must not leave ship without power for essential services. (4) Voltage regulation within \u00b12.5% steady-state. (5) Protection against flooding of main machinery space.",
    "cat": "SOL",
    "id": "T01A_147"
  },
  {
    "q": "Where EXACTLY must the emergency generator be located per SOLAS?",
    "a": "Above the bulkhead deck, in a separate compartment, entirely outside the main machinery space",
    "opts": ["Below the bulkhead deck, adjacent to ECR", "Above the bulkhead deck, in a separate compartment, entirely outside the main machinery space", "Anywhere above the waterline", "In the forward machinery space only"],
    "exp": "SOLAS II-1 Reg 42/43: Emergency generator must be: (1) Above the bulkhead (damage control) deck - so flooding of lower spaces doesn't affect it. (2) OUTSIDE the main machinery space - fire or flooding in ER cannot disable it. (3) In its own compartment with fire resistance equivalent to 'A-60' class. This ensures it's available in ANY casualty scenario.",
    "cat": "SOL",
    "id": "T01A_148"
  },
  {
    "q": "How long must the emergency generator be able to supply emergency loads continuously?",
    "a": "36 hours for passenger ships; 18 hours for cargo ships",
    "opts": ["6 hours for all ships", "36 hours for passenger ships; 18 hours for cargo ships", "24 hours for all ships", "Until rescued - no time limit specified"],
    "exp": "SOLAS II-1 Reg 42 (Passenger ships): minimum 36 hours. Reg 43 (Cargo ships): minimum 18 hours. Passenger ships need longer endurance because of the large number of persons on board requiring extended rescue coordination. Auto-start within 45 seconds (30 seconds for passenger ships).",
    "cat": "SOL",
    "id": "T01A_149"
  },
  {
    "q": "What is the SOLAS requirement for the number of main generators on a cargo ship?",
    "a": "At least 2 generators required; loss of any single generator must not leave essential services without power",
    "opts": ["Exactly 3 generators - one active, one standby, one emergency", "At least 2 generators required; loss of any single generator must not leave essential services without power", "Only 1 main generator needed if emergency generator is installed", "4 generators minimum for ships over 10,000 GRT"],
    "exp": "SOLAS II-1 Reg 40: 'At least 2 generating sets.' The total installed capacity must be sufficient that essential services can be maintained even if the LARGEST single generator fails. In practice, most ships have 2-3 main generators sized so any one can be lost and the others cover essential services.",
    "cat": "SOL",
    "id": "T01A_150"
  },
  {
    "q": "SOLAS requires generators to be protected against flooding. What is the practical minimum height above tank top for the main generator?",
    "a": "Above the bulkhead deck level - in practice, typically on the second or third platform above tank top",
    "opts": ["At tank top level is acceptable if flood detection is fitted", "Above the bulkhead deck level - in practice, typically on the second or third platform above tank top", "Any height above bilge level", "Must be above the waterline mark only"],
    "exp": "The bulkhead deck is the deck to which the ship's watertight bulkheads extend. SOLAS II-1/40 requires main power sources to be protected from flooding that might result from hull breach. In practice, this means generators are placed on elevated platforms - second platform or higher in engine room - well above the maximum expected flood waterline.",
    "cat": "SOL",
    "id": "T01A_151"
  },
  {
    "q": "What reading would you expect from an IR test on a healthy alternator winding?",
    "a": "Greater than 1 M\u03a9 (and ideally much higher, >100 M\u03a9 for new winding)",
    "opts": ["Zero ohms", "Greater than 1 M\u03a9 (and ideally much higher, >100 M\u03a9 for new winding)", "Exactly 1 \u03a9", "500 \u03a9"],
    "exp": "Polarization Index (PI) test: IR at 10 min / IR at 1 min \u2265 2 indicates healthy insulation. Minimum 1 M\u03a9 required before starting.",
    "cat": "MT",
    "id": "T01A_152"
  },
  {
    "q": "What is the PI (Polarisation Index) test?",
    "a": "Ratio of 10-minute to 1-minute megger reading; PI \u2265 2 indicates good insulation",
    "opts": ["Peak current test", "Ratio of 10-minute to 1-minute megger reading; PI \u2265 2 indicates good insulation", "Power factor test", "Pressure/insulation test"],
    "exp": "PI = R10min/R1min. Values: <1 = bad, 1\u20132 = questionable, \u22652 = good, \u22654 = excellent. Indicates moisture/contamination in winding insulation.",
    "cat": "MT",
    "id": "T01A_153"
  },
  {
    "q": "What is the typical test voltage for a megger test on a 440V alternator winding?",
    "a": "500V DC",
    "opts": ["240V DC", "500V DC", "1000V DC", "2500V DC"],
    "exp": "500V megger for 440V equipment is standard. For 11kV equipment: 2500V\u20135000V megger. Rule of thumb: megger voltage \u2248 twice rated voltage + 1000V (min 500V).",
    "cat": "MT",
    "id": "T01A_154"
  },
  {
    "q": "What is the minimum acceptable IR (Insulation Resistance) value for a marine alternator winding?",
    "a": "Minimum 1 M\u03a9; Polarisation Index (PI) > 2 indicates good insulation",
    "opts": ["Minimum 10 k\u03a9 is acceptable for marine service", "Minimum 100 M\u03a9 for running machines", "Minimum 1 M\u03a9; Polarisation Index (PI) > 2 indicates good insulation", "Any reading above zero is acceptable"],
    "exp": "1 M\u03a9 is the absolute minimum. In practice, a good dry winding reads hundreds of M\u03a9. PI (10-min reading / 1-min reading) > 2 = good insulation condition. PI 1\u20132 = fair. PI <1 = dangerous - do not run. Always discharge winding after meggering.",
    "cat": "MT",
    "id": "T01A_155"
  },
  {
    "q": "What voltage megger is used for a 440V alternator IR test?",
    "a": "500V DC megger",
    "opts": ["250V DC - to avoid damaging the insulation", "1000V DC - for thorough testing", "5000V DC - to match starting voltage", "500V DC megger"],
    "exp": "Rule of thumb: megger voltage should be approximately equal to rated voltage + 250V, or use standard values: 500V for low voltage equipment (<1000V), 1000V for medium voltage, 5000V for high voltage (>11kV). 500V for 440V alternator is standard.",
    "cat": "MT",
    "id": "T01A_156"
  },
  {
    "q": "What must be done to the winding AFTER performing an IR test?",
    "a": "Discharge the winding by connecting it to earth via a resistor - capacitive charge can cause electric shock",
    "opts": ["Re-connect to AVR immediately to restore normal operation", "Discharge the winding by connecting it to earth via a resistor - capacitive charge can cause electric shock", "Measure AC voltage at terminals to confirm discharge", "No action needed - megger automatically discharges"],
    "exp": "Megger charges the winding capacitance to DC test voltage (500V or more). This charge is retained after removing the megger. Short-circuiting directly causes arc - use a high resistance first, then earth. Time constant depends on winding capacitance. Always discharge before touching.",
    "cat": "MT",
    "id": "T01A_157"
  },
  {
    "q": "After receiving a rewound alternator from shore - what checks must you do before commissioning?",
    "a": "Visual check, IR test, phase rotation check, no-load voltage check, then gradual load test",
    "opts": ["Just run at full load for 30 minutes", "Only check voltage output", "Visual check, IR test, phase rotation check, no-load voltage check, then gradual load test", "Send it back for further testing - never trust shore rewind"],
    "exp": "Systematic commissioning: (1) Visual - winding quality, varnish, connections. (2) IR test - all phases to earth. (3) Phase rotation - must match ship's system. (4) No-load run - check voltage, frequency, noise, vibration. (5) Parallel with running generator - check load sharing. (6) Gradually apply load.",
    "cat": "MT",
    "id": "T01A_158"
  },
  {
    "q": "What is the Polarisation Index (PI) and what does PI > 2 indicate?",
    "a": "PI = IR at 10 minutes \u00f7 IR at 1 minute; PI > 2 = good dry insulation in good condition",
    "opts": ["PI measures the alternator's power factor improvement", "PI = maximum current \u00f7 rated current; PI > 2 means overload capacity", "PI = IR at 10 minutes \u00f7 IR at 1 minute; PI > 2 = good dry insulation in good condition", "PI is the ratio of bearing temperature to winding temperature"],
    "exp": "Polarisation Index distinguishes good dry insulation (resistance keeps rising over time) from contaminated/wet insulation (resistance stays constant or drops). PI > 2 = excellent. PI 1\u20132 = fair (investigate). PI < 1 = dangerous - do not energise. Wet windings show very low PI.",
    "cat": "MT",
    "id": "T01A_159"
  },
  {
    "q": "What is the Polarisation Index (PI) test and why is it more reliable than a single IR reading?",
    "a": "PI = IR at 10 min / IR at 1 min - ratio shows whether resistance is rising (good dry insulation) or flat/falling (wet/contaminated)",
    "opts": ["PI measures the peak insulation resistance during 10 minutes", "PI = IR at 10 min / IR at 1 min - ratio shows whether resistance is rising (good dry insulation) or flat/falling (wet/contaminated)", "PI is the number of megohms per kilovolt of test voltage", "PI measures leakage current at rated operating voltage"],
    "exp": "Good dry insulation: resistance keeps rising over time as polarisation occurs \u2192 PI > 2. Wet or contaminated insulation: resistance stays constant or drops \u2192 PI < 1. A machine might show 5 M\u03a9 at 1 min and 15 M\u03a9 at 10 min \u2192 PI = 3 \u2192 GOOD. Another shows 5 M\u03a9 at 1 min and 4 M\u03a9 at 10 min \u2192 PI = 0.8 \u2192 DANGEROUS. Single reading doesn't reveal this trend.",
    "cat": "MT",
    "id": "T01A_160"
  },
  {
    "q": "IR test shows 0.8 M\u03a9 on a 440V alternator stator winding. What action do you take?",
    "a": "Do NOT energise - 0.8 M\u03a9 is below 1 M\u03a9 minimum; investigate cause (moisture, contamination), dry out winding, retest",
    "opts": ["0.8 M\u03a9 is acceptable for wet conditions - run at 50% load", "Do NOT energise - 0.8 M\u03a9 is below 1 M\u03a9 minimum; investigate cause (moisture, contamination), dry out winding, retest", "Megger again with 1000V to get a more accurate reading", "Apply varnish to winding and retest immediately"],
    "exp": "1 M\u03a9 is the absolute minimum. 0.8 M\u03a9 = DO NOT RUN. Actions: (1) Check for obvious moisture (condensation, bilge water ingress). (2) Use anti-condensation heaters at low temperature to dry gradually - do not apply heat suddenly to wet windings (thermal shock). (3) Blow through with dry compressed air (low pressure). (4) Retest after 4-6 hours heating. Log all readings.",
    "cat": "MT",
    "id": "T01A_161"
  },
  {
    "q": "How do you safely discharge a stator winding after megger testing?",
    "a": "Connect a high-resistance discharge resistor from each terminal to earth first, then short to earth - never short directly",
    "opts": ["Remove megger leads - charge dissipates naturally in 10 seconds", "Connect a high-resistance discharge resistor from each terminal to earth first, then short to earth - never short directly", "Short all terminals together - no earth needed", "Leave for 1 hour - capacitive charge self-discharges"],
    "exp": "Megger charges winding capacitance to test voltage (500-1000V). Direct short to earth \u2192 arc \u2192 shock risk. Procedure: (1) After stopping megger, apply high-resistance (10k\u03a9-100k\u03a9) discharge resistor between winding terminal and earth. (2) Allow 4\u00d7 the test time for discharge. (3) Then apply earth bonding lead. Time constant = R\u00d7C - with large winding capacitance, can take minutes.",
    "cat": "MT",
    "id": "T01A_162"
  },
  {
    "q": "What routine checks should you perform on a running alternator during your watch? (Name 6)",
    "a": "Voltage, current, frequency, power factor, bearing temperature, winding temperature, vibration, abnormal noise, AVR stability",
    "opts": ["Only check voltage - other parameters are monitored automatically", "Voltage, current, frequency, power factor, bearing temperature, winding temperature, vibration, abnormal noise, AVR stability", "Perform IR test every watch", "Remove slip ring cover and inspect during running"],
    "exp": "Running checks (no shutdown): (1) Switchboard meters - V, A, Hz, kW, PF. (2) Trending - compare to previous watch readings. (3) Bearing temperature - PT100 readings or touch-check housing. (4) Listen - abnormal noise (grinding = bearing, whining = rotor rub). (5) Feel vibration - excessive = imbalance or bearing. (6) Check AVR stability - is voltage steady? Log everything.",
    "cat": "MT",
    "id": "T01A_163"
  },
  {
    "q": "An alternator has been sitting in drydock for 3 months in a cold humid climate. Before restarting, what is the FIRST electrical check?",
    "a": "Megger test (IR test) all three phases to earth and between phases before energising",
    "opts": ["Check bearing oil level", "Megger test (IR test) all three phases to earth and between phases before energising", "Check fuel system and prime mover", "Connect to shore power and test with full load"],
    "exp": "Cold humid drydock = high condensation risk. Windings absorb moisture \u2192 IR drops dramatically. NEVER energise a machine without first confirming IR is acceptable (>1M\u03a9, PI >2 ideally). If IR is low: dry out with anti-condensation heaters before energising. Also check: oil, fuel, cooling water, governor operation, and perform no-load run before taking any load.",
    "cat": "MT",
    "id": "T01A_164"
  },
  {
    "q": "What is the purpose of blowing out a running alternator with dry compressed air?",
    "a": "Remove carbon brush dust, accumulated dirt, and moisture from air passages and winding surfaces to prevent tracking and overheating",
    "opts": ["Cool the bearings during heavy load operation", "Remove carbon brush dust, accumulated dirt, and moisture from air passages and winding surfaces to prevent tracking and overheating", "Test the ventilation fan efficiency", "The compressed air re-magnetises the rotor during service"],
    "exp": "Carbon brush dust (from slip rings) and general dust accumulate in ventilation passages and on winding surfaces. Conductive dust on windings reduces surface insulation resistance \u2192 tracking (surface arcing). Blocked ventilation \u2192 overheating. Low-pressure dry compressed air (max 2 bar) blown through clears passages. Collect dust - don't just blow it into bearing housings.",
    "cat": "MT",
    "id": "T01A_165"
  },
  {
    "q": "What is the purpose of applying Class F varnish to stator windings during rewind?",
    "a": "Impregnates and consolidates the winding - improves insulation, thermal conductivity, moisture resistance, and mechanical strength",
    "opts": ["Reduces copper resistance for better conductivity", "Impregnates and consolidates the winding - improves insulation, thermal conductivity, moisture resistance, and mechanical strength", "Class F varnish is mandatory per MARPOL regulations", "Prevents rust on the copper conductors"],
    "exp": "Vacuum Pressure Impregnation (VPI) with Class F insulating varnish: (1) Fills all voids between conductors \u2192 consolidates winding \u2192 eliminates movement and vibration damage. (2) Improves thermal conductivity \u2192 heat flows better to stator core. (3) Waterproofs the winding \u2192 moisture resistance. (4) Class F rated to 155\u00b0C \u2192 matches Class F insulation. Properly varnished windings last decades.",
    "cat": "MT",
    "id": "T01A_166"
  },
  {
    "q": "How do you test the overspeed trip of a diesel generator?",
    "a": "Gradually increase speed by adjusting governor until overspeed trip activates (typically 115% of rated speed)",
    "opts": ["Disconnect governor and let engine run freely", "Gradually increase speed by adjusting governor until overspeed trip activates (typically 115% of rated speed)", "Apply load suddenly then remove", "Test only in dry dock"],
    "exp": "Mechanical overspeed trip typically set at 110\u2013115% of rated speed. Test with generator off-load, gradually increasing speed via governor control. Record test in logbook.",
    "cat": "OS",
    "id": "T01A_167"
  },
  {
    "q": "At what speed does the overspeed trip activate on a marine auxiliary diesel-alternator set?",
    "a": "110\u2013115% of rated speed",
    "opts": ["90% of rated speed", "100% rated speed - at setpoint", "110\u2013115% of rated speed", "150% - only for extreme emergency"],
    "exp": "Overspeed trip is set to activate at 110\u2013115% of rated speed (not 100% - that would interfere with normal speed variations). For a 1500 RPM generator, trip activates at 1650\u20131725 RPM. It's a mechanical or electronic trip that cuts fuel supply.",
    "cat": "OS",
    "id": "T01A_168"
  },
  {
    "q": "How do you test the overspeed trip of a marine auxiliary engine?",
    "a": "Run off-load with ACB open, gradually increase governor speed until trip activates; note trip RPM and compare to specification",
    "opts": ["Only check by monitoring the trip in emergency - never test deliberately", "Apply full rated load then suddenly remove it", "Run off-load with ACB open, gradually increase governor speed until trip activates; note trip RPM and compare to specification", "Simulate by injecting a signal into the electronic governor"],
    "exp": "Method 1 (actual): ACB open, increase fuel slowly until trip fires. Verify RPM at trip. Method 2 (simulated): Electronic engines - simulate via test function. Record: date, trip speed, result in engine log. Frequency: annually or at drydock as per class/SOLAS requirement.",
    "cat": "OS",
    "id": "T01A_169"
  },
  {
    "q": "What is the difference between the governor trip and the mechanical overspeed trip?",
    "a": "Governor trip = normal speed control; Mechanical overspeed trip = emergency backup that activates at 110-115% speed to prevent destruction",
    "opts": ["They are the same device with different names", "Governor trip = normal speed control; Mechanical overspeed trip = emergency backup that activates at 110-115% speed to prevent destruction", "Mechanical trip = faster response; governor = backup", "Governor only controls fuel - no trip function"],
    "exp": "Governor maintains normal operating speed. If governor fails \u2192 speed rises uncontrolled \u2192 mechanical overspeed trip activates at 110-115% rated speed as a last resort. Mechanical trip typically actuates a fuel cutoff lever or solenoid directly - independent of electronic governor. It's a fail-safe backup.",
    "cat": "OS",
    "id": "T01A_170"
  },
  {
    "q": "A diesel alternator rated at 1500 RPM has its overspeed trip set at 113%. At what RPM does it trip?",
    "a": "1695 RPM",
    "opts": ["1650 RPM", "1695 RPM", "1725 RPM", "1500 RPM"],
    "exp": "Trip RPM = rated RPM \u00d7 trip % = 1500 \u00d7 1.13 = 1695 RPM. This is within the typical 110-115% range. After the test, verify the trip reset and check that the mechanical linkage is undamaged. Log the actual trip speed and compare to the design specification.",
    "cat": "OS",
    "id": "T01A_171"
  },
  {
    "q": "During overspeed trip test, the ACB must be OPEN before starting. Why?",
    "a": "To prevent frequency surge from feeding into the main busbar and damaging other equipment and motors",
    "opts": ["To allow the machine to accelerate freely without generator load", "To prevent frequency surge from feeding into the main busbar and damaging other equipment and motors", "ACB open allows higher test speed to be reached", "Required to reset the mechanical trip mechanism first"],
    "exp": "Two reasons: (1) If generator is connected to busbar at 113% speed, it generates 56.5 Hz (for 50 Hz) - all connected motors over-speed simultaneously \u2192 can damage equipment. (2) With ACB open, the machine can freely accelerate to trip speed without electrical load affecting the test. Always open ACB before testing overspeed.",
    "cat": "OS",
    "id": "T01A_172"
  },
  {
    "q": "Hunting in parallel generators refers to:",
    "a": "Oscillation of load between generators due to poor governor response",
    "opts": ["Searching for earth faults", "Oscillation of load between generators due to poor governor response", "Overloading one generator", "Voltage fluctuation"],
    "exp": "Hunting occurs when governor droop is insufficient or governors have different characteristics. Load swings back and forth between machines.",
    "cat": "LS",
    "id": "T01A_173"
  },
  {
    "q": "How does the load sharing panel enable load sharing between generators?",
    "a": "Provides cross-current compensation - generators with higher load feed signal to others to increase their load",
    "opts": ["Directly controls fuel injection", "Provides cross-current compensation - generators with higher load feed signal to others to increase their load", "Only monitors, does not control", "Controls both kW and kVAR automatically without droop"],
    "exp": "Cross-current compensation (circulating current method) allows reactive load sharing without droop - preferred for generators in permanent parallel operation.",
    "cat": "LS",
    "id": "T01A_174"
  },
  {
    "q": "What is 'reactive power' and how is it produced in an alternator?",
    "a": "Non-working power stored/released by reactive elements (inductors/capacitors); produced by increasing excitation",
    "opts": ["Power lost as heat", "Non-working power stored/released by reactive elements (inductors/capacitors); produced by increasing excitation", "Power consumed by resistance", "Same as active power"],
    "exp": "Reactive power (kVAR) circulates between source and reactive loads without doing work. Inductive loads absorb reactive power; alternator supplies it by being 'over-excited' (field current above normal).",
    "cat": "LS",
    "id": "T01A_175"
  },
  {
    "q": "In parallel generators, what controls ACTIVE POWER (kW) sharing?",
    "a": "Governor droop settings - governor controls prime mover speed and thus kW output",
    "opts": ["AVR voltage setting", "Governor droop settings - governor controls prime mover speed and thus kW output", "Frequency relay settings", "Preferential trip relay"],
    "exp": "kW (active power) sharing is purely a function of speed/frequency. The governor controls diesel engine fuel injection - more fuel = more torque = more kW. Droop setting ensures when one machine takes more kW, its speed slightly drops, prompting the governor to back off.",
    "cat": "LS",
    "id": "T01A_176"
  },
  {
    "q": "In parallel generators, what controls REACTIVE POWER (kVAR) and power factor sharing?",
    "a": "AVR droop settings - AVR controls excitation and thus reactive current sharing",
    "opts": ["Governor speed settings", "Load shedding relay", "AVR droop settings - AVR controls excitation and thus reactive current sharing", "Synchroscope position"],
    "exp": "kVAR (reactive power) is controlled by excitation (field current). More excitation \u2192 higher terminal voltage \u2192 machine pushes out more reactive current (inductive kVAR). AVR droop ensures equal kVAR sharing: as one machine takes more kVAR, its voltage slightly drops, signalling AVR to reduce excitation.",
    "cat": "LS",
    "id": "T01A_177"
  },
  {
    "q": "Generator G1 shows high kW output, G2 shows low kW. Both governors are set equally. What is the cause?",
    "a": "Governor droop settings differ between the two machines - one governor is more responsive than the other",
    "opts": ["AVR settings are different", "Generator rotor bearing friction is different", "Governor droop settings differ between the two machines - one governor is more responsive than the other", "Prime mover fuel viscosity is different"],
    "exp": "Equal governor settings should give equal kW in theory. But if droop settings differ (one at 3%, one at 5%), the lower-droop machine tends to take more load. Check and equalise droop first. If still unequal: adjust speed trimmer on the overloaded machine to reduce its speed slightly \u2192 load shifts to G2.",
    "cat": "LS",
    "id": "T01A_178"
  },
  {
    "q": "Generators G1 and G2 have equal kW output but G1 has much higher current than G2. What needs adjustment?",
    "a": "AVR droop on G1 needs to be increased - G1 is supplying too much reactive (kVAR) current",
    "opts": ["Governor droop on G1 needs adjustment", "AVR droop on G1 needs to be increased - G1 is supplying too much reactive (kVAR) current", "G1 has incorrect phase sequence", "G2 has a short circuit in field winding"],
    "exp": "Equal kW (real power) but unequal current means unequal kVAR (reactive power) sharing. Higher current on G1 = G1 more heavily excited = G1 supplying more reactive current. Fix: increase AVR droop on G1 (or decrease droop on G2) until currents equalise. Check: after adjustment, kW should remain equal.",
    "cat": "LS",
    "id": "T01A_179"
  },
  {
    "q": "Explain why adding load to one parallel generator automatically causes the other to share the load.",
    "a": "Governor droop: as load increases, engine speed droops \u2192 governor detects droop and increases fuel \u2192 both governors respond to the common frequency change",
    "opts": ["The ACB automatically reduces current to the loaded machine", "Governor droop: as load increases, engine speed droops \u2192 governor detects droop and increases fuel \u2192 both governors respond to the common frequency change", "AVR automatically reduces excitation on loaded machine", "Load is balanced by the busbar protection relay"],
    "exp": "Both generators share the same busbar frequency. Droop governors: if frequency drops (more load on busbar), both governors increase fuel \u2192 both machines produce more power \u2192 load is shared. The droop characteristic ensures stable sharing: if one machine tries to take too much load, its speed droops more, causing governor to back off slightly.",
    "cat": "LS",
    "id": "T01A_180"
  },
  {
    "q": "What is 'load transfer' and how is it done when taking a generator off-line?",
    "a": "Gradually reduce outgoing machine's governor (kW \u2192 0) then reduce AVR (kVAR \u2192 0 or small negative) before opening ACB",
    "opts": ["Directly open ACB - remaining generator takes load automatically", "Gradually reduce outgoing machine's governor (kW \u2192 0) then reduce AVR (kVAR \u2192 0 or small negative) before opening ACB", "Increase load on remaining generator first, then trip outgoing", "Use preferential trip to shed the outgoing generator's load"],
    "exp": "Sequence: (1) Increase governor on remaining machine to take load. (2) Reduce governor on outgoing machine until kW \u2192 near zero. (3) Reduce AVR on outgoing machine until its current \u2192 near zero (watch ammeter). (4) Verify outgoing machine shows near-zero current. (5) Open ACB. Never open ACB while outgoing machine is still carrying significant load - causes voltage surge.",
    "cat": "LS",
    "id": "T01A_181"
  },
  {
    "q": "What is 'hunting' in a parallel generator system?",
    "a": "Oscillation of load between generators - caused by incorrect governor droop settings or governor instability",
    "opts": ["Physical vibration of generator from unbalanced rotor", "Oscillation of load between generators - caused by incorrect governor droop settings or governor instability", "Hunting is normal during frequency transients", "High-frequency noise from AVR thyristors"],
    "exp": "Hunting: kW on G1 increases \u2192 G1 takes more busbar load \u2192 G2 reduces \u2192 G2 governor over-responds \u2192 G2 overshoots \u2192 G1 reduces \u2192 cycle repeats. Symptoms: wildly fluctuating ammeters and kW meters. Cause: governor isochronous mode (no droop) or improper droop settings. Fix: enable droop or re-tune governor stability.",
    "cat": "LS",
    "id": "T01A_182"
  },
  {
    "q": "What is 'isochronous' governor mode and why can't two generators run in parallel in this mode?",
    "a": "Isochronous = maintains exactly constant speed regardless of load; two isochronous governors fight each other \u2192 no stable load sharing",
    "opts": ["Isochronous means governor controls frequency only - suitable for parallel operation", "Isochronous = maintains exactly constant speed regardless of load; two isochronous governors fight each other \u2192 no stable load sharing", "Isochronous mode is required for parallel operation", "Isochronous governors automatically equalise kW sharing"],
    "exp": "Isochronous governor: if any load change occurs, it immediately restores exact rated speed. Two such governors in parallel: if machine A takes slightly more load and slows 0.1 RPM, its governor brings it back to exactly 1500 RPM - but now it's faster than machine B \u2192 takes even more load \u2192 unstable. Droop governors avoid this: speed droops slightly as load increases \u2192 natural stable equilibrium point.",
    "cat": "LS",
    "id": "T01A_183"
  },
  {
    "q": "Which type of excitation system eliminates all rotating electrical connections?",
    "a": "Brushless (static exciter with rotating rectifiers)",
    "opts": ["Slip ring and brush system", "Static exciter only", "Brushless (static exciter with rotating rectifiers)", "Permanent magnet exciter"],
    "exp": "Brushless system: AC exciter stator (fixed) \u2192 AC exciter rotor (rotates) \u2192 rotating rectifiers \u2192 main field (rotates). Zero rotating electrical contacts.",
    "cat": "EX",
    "id": "T01A_184"
  },
  {
    "q": "In a separately excited alternator, where does the field excitation come from?",
    "a": "External DC source supplied via slip rings",
    "opts": ["The alternator supplies its own field via rectifier", "External DC source supplied via slip rings", "The permanent magnets on the rotor", "A battery bank connected permanently"],
    "exp": "Separately excited means DC field current is supplied from an external source (battery, rectifier) through slip rings. Problem: requires slip rings and brushes, causing maintenance issues in marine environments.",
    "cat": "EX",
    "id": "T01A_185"
  },
  {
    "q": "In a self-excited shunt alternator, what provides the initial excitation?",
    "a": "Residual magnetism in the rotor core",
    "opts": ["A separate battery charger", "The PMG unit", "Residual magnetism in the rotor core", "Shore supply rectifier"],
    "exp": "Residual magnetism induces a small initial voltage \u2192 this feeds back to field winding \u2192 field builds up \u2192 voltage builds up. This 'bootstrap' process builds voltage from zero. If residual magnetism is lost, flashing is needed.",
    "cat": "EX",
    "id": "T01A_186"
  },
  {
    "q": "Name the THREE types of excitation systems used on marine alternators.",
    "a": "Separately excited, Self-excited (shunt), Brushless (PMG + exciter + rotating rectifiers)",
    "opts": ["AC excited, DC excited, Static excited", "Separately excited, Self-excited (shunt), Brushless (PMG + exciter + rotating rectifiers)", "Battery excited, Shore excited, Self-excited", "Permanent magnet, Thyristor controlled, Transformer excited"],
    "exp": "(1) Separately excited: external DC source via slip rings. (2) Self-excited shunt: output feeds back via rectifier to field. (3) Brushless: PMG \u2192 AVR \u2192 exciter stator \u2192 exciter rotor \u2192 rotating diodes \u2192 main field. Modern marine = brushless.",
    "cat": "EX",
    "id": "T01A_187"
  },
  {
    "q": "What is the main disadvantage of a separately excited alternator?",
    "a": "Requires slip rings and brushes for field supply - maintenance-intensive, prone to sparking",
    "opts": ["Cannot produce stable voltage", "Requires slip rings and brushes for field supply - maintenance-intensive, prone to sparking", "Output frequency varies with load", "Cannot be used on ships above 5000 GRT"],
    "exp": "Slip rings and brushes need regular maintenance: brush replacement, slip ring cleaning/polishing, pressure checking. In marine environment - humidity, vibration, salt air - brushes wear faster and can cause tracking/arcing. Brushless eliminates this entirely.",
    "cat": "EX",
    "id": "T01A_188"
  },
  {
    "q": "In a self-excited shunt alternator, what happens if you briefly disconnect the field?",
    "a": "Voltage collapses completely - no external source to restore it without residual magnetism or flashing",
    "opts": ["Voltage stays at 90% of rated", "Voltage collapses completely - no external source to restore it without residual magnetism or flashing", "Overcurrent relay trips", "Frequency drops proportionally"],
    "exp": "Self-excitation relies on the bootstrap cycle: residual magnetism \u2192 small voltage \u2192 field current \u2192 more voltage. Interrupt this cycle (field disconnect) and voltage collapses. PMG-based brushless machines are immune - PMG provides stable power to AVR regardless of main output voltage.",
    "cat": "EX",
    "id": "T01A_189"
  },
  {
    "q": "What voltage does the PMG typically output, and what is it used for?",
    "a": "100\u2013200V AC, used solely to power the AVR - completely independent of main alternator output",
    "opts": ["440V AC - matches main busbar", "100\u2013200V AC, used solely to power the AVR - completely independent of main alternator output", "12V DC - directly feeds the field winding", "48V DC - powers the AVR and ship's DC systems"],
    "exp": "PMG output voltage and frequency vary with speed, but since it's used to power the AVR (which can handle varying input), this is acceptable. Critical feature: PMG output is unaffected by main alternator faults, AVR faults, or load disturbances - providing a truly independent supply.",
    "cat": "EX",
    "id": "T01A_190"
  },
  {
    "q": "Can a brushless alternator self-excite if the PMG magnets demagnetise completely?",
    "a": "No - if PMG loses all magnetism, AVR has no supply and cannot excite the main field; machine won't build voltage",
    "opts": ["Yes - residual magnetism in main rotor will still build voltage", "No - if PMG loses all magnetism, AVR has no supply and cannot excite the main field; machine won't build voltage", "Yes - the self-excited bypass mode activates automatically", "No - but the battery charger provides backup excitation"],
    "exp": "In a brushless machine, the PMG is the sole supply to the AVR. If PMG permanent magnets lose their field (rare, but possible from severe shock or temperature), the AVR starves \u2192 no excitation \u2192 no output. Unlike a self-excited machine, there's no residual magnetism path to bootstrap. Machine must be workshop-repaired.",
    "cat": "EX",
    "id": "T01A_191"
  },
  {
    "q": "What does 'blackout' mean in ship's electrical context?",
    "a": "Complete loss of electrical power to the main switchboard",
    "opts": ["All lights off", "Complete loss of electrical power to the main switchboard", "Emergency generator fault", "Shore power disconnection"],
    "exp": "Total blackout: all generators trip. Emergency generator should start automatically within 45 seconds. ETO priorities: restore power, start emergency gen, restore main gen.",
    "cat": "BT",
    "id": "T01A_192"
  },
  {
    "q": "After a blackout, what is the correct sequence for power restoration?",
    "a": "Emergency gen starts \u2192 main engine cooling \u2192 start main gen \u2192 synchronise \u2192 restore loads in sequence",
    "opts": ["Start all generators simultaneously", "Emergency gen starts \u2192 main engine cooling \u2192 start main gen \u2192 synchronise \u2192 restore loads in sequence", "Restore shore power first", "Wait for engineer's order"],
    "exp": "Systematic restoration prevents overload. Emergency gen provides essential services first. Main gen started, synchronised, then loads restored in priority order.",
    "cat": "BT",
    "id": "T01A_193"
  },
  {
    "q": "What is the purpose of a blackout test?",
    "a": "Verify emergency generator auto-starts and supplies essential loads within 45 seconds",
    "opts": ["Test the fire detection system under power failure", "Verify emergency generator auto-starts and supplies essential loads within 45 seconds", "Check battery capacity for emergency lighting only", "Test the preferential trip relay sequence"],
    "exp": "SOLAS requires emergency generator to start automatically and supply essential services within 45 seconds of main power failure. The blackout test verifies this. Essential loads: emergency lighting, navigation lights, steering gear, fire pump, communications.",
    "cat": "BT",
    "id": "T01A_194"
  },
  {
    "q": "During a blackout test, what is the correct sequence of actions for the ETO?",
    "a": "Brief staff, inform bridge, verify emergency DG ready, trip main ACBs, time DG start, verify essential loads, restore main power, reconnect in sequence",
    "opts": ["Simply trip the main breaker and observe", "Brief staff, inform bridge, verify emergency DG ready, trip main ACBs, time DG start, verify essential loads, restore main power, reconnect in sequence", "Only the chief engineer performs blackout test - ETO observes", "Run emergency generator for 10 minutes without tripping main power"],
    "exp": "Safety first: always inform bridge (safe navigational situation), brief all staff (machinery spaces and bridge watchkeepers). Verify emergency DG has fuel, lube oil, coolant. Trip ACBs. Start stopwatch - DG must start and supply within 45 sec. Record results in log.",
    "cat": "BT",
    "id": "T01A_195"
  },
  {
    "q": "After a blackout, in what ORDER should loads be restored when bringing main generator back on line?",
    "a": "Navigation/steering first, then essential safety services, then machinery systems, lastly non-essential services",
    "opts": ["Restore all loads simultaneously to speed up recovery", "Largest loads first to test generator capacity", "Navigation/steering first, then essential safety services, then machinery systems, lastly non-essential services", "Non-essential loads first - leave critical loads on emergency generator longer"],
    "exp": "Sequence matters to avoid overloading the generator during recovery. Priority: (1) Navigation, bridge equipment, steering. (2) Fire detection, bilge pumps, safety systems. (3) Essential machinery (fuel pumps, cooling pumps). (4) Accommodation, galley, HVAC last. Introduce loads with time delays between groups.",
    "cat": "BT",
    "id": "T01A_196"
  },
  {
    "q": "What is the minimum time for the emergency generator to start and supply essential loads per SOLAS?",
    "a": "45 seconds",
    "opts": ["5 minutes", "2 minutes", "45 seconds", "10 minutes"],
    "exp": "SOLAS Ch. II-1 Reg 43: Emergency generator must start automatically and supply at least the emergency loads within 45 seconds of main power failure. This is why emergency generators are kept warm (pre-heaters) and tested regularly to ensure reliable starting.",
    "cat": "BT",
    "id": "T01A_197"
  },
  {
    "q": "What loads must the emergency generator supply within 45 seconds of blackout per SOLAS?",
    "a": "Emergency lighting, navigation lights, steering gear (for 30 min), fire pump, VHF/GMDSS, internal communications, alarms",
    "opts": ["Only emergency lighting - other loads connect via UPS", "Emergency lighting, navigation lights, steering gear (for 30 min), fire pump, VHF/GMDSS, internal communications, alarms", "All loads that were connected before blackout", "Only bridge equipment and navigation lights"],
    "exp": "SOLAS II-1 Reg 42: Emergency services include: (1) Emergency lighting - all muster stations, escape routes, accommodation. (2) Navigation lights and signals. (3) Steering gear - must supply for 30 min continuous. (4) Fire detection and alarm. (5) Fire pump. (6) VHF and GMDSS. (7) Internal communications. (8) Emergency bilge pump. (9) Ship's whistle.",
    "cat": "BT",
    "id": "T01A_198"
  },
  {
    "q": "The ETO times the emergency generator during a blackout test and it takes 52 seconds. Is this acceptable?",
    "a": "NO - SOLAS requires 45 seconds maximum; 52 seconds is non-compliant; deficiency must be investigated and corrected before next survey",
    "opts": ["Yes - 52 seconds is within the 60-second allowance", "NO - SOLAS requires 45 seconds maximum; 52 seconds is non-compliant; deficiency must be investigated and corrected before next survey", "Only the Class surveyor can decide acceptability", "52 seconds is acceptable for ships over 10 years old"],
    "exp": "45 seconds is an absolute SOLAS requirement with no tolerance. 52 seconds = non-compliance. Investigate: (1) Battery/pre-heating system - is DG warm enough? (2) Starter motor condition. (3) Fuel system - air lock? (4) Governor response speed. (5) Check starting battery state of charge. Correct fault, retest, and ensure acceptable before any port state control inspection.",
    "cat": "BT",
    "id": "T01A_199"
  },
  {
    "q": "Why must the bridge officer be informed BEFORE a blackout test is conducted?",
    "a": "Bridge must be in a safe navigational situation - blackout test must not be conducted during confined waters, high traffic, or bad weather",
    "opts": ["Bridge officer must operate the emergency generator", "Bridge must be in a safe navigational situation - blackout test must not be conducted during confined waters, high traffic, or bad weather", "The engine telegraph needs to be set to 'stop'", "Bridge controls the test timing via alarm panel"],
    "exp": "During the 45 seconds (minimum) between blackout and emergency power: steering is unpowered, radar may lose power, navigation lights are dark. In confined waters, heavy traffic, or poor visibility, this creates serious collision risk. Blackout test should only be conducted in open sea, good visibility, light traffic, with Master's permission.",
    "cat": "BT",
    "id": "T01A_200"
  },
  {
    "q": "A 440V motor receives only 280V. What happens to its torque?",
    "a": "Torque reduces proportional to voltage squared: (280/440)\u00b2 \u2248 0.40 - only ~40% of rated torque",
    "opts": ["Torque reduces proportionally to voltage: (280/440) = 63%", "Torque increases as motor tries harder", "Torque reduces proportional to voltage squared: (280/440)\u00b2 \u2248 0.40 - only ~40% of rated torque", "No change in torque - only speed changes"],
    "exp": "Torque \u221d V\u00b2. This is because torque depends on both the field strength and armature current - both reduced at lower voltage. With only 40% torque, an under loaded motor may run slowly; a normal-load motor will stall. This is a critical design consideration for motor starting.",
    "cat": "FT",
    "id": "T01A_201"
  },
  {
    "q": "Alternator is running but output voltage is 390V instead of 440V. Governor and speed are correct. What are the possible causes?",
    "a": "Low excitation: AVR setpoint too low, AVR fault, PMG output low, partial field winding fault, rotating diode failure",
    "opts": ["Overloaded generator - reduce load", "Low excitation: AVR setpoint too low, AVR fault, PMG output low, partial field winding fault, rotating diode failure", "Wrong phase rotation", "Stator winding short circuit"],
    "exp": "Low voltage with correct speed = insufficient excitation. Systematic check: (1) Adjust voltage trimmer - maybe setpoint is wrong. (2) Check AVR input (PMG) - is PMG giving correct output? (3) Measure AVR output to exciter field. (4) Check rotating diodes with stroboscope. (5) Measure field winding resistance - partial short reduces field. (6) Check for excessive load (low PF load can reduce voltage if AVR is at limit).",
    "cat": "FT",
    "id": "T01A_202"
  },
  {
    "q": "A 440V motor on a ship receives 380V due to voltage dip. What is the effect on motor torque and current?",
    "a": "Torque \u221d V\u00b2: reduces to (380/440)\u00b2 = 0.745 \u2192 74.5% rated torque; current rises to compensate, risking thermal damage",
    "opts": ["Torque increases to compensate for lower voltage", "Torque \u221d V\u00b2: reduces to (380/440)\u00b2 = 0.745 \u2192 74.5% rated torque; current rises to compensate, risking thermal damage", "No change - motor adjusts automatically", "Speed drops 13.6% with no change in current"],
    "exp": "(380/440)\u00b2 = 0.745 = 74.5% rated torque. If motor is loaded near full torque: torque deficit \u2192 increased slip \u2192 more current \u2192 more heat. The thermal protection (overload relay) is now more critical. For starting: motor start torque (proportional to V\u00b2) also reduced by 25.5% - large motors may fail to start if connected load has high starting torque requirement.",
    "cat": "FT",
    "id": "T01A_203"
  },
  {
    "q": "Alternator output current is unbalanced - R phase 200A, Y phase 200A, B phase 120A. What is the likely cause?",
    "a": "Unbalanced load between phases, or B phase stator winding partial fault, or B phase CT fault (if readings are from meters)",
    "opts": ["Governor is hunting - causing current oscillation", "Unbalanced load between phases, or B phase stator winding partial fault, or B phase CT fault (if readings are from meters)", "Normal variation - alternators always have some current imbalance", "Reverse power on B phase due to incorrect synchronisation"],
    "exp": "Unbalanced 3-phase current: (1) Unbalanced load - most common: single-phase loads, unequally distributed. (2) If all loads seem balanced: check if it's a metering fault (B phase CT open circuit shows zero, not 120A). (3) Winding fault on B phase - would also cause voltage unbalance. Check: measure line voltages - if balanced, likely load issue. If voltages also unbalanced \u2192 internal winding problem.",
    "cat": "FT",
    "id": "T01A_204"
  },
  {
    "q": "An alternator trips on differential protection while running at 75% load. What fault does this indicate?",
    "a": "Internal fault in the stator winding - turn-to-turn short, phase-to-earth, or phase-to-phase inside the machine",
    "opts": ["External short circuit on the busbar", "Internal fault in the stator winding - turn-to-turn short, phase-to-earth, or phase-to-phase inside the machine", "Reverse power - prime mover has stalled", "Earth fault on connected equipment"],
    "exp": "Differential relay ONLY operates for faults within the protected zone (between the CTs at each end of stator winding). External faults (busbar shorts, cable faults) would be seen equally by both CTs \u2192 no differential \u2192 relay doesn't operate. Differential trip \u2192 internal fault. Machine must be shut down, isolated, and inspected/meggered before return to service.",
    "cat": "FT",
    "id": "T01A_205"
  },
  {
    "q": "What does it mean when an alternator 'loses excitation' while running in parallel?",
    "a": "Field current drops to zero - machine de-excites, loses synchronism, operates as induction generator absorbing reactive power",
    "opts": ["Governor fails and machine over-speeds", "Field current drops to zero - machine de-excites, loses synchronism, operates as induction generator absorbing reactive power", "Stator winding open circuits in all three phases", "Reverse power relay trips due to high load"],
    "exp": "Sequence: AVR or exciter fault \u2192 field current drops \u2192 rotor magnetism collapses \u2192 machine cannot maintain synchronism \u2192 it slips poles \u2192 now runs as induction generator (asynchronously). In this mode: absorbs reactive power from busbar \u2192 busbar voltage drops. Detectable: machine's power factor meter goes leading/capacitive, current drops then may fluctuate. Loss-of-excitation relay (or UV relay) should trip.",
    "cat": "FT",
    "id": "T01A_206"
  },
  {
    "q": "Three-phase voltage is 440V but single-phase measurements show R-N=254V, Y-N=254V, B-N=180V. What fault does this indicate?",
    "a": "B-phase has a partial winding fault - lower B-phase stator winding",
    "opts": ["Normal variation - phase-to-neutral voltages can differ", "B-phase has a partial winding fault - lower B-phase stator winding", "Earth fault on B phase equipment", "Governor hunting causing frequency variation on B phase"],
    "exp": "Balanced 3-phase: all phase-to-neutral voltages should be 440/\u221a3 = 254V. R=254, Y=254, B=180 \u2192 B-phase voltage low. This indicates reduced B-phase EMF, likely: (1) Partial turn-to-turn short in B-phase stator winding (effective turns reduced \u2192 EMF reduced). (2) Check: is B-phase terminal connection loose? (3) If winding fault confirmed \u2192 machine off-line for rewinding of B phase.",
    "cat": "FT",
    "id": "T01A_207"
  },
  {
    "q": "What causes pitting marks on alternator slip rings?",
    "a": "High current sparking from worn, misaligned or incorrect grade brushes; contamination on ring surface",
    "opts": ["Excessive lubrication causing surface erosion", "High current sparking from worn, misaligned or incorrect grade brushes; contamination on ring surface", "Normal wear - pitting is expected and acceptable", "Overvoltage from AVR malfunction"],
    "exp": "Causes: (1) Brush pressure incorrect - too low allows bouncing (sparking), too high causes excessive wear. (2) Wrong brush grade - not matched to ring material. (3) Contamination - oil, water, carbon dust. (4) Mechanical misalignment - eccentric running. All cause arcing \u2192 pitting.",
    "cat": "SR",
    "id": "T01A_208"
  },
  {
    "q": "What is the correct brush pressure range for slip ring brushes?",
    "a": "Typically 150\u2013200 g/cm\u00b2",
    "opts": ["As tight as possible to ensure good contact", "10\u201350 g/cm\u00b2", "Typically 150\u2013200 g/cm\u00b2", "500\u2013800 g/cm\u00b2 for high current applications"],
    "exp": "Too low pressure: brush bounces \u2192 arcing \u2192 pitting \u2192 more resistance \u2192 more heat \u2192 brush burns. Too high pressure: excessive friction \u2192 overheating \u2192 rapid brush wear \u2192 brush dust contamination. 150\u2013200 g/cm\u00b2 is the standard - check with a spring balance gauge.",
    "cat": "SR",
    "id": "T01A_209"
  },
  {
    "q": "How do you correct slip ring pitting while the machine is running?",
    "a": "Use fine emery cloth held in an insulated holder to lightly dress the surface - reduce load to minimum first",
    "opts": ["Machine must always be stopped before any slip ring work", "Remove slip ring cover and polish by hand", "Use fine emery cloth held in an insulated holder to lightly dress the surface - reduce load to minimum first", "Apply conductive paste to fill in the pits"],
    "exp": "Minor pitting can be dressed in-service: reduce load, use fine emery cloth on an insulated stick/holder (NEVER bare hands near live slip rings). This smooths the surface, improving contact. Check afterward: smooth bright contact surface, sparking subsided. Severe pitting: machine lathe in drydock.",
    "cat": "SR",
    "id": "T01A_210"
  },
  {
    "q": "What are the signs that an alternator brush is wearing too quickly?",
    "a": "Frequent brush replacement needed, excessive brush dust, sparking at slip ring, high brush temperature",
    "opts": ["Brush sparking only in UMS mode", "Frequent brush replacement needed, excessive brush dust, sparking at slip ring, high brush temperature", "Brush wears faster in tropical climates - normal", "Rapid wear indicates wrong field current - reduce excitation"],
    "exp": "Too rapid brush wear indicates: (1) Excessive brush pressure - increases friction wear. (2) Wrong brush grade - too soft wears fast. (3) Slip ring surface rough/eccentric - mechanical wear. (4) High humidity causing electrochemical corrosion. (5) Current density too high - use larger brush or multiple brushes. Investigate before fitting new brush - root cause must be resolved.",
    "cat": "SR",
    "id": "T01A_211"
  },
  {
    "q": "How do you check brush pressure on a slip ring brush?",
    "a": "Use a spring balance gauge - hook under the brush holder spring, read force while brush is lifted slightly off ring",
    "opts": ["Press with thumb - should feel firm but not hard", "Use a spring balance gauge - hook under the brush holder spring, read force while brush is lifted slightly off ring", "Measure brush current with clamp meter - infer pressure", "Tap brush holder - if it bounces, pressure is too low"],
    "exp": "Spring balance method: (1) Machine running or stopped. (2) Hook spring balance under brush holder spring. (3) Lift until brush just separates from slip ring. (4) Read force at separation point. (5) Compare to spec (typically 150-200 g/cm\u00b2). Too low \u2192 adjust spring or replace. Too high \u2192 loosen spring. Log reading.",
    "cat": "SR",
    "id": "T01A_212"
  },
  {
    "q": "After dressing slip ring pitting with emery cloth, how do you verify the repair was successful?",
    "a": "Check contact surface is smooth and bright; observe sparking is reduced/eliminated; monitor brush temperature for 30 min",
    "opts": ["Megger test the slip ring to earth", "Check contact surface is smooth and bright; observe sparking is reduced/eliminated; monitor brush temperature for 30 min", "Take the machine off-load and measure field resistance", "Install new brushes - old brushes become contaminated from pitting"],
    "exp": "Post-dressing checks: (1) Visual - slip ring surface should be smooth, bright (not glazed or rough). A thin film of brush 'patina' is acceptable. (2) Electrical - sparking at contact should stop. (3) Thermal - brush temperature at normal load should be within limits. (4) If pitting returns quickly \u2192 root cause not addressed (pressure, grade, contamination).",
    "cat": "SR",
    "id": "T01A_213"
  },
  {
    "q": "What is 'electrical glazing' on a slip ring and what causes it?",
    "a": "A hard, shiny, poorly-conducting oxide/graphite film on the slip ring surface - caused by very low current density or wrong brush grade",
    "opts": ["Normal - glazing is the desired patina for good contact", "A hard, shiny, poorly-conducting oxide/graphite film on the slip ring surface - caused by very low current density or wrong brush grade", "Glazing is a sign of good lubrication", "Glazing occurs from excessive current density"],
    "exp": "Some graphite patina on slip rings is good - it reduces friction and improves contact. But excessive glazing (hard, dark, non-conducting film) blocks current \u2192 increased contact resistance \u2192 heating \u2192 more arcing \u2192 more pitting. Causes: insufficient load current density, wrong brush compound, dry conditions. Fix: lightly dress with fine emery cloth to expose clean copper.",
    "cat": "SR",
    "id": "T01A_214"
  },
  {
    "q": "What is the difference between the emergency generator and the emergency battery system?",
    "a": "Emergency battery provides instant power for <30 min; emergency generator provides sustained power for 18/36 hours after up to 45s delay",
    "opts": ["They are the same system with different starting modes", "Emergency battery provides instant power for <30 min; emergency generator provides sustained power for 18/36 hours after up to 45s delay", "Emergency generator only supplies batteries - batteries supply loads", "Batteries are for radio only; generator is for propulsion"],
    "exp": "Emergency battery (transitional): supplies certain loads INSTANTLY and CONTINUOUSLY during the 45 seconds before DG starts - typically: UPS for navigation systems, battery-backed emergency lighting (shedding), EPIRB. Emergency generator: starts within 45 seconds and provides sustained supply for 18h (pax) or 36h (cargo). Both are required by SOLAS.",
    "cat": "EM",
    "id": "T01A_215"
  },
  {
    "q": "The emergency generator fails to auto-start during a blackout. What manual procedure do you follow?",
    "a": "Go to emergency generator room, check fuel/oil, attempt local manual start, transfer loads manually to emergency switchboard",
    "opts": ["Wait for shore power - manual start is not permitted", "Go to emergency generator room, check fuel/oil, attempt local manual start, transfer loads manually to emergency switchboard", "Send distress signal - blackout is an emergency requiring rescue", "Use battery-only power indefinitely until auto-start problem resolved"],
    "exp": "Procedure: (1) Go to emergency generator space immediately. (2) Check fuel level, oil pressure. (3) Check battery/starting system. (4) Attempt local manual start. (5) If started manually: manually close emergency switchboard breakers in correct priority order. (6) Inform bridge and log. (7) Investigate auto-start failure (starting battery, auto-start relay, fuel solenoid). (8) Repair before next entry to any port.",
    "cat": "EM",
    "id": "T01A_216"
  },
  {
    "q": "What are the minimum acceptable tests for the emergency generator per CLASS requirements?",
    "a": "Monthly: running test under load for minimum 1 hour; Annual: full blackout test verifying 45-second start",
    "opts": ["Weekly: visual check only; Annual: full start test", "Monthly: running test under load for minimum 1 hour; Annual: full blackout test verifying 45-second start", "Quarterly: start test; every 5 years: full blackout test", "Only when surveyor is onboard"],
    "exp": "Typical class requirements: (1) Monthly: start and run at load for minimum 1 hour - checks starting system, governor, AVR, and sustained running. (2) Annual (or at surveyor): full blackout test - trip main switchboard, verify auto-start within 45 seconds, verify essential loads fed. (3) Log all tests with date, duration, result. (4) Deficiencies must be repaired and retested.",
    "cat": "EM",
    "id": "T01A_217"
  },
  {
    "q": "What is the primary reason an alternator is rated in kVA rather than kW?",
    "a": "Generator winding heating depends on current (kVA), regardless of the load's power factor",
    "opts": ["kW rating cannot be calculated for alternating current", "kVA determines the active power output directly", "kVA accounts for the mechanical losses in the prime mover", "Generator winding heating depends on current (kVA), regardless of the load's power factor"],
    "exp": "Generator winding heating depends on CURRENT flowing, which is determined by kVA (apparent power), not kW (active power). Same kVA causes same current and same winding temperature regardless of load power factor. Rating in kVA protects the machine",
    "cat": "WP",
    "id": "T01A_218"
  },
  {
    "q": "Why is the armature winding placed on the stationary stator while the field winding is placed on the rotating rotor?",
    "a": "To allow high-current, high-voltage output to be taken directly without the need for slip rings",
    "opts": ["To prevent residual magnetism from being lost", "To allow high-current, high-voltage output to be taken directly without the need for slip rings", "Because the prime mover can only drive a DC field", "Because stationary conductors cannot produce a rotating magnetic field"],
    "exp": "High voltage output (e.g., 440V, 6.6kV) is taken from the stationary stator, so no slip rings are needed for heavy current output Low DC excitation current is supplied to the rotor, which is much safer",
    "cat": "WP",
    "id": "T01A_219"
  },
  {
    "q": "Calculate the frequency of a 6-pole marine alternator driven by a diesel engine at 1000 RPM.",
    "a": "50 Hz",
    "opts": ["50 Hz", "120 Hz", "60 Hz", "400 Hz"],
    "exp": "The formula for frequency is f = (P x N) / 120, where P = number of poles and N = speed in RPM Therefore, f = (6 x 1000) / 120 = 50 Hz",
    "cat": "WP",
    "id": "T01A_220"
  },
  {
    "q": "Which of the following excitation systems relies on a thyristor-controlled rectifier to supply DC directly to the field via slip rings from the stator output?",
    "a": "Static Excitation",
    "opts": ["Separately Excited", "Static Excitation", "Self-Excited Shunt", "Brushless Excitation"],
    "exp": "Static Excitation uses a thyristor-controlled rectifier to supply DC directly to the field via slip rings from the stator output It is known for its fast response and is used on some HV generators",
    "cat": "EX",
    "id": "T01A_221"
  },
  {
    "q": "In a brushless alternator system, what is the 'reversed' construction feature of the Main Exciter?",
    "a": "The field winding is on the stator (stationary) and the armature winding is on the rotor (rotating)",
    "opts": ["The armature generates DC instead of AC", "The permanent magnets are located on the stator instead of the rotor", "It takes power from the main alternator rather than the PMG", "The field winding is on the stator (stationary) and the armature winding is on the rotor (rotating)"],
    "exp": "The main exciter features reversed construction: the field winding is on the stator (fed DC from the AVR) and the armature winding is on the rotor (produces 3-phase AC) This allows the output to be taken directly on the rotor shaft",
    "cat": "BL",
    "id": "T01A_222"
  },
  {
    "q": "What is the complete electrical flow path in a marine brushless alternator?",
    "a": "PMG \u2192 AVR \u2192 Exciter field (stator) \u2192 Exciter armature (rotor) AC \u2192 Rotating rectifiers \u2192 DC \u2192 Main field (rotor) \u2192 Main armature (stator) \u2192 Output",
    "opts": ["AVR \u2192 PMG \u2192 Rotating rectifiers \u2192 Exciter field (rotor) \u2192 Main field (stator) \u2192 Output", "Exciter armature \u2192 AVR \u2192 Rotating rectifiers \u2192 PMG \u2192 Main field (rotor) \u2192 Output", "Rotating rectifiers \u2192 PMG \u2192 Exciter field (stator) \u2192 AVR \u2192 Main field (rotor) \u2192 Output", "PMG \u2192 AVR \u2192 Exciter field (stator) \u2192 Exciter armature (rotor) AC \u2192 Rotating rectifiers \u2192 DC \u2192 Main field (rotor) \u2192 Main armature (stator) \u2192 Output"],
    "exp": "The complete flow is: PMG (shaft) \u2192 AC to AVR \u2192 AVR controls DC \u2192 Exciter field (stator) \u2192 Exciter armature (rotor) AC \u2192 Rotating rectifiers \u2192 DC \u2192 Main field (rotor) \u2192 Main armature (stator) \u2192 3-phase AC output",
    "cat": "BL",
    "id": "T01A_223"
  },
  {
    "q": "While running a brushless alternator, one of the rotating rectifier diodes fails OPEN circuit. What is the immediate symptom?",
    "a": "Unbalanced DC to main field causing voltage fluctuation and a 15-20% drop in output voltage",
    "opts": ["Unbalanced DC to main field causing voltage fluctuation and a 15-20% drop in output voltage", "AC component in the field current causing severe rotor overheating", "Overcurrent relay trips instantly", "Complete loss of alternator output voltage"],
    "exp": "One open-circuit diode means one phase of the exciter 3-phase AC output is not rectified, leading to unbalanced DC to the main field This results in uneven field current, voltage fluctuation, and a possible output voltage reduction of approximately 15-20%",
    "cat": "BL",
    "id": "T01A_224"
  },
  {
    "q": "Why is a SHORT circuit diode in a rotating rectifier considered more dangerous than an open circuit diode?",
    "a": "It allows reverse AC current to enter the DC field, causing severe waveform distortion and excessive heating that can burn out the winding",
    "opts": ["It immediately causes a complete blackout", "It trips the preferential trip relay prematurely", "It causes the PMG to demagnetize permanently", "It allows reverse AC current to enter the DC field, causing severe waveform distortion and excessive heating that can burn out the winding"],
    "exp": "A shorted diode allows current to flow in the reverse direction, introducing an AC component into the DC field current This causes excessive heat in the field winding, severe voltage fluctuation, and possible winding burnout if not detected quickly",
    "cat": "BL",
    "id": "T01A_225"
  },
  {
    "q": "According to SOLAS Chapter II-1, what is the maximum permissible transient voltage excursion during a sudden load change?",
    "a": "\u00b120% of rated voltage, recovering to within \u00b13% in not more than 1.5 seconds",
    "opts": ["\u00b120% of rated voltage, recovering to within \u00b13% in not more than 1.5 seconds", "\u00b12.5% of rated voltage, recovering instantly", "\u00b15% of rated voltage, recovering to within \u00b11% in not more than 5 seconds", "\u00b110% of rated voltage, recovering to within \u00b12.5% in not more than 1.5 seconds"],
    "exp": "Under SOLAS Ch. II-1, Part D, transient voltage must not exceed \u00b120% of rated voltage during a sudden load change, and it must recover to within \u00b13% of rated in not more than 1.5 seconds (Note: Gap additions also mention an AVR specific test of \u00b110% transient excursion recovering to \u00b12.5%, but the core SOLAS Ch. II-1 rule is \u00b120% / \u00b13% ).",
    "cat": "SOL",
    "id": "T01A_226"
  },
  {
    "q": "Why MUST the Automatic Voltage Regulator (AVR) be disconnected before performing an Insulation Resistance (Megger) test on an alternator?",
    "a": "The high DC test voltage (500V-1000V) will permanently damage the sensitive semiconductor components in the AVR",
    "opts": ["To prevent the AVR from automatically starting the prime mover", "The high DC test voltage (500V-1000V) will permanently damage the sensitive semiconductor components in the AVR", "To ensure the PMG retains its residual magnetism", "The AVR will absorb the test current and yield a reading of zero ohms"],
    "exp": "The AVR contains sensitive semiconductor components (thyristors, transistors, capacitors) The high DC voltage applied by a megger (500V or 2500V) will permanently damage these components, and it may also back-feed into the winding giving a false reading",
    "cat": "AVR",
    "id": "T01A_227"
  },
  {
    "q": "Which AVR potentiometer controls the rate of voltage build-up during starting to prevent an overvoltage spike?",
    "a": "Soft Start",
    "opts": ["Voltage Adjust", "Droop", "Soft Start", "Stability"],
    "exp": "The Soft Start trimmer controls the rate of voltage build-up during starting, which prevents an overvoltage spike",
    "cat": "AVR",
    "id": "T01A_228"
  },
  {
    "q": "What happens if a junior engineer closes the generator Air Circuit Breaker (ACB) when the synchroscope pointer is exactly at the 6 o'clock position?",
    "a": "Catastrophic circulating currents occur, causing severe mechanical shock and possible winding burnout",
    "opts": ["Catastrophic circulating currents occur, causing severe mechanical shock and possible winding burnout", "The AVR automatically adjusts the voltage to compensate for the 180-degree phase shift", "The preferential trip relay sheds non-essential loads", "The generator seamlessly synchronizes with the busbar"],
    "exp": "The 6 o'clock position indicates the generators are 180 degrees out of phase Closing the ACB here causes catastrophic consequences: huge circulating current, severe mechanical shock to the coupling, and possible damage to alternator windings and the prime mover",
    "cat": "SY",
    "id": "T01A_229"
  },
  {
    "q": "When synchronizing a generator using a synchroscope, why is the ACB closed 'just before 12 o'clock' (rotating slowly clockwise)?",
    "a": "To compensate for the mechanical closing time of the ACB, ensuring the incoming generator takes a slight active load and does not get motored",
    "opts": ["To prevent the synchroscope from burning out", "To ensure the reactive power (kVAR) matches the busbar perfectly", "Because the 12 o'clock position represents a 180-degree phase difference", "To compensate for the mechanical closing time of the ACB, ensuring the incoming generator takes a slight active load and does not get motored"],
    "exp": "The mechanical closing time of an ACB is approximately 50-100ms Closing slightly early (just before 12 o'clock with a slow clockwise rotation indicating a slightly higher frequency) compensates for this delay. It ensures the incoming generator takes a slight active load immediately and is not motored by the busbar",
    "cat": "SY",
    "id": "T01A_230"
  },
  {
    "q": "During parallel operation, Generator 1 shows 600 kW and Generator 2 shows 200 kW, though both have equal capacity. How should the ETO correct this?",
    "a": "Adjust the governor speed trimmers: increase fuel to Gen 2 while decreasing fuel to Gen 1 until kW meters balance",
    "opts": ["Adjust the AVR droop trimmers: increase voltage on Gen 2 while decreasing Gen 1", "Increase the air gap on Generator 1 to reduce its output", "Adjust the governor speed trimmers: increase fuel to Gen 2 while decreasing fuel to Gen 1 until kW meters balance", "Trip Generator 2 and flash its residual magnetism"],
    "exp": "Active power (kW) sharing is controlled by the governor Unequal kW indicates governor settings are not balanced. The action is to check droop settings, then adjust the governor of the less-loaded generator (increase fuel/speed) while simultaneously reducing the governor of the more-loaded generator until the kW meters balance",
    "cat": "LS",
    "id": "T01A_231"
  },
  {
    "q": "Two generators in parallel have equal kW output, but Generator A is drawing significantly more current than Generator B. What is the cause and remedy?",
    "a": "Unequal reactive (kVAR) load sharing; adjust the AVR voltage trimmers to balance the current",
    "opts": ["Unequal reactive (kVAR) load sharing; adjust the AVR voltage trimmers to balance the current", "Loss of residual magnetism; isolate and flash Generator A", "Phase sequence mismatch; swap two phases on Generator B", "Unequal active (kW) load sharing; adjust the governor speed trimmers"],
    "exp": "Equal kW but different current means unequal reactive (kVAR) sharing, meaning one generator is supplying more reactive current than the other This is an AVR issue. The remedy is to adjust the AVR droop/voltage trimmers to balance the ammeters and kVAR meters",
    "cat": "LS",
    "id": "T01A_232"
  },
  {
    "q": "What is the typical setting for the Reverse Power Relay on a marine alternator?",
    "a": "5-10% of rated kW in the reverse direction with a 3-5 second time delay",
    "opts": ["105-110% of rated current with IDMT characteristic", "5-10% of rated kW in the reverse direction with a 3-5 second time delay", "90% of maximum load capacity before shedding", "10-20% of rated current differential threshold"],
    "exp": "The Reverse Power Relay trips when the generator absorbs power from the busbar (motoring) Its setting is typically 5-10% of rated kW in the reverse direction with a time delay of 3-5 seconds",
    "cat": "PR",
    "id": "T01A_233"
  },
  {
    "q": "Which alternator protection device acts INSTANTANEOUSLY with no time delay to isolate the machine during an internal winding fault?",
    "a": "Differential Relay",
    "opts": ["Reverse Power Relay", "Overcurrent Relay (OCR)", "Differential Relay", "Preferential Trip"],
    "exp": "The Differential Relay compares current at both ends of the stator winding It trips on an internal winding fault instantaneously, meaning there is no time delay",
    "cat": "PR",
    "id": "T01A_234"
  },
  {
    "q": "What is the function of a 'dashpot' in a Preferential Trip (Load Shedding) relay?",
    "a": "It is a pneumatic or hydraulic time delay device that provides a specific time interval between load shedding stages",
    "opts": ["It suppresses voltage transients during diode failure", "It is a magnetic interlock that prevents the ACB from closing", "It is a pneumatic or hydraulic time delay device that provides a specific time interval between load shedding stages", "It is an electronic timer used exclusively in overspeed trips"],
    "exp": "A dashpot is a pneumatic or hydraulic time delay device used in the preferential trip relay It consists of a piston in a cylinder with an adjustable orifice, providing a time delay between load shedding stages so transient overloads don't cause unnecessary shedding",
    "cat": "PR",
    "id": "T01A_235"
  },
  {
    "q": "A surveyor asks how you would test the Overcurrent Relay (OCR) during a survey. What is the correct procedure?",
    "a": "Rack the ACB to TEST position, disconnect the CT secondary, and inject a calibrated AC current into the relay coils using a secondary injection test set",
    "opts": ["Rack the ACB to TEST position, disconnect the CT secondary, and inject a calibrated AC current into the relay coils using a secondary injection test set", "Press the mechanical trip push-button on the ACB fascia panel", "Overload the generator by starting all major pumps simultaneously and time the trip", "Inject a reverse power signal into the AVR test port and wait for the breaker to open"],
    "exp": "The OCR is tested using the secondary injection test method: rack the ACB to the TEST position (isolated from bus), disconnect the CT secondary, and connect a secondary injection test set to the relay current coils to inject calibrated AC current The trip time is recorded and compared with the IDMT curve",
    "cat": "PR",
    "id": "T01A_236"
  },
  {
    "q": "During routine maintenance, how is the air gap of an alternator measured?",
    "a": "Using a feeler gauge inserted through stator ventilation openings at a minimum of 4 positions (12, 3, 6, 9 o'clock) for each pole",
    "opts": ["By injecting a high-frequency AC signal and measuring stator reluctance", "Using a feeler gauge inserted through stator ventilation openings at a minimum of 4 positions (12, 3, 6, 9 o'clock) for each pole", "Using a digital micrometer attached to the slip rings", "By visually inspecting the alignment marks on the prime mover coupling"],
    "exp": "The air gap is measured using a feeler gauge inserted through ventilation openings in the stator frame Measurements are taken at a minimum of 4 positions for each pole: top (12), bottom (6), left (9), right (3) o'clock",
    "cat": "AG",
    "id": "T01A_237"
  },
  {
    "q": "What are the mechanical and electrical consequences if the measured alternator air gap is significantly UNEVEN around the rotor?",
    "a": "It causes unbalanced magnetic pull, leading to excessive vibration, noise, bearing wear, and potential hot spots in the stator",
    "opts": ["It triggers the reverse power relay due to fluctuating torque", "It causes unbalanced magnetic pull, leading to excessive vibration, noise, bearing wear, and potential hot spots in the stator", "It improves cooling efficiency but lowers the output voltage", "It causes the AVR to completely shut down the excitation field"],
    "exp": "An uneven air gap (eccentricity) creates an unbalanced magnetic pull This leads to vibration, noise, accelerated bearing wear, and hot spots in the stator due to uneven flux distribution",
    "cat": "AG",
    "id": "T01A_238"
  },
  {
    "q": "A newly rewound 440V alternator is received from a shore workshop. What is the MINIMUM acceptable Insulation Resistance (IR) value before commissioning?",
    "a": "1 Mohm, though for a new/rewound winding it should ideally be > 100 Mohms",
    "opts": ["100 ohms", "0.5 Mohms", "1000 Mohms absolute minimum", "1 Mohm, though for a new/rewound winding it should ideally be > 100 Mohms"],
    "exp": "For a 440V machine, the standard minimum acceptable IR is 1 Mohm However, for a newly rewound motor/alternator, a 500V megger test should typically yield a minimum of 100 Mohm",
    "cat": "MT",
    "id": "T01A_239"
  },
  {
    "q": "How can an ETO perform a simulated Overspeed Trip Test on a generator with an electronic governor without risking actual engine damage?",
    "a": "Disconnect the speed sensor and inject a simulated speed signal using a calibrator into the overspeed module until the relay activates",
    "opts": ["Disconnect the speed sensor and inject a simulated speed signal using a calibrator into the overspeed module until the relay activates", "Run the generator at full load and suddenly open the main ACB", "Short circuit the PT100 temperature sensors to force an emergency trip", "Manually push the fuel rack to maximum while the ACB is closed"],
    "exp": "Method 2 (Simulated) involves disconnecting the speed sensor signal, connecting a signal generator/calibrator to the overspeed module input, and gradually increasing the simulated speed signal until the overspeed relay activates This avoids the risk of actual engine overspeed",
    "cat": "OS",
    "id": "T01A_240"
  },
  {
    "q": "Under SOLAS regulations, what is the maximum time allowed for the emergency generator to auto-start and supply essential loads after a main power failure on a CARGO ship?",
    "a": "45 seconds",
    "opts": ["45 seconds", "10 seconds", "60 seconds", "30 seconds"],
    "exp": "SOLAS requires the emergency generator to auto-start and supply essential loads within 45 seconds for cargo ships, and 30 seconds for passenger ships",
    "cat": "EM",
    "id": "T01A_241"
  },
  {
    "q": "During a blackout recovery, why must auxiliary equipment (separators, cooling pumps, blowers) be started in sequence with time delays rather than all at once?",
    "a": "To prevent simultaneous starting current surges from overloading and tripping the main generator",
    "opts": ["Because the emergency generator cannot supply all auxiliary equipment at once", "To ensure the preferential trip dashpot has time to reset", "To prevent simultaneous starting current surges from overloading and tripping the main generator", "Because the AVR requires 2 minutes to stabilize the voltage output"],
    "exp": "Starting auxiliary equipment sequentially with time delays (typically 30 seconds to 2 minutes) prevents simultaneous starting current surges from overloading the generator",
    "cat": "BT",
    "id": "T01A_242"
  },
  {
    "q": "An alternator is running at rated speed but shows zero voltage. You suspect loss of residual magnetism. What is the correct procedure to 'flash' the field?",
    "a": "Run at rated speed, connect a 12V/24V battery (positive to positive, negative to negative) to the exciter field for 2-3 seconds, then check voltage buildup",
    "opts": ["Run at rated speed and swap any two phases on the main terminal box", "Stop the machine, connect a 220V AC supply to the stator for 5 minutes, then restart", "Run at rated speed, connect a 12V/24V battery (positive to positive, negative to negative) to the exciter field for 2-3 seconds, then check voltage buildup", "Short circuit the rotating diode bridge for exactly 5 seconds while running"],
    "exp": "Flashing is done by identifying the exciter field terminals, bringing the generator to rated speed, and connecting a 12V or 24V battery (strictly observing positive to positive, negative to negative polarity) for 2-3 seconds only The voltage should then build up on the voltmeter",
    "cat": "RM",
    "id": "T01A_243"
  },
  {
    "q": "What is the critical risk if the WRONG battery polarity is used during the flashing procedure?",
    "a": "It will imprint reversed residual magnetism, preventing the generator from producing the correct voltage",
    "opts": ["It will permanently short circuit the PMG permanent magnets", "It will immediately burn out the stator armature windings", "It will cause the prime mover to run in reverse", "It will imprint reversed residual magnetism, preventing the generator from producing the correct voltage"],
    "exp": "Polarity is critical. Using the wrong polarity during flashing will imprint reversed residual magnetism, and the generator will still not produce correct voltage If this happens, it must be re-flashed with the correct polarity",
    "cat": "RM",
    "id": "T01A_244"
  },
  {
    "q": "Before working on an alternator, how can you ensure the machine is completely electrically dead despite the presence of residual magnetism?",
    "a": "Open and lock out ACB, remove AVR supply, test with a voltage detector, and apply earth clamps to stator terminals to discharge residual charge",
    "opts": ["Flash the field with reverse polarity to cancel out the magnetism", "Remove the carbon brushes and wait 10 minutes for natural discharge", "Open and lock out ACB, remove AVR supply, test with a voltage detector, and apply earth clamps to stator terminals to discharge residual charge", "Simply open the ACB; the machine is automatically safe"],
    "exp": "Residual magnetism means a small voltage may be present even with zero field current and an open ACB To ensure safety: (1) Open and lockout ACB, (2) Remove AVR connection, (3) Use approved voltage detector, (4) Apply earth clamps to discharge any residual charge",
    "cat": "RM",
    "id": "T01A_245"
  },
  {
    "q": "Why is the main generator NEVER placed at the bottom platform (tank top level) of the engine room?",
    "a": "Due to high flooding risk, severe structural vibration, and SOLAS requirements for main electrical source protection",
    "opts": ["To keep the center of gravity of the vessel as high as possible", "Due to high flooding risk, severe structural vibration, and SOLAS requirements for main electrical source protection", "Because the tank top temperature is too low for Class F insulation", "Because the length of cables to the main switchboard would cause excessive voltage drop"],
    "exp": "Generators are not placed at tank top level because: (1) Flooding risk (bottom floods first), (2) SOLAS II-1/Reg 40 mandates protection against flooding, (3) Tank top has the highest vibration from the ME and propeller shaft, and (4) Overhead crane access is required for maintenance",
    "cat": "SOL",
    "id": "T01A_246"
  },
  {
    "q": "Due to a severe voltage dip, a 440V essential motor receives only 280V. What is the immediate physical effect on the motor's operating capability?",
    "a": "The motor's torque is reduced to roughly 40% of its rated value, which may cause it to stall under load",
    "opts": ["The motor automatically operates as an induction generator", "The motor draws less current to protect its windings", "The motor's torque remains unchanged but its speed drops proportionally", "The motor's torque is reduced to roughly 40% of its rated value, which may cause it to stall under load"],
    "exp": "Motor torque reduces as the square of the voltage ratio: (280/440)\u00b2 = 0.40 (or 40%). With only ~40% rated torque produced, the motor may fail to start or stall under load, and its current will rise 2-3x to compensate, posing a severe overheating risk",
    "cat": "FT",
    "id": "T01A_247"
  },
  {
    "q": "What happens if a crew member manually presses the 'CLOSE' button on the Air Circuit Breaker (ACB) of an IDLE, non-running generator connected to a live busbar?",
    "a": "The running generator back-feeds the idle machine, causing it to run as an induction motor until the reverse power relay trips",
    "opts": ["The AVR of the idle generator boosts voltage to match the busbar", "The idle generator instantly starts its prime mover automatically", "The running generator back-feeds the idle machine, causing it to run as an induction motor until the reverse power relay trips", "Nothing happens because the idle generator has zero voltage"],
    "exp": "An idle generator has no voltage. Closing its ACB causes the running generator to back-feed the idle generator's windings The idle machine then runs as an induction motor (motoring effect), drawing current from the busbar, until the reverse power relay detects the reverse flow and trips the ACB",
    "cat": "FT",
    "id": "T01A_248"
  },
  {
    "q": "During routine maintenance, pitting marks are observed on the alternator slip rings. What is the standard action to rectify minor pitting while the machine is running?",
    "a": "Reduce load to minimum and carefully use fine emery cloth held in an insulated holder to smooth the pits",
    "opts": ["Apply electrical contact cleaner directly to the slip ring at full load", "Reduce load to minimum and carefully use fine emery cloth held in an insulated holder to smooth the pits", "Shut down the machine immediately and machine the slip rings in a lathe", "Increase brush pressure to 800 g/cm\u00b2 to grind down the pits"],
    "exp": "For minor slip ring pitting, the action is to reduce the load to a minimum and use fine emery cloth (carefully, with an insulated holder) to smooth the pits while running Severe pitting requires the rings to be machined in a dry dock lathe",
    "cat": "SR",
    "id": "T01A_249"
  },
  {
    "q": "What is the correct brush pressure range for maintaining slip ring health on a marine alternator?",
    "a": "150\u2013200 g/cm\u00b2",
    "opts": ["150\u2013200 g/cm\u00b2", "As tight as the spring will physically allow", "500-600 g/cm\u00b2", "10-50 g/cm\u00b2"],
    "exp": "The correct brush pressure must typically be maintained at 150\u2013200 g/cm\u00b2 Too low causes sparking; too high causes excessive wear.",
    "cat": "SR",
    "id": "T01A_250"
  },
  {
    "q": "An alternator's winding temperature sensors (PT100) are triggering. At what approximate temperatures are the ALARM and TRIP setpoints typically configured?",
    "a": "Alarm at ~80\u00b0C, Trip at ~95\u00b0C",
    "opts": ["Alarm at ~60\u00b0C, Trip at ~75\u00b0C", "Alarm at ~120\u00b0C, Trip at ~155\u00b0C", "Alarm at ~155\u00b0C, Trip at ~180\u00b0C", "Alarm at ~80\u00b0C, Trip at ~95\u00b0C"],
    "exp": "For bearing and winding temperature utilizing PT100 sensors, the typical settings are an alarm at approximately 80\u00b0C and a trip at approximately 95\u00b0C (Note: Thermistor limits for Class F are 155\u00b0C ).",
    "cat": "PR",
    "id": "T01A_251"
  },
  {
    "q": "What is the fundamental working principle of a marine alternator?",
    "a": "Electromagnetic Induction (Faraday's Law)",
    "opts": ["Electromagnetic Induction (Faraday's Law)", "Piezoelectric Effect", "Capacitive Reactance", "Thermodynamic Expansion"],
    "exp": "Alternators work on Electromagnetic Induction (Faraday's Law). When a conductor moves relative to a magnetic field, an Electromotive Force (EMF) is induced in the conductor.",
    "cat": "WP",
    "id": "T01A_252"
  },
  {
    "q": "In a marine alternator, what is the primary function of the rotor?",
    "a": "It carries the field winding and creates a rotating magnetic field",
    "opts": ["It carries the field winding and creates a rotating magnetic field", "It carries the 3-phase armature winding to produce output power", "It rectifies the AC output into DC for the ship's busbar", "It acts as a permanent magnet for the main output"],
    "exp": "The rotor carries the field winding, which is excited by DC from the AVR. When driven by the prime mover, it creates the rotating magnetic field necessary to induce EMF in the stator.",
    "cat": "WP",
    "id": "T01A_253"
  },
  {
    "q": "What component in the alternator carries the 3-phase armature winding?",
    "a": "The Stator",
    "opts": ["The Stator", "The Rotor", "The Exciter", "The Slip Rings"],
    "exp": "The stator is the stationary part of the alternator that carries the 3-phase armature winding. Its stationary conductors are cut by the rotating magnetic field to produce the AC output.",
    "cat": "WP",
    "id": "T01A_254"
  },
  {
    "q": "Why is the high-voltage output taken from the stationary stator rather than the rotating rotor?",
    "a": "To avoid the need for slip rings to handle the heavy output current",
    "opts": ["To avoid the need for slip rings to handle the heavy output current", "Because the stator rotates faster than the rotor", "Because DC excitation must be handled by the stationary parts", "To increase the frequency of the generated AC power"],
    "exp": "Taking the high voltage/current output (e.g., 440V, 6.6kV) from the stationary stator means no slip rings and brushes are needed for the heavy current output, making the machine much safer and more reliable.",
    "cat": "WP",
    "id": "T01A_255"
  },
  {
    "q": "Which of the following best describes the DC excitation current supplied to the rotor via slip rings in a conventionally excited alternator?",
    "a": "It is a small current, making slip ring transfer much safer than transferring the main output",
    "opts": ["It is an AC current that gets rectified internally by the slip rings", "It is a small current, making slip ring transfer much safer than transferring the main output", "It is a high-voltage, high-current supply requiring heavy-duty brushes", "It is identical in magnitude to the output current"],
    "exp": "The DC excitation current supplied to the rotor is relatively small compared to the generator's main output. Transferring this small current via slip rings is much safer and more manageable.",
    "cat": "WP",
    "id": "T01A_256"
  },
  {
    "q": "According to Faraday's Law, what is the formula for the EMF induced in the stator?",
    "a": "EMF = N x d(phi)/dt",
    "opts": ["EMF = V / R", "EMF = N x d(phi)/dt", "EMF = P x N / 120", "EMF = I x R"],
    "exp": "By Faraday's law, the EMF induced in the stator conductors is equal to N x d(phi)/dt, where N is the number of turns and d(phi)/dt is the rate of change of magnetic flux.",
    "cat": "WP",
    "id": "T01A_257"
  },
  {
    "q": "To produce a balanced 3-phase AC output, how are the three stator windings physically arranged?",
    "a": "120 degrees apart",
    "opts": ["180 degrees apart", "360 degrees apart", "120 degrees apart", "90 degrees apart"],
    "exp": "The three stator windings are arranged 120 electrical degrees apart from each other, which produces a balanced 3-phase AC output as the rotating magnetic field cuts across them.",
    "cat": "WP",
    "id": "T01A_258"
  },
  {
    "q": "Why are alternators rated in kVA instead of kW?",
    "a": "Because generator heating depends on the current (kVA), not the active power (kW)",
    "opts": ["Because generator heating depends on the current (kVA), not the active power (kW)", "Because kVA accounts for the mechanical efficiency of the prime mover", "Because power factor fluctuates too much to calculate kW", "Because kW can only be measured in DC circuits"],
    "exp": "An alternator's rating is based on apparent power (kVA) because the heating of the generator windings depends on the total current flowing through them, regardless of the load's power factor. Rating in kVA protects the machine from thermal overload.",
    "cat": "WP",
    "id": "T01A_259"
  },
  {
    "q": "If a ship has a 500 kVA generator operating at a power factor (PF) of 0.8, what is the maximum useful active power?",
    "a": "400 kW",
    "opts": ["300 kW", "625 kW", "400 kW", "500 kW"],
    "exp": "Active power (kW) is calculated as: kW = kVA x PF. Therefore, 500 kVA x 0.8 = 400 kW of useful power.",
    "cat": "WP",
    "id": "T01A_260"
  },
  {
    "q": "Why are electric motors rated in kW while generators are rated in kVA?",
    "a": "Motors are rated by their useful mechanical active power output (kW)",
    "opts": ["Motors operate on DC, while generators operate on AC", "Motors do not suffer from thermal heating due to current", "Motors are rated by their useful mechanical active power output (kW)", "Generators have a constant power factor of 1.0"],
    "exp": "A motor is rated in kW because its rating represents the useful mechanical active power it can output at the shaft. A generator is rated in kVA because its limiting factor is the heat generated by the electrical current it supplies, which is independent of the power factor.",
    "cat": "WP",
    "id": "T01A_261"
  },
  {
    "q": "What is the formula used to calculate the frequency of an AC generator?",
    "a": "f = (P x N) / 120",
    "opts": ["f = (V x I) / P", "f = (P x N) / 120", "f = 120 / (P x N)", "f = (P x N) / 60"],
    "exp": "The frequency formula is f = (P x N) / 120, where 'f' is frequency in Hz, 'P' is the number of poles, and 'N' is the speed of the rotor in RPM.",
    "cat": "WP",
    "id": "T01A_262"
  },
  {
    "q": "Calculate the frequency of a 4-pole alternator running at 1500 RPM.",
    "a": "50 Hz",
    "opts": ["60 Hz", "120 Hz", "100 Hz", "50 Hz"],
    "exp": "Using the formula f = (P x N) / 120: f = (4 x 1500) / 120 = 6000 / 120 = 50 Hz.",
    "cat": "WP",
    "id": "T01A_263"
  },
  {
    "q": "If a ship's electrical system requires 60 Hz, at what speed must a 4-pole alternator be driven?",
    "a": "1800 RPM",
    "opts": ["3600 RPM", "1500 RPM", "1200 RPM", "1800 RPM"],
    "exp": "Rearranging the formula N = (120 x f) / P: N = (120 x 60) / 4 = 7200 / 4 = 1800 RPM.",
    "cat": "WP",
    "id": "T01A_264"
  },
  {
    "q": "Calculate the frequency of a 6-pole alternator running at 1000 RPM.",
    "a": "50 Hz",
    "opts": ["45 Hz", "120 Hz", "50 Hz", "60 Hz"],
    "exp": "Using the formula f = (P x N) / 120: f = (6 x 1000) / 120 = 6000 / 120 = 50 Hz.",
    "cat": "WP",
    "id": "T01A_265"
  },
  {
    "q": "What is the primary characteristic of a 'Separately Excited' alternator?",
    "a": "It uses an external DC source (like batteries or a rectifier) to supply the rotor field winding via slip rings",
    "opts": ["It uses an external DC source (like batteries or a rectifier) to supply the rotor field winding via slip rings", "It uses an internal PMG to excite the main stator", "It steps down its own output to feed the field winding", "It relies entirely on residual magnetism without any electrical input"],
    "exp": "A Separately Excited alternator takes its field excitation from a completely external DC source (such as battery banks or a separate rectifier) and feeds it to the rotor via slip rings and brushes.",
    "cat": "WP",
    "id": "T01A_266"
  },
  {
    "q": "What is a major disadvantage of a Separately Excited alternator in a marine environment?",
    "a": "It requires slip rings and brushes, making it maintenance-intensive",
    "opts": ["It is highly susceptible to loss of residual magnetism", "It cannot produce a 60 Hz output", "It cannot be controlled by an AVR", "It requires slip rings and brushes, making it maintenance-intensive"],
    "exp": "Separately excited alternators (and any brush-type alternators) require slip rings and carbon brushes. These components suffer from wear, require regular maintenance, and produce carbon dust, which is problematic in humid marine environments.",
    "cat": "WP",
    "id": "T01A_267"
  },
  {
    "q": "How does a 'Self-Excited Shunt' alternator obtain its field excitation?",
    "a": "The generator's own output is stepped down and rectified to supply its own field via slip rings",
    "opts": ["From an external battery bank connected to the stator", "By utilizing only the residual magnetism in the rotor core", "From a Permanent Magnet Generator (PMG) on the shaft", "The generator's own output is stepped down and rectified to supply its own field via slip rings"],
    "exp": "A self-excited shunt alternator 'bootstraps' its own voltage. It takes a portion of its own AC output, steps it down, rectifies it to DC, and feeds it back into its own field winding via slip rings.",
    "cat": "WP",
    "id": "T01A_268"
  },
  {
    "q": "What is absolutely necessary for a 'Self-Excited Shunt' alternator to begin generating voltage during start-up?",
    "a": "Initial residual magnetism in the rotor core",
    "opts": ["A fully charged external battery bank", "Initial residual magnetism in the rotor core", "A rotating diode bridge", "A Permanent Magnet Generator (PMG)"],
    "exp": "Because a self-excited machine relies on its own output to feed its field, it must have initial residual magnetism in the rotor core to generate the tiny initial voltage needed to start the feedback loop.",
    "cat": "WP",
    "id": "T01A_269"
  },
  {
    "q": "Which type of excitation system is the most common on modern ships?",
    "a": "Brushless Excitation",
    "opts": ["Brushless Excitation", "Static Excitation", "Separately Excited", "Self-Excited Shunt"],
    "exp": "Brushless Excitation is predominantly used on modern ships because it eliminates slip rings and brushes, offering high reliability and low maintenance.",
    "cat": "WP",
    "id": "T01A_270"
  },
  {
    "q": "What three machines are mounted on the same shaft in a Brushless Excitation system?",
    "a": "PMG, Exciter, and Main Alternator",
    "opts": ["AVR, PMG, and Main Alternator", "PMG, Exciter, and Main Alternator", "Stator, Rotor, and Exciter", "Exciter, Rotating Rectifiers, and AVR"],
    "exp": "The brushless excitation system consists of three distinct machines rotating on the same shaft: the Permanent Magnet Generator (PMG), the Main Exciter, and the Main Alternator.",
    "cat": "WP",
    "id": "T01A_271"
  },
  {
    "q": "What is the primary feature of 'Static Excitation'?",
    "a": "A thyristor-controlled rectifier supplies DC directly to the field via slip rings from the stator output",
    "opts": ["It requires a separate diesel engine to drive the exciter", "A thyristor-controlled rectifier supplies DC directly to the field via slip rings from the stator output", "It uses permanent magnets exclusively to generate the main field", "It eliminates the need for all moving parts in the generator"],
    "exp": "Static excitation uses a solid-state thyristor-controlled rectifier to convert the generator's stator output into DC, which is then fed directly to the rotor field via slip rings. It is known for a very fast response time.",
    "cat": "WP",
    "id": "T01A_272"
  },
  {
    "q": "Which type of excitation system is typically used on High Voltage (HV) generators due to its fast response?",
    "a": "Static Excitation",
    "opts": ["Induction Excitation", "Static Excitation", "Separately Excited", "Self-Excited Shunt"],
    "exp": "Static excitation is often used on some High Voltage (HV) generators because the thyristor-controlled rectifiers provide a very fast response to load changes.",
    "cat": "WP",
    "id": "T01A_273"
  },
  {
    "q": "What component is responsible for driving the rotor to spin in a marine generator set?",
    "a": "The prime mover (e.g., diesel engine)",
    "opts": ["The Permanent Magnet Generator (PMG)", "The AVR", "The prime mover (e.g., diesel engine)", "The stator armature"],
    "exp": "In the working sequence of an alternator, Step 2 states that the rotor spins because it is mechanically driven by the prime mover, which is typically a marine diesel engine.",
    "cat": "WP",
    "id": "T01A_274"
  },
  {
    "q": "During the normal working sequence of an alternator, what happens immediately after the rotor spins?",
    "a": "The rotating magnetic field cuts across the stationary stator conductors",
    "opts": ["The stator conductors begin to rotate in sync with the rotor", "The AVR automatically disconnects from the circuit", "The slip rings reverse the polarity of the DC field", "The rotating magnetic field cuts across the stationary stator conductors"],
    "exp": "According to the working sequence: Step 2: Rotor spins. Step 3: The rotating magnetic field cuts across the stator conductors. Step 4: EMF is induced.",
    "cat": "WP",
    "id": "T01A_275"
  },
  {
    "q": "What component determines the exact magnitude of DC excitation supplied to the rotor field winding during operation?",
    "a": "The Automatic Voltage Regulator (AVR)",
    "opts": ["The Automatic Voltage Regulator (AVR)", "The Slip Rings", "The Stator Winding Resistance", "The Prime Mover Governor"],
    "exp": "The field winding is excited by DC current that is precisely controlled and supplied by the AVR to maintain a constant output voltage under varying loads.",
    "cat": "WP",
    "id": "T01A_276"
  },
  {
    "q": "If an alternator is operating at a 1.0 power factor, what is the relationship between its useful kW and its kVA rating?",
    "a": "kW is exactly equal to the kVA rating",
    "opts": ["kW is greater than the kVA rating", "kW is 80% of the kVA rating", "kW is exactly equal to the kVA rating", "kVA rating becomes irrelevant"],
    "exp": "Since kW = kVA x PF, if the power factor (PF) is 1.0, then kW = kVA x 1.0. Therefore, the useful active power (kW) is exactly equal to the apparent power (kVA).",
    "cat": "WP",
    "id": "T01A_277"
  },
  {
    "q": "If an alternator's prime mover is running at 750 RPM to generate a 50 Hz output, how many poles does the alternator have?",
    "a": "8 poles",
    "opts": ["8 poles", "6 poles", "12 poles", "4 poles"],
    "exp": "Rearranging f = (P x N) / 120 gives P = (120 x f) / N. Therefore, P = (120 x 50) / 750 = 6000 / 750 = 8 poles.",
    "cat": "WP",
    "id": "T01A_278"
  },
  {
    "q": "Which physical quantity does the 'd(phi)/dt' term represent in Faraday's law of induction?",
    "a": "The rate of change of magnetic flux",
    "opts": ["The total current flowing in the stator", "The resistance of the field winding", "The physical speed of the rotor in RPM", "The rate of change of magnetic flux"],
    "exp": "In the formula EMF = N x d(phi)/dt, 'd(phi)/dt' represents the rate of change of magnetic flux over time as the rotating magnetic field cuts the stationary conductors.",
    "cat": "WP",
    "id": "T01A_279"
  },
  {
    "q": "What is the primary advantage of having NO slip rings and NO brushes in a brushless alternator?",
    "a": "It eliminates brush sparking and maintenance, making it safer for hazardous areas and highly reliable",
    "opts": ["It eliminates brush sparking and maintenance, making it safer for hazardous areas and highly reliable", "It increases the frequency of the generated voltage", "It allows the alternator to generate DC power directly from the stator", "It completely removes the need for an AVR"],
    "exp": "Because all transfer of electricity is done via induction and rotating rectifiers, there are no sliding contacts. This eliminates brush sparking (safe in hazardous areas), brush wear, and the need for slip ring maintenance.",
    "cat": "WP",
    "id": "T01A_280"
  },
  {
    "q": "For a constant kVA load on an alternator, what happens to the winding temperature if the power factor of the load changes?",
    "a": "The winding temperature remains the same because it depends on the kVA (current), not the power factor",
    "opts": ["The winding temperature remains the same because it depends on the kVA (current), not the power factor", "The winding temperature fluctuates directly with the active power (kW)", "The winding temperature decreases as the power factor increases", "The winding temperature increases as the power factor decreases"],
    "exp": "Generator heating depends on the current flowing through it. Current is determined by the apparent power (kVA). The same kVA causes the same current and winding temperature regardless of the load's power factor.",
    "cat": "WP",
    "id": "T01A_281"
  },
  {
    "q": "Which three electrical machines are mounted on the same single shaft of a marine brushless alternator?",
    "a": "Permanent Magnet Generator (PMG), Main Exciter, and Main Alternator",
    "opts": ["Stator, Rotor, and Rotating Rectifier", "Main Exciter, Diode Wheel, and Slip Ring Assembly", "Automatic Voltage Regulator (AVR), Main Exciter, and Main Alternator", "Permanent Magnet Generator (PMG), Main Exciter, and Main Alternator"],
    "exp": "A brushless alternator features three distinct machines mounted on the same rotating shaft: the Permanent Magnet Generator (PMG), the Main Exciter, and the Main Alternator.",
    "cat": "BL",
    "id": "T01A_282"
  },
  {
    "q": "What is the primary function of the Permanent Magnet Generator (PMG) in a brushless alternator system?",
    "a": "It generates an independent initial AC voltage to feed the AVR, eliminating the need for residual magnetism",
    "opts": ["It generates an independent initial AC voltage to feed the AVR, eliminating the need for residual magnetism", "It acts as a dynamic brake for the prime mover during overspeed conditions", "It provides the final DC output for the ship's main busbar", "It steps down the main alternator's output voltage to power the AVR"],
    "exp": "The PMG has permanent magnets on its rotor and generates an initial AC voltage without any external excitation. This output feeds the AVR, completely eliminating the generator's dependency on residual magnetism to start.",
    "cat": "BL",
    "id": "T01A_283"
  },
  {
    "q": "Why is the construction of the Main Exciter in a brushless alternator described as 'reversed' compared to a normal generator?",
    "a": "Its field winding is stationary on the stator, and its armature winding rotates on the rotor",
    "opts": ["It produces Direct Current (DC) directly without the need for rectifiers", "Its armature is stationary, while its permanent magnets rotate", "Its field winding is stationary on the stator, and its armature winding rotates on the rotor", "It draws power from the main output instead of supplying power to it"],
    "exp": "In a normal generator, the field is on the rotor and the armature is on the stator. The main exciter is 'reversed': its field winding is on the stator (fed by the AVR) and its armature is on the rotor, allowing it to produce AC directly on the rotating shaft.",
    "cat": "BL",
    "id": "T01A_284"
  },
  {
    "q": "Where are the rotating rectifiers (diode wheel) physically located in a brushless alternator?",
    "a": "Mounted on the rotor shaft between the exciter armature and the main field",
    "opts": ["Mounted on the stationary stator frame near the cooling fan", "Mounted on the rotor shaft between the exciter armature and the main field", "Integrated into the main switchboard to rectify the final output", "Inside the Automatic Voltage Regulator (AVR) control cabinet"],
    "exp": "The rotating rectifiers, or diode wheel, are mounted directly on the rotor shaft between the exciter armature and the main alternator field, allowing them to rectify AC to DC internally while spinning.",
    "cat": "BL",
    "id": "T01A_285"
  },
  {
    "q": "What is the specific function of the rotating rectifiers in a brushless alternator?",
    "a": "They convert the 3-phase AC produced by the exciter armature into DC to feed the main alternator field",
    "opts": ["They step down the main 440V output for safe use in the field winding", "They convert the DC from the AVR into AC for the exciter stator", "They convert the PMG output into DC to power the AVR", "They convert the 3-phase AC produced by the exciter armature into DC to feed the main alternator field"],
    "exp": "The rotating rectifiers take the 3-phase AC generated by the rotating exciter armature and convert it into DC. This DC is then fed directly into the main alternator field winding, which is also on the rotor.",
    "cat": "BL",
    "id": "T01A_286"
  },
  {
    "q": "Which of the following represents the correct sequence of electrical flow in a brushless alternator?",
    "a": "PMG \u2192 AVR \u2192 Exciter Field \u2192 Exciter Armature \u2192 Rotating Rectifiers \u2192 Main Field",
    "opts": ["AVR \u2192 PMG \u2192 Rotating Rectifiers \u2192 Exciter Field \u2192 Main Field \u2192 Exciter Armature", "Exciter Field \u2192 AVR \u2192 PMG \u2192 Rotating Rectifiers \u2192 Main Field \u2192 Exciter Armature", "Rotating Rectifiers \u2192 Exciter Armature \u2192 PMG \u2192 AVR \u2192 Main Field \u2192 Exciter Field", "PMG \u2192 AVR \u2192 Exciter Field \u2192 Exciter Armature \u2192 Rotating Rectifiers \u2192 Main Field"],
    "exp": "The complete flow is: PMG generates AC for the AVR \u2192 AVR supplies controlled DC to the Exciter field (stator) \u2192 Exciter armature (rotor) generates AC \u2192 Rotating rectifiers convert it to DC \u2192 DC feeds the Main field (rotor).",
    "cat": "BL",
    "id": "T01A_287"
  },
  {
    "q": "What is a major advantage of using brushless alternators in hazardous marine areas?",
    "a": "They do not have carbon brushes, eliminating the risk of brush sparking that could ignite flammable gases",
    "opts": ["They automatically suppress any overcurrent conditions internally", "They operate at a much lower voltage than conventional alternators", "They do not have carbon brushes, eliminating the risk of brush sparking that could ignite flammable gases", "They can generate power without a prime mover"],
    "exp": "Because there are no sliding contacts (brushes and slip rings), there is no brush sparking. This makes brushless alternators much safer for operation in hazardous areas where explosive gases might be present.",
    "cat": "BL",
    "id": "T01A_288"
  },
  {
    "q": "Why is a brushless alternator better suited for humid marine environments than a conventional alternator?",
    "a": "It does not produce carbon brush dust, which can mix with humidity to cause conductive tracking and shorts",
    "opts": ["It does not produce carbon brush dust, which can mix with humidity to cause conductive tracking and shorts", "Its windings are made of stainless steel instead of copper", "The PMG acts as an internal heater to keep the windings dry", "The rotating rectifiers automatically absorb excess moisture"],
    "exp": "In a marine environment, carbon dust from brush wear can mix with high humidity and salt air to create conductive paths (tracking) across insulation. Brushless designs eliminate this carbon dust entirely.",
    "cat": "BL",
    "id": "T01A_289"
  },
  {
    "q": "What happens if ONE diode in the rotating rectifier assembly fails in an OPEN circuit condition while running?",
    "a": "It causes unbalanced DC to the main field, resulting in an output voltage drop of 15-20% and voltage fluctuation",
    "opts": ["The AVR will short circuit, causing a complete blackout", "The prime mover will overspeed due to loss of magnetic load", "It causes unbalanced DC to the main field, resulting in an output voltage drop of 15-20% and voltage fluctuation", "The alternator output voltage will instantly drop to zero"],
    "exp": "An open-circuit diode means one phase of the exciter's 3-phase AC output is not rectified. This leads to an unbalanced DC supply to the main field, uneven field current, increased ripple, and a voltage drop of approximately 15-20%.",
    "cat": "BL",
    "id": "T01A_290"
  },
  {
    "q": "Why is a SHORT-circuited diode in the rotating rectifier considered much more dangerous than an open-circuited diode?",
    "a": "It allows AC current to flow backward into the DC field winding, causing severe excessive heating and potential winding burnout",
    "opts": ["It causes the main generator breaker to physically jam closed", "It forces the PMG to reverse its magnetic polarity instantly", "It bypasses the AVR completely, leading to an immediate over-frequency trip", "It allows AC current to flow backward into the DC field winding, causing severe excessive heating and potential winding burnout"],
    "exp": "A shorted diode allows current to flow in the reverse direction, introducing an AC component into the DC field current. This causes excessive heat in the field winding, severe waveform distortion, and possible winding burnout if not detected quickly.",
    "cat": "BL",
    "id": "T01A_291"
  },
  {
    "q": "If a rotating diode is short-circuited, what symptom might you observe regarding the Automatic Voltage Regulator (AVR)?",
    "a": "The AVR will begin 'hunting' and the output voltage will become highly unstable",
    "opts": ["The AVR will begin 'hunting' and the output voltage will become highly unstable", "The AVR will shut down immediately without any alarm", "The AVR will output a perfectly flat DC signal with zero ripple", "The AVR will steadily increase voltage until the overvoltage relay trips"],
    "exp": "A short-circuited diode disrupts the field current drastically. The AVR tries to compensate for the resulting severe voltage fluctuations, leading to AVR hunting and voltage instability.",
    "cat": "BL",
    "id": "T01A_292"
  },
  {
    "q": "What diagnostic technique can an ETO use to detect a failed (discoloured or pitted) rotating diode without stopping the alternator?",
    "a": "Inspect the rotating diode wheel using a stroboscope while the machine is running",
    "opts": ["Inspect the rotating diode wheel using a stroboscope while the machine is running", "Measure the direct current of the main field using a clamp meter", "Perform a 500V megger test on the AVR input terminals", "Inject a high-frequency AC signal into the PMG"],
    "exp": "According to the gap additions, rotating diode failures can be detected during operation by using a stroboscope to visually 'freeze' the spinning diode wheel and check for discoloured or pitted diodes.",
    "cat": "BL",
    "id": "T01A_293"
  },
  {
    "q": "What component is installed across the rotating diode bank to protect it from transient overvoltages?",
    "a": "A Zener diode suppressor",
    "opts": ["A thermal overload relay", "A Zener diode suppressor", "A pneumatic dashpot", "A mechanical slip ring"],
    "exp": "To protect against overvoltages on the exciter output, a Zener diode suppressor is placed across the diode bank to clamp dangerous transient voltages that could otherwise destroy the rectifiers.",
    "cat": "BL",
    "id": "T01A_294"
  },
  {
    "q": "A brushless alternator starts and runs at rated RPM but develops absolutely no voltage. If the machine uses a PMG, why is 'loss of residual magnetism' NOT the primary suspect?",
    "a": "Because the PMG uses permanent magnets to supply the AVR, completely eliminating the need for residual magnetism to build voltage",
    "opts": ["Because brushless alternators rely on the main stator's residual magnetism instead of the rotor's", "Because the AVR has a built-in battery to flash the field automatically", "Because rotating rectifiers act as capacitors to store starting charge", "Because the PMG uses permanent magnets to supply the AVR, completely eliminating the need for residual magnetism to build voltage"],
    "exp": "While self-excited alternators need residual magnetism to 'bootstrap' their voltage, a brushless alternator with a PMG does not. The PMG has actual permanent magnets that generate power for the AVR regardless of the main alternator's state.",
    "cat": "BL",
    "id": "T01A_295"
  },
  {
    "q": "An alternator is started, the RPM gauge shows rated speed, but there is zero voltage output. Assuming the AVR and diodes are healthy, what hidden fault could cause this?",
    "a": "A governor speed sensor fault causing the actual frequency/RPM to be too low, despite the gauge reading",
    "opts": ["A governor speed sensor fault causing the actual frequency/RPM to be too low, despite the gauge reading", "The preferential trip dashpot being stuck in the open position", "The main circuit breaker being racked out to the TEST position", "The synchroscope needle being stuck at 6 o'clock"],
    "exp": "If the machine shows zero voltage but components are healthy, the actual speed might be too low. A governor sensor fault can cause the gauge to display rated RPM while the actual machine frequency is insufficient to build voltage.",
    "cat": "BL",
    "id": "T01A_296"
  },
  {
    "q": "In a brushless alternator system, how is the main field winding protected from overcurrent?",
    "a": "The AVR contains internal circuitry that limits the excitation current supplied to the exciter",
    "opts": ["A dedicated IDMT overcurrent relay is wired directly to the main rotor", "The AVR contains internal circuitry that limits the excitation current supplied to the exciter", "The preferential trip relay sheds the main field load directly", "A mechanical fuse is mounted on the rotating diode wheel"],
    "exp": "Overcurrent protection for the main field winding is handled by the AVR, which has built-in excitation current limiting features to prevent the field winding from overheating.",
    "cat": "BL",
    "id": "T01A_297"
  },
  {
    "q": "What type of sensor is typically embedded in the stator winding of a marine alternator to trip the machine if it exceeds the Class F insulation limit (155\u00b0C)?",
    "a": "A Thermistor (or PT100 sensor)",
    "opts": ["A Zener diode", "An Insulation Monitoring System (IMS) probe", "A Thermistor (or PT100 sensor)", "A pneumatic dashpot"],
    "exp": "Thermistor protection (or PT100 sensors) are embedded directly in the stator windings to monitor temperature. They trigger an alarm or trip if the winding temperature exceeds the Class F limit of 155\u00b0C.",
    "cat": "BL",
    "id": "T01A_298"
  },
  {
    "q": "If the permanent magnets on the PMG rotor were to become completely demagnetized, what would be the result?",
    "a": "The AVR would receive no input power, and the alternator would fail to build any output voltage",
    "opts": ["The main alternator would output maximum uncontrolled voltage due to lack of regulation", "The main exciter would automatically act as a self-excited shunt to compensate", "The AVR would receive no input power, and the alternator would fail to build any output voltage", "The AVR would switch to drawing power directly from the 24V starting batteries"],
    "exp": "The PMG is the sole power source for the AVR in a standard brushless setup. If the PMG fails or demagnetizes, the AVR starves, provides no DC to the exciter, and the generator produces zero output voltage.",
    "cat": "BL",
    "id": "T01A_299"
  },
  {
    "q": "When a brushless alternator is stopped for maintenance, how should the rotating diodes be tested?",
    "a": "Using a multimeter on the diode test setting; each should show ~0.6V forward and 'OL' (open loop) in reverse",
    "opts": ["By connecting a 24V battery and watching for sparks", "Using a multimeter on the diode test setting; each should show ~0.6V forward and 'OL' (open loop) in reverse", "By measuring the RPM of the diode wheel with a tachometer", "By applying a 500V megger test across the diode bridge"],
    "exp": "With the machine stopped, rotating diodes are tested using a multimeter in diode test mode. A healthy silicon diode should show a forward voltage drop of approximately 0.6V and infinite resistance (OL) in the reverse direction.",
    "cat": "BL",
    "id": "T01A_300"
  },
  {
    "q": "In the brushless excitation system, which specific component regulates the output voltage of the main alternator by varying its output?",
    "a": "The Automatic Voltage Regulator (AVR)",
    "opts": ["The Permanent Magnet Generator (PMG)", "The Rotating Rectifiers", "The Automatic Voltage Regulator (AVR)", "The Prime Mover Governor"],
    "exp": "The AVR is the brain of the excitation system. It senses the main alternator's output voltage and varies the DC current sent to the exciter stator field to maintain the desired output.",
    "cat": "BL",
    "id": "T01A_301"
  },
  {
    "q": "What kind of current flows through the armature winding of the Main Exciter?",
    "a": "3-phase Alternating Current (AC)",
    "opts": ["Single-phase Alternating Current (AC)", "High-voltage pulse-width modulated (PWM) current", "Direct Current (DC) only", "3-phase Alternating Current (AC)"],
    "exp": "The armature winding of the main exciter (which is located on the spinning rotor) produces 3-phase AC. This AC is immediately fed into the rotating rectifiers on the same shaft.",
    "cat": "BL",
    "id": "T01A_302"
  },
  {
    "q": "Why is it beneficial that the PMG provides an independent power supply to the AVR?",
    "a": "It ensures the AVR has reliable power to force excitation even if a severe short circuit collapses the main busbar voltage",
    "opts": ["It allows the generator to run without a diesel engine", "It allows the AVR to directly power the ship's emergency lighting", "It ensures the AVR has reliable power to force excitation even if a severe short circuit collapses the main busbar voltage", "It prevents the prime mover from overspeeding during load shedding"],
    "exp": "Because the PMG relies on permanent magnets and its own stator, its output is completely independent of the main alternator's output voltage. If a fault collapses the main voltage, the AVR still receives full power from the PMG to drive high fault current, helping protective relays clear the fault.",
    "cat": "BL",
    "id": "T01A_303"
  },
  {
    "q": "If the main field winding of a brushless alternator becomes an 'open circuit', what will be the result at the main stator output terminals?",
    "a": "Zero voltage output, as the main rotor will have no magnetic field to induce an EMF",
    "opts": ["A massive overvoltage condition", "Zero voltage output, as the main rotor will have no magnetic field to induce an EMF", "The frequency will drop to 50% of rated value", "The voltage will drop by exactly 15-20%"],
    "exp": "If the main field winding (on the rotor) breaks and goes open circuit, no DC current can flow. Without a magnetic field cutting the stator conductors, there can be no induced EMF, resulting in zero output voltage.",
    "cat": "BL",
    "id": "T01A_304"
  },
  {
    "q": "During a routine inspection of a stopped brushless alternator, you use a multimeter to check a rotating diode. It reads '0.00V' in both the forward and reverse directions. What is the condition of the diode?",
    "a": "The diode is short-circuited and must be replaced",
    "opts": ["The diode is perfectly healthy", "The diode is open-circuited", "The diode is functioning normally as a Zener suppressor", "The diode is short-circuited and must be replaced"],
    "exp": "A reading of 0.00V (or near zero ohms) in both directions indicates the diode has failed and is short-circuited. It acts as a direct piece of wire, allowing AC to bypass rectification.",
    "cat": "BL",
    "id": "T01A_305"
  },
  {
    "q": "In a brushless alternator, where is the magnetic field created that induces voltage into the Exciter Armature?",
    "a": "In the Exciter Stator (stationary)",
    "opts": ["In the Exciter Stator (stationary)", "In the Main Stator (stationary)", "In the Exciter Rotor (rotating)", "In the PMG Rotor (rotating)"],
    "exp": "The AVR feeds DC into the Exciter Field, which is located on the Exciter Stator. This creates a stationary magnetic field. The Exciter Armature rotates through this field to generate AC.",
    "cat": "BL",
    "id": "T01A_306"
  },
  {
    "q": "What is the primary operational sign that an alternator with a healthy AVR and governor is suffering from an open-circuit rotating diode while running under load?",
    "a": "An output voltage that fluctuates and drops by 15-20%, which may not be noticeable at no-load",
    "opts": ["The reverse power relay will trip immediately", "The bearings will overheat within minutes", "The alternator frequency will wildly hunt between 45Hz and 55Hz", "An output voltage that fluctuates and drops by 15-20%, which may not be noticeable at no-load"],
    "exp": "An open diode causes an uneven field current. While it might still appear normal at no-load, under load it will show visible voltage fluctuation and a drop in voltage (approx 15-20%) because one phase of excitation power is missing.",
    "cat": "BL",
    "id": "T01A_307"
  },
  {
    "q": "A surveyor asks: 'If a brushless alternator is running and displaying 0 Volts, how can you quickly verify if the PMG is functioning properly?'",
    "a": "Measure the AC voltage output directly at the PMG terminals feeding into the AVR",
    "opts": ["Measure the AC voltage output directly at the PMG terminals feeding into the AVR", "Perform a diode test on the rotating rectifiers with a multimeter", "Flash the exciter field and watch the RPM gauge", "Check the temperature of the Zener diode suppressor"],
    "exp": "If the alternator output is zero, checking the PMG involves measuring the AC voltage at the PMG output terminals (which feed the AVR) using a multimeter. If the PMG is outputting correct voltage (typically 100-200V AC), the fault lies further downstream (AVR, exciter, diodes, main field).",
    "cat": "BL",
    "id": "T01A_308"
  },
  {
    "q": "Why is the use of a Brushless Alternator considered a requirement or highly preferred for ships operating under UMS (Unattended Machinery Spaces) notation?",
    "a": "The lack of brushes and slip rings vastly reduces the need for frequent manual inspection, maintenance, and cleaning",
    "opts": ["Brushless alternators can automatically parallel themselves without a synchroscope", "They are the only alternators capable of providing 60 Hz power", "They generate their own diesel fuel internally through the PMG", "The lack of brushes and slip rings vastly reduces the need for frequent manual inspection, maintenance, and cleaning"],
    "exp": "UMS requires machinery to operate safely and reliably for extended periods without human intervention. The elimination of carbon brushes (which wear down, require tension adjustment, and create conductive dust) makes brushless alternators ideal for low-maintenance UMS operation.",
    "cat": "BL",
    "id": "T01A_309"
  },
  {
    "q": "You are troubleshooting a 'no voltage' issue. You verify the PMG is outputting AC, and the AVR is outputting DC. What is the next logical component in the chain to check?",
    "a": "The Exciter Stator field winding resistance, to ensure it is not an open circuit",
    "opts": ["The prime mover governor speed setting", "The Exciter Stator field winding resistance, to ensure it is not an open circuit", "The Main Stator output terminals", "The preferential trip relay dashpot"],
    "exp": "Following the chain: PMG \u2192 AVR \u2192 Exciter Stator. If the AVR is outputting DC, that DC goes to the Exciter Stator field. You should measure the resistance of this winding to check for an open or short circuit before assuming the fault is on the rotating assembly (diodes or main field).",
    "cat": "BL",
    "id": "T01A_310"
  },
  {
    "q": "Under SOLAS regulations, what are the precise time limits for the emergency generator to auto-start and supply the emergency switchboard on cargo and passenger ships?",
    "a": "Within 45 seconds for Cargo ships, and within 30 seconds for Passenger ships",
    "opts": ["Within 45 seconds for Cargo ships, and within 30 seconds for Passenger ships", "Within 90 seconds for Cargo ships, and within 45 seconds for Passenger ships", "Within 30 seconds for Cargo ships, and within 15 seconds for Passenger ships", "Within 60 seconds for both Cargo and Passenger ships"],
    "exp": "SOLAS Ch. II-1/Reg 43 (Cargo) and Reg 42 (Passenger) dictate strict blackout recovery times. The emergency generator must automatically start, come up to speed, close its breaker, and assume the emergency load within 45 seconds on cargo vessels (30s on pax).",
    "cat": "EM",
    "id": "T01A_311"
  },
  {
    "q": "What is the SOLAS requirement regarding the physical location of the Emergency Generator on board?",
    "a": "It must be located above the uppermost continuous deck (bulkhead deck) and entirely outside the main machinery space",
    "opts": ["It must be located above the uppermost continuous deck (bulkhead deck) and entirely outside the main machinery space", "It must be located adjacent to the main switchboard inside the engine control room", "It must be placed at the tank top level to ensure a stable center of gravity", "It must be installed in the steering gear flat to provide direct power to the rudders"],
    "exp": "To ensure survivability during a catastrophic engine room fire or flooding, SOLAS requires the emergency power source to be completely independent, located above the bulkhead deck, and physically outside the main machinery casing.",
    "cat": "EM",
    "id": "T01A_312"
  },
  {
    "q": "What is the minimum mandated fuel endurance capacity for the emergency generator daily service tank on a standard cargo vessel?",
    "a": "18 hours",
    "opts": ["18 hours", "36 hours", "12 hours", "24 hours"],
    "exp": "For standard cargo ships, the emergency generator must have sufficient fuel to operate at full demand for a minimum of 18 hours. (Passenger ships require 36 hours).",
    "cat": "EM",
    "id": "T01A_313"
  },
  {
    "q": "According to typical Classification Society rules, what is the required testing routine for the Emergency Generator?",
    "a": "Monthly running test under load for a minimum of 1 hour, and an Annual full blackout test verifying the auto-start time",
    "opts": ["Tested only when requested by Port State Control (PSC)", "Quarterly full blackout tests, and an annual fuel oil analysis", "Weekly no-load start tests, and a 5-year full load bank test", "Monthly running test under load for a minimum of 1 hour, and an Annual full blackout test verifying the auto-start time"],
    "exp": "Routine testing involves starting and running the emergency generator under load for at least 1 hour every month to prevent carbon build-up (wet stacking). Annually, a full simulated blackout test is conducted to verify the 45-second auto-start capability.",
    "cat": "EM",
    "id": "T01A_314"
  },
  {
    "q": "At what specific speed must the mechanical overspeed trip of a marine generator prime mover be set to activate?",
    "a": "Between 110% and 115% of the rated RPM",
    "opts": ["Between 105% and 110% of the rated RPM", "Exactly 125% of the rated RPM", "Between 150% and 160% of the rated RPM", "Between 110% and 115% of the rated RPM"],
    "exp": "The mechanical overspeed trip is a critical physical safety device set to trigger and cut off fuel (and sometimes combustion air) when the engine exceeds 110% to 115% of its rated running speed.",
    "cat": "OS",
    "id": "T01A_315"
  },
  {
    "q": "Why MUST an overspeed trip test on a generator prime mover be conducted completely OFF-LOAD with the main ACB open?",
    "a": "To prevent the resulting high frequency and high voltage from destroying connected shipboard motors and sensitive electronics on the main busbar",
    "opts": ["Because the reverse power relay will interfere with the test if the breaker is closed", "To prevent the resulting high frequency and high voltage from destroying connected shipboard motors and sensitive electronics on the main busbar", "Because the AVR requires zero excitation current to allow the RPM to rise", "Because the prime mover lacks the torque to reach 115% speed while loaded"],
    "exp": "If tested on-load, forcing the engine to 115% speed pushes the frequency to ~69Hz (on a 60Hz system) and drastically increases the voltage. This will fry sensitive electronics and cause induction motors on the bus to severely overspeed and overheat.",
    "cat": "OS",
    "id": "T01A_316"
  },
  {
    "q": "If a generator is equipped with an electronic governor, what is the safest Class-approved method to test the overspeed trip without physically over-speeding the engine?",
    "a": "Disconnect the speed pickup sensor and inject a simulated, escalating frequency signal directly into the overspeed module using a calibrator",
    "opts": ["Force the fuel rack to the maximum position manually using a crowbar", "Short out the PT100 temperature sensors to trigger a software override", "Disconnect the speed pickup sensor and inject a simulated, escalating frequency signal directly into the overspeed module using a calibrator", "Lower the setpoint of the overspeed trip module temporarily to match the running speed"],
    "exp": "Injecting a simulated speed signal (frequency) into the electronic overspeed protection module verifies the electronics and the trip solenoid logic without subjecting the heavy rotating masses to actual physical stress.",
    "cat": "OS",
    "id": "T01A_317"
  },
  {
    "q": "When a mechanical overspeed trip activates on a diesel generator, what physical action does it typically take to stop the engine?",
    "a": "It releases a spring-loaded mechanism that forces the fuel pump racks to the 'zero fuel' position, and sometimes closes the air intake flap",
    "opts": ["It applies a heavy mechanical disc brake directly to the rotor shaft", "It dumps the lubricating oil from the sump to trigger a low-oil-pressure shutdown", "It releases a spring-loaded mechanism that forces the fuel pump racks to the 'zero fuel' position, and sometimes closes the air intake flap", "It opens the exciter field breaker to remove magnetic load instantly"],
    "exp": "The trip mechanism acts directly on the fuel linkage, overriding the governor and pulling the fuel racks to zero. In some systems, it also snaps the combustion air intake flap shut to suffocate the engine.",
    "cat": "OS",
    "id": "T01A_318"
  },
  {
    "q": "While testing the overspeed trip, the engine reaches 118% speed but fails to trip. What is the immediate required action by the ETO/Engineer?",
    "a": "Manually trip the engine immediately using the emergency stop button or manual fuel rack lever to prevent catastrophic mechanical failure",
    "opts": ["Allow the engine to reach 125% to see if the secondary electrical trip works", "Manually trip the engine immediately using the emergency stop button or manual fuel rack lever to prevent catastrophic mechanical failure", "Adjust the AVR droop setting to 0% to stabilize the frequency", "Close the main ACB to apply load and force the RPM back down"],
    "exp": "If the primary overspeed safety fails during a test, the engine is in a dangerous runaway state. The operator must intervene immediately by hitting the emergency stop or manually pulling the fuel linkage to zero.",
    "cat": "OS",
    "id": "T01A_319"
  },
  {
    "q": "How does an 'Over-Frequency Relay' differ fundamentally from an 'Overspeed Trip'?",
    "a": "The over-frequency relay protects the electrical bus by opening the ACB, whereas the overspeed trip protects the prime mover by shutting off the fuel",
    "opts": ["The over-frequency relay acts on the prime mover, while the overspeed trip acts on the alternator", "The over-frequency relay operates at 125% speed, while the overspeed trip operates at 105%", "The over-frequency relay protects the electrical bus by opening the ACB, whereas the overspeed trip protects the prime mover by shutting off the fuel", "They are identical devices with different names depending on the manufacturer"],
    "exp": "Over-frequency is an electrical protection that opens the breaker to isolate the bad power from the switchboard. Overspeed is a mechanical/engine protection that physically shuts down the diesel engine.",
    "cat": "OS",
    "id": "T01A_320"
  },
  {
    "q": "During parallel operation, Generator 1's governor fails and drives the fuel rack to maximum. Generator 1 begins overspeeding and taking all the active load. What protects Generator 2 in this scenario?",
    "a": "Generator 2 will become motored by Generator 1, causing Generator 2's Reverse Power Relay to trip and open its ACB",
    "opts": ["Generator 2's AVR will automatically shut down its excitation field", "Generator 2 will automatically increase its own fuel rack to match Generator 1", "Generator 2 will become motored by Generator 1, causing Generator 2's Reverse Power Relay to trip and open its ACB", "Generator 2's overspeed trip will activate in sympathy with Generator 1"],
    "exp": "If Gen 1 runs away, it takes the entire kW load and pushes the bus frequency up. Gen 2's governor will cut its fuel to try and lower the frequency, eventually dropping its fuel to zero. At this point, Gen 1 will back-feed Gen 2 (motoring it), which correctly triggers Gen 2's Reverse Power relay to trip.",
    "cat": "OS",
    "id": "T01A_321"
  },
  {
    "q": "What is the standard required brush pressure for carbon brushes on marine alternator slip rings to ensure proper contact and minimal wear?",
    "a": "150 to 200 g/cm\u00b2",
    "opts": ["500 to 650 g/cm\u00b2", "50 to 100 g/cm\u00b2", "150 to 200 g/cm\u00b2", "300 to 450 g/cm\u00b2"],
    "exp": "Correct brush spring tension is critical. It should be maintained between 150-200 g/cm\u00b2. Too light causes bouncing and destructive arcing/sparking. Too heavy causes rapid mechanical wear of both the brush and the slip ring.",
    "cat": "SR",
    "id": "T01A_322"
  },
  {
    "q": "How should an ETO correctly measure the spring tension on a carbon brush?",
    "a": "By using a calibrated spring balance hooked under the pressure finger, pulling it just enough to release the brush, and reading the scale",
    "opts": ["By using a calibrated spring balance hooked under the pressure finger, pulling it just enough to release the brush, and reading the scale", "By observing the magnitude of sparking at full load", "By pressing down on the brush with a thumb and estimating the resistance", "By measuring the physical length of the uncompressed spring with calipers"],
    "exp": "A spring balance (tension gauge) is hooked to the spring lever/finger. It is pulled upwards until the exact moment the pressure on the carbon brush is relieved. The value on the scale is then read and compared to the manual.",
    "cat": "SR",
    "id": "T01A_323"
  },
  {
    "q": "What is the primary cause of small, blackened pitting marks appearing on the surface of copper slip rings?",
    "a": "Electrical sparking (arcing) underneath the brush due to insufficient spring pressure, bouncing, or wrong brush grade",
    "opts": ["High frequency AC ripple from a failed PMG", "Electrical sparking (arcing) underneath the brush due to insufficient spring pressure, bouncing, or wrong brush grade", "Over-tightening of the main shaft bearings", "Chemical corrosion from marine salt air"],
    "exp": "Pitting is electrical damage. If the brush breaks contact with the ring even microscopically (due to weak springs, vibration, or contamination), the current arcs across the gap, melting tiny craters into the copper.",
    "cat": "SR",
    "id": "T01A_324"
  },
  {
    "q": "How is minor pitting on a slip ring rectified while the alternator is running on low load?",
    "a": "By applying fine emery cloth mounted on a rigid, electrically insulated block against the slip ring",
    "opts": ["By reversing the polarity of the excitation field to burn off the pits", "By tightening the brush spring to maximum pressure to grind it smooth", "By applying fine emery cloth mounted on a rigid, electrically insulated block against the slip ring", "By spraying electrical contact cleaner directly onto the spinning ring"],
    "exp": "Minor surface imperfections can be stoned or smoothed using fine-grade emery cloth (never silicon carbide, which embeds in copper) on a wooden/insulated holder while the machine rotates.",
    "cat": "SR",
    "id": "T01A_325"
  },
  {
    "q": "When installing brand new flat-bottomed carbon brushes, why is it critical to 'seat' them before putting the alternator on load?",
    "a": "To shape the bottom of the brush to match the exact curvature of the slip ring, preventing point-contact arcing",
    "opts": ["To burn off the anti-corrosion coating applied at the factory", "To shape the bottom of the brush to match the exact curvature of the slip ring, preventing point-contact arcing", "To magnetize the carbon so it adheres to the copper better", "To ensure the brush absorbs enough humidity to conduct properly"],
    "exp": "New brushes are flat, while slip rings are curved. If not seated, only a tiny edge touches, carrying massive current density, which causes instant severe sparking. Seating is done by placing sandpaper face-up on the ring and pulling it back and forth under the brush to grind the correct curve.",
    "cat": "SR",
    "id": "T01A_326"
  },
  {
    "q": "Why is carbon dust generation from brushes considered a severe hazard inside an alternator enclosure?",
    "a": "Carbon dust is highly conductive; if it accumulates on windings, it creates tracking paths that lead to fatal phase-to-earth or phase-to-phase short circuits",
    "opts": ["Carbon dust acts as a thermal insulator, preventing the rotor from cooling", "Carbon dust is highly conductive; if it accumulates on windings, it creates tracking paths that lead to fatal phase-to-earth or phase-to-phase short circuits", "Carbon dust chemically reacts with class F varnish to produce flammable gas", "Carbon dust degrades the structural integrity of the copper slip rings"],
    "exp": "As brushes wear, they release conductive carbon dust. If this is not routinely vacuumed out, it mixes with humidity and coats the stator winding insulation, creating a conductive path (tracking) that bypasses the insulation and causes a flashover short circuit.",
    "cat": "SR",
    "id": "T01A_327"
  },
  {
    "q": "On a large slip ring with multiple brushes tracking the same path, why are the brushes often 'staggered' across the width of the ring?",
    "a": "To ensure even wear across the entire face of the slip ring and prevent deep grooves from forming",
    "opts": ["To allow cooling air to flow more easily between the holders", "To prevent electromagnetic interference between adjacent brushes", "To ensure even wear across the entire face of the slip ring and prevent deep grooves from forming", "To separate the positive and negative excitation currents"],
    "exp": "If multiple brushes sit perfectly inline, they will wear a deep groove into the slip ring, leaving high ridges on the sides. Staggering them side-to-side ensures the whole ring face wears down uniformly.",
    "cat": "SR",
    "id": "T01A_328"
  },
  {
    "q": "If deep, severe grooves are discovered on an alternator slip ring during drydock inspection, what is the required repair?",
    "a": "The rotor must be removed and the slip rings turned (machined) on a lathe to restore a perfectly flat and concentric surface",
    "opts": ["The brushes should be replaced with a harder grade of carbon to grind the ring flat", "The slip ring voltage should be increased by 10% to push current across the gaps", "The grooves should be filled with conductive silver solder and filed flat", "The rotor must be removed and the slip rings turned (machined) on a lathe to restore a perfectly flat and concentric surface"],
    "exp": "Emery cloth cannot fix deep grooving or eccentricity. The slip ring must be physically machined down on a lathe to restore its perfectly cylindrical shape.",
    "cat": "SR",
    "id": "T01A_329"
  },
  {
    "q": "You find that the ship's store has run out of the manufacturer's specified grade of carbon brush. Can you safely substitute a harder grade brush meant for a crane motor?",
    "a": "No, a harder grade will mechanically grind away the copper slip ring, causing irreversible damage to the expensive rotor",
    "opts": ["Yes, as long as the spring pressure is reduced by 50% to compensate", "No, a harder grade will mechanically grind away the copper slip ring, causing irreversible damage to the expensive rotor", "No, harder brushes cannot conduct DC current, only AC current", "Yes, harder brushes are better because they last longer and reduce maintenance"],
    "exp": "Brush grades (hardness, graphite/copper mix, resistivity) are precisely matched to the machine. A brush that is too hard will wear out the copper slip ring instead of the brush. Brushes are cheap consumables; slip rings are permanent rotor components.",
    "cat": "SR",
    "id": "T01A_330"
  },
  {
    "q": "A surveyor asks: What happens to a large induction motor (e.g., Bow Thruster) if the main generator suffers a severe voltage dip (e.g., drops from 440V to 310V)?",
    "a": "The motor's torque output drops to roughly 50%, causing it to stall, which leads to massive overcurrent draw and severe winding overheating",
    "opts": ["The motor automatically trips on under-frequency protection", "The motor acts as a generator and feeds reactive power back to the bus", "The motor continues to run at normal torque but its speed drops by 30%", "The motor's torque output drops to roughly 50%, causing it to stall, which leads to massive overcurrent draw and severe winding overheating"],
    "exp": "Induction motor torque is proportional to the square of the voltage (V\u00b2). If voltage drops to ~70% (310/440), torque drops to ~49% (0.7\u00b2). Unable to turn the load, the motor stalls (locked rotor state), drawing 6x normal current until its overload relay trips.",
    "cat": "FT",
    "id": "T01A_331"
  },
  {
    "q": "You observe that two paralleled generators have perfectly matched kW outputs, but the Ammeters are wildly different (Gen 1 is 800A, Gen 2 is 200A). Where is the fault located?",
    "a": "In the excitation system; there is unequal reactive load (kVAR) sharing due to improperly set AVR voltage trimmers or a faulty AVR",
    "opts": ["In the excitation system; there is unequal reactive load (kVAR) sharing due to improperly set AVR voltage trimmers or a faulty AVR", "In the fuel system; the prime mover governors are not sharing active load", "In the synchroscope; the breaker was closed at the wrong phase angle", "In the mechanical coupling; the poles are slipping on Gen 2"],
    "exp": "Active power (kW) is balanced by the governor (fuel). If kW is equal, the engines are fine. Reactive power (kVAR) and Amps are controlled by the AVR (excitation). Mismatched Amps with matched kW means the AVRs are fighting over voltage control.",
    "cat": "FT",
    "id": "T01A_332"
  },
  {
    "q": "While a generator is running, the Stator Winding PT100/Thermistor alarm suddenly triggers at 155\u00b0C. What is the most common mechanical cause of this fault?",
    "a": "Clogged stator ventilation slots or a heavily fouled generator air cooler preventing heat dissipation",
    "opts": ["The main switchboard overcurrent relay is set too low", "Clogged stator ventilation slots or a heavily fouled generator air cooler preventing heat dissipation", "The AVR is supplying too much reactive power to the busbar", "The lubricating oil pressure has dropped below 1.5 bar"],
    "exp": "If the current (Amps) is normal but the stator is overheating, the cooling medium is failing. In marine alternators, this is almost always due to a filthy air cooler matrix or dust/oil clogging the ventilation passages in the stator core.",
    "cat": "FT",
    "id": "T01A_333"
  },
  {
    "q": "What is the critical diagnostic difference between Governor 'hunting' and AVR 'hunting' on the main switchboard meters?",
    "a": "Governor hunting causes wide fluctuations on the kW (Active Power) and Frequency meters; AVR hunting causes fluctuations on the Voltmeter and kVAR (Reactive Power) meters",
    "opts": ["Governor hunting causes wide fluctuations on the kW (Active Power) and Frequency meters; AVR hunting causes fluctuations on the Voltmeter and kVAR (Reactive Power) meters", "Governor hunting affects the Voltmeter; AVR hunting affects the Frequency meter", "There is no difference; both cause identical symptoms on all meters simultaneously", "Governor hunting only occurs during synchronization; AVR hunting only occurs during blackout recovery"],
    "exp": "To isolate the fault: look at the panel. If the kW needle is bouncing, the engine fuel (governor) is unstable. If the Voltage or kVAR needle is bouncing while kW is steady, the excitation control (AVR) is unstable.",
    "cat": "FT",
    "id": "T01A_334"
  },
  {
    "q": "A surveyor asks: 'If you close the ACB of a dead, non-running generator onto a live busbar, why does it NOT cause a catastrophic dead short circuit?'",
    "a": "Because the stator windings have high inductive reactance; instead of a short circuit, they act like an induction motor stator and draw heavy starting current to turn the rotor",
    "opts": ["Because a dead generator has infinite resistance until it reaches 60Hz", "Because the preferential trip dashpot absorbs the massive electrical shock", "Because the AVR instantly senses the reverse flow and blocks the thyristors", "Because the stator windings have high inductive reactance; instead of a short circuit, they act like an induction motor stator and draw heavy starting current to turn the rotor"],
    "exp": "A stationary generator winding is just a massive inductor. Closing the breaker applies 3-phase AC to it. It doesn't cause a dead short; it acts exactly like starting a massive induction motor across-the-line. It draws 6-8x full load current and violently 'motors' the diesel engine until the reverse power relay trips.",
    "cat": "FT",
    "id": "T01A_335"
  },
  {
    "q": "An alternator's Reverse Power Relay trips during parallel operation. What mechanical fault on the prime mover most likely caused this?",
    "a": "A blocked fuel filter, empty day tank, or governor actuator failure causing total loss of engine power",
    "opts": ["A seized generator rotor bearing", "A broken AVR thyristor causing loss of excitation", "A failed turbocharger bearing causing overspeed", "A blocked fuel filter, empty day tank, or governor actuator failure causing total loss of engine power"],
    "exp": "Reverse power (motoring) happens when the engine loses the ability to push the load. If fuel is cut off (blocked filter, pump failure), the engine stops pushing, and the electrical busbar starts dragging the engine around mechanically.",
    "cat": "FT",
    "id": "T01A_336"
  },
  {
    "q": "You are megger testing a suspect stator winding phase-to-earth and get a reading of 0.00 M\u03a9. What specific internal fault does this indicate?",
    "a": "A complete breakdown of insulation between the copper coils and the iron stator core (Dead Earth Fault)",
    "opts": ["An open circuit (broken wire) inside the winding", "A phase-to-phase short circuit between two different windings", "A complete breakdown of insulation between the copper coils and the iron stator core (Dead Earth Fault)", "A turn-to-turn short circuit within the same coil"],
    "exp": "Phase-to-earth testing checks the integrity of the varnish/paper insulation separating the live copper wire from the grounded iron chassis. 0.00 M\u03a9 means they are touching directly (dead earth).",
    "cat": "FT",
    "id": "T01A_337"
  },
  {
    "q": "If one phase of a 3-phase alternator winding goes 'open circuit' while supplying a heavy 3-phase motor load, what is the immediate effect?",
    "a": "Single-phasing: the output voltage becomes severely unbalanced, and connected 3-phase motors will draw excessive current on the remaining two phases, risking burnout",
    "opts": ["The alternator continues normally, but the load is limited to exactly 66% capacity", "The frequency immediately drops by 33% (e.g., 60Hz to 40Hz)", "Single-phasing: the output voltage becomes severely unbalanced, and connected 3-phase motors will draw excessive current on the remaining two phases, risking burnout", "The alternator immediately generates DC power instead of AC power"],
    "exp": "Losing one phase causes 'single-phasing'. The alternator only provides power on two lines. 3-phase motors connected to the bus will try to keep running, pulling massive compensating current through the two remaining healthy lines, which triggers their thermal overload relays.",
    "cat": "FT",
    "id": "T01A_338"
  },
  {
    "q": "An alternator is running, but the main switchboard Insulation Monitoring System (IMS) shows 0 M\u03a9. You shut down the alternator, test it, and find its IR is 100 M\u03a9. What does this mean?",
    "a": "The alternator itself is healthy; the earth fault is located somewhere out on the ship's distribution network that was connected to the busbar",
    "opts": ["The rotating diodes have failed closed, causing a phantom earth fault", "The megger tester is broken and needs battery replacement", "The alternator itself is healthy; the earth fault is located somewhere out on the ship's distribution network that was connected to the busbar", "The AVR is masking the internal fault while the machine is stopped"],
    "exp": "The IMS on the switchboard monitors the ENTIRE connected electrical network. If it alarms while the generator is connected, the fault could be anywhere. Testing the isolated generator proves it is fine; therefore, the ETO must now hunt for the earth fault on the ship's feeders (pumps, lighting, galley).",
    "cat": "FT",
    "id": "T01A_339"
  },
  {
    "q": "What is the defining characteristic of a 'Separately Excited' alternator?",
    "a": "The DC excitation power for the rotor field is supplied entirely from an independent external source, such as battery banks or a separate DC generator",
    "opts": ["It steps down its own stator output to feed the rotor", "The DC excitation power for the rotor field is supplied entirely from an independent external source, such as battery banks or a separate DC generator", "It uses an internal PMG mounted on the same shaft", "It relies purely on permanent magnets located in the stator"],
    "exp": "Separately excited machines do not rely on their own generation or internal shaft mechanics to get field current; they take it from an external source and pipe it in via slip rings.",
    "cat": "EX",
    "id": "T01A_340"
  },
  {
    "q": "How does a 'Self-Excited Shunt' generator initially start producing voltage when the prime mover is started?",
    "a": "It relies entirely on the faint residual magnetism in the rotor core to induce a tiny voltage, which is then fed back to strengthen the field in a loop",
    "opts": ["It uses the PMG to inject 220V directly into the stator", "It requires a manual push-button 'flash' every single time it starts", "It relies entirely on the faint residual magnetism in the rotor core to induce a tiny voltage, which is then fed back to strengthen the field in a loop", "It uses an internal battery inside the AVR to jumpstart the process"],
    "exp": "Self-excited machines use a portion of their own output for excitation. To start this loop from zero, they MUST have residual magnetism in the iron core to produce the first few volts. If lost, they will not build voltage.",
    "cat": "EX",
    "id": "T01A_341"
  },
  {
    "q": "What is the main physical difference between a conventional 'Static Excitation' system and a 'Brushless Excitation' system?",
    "a": "Static excitation relies on slip rings and carbon brushes to transfer DC to the rotor, whereas brushless excitation transfers power magnetically via an exciter and rectifies it internally on the spinning shaft",
    "opts": ["Static excitation uses a PMG, while brushless relies on residual magnetism", "There is no physical difference; they are just two names for the same system", "Static excitation relies on slip rings and carbon brushes to transfer DC to the rotor, whereas brushless excitation transfers power magnetically via an exciter and rectifies it internally on the spinning shaft", "Static excitation produces AC in the rotor, while brushless produces DC in the stator"],
    "exp": "Static excitation uses solid-state thyristors outside the machine to create DC, which must then be physically pushed across sliding slip rings to the rotor. Brushless completely eliminates sliding contacts.",
    "cat": "EX",
    "id": "T01A_342"
  },
  {
    "q": "Why is 'Static Excitation' sometimes preferred over 'Brushless Excitation' on massive High Voltage (HV) generators?",
    "a": "Static excitation has an incredibly fast dynamic response time to sudden load changes because it forces DC directly into the main field without the delay of a middleman exciter",
    "opts": ["It allows the generator to run safely underwater if flooded", "Static excitation has an incredibly fast dynamic response time to sudden load changes because it forces DC directly into the main field without the delay of a middleman exciter", "It generates zero electrical noise or harmonic distortion", "It completely eliminates the need for maintenance"],
    "exp": "In a brushless system, the AVR changes the exciter field, which changes the exciter armature, which changes the main field (magnetic time delay). Static excitation uses thyristors to fire DC directly into the main field instantly, offering superior transient voltage recovery.",
    "cat": "EX",
    "id": "T01A_343"
  },
  {
    "q": "In a Brushless system, why is the construction of the Main Exciter considered 'reversed'?",
    "a": "Because its DC magnetic field is held stationary on the stator, while its 3-phase AC armature rotates on the rotor shaft",
    "opts": ["Because it draws power from the switchboard to drive the diesel engine", "Because it spins counter-clockwise to the main alternator", "Because its DC magnetic field is held stationary on the stator, while its 3-phase AC armature rotates on the rotor shaft", "Because it steps down voltage instead of generating it"],
    "exp": "Normally, generators put the DC field on the rotor. The exciter does the opposite: the AVR feeds DC to the stationary stator (Exciter Field). The rotor (Exciter Armature) spins inside it, generating AC directly on the shaft so it can be fed to the rotating diodes.",
    "cat": "EX",
    "id": "T01A_344"
  },
  {
    "q": "In the event of a severe short circuit on the main busbar, why does a Self-Excited Alternator struggle to clear the fault compared to a PMG-equipped alternator?",
    "a": "A short circuit drops the busbar voltage to near zero, which starves the self-excited AVR of power, causing the magnetic field to collapse before protective relays can trip",
    "opts": ["The self-excited alternator automatically disconnects its own exciter field", "The PMG utilizes a mechanical fuse, while self-excited relies on software", "A short circuit drops the busbar voltage to near zero, which starves the self-excited AVR of power, causing the magnetic field to collapse before protective relays can trip", "A short circuit causes the self-excited machine to overspeed uncontrollably"],
    "exp": "Because a self-excited machine takes its excitation power from its own output, a dead short circuit drops that output voltage to zero. The AVR loses power, excitation collapses, and fault current disappears prematurely, potentially preventing the main breakers from tripping to clear the fault. A PMG guarantees steady AVR power regardless of busbar voltage.",
    "cat": "EX",
    "id": "T01A_345"
  },
  {
    "q": "What is the primary disadvantage of using a 'Static Excitation' system on a marine alternator?",
    "a": "It requires the use of slip rings and carbon brushes to transfer the DC excitation current to the spinning rotor, necessitating regular maintenance",
    "opts": ["It requires the use of slip rings and carbon brushes to transfer the DC excitation current to the spinning rotor, necessitating regular maintenance", "It is incapable of operating in parallel with other generators", "It relies entirely on residual magnetism, making black starts impossible", "It has a very slow dynamic response to transient load changes"],
    "exp": "While static excitation provides incredibly fast response times because thyristors control the main field directly, the electrical transfer from the stationary AVR to the rotating main field MUST bridge the physical gap using sliding contacts (slip rings and brushes), which wear out and create carbon dust.",
    "cat": "EX",
    "id": "T01A_346"
  },
  {
    "q": "In older marine alternators, what was the function of the 'Compounding' transformers in the excitation circuit?",
    "a": "They injected an excitation current directly proportional to the load current, providing a crude but robust automatic voltage boost under heavy load",
    "opts": ["They prevented reverse power from motoring the prime mover", "They synchronized the phase angle of the incoming machine", "They injected an excitation current directly proportional to the load current, providing a crude but robust automatic voltage boost under heavy load", "They stepped down the 440V main output to 24V for the control circuitry"],
    "exp": "Before advanced solid-state AVRs, current transformers (CTs) were used for compounding. As the generator load (current) increased, the CTs automatically fed more current into the excitation circuit, naturally boosting the field to combat the voltage drop caused by the load.",
    "cat": "EX",
    "id": "T01A_347"
  },
  {
    "q": "What component physically houses the 3-phase AC armature in a modern marine main exciter?",
    "a": "The rotor shaft",
    "opts": ["The PMG casing", "The main switchboard", "The rotor shaft", "The stator frame"],
    "exp": "In the reversed construction of the main exciter, the field winding is on the stationary stator, and the 3-phase AC armature is wound on the spinning rotor shaft, allowing its output to feed directly into the rotating rectifiers.",
    "cat": "EX",
    "id": "T01A_348"
  },
  {
    "q": "Before conducting a simulated Blackout Test, what operational conditions must be strictly verified?",
    "a": "The vessel must be safely at anchor or open sea with no nearby traffic, and explicit permission must be obtained from the Master/Bridge",
    "opts": ["The vessel must be safely at anchor or open sea with no nearby traffic, and explicit permission must be obtained from the Master/Bridge", "The main engines must be running at full ahead on heavy fuel oil", "The emergency generator must already be running and paralleled with the main bus", "The ship's fire alarms must be physically disabled"],
    "exp": "A blackout test causes an actual loss of power, meaning loss of steering, propulsion control, and radar. It is incredibly dangerous to perform in confined waters, port approaches, or without the Bridge's direct authorization and preparation.",
    "cat": "BT",
    "id": "T01A_349"
  },
  {
    "q": "During a blackout, what specific electrical relay causes the main generator Air Circuit Breaker (ACB) to trip and disconnect from the dead busbar?",
    "a": "The Under-Voltage (UV) Relay",
    "opts": ["The Reverse Power Relay", "The Under-Voltage (UV) Relay", "The Over-Current Relay (OCR)", "The Preferential Trip Relay"],
    "exp": "When the main generator fails and voltage collapses (blackout), the Under-Voltage (UV) release coil automatically trips the main ACB. This ensures that when power is restored, the dead busbar isn't instantly connected to a stalled generator, preventing catastrophic back-feeding.",
    "cat": "BT",
    "id": "T01A_350"
  },
  {
    "q": "What electrical interlock prevents the Emergency Generator from paralleling with the Main Generators during normal blackout recovery?",
    "a": "An electrical and mechanical interlock between the Emergency Generator breaker and the Main Bus-Tie breaker on the emergency switchboard",
    "opts": ["The synchroscope is hardwired to lock out the emergency breaker", "The emergency generator outputs 60Hz while the main outputs 50Hz", "An electrical and mechanical interlock between the Emergency Generator breaker and the Main Bus-Tie breaker on the emergency switchboard", "The reverse power relay on the emergency generator is set to zero seconds"],
    "exp": "The Emergency Generator is not designed to parallel with the main bus. A strict interlock ensures the Emergency ACB can only close if the tie-breaker to the main switchboard is OPEN, preventing the tiny emergency generator from trying to power the entire ship.",
    "cat": "BT",
    "id": "T01A_351"
  },
  {
    "q": "When restoring the main power after a blackout test, how is the first Main Generator connected to the busbar?",
    "a": "It is closed directly onto the 'dead bus' without needing synchronization, as there is no existing voltage or frequency to match",
    "opts": ["It is closed directly onto the 'dead bus' without needing synchronization, as there is no existing voltage or frequency to match", "It is connected via a variable frequency drive to slowly ramp up the bus voltage", "It must be synchronized with the emergency generator using the synchroscope", "It must wait for the emergency generator to physically disconnect before it can generate voltage"],
    "exp": "The first generator coming online after a blackout connects to a dead (unpowered) busbar. Because there is no existing AC waveform on the bus, synchronization is impossible and unnecessary. The breaker is closed directly.",
    "cat": "BT",
    "id": "T01A_352"
  },
  {
    "q": "Why is the sequential starting of heavy machinery critical during blackout recovery?",
    "a": "To prevent the massive, simultaneous starting currents of multiple large induction motors from overloading and tripping the newly connected main generator",
    "opts": ["To prevent the massive, simultaneous starting currents of multiple large induction motors from overloading and tripping the newly connected main generator", "To give the crew time to manually bleed air from the fuel lines", "To ensure the lubricating oil has enough time to heat up", "Because the AVR requires 2 minutes to stabilize its reference voltage"],
    "exp": "Large induction motors draw 6 to 8 times their rated current during startup. If all auxiliary pumps and compressors attempted to auto-start at the exact same moment main power was restored, the combined starting surge would immediately trip the main generator on overcurrent.",
    "cat": "BT",
    "id": "T01A_353"
  },
  {
    "q": "Which piece of essential machinery is typically programmed to auto-start FIRST (with zero time delay) immediately after main power is restored?",
    "a": "Main Engine Lubricating Oil (LO) Pumps and Steering Gear",
    "opts": ["Air Compressors and Purifiers", "Fresh Water Hydrophore Pumps", "Galley Ovens and HVAC systems", "Main Engine Lubricating Oil (LO) Pumps and Steering Gear"],
    "exp": "Safety-critical machinery required for ship control and engine survival\u2014primarily the Steering Gear and Main Engine LO pumps\u2014start immediately upon power restoration. Other heavy loads follow via time-delay relays.",
    "cat": "BT",
    "id": "T01A_354"
  },
  {
    "q": "How is a blackout test practically initiated in the Engine Control Room?",
    "a": "By manually pressing the physical trip button on the running Main Generator's ACB, or using a test switch that simulates an under-voltage fault",
    "opts": ["By manually pressing the physical trip button on the running Main Generator's ACB, or using a test switch that simulates an under-voltage fault", "By shorting the main busbar with an earth strap", "By forcing the AVR into maximum droop", "By shutting off the fuel supply to the running prime mover"],
    "exp": "A blackout is safely simulated by manually opening the Air Circuit Breaker of the active generator, instantly de-energizing the main busbar and allowing the automation system to detect the dead bus and trigger the emergency sequence.",
    "cat": "BT",
    "id": "T01A_355"
  },
  {
    "q": "Once main power is restored and the main bus-tie to the emergency switchboard is closed, what happens to the Emergency Generator?",
    "a": "Its breaker automatically opens, and the prime mover runs for a few minutes on no-load to cool down before stopping",
    "opts": ["It remains paralleled with the main generator to provide active load support", "Its breaker automatically opens, and the prime mover runs for a few minutes on no-load to cool down before stopping", "It stops instantaneously to save fuel", "It acts as a synchronous condenser to correct the power factor"],
    "exp": "When the main bus-tie is closed, the interlock forces the Emergency ACB to open, transferring the emergency loads back to the main generators. The emergency diesel then runs for a 3-5 minute cool-down period before shutting down.",
    "cat": "BT",
    "id": "T01A_356"
  },
  {
    "q": "What must be manually reset by the ETO or Engineers after a blackout recovery is complete?",
    "a": "The Preferential Trip (Load Shedding) relays and non-essential breakers that were tripped during the event",
    "opts": ["The prime mover's mechanical overspeed trip latch", "The Preferential Trip (Load Shedding) relays and non-essential breakers that were tripped during the event", "The PMG's magnetic polarity", "The AVR internal reference voltage"],
    "exp": "During the blackout and recovery, preferential trip systems may have shed non-essential loads (galley, AC compressors). These usually require manual resetting of the trip relays and physical closure of the individual breakers.",
    "cat": "BT",
    "id": "T01A_357"
  },
  {
    "q": "During a blackout, why do some older main engines automatically open their air start valves?",
    "a": "They do not; air compressors may start to replenish receivers, but main engine start valves are controlled by the maneuvering system, not blackout automation",
    "opts": ["To provide emergency cooling to the piston crowns", "To purge the cylinders of exhaust gas", "To use compressed air to spin the main alternator", "They do not; air compressors may start to replenish receivers, but main engine start valves are controlled by the maneuvering system, not blackout automation"],
    "exp": "This is a distractor concept. Blackout recovery focuses on electrical generation and auxiliary pumps. The Main Engine does not automatically use starting air during a blackout unless commanded by the bridge/ECR telegraph system.",
    "cat": "BT",
    "id": "T01A_358"
  },
  {
    "q": "What tool is standardly used to measure the air gap between the rotor and stator of a marine alternator?",
    "a": "Long feeler gauges inserted through the stator ventilation slots",
    "opts": ["An ultrasonic thickness gauge", "A digital micrometer", "Long feeler gauges inserted through the stator ventilation slots", "A vernier caliper"],
    "exp": "Air gap is physically measured using specialized long feeler gauges that are slid into the tiny clearance between the rotor poles and the stator core, usually accessed through ventilation openings.",
    "cat": "AG",
    "id": "T01A_359"
  },
  {
    "q": "What is the standard tolerance for air gap deviation on a marine alternator?",
    "a": "Measurements should not deviate by more than \u00b110% from the average mean value",
    "opts": ["Measurements should not deviate by more than \u00b110% from the average mean value", "Measurements should only be within \u00b150% of the manufacturer's maximum limit", "Measurements must be exactly identical with 0% deviation", "Measurements can deviate up to \u00b125% before action is required"],
    "exp": "While the exact figure varies by manufacturer, the marine standard is that the air gap must be uniform. Any single measurement deviating more than \u00b110% from the average indicates dangerous eccentricity.",
    "cat": "AG",
    "id": "T01A_360"
  },
  {
    "q": "How many measurement points must be taken on a single rotor pole to properly assess the air gap?",
    "a": "Four points: Top (12 o'clock), Bottom (6 o'clock), Left (9 o'clock), and Right (3 o'clock)",
    "opts": ["Two points: Top and Bottom", "One point at the top only", "Four points: Top (12 o'clock), Bottom (6 o'clock), Left (9 o'clock), and Right (3 o'clock)", "Eight points at 45-degree intervals"],
    "exp": "To accurately assess rotor concentricity within the stator, measurements must be taken at the four cardinal points of each pole face.",
    "cat": "AG",
    "id": "T01A_361"
  },
  {
    "q": "If the air gap measurement at the BOTTOM (6 o'clock) is significantly SMALLER than the TOP (12 o'clock), what is the most probable mechanical fault?",
    "a": "The main rotor bearings are worn out, causing the rotor shaft to drop",
    "opts": ["The prime mover coupling is misaligned horizontally", "The rotor poles have expanded due to centrifugal force", "The stator frame has warped upward due to heat", "The main rotor bearings are worn out, causing the rotor shaft to drop"],
    "exp": "Gravity pulls the heavy rotor down. If the bottom gap shrinks while the top gap increases, the rotor is physically sitting lower in the stator, a direct symptom of worn journal or roller bearings.",
    "cat": "AG",
    "id": "T01A_362"
  },
  {
    "q": "What destructive phenomenon is caused by an uneven air gap (eccentricity) in a running alternator?",
    "a": "Unbalanced Magnetic Pull (UMP), which pulls the rotor toward the smallest gap, exponentially increasing bearing wear and vibration",
    "opts": ["Reverse motoring of the prime mover", "A complete loss of residual magnetism", "Unbalanced Magnetic Pull (UMP), which pulls the rotor toward the smallest gap, exponentially increasing bearing wear and vibration", "High frequency harmonic distortion in the stator output"],
    "exp": "Magnetic flux seeks the path of least resistance. If the gap is smaller on one side, the magnetic pull is much stronger there. This Unbalanced Magnetic Pull (UMP) literally tries to rip the rotor into the stator, causing severe vibration and rapid bearing destruction.",
    "cat": "AG",
    "id": "T01A_363"
  },
  {
    "q": "What is the ultimate catastrophic consequence if air gap deviation is ignored and bearing wear continues?",
    "a": "The spinning rotor poles will physically scrape and crash into the stationary stator core, destroying the windings and the machine",
    "opts": ["The slip rings will wear down to the bare shaft", "The alternator will simply stop producing voltage", "The spinning rotor poles will physically scrape and crash into the stationary stator core, destroying the windings and the machine", "The AVR will overheat and catch fire"],
    "exp": "If the bearings wear down enough, the gap disappears completely. The heavy spinning iron rotor will grind against the iron stator core, shredding the copper windings and permanently destroying both components.",
    "cat": "AG",
    "id": "T01A_364"
  },
  {
    "q": "Why must the prime mover be manually turned (barred over) when checking the air gap on a large alternator?",
    "a": "To measure the gap on all individual rotor poles, as one specific pole may be loose or deformed",
    "opts": ["To align the cooling fan blades with the stator slots", "To lubricate the bearings before inserting the gauges", "To generate a small voltage for the feeler gauge sensor", "To measure the gap on all individual rotor poles, as one specific pole may be loose or deformed"],
    "exp": "A rotor has multiple poles (e.g., 4, 6, or 8). You must turn the engine using the turning gear to bring each pole face to the measuring access points to verify that no individual pole shoe has come loose or shifted.",
    "cat": "AG",
    "id": "T01A_365"
  },
  {
    "q": "What happens to the electrical characteristics if an alternator is manufactured with an intentionally LARGE uniform air gap?",
    "a": "It increases the machine's stability and reduces harmonic distortion, but requires significantly more field excitation current to push the flux across the gap",
    "opts": ["It forces the machine to generate DC instead of AC", "It prevents Unbalanced Magnetic Pull entirely", "It increases the machine's stability and reduces harmonic distortion, but requires significantly more field excitation current to push the flux across the gap", "It reduces stability but drastically lowers the required excitation current"],
    "exp": "A larger uniform gap makes the alternator's magnetic circuit 'stiffer', resulting in better stability and a cleaner sine wave. However, air is a poor magnetic conductor, so the AVR must supply much higher DC field current to cross that large gap.",
    "cat": "AG",
    "id": "T01A_366"
  },
  {
    "q": "What is the typical physical dimension of the air gap in a standard 440V marine auxiliary alternator?",
    "a": "Between 1.5 mm and 3.0 mm",
    "opts": ["Between 0.1 mm and 0.5 mm", "Between 25 mm and 50 mm", "Between 1.5 mm and 3.0 mm", "Between 10 mm and 15 mm"],
    "exp": "While it varies by physical size, standard marine auxiliary alternators typically have air gaps in the range of 1.5mm to 3.0mm. It is incredibly tight considering the massive rotational forces.",
    "cat": "AG",
    "id": "T01A_367"
  },
  {
    "q": "During operation, how does the air gap slightly change dynamically compared to the stopped, cold condition?",
    "a": "Centrifugal force expands the rotor slightly, and thermal expansion of the hot rotor poles further reduces the air gap",
    "opts": ["The magnetic field compresses the rotor, increasing the air gap", "The air gap remains perfectly static under all conditions", "The stator frame shrinks, increasing the air gap", "Centrifugal force expands the rotor slightly, and thermal expansion of the hot rotor poles further reduces the air gap"],
    "exp": "When running, heat causes thermal expansion of the iron rotor, and massive centrifugal forces stretch the poles outward. Both factors slightly reduce the physical air gap compared to the cold, stationary measurement.",
    "cat": "AG",
    "id": "T01A_368"
  },
  {
    "q": "When two identical alternators are running in parallel, which component is strictly responsible for sharing the Active Power (kW)?",
    "a": "The Prime Mover Governor",
    "opts": ["The Rotating Rectifier", "The Synchroscope", "The Prime Mover Governor", "The Automatic Voltage Regulator (AVR)"],
    "exp": "Active power (kW) represents the actual physical work being done. This requires mechanical energy, which is controlled entirely by the amount of fuel admitted to the engine by the Governor.",
    "cat": "LS",
    "id": "T01A_369"
  },
  {
    "q": "When two identical alternators are running in parallel, which component is strictly responsible for sharing the Reactive Power (kVAR)?",
    "a": "The Automatic Voltage Regulator (AVR)",
    "opts": ["The Air Circuit Breaker (ACB)", "The Preferential Trip Relay", "The Prime Mover Governor", "The Automatic Voltage Regulator (AVR)"],
    "exp": "Reactive power (kVAR) is the magnetizing power that bounces back and forth in the system. It is purely an electrical property controlled by the excitation current provided by the AVR.",
    "cat": "LS",
    "id": "T01A_370"
  },
  {
    "q": "What is the definition of 'Governor Droop'?",
    "a": "A deliberate, proportional decrease in prime mover speed (frequency) as active load (kW) increases",
    "opts": ["A sudden drop in voltage during motor starting", "A deliberate, proportional decrease in prime mover speed (frequency) as active load (kW) increases", "An unintended loss of fuel pressure at high loads", "The physical sagging of the generator rotor due to gravity"],
    "exp": "Governor droop (typically 3-5%) means the governor intentionally allows the engine RPM to drop slightly as load increases. If no-load is 61Hz, full-load might be 59Hz. This prevents parallel generators from fighting each other.",
    "cat": "LS",
    "id": "T01A_371"
  },
  {
    "q": "What is 'AVR Droop' (also known as Quadrature Droop)?",
    "a": "A deliberate, proportional decrease in terminal voltage as reactive load (kVAR) increases",
    "opts": ["A failure of the AVR thyristors under heavy load", "A deliberate, proportional decrease in terminal voltage as reactive load (kVAR) increases", "A drop in frequency when reactive load drops", "The voltage drop across the rotating diode wheel"],
    "exp": "Just as the governor drops speed to share kW, the AVR intentionally drops voltage (by a few percent) as reactive current increases. This allows parallel AVRs to find a stable equilibrium and share kVAR equally without hunting.",
    "cat": "LS",
    "id": "T01A_372"
  },
  {
    "q": "If two generators are operated in parallel in 'Isochronous' mode (0% Droop) without load sharing lines, what will happen?",
    "a": "They will aggressively fight to maintain exact frequency/voltage, causing violent load swings (hunting) and eventual tripping",
    "opts": ["They will slowly drift out of phase until a short circuit occurs", "They will share load perfectly and maintain exactly 60Hz and 440V", "They will aggressively fight to maintain exact frequency/voltage, causing violent load swings (hunting) and eventual tripping", "They will automatically shut down the less efficient prime mover"],
    "exp": "Isochronous means 'constant speed/voltage'. If both try to hold exactly 60.00Hz, the slightest measurement error makes one think it needs to take ALL the load, and the other thinks it needs to drop ALL the load. They swing wildly (hunt). Droop prevents this.",
    "cat": "LS",
    "id": "T01A_373"
  },
  {
    "q": "You are transferring load from Generator 1 to Generator 2 to take Gen 1 offline. What is the correct procedure on the switchboard?",
    "a": "Gradually increase the governor speed control of Gen 2 while simultaneously decreasing the governor speed control of Gen 1 until Gen 1 reads near 0 kW",
    "opts": ["Increase the AVR voltage on Gen 2 while decreasing it on Gen 1", "Gradually increase the governor speed control of Gen 2 while simultaneously decreasing the governor speed control of Gen 1 until Gen 1 reads near 0 kW", "Open Gen 1's breaker immediately, and Gen 2 will automatically take the load", "Trip the Preferential Trip relay to shed load before opening the breaker"],
    "exp": "To transfer active load, you must manipulate the fuel. You increase fuel (speed setting) on the incoming machine and decrease fuel on the outgoing machine, 'sliding' the load over while keeping the bus frequency constant at 60Hz.",
    "cat": "LS",
    "id": "T01A_374"
  },
  {
    "q": "Two generators in parallel both show 500 kW on their meters. Gen 1 Ammeter shows 850A, Gen 2 Ammeter shows 850A. How are they sharing the load?",
    "a": "They are sharing both Active (kW) and Reactive (kVAR) loads perfectly",
    "opts": ["They are sharing both Active (kW) and Reactive (kVAR) loads perfectly", "They are about to trip on reverse power", "kW is shared perfectly, kVAR is shared poorly", "kW is shared poorly, kVAR is shared perfectly"],
    "exp": "If the kW meters match, the governors are sharing active load properly. If the Ammeters also match, it proves the AVRs are sharing the reactive load properly.",
    "cat": "LS",
    "id": "T01A_375"
  },
  {
    "q": "Two generators in parallel show Gen 1 at 600 kW and Gen 2 at 200 kW. What must the ETO do to balance them?",
    "a": "Adjust the governor controls: Increase the speed setting of Gen 2 and decrease the speed setting of Gen 1",
    "opts": ["Do nothing; the load sharing lines will correct it automatically within 5 minutes", "Open the bus-tie breaker to separate the switchboards", "Adjust the governor controls: Increase the speed setting of Gen 2 and decrease the speed setting of Gen 1", "Adjust the AVR controls: Increase voltage on Gen 2 and decrease on Gen 1"],
    "exp": "Unequal kW means unequal fuel. The ETO must use the switchboard governor raise/lower switches to give Gen 2 more fuel and Gen 1 less fuel until the kW meters match.",
    "cat": "LS",
    "id": "T01A_376"
  },
  {
    "q": "Two generators in parallel both show 400 kW. However, Gen 1 Ammeter shows 900A and Gen 2 Ammeter shows 300A. What must the ETO do to balance them?",
    "a": "Adjust the AVR controls: Increase the voltage setting on Gen 2 and decrease the voltage setting on Gen 1 until Ammeters match",
    "opts": ["Adjust the AVR controls: Increase the voltage setting on Gen 2 and decrease the voltage setting on Gen 1 until Ammeters match", "Check the engine fuel filters on Gen 2", "Synchronize the phase angles using the synchroscope", "Adjust the governor controls: Increase the speed setting on Gen 2"],
    "exp": "Matched kW but mismatched Amps means unequal reactive power (kVAR). This is an excitation fault. The ETO adjusts the voltage trimmers on the switchboard to balance the excitation until the Amps match.",
    "cat": "LS",
    "id": "T01A_377"
  },
  {
    "q": "What happens if a generator running in parallel completely loses its fuel supply?",
    "a": "Its kW drops to zero and goes negative; the other generator will back-feed it, turning it into a motor until the Reverse Power Relay trips its breaker",
    "opts": ["The other generator will automatically share its fuel via cross-over valves", "It will overspeed dramatically due to loss of load", "Its kW drops to zero and goes negative; the other generator will back-feed it, turning it into a motor until the Reverse Power Relay trips its breaker", "Its AVR shuts down, and it instantly disconnects from the bus"],
    "exp": "Without fuel, the prime mover cannot push the generator. Because it is locked in synchronism with the live busbar, the busbar will push power into the generator to keep the heavy engine spinning (motoring). The Reverse Power Relay detects this backward flow and trips.",
    "cat": "LS",
    "id": "T01A_378"
  },
  {
    "q": "What is the purpose of 'Load Sharing Lines' (or Cross-Current Compensation) wired between the AVRs of parallel generators?",
    "a": "To allow the AVRs to communicate their reactive load status, enabling perfect kVAR sharing without needing significant voltage droop",
    "opts": ["To transfer active kW power between the diesel engines", "To physically lock the rotors in phase mechanically", "To allow the AVRs to communicate their reactive load status, enabling perfect kVAR sharing without needing significant voltage droop", "To synchronize the speed of the prime movers before the breaker closes"],
    "exp": "While droop works, it causes the bus voltage to drop under load. Cross-current compensation uses a wire between the AVRs so they can 'see' each other's current. If one takes more reactive load, the system forces it to back off and forces the other to step up, maintaining flat bus voltage.",
    "cat": "LS",
    "id": "T01A_379"
  },
  {
    "q": "What are the three strict electrical conditions that must be met before two alternators can be paralleled?",
    "a": "Voltages must be equal, Frequencies must be equal (incoming slightly higher), and Phase Angles must match (synchroscope at 12 o'clock)",
    "opts": ["Currents must be equal, kW must be equal, and Power Factors must match", "Phase sequence must be R-B-Y, Amps must be zero, and Voltage must be 440V", "Voltages must be equal, Frequencies must be equal (incoming slightly higher), and Phase Angles must match (synchroscope at 12 o'clock)", "Speeds must be identical, Excitations must be identical, and Air Gaps must be identical"],
    "exp": "To close the breaker safely without a massive short circuit: (1) Voltages must match. (2) Frequencies must match (incoming slightly fast to take load). (3) The waveforms must be perfectly aligned (in-phase), indicated by the synchroscope pointing at 12 o'clock.",
    "cat": "LS",
    "id": "T01A_380"
  },
  {
    "q": "What are 'Circulating Currents' in the context of parallel alternators?",
    "a": "Wasted reactive currents that flow purely between the generators (not to the ship's load) caused by unequal excitation/voltage settings",
    "opts": ["Wasted reactive currents that flow purely between the generators (not to the ship's load) caused by unequal excitation/voltage settings", "Active power currents that transfer physical torque between the engines", "Currents that cool the stator windings by circulating through the air gap", "Currents generated by the PMG to power the AVR"],
    "exp": "If Gen 1 is excited to 450V and Gen 2 is excited to 430V while paralleled, Gen 1 will push current directly into Gen 2. This 'circulating current' produces no useful work for the ship, but heats up the windings of both generators and raises the Ammeter readings unnecessarily.",
    "cat": "LS",
    "id": "T01A_381"
  },
  {
    "q": "Under SOLAS II-1 Part D, what is the 'Dead Ship Condition', and what is the maximum allowed time to restore main power from this state?",
    "a": "A condition where all machinery and electrical power is completely dead (no steam, no compressed air, no batteries); power must be restored within 30 minutes",
    "opts": ["A condition where the main engine has failed but generators are running; power must be restored within 10 minutes", "A condition where only the emergency generator is running; power must be restored within 18 hours", "A condition where all machinery and electrical power is completely dead (no steam, no compressed air, no batteries); power must be restored within 30 minutes", "A total blackout condition that requires external tug assistance for recovery"],
    "exp": "The 'Dead Ship Condition' means no stored energy is available to start the main plant. SOLAS mandates that the vessel must have the capability (usually via the emergency generator and a dead-ship starting air compressor) to restore the main electrical system within 30 minutes.",
    "cat": "SOL",
    "id": "T01A_382"
  },
  {
    "q": "What is the SOLAS requirement regarding the number of main electrical generators on a cargo vessel?",
    "a": "There must be at least two main generating sets, capable of supplying all essential services even if any one generating set is stopped",
    "opts": ["There must be at least two main generating sets, capable of supplying all essential services even if any one generating set is stopped", "There is no set number, provided the total kW meets the ship's maximum demand", "There must be at least one main generator and one emergency generator", "There must be at least three main generating sets of equal capacity"],
    "exp": "SOLAS requires redundancy. A ship must have a minimum of two main generators, and the power available must be sufficient to maintain all normal operational and habitable conditions even if one entire generator set is out of service (the 'N-1' rule).",
    "cat": "SOL",
    "id": "T01A_383"
  },
  {
    "q": "According to SOLAS, if the main electrical power fails, how quickly must the emergency steering gear system be supplied with power?",
    "a": "Automatically, within 45 seconds",
    "opts": ["Automatically, within 45 seconds", "Automatically, within 10 seconds", "It must be powered by a dedicated UPS without any interruption", "Manually, within 2 minutes"],
    "exp": "The steering gear is a critical safety item. Upon loss of main power, the emergency generator must auto-start and connect, and power must be restored to the steering gear within 45 seconds.",
    "cat": "SOL",
    "id": "T01A_384"
  },
  {
    "q": "SOLAS dictates specific IP (Ingress Protection) ratings for marine electrical equipment. What is the minimum standard IP rating required for a main generator enclosure in the engine room?",
    "a": "IP 22",
    "opts": ["IP 44", "IP 56", "IP 10", "IP 22"],
    "exp": "Generators in the engine room are typically built to a minimum of IP 22 (protected against objects >12.5mm and dripping water when tilted up to 15 degrees). High voltage generators or those in specific hazard zones may require IP 44 or IP 54, but IP 22 is the baseline minimum.",
    "cat": "SOL",
    "id": "T01A_385"
  },
  {
    "q": "What is the SOLAS requirement for the maximum permissible transient frequency deviation during a sudden load change?",
    "a": "\u00b110% of rated frequency, recovering to within \u00b15% in not more than 5 seconds",
    "opts": ["\u00b12.5% of rated frequency, recovering to within \u00b11% in 1.5 seconds", "\u00b15% of rated frequency, recovering to within \u00b12.5% in 3 seconds", "\u00b120% of rated frequency, recovering to within \u00b15% in 10 seconds", "\u00b110% of rated frequency, recovering to within \u00b15% in not more than 5 seconds"],
    "exp": "For frequency (governor performance), SOLAS allows a maximum transient excursion of \u00b110% during a sudden load change, which must recover to the steady-state limit of \u00b15% within 5 seconds.",
    "cat": "SOL",
    "id": "T01A_386"
  },
  {
    "q": "According to SOLAS, how many starting attempts must the Emergency Generator starting system be capable of providing?",
    "a": "At least 3 consecutive starts from the primary source, and 3 consecutive starts from a second independent source (total of 6) within 30 minutes",
    "opts": ["Unlimited starts provided the emergency switchboard is live", "3 consecutive starts from a single dedicated battery bank", "1 automatic start and 1 manual crank start", "At least 3 consecutive starts from the primary source, and 3 consecutive starts from a second independent source (total of 6) within 30 minutes"],
    "exp": "The emergency generator must have two independent starting systems (e.g., two sets of batteries, or one battery and one hydraulic/spring starter). Each source must have stored energy for at least 3 consecutive starts, making a total of 6 assured starts.",
    "cat": "SOL",
    "id": "T01A_387"
  },
  {
    "q": "SOLAS requires marine electrical equipment to operate satisfactorily under specific angles of ship inclination. What are these angles?",
    "a": "Rolling up to 22.5 degrees and pitching up to 10 degrees",
    "opts": ["Rolling up to 15 degrees and pitching up to 15 degrees", "Rolling up to 22.5 degrees and pitching up to 10 degrees", "Rolling up to 45 degrees and pitching up to 22.5 degrees", "Rolling up to 10 degrees and pitching up to 5 degrees"],
    "exp": "All vital marine machinery, including alternators and their lubrication systems, must function normally when the ship is rolling up to 22.5\u00b0 either side and pitching up to 10\u00b0 by bow or stern.",
    "cat": "SOL",
    "id": "T01A_388"
  },
  {
    "q": "What is the SOLAS regulation regarding the starting battery for the Emergency Generator?",
    "a": "It must be located in the same space as the emergency generator and used ONLY for starting the emergency generator",
    "opts": ["It must be located in the same space as the emergency generator and used ONLY for starting the emergency generator", "It must be a lead-acid type with a capacity of at least 500 Ah", "It can be shared with the ship's general 24V DC emergency lighting system", "It must be located on the bridge to ensure safety from engine room fires"],
    "exp": "The dedicated starting batteries must be placed in the emergency generator room (to avoid voltage drop on long cables) and are strictly prohibited from supplying any other circuits. This guarantees the starting energy is never drained by other shipboard faults.",
    "cat": "SOL",
    "id": "T01A_389"
  },
  {
    "q": "Under SOLAS, if a ship is fitted with an Unattended Machinery Space (UMS), what must happen if the running generator trips due to a fault?",
    "a": "The standby generator must automatically start, synchronize (if necessary), connect to the busbar, and sequentially restart essential pumps within 45 seconds",
    "opts": ["The emergency generator takes the full load permanently", "The main engine must automatically shut down to prevent damage", "The duty engineer is given a 3-minute alarm delay to manually start the standby generator", "The standby generator must automatically start, synchronize (if necessary), connect to the busbar, and sequentially restart essential pumps within 45 seconds"],
    "exp": "For UMS notation, automatic blackout recovery is mandatory. If the running set fails, the automation must detect the dead bus, auto-start the standby main generator, close its breaker, and sequentially start essential cooling/lubricating pumps to keep the main engine running safely.",
    "cat": "SOL",
    "id": "T01A_390"
  },
  {
    "q": "What does SOLAS dictate regarding the routing of main electrical cables and emergency electrical cables?",
    "a": "They must be routed completely separately and kept as far apart as practical to prevent a single fire from destroying both power systems",
    "opts": ["Emergency cables must run exclusively through the double bottom tanks", "They must be bundled together in armored conduits for maximum physical protection", "They must be routed completely separately and kept as far apart as practical to prevent a single fire from destroying both power systems", "They must share the same cable trays but be separated by a grounded metal divider"],
    "exp": "To ensure true redundancy, SOLAS requires that main and emergency feeder cables follow different physical routes through the ship. A fire in one alleyway should not be able to burn both the main power and emergency power cables to the steering gear.",
    "cat": "SOL",
    "id": "T01A_391"
  },
  {
    "q": "According to SOLAS II-1 Part D, what is the required location of the main switchboard relative to the main generators?",
    "a": "It must be located as near as is practicable to the main generators and within the same main fire zone",
    "opts": ["It must be located in the emergency generator room", "It must be located in a completely different fire zone from the generators", "It must be located on the navigation bridge for easy access by the deck officers", "It must be located as near as is practicable to the main generators and within the same main fire zone"],
    "exp": "The main switchboard must be in the same machinery space and fire zone as the main generators. This keeps the heavy main power cables short and ensures that the engineering watch has simultaneous control over both the prime movers and the switchboard.",
    "cat": "SOL",
    "id": "T01A_392"
  },
  {
    "q": "What is the SOLAS regulation regarding the rating and testing of the generator Overcurrent Relay (OCR)?",
    "a": "It must have an Inverse Definite Minimum Time (IDMT) characteristic and protect the generator against sustained overloads and short circuits",
    "opts": ["It must have an Inverse Definite Minimum Time (IDMT) characteristic and protect the generator against sustained overloads and short circuits", "It must solely protect the busbar, not the generator windings", "It must be physically linked to the fuel rack to shut down the engine on overload", "It must be set to trip instantaneously the moment the rated current is exceeded by 1 Amp"],
    "exp": "Generators must be protected against overcurrent. The OCR uses an IDMT curve, meaning the higher the fault current, the faster it trips. It allows minor, short-duration overloads (like motor starting) but trips quickly on severe faults to protect the stator windings.",
    "cat": "SOL",
    "id": "T01A_393"
  },
  {
    "q": "Under SOLAS, what essential equipment MUST be supplied by the Emergency Generator during a blackout?",
    "a": "Emergency lighting, steering gear, fire pumps, navigation lights, internal communications, and general alarm systems",
    "opts": ["Cargo winches, bow thruster, and ballast pumps", "Main engine lubricating oil pumps and jacket water pumps", "Emergency lighting, steering gear, fire pumps, navigation lights, internal communications, and general alarm systems", "Air conditioning compressors, galley ovens, and purifiers"],
    "exp": "The emergency generator only powers life-safety and ship-survival equipment. It does not have the capacity to power the main propulsion support systems or crew comfort systems (galley, AC, heavy cargo gear).",
    "cat": "SOL",
    "id": "T01A_394"
  },
  {
    "q": "How does SOLAS require non-essential loads to be handled during a generator overload condition?",
    "a": "They must be automatically disconnected (load shed) by a Preferential Trip relay to prevent the generator from tripping and causing a blackout",
    "opts": ["The AVR must lower the voltage to reduce the power consumed by non-essential loads", "They must be automatically disconnected (load shed) by a Preferential Trip relay to prevent the generator from tripping and causing a blackout", "They are transferred instantly to the emergency switchboard", "The crew must manually turn them off within 5 minutes of an alarm sounding"],
    "exp": "SOLAS mandates a Preferential Trip (Load Shedding) system. If the generator is overloaded, it sacrifices non-essential loads (like AC, galley, fans) automatically to keep the essential machinery (propulsion, steering) running and prevent a total ship blackout.",
    "cat": "SOL",
    "id": "T01A_395"
  },
  {
    "q": "What is 'Residual Magnetism' in the context of a marine alternator?",
    "a": "The small amount of magnetic flux that naturally remains in the iron core of the rotor after the excitation current has been switched off",
    "opts": ["The stray magnetic field that interferes with ship navigation", "The static electrical charge built up on the slip rings", "The small amount of magnetic flux that naturally remains in the iron core of the rotor after the excitation current has been switched off", "The permanent magnetic field generated by the PMG"],
    "exp": "When a magnetic material (like the iron core of the rotor) is subjected to a strong magnetic field (via DC excitation current), it retains a tiny fraction of that magnetism even after the current is removed. This is called residual magnetism.",
    "cat": "RM",
    "id": "T01A_396"
  },
  {
    "q": "Why is Residual Magnetism absolutely essential for a 'Self-Excited' alternator?",
    "a": "Because it induces the small initial voltage (5-10V) required to power the AVR and 'bootstrap' the main excitation field when the machine starts",
    "opts": ["It keeps the rotor mechanically balanced at high speeds", "It provides the necessary braking torque during shutdown", "Because it induces the small initial voltage (5-10V) required to power the AVR and 'bootstrap' the main excitation field when the machine starts", "It prevents the rotating diodes from overheating"],
    "exp": "A self-excited alternator takes its excitation power from its own output. To get that output, it needs a magnetic field. It relies on the faint residual magnetism to generate an initial 5-10 Volts. The AVR uses this tiny voltage to feed a tiny current back into the field, starting a feedback loop that builds up to 440V.",
    "cat": "RM",
    "id": "T01A_397"
  },
  {
    "q": "Which of the following is a common cause for the loss of residual magnetism in an alternator?",
    "a": "Prolonged idleness (months without running), severe mechanical shock, excessive heat, or a massive short circuit",
    "opts": ["Running the generator continuously at 100% full load", "Using the wrong grade of carbon brushes on the slip rings", "Frequent testing of the overspeed trip mechanism", "Prolonged idleness (months without running), severe mechanical shock, excessive heat, or a massive short circuit"],
    "exp": "Residual magnetism is fragile. It naturally decays over long periods of idleness (e.g., during drydock). It can also be 'shocked' out of the iron core by heavy mechanical impacts, excessive heat, or the massive demagnetizing forces of a dead short circuit.",
    "cat": "RM",
    "id": "T01A_398"
  },
  {
    "q": "What is the primary operational symptom indicating that an alternator has lost its residual magnetism?",
    "a": "The prime mover runs at exactly rated speed (e.g., 60Hz), but the voltmeter on the switchboard reads exactly 0 Volts",
    "opts": ["The voltage builds to 440V but fluctuates wildly", "The prime mover fails to reach rated speed and stalls", "The generator outputs 440V but the frequency is stuck at 0Hz", "The prime mover runs at exactly rated speed (e.g., 60Hz), but the voltmeter on the switchboard reads exactly 0 Volts"],
    "exp": "If the mechanical engine is working perfectly (rated RPM) but there is zero electrical output, it means the Faraday's Law equation (EMF = N x d(phi)/dt) lacks 'phi' (magnetic flux). No initial flux means no voltage can be induced.",
    "cat": "RM",
    "id": "T01A_399"
  },
  {
    "q": "What is the industry term for the procedure used to restore lost residual magnetism to an alternator?",
    "a": "Flashing the Field",
    "opts": ["Meggering the Rotor", "Bootstrapping the Core", "Flashing the Field", "Excitation Purging"],
    "exp": "Applying an external DC voltage to the field winding to remagnetize the iron core is universally known as 'flashing the field'.",
    "cat": "RM",
    "id": "T01A_400"
  },
  {
    "q": "What external power source is typically used to flash the field of a marine alternator?",
    "a": "A 12V or 24V DC battery",
    "opts": ["The 220V AC lighting circuit", "A 500V DC Megger", "A 12V or 24V DC battery", "A secondary Permanent Magnet Generator"],
    "exp": "A standard 12V or 24V DC battery provides a clean, safe, and portable source of direct current capable of pushing enough current through the field winding to realign the magnetic domains in the iron core.",
    "cat": "RM",
    "id": "T01A_401"
  },
  {
    "q": "During the flashing procedure, why is it critical that the prime mover is running at its rated speed?",
    "a": "So that the moment the magnetism is restored, the machine immediately induces voltage and the AVR takes over to sustain the field",
    "opts": ["To ensure the rotating rectifiers are spinning fast enough to act as capacitors", "Because stationary flashing will instantly melt the iron core", "To provide centrifugal cooling for the field windings", "So that the moment the magnetism is restored, the machine immediately induces voltage and the AVR takes over to sustain the field"],
    "exp": "While you *can* flash a stationary rotor, doing it while running is standard practice. This allows you to instantly see on the voltmeter if the flash was successful, and the AVR immediately takes over the excitation duties, 'locking in' the magnetism.",
    "cat": "RM",
    "id": "T01A_402"
  },
  {
    "q": "What is the most critical safety and functional precaution regarding the polarity of the battery when flashing the field?",
    "a": "Positive must go to the Positive field terminal, and Negative to the Negative terminal; reverse polarity will imprint reversed magnetism",
    "opts": ["The battery polarity does not matter as long as it is DC", "Positive must go to the Negative field terminal to cancel the demagnetization", "Positive must go to the Positive field terminal, and Negative to the Negative terminal; reverse polarity will imprint reversed magnetism", "The polarity must be rapidly switched back and forth to 'shake' the domains"],
    "exp": "If you flash with reverse polarity, you will force the North and South poles to swap positions. The AVR is designed to output a specific DC polarity. If the core has reversed magnetism, the AVR's initial output will fight the residual magnetism, and the generator will still fail to build voltage.",
    "cat": "RM",
    "id": "T01A_403"
  },
  {
    "q": "How long should the 12V/24V battery remain connected to the field winding during the flashing process?",
    "a": "Only for 2 to 3 seconds; it must be removed immediately once voltage begins to build",
    "opts": ["Until the alternator reaches its full rated load", "Only for 2 to 3 seconds; it must be removed immediately once voltage begins to build", "It must be permanently installed as a backup excitation source", "For a minimum of 5 minutes to ensure deep magnetization"],
    "exp": "Flashing is a momentary 'jump start'. Holding the battery on for too long can damage the battery (as the field voltage rapidly increases when the AVR takes over and back-feeds it) or overheat the small cables being used.",
    "cat": "RM",
    "id": "T01A_404"
  },
  {
    "q": "Before flashing the field, what must be done to the Automatic Voltage Regulator (AVR)?",
    "a": "The AVR must be completely disconnected from the field circuit to prevent the battery voltage from damaging its semiconductor components",
    "opts": ["The AVR must be set to maximum boost", "The AVR must be temporarily short-circuited", "Nothing, the AVR manages the flashing process automatically", "The AVR must be completely disconnected from the field circuit to prevent the battery voltage from damaging its semiconductor components"],
    "exp": "Applying external DC battery power directly into the excitation circuit can push current backward into the delicate thyristors and diodes of the AVR, potentially destroying them. Always isolate the AVR before flashing.",
    "cat": "RM",
    "id": "T01A_405"
  },
  {
    "q": "In a modern Brushless Alternator, where exactly do you apply the battery voltage to flash the field?",
    "a": "To the Exciter Stator Field terminals (usually marked F1 and F2, or F+ and F-)",
    "opts": ["To the Exciter Stator Field terminals (usually marked F1 and F2, or F+ and F-)", "Directly to the rotating diode wheel", "To the main stator output terminals (R, Y, B)", "To the main rotor slip rings"],
    "exp": "Because the main field is spinning and has no slip rings, you cannot reach it. You must flash the stationary Exciter Field (on the stator). The battery excites the exciter, which induces AC in the exciter rotor, which rectifies to DC, which then builds the main field.",
    "cat": "RM",
    "id": "T01A_406"
  },
  {
    "q": "Why does an alternator equipped with a Permanent Magnet Generator (PMG) NOT suffer from loss of residual magnetism?",
    "a": "The PMG has physical permanent magnets that guarantee an independent power supply to the AVR, eliminating the need for residual magnetism in the main core",
    "opts": ["The PMG constantly injects AC into the main core while stopped", "The PMG acts as an internal battery charger for the AVR", "The PMG has physical permanent magnets that guarantee an independent power supply to the AVR, eliminating the need for residual magnetism in the main core", "The PMG uses a mechanical slip clutch to maintain field strength"],
    "exp": "The primary advantage of a PMG system is that the AVR gets its power from spinning actual permanent magnets (which never lose their magnetism under normal conditions) rather than relying on the fragile residual magnetism of the main iron core.",
    "cat": "RM",
    "id": "T01A_407"
  },
  {
    "q": "You start an older self-excited alternator. It shows 0V. You measure the main stator terminals with a sensitive multimeter and read 0.00V. What is the diagnosis?",
    "a": "Total loss of residual magnetism; there is no flux to generate even the initial few volts",
    "opts": ["The rotating diodes are short-circuited", "Total loss of residual magnetism; there is no flux to generate even the initial few volts", "The AVR is faulty and needs replacement", "The over-voltage relay has tripped"],
    "exp": "If the multimeter reads absolutely 0.00V at the main terminals, the core is completely dead magnetically. If it had residual magnetism but a faulty AVR, you would still read a tiny voltage (e.g., 5V to 15V) induced purely by the residual flux.",
    "cat": "RM",
    "id": "T01A_408"
  },
  {
    "q": "You start a self-excited alternator. The panel reads 0V, but a sensitive multimeter on the main terminals reads 12V AC. What is the diagnosis?",
    "a": "Residual magnetism is present (causing the 12V), but the AVR or excitation circuit is faulty and failing to 'bootstrap' the voltage up to 440V",
    "opts": ["Residual magnetism is present (causing the 12V), but the AVR or excitation circuit is faulty and failing to 'bootstrap' the voltage up to 440V", "The generator is perfectly healthy; 12V is the standard standby voltage", "Loss of residual magnetism; the 12V is just induction from the prime mover", "The governor speed is too low"],
    "exp": "Reading a small voltage (10-15V) proves that residual flux exists and the rotor is spinning. The fact that it doesn't climb to 440V means the AVR is either not receiving that 12V, is dead, or there is an open circuit in the field wiring preventing the feedback loop.",
    "cat": "RM",
    "id": "T01A_409"
  },
  {
    "q": "If an ETO flashes the field but the voltage drops immediately back to 0V as soon as the battery is removed, what is the most likely fault?",
    "a": "The AVR is faulty, or there is a break (open circuit) in the excitation wiring preventing the self-sustaining loop",
    "opts": ["The prime mover was spinning too fast", "The main circuit breaker was left closed", "The battery used did not have enough Amp-Hours", "The AVR is faulty, or there is a break (open circuit) in the excitation wiring preventing the self-sustaining loop"],
    "exp": "Flashing temporarily substitutes for the AVR. If voltage builds while the battery is on (proving the field and stator work), but dies when removed, it proves the AVR is failing to take over and supply the necessary DC current to keep the field alive.",
    "cat": "RM",
    "id": "T01A_410"
  },
  {
    "q": "What is the primary instrument used to test the Insulation Resistance (IR) of marine alternator windings?",
    "a": "A Megger (Megohmmeter), typically using 500V DC for standard 440V systems",
    "opts": ["A clamp meter", "A standard digital multimeter set to Ohms", "A Megger (Megohmmeter), typically using 500V DC for standard 440V systems", "An oscilloscope"],
    "exp": "A standard multimeter uses a tiny 3V or 9V battery, which cannot detect microscopic high-voltage breakdown paths. A Megger injects high voltage (500V DC for a 440V machine) to stress the insulation and accurately measure resistance in Megohms.",
    "cat": "MT",
    "id": "T01A_411"
  },
  {
    "q": "What is the absolute minimum acceptable Insulation Resistance (IR) value for a 440V alternator in service, below which it must NOT be started?",
    "a": "1.0 Megohm (M\u03a9)",
    "opts": ["1.0 Megohm (M\u03a9)", "100.0 Megohm (M\u03a9)", "10.0 Megohm (M\u03a9)", "0.1 Megohm (M\u03a9)"],
    "exp": "According to IEEE and marine classification standards, the minimum acceptable IR for equipment operating below 1000V is 1 Megohm. Operating below this risks an immediate phase-to-earth flashover.",
    "cat": "MT",
    "id": "T01A_412"
  },
  {
    "q": "When performing a Megger test on an alternator stator, how should the connections be made?",
    "a": "Connect one megger lead to the stator terminal (e.g., U, V, or W) and the other lead to the bare metal earth of the generator casing",
    "opts": ["Connect one lead to the AVR and the other to the main switchboard", "Connect one megger lead to the stator terminal (e.g., U, V, or W) and the other lead to the bare metal earth of the generator casing", "Connect one lead to the rotor shaft and the other to the slip ring", "Connect one lead to Phase U and the other to Phase V"],
    "exp": "A phase-to-earth test verifies that the insulation separating the live copper conductors from the grounded iron chassis is intact. The connection is from the phase terminal to a clean, unpainted earth point.",
    "cat": "MT",
    "id": "T01A_413"
  },
  {
    "q": "Why is the Polarization Index (PI) test highly recommended for large marine alternators rather than just a 1-minute megger reading?",
    "a": "Because PI tests the ratio of the 10-minute reading to the 1-minute reading, revealing whether the insulation is genuinely dry (PI > 2) or contaminated/wet (PI < 1), independent of temperature",
    "opts": ["Because PI uses AC voltage instead of DC voltage to prevent damage", "Because PI physically removes moisture by heating the windings", "Because PI tests the magnetic polarization of the rotor core", "Because PI tests the ratio of the 10-minute reading to the 1-minute reading, revealing whether the insulation is genuinely dry (PI > 2) or contaminated/wet (PI < 1), independent of temperature"],
    "exp": "A single IR reading fluctuates wildly with temperature. PI (10min IR / 1min IR) is a ratio. Good insulation acts like a capacitor; as it charges over 10 minutes, absorption current drops and resistance rises. If dirty/wet, leakage current remains high, and the resistance stays flat (PI near 1).",
    "cat": "MT",
    "id": "T01A_414"
  },
  {
    "q": "An alternator in drydock gives an IR reading of 0.6 M\u03a9. You decide to dry the windings using built-in anti-condensation space heaters. What is the biggest risk during this process?",
    "a": "Heating too rapidly can cause trapped moisture inside the insulation to boil into steam, expanding and physically rupturing the varnish",
    "opts": ["Heating too rapidly can cause trapped moisture inside the insulation to boil into steam, expanding and physically rupturing the varnish", "The heaters might reverse the residual magnetism", "The space heaters draw too much power from the emergency bus", "The heat will cause the copper windings to melt"],
    "exp": "Drying wet windings must be done slowly. If intense heat is applied quickly (e.g., using high-current welding transformers), trapped moisture boils. The expanding steam cracks the Class F varnish, permanently destroying the insulation.",
    "cat": "MT",
    "id": "T01A_415"
  },
  {
    "q": "What is the proper method for cleaning heavy, oily carbon dust off alternator stator windings?",
    "a": "Vacuum the loose dust, then gently wipe with lint-free rags soaked in an approved, non-conductive, quick-drying electro-cleaner",
    "opts": ["Wash the windings with high-pressure fresh water and detergent", "Blast the windings with high-pressure compressed air", "Vacuum the loose dust, then gently wipe with lint-free rags soaked in an approved, non-conductive, quick-drying electro-cleaner", "Scrub the windings aggressively with a wire brush"],
    "exp": "Never use compressed air initially; it drives conductive dust deeper into the crevices of the windings. Never use water or unapproved solvents (which dissolve varnish). Vacuum first, then use specific evaporative electro-cleaner.",
    "cat": "MT",
    "id": "T01A_416"
  },
  {
    "q": "After applying fresh Class F insulating varnish to a cleaned stator, why must it be baked in a controlled oven?",
    "a": "To drive off the solvents and cure the resin, creating a hard, moisture-resistant, and mechanically solid protective shell",
    "opts": ["To magnetize the iron core", "To permanently bond the rotor to the stator", "To melt the copper wire into a solid block", "To drive off the solvents and cure the resin, creating a hard, moisture-resistant, and mechanically solid protective shell"],
    "exp": "Varnish consists of resins and solvents. Baking evaporates the solvent and cross-links the resin (curing). This hardens the winding block, preventing wires from vibrating (which causes chafing shorts) and sealing out marine humidity.",
    "cat": "MT",
    "id": "T01A_417"
  },
  {
    "q": "During routine maintenance, you inspect the generator bearings. What is the standard classification society requirement for the replacement of rolling element bearings?",
    "a": "They must be replaced strictly according to the manufacturer's specified running hours (e.g., every 20,000 hours), regardless of how they look or sound",
    "opts": ["They are lifetime lubricated and never need replacement", "They are only replaced when the PT100 sensor triggers an alarm", "They must be replaced strictly according to the manufacturer's specified running hours (e.g., every 20,000 hours), regardless of how they look or sound", "They are replaced whenever the air gap increases by 1 mm"],
    "exp": "Generator bearings suffer from metal fatigue due to continuous heavy loads and vibration. They are treated as critical lifed components and replaced on a strict running-hour schedule (Planned Maintenance System) to prevent catastrophic in-service collapse.",
    "cat": "MT",
    "id": "T01A_418"
  },
  {
    "q": "What diagnostic tool is best used while the alternator is running under load to detect early-stage bearing wear or rotor unbalance?",
    "a": "Vibration Analysis (taking readings of velocity and acceleration at the bearing housings)",
    "opts": ["Thermal imaging of the stator frame", "Using a stroboscope on the cooling fan", "Vibration Analysis (taking readings of velocity and acceleration at the bearing housings)", "Megger testing the slip rings"],
    "exp": "Vibration analysis uses accelerometers to measure the specific frequencies of vibration. It can pinpoint exact faults (e.g., outer race defect, inner race defect, rotor unbalance) months before the bearing actually fails or overheats.",
    "cat": "MT",
    "id": "T01A_419"
  },
  {
    "q": "When reinstalling a massive alternator rotor into the stator during drydock, what essential precaution is taken to protect the stator windings?",
    "a": "Inserting a 'slipper' (a piece of thick leather, presspan, or rigid plastic) into the bottom of the stator to physically shield the windings from being struck by the heavy rotor",
    "opts": ["Inserting a 'slipper' (a piece of thick leather, presspan, or rigid plastic) into the bottom of the stator to physically shield the windings from being struck by the heavy rotor", "Applying 24V DC to the stator to magnetically repel the rotor", "Freezing the rotor with liquid nitrogen so it shrinks", "Coating the rotor completely in grease"],
    "exp": "The clearance is only ~2mm. When a 2-ton rotor is pushed in by a crane, it inevitably sags or swings. A tough, non-scratching 'slipper' is laid over the bottom stator coils. If the rotor drops, it hits the slipper, not the fragile copper windings.",
    "cat": "MT",
    "id": "T01A_420"
  },
  {
    "q": "A 500V Megger test injects high voltage DC into the windings. What physical property of the massive stator winding makes it dangerous to touch immediately after the test?",
    "a": "Capacitance; the winding acts like a giant capacitor and stores the 500V DC charge, creating a lethal shock hazard",
    "opts": ["Inductance; it creates a massive AC kickback voltage", "Capacitance; the winding acts like a giant capacitor and stores the 500V DC charge, creating a lethal shock hazard", "Resistance; the winding retains extreme heat from the test", "Residual Magnetism; it will instantly attract metal tools"],
    "exp": "Large windings have significant capacitance to ground. The Megger acts as a DC power supply, charging this 'capacitor' to 500V. This voltage remains trapped in the copper after the megger is turned off, requiring safe discharging to earth.",
    "cat": "MT",
    "id": "T01A_421"
  },
  {
    "q": "How is a stator winding safely discharged after a Megger test?",
    "a": "First use a high-resistance discharge probe to bleed the voltage slowly without arcing, then apply solid earth clamps",
    "opts": ["By shorting the phases directly to ground with a heavy screwdriver", "By waiting exactly 60 seconds for the charge to evaporate", "By connecting the AVR, which absorbs the shock", "First use a high-resistance discharge probe to bleed the voltage slowly without arcing, then apply solid earth clamps"],
    "exp": "Shorting a 500V charged coil directly to ground creates a massive spark (arc), which can damage terminals and cause transients. It must be bled off slowly through a resistor (often built into good meggers or specialized grounding wands).",
    "cat": "MT",
    "id": "T01A_422"
  },
  {
    "q": "During an overspeed test simulation on an electronic governor, how does the ETO inject a simulated speed signal?",
    "a": "By disconnecting the magnetic pick-up unit (MPU) and connecting a frequency calibrator/signal generator to inject an AC sine wave of increasing frequency",
    "opts": ["By manually turning the flywheel with a high-speed drill", "By disconnecting the magnetic pick-up unit (MPU) and connecting a frequency calibrator/signal generator to inject an AC sine wave of increasing frequency", "By shorting the MPU terminals rapidly with a jumper wire", "By applying varying DC voltage to the fuel actuator"],
    "exp": "The MPU (speed sensor) generates an AC frequency proportional to gear teeth passing it. To simulate speed electronically, you disconnect the MPU and inject a clean AC sine wave (using a calibrator) into the control module, raising the frequency until the trip logic activates.",
    "cat": "MT",
    "id": "T01A_423"
  },
  {
    "q": "What is the primary visual difference between normal brush wear and destructive sparking wear on an alternator slip ring?",
    "a": "Normal wear produces a smooth, polished chocolate-brown patina; sparking produces a blackened, rough, pitted, or grooved surface",
    "opts": ["Normal wear leaves the ring bright bare copper; sparking turns it green with oxidation", "There is no visual difference; it can only be measured with a micrometer", "Normal wear produces deep silver grooves; sparking produces a completely flat surface", "Normal wear produces a smooth, polished chocolate-brown patina; sparking produces a blackened, rough, pitted, or grooved surface"],
    "exp": "A healthy slip ring develops a 'film' or 'patina' (copper oxide and graphite) that is dark, smooth, and highly polished, acting as a lubricant. Sparking destroys this film, leaving raw, rough, pitted, and blackened copper.",
    "cat": "MT",
    "id": "T01A_424"
  },
  {
    "q": "Why is it forbidden to use Silicon Carbide emery paper to clean or polish copper slip rings?",
    "a": "Silicon carbide particles are extremely hard; they break off and embed themselves in the soft copper, which then aggressively grinds away the carbon brushes",
    "opts": ["Silicon carbide is highly conductive and causes short circuits", "Silicon carbide chemically reacts with copper to form explosive gases", "Silicon carbide particles are extremely hard; they break off and embed themselves in the soft copper, which then aggressively grinds away the carbon brushes", "Silicon carbide melts at high temperatures, leaving a sticky residue"],
    "exp": "Copper is soft. Silicon carbide (common black sandpaper) grit embeds into the copper surface. When the machine runs, the slip ring basically becomes a rotating grindstone, destroying the carbon brushes in hours. Only use Glass paper, Garnet paper, or specific commutator stones.",
    "cat": "MT",
    "id": "T01A_425"
  },
  {
    "q": "When checking an alternator's main terminal box, why is it critical to check the tightness of the main cable connections with a torque wrench?",
    "a": "Loose connections cause high resistance, which leads to intense localized heating (I\u00b2R losses) that can melt the terminals and start a fire",
    "opts": ["Loose connections allow moisture to enter the copper strands", "Loose connections cause the frequency to fluctuate", "Loose connections cause high resistance, which leads to intense localized heating (I\u00b2R losses) that can melt the terminals and start a fire", "Loose connections cause reverse power trips"],
    "exp": "Hundreds of amps flow through the main terminals. A loose bolt creates a high-resistance joint. Power loss = I\u00b2R. With 1000A flowing, even 0.01 ohms of resistance generates 10,000 Watts of localized heat, rapidly melting the brass/copper and igniting the insulation.",
    "cat": "MT",
    "id": "T01A_426"
  }
]);
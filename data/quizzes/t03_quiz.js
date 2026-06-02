window.loadQuizzes('T03_Motors', [
  {
    "q": "What is the primary law governing the induction of EMF in the rotor of an induction motor?",
    "a": "Faraday's Law of Electromagnetic Induction",
    "opts": [
      "Lenz's Law",
      "Faraday's Law of Electromagnetic Induction",
      "Ampere's Circuital Law",
      "Fleming's Left Hand Rule"
    ],
    "exp": "Faraday's Law states that an EMF is induced in a conductor when there is a relative change in magnetic flux linkage, which occurs when the RMF cuts the stationary rotor bars.",
    "id": "T03_S1_001",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "How far apart are the three-phase windings distributed in the stator of an induction motor?",
    "a": "120 electrical degrees",
    "opts": [
      "90 electrical degrees",
      "180 electrical degrees",
      "120 electrical degrees",
      "360 electrical degrees"
    ],
    "exp": "The stator has three distinct windings spaced exactly 120 electrical degrees apart to create a uniform Rotating Magnetic Field (RMF) when fed by a 3-phase supply.",
    "id": "T03_S1_002",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "What is the formula to calculate synchronous speed (Ns)?",
    "a": "Ns = 120f / P",
    "opts": [
      "Ns = 120P / f",
      "Ns = 60f / P",
      "Ns = 120f / P",
      "Ns = f / 120P"
    ],
    "exp": "Ns is directly proportional to frequency (f) and inversely proportional to the number of poles (P).",
    "id": "T03_S1_003",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "What is the synchronous speed of a 2-pole induction motor on a 60Hz supply?",
    "a": "3600 RPM",
    "opts": [
      "3000 RPM",
      "3600 RPM",
      "1800 RPM",
      "1500 RPM"
    ],
    "exp": "Ns = 120 * 60 / 2 = 3600 RPM.",
    "id": "T03_S1_004",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "Why is the rotor of an induction motor short-circuited?",
    "a": "To allow the induced EMF to drive a current, which then interacts with the RMF to produce torque",
    "opts": [
      "To prevent high voltage buildup",
      "To allow the induced EMF to drive a current, which then interacts with the RMF to produce torque",
      "To provide physical strength to the rotor",
      "To eliminate the need for brushes"
    ],
    "exp": "Without a closed circuit, the induced EMF cannot produce a current. Torque (F=BIL) requires a current-carrying conductor in a magnetic field.",
    "id": "T03_S1_005",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "What happens if the rotor of an induction motor reaches exact synchronous speed?",
    "a": "Relative motion becomes zero, no EMF is induced, rotor current drops to zero, and torque becomes zero",
    "opts": [
      "The motor operates at maximum efficiency",
      "Relative motion becomes zero, no EMF is induced, rotor current drops to zero, and torque becomes zero",
      "The motor draws infinite current",
      "The motor reverses direction"
    ],
    "exp": "The rotor must always lag the RMF (slip) to ensure flux lines are continuously cut to induce the current required for torque.",
    "id": "T03_S1_006",
    "topic": "T03_Motors",
    "cat": "Slip"
  },
  {
    "q": "What is the mathematical definition of fractional slip (s)?",
    "a": "s = (Ns - N) / Ns",
    "opts": [
      "s = (Ns - N) / N",
      "s = (N - Ns) / Ns",
      "s = (Ns - N) / Ns",
      "s = Ns / (Ns - N)"
    ],
    "exp": "Slip is the difference between synchronous speed (Ns) and actual rotor speed (N), expressed as a fraction of synchronous speed.",
    "id": "T03_S1_007",
    "topic": "T03_Motors",
    "cat": "Slip"
  },
  {
    "q": "At the exact moment of starting (standstill), what is the value of slip?",
    "a": "1 (or 100%)",
    "opts": [
      "0 (or 0%)",
      "1 (or 100%)",
      "0.05 (or 5%)",
      "Infinity"
    ],
    "exp": "At standstill, rotor speed (N) is zero. Therefore, slip = (Ns - 0) / Ns = 1.",
    "id": "T03_S1_008",
    "topic": "T03_Motors",
    "cat": "Slip"
  },
  {
    "q": "What is the typical full-load slip for a standard squirrel cage motor?",
    "a": "3% to 8%",
    "opts": [
      "0.1% to 0.5%",
      "3% to 8%",
      "10% to 15%",
      "0%"
    ],
    "exp": "At full load, the rotor must slow down by 3-8% relative to the RMF to induce enough current to match the mechanical load torque.",
    "id": "T03_S1_009",
    "topic": "T03_Motors",
    "cat": "Slip"
  },
  {
    "q": "How does an increase in mechanical load affect slip and rotor current?",
    "a": "Slip increases, causing more flux cutting, which increases rotor EMF, rotor current, and torque",
    "opts": [
      "Slip decreases, causing less rotor current",
      "Slip remains constant, but stator voltage increases",
      "Slip increases, causing more flux cutting, which increases rotor EMF, rotor current, and torque",
      "Slip increases, but rotor current decreases"
    ],
    "exp": "To pull a heavier load, the motor must develop more torque. It does this by slowing down slightly (increasing slip), which induces more rotor current.",
    "id": "T03_S1_010",
    "topic": "T03_Motors",
    "cat": "Slip"
  },
  {
    "q": "What is the relationship between supply frequency (f) and rotor frequency (fr)?",
    "a": "fr = s * f",
    "opts": [
      "fr = f / s",
      "fr = s * f",
      "fr = Ns / f",
      "fr = f - s"
    ],
    "exp": "Rotor frequency depends on the relative speed (slip). At standstill (s=1), fr = f. At normal running (e.g., s=0.04), fr is very low (e.g., 2Hz).",
    "id": "T03_S1_011",
    "topic": "T03_Motors",
    "cat": "Slip"
  },
  {
    "q": "If a 50Hz motor has a slip of 4%, what is the frequency of the currents in the rotor bars?",
    "a": "2 Hz",
    "opts": [
      "50 Hz",
      "4 Hz",
      "2 Hz",
      "0 Hz"
    ],
    "exp": "fr = s * f = 0.04 * 50 = 2 Hz.",
    "id": "T03_S1_012",
    "topic": "T03_Motors",
    "cat": "Slip"
  },
  {
    "q": "Why is it called an 'Induction' motor?",
    "a": "Because rotor current is not supplied directly, but is induced electromagnetically by the stator field",
    "opts": [
      "Because it induces a high power factor",
      "Because rotor current is not supplied directly, but is induced electromagnetically by the stator field",
      "Because it uses inductors in the stator",
      "Because it runs at synchronous speed"
    ],
    "exp": "Unlike DC motors with commutators or sync motors with slip rings, the standard squirrel cage rotor has no electrical connection to the supply.",
    "id": "T03_S1_013",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "What determines the direction of rotation of the Rotating Magnetic Field (RMF)?",
    "a": "The phase sequence of the 3-phase supply",
    "opts": [
      "The frequency of the supply",
      "The number of poles in the stator",
      "The phase sequence of the 3-phase supply",
      "The resistance of the rotor"
    ],
    "exp": "Swapping any two phases changes the phase sequence (e.g., RYB to YRB), which reverses the direction the RMF spins.",
    "id": "T03_S1_014",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "Which component constitutes the physical 'air gap' in an induction motor?",
    "a": "The microscopic radial clearance between the stator bore and the rotor outer diameter",
    "opts": [
      "The space inside the terminal box",
      "The microscopic radial clearance between the stator bore and the rotor outer diameter",
      "The cooling vents in the frame",
      "The distance between bearing rollers"
    ],
    "exp": "The air gap must be very small (e.g., 0.5mm) to minimize reluctance and ensure strong magnetic coupling.",
    "id": "T03_S1_015",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "What happens if the air gap is uneven due to bearing wear?",
    "a": "Unbalanced magnetic pull occurs, causing severe vibration and potential rotor rub",
    "opts": [
      "Motor speed increases",
      "Efficiency improves due to better cooling",
      "Unbalanced magnetic pull occurs, causing severe vibration and potential rotor rub",
      "Slip becomes zero"
    ],
    "exp": "The magnetic pull is inversely proportional to the air gap distance. A smaller gap on one side causes a massive pulling force, compounding bearing wear.",
    "id": "T03_S1_016",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "What is 'skewing' of rotor slots?",
    "a": "Arranging the rotor bars at a slight angle to the shaft axis rather than parallel to it",
    "opts": [
      "Cutting deeper slots to hold more copper",
      "Arranging the rotor bars at a slight angle to the shaft axis rather than parallel to it",
      "Using zigzag shapes for stator windings",
      "Removing every third rotor bar"
    ],
    "exp": "Skewing reduces magnetic hum, smooths out torque ripple, and prevents 'cogging' (magnetic locking between stator and rotor teeth).",
    "id": "T03_S1_017",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "What is 'cogging' in an induction motor?",
    "a": "Magnetic locking of the rotor and stator teeth causing failure to start",
    "opts": [
      "Magnetic locking of the rotor and stator teeth causing failure to start",
      "High speed vibration caused by bearing failure",
      "The slow crawling of the motor at 1/7th speed",
      "Excessive slipping of the rotor under load"
    ],
    "exp": "If the number of stator teeth equals the number of rotor teeth, strong magnetic alignment can occur at standstill, preventing rotation.",
    "id": "T03_S1_018",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "What material is typically used for the squirrel cage in standard small marine motors?",
    "a": "Die-cast Aluminium",
    "opts": [
      "Solid Iron",
      "Die-cast Aluminium",
      "Tungsten",
      "Carbon fiber"
    ],
    "exp": "Aluminium is lightweight, cheap, and easily die-cast directly into the rotor slots, forming the bars and end rings in one piece.",
    "id": "T03_S1_019",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "What is a major advantage of a slip ring (wound rotor) motor over a squirrel cage motor?",
    "a": "External resistance can be added to the rotor circuit to increase starting torque and lower starting current",
    "opts": [
      "It requires less maintenance",
      "External resistance can be added to the rotor circuit to increase starting torque and lower starting current",
      "It operates at zero slip",
      "It is smaller and lighter"
    ],
    "exp": "Slip rings allow access to the rotor circuit. Adding high resistance alters the torque-speed curve, giving maximum torque at starting.",
    "id": "T03_S1_020",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "What causes the 'humming' sound in an induction motor?",
    "a": "Magnetostriction of the core laminations and magnetic forces in the air gap",
    "opts": [
      "Friction of the air against the rotor",
      "Magnetostriction of the core laminations and magnetic forces in the air gap",
      "Sparking at the slip rings",
      "Vibration of the cooling fan"
    ],
    "exp": "The alternating magnetic field causes tiny expansions and contractions (magnetostriction) in the iron core at twice the supply frequency (100Hz for a 50Hz supply).",
    "id": "T03_S1_021",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "What is the typical power factor of an induction motor at no load?",
    "a": "Very low and lagging (e.g., 0.15 to 0.3)",
    "opts": [
      "Unity (1.0)",
      "Very high and lagging (0.9)",
      "Very low and lagging (e.g., 0.15 to 0.3)",
      "Leading (0.8)"
    ],
    "exp": "At no load, the active power drawn is tiny (just to overcome friction), but the reactive magnetising current to sustain the RMF remains large.",
    "id": "T03_S1_022",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "What is the typical power factor of an induction motor at full load?",
    "a": "High and lagging (e.g., 0.8 to 0.9)",
    "opts": [
      "Unity (1.0)",
      "High and lagging (e.g., 0.8 to 0.9)",
      "Low and leading (0.2)",
      "Zero"
    ],
    "exp": "As load increases, the active current drawn from the supply increases massively, while the reactive magnetising current stays roughly constant, improving the ratio.",
    "id": "T03_S1_023",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "How does an induction motor react to a drop in supply voltage while driving a constant torque load?",
    "a": "It slows down slightly, slip increases, and it draws MORE current to maintain the required power",
    "opts": [
      "It draws less current and runs cooler",
      "It stops instantly",
      "It speeds up",
      "It slows down slightly, slip increases, and it draws MORE current to maintain the required power"
    ],
    "exp": "Since Power = \u221a3 * V * I * PF, if V drops and required Power is constant, current (I) must increase, leading to overheating.",
    "id": "T03_S1_024",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "What dictates the actual operating speed of a motor?",
    "a": "The point where the motor's torque-speed curve intersects the load's torque-speed curve",
    "opts": [
      "The voltage of the supply alone",
      "The point where the motor's torque-speed curve intersects the load's torque-speed curve",
      "The resistance of the stator",
      "The size of the cooling fan"
    ],
    "exp": "The motor accelerates until the torque it produces exactly matches the opposing torque of the driven load (pump, fan, etc).",
    "id": "T03_S1_025",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "What is 'pull-out' torque (breakdown torque)?",
    "a": "The maximum absolute torque the motor can develop before it stalls",
    "opts": [
      "The torque at exact synchronous speed",
      "The maximum absolute torque the motor can develop before it stalls",
      "The torque required to remove the rotor",
      "The torque during a star-delta transition"
    ],
    "exp": "If the mechanical load exceeds the pull-out torque (usually 2-3x full load torque), the motor will rapidly decelerate and stall.",
    "id": "T03_S1_026",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "Why are rotor laminations used instead of a solid iron block?",
    "a": "To minimise eddy current losses in the rotor core",
    "opts": [
      "To make the motor lighter",
      "To minimise eddy current losses in the rotor core",
      "To improve the power factor",
      "To increase the slip"
    ],
    "exp": "Just like transformers, changing magnetic fields induce circulating eddy currents in solid iron, causing massive heating. Thin, insulated laminations break the current path.",
    "id": "T03_S1_027",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "In a 3-phase induction motor, how is the RMF's amplitude related to the maximum phase flux (\u03a6m)?",
    "a": "It is constant and equals 1.5 * \u03a6m",
    "opts": [
      "It equals \u03a6m",
      "It equals 3 * \u03a6m",
      "It is constant and equals 1.5 * \u03a6m",
      "It pulsates between zero and \u03a6m"
    ],
    "exp": "The vector sum of the three alternating phase fluxes creates a resultant flux that is perfectly constant in magnitude (1.5 \u03a6m) and rotates smoothly.",
    "id": "T03_S1_028",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "What is the function of the end rings in a squirrel cage rotor?",
    "a": "To electrically short-circuit all the rotor bars together, allowing current to circulate",
    "opts": [
      "To balance the rotor dynamically",
      "To electrically short-circuit all the rotor bars together, allowing current to circulate",
      "To provide attachment points for the bearings",
      "To cool the stator windings"
    ],
    "exp": "Without the end rings, the rotor bars would be open circuits, preventing any induced current from flowing, resulting in zero torque.",
    "id": "T03_S1_029",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "If a surveyor asks 'What creates the torque in an induction motor?', what is the fundamental physics equation?",
    "a": "F = B * I * L (Lorentz Force Law)",
    "opts": [
      "V = I * R",
      "F = B * I * L (Lorentz Force Law)",
      "P = V * I",
      "E = m * c^2"
    ],
    "exp": "A current (I) flowing through a rotor bar of length (L) situated in the stator's magnetic field (B) experiences a mechanical force (F).",
    "id": "T03_S1_030",
    "topic": "T03_Motors",
    "cat": "Principle"
  },
  {
    "q": "What is the typical Direct-On-Line (DOL) starting current for a standard induction motor?",
    "a": "5 to 8 times the rated full-load current",
    "opts": [
      "1 to 2 times the rated current",
      "5 to 8 times the rated full-load current",
      "10 to 15 times the rated current",
      "Equal to the rated current"
    ],
    "exp": "At standstill (slip=1), the rotor cuts the stator flux at full frequency, inducing massive EMF and resulting in low impedance, drawing massive current from the mains.",
    "id": "T03_S2_001",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "Why does the high starting current decay as the motor accelerates?",
    "a": "As speed increases, slip decreases, reducing the rate of flux cutting and the induced rotor EMF",
    "opts": [
      "Because the supply voltage drops",
      "As speed increases, slip decreases, reducing the rate of flux cutting and the induced rotor EMF",
      "Because the stator winding heats up and increases resistance",
      "Because the overload relay begins to actuate"
    ],
    "exp": "As the rotor catches up to the RMF, relative speed (slip) drops, meaning Faraday induction weakens. Less EMF means less rotor current, reducing stator current demand.",
    "id": "T03_S2_002",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "Which starting method provides the MAXIMUM starting torque?",
    "a": "Direct-On-Line (DOL)",
    "opts": [
      "Star-Delta",
      "Auto-transformer (65% tap)",
      "Soft Starter",
      "Direct-On-Line (DOL)"
    ],
    "exp": "DOL applies full 100% supply voltage immediately. Since torque is proportional to the square of voltage (V\u00b2), full voltage gives maximum starting torque.",
    "id": "T03_S2_003",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "What is the main disadvantage of DOL starting for large motors on ships?",
    "a": "It causes a severe voltage dip on the ship's busbar, affecting other equipment",
    "opts": [
      "It takes too long to start",
      "It causes a severe voltage dip on the ship's busbar, affecting other equipment",
      "It reduces the motor's running efficiency",
      "It requires complex electronics"
    ],
    "exp": "Ship generator capacity is limited. A massive 6x current surge from a large pump starting DOL can pull down bus voltage, causing lights to dim and other contactors to drop out.",
    "id": "T03_S2_004",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "By what factor does a Star-Delta starter reduce the starting current drawn from the line?",
    "a": "1/3 of the DOL line current",
    "opts": [
      "1/2 of DOL",
      "1/\u221a3 of DOL",
      "1/3 of the DOL line current",
      "1/4 of DOL"
    ],
    "exp": "In star, phase voltage is reduced by 1/\u221a3. Therefore, phase current is reduced by 1/\u221a3. Line current equals phase current in star, making total line current 1/3 of the delta equivalent.",
    "id": "T03_S2_005",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "How does a Star-Delta starter affect starting torque?",
    "a": "Torque is reduced to 1/3 of the DOL starting torque",
    "opts": [
      "Torque remains the same",
      "Torque is reduced to 1/\u221a3",
      "Torque is reduced to 1/3 of the DOL starting torque",
      "Torque is increased by 3 times"
    ],
    "exp": "Motor torque is proportional to the square of the applied voltage (T \u221d V\u00b2). Since voltage in star is 1/\u221a3, torque is (1/\u221a3)\u00b2 = 1/3.",
    "id": "T03_S2_006",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "In a Star-Delta starter, how many terminals must the motor have in its terminal box?",
    "a": "6 terminals (both ends of all three phase windings must be accessible)",
    "opts": [
      "3 terminals",
      "6 terminals (both ends of all three phase windings must be accessible)",
      "4 terminals",
      "9 terminals"
    ],
    "exp": "The contactors in the starter panel must be able to reconfigure the windings from a Y (star) point to a delta loop, requiring access to U1-U2, V1-V2, and W1-W2.",
    "id": "T03_S2_007",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "Which contactors are closed during the STAR phase of starting?",
    "a": "Main contactor (KM) and Star contactor (KY)",
    "opts": [
      "Main (KM) and Delta (KD)",
      "Star (KY) and Delta (KD)",
      "Main contactor (KM) and Star contactor (KY)",
      "Only Star (KY)"
    ],
    "exp": "KM connects the supply to U1/V1/W1. KY short-circuits U2/V2/W2 together to form the star point.",
    "id": "T03_S2_008",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "What prevents the Star (KY) and Delta (KD) contactors from closing at the same time?",
    "a": "Mechanical and electrical interlocks",
    "opts": [
      "The thermal overload relay",
      "Mechanical and electrical interlocks",
      "The main fuse",
      "The motor's back EMF"
    ],
    "exp": "If KY and KD close simultaneously, it creates a dead short circuit across the 3-phase supply. Interlocks make this physically and electrically impossible.",
    "id": "T03_S2_009",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "What is the purpose of the 'Dead Time' (20-50ms) in a Star-Delta transition?",
    "a": "To allow the motor's residual magnetic field to decay and prevent a massive out-of-phase transient current when Delta closes",
    "opts": [
      "To let the motor cool down",
      "To allow the motor's residual magnetic field to decay and prevent a massive out-of-phase transient current when Delta closes",
      "To allow the timer relay to reset",
      "To ensure the mechanical brake is released"
    ],
    "exp": "When Star opens, the spinning rotor acts like a generator. If Delta closes instantly, the supply voltage and the motor's back-EMF may clash out of phase, causing a huge current spike.",
    "id": "T03_S2_010",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "If a Star-Delta timer is set too short, what happens?",
    "a": "The motor hasn't reached sufficient speed, causing a massive current surge when Delta closes",
    "opts": [
      "The motor stalls completely",
      "The motor hasn't reached sufficient speed, causing a massive current surge when Delta closes",
      "The motor runs backwards",
      "The star contactor burns out instantly"
    ],
    "exp": "The purpose of Star is to accelerate the motor near full speed where slip is low. Transitioning too early defeats the purpose, acting like a delayed DOL start.",
    "id": "T03_S2_011",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "If a Star-Delta timer is set too long, what happens?",
    "a": "The motor stops accelerating at a lower speed (due to 1/3 torque) and just sits there drawing star current until transition",
    "opts": [
      "The motor explodes",
      "The motor stops accelerating at a lower speed (due to 1/3 torque) and just sits there drawing star current until transition",
      "The motor exceeds synchronous speed",
      "The delta contactor will refuse to close"
    ],
    "exp": "Because torque is only 1/3, the motor may hit an equilibrium with the load (e.g., a pump) before full speed. Delaying the transition further achieves nothing.",
    "id": "T03_S2_012",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "Can a Star-Delta starter be used for a heavy loaded crane hoist?",
    "a": "No, because starting torque is reduced to 1/3, it will fail to lift the load",
    "opts": [
      "Yes, it is the standard for cranes",
      "No, because starting torque is reduced to 1/3, it will fail to lift the load",
      "Yes, but only if the timer is set very long",
      "No, because cranes require DC power"
    ],
    "exp": "Star-Delta is only suitable for motors starting unloaded or with light loads (fans, centrifugal pumps with discharge valve closed).",
    "id": "T03_S2_013",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "How does an Auto-Transformer starter reduce starting voltage?",
    "a": "By using a transformer with multiple tapping points (e.g., 65%, 80%) to step down the supply voltage",
    "opts": [
      "By adding resistors in series with the stator",
      "By using a transformer with multiple tapping points (e.g., 65%, 80%) to step down the supply voltage",
      "By altering the supply frequency",
      "By switching from star to delta"
    ],
    "exp": "An autotransformer physically steps down the AC voltage applied to the motor during start, reducing current proportionally.",
    "id": "T03_S2_014",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "What is the primary advantage of an Auto-Transformer starter over a Star-Delta starter?",
    "a": "The starting voltage/torque can be adjusted (via taps) to suit the load, and transition is closed-circuit without current spikes",
    "opts": [
      "It is much cheaper",
      "The starting voltage/torque can be adjusted (via taps) to suit the load, and transition is closed-circuit without current spikes",
      "It provides full speed control",
      "It uses only two contactors"
    ],
    "exp": "Korndorfer transition keeps a portion of the autotransformer in circuit during the switch to full voltage, eliminating the 'dead time' current transient of Star-Delta.",
    "id": "T03_S2_015",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "What internal electronic components are used in a Soft Starter to control voltage?",
    "a": "Thyristors (SCRs) connected in anti-parallel pairs for each phase",
    "opts": [
      "IGBTs",
      "Diodes",
      "Thyristors (SCRs) connected in anti-parallel pairs for each phase",
      "Capacitors"
    ],
    "exp": "By delaying the firing angle of the thyristors (phase control), the soft starter chops the AC waveform, reducing the RMS voltage applied to the motor.",
    "id": "T03_S2_016",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "Does a Soft Starter change the frequency of the supply?",
    "a": "No, it only alters the RMS voltage",
    "opts": [
      "Yes, it lowers frequency to start",
      "No, it only alters the RMS voltage",
      "Yes, it changes frequency and voltage together",
      "Yes, it converts AC to pure DC"
    ],
    "exp": "Soft starters only chop the 50Hz waveform to reduce voltage. The fundamental frequency remains 50Hz.",
    "id": "T03_S2_017",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "What happens in a Soft Starter once the motor reaches full speed?",
    "a": "A bypass contactor closes to route power around the thyristors",
    "opts": [
      "The thyristors switch to frequency control mode",
      "A bypass contactor closes to route power around the thyristors",
      "The motor automatically switches to delta",
      "The soft starter disconnects completely"
    ],
    "exp": "Running continuous current through thyristors generates heat (losses). Once started, a mechanical bypass contactor closes to eliminate these losses.",
    "id": "T03_S2_018",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "What is a 'Soft Stop' feature on a soft starter?",
    "a": "It gradually ramps down the voltage to slowly decelerate the motor, preventing 'water hammer' in pump systems",
    "opts": [
      "It applies a DC brake instantly",
      "It gradually ramps down the voltage to slowly decelerate the motor, preventing 'water hammer' in pump systems",
      "It disconnects the motor mechanically",
      "It reverses the phase sequence"
    ],
    "exp": "Instead of immediately cutting power (DOL stop) which causes check valves to slam shut, a soft stop slowly reduces pump pressure.",
    "id": "T03_S2_019",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "In a Slip Ring (Wound Rotor) motor starter, where is the external resistance added?",
    "a": "In the rotor circuit via the slip rings and brushes",
    "opts": [
      "In the stator circuit",
      "In the main busbar supply",
      "In the rotor circuit via the slip rings and brushes",
      "In the thermal overload relay"
    ],
    "exp": "The 3-phase rotor winding is brought out to slip rings. A contactor panel progressively shorts out external resistor banks as the motor accelerates.",
    "id": "T03_S2_020",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "Why does adding rotor resistance in a slip-ring motor increase starting torque?",
    "a": "It improves the rotor power factor at standstill, bringing rotor current more into phase with the magnetic flux",
    "opts": [
      "It increases the total current drawn from the supply",
      "It improves the rotor power factor at standstill, bringing rotor current more into phase with the magnetic flux",
      "It increases the synchronous speed",
      "It lowers the supply voltage"
    ],
    "exp": "At standstill, rotor frequency is high (50Hz), making rotor reactance (X) much higher than resistance (R). Adding external R reduces the phase angle delay, maximizing torque.",
    "id": "T03_S2_021",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "Can you use a slip-ring starter on a standard squirrel cage motor?",
    "a": "No, because the squirrel cage rotor has no external electrical connections",
    "opts": [
      "Yes, by modifying the stator",
      "No, because the squirrel cage rotor has no external electrical connections",
      "Yes, if it is a double cage motor",
      "Yes, if used with a VFD"
    ],
    "exp": "The squirrel cage is permanently short-circuited internally. You cannot add resistance to its circuit.",
    "id": "T03_S2_022",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "What happens if one of the three fuses blows while a DOL motor is running?",
    "a": "The motor continues to run on two phases (single phasing), drawing heavy current and overheating rapidly",
    "opts": [
      "The motor stops instantly",
      "The motor continues to run on two phases (single phasing), drawing heavy current and overheating rapidly",
      "The motor reverses direction",
      "The motor speed doubles"
    ],
    "exp": "This is single phasing. The motor acts as a phase converter, drawing excessive current to maintain load torque, leading to rapid burnout.",
    "id": "T03_S2_023",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "What is the primary function of a 'current limiting' feature in a soft starter?",
    "a": "It halts the voltage ramp-up if the starting current hits a preset limit (e.g., 350% FLC)",
    "opts": [
      "It restricts the running current of the motor",
      "It limits the maximum speed of the motor",
      "It halts the voltage ramp-up if the starting current hits a preset limit (e.g., 350% FLC)",
      "It acts as a short circuit fuse"
    ],
    "exp": "If a heavy load causes starting current to spike, the soft starter pauses the voltage ramp until the motor accelerates and current drops naturally.",
    "id": "T03_S2_024",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "Which starting method provides the highest starting torque per amp of starting current?",
    "a": "VFD (Variable Frequency Drive)",
    "opts": [
      "DOL",
      "Star-Delta",
      "Soft Starter",
      "VFD (Variable Frequency Drive)"
    ],
    "exp": "By starting at a very low frequency (e.g., 2Hz), a VFD keeps the motor operating in the low-slip, high-torque region of its curve from zero RPM, drawing minimal current.",
    "id": "T03_S2_025",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "Why are some large compressors started using an 'unloader valve'?",
    "a": "To allow the motor to start against zero mechanical load, reducing starting duration and thermal stress",
    "opts": [
      "To increase starting torque",
      "To cool the compressor cylinders",
      "To allow the motor to start against zero mechanical load, reducing starting duration and thermal stress",
      "To prevent the star contactor from opening"
    ],
    "exp": "Starting a compressor against a closed system pressure requires immense torque. The unloader vents the pressure to atmosphere until the motor is at full speed.",
    "id": "T03_S2_026",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "In a DOL starter circuit, what is the purpose of the 'retaining' or 'hold-in' contact?",
    "a": "It bypasses the start button, keeping the contactor coil energised after the button is released",
    "opts": [
      "It connects the third phase to the motor",
      "It trips the motor during overload",
      "It bypasses the start button, keeping the contactor coil energised after the button is released",
      "It prevents single phasing"
    ],
    "exp": "A Normally Open (NO) auxiliary contact on the main contactor is wired in parallel with the Start button. When KM closes, this contact closes, maintaining the control circuit.",
    "id": "T03_S2_027",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "Why is 'under-voltage' protection inherent in a standard DOL contactor starter?",
    "a": "If supply voltage drops too low, the contactor coil loses magnetic pull and drops out, disconnecting the motor",
    "opts": [
      "Because it has a special UV relay",
      "If supply voltage drops too low, the contactor coil loses magnetic pull and drops out, disconnecting the motor",
      "Because the motor's back EMF shuts it off",
      "Because the thermal overload strip cools down"
    ],
    "exp": "A contactor coil requires a minimum voltage (usually ~80%) to hold the armature against the spring. In a blackout, it physically drops out.",
    "id": "T03_S2_028",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "What must you do after a blackout to restart a pump on a standard DOL starter?",
    "a": "You must physically press the start button again, as the retaining contact opened when power was lost",
    "opts": [
      "Nothing, it starts automatically",
      "You must physically press the start button again, as the retaining contact opened when power was lost",
      "Replace the contactor coil",
      "Reset the overload relay"
    ],
    "exp": "This is a crucial safety feature. It prevents massive simultaneous starting currents if power is restored, and protects personnel working on 'dead' machinery.",
    "id": "T03_S2_029",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "What is 'Sequential Restart' after a blackout?",
    "a": "A timer-based system that automatically restarts critical pumps in a staggered sequence to prevent generator overload",
    "opts": [
      "Restarting engines one by one",
      "A timer-based system that automatically restarts critical pumps in a staggered sequence to prevent generator overload",
      "Starting the star contactor before delta",
      "Restarting the VFD frequency slowly"
    ],
    "exp": "Essential services (LO pumps, SW pumps) have timers (e.g., 5s, 10s, 15s) in their control circuits so they don't all attempt DOL starts simultaneously when bus voltage is restored.",
    "id": "T03_S2_030",
    "topic": "T03_Motors",
    "cat": "Start"
  },
  {
    "q": "What is the fundamental working principle of a Variable Frequency Drive (VFD)?",
    "a": "It converts incoming AC to DC, then inverts it back to a synthetic AC waveform with variable voltage and frequency",
    "opts": [
      "It uses transformers to step down voltage",
      "It converts incoming AC to DC, then inverts it back to a synthetic AC waveform with variable voltage and frequency",
      "It adds resistors to the stator winding",
      "It mechanically changes the number of motor poles"
    ],
    "exp": "The VFD consists of a Rectifier (AC to DC), a DC Link (filters the DC), and an Inverter (DC back to AC using PWM).",
    "id": "T03_S3_001",
    "topic": "T03_Motors",
    "cat": "VFD"
  },
  {
    "q": "Why must a VFD control both Voltage AND Frequency simultaneously (constant V/f ratio)?",
    "a": "To maintain a constant magnetic flux in the air gap and prevent core saturation",
    "opts": [
      "To increase the motor speed beyond sync speed",
      "To maintain a constant magnetic flux in the air gap and prevent core saturation",
      "To eliminate the need for a cooling fan",
      "To convert the motor into a generator"
    ],
    "exp": "Magnetic flux (\u03a6) is proportional to V/f. If you lower frequency to slow the motor but keep voltage high, flux becomes massive, saturating the iron core and burning out the stator.",
    "id": "T03_S3_002",
    "topic": "T03_Motors",
    "cat": "VFD"
  },
  {
    "q": "What technique does the VFD Inverter section use to recreate an AC waveform?",
    "a": "Pulse Width Modulation (PWM) using IGBTs",
    "opts": [
      "Analog amplification",
      "Pulse Width Modulation (PWM) using IGBTs",
      "Mechanical commutation",
      "Rheostatic control"
    ],
    "exp": "Insulated Gate Bipolar Transistors (IGBTs) switch the DC voltage on and off thousands of times per second. Varying the pulse width creates an RMS current that looks like a sine wave to the motor.",
    "id": "T03_S3_003",
    "topic": "T03_Motors",
    "cat": "VFD"
  },
  {
    "q": "How does a VFD achieve full starting torque at near-zero RPM?",
    "a": "By supplying a very low frequency (e.g. 1 Hz) and proportionally low voltage, operating the motor at optimal slip",
    "opts": [
      "By injecting 440V instantly",
      "By supplying a very low frequency (e.g. 1 Hz) and proportionally low voltage, operating the motor at optimal slip",
      "By bypassing the inverter section",
      "By adding DC injection"
    ],
    "exp": "At 1Hz, the RMF spins very slowly. The rotor can easily slip slightly behind this slow RMF, producing massive torque without demanding high current.",
    "id": "T03_S3_004",
    "topic": "T03_Motors",
    "cat": "VFD"
  },
  {
    "q": "What is the primary drawback of using VFDs on ships?",
    "a": "They generate high-frequency electrical harmonics that can distort the ship's power supply",
    "opts": [
      "They are very inefficient",
      "They can only run the motor at one speed",
      "They generate high-frequency electrical harmonics that can distort the ship's power supply",
      "They require DC motors"
    ],
    "exp": "The non-linear switching of the rectifier draws current in pulses, creating 5th, 7th, 11th, etc., harmonics. These must be mitigated using active or passive harmonic filters.",
    "id": "T03_S3_005",
    "topic": "T03_Motors",
    "cat": "VFD"
  },
  {
    "q": "What issue can VFDs cause to motor bearings?",
    "a": "High-frequency PWM switching induces shaft voltages that can arc through the bearing grease, causing fluting",
    "opts": [
      "They make the bearings run too cold",
      "High-frequency PWM switching induces shaft voltages that can arc through the bearing grease, causing fluting",
      "They spin the bearings backwards",
      "They melt the grease through radiation"
    ],
    "exp": "Common-mode voltage from PWM induces a voltage on the rotor. If it exceeds the dielectric breakdown of the grease film, it arcs, leaving washboard-like pits (fluting) on the bearing races.",
    "id": "T03_S3_006",
    "topic": "T03_Motors",
    "cat": "VFD"
  },
  {
    "q": "How can you prevent bearing fluting caused by VFDs?",
    "a": "Install a shaft grounding ring (e.g., AEGIS ring) to safely conduct shaft currents to earth",
    "opts": [
      "Use insulated cables",
      "Install a shaft grounding ring (e.g., AEGIS ring) to safely conduct shaft currents to earth",
      "Grease the bearings more often",
      "Lower the supply voltage"
    ],
    "exp": "A shaft grounding ring uses carbon microfibers riding on the shaft to provide a low-impedance path to ground, bypassing the bearings entirely.",
    "id": "T03_S3_007",
    "topic": "T03_Motors",
    "cat": "VFD"
  },
  {
    "q": "Why do VFD-driven motors often require an external, independently powered cooling fan?",
    "a": "Because running the motor at low speeds drastically reduces the cooling efficiency of the shaft-mounted fan",
    "opts": [
      "Because VFDs generate heat in the surrounding air",
      "Because running the motor at low speeds drastically reduces the cooling efficiency of the shaft-mounted fan",
      "To blow away harmonics",
      "To cool the VFD panel"
    ],
    "exp": "A motor running at 20% speed has 1/5th the cooling airflow. But if it's still producing high torque, it generates full heat. An independent fan ensures cooling regardless of motor speed.",
    "id": "T03_S3_008",
    "topic": "T03_Motors",
    "cat": "VFD"
  },
  {
    "q": "What is a 'Braking Chopper' and 'Braking Resistor' in a VFD system?",
    "a": "Components used to dissipate regenerated energy as heat when decelerating a high-inertia load",
    "opts": [
      "Components that physically brake the shaft",
      "Components used to dissipate regenerated energy as heat when decelerating a high-inertia load",
      "Filters to remove harmonics",
      "Devices to stop single-phasing"
    ],
    "exp": "When a crane lowers a load, the motor acts as a generator. The VFD's DC link voltage spikes. The chopper switches this excess DC voltage to a large resistor bank to burn it off.",
    "id": "T03_S3_009",
    "topic": "T03_Motors",
    "cat": "VFD"
  },
  {
    "q": "What is the alternative to a Braking Resistor for handling regenerated energy in modern cranes?",
    "a": "An Active Front End (AFE) VFD which feeds the regenerated power back into the ship's grid",
    "opts": [
      "A mechanical disc brake",
      "An Active Front End (AFE) VFD which feeds the regenerated power back into the ship's grid",
      "A larger capacitor bank",
      "A diode rectifier"
    ],
    "exp": "AFE drives use IGBTs in the rectifier section instead of diodes, allowing bidirectional power flow, saving massive amounts of energy during cargo operations.",
    "id": "T03_S3_010",
    "topic": "T03_Motors",
    "cat": "VFD"
  },
  {
    "q": "Can a VFD drive a motor faster than its rated synchronous speed?",
    "a": "Yes, by increasing the frequency above the baseline (e.g., to 60Hz or higher), operating in the field-weakening region",
    "opts": [
      "No, the motor will explode",
      "No, it is physically impossible",
      "Yes, by increasing the frequency above the baseline (e.g., to 60Hz or higher), operating in the field-weakening region",
      "Yes, but only if voltage is increased to 1000V"
    ],
    "exp": "Above 50Hz, the VFD cannot increase voltage further (limited to mains). Thus, V/f ratio drops (field weakening). Torque decreases, but power remains constant.",
    "id": "T03_S3_011",
    "topic": "T03_Motors",
    "cat": "VFD"
  },
  {
    "q": "Besides VFD, what is 'Pole Changing' (Dahlander) speed control?",
    "a": "A method of changing the stator winding connections to alter the number of magnetic poles, providing 2 or 3 fixed speeds",
    "opts": [
      "Physically replacing the rotor",
      "A method of changing the stator winding connections to alter the number of magnetic poles, providing 2 or 3 fixed speeds",
      "Changing the supply frequency using a transformer",
      "Adding resistance to the stator"
    ],
    "exp": "By switching contactors, a winding can be reconfigured from 4-pole (1500 RPM) to 8-pole (750 RPM). Commonly used on older cranes and two-speed fans.",
    "id": "T03_S3_012",
    "topic": "T03_Motors",
    "cat": "Speed"
  },
  {
    "q": "What is the Ward-Leonard system used for?",
    "a": "Very smooth, precise, and reversible speed control of a DC drive motor by varying the field of a dedicated DC generator",
    "opts": [
      "Starting squirrel cage motors",
      "Very smooth, precise, and reversible speed control of a DC drive motor by varying the field of a dedicated DC generator",
      "Filtering out VFD harmonics",
      "Synchronizing alternators"
    ],
    "exp": "Before VFDs, this was the gold standard for cranes and steering gear. An AC motor spins a DC generator, which feeds a DC motor. Controlling the tiny generator field dictates the massive DC motor output.",
    "id": "T03_S3_013",
    "topic": "T03_Motors",
    "cat": "Speed"
  },
  {
    "q": "What happens if the DC field excitation is lost in a DC motor while it is running?",
    "a": "Back EMF drops to zero, armature current spikes, and the motor runs away to a dangerously high speed (if unloaded)",
    "opts": [
      "It stops instantly",
      "Back EMF drops to zero, armature current spikes, and the motor runs away to a dangerously high speed (if unloaded)",
      "It reverses direction",
      "Nothing, it runs normally"
    ],
    "exp": "Speed is inversely proportional to flux (N \u221d V / \u03a6). If flux (\u03a6) drops to near zero, speed approaches infinity, potentially destroying the armature via centrifugal force.",
    "id": "T03_S3_014",
    "topic": "T03_Motors",
    "cat": "Speed"
  },
  {
    "q": "What is the purpose of 'Interpoles' (Commutating poles) in a DC machine?",
    "a": "To neutralize armature reaction in the commutating zone, preventing brush sparking",
    "opts": [
      "To increase the main magnetic field",
      "To neutralize armature reaction in the commutating zone, preventing brush sparking",
      "To hold the stator in place",
      "To provide cooling to the armature"
    ],
    "exp": "Armature reaction shifts the magnetic neutral axis. Interpoles (wired in series with the armature) create a localized opposing flux to keep the neutral axis stable, ensuring spark-free commutation.",
    "id": "T03_S3_015",
    "topic": "T03_Motors",
    "cat": "Speed"
  },
  {
    "q": "What is 'Regenerative Braking' in a DC motor or VFD?",
    "a": "Operating the motor as a generator to convert kinetic energy back into electrical energy, slowing the load",
    "opts": [
      "Using brake pads to stop the motor",
      "Operating the motor as a generator to convert kinetic energy back into electrical energy, slowing the load",
      "Injecting AC into a DC motor",
      "Reversing the phases instantly"
    ],
    "exp": "When the load tries to drive the motor faster than the electrical synchronous speed (or field setting), the motor pushes power back into the supply, causing a strong braking effect.",
    "id": "T03_S3_016",
    "topic": "T03_Motors",
    "cat": "Speed"
  },
  {
    "q": "How does 'Dynamic Braking' differ from Regenerative Braking?",
    "a": "In Dynamic Braking, the generated energy is dumped into a resistor bank as heat; in Regenerative, it returns to the supply grid",
    "opts": [
      "Dynamic braking uses mechanical friction",
      "In Dynamic Braking, the generated energy is dumped into a resistor bank as heat; in Regenerative, it returns to the supply grid",
      "Dynamic braking is only for AC motors",
      "They are exactly the same thing"
    ],
    "exp": "Dynamic braking is cheaper because it doesn't require an Active Front End, just a chopper circuit and a large resistor bank.",
    "id": "T03_S3_017",
    "topic": "T03_Motors",
    "cat": "Speed"
  },
  {
    "q": "What is 'DC Injection Braking' on an AC squirrel cage motor?",
    "a": "Disconnecting the AC supply and injecting a DC current into the stator to create a stationary magnetic field",
    "opts": [
      "Injecting DC into the rotor",
      "Disconnecting the AC supply and injecting a DC current into the stator to create a stationary magnetic field",
      "Applying a DC-powered mechanical brake",
      "Using a DC motor to slow the AC motor"
    ],
    "exp": "The spinning rotor cuts the stationary DC magnetic field, inducing rotor currents that create a magnetic torque opposing the rotation. Provides rapid, wear-free braking.",
    "id": "T03_S3_018",
    "topic": "T03_Motors",
    "cat": "Speed"
  },
  {
    "q": "What is a major limitation of DC Injection Braking?",
    "a": "The braking torque decreases rapidly as the motor slows down, and it cannot hold a load at standstill",
    "opts": [
      "It causes severe mechanical wear",
      "The braking torque decreases rapidly as the motor slows down, and it cannot hold a load at standstill",
      "It requires a separate generator",
      "It makes the motor run backwards"
    ],
    "exp": "Since braking torque depends on relative motion (speed), as speed approaches zero, braking force approaches zero. A mechanical holding brake is still required for cranes.",
    "id": "T03_S3_019",
    "topic": "T03_Motors",
    "cat": "Speed"
  },
  {
    "q": "What is 'Plugging' (Reverse Current Braking)?",
    "a": "Instantly reversing two phases of the supply while the motor is running to create massive opposing torque",
    "opts": [
      "Unplugging the motor from the wall",
      "Instantly reversing two phases of the supply while the motor is running to create massive opposing torque",
      "Injecting DC current",
      "Using a VFD to slow down"
    ],
    "exp": "This reverses the RMF direction. The motor is suddenly operating at a slip of almost 200%. It causes violent braking and huge electrical/mechanical stress. Rarely used on modern ships.",
    "id": "T03_S3_020",
    "topic": "T03_Motors",
    "cat": "Speed"
  },
  {
    "q": "When looking at a motor nameplate, what does 'S1 Duty' mean?",
    "a": "Continuous running duty (can run indefinitely at rated load without exceeding temperature limits)",
    "opts": [
      "Short-time duty (e.g., 30 mins)",
      "Continuous running duty (can run indefinitely at rated load without exceeding temperature limits)",
      "Intermittent periodic duty",
      "Starting duty only"
    ],
    "exp": "Pumps and fans are S1. A windlass motor might be S2 (30 min short-time duty), meaning it will overheat if run continuously for hours.",
    "id": "T03_S3_021",
    "topic": "T03_Motors",
    "cat": "Speed"
  },
  {
    "q": "What does an Insulation Class of 'F' signify?",
    "a": "The winding insulation can withstand a maximum hotspot temperature of 155\u00b0C",
    "opts": [
      "The motor is fireproof",
      "The winding insulation can withstand a maximum hotspot temperature of 155\u00b0C",
      "It uses fiberglass insulation",
      "It is for freezing environments"
    ],
    "exp": "Class B = 130\u00b0C, F = 155\u00b0C, H = 180\u00b0C. Marine motors are often built to Class F but operated at Class B limits for a safety margin.",
    "id": "T03_S3_022",
    "topic": "T03_Motors",
    "cat": "Speed"
  },
  {
    "q": "Why is it important to know the 'Frame Number' (e.g., IEC 160) when ordering a replacement motor?",
    "a": "It defines the physical mounting dimensions, primarily the shaft centreline height (160mm) and bolt hole spacing",
    "opts": [
      "It defines the voltage",
      "It defines the physical mounting dimensions, primarily the shaft centreline height (160mm) and bolt hole spacing",
      "It indicates the weight",
      "It specifies the IP rating"
    ],
    "exp": "If you order a different frame size, the shaft won't align with the pump, and the feet won't align with the foundation bedplate.",
    "id": "T03_S3_023",
    "topic": "T03_Motors",
    "cat": "Maint"
  },
  {
    "q": "What is 'Soft Foot' in motor mounting?",
    "a": "When all four feet of the motor do not sit flat on the base, causing the motor frame to twist when bolted tight",
    "opts": [
      "Using rubber vibration dampers",
      "When all four feet of the motor do not sit flat on the base, causing the motor frame to twist when bolted tight",
      "A loose bearing",
      "The magnetic pull on the rotor"
    ],
    "exp": "Tightening a soft foot distorts the stator frame, creating an uneven air gap and destroying the alignment. It must be corrected with shims before final alignment.",
    "id": "T03_S3_024",
    "topic": "T03_Motors",
    "cat": "Maint"
  },
  {
    "q": "When performing precision coupling alignment with a dial indicator, what does a 'Face' reading measure?",
    "a": "Angular misalignment (the flanges are not parallel)",
    "opts": [
      "Parallel offset",
      "Angular misalignment (the flanges are not parallel)",
      "Axial end play",
      "Shaft runout"
    ],
    "exp": "The dial indicator sweeps the face of the coupling half. If the reading changes, the shafts are pointing at an angle to each other.",
    "id": "T03_S3_025",
    "topic": "T03_Motors",
    "cat": "Maint"
  },
  {
    "q": "What is the primary danger of OVER-GREASING a motor bearing?",
    "a": "The grease cannot expand, causing churning, severe overheating, blown seals, and grease entering the stator windings",
    "opts": [
      "It makes the motor run too fast",
      "The grease cannot expand, causing churning, severe overheating, blown seals, and grease entering the stator windings",
      "It causes electrical short circuits in the rotor",
      "It washes away the old grease"
    ],
    "exp": "A bearing housing should only be 30-50% full. Over-packing it causes immense fluid friction. Always leave the bottom relief plug open during greasing.",
    "id": "T03_S3_026",
    "topic": "T03_Motors",
    "cat": "Maint"
  },
  {
    "q": "If a bearing number is 6312-ZZ, what do the 'ZZ' signify?",
    "a": "The bearing has metal shields on both sides to retain grease and keep out large dust",
    "opts": [
      "It is a high-speed bearing",
      "The bearing has metal shields on both sides to retain grease and keep out large dust",
      "It has rubber seals",
      "It is self-aligning"
    ],
    "exp": "ZZ = double metal shield (non-contact). 2RS = double rubber seal (contact). Shields are better for high speeds, seals are better for dirty environments.",
    "id": "T03_S3_027",
    "topic": "T03_Motors",
    "cat": "Maint"
  },
  {
    "q": "What does the 'C3' suffix on a bearing number indicate?",
    "a": "The internal radial clearance is greater than standard, used for motors operating at high temperatures",
    "opts": [
      "It is a Class 3 bearing",
      "The internal radial clearance is greater than standard, used for motors operating at high temperatures",
      "It has 3 rows of balls",
      "It is made of ceramic"
    ],
    "exp": "As the motor heats up, the inner ring on the hot shaft expands faster than the outer ring. A C3 clearance prevents the bearing from seizing due to thermal expansion.",
    "id": "T03_S3_028",
    "topic": "T03_Motors",
    "cat": "Maint"
  },
  {
    "q": "How should a replacement bearing be fitted onto a motor shaft?",
    "a": "By heating it evenly (e.g., induction heater or oil bath) to expand the inner race before sliding it onto the shaft",
    "opts": [
      "By hammering the outer race",
      "By heating it evenly (e.g., induction heater or oil bath) to expand the inner race before sliding it onto the shaft",
      "By cooling the bearing in a freezer",
      "By using a hydraulic press on the outer ring"
    ],
    "exp": "Never hammer a bearing, especially not on the outer race, as the force transmits through the balls and damages the raceways (brinelling). Heat to ~100\u00b0C max.",
    "id": "T03_S3_029",
    "topic": "T03_Motors",
    "cat": "Maint"
  },
  {
    "q": "Before returning a rewound motor to service, what electrical test is ABSOLUTELY mandatory?",
    "a": "Insulation Resistance (IR) test (Megger test) between phases and to earth",
    "opts": [
      "Vibration analysis",
      "Insulation Resistance (IR) test (Megger test) between phases and to earth",
      "High voltage AC withstand test",
      "Load test at 150% capacity"
    ],
    "exp": "A megger test verifies the integrity of the new varnish/insulation. A reading of >1 M\u03a9 (minimum, ideally >100 M\u03a9) is required before applying 440V to prevent immediate short circuits.",
    "id": "T03_S3_030",
    "topic": "T03_Motors",
    "cat": "Maint"
  },
  {
    "q": "What is the primary function of a thermal overload relay (OLR) in a motor starter?",
    "a": "To protect against sustained overcurrents (overheating) using a bimetallic strip",
    "opts": [
      "To protect against short circuits",
      "To protect against sustained overcurrents (overheating) using a bimetallic strip",
      "To protect against voltage drops",
      "To monitor bearing temperature"
    ],
    "exp": "The OLR mimics the thermal characteristic of the motor. High current bends a bimetallic strip, eventually tripping the control circuit. It has an IDMT (Inverse Definite Minimum Time) characteristic.",
    "id": "T03_S5_001",
    "topic": "T03_Motors",
    "cat": "Protect"
  },
  {
    "q": "Why will a thermal overload relay NOT protect a motor against a short circuit?",
    "a": "It responds too slowly (thermal time delay); short circuits require instantaneous clearing",
    "opts": [
      "It is not connected to the main power lines",
      "It responds too slowly (thermal time delay); short circuits require instantaneous clearing",
      "It only measures voltage",
      "It cannot handle high voltages"
    ],
    "exp": "An OLR takes seconds or minutes to trip. A short circuit (thousands of amps) will melt the wires before the bimetallic strip bends. Short circuits are cleared by Fuses or Magnetic MCBs.",
    "id": "T03_S5_002",
    "topic": "T03_Motors",
    "cat": "Protect"
  },
  {
    "q": "What type of fuse is mandatory for 440V motor feeders on the Main Switchboard?",
    "a": "HRC (High Rupturing Capacity) Fuses",
    "opts": [
      "Rewirable fuses",
      "HRC (High Rupturing Capacity) Fuses",
      "Glass cartridge fuses",
      "Automotive blade fuses"
    ],
    "exp": "HRC fuses can safely interrupt massive fault currents (e.g., 80kA) without exploding, thanks to the arc-quenching silica sand inside.",
    "id": "T03_S5_003",
    "topic": "T03_Motors",
    "cat": "Protect"
  },
  {
    "q": "At what rating are motor HRC fuses typically selected compared to the Full Load Current (FLC)?",
    "a": "1.5 to 2.5 times the motor FLC",
    "opts": [
      "Exactly equal to the FLC",
      "1.5 to 2.5 times the motor FLC",
      "5 to 8 times the FLC",
      "Half the FLC"
    ],
    "exp": "The fuse must NOT blow during the massive 6x DOL starting current surge. Therefore, they are rated higher than FLC. The OLR handles the slight overloads.",
    "id": "T03_S5_004",
    "topic": "T03_Motors",
    "cat": "Protect"
  },
  {
    "q": "How does a 3-element overload relay provide 'Single Phasing' protection?",
    "a": "It uses a differential mechanism that trips much faster if one bimetallic strip cools down while the others heat up",
    "opts": [
      "It measures the phase voltage directly",
      "It uses a differential mechanism that trips much faster if one bimetallic strip cools down while the others heat up",
      "It has a built in fuse for each phase",
      "It communicates with the AVR"
    ],
    "exp": "If one phase is lost, its strip cools and straightens. The other two carry 2x current and bend aggressively. A mechanical slide bar detects this differential and trips rapidly.",
    "id": "T03_S5_005",
    "topic": "T03_Motors",
    "cat": "Protect"
  },
  {
    "q": "What is the consequence of single-phasing a motor that is currently STOPPED?",
    "a": "The motor will hum loudly but will not rotate, and will quickly burn out if not tripped",
    "opts": [
      "It will start normally but run slowly",
      "The motor will hum loudly but will not rotate, and will quickly burn out if not tripped",
      "It will run in reverse",
      "It will generate high voltage"
    ],
    "exp": "Two phases cannot create a Rotating Magnetic Field, only a pulsating field. Starting torque is strictly zero.",
    "id": "T03_S5_006",
    "topic": "T03_Motors",
    "cat": "Protect"
  },
  {
    "q": "What causes the 'Negative Sequence Currents' during single-phasing?",
    "a": "The unbalanced voltage creates a counter-rotating magnetic field that induces high frequency currents in the rotor",
    "opts": [
      "The motor spinning backwards",
      "The unbalanced voltage creates a counter-rotating magnetic field that induces high frequency currents in the rotor",
      "The VFD injecting DC",
      "The earth fault relay"
    ],
    "exp": "The pulsating field can be mathematically split into a forward RMF and a backward RMF. The backward RMF spins at 2x slip frequency relative to the rotor, causing immense localized heating.",
    "id": "T03_S5_007",
    "topic": "T03_Motors",
    "cat": "Protect"
  },
  {
    "q": "Besides the OLR, what electronic relay offers superior protection against single-phasing and phase reversal?",
    "a": "Phase Failure / Phase Sequence Relay",
    "opts": [
      "Earth fault relay",
      "Phase Failure / Phase Sequence Relay",
      "Reverse power relay",
      "Under-voltage relay"
    ],
    "exp": "This relay directly monitors the 3-phase voltage waveform. If a phase drops, or if the sequence is reversed (which would run the pump backwards), it instantly opens the control circuit.",
    "id": "T03_S5_008",
    "topic": "T03_Motors",
    "cat": "Protect"
  },
  {
    "q": "Why do large ER motors have PTC thermistors embedded in the stator windings?",
    "a": "To provide direct thermal protection by measuring actual winding temperature, regardless of current draw",
    "opts": [
      "To keep the windings warm",
      "To provide direct thermal protection by measuring actual winding temperature, regardless of current draw",
      "To measure ambient air temperature",
      "To control the speed of the VFD"
    ],
    "exp": "If the motor cooling fan fails, or filter is blocked, the motor will overheat even if drawing normal current. The OLR won't see this, but the thermistors will spike in resistance and trip the motor.",
    "id": "T03_S5_009",
    "topic": "T03_Motors",
    "cat": "Protect"
  },
  {
    "q": "What is the function of the Anti-Condensation Heater (Space Heater) in a motor?",
    "a": "It turns on automatically when the motor STOPS, keeping windings warm to prevent moisture condensation",
    "opts": [
      "It pre-heats the bearings before starting",
      "It turns on automatically when the motor STOPS, keeping windings warm to prevent moisture condensation",
      "It warms the fuel oil for the pump",
      "It provides braking torque"
    ],
    "exp": "When a hot motor stops, cooling draws in humid ER air. If it cools below the dew point, water condenses on the windings, ruining insulation. The heater prevents this.",
    "id": "T03_S5_010",
    "topic": "T03_Motors",
    "cat": "Protect"
  },
  {
    "q": "Where does the Anti-Condensation Heater get its power?",
    "a": "Usually from an independent 220V supply, interlocked via a normally-closed (NC) contact of the main contactor",
    "opts": [
      "From the motor's back EMF",
      "Usually from an independent 220V supply, interlocked via a normally-closed (NC) contact of the main contactor",
      "From a built in battery",
      "From the 440V main busbar directly"
    ],
    "exp": "When KM is open (motor off), the NC auxiliary contact is closed, feeding 220V to the heater. \ud83d\udd34 DANGER: This means 220V is LIVE inside the terminal box even when the 440V breaker is off!",
    "id": "T03_S5_011",
    "topic": "T03_Motors",
    "cat": "Protect"
  },
  {
    "q": "How does a Core Balance Current Transformer (CBCT) detect an earth fault in a motor?",
    "a": "It wraps around all 3 phase cables; if no leakage exists, the vector sum of currents is zero",
    "opts": [
      "It measures voltage to the hull",
      "It wraps around all 3 phase cables; if no leakage exists, the vector sum of currents is zero",
      "It measures the resistance of the earth cable",
      "It detects smoke in the terminal box"
    ],
    "exp": "Normally, whatever current goes down R and Y returns via B. The net magnetic field is zero. If current leaks to the hull (earth), the sum is no longer zero, inducing a signal in the CBCT.",
    "id": "T03_S5_012",
    "topic": "T03_Motors",
    "cat": "Protect"
  },
  {
    "q": "What is a 'Double Cage' (Double Squirrel Cage) Induction Motor?",
    "a": "A motor with two sets of rotor bars: an outer high-resistance cage and an inner low-resistance cage",
    "opts": [
      "A motor with two stators",
      "A motor with two sets of rotor bars: an outer high-resistance cage and an inner low-resistance cage",
      "A motor with physical safety guards",
      "A slip ring motor without brushes"
    ],
    "exp": "This clever design uses the 'skin effect' to automatically provide high torque during starting (outer cage) and high efficiency during running (inner cage) without external starters.",
    "id": "T03_S5_013",
    "topic": "T03_Motors",
    "cat": "Gap"
  },
  {
    "q": "Why does the rotor current flow primarily in the OUTER cage of a double cage motor during starting?",
    "a": "At start, rotor frequency is 50Hz. High frequency pushes current to the surface (skin effect) into the high-resistance outer bars",
    "opts": [
      "Because the inner cage is disconnected by a switch",
      "At start, rotor frequency is 50Hz. High frequency pushes current to the surface (skin effect) into the high-resistance outer bars",
      "Because the outer cage has less resistance",
      "Because of centrifugal force"
    ],
    "exp": "The inner cage is deeply buried, giving it massive inductive reactance (XL = 2\u03c0fL) at 50Hz. Current takes the path of least impedance: the outer cage.",
    "id": "T03_S5_014",
    "topic": "T03_Motors",
    "cat": "Gap"
  },
  {
    "q": "Where are Double Cage motors typically used on ships?",
    "a": "For machinery requiring High Starting Torque without complex starters: Windlass, Mooring Winches, Bow Thrusters",
    "opts": [
      "For continuous running pumps",
      "For machinery requiring High Starting Torque without complex starters: Windlass, Mooring Winches, Bow Thrusters",
      "For small ventilation fans",
      "For the main propulsion"
    ],
    "exp": "A windlass must start against massive chain tension. A double cage gives excellent DOL starting torque without the need for delicate slip rings.",
    "id": "T03_S5_015",
    "topic": "T03_Motors",
    "cat": "Gap"
  },
  {
    "q": "What phenomenon causes 'Motor Crawling'?",
    "a": "The 7th harmonic in the air-gap flux creates a forward-rotating field at 1/7th synchronous speed, forming a reluctance torque dip",
    "opts": [
      "Bearing failure",
      "The 7th harmonic in the air-gap flux creates a forward-rotating field at 1/7th synchronous speed, forming a reluctance torque dip",
      "Low supply voltage",
      "Single phasing"
    ],
    "exp": "If the mechanical load torque is higher than this 'dip' in the motor's torque curve, the motor gets stuck at 1/7th speed (e.g., 200 RPM instead of 1450 RPM).",
    "id": "T03_S5_016",
    "topic": "T03_Motors",
    "cat": "Gap"
  },
  {
    "q": "How is Motor Crawling prevented during motor manufacture?",
    "a": "By skewing the rotor slots and properly chording the stator windings to eliminate the 7th harmonic",
    "opts": [
      "By making the air gap larger",
      "By skewing the rotor slots and properly chording the stator windings to eliminate the 7th harmonic",
      "By using a VFD",
      "By greasing the bearings heavily"
    ],
    "exp": "Skewing breaks up the harmonic alignment. Chording (short-pitching) the stator coils cancels out specific spatial harmonics in the flux.",
    "id": "T03_S5_017",
    "topic": "T03_Motors",
    "cat": "Gap"
  },
  {
    "q": "If a Surveyor asks: 'What specs do you provide when ordering a new motor?', which of these is the most complete answer?",
    "a": "kW, Voltage, Hz, Poles/RPM, Frame Size, IP Rating, Insulation Class, Mounting type (B3/B5)",
    "opts": [
      "kW and Voltage only",
      "kW, Voltage, Hz, Poles/RPM, Frame Size, IP Rating, Insulation Class, Mounting type (B3/B5)",
      "Weight and color",
      "Horsepower and brand name"
    ],
    "exp": "A motor cannot be replaced unless the physical dimensions (Frame, Mounting) and environmental limits (IP, Class) match, alongside the electrical specs.",
    "id": "T03_S5_018",
    "topic": "T03_Motors",
    "cat": "Gap"
  },
  {
    "q": "What is the difference between a B3 and B5 motor mounting?",
    "a": "B3 is Foot-mounted; B5 is Flange-mounted",
    "opts": [
      "B3 is vertical; B5 is horizontal",
      "B3 is Foot-mounted; B5 is Flange-mounted",
      "B3 is waterproof; B5 is not",
      "B3 requires a VFD; B5 is DOL"
    ],
    "exp": "B3 has feet to bolt onto a bedplate. B5 has a circular flange on the drive end to bolt directly onto a pump casing (no feet). B35 has both.",
    "id": "T03_S5_019",
    "topic": "T03_Motors",
    "cat": "Gap"
  },
  {
    "q": "When a motor returns from shore after rewinding, what is the first electrical check the ETO must perform?",
    "a": "Insulation Resistance test (Megger) between all phases and earth",
    "opts": [
      "Connect it to 440V and run it",
      "Insulation Resistance test (Megger) between all phases and earth",
      "Check the bearing grease",
      "Paint the casing"
    ],
    "exp": "You must verify the shore workshop did not damage the insulation or leave moisture in the windings before applying main power.",
    "id": "T03_S5_020",
    "topic": "T03_Motors",
    "cat": "Gap"
  },
  {
    "q": "After rewinding, why must you measure the DC resistance of all three phases with a low-resistance bridge?",
    "a": "To ensure Resistance Balance; all phases must be equal within 2% to prevent unbalanced magnetic pull and heating",
    "opts": [
      "To check if the motor is a squirrel cage",
      "To ensure Resistance Balance; all phases must be equal within 2% to prevent unbalanced magnetic pull and heating",
      "To calculate the power factor",
      "To check the insulation"
    ],
    "exp": "If the winder used the wrong wire gauge or fewer turns on one phase, the resistance will differ, causing severe issues under load.",
    "id": "T03_S5_021",
    "topic": "T03_Motors",
    "cat": "Gap"
  },
  {
    "q": "What tool is used to confirm the correct U-V-W connection sequence before coupling a newly installed motor?",
    "a": "A Phase Rotation Meter",
    "opts": [
      "A Megger",
      "A Phase Rotation Meter",
      "An Oscilloscope",
      "A Hydrometer"
    ],
    "exp": "Running a pump backwards can unscrew the impeller or destroy the mechanical seal instantly. You must verify the supply phase sequence matches the motor's intended rotation.",
    "id": "T03_S5_022",
    "topic": "T03_Motors",
    "cat": "Gap"
  },
  {
    "q": "What does an IP68 rating indicate for a bilge pump motor?",
    "a": "Dust tight (6) and suitable for continuous submersion in water (8)",
    "opts": [
      "Splash proof",
      "Dust tight (6) and suitable for continuous submersion in water (8)",
      "Explosion proof",
      "Ventilated enclosure"
    ],
    "exp": "A standard engine room motor is IP44. An exposed deck motor is IP55/56. Only IP68 guarantees survival if fully submerged in the bilges.",
    "id": "T03_S5_023",
    "topic": "T03_Motors",
    "cat": "Gap"
  },
  {
    "q": "If a Main Cooling Sea Water (MCSW) pump motor is built with Class F insulation (155\u00b0C max), at what temperature is it typically designed to operate?",
    "a": "Class B temperature limits (130\u00b0C) to provide a 25\u00b0C safety margin for reliability",
    "opts": [
      "180\u00b0C",
      "Class B temperature limits (130\u00b0C) to provide a 25\u00b0C safety margin for reliability",
      "45\u00b0C ambient only",
      "155\u00b0C continuously"
    ],
    "exp": "Marine classification societies prefer 'Class F insulated, Class B rise'. This thermal buffer ensures long life in harsh, high-ambient engine rooms.",
    "id": "T03_S5_024",
    "topic": "T03_Motors",
    "cat": "Gap"
  },
  {
    "q": "What is the primary difference between a Synchronous Motor and an Induction Motor?",
    "a": "A synchronous motor has a DC-excited rotor and runs exactly at Ns (zero slip)",
    "opts": [
      "A synchronous motor uses only single-phase power",
      "A synchronous motor has a DC-excited rotor and runs exactly at Ns (zero slip)",
      "An induction motor has a commutator",
      "A synchronous motor cannot be reversed"
    ],
    "exp": "By feeding DC into the rotor (via slip rings), a distinct North-South magnetic field is created on the rotor which physically locks onto the rotating stator field.",
    "id": "T03_S5_025",
    "topic": "T03_Motors",
    "cat": "Sync"
  },
  {
    "q": "Why is a pure Synchronous Motor NOT self-starting?",
    "a": "The massive rotor inertia prevents it from instantly locking onto a field spinning at 1500 RPM",
    "opts": [
      "Because it lacks a stator",
      "The massive rotor inertia prevents it from instantly locking onto a field spinning at 1500 RPM",
      "Because it uses DC power only",
      "Because the slip rings add too much friction"
    ],
    "exp": "The RMF flashes past the stationary rotor poles 50 times a second, creating rapid alternating torque that averages to zero.",
    "id": "T03_S5_026",
    "topic": "T03_Motors",
    "cat": "Sync"
  },
  {
    "q": "How is a Synchronous Motor typically started?",
    "a": "Using a squirrel-cage 'damper winding' embedded in the rotor poles to start it as an induction motor",
    "opts": [
      "By turning it by hand",
      "Using a squirrel-cage 'damper winding' embedded in the rotor poles to start it as an induction motor",
      "By applying 1000V DC instantly",
      "By using a Ward-Leonard set"
    ],
    "exp": "The damper winding (Amortisseur winding) allows it to accelerate to ~95% speed like a standard induction motor. Then, DC excitation is switched on to 'pull' it into synchronism.",
    "id": "T03_S5_027",
    "topic": "T03_Motors",
    "cat": "Sync"
  },
  {
    "q": "What happens if a Synchronous Motor loses its DC field excitation while running?",
    "a": "It falls out of synchronism, runs as an induction motor on its damper windings, draws heavy current, and may trip",
    "opts": [
      "It speeds up to infinity",
      "It falls out of synchronism, runs as an induction motor on its damper windings, draws heavy current, and may trip",
      "It reverses direction",
      "It generates power into the grid"
    ],
    "exp": "Without the strong DC field lock, the load forces the rotor to slip. The damper winding acts as a squirrel cage, but it's not rated for continuous duty and will overheat quickly.",
    "id": "T03_S5_028",
    "topic": "T03_Motors",
    "cat": "Sync"
  },
  {
    "q": "What is a 'Self-Synchronous' (Selsyn) motor system?",
    "a": "A transmitter-receiver pair used to transmit exact angular position remotely without mechanical links",
    "opts": [
      "A motor that generates its own DC field",
      "A transmitter-receiver pair used to transmit exact angular position remotely without mechanical links",
      "A VFD controlled pump",
      "An automatic steering system"
    ],
    "exp": "Used for rudder angle indicators and engine telegraphs. The 3-phase stators are wired together. When the transmitter rotor is turned, induced currents force the receiver rotor to perfectly mirror its angle.",
    "id": "T03_S5_029",
    "topic": "T03_Motors",
    "cat": "Sync"
  },
  {
    "q": "What does 'Ex d' indicate on a hazardous area motor's nameplate?",
    "a": "Flameproof enclosure: it can withstand an internal explosion without igniting the outside atmosphere",
    "opts": [
      "Intrinsically safe",
      "Flameproof enclosure: it can withstand an internal explosion without igniting the outside atmosphere",
      "Increased safety",
      "Non-sparking"
    ],
    "exp": "The heavy cast iron casing contains the blast, and the machined flanges cool the escaping gases below the ignition temperature of the surrounding explosive gas (e.g., in a pump room).",
    "id": "T03_S5_030",
    "topic": "T03_Motors",
    "cat": "Gap"
  },
  {
    "q": "A surveyor asks: 'A 440V motor is repeatedly tripping on its thermal overload relay. The load is normal. What is the most likely electrical cause?'",
    "a": "A high resistance contact in one of the starter contactors, causing an unbalanced phase voltage",
    "opts": [
      "The motor's cooling fan is blocked",
      "A high resistance contact in one of the starter contactors, causing an unbalanced phase voltage",
      "The motor's insulation resistance is 2 Megohms",
      "The supply frequency has dropped to 49Hz"
    ],
    "exp": "A pitted or burned contact in the main contactor (KM) creates a voltage drop on one phase. This phase imbalance causes severe negative sequence currents, massively increasing rotor heating and causing the OLR to trip even if the mechanical load is normal.",
    "id": "T03_S6_001",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "How can you differentiate between a thermal overload trip and a magnetic short-circuit trip when a motor stops unexpectedly?",
    "a": "An OLR trip can be reset after a few minutes of cooling; a short-circuit trip usually throws an MCB or blows an HRC fuse",
    "opts": [
      "An OLR trip is instantaneous",
      "An OLR trip can be reset after a few minutes of cooling; a short-circuit trip usually throws an MCB or blows an HRC fuse",
      "A short circuit trip will reset automatically",
      "An OLR trip destroys the motor"
    ],
    "exp": "The bimetallic strip in an OLR requires time to cool before the reset mechanism engages. An MCB or fuse trips instantly and requires physical replacement or manual lever reset.",
    "id": "T03_S6_002",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "You start a massive engine room ventilation fan via a Star-Delta starter. It accelerates in Star, but the moment it switches to Delta, the main breaker trips. Why?",
    "a": "The transition timer was set too short, so the motor had not reached sufficient speed, causing a massive DOL-like current surge in Delta",
    "opts": [
      "The motor was single-phasing",
      "The transition timer was set too short, so the motor had not reached sufficient speed, causing a massive DOL-like current surge in Delta",
      "The delta contactor is wired in reverse",
      "The star contactor failed to open"
    ],
    "exp": "If the timer is too short, the slip is still very high when Delta closes. Applying full 440V at high slip results in a massive current surge that trips the magnetic short-circuit protection.",
    "id": "T03_S6_003",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "What happens if the 'Dead Time' in a Star-Delta transition is completely eliminated (i.e., Star opens and Delta closes instantly)?",
    "a": "The residual back-EMF of the motor may clash out-of-phase with the supply voltage, creating a devastating transient current",
    "opts": [
      "The motor runs smoothly without interruption",
      "The residual back-EMF of the motor may clash out-of-phase with the supply voltage, creating a devastating transient current",
      "The motor reverses direction",
      "The supply voltage doubles"
    ],
    "exp": "The spinning motor temporarily acts as a generator. If Delta closes while this back-EMF is out of phase with the grid, the resulting transient current can exceed 15x full load current, ripping windings apart.",
    "id": "T03_S6_004",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "A surveyor asks: 'How do you check if a 3-phase induction motor has a burnt-out (open circuit) stator winding using a multimeter?'",
    "a": "Measure the resistance across U1-U2, V1-V2, and W1-W2; one phase will show infinite resistance",
    "opts": [
      "Measure the resistance between U1 and earth",
      "Measure the resistance across U1-U2, V1-V2, and W1-W2; one phase will show infinite resistance",
      "Apply 440V and check the current",
      "Check the voltage at the terminal box"
    ],
    "exp": "An open circuit means the copper wire has broken (burnt through). A standard multimeter will show infinite resistance (OL) across the ends of the broken phase winding.",
    "id": "T03_S6_005",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "What is the critical danger of attempting to restart a large motor immediately after it has tripped on thermal overload?",
    "a": "The copper windings are already extremely hot; a starting current surge of 6x FLC will likely melt the insulation and destroy the motor",
    "opts": [
      "The contactors will fuse together",
      "The copper windings are already extremely hot; a starting current surge of 6x FLC will likely melt the insulation and destroy the motor",
      "The motor will run backwards",
      "The power factor will drop to zero"
    ],
    "exp": "Heat is cumulative. If it just tripped on overload, the internal hotspot temperature is near the limit (e.g., 155\u00b0C). Hitting it with a 50A starting surge adds massive I\u00b2R heat, pushing it past the breakdown point.",
    "id": "T03_S6_006",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "Why is it absolutely forbidden to use a standard Megger (Insulation Resistance Tester) on a motor connected to a Variable Frequency Drive (VFD)?",
    "a": "The 500V DC injected by the Megger will destroy the sensitive IGBTs and diodes in the VFD's inverter and rectifier sections",
    "opts": [
      "The Megger will not read accurately",
      "The 500V DC injected by the Megger will destroy the sensitive IGBTs and diodes in the VFD's inverter and rectifier sections",
      "The motor windings will overheat",
      "The VFD will absorb the DC and charge its capacitors"
    ],
    "exp": "Solid-state electronics cannot withstand high DC test voltages. You must physically disconnect the motor cables from the VFD terminals before meggering the motor.",
    "id": "T03_S6_007",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "A 3-phase motor is heavily vibrating and emitting a loud, pulsing 100Hz hum. The mechanical coupling is perfectly aligned. What is the electrical fault?",
    "a": "Single phasing or severe voltage imbalance causing a negative sequence counter-rotating magnetic field",
    "opts": [
      "Bearing failure",
      "Single phasing or severe voltage imbalance causing a negative sequence counter-rotating magnetic field",
      "Low frequency from the generator",
      "Over-greased bearings"
    ],
    "exp": "When a phase is lost, the pulsating magnetic field creates a severe 'unbalanced magnetic pull' (UMP) that tugs the rotor violently at twice the supply frequency, causing intense vibration.",
    "id": "T03_S6_008",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "You are meggering a newly arrived motor from the shore workshop. The IR reading is 0.2 M\u03a9. What must you do?",
    "a": "Do not energize it; place it in a dry, warm place or apply low DC voltage to bake out the absorbed moisture until IR exceeds 1 M\u03a9",
    "opts": [
      "Energize it immediately to heat it up",
      "Do not energize it; place it in a dry, warm place or apply low DC voltage to bake out the absorbed moisture until IR exceeds 1 M\u03a9",
      "Replace the bearings",
      "Increase the supply voltage by 10%"
    ],
    "exp": "0.2 M\u03a9 indicates severe moisture absorption during transit. Applying 440V will cause an instant flashover to earth. It must be dried (varnish baked) first.",
    "id": "T03_S6_009",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "A motor is running perfectly, but the external casing feels excessively hot to the touch. Current draw is normal. What should you check first?",
    "a": "Check if the cooling fan cowl is blocked by dirt, or if the external cooling fins are caked in grease/paint",
    "opts": [
      "Check the main switchboard voltage",
      "Check if the cooling fan cowl is blocked by dirt, or if the external cooling fins are caked in grease/paint",
      "Check the slip ring brushes",
      "Check the VFD parameters"
    ],
    "exp": "TEFC (Totally Enclosed Fan Cooled) motors rely entirely on the external fan blowing air over the ribbed fins. If the fins are choked with dust/oil, the heat cannot escape.",
    "id": "T03_S6_010",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "What happens to a squirrel cage induction motor if two phases of the supply are swapped while it is running at full speed?",
    "a": "It undergoes 'Plugging' \u2014 brutal deceleration as it tries to reverse instantly, drawing massive current and potentially shearing the shaft",
    "opts": [
      "It stops smoothly",
      "It undergoes 'Plugging' \u2014 brutal deceleration as it tries to reverse instantly, drawing massive current and potentially shearing the shaft",
      "It continues running normally",
      "It trips the earth fault relay"
    ],
    "exp": "Swapping phases reverses the RMF direction. The rotor (spinning at +1450 RPM) is suddenly facing an RMF at -1500 RPM. Slip becomes ~200%. The mechanical and electrical shock is catastrophic.",
    "id": "T03_S6_011",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "Why do surveyors emphasize checking the 'Air Gap' using a long feeler gauge during a major motor overhaul?",
    "a": "To ensure the rotor is perfectly centralized within the stator; an uneven gap causes Unbalanced Magnetic Pull (UMP) and destroys bearings",
    "opts": [
      "To check for dust accumulation",
      "To ensure the rotor is perfectly centralized within the stator; an uneven gap causes Unbalanced Magnetic Pull (UMP) and destroys bearings",
      "To measure the thickness of the insulation",
      "To ensure the cooling air can flow freely"
    ],
    "exp": "As the rotor spins, if it is closer to the stator at the 6 o'clock position (due to bearing wear or poor end-shield alignment), the magnetic pull there is vastly stronger, bending the shaft.",
    "id": "T03_S6_012",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "What is the function of the 'Centrifugal Switch' in a single-phase induction motor?",
    "a": "It disconnects the high-resistance starting winding once the motor reaches about 75% of synchronous speed",
    "opts": [
      "It shuts off the motor if it spins too fast",
      "It disconnects the high-resistance starting winding once the motor reaches about 75% of synchronous speed",
      "It engages the mechanical brake",
      "It switches the motor to delta connection"
    ],
    "exp": "Single-phase motors have no natural rotating field. A starting winding (with a capacitor) creates an artificial phase shift to start. Once spinning, the main winding sustains rotation, and the starting winding is removed to prevent burnout.",
    "id": "T03_S6_013",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "You find a motor's bearing housing extremely hot and 'weeping' oil, but the motor casing itself is cool. What is the diagnosis?",
    "a": "Over-greasing. The bearing cavity is fully packed, causing extreme fluid friction (churning) which overheats and separates the grease",
    "opts": [
      "Under-greasing",
      "Over-greasing. The bearing cavity is fully packed, causing extreme fluid friction (churning) which overheats and separates the grease",
      "Single phasing",
      "Harmonic distortion"
    ],
    "exp": "Grease consists of oil suspended in a soap matrix. Massive churning heat from over-greasing breaks down the matrix, bleeding the oil out and leaving behind a hard crust that ruins the bearing.",
    "id": "T03_S6_014",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "If a ship is supplied with 60Hz power, but you install a motor designed strictly for 50Hz, what will happen?",
    "a": "The motor will run 20% faster, potentially overloading the driven pump/fan due to the cube law of power",
    "opts": [
      "It will run 20% slower",
      "The motor will run 20% faster, potentially overloading the driven pump/fan due to the cube law of power",
      "It will draw less current",
      "It will run perfectly normally"
    ],
    "exp": "Ns = 120f/P. Increasing frequency to 60Hz increases speed by 60/50 (1.2x). For a centrifugal pump, power required is proportional to speed cubed (1.2\u00b3 = 1.72). The motor will draw 72% more power and trip.",
    "id": "T03_S6_015",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "How does an 'Active Front End' (AFE) VFD differ from a standard VFD when dealing with a descending crane load?",
    "a": "It uses IGBTs in the rectifier to push regenerated AC power back into the ship's grid, instead of burning it in a resistor",
    "opts": [
      "It uses mechanical brakes",
      "It uses IGBTs in the rectifier to push regenerated AC power back into the ship's grid, instead of burning it in a resistor",
      "It applies a DC injection to stop the motor",
      "It increases the frequency to brake"
    ],
    "exp": "Standard rectifiers use diodes (one-way flow). AFE rectifiers use synchronized IGBTs, allowing bi-directional power flow, making them highly energy-efficient for heavy lifting applications.",
    "id": "T03_S6_016",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "What is the purpose of 'Chording' (Short-pitching) the stator windings in an AC motor?",
    "a": "To eliminate specific spatial harmonics (like the 5th and 7th) from the magnetic flux, preventing crawling and reducing losses",
    "opts": [
      "To save copper wire",
      "To eliminate specific spatial harmonics (like the 5th and 7th) from the magnetic flux, preventing crawling and reducing losses",
      "To increase starting torque",
      "To allow the motor to run on DC power"
    ],
    "exp": "By making the span of a coil slightly less than a full pole pitch, the fundamental voltages add up efficiently, but the higher-order harmonic voltages cancel each other out.",
    "id": "T03_S6_017",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "Why is 'Skewing' the rotor bars a standard practice in squirrel cage motors?",
    "a": "It reduces magnetic humming (noise) and eliminates 'cogging' (magnetic locking of stator and rotor teeth)",
    "opts": [
      "It makes the rotor lighter",
      "It reduces magnetic humming (noise) and eliminates 'cogging' (magnetic locking of stator and rotor teeth)",
      "It increases the maximum RPM",
      "It eliminates slip"
    ],
    "exp": "If the bars were perfectly straight, they would align exactly with the stator slots, causing strong magnetic attraction (cogging) at standstill. Skewing breaks this alignment, ensuring smooth starting torque.",
    "id": "T03_S6_018",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "A surveyor asks: 'A pump motor is drawing normal current but the flow rate is very low. The motor was recently replaced. What is the cause?'",
    "a": "The phase sequence is reversed, causing the motor and impeller to run backwards",
    "opts": [
      "The voltage is too low",
      "The phase sequence is reversed, causing the motor and impeller to run backwards",
      "The motor is single-phasing",
      "The slip is too high"
    ],
    "exp": "A centrifugal pump running backwards will still move water, but at a vastly reduced flow and pressure, while drawing seemingly normal current. Swap any two phases to fix.",
    "id": "T03_S6_019",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "What is the correct procedure if a motor falls into the sea and is retrieved hours later?",
    "a": "Wash thoroughly with fresh water to remove salt, bake in an oven at 80-100\u00b0C for hours/days until IR >1M\u03a9, then re-varnish",
    "opts": [
      "Dry it with compressed air and start it immediately",
      "Wash thoroughly with fresh water to remove salt, bake in an oven at 80-100\u00b0C for hours/days until IR >1M\u03a9, then re-varnish",
      "Wash with diesel and megger it",
      "Throw it away, it is unrecoverable"
    ],
    "exp": "Salt is highly conductive and hygroscopic. It MUST be washed out with fresh water immediately. Only a slow, deep bake will drive out the moisture from the inner windings.",
    "id": "T03_S6_020",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "What happens if a synchronous motor is 'under-excited' (DC field is too weak)?",
    "a": "It will draw a lagging reactive current from the AC supply, acting like an inductor",
    "opts": [
      "It will run faster than synchronous speed",
      "It will draw a lagging reactive current from the AC supply, acting like an inductor",
      "It will draw a leading current",
      "It will switch to generating mode"
    ],
    "exp": "An under-excited synchronous motor relies on the AC stator supply to make up the missing magnetic flux, drawing lagging VARs. If over-excited, it supplies leading VARs.",
    "id": "T03_S6_021",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "In a slip-ring induction motor, what happens if the external rotor resistance is left IN the circuit during normal running?",
    "a": "The motor will run at high slip (lower speed), and massive I\u00b2R heat will be generated in the resistors, wasting energy",
    "opts": [
      "The motor will run at synchronous speed",
      "The motor will run at high slip (lower speed), and massive I\u00b2R heat will be generated in the resistors, wasting energy",
      "The starting torque will drop to zero",
      "The power factor will improve to unity"
    ],
    "exp": "External resistance is only for starting (to increase torque and lower current). Once running, it must be shorted out, otherwise it acts as a very inefficient speed controller, burning power as heat.",
    "id": "T03_S6_022",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "What is the function of an 'Anti-Vibration Mount' or flexible rubber coupling between a motor and a pump?",
    "a": "To absorb slight misalignments and prevent transmission of torsional shocks and vibrations between the shafts",
    "opts": [
      "To conduct static electricity",
      "To absorb slight misalignments and prevent transmission of torsional shocks and vibrations between the shafts",
      "To increase the torque output",
      "To act as a heat sink"
    ],
    "exp": "Even with precision laser alignment, thermal expansion causes shafts to shift during operation. A flexible coupling (e.g., spider insert) accommodates this microscopic movement without destroying the bearings.",
    "id": "T03_S6_023",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "What is a 'Polarization Index' (PI) test for a high voltage motor?",
    "a": "The ratio of the Megger reading at 10 minutes to the reading at 1 minute; it indicates the dryness and cleanliness of the insulation",
    "opts": [
      "The measure of magnetic poles",
      "The ratio of the Megger reading at 10 minutes to the reading at 1 minute; it indicates the dryness and cleanliness of the insulation",
      "The phase angle between voltage and current",
      "The ratio of starting current to running current"
    ],
    "exp": "A PI > 2.0 is generally acceptable. If insulation is dirty/wet, the leakage current remains high, and the ratio will be close to 1.0 (fail).",
    "id": "T03_S6_024",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "Why should you never open the secondary circuit of a Current Transformer (CT) while the motor is running?",
    "a": "It will induce a lethally high voltage across the open secondary terminals and destroy the CT insulation",
    "opts": [
      "It will stop the motor",
      "It will induce a lethally high voltage across the open secondary terminals and destroy the CT insulation",
      "It will cause the motor to overspeed",
      "It will blow the main fuses"
    ],
    "exp": "A CT acts as a step-up transformer for voltage. If the secondary is open (infinite resistance), the secondary voltage spikes to thousands of volts attempting to push the proportional current.",
    "id": "T03_S6_025",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "How does a 'Phase-Angle Control' thyristor soft starter limit current?",
    "a": "It delays the firing pulse to the thyristor gate, only allowing a small portion of each AC half-wave to pass to the motor",
    "opts": [
      "By adding physical resistors",
      "It delays the firing pulse to the thyristor gate, only allowing a small portion of each AC half-wave to pass to the motor",
      "By lowering the frequency",
      "By dropping a phase"
    ],
    "exp": "By chopping the waveform, the RMS (average) voltage is reduced. As the motor accelerates, the firing angle is advanced until full sine waves are passed.",
    "id": "T03_S6_026",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "A motor nameplate lists a Service Factor (SF) of 1.15. What does this mean?",
    "a": "The motor can operate continuously at 15% over its rated horsepower without catastrophic failure",
    "opts": [
      "It requires 15% more maintenance",
      "The motor can operate continuously at 15% over its rated horsepower without catastrophic failure",
      "It will run 15% faster than nominal speed",
      "It draws 15% less current"
    ],
    "exp": "An SF > 1.0 provides a buffer for short-term overloads or voltage fluctuations. However, running continuously in the service factor zone reduces the motor's lifespan due to higher heat.",
    "id": "T03_S6_027",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "What is the danger of using a standard non-inverter duty motor with a VFD over a long cable run?",
    "a": "Reflected waves (voltage spikes) can exceed the motor's insulation rating, causing the winding insulation to break down and short",
    "opts": [
      "The cable will act as an antenna and transmit radio signals",
      "Reflected waves (voltage spikes) can exceed the motor's insulation rating, causing the winding insulation to break down and short",
      "The motor will run backwards",
      "The VFD will lose its programming"
    ],
    "exp": "The sharp voltage pulses (dv/dt) from the VFD reflect back from the motor terminals, doubling the voltage peak (e.g., 1000V+ on a 440V line). 'Inverter Duty' motors have reinforced insulation.",
    "id": "T03_S6_028",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "If a surveyor asks: 'Why do we use Class F insulation but limit the temperature rise to Class B?', what is your answer?",
    "a": "To provide a massive thermal safety margin, greatly increasing the operational lifespan and reliability of the motor in hot engine rooms",
    "opts": [
      "Because Class B is cheaper",
      "To provide a massive thermal safety margin, greatly increasing the operational lifespan and reliability of the motor in hot engine rooms",
      "To make it waterproof",
      "Because Class F requires DC power"
    ],
    "exp": "Insulation life halves for every 10\u00b0C increase in temperature. Running a 155\u00b0C (Class F) material at a max of 130\u00b0C (Class B limits) guarantees decades of reliable service.",
    "id": "T03_S6_029",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "What is the primary function of the 'End Rings' in a squirrel cage rotor?",
    "a": "To short-circuit all the copper/aluminium rotor bars together, allowing the induced currents to circulate in closed loops",
    "opts": [
      "To balance the rotor dynamically",
      "To short-circuit all the copper/aluminium rotor bars together, allowing the induced currents to circulate in closed loops",
      "To attach the cooling fan",
      "To prevent axial movement of the shaft"
    ],
    "exp": "Without the end rings, the rotor bars would be open circuits. No current could flow, meaning no magnetic field from the rotor, and therefore zero torque.",
    "id": "T03_S6_030",
    "topic": "T03_Motors",
    "cat": "Troubleshoot"
  },
  {
    "q": "Surveyor Deswal asks: What happens if a running 3-phase motor loses one phase?",
    "a": "It continues running but draws heavily increased current on the remaining two phases",
    "opts": [
      "It continues running but draws heavily increased current on the remaining two phases",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_001",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "According to Surveyor Kamath, why does a motor hum but fail to start on single phase?",
    "a": "A rotating magnetic field cannot be established with only one phase, producing zero starting torque",
    "opts": [
      "A rotating magnetic field cannot be established with only one phase, producing zero starting torque",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_002",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Sanjib: What is the purpose of the slip ring in a wound rotor motor?",
    "a": "To allow external resistance to be added to the rotor circuit for starting torque control",
    "opts": [
      "To allow external resistance to be added to the rotor circuit for starting torque control",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_003",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What is the typical starting current of a Direct-On-Line (DOL) induction motor?",
    "a": "Typically 5 to 7 times the full load current",
    "opts": [
      "Typically 5 to 7 times the full load current",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_004",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "How does a Star-Delta starter reduce starting current? (Surveyor question)",
    "a": "It connects the stator in Star, reducing the phase voltage by \u221a3, which reduces starting current by 1/3",
    "opts": [
      "It connects the stator in Star, reducing the phase voltage by \u221a3, which reduces starting current by 1/3",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_005",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Deswal: What is 'slip' in an induction motor?",
    "a": "The difference between the synchronous speed of the magnetic field and the actual rotor speed",
    "opts": [
      "The difference between the synchronous speed of the magnetic field and the actual rotor speed",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_006",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Why can't an induction motor run at synchronous speed?",
    "a": "If it ran at synchronous speed, there would be no relative motion, no induced rotor current, and zero torque",
    "opts": [
      "If it ran at synchronous speed, there would be no relative motion, no induced rotor current, and zero torque",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_007",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What is the difference between synchronous and induction motors during oral exams?",
    "a": "Synchronous motors run at exact synchronous speed; induction motors have slip",
    "opts": [
      "Synchronous motors run at exact synchronous speed; induction motors have slip",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_008",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "According to MMD Surveyors, what causes a motor to overheat even if load is normal?",
    "a": "Poor ventilation, blocked cooling fins, or high ambient temperature",
    "opts": [
      "Poor ventilation, blocked cooling fins, or high ambient temperature",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_009",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What does an insulation resistance (Megger) value of 0 ohms indicate?",
    "a": "A dead short circuit to earth or between phases",
    "opts": [
      "A dead short circuit to earth or between phases",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_010",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Sanjib: How do you perform a Polarization Index (PI) test on a large motor?",
    "a": "Measure IR at 1 minute and 10 minutes; PI = IR(10min) / IR(1min)",
    "opts": [
      "Measure IR at 1 minute and 10 minutes; PI = IR(10min) / IR(1min)",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_011",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What is the advantage of a VFD over a Soft Starter?",
    "a": "VFD can control speed continuously; Soft Starter only controls voltage during run-up",
    "opts": [
      "VFD can control speed continuously; Soft Starter only controls voltage during run-up",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_012",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Kamath: Why do we use anti-condensation heaters in large motors?",
    "a": "To prevent moisture from condensing on the windings when the motor is offline",
    "opts": [
      "To prevent moisture from condensing on the windings when the motor is offline",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_013",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What happens if the motor cooling fan is blocked?",
    "a": "The motor will overheat and the thermal overload relay will eventually trip",
    "opts": [
      "The motor will overheat and the thermal overload relay will eventually trip",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_014",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "During an oral, how do you explain the function of a thermal overload relay?",
    "a": "It uses a bimetallic strip that bends under sustained overcurrent to trip the contactor",
    "opts": [
      "It uses a bimetallic strip that bends under sustained overcurrent to trip the contactor",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_015",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Deswal: What is the meaning of 'Class F' insulation?",
    "a": "Insulation rated to withstand a maximum operating temperature of 155\u00b0C",
    "opts": [
      "Insulation rated to withstand a maximum operating temperature of 155\u00b0C",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_016",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What is the maximum allowable temperature rise for Class F insulation?",
    "a": "Usually 105\u00b0C temperature rise above a 40\u00b0C ambient",
    "opts": [
      "Usually 105\u00b0C temperature rise above a 40\u00b0C ambient",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_017",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "How is motor bearing wear detected before failure?",
    "a": "By monitoring vibration levels and listening for abnormal acoustic noise",
    "opts": [
      "By monitoring vibration levels and listening for abnormal acoustic noise",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_018",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Sanjib: What is 'single phasing'?",
    "a": "The loss of one of the three phases supplying the motor",
    "opts": [
      "The loss of one of the three phases supplying the motor",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_019",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What safety device protects a motor from single phasing?",
    "a": "Phase failure relay or a sensitive thermal overload relay with phase unbalance protection",
    "opts": [
      "Phase failure relay or a sensitive thermal overload relay with phase unbalance protection",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_020",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What is the relationship between frequency and motor speed?",
    "a": "Speed is directly proportional to frequency (N = 120f / p)",
    "opts": [
      "Speed is directly proportional to frequency (N = 120f / p)",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_021",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Kamath: What happens to a 60Hz motor running on a 50Hz supply?",
    "a": "It will run 17% slower and may overheat due to reduced cooling fan speed",
    "opts": [
      "It will run 17% slower and may overheat due to reduced cooling fan speed",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_022",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Why do we dry out a motor before megger testing if it fell in water?",
    "a": "Moisture creates a conductive path; testing while wet could cause a short circuit or damage",
    "opts": [
      "Moisture creates a conductive path; testing while wet could cause a short circuit or damage",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_023",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Deswal: What is a 'squirrel cage' rotor?",
    "a": "A rotor made of solid conducting bars short-circuited by end rings, resembling a cage",
    "opts": [
      "A rotor made of solid conducting bars short-circuited by end rings, resembling a cage",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_024",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "How do you reverse the direction of a 3-phase induction motor?",
    "a": "By swapping any two of the three supply phases",
    "opts": [
      "By swapping any two of the three supply phases",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_025",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Sanjib: What is the purpose of a motor's terminal box earthing?",
    "a": "To ensure any earth fault blows the fuse or trips the breaker, protecting personnel from shock",
    "opts": [
      "To ensure any earth fault blows the fuse or trips the breaker, protecting personnel from shock",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_026",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What is 'cogging' in an induction motor?",
    "a": "The rotor teeth align with stator teeth and the motor refuses to start",
    "opts": [
      "The rotor teeth align with stator teeth and the motor refuses to start",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_027",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Kamath: What is 'crawling' in a motor?",
    "a": "The motor runs stably at a fraction (e.g., 1/7th) of its synchronous speed due to harmonics",
    "opts": [
      "The motor runs stably at a fraction (e.g., 1/7th) of its synchronous speed due to harmonics",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_028",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What type of fire extinguisher is used for an electric motor fire?",
    "a": "CO2 (Carbon Dioxide) or Dry Chemical Powder",
    "opts": [
      "CO2 (Carbon Dioxide) or Dry Chemical Powder",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_029",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  },
  {
    "q": "During an exam, what is the best explanation for motor 'service factor'?",
    "a": "The percentage of overload the motor can handle continuously without damage (e.g., 1.15 = 15%)",
    "opts": [
      "The percentage of overload the motor can handle continuously without damage (e.g., 1.15 = 15%)",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific motor question.",
    "id": "T03_SURV_030",
    "topic": "T03_Motors",
    "cat": "Surveyor Questions"
  }
]);
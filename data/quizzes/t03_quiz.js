window.loadQuizzes("T03_Motors", [
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
    "cat": "Principle",
    "id": "T03M_001"
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
    "cat": "Principle",
    "id": "T03M_002"
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
    "cat": "Principle",
    "id": "T03M_003"
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
    "cat": "Principle",
    "id": "T03M_004"
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
    "cat": "Principle",
    "id": "T03M_005"
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
    "cat": "Principle",
    "id": "T03M_006"
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
    "cat": "Principle",
    "id": "T03M_007"
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
    "cat": "Principle",
    "id": "T03M_008"
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
    "cat": "Principle",
    "id": "T03M_009"
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
    "cat": "Principle",
    "id": "T03M_010"
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
    "cat": "Principle",
    "id": "T03M_011"
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
    "cat": "Principle",
    "id": "T03M_012"
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
    "cat": "Principle",
    "id": "T03M_013"
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
    "cat": "Principle",
    "id": "T03M_014"
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
    "cat": "Principle",
    "id": "T03M_015"
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
    "cat": "Principle",
    "id": "T03M_016"
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
    "cat": "Principle",
    "id": "T03M_017"
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
    "cat": "Principle",
    "id": "T03M_018"
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
    "cat": "Principle",
    "id": "T03M_019"
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
    "cat": "Principle",
    "id": "T03M_020"
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
    "cat": "Principle",
    "id": "T03M_021"
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
    "cat": "Principle",
    "id": "T03M_022"
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
    "cat": "Principle",
    "id": "T03M_023"
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
    "cat": "Slip",
    "id": "T03M_031"
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
    "cat": "Slip",
    "id": "T03M_032"
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
    "cat": "Slip",
    "id": "T03M_033"
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
    "cat": "Slip",
    "id": "T03M_034"
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
    "cat": "Slip",
    "id": "T03M_035"
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
    "cat": "Slip",
    "id": "T03M_036"
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
    "cat": "Slip",
    "id": "T03M_037"
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
    "cat": "Start",
    "id": "T03M_061"
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
    "cat": "Start",
    "id": "T03M_062"
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
    "cat": "Start",
    "id": "T03M_063"
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
    "cat": "Start",
    "id": "T03M_064"
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
    "cat": "Start",
    "id": "T03M_065"
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
    "cat": "Start",
    "id": "T03M_066"
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
    "cat": "Start",
    "id": "T03M_067"
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
    "cat": "Start",
    "id": "T03M_068"
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
    "cat": "Start",
    "id": "T03M_069"
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
    "cat": "Start",
    "id": "T03M_070"
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
    "cat": "Start",
    "id": "T03M_071"
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
    "cat": "Start",
    "id": "T03M_072"
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
    "cat": "Start",
    "id": "T03M_073"
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
    "cat": "Start",
    "id": "T03M_074"
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
    "cat": "Start",
    "id": "T03M_075"
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
    "cat": "Start",
    "id": "T03M_076"
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
    "cat": "Start",
    "id": "T03M_077"
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
    "cat": "Start",
    "id": "T03M_078"
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
    "cat": "Start",
    "id": "T03M_079"
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
    "cat": "Start",
    "id": "T03M_080"
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
    "cat": "Start",
    "id": "T03M_081"
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
    "cat": "Start",
    "id": "T03M_082"
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
    "cat": "Start",
    "id": "T03M_083"
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
    "cat": "Start",
    "id": "T03M_084"
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
    "cat": "Start",
    "id": "T03M_085"
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
    "cat": "Start",
    "id": "T03M_086"
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
    "cat": "Start",
    "id": "T03M_087"
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
    "cat": "Start",
    "id": "T03M_088"
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
    "cat": "Start",
    "id": "T03M_089"
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
    "cat": "Start",
    "id": "T03M_090"
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
    "cat": "VFD",
    "id": "T03M_091"
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
    "cat": "VFD",
    "id": "T03M_092"
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
    "cat": "VFD",
    "id": "T03M_093"
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
    "cat": "VFD",
    "id": "T03M_094"
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
    "cat": "VFD",
    "id": "T03M_095"
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
    "cat": "VFD",
    "id": "T03M_096"
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
    "cat": "VFD",
    "id": "T03M_097"
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
    "cat": "VFD",
    "id": "T03M_098"
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
    "cat": "VFD",
    "id": "T03M_099"
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
    "cat": "VFD",
    "id": "T03M_100"
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
    "cat": "VFD",
    "id": "T03M_101"
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
    "cat": "Speed",
    "id": "T03M_121"
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
    "cat": "Speed",
    "id": "T03M_122"
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
    "cat": "Speed",
    "id": "T03M_123"
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
    "cat": "Speed",
    "id": "T03M_124"
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
    "cat": "Speed",
    "id": "T03M_125"
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
    "cat": "Speed",
    "id": "T03M_126"
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
    "cat": "Speed",
    "id": "T03M_127"
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
    "cat": "Speed",
    "id": "T03M_128"
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
    "cat": "Speed",
    "id": "T03M_129"
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
    "cat": "Speed",
    "id": "T03M_130"
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
    "cat": "Speed",
    "id": "T03M_131"
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
    "cat": "Maint",
    "id": "T03M_151"
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
    "cat": "Maint",
    "id": "T03M_152"
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
    "cat": "Maint",
    "id": "T03M_153"
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
    "cat": "Maint",
    "id": "T03M_154"
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
    "cat": "Maint",
    "id": "T03M_155"
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
    "cat": "Maint",
    "id": "T03M_156"
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
    "cat": "Maint",
    "id": "T03M_157"
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
    "cat": "Maint",
    "id": "T03M_158"
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
    "cat": "Protect",
    "id": "T03M_181"
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
    "cat": "Protect",
    "id": "T03M_182"
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
    "cat": "Protect",
    "id": "T03M_183"
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
    "cat": "Protect",
    "id": "T03M_184"
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
    "cat": "Protect",
    "id": "T03M_185"
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
    "cat": "Protect",
    "id": "T03M_186"
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
    "cat": "Protect",
    "id": "T03M_187"
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
    "cat": "Protect",
    "id": "T03M_188"
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
    "cat": "Protect",
    "id": "T03M_189"
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
    "cat": "Protect",
    "id": "T03M_190"
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
    "cat": "Protect",
    "id": "T03M_191"
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
    "cat": "Protect",
    "id": "T03M_192"
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
    "cat": "Gap",
    "id": "T03M_211"
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
    "cat": "Gap",
    "id": "T03M_212"
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
    "cat": "Gap",
    "id": "T03M_213"
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
    "cat": "Gap",
    "id": "T03M_214"
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
    "cat": "Gap",
    "id": "T03M_215"
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
    "cat": "Gap",
    "id": "T03M_216"
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
    "cat": "Gap",
    "id": "T03M_217"
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
    "cat": "Gap",
    "id": "T03M_218"
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
    "cat": "Gap",
    "id": "T03M_219"
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
    "cat": "Gap",
    "id": "T03M_220"
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
    "cat": "Gap",
    "id": "T03M_221"
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
    "cat": "Gap",
    "id": "T03M_222"
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
    "cat": "Gap",
    "id": "T03M_223"
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
    "cat": "Sync",
    "id": "T03M_241"
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
    "cat": "Sync",
    "id": "T03M_242"
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
    "cat": "Sync",
    "id": "T03M_243"
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
    "cat": "Sync",
    "id": "T03M_244"
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
    "cat": "Sync",
    "id": "T03M_245"
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
    "cat": "Troubleshoot",
    "id": "T03M_271"
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
    "cat": "Troubleshoot",
    "id": "T03M_272"
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
    "cat": "Troubleshoot",
    "id": "T03M_273"
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
    "cat": "Troubleshoot",
    "id": "T03M_274"
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
    "cat": "Troubleshoot",
    "id": "T03M_275"
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
    "cat": "Troubleshoot",
    "id": "T03M_276"
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
    "cat": "Troubleshoot",
    "id": "T03M_277"
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
    "cat": "Troubleshoot",
    "id": "T03M_278"
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
    "cat": "Troubleshoot",
    "id": "T03M_279"
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
    "cat": "Troubleshoot",
    "id": "T03M_280"
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
    "cat": "Troubleshoot",
    "id": "T03M_281"
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
    "cat": "Troubleshoot",
    "id": "T03M_282"
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
    "cat": "Troubleshoot",
    "id": "T03M_283"
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
    "cat": "Troubleshoot",
    "id": "T03M_284"
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
    "cat": "Troubleshoot",
    "id": "T03M_285"
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
    "cat": "Troubleshoot",
    "id": "T03M_286"
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
    "cat": "Troubleshoot",
    "id": "T03M_287"
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
    "cat": "Troubleshoot",
    "id": "T03M_288"
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
    "cat": "Troubleshoot",
    "id": "T03M_289"
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
    "cat": "Troubleshoot",
    "id": "T03M_290"
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
    "cat": "Troubleshoot",
    "id": "T03M_291"
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
    "cat": "Troubleshoot",
    "id": "T03M_292"
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
    "cat": "Troubleshoot",
    "id": "T03M_293"
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
    "cat": "Troubleshoot",
    "id": "T03M_294"
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
    "cat": "Troubleshoot",
    "id": "T03M_295"
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
    "cat": "Troubleshoot",
    "id": "T03M_296"
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
    "cat": "Troubleshoot",
    "id": "T03M_297"
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
    "cat": "Troubleshoot",
    "id": "T03M_298"
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
    "cat": "Troubleshoot",
    "id": "T03M_299"
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
    "cat": "Troubleshoot",
    "id": "T03M_300"
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
    "cat": "Surveyor Questions",
    "id": "T03M_301"
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
    "cat": "Surveyor Questions",
    "id": "T03M_302"
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
    "cat": "Surveyor Questions",
    "id": "T03M_303"
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
    "cat": "Surveyor Questions",
    "id": "T03M_304"
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
    "cat": "Surveyor Questions",
    "id": "T03M_305"
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
    "cat": "Surveyor Questions",
    "id": "T03M_306"
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
    "cat": "Surveyor Questions",
    "id": "T03M_307"
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
    "cat": "Surveyor Questions",
    "id": "T03M_308"
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
    "cat": "Surveyor Questions",
    "id": "T03M_309"
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
    "cat": "Surveyor Questions",
    "id": "T03M_310"
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
    "cat": "Surveyor Questions",
    "id": "T03M_311"
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
    "cat": "Surveyor Questions",
    "id": "T03M_312"
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
    "cat": "Surveyor Questions",
    "id": "T03M_313"
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
    "cat": "Surveyor Questions",
    "id": "T03M_314"
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
    "cat": "Surveyor Questions",
    "id": "T03M_315"
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
    "cat": "Surveyor Questions",
    "id": "T03M_316"
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
    "cat": "Surveyor Questions",
    "id": "T03M_317"
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
    "cat": "Surveyor Questions",
    "id": "T03M_318"
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
    "cat": "Surveyor Questions",
    "id": "T03M_319"
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
    "cat": "Surveyor Questions",
    "id": "T03M_320"
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
    "cat": "Surveyor Questions",
    "id": "T03M_321"
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
    "cat": "Surveyor Questions",
    "id": "T03M_322"
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
    "cat": "Surveyor Questions",
    "id": "T03M_323"
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
    "cat": "Surveyor Questions",
    "id": "T03M_324"
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
    "cat": "Surveyor Questions",
    "id": "T03M_325"
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
    "cat": "Surveyor Questions",
    "id": "T03M_326"
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
    "cat": "Surveyor Questions",
    "id": "T03M_328"
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
    "cat": "Surveyor Questions",
    "id": "T03M_329"
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
    "cat": "Surveyor Questions",
    "id": "T03M_330"
  },
  {
    "q": "What is the fundamental working principle of an AC Induction Motor?",
    "a": "Three-phase AC creates a Rotating Magnetic Field (RMF) that induces EMF and current in the short-circuited rotor, producing rotational force (F=BIL)",
    "opts": [
      "DC excitation in the rotor interacts with the stator's alternating magnetic field to produce torque",
      "Permanent magnets on the stator repel the electromagnetic field generated by the rotor",
      "The commutator physically reverses the current direction to maintain a continuous rotational torque",
      "Three-phase AC creates a Rotating Magnetic Field (RMF) that induces EMF and current in the short-circuited rotor, producing rotational force (F=BIL)"
    ],
    "exp": "Induction motors work on Faraday's law. 3-phase AC on the stator creates an RMF. This RMF cuts the stationary rotor conductors, inducing EMF and current. The rotor current in the magnetic field produces a force (F=BIL), causing rotation. ",
    "cat": "IM",
    "id": "T03M_331"
  },
  {
    "q": "What is 'Slip' in an induction motor and why is it absolutely essential for operation?",
    "a": "Slip is the difference between synchronous speed and actual rotor speed; without slip, there is no relative motion, no induced EMF, and no torque",
    "opts": [
      "Slip is the difference between synchronous speed and actual rotor speed; without slip, there is no relative motion, no induced EMF, and no torque",
      "Slip is the intentional delay built into the star-delta starter to prevent high inrush currents",
      "Slip is the mechanical friction loss in the bearings; it must be minimised to prevent the motor from stalling",
      "Slip is the phase angle difference between voltage and current, which determines the power factor of the motor"
    ],
    "exp": "Slip = (Ns - N) / Ns x 100%. The rotor must always run slightly slower than the RMF. If it reached synchronous speed, there would be no relative motion, therefore no flux cutting, no induced EMF, no rotor current, and zero torque. ",
    "cat": "IM",
    "id": "T03M_332"
  },
  {
    "q": "Calculate the synchronous speed (Ns) of a 6-pole induction motor operating on a 50Hz ship's supply.",
    "a": "1000 RPM",
    "opts": [
      "3000 RPM",
      "1500 RPM",
      "1000 RPM",
      "750 RPM"
    ],
    "exp": "The formula is Ns = 120 x f / P. Therefore, Ns = (120 x 50) / 6 = 6000 / 6 = 1000 RPM. ",
    "cat": "IM",
    "id": "T03M_333"
  },
  {
    "q": "Why does a Direct-On-Line (DOL) induction motor draw 5 to 8 times its rated full-load current during starting?",
    "a": "At standstill (slip=1), the RMF cuts the short-circuited, low-impedance rotor at full frequency, inducing maximum EMF and massive current",
    "opts": [
      "The motor's cooling fan requires extra torque to overcome initial static inertia",
      "The stator winding insulation requires massive current to magnetize the iron core from a cold state",
      "At standstill (slip=1), the RMF cuts the short-circuited, low-impedance rotor at full frequency, inducing maximum EMF and massive current",
      "The power factor is extremely high at startup, forcing the generator to push maximum current"
    ],
    "exp": "At standstill, slip is 100% (s=1). The RMF cuts the rotor at full supply frequency (50Hz), inducing maximum EMF. Because the squirrel cage rotor is short-circuited and has very low resistance, this huge EMF drives a massive rotor current, which demands a massive stator current to balance the ampere-turns. ",
    "cat": "SC",
    "id": "T03M_334"
  },
  {
    "q": "In a Star-Delta starter, what is the exact reduction in starting current and starting torque compared to a Direct-On-Line (DOL) start?",
    "a": "Both starting current and starting torque are reduced to exactly 1/3 of their DOL values",
    "opts": [
      "Current is reduced by 1/\u221a3 (approx 58%), torque remains the same",
      "Current is reduced to 1/2, torque is reduced to 1/4",
      "Both starting current and starting torque are reduced to exactly 1/3 of their DOL values",
      "Current is reduced to 1/3, but torque increases by a factor of \u221a3"
    ],
    "exp": "In the star connection, voltage across each winding is reduced by 1/\u221a3. Because current is proportional to voltage, and torque is proportional to voltage squared, both the starting current and the starting torque are reduced to 1/3 of what they would be in Delta (DOL). ",
    "cat": "SD",
    "id": "T03M_335"
  },
  {
    "q": "Why is the 'Dead Time' (20-50ms transition gap) absolutely essential when a Star-Delta starter switches from Star to Delta?",
    "a": "It allows the motor's back-EMF to decay, preventing a massive, out-of-phase transient current surge that could cause severe mechanical shock",
    "opts": [
      "It ensures the motor completely stops before reversing direction",
      "It allows the contactor coils to demagnetize so they don't weld together",
      "It gives the thermal overload relay time to cool down before full load is applied",
      "It allows the motor's back-EMF to decay, preventing a massive, out-of-phase transient current surge that could cause severe mechanical shock"
    ],
    "exp": "When the star contactor opens, the spinning motor still generates back-EMF. If the delta contactor closes immediately while this back-EMF is out of phase with the supply, it causes a violent transient current surge (sometimes worse than DOL). The dead time allows this EMF to decay safely. ",
    "cat": "SD",
    "id": "T03M_336"
  },
  {
    "q": "Which starting method provides the best starting torque while simultaneously keeping starting current to a minimum (100-150% of rated)?",
    "a": "Variable Frequency Drive (VFD)",
    "opts": [
      "Auto-Transformer Starter",
      "Soft Starter",
      "Variable Frequency Drive (VFD)",
      "Star-Delta Starter"
    ],
    "exp": "A VFD starts the motor at a very low frequency AND low voltage, maintaining the correct V/f ratio. This provides full starting torque at near-zero speed while drawing minimal starting current (100-150% of rated). ",
    "cat": "VFD",
    "id": "T03M_337"
  },
  {
    "q": "What is the primary difference in speed control capability between an electronic Soft Starter and a Variable Frequency Drive (VFD)?",
    "a": "A Soft Starter only controls voltage during ramp up/down and provides NO speed control during running; a VFD controls both voltage and frequency for full speed control",
    "opts": [
      "There is no difference; they both provide identical running speed control, but VFDs are used for larger motors",
      "A Soft Starter provides continuous speed control via thyristors, while a VFD only provides discrete speed steps",
      "A Soft Starter controls frequency to ramp up speed, while a VFD only controls voltage",
      "A Soft Starter only controls voltage during ramp up/down and provides NO speed control during running; a VFD controls both voltage and frequency for full speed control"
    ],
    "exp": "A soft starter uses thyristors to ramp up the voltage during start, then uses a bypass contactor for running at fixed synchronous speed. It cannot alter frequency. A VFD converts AC to DC to variable AC, allowing precise, continuous control of both speed and torque at all times. ",
    "cat": "VFD",
    "id": "T03M_338"
  },
  {
    "q": "What is the most efficient method of speed control for a standard squirrel cage induction motor on modern ships?",
    "a": "Varying the supply frequency using a Variable Frequency Drive (VFD)",
    "opts": [
      "Adding external resistance to the rotor circuit",
      "Using a Ward-Leonard generator system",
      "Varying the supply voltage using a thyristor soft starter",
      "Varying the supply frequency using a Variable Frequency Drive (VFD)"
    ],
    "exp": "Varying the frequency (VFD) is the best and most efficient method. It maintains the V/f ratio, ensuring full torque availability across the speed range without the massive heat losses associated with voltage variation or rotor resistance. ",
    "cat": "SPD",
    "id": "T03M_339"
  },
  {
    "q": "How does a Ward-Leonard system provide extremely smooth and reversible speed control?",
    "a": "An AC motor drives a DC generator; varying the generator's field current changes its DC output voltage, which proportionally controls the speed of the final DC drive motor",
    "opts": [
      "It alters the number of active poles in the stator winding, allowing smooth transitions between high and low speeds",
      "It uses back-to-back thyristors to chop the AC waveform, smoothly reducing the RMS voltage to an induction motor",
      "An AC motor drives a DC generator; varying the generator's field current changes its DC output voltage, which proportionally controls the speed of the final DC drive motor",
      "It uses a mechanical variable-pitch pulley system driven by a constant-speed synchronous motor"
    ],
    "exp": "The Ward-Leonard system uses a 3-machine setup. The AC motor spins the DC generator at constant speed. By adjusting the tiny field current of the DC generator, you get a smoothly varying, high-power DC voltage output. This is fed to the DC drive motor armature, granting precise speed control. ",
    "cat": "WL",
    "id": "T03M_340"
  },
  {
    "q": "When looking at a motor's nameplate, what does the IEC 'Frame Number' (e.g., Frame 180) specify?",
    "a": "The height of the shaft centreline from the motor base/feet in millimeters",
    "opts": [
      "The height of the shaft centreline from the motor base/feet in millimeters",
      "The physical weight of the motor in kilograms",
      "The diameter of the cooling fan casing in millimeters",
      "The maximum horsepower the motor can safely output continuously"
    ],
    "exp": "In the IEC system, the frame number indicates the physical dimensions of the motor. Crucially, the number represents the exact height from the bottom of the mounting feet to the dead center of the drive shaft in mm (e.g., Frame 180 = 180mm). This is critical for coupling alignment. ",
    "cat": "FN",
    "id": "T03M_341"
  },
  {
    "q": "When performing precision motor coupling alignment using a dial indicator (DTI), what do the 'rim' and 'face' readings indicate?",
    "a": "Rim reading shows parallel offset misalignment; Face reading shows angular misalignment",
    "opts": [
      "Rim reading shows angular misalignment; Face reading shows axial thrust play",
      "Rim reading shows bearing wear; Face reading shows shaft bowing",
      "Rim reading shows parallel offset misalignment; Face reading shows angular misalignment",
      "Rim reading shows thermal expansion; Face reading shows soft foot"
    ],
    "exp": "Sweeping the dial indicator around the outside edge (rim) of the coupling measures parallel offset (shafts not on same axis). Sweeping the indicator against the flat front (face) of the coupling measures angular misalignment (shafts at an angle to each other). ",
    "cat": "FN",
    "id": "T03M_342"
  },
  {
    "q": "What is 'Armature Reaction' in a DC motor, and what is its most visible negative effect?",
    "a": "It is the distortion of the main magnetic field by the armature's own magnetic field, causing the neutral axis to shift and resulting in severe brush sparking",
    "opts": [
      "It is the physical kickback of the armature during starting, causing excessive wear on the drive coupling",
      "It is the chemical breakdown of the commutator copper due to high DC current, causing a green patina to form",
      "It is the distortion of the main magnetic field by the armature's own magnetic field, causing the neutral axis to shift and resulting in severe brush sparking",
      "It is the sudden reversal of rotation when the field current drops below a critical threshold"
    ],
    "exp": "Armature current generates its own MMF at 90 degrees to the main poles. This distorts the main flux, strengthening one pole tip and weakening the other. It shifts the magnetic neutral axis away from the geometric neutral axis. If brushes aren't shifted to match, they short out coils with active EMF, causing severe sparking. Interpoles are used to fix this. ",
    "cat": "DC",
    "id": "T03M_343"
  },
  {
    "q": "How does 'DC Injection Braking' safely stop an AC induction motor without using mechanical brake pads?",
    "a": "AC is disconnected and DC is injected into the stator, creating a static magnetic field. The spinning rotor cuts this static field, inducing currents that create an opposing braking force",
    "opts": [
      "The motor is momentarily switched into reverse (plugging), and DC is used to hold the contactors closed",
      "The VFD dumps the kinetic energy into a massive DC resistor bank until the motor halts",
      "AC is disconnected and DC is injected into the stator, creating a static magnetic field. The spinning rotor cuts this static field, inducing currents that create an opposing braking force",
      "DC is applied directly to the squirrel cage rotor via slip rings, turning it into an electromagnet that locks onto the stator"
    ],
    "exp": "For DC injection braking, the AC is cut off, and a rectifier feeds DC into the stator. This creates a stationary (non-rotating) magnetic field. As the rotor continues spinning through this stationary flux, heavy currents are induced in the rotor bars. By Lenz's Law, this creates a force opposing the motion, decelerating the motor smoothly. ",
    "cat": "DC",
    "id": "T03M_344"
  },
  {
    "q": "A critical 3-phase cooling water pump motor suffers a 'Single Phasing' fault while running. What happens?",
    "a": "It continues to run on two phases, but draws approx 200-250% current in the remaining phases, leading to rapid, severe overheating and insulation failure",
    "opts": [
      "It instantly stops and refuses to turn, acting as a dynamic brake",
      "It reverses direction immediately due to the loss of the rotating magnetic field",
      "It continues to run on two phases, but draws approx 200-250% current in the remaining phases, leading to rapid, severe overheating and insulation failure",
      "It safely reduces its torque and speed by 33%, allowing operations to continue until maintenance can be scheduled"
    ],
    "exp": "If one phase is lost (fuse blown, loose wire) while running, the motor won't stop immediately. It will try to drive the load using only the single-phase pulsating field. The current in the remaining two healthy phases will skyrocket to roughly double normal full-load current, burning out the windings rapidly if the overload relay doesn't trip. ",
    "cat": "PR",
    "id": "T03M_345"
  },
  {
    "q": "What is the specific advantage of using PTC Thermistors embedded in a motor's stator windings instead of relying purely on a bimetallic Overload Relay (OLR)?",
    "a": "Thermistors measure actual physical winding temperature, protecting against overheating caused by blocked ventilation or high ambient heat, which an OLR cannot detect",
    "opts": [
      "Thermistors automatically reset the motor controller if a single-phasing event occurs",
      "Thermistors measure actual physical winding temperature, protecting against overheating caused by blocked ventilation or high ambient heat, which an OLR cannot detect",
      "Thermistors limit the starting current inrush directly by increasing their resistance",
      "Thermistors act faster to clear dead short circuits than HRC fuses"
    ],
    "exp": "An OLR only measures current. If a motor's cooling fan breaks or its air filter is totally blocked, it will overheat and burn out even while drawing normal, perfectly safe current. The OLR will never trip. Embedded thermistors sense the actual physical heat of the copper, tripping the motor if it exceeds insulation limits (e.g., 155\u00b0C for Class F). ",
    "cat": "PR",
    "id": "T03M_346"
  },
  {
    "q": "Due to a severe generator fault, the main 440V busbar drops to 280V. What is the immediate physical effect on a running induction motor?",
    "a": "Motor torque drops drastically to ~40% (since torque \u221d V\u00b2), potentially causing the motor to stall and draw massive current to compensate",
    "opts": [
      "The motor automatically acts as an induction generator to support the busbar voltage",
      "Motor torque drops drastically to ~40% (since torque \u221d V\u00b2), potentially causing the motor to stall and draw massive current to compensate",
      "Motor torque remains identical, but the speed drops proportionally by 36%",
      "The motor will draw significantly less current to protect its windings from the low voltage"
    ],
    "exp": "Induction motor torque is proportional to the square of the applied voltage. (280/440)\u00b2 = 0.404. The motor produces only ~40% of its normal torque. It will likely stall under load. A stalled motor looks like a locked rotor to the supply, drawing 6-8x normal current and burning out rapidly. ",
    "cat": "PR",
    "id": "T03M_347"
  },
  {
    "q": "Where and why are 'Self-Synchronous' (Selsyn/Synchro) motors primarily used on a ship?",
    "a": "Used for remote position indication (e.g., Rudder Angle Indicators, Engine Telegraphs) because the receiver rotor electrically locks to the exact angular position of the transmitter rotor without mechanical linkage",
    "opts": [
      "Used for remote position indication (e.g., Rudder Angle Indicators, Engine Telegraphs) because the receiver rotor electrically locks to the exact angular position of the transmitter rotor without mechanical linkage",
      "Used as dynamic braking resistors for large deck cranes",
      "Used exclusively to drive the emergency fire pumps because they can self-start without a starter panel",
      "Used as the main propulsion motors on diesel-electric vessels because they offer perfect 100% efficiency without slip"
    ],
    "exp": "A Selsyn system acts like an invisible electrical shaft. If you turn the transmitter rotor on the bridge telegraph 15 degrees, the error voltages force the receiver rotor in the engine room to instantly turn exactly 15 degrees to match. It is used purely for highly accurate position signalling. ",
    "cat": "SYN",
    "id": "T03M_348"
  },
  {
    "q": "What is the primary function of the 'Damper Winding' (Amortisseur winding) built into the rotor pole faces of a Synchronous Motor?",
    "a": "It acts like a squirrel cage to allow the motor to self-start asynchronously, and dampens oscillations (hunting) during load changes",
    "opts": [
      "It prevents the motor from generating harmful 5th and 7th harmonics into the ship's busbar",
      "It steps down the 440V supply to a safe DC voltage for the main field",
      "It forces the motor to immediately trip if the power factor becomes too leading",
      "It acts like a squirrel cage to allow the motor to self-start asynchronously, and dampens oscillations (hunting) during load changes"
    ],
    "exp": "A pure synchronous motor cannot start itself from a dead stop because the massive inertia of the rotor cannot instantly lock into a 50Hz spinning magnetic field. The short-circuited damper bars allow it to start just like a standard induction motor. Once it accelerates to near synchronous speed, DC is applied to the main field, and it snaps into synchronism. ",
    "cat": "SYN",
    "id": "T03M_349"
  },
  {
    "q": "When a surveyor asks you how to read the ISO bearing number '6205-2RS', what does it mean?",
    "a": "Deep groove ball bearing (6), Light series (2), 25mm bore diameter (05x5), with Double Rubber Seals (2RS)",
    "opts": [
      "Spherical roller bearing (6), Heavy series (20), 50mm bore, with Two Retaining Springs (2RS)",
      "Deep groove ball bearing (6), Light series (2), 25mm bore diameter (05x5), with Double Rubber Seals (2RS)",
      "Angular contact bearing (62), 5 inch diameter, with Two Radial Shields (2RS)",
      "Cylindrical roller (6), 205mm outer diameter, Rating Standard 2"
    ],
    "exp": "Standard bearing nomenclature: First digit indicates type (6 = Deep groove ball). Next digit is series/toughness (2 = light). The last two digits are the bore code\u2014multiply by 5 to get mm (05 * 5 = 25mm bore). The suffix '2RS' means Two Rubber Seals, keeping grease in and water out. ",
    "cat": "MEC",
    "id": "T03M_350"
  },
  {
    "q": "How is the correct quantity of grease (in grams) calculated for a motor bearing if the manufacturer's manual is unavailable?",
    "a": "G = 0.005 x D x B, where D is the bearing outer diameter (mm) and B is the bearing width (mm)",
    "opts": [
      "G = 0.05 x D x B, where D is the shaft diameter (mm) and B is the bearing width (mm)",
      "G = 0.005 x D x B, where D is the bearing outer diameter (mm) and B is the bearing width (mm)",
      "Pump continuously until clean grease exits the relief plug, regardless of quantity",
      "It is always a fixed 50 grams for motors under 10 kW, and 100 grams for larger motors"
    ],
    "exp": "The standard engineering formula to calculate grease replenishment quantity is G (grams) = 0.005 x D (Outer Diameter in mm) x B (Width in mm). Over-greasing must be avoided as the excess churns, overheats, damages seals, and can contaminate the stator windings.",
    "cat": "MEC",
    "id": "T03M_351"
  },
  {
    "q": "When performing a precision motor coupling alignment using a Dial Test Indicator (DTI), what is the typical acceptable tolerance for parallel offset?",
    "a": "Less than 0.05 mm",
    "opts": [
      "Zero tolerance (0.00 mm) is strictly required",
      "Less than 0.50 mm",
      "Less than 1.00 mm",
      "Less than 0.05 mm"
    ],
    "exp": "For most standard marine auxiliary motors, the alignment tolerance is typically very tight: parallel offset should be < 0.05 mm, and angular misalignment should be < 0.05 mm per 100 mm of coupling diameter. Alignment should always be rechecked after 24 hours of running due to thermal expansion and baseplate settling.",
    "cat": "MEC",
    "id": "T03M_352"
  },
  {
    "q": "If you are ordering a replacement motor and the nameplate specifies 'IEC Frame 132', what critical physical dimension does this number dictate?",
    "a": "The shaft centreline is exactly 132 mm above the mounting base/feet",
    "opts": [
      "The motor produces a maximum torque of 132 Newton-meters",
      "The motor has a maximum outer casing diameter of 132 mm",
      "The distance between the front and rear mounting bolts is 132 mm",
      "The shaft centreline is exactly 132 mm above the mounting base/feet"
    ],
    "exp": "In the IEC standard, the frame number primarily designates the shaft centreline height in millimeters (e.g., Frame 132 = 132mm from base to center of shaft). Matching the frame number ensures the new motor will perfectly align with the driven machinery without massive shimming or modification.",
    "cat": "MEC",
    "id": "T03M_353"
  },
  {
    "q": "Why does a standard AC squirrel cage induction motor ALWAYS operate at a lagging power factor?",
    "a": "Because it requires a continuous inductive magnetizing current from the supply to establish and maintain the Rotating Magnetic Field (RMF) across the air gap",
    "opts": [
      "Because it requires a continuous inductive magnetizing current from the supply to establish and maintain the Rotating Magnetic Field (RMF) across the air gap",
      "Because the rotor resistance is naturally higher than the stator resistance",
      "Because the mechanical friction of the bearings creates a delay between voltage and current",
      "Because the squirrel cage bars act as tiny capacitors, causing the current to lag the voltage"
    ],
    "exp": "An induction motor acts as an inductive load because it needs a large magnetizing current (which is purely reactive, 90 degrees out of phase) to bridge the air gap and create the magnetic flux. This reactive power requirement forces the overall power factor to lag.",
    "cat": "IM",
    "id": "T03M_354"
  },
  {
    "q": "Why is the air gap between the stator and rotor in an induction motor kept as small as mechanically possible (often less than 1mm in small motors)?",
    "a": "To minimize the magnetic reluctance of the circuit, which reduces the required magnetizing current and significantly improves the motor's power factor",
    "opts": [
      "To allow the motor to act as a synchronous condenser during low load conditions",
      "To minimize the magnetic reluctance of the circuit, which reduces the required magnetizing current and significantly improves the motor's power factor",
      "To prevent cooling air from bypassing the rotor cooling fins",
      "To increase the resistance of the rotor, thereby increasing starting torque"
    ],
    "exp": "Air is a poor conductor of magnetic flux (high reluctance). A large air gap would require a massive amount of reactive magnetizing current from the stator to push the flux across the gap, which would drastically ruin the power factor and lower efficiency.",
    "cat": "IM",
    "id": "T03M_355"
  },
  {
    "q": "How does an Auto-Transformer starter reduce the starting current of a large marine induction motor?",
    "a": "It uses internal transformer tappings (typically 65% or 80%) to supply a reduced voltage to the motor during initial acceleration, before bypassing to full line voltage",
    "opts": [
      "It automatically physically changes the motor winding connections from Star to Delta",
      "It adds physical resistance into the rotor circuit via slip rings to restrict current flow",
      "It uses internal transformer tappings (typically 65% or 80%) to supply a reduced voltage to the motor during initial acceleration, before bypassing to full line voltage",
      "It electronically chops the AC waveform using thyristors to limit RMS voltage"
    ],
    "exp": "An auto-transformer starter uses a tapped autotransformer to reduce the voltage applied to the stator. Common taps are 65% or 80%. This proportionally reduces the starting current while still providing better torque than a Star-Delta starter, making it ideal for medium-heavy loads.",
    "cat": "SC",
    "id": "T03M_356"
  },
  {
    "q": "If an auto-transformer starter is set to the 80% voltage tap, what is the resulting starting torque compared to a Direct-On-Line (DOL) start?",
    "a": "It is reduced to 64% of the DOL starting torque (because torque is proportional to voltage squared)",
    "opts": [
      "It remains at 100% of the DOL starting torque",
      "It is reduced to 64% of the DOL starting torque (because torque is proportional to voltage squared)",
      "It is reduced to 80% of the DOL starting torque",
      "It is reduced to 33% of the DOL starting torque, identical to a Star-Delta starter"
    ],
    "exp": "In an induction motor, torque is proportional to the square of the applied voltage (T \u221d V\u00b2). If voltage is reduced to 80% (0.8), the starting torque drops to 0.8\u00b2 = 0.64, or 64% of full DOL torque.",
    "cat": "SC",
    "id": "T03M_357"
  },
  {
    "q": "A major disadvantage of retrofitting a Variable Frequency Drive (VFD) is the generation of harmonic distortion on the ship's electrical busbar. Which harmonic frequencies are typically the most problematic from a standard 6-pulse VFD?",
    "a": "The 5th and 7th harmonics",
    "opts": [
      "The 2nd and 3rd harmonics",
      "The 10th and 12th harmonics",
      "The 50th and 60th harmonics",
      "The 5th and 7th harmonics"
    ],
    "exp": "A standard 6-pulse rectifier in a VFD chops the AC wave, generating significant 5th (250Hz/300Hz) and 7th (350Hz/420Hz) harmonic currents. These harmonics reflect back onto the main busbar, overheating generators and distorting the power supply for sensitive equipment, requiring the installation of harmonic filters.",
    "cat": "VFD",
    "id": "T03M_358"
  },
  {
    "q": "How does retrofitting a Variable Frequency Drive (VFD) on a Main Cooling Sea Water (MCSW) pump directly assist a vessel in improving its CII (Carbon Intensity Indicator) rating under MARPOL Annex VI?",
    "a": "By utilizing the Affinity Laws, a 20% reduction in motor speed yields a massive ~50% reduction in power drawn, significantly cutting generator HFO consumption and CO2 emissions",
    "opts": [
      "The VFD increases the power factor to 1.0, which legally exempts the ship from the CII rating system",
      "The VFD automatically converts the pump to run on zero-emission shore power",
      "By utilizing the Affinity Laws, a 20% reduction in motor speed yields a massive ~50% reduction in power drawn, significantly cutting generator HFO consumption and CO2 emissions",
      "The VFD actively scrubs exhaust gases in the engine room by reversing the pump flow"
    ],
    "exp": "SEEMP Part III and CII compliance rely on reducing the ship's total fuel burn. Centrifugal pumps obey the Affinity Laws, where Power is proportional to the cube of the speed (P \u221d N\u00b3). Dropping a pump to 80% speed means it uses only 0.8\u00b3 = 0.512 (51%) of its normal power. This massive reduction in kW base load directly cuts diesel generator fuel consumption and CO2 emissions.",
    "cat": "VFD",
    "id": "T03M_359"
  },
  {
    "q": "How does Lenz's Law apply to the fundamental operation of an AC Induction Motor?",
    "a": "It dictates that the induced rotor currents create a magnetic field opposing the relative motion between the rotor and the stator's rotating magnetic field, forcing the rotor to turn",
    "opts": [
      "It dictates that the induced rotor currents create a magnetic field opposing the relative motion between the rotor and the stator's rotating magnetic field, forcing the rotor to turn",
      "It ensures that the back-EMF of the motor is exactly equal and opposite to the applied supply voltage at all times",
      "It describes how the stator automatically switches from Star to Delta to oppose the incoming transient currents",
      "It explains why the motor draws high starting current when the slip is at exactly zero percent"
    ],
    "exp": "According to Lenz's Law, an induced current will flow in a direction that opposes the change that caused it. In an induction motor, the 'change' is the relative motion of the stator's Rotating Magnetic Field sweeping past the rotor bars. The rotor turns in the same direction as the RMF in an attempt to catch up and eliminate that relative motion.",
    "cat": "IM",
    "id": "T03M_360"
  },
  {
    "q": "Based on standard maritime Ingress Protection (IP) ratings, what are the minimum requirements for a motor installed on the exposed cargo deck versus one installed in the continuously submerged engine room bilge?",
    "a": "IP55 (dust tight and protected against water jets) for the deck; IP68 (protected against continuous submersion) for the bilge",
    "opts": [
      "IP22 for the deck; IP44 for the bilge",
      "IP44 (splash proof) for the deck; IP56 (heavy seas) for the bilge",
      "IP68 for both locations to ensure absolute SOLAS compliance",
      "IP55 (dust tight and protected against water jets) for the deck; IP68 (protected against continuous submersion) for the bilge"
    ],
    "exp": "Location dictates environmental stress. An engine room motor typically requires IP44. Exposed cargo decks require IP55 to handle heavy weather and hose wash-downs (or IP56 for powerful jets). Bilge pumps or motors that may sit underwater require IP68, which guarantees protection during continuous submersion.",
    "cat": "MEC",
    "id": "T03M_361"
  },
  {
    "q": "When creating a procurement checklist to order a replacement marine induction motor, which combination of specifications is absolutely critical to ensure physical and electrical compatibility?",
    "a": "Power (kW), Voltage, Frequency, IEC Frame Size, Insulation Class, IP Rating, and Mounting Arrangement (e.g., B3 Foot mount)",
    "opts": [
      "Power (kW), Weight (kg), Paint Color, Bearing Manufacturer, and Governor Droop setting",
      "Power (kW), Voltage, Frequency, IEC Frame Size, Insulation Class, IP Rating, and Mounting Arrangement (e.g., B3 Foot mount)",
      "Voltage, Slip percentage, Armature Resistance, and Starting Torque limit",
      "Synchronous Speed, Number of Rotor Bars, VFD harmonic limits, and Magnetic Reluctance"
    ],
    "exp": "To ensure a new motor fits exactly where the old one was and operates safely, you must provide electrical limits (kW, V, Hz), environmental protection (IP rating, Insulation Class like Class F), and precise physical dimensions (IEC Frame number for shaft height, and Mounting type like B3 foot or B5 flange).",
    "cat": "MEC",
    "id": "T03M_362"
  },
  {
    "q": "What causes 'Pole Slipping' in a synchronous motor, and what is the immediate consequence?",
    "a": "It occurs when the mechanical load exceeds the maximum synchronizing torque, causing the rotor to break magnetic lock with the stator field and the motor to stall",
    "opts": [
      "It occurs when the mechanical load exceeds the maximum synchronizing torque, causing the rotor to break magnetic lock with the stator field and the motor to stall",
      "It occurs when the Variable Frequency Drive supplies too many harmonics, causing the bearings to slip in their housings",
      "It occurs when the DC excitation is too high, forcing the rotor to spin faster than the synchronous speed and act as a generator",
      "It is a normal starting process where the damper windings slowly align the rotor poles to the stator poles"
    ],
    "exp": "A synchronous motor runs perfectly locked to the rotating magnetic field (zero slip). If a massive mechanical overload is applied that exceeds the magnetic pulling force (the pull-out torque), the magnetic lock breaks. The rotor slips behind the stator poles violently, and the motor stalls out.",
    "cat": "SYN",
    "id": "T03M_363"
  },
  {
    "q": "A synchronous motor can be used as a 'Synchronous Condenser' to correct a ship's power factor. How does adjusting the DC field excitation change its power factor characteristics (the V-curve principle)?",
    "a": "Under-exciting the field causes a lagging power factor (absorbing reactive power), while over-exciting the field causes a leading power factor (supplying reactive power like a capacitor)",
    "opts": [
      "Over-exciting the field increases the motor's physical RPM, causing it to draw less active power from the bus",
      "Under-exciting the field causes a lagging power factor (absorbing reactive power), while over-exciting the field causes a leading power factor (supplying reactive power like a capacitor)",
      "Under-exciting the field causes a leading power factor (acting as a capacitor), while over-exciting the field causes a lagging power factor",
      "Excitation strictly controls mechanical torque; it has no effect on the electrical power factor"
    ],
    "exp": "Synchronous motors have a unique property plotted on a 'V-curve'. By increasing the DC field excitation above normal (over-excited), the motor begins to supply leading reactive power (kVAR) to the busbar. This acts exactly like adding a physical capacitor bank, improving the ship's overall lagging power factor.",
    "cat": "SYN",
    "id": "T03M_364"
  },
  {
    "q": "What is the primary operational difference between a DC Series motor and a DC Shunt motor regarding load handling?",
    "a": "Series motors provide massive starting torque but can dangerously overspeed at no load; Shunt motors provide steady, constant speed regardless of load variations",
    "opts": [
      "Series motors maintain a constant speed at all times; Shunt motors are used purely for dynamic braking",
      "Series motors provide massive starting torque but can dangerously overspeed at no load; Shunt motors provide steady, constant speed regardless of load variations",
      "Series motors are virtually maintenance-free; Shunt motors require constant brush replacement due to armature reaction",
      "Series motors can operate on both AC and DC power; Shunt motors run strictly on batteries"
    ],
    "exp": "In a Series motor, the field winding is in series with the armature, meaning heavy starting current creates a massive magnetic field and huge starting torque (great for cranes/traction). However, if unloaded, the speed will run away to destructive levels. A Shunt motor has its field in parallel, providing a steady magnetic flux and resulting in a relatively constant speed regardless of load.",
    "cat": "SPD",
    "id": "T03M_365"
  },
  {
    "q": "In a traditional Ward-Leonard system used for a marine deck crane, how is the speed of the final DC hoist motor smoothly controlled?",
    "a": "By varying the small DC field excitation current of the intermediate generator, which proportionally changes the high-power armature voltage sent to the hoist motor",
    "opts": [
      "By mechanically adjusting the slip rings on the generator shaft to alter the output frequency",
      "By adding physical resistance banks directly into the hoist motor's armature circuit to burn off excess speed",
      "By using an AC soft starter to limit the voltage going to the primary induction motor",
      "By varying the small DC field excitation current of the intermediate generator, which proportionally changes the high-power armature voltage sent to the hoist motor"
    ],
    "exp": "The Ward-Leonard system uses a constant-speed AC motor to spin a DC generator. Instead of trying to switch or resist the hundreds of amps flowing to the final hoist motor, the operator simply uses a small rheostat to adjust the tiny field current of the generator. This changes the generator's voltage output from 0 to max, giving incredibly smooth, high-power speed control to the hoist.",
    "cat": "SPD",
    "id": "T03M_366"
  },
  {
    "q": "What is the primary advantage of a 'Double Squirrel Cage' induction motor, and where is it typically used on a ship?",
    "a": "It provides very high starting torque with reduced inrush current by utilizing a high-resistance outer cage for starting and a low-resistance inner cage for running; used for windlasses, mooring winches, and bow thrusters",
    "opts": [
      "It operates at two distinct speeds by mechanically shifting the rotor between two separate stator housings",
      "It provides redundant operation; if one cage fails, the second cage automatically takes over to prevent a blackout",
      "It provides very high starting torque with reduced inrush current by utilizing a high-resistance outer cage for starting and a low-resistance inner cage for running; used for windlasses, mooring winches, and bow thrusters",
      "It acts as both a motor and a generator simultaneously, making it ideal for regenerative crane hoists"
    ],
    "exp": "Due to the 'skin effect' of alternating current, high-frequency rotor currents at starting flow mostly in the outer cage (high resistance = high starting torque). As the motor accelerates and rotor frequency drops, current shifts to the inner cage (low resistance = high running efficiency). This makes it perfect for heavy deck machinery.",
    "cat": "IM",
    "id": "T03M_367"
  },
  {
    "q": "A junior engineer reports that a newly installed motor starts but refuses to accelerate past roughly 1/7th of its rated synchronous speed, accompanied by excessive noise. What is this phenomenon called?",
    "a": "Crawling",
    "opts": [
      "Slip-locking",
      "Hunting",
      "Single-Phasing",
      "Crawling"
    ],
    "exp": "Crawling occurs when the 7th harmonic component of the air-gap magnetic flux creates a 'reluctance torque dip'. The motor locks into a stable but useless operating point at exactly 1/7th of its synchronous speed (e.g., ~214 RPM for a 1500 RPM motor).",
    "cat": "IM",
    "id": "T03M_368"
  },
  {
    "q": "How do motor manufacturers prevent 'Crawling' and reduce magnetic noise in squirrel cage induction motors?",
    "a": "By 'skewing' the rotor slots so they are slightly angled rather than perfectly parallel to the shaft",
    "opts": [
      "By 'skewing' the rotor slots so they are slightly angled rather than perfectly parallel to the shaft",
      "By installing a mechanical dashpot on the rotor shaft to dampen harmonic vibrations",
      "By forcing the VFD to skip the 7th harmonic frequency block",
      "By installing double-shielded bearings to prevent magnetic flux leakage"
    ],
    "exp": "Skewing the rotor slots (making them slightly twisted relative to the stator slots) drastically reduces the effect of space harmonics like the 5th and 7th. This prevents crawling, eliminates dead spots during starting, and reduces magnetic humming.",
    "cat": "MEC",
    "id": "T03M_369"
  },
  {
    "q": "What are 'Eddy Currents' in an AC motor, and how is their negative effect (heat loss) minimized?",
    "a": "They are useless circulating currents induced in the iron core by changing magnetic flux; they are minimized by building the core out of thin, insulated, laminated silicon steel sheets",
    "opts": [
      "They are stray currents on the surface of the slip rings; minimized by using softer carbon brushes",
      "They are transient currents caused by Star-Delta switching; minimized by the 50ms dead time timer",
      "They are useless circulating currents induced in the iron core by changing magnetic flux; they are minimized by building the core out of thin, insulated, laminated silicon steel sheets",
      "They are reactive currents bouncing between the motor and generator; minimized by installing capacitor banks"
    ],
    "exp": "By Faraday's law, changing magnetic flux induces current in ANY conductive material, including the solid iron core of the motor. These 'eddy currents' just swirl around, creating massive I\u00b2R heat losses. Laminated cores break the electrical path, forcing eddy currents to be tiny and harmless.",
    "cat": "IM",
    "id": "T03M_370"
  },
  {
    "q": "You receive a 440V motor back from a shore workshop after a full rewind. Aside from checking the Insulation Resistance (Megger), what critical electrical check must be done on the windings before running it?",
    "a": "Measure the DC resistance of all three phases using a low-resistance bridge meter; they must be equal within 2%",
    "opts": [
      "Perform a dead-short test across the main terminals to verify the HRC fuses will blow",
      "Measure the capacitance of the windings to ensure the VFD harmonic filters will function correctly",
      "Measure the DC resistance of all three phases using a low-resistance bridge meter; they must be equal within 2%",
      "Apply 110V DC to the stator to verify the magnetic polarity is exactly North-South-North"
    ],
    "exp": "A resistance balance test is mandatory after a rewind. If the shop used slightly different wire lengths, missed a turn, or made a bad internal solder joint, one phase will have higher resistance. Unequal resistance causes unequal currents, rapid localized heating, and premature failure.",
    "cat": "MEC",
    "id": "T03M_371"
  },
  {
    "q": "What is the proper type of fuse to use in the Main Switchboard feeder panel for a 440V motor circuit?",
    "a": "HRC (High Rupturing Capacity) fuse, rated at 1.5 to 2.5 times the motor's Full Load Current (FLC)",
    "opts": [
      "A thermal bimetallic fuse, which resets automatically after cooling down",
      "A rewirable copper wire fuse, rated at 5 times the FLC to prevent blowing during start",
      "HRC (High Rupturing Capacity) fuse, rated at 1.5 to 2.5 times the motor's Full Load Current (FLC)",
      "A fast-acting glass cartridge fuse, rated exactly at 100% of the motor's FLC"
    ],
    "exp": "HRC fuses safely interrupt massive short-circuit currents (up to 100kA) without exploding, because the arc is quenched by silica sand inside the ceramic body. They are rated at 1.5 to 2.5x the motor FLC to allow the massive DOL starting surge (6-8x FLC) to pass momentarily without blowing, while still providing rapid short-circuit protection.",
    "cat": "PR",
    "id": "T03M_372"
  },
  {
    "q": "If a stopped 3-phase induction motor suffers a 'Single Phasing' fault (e.g., one blown HRC fuse) and an operator presses the START button, what will happen?",
    "a": "The motor will completely fail to start, but will sit there humming loudly and drawing massive locked-rotor current until it trips or burns out",
    "opts": [
      "The motor's internal thermistors will instantly act as the third phase to balance the load",
      "The motor will start in the reverse direction",
      "The motor will start normally but only run at 33% of its rated speed",
      "The motor will completely fail to start, but will sit there humming loudly and drawing massive locked-rotor current until it trips or burns out"
    ],
    "exp": "A 3-phase supply is required to create a Rotating Magnetic Field. If one phase is missing at standstill, the stator only produces a pulsating (push-pull) magnetic field, not a rotating one. The starting torque is exactly zero. The motor acts like a stalled transformer, rapidly burning up.",
    "cat": "PR",
    "id": "T03M_373"
  },
  {
    "q": "What is 'Back EMF' in an induction or DC motor?",
    "a": "It is the voltage generated internally by the spinning motor that directly opposes the incoming supply voltage, limiting the current drawn by the motor as it speeds up",
    "opts": [
      "It is the residual voltage left in the capacitors after the motor is shut down",
      "It is the dangerous high-voltage spike created when the motor contactor opens, which destroys sensitive VFD electronics",
      "It is the voltage that bleeds through the air gap to magnetize the motor casing",
      "It is the voltage generated internally by the spinning motor that directly opposes the incoming supply voltage, limiting the current drawn by the motor as it speeds up"
    ],
    "exp": "As the rotor spins through the magnetic field, it acts like a generator, producing an Electromotive Force (EMF). By Lenz's law, this 'Back EMF' opposes the supply voltage. At start (0 RPM), Back EMF is 0, so massive current flows. At full speed, Back EMF is nearly equal to supply voltage, restricting the current to normal running levels.",
    "cat": "IM",
    "id": "T03M_374"
  },
  {
    "q": "Most standard marine auxiliary motors are manufactured with 'Class F' insulation, which is rated to survive 155\u00b0C. However, they are typically operated and alarmed as if they were 'Class B' (130\u00b0C). Why?",
    "a": "To provide a massive thermal safety margin, dramatically increasing the operational lifespan and reliability of the motor in the harsh marine environment",
    "opts": [
      "To provide a massive thermal safety margin, dramatically increasing the operational lifespan and reliability of the motor in the harsh marine environment",
      "Because the copper windings lose their magnetic properties completely at 140\u00b0C",
      "Because running a Class F motor at 155\u00b0C violates MARPOL environmental heat emission standards",
      "Because the PT100 sensors melt if exposed to temperatures above 135\u00b0C"
    ],
    "exp": "This is a standard marine engineering practice. Upgrading the insulation to Class F (155\u00b0C) but designing the cooling and alarms to keep the motor at Class B limits (130\u00b0C) means the insulation is never stressed to its limit. This 25\u00b0C buffer easily doubles or triples the life of the motor.",
    "cat": "MEC",
    "id": "T03M_375"
  },
  {
    "q": "When overhauling an electric motor, the ETO notices that the thermal Overload Relay (OLR) is a standard 'single-element' type. Why is this inadequate for a critical marine pump?",
    "a": "A single-element OLR cannot reliably detect a single-phasing condition; a modern '3-element' phase-sensitive OLR is required to protect against phase loss",
    "opts": [
      "A single-element OLR cannot monitor voltage drops; it only monitors frequency",
      "A single-element OLR cannot be reset manually; it requires a complete replacement every time it trips",
      "A single-element OLR is physically too small to handle the 440V arc flash",
      "A single-element OLR cannot reliably detect a single-phasing condition; a modern '3-element' phase-sensitive OLR is required to protect against phase loss"
    ],
    "exp": "If one phase is lost, current in the remaining two phases spikes to ~250%. If the single thermal element happens to be wired on the phase that went dead (0 amps), the relay will never heat up and trip, and the motor will burn out on the other two phases. A 3-element OLR monitors all three lines simultaneously.",
    "cat": "PR",
    "id": "T03M_376"
  },
  {
    "q": "Why is a Star-Delta starter generally unsuitable for heavy loads like crane hoists or pumps starting against an open discharge valve?",
    "a": "Because the motor starts in Star, producing only 1/3 of its normal starting torque, which may be insufficient to accelerate a heavy load",
    "opts": [
      "Because heavy loads cause the Star contactor to weld shut due to excessive back-EMF",
      "Because the motor starts in Star, producing only 1/3 of its normal starting torque, which may be insufficient to accelerate a heavy load",
      "Because the transition from Star to Delta requires the load to be completely stationary",
      "Because it generates severe harmonic distortion that damages the load's mechanical coupling"
    ],
    "exp": "In a star-delta starter, the starting torque is reduced to exactly 1/3 of the Direct-On-Line (DOL) torque. If the load requires high starting torque (like a loaded crane hoist), the motor will simply stall in the star phase and fail to accelerate. Slip ring motors or VFDs are preferred for these applications.",
    "cat": "SD",
    "id": "T03M_377"
  },
  {
    "q": "Despite its large size and high maintenance cost, what are the primary advantages of the traditional Ward-Leonard system used on older marine deck cranes?",
    "a": "It provides excellent, smooth, and precise speed control over a wide range (including reversing), and inherently allows for efficient regenerative braking",
    "opts": [
      "It uses a single, solid-state electronic drive to control multiple AC induction motors simultaneously",
      "It completely eliminates the need for carbon brushes and commutators, making it ideal for hazardous areas",
      "It provides excellent, smooth, and precise speed control over a wide range (including reversing), and inherently allows for efficient regenerative braking",
      "It operates at a 1.0 power factor and draws exactly zero starting current"
    ],
    "exp": "While the Ward-Leonard system is bulky (requiring three separate machines), by simply varying the small field current of the intermediate DC generator, it offers incredibly smooth, fully reversible, 0-to-max speed control. It also naturally supports regenerative braking, which is highly advantageous for lowering heavy crane loads smoothly.",
    "cat": "WL",
    "id": "T03M_378"
  }
]);
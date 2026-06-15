window.loadQuizzes("T03_Motors", [
  {
    "q": "What is the primary physical law that governs the working of an induction motor?",
    "a": "Faraday's law of electromagnetic induction",
    "opts": [
      "Newton's law of motion",
      "Faraday's law of electromagnetic induction",
      "Ohm's law of resistance",
      "Boyle's law of thermodynamics"
    ],
    "exp": "The induction motor operates based on Faraday's law of electromagnetic induction and the interaction between magnetic fields.",
    "cat": "PRIN",
    "id": "T03A_001"
  },
  {
    "q": "What material is the stator core of an induction motor made from to minimise losses?",
    "a": "Laminated silicon steel",
    "opts": [
      "Solid cast iron",
      "Laminated silicon steel",
      "Extruded aluminium",
      "Pure copper blocks"
    ],
    "exp": "The stator core is made of laminated silicon steel specifically to minimise eddy current losses.",
    "cat": "PRIN",
    "id": "T03A_002"
  },
  {
    "q": "How are the three-phase windings distributed in the stator slots?",
    "a": "120° apart spatially",
    "opts": [
      "90° apart spatially",
      "180° apart spatially",
      "120° apart spatially",
      "360° apart spatially"
    ],
    "exp": "The three-phase winding is distributed in the stator slots 120° apart spatially to create a balanced rotating magnetic field.",
    "cat": "PRIN",
    "id": "T03A_003"
  },
  {
    "q": "What is the defining structural feature of a squirrel cage rotor?",
    "a": "Bars are short-circuited at both ends by end rings",
    "opts": [
      "It has external slip rings",
      "Bars are short-circuited at both ends by end rings",
      "It is wound with fine copper wire",
      "It uses carbon brushes for connection"
    ],
    "exp": "A squirrel cage rotor consists of aluminium or copper bars fitted into rotor slots and short-circuited at both ends by end rings.",
    "cat": "PRIN",
    "id": "T03A_004"
  },
  {
    "q": "What is the main advantage of a slip ring (wound) rotor over a squirrel cage rotor?",
    "a": "Allows control of starting torque and speed",
    "opts": [
      "Allows control of starting torque and speed",
      "It is completely maintenance-free",
      "It lacks any external electrical connections",
      "It runs continuously at synchronous speed"
    ],
    "exp": "A slip ring rotor has its ends brought out via slip rings and brushes to an external resistance, allowing control of starting torque and speed.",
    "cat": "PRIN",
    "id": "T03A_005"
  },
  {
    "q": "What creates the Rotating Magnetic Field (RMF) in the air gap?",
    "a": "Three-phase currents in the 120°-spaced stator windings",
    "opts": [
      "Direct current applied to the rotor",
      "Three-phase currents in the 120°-spaced stator windings",
      "Permanent magnets embedded in the stator",
      "Single-phase current in a primary winding"
    ],
    "exp": "Three-phase currents (120° apart in time) passing through the 120°-spaced stator windings create a Rotating Magnetic Field.",
    "cat": "PRIN",
    "id": "T03A_006"
  },
  {
    "q": "At what speed does the Rotating Magnetic Field (RMF) revolve?",
    "a": "Synchronous speed",
    "opts": [
      "Rotor speed",
      "Slip speed",
      "Synchronous speed",
      "Asynchronous speed"
    ],
    "exp": "The RMF rotates exactly at the synchronous speed, calculated as Ns = 120f/P.",
    "cat": "PRIN",
    "id": "T03A_007"
  },
  {
    "q": "What is the formula to calculate synchronous speed (Ns)?",
    "a": "Ns = 120 × f / P",
    "opts": [
      "Ns = 120 × P / f",
      "Ns = 60 × f / P",
      "Ns = 120 × f / P",
      "Ns = P × f / 120"
    ],
    "exp": "The synchronous speed in RPM is calculated by multiplying 120 by the supply frequency (f) and dividing by the number of poles (P).",
    "cat": "PRIN",
    "id": "T03A_008"
  },
  {
    "q": "How is EMF induced in the rotor conductors?",
    "a": "The RMF cuts across the stationary rotor conductors",
    "opts": [
      "By connecting the rotor directly to the 440V supply",
      "Through carbon brushes rubbing on the commutator",
      "The RMF cuts across the stationary rotor conductors",
      "By applying a DC voltage to the stator"
    ],
    "exp": "According to Faraday's law, as the RMF sweeps through the air gap, it cuts across the stationary rotor conductors, inducing an EMF.",
    "cat": "PRIN",
    "id": "T03A_009"
  },
  {
    "q": "What force acts on the rotor conductors to make the rotor turn?",
    "a": "F = BIL",
    "opts": [
      "F = ma",
      "F = BIL",
      "F = qE",
      "F = mv²/r"
    ],
    "exp": "The interaction of the induced rotor current (I) within the magnetic field (B) over the length of the conductor (L) produces a force F = BIL.",
    "cat": "PRIN",
    "id": "T03A_010"
  },
  {
    "q": "Does the rotor of an induction motor ever reach synchronous speed under normal operation?",
    "a": "It NEVER reaches synchronous speed",
    "opts": [
      "It always runs exactly at synchronous speed",
      "It NEVER reaches synchronous speed",
      "It exceeds synchronous speed on full load",
      "It reaches synchronous speed only at standstill"
    ],
    "exp": "The rotor NEVER reaches synchronous speed; if it did, there would be no relative motion, no induced EMF, and no torque.",
    "cat": "PRIN",
    "id": "T03A_011"
  },
  {
    "q": "What would happen if the rotor actually reached synchronous speed?",
    "a": "There would be no relative motion, no induced EMF, and the motor would stop",
    "opts": [
      "The motor would produce its maximum torque",
      "The rotor would lock in phase and draw minimum current",
      "There would be no relative motion, no induced EMF, and the motor would stop",
      "The stator winding would burn out instantly"
    ],
    "exp": "Without a difference in speed (slip), the RMF cannot cut the rotor bars, meaning no EMF is induced, no current flows, and no driving force exists.",
    "cat": "PRIN",
    "id": "T03A_012"
  },
  {
    "q": "What term defines the gap between the rotor speed and the RMF speed?",
    "a": "Slip",
    "opts": [
      "Slip",
      "Cogging",
      "Phase angle",
      "Armature reaction"
    ],
    "exp": "The difference between the synchronous speed of the RMF and the actual rotor speed is called slip.",
    "cat": "PRIN",
    "id": "T03A_013"
  },
  {
    "q": "Why is the motor considered 'self-regulating' regarding load changes?",
    "a": "More load causes more slip, increasing rotor current and torque",
    "opts": [
      "It automatically changes the number of poles to match the load",
      "More load causes more slip, increasing rotor current and torque",
      "It adjusts the supply voltage via an internal AVR",
      "It reduces the supply frequency to maintain speed"
    ],
    "exp": "When mechanical load is added, the rotor slows down (slip increases), which cuts more flux, inducing more current and automatically producing more torque.",
    "cat": "PRIN",
    "id": "T03A_014"
  },
  {
    "q": "Why is it called an 'Induction' motor?",
    "a": "Rotor current is INDUCED by the rotating magnetic field, exactly like a transformer",
    "opts": [
      "It relies on permanent magnets inducing a field in the stator",
      "Rotor current is INDUCED by the rotating magnetic field, exactly like a transformer",
      "It induces a voltage back into the main switchboard",
      "It requires a DC induction coil to start rotating"
    ],
    "exp": "The rotor is energised entirely by electromagnetic induction from the stator's RMF, functioning identically to a transformer's secondary winding.",
    "cat": "PRIN",
    "id": "T03A_015"
  },
  {
    "q": "In the synchronous speed formula Ns = 120 × f / P, what does 'f' represent?",
    "a": "Frequency in Hz",
    "opts": [
      "Force in Newtons",
      "Frequency in Hz",
      "Flux in Webers",
      "Factor of power"
    ],
    "exp": "'f' stands for the supply frequency in Hertz (Hz).",
    "cat": "SYNC",
    "id": "T03A_016"
  },
  {
    "q": "What is the synchronous speed of a 2-pole motor at 50 Hz?",
    "a": "3000 RPM",
    "opts": [
      "3000 RPM",
      "1500 RPM",
      "1000 RPM",
      "750 RPM"
    ],
    "exp": "Using Ns = 120 × 50 / 2 = 3000 RPM.",
    "cat": "SYNC",
    "id": "T03A_017"
  },
  {
    "q": "What is the synchronous speed of a 4-pole motor at 50 Hz?",
    "a": "1500 RPM",
    "opts": [
      "3000 RPM",
      "1500 RPM",
      "1000 RPM",
      "750 RPM"
    ],
    "exp": "Using Ns = 120 × 50 / 4 = 1500 RPM.",
    "cat": "SYNC",
    "id": "T03A_018"
  },
  {
    "q": "What is the synchronous speed of a 6-pole motor at 50 Hz?",
    "a": "1000 RPM",
    "opts": [
      "1500 RPM",
      "1200 RPM",
      "1000 RPM",
      "750 RPM"
    ],
    "exp": "Using Ns = 120 × 50 / 6 = 1000 RPM.",
    "cat": "SYNC",
    "id": "T03A_019"
  },
  {
    "q": "What is the synchronous speed of an 8-pole motor at 50 Hz?",
    "a": "750 RPM",
    "opts": [
      "1500 RPM",
      "1000 RPM",
      "750 RPM",
      "500 RPM"
    ],
    "exp": "Using Ns = 120 × 50 / 8 = 750 RPM.",
    "cat": "SYNC",
    "id": "T03A_020"
  },
  {
    "q": "What is the typical actual full-load rotor speed for a 2-pole 50 Hz motor?",
    "a": "~2950 RPM",
    "opts": [
      "3000 RPM",
      "~2950 RPM",
      "~1450 RPM",
      "~2800 RPM"
    ],
    "exp": "A 2-pole motor has a synchronous speed of 3000 RPM, but slip reduces actual speed to ~2950 RPM under full load.",
    "cat": "SYNC",
    "id": "T03A_021"
  },
  {
    "q": "What is the typical actual full-load rotor speed for a 4-pole 50 Hz motor?",
    "a": "~1450 RPM",
    "opts": [
      "1500 RPM",
      "~1450 RPM",
      "~960 RPM",
      "~1400 RPM"
    ],
    "exp": "A 4-pole motor has an Ns of 1500 RPM; with roughly 3.3% slip, it runs at ~1450 RPM.",
    "cat": "SYNC",
    "id": "T03A_022"
  },
  {
    "q": "What is the typical actual full-load rotor speed for a 6-pole 50 Hz motor?",
    "a": "~960 RPM",
    "opts": [
      "1000 RPM",
      "~960 RPM",
      "~720 RPM",
      "~1450 RPM"
    ],
    "exp": "A 6-pole motor has an Ns of 1000 RPM; at full load, it runs at roughly 960 RPM.",
    "cat": "SYNC",
    "id": "T03A_023"
  },
  {
    "q": "What is the approximate full-load slip percentage for a 4-pole 50 Hz motor?",
    "a": "~3.3%",
    "opts": [
      "~1.7%",
      "~3.3%",
      "~4%",
      "~8%"
    ],
    "exp": "For a 4-pole motor dropping from 1500 to 1450 RPM, the slip is 50/1500 = 3.33%.",
    "cat": "SYNC",
    "id": "T03A_024"
  },
  {
    "q": "What is the approximate full-load slip percentage for a 6-pole 50 Hz motor?",
    "a": "~4%",
    "opts": [
      "~1.7%",
      "~3.3%",
      "~4%",
      "~10%"
    ],
    "exp": "For a 6-pole motor dropping from 1000 to 960 RPM, the slip is 40/1000 = 4%.",
    "cat": "SYNC",
    "id": "T03A_025"
  },
  {
    "q": "How do you calculate synchronous speed for a motor operating on a 60 Hz vessel if you know its 50 Hz speed?",
    "a": "Multiply the 50 Hz Ns value by 1.2",
    "opts": [
      "Multiply the 50 Hz Ns value by 1.2",
      "Divide the 50 Hz Ns value by 1.2",
      "Multiply the 50 Hz Ns value by 1.5",
      "Subtract 20% from the 50 Hz Ns value"
    ],
    "exp": "Because 60/50 = 1.2, synchronous speeds at 60 Hz are exactly 1.2 times faster than at 50 Hz.",
    "cat": "SYNC",
    "id": "T03A_026"
  },
  {
    "q": "What is the synchronous speed of a 4-pole motor on a 60 Hz vessel?",
    "a": "1800 RPM",
    "opts": [
      "1500 RPM",
      "1800 RPM",
      "1750 RPM",
      "3600 RPM"
    ],
    "exp": "Ns = 120 × 60 / 4 = 1800 RPM.",
    "cat": "SYNC",
    "id": "T03A_027"
  },
  {
    "q": "On a 60 Hz vessel, what is the approximate actual running speed of a 4-pole motor?",
    "a": "~1750 RPM",
    "opts": [
      "~1450 RPM",
      "1800 RPM",
      "~1750 RPM",
      "~2950 RPM"
    ],
    "exp": "With an Ns of 1800 RPM at 60 Hz, the typical full-load slip brings the running speed down to ~1750 RPM.",
    "cat": "SYNC",
    "id": "T03A_028"
  },
  {
    "q": "Which of these motor combinations produces a synchronous speed of 3000 RPM at 50 Hz?",
    "a": "2-pole",
    "opts": [
      "2-pole",
      "4-pole",
      "6-pole",
      "8-pole"
    ],
    "exp": "Ns = 120 × 50 / 2 = 3000 RPM.",
    "cat": "SYNC",
    "id": "T03A_029"
  },
  {
    "q": "If a surveyor asks for the actual rotor speed at full load for a 6-pole motor at 50 Hz, what is the ideal answer?",
    "a": "Actual rotor speed at full load ≈ 960–980 RPM",
    "opts": [
      "Actual rotor speed at full load ≈ 1000 RPM exactly",
      "Actual rotor speed at full load ≈ 1450 RPM",
      "Actual rotor speed at full load ≈ 960–980 RPM",
      "Actual rotor speed at full load ≈ 720 RPM"
    ],
    "exp": "The synchronous speed is 1000 RPM, but due to approximately 4% slip at full load, it operates at 960–980 RPM.",
    "cat": "SYNC",
    "id": "T03A_030"
  },
  {
    "q": "What is the formula to calculate percentage slip?",
    "a": "Slip (s) = (Ns − N) / Ns × 100%",
    "opts": [
      "Slip (s) = N / Ns × 100%",
      "Slip (s) = (N − Ns) / N × 100%",
      "Slip (s) = (Ns − N) / Ns × 100%",
      "Slip (s) = (Ns × N) / 100%"
    ],
    "exp": "Slip is the difference between synchronous speed (Ns) and actual rotor speed (N), expressed as a percentage of Ns.",
    "cat": "SLIP",
    "id": "T03A_031"
  },
  {
    "q": "What is the typical slip range for an induction motor operating at no load?",
    "a": "0.1 – 0.5%",
    "opts": [
      "0%",
      "0.1 – 0.5%",
      "3 – 8%",
      "10 – 15%"
    ],
    "exp": "At no load, the motor only needs to overcome friction and windage, so slip is very small, typically 0.1 – 0.5%.",
    "cat": "SLIP",
    "id": "T03A_032"
  },
  {
    "q": "What is the normal full-load slip range for a standard squirrel cage motor?",
    "a": "3 – 8%",
    "opts": [
      "0.1 – 0.5%",
      "1 – 2%",
      "3 – 8%",
      "10 – 15%"
    ],
    "exp": "A standard squirrel cage motor under rated mechanical load operates with a slip between 3% and 8%.",
    "cat": "SLIP",
    "id": "T03A_033"
  },
  {
    "q": "What is the expected full-load slip for a slip ring motor with external resistance inserted?",
    "a": "10 – 15%",
    "opts": [
      "0.1 – 0.5%",
      "3 – 8%",
      "10 – 15%",
      "100%"
    ],
    "exp": "A wound rotor has deliberately increased slip for speed control, resulting in a full-load slip of 10 – 15%.",
    "cat": "SLIP",
    "id": "T03A_034"
  },
  {
    "q": "What is the value of slip at standstill (starting)?",
    "a": "s = 1 (100%)",
    "opts": [
      "s = 0 (0%)",
      "s = 0.5 (50%)",
      "s = 1 (100%)",
      "s = 10 (1000%)"
    ],
    "exp": "At standstill, the actual rotor speed (N) is zero, so (Ns - 0)/Ns = 1, or 100%.",
    "cat": "SLIP",
    "id": "T03A_035"
  },
  {
    "q": "How is rotor frequency calculated?",
    "a": "s × f (supply frequency × slip)",
    "opts": [
      "f / s (supply frequency / slip)",
      "120 × f / P",
      "s × f (supply frequency × slip)",
      "Ns - N"
    ],
    "exp": "The frequency of the rotor currents is proportional to the slip, calculated as the supply frequency multiplied by the slip (s × f).",
    "cat": "SLIP",
    "id": "T03A_036"
  },
  {
    "q": "What is the rotor frequency at standstill for a 50 Hz supply?",
    "a": "50 Hz",
    "opts": [
      "0 Hz",
      "2 Hz",
      "50 Hz",
      "100 Hz"
    ],
    "exp": "At standstill, slip is 1 (100%), so rotor frequency = 1 × 50 Hz = 50 Hz.",
    "cat": "SLIP",
    "id": "T03A_037"
  },
  {
    "q": "If a motor operates with a slip of 0.04 (4%) on a 50 Hz supply, what is the rotor frequency?",
    "a": "2 Hz",
    "opts": [
      "0 Hz",
      "2 Hz",
      "4 Hz",
      "50 Hz"
    ],
    "exp": "Rotor frequency = s × f = 0.04 × 50 = 2 Hz.",
    "cat": "SLIP",
    "id": "T03A_038"
  },
  {
    "q": "Why is the rotor reactance very low at running speed?",
    "a": "Because the rotor frequency is very low (e.g., 2 Hz)",
    "opts": [
      "Because the rotor resistance is naturally high",
      "Because the magnetic field is rotating very slowly",
      "Because the rotor frequency is very low (e.g., 2 Hz)",
      "Because the supply voltage drops under load"
    ],
    "exp": "Reactance X = 2πfL. Since the rotor frequency is only around 2 Hz at running speed, the rotor reactance is very low.",
    "cat": "SLIP",
    "id": "T03A_039"
  },
  {
    "q": "What is the result of low rotor reactance at running speed?",
    "a": "Rotor current shifts to near-unity power factor, giving good running efficiency",
    "opts": [
      "The motor stalls due to lack of torque",
      "Rotor current shifts to near-unity power factor, giving good running efficiency",
      "Starting current increases dramatically",
      "The motor accelerates beyond synchronous speed"
    ],
    "exp": "Low reactance relative to resistance shifts the rotor power factor towards unity, which improves the motor's running efficiency.",
    "cat": "SLIP",
    "id": "T03A_040"
  },
  {
    "q": "What happens if slip does not exist in an induction motor?",
    "a": "No relative motion, no induced EMF, no current, no torque → motor stops",
    "opts": [
      "The motor becomes perfectly efficient",
      "The motor accelerates infinitely",
      "No relative motion, no induced EMF, no current, no torque → motor stops",
      "It transforms into a synchronous generator"
    ],
    "exp": "Slip is essential; without a speed difference, the RMF cannot cut the rotor bars to induce the current required for torque.",
    "cat": "SLIP",
    "id": "T03A_041"
  },
  {
    "q": "What is a negative consequence of excessive slip during running operation?",
    "a": "Inefficient operation and winding overheating",
    "opts": [
      "Improved power factor",
      "Higher synchronous speed",
      "Inefficient operation and winding overheating",
      "Reduced stator current"
    ],
    "exp": "Excessive slip means the motor is struggling to drive the load, drawing high rotor current which causes inefficient operation and overheating.",
    "cat": "SLIP",
    "id": "T03A_042"
  },
  {
    "q": "Why is the induced EMF in the rotor at its maximum during standstill?",
    "a": "Because the RMF cuts the rotor conductors at full supply frequency",
    "opts": [
      "Because the rotor resistance is zero",
      "Because the RMF cuts the rotor conductors at full supply frequency",
      "Because the slip is 0%",
      "Because the stator voltage is doubled during starting"
    ],
    "exp": "At standstill (s=1), the RMF sweeps across the stationary rotor at full 50 Hz frequency, inducing maximum possible EMF.",
    "cat": "SLIP",
    "id": "T03A_043"
  },
  {
    "q": "Why does a motor draw more current when more mechanical load is applied?",
    "a": "More mechanical load → more slip needed → more rotor current → more torque",
    "opts": [
      "More mechanical load → synchronous speed drops → current rises",
      "More mechanical load → more slip needed → more rotor current → more torque",
      "The AVR detects the load and boosts current automatically",
      "The number of poles decreases to provide more torque"
    ],
    "exp": "The motor is self-regulating; increased load slows the rotor, increasing slip, which induces higher rotor current to match the needed torque.",
    "cat": "SLIP",
    "id": "T03A_044"
  },
  {
    "q": "What is the relationship between slip and rotor induced current?",
    "a": "Higher slip induces higher rotor current",
    "opts": [
      "Higher slip induces lower rotor current",
      "Higher slip induces higher rotor current",
      "Slip has no effect on rotor current",
      "Higher slip reverses the rotor current direction"
    ],
    "exp": "A larger slip means the RMF cuts the rotor bars at a higher relative rate, inducing a larger EMF and consequently higher rotor current.",
    "cat": "SLIP",
    "id": "T03A_045"
  },
  {
    "q": "What defines the Rotating Magnetic Field (RMF) produced by a three-phase stator?",
    "a": "A resultant magnetic flux of constant magnitude that rotates at synchronous speed",
    "opts": [
      "A stationary flux that pulsates along a single axis",
      "A resultant magnetic flux of constant magnitude that rotates at synchronous speed",
      "A field that reverses polarity every half cycle without rotating",
      "A magnetic field that rotates at the exact speed of the rotor"
    ],
    "exp": "Three currents separated by 120° in time and space produce a resultant flux of constant magnitude that continuously rotates.",
    "cat": "RMF",
    "id": "T03A_046"
  },
  {
    "q": "What is the time phase difference between the three supply currents creating the RMF?",
    "a": "120 degrees apart in time",
    "opts": [
      "90 degrees apart in time",
      "120 degrees apart in time",
      "180 degrees apart in time",
      "360 degrees apart in time"
    ],
    "exp": "The three phases of an AC supply naturally peak 120 electrical degrees apart in time.",
    "cat": "RMF",
    "id": "T03A_047"
  },
  {
    "q": "What is the physical spacing of the three-phase windings in the stator?",
    "a": "120 degrees apart in space",
    "opts": [
      "90 degrees apart in space",
      "120 degrees apart in space",
      "180 degrees apart in space",
      "240 degrees apart in space"
    ],
    "exp": "To form a proper RMF, the physical stator windings must be placed exactly 120 mechanical degrees apart.",
    "cat": "RMF",
    "id": "T03A_048"
  },
  {
    "q": "What kind of magnetic field does a single-phase supply produce in a main winding?",
    "a": "An alternating pulsating field along one axis - not rotating",
    "opts": [
      "A constant rotating field identical to three-phase",
      "A field that rotates but at half the synchronous speed",
      "An alternating pulsating field along one axis - not rotating",
      "A stationary DC magnetic field"
    ],
    "exp": "A single-phase current only produces a field that oscillates back and forth in strength along a fixed axis, but does not rotate.",
    "cat": "RMF",
    "id": "T03A_049"
  },
  {
    "q": "Why does a single-phase induction motor have zero net starting torque on its main winding alone?",
    "a": "The pulsating field's equal forward and reverse components cancel out",
    "opts": [
      "The slip is zero at standstill",
      "The pulsating field's equal forward and reverse components cancel out",
      "The rotor bars cannot conduct single-phase induced current",
      "The magnetic field is perfectly aligned with the neutral axis"
    ],
    "exp": "Because a pulsating field can be mathematically broken down into equal forward and backward rotating fields, their opposite torques cancel out.",
    "cat": "RMF",
    "id": "T03A_050"
  },
  {
    "q": "What is required for a single-phase motor to create a starting torque?",
    "a": "An auxiliary start winding with a capacitor",
    "opts": [
      "A high voltage DC injection pulse",
      "A special skewed rotor design",
      "An auxiliary start winding with a capacitor",
      "A soft starter thyristor array"
    ],
    "exp": "An auxiliary start winding and capacitor create an artificial phase difference, which produces a weak rotating field necessary for starting.",
    "cat": "RMF",
    "id": "T03A_051"
  },
  {
    "q": "How do you reverse the direction of rotation of a single-phase induction motor?",
    "a": "Swap the two terminals of the auxiliary (start) winding only",
    "opts": [
      "Swap the main winding leads",
      "Swap the incoming phase and neutral wires",
      "Swap the two terminals of the auxiliary (start) winding only",
      "Remove the start capacitor entirely"
    ],
    "exp": "Direction is reversed by changing the relative polarity between the main and auxiliary windings, achieved by swapping the auxiliary winding leads.",
    "cat": "RMF",
    "id": "T03A_052"
  },
  {
    "q": "What happens if you swap the main winding leads instead of the auxiliary winding leads in a single-phase motor?",
    "a": "Both main and auxiliary are reversed together, so the net torque direction is unchanged",
    "opts": [
      "The motor instantly reverses direction",
      "The motor runs at twice the speed",
      "Both main and auxiliary are reversed together, so the net torque direction is unchanged",
      "The capacitor will explode due to reversed polarity"
    ],
    "exp": "Swapping the main leads usually also swaps the feed to the connected auxiliary circuit, meaning both reverse and the relative phase shift direction remains identical.",
    "cat": "RMF",
    "id": "T03A_053"
  },
  {
    "q": "How are auxiliary winding terminals typically labelled in a single-phase motor terminal box?",
    "a": "A1/A2 or P1/P2",
    "opts": [
      "U1/U2, V1/V2, W1/W2",
      "L1, L2, L3",
      "A1/A2 or P1/P2",
      "PE and N"
    ],
    "exp": "Auxiliary start winding terminals are typically labelled A1/A2 or P1/P2 (or colour-coded) to distinguish them from main windings.",
    "cat": "RMF",
    "id": "T03A_054"
  },
  {
    "q": "What is the crucial first practical step before attempting to reverse a single-phase motor?",
    "a": "Stop motor completely",
    "opts": [
      "Stop motor completely",
      "Remove the start capacitor",
      "Increase the supply voltage",
      "Engage the mechanical brake"
    ],
    "exp": "You must stop the motor completely because once running, a single-phase motor's rotation is supported by its own field, regardless of the start winding polarity.",
    "cat": "RMF",
    "id": "T03A_055"
  },
  {
    "q": "How do you reverse the direction of a three-phase induction motor?",
    "a": "Swap any two supply phases",
    "opts": [
      "Swap the neutral and earth connections",
      "Swap any two supply phases",
      "Reverse the polarity of all three phases simultaneously",
      "Disconnect one phase to single-phase it briefly"
    ],
    "exp": "Swapping any two supply phases changes the phase sequence (e.g., from R-Y-B to Y-R-B), which reverses the direction of the rotating magnetic field.",
    "cat": "RMF",
    "id": "T03A_056"
  },
  {
    "q": "Where are single-phase motors typically found on ships?",
    "a": "Galley ventilation fans, small sump pumps, refrigerator compressors",
    "opts": [
      "Main ballast pumps and bow thrusters",
      "Galley ventilation fans, small sump pumps, refrigerator compressors",
      "Electric propulsion units and large cranes",
      "Anchor windlasses and mooring winches"
    ],
    "exp": "Single-phase motors are generally used for small, low-power applications like galley fans, small sump pumps, and domestic appliances.",
    "cat": "RMF",
    "id": "T03A_057"
  },
  {
    "q": "Why does a three-phase motor not need a start capacitor?",
    "a": "The three phases inherently produce a constantly rotating magnetic field",
    "opts": [
      "It has a built-in internal DC rectifier",
      "The squirrel cage provides its own capacitance",
      "The three phases inherently produce a constantly rotating magnetic field",
      "It operates at a higher voltage that forces rotation"
    ],
    "exp": "Three-phase power naturally creates an RMF due to the 120-degree physical and temporal separation, eliminating the need for an artificial phase shift.",
    "cat": "RMF",
    "id": "T03A_058"
  },
  {
    "q": "How far does the resultant magnetic field of a 2-pole 3-phase motor advance for every AC cycle?",
    "a": "360 degrees",
    "opts": [
      "120 degrees",
      "180 degrees",
      "360 degrees",
      "720 degrees"
    ],
    "exp": "At any instant, the vector sum gives a resultant direction that advances a full 360 mechanical degrees for every full electrical cycle in a 2-pole machine.",
    "cat": "RMF",
    "id": "T03A_059"
  },
  {
    "q": "What supports continued operation of a single-phase motor once it has been started?",
    "a": "The rotor's own rotating field supports continued operation",
    "opts": [
      "The start capacitor remains constantly engaged",
      "The auxiliary winding draws massive continuous current",
      "The rotor's own rotating field supports continued operation",
      "A mechanical governor forces rotation"
    ],
    "exp": "Once the single-phase motor is running, the cross-field theory explains that the rotating rotor generates its own field which, combined with the stator's pulsating field, creates a net forward torque.",
    "cat": "RMF",
    "id": "T03A_060"
  },
  {
    "q": "What is the typical Direct-On-Line (DOL) starting current multiple for an induction motor?",
    "a": "5–8× rated current",
    "opts": [
      "1–2× rated current",
      "5–8× rated current",
      "10–15× rated current",
      "0.5× rated current"
    ],
    "exp": "When started DOL, a squirrel cage motor typically draws a massive starting surge of 5 to 8 times its normal rated full load current.",
    "cat": "STCUR",
    "id": "T03A_061"
  },
  {
    "q": "What is the formula for rotor impedance at standstill?",
    "a": "Z_rotor = √(R_rotor² + (s·X_rotor)²)",
    "opts": [
      "Z_rotor = R_rotor + X_rotor",
      "Z_rotor = √(R_rotor² + (s·X_rotor)²)",
      "Z_rotor = 2πfL",
      "Z_rotor = V / I"
    ],
    "exp": "The total rotor impedance is the vector sum of its resistance and slip-dependent reactance: Z = √(R² + (sX)²).",
    "cat": "STCUR",
    "id": "T03A_062"
  },
  {
    "q": "Why is the impedance of a squirrel cage rotor extremely low at standstill?",
    "a": "It has thick copper/aluminium bars short-circuited by end rings",
    "opts": [
      "It contains many turns of fine wire",
      "The slip frequency makes the reactance infinitely high",
      "It has thick copper/aluminium bars short-circuited by end rings",
      "The external start resistors are bypassed"
    ],
    "exp": "The cage is literally a short circuit made of massive, low-resistance conductors (bars and end rings), meaning R_rotor is very small.",
    "cat": "STCUR",
    "id": "T03A_063"
  },
  {
    "q": "What behaves exactly like a short-circuited transformer secondary at the moment of starting?",
    "a": "The squirrel cage rotor",
    "opts": [
      "The stator winding",
      "The thermal overload relay",
      "The squirrel cage rotor",
      "The contactor coil"
    ],
    "exp": "At s=1, the rotor is stationary while being cut by full supply frequency flux. Because it is short-circuited and stationary, it acts just like a shorted transformer secondary.",
    "cat": "STCUR",
    "id": "T03A_064"
  },
  {
    "q": "Why does the stator draw such a proportionally large current from the supply during starting?",
    "a": "To maintain the MMF balance against the huge rotor current",
    "opts": [
      "To overcome the high stator winding resistance",
      "To maintain the MMF balance against the huge rotor current",
      "Because the supply voltage temporarily doubles",
      "To power the auxiliary cooling fan"
    ],
    "exp": "Just like a transformer, any current drawn by the secondary (rotor) demands a proportional primary (stator) current to maintain the magnetic field balance.",
    "cat": "STCUR",
    "id": "T03A_065"
  },
  {
    "q": "What is a common electrical network effect of high DOL starting currents on ships?",
    "a": "Busbar voltage dip (10–15%)",
    "opts": [
      "Busbar overvoltage spike",
      "Busbar voltage dip (10–15%)",
      "Permanent phase imbalance",
      "Immediate blackout"
    ],
    "exp": "The severe inductive current surge causes a sudden voltage drop across the generator impedance, leading to a 10-15% busbar voltage dip.",
    "cat": "STCUR",
    "id": "T03A_066"
  },
  {
    "q": "What physical damage risk to cables is associated with high starting current?",
    "a": "Cable heating (I²R losses)",
    "opts": [
      "Insulation shattering from vibration",
      "Cable heating (I²R losses)",
      "Galvanic corrosion",
      "Capacitive breakdown"
    ],
    "exp": "Because heating is proportional to the square of the current (I²R), the 5-8x starting current generates 25-64x more heat in the cables during the starting period.",
    "cat": "STCUR",
    "id": "T03A_067"
  },
  {
    "q": "What generator protection might falsely operate due to a large motor starting DOL?",
    "a": "Generator overcurrent trip",
    "opts": [
      "Reverse power relay",
      "Under-frequency relay",
      "Generator overcurrent trip",
      "Earth fault relay"
    ],
    "exp": "If the starting surge is large enough and lasts long enough, the generator's overcurrent protection may interpret it as a fault and trip the main breaker.",
    "cat": "STCUR",
    "id": "T03A_068"
  },
  {
    "q": "Which starting method gives the absolute best torque and current control?",
    "a": "VFD",
    "opts": [
      "Star-Delta",
      "DOL",
      "Autotransformer",
      "VFD"
    ],
    "exp": "A Variable Frequency Drive (VFD) controls both voltage and frequency, giving near-rated starting torque with minimal current (100-150%).",
    "cat": "STCUR",
    "id": "T03A_069"
  },
  {
    "q": "At what frequency does a VFD typically initiate a motor start?",
    "a": "5–10 Hz",
    "opts": [
      "50 Hz",
      "5–10 Hz",
      "0.1 Hz",
      "60 Hz"
    ],
    "exp": "A VFD starts the motor at a very low frequency (typically 5-10 Hz) and low voltage, slowly ramping them up together.",
    "cat": "STCUR",
    "id": "T03A_070"
  },
  {
    "q": "What is the typical starting current range when using a VFD?",
    "a": "100–150% of rated",
    "opts": [
      "500–800% of rated",
      "100–150% of rated",
      "33% of rated",
      "250–350% of rated"
    ],
    "exp": "Unlike DOL (500-800%), a VFD limits starting current to just 100-150% of the rated full load current while still delivering high torque.",
    "cat": "STCUR",
    "id": "T03A_071"
  },
  {
    "q": "How does a VFD maintain rated motor flux at all speeds during starting?",
    "a": "V/f ratio is kept constant",
    "opts": [
      "By injecting high voltage DC",
      "By automatically increasing slip",
      "V/f ratio is kept constant",
      "By bypassing the thermal overload relay"
    ],
    "exp": "The VFD simultaneously reduces voltage proportional to the reduced frequency (constant Volts/Hertz), preventing core saturation while maintaining full magnetic flux.",
    "cat": "STCUR",
    "id": "T03A_072"
  },
  {
    "q": "What is the condition called where a motor hums at startup but refuses to rotate due to slot alignment?",
    "a": "Cogging (Magnetic Locking)",
    "opts": [
      "Single Phasing",
      "Crawling",
      "Cogging (Magnetic Locking)",
      "Plugging"
    ],
    "exp": "Cogging or magnetic locking occurs when the rotor teeth magnetically align and lock with stator slot openings at standstill.",
    "cat": "STCUR",
    "id": "T03A_073"
  },
  {
    "q": "What design flaw causes motor cogging?",
    "a": "The number of rotor slots equals or is a multiple of the number of stator poles",
    "opts": [
      "The air gap is too wide",
      "The number of rotor slots equals or is a multiple of the number of stator poles",
      "The supply voltage is significantly unbalanced",
      "The rotor bars are made of copper instead of aluminium"
    ],
    "exp": "Equal or harmonically related slot numbers cause strong reluctance torque dips, creating preferred positions that lock the rotor.",
    "cat": "STCUR",
    "id": "T03A_074"
  },
  {
    "q": "What is the universal manufacturing remedy to prevent cogging in squirrel cage motors?",
    "a": "The rotor bars are skewed",
    "opts": [
      "The rotor bars are skewed",
      "The stator is wound with silver wire",
      "A permanent magnet is added to the shaft",
      "The air gap is filled with insulating oil"
    ],
    "exp": "Skewing the rotor bars (twisting them at a small angle) spreads the reluctance effect, smoothing out torque dips and eliminating the lock.",
    "cat": "STCUR",
    "id": "T03A_075"
  },
  {
    "q": "What starting torque does the Direct-On-Line (DOL) method provide compared to others?",
    "a": "Maximum (100% DOL)",
    "opts": [
      "1/3 of DOL",
      "Maximum (100% DOL)",
      "50% of DOL",
      "Variable, dependent on resistance"
    ],
    "exp": "Because full voltage is applied immediately, DOL provides the maximum possible starting torque for a given motor design.",
    "cat": "STMET",
    "id": "T03A_076"
  },
  {
    "q": "For what size of motors is DOL starting typically suitable on ship generators?",
    "a": "Small motors < 5 kW",
    "opts": [
      "Large motors > 50 kW",
      "Medium motors 15-30 kW",
      "Small motors < 5 kW",
      "All motor sizes universally"
    ],
    "exp": "Due to the massive current surge, DOL is generally restricted to small motors under 5 kW to prevent severe voltage dips on the main switchboard.",
    "cat": "STMET",
    "id": "T03A_077"
  },
  {
    "q": "By what factor is the starting current reduced in a Star-Delta starter compared to DOL?",
    "a": "Reduced to 1/3 of DOL",
    "opts": [
      "Reduced to 1/sqrt(3) of DOL",
      "Reduced to 1/3 of DOL",
      "Reduced by 50%",
      "Reduced to 10% of DOL"
    ],
    "exp": "Connecting in star reduces voltage per phase by 1/√3, which reduces phase current by 1/√3. Since line current = phase current in star, the overall line current drawn is 1/3 of the delta (DOL) connection.",
    "cat": "STMET",
    "id": "T03A_078"
  },
  {
    "q": "By what factor is the starting torque reduced in a Star-Delta starter compared to DOL?",
    "a": "Reduced to 1/3 of DOL",
    "opts": [
      "Reduced to 1/sqrt(3) of DOL",
      "Reduced to 1/3 of DOL",
      "Reduced by 50%",
      "Maintained at 100%"
    ],
    "exp": "Because torque is proportional to the square of the applied voltage, and voltage is reduced by 1/√3, torque = (1/√3)² = 1/3.",
    "cat": "STMET",
    "id": "T03A_079"
  },
  {
    "q": "How does an Autotransformer starter reduce starting current?",
    "a": "Tapped transformer (65% or 80% tap) reduces voltage",
    "opts": [
      "It adds series resistance to the stator",
      "Tapped transformer (65% or 80% tap) reduces voltage",
      "It changes the supply frequency",
      "It connects the windings in star initially"
    ],
    "exp": "An autotransformer uses a tapped coil (usually set to 65% or 80% voltage) to supply a reduced voltage to the motor during the starting phase.",
    "cat": "STMET",
    "id": "T03A_080"
  },
  {
    "q": "In an autotransformer starter, the starting torque is adjustable and proportional to what?",
    "a": "propto voltage² - adjustable by tap",
    "opts": [
      "propto current - adjustable by resistors",
      "propto voltage² - adjustable by tap",
      "propto frequency - adjustable by VFD",
      "propto slip - adjustable by rotor rheostat"
    ],
    "exp": "Because motor torque is always proportional to the square of the voltage (V²), changing the transformer tap directly adjusts the available starting torque.",
    "cat": "STMET",
    "id": "T03A_081"
  },
  {
    "q": "How does a Soft Starter reduce starting current?",
    "a": "Thyristors ramp voltage from near-zero to full over set time",
    "opts": [
      "It physically switches between star and delta",
      "Thyristors ramp voltage from near-zero to full over set time",
      "It converts AC to DC and back to AC",
      "It uses external liquid resistors in the rotor circuit"
    ],
    "exp": "A soft starter uses solid-state SCR thyristors to progressively chop the AC waveform, ramping up the RMS voltage smoothly.",
    "cat": "STMET",
    "id": "T03A_082"
  },
  {
    "q": "What specific mechanical issue in piping systems is eliminated by using a Soft Starter or VFD?",
    "a": "Water hammer",
    "opts": [
      "Cavitation",
      "Galvanic corrosion",
      "Water hammer",
      "Vortexing"
    ],
    "exp": "The smooth acceleration (soft start) and deceleration (soft stop) prevent the sudden pressure waves known as water hammer when starting or stopping large centrifugal pumps.",
    "cat": "STMET",
    "id": "T03A_083"
  },
  {
    "q": "How does a VFD uniquely reduce starting current compared to other methods?",
    "a": "Low frequency + proportionally low voltage simultaneously",
    "opts": [
      "It uses a tapped transformer",
      "It uses thyristors to chop voltage only",
      "Low frequency + proportionally low voltage simultaneously",
      "It uses star-delta contactor logic"
    ],
    "exp": "By dropping the frequency very low, the rotor slip impedance remains high, limiting current, while dropping voltage proportionally keeps flux optimal.",
    "cat": "STMET",
    "id": "T03A_084"
  },
  {
    "q": "What level of speed control does a VFD provide?",
    "a": "Full variable speed 0 – above rated",
    "opts": [
      "None",
      "Start/stop ramp only",
      "Stepped speed control by varying resistance",
      "Full variable speed 0 – above rated"
    ],
    "exp": "Unlike all other starting methods listed, a VFD allows continuous, smooth, variable speed control throughout the entire life and operation of the motor.",
    "cat": "STMET",
    "id": "T03A_085"
  },
  {
    "q": "How does a Slip Ring starter reduce starting current?",
    "a": "External rotor resistance raises rotor impedance",
    "opts": [
      "Thyristors ramp voltage",
      "External rotor resistance raises rotor impedance",
      "Tapped transformer reduces voltage",
      "It changes the number of stator poles"
    ],
    "exp": "By inserting resistance into the rotor circuit via slip rings, total rotor impedance is increased, which limits the current drawn from the stator.",
    "cat": "STMET",
    "id": "T03A_086"
  },
  {
    "q": "For what kind of loads is a Slip Ring motor historically preferred on ships?",
    "a": "High inertia loads - cranes, hoists, windlasses",
    "opts": [
      "Low inertia fans",
      "High inertia loads - cranes, hoists, windlasses",
      "Centrifugal ballast pumps",
      "Domestic water hydrophores"
    ],
    "exp": "Because it gives maximum torque at standstill with reduced current, it is excellent for lifting heavy, static loads like anchors and cargo.",
    "cat": "STMET",
    "id": "T03A_087"
  },
  {
    "q": "What mechanical effect does DOL starting have on the drive train?",
    "a": "Mechanical shock to shaft, coupling, and driven machinery",
    "opts": [
      "Smooth, vibration-free acceleration",
      "Reverse rotation impulse",
      "Mechanical shock to shaft, coupling, and driven machinery",
      "Elimination of bearing friction"
    ],
    "exp": "Applying 100% voltage instantly slams the motor with maximum torque, causing a severe mechanical jolt to couplings and gears.",
    "cat": "STMET",
    "id": "T03A_088"
  },
  {
    "q": "What is the cumulative effect of repeated DOL starts on a motor?",
    "a": "Accumulate thermal stress in windings",
    "opts": [
      "Cleans the commutator",
      "Accumulate thermal stress in windings",
      "Improves the power factor permanently",
      "Polishes the bearing surfaces"
    ],
    "exp": "The massive I²R heat generated during the 5-15 second starting surge accumulates. If started too frequently, the insulation degrades thermally.",
    "cat": "STMET",
    "id": "T03A_089"
  },
  {
    "q": "What is the classic application suitability for a Star-Delta starter?",
    "a": "Unloaded start - fans, pumps, compressors (unloaded)",
    "opts": [
      "High inertia starting - cranes, hoists",
      "Unloaded start - fans, pumps, compressors (unloaded)",
      "Variable speed cargo pumping",
      "Reversing anchor windlass"
    ],
    "exp": "Because it provides only 1/3 starting torque, it can only be used on loads that start easily and require very little torque at low speed.",
    "cat": "STMET",
    "id": "T03A_090"
  },
  {
    "q": "In a 440V system, what is the voltage applied to each phase winding when connected in Star?",
    "a": "254 V",
    "opts": [
      "440 V",
      "220 V",
      "254 V",
      "127 V"
    ],
    "exp": "In a star connection, phase voltage = line voltage / √3. Thus, 440 / 1.732 ≈ 254 Volts.",
    "cat": "SDMTH",
    "id": "T03A_091"
  },
  {
    "q": "Why is the line current in Star exactly 1/3 of the line current in Delta?",
    "a": "Star phase current is 1/√3 of Delta, and Star line=phase while Delta line=√3×phase",
    "opts": [
      "Star phase current is 1/3 of Delta directly due to resistance",
      "Star phase current is 1/√3 of Delta, and Star line=phase while Delta line=√3×phase",
      "The timer relay cuts out 2/3 of the current",
      "Because the motor runs at 1/3 speed in Star"
    ],
    "exp": "The 1/3 factor is the product of two √3 reductions: (1/√3 for voltage on the winding) × (1/√3 because line current doesn't multiply in star as it does in delta).",
    "cat": "SDMTH",
    "id": "T03A_092"
  },
  {
    "q": "Since starting torque is proportional to voltage squared, what is the torque ratio in Star-Delta?",
    "a": "(1/√3)² = 1/3",
    "opts": [
      "(1/√3)² = 1/3",
      "1/√3 = 58%",
      "(1/3)² = 1/9",
      "1.732 × 1 = 1.73"
    ],
    "exp": "Torque ∝ V². Since V is reduced by a factor of 1/√3, the torque is (1/√3)², which is exactly 1/3 of DOL torque.",
    "cat": "SDMTH",
    "id": "T03A_093"
  },
  {
    "q": "Under what load condition is Star-Delta starting NOT suitable?",
    "a": "If load requires high starting torque",
    "opts": [
      "If the motor is completely unloaded",
      "If load requires high starting torque",
      "If the motor is small (<5 kW)",
      "If the supply voltage is perfectly stable"
    ],
    "exp": "If the load demands more than 33% of the motor's stall torque to get moving, the motor will simply stall in Star and fail to accelerate.",
    "cat": "SDMTH",
    "id": "T03A_094"
  },
  {
    "q": "Why might starting a centrifugal pump against an open discharge valve fail with Star-Delta?",
    "a": "It may need higher starting torque than the 1/3 available",
    "opts": [
      "The water flow reverses the phase sequence",
      "The motor instantly overspeeds",
      "It may need higher starting torque than the 1/3 available",
      "The contactors cannot handle the water pressure"
    ],
    "exp": "An open discharge valve means the pump immediately moves maximum water volume, requiring more torque than the 33% star torque can provide to reach speed.",
    "cat": "SDMTH",
    "id": "T03A_095"
  },
  {
    "q": "How should a compressor be prepared for a Star-Delta start?",
    "a": "Start unloaded (unloader valve open)",
    "opts": [
      "Start against full system pressure",
      "Start with the discharge valve fully closed",
      "Start unloaded (unloader valve open)",
      "Start in reverse rotation to clear oil"
    ],
    "exp": "By opening the unloader valve, the compressor starts mechanically unloaded, allowing the weak 1/3 starting torque to easily accelerate it to speed.",
    "cat": "SDMTH",
    "id": "T03A_096"
  },
  {
    "q": "Is Star-Delta suitable for a crane hoist?",
    "a": "No, slip ring motor or VFD preferred",
    "opts": [
      "Yes, it is the standard method",
      "No, slip ring motor or VFD preferred",
      "Yes, but only if dead time is removed",
      "No, DOL is the only method allowed for cranes"
    ],
    "exp": "Crane hoists require massive starting torque to lift a static load against gravity, making the 1/3 torque of Star-Delta completely unusable.",
    "cat": "SDMTH",
    "id": "T03A_097"
  },
  {
    "q": "What physical requirement must a motor meet to be connected to a Star-Delta starter?",
    "a": "Must have 6 terminals accessible (U1, U2, V1, V2, W1, W2)",
    "opts": [
      "Must have only 3 terminals",
      "Must have a built-in thermistor",
      "Must have 6 terminals accessible (U1, U2, V1, V2, W1, W2)",
      "Must be internally shorted in star"
    ],
    "exp": "To allow external switching between Star and Delta configurations, all 6 ends of the three phase windings must be brought out to the terminal box.",
    "cat": "SDMTH",
    "id": "T03A_098"
  },
  {
    "q": "What nameplate rating must a motor possess to safely use a Star-Delta starter on a 440V supply?",
    "a": "Motor must be rated for delta connection voltage (440V delta)",
    "opts": [
      "Motor must be rated 440V star",
      "Motor must be rated for delta connection voltage (440V delta)",
      "Motor must be rated 220V delta",
      "Motor must be rated 690V star"
    ],
    "exp": "The motor's windings will eventually be connected directly across the 440V lines in Delta. If it is only rated for 440V Star, applying 440V in Delta will burn it out.",
    "cat": "SDMTH",
    "id": "T03A_099"
  },
  {
    "q": "What causes the severe transient current spike during the Star-Delta transition?",
    "a": "Motor's back-EMF is out of phase with the supply when Delta closes",
    "opts": [
      "The sudden increase in load torque",
      "Motor's back-EMF is out of phase with the supply when Delta closes",
      "The contactors arc across the terminals",
      "The thermal overload relay resetting"
    ],
    "exp": "During the open transition, the motor spins and generates a back-EMF. If it falls out of phase with the grid, closing the Delta contactor creates a massive phase-difference short circuit surge.",
    "cat": "SDMTH",
    "id": "T03A_100"
  },
  {
    "q": "How long is the typical transition dead time in a Star-Delta starter?",
    "a": "20–50 ms",
    "opts": [
      "1–2 seconds",
      "20–50 ms",
      "5–15 seconds",
      "0 ms (instantaneous)"
    ],
    "exp": "A brief dead time of 20–50 ms allows the arc from opening the Star contactor to extinguish and the back-EMF to partially decay before closing Delta.",
    "cat": "SDMTH",
    "id": "T03A_101"
  },
  {
    "q": "How are the terminal links placed for a permanent, manual STAR connection?",
    "a": "U2–V2–W2 shorted together",
    "opts": [
      "U1-V1-W1 shorted to U2-V2-W2",
      "U2 shorted to V1, V2 to W1, W2 to U1",
      "U2–V2–W2 shorted together",
      "No links are used"
    ],
    "exp": "A permanent star connection uses shorting bars to tie the three finish ends (U2, V2, W2) together, forming the neutral point.",
    "cat": "SDMTH",
    "id": "T03A_102"
  },
  {
    "q": "How are the terminal links placed for a permanent, manual DELTA connection?",
    "a": "U2 shorted to V1, V2 shorted to W1, W2 shorted to U1",
    "opts": [
      "U2–V2–W2 shorted together",
      "U1-U2 shorted, V1-V2 shorted, W1-W2 shorted",
      "U2 shorted to V1, V2 shorted to W1, W2 shorted to U1",
      "U1-V1-W1 connected to earth"
    ],
    "exp": "In Delta, the end of one winding must connect to the start of the next phase, forming a closed loop (U2->V1, V2->W1, W2->U1).",
    "cat": "SDMTH",
    "id": "T03A_103"
  },
  {
    "q": "In the older terminal notation (A/B/C), what is the rule for a Delta link connection?",
    "a": "A2→B1, B2→C1, C2→A1",
    "opts": [
      "A1→A2, B1→B2, C1→C2",
      "A2→B2→C2",
      "A2→B1, B2→C1, C2→A1",
      "A1→B1, B1→C1, C1→A1"
    ],
    "exp": "The end of phase A (A2) links to the start of phase B (B1), B2 to C1, and C2 to A1, completing the Delta loop.",
    "cat": "SDMTH",
    "id": "T03A_104"
  },
  {
    "q": "What critical test must be performed by the ETO after any terminal-box link changes before energising?",
    "a": "Always megger after any terminal-box work",
    "opts": [
      "Check the oil level",
      "Run the motor backwards",
      "Always megger after any terminal-box work",
      "Bypass the overload relay"
    ],
    "exp": "Disturbing the terminal box risks compromising insulation or creating a dead short. A megger (insulation resistance) test must verify integrity before applying power.",
    "cat": "SDMTH",
    "id": "T03A_105"
  },
  {
    "q": "In a Star-Delta starter, what is the function of the KM (Main Contactor)?",
    "a": "Connects motor to the three-phase supply",
    "opts": [
      "Shorts the winding ends in star",
      "Connects the windings in delta",
      "Connects motor to the three-phase supply",
      "Reverses the phase sequence"
    ],
    "exp": "The Main Contactor (KM) provides the incoming 3-phase line supply to the U1, V1, W1 terminals of the motor.",
    "cat": "SDCON",
    "id": "T03A_106"
  },
  {
    "q": "During which parts of the starting and running sequence does KM remain closed?",
    "a": "Energised at start and remains closed throughout the entire running period",
    "opts": [
      "Energised at start only",
      "Energised only after transition to delta",
      "Energised at start and remains closed throughout the entire running period",
      "Opens during the 50 ms dead time"
    ],
    "exp": "KM connects the main supply and never opens until the stop button is pressed or a trip occurs; it stays closed through both Star and Delta modes.",
    "cat": "SDCON",
    "id": "T03A_107"
  },
  {
    "q": "What is the specific function of the KY (Star) contactor?",
    "a": "Shorts the three winding ends together in star configuration",
    "opts": [
      "Connects the main 440V supply",
      "Shorts the three winding ends together in star configuration",
      "Connects the windings end-to-start for delta",
      "Bypasses the thermal overload"
    ],
    "exp": "KY's only job is to tie the U2, V2, and W2 terminals together to form the neutral star-point.",
    "cat": "SDCON",
    "id": "T03A_108"
  },
  {
    "q": "When does the KY contactor de-energise?",
    "a": "When the timer expires to allow transition to delta",
    "opts": [
      "When the STOP button is pressed",
      "When the timer expires to allow transition to delta",
      "Immediately after KM closes",
      "It never de-energises while running"
    ],
    "exp": "KY opens after the preset Star-run timing period (5-15 seconds) has elapsed, breaking the Star point to allow the changeover.",
    "cat": "SDCON",
    "id": "T03A_109"
  },
  {
    "q": "What is the function of the KD (Delta) contactor?",
    "a": "Connects the motor windings in delta configuration",
    "opts": [
      "Forms the star neutral point",
      "Connects the motor windings in delta configuration",
      "Acts as the main supply isolator",
      "Reverses the motor direction"
    ],
    "exp": "KD connects the U2, V2, and W2 terminals back to the appropriate supply lines to form the closed Delta loop.",
    "cat": "SDCON",
    "id": "T03A_110"
  },
  {
    "q": "At what specific moment in the sequence is KD allowed to close?",
    "a": "Only after the star contactor has opened and the dead-time has elapsed",
    "opts": [
      "Simultaneously with KM closing",
      "Exactly when KY opens with no delay",
      "Only after the star contactor has opened and the dead-time has elapsed",
      "Before KM closes"
    ],
    "exp": "KD must wait for KY to clear its arc (during the 20-50 ms dead time) before closing to prevent a phase-to-phase short.",
    "cat": "SDCON",
    "id": "T03A_111"
  },
  {
    "q": "What is the first step of the Star-Delta starting sequence when START is pressed?",
    "a": "KM closes (supply). KY closes (star).",
    "opts": [
      "KD closes (delta). KM closes (supply).",
      "KM closes (supply). KY closes (star).",
      "KY closes (star). KD closes (delta).",
      "Timer energises and waits 5 seconds before closing KM."
    ],
    "exp": "Instantly on pressing start, both the main supply contactor (KM) and the star shorting contactor (KY) pull in.",
    "cat": "SDCON",
    "id": "T03A_112"
  },
  {
    "q": "What is a typical timer setting duration for the star phase to accelerate the motor?",
    "a": "5–15 seconds",
    "opts": [
      "0.1–0.5 seconds",
      "20–50 milliseconds",
      "5–15 seconds",
      "1–3 minutes"
    ],
    "exp": "Depending on the inertia of the load, the timer keeps the motor in Star for 5 to 15 seconds to let it reach near full speed.",
    "cat": "SDCON",
    "id": "T03A_113"
  },
  {
    "q": "What happens during the brief 20–50 ms dead time?",
    "a": "Star current decays, motor back-EMF partially collapses",
    "opts": [
      "The motor reverses direction",
      "The thermal overload relay resets",
      "Star current decays, motor back-EMF partially collapses",
      "The main supply contactor KM opens and closes"
    ],
    "exp": "With KY open and KD not yet closed, the motor is disconnected. The arc extinguishes and the generated back-EMF begins to collapse.",
    "cat": "SDCON",
    "id": "T03A_114"
  },
  {
    "q": "What happens in the final step when KD CLOSES?",
    "a": "Motor now in delta at full 440 V per winding. Motor accelerates to full speed.",
    "opts": [
      "Motor drops to 1/3 speed",
      "Motor now in delta at full 440 V per winding. Motor accelerates to full speed.",
      "The supply is isolated and braking begins",
      "The overload relay is bypassed"
    ],
    "exp": "KD connects the motor in Delta, applying the full 440V line voltage across each phase winding, providing 100% torque to achieve full rated speed.",
    "cat": "SDCON",
    "id": "T03A_115"
  },
  {
    "q": "What critical safety feature exists between the KY and KD contactors?",
    "a": "Both cannot close simultaneously under any fault condition",
    "opts": [
      "They share the same thermal overload relay",
      "They are driven by the same physical coil",
      "Both cannot close simultaneously under any fault condition",
      "They operate on different supply frequencies"
    ],
    "exp": "They are electrically AND mechanically interlocked. A mechanical rocking beam physically prevents one from pulling in if the other is closed.",
    "cat": "SDCON",
    "id": "T03A_116"
  },
  {
    "q": "What would be the catastrophic result if KY and KD closed simultaneously?",
    "a": "The winding ends would form a direct three-phase short circuit across the supply",
    "opts": [
      "The motor would run backwards",
      "The winding ends would form a direct three-phase short circuit across the supply",
      "The motor would run at exactly half speed",
      "The timer relay would burn out"
    ],
    "exp": "KD connects the phase ends to the live grid, while KY shorts those same ends together. Both closed means the live 440V grid is dead-shorted together.",
    "cat": "SDCON",
    "id": "T03A_117"
  },
  {
    "q": "Why is the interlock considered the most safety-critical feature of the starter?",
    "a": "Without it, a fault could cause a catastrophic arc, busbar fault, and possible fire",
    "opts": [
      "It prevents the motor from spinning too fast",
      "It protects the bearings from overload",
      "Without it, a fault could cause a catastrophic arc, busbar fault, and possible fire",
      "It keeps the control circuit voltage at 110V"
    ],
    "exp": "A dead phase-to-phase short on the main busbars will draw tens of thousands of amps instantly, blowing main fuses and risking an arc flash fire.",
    "cat": "SDCON",
    "id": "T03A_118"
  },
  {
    "q": "How does the maths explain the 1/3 torque reduction factor?",
    "a": "(1/√3)² = 1/3",
    "opts": [
      "1 - (1/√3) = 1/3",
      "1/3 + 1/3 = 1/3",
      "(1/√3)² = 1/3",
      "√3 / 3 = 1/3"
    ],
    "exp": "Because torque is proportional to the square of voltage, applying 1/√3 of the voltage yields (1/√3) squared, which equals exactly 1/3.",
    "cat": "SDCON",
    "id": "T03A_119"
  },
  {
    "q": "What is the voltage across each winding during the Star phase on a 440V system?",
    "a": "254 V",
    "opts": [
      "440 V",
      "254 V",
      "220 V",
      "110 V"
    ],
    "exp": "440 Volts divided by the square root of 3 gives approximately 254 Volts across each individual winding.",
    "cat": "SDCON",
    "id": "T03A_120"
  },
  {
    "q": "What is the standard name for an Open Transition starting method?",
    "a": "Standard Star-Delta",
    "opts": [
      "Standard Star-Delta",
      "Korndörfer",
      "Autotransformer",
      "Soft Starter"
    ],
    "exp": "A standard Star-Delta starter uses an open transition, meaning it completely breaks the circuit between the star and delta phases.",
    "cat": "TRANS",
    "id": "T03A_121"
  },
  {
    "q": "What fundamental switching logic defines an Open Transition?",
    "a": "Break-before-make",
    "opts": [
      "Make-before-break",
      "Break-before-make",
      "Simultaneous switching",
      "Zero-cross switching"
    ],
    "exp": "The star contactor must break (open) completely before the delta contactor can make (close), leaving a brief dead time.",
    "cat": "TRANS",
    "id": "T03A_122"
  },
  {
    "q": "What causes the massive transient current spike upon reconnection in Open Transition?",
    "a": "Motor back-EMF may still be significant and out of phase with the supply",
    "opts": [
      "The contactors are undersized",
      "Motor back-EMF may still be significant and out of phase with the supply",
      "The delta contactor has lower resistance",
      "The motor instantly stalls"
    ],
    "exp": "The coasting rotor acts as a generator. If its generated back-EMF sine wave is out of phase with the grid sine wave when Delta closes, a massive transient current flows.",
    "cat": "TRANS",
    "id": "T03A_123"
  },
  {
    "q": "What mechanical issue does the open transition transient current spike cause?",
    "a": "A mechanical jolt on the coupling",
    "opts": [
      "Permanent bending of the rotor shaft",
      "A mechanical jolt on the coupling",
      "Immediate bearing seizure",
      "Loss of grease from the housing"
    ],
    "exp": "The sudden electrical surge creates an instantaneous, violent torque spike, which exerts a severe mechanical shock (jolt) on the drive coupling.",
    "cat": "TRANS",
    "id": "T03A_124"
  },
  {
    "q": "What is the alternative name for a Closed Transition starter configuration?",
    "a": "Korndörfer / Wye-Delta",
    "opts": [
      "Ward-Leonard",
      "Korndörfer / Wye-Delta",
      "Dahlander",
      "Selsyn"
    ],
    "exp": "The Korndörfer configuration is the classic method for achieving a closed transition in star-delta or autotransformer starting.",
    "cat": "TRANS",
    "id": "T03A_125"
  },
  {
    "q": "What fundamental switching logic defines a Closed Transition?",
    "a": "Make-before-break",
    "opts": [
      "Break-before-make",
      "Make-before-break",
      "Manual break",
      "Thermal delay switching"
    ],
    "exp": "In closed transition, a secondary path is made (using resistors) before the primary star path is broken, ensuring continuous current flow.",
    "cat": "TRANS",
    "id": "T03A_126"
  },
  {
    "q": "What specific component is added to achieve a closed transition?",
    "a": "An additional resistor (or reactor) is briefly inserted in series",
    "opts": [
      "A high-capacity capacitor bank",
      "An additional resistor (or reactor) is briefly inserted in series",
      "A variable frequency drive module",
      "A mechanical flywheel"
    ],
    "exp": "Transition resistors maintain a continuous, current-limited connection to the supply during the fraction of a second when the contactors are swapping.",
    "cat": "TRANS",
    "id": "T03A_127"
  },
  {
    "q": "What is the primary benefit of Closed Transition starting?",
    "a": "Eliminates the transition current spike and mechanical jolt",
    "opts": [
      "Makes the motor run 20% faster",
      "Eliminates the transition current spike and mechanical jolt",
      "Removes the need for a thermal overload relay",
      "Uses 50% less copper cable"
    ],
    "exp": "By never disconnecting the motor, the back-EMF stays perfectly locked in phase with the supply, completely eliminating the out-of-phase transient spike.",
    "cat": "TRANS",
    "id": "T03A_128"
  },
  {
    "q": "What hardware is required to modify a standard starter to Closed Transition?",
    "a": "An extra contactor and transition resistors",
    "opts": [
      "An extra contactor and transition resistors",
      "A larger main breaker",
      "A slip-ring rotor",
      "A DC injection braking module"
    ],
    "exp": "The modification requires a dedicated transition contactor to insert the transition resistors briefly during the changeover.",
    "cat": "TRANS",
    "id": "T03A_129"
  },
  {
    "q": "For what applications is Closed Transition preferred over Open Transition?",
    "a": "Sensitive loads, large motors, and applications where current transients must be minimised",
    "opts": [
      "Small fractional horsepower motors",
      "Emergency lighting circuits",
      "Sensitive loads, large motors, and applications where current transients must be minimised",
      "Galley domestic appliances"
    ],
    "exp": "Because it stops severe mechanical shocks and grid voltage disturbances, it is justified for large motors and delicate driven machinery.",
    "cat": "TRANS",
    "id": "T03A_130"
  },
  {
    "q": "If a surveyor asks if a star-delta starter can be modified for closed transition, what is the answer?",
    "a": "Yes - by adding a transition contactor with current-limiting resistors",
    "opts": [
      "No - it requires a completely different motor",
      "No - it is banned by SOLAS regulations",
      "Yes - by adding a transition contactor with current-limiting resistors",
      "Yes - by simply removing the dead-time timer"
    ],
    "exp": "It is entirely possible to upgrade an open panel to closed transition (Korndörfer) by adding the transition contactor and resistor bank.",
    "cat": "TRANS",
    "id": "T03A_131"
  },
  {
    "q": "What happens to the motor back-EMF during the open transition dead time?",
    "a": "It partially collapses and may fall out of phase",
    "opts": [
      "It rises to double the supply voltage",
      "It partially collapses and may fall out of phase",
      "It reverses polarity instantly",
      "It synchronises perfectly with the grid"
    ],
    "exp": "Without the grid holding it, the rotor slows slightly and the residual flux decays, meaning the generated sine wave slips out of phase with the grid sine wave.",
    "cat": "TRANS",
    "id": "T03A_132"
  },
  {
    "q": "How large can the open transition current spike be?",
    "a": "Potentially as large as DOL starting current",
    "opts": [
      "No larger than running current",
      "Potentially as large as DOL starting current",
      "Always exactly 1/3 of DOL",
      "It approaches infinity and blows all fuses"
    ],
    "exp": "If the back-EMF falls exactly 180 degrees out of phase, the voltage difference across the contactor is massive, causing a transient spike that can match or exceed DOL surge.",
    "cat": "TRANS",
    "id": "T03A_133"
  },
  {
    "q": "What is the main advantage of an Open Transition Star-Delta starter?",
    "a": "Simplest and cheapest configuration",
    "opts": [
      "Provides the highest starting torque",
      "Provides seamless speed control",
      "Simplest and cheapest configuration",
      "Requires no contactors"
    ],
    "exp": "It uses just 3 contactors and a timer, making it very cheap, reliable, and space-efficient compared to autotransformers or closed-transition panels.",
    "cat": "TRANS",
    "id": "T03A_134"
  },
  {
    "q": "What is the main disadvantage of modifying to a Closed Transition?",
    "a": "The extra contactor and resistors increase cost and complexity",
    "opts": [
      "The extra contactor and resistors increase cost and complexity",
      "It drastically reduces starting torque",
      "It cannot be used on 440V systems",
      "It voids the motor's IP rating"
    ],
    "exp": "Adding heavy-duty power resistors and a fourth contactor takes up much more panel space and adds significant cost and complexity.",
    "cat": "TRANS",
    "id": "T03A_135"
  },
  {
    "q": "What core component does an Autotransformer starter use to limit current?",
    "a": "A tapped transformer",
    "opts": [
      "A tapped transformer",
      "A variable resistor bank",
      "A thyristor bridge",
      "A slip-ring rotor"
    ],
    "exp": "It uses an actual transformer winding with selectable taps to physically step down the AC voltage delivered to the motor.",
    "cat": "AUTO",
    "id": "T03A_136"
  },
  {
    "q": "What are the typical tap percentages available on an autotransformer starter?",
    "a": "65% or 80% voltage tap",
    "opts": [
      "33% or 50% voltage tap",
      "65% or 80% voltage tap",
      "90% or 95% voltage tap",
      "10% or 20% voltage tap"
    ],
    "exp": "Standard industrial autotransformers usually provide taps at 65% and 80% of line voltage (sometimes 50%) to allow selection of the required starting torque.",
    "cat": "AUTO",
    "id": "T03A_137"
  },
  {
    "q": "In an autotransformer starter, the line current reduction is proportional to what mathematical factor?",
    "a": "The square of the voltage ratio",
    "opts": [
      "The square root of the voltage ratio",
      "The square of the voltage ratio",
      "Directly proportional to the tap percentage",
      "Inversely proportional to the resistance"
    ],
    "exp": "Because of the transformer action (power in ≈ power out), reducing voltage by factor 'x' reduces motor current by 'x', and transformer action reflects this to the line as another factor of 'x', resulting in a reduction of x².",
    "cat": "AUTO",
    "id": "T03A_138"
  },
  {
    "q": "Which contactor closes FIRST in an autotransformer starter sequence?",
    "a": "KS (Star / neutral contactor)",
    "opts": [
      "KM (Main / run contactor)",
      "KA (Autotransformer contactor)",
      "KS (Star / neutral contactor)",
      "KD (Delta contactor)"
    ],
    "exp": "The star (neutral) contactor must close first to create the star point of the autotransformer winding before power is applied.",
    "cat": "AUTO",
    "id": "T03A_139"
  },
  {
    "q": "What is the function of the KS contactor in the autotransformer?",
    "a": "Connects the autotransformer winding in star, forming the neutral point",
    "opts": [
      "Bypasses the autotransformer completely",
      "Connects the autotransformer winding in star, forming the neutral point",
      "Connects the motor windings in delta",
      "Applies full grid voltage to the motor"
    ],
    "exp": "KS ties the ends of the autotransformer coils together, creating the neutral point necessary for the transformer to function and provide tapped voltage.",
    "cat": "AUTO",
    "id": "T03A_140"
  },
  {
    "q": "Which contactor closes SECOND in the sequence?",
    "a": "KA (Autotransformer contactor)",
    "opts": [
      "KM (Main contactor)",
      "KA (Autotransformer contactor)",
      "KS (Star contactor)",
      "The bypass contactor"
    ],
    "exp": "After KS forms the neutral, KA closes to connect the grid to the transformer and simultaneously route the tapped (reduced) voltage to the motor.",
    "cat": "AUTO",
    "id": "T03A_141"
  },
  {
    "q": "What is the function of the KA contactor?",
    "a": "Applies reduced voltage (tapped point) to the motor",
    "opts": [
      "Forms the star point of the motor winding",
      "Applies full grid voltage to the motor",
      "Applies reduced voltage (tapped point) to the motor",
      "Reverses the phase sequence"
    ],
    "exp": "KA connects the motor to the selected 65% or 80% tap on the autotransformer, allowing it to start at reduced voltage.",
    "cat": "AUTO",
    "id": "T03A_142"
  },
  {
    "q": "What happens when the timer expires indicating the motor is near running speed?",
    "a": "KS and KA open, disconnecting the transformer",
    "opts": [
      "KM opens and the motor coasts to a stop",
      "KS and KA open, disconnecting the transformer",
      "The tap changes from 65% to 80% automatically",
      "The motor shifts into reverse"
    ],
    "exp": "Once up to speed, the reduced-voltage phase is over; KS and KA open to completely remove the autotransformer from the circuit.",
    "cat": "AUTO",
    "id": "T03A_143"
  },
  {
    "q": "What is the function of the KM contactor in this sequence?",
    "a": "Connects motor directly to full supply voltage for normal operation",
    "opts": [
      "Connects motor directly to full supply voltage for normal operation",
      "Connects the autotransformer to the grid",
      "Provides DC injection braking",
      "Short-circuits the rotor slip rings"
    ],
    "exp": "KM is the Main / Run contactor. It closes last, bypassing the autotransformer and connecting the motor directly across the 440V busbars.",
    "cat": "AUTO",
    "id": "T03A_144"
  },
  {
    "q": "If the 65% tap is used, what is the line starting current compared to DOL?",
    "a": "42% of DOL starting current",
    "opts": [
      "65% of DOL starting current",
      "42% of DOL starting current",
      "33% of DOL starting current",
      "100% of DOL starting current"
    ],
    "exp": "Because line current reduction is proportional to the square of the tap: 0.65 × 0.65 = 0.4225, or roughly 42%.",
    "cat": "AUTO",
    "id": "T03A_145"
  },
  {
    "q": "If the 80% tap is used, what is the line starting current compared to DOL?",
    "a": "64% of DOL starting current",
    "opts": [
      "80% of DOL starting current",
      "64% of DOL starting current",
      "50% of DOL starting current",
      "16% of DOL starting current"
    ],
    "exp": "Squaring the tap ratio gives the line current reduction: 0.80 × 0.80 = 0.64, or 64% of the DOL current.",
    "cat": "AUTO",
    "id": "T03A_146"
  },
  {
    "q": "How is starting torque affected by the tap selection in an autotransformer?",
    "a": "Torque also reduces as V²",
    "opts": [
      "Torque reduces proportionally to 1/V",
      "Torque remains constant at all taps",
      "Torque also reduces as V²",
      "Torque increases as voltage drops"
    ],
    "exp": "Because motor torque is physically proportional to the square of the voltage at the terminals, a 65% tap produces 42% torque, just like the line current.",
    "cat": "AUTO",
    "id": "T03A_147"
  },
  {
    "q": "Which contactor is considered the 'Main / run' contactor in this arrangement?",
    "a": "KM",
    "opts": [
      "KS",
      "KA",
      "KM",
      "KD"
    ],
    "exp": "KM connects the motor directly to the supply for long-term continuous running, hence it is the main run contactor.",
    "cat": "AUTO",
    "id": "T03A_148"
  },
  {
    "q": "Why is it critical to select the correct percentage tap?",
    "a": "To ensure the motor can accelerate the connected load in the required time",
    "opts": [
      "To prevent the transformer from overheating instantly",
      "To ensure the motor can accelerate the connected load in the required time",
      "To match the generator frequency",
      "To prevent single phasing"
    ],
    "exp": "If a tap is selected that is too low (e.g. 50%), the resulting torque (25%) may not be enough to overcome the load inertia, causing the motor to stall.",
    "cat": "AUTO",
    "id": "T03A_149"
  },
  {
    "q": "When a surveyor asks 'Which contactor closes first in an autotransformer starter?', what is the correct answer?",
    "a": "The star (neutral) contactor closes first",
    "opts": [
      "The main run contactor closes first",
      "The delta contactor closes first",
      "The star (neutral) contactor closes first",
      "The autotransformer line contactor closes first"
    ],
    "exp": "Forming the star point is geometrically necessary before applying voltage to the transformer windings to prevent an open-circuit surge.",
    "cat": "AUTO",
    "id": "T03A_150"
  },
  {
    "q": "What specific active components does a soft starter use to control voltage?",
    "a": "Six SCR thyristors (two per phase, inverse-parallel)",
    "opts": [
      "Three large variable resistors",
      "Six SCR thyristors (two per phase, inverse-parallel)",
      "A tapped copper autotransformer",
      "A set of high-frequency IGBTs"
    ],
    "exp": "A soft starter uses solid-state silicon controlled rectifiers (thyristors), paired back-to-back in each phase, to chop the AC waveform.",
    "cat": "SVFD",
    "id": "T03A_151"
  },
  {
    "q": "How does a soft starter progressively increase the voltage delivered to the motor?",
    "a": "By controlling the firing angle of each thyristor pair",
    "opts": [
      "By controlling the firing angle of each thyristor pair",
      "By changing transformer taps mechanically",
      "By increasing the supply frequency",
      "By adding resistance to the rotor"
    ],
    "exp": "By delaying the thyristor turn-on point (firing angle) in each AC half-cycle, the RMS voltage is smoothly ramped up.",
    "cat": "SVFD",
    "id": "T03A_152"
  },
  {
    "q": "What is the typical programmable ramp time for a soft starter?",
    "a": "3–30 seconds",
    "opts": [
      "0.1–0.5 seconds",
      "3–30 seconds",
      "1–5 minutes",
      "20–50 milliseconds"
    ],
    "exp": "Depending on the application, the soft starter can be programmed to ramp up the voltage over 3 to 30 seconds for optimal smoothness.",
    "cat": "SVFD",
    "id": "T03A_153"
  },
  {
    "q": "What happens in a soft starter at the end of the starting voltage ramp?",
    "a": "A bypass contactor closes, shorting the thyristors",
    "opts": [
      "The thyristors switch to PWM mode",
      "A bypass contactor closes, shorting the thyristors",
      "The motor shifts into Delta connection",
      "The DC injection brake engages briefly"
    ],
    "exp": "Once full voltage is reached, a mechanical bypass contactor closes to route current around the thyristors, eliminating their heat losses during normal running.",
    "cat": "SVFD",
    "id": "T03A_154"
  },
  {
    "q": "What is a major operational limitation of a soft starter compared to a VFD?",
    "a": "NO speed control during running (motor runs at full speed only)",
    "opts": [
      "It generates severe continuous running harmonics",
      "It is physically much larger than a VFD",
      "NO speed control during running (motor runs at full speed only)",
      "It cannot handle frequent starts"
    ],
    "exp": "A soft starter only controls voltage during the brief start and stop phases; once bypassed, the motor runs directly on mains frequency at full speed.",
    "cat": "SVFD",
    "id": "T03A_155"
  },
  {
    "q": "When does a soft starter generate harmonic distortion on the ship's grid?",
    "a": "Generates harmonics during starting period (before bypass)",
    "opts": [
      "Only during continuous running",
      "Generates harmonics during starting period (before bypass)",
      "It never generates any harmonics",
      "Only when the bypass contactor fails"
    ],
    "exp": "The phase-angle chopping by the thyristors creates harmonic currents, but only during the brief 3-30 second ramp. Once bypassed, it creates zero harmonics.",
    "cat": "SVFD",
    "id": "T03A_156"
  },
  {
    "q": "What is the first conversion stage inside a Variable Frequency Drive (VFD)?",
    "a": "Rectifier stage: 3-phase AC supply converted to DC",
    "opts": [
      "Inverter stage: DC supply converted to 3-phase AC",
      "Rectifier stage: 3-phase AC supply converted to DC",
      "Transformer stage: 440V stepped down to 110V",
      "Smoothing stage: Capacitors filter the AC ripple"
    ],
    "exp": "A VFD first uses a diode or active rectifier bridge to convert the incoming 3-phase AC mains supply into raw Direct Current (DC).",
    "cat": "SVFD",
    "id": "T03A_157"
  },
  {
    "q": "What is the purpose of the DC link (capacitors and inductors) in a VFD?",
    "a": "Smoothes DC, stores energy and decouples the rectifier from the inverter",
    "opts": [
      "Steps up the voltage for the motor",
      "Smoothes DC, stores energy and decouples the rectifier from the inverter",
      "Provides reactive power to the main generator",
      "Converts the DC back into AC"
    ],
    "exp": "The DC link acts as an energy buffer, using large capacitors to smooth the raw rectified DC into a clean, stable DC voltage for the inverter.",
    "cat": "SVFD",
    "id": "T03A_158"
  },
  {
    "q": "What specific active switching components are used in the Inverter stage of a modern VFD?",
    "a": "IGBTs (Insulated Gate Bipolar Transistors)",
    "opts": [
      "SCR Thyristors",
      "Mechanical contactors",
      "IGBTs (Insulated Gate Bipolar Transistors)",
      "Vacuum tubes"
    ],
    "exp": "Modern VFDs use IGBTs because they can switch high currents at very high frequencies (several kHz) efficiently.",
    "cat": "SVFD",
    "id": "T03A_159"
  },
  {
    "q": "What technique do the IGBTs use to synthesise the variable AC output waveform?",
    "a": "PWM (Pulse Width Modulation)",
    "opts": [
      "PAM (Pulse Amplitude Modulation)",
      "PWM (Pulse Width Modulation)",
      "Phase-angle chopping",
      "Resonant frequency oscillation"
    ],
    "exp": "The inverter rapidly switches the DC voltage on and off using Pulse Width Modulation to simulate a sinusoidal AC current in the motor.",
    "cat": "SVFD",
    "id": "T03A_160"
  },
  {
    "q": "Why does a VFD maintain a constant V/f (Volts per Hertz) ratio?",
    "a": "To maintain motor flux at rated level at all speeds",
    "opts": [
      "To prevent the IGBTs from overheating",
      "To maintain motor flux at rated level at all speeds",
      "To bypass the thermal overload relay",
      "To increase the speed beyond synchronous speed"
    ],
    "exp": "Magnetic flux is proportional to Voltage divided by Frequency. Keeping this ratio constant ensures the motor has optimal magnetic strength and full torque without saturating the iron core.",
    "cat": "SVFD",
    "id": "T03A_161"
  },
  {
    "q": "According to the affinity laws for centrifugal loads, how is power related to motor speed?",
    "a": "Centrifugal load power ∝ speed³",
    "opts": [
      "Centrifugal load power ∝ speed",
      "Centrifugal load power ∝ speed²",
      "Centrifugal load power ∝ speed³",
      "Centrifugal load power ∝ 1/speed"
    ],
    "exp": "For pumps and fans, the required power drops with the cube of the speed, meaning massive energy savings for small speed reductions.",
    "cat": "SVFD",
    "id": "T03A_162"
  },
  {
    "q": "If a VFD reduces a centrifugal pump's speed by 20% (running at 80%), what is the approximate power saving?",
    "a": "49% power saving",
    "opts": [
      "20% power saving",
      "36% power saving",
      "49% power saving",
      "80% power saving"
    ],
    "exp": "Power = 0.8³. 0.8 × 0.8 × 0.8 = 0.512. The motor uses ~51% of full power, meaning a massive 49% power saving.",
    "cat": "SVFD",
    "id": "T03A_163"
  },
  {
    "q": "What is a major electrical disadvantage of running VFDs on a ship's network?",
    "a": "Generates harmonics (5th, 7th, 11th order) - needs harmonic filter",
    "opts": [
      "Requires massive starting current (5-8x FLC)",
      "Generates harmonics (5th, 7th, 11th order) - needs harmonic filter",
      "Causes severe voltage sags on start",
      "Requires a mechanical bypass contactor to run continuously"
    ],
    "exp": "The non-linear switching of the rectifier draws distorted current from the mains, injecting high-frequency harmonics back into the ship's grid.",
    "cat": "SVFD",
    "id": "T03A_164"
  },
  {
    "q": "Why must the motor cable connecting a VFD to a motor be screened?",
    "a": "To prevent Electromagnetic Interference (EMI) from the high-frequency PWM switching",
    "opts": [
      "To prevent Electromagnetic Interference (EMI) from the high-frequency PWM switching",
      "To contain the high short-circuit currents",
      "To provide a path for the harmonic filters",
      "To keep the cable physically rigid and protected"
    ],
    "exp": "The sharp voltage pulses from the IGBTs emit severe radio-frequency interference. A grounded screen contains this EMI, protecting the ship's automation and radios.",
    "cat": "SVFD",
    "id": "T03A_165"
  },
  {
    "q": "What size of ships are mandated to track CII under SEEMP Part III?",
    "a": "Ships ≥ 5,000 GT",
    "opts": [
      "All commercial vessels",
      "Ships ≥ 400 GT",
      "Ships ≥ 5,000 GT",
      "Ships ≥ 10,000 DWT"
    ],
    "exp": "The MARPOL regulation mandates Carbon Intensity Indicator (CII) tracking via SEEMP Part III for vessels of 5,000 Gross Tonnage and above.",
    "cat": "CII",
    "id": "T03A_166"
  },
  {
    "q": "How do VFDs directly contribute to a vessel's CII compliance?",
    "a": "They reduce fuel consumption by running loads at lower speeds when full capacity is not needed",
    "opts": [
      "They generate clean AC power directly into the grid",
      "They reduce fuel consumption by running loads at lower speeds when full capacity is not needed",
      "They filter out carbon emissions from the exhaust stack",
      "They force the generator to run at higher speeds"
    ],
    "exp": "By slowing down centrifugal pumps and fans using VFDs, the ship burns significantly less auxiliary fuel, lowering its total carbon emissions.",
    "cat": "CII",
    "id": "T03A_167"
  },
  {
    "q": "When VFDs are integrated with an Energy Storage System (ESS), how does the PMS operate the generators?",
    "a": "Runs generators at their optimal Specific Fuel Consumption (SFC) curve point",
    "opts": [
      "Runs generators at their maximum overload capacity",
      "Runs generators at their optimal Specific Fuel Consumption (SFC) curve point",
      "Runs generators constantly at low load to save wear",
      "Shuts down all generators and runs entirely on batteries"
    ],
    "exp": "Load levelling allows the Power Management System to run the diesel engine at its peak efficiency sweet spot (lowest SFC), rather than inefficient low-load operation.",
    "cat": "CII",
    "id": "T03A_168"
  },
  {
    "q": "What is the ultimate regulatory benefit of running generators at peak SFC efficiency?",
    "a": "Directly improves the annual A–E CII rating",
    "opts": [
      "Removes the need for a Chief Engineer",
      "Directly improves the annual A–E CII rating",
      "Exempts the ship from MARPOL Annex VI",
      "Allows the ship to burn high-sulphur heavy fuel oil"
    ],
    "exp": "Higher efficiency means less fuel burned per unit of energy, generating less CO2, which mathematically yields a better A through E letter rating.",
    "cat": "CII",
    "id": "T03A_169"
  },
  {
    "q": "Where are the annual CII results submitted?",
    "a": "IMO Fuel Oil Consumption Database (IMO DCS)",
    "opts": [
      "The ship's classification society local office",
      "IMO Fuel Oil Consumption Database (IMO DCS)",
      "The local port state control authority",
      "The engine manufacturer's server"
    ],
    "exp": "Vessels must submit their fuel consumption and transport work data annually to the IMO Data Collection System (DCS) for CII verification.",
    "cat": "CII",
    "id": "T03A_170"
  },
  {
    "q": "What happens if a ship receives a D-rating for 3 consecutive years?",
    "a": "Triggers a mandatory Corrective Action Plan (CAP)",
    "opts": [
      "The ship is immediately scrapped",
      "The Chief Engineer loses their license",
      "Triggers a mandatory Corrective Action Plan (CAP)",
      "The ship is fined €50,000"
    ],
    "exp": "Consistent underperformance (3 years of D) forces the vessel operator to develop and submit a Corrective Action Plan to improve efficiency.",
    "cat": "CII",
    "id": "T03A_171"
  },
  {
    "q": "What rating triggers an immediate Corrective Action Plan (CAP) after just one year?",
    "a": "An E-rating",
    "opts": [
      "An A-rating",
      "A C-rating",
      "A D-rating",
      "An E-rating"
    ],
    "exp": "An 'E' rating is the worst performance band and requires an immediate CAP as part of the SEEMP.",
    "cat": "CII",
    "id": "T03A_172"
  },
  {
    "q": "Which types of loads provide the highest energy saving return when fitted with VFDs?",
    "a": "Centrifugal loads like pumps and fans",
    "opts": [
      "Resistive heating loads",
      "Centrifugal loads like pumps and fans",
      "Constant-torque loads like cranes",
      "Air compressors and steering gear"
    ],
    "exp": "Due to the affinity laws (power ∝ speed³), centrifugal pumps and HVAC fans offer massive exponential power savings when speed is reduced.",
    "cat": "CII",
    "id": "T03A_173"
  },
  {
    "q": "In the context of SEEMP, lowering fuel burn directly equates to what?",
    "a": "Lower CO2 emissions per cargo-tonne-mile",
    "opts": [
      "Higher NOX emissions",
      "Lower CO2 emissions per cargo-tonne-mile",
      "Increased generator maintenance",
      "A reduction in ship's gross tonnage"
    ],
    "exp": "The CII formula measures carbon intensity, which is directly tied to the mass of CO2 emitted relative to the ship's transport work (capacity × distance).",
    "cat": "CII",
    "id": "T03A_174"
  },
  {
    "q": "Why would a surveyor ask about VFDs in relation to SEEMP Part III compliance?",
    "a": "SEEMP Part III requires granular CII tracking, and VFDs are a primary method to cut fuel burn and improve the rating",
    "opts": [
      "Because VFDs are banned under the new regulations",
      "Because VFDs consume massive amounts of reactive power",
      "SEEMP Part III requires granular CII tracking, and VFDs are a primary method to cut fuel burn and improve the rating",
      "To check if the ETO knows how to bypass the VFD"
    ],
    "exp": "VFDs are the most effective technical upgrade a ship can make to lower auxiliary fuel consumption, directly addressing the new CII mandates.",
    "cat": "CII",
    "id": "T03A_175"
  },
  {
    "q": "What is the fundamental fail-safe mechanism of a magnetic contactor?",
    "a": "Loss of control voltage → motor stops",
    "opts": [
      "Loss of control voltage → motor accelerates",
      "Loss of control voltage → motor runs in reverse",
      "Loss of control voltage → motor stops",
      "Loss of main voltage → control coil latches permanently"
    ],
    "exp": "Because an electromagnet holds the contacts closed against a return spring, any failure of the control supply causes the spring to immediately open the circuit, stopping the motor safely.",
    "cat": "OLR",
    "id": "T03A_176"
  },
  {
    "q": "What utilization category must a contactor's main contacts have to be suitable for switching motor loads?",
    "a": "Rated AC-3 for motor duty",
    "opts": [
      "Rated AC-1 for resistive duty",
      "Rated AC-3 for motor duty",
      "Rated DC-1 for battery duty",
      "Rated IP55 for wet duty"
    ],
    "exp": "AC-3 rating means the contacts are designed to safely make the high starting current (6-8x FLC) and break the running current of a squirrel-cage induction motor.",
    "cat": "OLR",
    "id": "T03A_177"
  },
  {
    "q": "What is the primary function of auxiliary contacts on a magnetic contactor?",
    "a": "Used for interlocking, self-hold (seal-in) circuits, and indication",
    "opts": [
      "To carry the main motor phase current",
      "To step down the voltage to 110V",
      "Used for interlocking, self-hold (seal-in) circuits, and indication",
      "To provide direct thermal overload protection"
    ],
    "exp": "Auxiliary contacts are small, low-current NO/NC contacts mechanically linked to the main armature, used to switch logic signals for automation, holding circuits, and lamps.",
    "cat": "OLR",
    "id": "T03A_178"
  },
  {
    "q": "What is a typical control voltage used to energise the coil of a marine contactor?",
    "a": "110V AC or 24V DC",
    "opts": [
      "440V AC or 690V AC",
      "110V AC or 24V DC",
      "5V DC or 12V DC",
      "1000V AC or higher"
    ],
    "exp": "For safety and isolation from the main 440V power circuit, control circuits typically utilize 110V AC (via a transformer) or 24V DC.",
    "cat": "OLR",
    "id": "T03A_179"
  },
  {
    "q": "What common mechanical fault can cause an AC contactor coil to overheat and burn out?",
    "a": "If the armature is mechanically prevented from closing",
    "opts": [
      "If the motor draws too much running current",
      "If the auxiliary contacts fail to open",
      "If the armature is mechanically prevented from closing",
      "If the thermal overload trips too quickly"
    ],
    "exp": "An open AC electromagnet has very low impedance. It draws a massive 'inrush' current intended to last milliseconds. If a mechanical jam stops it closing, it draws this high current indefinitely and burns out.",
    "cat": "OLR",
    "id": "T03A_180"
  },
  {
    "q": "What is the active sensing component inside a thermal overload relay?",
    "a": "Three bimetallic strips",
    "opts": [
      "Three glass fuses",
      "Three bimetallic strips",
      "A microprocessor and current transformer",
      "A spring-loaded magnetic plunger"
    ],
    "exp": "It uses three bimetallic strips (one for each phase) that carry the motor current and bend as they heat up.",
    "cat": "OLR",
    "id": "T03A_181"
  },
  {
    "q": "Why does the bimetallic strip in an overload relay bend when heated?",
    "a": "Due to the differential thermal expansion of the two bonded metals",
    "opts": [
      "Because the current directly creates a magnetic pulling force",
      "Because heat softens the metal allowing a spring to pull it",
      "Due to the differential thermal expansion of the two bonded metals",
      "Because the internal pressure of the relay housing increases"
    ],
    "exp": "The strip consists of two different metals welded together. When heated by I²R losses, one metal expands more than the other, forcing the strip to curve.",
    "cat": "OLR",
    "id": "T03A_182"
  },
  {
    "q": "What defines the tripping characteristic of a thermal overload relay?",
    "a": "Inverse time delay (I²t characteristic)",
    "opts": [
      "Instantaneous trip at set value",
      "Inverse time delay (I²t characteristic)",
      "Fixed time delay regardless of current",
      "Voltage-dependent delay"
    ],
    "exp": "Because it relies on heat accumulation, a small overload takes a long time to heat the strip and trip, while a massive overload heats it and trips it very quickly.",
    "cat": "OLR",
    "id": "T03A_183"
  },
  {
    "q": "What exact action stops the motor when the thermal overload relay bends past its threshold?",
    "a": "It actuates a trip mechanism that opens the normally-closed (NC) contact in the contactor coil circuit",
    "opts": [
      "It physically pulls the main contacts apart",
      "It blows a small glass fuse in the supply line",
      "It actuates a trip mechanism that opens the normally-closed (NC) contact in the contactor coil circuit",
      "It shorts out the motor phases to brake it"
    ],
    "exp": "The thermal relay does not break main power directly. Its mechanism toggles a small NC auxiliary contact wired in series with the contactor coil, causing the contactor to drop out.",
    "cat": "OLR",
    "id": "T03A_184"
  },
  {
    "q": "What critical fault condition is inadequately detected by an older single-element thermal overload relay?",
    "a": "Single phasing",
    "opts": [
      "Sustained symmetric overload",
      "Instantaneous short circuit",
      "Single phasing",
      "Bearing seizure"
    ],
    "exp": "A single element relay (or non-differential type) may not trip fast enough on the 1.73x current rise of single phasing to prevent winding damage.",
    "cat": "OLR",
    "id": "T03A_185"
  },
  {
    "q": "During a single phasing event while running, what happens to the current in the remaining two healthy phases?",
    "a": "They draw roughly √3 × rated current (≈173% FLA)",
    "opts": [
      "They drop to zero instantly",
      "They draw exactly the same normal rated current",
      "They draw roughly √3 × rated current (≈173% FLA)",
      "They draw 6-8x starting current"
    ],
    "exp": "To maintain the mechanical output torque with only two phases, the motor draws approximately 1.73 times its normal full load current through the remaining windings.",
    "cat": "OLR",
    "id": "T03A_186"
  },
  {
    "q": "What type of thermal relay is required for reliable protection against single phasing?",
    "a": "Three-element relays with a differential trip mechanism",
    "opts": [
      "Single-element slow blow relays",
      "Three-element relays with a differential trip mechanism",
      "A standard thermistor relay",
      "An undervoltage relay"
    ],
    "exp": "A differential trip mechanism compares the bending of all three strips; if one is cold (lost phase) and two are hot, it trips the mechanism much faster than an overload alone.",
    "cat": "OLR",
    "id": "T03A_187"
  },
  {
    "q": "What must happen before a thermal overload relay can be successfully reset?",
    "a": "The bimetallic strip must cool and return to its straight position",
    "opts": [
      "The contactor coil must be replaced",
      "The bimetallic strip must cool and return to its straight position",
      "The main power supply must be cycled off and on",
      "The motor must be spun by hand"
    ],
    "exp": "Because it is a thermal device, it holds the trip mechanism open until the internal metal strips physically cool down and straighten out.",
    "cat": "OLR",
    "id": "T03A_188"
  },
  {
    "q": "What is the standard current setting range for a thermal overload relay?",
    "a": "105–115% of rated FLA",
    "opts": [
      "50–75% of rated FLA",
      "100% exactly",
      "105–115% of rated FLA",
      "150–200% of rated FLA"
    ],
    "exp": "It is typically set slightly above the motor's Full Load Amperage (FLA) to prevent nuisance tripping during normal minor load fluctuations, while still protecting against sustained heat.",
    "cat": "OLR",
    "id": "T03A_189"
  },
  {
    "q": "What visual indication shows that the thermal overload relay, rather than another fault, stopped the motor?",
    "a": "A trip indicator flag shows on the relay",
    "opts": [
      "The contactor coil turns black",
      "The bimetallic strips glow red",
      "A trip indicator flag shows on the relay",
      "The main fuses blow"
    ],
    "exp": "A mechanical pop-out button, flag, or lever physically indicates that the overload mechanism has toggled and requires resetting.",
    "cat": "OLR",
    "id": "T03A_190"
  },
  {
    "q": "What is the correct setting for a thermal overload relay on a standard motor?",
    "a": "105–115% FLA",
    "opts": [
      "80–90% FLA",
      "105–115% FLA",
      "150–250% FLA",
      "600–800% FLA"
    ],
    "exp": "The thermal relay is set to 105-115% of Full Load Amperage to allow normal full load operation without nuisance tripping while preventing long-term thermal damage.",
    "cat": "PROT",
    "id": "T03A_191"
  },
  {
    "q": "What is the maximum acceptable overload setting for a motor with a 1.15 service factor?",
    "a": "Up to 125%",
    "opts": [
      "Up to 115%",
      "Up to 125%",
      "Up to 150%",
      "Up to 200%"
    ],
    "exp": "If the motor nameplate specifies a service factor of 1.15, the relay can be set higher, up to 125% of FLA, safely.",
    "cat": "PROT",
    "id": "T03A_192"
  },
  {
    "q": "Where is a winding thermistor physically located?",
    "a": "Embedded in stator winding",
    "opts": [
      "Inside the terminal box",
      "Attached to the rotor shaft",
      "Embedded in stator winding",
      "On the outer cooling fins"
    ],
    "exp": "Thermistors (PTC/NTC) are embedded directly within the stator coils during manufacturing to measure the actual core temperature of the insulation.",
    "cat": "PROT",
    "id": "T03A_193"
  },
  {
    "q": "Which components provide short circuit protection for a motor circuit?",
    "a": "HRC fuse / MCB",
    "opts": [
      "Thermal overload relay",
      "Winding thermistor",
      "HRC fuse / MCB",
      "Earth fault relay"
    ],
    "exp": "High Rupturing Capacity fuses or Magnetic Circuit Breakers provide instantaneous tripping to clear massive fault currents.",
    "cat": "PROT",
    "id": "T03A_194"
  },
  {
    "q": "How is the short circuit protection (HRC fuse) rated relative to motor current?",
    "a": "Instantaneous at 1.5–2.5 × FLC",
    "opts": [
      "Inverse time delay at 105% FLC",
      "Instantaneous at 1.5–2.5 × FLC",
      "Instantaneous at 10× FLC",
      "Time delay at 6–8× FLC"
    ],
    "exp": "Fuses must be sized between 1.5 and 2.5 times FLC to survive the starting surge without blowing, while still clearing short circuits quickly.",
    "cat": "PROT",
    "id": "T03A_195"
  },
  {
    "q": "What is a typical trip setting for an Earth fault relay on a TN system?",
    "a": "Residual current > set value (typically 30–100 mA on TN systems)",
    "opts": [
      "Voltage drop > 10V",
      "Residual current > set value (typically 30–100 mA on TN systems)",
      "Current > 1.5x FLC",
      "Frequency drift > 2Hz"
    ],
    "exp": "Earth fault relays detect leakage current escaping to the frame/earth, typically set to trip at very low residual current values like 30-100 mA.",
    "cat": "PROT",
    "id": "T03A_196"
  },
  {
    "q": "At what voltage level does an undervoltage relay typically operate?",
    "a": "~85% rated voltage",
    "opts": [
      "~50% rated voltage",
      "~75% rated voltage",
      "~85% rated voltage",
      "~95% rated voltage"
    ],
    "exp": "An undervoltage relay drops out the contactor if supply voltage sags below approximately 85% of rated, preventing the motor from drawing excessive current.",
    "cat": "PROT",
    "id": "T03A_197"
  },
  {
    "q": "What is a secondary safety purpose of the undervoltage relay/release?",
    "a": "Prevents automatic restart after blackout on safety-critical machinery",
    "opts": [
      "It clears phase-to-phase short circuits",
      "It provides direct thermal protection to the windings",
      "Prevents automatic restart after blackout on safety-critical machinery",
      "It stops the motor if the bearings overheat"
    ],
    "exp": "By requiring a manual reset, it ensures that dangerous machinery (like a lathe or winch) does not suddenly roar to life unexpectedly when ship's power is restored.",
    "cat": "PROT",
    "id": "T03A_198"
  },
  {
    "q": "How quickly does a dedicated phase failure relay react to the loss of a phase?",
    "a": "Instantaneous on loss of any phase",
    "opts": [
      "Inverse time delay based on I²t",
      "After a 10 second timing period",
      "Instantaneous on loss of any phase",
      "Only after the motor stalls completely"
    ],
    "exp": "Unlike a thermal relay which must heat up, a dedicated electronic phase failure relay detects the voltage/current unbalance and trips the circuit instantly.",
    "cat": "PROT",
    "id": "T03A_199"
  },
  {
    "q": "If a phase fails while running, how much current do the remaining two phases carry?",
    "a": "√3 × (≈1.73×) normal current",
    "opts": [
      "Exactly normal current",
      "√3 × (≈1.73×) normal current",
      "3 × normal current",
      "6-8 × normal current"
    ],
    "exp": "In a single phasing event under load, the remaining two legs draw approximately 1.73 times normal running current, causing rapid destructive heating.",
    "cat": "PROT",
    "id": "T03A_200"
  },
  {
    "q": "What is the typical alarm setting for a PT100 bearing temperature sensor?",
    "a": "Alarm 80°C",
    "opts": [
      "Alarm 60°C",
      "Alarm 80°C",
      "Alarm 95°C",
      "Alarm 120°C"
    ],
    "exp": "Bearing temperature sensors typically trigger an early warning alarm at 80°C to alert engineers before seizure occurs.",
    "cat": "PROT",
    "id": "T03A_201"
  },
  {
    "q": "What is the typical trip setting for a PT100 bearing temperature sensor?",
    "a": "Trip 95°C",
    "opts": [
      "Trip 80°C",
      "Trip 95°C",
      "Trip 130°C",
      "Trip 155°C"
    ],
    "exp": "To prevent total seizure, journal damage, and rotor-to-stator contact, the protection trips the motor when bearing temp reaches 95°C.",
    "cat": "PROT",
    "id": "T03A_202"
  },
  {
    "q": "What is the primary purpose of the thermal overload relay?",
    "a": "Sustained overload - prevents winding insulation thermal degradation",
    "opts": [
      "To clear instantaneous short circuits",
      "To detect single phasing instantly",
      "Sustained overload - prevents winding insulation thermal degradation",
      "To monitor actual winding temperature regardless of current"
    ],
    "exp": "It protects against prolonged overcurrent which generates heat over time, degrading the insulation life of the motor.",
    "cat": "PROT",
    "id": "T03A_203"
  },
  {
    "q": "What makes a winding thermistor superior to an overload relay in certain situations?",
    "a": "Detects overheating regardless of cause (ambient, ventilation failure, overload)",
    "opts": [
      "It reacts much faster to a short circuit",
      "Detects overheating regardless of cause (ambient, ventilation failure, overload)",
      "It can detect bearing vibration",
      "It is cheaper and easier to replace"
    ],
    "exp": "Because it measures actual physical temperature, it protects the motor if the cooling fan fails or ambient temp is too high - conditions an overload relay cannot detect since current remains normal.",
    "cat": "PROT",
    "id": "T03A_204"
  },
  {
    "q": "What is the memory mnemonic to remember the 7 motor protections asked by surveyors?",
    "a": "OT SEU PB",
    "opts": [
      "VFD DOL SR",
      "OT SEU PB",
      "RMF SLIP Ns",
      "KY KD KM"
    ],
    "exp": "OT SEU PB stands for Overload, Thermistor, Short circuit, Earth fault, Undervoltage, Phase failure, Bearing temp.",
    "cat": "PROT",
    "id": "T03A_205"
  }

]);
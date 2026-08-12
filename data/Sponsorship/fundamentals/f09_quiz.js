window.loadQuizzes("F09_Induction", [

  /* ═══════════ CONSTRUCTION ═══════════ */
  {
    "q": "What are the two main parts of an induction motor?",
    "a": "A stationary stator and a rotating rotor, separated by an air gap",
    "opts": ["A stationary stator and a rotating rotor, separated by an air gap", "A stationary rotor and a rotating stator", "An armature and a field winding", "A commutator and a set of brushes"],
    "exp": "The stator is the stationary outer part carrying the three phase winding, the rotor is the rotating inner part, and a small air gap separates them. Terms like armature/field winding and commutator belong to DC machines, not induction motors.",
    "cat": "CONSTRUCTION",
    "id": "F09_001"
  },
  {
    "q": "Why is the stator core built from thin, insulated laminations rather than a solid block of steel?",
    "a": "To reduce eddy current loss in the core",
    "opts": ["To reduce the resistance of the stator winding", "To increase the strength of the rotating field", "To reduce eddy current loss in the core", "To allow the core to be wound with fewer turns"],
    "exp": "A solid steel core would allow large circulating eddy currents driven by the changing flux, wasting energy as heat. Thin, mutually insulated laminations break up those current paths and cut the loss sharply. Laminations have nothing to do with winding turns or field strength.",
    "cat": "CONSTRUCTION",
    "id": "F09_002"
  },
  {
    "q": "How is a squirrel cage rotor constructed?",
    "a": "Copper or aluminium bars laid in slots around a laminated core, short circuited together at each end by conducting end rings",
    "opts": ["A three phase winding brought out to three insulated slip rings", "Copper or aluminium bars laid in slots around a laminated core, short circuited together at each end by conducting end rings", "Permanent magnets embedded in a laminated core", "A single coil wound directly onto the shaft"],
    "exp": "The bars are permanently shorted by end rings, giving a closed rotor circuit built into the casting with no external connection at all. The slip ring description belongs to the wound rotor, not the squirrel cage.",
    "cat": "CONSTRUCTION",
    "id": "F09_003"
  },
  {
    "q": "In a slip ring (wound rotor) induction motor, how is the rotor circuit brought out to the outside world?",
    "a": "Through three insulated slip rings on the shaft, contacted by carbon brushes",
    "opts": ["Through a commutator and brush gear", "Directly wired to the supply terminals", "Through three insulated slip rings on the shaft, contacted by carbon brushes", "Through induction coils mounted outside the frame"],
    "exp": "The rotor carries its own three phase winding, similar to the stator, with the winding ends brought out via three slip rings and brushes to an external circuit, normally starting resistors. A commutator is a DC machine feature, not used here.",
    "cat": "CONSTRUCTION",
    "id": "F09_004"
  },
  {
    "q": "Why is the squirrel cage induction motor preferred over the slip ring type for the great majority of shipboard applications?",
    "a": "It has no brushes or slip rings to spark, wear, or be attacked by humid, salt laden air, and needs almost no maintenance",
    "opts": ["It produces a higher starting torque than a slip ring motor", "It has no brushes or slip rings to spark, wear, or be attacked by humid, salt laden air, and needs almost no maintenance", "It can run at a higher slip than a slip ring motor", "It is the only type that can be connected in star"],
    "exp": "The real answer to \"why squirrel cage at sea\" is about ruggedness and maintenance-free sealed construction in a hostile marine environment, not starting torque, which is actually the slip ring motor's advantage. A list of construction features alone misses the point being asked.",
    "cat": "CONSTRUCTION",
    "id": "F09_005"
  },
  {
    "q": "Slip ring (wound rotor) induction motors were traditionally chosen for shipboard applications needing:",
    "a": "High starting torque with controlled starting current, such as cargo winches and cranes",
    "opts": ["Sealed, maintenance free operation with no external rotor circuit", "High starting torque with controlled starting current, such as cargo winches and cranes", "The lowest possible cost for small fan and pump motors", "Constant speed regardless of load, with no starting surge at all"],
    "exp": "External rotor resistance lets a wound rotor motor develop high starting torque while limiting starting current, which suited winches and cranes. That controllability is now largely superseded by VFDs, and it is the opposite of the squirrel cage's maintenance-free simplicity.",
    "cat": "CONSTRUCTION",
    "id": "F09_006"
  },
  {
    "q": "In the most common induction motor design, how is the rotor electrically connected to the supply?",
    "a": "It is not electrically connected at all; everything in the rotor circuit is induced",
    "opts": ["Directly in parallel with the stator winding", "Through carbon brushes and slip rings", "It is not electrically connected at all; everything in the rotor circuit is induced", "Through a commutator and brush gear"],
    "exp": "This is the defining feature of a squirrel cage induction motor: no external electrical connection to the rotor whatsoever. Everything, EMF and current, arises purely by induction from the rotating field.",
    "cat": "CONSTRUCTION",
    "id": "F09_007"
  },

  /* ═══════════ ROTATING MAGNETIC FIELD ═══════════ */
  {
    "q": "What produces the rotating magnetic field in an induction motor's stator?",
    "a": "Three phase currents, 120 degrees apart in time, flowing in three windings 120 degrees apart in space",
    "opts": ["A single winding fed with a pulsed DC supply", "Three phase currents, 120 degrees apart in time, flowing in three windings 120 degrees apart in space", "A permanent magnet mounted on the rotor", "A commutator switching current direction mechanically"],
    "exp": "Three windings, displaced 120 mechanical degrees, carrying currents displaced 120 electrical degrees in time, combine to produce a field displaced in space that sweeps round continuously. Permanent magnets and commutators are not part of an induction motor's field production.",
    "cat": "RMF",
    "id": "F09_008"
  },
  {
    "q": "What is the defining characteristic of the resultant field produced by the three stator windings?",
    "a": "A field of constant magnitude whose direction rotates steadily around the stator bore",
    "opts": ["A stationary field of constant direction and magnitude", "A field of varying magnitude that pulses along fixed axes", "A field of constant magnitude whose direction rotates steadily around the stator bore", "A field that reverses direction every half cycle but does not rotate"],
    "exp": "Adding the three individual winding fields as vectors through a cycle shows the resultant does not grow and shrink along fixed axes, it stays constant in magnitude while its direction sweeps continuously around the bore.",
    "cat": "RMF",
    "id": "F09_009"
  },
  {
    "q": "For a two pole stator winding, how many revolutions does the rotating field make per electrical cycle of the supply?",
    "a": "One revolution",
    "opts": ["Two revolutions", "One revolution", "Half a revolution", "Four revolutions"],
    "exp": "For a two pole winding the field completes one full mechanical revolution for every electrical cycle of the supply. With more poles, the field advances a smaller mechanical angle per cycle, which is why higher pole counts give lower synchronous speeds.",
    "cat": "RMF",
    "id": "F09_010"
  },
  {
    "q": "By what physical law does the rotating field induce an EMF in the rotor conductors?",
    "a": "Faraday's law: a conductor cut by a changing flux has an EMF induced in it",
    "opts": ["Ohm's law", "Faraday's law: a conductor cut by a changing flux has an EMF induced in it", "Ampere's circuital law", "Kirchhoff's voltage law"],
    "exp": "The rotating field sweeping past the rotor bars represents a changing flux linkage, and Faraday's law of electromagnetic induction is what gives the induced EMF in the bars. Ohm's law and Kirchhoff's law govern the resulting circuit, not the induction itself.",
    "cat": "RMF",
    "id": "F09_011"
  },
  {
    "q": "Once an EMF is induced in a squirrel cage rotor bar, why does current actually flow?",
    "a": "Because the bars are short circuited by the end rings, forming a closed circuit",
    "opts": ["Because the rotor is connected directly to the supply terminals", "Because the bars are short circuited by the end rings, forming a closed circuit", "Because slip rings connect the rotor circuit to earth", "Because the stator winding is directly coupled to the rotor bars by wire"],
    "exp": "An induced EMF alone cannot drive current without a closed path. The end rings short every bar together, giving that closed circuit, so the induced EMF drives real current around the rotor.",
    "cat": "RMF",
    "id": "F09_012"
  },
  {
    "q": "What produces the torque that turns the rotor, once current flows in the rotor bars?",
    "a": "A force on the current-carrying rotor conductors sitting in the magnetic field (the motor effect)",
    "opts": ["A force on the current-carrying rotor conductors sitting in the magnetic field (the motor effect)", "A direct electrostatic attraction between stator and rotor", "Magnetic hysteresis losses in the rotor core", "The weight imbalance of the rotating rotor"],
    "exp": "A current-carrying conductor sitting in a magnetic field experiences a force, the motor effect. That force on every rotor bar, summed around the rotor, is the torque that turns it. Hysteresis is a loss mechanism, not the source of torque.",
    "cat": "RMF",
    "id": "F09_013"
  },
  {
    "q": "Why is this type of machine called an \"induction\" motor?",
    "a": "Because the rotor is never electrically connected to the supply; it works entirely by what is induced into it",
    "opts": ["Because it requires a series inductor to limit starting current", "Because it induces a magnetic field into the surrounding steel structure", "Because the rotor is never electrically connected to the supply; it works entirely by what is induced into it", "Because its speed is controlled inductively by an external starter"],
    "exp": "The chain, rotating field, induced EMF, induced current, force on a current-carrying conductor, happens entirely without any wired connection between rotor and supply. That is exactly what the name \"induction\" motor describes.",
    "cat": "RMF",
    "id": "F09_014"
  },

  /* ═══════════ SYNCHRONOUS SPEED ═══════════ */
  {
    "q": "Synchronous speed N_s of an induction motor's rotating field is given by:",
    "a": "N_s = 120f / P",
    "opts": ["N_s = 120f / P", "N_s = f / 120P", "N_s = 120P / f", "N_s = P / 120f"],
    "exp": "N_s = 120f/P, with f the supply frequency in Hz and P the number of poles. Getting the formula inverted is the most common slip on this recall question.",
    "cat": "SYNCSPEED",
    "id": "F09_015"
  },
  {
    "q": "What two factors alone determine synchronous speed?",
    "a": "Supply frequency and the number of poles the winding is wound for",
    "opts": ["Supply voltage and load torque", "Supply frequency and the number of poles the winding is wound for", "Rotor resistance and slip", "Supply frequency and rotor current"],
    "exp": "N_s = 120f/P depends only on frequency and pole count. Voltage, load, rotor resistance and slip all affect the actual running speed and current, but none of them appear in the synchronous speed formula.",
    "cat": "SYNCSPEED",
    "id": "F09_016"
  },
  {
    "q": "A motor is wound for 4 poles and supplied at 50 Hz. What is its synchronous speed?",
    "a": "1500 rpm",
    "opts": ["1500 rpm", "1000 rpm", "3000 rpm", "750 rpm"],
    "exp": "N_s = 120 x 50 / 4 = 1500 rpm. Using 6 poles instead of 4 in the same calculation gives the 1000 rpm distractor.",
    "cat": "SYNCSPEED",
    "id": "F09_017"
  },
  {
    "q": "A motor is wound for 6 poles and supplied at 50 Hz. What is its synchronous speed?",
    "a": "1000 rpm",
    "opts": ["1500 rpm", "1200 rpm", "1000 rpm", "833 rpm"],
    "exp": "N_s = 120 x 50 / 6 = 1000 rpm. 1200 rpm would be the answer for 6 poles at 60 Hz, not 50 Hz.",
    "cat": "SYNCSPEED",
    "id": "F09_018"
  },
  {
    "q": "A motor is wound for 4 poles and supplied at 60 Hz. What is its synchronous speed?",
    "a": "1800 rpm",
    "opts": ["1500 rpm", "2000 rpm", "1200 rpm", "1800 rpm"],
    "exp": "N_s = 120 x 60 / 4 = 1800 rpm. This is the standard 60 Hz equivalent of the 1500 rpm, 4 pole, 50 Hz case.",
    "cat": "SYNCSPEED",
    "id": "F09_019"
  },
  {
    "q": "A motor is wound for 6 poles and supplied at 60 Hz. What is its synchronous speed?",
    "a": "1200 rpm",
    "opts": ["1000 rpm", "1200 rpm", "1500 rpm", "1800 rpm"],
    "exp": "N_s = 120 x 60 / 6 = 1200 rpm.",
    "cat": "SYNCSPEED",
    "id": "F09_020"
  },
  {
    "q": "A 50 Hz induction motor is measured running at approximately 2900 rpm. How many poles does it have?",
    "a": "2 pole",
    "opts": ["4 pole", "6 pole", "2 pole", "8 pole"],
    "exp": "The rotor never actually reaches synchronous speed, so find the nearest standard synchronous speed above 2900 rpm, which is 3000 rpm, then solve P = 120 x 50 / 3000 = 2 poles.",
    "cat": "SYNCSPEED",
    "id": "F09_021"
  },
  {
    "q": "A 50 Hz induction motor is measured running at approximately 960 rpm. How many poles does it have?",
    "a": "6 pole",
    "opts": ["4 pole", "8 pole", "6 pole", "2 pole"],
    "exp": "The nearest standard synchronous speed above 960 rpm is 1000 rpm. P = 120 x 50 / 1000 = 6 poles. Reading straight off 960 rpm without rounding up to the standard synchronous value would give a wrong, non-integer pole count.",
    "cat": "SYNCSPEED",
    "id": "F09_022"
  },
  {
    "q": "Why can you not calculate the number of poles directly from a motor's measured running speed using N_s = 120f/P?",
    "a": "Because the rotor never actually reaches synchronous speed; you must first find the nearest standard synchronous speed above the measured speed",
    "opts": ["Because the formula only applies to slip ring motors", "Because the measured speed already includes the effect of load torque on frequency", "Because P must always be an odd number", "Because the rotor never actually reaches synchronous speed; you must first find the nearest standard synchronous speed above the measured speed"],
    "exp": "A running induction motor always operates at some slip below N_s, so its measured speed is slightly less than the true synchronous value. You round up to the nearest standard synchronous speed first, then solve for poles, which always come in even numbers.",
    "cat": "SYNCSPEED",
    "id": "F09_023"
  },

  /* ═══════════ SLIP ═══════════ */
  {
    "q": "Slip, s, of an induction motor is defined as:",
    "a": "s = (N_s − N_r) / N_s",
    "opts": ["s = (N_s − N_r) / N_s", "s = N_r / N_s", "s = (N_s + N_r) / N_s", "s = N_s / N_r"],
    "exp": "Slip is the fractional difference between synchronous speed and actual rotor speed, expressed relative to synchronous speed. Using N_r/N_s instead gives (1-s), a common inversion error.",
    "cat": "SLIP",
    "id": "F09_024"
  },
  {
    "q": "Why can the rotor of an induction motor never reach synchronous speed while driving a load?",
    "a": "At synchronous speed there would be no relative motion between field and rotor, so no induced EMF, no rotor current, and no torque",
    "opts": ["At synchronous speed there would be no relative motion between field and rotor, so no induced EMF, no rotor current, and no torque", "The rotor's mechanical inertia physically prevents it from ever spinning that fast", "Friction losses always exceed the torque available near synchronous speed", "The stator winding would burn out if the rotor reached synchronous speed"],
    "exp": "Zero relative motion between field and rotor means zero rate of change of flux linkage in the rotor bars, so zero induced EMF, zero current, and zero torque, other than friction. A rotor with no driving torque would simply slow back down, so it always settles slightly below N_s.",
    "cat": "SLIP",
    "id": "F09_025"
  },
  {
    "q": "At standstill, before an induction motor starts turning, what is the slip?",
    "a": "1 (100 percent)",
    "opts": ["0", "0.5 (50 percent)", "1 (100 percent)", "Undefined"],
    "exp": "At standstill N_r = 0, so s = (N_s − 0)/N_s = 1. As the rotor accelerates, slip falls steadily from this maximum value toward its small running value.",
    "cat": "SLIP",
    "id": "F09_026"
  },
  {
    "q": "Typical full load slip for a standard induction motor is roughly:",
    "a": "2 to 5 percent",
    "opts": ["2 to 5 percent", "20 to 30 percent", "0.1 to 0.5 percent", "10 to 15 percent"],
    "exp": "Full load slip is normally a few percent, which is why the motor is said to run at almost constant speed. 20 to 30 percent would already be well past breakdown torque, an abnormal and unstable operating condition.",
    "cat": "SLIP",
    "id": "F09_027"
  },
  {
    "q": "A motor has a synchronous speed of 1500 rpm and is measured running at 1450 rpm. What is the slip?",
    "a": "3.33%",
    "opts": ["3.33%", "5%", "50%", "0.33%"],
    "exp": "s = (1500 − 1450)/1500 = 50/1500 = 0.0333, or 3.33%.",
    "cat": "SLIP",
    "id": "F09_028"
  },
  {
    "q": "A motor has a synchronous speed of 1000 rpm and is measured running at 960 rpm. What is the slip?",
    "a": "4%",
    "opts": ["4%", "6%", "40%", "0.4%"],
    "exp": "s = (1000 − 960)/1000 = 40/1000 = 0.04, or 4%.",
    "cat": "SLIP",
    "id": "F09_029"
  },
  {
    "q": "A motor has a synchronous speed of 1500 rpm and runs at 4% slip. What is the actual rotor speed?",
    "a": "1440 rpm",
    "opts": ["1440 rpm", "1560 rpm", "1460 rpm", "1400 rpm"],
    "exp": "N_r = N_s x (1 − s) = 1500 x 0.96 = 1440 rpm. Adding instead of subtracting the slip fraction gives the 1560 rpm distractor.",
    "cat": "SLIP",
    "id": "F09_030"
  },

  /* ═══════════ ROTOR FREQUENCY & EMF ═══════════ */
  {
    "q": "Rotor frequency, f_r, as a function of slip is given by:",
    "a": "f_r = s × f",
    "opts": ["f_r = s × f", "f_r = f / s", "f_r = (1 − s) × f", "f_r = s + f"],
    "exp": "Rotor frequency depends on the relative speed between field and rotor, which is exactly what slip measures, so f_r = s x f, where f is the supply frequency.",
    "cat": "ROTORFREQ",
    "id": "F09_031"
  },
  {
    "q": "At standstill, why does the rotor frequency equal the supply frequency exactly?",
    "a": "Because slip s = 1 at standstill, so f_r = s × f = f",
    "opts": ["Because slip s = 1 at standstill, so f_r = s × f = f", "Because the rotor is stationary, so frequency has no meaning and defaults to the supply value", "Because the stator and rotor windings are directly connected at standstill", "Because the rotor core has not yet built up any flux"],
    "exp": "With s = 1, f_r = 1 x f = f, so the rotor sees the full relative sweep of the field at the supply frequency, exactly as if it were a transformer secondary shorted at standstill.",
    "cat": "ROTORFREQ",
    "id": "F09_032"
  },
  {
    "q": "A motor runs at 4% slip on a 50 Hz supply. What is the rotor frequency?",
    "a": "2 Hz",
    "opts": ["2 Hz", "12.5 Hz", "50 Hz", "4 Hz"],
    "exp": "f_r = s x f = 0.04 x 50 = 2 Hz, a slow beat compared to the 50 Hz standstill value.",
    "cat": "ROTORFREQ",
    "id": "F09_033"
  },
  {
    "q": "A motor runs at 5% slip on a 60 Hz supply. What is the rotor frequency?",
    "a": "3 Hz",
    "opts": ["3 Hz", "12 Hz", "5 Hz", "60 Hz"],
    "exp": "f_r = s x f = 0.05 x 60 = 3 Hz.",
    "cat": "ROTORFREQ",
    "id": "F09_034"
  },
  {
    "q": "As the rotor accelerates from standstill toward its running speed, what happens to rotor EMF and rotor current?",
    "a": "Both fall in direct proportion to falling slip",
    "opts": ["Both fall in direct proportion to falling slip", "Both rise as speed increases", "Rotor EMF rises but rotor current falls", "Both remain constant regardless of slip"],
    "exp": "E_r = s x E_r0, so as slip falls with acceleration, the induced rotor EMF falls proportionally, and rotor current falls with it. This is exactly why the heavy starting current settles down to a small full load value as the motor comes up to speed.",
    "cat": "ROTORFREQ",
    "id": "F09_035"
  },

  /* ═══════════ THE OPEN ROTOR CIRCUIT TRAP ═══════════ */
  {
    "q": "Does the \"open rotor circuit\" question make physical sense for a squirrel cage motor?",
    "a": "No, because the squirrel cage bars are permanently short circuited by the end rings with no external terminals to open",
    "opts": ["No, because the squirrel cage bars are permanently short circuited by the end rings with no external terminals to open", "Yes, and it behaves identically to a slip ring motor with open terminals", "Yes, but only above 50% slip", "No, because squirrel cage rotors carry no current at any time"],
    "exp": "A squirrel cage rotor's circuit is built closed by the casting itself, so there is nothing to open. The open-circuit question only has meaning for a slip ring motor, whose rotor winding is brought out through brushes to an external circuit that can genuinely be opened.",
    "cat": "OPENROTOR",
    "id": "F09_036"
  },
  {
    "q": "For a slip ring motor with its rotor terminals left open circuit, is an EMF still induced in the rotor winding?",
    "a": "Yes, because induction depends only on relative motion between field and conductor, not on whether the circuit is closed",
    "opts": ["No, because open terminals prevent flux from linking the rotor winding", "Yes, because induction depends only on relative motion between field and conductor, not on whether the circuit is closed", "Only if the motor is running above synchronous speed", "Only if the stator winding is connected in delta"],
    "exp": "The rotating field still sweeps past the rotor conductors and induces an EMF exactly as before, since Faraday's law only needs relative motion between flux and conductor. Whether the circuit is open or closed affects current, not the induced EMF itself.",
    "cat": "OPENROTOR",
    "id": "F09_037"
  },
  {
    "q": "With a slip ring motor's rotor terminals left open, what is the rotor current?",
    "a": "Zero, because there is no closed path for current to flow despite the induced EMF",
    "opts": ["Zero, because there is no closed path for current to flow despite the induced EMF", "Full standstill current, since EMF alone drives current", "A small leakage current through the air gap", "Equal to the stator current"],
    "exp": "An induced EMF with no closed circuit cannot drive any current, exactly as an open circuited battery produces no current despite having a voltage. The rotor current is zero.",
    "cat": "OPENROTOR",
    "id": "F09_038"
  },
  {
    "q": "With a slip ring motor's rotor terminals left open, what torque does the motor develop?",
    "a": "Zero torque; the motor will not start",
    "opts": ["Full starting torque, since EMF alone produces torque", "Zero torque; the motor will not start", "Reduced but non-zero starting torque", "Breakdown torque"],
    "exp": "With zero rotor current there is zero force on the rotor conductors and so zero torque. The motor sits at standstill, fully energised on the stator side, developing no starting torque at all.",
    "cat": "OPENROTOR",
    "id": "F09_039"
  },
  {
    "q": "Why must a slip ring motor's starting resistors always be connected in before starting, never left open?",
    "a": "Because with the rotor circuit open there is no current path, so no torque develops and the motor cannot start",
    "opts": ["Because leaving them open would overheat the stator winding immediately", "Because it would cause the motor to run above synchronous speed", "Because with the rotor circuit open there is no current path, so no torque develops and the motor cannot start", "Because open resistors reverse the direction of rotation"],
    "exp": "The starting resistors provide the closed rotor circuit that lets induced EMF drive current and produce torque. Leave that circuit open and the chain, EMF, current, torque, breaks at the current step.",
    "cat": "OPENROTOR",
    "id": "F09_040"
  },
  {
    "q": "A candidate argues \"a squirrel cage motor works fine with no external rotor connection at all, so an open rotor circuit on a slip ring motor shouldn't matter either.\" What is wrong with that reasoning?",
    "a": "A squirrel cage rotor is always a closed circuit by construction; a slip ring motor's external circuit can genuinely be opened, and doing so removes the only current path",
    "opts": ["A squirrel cage rotor is always a closed circuit by construction; a slip ring motor's external circuit can genuinely be opened, and doing so removes the only current path", "Nothing is wrong; both motor types behave identically when open circuited", "The reasoning is correct only for motors below 5 poles", "Squirrel cage motors also fail to start with an open rotor circuit, for the same reason"],
    "exp": "The squirrel cage rotor has no external terminals at all, so \"open circuit\" is not a state it can be in, it is always closed by the end rings. A slip ring rotor's external circuit is a real, separate path that can be left open, and doing so removes the current path the rotor needs to produce torque.",
    "cat": "OPENROTOR",
    "id": "F09_041"
  },

  /* ═══════════ TORQUE-SLIP CURVE ═══════════ */
  {
    "q": "At standstill (s = 1), is the torque produced by an induction motor zero?",
    "a": "No, it is the starting torque, typically 1.5 to 2.5 times full load torque for a standard cage motor",
    "opts": ["Yes, torque is exactly zero at standstill", "No, it is the starting torque, typically 1.5 to 2.5 times full load torque for a standard cage motor", "No, it equals breakdown torque exactly", "Yes, torque only becomes non-zero once slip falls below 50%"],
    "exp": "At standstill the rotor frequency and EMF are at their maximum, and although not the peak of the curve, this starting torque is typically 1.5 to 2.5 times full load torque for a standard cage motor, not zero.",
    "cat": "TORQUE",
    "id": "F09_042"
  },
  {
    "q": "Why is starting torque modest compared to what the full starting current would suggest?",
    "a": "At standstill the rotor circuit is highly inductive, so current lags voltage by a large angle and much of the current contributes little useful torque",
    "opts": ["At standstill the rotor circuit is highly inductive, so current lags voltage by a large angle and much of the current contributes little useful torque", "At standstill the rotor resistance is at its highest possible value", "The stator winding is disconnected during the first instant of starting", "Starting current is actually smaller than full load current"],
    "exp": "At standstill, rotor frequency equals supply frequency, making the rotor circuit strongly inductive, so a large phase angle between rotor EMF and current means a big share of that heavy starting current does little to produce torque.",
    "cat": "TORQUE",
    "id": "F09_043"
  },
  {
    "q": "What is \"pull-up torque\" on the torque-slip curve?",
    "a": "The lowest point the torque curve dips to on its way up from standstill, before it rises to the peak",
    "opts": ["The torque at exactly synchronous speed", "The peak torque the motor can ever develop", "The lowest point the torque curve dips to on its way up from standstill, before it rises to the peak", "The torque at rated full load slip"],
    "exp": "Between the starting torque point and the breakdown torque peak, the curve dips to a local minimum, the pull-up torque, before climbing to its maximum.",
    "cat": "TORQUE",
    "id": "F09_044"
  },
  {
    "q": "Why does pull-up torque matter for a motor starting under load?",
    "a": "It is the torque available while accelerating through the early part of the run-up, and it must exceed the load's demand or the motor stalls partway through starting",
    "opts": ["It determines the final running speed of the motor at full load", "It is the torque available while accelerating through the early part of the run-up, and it must exceed the load's demand or the motor stalls partway through starting", "It sets the value of breakdown torque for that motor design", "It only matters for motors started using a slip ring rotor"],
    "exp": "If the load's torque demand at that speed exceeds the motor's pull-up torque, the motor cannot accelerate past that point and stalls partway through the run-up, never reaching full speed.",
    "cat": "TORQUE",
    "id": "F09_045"
  },
  {
    "q": "What is \"breakdown (pull-out) torque\"?",
    "a": "The peak of the torque-slip curve, the maximum torque the motor can produce at any slip",
    "opts": ["The peak of the torque-slip curve, the maximum torque the motor can produce at any slip", "The torque produced exactly at standstill", "The torque at which the motor first begins to rotate", "The average torque over a full run-up from standstill to full speed"],
    "exp": "Breakdown torque is the single highest point on the whole torque-slip curve. Load the motor beyond this and it cannot hold the load, stalling as slip and heating increase further.",
    "cat": "TORQUE",
    "id": "F09_046"
  },
  {
    "q": "At roughly what slip does breakdown torque typically occur for a standard cage motor?",
    "a": "15 to 25 percent",
    "opts": ["15 to 25 percent", "1.5 to 2.5 percent", "50 to 60 percent", "80 to 90 percent"],
    "exp": "The peak of the torque-slip curve sits at a moderate slip, typically 15 to 25 percent, well past standstill (s=1) but far above the few percent slip of normal full load running.",
    "cat": "TORQUE",
    "id": "F09_047"
  },
  {
    "q": "True or false: starting torque is the peak (maximum) point on the torque-slip curve.",
    "a": "False; the peak, breakdown torque, occurs further along at moderate slip, well past standstill",
    "opts": ["True, starting torque and breakdown torque are always the same value", "False; the peak, breakdown torque, occurs further along at moderate slip, well past standstill", "True, but only for slip ring motors", "False, because starting torque always exceeds breakdown torque"],
    "exp": "This is a common rushed-answer error. Starting torque is the value at s=1, but the curve actually rises past that point to a higher peak, breakdown torque, at a moderate slip further along, before falling away toward synchronous speed.",
    "cat": "TORQUE",
    "id": "F09_048"
  },
  {
    "q": "Which is the real ceiling on how much load a running motor can carry: starting torque or breakdown torque?",
    "a": "Breakdown torque",
    "opts": ["Starting torque", "Breakdown torque", "Pull-up torque", "They are always numerically equal"],
    "exp": "Once running, a motor's torque capability is limited by breakdown torque, the true peak of the curve. Load beyond that point and the motor cannot hold it, stalling as slip rises and torque falls away on the far side of the peak.",
    "cat": "TORQUE",
    "id": "F09_049"
  },
  {
    "q": "Where on the torque-slip curve does normal full load operation sit?",
    "a": "On the steep, near-linear part of the curve close to synchronous speed, at only a few percent slip",
    "opts": ["Exactly at the breakdown torque peak", "On the steep, near-linear part of the curve close to synchronous speed, at only a few percent slip", "Beyond breakdown torque, close to standstill", "Exactly at s = 1"],
    "exp": "Full load sits on the steep, near-linear region close to synchronous speed at only a few percent slip, which is exactly why an induction motor is described as running at an almost constant speed regardless of load within its normal working range.",
    "cat": "TORQUE",
    "id": "F09_050"
  },

  /* ═══════════ POWER FLOW & AIR GAP POWER ═══════════ */
  {
    "q": "What is stator input power P_in for a three phase induction motor?",
    "a": "P_in = √3 V_L I_L cos φ",
    "opts": ["P_in = √3 V_L I_L cos φ", "P_in = V_L I_L cos φ", "P_in = 3 V_L I_L", "P_in = √3 V_L I_L sin φ"],
    "exp": "For a balanced three phase supply, input power is P_in = √3 V_L I_L cos φ, using line voltage, line current, and the power factor angle.",
    "cat": "POWER",
    "id": "F09_051"
  },
  {
    "q": "What two losses are subtracted from stator input power to give the air gap power?",
    "a": "Stator copper loss and stator iron loss",
    "opts": ["Rotor copper loss and friction loss", "Stator copper loss and stator iron loss", "Windage loss and stray loss", "Core loss and shaft output power"],
    "exp": "Stator copper loss (I²R in the stator winding) and stator iron loss (hysteresis and eddy current loss in the stator core) are removed from stator input power. What remains crosses the air gap into the rotor.",
    "cat": "POWER",
    "id": "F09_052"
  },
  {
    "q": "What is another name for air gap power?",
    "a": "Rotor input",
    "opts": ["Rotor input", "Mechanical power developed", "Shaft output power", "Stator output power"],
    "exp": "Air gap power, the power that crosses from stator to rotor, is also called the rotor input, since it is what the rotor circuit receives to work with.",
    "cat": "POWER",
    "id": "F09_053"
  },
  {
    "q": "How does air gap power P_g split between rotor copper loss and mechanical power developed?",
    "a": "A fraction s is rotor copper loss; the remaining fraction (1 − s) becomes mechanical power developed",
    "opts": ["A fraction s is rotor copper loss; the remaining fraction (1 − s) becomes mechanical power developed", "Half becomes rotor copper loss and half becomes mechanical power, regardless of slip", "A fraction (1 − s) is rotor copper loss; the remaining fraction s becomes mechanical power", "All of it becomes mechanical power developed, with no rotor copper loss"],
    "exp": "The split is fixed entirely by slip: rotor copper loss = s x P_g, and mechanical power developed = (1-s) x P_g. Reversing the two fractions is the classic error on this question.",
    "cat": "POWER",
    "id": "F09_054"
  },
  {
    "q": "Mechanical power developed, P_m, is given by:",
    "a": "P_m = (1 − s) × P_g",
    "opts": ["P_m = (1 − s) × P_g", "P_m = s × P_g", "P_m = P_g / s", "P_m = s × (1 − s) × P_g"],
    "exp": "P_m = (1-s) x P_g, the fraction of air gap power not dissipated as rotor copper loss.",
    "cat": "POWER",
    "id": "F09_055"
  },
  {
    "q": "What must be subtracted from mechanical power developed to get the useful shaft output power?",
    "a": "Friction, windage, and stray losses",
    "opts": ["Stator copper loss", "Rotor copper loss", "Stator iron loss", "Friction, windage, and stray losses"],
    "exp": "Mechanical power developed still has to overcome bearing friction, windage, and stray losses before what remains is delivered to the driven load as shaft output power. Stator and rotor copper/iron losses were already removed earlier in the power flow.",
    "cat": "POWER",
    "id": "F09_056"
  },
  {
    "q": "A motor's air gap power is 10 kW and it is running at 4% slip. What is the rotor copper loss?",
    "a": "400 W",
    "opts": ["400 W", "9600 W", "40 W", "4000 W"],
    "exp": "Rotor copper loss = s x P_g = 0.04 x 10,000 = 400 W.",
    "cat": "POWER",
    "id": "F09_057"
  },
  {
    "q": "A motor's air gap power is 10 kW and it is running at 4% slip. What is the mechanical power developed?",
    "a": "9.6 kW",
    "opts": ["9.6 kW", "10 kW", "0.4 kW", "6 kW"],
    "exp": "P_m = (1 − s) x P_g = 0.96 x 10 = 9.6 kW. Almost all of the air gap power becomes useful mechanical work at this low slip, which is why induction motors run efficiently near rated speed.",
    "cat": "POWER",
    "id": "F09_058"
  },
  {
    "q": "A motor's air gap power is 20 kW and it is running at 6% slip. What is the mechanical power developed?",
    "a": "18.8 kW",
    "opts": ["18.8 kW", "1.2 kW", "20 kW", "12 kW"],
    "exp": "P_m = (1 − s) x P_g = 0.94 x 20 = 18.8 kW. Rotor copper loss takes the remaining 1.2 kW (s x P_g = 0.06 x 20).",
    "cat": "POWER",
    "id": "F09_059"
  },
  {
    "q": "A motor's rotor copper loss is 500 W while running at 5% slip. What is the air gap power?",
    "a": "10 kW",
    "opts": ["10 kW", "2.5 kW", "9.5 kW", "25 kW"],
    "exp": "Rotor copper loss = s x P_g, so P_g = 500 / 0.05 = 10,000 W = 10 kW.",
    "cat": "POWER",
    "id": "F09_060"
  },
  {
    "q": "Why does a stalled or heavily overloaded motor (running at high slip) overheat quickly?",
    "a": "Because at high slip a large fraction of the air gap power is dissipated as rotor I²R heating instead of being converted to mechanical power",
    "opts": ["Because at high slip a large fraction of the air gap power is dissipated as rotor I²R heating instead of being converted to mechanical power", "Because high slip increases the stator iron loss directly", "Because high slip causes the supply frequency itself to rise", "Because high slip disconnects the cooling fan from the shaft"],
    "exp": "Rotor copper loss = s x P_g, so as slip rises toward 1 at a stall, nearly all of the air gap power goes into rotor I²R heating with almost nothing left as mechanical power, which is exactly why a stalled motor heats up fast.",
    "cat": "POWER",
    "id": "F09_061"
  },

  /* ═══════════ EFFECT OF LOAD CHANGE ═══════════ */
  {
    "q": "What is the only mechanism by which a running induction motor can produce more torque to meet an increased load?",
    "a": "Running at a slightly larger slip, since the rotor decelerates slightly under the extra demand",
    "opts": ["Running at a slightly larger slip, since the rotor decelerates slightly under the extra demand", "Increasing the supply frequency automatically", "Reducing the number of active poles", "Switching the stator winding from star to delta"],
    "exp": "An induction motor has no other lever available: to produce more torque it must slip a little further behind the field, which raises rotor EMF and current in direct proportion.",
    "cat": "LOADEFFECT",
    "id": "F09_062"
  },
  {
    "q": "When load increases on a running induction motor, what happens to speed?",
    "a": "It falls slightly, as slip rises slightly",
    "opts": ["It falls slightly, as slip rises slightly", "It rises slightly, as slip falls slightly", "It remains exactly, mathematically constant", "It falls sharply toward standstill"],
    "exp": "The change is small because the torque-slip curve is steep in the normal operating region, so a large change in torque needs only a small change in slip and therefore only a small drop in speed.",
    "cat": "LOADEFFECT",
    "id": "F09_063"
  },
  {
    "q": "Why does rotor current rise when load increases?",
    "a": "Because rotor EMF and current rise in direct proportion to the increased slip",
    "opts": ["Because rotor EMF and current rise in direct proportion to the increased slip", "Because the supply voltage automatically increases under load", "Because rotor resistance falls as load increases", "Because the stator winding reconfigures itself under load"],
    "exp": "E_r = s x E_r0 means a larger slip directly produces a larger rotor EMF and, through the closed rotor circuit, a larger rotor current, which reflects back to the stator as increased stator current.",
    "cat": "LOADEFFECT",
    "id": "F09_064"
  },
  {
    "q": "Why does power factor generally improve as load increases from light load toward full load?",
    "a": "The largely fixed magnetising component of current becomes a smaller fraction of a total current now dominated by the more resistive, load-related component",
    "opts": ["The largely fixed magnetising component of current becomes a smaller fraction of a total current now dominated by the more resistive, load-related component", "The rotor becomes more inductive as load increases", "Supply frequency rises with load, improving the phase angle", "Rotor resistance increases sharply with load"],
    "exp": "The magnetising current stays roughly fixed regardless of load, so as the load-related current grows, it makes up a bigger share of the total, pulling the overall power factor up toward a more resistive, better angle.",
    "cat": "LOADEFFECT",
    "id": "F09_065"
  },
  {
    "q": "What happens to power factor if load is pushed beyond full load, toward breakdown torque?",
    "a": "It falls back again, as the rotor circuit becomes more reactive with rising slip",
    "opts": ["It falls back again, as the rotor circuit becomes more reactive with rising slip", "It continues improving all the way to standstill", "It stays exactly constant regardless of slip", "It becomes perfectly unity at breakdown torque"],
    "exp": "Beyond full load, rising slip raises rotor frequency again, making the rotor circuit more inductive relative to its resistance, so power factor falls back after peaking somewhere near rated load.",
    "cat": "LOADEFFECT",
    "id": "F09_066"
  },
  {
    "q": "Why is an induction motor's no-load power factor poor?",
    "a": "Because at no load the current is dominated by the largely fixed magnetising component",
    "opts": ["Because at no load the current is dominated by the largely fixed magnetising component", "Because no-load current is purely resistive with no reactive component", "Because slip is at its maximum value at no load", "Because rotor copper loss is at its highest at no load"],
    "exp": "At no load there is very little load-related, resistive current, so the magnetising current, which is largely independent of load, dominates the total, giving a current that lags well behind voltage and a poor power factor.",
    "cat": "LOADEFFECT",
    "id": "F09_067"
  },

  /* ═══════════ CRAWLING & COGGING ═══════════ */
  {
    "q": "What causes crawling in an induction motor?",
    "a": "Harmonics in the air gap flux, chiefly the seventh harmonic, produce a weak additional rotating field at about one seventh of synchronous speed",
    "opts": ["Harmonics in the air gap flux, chiefly the seventh harmonic, produce a weak additional rotating field at about one seventh of synchronous speed", "Equal numbers of stator and rotor slots creating magnetic locking positions", "Worn carbon brushes on the slip rings causing an intermittent circuit", "Excessive rotor resistance added at the starting resistor bank"],
    "exp": "A poorly designed or poorly wound stator produces harmonics, chiefly the seventh, which set up a weak extra rotating field at roughly one seventh of synchronous speed, superimposed on the main field.",
    "cat": "CRAWLCOG",
    "id": "F09_068"
  },
  {
    "q": "What does a motor affected by crawling actually do?",
    "a": "It can lock on to and stabilise running at roughly one seventh of synchronous speed instead of accelerating to full speed",
    "opts": ["It can lock on to and stabilise running at roughly one seventh of synchronous speed instead of accelerating to full speed", "It refuses to start at all, magnetically locked in position", "It runs normally but with reversed rotation", "It trips the overload protection within seconds of starting"],
    "exp": "The motor accelerates normally at first but, particularly under light starting load, can lock on to the weak seventh-harmonic field and stabilise at about one seventh of synchronous speed rather than continuing up to full speed. This is distinct from cogging, which prevents starting altogether.",
    "cat": "CRAWLCOG",
    "id": "F09_069"
  },
  {
    "q": "What causes cogging (magnetic locking)?",
    "a": "Equal, or simply related, numbers of stator and rotor slots, so slot harmonics align and produce strong magnetic locking torques",
    "opts": ["Equal, or simply related, numbers of stator and rotor slots, so slot harmonics align and produce strong magnetic locking torques", "The seventh harmonic of the supply frequency locking the rotor at low speed", "An open circuit in the rotor winding of a slip ring motor", "Excessive slip caused by an overloaded shaft"],
    "exp": "When stator and rotor slot numbers are equal or simply related, slot harmonics from both sides align and produce strong magnetic locking torques at particular rotor positions, an entirely different mechanism from the seventh-harmonic cause of crawling.",
    "cat": "CRAWLCOG",
    "id": "F09_070"
  }
]);

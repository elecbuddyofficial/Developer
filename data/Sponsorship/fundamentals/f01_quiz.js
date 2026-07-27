window.loadQuizzes("F01_Fundamentals", [

  /* ═══════════ CHARGE ═══════════ */
  {
    "q": "What is the SI unit of electric charge?",
    "a": "Coulomb",
    "opts": ["Ampere", "Coulomb", "Volt", "Joule"],
    "exp": "The coulomb (C) is the SI unit of charge. The ampere is the unit of current, which is charge per second. Candidates often confuse the two because they are so closely related.",
    "cat": "CHARGE",
    "id": "F01_001"
  },
  {
    "q": "The charge on a single electron is approximately:",
    "a": "1.6 x 10^-19 coulomb",
    "opts": ["1.6 x 10^-19 coulomb", "6.24 x 10^18 coulomb", "9.1 x 10^-31 coulomb", "1.6 x 10^19 coulomb"],
    "exp": "One electron carries 1.6 x 10^-19 C of negative charge. The figure 6.24 x 10^18 is the number of electrons in one coulomb, and 9.1 x 10^-31 kg is the mass of an electron, not its charge.",
    "cat": "CHARGE",
    "id": "F01_002"
  },
  {
    "q": "A current of 5 A flows for 4 seconds. How much charge has passed?",
    "a": "20 coulombs",
    "opts": ["20 coulombs", "1.25 coulombs", "0.8 coulombs", "9 coulombs"],
    "exp": "Q = I x t = 5 x 4 = 20 C. Dividing instead of multiplying gives 1.25, which is the most common error on this question.",
    "cat": "CHARGE",
    "id": "F01_003"
  },

  /* ═══════════ CURRENT ═══════════ */
  {
    "q": "Electric current is best defined as:",
    "a": "The rate of flow of electric charge",
    "opts": [
      "The rate of flow of electric charge",
      "The force that pushes electrons through a conductor",
      "The opposition offered to the flow of electrons",
      "The total charge stored in a conductor"
    ],
    "exp": "Current is the rate of flow of charge, measured in amperes. The force that pushes charge is voltage. The opposition is resistance. Stored charge is simply charge, not current.",
    "cat": "CURR",
    "id": "F01_004"
  },
  {
    "q": "One ampere is defined as:",
    "a": "One coulomb of charge passing a point in one second",
    "opts": [
      "One coulomb of charge passing a point in one second",
      "One joule of work done per coulomb",
      "One volt across one ohm of resistance for one second",
      "One coulomb of charge stored in one second"
    ],
    "exp": "An ampere is one coulomb per second. One joule per coulomb is the definition of the volt, not the ampere. Note the difference between charge passing a point, which is current, and charge being stored, which is not.",
    "cat": "CURR",
    "id": "F01_005"
  },
  {
    "q": "In which direction does conventional current flow?",
    "a": "From positive to negative",
    "opts": [
      "From positive to negative",
      "From negative to positive",
      "In whichever direction the electrons move",
      "It depends on whether the supply is AC or DC"
    ],
    "exp": "Conventional current flows positive to negative and is used in all circuit diagrams and calculations. Electrons physically move negative to positive, which is the opposite direction. Both are correct in their own context, which is why this question catches people out.",
    "cat": "CURR",
    "id": "F01_006"
  },
  {
    "q": "Why was the conventional current direction never corrected after the electron was discovered?",
    "a": "All existing diagrams and formulae already used it, and the mathematics works out identically either way",
    "opts": [
      "All existing diagrams and formulae already used it, and the mathematics works out identically either way",
      "Electrons were later proved to flow positive to negative after all",
      "Conventional current only applies to AC systems",
      "Protons also move and carry part of the current in metals"
    ],
    "exp": "Franklin fixed the convention before the electron was discovered in 1897. By then all of electrical engineering used it, and since the maths gives the same answer either way, it was kept. Protons do not move in a solid metal conductor.",
    "cat": "CURR",
    "id": "F01_007"
  },
  {
    "q": "Roughly what level of current through the human body is considered potentially fatal?",
    "a": "50 to 100 mA",
    "opts": ["50 to 100 mA", "5 to 10 A", "500 to 1000 mA", "1 to 2 A"],
    "exp": "As little as 50 to 100 mA can cause ventricular fibrillation. That is less current than a single small lamp draws. This is the basis of the statement that current kills, not voltage.",
    "cat": "CURR",
    "id": "F01_008"
  },

  /* ═══════════ VOLTAGE ═══════════ */
  {
    "q": "Voltage is defined as:",
    "a": "The work done in moving a unit charge between two points",
    "opts": [
      "The work done in moving a unit charge between two points",
      "The rate of flow of charge past a point",
      "The total energy stored in a circuit",
      "The opposition to current flow in a conductor"
    ],
    "exp": "Voltage is work per unit charge, one volt being one joule per coulomb. Rate of flow of charge is current. Opposition to flow is resistance.",
    "cat": "VOLT",
    "id": "F01_009"
  },
  {
    "q": "A bird sits on a single live high voltage line and is unharmed. Why?",
    "a": "There is no potential difference between its two feet, so no current flows through it",
    "opts": [
      "There is no potential difference between its two feet, so no current flows through it",
      "Bird feathers are good insulators that block the current",
      "The bird is too small for the current to affect it",
      "Birds have very high body resistance compared to humans"
    ],
    "exp": "Both feet are at essentially the same potential, so there is no voltage difference across the bird and no current path through it. The moment it bridges two different potentials, such as touching a second wire or an earthed pole, current flows and it is killed.",
    "cat": "VOLT",
    "id": "F01_010"
  },
  {
    "q": "What is the key difference between EMF and potential difference?",
    "a": "EMF is the voltage produced by the source on open circuit, PD is the voltage across the load when current flows",
    "opts": [
      "EMF is the voltage produced by the source on open circuit, PD is the voltage across the load when current flows",
      "EMF applies only to AC and PD applies only to DC",
      "EMF is measured in volts and PD is measured in amperes",
      "They are two names for exactly the same quantity"
    ],
    "exp": "EMF is energy supplied per coulomb by the source. PD is energy used per coulomb by the load. Both are measured in volts, and the difference between them is the drop across the source internal resistance.",
    "cat": "VOLT",
    "id": "F01_011"
  },
  {
    "q": "A battery reads 12 V with nothing connected but drops to 11.2 V when a starter motor is cranking. What has happened?",
    "a": "Voltage is being dropped across the battery internal resistance now that current is flowing",
    "opts": [
      "Voltage is being dropped across the battery internal resistance now that current is flowing",
      "The battery EMF has physically fallen to 11.2 V",
      "The battery has become discharged during those few seconds",
      "The starter motor is generating a back voltage that opposes the battery"
    ],
    "exp": "Terminal voltage V = E minus I times r. The EMF has not changed, but heavy current through the internal resistance causes an internal drop. This is why a good battery can still read low under heavy load.",
    "cat": "VOLT",
    "id": "F01_012"
  },

  /* ═══════════ RESISTANCE ═══════════ */
  {
    "q": "Which of these is NOT a factor affecting the resistance of a conductor?",
    "a": "The voltage applied across it",
    "opts": [
      "The voltage applied across it",
      "Its length",
      "Its cross-sectional area",
      "Its temperature"
    ],
    "exp": "Resistance is a property of the conductor itself, set by length, area, material and temperature. Applying more voltage does not change the resistance, it simply drives more current through the same resistance.",
    "cat": "RES",
    "id": "F01_013"
  },
  {
    "q": "If the length of a cable is doubled and everything else stays the same, its resistance:",
    "a": "Doubles",
    "opts": ["Doubles", "Halves", "Becomes four times", "Stays the same"],
    "exp": "R = rho L over A, so resistance is directly proportional to length. Doubling the length doubles the resistance. This is why long cable runs suffer significant voltage drop.",
    "cat": "RES",
    "id": "F01_014"
  },
  {
    "q": "If the cross-sectional area of a conductor is doubled, its resistance:",
    "a": "Halves",
    "opts": ["Halves", "Doubles", "Stays the same", "Becomes four times"],
    "exp": "R is inversely proportional to area, so doubling the area halves the resistance. This is precisely why heavy current loads are given thicker cables.",
    "cat": "RES",
    "id": "F01_015"
  },
  {
    "q": "What is the difference between resistance and resistivity?",
    "a": "Resistance depends on the dimensions of the actual conductor, resistivity is a property of the material alone",
    "opts": [
      "Resistance depends on the dimensions of the actual conductor, resistivity is a property of the material alone",
      "Resistance applies to AC and resistivity applies to DC",
      "Resistivity is simply resistance measured at high temperature",
      "They are the same thing measured in different units"
    ],
    "exp": "Copper has the same resistivity whether it is a short thick bar or a long thin wire, but those two pieces have very different resistances. Resistivity is measured in ohm metres, resistance in ohms.",
    "cat": "RES",
    "id": "F01_016"
  },
  {
    "q": "For a metal such as copper, what happens to resistance as temperature increases?",
    "a": "It increases, because metals have a positive temperature coefficient",
    "opts": [
      "It increases, because metals have a positive temperature coefficient",
      "It decreases, because heat frees more electrons",
      "It stays constant, because copper is an ohmic conductor",
      "It first decreases and then increases"
    ],
    "exp": "In metals the atoms vibrate more when heated and obstruct electron flow more, so resistance rises. Semiconductors behave the opposite way, with a negative coefficient, which is the basis of the thermistor.",
    "cat": "RES",
    "id": "F01_017"
  },
  {
    "q": "A copper winding measures 10 ohm at 0 degrees C. Taking alpha as 0.004 per degree C, what is its resistance at 50 degrees C?",
    "a": "12 ohm",
    "opts": ["12 ohm", "10.2 ohm", "14 ohm", "20 ohm"],
    "exp": "Rt = R0 (1 + alpha t) = 10 x (1 + 0.004 x 50) = 10 x 1.2 = 12 ohm. This 20 percent rise from heating alone is why winding resistance must always be logged with its temperature.",
    "cat": "RES",
    "id": "F01_018"
  },
  {
    "q": "Why do precision measuring instruments use alloys such as manganin for their internal shunts?",
    "a": "Manganin has a near zero temperature coefficient, so its resistance barely changes with temperature",
    "opts": [
      "Manganin has a near zero temperature coefficient, so its resistance barely changes with temperature",
      "Manganin has the lowest resistivity of any material available",
      "Manganin is significantly cheaper than copper",
      "Manganin becomes a superconductor at instrument operating temperatures"
    ],
    "exp": "An instrument must read accurately whether it is cold or has been running for hours. A near zero temperature coefficient keeps the shunt resistance stable, so the calibration holds.",
    "cat": "RES",
    "id": "F01_019"
  },

  /* ═══════════ OHM'S LAW ═══════════ */
  {
    "q": "Ohm's Law is valid only under which condition?",
    "a": "Temperature and other physical conditions remain constant",
    "opts": [
      "Temperature and other physical conditions remain constant",
      "The supply is direct current only",
      "The circuit contains no more than three components",
      "The applied voltage does not exceed 250 V"
    ],
    "exp": "The condition is part of the law itself and interviewers deliberately check whether you know it. Ohm's Law applies to both AC and DC, at any voltage, provided the physical conditions stay constant.",
    "cat": "OHM",
    "id": "F01_020"
  },
  {
    "q": "Which of the following is a non-ohmic device?",
    "a": "A diode",
    "opts": ["A diode", "A copper conductor", "A wire-wound resistor", "A carbon film resistor"],
    "exp": "A diode has a curved voltage-current characteristic because its resistance is not constant, so it does not obey Ohm's Law. Copper and standard resistors give a straight line graph and are ohmic.",
    "cat": "OHM",
    "id": "F01_021"
  },
  {
    "q": "A 24 V supply drives 3 A through a load. What is the load resistance?",
    "a": "8 ohm",
    "opts": ["8 ohm", "72 ohm", "0.125 ohm", "27 ohm"],
    "exp": "R = V / I = 24 / 3 = 8 ohm. Multiplying instead of dividing gives 72, which is the classic slip under interview pressure.",
    "cat": "OHM",
    "id": "F01_022"
  },
  {
    "q": "If the voltage across a fixed resistor is halved, the current through it will:",
    "a": "Halve",
    "opts": ["Halve", "Double", "Reduce to one quarter", "Remain unchanged"],
    "exp": "By Ohm's Law, current is directly proportional to voltage for a fixed resistance. Halve the voltage and you halve the current. The one quarter answer confuses this with the squared relationship in the power formula.",
    "cat": "OHM",
    "id": "F01_023"
  },
  {
    "q": "Why is a filament lamp considered non-ohmic?",
    "a": "Its resistance rises sharply as the filament heats up, so the V against I graph curves",
    "opts": [
      "Its resistance rises sharply as the filament heats up, so the V against I graph curves",
      "It only works on AC, and Ohm's Law applies to DC",
      "It converts electrical energy into light rather than heat",
      "Its resistance falls to zero once it reaches operating temperature"
    ],
    "exp": "A cold filament has low resistance and a hot one has much higher resistance. Since resistance does not stay constant, the strict condition of Ohm's Law is violated and the graph bends.",
    "cat": "OHM",
    "id": "F01_024"
  },

  /* ═══════════ SERIES AND PARALLEL ═══════════ */
  {
    "q": "In a series circuit, which quantity is the same through every component?",
    "a": "Current",
    "opts": ["Current", "Voltage", "Resistance", "Power"],
    "exp": "There is only one path in a series circuit, so the same current must flow through everything. It is voltage that divides across the components in proportion to their resistance.",
    "cat": "CKT",
    "id": "F01_025"
  },
  {
    "q": "In a parallel circuit, which quantity is the same across every branch?",
    "a": "Voltage",
    "opts": ["Voltage", "Current", "Resistance", "Charge"],
    "exp": "Every branch is connected between the same two points, so each sees the same voltage. Current divides between the branches, inversely proportional to their resistance.",
    "cat": "CKT",
    "id": "F01_026"
  },
  {
    "q": "Three resistors of 10, 20 and 30 ohm are connected in series. What is the total resistance?",
    "a": "60 ohm",
    "opts": ["60 ohm", "5.45 ohm", "20 ohm", "6 ohm"],
    "exp": "Series resistances simply add: 10 + 20 + 30 = 60 ohm. The value 5.45 ohm is the answer if the same three resistors were connected in parallel instead.",
    "cat": "CKT",
    "id": "F01_027"
  },
  {
    "q": "Two resistors of 6 ohm and 3 ohm are connected in parallel. What is the total resistance?",
    "a": "2 ohm",
    "opts": ["2 ohm", "9 ohm", "4.5 ohm", "0.5 ohm"],
    "exp": "Using product over sum: (6 x 3) / (6 + 3) = 18 / 9 = 2 ohm. Note the answer is less than the smaller resistor, which is always true for parallel and is a useful check.",
    "cat": "CKT",
    "id": "F01_028"
  },
  {
    "q": "The total resistance of any parallel combination is always:",
    "a": "Less than the smallest individual resistance",
    "opts": [
      "Less than the smallest individual resistance",
      "Greater than the largest individual resistance",
      "Equal to the average of the individual resistances",
      "Equal to the sum of the individual resistances"
    ],
    "exp": "Adding a parallel branch always creates an extra path for current, so total resistance falls. This makes a fast sanity check: if your parallel answer is bigger than the smallest resistor, you have made an arithmetic error.",
    "cat": "CKT",
    "id": "F01_029"
  },
  {
    "q": "Why is ship and house wiring done in parallel rather than series?",
    "a": "Every load receives full rated voltage, loads can be switched independently, and one failure does not stop the rest",
    "opts": [
      "Every load receives full rated voltage, loads can be switched independently, and one failure does not stop the rest",
      "Parallel wiring uses less cable and is therefore cheaper",
      "Parallel wiring reduces the total current drawn from the supply",
      "Series wiring cannot be used with alternating current"
    ],
    "exp": "Those three practical reasons are the expected answer. Parallel wiring actually draws more total current and uses more cable, so cost is not the reason. Old fairy lights wired in series are the classic counter example, where one blown bulb killed the whole string.",
    "cat": "CKT",
    "id": "F01_030"
  },
  {
    "q": "Does current flow in an open circuit that has voltage present across the break?",
    "a": "No, because current requires a complete closed path back to the source",
    "opts": [
      "No, because current requires a complete closed path back to the source",
      "Yes, but only a very small leakage current",
      "Yes, current flows until the voltage is used up",
      "Yes, provided the applied voltage is high enough"
    ],
    "exp": "Voltage can exist across an open break, but without a closed loop no current flows. This is the one place where the water pipe analogy fails, because water would simply spill out of an open pipe while electricity will not.",
    "cat": "CKT",
    "id": "F01_031"
  },

  /* ═══════════ KIRCHHOFF ═══════════ */
  {
    "q": "Kirchhoff's Current Law is based on the conservation of:",
    "a": "Charge",
    "opts": ["Charge", "Energy", "Momentum", "Power"],
    "exp": "KCL states that current in equals current out at any junction, because charge cannot pile up at a node. It is conservation of charge. KVL is the one based on conservation of energy.",
    "cat": "KIRCH",
    "id": "F01_032"
  },
  {
    "q": "Kirchhoff's Voltage Law is based on the conservation of:",
    "a": "Energy",
    "opts": ["Energy", "Charge", "Current", "Magnetic flux"],
    "exp": "KVL says that around any closed loop the sum of EMFs equals the sum of voltage drops. Energy gained from the source is exactly the energy delivered to the components, so it is conservation of energy.",
    "cat": "KIRCH",
    "id": "F01_033"
  },
  {
    "q": "At a busbar, two incoming cables carry 40 A and 35 A. A single outgoing cable carries all of it away. What current does the outgoing cable carry?",
    "a": "75 A",
    "opts": ["75 A", "5 A", "37.5 A", "1400 A"],
    "exp": "By KCL, current in equals current out, so 40 + 35 = 75 A. This is exactly the reasoning used when checking whether a busbar or outgoing cable is adequately sized.",
    "cat": "KIRCH",
    "id": "F01_034"
  },
  {
    "q": "A 24 V supply feeds three resistors in series. Two of them drop 8 V and 11 V. What does the third drop?",
    "a": "5 V",
    "opts": ["5 V", "19 V", "24 V", "43 V"],
    "exp": "By KVL the drops must add up to the supply: 24 minus 8 minus 11 = 5 V. If measured drops do not add up to the supply on a real circuit, the missing voltage is usually being lost at a loose or corroded connection.",
    "cat": "KIRCH",
    "id": "F01_035"
  },
  {
    "q": "You measure 24 V at the supply of a control circuit, but the voltage drops across the components only add up to 20 V. What is the most likely cause?",
    "a": "A loose or high resistance connection somewhere in the loop is dropping the missing 4 V",
    "opts": [
      "A loose or high resistance connection somewhere in the loop is dropping the missing 4 V",
      "Kirchhoff's Voltage Law does not apply to control circuits",
      "The supply must actually be 20 V and the meter is faulty",
      "The extra 4 V is being stored in the circuit capacitance"
    ],
    "exp": "KVL must hold, so unaccounted voltage is being dropped somewhere you have not measured. In practice that is nearly always a loose terminal, corroded joint or damaged conductor. This is a genuine fault finding technique, not just theory.",
    "cat": "KIRCH",
    "id": "F01_036"
  },

  /* ═══════════ POWER ═══════════ */
  {
    "q": "Which formula does NOT correctly give electrical power?",
    "a": "P = V / I",
    "opts": ["P = V / I", "P = V x I", "P = I squared x R", "P = V squared / R"],
    "exp": "Power is V times I, not V divided by I. Dividing voltage by current gives resistance. The other three are all valid forms of the power relationship.",
    "cat": "PWR",
    "id": "F01_037"
  },
  {
    "q": "If the current through a cable is doubled, the heat loss in that cable becomes:",
    "a": "Four times greater",
    "opts": ["Four times greater", "Two times greater", "Half as much", "Unchanged"],
    "exp": "Loss is I squared R, so doubling current quadruples the heat. This single relationship explains why power is transmitted at high voltage, why cables are sized on current, and why overloaded conductors fail so quickly.",
    "cat": "PWR",
    "id": "F01_038"
  },
  {
    "q": "A 440 V heater draws 20 A. What is its power rating?",
    "a": "8.8 kW",
    "opts": ["8.8 kW", "22 kW", "8800 kW", "0.045 kW"],
    "exp": "P = V x I = 440 x 20 = 8800 W = 8.8 kW. The value 22 comes from dividing instead of multiplying, which actually gives the resistance in ohms.",
    "cat": "PWR",
    "id": "F01_039"
  },
  {
    "q": "A cable of 0.25 ohm resistance carries 40 A. What power is lost as heat in the cable?",
    "a": "400 W",
    "opts": ["400 W", "10 W", "160 W", "1600 W"],
    "exp": "P = I squared R = 40 x 40 x 0.25 = 1600 x 0.25 = 400 W. Using P = I x R instead of I squared R gives 10 W, which is the most common mistake here.",
    "cat": "PWR",
    "id": "F01_040"
  },
  {
    "q": "Why does a loose terminal overheat and eventually burn, while the rest of the cable stays cool?",
    "a": "The loose joint has high contact resistance, so I squared R heating is concentrated at that one point",
    "opts": [
      "The loose joint has high contact resistance, so I squared R heating is concentrated at that one point",
      "The loose joint draws far more current than the rest of the circuit",
      "Air trapped in the loose joint acts as a heater",
      "The loose joint causes the voltage to rise at that point"
    ],
    "exp": "Current through a series path is the same everywhere, so it is R that has increased locally. Higher R at the same I means much higher I squared R heat at that spot. This is exactly what thermal imaging surveys are looking for.",
    "cat": "PWR",
    "id": "F01_041"
  },
  {
    "q": "Why is electrical power transmitted at high voltage over long distances?",
    "a": "For the same power, higher voltage means lower current, and losses fall with the square of current",
    "opts": [
      "For the same power, higher voltage means lower current, and losses fall with the square of current",
      "Because high voltage travels faster through the conductor",
      "Because high voltage cables inherently have lower resistance",
      "Because high voltage reduces the resistance of the transmission line"
    ],
    "exp": "Since P = V x I, raising V for the same power reduces I. Because loss is I squared R, that reduction in current cuts the losses dramatically. The resistance of the line itself does not change with voltage.",
    "cat": "PWR",
    "id": "F01_042"
  },

  /* ═══════════ ENERGY ═══════════ */
  {
    "q": "What is the difference between power and energy?",
    "a": "Power is the rate of doing work, energy is the total work done over a period of time",
    "opts": [
      "Power is the rate of doing work, energy is the total work done over a period of time",
      "Power applies to AC circuits and energy applies to DC circuits",
      "Power is measured in kWh and energy is measured in watts",
      "They are the same quantity expressed in different units"
    ],
    "exp": "Power is instantaneous and measured in watts. Energy accumulates over time and is measured in joules or kWh. The units in the third option are swapped, which is a common confusion.",
    "cat": "ENGY",
    "id": "F01_043"
  },
  {
    "q": "A 4 kW motor runs for 6 hours. How much energy has it consumed?",
    "a": "24 kWh",
    "opts": ["24 kWh", "24 kW", "0.67 kWh", "144 kWh"],
    "exp": "E = P x t = 4 kW x 6 h = 24 kWh. Note the unit must be kWh, not kW. Quoting the wrong unit is treated as a wrong answer in an interview.",
    "cat": "ENGY",
    "id": "F01_044"
  },
  {
    "q": "What is the difference between a wattmeter and an energy meter?",
    "a": "A wattmeter reads instantaneous power in watts, an energy meter accumulates it over time and reads kWh",
    "opts": [
      "A wattmeter reads instantaneous power in watts, an energy meter accumulates it over time and reads kWh",
      "A wattmeter is used on AC and an energy meter is used on DC",
      "A wattmeter measures apparent power and an energy meter measures reactive power",
      "They measure the same quantity, but the energy meter is more accurate"
    ],
    "exp": "The relationship is the same as a speedometer versus an odometer. One tells you the rate right now, the other tells you the accumulated total. This comparison usually lands well with a panel.",
    "cat": "ENGY",
    "id": "F01_045"
  },
  {
    "q": "One kilowatt hour is equivalent to how many joules?",
    "a": "3.6 x 10^6 joules",
    "opts": ["3.6 x 10^6 joules", "1000 joules", "3600 joules", "1 x 10^6 joules"],
    "exp": "1 kWh = 1000 W x 3600 s = 3,600,000 joules. The figure 3600 is the number of seconds in an hour, which is the intermediate step people stop at.",
    "cat": "ENGY",
    "id": "F01_046"
  },

  /* ═══════════ AC AND DC ═══════════ */
  {
    "q": "What is the frequency of a direct current supply?",
    "a": "Zero",
    "opts": ["Zero", "50 Hz", "60 Hz", "It varies with the load"],
    "exp": "DC does not alternate, so it completes no cycles per second and its frequency is zero. This is occasionally asked as a quick catch question.",
    "cat": "ACDC",
    "id": "F01_047"
  },
  {
    "q": "Which of the following is the main reason AC is used as the primary supply on ships?",
    "a": "AC voltage can be easily stepped up or down using a transformer",
    "opts": [
      "AC voltage can be easily stepped up or down using a transformer",
      "AC can be stored in batteries more efficiently than DC",
      "AC produces less heat in conductors than DC at the same current",
      "AC motors always run faster than DC motors"
    ],
    "exp": "Easy voltage transformation is the headline reason, alongside simpler alternator construction, rugged induction motors and easier fault breaking. AC cannot be stored in batteries at all, which is exactly why DC backup exists on board.",
    "cat": "ACDC",
    "id": "F01_048"
  },
  {
    "q": "Why is breaking an AC fault current easier than breaking a DC fault current?",
    "a": "AC current naturally passes through zero twice every cycle, which helps the arc extinguish",
    "opts": [
      "AC current naturally passes through zero twice every cycle, which helps the arc extinguish",
      "AC fault currents are always much smaller than DC fault currents",
      "AC does not produce an arc when a circuit is broken",
      "AC circuit breakers are physically larger and stronger"
    ],
    "exp": "The natural current zero gives the arc a moment to de-ionise and extinguish. DC has no current zero, so the arc must be forcibly stretched and cooled, which is why DC breakers are more demanding to design.",
    "cat": "ACDC",
    "id": "F01_049"
  },
  {
    "q": "Which shipboard system fundamentally requires DC?",
    "a": "Emergency battery supplies and control electronics",
    "opts": [
      "Emergency battery supplies and control electronics",
      "Main propulsion cooling water pumps",
      "Accommodation lighting circuits",
      "Engine room ventilation fans"
    ],
    "exp": "Batteries are inherently DC, so emergency power, UPS, starting systems, alarms and electronics all run on DC. Pumps, lighting and fans are normally fed from the AC distribution system.",
    "cat": "ACDC",
    "id": "F01_050"
  },
  {
    "q": "Why is AC the natural output of a rotating generator?",
    "a": "The direction in which the conductors cut the magnetic flux reverses every half revolution",
    "opts": [
      "The direction in which the conductors cut the magnetic flux reverses every half revolution",
      "The AVR deliberately switches the output polarity",
      "The rotor windings are wound in alternating directions",
      "The connected load causes the output to alternate"
    ],
    "exp": "As the coil rotates, the relative direction of flux cutting reverses each half turn, so the induced EMF naturally alternates. Producing DC actually requires extra hardware, either a commutator or a rectifier, to force the output one way.",
    "cat": "ACDC",
    "id": "F01_051"
  },

  /* ═══════════ FREQUENCY ═══════════ */
  {
    "q": "On a 50 Hz supply, how long does one complete cycle take?",
    "a": "20 milliseconds",
    "opts": ["20 milliseconds", "50 milliseconds", "16.67 milliseconds", "2 milliseconds"],
    "exp": "T = 1 / f = 1 / 50 = 0.02 s = 20 ms. The figure 16.67 ms is the time period for a 60 Hz supply, so check which system you are being asked about.",
    "cat": "FREQ",
    "id": "F01_052"
  },
  {
    "q": "A 6 pole alternator must produce 50 Hz. At what speed must it run?",
    "a": "1000 RPM",
    "opts": ["1000 RPM", "1500 RPM", "3000 RPM", "500 RPM"],
    "exp": "From f = PN / 120, N = 120f / P = (120 x 50) / 6 = 1000 RPM. A 4 pole machine would need 1500 RPM and a 2 pole machine 3000 RPM for the same frequency.",
    "cat": "FREQ",
    "id": "F01_053"
  },
  {
    "q": "Why must supply frequency be held steady on a ship?",
    "a": "Motor speed depends directly on frequency, so drifting frequency changes the speed of every machine on board",
    "opts": [
      "Motor speed depends directly on frequency, so drifting frequency changes the speed of every machine on board",
      "Frequency determines the insulation resistance of the cables",
      "A change in frequency would change the supply voltage proportionally",
      "Circuit breakers can only operate at exactly 50 Hz"
    ],
    "exp": "Synchronous speed is 120f over P, so a frequency drift changes pump flows, fan speeds and timing based equipment across the whole vessel. That is why the governor holds engine speed so tightly.",
    "cat": "FREQ",
    "id": "F01_054"
  },

  /* ═══════════ PHASE ═══════════ */
  {
    "q": "In a purely inductive load such as a motor winding, the current:",
    "a": "Lags the voltage",
    "opts": ["Lags the voltage", "Leads the voltage", "Is exactly in phase with the voltage", "Is zero"],
    "exp": "Remember CIVIL. In an inductor L, V leads I, so current lags. In a capacitor C, I leads V. Most shipboard loads are motors, which is why ship power factor is normally lagging.",
    "cat": "PHASE",
    "id": "F01_055"
  },
  {
    "q": "In a three-phase supply, by how many degrees are the phases displaced from each other?",
    "a": "120 degrees",
    "opts": ["120 degrees", "90 degrees", "180 degrees", "60 degrees"],
    "exp": "Three phases are evenly spread over 360 degrees, so each is 120 degrees apart. This even spacing is what allows a rotating magnetic field to be produced, which is the basis of the induction motor.",
    "cat": "PHASE",
    "id": "F01_056"
  },
  {
    "q": "What does a phase angle of zero between voltage and current indicate?",
    "a": "A purely resistive load, with unity power factor",
    "opts": [
      "A purely resistive load, with unity power factor",
      "A purely inductive load, with zero power factor",
      "That no current is flowing in the circuit",
      "That the supply is direct current"
    ],
    "exp": "When voltage and current peak together the load is purely resistive, cos of 0 degrees is 1, and power factor is unity. Heaters and filament lamps behave this way.",
    "cat": "PHASE",
    "id": "F01_057"
  },

  /* ═══════════ RMS ═══════════ */
  {
    "q": "When a ship supply is described as 440 V, that figure is the:",
    "a": "RMS value",
    "opts": ["RMS value", "Peak value", "Average value", "Peak to peak value"],
    "exp": "All AC nameplates, meters and switchboard markings use RMS values. The peak for a 440 V system is about 622 V, and it is the peak that the insulation actually has to withstand.",
    "cat": "RMS",
    "id": "F01_058"
  },
  {
    "q": "What does the RMS value of an alternating quantity represent?",
    "a": "The equivalent steady DC value that produces the same heating effect in a resistor",
    "opts": [
      "The equivalent steady DC value that produces the same heating effect in a resistor",
      "The highest instantaneous value reached during a cycle",
      "The arithmetic mean of all instantaneous values over a full cycle",
      "The value measured at the exact midpoint of the cycle"
    ],
    "exp": "RMS is defined by the heating effect, which is what makes it useful for comparing AC directly with DC. The highest instantaneous value is the peak, and the full cycle mean of a sine wave is actually zero.",
    "cat": "RMS",
    "id": "F01_059"
  },
  {
    "q": "A supply has a peak voltage of 340 V. What is its RMS value?",
    "a": "240 V approximately",
    "opts": ["240 V approximately", "480 V approximately", "216 V approximately", "170 V"],
    "exp": "V RMS = 0.707 x V peak = 0.707 x 340 = about 240 V. This is exactly why a 240 V domestic supply peaks at around 340 V. The value 216 V comes from using the 0.637 average factor by mistake.",
    "cat": "RMS",
    "id": "F01_060"
  },
  {
    "q": "Why is the average value of a pure sine wave over one full cycle equal to zero?",
    "a": "The positive and negative half cycles are equal and opposite, so they cancel exactly",
    "opts": [
      "The positive and negative half cycles are equal and opposite, so they cancel exactly",
      "Because the wave spends most of its time near zero volts",
      "Because average value is only defined for direct current",
      "Because meters are unable to respond fast enough to measure it"
    ],
    "exp": "The perfect symmetry of the two halves makes the full cycle average zero, which is why average value is always quoted over a half cycle instead. It is also why a plain moving coil meter reads zero on AC unless a rectifier is fitted.",
    "cat": "RMS",
    "id": "F01_061"
  },
  {
    "q": "For a sine wave, the form factor is:",
    "a": "1.11",
    "opts": ["1.11", "1.414", "0.707", "0.637"],
    "exp": "Form factor is RMS divided by average, which works out to 1.11 for a sine wave. The value 1.414 is the peak factor, which is peak divided by RMS.",
    "cat": "RMS",
    "id": "F01_062"
  },
  {
    "q": "Why does the peak value matter when specifying insulation, rather than the RMS value?",
    "a": "Insulation experiences the actual instantaneous voltage, which reaches the peak twice every cycle",
    "opts": [
      "Insulation experiences the actual instantaneous voltage, which reaches the peak twice every cycle",
      "Because insulation resistance is measured only at peak voltage",
      "Because RMS values apply to current and peak values apply to voltage",
      "Because the peak value is what the switchboard meter displays"
    ],
    "exp": "The dielectric is stressed by the real instantaneous voltage, not by an average or effective figure. On a 440 V system that means 622 V of stress twice per cycle, which is why insulation is always rated well above nominal system voltage.",
    "cat": "RMS",
    "id": "F01_063"
  },

  /* ═══════════ POWER FACTOR ═══════════ */
  {
    "q": "Power factor is defined as:",
    "a": "The cosine of the phase angle between voltage and current",
    "opts": [
      "The cosine of the phase angle between voltage and current",
      "The sine of the phase angle between voltage and current",
      "The ratio of reactive power to apparent power",
      "The ratio of voltage to current in an AC circuit"
    ],
    "exp": "Power factor is cos phi, and equivalently the ratio of active power kW to apparent power kVA. The ratio of reactive to apparent power is sin phi, not the power factor.",
    "cat": "PF",
    "id": "F01_064"
  },
  {
    "q": "A load draws 80 kW at an apparent power of 100 kVA. What is the power factor?",
    "a": "0.8",
    "opts": ["0.8", "1.25", "0.6", "8"],
    "exp": "PF = kW / kVA = 80 / 100 = 0.8. Power factor can never exceed 1, so an answer of 1.25 immediately signals the division was done the wrong way round.",
    "cat": "PF",
    "id": "F01_065"
  },
  {
    "q": "Why is a low power factor a problem on a ship electrical system?",
    "a": "For the same useful kW, more current must flow, causing higher I squared R losses and greater voltage drop",
    "opts": [
      "For the same useful kW, more current must flow, causing higher I squared R losses and greater voltage drop",
      "It causes the supply frequency to fall below 50 Hz",
      "It increases the voltage at the load terminals dangerously",
      "It prevents circuit breakers from tripping on fault"
    ],
    "exp": "Poor power factor means the alternator and cables carry more current for the same useful output. That means more heating, more voltage drop, larger cables, and the alternator hitting its kVA limit while delivering less kW.",
    "cat": "PF",
    "id": "F01_066"
  },
  {
    "q": "Why are alternators rated in kVA rather than kW?",
    "a": "Winding heating depends on current, which is determined by kVA and not by kW",
    "opts": [
      "Winding heating depends on current, which is determined by kVA and not by kW",
      "Because kVA is always a larger and more impressive number",
      "Because the prime mover output is measured in kVA",
      "Because kW cannot be measured accurately on an alternator"
    ],
    "exp": "The limiting factor for an alternator is temperature rise, and that comes from I squared R heating. Current depends on kVA, so kVA is the honest rating regardless of what power factor the connected load happens to have.",
    "cat": "PF",
    "id": "F01_067"
  },
  {
    "q": "In the beer glass analogy for power, what does the foam represent?",
    "a": "Reactive power in kVAR",
    "opts": ["Reactive power in kVAR", "Active power in kW", "Apparent power in kVA", "Power factor"],
    "exp": "The liquid beer is the useful active power kW, the foam is the reactive power kVAR that occupies space but does no useful work, and the whole glass is the apparent power kVA that you had to pay for.",
    "cat": "PF",
    "id": "F01_068"
  },

  /* ═══════════ UNITS ═══════════ */
  {
    "q": "An insulation test result is recorded as 2 M ohm. What is this in ohms?",
    "a": "2,000,000 ohm",
    "opts": ["2,000,000 ohm", "2,000 ohm", "0.002 ohm", "0.000002 ohm"],
    "exp": "Capital M means mega, so 2 M ohm is two million ohms. A small m would mean milli, which would be 0.002 ohm. Confusing the two is a factor of one billion error and, in an insulation test, the difference between a healthy machine and a dead short.",
    "cat": "UNITS",
    "id": "F01_069"
  },
  {
    "q": "Which of these correctly pairs a quantity with its SI unit?",
    "a": "Inductance and henry",
    "opts": [
      "Inductance and henry",
      "Capacitance and henry",
      "Resistance and siemens",
      "Charge and ampere"
    ],
    "exp": "Inductance is measured in henry. Capacitance is in farad, resistance is in ohm with siemens being the unit of conductance, and charge is in coulomb with ampere being the unit of current.",
    "cat": "UNITS",
    "id": "F01_070"
  }

]);

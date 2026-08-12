window.loadQuizzes("F18_Sensors", [

  /* ═══════════ SENSOR / TRANSDUCER / TRANSMITTER ═══════════ */
  {
    "q": "What does a sensor do, as distinct from a transducer or transmitter?",
    "a": "It detects a physical quantity and responds to it, as the primary detecting element",
    "opts": [
      "It detects a physical quantity and responds to it, as the primary detecting element",
      "It conditions and sends a signal over distance to a control system",
      "It converts one form of energy into another, always electrical",
      "It amplifies and linearises a low-level signal"
    ],
    "exp": "A sensor is the primary detecting element, for example a Pt100 element sitting in a thermowell. Conditioning and sending the signal over distance is the transmitter's job. Converting energy from one form to another is the broader definition of a transducer, of which a sensor is one example.",
    "cat": "DEF",
    "id": "F18_001"
  },
  {
    "q": "Why is 'transducer' described as a broader term than 'sensor'?",
    "a": "A sensor is a transducer, but so is a device like a loudspeaker, which converts electrical energy into sound rather than detecting a quantity",
    "opts": [
      "A sensor is a transducer, but so is a device like a loudspeaker, which converts electrical energy into sound rather than detecting a quantity",
      "Transducers only work with electrical signals while sensors can be purely mechanical",
      "A transducer always includes signal conditioning and a sensor never does",
      "Sensors are only used for temperature while transducers cover all other quantities"
    ],
    "exp": "A transducer converts one form of energy or signal into another, usually electrical, and this covers devices that are not sensors at all, such as a loudspeaker converting electrical energy into sound. Every sensor is a transducer, but not every transducer is a sensor.",
    "cat": "DEF",
    "id": "F18_002"
  },
  {
    "q": "A pressure transmitter takes a millivolt strain gauge signal and turns it into a 4-20mA loop signal. Which of the three roles, sensor, transducer, or transmitter, is being described here?",
    "a": "Transmitter",
    "opts": ["Transmitter", "Sensor", "Transducer only, never a transmitter", "None of these, this is a control function"],
    "exp": "The transmitter takes the transducer's low-level output, conditions it (amplifies, linearises, converts to a standard signal like 4-20mA) and sends it over distance to the control system. The strain gauge itself is the transducer producing the raw millivolt signal.",
    "cat": "DEF",
    "id": "F18_003"
  },
  {
    "q": "On a real instrument, the sensor, transducer and transmitter functions are often:",
    "a": "Built into one housing, though they remain three separate jobs",
    "opts": [
      "Built into one housing, though they remain three separate jobs",
      "Always physically separated into three distinct devices on board ship",
      "Interchangeable terms that mean exactly the same thing",
      "Only ever combined in laboratory-grade instruments, never in field instruments"
    ],
    "exp": "A sensor detects the quantity, a transducer converts it into a usable signal, and a transmitter conditions and sends that signal. These are often built into a single field instrument housing, but they are still three separate functions, which is the distinction interviewers are testing for.",
    "cat": "DEF",
    "id": "F18_004"
  },

  /* ═══════════ THERMOCOUPLE ═══════════ */
  {
    "q": "The Seebeck effect describes:",
    "a": "A temperature difference between two junctions of dissimilar metals producing an EMF",
    "opts": [
      "A temperature difference between two junctions of dissimilar metals producing an EMF",
      "A change in resistance of a metal as its temperature changes",
      "The scattering of light by smoke particles in a detection chamber",
      "The induction of a voltage in a conductor moving through a magnetic field"
    ],
    "exp": "The Seebeck effect is the basis of the thermocouple: join two dissimilar metals and heat one junction relative to the other, and a small voltage appears. A change of resistance with temperature describes an RTD, not a thermocouple.",
    "cat": "TC",
    "id": "F18_005"
  },
  {
    "q": "The magnitude of a thermocouple's output EMF is a function of:",
    "a": "The temperature difference between the hot and cold junctions",
    "opts": [
      "The temperature difference between the hot and cold junctions",
      "The absolute temperature of the hot junction alone",
      "The absolute temperature of the cold junction alone",
      "The length of the thermocouple wire"
    ],
    "exp": "The EMF depends on the difference between the two junction temperatures, not the absolute temperature of either junction alone. This is the whole key to why cold junction compensation is needed.",
    "cat": "TC",
    "id": "F18_006"
  },
  {
    "q": "In a thermocouple circuit, where is the 'cold junction'?",
    "a": "Where the thermocouple wires connect to the copper wiring of the instrument",
    "opts": [
      "Where the thermocouple wires connect to the copper wiring of the instrument",
      "At the tip placed in the process being measured",
      "At the midpoint of the thermocouple wire run",
      "Inside the process fluid itself, opposite the hot junction"
    ],
    "exp": "The cold junction, or reference junction, is where the thermocouple metal meets ordinary copper terminal wiring, and it forms a second thermoelectric junction whether anyone intended it or not. The junction in the process being measured is the hot junction.",
    "cat": "TC",
    "id": "F18_007"
  },
  {
    "q": "A Type K thermocouple is made from which materials, and what is its rough usable range?",
    "a": "Chromel / Alumel, roughly -200°C to +1250°C",
    "opts": [
      "Chromel / Alumel, roughly -200°C to +1250°C",
      "Iron / Constantan, roughly -40°C to +750°C",
      "Copper / Constantan, roughly -200°C to +350°C",
      "Platinum / Rhodium, roughly 0°C to +850°C"
    ],
    "exp": "Type K (Chromel/Alumel) is the most common general-purpose thermocouple, wide range with good stability. Iron/Constantan is Type J, limited at the top end by iron corrosion. Copper/Constantan is Type T, the low-temperature precision choice.",
    "cat": "TC",
    "id": "F18_008"
  },
  {
    "q": "A Type J thermocouple's usable range at the high end is limited by:",
    "a": "The iron leg corroding in oxidising atmospheres",
    "opts": [
      "The iron leg corroding in oxidising atmospheres",
      "The constantan leg melting below 750°C",
      "Loss of the Seebeck effect above 300°C",
      "Cold junction compensation becoming impossible above 750°C"
    ],
    "exp": "Type J has a higher output than Type K but its iron leg corrodes in oxidising atmospheres at the top of its range, which is why Type K is preferred as the general-purpose workhorse despite its slightly lower output.",
    "cat": "TC",
    "id": "F18_009"
  },
  {
    "q": "Why is cold junction compensation needed on a thermocouple circuit?",
    "a": "Because the raw output only represents the temperature difference between the two junctions, so an unknown cold junction temperature makes the reading wrong",
    "opts": [
      "Because the raw output only represents the temperature difference between the two junctions, so an unknown cold junction temperature makes the reading wrong",
      "Because thermocouples generate no signal at all without an external power supply",
      "Because the hot junction drifts in calibration over time and needs periodic resetting",
      "Because thermocouples cannot be used above 500°C without it"
    ],
    "exp": "If the cold junction sits at, say, 25°C instead of the 0°C the reference tables assume, the raw millivolt reading is low by exactly the EMF that 25°C would itself produce. Compensation measures the actual cold junction temperature and electronically adds back the equivalent EMF.",
    "cat": "TC",
    "id": "F18_010"
  },
  {
    "q": "A thermocouple reading that used to be accurate now drifts a few degrees, tracking engine room ambient temperature rather than the process. This points most directly at:",
    "a": "A cold junction compensation fault",
    "opts": [
      "A cold junction compensation fault",
      "A live zero fault on the 4-20mA loop",
      "The hot junction wires being swapped",
      "Normal ageing of the platinum element"
    ],
    "exp": "If cold junction compensation fails or is wired wrong, the reading drifts with the ambient temperature at the terminal box, since the instrument is no longer correcting for it. A thermocouple has no platinum element, so the last option does not apply to it at all.",
    "cat": "TC",
    "id": "F18_011"
  },
  {
    "q": "Why is a thermocouple, rather than an RTD, typically used for exhaust gas temperature on a main engine?",
    "a": "It needs no external power to generate its signal and covers a much wider, more rugged temperature range",
    "opts": [
      "It needs no external power to generate its signal and covers a much wider, more rugged temperature range",
      "It is more linear than an RTD over the full exhaust gas range",
      "It responds more slowly, giving a more stable average reading",
      "It requires 3-wire or 4-wire connection to eliminate lead resistance error"
    ],
    "exp": "A thermocouple is simple, rugged, cheap, self-generating (no excitation current needed) and covers an enormous temperature range, which is why it suits high-temperature, harsh points like exhaust gas. It is actually moderately non-linear compared to an RTD, and the 3/4-wire lead compensation issue belongs to the RTD, not the thermocouple.",
    "cat": "TC",
    "id": "F18_012"
  },

  /* ═══════════ RTD / PT100 ═══════════ */
  {
    "q": "How does an RTD's operating principle differ fundamentally from a thermocouple's?",
    "a": "An RTD is a passive element whose resistance changes with temperature, requiring an external circuit and current, rather than generating its own voltage",
    "opts": [
      "An RTD is a passive element whose resistance changes with temperature, requiring an external circuit and current, rather than generating its own voltage",
      "An RTD generates its own EMF from the Seebeck effect, just like a thermocouple but made of platinum",
      "An RTD only works with AC excitation while a thermocouple only works with DC",
      "An RTD has no temperature range limit, unlike a thermocouple"
    ],
    "exp": "A thermocouple generates its own small voltage via the Seebeck effect. An RTD works on the opposite principle: it is a passive resistive element, and an external circuit passes a small measuring current through it and reads the resulting resistance.",
    "cat": "RTD",
    "id": "F18_013"
  },
  {
    "q": "Why is platinum the almost universal choice of element for an RTD?",
    "a": "It is chemically stable, does not oxidise, and gives a very linear, repeatable resistance-temperature relationship",
    "opts": [
      "It is chemically stable, does not oxidise, and gives a very linear, repeatable resistance-temperature relationship",
      "It is the cheapest metal with a measurable resistance change",
      "It has the largest resistance change per degree of any metal",
      "It generates its own EMF in addition to changing resistance"
    ],
    "exp": "Platinum is used because it is chemically stable, does not oxidise, and its resistance rises with temperature in a very linear, very repeatable way over a wide range, which is exactly what an accurate, long-lived industrial sensor needs.",
    "cat": "RTD",
    "id": "F18_014"
  },
  {
    "q": "An interviewer asks 'what are the properties of a Pt100?' and the candidate answers 'it's a resistance sensor.' Why does this score almost nothing?",
    "a": "Because the question is really asking for all five properties together: resistance at 0°C, temperature coefficient, linearity, usable range, and wiring configuration",
    "opts": [
      "Because the question is really asking for all five properties together: resistance at 0°C, temperature coefficient, linearity, usable range, and wiring configuration",
      "Because 'resistance sensor' is factually incorrect, a Pt100 is a voltage-generating device",
      "Because the answer should have mentioned the Seebeck effect instead",
      "Because the examiner is only looking for the phrase 'RTD', not 'resistance sensor'"
    ],
    "exp": "The notes flag this explicitly as a trap: 'what are the properties of a Pt100' is a five-part question disguised as one. A complete answer must give all five: resistance at 0°C, temperature coefficient, linearity, usable range, and wiring. Naming only the general category scores almost nothing.",
    "cat": "RTD",
    "id": "F18_015"
  },
  {
    "q": "What is the resistance of a Pt100 at 0°C, and where does this fix its name?",
    "a": "100.00 Ω by definition per IEC 60751, which is where the name 'Pt100' comes from",
    "opts": [
      "100.00 Ω by definition per IEC 60751, which is where the name 'Pt100' comes from",
      "0.00385 Ω, matching its temperature coefficient",
      "1000.00 Ω, ten times higher than commonly assumed",
      "100.00 Ω, but only approximately, with no defining standard"
    ],
    "exp": "A Pt100 has a resistance of exactly 100.00 Ω at 0°C by definition, per IEC 60751. This defined value is where the '100' in the name Pt100 comes from. 0.00385 Ω/Ω/°C is the temperature coefficient, a completely different property.",
    "cat": "RTD",
    "id": "F18_016"
  },
  {
    "q": "The Pt100's temperature coefficient (α) is approximately:",
    "a": "Positive, about 0.00385 Ω/Ω/°C between 0°C and 100°C",
    "opts": [
      "Positive, about 0.00385 Ω/Ω/°C between 0°C and 100°C",
      "Negative, about 0.00385 Ω/Ω/°C between 0°C and 100°C",
      "Positive, about 3.85 Ω/Ω/°C between 0°C and 100°C",
      "Zero, since a Pt100's resistance does not change appreciably with temperature"
    ],
    "exp": "The Pt100 is a PTC (positive temperature coefficient) device: resistance rises as temperature rises, at approximately 0.00385 Ω/Ω/°C between 0°C and 100°C per IEC 60751. A negative coefficient describes an NTC thermistor, not a Pt100.",
    "cat": "RTD",
    "id": "F18_017"
  },
  {
    "q": "Which statement best describes a Pt100's linearity?",
    "a": "Near linear over its working range, though precision instruments apply a small correcting polynomial (Callendar-Van Dusen) for full accuracy",
    "opts": [
      "Near linear over its working range, though precision instruments apply a small correcting polynomial (Callendar-Van Dusen) for full accuracy",
      "Strongly non-linear, closer to exponential, requiring a reference table for any use",
      "Perfectly linear with zero deviation across its entire range, no correction ever needed",
      "Linear only below 0°C and sharply non-linear above it"
    ],
    "exp": "A Pt100 is near linear, close enough to a straight line that simple linear scaling is usable for many purposes, though precision work applies the Callendar-Van Dusen equation for full accuracy. Strongly non-linear, exponential behaviour describes a thermistor, not an RTD.",
    "cat": "RTD",
    "id": "F18_018"
  },
  {
    "q": "The typical usable range of a platinum RTD element is:",
    "a": "About -200°C to +850°C",
    "opts": ["About -200°C to +850°C", "About -50°C to +150°C", "About 0°C to +100°C only", "About -200°C to +1250°C"],
    "exp": "A platinum RTD element is typically usable from about -200°C to +850°C, though most marine applications use it well inside that range for bearing, winding and cooling water temperatures. -50°C to +150°C is the much narrower thermistor range, and -200°C to +1250°C overstates it, closer to a Type K thermocouple's span.",
    "cat": "RTD",
    "id": "F18_019"
  },
  {
    "q": "A Pt100 can be wired in which configurations?",
    "a": "2-wire, 3-wire, or 4-wire",
    "opts": ["2-wire, 3-wire, or 4-wire", "Only 2-wire", "Only 4-wire, for accuracy reasons", "3-wire or 5-wire only"],
    "exp": "A Pt100 can be connected as 2-wire, 3-wire or 4-wire, and this is the part of the five-property answer candidates most often forget to mention.",
    "cat": "RTD",
    "id": "F18_020"
  },
  {
    "q": "Why is a platinum RTD's resistance-temperature relationship near linear?",
    "a": "Higher temperature increases lattice vibration, increasing electron-lattice collisions at a rate close to proportional to the temperature rise",
    "opts": [
      "Higher temperature increases lattice vibration, increasing electron-lattice collisions at a rate close to proportional to the temperature rise",
      "Platinum atoms release additional free electrons as temperature rises, in direct proportion to temperature",
      "The Callendar-Van Dusen equation forces the relationship to be linear by design",
      "Platinum's resistance is fixed by its crystal structure and does not actually depend on temperature"
    ],
    "exp": "Raising temperature increases thermal vibration of the lattice atoms, which increases the rate at which free electrons collide with them, and over a modest span this is close to proportional to the temperature rise. A semiconductor's resistance instead falls with temperature because extra charge carriers become available, which is the thermistor mechanism, not the metal RTD mechanism.",
    "cat": "RTD",
    "id": "F18_021"
  },
  {
    "q": "Why does lead resistance in the cable run matter for an RTD reading?",
    "a": "Because the instrument measures resistance to infer temperature and cannot tell sensor resistance apart from lead resistance, so any lead resistance is read as extra temperature",
    "opts": [
      "Because the instrument measures resistance to infer temperature and cannot tell sensor resistance apart from lead resistance, so any lead resistance is read as extra temperature",
      "Because lead resistance causes the platinum element itself to heat up and give a false high reading",
      "Because lead resistance reduces the excitation current below the level needed to energise the element",
      "Because lead resistance only matters for thermocouples, not for RTDs"
    ],
    "exp": "The instrument cannot distinguish resistance sitting inside the platinum element from resistance sitting in the copper lead wire; both are read as if they were sensor resistance, and therefore as extra temperature. A Pt100 changes by roughly 0.385 Ω per °C, so even a modest lead resistance can misread as several degrees of error.",
    "cat": "RTD",
    "id": "F18_022"
  },
  {
    "q": "In a 2-wire RTD connection, lead resistance is:",
    "a": "Added in full to the reading, uncompensated, since the same two wires carry both the measuring current and the return voltage",
    "opts": [
      "Added in full to the reading, uncompensated, since the same two wires carry both the measuring current and the return voltage",
      "Automatically cancelled because two wires provide redundancy",
      "Halved compared to a 3-wire connection",
      "Irrelevant, since 2-wire is only used with thermocouples"
    ],
    "exp": "In a 2-wire connection, a single pair of wires carries both the measuring current out and the resulting voltage back, so the full lead resistance of both wires is added directly, uncompensated. It is only acceptable for short runs or where accuracy does not matter.",
    "cat": "RTD",
    "id": "F18_023"
  },
  {
    "q": "How does a 3-wire RTD connection compensate for lead resistance?",
    "a": "A third wire lets the instrument separately measure the lead resistance, assuming matched, equal-length, same-gauge leads, and subtract it from the reading",
    "opts": [
      "A third wire lets the instrument separately measure the lead resistance, assuming matched, equal-length, same-gauge leads, and subtract it from the reading",
      "A third wire carries a completely separate, current-free voltage sensing path, eliminating all lead resistance error",
      "A third wire doubles the excitation current so lead resistance becomes negligible by comparison",
      "A third wire is only used for redundancy in case one lead fails"
    ],
    "exp": "The 3-wire connection adds a third wire that the instrument uses to measure the lead resistance (assuming the two current-carrying leads are matched) and subtracts it from the total. It is the industry standard for most process measurement. Using a fully separate, current-free sensing pair describes the 4-wire connection instead.",
    "cat": "RTD",
    "id": "F18_024"
  },
  {
    "q": "Why does a 4-wire RTD connection eliminate lead resistance error entirely, rather than merely compensating for it?",
    "a": "Because a separate pair of leads carrying negligible current senses the voltage directly across the element, so those sensing leads drop no voltage of their own",
    "opts": [
      "Because a separate pair of leads carrying negligible current senses the voltage directly across the element, so those sensing leads drop no voltage of their own",
      "Because 4-wire connections use twice the excitation current of a 3-wire connection",
      "Because the four wires are made of a lower-resistance alloy than 2-wire or 3-wire cable",
      "Because a 4-wire connection assumes matched lead lengths, just like a 3-wire connection, only with more redundancy"
    ],
    "exp": "In a 4-wire connection, two wires carry the constant measuring current and a completely separate pair, carrying negligible current, measures the voltage directly across the element. Since the sensing leads carry effectively no current, they drop no voltage, so lead resistance in the current-carrying wires causes no error at all. It is used for laboratory and calibration-grade accuracy, and unlike 3-wire it does not depend on matched lead lengths to work.",
    "cat": "RTD",
    "id": "F18_025"
  },

  /* ═══════════ THERMISTOR ═══════════ */
  {
    "q": "What is a thermistor made from, and how does this differ from an RTD?",
    "a": "A sintered semiconductor ceramic, unlike the pure metal element of an RTD",
    "opts": [
      "A sintered semiconductor ceramic, unlike the pure metal element of an RTD",
      "Pure platinum, identical to an RTD but in a smaller package",
      "Two dissimilar metals joined at a junction, like a thermocouple",
      "A piezoelectric crystal that changes resistance under mechanical stress"
    ],
    "exp": "A thermistor is also a resistive temperature device, but it is made from a sintered semiconductor ceramic rather than a pure metal, and that difference in material is what gives it completely different behaviour from an RTD.",
    "cat": "THERM",
    "id": "F18_026"
  },
  {
    "q": "An NTC thermistor's resistance behaviour as temperature rises is:",
    "a": "Falls, because more charge carriers become available in the semiconductor",
    "opts": [
      "Falls, because more charge carriers become available in the semiconductor",
      "Rises, because thermal vibration increases electron-lattice collisions",
      "Stays constant until a threshold temperature is reached",
      "Rises sharply over a narrow band, then falls back to baseline"
    ],
    "exp": "An NTC (Negative Temperature Coefficient) thermistor's resistance falls as temperature rises, because more charge carriers become available in the semiconductor, and this dominates heavily over any increase in collision losses. This is the opposite behaviour to a metal RTD, whose resistance rises with temperature.",
    "cat": "THERM",
    "id": "F18_027"
  },
  {
    "q": "A PTC thermistor is used less for precision measurement and more as:",
    "a": "A self-resetting protective device, for example built into motor windings to trip on overheating",
    "opts": [
      "A self-resetting protective device, for example built into motor windings to trip on overheating",
      "A cold junction compensation sensor in thermocouple instruments",
      "A wide-range primary temperature sensor for exhaust gas",
      "A capacitive level probe element"
    ],
    "exp": "A PTC thermistor's resistance rises sharply, often over a narrow band, once a threshold is passed, which suits it to self-resetting protection such as motor winding overtemperature trips rather than precision measurement. The cold junction compensation role is typically filled by an NTC thermistor instead.",
    "cat": "THERM",
    "id": "F18_028"
  },
  {
    "q": "Compared to a platinum RTD, a thermistor's resistance-temperature relationship is:",
    "a": "Strongly non-linear, closer to exponential, with a much narrower usable range and generally poorer long-term stability",
    "opts": [
      "Strongly non-linear, closer to exponential, with a much narrower usable range and generally poorer long-term stability",
      "Near linear, exactly like a Pt100, but cheaper to manufacture",
      "Identical in every respect, since both are resistive temperature devices",
      "More linear than an RTD but with a much wider usable range"
    ],
    "exp": "A thermistor's resistance change per degree is far larger than a platinum RTD's, making it very sensitive over a narrow range, but its relationship is strongly non-linear (closer to exponential), its usable range is much narrower, and its long-term stability is generally poorer than an RTD's near-straight-line behaviour.",
    "cat": "THERM",
    "id": "F18_029"
  },
  {
    "q": "A thermistor would typically be chosen over an RTD when:",
    "a": "High sensitivity over a limited temperature band is wanted and cost must stay low",
    "opts": [
      "High sensitivity over a limited temperature band is wanted and cost must stay low",
      "Accuracy and a wide, predictable range matter most",
      "The application needs no external excitation current at all",
      "The measurement point runs at exhaust gas temperatures"
    ],
    "exp": "A thermistor suits applications wanting high sensitivity over a limited band at low cost, such as cold junction compensation sensors, coolant temperature switches, and small proximity alarms. An RTD is chosen instead where accuracy and a wide, predictable range matter more. Neither device is self-powered; both need an excitation current, unlike a thermocouple.",
    "cat": "THERM",
    "id": "F18_030"
  },

  /* ═══════════ THERMOCOUPLE vs RTD vs THERMISTOR ═══════════ */
  {
    "q": "Which of the three common temperature sensors has the widest usable range?",
    "a": "Thermocouple, roughly -200°C to over +1000°C depending on type",
    "opts": [
      "Thermocouple, roughly -200°C to over +1000°C depending on type",
      "RTD (Pt100), roughly -200°C to +850°C",
      "Thermistor, typically -50°C to +150°C",
      "All three cover approximately the same range"
    ],
    "exp": "The thermocouple has the widest range of the three, roughly -200°C to over +1000°C depending on type. The RTD is wide but narrower, roughly -200°C to +850°C, and the thermistor is by far the narrowest, typically -50°C to +150°C.",
    "cat": "CMP",
    "id": "F18_031"
  },
  {
    "q": "Which sensor type needs no external power to generate its signal?",
    "a": "Thermocouple, since it is self-generating via the Seebeck effect",
    "opts": [
      "Thermocouple, since it is self-generating via the Seebeck effect",
      "RTD, since platinum generates its own small EMF",
      "Thermistor, since semiconductors are inherently self-powered",
      "None of the three; all require an external excitation current"
    ],
    "exp": "The thermocouple is self-generating, producing its own voltage via the Seebeck effect with no external power needed. Both the RTD and the thermistor are passive resistive devices that require an excitation current from the instrument.",
    "cat": "CMP",
    "id": "F18_032"
  },
  {
    "q": "Of the three, which has the strongest non-linear (exponential) resistance-temperature relationship?",
    "a": "Thermistor",
    "opts": ["Thermistor", "RTD (Pt100)", "Thermocouple", "They are all equally linear"],
    "exp": "The thermistor is strongly non-linear, closer to exponential. The RTD is near linear, and the thermocouple is moderately non-linear, needing a reference table or linearisation, but nowhere near as sharply curved as the thermistor's response.",
    "cat": "CMP",
    "id": "F18_033"
  },
  {
    "q": "For bearing and winding temperatures on large motors and generators, where accuracy over a moderate range matters more than extreme range or ruggedness, the typical choice is:",
    "a": "RTD (Pt100)",
    "opts": ["RTD (Pt100)", "Thermocouple", "Thermistor", "Piezoelectric sensor"],
    "exp": "The RTD (Pt100) is chosen for bearings, windings, cooling water and lube oil temperature, where accuracy over a moderate range matters more than the extreme range or ruggedness a thermocouple offers. A thermocouple suits exhaust gas and other high-temperature points instead.",
    "cat": "CMP",
    "id": "F18_034"
  },
  {
    "q": "Which statement correctly compares response time and cost across the three sensor types?",
    "a": "Thermocouples and thermistors both respond fast due to small thermal mass and are low cost; the RTD's response is moderate, depending on sheath and mass, and its cost is moderate",
    "opts": [
      "Thermocouples and thermistors both respond fast due to small thermal mass and are low cost; the RTD's response is moderate, depending on sheath and mass, and its cost is moderate",
      "The RTD is always the fastest responding and cheapest of the three",
      "The thermistor is the slowest responding because of its large thermal mass",
      "Cost and response time are identical across all three sensor types"
    ],
    "exp": "Thermocouples and thermistors have small thermal mass and respond fast, and both are low cost. The RTD's response is moderate and depends on its sheath and mass, and its cost sits in the middle of the three.",
    "cat": "CMP",
    "id": "F18_035"
  },

  /* ═══════════ PRESSURE SENSING ═══════════ */
  {
    "q": "A Bourdon tube pressure gauge works by:",
    "a": "A curved, flattened metal tube trying to straighten under applied pressure, with that mechanical movement linked through gearing to a pointer",
    "opts": [
      "A curved, flattened metal tube trying to straighten under applied pressure, with that mechanical movement linked through gearing to a pointer",
      "A thin flexible disc deflecting under pressure and generating a strain gauge signal",
      "A crystal generating an electrical charge when mechanically stressed",
      "A resistive element wired into a Wheatstone bridge to amplify a small resistance change"
    ],
    "exp": "The Bourdon tube is a curved, flattened metal tube sealed at one end; applied pressure tries to straighten the curve, and that movement is linked through gearing to a pointer. It is purely mechanical with no electrical output, the classic local pressure gauge.",
    "cat": "PRES",
    "id": "F18_036"
  },
  {
    "q": "A piezoelectric pressure sensor is well suited to dynamic pressure measurement such as combustion pressure indication, but is not suited to measuring genuinely static pressure held over a long period because:",
    "a": "The electrical charge it generates leaks away over time",
    "opts": [
      "The electrical charge it generates leaks away over time",
      "The crystal permanently deforms under sustained load",
      "It requires constant excitation current that drains the loop supply",
      "Its output is too fast for any control system to read accurately"
    ],
    "exp": "Certain crystals, quartz being the classic example, generate a small electrical charge when mechanically stressed. This is fast responding and well suited to dynamic pressure, but the charge leaks away over time, so it cannot hold a reading of a genuinely static pressure.",
    "cat": "PRES",
    "id": "F18_037"
  },
  {
    "q": "A strain gauge pressure sensor is usually wired into a Wheatstone bridge because:",
    "a": "The resistance change from stretching or compressing is very slight, and the bridge produces a usable voltage output from that tiny change",
    "opts": [
      "The resistance change from stretching or compressing is very slight, and the bridge produces a usable voltage output from that tiny change",
      "A Wheatstone bridge is required to supply excitation current to a diaphragm",
      "It converts the resistance change into a purely mechanical pointer movement",
      "It compensates for lead resistance in the same way a 3-wire RTD does"
    ],
    "exp": "A strain gauge bonded to a diaphragm or structural member changes resistance only very slightly as it stretches or compresses. Wiring it into a Wheatstone bridge turns that tiny resistance change into a usable voltage output, which is common in electronic pressure transmitters.",
    "cat": "PRES",
    "id": "F18_038"
  },
  {
    "q": "A diaphragm pressure sensor's deflection can be measured:",
    "a": "Mechanically as a gauge, or electrically by a strain gauge or capacitive element",
    "opts": [
      "Mechanically as a gauge, or electrically by a strain gauge or capacitive element",
      "Only electrically, since diaphragms have no mechanical output",
      "Only by a piezoelectric crystal bonded permanently to the disc",
      "Only by timing an ultrasonic echo off the diaphragm surface"
    ],
    "exp": "A thin flexible diaphragm deflects under applied pressure, and that deflection can be read mechanically as a gauge, or electrically via a strain gauge or capacitive element bonded to or facing the diaphragm.",
    "cat": "PRES",
    "id": "F18_039"
  },
  {
    "q": "Which of the four pressure sensing methods is purely mechanical with no electrical output at all?",
    "a": "Bourdon tube",
    "opts": ["Bourdon tube", "Strain gauge", "Piezoelectric", "Diaphragm with capacitive element"],
    "exp": "The Bourdon tube is purely mechanical, with its curve movement linked directly through gearing to a pointer, no electrical output involved. Strain gauge and piezoelectric methods are both electrical, and a diaphragm can be read either way depending on how its deflection is picked up.",
    "cat": "PRES",
    "id": "F18_040"
  },

  /* ═══════════ LEVEL SENSING ═══════════ */
  {
    "q": "A capacitance level probe determines level by:",
    "a": "Forming one plate of a capacitor with the probe, using the tank wall or a reference electrode as the other, and sensing the capacitance change as the liquid acts as or displaces the dielectric",
    "opts": [
      "Forming one plate of a capacitor with the probe, using the tank wall or a reference electrode as the other, and sensing the capacitance change as the liquid acts as or displaces the dielectric",
      "Timing the echo of a sound pulse reflecting off the liquid surface",
      "Measuring hydrostatic pressure at the bottom of the tank relative to the top",
      "Sensing eddy currents induced in the liquid by an oscillating magnetic field"
    ],
    "exp": "A capacitance probe forms one plate of a capacitor with the tank wall or a reference electrode as the other, and the liquid acts as, or displaces, the dielectric between them. As level rises, the capacitance changes in a known way that converts to a level reading.",
    "cat": "LVL",
    "id": "F18_041"
  },
  {
    "q": "An ultrasonic level sensor is affected by which of the following, which radar largely avoids?",
    "a": "Vapour, foam and turbulence at the surface",
    "opts": [
      "Vapour, foam and turbulence at the surface",
      "The known speed of sound in air",
      "The density of the liquid being measured",
      "The tank wall material acting as a capacitor plate"
    ],
    "exp": "Ultrasonic level sensing is non-contact but affected by vapour, foam and turbulence at the surface. Radar uses a microwave pulse instead of sound and is not affected by vapour or gas composition the way ultrasonic is, which is why radar is preferred for cargo tank gauging on tankers.",
    "cat": "LVL",
    "id": "F18_042"
  },
  {
    "q": "A differential pressure (DP) level transmitter converts a level reading from:",
    "a": "The hydrostatic pressure at the bottom of the tank relative to the top, which is proportional to liquid height for a given density",
    "opts": [
      "The hydrostatic pressure at the bottom of the tank relative to the top, which is proportional to liquid height for a given density",
      "The time of flight of a microwave pulse reflecting off the surface",
      "The capacitance change between a probe and the tank wall",
      "The buoyant position of a float riding on the surface"
    ],
    "exp": "DP level sensing measures the hydrostatic pressure at the bottom of the tank relative to the pressure at the top (or atmosphere for an open tank). That pressure is directly proportional to the height of liquid above the sensor for a given density, provided the density is known and constant.",
    "cat": "LVL",
    "id": "F18_043"
  },
  {
    "q": "Why is radar preferred over ultrasonic for cargo tank gauging on tankers?",
    "a": "It is not affected by vapour or gas composition above the liquid the way ultrasonic is",
    "opts": [
      "It is not affected by vapour or gas composition above the liquid the way ultrasonic is",
      "It is the only method that works with a float",
      "It measures hydrostatic pressure rather than time of flight",
      "It does not require knowledge of the speed of light"
    ],
    "exp": "Radar uses a microwave pulse and times its reflection off the surface, similar in principle to ultrasonic but not affected by vapour or gas composition above the liquid, which is why it is the preferred method for cargo tank gauging on tankers.",
    "cat": "LVL",
    "id": "F18_044"
  },
  {
    "q": "A float level sensor determines level by:",
    "a": "Riding on the liquid surface, with its position sensed mechanically or magnetically",
    "opts": [
      "Riding on the liquid surface, with its position sensed mechanically or magnetically",
      "Timing an echo reflected from the liquid surface",
      "Sensing the hydrostatic pressure difference between top and bottom of the tank",
      "Measuring the dielectric constant of the liquid directly"
    ],
    "exp": "A float rides on the liquid surface, and its position, sensed mechanically or magnetically, indicates level. It is simple and reliable, the traditional tank gauge method.",
    "cat": "LVL",
    "id": "F18_045"
  },

  /* ═══════════ FLOW SENSING ═══════════ */
  {
    "q": "An orifice plate or venturi flow measurement works because:",
    "a": "The restriction creates a pressure drop that increases with the square of flow rate, which a DP transmitter is scaled to read as flow",
    "opts": [
      "The restriction creates a pressure drop that increases with the square of flow rate, which a DP transmitter is scaled to read as flow",
      "A rotor inside the restriction spins at a speed proportional to flow rate",
      "The restriction induces a voltage in the fluid proportional to its velocity",
      "The restriction generates ultrasonic pulses that time the fluid's transit"
    ],
    "exp": "A restriction such as an orifice plate or venturi creates a pressure drop that increases with the square of flow rate, and a DP transmitter across it is scaled to read flow. A spinning rotor describes a turbine meter, and an induced voltage describes an electromagnetic flow meter.",
    "cat": "FLOW",
    "id": "F18_046"
  },
  {
    "q": "A turbine flow meter infers flow rate by:",
    "a": "Sensing rotor speed magnetically as pulses, since rotor speed is proportional to flow rate",
    "opts": [
      "Sensing rotor speed magnetically as pulses, since rotor speed is proportional to flow rate",
      "Measuring the pressure drop across a fixed restriction",
      "Timing an ultrasonic pulse's transit through the fluid",
      "Measuring the voltage induced by fluid moving through a magnetic field"
    ],
    "exp": "A turbine flow meter uses the fluid to spin a small rotor, and rotor speed, sensed magnetically as pulses, is proportional to flow rate. It is accurate for clean fluids.",
    "cat": "FLOW",
    "id": "F18_047"
  },
  {
    "q": "An electromagnetic flow meter measures flow by applying:",
    "a": "Faraday's law: a conductive fluid moving through a magnetic field induces a voltage proportional to its velocity",
    "opts": [
      "Faraday's law: a conductive fluid moving through a magnetic field induces a voltage proportional to its velocity",
      "The Seebeck effect between two dissimilar metal probes in the fluid",
      "The square-law relationship between pressure drop and flow rate across a restriction",
      "The piezoelectric effect as fluid stresses a crystal in the flow path"
    ],
    "exp": "An electromagnetic flow meter applies Faraday's law: a conductive fluid moving through a magnetic field induces a voltage proportional to its velocity, with no moving parts and no obstruction in the flow path.",
    "cat": "FLOW",
    "id": "F18_048"
  },
  {
    "q": "Why is an electromagnetic flow meter well suited to seawater ballast systems specifically?",
    "a": "Seawater is conductive, and the meter has no moving parts and no obstruction in the flow path",
    "opts": [
      "Seawater is conductive, and the meter has no moving parts and no obstruction in the flow path",
      "Seawater is non-conductive, which the meter specifically requires",
      "Ballast systems need the square-law pressure drop that only an orifice plate can provide",
      "Ballast systems require the fastest possible dynamic pressure response"
    ],
    "exp": "The electromagnetic flow meter relies on the fluid being conductive to induce a voltage as it moves through the magnetic field, and it has no moving parts and an unobstructed bore, which suits conductive liquids like seawater ballast where an unobstructed bore matters.",
    "cat": "FLOW",
    "id": "F18_049"
  },

  /* ═══════════ SMOKE & FIRE DETECTION ═══════════ */
  {
    "q": "An ionisation smoke detector alarms because:",
    "a": "Smoke particles entering the ionised chamber disrupt the steady current flowing between two charged electrodes, and the detector senses that current drop",
    "opts": [
      "Smoke particles entering the ionised chamber disrupt the steady current flowing between two charged electrodes, and the detector senses that current drop",
      "Smoke particles scatter light from an LED onto a sensor that would otherwise receive no light",
      "The chamber's temperature rises above a fixed threshold",
      "Smoke particles absorb UV radiation, which the detector senses as a drop in UV level"
    ],
    "exp": "An ionisation detector contains a small radioactive source that ionises the air in a chamber between two charged electrodes, allowing a small steady current to flow. Smoke particles entering the chamber attach to the ionised air molecules, disrupting that current, and the detector alarms on the current drop. Scattered light onto a sensor is the photoelectric mechanism instead.",
    "cat": "FIRE",
    "id": "F18_050"
  },
  {
    "q": "Ionisation smoke detectors respond most strongly to which type of fire?",
    "a": "Fast, flaming fires producing small, largely invisible combustion particles",
    "opts": [
      "Fast, flaming fires producing small, largely invisible combustion particles",
      "Slow, smouldering fires producing larger, visible particles",
      "Fires with no smoke production at all, such as pure gas fires",
      "Only fires involving flammable liquids, never electrical fires"
    ],
    "exp": "Ionisation chambers respond most strongly to the very small, largely invisible particles produced by fast, flaming fires, such as paper, flammable liquid, or a rapidly developing electrical fire. They are relatively less sensitive to the larger particles of a slow smouldering fire, which is where photoelectric detectors are stronger instead.",
    "cat": "FIRE",
    "id": "F18_051"
  },
  {
    "q": "A photoelectric (optical) smoke detector is arranged so that in clean air:",
    "a": "The light source does not shine directly onto the light sensor",
    "opts": [
      "The light source does not shine directly onto the light sensor",
      "The light source shines directly and continuously onto the sensor",
      "A steady ionisation current flows between two electrodes",
      "The chamber is held at a fixed elevated temperature"
    ],
    "exp": "A photoelectric detector contains an LED and a light sensor arranged so that in clean air the light does not fall directly on the sensor. When smoke enters, its particles scatter light and some of that scattered light reaches the sensor, triggering the alarm.",
    "cat": "FIRE",
    "id": "F18_052"
  },
  {
    "q": "Photoelectric smoke detectors are most sensitive to which fire type, and why?",
    "a": "Slow, smouldering fires, because their larger, visible smoke particles scatter light much more strongly",
    "opts": [
      "Slow, smouldering fires, because their larger, visible smoke particles scatter light much more strongly",
      "Fast, flaming fires, because their high heat output triggers the sensor directly",
      "Only electrical fires, because of the ionised particles they produce",
      "Fires of every type equally, with no meaningful difference from ionisation detectors"
    ],
    "exp": "The scattering effect a photoelectric detector relies on is produced much more strongly by the larger, visible smoke particles typical of a slow, smouldering fire, such as smouldering insulation, overheated cable or upholstery, exactly the fire type ionisation detectors are weaker on.",
    "cat": "FIRE",
    "id": "F18_053"
  },
  {
    "q": "A rate-of-rise heat detector, compared to a fixed-temperature heat detector, alarms based on:",
    "a": "How fast the temperature is climbing, rather than waiting for an absolute threshold to be reached",
    "opts": [
      "How fast the temperature is climbing, rather than waiting for an absolute threshold to be reached",
      "A fixed threshold of roughly 57 to 74°C, exactly like the fixed-temperature type",
      "Scattered light reaching a sensor, the same mechanism as a photoelectric detector",
      "UV radiation emitted directly by a developing flame"
    ],
    "exp": "A rate-of-rise detector alarms on how fast the temperature is climbing, which can catch a rapidly developing fire well before the space reaches a fixed threshold, while not nuisance tripping on a slow, normal warm-up such as sunlight on a deckhead. A fixed-temperature detector instead alarms once a set threshold, commonly around 57 to 74°C, is reached.",
    "cat": "FIRE",
    "id": "F18_054"
  },
  {
    "q": "Why might a UV flame detector give a false alarm from a welding arc or lightning?",
    "a": "It responds to UV radiation generically, and welding arcs and lightning both emit UV radiation, not just genuine flames",
    "opts": [
      "It responds to UV radiation generically, and welding arcs and lightning both emit UV radiation, not just genuine flames",
      "UV detectors are actually heat detectors mislabelled by manufacturers",
      "UV detectors alarm on scattered light rather than radiation, so any bright light triggers them",
      "UV detectors are slower than IR detectors, so they pick up nuisance sources IR would ignore"
    ],
    "exp": "UV detectors respond to the UV radiation a flame emits and are extremely fast, but other UV sources such as welding arcs or lightning can also trigger them, since the detector cannot distinguish the source of the UV radiation.",
    "cat": "FIRE",
    "id": "F18_055"
  },
  {
    "q": "Combined UV/IR flame detectors reduce false alarms by:",
    "a": "Requiring both the UV and IR flame signatures to be present together before alarming",
    "opts": [
      "Requiring both the UV and IR flame signatures to be present together before alarming",
      "Averaging the UV and IR readings to smooth out noise",
      "Using UV only during the day and IR only at night",
      "Disabling the UV sensor whenever hot machinery is nearby"
    ],
    "exp": "Some flame detector units combine both UV and IR sensing and require both signatures together before alarming, which cuts false alarms substantially compared to either sensing method used alone, since a welding arc or hot machinery is unlikely to produce both signatures in the pattern a real flame does.",
    "cat": "FIRE",
    "id": "F18_056"
  },
  {
    "q": "Why are heat detectors, rather than smoke detectors, generally used in galleys?",
    "a": "Because smoke detection would nuisance trip constantly in a space that is expected to run warm and produce cooking fumes",
    "opts": [
      "Because smoke detection would nuisance trip constantly in a space that is expected to run warm and produce cooking fumes",
      "Because heat detectors are faster responding than any other fire detection method",
      "Because galleys are the only spaces where SOLAS permits heat detectors",
      "Because smoke detectors cannot legally be fitted near cooking equipment"
    ],
    "exp": "Heat detectors are generally used where smoke detection would nuisance trip constantly, such as galleys, and where the space itself is expected to run warm. Flame detectors, not heat detectors, are the fastest-responding method overall, and they are reserved for spaces with a genuine risk of rapid open fire, such as engine rooms and paint lockers.",
    "cat": "FIRE",
    "id": "F18_057"
  },

  /* ═══════════ PROXIMITY & SPEED SENSORS ═══════════ */
  {
    "q": "An inductive proximity sensor detects a nearby metal object by:",
    "a": "Generating a small oscillating magnetic field, which a metal target damps by inducing eddy currents in itself",
    "opts": [
      "Generating a small oscillating magnetic field, which a metal target damps by inducing eddy currents in itself",
      "Sensing a change in capacitance as any object, metallic or not, enters its field",
      "Timing an ultrasonic echo reflected off the target",
      "Sensing the target's own resistance change with proximity"
    ],
    "exp": "An inductive proximity sensor generates a small oscillating magnetic field, and a metal target entering that field induces eddy currents in itself, damping the oscillation, which the sensor detects. Used for limit switches, valve position and shaft position sensing. Sensing any object via capacitance change describes a capacitive proximity sensor instead.",
    "cat": "PROX",
    "id": "F18_058"
  },
  {
    "q": "Unlike an inductive proximity sensor, a capacitive proximity sensor can detect:",
    "a": "Any object, metallic or not, that changes the capacitance of its sensing field",
    "opts": [
      "Any object, metallic or not, that changes the capacitance of its sensing field",
      "Only ferromagnetic metals, not non-ferrous metals",
      "Only liquids, never solid objects",
      "Nothing that an inductive sensor cannot also detect"
    ],
    "exp": "A capacitive proximity sensor works similarly to the inductive type but detects any object, metallic or not, that changes the capacitance of its sensing field, which is useful for level switches and detecting non-metallic targets. An inductive sensor is limited to metal targets that can support induced eddy currents.",
    "cat": "PROX",
    "id": "F18_059"
  },
  {
    "q": "Shaft speed is most often measured by:",
    "a": "A toothed wheel with a magnetic or inductive pickup generating one pulse per tooth, giving a pulse frequency proportional to shaft speed",
    "opts": [
      "A toothed wheel with a magnetic or inductive pickup generating one pulse per tooth, giving a pulse frequency proportional to shaft speed",
      "A capacitive probe measuring the shaft's dielectric constant as it rotates",
      "A thermocouple bonded to the shaft surface measuring frictional heating",
      "A Bourdon tube linked mechanically to the shaft coupling"
    ],
    "exp": "Speed is most often measured with a small toothed wheel and a magnetic or inductive pickup that generates one pulse per tooth as the shaft turns, giving a pulse frequency directly proportional to shaft speed. This is the same basic principle behind most tachometers and many governor speed signals.",
    "cat": "PROX",
    "id": "F18_060"
  },
  {
    "q": "Why would a mechanical limit switch be replaced with an inductive proximity sensor for valve position sensing?",
    "a": "The inductive sensor detects the metal target without contact, avoiding the mechanical wear a physical switch would suffer",
    "opts": [
      "The inductive sensor detects the metal target without contact, avoiding the mechanical wear a physical switch would suffer",
      "Inductive sensors are the only type capable of detecting non-metallic valve stems",
      "Inductive sensors require no field wiring at all, unlike mechanical switches",
      "Mechanical switches cannot be used anywhere near a 4-20mA loop"
    ],
    "exp": "Inductive proximity sensors are used for limit switches, valve position and shaft position sensing where a mechanical switch would wear out, since the sensor detects the metal target without physical contact.",
    "cat": "PROX",
    "id": "F18_061"
  },

  /* ═══════════ THE 4-20mA CURRENT LOOP ═══════════ */
  {
    "q": "Why is current, rather than voltage, used to carry instrumentation signals over a long cable run?",
    "a": "Loop current is the same at every point in a series circuit regardless of cable resistance, so the signal arrives unchanged, whereas a voltage signal is degraded by voltage dropped across the cable itself",
    "opts": [
      "Loop current is the same at every point in a series circuit regardless of cable resistance, so the signal arrives unchanged, whereas a voltage signal is degraded by voltage dropped across the cable itself",
      "Current signals travel faster down a cable than voltage signals",
      "Voltage signals cannot be generated by a two-wire loop-powered transmitter",
      "Current is easier to measure with a simple voltmeter at the receiving end"
    ],
    "exp": "By Kirchhoff's Current Law, current in equals current out around a series loop, so the same current flows at every point regardless of the wire's resistance. Whatever voltage is lost across the cable's resistance is simply made up by the loop power supply, but the current itself arrives unchanged, which is why current, not voltage, carries the signal.",
    "cat": "LOOP",
    "id": "F18_062"
  },
  {
    "q": "A voltage signal sent down a long cable run is degraded because:",
    "a": "Some of the source voltage is dropped across the cable's own resistance before reaching the receiving instrument",
    "opts": [
      "Some of the source voltage is dropped across the cable's own resistance before reaching the receiving instrument",
      "Voltage cannot physically travel more than a few metres down a copper conductor",
      "Voltage signals are always AC and suffer from induced interference that current signals do not",
      "The receiving instrument cannot process a voltage signal at all"
    ],
    "exp": "A voltage signal is degraded because some of the source voltage is dropped across the cable's own resistance before it reaches the receiving instrument, and that drop changes with cable length, temperature and any additional connections in the run, all introducing measurement error.",
    "cat": "LOOP",
    "id": "F18_063"
  },
  {
    "q": "Why does the 4-20mA loop start its live range at 4mA rather than 0mA?",
    "a": "So a genuine zero process reading can be told apart from a fault such as a broken wire or dead transmitter, both of which would also read 0mA",
    "opts": [
      "So a genuine zero process reading can be told apart from a fault such as a broken wire or dead transmitter, both of which would also read 0mA",
      "Because 0mA would exceed the maximum current rating of most field cabling",
      "Because instruments cannot measure currents below 4mA accurately",
      "Purely as a historical convention with no functional reason behind it"
    ],
    "exp": "If the scale ran from 0mA, a genuine zero reading, such as an empty tank, would look electrically identical to a broken wire, a disconnected transmitter, or a power failure, all of which also produce 0mA. Starting the live range at 4mA means a real zero value is still a current that is flowing, while 0mA can only mean a fault.",
    "cat": "LOOP",
    "id": "F18_064"
  },
  {
    "q": "In a 4-20mA loop, a reading of 0mA can only mean:",
    "a": "A fault: a broken conductor, a disconnected or unpowered transmitter, or a short circuit",
    "opts": [
      "A fault: a broken conductor, a disconnected or unpowered transmitter, or a short circuit",
      "A genuine, verified zero process value",
      "The transmitter is operating normally at the bottom of its range",
      "The loop power supply is operating at reduced voltage"
    ],
    "exp": "With a live zero of 4mA, a genuine zero process value still shows 4mA flowing. 0mA can therefore only mean a fault, letting the control system alarm on a real signal failure instead of silently misreading it as a valid zero.",
    "cat": "LOOP",
    "id": "F18_065"
  },
  {
    "q": "The term 'live zero' refers to:",
    "a": "The deliberately non-zero baseline current, 4mA, that represents a genuine zero process value",
    "opts": [
      "The deliberately non-zero baseline current, 4mA, that represents a genuine zero process value",
      "The 20mA upper end of the loop's measuring range",
      "A backup power supply that keeps the loop energised during a blackout",
      "The voltage drop across the cable at zero flow"
    ],
    "exp": "The live zero is the deliberately non-zero baseline of 4mA that represents a genuine zero process value, letting the control system distinguish 'the value is genuinely zero' from 'the signal itself has failed.'",
    "cat": "LOOP",
    "id": "F18_066"
  },
  {
    "q": "Why can many two-wire loop-powered transmitters draw their own operating power from the loop's 4mA baseline?",
    "a": "Because 4mA is always present and available whenever the loop is healthy",
    "opts": [
      "Because 4mA is always present and available whenever the loop is healthy",
      "Because 4mA is the maximum current the transmitter's electronics can safely handle",
      "Because the loop power supply switches to a separate 4mA feed just for transmitter power",
      "Because 20mA would generate too much heat in the transmitter housing"
    ],
    "exp": "Since the live zero of 4mA is always present and available whenever the loop is healthy, many two-wire loop-powered transmitters draw their own operating power from that same baseline current, rather than needing a separate power supply run to the field.",
    "cat": "LOOP",
    "id": "F18_067"
  }

]);

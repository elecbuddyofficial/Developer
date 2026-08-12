window.loadQuizzes("F14_Instruments", [

  /* ═══════════ ANALOGUE VS DIGITAL ═══════════ */
  {
    "q": "What is a key advantage analogue instruments hold over digital ones at a ship's switchboard?",
    "a": "They give an instant visual sense of a trend via a swinging needle, in a way a jumping digital number does not",
    "opts": ["They are more accurate than digital instruments", "They give an instant visual sense of a trend via a swinging needle, in a way a jumping digital number does not", "They require no calibration and never wear out", "They read true RMS more accurately than digital instruments"],
    "exp": "A swinging needle shows load rising or a value hunting at a glance. Digital instruments are actually the more accurate ones (0.1 percent or better is common), the opposite of what this distractor claims.",
    "cat": "ANALOG_DIGITAL",
    "id": "F14_001"
  },
  {
    "q": "Typical accuracy of an analogue instrument is about:",
    "a": "1 to 2.5 percent of full scale",
    "opts": ["0.1 percent or better", "10 to 15 percent of full scale", "1 to 2.5 percent of full scale", "Exactly 0 percent, they are inherently exact"],
    "exp": "Analogue instruments are typically accurate to 1 to 2.5 percent of full scale. 0.1 percent or better describes digital instruments instead.",
    "cat": "ANALOG_DIGITAL",
    "id": "F14_002"
  },
  {
    "q": "Digital instruments are generally superior to analogue in that they:",
    "a": "Have no moving parts to wear and are typically far more accurate (0.1 percent or better is common)",
    "opts": ["Have no moving parts to wear and are typically far more accurate (0.1 percent or better is common)", "Give an instant sense of a rising or falling trend better than a needle", "Never need an analogue-to-digital converter", "Are always cheaper to fit at a ship's main switchboard"],
    "exp": "Digital instruments sample and convert with an ADC, have no moving parts, and are typically far more accurate. Instant sense of trend is the strength of analogue instruments, not digital ones.",
    "cat": "ANALOG_DIGITAL",
    "id": "F14_003"
  },
  {
    "q": "Why do ships' main switchboards still commonly carry analogue ammeters and voltmeters?",
    "a": "Because a swinging needle shows a trend, rising load, a hunting value, more readily than a flickering digital number",
    "opts": ["Because analogue instruments are cheaper to manufacture", "Because digital instruments cannot measure AC quantities", "Because analogue instruments read true RMS automatically", "Because a swinging needle shows a trend, rising load, a hunting value, more readily than a flickering digital number"],
    "exp": "The notes give this exact reason: a needle communicates a trend at a glance, which a fast-changing digital number can be hard to read. Digital instruments measure AC perfectly well and do not automatically read true RMS unless specifically built to.",
    "cat": "ANALOG_DIGITAL",
    "id": "F14_004"
  },

  /* ═══════════ PMMC ═══════════ */
  {
    "q": "In a PMMC instrument, what provides the restoring torque that opposes coil rotation?",
    "a": "The two hairsprings",
    "opts": ["The permanent magnet's pole pieces", "The two hairsprings", "The soft iron core", "The aluminium former"],
    "exp": "The hairsprings both carry current into and out of the coil and provide a restoring torque proportional to the angle turned. The pole pieces and soft iron core shape the magnetic field; the aluminium former just carries the winding.",
    "cat": "PMMC",
    "id": "F14_005"
  },
  {
    "q": "Why is the air gap in a PMMC instrument shaped with curved pole pieces around a fixed soft iron core?",
    "a": "So the air gap field is uniform and radial",
    "opts": ["So the coil can carry a higher current without overheating", "So the instrument can read AC directly without needing a rectifier", "So the air gap field is uniform and radial", "So the pointer moves in discrete steps rather than continuously"],
    "exp": "A uniform, radial field means the deflecting force acts consistently as the coil rotates, which is what makes the deflection linear with current. It has nothing to do with current capacity or AC capability.",
    "cat": "PMMC",
    "id": "F14_006"
  },
  {
    "q": "The deflecting torque in a PMMC movement is produced according to which relationship?",
    "a": "F = BIL",
    "opts": ["F = BIL", "F = I²R", "P = VI cos φ", "F = QV"],
    "exp": "Every current-carrying conductor in a magnetic field experiences a force F = BIL. That force acting tangentially on the coil produces the deflecting torque. The other formulae are for power dissipation, real AC power, and force on a moving charge, none of which describe the PMMC deflecting mechanism.",
    "cat": "PMMC",
    "id": "F14_007"
  },
  {
    "q": "Why does a PMMC instrument read zero when a symmetrical AC current is applied directly to its coil?",
    "a": "The deflecting torque reverses with the current, so the positive and negative half cycles average to zero torque over a cycle",
    "opts": ["The hairsprings block any current above 50 Hz", "The permanent magnet demagnetises under alternating current", "The aluminium former acts as an electrical filter", "The deflecting torque reverses with the current, so the positive and negative half cycles average to zero torque over a cycle"],
    "exp": "Torque is proportional to current, not current squared, so it reverses every half cycle. The coil's mechanical inertia cannot follow 50 Hz, so it settles at the average, which for a symmetrical wave is zero.",
    "cat": "PMMC",
    "id": "F14_008"
  },
  {
    "q": "A PMMC instrument can be made to indicate an AC quantity by:",
    "a": "Adding a bridge rectifier ahead of the coil so it only ever sees pulsating DC of one polarity",
    "opts": ["Replacing the hairsprings with stronger ones", "Adding a bridge rectifier ahead of the coil so it only ever sees pulsating DC of one polarity", "Reversing the permanent magnet's polarity every half cycle", "Winding the coil with thicker wire"],
    "exp": "A rectifier ahead of the movement means the coil only ever sees one-polarity pulsating DC, which has a non-zero average for the coil to settle on. The scale is then calibrated assuming a sinusoidal input to show the equivalent RMS value.",
    "cat": "PMMC",
    "id": "F14_009"
  },
  {
    "q": "A PMMC ammeter with a scale calibrated for a sinusoidal input is fed a badly distorted, non-sinusoidal AC waveform. What happens?",
    "a": "The reading will be wrong, because the RMS/average conversion factor built into the scale assumes a sine wave and no longer applies",
    "opts": ["The reading is unaffected, since PMMC always reads true RMS regardless of waveform", "The pointer will read exactly double the true value", "The reading will be wrong, because the RMS/average conversion factor built into the scale assumes a sine wave and no longer applies", "The instrument will read zero regardless of waveform shape"],
    "exp": "The movement itself is still only ever averaging a rectified current; the scale's RMS calibration assumes a clean sine wave. Distort the waveform and that fixed conversion factor no longer holds, so the reading is wrong. PMMC never reads true RMS directly; that is moving iron's property.",
    "cat": "PMMC",
    "id": "F14_010"
  },
  {
    "q": "What does a PMMC movement fundamentally measure, in terms of the current flowing through its coil?",
    "a": "The average value of the current actually flowing through the coil",
    "opts": ["The average value of the current actually flowing through the coil", "The true RMS value of the current", "The peak (maximum) value of the current", "The instantaneous value of current at the moment of reading"],
    "exp": "A PMMC movement is a DC-only, average-reading instrument by nature. On DC the average value happens to equal the DC value itself, which is why it reads correctly there.",
    "cat": "PMMC",
    "id": "F14_011"
  },
  {
    "q": "On board a ship, where would you expect to find a PMMC movement in everyday use?",
    "a": "DC ammeters and voltmeters, and inside analogue multimeters (with rectification added for the AC ranges)",
    "opts": ["As the spinning disc of an electromechanical energy meter", "DC ammeters and voltmeters, and inside analogue multimeters (with rectification added for the AC ranges)", "Inside a clamp meter's split iron jaw", "As the moving iron vane of a switchboard AC ammeter"],
    "exp": "PMMC is used for DC circuits (battery chargers, DC motor circuits) and as the base movement inside analogue multimeters, with rectification added for AC ranges. Energy meter discs, clamp meter jaws, and switchboard AC ammeters use different principles.",
    "cat": "PMMC",
    "id": "F14_012"
  },

  /* ═══════════ MOVING IRON ═══════════ */
  {
    "q": "In a moving iron instrument, deflecting torque is proportional to:",
    "a": "I² (current squared)",
    "opts": ["I, directly proportional to current", "V, directly proportional to voltage", "I² (current squared)", "1/I, inversely proportional to current"],
    "exp": "The force pulling the iron into the field depends on field strength, which is proportional to current, so force (and torque) is proportional to I squared, not I. This is the key contrast with PMMC, where torque is proportional to I.",
    "cat": "MOVING_IRON",
    "id": "F14_013"
  },
  {
    "q": "Why does a moving iron instrument not cancel to zero on AC the way a PMMC instrument does?",
    "a": "The force pulling the iron in is always in the same direction regardless of current direction, since it depends on I² not I",
    "opts": ["The force pulling the iron in is always in the same direction regardless of current direction, since it depends on I² not I", "Its coil has more turns than a PMMC coil", "It is fitted with a rectifier ahead of the movement", "Its permanent magnet is stronger than a PMMC's"],
    "exp": "Because torque depends on I squared, it is always positive (attractive) no matter which way current flows, so there is no cancellation between half cycles the way PMMC experiences. Moving iron instruments have no permanent magnet or rectifier at all.",
    "cat": "MOVING_IRON",
    "id": "F14_014"
  },
  {
    "q": "What does the pointer of a moving iron instrument settle at?",
    "a": "The time-average of I², whose square root is by definition the RMS value",
    "opts": ["The instantaneous value of current at the moment read", "The peak value of the applied current", "The simple arithmetic average of the current waveform", "The time-average of I², whose square root is by definition the RMS value"],
    "exp": "The coil and iron cannot follow the instantaneous swings of a 50 Hz waveform, so the pointer settles at the time-average of I squared. The square root of the average of I squared is, by definition, the RMS value.",
    "cat": "MOVING_IRON",
    "id": "F14_015"
  },
  {
    "q": "Which type of instrument reads true RMS on any waveform without needing a rectifier?",
    "a": "Moving iron",
    "opts": ["PMMC", "Moving iron", "A basic AC clamp meter without a Hall sensor", "An electromechanical energy meter disc"],
    "exp": "Moving iron reads true RMS directly on any waveform because its deflection depends on I squared. PMMC needs a rectifier and reads average, not true RMS, and even then only correctly for a sinusoidal input.",
    "cat": "MOVING_IRON",
    "id": "F14_016"
  },
  {
    "q": "A moving iron instrument's scale is typically:",
    "a": "Non-linear (square law), cramped at the low end",
    "opts": ["Non-linear (square law), cramped at the low end", "Perfectly linear and evenly divided", "Logarithmic across its full range", "Blank until an external multiplier is calibrated"],
    "exp": "Because deflection follows I squared, the scale is a non-linear square law, cramped at the low end. A perfectly linear, evenly divided scale is the PMMC characteristic instead.",
    "cat": "MOVING_IRON",
    "id": "F14_017"
  },
  {
    "q": "Compared with PMMC, a moving iron instrument's accuracy is generally:",
    "a": "Coarser than PMMC, due to hysteresis and eddy current losses in the iron",
    "opts": ["Better than PMMC, because it reads true RMS", "Identical to PMMC, since both use the same movement", "Coarser than PMMC, due to hysteresis and eddy current losses in the iron", "Unaffected by losses since there is no permanent magnet"],
    "exp": "The versatility of working on AC or DC and reading true RMS comes at the cost of coarser accuracy, caused by hysteresis and eddy current losses in the moving iron itself.",
    "cat": "MOVING_IRON",
    "id": "F14_018"
  },
  {
    "q": "Which type of movement is the standard fitted as analogue AC ammeters and voltmeters on marine switchboards?",
    "a": "Moving iron",
    "opts": ["PMMC", "A Hall effect sensor", "An electrodynamometer wattmeter movement", "Moving iron"],
    "exp": "Moving iron instruments are the standard analogue AC ammeters and voltmeters fitted to marine switchboards, since they work correctly on AC and read true RMS.",
    "cat": "MOVING_IRON",
    "id": "F14_019"
  },

  /* ═══════════ AMMETER AND SHUNT ═══════════ */
  {
    "q": "Why must an ammeter be connected in series with the circuit it is measuring?",
    "a": "Because current is the same at every point along a single series path, so the meter must be inserted directly into that path",
    "opts": ["Because a series connection avoids drawing any current from the circuit", "Because current is the same at every point along a single series path, so the meter must be inserted directly into that path", "Because an ammeter's coil resistance is too high to survive a parallel connection", "Because current can only be sensed across two separate points in parallel"],
    "exp": "Current is common along a single series path, so the circuit has to be broken and reconnected through the meter to force the full circuit current through its coil.",
    "cat": "AMMETER",
    "id": "F14_020"
  },
  {
    "q": "Why must an ammeter have very low resistance?",
    "a": "So it drops negligible voltage and does not itself reduce the current it is trying to measure",
    "opts": ["So it drops negligible voltage and does not itself reduce the current it is trying to measure", "So it can safely be connected in parallel with the load", "So it can carry the full supply voltage without damage", "So its scale reads linearly regardless of waveform shape"],
    "exp": "Being in series, any resistance the ammeter adds is added to the circuit itself, dropping voltage and reducing the very current being measured. An ideal ammeter has zero resistance; a real one is built as close to that as practical.",
    "cat": "AMMETER",
    "id": "F14_021"
  },
  {
    "q": "To extend a sensitive movement's range to measure a larger current, a:",
    "a": "A low resistance shunt is connected in parallel with the movement",
    "opts": ["A high resistance multiplier is connected in series with the movement", "A second identical movement is connected in series", "A low resistance shunt is connected in parallel with the movement", "A capacitor is connected across the movement's terminals"],
    "exp": "A low resistance shunt in parallel diverts most of the circuit current, leaving only a small, known fraction through the movement itself. A series multiplier is the voltmeter technique, not the ammeter one.",
    "cat": "AMMETER",
    "id": "F14_022"
  },
  {
    "q": "In a shunted ammeter, the shunt and the movement share the same terminal voltage because:",
    "a": "They are connected in parallel",
    "opts": ["They are connected in series", "They are connected in parallel", "They are both wound from manganin wire", "They share the same number of turns"],
    "exp": "Components connected in parallel always share the same terminal voltage, which is why I_m x R_m = I_sh x R_sh holds for a shunt.",
    "cat": "AMMETER",
    "id": "F14_023"
  },
  {
    "q": "The governing relationship for a shunted ammeter movement is:",
    "a": "I_m x R_m = I_sh x R_sh",
    "opts": ["I_m x R_m = I_sh x R_sh", "V = I_m x (R_m + R_s)", "P = V x I x cos φ", "Q = I x t"],
    "exp": "Because the shunt and movement are in parallel and share the same voltage, I_m x R_m = I_sh x R_sh. The V = I_m(R_m + R_s) formula is for a series multiplier used with a voltmeter instead.",
    "cat": "AMMETER",
    "id": "F14_024"
  },
  {
    "q": "A PMMC movement has I_m = 1 mA and R_m = 100 Ω. It is to be built into an ammeter reading up to 1 A full scale. What current must the shunt carry?",
    "a": "0.999 A",
    "opts": ["1.000 A", "0.001 A", "0.5 A", "0.999 A"],
    "exp": "The shunt carries the rest of the circuit current: I_sh = 1 A minus the movement's 0.001 A = 0.999 A, leaving the movement to carry just its own 1 mA at full scale.",
    "cat": "AMMETER",
    "id": "F14_025"
  },
  {
    "q": "Using the same movement (I_m = 1 mA, R_m = 100 Ω) for a 1 A full-scale ammeter, what shunt resistance R_sh is required?",
    "a": "Approximately 0.1 Ω",
    "opts": ["Approximately 1 Ω", "Approximately 0.1 Ω", "Approximately 10 Ω", "Approximately 100 Ω"],
    "exp": "R_sh = (I_m x R_m) / I_sh = (0.001 x 100) / 0.999 ≈ 0.1 Ω. Check: the voltage across the pair at full scale is I_m R_m = 0.1 V, so I_sh = 0.1 / 0.1 = 1 A, almost all of the total current.",
    "cat": "AMMETER",
    "id": "F14_026"
  },
  {
    "q": "The same movement (I_m = 1 mA, R_m = 100 Ω) is instead used to build a 5 A full-scale ammeter. What shunt resistance is required?",
    "a": "Approximately 0.02 Ω",
    "opts": ["Approximately 0.02 Ω", "Approximately 0.1 Ω", "Approximately 0.2 Ω", "Approximately 2 Ω"],
    "exp": "I_sh = 5 A minus 0.001 A = 4.999 A. R_sh = (I_m x R_m) / I_sh = (0.001 x 100) / 4.999 ≈ 0.02 Ω. A larger full-scale current needs a proportionally smaller shunt resistance to carry it at the same 0.1 V drop.",
    "cat": "AMMETER",
    "id": "F14_027"
  },
  {
    "q": "Shunts are typically constructed from a heavy strip of which material, chosen for stable resistance with changing temperature?",
    "a": "Manganin",
    "opts": ["Rubber", "Mild steel", "Manganin", "Glass"],
    "exp": "Manganin is used because its resistance stays stable with temperature, important since a shunt carries nearly the full circuit current and can self-heat.",
    "cat": "AMMETER",
    "id": "F14_028"
  },

  /* ═══════════ VOLTMETER AND MULTIPLIER ═══════════ */
  {
    "q": "Why is a voltmeter connected in parallel with the component it is measuring?",
    "a": "Because the potential difference between two points exists regardless of what else is connected there, so the meter can simply be connected across those points",
    "opts": ["Because it must carry the full circuit current to register a reading", "Because the potential difference between two points exists regardless of what else is connected there, so the meter can simply be connected across those points", "Because voltage, unlike current, is not the same at every point in a series circuit", "Because breaking the circuit is required to sense a potential difference"],
    "exp": "A voltage exists between two points independent of what else is wired there, so the meter is simply connected across those points, without breaking the circuit, unlike an ammeter.",
    "cat": "VOLTMETER",
    "id": "F14_029"
  },
  {
    "q": "Why must a voltmeter have very high resistance?",
    "a": "So it diverts only negligible current and does not pull the true voltage down from its unloaded value",
    "opts": ["So it can safely be inserted in series with the load", "So it reads true RMS regardless of waveform shape", "So it can be connected directly across a CT secondary", "So it diverts only negligible current and does not pull the true voltage down from its unloaded value"],
    "exp": "A parallel connection gives current an extra path. A low resistance voltmeter would draw significant extra current and load the circuit down. An ideal voltmeter has infinite resistance and draws no current at all.",
    "cat": "VOLTMETER",
    "id": "F14_030"
  },
  {
    "q": "To extend a sensitive movement's range to read a larger voltage, a:",
    "a": "A high resistance multiplier is connected in series with the movement",
    "opts": ["A high resistance multiplier is connected in series with the movement", "A low resistance shunt is connected in parallel with the movement", "A second identical movement is connected in parallel", "A capacitor is connected in series with the movement"],
    "exp": "A high resistance multiplier in series drops almost all of the applied voltage, leaving only the small share needed to drive the movement to full scale. A parallel shunt is the ammeter technique instead.",
    "cat": "VOLTMETER",
    "id": "F14_031"
  },
  {
    "q": "The governing relationship for a voltmeter with a series multiplier is:",
    "a": "V = I_m x (R_m + R_s)",
    "opts": ["I_m x R_m = I_sh x R_sh", "R_sh = (I_m x R_m) / I_sh", "V = I_m x (R_m + R_s)", "P = V I cos φ"],
    "exp": "The same current I_m flows through both the movement and multiplier in series, so the applied voltage V divides between the two drops: V = I_m x (R_m + R_s). The I_m R_m = I_sh R_sh relationship belongs to a parallel shunt instead.",
    "cat": "VOLTMETER",
    "id": "F14_032"
  },
  {
    "q": "A movement has I_m = 1 mA and R_m = 100 Ω, giving 0.1 V full scale alone. To build a voltmeter reading up to 100 V full scale, what total resistance is needed?",
    "a": "100,000 Ω",
    "opts": ["10,000 Ω", "100,000 Ω", "1,000,000 Ω", "100 Ω"],
    "exp": "R_total = V / I_m = 100 / 0.001 = 100,000 Ω. This is the combined resistance of movement plus multiplier needed for the current to be exactly 1 mA at 100 V applied.",
    "cat": "VOLTMETER",
    "id": "F14_033"
  },
  {
    "q": "Using the same movement (I_m = 1 mA, R_m = 100 Ω), what multiplier resistance R_s is required for a 100 V full-scale voltmeter?",
    "a": "Approximately 99,900 Ω",
    "opts": ["Approximately 99,900 Ω", "Approximately 100,000 Ω", "Approximately 90,000 Ω", "Approximately 9,900 Ω"],
    "exp": "R_s = R_total - R_m = 100,000 - 100 = 99,900 Ω (about 99.9 kΩ). Nearly a thousand times R_m, exactly what a high resistance multiplier should be.",
    "cat": "VOLTMETER",
    "id": "F14_034"
  },
  {
    "q": "The same movement (I_m = 1 mA, R_m = 100 Ω) is instead used to build a 50 V full-scale voltmeter. What multiplier resistance is required?",
    "a": "Approximately 49,900 Ω",
    "opts": ["Approximately 50,000 Ω", "Approximately 99,900 Ω", "Approximately 24,900 Ω", "Approximately 49,900 Ω"],
    "exp": "R_total = V / I_m = 50 / 0.001 = 50,000 Ω. R_s = R_total - R_m = 50,000 - 100 = 49,900 Ω. A lower full-scale voltage needs a proportionally smaller multiplier.",
    "cat": "VOLTMETER",
    "id": "F14_035"
  },
  {
    "q": "In the 100 V full-scale voltmeter example (I_m = 1 mA, R_m = 100 Ω, R_s ≈ 99,900 Ω), what voltage appears across the movement itself at full scale?",
    "a": "0.1 V",
    "opts": ["100 V", "0.1 V", "99.9 V", "1 V"],
    "exp": "The movement always sees I_m x R_m = 0.001 x 100 = 0.1 V, its own native full-scale voltage, no matter what range the multiplier extends it to. The dial is simply relabelled to show the full applied voltage at that same physical deflection.",
    "cat": "VOLTMETER",
    "id": "F14_036"
  },
  {
    "q": "The ohms-per-volt sensitivity rating of a multi-range analogue voltmeter follows directly from:",
    "a": "How large a multiplier resistance is used per range",
    "opts": ["How large a shunt resistance is used per range", "The type of permanent magnet fitted in the movement", "How large a multiplier resistance is used per range", "Whether the movement is PMMC or moving iron"],
    "exp": "Since each voltage range is built by adding a different series multiplier, the ohms-per-volt figure follows directly from how large that multiplier resistance is for each range.",
    "cat": "VOLTMETER",
    "id": "F14_037"
  },

  /* ═══════════ WATTMETER ═══════════ */
  {
    "q": "A standard electrodynamometer wattmeter senses power using:",
    "a": "Two coils, a fixed current coil and a moving voltage (pressure) coil",
    "opts": ["Two coils, a fixed current coil and a moving voltage (pressure) coil", "A single coil that alternates between sensing current and voltage", "A rectifier feeding a PMMC movement only", "A spinning aluminium disc braked by a permanent magnet"],
    "exp": "A wattmeter needs to sense current and voltage simultaneously and combine them, done with a fixed current coil and a moving voltage coil. The spinning disc braked by a magnet describes an energy meter instead.",
    "cat": "WATTMETER",
    "id": "F14_038"
  },
  {
    "q": "In a wattmeter, the current coil is connected:",
    "a": "Fixed, connected in series with the load, with few turns of thick wire and low resistance",
    "opts": ["Moving, connected in parallel across the supply", "Fixed, connected in parallel across the supply", "Fixed, connected in series with the load, with few turns of thick wire and low resistance", "Moving, connected in series with the load"],
    "exp": "The current coil is fixed and connected in series with the load, exactly like an ammeter, so it produces a field proportional to load current.",
    "cat": "WATTMETER",
    "id": "F14_039"
  },
  {
    "q": "In a wattmeter, the voltage (pressure) coil is:",
    "a": "Moving, connected in parallel across the supply, with many turns of thin wire and high resistance",
    "opts": ["Fixed, connected in series with the load, with few turns of thick wire", "Moving, connected in parallel across the supply, with many turns of thin wire and high resistance", "Moving, connected in series with the load", "Fixed, connected in parallel across the supply with low resistance"],
    "exp": "The voltage coil is the moving one, connected in parallel across the supply exactly like a voltmeter, with many turns, thin wire, and high resistance (usually with a series multiplier built in).",
    "cat": "WATTMETER",
    "id": "F14_040"
  },
  {
    "q": "The deflection of an electrodynamometer wattmeter is a direct reading of:",
    "a": "P = VI cos φ",
    "opts": ["P = I²R", "Q = I x t", "F = BIL", "P = VI cos φ"],
    "exp": "The torque on the moving voltage coil depends on the product of current, voltage, and the cosine of the phase angle between them, giving a direct reading of real power P = VI cos φ.",
    "cat": "WATTMETER",
    "id": "F14_041"
  },
  {
    "q": "The two-wattmeter method can measure total real power in:",
    "a": "Any three phase three wire system, balanced or unbalanced, star or delta",
    "opts": ["Any three phase three wire system, balanced or unbalanced, star or delta", "Only balanced star systems with a neutral", "Only delta systems with a neutral wire", "Single phase systems only"],
    "exp": "The two-wattmeter method works for any three phase three wire system regardless of balance or connection type (star or delta), using only two single phase wattmeters instead of three.",
    "cat": "WATTMETER",
    "id": "F14_042"
  },
  {
    "q": "In the two-wattmeter method, at low power factor one wattmeter may read backwards (negative). This should be treated as:",
    "a": "Expected behaviour, and the reading is subtracted rather than added",
    "opts": ["A fault requiring immediate replacement of that wattmeter", "Proof that the load is badly unbalanced", "Expected behaviour, and the reading is subtracted rather than added", "Evidence of an open CT secondary somewhere in the circuit"],
    "exp": "A negative reading on one wattmeter at low power factor is expected behaviour, not a fault. Total power is the algebraic sum, so that reading is subtracted, and the two readings can also be used to estimate power factor of a balanced load.",
    "cat": "WATTMETER",
    "id": "F14_043"
  },

  /* ═══════════ ENERGY METER ═══════════ */
  {
    "q": "What is the fundamental difference between a wattmeter and an energy meter?",
    "a": "A wattmeter reads instantaneous power; an energy meter integrates that power over time to give total energy consumed",
    "opts": ["An energy meter reads instantaneous power; a wattmeter integrates it over time", "A wattmeter reads instantaneous power; an energy meter integrates that power over time to give total energy consumed", "A wattmeter only works on DC circuits; an energy meter only works on AC", "An energy meter measures current only, without sensing voltage at all"],
    "exp": "A wattmeter answers 'how much power right now', in watts. An energy meter answers 'how much energy over a period', in kWh, by integrating power over time. Both sense current and voltage the same way a wattmeter does.",
    "cat": "ENERGY",
    "id": "F14_044"
  },
  {
    "q": "In a traditional electromechanical energy meter, what does the aluminium disc's speed of rotation represent?",
    "a": "A rotation speed proportional to instantaneous power",
    "opts": ["A rotation speed proportional to instantaneous power", "A rotation speed proportional to voltage only, ignoring current", "A fixed constant speed regardless of load", "A rotation speed inversely proportional to power"],
    "exp": "Current and voltage coils induce eddy currents in the disc, producing a torque proportional to instantaneous power, so the disc spins at a speed proportional to power, braked by a permanent magnet to keep that proportionality exact.",
    "cat": "ENERGY",
    "id": "F14_045"
  },
  {
    "q": "In an electromechanical energy meter, total revolutions of the disc over time represents, mechanically:",
    "a": "Energy, the mechanical integral of power over time",
    "opts": ["Instantaneous power at the moment read", "Power factor of the connected load", "Peak current drawn by the load", "Energy, the mechanical integral of power over time"],
    "exp": "Because the disc is a physical wheel spinning at a speed proportional to power, its total revolutions over time is a mechanical integration of power over time, which is energy. A geared counter converts revolutions into a kWh reading.",
    "cat": "ENERGY",
    "id": "F14_046"
  },
  {
    "q": "How does a modern electronic energy meter perform the same function as the spinning disc?",
    "a": "It digitises voltage and current, multiplies them many times a second for instantaneous power, and accumulates that power numerically",
    "opts": ["It counts pulses from a moving iron movement instead of a disc", "It digitises voltage and current, multiplies them many times a second for instantaneous power, and accumulates that power numerically", "It uses a PMMC movement to average the current directly", "It relies solely on a clamp-on CT with no internal calculation"],
    "exp": "Electronic meters replace the mechanical disc with a sampling circuit that digitises voltage and current, multiplies them for instantaneous power, and accumulates that power in a microcontroller, performing the same integration numerically.",
    "cat": "ENERGY",
    "id": "F14_047"
  },
  {
    "q": "An energy meter's output is expressed in:",
    "a": "Kilowatt-hours (kWh)",
    "opts": ["Watts (W)", "Volt-amperes (VA)", "Kilowatt-hours (kWh)", "Amperes (A)"],
    "exp": "Energy meters give total energy consumed in kilowatt-hours. Watts is the unit of instantaneous power, which is what a wattmeter reads instead.",
    "cat": "ENERGY",
    "id": "F14_048"
  },

  /* ═══════════ MULTIMETER AND CLAMP METER ═══════════ */
  {
    "q": "A multimeter combines which functions behind one selector switch?",
    "a": "Ammeter, voltmeter and ohmmeter (often with continuity and diode test)",
    "opts": ["Ammeter, voltmeter and ohmmeter (often with continuity and diode test)", "Wattmeter, energy meter and CT functions only", "Clamp meter and VT functions only", "Oscilloscope and function generator functions"],
    "exp": "A multimeter is a single portable instrument combining ammeter, voltmeter and ohmmeter functions, often with continuity and diode test added, behind one selector switch and display.",
    "cat": "MULTIMETER",
    "id": "F14_049"
  },
  {
    "q": "How does a clamp meter measure current without breaking the circuit?",
    "a": "Its split iron core clamps around a conductor and acts like the secondary of a current transformer, picking up an induced current from the conductor's changing field",
    "opts": ["It contains a shunt wired directly across the conductor's terminals", "Its split iron core clamps around a conductor and acts like the secondary of a current transformer, picking up an induced current from the conductor's changing field", "It uses a multiplier resistor connected in series with the conductor", "It measures the voltage drop along the conductor's insulation"],
    "exp": "The clamp's hinged, split iron core surrounds one current-carrying conductor. The AC current's changing field induces a proportional current in the clamp's winding, exactly like a CT with the conductor as the primary, needing no physical connection into the circuit.",
    "cat": "MULTIMETER",
    "id": "F14_050"
  },
  {
    "q": "What is the main practical limitation of using a multimeter, rather than a clamp meter, to measure current on a live switchboard?",
    "a": "It still has to be broken into the circuit in series, exactly like a standalone ammeter",
    "opts": ["It cannot measure current at all, only voltage and resistance", "It can only measure DC current, never AC", "It still has to be broken into the circuit in series, exactly like a standalone ammeter", "It requires the CT secondary to be shorted before use"],
    "exp": "A multimeter's current function still needs the circuit broken and reconnected through it in series, the same limitation as a standalone ammeter. A clamp meter avoids this entirely by not needing a physical connection into the circuit.",
    "cat": "MULTIMETER",
    "id": "F14_051"
  },
  {
    "q": "A basic clamp meter, without a Hall effect sensor, can only sense:",
    "a": "AC only, since it relies on a changing flux to induce a current",
    "opts": ["AC only, since it relies on a changing flux to induce a current", "DC only, since it needs a steady field to lock onto", "Both AC and DC equally well without any extra sensor", "Neither AC nor DC, only frequency"],
    "exp": "A basic clamp meter works by picking up an induced current from a changing magnetic field, so it only senses AC. A steady DC current produces no changing flux and induces nothing.",
    "cat": "MULTIMETER",
    "id": "F14_052"
  },
  {
    "q": "What extra sensor allows some clamp meters to also read DC current?",
    "a": "A Hall effect sensor in the jaw, alongside the transformer action",
    "opts": ["A second shunt resistor added in series with the jaw", "A moving iron vane added inside the clamp", "An internal battery driving current through the conductor", "A Hall effect sensor in the jaw, alongside the transformer action"],
    "exp": "Models that read DC add a Hall effect sensor in the jaw alongside the normal transformer action, since Hall effect sensing works with a steady field where transformer induction cannot.",
    "cat": "MULTIMETER",
    "id": "F14_053"
  },

  /* ═══════════ CTs AND VTs ═══════════ */
  {
    "q": "A voltage transformer (VT) is connected:",
    "a": "Primary connected across the line, in parallel, like a voltmeter",
    "opts": ["Primary connected in series with the load, like an ammeter", "Primary connected across the line, in parallel, like a voltmeter", "Secondary connected across the line, in parallel with the busbar", "Primary and secondary both connected in series with the load"],
    "exp": "A VT works like a step-down transformer connected across the line, in parallel, like a voltmeter, delivering a scaled-down voltage (commonly 110 V) at its secondary.",
    "cat": "CTVT",
    "id": "F14_054"
  },
  {
    "q": "A current transformer (CT) is connected:",
    "a": "Its primary is the busbar or cable itself, connected in series with the load, like an ammeter",
    "opts": ["Its primary is the busbar or cable itself, connected in series with the load, like an ammeter", "Its primary is connected across the line, in parallel, like a voltmeter", "Its secondary is connected in series with the busbar directly", "Its primary and secondary are both connected in parallel across the supply"],
    "exp": "A CT works the opposite way round to a VT: its primary is the busbar or cable itself, connected in series with the load, like an ammeter, delivering a scaled-down secondary current.",
    "cat": "CTVT",
    "id": "F14_055"
  },
  {
    "q": "A CT secondary is commonly standardised to deliver, at full load:",
    "a": "1 A or 5 A",
    "opts": ["110 V", "230 V", "1 A or 5 A", "Whatever current the primary busbar carries, unscaled"],
    "exp": "CT secondaries are commonly standardised to 1 A or 5 A at full load. 110 V is the typical VT secondary voltage, not a CT current.",
    "cat": "CTVT",
    "id": "F14_056"
  },
  {
    "q": "Why is it dangerous to leave a CT secondary open circuit while the primary is still carrying load current?",
    "a": "With the secondary's cancelling ampere-turns gone, nearly all the primary current becomes magnetising current, driving the core into deep saturation and inducing very high voltage spikes at the open terminals",
    "opts": ["The open secondary short-circuits the primary busbar, causing a direct fault current to flow", "The CT core demagnetises permanently, giving false-low readings on every instrument connected afterward", "The secondary winding simply overheats from carrying no load, igniting its insulation", "With the secondary's cancelling ampere-turns gone, nearly all the primary current becomes magnetising current, driving the core into deep saturation and inducing very high voltage spikes at the open terminals"],
    "exp": "Normally the secondary's ampere-turns nearly cancel the primary's, so only a small magnetising current is needed. Open the secondary and that cancellation vanishes, so almost all the primary current becomes magnetising current, saturating the core. The resulting sharp flux transitions induce short, extremely high voltage spikes, from hundreds of volts into the kilovolt range, at the open terminals, lethal to touch and capable of breaking down the winding's own insulation. It is not a short-circuit fault, permanent demagnetisation, or simple overheating.",
    "cat": "CTVT",
    "id": "F14_057"
  },
  {
    "q": "Before disconnecting an instrument from a CT secondary, the correct safety procedure is to:",
    "a": "Short circuit the secondary terminals first, then open the connection to the instrument",
    "opts": ["Short circuit the secondary terminals first, then open the connection to the instrument", "Open circuit the secondary terminals first, then disconnect the instrument", "De-energise the VT feeding the same switchboard section first", "Disconnect the instrument first, then short the secondary terminals afterward"],
    "exp": "The rule is to short circuit the secondary terminals first, many CT terminal blocks have a shorting link built in for exactly this reason, and only then open the connection to the instrument. Doing it in the reverse order momentarily leaves the secondary open while the primary is still energised, which is the dangerous condition.",
    "cat": "CTVT",
    "id": "F14_058"
  },
  {
    "q": "Why is a VT secondary dangerous if short circuited, but safe (indeed required) if left open?",
    "a": "A VT behaves like a voltmeter: shorting it drives heavy fault current through the winding, while an open secondary carries no current and is harmless",
    "opts": ["A VT behaves like an ammeter, so shorting it is the normal safe condition", "A VT behaves like a voltmeter: shorting it drives heavy fault current through the winding, while an open secondary carries no current and is harmless", "A VT's secondary voltage rises without limit if shorted, but stays fixed if left open", "A VT has no failure mode either way, since it is isolated by an air gap"],
    "exp": "A VT is connected and behaves like a voltmeter, so its dangerous condition mirrors a voltmeter's: shorting it drives a very heavy fault current through the winding. Left open, it simply carries no current, the opposite of a CT, which must never be left open.",
    "cat": "CTVT",
    "id": "F14_059"
  },
  {
    "q": "The dangerous condition for a CT (open secondary while energised) and the dangerous condition for a VT (shorted secondary) are opposite because:",
    "a": "Each instrument transformer inherits the same connection rule, and the same failure mode, as the type of meter it is built to resemble: a CT like an ammeter, a VT like a voltmeter",
    "opts": ["CTs and VTs are wound with opposite magnetic polarity to each other", "A CT has no iron core in its construction while a VT does", "Each instrument transformer inherits the same connection rule, and the same failure mode, as the type of meter it is built to resemble: a CT like an ammeter, a VT like a voltmeter", "VTs are only used on DC switchboards while CTs are only used on AC"],
    "exp": "A CT is wired like an ammeter (series, low impedance burden expected) so its failure mode is an ammeter's: an open circuit is the problem. A VT is wired like a voltmeter (parallel, high impedance expected) so its failure mode is a voltmeter's: a short circuit is the problem. Each device mirrors the meter type it was built to resemble.",
    "cat": "CTVT",
    "id": "F14_060"
  }

]);

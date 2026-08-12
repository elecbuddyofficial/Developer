window.loadQuizzes("F15_Insulation", [

  /* ═══════════ WHAT IR IS ═══════════ */
  {
    "q": "Insulation resistance (IR) is best defined as:",
    "a": "The resistance that opposes leakage current through a winding's insulation to earth or between windings",
    "opts": [
      "The resistance that opposes leakage current through a winding's insulation to earth or between windings",
      "The total resistance of the copper conductor inside a winding",
      "The resistance of the earth path back to the switchboard",
      "The resistance between two phases when the machine is running normally"
    ],
    "exp": "Insulation is never a perfect infinite resistance, a tiny leakage current always flows through and across it, and IR is the resistance opposing that leakage. It has nothing to do with the copper conductor's own resistance, which is a separate, very low value.",
    "cat": "WHAT",
    "id": "F15_001"
  },
  {
    "q": "Why is insulation resistance normally expressed in megohms rather than ohms?",
    "a": "Because a healthy insulation's opposition to leakage current is normally a very large number",
    "opts": [
      "Because a healthy insulation's opposition to leakage current is normally a very large number",
      "Because meggers are only calibrated to read in megohms",
      "Because IEEE 43 requires all resistance values to be quoted in megohms",
      "Because ohms are reserved for conductor resistance measurements only"
    ],
    "exp": "A healthy insulation presents a very high opposition to leakage current, so the numbers involved are naturally in the millions of ohms, hence megohms. It is simply a convenient unit for the size of number involved, not a rule imposed by the instrument or a standard.",
    "cat": "WHAT",
    "id": "F15_002"
  },
  {
    "q": "Which of the following is the largest, fastest-acting cause of falling insulation resistance, and the one most likely to be tested on?",
    "a": "Moisture ingress",
    "opts": ["Moisture ingress", "Dirt and contamination", "Heat aging", "General mechanical age"],
    "exp": "Water, especially seawater, is a far better conductor than the insulating material, so it opens a parallel leakage path and drops IR quickly. Dirt, heat aging and general age all lower IR too, but more slowly and less dramatically.",
    "cat": "WHAT",
    "id": "F15_003"
  },
  {
    "q": "Why does moisture ingress lower insulation resistance so effectively?",
    "a": "Water is a far better conductor than the insulating material, so it opens a parallel leakage path through and across the insulation",
    "opts": [
      "Water is a far better conductor than the insulating material, so it opens a parallel leakage path through and across the insulation",
      "Water reacts chemically with copper and increases the conductor's own resistance",
      "Water cools the winding, which increases resistance according to the temperature coefficient",
      "Water causes the megger's test voltage to rise uncontrollably"
    ],
    "exp": "Water conducts far better than varnish, mica or resin, so wherever it is absorbed or condenses it provides an extra, unwanted current path. It has no meaningful effect on the copper conductor's own resistance and does not affect the megger's output voltage.",
    "cat": "WHAT",
    "id": "F15_004"
  },
  {
    "q": "How does dirt and surface contamination lower insulation resistance?",
    "a": "A layer of grime, carbon dust or salt, especially with a trace of absorbed moisture, provides a conductive surface leakage track that was not there when the winding was clean",
    "opts": [
      "A layer of grime, carbon dust or salt, especially with a trace of absorbed moisture, provides a conductive surface leakage track that was not there when the winding was clean",
      "Contamination increases the winding's capacitance, which lowers its DC resistance",
      "Contamination raises the winding's operating temperature enough to melt the insulation",
      "Contamination reacts with the copper to form a resistive oxide layer"
    ],
    "exp": "The mechanism is a conductive surface path across the insulation, not a change in the material's own bulk properties. Contamination on its own, without an absorbed trace of moisture, is a much weaker effect than the combination.",
    "cat": "WHAT",
    "id": "F15_005"
  },
  {
    "q": "Why is heat aging (thermal degradation) different in character from moisture ingress?",
    "a": "Heat aging permanently embrittles and drives volatiles out of the insulating material and does not recover by drying, unlike moisture",
    "opts": [
      "Heat aging permanently embrittles and drives volatiles out of the insulating material and does not recover by drying, unlike moisture",
      "Heat aging is fully reversible once the winding cools back down",
      "Heat aging only affects the copper conductor, not the insulation",
      "Heat aging happens instantly during a single overload event and never develops gradually"
    ],
    "exp": "Running hot, or repeated overloads, slowly bakes and embrittles the varnish or resin, driving off the volatiles that keep it flexible. This is a one-way, cumulative loss of insulating material, unlike moisture and contamination, which are recoverable by drying or cleaning.",
    "cat": "WHAT",
    "id": "F15_006"
  },
  {
    "q": "Of the four causes of falling IR, which two are recoverable by an on-board procedure, and which two are not?",
    "a": "Moisture and contamination are recoverable by drying or cleaning; heat aging and mechanical degradation are not",
    "opts": [
      "Moisture and contamination are recoverable by drying or cleaning; heat aging and mechanical degradation are not",
      "Heat aging and moisture are recoverable; contamination and mechanical degradation are not",
      "All four causes are fully recoverable given enough drying time",
      "None of the four causes can be recovered on board, all require a rewind"
    ],
    "exp": "Drying restores IR lost to moisture, and cleaning restores IR lost to surface contamination. Heat aging and mechanical cracking represent real, permanent loss of insulating material and cannot be undone by any on-board procedure.",
    "cat": "WHAT",
    "id": "F15_007"
  },
  {
    "q": "A winding's IR has read a stable value for years and then suddenly drops sharply between two consecutive tests. What does this trend most likely point to?",
    "a": "A specific recent event, most often moisture ingress",
    "opts": [
      "A specific recent event, most often moisture ingress",
      "Normal, expected aging of the insulation",
      "A fault in the megger itself, since IR cannot fall suddenly",
      "The winding has reached the end of its rated design life exactly on schedule"
    ],
    "exp": "A slow, steady decline over years is normal aging, but a sudden drop between two tests points to a specific event, most often moisture. This is exactly why a trend of logged readings is more diagnostic than any single reading.",
    "cat": "WHAT",
    "id": "F15_008"
  },

  /* ═══════════ THE MEGGER ═══════════ */
  {
    "q": "Strictly speaking, what is a \"megger\"?",
    "a": "A trade name for an insulation resistance tester that has become the generic term for the instrument",
    "opts": [
      "A trade name for an insulation resistance tester that has become the generic term for the instrument",
      "The official IEEE term for any DC test voltage source",
      "A specific model of hand-cranked generator no longer in production",
      "An acronym for Marine Electrical Ground Ground Earth Resistance"
    ],
    "exp": "Megger is a trade name, from Megger Instruments, used generically the way Hoover is used for any vacuum cleaner. It has become the everyday term on board for any insulation resistance tester, not just that one brand.",
    "cat": "MEGGER",
    "id": "F15_009"
  },
  {
    "q": "How does a megger arrive at the insulation resistance figure it displays?",
    "a": "It applies a stabilised DC test voltage across the insulation, measures the leakage current that results, and computes resistance from Ohm's law",
    "opts": [
      "It applies a stabilised DC test voltage across the insulation, measures the leakage current that results, and computes resistance from Ohm's law",
      "It compares the winding's temperature against a stored reference table",
      "It sends an AC signal through the winding and measures the phase shift",
      "It counts the number of turns in the winding and estimates resistance from the winding data"
    ],
    "exp": "A megger applies a stable DC voltage and measures the resulting leakage current, then computes IR = V / I directly. It has no knowledge of turns count or temperature reference tables built into how the reading itself is derived.",
    "cat": "MEGGER",
    "id": "F15_010"
  },
  {
    "q": "Why does the megger apply a high test voltage, hundreds to thousands of volts, rather than the couple of volts an ordinary multimeter resistance range would use?",
    "a": "A high voltage stresses the insulation the way it is actually stressed in service and reveals weak spots that a gentle low-voltage reading would never uncover",
    "opts": [
      "A high voltage stresses the insulation the way it is actually stressed in service and reveals weak spots that a gentle low-voltage reading would never uncover",
      "A high voltage is needed simply to get any needle deflection at all on an analogue meter",
      "A high voltage speeds up the test so it can be completed in under a minute",
      "A high voltage is required by law regardless of what the test is trying to reveal"
    ],
    "exp": "A hairline crack, a thin contaminated track, or a moisture-bridged weak spot can show a perfectly normal resistance at a couple of volts because the leakage path has not been driven into conduction, but breaks down or leaks heavily once several hundred volts is applied. The test has to reproduce real electrical stress, not just produce a readable number.",
    "cat": "MEGGER",
    "id": "F15_011"
  },
  {
    "q": "Why is the megger's test voltage DC rather than AC?",
    "a": "DC lets the meter separate genuine resistive leakage current from the capacitive charging current the winding draws, whereas on AC the capacitive current would never settle out",
    "opts": [
      "DC lets the meter separate genuine resistive leakage current from the capacitive charging current the winding draws, whereas on AC the capacitive current would never settle out",
      "DC is simply cheaper to generate electronically than a stable AC test signal",
      "AC would be dangerous to the operator while DC is inherently safe at any voltage",
      "DC is required because insulation resistance is only meaningful for DC-supplied equipment"
    ],
    "exp": "A winding behaves as a large capacitor relative to earth. A steady DC voltage lets the initial capacitive charging current decay away, leaving a stable, meaningful resistive leakage current to measure. On AC that capacitive current would never settle, swamping the leakage reading, and this DC behaviour is also exactly what makes Polarization Index possible.",
    "cat": "MEGGER",
    "id": "F15_012"
  },
  {
    "q": "A winding under test behaves electrically like which component with respect to the megger's applied voltage?",
    "a": "A large capacitor relative to earth",
    "opts": ["A large capacitor relative to earth", "A pure inductor with no resistive component", "A short circuit that draws unlimited current", "An open circuit that draws no current at all"],
    "exp": "The winding is treated as a large capacitor relative to earth, which is why it draws a brief charging current that must be allowed to decay before a stable leakage reading can be taken, and why it retains a charge after the test that must be discharged.",
    "cat": "MEGGER",
    "id": "F15_013"
  },
  {
    "q": "Historically, how did a megger generate its DC test voltage before electronic instruments became standard?",
    "a": "By hand-cranking a small internal generator",
    "opts": ["By hand-cranking a small internal generator", "By drawing directly from the ship's 440V switchboard", "By rectifying the 50 Hz supply through a step-up transformer", "By using the winding's own residual charge"],
    "exp": "The original meggers were hand-cranked generators producing a stabilised DC output. Today this is almost always done electronically from a battery, but the historical hand-crank version is why the name and habit of the term persist.",
    "cat": "MEGGER",
    "id": "F15_014"
  },
  {
    "q": "Between which two points can a megger test be applied?",
    "a": "Between a winding and earth, or between two windings",
    "opts": [
      "Between a winding and earth, or between two windings",
      "Only between two live phases of the switchboard",
      "Only between the neutral and the ship's hull",
      "Only across a running motor's terminals while energised"
    ],
    "exp": "A megger tests between a winding and earth (frame), or between one winding and another. It is never applied to a live, energised machine, the equipment must be isolated and proved dead first.",
    "cat": "MEGGER",
    "id": "F15_015"
  },

  /* ═══════════ TEST VOLTAGES ═══════════ */
  {
    "q": "What DC test voltage is typically used for equipment rated below 1 kV, covering most ship's 220/440/690V motors and lighting circuits?",
    "a": "500 V DC",
    "opts": ["500 V DC", "1000 V DC", "2500 V DC", "5000 V DC"],
    "exp": "Below 1 kV, the typical IEEE 43 test voltage is 500 V DC, which is why the everyday workshop megger on most ships is a 500V or 500/1000V instrument. Higher figures apply only to genuinely higher voltage equipment classes.",
    "cat": "VOLTAGES",
    "id": "F15_016"
  },
  {
    "q": "Equipment rated between 1 kV and 2.5 kV is typically tested at:",
    "a": "1000 V DC",
    "opts": ["1000 V DC", "500 V DC", "2500 V DC", "5000 V DC"],
    "exp": "The 1 kV to 2.5 kV band uses 1000 V DC. Below 1 kV uses 500 V DC, and 2.5 kV to 5 kV uses 2500 V DC, each band stepping up with the equipment's rated voltage.",
    "cat": "VOLTAGES",
    "id": "F15_017"
  },
  {
    "q": "A 6.6 kV shipboard motor falls into which test voltage band?",
    "a": "2.5 kV to 5 kV, tested at 2500 V DC",
    "opts": [
      "2.5 kV to 5 kV, tested at 2500 V DC",
      "1 kV to 2.5 kV, tested at 1000 V DC",
      "Below 1 kV, tested at 500 V DC",
      "Above 5 kV, tested at 5000 V DC"
    ],
    "exp": "6.6 kV falls in the 2.5 kV to 5 kV band, tested at 2500 V DC. It does not reach the above-5kV band, which would require 5000 V DC, and it is far above the 500 V/1000 V bands used for low voltage gear.",
    "cat": "VOLTAGES",
    "id": "F15_018"
  },
  {
    "q": "Equipment rated above 5 kV is typically tested at:",
    "a": "5000 V DC",
    "opts": ["5000 V DC", "2500 V DC", "1000 V DC", "500 V DC"],
    "exp": "Above 5 kV, the top band, 5000 V DC applies. Testing high voltage plant like this is usually a specialist HV job with a permit to work, not something done with the everyday hand-held workshop megger.",
    "cat": "VOLTAGES",
    "id": "F15_019"
  },
  {
    "q": "Why is the test voltage matched to the equipment's rated voltage rather than always using the highest available setting?",
    "a": "The test should genuinely stress the insulation the way it is stressed in service, without being needlessly severe on gear that was never designed for a much higher voltage",
    "opts": [
      "The test should genuinely stress the insulation the way it is stressed in service, without being needlessly severe on gear that was never designed for a much higher voltage",
      "Higher test voltages always give a lower, more pessimistic and therefore safer reading",
      "Modern meggers are physically incapable of generating more than 500 V DC",
      "IEEE 43 forbids testing any equipment above its own rated voltage under any circumstance"
    ],
    "exp": "The logic is to stress the insulation at or above its rated working voltage without being needlessly severe on equipment never designed for a much higher test voltage. Using an excessively high voltage on low voltage gear risks damaging insulation that was never rated for it.",
    "cat": "VOLTAGES",
    "id": "F15_020"
  },
  {
    "q": "On the majority of ships, where distribution is 440V or 690V, what is the typical everyday megger found in the electrical workshop?",
    "a": "A 500V or 500/1000V instrument",
    "opts": ["A 500V or 500/1000V instrument", "A 5000V HV-only instrument", "A 2500V dedicated HV instrument", "A 1000V-only instrument with no lower range"],
    "exp": "For 440V/690V distribution, a 500V or 500/1000V megger is the everyday instrument. High voltage installations running 3.3kV or 6.6kV generation and propulsion motors need the higher HV test voltages, usually with specialist test equipment and a permit to work.",
    "cat": "VOLTAGES",
    "id": "F15_021"
  },

  /* ═══════════ ACCEPTABLE VALUES ═══════════ */
  {
    "q": "The traditional rule of thumb for minimum acceptable IR is:",
    "a": "IR minimum (MΩ) = rated kV + 1",
    "opts": [
      "IR minimum (MΩ) = rated kV + 1",
      "IR minimum (MΩ) = rated kV x 1000",
      "IR minimum (MΩ) = rated kV divided by 2",
      "IR minimum (MΩ) = 100, regardless of rated voltage"
    ],
    "exp": "The traditional rule is one megohm per kV of rated voltage, plus one, giving a minimum figure corrected to roughly 20°C. It is a simple, memorable sanity check, but it was never meant to be the last word on a machine's actual condition.",
    "cat": "ACCEPT",
    "id": "F15_022"
  },
  {
    "q": "Using the traditional one-megohm-per-kV-plus-one rule, what is the minimum acceptable IR for a 440V (0.44 kV) motor?",
    "a": "Roughly 1.44 MΩ",
    "opts": ["Roughly 1.44 MΩ", "Roughly 0.44 MΩ", "Roughly 4.4 MΩ", "Roughly 44 MΩ"],
    "exp": "IR minimum = kV + 1 = 0.44 + 1 = 1.44 MΩ. This is only a bare floor below which the machine should not be considered fit to energise, not a statement that the machine is in good health.",
    "cat": "ACCEPT",
    "id": "F15_023"
  },
  {
    "q": "Using the traditional rule, what is the minimum acceptable IR for a 6.6 kV motor?",
    "a": "Roughly 7.6 MΩ",
    "opts": ["Roughly 7.6 MΩ", "Roughly 6.6 MΩ", "Roughly 5.6 MΩ", "Roughly 66 MΩ"],
    "exp": "IR minimum = kV + 1 = 6.6 + 1 = 7.6 MΩ. Note this is a much higher absolute floor than a low voltage machine gets under the same rule, since it scales directly with rated voltage.",
    "cat": "ACCEPT",
    "id": "F15_024"
  },
  {
    "q": "IEEE 43's modern approach for most machines, rather than the per-kV formula, is to specify:",
    "a": "Flat minimum IR values that do not scale with voltage, corrected to 40°C",
    "opts": [
      "Flat minimum IR values that do not scale with voltage, corrected to 40°C",
      "A per-kV formula corrected to 0°C instead of 20°C",
      "No minimum at all, leaving it entirely to the manufacturer",
      "A minimum that scales with the square of the rated voltage"
    ],
    "exp": "IEEE 43-2000 and later revisions moved to flat minimum IR values, corrected to 40°C, that do not scale with voltage. This is a genuinely different approach from the older per-kV rule, not just a restatement of it at a different temperature.",
    "cat": "ACCEPT",
    "id": "F15_025"
  },
  {
    "q": "Under IEEE 43, what is the flat minimum IR (at 40°C) for a random-wound, low voltage stator or armature winding?",
    "a": "5 MΩ",
    "opts": ["5 MΩ", "1 MΩ", "50 MΩ", "100 MΩ"],
    "exp": "Random-wound, low voltage windings have a flat IEEE 43 minimum of 5 MΩ at 40°C. The 100 MΩ figure is the minimum for form-wound, high voltage windings instead.",
    "cat": "ACCEPT",
    "id": "F15_026"
  },
  {
    "q": "Under IEEE 43, what is the flat minimum IR (at 40°C) for a form-wound, high voltage winding?",
    "a": "100 MΩ",
    "opts": ["100 MΩ", "5 MΩ", "10 MΩ", "500 MΩ"],
    "exp": "Form-wound, larger high voltage machine windings have a flat IEEE 43 minimum of 100 MΩ at 40°C, significantly higher than the 5 MΩ figure that applies to random-wound low voltage windings.",
    "cat": "ACCEPT",
    "id": "F15_027"
  },
  {
    "q": "A motor has always read around 2000 MΩ on test and now reads 40 MΩ. It still comfortably clears both the per-kV rule and the IEEE 43 flat minimum. What is the correct interpretation?",
    "a": "The machine has a real problem, because the trend for that specific machine matters more than clearing a generic pass mark",
    "opts": [
      "The machine has a real problem, because the trend for that specific machine matters more than clearing a generic pass mark",
      "The machine is fine, since it passes both recognised minimum standards",
      "The reading is invalid because it cannot have dropped that much and still pass either rule",
      "The minimums only apply to new machines, so this reading is meaningless"
    ],
    "exp": "Either minimum rule gives only a bare floor for safe energisation, not a statement of good health. A drop from 2000 MΩ to 40 MΩ is a huge relative fall for that specific machine and points to a real, developing problem even though it still clears both generic minimums.",
    "cat": "ACCEPT",
    "id": "F15_028"
  },
  {
    "q": "Why is it a mistake to treat the per-kV rule and the IEEE 43 flat minimums as two ways of arriving at the same answer?",
    "a": "They can diverge significantly, especially on higher voltage machines, so both should be known as distinct methods with different origins",
    "opts": [
      "They can diverge significantly, especially on higher voltage machines, so both should be known as distinct methods with different origins",
      "Because the per-kV rule has been officially withdrawn and no longer has any validity",
      "Because the IEEE 43 flat minimums only apply to DC machines",
      "Because the two rules always give exactly the same numeric result for any machine"
    ],
    "exp": "The two rules can diverge significantly, particularly on higher voltage machines, so presenting them as interchangeable is a trap. Both remain worth knowing, one as the traditional per-kV sanity check, the other as the more modern IEEE 43 position.",
    "cat": "ACCEPT",
    "id": "F15_029"
  },

  /* ═══════════ POLARIZATION INDEX ═══════════ */
  {
    "q": "Polarization Index (PI) is defined as:",
    "a": "IR at 10 minutes divided by IR at 1 minute",
    "opts": [
      "IR at 10 minutes divided by IR at 1 minute",
      "IR at 1 minute divided by IR at 10 minutes",
      "IR at 60 seconds divided by IR at 30 seconds",
      "The difference between IR at 10 minutes and IR at 1 minute, in megohms"
    ],
    "exp": "PI = IR at 10 minutes / IR at 1 minute, both readings taken on the same continuous test without disconnecting anything. Dividing the other way round, or using the 30/60 second readings, describes DAR instead.",
    "cat": "PI",
    "id": "F15_030"
  },
  {
    "q": "Why does the IR reading climb with time during a sustained megger test on a clean, dry winding?",
    "a": "A slow dielectric absorption current, from polar molecules in the insulation aligning with the applied field, decays away over minutes, so total current falls while voltage is held constant",
    "opts": [
      "A slow dielectric absorption current, from polar molecules in the insulation aligning with the applied field, decays away over minutes, so total current falls while voltage is held constant",
      "The megger automatically increases its output voltage the longer the test runs",
      "The winding's copper resistance rises as the test proceeds and heats it up",
      "Leakage current does not actually change, only the meter's internal calibration drifts"
    ],
    "exp": "Total test current has a fast-decaying capacitive charging component, a roughly constant resistive leakage component, and a slower absorption component from polar molecules aligning with the field. As the absorption current decays over minutes, total current falls while voltage stays constant, so V/I climbs.",
    "cat": "PI",
    "id": "F15_031"
  },
  {
    "q": "In a wet or contaminated winding, why does the IR reading barely climb over the 10-minute test?",
    "a": "A large, roughly constant resistive leakage current dominates from the start and swamps the slower dielectric absorption effect",
    "opts": [
      "A large, roughly constant resistive leakage current dominates from the start and swamps the slower dielectric absorption effect",
      "Moisture prevents the megger's test voltage from being applied at all",
      "Wet windings have no capacitive charging current, so there is nothing to decay",
      "The dielectric absorption effect is actually faster in wet windings, not slower"
    ],
    "exp": "In a wet or contaminated winding the resistive leakage current is large and roughly constant from the very first second, and it swamps the much smaller absorption effect, so the reading stays close to flat and PI ends up near 1.0.",
    "cat": "PI",
    "id": "F15_032"
  },
  {
    "q": "A winding reads 40 MΩ at 1 minute and 100 MΩ at 10 minutes. What is its PI?",
    "a": "2.5",
    "opts": ["2.5", "0.4", "60", "4.0"],
    "exp": "PI = 100 / 40 = 2.5, which falls in the 2.0 to 4.0 band, a good, normal result for a healthy modern winding. Inverting the division would wrongly give 0.4.",
    "cat": "PI",
    "id": "F15_033"
  },
  {
    "q": "A winding reads 200 MΩ at 1 minute and 220 MΩ at 10 minutes. What does this PI value most likely indicate?",
    "a": "PI is close to 1.0, a signature of moisture or contamination dominating the reading",
    "opts": [
      "PI is close to 1.0, a signature of moisture or contamination dominating the reading",
      "PI is above 4.0, an excellent result showing strong dielectric absorption",
      "PI cannot be calculated because both readings are too similar",
      "PI is exactly 2.0, comfortably meeting the Class B/F/H minimum"
    ],
    "exp": "PI = 220 / 200 = 1.1, close to 1.0 despite a respectable absolute IR value. A reading that barely climbs over ten minutes is the moisture/contamination signature, even when the absolute megohm figure looks reasonable on its own.",
    "cat": "PI",
    "id": "F15_034"
  },
  {
    "q": "A winding reads 50 MΩ at 1 minute and 250 MΩ at 10 minutes. What is its PI, and how should it be interpreted?",
    "a": "PI = 5.0, excellent, very clean and dry insulation with strong dielectric absorption",
    "opts": [
      "PI = 5.0, excellent, very clean and dry insulation with strong dielectric absorption",
      "PI = 0.2, questionable, resistance is effectively falling with time",
      "PI = 5.0, but this indicates a faulty megger since the reading rose too much",
      "PI = 2.0, good, right at the Class B/F/H minimum"
    ],
    "exp": "PI = 250 / 50 = 5.0, which is above the 4.0 threshold and interpreted as excellent, indicating very clean, dry insulation with strong genuine dielectric absorption continuing right through the ten minutes.",
    "cat": "PI",
    "id": "F15_035"
  },
  {
    "q": "A winding reads 150 MΩ at 1 minute and only 120 MΩ at 10 minutes, so the reading has actually fallen. What does a PI below 1.0 indicate?",
    "a": "Questionable insulation, a strong indicator of significant moisture, contamination or serious deterioration",
    "opts": [
      "Questionable insulation, a strong indicator of significant moisture, contamination or serious deterioration",
      "An excellent result, since the winding still has a high absolute IR value",
      "A megger fault, since resistance can never fall during a test",
      "A normal result for any winding rated above 1 kV"
    ],
    "exp": "PI = 120 / 150 = 0.8. A reading that actually falls with time rather than climbing is a strong indicator of significant moisture, contamination or serious insulation deterioration, regardless of how high the absolute readings look.",
    "cat": "PI",
    "id": "F15_036"
  },
  {
    "q": "IEEE 43 sets a minimum acceptable PI of 2.0 for which insulation classes?",
    "a": "Class B, F and H, which covers the great majority of modern marine motors and generators",
    "opts": [
      "Class B, F and H, which covers the great majority of modern marine motors and generators",
      "Class A only",
      "All insulation classes equally, with no distinction between them",
      "Only windings tested above 5 kV"
    ],
    "exp": "IEEE 43 gives a minimum PI of 1.5 for Class A insulation, and 2.0 for Class B, F and H, which covers most modern marine motors and generators. Class A has the lower minimum, not the higher one.",
    "cat": "PI",
    "id": "F15_037"
  },
  {
    "q": "What PI value range is considered good, the normal range for a healthy modern winding?",
    "a": "2.0 to 4.0",
    "opts": ["2.0 to 4.0", "1.0 to 2.0", "Below 1.0", "Above 6.0"],
    "exp": "2.0 to 4.0 is the good, normal range. 1.0 to 2.0 is marginal and below the Class B/F/H minimum, below 1.0 is questionable, and above 4.0 is excellent rather than merely good.",
    "cat": "PI",
    "id": "F15_038"
  },
  {
    "q": "A winding's 1-minute IR reading is already in the thousands of megohms. Why does PI stop being a meaningful diagnostic in this case?",
    "a": "There is so little leakage current to begin with that the ratio can swing on measurement noise rather than genuine absorption behaviour",
    "opts": [
      "There is so little leakage current to begin with that the ratio can swing on measurement noise rather than genuine absorption behaviour",
      "The megger cannot physically hold a test voltage for the full 10 minutes on such a clean winding",
      "IEEE 43 explicitly forbids running a PI test above 1000 MΩ",
      "PI always equals exactly 1.0 once the 1-minute reading exceeds 1000 MΩ"
    ],
    "exp": "When leakage current is already extremely small at 1 minute, the ratio of two very small, noisy currents can swing significantly without reflecting real absorption behaviour. In that case the absolute IR value and its trend across successive tests matter more than a single PI figure.",
    "cat": "PI",
    "id": "F15_039"
  },

  /* ═══════════ DAR ═══════════ */
  {
    "q": "Dielectric Absorption Ratio (DAR) is defined as:",
    "a": "IR at 60 seconds divided by IR at 30 seconds",
    "opts": [
      "IR at 60 seconds divided by IR at 30 seconds",
      "IR at 10 minutes divided by IR at 1 minute",
      "IR at 30 seconds divided by IR at 60 seconds",
      "IR at 1 minute divided by IR at 30 seconds"
    ],
    "exp": "DAR = IR at 60 seconds / IR at 30 seconds, a short-duration relative of PI that works on the same underlying dielectric absorption principle, compressed into a one-minute window instead of ten minutes.",
    "cat": "DAR",
    "id": "F15_040"
  },
  {
    "q": "When is DAR particularly useful compared to running a full PI test?",
    "a": "When a full ten-minute test is impractical, or on smaller machines where a full PI test is not standard practice",
    "opts": [
      "When a full ten-minute test is impractical, or on smaller machines where a full PI test is not standard practice",
      "When the machine is rated above 5 kV and requires a longer test instead",
      "Only when the megger is incapable of running for longer than one minute",
      "DAR should always be used in preference to PI, since it gives a more reliable figure"
    ],
    "exp": "DAR is the quicker, rougher indicator, useful when time is short or on smaller machines where a full PI test is not standard practice. It trades some diagnostic power for speed rather than being a general replacement for PI.",
    "cat": "DAR",
    "id": "F15_041"
  },
  {
    "q": "A winding reads 60 MΩ at 30 seconds and 90 MΩ at 60 seconds. What is its DAR, and how is it interpreted?",
    "a": "DAR = 1.5, good",
    "opts": ["DAR = 1.5, good", "DAR = 0.67, bad or contaminated", "DAR = 1.5, excellent, above the top band", "DAR = 30, an invalid result"],
    "exp": "DAR = 90 / 60 = 1.5, which falls in the 1.25 to 1.6 band, interpreted as good. It is below the above-1.6 excellent threshold and well clear of the below-1.0 bad band.",
    "cat": "DAR",
    "id": "F15_042"
  },
  {
    "q": "A winding reads 100 MΩ at 30 seconds and only 90 MΩ at 60 seconds. What does this DAR result indicate?",
    "a": "DAR = 0.9, below 1.0, indicating bad or contaminated insulation",
    "opts": [
      "DAR = 0.9, below 1.0, indicating bad or contaminated insulation",
      "DAR = 1.1, marginal but acceptable",
      "DAR = 0.9, excellent, since the reading is close to 1.0",
      "This result is impossible and points only to a faulty megger"
    ],
    "exp": "DAR = 90 / 100 = 0.9. A reading that falls rather than rises over the first minute is a below-1.0 result, indicating bad or contaminated insulation, the same falling-resistance pattern that a sub-1.0 PI also flags.",
    "cat": "DAR",
    "id": "F15_043"
  },
  {
    "q": "A winding reads 100 MΩ at 30 seconds and 105 MΩ at 60 seconds. Where does this DAR result fall?",
    "a": "DAR = 1.05, in the 1.0 to 1.25 questionable band",
    "opts": [
      "DAR = 1.05, in the 1.0 to 1.25 questionable band",
      "DAR = 1.05, in the 1.25 to 1.6 good band",
      "DAR = 1.05, in the above 1.6 excellent band",
      "DAR = 5.0, an excellent result"
    ],
    "exp": "DAR = 105 / 100 = 1.05, which sits in the 1.0 to 1.25 questionable band, a minimal rise that suggests the insulation should be investigated rather than confidently passed.",
    "cat": "DAR",
    "id": "F15_044"
  },
  {
    "q": "How do the interpretation bands for DAR compare to the PI figures set out by IEEE 43?",
    "a": "DAR bands are less rigidly standardised than the IEEE 43 PI figures, and DAR should be treated as a rougher indicator rather than a substitute for PI where time allows",
    "opts": [
      "DAR bands are less rigidly standardised than the IEEE 43 PI figures, and DAR should be treated as a rougher indicator rather than a substitute for PI where time allows",
      "DAR bands are set out in IEEE 43 with exactly the same authority and precision as the PI figures",
      "DAR is always numerically identical to PI for the same winding",
      "DAR has replaced PI entirely as the current IEEE 43 standard test"
    ],
    "exp": "The widely used DAR interpretation bands are less rigidly standardised than the PI minimums IEEE 43 explicitly sets out. On a genuinely borderline winding, running the full ten minutes for PI is the more reliable call.",
    "cat": "DAR",
    "id": "F15_045"
  },

  /* ═══════════ WHICH TERMINALS ═══════════ */
  {
    "q": "What does a phase-to-earth test (U-E, V-E, W-E) specifically check?",
    "a": "Breakdown of the main insulation between a winding and the earthed frame or core",
    "opts": [
      "Breakdown of the main insulation between a winding and the earthed frame or core",
      "Breakdown of the interwinding insulation between two separate phase windings",
      "The resistance of the copper conductor itself",
      "The balance of load current between the three phases"
    ],
    "exp": "Phase-to-earth testing checks the main insulation between a winding and the earthed frame or core. Phase-to-phase testing is the one that checks interwinding insulation between two separate phase windings.",
    "cat": "TERM",
    "id": "F15_046"
  },
  {
    "q": "A low reading on a phase-to-earth test most specifically suggests:",
    "a": "Insulation to frame has broken down, most commonly from moisture, contamination or aged/cracked main wall insulation",
    "opts": [
      "Insulation to frame has broken down, most commonly from moisture, contamination or aged/cracked main wall insulation",
      "An interwinding breakdown between two phases, generally more serious",
      "A simple wiring error made during a recent maintenance job",
      "Normal behaviour for any healthy winding at rated voltage"
    ],
    "exp": "A low phase-to-earth reading points to breakdown of insulation to the earthed frame, most commonly from moisture, contamination or aged/cracked main wall insulation. This is exactly the fault an earth fault relay is built to catch once the machine is running.",
    "cat": "TERM",
    "id": "F15_047"
  },
  {
    "q": "A low reading on a phase-to-phase test is generally considered more serious than a low phase-to-earth reading. Why?",
    "a": "It usually means physical damage within the winding itself, rather than surface contamination",
    "opts": [
      "It usually means physical damage within the winding itself, rather than surface contamination",
      "Phase-to-phase faults always trip the main breaker instantly, unlike phase-to-earth faults",
      "Phase-to-phase testing uses a higher test voltage than phase-to-earth testing",
      "It is not actually more serious, the two findings carry identical implications"
    ],
    "exp": "A phase-to-phase failure points at an interwinding, or turn-to-turn near the phase boundary, breakdown, and is generally the more serious finding since it usually reflects physical damage within the winding rather than surface contamination that could simply be cleaned or dried off.",
    "cat": "TERM",
    "id": "F15_048"
  },
  {
    "q": "In practice, how is a three-phase winding usually tested first, before localising any suspect result?",
    "a": "All phases are shorted together and tested to earth as a single combined reading for a quick pass/fail check",
    "opts": [
      "All phases are shorted together and tested to earth as a single combined reading for a quick pass/fail check",
      "Each phase is tested individually to earth and to each other phase before any combined check is done",
      "Only the neutral point is tested, since the phases cannot be tested directly",
      "The machine is run briefly under load before any megger test is attempted"
    ],
    "exp": "All phases are shorted together and tested to earth as a single combined reading first, for a quick pass/fail check. Individual phase-to-earth and phase-to-phase testing follows only if time and the situation warrant localising a suspect result.",
    "cat": "TERM",
    "id": "F15_049"
  },
  {
    "q": "A machine fails the combined phase-to-earth test. What is the purpose of then testing the individual phase pairs?",
    "a": "To narrow down the fault before deciding whether it is a drying job or a rewind job",
    "opts": [
      "To narrow down the fault before deciding whether it is a drying job or a rewind job",
      "To double-check the megger itself is working correctly",
      "Individual pair testing is not useful once the combined test has already failed",
      "To recalibrate the test voltage before repeating the combined test"
    ],
    "exp": "Going to the individual phase-to-earth and phase-to-phase pairs is exactly how a failed combined result gets narrowed down, distinguishing a moisture or contamination issue that can be dried or cleaned from physical winding damage that points toward a rewind.",
    "cat": "TERM",
    "id": "F15_050"
  },

  /* ═══════════ SAFETY PRACTICE ═══════════ */
  {
    "q": "Before connecting any megger test leads, what must be done first, even though the megger applies its own separate test voltage?",
    "a": "Isolate the normal supply and prove the circuit dead",
    "opts": [
      "Isolate the normal supply and prove the circuit dead",
      "Discharge the megger's internal battery completely",
      "Run the motor briefly to confirm it still turns",
      "Set the megger to its highest available voltage range"
    ],
    "exp": "Standard electrical safety practice applies in full: lock off and prove the normal supply dead before connecting test leads. The megger's own separate test voltage does not remove the need to confirm the circuit is dead of its normal supply first.",
    "cat": "SAFETY",
    "id": "F15_051"
  },
  {
    "q": "Why should a winding be discharged to earth before a megger test is applied?",
    "a": "So any residual charge from previous testing or operation does not distort the fresh reading being taken",
    "opts": [
      "So any residual charge from previous testing or operation does not distort the fresh reading being taken",
      "Because an uncharged winding reads a lower resistance than a charged one",
      "Because the megger cannot generate its test voltage across an already-charged winding",
      "This step is only required on windings rated above 5 kV"
    ],
    "exp": "Residual charge left on a winding from a previous test or from the machine's own operation can distort a fresh reading if not bled off first. Discharging beforehand ensures the test starts from a clean, known state.",
    "cat": "SAFETY",
    "id": "F15_052"
  },
  {
    "q": "Which safety step, specifically the one after a megger test, is most commonly forgotten, and why is skipping it dangerous?",
    "a": "Discharging the winding after the test, because the test voltage itself charges the winding like a capacitor, and it can deliver a real shock from terminals that are otherwise isolated",
    "opts": [
      "Discharging the winding after the test, because the test voltage itself charges the winding like a capacitor, and it can deliver a real shock from terminals that are otherwise isolated",
      "Disconnecting the megger's battery, because it can otherwise overheat",
      "Re-isolating the normal supply, because the megger test automatically re-energises it",
      "Recording the test result, because IEEE 43 requires it within 24 hours"
    ],
    "exp": "A winding behaves as a capacitor and the megger's own test voltage charges it up over the course of the test. That charge is still present after the instrument is switched off and disconnected, so touching the terminals of a nominally isolated, off winding can deliver a real, unpleasant shock unless it is deliberately discharged to earth.",
    "cat": "SAFETY",
    "id": "F15_053"
  },
  {
    "q": "Why should other connected equipment, such as VFDs or surge capacitors, be disconnected before megger testing a winding where practical?",
    "a": "The test voltage will also be applied to them, and can damage sensitive electronics not rated for it",
    "opts": [
      "The test voltage will also be applied to them, and can damage sensitive electronics not rated for it",
      "Connected equipment always causes the megger to give a falsely high reading",
      "It is purely a convenience step with no risk to the equipment either way",
      "Connected equipment prevents the megger from discharging the winding afterward"
    ],
    "exp": "If the winding is left connected to other equipment, the full test voltage is also applied to that equipment. VFDs, surge capacitors and other sensitive electronics not rated for the test voltage can be damaged, so isolating them first is the correct practice where practical.",
    "cat": "SAFETY",
    "id": "F15_054"
  },
  {
    "q": "What is the correct practice when megger testing a winding known or suspected to be wet?",
    "a": "Use a reduced test voltage, or a slow, cautious reading, until the winding is confirmed dry",
    "opts": [
      "Use a reduced test voltage, or a slow, cautious reading, until the winding is confirmed dry",
      "Apply full test voltage immediately, since wet insulation is not affected by voltage",
      "Skip the test entirely and rely on visual inspection only",
      "Increase the test voltage above normal to drive off the moisture faster"
    ],
    "exp": "Full voltage across moisture-bridged insulation can cause an actual breakdown that the same winding, once properly dried, would have withstood without damage. A reduced test voltage, or a slow, cautious reading, is used until the winding is confirmed dry.",
    "cat": "SAFETY",
    "id": "F15_055"
  },

  /* ═══════════ LINK TO F12 ═══════════ */
  {
    "q": "During the drying process after saltwater ingress, why is a wet winding meggered periodically through the drying process, not just at the start and end?",
    "a": "IR is the one measurement that directly tracks how much moisture is still present in the insulation",
    "opts": [
      "IR is the one measurement that directly tracks how much moisture is still present in the insulation",
      "Periodic testing is only done to keep a paperwork record for class surveyors",
      "The megger itself needs to be run periodically or its battery will discharge",
      "It has no diagnostic value, it is simply routine procedure with no specific purpose"
    ],
    "exp": "As free and absorbed water evaporates out of the winding during drying, the leakage path it was providing shrinks and IR climbs. Tracking IR periodically through the process is how the person drying the motor confirms moisture is actually leaving it.",
    "cat": "F12LINK",
    "id": "F15_056"
  },
  {
    "q": "What does a steadily rising IR trend during the drying of a wet motor confirm?",
    "a": "That the drying process is actually working",
    "opts": [
      "That the drying process is actually working",
      "That the winding has developed a new fault and should be rejected",
      "That the test voltage is set too high",
      "That the motor should be immediately returned to full test voltage regardless of the reading"
    ],
    "exp": "A steadily rising IR trend over the drying period is the confirmation that moisture is progressively leaving the insulation and the process is working as intended.",
    "cat": "F12LINK",
    "id": "F15_057"
  },
  {
    "q": "During drying, a motor's IR reading plateaus at a low value and fluctuates instead of climbing. What does this signal?",
    "a": "Moisture is not actually leaving the winding, or there is a fault beyond simple wetting, which is the trigger to consider rejecting the motor for a rewind",
    "opts": [
      "Moisture is not actually leaving the winding, or there is a fault beyond simple wetting, which is the trigger to consider rejecting the motor for a rewind",
      "The drying is complete and the motor can be returned to service immediately",
      "The megger has developed a fault and should be replaced before continuing",
      "This is a normal, expected part of every drying cycle and requires no action"
    ],
    "exp": "A reading that plateaus low or fluctuates rather than climbing tells the person drying the motor that moisture is not actually leaving it, or that there is a fault beyond simple wetting, exactly the signal that triggers consideration of rejecting the motor for a rewind rather than continuing to dry it on board.",
    "cat": "F12LINK",
    "id": "F15_058"
  },
  {
    "q": "What is the rule tying safe testing practice to the drying process for a wet winding recovering from saltwater ingress?",
    "a": "Test at reduced voltage only while the winding is still wet, and only return to full test voltage once the IR trend has plateaued at a healthy, stable value",
    "opts": [
      "Test at reduced voltage only while the winding is still wet, and only return to full test voltage once the IR trend has plateaued at a healthy, stable value",
      "Always use full test voltage throughout drying, since reduced voltage gives an inaccurate reading",
      "Never megger a winding at any point during the drying process",
      "Use full test voltage for the first reading only, then switch to reduced voltage for all subsequent readings"
    ],
    "exp": "While the winding is still wet, test at reduced voltage only, since full voltage across moisture-bridged insulation risks a breakdown the winding would otherwise have survived. Full test voltage only resumes once the IR trend has plateaued at a healthy, stable value, confirming the winding is genuinely dry.",
    "cat": "F12LINK",
    "id": "F15_059"
  }

]);

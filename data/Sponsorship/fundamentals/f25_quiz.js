window.loadQuizzes("F25_Practical", [

  /* ═══════════ SCENARIO 1: OVERLOAD TRIP ═══════════ */
  {
    "q": "A pump motor trips on overload. What is the correct first action?",
    "a": "Investigate the load side before touching the breaker",
    "opts": ["Reset it immediately and see if it trips again", "Investigate the load side before touching the breaker", "Increase the overload relay setting", "Isolate and megger the motor immediately"],
    "exp": "The load side (a throttled valve, choked strainer, jammed impeller) is the most common real cause and costs nothing to check before opening anything electrical. Resetting blind risks repeating whatever caused the trip, and IR testing is a later step in the sequence, not the first.",
    "cat": "OVERLOAD",
    "id": "F25_001"
  },
  {
    "q": "Why should you not simply reset an overload trip and restart the motor?",
    "a": "Resetting blind risks repeating whatever caused the trip, and a second start can finish off a developing winding fault",
    "opts": ["The relay resets itself automatically after a few minutes", "Resetting blind risks repeating whatever caused the trip, and a second start can finish off a developing winding fault", "Overload relays cannot be reset manually", "The motor will trip on undervoltage instead next time"],
    "exp": "An overload trip almost always means sustained overload or a stall, not a short circuit (which would take out a fuse or MCCB instead). If the underlying cause is a stalled rotor or a developing winding fault, a blind reset can push it past the point of no return.",
    "cat": "OVERLOAD",
    "id": "F25_002"
  },
  {
    "q": "What is the most common real-world cause of a motor overload trip on a pump?",
    "a": "A throttled discharge valve, choked strainer, or jammed impeller increasing the mechanical load",
    "opts": ["A short circuit in the motor winding", "A throttled discharge valve, choked strainer, or jammed impeller increasing the mechanical load", "A blown control fuse", "Low insulation resistance"],
    "exp": "Overload means the motor was asked to do more mechanical work than it's rated for. A short circuit is an electrical fault that trips a different device (fuse/MCCB), and low IR is a separate diagnostic path checked later in the sequence.",
    "cat": "OVERLOAD",
    "id": "F25_003"
  },
  {
    "q": "With the motor isolated, why try turning the shaft by hand as part of investigating an overload trip?",
    "a": "To rule out mechanical binding such as a seized bearing or misaligned coupling that forces the motor to work harder",
    "opts": ["To check the direction of rotation is correct", "To rule out mechanical binding such as a seized bearing or misaligned coupling that forces the motor to work harder", "To discharge any residual voltage in the windings", "To verify the overload relay's trip class"],
    "exp": "A seized bearing or misaligned coupling makes the motor work harder for the same electrical input, and that extra work shows up as overload current. This links directly to Scenario 8 if the bearing is also found to be hot.",
    "cat": "OVERLOAD",
    "id": "F25_004"
  },
  {
    "q": "During overload trip investigation, why check phase balance in addition to insulation resistance?",
    "a": "A lost phase on a light load can look exactly like a moderate overload trip",
    "opts": ["A lost phase on a light load can look exactly like a moderate overload trip", "Phase balance has no bearing on overload trips", "IR testing requires all three phases to be equal first", "Phase imbalance always trips the earth fault relay instead"],
    "exp": "This is the single-phasing signature: a motor missing one phase draws unbalanced, elevated current on the remaining phases while still turning, which can present as an unremarkable overload trip unless you specifically check phase balance.",
    "cat": "OVERLOAD",
    "id": "F25_005"
  },
  {
    "q": "Once the load side is clear, insulation is sound, and phases are balanced, what is the correct next step?",
    "a": "Reset and restart under observation, watching the running current settle",
    "opts": ["Permanently disable the overload relay to prevent nuisance trips", "Reset and restart under observation, watching the running current settle", "Increase the motor's rated current on the nameplate", "Leave the motor isolated for 24 hours as a precaution"],
    "exp": "Only after the load side, insulation and phase balance have all been checked does a reset become appropriate, and even then it's done under observation rather than walking away, so a repeat trip is caught immediately.",
    "cat": "OVERLOAD",
    "id": "F25_006"
  },
  {
    "q": "The motor trips again shortly after being reset once. What is the correct response?",
    "a": "Stop and escalate rather than reset again",
    "opts": ["Reset it again, trips sometimes need two attempts", "Stop and escalate rather than reset again", "Increase the overload relay's current setting", "Bypass the overload relay temporarily"],
    "exp": "A repeat trip means the cause was not actually cleared, or is more serious than first thought. Resetting again is the wrong instinct here, and is the same trap examined more directly in Scenario 4 (breaker won't reset).",
    "cat": "OVERLOAD",
    "id": "F25_007"
  },

  /* ═══════════ SCENARIO 2: IR READS ZERO ═══════════ */
  {
    "q": "You megger a motor and get a reading of zero. What should you suspect first?",
    "a": "The test itself, before assuming the winding is faulty",
    "opts": ["A confirmed winding short circuit", "The test itself, before assuming the winding is faulty", "A blown main fuse", "An open circuit in the stator winding"],
    "exp": "A zero reading is as likely to be a test error (meter fault, shorted leads, clips touching each other or an earthed surface) as a genuine short. Jumping straight to 'the winding is shorted' skips a cheap and essential check.",
    "cat": "IRZERO",
    "id": "F25_008"
  },
  {
    "q": "What is the first practical check to rule out a test error when IR reads zero?",
    "a": "Check the meter on a known good circuit and check the leads for a short between them",
    "opts": ["Check the meter on a known good circuit and check the leads for a short between them", "Immediately open the terminal box and inspect the windings", "Apply a higher test voltage to force a clearer reading", "Report the motor as failed without further testing"],
    "exp": "Verifying the meter and leads on a known good circuit rules out the test instrument itself before any conclusion is drawn about the motor. Opening the terminal box or condemning the motor comes later, only if the fault repeats.",
    "cat": "IRZERO",
    "id": "F25_009"
  },
  {
    "q": "Before re-testing a motor that shows zero IR, what must you confirm?",
    "a": "That the motor is genuinely isolated, since a still-connected space heater circuit or a left-in neutral link can give a misleadingly low reading",
    "opts": ["That the motor is genuinely isolated, since a still-connected space heater circuit or a left-in neutral link can give a misleadingly low reading", "That the shaft is not rotating", "That the ambient temperature is below 30 degrees C", "That the motor has run for at least one hour"],
    "exp": "A residual electrical connection, such as a space heater circuit or a neutral link, can pull the reading down artificially. Confirming true isolation before re-testing separates a wiring artefact from a genuine fault.",
    "cat": "IRZERO",
    "id": "F25_010"
  },
  {
    "q": "A zero IR reading repeats on retest after confirming correct isolation. What is the correct next step?",
    "a": "Move to physical inspection of the terminal box for a loose gland, tracking, or a chafed cable touching the frame",
    "opts": ["Apply a much higher test voltage to confirm the fault definitively", "Move to physical inspection of the terminal box for a loose gland, tracking, or a chafed cable touching the frame", "Return the motor to service since the test has already been repeated twice", "Assume it is moisture and dry it without further checks"],
    "exp": "A genuine fault repeats, a test artefact does not. Once two clean retests agree, physical inspection of the terminal box is often the fastest route to the actual cause, not a higher test voltage, which risks driving further damage into failing insulation.",
    "cat": "IRZERO",
    "id": "F25_011"
  },
  {
    "q": "How do you distinguish moisture-related low IR from a genuine insulation breakdown?",
    "a": "Moisture-related low IR is often unstable and affects more than one phase similarly, while a genuine breakdown is a firm, repeatable low reading that doesn't improve on its own",
    "opts": ["Moisture-related low IR is often unstable and affects more than one phase similarly, while a genuine breakdown is a firm, repeatable low reading that doesn't improve on its own", "Moisture always gives a higher reading than a genuine breakdown", "There is no practical way to distinguish them without opening the motor", "A genuine breakdown only ever affects one phase and never repeats"],
    "exp": "Moisture tends to give unstable, similarly-low readings across more than one phase and can be recovered with drying. A genuine breakdown is firm, repeatable, and does not improve by itself, which is the key distinguishing behaviour.",
    "cat": "IRZERO",
    "id": "F25_012"
  },
  {
    "q": "Why is cranking a 500V megger repeatedly onto a genuinely low IR reading a bad idea?",
    "a": "It risks driving further damage into failing insulation",
    "opts": ["It wastes battery power in the megger", "It risks driving further damage into failing insulation", "It will give a falsely high reading on the second attempt", "Meggers cannot be used twice on the same circuit"],
    "exp": "Once two clean retests agree on a genuine fault, repeatedly stressing failing insulation with test voltage serves no purpose and can worsen the damage. The correct move at that point is physical inspection, not more megger cycles.",
    "cat": "IRZERO",
    "id": "F25_013"
  },
  {
    "q": "IR is confirmed as a genuine breakdown rather than moisture or a test error. What happens next?",
    "a": "The motor does not return to service on one low reading, it needs opening up or workshop diagnosis",
    "opts": ["The motor is returned to service since one reading was taken", "The motor does not return to service on one low reading, it needs opening up or workshop diagnosis", "The motor is dried out and re-tested at reduced voltage", "The overload relay setting is reduced to compensate"],
    "exp": "A confirmed zero or near-zero IR is a motor that cannot be safely re-energised. It should be isolated and tagged out, reported to the Chief Engineer, and go beyond a hand-held megger for proper diagnosis.",
    "cat": "IRZERO",
    "id": "F25_014"
  },

  /* ═══════════ SCENARIO 3: ALTERNATOR WON'T BUILD VOLTAGE ═══════════ */
  {
    "q": "An alternator is at rated speed but the voltmeter stays at zero. What should you confirm first?",
    "a": "That the prime mover is genuinely at rated, stable speed, and that the field breaker or switch is closed",
    "opts": ["That the AVR has failed", "That the prime mover is genuinely at rated, stable speed, and that the field breaker or switch is closed", "That the rectifier diodes are open circuit", "That the residual magnetism is definitely lost"],
    "exp": "A self-excited machine's frequency and voltage both depend on shaft speed, so confirming genuinely stable rated speed and a closed field circuit comes first, before diagnosing the AVR or field circuit.",
    "cat": "ALTVOLT",
    "id": "F25_015"
  },
  {
    "q": "What does measuring residual voltage at the output terminals tell you?",
    "a": "Whether there is leftover magnetism in the rotor poles for the AVR to amplify into full build-up",
    "opts": ["Whether there is leftover magnetism in the rotor poles for the AVR to amplify into full build-up", "Whether the prime mover governor is functioning", "Whether the generator breaker is closed", "Whether the load is balanced across all three phases"],
    "exp": "Build-up is a self-reinforcing loop: residual magnetism gives a small starting voltage that the AVR amplifies into more field current, raising voltage further. With no residual voltage, there is nothing for the AVR to amplify, and it sits at zero.",
    "cat": "ALTVOLT",
    "id": "F25_016"
  },
  {
    "q": "Residual magnetism is confirmed lost. What is the correct fix, and how must it be applied?",
    "a": "Field flashing: applying a low voltage DC source briefly to the field winding with the AVR disconnected first",
    "opts": ["Field flashing: applying a low voltage DC source briefly to the field winding with the AVR still connected", "Field flashing: applying a low voltage DC source briefly to the field winding with the AVR disconnected first", "Replacing the rotor entirely", "Increasing the prime mover speed above rated to force build-up"],
    "exp": "Field flashing briefly applies a low voltage DC source (commonly a 12V battery) to the field winding to restart the build-up loop. It must be done with the AVR disconnected first; external DC into a live AVR can destroy its electronics.",
    "cat": "ALTVOLT",
    "id": "F25_017"
  },
  {
    "q": "Why must the AVR be disconnected before field flashing?",
    "a": "Because external DC fed into a live AVR can destroy its electronics",
    "opts": ["Because the AVR requires the generator breaker to be closed first", "Because external DC fed into a live AVR can destroy its electronics", "Because the AVR automatically performs field flashing on its own", "Because field flashing only works below 25 percent rated speed"],
    "exp": "The AVR's electronics are not designed to have an external DC source imposed on the field circuit while still connected, so it must be isolated first to avoid damaging it during the flashing procedure.",
    "cat": "ALTVOLT",
    "id": "F25_018"
  },
  {
    "q": "Residual voltage is present but collapses or never rises further. What should you suspect?",
    "a": "The AVR or its sensing fuse, since a blown sensing fuse can make a healthy AVR believe target voltage is already reached",
    "opts": ["A completely open field winding", "The AVR or its sensing fuse, since a blown sensing fuse can make a healthy AVR believe target voltage is already reached", "A worn coupling between prime mover and alternator", "The generator breaker being closed"],
    "exp": "If residual magnetism is present (so there's something to amplify) but the build-up stalls, the AVR or its sensing circuit is the next suspect, ahead of the field winding itself, which is checked afterward if the AVR proves healthy.",
    "cat": "ALTVOLT",
    "id": "F25_019"
  },
  {
    "q": "The AVR and its sensing fuse both check out healthy, yet the alternator still will not build voltage. Where should you look next?",
    "a": "The field circuit: an open field winding, a failed rectifier diode on a brushless machine, or worn slip ring brushes",
    "opts": ["Back at the prime mover governor setting", "The field circuit: an open field winding, a failed rectifier diode on a brushless machine, or worn slip ring brushes", "The main circuit breaker's overcurrent trip unit", "The load's power factor"],
    "exp": "With a healthy AVR trying to drive field current, an open field winding, a failed rotating rectifier diode, or worn slip ring brushes can all still prevent field current from flowing, stopping the build-up loop.",
    "cat": "ALTVOLT",
    "id": "F25_020"
  },
  {
    "q": "Why should the generator breaker be open while chasing a voltage build-up fault?",
    "a": "Because build-up should happen on open circuit, and testing with the breaker closed adds an unnecessary variable",
    "opts": ["Because build-up should happen on open circuit, and testing with the breaker closed adds an unnecessary variable", "Because a closed breaker forces the AVR to shut down", "Because the breaker must be closed for the AVR to sense voltage at all", "Because an open breaker prevents field flashing from working"],
    "exp": "Voltage build-up is expected to occur before the generator is connected to any load, so confirming the breaker is open removes load-related complications from the diagnosis and keeps the sequence clean.",
    "cat": "ALTVOLT",
    "id": "F25_021"
  },

  /* ═══════════ SCENARIO 4: BREAKER WON'T RESET ═══════════ */
  {
    "q": "A breaker trips repeatedly when you try to close it. What should you check before any reset attempt?",
    "a": "The trip indication, to see whether it shows overcurrent, short circuit, earth fault, undervoltage, or a mechanical fault flag",
    "opts": ["The trip indication, to see whether it shows overcurrent, short circuit, earth fault, undervoltage, or a mechanical fault flag", "The generator frequency", "The busbar voltage rating", "The prime mover's fuel rack position"],
    "exp": "A modern MCCB or ACB shows what tripped it. Reading that indication first, before a single reset attempt, tells you whether you're dealing with a genuine fault, an interlock, or a trip unit problem.",
    "cat": "BREAKER",
    "id": "F25_022"
  },
  {
    "q": "The trip indication shows a genuine electrical fault. What should you do?",
    "a": "Not reset again, and isolate and investigate downstream instead",
    "opts": ["Reset it once more to confirm the fault is real", "Not reset again, and isolate and investigate downstream instead", "Force the breaker closed using extra mechanical leverage", "Bypass the trip unit temporarily to restore supply"],
    "exp": "Repeatedly forcing closure onto a persisting fault stresses the mechanism and risks a violent failure, potentially an arc flash. The fault needs isolating and investigating downstream, using the same reasoning as Scenario 1 or 7.",
    "cat": "BREAKER",
    "id": "F25_023"
  },
  {
    "q": "Why is repeatedly forcing a breaker closed onto a persisting fault dangerous?",
    "a": "It stresses the mechanism and risks a violent failure on the next attempt, potentially an arc flash",
    "opts": ["It has no real risk, breakers are designed for repeated closing", "It stresses the mechanism and risks a violent failure on the next attempt, potentially an arc flash", "It will simply blow a control fuse harmlessly", "It automatically resets the trip unit to a safer setting"],
    "exp": "Breaker mechanisms are not designed to be repeatedly slammed onto a live fault. Each attempt adds mechanical and electrical stress, raising the risk of a genuinely dangerous failure such as an arc flash on a subsequent attempt.",
    "cat": "BREAKER",
    "id": "F25_024"
  },
  {
    "q": "A breaker will not close mechanically at all, with no electrical trip indicated. What should you suspect?",
    "a": "An interlock, such as a door interlock, racking interlock, an adjacent breaker interlock, or an uncharged closing spring",
    "opts": ["A blown control fuse in the protection relay", "An interlock, such as a door interlock, racking interlock, an adjacent breaker interlock, or an uncharged closing spring", "A short circuit downstream", "An undersized cable feeding the breaker"],
    "exp": "A mechanical refusal to close, without any electrical trip flag, points to an interlock or an uncharged spring, not a fault current. It also pays to check for a latched trip that needs the reset lever moved firmly past its mechanical position.",
    "cat": "BREAKER",
    "id": "F25_025"
  },
  {
    "q": "A breaker closes successfully but trips again with no apparent downstream fault. What should you suspect?",
    "a": "The trip unit or its CTs, since a drifting electronic trip unit or damaged CT can give false trips",
    "opts": ["The trip unit or its CTs, since a drifting electronic trip unit or damaged CT can give false trips", "A closing spring that needs recharging", "A door interlock left open", "Normal operation, and it should simply be reset again"],
    "exp": "If the breaker closes but trips without an apparent real cause, the protection sensing itself becomes the suspect. This calls for a trip unit test, not more reset attempts.",
    "cat": "BREAKER",
    "id": "F25_026"
  },
  {
    "q": "What is the trap this scenario is specifically built to catch a candidate on?",
    "a": "The instinct of 'it won't reset, so try again,' when a breaker tripping repeatedly on a real fault is doing its job correctly every time",
    "opts": ["Assuming the breaker itself is always defective", "The instinct of 'it won't reset, so try again,' when a breaker tripping repeatedly on a real fault is doing its job correctly every time", "Forgetting to check the busbar voltage first", "Confusing an ACB with an MCCB"],
    "exp": "A breaker that trips repeatedly on a genuine fault is functioning correctly every single time; the fault lies downstream, not in the breaker. Losing marks here means falling for the instinct to just keep trying.",
    "cat": "BREAKER",
    "id": "F25_027"
  },

  /* ═══════════ SCENARIO 5: LIGHTS DIM ON MOTOR START ═══════════ */
  {
    "q": "Lights dim visibly when a large motor starts DOL. What is the underlying cause?",
    "a": "A current surge of five to seven times full load current flowing through the generator and cable's finite internal impedance, producing a real voltage drop across the busbar",
    "opts": ["A current surge of five to seven times full load current flowing through the generator and cable's finite internal impedance, producing a real voltage drop across the busbar", "A frequency fault in the AVR", "A short circuit developing in the starting motor", "Normal flicker unrelated to the motor start"],
    "exp": "A DOL start draws five to seven times full load current, and this surge through finite source impedance produces a real voltage drop felt by every load on the busbar simultaneously, recovering as the motor accelerates.",
    "cat": "DIMMING",
    "id": "F25_028"
  },
  {
    "q": "Why can a voltage dip be barely noticeable with two generators paralleled, but severe with only one on line?",
    "a": "Because the supply is a genuinely limited source, and the motor represents a larger fraction of the capacity actually available with one generator on line",
    "opts": ["Because paralleled generators run at a lower frequency", "Because the supply is a genuinely limited source, and the motor represents a larger fraction of the capacity actually available with one generator on line", "Because paralleling doubles the system voltage", "Because a single generator cannot support DOL starting at all"],
    "exp": "At sea the supply is not an infinite grid. The same motor draws a much larger share of the total available capacity when only one generator is on line, so the resulting dip is proportionally worse.",
    "cat": "DIMMING",
    "id": "F25_029"
  },
  {
    "q": "What should be checked regarding the starting method when a DOL start causes a severe dip?",
    "a": "Whether star-delta, autotransformer, soft starter or VFD starting would suit the motor and supply better",
    "opts": ["Whether star-delta, autotransformer, soft starter or VFD starting would suit the motor and supply better", "Whether the motor's insulation class is adequate", "Whether the overload relay setting is too low", "Whether the motor should instead be run on DC"],
    "exp": "A DOL start against an undersized supply is very possibly the whole explanation. Reduced-current starting methods limit the inrush and the resulting busbar dip, so checking whether one suits the motor is a genuine part of the diagnosis.",
    "cat": "DIMMING",
    "id": "F25_030"
  },
  {
    "q": "What should a healthy AVR do in response to the large step load of a motor start?",
    "a": "Recover busbar voltage within a second or two",
    "opts": ["Trip the generator breaker automatically", "Recover busbar voltage within a second or two", "Permanently reduce the rated voltage setpoint", "Disconnect the field winding until the motor reaches speed"],
    "exp": "A healthy AVR's job is to respond to the transient dip and restore rated busbar voltage quickly, within about a second or two. A slower or absent recovery points toward degrading AVR performance.",
    "cat": "DIMMING",
    "id": "F25_031"
  },
  {
    "q": "Besides the AVR, what else responds to the large step load from a motor start, and can also dip momentarily?",
    "a": "The governor, since a large step load asks it for a power step it takes time to answer, so frequency can dip too",
    "opts": ["The insulation resistance of the cables", "The governor, since a large step load asks it for a power step it takes time to answer, so frequency can dip too", "The earth fault relay setting", "The overload relay trip class"],
    "exp": "The AVR responds to voltage, but the prime mover's governor has to answer the sudden demand for more mechanical power, which can produce a brief frequency dip alongside the voltage dip.",
    "cat": "DIMMING",
    "id": "F25_032"
  },
  {
    "q": "Why do contactors elsewhere chatter or drop out when a large motor starts?",
    "a": "A contactor coil is held in by the voltage across it, and a deep busbar dip can genuinely drop lightly-margined coils via the same no-volt release mechanism, triggered by a transient",
    "opts": ["A contactor coil is held in by the voltage across it, and a deep busbar dip can genuinely drop lightly-margined coils via the same no-volt release mechanism, triggered by a transient", "Because the contactors are wired in series with the starting motor", "Because the earth fault indicator has activated", "Because the starting current trips their individual overload relays"],
    "exp": "This is not a coincidence: a contactor's holding coil needs enough voltage to stay energised, and a deep enough busbar dip can drop lightly-margined coils via the standard no-volt release mechanism, just triggered by a transient rather than a real supply failure.",
    "cat": "DIMMING",
    "id": "F25_033"
  },

  /* ═══════════ SCENARIO 6: HOT CABLE ═══════════ */
  {
    "q": "You find a noticeably hot cable on rounds. What is the correct very first action?",
    "a": "Reduce or remove the load, usually by isolating the circuit, before theorising with the fault still live",
    "opts": ["Begin comparing it against similar cables to confirm it's abnormal", "Reduce or remove the load, usually by isolating the circuit, before theorising with the fault still live", "Immediately open the terminal box to inspect for a loose connection", "Measure the load current against rated ampacity"],
    "exp": "A hot cable is a fire risk and a potential insulation failure in progress, so the safety action comes first. Diagnosis, comparison against other cables, and physical inspection all follow only once the circuit is safe.",
    "cat": "HOTCABLE",
    "id": "F25_034"
  },
  {
    "q": "Once the cable is made safe, how do you confirm the heat is genuinely abnormal rather than normal grouping warmth?",
    "a": "Compare against similar cables carrying similar loads, since derating tables already account for warmth from grouping in a tray",
    "opts": ["Compare against similar cables carrying similar loads, since derating tables already account for warmth from grouping in a tray", "Assume any warmth at all is abnormal and replace the cable", "Check only the cable's insulation resistance", "Wait 24 hours and see if it cools on its own"],
    "exp": "Normal warmth from grouping in a tray is already accounted for by derating tables, so comparison against similar cables under similar load is what tells you whether this is genuinely abnormal, not just expected warmth.",
    "cat": "HOTCABLE",
    "id": "F25_035"
  },
  {
    "q": "Given vibration over time on a ship, which cause of a hot cable is one of the most common in practice?",
    "a": "A loose or corroded termination creating a high resistance hot spot",
    "opts": ["Third harmonic currents in the neutral", "A loose or corroded termination creating a high resistance hot spot", "An undersized cable", "General overload of the circuit"],
    "exp": "Vibration over years of service loosens terminations, and a loose or corroded joint creates a localised high resistance point that generates concentrated I-squared-R heating, making it one of the most common real causes.",
    "cat": "HOTCABLE",
    "id": "F25_036"
  },
  {
    "q": "On a circuit feeding VFDs, what specific cause of unexpected heating should you consider, and where does it concentrate?",
    "a": "Third harmonic currents, which can add up in the neutral specifically",
    "opts": ["Third harmonic currents, which can add up in the neutral specifically", "Overload of the motor windings", "A loose gland at the VFD input", "Reduced insulation resistance from switching transients"],
    "exp": "VFDs are non-linear loads that generate harmonic currents. Third harmonics from multiple loads add up in the neutral conductor rather than cancelling, so a hot neutral on a VFD-fed circuit points specifically at this cause.",
    "cat": "HOTCABLE",
    "id": "F25_037"
  },
  {
    "q": "A hot spot is localised at a gland or joint rather than being even warmth along the whole run. What does this point to?",
    "a": "A loose connection rather than a general overload",
    "opts": ["A general overload of the circuit", "A loose connection rather than a general overload", "Harmonic distortion from a VFD", "An undersized cable for its full length"],
    "exp": "A general overload or undersized cable produces fairly even warmth along the whole run, since the same current flows throughout. Heat localised at one gland or joint instead points to a high resistance connection at that specific point.",
    "cat": "HOTCABLE",
    "id": "F25_038"
  },
  {
    "q": "Why is 'overload or loose connection' as an opening answer, without isolating first, marked down in this scenario?",
    "a": "Because it answers a theory question when the examiner asked a practical one, skipping the safety-first action a hot cable actually demands",
    "opts": ["Because it answers a theory question when the examiner asked a practical one, skipping the safety-first action a hot cable actually demands", "Because loose connections never cause heating in practice", "Because overload is never the cause of a hot cable", "Because isolating the circuit is optional if the cable is only warm"],
    "exp": "The examiner is testing whether you make the situation safe before analysing it. Launching straight into causes without mentioning isolating the circuit first skips the fire-risk safety action this scenario is specifically built around.",
    "cat": "HOTCABLE",
    "id": "F25_039"
  },

  /* ═══════════ SCENARIO 7: EARTH FAULT HUNTING ═══════════ */
  {
    "q": "The earth fault indicator shows a fault but nothing has tripped. Why not, on an insulated system?",
    "a": "No complete circuit exists back to source through a single fault alone, so no large current flows, by design so a single fault doesn't cause an automatic trip at sea",
    "opts": ["The protection relays are faulty", "No complete circuit exists back to source through a single fault alone, so no large current flows, by design so a single fault doesn't cause an automatic trip at sea", "The earth fault indicator itself is always wrong", "The breaker's trip unit has been disabled"],
    "exp": "Marine systems commonly use an insulated (high impedance or ungrounded) neutral specifically so a single earth fault doesn't force an automatic trip, since losing supply is more dangerous at sea than running with one fault present.",
    "cat": "EARTHFLT",
    "id": "F25_040"
  },
  {
    "q": "Why is an earth fault on an insulated system treated as urgent even though nothing has tripped and the ship keeps running?",
    "a": "Because a second, independent fault on a different phase while the first persists can complete a genuine fault path, behaving like a phase to phase short",
    "opts": ["Because the fault will clear itself if left long enough", "Because a second, independent fault on a different phase while the first persists can complete a genuine fault path, behaving like a phase to phase short", "Because the switchboard will shut down automatically within an hour", "Because it always indicates a total insulation failure across the whole system"],
    "exp": "One earth fault alone doesn't complete a path back to source, but a second fault on a different phase while the first remains present can, effectively creating a phase-to-phase fault. That risk is why hunting it down promptly matters.",
    "cat": "EARTHFLT",
    "id": "F25_041"
  },
  {
    "q": "What is the correct method for hunting an earth fault from the main switchboard outward?",
    "a": "Sectionalise systematically, opening feeder breakers one at a time and watching the earth fault indication after each",
    "opts": ["Open all feeder breakers simultaneously to isolate the fault quickly", "Sectionalise systematically, opening feeder breakers one at a time and watching the earth fault indication after each", "Megger every cable on the ship before touching any breaker", "Wait for the fault to trip a breaker on its own"],
    "exp": "Nothing points directly at the fault, so it has to be actively hunted. Opening feeder breakers one at a time and watching the indication after each narrows the fault section by section, rather than randomly or all at once.",
    "cat": "EARTHFLT",
    "id": "F25_042"
  },
  {
    "q": "While sectionalising, the earth fault indication clears after opening a particular feeder breaker. What does this tell you?",
    "a": "The fault is downstream of that breaker",
    "opts": ["The fault is upstream of that breaker", "The fault is downstream of that breaker", "The fault has been permanently resolved", "The indicator itself is faulty"],
    "exp": "If opening a breaker clears the indication, the fault lies in the section that was just disconnected, i.e. downstream of that breaker. If there's no change, that breaker is closed again and the next one is opened, narrowing the search.",
    "cat": "EARTHFLT",
    "id": "F25_043"
  },
  {
    "q": "Once the fault has been narrowed to a single circuit, how do you confirm it rather than relying on the switchboard indication alone?",
    "a": "Test that cable or item directly to earth with a megger",
    "opts": ["Test that cable or item directly to earth with a megger", "Re-close every breaker and see if the indicator returns", "Measure the busbar frequency", "Check the circuit's overload relay setting"],
    "exp": "The switchboard indication narrows the search but doesn't itself confirm the specific item. A direct megger test to earth on the isolated circuit confirms the fault firmly, in the same manner as Scenario 2.",
    "cat": "EARTHFLT",
    "id": "F25_044"
  },
  {
    "q": "What should you note before touching any breakers when an earth fault indicator first shows a fault?",
    "a": "Which phase the indicator shows",
    "opts": ["Which phase the indicator shows", "The current generator load in kW", "The ambient engine room temperature", "The time since the last insulation survey"],
    "exp": "Noting which phase is indicated before any switching begins is useful reference information, and matters for the safety reasoning around a possible second fault on a different phase.",
    "cat": "EARTHFLT",
    "id": "F25_045"
  },
  {
    "q": "Why does a marine electrical system commonly use an insulated (high impedance or ungrounded) neutral rather than a solidly earthed one?",
    "a": "So a single earth fault does not cause an automatic trip, since losing supply is more dangerous at sea than running with one fault present",
    "opts": ["So a single earth fault does not cause an automatic trip, since losing supply is more dangerous at sea than running with one fault present", "Because insulated neutrals are cheaper to install", "Because it eliminates the need for insulation testing entirely", "Because it allows higher fault currents to be safely carried"],
    "exp": "This is a deliberate design choice: keeping the vessel running through a single earth fault is safer than an automatic trip that could leave the ship without propulsion or essential power at sea, provided the fault is then actively hunted and cleared.",
    "cat": "EARTHFLT",
    "id": "F25_046"
  },

  /* ═══════════ SCENARIO 8: HOT BEARING ═══════════ */
  {
    "q": "A motor bearing is noticeably hotter than usual. What should you confirm before starting your diagnostic sequence?",
    "a": "That it's genuinely abnormal, by getting an actual temperature reading and comparing against normal running temperature and sister machines",
    "opts": ["That it's genuinely abnormal, by getting an actual temperature reading and comparing against normal running temperature and sister machines", "That the motor is drawing rated current", "That the coupling is correctly aligned", "That the lubrication schedule has been followed"],
    "exp": "Judging heat by hand alone is unreliable. Getting an actual temperature and comparing it to that machine's normal running temperature, and to sister machines, confirms whether there is really a problem before chasing causes.",
    "cat": "BEARING",
    "id": "F25_047"
  },
  {
    "q": "What is the most common and easiest cause of a hot bearing to check first?",
    "a": "Lubrication: whether grease or oil is reaching the bearing, whether it's the correct type, and whether it has been over- or under-greased",
    "opts": ["Electrical bearing currents from VFD switching", "Lubrication: whether grease or oil is reaching the bearing, whether it's the correct type, and whether it has been over- or under-greased", "Bearing wear from pitting or spalling", "Misalignment of the coupling"],
    "exp": "Lubrication and alignment explain the overwhelming majority of hot bearings and should be ruled out first. VFD bearing currents are far rarer and are the answer to 'what else could it be,' not the first thing to jump to.",
    "cat": "BEARING",
    "id": "F25_048"
  },
  {
    "q": "Why is over-greasing a bearing considered as damaging as under-greasing?",
    "a": "It causes churning heat",
    "opts": ["It causes churning heat", "It causes the bearing to run permanently dry", "It reduces the load rating of the bearing", "It has no real effect, only under-greasing is a problem"],
    "exp": "Excess grease causes the bearing elements to churn through it, generating heat directly, in the same way that insufficient lubrication causes heat from metal-to-metal friction. Both extremes need checking, not just a lack of grease.",
    "cat": "BEARING",
    "id": "F25_049"
  },
  {
    "q": "After ruling out lubrication, what should be checked next as a source of a hot bearing?",
    "a": "Misalignment and overload on the driven machine, which forces the bearing to carry loads it wasn't designed for",
    "opts": ["Misalignment and overload on the driven machine, which forces the bearing to carry loads it wasn't designed for", "Electrical bearing currents from VFD switching", "The insulation resistance of the motor windings", "The prime mover governor response"],
    "exp": "This follows the same reasoning as Scenario 1: a coupling out of alignment, or extra load on the driven machine, forces the bearing to carry loads it wasn't designed for and generates heat directly. VFD bearing currents are checked later, and only on VFD-driven motors.",
    "cat": "BEARING",
    "id": "F25_050"
  },
  {
    "q": "Noise, vibration, or roughness in a bearing, independent of lubrication or alignment, points to what?",
    "a": "A bearing nearing end of life, showing pitting or spalling",
    "opts": ["A bearing nearing end of life, showing pitting or spalling", "A lubrication problem that hasn't been fully addressed", "An earth fault in the winding", "A coupling that needs re-torquing"],
    "exp": "Once lubrication and alignment are ruled out, noise, vibration, or roughness that remains points to physical wear inside the bearing itself, such as pitting or spalling of the races, independent of those two earlier causes.",
    "cat": "BEARING",
    "id": "F25_051"
  },
  {
    "q": "On a VFD-driven motor specifically, what additional cause of bearing heating should be considered, and why is it different from a non-VFD motor?",
    "a": "Electrical bearing currents from high frequency IGBT switching, which induce shaft voltages that discharge through the bearing as small repeated arcing, a cause a non-VFD motor doesn't have",
    "opts": ["Electrical bearing currents from high frequency IGBT switching, which induce shaft voltages that discharge through the bearing as small repeated arcing, a cause a non-VFD motor doesn't have", "Overload from the driven machine, which only occurs on VFD-driven motors", "Lubrication breakdown, which only happens with VFD-driven motors", "Misalignment, which is unique to VFD installations"],
    "exp": "High frequency IGBT switching can induce shaft voltages that discharge through the bearing as small repeated arcing, causing fluting and pitting of the races over time. A non-VFD motor has no such switching, so this cause and its fix (insulated bearings or a shaft grounding brush) are specific to VFD-driven machines.",
    "cat": "BEARING",
    "id": "F25_052"
  },
  {
    "q": "What is the correct overall order of investigation for a hot bearing, from most to least likely?",
    "a": "Work outward from cheap and likely (lubrication, alignment) to expensive and rare (VFD bearing currents)",
    "opts": ["Work outward from cheap and likely (lubrication, alignment) to expensive and rare (VFD bearing currents)", "Always start with VFD bearing currents since they are the most serious", "Check bearing wear first, since it is the most common cause", "Check overload first, since it is identical to Scenario 1's overload check"],
    "exp": "Lubrication and alignment explain the overwhelming majority of real hot bearing cases and should be ruled out first, before moving to overload, then bearing wear, then finally VFD bearing currents on the rare motor where that even applies.",
    "cat": "BEARING",
    "id": "F25_053"
  },

  /* ═══════════ SCENARIO 9: LIVE BOARD WORK ═══════════ */
  {
    "q": "A senior officer under time pressure asks you to work on a live switchboard, saying it'll only take a minute. What is the correct response?",
    "a": "Refuse to work live where isolation is genuinely possible, since the overwhelming majority of shipboard electrical work can and should be done dead",
    "opts": ["Comply, since a senior officer's instruction overrides normal isolation procedure", "Refuse to work live where isolation is genuinely possible, since the overwhelming majority of shipboard electrical work can and should be done dead", "Work live but only touch one phase at a time", "Agree, provided insulated gloves are worn"],
    "exp": "'It's quicker live' does not survive contact with what an arc flash, arc blast or direct shock at hand-distance from busbars does to a person. Where isolation is genuinely possible, the correct answer is to refuse and insist on doing the work dead.",
    "cat": "LIVEWORK",
    "id": "F25_054"
  },
  {
    "q": "What must be completed first, before any isolation points are physically locked out?",
    "a": "A permit to work, formally identifying the job, equipment, hazards and isolation points",
    "opts": ["A permit to work, formally identifying the job, equipment, hazards and isolation points", "A verbal agreement with the senior officer only", "A test for dead on the switchboard", "PPE fitting for all personnel involved"],
    "exp": "The permit to work formally identifies the job, equipment, hazards, and isolation points per the vessel's safety management system, so everyone agrees exactly what is isolated and why, before any physical lockout begins.",
    "cat": "LIVEWORK",
    "id": "F25_055"
  },
  {
    "q": "Under lockout/tagout, why does each person working on the job apply their own personal lock?",
    "a": "So the circuit cannot be re-energised until everyone has personally removed their own lock",
    "opts": ["So the circuit cannot be re-energised until everyone has personally removed their own lock", "So the isolation can be tracked for insurance purposes only", "Because only one lock is legally required, but tradition adds more", "So each worker's identity is recorded for payroll"],
    "exp": "Each person applies their own personal lock, tagged with their name and job, so the circuit physically cannot be re-energised until every single person working on it has personally removed their own lock.",
    "cat": "LIVEWORK",
    "id": "F25_056"
  },
  {
    "q": "Is isolating a breaker the same as proving the circuit dead?",
    "a": "No, a wiring error or backfeed can only be ruled out by a direct test",
    "opts": ["Yes, an isolated breaker is always proven dead", "No, a wiring error or backfeed can only be ruled out by a direct test", "Yes, provided the breaker is padlocked", "No, proving dead is only required above 1000 V"],
    "exp": "Isolating a breaker is a necessary step but not sufficient on its own. A wiring error or an unexpected backfeed can only be ruled out by directly testing the circuit for dead before anyone touches it.",
    "cat": "LIVEWORK",
    "id": "F25_057"
  },
  {
    "q": "What is the correct sequence for proving a circuit dead with a test instrument?",
    "a": "Test the tester on a known live source, test the circuit and confirm zero, then re-test the tester afterward",
    "opts": ["Test the tester on a known live source, test the circuit and confirm zero, then re-test the tester afterward", "Test the circuit directly first, then check the tester afterward if the reading seems wrong", "Assume the tester works and test the circuit only once", "Test the tester only, since a working tester guarantees the circuit is dead"],
    "exp": "The tester itself must be proved working before and after testing the circuit: test on a known live source first, then test the circuit and confirm zero, then re-test the tester afterward to confirm it hasn't failed mid-test and given a false zero.",
    "cat": "LIVEWORK",
    "id": "F25_058"
  },
  {
    "q": "Why is refusing an instruction to bypass isolation, permit, or lockout/tagout not considered insubordination?",
    "a": "Because refusing unsafe work is the correct exercise of stop-work authority every crew member has under the ISM Code",
    "opts": ["Because refusing unsafe work is the correct exercise of stop-work authority every crew member has under the ISM Code", "Because senior officers cannot give direct instructions regarding electrical work", "Because the ETO outranks the senior officer on electrical matters", "Because insubordination only applies to non-safety instructions"],
    "exp": "Time pressure doesn't change what electricity does to a body. Refusing unsafe live work is the correct exercise of stop-work authority every crew member holds under the ISM Code, and a competent officer backs down once reminded of that.",
    "cat": "LIVEWORK",
    "id": "F25_059"
  },
  {
    "q": "Any instruction to bypass isolation, permit, or lockout/tagout should be handled how?",
    "a": "Raised immediately with the Chief Engineer and documented as a near-miss",
    "opts": ["Quietly ignored without further action", "Raised immediately with the Chief Engineer and documented as a near-miss", "Reported only if an injury actually occurs", "Handled informally between the ETO and the officer involved, with no log entry"],
    "exp": "Such an instruction is raised immediately with the Chief Engineer and documented, treated as a near-miss that the safety management system exists to capture, regardless of whether anything actually went wrong.",
    "cat": "LIVEWORK",
    "id": "F25_060"
  }

]);

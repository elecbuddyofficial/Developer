window.loadQuizzes("T06_Sensors", [
  {
    "q": "What does RTD stand for?",
    "a": "Resistance Temperature Detector",
    "opts": ["Resistance Temperature Detector", "Resistance Thermal Device", "Resonant Temperature Diode", "Reactive Thermal Detector"],
    "exp": "RTD = Resistance Temperature Detector. The electrical resistance of the metal element changes predictably with temperature. In marine applications PT100 (platinum, 100 ohm at 0 deg C) is the standard type.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What is the fundamental working principle of an RTD?",
    "a": "The resistance of a metal increases predictably with temperature (PTC)",
    "opts": ["The resistance of a metal increases predictably with temperature (PTC)", "It generates a millivolt signal proportional to temperature", "It expands physically to move a pointer", "It changes capacitance with temperature"],
    "exp": "RTD uses the Positive Temperature Coefficient (PTC) property of metals \u2014 resistance increases with temperature. For platinum: 100 ohm at 0 deg C, rising 0.385 ohm per deg C. This linear relationship makes RTDs highly accurate for process temperature measurement.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What does PT100 mean?",
    "a": "A platinum RTD that has a resistance of 100 ohms at 0\u00b0C",
    "opts": ["A platinum RTD that has a resistance of 100 ohms at 0\u00b0C", "A temperature sensor that maxes out at 100\u00b0C", "A pressure transmitter rated for 100 bar", "A platinum thermocouple with 100 microvolts output"],
    "exp": "PT100 = Platinum (Pt) RTD with 100 ohm resistance at 0 deg C. The 100 ohm reference makes calibration straightforward. Resistance at 100 deg C = 138.5 ohm, at 200 deg C = 175.8 ohm. Standard marine temperature sensor for bearings, coolers, and jacket water.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Why is platinum typically used for marine RTDs?",
    "a": "It is highly stable, linear, and corrosion resistant",
    "opts": ["It is highly stable, linear, and corrosion resistant", "It is the cheapest metal available", "It has a negative temperature coefficient", "It generates the highest voltage"],
    "exp": "Platinum is chosen for RTDs because: (1) Highly stable \u2014 resistance-temperature relationship doesn't drift over time. (2) Good linearity \u2014 0.385 ohm/deg C across wide range. (3) Corrosion resistant \u2014 survives marine environment. (4) Wide range: -200 deg C to +850 deg C. Other metals (nickel, copper) are less stable and less linear.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "In a PT100, what is the typical resistance change per degree Celsius?",
    "a": "0.385 ohms",
    "opts": ["0.385 ohms", "1 ohm", "10 ohms", "0.01 ohms"],
    "exp": "PT100 sensitivity = 0.385 ohm per deg C (Callendar-Van Dusen equation constant alpha = 0.00385). At 0 deg C: 100 ohm. At 100 deg C: 100 + (100 x 0.385) = 138.5 ohm. At 200 deg C: 175.8 ohm. This is why the instrument must be calibrated to this specific coefficient.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What would be the approximate resistance of a PT100 at 100\u00b0C?",
    "a": "138.5 ohms",
    "opts": ["138.5 ohms", "200 ohms", "100 ohms", "0 ohms"],
    "exp": "PT100 at 100 deg C = 100 + (100 x 0.385) = 138.5 ohm. Formula: R(T) = 100 x (1 + 0.00385 x T) for temperatures above 0 deg C. This value is used to verify calibration \u2014 an ohmmeter reading of 138.5 ohm confirms accurate measurement at boiling point.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Why is a 3-wire connection commonly used for RTDs on ships?",
    "a": "To compensate for the resistance of the long lead wires",
    "opts": ["To compensate for the resistance of the long lead wires", "To provide three separate temperature readings", "To supply 3-phase power to the sensor", "Because one wire is a spare"],
    "exp": "In a 2-wire RTD circuit, cable resistance (e.g., 50m of 0.5 mm cable = 1.7 ohm) adds directly to the measured resistance, causing falsely high temperature readings. A 3-wire connection feeds an identical resistance through the third wire, allowing the measurement bridge to subtract the lead resistance and read only the RTD resistance.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What happens if you use a 2-wire connection for a PT100 located 50 metres away?",
    "a": "The lead wire resistance adds to the sensor resistance, causing a falsely high temperature reading",
    "opts": ["The lead wire resistance adds to the sensor resistance, causing a falsely high temperature reading", "The signal will be too weak to reach the panel", "The RTD will act as a thermocouple", "Nothing, 2-wire is perfectly accurate"],
    "exp": "50m cable (copper, 0.5mm) has approximately 1.7 ohm resistance per wire. 2-wire circuit: instrument reads RTD + 2 x lead = ~138.5 + 3.4 = 141.9 ohm, equivalent to a 110 deg C reading when actual temperature is 100 deg C. Error increases further from the instrument.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What is the fundamental principle of a thermocouple?",
    "a": "Seebeck Effect: Two dissimilar metals joined at different temperatures generate a small EMF",
    "opts": ["Seebeck Effect: Two dissimilar metals joined at different temperatures generate a small EMF", "Resistance increases with temperature", "Capacitance changes with temperature", "Light emission changes with heat"],
    "exp": "Seebeck Effect (1821): When two dissimilar metals are joined at one end (hot junction) and the other ends are at a different temperature (cold junction), a small EMF (millivolts) is generated. The magnitude of the EMF is proportional to the temperature difference between the junctions.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What is the 'hot junction' in a thermocouple circuit?",
    "a": "The measuring end where the two dissimilar metals are joined",
    "opts": ["The measuring end where the two dissimilar metals are joined", "The terminal block in the control room", "The power supply connection", "The shielding wire"],
    "exp": "The hot junction (measuring junction) is where the two dissimilar metal wires are welded or crimped together and inserted into the process being measured (e.g., engine exhaust). The cold junction (reference junction) is at the instrument terminals where the temperature is known.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What does a thermocouple actually measure?",
    "a": "The temperature DIFFERENCE between the hot junction and the cold junction",
    "opts": ["The temperature DIFFERENCE between the hot junction and the cold junction", "Absolute temperature in Kelvin", "The resistance of the hot junction", "The ambient temperature of the room"],
    "exp": "A thermocouple measures the DIFFERENCE between hot junction temperature and cold junction temperature. It does NOT measure absolute temperature. Cold Junction Compensation (CJC) electronically adds the known cold junction temperature to obtain the true process temperature.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What is the typical output signal type of a thermocouple?",
    "a": "Millivolts (mV)",
    "opts": ["Millivolts (mV)", "4-20mA", "Ohms", "Volts (V)"],
    "exp": "Thermocouple output is millivolts (mV) \u2014 very small, typically 0-50mV depending on type and temperature range. Type K generates approximately 41 microvolts per deg C. This small signal requires amplification and is susceptible to EMI, unlike the robust 4-20mA signal of an RTD transmitter.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Which type of thermocouple is most commonly used for marine exhaust gas temperature measurement?",
    "a": "Type K (Chromel-Alumel)",
    "opts": ["Type K (Chromel-Alumel)", "Type T (Copper-Constantan)", "Type J (Iron-Constantan)", "PT100"],
    "exp": "Type K thermocouple (Chromel-Alumel): Range -200 to 1260 deg C, sensitivity ~41 microvolts/deg C. Used for marine exhaust gas because: high temperature range covers turbocharger temperatures, good oxidation resistance, cost-effective. Type J (Iron-Constantan) used for lower temperatures.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What is 'Cold Junction Compensation' (CJC)?",
    "a": "An electronic correction applied at the instrument terminals to compensate for ambient temperature variations",
    "opts": ["An electronic correction applied at the instrument terminals to compensate for ambient temperature variations", "Cooling the sensor with water", "A method to freeze the RTD", "Removing the cold junction completely"],
    "exp": "Cold Junction Compensation adds the cold junction temperature (measured at instrument terminals using a separate temperature sensor like a thermistor) to the thermocouple EMF reading. Without CJC, the instrument would read the temperature difference only, not the absolute hot junction temperature.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Why is CJC necessary?",
    "a": "Because the thermocouple only measures a temperature difference; the instrument needs to know the exact cold junction temperature to calculate the absolute hot junction temperature",
    "opts": ["Because the thermocouple only measures a temperature difference; the instrument needs to know the exact cold junction temperature to calculate the absolute hot junction temperature", "To prevent the wires from melting", "To boost the millivolt signal to 24V", "To convert AC to DC"],
    "exp": "A thermocouple outputs a voltage proportional to (T_hot - T_cold). If T_cold varies (as it does in an engine room from 20 deg C to 50 deg C), the same exhaust temperature gives different readings. CJC measures T_cold continuously and adds it to the calculated T_hot so the final reading is always accurate regardless of ambient temperature.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What happens if you connect a Type K thermocouple to an instrument using standard copper cable?",
    "a": "A new thermocouple junction is created at the connection, introducing a large measurement error",
    "opts": ["A new thermocouple junction is created at the connection, introducing a large measurement error", "It works perfectly fine", "The copper cable will melt", "The signal changes from mV to mA"],
    "exp": "A new thermocouple junction is created at the copper/Chromel connection point, generating its own parasitic EMF. This completely corrupts the measurement. Each connection between dissimilar metals creates a Seebeck voltage \u2014 standard copper cable must NEVER be used to extend thermocouple signals.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What type of cable must be used to extend a thermocouple signal to the control room?",
    "a": "Matching thermocouple extension or compensating cable (same alloy properties)",
    "opts": ["Matching thermocouple extension or compensating cable (same alloy properties)", "Standard copper electrical wire", "Fiber optic cable", "Coaxial cable"],
    "exp": "Thermocouple extension cable made from the same alloy materials as the thermocouple itself (Type K extension = Chromel-Alumel). This ensures no new junctions with different EMF characteristics are introduced. The cable has the same Seebeck coefficient as the sensor, maintaining signal integrity.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Comparing RTD and Thermocouple, which is generally more accurate and linear?",
    "a": "RTD",
    "opts": ["RTD", "Thermocouple", "They are exactly the same", "Neither is linear"],
    "exp": "RTD (PT100) is more accurate (\u00b10.1 deg C vs \u00b11-2 deg C for thermocouple) and more linear (stable 0.385 ohm/deg C coefficient). RTD is preferred for precision measurements like bearing temperatures and jacket cooling water. Thermocouple preferred for high temperatures (exhaust gases) where RTD cannot be used.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Comparing RTD and Thermocouple, which has a higher maximum temperature range?",
    "a": "Thermocouple (can measure up to 1600\u00b0C+)",
    "opts": ["Thermocouple (can measure up to 1600\u00b0C+)", "RTD", "Both max out at 500\u00b0C", "Both max out at 100\u00b0C"],
    "exp": "Thermocouple maximum temperature: Type K up to 1260 deg C, Type R/S up to 1600 deg C. PT100 RTD maximum is typically 600-850 deg C. Marine exhaust gas temperatures of 300-500 deg C can be measured by both, but turbocharger outlet temperatures >600 deg C require thermocouples.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Which sensor suffers from 'self-heating error'?",
    "a": "RTD, because measuring its resistance requires passing a small current through it, creating I2R heat",
    "opts": ["RTD, because measuring its resistance requires passing a small current through it, creating I2R heat", "Thermocouple, because it generates voltage", "Neither", "Both equally"],
    "exp": "RTD self-heating error: Measuring resistance requires passing a small current (typically 1-5 mA) through the element. Current through resistance = I\u00b2R power dissipation = heat. This raises the element temperature above true process temperature. Minimised by using low excitation current and high-conductivity mounting.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Which sensor is passive (generates its own signal without external power)?",
    "a": "Thermocouple",
    "opts": ["Thermocouple", "RTD", "Thermistor", "PT100"],
    "exp": "Thermocouple is passive \u2014 it generates its own millivolt EMF from the Seebeck Effect without requiring external power. RTD requires an external current source to measure resistance. This makes thermocouples useful in locations where power is not available or in intrinsically safe circuits.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Where would you typically use a PT100 on a ship?",
    "a": "Main engine bearing temperature monitoring",
    "opts": ["Main engine bearing temperature monitoring", "Boiler flue gas temperature (400\u00b0C+)", "Incinerator combustion chamber (1000\u00b0C+)", "Main engine exhaust gas (450\u00b0C+)"],
    "exp": "PT100 applications on ships: (1) Main/auxiliary engine bearing temperatures (30-120 deg C range). (2) Jacket cooling water temperature (60-90 deg C). (3) Lubricating oil temperature. (4) Transformer winding temperature. (5) Refrigeration system temperatures. All within PT100's optimal accuracy range.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Where would you typically use a Type K thermocouple on a ship?",
    "a": "Main engine exhaust gas monitoring",
    "opts": ["Main engine exhaust gas monitoring", "Cabin air conditioning temperature", "Cooling water temperature", "Lube oil sump temperature"],
    "exp": "Type K thermocouple applications: (1) Main engine exhaust gas temperature (250-450 deg C). (2) Turbocharger inlet/outlet temperature. (3) Exhaust gas boiler entry temperature. (4) Incinerator temperature monitoring. These all exceed the practical accuracy range of RTDs due to high temperatures.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What is a thermistor?",
    "a": "A semiconductor resistor whose resistance changes rapidly with temperature (usually NTC - Negative Temperature Coefficient)",
    "opts": ["A semiconductor resistor whose resistance changes rapidly with temperature (usually NTC - Negative Temperature Coefficient)", "A type of thermocouple", "A 4-20mA transmitter", "A mechanical bimetallic switch"],
    "exp": "Thermistor = Thermally Sensitive Resistor. Made from semiconductor metal oxides. Most are NTC (Negative Temperature Coefficient) \u2014 resistance DECREASES with temperature. Changes are large and non-linear (unlike linear RTD). Used in: lifeboat battery temperature, HVAC systems, over-temperature alarms. Not suitable for precision measurement without linearisation.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "If an RTD wire breaks (open circuit), what will the monitoring system usually read?",
    "a": "Maximum off-scale high (infinite resistance)",
    "opts": ["Maximum off-scale high (infinite resistance)", "Zero degrees", "Minimum off-scale low", "It will read correctly from the other wires"],
    "exp": "Open circuit RTD: The bridge/measuring circuit sees infinite resistance. The instrument interprets this as an extreme temperature reading \u2014 typically maximum scale or off-scale high (> upper alarm limit). This activates a temperature HIGH alarm, alerting operators to investigate the sensor or cable rather than assuming extreme process temperature.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "If a thermocouple wire breaks, what does the instrument detect?",
    "a": "An open circuit (0mV), but most instruments have burnout detection to drive the reading high or low to alarm",
    "opts": ["An open circuit (0mV), but most instruments have burnout detection to drive the reading high or low to alarm", "Maximum temperature", "Minimum temperature", "Infinite resistance"],
    "exp": "Broken thermocouple wire = 0 mV output. Most modern instruments have 'burnout' or 'upscale/downscale drive' \u2014 they detect the open circuit and drive the displayed value to maximum or minimum to create an alarm. Without this feature, a broken thermocouple would display 0 mV as ambient temperature = cold junction only.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Why are Type K thermocouples preferred for exhaust gas?",
    "a": "They have a wide temperature range and are highly resistant to oxidation at high temperatures",
    "opts": ["They have a wide temperature range and are highly resistant to oxidation at high temperatures", "They are the most accurate at 20\u00b0C", "They are made of copper", "They generate 4-20mA directly"],
    "exp": "Type K (Chromel-Alumel) advantages for exhaust gas: (1) Temperature range up to 1260 deg C covers all marine exhaust applications. (2) Excellent oxidation resistance at high temperatures in combustion gas atmospheres. (3) Good EMF linearity in the 200-700 deg C exhaust range. (4) Cost-effective and widely available.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What is the typical sensitivity of a Type K thermocouple?",
    "a": "Approx 41 microvolts per degree Celsius",
    "opts": ["Approx 41 microvolts per degree Celsius", "1 volt per degree", "0.385 ohms per degree", "4-20mA per degree"],
    "exp": "Type K thermocouple sensitivity = approximately 41 microvolts per deg C (at 500 deg C). At 300 deg C it generates ~12.2 mV, at 500 deg C ~20.6 mV. This small signal requires shielded cable and differential amplifiers to avoid EMI interference from engine room electrical equipment.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Can a PT100 be directly connected to a PLC analogue voltage input card?",
    "a": "No, it requires an RTD input card or a transmitter to convert the resistance to 4-20mA/0-10V",
    "opts": ["No, it requires an RTD input card or a transmitter to convert the resistance to 4-20mA/0-10V", "Yes, directly with 2 wires", "Yes, but only if it's 3-wire", "Yes, it generates voltage natively"],
    "exp": "No. A PT100 outputs resistance (100-250 ohm range), not voltage or current. A PLC analogue input card expects 4-20mA or 0-10V. You must use either: (1) An RTD input card (converts resistance directly), or (2) A 2-wire transmitter that powers the RTD and outputs 4-20mA proportional to temperature.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "If a surveyor asks 'Why use 3 wires for an RTD?', what is the best technical answer?",
    "a": "The third wire allows the bridge circuit to measure and subtract the lead wire resistance, preventing falsely high temperature readings",
    "opts": ["The third wire allows the bridge circuit to measure and subtract the lead wire resistance, preventing falsely high temperature readings", "To provide power, ground, and signal", "To have a backup wire in case one breaks", "To shield against electromagnetic interference"],
    "exp": "3-wire RTD compensates for lead wire resistance. A Wheatstone bridge configuration places one lead wire in each measurement arm and one in the reference arm. The bridge subtracts the equal lead resistance from both sides, cancelling its effect. Result: only the RTD element resistance is measured, regardless of cable length.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What is the industry standard analogue signal for transmitting instrument readings on ships?",
    "a": "4-20mA current loop",
    "opts": ["4-20mA current loop", "0-10V DC", "1-5V AC", "0-20mA"],
    "exp": "4-20 mA current loop is the international standard (IEC 60381-1). Range: 4 mA = 0% process value, 20 mA = 100% process value. Current signal used because: immune to voltage drops over long cable runs, intrinsically safe variants available, wire break detection via 0 mA fault indication.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "Why is a current signal (4-20mA) preferred over a voltage signal (0-10V) for long distances?",
    "a": "Current is immune to voltage drops caused by long cable resistance",
    "opts": ["Current is immune to voltage drops caused by long cable resistance", "Current travels faster than voltage", "Voltage signals cause fires", "Current uses thinner wires"],
    "exp": "In a voltage signal (0-10V), cable resistance causes voltage drop = V_received = V_transmitted - (I x R_cable), introducing measurement error. A current loop maintains the same current throughout the series circuit regardless of cable resistance (up to the power supply compliance limit). A 100m cable with 5 ohm resistance still transmits 12 mA accurately.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "How does a 4-20mA loop provide 'wire break' detection?",
    "a": "A broken wire results in 0mA, which is easily distinguished from a valid 4mA (0%) minimum reading",
    "opts": ["A broken wire results in 0mA, which is easily distinguished from a valid 4mA (0%) minimum reading", "The transmitter sends a digital error code", "The voltage spikes to 24V", "It sounds a physical buzzer in the transmitter"],
    "exp": "The live zero principle: 4 mA represents 0% (not 0 mA). If a wire breaks, current drops to 0 mA \u2014 which is physically impossible in a healthy loop. The control system can therefore distinguish: 4 mA = zero reading (valid), 0 mA = fault (wire break, transmitter failure, or power loss). This enables automatic fault alarming.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "Why is 4mA used as the 'live zero' instead of 0mA?",
    "a": "So the system can differentiate between a true 0% reading (4mA) and a broken wire/failed transmitter (0mA)",
    "opts": ["So the system can differentiate between a true 0% reading (4mA) and a broken wire/failed transmitter (0mA)", "4mA is the minimum current a wire can carry", "0mA causes the cable to corrode", "4mA is required to keep the sensor warm"],
    "exp": "If 0 mA represented zero process value, a broken wire would look identical to a zero reading \u2014 no fault detection possible. By using 4 mA as the minimum live signal, any current below 4 mA (including 0 mA from a broken wire) indicates a fault condition, not a valid measurement. NAMUR NE43 defines fault signals as <3.6 mA or >21 mA.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "In a 0-10 bar pressure transmitter, what pressure does 12mA represent?",
    "a": "5 bar",
    "opts": ["5 bar", "10 bar", "0 bar", "12 bar"],
    "exp": "Linear interpolation: 12 mA is halfway between 4 mA (0 bar) and 20 mA (10 bar). 12 - 4 = 8 mA above minimum, 20 - 4 = 16 mA total span. 8/16 = 50% of span = 5 bar. General formula: Value = LRV + (I - 4) / 16 x (URV - LRV).",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What does it mean if a pressure transmitter outputs 0mA?",
    "a": "There is a FAULT (wire break, loss of power, or transmitter failure)",
    "opts": ["There is a FAULT (wire break, loss of power, or transmitter failure)", "The pressure is exactly 0 bar", "The pressure is negative (vacuum)", "The transmitter is perfectly calibrated"],
    "exp": "0 mA means the loop is open (wire break, blown fuse, loss of 24V DC power supply) or the transmitter has failed. 0 mA is NEVER a valid measurement value \u2014 the minimum valid reading is 4 mA. The control system will alarm 'sensor fault' or 'loop open'. Must investigate cable continuity and transmitter power supply.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What does it mean if a transmitter outputs 20mA?",
    "a": "The measured value is at 100% of the configured range (full scale)",
    "opts": ["The measured value is at 100% of the configured range (full scale)", "There is a short circuit", "The pressure is 20 bar", "The sensor is overheating"],
    "exp": "20 mA = 100% of the configured range (URV = Upper Range Value). For a 0-10 bar transmitter, 20 mA = 10 bar. Note: 20 mA is also the normal maximum \u2014 it does NOT indicate a fault. Some transmitters use >20 mA (e.g., 20.5-21 mA) for upscale fault indication per NAMUR NE43.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What is a 'two-wire loop-powered' transmitter?",
    "a": "A transmitter that receives its 24V DC power AND transmits its 4-20mA signal over the same two wires",
    "opts": ["A transmitter that receives its 24V DC power AND transmits its 4-20mA signal over the same two wires", "A transmitter that uses two wires for signal and two for power", "A transmitter that requires a local battery", "A transmitter that only sends digital data"],
    "exp": "A 2-wire transmitter takes its operating power AND transmits its signal on the same pair of wires. The 24V DC power supply current enters the transmitter, the transmitter regulates the loop current to 4-20 mA proportional to the measurement, then returns to the supply. No separate power wiring needed. Most marine field instruments are 2-wire.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "Why are current loops highly immune to electromagnetic interference (EMI)?",
    "a": "Induced noise from EMI usually manifests as a small voltage, which does not significantly alter the regulated current in the loop",
    "opts": ["Induced noise from EMI usually manifests as a small voltage, which does not significantly alter the regulated current in the loop", "Current loops are shielded in lead pipes", "EMI only affects AC, not DC", "The 4mA zero blocks interference"],
    "exp": "EMI-induced voltage noise (typically 1-10 mV) across a 4-20 mA loop has negligible effect because the current is determined by the transmitter's precision voltage-to-current converter, not by the cable impedance. The same noise voltage across a 0-10V voltage signal creates significant percentage errors (1 mV noise = 0.01% of 10V = still tiny but cumulative).",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What does HART stand for?",
    "a": "Highway Addressable Remote Transducer",
    "opts": ["Highway Addressable Remote Transducer", "High Ampere Rating Transmitter", "Heavy Automation Remote Terminal", "Hardware Analogue Routing Table"],
    "exp": "HART = Highway Addressable Remote Transducer. Developed by Rosemount in 1980s, now open standard managed by FieldComm Group. Allows a digital communication channel to be superimposed onto the standard 4-20 mA analogue loop simultaneously, enabling remote configuration, diagnostics, and multiple variable access.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What is the primary function of the HART protocol?",
    "a": "To superimpose digital communication on top of a standard 4-20mA analogue signal",
    "opts": ["To superimpose digital communication on top of a standard 4-20mA analogue signal", "To replace 4-20mA entirely with digital", "To increase the current to 50mA", "To convert AC to DC"],
    "exp": "HART provides bidirectional digital communication on the existing 4-20 mA loop wire. Primary uses: (1) Remote zero/span calibration without physical access. (2) Reading secondary variables (e.g., temperature from a pressure transmitter). (3) Diagnostics and self-test. (4) Reading transmitter tag, serial number, and configuration. (5) Enabling Fieldbus migration.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "How does HART transmit digital data without affecting the 4-20mA analogue reading?",
    "a": "It uses Frequency Shift Keying (FSK) where the high frequency AC digital signal has an average value of zero",
    "opts": ["It uses Frequency Shift Keying (FSK) where the high frequency AC digital signal has an average value of zero", "It stops the 4-20mA signal for a microsecond", "It uses a completely separate third wire", "It increases the 4-20mA signal slightly"],
    "exp": "HART uses FSK (Frequency Shift Keying): digital 1 = 1200 Hz, digital 0 = 2200 Hz. These AC signals are superimposed on the DC 4-20 mA loop. Because the AC signal has an average value of exactly zero (positive and negative half-cycles cancel), the DC component (the 4-20 mA process signal) is unchanged. Both signals coexist simultaneously.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "In HART FSK, what frequencies are used to represent digital 1 and 0?",
    "a": "1200 Hz and 2200 Hz",
    "opts": ["1200 Hz and 2200 Hz", "50 Hz and 60 Hz", "10 kHz and 20 kHz", "1 MHz and 2 MHz"],
    "exp": "HART FSK frequencies: Logic 1 = 1200 Hz, Logic 0 = 2200 Hz. These frequencies were chosen because they are above the bandwidth of standard 4-20 mA analogue systems (DC to ~25 Hz), preventing interference. The AC nature of FSK ensures zero net DC effect on the loop current, protecting the analogue reading.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What is a strict physical requirement to communicate with a HART transmitter using a handheld communicator?",
    "a": "A minimum loop resistance, typically 250 ohms, must be present in the circuit",
    "opts": ["A minimum loop resistance, typically 250 ohms, must be present in the circuit", "The transmitter must be disconnected from the PLC", "The 4-20mA signal must be exactly 12mA", "The loop power must be 220V AC"],
    "exp": "A minimum of 250 ohms resistance must be present in the loop circuit. The HART communicator detects the 1200/2200 Hz FSK voltage developed across this resistance. Without sufficient resistance, the digital voltage signal is too small to detect. Most modern DCS input cards have 250 ohm input impedance built in.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "WHY is the 250 ohm resistor necessary for HART communication?",
    "a": "It converts the HART digital current pulses into a voltage signal (min 1V) large enough for the communicator to detect",
    "opts": ["It converts the HART digital current pulses into a voltage signal (min 1V) large enough for the communicator to detect", "It limits the current to protect the communicator", "It prevents the 4-20mA signal from reaching the PLC", "It filters out engine room noise"],
    "exp": "Ohm's Law: V = I x R. HART digital current pulses of ~0.5 mA across 250 ohm creates 0.125V (125 mV) signal amplitude \u2014 minimum for reliable detection. With only 50 ohm: V = 0.5 x 50 = 25 mV \u2014 too small to reliably distinguish from noise. The 250 ohm minimum ensures adequate signal-to-noise ratio.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What happens if you connect a HART communicator to a loop with only 50 ohms of total resistance?",
    "a": "Communication will fail because the digital voltage signal developed across the resistor is too small to read",
    "opts": ["Communication will fail because the digital voltage signal developed across the resistor is too small to read", "The communicator will burn out", "The transmitter will trip the generator", "It will work perfectly"],
    "exp": "The HART digital voltage signal developed = 0.5 mA x 50 ohm = 25 mV. The minimum required is typically 125 mV (1200 Hz signal). Communication will fail \u2014 the communicator cannot reliably decode the 1200/2200 Hz FSK at this amplitude. Solution: Insert a 250 ohm precision resistor in series with the loop.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What is a 'Smart' transmitter?",
    "a": "A microprocessor-based transmitter that offers digital communication, remote configuration, and self-diagnostics",
    "opts": ["A microprocessor-based transmitter that offers digital communication, remote configuration, and self-diagnostics", "A transmitter that runs on artificial intelligence", "A transmitter that requires no power", "Any transmitter with a digital display"],
    "exp": "Smart transmitters contain a microprocessor that: (1) Samples the sensor at high frequency. (2) Applies digital filtering and linearisation. (3) Performs self-diagnostics. (4) Communicates via HART, Foundation Fieldbus, or PROFIBUS. (5) Stores configuration data (tag, range, engineering units). (6) Outputs precise 4-20 mA after digital-to-analogue conversion.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "Which of the following can you do remotely using a HART communicator?",
    "a": "Adjust the Zero and Span (LRV/URV) without physical access to the transmitter",
    "opts": ["Adjust the Zero and Span (LRV/URV) without physical access to the transmitter", "Physically clean the sensor membrane", "Replace the internal battery", "Fix a broken impulse line"],
    "exp": "HART remote functions include: (1) Change LRV and URV (zero and span) without physical access. (2) Read the primary variable with 0.1% accuracy. (3) Read secondary variables (e.g., temperature, static pressure on DP transmitter). (4) Run self-test and read diagnostics. (5) Trim the analogue output. (6) Configure damping time constant.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What is 'Sensor Characterisation' or 'Linearisation' in a smart transmitter?",
    "a": "The internal microprocessor correcting non-linear sensor outputs (e.g., square root extraction for DP flow)",
    "opts": ["The internal microprocessor correcting non-linear sensor outputs (e.g., square root extraction for DP flow)", "Making the transmitter casing perfectly straight", "Converting AC to DC", "Filtering out water from the sensor"],
    "exp": "Real sensor outputs are often non-linear \u2014 e.g., DP flow measurement requires square root extraction (Q \u221d \u221aDP). A smart transmitter's microprocessor applies the mathematical linearisation formula digitally, outputting a 4-20 mA signal that is linear with the actual process variable (flow), not the raw sensor signal (differential pressure).",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "If a smart transmitter's internal electronics fail, what does it typically do?",
    "a": "Drives the current loop to a fail-safe value (e.g., <3.6mA or >21mA) to alert the control system of a fault",
    "opts": ["Drives the current loop to a fail-safe value (e.g., <3.6mA or >21mA) to alert the control system of a fault", "Outputs exactly 12mA", "Maintains the last known good value forever", "Starts communicating via WiFi"],
    "exp": "Per NAMUR NE43 standard: on internal failure, the transmitter drives the output to a defined fault state \u2014 either <3.6 mA (downscale/low alarm) or >21 mA (upscale/high alarm). The choice is configured by the engineer based on the safe failure direction for that process. Control system alarm responds: 'Instrument fault' rather than acting on a false process reading.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What does LRV and URV stand for in transmitter configuration?",
    "a": "Lower Range Value (4mA point) and Upper Range Value (20mA point)",
    "opts": ["Lower Range Value (4mA point) and Upper Range Value (20mA point)", "Local Reading Voltage and Universal Reading Voltage", "Linear Resistance Value and Uniform Resistance Value", "Low Rate Velocity and Upper Rate Velocity"],
    "exp": "LRV = Lower Range Value (4 mA point) \u2014 the process value that corresponds to 4 mA output, normally set to 0% of measurement range. URV = Upper Range Value (20 mA point) \u2014 the process value that corresponds to 20 mA, normally set to 100% of range. Example: LRV = 0 bar, URV = 10 bar. These are configured digitally via HART.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "If a surveyor asks 'Can I read a 4-20mA signal and talk via HART at the exact same time?', you answer:",
    "a": "Yes, they coexist simultaneously on the same two wires without interfering with each other",
    "opts": ["Yes, they coexist simultaneously on the same two wires without interfering with each other", "No, you must switch the transmitter to digital mode first", "No, HART interrupts the 4-20mA signal", "Only if you add a third wire"],
    "exp": "Yes \u2014 HART FSK and 4-20 mA analogue coexist on the same two wires simultaneously without interference. The AC HART signal (1200/2200 Hz) is filtered out by the analogue input circuitry; the DC 4-20 mA is filtered out by the HART modem. The control system reads precise process value while the engineer communicates with the transmitter.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "Where is the 250 ohm resistor usually located in a modern IAS/DCS?",
    "a": "It is often built into the analogue input card of the control system (input impedance)",
    "opts": ["It is often built into the analogue input card of the control system (input impedance)", "Inside the transmitter casing", "Inside the HART communicator", "At the main switchboard"],
    "exp": "Modern DCS/IAS analogue input cards have approximately 250 ohm input impedance built into the card. This serves as both the signal termination resistor and the HART communication resistor simultaneously. No external resistor needed when connected to a DCS. External 250 ohm resistors are only needed with older 4-wire input cards (0-10V type) or test bench setups.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "If you must connect a HART communicator across a transmitter on a test bench (no PLC connected), what must you wire in?",
    "a": "A 24V power supply and a 250 ohm resistor in series with the loop",
    "opts": ["A 24V power supply and a 250 ohm resistor in series with the loop", "Just a 24V power supply", "A 220V AC supply", "A completely shorted loop"],
    "exp": "Bench test setup: 24V DC power supply \u2192 250 ohm precision resistor \u2192 transmitter positive terminal \u2192 transmitter negative terminal \u2192 back to 24V negative. HART communicator clips across the 250 ohm resistor. The 250 ohm drops adequate voltage for HART communication and limits current to safe loop levels.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What is a 'Multivariable' HART transmitter?",
    "a": "A single transmitter that can measure and digitally report multiple variables (e.g., pressure AND temperature) over one pair of wires",
    "opts": ["A single transmitter that can measure and digitally report multiple variables (e.g., pressure AND temperature) over one pair of wires", "A transmitter with multiple outputs (4-20mA, 0-10V, 3-15psi)", "A transmitter that can run on any voltage", "A transmitter painted multiple colors"],
    "exp": "A multivariable transmitter measures two or more physical parameters and can report all of them via HART digital communication. Example: Rosemount 3051S DP transmitter measures differential pressure, static pressure, AND temperature internally \u2014 reporting all three via HART. Only the primary variable (usually DP) is output as 4-20 mA; the rest are HART digital variables.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What does 'Tag Number' mean in HART terminology?",
    "a": "A digital identifier stored in the transmitter's memory (e.g., 'PT-105') for easy identification",
    "opts": ["A digital identifier stored in the transmitter's memory (e.g., 'PT-105') for easy identification", "The physical price tag", "The MAC address of the device", "The barcode on the box"],
    "exp": "Tag Number is an 8-character alphanumeric identifier stored in the transmitter's non-volatile memory (e.g., 'PT-105-A'). It identifies the specific instrument in the loop drawing and P&ID. HART allows reading and writing the tag remotely. Important for maintenance: can identify which transmitter is which without physical labels by reading the tag digitally.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "How do you convert a 4-20mA signal to a 1-5V voltage signal for a PLC input?",
    "a": "Pass the 4-20mA current through a precise 250 ohm precision resistor (V = I x R)",
    "opts": ["Pass the 4-20mA current through a precise 250 ohm precision resistor (V = I x R)", "Use a step-down transformer", "Connect a 24V battery in reverse", "It cannot be done"],
    "exp": "Connect a precision 250 ohm resistor across the PLC input terminals. Apply Ohm's Law: V = I x R. At 4 mA: V = 0.004 x 250 = 1.0V. At 20 mA: V = 0.020 x 250 = 5.0V. This produces a 1-5V signal proportional to the 4-20 mA loop. The 250 ohm resistor must be precision (0.1% tolerance) to maintain accuracy.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What is the typical power supply voltage for a standard marine 4-20mA instrument loop?",
    "a": "24V DC",
    "opts": ["24V DC", "220V AC", "110V AC", "12V AC"],
    "exp": "24V DC is the standard instrument loop supply voltage (IEC 60381). Minimum supply voltage = V_supply - (I x R_total) must exceed transmitter minimum operating voltage (typically 10-12V). For a 20 mA loop with 600 ohm total (250 ohm load + 350 ohm cable): V_drop = 0.020 x 600 = 12V. Supply of 24V leaves 12V for the transmitter \u2014 adequate.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "If a 0-100 deg C temperature transmitter is outputting 8mA, what is the temperature?",
    "a": "25 deg C (25% of range)",
    "opts": ["25 deg C (25% of range)", "8 deg C", "50 deg C", "0 deg C"],
    "exp": "Formula: T = LRV + (I - 4) / 16 x (URV - LRV). T = 0 + (8 - 4) / 16 x 100 = 4/16 x 100 = 0.25 x 100 = 25 deg C. The 4-20 mA span (16 mA) represents 100 deg C span. 8 mA is 4 mA above minimum = 25% of span = 25 deg C.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "Why don't we use 0-20mA instead of 4-20mA?",
    "a": "0-20mA cannot distinguish between a true zero reading and a broken wire/power failure",
    "opts": ["0-20mA cannot distinguish between a true zero reading and a broken wire/power failure", "0-20mA is too difficult to generate", "0mA causes the sensor to freeze", "0mA violates Ohms Law"],
    "exp": "0-20 mA cannot distinguish between a zero reading (valid, 0 mA output by design) and a circuit fault (broken wire gives 0 mA). The 4 mA live zero creates a fault detection window: any current below 4 mA indicates a problem. This is a fundamental safety requirement for process instrumentation in marine and industrial applications.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What is a SIPART PS2?",
    "a": "A smart electropneumatic valve positioner manufactured by Siemens",
    "opts": ["A smart electropneumatic valve positioner manufactured by Siemens", "A type of 4-20mA pressure transmitter", "A marine diesel engine governor", "A main switchboard circuit breaker"],
    "exp": "SIPART PS2 is a Siemens smart electropneumatic valve positioner. It receives a 4-20 mA setpoint signal, measures actual valve position via a stem-mounted feedback sensor, and adjusts pneumatic air pressure to drive the valve to the exact commanded position. It performs automatic self-calibration and is HART-enabled for remote configuration.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What is the primary function of a valve positioner like the SIPART PS2?",
    "a": "To precisely control the position of a pneumatic valve to match the 4-20mA setpoint from a controller",
    "opts": ["To precisely control the position of a pneumatic valve to match the 4-20mA setpoint from a controller", "To open and close the valve manually", "To measure the flow rate of the fluid", "To generate instrument air"],
    "exp": "The positioner overcomes valve friction, hysteresis, and actuator non-linearity that prevent a simple 4-20 mA signal from accurately controlling valve position. Without a positioner, a valve instructed to go to 50% may sit at 45% due to stiction. The positioner continuously compares setpoint vs actual position and corrects until they match.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "How does the SIPART PS2 overcome valve friction and hysteresis?",
    "a": "By continuously comparing actual stem position (feedback) with the setpoint, and adjusting air pressure until they match exactly",
    "opts": ["By continuously comparing actual stem position (feedback) with the setpoint, and adjusting air pressure until they match exactly", "By spraying lubricant on the valve stem", "By heating the pneumatic air", "By sending a fault alarm to the ECR"],
    "exp": "Closed-loop position control: actual valve stem position is measured by an internal potentiometer/position sensor. This is compared to the 4-20 mA setpoint. Any deviation (error) causes the positioner to increase or decrease pneumatic pressure to the actuator until the error is zero. From Run 5 calibration, it knows the exact friction and applies precise pneumatic pulses.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What triggers the automatic calibration sequence in a SIPART PS2?",
    "a": "Entering the configuration menu and selecting 'RUN 1' to start the initialisation",
    "opts": ["Entering the configuration menu and selecting 'RUN 1' to start the initialisation", "Rebooting the main IAS computer", "Turning the air supply off and on", "Disconnecting the 4-20mA cable"],
    "exp": "Entering the SIPART configuration menu and selecting RUN 1 starts the automatic initialisation sequence. The 4-20 mA supply must be connected, instrument air must be at correct pressure (4-7 bar), and the valve must be free to travel through its full mechanical stroke without obstruction. RUN 1 through RUN 5 then execute automatically in sequence.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "Before starting SIPART calibration, what prerequisites must be met?",
    "a": "Instrument air connected, 4-20mA supply present, and valve free to move without mechanical obstruction",
    "opts": ["Instrument air connected, 4-20mA supply present, and valve free to move without mechanical obstruction", "Valve must be fully open", "Main engine must be running", "Valve must be removed from the pipe"],
    "exp": "SIPART calibration prerequisites: (1) Instrument air connected at 4-7 bar, clean and dry. (2) 24V DC / 4-20 mA loop supply present. (3) Valve mechanically free to travel full stroke \u2014 no manual locking pins, no jammed actuator. (4) Physical linkage between positioner and valve stem correctly installed and secured. (5) No downstream process pressure that would prevent valve movement.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What happens during RUN 1 of the SIPART calibration?",
    "a": "The positioner prepares for initialisation and begins the automatic sequence",
    "opts": ["The positioner prepares for initialisation and begins the automatic sequence", "It measures the travel time", "It finds the closed position", "It measures friction"],
    "exp": "RUN 1: Initialisation check phase. The SIPART confirms: 4-20 mA signal present, instrument air pressure adequate, internal electronics functional. It prepares the control algorithm and clears previous calibration data. Displays 'RUN 1' and then automatically advances to RUN 2. Duration: a few seconds.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What happens during RUN 2 of the SIPART calibration?",
    "a": "The positioner slowly drives the valve to the mechanical CLOSED stop and records this as the 0% (4mA) position",
    "opts": ["The positioner slowly drives the valve to the mechanical CLOSED stop and records this as the 0% (4mA) position", "It opens the valve fully", "It tests the air pressure", "It records the friction"],
    "exp": "RUN 2: Finding the CLOSED stop. The positioner slowly exhausts air from the actuator (or applies air, depending on fail action), driving the valve to its mechanical closed limit stop. When no further movement is detected, the current stem position is recorded as 0% (4 mA reference). This establishes the physical zero of the stroke.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What happens during RUN 3 of the SIPART calibration?",
    "a": "The positioner drives the valve to the mechanical OPEN stop and records this as the 100% (20mA) position",
    "opts": ["The positioner drives the valve to the mechanical OPEN stop and records this as the 100% (20mA) position", "It closes the valve tightly", "It checks for air leaks", "It tests the 4-20mA loop"],
    "exp": "RUN 3: Finding the OPEN stop. The positioner applies full instrument air to drive the valve to its mechanical fully-open limit stop. When no further movement is detected, this position is recorded as 100% (20 mA reference). RUN 2 and RUN 3 together establish the mechanical stroke range of the specific valve-actuator assembly.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What happens during RUN 4 of the SIPART calibration?",
    "a": "It measures the exact travel time required to move from fully closed to fully open and vice versa",
    "opts": ["It measures the exact travel time required to move from fully closed to fully open and vice versa", "It determines the friction", "It finds the open stop", "It calibrates the HART protocol"],
    "exp": "RUN 4: Measuring travel time. The positioner drives the valve from fully closed to fully open and times the stroke, then from fully open to fully closed. These travel times are stored and used by the internal PID controller to set appropriate control gain and response speed. A slow actuator gets different control parameters than a fast one.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "Why does the SIPART measure travel time in RUN 4?",
    "a": "To optimise the internal control algorithm (PID) for the specific speed capability of that actuator",
    "opts": ["To optimise the internal control algorithm (PID) for the specific speed capability of that actuator", "To calculate how much air is being wasted", "To check if the operator is watching", "To set the alarm delay"],
    "exp": "Travel time determines how aggressively to control the valve. A fast actuator (0.5 second stroke) needs gentler PID gains to avoid oscillation; a slow actuator (10 second stroke) needs higher gains for responsive control. Without this data, the positioner would either be sluggish (slow actuator) or hunting (fast actuator).",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What happens during RUN 5 of the SIPART calibration?",
    "a": "It applies small incremental step changes to determine the friction and hysteresis characteristics of the valve",
    "opts": ["It applies small incremental step changes to determine the friction and hysteresis characteristics of the valve", "It finds the closed stop", "It measures the travel time", "It purges the air lines"],
    "exp": "RUN 5: Friction and hysteresis characterisation. The positioner applies a series of small incremental setpoint step changes and measures the exact response. It determines: (1) Deadband \u2014 how large a step is needed to initiate movement. (2) Stiction force \u2014 how much air pressure to apply to break static friction. (3) Hysteresis \u2014 difference between upward and downward response.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "Why does the SIPART need to know the friction characteristics (RUN 5)?",
    "a": "To apply predictive control and small 'kicks' of air to overcome static friction (stiction) without overshooting",
    "opts": ["To apply predictive control and small 'kicks' of air to overcome static friction (stiction) without overshooting", "To warn the user to add grease", "To calculate the remaining lifespan of the valve", "To reduce the air pressure to zero"],
    "exp": "Valve stiction (static friction) causes a valve to stick at its current position until sufficient force builds up, then jump past the setpoint ('stick-slip'). RUN 5 quantifies this. The positioner then applies the minimum pneumatic impulse to nudge the valve without overshooting \u2014 essential for tight process control and preventing valve wear.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What message indicates the SIPART calibration sequence is successfully completed?",
    "a": "FINISH or END",
    "opts": ["FINISH or END", "RUN 6", "ERROR", "OK"],
    "exp": "After RUN 5 completes successfully, the SIPART display shows 'FINISH' or 'END'. It then switches to normal operational mode. The calibration data is stored in non-volatile memory and remains valid until physical changes to the valve or actuator require recalibration. A FINISH confirmation means all 5 runs completed without errors.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "After a successful calibration, what does the SIPART PS2 know about the valve?",
    "a": "Exact physical limits (open/close), response speed, and mechanical friction profile",
    "opts": ["Exact physical limits (open/close), response speed, and mechanical friction profile", "The temperature of the fluid", "The pressure in the pipe", "The flow rate of the fluid"],
    "exp": "Post-calibration, the SIPART stores: (1) Physical closed and open limit positions (stroke limits). (2) Total stroke travel time in both directions. (3) Stiction force and deadband specific to this valve assembly. (4) Hysteresis between opening and closing response. This complete mechanical profile enables precise position control without overshoot.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "When is it absolutely necessary to perform the RUN 1-5 recalibration?",
    "a": "After replacing the valve packing, actuator diaphragm, or any mechanical linkage component",
    "opts": ["After replacing the valve packing, actuator diaphragm, or any mechanical linkage component", "Every single day", "When the 4-20mA setpoint changes", "When the ship changes timezones"],
    "exp": "Mandatory recalibration required after: (1) Replacing or tightening valve packing (changes friction). (2) Replacing actuator diaphragm or springs (changes force profile). (3) Adjusting the mechanical feedback linkage. (4) Replacing the valve plug or trim (changes travel). (5) Moving the positioner to a different valve. Minor adjustments (zero/span only) do not require full recalibration.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "Why must you recalibrate after tightening a leaking valve packing?",
    "a": "Tightening the packing significantly changes the stem friction, which invalidates the data from the previous RUN 5",
    "opts": ["Tightening the packing significantly changes the stem friction, which invalidates the data from the previous RUN 5", "It changes the 4-20mA signal", "It reverses the valve direction", "It drops the air pressure"],
    "exp": "Valve packing tightening directly increases stem friction \u2014 often doubling or tripling the original friction value. The SIPART's RUN 5 stiction data becomes invalid. If not recalibrated, the positioner will apply insufficient impulse to overcome the new friction, causing the valve to sit offset from setpoint. Recalibration records the new friction profile.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "If a SIPART PS2 is hunting (oscillating continuously around the setpoint), what is a likely cause?",
    "a": "Valve friction has changed significantly since last calibration, or linkage is loose (stiction/hysteresis mismatch)",
    "opts": ["Valve friction has changed significantly since last calibration, or linkage is loose (stiction/hysteresis mismatch)", "The 4-20mA signal is too high", "The valve is fully open", "The fluid is too hot"],
    "exp": "Continuous hunting causes: (1) Valve friction has changed significantly since last calibration (worn packing, seized actuator). (2) Feedback linkage is loose \u2014 giving false position signal. (3) Instrument air pressure fluctuating. (4) Control parameters (from RUN 4) no longer match the actuator response. Solution: Re-run full RUN 1-5 calibration sequence.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What is the input signal to the SIPART PS2?",
    "a": "4-20mA DC (representing desired valve position, 0-100%)",
    "opts": ["4-20mA DC (representing desired valve position, 0-100%)", "0-10 Bar air pressure", "110V AC", "0-5V DC"],
    "exp": "4-20 mA DC setpoint signal from the process controller (PID output). 4 mA = 0% (valve closed), 20 mA = 100% (valve fully open). The positioner also supports HART superimposed on this signal for digital communication. Some models accept PROFIBUS PA or Foundation Fieldbus as an alternative to 4-20 mA.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What is the output from the SIPART PS2 to the valve?",
    "a": "Variable pneumatic air pressure directed to the actuator diaphragm/cylinder",
    "opts": ["Variable pneumatic air pressure directed to the actuator diaphragm/cylinder", "4-20mA DC", "Hydraulic fluid", "24V DC"],
    "exp": "Variable pneumatic air pressure (from the instrument air supply at 4-7 bar) directed to the valve actuator. The positioner uses electropneumatic transducers (I/P converters) to convert the electrical position error into proportional air pressure. Acting-type determines whether more air opens or closes the valve (air-to-open or air-to-close).",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What is 'Position Feedback' on the SIPART PS2?",
    "a": "A mechanical linkage connecting the valve stem to a potentiometer/sensor inside the positioner",
    "opts": ["A mechanical linkage connecting the valve stem to a potentiometer/sensor inside the positioner", "A wireless signal to the ECR", "A pressure gauge on the air line", "A flow meter in the pipe"],
    "exp": "A mechanical linkage (lever arm or rotary coupling) connects the valve stem to an internal potentiometer or Hall Effect position sensor in the SIPART. As the valve moves, the sensor resistance/voltage changes proportionally. This feedback signal is compared to the 4-20 mA setpoint in a continuous closed-loop to achieve precise positioning.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "Can the SIPART PS2 communicate via HART?",
    "a": "Yes, most models are HART-enabled for remote configuration and diagnostics",
    "opts": ["Yes, most models are HART-enabled for remote configuration and diagnostics", "No, it is purely analogue", "Yes, but only via Modbus", "Yes, but only via WiFi"],
    "exp": "Yes. SIPART PS2 supports HART (FSK, 1200/2200 Hz) superimposed on the 4-20 mA signal, requiring 250 ohm minimum loop resistance. Via HART: configure LRV/URV, read actual valve position, run diagnostics, read fault codes, view calibration data, perform partial stroke testing. More advanced models also support PROFIBUS PA or Foundation Fieldbus.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What happens if you run the SIPART calibration while the valve is mechanically jammed?",
    "a": "The positioner will misinterpret the jammed position as the end stop, resulting in a severely restricted stroke and likely an initialization error",
    "opts": ["The positioner will misinterpret the jammed position as the end stop, resulting in a severely restricted stroke and likely an initialization error", "The valve will break the pipe", "The positioner will increase pressure until it unjams", "Nothing, it skips the jammed part"],
    "exp": "If valve is jammed during RUN 2 or RUN 3, the positioner misidentifies the jammed position as the mechanical limit stop. Result: severely restricted stroke (e.g., it thinks 15% is fully closed). Valve control will be wrong across its entire range. Additionally, the SIPART may display an error code (e.g., 'E2' position error) indicating stroke travel was too small.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "If a surveyor asks 'What exactly is the SIPART learning in Run 2 and 3?', you say:",
    "a": "It is mapping the 4mA electrical command to the physical lower mechanical stop, and 20mA to the upper mechanical stop",
    "opts": ["It is mapping the 4mA electrical command to the physical lower mechanical stop, and 20mA to the upper mechanical stop", "It is learning the fluid pressure", "It is checking the air supply pressure", "It is learning the HART address"],
    "exp": "RUN 2 learns the physical CLOSED limit \u2014 maps 4 mA command to the actual stem position at the closed mechanical stop. RUN 3 learns the physical OPEN limit \u2014 maps 20 mA command to the actual stem position at the open mechanical stop. Together they define the 0-100% stroke and ensure the valve uses its full mechanical travel, regardless of how the actuator or linkage is set.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What is 'Valve Stiction'?",
    "a": "Static friction; the tendency of a valve to stick in place until enough force builds up, causing it to suddenly jump past the setpoint",
    "opts": ["Static friction; the tendency of a valve to stick in place until enough force builds up, causing it to suddenly jump past the setpoint", "The glue used to hold the valve together", "A type of pneumatic air leak", "The magnetic pull of the positioner"],
    "exp": "Stiction = Static Friction. A valve stem at rest has higher friction (static) than a moving stem (dynamic). When the controller commands a small position change, the valve stays fixed until enough force builds up to overcome stiction, then suddenly jerks past the setpoint. This causes poor control, especially around the setpoint where small corrections are needed.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "How does a smart positioner like SIPART handle severe valve stiction?",
    "a": "It uses the friction profile from Run 5 to apply precise pneumatic pulses to 'nudge' the valve to the exact position without overshooting",
    "opts": ["It uses the friction profile from Run 5 to apply precise pneumatic pulses to 'nudge' the valve to the exact position without overshooting", "It shuts down and triggers an alarm", "It applies full 10 bar pressure immediately", "It tells the PLC to change the setpoint"],
    "exp": "The SIPART uses RUN 5 stiction characterisation to know the exact force needed to overcome static friction. When a setpoint change is commanded, instead of gradually increasing pressure (which causes stiction and overshoot), it applies a precisely calculated initial impulse to immediately break the static friction, then reduces to dynamic control pressure. This gives smooth, accurate positioning.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "Is a SIPART PS2 considered a 'Smart' instrument?",
    "a": "Yes, because it contains a microprocessor, performs automatic self-calibration, and supports digital communication",
    "opts": ["Yes, because it contains a microprocessor, performs automatic self-calibration, and supports digital communication", "No, it is a purely mechanical device", "No, because it uses pneumatic air", "Only if it is painted blue"],
    "exp": "Yes. Smart criteria met: (1) Contains microprocessor for digital signal processing. (2) Performs automatic self-calibration (RUN 1-5). (3) Stores calibration data in non-volatile memory. (4) HART digital communication capability. (5) Self-diagnostics with error codes. (6) Remote configuration possible. (7) Can perform partial stroke test (PST) for safety valve verification.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What is the typical instrument air supply pressure required for a pneumatic control valve?",
    "a": "4 to 7 bar (filtered and dried)",
    "opts": ["4 to 7 bar (filtered and dried)", "100 bar", "0.5 bar", "30 bar"],
    "exp": "Instrument air supply = 4-7 bar (typically 6 bar nominal). Must be: clean (filtered to 25 micron), dry (dewpoint below -20 deg C), oil-free. SIPART PS2 input port marked 'Z' or 'Supply'. If pressure falls below 3.5 bar, valve typically fails to its spring-return safe position. Air quality is critical \u2014 moisture blocks pneumatic pilots within the positioner.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "Why must the instrument air be clean, dry, and oil-free?",
    "a": "Moisture, oil, or dirt will quickly block the tiny internal pilot valves and nozzles inside the positioner",
    "opts": ["Moisture, oil, or dirt will quickly block the tiny internal pilot valves and nozzles inside the positioner", "To prevent the valve stem from rusting", "To keep the 4-20mA signal clean", "To prevent explosions"],
    "exp": "SIPART internal pilot valves have orifices as small as 0.5mm. Oil or moisture causes: (1) Freezing in cold conditions blocking air paths. (2) Oil coagulation blocking orifices. (3) Rust in the positioner body. (4) Valve seat damage. Any contamination causes sluggish response, hunting, or complete failure. Instrument air dryers and filter-regulators are mandatory upstream.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What does the 'split range' function in a positioner allow?",
    "a": "One 4-20mA signal from a controller to sequence two separate valves (e.g., Valve A works 4-12mA, Valve B works 12-20mA)",
    "opts": ["One 4-20mA signal from a controller to sequence two separate valves (e.g., Valve A works 4-12mA, Valve B works 12-20mA)", "It splits the air pressure in half", "It splits the pipe into two flows", "It allows the valve to break in half safely"],
    "exp": "Split range: one 4-20 mA controller output controls two valves in sequence. Example: Valve A (cooling water in) operates on 4-12 mA (0-100%), Valve B (heating steam) operates on 12-20 mA (0-100%). This allows a single PID controller to provide both heating and cooling using the same output signal. Configured in the SIPART by setting LRV and URV accordingly.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "During calibration, if the SIPART displays an error code, what should the engineer do?",
    "a": "Consult the manual for the specific code (e.g., air leak, travel too small, linkage disconnected) and rectify the physical issue before retrying",
    "opts": ["Consult the manual for the specific code (e.g., air leak, travel too small, linkage disconnected) and rectify the physical issue before retrying", "Ignore it and force the valve open", "Hit the positioner with a hammer", "Increase the 4-20mA signal to maximum"],
    "exp": "Check the SIPART manual for the specific error code. Common codes: E1 (air leak \u2014 check connections), E2 (travel too small \u2014 check for mechanical obstruction or incorrect linkage), E3 (no travel detected \u2014 confirm instrument air connected, actuator not jammed). Rectify the physical issue first, then restart the calibration sequence from RUN 1.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What does a DP transmitter measure?",
    "a": "The difference between two pressure points (High Side and Low Side)",
    "opts": ["The difference between two pressure points (High Side and Low Side)", "Absolute pressure", "Temperature of the fluid", "Velocity of the ship"],
    "exp": "DP (Differential Pressure) transmitter measures the pressure difference between two points: High Side (HP) and Low Side (LP). Output = P_HP - P_LP as a 4-20 mA signal. Used for: flow measurement (orifice plate), level measurement (tank bottom vs atmospheric), filter differential pressure, pump head measurement.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "How is a DP transmitter used to measure fluid flow in a pipe?",
    "a": "An orifice plate creates a pressure drop; the DP across the plate is proportional to flow squared",
    "opts": ["An orifice plate creates a pressure drop; the DP across the plate is proportional to flow squared", "It measures the speed of the fluid directly", "It counts the bubbles in the pipe", "It measures the temperature change across the pipe"],
    "exp": "An orifice plate (restriction) is installed in the pipe. Bernoulli's principle: flow accelerates through the restriction, pressure drops. DP transmitter measures pressure difference: High Side upstream, Low Side downstream. Greater flow = greater pressure drop. The DP is proportional to flow squared (Q \u221d \u221aDP).",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "In flow measurement using an orifice plate, what is the relationship between flow rate (Q) and Differential Pressure (DP)?",
    "a": "Flow rate Q is proportional to the square root of DP",
    "opts": ["Flow rate Q is proportional to the square root of DP", "Flow rate Q is directly proportional to DP", "Flow rate Q is inversely proportional to DP", "Flow rate Q is equal to DP squared"],
    "exp": "Flow Rate Q = K \u00d7 \u221aDP, where K is the orifice coefficient. Doubling the flow rate quadruples the DP. Example: if Q = 100 m\u00b3/h gives DP = 100 mbar, then Q = 200 m\u00b3/h gives DP = 400 mbar. This non-linear relationship requires square root extraction for linear flow indication.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What mathematical operation must be performed on a DP transmitter's output to get a linear flow reading?",
    "a": "Square root extraction",
    "opts": ["Square root extraction", "Multiplication by pi", "Logarithmic scaling", "Differentiation"],
    "exp": "Square root extraction: Linear Flow = K \u00d7 \u221a(DP_transmitter_output). Without this, the flow indicator would be compressed at low flows and expanded at high flows. Smart DP transmitters can perform this internally (configure 'Output = \u221aDP'). Traditional systems used dedicated square root extractors or programmed it in the DCS.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "Where is the High Pressure (HP) side connected when measuring flow with an orifice plate?",
    "a": "Upstream of the orifice plate",
    "opts": ["Upstream of the orifice plate", "Downstream of the orifice plate", "To the atmosphere", "To the pump suction"],
    "exp": "HP (High Pressure) side = upstream of the orifice plate, before the restriction. This is where fluid velocity is lower and pressure is higher (Bernoulli). LP (Low Pressure) side = downstream, after the orifice, where velocity is higher and pressure is lower. The DP = P_upstream - P_downstream is proportional to flow.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "Where is the Low Pressure (LP) side connected when measuring flow with an orifice plate?",
    "a": "Downstream of the orifice plate",
    "opts": ["Downstream of the orifice plate", "Upstream of the orifice plate", "To the bottom of the tank", "To the condenser"],
    "exp": "LP side connects downstream of the orifice plate where fluid has accelerated through the restriction, creating a lower pressure zone. The impulse line from the downstream LP tap connects to the low side of the DP transmitter. The transmitter measures the difference: HP (upstream) minus LP (downstream) = DP proportional to flow\u00b2.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "If flow increases, what happens to the Differential Pressure (DP)?",
    "a": "It increases (output goes towards 20mA)",
    "opts": ["It increases (output goes towards 20mA)", "It decreases (output goes towards 4mA)", "It stays the same", "It oscillates"],
    "exp": "DP increases as the square of flow (DP \u221d Q\u00b2). Double the flow = 4\u00d7 the DP. Half the flow = \u00bc the DP. This quadratic relationship is why low flow readings are compressed and less accurate. Minimum recommended range is typically 10% of full scale (1% DP = 10% flow). Flow meters are most accurate in the upper 50-100% range.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "How is a DP transmitter used to measure liquid level in an open tank?",
    "a": "The HP side is connected to the bottom of the tank, and LP is vented to atmosphere",
    "opts": ["The HP side is connected to the bottom of the tank, and LP is vented to atmosphere", "HP and LP are both connected to the bottom", "HP is connected to the top, LP to the bottom", "It measures the time it takes sound to bounce off the surface"],
    "exp": "HP side connects to the bottom of the tank (measures total head pressure of liquid column). LP side vents to atmosphere (reference = atmospheric pressure). DP = \u03c1 \u00d7 g \u00d7 h. Empty tank: DP = 0 = 4 mA. Full tank: DP = maximum = 20 mA. No moving parts, no contact with liquid.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "In level measurement, what determines the Differential Pressure (DP) at the bottom of the tank?",
    "a": "Liquid density x gravity x liquid height (rho x g x h)",
    "opts": ["Liquid density x gravity x liquid height (rho x g x h)", "Tank volume x liquid viscosity", "Tank width x fluid temperature", "Atmospheric pressure x tank height"],
    "exp": "DP = \u03c1 \u00d7 g \u00d7 h, where \u03c1 = liquid density (kg/m\u00b3), g = 9.81 m/s\u00b2, h = liquid height (m). For water at 1000 kg/m\u00b3: 1 metre height = 9810 Pa = 98.1 mbar. The DP transmitter converts this hydrostatic pressure to 4-20 mA proportional to level.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "For a DP level transmitter on an open tank, what does an empty tank equal in terms of DP and mA?",
    "a": "DP = 0, Output = 4mA",
    "opts": ["DP = 0, Output = 4mA", "DP = Maximum, Output = 20mA", "DP = 0, Output = 0mA", "DP = Minimum, Output = 12mA"],
    "exp": "Empty tank: liquid height = 0, therefore DP = \u03c1 \u00d7 g \u00d7 0 = 0 Pa. Transmitter output = 4 mA (live zero, LRV). This 4 mA minimum confirms the loop is healthy even when the tank is empty. A reading of 0 mA would indicate a fault, not an empty tank.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "For a DP level transmitter on an open tank, what does a full tank equal in terms of DP and mA?",
    "a": "DP = Maximum, Output = 20mA",
    "opts": ["DP = Maximum, Output = 20mA", "DP = 0, Output = 4mA", "DP = Maximum, Output = 12mA", "DP = 0, Output = 20mA"],
    "exp": "Full tank: maximum liquid height reached, maximum DP = \u03c1 \u00d7 g \u00d7 h_max. Transmitter output = 20 mA (URV = Upper Range Value). The transmitter is calibrated so the rated maximum DP corresponds exactly to 20 mA = 100% level reading.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What is 'Zero Suppression' in a DP level transmitter setup?",
    "a": "Adjusting the zero calibration to cancel out the fixed hydrostatic head of a liquid-filled connecting pipe (wet leg)",
    "opts": ["Adjusting the zero calibration to cancel out the fixed hydrostatic head of a liquid-filled connecting pipe (wet leg)", "Setting the 4-20mA signal to 0mA", "Removing the DP transmitter from the tank", "Closing the valve to suppress flow"],
    "exp": "When the transmitter is mounted below the bottom tap (in a wet leg installation), the reference liquid in the LP leg creates a constant positive pressure on the LP side. This offsets the zero reading. Zero suppression subtracts this constant hydrostatic offset so the transmitter reads 4 mA when the tank is empty, despite the constant LP pressure.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "Why might a local pressure gauge show 3 bar, but the remote transmitter shows 2.5 bar?",
    "a": "The transmitter is mounted higher than the gauge; hydrostatic head in the connecting pipe reduces the pressure reading at the transmitter",
    "opts": ["The transmitter is mounted higher than the gauge; hydrostatic head in the connecting pipe reduces the pressure reading at the transmitter", "The transmitter is broken and must be replaced", "The gauge is always more accurate than a transmitter", "The fluid is flowing backwards"],
    "exp": "If the transmitter is mounted physically higher than the pressure tapping point, the liquid column in the connecting pipe creates a hydrostatic head loss: \u0394P = \u03c1 \u00d7 g \u00d7 \u0394h. For water at 5 metres height above tap: \u0394P = 1000 \u00d7 9.81 \u00d7 5 = 49 kPa = 0.49 bar. Transmitter reads 3 - 0.5 = 2.5 bar. This offset must be corrected by zero elevation adjustment.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "Besides height difference, what is another common cause for a pressure mismatch between a gauge and a transmitter?",
    "a": "Impulse line partial blockage or leak",
    "opts": ["Impulse line partial blockage or leak", "The ship is rolling", "The generator frequency dropped", "The 4-20mA loop is running at 12mA"],
    "exp": "Common causes: (1) Partial blockage of the impulse line \u2014 build-up of scale, wax, or debris reduces the transmitted pressure. (2) Leak in the impulse line \u2014 pressure bleeds off causing a lower reading. (3) Air pocket trapped in the impulse line (for liquid service). (4) Different process temperatures at different measurement points.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What is an 'impulse line'?",
    "a": "The small diameter tubing that connects the process pipe/tank to the instrument",
    "opts": ["The small diameter tubing that connects the process pipe/tank to the instrument", "The wire carrying the 4-20mA signal", "The air supply line for a pneumatic valve", "The main fuel line to the engine"],
    "exp": "The small-diameter tubing (typically 6-12mm bore) connecting the process pipe or vessel to the DP transmitter. Must be: same material as process fluid compatibility, routed with no pockets where gas can collect (for liquid) or liquid can settle (for gas), insulated for hot processes, and purged/filled correctly before commissioning.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What happens if the HP impulse line to a DP flow transmitter gets completely blocked?",
    "a": "The reading will freeze at the last value and fail to respond to flow changes",
    "opts": ["The reading will freeze at the last value and fail to respond to flow changes", "The reading drops to zero immediately", "The reading jumps to maximum immediately", "The transmitter blows a fuse"],
    "exp": "HP side pressure is frozen at the last static value. DP = HP (frozen) - LP (live). If flow continues, LP changes but HP doesn't. The DP reading becomes nonsensical \u2014 possibly going negative or to a fixed incorrect value. The reading will not track actual flow changes. Maintenance required: isolate, vent, and clear the blockage.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What happens if the LP impulse line to a DP flow transmitter leaks?",
    "a": "The measured DP will falsely increase, causing a higher flow reading than actual",
    "opts": ["The measured DP will falsely increase, causing a higher flow reading than actual", "The measured DP will drop to zero", "The transmitter outputs 0mA", "The flow in the pipe stops"],
    "exp": "LP side pressure drops toward atmospheric. DP = HP (live) - LP (lower than real). The measured DP is artificially high, causing the flow reading to indicate higher flow than actual. In safety systems, this could mask a loss of flow condition. Regular impulse line inspection is part of preventive maintenance.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "Why do DP transmitters typically feature a 3-valve or 5-valve manifold block?",
    "a": "To safely isolate the transmitter, equalize the HP and LP sides, and vent pressure for calibration or removal",
    "opts": ["To safely isolate the transmitter, equalize the HP and LP sides, and vent pressure for calibration or removal", "To control the flow of fuel to the engine", "To mix three different fluids together", "To amplify the 4-20mA signal"],
    "exp": "3-valve manifold (2 block valves + 1 equalizer): block valves isolate HP and LP from process; equalizer valve equalizes both sides to zero DP before removal or calibration. 5-valve manifold adds 2 vent/calibration valves. Allows safe transmitter removal without process shutdown. Equalizing before closing block valves prevents single-sided overpressure damaging the sensor diaphragm.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "When removing a DP transmitter from service using a 3-valve manifold, what is the CRITICAL first step?",
    "a": "Open the equalizing valve to equalize pressure on both sides of the sensor diaphragm before closing the block valves",
    "opts": ["Open the equalizing valve to equalize pressure on both sides of the sensor diaphragm before closing the block valves", "Disconnect the 4-20mA wires while power is on", "Smash the glass display", "Close the LP block valve immediately"],
    "exp": "Step 1: Open the equalizing valve (middle valve) first \u2014 this equalizes HP and LP pressure on both sides of the sensing diaphragm. Both sides see the same pressure simultaneously, preventing one-sided overpressure from bursting the diaphragm. THEN close both block valves. Reversing this order = risk of destroying the transmitter diaphragm.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What internal component actually senses the pressure in a modern DP transmitter?",
    "a": "A capacitive or piezoresistive sensing diaphragm",
    "opts": ["A capacitive or piezoresistive sensing diaphragm", "A mechanical bourdon tube", "A bi-metallic strip", "A float switch"],
    "exp": "Capacitive sensing diaphragm: a metal diaphragm deflects under pressure, changing the capacitance between the diaphragm and fixed capacitor plates. The capacitance change is measured by an electronic circuit and converted to a 4-20 mA output. Some use piezoresistive strain gauge sensors. Both have no moving parts and are very reliable.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "Can a DP transmitter be used in a pressurized/closed tank?",
    "a": "Yes, HP connects to the bottom (liquid), LP connects to the top (vapour space) to cancel out the blanket pressure",
    "opts": ["Yes, HP connects to the bottom (liquid), LP connects to the top (vapour space) to cancel out the blanket pressure", "No, it only works on open tanks", "Yes, but only if the pressure is below 1 bar", "No, pressurized tanks require radar sensors only"],
    "exp": "Yes. HP side = bottom of tank (liquid column + blanket gas pressure). LP side = top of tank vapour space (blanket gas pressure only). DP = (liquid column + blanket pressure) - (blanket pressure) = liquid column only. The blanket gas pressure cancels out because it acts equally on both sides. This is essential for pressurised fuel or chemical tanks.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "In a closed tank DP level setup, if the blanket pressure increases by 1 bar, how does the DP change?",
    "a": "It doesn't change; the blanket pressure acts equally on both HP and LP sides and cancels out",
    "opts": ["It doesn't change; the blanket pressure acts equally on both HP and LP sides and cancels out", "DP increases by 1 bar", "DP decreases by 1 bar", "The transmitter will break"],
    "exp": "DP is unchanged. The 1 bar increase applies equally to both HP (bottom) and LP (top) connections. DP = P_bottom - P_top = (P_liquid + P_blanket) - P_blanket = P_liquid. The blanket pressure completely cancels, regardless of its magnitude. This is the key advantage of DP measurement for closed pressurised tanks.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What is a 'Wet Leg' in DP level measurement?",
    "a": "An impulse line filled with a reference liquid to prevent process vapors from condensing inconsistently in the line",
    "opts": ["An impulse line filled with a reference liquid to prevent process vapors from condensing inconsistently in the line", "A leaking pipe that needs repair", "A sensor that has fallen into the tank", "A type of marine hull coating"],
    "exp": "A wet leg is an impulse line deliberately kept filled with a reference liquid (same density as process, or a separate sealing fluid) from the LP tap to the transmitter. Used when process vapours might condense inconsistently in the LP impulse line, creating variable hydrostatic offsets. The wet leg creates a constant, known reference pressure on the LP side.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "If measuring steam flow with an orifice plate, why are condensation pots used?",
    "a": "To ensure the impulse lines are always filled with water, protecting the transmitter from high-temperature live steam",
    "opts": ["To ensure the impulse lines are always filled with water, protecting the transmitter from high-temperature live steam", "To generate extra steam for the whistle", "To measure the temperature of the steam", "To trap impurities in the steam"],
    "exp": "Hot steam in impulse lines would constantly flash to steam and back, creating variable hydrostatic columns and measurement errors. Condensation pots (small chambers above the taps) capture and hold condensed water, ensuring both HP and LP impulse lines are always filled with liquid water at a constant density. This gives stable, repeatable DP readings.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What unit is Differential Pressure typically measured in on shipboard transmitters?",
    "a": "Millibar (mbar) or mmH2O (millimeters of water column)",
    "opts": ["Millibar (mbar) or mmH2O (millimeters of water column)", "MegaPascals (MPa)", "Volts (V)", "Hertz (Hz)"],
    "exp": "Common units on ships: mbar (millibar), Pa (Pascal), mmH\u2082O (millimetres water column), or bar. 1 mbar = 100 Pa = 10.2 mmH\u2082O. Modern smart transmitters display in engineering units configured during commissioning. Traditional gauges use mmH\u2082O or bar. Flow computers typically use Pa or mbar.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "If an orifice plate is installed backwards in a pipe, what happens?",
    "a": "The flow coefficient changes drastically, causing completely inaccurate flow readings",
    "opts": ["The flow coefficient changes drastically, causing completely inaccurate flow readings", "The flow in the pipe reverses direction", "The pipe bursts", "It works perfectly fine"],
    "exp": "Orifice plates are bevelled (sharp edge faces upstream). Backwards installation: the chamfered edge faces upstream instead of downstream, creating a different and unstable flow coefficient \u2014 actual Cd (discharge coefficient) differs significantly from the calibration value. Flow readings will be 5-20% in error. Also: the pressure tapping ports may face wrong direction. Must verify plate orientation marks during commissioning; 'FLOW' arrow on plate indicates correct direction.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What is 'Turndown Ratio' in a smart DP transmitter?",
    "a": "The ratio of the maximum measurable span to the minimum measurable span (e.g., 100:1 means a 100 bar sensor can be accurately scaled down to 1 bar)",
    "opts": ["The ratio of the maximum measurable span to the minimum measurable span (e.g., 100:1 means a 100 bar sensor can be accurately scaled down to 1 bar)", "The speed at which you can turn the isolation valve", "The ratio of voltage to current", "The physical size reduction of the sensor"],
    "exp": "Turndown ratio = maximum calibrated span / minimum calibrated span. A transmitter with 100:1 turndown and maximum DP range of 1000 mbar can be accurately configured down to 10 mbar span. High turndown allows one transmitter to serve multiple flow ranges without replacement. Traditional dumb transmitters typically have 10:1 turndown.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "How do you perform a basic zero check on a DP transmitter in the field?",
    "a": "Close the block valves and open the equalizing valve; the output should drop exactly to 4.00mA (0 DP)",
    "opts": ["Close the block valves and open the equalizing valve; the output should drop exactly to 4.00mA (0 DP)", "Disconnect the wires and measure with a multimeter", "Vent both sides to atmosphere", "Press the reset button on the PLC"],
    "exp": "Procedure: (1) Close both block valves. (2) Open equalizing valve \u2014 transmitter now sees 0 DP (equal pressure both sides). (3) Output should read exactly 4.000 mA. If not at 4 mA, the zero has drifted and must be re-trimmed. (4) After check: close equalizer, open block valves to return to service. This verifies zero drift without process shutdown.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "Why are DP transmitters widely used on ships instead of more advanced flow meters?",
    "a": "They are rugged, reliable, have no moving parts in the flow stream, and are well understood",
    "opts": ["They are rugged, reliable, have no moving parts in the flow stream, and are well understood", "They are the only legal type allowed by SOLAS", "They are completely immune to freezing", "They generate their own electricity"],
    "exp": "DP transmitters with orifice plates: (1) No moving parts in the flow stream \u2014 extremely reliable in marine environment. (2) Proven technology \u2014 well understood by marine engineers. (3) Maintainable on board \u2014 orifice plates can be removed and cleaned. (4) Work with liquids, gases, and steam. (5) Lower cost than Coriolis or magnetic meters.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "If a DP transmitter shows 12mA, what is the DP as a percentage of the calibrated span?",
    "a": "50%",
    "opts": ["50%", "12%", "75%", "0%"],
    "exp": "Formula: % = (I - 4) / 16 \u00d7 100 = (12 - 4) / 16 \u00d7 100 = 8/16 \u00d7 100 = 50%. So 12 mA = 50% of the calibrated DP span. If the transmitter is calibrated for 0-100 mbar, 12 mA represents 50 mbar. Always remember: 4 mA = 0%, 12 mA = 50%, 20 mA = 100%.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What is the most accurate type of O2 analyser used for boiler flue gas monitoring?",
    "a": "Paramagnetic O2 Analyser",
    "opts": ["Paramagnetic O2 Analyser", "Electrochemical O2 Analyser", "Zirconia O2 Analyser", "Galvanic O2 Analyser"],
    "exp": "Paramagnetic O2 Analyser \u2014 uses the unique paramagnetic property of oxygen molecules. It provides very high accuracy (\u00b10.1% O2) and excellent long-term stability with no consumable electrolyte. Standard for continuous boiler flue gas monitoring to optimise combustion efficiency (target flue gas O2: 2-4% for efficient combustion).",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the fundamental working principle of a Paramagnetic O2 Analyser?",
    "a": "Oxygen molecules are strongly attracted to magnetic fields, displacing a suspended test body proportionally to O2 concentration",
    "opts": ["Oxygen molecules are strongly attracted to magnetic fields, displacing a suspended test body proportionally to O2 concentration", "Oxygen reacts with a chemical cell to generate voltage", "Oxygen absorbs infrared light at a specific wavelength", "Oxygen changes the resistance of a heated wire"],
    "exp": "Oxygen is strongly paramagnetic (attracted to magnetic fields) unlike most other gases. A dumbbell-shaped glass body filled with non-magnetic gas is suspended in a strong magnetic field. When O2-containing sample gas surrounds it, O2 molecules crowd into the magnetic field, displacing the test body. The angular displacement is proportional to O2 concentration.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "Why are other gases in the flue not measured by the paramagnetic sensor?",
    "a": "Most other gases are diamagnetic (repelled by magnetic fields) and do not interfere with the paramagnetic oxygen",
    "opts": ["Most other gases are diamagnetic (repelled by magnetic fields) and do not interfere with the paramagnetic oxygen", "Other gases are filtered out before entering the sensor", "Other gases are burned inside the sensor", "Other gases are heavier and sink to the bottom"],
    "exp": "Common flue gases (CO2, N2, SO2, CO, H2O) are diamagnetic \u2014 they are weakly repelled by magnetic fields. Their effect on the suspended test body is negligible compared to paramagnetic oxygen. This property makes the paramagnetic sensor extremely selective for oxygen, unlike electrochemical cells which can be cross-sensitive to H2S.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What type of O2 analyser is typically found in portable enclosed space entry meters?",
    "a": "Electrochemical (Galvanic) O2 Analyser",
    "opts": ["Electrochemical (Galvanic) O2 Analyser", "Paramagnetic O2 Analyser", "Zirconia O2 Analyser", "Infrared O2 Analyser"],
    "exp": "Electrochemical (Galvanic) O2 Analyser \u2014 a consumable cell containing a gold cathode, lead anode, and KOH electrolyte. Compact, portable, requires no calibration gases for normal use (just fresh air). Battery powered. Reads 0-25% O2 range. Lifespan typically 1-3 years as the lead anode is consumed.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "How does an Electrochemical O2 Analyser work?",
    "a": "Oxygen diffuses through a membrane and reacts at a cathode, generating a small electrical current proportional to O2 concentration",
    "opts": ["Oxygen diffuses through a membrane and reacts at a cathode, generating a small electrical current proportional to O2 concentration", "It uses a magnetic field to attract oxygen", "It uses a high temperature ceramic cell", "It measures the speed of sound through the gas"],
    "exp": "O2 diffuses through a Teflon membrane to a gold cathode where it is reduced: O2 + 2H2O + 4e\u207b \u2192 4OH\u207b. The lead anode oxidizes: Pb \u2192 Pb\u00b2\u207a + 2e\u207b. This electrochemical reaction generates a small current proportional to O2 partial pressure. The instrument amplifies and displays this as % O2.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is a major disadvantage of the Electrochemical O2 sensor?",
    "a": "The chemical electrolyte is consumed over time, resulting in a limited lifespan (1-3 years)",
    "opts": ["The chemical electrolyte is consumed over time, resulting in a limited lifespan (1-3 years)", "It requires a 440V power supply", "It only works at very high temperatures", "It is extremely large and heavy"],
    "exp": "The lead anode is consumed irreversibly in the oxidation reaction. Exposure to 20.9% O2 continuously depletes the anode. Typical service life: 1-3 years depending on use. Cannot be regenerated \u2014 entire cell must be replaced. Also temperature sensitive (must apply temperature correction) and affected by H2S which oxidises the electrolyte.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is a Zirconia O2 Analyser primarily used for?",
    "a": "Measuring oxygen directly in very high-temperature flue gases without cooling the sample",
    "opts": ["Measuring oxygen directly in very high-temperature flue gases without cooling the sample", "Testing drinking water quality", "Measuring oxygen in a cold storage room", "Portable enclosed space checks"],
    "exp": "Zirconia (ZrO2) analysers measure O2 directly in hot flue gas at operating temperature (600-900\u00b0C) without cooling the sample. The zirconia ceramic becomes an O2 ion conductor at high temperatures, generating an EMF proportional to the O2 concentration ratio (Nernst equation). No sampling line needed \u2014 probe inserted directly into the flue.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the standard 'Zero Gas' used to calibrate an O2 analyser?",
    "a": "Pure Nitrogen (0% O2)",
    "opts": ["Pure Nitrogen (0% O2)", "Fresh Air (20.9% O2)", "Pure Oxygen (100% O2)", "Carbon Dioxide (CO2)"],
    "exp": "Pure nitrogen (99.999% N2, 0% O2) is used as zero gas. The analyser is exposed to pure nitrogen to set the zero point (0% O2 = 4 mA output). Cylinder labelled 'Zero Gas' or 'N2 5.0'. Must be certified purity. Some analysers use an internal reference cell; others require external calibration gas every 3-6 months.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the standard 'Span Gas' used to calibrate an O2 analyser?",
    "a": "A certified gas mixture with a known O2 percentage, or fresh air (20.9% O2)",
    "opts": ["A certified gas mixture with a known O2 percentage, or fresh air (20.9% O2)", "Pure Nitrogen (0% O2)", "Helium", "Hydrogen"],
    "exp": "A certified calibration gas with known O2 percentage \u2014 typically 20.9% (fresh air) or a certified mixture (e.g., 5.0% O2 in N2 for IG monitoring). For enclosed space meters: fresh clean air on deck = 20.9% O2 is used as span check. Certified mixtures have a certificate of analysis and expiry date.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What instrument is used to detect very small electrical currents (microamps)?",
    "a": "Galvanometer",
    "opts": ["Galvanometer", "Megger", "Oscilloscope", "Tachometer"],
    "exp": "Galvanometer \u2014 a highly sensitive current-detecting instrument. The D'Arsonval type uses a moving coil in a permanent magnetic field. When microamp-level current flows, the coil deflects against a spring, moving a pointer proportionally. Used in: IR monitoring systems to detect earth leakage, Wheatstone bridge null detection, and early electrochemical O2 cells.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the working principle of a D'Arsonval Galvanometer?",
    "a": "A moving coil suspended in a permanent magnetic field rotates when current flows through it (F = BIL)",
    "opts": ["A moving coil suspended in a permanent magnetic field rotates when current flows through it (F = BIL)", "It measures the heat generated by the current", "It uses the piezoelectric effect", "It relies on a vibrating tuning fork"],
    "exp": "A rectangular coil is suspended in the gap of a horseshoe permanent magnet. When current I flows through the coil, a torque is produced (F = BIL, where B = field strength, I = current, L = conductor length). This torque deflects the coil against a spiral hairspring until equilibrium. Deflection angle is directly proportional to current \u2014 the pointer position indicates the measured value.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "Where would you typically find a galvanometer on a ship?",
    "a": "In an insulation monitoring system or as a null detector in a Wheatstone bridge",
    "opts": ["In an insulation monitoring system or as a null detector in a Wheatstone bridge", "To start the main engine", "To measure the main generator voltage", "To measure fuel flow"],
    "exp": "Applications: (1) Insulation Resistance Monitor \u2014 detects earth fault current in the IT system. (2) Earth fault indicator panel \u2014 displays which phase has a fault. (3) Calibration instruments \u2014 as null detector in Wheatstone bridge circuits. (4) Historical galvanic protection systems. Modern digital instruments largely replace traditional galvanometers.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the purpose of a Salinometer?",
    "a": "To measure the salinity (salt content) of water, typically boiler feed water or fresh water generator output",
    "opts": ["To measure the salinity (salt content) of water, typically boiler feed water or fresh water generator output", "To measure the temperature of seawater", "To measure the viscosity of fuel oil", "To measure the speed of the ship"],
    "exp": "A salinometer continuously monitors the salt/chloride content of water. Ship applications: (1) Fresh Water Generator distillate \u2014 diverts contaminated output to bilge if salinity > setpoint. (2) Boiler feed water \u2014 high salinity causes boiler scale and tube failure. (3) Freshwater storage monitoring. Typical setpoints: FWG <5 ppm, boiler feed <0.1 ppm (depending on boiler type).",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the working principle of a Salinometer?",
    "a": "It measures the electrical conductivity of the water, which increases proportionally with dissolved salt ions",
    "opts": ["It measures the electrical conductivity of the water, which increases proportionally with dissolved salt ions", "It measures the density of the water using a float", "It evaporates the water and weighs the salt left behind", "It measures the color of the water"],
    "exp": "Electrical conductivity measurement: dissolved salts (NaCl, MgCl2, etc.) dissociate into ions in water. These ions carry electrical charge, making salt water conductive. Two electrodes are immersed in the water; AC voltage is applied between them. The measured conductance is proportional to ion concentration = salinity. Temperature must be compensated as conductivity changes with temperature.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "Why does a salinometer use AC voltage across its electrodes instead of DC?",
    "a": "To prevent polarisation (bubbles/plating) on the electrodes, which would cause inaccurate readings",
    "opts": ["To prevent polarisation (bubbles/plating) on the electrodes, which would cause inaccurate readings", "AC is safer than DC", "DC would electrocute the fish", "The ship only has AC power"],
    "exp": "DC electrolysis would occur at the electrodes with direct current: ions migrate and plate onto the electrodes (electrolysis), changing their surface properties and introducing measurement errors. AC voltage reverses polarity at frequency (typically 50-1000 Hz), preventing net ion migration. The electrodes stay clean and the conductance measurement remains stable.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "If a salinometer on the Fresh Water Generator detects high salinity, what happens?",
    "a": "An alarm sounds and an automatic dump/divert valve directs the contaminated water to the bilge or back to the sea",
    "opts": ["An alarm sounds and an automatic dump/divert valve directs the contaminated water to the bilge or back to the sea", "The main engine trips", "The FW generator shuts down completely", "Nothing, it just records the value"],
    "exp": "The salinometer output triggers a 3-way divert valve (solenoid operated) that automatically diverts the FWG distillate output overboard or to bilge \u2014 NOT to the freshwater storage tank. Simultaneously, a high salinity alarm activates on the bridge/ECR panel. The operator must investigate: check evaporator pressure, saltwater feed valve, or distillate cooler for leakage.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the typical maximum allowable salinity for steam drum boiler feed water?",
    "a": "Typically <5 to 15 ppm (parts per million)",
    "opts": ["Typically <5 to 15 ppm (parts per million)", "1000 ppm", "35,000 ppm", "0 ppm exactly"],
    "exp": "Boiler feed water limits depend on boiler pressure: low pressure auxiliary boilers typically <10 ppm TDS (Total Dissolved Solids). High pressure exhaust gas boilers: <2 ppm. Sea water contamination at 35,000 ppm NaCl would immediately cause severe foaming, carry-over, and tube scaling. Salinometer alarm setpoints are typically 5-15 ppm for FWG output.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What does a Viscotherm measure and control?",
    "a": "It measures the actual viscosity of Heavy Fuel Oil (HFO) and controls the steam heater to maintain the correct injection viscosity",
    "opts": ["It measures the actual viscosity of Heavy Fuel Oil (HFO) and controls the steam heater to maintain the correct injection viscosity", "It measures the temperature of cooling water", "It measures the speed of the turbocharger", "It measures the density of lube oil"],
    "exp": "A Viscotherm (viscosity controller) measures the actual kinematic viscosity of HFO in the fuel system and controls a steam heater to maintain the target injection viscosity. It replaces simple temperature control. Marine HFO varies between 100-700 cSt at 50\u00b0C; correct injection viscosity = 10-20 cSt. Temperature to achieve this varies between fuel batches.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "Why is Viscosity Control preferred over simple Temperature Control for HFO?",
    "a": "Different batches of HFO have different viscosity-temperature curves; fixed temperature control cannot guarantee correct injection viscosity for all fuels",
    "opts": ["Different batches of HFO have different viscosity-temperature curves; fixed temperature control cannot guarantee correct injection viscosity for all fuels", "Temperature control is too expensive", "Viscosity control uses less steam", "Temperature sensors melt in HFO"],
    "exp": "Different HFO batches have different viscosity-temperature relationships due to varying crude origins and refinery processes. A fixed temperature (e.g., 130\u00b0C) gives correct viscosity for one batch but wrong viscosity for another. A Viscotherm responds to actual viscosity regardless of the fuel quality, automatically adjusting the heater temperature to always achieve the target injection viscosity.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What happens if HFO is injected into the engine at too HIGH a viscosity (too cold)?",
    "a": "Poor atomisation, leading to incomplete combustion, black smoke, and carbon deposits",
    "opts": ["Poor atomisation, leading to incomplete combustion, black smoke, and carbon deposits", "The engine will run too fast", "The fuel pumps will cavitate", "The injectors will melt"],
    "exp": "High viscosity = thick fuel = poor atomisation from the fuel injectors. Poorly atomised large droplets do not burn completely. Consequences: black smoke (incomplete combustion), carbon deposits on injectors, piston crowns, and exhaust valves, reduced thermal efficiency, increased maintenance, and higher exhaust temperatures on affected cylinders.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What happens if HFO is injected at too LOW a viscosity (too hot)?",
    "a": "The fuel becomes too thin, causing leakage past the injector plungers and poor lubrication of the pump components",
    "opts": ["The fuel becomes too thin, causing leakage past the injector plungers and poor lubrication of the pump components", "It burns cleaner and increases efficiency", "The engine will stop immediately", "The turbocharger will overspeed"],
    "exp": "Too low viscosity = very thin fuel = reduced lubricity of fuel. Consequences: (1) Increased internal leakage past fuel pump plungers (fuel escapes to drain, reduced delivery). (2) Accelerated wear of fuel pump plungers and barrels due to loss of fuel film lubrication. (3) Possible cavitation in fuel pumps. Also: vapour lock risk and safety concerns with hot fuel near hot surfaces.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the typical target viscosity for HFO injection in a large marine diesel engine?",
    "a": "10 to 15 centistokes (cSt)",
    "opts": ["10 to 15 centistokes (cSt)", "100 to 150 cSt", "1 to 5 cSt", "380 cSt"],
    "exp": "Target injection viscosity: 10-20 centistokes (cSt) \u2014 typically 12-15 cSt for most large 2-stroke marine diesel engines. Some older engines specify slightly higher. This range ensures optimal atomisation from mechanical injectors while maintaining adequate lubrication of the fuel pump. The Viscotherm continuously controls steam heating to maintain this target.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "How does a rotational viscometer (part of the Viscotherm) work?",
    "a": "It measures the torque required to rotate a spindle at a constant speed in the flowing fuel; higher viscosity requires more torque",
    "opts": ["It measures the torque required to rotate a spindle at a constant speed in the flowing fuel; higher viscosity requires more torque", "It drops a metal ball and times how long it takes to sink", "It forces fuel through a tiny hole and measures the pressure", "It measures the speed of sound through the fuel"],
    "exp": "A motor drives a spindle (rotor) at a precise constant speed inside the flowing fuel. The viscous drag of the fuel resists rotation \u2014 high viscosity = more resistance = more torque required to maintain speed. The torque is measured as the feedback signal. This torque signal controls the PID temperature controller via the steam heater to maintain constant target viscosity.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "In a Viscotherm control loop, if the measured viscosity is too high, what does the controller do?",
    "a": "It opens the steam valve wider to heat the fuel more, reducing its viscosity",
    "opts": ["It opens the steam valve wider to heat the fuel more, reducing its viscosity", "It closes the steam valve to cool the fuel", "It adds diesel oil to thin the HFO", "It slows down the main engine"],
    "exp": "If measured viscosity > setpoint: fuel is too cold/viscous. Controller output increases \u2014 opens steam heater valve wider, raising fuel temperature. Higher temperature \u2192 lower viscosity \u2192 closes the error between measured and target viscosity. Classic closed-loop PID control: error = (setpoint viscosity) - (measured viscosity).",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "How is an O2 analyser typically calibrated before enclosed space entry?",
    "a": "It is zeroed with Nitrogen, and spanned in clean fresh air on deck to read 20.9% before entering",
    "opts": ["It is zeroed with Nitrogen, and spanned in clean fresh air on deck to read 20.9% before entering", "It is calibrated inside the enclosed space", "It is calibrated using engine exhaust gas", "It does not need calibration"],
    "exp": "2-point calibration: (1) Zero: expose sensor to nitrogen or close off from atmosphere \u2014 reads 0% O2. (2) Span: expose to clean fresh air on deck (20.9% O2) \u2014 adjust span pot if needed. Most modern instruments perform automatic calibration. Calibration must be documented. Instrument must be within calibration date. Never calibrate inside the space.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What happens to an electrochemical O2 sensor if left in a 100% nitrogen atmosphere for a long time?",
    "a": "Nothing harmful, it just reads 0%, but it actually prolongs the sensor life since the electrolyte isn't reacting with O2",
    "opts": ["Nothing harmful, it just reads 0%, but it actually prolongs the sensor life since the electrolyte isn't reacting with O2", "It explodes", "The sensor dies immediately", "It gets stuck at 0% forever"],
    "exp": "No harm occurs \u2014 the electrochemical reaction requires oxygen. Without O2, the anode reaction stops, and no current flows. The lead anode is preserved (not consumed). This actually extends sensor life. Some manufacturers recommend storing sensors in nitrogen when not in use. The sensor responds normally when returned to normal atmosphere.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "If the O2 analyser on the IG (Inert Gas) system reads 6% O2, what is the typical system response?",
    "a": "An alarm is raised, and the IG is vented to atmosphere instead of going to the cargo tanks",
    "opts": ["An alarm is raised, and the IG is vented to atmosphere instead of going to the cargo tanks", "The IG plant shuts down immediately", "The cargo tanks are opened", "Nothing, 6% is perfect"],
    "exp": "6% O2 exceeds the permitted maximum of 5% for IG delivery to cargo tanks (SOLAS II-2 requirement). The IG system automatically trips: deck seal valve closes, flue gas blower stops, and an alarm sounds. IG cannot be delivered to cargo until O2 content returns below 5%. Operator must investigate combustion quality of the inert gas generator.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the typical alarm setpoint for IG O2 content on a tanker?",
    "a": "5% O2 (High O2 alarm)",
    "opts": ["5% O2 (High O2 alarm)", "10% O2", "20.9% O2", "0% O2"],
    "exp": "SOLAS II-2 requires IG delivered to cargo tanks must not exceed 5% O2 by volume. Typical alarm: 5% O2 high alarm triggers isolation of IG system. Below 8% O2 is generally below the lower flammable limit for hydrocarbon vapour-air mixtures, but 5% provides a safety margin. Reference: SOLAS Regulation II-2/4.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the function of a 'Null Detector' in a Wheatstone bridge?",
    "a": "It is a highly sensitive galvanometer used to detect when the bridge is perfectly balanced (zero current flowing)",
    "opts": ["It is a highly sensitive galvanometer used to detect when the bridge is perfectly balanced (zero current flowing)", "It measures the total resistance of the bridge", "It supplies power to the bridge", "It measures the temperature of the resistors"],
    "exp": "A null detector (galvanometer) is connected across the bridge midpoints. When the bridge is balanced (R1/R2 = R3/R4), zero current flows through the galvanometer \u2014 the pointer sits exactly at zero (null point). This null condition indicates the unknown resistance exactly equals the calculated value. The galvanometer's sensitivity determines measurement accuracy.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "How do you calibrate a salinometer on board?",
    "a": "Zero it using pure distilled water, and span it using a certified standard calibration solution (e.g., 10ppm NaCl)",
    "opts": ["Zero it using pure distilled water, and span it using a certified standard calibration solution (e.g., 10ppm NaCl)", "Calibrate it using seawater", "Calibrate it using tap water", "It is factory sealed and never calibrated"],
    "exp": "2-point calibration: (1) Zero: flush with pure distilled water (0 ppm) \u2014 adjust zero until display reads 0 ppm. (2) Span: use a certified NaCl standard solution (e.g., 5.00 ppm \u00b1 0.01 ppm) \u2014 adjust span potentiometer until display reads the certified value. Record calibration date, standard solution batch number, and technician signature in maintenance log.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the basic working principle of an Inductive Proximity Sensor?",
    "a": "An oscillating electromagnetic field is damped (energy absorbed) when a metallic object enters it, triggering a switch",
    "opts": ["An oscillating electromagnetic field is damped (energy absorbed) when a metallic object enters it, triggering a switch", "It bounces light off an object", "It measures changes in air pressure", "It uses a physical lever switch"],
    "exp": "An internal LC oscillator generates a high-frequency electromagnetic field (100kHz-1MHz) at the sensing face. When a metallic object enters this field, eddy currents are induced in the metal. These eddy currents absorb energy from the oscillator, reducing its amplitude (damping). An electronic circuit detects when damping exceeds a threshold and switches the output transistor.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What type of material can an Inductive Proximity Sensor detect?",
    "a": "Metallic objects ONLY",
    "opts": ["Metallic objects ONLY", "Any solid object", "Liquids and gases", "Plastics and wood ONLY"],
    "exp": "Inductive sensors detect metallic (electrically conductive) objects only \u2014 steel, iron, aluminium, copper, brass. They cannot detect plastic, wood, rubber, glass, or ceramic. The sensing range varies by metal type: ferrous metals (iron, steel) have the longest range; non-ferrous metals (aluminium, copper) have 30-70% of the nominal sensing range.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "Why does an inductive sensor detect iron/steel better than copper or aluminium?",
    "a": "Iron is highly permeable and creates stronger eddy currents/magnetic interaction, resulting in a longer sensing range",
    "opts": ["Iron is highly permeable and creates stronger eddy currents/magnetic interaction, resulting in a longer sensing range", "Copper reflects the magnetic field", "Aluminium is too heavy", "Iron generates its own electricity"],
    "exp": "Iron is ferromagnetic \u2014 it concentrates the magnetic flux, increasing eddy current induction. It also has lower electrical conductivity than copper, concentrating eddy current losses. This combination produces stronger oscillator damping at the same distance. Sensing range for iron = 100% of nominal. Aluminium \u2248 50%. Copper \u2248 45%. Always specify the material when selecting a sensor.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What happens to the internal oscillator of an inductive sensor when metal approaches?",
    "a": "Eddy currents induced in the metal absorb energy, causing the oscillator amplitude to decrease (damping)",
    "opts": ["Eddy currents induced in the metal absorb energy, causing the oscillator amplitude to decrease (damping)", "The oscillator speeds up", "The oscillator stops completely permanently", "The oscillator voltage doubles"],
    "exp": "The oscillating field induces eddy currents in the metal target. These eddy currents create their own opposing magnetic field (Lenz's Law) that extracts energy from the oscillator. The oscillator amplitude decreases (damps). When the amplitude falls below a threshold level (determined by the switching point), the output transistor switches from its normal state to the opposite state.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is a typical sensing range for a standard inductive proximity sensor?",
    "a": "2 to 40 millimetres",
    "opts": ["2 to 40 millimetres", "1 to 5 metres", "10 to 50 centimetres", "0.1 to 0.5 millimetres"],
    "exp": "Nominal sensing range: typically 2 mm to 40 mm depending on sensor face diameter. Small M12 sensor: 2-4 mm. Medium M18 sensor: 5-8 mm. Large M30 sensor: 10-15 mm. These ranges assume standard mild steel target. Always mount the sensor so the target passes within 70-80% of the nominal sensing range for reliable operation.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is the primary advantage of a proximity sensor over a mechanical limit switch?",
    "a": "No physical contact means no mechanical wear, resulting in a much longer lifespan and reliability",
    "opts": ["No physical contact means no mechanical wear, resulting in a much longer lifespan and reliability", "It can switch 440V directly", "It requires no electrical power to run", "It is much cheaper to replace"],
    "exp": "No contact = no mechanical wear = longer lifespan (typically 10\u2077 to 10\u2078 switching cycles vs 10\u2075 to 10\u2076 for mechanical). Additional advantages: immune to vibration, condensation, oil splash; faster response time (microseconds vs milliseconds for mechanical); compact and sealed (IP67/IP68 common); LED indication of switch state.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "Where would you typically find an inductive proximity sensor on a ship?",
    "a": "Monitoring valve open/closed positions, or measuring shaft speed",
    "opts": ["Monitoring valve open/closed positions, or measuring shaft speed", "Detecting oil level in a tank", "Measuring exhaust temperature", "Detecting smoke in the ECR"],
    "exp": "Ship applications: (1) Valve position feedback (open/close confirmation). (2) Shaft speed measurement on generators, compressors. (3) Gear position detection in controllable pitch propeller. (4) Cargo pump shaft rotation. (5) Anchor windlass position. (6) Engine crank position for wrong-way alarm. (7) Door and hatch open/closed monitoring.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "How is an inductive proximity sensor used to measure shaft RPM?",
    "a": "It is mounted near a toothed gear wheel; it outputs a pulse each time a metal tooth passes, and the PLC counts pulses per minute",
    "opts": ["It is mounted near a toothed gear wheel; it outputs a pulse each time a metal tooth passes, and the PLC counts pulses per minute", "It measures the magnetic field of the rotating shaft", "It measures the friction of the shaft", "It touches the shaft to feel the vibration"],
    "exp": "A toothed wheel (phonic wheel) is mounted on the shaft. The proximity sensor is mounted with 1-3 mm gap facing the teeth. As the shaft rotates, each metal tooth passes the sensor face \u2014 one pulse per tooth. A frequency counter or PLC measures pulses per time period: RPM = (pulses per second \u00d7 60) / number of teeth. Typical accuracy \u00b10.01%.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "If a gear has 60 teeth, and the proximity sensor counts 1200 pulses in one second, what is the RPM?",
    "a": "1200 RPM (1200 pulses/sec = 20 revs/sec = 1200 revs/min)",
    "opts": ["1200 RPM (1200 pulses/sec = 20 revs/sec = 1200 revs/min)", "60 RPM", "3600 RPM", "20 RPM"],
    "exp": "Pulses per second = 1200. Number of teeth = 60. Revolutions per second = 1200 / 60 = 20 rev/s. RPM = 20 \u00d7 60 = 1200 RPM. Formula: RPM = (pulses/second \u00d7 60) / teeth count. This calculation is performed automatically by a PLC counter module or tachometer display.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is a Capacitive Proximity Sensor?",
    "a": "A sensor that detects changes in capacitance when an object enters its electric field; it can detect BOTH metallic and non-metallic objects",
    "opts": ["A sensor that detects changes in capacitance when an object enters its electric field; it can detect BOTH metallic and non-metallic objects", "A sensor that only detects metal", "A sensor that measures battery voltage", "A sensor that uses magnets"],
    "exp": "A capacitive sensor detects changes in capacitance at its sensing face. The sensor and a target object form the plates of a capacitor. When a dielectric material (or conductor) enters the electric field, capacitance increases. An RC oscillator circuit detects this change and switches the output. Can detect metallic AND non-metallic materials including liquids through tank walls.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "When would you choose a Capacitive Proximity Sensor over an Inductive one?",
    "a": "When you need to detect non-metallic objects, like plastic, wood, or the level of liquid through a plastic sight glass",
    "opts": ["When you need to detect non-metallic objects, like plastic, wood, or the level of liquid through a plastic sight glass", "When you need to detect a steel gear tooth", "When you want to measure temperature", "When you need to switch 440V"],
    "exp": "Use capacitive when: (1) Detecting non-metallic materials \u2014 plastic containers, cardboard, wood, glass. (2) Detecting liquid level through a plastic tank wall. (3) Detecting presence of powder or granular materials in a silo. (4) Sensing through packaging. Inductive is preferred for metals due to longer range and immunity to humidity (capacitive sensors can be affected by moisture).",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is a Photoelectric Sensor?",
    "a": "A sensor that emits a beam of light (usually infrared) and detects when an object breaks or reflects the beam",
    "opts": ["A sensor that emits a beam of light (usually infrared) and detects when an object breaks or reflects the beam", "A sensor that generates electricity from sunlight", "A sensor that takes photographs of alarms", "A sensor that measures engine room brightness"],
    "exp": "Photoelectric sensors use an emitter (LED, usually IR) and a detector (phototransistor). Three types: (1) Through-beam: emitter and receiver separate, object detected when beam is broken. (2) Retroreflective: emitter and receiver in same housing, uses reflector. (3) Diffuse: emitter and receiver in same housing, detects light reflected from the target object itself.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is the working principle of a Magnetic Reed Switch?",
    "a": "Two magnetic contacts enclosed in a glass tube close together when a permanent magnet is brought near them",
    "opts": ["Two magnetic contacts enclosed in a glass tube close together when a permanent magnet is brought near them", "An electromagnet that attracts a steel plate", "A switch that detects the earth's magnetic field", "A switch that operates via radio waves"],
    "exp": "Two ferromagnetic metal contacts are hermetically sealed inside a glass tube in inert gas. When a permanent magnet approaches within the activation distance, the magnetic field magnetises the contacts, attracting them together \u2014 closing the circuit. When the magnet moves away, the spring force of the contacts opens them again. Completely sealed, no external wiring on the moving part.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "Where are magnetic reed switches commonly used on ships?",
    "a": "Float level switches in small tanks, or door open/close sensors",
    "opts": ["Float level switches in small tanks, or door open/close sensors", "Shaft speed measurement", "Main engine exhaust temperature", "Switchboard busbar protection"],
    "exp": "Ship applications: (1) Tank level float switches \u2014 float contains a permanent magnet, rises/falls with level, activates fixed reed switch at alarm level. (2) Door and hatch open/close sensors \u2014 watertight door position. (3) Valve position switches on pipeline valves. (4) Safety interlocks on access panels. Simple, sealed, no power required for the switch itself.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is an Ultrasonic Proximity Sensor?",
    "a": "It emits high-frequency sound waves and calculates distance by measuring the time it takes for the echo to return",
    "opts": ["It emits high-frequency sound waves and calculates distance by measuring the time it takes for the echo to return", "It uses light to measure distance", "It detects the vibration of running machinery", "It cleans parts using sound waves"],
    "exp": "Ultrasonic sensors emit high-frequency sound pulses (typically 40-200 kHz) from a piezoelectric transducer, then measure the time for the echo to return (Time-of-Flight). Distance = (speed of sound \u00d7 time) / 2. Speed of sound in air \u2248 343 m/s. A 10 ms echo return time = 343 \u00d7 0.010 / 2 = 1.7 m distance. Works on any material that reflects sound.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is a common marine application for an Ultrasonic Sensor?",
    "a": "Measuring the level of liquids or solids in a tank from the top without contacting the fluid",
    "opts": ["Measuring the level of liquids or solids in a tank from the top without contacting the fluid", "Measuring the RPM of the turbocharger", "Detecting smoke", "Measuring fuel viscosity"],
    "exp": "Marine applications: (1) Tank level measurement from the top without process contact \u2014 fuel, ballast, grey water. (2) Open channel flow measurement. (3) Distance/position detection of large objects. (4) Ship-to-quay distance measurement for mooring. Advantage over DP transmitters: no impulse lines or process wetted parts. Limitation: affected by foam on liquid surface.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is an LVDT?",
    "a": "Linear Variable Differential Transformer - a highly precise sensor for measuring linear displacement (position)",
    "opts": ["Linear Variable Differential Transformer - a highly precise sensor for measuring linear displacement (position)", "Low Voltage Direct Transmission", "Liquid Valve Drain Trap", "Light Varying Diode Tube"],
    "exp": "LVDT (Linear Variable Differential Transformer) converts linear mechanical displacement into a proportional AC electrical signal. A movable ferromagnetic core slides inside a transformer primary and two secondary coils. As the core moves, mutual inductance changes, producing a differential output voltage proportional to displacement. Resolution: sub-micron. Used for precise position feedback.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "Where might an LVDT be used in an engine room?",
    "a": "Providing highly accurate valve stem position feedback inside a smart valve positioner (like SIPART)",
    "opts": ["Providing highly accurate valve stem position feedback inside a smart valve positioner (like SIPART)", "Measuring the temperature of the main bearing", "Detecting water in oil", "Measuring generator voltage"],
    "exp": "Engine room LVDT applications: (1) Fuel rack position measurement on the main engine \u2014 precise governor feedback. (2) Valve stem position in smart valve positioners (SIPART). (3) Measuring piston rod elongation in hydraulic actuators. (4) Governor linkage position. LVDTs are chosen for: frictionless operation (core doesn't touch the coil), infinite resolution, excellent linearity.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is a Rotary Encoder?",
    "a": "An electro-mechanical device that converts the angular position or motion of a shaft into analog or digital output signals",
    "opts": ["An electro-mechanical device that converts the angular position or motion of a shaft into analog or digital output signals", "A device that encrypts radio signals", "A motor that rotates at a fixed speed", "A type of gear box"],
    "exp": "Rotary encoder converts shaft angular position into digital pulses (incremental) or unique parallel digital codes (absolute). Optical types use a code disc with transparent/opaque sectors read by LEDs and photodetectors. Magnetic types use Hall effect sensors reading a magnetic disc. Output: A and B quadrature channels plus Z (zero/index) pulse per revolution.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is the difference between an Incremental Encoder and a Absolute Encoder?",
    "a": "Incremental outputs pulses as it moves (loses position if power fails); Absolute outputs a unique digital code for every position (keeps position after power loss)",
    "opts": ["Incremental outputs pulses as it moves (loses position if power fails); Absolute outputs a unique digital code for every position (keeps position after power loss)", "Incremental is for small shafts, Absolute is for large shafts", "Incremental uses light, Absolute uses magnets", "Incremental is analog, Absolute is pneumatic"],
    "exp": "Incremental encoder: outputs equally spaced pulses as the shaft rotates. Counts from zero at power-on \u2014 loses position if power is interrupted. Must find a home position on restart. Lower cost. Absolute encoder: each angular position produces a unique binary code (Gray code typically). Retains position after power loss. More expensive but required for safety-critical positioning.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "If a proximity sensor is marked PNP, what does its output do when triggered?",
    "a": "It switches the positive voltage (e.g., +24V) to the load (sourcing)",
    "opts": ["It switches the positive voltage (e.g., +24V) to the load (sourcing)", "It switches the negative/0V to the load (sinking)", "It outputs an AC voltage", "It opens a dry relay contact"],
    "exp": "PNP (sourcing) output: when the target is detected, the output transistor switches the positive supply voltage (+24V) to the output terminal. Load is connected between the output and the 0V negative supply. Also called 'sourcing' because the sensor sources current to the load. Common in European practice.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "If a proximity sensor is marked NPN, what does its output do when triggered?",
    "a": "It switches the negative/0V to the load (sinking)",
    "opts": ["It switches the negative/0V to the load (sinking)", "It switches the positive voltage to the load", "It outputs 4-20mA", "It outputs a pneumatic signal"],
    "exp": "NPN (sinking) output: when the target is detected, the output transistor switches the output terminal to 0V (negative). Load is connected between +24V and the output terminal. Also called 'sinking' because the sensor sinks current from the load to 0V. Common in Japanese/US practice. PLC input cards may require a specific type \u2014 check specifications.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "Why are Inductive sensors considered highly reliable for engine room environments?",
    "a": "They are completely encapsulated, immune to dirt, dust, oil, and water, and have no moving parts",
    "opts": ["They are completely encapsulated, immune to dirt, dust, oil, and water, and have no moving parts", "They are powered by heat", "They are made of titanium", "They communicate via satellite"],
    "exp": "Inductive sensors are completely encapsulated in epoxy or stainless steel \u2014 no exposed contacts, no moving parts, no mechanical wear. IP67/IP68 rated (submersible). Unaffected by: oil splash, condensation, vibration, salt atmosphere, temperature fluctuations (-25 to +85\u00b0C typical). MTBF (Mean Time Between Failures) typically >10 million operations.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "If a shaft speed sensor fails, what is the most common mechanical reason?",
    "a": "Vibration loosened the mounting bracket, increasing the gap between the sensor and the gear teeth beyond the sensing range",
    "opts": ["Vibration loosened the mounting bracket, increasing the gap between the sensor and the gear teeth beyond the sensing range", "The sensor melted from friction", "The gear teeth became magnetised", "The shaft reversed direction"],
    "exp": "Vibration loosening: Over time, engine/machinery vibration causes the proximity sensor mounting bracket to loosen. The air gap between sensor face and gear teeth increases beyond the rated sensing range (typically 2-8 mm maximum). The sensor no longer detects the teeth, reading zero RPM. Check: vibration marks on bracket, measure actual gap, re-tighten and re-torque. Use locking compound.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "How do you test a 3-wire DC inductive proximity sensor on a workbench?",
    "a": "Apply 24V DC to brown/blue wires, bring a spanner near the face, and check for voltage on the black signal wire",
    "opts": ["Apply 24V DC to brown/blue wires, bring a spanner near the face, and check for voltage on the black signal wire", "Put it in a glass of water", "Connect it directly to 220V AC", "Measure its resistance with a megger"],
    "exp": "Bench test: (1) Connect Brown wire (+24V DC), Blue wire (0V), Black wire (output). (2) Use a multimeter on the Black output wire. (3) Bring a piece of mild steel (spanner) close to the sensing face. (4) PNP sensor: Black wire should switch to ~24V when metal present, 0V when absent. (5) NPN sensor: Black wire switches to 0V when present, 24V absent. LED indicator also confirms state.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What does 'Hysteresis' mean in the context of a proximity sensor?",
    "a": "The difference between the switch-ON point as the target approaches, and the switch-OFF point as the target moves away",
    "opts": ["The difference between the switch-ON point as the target approaches, and the switch-OFF point as the target moves away", "The maximum speed the sensor can detect", "The voltage drop across the sensor", "The color of the LED indicator"],
    "exp": "Hysteresis is the difference between the switch-ON distance (as target approaches) and the switch-OFF distance (as target moves away). Typically 10-20% of nominal sensing range. Example: sensor with 8mm range activates at 7mm approach, deactivates at 8.5mm recession. This deliberate gap prevents rapid on-off chattering if the target vibrates at the switching boundary.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "Why is hysteresis deliberately designed into a proximity sensor?",
    "a": "To prevent the output from rapidly chattering (turning on/off rapidly) if the target vibrates precisely at the sensing boundary",
    "opts": ["To prevent the output from rapidly chattering (turning on/off rapidly) if the target vibrates precisely at the sensing boundary", "To make the sensor cheaper", "To increase the sensing range", "To make it compatible with AC power"],
    "exp": "Without hysteresis: if a vibrating metal shaft sits exactly at the switching distance, the output would oscillate rapidly (chattering) between ON and OFF at vibration frequency \u2014 possibly thousands of times per second. This would confuse counting circuits and damage output transistors. Hysteresis creates a stable dead-band around the switching point, preventing this problem.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "Can an inductive proximity sensor detect a pool of water?",
    "a": "No, water is non-metallic and will not induce eddy currents; a capacitive sensor must be used for water",
    "opts": ["No, water is non-metallic and will not induce eddy currents; a capacitive sensor must be used for water", "Yes, water is highly conductive", "Yes, but only if the water is boiling", "Yes, but it will short circuit"],
    "exp": "No. Water is non-metallic (non-conductive in pure form, weakly conductive when dissolved with salts). An inductive sensor's electromagnetic field cannot induce significant eddy currents in water. A capacitive proximity sensor must be used \u2014 the water changes the dielectric constant in the sensor's electric field, increasing capacitance and triggering detection.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is a 'Passive Magnetic Pickup' used for speed sensing?",
    "a": "A coil wound around a permanent magnet; a passing gear tooth changes the magnetic flux, inducing a voltage pulse without needing external power",
    "opts": ["A coil wound around a permanent magnet; a passing gear tooth changes the magnetic flux, inducing a voltage pulse without needing external power", "A sensor that uses 24V to create a magnetic field", "A sensor that picks up radio waves", "A piece of tape on the shaft"],
    "exp": "A passive magnetic pickup (variable reluctance sensor) consists of a permanent magnet with a coil wound around it. No external power needed. When a ferromagnetic gear tooth passes, it changes the magnetic flux in the coil, inducing a voltage pulse (Faraday's Law: V = -N \u00d7 d\u03a6/dt). Output is a sine wave whose frequency is proportional to RPM. No power needed but signal amplitude decreases at low RPM.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "Which gives a cleaner, square-wave digital pulse at very low RPMs: a Passive Magnetic Pickup or an Active Inductive Proximity Sensor?",
    "a": "An Active Inductive Proximity Sensor (outputs clean 24V pulses regardless of speed)",
    "opts": ["An Active Inductive Proximity Sensor (outputs clean 24V pulses regardless of speed)", "Passive Magnetic Pickup", "They are identical", "Neither works at low RPM"],
    "exp": "Active inductive proximity sensor gives cleaner digital pulses at low RPM. Passive pickup amplitude is proportional to d\u03a6/dt (rate of flux change) \u2014 at very low RPM, teeth move slowly, amplitude drops to millivolts (hard to distinguish from noise). Active sensors maintain full 24V digital output regardless of speed \u2014 even at 1 RPM. Critical for starting speed measurement and slow-turning equipment.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is Modbus?",
    "a": "A standard industrial serial communication protocol used to transmit data between electronic devices",
    "opts": ["A standard industrial serial communication protocol used to transmit data between electronic devices", "A type of maritime satellite", "A brand of circuit breaker", "An operating system for PLCs"],
    "exp": "Modbus is an open serial communication protocol developed by Modicon in 1979, now managed by the Modbus Organization. It defines how data is structured and sent between electronic devices. Widely used in industrial automation and on ships for connecting IAS (Integrated Automation Systems) to PLCs, drives, sensors, and smart instruments via RS-485 or Ethernet.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is the primary architecture of a Modbus network?",
    "a": "Master/Slave (or Client/Server)",
    "opts": ["Master/Slave (or Client/Server)", "Peer-to-Peer", "Ring Topology", "Mesh Network"],
    "exp": "Modbus uses a Master/Slave architecture (also called Client/Server in Modbus TCP). One Master (typically the IAS workstation or PLC) controls all communication. Up to 247 Slaves (field devices, drives, sensors) listen and only respond when specifically addressed by the Master. No slave can initiate communication \u2014 they only reply to Master queries.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "In a Modbus Master/Slave network, which device initiates communication?",
    "a": "Only the Master can initiate communication; Slaves only respond when queried",
    "opts": ["Only the Master can initiate communication; Slaves only respond when queried", "Any slave can initiate", "The slave with the highest ID", "Both Master and Slaves can initiate at any time"],
    "exp": "Only the Master initiates communication. The Master polls each Slave sequentially by sending a request frame containing the Slave's address and the specific data it wants (Function Code + Register address). Each Slave monitors all traffic and responds ONLY when its own address is received. This prevents data collisions on the shared bus.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is the maximum number of slave addresses available on a standard Modbus serial link?",
    "a": "247 (Addresses 1-247, 0 is broadcast)",
    "opts": ["247 (Addresses 1-247, 0 is broadcast)", "99", "1024", "16"],
    "exp": "Modbus RTU: 247 slave addresses (1-247). Address 0 = broadcast (all slaves respond). Address 248-255 = reserved. In practice, RS-485 physical layer limits network devices to 32 without repeaters (each device loads the bus). With bus repeaters, the full 247 addresses can be used. Modbus TCP has no practical device limit.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What are the three main types/versions of the Modbus protocol?",
    "a": "Modbus RTU, Modbus ASCII, and Modbus TCP/IP",
    "opts": ["Modbus RTU, Modbus ASCII, and Modbus TCP/IP", "Modbus A, B, and C", "Modbus Serial, Parallel, and USB", "Modbus 485, 232, and 422"],
    "exp": "Three Modbus variants: (1) Modbus RTU: Binary encoding over serial RS-485/RS-232. Most compact, fastest, most common in field devices. (2) Modbus ASCII: Human-readable ASCII encoding over serial. Less common, used for debugging. (3) Modbus TCP/IP: Modbus protocol wrapped in Ethernet TCP/IP packets. Used in modern ship LANs and IAS networks.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is Modbus RTU?",
    "a": "A binary serial version of Modbus, usually implemented over RS-485, widely used for field instruments and drives",
    "opts": ["A binary serial version of Modbus, usually implemented over RS-485, widely used for field instruments and drives", "A text-based version over ethernet", "A wireless version of Modbus", "A pneumatic communication protocol"],
    "exp": "Modbus RTU (Remote Terminal Unit) is the dominant industrial variant using binary encoding (raw bytes) for maximum data density. Transmitted over RS-485 twisted pair cable. Message structure: [Slave Address 1 byte][Function Code 1 byte][Data n bytes][CRC 2 bytes]. Error detection via CRC-16 checksum. Baud rates: 1200 to 115200 bps. Standard: IEC 61158.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is the most common physical layer (wiring standard) used for Modbus RTU on ships?",
    "a": "RS-485 (2-wire differential)",
    "opts": ["RS-485 (2-wire differential)", "Ethernet (RJ45)", "Fiber Optic", "RS-232 (9-pin)"],
    "exp": "RS-485 (EIA-485): 2-wire differential balanced signal. Differential voltage (+V on A wire, -V on B wire) rejects common-mode noise. Maximum cable length: 1200 metres at 100 kbps. Multiple devices (up to 32 unit loads per segment) on a single twisted pair. Used on ships for: IAS to VFD communication, smart instrument networks, navigation system integration.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "Why is RS-485 preferred over RS-232 for Modbus RTU networks?",
    "a": "RS-485 allows multiple devices on a single bus and long distances (up to 1200m) due to its differential signalling",
    "opts": ["RS-485 allows multiple devices on a single bus and long distances (up to 1200m) due to its differential signalling", "RS-485 is faster", "RS-485 uses 230V AC", "RS-232 is illegal on ships"],
    "exp": "RS-232 limitations: only 2 devices (point-to-point), 15-metre maximum cable length, single-ended (susceptible to noise). RS-485 advantages: multi-drop (up to 32+ devices), 1200m cable length, differential balanced signal rejects electrical noise common in engine rooms (VFD switching, motor starts). Ships use RS-485 almost exclusively for field bus communication.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is Modbus TCP/IP?",
    "a": "The Modbus protocol encapsulated inside a standard Ethernet TCP/IP packet, used on modern ship IT/OT networks",
    "opts": ["The Modbus protocol encapsulated inside a standard Ethernet TCP/IP packet, used on modern ship IT/OT networks", "A serial protocol over RS-485", "A protocol exclusively for internet browsing", "A wireless-only protocol"],
    "exp": "Modbus TCP encapsulates the standard Modbus RTU data (excluding CRC \u2014 replaced by TCP checksumming) inside a TCP/IP packet. Uses port 502. Advantages: standard Ethernet infrastructure, no distance limit, hundreds of devices, simultaneous multiple Masters. Used in modern ship networks: IAS workstations to PLCs, SCADA systems, alarm management. RFC 1900.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "When a Modbus Master sends a request, what are the key components of the message frame?",
    "a": "Slave Address, Function Code, Data/Register Address, Error Check (CRC)",
    "opts": ["Slave Address, Function Code, Data/Register Address, Error Check (CRC)", "IP Address, Subnet Mask, Gateway", "Tag Name, Value, Timestamp", "Start Bit, Stop Bit, Parity"],
    "exp": "Modbus RTU frame: (1) Slave Address (1 byte) \u2014 who to talk to. (2) Function Code (1 byte) \u2014 what to do. (3) Data field (n bytes) \u2014 register address + number of registers to read/write + data (for writes). (4) CRC (2 bytes) \u2014 error detection. Total minimum frame: 4 bytes. Maximum: 256 bytes.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What does the Slave Address do in a Modbus request?",
    "a": "It identifies exactly which slave on the network should listen to and process the request",
    "opts": ["It identifies exactly which slave on the network should listen to and process the request", "It tells the master where it is located", "It sets the baud rate", "It resets the slave"],
    "exp": "The Slave Address (1 byte, range 1-247) identifies which specific device should process the request. All slaves on the RS-485 bus receive every message, but only the slave whose programmed address matches the frame address will respond. Address 0 = broadcast (no response expected). Duplicate addresses = major error \u2014 both devices respond simultaneously causing data collision.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What happens if a Modbus Slave receives a message with an address that is not its own?",
    "a": "It ignores the message completely",
    "opts": ["It ignores the message completely", "It forwards the message to the correct slave", "It replies with an error code", "It shuts down"],
    "exp": "The slave completely ignores the message \u2014 it does not respond, does not generate an error, does not acknowledge. Only the correctly addressed slave processes the request and sends a response. This is fundamental to the RS-485 shared bus architecture \u2014 all devices hear all traffic but only react to their own address.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is a Modbus 'Function Code'?",
    "a": "A number that tells the slave what kind of action to perform (e.g., read a value, write a value)",
    "opts": ["A number that tells the slave what kind of action to perform (e.g., read a value, write a value)", "The password to access the device", "The speed of the network", "The firmware version of the slave"],
    "exp": "Function codes are single-byte numbers (1-127) that specify the type of operation to perform. Standard codes: FC01 = Read Coils (digital outputs). FC02 = Read Discrete Inputs. FC03 = Read Holding Registers. FC04 = Read Input Registers. FC05 = Write Single Coil. FC06 = Write Single Register. FC16 = Write Multiple Registers. If a slave receives an unsupported FC, it returns error code 0x01 (Illegal Function).",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What does Modbus Function Code 03 (Read Holding Registers) do?",
    "a": "Reads 16-bit analog output or configuration values from the slave",
    "opts": ["Reads 16-bit analog output or configuration values from the slave", "Reads digital inputs (on/off)", "Writes a new value to the slave", "Reboots the slave"],
    "exp": "FC03 reads 16-bit read/write registers (called Holding Registers, addresses 40001-49999 in Modbus convention, or 0-9999 in the FC03 payload). These store configuration parameters, setpoints, or outputs that can be changed. Examples: VFD speed setpoint, PID setpoint, pump enable/disable command, alarm setpoints. The Master reads the current register values.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What does Modbus Function Code 04 (Read Input Registers) do?",
    "a": "Reads 16-bit analog input values (like sensor measurements) from the slave",
    "opts": ["Reads 16-bit analog input values (like sensor measurements) from the slave", "Writes analog values", "Reads digital outputs", "Sets the slave address"],
    "exp": "FC04 reads 16-bit read-only registers (Input Registers, addresses 30001-39999). These store real-time measurement values from sensors. Examples: transmitter current temperature, pressure, flow reading; drive actual current, frequency, torque. Read-only to the network \u2014 only the slave device itself writes to these registers from its sensor input.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is the difference between a Modbus 'Coil' and a Modbus 'Register'?",
    "a": "A Coil is a 1-bit boolean value (ON/OFF), a Register is a 16-bit integer value (0-65535)",
    "opts": ["A Coil is a 1-bit boolean value (ON/OFF), a Register is a 16-bit integer value (0-65535)", "A Coil is analog, a Register is digital", "A Coil is for reading, a Register is for writing", "There is no difference"],
    "exp": "Coil (1-bit, ON/OFF): represents a single digital state. Read with FC01 (output coils) or FC02 (input contacts). Write with FC05 (single) or FC15 (multiple). Examples: pump running status, valve open/close command, alarm acknowledge. Register (16-bit integer, 0-65535): stores a numerical value. Read with FC03 or FC04. Write with FC06 or FC16. Examples: temperature, pressure, speed setpoint.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "If a temperature transmitter outputs 4-20mA, how might this value be represented in a Modbus register?",
    "a": "As a 16-bit integer, usually scaled (e.g., 4000 to 20000) representing the analog value",
    "opts": ["As a 16-bit integer, usually scaled (e.g., 4000 to 20000) representing the analog value", "As a boolean ON/OFF", "As an IP address", "As a text string '4mA'"],
    "exp": "Common scaling convention: 4 mA = register value 4000, 20 mA = register value 20000. The engineer applies the formula: Actual value = ((Register - 4000) / 16000) \u00d7 (URV - LRV) + LRV. Alternative: direct engineering units scaled \u00d710 (e.g., 25.3\u00b0C stored as 253). Always check the device manual for the specific scaling factor and data type (integer vs IEEE float).",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "In an RS-485 Modbus network, what is a Termination Resistor used for?",
    "a": "Placing a 120 ohm resistor at both physical ends of the cable to prevent signal reflection/echoes that corrupt data",
    "opts": ["Placing a 120 ohm resistor at both physical ends of the cable to prevent signal reflection/echoes that corrupt data", "To limit the current so the wires don't burn", "To convert 24V to 5V", "To generate the Modbus clock signal"],
    "exp": "RS-485 is a transmission line. Without termination, signal pulses reflect off the cable ends and travel back, interfering with subsequent pulses (echoes). A 120 ohm resistor (matching cable characteristic impedance) at each physical end of the cable absorbs the signal energy instead of reflecting it. This is critical for cables longer than ~10 metres at typical baud rates.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What happens if you have 10 devices on an RS-485 network and you forget the termination resistors on a long cable?",
    "a": "The signal reflections will cause data corruption, resulting in communication timeouts or CRC errors",
    "opts": ["The signal reflections will cause data corruption, resulting in communication timeouts or CRC errors", "The master will blow a fuse", "The slaves will all reboot", "Nothing, it will work perfectly"],
    "exp": "On cables >50m without termination: signal reflections create ghost pulses that arrive at the receiver as false data bits. This causes CRC errors (detected) or worse, data corruption accepted as valid (undetected). Symptoms: intermittent communication failures, occasional wrong readings, some slaves occasionally failing to respond. Adding termination resistors immediately cures the problem.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is 'Baud Rate' in Modbus RTU?",
    "a": "The speed of communication (bits per second), typically 9600, 19200, or 38400",
    "opts": ["The speed of communication (bits per second), typically 9600, 19200, or 38400", "The number of devices on the network", "The voltage of the signal", "The delay between messages"],
    "exp": "Baud rate = bits per second transmitted. Common Modbus RTU rates: 9600, 19200, 38400, 57600, 115200 bps. At 9600 bps, transmitting a 8-byte frame takes approximately 8.3 milliseconds. Lower baud rates = more reliable on long cables (less signal distortion). All devices on the same RS-485 segment must operate at identical baud rates \u2014 mismatch causes complete communication failure.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What must be true about the Baud Rate and Parity settings for all devices on a Modbus RTU network?",
    "a": "Every single device on the network must be set to the EXACT SAME baud rate, data bits, parity, and stop bits",
    "opts": ["Every single device on the network must be set to the EXACT SAME baud rate, data bits, parity, and stop bits", "The master sets it automatically for everyone", "Each slave can have a different speed", "Only the master needs to know the speed"],
    "exp": "All devices on a Modbus RTU network must share: (1) Baud rate (e.g., 19200). (2) Data bits (usually 8). (3) Parity (None, Odd, or Even). (4) Stop bits (1 or 2). These are collectively called 'serial communication settings' or 'port settings.' A single device with wrong settings will fail to communicate; it may corrupt messages for other devices on the bus.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "If a Modbus slave is connected but not responding, what is a common troubleshooting step?",
    "a": "Check if the Tx/Rx wires (A and B) are swapped; RS-485 is polarity sensitive",
    "opts": ["Check if the Tx/Rx wires (A and B) are swapped; RS-485 is polarity sensitive", "Hit the slave with a hammer", "Change the slave to a master", "Increase the voltage to 220V"],
    "exp": "Systematic troubleshooting: (1) Verify slave address is configured correctly on the device. (2) Check baud rate/parity settings match. (3) Swap A and B wires \u2014 RS-485 is polarity sensitive (A+ must connect to A+). (4) Check power supply to the slave device. (5) Verify termination resistors in place. (6) Use a Modbus analyser to capture the bus traffic and verify the Master is sending the correct address.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is a Modbus Gateway?",
    "a": "A device that converts Modbus RTU (serial) to Modbus TCP/IP (Ethernet), allowing legacy serial devices to connect to a modern network",
    "opts": ["A device that converts Modbus RTU (serial) to Modbus TCP/IP (Ethernet), allowing legacy serial devices to connect to a modern network", "A physical door in the switchboard", "A firewall that blocks Modbus traffic", "A master device that controls everything"],
    "exp": "A Modbus Gateway converts between different physical or protocol variants: typically RS-485 Modbus RTU \u2194 Ethernet Modbus TCP/IP. This allows legacy field devices (with RS-485 ports) to be integrated into modern Ethernet-based IAS/DCS networks without replacing the field devices. The gateway appears as a Modbus TCP Server to the network and acts as a Modbus RTU Master to the serial devices.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "Can you have two Modbus Masters on a single RS-485 Modbus RTU network?",
    "a": "No, standard Modbus RTU allows only ONE master. Two masters will cause data collisions",
    "opts": ["No, standard Modbus RTU allows only ONE master. Two masters will cause data collisions", "Yes, up to 247 masters", "Yes, but only if they have the same address", "Yes, they take turns automatically"],
    "exp": "No \u2014 standard Modbus RTU permits ONLY ONE master on a serial bus. If two masters transmit simultaneously, both signals collide on the RS-485 wires, corrupting both messages. Multiple masters require: separate RS-485 buses (with a gateway between them), or migration to Modbus TCP on Ethernet (where the network infrastructure handles simultaneous transactions).",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "Can you have multiple Masters on a Modbus TCP/IP network?",
    "a": "Yes, because Ethernet switches handle the traffic routing and collision avoidance",
    "opts": ["Yes, because Ethernet switches handle the traffic routing and collision avoidance", "No, only one master ever", "Yes, but only two", "No, Modbus TCP does not use masters"],
    "exp": "Yes. Modbus TCP on Ethernet supports multiple simultaneous Masters (Clients) because: (1) Ethernet uses CSMA/CD collision detection. (2) Network switches create dedicated collision domains. (3) Each TCP connection is independent. Multiple HMI workstations, an IAS server, and an engineering laptop can all read data from the same Modbus TCP device simultaneously.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is 'Polling' in a Modbus network?",
    "a": "The master sequentially asking each slave for data on a continuous loop",
    "opts": ["The master sequentially asking each slave for data on a continuous loop", "The slaves voting on who speaks next", "Measuring the voltage of the cable", "Resetting all slaves simultaneously"],
    "exp": "Polling is the Master's process of sequentially querying each slave for its current data: Master sends request to Slave 1 \u2192 waits for response \u2192 sends request to Slave 2 \u2192 waits \u2192 Slave 3 \u2192 etc. Each cycle through all slaves is one poll cycle. Typical poll rates: 1-10 seconds for slow process data. The poll cycle time = sum of all request/response times for all devices.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "If an ETO is asked to integrate a new VFD into the IAS via Modbus RTU, what 3 settings MUST be configured on the VFD?",
    "a": "Slave Address (unique), Baud Rate (matches network), Parity/Stop bits (matches network)",
    "opts": ["Slave Address (unique), Baud Rate (matches network), Parity/Stop bits (matches network)", "IP Address, Subnet, Gateway", "Voltage, Current, Frequency", "Motor kW, RPM, Cos Phi"],
    "exp": "Mandatory VFD Modbus settings: (1) Slave Address \u2014 unique number (1-247), must not duplicate any existing device. (2) Baud Rate \u2014 must match the rest of the network (e.g., 19200 bps). (3) Parity and Stop Bits \u2014 must match network (e.g., No Parity, 1 Stop Bit). Additionally: connect to RS-485 A and B terminals correctly (polarity); check VFD manual for register map of speed command and status.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What does CRC stand for in a Modbus RTU message?",
    "a": "Cyclic Redundancy Check - a mathematical checksum used to detect data corruption in transmission",
    "opts": ["Cyclic Redundancy Check - a mathematical checksum used to detect data corruption in transmission", "Constant Rate Control", "Current Relay Coil", "Central Routing Computer"],
    "exp": "CRC = Cyclic Redundancy Check. A 2-byte (16-bit) mathematical error detection code calculated from all preceding bytes in the Modbus frame (address + function code + data). The receiver independently calculates its own CRC from the received data and compares to the appended CRC. Any transmission error changes the data and produces a different CRC value \u2192 error detected \u2192 frame discarded.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is the typical voltage level of an RS-485 Modbus signal?",
    "a": "Differential voltage between -7V and +12V (typically a 5V differential)",
    "opts": ["Differential voltage between -7V and +12V (typically a 5V differential)", "220V AC", "24V DC", "4-20mA"],
    "exp": "RS-485 differential voltage: Logic 1 = A wire > B wire by +200mV to +6V. Logic 0 = B wire > A wire by +200mV to +6V. Common mode range: -7V to +12V. The differential nature means both wires change together in response to common-mode noise, cancelling the noise at the receiver. Receiver measures only the differential voltage between A and B.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "Why is shielded twisted pair (STP) cable highly recommended for Modbus RS-485?",
    "a": "The twisted pair rejects electromagnetic interference, and the shield drains away noise to ground",
    "opts": ["The twisted pair rejects electromagnetic interference, and the shield drains away noise to ground", "It is cheaper than normal wire", "It can carry more current", "It looks better in the cable tray"],
    "exp": "Twisted pair: each twist cancels magnetic field interference from adjacent conductors \u2014 noise induced on one wire is equally induced on the other, appearing as common-mode noise which RS-485 receivers reject. Shield (drain wire): connected to earth at ONE end only (prevents ground loop currents) to intercept capacitively-coupled electrical noise from VFDs, power cables, and radio transmitters nearby.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What does a Megger (Insulation Resistance Tester) actually measure?",
    "a": "The very high resistance of the insulation between a conductor and earth (or between phases)",
    "opts": ["The very high resistance of the insulation between a conductor and earth (or between phases)", "The resistance of the copper wire itself", "The voltage of the generator", "The current flowing to the motor"],
    "exp": "A Megger applies a known DC high voltage (500V-5000V depending on equipment rating) across the insulation and measures the resulting leakage current. IR (M\u03a9) = Applied Voltage (V) / Leakage Current (\u00b5A). Healthy insulation has very high resistance (hundreds of M\u03a9) \u2014 very little current leaks through. Degraded insulation lets more current through \u2014 lower IR reading.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "Why does a Megger use DC voltage for testing instead of AC?",
    "a": "AC would cause capacitive leakage current, making the insulation seem worse than it is; DC only measures true resistive leakage",
    "opts": ["AC would cause capacitive leakage current, making the insulation seem worse than it is; DC only measures true resistive leakage", "AC is too dangerous", "DC is required by SOLAS", "AC cannot generate high enough voltage"],
    "exp": "AC voltage charges and discharges the winding capacitance every half-cycle, creating a capacitive current that adds to the measured leakage current, making the insulation appear worse than it is. DC voltage: after the initial capacitive charging current dies away (typically 30-60 seconds), only true resistive leakage current remains \u2014 giving an accurate measurement of insulation quality.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "What voltage Megger should be used to test a standard 440V motor on a ship?",
    "a": "500V DC",
    "opts": ["500V DC", "250V DC", "1000V DC", "5000V DC"],
    "exp": "500V DC megger for 440V equipment (IEC 60364 / IEEE 43 standard). The test voltage is approximately equal to the rated voltage to adequately stress the insulation without exceeding its dielectric strength. Using 1000V on a 440V motor is acceptable for additional stress testing but risks damaging weakened insulation. Never use 5000V on 440V equipment.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "What voltage Megger should be used to test a 6.6kV High Voltage motor?",
    "a": "5000V DC (or 2500V DC depending on maker instructions)",
    "opts": ["5000V DC (or 2500V DC depending on maker instructions)", "500V DC", "50000V DC", "1000V AC"],
    "exp": "5000V DC megger for 6.6kV HV equipment. General rule: test voltage \u2248 twice the rated voltage + 1000V. For 6.6kV: 2 \u00d7 6600 + 1000 = 14,200V (for Hi-Pot) but for routine IR testing, 5000V DC is standard. Reference: IEC 60034-1, IEEE 43. Using 500V would apply insufficient stress to reveal degradation in HV insulation.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "What is the general rule of thumb for minimum acceptable Insulation Resistance?",
    "a": "Rated Voltage in kV + 1 Megohm (e.g., 440V = 0.44 + 1 = 1.44 M\u03a9)",
    "opts": ["Rated Voltage in kV + 1 Megohm (e.g., 440V = 0.44 + 1 = 1.44 M\u03a9)", "100 Ohms", "1000 Megohms", "Zero Ohms"],
    "exp": "IEC standard: Minimum IR (M\u03a9) = Working Voltage (kV) + 1. Examples: 440V (0.44kV) motor: minimum = 0.44 + 1 = 1.44 M\u03a9 \u2248 1 M\u03a9. 3.3kV motor: minimum = 3.3 + 1 = 4.3 M\u03a9. 6.6kV motor: minimum = 6.6 + 1 = 7.6 M\u03a9. These are absolute minimums \u2014 in practice, aim for 10\u00d7 or more of these values.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "For a 440V motor in service, what is practically considered the absolute minimum safe IR before energising?",
    "a": "1 Megohm (though >5 M\u03a9 is preferred)",
    "opts": ["1 Megohm (though >5 M\u03a9 is preferred)", "100 k\u03a9", "1000 M\u03a9", "0.1 M\u03a9"],
    "exp": "1 M\u03a9 is the absolute minimum (from IR = kV + 1 rule: 0.44kV + 1 = 1.44 M\u03a9, rounded to 1 M\u03a9). Below 1 M\u03a9: do NOT energise \u2014 risk of insulation flashover causing motor winding damage and earth fault. Preferred: >5 M\u03a9 for new or recently dried motor. New motor should read hundreds of M\u03a9. Trend monitoring: compare to previous readings to identify degradation.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "Before meggering a motor, what is the absolute most critical safety step?",
    "a": "Ensure the circuit is isolated, locked out, tagged out (LOTO), and proven dead",
    "opts": ["Ensure the circuit is isolated, locked out, tagged out (LOTO), and proven dead", "Disconnect the earth wire", "Start the generator", "Wear rubber gloves"],
    "exp": "LOTO (Lock Out, Tag Out): (1) Isolate the motor at the MCC/starter. (2) Lock the isolator in the OFF position with a personal padlock. (3) Attach a danger tag. (4) Verify dead: test with approved voltage detector. Only THEN connect the megger. This prevents the motor from being started while the megger is connected \u2014 which would destroy the megger and electrocute the tester.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "What MUST be disconnected before meggering an alternator or motor circuit?",
    "a": "Sensitive electronics like the AVR, VFDs, or soft starters, as high voltage will destroy them",
    "opts": ["Sensitive electronics like the AVR, VFDs, or soft starters, as high voltage will destroy them", "The main bearings", "The cooling fan", "The space heater"],
    "exp": "Disconnect: (1) AVR (Automatic Voltage Regulator) from alternator field terminals \u2014 megger voltage would destroy the semiconductor components. (2) VFDs/soft starters \u2014 semiconductor power devices cannot withstand megger voltage. (3) Electronic protection relays connected to the circuit. (4) Thermistors/PT100 sensors in the winding (use lower voltage 100V megger for these). Leave power cables connected but isolate at switchboard.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "How do you megger a 3-phase motor stator to check phase-to-earth insulation?",
    "a": "Short all 3 phase terminals together, connect the red Megger lead to the phases, and the black lead to the motor earth/casing",
    "opts": ["Short all 3 phase terminals together, connect the red Megger lead to the phases, and the black lead to the motor earth/casing", "Connect red to U, black to V", "Connect red to earth, black to neutral", "Apply megger while motor is running"],
    "exp": "Procedure: (1) Isolate motor (LOTO). (2) Short together all three phase terminals (U,V,W) at the terminal box. (3) Connect red (HV) megger lead to the shorted phase terminals. (4) Connect black (earth/return) lead to the motor frame/earth bolt. (5) Apply test voltage (500V DC for 440V motor). (6) Read IR after 60 seconds. (7) Record result. (8) Discharge winding before disconnecting.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "Why is it recommended to short the 3 phases together when testing phase-to-earth?",
    "a": "It ensures the entire winding is tested equally to earth and prevents high voltage stress across individual turns",
    "opts": ["It ensures the entire winding is tested equally to earth and prevents high voltage stress across individual turns", "It saves time", "It generates more current", "It prevents the motor from spinning"],
    "exp": "Shorting all three phases: (1) Tests all three windings simultaneously in one operation. (2) Ensures equal voltage stress across all windings \u2014 avoids over-stressing one phase. (3) Prevents inter-winding breakdown: if phases were tested individually, the non-tested phases would be at a potential between earth and the test voltage, risking insulation failure between phases.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "How long should the Megger voltage be applied for a standard IR reading?",
    "a": "1 minute (60 seconds) to allow the reading to stabilise",
    "opts": ["1 minute (60 seconds) to allow the reading to stabilise", "1 second", "10 minutes", "Until the battery dies"],
    "exp": "60 seconds (1 minute) is the standard for a conventional IR reading. During the first 30-60 seconds, capacitive charging current flows (not insulation quality). After 60 seconds, this decays substantially and the reading approaches the true resistive leakage value. This 60-second reading is used for the PI denominator (IR\u2081). Always state: 'IR at 1 minute = X M\u03a9'.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "After finishing a Megger test, what MUST be done before touching the terminals?",
    "a": "Discharge the winding by holding the earth lead to the terminals for at least 30 seconds (windings act like capacitors and store lethal charge)",
    "opts": ["Discharge the winding by holding the earth lead to the terminals for at least 30 seconds (windings act like capacitors and store lethal charge)", "Start the motor immediately", "Wash hands", "Reverse the megger leads"],
    "exp": "DISCHARGE the winding: Connect the earth lead from the megger to the test terminals and hold for a minimum of 30-60 seconds (longer for large HV machines \u2014 up to 5 minutes). Windings are capacitors \u2014 they store the applied DC test voltage as electrostatic charge. A large motor winding charged to 5000V will discharge through the person touching it, potentially causing a lethal electric shock.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "What happens to Insulation Resistance as the temperature of the motor increases?",
    "a": "IR drops significantly; it roughly halves for every 10\u00b0C rise in temperature",
    "opts": ["IR drops significantly; it roughly halves for every 10\u00b0C rise in temperature", "IR increases", "IR stays exactly the same", "IR doubles"],
    "exp": "IR decreases approximately by half for every 10\u00b0C rise (rule of thumb). Reason: heat increases molecular motion in the insulating material, increasing the mobility of charge carriers (electrons and ions), reducing resistivity. Standard correction: measure at site temperature and correct to 40\u00b0C reference using: IR(40\u00b0C) = IR(T) \u00d7 0.5^((T-40)/10). Always record temperature alongside IR value.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "What is the Polarisation Index (PI) test?",
    "a": "The ratio of the IR reading at 10 minutes divided by the IR reading at 1 minute (PI = IR10 / IR1)",
    "opts": ["The ratio of the IR reading at 10 minutes divided by the IR reading at 1 minute (PI = IR10 / IR1)", "The ratio of voltage to current", "The difference between phase U and V", "A test of the magnetic poles"],
    "exp": "PI = IR\u2081\u2080 / IR\u2081 (10-minute IR reading divided by 1-minute IR reading). In clean dry insulation, IR continues to rise from 1 to 10 minutes as the insulation polarises (absorbs DC charge \u2014 dielectric absorption). High PI = insulation still absorbing charge = clean and dry. In contaminated/wet insulation, IR stays flat (leakage dominates) = PI near 1.0.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "Why is the PI test better than a simple 1-minute IR test?",
    "a": "It reveals moisture and contamination that a 1-minute test might miss, and is independent of temperature variations",
    "opts": ["It reveals moisture and contamination that a 1-minute test might miss, and is independent of temperature variations", "It is faster", "It uses less battery", "It tests the copper resistance"],
    "exp": "PI is temperature-independent (both IR\u2081 and IR\u2081\u2080 decrease equally with temperature, so their ratio stays constant). A simple IR reading changes dramatically with temperature \u2014 difficult to compare readings taken at different temperatures. PI reveals the condition of the insulation qualitatively \u2014 how well it absorbs charge (good insulation) vs. constant leakage path (contaminated insulation).",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "In a good, dry motor insulation, what happens to the IR reading over 10 minutes?",
    "a": "It steadily INCREASES because the insulation absorbs the DC charge (polarisation), causing leakage current to decrease",
    "opts": ["It steadily INCREASES because the insulation absorbs the DC charge (polarisation), causing leakage current to decrease", "It decreases rapidly", "It stays exactly the same", "It drops to zero"],
    "exp": "In dry, clean insulation: IR increases continuously over 10 minutes as the insulation material polarises (dipole molecules align to the applied electric field \u2014 dielectric absorption). The capacitive charging current decays, and only a very small true leakage current remains. Typical behaviour: IR\u2081 = 100 M\u03a9, IR\u2081\u2080 = 250 M\u03a9, PI = 250/100 = 2.5 (good).",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "If the insulation is wet or contaminated with carbon dust, what happens during a 10-minute PI test?",
    "a": "The reading stays flat (constant leakage path through moisture/dirt), resulting in a PI ratio near 1.0",
    "opts": ["The reading stays flat (constant leakage path through moisture/dirt), resulting in a PI ratio near 1.0", "The reading shoots up to infinity", "The megger explodes", "The motor starts spinning"],
    "exp": "Moisture and carbon provide a continuous conductive path through the insulation. Current flows constantly \u2014 there is no dielectric absorption effect. IR reading stays flat or may even slightly decrease as the test voltage causes additional ion migration. Result: IR\u2081 \u2248 IR\u2081\u2080, PI \u2248 1.0. Condemns the motor \u2014 do not energise. Dry out and test again.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "What is an excellent, healthy PI value?",
    "a": "Greater than 2.0 (typically 2.0 to 4.0)",
    "opts": ["Greater than 2.0 (typically 2.0 to 4.0)", "Exactly 1.0", "Less than 1.0", "0.5"],
    "exp": "PI > 4.0 = Excellent (new or recently serviced motor). PI 2.0-4.0 = Good (acceptable for service). PI 1.5-2.0 = Fair (monitor closely). PI 1.0-1.5 = Poor (insulation may be wet or contaminated \u2014 investigate). PI < 1.0 = Dangerous (declining resistance indicates progressive failure in progress). IEEE 43 recommendation: PI \u2265 2.0 for acceptable insulation condition.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "If a PI test results in a value of 1.1, what does this indicate?",
    "a": "Poor insulation, likely wet or contaminated; the motor should be dried/cleaned and not energised",
    "opts": ["Poor insulation, likely wet or contaminated; the motor should be dried/cleaned and not energised", "Excellent insulation", "The megger is broken", "The motor is ready to run"],
    "exp": "PI = 1.1 means IR\u2081\u2080 barely exceeds IR\u2081 \u2014 virtually no dielectric absorption is occurring. The insulation is saturated with moisture or contaminated with carbon/salt. The constant leakage current path dominates, masking any polarisation effect. Action: Do NOT energise. Remove motor, inspect winding for moisture/contamination, apply space heater current to dry out, re-test after 24-48 hours of heating.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "What is the DAR (Dielectric Absorption Ratio) test?",
    "a": "Similar to PI, but quicker: it is the ratio of IR at 60 seconds divided by IR at 30 seconds",
    "opts": ["Similar to PI, but quicker: it is the ratio of IR at 60 seconds divided by IR at 30 seconds", "A test of the physical hardness of the insulation", "A test of the motor's horsepower", "A test of the AC voltage"],
    "exp": "DAR = IR\u2086\u2080 / IR\u2083\u2080 (60-second reading divided by 30-second reading). Faster than the full 10-minute PI test \u2014 suitable for field checks when time is limited. Same principle: healthy insulation shows IR still rising between 30 and 60 seconds (ratio > 1.0). Contaminated insulation shows flat response (ratio \u2248 1.0). Not as discriminating as PI but useful for quick field assessment.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "When would you use DAR instead of PI?",
    "a": "When a quick field check is needed and a full 10-minute PI test is impractical",
    "opts": ["When a quick field check is needed and a full 10-minute PI test is impractical", "When testing high voltage cables only", "When the motor is running", "When the megger is out of battery"],
    "exp": "DAR is used when: (1) A quick decision is needed \u2014 motor must return to service quickly. (2) Time constraints in port turnaround. (3) As a screening test \u2014 if DAR is clearly good (>1.6), proceed; if borderline, perform full PI. (4) For smaller motors where time to full PI is impractical. PI remains the preferred standard for HV machines and critical equipment.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "What is a good acceptable DAR value?",
    "a": "Greater than 1.4",
    "opts": ["Greater than 1.4", "Exactly 1.0", "0.5", "Less than 1.0"],
    "exp": "DAR > 1.4 = Good. DAR 1.25-1.4 = Acceptable. DAR < 1.25 = Questionable \u2014 consider full PI test. Compare to IEEE 43 recommendations for the specific insulation class. Always take temperature into account \u2014 cold insulation will show better DAR than hot insulation. Record temperature at time of measurement.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "If a ship's alternator was submerged in water, cleaned, and baked, which test confirms it is dry inside?",
    "a": "The Polarisation Index (PI) test (must be >2.0)",
    "opts": ["The Polarisation Index (PI) test (must be >2.0)", "A 1-second continuity test", "Visual inspection", "Checking the paint color"],
    "exp": "The Polarisation Index (PI) test is definitive. After drying: initial IR\u2081 reading may look acceptable (false positive due to surface drying). The PI test reveals if the core insulation is truly dry: moisture deep in the winding still present = flat PI \u2248 1.0 despite acceptable IR\u2081. Target: PI > 2.0 with IR\u2081 > 100 M\u03a9 before returning to service. Test at operating temperature.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "Can you perform a PI test using AC voltage?",
    "a": "No, it must be DC voltage because AC causes continuous capacitive charging/discharging, masking the polarisation effect",
    "opts": ["No, it must be DC voltage because AC causes continuous capacitive charging/discharging, masking the polarisation effect", "Yes, AC is preferred", "Yes, but only at 60Hz", "Yes, if using a multimeter"],
    "exp": "No. AC voltage prevents the dielectric absorption (polarisation) effect from developing \u2014 the field reverses every half-cycle, forcing dipole molecules to constantly reverse alignment. The capacitive charging and discharging current would dominate, masking any true absorption trend. DC is essential for PI testing because only DC allows the progressive build-up of polarisation current that distinguishes good from bad insulation.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "What should you do if an essential motor has an IR of 0.5 M\u03a9?",
    "a": "Do not start it; apply space heaters or run heating current through it to dry it out until IR improves",
    "opts": ["Do not start it; apply space heaters or run heating current through it to dry it out until IR improves", "Start it to dry it out with heat", "Spray it with water", "Bypass the breaker"],
    "exp": "0.5 Mohm is below the minimum acceptable 1 Mohm (from IEC rule: kV + 1 = 0.44 + 1 = 1.44 Mohm minimum). Do NOT energise. Actions: (1) Apply anti-condensation heaters if fitted. (2) Connect controlled drying current through windings (10% rated current on two phases). (3) Inspect for water ingress at shaft seal and conduit entries. (4) Re-test IR every 4 hours. Return to service only when IR > 1 Mohm AND PI > 2.0 at operating temperature.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "Why are space heaters fitted inside large marine alternators and motors?",
    "a": "To keep the winding temperature slightly above ambient, preventing condensation/moisture buildup while stopped",
    "opts": ["To keep the winding temperature slightly above ambient, preventing condensation/moisture buildup while stopped", "To keep the engine room warm", "To preheat the bearings", "To burn off dust"],
    "exp": "When a large machine is stopped, metal cools below ambient dew point \u2014 moisture condenses on windings. Even brief condensation periods can drop IR from hundreds of M\u03a9 to dangerous levels. Space heaters (typically 200-500W, thermostatically controlled) maintain winding temperature 5-10\u00b0C above ambient, preventing condensation. Connected to the emergency switchboard so they remain powered when the machine is offline.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "During a megger test, what is 'Guard Terminal' used for?",
    "a": "It bypasses surface leakage current (e.g., across dirty insulators) so the meter only measures true internal insulation leakage",
    "opts": ["It bypasses surface leakage current (e.g., across dirty insulators) so the meter only measures true internal insulation leakage", "To physically guard the user from shocks", "To hold the test leads", "To connect to 220V mains"],
    "exp": "The Guard terminal shorts out surface leakage current paths (e.g., current flowing along dirty or damp insulator surfaces rather than through the bulk insulation). By connecting Guard to the surface path, that leakage current bypasses the meter and flows directly to the earth terminal without being measured. The meter then measures only true volumetric insulation resistance, giving a more accurate bulk IR reading.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "What is the primary cause of insulation degradation on ships?",
    "a": "Heat (thermal aging), moisture, salt air, and oil/carbon contamination",
    "opts": ["Heat (thermal aging), moisture, salt air, and oil/carbon contamination", "Too much voltage", "Running the motor too fast", "Magnetic interference"],
    "exp": "Four main degradation mechanisms: (1) Thermal aging \u2014 heat causes polymer chain breakdown in insulation materials (each 10\u00b0C above rated temperature halves insulation life). (2) Moisture \u2014 water reduces dielectric strength dramatically. (3) Contamination \u2014 oil, carbon dust, salt create conductive paths. (4) Mechanical damage \u2014 vibration, repeated start-stop cycles cause micro-cracks. All four are present in marine environments simultaneously.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "If the megger reads exactly ZERO ohms immediately upon pressing test, what does it mean?",
    "a": "There is a dead short circuit to earth (or you forgot to remove the earthing strap)",
    "opts": ["There is a dead short circuit to earth (or you forgot to remove the earthing strap)", "Perfect insulation", "The battery is dead", "The motor is highly efficient"],
    "exp": "Zero ohms = dead short between the test conductor and earth. Possible causes: (1) Earth clip accidentally still attached to the phase terminal being tested (test setup error \u2014 most common). (2) Phase winding has a complete insulation breakdown with direct contact to the motor frame. (3) A jumper wire or earthing lead left connected. Check setup first \u2014 remove any earthing straps, re-verify isolation before concluding insulation failure.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "What must you NEVER do while a megger test is active?",
    "a": "Touch the test leads or the motor terminals, as the DC voltage is lethal",
    "opts": ["Touch the test leads or the motor terminals, as the DC voltage is lethal", "Look at the display", "Write down the reading", "Stand on a rubber mat"],
    "exp": "NEVER touch the test leads, terminals, or any connected conductor while a megger test is active. The Megger applies 500V-5000V DC to the circuit. This voltage can cause: (1) Lethal electric shock directly. (2) Electrostatic energy stored in the winding capacitance can discharge through you even after the meter is switched off. Always discharge the test circuit before touching any part.",
    "cat": "Megger, IR Test & PI Test",
    "id": ""
  },
  {
    "q": "What is the purpose of the Preferential Trip (Load Shedding) system?",
    "a": "To automatically disconnect non-essential loads when a generator is overloaded, preventing a complete blackout",
    "opts": ["To automatically disconnect non-essential loads when a generator is overloaded, preventing a complete blackout", "To trip the main generator when a fault occurs", "To start the emergency generator", "To protect motors from short circuits"],
    "exp": "The Preferential Trip (PT) automatically sheds non-essential electrical loads when a generator is overloaded, preventing the overcurrent relay (OCR) from tripping the generator ACB and causing a complete blackout. By dropping galley ovens, accommodation HVAC, and other non-essential loads before the OCR operates, essential services (navigation, steering, fire pumps) continue to receive power.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "Why is a Preferential Trip better than letting the Overcurrent Relay (OCR) operate?",
    "a": "Losing non-essential loads is better than the OCR tripping the generator and causing a total ship blackout",
    "opts": ["Losing non-essential loads is better than the OCR tripping the generator and causing a total ship blackout", "It is cheaper to replace", "It uses less electricity", "It makes a louder alarm"],
    "exp": "OCR operation disconnects the GENERATOR from the busbar \u2014 complete blackout. All loads including essential safety loads (navigation lights, steering gear, fire pumps, GMDSS) lose power. Preferential trip removes only specific non-essential loads while keeping the generator connected \u2014 essential services continue uninterrupted. SOLAS requires certain loads to be protected from preferential trip shedding.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "How does the Preferential Trip system detect an overload?",
    "a": "Through a Current Transformer (CT) monitoring the generator output current",
    "opts": ["Through a Current Transformer (CT) monitoring the generator output current", "By measuring the voltage drop", "By measuring the frequency increase", "By measuring the temperature of the switchboard"],
    "exp": "A Current Transformer (CT) on the main busbar continuously monitors generator output current. The CT secondary signal feeds an overload relay (typically set at 90-95% of rated current). When current exceeds the setpoint for the preset time delay (dashpot timer typically 5-15 seconds), the relay energises and trips non-essential loads sequentially. This time delay prevents nuisance trips during short-duration motor starting surges.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "What is typically the threshold for Stage 1 of load shedding?",
    "a": "When generator load reaches approximately 90% to 95% of its rated capacity",
    "opts": ["When generator load reaches approximately 90% to 95% of its rated capacity", "When load reaches 50%", "When load reaches 150%", "When voltage drops to zero"],
    "exp": "Stage 1 typically activates when generator output current reaches 90-95% of rated current (or 90-95% of kW rating). Example: 750 kW generator \u2192 Stage 1 trips at approximately 675-712 kW load. The exact threshold is set on the preferential trip relay during commissioning based on the specific generator's rated capacity and the criticality of the connected loads. Documented in the ship's Load Analysis.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "Why is there a time delay (e.g., 5-10 seconds) before the preferential trip sheds the first load?",
    "a": "To prevent nuisance tripping during temporary high-current events, like starting a large motor",
    "opts": ["To prevent nuisance tripping during temporary high-current events, like starting a large motor", "To give the engineers time to run to the ECR", "To let the computer reboot", "To save battery power"],
    "exp": "Motor starting surges cause brief current spikes (typically 5-8\u00d7 FLC lasting 2-10 seconds) that would falsely trigger load shedding if there was no delay. The time delay (5-15 seconds typically) allows transient starting surges to pass without unnecessary load shedding. Only a sustained overload persisting beyond the time delay triggers actual load shedding. The delay must be shorter than the OCR operate time to shed loads before a blackout occurs.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "What was traditionally used to create the time delay in older preferential trip relays?",
    "a": "A pneumatic/hydraulic dashpot (piston with a restricted orifice)",
    "opts": ["A pneumatic/hydraulic dashpot (piston with a restricted orifice)", "A digital microprocessor", "A long coil of wire", "A heavy weight"],
    "exp": "A dashpot mechanism \u2014 a small cylinder containing oil with a needle valve orifice. An armature or piston moves through the oil at a rate controlled by the needle valve opening. A wide orifice = fast movement = short delay. A narrow orifice = slow movement = long delay. The mechanical dashpot was adjustable (turning the needle valve) but subject to oil viscosity changes with temperature. Modern electronic timers (digital) replaced dashpots on newer installations.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "If the generator current drops below the threshold during the time delay, what happens?",
    "a": "The timer resets and no load is shed",
    "opts": ["The timer resets and no load is shed", "It sheds the load anyway", "The generator trips", "The alarm sounds forever"],
    "exp": "The time delay timer resets to zero. The preferential trip relay returns to its armed/ready state without shedding any loads. This is the desired behaviour \u2014 the timer prevents nuisance tripping during legitimate transient overloads (large motor starts, cargo crane operation peaks). Only sustained overloads that remain above the threshold for the full time delay period result in actual load shedding.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "What types of loads are shed in STAGE 1 of a preferential trip?",
    "a": "Non-essential loads like galley ovens, water heaters, and laundry equipment",
    "opts": ["Non-essential loads like galley ovens, water heaters, and laundry equipment", "Steering gear", "Navigation lights", "Fire pump"],
    "exp": "Stage 1 sheds the most non-essential loads first: (1) Galley/pantry heating elements and ovens. (2) Domestic water heaters. (3) Laundry equipment. (4) Hotel cabin HVAC and fan coil units. (5) Workshop non-essential equipment. These loads have no safety impact and their loss is immediately acceptable. Stage 1 typically removes 10-20% of ship's total load.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "If shedding Stage 1 loads does not resolve the overload, what happens next?",
    "a": "Stage 2 activates after an additional time delay, shedding further loads like HVAC and deck equipment",
    "opts": ["Stage 2 activates after an additional time delay, shedding further loads like HVAC and deck equipment", "The generator trips immediately", "The main engine stops", "The emergency generator starts"],
    "exp": "If current remains above threshold after Stage 1 shedding, Stage 2 activates (after another brief time delay \u2014 typically 5-10 seconds after Stage 1). Stage 2 sheds less critical but more significant loads: larger HVAC compressors, cargo ventilation fans, bow thruster (if not in use), hotel deck lighting. Each stage progressively sheds more load until the generator is relieved or all non-essential loads are shed.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "Name three essential loads that must NEVER be connected to a preferential trip circuit.",
    "a": "Steering gear, Fire pump, Navigation/GMDSS equipment",
    "opts": ["Steering gear, Fire pump, Navigation/GMDSS equipment", "Galley ovens, AC compressor, Air compressor", "Fresh water generator, Purifiers, Engine room fans", "Bow thruster, Cargo pumps, Crane"],
    "exp": "SOLAS II-1 mandated loads that must NEVER be preferentially tripped: (1) Steering gear power supply. (2) Navigation lights and shapes. (3) Fire detection and fire alarm systems. (4) Fire pumps and emergency fire pump. (5) Emergency bilge pump. (6) GMDSS communication equipment. (7) Watertight door power. All these are protected against load shedding by design and by SOLAS legal requirement.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "Is the Emergency Bilge Pump allowed to be shed by the preferential trip?",
    "a": "No, it is an essential safety service and must never be shed",
    "opts": ["No, it is an essential safety service and must never be shed", "Yes, in Stage 1", "Yes, in Stage 3", "Only if the ship is sinking"],
    "exp": "No. The emergency bilge pump is an SOLAS-mandated essential service under SOLAS II-1/Reg 35. It must remain available under all conditions, including during a generator overload. It is connected to the emergency switchboard (or directly protected from preferential trip). Shedding the emergency bilge pump during flooding would be catastrophic \u2014 it would prevent pumping out flooding water when most needed.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "What happens if the overload persists and exceeds the generator capacity even after all preferential trip stages have operated?",
    "a": "The main Overcurrent Relay (OCR) will trip the generator ACB to protect the generator, resulting in a blackout",
    "opts": ["The main Overcurrent Relay (OCR) will trip the generator ACB to protect the generator, resulting in a blackout", "The generator will run until it catches fire", "The preferential trip will reset and try again", "The ship will switch to battery power automatically"],
    "exp": "If all stages of preferential trip have operated and the generator is still overloaded, the Overcurrent Relay (OCR) will eventually operate and trip the generator ACB \u2014 causing a total blackout. At this point, the emergency generator should auto-start within 45 seconds (SOLAS requirement). The root cause of the persistent overload must be investigated: unexpected large load connected, generator fault, or PMS failure.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "In modern Power Management Systems (PMS), how is load shedding handled?",
    "a": "The PMS computer continuously monitors load and digitally commands breakers to open based on programmed logic, replacing discrete relays",
    "opts": ["The PMS computer continuously monitors load and digitally commands breakers to open based on programmed logic, replacing discrete relays", "It is done manually by the Chief Engineer", "It uses mechanical dashpots", "It is no longer required by SOLAS"],
    "exp": "Modern PMS uses a priority table programmed into a PLC/computer. Each load is assigned a priority number (1=highest priority/last to shed, 10=lowest/first to shed). When the PMS detects overload, it automatically commands contactors to open in priority order \u2014 starting with the lowest priority. This is faster, more precise, and more sophisticated than old mechanical preferential trip relays. PMS also logs all shedding events.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "Besides load shedding, what else might a modern PMS do if it detects an impending overload?",
    "a": "Automatically start the standby generator and parallel it to the busbar",
    "opts": ["Automatically start the standby generator and parallel it to the busbar", "Automatically stop the main engine", "Discharge the batteries", "Open the bus tie breaker"],
    "exp": "Modern PMS proactive actions: (1) Automatically start and connect the standby generator BEFORE the overload occurs (prevents shedding entirely). (2) Send a start command to the standby generator when load exceeds 85% of online capacity. (3) Reject start requests from heavy consumers (e.g., bow thruster) until sufficient generation capacity is available. (4) Unload one generator to allow load-sharing adjustment before shedding.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "If a surveyor asks, 'Can the preferential trip shed the steering gear?', you answer:",
    "a": "Absolutely NOT. Steering is a critical safety load and is hardwired to prevent load shedding.",
    "opts": ["Absolutely NOT. Steering is a critical safety load and is hardwired to prevent load shedding.", "Yes, in Stage 3", "Only when the ship is in open sea", "Yes, but only for 5 seconds"],
    "exp": "Absolutely not. SOLAS Chapter II-1 Regulation 29 mandates that steering gear must be maintained operational under all circumstances. The steering gear is explicitly protected from preferential tripping. It is connected either directly (bypassing the preferential trip circuit) or to a protected feeder that is excluded from all load shedding schemes. Any ship where steering gear could be tripped by a PT relay would fail class survey.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "What is 'Sequential Load Restoration'?",
    "a": "The process of restarting motors one-by-one with time delays after a blackout, to prevent overloading the generator with massive simultaneous starting currents",
    "opts": ["The process of restarting motors one-by-one with time delays after a blackout, to prevent overloading the generator with massive simultaneous starting currents", "Shedding loads in sequence", "Replacing fuses in order", "Starting the main engine cylinders in sequence"],
    "exp": "After a blackout is recovered (generator reconnected to busbar), loads cannot all be restarted simultaneously \u2014 the combined motor starting surges would immediately overload the generator and cause a second blackout. Sequential load restoration starts motors one at a time with controlled time delays between each start, allowing each motor to accelerate to full speed and return to normal running current before the next motor starts.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "Why can't all pumps be restarted simultaneously after a blackout is recovered?",
    "a": "Motors draw 5-8x normal current on startup; starting all at once would immediately overload and trip the generator again",
    "opts": ["Motors draw 5-8x normal current on startup; starting all at once would immediately overload and trip the generator again", "The switchboard would melt", "The pumps would spin backwards", "The pipes would burst from pressure"],
    "exp": "Each induction motor draws 5-8\u00d7 its full load current (FLC) during the 3-10 second acceleration period. If 10 pumps each drawing 8\u00d7 FLC all start simultaneously, the total starting current could be 80\u00d7 normal \u2014 immediately overloading the generator and tripping it again. Sequential starting limits instantaneous current to that of one motor starting at a time, preventing a repeated blackout.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "During sequential load restoration, what type of pump is usually given highest priority (starts first)?",
    "a": "Sea water cooling pump (to re-establish cooling and prevent immediate overheating)",
    "opts": ["Sea water cooling pump (to re-establish cooling and prevent immediate overheating)", "Fresh water generator", "Galley exhaust fan", "Sewage treatment plant"],
    "exp": "Cooling seawater pumps are started first in the restoration sequence \u2014 they must be running before main engine lub oil pumps can be safely started (engine bearings require cooling). Typical sequence: (1) Emergency services confirm running. (2) Seawater cooling pumps. (3) Freshwater cooling pumps. (4) Lubricating oil pumps. (5) Fuel oil service pumps. (6) Auxiliary boiler / purifiers. (7) Non-essential loads last.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "Who or what controls the sequential load restoration on a modern ship?",
    "a": "The Power Management System (PMS) executes it automatically via programmed timers",
    "opts": ["The Power Management System (PMS) executes it automatically via programmed timers", "The Captain", "The AB on watch", "The preferential trip relay"],
    "exp": "Modern ships: PMS (Power Management System) automatically executes the pre-programmed sequential restart sequence. Each load group is assigned a restart priority and time delay. The PMS monitors generator loading after each start before allowing the next start. Older ships: the ETO manually starts each motor in the correct sequence from the ECR, observing the ammeters to confirm each motor has stabilised before starting the next.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "What is the typical time delay between starting successive large motors during sequential restoration?",
    "a": "Usually 30 seconds to 2 minutes, allowing the previous motor's starting current to settle",
    "opts": ["Usually 30 seconds to 2 minutes, allowing the previous motor's starting current to settle", "1 millisecond", "1 hour", "There is no delay"],
    "exp": "Typically 10-30 seconds between each large motor start \u2014 sufficient for the starting current surge to decay to running current (usually 3-10 seconds for the motor to accelerate) plus a safety margin. The engineer observes the generator ammeter: when current returns to near its pre-start level, the next motor can be started. Large bow thrusters or cargo pumps may require 30-60 second delays.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "Which of the following is typically the LAST to be restored in a sequential start?",
    "a": "HVAC / Accommodation Air Conditioning (large load, non-essential for engine operation)",
    "opts": ["HVAC / Accommodation Air Conditioning (large load, non-essential for engine operation)", "Main Lube Oil Pump", "Fuel Oil Circulating Pump", "Sea Water Pump"],
    "exp": "Non-essential loads (accommodation HVAC, galley equipment, laundry) are restored last \u2014 only after all machinery essential to propulsion and safety is running. Also last to restart: bow thruster (high kW draw), heavy cargo equipment. The principle: safety and propulsion first, comfort and convenience last. Some PMS systems have a separate manual step for non-essential loads to prevent automatic reconnection.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "How does a ship's PMS know which generator is the 'Standby' generator?",
    "a": "It is pre-selected by the engineer on the PMS panel (e.g., Gen 1 Duty, Gen 2 Standby)",
    "opts": ["It is pre-selected by the engineer on the PMS panel (e.g., Gen 1 Duty, Gen 2 Standby)", "It guesses randomly", "It uses the one with the most fuel", "It is hardwired at the shipyard and cannot be changed"],
    "exp": "The PMS continuously monitors: (1) Each generator's circuit breaker status (open/closed). (2) Generator output current and power. (3) PMS priority settings configured during commissioning (Standby 1, Standby 2, etc.). The standby generator is the one designated as next to start in the configured priority order. The operator can also manually designate standby priority via the PMS touchscreen.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "What is 'Heavy Consumer Request' in a PMS?",
    "a": "Before starting a massive load (like a bow thruster), the system asks the PMS for permission; PMS ensures enough generators are running before granting start permission",
    "opts": ["Before starting a massive load (like a bow thruster), the system asks the PMS for permission; PMS ensures enough generators are running before granting start permission", "A request for more food in the galley", "A request to run all cargo pumps at 110%", "A request to stop the preferential trip"],
    "exp": "Heavy Consumer Request (HCR): Before a large load (bow thruster, stern thruster, cargo cranes, large compressors) is started, the PMS is sent an advance request signal (typically from the control desk or BMS). The PMS checks if sufficient generation capacity is available. If yes: it may start the standby generator first, then permits the heavy consumer start. If no: PMS blocks the start and raises an alarm \u2014 'Insufficient Generation Capacity'.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "What happens if a Heavy Consumer Request is denied by the PMS?",
    "a": "The load cannot be started until the PMS automatically starts and parallels an additional generator",
    "opts": ["The load cannot be started until the PMS automatically starts and parallels an additional generator", "The PMS trips the whole board", "The load starts anyway and trips the generator", "The alarm sounds in the captain's cabin"],
    "exp": "The start command is blocked \u2014 the contactor/starter for the heavy consumer does not energise. An alarm message appears on the PMS display: 'Heavy Consumer Start Denied' or 'Insufficient Power Available'. The operator must either: (1) Start an additional generator to increase available capacity, then retry. (2) Manually override the PMS (requires authority \u2014 documented in SMS). (3) Wait until other large loads finish.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "What is the difference between Load Shedding and Load Sharing?",
    "a": "Load shedding disconnects non-essential loads during overload; Load sharing equally distributes the kW load among running parallel generators",
    "opts": ["Load shedding disconnects non-essential loads during overload; Load sharing equally distributes the kW load among running parallel generators", "They are the exact same thing", "Load shedding is for AC, Load sharing is for DC", "Load shedding adds loads, Load sharing removes loads"],
    "exp": "Load Shedding: Emergency response \u2014 automatically disconnecting loads to reduce total consumption when generation is insufficient (overload protection). Load Sharing: Normal operation \u2014 distributing the active kW load (via governor droop) and reactive kVAR (via AVR droop) equally between multiple generators running in parallel. Load sharing is continuous; load shedding is an emergency event. Both are managed by the PMS.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "If Generator 1 and Generator 2 are running in parallel, what ensures they share the active kW load equally?",
    "a": "The electronic governors of the prime movers (engines) adjust fuel based on signals from the load sharing controller",
    "opts": ["The electronic governors of the prime movers (engines) adjust fuel based on signals from the load sharing controller", "The AVRs", "The preferential trip relay", "The bus tie breaker"],
    "exp": "Governor Droop: Both generators must have identical droop settings (typically 4-5%). The governor reduces engine speed (fuel injection) as load increases. With matched droop, if one generator takes more load its frequency drops slightly \u2014 its governor reduces fuel; the other generator's frequency is relatively higher \u2014 its governor increases fuel. This automatic action balances kW load to match droop settings.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "If Generator 1 and Generator 2 are running in parallel, what ensures they share the reactive kVAR load equally?",
    "a": "The Automatic Voltage Regulators (AVRs) adjusting the excitation current",
    "opts": ["The Automatic Voltage Regulators (AVRs) adjusting the excitation current", "The engine governors", "The fuel racks", "The reverse power relay"],
    "exp": "AVR Droop (reactive droop/compounding): Both generators must have identical AVR droop settings. AVR droop reduces excitation (and therefore terminal voltage) as reactive current (kVAR) increases. With matched droop, if one generator takes more kVAR, its terminal voltage drops slightly \u2014 AVR reduces excitation; the other generator compensates. This balances kVAR sharing. Mismatched AVR droop causes circulating reactive current (kVAR hunting).",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "What SOLAS regulation mandates that essential services must be maintained under all conditions?",
    "a": "SOLAS Chapter II-1 (Electrical Installations)",
    "opts": ["SOLAS Chapter II-1 (Electrical Installations)", "MARPOL Annex VI", "STCW 95", "MLC 2006"],
    "exp": "SOLAS Chapter II-1, Part D (Electrical installations) \u2014 specifically Regulations 42-44 covering emergency power sources. Regulation 43 (cargo ships): emergency generator must supply essential loads for 18 hours. Also relevant: SOLAS II-1/Reg 30 (main source of electrical power must maintain essential services in any one compartment flooding). The MSC Circular and class rules define which services are 'essential'.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "Can the preferential trip settings (threshold and time) be adjusted by the ship's crew?",
    "a": "Yes, but they are normally set during commissioning and should only be altered with careful calculation and authorization",
    "opts": ["Yes, but they are normally set during commissioning and should only be altered with careful calculation and authorization", "No, they are welded shut", "Yes, any cadet can change them daily", "No, they adjust themselves automatically based on weather"],
    "exp": "Yes, the settings can be adjusted, but only by qualified personnel following the manufacturer's manual and with approval: (1) Changes must be documented and recorded in the electrical log. (2) New settings must be tested to verify correct operation. (3) Any changes to class-approved settings may require class surveyor notification. Tampering with preferential trip settings without authorization is an ISM non-conformity. Settings are typically sealed after commissioning survey.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  },
  {
    "q": "Summary: What is the worst case scenario the Preferential Trip is designed to avoid?",
    "a": "A total ship blackout caused by generator overcurrent trip (OCR) during a heavy load situation",
    "opts": ["A total ship blackout caused by generator overcurrent trip (OCR) during a heavy load situation", "A fire in the galley", "The emergency generator starting", "The bow thruster failing to start"],
    "exp": "The preferential trip is designed to prevent a TOTAL BLACKOUT. Without PT: a sustained overload would activate the OCR, tripping the generator ACB and causing complete loss of power to ALL loads including navigation lights, steering gear, fire pumps, and GMDSS. A total blackout at sea is a life-threatening emergency. By shedding non-essential loads before the OCR operates, the PT keeps the generator connected and essential services powered.",
    "cat": "Load Shedding & Preferential Trip",
    "id": ""
  }
]);
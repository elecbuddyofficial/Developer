window.loadQuizzes("T06_Sensors", [
  {
    "q": "What does RTD stand for?",
    "a": "Resistance Temperature Detector",
    "opts": [
      "Resistance Temperature Detector",
      "Resistance Thermal Device",
      "Resonant Temperature Diode",
      "Reactive Thermal Detector"
    ],
    "exp": "RTD = Resistance Temperature Detector. The electrical resistance of the metal element changes predictably with temperature. In marine applications PT100 (platinum, 100 ohm at 0 deg C) is the standard type.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What is the fundamental working principle of an RTD?",
    "a": "The resistance of a metal increases predictably with temperature (PTC)",
    "opts": [
      "The resistance of a metal increases predictably with temperature (PTC)",
      "It generates a millivolt signal proportional to temperature",
      "It expands physically to move a pointer",
      "It changes capacitance with temperature"
    ],
    "exp": "RTD uses the Positive Temperature Coefficient (PTC) property of metals - resistance increases with temperature. For platinum: 100 ohm at 0 deg C, rising 0.385 ohm per deg C. This linear relationship makes RTDs highly accurate for process temperature measurement.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What does PT100 mean?",
    "a": "A platinum RTD that has a resistance of 100 ohms at 0°C",
    "opts": [
      "A platinum RTD that has a resistance of 100 ohms at 0°C",
      "A temperature sensor that maxes out at 100°C",
      "A pressure transmitter rated for 100 bar",
      "A platinum thermocouple with 100 microvolts output"
    ],
    "exp": "PT100 = Platinum (Pt) RTD with 100 ohm resistance at 0 deg C. The 100 ohm reference makes calibration straightforward. Resistance at 100 deg C = 138.5 ohm, at 200 deg C = 175.8 ohm. Standard marine temperature sensor for bearings, coolers, and jacket water.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Why is platinum typically used for marine RTDs?",
    "a": "It is highly stable, linear, and corrosion resistant",
    "opts": [
      "It is highly stable, linear, and corrosion resistant",
      "It is the cheapest metal available",
      "It has a negative temperature coefficient",
      "It generates the highest voltage"
    ],
    "exp": "Platinum is chosen for RTDs because: (1) Highly stable - resistance-temperature relationship doesn't drift over time. (2) Good linearity - 0.385 ohm/deg C across wide range. (3) Corrosion resistant - survives marine environment. (4) Wide range: -200 deg C to +850 deg C. Other metals (nickel, copper) are less stable and less linear.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "In a PT100, what is the typical resistance change per degree Celsius?",
    "a": "0.385 ohms",
    "opts": [
      "0.385 ohms",
      "1 ohm",
      "10 ohms",
      "0.01 ohms"
    ],
    "exp": "PT100 sensitivity = 0.385 ohm per deg C (Callendar-Van Dusen equation constant alpha = 0.00385). At 0 deg C: 100 ohm. At 100 deg C: 100 + (100 x 0.385) = 138.5 ohm. At 200 deg C: 175.8 ohm. This is why the instrument must be calibrated to this specific coefficient.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What would be the approximate resistance of a PT100 at 100°C?",
    "a": "138.5 ohms",
    "opts": [
      "138.5 ohms",
      "200 ohms",
      "100 ohms",
      "0 ohms"
    ],
    "exp": "PT100 at 100 deg C = 100 + (100 x 0.385) = 138.5 ohm. Formula: R(T) = 100 x (1 + 0.00385 x T) for temperatures above 0 deg C. This value is used to verify calibration - an ohmmeter reading of 138.5 ohm confirms accurate measurement at boiling point.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Why is a 3-wire connection commonly used for RTDs on ships?",
    "a": "To compensate for the resistance of the long lead wires",
    "opts": [
      "To compensate for the resistance of the long lead wires",
      "To provide three separate temperature readings",
      "To supply 3-phase power to the sensor",
      "Because one wire is a spare"
    ],
    "exp": "In a 2-wire RTD circuit, cable resistance (e.g., 50m of 0.5 mm cable = 1.7 ohm) adds directly to the measured resistance, causing falsely high temperature readings. A 3-wire connection feeds an identical resistance through the third wire, allowing the measurement bridge to subtract the lead resistance and read only the RTD resistance.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What happens if you use a 2-wire connection for a PT100 located 50 metres away?",
    "a": "The lead wire resistance adds to the sensor resistance, causing a falsely high temperature reading",
    "opts": [
      "The lead wire resistance adds to the sensor resistance, causing a falsely high temperature reading",
      "The signal will be too weak to reach the panel",
      "The RTD will act as a thermocouple",
      "Nothing, 2-wire is perfectly accurate"
    ],
    "exp": "50m cable (copper, 0.5mm) has approximately 1.7 ohm resistance per wire. 2-wire circuit: instrument reads RTD + 2 x lead = ~138.5 + 3.4 = 141.9 ohm, equivalent to a 110 deg C reading when actual temperature is 100 deg C. Error increases further from the instrument.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What is the fundamental principle of a thermocouple?",
    "a": "Seebeck Effect: Two dissimilar metals joined at different temperatures generate a small EMF",
    "opts": [
      "Seebeck Effect: Two dissimilar metals joined at different temperatures generate a small EMF",
      "Resistance increases with temperature",
      "Capacitance changes with temperature",
      "Light emission changes with heat"
    ],
    "exp": "Seebeck Effect (1821): When two dissimilar metals are joined at one end (hot junction) and the other ends are at a different temperature (cold junction), a small EMF (millivolts) is generated. The magnitude of the EMF is proportional to the temperature difference between the junctions.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What is the 'hot junction' in a thermocouple circuit?",
    "a": "The measuring end where the two dissimilar metals are joined",
    "opts": [
      "The measuring end where the two dissimilar metals are joined",
      "The terminal block in the control room",
      "The power supply connection",
      "The shielding wire"
    ],
    "exp": "The hot junction (measuring junction) is where the two dissimilar metal wires are welded or crimped together and inserted into the process being measured (e.g., engine exhaust). The cold junction (reference junction) is at the instrument terminals where the temperature is known.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What does a thermocouple actually measure?",
    "a": "The temperature DIFFERENCE between the hot junction and the cold junction",
    "opts": [
      "The temperature DIFFERENCE between the hot junction and the cold junction",
      "Absolute temperature in Kelvin",
      "The resistance of the hot junction",
      "The ambient temperature of the room"
    ],
    "exp": "A thermocouple measures the DIFFERENCE between hot junction temperature and cold junction temperature. It does NOT measure absolute temperature. Cold Junction Compensation (CJC) electronically adds the known cold junction temperature to obtain the true process temperature.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What is the typical output signal type of a thermocouple?",
    "a": "Millivolts (mV)",
    "opts": [
      "Millivolts (mV)",
      "4-20mA",
      "Ohms",
      "Volts (V)"
    ],
    "exp": "Thermocouple output is millivolts (mV) - very small, typically 0-50mV depending on type and temperature range. Type K generates approximately 41 microvolts per deg C. This small signal requires amplification and is susceptible to EMI, unlike the robust 4-20mA signal of an RTD transmitter.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Which type of thermocouple is most commonly used for marine exhaust gas temperature measurement?",
    "a": "Type K (Chromel-Alumel)",
    "opts": [
      "Type K (Chromel-Alumel)",
      "Type T (Copper-Constantan)",
      "Type J (Iron-Constantan)",
      "PT100"
    ],
    "exp": "Type K thermocouple (Chromel-Alumel): Range -200 to 1260 deg C, sensitivity ~41 microvolts/deg C. Used for marine exhaust gas because: high temperature range covers turbocharger temperatures, good oxidation resistance, cost-effective. Type J (Iron-Constantan) used for lower temperatures.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What is 'Cold Junction Compensation' (CJC)?",
    "a": "An electronic correction applied at the instrument terminals to compensate for ambient temperature variations",
    "opts": [
      "An electronic correction applied at the instrument terminals to compensate for ambient temperature variations",
      "Cooling the sensor with water",
      "A method to freeze the RTD",
      "Removing the cold junction completely"
    ],
    "exp": "Cold Junction Compensation adds the cold junction temperature (measured at instrument terminals using a separate temperature sensor like a thermistor) to the thermocouple EMF reading. Without CJC, the instrument would read the temperature difference only, not the absolute hot junction temperature.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Why is CJC necessary?",
    "a": "Because the thermocouple only measures a temperature difference; the instrument needs to know the exact cold junction temperature to calculate the absolute hot junction temperature",
    "opts": [
      "Because the thermocouple only measures a temperature difference; the instrument needs to know the exact cold junction temperature to calculate the absolute hot junction temperature",
      "To prevent the wires from melting",
      "To boost the millivolt signal to 24V",
      "To convert AC to DC"
    ],
    "exp": "A thermocouple outputs a voltage proportional to (T_hot - T_cold). If T_cold varies (as it does in an engine room from 20 deg C to 50 deg C), the same exhaust temperature gives different readings. CJC measures T_cold continuously and adds it to the calculated T_hot so the final reading is always accurate regardless of ambient temperature.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What happens if you connect a Type K thermocouple to an instrument using standard copper cable?",
    "a": "A new thermocouple junction is created at the connection, introducing a large measurement error",
    "opts": [
      "A new thermocouple junction is created at the connection, introducing a large measurement error",
      "It works perfectly fine",
      "The copper cable will melt",
      "The signal changes from mV to mA"
    ],
    "exp": "A new thermocouple junction is created at the copper/Chromel connection point, generating its own parasitic EMF. This completely corrupts the measurement. Each connection between dissimilar metals creates a Seebeck voltage - standard copper cable must NEVER be used to extend thermocouple signals.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What type of cable must be used to extend a thermocouple signal to the control room?",
    "a": "Matching thermocouple extension or compensating cable (same alloy properties)",
    "opts": [
      "Matching thermocouple extension or compensating cable (same alloy properties)",
      "Standard copper electrical wire",
      "Fiber optic cable",
      "Coaxial cable"
    ],
    "exp": "Thermocouple extension cable made from the same alloy materials as the thermocouple itself (Type K extension = Chromel-Alumel). This ensures no new junctions with different EMF characteristics are introduced. The cable has the same Seebeck coefficient as the sensor, maintaining signal integrity.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Comparing RTD and Thermocouple, which is generally more accurate and linear?",
    "a": "RTD",
    "opts": [
      "RTD",
      "Thermocouple",
      "They are exactly the same",
      "Neither is linear"
    ],
    "exp": "RTD (PT100) is more accurate (±0.1 deg C vs ±1-2 deg C for thermocouple) and more linear (stable 0.385 ohm/deg C coefficient). RTD is preferred for precision measurements like bearing temperatures and jacket cooling water. Thermocouple preferred for high temperatures (exhaust gases) where RTD cannot be used.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Comparing RTD and Thermocouple, which has a higher maximum temperature range?",
    "a": "Thermocouple (can measure up to 1600°C+)",
    "opts": [
      "Thermocouple (can measure up to 1600°C+)",
      "RTD",
      "Both max out at 500°C",
      "Both max out at 100°C"
    ],
    "exp": "Thermocouple maximum temperature: Type K up to 1260 deg C, Type R/S up to 1600 deg C. PT100 RTD maximum is typically 600-850 deg C. Marine exhaust gas temperatures of 300-500 deg C can be measured by both, but turbocharger outlet temperatures >600 deg C require thermocouples.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Which sensor suffers from 'self-heating error'?",
    "a": "RTD, because measuring its resistance requires passing a small current through it, creating I2R heat",
    "opts": [
      "RTD, because measuring its resistance requires passing a small current through it, creating I2R heat",
      "Thermocouple, because it generates voltage",
      "Neither",
      "Both equally"
    ],
    "exp": "RTD self-heating error: Measuring resistance requires passing a small current (typically 1-5 mA) through the element. Current through resistance = I²R power dissipation = heat. This raises the element temperature above true process temperature. Minimised by using low excitation current and high-conductivity mounting.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Which sensor is passive (generates its own signal without external power)?",
    "a": "Thermocouple",
    "opts": [
      "Thermocouple",
      "RTD",
      "Thermistor",
      "PT100"
    ],
    "exp": "Thermocouple is passive - it generates its own millivolt EMF from the Seebeck Effect without requiring external power. RTD requires an external current source to measure resistance. This makes thermocouples useful in locations where power is not available or in intrinsically safe circuits.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Where would you typically use a PT100 on a ship?",
    "a": "Main engine bearing temperature monitoring",
    "opts": [
      "Main engine bearing temperature monitoring",
      "Boiler flue gas temperature (400°C+)",
      "Incinerator combustion chamber (1000°C+)",
      "Main engine exhaust gas (450°C+)"
    ],
    "exp": "PT100 applications on ships: (1) Main/auxiliary engine bearing temperatures (30-120 deg C range). (2) Jacket cooling water temperature (60-90 deg C). (3) Lubricating oil temperature. (4) Transformer winding temperature. (5) Refrigeration system temperatures. All within PT100's optimal accuracy range.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Where would you typically use a Type K thermocouple on a ship?",
    "a": "Main engine exhaust gas monitoring",
    "opts": [
      "Main engine exhaust gas monitoring",
      "Cabin air conditioning temperature",
      "Cooling water temperature",
      "Lube oil sump temperature"
    ],
    "exp": "Type K thermocouple applications: (1) Main engine exhaust gas temperature (250-450 deg C). (2) Turbocharger inlet/outlet temperature. (3) Exhaust gas boiler entry temperature. (4) Incinerator temperature monitoring. These all exceed the practical accuracy range of RTDs due to high temperatures.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What is a thermistor?",
    "a": "A semiconductor resistor whose resistance changes rapidly with temperature (usually NTC - Negative Temperature Coefficient)",
    "opts": [
      "A semiconductor resistor whose resistance changes rapidly with temperature (usually NTC - Negative Temperature Coefficient)",
      "A type of thermocouple",
      "A 4-20mA transmitter",
      "A mechanical bimetallic switch"
    ],
    "exp": "Thermistor = Thermally Sensitive Resistor. Made from semiconductor metal oxides. Most are NTC (Negative Temperature Coefficient) - resistance DECREASES with temperature. Changes are large and non-linear (unlike linear RTD). Used in: lifeboat battery temperature, HVAC systems, over-temperature alarms. Not suitable for precision measurement without linearisation.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "If an RTD wire breaks (open circuit), what will the monitoring system usually read?",
    "a": "Maximum off-scale high (infinite resistance)",
    "opts": [
      "Maximum off-scale high (infinite resistance)",
      "Zero degrees",
      "Minimum off-scale low",
      "It will read correctly from the other wires"
    ],
    "exp": "Open circuit RTD: The bridge/measuring circuit sees infinite resistance. The instrument interprets this as an extreme temperature reading - typically maximum scale or off-scale high (> upper alarm limit). This activates a temperature HIGH alarm, alerting operators to investigate the sensor or cable rather than assuming extreme process temperature.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "If a thermocouple wire breaks, what does the instrument detect?",
    "a": "An open circuit (0mV), but most instruments have burnout detection to drive the reading high or low to alarm",
    "opts": [
      "An open circuit (0mV), but most instruments have burnout detection to drive the reading high or low to alarm",
      "Maximum temperature",
      "Minimum temperature",
      "Infinite resistance"
    ],
    "exp": "Broken thermocouple wire = 0 mV output. Most modern instruments have 'burnout' or 'upscale/downscale drive' - they detect the open circuit and drive the displayed value to maximum or minimum to create an alarm. Without this feature, a broken thermocouple would display 0 mV as ambient temperature = cold junction only.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Why are Type K thermocouples preferred for exhaust gas?",
    "a": "They have a wide temperature range and are highly resistant to oxidation at high temperatures",
    "opts": [
      "They have a wide temperature range and are highly resistant to oxidation at high temperatures",
      "They are the most accurate at 20°C",
      "They are made of copper",
      "They generate 4-20mA directly"
    ],
    "exp": "Type K (Chromel-Alumel) advantages for exhaust gas: (1) Temperature range up to 1260 deg C covers all marine exhaust applications. (2) Excellent oxidation resistance at high temperatures in combustion gas atmospheres. (3) Good EMF linearity in the 200-700 deg C exhaust range. (4) Cost-effective and widely available.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What is the typical sensitivity of a Type K thermocouple?",
    "a": "Approx 41 microvolts per degree Celsius",
    "opts": [
      "Approx 41 microvolts per degree Celsius",
      "1 volt per degree",
      "0.385 ohms per degree",
      "4-20mA per degree"
    ],
    "exp": "Type K thermocouple sensitivity = approximately 41 microvolts per deg C (at 500 deg C). At 300 deg C it generates ~12.2 mV, at 500 deg C ~20.6 mV. This small signal requires shielded cable and differential amplifiers to avoid EMI interference from engine room electrical equipment.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Can a PT100 be directly connected to a PLC analogue voltage input card?",
    "a": "No, it requires an RTD input card or a transmitter to convert the resistance to 4-20mA/0-10V",
    "opts": [
      "No, it requires an RTD input card or a transmitter to convert the resistance to 4-20mA/0-10V",
      "Yes, directly with 2 wires",
      "Yes, but only if it's 3-wire",
      "Yes, it generates voltage natively"
    ],
    "exp": "No. A PT100 outputs resistance (100-250 ohm range), not voltage or current. A PLC analogue input card expects 4-20mA or 0-10V. You must use either: (1) An RTD input card (converts resistance directly), or (2) A 2-wire transmitter that powers the RTD and outputs 4-20mA proportional to temperature.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "Why use 3 wires for an RTD?",
    "a": "The third wire allows the bridge circuit to measure and subtract the lead wire resistance, preventing falsely high temperature readings",
    "opts": [
      "The third wire allows the bridge circuit to measure and subtract the lead wire resistance, preventing falsely high temperature readings",
      "To provide power, ground, and signal",
      "To have a backup wire in case one breaks",
      "To shield against electromagnetic interference"
    ],
    "exp": "3-wire RTD compensates for lead wire resistance. A Wheatstone bridge configuration places one lead wire in each measurement arm and one in the reference arm. The bridge subtracts the equal lead resistance from both sides, cancelling its effect. Result: only the RTD element resistance is measured, regardless of cable length.",
    "cat": "Temperature Sensors",
    "id": ""
  },
  {
    "q": "What is the industry standard analogue signal for transmitting instrument readings on ships?",
    "a": "4-20mA current loop",
    "opts": [
      "4-20mA current loop",
      "0-10V DC",
      "1-5V AC",
      "0-20mA"
    ],
    "exp": "4-20 mA current loop is the international standard (IEC 60381-1). Range: 4 mA = 0% process value, 20 mA = 100% process value. Current signal used because: immune to voltage drops over long cable runs, intrinsically safe variants available, wire break detection via 0 mA fault indication.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "Why is a current signal (4-20mA) preferred over a voltage signal (0-10V) for long distances?",
    "a": "Current is immune to voltage drops caused by long cable resistance",
    "opts": [
      "Current is immune to voltage drops caused by long cable resistance",
      "Current travels faster than voltage",
      "Voltage signals cause fires",
      "Current uses thinner wires"
    ],
    "exp": "In a voltage signal (0-10V), cable resistance causes voltage drop = V_received = V_transmitted - (I x R_cable), introducing measurement error. A current loop maintains the same current throughout the series circuit regardless of cable resistance (up to the power supply compliance limit). A 100m cable with 5 ohm resistance still transmits 12 mA accurately.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "How does a 4-20mA loop provide 'wire break' detection?",
    "a": "A broken wire results in 0mA, which is easily distinguished from a valid 4mA (0%) minimum reading",
    "opts": [
      "A broken wire results in 0mA, which is easily distinguished from a valid 4mA (0%) minimum reading",
      "The transmitter sends a digital error code",
      "The voltage spikes to 24V",
      "It sounds a physical buzzer in the transmitter"
    ],
    "exp": "The live zero principle: 4 mA represents 0% (not 0 mA). If a wire breaks, current drops to 0 mA - which is physically impossible in a healthy loop. The control system can therefore distinguish: 4 mA = zero reading (valid), 0 mA = fault (wire break, transmitter failure, or power loss). This enables automatic fault alarming.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "Why is 4mA used as the 'live zero' instead of 0mA?",
    "a": "So the system can differentiate between a true 0% reading (4mA) and a broken wire/failed transmitter (0mA)",
    "opts": [
      "So the system can differentiate between a true 0% reading (4mA) and a broken wire/failed transmitter (0mA)",
      "4mA is the minimum current a wire can carry",
      "0mA causes the cable to corrode",
      "4mA is required to keep the sensor warm"
    ],
    "exp": "If 0 mA represented zero process value, a broken wire would look identical to a zero reading - no fault detection possible. By using 4 mA as the minimum live signal, any current below 4 mA (including 0 mA from a broken wire) indicates a fault condition, not a valid measurement. NAMUR NE43 defines fault signals as <3.6 mA or >21 mA.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "In a 0-10 bar pressure transmitter, what pressure does 12mA represent?",
    "a": "5 bar",
    "opts": [
      "5 bar",
      "10 bar",
      "0 bar",
      "12 bar"
    ],
    "exp": "Linear interpolation: 12 mA is halfway between 4 mA (0 bar) and 20 mA (10 bar). 12 - 4 = 8 mA above minimum, 20 - 4 = 16 mA total span. 8/16 = 50% of span = 5 bar. General formula: Value = LRV + (I - 4) / 16 x (URV - LRV).",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What does it mean if a pressure transmitter outputs 0mA?",
    "a": "There is a FAULT (wire break, loss of power, or transmitter failure)",
    "opts": [
      "There is a FAULT (wire break, loss of power, or transmitter failure)",
      "The pressure is exactly 0 bar",
      "The pressure is negative (vacuum)",
      "The transmitter is perfectly calibrated"
    ],
    "exp": "0 mA means the loop is open (wire break, blown fuse, loss of 24V DC power supply) or the transmitter has failed. 0 mA is NEVER a valid measurement value - the minimum valid reading is 4 mA. The control system will alarm 'sensor fault' or 'loop open'. Must investigate cable continuity and transmitter power supply.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What does it mean if a transmitter outputs 20mA?",
    "a": "The measured value is at 100% of the configured range (full scale)",
    "opts": [
      "The measured value is at 100% of the configured range (full scale)",
      "There is a short circuit",
      "The pressure is 20 bar",
      "The sensor is overheating"
    ],
    "exp": "20 mA = 100% of the configured range (URV = Upper Range Value). For a 0-10 bar transmitter, 20 mA = 10 bar. Note: 20 mA is also the normal maximum - it does NOT indicate a fault. Some transmitters use >20 mA (e.g., 20.5-21 mA) for upscale fault indication per NAMUR NE43.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What is a 'two-wire loop-powered' transmitter?",
    "a": "A transmitter that receives its 24V DC power AND transmits its 4-20mA signal over the same two wires",
    "opts": [
      "A transmitter that receives its 24V DC power AND transmits its 4-20mA signal over the same two wires",
      "A transmitter that uses two wires for signal and two for power",
      "A transmitter that requires a local battery",
      "A transmitter that only sends digital data"
    ],
    "exp": "A 2-wire transmitter takes its operating power AND transmits its signal on the same pair of wires. The 24V DC power supply current enters the transmitter, the transmitter regulates the loop current to 4-20 mA proportional to the measurement, then returns to the supply. No separate power wiring needed. Most marine field instruments are 2-wire.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "Why are current loops highly immune to electromagnetic interference (EMI)?",
    "a": "Induced noise from EMI usually manifests as a small voltage, which does not significantly alter the regulated current in the loop",
    "opts": [
      "Induced noise from EMI usually manifests as a small voltage, which does not significantly alter the regulated current in the loop",
      "Current loops are shielded in lead pipes",
      "EMI only affects AC, not DC",
      "The 4mA zero blocks interference"
    ],
    "exp": "EMI-induced voltage noise (typically 1-10 mV) across a 4-20 mA loop has negligible effect because the current is determined by the transmitter's precision voltage-to-current converter, not by the cable impedance. The same noise voltage across a 0-10V voltage signal creates significant percentage errors (1 mV noise = 0.01% of 10V = still tiny but cumulative).",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What does HART stand for?",
    "a": "Highway Addressable Remote Transducer",
    "opts": [
      "Highway Addressable Remote Transducer",
      "High Ampere Rating Transmitter",
      "Heavy Automation Remote Terminal",
      "Hardware Analogue Routing Table"
    ],
    "exp": "HART = Highway Addressable Remote Transducer. Developed by Rosemount in 1980s, now open standard managed by FieldComm Group. Allows a digital communication channel to be superimposed onto the standard 4-20 mA analogue loop simultaneously, enabling remote configuration, diagnostics, and multiple variable access.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What is the primary function of the HART protocol?",
    "a": "To superimpose digital communication on top of a standard 4-20mA analogue signal",
    "opts": [
      "To superimpose digital communication on top of a standard 4-20mA analogue signal",
      "To replace 4-20mA entirely with digital",
      "To increase the current to 50mA",
      "To convert AC to DC"
    ],
    "exp": "HART provides bidirectional digital communication on the existing 4-20 mA loop wire. Primary uses: (1) Remote zero/span calibration without physical access. (2) Reading secondary variables (e.g., temperature from a pressure transmitter). (3) Diagnostics and self-test. (4) Reading transmitter tag, serial number, and configuration. (5) Enabling Fieldbus migration.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "How does HART transmit digital data without affecting the 4-20mA analogue reading?",
    "a": "It uses Frequency Shift Keying (FSK) where the high frequency AC digital signal has an average value of zero",
    "opts": [
      "It uses Frequency Shift Keying (FSK) where the high frequency AC digital signal has an average value of zero",
      "It stops the 4-20mA signal for a microsecond",
      "It uses a completely separate third wire",
      "It increases the 4-20mA signal slightly"
    ],
    "exp": "HART uses FSK (Frequency Shift Keying): digital 1 = 1200 Hz, digital 0 = 2200 Hz. These AC signals are superimposed on the DC 4-20 mA loop. Because the AC signal has an average value of exactly zero (positive and negative half-cycles cancel), the DC component (the 4-20 mA process signal) is unchanged. Both signals coexist simultaneously.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "In HART FSK, what frequencies are used to represent digital 1 and 0?",
    "a": "1200 Hz and 2200 Hz",
    "opts": [
      "1200 Hz and 2200 Hz",
      "50 Hz and 60 Hz",
      "10 kHz and 20 kHz",
      "1 MHz and 2 MHz"
    ],
    "exp": "HART FSK frequencies: Logic 1 = 1200 Hz, Logic 0 = 2200 Hz. These frequencies were chosen because they are above the bandwidth of standard 4-20 mA analogue systems (DC to ~25 Hz), preventing interference. The AC nature of FSK ensures zero net DC effect on the loop current, protecting the analogue reading.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What is a strict physical requirement to communicate with a HART transmitter using a handheld communicator?",
    "a": "A minimum loop resistance, typically 250 ohms, must be present in the circuit",
    "opts": [
      "A minimum loop resistance, typically 250 ohms, must be present in the circuit",
      "The transmitter must be disconnected from the PLC",
      "The 4-20mA signal must be exactly 12mA",
      "The loop power must be 220V AC"
    ],
    "exp": "A minimum of 250 ohms resistance must be present in the loop circuit. The HART communicator detects the 1200/2200 Hz FSK voltage developed across this resistance. Without sufficient resistance, the digital voltage signal is too small to detect. Most modern DCS input cards have 250 ohm input impedance built in.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "WHY is the 250 ohm resistor necessary for HART communication?",
    "a": "It converts the HART digital current pulses into a voltage signal (min 1V) large enough for the communicator to detect",
    "opts": [
      "It converts the HART digital current pulses into a voltage signal (min 1V) large enough for the communicator to detect",
      "It limits the current to protect the communicator",
      "It prevents the 4-20mA signal from reaching the PLC",
      "It filters out engine room noise"
    ],
    "exp": "Ohm's Law: V = I x R. HART digital current pulses of ~0.5 mA across 250 ohm creates 0.125V (125 mV) signal amplitude - minimum for reliable detection. With only 50 ohm: V = 0.5 x 50 = 25 mV - too small to reliably distinguish from noise. The 250 ohm minimum ensures adequate signal-to-noise ratio.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What happens if you connect a HART communicator to a loop with only 50 ohms of total resistance?",
    "a": "Communication will fail because the digital voltage signal developed across the resistor is too small to read",
    "opts": [
      "Communication will fail because the digital voltage signal developed across the resistor is too small to read",
      "The communicator will burn out",
      "The transmitter will trip the generator",
      "It will work perfectly"
    ],
    "exp": "The HART digital voltage signal developed = 0.5 mA x 50 ohm = 25 mV. The minimum required is typically 125 mV (1200 Hz signal). Communication will fail - the communicator cannot reliably decode the 1200/2200 Hz FSK at this amplitude. Solution: Insert a 250 ohm precision resistor in series with the loop.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What is a 'Smart' transmitter?",
    "a": "A microprocessor-based transmitter that offers digital communication, remote configuration, and self-diagnostics",
    "opts": [
      "A microprocessor-based transmitter that offers digital communication, remote configuration, and self-diagnostics",
      "A transmitter that runs on artificial intelligence",
      "A transmitter that requires no power",
      "Any transmitter with a digital display"
    ],
    "exp": "Smart transmitters contain a microprocessor that: (1) Samples the sensor at high frequency. (2) Applies digital filtering and linearisation. (3) Performs self-diagnostics. (4) Communicates via HART, Foundation Fieldbus, or PROFIBUS. (5) Stores configuration data (tag, range, engineering units). (6) Outputs precise 4-20 mA after digital-to-analogue conversion.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "Which of the following can you do remotely using a HART communicator?",
    "a": "Adjust the Zero and Span (LRV/URV) without physical access to the transmitter",
    "opts": [
      "Adjust the Zero and Span (LRV/URV) without physical access to the transmitter",
      "Physically clean the sensor membrane",
      "Replace the internal battery",
      "Fix a broken impulse line"
    ],
    "exp": "HART remote functions include: (1) Change LRV and URV (zero and span) without physical access. (2) Read the primary variable with 0.1% accuracy. (3) Read secondary variables (e.g., temperature, static pressure on DP transmitter). (4) Run self-test and read diagnostics. (5) Trim the analogue output. (6) Configure damping time constant.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What is 'Sensor Characterisation' or 'Linearisation' in a smart transmitter?",
    "a": "The internal microprocessor correcting non-linear sensor outputs (e.g., square root extraction for DP flow)",
    "opts": [
      "The internal microprocessor correcting non-linear sensor outputs (e.g., square root extraction for DP flow)",
      "Making the transmitter casing perfectly straight",
      "Converting AC to DC",
      "Filtering out water from the sensor"
    ],
    "exp": "Real sensor outputs are often non-linear - e.g., DP flow measurement requires square root extraction (Q ∝ √DP). A smart transmitter's microprocessor applies the mathematical linearisation formula digitally, outputting a 4-20 mA signal that is linear with the actual process variable (flow), not the raw sensor signal (differential pressure).",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "If a smart transmitter's internal electronics fail, what does it typically do?",
    "a": "Drives the current loop to a fail-safe value (e.g., <3.6mA or >21mA) to alert the control system of a fault",
    "opts": [
      "Drives the current loop to a fail-safe value (e.g., <3.6mA or >21mA) to alert the control system of a fault",
      "Outputs exactly 12mA",
      "Maintains the last known good value forever",
      "Starts communicating via WiFi"
    ],
    "exp": "Per NAMUR NE43 standard: on internal failure, the transmitter drives the output to a defined fault state - either <3.6 mA (downscale/low alarm) or >21 mA (upscale/high alarm). The choice is configured by the engineer based on the safe failure direction for that process. Control system alarm responds: 'Instrument fault' rather than acting on a false process reading.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What does LRV and URV stand for in transmitter configuration?",
    "a": "Lower Range Value (4mA point) and Upper Range Value (20mA point)",
    "opts": [
      "Lower Range Value (4mA point) and Upper Range Value (20mA point)",
      "Local Reading Voltage and Universal Reading Voltage",
      "Linear Resistance Value and Uniform Resistance Value",
      "Low Rate Velocity and Upper Rate Velocity"
    ],
    "exp": "LRV = Lower Range Value (4 mA point) - the process value that corresponds to 4 mA output, normally set to 0% of measurement range. URV = Upper Range Value (20 mA point) - the process value that corresponds to 20 mA, normally set to 100% of range. Example: LRV = 0 bar, URV = 10 bar. These are configured digitally via HART.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "Can I read a 4-20mA signal and talk via HART at the exact same time?",
    "a": "Yes, they coexist simultaneously on the same two wires without interfering with each other",
    "opts": [
      "Yes, they coexist simultaneously on the same two wires without interfering with each other",
      "No, you must switch the transmitter to digital mode first",
      "No, HART interrupts the 4-20mA signal",
      "Only if you add a third wire"
    ],
    "exp": "Yes - HART FSK and 4-20 mA analogue coexist on the same two wires simultaneously without interference. The AC HART signal (1200/2200 Hz) is filtered out by the analogue input circuitry; the DC 4-20 mA is filtered out by the HART modem. The control system reads precise process value while the engineer communicates with the transmitter.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "Where is the 250 ohm resistor usually located in a modern IAS/DCS?",
    "a": "It is often built into the analogue input card of the control system (input impedance)",
    "opts": [
      "It is often built into the analogue input card of the control system (input impedance)",
      "Inside the transmitter casing",
      "Inside the HART communicator",
      "At the main switchboard"
    ],
    "exp": "Modern DCS/IAS analogue input cards have approximately 250 ohm input impedance built into the card. This serves as both the signal termination resistor and the HART communication resistor simultaneously. No external resistor needed when connected to a DCS. External 250 ohm resistors are only needed with older 4-wire input cards (0-10V type) or test bench setups.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "If you must connect a HART communicator across a transmitter on a test bench (no PLC connected), what must you wire in?",
    "a": "A 24V power supply and a 250 ohm resistor in series with the loop",
    "opts": [
      "A 24V power supply and a 250 ohm resistor in series with the loop",
      "Just a 24V power supply",
      "A 220V AC supply",
      "A completely shorted loop"
    ],
    "exp": "Bench test setup: 24V DC power supply → 250 ohm precision resistor → transmitter positive terminal → transmitter negative terminal → back to 24V negative. HART communicator clips across the 250 ohm resistor. The 250 ohm drops adequate voltage for HART communication and limits current to safe loop levels.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What is a 'Multivariable' HART transmitter?",
    "a": "A single transmitter that can measure and digitally report multiple variables (e.g., pressure AND temperature) over one pair of wires",
    "opts": [
      "A single transmitter that can measure and digitally report multiple variables (e.g., pressure AND temperature) over one pair of wires",
      "A transmitter with multiple outputs (4-20mA, 0-10V, 3-15psi)",
      "A transmitter that can run on any voltage",
      "A transmitter painted multiple colors"
    ],
    "exp": "A multivariable transmitter measures two or more physical parameters and can report all of them via HART digital communication. Example: Rosemount 3051S DP transmitter measures differential pressure, static pressure, AND temperature internally - reporting all three via HART. Only the primary variable (usually DP) is output as 4-20 mA; the rest are HART digital variables.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What does 'Tag Number' mean in HART terminology?",
    "a": "A digital identifier stored in the transmitter's memory (e.g., 'PT-105') for easy identification",
    "opts": [
      "A digital identifier stored in the transmitter's memory (e.g., 'PT-105') for easy identification",
      "The physical price tag",
      "The MAC address of the device",
      "The barcode on the box"
    ],
    "exp": "Tag Number is an 8-character alphanumeric identifier stored in the transmitter's non-volatile memory (e.g., 'PT-105-A'). It identifies the specific instrument in the loop drawing and P&ID. HART allows reading and writing the tag remotely. Important for maintenance: can identify which transmitter is which without physical labels by reading the tag digitally.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "How do you convert a 4-20mA signal to a 1-5V voltage signal for a PLC input?",
    "a": "Pass the 4-20mA current through a precise 250 ohm precision resistor (V = I x R)",
    "opts": [
      "Pass the 4-20mA current through a precise 250 ohm precision resistor (V = I x R)",
      "Use a step-down transformer",
      "Connect a 24V battery in reverse",
      "It cannot be done"
    ],
    "exp": "Connect a precision 250 ohm resistor across the PLC input terminals. Apply Ohm's Law: V = I x R. At 4 mA: V = 0.004 x 250 = 1.0V. At 20 mA: V = 0.020 x 250 = 5.0V. This produces a 1-5V signal proportional to the 4-20 mA loop. The 250 ohm resistor must be precision (0.1% tolerance) to maintain accuracy.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What is the typical power supply voltage for a standard marine 4-20mA instrument loop?",
    "a": "24V DC",
    "opts": [
      "24V DC",
      "220V AC",
      "110V AC",
      "12V AC"
    ],
    "exp": "24V DC is the standard instrument loop supply voltage (IEC 60381). Minimum supply voltage = V_supply - (I x R_total) must exceed transmitter minimum operating voltage (typically 10-12V). For a 20 mA loop with 600 ohm total (250 ohm load + 350 ohm cable): V_drop = 0.020 x 600 = 12V. Supply of 24V leaves 12V for the transmitter - adequate.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "If a 0-100 deg C temperature transmitter is outputting 8mA, what is the temperature?",
    "a": "25 deg C (25% of range)",
    "opts": [
      "25 deg C (25% of range)",
      "8 deg C",
      "50 deg C",
      "0 deg C"
    ],
    "exp": "Formula: T = LRV + (I - 4) / 16 x (URV - LRV). T = 0 + (8 - 4) / 16 x 100 = 4/16 x 100 = 0.25 x 100 = 25 deg C. The 4-20 mA span (16 mA) represents 100 deg C span. 8 mA is 4 mA above minimum = 25% of span = 25 deg C.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "Why don't we use 0-20mA instead of 4-20mA?",
    "a": "0-20mA cannot distinguish between a true zero reading and a broken wire/power failure",
    "opts": [
      "0-20mA cannot distinguish between a true zero reading and a broken wire/power failure",
      "0-20mA is too difficult to generate",
      "0mA causes the sensor to freeze",
      "0mA violates Ohms Law"
    ],
    "exp": "0-20 mA cannot distinguish between a zero reading (valid, 0 mA output by design) and a circuit fault (broken wire gives 0 mA). The 4 mA live zero creates a fault detection window: any current below 4 mA indicates a problem. This is a fundamental safety requirement for process instrumentation in marine and industrial applications.",
    "cat": "4-20mA & HART",
    "id": ""
  },
  {
    "q": "What does a DP transmitter measure?",
    "a": "The difference between two pressure points (High Side and Low Side)",
    "opts": [
      "The difference between two pressure points (High Side and Low Side)",
      "Absolute pressure",
      "Temperature of the fluid",
      "Velocity of the ship"
    ],
    "exp": "DP (Differential Pressure) transmitter measures the pressure difference between two points: High Side (HP) and Low Side (LP). Output = P_HP - P_LP as a 4-20 mA signal. Used for: flow measurement (orifice plate), level measurement (tank bottom vs atmospheric), filter differential pressure, pump head measurement.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "How is a DP transmitter used to measure fluid flow in a pipe?",
    "a": "An orifice plate creates a pressure drop; the DP across the plate is proportional to flow squared",
    "opts": [
      "An orifice plate creates a pressure drop; the DP across the plate is proportional to flow squared",
      "It measures the speed of the fluid directly",
      "It counts the bubbles in the pipe",
      "It measures the temperature change across the pipe"
    ],
    "exp": "An orifice plate (restriction) is installed in the pipe. Bernoulli's principle: flow accelerates through the restriction, pressure drops. DP transmitter measures pressure difference: High Side upstream, Low Side downstream. Greater flow = greater pressure drop. The DP is proportional to flow squared (Q ∝ √DP).",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "In flow measurement using an orifice plate, what is the relationship between flow rate (Q) and Differential Pressure (DP)?",
    "a": "Flow rate Q is proportional to the square root of DP",
    "opts": [
      "Flow rate Q is proportional to the square root of DP",
      "Flow rate Q is directly proportional to DP",
      "Flow rate Q is inversely proportional to DP",
      "Flow rate Q is equal to DP squared"
    ],
    "exp": "Flow Rate Q = K × √DP, where K is the orifice coefficient. Doubling the flow rate quadruples the DP. Example: if Q = 100 m³/h gives DP = 100 mbar, then Q = 200 m³/h gives DP = 400 mbar. This non-linear relationship requires square root extraction for linear flow indication.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What mathematical operation must be performed on a DP transmitter's output to get a linear flow reading?",
    "a": "Square root extraction",
    "opts": [
      "Square root extraction",
      "Multiplication by pi",
      "Logarithmic scaling",
      "Differentiation"
    ],
    "exp": "Square root extraction: Linear Flow = K × √(DP_transmitter_output). Without this, the flow indicator would be compressed at low flows and expanded at high flows. Smart DP transmitters can perform this internally (configure 'Output = √DP'). Traditional systems used dedicated square root extractors or programmed it in the DCS.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "Where is the High Pressure (HP) side connected when measuring flow with an orifice plate?",
    "a": "Upstream of the orifice plate",
    "opts": [
      "Upstream of the orifice plate",
      "Downstream of the orifice plate",
      "To the atmosphere",
      "To the pump suction"
    ],
    "exp": "HP (High Pressure) side = upstream of the orifice plate, before the restriction. This is where fluid velocity is lower and pressure is higher (Bernoulli). LP (Low Pressure) side = downstream, after the orifice, where velocity is higher and pressure is lower. The DP = P_upstream - P_downstream is proportional to flow.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "Where is the Low Pressure (LP) side connected when measuring flow with an orifice plate?",
    "a": "Downstream of the orifice plate",
    "opts": [
      "Downstream of the orifice plate",
      "Upstream of the orifice plate",
      "To the bottom of the tank",
      "To the condenser"
    ],
    "exp": "LP side connects downstream of the orifice plate where fluid has accelerated through the restriction, creating a lower pressure zone. The impulse line from the downstream LP tap connects to the low side of the DP transmitter. The transmitter measures the difference: HP (upstream) minus LP (downstream) = DP proportional to flow².",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "If flow increases, what happens to the Differential Pressure (DP)?",
    "a": "It increases (output goes towards 20mA)",
    "opts": [
      "It increases (output goes towards 20mA)",
      "It decreases (output goes towards 4mA)",
      "It stays the same",
      "It oscillates"
    ],
    "exp": "DP increases as the square of flow (DP ∝ Q²). Double the flow = 4× the DP. Half the flow = ¼ the DP. This quadratic relationship is why low flow readings are compressed and less accurate. Minimum recommended range is typically 10% of full scale (1% DP = 10% flow). Flow meters are most accurate in the upper 50-100% range.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "How is a DP transmitter used to measure liquid level in an open tank?",
    "a": "The HP side is connected to the bottom of the tank, and LP is vented to atmosphere",
    "opts": [
      "The HP side is connected to the bottom of the tank, and LP is vented to atmosphere",
      "HP and LP are both connected to the bottom",
      "HP is connected to the top, LP to the bottom",
      "It measures the time it takes sound to bounce off the surface"
    ],
    "exp": "HP side connects to the bottom of the tank (measures total head pressure of liquid column). LP side vents to atmosphere (reference = atmospheric pressure). DP = ρ × g × h. Empty tank: DP = 0 = 4 mA. Full tank: DP = maximum = 20 mA. No moving parts, no contact with liquid.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "In level measurement, what determines the Differential Pressure (DP) at the bottom of the tank?",
    "a": "Liquid density x gravity x liquid height (rho x g x h)",
    "opts": [
      "Liquid density x gravity x liquid height (rho x g x h)",
      "Tank volume x liquid viscosity",
      "Tank width x fluid temperature",
      "Atmospheric pressure x tank height"
    ],
    "exp": "DP = ρ × g × h, where ρ = liquid density (kg/m³), g = 9.81 m/s², h = liquid height (m). For water at 1000 kg/m³: 1 metre height = 9810 Pa = 98.1 mbar. The DP transmitter converts this hydrostatic pressure to 4-20 mA proportional to level.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "For a DP level transmitter on an open tank, what does an empty tank equal in terms of DP and mA?",
    "a": "DP = 0, Output = 4mA",
    "opts": [
      "DP = 0, Output = 4mA",
      "DP = Maximum, Output = 20mA",
      "DP = 0, Output = 0mA",
      "DP = Minimum, Output = 12mA"
    ],
    "exp": "Empty tank: liquid height = 0, therefore DP = ρ × g × 0 = 0 Pa. Transmitter output = 4 mA (live zero, LRV). This 4 mA minimum confirms the loop is healthy even when the tank is empty. A reading of 0 mA would indicate a fault, not an empty tank.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "For a DP level transmitter on an open tank, what does a full tank equal in terms of DP and mA?",
    "a": "DP = Maximum, Output = 20mA",
    "opts": [
      "DP = Maximum, Output = 20mA",
      "DP = 0, Output = 4mA",
      "DP = Maximum, Output = 12mA",
      "DP = 0, Output = 20mA"
    ],
    "exp": "Full tank: maximum liquid height reached, maximum DP = ρ × g × h_max. Transmitter output = 20 mA (URV = Upper Range Value). The transmitter is calibrated so the rated maximum DP corresponds exactly to 20 mA = 100% level reading.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What is 'Zero Suppression' in a DP level transmitter setup?",
    "a": "Adjusting the zero calibration to cancel out the fixed hydrostatic head of a liquid-filled connecting pipe (wet leg)",
    "opts": [
      "Adjusting the zero calibration to cancel out the fixed hydrostatic head of a liquid-filled connecting pipe (wet leg)",
      "Setting the 4-20mA signal to 0mA",
      "Removing the DP transmitter from the tank",
      "Closing the valve to suppress flow"
    ],
    "exp": "When the transmitter is mounted below the bottom tap (in a wet leg installation), the reference liquid in the LP leg creates a constant positive pressure on the LP side. This offsets the zero reading. Zero suppression subtracts this constant hydrostatic offset so the transmitter reads 4 mA when the tank is empty, despite the constant LP pressure.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "Why might a local pressure gauge show 3 bar, but the remote transmitter shows 2.5 bar?",
    "a": "The transmitter is mounted higher than the gauge; hydrostatic head in the connecting pipe reduces the pressure reading at the transmitter",
    "opts": [
      "The transmitter is mounted higher than the gauge; hydrostatic head in the connecting pipe reduces the pressure reading at the transmitter",
      "The transmitter is broken and must be replaced",
      "The gauge is always more accurate than a transmitter",
      "The fluid is flowing backwards"
    ],
    "exp": "If the transmitter is mounted physically higher than the pressure tapping point, the liquid column in the connecting pipe creates a hydrostatic head loss: ΔP = ρ × g × Δh. For water at 5 metres height above tap: ΔP = 1000 × 9.81 × 5 = 49 kPa = 0.49 bar. Transmitter reads 3 - 0.5 = 2.5 bar. This offset must be corrected by zero elevation adjustment.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "Besides height difference, what is another common cause for a pressure mismatch between a gauge and a transmitter?",
    "a": "Impulse line partial blockage or leak",
    "opts": [
      "Impulse line partial blockage or leak",
      "The ship is rolling",
      "The generator frequency dropped",
      "The 4-20mA loop is running at 12mA"
    ],
    "exp": "Common causes: (1) Partial blockage of the impulse line - build-up of scale, wax, or debris reduces the transmitted pressure. (2) Leak in the impulse line - pressure bleeds off causing a lower reading. (3) Air pocket trapped in the impulse line (for liquid service). (4) Different process temperatures at different measurement points.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What is an 'impulse line'?",
    "a": "The small diameter tubing that connects the process pipe/tank to the instrument",
    "opts": [
      "The small diameter tubing that connects the process pipe/tank to the instrument",
      "The wire carrying the 4-20mA signal",
      "The air supply line for a pneumatic valve",
      "The main fuel line to the engine"
    ],
    "exp": "The small-diameter tubing (typically 6-12mm bore) connecting the process pipe or vessel to the DP transmitter. Must be: same material as process fluid compatibility, routed with no pockets where gas can collect (for liquid) or liquid can settle (for gas), insulated for hot processes, and purged/filled correctly before commissioning.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What happens if the HP impulse line to a DP flow transmitter gets completely blocked?",
    "a": "The reading will freeze at the last value and fail to respond to flow changes",
    "opts": [
      "The reading will freeze at the last value and fail to respond to flow changes",
      "The reading drops to zero immediately",
      "The reading jumps to maximum immediately",
      "The transmitter blows a fuse"
    ],
    "exp": "HP side pressure is frozen at the last static value. DP = HP (frozen) - LP (live). If flow continues, LP changes but HP doesn't. The DP reading becomes nonsensical - possibly going negative or to a fixed incorrect value. The reading will not track actual flow changes. Maintenance required: isolate, vent, and clear the blockage.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What happens if the LP impulse line to a DP flow transmitter leaks?",
    "a": "The measured DP will falsely increase, causing a higher flow reading than actual",
    "opts": [
      "The measured DP will falsely increase, causing a higher flow reading than actual",
      "The measured DP will drop to zero",
      "The transmitter outputs 0mA",
      "The flow in the pipe stops"
    ],
    "exp": "LP side pressure drops toward atmospheric. DP = HP (live) - LP (lower than real). The measured DP is artificially high, causing the flow reading to indicate higher flow than actual. In safety systems, this could mask a loss of flow condition. Regular impulse line inspection is part of preventive maintenance.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "Why do DP transmitters typically feature a 3-valve or 5-valve manifold block?",
    "a": "To safely isolate the transmitter, equalize the HP and LP sides, and vent pressure for calibration or removal",
    "opts": [
      "To safely isolate the transmitter, equalize the HP and LP sides, and vent pressure for calibration or removal",
      "To control the flow of fuel to the engine",
      "To mix three different fluids together",
      "To amplify the 4-20mA signal"
    ],
    "exp": "3-valve manifold (2 block valves + 1 equalizer): block valves isolate HP and LP from process; equalizer valve equalizes both sides to zero DP before removal or calibration. 5-valve manifold adds 2 vent/calibration valves. Allows safe transmitter removal without process shutdown. Equalizing before closing block valves prevents single-sided overpressure damaging the sensor diaphragm.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "When removing a DP transmitter from service using a 3-valve manifold, what is the CRITICAL first step?",
    "a": "Open the equalizing valve to equalize pressure on both sides of the sensor diaphragm before closing the block valves",
    "opts": [
      "Open the equalizing valve to equalize pressure on both sides of the sensor diaphragm before closing the block valves",
      "Disconnect the 4-20mA wires while power is on",
      "Smash the glass display",
      "Close the LP block valve immediately"
    ],
    "exp": "Step 1: Open the equalizing valve (middle valve) first - this equalizes HP and LP pressure on both sides of the sensing diaphragm. Both sides see the same pressure simultaneously, preventing one-sided overpressure from bursting the diaphragm. THEN close both block valves. Reversing this order = risk of destroying the transmitter diaphragm.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What internal component actually senses the pressure in a modern DP transmitter?",
    "a": "A capacitive or piezoresistive sensing diaphragm",
    "opts": [
      "A capacitive or piezoresistive sensing diaphragm",
      "A mechanical bourdon tube",
      "A bi-metallic strip",
      "A float switch"
    ],
    "exp": "Capacitive sensing diaphragm: a metal diaphragm deflects under pressure, changing the capacitance between the diaphragm and fixed capacitor plates. The capacitance change is measured by an electronic circuit and converted to a 4-20 mA output. Some use piezoresistive strain gauge sensors. Both have no moving parts and are very reliable.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "Can a DP transmitter be used in a pressurized/closed tank?",
    "a": "Yes, HP connects to the bottom (liquid), LP connects to the top (vapour space) to cancel out the blanket pressure",
    "opts": [
      "Yes, HP connects to the bottom (liquid), LP connects to the top (vapour space) to cancel out the blanket pressure",
      "No, it only works on open tanks",
      "Yes, but only if the pressure is below 1 bar",
      "No, pressurized tanks require radar sensors only"
    ],
    "exp": "Yes. HP side = bottom of tank (liquid column + blanket gas pressure). LP side = top of tank vapour space (blanket gas pressure only). DP = (liquid column + blanket pressure) - (blanket pressure) = liquid column only. The blanket gas pressure cancels out because it acts equally on both sides. This is essential for pressurised fuel or chemical tanks.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "In a closed tank DP level setup, if the blanket pressure increases by 1 bar, how does the DP change?",
    "a": "It doesn't change; the blanket pressure acts equally on both HP and LP sides and cancels out",
    "opts": [
      "It doesn't change; the blanket pressure acts equally on both HP and LP sides and cancels out",
      "DP increases by 1 bar",
      "DP decreases by 1 bar",
      "The transmitter will break"
    ],
    "exp": "DP is unchanged. The 1 bar increase applies equally to both HP (bottom) and LP (top) connections. DP = P_bottom - P_top = (P_liquid + P_blanket) - P_blanket = P_liquid. The blanket pressure completely cancels, regardless of its magnitude. This is the key advantage of DP measurement for closed pressurised tanks.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What is a 'Wet Leg' in DP level measurement?",
    "a": "An impulse line filled with a reference liquid to prevent process vapors from condensing inconsistently in the line",
    "opts": [
      "An impulse line filled with a reference liquid to prevent process vapors from condensing inconsistently in the line",
      "A leaking pipe that needs repair",
      "A sensor that has fallen into the tank",
      "A type of marine hull coating"
    ],
    "exp": "A wet leg is an impulse line deliberately kept filled with a reference liquid (same density as process, or a separate sealing fluid) from the LP tap to the transmitter. Used when process vapours might condense inconsistently in the LP impulse line, creating variable hydrostatic offsets. The wet leg creates a constant, known reference pressure on the LP side.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "If measuring steam flow with an orifice plate, why are condensation pots used?",
    "a": "To ensure the impulse lines are always filled with water, protecting the transmitter from high-temperature live steam",
    "opts": [
      "To ensure the impulse lines are always filled with water, protecting the transmitter from high-temperature live steam",
      "To generate extra steam for the whistle",
      "To measure the temperature of the steam",
      "To trap impurities in the steam"
    ],
    "exp": "Hot steam in impulse lines would constantly flash to steam and back, creating variable hydrostatic columns and measurement errors. Condensation pots (small chambers above the taps) capture and hold condensed water, ensuring both HP and LP impulse lines are always filled with liquid water at a constant density. This gives stable, repeatable DP readings.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What unit is Differential Pressure typically measured in on shipboard transmitters?",
    "a": "Millibar (mbar) or mmH2O (millimeters of water column)",
    "opts": [
      "Millibar (mbar) or mmH2O (millimeters of water column)",
      "MegaPascals (MPa)",
      "Volts (V)",
      "Hertz (Hz)"
    ],
    "exp": "Common units on ships: mbar (millibar), Pa (Pascal), mmH₂O (millimetres water column), or bar. 1 mbar = 100 Pa = 10.2 mmH₂O. Modern smart transmitters display in engineering units configured during commissioning. Traditional gauges use mmH₂O or bar. Flow computers typically use Pa or mbar.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "If an orifice plate is installed backwards in a pipe, what happens?",
    "a": "The flow coefficient changes drastically, causing completely inaccurate flow readings",
    "opts": [
      "The flow coefficient changes drastically, causing completely inaccurate flow readings",
      "The flow in the pipe reverses direction",
      "The pipe bursts",
      "It works perfectly fine"
    ],
    "exp": "Orifice plates are bevelled (sharp edge faces upstream). Backwards installation: the chamfered edge faces upstream instead of downstream, creating a different and unstable flow coefficient - actual Cd (discharge coefficient) differs significantly from the calibration value. Flow readings will be 5-20% in error. Also: the pressure tapping ports may face wrong direction. Must verify plate orientation marks during commissioning; 'FLOW' arrow on plate indicates correct direction.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What is 'Turndown Ratio' in a smart DP transmitter?",
    "a": "The ratio of the maximum measurable span to the minimum measurable span (e.g., 100:1 means a 100 bar sensor can be accurately scaled down to 1 bar)",
    "opts": [
      "The ratio of the maximum measurable span to the minimum measurable span (e.g., 100:1 means a 100 bar sensor can be accurately scaled down to 1 bar)",
      "The speed at which you can turn the isolation valve",
      "The ratio of voltage to current",
      "The physical size reduction of the sensor"
    ],
    "exp": "Turndown ratio = maximum calibrated span / minimum calibrated span. A transmitter with 100:1 turndown and maximum DP range of 1000 mbar can be accurately configured down to 10 mbar span. High turndown allows one transmitter to serve multiple flow ranges without replacement. Traditional dumb transmitters typically have 10:1 turndown.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "How do you perform a basic zero check on a DP transmitter in the field?",
    "a": "Close the block valves and open the equalizing valve; the output should drop exactly to 4.00mA (0 DP)",
    "opts": [
      "Close the block valves and open the equalizing valve; the output should drop exactly to 4.00mA (0 DP)",
      "Disconnect the wires and measure with a multimeter",
      "Vent both sides to atmosphere",
      "Press the reset button on the PLC"
    ],
    "exp": "Procedure: (1) Close both block valves. (2) Open equalizing valve - transmitter now sees 0 DP (equal pressure both sides). (3) Output should read exactly 4.000 mA. If not at 4 mA, the zero has drifted and must be re-trimmed. (4) After check: close equalizer, open block valves to return to service. This verifies zero drift without process shutdown.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "Why are DP transmitters widely used on ships instead of more advanced flow meters?",
    "a": "They are rugged, reliable, have no moving parts in the flow stream, and are well understood",
    "opts": [
      "They are rugged, reliable, have no moving parts in the flow stream, and are well understood",
      "They are the only legal type allowed by SOLAS",
      "They are completely immune to freezing",
      "They generate their own electricity"
    ],
    "exp": "DP transmitters with orifice plates: (1) No moving parts in the flow stream - extremely reliable in marine environment. (2) Proven technology - well understood by marine engineers. (3) Maintainable on board - orifice plates can be removed and cleaned. (4) Work with liquids, gases, and steam. (5) Lower cost than Coriolis or magnetic meters.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "If a DP transmitter shows 12mA, what is the DP as a percentage of the calibrated span?",
    "a": "50%",
    "opts": [
      "50%",
      "12%",
      "75%",
      "0%"
    ],
    "exp": "Formula: % = (I - 4) / 16 × 100 = (12 - 4) / 16 × 100 = 8/16 × 100 = 50%. So 12 mA = 50% of the calibrated DP span. If the transmitter is calibrated for 0-100 mbar, 12 mA represents 50 mbar. Always remember: 4 mA = 0%, 12 mA = 50%, 20 mA = 100%.",
    "cat": "DP Transmitter (Flow & Level)",
    "id": ""
  },
  {
    "q": "What is the most accurate type of O2 analyser used for boiler flue gas monitoring?",
    "a": "Paramagnetic O2 Analyser",
    "opts": [
      "Paramagnetic O2 Analyser",
      "Electrochemical O2 Analyser",
      "Zirconia O2 Analyser",
      "Galvanic O2 Analyser"
    ],
    "exp": "Paramagnetic O2 Analyser - uses the unique paramagnetic property of oxygen molecules. It provides very high accuracy (±0.1% O2) and excellent long-term stability with no consumable electrolyte. Standard for continuous boiler flue gas monitoring to optimise combustion efficiency (target flue gas O2: 2-4% for efficient combustion).",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the fundamental working principle of a Paramagnetic O2 Analyser?",
    "a": "Oxygen molecules are strongly attracted to magnetic fields, displacing a suspended test body proportionally to O2 concentration",
    "opts": [
      "Oxygen molecules are strongly attracted to magnetic fields, displacing a suspended test body proportionally to O2 concentration",
      "Oxygen reacts with a chemical cell to generate voltage",
      "Oxygen absorbs infrared light at a specific wavelength",
      "Oxygen changes the resistance of a heated wire"
    ],
    "exp": "Oxygen is strongly paramagnetic (attracted to magnetic fields) unlike most other gases. A dumbbell-shaped glass body filled with non-magnetic gas is suspended in a strong magnetic field. When O2-containing sample gas surrounds it, O2 molecules crowd into the magnetic field, displacing the test body. The angular displacement is proportional to O2 concentration.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "Why are other gases in the flue not measured by the paramagnetic sensor?",
    "a": "Most other gases are diamagnetic (repelled by magnetic fields) and do not interfere with the paramagnetic oxygen",
    "opts": [
      "Most other gases are diamagnetic (repelled by magnetic fields) and do not interfere with the paramagnetic oxygen",
      "Other gases are filtered out before entering the sensor",
      "Other gases are burned inside the sensor",
      "Other gases are heavier and sink to the bottom"
    ],
    "exp": "Common flue gases (CO2, N2, SO2, CO, H2O) are diamagnetic - they are weakly repelled by magnetic fields. Their effect on the suspended test body is negligible compared to paramagnetic oxygen. This property makes the paramagnetic sensor extremely selective for oxygen, unlike electrochemical cells which can be cross-sensitive to H2S.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What type of O2 analyser is typically found in portable enclosed space entry meters?",
    "a": "Electrochemical (Galvanic) O2 Analyser",
    "opts": [
      "Electrochemical (Galvanic) O2 Analyser",
      "Paramagnetic O2 Analyser",
      "Zirconia O2 Analyser",
      "Infrared O2 Analyser"
    ],
    "exp": "Electrochemical (Galvanic) O2 Analyser - a consumable cell containing a gold cathode, lead anode, and KOH electrolyte. Compact, portable, requires no calibration gases for normal use (just fresh air). Battery powered. Reads 0-25% O2 range. Lifespan typically 1-3 years as the lead anode is consumed.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "How does an Electrochemical O2 Analyser work?",
    "a": "Oxygen diffuses through a membrane and reacts at a cathode, generating a small electrical current proportional to O2 concentration",
    "opts": [
      "Oxygen diffuses through a membrane and reacts at a cathode, generating a small electrical current proportional to O2 concentration",
      "It uses a magnetic field to attract oxygen",
      "It uses a high temperature ceramic cell",
      "It measures the speed of sound through the gas"
    ],
    "exp": "O2 diffuses through a Teflon membrane to a gold cathode where it is reduced: O2 + 2H2O + 4e⁻ → 4OH⁻. The lead anode oxidizes: Pb → Pb²⁺ + 2e⁻. This electrochemical reaction generates a small current proportional to O2 partial pressure. The instrument amplifies and displays this as % O2.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is a major disadvantage of the Electrochemical O2 sensor?",
    "a": "The chemical electrolyte is consumed over time, resulting in a limited lifespan (1-3 years)",
    "opts": [
      "The chemical electrolyte is consumed over time, resulting in a limited lifespan (1-3 years)",
      "It requires a 440V power supply",
      "It only works at very high temperatures",
      "It is extremely large and heavy"
    ],
    "exp": "The lead anode is consumed irreversibly in the oxidation reaction. Exposure to 20.9% O2 continuously depletes the anode. Typical service life: 1-3 years depending on use. Cannot be regenerated - entire cell must be replaced. Also temperature sensitive (must apply temperature correction) and affected by H2S which oxidises the electrolyte.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is a Zirconia O2 Analyser primarily used for?",
    "a": "Measuring oxygen directly in very high-temperature flue gases without cooling the sample",
    "opts": [
      "Measuring oxygen directly in very high-temperature flue gases without cooling the sample",
      "Testing drinking water quality",
      "Measuring oxygen in a cold storage room",
      "Portable enclosed space checks"
    ],
    "exp": "Zirconia (ZrO2) analysers measure O2 directly in hot flue gas at operating temperature (600-900°C) without cooling the sample. The zirconia ceramic becomes an O2 ion conductor at high temperatures, generating an EMF proportional to the O2 concentration ratio (Nernst equation). No sampling line needed - probe inserted directly into the flue.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the standard 'Zero Gas' used to calibrate an O2 analyser?",
    "a": "Pure Nitrogen (0% O2)",
    "opts": [
      "Pure Nitrogen (0% O2)",
      "Fresh Air (20.9% O2)",
      "Pure Oxygen (100% O2)",
      "Carbon Dioxide (CO2)"
    ],
    "exp": "Pure nitrogen (99.999% N2, 0% O2) is used as zero gas. The analyser is exposed to pure nitrogen to set the zero point (0% O2 = 4 mA output). Cylinder labelled 'Zero Gas' or 'N2 5.0'. Must be certified purity. Some analysers use an internal reference cell; others require external calibration gas every 3-6 months.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the standard 'Span Gas' used to calibrate an O2 analyser?",
    "a": "A certified gas mixture with a known O2 percentage, or fresh air (20.9% O2)",
    "opts": [
      "A certified gas mixture with a known O2 percentage, or fresh air (20.9% O2)",
      "Pure Nitrogen (0% O2)",
      "Helium",
      "Hydrogen"
    ],
    "exp": "A certified calibration gas with known O2 percentage - typically 20.9% (fresh air) or a certified mixture (e.g., 5.0% O2 in N2 for IG monitoring). For enclosed space meters: fresh clean air on deck = 20.9% O2 is used as span check. Certified mixtures have a certificate of analysis and expiry date.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What instrument is used to detect very small electrical currents (microamps)?",
    "a": "Galvanometer",
    "opts": [
      "Galvanometer",
      "Megger",
      "Oscilloscope",
      "Tachometer"
    ],
    "exp": "Galvanometer - a highly sensitive current-detecting instrument. The D'Arsonval type uses a moving coil in a permanent magnetic field. When microamp-level current flows, the coil deflects against a spring, moving a pointer proportionally. Used in: IR monitoring systems to detect earth leakage, Wheatstone bridge null detection, and early electrochemical O2 cells.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the working principle of a D'Arsonval Galvanometer?",
    "a": "A moving coil suspended in a permanent magnetic field rotates when current flows through it (F = BIL)",
    "opts": [
      "A moving coil suspended in a permanent magnetic field rotates when current flows through it (F = BIL)",
      "It measures the heat generated by the current",
      "It uses the piezoelectric effect",
      "It relies on a vibrating tuning fork"
    ],
    "exp": "A rectangular coil is suspended in the gap of a horseshoe permanent magnet. When current I flows through the coil, a torque is produced (F = BIL, where B = field strength, I = current, L = conductor length). This torque deflects the coil against a spiral hairspring until equilibrium. Deflection angle is directly proportional to current - the pointer position indicates the measured value.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "Where would you typically find a galvanometer on a ship?",
    "a": "In an insulation monitoring system or as a null detector in a Wheatstone bridge",
    "opts": [
      "In an insulation monitoring system or as a null detector in a Wheatstone bridge",
      "To start the main engine",
      "To measure the main generator voltage",
      "To measure fuel flow"
    ],
    "exp": "Applications: (1) Insulation Resistance Monitor - detects earth fault current in the IT system. (2) Earth fault indicator panel - displays which phase has a fault. (3) Calibration instruments - as null detector in Wheatstone bridge circuits. (4) Historical galvanic protection systems. Modern digital instruments largely replace traditional galvanometers.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the purpose of a Salinometer?",
    "a": "To measure the salinity (salt content) of water, typically boiler feed water or fresh water generator output",
    "opts": [
      "To measure the salinity (salt content) of water, typically boiler feed water or fresh water generator output",
      "To measure the temperature of seawater",
      "To measure the viscosity of fuel oil",
      "To measure the speed of the ship"
    ],
    "exp": "A salinometer continuously monitors the salt/chloride content of water. Ship applications: (1) Fresh Water Generator distillate - diverts contaminated output to bilge if salinity > setpoint. (2) Boiler feed water - high salinity causes boiler scale and tube failure. (3) Freshwater storage monitoring. Typical setpoints: FWG <5 ppm, boiler feed <0.1 ppm (depending on boiler type).",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the working principle of a Salinometer?",
    "a": "It measures the electrical conductivity of the water, which increases proportionally with dissolved salt ions",
    "opts": [
      "It measures the electrical conductivity of the water, which increases proportionally with dissolved salt ions",
      "It measures the density of the water using a float",
      "It evaporates the water and weighs the salt left behind",
      "It measures the color of the water"
    ],
    "exp": "Electrical conductivity measurement: dissolved salts (NaCl, MgCl2, etc.) dissociate into ions in water. These ions carry electrical charge, making salt water conductive. Two electrodes are immersed in the water; AC voltage is applied between them. The measured conductance is proportional to ion concentration = salinity. Temperature must be compensated as conductivity changes with temperature.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "Why does a salinometer use AC voltage across its electrodes instead of DC?",
    "a": "To prevent polarisation (bubbles/plating) on the electrodes, which would cause inaccurate readings",
    "opts": [
      "To prevent polarisation (bubbles/plating) on the electrodes, which would cause inaccurate readings",
      "AC is safer than DC",
      "DC would electrocute the fish",
      "The ship only has AC power"
    ],
    "exp": "DC electrolysis would occur at the electrodes with direct current: ions migrate and plate onto the electrodes (electrolysis), changing their surface properties and introducing measurement errors. AC voltage reverses polarity at frequency (typically 50-1000 Hz), preventing net ion migration. The electrodes stay clean and the conductance measurement remains stable.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "If a salinometer on the Fresh Water Generator detects high salinity, what happens?",
    "a": "An alarm sounds and an automatic dump/divert valve directs the contaminated water to the bilge or back to the sea",
    "opts": [
      "An alarm sounds and an automatic dump/divert valve directs the contaminated water to the bilge or back to the sea",
      "The main engine trips",
      "The FW generator shuts down completely",
      "Nothing, it just records the value"
    ],
    "exp": "The salinometer output triggers a 3-way divert valve (solenoid operated) that automatically diverts the FWG distillate output overboard or to bilge - NOT to the freshwater storage tank. Simultaneously, a high salinity alarm activates on the bridge/ECR panel. The operator must investigate: check evaporator pressure, saltwater feed valve, or distillate cooler for leakage.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the typical maximum allowable salinity for steam drum boiler feed water?",
    "a": "Typically <5 to 15 ppm (parts per million)",
    "opts": [
      "Typically <5 to 15 ppm (parts per million)",
      "1000 ppm",
      "35,000 ppm",
      "0 ppm exactly"
    ],
    "exp": "Boiler feed water limits depend on boiler pressure: low pressure auxiliary boilers typically <10 ppm TDS (Total Dissolved Solids). High pressure exhaust gas boilers: <2 ppm. Sea water contamination at 35,000 ppm NaCl would immediately cause severe foaming, carry-over, and tube scaling. Salinometer alarm setpoints are typically 5-15 ppm for FWG output.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What does a Viscotherm measure and control?",
    "a": "It measures the actual viscosity of Heavy Fuel Oil (HFO) and controls the steam heater to maintain the correct injection viscosity",
    "opts": [
      "It measures the actual viscosity of Heavy Fuel Oil (HFO) and controls the steam heater to maintain the correct injection viscosity",
      "It measures the temperature of cooling water",
      "It measures the speed of the turbocharger",
      "It measures the density of lube oil"
    ],
    "exp": "A Viscotherm (viscosity controller) measures the actual kinematic viscosity of HFO in the fuel system and controls a steam heater to maintain the target injection viscosity. It replaces simple temperature control. Marine HFO varies between 100-700 cSt at 50°C; correct injection viscosity = 10-20 cSt. Temperature to achieve this varies between fuel batches.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "Why is Viscosity Control preferred over simple Temperature Control for HFO?",
    "a": "Different batches of HFO have different viscosity-temperature curves; fixed temperature control cannot guarantee correct injection viscosity for all fuels",
    "opts": [
      "Different batches of HFO have different viscosity-temperature curves; fixed temperature control cannot guarantee correct injection viscosity for all fuels",
      "Temperature control is too expensive",
      "Viscosity control uses less steam",
      "Temperature sensors melt in HFO"
    ],
    "exp": "Different HFO batches have different viscosity-temperature relationships due to varying crude origins and refinery processes. A fixed temperature (e.g., 130°C) gives correct viscosity for one batch but wrong viscosity for another. A Viscotherm responds to actual viscosity regardless of the fuel quality, automatically adjusting the heater temperature to always achieve the target injection viscosity.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What happens if HFO is injected into the engine at too HIGH a viscosity (too cold)?",
    "a": "Poor atomisation, leading to incomplete combustion, black smoke, and carbon deposits",
    "opts": [
      "Poor atomisation, leading to incomplete combustion, black smoke, and carbon deposits",
      "The engine will run too fast",
      "The fuel pumps will cavitate",
      "The injectors will melt"
    ],
    "exp": "High viscosity = thick fuel = poor atomisation from the fuel injectors. Poorly atomised large droplets do not burn completely. Consequences: black smoke (incomplete combustion), carbon deposits on injectors, piston crowns, and exhaust valves, reduced thermal efficiency, increased maintenance, and higher exhaust temperatures on affected cylinders.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What happens if HFO is injected at too LOW a viscosity (too hot)?",
    "a": "The fuel becomes too thin, causing leakage past the injector plungers and poor lubrication of the pump components",
    "opts": [
      "The fuel becomes too thin, causing leakage past the injector plungers and poor lubrication of the pump components",
      "It burns cleaner and increases efficiency",
      "The engine will stop immediately",
      "The turbocharger will overspeed"
    ],
    "exp": "Too low viscosity = very thin fuel = reduced lubricity of fuel. Consequences: (1) Increased internal leakage past fuel pump plungers (fuel escapes to drain, reduced delivery). (2) Accelerated wear of fuel pump plungers and barrels due to loss of fuel film lubrication. (3) Possible cavitation in fuel pumps. Also: vapour lock risk and safety concerns with hot fuel near hot surfaces.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the typical target viscosity for HFO injection in a large marine diesel engine?",
    "a": "10 to 15 centistokes (cSt)",
    "opts": [
      "10 to 15 centistokes (cSt)",
      "100 to 150 cSt",
      "1 to 5 cSt",
      "380 cSt"
    ],
    "exp": "Target injection viscosity: 10-20 centistokes (cSt) - typically 12-15 cSt for most large 2-stroke marine diesel engines. Some older engines specify slightly higher. This range ensures optimal atomisation from mechanical injectors while maintaining adequate lubrication of the fuel pump. The Viscotherm continuously controls steam heating to maintain this target.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "How does a rotational viscometer (part of the Viscotherm) work?",
    "a": "It measures the torque required to rotate a spindle at a constant speed in the flowing fuel; higher viscosity requires more torque",
    "opts": [
      "It measures the torque required to rotate a spindle at a constant speed in the flowing fuel; higher viscosity requires more torque",
      "It drops a metal ball and times how long it takes to sink",
      "It forces fuel through a tiny hole and measures the pressure",
      "It measures the speed of sound through the fuel"
    ],
    "exp": "A motor drives a spindle (rotor) at a precise constant speed inside the flowing fuel. The viscous drag of the fuel resists rotation - high viscosity = more resistance = more torque required to maintain speed. The torque is measured as the feedback signal. This torque signal controls the PID temperature controller via the steam heater to maintain constant target viscosity.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "In a Viscotherm control loop, if the measured viscosity is too high, what does the controller do?",
    "a": "It opens the steam valve wider to heat the fuel more, reducing its viscosity",
    "opts": [
      "It opens the steam valve wider to heat the fuel more, reducing its viscosity",
      "It closes the steam valve to cool the fuel",
      "It adds diesel oil to thin the HFO",
      "It slows down the main engine"
    ],
    "exp": "If measured viscosity > setpoint: fuel is too cold/viscous. Controller output increases - opens steam heater valve wider, raising fuel temperature. Higher temperature → lower viscosity → closes the error between measured and target viscosity. Classic closed-loop PID control: error = (setpoint viscosity) - (measured viscosity).",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "How is an O2 analyser typically calibrated before enclosed space entry?",
    "a": "It is zeroed with Nitrogen, and spanned in clean fresh air on deck to read 20.9% before entering",
    "opts": [
      "It is zeroed with Nitrogen, and spanned in clean fresh air on deck to read 20.9% before entering",
      "It is calibrated inside the enclosed space",
      "It is calibrated using engine exhaust gas",
      "It does not need calibration"
    ],
    "exp": "2-point calibration: (1) Zero: expose sensor to nitrogen or close off from atmosphere - reads 0% O2. (2) Span: expose to clean fresh air on deck (20.9% O2) - adjust span pot if needed. Most modern instruments perform automatic calibration. Calibration must be documented. Instrument must be within calibration date. Never calibrate inside the space.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What happens to an electrochemical O2 sensor if left in a 100% nitrogen atmosphere for a long time?",
    "a": "Nothing harmful, it just reads 0%, but it actually prolongs the sensor life since the electrolyte isn't reacting with O2",
    "opts": [
      "Nothing harmful, it just reads 0%, but it actually prolongs the sensor life since the electrolyte isn't reacting with O2",
      "It explodes",
      "The sensor dies immediately",
      "It gets stuck at 0% forever"
    ],
    "exp": "No harm occurs - the electrochemical reaction requires oxygen. Without O2, the anode reaction stops, and no current flows. The lead anode is preserved (not consumed). This actually extends sensor life. Some manufacturers recommend storing sensors in nitrogen when not in use. The sensor responds normally when returned to normal atmosphere.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "If the O2 analyser on the IG (Inert Gas) system reads 6% O2, what is the typical system response?",
    "a": "An alarm is raised, and the IG is vented to atmosphere instead of going to the cargo tanks",
    "opts": [
      "An alarm is raised, and the IG is vented to atmosphere instead of going to the cargo tanks",
      "The IG plant shuts down immediately",
      "The cargo tanks are opened",
      "Nothing, 6% is perfect"
    ],
    "exp": "6% O2 exceeds the permitted maximum of 5% for IG delivery to cargo tanks (SOLAS II-2 requirement). The IG system automatically trips: deck seal valve closes, flue gas blower stops, and an alarm sounds. IG cannot be delivered to cargo until O2 content returns below 5%. Operator must investigate combustion quality of the inert gas generator.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the typical alarm setpoint for IG O2 content on a tanker?",
    "a": "5% O2 (High O2 alarm)",
    "opts": [
      "5% O2 (High O2 alarm)",
      "10% O2",
      "20.9% O2",
      "0% O2"
    ],
    "exp": "SOLAS II-2 requires IG delivered to cargo tanks must not exceed 5% O2 by volume. Typical alarm: 5% O2 high alarm triggers isolation of IG system. Below 8% O2 is generally below the lower flammable limit for hydrocarbon vapour-air mixtures, but 5% provides a safety margin. Reference: SOLAS Regulation II-2/4.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the function of a 'Null Detector' in a Wheatstone bridge?",
    "a": "It is a highly sensitive galvanometer used to detect when the bridge is perfectly balanced (zero current flowing)",
    "opts": [
      "It is a highly sensitive galvanometer used to detect when the bridge is perfectly balanced (zero current flowing)",
      "It measures the total resistance of the bridge",
      "It supplies power to the bridge",
      "It measures the temperature of the resistors"
    ],
    "exp": "A null detector (galvanometer) is connected across the bridge midpoints. When the bridge is balanced (R1/R2 = R3/R4), zero current flows through the galvanometer - the pointer sits exactly at zero (null point). This null condition indicates the unknown resistance exactly equals the calculated value. The galvanometer's sensitivity determines measurement accuracy.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "How do you calibrate a salinometer on board?",
    "a": "Zero it using pure distilled water, and span it using a certified standard calibration solution (e.g., 10ppm NaCl)",
    "opts": [
      "Zero it using pure distilled water, and span it using a certified standard calibration solution (e.g., 10ppm NaCl)",
      "Calibrate it using seawater",
      "Calibrate it using tap water",
      "It is factory sealed and never calibrated"
    ],
    "exp": "2-point calibration: (1) Zero: flush with pure distilled water (0 ppm) - adjust zero until display reads 0 ppm. (2) Span: use a certified NaCl standard solution (e.g., 5.00 ppm ± 0.01 ppm) - adjust span potentiometer until display reads the certified value. Record calibration date, standard solution batch number, and technician signature in maintenance log.",
    "cat": "O2, Galvo, Salinometer, Viscotherm",
    "id": ""
  },
  {
    "q": "What is the basic working principle of an Inductive Proximity Sensor?",
    "a": "An oscillating electromagnetic field is damped (energy absorbed) when a metallic object enters it, triggering a switch",
    "opts": [
      "An oscillating electromagnetic field is damped (energy absorbed) when a metallic object enters it, triggering a switch",
      "It bounces light off an object",
      "It measures changes in air pressure",
      "It uses a physical lever switch"
    ],
    "exp": "An internal LC oscillator generates a high-frequency electromagnetic field (100kHz-1MHz) at the sensing face. When a metallic object enters this field, eddy currents are induced in the metal. These eddy currents absorb energy from the oscillator, reducing its amplitude (damping). An electronic circuit detects when damping exceeds a threshold and switches the output transistor.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What type of material can an Inductive Proximity Sensor detect?",
    "a": "Metallic objects ONLY",
    "opts": [
      "Metallic objects ONLY",
      "Any solid object",
      "Liquids and gases",
      "Plastics and wood ONLY"
    ],
    "exp": "Inductive sensors detect metallic (electrically conductive) objects only - steel, iron, aluminium, copper, brass. They cannot detect plastic, wood, rubber, glass, or ceramic. The sensing range varies by metal type: ferrous metals (iron, steel) have the longest range; non-ferrous metals (aluminium, copper) have 30-70% of the nominal sensing range.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "Why does an inductive sensor detect iron/steel better than copper or aluminium?",
    "a": "Iron is highly permeable and creates stronger eddy currents/magnetic interaction, resulting in a longer sensing range",
    "opts": [
      "Iron is highly permeable and creates stronger eddy currents/magnetic interaction, resulting in a longer sensing range",
      "Copper reflects the magnetic field",
      "Aluminium is too heavy",
      "Iron generates its own electricity"
    ],
    "exp": "Iron is ferromagnetic - it concentrates the magnetic flux, increasing eddy current induction. It also has lower electrical conductivity than copper, concentrating eddy current losses. This combination produces stronger oscillator damping at the same distance. Sensing range for iron = 100% of nominal. Aluminium ≈ 50%. Copper ≈ 45%. Always specify the material when selecting a sensor.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What happens to the internal oscillator of an inductive sensor when metal approaches?",
    "a": "Eddy currents induced in the metal absorb energy, causing the oscillator amplitude to decrease (damping)",
    "opts": [
      "Eddy currents induced in the metal absorb energy, causing the oscillator amplitude to decrease (damping)",
      "The oscillator speeds up",
      "The oscillator stops completely permanently",
      "The oscillator voltage doubles"
    ],
    "exp": "The oscillating field induces eddy currents in the metal target. These eddy currents create their own opposing magnetic field (Lenz's Law) that extracts energy from the oscillator. The oscillator amplitude decreases (damps). When the amplitude falls below a threshold level (determined by the switching point), the output transistor switches from its normal state to the opposite state.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is a typical sensing range for a standard inductive proximity sensor?",
    "a": "2 to 40 millimetres",
    "opts": [
      "2 to 40 millimetres",
      "1 to 5 metres",
      "10 to 50 centimetres",
      "0.1 to 0.5 millimetres"
    ],
    "exp": "Nominal sensing range: typically 2 mm to 40 mm depending on sensor face diameter. Small M12 sensor: 2-4 mm. Medium M18 sensor: 5-8 mm. Large M30 sensor: 10-15 mm. These ranges assume standard mild steel target. Always mount the sensor so the target passes within 70-80% of the nominal sensing range for reliable operation.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is the primary advantage of a proximity sensor over a mechanical limit switch?",
    "a": "No physical contact means no mechanical wear, resulting in a much longer lifespan and reliability",
    "opts": [
      "No physical contact means no mechanical wear, resulting in a much longer lifespan and reliability",
      "It can switch 440V directly",
      "It requires no electrical power to run",
      "It is much cheaper to replace"
    ],
    "exp": "No contact = no mechanical wear = longer lifespan (typically 10⁷ to 10⁸ switching cycles vs 10⁵ to 10⁶ for mechanical). Additional advantages: immune to vibration, condensation, oil splash; faster response time (microseconds vs milliseconds for mechanical); compact and sealed (IP67/IP68 common); LED indication of switch state.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "Where would you typically find an inductive proximity sensor on a ship?",
    "a": "Monitoring valve open/closed positions, or measuring shaft speed",
    "opts": [
      "Monitoring valve open/closed positions, or measuring shaft speed",
      "Detecting oil level in a tank",
      "Measuring exhaust temperature",
      "Detecting smoke in the ECR"
    ],
    "exp": "Ship applications: (1) Valve position feedback (open/close confirmation). (2) Shaft speed measurement on generators, compressors. (3) Gear position detection in controllable pitch propeller. (4) Cargo pump shaft rotation. (5) Anchor windlass position. (6) Engine crank position for wrong-way alarm. (7) Door and hatch open/closed monitoring.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "How is an inductive proximity sensor used to measure shaft RPM?",
    "a": "It is mounted near a toothed gear wheel; it outputs a pulse each time a metal tooth passes, and the PLC counts pulses per minute",
    "opts": [
      "It is mounted near a toothed gear wheel; it outputs a pulse each time a metal tooth passes, and the PLC counts pulses per minute",
      "It measures the magnetic field of the rotating shaft",
      "It measures the friction of the shaft",
      "It touches the shaft to feel the vibration"
    ],
    "exp": "A toothed wheel (phonic wheel) is mounted on the shaft. The proximity sensor is mounted with 1-3 mm gap facing the teeth. As the shaft rotates, each metal tooth passes the sensor face - one pulse per tooth. A frequency counter or PLC measures pulses per time period: RPM = (pulses per second × 60) / number of teeth. Typical accuracy ±0.01%.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "If a gear has 60 teeth, and the proximity sensor counts 1200 pulses in one second, what is the RPM?",
    "a": "1200 RPM (1200 pulses/sec = 20 revs/sec = 1200 revs/min)",
    "opts": [
      "1200 RPM (1200 pulses/sec = 20 revs/sec = 1200 revs/min)",
      "60 RPM",
      "3600 RPM",
      "20 RPM"
    ],
    "exp": "Pulses per second = 1200. Number of teeth = 60. Revolutions per second = 1200 / 60 = 20 rev/s. RPM = 20 × 60 = 1200 RPM. Formula: RPM = (pulses/second × 60) / teeth count. This calculation is performed automatically by a PLC counter module or tachometer display.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is a Capacitive Proximity Sensor?",
    "a": "A sensor that detects changes in capacitance when an object enters its electric field; it can detect BOTH metallic and non-metallic objects",
    "opts": [
      "A sensor that detects changes in capacitance when an object enters its electric field; it can detect BOTH metallic and non-metallic objects",
      "A sensor that only detects metal",
      "A sensor that measures battery voltage",
      "A sensor that uses magnets"
    ],
    "exp": "A capacitive sensor detects changes in capacitance at its sensing face. The sensor and a target object form the plates of a capacitor. When a dielectric material (or conductor) enters the electric field, capacitance increases. An RC oscillator circuit detects this change and switches the output. Can detect metallic AND non-metallic materials including liquids through tank walls.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "When would you choose a Capacitive Proximity Sensor over an Inductive one?",
    "a": "When you need to detect non-metallic objects, like plastic, wood, or the level of liquid through a plastic sight glass",
    "opts": [
      "When you need to detect non-metallic objects, like plastic, wood, or the level of liquid through a plastic sight glass",
      "When you need to detect a steel gear tooth",
      "When you want to measure temperature",
      "When you need to switch 440V"
    ],
    "exp": "Use capacitive when: (1) Detecting non-metallic materials - plastic containers, cardboard, wood, glass. (2) Detecting liquid level through a plastic tank wall. (3) Detecting presence of powder or granular materials in a silo. (4) Sensing through packaging. Inductive is preferred for metals due to longer range and immunity to humidity (capacitive sensors can be affected by moisture).",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is a Photoelectric Sensor?",
    "a": "A sensor that emits a beam of light (usually infrared) and detects when an object breaks or reflects the beam",
    "opts": [
      "A sensor that emits a beam of light (usually infrared) and detects when an object breaks or reflects the beam",
      "A sensor that generates electricity from sunlight",
      "A sensor that takes photographs of alarms",
      "A sensor that measures engine room brightness"
    ],
    "exp": "Photoelectric sensors use an emitter (LED, usually IR) and a detector (phototransistor). Three types: (1) Through-beam: emitter and receiver separate, object detected when beam is broken. (2) Retroreflective: emitter and receiver in same housing, uses reflector. (3) Diffuse: emitter and receiver in same housing, detects light reflected from the target object itself.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is the working principle of a Magnetic Reed Switch?",
    "a": "Two magnetic contacts enclosed in a glass tube close together when a permanent magnet is brought near them",
    "opts": [
      "Two magnetic contacts enclosed in a glass tube close together when a permanent magnet is brought near them",
      "An electromagnet that attracts a steel plate",
      "A switch that detects the earth's magnetic field",
      "A switch that operates via radio waves"
    ],
    "exp": "Two ferromagnetic metal contacts are hermetically sealed inside a glass tube in inert gas. When a permanent magnet approaches within the activation distance, the magnetic field magnetises the contacts, attracting them together - closing the circuit. When the magnet moves away, the spring force of the contacts opens them again. Completely sealed, no external wiring on the moving part.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "Where are magnetic reed switches commonly used on ships?",
    "a": "Float level switches in small tanks, or door open/close sensors",
    "opts": [
      "Float level switches in small tanks, or door open/close sensors",
      "Shaft speed measurement",
      "Main engine exhaust temperature",
      "Switchboard busbar protection"
    ],
    "exp": "Ship applications: (1) Tank level float switches - float contains a permanent magnet, rises/falls with level, activates fixed reed switch at alarm level. (2) Door and hatch open/close sensors - watertight door position. (3) Valve position switches on pipeline valves. (4) Safety interlocks on access panels. Simple, sealed, no power required for the switch itself.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is an Ultrasonic Proximity Sensor?",
    "a": "It emits high-frequency sound waves and calculates distance by measuring the time it takes for the echo to return",
    "opts": [
      "It emits high-frequency sound waves and calculates distance by measuring the time it takes for the echo to return",
      "It uses light to measure distance",
      "It detects the vibration of running machinery",
      "It cleans parts using sound waves"
    ],
    "exp": "Ultrasonic sensors emit high-frequency sound pulses (typically 40-200 kHz) from a piezoelectric transducer, then measure the time for the echo to return (Time-of-Flight). Distance = (speed of sound × time) / 2. Speed of sound in air ≈ 343 m/s. A 10 ms echo return time = 343 × 0.010 / 2 = 1.7 m distance. Works on any material that reflects sound.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is a common marine application for an Ultrasonic Sensor?",
    "a": "Measuring the level of liquids or solids in a tank from the top without contacting the fluid",
    "opts": [
      "Measuring the level of liquids or solids in a tank from the top without contacting the fluid",
      "Measuring the RPM of the turbocharger",
      "Detecting smoke",
      "Measuring fuel viscosity"
    ],
    "exp": "Marine applications: (1) Tank level measurement from the top without process contact - fuel, ballast, grey water. (2) Open channel flow measurement. (3) Distance/position detection of large objects. (4) Ship-to-quay distance measurement for mooring. Advantage over DP transmitters: no impulse lines or process wetted parts. Limitation: affected by foam on liquid surface.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is an LVDT?",
    "a": "Linear Variable Differential Transformer - a highly precise sensor for measuring linear displacement (position)",
    "opts": [
      "Linear Variable Differential Transformer - a highly precise sensor for measuring linear displacement (position)",
      "Low Voltage Direct Transmission",
      "Liquid Valve Drain Trap",
      "Light Varying Diode Tube"
    ],
    "exp": "LVDT (Linear Variable Differential Transformer) converts linear mechanical displacement into a proportional AC electrical signal. A movable ferromagnetic core slides inside a transformer primary and two secondary coils. As the core moves, mutual inductance changes, producing a differential output voltage proportional to displacement. Resolution: sub-micron. Used for precise position feedback.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "Where might an LVDT be used in an engine room?",
    "a": "Providing highly accurate valve stem position feedback inside a smart valve positioner (like SIPART)",
    "opts": [
      "Providing highly accurate valve stem position feedback inside a smart valve positioner (like SIPART)",
      "Measuring the temperature of the main bearing",
      "Detecting water in oil",
      "Measuring generator voltage"
    ],
    "exp": "Engine room LVDT applications: (1) Fuel rack position measurement on the main engine - precise governor feedback. (2) Valve stem position in smart valve positioners (SIPART). (3) Measuring piston rod elongation in hydraulic actuators. (4) Governor linkage position. LVDTs are chosen for: frictionless operation (core doesn't touch the coil), infinite resolution, excellent linearity.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is a Rotary Encoder?",
    "a": "An electro-mechanical device that converts the angular position or motion of a shaft into analog or digital output signals",
    "opts": [
      "An electro-mechanical device that converts the angular position or motion of a shaft into analog or digital output signals",
      "A device that encrypts radio signals",
      "A motor that rotates at a fixed speed",
      "A type of gear box"
    ],
    "exp": "Rotary encoder converts shaft angular position into digital pulses (incremental) or unique parallel digital codes (absolute). Optical types use a code disc with transparent/opaque sectors read by LEDs and photodetectors. Magnetic types use Hall effect sensors reading a magnetic disc. Output: A and B quadrature channels plus Z (zero/index) pulse per revolution.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is the difference between an Incremental Encoder and a Absolute Encoder?",
    "a": "Incremental outputs pulses as it moves (loses position if power fails); Absolute outputs a unique digital code for every position (keeps position after power loss)",
    "opts": [
      "Incremental outputs pulses as it moves (loses position if power fails); Absolute outputs a unique digital code for every position (keeps position after power loss)",
      "Incremental is for small shafts, Absolute is for large shafts",
      "Incremental uses light, Absolute uses magnets",
      "Incremental is analog, Absolute is pneumatic"
    ],
    "exp": "Incremental encoder: outputs equally spaced pulses as the shaft rotates. Counts from zero at power-on - loses position if power is interrupted. Must find a home position on restart. Lower cost. Absolute encoder: each angular position produces a unique binary code (Gray code typically). Retains position after power loss. More expensive but required for safety-critical positioning.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "If a proximity sensor is marked PNP, what does its output do when triggered?",
    "a": "It switches the positive voltage (e.g., +24V) to the load (sourcing)",
    "opts": [
      "It switches the positive voltage (e.g., +24V) to the load (sourcing)",
      "It switches the negative/0V to the load (sinking)",
      "It outputs an AC voltage",
      "It opens a dry relay contact"
    ],
    "exp": "PNP (sourcing) output: when the target is detected, the output transistor switches the positive supply voltage (+24V) to the output terminal. Load is connected between the output and the 0V negative supply. Also called 'sourcing' because the sensor sources current to the load. Common in European practice.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "If a proximity sensor is marked NPN, what does its output do when triggered?",
    "a": "It switches the negative/0V to the load (sinking)",
    "opts": [
      "It switches the negative/0V to the load (sinking)",
      "It switches the positive voltage to the load",
      "It outputs 4-20mA",
      "It outputs a pneumatic signal"
    ],
    "exp": "NPN (sinking) output: when the target is detected, the output transistor switches the output terminal to 0V (negative). Load is connected between +24V and the output terminal. Also called 'sinking' because the sensor sinks current from the load to 0V. Common in Japanese/US practice. PLC input cards may require a specific type - check specifications.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "Why are Inductive sensors considered highly reliable for engine room environments?",
    "a": "They are completely encapsulated, immune to dirt, dust, oil, and water, and have no moving parts",
    "opts": [
      "They are completely encapsulated, immune to dirt, dust, oil, and water, and have no moving parts",
      "They are powered by heat",
      "They are made of titanium",
      "They communicate via satellite"
    ],
    "exp": "Inductive sensors are completely encapsulated in epoxy or stainless steel - no exposed contacts, no moving parts, no mechanical wear. IP67/IP68 rated (submersible). Unaffected by: oil splash, condensation, vibration, salt atmosphere, temperature fluctuations (-25 to +85°C typical). MTBF (Mean Time Between Failures) typically >10 million operations.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "If a shaft speed sensor fails, what is the most common mechanical reason?",
    "a": "Vibration loosened the mounting bracket, increasing the gap between the sensor and the gear teeth beyond the sensing range",
    "opts": [
      "Vibration loosened the mounting bracket, increasing the gap between the sensor and the gear teeth beyond the sensing range",
      "The sensor melted from friction",
      "The gear teeth became magnetised",
      "The shaft reversed direction"
    ],
    "exp": "Vibration loosening: Over time, engine/machinery vibration causes the proximity sensor mounting bracket to loosen. The air gap between sensor face and gear teeth increases beyond the rated sensing range (typically 2-8 mm maximum). The sensor no longer detects the teeth, reading zero RPM. Check: vibration marks on bracket, measure actual gap, re-tighten and re-torque. Use locking compound.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "How do you test a 3-wire DC inductive proximity sensor on a workbench?",
    "a": "Apply 24V DC to brown/blue wires, bring a spanner near the face, and check for voltage on the black signal wire",
    "opts": [
      "Apply 24V DC to brown/blue wires, bring a spanner near the face, and check for voltage on the black signal wire",
      "Put it in a glass of water",
      "Connect it directly to 220V AC",
      "Measure its resistance with a megger"
    ],
    "exp": "Bench test: (1) Connect Brown wire (+24V DC), Blue wire (0V), Black wire (output). (2) Use a multimeter on the Black output wire. (3) Bring a piece of mild steel (spanner) close to the sensing face. (4) PNP sensor: Black wire should switch to ~24V when metal present, 0V when absent. (5) NPN sensor: Black wire switches to 0V when present, 24V absent. LED indicator also confirms state.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What does 'Hysteresis' mean in the context of a proximity sensor?",
    "a": "The difference between the switch-ON point as the target approaches, and the switch-OFF point as the target moves away",
    "opts": [
      "The difference between the switch-ON point as the target approaches, and the switch-OFF point as the target moves away",
      "The maximum speed the sensor can detect",
      "The voltage drop across the sensor",
      "The color of the LED indicator"
    ],
    "exp": "Hysteresis is the difference between the switch-ON distance (as target approaches) and the switch-OFF distance (as target moves away). Typically 10-20% of nominal sensing range. Example: sensor with 8mm range activates at 7mm approach, deactivates at 8.5mm recession. This deliberate gap prevents rapid on-off chattering if the target vibrates at the switching boundary.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "Why is hysteresis deliberately designed into a proximity sensor?",
    "a": "To prevent the output from rapidly chattering (turning on/off rapidly) if the target vibrates precisely at the sensing boundary",
    "opts": [
      "To prevent the output from rapidly chattering (turning on/off rapidly) if the target vibrates precisely at the sensing boundary",
      "To make the sensor cheaper",
      "To increase the sensing range",
      "To make it compatible with AC power"
    ],
    "exp": "Without hysteresis: if a vibrating metal shaft sits exactly at the switching distance, the output would oscillate rapidly (chattering) between ON and OFF at vibration frequency - possibly thousands of times per second. This would confuse counting circuits and damage output transistors. Hysteresis creates a stable dead-band around the switching point, preventing this problem.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "Can an inductive proximity sensor detect a pool of water?",
    "a": "No, water is non-metallic and will not induce eddy currents; a capacitive sensor must be used for water",
    "opts": [
      "No, water is non-metallic and will not induce eddy currents; a capacitive sensor must be used for water",
      "Yes, water is highly conductive",
      "Yes, but only if the water is boiling",
      "Yes, but it will short circuit"
    ],
    "exp": "No. Water is non-metallic (non-conductive in pure form, weakly conductive when dissolved with salts). An inductive sensor's electromagnetic field cannot induce significant eddy currents in water. A capacitive proximity sensor must be used - the water changes the dielectric constant in the sensor's electric field, increasing capacitance and triggering detection.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is a 'Passive Magnetic Pickup' used for speed sensing?",
    "a": "A coil wound around a permanent magnet; a passing gear tooth changes the magnetic flux, inducing a voltage pulse without needing external power",
    "opts": [
      "A coil wound around a permanent magnet; a passing gear tooth changes the magnetic flux, inducing a voltage pulse without needing external power",
      "A sensor that uses 24V to create a magnetic field",
      "A sensor that picks up radio waves",
      "A piece of tape on the shaft"
    ],
    "exp": "A passive magnetic pickup (variable reluctance sensor) consists of a permanent magnet with a coil wound around it. No external power needed. When a ferromagnetic gear tooth passes, it changes the magnetic flux in the coil, inducing a voltage pulse (Faraday's Law: V = -N × dΦ/dt). Output is a sine wave whose frequency is proportional to RPM. No power needed but signal amplitude decreases at low RPM.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "Which gives a cleaner, square-wave digital pulse at very low RPMs: a Passive Magnetic Pickup or an Active Inductive Proximity Sensor?",
    "a": "An Active Inductive Proximity Sensor (outputs clean 24V pulses regardless of speed)",
    "opts": [
      "An Active Inductive Proximity Sensor (outputs clean 24V pulses regardless of speed)",
      "Passive Magnetic Pickup",
      "They are identical",
      "Neither works at low RPM"
    ],
    "exp": "Active inductive proximity sensor gives cleaner digital pulses at low RPM. Passive pickup amplitude is proportional to dΦ/dt (rate of flux change) - at very low RPM, teeth move slowly, amplitude drops to millivolts (hard to distinguish from noise). Active sensors maintain full 24V digital output regardless of speed - even at 1 RPM. Critical for starting speed measurement and slow-turning equipment.",
    "cat": "Proximity Sensors & Encoders",
    "id": ""
  },
  {
    "q": "What is Modbus?",
    "a": "A standard industrial serial communication protocol used to transmit data between electronic devices",
    "opts": [
      "A standard industrial serial communication protocol used to transmit data between electronic devices",
      "A type of maritime satellite",
      "A brand of circuit breaker",
      "An operating system for PLCs"
    ],
    "exp": "Modbus is an open serial communication protocol developed by Modicon in 1979, now managed by the Modbus Organization. It defines how data is structured and sent between electronic devices. Widely used in industrial automation and on ships for connecting IAS (Integrated Automation Systems) to PLCs, drives, sensors, and smart instruments via RS-485 or Ethernet.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is the primary architecture of a Modbus network?",
    "a": "Master/Slave (or Client/Server)",
    "opts": [
      "Master/Slave (or Client/Server)",
      "Peer-to-Peer",
      "Ring Topology",
      "Mesh Network"
    ],
    "exp": "Modbus uses a Master/Slave architecture (also called Client/Server in Modbus TCP). One Master (typically the IAS workstation or PLC) controls all communication. Up to 247 Slaves (field devices, drives, sensors) listen and only respond when specifically addressed by the Master. No slave can initiate communication - they only reply to Master queries.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "In a Modbus Master/Slave network, which device initiates communication?",
    "a": "Only the Master can initiate communication; Slaves only respond when queried",
    "opts": [
      "Only the Master can initiate communication; Slaves only respond when queried",
      "Any slave can initiate",
      "The slave with the highest ID",
      "Both Master and Slaves can initiate at any time"
    ],
    "exp": "Only the Master initiates communication. The Master polls each Slave sequentially by sending a request frame containing the Slave's address and the specific data it wants (Function Code + Register address). Each Slave monitors all traffic and responds ONLY when its own address is received. This prevents data collisions on the shared bus.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is the maximum number of slave addresses available on a standard Modbus serial link?",
    "a": "247 (Addresses 1-247, 0 is broadcast)",
    "opts": [
      "247 (Addresses 1-247, 0 is broadcast)",
      "99",
      "1024",
      "16"
    ],
    "exp": "Modbus RTU: 247 slave addresses (1-247). Address 0 = broadcast (all slaves respond). Address 248-255 = reserved. In practice, RS-485 physical layer limits network devices to 32 without repeaters (each device loads the bus). With bus repeaters, the full 247 addresses can be used. Modbus TCP has no practical device limit.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What are the three main types/versions of the Modbus protocol?",
    "a": "Modbus RTU, Modbus ASCII, and Modbus TCP/IP",
    "opts": [
      "Modbus RTU, Modbus ASCII, and Modbus TCP/IP",
      "Modbus A, B, and C",
      "Modbus Serial, Parallel, and USB",
      "Modbus 485, 232, and 422"
    ],
    "exp": "Three Modbus variants: (1) Modbus RTU: Binary encoding over serial RS-485/RS-232. Most compact, fastest, most common in field devices. (2) Modbus ASCII: Human-readable ASCII encoding over serial. Less common, used for debugging. (3) Modbus TCP/IP: Modbus protocol wrapped in Ethernet TCP/IP packets. Used in modern ship LANs and IAS networks.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is Modbus RTU?",
    "a": "A binary serial version of Modbus, usually implemented over RS-485, widely used for field instruments and drives",
    "opts": [
      "A binary serial version of Modbus, usually implemented over RS-485, widely used for field instruments and drives",
      "A text-based version over ethernet",
      "A wireless version of Modbus",
      "A pneumatic communication protocol"
    ],
    "exp": "Modbus RTU (Remote Terminal Unit) is the dominant industrial variant using binary encoding (raw bytes) for maximum data density. Transmitted over RS-485 twisted pair cable. Message structure: [Slave Address 1 byte][Function Code 1 byte][Data n bytes][CRC 2 bytes]. Error detection via CRC-16 checksum. Baud rates: 1200 to 115200 bps. Standard: IEC 61158.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is the most common physical layer (wiring standard) used for Modbus RTU on ships?",
    "a": "RS-485 (2-wire differential)",
    "opts": [
      "RS-485 (2-wire differential)",
      "Ethernet (RJ45)",
      "Fiber Optic",
      "RS-232 (9-pin)"
    ],
    "exp": "RS-485 (EIA-485): 2-wire differential balanced signal. Differential voltage (+V on A wire, -V on B wire) rejects common-mode noise. Maximum cable length: 1200 metres at 100 kbps. Multiple devices (up to 32 unit loads per segment) on a single twisted pair. Used on ships for: IAS to VFD communication, smart instrument networks, navigation system integration.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "Why is RS-485 preferred over RS-232 for Modbus RTU networks?",
    "a": "RS-485 allows multiple devices on a single bus and long distances (up to 1200m) due to its differential signalling",
    "opts": [
      "RS-485 allows multiple devices on a single bus and long distances (up to 1200m) due to its differential signalling",
      "RS-485 is faster",
      "RS-485 uses 230V AC",
      "RS-232 is illegal on ships"
    ],
    "exp": "RS-232 limitations: only 2 devices (point-to-point), 15-metre maximum cable length, single-ended (susceptible to noise). RS-485 advantages: multi-drop (up to 32+ devices), 1200m cable length, differential balanced signal rejects electrical noise common in engine rooms (VFD switching, motor starts). Ships use RS-485 almost exclusively for field bus communication.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is Modbus TCP/IP?",
    "a": "The Modbus protocol encapsulated inside a standard Ethernet TCP/IP packet, used on modern ship IT/OT networks",
    "opts": [
      "The Modbus protocol encapsulated inside a standard Ethernet TCP/IP packet, used on modern ship IT/OT networks",
      "A serial protocol over RS-485",
      "A protocol exclusively for internet browsing",
      "A wireless-only protocol"
    ],
    "exp": "Modbus TCP encapsulates the standard Modbus RTU data (excluding CRC - replaced by TCP checksumming) inside a TCP/IP packet. Uses port 502. Advantages: standard Ethernet infrastructure, no distance limit, hundreds of devices, simultaneous multiple Masters. Used in modern ship networks: IAS workstations to PLCs, SCADA systems, alarm management. RFC 1900.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "When a Modbus Master sends a request, what are the key components of the message frame?",
    "a": "Slave Address, Function Code, Data/Register Address, Error Check (CRC)",
    "opts": [
      "Slave Address, Function Code, Data/Register Address, Error Check (CRC)",
      "IP Address, Subnet Mask, Gateway",
      "Tag Name, Value, Timestamp",
      "Start Bit, Stop Bit, Parity"
    ],
    "exp": "Modbus RTU frame: (1) Slave Address (1 byte) - who to talk to. (2) Function Code (1 byte) - what to do. (3) Data field (n bytes) - register address + number of registers to read/write + data (for writes). (4) CRC (2 bytes) - error detection. Total minimum frame: 4 bytes. Maximum: 256 bytes.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What does the Slave Address do in a Modbus request?",
    "a": "It identifies exactly which slave on the network should listen to and process the request",
    "opts": [
      "It identifies exactly which slave on the network should listen to and process the request",
      "It tells the master where it is located",
      "It sets the baud rate",
      "It resets the slave"
    ],
    "exp": "The Slave Address (1 byte, range 1-247) identifies which specific device should process the request. All slaves on the RS-485 bus receive every message, but only the slave whose programmed address matches the frame address will respond. Address 0 = broadcast (no response expected). Duplicate addresses = major error - both devices respond simultaneously causing data collision.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What happens if a Modbus Slave receives a message with an address that is not its own?",
    "a": "It ignores the message completely",
    "opts": [
      "It ignores the message completely",
      "It forwards the message to the correct slave",
      "It replies with an error code",
      "It shuts down"
    ],
    "exp": "The slave completely ignores the message - it does not respond, does not generate an error, does not acknowledge. Only the correctly addressed slave processes the request and sends a response. This is fundamental to the RS-485 shared bus architecture - all devices hear all traffic but only react to their own address.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is a Modbus 'Function Code'?",
    "a": "A number that tells the slave what kind of action to perform (e.g., read a value, write a value)",
    "opts": [
      "A number that tells the slave what kind of action to perform (e.g., read a value, write a value)",
      "The password to access the device",
      "The speed of the network",
      "The firmware version of the slave"
    ],
    "exp": "Function codes are single-byte numbers (1-127) that specify the type of operation to perform. Standard codes: FC01 = Read Coils (digital outputs). FC02 = Read Discrete Inputs. FC03 = Read Holding Registers. FC04 = Read Input Registers. FC05 = Write Single Coil. FC06 = Write Single Register. FC16 = Write Multiple Registers. If a slave receives an unsupported FC, it returns error code 0x01 (Illegal Function).",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What does Modbus Function Code 03 (Read Holding Registers) do?",
    "a": "Reads 16-bit analog output or configuration values from the slave",
    "opts": [
      "Reads 16-bit analog output or configuration values from the slave",
      "Reads digital inputs (on/off)",
      "Writes a new value to the slave",
      "Reboots the slave"
    ],
    "exp": "FC03 reads 16-bit read/write registers (called Holding Registers, addresses 40001-49999 in Modbus convention, or 0-9999 in the FC03 payload). These store configuration parameters, setpoints, or outputs that can be changed. Examples: VFD speed setpoint, PID setpoint, pump enable/disable command, alarm setpoints. The Master reads the current register values.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What does Modbus Function Code 04 (Read Input Registers) do?",
    "a": "Reads 16-bit analog input values (like sensor measurements) from the slave",
    "opts": [
      "Reads 16-bit analog input values (like sensor measurements) from the slave",
      "Writes analog values",
      "Reads digital outputs",
      "Sets the slave address"
    ],
    "exp": "FC04 reads 16-bit read-only registers (Input Registers, addresses 30001-39999). These store real-time measurement values from sensors. Examples: transmitter current temperature, pressure, flow reading; drive actual current, frequency, torque. Read-only to the network - only the slave device itself writes to these registers from its sensor input.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is the difference between a Modbus 'Coil' and a Modbus 'Register'?",
    "a": "A Coil is a 1-bit boolean value (ON/OFF), a Register is a 16-bit integer value (0-65535)",
    "opts": [
      "A Coil is a 1-bit boolean value (ON/OFF), a Register is a 16-bit integer value (0-65535)",
      "A Coil is analog, a Register is digital",
      "A Coil is for reading, a Register is for writing",
      "There is no difference"
    ],
    "exp": "Coil (1-bit, ON/OFF): represents a single digital state. Read with FC01 (output coils) or FC02 (input contacts). Write with FC05 (single) or FC15 (multiple). Examples: pump running status, valve open/close command, alarm acknowledge. Register (16-bit integer, 0-65535): stores a numerical value. Read with FC03 or FC04. Write with FC06 or FC16. Examples: temperature, pressure, speed setpoint.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "If a temperature transmitter outputs 4-20mA, how might this value be represented in a Modbus register?",
    "a": "As a 16-bit integer, usually scaled (e.g., 4000 to 20000) representing the analog value",
    "opts": [
      "As a 16-bit integer, usually scaled (e.g., 4000 to 20000) representing the analog value",
      "As a boolean ON/OFF",
      "As an IP address",
      "As a text string '4mA'"
    ],
    "exp": "Common scaling convention: 4 mA = register value 4000, 20 mA = register value 20000. The engineer applies the formula: Actual value = ((Register - 4000) / 16000) × (URV - LRV) + LRV. Alternative: direct engineering units scaled ×10 (e.g., 25.3°C stored as 253). Always check the device manual for the specific scaling factor and data type (integer vs IEEE float).",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "In an RS-485 Modbus network, what is a Termination Resistor used for?",
    "a": "Placing a 120 ohm resistor at both physical ends of the cable to prevent signal reflection/echoes that corrupt data",
    "opts": [
      "Placing a 120 ohm resistor at both physical ends of the cable to prevent signal reflection/echoes that corrupt data",
      "To limit the current so the wires don't burn",
      "To convert 24V to 5V",
      "To generate the Modbus clock signal"
    ],
    "exp": "RS-485 is a transmission line. Without termination, signal pulses reflect off the cable ends and travel back, interfering with subsequent pulses (echoes). A 120 ohm resistor (matching cable characteristic impedance) at each physical end of the cable absorbs the signal energy instead of reflecting it. This is critical for cables longer than ~10 metres at typical baud rates.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What happens if you have 10 devices on an RS-485 network and you forget the termination resistors on a long cable?",
    "a": "The signal reflections will cause data corruption, resulting in communication timeouts or CRC errors",
    "opts": [
      "The signal reflections will cause data corruption, resulting in communication timeouts or CRC errors",
      "The master will blow a fuse",
      "The slaves will all reboot",
      "Nothing, it will work perfectly"
    ],
    "exp": "On cables >50m without termination: signal reflections create ghost pulses that arrive at the receiver as false data bits. This causes CRC errors (detected) or worse, data corruption accepted as valid (undetected). Symptoms: intermittent communication failures, occasional wrong readings, some slaves occasionally failing to respond. Adding termination resistors immediately cures the problem.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is 'Baud Rate' in Modbus RTU?",
    "a": "The speed of communication (bits per second), typically 9600, 19200, or 38400",
    "opts": [
      "The speed of communication (bits per second), typically 9600, 19200, or 38400",
      "The number of devices on the network",
      "The voltage of the signal",
      "The delay between messages"
    ],
    "exp": "Baud rate = bits per second transmitted. Common Modbus RTU rates: 9600, 19200, 38400, 57600, 115200 bps. At 9600 bps, transmitting a 8-byte frame takes approximately 8.3 milliseconds. Lower baud rates = more reliable on long cables (less signal distortion). All devices on the same RS-485 segment must operate at identical baud rates - mismatch causes complete communication failure.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What must be true about the Baud Rate and Parity settings for all devices on a Modbus RTU network?",
    "a": "Every single device on the network must be set to the EXACT SAME baud rate, data bits, parity, and stop bits",
    "opts": [
      "Every single device on the network must be set to the EXACT SAME baud rate, data bits, parity, and stop bits",
      "The master sets it automatically for everyone",
      "Each slave can have a different speed",
      "Only the master needs to know the speed"
    ],
    "exp": "All devices on a Modbus RTU network must share: (1) Baud rate (e.g., 19200). (2) Data bits (usually 8). (3) Parity (None, Odd, or Even). (4) Stop bits (1 or 2). These are collectively called 'serial communication settings' or 'port settings.' A single device with wrong settings will fail to communicate; it may corrupt messages for other devices on the bus.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "If a Modbus slave is connected but not responding, what is a common troubleshooting step?",
    "a": "Check if the Tx/Rx wires (A and B) are swapped; RS-485 is polarity sensitive",
    "opts": [
      "Check if the Tx/Rx wires (A and B) are swapped; RS-485 is polarity sensitive",
      "Hit the slave with a hammer",
      "Change the slave to a master",
      "Increase the voltage to 220V"
    ],
    "exp": "Systematic troubleshooting: (1) Verify slave address is configured correctly on the device. (2) Check baud rate/parity settings match. (3) Swap A and B wires - RS-485 is polarity sensitive (A+ must connect to A+). (4) Check power supply to the slave device. (5) Verify termination resistors in place. (6) Use a Modbus analyser to capture the bus traffic and verify the Master is sending the correct address.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is a Modbus Gateway?",
    "a": "A device that converts Modbus RTU (serial) to Modbus TCP/IP (Ethernet), allowing legacy serial devices to connect to a modern network",
    "opts": [
      "A device that converts Modbus RTU (serial) to Modbus TCP/IP (Ethernet), allowing legacy serial devices to connect to a modern network",
      "A physical door in the switchboard",
      "A firewall that blocks Modbus traffic",
      "A master device that controls everything"
    ],
    "exp": "A Modbus Gateway converts between different physical or protocol variants: typically RS-485 Modbus RTU ↔ Ethernet Modbus TCP/IP. This allows legacy field devices (with RS-485 ports) to be integrated into modern Ethernet-based IAS/DCS networks without replacing the field devices. The gateway appears as a Modbus TCP Server to the network and acts as a Modbus RTU Master to the serial devices.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "Can you have two Modbus Masters on a single RS-485 Modbus RTU network?",
    "a": "No, standard Modbus RTU allows only ONE master. Two masters will cause data collisions",
    "opts": [
      "No, standard Modbus RTU allows only ONE master. Two masters will cause data collisions",
      "Yes, up to 247 masters",
      "Yes, but only if they have the same address",
      "Yes, they take turns automatically"
    ],
    "exp": "No - standard Modbus RTU permits ONLY ONE master on a serial bus. If two masters transmit simultaneously, both signals collide on the RS-485 wires, corrupting both messages. Multiple masters require: separate RS-485 buses (with a gateway between them), or migration to Modbus TCP on Ethernet (where the network infrastructure handles simultaneous transactions).",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "Can you have multiple Masters on a Modbus TCP/IP network?",
    "a": "Yes, because Ethernet switches handle the traffic routing and collision avoidance",
    "opts": [
      "Yes, because Ethernet switches handle the traffic routing and collision avoidance",
      "No, only one master ever",
      "Yes, but only two",
      "No, Modbus TCP does not use masters"
    ],
    "exp": "Yes. Modbus TCP on Ethernet supports multiple simultaneous Masters (Clients) because: (1) Ethernet uses CSMA/CD collision detection. (2) Network switches create dedicated collision domains. (3) Each TCP connection is independent. Multiple HMI workstations, an IAS server, and an engineering laptop can all read data from the same Modbus TCP device simultaneously.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is 'Polling' in a Modbus network?",
    "a": "The master sequentially asking each slave for data on a continuous loop",
    "opts": [
      "The master sequentially asking each slave for data on a continuous loop",
      "The slaves voting on who speaks next",
      "Measuring the voltage of the cable",
      "Resetting all slaves simultaneously"
    ],
    "exp": "Polling is the Master's process of sequentially querying each slave for its current data: Master sends request to Slave 1 → waits for response → sends request to Slave 2 → waits → Slave 3 → etc. Each cycle through all slaves is one poll cycle. Typical poll rates: 1-10 seconds for slow process data. The poll cycle time = sum of all request/response times for all devices.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "If an ETO is asked to integrate a new VFD into the IAS via Modbus RTU, what 3 settings MUST be configured on the VFD?",
    "a": "Slave Address (unique), Baud Rate (matches network), Parity/Stop bits (matches network)",
    "opts": [
      "Slave Address (unique), Baud Rate (matches network), Parity/Stop bits (matches network)",
      "IP Address, Subnet, Gateway",
      "Voltage, Current, Frequency",
      "Motor kW, RPM, Cos Phi"
    ],
    "exp": "Mandatory VFD Modbus settings: (1) Slave Address - unique number (1-247), must not duplicate any existing device. (2) Baud Rate - must match the rest of the network (e.g., 19200 bps). (3) Parity and Stop Bits - must match network (e.g., No Parity, 1 Stop Bit). Additionally: connect to RS-485 A and B terminals correctly (polarity); check VFD manual for register map of speed command and status.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What does CRC stand for in a Modbus RTU message?",
    "a": "Cyclic Redundancy Check - a mathematical checksum used to detect data corruption in transmission",
    "opts": [
      "Cyclic Redundancy Check - a mathematical checksum used to detect data corruption in transmission",
      "Constant Rate Control",
      "Current Relay Coil",
      "Central Routing Computer"
    ],
    "exp": "CRC = Cyclic Redundancy Check. A 2-byte (16-bit) mathematical error detection code calculated from all preceding bytes in the Modbus frame (address + function code + data). The receiver independently calculates its own CRC from the received data and compares to the appended CRC. Any transmission error changes the data and produces a different CRC value → error detected → frame discarded.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What is the typical voltage level of an RS-485 Modbus signal?",
    "a": "Differential voltage between -7V and +12V (typically a 5V differential)",
    "opts": [
      "Differential voltage between -7V and +12V (typically a 5V differential)",
      "220V AC",
      "24V DC",
      "4-20mA"
    ],
    "exp": "RS-485 differential voltage: Logic 1 = A wire > B wire by +200mV to +6V. Logic 0 = B wire > A wire by +200mV to +6V. Common mode range: -7V to +12V. The differential nature means both wires change together in response to common-mode noise, cancelling the noise at the receiver. Receiver measures only the differential voltage between A and B.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "Why is shielded twisted pair (STP) cable highly recommended for Modbus RS-485?",
    "a": "The twisted pair rejects electromagnetic interference, and the shield drains away noise to ground",
    "opts": [
      "The twisted pair rejects electromagnetic interference, and the shield drains away noise to ground",
      "It is cheaper than normal wire",
      "It can carry more current",
      "It looks better in the cable tray"
    ],
    "exp": "Twisted pair: each twist cancels magnetic field interference from adjacent conductors - noise induced on one wire is equally induced on the other, appearing as common-mode noise which RS-485 receivers reject. Shield (drain wire): connected to earth at ONE end only (prevents ground loop currents) to intercept capacitively-coupled electrical noise from VFDs, power cables, and radio transmitters nearby.",
    "cat": "Modbus Communication",
    "id": ""
  },
  {
    "q": "What does PT100 indicate for an RTD sensor?",
    "a": "Platinum element with exactly 100 Ω resistance at 0°C",
    "opts": [
      "Polymer element measuring up to 100°C",
      "Palladium element increasing 100 Ω per degree",
      "Platinum element with exactly 100 Ω resistance at 0°C",
      "Platinum-Tungsten alloy with 100 Ω maximum"
    ],
    "exp": "PT = Platinum (stable, linear resistance-temperature relationship). 100 = base resistance at 0°C. Resistance increases 0.385 Ω/°C. At 100°C = 138.5 Ω. At 200°C = 177 Ω. Highly accurate and used for bearing, cooling water, lube oil temperature monitoring.",
    "cat": "RTD",
    "id": "T14B_001"
  },
  {
    "q": "Why is a 3-wire connection standard for PT100 RTDs on ships?",
    "a": "Compensates for lead wire resistance in long cable runs - prevents false high temperature readings",
    "opts": [
      "Provides dedicated ground to prevent VFD interference",
      "Allows sensor to operate on both AC and DC simultaneously",
      "Creates backup circuit if one wire breaks",
      "Compensates for lead wire resistance in long cable runs - prevents false high temperature readings"
    ],
    "exp": "In a 2-wire circuit, the lead wire resistance adds to the sensor resistance → appears as falsely higher temperature. A 3-wire circuit measures the lead resistance separately and subtracts it from the total, giving accurate sensor resistance. Essential for long cable runs in engine rooms.",
    "cat": "RTD",
    "id": "T14B_002"
  },
  {
    "q": "PT100 sensor in boiling water at 100°C - what resistance does it read?",
    "a": "138.5 Ω (100 + 100 × 0.385)",
    "opts": [
      "100.0 Ω (base resistance - only valid at 0°C)",
      "385.0 Ω (wrong calculation)",
      "138.5 Ω (100 + 100 × 0.385)",
      "200.0 Ω (double the base)"
    ],
    "exp": "PT100 formula: R = 100 + (T × 0.385). At 100°C: 100 + (100 × 0.385) = 100 + 38.5 = 138.5 Ω. At 0°C = 100 Ω. At 200°C = 177 Ω. At -50°C ≈ 80.3 Ω. Used in bearing temperature alarms where typical alarm = 80°C → ~130.8 Ω.",
    "cat": "RTD",
    "id": "T14B_003"
  },
  {
    "q": "Which principle does a thermocouple use to generate a temperature signal?",
    "a": "Seebeck effect - two dissimilar metals at a hot/cold junction generate a millivolt EMF proportional to temperature difference",
    "opts": [
      "Piezoelectric effect - thermal expansion stresses a crystal",
      "Hall effect - magnetic field deflects electrons",
      "Positive Temperature Coefficient (PTC) - resistance increases linearly",
      "Seebeck effect - two dissimilar metals at a hot/cold junction generate a millivolt EMF proportional to temperature difference"
    ],
    "exp": "Seebeck effect: when two dissimilar metals are joined at a hot measurement junction and a cold reference junction, an EMF (millivolts) is generated proportional to the temperature difference. Self-powered - no external supply needed. Cold junction compensation required for accuracy.",
    "cat": "THERMOCOUPLE",
    "id": "T14B_004"
  },
  {
    "q": "Which thermocouple type is used for main engine exhaust gas up to 1350°C?",
    "a": "Type K (Chromel-Alumel)",
    "opts": [
      "Type J (Iron-Constantan) - limited to ~750°C",
      "Type T (Copper-Constantan) - for cryogenic applications",
      "Type K (Chromel-Alumel)",
      "Type E (Chromel-Constantan) - high sensitivity but not standard for exhaust"
    ],
    "exp": "Type K (Chromel-Alumel): range up to 1350°C, sensitivity ~40 µV/°C, most common in marine applications for exhaust gas and boiler temperature. Type J limits to ~750°C and corrodes. Type T for refrigeration (-200 to +350°C). Thermocouple extension cables must use same matching alloy.",
    "cat": "THERMOCOUPLE",
    "id": "T14B_005"
  },
  {
    "q": "Why must thermocouple extension cables use the matching alloy (e.g. Chromel-Alumel for Type K)?",
    "a": "Standard copper cable creates unwanted dissimilar metal junctions generating extra EMF - corrupting temperature reading",
    "opts": [
      "Copper melts at high exhaust gas temperatures",
      "Chromel-Alumel cable acts as 250 Ω resistor for HART protocol",
      "Copper cable absorbs EMI from engine room lighting",
      "Standard copper cable creates unwanted dissimilar metal junctions generating extra EMF - corrupting temperature reading"
    ],
    "exp": "The Seebeck effect generates EMF at ANY junction of dissimilar metals. Using copper extension cable creates unintended junctions at the connection points. These junction EMFs add/subtract from the measurement EMF causing significant temperature reading errors. Use matching alloy extension cable throughout.",
    "cat": "THERMOCOUPLE",
    "id": "T14B_006"
  },
  {
    "q": "Characteristic of an NTC thermistor used for motor winding protection?",
    "a": "Resistance decreases sharply and non-linearly as temperature rises - 3-5% per °C",
    "opts": [
      "Resistance increases linearly 0.385 Ω/°C (that's a PT100)",
      "Generates self-powered millivolt EMF shutting off motor directly",
      "Bimetallic strip bends to break control circuit at preset temperature",
      "Resistance decreases sharply and non-linearly as temperature rises - 3-5% per °C"
    ],
    "exp": "NTC (Negative Temperature Coefficient) thermistor: resistance drops 3-5%/°C as temperature rises. Non-linear - very high sensitivity near operating temperature. Embedded in motor stator windings. When winding overheats → resistance drops dramatically → tripping relay activates → motor stops before insulation is damaged.",
    "cat": "THERMISTOR",
    "id": "T14B_007"
  },
  {
    "q": "What is the fundamental working principle of a Thermocouple temperature sensor?",
    "a": "The Seebeck Effect: when two dissimilar metals are joined and a temperature difference exists between the hot and cold junctions, a small EMF (millivolts) is generated",
    "opts": [
      "The Peltier Effect: applying a voltage to create a temperature difference",
      "The Seebeck Effect: when two dissimilar metals are joined and a temperature difference exists between the hot and cold junctions, a small EMF (millivolts) is generated",
      "Resistance change: the electrical resistance of the metal increases linearly with heat",
      "Capacitance change: the gap between two plates expands with temperature"
    ],
    "exp": "Discovered by Thomas Seebeck, the Seebeck Effect states that a temperature gradient along two joined dissimilar metals naturally generates a small electromotive force (EMF) in the millivolt range. This allows the sensor to measure extreme heat without any external power supply.",
    "cat": "TEMP",
    "id": "T14B_021"
  },
  {
    "q": "What materials are used to make the most common marine thermocouple (Type K), and what is its typical temperature range?",
    "a": "Chromel and Alumel; used for ranges from -200°C up to +1350°C",
    "opts": [
      "Chromel and Alumel; used for ranges from -200°C up to +1350°C",
      "Copper and Constantan; used for ranges from -200°C to +350°C",
      "Platinum and Rhodium; used exclusively for temperatures above 2000°C",
      "Iron and Constantan; used for ranges from 0°C to +750°C"
    ],
    "exp": "Type K (Chromel-Alumel) is the maritime standard for high-temperature applications. Because it safely reads up to 1350°C, it is perfectly suited for harsh environments like main engine exhaust gases and boiler combustion zones.",
    "cat": "TEMP",
    "id": "T14B_022"
  },
  {
    "q": "Where are Thermocouples predominantly used onboard a ship instead of RTDs (PT100)?",
    "a": "In extremely high-temperature areas such as main engine exhaust gas piping, boiler combustion zones, and incinerators",
    "opts": [
      "In extremely high-temperature areas such as main engine exhaust gas piping, boiler combustion zones, and incinerators",
      "In pressurized environments like hydraulic steering gear pipelines",
      "In cold environments like refrigeration rooms and HVAC systems",
      "In highly precise, moderate-temperature areas like main bearing shells and LO sumps"
    ],
    "exp": "RTDs (like PT100) melt or degrade at extreme temperatures (generally capped at 600-850°C). Thermocouples are rugged, simple, and self-powered, making them the only choice for the 400-600°C+ environments of diesel exhaust manifolds and incinerators.",
    "cat": "TEMP",
    "id": "T14B_023"
  },
  {
    "q": "What is 'Cold Junction Compensation' (CJC) in a thermocouple measurement system?",
    "a": "An electronic correction circuit that measures the ambient temperature at the instrument panel (reference junction) and mathematically adds it to the thermocouple's differential reading to find the true hot junction temperature",
    "opts": [
      "An electronic correction circuit that measures the ambient temperature at the instrument panel (reference junction) and mathematically adds it to the thermocouple's differential reading to find the true hot junction temperature",
      "A refrigeration unit used to keep the reference wires at exactly 0°C",
      "A software algorithm that prevents the thermocouple from freezing in cryogenic tanks",
      "A grounding wire that shields the thermocouple from electromagnetic interference"
    ],
    "exp": "A thermocouple only measures the temperature DIFFERENCE between the hot tip and the panel where the wires connect (the cold junction). If the panel is 30°C, and the thermocouple generates voltage equivalent to a 400°C difference, the actual exhaust is 430°C. CJC automatically performs this math.",
    "cat": "TEMP",
    "id": "T14B_024"
  },
  {
    "q": "What is the primary advantage of a Thermocouple over an RTD in hazardous (explosive) areas?",
    "a": "Thermocouples are self-powered (generating their own tiny millivolt EMF) and do not require external excitation current, making them inherently safer against causing ignition",
    "opts": [
      "Thermocouples communicate wirelessly, eliminating spark hazards from cables",
      "Thermocouples are self-powered (generating their own tiny millivolt EMF) and do not require external excitation current, making them inherently safer against causing ignition",
      "Thermocouples instantly melt and break the circuit if gas is detected",
      "Thermocouples are infinitely more accurate than RTDs"
    ],
    "exp": "Because thermocouples generate their own tiny voltage via the Seebeck effect, they don't need a power supply pushing current through them. This makes them highly suitable for Intrinsically Safe (Ex i) installations.",
    "cat": "TEMP",
    "id": "T14B_025"
  },
  {
    "q": "What is the fundamental working principle of an RTD (Resistance Temperature Detector)?",
    "a": "The electrical resistance of a pure metal (like platinum) increases predictably and linearly as its temperature rises",
    "opts": [
      "The electrical resistance of a pure metal (like platinum) increases predictably and linearly as its temperature rises",
      "It uses differential thermal expansion to physically bend a bimetallic strip",
      "Its semiconductor material sharply decreases in resistance as it heats up",
      "It generates a millivolt signal proportional to the temperature gradient"
    ],
    "exp": "RTDs rely on the physical property that heating a metal increases the kinetic energy of its atoms, which obstructs electron flow (increasing resistance). Platinum is favored because its resistance increase is incredibly linear and stable over time.",
    "cat": "TEMP",
    "id": "T14B_026"
  },
  {
    "q": "What does the designation 'PT100' exactly mean?",
    "a": "The sensing element is made of Platinum (PT), and it has a resistance of exactly 100 Ohms at 0°C",
    "opts": [
      "It is a Pressure Transmitter (PT) rated for a maximum of 100 bar",
      "It is a Positive Temperature (PT) thermistor that trips at 100°C",
      "It contains Platinum (PT) and can handle a maximum current of 100 milliamps",
      "The sensing element is made of Platinum (PT), and it has a resistance of exactly 100 Ohms at 0°C"
    ],
    "exp": "This is the universal standard defined by IEC 60751. If you place a PT100 in a bucket of melting ice water (0°C), a multimeter will measure exactly 100.0 Ohms across its leads.",
    "cat": "TEMP",
    "id": "T14B_027"
  },
  {
    "q": "What is the standard sensitivity (change in resistance per degree Celsius) for an IEC 60751 PT100 sensor?",
    "a": "Approximately 0.385 Ohms per °C",
    "opts": [
      "Exactly 1.000 Ohms per °C",
      "Approximately 0.385 Ohms per °C",
      "0.001 Ohms per °C",
      "Approximately 3 to 5 Ohms per °C"
    ],
    "exp": "For every 1 degree Celsius increase in temperature, a standard PT100's resistance goes up by 0.385 Ω. This tiny, precise change is why high-quality electronics are required to read them.",
    "cat": "TEMP",
    "id": "T14B_028"
  },
  {
    "q": "If a PT100 sensor is exposed to exactly 100°C boiling water, what resistance should a multimeter display?",
    "a": "138.5 Ohms",
    "opts": [
      "100.0 Ohms",
      "138.5 Ohms",
      "200.0 Ohms",
      "0.0 Ohms"
    ],
    "exp": "Base resistance at 0°C = 100 Ω. Increase = 100°C × 0.385 Ω/°C = 38.5 Ω. Total = 100 + 38.5 = 138.5 Ohms.",
    "cat": "TEMP",
    "id": "T14B_029"
  },
  {
    "q": "Where are PT100 RTD sensors predominantly used onboard?",
    "a": "For highly accurate, moderate-temperature applications such as main engine bearing shells, cooling water systems, and lube oil sumps",
    "opts": [
      "Only for measuring the exhaust gases of the main engine",
      "For highly accurate, moderate-temperature applications such as main engine bearing shells, cooling water systems, and lube oil sumps",
      "Exclusively inside the boiler combustion chamber",
      "For detecting explosive gas mixtures in cargo holds"
    ],
    "exp": "Because PT100s offer unparalleled accuracy (often ±0.1°C to ±0.5°C), they are used where precise temperature control is critical to machine health, like bearing lubrication and jacket water cooling. They are not used in exhaust lines because temperatures exceed their safe operating range.",
    "cat": "TEMP",
    "id": "T14B_030"
  },
  {
    "q": "Why is a '3-wire' connection standard for most marine PT100 sensors instead of a simple 2-wire connection?",
    "a": "The third wire allows the measuring bridge circuit to automatically measure and subtract the electrical resistance of the long copper cables connecting the sensor to the control room, preventing false high readings",
    "opts": [
      "The third wire carries the 220V power supply required to heat the platinum",
      "The third wire acts as a backup; if one wire breaks, the sensor still works perfectly",
      "The third wire provides a dedicated earth ground to prevent lightning strikes",
      "The third wire allows the measuring bridge circuit to automatically measure and subtract the electrical resistance of the long copper cables connecting the sensor to the control room, preventing false high readings"
    ],
    "exp": "PT100s measure tiny changes (0.385 Ω/°C). If you run 50 meters of copper wire from the engine to the ECR, the wire itself might have 3 Ohms of resistance. A 2-wire system would add that 3 Ohms to the reading, tricking the computer into thinking the bearing is 8°C hotter than it actually is. The 3-wire setup cancels this out.",
    "cat": "TEMP",
    "id": "T14B_031"
  },
  {
    "q": "What does the designation 'PT200' indicate?",
    "a": "A platinum RTD with a resistance of 200 Ohms at 0°C, offering higher sensitivity and better resistance to long cable errors",
    "opts": [
      "A platinum RTD with a resistance of 100 Ohms at 200°C",
      "A sensor equipped with two independent PT100 elements inside one casing",
      "A thermocouple that can measure up to 200°C",
      "A platinum RTD with a resistance of 200 Ohms at 0°C, offering higher sensitivity and better resistance to long cable errors"
    ],
    "exp": "While PT100 is standard, PT200, PT500, and PT1000 exist. A PT200 has double the base resistance (200Ω at 0°C) and double the sensitivity per degree, making lead wire resistance relatively less impactful.",
    "cat": "TEMP",
    "id": "T14B_032"
  },
  {
    "q": "In order for the IAS (Integrated Alarm System) to read an RTD, what must the panel supply to the sensor?",
    "a": "A small, highly precise constant excitation current (typically 1 to 5 milliamps)",
    "opts": [
      "A 24V DC square wave",
      "High-pressure instrument air",
      "A 4-20mA control signal",
      "A small, highly precise constant excitation current (typically 1 to 5 milliamps)"
    ],
    "exp": "Unlike a thermocouple, an RTD is just a resistor. To measure its resistance, Ohm's law (V=IR) is used. The panel pushes a known, tiny current (I) through the platinum, and measures the resulting voltage drop (V) to calculate the resistance (R).",
    "cat": "TEMP",
    "id": "T14B_033"
  },
  {
    "q": "What is the primary difference in behavior between a standard PT100 RTD and an NTC Thermistor as temperature increases?",
    "a": "A PT100 increases in resistance slightly and linearly, while an NTC Thermistor decreases in resistance sharply and non-linearly",
    "opts": [
      "They both increase in resistance, but the thermistor is 10 times faster",
      "A PT100 generates a voltage, while a thermistor generates a current",
      "A PT100 increases in resistance slightly and linearly, while an NTC Thermistor decreases in resistance sharply and non-linearly",
      "A PT100 requires 220V AC, while a thermistor requires 24V DC"
    ],
    "exp": "NTC stands for Negative Temperature Coefficient. Made of semiconductor ceramics, heating it frees up electrons, causing its resistance to crash drastically (often dropping by thousands of ohms over just 50°C).",
    "cat": "TEMP",
    "id": "T14B_034"
  },
  {
    "q": "What is the typical sensitivity of an NTC thermistor compared to a PT100?",
    "a": "Extremely high; an NTC thermistor's resistance changes by 3-5% per °C, whereas a PT100 changes by only about 0.4% per °C",
    "opts": [
      "Identical; both are standardized by the IEC to 0.385 Ohms/°C",
      "Extremely high; an NTC thermistor's resistance changes by 3-5% per °C, whereas a PT100 changes by only about 0.4% per °C",
      "Extremely low; it only changes resistance every 10°C",
      "It is infinite, as thermistors only act as ON/OFF switches"
    ],
    "exp": "This massive sensitivity makes thermistors excellent for detecting tiny temperature changes or acting as hard limit switches in a narrow range. However, their non-linear curve makes them poor choices for wide-range dial thermometers.",
    "cat": "TEMP",
    "id": "T14B_035"
  },
  {
    "q": "Where are Thermistors (PTC/NTC) predominantly used in marine engineering rather than RTDs?",
    "a": "Embedded deep inside electric motor stator windings to trip the motor on overheating, or in AVR temperature compensation circuits",
    "opts": [
      "Embedded deep inside electric motor stator windings to trip the motor on overheating, or in AVR temperature compensation circuits",
      "In the fresh water generator to measure salinity",
      "On the outer hull to measure seawater temperature",
      "In the main engine exhaust manifold for load balancing"
    ],
    "exp": "PTC (Positive Temp Coefficient) thermistors are built directly into the copper coils of alternators and motors. Because they have a sharp 'knee' in their resistance curve, when the motor hits exactly 155°C, the resistance rockets from 100 ohms to 4000 ohms instantly, tripping the protection relay.",
    "cat": "TEMP",
    "id": "T14B_036"
  },
  {
    "q": "What is the fundamental difference between a Thermistor and a Thermostat?",
    "a": "A thermistor is a continuous sensor that outputs variable resistance, whereas a thermostat is a mechanical switch that physically opens or closes contacts at a single preset temperature",
    "opts": [
      "They are two different names for exactly the same component",
      "A thermistor measures temperature, while a thermostat measures pressure",
      "A thermistor requires no power, while a thermostat must be plugged into 220V",
      "A thermistor is a continuous sensor that outputs variable resistance, whereas a thermostat is a mechanical switch that physically opens or closes contacts at a single preset temperature"
    ],
    "exp": "Thermistors provide analog data (e.g., it is exactly 84°C). A thermostat only provides digital binary data (e.g., it is either TOO HOT or NOT TOO HOT). Thermostats are simple control switches.",
    "cat": "TEMP",
    "id": "T14B_037"
  },
  {
    "q": "How does a Bimetallic Strip thermostat physically operate?",
    "a": "It uses two different metals welded together; because one metal expands faster with heat than the other, the entire strip physically bends, pushing a set of electrical contacts open or closed",
    "opts": [
      "It uses a semiconductor junction that blocks current at high heat",
      "It relies on the Seebeck effect to generate a spark across the gap",
      "It uses two different metals welded together; because one metal expands faster with heat than the other, the entire strip physically bends, pushing a set of electrical contacts open or closed",
      "It melts a block of wax which pushes a piston against the contacts"
    ],
    "exp": "Brass expands more than steel. If bonded together, heating the strip forces the brass side to grow longer, forcing the whole strip to curl towards the steel side. This mechanical bending force is used to actuate microswitches.",
    "cat": "TEMP",
    "id": "T14B_038"
  },
  {
    "q": "What is the most common application of a Bimetallic Strip inside a marine electrical starter panel?",
    "a": "It forms the core of the Thermal Overload Relay (OLR); motor current heats the strip, causing it to bend and trip the motor contactor if the current stays too high for too long",
    "opts": [
      "It forms the core of the Thermal Overload Relay (OLR); motor current heats the strip, causing it to bend and trip the motor contactor if the current stays too high for too long",
      "It adjusts the AVR voltage based on ambient room temperature",
      "It acts as a High Rupturing Capacity (HRC) fuse for short circuits",
      "It prevents condensation by turning on the space heater"
    ],
    "exp": "In an OLR, the motor's power flows through tiny heater coils wrapped around the bimetallic strips. Overloading the motor generates excess heat, slowly bending the strips until they physically push the trip latch, shutting off the motor.",
    "cat": "TEMP",
    "id": "T14B_039"
  },
  {
    "q": "How does a 'Bulb and Capillary' type thermostat operate?",
    "a": "A sealed bulb filled with fluid expands when heated; the expanding fluid travels up a narrow capillary tube and pushes against a bellows to actuate an electrical switch",
    "opts": [
      "A metal wire inside the capillary physically expands to push the switch",
      "A sealed bulb filled with fluid expands when heated; the expanding fluid travels up a narrow capillary tube and pushes against a bellows to actuate an electrical switch",
      "It uses the capillary action of water to short out two electrical probes",
      "Light traveling down a fiber optic capillary tube is dimmed by temperature changes in the bulb"
    ],
    "exp": "Common in refrigeration and deep fryers. The bulb sits in the cold room, while the long, thin capillary tube routes the expanding gas/liquid back to a robust mechanical switch box mounted on the bulkhead outside.",
    "cat": "TEMP",
    "id": "T14B_040"
  },
  {
    "q": "If a PT100 sensor's cable is accidentally severed (Open Circuit), what will the Engine Control Room display typically show?",
    "a": "An extreme high temperature fault (e.g., +850°C) or 'Sensor Fault / Open Loop' because the panel reads infinite resistance",
    "opts": [
      "Exactly 0°C",
      "An extreme low temperature fault (e.g., -200°C)",
      "The last known good temperature reading indefinitely",
      "An extreme high temperature fault (e.g., +850°C) or 'Sensor Fault / Open Loop' because the panel reads infinite resistance"
    ],
    "exp": "For a PT100, higher resistance = higher temperature. A broken wire represents infinite resistance. Most automation systems will interpret this as the maximum possible temperature off the scale, and trigger an immediate sensor failure alarm.",
    "cat": "TEMP",
    "id": "T14B_041"
  },
  {
    "q": "If a PT100 sensor is crushed and internally short-circuited (0 Ohms), what will the panel display?",
    "a": "An extreme low temperature fault (e.g., -200°C) or 'Short Circuit Fault'",
    "opts": [
      "It will blow the control panel fuse immediately",
      "An extreme high temperature fault (+850°C)",
      "An extreme low temperature fault (e.g., -200°C) or 'Short Circuit Fault'",
      "Exactly 100°C"
    ],
    "exp": "Zero ohms is below the 0°C baseline of 100 ohms. The computer extrapolates this backward on the linear curve, hitting the absolute minimum of its programmed range (often -200°C) before throwing a fault flag.",
    "cat": "TEMP",
    "id": "T14B_042"
  },
  {
    "q": "Why is it important to never install a new Thermocouple using standard copper electrical wire to extend its reach to the panel?",
    "a": "The connection between the thermocouple leads and the standard copper wire creates a new, unwanted bimetallic junction that will generate its own EMF, destroying the accuracy of the reading",
    "opts": [
      "Standard copper wire has too much resistance for the Seebeck effect to overcome",
      "Copper wire will melt at the temperatures thermocouples operate in",
      "Copper wire cannot carry the high voltage generated by a thermocouple",
      "The connection between the thermocouple leads and the standard copper wire creates a new, unwanted bimetallic junction that will generate its own EMF, destroying the accuracy of the reading"
    ],
    "exp": "Thermocouples MUST be extended using 'Compensating Cable' or 'Extension Wire' made of the exact same alloys as the sensor itself (e.g., Chromel and Alumel for Type K). Any other metal creates a false junction.",
    "cat": "TEMP",
    "id": "T14B_043"
  },
  {
    "q": "What happens if the Cold Junction Compensation (CJC) thermistor on the control panel fails and reads 0°C continuously?",
    "a": "All connected thermocouples will display a falsely low reading, exactly equal to the actual ambient temperature of the control room",
    "opts": [
      "All connected thermocouples will instantly read maximum scale",
      "All connected thermocouples will display a falsely low reading, exactly equal to the actual ambient temperature of the control room",
      "The display will freeze and require a software reboot",
      "The thermocouples will short circuit and burn out"
    ],
    "exp": "If the exhaust is 400°C, and the ECR is 30°C, the TC only generates millivolts for 370°C. The CJC is supposed to add the 30°C back in. If the CJC breaks and adds 0°C, the panel will display 370°C, under-reporting the heat by exactly the room's temperature.",
    "cat": "TEMP",
    "id": "T14B_044"
  },
  {
    "q": "Which type of temperature sensor provides the best long-term stability and repeatability without drifting over years of operation?",
    "a": "The Platinum RTD (PT100)",
    "opts": [
      "The Type K Thermocouple",
      "The Bimetallic Strip",
      "The NTC Thermistor",
      "The Platinum RTD (PT100)"
    ],
    "exp": "Platinum is a noble metal. It does not oxidize, degrade, or alter its molecular structure at normal temperatures. A high-quality PT100 can hold its calibration to within a fraction of a degree for decades.",
    "cat": "TEMP",
    "id": "T14B_045"
  },
  {
    "q": "What is the approximate resistance of a standard PT100 sensor if it is exposed to -50°C (e.g., in an LNG cargo hold)?",
    "a": "80.3 Ohms",
    "opts": [
      "50.0 Ohms",
      "100.0 Ohms",
      "119.2 Ohms",
      "80.3 Ohms"
    ],
    "exp": "Base is 100 Ω. Decrease is 50°C × 0.385 Ω/°C = 19.25 Ω. 100 - 19.25 = 80.75 Ω (The exact IEC standard curve bows slightly to 80.3 Ω, but the linear math is close enough for field estimation).",
    "cat": "TEMP",
    "id": "T14B_046"
  },
  {
    "q": "In a 4-wire PT100 system, what is the exact function of the two extra wires?",
    "a": "Two wires provide the constant excitation current, while the other two wires are used purely to measure the voltage drop directly at the sensor element, completely eliminating ALL lead resistance errors",
    "opts": [
      "Two wires provide the constant excitation current, while the other two wires are used purely to measure the voltage drop directly at the sensor element, completely eliminating ALL lead resistance errors",
      "Two wires are for heating, two are for measuring",
      "They ground the sensor to the hull to prevent static buildup",
      "They provide a backup 24V power supply in case the main supply fails"
    ],
    "exp": "This is a true 'Kelvin Bridge' measurement. Because the measuring wires carry virtually zero current (multimeters have high impedance), there is zero voltage drop along them. The computer reads the absolute true voltage across the platinum element, providing lab-grade accuracy.",
    "cat": "TEMP",
    "id": "T14B_047"
  },
  {
    "q": "What is a major limitation of using NTC Thermistors for general temperature measurement?",
    "a": "They are highly non-linear, meaning their resistance curve bends drastically; they are only accurate over a very narrow temperature range",
    "opts": [
      "They require 440V to operate, making them unsafe",
      "They physically melt at 50°C",
      "They are highly non-linear, meaning their resistance curve bends drastically; they are only accurate over a very narrow temperature range",
      "They generate magnetic fields that interfere with navigation equipment"
    ],
    "exp": "While a PT100 is a straight line on a graph, an NTC thermistor is an extreme exponential curve. You need complex software algorithms to flatten the curve if you want to use it across a wide range, which is why they are mostly used as narrow-range setpoint switches.",
    "cat": "TEMP",
    "id": "T14B_048"
  },
  {
    "q": "A Type J Thermocouple is made of Iron and Constantan. Why is it generally avoided in humid marine engine rooms compared to Type K?",
    "a": "The Iron wire is highly susceptible to rust and oxidation in humid marine environments, which rapidly destroys the sensor's accuracy and integrity",
    "opts": [
      "The Iron wire is highly susceptible to rust and oxidation in humid marine environments, which rapidly destroys the sensor's accuracy and integrity",
      "Type J generates AC voltage instead of DC voltage",
      "Constantan melts at standard engine operating temperatures",
      "Iron is magnetic and interferes with the ship's compass"
    ],
    "exp": "Chromel and Alumel (Type K) are nickel alloys that resist oxidation superbly. An Iron wire (Type J) exposed to hot, salty engine room air will rust away quickly.",
    "cat": "TEMP",
    "id": "T14B_049"
  },
  {
    "q": "Why is the accuracy of the 'Cold Junction' measurement critical to the overall accuracy of a Thermocouple system?",
    "a": "Because the thermocouple only measures the difference between the hot and cold ends; any error in measuring the cold junction's ambient temperature is directly added to the final temperature reading",
    "opts": [
      "Because if the cold junction freezes, the entire wire becomes superconductive",
      "Because the cold junction generates the 24V power required to run the sensor",
      "Because it acts as the primary earth ground for the automation rack",
      "Because the thermocouple only measures the difference between the hot and cold ends; any error in measuring the cold junction's ambient temperature is directly added to the final temperature reading"
    ],
    "exp": "The formula is: Actual Temp = (Thermocouple Delta) + (Cold Junction Temp). If the PT100 measuring the panel's internal temperature is off by 5°C, every single exhaust temperature reading on the main engine will be wrong by exactly 5°C.",
    "cat": "TEMP",
    "id": "T14B_050"
  },
  {
    "q": "What is the working principle of the standard Magnetic Pickup (Variable Reluctance) Tachometer used on main and auxiliary engines?",
    "a": "A permanent magnet surrounded by a coil sits near a toothed wheel; as ferromagnetic gear teeth pass the magnet, they alter the magnetic flux, inducing an AC voltage pulse in the coil",
    "opts": [
      "A laser bounces off a reflective sticker on the shaft",
      "A mechanical cable spins a small centrifugal governor behind the dial",
      "A permanent magnet surrounded by a coil sits near a toothed wheel; as ferromagnetic gear teeth pass the magnet, they alter the magnetic flux, inducing an AC voltage pulse in the coil",
      "A small AC generator outputs a voltage proportional to the shaft speed"
    ],
    "exp": "This is the most robust and common speed sensor. It has zero moving parts. The spinning iron teeth on the flywheel literally chop through the magnetic field, generating a stream of electrical pulses. More pulses per second = higher RPM.",
    "cat": "SPEED",
    "id": "T14B_081"
  },
  {
    "q": "What is the mathematical formula used by a tachometer panel to convert the raw pulse signal from a magnetic pickup into an RPM display?",
    "a": "RPM = (Frequency of pulses in Hz × 60) / Number of teeth on the wheel",
    "opts": [
      "RPM = Pulses per second + Ambient temperature",
      "RPM = (Frequency of pulses in Hz × 60) / Number of teeth on the wheel",
      "RPM = Voltage output × 1000",
      "RPM = (Number of teeth × 60) / Current in milliamps"
    ],
    "exp": "If a wheel has 60 teeth, and it spins at 1 revolution per second (60 RPM), it generates 60 pulses per second (60 Hz). The computer simply counts the Hz and divides by the known tooth count to display exactly how fast the engine is spinning.",
    "cat": "SPEED",
    "id": "T14B_082"
  },
  {
    "q": "Why is the Magnetic Pickup sensor highly preferred over older 'Tachogenerators' in marine environments?",
    "a": "It is completely solid-state with zero moving parts, no bearings, and no carbon brushes to wear out, making it practically maintenance-free",
    "opts": [
      "It physically connects to the shaft, preventing it from slipping",
      "It is completely solid-state with zero moving parts, no bearings, and no carbon brushes to wear out, making it practically maintenance-free",
      "It relies entirely on the ship's 440V supply to operate",
      "It generates a much higher voltage that can shock the operator"
    ],
    "exp": "Tachogenerators were small dynamos bolted to the engine shaft. They suffered from mechanical bearing failure and brush wear due to engine vibration. Magnetic pickups hover 2mm away from the flywheel, never touching it, rendering them immune to mechanical wear.",
    "cat": "SPEED",
    "id": "T14B_083"
  },
  {
    "q": "What is the critical mechanical adjustment required when installing a Magnetic Pickup (MPU) sensor?",
    "a": "The 'Air Gap' (the physical distance between the sensor tip and the top of the gear tooth), which typically must be carefully set between 1.0 mm and 3.0 mm",
    "opts": [
      "The 'Air Gap' (the physical distance between the sensor tip and the top of the gear tooth), which typically must be carefully set between 1.0 mm and 3.0 mm",
      "The 'Tension' of the internal spring",
      "The 'Pitch Angle' of the sensor housing",
      "The amount of lubricating oil inside the sensor body"
    ],
    "exp": "Magnetic fields drop off exponentially with distance. If the sensor is backed off to 5mm, it won't 'see' the teeth passing. If it's screwed in to 0.1mm, thermal expansion or shaft vibration will cause the spinning metal teeth to smash the sensor tip.",
    "cat": "SPEED",
    "id": "T14B_084"
  },
  {
    "q": "If the Air Gap on a Magnetic Pickup sensor is perfectly set, but the tachometer still reads 0 RPM on a running engine, what is a common physical cause?",
    "a": "A buildup of ferromagnetic debris (microscopic iron shavings from engine wear) stuck to the magnetic tip of the sensor, which 'blinds' the magnetic field",
    "opts": [
      "The flywheel teeth have become too polished and smooth",
      "The engine room temperature has exceeded 40°C",
      "A buildup of ferromagnetic debris (microscopic iron shavings from engine wear) stuck to the magnetic tip of the sensor, which 'blinds' the magnetic field",
      "The sensor's internal battery has died"
    ],
    "exp": "The sensor tip is a strong magnet. It naturally attracts any iron sludge floating in the engine oil. If a thick blob of iron paste covers the tip, the magnetic field is permanently short-circuited through the sludge, and it can no longer detect the moving teeth. Wiping the tip clean fixes it.",
    "cat": "SPEED",
    "id": "T14B_085"
  },
  {
    "q": "How does a 'Hall Effect' speed sensor differ fundamentally from a Variable Reluctance (Magnetic Pickup) sensor?",
    "a": "A Hall effect sensor requires an external DC power supply to operate a semiconductor chip, allowing it to accurately read speeds all the way down to 0 RPM, whereas a magnetic pickup is self-powered but fails at very low speeds",
    "opts": [
      "A Hall effect sensor generates massive amounts of AC voltage",
      "A Hall effect sensor must be physically bolted directly into the spinning gear",
      "A Hall effect sensor requires an external DC power supply to operate a semiconductor chip, allowing it to accurately read speeds all the way down to 0 RPM, whereas a magnetic pickup is self-powered but fails at very low speeds",
      "A Hall effect sensor uses optical lasers instead of magnets"
    ],
    "exp": "A simple magnetic coil needs fast-moving metal to generate a measurable voltage. If the gear turns at 1 RPM, the pulse is too weak to read. A Hall Effect chip is actively powered by 24V. It outputs a crisp, perfect square wave pulse whether the tooth passes at 10,000 RPM or 1 RPM.",
    "cat": "SPEED",
    "id": "T14B_086"
  },
  {
    "q": "What type of speed sensor is required to monitor a marine Turbocharger?",
    "a": "A high-frequency proximity sensor (Hall effect or specialized magnetic pickup) capable of reliably counting pulses at extreme speeds, ranging from 10,000 to over 30,000 RPM",
    "opts": [
      "A mechanical centrifugal flyweight mechanism",
      "A simple limit switch triggered by a cam",
      "A slow-speed shaft encoder with 10 pulses per revolution",
      "A high-frequency proximity sensor (Hall effect or specialized magnetic pickup) capable of reliably counting pulses at extreme speeds, ranging from 10,000 to over 30,000 RPM"
    ],
    "exp": "Turbochargers spin incredibly fast. A standard heavy-duty magnetic pickup would suffer from signal blur. Specialized high-frequency inductive or Hall sensors are aimed at a dedicated 'phonic wheel' (slotted disc) on the compressor shaft to count the massive number of pulses per second.",
    "cat": "SPEED",
    "id": "T14B_087"
  },
  {
    "q": "What is the critical safety function of the Turbocharger Speed Sensor in the engine automation system?",
    "a": "It provides 'Over-Speed Protection'; if the RPM exceeds the manufacturer's limit (typically 110-120% of rated speed), it triggers an immediate alarm and automatically forces an engine slow-down or fuel cut to prevent the turbine from exploding due to centrifugal stress",
    "opts": [
      "It provides 'Over-Speed Protection'; if the RPM exceeds the manufacturer's limit (typically 110-120% of rated speed), it triggers an immediate alarm and automatically forces an engine slow-down or fuel cut to prevent the turbine from exploding due to centrifugal stress",
      "It ensures the turbocharger runs exactly at the same speed as the propeller",
      "It automatically injects lubricating oil when the speed drops",
      "It controls the pitch of the main propeller blades"
    ],
    "exp": "If the ship loses its propeller (load rejection), the engine races, pushing massive exhaust volume into the turbo. The turbo can instantly over-speed. At 35,000 RPM, centrifugal forces will rip the titanium blades off the shaft, throwing shrapnel through the casing like a grenade. The sensor initiates a fuel cut before this happens.",
    "cat": "SPEED",
    "id": "T14B_088"
  },
  {
    "q": "If the Turbocharger Speed Sensor indicates an abnormally LOW RPM (Under-speed) while the main engine is at Full Ahead load, what mechanical fault does this typically indicate?",
    "a": "Severe fouling (dirt buildup) on the compressor blades, a blocked air intake filter, or failing turbocharger bearings",
    "opts": [
      "The main shaft earthing brush is disconnected",
      "The fuel oil is too hot",
      "Severe fouling (dirt buildup) on the compressor blades, a blocked air intake filter, or failing turbocharger bearings",
      "The main engine governor is hunting"
    ],
    "exp": "If the engine is pushing massive exhaust gas, the turbo SHOULD be spinning fast. If it's sluggish, it's either choking on a dirty air filter, heavy soot on the nozzle ring, or the bearings are dying and dragging the shaft down.",
    "cat": "SPEED",
    "id": "T14B_089"
  },
  {
    "q": "What is a 'Shaft Encoder' (or Rotary Encoder)?",
    "a": "A high-precision optical or magnetic sensor that reads a specialized disc with hundreds or thousands of microscopic slots, outputting a dense stream of pulses to calculate not just speed, but exact absolute angular position and direction of rotation",
    "opts": [
      "A chemical sensor that measures the sulfur content of the shaft lube oil",
      "A device that encodes Morse code signals for the ship's telegraph",
      "A high-precision optical or magnetic sensor that reads a specialized disc with hundreds or thousands of microscopic slots, outputting a dense stream of pulses to calculate not just speed, but exact absolute angular position and direction of rotation",
      "A heavy mechanical gear that locks the propeller shaft in place"
    ],
    "exp": "While a simple magnetic pickup on a 60-tooth flywheel is fine for knowing 'we are at 1500 RPM', an encoder with 4000 slots per revolution tells the computer 'the shaft is exactly at 182.4 degrees and moving clockwise'.",
    "cat": "SPEED",
    "id": "T14B_090"
  },
  {
    "q": "Where are high-resolution Shaft Encoders primarily used onboard ship?",
    "a": "In highly precise control systems like Controllable Pitch Propeller (CPP) feedback mechanisms, electronic Cam-less main engines (to track exact piston position), and Azimuth thruster steering modules",
    "opts": [
      "In highly precise control systems like Controllable Pitch Propeller (CPP) feedback mechanisms, electronic Cam-less main engines (to track exact piston position), and Azimuth thruster steering modules",
      "In the galley exhaust fans",
      "For monitoring the speed of the sewage treatment macerator pump",
      "Inside the main switchboard to measure AC frequency"
    ],
    "exp": "Modern electronic main engines (like the MAN ME-C series) don't have mechanical camshafts to push fuel pumps. The computer fires the injectors electronically. It MUST know exactly where the piston is in the cylinder down to a fraction of a millimeter. Dual shaft encoders on the flywheel provide this hyper-accurate positional data.",
    "cat": "SPEED",
    "id": "T14B_091"
  },
  {
    "q": "How can an ETO manually test a Magnetic Pickup (MPU) speed sensor while the engine is completely stopped?",
    "a": "Disconnect the sensor wires, set a multimeter to AC Millivolts, and repeatedly swipe a ferrous metal tool (like a steel screwdriver) rapidly across the sensor tip to verify it generates a voltage pulse",
    "opts": [
      "Apply 24V DC to the sensor and listen for a click",
      "Submerge the sensor in hot oil and measure its resistance",
      "Disconnect the sensor wires, set a multimeter to AC Millivolts, and repeatedly swipe a ferrous metal tool (like a steel screwdriver) rapidly across the sensor tip to verify it generates a voltage pulse",
      "Shine a bright flashlight at the tip and check for a mA signal"
    ],
    "exp": "Because it generates its own voltage based on changing magnetic flux, waving a steel screwdriver past the tip mimics a passing gear tooth. If the multimeter jumps 50-100mV AC, the coil is intact. If it stays at 0.0mV, the internal wire is snapped.",
    "cat": "SPEED",
    "id": "T14B_092"
  },
  {
    "q": "Why is it absolutely critical to use 'Shielded' (Screened) twisted-pair cable for routing speed sensor signals from the engine to the control room?",
    "a": "The raw pulse signal from an MPU is extremely weak (often just 1 or 2 Volts AC); unshielded cable would act as an antenna, picking up severe Electromagnetic Interference (EMI) from massive VFDs and power cables, totally corrupting the RPM reading",
    "opts": [
      "Shielded cable is required to handle the 440V generated by the sensor",
      "The shield prevents the sensor from catching fire if oil leaks on it",
      "The raw pulse signal from an MPU is extremely weak (often just 1 or 2 Volts AC); unshielded cable would act as an antenna, picking up severe Electromagnetic Interference (EMI) from massive VFDs and power cables, totally corrupting the RPM reading",
      "Shielded cable is required to satisfy watertight IP68 requirements"
    ],
    "exp": "If 60Hz noise from a giant seawater pump cable bleeds into the speed sensor wire, the engine governor will falsely read those 60Hz spikes as extra gear teeth passing, thinking the engine is overspeeding, and wildly cut the fuel. The metal foil shield blocks this noise.",
    "cat": "SPEED",
    "id": "T14B_093"
  },
  {
    "q": "What happens if one single tooth on the engine flywheel ring gear breaks off entirely?",
    "a": "The sensor misses a pulse on every revolution, which the sensitive electronic governor may interpret as a sudden micro-drop in speed, potentially causing the fuel rack to chatter or the engine to hunt slightly",
    "opts": [
      "The sensor will output 0 RPM permanently",
      "The sensor misses a pulse on every revolution, which the sensitive electronic governor may interpret as a sudden micro-drop in speed, potentially causing the fuel rack to chatter or the engine to hunt slightly",
      "The engine will instantly trip on overspeed",
      "The MPU coil will overheat and short circuit"
    ],
    "exp": "A missing tooth creates a momentary gap in the steady stream of AC pulses. High-end governors expect perfect timing. A blip in the pulse train makes the computer calculate a sudden drop in speed, causing it to inject a tiny squirt of extra fuel unnecessarily.",
    "cat": "SPEED",
    "id": "T14B_094"
  },
  {
    "q": "When adjusting the air gap on a threaded Magnetic Pickup sensor, what is a standard, safe field-expedient method if a feeler gauge cannot reach the tip?",
    "a": "Gently screw the sensor in by hand until it makes physical contact with the top of a gear tooth, then back it out (unscrew it) by exactly 1/2 to 3/4 of a turn, and tighten the locknut",
    "opts": [
      "Screw it in with a wrench until it bends the gear tooth slightly",
      "Gently screw the sensor in by hand until it makes physical contact with the top of a gear tooth, then back it out (unscrew it) by exactly 1/2 to 3/4 of a turn, and tighten the locknut",
      "Leave it loose so it can vibrate freely with the engine",
      "Push it in until it sparks, then pull it back 5 centimeters"
    ],
    "exp": "Standard MPU threads (like 5/8-18 UNF) move the tip roughly 1.4 mm for every full 360-degree rotation. Backing it out half a turn safely establishes an air gap of about 0.7 mm, which is close enough to guarantee a strong signal without risking a collision.",
    "cat": "SPEED",
    "id": "T14B_095"
  },
  {
    "q": "What is the expected AC voltage output of a healthy Magnetic Pickup sensor when the engine is at normal running speed?",
    "a": "Typically between 2.0 V and 10.0 V AC RMS, depending on the air gap, tooth size, and exact RPM",
    "opts": [
      "Over 400 V AC",
      "Exactly 24V DC",
      "Less than 10 millivolts",
      "Typically between 2.0 V and 10.0 V AC RMS, depending on the air gap, tooth size, and exact RPM"
    ],
    "exp": "The faster the teeth fly past, the stronger the magnetic disturbance, and the higher the generated voltage. At cranking speed, it might only be 1.5V AC. At full speed, it might hit 8V AC. The computer only cares about the frequency of the waves, not the height, as long as the voltage is high enough to trigger the counting circuit.",
    "cat": "SPEED",
    "id": "T14B_096"
  },
  {
    "q": "Why are optical speed sensors (using a laser and reflective tape) generally NOT used on the main components of a marine diesel engine?",
    "a": "The engine room environment is saturated with oil mist, soot, and dirt; the optical lenses and reflective stickers would quickly become coated in grime, blinding the sensor entirely",
    "opts": [
      "Optical sensors consume too much power from the 24V battery bank",
      "Optical sensors cannot measure speeds below 1000 RPM",
      "The engine room environment is saturated with oil mist, soot, and dirt; the optical lenses and reflective stickers would quickly become coated in grime, blinding the sensor entirely",
      "Lasers are illegal under MARPOL safety regulations"
    ],
    "exp": "Optical tachometers are great for clean laboratories or handheld spot checks. For permanent, 24/7 reliability covered in hot diesel oil, only magnetic sensing technology survives.",
    "cat": "SPEED",
    "id": "T14B_097"
  },
  {
    "q": "What happens if the mounting bracket for a turbocharger speed sensor vibrates loose and allows the sensor to chatter slightly?",
    "a": "The sensor's own vibration will cross the magnetic field, generating false, erratic high-frequency pulses that the computer interprets as massive speed spikes, triggering nuisance over-speed alarms",
    "opts": [
      "The sensor will automatically recalibrate itself to the new distance",
      "The sensor's own vibration will cross the magnetic field, generating false, erratic high-frequency pulses that the computer interprets as massive speed spikes, triggering nuisance over-speed alarms",
      "The 4-20mA loop will drop to exactly 4mA",
      "The turbocharger will physically slow down to match the vibration"
    ],
    "exp": "Relative motion is all that matters. If the wheel is steady but the sensor is shaking wildly on a loose bracket, it looks like a million teeth are flying by. The RPM gauge will jump erratically, and the alarm will sound.",
    "cat": "SPEED",
    "id": "T14B_098"
  },
  {
    "q": "If the main engine Governor and the Engine Control Room tachometer are fed by the same Magnetic Pickup sensor, how is the signal shared?",
    "a": "The raw pulse signal goes strictly to the Governor module first; the Governor then processes it and outputs a clean, secondary 4-20mA analog signal to drive the ECR display gauges",
    "opts": [
      "The raw pulse signal goes strictly to the Governor module first; the Governor then processes it and outputs a clean, secondary 4-20mA analog signal to drive the ECR display gauges",
      "A massive step-up transformer splits the 220V signal",
      "The tachometer receives the signal on Mondays, Wednesdays, and Fridays",
      "The wires are simply spliced together with electrical tape"
    ],
    "exp": "You never 'split' or splice a raw, weak AC pulse signal from an MPU, as it halves the voltage and introduces noise. The critical safety device (governor) gets the pure, shielded raw data. It then uses its internal microprocessor to generate a robust 4-20mA signal to safely drive the ship's remote meters.",
    "cat": "SPEED",
    "id": "T14B_099"
  },
  {
    "q": "What is the primary difference in the shape of the output signal between a Magnetic Pickup (Variable Reluctance) and a Hall Effect sensor?",
    "a": "A Magnetic Pickup outputs a smooth, wavy AC sine wave, while a powered Hall Effect sensor outputs a crisp, digital square wave (On/Off DC pulses)",
    "opts": [
      "A Magnetic pickup outputs a flat DC 4-20mA line directly",
      "A Hall effect sensor outputs high-voltage 220V AC",
      "A Magnetic Pickup outputs a smooth, wavy AC sine wave, while a powered Hall Effect sensor outputs a crisp, digital square wave (On/Off DC pulses)",
      "They both output identical sine waves, but the Hall effect is green"
    ],
    "exp": "Because the Hall chip is an active electronic device switching a 24V supply on and off, it creates perfect, sharp 90-degree square waves. The passive magnetic coil just generates a rising and falling sine wave that changes height based on speed.",
    "cat": "SPEED",
    "id": "T14B_100"
  },
  {
    "q": "How does an ETO verify the accuracy of the ECR tachometer display against the actual physical engine speed?",
    "a": "By using an independent, calibrated handheld optical or contact tachometer directly on the engine shaft, and comparing its reading to the ECR panel display",
    "opts": [
      "By listening to the pitch of the turbocharger whine",
      "By dividing the generator's voltage by its frequency",
      "By counting the engine strokes per minute visually with a stopwatch",
      "By using an independent, calibrated handheld optical or contact tachometer directly on the engine shaft, and comparing its reading to the ECR panel display"
    ],
    "exp": "Calibration requires an independent reference. The ETO aims a calibrated laser tachometer at a piece of reflective tape on the turning flywheel, reads exactly 750 RPM, and ensures the digital display in the control room isn't drifting.",
    "cat": "SPEED",
    "id": "T14B_101"
  },
  {
    "q": "What does a 'Tachogenerator' physically look like, and what does it output?",
    "a": "It looks like a miniature electric motor bolted to the end of the engine shaft; it outputs a DC voltage (e.g., 0-60V) or an AC frequency directly proportional to the shaft's RPM",
    "opts": [
      "It looks like a flat electronic microchip; it outputs a 4-20mA signal",
      "It looks like a miniature electric motor bolted to the end of the engine shaft; it outputs a DC voltage (e.g., 0-60V) or an AC frequency directly proportional to the shaft's RPM",
      "It is a glass tube filled with mercury; it outputs a pressure signal",
      "It is a large pneumatic bellows; it outputs 3-15 psi"
    ],
    "exp": "Before digital pulse counting existed, engineers attached literal tiny generators to the shaft. If it spun twice as fast, it made twice as much voltage. The 'tachometer' dial on the panel was just a voltmeter with a custom faceplate painted to say 'RPM' instead of 'Volts'.",
    "cat": "SPEED",
    "id": "T14B_102"
  },
  {
    "q": "If a turbocharger speed sensor fails completely at sea, what is the safest operational approach until it is repaired?",
    "a": "Inform the Chief Engineer, monitor the turbocharger locally by checking bearing temperatures, lubricating oil flow, and exhaust gas temperatures, and rely on engine load/scavenge pressure correlation",
    "opts": [
      "Stop the main engine and drop anchor immediately",
      "Bypass the turbocharger by opening the exhaust wastegate fully",
      "Run the engine at 110% load to clear any soot blockages",
      "Inform the Chief Engineer, monitor the turbocharger locally by checking bearing temperatures, lubricating oil flow, and exhaust gas temperatures, and rely on engine load/scavenge pressure correlation"
    ],
    "exp": "While the overspeed alarm is lost, the engine can still run safely if closely monitored. The engineers know that at 80% load, the scavenge pressure should be 1.5 bar. If that pressure holds steady, the turbo is spinning correctly, even if the gauge is dead.",
    "cat": "SPEED",
    "id": "T14B_103"
  },
  {
    "q": "Why do precision Shaft Encoders typically output two separate, offset signal channels (Channel A and Channel B)?",
    "a": "To determine the exact Direction of Rotation; by checking which pulse (A or B) arrives first, the computer knows if the shaft is turning Forward or Astern",
    "opts": [
      "One channel is for voltage, the other is for current",
      "To provide a fail-safe backup if one channel burns out",
      "To determine the exact Direction of Rotation; by checking which pulse (A or B) arrives first, the computer knows if the shaft is turning Forward or Astern",
      "One channel goes to the bridge, the other goes to the engine room"
    ],
    "exp": "This is called 'Quadrature'. The slots for Sensor A and Sensor B are slightly offset. If spinning clockwise, A pulses before B. If spinning counter-clockwise, B pulses before A. A single sensor can only count speed, not direction.",
    "cat": "SPEED",
    "id": "T14B_104"
  },
  {
    "q": "What happens if the teeth on the flywheel ring gear become heavily worn, rounded, or chipped over decades of use?",
    "a": "The magnetic flux change becomes 'muddy' and weak; the sensor outputs a low-voltage, distorted signal that the governor may miscount, causing erratic RPM readings",
    "opts": [
      "The engine will run perfectly, but in the reverse direction",
      "The 4-20mA loop will short circuit",
      "The sensor will automatically increase its magnetic strength to compensate",
      "The magnetic flux change becomes 'muddy' and weak; the sensor outputs a low-voltage, distorted signal that the governor may miscount, causing erratic RPM readings"
    ],
    "exp": "The MPU relies on the sharp, crisp edges of the iron gear teeth to snap the magnetic field back and forth. Rounded, mashed teeth create a slow, blurry magnetic change, resulting in a weak electrical pulse that might fall below the governor's detection threshold.",
    "cat": "SPEED",
    "id": "T14B_105"
  },
  {
    "q": "On a large marine diesel generator, why are there usually multiple, completely independent Magnetic Pickups clustered around the flywheel?",
    "a": "Total redundancy and separation of critical systems: one MPU feeds the Governor (speed control), one feeds the Overspeed Trip (safety shutdown), and one may feed the Alarm/Monitoring system",
    "opts": [
      "To generate enough combined AC voltage to spark the spark plugs",
      "To average out the speed readings for extreme mathematical precision",
      "Total redundancy and separation of critical systems: one MPU feeds the Governor (speed control), one feeds the Overspeed Trip (safety shutdown), and one may feed the Alarm/Monitoring system",
      "Because one sensor can only read up to 500 RPM"
    ],
    "exp": "Classification societies demand that safety systems are entirely separated from control systems. If the governor's sensor fails and it pushes the engine to 120% speed, the independent Overspeed sensor MUST still have a perfect, separate set of eyes to see the danger and kill the engine.",
    "cat": "SPEED",
    "id": "T14B_106"
  },
  {
    "q": "If an ETO measures the resistance of a standard Magnetic Pickup coil, what is the expected ohm range for a healthy sensor?",
    "a": "Typically between 200 Ohms and 1000 Ohms, depending on the manufacturer and amount of wire in the coil",
    "opts": [
      "Typically between 200 Ohms and 1000 Ohms, depending on the manufacturer and amount of wire in the coil",
      "Exactly 100.0 Ohms",
      "Less than 5 Ohms (near short circuit)",
      "Over 10 Mega-Ohms (Open circuit)"
    ],
    "exp": "An MPU is just hundreds of turns of very fine copper wire. It has moderate resistance. If you measure 'OL' (infinity), the wire is snapped. If you measure 2 Ohms, the coil has melted and shorted out internally.",
    "cat": "SPEED",
    "id": "T14B_107"
  },
  {
    "q": "When installing a speed sensor cable, why must the outer braided shield be grounded at ONE end only (usually inside the control panel)?",
    "a": "To prevent 'Earth Loops'; if grounded at both ends, slight voltage differences in the ship's hull will push current through the shield, generating massive magnetic noise that corrupts the delicate sensor signal inside",
    "opts": [
      "To prevent 'Earth Loops'; if grounded at both ends, slight voltage differences in the ship's hull will push current through the shield, generating massive magnetic noise that corrupts the delicate sensor signal inside",
      "To allow the sensor to physically spin without ripping the wire",
      "Because marine regulations only allow one grounding strap per machine",
      "Because grounding both ends would double the 24V power supply and burn out the sensor"
    ],
    "exp": "The shield is a metal tunnel designed to absorb stray radio waves and dump them to earth. If tied down at both the engine and the ECR, it becomes a conductor connecting two different ground potentials. Current flows through the shield, defeating its purpose.",
    "cat": "SPEED",
    "id": "T14B_108"
  },
  {
    "q": "How does an electronic tachometer display '0 RPM' when an engine is stopped, if a magnetic pickup generates absolutely 0 volts at a standstill?",
    "a": "The signal processing circuit interprets the total absence of frequency pulses (0 Hz) as 0 RPM",
    "opts": [
      "It measures the static resistance of the flywheel metal",
      "It relies on the 'live zero' 4mA signal generated by the coil",
      "The signal processing circuit interprets the total absence of frequency pulses (0 Hz) as 0 RPM",
      "It uses a backup battery to artificially hold the needle at zero"
    ],
    "exp": "Unlike a 4-20mA pressure sensor that explicitly screams 'I am at zero!' by sending 4mA, a raw MPU just goes dead silent. The computer counts the waves. Zero waves per second = zero RPM.",
    "cat": "SPEED",
    "id": "T14B_109"
  },
  {
    "q": "Why is the toothed wheel used for speed sensing always made of ferromagnetic materials (like steel or iron), rather than lightweight aluminum or brass?",
    "a": "Because magnetic pickup sensors rely on manipulating a magnetic field; aluminum and brass are non-magnetic and would pass by the sensor completely undetected",
    "opts": [
      "Because brass creates static electricity that blows the control fuse",
      "Because steel is the only metal strong enough to survive 1500 RPM",
      "Because magnetic pickup sensors rely on manipulating a magnetic field; aluminum and brass are non-magnetic and would pass by the sensor completely undetected",
      "Because aluminum reflects too much light, blinding the sensor"
    ],
    "exp": "The principle relies on 'Variable Reluctance'. Iron easily conducts magnetic lines of force (low reluctance). When the iron tooth passes, it pulls the magnet's field strongly, dragging lines of flux across the copper coil to generate the pulse. Non-magnetic metals are invisible to the sensor.",
    "cat": "SPEED",
    "id": "T14B_110"
  },
  {
    "q": "How is a DP cell used for level measurement in a pressurized fuel oil tank?",
    "a": "H port to tank bottom, L port to vapour space - calculates hydrostatic head DP = ρgh regardless of tank pressure",
    "opts": [
      "H port open to atmosphere, L port to tank bottom - vacuum measurement",
      "Both ports to tank bottom using Venturi effect",
      "Ultrasonic beam bounced off liquid surface",
      "H port to tank bottom, L port to vapour space - calculates hydrostatic head DP = ρgh regardless of tank pressure"
    ],
    "exp": "H port measures total pressure at bottom (liquid head + vapour pressure). L port measures vapour pressure only. Subtracting gives pure liquid hydrostatic head (ρgh). This works regardless of whether the tank is pressurised, vacuumed, or atmospheric - the tank pressure cancels out.",
    "cat": "DP_CELL",
    "id": "T14B_009"
  },
  {
    "q": "What is the core sensing element in a standard marine electronic pressure transducer?",
    "a": "A flexible diaphragm bonded with strain gauges; as pressure deflects the diaphragm, the strain gauges stretch or compress, altering their electrical resistance",
    "opts": [
      "A flexible diaphragm bonded with strain gauges; as pressure deflects the diaphragm, the strain gauges stretch or compress, altering their electrical resistance",
      "A bimetallic strip that bends under heavy pressure",
      "A rotating turbine wheel that spins faster at higher pressures",
      "A mercury-filled glass tube that blocks a light beam"
    ],
    "exp": "Strain gauges are microscopic zig-zag patterns of wire. When the diaphragm bulges under pressure, the wire stretches, becoming thinner and longer. This increases its electrical resistance, which is measured by a Wheatstone bridge circuit.",
    "cat": "PRESS",
    "id": "T14B_051"
  },
  {
    "q": "Why do marine pressure transducers overwhelmingly output a 4-20mA signal rather than a 0-10V signal?",
    "a": "A 4-20mA current loop is immune to voltage drop over long cable runs and immune to electromagnetic interference (EMI); plus, the 'live zero' (4mA) immediately indicates a broken wire",
    "opts": [
      "A 4-20mA current loop is immune to voltage drop over long cable runs and immune to electromagnetic interference (EMI); plus, the 'live zero' (4mA) immediately indicates a broken wire",
      "Because 4-20mA requires significantly thinner and cheaper cables",
      "Because 0-10V signals are illegal under SOLAS regulations",
      "Because analog meters cannot read voltage, only current"
    ],
    "exp": "Current is constant throughout a series circuit. 12mA leaving the sensor is exactly 12mA arriving at the ECR 100 meters away, regardless of cable resistance. A 5V signal might drop to 4.5V over that distance, causing massive reading errors.",
    "cat": "PRESS",
    "id": "T14B_052"
  },
  {
    "q": "What does the term 'Live Zero' mean in a 4-20mA sensor loop?",
    "a": "It means the absolute minimum reading (e.g., 0 bar pressure) is represented by 4mA of current flowing, rather than 0mA, allowing the system to distinguish between zero pressure and a severed cable",
    "opts": [
      "It means the absolute minimum reading (e.g., 0 bar pressure) is represented by 4mA of current flowing, rather than 0mA, allowing the system to distinguish between zero pressure and a severed cable",
      "It means the sensor automatically calibrates to atmospheric pressure when booted up",
      "It means the sensor requires a dedicated 0V grounding wire",
      "It indicates that the zero potentiometer has been bypassed"
    ],
    "exp": "If 0 bar was 0mA, the computer wouldn't know if the pump was turned off, or if the wire was snipped by a mechanic. With a live zero, 0 bar = 4mA. If the computer sees 0mA, it instantly triggers a 'Loop Fault / Wire Break' alarm.",
    "cat": "PRESS",
    "id": "T14B_053"
  },
  {
    "q": "What is a 'DP Cell' (Differential Pressure Cell)?",
    "a": "A sensor that has two input ports (High and Low) and measures the exact difference in pressure between those two points, outputting a 4-20mA signal proportional to that difference",
    "opts": [
      "A digital processor cell that calibrates ordinary pressure sensors",
      "A sensor that measures absolute vacuum pressure",
      "A sensor that has two input ports (High and Low) and measures the exact difference in pressure between those two points, outputting a 4-20mA signal proportional to that difference",
      "A Dual Purpose cell that measures both temperature and pressure simultaneously"
    ],
    "exp": "If the High port has 10 bar, and the Low port has 8 bar, the DP cell doesn't care about the 10 or the 8. It only measures the difference: 2 bar. It is the workhorse of marine liquid level and flow measurement.",
    "cat": "PRESS",
    "id": "T14B_054"
  },
  {
    "q": "What is the typical internal sensing mechanism of a modern DP Cell?",
    "a": "A capacitance-based sensor where a central metallic diaphragm is suspended between two fixed capacitor plates; differential pressure deflects the diaphragm, changing the capacitance gap on both sides",
    "opts": [
      "A mercury-filled U-tube with electrical contacts at different heights",
      "A capacitance-based sensor where a central metallic diaphragm is suspended between two fixed capacitor plates; differential pressure deflects the diaphragm, changing the capacitance gap on both sides",
      "An optical laser that measures the deflection of a glass window",
      "A mechanical Bourdon tube that physically twists a potentiometer"
    ],
    "exp": "As the diaphragm bulges toward the low-pressure side, it gets closer to one capacitor plate and further from the other. The electronic circuitry measures this minute change in capacitance and converts it into the 4-20mA output.",
    "cat": "PRESS",
    "id": "T14B_055"
  },
  {
    "q": "How is a DP Cell configured to measure the level of liquid in a sealed, pressurized cargo tank or boiler drum?",
    "a": "The High-Pressure (H) port is connected to the very bottom of the tank, and the Low-Pressure (L) port is connected to the vapour space at the very top of the tank",
    "opts": [
      "Both ports are connected to the bottom of the tank, 1 meter apart",
      "The H port is left open to atmosphere, and the L port connects to the tank bottom",
      "The High-Pressure (H) port is connected to the very bottom of the tank, and the Low-Pressure (L) port is connected to the vapour space at the very top of the tank",
      "The DP cell is floated on the surface of the liquid"
    ],
    "exp": "The bottom of the tank feels both the weight of the liquid AND the pressure of the gas above it. The top port only feels the gas pressure. The DP cell subtracts the top reading from the bottom reading. The result is exactly the hydrostatic weight of the liquid alone.",
    "cat": "PRESS",
    "id": "T14B_056"
  },
  {
    "q": "What mathematical formula governs how a DP cell calculates liquid level?",
    "a": "Differential Pressure (DP) = Density (ρ) × Gravity (g) × Height (h)",
    "opts": [
      "Differential Pressure (DP) = Density (ρ) × Gravity (g) × Height (h)",
      "Voltage = Current × Resistance",
      "Pressure = Force / Area",
      "Height = Volume / Density"
    ],
    "exp": "Because gravity is constant, if you program the specific density of the fuel or cargo into the computer, the only variable left is Height. The DP cell's pressure reading is directly translated into meters of depth.",
    "cat": "PRESS",
    "id": "T14B_057"
  },
  {
    "q": "How is a DP Cell utilized to monitor the condition of a duplex fuel or lube oil filter?",
    "a": "The H port connects before the filter, and the L port connects after it; as the filter clogs with dirt, the pressure drop across it increases, triggering a 'High DP / Dirty Filter' alarm",
    "opts": [
      "It measures the flow rate of the oil and sounds an alarm if the flow is too fast",
      "The H port connects before the filter, and the L port connects after it; as the filter clogs with dirt, the pressure drop across it increases, triggering a 'High DP / Dirty Filter' alarm",
      "It measures the absolute pressure inside the filter housing to ensure it doesn't burst",
      "It detects water in the oil by measuring its dielectric capacitance"
    ],
    "exp": "A clean filter might drop the pressure by 0.1 bar. As dirt blocks the mesh, the pump works harder to push oil through, raising the inlet pressure, while the outlet pressure starves. The DP cell detects this rising difference (e.g., 1.5 bar) and warns the engineers to switch filters.",
    "cat": "PRESS",
    "id": "T14B_058"
  },
  {
    "q": "When preparing to calibrate a pressure transducer using a portable calibrator, what is the CRITICAL first mechanical step?",
    "a": "Close the process isolation valve to safely block live system pressure, then carefully open the vent/drain valve to bleed off all residual pressure in the sensor line to zero",
    "opts": [
      "Unscrew the sensor completely from the pipe using a heavy wrench",
      "Close the process isolation valve to safely block live system pressure, then carefully open the vent/drain valve to bleed off all residual pressure in the sensor line to zero",
      "Short out the 4-20mA wires to prevent false alarms in the ECR",
      "Turn the span screw fully counter-clockwise to reset the spring"
    ],
    "exp": "Safety first. You cannot connect delicate calibration hoses to a pipe holding 10 bar of hot oil. You must isolate it from the main system, and then safely vent the trapped pressure so the sensor sees true atmospheric zero.",
    "cat": "PRESS",
    "id": "T14B_059"
  },
  {
    "q": "During transducer calibration, how is the 'Zero' setting adjusted?",
    "a": "With exactly zero pressure (atmospheric) applied from the calibrator, adjust the 'Zero' potentiometer until the multimeter or loop calibrator reads exactly 4.000 mA",
    "opts": [
      "Connect it to a 0V DC source and press the reset button",
      "Fill the sensor with clean water and adjust the span",
      "With exactly zero pressure (atmospheric) applied from the calibrator, adjust the 'Zero' potentiometer until the multimeter or loop calibrator reads exactly 4.000 mA",
      "With maximum pressure applied, turn the screw until it reads 0 mA"
    ],
    "exp": "The zero pot shifts the entire output curve up or down. You must prove to the electronics that 'this atmospheric baseline equals exactly 4 milliamps'.",
    "cat": "PRESS",
    "id": "T14B_060"
  },
  {
    "q": "During transducer calibration, how is the 'Span' (or Gain) setting adjusted?",
    "a": "Use the hand pump to apply the exact 100% full-scale pressure (e.g., 10 bar), then adjust the 'Span' potentiometer until the meter reads exactly 20.000 mA",
    "opts": [
      "Apply maximum vacuum and set it to 4 mA",
      "Use the hand pump to apply the exact 100% full-scale pressure (e.g., 10 bar), then adjust the 'Span' potentiometer until the meter reads exactly 20.000 mA",
      "Turn the span screw until the ECR alarm stops ringing",
      "Apply 50% pressure and adjust until it reads 10 mA"
    ],
    "exp": "The span pot changes the slope (steepness) of the output curve. You are telling the electronics 'this specific maximum pressure equals exactly 20 milliamps'.",
    "cat": "PRESS",
    "id": "T14B_061"
  },
  {
    "q": "Why is it mandatory to re-check the 'Zero' reading immediately after adjusting the 'Span' reading?",
    "a": "Because adjusting the Span potentiometer often slightly alters the baseline offset; zero and span adjustments are interactive and may require 2 or 3 cycles to perfect",
    "opts": [
      "To clear the temporary memory of the microprocessor",
      "To verify that the 4-20mA cable has not overheated",
      "To ensure the hand pump hasn't leaked pressure",
      "Because adjusting the Span potentiometer often slightly alters the baseline offset; zero and span adjustments are interactive and may require 2 or 3 cycles to perfect"
    ],
    "exp": "On analog transmitters, changing the slope (span) almost always shifts the starting point (zero) slightly. You must drop the pressure back to zero, re-tweak the zero screw, pump back to 100%, re-tweak the span, until both are dead-on.",
    "cat": "PRESS",
    "id": "T14B_062"
  },
  {
    "q": "What is a 'Linearity Check' during calibration, and what test points are typically used?",
    "a": "Verifying the sensor reads accurately across its whole range, not just at the edges; accomplished by pumping to 25%, 50%, and 75% of full scale and verifying the mA output matches proportionally",
    "opts": [
      "Testing if the sensor body is physically straight; using a spirit level",
      "Verifying the sensor reads accurately across its whole range, not just at the edges; accomplished by pumping to 25%, 50%, and 75% of full scale and verifying the mA output matches proportionally",
      "Checking the resistance of the wires over a distance of 100 meters",
      "Applying 150% overpressure to ensure the diaphragm doesn't burst"
    ],
    "exp": "A sensor might read 4mA at 0 bar and 20mA at 10 bar, but read horribly wrong in the middle (e.g., 14mA at 5 bar). Testing the mid-points (8mA, 12mA, 16mA) proves the strain gauge responds perfectly linearly.",
    "cat": "PRESS",
    "id": "T14B_063"
  },
  {
    "q": "For a 0-10 bar pressure transducer (4-20mA), what exact current should be output when the applied pressure is 5.0 bar?",
    "a": "12.00 mA",
    "opts": [
      "8.00 mA",
      "10.00 mA",
      "12.00 mA",
      "14.00 mA"
    ],
    "exp": "5 bar is exactly 50% of the 10 bar scale. The mA range is 16mA wide (20 - 4 = 16). 50% of 16mA is 8mA. Add the 4mA baseline offset. 8 + 4 = 12mA.",
    "cat": "PRESS",
    "id": "T14B_064"
  },
  {
    "q": "For a 0-100 bar pressure transducer (4-20mA), what exact current should be output when the applied pressure is 25 bar?",
    "a": "8.00 mA",
    "opts": [
      "6.00 mA",
      "12.00 mA",
      "4.00 mA",
      "8.00 mA"
    ],
    "exp": "25 bar is 25% of the full scale. The span is 16mA (20-4). 25% of 16mA is 4mA. Add the 4mA zero offset. 4 + 4 = 8mA.",
    "cat": "PRESS",
    "id": "T14B_065"
  },
  {
    "q": "For a 0-16 bar pressure transducer (4-20mA), what exact current should be output when the applied pressure is 12 bar?",
    "a": "16.00 mA",
    "opts": [
      "14.00 mA",
      "18.00 mA",
      "16.00 mA",
      "12.00 mA"
    ],
    "exp": "12 bar / 16 bar = 0.75 (75% of scale). Span is 16mA. 75% of 16mA is 12mA. Add the 4mA base. 12 + 4 = 16mA.",
    "cat": "PRESS",
    "id": "T14B_066"
  },
  {
    "q": "What essential equipment does an ETO need to properly calibrate a standard 4-20mA pressure transducer on the workbench?",
    "a": "A precision dead-weight tester or digital pressure pump (to supply accurate test pressures) and a 4-20mA loop calibrator or high-quality multimeter (to read the output)",
    "opts": [
      "A 500V Megger and a heavy hammer",
      "A vacuum pump and a glass thermometer",
      "A precision dead-weight tester or digital pressure pump (to supply accurate test pressures) and a 4-20mA loop calibrator or high-quality multimeter (to read the output)",
      "An oscilloscope and a soldering iron"
    ],
    "exp": "You must be able to inject perfectly known physical pressures (Input) and read highly precise electrical currents (Output) to adjust the zero and span screws correctly.",
    "cat": "PRESS",
    "id": "T14B_067"
  },
  {
    "q": "How can a DP Cell be used to measure the flow rate of water in a pipe?",
    "a": "By placing an Orifice Plate or Venturi tube in the pipe to create a deliberate restriction; the DP cell measures the pressure drop across this restriction, which is proportional to the square of the flow rate",
    "opts": [
      "By placing an Orifice Plate or Venturi tube in the pipe to create a deliberate restriction; the DP cell measures the pressure drop across this restriction, which is proportional to the square of the flow rate",
      "By placing a small propeller in the pipe and using the DP cell to count its rotations",
      "By measuring the physical weight of the pipe as it fills with water",
      "By measuring the temperature difference between the inlet and outlet of the pipe"
    ],
    "exp": "Bernoulli's principle states that as fluid speeds up to get through a restriction, its pressure drops. The DP cell measures this pressure difference. More flow = bigger pressure drop.",
    "cat": "PRESS",
    "id": "T14B_068"
  },
  {
    "q": "What is a 'Piezoelectric' pressure transducer?",
    "a": "A sensor that uses a crystalline material (like quartz) that generates a tiny electrical voltage when it is physically squeezed or deformed by pressure",
    "opts": [
      "A sensor that measures the magnetic field of the moving fluid",
      "A sensor that relies on the thermal expansion of mercury",
      "A sensor that uses a crystalline material (like quartz) that generates a tiny electrical voltage when it is physically squeezed or deformed by pressure",
      "A sensor that measures pressure by bouncing sound waves off the fluid"
    ],
    "exp": "Piezoelectric crystals output a charge proportional to the dynamic force applied to them. They are extremely fast-reacting and robust, often used for measuring violent combustion pressures inside engine cylinders.",
    "cat": "PRESS",
    "id": "T14B_069"
  },
  {
    "q": "What happens if you accidentally connect a 4-20mA pressure transducer backwards (reverse polarity) to the 24V loop power supply?",
    "a": "The internal blocking diode protects the circuitry, but no current will flow; the meter will read 0 mA and display a sensor fault",
    "opts": [
      "The sensor will explode violently",
      "The sensor will permanently output 20 mA",
      "The internal blocking diode protects the circuitry, but no current will flow; the meter will read 0 mA and display a sensor fault",
      "The sensor will output negative pressure values (e.g., -10 bar)"
    ],
    "exp": "Modern 2-wire transmitters are protected against reverse polarity. They simply act as an open circuit if wired backward, saving the electronics from frying.",
    "cat": "PRESS",
    "id": "T14B_070"
  },
  {
    "q": "If a cargo tank is vented to the open atmosphere, how can you measure its liquid level using a simple single-port pressure transducer instead of a DP cell?",
    "a": "Mount the transducer at the absolute bottom of the tank; because the top is open to atmospheric zero, the pressure measured at the bottom is purely the hydrostatic head (ρgh) of the liquid",
    "opts": [
      "Mount the transducer at the absolute bottom of the tank; because the top is open to atmospheric zero, the pressure measured at the bottom is purely the hydrostatic head (ρgh) of the liquid",
      "You cannot; only DP cells can measure tank levels",
      "Float the transducer on the surface of the cargo",
      "Mount the transducer at the top of the tank and measure the air pressure"
    ],
    "exp": "DP cells are only mandatory if the tank is pressurized (like a boiler or inerted cargo tank). If the tank breathes open air (like a diesel bunker tank), a standard pressure gauge screwed into the bottom works perfectly to calculate depth.",
    "cat": "PRESS",
    "id": "T14B_071"
  },
  {
    "q": "When calibrating a DP cell used for Boiler Drum Level, why is 'Zero Shift' or 'Suppression' often required?",
    "a": "Because the 'Wet Leg' (reference pipe) running down to the high-pressure port is always full of condensed water, applying a constant heavy baseline pressure that must be electronically subtracted to find the true drum level",
    "opts": [
      "Because steam is lighter than air and causes negative pressure",
      "Because the DP cell must be calibrated while the boiler is at 100% load",
      "Because the boiler operates at 220V instead of 24V",
      "Because the 'Wet Leg' (reference pipe) running down to the high-pressure port is always full of condensed water, applying a constant heavy baseline pressure that must be electronically subtracted to find the true drum level"
    ],
    "exp": "In a boiler, the 'reference' line is a vertical pipe filled with condensed steam, pushing down hard on one side of the DP cell. The actual water level pushes on the other side. The calibrator must offset the zero reading to completely ignore the permanent weight of the wet leg.",
    "cat": "PRESS",
    "id": "T14B_072"
  },
  {
    "q": "What is the function of the 3-valve manifold typically installed with a DP cell?",
    "a": "It allows the engineer to safely isolate both the High and Low process lines, and open an 'Equalizing' valve to bleed pressure between the two ports, safely returning the DP cell to absolute zero differential before maintenance",
    "opts": [
      "It mixes hot and cold fluids before they hit the sensor",
      "It acts as a physical bypass so the tank can be drained quickly",
      "It converts 4-20mA signals into pneumatic air signals",
      "It allows the engineer to safely isolate both the High and Low process lines, and open an 'Equalizing' valve to bleed pressure between the two ports, safely returning the DP cell to absolute zero differential before maintenance"
    ],
    "exp": "If you just unscrewed the High side while the Low side held 10 bar, the diaphragm would violently smash to one side and rupture. The equalizing valve safely balances the pressure on both sides of the delicate diaphragm before it is disconnected.",
    "cat": "PRESS",
    "id": "T14B_073"
  },
  {
    "q": "When checking a pressure sensor's 'Hysteresis', what are you looking for?",
    "a": "Verifying that the sensor gives the exact same mA output at 5 bar when pumping UP from 0 to 10, as it does when bleeding DOWN from 10 to 0",
    "opts": [
      "Checking the chemical resistance of the stainless steel diaphragm",
      "Verifying that the sensor gives the exact same mA output at 5 bar when pumping UP from 0 to 10, as it does when bleeding DOWN from 10 to 0",
      "Measuring how long it takes for the 4-20mA signal to reach the ECR",
      "Checking if the sensor overheats during rapid pressure changes"
    ],
    "exp": "Mechanical diaphragms can suffer from 'memory' or slop. If it reads 12.0mA at 5 bar going up, but 12.5mA at 5 bar going down, it has bad hysteresis and should be replaced.",
    "cat": "PRESS",
    "id": "T14B_074"
  },
  {
    "q": "What is a 'Snubber' or 'Pulsation Dampener', and why is it fitted before some pressure transducers?",
    "a": "A tiny physical restrictor (like a sponge or pinhole) placed in the pressure line to absorb violent, rapid pressure spikes (water hammer or pump ripples) that would otherwise shatter the sensor diaphragm",
    "opts": [
      "A tiny physical restrictor (like a sponge or pinhole) placed in the pressure line to absorb violent, rapid pressure spikes (water hammer or pump ripples) that would otherwise shatter the sensor diaphragm",
      "An electronic filter that removes 60Hz noise from the cable",
      "A heating coil that prevents oil from solidifying in the pipe",
      "A chemical trap that removes water from the hydraulic oil"
    ],
    "exp": "Fuel and hydraulic pumps generate harsh, rapid pressure waves. A snubber chokes the flow just enough to smooth out these destructive shockwaves, delivering a steady, readable average pressure to the delicate sensor.",
    "cat": "PRESS",
    "id": "T14B_075"
  },
  {
    "q": "If a pressure transducer reads correctly on the local calibrator display, but the ECR computer screen shows a completely wrong value, what is the most likely issue?",
    "a": "The scaling/ranging parameters programmed into the ECR's IAS (Integrated Alarm System) software do not match the physical calibration range of the sensor (e.g., sensor is 0-10 bar, but computer is programmed for 0-16 bar)",
    "opts": [
      "The sensor's diaphragm has ruptured",
      "The generator frequency is drifting",
      "The 4-20mA wire is completely broken",
      "The scaling/ranging parameters programmed into the ECR's IAS (Integrated Alarm System) software do not match the physical calibration range of the sensor (e.g., sensor is 0-10 bar, but computer is programmed for 0-16 bar)"
    ],
    "exp": "A 0-10 bar sensor outputs 12mA at 5 bar. If the computer is told it is listening to a 0-16 bar sensor, it will look at that 12mA signal and falsely display '8 bar' on the screen. The software range must match the hardware range.",
    "cat": "PRESS",
    "id": "T14B_076"
  },
  {
    "q": "Why is it important to mount pressure transducers with a 'Pigtail Siphon' when measuring steam pressure?",
    "a": "The loop of pipe traps condensed water, ensuring that live, blazing-hot steam never physically touches and melts the sensitive electronic transducer diaphragm",
    "opts": [
      "The loop of pipe traps condensed water, ensuring that live, blazing-hot steam never physically touches and melts the sensitive electronic transducer diaphragm",
      "It creates a vacuum that pulls the diaphragm outward",
      "It filters out impurities and rust from the boiler",
      "It accelerates the steam to increase the pressure reading"
    ],
    "exp": "Steam at 10 bar is 180°C, which would instantly fry the electronics and O-rings of a standard transmitter. A pigtail loop fills with cool water. The steam pushes on the water, and the cool water pushes on the sensor.",
    "cat": "PRESS",
    "id": "T14B_077"
  },
  {
    "q": "What is the final step an ETO must complete after finishing a calibration on a critical pressure sensor?",
    "a": "Attach a calibration sticker to the sensor, and formally log the 'As-Found' and 'As-Left' readings, date, and technician name in the ship's Planned Maintenance System (PMS)",
    "opts": [
      "Attach a calibration sticker to the sensor, and formally log the 'As-Found' and 'As-Left' readings, date, and technician name in the ship's Planned Maintenance System (PMS)",
      "Reboot the main switchboard",
      "Cut the calibration wires so it cannot be tampered with",
      "Weld the isolation valve permanently open"
    ],
    "exp": "Traceability is a legal requirement under ISM. If an engine fails, the investigation will demand the calibration records. Showing the exact milliamp readings before and after adjustment proves the sensor was actively maintained.",
    "cat": "PRESS",
    "id": "T14B_078"
  },
  {
    "q": "In a 2-wire 4-20mA loop, where does the pressure transmitter get its electrical power to operate?",
    "a": "It 'steals' power directly from the 4-20mA signal loop itself (which is typically powered by a 24V DC source at the alarm panel)",
    "opts": [
      "It 'steals' power directly from the 4-20mA signal loop itself (which is typically powered by a 24V DC source at the alarm panel)",
      "It uses the piezoelectric effect to generate its own 220V power",
      "It has a small internal lithium battery",
      "It plugs into a separate 110V wall outlet"
    ],
    "exp": "This is the genius of the 2-wire loop. The panel pushes 24V DC down the two wires. The sensor uses a tiny bit of that voltage to run its microchip, and acts as a variable resistor to regulate the total current flowing back (between 4 and 20mA) to represent the pressure.",
    "cat": "PRESS",
    "id": "T14B_079"
  },
  {
    "q": "If a pressure transducer reads accurately at 0 bar, 5 bar, and 10 bar, but reads extremely poorly if the ambient engine room temperature hits 45°C, what is the fault?",
    "a": "Thermal Drift; the internal electronic temperature compensation circuit has failed",
    "opts": [
      "The 4-20mA cable is melting",
      "The process pressure is too high",
      "Thermal Drift; the internal electronic temperature compensation circuit has failed",
      "The diaphragm has ruptured"
    ],
    "exp": "Strain gauges physically expand with ambient heat. A good transmitter has internal thermistors to mathematically cancel out the hot engine room air. If this circuit fails, the sensor's accuracy will drift wildly depending on the weather.",
    "cat": "PRESS",
    "id": "T14B_080"
  },
  {
    "q": "What does the acronym 'UTI' stand for in relation to portable tanker measuring equipment?",
    "a": "Ullage, Temperature, Interface",
    "opts": [
      "Ultrasonic Tank Interlock",
      "Universal Tank Indicator",
      "Ullage, Temperature, Interface",
      "Upper Terminal Immersion"
    ],
    "exp": "The UTI tape is a portable, manual instrument used by tanker crews to measure the empty space above the cargo (Ullage), the cargo's Temperature, and the boundary between oil and free water at the bottom of the tank (Interface).",
    "cat": "LVL",
    "id": "T14B_141"
  },
  {
    "q": "How is 'Ullage' defined when measuring a cargo tank?",
    "a": "The empty space measured from a fixed reference point at the top of the tank (ullage plug) down to the surface of the liquid cargo",
    "opts": [
      "The empty space measured from a fixed reference point at the top of the tank (ullage plug) down to the surface of the liquid cargo",
      "The total depth of the liquid cargo measured from the tank floor up to the surface",
      "The volume of free water sitting beneath the oil cargo",
      "The expansion space required for the cargo during heating"
    ],
    "exp": "Ullage is the inverse of liquid sounding. It measures the 'air gap'. If a tank is 20 meters deep, and the liquid is 15 meters deep, the ullage is 5 meters. Tankers primarily measure ullage to determine cargo volume.",
    "cat": "LVL",
    "id": "T14B_142"
  },
  {
    "q": "What specific sensor technology is built into the UTI probe to detect the 'Interface' between oil and water?",
    "a": "A conductivity sensor; because oil is an insulator and water is a conductor, the circuit completes when it hits the water layer, triggering a distinct tone",
    "opts": [
      "A conductivity sensor; because oil is an insulator and water is a conductor, the circuit completes when it hits the water layer, triggering a distinct tone",
      "An ultrasonic depth finder that bounces sound off the water",
      "A thermistor that detects the colder temperature of the water",
      "A micro-camera that visually detects the color change of the fluid"
    ],
    "exp": "Oil does not conduct electricity. When the probe is in the oil, the conductivity circuit is open. As soon as the two metal pins on the probe tip touch the water layer beneath the oil, the salty water conducts current between them, causing the UTI to emit a continuous 'Interface' beep.",
    "cat": "LVL",
    "id": "T14B_143"
  },
  {
    "q": "Why is the UTI equipped with a highly accurate PT100 or Thermocouple to measure the cargo's temperature at various depths?",
    "a": "Because oil expands and contracts with heat; accurate temperature data is required to mathematically correct the measured volume to a standard reference temperature (e.g., 15°C) for commercial custody transfer",
    "opts": [
      "To ensure the stainless steel tape does not melt in the cargo",
      "Because oil expands and contracts with heat; accurate temperature data is required to mathematically correct the measured volume to a standard reference temperature (e.g., 15°C) for commercial custody transfer",
      "To trigger the ship's fire alarm if the cargo is overheating",
      "To measure the specific gravity of the water layer"
    ],
    "exp": "A million barrels of crude oil at 30°C takes up significantly more physical space than at 15°C. Oil is bought and sold based on its volume at a standard 15°C (or 60°F). The UTI provides the exact temperature profile needed to make these vital financial volume correction calculations.",
    "cat": "LVL",
    "id": "T14B_144"
  },
  {
    "q": "How is a UTI instrument powered, and what is its critical safety rating for use inside cargo tanks?",
    "a": "It is powered by a 6-9V DC battery in an Intrinsically Safe (Ex ia) enclosure, limiting spark energy to completely eliminate ignition risks in Zone 0 explosive atmospheres",
    "opts": [
      "It is purely mechanical and requires no power source whatsoever",
      "It is powered by the ship's 220V AC mains via a long extension cord, rated Ex d (Flameproof)",
      "It generates its own power via a tiny dynamo as the tape is unspooled",
      "It is powered by a 6-9V DC battery in an Intrinsically Safe (Ex ia) enclosure, limiting spark energy to completely eliminate ignition risks in Zone 0 explosive atmospheres"
    ],
    "exp": "The inside of a cargo tank is a Zone 0 hazard (continuous explosive atmosphere). Equipment dropped inside MUST be Ex ia rated (Intrinsically Safe). This means the battery voltage and short-circuit current are kept so microscopically low (<25V, <25mA) that even a dead short cannot create a spark hot enough to ignite gas.",
    "cat": "LVL",
    "id": "T14B_145"
  },
  {
    "q": "When using a UTI, why must the tape be lowered through a closed, vapour-tight quick-connect valve on the tank dome?",
    "a": "To allow the probe to enter the tank without releasing toxic and explosive cargo vapours or inert gas pressure onto the deck where the crew is standing",
    "opts": [
      "To allow the probe to enter the tank without releasing toxic and explosive cargo vapours or inert gas pressure onto the deck where the crew is standing",
      "To physically guide the tape so it doesn't tangle",
      "To ground the tape directly to the ship's hull",
      "To clean the oil off the tape as it is retrieved"
    ],
    "exp": "Modern tankers operate 'Closed Gauging'. Opening a hatch would vent deadly H2S, VOCs, and pressurized Nitrogen/Inert gas in the operator's face. The UTI barrel locks onto a specialized valve, sealing the system so the tape can be deployed without breaking containment.",
    "cat": "LVL",
    "id": "T14B_146"
  },
  {
    "q": "What is the most accurate automated system used for remote cargo tank level measurement during commercial custody transfer (Bill of Lading)?",
    "a": "Servo (Float) Gauge system, which uses a motor to precisely track a displacer float, offering ±1mm accuracy",
    "opts": [
      "Capacitance rod probe",
      "Servo (Float) Gauge system, which uses a motor to precisely track a displacer float, offering ±1mm accuracy",
      "DP Cell (Hydrostatic) system",
      "Ultrasonic bounce sensor"
    ],
    "exp": "For commercial cargo, millimeters matter massively to the volume calculation. Servo gauges (like Saab or Honeywell) use a tiny motor to lower a float until it just rests on the oil surface. As the oil moves, the motor pays out or hauls in wire to keep the float perfectly positioned, reading the encoder to ±1mm accuracy.",
    "cat": "LVL",
    "id": "T14B_147"
  },
  {
    "q": "How does an FMCW (Frequency Modulated Continuous Wave) Radar level gauge determine the liquid level in a cargo tank?",
    "a": "It transmits a downward microwave radar beam, sweeping its frequency continuously; the time delay and frequency shift of the reflection off the liquid surface calculates the exact distance (ullage)",
    "opts": [
      "It transmits a downward microwave radar beam, sweeping its frequency continuously; the time delay and frequency shift of the reflection off the liquid surface calculates the exact distance (ullage)",
      "It measures the weight of the air column pressing down on the radar dish",
      "It drops a physical weight and times how long it takes to hit the liquid",
      "It measures the change in electrical capacitance of the entire tank structure"
    ],
    "exp": "FMCW Radar is completely non-contact. It fires a radar wave from the roof. The wave bounces off the cargo surface and returns. By comparing the frequency of the returning wave to the frequency currently being transmitted, it calculates the 'time of flight' and converts it into distance with ±1-3mm accuracy.",
    "cat": "LVL",
    "id": "T14B_148"
  },
  {
    "q": "Why are DP (Differential Pressure) cells highly preferred for measuring liquid levels in pressurized tanks, such as Boiler Drums or Inerted fuel tanks?",
    "a": "Because they subtract the gas/vapour pressure at the top of the tank from the total pressure at the bottom, isolating the pure hydrostatic weight (ρgh) of the liquid",
    "opts": [
      "Because they subtract the gas/vapour pressure at the top of the tank from the total pressure at the bottom, isolating the pure hydrostatic weight (ρgh) of the liquid",
      "Because they physically float on top of the boiling water",
      "Because they are the only sensors that can withstand 220V AC",
      "Because they use radar waves that penetrate thick steam"
    ],
    "exp": "In a boiler, the bottom feels the weight of the water PLUS 10 bar of steam pressure. If you just used a bottom gauge, it would read wrong. The DP cell connects to the bottom (H port) and the top steam space (L port). H minus L cancels out the 10 bar steam, leaving only the tiny pressure caused by the water's actual depth.",
    "cat": "LVL",
    "id": "T14B_149"
  },
  {
    "q": "What is the primary function of a 'Capacitance Level Probe' in a marine tank system?",
    "a": "It acts as a continuous level monitor or a discrete high-level/overflow alarm; the liquid rising around the probe rod changes the electrical capacitance formed between the rod and the tank wall",
    "opts": [
      "It chemically analyzes the sulfur content of the fuel",
      "It measures the mechanical vibration of the tank bulkheads",
      "It generates a magnetic field to separate water from the oil",
      "It acts as a continuous level monitor or a discrete high-level/overflow alarm; the liquid rising around the probe rod changes the electrical capacitance formed between the rod and the tank wall"
    ],
    "exp": "A capacitor consists of two plates separated by a dielectric. The rod is one plate, the tank wall is the other, and the air/oil in between is the dielectric. Since oil has a different dielectric constant than air, as the liquid rises and covers more of the rod, the total capacitance increases proportionally.",
    "cat": "LVL",
    "id": "T14B_150"
  },
  {
    "q": "What does 'WIDAS' stand for, and what was the historical catalyst for its mandatory implementation?",
    "a": "Water Ingress Detection and Alarm System; introduced after multiple bulk carriers sank rapidly due to undetected flooding in the forward cargo holds",
    "opts": [
      "Warning Indication for Deck Automation Systems; introduced to monitor crane hydraulics",
      "Water Ingress Detection and Alarm System; introduced after multiple bulk carriers sank rapidly due to undetected flooding in the forward cargo holds",
      "Wireless Interface for Digital Alarm Systems; introduced to replace hardwired engine room alarms",
      "Weather Identification and Data System; introduced after heavy storms damaged radar domes"
    ],
    "exp": "In the 1990s, structural failures on bulk carriers allowed massive amounts of seawater to enter the huge cargo holds. Because the holds were empty or full of cargo, the flooding went completely unnoticed by the crew until the ship lost buoyancy and sank. WIDAS gives early warning on the bridge.",
    "cat": "LVL",
    "id": "T14B_151"
  },
  {
    "q": "According to SOLAS Chapter XII, which specific vessels MUST be fitted with a WIDAS system?",
    "a": "All Bulk Carriers with a length of 150 meters or more, built on or after 1 July 2004 (or retrofitted during first survey for older vessels)",
    "opts": [
      "All Oil Tankers over 3000 GT",
      "Any vessel navigating in polar ice regions",
      "Only Passenger RO-RO ferries",
      "All Bulk Carriers with a length of 150 meters or more, built on or after 1 July 2004 (or retrofitted during first survey for older vessels)"
    ],
    "exp": "SOLAS Chapter XII specifically targets the safety of Bulk Carriers. WIDAS is a mandatory requirement for large bulkers (>=150m) to provide continuous monitoring of cargo holds, void spaces, and forward ballast tanks.",
    "cat": "LVL",
    "id": "T14B_152"
  },
  {
    "q": "Which exact spaces on a bulk carrier are required to have WIDAS water level detectors installed?",
    "a": "EACH cargo hold, EACH ballast water tank forward of the collision bulkhead (fore peak), dry void spaces, and cofferdams",
    "opts": [
      "Only the engine room bilges and the steering gear flat",
      "The fresh water drinking tanks and sewage holding tanks",
      "Only the absolute deepest cargo hold on the ship",
      "EACH cargo hold, EACH ballast water tank forward of the collision bulkhead (fore peak), dry void spaces, and cofferdams"
    ],
    "exp": "The regulation demands comprehensive coverage of the forward vulnerable sections of the ship. Every single cargo hold must have sensors (usually at two different heights: a pre-alarm at 0.5m and a main alarm at 2.0m), as well as the forepeak and empty void spaces.",
    "cat": "LVL",
    "id": "T14B_153"
  },
  {
    "q": "What is the most common and robust type of sensor used for WIDAS in dirty, harsh cargo hold environments?",
    "a": "A heavy-duty Float Switch inside a protective housing; water lifts the float, activating an internal magnetic reed microswitch",
    "opts": [
      "A mechanical pressure diaphragm",
      "A heavy-duty Float Switch inside a protective housing; water lifts the float, activating an internal magnetic reed microswitch",
      "An open-wire conductivity probe",
      "A delicate ultrasonic laser"
    ],
    "exp": "Cargo holds are filled with abrasive coal, iron ore, and grain dust. Delicate sensors break easily. The float switch is a robust, sealed mechanical device. Water enters the heavy steel guard housing, lifts the float, and makes the magnetic contact. Conductivity probes are also used but require more frequent cleaning.",
    "cat": "LVL",
    "id": "T14B_154"
  },
  {
    "q": "How does an ETO typically perform physical maintenance and testing on the WIDAS float sensors inside a cargo hold?",
    "a": "During drydock or empty hold cleaning, physically lift the float inside the housing by hand and use radio contact to verify the correct alarm triggers on the bridge panel",
    "opts": [
      "During drydock or empty hold cleaning, physically lift the float inside the housing by hand and use radio contact to verify the correct alarm triggers on the bridge panel",
      "Remove the sensors and test them in a bucket of oil in the ECR",
      "Use the 'Auto-Test' software button on the bridge, requiring no physical entry",
      "Flood the cargo hold with seawater until the alarm sounds"
    ],
    "exp": "While the panel has electrical circuit self-tests, the only way to prove the mechanical float isn't jammed solid with rusted coal dust is to enter the empty hold, reach into the sensor housing, manually push the float up, and confirm the bridge alarm sounds.",
    "cat": "LVL",
    "id": "T14B_155"
  },
  {
    "q": "What does a 'FAULT' (usually yellow) light indicate on a WIDAS bridge panel, as opposed to an 'ALARM' (red) light?",
    "a": "A FAULT indicates an open-circuit, short-circuit, or power failure in the sensor's wiring; an ALARM indicates the sensor has actually detected water",
    "opts": [
      "A FAULT indicates the panel screen is broken; an ALARM means the VDR is disconnected",
      "A FAULT indicates water, an ALARM indicates fire",
      "A FAULT indicates an open-circuit, short-circuit, or power failure in the sensor's wiring; an ALARM indicates the sensor has actually detected water",
      "A FAULT means the cargo is shifting; an ALARM means the ship is sinking"
    ],
    "exp": "Marine safety systems use line-monitoring (often via an end-of-line resistor). If the long cable running down into the cargo hold gets crushed or severed by cargo grabs, the resistance changes. The panel detects this and throws a 'FAULT' warning so the ETO knows the sensor is dead before an emergency happens.",
    "cat": "LVL",
    "id": "T14B_156"
  },
  {
    "q": "How does the 'Conductivity Probe' type of WIDAS sensor detect water?",
    "a": "It features two metal electrodes separated by an air gap; when conductive seawater rises and covers both electrodes, it completes the electrical circuit and triggers the alarm",
    "opts": [
      "It dissolves a salt tablet which presses a microswitch",
      "It measures the heat of the water using a thermistor",
      "It uses a piezoelectric crystal to listen for the sound of splashing water",
      "It features two metal electrodes separated by an air gap; when conductive seawater rises and covers both electrodes, it completes the electrical circuit and triggers the alarm"
    ],
    "exp": "Seawater is highly conductive. When it touches both probes, current flows. This type has zero moving parts (unlike a float switch), making it immune to mechanical jamming, but it can be prone to false alarms if wet, conductive cargo sludge cakes across the probes.",
    "cat": "LVL",
    "id": "T14B_157"
  },
  {
    "q": "Why is WIDAS integrated with the ship's Voyage Data Recorder (VDR)?",
    "a": "To ensure that in the event of a catastrophic sinking, investigators can playback the VDR to see exactly when and where the water ingress occurred",
    "opts": [
      "To ensure that in the event of a catastrophic sinking, investigators can playback the VDR to see exactly when and where the water ingress occurred",
      "To automatically transmit SOS distress signals via satellite",
      "To allow the VDR to pump the bilges automatically",
      "To provide audio recordings of the water splashing in the hold"
    ],
    "exp": "The VDR is the ship's 'black box'. By feeding WIDAS alarm data into the VDR via NMEA/serial data, marine accident investigators can later retrieve the capsule from the ocean floor and reconstruct the exact timeline of the flooding event that sank the ship.",
    "cat": "LVL",
    "id": "T14B_158"
  },
  {
    "q": "During routine cargo operations on an oil tanker, the '98% High-Level' alarm sounds in a specific cargo tank. What is the immediate required action?",
    "a": "The cargo loading to that specific tank must be slowed or stopped immediately, as it is nearly full and risks triggering the 95-98% Overflow sequence",
    "opts": [
      "The cargo loading to that specific tank must be slowed or stopped immediately, as it is nearly full and risks triggering the 95-98% Overflow sequence",
      "The alarm should be silenced and ignored until 100% is reached",
      "The ship must be evacuated immediately",
      "The inert gas system must be shut down"
    ],
    "exp": "Tankers have two distinct alarm levels: High Level (usually 95% or 98%), which acts as a loud warning to the cargo officer that the tank is finishing. The secondary High-High (Overflow) alarm (usually 98.5% or 99%) often triggers automatic valve closures to prevent spilling oil onto the deck.",
    "cat": "LVL",
    "id": "T14B_159"
  },
  {
    "q": "What is the critical SOLAS requirement regarding the 'High-High' (Overflow) level alarm system on a cargo tanker?",
    "a": "It must be electrically and logically completely independent from the primary tank gauging system and the standard High-Level alarm system",
    "opts": [
      "It must use the exact same sensors as the primary gauging system to ensure consistency",
      "It must be wired directly to the main engine fuel cutoff",
      "It must operate on 220V AC to guarantee a loud siren",
      "It must be electrically and logically completely independent from the primary tank gauging system and the standard High-Level alarm system"
    ],
    "exp": "Redundancy is mandatory. If the main radar gauge fails and falsely tells the computer the tank is empty, the computer will never trigger the 98% alarm. An entirely separate sensor (like a dedicated float or capacitance probe) with its own wiring and panel provides the 99% Overflow Alarm as an absolute fail-safe.",
    "cat": "LVL",
    "id": "T14B_160"
  },
  {
    "q": "A surveyor asks: 'If a UTI tape is certified Ex ia (Zone 0), what prevents it from causing an explosion if the tape breaks and the wires short circuit inside the cargo tank?'",
    "a": "Intrinsically safe (Ex ia) design relies on 'energy limiting'; the internal battery voltage and short-circuit current are kept so low (via Zener barriers/resistors) that a dead short simply cannot generate a spark hot enough to ignite gas",
    "opts": [
      "The tape is coated in fire-retardant foam that extinguishes sparks instantly",
      "The tank is flooded with water to absorb the electrical energy",
      "Intrinsically safe (Ex ia) design relies on 'energy limiting'; the internal battery voltage and short-circuit current are kept so low (via Zener barriers/resistors) that a dead short simply cannot generate a spark hot enough to ignite gas",
      "A software algorithm detects the break in milliseconds and disconnects the power"
    ],
    "exp": "This is the definition of Intrinsic Safety. Instead of trying to contain an explosion in a heavy metal box (Ex d Flameproof), Ex ia prevents the spark from ever happening by physically limiting the electrical energy (Voltage <25V, Current <25mA) available in the circuit.",
    "cat": "LVL",
    "id": "T14B_161"
  },
  {
    "q": "How does a 'Float and Board' mechanical gauge transfer its level reading to the outside of a tank without a direct hole?",
    "a": "It uses a magnetic coupling; the float inside the tank has a magnet that drags an external magnetic follower up and down the graduated board",
    "opts": [
      "It relies on the pressure of the gas pushing the board up",
      "It uses an optical camera focused through a thick glass window",
      "It uses a magnetic coupling; the float inside the tank has a magnet that drags an external magnetic follower up and down the graduated board",
      "It uses a wire passing through a rubber stuffing box directly to the board"
    ],
    "exp": "To maintain a sealed, vapor-tight tank (for HFO or ballast), the internal float slides up and down inside a non-magnetic stainless steel tube. The magnet inside the float attracts an external indicator ring on the outside of the tube, moving it along the visual scale.",
    "cat": "LVL",
    "id": "T14B_162"
  },
  {
    "q": "When verifying the accuracy of an automated radar tank gauge, what is the primary manual method used as the ultimate reference?",
    "a": "Taking a manual reading using the calibrated UTI tape and comparing the ullage to the radar display",
    "opts": [
      "Calculating the draft of the ship and mathematically deducing the tank volume",
      "Checking the fuel receipt from the bunker barge",
      "Taking a manual reading using the calibrated UTI tape and comparing the ullage to the radar display",
      "Using a stopwatch to time how long the cargo pump runs"
    ],
    "exp": "The UTI is the gold standard for manual verification. If the radar gauge reads 5.200 meters ullage, the Chief Officer will drop the UTI tape. If the tape beeps at exactly 5.200 meters, the radar gauge is verified accurate.",
    "cat": "LVL",
    "id": "T14B_163"
  },
  {
    "q": "What is the function of the 'Stilling Well' (or sounding pipe) often installed inside a cargo tank for radar gauges or UTI tapes?",
    "a": "It is a perforated vertical pipe that dampens surface waves and foaming, providing a calm, flat liquid surface for the radar wave or UTI float to measure accurately",
    "opts": [
      "It is a perforated vertical pipe that dampens surface waves and foaming, providing a calm, flat liquid surface for the radar wave or UTI float to measure accurately",
      "It acts as a ladder for internal tank inspections",
      "It heats the oil to prevent it from solidifying around the sensor",
      "It filters dirt and rust out of the cargo oil"
    ],
    "exp": "When a ship is rolling at sea, or cargo is splashing during loading, the liquid surface is chaotic. Radar waves would scatter, and floats would bounce. The stilling well creates a calm, isolated column of liquid that perfectly represents the average tank level.",
    "cat": "LVL",
    "id": "T14B_164"
  },
  {
    "q": "If a WIDAS panel on the bridge emits an audible alarm and a RED light for 'Hold No. 1', what is the immediate assumption?",
    "a": "Water has physically entered Cargo Hold No. 1 and triggered the float/conductivity sensor, indicating a severe structural breach or flooding event",
    "opts": [
      "The cargo in Hold No. 1 has caught fire",
      "The sensor in Hold No. 1 has lost electrical power",
      "Water has physically entered Cargo Hold No. 1 and triggered the float/conductivity sensor, indicating a severe structural breach or flooding event",
      "The bilge pump in Hold No. 1 has automatically turned off"
    ],
    "exp": "A RED alarm on WIDAS is not a fault; it is an active detection of water. On a bulk carrier at sea, water in the cargo hold is a worst-case scenario requiring immediate investigation, sounding of the general alarm, and potential preparation for ship abandonment.",
    "cat": "LVL",
    "id": "T14B_165"
  },
  {
    "q": "Why do capacitance level probes in fuel oil tanks sometimes require re-calibration after a change in bunker supplier?",
    "a": "Because different batches of Heavy Fuel Oil can have slightly different dielectric constants, which shifts the baseline capacitance reading of the sensor",
    "opts": [
      "Because the new fuel is always much hotter than the old fuel",
      "Because different batches of Heavy Fuel Oil can have slightly different dielectric constants, which shifts the baseline capacitance reading of the sensor",
      "Because the new fuel physically bends the steel probe",
      "Because the sulfur in the new fuel eats away the electrical wires"
    ],
    "exp": "Capacitance relies on the dielectric property of the fluid. While oil is an insulator, its exact dielectric constant can vary slightly based on chemical composition. A severe change in fuel properties might cause the 4-20mA output to drift, requiring a minor zero/span tweak.",
    "cat": "LVL",
    "id": "T14B_166"
  },
  {
    "q": "What is the primary advantage of a non-contact FMCW Radar level gauge over a traditional mechanical Float gauge in a crude oil tanker?",
    "a": "The radar has zero moving parts to get jammed by thick, sticky crude oil sludge or wax, offering far superior reliability and virtually zero mechanical maintenance",
    "opts": [
      "The radar gauge costs significantly less to manufacture and install",
      "The radar gauge can chemically analyze the crude oil simultaneously",
      "The radar gauge has zero moving parts to get jammed by thick, sticky crude oil sludge or wax, offering far superior reliability and virtually zero mechanical maintenance",
      "The radar gauge operates perfectly without any electrical power supply"
    ],
    "exp": "Crude oil is filthy and highly viscous. Floats, pulleys, and wires get coated in wax and sludge, causing them to stick and break. A radar gauge sits safely at the roof of the tank, bouncing microwaves off the surface without ever touching the dirty oil.",
    "cat": "LVL",
    "id": "T14B_167"
  },
  {
    "q": "How does an ETO troubleshoot a DP (Differential Pressure) cell tank level gauge that is stuck reading exactly '0 meters' despite the tank being half full?",
    "a": "Check the 4-20mA loop current; if it reads 4mA, check for closed isolation valves or clogged impulse lines. If it reads 0mA, look for a broken wire or blown fuse",
    "opts": [
      "Immediately hit the side of the tank with a hammer to loosen the diaphragm",
      "Add more hydraulic fluid to the DP cell reference leg",
      "Check the 4-20mA loop current; if it reads 4mA, check for closed isolation valves or clogged impulse lines. If it reads 0mA, look for a broken wire or blown fuse",
      "Replace the entire DP cell immediately as they cannot be repaired"
    ],
    "exp": "This is standard 4-20mA troubleshooting. 0mA = electrical failure (dead wire/fuse). 4mA = the sensor is powered but reporting 'zero pressure'. If the tank is full but reporting 4mA, the sensor is mechanically blocked from feeling the pressure (e.g., valve closed, pipe filled with sludge).",
    "cat": "LVL",
    "id": "T14B_168"
  },
  {
    "q": "In an inerted cargo tank environment, what specific correction must the Cargo Management Computer apply to the radar gauge's 'ullage' reading to accurately calculate the total Cargo Volume?",
    "a": "It must apply Vessel Trim and Heel corrections (using the ship's inclinometers) and Temperature corrections (to calculate standard volume at 15°C)",
    "opts": [
      "It must subtract the exact weight of the inert gas pressure",
      "It must apply atmospheric pressure corrections from the local weather station",
      "It must apply Vessel Trim and Heel corrections (using the ship's inclinometers) and Temperature corrections (to calculate standard volume at 15°C)",
      "It must multiply the ullage by the speed of the vessel"
    ],
    "exp": "A radar measures distance straight down. If the ship is tilted back (trim by stern) or leaning left (heel to port), the liquid shifts. The computer uses shipboard inclinometers to mathematically correct the radar reading for the tilt, then applies the temperature to calculate the final 15°C volume.",
    "cat": "LVL",
    "id": "T14B_169"
  },
  {
    "q": "What is the consequence if a crew member forgets to ground the UTI tape to the hull before lowering the probe into a fast-loading petroleum tank?",
    "a": "Static electricity generated by the fast-flowing oil can accumulate on the metal tape and discharge as a spark to the tank hatch, causing a massive explosion",
    "opts": [
      "The tape reading will be offset by exactly 10 centimeters due to magnetic interference",
      "Static electricity generated by the fast-flowing oil can accumulate on the metal tape and discharge as a spark to the tank hatch, causing a massive explosion",
      "The conductivity sensor will be permanently damaged by the oil",
      "The battery inside the UTI will instantly drain"
    ],
    "exp": "Flowing petroleum generates massive static static charge. The UTI tape has a specific grounding clamp (crocodile clip) that MUST be attached to bare metal on the ship's hull before opening the valve. This drains any static charge harmlessly to earth, preventing a fatal spark.",
    "cat": "LVL",
    "id": "T14B_170"
  },
  {
    "q": "Why is 4mA used as the minimum signal in a 4-20mA loop, not 0mA?",
    "a": "0mA is reserved to indicate a wire break or complete transmitter failure, so 4mA provides a 'live zero' - proving the loop is alive",
    "opts": [
      "0mA is reserved to indicate a wire break or complete transmitter failure, so 4mA provides a 'live zero' - proving the loop is alive",
      "0mA would cause the DCS input card to be damaged",
      "4mA is required to power the transmitter electronics in two-wire loops",
      "Both A and C are correct"
    ],
    "exp": "The 4-20mA range gives TWO benefits: (1) Live zero - 0mA always means fault (broken wire or dead transmitter), never a valid measurement. This makes fault detection unambiguous. (2) Loop power - the minimum 4mA provides just enough current (actually 3.5-4mA) to power the transmitter electronics in a two-wire loop-powered arrangement. Using 0mA would make it impossible to distinguish a valid zero reading from a broken circuit.",
    "cat": "4-20mA Loops",
    "id": "T06_601"
  },
  {
    "q": "What is the working principle of a float-type level sensor?",
    "a": "A buoyant float rises and falls with liquid level, mechanically actuating a switch or rotating a potentiometer to give on/off or proportional output",
    "opts": [
      "A buoyant float rises and falls with liquid level, mechanically actuating a switch or rotating a potentiometer to give on/off or proportional output",
      "The float measures the weight of the liquid above it using a strain gauge",
      "Float sensors measure conductivity between two electrodes",
      "The float generates an ultrasonic pulse whose return time indicates level"
    ],
    "exp": "Float sensor operation: Hollow buoyant float attached to an arm. As liquid level changes, float moves up/down, rotating a potentiometer (continuous 4-20mA output) or actuating a micro-switch (on/off alarm). Common applications on ships: FW tank level gauges, boiler drum high/low level alarm switches, bilge alarm floats. Simple, reliable, no external power for switch types.",
    "cat": "Level Sensors",
    "id": "T06_602"
  },
  {
    "q": "For which type of level measurement would you use a capacitance probe rather than a float?",
    "a": "For continuous level measurement in fuel oil, chemical, or non-metallic tanks where a moving mechanical float is impractical due to viscous/sticky media",
    "opts": [
      "For continuous level measurement in fuel oil, chemical, or non-metallic tanks where a moving mechanical float is impractical due to viscous/sticky media",
      "For measuring the temperature of a tank",
      "Only for fresh water tanks with clean water",
      "Only for tanks on the weather deck exposed to sea spray"
    ],
    "exp": "Capacitance level sensors: Rod probe and tank wall form two plates of a capacitor. Liquid (higher dielectric constant than air/vapour) between the plates increases capacitance proportional to immersion depth. No moving parts - suited for viscous fuel oil, dirty bilge water, or tanks where floats would stick. Output is continuous 4-20mA. Also works through non-metallic tank walls. Limitation: requires re-calibration if the liquid dielectric constant changes (e.g., water contamination in fuel).",
    "cat": "Level Sensors",
    "id": "T06_603"
  },
  {
    "q": "What is a strain gauge and how does it measure pressure?",
    "a": "A metallic resistance wire bonded to a diaphragm - applied pressure deflects the diaphragm, straining the wire and changing its resistance, measured by a Wheatstone bridge",
    "opts": [
      "A metallic resistance wire bonded to a diaphragm - applied pressure deflects the diaphragm, straining the wire and changing its resistance, measured by a Wheatstone bridge",
      "A piezoelectric crystal that generates voltage proportional to pressure",
      "A capacitor plate that changes capacitance with pressure",
      "A bimetallic strip that bends with temperature change"
    ],
    "exp": "Strain gauge pressure measurement: Thin metallic foil/wire bonded to flexible diaphragm. Pressure deflects diaphragm → wire stretches (tension) or compresses → resistance changes (ΔR/R = GF × strain, GF ≈ 2 for metallic gauges). Change is tiny (milliohms) so 4 strain gauges are arranged in a Wheatstone bridge for sensitivity. Bridge goes off-null proportional to pressure → output mV amplified to 4-20mA. This is the principle inside most pressure transmitters onboard.",
    "cat": "Pressure Measurement",
    "id": "T06_604"
  },
  {
    "q": "What is the key difference between a pressure transducer and a pressure transmitter?",
    "a": "Transducer outputs raw millivolts (needs external amplification); transmitter outputs 4-20mA (fully conditioned, loop-powered, ready for DCS)",
    "opts": [
      "Transducer outputs raw millivolts (needs external amplification); transmitter outputs 4-20mA (fully conditioned, loop-powered, ready for DCS)",
      "They are identical - the terms are used interchangeably",
      "Transmitter measures pressure; transducer measures temperature",
      "Transducer uses 4-20mA; transmitter uses 0-10V"
    ],
    "exp": "Pressure Transducer vs Transmitter: Transducer = raw signal device. Converts pressure to electrical signal (mV from strain gauge bridge) but requires external signal conditioning, excitation voltage, and amplification. Transmitter = complete measurement system. Contains transducer + internal amplifier + lineariser + temperature compensator. Outputs industry-standard 4-20mA, loop-powered from 24V DC. Can be configured remotely via HART. Transmitters are used in ship automation; transducers in laboratory or OEM sensor applications.",
    "cat": "Pressure Measurement",
    "id": "T06_605"
  },
  {
    "q": "What does LVDT stand for and what is its operating principle?",
    "a": "Linear Variable Differential Transformer - a moving iron core shifts mutual inductance between secondary coils, giving voltage output proportional to linear displacement",
    "opts": [
      "Linear Variable Differential Transformer - a moving iron core shifts mutual inductance between secondary coils, giving voltage output proportional to linear displacement",
      "Low Voltage Detection Transformer - detects voltages below normal level",
      "Level and Voltage Differential Transducer - measures tank levels",
      "Linear Voltage Divider Technology - a type of potentiometer"
    ],
    "exp": "LVDT operation: Primary coil (AC excited) sits between two identical secondary coils. Soft iron core mechanically coupled to measured object (valve stem, rack). When core is central → equal coupling to both secondaries → they cancel → zero output. Move core towards one secondary → coupling increases to that coil, decreases to other → net differential output voltage proportional to displacement. Phase indicates direction. Advantages: contactless (no friction/wear), infinite resolution, very reliable. Ship uses: governor fuel rack, control valve stem position, rudder angle transmitter.",
    "cat": "Displacement Sensors",
    "id": "T06_606"
  },
  {
    "q": "What happens if the flame eye (photocell) on a boiler is removed or fails?",
    "a": "The controller sees 'no flame' - in auto mode it shuts off fuel immediately (fail-safe). A faulty dirty photocell window can also cause nuisance flame failure shutdowns.",
    "opts": [
      "The controller sees 'no flame' - in auto mode it shuts off fuel immediately (fail-safe). A faulty dirty photocell window can also cause nuisance flame failure shutdowns.",
      "The boiler continues to run on manual mode with no effect",
      "The burner runs continuously without any flame monitoring",
      "Only an alarm is given; the fuel is not cut off"
    ],
    "exp": "Flame eye (UV photocell): Detects UV radiation from burner flame. No UV signal → flame failure relay drops → fuel solenoid valve de-energises → burner shuts down within seconds. This is a FAIL-SAFE design - if sensor fails/removed, system defaults to shutdown (no flame assumed), preventing unburnt fuel accumulation and explosion. Common fault: soot deposits on quartz viewing window absorb UV → nuisance shutdowns. Remedy: clean quartz window regularly. Also check photocell cell life (UV-sensitive material ages).",
    "cat": "Flame & Gas Detection",
    "id": "T06_607"
  },
  {
    "q": "What is the safe LEL reading required before entering a space with ignition sources?",
    "a": "Below 10% LEL",
    "opts": [
      "Below 10% LEL",
      "Below 50% LEL",
      "0% LEL only",
      "Below 25% LEL"
    ],
    "exp": "LEL safety limits: The Lower Explosive Limit (LEL) is the minimum concentration of combustible gas in air that will ignite. Explosimeter (catalytic bead instrument) reads 0-100% LEL. Safe entry with ignition sources (tools, lights): below 10% LEL. Hot work (welding, grinding): below 1% LEL. NEVER use an explosimeter beyond 100% LEL scale - readings become unreliable in the explosive range and above. Annual calibration with certified span gas (typically 50% LEL n-pentane or methane mixture).",
    "cat": "Flame & Gas Detection",
    "id": "T06_608"
  },
  {
    "q": "How does an OWS (Oily Water Separator) monitor the 15 ppm discharge limit?",
    "a": "A photocell sensor measures light transmission through the treated water - oil droplets scatter/absorb light; reduced transmission triggers automatic shut-off of the overboard valve",
    "opts": [
      "A photocell sensor measures light transmission through the treated water - oil droplets scatter/absorb light; reduced transmission triggers automatic shut-off of the overboard valve",
      "A conductivity probe measures the electrical resistance of the water",
      "A float sensor detects if oil has separated to the surface",
      "A temperature sensor detects heat generated by oil combustion"
    ],
    "exp": "OWS 15 ppm monitor (MARPOL Annex I requirement): Treated bilge water flows through a sample cell. LED/laser light beam shines across the flow path to a photodetector. Clean water (<15 ppm) = maximum light transmission = low reading. Oil droplets scatter and absorb light = less light reaches detector = reading rises. If reading exceeds 15 ppm: overboard discharge valve closes automatically, pump recirculates to bilge holding tank. Electronic log (ORB) records the event. The sensor must be calibrated annually with certified oil-in-water standard solution.",
    "cat": "Flame & Gas Detection",
    "id": "T06_609"
  },
  {
    "q": "What is a magnetic pick-up sensor and what is its main advantage over other speed sensors?",
    "a": "A permanent magnet with wound coil that generates pulses as ferrous gear teeth pass - its main advantage is that it is passive (no external power needed) and very reliable in harsh environments",
    "opts": [
      "A permanent magnet with wound coil that generates pulses as ferrous gear teeth pass - its main advantage is that it is passive (no external power needed) and very reliable in harsh environments",
      "An active Hall-effect sensor requiring 24V DC supply",
      "A capacitive sensor that detects non-metallic targets",
      "An ultrasonic sensor that measures shaft vibration"
    ],
    "exp": "Magnetic pick-up (variable reluctance sensor): Permanent magnet + wound coil positioned close to a ferrous toothed wheel on the shaft. As each tooth passes, magnetic flux changes → EMF induced in coil → voltage pulses generated. Frequency proportional to RPM. Formula: RPM = (Hz × 60) / number of teeth. Key advantage: completely passive - generates its own signal, no power supply needed, works in high temperatures and vibration. Ship uses: crankshaft overspeed trip detection, engine governor control, propeller shaft RPM indication. Note: minimum speed requirement - pulses become too infrequent and weak at very low RPM.",
    "cat": "Speed & Position Sensors",
    "id": "T06_610"
  },
  {
    "q": "Why must the salinometer use AC supply voltage, not DC?",
    "a": "DC causes electrode polarisation - ions accumulate on electrode surfaces, building up a counter-EMF that distorts the resistance reading. AC alternates polarity, preventing ion buildup.",
    "opts": [
      "DC causes electrode polarisation - ions accumulate on electrode surfaces, building up a counter-EMF that distorts the resistance reading. AC alternates polarity, preventing ion buildup.",
      "AC is safer and prevents electric shock to operators",
      "DC would cause corrosion of the stainless steel electrodes",
      "AC provides higher sensitivity for very low ppm readings"
    ],
    "exp": "Salinometer uses AC supply (typically low-frequency AC, 50-1000 Hz): When DC is applied across electrodes in saline water, electrolysis occurs - Na+ and Cl- ions migrate to the electrodes and form gas bubbles and deposits (polarisation). This builds a back-EMF that reduces the measured current, giving false low-salinity readings. AC alternates direction continuously, preventing net ion migration. The conductivity measurement therefore remains accurate and stable. The potentiometer provides a calibrated reference voltage so small supply voltage variations don't affect the ppm reading.",
    "cat": "Analyzers",
    "id": "T06_611"
  },
  {
    "q": "What checks must be performed on a portable oxygen meter before using it for enclosed space entry?",
    "a": "Check reading shows 20.9% in fresh air, perform a bump test with depleted/enriched atmosphere, verify sensor is within its service life, and confirm the battery is charged",
    "opts": [
      "Check reading shows 20.9% in fresh air, perform a bump test with depleted/enriched atmosphere, verify sensor is within its service life, and confirm the battery is charged",
      "Only verify battery level and zero the meter",
      "Calibrate with nitrogen only - no other checks needed",
      "Only visual inspection of the sensor tip is required"
    ],
    "exp": "Pre-use checks for portable oxygen meter: (1) Fresh air reading: must show 20.9% O2 in clean atmosphere outside the space. (2) Bump test: briefly expose to a known concentration (O2-depleted or O2-enriched atmosphere) to confirm sensor responds. (3) Sensor life: electrochemical galvanic cells are consumed over 1-3 years - check expiry date. Do not use beyond expiry. (4) Battery: confirm sufficient charge for the duration of work. (5) Calibration record: valid calibration certificate within required period. Safe range for entry: 19.5% to 23.5% O2. Below 19.5% = oxygen deficient. Above 23.5% = oxygen enriched (fire risk).",
    "cat": "Analyzers",
    "id": "T06_612"
  }

]);
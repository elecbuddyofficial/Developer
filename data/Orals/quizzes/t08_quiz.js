window.loadQuizzes("T08_Electronics", [
  {
    "q": "What reading will a healthy silicon P-N junction diode show on a multimeter in forward bias?",
    "a": "0.5–0.7V",
    "opts": [
      "0V in both directions",
      "0.5–0.7V",
      "OL (Open Loop)",
      "1.2–1.5V"
    ],
    "exp": "A healthy silicon diode needs 0.5–0.7V to overcome its potential barrier in forward bias. 0V indicates a shorted diode (failed, cannot block). OL in forward bias means open-circuit failure. 1.2–1.5V is typical of germanium or series-connected diodes.",
    "cat": "DIODE",
    "id": "T08E_001"
  },
  {
    "q": "What is the primary function of a Zener diode in an electronic control circuit?",
    "a": "Operates in reverse breakdown to maintain a stable reference voltage",
    "opts": [
      "Amplifies low-level sensor signals",
      "Operates in reverse breakdown to maintain a stable reference voltage",
      "Converts AC to DC through high-frequency switching",
      "Isolates PLC logic from high-voltage surges using light"
    ],
    "exp": "Zener diodes are heavily doped to operate safely in reverse breakdown — maintaining a constant voltage regardless of current. Standard diodes are destroyed by reverse breakdown. Optical isolation describes optocouplers. Amplification describes transistors.",
    "cat": "DIODE",
    "id": "T08E_002"
  },
  {
    "q": "How is an N-type semiconductor created?",
    "a": "Adding pentavalent impurity atoms (e.g. phosphorus) to pure silicon — provides free electrons",
    "opts": [
      "Adding trivalent impurity atoms like boron — creates holes",
      "Adding pentavalent impurity atoms (e.g. phosphorus) to pure silicon — provides free electrons",
      "Removing all impurities to create perfectly crystalline silicon",
      "Heating silicon until covalent bonds break and release holes"
    ],
    "exp": "N-type doping: pentavalent atoms (phosphorus, arsenic) have 5 valence electrons — the extra electron becomes a free carrier. P-type uses trivalent atoms (boron) creating holes. Pure intrinsic silicon has insufficient free carriers for practical devices.",
    "cat": "DIODE",
    "id": "T08E_003"
  },
  {
    "q": "When testing a short-circuited rotating rectifier diode, what does the multimeter show?",
    "a": "Near 0V in both forward and reverse bias",
    "opts": [
      "Near 0V in both forward and reverse bias",
      "0.6V forward, OL reverse (normal healthy reading)",
      "OL in both directions (open circuit)",
      "Exactly 3.3V in reverse bias only"
    ],
    "exp": "A shorted diode conducts freely in both directions — 0V drop both ways. A healthy diode shows 0.5–0.7V forward, OL reverse. OL in both directions = open circuit (burned junction). Rotating rectifier diodes can be checked by stroboscope or by testing removed diodes individually.",
    "cat": "DIODE",
    "id": "T08E_004"
  },
  {
    "q": "What distinguishes a BJT from a MOSFET?",
    "a": "BJT is current-controlled (needs base current); MOSFET is voltage-controlled (no gate current)",
    "opts": [
      "BJT handles higher frequencies than MOSFET",
      "BJT is immune to secondary breakdown; MOSFET is susceptible",
      "BJT uses an insulated gate drawing zero current",
      "BJT is current-controlled (needs base current); MOSFET is voltage-controlled (no gate current)"
    ],
    "exp": "BJT: small base current controls large collector current — current-controlled. MOSFET: gate voltage controls drain current with negligible gate current — voltage-controlled. MOSFETs switch faster and drive ICs easily. BJTs have slightly better linearity for some audio applications.",
    "cat": "BJT",
    "id": "T08E_005"
  },
  {
    "q": "In which BJT region does the transistor act as a fully closed switch?",
    "a": "Saturation region",
    "opts": [
      "Saturation region",
      "Cutoff region",
      "Active (linear) region",
      "Avalanche region"
    ],
    "exp": "Saturation = fully ON (closed switch) — base overdrive, minimal collector-emitter voltage. Cutoff = fully OFF (open switch) — no base current, no collector current. Active region = used for linear amplification, not switching. Avalanche = destructive breakdown.",
    "cat": "BJT",
    "id": "T08E_006"
  },
  {
    "q": "Why are IGBTs preferred over SCRs in VFD inverter stages?",
    "a": "IGBTs can be turned OFF by removing gate voltage; SCRs latch ON and require current to drop to zero",
    "opts": [
      "SCRs switch faster than IGBTs at high frequencies",
      "IGBTs can be turned OFF by removing gate voltage; SCRs latch ON and require current to drop to zero",
      "SCRs have lower on-state losses than IGBTs",
      "IGBTs cannot handle the high voltages in VFD applications"
    ],
    "exp": "IGBTs are gate-controlled — removing gate voltage turns them OFF at any time, enabling PWM at 20kHz. SCRs are latching devices — once triggered they stay ON until current drops below holding current. In a DC-fed inverter, the current never naturally falls to zero, making SCRs unusable.",
    "cat": "BJT",
    "id": "T08E_007"
  },
  {
    "q": "What happens to a Thyristor (SCR) once fired by a positive gate pulse in a DC circuit?",
    "a": "It latches ON completely — the gate loses all control until main current drops below holding current",
    "opts": [
      "It stays ON only while gate pulse is applied",
      "It latches ON completely — the gate loses all control until main current drops below holding current",
      "It turns OFF if gate voltage is reversed to negative",
      "It oscillates to convert DC to AC output"
    ],
    "exp": "SCR = latching device. Once triggered, the four-layer PNPN structure holds ON regardless of gate. Gate cannot turn it off. The only way to turn off: reduce main current below the holding current threshold (typically 5-100mA for small SCRs).",
    "cat": "THYRISTOR",
    "id": "T08E_008"
  },
  {
    "q": "What is the primary effect of increasing the firing angle (α) of a thyristor in a soft starter?",
    "a": "Delays turn-on in the AC cycle — decreases average output voltage and reduces motor starting torque",
    "opts": [
      "Accelerates turn-on — gives higher average voltage",
      "Increases output AC frequency without changing voltage",
      "Delays turn-on in the AC cycle — decreases average output voltage and reduces motor starting torque",
      "Reverses phase sequence to brake the motor"
    ],
    "exp": "Firing angle α = delay from AC voltage zero-crossing to SCR triggering. α=0° = full voltage. α=90° = ~50% voltage. α=180° = near zero. Soft starters ramp α from 90° down to 0° during motor startup, limiting inrush current.",
    "cat": "THYRISTOR",
    "id": "T08E_009"
  },
  {
    "q": "How does natural commutation turn off an SCR in an AC circuit?",
    "a": "The AC supply current crosses zero each half-cycle, dropping below holding current and turning off the SCR",
    "opts": [
      "A reverse voltage pulse from a capacitor turns it off (forced commutation)",
      "Removing the gate signal turns it off",
      "The AC supply current crosses zero each half-cycle, dropping below holding current and turning off the SCR",
      "The SCR has an insulated gate to cleanly chop AC waveform"
    ],
    "exp": "In AC circuits, current naturally reverses each half-cycle, automatically falling through zero — this natural zero crossing extinguishes the SCR. In DC circuits, forced commutation (capacitor circuit) must artificially force current to zero. Gate removal never turns off a latched thyristor.",
    "cat": "THYRISTOR",
    "id": "T08E_010"
  },
  {
    "q": "How many diodes are in a single-phase full-wave bridge rectifier?",
    "a": "4 diodes",
    "opts": [
      "1 diode",
      "2 diodes",
      "4 diodes",
      "6 diodes"
    ],
    "exp": "Single-phase bridge = 4 diodes in H-bridge configuration. Two diodes conduct each half-cycle. 1 diode = half-wave (conducts only one half-cycle). 2 diodes = full-wave centre-tap (needs special transformer). 6 diodes = 3-phase bridge rectifier.",
    "cat": "POWER",
    "id": "T08E_011"
  },
  {
    "q": "Which rectifier type is used in VFD DC links due to lowest ripple?",
    "a": "3-phase bridge rectifier with 6 diodes — ripple factor ~4.2%",
    "opts": [
      "Half-wave single-phase — 121% ripple",
      "Single-phase full-wave bridge — 48% ripple",
      "3-phase bridge rectifier with 6 diodes — ripple factor ~4.2%",
      "Centre-tap with 2 diodes — 48% ripple"
    ],
    "exp": "3-phase bridge produces near-DC output with only 4.2% ripple — ideal for VFDs where smooth DC is essential. Single-phase bridge has 48% ripple requiring much larger filter capacitors. Half-wave at 121% ripple is completely unsuitable for power electronics.",
    "cat": "POWER",
    "id": "T08E_012"
  },
  {
    "q": "Why is SMPS smaller and lighter than a linear power supply?",
    "a": "Switches DC at high frequencies (20kHz–1MHz) allowing tiny high-frequency transformer instead of large 50Hz transformer",
    "opts": [
      "Burns excess voltage as heat using series-pass transistor — no transformer needed",
      "Uses heavy 50Hz iron-core transformers to filter EMI naturally",
      "Switches DC at high frequencies (20kHz–1MHz) allowing tiny high-frequency transformer instead of large 50Hz transformer",
      "Uses mechanical commutators to chop 440V AC into 24V DC"
    ],
    "exp": "SMPS switches at 20kHz–1MHz — high-frequency transformers are much smaller (transformer size ∝ 1/frequency). Linear PSU uses 50Hz transformer — large and heavy. SMPS generates more EMI than linear PSU due to switching (EMI filters needed).",
    "cat": "POWER",
    "id": "T08E_013"
  },
  {
    "q": "What is the purpose of a freewheeling diode (flyback diode) across an inductive load?",
    "a": "Provides a current path for the collapsing magnetic field energy when the switch opens — prevents voltage spike",
    "opts": [
      "Amplifies gate signal to increase switching speed",
      "Filters 50Hz AC ripple from the DC supply",
      "Provides a current path for the collapsing magnetic field energy when the switch opens — prevents voltage spike",
      "Acts as a short circuit to test relay coil integrity"
    ],
    "exp": "When a relay coil or motor winding switch opens, the collapsing magnetic field generates a high-voltage back-EMF spike (Lenz's Law). The freewheeling diode short-circuits this spike, preventing destruction of the controlling transistor or PLC output. Also called a snubber diode or flyback diode.",
    "cat": "DIODE",
    "id": "T08E_014"
  },
  {
    "q": "What is the output voltage range of a standard 4-20mA analog transmitter when the process is at 0% and 100%?",
    "a": "4mA at 0% (live zero) and 20mA at 100% of range",
    "opts": [
      "0mA at 0% and 20mA at 100%",
      "4mA at 0% (live zero) and 20mA at 100% of range",
      "0mA at 0% and 24mA at 100%",
      "2mA at 0% and 22mA at 100%"
    ],
    "exp": "The 4-20mA standard uses a live zero of 4mA — allows differentiation between 0% reading (4mA) and a broken wire/power failure (0mA). The 4mA minimum also powers the transmitter in 2-wire configurations. 20mA at full scale. Any reading below 3.8mA or above 20.5mA indicates a fault.",
    "cat": "ADC",
    "id": "T08E_015"
  },
  {
    "q": "A 4-20mA sensor reading drops to 0mA while the process is operating normally. What is the most likely cause?",
    "a": "Open circuit — broken wire or failed transmitter — not a valid process reading",
    "opts": [
      "Process variable has dropped to below minimum range",
      "Open circuit — broken wire or failed transmitter — not a valid process reading",
      "Signal is being amplified by the I/P converter in the panel",
      "Zener barrier has clamped the signal to zero for safety"
    ],
    "exp": "The 4-20mA live zero standard means 0mA is NEVER a valid process reading (minimum valid signal is 4mA at 0% range). 0mA specifically indicates a broken wire or powered-off transmitter. This is the key diagnostic advantage of 4-20mA over 0-20mA.",
    "cat": "ADC",
    "id": "T08E_016"
  },
  {
    "q": "What is the resolution of an 8-bit ADC with a 0-10V input range?",
    "a": "10V ÷ 256 steps = 39.06mV per step",
    "opts": [
      "10V ÷ 8 steps = 1.25V per step",
      "10V ÷ 256 steps = 39.06mV per step",
      "10V ÷ 1024 steps = 9.77mV per step",
      "10V ÷ 16 steps = 625mV per step"
    ],
    "exp": "An 8-bit ADC has 2⁸ = 256 discrete levels. Resolution = full scale ÷ levels = 10V ÷ 256 = 39.06mV. A 10-bit ADC has 1024 levels (9.77mV). Resolution determines the smallest change the ADC can detect. More bits = higher resolution = finer measurement.",
    "cat": "ADC",
    "id": "T08E_017"
  },
  {
    "q": "What is the purpose of an anti-aliasing filter before an ADC?",
    "a": "To remove frequency components above the Nyquist frequency that would cause false readings",
    "opts": [
      "To amplify the input signal to full ADC range",
      "To remove DC offset from the sensor signal",
      "To remove frequency components above the Nyquist frequency that would cause false readings",
      "To convert the sensor signal from current to voltage before digitising"
    ],
    "exp": "The Nyquist theorem requires sampling at ≥2× the highest frequency of interest. Higher-frequency components must be filtered out before sampling, otherwise they alias as false lower-frequency signals in the digital data. The anti-aliasing filter is a low-pass filter set just below the Nyquist frequency.",
    "cat": "ADC",
    "id": "T08E_018"
  },
  {
    "q": "In a VFD, what is the function of the PWM (Pulse Width Modulation) stage?",
    "a": "Varies the on/off time ratio of the inverter IGBTs to synthesise a variable-frequency AC output from DC",
    "opts": [
      "Directly converts 440V AC input to variable frequency AC in one step",
      "Steps up the DC bus voltage before it reaches the motor",
      "Varies the on/off time ratio of the inverter IGBTs to synthesise a variable-frequency AC output from DC",
      "Filters harmonic currents back into the supply grid"
    ],
    "exp": "PWM switches the IGBT inverter pairs at high frequency (typically 2-16kHz). By varying the on-time vs off-time of each IGBT pair, the average voltage and effective frequency seen by the motor can be precisely controlled. The motor's inductance smooths the PWM pulses into an approximately sinusoidal current waveform.",
    "cat": "POWER",
    "id": "T08E_019"
  },
  {
    "q": "What is the advantage of a 3-phase half-controlled thyristor bridge over a fully controlled bridge in DC motor drives?",
    "a": "The half-controlled bridge allows faster braking by allowing freewheeling, reducing firing circuit complexity",
    "opts": [
      "The half-controlled bridge produces lower harmonic distortion",
      "It can generate higher output voltages than a fully-controlled bridge",
      "The half-controlled bridge allows faster braking by allowing freewheeling, reducing firing circuit complexity",
      "It provides regenerative braking capability back to the supply"
    ],
    "exp": "Half-controlled (3 SCRs + 3 diodes) allows the output current to freewheel through the diodes when thyristors are off — simpler and cheaper. Fully-controlled bridges (6 SCRs) can provide regenerative braking by reversing power flow. Half-controlled cannot regenerate but is sufficient for simple speed control.",
    "cat": "THYRISTOR",
    "id": "T08E_020"
  },
  {
    "q": "What is the primary function of a flyback (freewheeling) diode connected across a DC motor armature or relay coil?",
    "a": "It provides a path for the collapsing magnetic field's reverse EMF when the coil is de-energised, preventing the high voltage spike from destroying switching transistors or contactors",
    "opts": [
      "It converts AC ripple from the rectifier into pure DC by filtering high-frequency harmonics",
      "It limits the maximum forward current through the motor armature during starting",
      "It provides a path for the collapsing magnetic field's reverse EMF when the coil is de-energised, preventing the high voltage spike from destroying switching transistors or contactors",
      "It blocks reverse polarity connection of the DC motor in case the battery terminals are reversed"
    ],
    "exp": "When a coil (motor armature or relay) is switched off, the collapsing magnetic field induces a high reverse EMF (L di/dt). The flyback diode clamps this spike to approximately 0.7V, protecting the switching device.",
    "cat": "Diode",
    "id": "T08E_021"
  },
  {
    "q": "In a shipboard 3-phase bridge rectifier (used in battery chargers and UPS), how many diodes are used and what determines the output DC ripple frequency?",
    "a": "6 diodes arranged in two rows of three. Output ripple frequency = 6 times the supply frequency (300 Hz for 50 Hz supply)",
    "opts": [
      "12 diodes in a full-wave bridge. Output ripple = 12 times the supply frequency (600 Hz)",
      "4 diodes in a standard bridge. Output ripple = 2 times the supply frequency (100 Hz)",
      "3 diodes in a half-wave configuration. Output ripple = 3 times the supply frequency (150 Hz)",
      "6 diodes arranged in two rows of three. Output ripple frequency = 6 times the supply frequency (300 Hz for 50 Hz supply)"
    ],
    "exp": "A 3-phase full-wave bridge rectifier uses 6 diodes and produces 6 pulses per cycle, giving a ripple frequency of 6 x 50Hz = 300Hz. Higher ripple frequency makes it easier to filter to smooth DC.",
    "cat": "Diode",
    "id": "T08E_022"
  },
  {
    "q": "What is the key difference between a BJT (Bipolar Junction Transistor) and a MOSFET (Metal Oxide Semiconductor Field Effect Transistor) used in shipboard drives?",
    "a": "BJT is current-controlled (base current drives switching); MOSFET is voltage-controlled (gate voltage drives switching with near-zero gate current)",
    "opts": [
      "BJT operates only with AC signals; MOSFET operates only with DC signals",
      "BJT has three terminals called Source, Gate, Drain; MOSFET has terminals called Base, Emitter, Collector",
      "BJT is used exclusively for high-power applications above 6.6 kV; MOSFET is limited to 24V control circuits",
      "BJT is current-controlled (base current drives switching); MOSFET is voltage-controlled (gate voltage drives switching with near-zero gate current)"
    ],
    "exp": "BJT requires a continuous base current to stay on. MOSFET requires only a gate voltage — the gate input impedance is near-infinite (no current flows). This makes MOSFET far more efficient for high-frequency switching in VFDs.",
    "cat": "Transistor",
    "id": "T08E_023"
  },
  {
    "q": "Why are IGBTs (Insulated Gate Bipolar Transistors) specifically used in marine Variable Frequency Drives (VFDs) for motors above 100 kW?",
    "a": "IGBTs combine the high input impedance voltage control of MOSFETs with the low saturation voltage (high current capacity) of BJTs — making them ideal for high-power, high-frequency switching in motor drives",
    "opts": [
      "IGBTs combine the high input impedance voltage control of MOSFETs with the low saturation voltage (high current capacity) of BJTs — making them ideal for high-power, high-frequency switching in motor drives",
      "IGBTs are the only semiconductor that can withstand the high humidity and salt atmosphere of the engine room without derating",
      "IGBTs generate less heat than MOSFETs because they use a magnetic field rather than current flow to switch power",
      "IGBTs are chosen because they can operate bidirectionally without any additional circuit components"
    ],
    "exp": "IGBTs rated up to 6.5 kV and hundreds of amperes are the standard choice for VFDs. The MOSFET-style gate provides easy driving; the BJT-style collector-emitter provides the power handling needed for large motor drives.",
    "cat": "Transistor",
    "id": "T08E_024"
  },
  {
    "q": "In a current-to-voltage (I/V) converter op-amp circuit using a 4-20mA sensor signal and a 250 ohm feedback resistor, what output voltage range is produced?",
    "a": "1V to 5V output (4mA x 250 ohm = 1V minimum; 20mA x 250 ohm = 5V maximum)",
    "opts": [
      "4V to 20V output — directly equal to the milliamp signal multiplied by 1000",
      "0.4V to 2.0V output — the op-amp divides the current by a factor of 10",
      "1V to 5V output (4mA x 250 ohm = 1V minimum; 20mA x 250 ohm = 5V maximum)",
      "0V to 10V output — the standard industrial signal range for all 4-20mA sensors"
    ],
    "exp": "Vout = Iin x Rf. For a 250 ohm resistor: 4mA x 250 = 1V (process minimum) and 20mA x 250 = 5V (process maximum). This 1-5V signal is then fed to the PLC analogue input module.",
    "cat": "OpAmp",
    "id": "T08E_025"
  },
  {
    "q": "What does the intrinsic safety parameter 'ia' (versus 'ib') indicate about an Ex ia certified instrument?",
    "a": "'ia' means the instrument remains safe under TWO simultaneous faults; 'ib' means safe under ONE fault — making 'ia' suitable for Zone 0 and 'ib' for Zone 1 only",
    "opts": [
      "'ia' means the instrument remains safe under TWO simultaneous faults; 'ib' means safe under ONE fault — making 'ia' suitable for Zone 0 and 'ib' for Zone 1 only",
      "'ia' indicates the instrument is immersion-proof to 1 metre; 'ib' indicates resistance to high-pressure washdown",
      "'ia' and 'ib' are interchangeable designations — there is no functional difference between them",
      "'ia' indicates the instrument uses an internal battery; 'ib' indicates it is powered from the ship's 24V DC system"
    ],
    "exp": "Ex ia certification (two-fault tolerance) is required for Zone 0 because the hazardous atmosphere is present continuously. Ex ib (one-fault tolerance) is acceptable for Zone 1 where the atmosphere is only occasional.",
    "cat": "IS",
    "id": "T08E_026"
  },
  {
    "q": "What is the peak voltage of the standard 440V AC shore or generator supply, and why is this value important for circuit protection?",
    "a": "Peak voltage = 440 x root 2 = approximately 622V — important because capacitors, insulation, and surge suppressors must be rated above this peak value, not just the 440V RMS value",
    "opts": [
      "Peak voltage = 440 x 2 = 880V — double the RMS value due to the full-wave rectification effect",
      "Peak voltage = 440 x root 2 = approximately 622V — important because capacitors, insulation, and surge suppressors must be rated above this peak value, not just the 440V RMS value",
      "Peak voltage = 440 / root 2 = 311V — the RMS is always higher than the peak in AC systems",
      "Peak voltage = 440V — the RMS and peak values are identical for AC systems"
    ],
    "exp": "RMS (440V) is the equivalent heating value. Peak voltage is 440 x 1.414 = 622V. All insulation, capacitors, and protection devices must withstand this peak value. A capacitor rated 600V would fail on a 440V AC supply.",
    "cat": "Formula",
    "id": "T08E_027"
  },
  {
    "q": "In a 555 timer astable circuit used for generating timing pulses in control systems, what formula determines the output period?",
    "a": "T = 1.1 x R x C seconds (for a monostable pulse width); astable period T = 0.693 x C x (R1 + 2R2)",
    "opts": [
      "T = R / C seconds — the time constant is the resistance divided by the capacitance",
      "T = R x C / 1000 milliseconds — the standard formula for all timer ICs regardless of configuration",
      "T = 1.1 x R x C seconds (for a monostable pulse width); astable period T = 0.693 x C x (R1 + 2R2)",
      "T = 2 x pi x R x C seconds — the same formula used for an RC filter's cutoff frequency"
    ],
    "exp": "555 monostable: T = 1.1RC. 555 astable: T = 0.693C(R1+2R2), frequency = 1.44/((R1+2R2)C). These are frequently used in test equipment and control panel timing circuits on ships.",
    "cat": "Formula",
    "id": "T08E_028"
  },
  {
    "q": "What is the capacitive reactance (Xc) of a 10 microfarad capacitor at 50 Hz, and what does this value tell us?",
    "a": "Xc = 1 / (2 x pi x 50 x 10x10^-6) = approximately 318 ohms — at this frequency, the capacitor presents 318 ohms impedance to AC but blocks DC completely",
    "opts": [
      "Xc = 10x10^-6 x 50 = 0.0005 ohms — the reactance equals capacitance times frequency",
      "Xc = 1 / (2 x pi x 50 x 10x10^-6) = approximately 318 ohms — at this frequency, the capacitor presents 318 ohms impedance to AC but blocks DC completely",
      "Xc = 50 / (10x10^-6) = 5,000,000 ohms — capacitors are essentially open circuits at power frequencies",
      "Xc = 2 x pi x 50 x 10x10^-6 = approximately 0.00314 ohms — capacitors are near-short-circuits at 50 Hz"
    ],
    "exp": "Xc = 1/(2*pi*f*C). At 50Hz, Xc for 10uF = 1/(2*pi*50*10e-6) = 318 ohms. Xc decreases as frequency increases — capacitors pass high-frequency signals but block DC and low-frequency signals.",
    "cat": "Formula",
    "id": "T08E_029"
  },
  {
    "q": "What does the Open Circuit Voltage (Uo) parameter specify on an Ex ia safety barrier?",
    "a": "The maximum voltage that can appear at the hazardous area terminals of the barrier under open circuit conditions — must be kept below the ignition voltage for the specific gas group",
    "opts": [
      "The output voltage of the sensor when the process is at its maximum design value (20mA output)",
      "The maximum voltage that can appear at the hazardous area terminals of the barrier under open circuit conditions — must be kept below the ignition voltage for the specific gas group",
      "The voltage drop across the barrier when the circuit is operating at maximum sensor current (20mA)",
      "The minimum supply voltage required for the barrier to regulate correctly and protect the sensor circuit"
    ],
    "exp": "Uo is one of three critical Ex ia parameters (Uo, Io, Po). It defines the worst-case open-circuit voltage at the zone boundary. For Gas Group IIA, Uo must be below approximately 14V to guarantee no ignition.",
    "cat": "IS",
    "id": "T08E_030"
  },
  {
    "q": "On a ship CCTV system, what does a constant-current LED driver do that makes it superior to a simple resistor for powering LEDs?",
    "a": "It maintains constant current through the LED regardless of supply voltage fluctuations or temperature changes — preventing under-brightness or premature LED failure from over-current",
    "opts": [
      "It converts the 440V AC supply directly to 3.3V DC for LED operation without any transformer",
      "It maintains constant current through the LED regardless of supply voltage fluctuations or temperature changes — preventing under-brightness or premature LED failure from over-current",
      "It stores energy during the day cycle and uses it to keep the LED lit during the night cycle",
      "It provides surge protection to prevent lightning strikes from destroying the CCTV camera module"
    ],
    "exp": "LEDs have exponential V-I characteristics — a small voltage increase causes a large current increase. A resistor cannot compensate for this. A constant-current driver maintains safe LED operating current regardless of supply or junction temperature variations.",
    "cat": "Transistor",
    "id": "T08E_031"
  },
  {
    "q": "What is the built-in potential barrier for a Silicon P-N junction diode?",
    "a": "0.6-0.7V",
    "opts": [
      "0.2-0.3V",
      "2.0-2.5V",
      "0.6-0.7V",
      "1.0-1.2V"
    ],
    "exp": "Silicon diodes require 0.6 to 0.7 volts to overcome the depletion region barrier.",
    "cat": "Diode",
    "id": "T08E_032"
  },
  {
    "q": "What is the built-in potential barrier for a Germanium P-N junction diode?",
    "a": "0.2-0.3V",
    "opts": [
      "1.5-1.8V",
      "0.6-0.7V",
      "0.2-0.3V",
      "1.0-1.2V"
    ],
    "exp": "Germanium diodes have a lower potential barrier of 0.2-0.3V compared to silicon.",
    "cat": "Diode",
    "id": "T08E_033"
  },
  {
    "q": "How is a diode connected to be in forward bias?",
    "a": "Anode to positive, Cathode to negative",
    "opts": [
      "Anode to positive, Cathode to negative",
      "Both to negative",
      "Both to positive",
      "Anode to negative, Cathode to positive"
    ],
    "exp": "Forward bias requires the Anode to be positive relative to the Cathode.",
    "cat": "Diode",
    "id": "T08E_034"
  },
  {
    "q": "What happens to the depletion region during forward bias?",
    "a": "It collapses, allowing current to flow freely",
    "opts": [
      "It collapses, allowing current to flow freely",
      "It reverses polarity",
      "It widens, blocking current",
      "It turns into an insulator"
    ],
    "exp": "Forward voltage overcomes the barrier, collapsing the depletion zone.",
    "cat": "Diode",
    "id": "T08E_035"
  },
  {
    "q": "What happens to the depletion region during reverse bias?",
    "a": "It widens, blocking current flow",
    "opts": [
      "It widens, blocking current flow",
      "It emits light",
      "It generates a high voltage pulse",
      "It collapses completely"
    ],
    "exp": "Reverse voltage reinforces the barrier, widening the depletion zone.",
    "cat": "Diode",
    "id": "T08E_036"
  },
  {
    "q": "What does PIV stand for in diode specifications?",
    "a": "Peak Inverse Voltage",
    "opts": [
      "Peak Inverse Voltage",
      "Phase Isolation Voltage",
      "Pulse Inverter Voltage",
      "Positive Internal Value"
    ],
    "exp": "PIV is the maximum reverse voltage a diode can withstand before breakdown.",
    "cat": "Diode",
    "id": "T08E_037"
  },
  {
    "q": "When testing a healthy silicon diode in forward bias with a multimeter, what is the expected reading?",
    "a": "0.5-0.7V",
    "opts": [
      "OL (Open Loop)",
      "1.2-1.5V",
      "0.5-0.7V",
      "0V"
    ],
    "exp": "A healthy silicon diode shows its forward voltage drop of 0.5-0.7V.",
    "cat": "Diode",
    "id": "T08E_038"
  },
  {
    "q": "When testing a healthy diode in reverse bias with a multimeter, what is the expected reading?",
    "a": "OL (Open Loop / Open Circuit)",
    "opts": [
      "5V",
      "0.6V",
      "OL (Open Loop / Open Circuit)",
      "0V"
    ],
    "exp": "In reverse bias, a healthy diode blocks current, showing an open circuit (OL).",
    "cat": "Diode",
    "id": "T08E_039"
  },
  {
    "q": "What multimeter reading indicates a shorted diode?",
    "a": "Near 0V in both forward and reverse directions",
    "opts": [
      "0.6V forward, OL reverse",
      "OL in both directions",
      "0.6V in both directions",
      "Near 0V in both forward and reverse directions"
    ],
    "exp": "A shorted diode conducts in both directions with almost no resistance.",
    "cat": "Diode",
    "id": "T08E_040"
  },
  {
    "q": "What multimeter reading indicates an open-circuit diode?",
    "a": "OL (Open Loop) in both forward and reverse directions",
    "opts": [
      "OL (Open Loop) in both forward and reverse directions",
      "0V in both directions",
      "1.2V in both directions",
      "0.6V forward, OL reverse"
    ],
    "exp": "An open diode fails to conduct in either direction, showing OL.",
    "cat": "Diode",
    "id": "T08E_041"
  },
  {
    "q": "What must be done before testing rotating rectifier diodes on a brushless alternator?",
    "a": "Stop the alternator and disconnect the diodes from the circuit",
    "opts": [
      "Run the alternator at rated speed",
      "Apply DC voltage to the stator",
      "Short circuit the main terminals",
      "Stop the alternator and disconnect the diodes from the circuit"
    ],
    "exp": "Diodes must be electrically isolated to prevent parallel circuits from giving false readings.",
    "cat": "Diode",
    "id": "T08E_042"
  },
  {
    "q": "What is a Zener diode designed to do?",
    "a": "Operate safely in reverse breakdown to maintain a constant voltage",
    "opts": [
      "Operate safely in reverse breakdown to maintain a constant voltage",
      "Block all reverse current permanently",
      "Emit infrared light",
      "Amplify AC signals"
    ],
    "exp": "Zener diodes are specifically doped to operate in the reverse breakdown region without damage.",
    "cat": "Diode",
    "id": "T08E_043"
  },
  {
    "q": "How is a Zener diode connected in a voltage regulator circuit?",
    "a": "In reverse bias with a series resistor",
    "opts": [
      "In series with the load without a resistor",
      "In parallel with the AC input",
      "In reverse bias with a series resistor",
      "In forward bias with a series resistor"
    ],
    "exp": "It must be reverse biased to reach Zener breakdown, and requires a resistor to limit current.",
    "cat": "Diode",
    "id": "T08E_044"
  },
  {
    "q": "What happens if the supply voltage increases in a Zener regulator circuit?",
    "a": "Zener current increases, but output voltage stays fixed at Vz",
    "opts": [
      "Zener current increases, but output voltage stays fixed at Vz",
      "The series resistor decreases its resistance",
      "Zener diode turns off",
      "Output voltage increases proportionally"
    ],
    "exp": "The Zener absorbs the extra current, maintaining a constant voltage across the load.",
    "cat": "Diode",
    "id": "T08E_045"
  },
  {
    "q": "Where is a Zener diode commonly used in a ship's AVR (Automatic Voltage Regulator)?",
    "a": "To provide a stable reference voltage for comparison",
    "opts": [
      "To rectify the main AC output",
      "To cool the heat sinks",
      "To drive the main field directly",
      "To provide a stable reference voltage for comparison"
    ],
    "exp": "The AVR compares the generator's actual voltage against the highly stable Zener reference voltage.",
    "cat": "Diode",
    "id": "T08E_046"
  },
  {
    "q": "What is the purpose of a freewheeling (flyback) diode?",
    "a": "Connected across a relay coil to suppress high-voltage back-EMF spikes",
    "opts": [
      "To make the relay open faster",
      "To convert AC to DC for the relay",
      "Connected across a relay coil to suppress high-voltage back-EMF spikes",
      "To increase the coil's magnetic field"
    ],
    "exp": "It provides a safe path for inductive discharge current when the coil is de-energized.",
    "cat": "Diode",
    "id": "T08E_047"
  },
  {
    "q": "What is doping in the context of semiconductors?",
    "a": "Adding impurity atoms to pure silicon/germanium to change its conductivity",
    "opts": [
      "Cooling the semiconductor to absolute zero",
      "Adding impurity atoms to pure silicon/germanium to change its conductivity",
      "Exposing the material to UV light",
      "Cleaning the semiconductor surface"
    ],
    "exp": "Doping creates N-type or P-type materials by adding specific impurity atoms.",
    "cat": "Diode",
    "id": "T08E_048"
  },
  {
    "q": "What type of dopant is used to create N-type semiconductor material?",
    "a": "Pentavalent atoms (like phosphorus or arsenic)",
    "opts": [
      "Carbon atoms",
      "Pentavalent atoms (like phosphorus or arsenic)",
      "Noble gases",
      "Trivalent atoms (like boron)"
    ],
    "exp": "Pentavalent atoms have 5 valence electrons, providing one free electron to the lattice.",
    "cat": "Diode",
    "id": "T08E_049"
  },
  {
    "q": "What type of dopant is used to create P-type semiconductor material?",
    "a": "Trivalent atoms (like boron)",
    "opts": [
      "Trivalent atoms (like boron)",
      "Silicon atoms",
      "Pentavalent atoms (like phosphorus)",
      "Copper atoms"
    ],
    "exp": "Trivalent atoms have 3 valence electrons, creating a 'hole' (missing electron) in the lattice.",
    "cat": "Diode",
    "id": "T08E_050"
  },
  {
    "q": "What are the majority charge carriers in N-type semiconductors?",
    "a": "Electrons",
    "opts": [
      "Electrons",
      "Holes",
      "Neutrons",
      "Protons"
    ],
    "exp": "N-type materials are doped to have an excess of free negatively charged electrons.",
    "cat": "Diode",
    "id": "T08E_051"
  },
  {
    "q": "What are the majority charge carriers in P-type semiconductors?",
    "a": "Holes",
    "opts": [
      "Electrons",
      "Photons",
      "Holes",
      "Protons"
    ],
    "exp": "P-type materials have an excess of positively charged 'holes'.",
    "cat": "Diode",
    "id": "T08E_052"
  },
  {
    "q": "Why is a standard diode destroyed by reverse breakdown but a Zener is not?",
    "a": "Zener diodes are specially doped to handle the power dissipation safely",
    "opts": [
      "Standard diodes use germanium instead of silicon",
      "Zener diodes are specially doped to handle the power dissipation safely",
      "Zener diodes have a built-in fan",
      "Zener diodes have thicker wires"
    ],
    "exp": "Heavy doping allows Zeners to sustain reverse breakdown without thermal destruction.",
    "cat": "Diode",
    "id": "T08E_053"
  },
  {
    "q": "What is a common shipboard application for a protection diode?",
    "a": "Reverse polarity protection in DC control circuits",
    "opts": [
      "Generating radio frequencies",
      "Reverse polarity protection in DC control circuits",
      "Stepping up AC voltage",
      "Measuring high temperatures"
    ],
    "exp": "A series diode prevents current flow if a battery or DC supply is connected backwards.",
    "cat": "Diode",
    "id": "T08E_054"
  },
  {
    "q": "Which of these is a common standard voltage value for a Zener diode?",
    "a": "5.1V",
    "opts": [
      "220V",
      "440V",
      "5.1V",
      "0.7V"
    ],
    "exp": "Common Zener values include 3.3V, 4.7V, 5.1V, 12V, and 24V for control logic.",
    "cat": "Diode",
    "id": "T08E_055"
  },
  {
    "q": "What is the primary function of a Zener diode in a HART barrier?",
    "a": "To limit voltage to intrinsically safe levels in hazardous areas",
    "opts": [
      "To limit voltage to intrinsically safe levels in hazardous areas",
      "To amplify the HART signal",
      "To prevent ground loops",
      "To convert 4-20mA to digital"
    ],
    "exp": "Zener barriers clamp the voltage to ensure no sparks can ignite explosive atmospheres.",
    "cat": "Diode",
    "id": "T08E_056"
  },
  {
    "q": "What happens if the load current increases in a Zener voltage regulator?",
    "a": "Zener current decreases to compensate, maintaining output voltage",
    "opts": [
      "Zener current increases",
      "Zener current decreases to compensate, maintaining output voltage",
      "The Zener burns out",
      "Output voltage drops to zero"
    ],
    "exp": "The total current through the series resistor is constant; the Zener shunts less current so the load gets more.",
    "cat": "Diode",
    "id": "T08E_057"
  },
  {
    "q": "In a PN junction, what causes the built-in potential barrier?",
    "a": "Recombination of electrons and holes at the junction forming ions",
    "opts": [
      "Friction between layers",
      "Magnetic fields",
      "External batteries",
      "Recombination of electrons and holes at the junction forming ions"
    ],
    "exp": "Electrons and holes cancel each other at the border, leaving charged ions that form a barrier.",
    "cat": "Diode",
    "id": "T08E_058"
  },
  {
    "q": "What happens to diode reverse leakage current as temperature increases?",
    "a": "It increases significantly",
    "opts": [
      "It changes direction",
      "It increases significantly",
      "It drops to zero",
      "It remains completely constant"
    ],
    "exp": "Thermal energy generates more minority carriers, exponentially increasing leakage current.",
    "cat": "Diode",
    "id": "T08E_059"
  },
  {
    "q": "Why are silicon diodes preferred over germanium for marine power applications?",
    "a": "Silicon can withstand much higher temperatures and has lower leakage current",
    "opts": [
      "Silicon has a lower forward voltage drop",
      "Germanium is too heavy",
      "Germanium is highly radioactive",
      "Silicon can withstand much higher temperatures and has lower leakage current"
    ],
    "exp": "Silicon's thermal stability makes it vastly superior for power rectification.",
    "cat": "Diode",
    "id": "T08E_060"
  },
  {
    "q": "If a Zener diode rated for 12V is forward-biased, what voltage will drop across it?",
    "a": "0.6-0.7V",
    "opts": [
      "0V",
      "12V",
      "0.6-0.7V",
      "24V"
    ],
    "exp": "In forward bias, a Zener behaves exactly like a normal silicon diode.",
    "cat": "Diode",
    "id": "T08E_061"
  },
  {
    "q": "How many diodes are required for a simple half-wave rectifier?",
    "a": "1",
    "opts": [
      "2",
      "4",
      "6",
      "1"
    ],
    "exp": "A half-wave rectifier uses a single diode in series with the load.",
    "cat": "Rectifier",
    "id": "T08E_062"
  },
  {
    "q": "What is the ripple factor of a half-wave rectifier?",
    "a": "1.21 (121%)",
    "opts": [
      "0.482 (48.2%)",
      "1.21 (121%)",
      "0.10 (10%)",
      "0.042 (4.2%)"
    ],
    "exp": "Half-wave rectifiers produce very poor quality DC, with ripple exceeding the DC value.",
    "cat": "Rectifier",
    "id": "T08E_063"
  },
  {
    "q": "What is the theoretical maximum efficiency of a half-wave rectifier?",
    "a": "40.6%",
    "opts": [
      "95.4%",
      "99.9%",
      "81.2%",
      "40.6%"
    ],
    "exp": "It only uses one half of the AC cycle, resulting in very low conversion efficiency.",
    "cat": "Rectifier",
    "id": "T08E_064"
  },
  {
    "q": "What is the output frequency of a half-wave rectifier supplied by a 50Hz AC source?",
    "a": "50Hz",
    "opts": [
      "100Hz",
      "50Hz",
      "25Hz",
      "300Hz"
    ],
    "exp": "It produces one DC pulse for every full AC cycle, matching the supply frequency.",
    "cat": "Rectifier",
    "id": "T08E_065"
  },
  {
    "q": "How many diodes are required for a single-phase full-wave bridge rectifier?",
    "a": "4",
    "opts": [
      "8",
      "2",
      "6",
      "4"
    ],
    "exp": "A standard bridge rectifier uses 4 diodes to convert both half-cycles of AC.",
    "cat": "Rectifier",
    "id": "T08E_066"
  },
  {
    "q": "What is the output frequency of a single-phase full-wave bridge rectifier on a 50Hz supply?",
    "a": "100Hz",
    "opts": [
      "300Hz",
      "100Hz",
      "150Hz",
      "50Hz"
    ],
    "exp": "It produces two DC pulses per AC cycle, doubling the ripple frequency.",
    "cat": "Rectifier",
    "id": "T08E_067"
  },
  {
    "q": "What is the ripple factor of a full-wave bridge rectifier?",
    "a": "0.482 (48.2%)",
    "opts": [
      "0.001 (0.1%)",
      "0.042 (4.2%)",
      "0.482 (48.2%)",
      "1.21 (121%)"
    ],
    "exp": "Full-wave rectification significantly reduces the ripple compared to half-wave.",
    "cat": "Rectifier",
    "id": "T08E_068"
  },
  {
    "q": "How many diodes are used in a full-wave center-tap rectifier?",
    "a": "2",
    "opts": [
      "6",
      "2",
      "1",
      "4"
    ],
    "exp": "It uses 2 diodes but requires a bulky, expensive center-tapped transformer.",
    "cat": "Rectifier",
    "id": "T08E_069"
  },
  {
    "q": "What is the primary disadvantage of a full-wave center-tap rectifier compared to a bridge?",
    "a": "It requires a specialized center-tapped transformer",
    "opts": [
      "It requires 4 diodes",
      "It cannot be smoothed with capacitors",
      "It requires a specialized center-tapped transformer",
      "It has higher ripple"
    ],
    "exp": "The bridge rectifier eliminates the need for the heavy center-tapped transformer.",
    "cat": "Rectifier",
    "id": "T08E_070"
  },
  {
    "q": "How many diodes are in a 3-phase bridge rectifier?",
    "a": "6",
    "opts": [
      "3",
      "4",
      "6",
      "12"
    ],
    "exp": "A 3-phase bridge requires 6 diodes (2 per phase) to rectify all 3 phases fully.",
    "cat": "Rectifier",
    "id": "T08E_071"
  },
  {
    "q": "What is the output ripple frequency of a 3-phase bridge rectifier on a 50Hz supply?",
    "a": "300Hz",
    "opts": [
      "150Hz",
      "300Hz",
      "50Hz",
      "100Hz"
    ],
    "exp": "It produces 6 pulses per cycle (6 x 50Hz = 300Hz), creating very smooth DC.",
    "cat": "Rectifier",
    "id": "T08E_072"
  },
  {
    "q": "What is the ripple factor of a 3-phase bridge rectifier?",
    "a": "0.042 (4.2%)",
    "opts": [
      "0.10 (10%)",
      "0.042 (4.2%)",
      "1.21 (121%)",
      "0.482 (48.2%)"
    ],
    "exp": "The overlapping phases result in extremely low ripple (4.2%) before any filtering.",
    "cat": "Rectifier",
    "id": "T08E_073"
  },
  {
    "q": "Why is a 3-phase bridge rectifier preferred for the DC link in a VFD?",
    "a": "It produces very smooth DC, requiring a much smaller smoothing capacitor",
    "opts": [
      "It generates higher AC voltage",
      "It produces very smooth DC, requiring a much smaller smoothing capacitor",
      "It uses fewer diodes",
      "It isolates the motor from ground"
    ],
    "exp": "Low ripple (4.2%) means the VFD DC link capacitor can be smaller and run cooler.",
    "cat": "Rectifier",
    "id": "T08E_074"
  },
  {
    "q": "In a 4-diode bridge rectifier (D1, D2, D3, D4), which diodes conduct during the positive half cycle?",
    "a": "D1 and D3",
    "opts": [
      "D3 and D4",
      "D1 and D2",
      "D2 and D4",
      "D1 and D3"
    ],
    "exp": "A pair of diagonally opposite diodes (e.g., D1 & D3) conduct to route current through the load.",
    "cat": "Rectifier",
    "id": "T08E_075"
  },
  {
    "q": "In a 4-diode bridge rectifier, how does current flow through the load during the negative half cycle?",
    "a": "In the same direction as the positive half cycle",
    "opts": [
      "Current flows directly to ground",
      "In the same direction as the positive half cycle",
      "Current does not flow",
      "In the reverse direction"
    ],
    "exp": "The bridge arrangement ensures load current is always unidirectional (DC).",
    "cat": "Rectifier",
    "id": "T08E_076"
  },
  {
    "q": "What is the formula for calculating ripple factor?",
    "a": "RMS ripple voltage / Average DC output voltage",
    "opts": [
      "Average DC output / Peak AC input",
      "Supply frequency / Output frequency",
      "RMS ripple voltage / Average DC output voltage",
      "Peak voltage / RMS voltage"
    ],
    "exp": "Ripple factor measures the ratio of unwanted AC to the desired DC output.",
    "cat": "Rectifier",
    "id": "T08E_077"
  },
  {
    "q": "What component is most commonly used to smooth the output of a rectifier?",
    "a": "A large electrolytic capacitor in parallel with the load",
    "opts": [
      "A Zener diode in forward bias",
      "A large electrolytic capacitor in parallel with the load",
      "A transformer in parallel",
      "A resistor in series"
    ],
    "exp": "The capacitor charges to the peak voltage and slowly discharges, smoothing the ripple.",
    "cat": "Rectifier",
    "id": "T08E_078"
  },
  {
    "q": "What is the average DC output voltage of a single-phase full-wave rectifier (no filter)?",
    "a": "0.9 x Vrms",
    "opts": [
      "1.414 x Vrms",
      "2.0 x Vrms",
      "0.45 x Vrms",
      "0.9 x Vrms"
    ],
    "exp": "Average DC for full wave is (2 * Vpeak) / Pi, which equates to 0.9 * Vrms.",
    "cat": "Rectifier",
    "id": "T08E_079"
  },
  {
    "q": "What is the most common rectifier type used for shipboard battery chargers?",
    "a": "Single-phase full-wave bridge rectifier",
    "opts": [
      "Cycloconverter",
      "Class D amplifier",
      "Half-wave rectifier",
      "Single-phase full-wave bridge rectifier"
    ],
    "exp": "The bridge rectifier provides good efficiency (81.2%) without needing a center-tapped transformer.",
    "cat": "Rectifier",
    "id": "T08E_080"
  },
  {
    "q": "What happens if one diode fails short in a bridge rectifier?",
    "a": "It causes a direct AC short circuit on one half-cycle, blowing the fuse",
    "opts": [
      "Output becomes half-wave rectified",
      "The circuit continues working normally",
      "It causes a direct AC short circuit on one half-cycle, blowing the fuse",
      "Output voltage doubles"
    ],
    "exp": "A shorted diode bridges the AC line to the return path during its non-conducting cycle.",
    "cat": "Rectifier",
    "id": "T08E_081"
  },
  {
    "q": "What happens if one diode fails open in a full-wave bridge rectifier?",
    "a": "The circuit becomes a half-wave rectifier, increasing ripple drastically",
    "opts": [
      "Output voltage drops to zero",
      "Output frequency doubles",
      "The fuse blows immediately",
      "The circuit becomes a half-wave rectifier, increasing ripple drastically"
    ],
    "exp": "With one open diode, one half-cycle cannot conduct, dropping efficiency and tripling ripple.",
    "cat": "Rectifier",
    "id": "T08E_082"
  },
  {
    "q": "What does a lower ripple factor indicate?",
    "a": "Smoother DC output requiring less filtering",
    "opts": [
      "Lower rectifier efficiency",
      "Smoother DC output requiring less filtering",
      "Need for a larger transformer",
      "Higher AC interference"
    ],
    "exp": "A low ripple factor (like 4.2% for 3-phase) means the DC is almost pure straight from the diodes.",
    "cat": "Rectifier",
    "id": "T08E_083"
  },
  {
    "q": "Why is a half-wave rectifier rarely used for power applications on ships?",
    "a": "High ripple (121%) and low efficiency (40.6%)",
    "opts": [
      "It produces 300Hz interference",
      "It requires too many diodes",
      "It causes reverse polarity",
      "High ripple (121%) and low efficiency (40.6%)"
    ],
    "exp": "Half-wave throws away half the AC power and requires massive filtering.",
    "cat": "Rectifier",
    "id": "T08E_084"
  },
  {
    "q": "What defines the efficiency of a rectifier?",
    "a": "DC power output divided by AC power input",
    "opts": [
      "Ripple voltage divided by DC voltage",
      "DC power output divided by AC power input",
      "Peak voltage divided by RMS voltage",
      "AC power output divided by DC power input"
    ],
    "exp": "Rectifier efficiency measures how well it converts incoming AC watts to useful DC watts.",
    "cat": "Rectifier",
    "id": "T08E_085"
  },
  {
    "q": "What is the peak inverse voltage (PIV) rating requirement for a diode in a bridge rectifier?",
    "a": "Greater than the peak supply voltage (Vpeak)",
    "opts": [
      "Greater than the peak supply voltage (Vpeak)",
      "Half of Vrms",
      "Equal to average DC output",
      "Exactly 230V"
    ],
    "exp": "The non-conducting diodes must block the full peak voltage of the AC waveform.",
    "cat": "Rectifier",
    "id": "T08E_086"
  },
  {
    "q": "What is a 6-pulse rectifier?",
    "a": "Another name for a 3-phase bridge rectifier",
    "opts": [
      "Another name for a 3-phase bridge rectifier",
      "A cycloconverter",
      "A single-phase rectifier at 300Hz",
      "A bridge with 6 filter capacitors"
    ],
    "exp": "It produces 6 DC pulses per AC cycle.",
    "cat": "Rectifier",
    "id": "T08E_087"
  },
  {
    "q": "If a full wave bridge is supplied with 230V AC RMS, what is the approximate no-load peak voltage on the capacitor?",
    "a": "325V DC",
    "opts": [
      "325V DC",
      "460V DC",
      "207V DC",
      "230V DC"
    ],
    "exp": "The filter capacitor charges to the peak voltage: 230V x 1.414 = 325V DC.",
    "cat": "Rectifier",
    "id": "T08E_088"
  },
  {
    "q": "Why do large 3-phase rectifiers not need massive filter capacitors?",
    "a": "The 6 overlapping pulses create a naturally smooth DC wave with only 4.2% ripple",
    "opts": [
      "3-phase power has no peak voltage",
      "The 6 overlapping pulses create a naturally smooth DC wave with only 4.2% ripple",
      "They use inductors exclusively",
      "They operate at lower voltages"
    ],
    "exp": "The valleys between pulses are very shallow in 3-phase, minimizing the need for stored charge.",
    "cat": "Rectifier",
    "id": "T08E_089"
  },
  {
    "q": "What is the main drawback of using an inductor (choke) for filtering compared to a capacitor?",
    "a": "Inductors are heavy, bulky, and expensive",
    "opts": [
      "Inductors increase the ripple",
      "Inductors are heavy, bulky, and expensive",
      "Inductors cause short circuits",
      "Inductors block DC current"
    ],
    "exp": "While LC filters are highly effective, heavy iron-core inductors add significant weight and cost.",
    "cat": "Rectifier",
    "id": "T08E_090"
  },
  {
    "q": "How does a smoothing capacitor behave as load current increases?",
    "a": "The ripple voltage increases because the capacitor discharges faster",
    "opts": [
      "The capacitor stops charging",
      "The ripple voltage increases because the capacitor discharges faster",
      "The DC output voltage rises",
      "The ripple voltage decreases"
    ],
    "exp": "A heavier load drains the capacitor more quickly between AC pulses, deepening the ripple valleys.",
    "cat": "Rectifier",
    "id": "T08E_091"
  },
  {
    "q": "What are the three terminals of a Bipolar Junction Transistor (BJT)?",
    "a": "Base, Collector, Emitter",
    "opts": [
      "Emitter, Receiver, Ground",
      "Base, Collector, Emitter",
      "Gate, Drain, Source",
      "Anode, Cathode, Gate"
    ],
    "exp": "A BJT has three layers forming Base, Collector, and Emitter terminals.",
    "cat": "Transistor",
    "id": "T08E_092"
  },
  {
    "q": "How is a BJT controlled?",
    "a": "It is current-controlled (Base current controls Collector current)",
    "opts": [
      "Frequency-controlled",
      "Temperature-controlled",
      "It is current-controlled (Base current controls Collector current)",
      "Voltage-controlled"
    ],
    "exp": "A small Base current (IB) allows a large Collector current (IC) to flow.",
    "cat": "Transistor",
    "id": "T08E_093"
  },
  {
    "q": "What is the basic current equation for a BJT in the active region?",
    "a": "IC = hFE x IB",
    "opts": [
      "IE = IC / hFE",
      "IC = hFE x IB",
      "IC = VBE x IB",
      "IB = IC x IE"
    ],
    "exp": "Collector current is the Base current multiplied by the transistor's current gain (hFE).",
    "cat": "Transistor",
    "id": "T08E_094"
  },
  {
    "q": "In which region does a BJT act as an OPEN switch?",
    "a": "Cutoff region",
    "opts": [
      "Breakdown region",
      "Cutoff region",
      "Saturation region",
      "Active region"
    ],
    "exp": "When VBE is less than 0.6V, no base current flows, and the transistor is OFF (Cutoff).",
    "cat": "Transistor",
    "id": "T08E_095"
  },
  {
    "q": "In which region does a BJT act as an AMPLIFIER?",
    "a": "Active region",
    "opts": [
      "Ohmic region",
      "Saturation region",
      "Cutoff region",
      "Active region"
    ],
    "exp": "In the active region, IC is directly proportional to IB, allowing linear amplification.",
    "cat": "Transistor",
    "id": "T08E_096"
  },
  {
    "q": "In which region does a BJT act as a CLOSED switch?",
    "a": "Saturation region",
    "opts": [
      "Saturation region",
      "Active region",
      "Linear region",
      "Cutoff region"
    ],
    "exp": "When overdriven, VCE drops to ~0.2V and maximum current flows, acting as a closed switch.",
    "cat": "Transistor",
    "id": "T08E_097"
  },
  {
    "q": "What are the two structural types of BJTs?",
    "a": "NPN and PNP",
    "opts": [
      "NPN and PNP",
      "SCR and TRIAC",
      "JFET and MOSFET",
      "N-channel and P-channel"
    ],
    "exp": "BJTs are formed by sandwiching semiconductor layers: N-P-N or P-N-P.",
    "cat": "Transistor",
    "id": "T08E_098"
  },
  {
    "q": "When testing an NPN transistor with a multimeter, what should the Base-to-Emitter (B-E) junction read (Red on Base)?",
    "a": "0.5-0.7V",
    "opts": [
      "1.2-1.5V",
      "0V",
      "0.5-0.7V",
      "OL"
    ],
    "exp": "The B-E junction behaves like a forward-biased silicon diode.",
    "cat": "Transistor",
    "id": "T08E_099"
  },
  {
    "q": "When testing a healthy BJT, what should the Collector-to-Emitter (C-E) path read on a multimeter?",
    "a": "OL (Open Loop)",
    "opts": [
      "OL (Open Loop)",
      "0V",
      "1.2V",
      "0.6V"
    ],
    "exp": "Without base current, the C-E path blocks current entirely.",
    "cat": "Transistor",
    "id": "T08E_100"
  },
  {
    "q": "What does the hFE setting on a multimeter measure?",
    "a": "DC current gain of a BJT",
    "opts": [
      "Forward voltage drop",
      "Gate capacitance",
      "DC current gain of a BJT",
      "Leakage current"
    ],
    "exp": "hFE represents the ratio of Collector current to Base current.",
    "cat": "Transistor",
    "id": "T08E_101"
  },
  {
    "q": "What are the three terminals of a MOSFET?",
    "a": "Gate, Drain, Source",
    "opts": [
      "Input, Output, Ground",
      "Anode, Cathode, Gate",
      "Base, Collector, Emitter",
      "Gate, Drain, Source"
    ],
    "exp": "MOSFETs have Gate, Drain, and Source terminals.",
    "cat": "Transistor",
    "id": "T08E_102"
  },
  {
    "q": "How is a MOSFET controlled?",
    "a": "It is voltage-controlled (Gate voltage controls Drain current)",
    "opts": [
      "Light-controlled",
      "Current-controlled",
      "Resistance-controlled",
      "It is voltage-controlled (Gate voltage controls Drain current)"
    ],
    "exp": "Applying voltage to the insulated Gate creates an electric field that forms a conductive channel.",
    "cat": "Transistor",
    "id": "T08E_103"
  },
  {
    "q": "What is the typical steady-state Gate current of a MOSFET?",
    "a": "Zero (extremely high input impedance)",
    "opts": [
      "Proportional to hFE",
      "Zero (extremely high input impedance)",
      "1-2 Amps",
      "Equal to Drain current"
    ],
    "exp": "The Gate is insulated by an oxide layer, so no steady DC current flows into it.",
    "cat": "Transistor",
    "id": "T08E_104"
  },
  {
    "q": "What must occur for an N-channel enhancement MOSFET to turn ON?",
    "a": "Gate-to-Source voltage (VGS) must exceed the threshold voltage (typically 2-4V)",
    "opts": [
      "Drain must be connected to Source",
      "VGS must be negative",
      "Base current must exceed 1A",
      "Gate-to-Source voltage (VGS) must exceed the threshold voltage (typically 2-4V)"
    ],
    "exp": "Exceeding the threshold voltage forms the N-channel, allowing current to flow.",
    "cat": "Transistor",
    "id": "T08E_105"
  },
  {
    "q": "What is a major advantage of a MOSFET over a BJT in power circuits?",
    "a": "Much faster switching speeds and no continuous gate current loading",
    "opts": [
      "It requires large base currents",
      "Higher voltage capacity",
      "It is totally immune to static electricity",
      "Much faster switching speeds and no continuous gate current loading"
    ],
    "exp": "MOSFETs switch in nanoseconds and don't load the driver circuit continuously.",
    "cat": "Transistor",
    "id": "T08E_106"
  },
  {
    "q": "Which transistor type is preferred for high-frequency SMPS (Switch Mode Power Supplies)?",
    "a": "MOSFET",
    "opts": [
      "BJT",
      "TRIAC",
      "MOSFET",
      "Thyristor (SCR)"
    ],
    "exp": "MOSFETs can easily switch at 100kHz-1MHz, ideal for compact SMPS transformers.",
    "cat": "Transistor",
    "id": "T08E_107"
  },
  {
    "q": "What fatal failure mode affects BJTs but NOT MOSFETs?",
    "a": "Secondary breakdown (thermal runaway in hot spots)",
    "opts": [
      "Vibration failure",
      "Static discharge",
      "Overvoltage breakdown",
      "Secondary breakdown (thermal runaway in hot spots)"
    ],
    "exp": "BJTs have a negative temperature coefficient causing hot spots to draw more current and melt.",
    "cat": "Transistor",
    "id": "T08E_108"
  },
  {
    "q": "Why are MOSFETs easy to connect in parallel for high current applications?",
    "a": "They have a positive temperature coefficient (RDS(on) rises with heat), ensuring natural current sharing",
    "opts": [
      "They have identical hFE",
      "They draw zero voltage",
      "They have a positive temperature coefficient (RDS(on) rises with heat), ensuring natural current sharing",
      "They don't need heatsinks"
    ],
    "exp": "If one MOSFET gets hotter, its resistance increases, forcing current to the cooler parallel MOSFETs.",
    "cat": "Transistor",
    "id": "T08E_109"
  },
  {
    "q": "How is a BJT turned OFF?",
    "a": "By removing the base current",
    "opts": [
      "By removing the base current",
      "By shorting Collector to Base",
      "By waiting for AC zero crossing",
      "By applying a massive gate voltage"
    ],
    "exp": "Without base current, the BJT reverts to the Cutoff region.",
    "cat": "Transistor",
    "id": "T08E_110"
  },
  {
    "q": "How is a MOSFET turned OFF?",
    "a": "By removing the gate voltage (discharging the gate capacitance)",
    "opts": [
      "By waiting for natural commutation",
      "By removing the gate voltage (discharging the gate capacitance)",
      "By applying base current",
      "By heating the device"
    ],
    "exp": "Dropping VGS below the threshold collapses the channel, stopping current.",
    "cat": "Transistor",
    "id": "T08E_111"
  },
  {
    "q": "What isolates the Gate from the conductive channel in a MOSFET?",
    "a": "A thin layer of silicon dioxide (metal-oxide)",
    "opts": [
      "A vacuum gap",
      "A P-N junction",
      "A thin layer of silicon dioxide (metal-oxide)",
      "A rubber gasket"
    ],
    "exp": "This ultra-thin insulating oxide layer gives the MOSFET its high input impedance.",
    "cat": "Transistor",
    "id": "T08E_112"
  },
  {
    "q": "What is the primary drawback of the thin oxide layer in a MOSFET?",
    "a": "Extremely sensitive to destruction by static electricity (ESD)",
    "opts": [
      "It melts at room temperature",
      "It rusts in marine environments",
      "It conducts AC current",
      "Extremely sensitive to destruction by static electricity (ESD)"
    ],
    "exp": "Static charge easily punctures the microscopic oxide layer, destroying the component.",
    "cat": "Transistor",
    "id": "T08E_113"
  },
  {
    "q": "Where are BJTs most commonly used on modern ships?",
    "a": "Low-power switching, relay drivers, and linear amplifier circuits",
    "opts": [
      "3-phase rectifiers",
      "Low-power switching, relay drivers, and linear amplifier circuits",
      "Main propulsion VFDs",
      "High frequency radar transmitters"
    ],
    "exp": "BJTs are robust for small logic switching and driving 24V relay coils.",
    "cat": "Transistor",
    "id": "T08E_114"
  },
  {
    "q": "If a transistor reads 0V across all junctions (B-E, B-C, C-E), what is its condition?",
    "a": "Completely shorted (destroyed)",
    "opts": [
      "Completely shorted (destroyed)",
      "Open circuit",
      "Fully healthy",
      "In active mode"
    ],
    "exp": "0V indicates a dead short; the semiconductor layers have melted together.",
    "cat": "Transistor",
    "id": "T08E_115"
  },
  {
    "q": "What does RDS(on) refer to in a MOSFET spec sheet?",
    "a": "Resistance between Drain and Source when fully turned ON",
    "opts": [
      "Rated DC Supply",
      "Rapid Drain Switching",
      "Reverse Diode Surge",
      "Resistance between Drain and Source when fully turned ON"
    ],
    "exp": "A lower RDS(on) means less power lost as heat when the MOSFET is conducting.",
    "cat": "Transistor",
    "id": "T08E_116"
  },
  {
    "q": "Why is the BJT called a 'Bipolar' device?",
    "a": "Because both electrons and holes participate in current conduction",
    "opts": [
      "Because both electrons and holes participate in current conduction",
      "Because it can be NPN or PNP",
      "Because it has two poles",
      "Because it uses AC power"
    ],
    "exp": "Current flows via majority and minority carriers (two polarities of charge).",
    "cat": "Transistor",
    "id": "T08E_117"
  },
  {
    "q": "Why is a MOSFET called a 'Unipolar' device?",
    "a": "Because only majority carriers (either electrons OR holes) conduct current",
    "opts": [
      "Because only majority carriers (either electrons OR holes) conduct current",
      "Because it has one terminal",
      "Because it cannot amplify",
      "Because it only uses positive voltage"
    ],
    "exp": "An N-channel uses only electrons; a P-channel uses only holes.",
    "cat": "Transistor",
    "id": "T08E_118"
  },
  {
    "q": "What is the function of a driver circuit connected to a large BJT?",
    "a": "To supply the necessary continuous base current",
    "opts": [
      "To increase the voltage limit",
      "To prevent static shock",
      "To supply the necessary continuous base current",
      "To cool the BJT"
    ],
    "exp": "Large BJTs require significant base current, which microcontrollers cannot provide directly.",
    "cat": "Transistor",
    "id": "T08E_119"
  },
  {
    "q": "What is the function of a driver circuit connected to a MOSFET?",
    "a": "To rapidly charge and discharge the gate capacitance for fast switching",
    "opts": [
      "To rapidly charge and discharge the gate capacitance for fast switching",
      "To provide continuous gate current",
      "To measure the drain voltage",
      "To convert AC to DC"
    ],
    "exp": "Though steady current is zero, the gate acts like a capacitor requiring high current spikes to switch quickly.",
    "cat": "Transistor",
    "id": "T08E_120"
  },
  {
    "q": "What is the typical voltage drop (VCE) of a BJT in deep saturation?",
    "a": "Approximately 0.2V",
    "opts": [
      "Approximately 0.2V",
      "5V",
      "0.7V",
      "0V"
    ],
    "exp": "When fully saturated, a BJT drops about 0.2V, dissipating minimal heat.",
    "cat": "Transistor",
    "id": "T08E_121"
  },
  {
    "q": "What does SCR stand for?",
    "a": "Silicon Controlled Rectifier",
    "opts": [
      "Static Capacitor Relay",
      "Synchronous Current Regulator",
      "Source Commutated Resistor",
      "Silicon Controlled Rectifier"
    ],
    "exp": "SCR is the common industrial name for a Thyristor.",
    "cat": "Thyristor",
    "id": "T08E_122"
  },
  {
    "q": "How many semiconductor layers does a Thyristor have?",
    "a": "4 layers (PNPN)",
    "opts": [
      "3 layers (NPN)",
      "4 layers (PNPN)",
      "5 layers",
      "2 layers (PN)"
    ],
    "exp": "A Thyristor is a four-layer device forming three internal junctions.",
    "cat": "Thyristor",
    "id": "T08E_123"
  },
  {
    "q": "What are the three terminals of a Thyristor?",
    "a": "Anode, Cathode, Gate",
    "opts": [
      "Gate, Drain, Source",
      "Input, Output, Commutator",
      "Anode, Cathode, Gate",
      "Base, Collector, Emitter"
    ],
    "exp": "Current flows Anode to Cathode, controlled by the Gate.",
    "cat": "Thyristor",
    "id": "T08E_124"
  },
  {
    "q": "What happens when a forward-biased Thyristor receives a short positive gate pulse?",
    "a": "It fires (turns ON) and begins conducting",
    "opts": [
      "It burns out",
      "It fires (turns ON) and begins conducting",
      "It blocks current completely",
      "It reverses polarity"
    ],
    "exp": "The gate pulse triggers avalanche breakdown of the middle junction, turning it ON.",
    "cat": "Thyristor",
    "id": "T08E_125"
  },
  {
    "q": "What is 'latching' in a Thyristor?",
    "a": "The Thyristor stays ON even after the gate pulse is removed",
    "opts": [
      "The Anode and Cathode weld together",
      "The gate physically locks in place",
      "It locks out external voltages",
      "The Thyristor stays ON even after the gate pulse is removed"
    ],
    "exp": "Once triggered, the gate loses control; the SCR self-sustains conduction.",
    "cat": "Thyristor",
    "id": "T08E_126"
  },
  {
    "q": "What must happen for a Thyristor to turn OFF?",
    "a": "Anode current must drop below the holding current (IH)",
    "opts": [
      "The temperature must drop",
      "Anode current must drop below the holding current (IH)",
      "Gate voltage must exceed 15V",
      "A negative gate pulse must be applied"
    ],
    "exp": "The only way to turn off a standard SCR is to interrupt or reduce the main current flow.",
    "cat": "Thyristor",
    "id": "T08E_127"
  },
  {
    "q": "What is 'Natural Commutation' of a Thyristor?",
    "a": "The Thyristor turns off automatically when AC supply voltage crosses zero",
    "opts": [
      "Turning it off manually",
      "Cooling it with forced air",
      "Using a capacitor to force it off",
      "The Thyristor turns off automatically when AC supply voltage crosses zero"
    ],
    "exp": "In AC circuits, the current naturally falls to zero twice per cycle, turning the SCR off.",
    "cat": "Thyristor",
    "id": "T08E_128"
  },
  {
    "q": "Why is 'Forced Commutation' required when using Thyristors in DC circuits?",
    "a": "DC current never naturally crosses zero, so external circuits must force the current below IH",
    "opts": [
      "DC circuits have no ground",
      "To increase switching speed",
      "DC current is too high",
      "DC current never naturally crosses zero, so external circuits must force the current below IH"
    ],
    "exp": "Complex capacitor/inductor circuits are needed to momentarily reverse-bias the SCR in DC systems.",
    "cat": "Thyristor",
    "id": "T08E_129"
  },
  {
    "q": "What is the 'firing angle' (alpha) in a Thyristor circuit?",
    "a": "The angle in the AC cycle at which the gate pulse triggers the Thyristor",
    "opts": [
      "The angle in the AC cycle at which the gate pulse triggers the Thyristor",
      "The physical mounting angle on the heatsink",
      "The phase shift between voltage and current",
      "The temperature at which it burns"
    ],
    "exp": "Delaying the gate pulse (increasing alpha) reduces the portion of the AC wave that is conducted.",
    "cat": "Thyristor",
    "id": "T08E_130"
  },
  {
    "q": "If the firing angle (alpha) is 0 degrees, what is the output?",
    "a": "Maximum output (conducts the full half-cycle)",
    "opts": [
      "Maximum output (conducts the full half-cycle)",
      "Half output",
      "Reverse output",
      "Zero output"
    ],
    "exp": "Firing at 0 degrees acts like a standard diode, passing the entire positive wave.",
    "cat": "Thyristor",
    "id": "T08E_131"
  },
  {
    "q": "If the firing angle (alpha) is 180 degrees, what is the output?",
    "a": "Minimum/Zero output (does not conduct)",
    "opts": [
      "Minimum/Zero output (does not conduct)",
      "Maximum output",
      "Half output",
      "Constant DC"
    ],
    "exp": "Firing at the end of the wave means no voltage is passed to the load.",
    "cat": "Thyristor",
    "id": "T08E_132"
  },
  {
    "q": "What is 'Phase Control' using Thyristors?",
    "a": "Varying the firing angle (alpha) to smoothly control average output power",
    "opts": [
      "Changing 3-phase to single-phase",
      "Matching grid frequency",
      "Correcting power factor",
      "Varying the firing angle (alpha) to smoothly control average output power"
    ],
    "exp": "This is how soft starters, light dimmers, and controlled chargers regulate power.",
    "cat": "Thyristor",
    "id": "T08E_133"
  },
  {
    "q": "How does a soft starter use Thyristors to start a motor smoothly?",
    "a": "It decreases the firing angle from 180 to 0 degrees, smoothly ramping up voltage",
    "opts": [
      "It switches between 50Hz and 60Hz",
      "It drops voltage across internal resistors",
      "It converts AC to DC",
      "It decreases the firing angle from 180 to 0 degrees, smoothly ramping up voltage"
    ],
    "exp": "Gradually advancing the firing point increases RMS voltage and motor torque slowly.",
    "cat": "Thyristor",
    "id": "T08E_134"
  },
  {
    "q": "How is a Thyristor used in a ship's Automatic Voltage Regulator (AVR)?",
    "a": "It controls the amount of DC current supplied to the alternator exciter field",
    "opts": [
      "It controls the amount of DC current supplied to the alternator exciter field",
      "It converts mechanical energy to electrical",
      "It protects against reverse power",
      "It measures the main bus frequency"
    ],
    "exp": "The AVR adjusts the SCR firing angle to raise or lower field excitation.",
    "cat": "Thyristor",
    "id": "T08E_135"
  },
  {
    "q": "Why are Thyristors rarely used for the inverter stage (DC to AC) of modern VFDs?",
    "a": "Because they latch ON in DC circuits and require bulky, complex forced commutation circuits to turn OFF",
    "opts": [
      "They are too fast",
      "They overheat too quickly",
      "They cannot handle high voltages",
      "Because they latch ON in DC circuits and require bulky, complex forced commutation circuits to turn OFF"
    ],
    "exp": "IGBTs are preferred for VFD inverters because they turn off simply by removing gate voltage.",
    "cat": "Thyristor",
    "id": "T08E_136"
  },
  {
    "q": "Can a Thyristor block reverse voltage?",
    "a": "Yes, it blocks reverse voltage similar to a normal diode",
    "opts": [
      "No, it conducts in reverse",
      "Yes, it blocks reverse voltage similar to a normal diode",
      "Only if the gate is pulsed negatively",
      "Only at high frequencies"
    ],
    "exp": "An SCR blocks in the reverse direction and blocks in the forward direction until triggered.",
    "cat": "Thyristor",
    "id": "T08E_137"
  },
  {
    "q": "What is the switching speed capability of a Thyristor compared to an IGBT?",
    "a": "Thyristors are much slower (line frequency 50/60Hz), while IGBTs switch at high frequencies (up to 20kHz)",
    "opts": [
      "They are exactly the same",
      "Thyristors switch at MHz frequencies",
      "Thyristors are much faster",
      "Thyristors are much slower (line frequency 50/60Hz), while IGBTs switch at high frequencies (up to 20kHz)"
    ],
    "exp": "SCRs are designed for robust, low-frequency phase control, not high-speed PWM.",
    "cat": "Thyristor",
    "id": "T08E_138"
  },
  {
    "q": "How are Thyristors used in large electric heating controls?",
    "a": "They pulse power to heating elements by adjusting the conduction angle",
    "opts": [
      "They generate microwave frequencies",
      "They cool the elements",
      "They convert heat back to electricity",
      "They pulse power to heating elements by adjusting the conduction angle"
    ],
    "exp": "Solid-state relays using SCRs/TRIACs control heater power without mechanical wear.",
    "cat": "Thyristor",
    "id": "T08E_139"
  },
  {
    "q": "What is a 'controlled rectifier'?",
    "a": "A rectifier circuit using Thyristors instead of diodes to control the average DC output voltage",
    "opts": [
      "A diode bridge with a fan",
      "A rectifier with a manual switch",
      "A rectifier circuit using Thyristors instead of diodes to control the average DC output voltage",
      "A rectifier that produces pure AC"
    ],
    "exp": "By delaying the firing angle, the DC output voltage of the rectifier can be precisely adjusted.",
    "cat": "Thyristor",
    "id": "T08E_140"
  },
  {
    "q": "In a back-to-back Thyristor configuration (like a soft starter), why are two SCRs needed per phase?",
    "a": "Because one SCR handles the positive half-cycle and the other handles the negative half-cycle",
    "opts": [
      "To provide forced commutation",
      "To double the voltage rating",
      "Because one SCR handles the positive half-cycle and the other handles the negative half-cycle",
      "For redundancy in case one fails"
    ],
    "exp": "An SCR only conducts in one direction, so anti-parallel pairs control full AC waves.",
    "cat": "Thyristor",
    "id": "T08E_141"
  },
  {
    "q": "What is the Holding Current (IH) of a Thyristor?",
    "a": "The minimum anode current required to maintain conduction once the gate pulse is removed",
    "opts": [
      "The minimum anode current required to maintain conduction once the gate pulse is removed",
      "The leakage current in reverse bias",
      "The current required at the gate",
      "The maximum current before burnout"
    ],
    "exp": "If current dips below IH even for a microsecond, the SCR stops conducting.",
    "cat": "Thyristor",
    "id": "T08E_142"
  },
  {
    "q": "Can a Thyristor be triggered ON by means other than a gate pulse?",
    "a": "Yes, by exceeding its forward breakover voltage or by a rapid rate of voltage rise (dv/dt)",
    "opts": [
      "Yes, by exceeding its forward breakover voltage or by a rapid rate of voltage rise (dv/dt)",
      "Yes, by removing the anode connection",
      "Yes, by dropping the temperature",
      "No, strictly by gate pulse only"
    ],
    "exp": "Unwanted triggering can occur from voltage spikes (dv/dt), necessitating snubber circuits.",
    "cat": "Thyristor",
    "id": "T08E_143"
  },
  {
    "q": "What is the purpose of a snubber circuit across a Thyristor?",
    "a": "To protect against high dv/dt (rapid voltage rise) that could falsely trigger the SCR",
    "opts": [
      "To protect against high dv/dt (rapid voltage rise) that could falsely trigger the SCR",
      "To amplify the gate pulse",
      "To increase firing speed",
      "To reduce the holding current"
    ],
    "exp": "An RC snubber absorbs voltage spikes, preventing accidental breakdown triggering.",
    "cat": "Thyristor",
    "id": "T08E_144"
  },
  {
    "q": "If an SCR is used in a DC motor drive, what parameter does it control?",
    "a": "It controls the average armature voltage, thereby controlling motor speed",
    "opts": [
      "It reverses the magnetic field directly",
      "It controls the average armature voltage, thereby controlling motor speed",
      "It controls the number of poles",
      "It controls the motor frequency"
    ],
    "exp": "Older DC drives use controlled rectifiers to vary DC voltage to the armature.",
    "cat": "Thyristor",
    "id": "T08E_145"
  },
  {
    "q": "What is the fundamental difference between an SCR and a TRIAC?",
    "a": "An SCR conducts in one direction; a TRIAC conducts in both directions",
    "opts": [
      "There is no difference",
      "An SCR is voltage controlled; a TRIAC is current controlled",
      "An SCR is faster than a TRIAC",
      "An SCR conducts in one direction; a TRIAC conducts in both directions"
    ],
    "exp": "A TRIAC is essentially two anti-parallel SCRs with a common gate, used for simple AC control.",
    "cat": "Thyristor",
    "id": "T08E_146"
  },
  {
    "q": "Why is the SCR preferred over the TRIAC for heavy industrial marine loads?",
    "a": "SCRs handle much higher currents and voltages more reliably than TRIACs",
    "opts": [
      "SCRs are bi-directional",
      "SCRs do not need a heatsink",
      "TRIACs are illegal on ships",
      "SCRs handle much higher currents and voltages more reliably than TRIACs"
    ],
    "exp": "For large MW loads (soft starters, large heaters), rugged anti-parallel SCRs are always used.",
    "cat": "Thyristor",
    "id": "T08E_147"
  },
  {
    "q": "What happens if a continuous DC voltage is applied to an SCR gate instead of a pulse?",
    "a": "It turns ON normally, but it wastes gate power and generates unnecessary heat",
    "opts": [
      "It will not turn ON",
      "It turns ON normally, but it wastes gate power and generates unnecessary heat",
      "It oscillates ON and OFF",
      "It forces commutation"
    ],
    "exp": "A short pulse is sufficient to latch it; continuous gate drive is inefficient but works.",
    "cat": "Thyristor",
    "id": "T08E_148"
  },
  {
    "q": "In a fully controlled 3-phase bridge rectifier, how many Thyristors are used?",
    "a": "6 Thyristors",
    "opts": [
      "4 Thyristors",
      "12 Thyristors",
      "6 Thyristors",
      "3 Thyristors"
    ],
    "exp": "Replacing all 6 diodes with SCRs creates a fully controllable DC output.",
    "cat": "Thyristor",
    "id": "T08E_149"
  },
  {
    "q": "What is a 'semi-controlled' bridge rectifier?",
    "a": "A bridge using half Thyristors and half standard diodes",
    "opts": [
      "A bridge controlled by relays",
      "A bridge that only works at 50Hz",
      "A bridge using half Thyristors and half standard diodes",
      "A bridge with 2 diodes"
    ],
    "exp": "Uses 3 SCRs and 3 Diodes. Cheaper, but provides less control and no regenerative ability.",
    "cat": "Thyristor",
    "id": "T08E_150"
  },
  {
    "q": "What role does an SCR play in a marine battery charger?",
    "a": "It acts as a controlled rectifier to regulate the charging current based on battery state",
    "opts": [
      "It acts as a controlled rectifier to regulate the charging current based on battery state",
      "It converts the battery DC back to AC",
      "It measures the specific gravity",
      "It prevents hydrogen gas buildup"
    ],
    "exp": "The charger logic adjusts alpha to taper the current as the battery reaches full charge.",
    "cat": "Thyristor",
    "id": "T08E_151"
  },
  {
    "q": "What does IGBT stand for?",
    "a": "Insulated Gate Bipolar Transistor",
    "opts": [
      "Isolated Ground Bi-directional Terminal",
      "Internal Grid Base Transistor",
      "Integrated Gate Bipolar Thyristor",
      "Insulated Gate Bipolar Transistor"
    ],
    "exp": "The IGBT combines the insulated gate of a MOSFET with the bipolar conduction of a BJT.",
    "cat": "IGBT",
    "id": "T08E_152"
  },
  {
    "q": "What are the two key characteristics that an IGBT combines?",
    "a": "MOSFET voltage-controlled input and BJT high-current, low-loss output",
    "opts": [
      "Thyristor latching and Diode blocking",
      "MOSFET voltage-controlled input and BJT high-current, low-loss output",
      "BJT current control and MOSFET high resistance",
      "Zener regulation and TRIAC AC switching"
    ],
    "exp": "It provides easy gate drive (no current) and massive power handling capabilities.",
    "cat": "IGBT",
    "id": "T08E_153"
  },
  {
    "q": "What are the three terminals of an IGBT?",
    "a": "Gate, Collector, Emitter",
    "opts": [
      "Gate, Drain, Source",
      "Base, Collector, Emitter",
      "Anode, Cathode, Gate",
      "Gate, Collector, Emitter"
    ],
    "exp": "It uses Gate (like MOSFET) for input, and Collector/Emitter (like BJT) for the main power path.",
    "cat": "IGBT",
    "id": "T08E_154"
  },
  {
    "q": "How is an IGBT turned ON?",
    "a": "By applying a positive voltage (typically +15V) to the Gate relative to the Emitter",
    "opts": [
      "By a short positive pulse that latches it",
      "By exceeding breakover voltage",
      "By injecting current into the Base",
      "By applying a positive voltage (typically +15V) to the Gate relative to the Emitter"
    ],
    "exp": "Like a MOSFET, it requires a solid voltage above its threshold (usually driven to 15V for full ON).",
    "cat": "IGBT",
    "id": "T08E_155"
  },
  {
    "q": "How is an IGBT turned OFF?",
    "a": "By removing the Gate voltage (or applying a negative voltage)",
    "opts": [
      "By reducing Collector current below holding current",
      "By shorting Collector to Emitter",
      "By removing the Gate voltage (or applying a negative voltage)",
      "By waiting for AC zero crossing"
    ],
    "exp": "Unlike an SCR, the IGBT turns off immediately when the gate command is removed.",
    "cat": "IGBT",
    "id": "T08E_156"
  },
  {
    "q": "Why has the IGBT replaced the Thyristor in modern VFD (Variable Frequency Drive) inverters?",
    "a": "IGBTs can be turned off by the gate without forced commutation circuits and switch much faster",
    "opts": [
      "IGBTs can be turned off by the gate without forced commutation circuits and switch much faster",
      "IGBTs can handle higher voltages than SCRs",
      "IGBTs are cheaper",
      "IGBTs don't require heatsinks"
    ],
    "exp": "Gate-controlled turn-off and 20kHz switching make IGBTs perfect for DC-to-AC PWM inversion.",
    "cat": "IGBT",
    "id": "T08E_157"
  },
  {
    "q": "What is the typical switching frequency range of an IGBT in a marine VFD?",
    "a": "2 kHz to 20 kHz",
    "opts": [
      "50 to 60 Hz",
      "100 to 500 Hz",
      "1 MHz to 5 MHz",
      "2 kHz to 20 kHz"
    ],
    "exp": "High-frequency switching generates the precise PWM waveform needed for smooth motor control.",
    "cat": "IGBT",
    "id": "T08E_158"
  },
  {
    "q": "How does high-frequency IGBT switching (e.g., 10 kHz) benefit the physical motor?",
    "a": "It creates a smoother sine wave current and reduces acoustic motor noise (whine)",
    "opts": [
      "It creates a smoother sine wave current and reduces acoustic motor noise (whine)",
      "It prevents bearing currents",
      "It increases motor torque by 50%",
      "It removes the need for motor cooling"
    ],
    "exp": "Higher switching frequencies push acoustic noise above human hearing and smooth torque ripple.",
    "cat": "IGBT",
    "id": "T08E_159"
  },
  {
    "q": "How many IGBTs are required in the inverter stage of a standard 3-phase VFD?",
    "a": "6",
    "opts": [
      "12",
      "3",
      "6",
      "4"
    ],
    "exp": "Six IGBTs (two for each phase) switch the positive and negative DC bus to create 3-phase AC.",
    "cat": "IGBT",
    "id": "T08E_160"
  },
  {
    "q": "What is the typical 'ON-state' voltage drop (VCEsat) of a large IGBT?",
    "a": "1.5V to 3.0V",
    "opts": [
      "10V to 15V",
      "0.6V to 0.7V",
      "1.5V to 3.0V",
      "0.1V to 0.2V"
    ],
    "exp": "While low for high voltage devices, this 2-3V drop at high current generates significant heat.",
    "cat": "IGBT",
    "id": "T08E_161"
  },
  {
    "q": "What is the function of the isolated gate driver circuit connected to an IGBT?",
    "a": "To safely translate the 5V logic control signal into the +15V/-8V power needed to drive the IGBT gate",
    "opts": [
      "To safely translate the 5V logic control signal into the +15V/-8V power needed to drive the IGBT gate",
      "To measure the motor speed",
      "To cool the IGBT",
      "To convert AC to DC"
    ],
    "exp": "Gate drivers provide electrical isolation and the high peak currents needed to switch the gate capacitance.",
    "cat": "IGBT",
    "id": "T08E_162"
  },
  {
    "q": "Why do gate drivers often apply a NEGATIVE voltage (e.g., -8V) to turn an IGBT OFF?",
    "a": "To prevent false turn-on caused by 'Miller capacitance' during high dv/dt switching events",
    "opts": [
      "To reverse the motor direction",
      "To save energy",
      "To cool the junction",
      "To prevent false turn-on caused by 'Miller capacitance' during high dv/dt switching events"
    ],
    "exp": "Rapid voltage changes on the Collector can inject current into the Gate; a negative bias keeps it firmly OFF.",
    "cat": "IGBT",
    "id": "T08E_163"
  },
  {
    "q": "What is 'desaturation protection' in an IGBT circuit?",
    "a": "A circuit that detects a short circuit by sensing if VCE rises abnormally high while the IGBT is commanded ON",
    "opts": [
      "A temperature sensor",
      "An over-voltage clamp",
      "A circuit that detects a short circuit by sensing if VCE rises abnormally high while the IGBT is commanded ON",
      "A circuit preventing moisture buildup"
    ],
    "exp": "If shorted, the IGBT pulls out of saturation (VCE rises rapidly). The driver detects this and safely turns it off.",
    "cat": "IGBT",
    "id": "T08E_164"
  },
  {
    "q": "How long can an IGBT typically withstand a direct short circuit before self-destructing?",
    "a": "Approximately 10 microseconds",
    "opts": [
      "1 second",
      "10 microseconds",
      "10 milliseconds",
      "5 minutes"
    ],
    "exp": "Short circuits generate massive heat instantly; hardware desat protection must act in microseconds.",
    "cat": "IGBT",
    "id": "T08E_165"
  },
  {
    "q": "What component is usually packaged anti-parallel with an IGBT in a power module?",
    "a": "A freewheeling diode",
    "opts": [
      "A filtering capacitor",
      "A Zener diode",
      "A freewheeling diode",
      "A small SCR"
    ],
    "exp": "The diode conducts reactive/regenerative current from inductive motor loads back to the DC bus.",
    "cat": "IGBT",
    "id": "T08E_166"
  },
  {
    "q": "How is the speed of an AC motor controlled using IGBTs in a VFD?",
    "a": "By using Pulse Width Modulation (PWM) to vary both the voltage and frequency (V/Hz control)",
    "opts": [
      "By reducing the DC link voltage",
      "By using Pulse Width Modulation (PWM) to vary both the voltage and frequency (V/Hz control)",
      "By changing the resistance of the stator",
      "By adjusting the firing angle alpha"
    ],
    "exp": "The IGBTs chop the DC voltage; changing pulse widths creates a variable frequency sine wave equivalent.",
    "cat": "IGBT",
    "id": "T08E_167"
  },
  {
    "q": "What is a major thermal requirement for high-power IGBT modules?",
    "a": "They require large heatsinks and thermal compound to dissipate conduction and switching losses",
    "opts": [
      "They must be submerged in oil",
      "They require no cooling",
      "They must be kept in a freezer",
      "They require large heatsinks and thermal compound to dissipate conduction and switching losses"
    ],
    "exp": "Proper thermal management is critical to prevent the junction temperature from exceeding 150°C.",
    "cat": "IGBT",
    "id": "T08E_168"
  },
  {
    "q": "What does PWM stand for in the context of IGBT operation?",
    "a": "Pulse Width Modulation",
    "opts": [
      "Peak Width Measurement",
      "Power Watt Multiplier",
      "Pulse Width Modulation",
      "Phase Wave Magnitude"
    ],
    "exp": "PWM turns the IGBT fully ON and fully OFF at varying widths to simulate an analog voltage.",
    "cat": "IGBT",
    "id": "T08E_169"
  },
  {
    "q": "Why are IGBTs NOT typically used in the front-end rectifier stage of standard VFDs?",
    "a": "Standard rectifiers use diodes for cheap, simple AC-DC conversion without needing control logic",
    "opts": [
      "IGBTs generate too much ripple",
      "Standard rectifiers use diodes for cheap, simple AC-DC conversion without needing control logic",
      "IGBTs are too slow",
      "IGBTs cannot handle AC voltage"
    ],
    "exp": "IGBTs are only used in the front-end if the drive is an Active Front End (AFE) for regenerative braking.",
    "cat": "IGBT",
    "id": "T08E_170"
  },
  {
    "q": "What older component did the IGBT largely replace in medium-voltage marine drives?",
    "a": "The GTO (Gate Turn-Off Thyristor)",
    "opts": [
      "The GTO (Gate Turn-Off Thyristor)",
      "The BJT",
      "The Cycloconverter",
      "The mechanical commutator"
    ],
    "exp": "GTOs were used for high power because they could be turned off by gate, but IGBTs are faster and much easier to drive.",
    "cat": "IGBT",
    "id": "T08E_171"
  },
  {
    "q": "What happens if the gate voltage applied to an IGBT is only 8V instead of 15V?",
    "a": "It operates in the linear region, dissipating massive heat and likely burning out",
    "opts": [
      "It operates in the linear region, dissipating massive heat and likely burning out",
      "It switches twice as fast",
      "It works normally but draws more current",
      "It triggers the desat alarm but stays cool"
    ],
    "exp": "Insufficient gate voltage prevents full saturation, causing a high ON-state resistance and thermal failure.",
    "cat": "IGBT",
    "id": "T08E_172"
  },
  {
    "q": "What is the purpose of the gate resistor (Rg) in an IGBT driver circuit?",
    "a": "To control the switching speed (dv/dt), balancing switching losses against EMI generation",
    "opts": [
      "To measure gate current",
      "To consume excess power",
      "To control the switching speed (dv/dt), balancing switching losses against EMI generation",
      "To step down the voltage to 5V"
    ],
    "exp": "A lower resistor switches faster (less heat, more EMI). A higher resistor switches slower (more heat, less EMI).",
    "cat": "IGBT",
    "id": "T08E_173"
  },
  {
    "q": "Can an IGBT conduct current in both directions?",
    "a": "No, it only conducts from Collector to Emitter",
    "opts": [
      "Yes, if the gate is negative",
      "Yes, it is bi-directional like a TRIAC",
      "No, it only conducts Emitter to Collector",
      "No, it only conducts from Collector to Emitter"
    ],
    "exp": "IGBTs are unidirectional devices; reverse current must flow through the anti-parallel freewheeling diode.",
    "cat": "IGBT",
    "id": "T08E_174"
  },
  {
    "q": "What is 'dead time' in an IGBT inverter bridge?",
    "a": "A tiny delay inserted to ensure the top IGBT turns fully OFF before the bottom IGBT turns ON",
    "opts": [
      "The time to charge the DC link",
      "The delay in the PLC network",
      "A tiny delay inserted to ensure the top IGBT turns fully OFF before the bottom IGBT turns ON",
      "The time the motor is stopped"
    ],
    "exp": "Without dead time, both top and bottom IGBTs might conduct simultaneously, causing a catastrophic DC bus short ('shoot-through').",
    "cat": "IGBT",
    "id": "T08E_175"
  },
  {
    "q": "Which application is an IGBT NOT suited for?",
    "a": "Low voltage (e.g. 5V), high-frequency computer processors",
    "opts": [
      "Marine VFD inverters",
      "High power UPS systems",
      "Active Front End rectifiers",
      "Low voltage (e.g. 5V), high-frequency computer processors"
    ],
    "exp": "IGBTs are high-power devices; MOSFETs are used for low-voltage, logic-level applications.",
    "cat": "IGBT",
    "id": "T08E_176"
  },
  {
    "q": "What causes the switching losses in an IGBT?",
    "a": "The brief periods during turn-on and turn-off where voltage and current overlap",
    "opts": [
      "The brief periods during turn-on and turn-off where voltage and current overlap",
      "The constant 15V gate signal",
      "The resistance of the heatsink",
      "The DC link capacitor leakage"
    ],
    "exp": "Switching isn't instant; during transition, V and I are both non-zero, producing a spike in power dissipation (P=VxI).",
    "cat": "IGBT",
    "id": "T08E_177"
  },
  {
    "q": "What is a Cycloconverter?",
    "a": "A power electronic device that converts AC power at one frequency DIRECTLY to AC power at a lower frequency",
    "opts": [
      "A device that converts AC to DC",
      "A power electronic device that converts AC power at one frequency DIRECTLY to AC power at a lower frequency",
      "A type of UPS",
      "A rotary frequency converter"
    ],
    "exp": "It assembles the output wave directly from segments of the input wave, without a DC stage.",
    "cat": "Cycloconverter",
    "id": "T08E_178"
  },
  {
    "q": "What is the key difference between a Cycloconverter and a VFD?",
    "a": "A Cycloconverter has no intermediate DC link; a VFD uses a DC link between rectifier and inverter",
    "opts": [
      "A VFD is only for DC motors",
      "A Cycloconverter has no intermediate DC link; a VFD uses a DC link between rectifier and inverter",
      "A Cycloconverter can increase frequency",
      "A Cycloconverter uses IGBTs only"
    ],
    "exp": "VFD = AC-DC-AC (two stages). Cycloconverter = AC-AC direct (one stage).",
    "cat": "Cycloconverter",
    "id": "T08E_179"
  },
  {
    "q": "What component traditionally forms the core of a Cycloconverter?",
    "a": "Thyristors (SCRs)",
    "opts": [
      "Diodes",
      "Transformers",
      "Thyristors (SCRs)",
      "Capacitors"
    ],
    "exp": "Banks of Thyristors are selectively fired to synthesize the lower-frequency output wave.",
    "cat": "Cycloconverter",
    "id": "T08E_180"
  },
  {
    "q": "What is the theoretical maximum output frequency of a standard Cycloconverter?",
    "a": "Approximately 1/3 of the input frequency",
    "opts": [
      "Unlimited",
      "Approximately 1/3 of the input frequency",
      "Double the input frequency",
      "Equal to the input frequency"
    ],
    "exp": "Waveform quality degrades severely if trying to generate frequencies higher than 1/3 of the supply.",
    "cat": "Cycloconverter",
    "id": "T08E_181"
  },
  {
    "q": "If a Cycloconverter is supplied with 60Hz power, what is its maximum practical output frequency?",
    "a": "20 Hz",
    "opts": [
      "30 Hz",
      "60 Hz",
      "120 Hz",
      "20 Hz"
    ],
    "exp": "1/3 of 60Hz = 20Hz maximum output.",
    "cat": "Cycloconverter",
    "id": "T08E_182"
  },
  {
    "q": "What is the primary marine application for a Cycloconverter?",
    "a": "Driving large, very low-speed synchronous motors for main propulsion (e.g., LNG carriers, icebreakers)",
    "opts": [
      "Steering gear hydraulic pumps",
      "Driving large, very low-speed synchronous motors for main propulsion (e.g., LNG carriers, icebreakers)",
      "Emergency generator starting",
      "Engine room ventilation fans"
    ],
    "exp": "They are ideal for delivering massive torque at very low shaft speeds (0-20 RPM).",
    "cat": "Cycloconverter",
    "id": "T08E_183"
  },
  {
    "q": "Why is a Cycloconverter excellent for icebreaker propulsion?",
    "a": "It provides full, massive torque from zero speed without needing a reduction gearbox",
    "opts": [
      "It warms the ice",
      "It runs on 24V DC",
      "It increases propeller RPM massively",
      "It provides full, massive torque from zero speed without needing a reduction gearbox"
    ],
    "exp": "Zero-speed torque and low-speed efficiency are perfect for ice ramming and direct-drive shafts.",
    "cat": "Cycloconverter",
    "id": "T08E_184"
  },
  {
    "q": "Why is a Cycloconverter chosen over a standard IGBT VFD for ultra-low speed MW-scale propulsion?",
    "a": "Thyristors in a Cycloconverter have very low conduction losses and natural commutation at low frequencies",
    "opts": [
      "VFDs are too heavy",
      "Thyristors in a Cycloconverter have very low conduction losses and natural commutation at low frequencies",
      "VFDs cannot reverse direction",
      "Cycloconverters produce zero harmonics"
    ],
    "exp": "At near 0 Hz, IGBTs suffer severe thermal stress; SCRs naturally commutate with the supply, running cooler.",
    "cat": "Cycloconverter",
    "id": "T08E_185"
  },
  {
    "q": "Does a Cycloconverter require a gearbox to drive a ship's propeller?",
    "a": "No, it is used for direct-drive propulsion",
    "opts": [
      "Yes, to increase the speed",
      "Yes, a massive reduction gearbox is needed",
      "Only on smaller vessels",
      "No, it is used for direct-drive propulsion"
    ],
    "exp": "Direct drive eliminates gearbox losses, weight, and maintenance, saving space on cruise ships.",
    "cat": "Cycloconverter",
    "id": "T08E_186"
  },
  {
    "q": "Can a standard Cycloconverter operate regeneratively (4-quadrant operation)?",
    "a": "Yes, it can naturally return energy from the motor to the supply grid",
    "opts": [
      "Only if DC link capacitors are added",
      "Yes, it can naturally return energy from the motor to the supply grid",
      "No, it burns excess energy in resistors",
      "Only at high speeds"
    ],
    "exp": "Because it uses fully controlled SCR bridges without a DC blocking link, power flows both ways.",
    "cat": "Cycloconverter",
    "id": "T08E_187"
  },
  {
    "q": "What is a major disadvantage of a Cycloconverter regarding power quality?",
    "a": "It produces severe harmonic distortion in the supply grid, requiring heavy harmonic filters",
    "opts": [
      "It drops the grid voltage to zero",
      "It generates RF interference that breaks radar",
      "It causes high frequency whistling",
      "It produces severe harmonic distortion in the supply grid, requiring heavy harmonic filters"
    ],
    "exp": "The sub-harmonic switching patterns inject massive harmonic currents back into the ship's MSB.",
    "cat": "Cycloconverter",
    "id": "T08E_188"
  },
  {
    "q": "How many Thyristors are typically required for a 3-phase to 3-phase Cycloconverter?",
    "a": "18 or 36 Thyristors",
    "opts": [
      "6 Thyristors",
      "18 or 36 Thyristors",
      "4 Thyristors",
      "3 Thyristors"
    ],
    "exp": "A dual-bridge (positive and negative) is needed for each phase: 6 SCRs * 2 * 3 phases = 36.",
    "cat": "Cycloconverter",
    "id": "T08E_189"
  },
  {
    "q": "In a 'dead ship' blackout situation, can a Cycloconverter start a thruster immediately on emergency power?",
    "a": "No, Cycloconverters rely on the main supply grid for natural commutation of the SCRs",
    "opts": [
      "No, Cycloconverters rely on the main supply grid for natural commutation of the SCRs",
      "Yes, it has internal batteries",
      "Yes, by manually overriding the SCRs",
      "Yes, it requires very little power"
    ],
    "exp": "SCRs need the AC grid zero-crossings to turn off; without a stable main grid, it cannot operate.",
    "cat": "Cycloconverter",
    "id": "T08E_190"
  },
  {
    "q": "How does a Cycloconverter vary the output frequency?",
    "a": "By slowly changing the firing angle pattern of the Thyristors over successive supply cycles",
    "opts": [
      "By slowly changing the firing angle pattern of the Thyristors over successive supply cycles",
      "By speeding up a rotary motor",
      "By changing the DC link voltage",
      "By adding more capacitors"
    ],
    "exp": "The control logic shifts alpha up and down to carve a low-frequency envelope out of the 50Hz supply.",
    "cat": "Cycloconverter",
    "id": "T08E_191"
  },
  {
    "q": "What happens if you try to command a 60Hz output from a Cycloconverter on a 50Hz supply?",
    "a": "It is impossible; the output waveform will distort and fail",
    "opts": [
      "It will automatically switch to a VFD mode",
      "It will work perfectly",
      "It is impossible; the output waveform will distort and fail",
      "It will draw less current"
    ],
    "exp": "The principle of assembling waves from input segments mathematically limits output to < input/3.",
    "cat": "Cycloconverter",
    "id": "T08E_192"
  },
  {
    "q": "What modern component replaces the SCR in advanced 'Matrix Converters' (a modern evolution of the cycloconverter)?",
    "a": "IGBTs (allowing forced commutation and higher output frequencies)",
    "opts": [
      "Relays",
      "Diodes",
      "BJT transistors",
      "IGBTs (allowing forced commutation and higher output frequencies)"
    ],
    "exp": "Matrix converters use bidirectional IGBT switches to overcome the 1/3 frequency limit and harmonic issues of SCRs.",
    "cat": "Cycloconverter",
    "id": "T08E_193"
  },
  {
    "q": "What type of motor is almost exclusively paired with a Cycloconverter on large ships?",
    "a": "Synchronous motor",
    "opts": [
      "DC series motor",
      "Stepper motor",
      "Squirrel cage induction motor",
      "Synchronous motor"
    ],
    "exp": "Large, slow propulsion drives use synchronous motors for high efficiency and precise power factor control.",
    "cat": "Cycloconverter",
    "id": "T08E_194"
  },
  {
    "q": "Why is the physical footprint of a Cycloconverter installation so large?",
    "a": "It requires dozens of high-power SCRs, massive isolation transformers, and heavy harmonic filter banks",
    "opts": [
      "Because the DC link capacitor is huge",
      "Because SCRs must be spaced 1 meter apart",
      "It requires dozens of high-power SCRs, massive isolation transformers, and heavy harmonic filter banks",
      "It requires an internal diesel engine"
    ],
    "exp": "The 36 SCRs, complex cooling, and huge passive filters take up a massive amount of engine room space.",
    "cat": "Cycloconverter",
    "id": "T08E_195"
  },
  {
    "q": "What does a Cycloconverter output waveform look like before motor filtering?",
    "a": "A jagged envelope made of chopped pieces of the input AC sine waves",
    "opts": [
      "A clean high-frequency square wave",
      "A perfectly smooth sine wave",
      "A jagged envelope made of chopped pieces of the input AC sine waves",
      "A pure flat DC line"
    ],
    "exp": "It is highly distorted, but the massive inductance of the propulsion motor smooths it into a usable sine current.",
    "cat": "Cycloconverter",
    "id": "T08E_196"
  },
  {
    "q": "In a Cycloconverter, what is the role of the 'Positive Converter' group?",
    "a": "It generates the positive half-cycle of the low-frequency output wave",
    "opts": [
      "It generates the positive half-cycle of the low-frequency output wave",
      "It charges the battery",
      "It generates the DC link voltage",
      "It absorbs harmonic noise"
    ],
    "exp": "The positive SCR group handles the positive wave; the negative group handles the negative wave.",
    "cat": "Cycloconverter",
    "id": "T08E_197"
  },
  {
    "q": "What is an Optocoupler (Opto-isolator)?",
    "a": "A component that transfers electrical signals between two isolated circuits using light",
    "opts": [
      "A mechanical relay",
      "A fiber optic cable connector",
      "A visual alarm indicator",
      "A component that transfers electrical signals between two isolated circuits using light"
    ],
    "exp": "It provides complete galvanic isolation by using light instead of a wire connection.",
    "cat": "Optocoupler",
    "id": "T08E_198"
  },
  {
    "q": "What are the two internal components of a standard Optocoupler?",
    "a": "An LED (Light Emitting Diode) and a Phototransistor",
    "opts": [
      "A Zener diode and a resistor",
      "A laser and a mirror",
      "A microchip and an antenna",
      "An LED (Light Emitting Diode) and a Phototransistor"
    ],
    "exp": "The input circuit lights the LED, and the output circuit's phototransistor detects it.",
    "cat": "Optocoupler",
    "id": "T08E_199"
  },
  {
    "q": "What is the primary benefit of using an Optocoupler in shipboard electronics?",
    "a": "Complete electrical isolation between high-voltage/noisy field circuits and low-voltage logic circuits",
    "opts": [
      "It amplifies power",
      "Complete electrical isolation between high-voltage/noisy field circuits and low-voltage logic circuits",
      "It converts AC to DC",
      "It provides physical illumination"
    ],
    "exp": "Faults or spikes on the 24V field side cannot physically reach and destroy the 5V PLC processor.",
    "cat": "Optocoupler",
    "id": "T08E_200"
  },
  {
    "q": "How does an Optocoupler prevent ground loops?",
    "a": "By ensuring there is no direct electrical connection or common ground between input and output",
    "opts": [
      "By reversing the polarity",
      "By grounding both sides heavily",
      "By ensuring there is no direct electrical connection or common ground between input and output",
      "By using a transformer"
    ],
    "exp": "Light crosses the gap, so differing ground potentials cannot push stray currents between systems.",
    "cat": "Optocoupler",
    "id": "T08E_201"
  },
  {
    "q": "Where are Optocouplers commonly found in a ship's automation system?",
    "a": "On PLC digital input and output cards",
    "opts": [
      "In the hydraulic steering lines",
      "In the 440V Main Switchboard busbars",
      "Inside the main propulsion gearbox",
      "On PLC digital input and output cards"
    ],
    "exp": "Every channel on a PLC I/O card uses an optocoupler to protect the delicate internal CPU.",
    "cat": "Optocoupler",
    "id": "T08E_202"
  },
  {
    "q": "What does 'Ex i' stand for in hazardous area equipment?",
    "a": "Intrinsically Safe",
    "opts": [
      "Explosion Ignited",
      "Intrinsically Safe",
      "Extra Insulated",
      "Exhaust Isolated"
    ],
    "exp": "Ex i equipment limits electrical energy so that even under fault conditions, no spark can ignite gas.",
    "cat": "Optocoupler",
    "id": "T08E_203"
  },
  {
    "q": "What is the function of a Zener Barrier in an Ex i circuit?",
    "a": "It limits voltage and current entering the hazardous area to non-incendive levels",
    "opts": [
      "It provides ground fault detection",
      "It limits voltage and current entering the hazardous area to non-incendive levels",
      "It boosts the signal for long cables",
      "It physically blocks gas from the safe area"
    ],
    "exp": "The barrier ensures that a catastrophic failure in the safe area doesn't send lethal energy into the explosive zone.",
    "cat": "Optocoupler",
    "id": "T08E_204"
  },
  {
    "q": "What three main components make up a simple Zener Barrier?",
    "a": "Zener diodes (voltage limit), Resistors (current limit), and a Fuse (protection)",
    "opts": [
      "Capacitor, Inductor, Transistor",
      "LED, Photodiode, Relay",
      "Transformer, Bridge, Choke",
      "Zener diodes (voltage limit), Resistors (current limit), and a Fuse (protection)"
    ],
    "exp": "Zeners clamp voltage, the resistor limits current, and the fuse blows if the Zener is overwhelmed.",
    "cat": "Optocoupler",
    "id": "T08E_205"
  },
  {
    "q": "How does 'Ex d' (Flameproof) differ from 'Ex i' (Intrinsically Safe)?",
    "a": "Ex d contains the internal explosion; Ex i prevents the ignition spark from occurring entirely",
    "opts": [
      "Ex d is for water, Ex i is for gas",
      "Ex d uses plastic, Ex i uses metal",
      "There is no difference",
      "Ex d contains the internal explosion; Ex i prevents the ignition spark from occurring entirely"
    ],
    "exp": "Ex d expects an explosion and traps it. Ex i starves the circuit of the energy needed to make a spark.",
    "cat": "Optocoupler",
    "id": "T08E_206"
  },
  {
    "q": "What is 'Ex e' equipment?",
    "a": "Increased Safety (prevents ignition by robust design, tighter terminals, and better seals)",
    "opts": [
      "Increased Safety (prevents ignition by robust design, tighter terminals, and better seals)",
      "Extra Energy",
      "Electronic Excitation",
      "Explosion Exhaust"
    ],
    "exp": "Ex e ensures sparks won't happen under normal conditions by over-engineering the connections and enclosure.",
    "cat": "Optocoupler",
    "id": "T08E_207"
  },
  {
    "q": "What is a Commutator on a DC machine?",
    "a": "A mechanical switch on the rotor that maintains consistent torque direction by reversing coil current",
    "opts": [
      "A type of transistor",
      "A mechanical switch on the rotor that maintains consistent torque direction by reversing coil current",
      "A device that measures speed",
      "The cooling fan"
    ],
    "exp": "As the rotor turns, the commutator segments slide under brushes, mechanically inverting the AC into DC.",
    "cat": "Optocoupler",
    "id": "T08E_208"
  },
  {
    "q": "What component presses against the Commutator to transfer electrical current?",
    "a": "Carbon brushes",
    "opts": [
      "Copper slip rings",
      "Steel ball bearings",
      "Teflon pads",
      "Carbon brushes"
    ],
    "exp": "Carbon brushes provide a self-lubricating electrical sliding contact against the copper commutator.",
    "cat": "Optocoupler",
    "id": "T08E_209"
  },
  {
    "q": "Why is the mica insulation between commutator segments 'undercut' during maintenance?",
    "a": "To prevent the harder mica from protruding and lifting the brushes as the copper wears down",
    "opts": [
      "To increase the voltage limit",
      "To change the motor direction",
      "To allow oil lubrication",
      "To prevent the harder mica from protruding and lifting the brushes as the copper wears down"
    ],
    "exp": "If mica rides high, brushes bounce, causing severe sparking and loss of contact.",
    "cat": "Optocoupler",
    "id": "T08E_210"
  },
  {
    "q": "What is the Entity Concept in Intrinsically Safe systems?",
    "a": "Matching the barrier's max output parameters (Uo, Io) against the sensor's max input limits (Ui, Ii)",
    "opts": [
      "The grounding requirement",
      "The physical shape of the enclosure",
      "Matching the barrier's max output parameters (Uo, Io) against the sensor's max input limits (Ui, Ii)",
      "The legal ownership of the barrier"
    ],
    "exp": "The barrier's max fault energy must be less than what the field device can safely absorb without sparking.",
    "cat": "Optocoupler",
    "id": "T08E_211"
  },
  {
    "q": "Where must a Zener barrier be physically installed?",
    "a": "In the Safe Area (or an Ex d enclosure), never unprotected in the Hazardous Area",
    "opts": [
      "Submerged in the cargo tank",
      "Directly on the main engine",
      "In the Safe Area (or an Ex d enclosure), never unprotected in the Hazardous Area",
      "At the mast top"
    ],
    "exp": "The barrier protects the hazardous area from the safe area; it must reside on the safe side of the boundary.",
    "cat": "Optocoupler",
    "id": "T08E_212"
  },
  {
    "q": "What happens if you accidentally reverse the connections on an Optocoupler LED?",
    "a": "The LED will not light up, and no signal will transfer (it blocks reverse current)",
    "opts": [
      "It transfers power instead of signal",
      "The output will be inverted",
      "It will explode",
      "The LED will not light up, and no signal will transfer (it blocks reverse current)"
    ],
    "exp": "Like any diode, the input LED only works when forward-biased.",
    "cat": "Optocoupler",
    "id": "T08E_213"
  },
  {
    "q": "Which amplifier class conducts for the full 360 degrees of the input cycle?",
    "a": "Class A",
    "opts": [
      "Class A",
      "Class B",
      "Class C",
      "Class D"
    ],
    "exp": "Class A is biased so the transistor never turns off, resulting in the lowest distortion.",
    "cat": "Amplifier",
    "id": "T08E_214"
  },
  {
    "q": "What is the maximum theoretical efficiency of a standard Class A amplifier?",
    "a": "25-30%",
    "opts": [
      "95-98%",
      "25-30%",
      "90%",
      "78.5%"
    ],
    "exp": "Class A wastes massive amounts of power as heat because it constantly conducts.",
    "cat": "Amplifier",
    "id": "T08E_215"
  },
  {
    "q": "Which amplifier class uses two push-pull transistors, each conducting for 180 degrees?",
    "a": "Class B",
    "opts": [
      "Class B",
      "Class C",
      "Class AB",
      "Class A"
    ],
    "exp": "One transistor handles the positive half, the other handles the negative half.",
    "cat": "Amplifier",
    "id": "T08E_216"
  },
  {
    "q": "What is 'Crossover Distortion' in a Class B amplifier?",
    "a": "A dead zone at the zero-crossing where both transistors are briefly OFF",
    "opts": [
      "Distortion caused by crossed wires",
      "Overheating of the speaker",
      "A dead zone at the zero-crossing where both transistors are briefly OFF",
      "High frequency screeching"
    ],
    "exp": "Because transistors need ~0.6V to turn on, the signal distorts as it crosses zero volts.",
    "cat": "Amplifier",
    "id": "T08E_217"
  },
  {
    "q": "How does a Class AB amplifier fix crossover distortion?",
    "a": "By applying a small forward bias to keep both transistors slightly ON at all times",
    "opts": [
      "By using transformers",
      "By switching to digital PWM",
      "By applying a small forward bias to keep both transistors slightly ON at all times",
      "By adding a large capacitor"
    ],
    "exp": "Class AB eliminates the 0.6V dead zone by pre-biasing the transistors just above cutoff.",
    "cat": "Amplifier",
    "id": "T08E_218"
  },
  {
    "q": "Which amplifier class conducts for less than 180 degrees and is used only for RF (radio) transmission?",
    "a": "Class C",
    "opts": [
      "Class A",
      "Class D",
      "Class B",
      "Class C"
    ],
    "exp": "Class C is highly efficient (90%) but highly distorted, fixed by tuned LC tank circuits in GMDSS radios.",
    "cat": "Amplifier",
    "id": "T08E_219"
  },
  {
    "q": "Which amplifier class operates entirely by switching transistors ON and OFF (PWM)?",
    "a": "Class D",
    "opts": [
      "Class C",
      "Class B",
      "Class D",
      "Class A"
    ],
    "exp": "Class D uses high-speed PWM and a low-pass filter to achieve 95%+ efficiency in modern audio.",
    "cat": "Amplifier",
    "id": "T08E_220"
  },
  {
    "q": "What is an Operational Amplifier (Op-Amp)?",
    "a": "A high-gain, DC-coupled differential amplifier IC with high input and low output impedance",
    "opts": [
      "A high-gain, DC-coupled differential amplifier IC with high input and low output impedance",
      "A type of radio antenna",
      "A mechanical relay",
      "A motor speed controller"
    ],
    "exp": "Op-Amps are the fundamental building blocks of analog signal processing.",
    "cat": "Amplifier",
    "id": "T08E_221"
  },
  {
    "q": "What is the formula for the gain of an Inverting Op-Amp circuit?",
    "a": "Gain = -(Rf / Rin)",
    "opts": [
      "Gain = -(Rf / Rin)",
      "Gain = Rin / Rf",
      "Gain = Rf x Rin",
      "Gain = 1 + (Rf / Rin)"
    ],
    "exp": "The feedback resistor (Rf) divided by the input resistor (Rin) sets the inverted gain.",
    "cat": "Amplifier",
    "id": "T08E_222"
  },
  {
    "q": "What is the formula for the gain of a Non-Inverting Op-Amp circuit?",
    "a": "Gain = 1 + (Rf / Rin)",
    "opts": [
      "Gain = 0",
      "Gain = -(Rf / Rin)",
      "Gain = 1 + (Rf / Rin)",
      "Gain = Rf - Rin"
    ],
    "exp": "The non-inverting setup always has a gain of at least 1.",
    "cat": "Amplifier",
    "id": "T08E_223"
  },
  {
    "q": "How is an Op-Amp used as a Comparator?",
    "a": "It compares two voltages and outputs HIGH or LOW depending on which is higher",
    "opts": [
      "It amplifies the sum of two voltages",
      "It integrates the signal over time",
      "It compares two voltages and outputs HIGH or LOW depending on which is higher",
      "It converts AC to DC"
    ],
    "exp": "Without feedback, the massive open-loop gain slams the output to the supply rail based on input difference.",
    "cat": "Amplifier",
    "id": "T08E_224"
  },
  {
    "q": "What function does an Op-Amp Integrator perform in a PID controller?",
    "a": "It provides the Integral (I) action by accumulating the error signal over time",
    "opts": [
      "It provides Proportional (P) gain only",
      "It provides the Integral (I) action by accumulating the error signal over time",
      "It provides Derivative (D) action",
      "It converts 4-20mA to digital"
    ],
    "exp": "A capacitor in the feedback loop causes the output to integrate (sum up) the input voltage.",
    "cat": "Amplifier",
    "id": "T08E_225"
  },
  {
    "q": "What is a 'Grid Bias' voltage in older electronics (vacuum tubes)?",
    "a": "A fixed DC voltage applied to the control grid to set the operating point of the tube",
    "opts": [
      "The heater filament voltage",
      "The main AC supply",
      "A fixed DC voltage applied to the control grid to set the operating point of the tube",
      "The ground connection"
    ],
    "exp": "It functions exactly like the DC base-bias voltage network used on modern transistors.",
    "cat": "Amplifier",
    "id": "T08E_226"
  },
  {
    "q": "What does an I/V (Current-to-Voltage) converter circuit do on a ship?",
    "a": "Converts 4-20mA sensor signals into 1-5V signals for analog input cards",
    "opts": [
      "Converts 4-20mA sensor signals into 1-5V signals for analog input cards",
      "Measures battery capacity",
      "Converts AC current to DC voltage",
      "Converts 220V to 24V"
    ],
    "exp": "Using a precision 250-ohm resistor (V = I x R), 4mA becomes 1V and 20mA becomes 5V.",
    "cat": "Amplifier",
    "id": "T08E_227"
  },
  {
    "q": "What is the primary characteristic of the 555 Timer IC?",
    "a": "It is a highly versatile chip used for timing, pulse generation, and oscillator applications",
    "opts": [
      "It is a high-power motor driver",
      "It is a 3-phase rectifier",
      "It is a highly versatile chip used for timing, pulse generation, and oscillator applications",
      "It is an optical isolator"
    ],
    "exp": "The 555 timer is ubiquitous for creating delays, flashers, and simple PWM.",
    "cat": "Amplifier",
    "id": "T08E_228"
  },
  {
    "q": "What is the 'Astable' mode of a 555 Timer?",
    "a": "It acts as an oscillator, continuously toggling the output HIGH and LOW (square wave)",
    "opts": [
      "It acts as an oscillator, continuously toggling the output HIGH and LOW (square wave)",
      "It latches the output permanently",
      "It waits for a manual trigger",
      "It acts as a microphone amplifier"
    ],
    "exp": "Astable means 'no stable state'—it flips back and forth constantly based on RC timing.",
    "cat": "Amplifier",
    "id": "T08E_229"
  },
  {
    "q": "What is a common marine use for a 555 Timer in Monostable mode?",
    "a": "Creating an alarm timer delay to avoid nuisance alarms (one-shot pulse)",
    "opts": [
      "Creating an alarm timer delay to avoid nuisance alarms (one-shot pulse)",
      "Running the main propulsion",
      "Generating VHF radio waves",
      "Rectifying AC power"
    ],
    "exp": "Monostable (one-shot) outputs a single pulse of fixed duration when triggered.",
    "cat": "Amplifier",
    "id": "T08E_230"
  },
  {
    "q": "What logic gate produces a HIGH output ONLY when ALL its inputs are HIGH?",
    "a": "AND Gate",
    "opts": [
      "AND Gate",
      "NOT Gate",
      "OR Gate",
      "XOR Gate"
    ],
    "exp": "Like switches in series, all conditions must be met to produce an output.",
    "cat": "Digital",
    "id": "T08E_231"
  },
  {
    "q": "What logic gate produces a HIGH output when ANY of its inputs are HIGH?",
    "a": "OR Gate",
    "opts": [
      "NOR Gate",
      "OR Gate",
      "XOR Gate",
      "AND Gate"
    ],
    "exp": "Like switches in parallel, any single condition met will produce an output.",
    "cat": "Digital",
    "id": "T08E_232"
  },
  {
    "q": "What logic gate reverses its input (0 becomes 1, 1 becomes 0)?",
    "a": "NOT Gate (Inverter)",
    "opts": [
      "AND Gate",
      "NOT Gate (Inverter)",
      "OR Gate",
      "NAND Gate"
    ],
    "exp": "It simply inverts the logic state.",
    "cat": "Digital",
    "id": "T08E_233"
  },
  {
    "q": "Which logic gate represents an AND gate followed by a NOT gate?",
    "a": "NAND Gate",
    "opts": [
      "XOR Gate",
      "NOR Gate",
      "OR Gate",
      "NAND Gate"
    ],
    "exp": "NAND stands for Not-AND. It outputs LOW only when all inputs are HIGH.",
    "cat": "Digital",
    "id": "T08E_234"
  },
  {
    "q": "Why are NAND and NOR gates called 'Universal Gates'?",
    "a": "Because any logic function or gate can be built using only NAND or only NOR gates",
    "opts": [
      "Because they are used everywhere on ships",
      "Because any logic function or gate can be built using only NAND or only NOR gates",
      "Because they work in both analog and digital",
      "Because they run on universal AC power"
    ],
    "exp": "By combining them, you can create AND, OR, NOT, and XOR circuits.",
    "cat": "Digital",
    "id": "T08E_235"
  },
  {
    "q": "What logic gate produces a HIGH output only when its inputs are DIFFERENT (0,1 or 1,0)?",
    "a": "XOR Gate (Exclusive OR)",
    "opts": [
      "XOR Gate (Exclusive OR)",
      "NAND Gate",
      "XNOR Gate",
      "AND Gate"
    ],
    "exp": "XOR is used heavily in parity checking and addition circuits.",
    "cat": "Digital",
    "id": "T08E_236"
  },
  {
    "q": "How is a motor start safety interlock typically represented in digital logic?",
    "a": "As an AND gate (Lube oil OK AND cooling OK AND start pressed)",
    "opts": [
      "As an XOR gate",
      "As an AND gate (Lube oil OK AND cooling OK AND start pressed)",
      "As an OR gate",
      "As a NOT gate"
    ],
    "exp": "All safety conditions must be simultaneously true (HIGH) to start the motor.",
    "cat": "Digital",
    "id": "T08E_237"
  },
  {
    "q": "How is a general alarm annunciator panel typically represented in digital logic?",
    "a": "As an OR gate (Sensor 1 OR Sensor 2 OR Sensor 3 triggers alarm)",
    "opts": [
      "As a Flip-Flop",
      "As a NAND gate",
      "As an AND gate",
      "As an OR gate (Sensor 1 OR Sensor 2 OR Sensor 3 triggers alarm)"
    ],
    "exp": "Any single fault condition will trigger the common alarm output.",
    "cat": "Digital",
    "id": "T08E_238"
  },
  {
    "q": "Convert the decimal number 25 to Binary.",
    "a": "11001",
    "opts": [
      "10011",
      "10101",
      "11001",
      "11100"
    ],
    "exp": "16 + 8 + 0 + 0 + 1 = 25.",
    "cat": "Digital",
    "id": "T08E_239"
  },
  {
    "q": "Convert the binary number 1011 to Decimal.",
    "a": "11",
    "opts": [
      "11",
      "15",
      "13",
      "9"
    ],
    "exp": "(1x8) + (0x4) + (1x2) + (1x1) = 8 + 0 + 2 + 1 = 11.",
    "cat": "Digital",
    "id": "T08E_240"
  },
  {
    "q": "What base is the Hexadecimal number system?",
    "a": "Base 16",
    "opts": [
      "Base 2",
      "Base 8",
      "Base 10",
      "Base 16"
    ],
    "exp": "It uses digits 0-9 and letters A-F to represent 16 unique values per digit.",
    "cat": "Digital",
    "id": "T08E_241"
  },
  {
    "q": "How many bits are in one Byte?",
    "a": "8 bits",
    "opts": [
      "8 bits",
      "4 bits",
      "32 bits",
      "16 bits"
    ],
    "exp": "One byte consists of 8 binary bits, representing values from 0 to 255.",
    "cat": "Digital",
    "id": "T08E_242"
  },
  {
    "q": "What is the decimal equivalent of the Hexadecimal value 'FF'?",
    "a": "255",
    "opts": [
      "256",
      "1024",
      "255",
      "128"
    ],
    "exp": "F is 15. (15 x 16) + 15 = 240 + 15 = 255. It is the max value of one byte.",
    "cat": "Digital",
    "id": "T08E_243"
  },
  {
    "q": "How many bits are in a standard PLC 'Word'?",
    "a": "16 bits",
    "opts": [
      "64 bits",
      "16 bits",
      "32 bits",
      "8 bits"
    ],
    "exp": "A Word is 16 bits, representing values up to 65,535 (unsigned).",
    "cat": "Digital",
    "id": "T08E_244"
  },
  {
    "q": "What is the typical voltage level for a logic HIGH in marine PLC field IO?",
    "a": "24V DC",
    "opts": [
      "12V DC",
      "24V DC",
      "220V AC",
      "5V DC"
    ],
    "exp": "While internal CPU logic is 5V/3.3V, rugged marine field circuits use 24V DC to overcome noise.",
    "cat": "Digital",
    "id": "T08E_245"
  },
  {
    "q": "What is the primary difference between a Linear Power Supply and an SMPS?",
    "a": "Linear drops excess voltage as heat; SMPS chops voltage at high frequency for efficiency",
    "opts": [
      "Linear is highly efficient, SMPS wastes heat",
      "Linear uses AC, SMPS uses DC",
      "Linear drops excess voltage as heat; SMPS chops voltage at high frequency for efficiency",
      "There is no difference"
    ],
    "exp": "SMPS uses high-frequency switching to achieve 70-90% efficiency, compared to 30-60% for linear.",
    "cat": "SMPS",
    "id": "T08E_246"
  },
  {
    "q": "What is the main physical advantage of an SMPS over a Linear Supply?",
    "a": "It is much smaller and lighter because it uses a tiny high-frequency transformer instead of a heavy 50Hz transformer",
    "opts": [
      "It is waterproof",
      "It is completely silent",
      "It requires no capacitors",
      "It is much smaller and lighter because it uses a tiny high-frequency transformer instead of a heavy 50Hz transformer"
    ],
    "exp": "High frequency allows magnetic components (transformers/inductors) to be miniaturized.",
    "cat": "SMPS",
    "id": "T08E_247"
  },
  {
    "q": "What is the primary disadvantage of an SMPS?",
    "a": "It generates high-frequency switching noise (EMI) that can interfere with sensitive equipment",
    "opts": [
      "It cannot charge batteries",
      "It generates high-frequency switching noise (EMI) that can interfere with sensitive equipment",
      "It generates excessive heat",
      "It only works on 110V"
    ],
    "exp": "The 20kHz+ square wave switching creates Electromagnetic Interference, requiring heavy filtering.",
    "cat": "SMPS",
    "id": "T08E_248"
  },
  {
    "q": "What does a capacitor do in a pure DC circuit after it is fully charged?",
    "a": "It acts as an open circuit, blocking DC current flow",
    "opts": [
      "It acts as an open circuit, blocking DC current flow",
      "It reverses the current",
      "It continuously consumes power",
      "It acts as a short circuit"
    ],
    "exp": "Once the capacitor voltage matches the supply, current ceases to flow.",
    "cat": "SMPS",
    "id": "T08E_249"
  },
  {
    "q": "In an AC circuit with a capacitor, what is the phase relationship?",
    "a": "Current LEADS voltage by 90 degrees (CIVIL)",
    "opts": [
      "Current LEADS voltage by 90 degrees (CIVIL)",
      "Current and voltage are IN PHASE",
      "Current LAGS voltage by 90 degrees",
      "Voltage LEADS by 180 degrees"
    ],
    "exp": "Mnemonic CIVIL: in a Capacitor (C), I (current) comes before V (voltage).",
    "cat": "SMPS",
    "id": "T08E_250"
  },
  {
    "q": "What happens to Capacitive Reactance (Xc) as frequency increases?",
    "a": "It decreases (allows more AC current to flow)",
    "opts": [
      "It decreases (allows more AC current to flow)",
      "It drops to exactly zero",
      "It remains constant",
      "It increases"
    ],
    "exp": "Xc = 1 / (2 * Pi * f * C). Higher frequency 'f' makes the fraction smaller.",
    "cat": "SMPS",
    "id": "T08E_251"
  },
  {
    "q": "What is the most critical safety step before touching a large capacitor (like in a VFD)?",
    "a": "Wait for discharge time and verify it is completely discharged with a voltmeter",
    "opts": [
      "Wait for discharge time and verify it is completely discharged with a voltmeter",
      "Remove the fuses while running",
      "Ground it with your hand",
      "Turn off the lights"
    ],
    "exp": "DC link capacitors store lethal energy for minutes after power is removed.",
    "cat": "SMPS",
    "id": "T08E_252"
  },
  {
    "q": "What is the difference between EMF (Electromotive Force) and Potential Difference (Terminal Voltage)?",
    "a": "EMF is the open-circuit voltage; Terminal voltage drops under load due to internal resistance",
    "opts": [
      "EMF only applies to motors",
      "They are identical",
      "EMF is the open-circuit voltage; Terminal voltage drops under load due to internal resistance",
      "EMF is AC, PD is DC"
    ],
    "exp": "Terminal V = EMF - (Load Current x Internal Resistance).",
    "cat": "SMPS",
    "id": "T08E_253"
  },
  {
    "q": "What does RMS (Root Mean Square) value represent in an AC waveform?",
    "a": "The equivalent DC value that would produce the same heating effect (I²R)",
    "opts": [
      "The average of a full sine wave (zero)",
      "The equivalent DC value that would produce the same heating effect (I²R)",
      "The absolute maximum peak",
      "The frequency of the wave"
    ],
    "exp": "Because AC fluctuates, RMS gives us a meaningful value for power calculations.",
    "cat": "SMPS",
    "id": "T08E_254"
  },
  {
    "q": "If an AC supply is rated at 440V RMS, what is its approximate Peak Voltage?",
    "a": "622 Volts",
    "opts": [
      "622 Volts",
      "311 Volts",
      "880 Volts",
      "440 Volts"
    ],
    "exp": "Vpeak = Vrms x √2 (440 x 1.414 = 622V). Cable insulation must withstand this peak.",
    "cat": "SMPS",
    "id": "T08E_255"
  },
  {
    "q": "What is the function of a Surge Arrester?",
    "a": "It clamps transient over-voltages to a safe level, diverting the excess energy to earth",
    "opts": [
      "It clamps transient over-voltages to a safe level, diverting the excess energy to earth",
      "It stores power like a battery",
      "It smooths rectifier ripple",
      "It increases voltage during brownouts"
    ],
    "exp": "Using a Metal Oxide Varistor (MOV), it acts as an open circuit normally but conducts heavily during voltage spikes.",
    "cat": "SMPS",
    "id": "T08E_256"
  },
  {
    "q": "What material is 'Ebonite', sometimes found in older shipboard electrical installations?",
    "a": "Hard, vulcanized rubber used as an electrical insulator",
    "opts": [
      "A type of silicon dopant",
      "A cooling gas",
      "A magnetic steel alloy",
      "Hard, vulcanized rubber used as an electrical insulator"
    ],
    "exp": "It was used for switchboard handles and busbar supports before modern plastics.",
    "cat": "SMPS",
    "id": "T08E_257"
  },
  {
    "q": "What is the purpose of an Impulse Voltage Generator (Marx Generator)?",
    "a": "To produce high-voltage, short-duration pulses (simulating lightning) for insulation testing",
    "opts": [
      "To generate stable DC",
      "To power the ship's radar",
      "To produce high-voltage, short-duration pulses (simulating lightning) for insulation testing",
      "To run the main propulsion"
    ],
    "exp": "It charges capacitors in parallel and discharges them in series to create a massive test voltage pulse.",
    "cat": "SMPS",
    "id": "T08E_258"
  },
  {
    "q": "What component in an SMPS provides electrical isolation between the mains supply and the DC output?",
    "a": "The high-frequency transformer",
    "opts": [
      "The input rectifier",
      "The switching MOSFET",
      "The high-frequency transformer",
      "The output filter capacitor"
    ],
    "exp": "The transformer transfers energy magnetically, ensuring no direct wire connection to the dangerous mains.",
    "cat": "SMPS",
    "id": "T08E_259"
  },
  {
    "q": "How does an SMPS maintain a constant output voltage when the load changes?",
    "a": "By using a feedback loop to adjust the PWM duty cycle of the switching transistor",
    "opts": [
      "By shutting off briefly",
      "By using a feedback loop to adjust the PWM duty cycle of the switching transistor",
      "By changing the transformer turns ratio physically",
      "By adding more resistance"
    ],
    "exp": "If voltage drops, the controller widens the PWM pulses to deliver more energy through the transformer.",
    "cat": "SMPS",
    "id": "T08E_260"
  },
  {
    "q": "A synchroconverter uses thyristor stages at both its rectifier and inverter ends. What type of commutation does it rely on?",
    "a": "Natural (line) commutation — the supply voltage turns off each thyristor",
    "opts": [
      "Forced commutation using capacitors",
      "Gate turn-off (GTO) switching",
      "Natural (line) commutation — the supply voltage turns off each thyristor",
      "PWM pulse-width modulation"
    ],
    "exp": "Thyristors in a synchroconverter cannot self-extinguish — they rely on natural line voltage reversal to commutate. No forced turn-off circuit is needed. This limits operating frequency but suits high-power drives.",
    "cat": "VFD",
    "id": "T08_601"
  },
  {
    "q": "In a synchroconverter, what component forms the DC link between the rectifier stage and the inverter stage?",
    "a": "A large series inductor (DC reactor), making it a current-source drive",
    "opts": [
      "A large electrolytic capacitor, making it a voltage-source drive",
      "A large series inductor (DC reactor), making it a current-source drive",
      "A resistor bank for voltage division",
      "A transformer for isolation"
    ],
    "exp": "Unlike a PWM IGBT drive (voltage-source, DC capacitor), the synchroconverter's DC link is an inductor which forces a constant DC current. Motor torque is controlled by varying this DC current via the rectifier firing angle.",
    "cat": "VFD",
    "id": "T08_602"
  },
  {
    "q": "In a synchroconverter drive, how is motor TORQUE controlled?",
    "a": "By adjusting the firing angle of the controlled rectifier, which changes the DC link current magnitude",
    "opts": [
      "By varying the PWM duty cycle of the inverter IGBTs",
      "By changing the motor supply frequency",
      "By adjusting the firing angle of the controlled rectifier, which changes the DC link current magnitude",
      "By varying the DC link capacitor voltage"
    ],
    "exp": "Torque ∝ DC link current × motor flux. The rectifier thyristor firing angle controls how much DC current flows. Advancing the firing angle → more current → more torque. Speed is set by how fast the inverter thyristors commutate the current into motor windings.",
    "cat": "VFD",
    "id": "T08_603"
  },
  {
    "q": "Why is a megger used for insulation resistance testing rather than a standard multimeter?",
    "a": "A megger applies 500V DC or more, which stresses insulation at near-working-voltage levels and can reveal degradation that a 3V multimeter cannot detect",
    "opts": [
      "A megger is smaller and more portable",
      "A megger applies 500V DC or more, which stresses insulation at near-working-voltage levels and can reveal degradation that a 3V multimeter cannot detect",
      "A megger measures in milliohms, giving higher precision",
      "A multimeter damages insulation when connected"
    ],
    "exp": "Insulation that appears sound at 3V (multimeter battery voltage) may break down at 440V. The megger applies a high DC voltage (typically 500V for LV equipment), revealing moisture paths, cracks, and degradation that only manifest under realistic operating stress.",
    "cat": "Testing",
    "id": "T08_604"
  },
  {
    "q": "What is the standard test voltage used by a megger for testing LV equipment insulation resistance?",
    "a": "500V DC",
    "opts": [
      "12V DC",
      "50V AC",
      "500V DC",
      "1000V AC"
    ],
    "exp": "500V DC is the standard for LV (400–440V) systems. HV equipment uses 1000V, 2500V or 5000V DC meggering. The voltage must be high enough to stress insulation realistically — equal to or greater than the working voltage.",
    "cat": "Testing",
    "id": "T08_605"
  },
  {
    "q": "Before meggering a generator's insulation, what critical precaution must be taken regarding the AVR?",
    "a": "Disconnect the AVR (and all electronic components) from the generator terminals — the 500V megger surge will destroy AVR semiconductors",
    "opts": [
      "Set the AVR to manual control mode",
      "Disconnect the AVR (and all electronic components) from the generator terminals — the 500V megger surge will destroy AVR semiconductors",
      "Increase AVR set-point voltage before testing",
      "Ensure AVR is in automatic mode to protect winding"
    ],
    "exp": "The megger applies up to 5kV on HV machines. Even 500V will irreversibly damage the zener diodes, transistors, and op-amps inside the AVR. Always disconnect AVR, PMT (permanent magnet generator), and any rectifier connections before meggering.",
    "cat": "Testing",
    "id": "T08_606"
  },
  {
    "q": "What minimum insulation resistance value is generally acceptable for a 440V LV machine?",
    "a": "1 MΩ (using the rule: 1 MΩ per kV + 1 MΩ = approx 1.44 MΩ minimum)",
    "opts": [
      "100 Ω",
      "10 kΩ",
      "1 MΩ (using the rule: 1 MΩ per kV + 1 MΩ = approx 1.44 MΩ minimum)",
      "100 MΩ"
    ],
    "exp": "The widely applied rule is: Minimum IR (MΩ) = kV rating + 1. For 440V (0.44 kV): 0.44 + 1 = 1.44 MΩ. In practice, a reading below 1 MΩ on any circuit should be investigated immediately before energising.",
    "cat": "Testing",
    "id": "T08_607"
  },
  {
    "q": "In an AVR electronic control circuit, what component provides the stable reference voltage against which the actual generator output voltage is compared?",
    "a": "A zener diode",
    "opts": [
      "A potentiometer",
      "A zener diode",
      "A transformer centre-tap",
      "A resistor voltage divider"
    ],
    "exp": "The zener diode operates in reverse breakdown at a fixed voltage, providing a rock-solid reference that represents the desired terminal voltage setpoint. The actual sensed voltage (rectified and smoothed generator output) is compared to this zener reference to generate an error signal.",
    "cat": "Semiconductors",
    "id": "T08_608"
  },
  {
    "q": "In an AVR, the error signal from the comparator is used to control what power device, which then adjusts generator excitation?",
    "a": "A thyristor (SCR) whose firing angle is varied to control the exciter field current",
    "opts": [
      "A capacitor bank switched in or out",
      "A diode rectifier bridge",
      "A thyristor (SCR) whose firing angle is varied to control the exciter field current",
      "A contactor in the main circuit breaker"
    ],
    "exp": "The error amplifier output drives the gate of a power thyristor in the exciter field circuit. More error (voltage too low) → earlier firing angle → more field current → higher excitation → voltage restored. This is a closed-loop electronic feedback system using the thyristor as the power-controlling element.",
    "cat": "Semiconductors",
    "id": "T08_609"
  },
  {
    "q": "A brushless alternator's rotating rectifier diode fails OPEN CIRCUIT. What is the effect on generator output?",
    "a": "Partial loss of excitation causing reduced or unstable output voltage; AVR will increase field current attempting to compensate",
    "opts": [
      "Immediate voltage collapse and total loss of output",
      "Partial loss of excitation causing reduced or unstable output voltage; AVR will increase field current attempting to compensate",
      "Output voltage increases beyond limits",
      "No effect — the other diodes compensate fully"
    ],
    "exp": "An open-circuit diode removes one conducting path from the rotating rectifier bridge. The remaining diodes still conduct, but excitation becomes asymmetrical with AC ripple appearing in the DC field current. The AVR may partially compensate. Symptoms: slight voltage instability, increased AVR output current, possible AC hum from the alternator.",
    "cat": "Machines",
    "id": "T08_610"
  },
  {
    "q": "A brushless alternator's rotating rectifier diode fails SHORT CIRCUIT. What is the most likely consequence?",
    "a": "The diode short-circuits the exciter output causing large circulating currents; fuse in rotor circuit blows; severe voltage collapse",
    "opts": [
      "The generator output voltage rises dangerously",
      "The diode short-circuits the exciter output causing large circulating currents; fuse in rotor circuit blows; severe voltage collapse",
      "The AVR compensates fully with no visible effect",
      "Only a slight reduction in efficiency"
    ],
    "exp": "A shorted diode creates a direct short across the AC exciter output. This causes very high circulating currents, likely blowing the rotor fuse (if fitted). Without excitation, the generator loses output voltage completely. Multiple shorted diodes could cause rotor winding damage.",
    "cat": "Machines",
    "id": "T08_611"
  },
  {
    "q": "How are rotating rectifier diodes on a brushless alternator tested?",
    "a": "The alternator must be stopped. Each diode is disconnected and tested individually with a multimeter in diode mode — forward drop ~0.5–0.7V, reverse should read OL",
    "opts": [
      "Megger at 500V while the machine is running",
      "Current clamp on the rotor shaft while at full load",
      "The alternator must be stopped. Each diode is disconnected and tested individually with a multimeter in diode mode — forward drop ~0.5–0.7V, reverse should read OL",
      "Connect an oscilloscope to the main terminals and observe waveform"
    ],
    "exp": "There is no way to test rotating diodes while the machine is running — they spin inside the rotor. The machine must be stopped, opened, and each diode tested with a multimeter. A shorted diode reads near 0V in both directions; an open diode reads OL in both directions.",
    "cat": "Machines",
    "id": "T08_612"
  }

]);
window.loadQuizzes("T11_PowerFactor", [
  {
    "q": "What does Apparent Power (kVA) represent?",
    "a": "Total power supplied - vector sum of active (kW) and reactive (kVAR) power",
    "opts": ["Useful power converted into mechanical work or heat", "Magnetising power oscillating without doing net work", "Total power supplied - vector sum of active (kW) and reactive (kVAR) power", "Mechanical shaft power from the prime mover"],
    "exp": "kVA = sqrt(kW2 + kVAR2). Generator must supply both active power doing real work AND reactive power sustaining magnetic fields. Neither alone represents generator's actual burden.",
    "cat": "POWER_TRIANGLE",
    "id": "T11P_001"
  },
  {
    "q": "Ship generator: 800 kW active + 600 kVAR reactive. Apparent power?",
    "a": "1000 kVA",
    "opts": ["200 kVA", "480 kVA", "1000 kVA", "1400 kVA"],
    "exp": "kVA = sqrt(8002 + 6002) = sqrt(640000+360000) = sqrt(1000000) = 1000 kVA. Classic 3-4-5 right triangle scaled by 200. PF = 800/1000 = 0.8.",
    "cat": "POWER_TRIANGLE",
    "id": "T11P_002"
  },
  {
    "q": "Why are marine alternators rated in kVA not kW?",
    "a": "kVA defines thermal and insulation limits (current x voltage) regardless of load power factor",
    "opts": ["kW ratings fluctuate with ambient temperature", "kVA accounts for prime mover mechanical losses", "kVA defines thermal and insulation limits (current x voltage) regardless of load power factor", "Alternators only supply reactive power which cannot be measured in kW"],
    "exp": "Winding heating = I2R. Current = kVA/voltage. Same kVA = same current = same heating regardless of PF. At PF 0.8, a generator hits full rated current (kVA limit) well before reaching full kW limit. Rating in kW would be meaningless without specifying PF.",
    "cat": "KVA_RATING",
    "id": "T11P_003"
  },
  {
    "q": "Primary negative consequence of low lagging PF (e.g. 0.6)?",
    "a": "Larger current needed for same kW - I2R heating losses, voltage drop, reduced generator capacity",
    "opts": ["Prime mover overspeeds - reactive power reverses shaft force", "System voltage rises uncontrollably damaging navigation equipment", "Larger current needed for same kW - I2R heating losses, voltage drop, reduced generator capacity", "Active power oscillates causing synchronizing panel to hunt"],
    "exp": "Low PF = high kVAR = high current for same kW. High current: I2R cable losses increase, voltage drops across cable impedance, generator hits kVA (current) limit before kW limit. Effective usable capacity is reduced.",
    "cat": "LOW_PF",
    "id": "T11P_004"
  },
  {
    "q": "Why is ship power factor almost always lagging?",
    "a": "Majority of loads are induction motors - inherently inductive - draw lagging magnetising current",
    "opts": ["Long cables create parasitic capacitance making current lead voltage", "AVRs tuned to delay voltage waveform for stability", "Majority of loads are induction motors - inherently inductive - draw lagging magnetising current", "Electric heaters and incandescent lighting dominate load profile"],
    "exp": "Induction motors (pumps, fans, compressors, winches) make up 70%+ of ship loads. All draw reactive current (kVAR) for magnetic fields - current lags voltage. Typical ship PF = 0.7-0.85 lagging at sea.",
    "cat": "LOW_PF",
    "id": "T11P_005"
  },
  {
    "q": "Power factor of a purely inductive circuit?",
    "a": "0 (lagging)",
    "opts": ["1.0 (unity)", "0.5 (lagging)", "0 (leading)", "0 (lagging)"],
    "exp": "Purely inductive: current lags voltage by 90 degrees. PF = cos(90) = 0. All power is reactive (kVAR), zero active power (kW = 0). Purely resistive = PF 1.0. Purely capacitive = PF 0 leading (current leads voltage by 90).",
    "cat": "POWER_TRIANGLE",
    "id": "T11P_006"
  },
  {
    "q": "What is a synchronous condenser and how does it correct power factor?",
    "a": "Overexcited synchronous motor running without mechanical load - generates leading kVAR to cancel lagging kVAR",
    "opts": ["Static capacitor bank auto-switched by thyristors", "Heat exchanger condensing moisture to prevent winding shorts", "Overexcited synchronous motor running without mechanical load - generates leading kVAR to cancel lagging kVAR", "Active front-end rectifier limiting generator to 1.0 PF"],
    "exp": "Synchronous condenser = synchronous motor on busbars, no mechanical load, overexcited DC field. Overexcitation produces leading kVAR which cancels lagging kVAR from motors. Field current adjustment = variable kVAR output from near-zero to maximum.",
    "cat": "CORRECTION",
    "id": "T11P_007"
  },
  {
    "q": "Main advantage of synchronous condenser over static capacitor banks?",
    "a": "Continuously variable smooth kVAR output by adjusting field current - capacitors switch in fixed blocks only",
    "opts": ["Zero maintenance - no moving parts", "Capacitors consume massive active power (kW) to operate", "Synchronous condenser is smaller and cheaper to install", "Continuously variable smooth kVAR output by adjusting field current - capacitors switch in fixed blocks only"],
    "exp": "Synchronous condenser: continuously variable precise kVAR by adjusting field current rheostat. Capacitor banks: fixed-step correction - you add or remove a block at a time. For fine reactive power control on varying loads, synchronous condenser is more flexible.",
    "cat": "CORRECTION",
    "id": "T11P_008"
  },
  {
    "q": "Where does reactive power (kVAR) actually go in an induction motor circuit?",
    "a": "Oscillates between generator and motor each half-cycle sustaining the magnetic field - not consumed as heat",
    "opts": ["Consumed as heat in stator winding resistance", "Converted into useful mechanical torque", "Oscillates between generator and motor each half-cycle sustaining the magnetic field - not consumed as heat", "Leaks through hull earthing - why bonding is required"],
    "exp": "kVAR is not dissipated. Each half-cycle energy flows to the inductive load (building magnetic field) then returns to source (field collapsing). But the higher current kVAR demands still causes real I2R losses in cables and windings.",
    "cat": "POWER_TRIANGLE",
    "id": "T11P_009"
  },
  {
    "q": "IEC/IEEE 80005-1 maximum harmonic distortion limits for HVSC?",
    "a": "THD <= 5% total; no single harmonic > 3%",
    "opts": ["THD <= 10%; single harmonic <= 5%", "THD <= 3%; single harmonic <= 1%", "THD <= 5% total; no single harmonic > 3%", "No limit - only voltage must stay within +/-10% of nominal"],
    "exp": "IEC 80005-1 (High Voltage Shore Connection standard): Total Harmonic Distortion <= 5% at all loads. No individual harmonic may exceed 3%. Prevents transformer core saturation and motor overheating from harmonic currents in the ship's distribution.",
    "cat": "HARMONICS",
    "id": "T11P_010"
  },
  {
    "q": "Which harmonics are most prominent from a standard 6-pulse VFD?",
    "a": "5th and 7th harmonics",
    "opts": ["2nd and 3rd", "3rd and 9th", "5th and 7th harmonics", "10th and 12th"],
    "exp": "6-pulse rectifier harmonics formula: h = (n x pulses) +/- 1. p=6: (1x6)-1=5th, (1x6)+1=7th. Next set: 11th and 13th. 5th and 7th are most dominant. 12-pulse drive (two 6-pulse with 30-degree phase shift) eliminates 5th and 7th, leaving 11th and 13th.",
    "cat": "HARMONICS",
    "id": "T11P_011"
  },
  {
    "q": "How are 5th and 7th VFD harmonics mitigated?",
    "a": "Active Front End (AFE) rectifiers, 12/24-pulse drive designs, or passive/active harmonic filters",
    "opts": ["Decrease system frequency from 60Hz to 50Hz", "Install larger NER to absorb harmonic frequencies", "Run emergency generator in parallel to provide clean sine wave", "Active Front End (AFE) rectifiers, 12/24-pulse drive designs, or passive/active harmonic filters"],
    "exp": "AFE: IGBT rectifier draws near-sinusoidal current - minimal harmonics. 12-pulse: two 6-pulse with phase-shifted transformers cancel 5th/7th. Passive filters: tuned LC circuits absorb specific harmonics at source. Active filters: inject equal-opposite harmonic currents.",
    "cat": "HARMONICS",
    "id": "T11P_012"
  },
  {
    "q": "Gen A: 600 kW, Gen B: 200 kW, same voltage. How to equalise kW?",
    "a": "Adjust governor droop - increase speed trimmer on Gen B or decrease on Gen A",
    "opts": ["Adjust AVR voltage trimmer on Gen B to force more active power", "Adjust governor droop - increase speed trimmer on Gen B or decrease on Gen A", "Trip Gen B and re-synchronise at higher frequency", "Do nothing - they will equalise naturally"],
    "exp": "Unequal kW = governor/prime mover issue. More fuel to Gen B (increase governor) while decreasing Gen A. NEVER touch AVR to fix kW imbalance - AVR controls kVAR reactive power sharing, not kW active power sharing.",
    "cat": "LOAD_SHARING",
    "id": "T11P_013"
  },
  {
    "q": "Gens share 400 kW each equally. Gen1: 350A PF 0.7. Gen2: 250A PF 0.9. What to adjust?",
    "a": "Adjust AVR droop - decrease voltage trimmer on Gen1 and increase on Gen2 to balance kVAR",
    "opts": ["Adjust governor droop - decrease speed of Gen1", "Adjust AVR droop - decrease voltage trimmer on Gen1 and increase on Gen2 to balance kVAR", "Disconnect synchronous condenser - causing phase imbalance", "Turn off preferential trip relay"],
    "exp": "Equal kW but different currents and PF = unequal kVAR sharing. Gen1 carrying too much reactive load (lower PF). Fix: reduce Gen1 AVR excitation (less kVAR output), increase Gen2 AVR. Governor not needed - kW sharing is already balanced.",
    "cat": "LOAD_SHARING",
    "id": "T11P_014"
  },
  {
    "q": "What is the purpose of droop in governor and AVR control?",
    "a": "Allows slight speed/voltage drop as load increases - prevents generator hunting and ensures stable proportional load sharing",
    "opts": ["Forces absolute isochronous constant frequency regardless of load", "Automatically sheds non-essential loads at 90% rated capacity", "Allows slight speed/voltage drop as load increases - prevents generator hunting and ensures stable proportional load sharing", "Delays emergency generator start to ensure main bus is dead first"],
    "exp": "Without droop, parallel generators hunt - one takes all load while other idles, continuously exchanging. 3-5% droop creates a stable load-sharing intersection: each machine's load curve meets the system frequency at a defined stable point.",
    "cat": "LOAD_SHARING",
    "id": "T11P_015"
  },
  {
    "q": "Generator loses DC field excitation while running in parallel - what happens?",
    "a": "Stops generating kVAR and starts absorbing kVAR from busbar - acts as induction generator",
    "opts": ["Trips immediately on reverse power relay", "Stops generating kVAR and starts absorbing kVAR from busbar - acts as induction generator", "Generates massive leading kVAR spike driving bus voltage high", "kW drops to zero but continues supplying half ship kVAR"],
    "exp": "Loss of excitation: rotor magnetic field collapses. Machine stays synchronised by drawing magnetising kVAR from the healthy generator - becomes an induction generator. kVAR meter reverses (negative/absorbing). Under-excitation relay should operate.",
    "cat": "FAULTS",
    "id": "T11P_016"
  },
  {
    "q": "Which relay activates first on generator loss of field excitation?",
    "a": "Under-excitation relay (Loss of Field relay)",
    "opts": ["Reverse Power Relay (RPR)", "Under-excitation relay (Loss of Field relay)", "Over-voltage relay (OVR)", "Under-frequency relay (UFR)"],
    "exp": "Under-excitation relay detects machine absorbing kVAR instead of producing it. RPR often does NOT trip - active power (kW) may still flow forward from prime mover. Loss of field \u2260 reverse active power. Under-frequency would not activate unless speed drops.",
    "cat": "FAULTS",
    "id": "T11P_017"
  },
  {
    "q": "Form factor of a pure sinusoidal AC waveform?",
    "a": "1.11 - fundamental constant in transformer EMF equation (E = 4.44 x f x N x phi)",
    "opts": ["1.414 - peak voltage stress on cable insulation", "0.8 - standard motor design PF", "1.732 - phase to line voltage conversion in star", "1.11 - fundamental constant in transformer EMF equation (E = 4.44 x f x N x phi)"],
    "exp": "Form factor = Vrms/Vavg = pi/(2*sqrt2) = 1.11. The 4.44 in transformer EMF equation = 4 x 1.11. If harmonics distort the waveform above 1.11, transformer flux increases causing core saturation and overheating (V/f ratio increases).",
    "cat": "HARMONICS",
    "id": "T11P_018"
  },
  {
    "q": "Two isolated generators: PF 0.8 and PF 0.7. What does this indicate before paralleling?",
    "a": "Generator at 0.7 PF has more inductive loads (higher kVAR demand) on its bus section",
    "opts": ["Generator at 0.7 PF has faster prime mover needing governor adjustment", "Generator at 0.8 PF has faulty AVR failing to produce active power", "0.1 PF difference will cause immediate short circuit on paralleling", "Generator at 0.7 PF has more inductive loads (higher kVAR demand) on its bus section"],
    "exp": "In isolation, PF is determined solely by connected load. PF 0.7 = more reactive loads on that bus. When paralleled, kW sharing controlled by governor droop, kVAR sharing by AVR droop settings.",
    "cat": "LOAD_SHARING",
    "id": "T11P_019"
  },
  {
    "q": "Generator runs unusually hot but kW and kVAR meters look balanced. First check?",
    "a": "Individual phase ammeters - possible single-phase imbalance hidden by averaged 3-phase meter readings",
    "opts": ["Anti-condensation heaters accidentally left on", "Adjust AVR droop to shed 50% kW load", "Inject test signal into reverse power relay", "Individual phase ammeters - possible single-phase imbalance hidden by averaged 3-phase meter readings"],
    "exp": "If 3-phase meters look balanced but machine overheats: could be single-phase imbalance (one phase carries all load, average looks normal), meter miscalibration, or harmonic heating not shown in fundamental-frequency meters. Phase ammeters reveal true per-phase currents.",
    "cat": "FAULTS",
    "id": "T11P_020"
  },
  {
    "q": "How is power factor mathematically defined in an AC circuit?",
    "a": "The cosine of the phase angle (cos phi) between voltage and current.",
    "opts": ["The ratio of Reactive Power to Active Power.", "The cosine of the phase angle (cos phi) between voltage and current.", "The tangent of the phase angle (tan phi) between voltage and current.", "The sine of the phase angle (sin phi) between active and reactive power."],
    "exp": "Power factor is the ratio of Active Power (kW) to Apparent Power (kVA), which mathematically equals the cosine of the phase angle between the supply voltage and the current.",
    "cat": "PF_Theory",
    "id": "T11P_021"
  },
  {
    "q": "What does a unity power factor (1.0) signify in an AC electrical circuit?",
    "a": "The current and voltage waveforms are exactly in phase, representing a purely resistive load.",
    "opts": ["The current waveform leads the voltage waveform by exactly 90 degrees.", "The circuit is drawing maximum reactive power from the generator.", "The current and voltage waveforms are exactly in phase, representing a purely resistive load.", "The current waveform lags the voltage waveform by exactly 90 degrees."],
    "exp": "A unity power factor means there is no phase shift between voltage and current, which occurs in purely resistive circuits like heaters where all power is active.",
    "cat": "PF_Theory",
    "id": "T11P_022"
  },
  {
    "q": "Why do induction motors cause the overall power factor of a ship to lag?",
    "a": "Their inherent inductance delays the current, causing it to lag behind the supply voltage.",
    "opts": ["The resistance of their copper windings slows down the voltage wave.", "Their inherent inductance delays the current, causing it to lag behind the supply voltage.", "They act as massive capacitors, storing electrical charge during each cycle.", "The physical rotation of the motor pushes the current waveform ahead of the voltage."],
    "exp": "Induction motors require a magnetic field to operate. The inductive nature of the windings delays the alternating current, causing it to lag the voltage, resulting in a lagging power factor.",
    "cat": "PF_Theory",
    "id": "T11P_023"
  },
  {
    "q": "Which electrical component causes a leading power factor by making the current lead the voltage?",
    "a": "Capacitors.",
    "opts": ["Heating elements.", "Induction motors.", "Capacitors.", "Transformers."],
    "exp": "In a capacitive circuit, the current leads the voltage. This is why capacitor banks are used to provide leading reactive power to correct a lagging system power factor.",
    "cat": "PF_Theory",
    "id": "T11P_024"
  },
  {
    "q": "Physically, what does it mean if a ship electrical system operates at a power factor of 0.7?",
    "a": "Only 70% of the apparent power (kVA) supplied by the generator is doing useful active work (kW).",
    "opts": ["The electrical system is losing 30% of its power strictly as heat in the distribution cables.", "Only 70% of the apparent power (kVA) supplied by the generator is doing useful active work (kW).", "The voltage has dropped to 70% of the rated busbar voltage due to inductive loads.", "The ship generators are running at 70% of their maximum mechanical speed."],
    "exp": "A power factor of 0.7 means that the ratio of active power (useful work) to apparent power (total power supplied) is 70%. The remaining portion is reactive power sustaining magnetic fields.",
    "cat": "PF_Theory",
    "id": "T11P_025"
  },
  {
    "q": "How does reactive power (kVAR) impact the capacity of a ship generator?",
    "a": "It consumes generator current capacity without doing any useful mechanical work.",
    "opts": ["It increases the active power output limit of the generator.", "It permanently dissipates as heat inside the generator core, destroying the stator.", "It consumes generator current capacity without doing any useful mechanical work.", "It buffers the generator, allowing it to handle sudden short circuits safely."],
    "exp": "Reactive power (kVAR) must be supplied by the generator to sustain magnetic fields in motors. It increases the total current drawn (kVA), hitting the generator thermal limits before maximum active power (kW) is reached.",
    "cat": "PF_Theory",
    "id": "T11P_026"
  },
  {
    "q": "Why are marine generators rated in Apparent Power (kVA) rather than Active Power (kW)?",
    "a": "Because the generator thermal and insulation limits are determined by total current and voltage, regardless of the load power factor.",
    "opts": ["Because the generator thermal and insulation limits are determined by total current and voltage, regardless of the load power factor.", "Because kW meters are not accurate enough to determine the prime mover output.", "Because a kW rating would only apply if the ship had a purely inductive load.", "Because kVA automatically factors in the mechanical losses of the diesel engine."],
    "exp": "A generator physical limits are dictated by maximum current (copper heating) and maximum voltage (insulation). KVA (V x I) accurately reflects these limits, whereas kW output depends entirely on the connected load power factor.",
    "cat": "PF_Theory",
    "id": "T11P_027"
  },
  {
    "q": "What is the typical operating power factor range for a standard cargo ship while at sea?",
    "a": "0.7 to 0.85 lagging.",
    "opts": ["Exactly 1.0 (Unity).", "0.85 to 0.95 leading.", "0.4 to 0.6 lagging.", "0.7 to 0.85 lagging."],
    "exp": "Because over 70% of a ship loads are induction motors (pumps, compressors, fans), the overall system naturally operates with a lagging power factor, typically between 0.7 and 0.85.",
    "cat": "PF_Theory",
    "id": "T11P_028"
  },
  {
    "q": "In a phasor diagram, how is the active (real) component of the total current calculated?",
    "a": "I times cos phi",
    "opts": ["I divided by cos phi", "I times cos phi", "I divided by sin phi", "I times sin phi"],
    "exp": "Using trigonometry on the current phasor, the component of current doing useful work (in phase with voltage) is determined by multiplying the total current (I) by the cosine of the phase angle.",
    "cat": "PF_Theory",
    "id": "T11P_029"
  },
  {
    "q": "Which formula represents the reactive (magnetizing) component of the total current in an AC circuit phasor diagram?",
    "a": "I times sin phi",
    "opts": ["I times tan phi", "V times cos phi", "I times cos phi", "I times sin phi"],
    "exp": "The reactive component of the current, which is 90 degrees out of phase with the voltage and sustains magnetic fields, is calculated as I times sin phi.",
    "cat": "PF_Theory",
    "id": "T11P_030"
  },
  {
    "q": "What is the specific effect of an unloaded transformer on the ship overall power factor?",
    "a": "It draws a highly reactive magnetizing current, which significantly lowers the system power factor.",
    "opts": ["It draws a leading current that naturally corrects the power factor of the induction motors.", "It stops drawing any current, effectively removing itself from the power factor calculation.", "It perfectly balances active and reactive power, drawing the system closer to unity.", "It draws a highly reactive magnetizing current, which significantly lowers the system power factor."],
    "exp": "A transformer at no-load primarily draws magnetizing current to sustain its core flux. This current is almost entirely reactive (lagging by nearly 90 degrees), which drags the system overall power factor down.",
    "cat": "PF_Theory",
    "id": "T11P_031"
  },
  {
    "q": "What is the theoretical power factor of a purely inductive electrical circuit?",
    "a": "0 (zero) lagging.",
    "opts": ["1.0 (unity).", "0 (zero) lagging.", "0.5 lagging.", "Infinity."],
    "exp": "In a purely inductive circuit, the current lags the voltage by exactly 90 degrees. Because cos(90) = 0, the power factor is 0 lagging, meaning all power is reactive.",
    "cat": "PF_Theory",
    "id": "T11P_032"
  },
  {
    "q": "What is the power factor of a purely capacitive circuit?",
    "a": "0 (zero) leading.",
    "opts": ["0.8 leading.", "0 (zero) lagging.", "1.0 (unity).", "0 (zero) leading."],
    "exp": "In a purely capacitive circuit, the current leads the voltage by exactly 90 degrees. The cosine of 90 degrees is 0, so the power factor is 0 leading.",
    "cat": "PF_Theory",
    "id": "T11P_033"
  },
  {
    "q": "Which mathematical relationship correctly defines the right-angled Power Triangle?",
    "a": "kVA squared = kW squared + kVAR squared",
    "opts": ["kW squared = kVA squared + kVAR squared", "kVA squared = kW squared + kVAR squared", "kVAR squared = kW squared + kVA squared", "kVA = kW + kVAR"],
    "exp": "According to the Pythagorean theorem applied to the power triangle, the square of the Apparent Power (kVA) equals the sum of the squares of the Active Power (kW) and the Reactive Power (kVAR).",
    "cat": "PF_Theory",
    "id": "T11P_034"
  },
  {
    "q": "Why is the power factor on a ship almost always lagging rather than leading?",
    "a": "Because over 70% of the ship electrical loads are induction motors, which are inherently inductive.",
    "opts": ["Because the long cable runs on ships act as massive capacitors.", "Because shipboard generators are designed to only produce lagging current.", "Because over 70% of the ship electrical loads are induction motors, which are inherently inductive.", "Because maritime regulations legally prohibit the use of leading power factors."],
    "exp": "The vast majority of consumers onboard (pumps, fans, compressors) are driven by squirrel-cage induction motors, which depend on inductive magnetic fields and naturally draw a lagging current.",
    "cat": "PF_Theory",
    "id": "T11P_035"
  },
  {
    "q": "If a ship generator is rated for 1000 kVA and the overall system power factor is 0.8 lagging, what is the maximum active power it can deliver without exceeding its thermal current rating?",
    "a": "800 kW.",
    "opts": ["200 kW.", "1250 kW.", "800 kW.", "1000 kW."],
    "exp": "Active Power (kW) = Apparent Power (kVA) x Power Factor. Therefore, 1000 kVA x 0.8 = 800 kW maximum active power output before the generator reaches its current limit.",
    "cat": "PF_Theory",
    "id": "T11P_036"
  },
  {
    "q": "Which type of power is actively converted into mechanical shaft torque in a ship induction motor?",
    "a": "Active Power (kW).",
    "opts": ["Active Power (kW).", "Magnetizing Power.", "Reactive Power (kVAR).", "Apparent Power (kVA)."],
    "exp": "Active power (kW) is the real, working power in the circuit that is converted into mechanical energy (shaft torque) or heat.",
    "cat": "PF_Theory",
    "id": "T11P_037"
  },
  {
    "q": "Which best describes reactive power (kVAR) in an AC electrical system?",
    "a": "It continuously oscillates back and forth between the source and the load to maintain magnetic fields.",
    "opts": ["It continuously oscillates back and forth between the source and the load to maintain magnetic fields.", "It permanently dissipates into the environment as acoustic noise and mechanical vibration.", "It is the portion of power strictly converted into heat by incandescent lighting.", "It is the active power stored in the generator rotor for emergency overloads."],
    "exp": "Reactive power (kVAR) does no net mechanical work; instead, it oscillates between the generator and inductive loads every half cycle to establish and collapse magnetic fields.",
    "cat": "PF_Theory",
    "id": "T11P_038"
  },
  {
    "q": "Why does operating a ship electrical grid at a chronically low lagging power factor cause equipment issues?",
    "a": "It requires a larger total current to supply the same active power, drastically increasing I squared R heating losses.",
    "opts": ["It requires a larger total current to supply the same active power, drastically increasing I squared R heating losses.", "It forces the generator governor to over-speed the prime mover to compensate.", "It directly breaks down the insulation matrix of the cables via chemical decomposition.", "It creates intense friction inside the magnetic core of the generator, destroying the bearings."],
    "exp": "A low power factor means more Apparent Power (kVA) is needed for the same Active Power (kW). This larger kVA translates directly into higher total current, squaring the heat dissipation (I squared R losses) in conductors.",
    "cat": "PF_Theory",
    "id": "T11P_039"
  },
  {
    "q": "In a phasor diagram representing a ship typical electrical load, how are the voltage and current vectors positioned?",
    "a": "The current vector rotates behind the voltage reference vector by the phase angle phi.",
    "opts": ["The current vector rotates behind the voltage reference vector by the phase angle phi.", "The current vector is completely stationary while the voltage vector rotates.", "The current vector rotates ahead of the voltage reference vector by the phase angle phi.", "The voltage and current vectors rotate exactly parallel to each other."],
    "exp": "Because ships primarily use induction motors which cause a lagging power factor, the current phasor lags or rotates behind the voltage reference phasor by the angle phi.",
    "cat": "PF_Theory",
    "id": "T11P_040"
  },
  {
    "q": "How is the current (I) drawn by a single-phase AC load calculated if Active Power (P), Voltage (V), and Power Factor (cos phi) are known?",
    "a": "I = P / (V x cos phi)",
    "opts": ["I = V / (P x cos phi)", "I = (P x cos phi) / V", "I = P / (V x cos phi)", "I = P x V x cos phi"],
    "exp": "Active power in a single-phase circuit is P = V x I x cos phi. Rearranging to solve for current gives I = P / (V x cos phi), showing that current is inversely proportional to the power factor.",
    "cat": "PF_Calculation",
    "id": "T11P_041"
  },
  {
    "q": "If a ship electrical load remains constant in kW, but the power factor drops from unity (1.0) to 0.7, what is the approximate effect on the line current?",
    "a": "The current increases by approximately 43%.",
    "opts": ["The current remains the same, but voltage drops by 43%.", "The current increases by approximately 43%.", "The current increases by 70%.", "The current decreases by 30%."],
    "exp": "Current is inversely proportional to power factor for a constant kW load. The multiplier is 1 / 0.7 = 1.428 (approximately 1.43). This means the new current is 1.43 times the original, which is a 43% increase.",
    "cat": "PF_Calculation",
    "id": "T11P_042"
  },
  {
    "q": "What is the correct formula to calculate Apparent Power (kVA) if Active Power (kW) and Power Factor (PF) are known?",
    "a": "kVA = kW / PF",
    "opts": ["kVA = kW / PF", "kVA = kW x PF", "kVA = kW - (1 - PF)", "kVA = PF / kW"],
    "exp": "Since Power Factor (PF) is the ratio of Active Power to Apparent Power (PF = kW / kVA), rearranging yields kVA = kW / PF.",
    "cat": "PF_Calculation",
    "id": "T11P_043"
  },
  {
    "q": "Which formula correctly represents the calculation of Reactive Power (kVAR) using Apparent Power (kVA) and the phase angle?",
    "a": "kVAR = kVA x sin phi",
    "opts": ["kVAR = kVA x tan phi", "kVAR = kVA x cos phi", "kVAR = kVA / sin phi", "kVAR = kVA x sin phi"],
    "exp": "Using trigonometry on the power triangle, the reactive power (opposite side) is calculated by multiplying the apparent power (hypotenuse) by the sine of the phase angle.",
    "cat": "PF_Calculation",
    "id": "T11P_044"
  },
  {
    "q": "According to the Pythagorean power triangle, what is the mathematical relationship between Apparent Power (kVA), Active Power (kW), and Reactive Power (kVAR)?",
    "a": "kVA squared = kW squared + kVAR squared",
    "opts": ["kVA squared = kW squared + kVAR squared", "kVAR squared = kW squared + kVA squared", "kVA = kW + kVAR", "kW squared = kVA squared + kVAR squared"],
    "exp": "In the power triangle, Apparent Power (kVA) is the hypotenuse. Following Pythagoras theorem, the square of the hypotenuse equals the sum of the squares of the other two sides.",
    "cat": "PF_Calculation",
    "id": "T11P_045"
  },
  {
    "q": "What is the correct formula for calculating the total Active Power (P) in a balanced 3-phase AC system?",
    "a": "P = root3 x V x I x cos phi",
    "opts": ["P = 3 x V x I x cos phi", "P = root3 x V x I x cos phi", "P = root3 x V x I x sin phi", "P = V x I x cos phi"],
    "exp": "For a balanced 3-phase system, the total active power is the product of root 3 (approx 1.732), the line voltage (V), the line current (I), and the power factor (cos phi).",
    "cat": "PF_Calculation",
    "id": "T11P_046"
  },
  {
    "q": "If a ship generator is rated at 1000 kVA and the electrical system operates at a power factor of 0.8 lagging, what is the maximum Active Power (kW) it can deliver without exceeding its current rating?",
    "a": "800 kW",
    "opts": ["200 kW", "1000 kW", "1250 kW", "800 kW"],
    "exp": "Active Power (kW) = Apparent Power (kVA) x Power Factor. Therefore, 1000 kVA x 0.8 = 800 kW. Supplying more than 800 kW at this power factor would overload the generator current rating.",
    "cat": "PF_Calculation",
    "id": "T11P_047"
  },
  {
    "q": "What is the approximate full load current of a 250 kW, 440V, 3-phase induction motor operating at 0.85 power factor and 0.94 efficiency?",
    "a": "410.6 A",
    "opts": ["410.6 A", "483.1 A", "386.4 A", "328.5 A"],
    "exp": "Input power: P_in = 250 kW / 0.94 = 265.96 kW. Then: I = P_in / (root3 x V x PF) = 265,960 / (1.732 x 440 x 0.85) = 265,960 / 647.77 = approximately 410.6 Amps.",
    "cat": "PF_Calculation",
    "id": "T11P_048"
  },
  {
    "q": "An AC circuit consumes 800 kW of active power and 600 kVAR of reactive power. What is the total apparent power (kVA) supplied by the generator?",
    "a": "1000 kVA",
    "opts": ["1000 kVA", "200 kVA", "480 kVA", "1400 kVA"],
    "exp": "Using the Pythagorean power triangle: kVA = root(kW squared + kVAR squared) = root(800 squared + 600 squared) = root(640000 + 360000) = root(1000000) = 1000 kVA.",
    "cat": "PF_Calculation",
    "id": "T11P_049"
  },
  {
    "q": "To correct a 100 kW load power factor from 0.75 lagging to 0.95 lagging, approximately how much capacitive reactive power (kVAR) must be added?",
    "a": "55.3 kVAR",
    "opts": ["88.2 kVAR", "55.3 kVAR", "121.0 kVAR", "32.9 kVAR"],
    "exp": "Current kVAR = 100 x tan(arccos 0.75) = 88.19 kVAR. Target kVAR = 100 x tan(arccos 0.95) = 32.86 kVAR. Capacitor must supply: 88.19 - 32.86 = 55.33 kVAR.",
    "cat": "PF_Calculation",
    "id": "T11P_050"
  },
  {
    "q": "A 440V, 3-phase system draws 100 A per phase at a power factor of 0.8 lagging. What is the approximate Active Power (kW) consumed?",
    "a": "61 kW",
    "opts": ["100 kW", "35 kW", "76 kW", "61 kW"],
    "exp": "Using the 3-phase power formula: P = root3 x V x I x cos phi = 1.732 x 440 x 100 x 0.8 = 60,966 Watts, approximately 61 kW.",
    "cat": "PF_Calculation",
    "id": "T11P_051"
  },
  {
    "q": "If an alternator supplies 500 kVA of apparent power and the active power meter reads 400 kW, what is the reactive power (kVAR) in the system?",
    "a": "300 kVAR",
    "opts": ["100 kVAR", "640 kVAR", "300 kVAR", "900 kVAR"],
    "exp": "Using: kVAR = root(kVA squared - kW squared) = root(500 squared - 400 squared) = root(250000 - 160000) = root(90000) = 300 kVAR.",
    "cat": "PF_Calculation",
    "id": "T11P_052"
  },
  {
    "q": "A ship 3-phase motor draws 125 A from a 440V supply, consuming 76.2 kW of active power. What is the approximate power factor of this motor?",
    "a": "0.80 lagging",
    "opts": ["0.80 lagging", "0.75 lagging", "0.90 lagging", "0.85 lagging"],
    "exp": "Using the 3-phase formula: PF = P / (root3 x V x I) = 76,200 / (1.732 x 440 x 125) = 76,200 / 95,260 = approximately 0.80.",
    "cat": "PF_Calculation",
    "id": "T11P_053"
  },
  {
    "q": "By what exact multiplier does the line current increase if a load power factor drops from unity (1.0) to 0.7, assuming kW load and voltage remain constant?",
    "a": "1.43",
    "opts": ["0.70", "1.70", "1.43", "2.14"],
    "exp": "Since current is inversely proportional to power factor (I = P / V x PF), the new current will be 1 / 0.7 times the original current. 1 / 0.7 = 1.428, approximately 1.43.",
    "cat": "PF_Calculation",
    "id": "T11P_054"
  },
  {
    "q": "If a 3-phase load consumes 30 kW of active power and 40 kVAR of reactive power, what is the total apparent power (kVA) drawn from the main switchboard?",
    "a": "50 kVA",
    "opts": ["50 kVA", "120 kVA", "70 kVA", "10 kVA"],
    "exp": "Using the Pythagorean formula: kVA = root(kW squared + kVAR squared) = root(30 squared + 40 squared) = root(900 + 1600) = root(2500) = 50 kVA.",
    "cat": "PF_Calculation",
    "id": "T11P_055"
  },
  {
    "q": "What is the active power (kW) of a generator operating at 1200 kVA with a power factor of 0.75 lagging?",
    "a": "900 kW",
    "opts": ["800 kW", "900 kW", "1600 kW", "1000 kW"],
    "exp": "Active power is calculated as kW = kVA x PF. Multiplying 1200 kVA by 0.75 gives 900 kW.",
    "cat": "PF_Calculation",
    "id": "T11P_056"
  },
  {
    "q": "What is the effect of operating a 1000 kVA generator at a 0.6 lagging power factor instead of its rated 0.8 lagging power factor?",
    "a": "The maximum active power it can safely deliver drops from 800 kW to 600 kW.",
    "opts": ["The maximum active power it can safely deliver drops from 800 kW to 600 kW.", "There is no effect; the generator will still supply 800 kW safely.", "The generator can safely deliver 1000 kW because voltage is increased.", "The generator apparent power capacity automatically drops to 600 kVA."],
    "exp": "At a 0.8 PF, the maximum active power is 1000 x 0.8 = 800 kW. At a 0.6 PF, it can only output 1000 x 0.6 = 600 kW before hitting its current limits.",
    "cat": "PF_Calculation",
    "id": "T11P_057"
  },
  {
    "q": "Which formula is used to accurately calculate the full load current of a 3-phase AC motor given its output power in watts?",
    "a": "I = P_output / (root3 x V x PF x Efficiency)",
    "opts": ["I = P_output / (V x PF x Efficiency)", "I = P_output / (3 x V x PF)", "I = (P_output x Efficiency) / (root3 x V x PF)", "I = P_output / (root3 x V x PF x Efficiency)"],
    "exp": "A motor nameplate power is its mechanical output. To find electrical input: P_in = P_out / Efficiency. Then applying the 3-phase current formula gives I = P_out / (root3 x V x PF x Efficiency).",
    "cat": "PF_Calculation",
    "id": "T11P_058"
  },
  {
    "q": "How does a low power factor affect the voltage drop along a cable?",
    "a": "It increases the current (I) for the same kW load, which proportionally increases the voltage drop along the cable.",
    "opts": ["It decreases the current (I) but increases the resistance (R), keeping voltage drop constant.", "It directly increases the frequency, which causes a higher inductive voltage drop.", "It isolates the reactive power from the cable, thereby reducing the overall voltage drop.", "It increases the current (I) for the same kW load, which proportionally increases the voltage drop along the cable."],
    "exp": "A low power factor requires a larger total current to supply the same active power (kW). Since voltage drop across a cable is proportional to current (V_drop = I x R), higher current leads directly to a larger voltage drop at the load end.",
    "cat": "PF_Calculation",
    "id": "T11P_059"
  },
  {
    "q": "A 440V, 3-phase induction motor draws inductive magnetizing current, lowering the system power factor. Why does this worsen voltage regulation at the motor terminals?",
    "a": "The reactive current increases the total line current (I), thereby increasing the voltage drop (I x R x L) across the supply cables.",
    "opts": ["The low power factor prevents the generator from producing 440V at the source.", "The reactive power is converted into active power inside the cables, decreasing the voltage.", "The magnetizing current increases the supply frequency, which lowers the voltage.", "The reactive current increases the total line current (I), thereby increasing the voltage drop (I x R x L) across the supply cables."],
    "exp": "A poor power factor means a larger total current must flow through the cables to provide the necessary reactive and active power. This higher current (I) increases the voltage drop over the length of the cable due to its resistance (R), resulting in lower voltage at the motor terminals.",
    "cat": "PF_Calculation",
    "id": "T11P_060"
  },
  {
    "q": "Why does a low power factor cause a ship generator to overheat if the active power (kW) demand remains constant?",
    "a": "A low power factor requires the generator to supply a much larger total current (kVA) to deliver the same active power, significantly increasing I squared R (copper) heating losses in the stator windings.",
    "opts": ["A low power factor requires the generator to supply a much larger total current (kVA) to deliver the same active power, significantly increasing I squared R (copper) heating losses in the stator windings.", "A low power factor causes the prime mover to overspeed, which generates excess friction and heat in the alternator bearings.", "A low power factor increases the magnetic friction inside the rotor, directly transferring mechanical heat to the stator windings.", "A low power factor introduces high-voltage spikes that break down the insulation, causing the generator to run hot."],
    "exp": "When the power factor is low, the Apparent Power (kVA) and total current increase to maintain the same Active Power (kW). This extra current squares the I squared R losses, leading to severe overheating in the generator copper windings.",
    "cat": "PF_Effects",
    "id": "T11P_061"
  },
  {
    "q": "What is the primary effect of a low lagging power factor on the ship electrical distribution cables?",
    "a": "The cables must carry higher total current, leading to increased I squared R heating losses and a greater voltage drop along the cable run.",
    "opts": ["The cables experience a decrease in current but a massive increase in voltage, stressing the insulation.", "The cables must carry higher total current, leading to increased I squared R heating losses and a greater voltage drop along the cable run.", "The cables become highly capacitive, causing them to generate reactive power and reverse the current flow.", "The cables physically contract due to magnetic hysteresis, leading to terminal connection failures."],
    "exp": "A low power factor forces more current through the cables for the same kW load. Since cable heating is proportional to the square of the current (I squared R) and voltage drop is proportional to current (V_drop = I x R x L), the cables overheat and deliver lower voltage to the load.",
    "cat": "PF_Effects",
    "id": "T11P_062"
  },
  {
    "q": "How does the useful capacity of a 1000 kVA rated generator change when operating at a 0.8 lagging power factor compared to a unity (1.0) power factor?",
    "a": "The maximum useful active power is reduced to 800 kW at 0.8 PF, whereas it could supply the full 1000 kW at unity PF.",
    "opts": ["The generator apparent power capacity automatically drops to 800 kVA to protect the windings.", "The generator can still supply 1000 kW at 0.8 PF, but it will consume 20% less fuel.", "The maximum useful active power is reduced to 800 kW at 0.8 PF, whereas it could supply the full 1000 kW at unity PF.", "The useful active power increases to 1250 kW because the reactive power acts as a magnetic booster."],
    "exp": "Generators are limited by their thermal current capacity (kVA). Active power (kW) equals kVA x PF. At a 0.8 power factor, a 1000 kVA generator hits its current limit when producing only 800 kW of useful work.",
    "cat": "PF_Effects",
    "id": "T11P_063"
  },
  {
    "q": "What will happen if you attempt to draw 1000 kW of active power from a 1000 kVA rated generator operating at a 0.7 power factor?",
    "a": "The generator will severely overload and trip on overcurrent because it requires 1428 kVA of total current to deliver 1000 kW at a 0.7 PF.",
    "opts": ["The prime mover will stall immediately because it lacks the reactive torque to spin the generator.", "The generator will successfully supply the 1000 kW but its voltage will drop to 70% of the rated value.", "The generator will automatically correct the power factor to 1.0 to accommodate the active load.", "The generator will severely overload and trip on overcurrent because it requires 1428 kVA of total current to deliver 1000 kW at a 0.7 PF."],
    "exp": "To supply 1000 kW at a 0.7 PF, the apparent power required is 1000 / 0.7 = 1428 kVA. This far exceeds the generator thermal rating of 1000 kVA, causing it to overheat and the overcurrent relay to trip the ACB.",
    "cat": "PF_Effects",
    "id": "T11P_064"
  },
  {
    "q": "Why do transformer copper losses increase significantly when supplying a load with a low power factor?",
    "a": "Because the transformer must conduct a higher apparent power (kVA) and total current to supply the same active power (kW), which increases I squared R losses in the windings.",
    "opts": ["Because a low power factor forces the transformer to step up the voltage higher than its design limit.", "Because the reactive power generates high-frequency harmonics that degrade the transformer oil.", "Because the low power factor directly increases the core magnetic flux, causing excessive eddy current losses.", "Because the transformer must conduct a higher apparent power (kVA) and total current to supply the same active power (kW), which increases I squared R losses in the windings."],
    "exp": "Just like generators and cables, transformers are rated in kVA. A low power factor means higher current for the same kW load. This higher current flowing through both primary and secondary windings drastically increases their copper (I squared R) losses.",
    "cat": "PF_Effects",
    "id": "T11P_065"
  },
  {
    "q": "How does a low electrical power factor impact the ship prime mover fuel consumption per kW of useful work delivered?",
    "a": "Fuel consumption per kW increases because the prime mover must burn extra fuel to overcome the increased I squared R (copper) losses caused by the higher reactive current.",
    "opts": ["Fuel consumption drops because the governor automatically reduces engine speed at lower power factors.", "Fuel consumption per kW increases because the prime mover must burn extra fuel to overcome the increased I squared R (copper) losses caused by the higher reactive current.", "Fuel consumption decreases because the reactive power assists the prime mover in rotating the alternator.", "Fuel consumption remains completely unaffected because diesel engines only react to active power (kW)."],
    "exp": "While reactive power (kVAR) itself does not consume mechanical engine power, the massive increase in current causes significant I squared R heating losses throughout the generator and cables. The prime mover must burn additional fuel to supply the active power wasted as this excess heat.",
    "cat": "PF_Effects",
    "id": "T11P_066"
  },
  {
    "q": "When a ship operates at a highly inductive low power factor (e.g., 0.6 lagging), which limitation of the generator set is typically reached first?",
    "a": "The alternator thermal/current limit (kVA) is reached long before the prime mover mechanical power limit (kW).",
    "opts": ["The governor maximum speed limit is reached, triggering an overspeed trip.", "The alternator thermal/current limit (kVA) is reached long before the prime mover mechanical power limit (kW).", "The exciter minimum voltage limit is reached, causing a loss of excitation trip.", "The prime mover mechanical power limit (kW) is reached long before the alternator thermal limit."],
    "exp": "At a low power factor, the current (kVA) increases rapidly compared to the useful work (kW). The alternator windings will hit their maximum safe current carrying capacity (overheating) while the diesel engine still has plenty of mechanical power (kW) in reserve.",
    "cat": "PF_Effects",
    "id": "T11P_067"
  },
  {
    "q": "What is a significant financial consequence of a ship maintaining a low power factor while connected to a commercial shore power supply (cold ironing)?",
    "a": "Port utility companies impose a power factor penalty surcharge because they must supply and dedicate grid capacity for the ship excess reactive power (kVAR).",
    "opts": ["The ship must pay a fine for generating harmonics that travel back into the national grid.", "The ship will be charged for exporting excess active power back into the shore grid.", "The port utility will reduce the supply voltage by 20%, forcing the ship to run its own generators.", "Port utility companies impose a power factor penalty surcharge because they must supply and dedicate grid capacity for the ship excess reactive power (kVAR)."],
    "exp": "Shore utilities charge for Apparent Power (kVA) or apply penalty surcharges if the Power Factor drops below a certain threshold (often 0.85 or 0.90) because supplying that extra reactive current (kVAR) takes up valuable capacity on their transmission lines.",
    "cat": "PF_Effects",
    "id": "T11P_068"
  },
  {
    "q": "How does a highly reactive, low power factor load affect the voltage stability of a weak or isolated shipboard power grid?",
    "a": "It places a heavy demand on the generator excitation system, making it sluggish and prone to severe voltage dips and instability during sudden load changes.",
    "opts": ["It makes the voltage exceptionally stable by acting as a magnetic buffer against load fluctuations.", "It places a heavy demand on the generator excitation system, making it sluggish and prone to severe voltage dips and instability during sudden load changes.", "It causes the busbar frequency to spike dangerously, leading to overspeed trips.", "It forces the Automatic Voltage Regulator (AVR) to shut down completely, leaving the system in manual control."],
    "exp": "Lagging reactive loads have a strong demagnetizing effect on the alternator rotor field. The AVR must work extremely hard to push high excitation current to maintain voltage. On a weak grid, sudden reactive load changes cause deep, unstable voltage dips.",
    "cat": "PF_Effects",
    "id": "T11P_069"
  },
  {
    "q": "When two generators run in parallel supplying a low power factor load, what is the effect if they have incorrectly adjusted AVR droop settings?",
    "a": "One generator will take on an excessive share of the reactive current (kVAR), causing its stator to overheat, even if the active power (kW) is shared equally.",
    "opts": ["Both generators will immediately trip on reverse power due to the lagging current.", "The power factor of the entire ship will automatically be corrected to unity to balance the load.", "One generator will automatically take all the active power (kW), while the other takes all the reactive power (kVAR).", "One generator will take on an excessive share of the reactive current (kVAR), causing its stator to overheat, even if the active power (kW) is shared equally."],
    "exp": "AVR droop controls reactive load (kVAR) sharing. If droop settings are mismatched on a highly reactive load, one generator will be forced to supply the bulk of the kVAR, drastically increasing its total current and causing dangerous overheating.",
    "cat": "PF_Effects",
    "id": "T11P_070"
  },
  {
    "q": "In systems heavily loaded with Variable Frequency Drives (VFDs), what distinguishes True Power Factor from Displacement Power Factor?",
    "a": "Displacement PF only accounts for the phase angle between fundamental voltage and current, while True PF also includes the degrading effects of harmonic distortion.",
    "opts": ["True PF only measures active power (kW), while Displacement PF only measures reactive power (kVAR).", "There is no difference; they are just two different names for the cosine of the phase angle.", "Displacement PF measures the mechanical displacement of the motor shaft, while True PF measures the electrical input.", "Displacement PF only accounts for the phase angle between fundamental voltage and current, while True PF also includes the degrading effects of harmonic distortion."],
    "exp": "VFD rectifiers draw non-sinusoidal current. While their fundamental current may be in phase with the voltage (high Displacement PF), the harmonic currents increase the total RMS current (kVA) without doing useful work, leading to a much lower True Power Factor.",
    "cat": "PF_Effects",
    "id": "T11P_071"
  },
  {
    "q": "How do VFDs producing specific harmonic distortions negatively impact the system True Power Factor?",
    "a": "These harmonic currents increase the total RMS current drawn (Apparent Power) without adding any useful Active Power, which severely reduces the True Power Factor.",
    "opts": ["They artificially inflate the Active Power (kW) readings, tricking the generator into under-producing.", "These harmonic currents increase the total RMS current drawn (Apparent Power) without adding any useful Active Power, which severely reduces the True Power Factor.", "They cancel out the fundamental frequency, causing the Displacement Power Factor to drop to zero.", "They reverse the phase angle, causing the motors to draw leading current instead of lagging current."],
    "exp": "Non-linear loads like VFDs produce harmonic currents. Because True Power Factor = Active Power / Total Apparent Power (RMS), the addition of useless harmonic currents inflates the RMS apparent power, thereby dragging down the True Power Factor.",
    "cat": "PF_Effects",
    "id": "T11P_072"
  },
  {
    "q": "Why does a low power factor cause ship lights to dim when a large motor starts?",
    "a": "The motor draws a massive lagging reactive current during startup, massively increasing the total line current and creating a huge voltage drop across the system impedance.",
    "opts": ["The low power factor causes the cable resistance to increase temporarily due to skin effect.", "The low power factor actively sucks voltage out of the lighting circuits to feed the motor rotor.", "The motor startup physically lengthens the cable due to sudden magnetic repulsion.", "The motor draws a massive lagging reactive current during startup, massively increasing the total line current and creating a huge voltage drop across the system impedance."],
    "exp": "A starting motor draws 5-8 times its full load current at a very low power factor (mostly reactive). This massive current (I) multiplies with the cable impedance, causing a severe voltage drop at the load end, which manifests as dimming lights.",
    "cat": "PF_Effects",
    "id": "T11P_073"
  },
  {
    "q": "During cold ironing, why might a ship poor power factor cause the shore connection circuit breaker to trip even if the active power (kW) is well within limits?",
    "a": "The excessive reactive current (kVAR) drawn by the ship pushes the total apparent power (kVA) and current beyond the thermal trip limit of the shore connection breaker.",
    "opts": ["The low power factor causes the shore supply voltage to spike, triggering an overvoltage trip.", "The shore connection breaker is designed to instantly trip if the power factor drops below exactly 1.0.", "The poor power factor causes the shore frequency to drop from 60 Hz to 50 Hz, triggering an under-frequency trip.", "The excessive reactive current (kVAR) drawn by the ship pushes the total apparent power (kVA) and current beyond the thermal trip limit of the shore connection breaker."],
    "exp": "Circuit breakers protect against overcurrent. A low power factor requires a much higher total current to supply a specific kW load. Even if the kW load is perfectly safe, the massive reactive current can exceed the breaker rated ampere limit, causing it to trip.",
    "cat": "PF_Effects",
    "id": "T11P_074"
  },
  {
    "q": "Since I squared R losses are proportional to the square of the current, how do cable heating losses change if low power factor causes current to increase by 25% (multiplier of 1.25)?",
    "a": "The heating losses increase by approximately 56%.",
    "opts": ["The heating losses remain constant because voltage drops proportionally.", "The heating losses increase by exactly 25%.", "The heating losses increase by 125%.", "The heating losses increase by approximately 56%."],
    "exp": "Because losses are calculated as I squared R, an increase in current by a factor of 1.25 means the new losses are 1.25 squared = 1.5625 times the original losses. This represents a 56.25% increase in heat generation within the cables.",
    "cat": "PF_Effects",
    "id": "T11P_075"
  },
  {
    "q": "If a step-down transformer is rated for 500 kVA, what is its maximum useful active power output when supplying a load with a 0.6 power factor?",
    "a": "300 kW",
    "opts": ["300 kW", "500 kW", "833 kW", "200 kW"],
    "exp": "Useful active power (kW) is the product of Apparent Power (kVA) and Power Factor (PF). Therefore, 500 kVA x 0.6 = 300 kW. Supplying any more active power would cause the transformer current to exceed its 500 kVA thermal design limit.",
    "cat": "PF_Effects",
    "id": "T11P_076"
  },
  {
    "q": "If the active power demand remains steady at 600 kW, what happens to the apparent power (kVA) required from the generator if the power factor drops from 0.8 to 0.6?",
    "a": "The apparent power requirement increases from 750 kVA to 1000 kVA.",
    "opts": ["The apparent power requirement increases from 750 kVA to 1000 kVA.", "The apparent power requirement decreases from 1000 kVA to 750 kVA.", "The apparent power requirement increases from 480 kVA to 600 kVA.", "The apparent power requirement remains at 600 kVA, but the current doubles."],
    "exp": "Apparent power is calculated as kVA = kW / PF. At 0.8 PF: 600 / 0.8 = 750 kVA. At 0.6 PF: 600 / 0.6 = 1000 kVA. The generator must work significantly harder to supply the same 600 kW.",
    "cat": "PF_Effects",
    "id": "T11P_077"
  },
  {
    "q": "What is the effect of a low power factor on the sizing and selection of a main switchboard Air Circuit Breaker (ACB)?",
    "a": "The ACB must be physically larger and have a higher current rating to safely carry the increased apparent power (kVA) required for the same active kW load.",
    "opts": ["The ACB must be equipped with a reverse power relay specifically designed for low power factor environments.", "The ACB requires thicker arc chutes to handle the higher active power generated by the poor power factor.", "The ACB must be physically larger and have a higher current rating to safely carry the increased apparent power (kVA) required for the same active kW load.", "The ACB can be smaller because reactive power flows in the opposite direction and cancels out active power."],
    "exp": "Switchgear, like generators and cables, is rated based on maximum current. A system designed to handle 1000 kW at a 0.7 PF requires an ACB capable of safely carrying approximately 1428 kVA of current, necessitating larger, more expensive switchgear than if the PF were near 1.0.",
    "cat": "PF_Effects",
    "id": "T11P_078"
  },
  {
    "q": "Why is the overall electrical efficiency of the ship power plant heavily reduced when operating at a low lagging power factor?",
    "a": "A significant portion of the generated current does no useful work but still incurs copper (I squared R) losses in generators, transformers, and cables, wasting prime mover fuel as heat.",
    "opts": ["The low power factor directly increases the iron (core) losses in the generator, which consumes all the active power.", "The reactive power chemically breaks down the lubricating oil in the prime mover, reducing mechanical efficiency.", "A significant portion of the generated current does no useful work but still incurs copper (I squared R) losses in generators, transformers, and cables, wasting prime mover fuel as heat.", "The low power factor forces the generators to run at a lower RPM, dragging the diesel engines out of their efficient operating band."],
    "exp": "Efficiency is the ratio of useful output to total input. At a low PF, high reactive currents circulate through the system. While they do no mechanical work, they flow through resistive conductors, losing energy as heat (I squared R losses). The prime mover must burn fuel to supply this wasted energy.",
    "cat": "PF_Effects",
    "id": "T11P_079"
  },
  {
    "q": "In terms of generator capability, why can a ship alternator not export its rated active power (kW) if the system power factor is exceptionally low?",
    "a": "Because the high reactive current demands push the stator winding temperature and the excitation system to their absolute thermal limits before the rated kW can be reached.",
    "opts": ["Because the prime mover automatically cuts fuel to prevent the reactive power from destroying the diesel engine.", "Because the high reactive current demands push the stator winding temperature and the excitation system to their absolute thermal limits before the rated kW can be reached.", "Because the reverse power relay will instantly trip the breaker to protect the busbars from reactive feedback.", "Because a low power factor physically stalls the generator rotor, preventing it from turning at synchronous speed."],
    "exp": "A generator is rated for a specific apparent power (kVA), which defines its thermal limit (maximum safe current). At a very low PF, the kVA is mostly reactive (kVAR). The massive total current overheats the stator, forcing operators to limit the load long before the rated active power (kW) is achieved.",
    "cat": "PF_Effects",
    "id": "T11P_080"
  },
  {
    "q": "How do capacitor banks practically improve a ship power factor when connected to the electrical grid?",
    "a": "They are connected in parallel with the load and supply leading kVAR locally, which cancels out the lagging kVAR drawn by induction motors.",
    "opts": ["They are connected in parallel with the load and supply leading kVAR locally, which cancels out the lagging kVAR drawn by induction motors.", "They absorb excess active power during light load conditions and release it during heavy load conditions.", "They convert the lagging reactive power into active power, directly increasing the shaft torque of the motors.", "They are connected in series with the generator to boost the active power output directly into the motors."],
    "exp": "Capacitor banks provide leading reactive power (current leading voltage). By connecting them in parallel with inductive loads (which draw lagging reactive power), the leading kVAR cancels out the lagging kVAR, reducing the total reactive power the generator must supply.",
    "cat": "PF_Correction",
    "id": "T11P_081"
  },
  {
    "q": "Why are power factor correction capacitors always connected in parallel with the load rather than in series?",
    "a": "Parallel connection ensures the capacitors receive the constant system voltage and do not have to carry the full load current, which would cause severe voltage regulation issues.",
    "opts": ["Series connection is mathematically impossible for AC circuits operating above 50 Hz.", "Series connection would cause the capacitors to absorb active power rather than reactive power.", "Parallel connection ensures the capacitors receive the constant system voltage and do not have to carry the full load current, which would cause severe voltage regulation issues.", "Parallel connection ensures the capacitors automatically step down the voltage to protect the motors."],
    "exp": "If capacitors were connected in series, the entire load current would pass through them, causing massive voltage drops. Parallel connection allows them to see the full bus voltage and independently provide reactive current without carrying the active load current.",
    "cat": "PF_Correction",
    "id": "T11P_082"
  },
  {
    "q": "What is the typical target setpoint range for an automatic power factor correction relay onboard a ship?",
    "a": "0.92 to 0.95 lagging",
    "opts": ["Exactly 1.0 (Unity) under all conditions", "0.95 to 0.99 leading", "0.60 to 0.75 lagging", "0.92 to 0.95 lagging"],
    "exp": "Automatic PF correction relays usually target a power factor between 0.85 and 0.95 lagging (often 0.92-0.95). Correcting exactly to 1.0 or going leading is avoided because sudden load shedding could result in a dangerous leading power factor, causing voltage instability and AVR hunting.",
    "cat": "PF_Correction",
    "id": "T11P_083"
  },
  {
    "q": "Which of the following describes the fundamental physical setup of a synchronous condenser?",
    "a": "It is an overexcited synchronous motor running freely on the busbars with absolutely no mechanical load attached to its shaft.",
    "opts": ["It is a static transformer that shifts the phase angle of the current exactly 90 degrees forward.", "It is an overexcited synchronous motor running freely on the busbars with absolutely no mechanical load attached to its shaft.", "It is a diesel-driven generator operating with its AVR switched off.", "It is a heavily loaded induction motor running at high slip to absorb excess reactive power."],
    "exp": "A synchronous condenser is a synchronous motor that is connected to the electrical grid but drives no mechanical load. Its sole purpose is to generate or absorb reactive power by varying its DC field excitation.",
    "cat": "PF_Correction",
    "id": "T11P_084"
  },
  {
    "q": "How does a synchronous condenser correct a lagging power factor on a ship network?",
    "a": "By operating in an overexcited state, it draws a leading current that supplies leading kVAR to cancel out the lagging kVAR of the induction motors.",
    "opts": ["By using its built-in capacitor banks to filter out harmonic distortions from the grid.", "By operating in an overexcited state, it draws a leading current that supplies leading kVAR to cancel out the lagging kVAR of the induction motors.", "By mechanically spinning a massive flywheel, it physically pushes the voltage waveform to align with the current.", "By operating in an underexcited state, it absorbs active power and releases it as pure reactive power."],
    "exp": "When a synchronous motor is overexcited (field current higher than required for unity PF), it acts like a capacitor and draws a leading reactive current from the busbars, which effectively supplies leading kVAR to the system.",
    "cat": "PF_Correction",
    "id": "T11P_085"
  },
  {
    "q": "If an ETO improves the power factor of a 1000 kVA generator from 0.75 to 0.92, how does this specifically affect the generator available capacity?",
    "a": "It increases the available useful active power from 750 kW to 920 kW without exceeding the generator thermal current limits.",
    "opts": ["It forces the generator to run at 92% of its maximum RPM.", "It decreases the active power capacity to 750 kW, allowing the prime mover to rest.", "It permanently reduces the generator apparent power rating from 1000 kVA to 750 kVA.", "It increases the available useful active power from 750 kW to 920 kW without exceeding the generator thermal current limits."],
    "exp": "Active power (kW) equals kVA x PF. At a 0.75 PF, the 1000 kVA generator can only deliver 750 kW before maxing out its current limit. By correcting the PF to 0.92, it can safely deliver 920 kW, freeing up 170 kW of useful capacity.",
    "cat": "PF_Correction",
    "id": "T11P_086"
  },
  {
    "q": "For a 100 kW load, approximately how much capacitive kVAR is required from a capacitor bank to correct the power factor from 0.75 lagging to 0.92 lagging?",
    "a": "45.6 kVAR",
    "opts": ["88.2 kVAR", "45.6 kVAR", "17.0 kVAR", "100.0 kVAR"],
    "exp": "Current kVAR = 100 x tan(arccos 0.75) = 88.19 kVAR. Target kVAR = 100 x tan(arccos 0.92) = 42.60 kVAR. Required capacitor kVAR = 88.19 - 42.60 = 45.59 kVAR.",
    "cat": "PF_Correction",
    "id": "T11P_087"
  },
  {
    "q": "What is the primary advantage of using thyristor-switched capacitor banks over traditional electromechanical contactor-switched banks?",
    "a": "Thyristors provide an exceptionally fast, transient-free response to rapidly fluctuating reactive loads without mechanical wear.",
    "opts": ["Thyristors provide an exceptionally fast, transient-free response to rapidly fluctuating reactive loads without mechanical wear.", "Thyristors automatically block all 3rd and 5th order harmonics from entering the main switchboard.", "Thyristors allow the capacitors to be wired in series with the main generators safely.", "Thyristors physically generate leading active power, completely replacing the ship generators."],
    "exp": "Thyristor-switched capacitor banks can switch on or off within a single AC cycle at precisely the right zero-crossing point, eliminating damaging inrush current transients and responding instantly to dynamic loads like thrusters or cranes.",
    "cat": "PF_Correction",
    "id": "T11P_088"
  },
  {
    "q": "Why are passive LC harmonic filters preferred over plain capacitor banks in systems with heavy VFD usage?",
    "a": "Passive LC filters supply leading kVAR at the fundamental frequency while simultaneously shunting specific destructive harmonic frequencies away from the network.",
    "opts": ["Plain capacitor banks actively generate 5th and 7th harmonics which destroy the VFD rectifiers.", "Passive LC filters supply leading kVAR at the fundamental frequency while simultaneously shunting specific destructive harmonic frequencies away from the network.", "Passive LC filters use software algorithms to cancel harmonics, unlike hardware capacitors.", "Passive LC filters convert harmonic distortion directly into active power (kW)."],
    "exp": "Passive filters consist of Inductors (L) and Capacitors (C) tuned to trap specific harmonics (like the 5th or 7th). While absorbing these harmonics, the capacitive element also naturally provides leading fundamental kVAR to correct displacement power factor.",
    "cat": "PF_Correction",
    "id": "T11P_089"
  },
  {
    "q": "What is the primary purpose of installing detuning reactors in series with power factor correction capacitor banks?",
    "a": "To prevent the capacitor bank from forming a destructive resonant circuit with the system inductance at specific harmonic frequencies.",
    "opts": ["To step down the main switchboard voltage before it enters the sensitive capacitor dielectric.", "To prevent the capacitor bank from forming a destructive resonant circuit with the system inductance at specific harmonic frequencies.", "To convert the leading reactive power into active power before feeding it to the load.", "To deliberately slow down the discharge time of the capacitors for safety during blackout."],
    "exp": "Capacitors decrease in reactance at higher frequencies, making them sink harmonic currents. If their capacitance resonates with the grid natural inductance at a harmonic frequency, massive currents will destroy the capacitors. Detuning reactors shift this resonant frequency to a safe, non-harmonic value.",
    "cat": "PF_Correction",
    "id": "T11P_090"
  },
  {
    "q": "If the dedicated power factor meter on the main switchboard fails, what alternative method can the ETO use to calculate the overall system power factor?",
    "a": "Read the total Active Power (kW) and divide it by the total Apparent Power calculated from the switchboard Voltmeter and Ammeter (root3 x V x I).",
    "opts": ["Read the Reactive Power (kVAR) and multiply it by the Active Power (kW).", "Read the total Active Power (kW) and divide it by the total Apparent Power calculated from the switchboard Voltmeter and Ammeter (root3 x V x I).", "Measure the frequency slip on the synchroscope and multiply by the line current.", "Divide the generator rated kVA by the current running kW load."],
    "exp": "Power factor is fundamentally the ratio of Active Power (kW) to Apparent Power (kVA). The ETO can observe the total kW on the wattmeter and calculate total kVA using the line voltage (V) and current (I) meters: kVA = (root3 x V x I) / 1000.",
    "cat": "PF_Correction",
    "id": "T11P_091"
  },
  {
    "q": "What is a major operational disadvantage of static capacitor banks compared to a synchronous condenser?",
    "a": "Static capacitor banks only provide correction in rigid, discrete steps, whereas a synchronous condenser provides smooth, continuously variable correction.",
    "opts": ["Static capacitor banks consume massive amounts of active power to maintain their charge.", "Static capacitor banks can only correct leading power factors, not lagging ones.", "Static capacitor banks only provide correction in rigid, discrete steps, whereas a synchronous condenser provides smooth, continuously variable correction.", "Static capacitor banks require intensive daily mechanical lubrication and bearing maintenance."],
    "exp": "Because static capacitors are physically switched in and out in blocks (e.g., 50 kVAR steps), they cannot precisely match a fluctuating load perfectly. A synchronous condenser simply adjusts its field current to provide exact, stepless reactive power compensation.",
    "cat": "PF_Correction",
    "id": "T11P_092"
  },
  {
    "q": "Why can the ETO not simply adjust the generator AVR to permanently improve the ship overall lagging power factor?",
    "a": "The AVR only controls the terminal voltage and the share of reactive power the generator produces; it cannot change the fundamental reactive power (kVAR) demanded by the inductive loads.",
    "opts": ["The AVR is hardcoded from the factory to operate exclusively at 0.8 power factor.", "The AVR only affects active power (kW) sharing, not reactive power (kVAR).", "The AVR only controls the terminal voltage and the share of reactive power the generator produces; it cannot change the fundamental reactive power (kVAR) demanded by the inductive loads.", "Adjusting the AVR to improve power factor will immediately trip the reverse power relay."],
    "exp": "The load determines the power factor. Inductive loads inherently draw lagging kVAR. The generator AVR regulates voltage and kVAR sharing between parallel machines, but it cannot eliminate the kVAR drawn by the motors; external correction (like capacitors) is required to supply that kVAR locally.",
    "cat": "PF_Correction",
    "id": "T11P_093"
  },
  {
    "q": "What happens to the total line current between the main switchboard and a large induction motor when local power factor correction capacitors are successfully brought online?",
    "a": "The total line current drawn from the switchboard decreases, because the capacitors supply the motor required reactive current locally.",
    "opts": ["The total line current remains exactly the same, but the voltage drops by 20%.", "The active current increases to replace the reactive current.", "The total line current drastically increases, because the capacitors add their own load to the motor load.", "The total line current drawn from the switchboard decreases, because the capacitors supply the motor required reactive current locally."],
    "exp": "By providing the leading reactive current right next to the motor, that current no longer needs to travel from the generators through the distribution cables. This reduces the total apparent current (kVA) drawn from the main switchboard.",
    "cat": "PF_Correction",
    "id": "T11P_094"
  },
  {
    "q": "What is the consequence of over-correcting a ship power system so that the power factor becomes significantly leading?",
    "a": "It causes voltage instability and excessive voltage rise on the busbars, forcing the generator AVRs into unstable under-excitation.",
    "opts": ["It causes voltage instability and excessive voltage rise on the busbars, forcing the generator AVRs into unstable under-excitation.", "It causes the prime mover to consume excessive fuel to push the leading current.", "It perfectly optimizes the system, resulting in zero cable heating losses.", "It instantly trips the generator on reverse power because active power starts flowing backwards."],
    "exp": "A heavily leading power factor acts as a voltage booster. The excess capacitive kVAR drives the bus voltage up. The AVR reacts by dropping field excitation to dangerously low levels, risking loss of synchronism and severe voltage instability.",
    "cat": "PF_Correction",
    "id": "T11P_095"
  },
  {
    "q": "Under normal operating conditions at sea, why is the targeted power factor after automatic correction usually capped at around 0.95 rather than 1.0?",
    "a": "To provide a safety margin against accidentally entering a leading power factor state if a large inductive load suddenly trips offline.",
    "opts": ["Because shipboard generators are legally prohibited by SOLAS from operating above 0.95.", "To provide a safety margin against accidentally entering a leading power factor state if a large inductive load suddenly trips offline.", "Because static capacitors cannot physically produce enough kVAR to reach 1.0.", "Because reaching 1.0 power factor physically stalls the prime mover due to zero magnetic slip."],
    "exp": "Maintaining a slight lagging margin (0.92-0.95) ensures that if a major induction motor suddenly shuts down, the static capacitor banks left online will not instantly push the entire grid into an unstable, over-voltage leading power factor state before the automatic controller can switch them off.",
    "cat": "PF_Correction",
    "id": "T11P_096"
  },
  {
    "q": "When calculating power factor correction, what fundamental mathematical formula dictates the relationship between Active Power (P), Apparent Power (S), and Reactive Power (Q)?",
    "a": "S squared = P squared + Q squared",
    "opts": ["S = P x Q", "S squared = P squared + Q squared", "P = S + Q", "Q squared = S squared + P squared"],
    "exp": "The Pythagorean power triangle dictates that the square of the Apparent Power (S, the hypotenuse) equals the sum of the squares of the Active Power (P, adjacent) and the Reactive Power (Q, opposite).",
    "cat": "PF_Correction",
    "id": "T11P_097"
  },
  {
    "q": "What happens to the generator capacity when you use a capacitor bank to correct the PF from 0.75 to 0.92 on a loaded grid?",
    "a": "The apparent power (kVA) drawn from the generator decreases, freeing up thermal current capacity for additional active loads.",
    "opts": ["The active power (kW) drawn from the generator decreases, saving massive amounts of diesel fuel.", "The apparent power (kVA) drawn from the generator decreases, freeing up thermal current capacity for additional active loads.", "The generator maximum voltage rating increases proportionally.", "The reactive power generated by the alternator increases to charge the capacitors."],
    "exp": "Power factor correction reduces the reactive power (kVAR) that the generator must supply. This shrinks the total apparent power (kVA) and current flowing from the generator, lowering copper losses and freeing up capacity to supply more real work (kW).",
    "cat": "PF_Correction",
    "id": "T11P_098"
  },
  {
    "q": "Which specific electrical behavior allows a capacitor to cancel out the lagging effect of an induction motor?",
    "a": "In a capacitor, current leads the voltage by 90 degrees, directly opposing the inductor where current lags the voltage by 90 degrees.",
    "opts": ["A capacitor physically absorbs the magnetic flux generated by the motor and converts it into active power.", "A capacitor steps down the busbar voltage, reducing the motor demand for reactive current.", "In a capacitor, current leads the voltage by 90 degrees, directly opposing the inductor where current lags the voltage by 90 degrees.", "In a capacitor, the voltage and current are perfectly in phase, pulling the motor current back into phase."],
    "exp": "Inductors cause current to lag voltage (creating lagging kVAR). Capacitors cause current to lead voltage (creating leading kVAR). When placed in parallel, their reactive current components are 180 degrees out of phase with each other and subtract, reducing the total reactive current demanded from the source.",
    "cat": "PF_Correction",
    "id": "T11P_099"
  },
  {
    "q": "How can an ETO verify whether a synchronous condenser is generating or absorbing reactive power (kVAR)?",
    "a": "By observing its field excitation: if overexcited, it generates leading kVAR; if underexcited, it absorbs leading kVAR.",
    "opts": ["By observing its active power meter: if kW is positive, it generates kVAR.", "By observing its rotational speed: if running above synchronous speed, it generates kVAR.", "By checking its slip frequency: high slip means it is absorbing kVAR.", "By observing its field excitation: if overexcited, it generates leading kVAR; if underexcited, it absorbs leading kVAR."],
    "exp": "A synchronous machine reactive power behavior is controlled entirely by its DC field current. Over-excitation produces a leading power factor (acting as a capacitor, supplying leading kVAR). Under-excitation produces a lagging power factor (acting as an inductor, absorbing leading kVAR).",
    "cat": "PF_Correction",
    "id": "T11P_100"
  },
  {
    "q": "What is the mathematical definition of Power Factor (PF) in an AC circuit?",
    "a": "The ratio of Active Power (KW) to Apparent Power (KVA), equivalent to cos \u03c6",
    "opts": ["The square root of Active Power divided by Apparent Power", "The ratio of Reactive Power to Active Power", "The ratio of Apparent Power to Reactive Power", "The ratio of Active Power (KW) to Apparent Power (KVA), equivalent to cos \u03c6"],
    "exp": "Power Factor represents efficiency. It is the proportion of total power (KVA) that is actually converted into useful work (KW). Mathematically, PF = KW / KVA = cos \u03c6.",
    "cat": "PF_Fundamentals",
    "id": "T11P_101"
  },
  {
    "q": "What is the typical Power Factor on a cargo ship at sea?",
    "a": "0.8 lagging",
    "opts": ["0.8 leading", "0.5 lagging", "0.8 lagging", "1.0 (unity)"],
    "exp": "A ship's power factor is typically 0.8 lagging because the vast majority of loads are induction motors, which are highly inductive and draw lagging reactive current.",
    "cat": "PF_Fundamentals",
    "id": "T11P_102"
  },
  {
    "q": "What does a 'Lagging' Power Factor indicate?",
    "a": "Current lags the supply voltage due to inductive loads",
    "opts": ["Current leads the supply voltage due to capacitive loads", "Voltage lags the current due to inductive loads", "Current lags the supply voltage due to inductive loads", "Current and voltage are in phase but at a low magnitude"],
    "exp": "In inductive loads (motors, transformers), the magnetic field opposes changes in current, causing the current waveform to lag behind the voltage waveform.",
    "cat": "PF_Fundamentals",
    "id": "T11P_103"
  },
  {
    "q": "What does a 'Leading' Power Factor indicate?",
    "a": "Current leads the supply voltage due to capacitive loads",
    "opts": ["Current and voltage are perfectly in phase", "Current lags the voltage due to inductive loads", "Current leads the supply voltage due to capacitive loads", "The generator is over-loaded"],
    "exp": "In capacitive loads (like capacitor banks or long un-loaded high-voltage cables), the current waveform leads the voltage waveform (remember CIVIL: in C, I leads V).",
    "cat": "PF_Fundamentals",
    "id": "T11P_104"
  },
  {
    "q": "What is the Power Factor of a purely resistive circuit?",
    "a": "1.0 (Unity)",
    "opts": ["0.5 (Lagging)", "0 (Lagging)", "0 (Leading)", "1.0 (Unity)"],
    "exp": "In pure resistive loads (like an electric heater or incandescent bulb), voltage and current are perfectly in phase (\u03c6 = 0\u00b0). Cos(0) = 1.0.",
    "cat": "PF_Fundamentals",
    "id": "T11P_105"
  },
  {
    "q": "What is the Power Factor of an ideal, purely inductive circuit?",
    "a": "0 (Lagging)",
    "opts": ["1.0 (Unity)", "0 (Lagging)", "0 (Leading)", "0.8 (Lagging)"],
    "exp": "An ideal inductor causes current to lag voltage by exactly 90\u00b0. Cos(90\u00b0) = 0, meaning zero active power is consumed.",
    "cat": "PF_Fundamentals",
    "id": "T11P_106"
  },
  {
    "q": "Which formula correctly represents the Power Triangle relationship?",
    "a": "KVA\u00b2 = KW\u00b2 + KVAR\u00b2",
    "opts": ["KVA = KW + KVAR", "KVA\u00b2 = KW\u00b2 + KVAR\u00b2", "KVAR\u00b2 = KVA\u00b2 + KW\u00b2", "KW\u00b2 = KVA\u00b2 + KVAR\u00b2"],
    "exp": "The three powers form a right-angled triangle. Apparent power (KVA) is the hypotenuse, forming the Pythagorean relationship KVA\u00b2 = KW\u00b2 + KVAR\u00b2.",
    "cat": "PF_Fundamentals",
    "id": "T11P_107"
  },
  {
    "q": "What does Active Power (KW) represent?",
    "a": "The real power that performs useful mechanical or thermal work",
    "opts": ["The real power that performs useful mechanical or thermal work", "The total power supplied by the generator", "The magnetizing power in the circuit", "The power lost strictly due to cable resistance"],
    "exp": "Active power (P) is the actual energy converted into shaft rotation in a motor, or heat in a heater.",
    "cat": "PF_Fundamentals",
    "id": "T11P_108"
  },
  {
    "q": "What does Reactive Power (KVAR) represent?",
    "a": "The power that oscillates between source and load to sustain magnetic fields, performing no net work",
    "opts": ["The real power doing useful work", "The heat lost in the generator stator", "The mechanical friction in the prime mover", "The power that oscillates between source and load to sustain magnetic fields, performing no net work"],
    "exp": "KVAR creates and collapses the magnetic fields in induction motors and transformers. It does no useful work but still requires current to flow.",
    "cat": "PF_Fundamentals",
    "id": "T11P_109"
  },
  {
    "q": "What is the formula for calculating three-phase Active Power (KW)?",
    "a": "P = \u221a3 \u00d7 V \u00d7 I \u00d7 cos \u03c6",
    "opts": ["P = \u221a3 \u00d7 V \u00d7 I", "P = \u221a3 \u00d7 V \u00d7 I \u00d7 cos \u03c6", "P = V \u00d7 I \u00d7 cos \u03c6", "P = \u221a3 \u00d7 V \u00d7 I \u00d7 sin \u03c6"],
    "exp": "For a three-phase system, Active Power incorporates the root 3 multiplier, the line voltage and current, and the power factor (cos \u03c6).",
    "cat": "PF_Fundamentals",
    "id": "T11P_110"
  },
  {
    "q": "What is the formula for Apparent Power (KVA) in a three-phase system?",
    "a": "S = \u221a3 \u00d7 V \u00d7 I",
    "opts": ["S = V \u00d7 I", "S = \u221a3 \u00d7 V \u00d7 I \u00d7 cos \u03c6", "S = \u221a3 \u00d7 V \u00d7 I", "S = \u221a3 \u00d7 V \u00d7 I \u00d7 sin \u03c6"],
    "exp": "Apparent power is simply the total voltage and current output, ignoring the phase angle. It dictates the physical sizing of cables and alternators.",
    "cat": "PF_Fundamentals",
    "id": "T11P_111"
  },
  {
    "q": "Why are alternators rated in KVA rather than KW?",
    "a": "Because the maximum capacity is limited by stator current (heating) and voltage (insulation), which define KVA, regardless of the load's power factor",
    "opts": ["Because the maximum capacity is limited by stator current (heating) and voltage (insulation), which define KVA, regardless of the load's power factor", "Because KW cannot be measured accurately at high voltages", "Because they only produce reactive power", "Because prime mover limits are rated in KVA"],
    "exp": "The manufacturer doesn't know what power factor the user's load will have. The machine's physical limits are maximum amps (I) and maximum volts (V), making KVA the only absolute capacity rating.",
    "cat": "PF_Fundamentals",
    "id": "T11P_112"
  },
  {
    "q": "If a 1000 KVA alternator supplies a load with a Power Factor of 0.8, what is its maximum useful KW output?",
    "a": "800 KW",
    "opts": ["800 KW", "1250 KW", "600 KW", "1000 KW"],
    "exp": "KW = KVA \u00d7 PF. 1000 KVA \u00d7 0.8 = 800 KW. The remaining capacity is taken up by the reactive current.",
    "cat": "PF_Fundamentals",
    "id": "T11P_113"
  },
  {
    "q": "If the same 1000 KVA alternator supplies a purely resistive load, what is its maximum KW output?",
    "a": "1000 KW",
    "opts": ["800 KW", "0 KW", "1250 KW", "1000 KW"],
    "exp": "A pure resistive load has a PF of 1.0. Therefore, KW = 1000 KVA \u00d7 1.0 = 1000 KW.",
    "cat": "PF_Fundamentals",
    "id": "T11P_114"
  },
  {
    "q": "How does the Power Factor typically change when a ship is in port compared to at sea?",
    "a": "It often drops lower (e.g., 0.7 lagging) because large motors are shut down, and lightly loaded motors draw proportionally more magnetizing current",
    "opts": ["It often drops lower (e.g., 0.7 lagging) because large motors are shut down, and lightly loaded motors draw proportionally more magnetizing current", "It shifts to a leading power factor", "It rises closer to 1.0 because the main engine is off", "It remains exactly 0.8 regardless of operations"],
    "exp": "Lightly loaded induction motors have terrible power factors. In port, many systems idle, increasing the proportion of reactive power drawn.",
    "cat": "PF_Fundamentals",
    "id": "T11P_115"
  },
  {
    "q": "What is the definition of Form Factor for an AC waveform?",
    "a": "The ratio of the RMS value to the Average value",
    "opts": ["The ratio of the RMS value to the Average value", "The ratio of voltage drop to current", "The ratio of the Peak value to the RMS value", "The ratio of Active Power to Apparent Power"],
    "exp": "Form factor measures the shape of a waveform. For a pure sine wave, it is RMS / Average = 1.11.",
    "cat": "PF_Fundamentals",
    "id": "T11P_116"
  },
  {
    "q": "What is the Form Factor value for a pure sinusoidal AC wave?",
    "a": "1.11",
    "opts": ["0.636", "0.707", "1.11", "1.414"],
    "exp": "RMS is 0.707 of peak, and Average is 0.636 of peak. 0.707 / 0.636 = 1.11. This constant appears in transformer design calculations.",
    "cat": "PF_Fundamentals",
    "id": "T11P_117"
  },
  {
    "q": "Where does the 4.44 constant come from in the transformer EMF equation (E = 4.44 \u00d7 f \u00d7 N \u00d7 \u03a6m)?",
    "a": "It is derived from 4 multiplied by the sine wave Form Factor of 1.11",
    "opts": ["It is derived from 4 multiplied by the sine wave Form Factor of 1.11", "It is derived from the Peak Factor (1.414) times Pi", "It is the square root of 2 multiplied by Pi", "It represents the number of poles in a standard generator"],
    "exp": "The theoretical equation yields 4. To get RMS voltage, it is multiplied by the form factor 1.11, yielding 4.44.",
    "cat": "PF_Fundamentals",
    "id": "T11P_118"
  },
  {
    "q": "How does harmonic distortion from VFDs affect the Form Factor of the ship's grid?",
    "a": "It increases the Form Factor above 1.11, which causes transformers to overheat due to higher core flux",
    "opts": ["It decreases the Form Factor below 1.0", "It increases the Form Factor above 1.11, which causes transformers to overheat due to higher core flux", "It has no effect on Form Factor", "It locks the Form Factor at exactly 1.414"],
    "exp": "Non-linear loads distort the sine wave. A higher form factor means higher magnetic flux is needed in transformers, increasing iron losses and heat.",
    "cat": "PF_Fundamentals",
    "id": "T11P_119"
  },
  {
    "q": "What does the RMS (Root Mean Square) value of an AC wave represent physically?",
    "a": "The equivalent DC voltage/current that would produce the same heating effect (I\u00b2R) in a resistor",
    "opts": ["The equivalent DC voltage/current that would produce the same heating effect (I\u00b2R) in a resistor", "The speed of the frequency oscillation", "The average mathematical value over a full cycle", "The absolute highest peak the wave reaches"],
    "exp": "Since AC constantly changes, RMS provides a practical equivalent to DC for power calculations.",
    "cat": "PF_Fundamentals",
    "id": "T11P_120"
  },
  {
    "q": "What is the relationship between Peak Voltage and RMS Voltage for a sine wave?",
    "a": "V_peak = V_rms \u00d7 \u221a2 (1.414)",
    "opts": ["V_peak = V_rms / \u221a2", "V_peak = V_rms \u00d7 1.11", "V_peak = V_rms \u00d7 \u221a2 (1.414)", "V_peak = V_rms \u00d7 0.636"],
    "exp": "The peak voltage is always significantly higher than the RMS value. Cable insulation must be designed to withstand this peak.",
    "cat": "PF_Fundamentals",
    "id": "T11P_121"
  },
  {
    "q": "If a ship's Main Switchboard shows 440V (RMS), what is the approximate Peak Voltage stressing the cable insulation?",
    "a": "622V",
    "opts": ["622V", "880V", "440V", "311V"],
    "exp": "440V \u00d7 1.414 = 622.16V. Insulation must be rated to survive these repeating 622V peaks.",
    "cat": "PF_Fundamentals",
    "id": "T11P_122"
  },
  {
    "q": "What is the difference between EMF (Electromotive Force) and Terminal Voltage (Potential Difference)?",
    "a": "EMF is the open-circuit voltage generated; Terminal Voltage drops lower under load due to internal resistance",
    "opts": ["EMF is for DC circuits; Terminal Voltage is for AC circuits", "They are exactly the same concept", "Terminal voltage is always higher than EMF", "EMF is the open-circuit voltage generated; Terminal Voltage drops lower under load due to internal resistance"],
    "exp": "Terminal Voltage = EMF - (I \u00d7 r_internal). When current flows, internal resistance inside the generator causes a voltage drop.",
    "cat": "PF_Fundamentals",
    "id": "T11P_123"
  },
  {
    "q": "Which meter on the Main Switchboard helps the ETO ensure the generator does not exceed its KVA limit?",
    "a": "The Ammeter",
    "opts": ["The Voltmeter", "The Ammeter", "The Frequency Meter", "The KW Meter"],
    "exp": "While KW meters show active load, the Ammeter shows the total current (combining KW and KVAR). If amps hit the red line, the KVA limit is reached.",
    "cat": "PF_Fundamentals",
    "id": "T11P_124"
  },
  {
    "q": "What creates the Reactive Power (KVAR) requirement in a three-phase induction motor?",
    "a": "The need to establish and maintain the rotating magnetic field in the air gap",
    "opts": ["The heat generated in the copper windings", "The need to establish and maintain the rotating magnetic field in the air gap", "The friction of the motor bearings", "The mechanical load attached to the shaft"],
    "exp": "Induction motors require a magnetic field to induce current in the rotor. This field is sustained by lagging reactive current.",
    "cat": "PF_Fundamentals",
    "id": "T11P_125"
  },
  {
    "q": "A pure capacitor is connected to an AC supply. What is the phase angle between voltage and current?",
    "a": "Current leads voltage by 90 degrees",
    "opts": ["Current lags voltage by 90 degrees", "Current and voltage are in phase (0 degrees)", "Current leads voltage by 90 degrees", "Voltage leads current by 180 degrees"],
    "exp": "In a pure capacitor, current must flow to build up charge before voltage can peak, causing a 90\u00b0 leading phase angle.",
    "cat": "PF_Fundamentals",
    "id": "T11P_126"
  },
  {
    "q": "Which component of power does the prime mover (diesel engine) actually supply fuel to produce?",
    "a": "Only the Active Power (KW) and the generator's physical losses",
    "opts": ["The Apparent Power (KVA) directly", "Both Active (KW) and Reactive (KVAR) power equally", "Only the Active Power (KW) and the generator's physical losses", "Only the Reactive Power (KVAR)"],
    "exp": "The engine only burns fuel to produce real work (KW) and overcome friction/heat. Reactive power (KVAR) is an electrical oscillation that requires no mechanical engine torque.",
    "cat": "PF_Fundamentals",
    "id": "T11P_127"
  },
  {
    "q": "If KVAR does not require engine torque, why does poor power factor still increase fuel consumption slightly?",
    "a": "The higher KVA current causes higher I\u00b2R (copper) heating losses in the generator, which the engine must overcome",
    "opts": ["The AVR burns fuel to create KVAR", "It doesn't; fuel consumption is strictly tied to KW", "The governor gets confused by KVAR", "The higher KVA current causes higher I\u00b2R (copper) heating losses in the generator, which the engine must overcome"],
    "exp": "While KVAR itself doesn't take torque, pushing massive reactive currents through resistive copper wires generates heat, which is a real KW loss the engine must fuel.",
    "cat": "PF_Fundamentals",
    "id": "T11P_128"
  },
  {
    "q": "What occurs to the magnetic field in an inductive circuit twice every AC cycle?",
    "a": "It builds up by drawing energy from the source, and then collapses, returning the energy to the source",
    "opts": ["It generates a DC offset", "It builds up by drawing energy from the source, and then collapses, returning the energy to the source", "It reverses direction instantly creating a spark", "It converts into active power"],
    "exp": "This continuous borrowing and returning of energy is the physical reality of Reactive Power (KVAR).",
    "cat": "PF_Fundamentals",
    "id": "T11P_129"
  },
  {
    "q": "A ship has a total load of 800 KW at 0.8 PF. What is the Apparent Power (KVA)?",
    "a": "1000 KVA",
    "opts": ["1200 KVA", "1000 KVA", "640 KVA", "800 KVA"],
    "exp": "KVA = KW / PF. 800 / 0.8 = 1000 KVA.",
    "cat": "PF_Fundamentals",
    "id": "T11P_130"
  },
  {
    "q": "What is 'Droop' in the context of generator control systems?",
    "a": "An intentional reduction in a controlled parameter (speed or voltage) as load increases, to enable stable parallel operation",
    "opts": ["A physical sag in the transmission cables due to heat", "The time delay before a circuit breaker trips", "An intentional reduction in a controlled parameter (speed or voltage) as load increases, to enable stable parallel operation", "The loss of excitation during a blackout"],
    "exp": "Without droop, paralleled generators would fight for the load, causing wild oscillations. Droop ensures they smoothly share the burden.",
    "cat": "Droop_Control",
    "id": "T11P_131"
  },
  {
    "q": "What parameter does Governor Droop (Speed Droop) control during parallel operation?",
    "a": "Active Power (KW) sharing",
    "opts": ["Harmonic distortion", "Active Power (KW) sharing", "Terminal Voltage", "Reactive Power (KVAR) sharing"],
    "exp": "The governor controls fuel to the engine, dictating the physical speed/frequency and therefore how much real KW load the machine takes.",
    "cat": "Droop_Control",
    "id": "T11P_132"
  },
  {
    "q": "What parameter does AVR Droop (Voltage Droop) control during parallel operation?",
    "a": "Reactive Power (KVAR) sharing",
    "opts": ["Active Power (KW) sharing", "Reactive Power (KVAR) sharing", "System Frequency", "Fuel consumption"],
    "exp": "The AVR controls the excitation field, determining terminal voltage and how much reactive KVAR current the machine supplies.",
    "cat": "Droop_Control",
    "id": "T11P_133"
  },
  {
    "q": "What is the typical setting for Governor and AVR Droop on marine generators?",
    "a": "3% to 5%",
    "opts": ["20% to 25%", "0% (Isochronous)", "3% to 5%", "10% to 15%"],
    "exp": "A 3-5% drop from no-load to full-load provides stable sharing without causing the system frequency or voltage to drop outside SOLAS limits.",
    "cat": "Droop_Control",
    "id": "T11P_134"
  },
  {
    "q": "If two generators are in parallel and one is taking 400 KW while the other takes 250 KW, what needs to be adjusted?",
    "a": "The Governor Droop settings",
    "opts": ["The AVR Droop settings", "The Excitation Current directly", "The Reverse Power Relay", "The Governor Droop settings"],
    "exp": "Unequal KW sharing is purely a governor (speed/fuel) problem. AVR adjustments will not fix a KW imbalance.",
    "cat": "Droop_Control",
    "id": "T11P_135"
  },
  {
    "q": "To make the overloaded (400 KW) generator shed some load to the underloaded (250 KW) generator, what do you do?",
    "a": "Slightly increase the governor droop on the 400 KW generator (or decrease it on the 250 KW generator)",
    "opts": ["Decrease the AVR droop on the 400 KW generator", "Increase the AVR droop on the 250 KW generator", "Decrease the governor droop on the 400 KW generator", "Slightly increase the governor droop on the 400 KW generator (or decrease it on the 250 KW generator)"],
    "exp": "Increasing droop makes that generator's frequency drop faster under load, causing it to 'back off' and shed KW to the other machine.",
    "cat": "Droop_Control",
    "id": "T11P_136"
  },
  {
    "q": "If two generators in parallel share KW equally, but Gen 1 has a PF of 0.7 and Gen 2 has a PF of 0.9, what is the problem?",
    "a": "Unequal KVAR sharing due to a mismatch in AVR Droop settings",
    "opts": ["One generator is running at a higher frequency", "Unequal KVAR sharing due to a mismatch in AVR Droop settings", "Unequal KW sharing due to Governor Droop mismatch", "The induction motors are malfunctioning"],
    "exp": "Different power factors with identical KW means the reactive load (KVAR) is unbalanced. This is fixed by tuning the AVR droop.",
    "cat": "Droop_Control",
    "id": "T11P_137"
  },
  {
    "q": "To fix a KVAR imbalance where Gen 1 is heavily overloaded with reactive current, what action is taken?",
    "a": "Increase the AVR droop on Gen 1 (or decrease it on Gen 2)",
    "opts": ["Increase the AVR droop on Gen 1 (or decrease it on Gen 2)", "Increase the Governor droop on Gen 1", "Increase the AVR droop on Gen 2", "Decrease the AVR droop on Gen 1"],
    "exp": "Increasing AVR droop makes Gen 1's voltage sag more aggressively under reactive load, forcing Gen 2 to pick up the slack.",
    "cat": "Droop_Control",
    "id": "T11P_138"
  },
  {
    "q": "What is the formula for calculating percentage droop?",
    "a": "Droop % = ((No-Load Value - Full-Load Value) / No-Load Value) \u00d7 100",
    "opts": ["Droop % = ((Full-Load Value - No-Load Value) / Full-Load Value) \u00d7 100", "Droop % = (Full-Load Value / No-Load Value) \u00d7 100", "Droop % = (No-Load Value / Full-Load Value) \u00d7 100", "Droop % = ((No-Load Value - Full-Load Value) / No-Load Value) \u00d7 100"],
    "exp": "This standard formula applies to both speed (Hz) and voltage (V).",
    "cat": "Droop_Control",
    "id": "T11P_139"
  },
  {
    "q": "If a 60 Hz generator has a 5% governor droop, what is its expected frequency at 100% full load?",
    "a": "57 Hz",
    "opts": ["63 Hz", "55 Hz", "57 Hz", "60 Hz"],
    "exp": "5% of 60 Hz is 3 Hz. 60 Hz - 3 Hz = 57 Hz.",
    "cat": "Droop_Control",
    "id": "T11P_140"
  },
  {
    "q": "What does a Load-Frequency graph for a generator with 4% droop look like?",
    "a": "A straight line sloping downwards from the no-load frequency to the full-load frequency",
    "opts": ["A curved exponential line", "A straight line sloping upwards", "A straight line sloping downwards from the no-load frequency to the full-load frequency", "A straight horizontal line"],
    "exp": "As KW (X-axis) increases, the Frequency (Y-axis) steadily drops, creating a downward slope.",
    "cat": "Droop_Control",
    "id": "T11P_141"
  },
  {
    "q": "How do two generators share load perfectly on a Load-Frequency graph?",
    "a": "Their droop lines must intersect at the exact same operating frequency and load point",
    "opts": ["One line must slope up while the other slopes down", "Their droop lines must intersect at the exact same operating frequency and load point", "They must have exactly 0% droop", "Their droop lines must be perfectly horizontal"],
    "exp": "Since paralleled generators are locked to the same bus frequency, they will naturally settle at the KW loads where their droop lines cross that common frequency.",
    "cat": "Droop_Control",
    "id": "T11P_142"
  },
  {
    "q": "What happens if a generator is operated in 'Isochronous' (0% droop) mode while in parallel with another generator?",
    "a": "It is unstable; the isochronous generator will try to maintain exact frequency, fighting the other generator and eventually taking all the load or motoring",
    "opts": ["It automatically switches to droop mode", "The AVR will shut down to protect the system", "It is unstable; the isochronous generator will try to maintain exact frequency, fighting the other generator and eventually taking all the load or motoring", "They will share load perfectly equally"],
    "exp": "Isochronous means flat (no droop). The governor will endlessly add fuel trying to pull the whole ship back to 60Hz, overloading itself.",
    "cat": "Droop_Control",
    "id": "T11P_143"
  },
  {
    "q": "When is it appropriate to use Isochronous (0% droop) mode?",
    "a": "When a single generator is running alone and must provide a perfectly constant frequency regardless of load",
    "opts": ["When running three or more generators in parallel", "Isochronous mode is never used on ships", "When synchronising with shore power", "When a single generator is running alone and must provide a perfectly constant frequency regardless of load"],
    "exp": "With no parallel machine to fight, a flat 60Hz output guarantees perfect timing for ship clocks and sensitive electronics.",
    "cat": "Droop_Control",
    "id": "T11P_144"
  },
  {
    "q": "On a ship with an automated Power Management System (PMS), who or what typically adjusts the governor setpoints to balance KW sharing?",
    "a": "The PMS automatically sends raise/lower pulses to the governors to balance the loads dynamically",
    "opts": ["The Chief Engineer adjusts the fuel racks mechanically", "The ETO turns the potentiometers manually every hour", "The PMS automatically sends raise/lower pulses to the governors to balance the loads dynamically", "The AVR communicates with the governor via Modbus"],
    "exp": "While basic droop provides natural sharing, the PMS constantly fine-tunes the speed settings (shifting the droop line up or down) to ensure perfect 50/50 sharing and keep the bus exactly at 60Hz.",
    "cat": "Droop_Control",
    "id": "T11P_145"
  },
  {
    "q": "If Gen A has a steeper droop slope (e.g., 5%) than Gen B (e.g., 3%), which one will pick up more load during a sudden spike in ship demand?",
    "a": "Gen B (3% droop) will pick up more load",
    "opts": ["Gen A (5% droop) will pick up more load", "Gen B (3% droop) will pick up more load", "They will pick up load equally", "Neither will pick up load"],
    "exp": "A shallower droop (3%) means the generator yields less frequency for a given load. It fights harder to maintain speed, absorbing more of the new KW load.",
    "cat": "Droop_Control",
    "id": "T11P_146"
  },
  {
    "q": "What component physically detects the reactive current in order to provide AVR Droop?",
    "a": "A Compounding Current Transformer (Droop CT) located in one of the stator phases",
    "opts": ["The main governor fuel actuator", "A reverse power relay", "A thermistor on the rotor", "A Compounding Current Transformer (Droop CT) located in one of the stator phases"],
    "exp": "The AVR needs to know how much current is flowing to droop the voltage. The droop CT provides a proportional signal derived from the stator current.",
    "cat": "Droop_Control",
    "id": "T11P_147"
  },
  {
    "q": "In a 440V AC system with 4% AVR droop, what is the approximate expected voltage at full reactive load?",
    "a": "422V",
    "opts": ["440V", "400V", "422V", "457V"],
    "exp": "4% of 440V = 17.6V. 440V - 17.6V = 422.4V.",
    "cat": "Droop_Control",
    "id": "T11P_148"
  },
  {
    "q": "Why does a generator with a perfectly flat AVR characteristic (0% voltage droop) cause problems in parallel?",
    "a": "Slight variations in excitation will cause massive circulating reactive currents between the generators",
    "opts": ["It makes the generator trip on reverse power", "Slight variations in excitation will cause massive circulating reactive currents between the generators", "It burns out the diesel engine", "It causes the frequency to fluctuate wildly"],
    "exp": "Without voltage droop to 'soften' the interaction, the two AVRs will aggressively fight each other to control the bus voltage, resulting in massive KVAR swings.",
    "cat": "Droop_Control",
    "id": "T11P_149"
  },
  {
    "q": "When adjusting droop on a modern electronic governor, what are you typically adjusting?",
    "a": "A multi-turn potentiometer on the governor control board or a software parameter in the digital controller",
    "opts": ["A multi-turn potentiometer on the governor control board or a software parameter in the digital controller", "The hydraulic oil pressure valve", "A heavy mechanical spring tensioner on the fuel rack", "The air intake damper"],
    "exp": "While old hydraulic governors used mechanical linkages, modern systems use digital settings or small trim-pots to define the droop curve.",
    "cat": "Droop_Control",
    "id": "T11P_150"
  },
  {
    "q": "Two generators are paralleled. The frequency meters read 60Hz. Gen 1 Ammeter reads 500A, Gen 2 reads 800A. KW meters read 300KW for both. What is happening?",
    "a": "Active load is shared equally, but reactive load is unequal due to AVR mismatch",
    "opts": ["Active load is unequal due to governor mismatch", "One generator is motoring", "Both KW and KVAR are shared equally", "Active load is shared equally, but reactive load is unequal due to AVR mismatch"],
    "exp": "KW is identical, so the governors are fine. The massive difference in total Amps means KVAR is severely unbalanced. Adjust the AVR.",
    "cat": "Droop_Control",
    "id": "T11P_151"
  },
  {
    "q": "What happens if the droop CT in the AVR circuit is wired with reversed polarity?",
    "a": "It causes positive feedback (negative droop), making the voltage rise with load, leading to severe instability in parallel",
    "opts": ["The generator stops producing voltage entirely", "The power factor becomes perfectly unity", "It causes positive feedback (negative droop), making the voltage rise with load, leading to severe instability in parallel", "The generator switches to isochronous mode"],
    "exp": "Instead of dropping voltage to share load, the AVR raises voltage, grabbing even more reactive load until the system trips.",
    "cat": "Droop_Control",
    "id": "T11P_152"
  },
  {
    "q": "If a generator is heavily overloaded and the governor runs out of fuel rack travel, what happens to the droop curve?",
    "a": "The generator speed/frequency will collapse far below the designed 5% droop line",
    "opts": ["The generator maintains speed using battery backup", "The generator speed/frequency will collapse far below the designed 5% droop line", "The droop curve flattens out perfectly", "The AVR takes over speed control"],
    "exp": "Droop assumes the engine has enough power to respond. If maxed out, it stalls, dragging frequency down until the under-frequency relay trips.",
    "cat": "Droop_Control",
    "id": "T11P_153"
  },
  {
    "q": "What is the 'No-Load Speed' in a droop calculation?",
    "a": "The frequency/speed the generator naturally runs at when its ACB is open and it is supplying zero KW",
    "opts": ["The rated speed minus 5%", "The speed the engine idles at before the generator is turned on", "The speed at which the reverse power relay trips", "The frequency/speed the generator naturally runs at when its ACB is open and it is supplying zero KW"],
    "exp": "The governor is set to run slightly fast (e.g., 61.8 Hz) when empty, so that when fully loaded it settles right at 60.0 Hz.",
    "cat": "Droop_Control",
    "id": "T11P_154"
  },
  {
    "q": "How does 'Speed Droop' relate to 'Speed Regulation'?",
    "a": "They are synonymous terms describing the change in steady-state speed between no-load and full-load",
    "opts": ["They are synonymous terms describing the change in steady-state speed between no-load and full-load", "There is no relationship", "Speed droop causes tripping, speed regulation prevents it", "Speed droop is for AC, speed regulation is for DC"],
    "exp": "In engineering literature, steady-state speed regulation and speed droop are the same characteristic.",
    "cat": "Droop_Control",
    "id": "T11P_155"
  },
  {
    "q": "When adjusting the governor droop potentiometer, what must the ETO monitor carefully?",
    "a": "The KW meters of both parallel generators, making adjustments in very small increments to avoid wild load swings",
    "opts": ["The KVAR meters", "The voltage meters", "The KW meters of both parallel generators, making adjustments in very small increments to avoid wild load swings", "The engine lube oil pressure"],
    "exp": "A tiny turn of the pot changes the mathematical slope drastically. Adjust slowly, let the engine settle, and watch the KW.",
    "cat": "Droop_Control",
    "id": "T11P_156"
  },
  {
    "q": "Is droop required for generators connected to entirely separate busbars (Split-Bus operation)?",
    "a": "No, because they are not interacting electrically; they could run in isochronous mode",
    "opts": ["Yes, to prevent the bus tie breaker from opening", "Yes, SOLAS requires 5% droop at all times", "No, but they require massive AVR droop instead", "No, because they are not interacting electrically; they could run in isochronous mode"],
    "exp": "Droop is purely a mechanism to arbitrate sharing *between* machines. A lone machine on a split bus doesn't share, so it doesn't need to droop.",
    "cat": "Droop_Control",
    "id": "T11P_157"
  },
  {
    "q": "What is the primary indicator that Governor Droop is incorrectly matched between two generators?",
    "a": "One generator takes a disproportionate amount of active (KW) load as total ship demand increases",
    "opts": ["Both generators output zero KVAR", "The synchronizing lamps stay dark permanently", "The voltage fluctuates violently", "One generator takes a disproportionate amount of active (KW) load as total ship demand increases"],
    "exp": "If they share equally at 200KW but completely diverge at 600KW, their droop slopes are not parallel.",
    "cat": "Droop_Control",
    "id": "T11P_158"
  },
  {
    "q": "Why is it important to balance KW and KVAR perfectly in parallel?",
    "a": "To maximize the total available capacity of the plant and prevent one machine from tripping on overcurrent while the other sits idle",
    "opts": ["To maximize the total available capacity of the plant and prevent one machine from tripping on overcurrent while the other sits idle", "To keep the frequency exactly at 50Hz", "To prevent the ship from rolling", "To stop the preferential trip from working"],
    "exp": "If Gen 1 hits its amp limit because of bad droop settings, it will trip, throwing the entire load onto Gen 2, causing a cascading blackout.",
    "cat": "Droop_Control",
    "id": "T11P_159"
  },
  {
    "q": "If a ship's PMS is broken, how does the ETO manually balance the KW load?",
    "a": "By using the manual governor raise/lower switches on the MSB to shift the speed setpoints until KW meters read equally",
    "opts": ["By using the manual governor raise/lower switches on the MSB to shift the speed setpoints until KW meters read equally", "By opening the bus tie breaker", "By turning the AVR trimmer", "By manually closing the throttle valves on the engine"],
    "exp": "The 'Raise/Lower' switch shifts the entire droop curve up or down vertically, physically moving load from one machine to the other.",
    "cat": "Droop_Control",
    "id": "T11P_160"
  },
  {
    "q": "Sequence of events: Two generators running in parallel. Gen 1 loses excitation. What is the FIRST major electrical symptom observed on the MSB?",
    "a": "Gen 1's Power Factor meter moves leading and its KVAR meter reverses (goes negative), showing it is absorbing reactive power",
    "opts": ["The frequency drops to 45Hz", "Gen 1's Power Factor meter moves leading and its KVAR meter reverses (goes negative), showing it is absorbing reactive power", "Gen 2 ACB trips immediately", "Gen 1 KW meter drops to zero instantly"],
    "exp": "Without a magnetic field, it acts as an induction generator, sucking massive KVAR from the healthy Gen 2 to stay magnetized.",
    "cat": "Parallel_Faults",
    "id": "T11P_161"
  },
  {
    "q": "During loss of excitation on Gen 1, what happens to the healthy Gen 2?",
    "a": "Its AVR senses dropping bus voltage and heavily increases excitation, causing Gen 2 to become severely overloaded on reactive current",
    "opts": ["Its frequency doubles", "It shuts down safely", "Its AVR senses dropping bus voltage and heavily increases excitation, causing Gen 2 to become severely overloaded on reactive current", "It loses KW load and motors"],
    "exp": "Gen 2 is now supplying the ship's load PLUS the massive reactive current demanded by the dead Gen 1.",
    "cat": "Parallel_Faults",
    "id": "T11P_162"
  },
  {
    "q": "Which protection relay is specifically designed to trip first during a loss of field event?",
    "a": "The Under-Excitation Relay (Loss of Field Relay or Minimum Excitation Limiter)",
    "opts": ["The Under-Voltage Trip", "The Reverse Power Relay", "The Under-Frequency Relay", "The Under-Excitation Relay (Loss of Field Relay or Minimum Excitation Limiter)"],
    "exp": "This relay monitors the KVAR flow. When it sees massive reverse KVAR (absorbing reactive power), it trips the breaker to save the healthy machine.",
    "cat": "Parallel_Faults",
    "id": "T11P_163"
  },
  {
    "q": "If the under-excitation relay fails during a loss of field, what is the required manual action by the ETO?",
    "a": "Immediately trip the faulty generator's ACB manually from the switchboard",
    "opts": ["Increase the governor speed on the faulty generator", "Turn off the ship's main engine", "Trip the healthy generator to save it", "Immediately trip the faulty generator's ACB manually from the switchboard"],
    "exp": "Waiting will cause Gen 2 to trip on overcurrent, causing a total blackout. You must surgically remove the dead generator.",
    "cat": "Parallel_Faults",
    "id": "T11P_164"
  },
  {
    "q": "Why doesn't the Reverse Power Relay trip during a loss of excitation event?",
    "a": "Because the prime mover is still running and supplying Active Power (KW); only the Reactive Power (KVAR) has reversed",
    "opts": ["Because the prime mover is still running and supplying Active Power (KW); only the Reactive Power (KVAR) has reversed", "Because the relay is too slow", "Because the voltage has collapsed", "Because the current is too high"],
    "exp": "Reverse power monitors KW. Loss of field reverses KVAR. The engine is still pushing real torque, so KW stays positive.",
    "cat": "Parallel_Faults",
    "id": "T11P_165"
  },
  {
    "q": "What happens if a rotating diode on a brushless alternator fails OPEN CIRCUIT while in parallel?",
    "a": "The field receives pulsating half-wave DC; the generator voltage and current will hunt/oscillate rhythmically",
    "opts": ["The power factor becomes 1.0", "The prime mover stalls", "The generator trips instantly on overcurrent", "The field receives pulsating half-wave DC; the generator voltage and current will hunt/oscillate rhythmically"],
    "exp": "Losing one diode means the 3-phase bridge is broken. The ripple frequency causes the magnetic field to throb, making the ammeter needle swing.",
    "cat": "Parallel_Faults",
    "id": "T11P_166"
  },
  {
    "q": "How does an OPEN CIRCUIT rotating diode failure usually present to the operator?",
    "a": "Gradually; the generator slowly loses ability to hold steady load sharing, with visibly swinging meters",
    "opts": ["Gradually; the generator slowly loses ability to hold steady load sharing, with visibly swinging meters", "Catastrophically; an immediate explosion in the MSB", "Audibly; the generator emits a loud siren", "It shows no symptoms until blackout"],
    "exp": "The machine can still limp along, but the pulsing field makes it a very 'bumpy' parallel partner.",
    "cat": "Parallel_Faults",
    "id": "T11P_167"
  },
  {
    "q": "What happens if a rotating diode fails SHORT CIRCUIT while in parallel?",
    "a": "It creates a massive circulating current in the exciter, dropping terminal voltage sharply and causing severe overheating",
    "opts": ["The reverse power relay trips after 5 seconds", "The generator continues normally but with low power factor", "It creates a massive circulating current in the exciter, dropping terminal voltage sharply and causing severe overheating", "The engine over-speeds instantly"],
    "exp": "A shorted diode bypasses the main field entirely. The exciter essentially shorts into itself, frying the rotor.",
    "cat": "Parallel_Faults",
    "id": "T11P_168"
  },
  {
    "q": "Which protection relay usually trips the generator during a SHORT CIRCUITED rotating diode fault?",
    "a": "The Overcurrent Relay (OCR) on the main ACB, or under-voltage if the field collapses completely",
    "opts": ["The Overcurrent Relay (OCR) on the main ACB, or under-voltage if the field collapses completely", "The Preferential Trip", "The Over-Frequency Relay", "The Reverse Power Relay"],
    "exp": "The sudden distortion in the field causes wild, massive current surges in the stator, tripping the breaker rapidly to prevent fire.",
    "cat": "Parallel_Faults",
    "id": "T11P_169"
  },
  {
    "q": "Can rotating diodes be replaced while the ship is at sea?",
    "a": "Yes, but the generator must be stopped, isolated, and locked out; you cannot repair them while the machine is running",
    "opts": ["No, the entire generator must be replaced", "No, it requires dry dock and removal of the rotor", "Yes, but the generator must be stopped, isolated, and locked out; you cannot repair them while the machine is running", "Yes, they can be hot-swapped while running"],
    "exp": "They are physically bolted to the rotating shaft inside the casing. The machine must be dead and LOTO applied before opening the covers.",
    "cat": "Parallel_Faults",
    "id": "T11P_170"
  },
  {
    "q": "You are asked to parallel Gen 1 (PF 0.8) and Gen 2 (PF 0.7). After closing the breaker, how do you balance the KVAR?",
    "a": "Adjust the AVR droop setting of Gen 2 to shed its excess reactive load until both PFs equalize",
    "opts": ["Turn off the induction motors on the ship", "Increase the excitation of Gen 1 only", "Adjust the AVR droop setting of Gen 2 to shed its excess reactive load until both PFs equalize", "Adjust the Governor droop of Gen 1"],
    "exp": "Before paralleling, their isolated PFs indicate their internal reactive characteristics or unequal bus loads. Once tied together, tweaking the AVR balances the reactive burden.",
    "cat": "Parallel_Faults",
    "id": "T11P_171"
  },
  {
    "q": "If one generator is running noticeably hotter than the other in parallel (all meters read normal), what is a likely cause?",
    "a": "Clogged ventilation air filters or blocked cooling ducts reducing airflow",
    "opts": ["The AVR is set too high", "Clogged ventilation air filters or blocked cooling ducts reducing airflow", "The reverse power relay is broken", "The governor droop is inverted"],
    "exp": "If KW and KVAR are truly equal, the electrical generation is fine. The heat removal system (filters/fans) must be failing.",
    "cat": "Parallel_Faults",
    "id": "T11P_172"
  },
  {
    "q": "What hidden electrical fault could cause one generator to run hot despite equal KW/KVAR meter readings?",
    "a": "A single-phase imbalance (one phase carrying much more current), not visible if meters only show average or a single phase",
    "opts": ["A failed reverse power relay", "A shorted earth fault lamp", "The synchroscope being left ON", "A single-phase imbalance (one phase carrying much more current), not visible if meters only show average or a single phase"],
    "exp": "If lighting or single-phase loads are dumped heavily onto Phase A, that specific winding will overheat. Check individual phase amps.",
    "cat": "Parallel_Faults",
    "id": "T11P_173"
  },
  {
    "q": "If the Synchroscope is broken, what alternative method is used to parallel generators?",
    "a": "The Synchronising Lamps (e.g., Three Dark or Two Bright One Dark method)",
    "opts": ["The Synchronising Lamps (e.g., Three Dark or Two Bright One Dark method)", "Plugging in a standard multimeter", "Using the Earth Fault indicator lamps", "Guessing by the sound of the engines"],
    "exp": "Lamps wired across the breaker contacts provide a visual beat of the phase difference, allowing manual synchronization without the dial instrument.",
    "cat": "Parallel_Faults",
    "id": "T11P_174"
  },
  {
    "q": "In the 'Three Dark Lamps' method, when is the exact correct moment to close the breaker?",
    "a": "When all three lamps are completely dark, indicating zero voltage difference between the incoming phases and the busbars",
    "opts": ["When the lamps are flashing rapidly", "When all three lamps are at maximum brightness", "When one lamp is dark and two are bright", "When all three lamps are completely dark, indicating zero voltage difference between the incoming phases and the busbars"],
    "exp": "Dark lamps mean the phases are perfectly aligned (no potential difference across the open breaker contacts to light the bulbs).",
    "cat": "Parallel_Faults",
    "id": "T11P_175"
  },
  {
    "q": "What is the advantage of the 'Two Bright One Dark' lamp method over the 'Three Dark' method?",
    "a": "It indicates the direction of slip (FAST or SLOW) based on the rotational sequence of the brightening lamps",
    "opts": ["It uses less electricity", "It indicates the direction of slip (FAST or SLOW) based on the rotational sequence of the brightening lamps", "It works even if the lamps burn out", "It prevents the generator from reverse motoring"],
    "exp": "By cross-wiring two lamps, they create a chasing effect that mimics the synchroscope dial, letting the operator know whether to increase or decrease speed.",
    "cat": "Parallel_Faults",
    "id": "T11P_176"
  },
  {
    "q": "What happens if you close the ACB when the incoming generator is 180 degrees out of phase with the busbar?",
    "a": "A catastrophic explosion, immense short-circuit forces, and possible twisting/breaking of the engine crankshaft",
    "opts": ["The reverse power relay trips gently", "The voltage merely drops for a few seconds", "The generator seamlessly synchronizes itself", "A catastrophic explosion, immense short-circuit forces, and possible twisting/breaking of the engine crankshaft"],
    "exp": "180 degrees out means you are connecting +440V to -440V. The resulting current spike generates physical torque that destroys the heavy machinery.",
    "cat": "Parallel_Faults",
    "id": "T11P_177"
  },
  {
    "q": "While trying to synchronize, the synchroscope needle is spinning wildly and too fast to read. What must the ETO do?",
    "a": "Adjust the governor speed of the incoming generator to bring the frequency very close to the bus frequency, slowing the needle down",
    "opts": ["Trip the running generator", "Adjust the governor speed of the incoming generator to bring the frequency very close to the bus frequency, slowing the needle down", "Close the breaker immediately and hope for the best", "Increase the AVR voltage massively"],
    "exp": "The speed of the needle is the slip frequency (difference in Hz). You must match RPMs until the needle is barely crawling clockwise.",
    "cat": "Parallel_Faults",
    "id": "T11P_178"
  },
  {
    "q": "Why should the synchroscope needle be moving slightly CLOCKWISE (FAST) when closing the breaker?",
    "a": "So the incoming generator is slightly faster, ensuring it immediately picks up a small active load (KW) and avoids reverse power tripping",
    "opts": ["Because anti-clockwise damages the dial", "So it draws leading KVAR", "So the incoming generator is slightly faster, ensuring it immediately picks up a small active load (KW) and avoids reverse power tripping", "To prevent the voltage from spiking"],
    "exp": "If it is SLOW, it connects and gets dragged forward by the bus, instantly causing negative KW and a reverse power trip.",
    "cat": "Parallel_Faults",
    "id": "T11P_179"
  },
  {
    "q": "What is the function of the 'Check Sync' relay?",
    "a": "It electrically blocks the ACB closing command unless the voltage, frequency, and phase angle are all within strict safe limits",
    "opts": ["It automatically starts the standby generator", "It electrically blocks the ACB closing command unless the voltage, frequency, and phase angle are all within strict safe limits", "It measures the power factor", "It checks the lube oil pressure"],
    "exp": "This is an idiot-proof safety device. Even if you press CLOSE at the wrong time, the relay denies the signal to the closing coil to prevent disaster.",
    "cat": "Parallel_Faults",
    "id": "T11P_180"
  },
  {
    "q": "During parallel operation, a sudden heavy load (e.g., crane) causes Gen 1 to trip. What is the immediate consequence for Gen 2?",
    "a": "Gen 2 must suddenly supply the entire load; if it exceeds its capacity, the preferential trip activates or Gen 2 also trips, causing blackout",
    "opts": ["Gen 2 slows down gracefully to 10Hz", "Gen 2 must suddenly supply the entire load; if it exceeds its capacity, the preferential trip activates or Gen 2 also trips, causing blackout", "Gen 2 automatically disconnects the crane", "Gen 2 reverse powers"],
    "exp": "Cascading failure is the great fear of parallel operation. One machine dies, throwing its burden onto the survivor.",
    "cat": "Parallel_Faults",
    "id": "T11P_181"
  },
  {
    "q": "How does the Power Management System (PMS) prevent cascading blackouts when one generator fails in parallel?",
    "a": "It instantly executes Priority Load Shedding, dumping heavy non-essential consumers before the surviving generator's OCR can trip",
    "opts": ["It instantly executes Priority Load Shedding, dumping heavy non-essential consumers before the surviving generator's OCR can trip", "It connects shore power automatically", "It starts the emergency generator", "It injects extra fuel into the survivor"],
    "exp": "The PMS reacts in milliseconds, ripping the galley and A/C off the bus to ensure the propulsion and steering survive.",
    "cat": "Parallel_Faults",
    "id": "T11P_182"
  },
  {
    "q": "You find a blown fuse in the AVR circuit of a running generator. What is the likely result?",
    "a": "Loss of excitation; the generator voltage collapses, and if in parallel, it motors and causes reactive overload on the other machine",
    "opts": ["The generator over-speeds", "The generator produces pure DC power", "Loss of excitation; the generator voltage collapses, and if in parallel, it motors and causes reactive overload on the other machine", "The power factor improves to 1.0"],
    "exp": "A blown sensing or power fuse kills the AVR output, starving the rotor of its magnetic field.",
    "cat": "Parallel_Faults",
    "id": "T11P_183"
  },
  {
    "q": "What does a 'Hunting' governor do during parallel operation?",
    "a": "It causes continuous, rhythmic surging of fuel, making KW load swing violently back and forth between the two generators",
    "opts": ["It searches for the best radio frequency", "It causes continuous, rhythmic surging of fuel, making KW load swing violently back and forth between the two generators", "It smoothly balances the KVAR", "It trips the reverse power relay instantly"],
    "exp": "A sticky or badly tuned governor constantly over-corrects, causing a see-saw effect on the KW meters.",
    "cat": "Parallel_Faults",
    "id": "T11P_184"
  },
  {
    "q": "If one generator is hunting, how do you identify WHICH one is causing the problem?",
    "a": "Isolate them and run them individually on steady load; the faulty one will show frequency/RPM fluctuations",
    "opts": ["Isolate them and run them individually on steady load; the faulty one will show frequency/RPM fluctuations", "Measure the excitation voltage", "Feel which one is hotter", "Look at the KVAR meters"],
    "exp": "In parallel, they are locked together, so both meters swing. Separating them reveals which governor is unstable.",
    "cat": "Parallel_Faults",
    "id": "T11P_185"
  },
  {
    "q": "What happens if the primary generator prime mover fails completely, and the Reverse Power Relay is broken?",
    "a": "The generator acts as a massive motor, driving the dead diesel engine using power from the healthy generator, destroying the engine cylinders",
    "opts": ["The under-voltage trip activates", "The generator acts as a massive motor, driving the dead diesel engine using power from the healthy generator, destroying the engine cylinders", "The ship speeds up", "The healthy generator simply takes over without issue"],
    "exp": "Without fuel to lubricate the cylinder walls, the piston rings score and seize, causing immense mechanical damage.",
    "cat": "Parallel_Faults",
    "id": "T11P_186"
  },
  {
    "q": "How can the ETO differentiate between a Loss of Excitation and a Prime Mover Failure just by looking at the MSB meters?",
    "a": "Loss of Excitation shows massive negative KVAR and leading PF; Prime Mover Failure shows negative KW (Reverse Power)",
    "opts": ["Prime Mover Failure causes extreme high voltage", "Loss of Excitation shows massive negative KVAR and leading PF; Prime Mover Failure shows negative KW (Reverse Power)", "Loss of Excitation causes over-frequency", "They look identical on all meters"],
    "exp": "KVAR reversal = magnetic field failure. KW reversal = engine torque failure.",
    "cat": "Parallel_Faults",
    "id": "T11P_187"
  },
  {
    "q": "What is the primary danger of operating a generator with an open-circuited rotating diode for a long period?",
    "a": "The unbalanced ripple current induces severe heating in the rotor and stator, leading to insulation failure and winding burnout",
    "opts": ["It causes the battery to drain", "It reverses the phase sequence", "The unbalanced ripple current induces severe heating in the rotor and stator, leading to insulation failure and winding burnout", "It magnetizes the ship's hull"],
    "exp": "While it can 'limp' along, the throbbing magnetic field creates heavy harmonic losses and vibration, destroying the machine.",
    "cat": "Parallel_Faults",
    "id": "T11P_188"
  },
  {
    "q": "If two generators refuse to synchronise automatically because the synchroscope needle stays perfectly still at 6 o'clock (180 out), what is the issue?",
    "a": "The frequencies are perfectly matched, but they are locked out of phase. The governor speed must be bumped slightly to make the needle rotate",
    "opts": ["The breaker is broken", "The frequencies are perfectly matched, but they are locked out of phase. The governor speed must be bumped slightly to make the needle rotate", "The voltage is too high", "The phase sequence is backwards"],
    "exp": "If f1 = f2 exactly, the phase difference never changes. You must momentarily speed up or slow down the incoming machine so it 'laps' the bus and reaches 12 o'clock.",
    "cat": "Parallel_Faults",
    "id": "T11P_189"
  },
  {
    "q": "Why must the ETO never use the 'Isochronous' mode button while generators are running in parallel?",
    "a": "It disables droop, causing the generators to violently fight each other for load until one trips on overcurrent or reverse power",
    "opts": ["It disconnects the synchroscope", "It disables droop, causing the generators to violently fight each other for load until one trips on overcurrent or reverse power", "It locks the ACB closed permanently", "It turns off the AVRs"],
    "exp": "Droop is the peace-maker. Isochronous makes both governors infinitely aggressive, leading to immediate system collapse.",
    "cat": "Parallel_Faults",
    "id": "T11P_190"
  },
  {
    "q": "Why is a low (poor) Power Factor harmful to the ship's electrical system?",
    "a": "It forces the generator to supply high reactive current, which causes excessive I\u00b2R heating losses in cables and reduces the useful KW capacity of the generator",
    "opts": ["It forces the generator to supply high reactive current, which causes excessive I\u00b2R heating losses in cables and reduces the useful KW capacity of the generator", "It causes the fuel to freeze", "It causes the voltage to spike to 1000V", "It increases the speed of the induction motors"],
    "exp": "You are wasting current-carrying capacity on non-working KVAR, generating useless heat and starving the grid of real power.",
    "cat": "PF_Improvement",
    "id": "T11P_191"
  },
  {
    "q": "What is a Synchronous Condenser?",
    "a": "An overexcited synchronous motor running freely with no mechanical load, used to generate leading KVAR and improve system power factor",
    "opts": ["A transformer that converts leading to lagging power", "A massive capacitor bank used to store DC voltage", "A steam condenser cooled by synchronous fans", "An overexcited synchronous motor running freely with no mechanical load, used to generate leading KVAR and improve system power factor"],
    "exp": "By cranking up the DC excitation, the synchronous motor pushes leading reactive current back into the grid, cancelling out the lagging current from induction motors.",
    "cat": "PF_Improvement",
    "id": "T11P_192"
  },
  {
    "q": "What is the primary advantage of a Synchronous Condenser over Static Capacitor Banks?",
    "a": "It provides smooth, continuously variable KVAR correction by adjusting the field current, whereas capacitors are fixed blocks",
    "opts": ["It can start automatically without electricity", "It provides smooth, continuously variable KVAR correction by adjusting the field current, whereas capacitors are fixed blocks", "It is much cheaper and requires no maintenance", "It consumes absolutely zero real power (KW)"],
    "exp": "Capacitors are either ON or OFF. A synchronous condenser can be dialed in via its AVR to provide the exact amount of KVAR needed dynamically.",
    "cat": "PF_Improvement",
    "id": "T11P_193"
  },
  {
    "q": "Can a Synchronous Condenser absorb reactive power (KVAR) as well as generate it?",
    "a": "Yes, by under-exciting the field, it absorbs leading KVAR, which is useful for correcting highly capacitive loads like long empty HV cables",
    "opts": ["Yes, by under-exciting the field, it absorbs leading KVAR, which is useful for correcting highly capacitive loads like long empty HV cables", "No, it can only generate leading KVAR", "No, it explodes if under-excited", "Yes, but only if the mechanical shaft is stopped"],
    "exp": "This dual-mode flexibility makes it superior for large, complex power grids that swing between lagging and leading states.",
    "cat": "PF_Improvement",
    "id": "T11P_194"
  },
  {
    "q": "What is a Static Capacitor Bank?",
    "a": "A set of fixed industrial capacitors connected in parallel with inductive loads to provide leading reactive power",
    "opts": ["A battery bank used for emergency DC lighting", "A device that converts active power to reactive power", "A static charge eliminator for the hull", "A set of fixed industrial capacitors connected in parallel with inductive loads to provide leading reactive power"],
    "exp": "These are simply big capacitors switched onto the busbar. They cancel out the lagging motor current locally.",
    "cat": "PF_Improvement",
    "id": "T11P_195"
  },
  {
    "q": "What is the main drawback of using Static Capacitor Banks on ships?",
    "a": "They provide fixed steps of correction; over-correcting can cause leading power factor and dangerous voltage spikes",
    "opts": ["They provide fixed steps of correction; over-correcting can cause leading power factor and dangerous voltage spikes", "They only work on DC systems", "They draw immense amounts of active power (KW)", "They have rotating parts that wear out quickly"],
    "exp": "If large motors switch off but the capacitor bank stays on, the system becomes over-compensated (leading PF), causing the AVRs to struggle with high voltage.",
    "cat": "PF_Improvement",
    "id": "T11P_196"
  },
  {
    "q": "How does the loading of an Induction Motor affect its power factor?",
    "a": "A lightly loaded motor has a terrible power factor (e.g., 0.3) because the constant magnetizing current dominates; heavily loaded motors have better PF (e.g., 0.85)",
    "opts": ["A lightly loaded motor has a terrible power factor (e.g., 0.3) because the constant magnetizing current dominates; heavily loaded motors have better PF (e.g., 0.85)", "Heavily loaded motors draw entirely reactive current", "A lightly loaded motor has a perfect PF of 1.0", "Loading has no effect on power factor"],
    "exp": "The KVAR needed to sustain the magnetic field is constant regardless of load. If KW drops (light load), the ratio (KW/KVA) plummets.",
    "cat": "PF_Improvement",
    "id": "T11P_197"
  },
  {
    "q": "What operational practice by the crew can naturally improve the ship's overall power factor?",
    "a": "Avoiding running large motors (like cargo pumps) lightly loaded, and ensuring appropriately sized motors are used for tasks",
    "opts": ["Turning off all lighting on the ship", "Increasing the frequency of the generators", "Avoiding running large motors (like cargo pumps) lightly loaded, and ensuring appropriately sized motors are used for tasks", "Running all standby pumps simultaneously"],
    "exp": "Stopping unnecessary idling motors removes their massive magnetising KVAR penalty from the grid.",
    "cat": "PF_Improvement",
    "id": "T11P_198"
  },
  {
    "q": "How do Variable Frequency Drives (VFDs) impact the ship's power factor?",
    "a": "VFDs with active front-end rectifiers draw near-unity (1.0) power factor from the supply grid, effectively eliminating the motor's lagging KVAR from the main bus",
    "opts": ["VFDs only run on leading power factor", "VFDs destroy the power factor, causing it to drop to 0.1", "VFDs convert all KVAR into KW", "VFDs with active front-end rectifiers draw near-unity (1.0) power factor from the supply grid, effectively eliminating the motor's lagging KVAR from the main bus"],
    "exp": "The VFD's DC link isolates the motor from the grid. The rectifier draws clean, in-phase current from the generator, significantly improving total ship PF.",
    "cat": "PF_Improvement",
    "id": "T11P_199"
  },
  {
    "q": "Can you improve the Power Factor of the LOAD by adjusting the Generator's AVR?",
    "a": "No, adjusting the AVR only changes how reactive power is shared between generators; the total KVAR demanded by the ship's motors remains exactly the same",
    "opts": ["Yes, increasing AVR voltage pushes the PF to 1.0", "No, adjusting the AVR only changes how reactive power is shared between generators; the total KVAR demanded by the ship's motors remains exactly the same", "No, the AVR only controls Active Power (KW)", "Yes, decreasing excitation destroys reactive power"],
    "exp": "The load dictates the power triangle. The AVR merely decides which machine does the heavy lifting of providing that required KVAR.",
    "cat": "PF_Improvement",
    "id": "T11P_200"
  },
  {
    "q": "Where does Reactive Power (KVAR) physically go?",
    "a": "It is not consumed; it oscillates back and forth between the generator and the load every half cycle to sustain magnetic fields",
    "opts": ["It dissipates into the ship's hull via the grounding wire", "It is not consumed; it oscillates back and forth between the generator and the load every half cycle to sustain magnetic fields", "It is converted directly into shaft torque", "It is burned off as heat in the motor bearings"],
    "exp": "It acts like a sloshing wave in a pipe. It takes up room in the pipe (cable capacity) but doesn't push any water out the end (no real work).",
    "cat": "PF_Improvement",
    "id": "T11P_201"
  },
  {
    "q": "Why is poor Power Factor a financial concern when the ship is connected to Shore Power (Cold Ironing)?",
    "a": "Shore utility companies charge industrial users penalties for poor power factor because they must supply and transport the wasteful KVAR current",
    "opts": ["Because the shore cables will freeze", "Because shore power cannot generate KVAR", "Because low PF causes the meter to spin backward", "Shore utility companies charge industrial users penalties for poor power factor because they must supply and transport the wasteful KVAR current"],
    "exp": "Onboard, fuel cost is tied to KW, but poor PF limits generator capacity. Ashore, utilities meter KVA or bill explicitly for KVAR, hitting the ship owner's wallet directly.",
    "cat": "PF_Improvement",
    "id": "T11P_202"
  },
  {
    "q": "What is a 'Phase Advancer'?",
    "a": "A device mounted on the shaft of a slip-ring induction motor that injects EMF into the rotor to improve its power factor",
    "opts": ["A software program in the VFD", "A type of capacitor bank", "A device mounted on the shaft of a slip-ring induction motor that injects EMF into the rotor to improve its power factor", "A massive transformer for shore power"],
    "exp": "By providing magnetizing current locally to the rotor, the stator stops drawing lagging KVAR from the main grid. Used on very large, older cargo pumps.",
    "cat": "PF_Improvement",
    "id": "T11P_203"
  },
  {
    "q": "Why is it important to switch off fixed Capacitor Banks when the large motors they support are turned off?",
    "a": "To prevent an over-compensated (leading) power factor, which can cause severe over-voltage and destabilize the generators",
    "opts": ["Because capacitors consume massive KW when idle", "To prevent the capacitors from exploding", "To stop the batteries from draining", "To prevent an over-compensated (leading) power factor, which can cause severe over-voltage and destabilize the generators"],
    "exp": "Leaving 500 KVAR of capacitors on an empty bus forces the AVR to crush excitation to stop voltage from rocketing, risking a loss-of-field trip.",
    "cat": "PF_Improvement",
    "id": "T11P_204"
  },
  {
    "q": "How does an Automatic Power Factor Controller (APFC) panel work?",
    "a": "It uses a microprocessor to monitor the main bus PF and automatically switches individual capacitor contactors in or out to maintain a set target PF (e.g., 0.95)",
    "opts": ["It commands the AVR to increase voltage", "It uses a microprocessor to monitor the main bus PF and automatically switches individual capacitor contactors in or out to maintain a set target PF (e.g., 0.95)", "It manually turns off induction motors", "It starts the synchronous condenser motor"],
    "exp": "APFC panels solve the 'fixed block' problem by stepping banks in and out dynamically as the ship's load profile changes.",
    "cat": "PF_Improvement",
    "id": "T11P_205"
  },
  {
    "q": "What component is used in series with power factor correction capacitors to prevent resonance and protect against harmonic currents?",
    "a": "Detuning Reactors (Inductors)",
    "opts": ["Detuning Reactors (Inductors)", "Diodes", "Thyristors", "Large resistors"],
    "exp": "Capacitors act as a sink for high-frequency harmonics from VFDs, which can fry them. Detuning reactors block these harmful frequencies.",
    "cat": "PF_Improvement",
    "id": "T11P_206"
  },
  {
    "q": "If a ship's PF improves from 0.7 to 0.9, what happens to the current (Amps) drawn from the generator for the same KW load?",
    "a": "The current decreases significantly",
    "opts": ["The current increases significantly", "The current remains exactly the same", "The current decreases significantly", "The current fluctuates wildly"],
    "exp": "Better PF means less 'useless' KVAR current is sloshing around. Total Amps drop, freeing up generator capacity and cooling the cables.",
    "cat": "PF_Improvement",
    "id": "T11P_207"
  },
  {
    "q": "If a ship's PF improves from 0.7 to 0.9, what happens to the active power (KW) supplied by the generator?",
    "a": "It remains roughly the same (excluding minor I\u00b2R loss reductions)",
    "opts": ["It increases by 20%", "It drops by 20%", "It remains roughly the same (excluding minor I\u00b2R loss reductions)", "It drops to zero"],
    "exp": "Improving PF doesn't change the physical work being done (the pumps still push the same water). It only eliminates the reactive overhead.",
    "cat": "PF_Improvement",
    "id": "T11P_208"
  },
  {
    "q": "Why are Synchronous Motors often used instead of Induction Motors for very large, constant-speed applications (like main propulsion on cruise ships)?",
    "a": "Because they can be run overexcited to provide leading KVAR to the grid, improving the overall ship power factor, and they are highly efficient",
    "opts": ["Because they can be run overexcited to provide leading KVAR to the grid, improving the overall ship power factor, and they are highly efficient", "Because they do not require an electrical supply", "Because they are much cheaper to buy", "Because they start instantly without drawing high current"],
    "exp": "A large synchronous propulsion motor pulling double-duty as a massive PF compensator saves the need for massive separate capacitor banks.",
    "cat": "PF_Improvement",
    "id": "T11P_209"
  },
  {
    "q": "Why is a Synchronous Motor NOT self-starting when connected directly to the AC line?",
    "a": "The stator magnetic field rotates at high speed instantly; the heavy rotor cannot catch up to lock in due to inertia, resulting in zero net average torque",
    "opts": ["The rotor is made of wood", "The DC excitation kills the AC field", "The stator magnetic field rotates at high speed instantly; the heavy rotor cannot catch up to lock in due to inertia, resulting in zero net average torque", "It requires a massive capacitor to fire"],
    "exp": "The 50Hz field flips 100 times a second. The rotor just vibrates. It needs help getting up to speed before the DC field is locked in.",
    "cat": "PF_Improvement",
    "id": "T11P_210"
  },
  {
    "q": "How is a Synchronous Motor typically started?",
    "a": "By using amortisseur (damper) squirrel-cage windings on the rotor so it starts as an induction motor, then applying DC field near synchronous speed",
    "opts": ["By applying 10,000 Volts", "By using amortisseur (damper) squirrel-cage windings on the rotor so it starts as an induction motor, then applying DC field near synchronous speed", "By manually turning the shaft", "By reversing the phases rapidly"],
    "exp": "The damper windings let it drag itself up to ~95% speed. Then the DC is slammed on, and the magnetic poles 'snap' together, pulling into sync.",
    "cat": "PF_Improvement",
    "id": "T11P_211"
  },
  {
    "q": "What happens if a Synchronous Motor loses its DC excitation while running under heavy load?",
    "a": "It loses synchronism and falls out of step, causing massive current surges and violent mechanical vibrations until it trips",
    "opts": ["It reverses direction", "It immediately generates 440V back into the grid", "It runs normally but at half speed", "It loses synchronism and falls out of step, causing massive current surges and violent mechanical vibrations until it trips"],
    "exp": "Without the electromagnet lock, the rotor slips violently against the rotating stator field. The 'pull-out' relay detects this and trips the breaker.",
    "cat": "PF_Improvement",
    "id": "T11P_212"
  },
  {
    "q": "What is the primary function of the Preferential Trip (Load Shedding) system?",
    "a": "To automatically disconnect non-essential loads in stages when the generator is overloaded, preventing a total blackout",
    "opts": ["To automatically disconnect non-essential loads in stages when the generator is overloaded, preventing a total blackout", "To automatically start the emergency generator", "To prioritize the cooling water pumps during startup", "To disconnect the shore power cable safely"],
    "exp": "Sacrificing hotel loads keeps the propulsion and steering alive, saving the ship from losing control.",
    "cat": "Power_Systems",
    "id": "T11P_213"
  },
  {
    "q": "What types of loads are strictly FORBIDDEN from being shed by the preferential trip system?",
    "a": "Essential safety and navigation loads (e.g., Steering gear, GMDSS, Fire pump, Nav lights)",
    "opts": ["Fresh water generators", "Air conditioning and galley ovens", "Essential safety and navigation loads (e.g., Steering gear, GMDSS, Fire pump, Nav lights)", "Cargo pumps and winches"],
    "exp": "SOLAS dictates that critical survival equipment cannot be automatically stripped of power unless a full blackout occurs.",
    "cat": "Power_Systems",
    "id": "T11P_214"
  },
  {
    "q": "What mechanical device historically provides the 5-15 second time delay in a preferential trip relay?",
    "a": "A dashpot (an oil-filled cylinder with a piston and restricted needle valve)",
    "opts": ["A heavy flywheel", "A bimetallic strip", "A dashpot (an oil-filled cylinder with a piston and restricted needle valve)", "A quartz oscillator"],
    "exp": "The magnetic coil pulls against the oil. The delay ensures large motor starting transients don't falsely dump the galley.",
    "cat": "Power_Systems",
    "id": "T11P_215"
  },
  {
    "q": "What happens if a 60 Hz ship connects to a 50 Hz shore power supply without a frequency converter?",
    "a": "All induction motors will run 16.6% slower, reducing pump/fan output, and transformers may overheat due to increased core flux",
    "opts": ["The preferential trip will activate instantly", "All motors will run faster and explode", "All induction motors will run 16.6% slower, reducing pump/fan output, and transformers may overheat due to increased core flux", "The ship's voltage will double to 880V"],
    "exp": "Motor speed is proportional to frequency (Ns = 120f/p). A 60Hz cooling pump running on 50Hz may not provide enough flow to cool the idling engines.",
    "cat": "Power_Systems",
    "id": "T11P_216"
  },
  {
    "q": "Why do transformers designed for 60 Hz overheat when run on 50 Hz at the same voltage?",
    "a": "The V/f ratio increases, causing the iron core to saturate with magnetic flux, resulting in massive heat from iron losses and huge magnetizing currents",
    "opts": ["The V/f ratio increases, causing the iron core to saturate with magnetic flux, resulting in massive heat from iron losses and huge magnetizing currents", "The insulation breaks down chemically at 50Hz", "50Hz electricity has more friction", "The copper wire shrinks in 50Hz"],
    "exp": "Flux is proportional to Volts/Hz. Dropping Hz increases Flux. When the core saturates, it acts like a short circuit to the AC line.",
    "cat": "Power_Systems",
    "id": "T11P_217"
  },
  {
    "q": "According to SOLAS II-1/Reg 40.3, what are the strict performance limits for a marine Automatic Voltage Regulator (AVR)?",
    "a": "Maintain voltage within \u00b12.5% steady state, and recover to \u00b12.5% within 1.5 seconds of a sudden full-load change",
    "opts": ["Recover within 10 seconds of blackout", "Maintain voltage within \u00b110% and never drop", "Maintain frequency within \u00b15%", "Maintain voltage within \u00b12.5% steady state, and recover to \u00b12.5% within 1.5 seconds of a sudden full-load change"],
    "exp": "Marine AVRs must be highly responsive to prevent motor stalling when a massive bow thruster or crane is thrown online.",
    "cat": "Power_Systems",
    "id": "T11P_218"
  },
  {
    "q": "Why is it critical to disconnect the AVR completely before conducting a 500V or 1000V Megger test on an alternator?",
    "a": "The high DC test voltage will permanently destroy the delicate thyristors, diodes, and capacitors inside the AVR electronics",
    "opts": ["The high DC test voltage will permanently destroy the delicate thyristors, diodes, and capacitors inside the AVR electronics", "The megger will explode", "It will cause the alternator to start spinning", "The AVR will absorb the voltage and give a false 0 Ohm reading"],
    "exp": "Solid-state electronics are rated for their working voltage only. Blasting 1000V through a 24V transistor instantly fries it.",
    "cat": "Power_Systems",
    "id": "T11P_219"
  },
  {
    "q": "What does Kirchhoff's Current Law (KCL) state, which applies to current flow in switchboards?",
    "a": "The sum of all currents entering a node (junction) must equal the sum of all currents leaving that node (\u03a3I_in = \u03a3I_out)",
    "opts": ["Reactive current always flows backward", "Voltage drops proportionally to current", "Current chooses the path of least resistance exclusively", "The sum of all currents entering a node (junction) must equal the sum of all currents leaving that node (\u03a3I_in = \u03a3I_out)"],
    "exp": "Based on the conservation of charge. If 1000A goes into a busbar joint, exactly 1000A must come out the other feeders.",
    "cat": "Power_Systems",
    "id": "T11P_220"
  },
  {
    "q": "What does Kirchhoff's Voltage Law (KVL) state?",
    "a": "The algebraic sum of all voltages (sources and drops) around any closed loop in a circuit must equal zero (\u03a3V = 0)",
    "opts": ["Voltage is equal to Current divided by Resistance", "The algebraic sum of all voltages (sources and drops) around any closed loop in a circuit must equal zero (\u03a3V = 0)", "Voltage increases with temperature", "The voltage at the end of a cable is zero"],
    "exp": "Based on the conservation of energy. What the generator provides, the cables and loads must entirely consume.",
    "cat": "Power_Systems",
    "id": "T11P_221"
  },
  {
    "q": "During a sequential load restoration after a blackout, which pump is universally programmed by the PMS to start FIRST (Priority 1)?",
    "a": "Sea Water Cooling Pump",
    "opts": ["Main Engine Lube Oil Pump", "Air Conditioning Compressor", "Sea Water Cooling Pump", "Fuel Oil Purifier"],
    "exp": "Without SW cooling, the recovering diesels will instantly overheat and trip, causing a second blackout. It must run immediately.",
    "cat": "Power_Systems",
    "id": "T11P_222"
  }
]);
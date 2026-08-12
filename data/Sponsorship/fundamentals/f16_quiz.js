window.loadQuizzes("F16_PowerElec", [

  /* ═══════════ WHY POWER ELECTRONICS ═══════════ */
  {
    "q": "What is the fundamental job of power electronics on a ship?",
    "a": "To convert electrical power from one form (AC/DC, voltage, frequency) to another using solid state devices",
    "opts": [
      "To convert electrical power from one form (AC/DC, voltage, frequency) to another using solid state devices",
      "To generate the ship's primary AC supply from the alternator",
      "To store electrical energy for emergency use",
      "To measure and display electrical parameters on the switchboard"
    ],
    "exp": "Power electronics is the collection of solid state devices, diodes, thyristors, transistors, that convert power between forms: AC to DC, DC to AC, DC to DC, or AC to AC at a different voltage/frequency. Generation is the alternator's job, storage is the battery's job.",
    "cat": "WHY",
    "id": "F16_001"
  },
  {
    "q": "Why is power electronics preferred over mechanical switching for these conversions?",
    "a": "It has no moving parts and no mechanical contacts to wear out or arc",
    "opts": [
      "It has no moving parts and no mechanical contacts to wear out or arc",
      "It is always cheaper than any mechanical alternative",
      "It requires no cooling under any load condition",
      "It can only be used on DC systems"
    ],
    "exp": "Solid state devices switch electrically rather than mechanically, so there are no contacts to wear, pit or arc over time. This is the key advantage over relays and mechanical switchgear for repetitive, high frequency switching duty.",
    "cat": "WHY",
    "id": "F16_002"
  },

  /* ═══════════ THE DIODE ═══════════ */
  {
    "q": "A diode is best described as:",
    "a": "A two layer PN junction that conducts current one way and blocks it the other",
    "opts": [
      "A two layer PN junction that conducts current one way and blocks it the other",
      "A three layer device that amplifies current",
      "A four layer device that latches on once triggered",
      "A voltage controlled switch with an insulated gate"
    ],
    "exp": "A diode is the simplest semiconductor junction device, P type joined to N type at a single junction, with the single job of allowing current in one direction only. Three and four layer devices are transistors and thyristors respectively.",
    "cat": "DIODE",
    "id": "F16_003"
  },
  {
    "q": "For a diode to conduct in forward bias, how must the supply be connected?",
    "a": "Positive terminal to the anode (P side), negative terminal to the cathode (N side)",
    "opts": [
      "Positive terminal to the anode (P side), negative terminal to the cathode (N side)",
      "Positive terminal to the cathode (N side), negative terminal to the anode (P side)",
      "Either way, as a diode conducts regardless of polarity",
      "Positive and negative both to the anode, cathode left unconnected"
    ],
    "exp": "Forward bias means positive to the P side (anode) and negative to the N side (cathode). This pushes majority carriers toward the junction and collapses the depletion region so current flows.",
    "cat": "DIODE",
    "id": "F16_004"
  },
  {
    "q": "Approximately what forward voltage must be exceeded before a silicon diode conducts freely?",
    "a": "0.7 V",
    "opts": ["0.7 V", "0.3 V", "1.4 V", "5 V"],
    "exp": "Silicon diodes need roughly 0.7 V forward bias before the junction conducts freely. Germanium diodes need only about 0.3 V, which is a common distractor value.",
    "cat": "DIODE",
    "id": "F16_005"
  },
  {
    "q": "In reverse bias, why does a diode still pass a tiny leakage current instead of being a perfect open circuit?",
    "a": "Minority carriers still cross the widened depletion region, producing a microamp range leakage current",
    "opts": [
      "Minority carriers still cross the widened depletion region, producing a microamp range leakage current",
      "The diode briefly forward conducts before settling into reverse bias",
      "Reverse bias only blocks AC, not DC, so some DC always leaks through",
      "The applied voltage always exceeds the peak inverse voltage rating"
    ],
    "exp": "Reverse bias pulls majority carriers away and widens the depletion region, but minority carriers still drift across, giving a small leakage current in the microamp range. For practical purposes this is negligible and the diode is treated as an open circuit.",
    "cat": "DIODE",
    "id": "F16_006"
  },
  {
    "q": "What happens if a diode's reverse voltage exceeds its rated peak inverse voltage (PIV)?",
    "a": "The junction breaks down, which is destructive in an ordinary diode but the intended controlled effect in a Zener diode",
    "opts": [
      "The junction breaks down, which is destructive in an ordinary diode but the intended controlled effect in a Zener diode",
      "The diode simply switches to conducting in the forward direction instead",
      "The leakage current falls to zero as the junction seals itself",
      "Nothing happens, PIV is only a thermal rating, not an electrical one"
    ],
    "exp": "Exceeding PIV breaks down the junction. An ordinary rectifier diode is designed to avoid this entirely, while a Zener diode is deliberately built to break down at a precise, repeatable reverse voltage and survive doing so continuously.",
    "cat": "DIODE",
    "id": "F16_007"
  },

  /* ═══════════ RECTIFIERS ═══════════ */
  {
    "q": "How many diodes does a half wave rectifier use, and what does the load see on the negative half cycle?",
    "a": "One diode; the diode is reverse biased and blocks, so the load sees nothing",
    "opts": [
      "One diode; the diode is reverse biased and blocks, so the load sees nothing",
      "One diode; the diode still conducts, but with reduced current",
      "Two diodes; one of them always conducts regardless of polarity",
      "One diode; the output polarity simply reverses"
    ],
    "exp": "A half wave rectifier is a single diode in series with the load. It conducts only on the positive half cycle; on the negative half cycle it is reverse biased and blocks completely, so the load sees a gap with no output at all.",
    "cat": "RECT",
    "id": "F16_008"
  },
  {
    "q": "What is the average DC output of a half wave rectifier in terms of the peak input voltage Vm?",
    "a": "Vm / π ≈ 0.318 Vm",
    "opts": ["Vm / π ≈ 0.318 Vm", "2Vm / π ≈ 0.636 Vm", "Vm / 2 = 0.5 Vm", "0.707 Vm"],
    "exp": "Only one half cycle contributes to the output, giving VDC(avg) = Vm/π, about 0.318 times the peak. The 0.636 figure is for full wave rectifiers, which use both half cycles.",
    "cat": "RECT",
    "id": "F16_009"
  },
  {
    "q": "A half wave rectifier is fed from a supply with a peak voltage of 200 V. What is the approximate average DC output?",
    "a": "63.6 V",
    "opts": ["63.6 V", "127.2 V", "141.4 V", "31.8 V"],
    "exp": "VDC(avg) = Vm/π = 200/π ≈ 63.6 V. Using the full wave factor of 0.636 instead of 0.318 gives 127.2 V, which is the common mistake here.",
    "cat": "RECT",
    "id": "F16_010"
  },
  {
    "q": "Why is a half wave rectifier described as a teaching circuit rather than a shipboard one?",
    "a": "It wastes half the input entirely, gives a low average output and produces very heavy ripple",
    "opts": [
      "It wastes half the input entirely, gives a low average output and produces very heavy ripple",
      "It requires a centre tapped transformer that is too bulky for shipboard use",
      "It cannot handle three phase supplies at all",
      "It needs four diodes, making it too expensive for simple applications"
    ],
    "exp": "The half wave circuit is simple and cheap, needing only one diode, but it is not used where real power or a clean DC supply is needed because it discards half the waveform and leaves large gaps between pulses.",
    "cat": "RECT",
    "id": "F16_011"
  },
  {
    "q": "In a full wave centre tapped rectifier, how many diodes are used and what special transformer feature is required?",
    "a": "Two diodes, fed from a centre tapped secondary winding",
    "opts": [
      "Two diodes, fed from a centre tapped secondary winding",
      "Four diodes, fed from an ordinary secondary winding",
      "One diode, fed from a centre tapped secondary winding",
      "Two diodes, with no transformer needed at all"
    ],
    "exp": "The centre tap circuit uses two diodes, one for each half of a centre tapped secondary, so that one diode conducts on each half cycle and current flows through the load in the same direction both times.",
    "cat": "RECT",
    "id": "F16_012"
  },
  {
    "q": "What is the average DC output of a full wave centre tap or bridge rectifier in terms of Vm?",
    "a": "2Vm / π ≈ 0.636 Vm",
    "opts": ["2Vm / π ≈ 0.636 Vm", "Vm / π ≈ 0.318 Vm", "Vm", "0.707 Vm"],
    "exp": "Because both half cycles now contribute a pulse to the output, the average doubles to 2Vm/π, about 0.636 times peak, for both the centre tap and bridge configurations.",
    "cat": "RECT",
    "id": "F16_013"
  },
  {
    "q": "A full wave bridge rectifier is fed from a supply with peak voltage 150 V. What is the approximate average DC output?",
    "a": "95.4 V",
    "opts": ["95.4 V", "47.7 V", "150 V", "106 V"],
    "exp": "VDC(avg) = 2Vm/π = (2 x 150)/π ≈ 95.4 V. Using the half wave factor of 0.318 instead gives 47.7 V, which is the typical slip.",
    "cat": "RECT",
    "id": "F16_014"
  },
  {
    "q": "Why must each diode in a full wave centre tap rectifier be rated to withstand 2Vm, twice the peak secondary voltage?",
    "a": "When one diode conducts, the full secondary voltage appears across the non-conducting diode",
    "opts": [
      "When one diode conducts, the full secondary voltage appears across the non-conducting diode",
      "Because centre tap diodes always carry twice the load current of a bridge diode",
      "Because the centre tap itself doubles the supply voltage",
      "Because the transformer secondary is wound with twice the normal turns"
    ],
    "exp": "With a centre tapped secondary, while one diode conducts the non-conducting diode sees the voltage across the whole secondary winding, which is 2Vm at that instant, so its PIV rating must cover that.",
    "cat": "RECT",
    "id": "F16_015"
  },
  {
    "q": "How many diodes does a full wave bridge rectifier use, and what is its main advantage over the centre tap circuit?",
    "a": "Four diodes; no centre tapped transformer is needed and each diode only has to block Vm instead of 2Vm",
    "opts": [
      "Four diodes; no centre tapped transformer is needed and each diode only has to block Vm instead of 2Vm",
      "Two diodes; it needs only half the transformer winding of a centre tap circuit",
      "Four diodes; it produces four times the average output of a centre tap circuit",
      "Three diodes; one per phase of a three phase supply"
    ],
    "exp": "The bridge uses four diodes so that on each half cycle a different pair conducts, both driving current the same way through the load. This removes the need for a special transformer and halves the PIV requirement per diode compared with the centre tap circuit.",
    "cat": "RECT",
    "id": "F16_016"
  },
  {
    "q": "What is the cost of the bridge rectifier's advantage over the centre tap circuit?",
    "a": "Two extra diodes, and current always flows through two diodes in series, giving a slightly higher forward drop and lower efficiency at low voltages",
    "opts": [
      "Two extra diodes, and current always flows through two diodes in series, giving a slightly higher forward drop and lower efficiency at low voltages",
      "A doubled ripple frequency that makes smoothing harder",
      "A halved average DC output compared with the centre tap circuit",
      "The need for a centre tapped transformer, which is more expensive"
    ],
    "exp": "Because two diodes always conduct in series in a bridge, there is roughly double the diode forward voltage drop compared with a single conducting diode in the centre tap circuit, which matters most at low output voltages.",
    "cat": "RECT",
    "id": "F16_017"
  },
  {
    "q": "For shipboard battery chargers and the front end of a VFD, which rectifier configuration is the standard choice, and why?",
    "a": "The bridge rectifier, because it needs no special transformer and each diode only blocks Vm",
    "opts": [
      "The bridge rectifier, because it needs no special transformer and each diode only blocks Vm",
      "The half wave rectifier, because it uses the fewest components",
      "The centre tap rectifier, because it has the lowest diode PIV requirement",
      "None of these; shipboard equipment always uses controlled SCR rectifiers"
    ],
    "exp": "The bridge is the practical standard: no centre tapped transformer required, and each diode only needs to withstand Vm rather than 2Vm, at the cost of two extra diodes and a slightly higher forward drop.",
    "cat": "RECT",
    "id": "F16_018"
  },
  {
    "q": "In a full wave rectifier (centre tap or bridge), what is the ripple frequency relative to the supply frequency?",
    "a": "Twice the supply frequency",
    "opts": ["Twice the supply frequency", "Equal to the supply frequency", "Half the supply frequency", "Four times the supply frequency"],
    "exp": "Because both half cycles now produce an output pulse, the ripple repeats twice per input cycle, doubling the ripple frequency compared to the half wave circuit where ripple equals the supply frequency.",
    "cat": "RECT",
    "id": "F16_019"
  },

  /* ═══════════ RIPPLE ═══════════ */
  {
    "q": "The ripple factor of a rectifier output is defined as:",
    "a": "√[(VRMS / VDC)² − 1]",
    "opts": ["√[(VRMS / VDC)² − 1]", "VRMS / VDC", "VDC / VRMS", "(VRMS − VDC) / VDC"],
    "exp": "Ripple factor gamma is √[(VRMS/VDC)squared minus 1], a measure of how much AC component still rides on the DC output relative to the DC level itself.",
    "cat": "RIPPLE",
    "id": "F16_020"
  },
  {
    "q": "Approximately what is the ripple factor of a half wave rectifier, and how does it compare with a full wave rectifier?",
    "a": "About 1.21, far heavier than the full wave rectifier's roughly 0.48",
    "opts": [
      "About 1.21, far heavier than the full wave rectifier's roughly 0.48",
      "About 0.48, the same as a full wave rectifier",
      "About 0.318, lighter than the full wave rectifier",
      "Zero, because a half wave output has no AC component"
    ],
    "exp": "Half wave ripple factor is about 1.21, roughly 2.5 times worse than the full wave figure of about 0.48. The long gap between successive pulses in a half wave output is what drives this heavy ripple.",
    "cat": "RIPPLE",
    "id": "F16_021"
  },
  {
    "q": "Do the centre tap and bridge rectifiers differ in their ripple factor?",
    "a": "No, both give the same ripple factor of about 0.48 because both produce identical output waveforms",
    "opts": [
      "No, both give the same ripple factor of about 0.48 because both produce identical output waveforms",
      "Yes, the bridge has significantly lower ripple than the centre tap",
      "Yes, the centre tap has significantly lower ripple than the bridge",
      "No, both have the same ripple factor as a half wave rectifier"
    ],
    "exp": "The centre tap and bridge circuits produce identical output waveforms and average DC values, so they share the same ripple factor of about 0.48. They differ instead in transformer requirement and diode PIV rating.",
    "cat": "RIPPLE",
    "id": "F16_022"
  },
  {
    "q": "Why does doubling the number of pulses per cycle both raise the average DC output and reduce ripple?",
    "a": "The gaps between successive pulses close up, so the output stays closer to the peak value more of the time",
    "opts": [
      "The gaps between successive pulses close up, so the output stays closer to the peak value more of the time",
      "Each additional pulse increases the peak input voltage itself",
      "More pulses reduce the diode forward voltage drop",
      "It has no real effect; the improvement is only theoretical"
    ],
    "exp": "As pulses per cycle increase, the intervals where the output would otherwise sag toward zero shrink, raising the average and reducing the ripple. This same principle scales up to the 12 pulse and 18 pulse rectifier fronts used to cut VFD harmonics.",
    "cat": "RIPPLE",
    "id": "F16_023"
  },

  /* ═══════════ SMOOTHING ═══════════ */
  {
    "q": "How is a rectifier output smoothed into a steadier DC voltage?",
    "a": "A capacitor is connected in parallel with the load across the rectifier output",
    "opts": [
      "A capacitor is connected in parallel with the load across the rectifier output",
      "A resistor is connected in series with the load",
      "A second rectifier stage is added to cancel the ripple",
      "The diodes are replaced with SCRs to filter the output"
    ],
    "exp": "A capacitor connected across the rectifier output, in parallel with the load, charges toward the peak of each pulse and then holds and supplies the load itself as the rectified voltage falls, smoothing the pulsating output.",
    "cat": "SMOOTH",
    "id": "F16_024"
  },
  {
    "q": "At what point do the rectifier diodes stop conducting during the smoothing cycle?",
    "a": "The instant the capacitor voltage exceeds the falling rectified output voltage",
    "opts": [
      "The instant the capacitor voltage exceeds the falling rectified output voltage",
      "Exactly at the peak of every input cycle",
      "Only when the load is completely disconnected",
      "The diodes never stop conducting once smoothing capacitors are fitted"
    ],
    "exp": "As the rectified voltage falls from its peak, the diodes become reverse biased the moment the capacitor's held voltage exceeds it, so they stop conducting and the capacitor alone supplies the load until the next peak arrives.",
    "cat": "SMOOTH",
    "id": "F16_025"
  },
  {
    "q": "What does the smoothed output waveform look like compared with the unsmoothed rectifier output?",
    "a": "A sawtooth ripple riding on top of a DC level, instead of a full pulsating waveform falling to zero",
    "opts": [
      "A sawtooth ripple riding on top of a DC level, instead of a full pulsating waveform falling to zero",
      "A perfectly flat DC line with zero ripple",
      "An identical waveform to the unsmoothed output",
      "A square wave alternating between two fixed DC levels"
    ],
    "exp": "The capacitor prevents the voltage from collapsing to zero between pulses, so instead of a full pulsating waveform the result sags a little between peaks: a sawtooth ripple sitting on a DC level.",
    "cat": "SMOOTH",
    "id": "F16_026"
  },
  {
    "q": "Why does a larger smoothing capacitor require rectifier diodes to be rated well above the steady DC load current?",
    "a": "A larger capacitor demands a larger, shorter charging current pulse each cycle to replace what was drawn out",
    "opts": [
      "A larger capacitor demands a larger, shorter charging current pulse each cycle to replace what was drawn out",
      "Larger capacitors always increase the average DC output voltage",
      "Larger capacitors reduce the diode forward voltage drop, allowing more current",
      "Larger capacitors change the diodes from full wave to half wave operation"
    ],
    "exp": "A bigger capacitor holds the voltage up longer, reducing ripple, but it must be topped up with a larger surge of current in a shorter conduction window each cycle, so the diodes must handle these higher peak charging currents even though the average load current is unchanged.",
    "cat": "SMOOTH",
    "id": "F16_027"
  },
  {
    "q": "Why is a full wave rectifier output easier to smooth than a half wave output for the same load?",
    "a": "The gaps between pulses are shorter, so the capacitor never has to hold up the voltage for as long before the next top up",
    "opts": [
      "The gaps between pulses are shorter, so the capacitor never has to hold up the voltage for as long before the next top up",
      "Full wave rectifiers produce a higher peak voltage than half wave rectifiers",
      "Full wave rectifiers do not require any smoothing capacitor at all",
      "Half wave rectifiers cannot be smoothed under any circumstances"
    ],
    "exp": "The full wave output already has less ripple and shorter gaps between pulses to begin with, so the capacitor discharges less before the next recharging pulse arrives, giving a smoother result for the same capacitance.",
    "cat": "SMOOTH",
    "id": "F16_028"
  },

  /* ═══════════ ZENER DIODE ═══════════ */
  {
    "q": "How does a Zener diode differ in intended purpose from an ordinary rectifier diode?",
    "a": "It is deliberately designed to break down at a precise, repeatable reverse voltage and to survive doing so continuously",
    "opts": [
      "It is deliberately designed to break down at a precise, repeatable reverse voltage and to survive doing so continuously",
      "It conducts equally well in both forward and reverse directions",
      "It has no depletion region at all, unlike an ordinary diode",
      "It is only ever operated in forward bias, never in reverse"
    ],
    "exp": "An ordinary diode is built to survive reverse bias up to PIV and never be operated past it. A Zener diode is the opposite: doped specifically to break down at a known reverse voltage, VZ, and to operate there continuously as its normal function.",
    "cat": "ZENER",
    "id": "F16_029"
  },
  {
    "q": "What makes the Zener diode's reverse breakdown region useful for voltage regulation?",
    "a": "The voltage across it stays essentially fixed at VZ over a wide range of current",
    "opts": [
      "The voltage across it stays essentially fixed at VZ over a wide range of current",
      "The current through it stays essentially fixed regardless of voltage",
      "It amplifies the input voltage to a stable higher level",
      "It converts the reverse voltage into a proportional forward voltage"
    ],
    "exp": "Once in breakdown, the Zener's voltage stays pinned at VZ across a wide current range, which is exactly what makes it useful as a reference or regulator: a series resistor absorbs the changing current while the Zener holds the voltage steady.",
    "cat": "ZENER",
    "id": "F16_030"
  },
  {
    "q": "In a simple Zener voltage regulator circuit, what is the role of the series resistor?",
    "a": "It absorbs the difference between the unregulated supply and the fixed Zener voltage, limiting current through the Zener",
    "opts": [
      "It absorbs the difference between the unregulated supply and the fixed Zener voltage, limiting current through the Zener",
      "It amplifies the current available to the load",
      "It converts the DC supply into AC before reaching the Zener",
      "It prevents the Zener from ever entering reverse bias"
    ],
    "exp": "The Zener is connected through a series resistor from a higher, less stable supply. The resistor drops and absorbs the variation between supply and load, letting the Zener hold a fixed voltage across the load despite swings in supply voltage or load current.",
    "cat": "ZENER",
    "id": "F16_031"
  },
  {
    "q": "Which of these is a stated shipboard use of a Zener diode?",
    "a": "Protecting sensitive electronics from overvoltage transients by clamping",
    "opts": [
      "Protecting sensitive electronics from overvoltage transients by clamping",
      "Converting the ship's three phase AC supply to variable frequency AC",
      "Latching heavy load currents on and off at line frequency",
      "Synthesising a sine wave output from a chopped DC bus"
    ],
    "exp": "Zener diodes are used for voltage reference and regulation circuits, protecting sensitive electronics from overvoltage transients (clamping), and setting fixed bias or reference points. Variable frequency conversion and DC bus chopping are inverter/IGBT functions, and latching is an SCR behaviour.",
    "cat": "ZENER",
    "id": "F16_032"
  },

  /* ═══════════ ZENER VS AVALANCHE (TRAP) ═══════════ */
  {
    "q": "Are Zener breakdown and avalanche breakdown the same physical mechanism?",
    "a": "No, they are two genuinely different mechanisms that both happen in reverse bias",
    "opts": [
      "No, they are two genuinely different mechanisms that both happen in reverse bias",
      "Yes, they are two names for exactly the same phenomenon",
      "Yes, but Zener breakdown only occurs in forward bias",
      "No, avalanche breakdown occurs only in forward bias while Zener breakdown occurs in reverse bias"
    ],
    "exp": "Both are reverse bias breakdown phenomena and both are commonly, incorrectly, treated as identical. They are not: the underlying physics, doping level and depletion region width differ between them, and this is explicitly asked as a standalone interview question.",
    "cat": "ZAVAL",
    "id": "F16_033"
  },
  {
    "q": "What is the underlying mechanism of true Zener breakdown?",
    "a": "Direct field driven tunneling of electrons across a very thin depletion region, with no collisions involved",
    "opts": [
      "Direct field driven tunneling of electrons across a very thin depletion region, with no collisions involved",
      "Carrier multiplication by impact ionisation, a chain reaction of collisions",
      "Thermal runaway caused by excessive forward current",
      "Mechanical fracture of the crystal lattice under high voltage stress"
    ],
    "exp": "Zener breakdown is quantum mechanical tunneling: the field across a very thin depletion region becomes strong enough to pull valence electrons directly out of their bonds and across the junction, with no collision needed.",
    "cat": "ZAVAL",
    "id": "F16_034"
  },
  {
    "q": "What is the underlying mechanism of avalanche breakdown?",
    "a": "Carrier multiplication by impact ionisation: accelerated carriers collide and knock loose further carriers in a chain reaction",
    "opts": [
      "Carrier multiplication by impact ionisation: accelerated carriers collide and knock loose further carriers in a chain reaction",
      "Direct field driven tunneling of electrons across a very thin depletion region",
      "A drop in junction temperature that suddenly increases conductivity",
      "Forward biasing of the junction beyond its rated current"
    ],
    "exp": "In avalanche breakdown, a few thermally generated carriers are accelerated by the field until they gain enough energy to knock other electrons free on collision, and each of those does the same, multiplying rapidly, a chain reaction rather than tunneling.",
    "cat": "ZAVAL",
    "id": "F16_035"
  },
  {
    "q": "Why does heavy doping lead to Zener breakdown rather than avalanche breakdown at low reverse voltage?",
    "a": "Heavy doping compresses the depletion region into a very thin layer, giving an intense field even at low applied voltage, strong enough for tunneling",
    "opts": [
      "Heavy doping compresses the depletion region into a very thin layer, giving an intense field even at low applied voltage, strong enough for tunneling",
      "Heavy doping widens the depletion region, allowing carriers more room to accelerate and collide",
      "Heavy doping has no effect on breakdown mechanism, only on forward voltage drop",
      "Heavy doping prevents any breakdown from occurring at all"
    ],
    "exp": "Many dopant atoms close together compress the depletion region for a given reverse voltage. A thin layer means an intense electric field even at fairly low voltage, intense enough to tunnel electrons directly across the junction.",
    "cat": "ZAVAL",
    "id": "F16_036"
  },
  {
    "q": "Roughly at what reverse voltage does the crossover between Zener and avalanche breakdown occur?",
    "a": "About 6 V",
    "opts": ["About 6 V", "About 0.7 V", "About 50 V", "About 1 V"],
    "exp": "Below about 6 V, breakdown in a Zener diode is dominated by the true Zener (tunneling) mechanism; above about 6 V it is really avalanche breakdown even though the component is still called a Zener diode.",
    "cat": "ZAVAL",
    "id": "F16_037"
  },
  {
    "q": "Why are diodes rated around 5 to 6 V, right at the crossover point, chosen for the most temperature stable voltage references?",
    "a": "Zener breakdown has a negative temperature coefficient and avalanche breakdown has a positive one, so at the crossover the two effects can partly cancel",
    "opts": [
      "Zener breakdown has a negative temperature coefficient and avalanche breakdown has a positive one, so at the crossover the two effects can partly cancel",
      "Both mechanisms have identical positive temperature coefficients that add together for extra stability",
      "Neither mechanism is temperature sensitive at that particular voltage",
      "The 5 to 6 V range avoids power dissipation entirely, eliminating self-heating"
    ],
    "exp": "Zener breakdown's voltage falls slightly as temperature rises (negative coefficient), while avalanche breakdown's voltage rises slightly with temperature (positive coefficient). At the crossover, where both effects are present together, they can be chosen to partly cancel, giving the most stable reference of the whole family.",
    "cat": "ZAVAL",
    "id": "F16_038"
  },

  /* ═══════════ SCR / THYRISTOR ═══════════ */
  {
    "q": "How many layers and junctions does an SCR (thyristor) have, and what are its three terminals?",
    "a": "Four layers, three junctions (P-N-P-N); anode, cathode and gate",
    "opts": [
      "Four layers, three junctions (P-N-P-N); anode, cathode and gate",
      "Two layers, one junction; anode and cathode only",
      "Three layers, two junctions; emitter, base and collector",
      "Four layers, three junctions; source, drain and gate"
    ],
    "exp": "An SCR is a four layer, three junction P-N-P-N device with anode, cathode and gate terminals. Source, drain and gate belong to a MOSFET; emitter, base and collector belong to a BJT.",
    "cat": "SCR",
    "id": "F16_039"
  },
  {
    "q": "In the blocking state, forward biased with no gate signal, why does an SCR not conduct even though the outer two junctions are forward biased?",
    "a": "The middle junction is reverse biased and blocks conduction, just like a reverse biased diode",
    "opts": [
      "The middle junction is reverse biased and blocks conduction, just like a reverse biased diode",
      "All three junctions are reverse biased simultaneously",
      "The gate terminal is short circuited internally in the blocking state",
      "The anode and cathode are not yet physically connected until triggered"
    ],
    "exp": "An SCR can be viewed as two interleaved transistors sharing layers. With forward bias but no gate signal, the middle junction remains reverse biased and blocks conduction even though the two outer junctions are forward biased.",
    "cat": "SCR",
    "id": "F16_040"
  },
  {
    "q": "What triggers an SCR into conduction, and does the trigger need to be maintained?",
    "a": "A short gate current pulse; once regenerative feedback latches the device, the gate pulse can be removed",
    "opts": [
      "A short gate current pulse; once regenerative feedback latches the device, the gate pulse can be removed",
      "A continuous gate voltage that must be held for as long as conduction is required",
      "Raising the anode voltage alone, with no gate signal needed at all",
      "A continuous gate current equal to the anode current at all times"
    ],
    "exp": "A brief gate current pulse injects carriers that start regenerative feedback between the internal NPN and PNP sections, driving both fully on. Once latched, the device conducts on its own; the gate pulse only needs to start the process, not sustain it.",
    "cat": "SCR",
    "id": "F16_041"
  },
  {
    "q": "What is meant by an SCR being \"latched\"?",
    "a": "It conducts fully anode to cathode and stays conducting even after the gate pulse is removed",
    "opts": [
      "It conducts fully anode to cathode and stays conducting even after the gate pulse is removed",
      "It is permanently locked in the blocking state until physically replaced",
      "It switches off automatically the instant the gate pulse ends",
      "It alternates between conducting and blocking at the gate pulse frequency"
    ],
    "exp": "Latching describes the regenerative feedback loop reaching full saturation: once latched, the SCR conducts on its own without further gate drive, unlike a transistor which needs continuous base or gate drive to stay on.",
    "cat": "SCR",
    "id": "F16_042"
  },
  {
    "q": "What is the difference between latching current and holding current in an SCR?",
    "a": "Latching current is the higher threshold needed at turn-on for the device to stay conducting once the gate pulse ends; holding current is the lower threshold that keeps it conducting afterward",
    "opts": [
      "Latching current is the higher threshold needed at turn-on for the device to stay conducting once the gate pulse ends; holding current is the lower threshold that keeps it conducting afterward",
      "They are two names for exactly the same quantity",
      "Holding current is the higher threshold at turn-on; latching current is the lower threshold that sustains conduction afterward",
      "Latching current applies to the gate circuit, holding current applies only to the anode circuit at turn-off"
    ],
    "exp": "Latching current (IL) is the minimum anode current that must be reached at the moment of turn on for the device to remain in conduction once the gate pulse is removed. Holding current (IH) is the lower threshold that applies afterward, once already latched; IL is typically about 2 to 3 times IH.",
    "cat": "SCR",
    "id": "F16_043"
  },
  {
    "q": "If anode current has not risen above the latching current by the time the gate pulse ends, what happens?",
    "a": "The SCR falls back out of conduction",
    "opts": [
      "The SCR falls back out of conduction",
      "The SCR conducts anyway, just at reduced current",
      "The SCR is permanently damaged and must be replaced",
      "The SCR switches to blocking the reverse direction only"
    ],
    "exp": "Latching current is the minimum anode current required at turn-on for the regenerative action to fully develop. If it has not been reached by the time the gate signal ends, the device does not stay latched and falls back out of conduction.",
    "cat": "SCR",
    "id": "F16_044"
  },
  {
    "q": "Can an SCR be turned off by removing or reversing the gate signal once it is conducting?",
    "a": "No; the only ways to turn it off are reducing anode current below the holding current, or reverse biasing it",
    "opts": [
      "No; the only ways to turn it off are reducing anode current below the holding current, or reverse biasing it",
      "Yes, removing the gate signal always turns an SCR off immediately",
      "Yes, but only by reversing the gate signal polarity",
      "No; an SCR can never be turned off once triggered, even by reducing anode current"
    ],
    "exp": "Unlike a transistor, an SCR cannot be turned off from the gate at all once latched. The only ways to stop conduction are to reduce anode current below the holding current, or to reverse bias the device. This is why SCRs suit AC circuits naturally and need forced commutation on pure DC.",
    "cat": "SCR",
    "id": "F16_045"
  },
  {
    "q": "What is \"zero crossing switching\" in an SCR operating on AC?",
    "a": "The SCR turns itself off naturally twice every cycle when the AC current passes through zero, falling below the holding current",
    "opts": [
      "The SCR turns itself off naturally twice every cycle when the AC current passes through zero, falling below the holding current",
      "The SCR must be manually switched off at the exact zero crossing point by an operator",
      "The gate voltage crosses zero to trigger conduction on each half cycle",
      "It refers to the SCR blocking voltage crossing zero at the point of triggering"
    ],
    "exp": "On AC, the anode current necessarily falls to zero at each zero crossing of the waveform, taking it below the holding current so the SCR drops out of conduction on its own. It must be re-triggered by a fresh gate pulse to conduct on the next half cycle.",
    "cat": "SCR",
    "id": "F16_046"
  },
  {
    "q": "What is phase angle firing, and what is it the basis of?",
    "a": "Delaying the SCR trigger pulse later into each half cycle to control how much RMS voltage reaches the load; it is the basis of soft starters",
    "opts": [
      "Delaying the SCR trigger pulse later into each half cycle to control how much RMS voltage reaches the load; it is the basis of soft starters",
      "Firing the SCR gate at a fixed angle regardless of load, used only in DC circuits",
      "Adjusting the physical mounting angle of the SCR heatsink for cooling",
      "Switching the SCR at exactly 90 degrees on every cycle to maximise output"
    ],
    "exp": "By delaying the trigger pulse later into each half cycle, less of that half cycle is allowed through, controlling the RMS voltage delivered to the load. This is the mechanism inside a soft starter and also used for controlled rectification.",
    "cat": "SCR",
    "id": "F16_047"
  },

  /* ═══════════ BJT vs MOSFET vs IGBT vs SCR ═══════════ */
  {
    "q": "Which two of these four devices are voltage driven rather than current driven?",
    "a": "MOSFET and IGBT",
    "opts": ["MOSFET and IGBT", "BJT and SCR", "BJT and MOSFET", "SCR and IGBT"],
    "exp": "MOSFET and IGBT both use an insulated, voltage controlled gate needing almost no steady current. BJT needs continuous base current and SCR needs a gate current pulse to trigger, making both current driven devices.",
    "cat": "COMPARE",
    "id": "F16_048"
  },
  {
    "q": "Why are voltage driven devices far easier to switch fast than current driven devices?",
    "a": "There is no minority carrier storage time to wait out, and almost no ongoing drive current is needed",
    "opts": [
      "There is no minority carrier storage time to wait out, and almost no ongoing drive current is needed",
      "Voltage driven devices have no internal junctions at all",
      "Voltage driven devices operate only at DC, avoiding AC switching losses",
      "Current driven devices require external cooling that slows switching"
    ],
    "exp": "BJTs and SCRs must wait for minority carrier storage time to clear when turning off, and BJTs need continuous base drive current. MOSFETs and IGBTs only need to charge/discharge the gate capacitance, so they switch much faster.",
    "cat": "COMPARE",
    "id": "F16_049"
  },
  {
    "q": "Which device is described as the fastest switching but best suited to lower voltage, higher current applications?",
    "a": "MOSFET",
    "opts": ["MOSFET", "IGBT", "SCR", "BJT"],
    "exp": "The MOSFET switches fastest, into the tens to hundreds of kHz, but its conduction losses rise steeply at high voltage (high RDS(on)), so it is best suited to lower voltage, higher current work such as switch mode power supplies.",
    "cat": "COMPARE",
    "id": "F16_050"
  },
  {
    "q": "Which device has almost no forward voltage drop while conducting but is the slowest to switch and cannot be gate turned off?",
    "a": "SCR (thyristor)",
    "opts": ["SCR (thyristor)", "MOSFET", "IGBT", "BJT"],
    "exp": "The SCR has very low conduction loss, only a fraction of a volt drop, but is effectively limited to line frequency switching and cannot be turned off from the gate, only by reducing current below holding current or reverse biasing it.",
    "cat": "COMPARE",
    "id": "F16_051"
  },
  {
    "q": "Which device is described as largely superseded in new power designs, though still found in some legacy drive and audio amplifier stages?",
    "a": "BJT",
    "opts": ["BJT", "MOSFET", "IGBT", "SCR"],
    "exp": "The BJT needs continuous base current and has moderate switching speed limited by minority carrier storage time, and has largely been superseded, though it still appears in some legacy equipment.",
    "cat": "COMPARE",
    "id": "F16_052"
  },
  {
    "q": "Which device sits deliberately between the MOSFET and BJT/SCR in the trade-off between switching speed and power handling?",
    "a": "IGBT",
    "opts": ["IGBT", "BJT", "SCR", "None of them; each device is a strict extreme with no middle ground"],
    "exp": "The IGBT combines a MOSFET-like gate with high voltage/current handling closer to a BJT or SCR, giving moderate switching speed (a few kHz up to around 20 kHz) at high power, which is exactly the middle ground an inverter needs.",
    "cat": "COMPARE",
    "id": "F16_053"
  },

  /* ═══════════ WHY IGBT ═══════════ */
  {
    "q": "What unique task must an inverter perform that drives the choice of the IGBT as its switching device?",
    "a": "Chopping a fixed DC bus into a synthesised AC waveform thousands of times a second at motor level voltage and current",
    "opts": [
      "Chopping a fixed DC bus into a synthesised AC waveform thousands of times a second at motor level voltage and current",
      "Rectifying the incoming AC supply into a smooth DC bus",
      "Storing energy fed back from the motor during braking",
      "Filtering out harmonics generated elsewhere in the drive"
    ],
    "exp": "An inverter must chop a fixed DC bus into a synthesised AC waveform at high switching frequency and at motor level power, a combination of fast switching and high power that sits exactly between what a MOSFET and a BJT can each do alone.",
    "cat": "IGBT",
    "id": "F16_054"
  },
  {
    "q": "How does an IGBT combine features of a MOSFET and a BJT?",
    "a": "It has a MOSFET's insulated, voltage controlled gate, but a conduction path that behaves like a bipolar transistor's, carrying high current at high voltage with low forward drop",
    "opts": [
      "It has a MOSFET's insulated, voltage controlled gate, but a conduction path that behaves like a bipolar transistor's, carrying high current at high voltage with low forward drop",
      "It has a BJT's current driven base but a MOSFET's low current handling",
      "It has no gate structure at all, relying purely on thermal triggering",
      "It has an SCR's latching behaviour combined with a MOSFET's high voltage rating"
    ],
    "exp": "An IGBT's gate is a MOSFET's: insulated, voltage controlled, drawing essentially no steady current, only a brief charging pulse. Its conduction path behaves like a bipolar transistor's, letting it carry high current at high voltage with low loss, effectively a MOSFET driving an internal bipolar power stage.",
    "cat": "IGBT",
    "id": "F16_055"
  },
  {
    "q": "Why is a MOSFET alone not chosen as the inverter switching device in a motor drive VFD?",
    "a": "A MOSFET's conduction losses rise steeply at the high voltage and current levels a motor drive needs",
    "opts": [
      "A MOSFET's conduction losses rise steeply at the high voltage and current levels a motor drive needs",
      "A MOSFET cannot be switched on and off electrically at all",
      "A MOSFET requires a continuous gate current, unlike an IGBT",
      "A MOSFET can only operate on DC, never chopping a DC bus into AC"
    ],
    "exp": "MOSFETs are excellent at lower voltage, higher current work but their RDS(on) losses climb steeply at higher voltages, making them a poor fit for motor drive power levels where the IGBT's bipolar-like conduction path performs better.",
    "cat": "IGBT",
    "id": "F16_056"
  },
  {
    "q": "Why can't an SCR be used as the inverter switch inside a VFD, even though it handles very high voltage and current with the lowest loss?",
    "a": "It cannot be turned off on command at any instant chosen by the control electronics, only at a natural current zero or by forced commutation",
    "opts": [
      "It cannot be turned off on command at any instant chosen by the control electronics, only at a natural current zero or by forced commutation",
      "It cannot handle the DC bus voltage levels used inside a VFD",
      "It has far too much conduction loss for inverter duty",
      "It cannot be triggered fast enough to start conducting at all"
    ],
    "exp": "PWM inversion needs a device that can switch off on command thousands of times a second, at any instant chosen by the control electronics, not just wait for a natural AC zero crossing. That capability is exactly what an SCR lacks and a gate voltage controlled IGBT provides.",
    "cat": "IGBT",
    "id": "F16_057"
  },

  /* ═══════════ INSIDE A VFD ═══════════ */
  {
    "q": "What are the three main stages of a VFD, in order from input to output?",
    "a": "Rectifier, DC link, inverter",
    "opts": ["Rectifier, DC link, inverter", "Inverter, DC link, rectifier", "DC link, rectifier, inverter", "Rectifier, inverter, DC link"],
    "exp": "Incoming three phase AC is first rectified to DC, smoothed on the DC link, then chopped back into synthesised variable frequency AC by the inverter stage.",
    "cat": "VFD",
    "id": "F16_058"
  },
  {
    "q": "What does the rectifier stage of a typical VFD consist of, and is it controlled or uncontrolled?",
    "a": "Almost always a six pulse diode bridge, uncontrolled, converting at full output at all times",
    "opts": [
      "Almost always a six pulse diode bridge, uncontrolled, converting at full output at all times",
      "A controlled SCR bridge that regulates the DC bus voltage to match motor speed",
      "Six IGBTs switched under PWM to produce a regulated DC output",
      "A single half wave diode per phase, giving three diodes total"
    ],
    "exp": "The VFD rectifier is almost always a six pulse diode bridge, two diodes per phase, extending the bridge principle to three phase. It is uncontrolled in most VFDs; its only job is to produce a DC bus, not to regulate anything.",
    "cat": "VFD",
    "id": "F16_059"
  },
  {
    "q": "What does the DC link stage of a VFD contain, and what is its purpose?",
    "a": "Large electrolytic capacitors, often with a series inductor, to smooth the rectified output into a stable low ripple DC bus",
    "opts": [
      "Large electrolytic capacitors, often with a series inductor, to smooth the rectified output into a stable low ripple DC bus",
      "Six IGBTs that switch the DC bus into synthesised AC",
      "A transformer that steps the DC bus voltage up or down",
      "A bank of resistors that convert DC into heat for braking"
    ],
    "exp": "The DC link uses capacitors, and often a series inductor, to smooth the rectified output, the same smoothing principle described earlier scaled to drive power levels. These capacitors also absorb switching transients from the adjacent inverter stage.",
    "cat": "VFD",
    "id": "F16_060"
  },
  {
    "q": "Why does a diode bridge front end require a separate braking resistor or chopper across the DC link during motor deceleration?",
    "a": "A diode bridge cannot pass power backward into the supply, so energy fed back from a decelerating motor must be dumped elsewhere",
    "opts": [
      "A diode bridge cannot pass power backward into the supply, so energy fed back from a decelerating motor must be dumped elsewhere",
      "The diode bridge overheats during deceleration and needs additional cooling",
      "The braking resistor increases the DC bus voltage to speed up deceleration",
      "Diodes cannot conduct at all once the motor starts decelerating"
    ],
    "exp": "A diode bridge only conducts current one way, from AC supply to DC bus, so it cannot feed regenerated motor energy back to the supply during braking. A braking resistor or chopper is added to dissipate that energy instead.",
    "cat": "VFD",
    "id": "F16_061"
  },
  {
    "q": "What does the inverter stage of a VFD consist of, and how many devices per phase?",
    "a": "A bridge of six IGBTs, two per phase, one connecting to the positive DC rail and one to the negative rail",
    "opts": [
      "A bridge of six IGBTs, two per phase, one connecting to the positive DC rail and one to the negative rail",
      "A six pulse diode bridge identical to the rectifier stage",
      "A single IGBT per phase, switching between only two states",
      "Three SCRs, one per phase, fired at the required output frequency"
    ],
    "exp": "The inverter uses six IGBTs, two per phase, switching the DC bus voltage on and off rapidly to synthesise a three phase AC output at the voltage and frequency the motor needs.",
    "cat": "VFD",
    "id": "F16_062"
  },
  {
    "q": "How does pulse width modulation (PWM) synthesise a sine wave from a fixed DC bus?",
    "a": "The IGBTs switch on and off many times within each half cycle, varying pulse width so the average voltage over several switching cycles traces out a sine wave",
    "opts": [
      "The IGBTs switch on and off many times within each half cycle, varying pulse width so the average voltage over several switching cycles traces out a sine wave",
      "The DC bus voltage itself is continuously varied to match a sine wave shape",
      "A capacitor bank filters the DC bus directly into a sine wave before the inverter stage",
      "Each IGBT is switched on for exactly one half cycle, like a simple square wave"
    ],
    "exp": "Rather than a plain square half cycle, the IGBTs switch on and off many times within each half cycle, comparing a carrier frequency against a reference sine wave so the crossing points decide switching instants. The resulting varying pulse widths average out, after the motor's own inductance smooths it, to something close to a genuine sine wave.",
    "cat": "VFD",
    "id": "F16_063"
  },

  /* ═══════════ HARMONICS ═══════════ */
  {
    "q": "Why does a rectifier front end draw current in short, non-sinusoidal pulses rather than a smooth sine wave?",
    "a": "The diodes only conduct near the peak of each half cycle, when the AC voltage exceeds the DC link capacitor voltage",
    "opts": [
      "The diodes only conduct near the peak of each half cycle, when the AC voltage exceeds the DC link capacitor voltage",
      "The diodes are deliberately switched off for most of every cycle by the control electronics",
      "The supply itself is inherently non-sinusoidal on a ship",
      "Harmonic currents are generated only by the inverter stage, never by the rectifier"
    ],
    "exp": "The DC link capacitor holds its charge above the instantaneous AC voltage for most of the cycle, so the rectifier diodes only conduct in short pulses near the peak, when the AC voltage briefly exceeds the capacitor voltage. This pulsed current draw is what produces harmonics.",
    "cat": "HARM",
    "id": "F16_064"
  },
  {
    "q": "Which harmonic orders does a standard six pulse rectifier front end predominantly produce?",
    "a": "5th, 7th, 11th and 13th",
    "opts": ["5th, 7th, 11th and 13th", "2nd, 4th, 6th and 8th", "3rd, 6th, 9th and 12th", "1st, 3rd, 5th and 9th only"],
    "exp": "A standard six pulse diode bridge produces harmonic currents predominantly at the 5th, 7th, 11th and 13th orders, that is 5, 7, 11 and 13 times the supply frequency.",
    "cat": "HARM",
    "id": "F16_065"
  },
  {
    "q": "On a 50 Hz supply, what frequency corresponds to the 7th harmonic?",
    "a": "350 Hz",
    "opts": ["350 Hz", "250 Hz", "550 Hz", "50 Hz"],
    "exp": "The 7th harmonic is 7 times the supply frequency: 7 x 50 Hz = 350 Hz. 250 Hz is the 5th harmonic and 550 Hz is the 11th.",
    "cat": "HARM",
    "id": "F16_066"
  },
  {
    "q": "Why does harmonic distortion cause a bigger problem on a ship than on an onshore grid?",
    "a": "A shipboard generator is a comparatively small, high impedance source shared by everything else on the board, so harmonic currents distort the busbar voltage for every other load",
    "opts": [
      "A shipboard generator is a comparatively small, high impedance source shared by everything else on the board, so harmonic currents distort the busbar voltage for every other load",
      "Shipboard cables have no insulation rating margin for harmonic currents at all",
      "Ships only use single phase power, which cannot tolerate any harmonic content",
      "Onshore grids do not generate harmonics because they never use rectifiers"
    ],
    "exp": "An onshore grid is a very large, low impedance source that barely notices one non-linear load. A ship's generator is comparatively small and high impedance, so harmonic currents drawn by one VFD distort the busbar voltage waveform seen by every other piece of equipment sharing that supply.",
    "cat": "HARM",
    "id": "F16_067"
  },
  {
    "q": "Which of these is NOT listed as a real consequence of harmonics on a ship's electrical system?",
    "a": "A permanent reduction in the ship's generator rated frequency",
    "opts": [
      "A permanent reduction in the ship's generator rated frequency",
      "Additional I²R heating in generator windings, transformers, cables and motors",
      "Nuisance tripping or false readings in protection relays and metering",
      "Possible resonance with power factor correction capacitors, amplifying a particular harmonic"
    ],
    "exp": "Harmonics do not permanently change the generator's rated frequency; the listed consequences are extra heating, possible neutral overloading, relay/metering errors, interference with sensitive equipment, and resonance risk with PFC capacitors.",
    "cat": "HARM",
    "id": "F16_068"
  },
  {
    "q": "How does a 12 pulse rectifier front end reduce harmonics compared with a standard six pulse front end?",
    "a": "Phase shifted transformer windings cancel the 5th and 7th harmonics, leaving mainly the 11th and 13th",
    "opts": [
      "Phase shifted transformer windings cancel the 5th and 7th harmonics, leaving mainly the 11th and 13th",
      "It doubles the DC link capacitance, filtering out all harmonics electronically",
      "It replaces all diodes with IGBTs, eliminating harmonics entirely",
      "It cancels the 11th and 13th harmonics while leaving the 5th and 7th unaffected"
    ],
    "exp": "A 12 pulse arrangement uses phase shifted transformer windings to cancel the lower order 5th and 7th harmonics, leaving mainly the 11th and 13th. An 18 pulse arrangement goes further and cancels the 5th, 7th, 11th and 13th as well.",
    "cat": "HARM",
    "id": "F16_069"
  },
  {
    "q": "Besides multi-pulse rectifier fronts, what other measures are used to mitigate VFD harmonics on board?",
    "a": "Line reactors or DC link chokes ahead of the drive, and active harmonic filters that inject a cancelling current",
    "opts": [
      "Line reactors or DC link chokes ahead of the drive, and active harmonic filters that inject a cancelling current",
      "Increasing the generator's rated frequency above 50 Hz",
      "Replacing all six pulse rectifiers with half wave rectifiers",
      "Removing the DC link capacitors from the VFD entirely"
    ],
    "exp": "Line reactors or DC link chokes add impedance and smooth the current pulses the rectifier draws, reducing harmonic content, while active harmonic filters inject a real time cancelling current. Both are standard mitigations alongside multi-pulse fronts.",
    "cat": "HARM",
    "id": "F16_070"
  }

]);

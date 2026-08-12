window.loadQuizzes("F13_Protection", [

  /* ═══════════ FAULT TYPES ═══════════ */
  {
    "q": "In a short circuit fault, what actually happens electrically?",
    "a": "A near zero impedance path forms between live conductors or a live conductor and frame, and current rises to many times full load almost instantly",
    "opts": [
      "A near zero impedance path forms between live conductors or a live conductor and frame, and current rises to many times full load almost instantly",
      "A conductor breaks, interrupting current flow entirely",
      "The circuit draws slightly more current than rated over a sustained period",
      "A live conductor makes contact with earth through a high resistance path"
    ],
    "exp": "A short circuit is a near zero impedance path between live conductors, or live to frame with no earth resistance to limit it, so current rises almost instantly to many times full load. A broken conductor is an open circuit, sustained excess current is an overload, and a high resistance live-to-earth contact is an earth fault.",
    "cat": "FAULTS",
    "id": "F13_001"
  },
  {
    "q": "What distinguishes an overload from a short circuit?",
    "a": "An overload is a sustained excess current on an otherwise electrically sound circuit, whereas a short circuit is a near instantaneous, very large fault current",
    "opts": [
      "An overload is a sustained excess current on an otherwise electrically sound circuit, whereas a short circuit is a near instantaneous, very large fault current",
      "An overload only occurs on DC systems, a short circuit only occurs on AC systems",
      "An overload always produces a larger current than a short circuit",
      "There is no real difference, both require the same protective response"
    ],
    "exp": "An overload is a sound circuit drawing more current than rated over seconds to minutes. A short circuit is orders of magnitude larger and must be cleared in milliseconds because of the energy released, proportional to current squared times time.",
    "cat": "FAULTS",
    "id": "F13_002"
  },
  {
    "q": "Why must a short circuit be cleared in milliseconds while an overload can be tolerated for seconds to minutes?",
    "a": "The energy released in a fault is proportional to current squared times time, so a short circuit's huge current would destroy equipment almost instantly if not cleared fast",
    "opts": [
      "The energy released in a fault is proportional to current squared times time, so a short circuit's huge current would destroy equipment almost instantly if not cleared fast",
      "Short circuits are always three phase while overloads are always single phase",
      "Overloads do not generate any heat in the conductor",
      "Circuit breakers are physically incapable of clearing a short circuit quickly"
    ],
    "exp": "Fault energy scales with I squared times t, so a short circuit's huge current makes even a short duration destructive, hence the need for millisecond clearance. An overload is a slow thermal problem, not an instantaneous energy problem, so it can be tolerated briefly.",
    "cat": "FAULTS",
    "id": "F13_003"
  },
  {
    "q": "What typically causes an earth fault?",
    "a": "Damaged insulation touching a metal enclosure, or moisture ingress",
    "opts": [
      "Damaged insulation touching a metal enclosure, or moisture ingress",
      "A jammed mechanical load on a motor",
      "A broken cable core interrupting the circuit",
      "Too many loads connected to one circuit"
    ],
    "exp": "An earth fault is unintended contact between a live conductor and earth, typically from damaged insulation touching an earthed enclosure or moisture ingress. A jammed load or too many loads causes an overload; a broken core causes an open circuit.",
    "cat": "FAULTS",
    "id": "F13_004"
  },
  {
    "q": "What is the main hazard of an open circuit fault, given that no dangerous overcurrent flows?",
    "a": "A stalled motor may draw single phasing current on the remaining phases, or the load is simply lost",
    "opts": [
      "A stalled motor may draw single phasing current on the remaining phases, or the load is simply lost",
      "The frame rises to a dangerous touch voltage",
      "Current rises to many times the rated value almost instantly",
      "The insulation resistance of the whole circuit collapses to zero"
    ],
    "exp": "An open circuit interrupts current flow, so there is no dangerous overcurrent in the classic sense. The real hazard is usually a motor left running single phased on the remaining phases, or simple loss of the load.",
    "cat": "FAULTS",
    "id": "F13_005"
  },
  {
    "q": "Why does a single earth fault on a ship's insulated neutral (IT) distribution system not immediately trip anything?",
    "a": "The system is deliberately designed to keep running on a first fault, with the fault only alarmed by an earth fault monitor, so one fault does not black out the vessel",
    "opts": [
      "The system is deliberately designed to keep running on a first fault, with the fault only alarmed by an earth fault monitor, so one fault does not black out the vessel",
      "A single earth fault on an IT system produces no current at all under any circumstances",
      "Earth faults are only detectable on solidly earthed systems",
      "The breaker protecting that circuit is deliberately set to ignore earth faults"
    ],
    "exp": "Because the LV distribution is an insulated neutral (IT) system, a single earth fault does not produce a large fault current and does not trip anything; it is alarmed by an earth fault monitor. A second, independent earth fault on a different phase then creates a genuine short circuit path through earth, which is why alarms must be investigated promptly.",
    "cat": "FAULTS",
    "id": "F13_006"
  },

  /* ═══════════ FUSES AND HRC CONSTRUCTION ═══════════ */
  {
    "q": "How does a fuse fundamentally differ from a breaker's trip mechanism?",
    "a": "A fuse does not sense current, it is itself the weak link, a calibrated element that melts before the protected cable or equipment is damaged",
    "opts": [
      "A fuse does not sense current, it is itself the weak link, a calibrated element that melts before the protected cable or equipment is damaged",
      "A fuse senses current electronically and sends a signal to open a mechanical latch",
      "A fuse operates only on overload current, never on short circuit current",
      "A fuse and a breaker's trip mechanism work identically, only the housing differs"
    ],
    "exp": "A fuse is simply the weak link: a calibrated element sized to melt before the cable or equipment it protects is damaged. A breaker instead senses current and mechanically trips a latch.",
    "cat": "FUSE",
    "id": "F13_007"
  },
  {
    "q": "Why is an ordinary rewireable fuse slow and unpredictable at high fault currents?",
    "a": "The melting element can vaporise, and the resulting arc sustained by surrounding air can continue to burn and even re-strike after the wire has parted",
    "opts": [
      "The melting element can vaporise, and the resulting arc sustained by surrounding air can continue to burn and even re-strike after the wire has parted",
      "It has no calibrated element and simply relies on the cable insulation to fail first",
      "It is only rated for DC and cannot interrupt AC fault current at all",
      "Its element is made of copper, which never melts at fault current levels"
    ],
    "exp": "The rewireable fuse's element can vaporise on a heavy fault, and the arc, sustained by surrounding air, can keep burning and even re-strike after the wire parts. This makes it slow and unpredictable exactly where certainty matters most.",
    "cat": "FUSE",
    "id": "F13_008"
  },
  {
    "q": "What is inside an HRC fuse's sealed ceramic body, surrounding the element?",
    "a": "Fine grained silica sand",
    "opts": ["Fine grained silica sand", "Mineral oil", "Sulphur hexafluoride gas", "Compressed nitrogen"],
    "exp": "An HRC fuse packs its silver or silver alloy element in tightly packed, fine grained silica (quartz) sand, which quenches the arc by fusing into a solid glass-like channel (fulgurite) that absorbs the arc energy.",
    "cat": "FUSE",
    "id": "F13_009"
  },
  {
    "q": "What property allows a good HRC fuse to interrupt a fault before the current even reaches its theoretical peak?",
    "a": "Current limiting action",
    "opts": ["Current limiting action", "Inverse time delay action", "Voltage boosting action", "Thermal memory action"],
    "exp": "A good HRC fuse is current limiting: it can cut off a fault before the current even reaches its theoretical peak, a property no thermal-magnetic breaker mechanism can match.",
    "cat": "FUSE",
    "id": "F13_010"
  },
  {
    "q": "What is the purpose of the tin or lead \"M-effect\" spot found on some HRC fuse elements?",
    "a": "To give accurate overload timing at moderate overcurrents",
    "opts": [
      "To give accurate overload timing at moderate overcurrents",
      "To increase the fuse's breaking capacity at very high fault currents",
      "To allow the fuse element to be reset after operating",
      "To indicate visually that the fuse has blown"
    ],
    "exp": "The M-effect spot, a tin or lead deposit on the silver element, gives the fuse accurate overload timing at moderate overcurrents, a region where a plain silver element alone would not be as precise.",
    "cat": "FUSE",
    "id": "F13_011"
  },
  {
    "q": "Why is a fuse fitted on only one phase of a three phase motor circuit a genuine weakness?",
    "a": "A fault blowing that one fuse leaves the motor running single phased, drawing heavy unbalanced current on the remaining phases while appearing to still work",
    "opts": [
      "A fault blowing that one fuse leaves the motor running single phased, drawing heavy unbalanced current on the remaining phases while appearing to still work",
      "A blown fuse on one phase always trips the other two phases simultaneously",
      "Fuses cannot be used on three phase circuits at all",
      "The fuse on one phase carries three times its rated current under normal running"
    ],
    "exp": "A fuse only protects the phase it is fitted in. If it blows on one phase due to a fault, the other two phases are undisturbed and the motor can be left running single phased, drawing heavy unbalanced current and burning out the windings while looking like it still works.",
    "cat": "FUSE",
    "id": "F13_012"
  },
  {
    "q": "Because of the single phasing weakness, how are three phase motor circuits usually protected instead of relying on fuses alone?",
    "a": "With breakers, or fuses backed up by a separate three phase overload relay",
    "opts": [
      "With breakers, or fuses backed up by a separate three phase overload relay",
      "By fitting a fourth fuse on the neutral conductor",
      "By doubling the rating of each individual phase fuse",
      "By connecting all three phase fuses in parallel with each other"
    ],
    "exp": "Because a fuse only protects its own phase, motor circuits are protected by breakers or by fuses backed up with a separate three phase overload relay, rather than fuses alone.",
    "cat": "FUSE",
    "id": "F13_013"
  },
  {
    "q": "What is a genuine disadvantage of a fuse compared with a breaker, once it has operated?",
    "a": "It is not resettable, the element is consumed and must be physically replaced with a spare of the exact rating",
    "opts": [
      "It is not resettable, the element is consumed and must be physically replaced with a spare of the exact rating",
      "It cannot be tested for continuity once installed",
      "It draws more standing current than a breaker of the same rating",
      "It requires realignment of its contacts after every operation"
    ],
    "exp": "A blown fuse's element is consumed and the fuse must be physically replaced, meaning a fault at an inconvenient time means finding the correct spare before the circuit can be restored. This is also a genuine advantage in another sense, since there is no mechanism to wear out or stick.",
    "cat": "FUSE",
    "id": "F13_014"
  },

  /* ═══════════ MCB, MCCB, ACB ═══════════ */
  {
    "q": "What is the typical maximum current range of an MCB?",
    "a": "Up to about 125 A",
    "opts": ["Up to about 125 A", "Up to about 630 A", "Up to about 1600 A", "Up to about 6300 A"],
    "exp": "An MCB's typical current range is up to about 125 A. MCCBs cover a much wider range up to around 1600 A or more, and ACBs are typically 630 A up to 6300 A and beyond.",
    "cat": "MCBMCCBACB",
    "id": "F13_015"
  },
  {
    "q": "What is the typical current range of an ACB on a ship's switchboard?",
    "a": "Typically 630 A up to 6300 A and beyond",
    "opts": [
      "Typically 630 A up to 6300 A and beyond",
      "Up to about 125 A only",
      "From 16 A up to 1600 A only",
      "Fixed at exactly 1000 A regardless of application"
    ],
    "exp": "ACBs are typically built for 630 A up to 6300 A and beyond, the heaviest duties on the board, such as generator and bus tie breakers.",
    "cat": "MCBMCCBACB",
    "id": "F13_016"
  },
  {
    "q": "Which device typically has fixed trip settings that are not field adjustable?",
    "a": "MCB",
    "opts": ["MCB", "MCCB", "ACB", "All three are field adjustable"],
    "exp": "An MCB has fixed trip settings, not field adjustable. MCCBs often have adjustable thermal and magnetic (or electronic) settings, and ACBs standardly carry a fully adjustable electronic trip unit.",
    "cat": "MCBMCCBACB",
    "id": "F13_017"
  },
  {
    "q": "What construction feature is common to marine ACBs but not to MCBs or MCCBs?",
    "a": "A draw out (withdrawable) chassis, allowing internal maintenance",
    "opts": [
      "A draw out (withdrawable) chassis, allowing internal maintenance",
      "A sealed moulded plastic case that is never opened",
      "DIN rail mounting inside a small enclosure",
      "A silica sand filled arc quenching chamber"
    ],
    "exp": "ACBs commonly use an open, air insulated construction with a draw out (withdrawable) chassis, internally maintainable. MCBs are small sealed moulded housings on DIN rail, and MCCBs are sealed moulded plastic cases not normally user serviceable internally.",
    "cat": "MCBMCCBACB",
    "id": "F13_018"
  },
  {
    "q": "On a ship's switchboard, where would you typically find an MCCB in use?",
    "a": "Motor feeders, distribution sub-boards, feeders to smaller switchboards",
    "opts": [
      "Motor feeders, distribution sub-boards, feeders to smaller switchboards",
      "Final lighting circuits and small single phase control supplies",
      "Generator circuit breakers and bus tie breakers only",
      "Only as the main incoming feeder on the main switchboard"
    ],
    "exp": "MCCBs typically sit at motor feeders, distribution sub-boards, and feeders to smaller switchboards, between the small final circuits handled by MCBs and the heaviest duties handled by ACBs.",
    "cat": "MCBMCCBACB",
    "id": "F13_019"
  },
  {
    "q": "Why does a ship's switchboard use MCB, MCCB and ACB rather than just one type of breaker everywhere?",
    "a": "Fault current and the consequence of getting it wrong both scale up dramatically from a lighting circuit to a generator's own output, so each device suits a different level of duty",
    "opts": [
      "Fault current and the consequence of getting it wrong both scale up dramatically from a lighting circuit to a generator's own output, so each device suits a different level of duty",
      "Classification society rules simply require three different brand names on every board",
      "MCBs cannot be manufactured with a breaking capacity above 1 kA",
      "Using only ACBs would actually be cheaper than mixing device types"
    ],
    "exp": "An MCB is cheap, compact and disposable-if-damaged, right for hundreds of small final circuits. An ACB is expensive, maintainable and built to interrupt tens of kiloamps, right for a generator's own breaker. Using an ACB everywhere is needless cost and bulk; using an MCB on a generator breaker would let through fault energy it cannot safely interrupt.",
    "cat": "MCBMCCBACB",
    "id": "F13_020"
  },
  {
    "q": "What is the typical breaking capacity range of an MCB?",
    "a": "Around 6-10 kA",
    "opts": ["Around 6-10 kA", "Around 25-50 kA", "Around 100-150 kA", "Around 500 kA"],
    "exp": "MCBs typically have a breaking capacity around 6-10 kA. Small MCCB frames run roughly 25-50 kA, larger MCCB frames up to around 150 kA, and large ACBs are typically 25 kA up to 100-150 kA.",
    "cat": "MCBMCCBACB",
    "id": "F13_021"
  },
  {
    "q": "Which device would you expect to find as the generator circuit breaker on a ship's main switchboard?",
    "a": "ACB",
    "opts": ["ACB", "MCB", "MCCB", "A contactor with an overload relay"],
    "exp": "Generator circuit breakers, bus tie breakers and main incoming feeders on the main switchboard are ACB territory, given the fault current levels and need for adjustable, engineered discrimination there.",
    "cat": "MCBMCCBACB",
    "id": "F13_022"
  },

  /* ═══════════ TRIP CURVES B, C, D ═══════════ */
  {
    "q": "What instantaneous trip range does a Type B MCB curve cover?",
    "a": "3 to 5 x In",
    "opts": ["3 to 5 x In", "5 to 10 x In", "10 to 20 x In", "1 to 3 x In"],
    "exp": "Type B trips magnetically between 3 and 5 times rated current, suited to resistive and lightly inductive loads with little inrush such as lighting and heaters.",
    "cat": "CURVES",
    "id": "F13_023"
  },
  {
    "q": "What instantaneous trip range does a Type C MCB curve cover?",
    "a": "5 to 10 x In",
    "opts": ["5 to 10 x In", "3 to 5 x In", "10 to 20 x In", "20 to 30 x In"],
    "exp": "Type C trips between 5 and 10 times rated current, suited to loads with moderate inrush such as small motors, discharge lighting banks and modest transformers.",
    "cat": "CURVES",
    "id": "F13_024"
  },
  {
    "q": "What instantaneous trip range does a Type D MCB curve cover?",
    "a": "10 to 20 x In",
    "opts": ["10 to 20 x In", "5 to 10 x In", "3 to 5 x In", "15 to 25 x In"],
    "exp": "Type D trips between 10 and 20 times rated current, suited to heavy inrush loads such as larger motors, transformers, solenoid valves and capacitor banks.",
    "cat": "CURVES",
    "id": "F13_025"
  },
  {
    "q": "A 16 A Type B MCB will trip magnetically somewhere between which two currents?",
    "a": "48 A and 80 A",
    "opts": ["48 A and 80 A", "80 A and 160 A", "160 A and 320 A", "16 A and 48 A"],
    "exp": "Type B is 3 to 5 x In, so a 16 A device trips between 16x3=48 A and 16x5=80 A. The same 16 A frame as Type C would trip between 80 A and 160 A, and as Type D between 160 A and 320 A.",
    "cat": "CURVES",
    "id": "F13_026"
  },
  {
    "q": "A 20 A Type C MCB will trip magnetically somewhere between which two currents?",
    "a": "100 A and 200 A",
    "opts": ["100 A and 200 A", "60 A and 100 A", "200 A and 400 A", "20 A and 60 A"],
    "exp": "Type C is 5 to 10 x In, so a 20 A device trips between 20x5=100 A and 20x10=200 A.",
    "cat": "CURVES",
    "id": "F13_027"
  },
  {
    "q": "Which trip curve type suits general lighting circuits and heaters with little or no inrush?",
    "a": "Type B",
    "opts": ["Type B", "Type C", "Type D", "None, lighting requires no magnetic trip element"],
    "exp": "Type B, tripping at 3 to 5 x In, suits resistive and lightly inductive loads like lighting circuits, heaters and general power outlets that have little or no inrush surge.",
    "cat": "CURVES",
    "id": "F13_028"
  },
  {
    "q": "Which trip curve type suits larger motors, transformers and solenoid valves with heavy inrush current?",
    "a": "Type D",
    "opts": ["Type D", "Type B", "Type C", "Type A"],
    "exp": "Type D, tripping at 10 to 20 x In, tolerates the sharp current surge these loads produce on energising without nuisance tripping, while still catching a genuine fault.",
    "cat": "CURVES",
    "id": "F13_029"
  },
  {
    "q": "Why is it wrong to fit a Type D breaker on every circuit \"to be safe\"?",
    "a": "A higher letter tolerates more inrush but takes a larger fault current to trip magnetically, so a genuine fault on a small circuit may sit below its threshold and rely on the much slower thermal element",
    "opts": [
      "A higher letter tolerates more inrush but takes a larger fault current to trip magnetically, so a genuine fault on a small circuit may sit below its threshold and rely on the much slower thermal element",
      "Type D breakers are not legally permitted on marine switchboards",
      "Type D breakers cannot be manufactured in current ratings below 100 A",
      "A Type D breaker will nuisance trip on any load with no inrush at all"
    ],
    "exp": "The right curve is the lowest one the load's normal inrush will not nuisance-trip, not the highest available. A Type D fitted on a lighting circuit may let a fault current that would have instantly tripped a Type B sit below its much higher magnetic threshold, relying on the slower thermal element instead.",
    "cat": "CURVES",
    "id": "F13_030"
  },
  {
    "q": "Under which standard are MCB trip curve types B, C and D defined?",
    "a": "IEC 60898",
    "opts": ["IEC 60898", "IEC 60092", "IEC 61439", "IEC 60947"],
    "exp": "An MCB's magnetic (instantaneous) trip threshold is standardised into curve types B, C and D under IEC 60898.",
    "cat": "CURVES",
    "id": "F13_031"
  },

  /* ═══════════ THERMAL AND MAGNETIC ELEMENTS ═══════════ */
  {
    "q": "What physically causes a thermal element in an MCB to trip?",
    "a": "A bimetallic strip, made of two metals with different rates of thermal expansion, bends under sustained overload heating until it releases the trip latch",
    "opts": [
      "A bimetallic strip, made of two metals with different rates of thermal expansion, bends under sustained overload heating until it releases the trip latch",
      "A solenoid coil pulls in a plunger that strikes the trip latch directly",
      "A fusible silver element melts and interrupts the circuit",
      "A magnetic field collapses and releases a spring loaded contact"
    ],
    "exp": "The thermal element is a bimetallic strip heated by the load current; under overload it bends further and faster, and beyond a set point releases the trip latch. The solenoid and plunger description belongs to the magnetic element.",
    "cat": "ELEMENTS",
    "id": "F13_032"
  },
  {
    "q": "What does the magnetic element inside an MCB respond to, and how fast?",
    "a": "A heavy instantaneous fault current, tripping in milliseconds once the threshold is reached",
    "opts": [
      "A heavy instantaneous fault current, tripping in milliseconds once the threshold is reached",
      "Sustained overload current, tripping over seconds to minutes",
      "A drop in supply voltage, tripping within a few cycles",
      "Ambient temperature rise around the breaker, tripping over several minutes"
    ],
    "exp": "The magnetic element is a solenoid coil that, under a heavy fault current, produces a magnetic field strong enough to pull in a plunger and mechanically strike the trip latch open, effectively instantaneous once the threshold current is reached.",
    "cat": "ELEMENTS",
    "id": "F13_033"
  },
  {
    "q": "Why does an MCB need two separate elements, thermal and magnetic, rather than one?",
    "a": "Overload and short circuit are physically different problems on very different timescales, so a single response curve cannot solve both well",
    "opts": [
      "Overload and short circuit are physically different problems on very different timescales, so a single response curve cannot solve both well",
      "Regulations require two elements purely for redundancy in case one fails",
      "The thermal element alone cannot carry the breaker's full rated current",
      "The magnetic element is only there to reset the thermal element after it trips"
    ],
    "exp": "The thermal element tolerates a brief overload but always clears a sustained one; the magnetic element ignores duration entirely and clears a genuine short circuit before serious damage or arc energy builds up. One breaker, two protections, because overload and short circuit are different physical problems.",
    "cat": "ELEMENTS",
    "id": "F13_034"
  },
  {
    "q": "Under IEC 60898-1, at roughly what multiple of In must a thermal element NOT trip within a stated conventional time (typically over an hour)?",
    "a": "Around 1.13 x In",
    "opts": ["Around 1.13 x In", "Around 1.45 x In", "Around 3 x In", "Around 5 x In"],
    "exp": "The standardised test point at around 1.13 x In requires the breaker not to trip within a conventional time, typically over an hour, giving tolerance for a brief, modest overload.",
    "cat": "ELEMENTS",
    "id": "F13_035"
  },
  {
    "q": "Under IEC 60898-1, at roughly what multiple of In must a thermal element trip within a shorter conventional time (typically under an hour)?",
    "a": "Around 1.45 x In",
    "opts": ["Around 1.45 x In", "Around 1.13 x In", "Around 3 x In", "Around 10 x In"],
    "exp": "At around 1.45 x In the breaker must trip within a shorter conventional time, typically under an hour, guaranteeing it will eventually clear a sustained overload once it is clearly above the tolerance point.",
    "cat": "ELEMENTS",
    "id": "F13_036"
  },
  {
    "q": "The thermal element's response is often described as \"inverse time\". What does this mean?",
    "a": "The bigger the overload, the faster it trips",
    "opts": [
      "The bigger the overload, the faster it trips",
      "The bigger the overload, the slower it trips",
      "It always trips after exactly the same fixed time regardless of overload size",
      "It trips faster as ambient temperature falls"
    ],
    "exp": "Inverse time means the tripping time and the size of the overload are inversely related, a bigger overload produces faster tripping, since the thermal element is really responding to accumulated heat.",
    "cat": "ELEMENTS",
    "id": "F13_037"
  },
  {
    "q": "In the notes' own summary, what is the thermal element in effect measuring?",
    "a": "Accumulated heat, effectively a current squared measure over time",
    "opts": [
      "Accumulated heat, effectively a current squared measure over time",
      "Instantaneous peak current only, ignoring duration",
      "The magnetic flux density in the breaker's coil",
      "Supply voltage stability over time"
    ],
    "exp": "The thermal element is slow and current squared in effect, really measuring accumulated heat, which is why it tolerates a brief overload but always clears a sustained one.",
    "cat": "ELEMENTS",
    "id": "F13_038"
  },

  /* ═══════════ MCCB DE-RATING ═══════════ */
  {
    "q": "A breaker's nameplate rated current, In, is measured under what reference conditions?",
    "a": "A defined reference ambient, commonly around 40°C, in free air or a specified standard enclosure, at sea level",
    "opts": [
      "A defined reference ambient, commonly around 40°C, in free air or a specified standard enclosure, at sea level",
      "The hottest possible ambient the breaker could ever experience",
      "An ambient of 0°C in a sealed enclosure",
      "Whatever ambient the engine room design temperature specifies"
    ],
    "exp": "The nameplate figure is measured at a defined reference ambient, commonly around 40°C, in free air or a specified standard enclosure, and at sea level, with a clean sinusoidal current. Actual installed conditions may differ significantly.",
    "cat": "DERATING",
    "id": "F13_039"
  },
  {
    "q": "Why does a hotter ambient reduce the current a thermal-magnetic breaker can safely carry?",
    "a": "The bimetallic strip starts closer to its trip point in a hotter ambient, so it takes less additional load current to reach the trip threshold",
    "opts": [
      "The bimetallic strip starts closer to its trip point in a hotter ambient, so it takes less additional load current to reach the trip threshold",
      "Higher ambient temperature increases the breaker's breaking capacity, forcing a lower current rating",
      "Hotter air increases the resistance of the breaker's contacts to near infinite",
      "The magnetic element becomes demagnetised above 40°C"
    ],
    "exp": "The thermal element, most obviously the bimetallic strip, is itself temperature sensitive. In a hotter ambient it starts closer to its trip point, so less load current on top of that head start is needed to make it trip.",
    "cat": "DERATING",
    "id": "F13_040"
  },
  {
    "q": "Why does mounting a breaker inside a closed panel affect its safe continuous rating compared with open air on a test bench?",
    "a": "It dissipates heat far less effectively, surrounded by still, already warmed air rather than free ventilation",
    "opts": [
      "It dissipates heat far less effectively, surrounded by still, already warmed air rather than free ventilation",
      "The enclosure increases the breaker's breaking capacity substantially",
      "Enclosed breakers are exempt from thermal de-rating by IEC standard",
      "Panels are always cooler than open air test benches, improving the rating"
    ],
    "exp": "A breaker mounted inside a closed panel dissipates heat far less effectively than one in open air on a test bench, because it is surrounded by still, already warmed air rather than free ventilation, so less of its rated current is actually usable inside it.",
    "cat": "DERATING",
    "id": "F13_041"
  },
  {
    "q": "Why does grouping several breakers close together in one enclosure require a de-rating (or \"diversity\") factor?",
    "a": "Each breaker adds its own heat and partially blocks the others' ability to shed heat, raising local enclosure temperature above what any one breaker alone would produce",
    "opts": [
      "Each breaker adds its own heat and partially blocks the others' ability to shed heat, raising local enclosure temperature above what any one breaker alone would produce",
      "Grouping breakers together increases each one's individual breaking capacity",
      "IEC standards forbid mounting more than one breaker in an enclosure without de-rating",
      "Grouped breakers interfere with each other's magnetic trip thresholds electrically"
    ],
    "exp": "Breakers mounted close together each add their own heat and each partially blocks the others' ability to shed heat, so a row of breakers loaded near their individual rating can raise local enclosure temperature well above what any one alone would produce, hence a grouping factor.",
    "cat": "DERATING",
    "id": "F13_042"
  },
  {
    "q": "Above roughly what altitude does de-rating for reduced cooling and dielectric performance typically become relevant?",
    "a": "Around 2000 metres",
    "opts": ["Around 2000 metres", "Around 200 metres", "Around 500 metres", "Around 5000 metres only"],
    "exp": "De-rating for altitude is typically applied above around 2000 metres, since thinner air carries away heat less effectively and is also a poorer insulator, affecting arc quenching and dielectric performance. This is genuinely marginal for most ships at sea level.",
    "cat": "DERATING",
    "id": "F13_043"
  },
  {
    "q": "Why can loads fed through variable frequency drives require a breaker to be de-rated even if the RMS current looks acceptable?",
    "a": "The distorted current waveform carries harmonic content that still produces I squared R heating, and in three phase systems triplen harmonics can overload the neutral beyond original sizing",
    "opts": [
      "The distorted current waveform carries harmonic content that still produces I squared R heating, and in three phase systems triplen harmonics can overload the neutral beyond original sizing",
      "Variable frequency drives always reduce the actual current drawn, so no de-rating is needed",
      "Harmonics reduce the breaker's magnetic trip threshold to zero",
      "A breaker's thermal rating automatically compensates for harmonic content"
    ],
    "exp": "A breaker's thermal rating assumes a clean sinusoidal current. Harmonic content from drives or power electronics still produces I squared R heating, and significant triplen harmonics can make the neutral conductor carry more current than any one phase, a case the original sizing may not have anticipated.",
    "cat": "DERATING",
    "id": "F13_044"
  },
  {
    "q": "Can a 400 A breaker always be loaded to 400 A continuously in every installation?",
    "a": "No, the 400 A figure is a nameplate value at defined reference conditions, and actual installed conditions must be checked against the manufacturer's de-rating curves",
    "opts": [
      "No, the 400 A figure is a nameplate value at defined reference conditions, and actual installed conditions must be checked against the manufacturer's de-rating curves",
      "Yes, the nameplate rating is always safely available regardless of installation",
      "Only if the breaker is an MCB, never for MCCBs or ACBs",
      "Yes, provided the breaker is less than five years old"
    ],
    "exp": "The nameplate figure applies only at the reference ambient, enclosure, sea level and clean sinusoidal current it was tested under. Actual ambient, enclosure ventilation, grouping, altitude or harmonic content can all reduce the safe continuous current below nameplate, so the manufacturer's de-rating curves must be checked against real conditions.",
    "cat": "DERATING",
    "id": "F13_045"
  },

  /* ═══════════ BREAKING CAPACITY VS RATED CURRENT ═══════════ */
  {
    "q": "What question does a breaker's rated current, In, answer?",
    "a": "How much current the breaker can carry continuously, in normal service, without overheating or nuisance tripping",
    "opts": [
      "How much current the breaker can carry continuously, in normal service, without overheating or nuisance tripping",
      "How much fault current the breaker can safely interrupt once",
      "How many times the breaker can be operated before wearing out",
      "How much voltage the breaker can withstand across its open contacts"
    ],
    "exp": "Rated current, In, is about everyday continuous carrying capacity. Breaking capacity is the entirely separate rating that answers how much fault current the breaker can safely interrupt.",
    "cat": "BREAKING",
    "id": "F13_046"
  },
  {
    "q": "What does Icu represent on a breaker's nameplate?",
    "a": "Ultimate breaking capacity, the maximum fault current it is proven able to interrupt at least once, after which it is not guaranteed to remain usable",
    "opts": [
      "Ultimate breaking capacity, the maximum fault current it is proven able to interrupt at least once, after which it is not guaranteed to remain usable",
      "The rated continuous current the breaker can carry indefinitely",
      "Service breaking capacity, a fault current after which the breaker remains fully usable",
      "The instantaneous magnetic trip threshold multiple of In"
    ],
    "exp": "Icu is the ultimate breaking capacity, the maximum fault current the breaker is proven able to interrupt at least once under a defined test sequence, after which the breaker is not guaranteed to remain usable.",
    "cat": "BREAKING",
    "id": "F13_047"
  },
  {
    "q": "What does Ics represent, and how does it relate to Icu?",
    "a": "Service breaking capacity, a lower figure than Icu, expressed as a percentage of it, representing a fault the breaker can interrupt and still be relied on to keep operating normally afterward",
    "opts": [
      "Service breaking capacity, a lower figure than Icu, expressed as a percentage of it, representing a fault the breaker can interrupt and still be relied on to keep operating normally afterward",
      "Service breaking capacity, always a higher figure than Icu",
      "The instantaneous trip current of the magnetic element",
      "The same quantity as Icu, just expressed in different units"
    ],
    "exp": "Ics is the service breaking capacity, a lower figure than Icu, expressed as a percentage of Icu (commonly 25, 50, 75 or 100 percent), representing a fault current the breaker can interrupt and then still be relied upon to go on operating normally afterward.",
    "cat": "BREAKING",
    "id": "F13_048"
  },
  {
    "q": "A breaker correctly sized for its continuous load current can still be wrong for its position on the board if:",
    "a": "Its breaking capacity is lower than the maximum fault current actually available at that point",
    "opts": [
      "Its breaking capacity is lower than the maximum fault current actually available at that point",
      "Its rated current exceeds the connected load by more than 10 percent",
      "It is fitted with an adjustable rather than a fixed trip unit",
      "It has a Type B rather than a Type C trip curve"
    ],
    "exp": "A breaker sized correctly for continuous load current can still be wrong for its position if its breaking capacity is lower than the fault level actually available there. It may interrupt the fault but destroy itself, or fail to interrupt it cleanly at all.",
    "cat": "BREAKING",
    "id": "F13_049"
  },
  {
    "q": "What factors determine the maximum fault current actually available at a given point on a switchboard?",
    "a": "Generator size, cable impedance, and how many generators can be running in parallel at once",
    "opts": [
      "Generator size, cable impedance, and how many generators can be running in parallel at once",
      "Only the rated current of the breaker fitted at that point",
      "Only the ambient temperature of the switchboard room",
      "Only the trip curve type (B, C or D) selected for that breaker"
    ],
    "exp": "The maximum fault current available at a point depends on generator size, cable impedance and how many generators can be running in parallel at once, all of which determine the fault level the breaker there must be rated to interrupt.",
    "cat": "BREAKING",
    "id": "F13_050"
  },
  {
    "q": "In one sentence, how do rated current and breaking capacity differ in what they are about?",
    "a": "Rated current is about what the breaker carries every day; breaking capacity is about what it can survive interrupting on the one worst day",
    "opts": [
      "Rated current is about what the breaker carries every day; breaking capacity is about what it can survive interrupting on the one worst day",
      "Rated current is about fault interruption; breaking capacity is about everyday load carrying",
      "They describe the same physical quantity, just in different units (A versus kA)",
      "Rated current only applies to MCBs, breaking capacity only applies to ACBs"
    ],
    "exp": "Rated current is about everyday load carrying; breaking capacity is about surviving the one worst-day fault. A breaker must be sized correctly for both independently.",
    "cat": "BREAKING",
    "id": "F13_051"
  },
  {
    "q": "In what unit is breaking capacity expressed?",
    "a": "kA",
    "opts": ["kA", "kW", "kVA", "V"],
    "exp": "Breaking capacity is expressed in kA (kiloamps) of fault current, an entirely separate rating from the continuous current rating expressed in A.",
    "cat": "BREAKING",
    "id": "F13_052"
  },

  /* ═══════════ CONTACTOR VS BREAKER ═══════════ */
  {
    "q": "What is the primary purpose of a contactor, as distinct from a breaker?",
    "a": "Frequent switching of a load under normal operating current, potentially thousands of times over its life",
    "opts": [
      "Frequent switching of a load under normal operating current, potentially thousands of times over its life",
      "Interrupting overload and fault current reliably",
      "Sensing earth leakage current via a toroidal transformer",
      "Providing adjustable long time and short time protection settings"
    ],
    "exp": "A contactor's primary purpose is frequent switching of a load under normal operating current, on and off many thousands of times. A breaker's primary purpose is protection, interrupting overload and fault current, with switching under normal conditions secondary.",
    "cat": "CONTACTOR",
    "id": "F13_053"
  },
  {
    "q": "What happens if a contactor alone, with no upstream protection, is left to carry a short circuit current?",
    "a": "It would typically weld its contacts shut or be destroyed attempting to interrupt it, since it has no built in trip mechanism and no way of knowing a fault is happening",
    "opts": [
      "It would typically weld its contacts shut or be destroyed attempting to interrupt it, since it has no built in trip mechanism and no way of knowing a fault is happening",
      "It automatically opens within milliseconds via its own magnetic trip element",
      "It safely limits the fault current to its rated value indefinitely",
      "It transfers the fault current harmlessly to its coil circuit"
    ],
    "exp": "A contactor has no way of knowing a fault is happening, it simply obeys its coil. Fitted alone it would sit there trying to carry a short circuit current until something failed, most likely welding its own contacts closed.",
    "cat": "CONTACTOR",
    "id": "F13_054"
  },
  {
    "q": "What three elements together make up a complete motor starter?",
    "a": "A contactor, an overload relay, and an upstream fuse or breaker for short circuit protection",
    "opts": [
      "A contactor, an overload relay, and an upstream fuse or breaker for short circuit protection",
      "A contactor alone, since it already contains both thermal and magnetic trip elements",
      "Two contactors wired in series for redundancy",
      "A breaker alone, with the contactor only used for isolation during maintenance"
    ],
    "exp": "The combination, contactor plus overload relay plus upstream fuse or breaker, is what makes a complete motor starter. The contactor alone is only ever the switching element; it has no built in trip mechanism of its own.",
    "cat": "CONTACTOR",
    "id": "F13_055"
  },
  {
    "q": "How does the trip mechanism of a contactor compare with that of a circuit breaker?",
    "a": "A contactor has no built in trip mechanism at all, it simply opens and closes on command from its coil; a breaker has thermal and/or magnetic (or electronic) elements that trip automatically",
    "opts": [
      "A contactor has no built in trip mechanism at all, it simply opens and closes on command from its coil; a breaker has thermal and/or magnetic (or electronic) elements that trip automatically",
      "Both devices have identical thermal and magnetic trip elements built in",
      "A contactor has a magnetic trip element but no thermal element",
      "A breaker has no trip mechanism and only opens on command like a contactor"
    ],
    "exp": "A contactor has no trip mechanism built in, it simply obeys its coil circuit. A breaker has built in thermal and/or magnetic (or electronic) trip elements that open automatically on overload or fault, without external command.",
    "cat": "CONTACTOR",
    "id": "F13_056"
  },
  {
    "q": "In terms of operating duty, what is a contactor specifically designed for that a breaker is not?",
    "a": "High mechanical and electrical switching endurance for routine on/off cycling",
    "opts": [
      "High mechanical and electrical switching endurance for routine on/off cycling",
      "Reliable interruption of a large fault current on rare occasions",
      "Sensing a current imbalance between live conductors",
      "Holding an adjustable electronic trip setting"
    ],
    "exp": "A contactor is designed for high mechanical and electrical switching endurance, routine on/off cycling. A breaker is designed to switch rarely but interrupt a large fault current reliably on the occasions it must.",
    "cat": "CONTACTOR",
    "id": "F13_057"
  },
  {
    "q": "Why is the statement \"a contactor is not a protective device on its own\" worded that specific way, rather than simply \"never use a contactor\"?",
    "a": "Because a contactor can still be a valid part of a starter as the switching element, provided it is paired with a fuse or breaker and an overload relay for protection",
    "opts": [
      "Because a contactor can still be a valid part of a starter as the switching element, provided it is paired with a fuse or breaker and an overload relay for protection",
      "Because a contactor is actually a fully rated protective device once its coil circuit is energised",
      "Because the wording is simply a matter of style with no technical meaning",
      "Because contactors are being phased out of marine starters entirely"
    ],
    "exp": "The wording is deliberate: a contactor is a perfectly valid switching element, just not sufficient by itself for protection. Paired with an overload relay and an upstream fuse or breaker, it forms a complete, properly protected motor starter.",
    "cat": "CONTACTOR",
    "id": "F13_058"
  },

  /* ═══════════ ELCB VS RCCB ═══════════ */
  {
    "q": "How does an RCCB sense an earth leakage fault?",
    "a": "A toroidal current transformer encircles the live conductors; under a fault the vector sum of currents through the core is no longer zero, inducing a signal that trips the device",
    "opts": [
      "A toroidal current transformer encircles the live conductors; under a fault the vector sum of currents through the core is no longer zero, inducing a signal that trips the device",
      "It measures the voltage rise on the equipment's earthed frame relative to true earth",
      "It measures the total current drawn by the circuit against a fixed threshold",
      "It relies on a separate earth wire routed through its trip coil"
    ],
    "exp": "An RCCB is current operated: a toroidal CT encircles all the live conductors, and under healthy conditions the vector sum of currents cancels to zero. If current leaks to earth by another path, a net flux appears and induces a signal in a sensing winding, tripping the device once it exceeds threshold.",
    "cat": "ELCB",
    "id": "F13_059"
  },
  {
    "q": "How does the older voltage operated ELCB sense a fault?",
    "a": "It senses a voltage appearing on the protected equipment's earthed frame relative to true earth, via a separate earth wire routed through the relay's trip coil",
    "opts": [
      "It senses a voltage appearing on the protected equipment's earthed frame relative to true earth, via a separate earth wire routed through the relay's trip coil",
      "A toroidal current transformer around the live conductors detects a current imbalance",
      "It compares the current in the phase conductor against the current in the neutral electronically",
      "It measures the resistance of the earth fault path directly"
    ],
    "exp": "The voltage operated ELCB senses a voltage rise on the earthed frame relative to true earth, achieved via a separate earth wire routed through the relay's trip coil. This is fundamentally different from the RCCB's current-based sensing.",
    "cat": "ELCB",
    "id": "F13_060"
  },
  {
    "q": "What is the major weakness of the voltage operated ELCB that has led to it being largely superseded?",
    "a": "Its correct operation depends entirely on the integrity and resistance of the separate earth wiring, so a broken, corroded or poorly bonded earth connection can mean it fails to detect a genuine fault at all",
    "opts": [
      "Its correct operation depends entirely on the integrity and resistance of the separate earth wiring, so a broken, corroded or poorly bonded earth connection can mean it fails to detect a genuine fault at all",
      "It is far more expensive to manufacture than a modern RCCB",
      "It cannot be used on three phase circuits under any circumstances",
      "It nuisance trips far more often than an RCCB on healthy circuits"
    ],
    "exp": "The ELCB's operation depends entirely on the earth wiring's integrity and resistance. If that earth connection is broken, corroded or poorly bonded, the device may fail to detect a genuine fault at all, which is why it has fallen out of favour.",
    "cat": "ELCB",
    "id": "F13_061"
  },
  {
    "q": "Why does an RCCB not share the ELCB's dependency on earth wire condition?",
    "a": "It does not rely on the earth conductor at all to detect the imbalance, only on comparing the live conductors against each other via the toroidal CT",
    "opts": [
      "It does not rely on the earth conductor at all to detect the imbalance, only on comparing the live conductors against each other via the toroidal CT",
      "It has its own dedicated backup earth wire built into the device",
      "It measures earth wire resistance continuously and alarms if it degrades",
      "It uses a chemical sensor instead of any earth wire connection"
    ],
    "exp": "A current operated RCCB compares the live conductors against each other through the toroidal CT and has no dependency on the earth conductor at all to detect the imbalance, unlike the ELCB.",
    "cat": "ELCB",
    "id": "F13_062"
  },
  {
    "q": "What trip current threshold is associated with personnel protection against electric shock, such as at sockets or in wet locations?",
    "a": "30 mA",
    "opts": ["30 mA", "100 mA", "300 to 500 mA", "1000 mA"],
    "exp": "30 mA is the standard sensitivity for personnel protection against dangerous electric shock, used on sockets, portable equipment, and wet or exposed locations.",
    "cat": "ELCB",
    "id": "F13_063"
  },
  {
    "q": "What is the typical duty of a 300 to 500 mA trip threshold device?",
    "a": "Fire protection only, on circuits such as fixed lighting distribution, and it will not reliably protect a person from a dangerous shock",
    "opts": [
      "Fire protection only, on circuits such as fixed lighting distribution, and it will not reliably protect a person from a dangerous shock",
      "Full personnel shock protection on portable equipment",
      "Protection of sensitive electronic control circuits",
      "The standard sensitivity for socket outlets in wet locations"
    ],
    "exp": "300 to 500 mA is fire protection duty only, typically on fixed lighting distribution circuits, protecting against the fire risk of sustained low level earth leakage rather than protecting a person from shock.",
    "cat": "ELCB",
    "id": "F13_064"
  },
  {
    "q": "What is the typical duty of a 100 mA trip threshold device, compared with 30 mA?",
    "a": "A broader degree of protection, used where full 30 mA sensitivity would cause excessive nuisance tripping on larger or slightly leaky circuits, while still offering meaningful shock protection",
    "opts": [
      "A broader degree of protection, used where full 30 mA sensitivity would cause excessive nuisance tripping on larger or slightly leaky circuits, while still offering meaningful shock protection",
      "Fire protection only, identical in purpose to the 300 to 500 mA rating",
      "It is used exclusively on high voltage systems above 1000 V",
      "It has no meaningful protective duty and exists only for testing purposes"
    ],
    "exp": "100 mA offers a broader degree of protection, used where full 30 mA sensitivity would cause excessive nuisance tripping on larger or slightly leaky circuits, while still offering meaningful shock protection, distinct from the pure fire-protection role of 300-500 mA.",
    "cat": "ELCB",
    "id": "F13_065"
  },
  {
    "q": "In everyday shipboard speech, why might \"ELCB\" and \"RCCB\" sometimes be used loosely to mean the same thing?",
    "a": "Because current sensing devices are sometimes casually called ELCBs even though the term technically refers to the older voltage operated type",
    "opts": [
      "Because current sensing devices are sometimes casually called ELCBs even though the term technically refers to the older voltage operated type",
      "Because the two devices are electrically identical internally, just in different housings",
      "Because RCCB is simply the American name and ELCB the British name for the same device",
      "Because both devices always use exactly the same 30 mA threshold"
    ],
    "exp": "The notes point out that RCCBs, and modern current operated devices sometimes still called ELCBs in casual shipboard usage, are effectively referring to the same current sensing device, even though strictly ELCB denotes the older voltage operated type.",
    "cat": "ELCB",
    "id": "F13_066"
  },

  /* ═══════════ DISCRIMINATION / SELECTIVITY ═══════════ */
  {
    "q": "What is discrimination (selectivity) in switchgear protection?",
    "a": "The design principle that, when a fault occurs, only the protective device immediately upstream of the fault should operate, leaving every other higher level breaker undisturbed",
    "opts": [
      "The design principle that, when a fault occurs, only the protective device immediately upstream of the fault should operate, leaving every other higher level breaker undisturbed",
      "The practice of setting every breaker on a board to the same trip current",
      "A pre-planned shedding of non-essential loads when a generator trips",
      "The process of testing a breaker's breaking capacity before installation"
    ],
    "exp": "Discrimination means that only the device closest to a fault should trip, leaving the sub-board and main switchboard feeding it live and unaffected. The load-shedding description belongs to preferential tripping, a related but distinct concept.",
    "cat": "DISCRIM",
    "id": "F13_067"
  },
  {
    "q": "How does current grading achieve discrimination?",
    "a": "Devices further upstream are set or inherently rated to respond only to progressively higher fault currents than devices downstream of them",
    "opts": [
      "Devices further upstream are set or inherently rated to respond only to progressively higher fault currents than devices downstream of them",
      "Devices further upstream are given a longer time delay before tripping regardless of fault magnitude",
      "All devices on the board are set to trip at exactly the same current",
      "Downstream devices are set to trip at a higher current than upstream devices"
    ],
    "exp": "Current grading sets devices further upstream, closer to the source, to respond only to progressively higher fault currents than downstream devices, so a small final circuit breaker trips on a modest fault while the feeder breaker above only trips on a much larger one.",
    "cat": "DISCRIM",
    "id": "F13_068"
  },
  {
    "q": "How does time grading achieve discrimination?",
    "a": "Devices further upstream are set with a deliberately longer time delay before tripping than devices below them, even for the same fault current, giving the downstream device first opportunity to clear it",
    "opts": [
      "Devices further upstream are set with a deliberately longer time delay before tripping than devices below them, even for the same fault current, giving the downstream device first opportunity to clear it",
      "Devices further upstream are set to trip instantly regardless of fault current",
      "All devices are graded purely by their physical size and current rating",
      "Time grading assigns each device a different trip curve letter (B, C or D)"
    ],
    "exp": "Time grading gives upstream devices a deliberately longer delay than downstream ones, even for the same fault current, so the downstream device gets first opportunity to clear the fault before the upstream device steps in as backup.",
    "cat": "DISCRIM",
    "id": "F13_069"
  },
  {
    "q": "Why does poor discrimination matter more on a ship than on a shore-based grid?",
    "a": "A ship's electrical system has no wider network to fall back on, so a fault tripping the wrong breaker can cause a full or partial blackout instead of just losing one small circuit",
    "opts": [
      "A ship's electrical system has no wider network to fall back on, so a fault tripping the wrong breaker can cause a full or partial blackout instead of just losing one small circuit",
      "Ship breakers are inherently less reliable than shore breakers of the same rating",
      "Shore grids do not use discrimination at all, so the comparison does not apply",
      "Poor discrimination only affects fault current magnitude, not which breaker trips"
    ],
    "exp": "A ship has no wider network to fall back on if the wrong breaker trips. If a fault on a small final circuit trips the main switchboard or a generator breaker instead of just its own local breaker, the result is a full or partial blackout for a fault that should have cost one lighting circuit or one small pump.",
    "cat": "DISCRIM",
    "id": "F13_070"
  },
  {
    "q": "What is preferential tripping, and how does it differ from discrimination?",
    "a": "A deliberate, pre-planned shedding of selected non-essential loads in priority order when the system is overloaded or a generator trips, whereas discrimination is about isolating a fault to the smallest area",
    "opts": [
      "A deliberate, pre-planned shedding of selected non-essential loads in priority order when the system is overloaded or a generator trips, whereas discrimination is about isolating a fault to the smallest area",
      "Another name for exactly the same concept as discrimination, just used interchangeably",
      "The process of grading breaker trip times, identical in meaning to time grading",
      "A method of choosing which manufacturer's breakers to fit on a new switchboard"
    ],
    "exp": "Preferential tripping is a related but distinct concept: deliberately dropping selected non-essential loads in priority order after a loss of generation capacity, to protect the system as a whole. Discrimination is instead about isolating a fault to the smallest possible area.",
    "cat": "DISCRIM",
    "id": "F13_071"
  },
  {
    "q": "Why are switchboard protection settings on a ship calculated and coordinated deliberately, rather than left at manufacturer defaults?",
    "a": "Good discrimination is what keeps a single, contained fault from becoming a ship-wide loss of power",
    "opts": [
      "Good discrimination is what keeps a single, contained fault from becoming a ship-wide loss of power",
      "Manufacturer default settings are always illegal under classification society rules",
      "Default settings would make every breaker trip simultaneously on any fault",
      "It is purely a cost-saving measure with no protective benefit"
    ],
    "exp": "Deliberate coordination of protection settings is what achieves good discrimination, keeping a single, contained fault from becoming a ship-wide loss of power, given that a ship has no wider grid to fall back on.",
    "cat": "DISCRIM",
    "id": "F13_072"
  },

  /* ═══════════ ACB CONSTRUCTION ═══════════ */
  {
    "q": "Why is an Air Circuit Breaker called that specifically?",
    "a": "Because its main contacts open, and the resulting arc is controlled and extinguished, in air at atmospheric pressure rather than a sealed insulating gas or oil",
    "opts": [
      "Because its main contacts open, and the resulting arc is controlled and extinguished, in air at atmospheric pressure rather than a sealed insulating gas or oil",
      "Because it is cooled by a forced air fan built into the breaker housing",
      "Because it can only be installed in open, ventilated engine room spaces",
      "Because it uses compressed air to mechanically open its contacts"
    ],
    "exp": "An ACB earns its name because the medium in which its main contacts open and the arc is controlled and extinguished is simply air at atmospheric pressure, rather than a sealed insulating gas or oil as in some other switchgear types.",
    "cat": "ACB",
    "id": "F13_073"
  },
  {
    "q": "Why do the dedicated arcing contacts in an ACB separate last, rather than the main current-carrying contacts?",
    "a": "So the arc forms at the arcing contacts rather than damaging the main contact surfaces used for everyday current carrying",
    "opts": [
      "So the arc forms at the arcing contacts rather than damaging the main contact surfaces used for everyday current carrying",
      "So the main contacts can continue carrying current during the entire arcing process",
      "Because the arcing contacts are cheaper to replace than the arc chute",
      "Because the main contacts are not rated to withstand any arc at all"
    ],
    "exp": "The main current-carrying contacts separate first; the dedicated arcing contacts are last to separate, so the arc forms there instead of damaging the main contact surfaces used for everyday current carrying.",
    "cat": "ACB",
    "id": "F13_074"
  },
  {
    "q": "What is the function of the splitter plates inside an ACB's arc chute?",
    "a": "They divide the single arc into several shorter arcs in series, each harder to sustain, and conduct heat away rapidly to cool and de-ionise the arc path",
    "opts": [
      "They divide the single arc into several shorter arcs in series, each harder to sustain, and conduct heat away rapidly to cool and de-ionise the arc path",
      "They amplify the arc's magnetic field to extend the breaker's breaking capacity",
      "They store the arc's energy for later dissipation through a resistor bank",
      "They simply provide mechanical support for the arc runner plates"
    ],
    "exp": "Splitter plates divide the single arc into several shorter arcs in series, each harder to sustain than one long one, and the metal plates conduct heat away rapidly, cooling and de-ionising the arc path until it can no longer be sustained by the system voltage.",
    "cat": "ACB",
    "id": "F13_075"
  },
  {
    "q": "What advantage does a draw out (withdrawable) chassis give a marine ACB?",
    "a": "The breaker can be racked out from its cubicle for inspection, testing or maintenance while the cubicle's fixed contacts and busbars are isolated, without disturbing the rest of the switchboard",
    "opts": [
      "The breaker can be racked out from its cubicle for inspection, testing or maintenance while the cubicle's fixed contacts and busbars are isolated, without disturbing the rest of the switchboard",
      "It allows the breaker to be operated remotely without any physical presence on board",
      "It eliminates the need for any breaking capacity rating on the device",
      "It permits the breaker to be used interchangeably as an MCCB"
    ],
    "exp": "A draw out chassis lets the breaker be racked out from its cubicle for inspection, testing or maintenance while the fixed contacts and busbars are isolated, without disturbing the rest of the switchboard.",
    "cat": "ACB",
    "id": "F13_076"
  },
  {
    "q": "What protection functions does a modern ACB's electronic trip unit typically provide, replacing the fixed thermal-magnetic response of a small MCB?",
    "a": "Adjustable long time (overload), short time (grading delay for discrimination), instantaneous, and often earth fault protection, all in one programmable device",
    "opts": [
      "Adjustable long time (overload), short time (grading delay for discrimination), instantaneous, and often earth fault protection, all in one programmable device",
      "Only a fixed instantaneous trip threshold with no adjustability",
      "Voltage regulation of the generator output alone",
      "Only earth fault protection, with overload handled by a separate relay"
    ],
    "exp": "An ACB's electronic trip unit provides adjustable long time (overload), short time (grading delay for discrimination), instantaneous, and often earth fault protection, all in one programmable device, exactly why ACBs sit where discrimination must be engineered and set.",
    "cat": "ACB",
    "id": "F13_077"
  },

  /* ═══════════ LV / HV BOUNDARY ═══════════ */
  {
    "q": "Where does marine practice, under IEC 60092, draw the boundary between low voltage and high voltage AC systems?",
    "a": "1000 V AC",
    "opts": ["1000 V AC", "690 V AC", "3300 V AC", "6600 V AC"],
    "exp": "Marine electrical practice, consistently across IEC 60092, draws the LV/HV boundary at 1000 V AC (1500 V DC for the equivalent DC figure). Systems up to and including 1000 V AC are low voltage; above that is high voltage.",
    "cat": "LVHV",
    "id": "F13_078"
  },
  {
    "q": "What is the equivalent DC boundary figure between LV and HV in marine practice?",
    "a": "1500 V DC",
    "opts": ["1500 V DC", "1000 V DC", "2000 V DC", "690 V DC"],
    "exp": "The equivalent DC figure for the LV/HV boundary in marine practice is 1500 V DC, alongside the 1000 V AC boundary.",
    "cat": "LVHV",
    "id": "F13_079"
  },
  {
    "q": "Does marine practice use an intermediate \"medium voltage\" category between LV and HV, the way some shore-based standards do?",
    "a": "No, marine practice uses a single clean threshold with no medium voltage category in between",
    "opts": [
      "No, marine practice uses a single clean threshold with no medium voltage category in between",
      "Yes, medium voltage covers 1000 V to 3300 V under IEC 60092",
      "Yes, but only for DC systems, not AC systems",
      "Yes, medium voltage is used for all systems above 440 V"
    ],
    "exp": "This is a clean, single threshold at 1000 V AC; marine practice does not use an intermediate medium voltage category the way some shore-based utility and industrial standards sometimes do.",
    "cat": "LVHV",
    "id": "F13_080"
  },
  {
    "q": "For a given delivered power, why does raising the distribution voltage reduce the required cable cross section?",
    "a": "Cable cross section is driven by the current it must carry, and for the same power, higher voltage means proportionally lower current",
    "opts": [
      "Cable cross section is driven by the current it must carry, and for the same power, higher voltage means proportionally lower current",
      "Higher voltage cables are manufactured from a fundamentally different, thinner material",
      "Cable cross section is set only by voltage rating, unrelated to current",
      "Raising voltage reduces the total power that must be delivered"
    ],
    "exp": "Since P = VI, for the same delivered power a higher voltage means proportionally lower current. Cable cross section is driven by current, so lower current at higher voltage allows a smaller conductor for the same power.",
    "cat": "LVHV",
    "id": "F13_081"
  },
  {
    "q": "Why does a given percentage reduction in current give a disproportionately large percentage reduction in cable heating loss?",
    "a": "Because resistive heating loss in a cable is proportional to current squared",
    "opts": [
      "Because resistive heating loss in a cable is proportional to current squared",
      "Because cable resistance itself falls as current is reduced",
      "Because heating loss is proportional to voltage, not current",
      "Because lower current increases the cable's rated breaking capacity"
    ],
    "exp": "Cable I squared R loss scales with current squared, so halving the current for the same power quarters the cable heating loss, a disproportionately large reduction from a modest reduction in current.",
    "cat": "LVHV",
    "id": "F13_082"
  },
  {
    "q": "Which type of load is the clearest example of why larger vessels generate and distribute at high voltage?",
    "a": "Large propulsion loads, such as podded or thruster electric propulsion drawing several megawatts",
    "opts": [
      "Large propulsion loads, such as podded or thruster electric propulsion drawing several megawatts",
      "Small single phase lighting circuits in accommodation spaces",
      "Battery charging circuits for emergency lighting",
      "Control and instrumentation power supplies"
    ],
    "exp": "Large propulsion loads, particularly podded or thruster electric propulsion drawing several megawatts, are the clearest case: at low voltage the required current would demand impractically large cable and switchgear, so such vessels generate and distribute at high voltage and step down locally where lower voltage is genuinely needed.",
    "cat": "LVHV",
    "id": "F13_083"
  }

]);

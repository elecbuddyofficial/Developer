window.loadQuizzes("F20_Cables", [

  /* ═══════════ CABLE CONSTRUCTION ═══════════ */
  {
    "q": "Why is copper used for marine cable conductors rather than aluminium?",
    "a": "Higher conductivity per cross section, better corrosion resistance in a marine environment, and more reliable termination at small sizes",
    "opts": [
      "It is cheaper to produce than aluminium",
      "Higher conductivity per cross section, better corrosion resistance in a marine environment, and more reliable termination at small sizes",
      "Aluminium cannot be insulated with XLPE",
      "Copper is lighter, reducing weight on cable trays"
    ],
    "exp": "Copper gives higher conductivity per cross section, resists marine corrosion better, and terminates reliably at small sizes. Aluminium is actually lighter and often cheaper, which is why it sees some use ashore, but those advantages do not outweigh copper's reliability on ships.",
    "cat": "CONSTRUCTION",
    "id": "F20_001"
  },
  {
    "q": "Why are marine cable conductors stranded rather than solid?",
    "a": "So the conductor stays flexible under vibration without the strands work-hardening and cracking",
    "opts": [
      "Stranded conductors carry more current than solid ones of the same diameter",
      "Stranding reduces the cost of copper used",
      "So the conductor stays flexible under vibration without the strands work-hardening and cracking",
      "Stranded conductors do not need insulation"
    ],
    "exp": "Stranding keeps the conductor flexible so continuous shipboard vibration does not work-harden and crack it the way a solid conductor eventually would. It is not primarily about current capacity or cost.",
    "cat": "CONSTRUCTION",
    "id": "F20_002"
  },
  {
    "q": "What is the function of the conductor screen found on larger cables?",
    "a": "A thin semi-conducting layer that smooths the electric field at the conductor surface, avoiding stress concentrations",
    "opts": [
      "It provides the main mechanical protection for the cable",
      "It bonds the armour to earth at each termination",
      "A thin semi-conducting layer that smooths the electric field at the conductor surface, avoiding stress concentrations",
      "It insulates the conductor from the working voltage"
    ],
    "exp": "The conductor screen is a thin semi-conducting layer that smooths the electric field right at the conductor surface, avoiding localised stress concentrations that could initiate insulation breakdown. Mechanical protection is the armour's job, and withstanding working voltage is the insulation's job.",
    "cat": "CONSTRUCTION",
    "id": "F20_003"
  },
  {
    "q": "What is the purpose of the bedding layer in an armoured cable?",
    "a": "A purely mechanical layer that gives the armour wires a smooth surface and stops the hard armour digging into the insulation, especially at bends",
    "opts": [
      "A purely mechanical layer that gives the armour wires a smooth surface and stops the hard armour digging into the insulation, especially at bends",
      "It carries the earth fault current back to the switchboard",
      "It withstands the cable's rated working voltage",
      "It provides the cable's flame retardant performance"
    ],
    "exp": "Bedding sits between the insulated cores and the armour purely for mechanical reasons: it smooths the surface for the armour wires and stops the hard armour biting into the insulation underneath, particularly at bends. Voltage withstand is the insulation's job, and flame performance is set by the outer sheath.",
    "cat": "CONSTRUCTION",
    "id": "F20_004"
  },
  {
    "q": "Besides mechanical protection, what secondary role does cable armour often serve?",
    "a": "Earth continuity conductor",
    "opts": [
      "Voltage regulation along the cable run",
      "Earth continuity conductor",
      "Primary current-carrying conductor",
      "Thermal insulation for the cores"
    ],
    "exp": "Armour is a substantial mass of conductive steel or aluminium running the cable's full length, and is commonly used as the earth continuity conductor as well as providing mechanical protection against impact and abrasion.",
    "cat": "CONSTRUCTION",
    "id": "F20_005"
  },
  {
    "q": "What determines the outer sheath's compound selection, beyond weather resistance?",
    "a": "Its flame and fire performance",
    "opts": [
      "The colour coding required by the classification society",
      "Its flame and fire performance",
      "The number of cores inside the cable",
      "The conductor material used"
    ],
    "exp": "The outer sheath protects the armour from corrosion, weather and oil or chemical contact, but its compound is chosen just as much for flame and fire performance, which is why flame retardant and fire resistant properties are largely a function of the sheath and any fire barrier tape beneath it.",
    "cat": "CONSTRUCTION",
    "id": "F20_006"
  },
  {
    "q": "A small control cable installed in a protected space may skip which layer, relying instead on conduit or trunking?",
    "a": "Armour",
    "opts": [
      "Insulation",
      "Conductor",
      "Armour",
      "Sheath"
    ],
    "exp": "Not every cable has every layer. A small control cable in a protected space may skip armour and rely on conduit or trunking for mechanical protection instead. Insulation and conductor are never omitted, since they are what makes the cable a cable.",
    "cat": "CONSTRUCTION",
    "id": "F20_007"
  },

  /* ═══════════ INSULATION MATERIALS ═══════════ */
  {
    "q": "What is the maximum continuous conductor temperature for PVC insulation?",
    "a": "70°C",
    "opts": ["50°C", "70°C", "90°C", "105°C"],
    "exp": "PVC is a thermoplastic rated to 70°C continuous. XLPE and EPR are rated higher, typically 90°C and up to 105°C for some EPR grades.",
    "cat": "INSULATION",
    "id": "F20_008"
  },
  {
    "q": "What is the maximum continuous conductor temperature for XLPE insulation?",
    "a": "90°C",
    "opts": ["70°C", "90°C", "130°C", "60°C"],
    "exp": "XLPE (cross-linked polyethylene) is rated to 90°C continuous, well above PVC's 70°C, which is one reason it is the standard choice for modern marine power cables.",
    "cat": "INSULATION",
    "id": "F20_009"
  },
  {
    "q": "PVC is classified as which type of insulating material?",
    "a": "Thermoplastic",
    "opts": ["Thermoset", "Thermoplastic", "Elastomer", "Ceramic"],
    "exp": "PVC is a thermoplastic, meaning it softens when heated. XLPE and EPR are both thermosets (EPR specifically an elastomer thermoset), which do not soften the same way once cured.",
    "cat": "INSULATION",
    "id": "F20_010"
  },
  {
    "q": "Why does XLPE insulation not soften when it gets hot, unlike PVC?",
    "a": "It is cross-linked during manufacture into a thermoset, changing its molecular structure permanently",
    "opts": [
      "It is cross-linked during manufacture into a thermoset, changing its molecular structure permanently",
      "It contains ceramic fibres that resist heat",
      "It is coated with a reflective layer that deflects heat",
      "It has a lower resistivity than PVC"
    ],
    "exp": "Cross-linking turns the polyethylene into a thermoset during manufacture, so unlike PVC it does not soften when hot. This is also what gives it its higher short circuit withstand.",
    "cat": "INSULATION",
    "id": "F20_011"
  },
  {
    "q": "Compared with XLPE, what practical advantage does EPR insulation offer?",
    "a": "It is more flexible, suiting repeated flexing, and tolerates some emergency overload well",
    "opts": [
      "It is more flexible, suiting repeated flexing, and tolerates some emergency overload well",
      "It has a lower cost than PVC",
      "It requires no conductor screen even on high voltage cables",
      "It has a higher continuous temperature rating than XLPE"
    ],
    "exp": "EPR is more flexible than XLPE, suiting circuits with repeated flexing, and tolerates emergency overload reasonably well. Its continuous rating is broadly similar to XLPE (90°C, some grades to 105°C), not higher, and it is not cheaper than PVC.",
    "cat": "INSULATION",
    "id": "F20_012"
  },
  {
    "q": "Why do thermoset insulation materials like XLPE and EPR dominate marine power cabling?",
    "a": "Their higher short circuit withstand lets a cable survive a fault without permanent damage, important since a ship cannot easily replace a cable run",
    "opts": [
      "They are significantly cheaper than PVC to manufacture",
      "Their higher short circuit withstand lets a cable survive a fault without permanent damage, important since a ship cannot easily replace a cable run",
      "They do not require de-rating for ambient temperature",
      "They are the only materials approved for AC circuits"
    ],
    "exp": "Thermoset materials tolerate much higher short circuit temperatures than PVC, so a cable survives a fault without permanent damage. That matters on a ship, which cannot simply pull into a manufacturer's yard for a replacement run. De-rating still applies to all cable types regardless of insulation.",
    "cat": "INSULATION",
    "id": "F20_013"
  },
  {
    "q": "Under short circuit conditions lasting only about a second, roughly what temperature can XLPE or EPR insulation briefly withstand?",
    "a": "Up to around 250°C",
    "opts": ["Up to around 160°C", "Up to around 100°C", "Up to around 250°C", "Up to around 500°C"],
    "exp": "XLPE and EPR can briefly withstand up to around 250°C under short circuit conditions, well above their continuous rating. PVC's short circuit figure is lower, broadly around 160°C.",
    "cat": "INSULATION",
    "id": "F20_014"
  },
  {
    "q": "Why does a cable's insulation temperature rating matter for its current carrying capacity?",
    "a": "Current carrying capacity tables are built around that rating, since the conductor heats under load from I²R losses and the limit is whatever temperature the insulation can stand continuously",
    "opts": [
      "It does not affect current carrying capacity, only voltage rating",
      "Current carrying capacity tables are built around that rating, since the conductor heats under load from I²R losses and the limit is whatever temperature the insulation can stand continuously",
      "Higher temperature ratings only matter for DC circuits",
      "The temperature rating only affects the cable's outer sheath colour"
    ],
    "exp": "Ampacity is fundamentally a heat problem: I²R losses heat the conductor, and the limit is whatever temperature the insulation can tolerate continuously without ageing. A 90°C-rated XLPE cable therefore carries more current than a 70°C-rated PVC cable of identical conductor size.",
    "cat": "INSULATION",
    "id": "F20_015"
  },

  /* ═══════════ CABLE SIZING & DE-RATING ═══════════ */
  {
    "q": "What three checks must a correctly sized cable pass?",
    "a": "Current carrying capacity, voltage drop, and short circuit withstand",
    "opts": [
      "Current carrying capacity, voltage drop, and short circuit withstand",
      "Conductor colour, insulation colour, and armour type",
      "Cable length, cable weight, and bend radius",
      "Manufacturer, cost, and delivery time"
    ],
    "exp": "A cable must satisfy all three: it must carry the load current without overheating, keep voltage drop within the allowable percentage, and survive fault current for the time it takes protection to clear.",
    "cat": "SIZING",
    "id": "F20_016"
  },
  {
    "q": "When the three cable sizing checks give different minimum cable sizes, which size is actually selected?",
    "a": "Whichever check demands the largest cross section",
    "opts": [
      "The average of the three results",
      "Whichever check demands the largest cross section",
      "The smallest size that passes the ampacity check alone",
      "Whichever size the manufacturer has in stock"
    ],
    "exp": "All three checks must pass simultaneously, so the final cable size is set by whichever single check demands the largest cross section, even if the other two would have allowed something smaller.",
    "cat": "SIZING",
    "id": "F20_017"
  },
  {
    "q": "Why can a long, lightly loaded cable run still require a larger conductor than the ampacity check alone would suggest?",
    "a": "Voltage drop over the length of the run may exceed the allowable percentage even though the current is well within the thermal rating",
    "opts": [
      "Voltage drop over the length of the run may exceed the allowable percentage even though the current is well within the thermal rating",
      "Long cables always fail the short circuit withstand check",
      "Longer cables have thinner insulation by manufacturing standard",
      "Ambient temperature always increases with cable length"
    ],
    "exp": "Every metre of cable has resistance and reactance, so a long run can develop excessive voltage drop at the far end even while comfortably passing the thermal ampacity check. The fix is a larger conductor to reduce that drop.",
    "cat": "SIZING",
    "id": "F20_018"
  },
  {
    "q": "During a short circuit, what must a correctly sized cable be able to do?",
    "a": "Survive the fault current for the time it takes upstream protection to clear it, without the conductor exceeding the insulation's temperature limit",
    "opts": [
      "Survive the fault current for the time it takes upstream protection to clear it, without the conductor exceeding the insulation's temperature limit",
      "Automatically trip the upstream breaker itself",
      "Carry the fault current indefinitely without any protective device operating",
      "Reduce its own resistance to limit the fault current"
    ],
    "exp": "The cable must withstand the fault current for the actual clearing time of the breaker or fuse protecting it, without the conductor reaching a temperature that damages the insulation. This is why cable sizing and protective device selection are done together.",
    "cat": "SIZING",
    "id": "F20_019"
  },
  {
    "q": "What are the two factors that most commonly de-rate a cable's tabulated current rating on board a ship?",
    "a": "Ambient temperature and grouping",
    "opts": [
      "Ambient temperature and grouping",
      "Cable colour and conductor material",
      "Voltage rating and cable length",
      "Insulation type and armour thickness"
    ],
    "exp": "The two factors that matter most on board are ambient temperature, since engine rooms and switchboard rooms run hotter than the reference figure, and grouping, since cables bunched in a tray add heat and block each other's cooling.",
    "cat": "SIZING",
    "id": "F20_020"
  },
  {
    "q": "A cable's tabulated current rating is measured under what reference conditions?",
    "a": "A reference ambient (commonly 30 to 40°C) with the cable laid singly in free air, no other heat sources nearby",
    "opts": [
      "Full load current with the cable submerged in seawater",
      "A reference ambient (commonly 30 to 40°C) with the cable laid singly in free air, no other heat sources nearby",
      "Zero ambient temperature with the cable bunched with ten others",
      "Rated short circuit current for one second"
    ],
    "exp": "Like a breaker's nameplate rating, the tabulated cable current is only valid at a defined reference condition: a moderate ambient and the cable laid singly in free air. Real installed conditions almost always require a correction factor.",
    "cat": "SIZING",
    "id": "F20_021"
  },
  {
    "q": "Why does grouping several cables together in one tray reduce the current each one is allowed to carry?",
    "a": "Each cable adds heat and blocks the others' convection cooling, so the whole group runs hotter for a given current",
    "opts": [
      "Grouped cables develop higher resistance due to physical contact",
      "Each cable adds heat and blocks the others' convection cooling, so the whole group runs hotter for a given current",
      "Grouping cables changes their insulation's voltage rating",
      "Class societies simply set a lower rating for aesthetic reasons"
    ],
    "exp": "Cables run together in a tray each add heat and interfere with each other's convection cooling, so the more cables grouped and the closer packed, the lower the current each is allowed, applied as a grouping de-rating factor on the base table value.",
    "cat": "SIZING",
    "id": "F20_022"
  },
  {
    "q": "Why does a hotter actual ambient temperature reduce a cable's allowable current?",
    "a": "There is less thermal headroom before I²R heating pushes the conductor to its insulation's temperature limit",
    "opts": [
      "There is less thermal headroom before I²R heating pushes the conductor to its insulation's temperature limit",
      "Hot air increases the conductor's cross sectional area",
      "Hot ambient conditions increase the cable's voltage rating requirement",
      "It has no effect; only grouping affects the current rating"
    ],
    "exp": "The hotter the surrounding air starts, the less thermal headroom is left before I²R heating pushes the conductor to its insulation's temperature limit, so the allowable current is reduced accordingly.",
    "cat": "SIZING",
    "id": "F20_023"
  },
  {
    "q": "The logic behind cable current de-rating for ambient and grouping is described in the notes as following the same principle as which other topic?",
    "a": "MCCB (circuit breaker) de-rating",
    "opts": [
      "Insulation resistance testing",
      "MCCB (circuit breaker) de-rating",
      "Transformer vector grouping",
      "Battery capacity de-rating"
    ],
    "exp": "The notes draw a direct parallel to MCCB de-rating: a tabulated figure is only valid under the specific reference conditions it was measured against, and correction factors must be applied for the real installed ambient and grouping.",
    "cat": "SIZING",
    "id": "F20_024"
  },

  /* ═══════════ FLAME RETARDANT vs FIRE RESISTANT ═══════════ */
  {
    "q": "What does a flame retardant cable do when exposed to flame?",
    "a": "It does not actively sustain or propagate that flame along its own length once the ignition source is removed",
    "opts": [
      "It keeps conducting electricity for a specified period while on fire",
      "It does not actively sustain or propagate that flame along its own length once the ignition source is removed",
      "It automatically extinguishes any surrounding fire",
      "It self-cools to prevent the insulation from igniting at all"
    ],
    "exp": "Flame retardant cable stops fire spreading along its own length once the ignition source is gone, so a fire in one cable route does not propagate to adjacent cables. It is not designed to keep working while burning; that is the definition of fire resistant cable instead.",
    "cat": "FIRECABLE",
    "id": "F20_025"
  },
  {
    "q": "What does a fire resistant (fire survival / circuit integrity) cable do that a flame retardant cable does not?",
    "a": "It keeps conducting while directly exposed to fire for a specified period at a specified temperature",
    "opts": [
      "It keeps conducting while directly exposed to fire for a specified period at a specified temperature",
      "It prevents adjacent cables in the same tray from catching fire",
      "It costs less than a standard flame retardant cable",
      "It uses a thinner sheath to reduce smoke generation"
    ],
    "exp": "Fire resistant cable relies on a mica or ceramic-forming tape around the conductor that fuses into an insulating barrier under flame, keeping the circuit closed after the polymer insulation has burned away. Stopping fire propagation to neighbouring cables is what flame retardant cable does.",
    "cat": "FIRECABLE",
    "id": "F20_026"
  },
  {
    "q": "Which IEC standard family covers flame retardant cable testing?",
    "a": "IEC 60332",
    "opts": ["IEC 60331", "IEC 60332", "IEC 61892", "IEC 60228"],
    "exp": "IEC 60332 covers flame propagation testing, both single cable (60332-1) and bunched cables in a tray (60332-3). IEC 60331 is the fire resistant (circuit integrity) standard, not the flame retardant one.",
    "cat": "FIRECABLE",
    "id": "F20_027"
  },
  {
    "q": "Which IEC standard covers fire resistant (circuit integrity) cable testing?",
    "a": "IEC 60331",
    "opts": ["IEC 60332", "IEC 60331", "IEC 60092", "IEC 60364"],
    "exp": "IEC 60331 defines a flame temperature for a set duration while the cable stays energised and is monitored for continuity, the test for fire resistant performance. IEC 60332 is the flame propagation test used for flame retardant cable.",
    "cat": "FIRECABLE",
    "id": "F20_028"
  },
  {
    "q": "What material typically enables a cable's fire resistant (circuit integrity) performance?",
    "a": "A mica or ceramic-forming tape wrapped around the conductor",
    "opts": [
      "A thicker layer of standard PVC insulation",
      "A mica or ceramic-forming tape wrapped around the conductor",
      "An additional layer of galvanised steel armour",
      "A reflective aluminium foil sheath"
    ],
    "exp": "Fire resistant cable typically relies on a mica or ceramic-forming tape wrapped around the conductor, which fuses into an insulating barrier under flame and keeps the circuit closed after the polymer insulation has burned away.",
    "cat": "FIRECABLE",
    "id": "F20_029"
  },
  {
    "q": "Which cable performance standard is the baseline expectation everywhere on a ship, regardless of what the circuit feeds?",
    "a": "Flame retardant",
    "opts": [
      "Fire resistant",
      "Flame retardant",
      "IEC 60228 conductor sizing",
      "Watertight integrity certification"
    ],
    "exp": "Flame retardant performance is the baseline expectation everywhere on board, since a cable route that propagates fire is a hazard no matter what it feeds. Fire resistant construction is reserved for circuits that must keep working during a fire.",
    "cat": "FIRECABLE",
    "id": "F20_030"
  },
  {
    "q": "Which of these circuits is specifically required to use fire resistant cable, per SOLAS and classification society rules?",
    "a": "Emergency fire pump",
    "opts": [
      "Emergency fire pump",
      "Galley lighting circuit",
      "Accommodation air conditioning fan",
      "Deck crane hydraulic pump motor"
    ],
    "exp": "Fire resistant cable is required for circuits that must stay operational during a fire because safety depends on them working while it happens: emergency fire pumps, emergency lighting, fire detection and alarm, general alarm, and emergency generator control among others. General accommodation and deck machinery circuits do not carry this requirement.",
    "cat": "FIRECABLE",
    "id": "F20_031"
  },
  {
    "q": "Once a fire has fully taken hold in a cable that is only flame retardant, not fire resistant, what happens electrically?",
    "a": "It fails electrically like any other cable, since flame retardant construction was never designed to keep it working while burning",
    "opts": [
      "It continues to conduct normally until the fire is extinguished",
      "It fails electrically like any other cable, since flame retardant construction was never designed to keep it working while burning",
      "It automatically switches to a backup conductor",
      "Its resistance drops to zero, causing a short circuit at the switchboard"
    ],
    "exp": "Flame retardant cable is only designed to stop the fire spreading along its length; it is not designed to keep working while burning. Once fire takes hold, it fails electrically like any other cable, which is exactly why fire resistant cable exists as a separate, stricter category.",
    "cat": "FIRECABLE",
    "id": "F20_032"
  },
  {
    "q": "IEC 60332-3, testing bunched cables in a tray, is considered more realistic than IEC 60332-1 because:",
    "a": "It reflects how cables are actually installed on board, in trays alongside other cables",
    "opts": [
      "It tests at a much higher temperature than 60332-1",
      "It reflects how cables are actually installed on board, in trays alongside other cables",
      "It replaces the need for fire resistant testing entirely",
      "It only applies to single core cables"
    ],
    "exp": "IEC 60332-1 tests a single cable, while 60332-3 tests bunched cables in a tray, which is a far more realistic representation of how cables are actually installed on a ship, side by side in trays and trunking.",
    "cat": "FIRECABLE",
    "id": "F20_033"
  },

  /* ═══════════ GLANDING & EARTHING ═══════════ */
  {
    "q": "A correctly fitted cable gland performs two jobs. What are they?",
    "a": "Mechanical retention and sealing of the cable, and earthing the armour",
    "opts": [
      "Mechanical retention and sealing of the cable, and earthing the armour",
      "Voltage regulation and current limiting",
      "Insulation testing and continuity testing",
      "Fireproofing and soundproofing the penetration"
    ],
    "exp": "The gland clamps onto the outer sheath and grips the armour so pull or vibration is taken by the gland rather than the internal terminations, and it also provides the means to bond the armour to earth. Both jobs matter, and it is easy to only think about the first.",
    "cat": "GLANDING",
    "id": "F20_034"
  },
  {
    "q": "Where a cable gland passes through a bulkhead or deck, what must it also maintain?",
    "a": "That structure's fire and watertight integrity",
    "opts": [
      "The cable's voltage rating",
      "That structure's fire and watertight integrity",
      "A minimum bend radius for the cable",
      "The ship's overall electromagnetic compatibility rating"
    ],
    "exp": "A gland passing through a bulkhead or deck must maintain that structure's fire and watertight integrity, which is why gland installation on penetrations is specifically checked at survey.",
    "cat": "GLANDING",
    "id": "F20_035"
  },
  {
    "q": "Why does earthing the cable armour give an insulation fault a fast, safe outcome?",
    "a": "A solidly earthed armour gives fault current a low impedance path back to source, so upstream protection sees a large fault current and trips quickly",
    "opts": [
      "A solidly earthed armour gives fault current a low impedance path back to source, so upstream protection sees a large fault current and trips quickly",
      "Earthing the armour prevents insulation faults from occurring in the first place",
      "It reduces the cable's normal operating current",
      "It automatically isolates the faulted cable without a breaker"
    ],
    "exp": "If a live conductor touches an earthed armour, the low impedance earth path lets a large fault current flow, so upstream protection sees it and trips quickly. An unearthed armour instead leaves everything touching it at a dangerous potential with no fast trip.",
    "cat": "GLANDING",
    "id": "F20_036"
  },
  {
    "q": "On an insulated (IT) hull system, which most ships use, what additional benefit does a bonded armour provide?",
    "a": "It helps an earth fault monitor detect the first fault anywhere on the network before a second fault turns it into a genuine short circuit",
    "opts": [
      "It eliminates the need for an earth fault monitor entirely",
      "It helps an earth fault monitor detect the first fault anywhere on the network before a second fault turns it into a genuine short circuit",
      "It allows the system to operate without any circuit breakers",
      "It converts the IT system into a solidly earthed (TN) system"
    ],
    "exp": "On an insulated system a bonded armour supports the earth fault monitor in catching the first fault anywhere on the network, before an unrelated second fault elsewhere turns the pair into a genuine short circuit.",
    "cat": "GLANDING",
    "id": "F20_037"
  },
  {
    "q": "Besides fault current path and earth fault monitoring, what third benefit does a continuously earthed armour provide near instrumentation cabling?",
    "a": "Electromagnetic screening, reducing interference into nearby signal cables",
    "opts": [
      "It increases the cable's voltage rating",
      "Electromagnetic screening, reducing interference into nearby signal cables",
      "It removes the need for cable segregation",
      "It allows higher ambient temperature de-rating"
    ],
    "exp": "A continuously earthed armour, especially near instrumentation runs, provides some electromagnetic screening, reducing interference coupling into nearby signal cables, on top of its fault current and earth monitoring roles.",
    "cat": "GLANDING",
    "id": "F20_038"
  },
  {
    "q": "How is armour continuity along a cable run actually verified?",
    "a": "A continuity test between the gland earth tags at each end",
    "opts": [
      "By visual inspection of the outer sheath only",
      "A continuity test between the gland earth tags at each end",
      "By measuring the cable's insulation resistance",
      "By checking the cable's manufacturer certificate"
    ],
    "exp": "Armour continuity must be maintained along the entire run, including through joints, and this is checked with a continuity test between the gland earth tags at each end. A break partway along defeats the earthing at every point beyond it.",
    "cat": "GLANDING",
    "id": "F20_039"
  },

  /* ═══════════ SEGREGATION ═══════════ */
  {
    "q": "Why are power and signal/instrumentation cables routed separately wherever practicable?",
    "a": "A power cable's changing magnetic field can induce unwanted voltage into a nearby signal cable, the same principle as a transformer",
    "opts": [
      "A power cable's changing magnetic field can induce unwanted voltage into a nearby signal cable, the same principle as a transformer",
      "Power cables run hotter and would overheat signal cable insulation if bundled together",
      "Signal cables carry higher voltages that could damage power cable insulation",
      "It is only a labelling convenience for maintenance staff"
    ],
    "exp": "A power cable carrying AC generates a changing magnetic field that induces a small unwanted voltage into a nearby parallel signal cable, exactly the way a transformer induces voltage in a nearby secondary winding.",
    "cat": "SEGREGATION",
    "id": "F20_040"
  },
  {
    "q": "Why is electromagnetic interference from a power cable a bigger problem for a signal cable than it would be for another power cable?",
    "a": "Signal circuits carry low level signals, millivolts to a few volts, so interference that is insignificant on a 440V power circuit can be a large fraction of the actual signal",
    "opts": [
      "Signal cables have thinner insulation, so more interference passes through physically",
      "Signal circuits carry low level signals, millivolts to a few volts, so interference that is insignificant on a 440V power circuit can be a large fraction of the actual signal",
      "Power cables are always screened, so they never receive interference",
      "Signal cables are always routed above power cables, closer to the induced field"
    ],
    "exp": "Signal circuits operate at millivolt to a few volt levels, so induced interference that would be trivial on a 440V power circuit can be a large fraction of the real signal, corrupting readings or triggering false alarms.",
    "cat": "SEGREGATION",
    "id": "F20_041"
  },
  {
    "q": "Where a power cable and a signal cable must cross, what routing minimises the interference coupled between them?",
    "a": "Crossing at right angles rather than running parallel",
    "opts": [
      "Crossing at right angles rather than running parallel",
      "Running them parallel but as far apart vertically as possible",
      "Twisting the two cables together at the crossing point",
      "Routing the signal cable through a separate deck entirely"
    ],
    "exp": "Crossing at right angles minimises the length over which the two cables' fields overlap, since the induced effect depends on shared parallel length rather than proximity at a single point.",
    "cat": "SEGREGATION",
    "id": "F20_042"
  },
  {
    "q": "What additional protection, beyond physical routing, reduces interference into a signal cable?",
    "a": "Screened signal cable, earthed at one end only",
    "opts": [
      "Doubling the signal cable's conductor cross section",
      "Screened signal cable, earthed at one end only",
      "Running the signal cable at a higher voltage",
      "Using PVC insulation instead of XLPE on the signal cable"
    ],
    "exp": "Screened signal cable, earthed at one end only, gives further protection by intercepting the induced field before it reaches the actual signal conductors.",
    "cat": "SEGREGATION",
    "id": "F20_043"
  },

  /* ═══════════ READING DRAWINGS ═══════════ */
  {
    "q": "What question does a single line diagram primarily answer?",
    "a": "How is power distributed around the ship, at overview level?",
    "opts": [
      "How is power distributed around the ship, at overview level?",
      "Which physical terminal connects to which?",
      "How does this specific circuit work, functionally?",
      "What is the insulation temperature rating of each cable?"
    ],
    "exp": "The single line diagram shows the whole generation and distribution architecture with one line representing all three phases, so you see how the system is laid out and how a trip would propagate, at a glance.",
    "cat": "DRAWINGS",
    "id": "F20_044"
  },
  {
    "q": "What question does a schematic (circuit) diagram primarily answer?",
    "a": "How does this circuit actually work, functionally?",
    "opts": [
      "How is power distributed around the ship, at overview level?",
      "Which physical terminal connects to which?",
      "How does this circuit actually work, functionally?",
      "What is the cable's short circuit withstand rating?"
    ],
    "exp": "A schematic shows the logical arrangement of a specific circuit, contacts, coils, relays and interlocks, drawn for logical clarity rather than physical layout, used to understand why a motor starts or why a protection trips.",
    "cat": "DRAWINGS",
    "id": "F20_045"
  },
  {
    "q": "What question does a wiring diagram primarily answer?",
    "a": "Which physical terminal connects to which?",
    "opts": [
      "How is power distributed around the ship, at overview level?",
      "How does this circuit work, functionally?",
      "Which physical terminal connects to which?",
      "What ambient temperature was used to rate this cable?"
    ],
    "exp": "The wiring diagram shows actual point to point connections, terminal numbers, strip layout, cable numbers and cores, showing where the real wires physically go. It is the drawing in hand when tracing a wire or reinstating a connection.",
    "cat": "DRAWINGS",
    "id": "F20_046"
  },
  {
    "q": "An ETO wants to understand why a motor protection circuit trips under a certain condition, in terms of the interlocks and logic involved. Which drawing should they use?",
    "a": "The schematic (circuit) diagram",
    "opts": [
      "The single line diagram",
      "The schematic (circuit) diagram",
      "The wiring diagram",
      "The general arrangement drawing"
    ],
    "exp": "The schematic is drawn specifically for logical clarity, showing contacts, coils, relays, interlocks and timers, so it is the right drawing for understanding why a circuit behaves the way it does.",
    "cat": "DRAWINGS",
    "id": "F20_047"
  },
  {
    "q": "Which drawing type omits control wiring and terminal detail by design, so the overall system architecture can be seen at a glance?",
    "a": "Single line diagram",
    "opts": [
      "Single line diagram",
      "Schematic diagram",
      "Wiring diagram",
      "Cable schedule"
    ],
    "exp": "The single line diagram deliberately omits control wiring and terminal detail, showing generators, switchboards, bus ties and breakers with cable and breaker ratings, so the overall architecture and fault propagation are visible at a glance.",
    "cat": "DRAWINGS",
    "id": "F20_048"
  },
  {
    "q": "Why is fault-finding from only a single line diagram described as a common mistake?",
    "a": "It was never meant to show control logic or terminal detail, which is what troubleshooting a fault usually requires",
    "opts": [
      "Single line diagrams are frequently out of date on most ships",
      "It was never meant to show control logic or terminal detail, which is what troubleshooting a fault usually requires",
      "Single line diagrams do not show breaker ratings",
      "Single line diagrams only apply to DC systems"
    ],
    "exp": "The single line diagram is an overview drawing; it was never meant to show control logic or terminal detail. Trying to fault-find from it alone means missing exactly the information a schematic or wiring diagram would provide.",
    "cat": "DRAWINGS",
    "id": "F20_049"
  },
  {
    "q": "Why is trying to understand a system's overall architecture from a wiring diagram described as painful?",
    "a": "A wiring diagram has no logical grouping; it just shows physical terminal to terminal connections",
    "opts": [
      "Wiring diagrams are usually drawn without any terminal numbers",
      "A wiring diagram has no logical grouping; it just shows physical terminal to terminal connections",
      "Wiring diagrams do not include cable numbers",
      "Wiring diagrams are always hand-drawn and hard to read"
    ],
    "exp": "A wiring diagram shows point to point physical connections with no logical grouping, so it is the wrong tool for understanding system architecture; that is what the single line diagram is for.",
    "cat": "DRAWINGS",
    "id": "F20_050"
  },

  /* ═══════════ STANDARD SYMBOLS ═══════════ */
  {
    "q": "On a standard electrical schematic, how is a motor typically represented?",
    "a": "A circle with 'M' inside",
    "opts": [
      "A circle with 'M' inside",
      "Two coupled coil symbols (loops)",
      "A small rectangle with the rating marked alongside",
      "A hatched symbol at the connection point"
    ],
    "exp": "A motor is shown as a circle with 'M' inside, sometimes with phase count or type marking. Two coupled coils represent a transformer, and a rectangle in the line represents a fuse.",
    "cat": "SYMBOLS",
    "id": "F20_051"
  },
  {
    "q": "How is a transformer typically represented on a standard electrical drawing?",
    "a": "Two coupled coil symbols (loops), sometimes with core lines between them",
    "opts": [
      "A circle with 'M' inside",
      "Two coupled coil symbols (loops), sometimes with core lines between them",
      "A circle with a cross or filament mark inside",
      "Short diagonal tick marks across a line"
    ],
    "exp": "A transformer is shown as two coupled coil symbols, sometimes with core lines drawn between them. A circle with 'M' is a motor, and a circle with a filament mark is a lamp or indication light.",
    "cat": "SYMBOLS",
    "id": "F20_052"
  },
  {
    "q": "How is an earth or ground connection typically represented on a drawing?",
    "a": "A short set of horizontal lines of decreasing length, or a hatched symbol, at the earth connection point",
    "opts": [
      "A short set of horizontal lines of decreasing length, or a hatched symbol, at the earth connection point",
      "A circle with 'M' inside",
      "A small rectangle in the line",
      "A break in the line with a diagonal stroke"
    ],
    "exp": "Earth or ground is shown as short horizontal lines of decreasing length, or a hatched symbol, at the earthing point. The other options represent a motor, a fuse, and a normally closed contact respectively.",
    "cat": "SYMBOLS",
    "id": "F20_053"
  },
  {
    "q": "What do short diagonal tick marks drawn across a line on a cable diagram usually indicate?",
    "a": "The number of conductors or cores that line represents",
    "opts": [
      "The number of conductors or cores that line represents",
      "The cable's short circuit withstand rating",
      "That the cable is fire resistant",
      "The cable's voltage rating in kV"
    ],
    "exp": "Short diagonal tick marks across a single line indicate the number of conductors or cores it represents, a common shorthand on single line and schematic drawings.",
    "cat": "SYMBOLS",
    "id": "F20_054"
  },
  {
    "q": "If a manufacturer uses a non-standard symbol on a drawing set, what is the authority for what it means?",
    "a": "That drawing set's own legend",
    "opts": [
      "The IEC standard symbol table from memory",
      "That drawing set's own legend",
      "Whatever the symbol most closely resembles",
      "The single line diagram from a different, similar vessel"
    ],
    "exp": "Every drawing set should carry its own legend, and where a manufacturer uses a non-standard symbol, that legend is the authority, not memory or assumption. Confirm against it on an unfamiliar drawing set rather than guessing from habit.",
    "cat": "SYMBOLS",
    "id": "F20_055"
  },

  /* ═══════════ TRACING A CIRCUIT ═══════════ */
  {
    "q": "When tracing a circuit from a drawing to actual hardware, what is the correct first step?",
    "a": "Use the single line diagram to identify which switchboard, feeder and breaker the circuit comes from",
    "opts": [
      "Isolate the nearest breaker immediately for safety",
      "Use the single line diagram to identify which switchboard, feeder and breaker the circuit comes from",
      "Start pulling wires at the suspected fault location",
      "Read the wiring diagram to find the terminal numbers"
    ],
    "exp": "The first step is establishing where you are in the system using the single line diagram, identifying the switchboard, feeder and breaker, so you know what needs to be isolated before going further.",
    "cat": "TRACING",
    "id": "F20_056"
  },
  {
    "q": "Why should the schematic be understood before touching any wiring when troubleshooting?",
    "a": "Trying to trace wiring before understanding the logic means you cannot tell a genuine fault from normal behaviour you do not yet recognise",
    "opts": [
      "The schematic contains the terminal numbers needed for testing",
      "Trying to trace wiring before understanding the logic means you cannot tell a genuine fault from normal behaviour you do not yet recognise",
      "Schematics are updated more frequently than wiring diagrams",
      "It is required by class society survey procedure before any isolation"
    ],
    "exp": "Understanding what has to be true for a contactor to pull in, what interlocks exist and what sequence applies comes before touching wiring, because without it a genuine fault cannot be distinguished from normal behaviour that simply is not yet recognised.",
    "cat": "TRACING",
    "id": "F20_057"
  },
  {
    "q": "Where do you get the specific cable number, core number and terminal numbers needed to test a particular point in a circuit?",
    "a": "The wiring diagram",
    "opts": [
      "The single line diagram",
      "The schematic diagram",
      "The wiring diagram",
      "The equipment nameplate only"
    ],
    "exp": "The wiring diagram gives the cable number, core number and terminal numbers at each end for the specific point you need to test, once the single line diagram and schematic have established where and why.",
    "cat": "TRACING",
    "id": "F20_058"
  },
  {
    "q": "Why should a technician verify with a meter rather than simply trust what the drawing shows, when tracing a circuit?",
    "a": "Ships accumulate field modifications that do not always reach the master drawing set",
    "opts": [
      "Meters are required by class society regulation regardless of drawing accuracy",
      "Drawings are legally not admissible evidence during a fault investigation",
      "Ships accumulate field modifications that do not always reach the master drawing set",
      "Meters give a more precise terminal number than the drawing"
    ],
    "exp": "Verifying continuity, voltage or resistance against what the drawing and fault symptom suggest matters because ships accumulate field modifications over time that do not always make it back to the master drawing set.",
    "cat": "TRACING",
    "id": "F20_059"
  },
  {
    "q": "Once the correct terminal has been physically located during circuit tracing, what must happen before any physical work begins?",
    "a": "Isolate at the correct upstream breaker or fuse, confirm dead with a meter, following permit to work and lock-out procedure",
    "opts": [
      "Isolate at the correct upstream breaker or fuse, confirm dead with a meter, following permit to work and lock-out procedure",
      "Immediately begin work, since the drawing has already confirmed which circuit it is",
      "Inform the bridge watchkeeper only, no isolation is required for control circuits",
      "Replace the component first, then isolate afterward to confirm the fault is cleared"
    ],
    "exp": "The final step is isolating correctly at the correct upstream breaker or fuse, confirming dead with a meter, before any physical work, following permit to work and lock-out procedure. Locating the terminal is not itself permission to work on it.",
    "cat": "TRACING",
    "id": "F20_060"
  }

]);

window.loadQuizzes("F07_Machines", [

  /* ═══════════ WHAT A MACHINE IS ═══════════ */
  {
    "q": "An electrical machine, as used in this module, is a device that converts energy between which two forms?",
    "a": "Electrical and mechanical",
    "opts": ["Electrical and mechanical", "Thermal and mechanical", "Chemical and electrical", "Electrical and hydraulic"],
    "exp": "An electrical machine converts energy between electrical and mechanical forms by the interaction of a magnetic field with current carrying conductors. Thermal, chemical and hydraulic conversions belong to other kinds of machinery, not this family.",
    "cat": "BASICS",
    "id": "F07_001"
  },
  {
    "q": "Every rotating machine on a ship is built on which two pieces of physics?",
    "a": "A current in a magnetic field experiences a force, and a conductor moving through a magnetic field has an EMF induced in it",
    "opts": [
      "A current in a magnetic field experiences a force, and a conductor moving through a magnetic field has an EMF induced in it",
      "Resistance increases with temperature, and current always seeks the path of least resistance",
      "Voltage is proportional to current, and power equals voltage times current",
      "Magnetic flux always opposes the current producing it, and heat is generated in every conductor"
    ],
    "exp": "These two facts, force on a current-carrying conductor in a field (motor action) and EMF induced in a conductor moving through a field (generator action), are stated in the notes as the entire basis for the whole family tree of machines. The other options are true statements about electricity in general but are not the two founding principles named in this module.",
    "cat": "BASICS",
    "id": "F07_002"
  },
  {
    "q": "Which principle is the basis of every motor?",
    "a": "A current in a magnetic field experiences a force",
    "opts": ["A current in a magnetic field experiences a force", "A conductor moving through a magnetic field has an EMF induced in it", "Like poles repel and unlike poles attract", "Resistance opposes the flow of current"],
    "exp": "Motor action is force on a current-carrying conductor in a magnetic field. The induced EMF principle is the basis of generator action, the reverse conversion.",
    "cat": "BASICS",
    "id": "F07_003"
  },

  /* ═══════════ MOTOR/GENERATOR DUALITY ═══════════ */
  {
    "q": "What actually differs between a motor and a generator of a given type?",
    "a": "Only the direction of energy conversion",
    "opts": ["Only the direction of energy conversion", "The winding material used", "The number of poles fitted", "The type of insulation class specified"],
    "exp": "The construction, windings and magnetic circuit are unchanged; mechanical power in and electrical power out is generator action, electrical power in and mechanical power out is motor action. Winding material, pole count and insulation class do not define the motor/generator distinction.",
    "cat": "DUALITY",
    "id": "F07_004"
  },
  {
    "q": "If a DC motor's shaft is turned by an external prime mover instead of being fed current, what happens?",
    "a": "It becomes a DC generator, producing the same EMF equation used the other way round",
    "opts": [
      "It becomes a DC generator, producing the same EMF equation used the other way round",
      "It is permanently damaged and cannot be used as a generator",
      "It becomes an AC generator instead",
      "Nothing changes since a motor cannot generate electricity"
    ],
    "exp": "The notes state a DC motor driven externally becomes a DC generator using the same EMF equation, just applied in reverse. It does not change to AC output, and there is no damage implied by this reversal.",
    "cat": "DUALITY",
    "id": "F07_005"
  },
  {
    "q": "Can a main engine driven alternator that supplies the ship's board also run as a synchronous motor?",
    "a": "Yes, if its shaft were driven with the roles reversed",
    "opts": ["Yes, if its shaft were driven with the roles reversed", "No, synchronous machines can never operate as motors", "Only if converted to an induction machine first", "Only if it is rewound with a squirrel cage rotor"],
    "exp": "The notes state the alternator is, with its roles reversed, capable of running as a synchronous motor, since a synchronous machine is fundamentally the same machine in either direction. No rewinding or conversion to another machine family is needed.",
    "cat": "DUALITY",
    "id": "F07_006"
  },
  {
    "q": "Can an induction machine ever act as a generator?",
    "a": "Yes, if driven above synchronous speed, though this is rarely used at sea",
    "opts": ["Yes, if driven above synchronous speed, though this is rarely used at sea", "No, an induction machine can only ever be a motor", "Yes, but only if it is a DC series machine", "No, only synchronous machines can generate"],
    "exp": "The notes confirm an induction machine driven above synchronous speed can feed power back into the supply as an induction generator, while noting this is rarely used at sea. It is not restricted to being a motor only.",
    "cat": "DUALITY",
    "id": "F07_007"
  },
  {
    "q": "If asked to explain a generator having just described a motor, what should you do?",
    "a": "Explain the reversal of energy flow rather than starting again from scratch",
    "opts": ["Explain the reversal of energy flow rather than starting again from scratch", "Describe an entirely different machine construction", "State that generators and motors share nothing in common", "Ask the examiner to repeat the question"],
    "exp": "The interview callout advises explaining the reversal of energy flow, since motor and generator are the same machine used in opposite directions, not restarting the explanation as if describing something unrelated.",
    "cat": "DUALITY",
    "id": "F07_008"
  },

  /* ═══════════ CLASSIFICATION TREE ═══════════ */
  {
    "q": "AC machines split into which two families?",
    "a": "Induction and synchronous",
    "opts": ["Induction and synchronous", "Shunt and series", "Compound and induction", "Synchronous and compound"],
    "exp": "AC machines are induction (rotor fed with no external connection, working by induction) and synchronous (rotor carries a DC excited field, locked in step with the stator field). Shunt, series and compound are DC machine categories, not AC.",
    "cat": "CLASS",
    "id": "F07_009"
  },
  {
    "q": "In an induction machine, how is the rotor supplied?",
    "a": "It has no external electrical connection and works entirely by what is induced into it",
    "opts": ["It has no external electrical connection and works entirely by what is induced into it", "It is fed with a DC excited field via slip rings", "It is connected directly to the same AC supply as the stator", "It has no winding of any kind"],
    "exp": "This is the defining feature of the induction machine, no external electrical connection to the rotor, everything works by induction. A DC excited field via slip rings describes the synchronous machine, not the induction machine.",
    "cat": "CLASS",
    "id": "F07_010"
  },
  {
    "q": "What distinguishes a synchronous machine from an induction machine?",
    "a": "Its rotor carries a DC excited field and locks in step with the stator field, running with no slip",
    "opts": [
      "Its rotor carries a DC excited field and locks in step with the stator field, running with no slip",
      "It has no rotor winding at all",
      "It only operates on DC supply",
      "It always requires a squirrel cage construction"
    ],
    "exp": "A synchronous machine's rotor is DC excited and runs at exactly synchronous speed, locked in step, with no slip. It is an AC machine, not DC, and does not use a squirrel cage rotor, that construction belongs to the induction family.",
    "cat": "CLASS",
    "id": "F07_011"
  },
  {
    "q": "DC machines are split into which three categories, based on how the field winding is connected to the armature?",
    "a": "Shunt, series and compound",
    "opts": ["Shunt, series and compound", "Induction, synchronous and shunt", "Series, synchronous and cage", "Compound, wound rotor and squirrel cage"],
    "exp": "DC machines split by field connection into shunt (field in parallel with armature), series (field in series with armature), and compound (both windings on the same poles). Induction, synchronous, wound rotor and squirrel cage are all AC machine terms.",
    "cat": "CLASS",
    "id": "F07_012"
  },
  {
    "q": "In a DC shunt motor, how is the field winding connected relative to the armature?",
    "a": "In parallel with the armature",
    "opts": ["In parallel with the armature", "In series with the armature", "Split between series and parallel on alternating poles", "Not connected to the armature circuit at all"],
    "exp": "Shunt means the field winding is in parallel with the armature, giving the near constant speed with load described in the notes. Series connection describes the series motor instead.",
    "cat": "CLASS",
    "id": "F07_013"
  },
  {
    "q": "Which DC motor type has very high starting torque but must never be run unloaded?",
    "a": "Series",
    "opts": ["Series", "Shunt", "Compound", "Synchronous"],
    "exp": "The series motor, with its field in series with the armature, gives very high starting torque but must never run unloaded, per the notes. Shunt gives near constant speed with load, and synchronous is not a DC machine at all.",
    "cat": "CLASS",
    "id": "F07_014"
  },
  {
    "q": "A DC compound motor combines the behaviour of which two winding arrangements on the same poles?",
    "a": "Shunt and series",
    "opts": ["Shunt and series", "Induction and synchronous", "Series and synchronous", "Squirrel cage and slip ring"],
    "exp": "Compound machines carry both field windings, shunt and series, on the same poles, combining the two behaviours. Induction, synchronous, squirrel cage and slip ring are all AC machine terms, not part of the DC compound arrangement.",
    "cat": "CLASS",
    "id": "F07_015"
  },

  /* ═══════════ CONSTRUCTION ═══════════ */
  {
    "q": "In a rotating machine, what is the stator?",
    "a": "The stationary outer part, carrying the fixed winding or field poles and forming part of the magnetic circuit",
    "opts": [
      "The stationary outer part, carrying the fixed winding or field poles and forming part of the magnetic circuit",
      "The rotating inner part coupled to the shaft",
      "The small clearance between stator and rotor",
      "The bearing that supports the shaft"
    ],
    "exp": "The stator is the stationary outer part. The rotating inner part coupled to the shaft is the rotor, the small clearance is the air gap, and the shaft support is the bearing.",
    "cat": "CONSTR",
    "id": "F07_016"
  },
  {
    "q": "Why is the air gap in a rotating machine kept as small as mechanically practical?",
    "a": "A larger gap demands more magnetising current for the same flux",
    "opts": [
      "A larger gap demands more magnetising current for the same flux",
      "A larger gap increases the machine's IP rating",
      "A larger gap reduces the insulation class needed",
      "A larger gap has no effect on performance"
    ],
    "exp": "The notes explain the air gap is kept small because a larger gap needs more magnetising current to push the same flux across it. IP rating and insulation class are unrelated to air gap size.",
    "cat": "CONSTR",
    "id": "F07_017"
  },
  {
    "q": "What is a common practical cause of a rubbed stator, according to the notes?",
    "a": "A worn bearing that lets the rotor sag",
    "opts": ["A worn bearing that lets the rotor sag", "An oversized air gap", "A missing insulation layer", "A low IP rating"],
    "exp": "Bearings support the rotor and shaft and hold the air gap uniform; the notes specifically flag a worn bearing letting the rotor sag as a common practical cause of a rubbed stator. Air gap size, insulation and IP rating are not identified as this cause in the notes.",
    "cat": "CONSTR",
    "id": "F07_018"
  },
  {
    "q": "What does the frame and enclosure of a machine set, besides forming the outer casing?",
    "a": "The machine's IP rating and how it is cooled",
    "opts": ["The machine's IP rating and how it is cooled", "The machine's insulation class only", "The machine's duty type only", "The machine's synchronous speed"],
    "exp": "The notes state the frame and enclosure sets the IP rating and cooling arrangement. Insulation class, duty type and synchronous speed are determined by other factors, not the frame and enclosure.",
    "cat": "CONSTR",
    "id": "F07_019"
  },
  {
    "q": "What differs between an induction motor, a synchronous alternator and a DC motor, according to the notes?",
    "a": "What sits on the rotor and stator, and how each is wound and connected",
    "opts": [
      "What sits on the rotor and stator, and how each is wound and connected",
      "Whether they have a stator and rotor at all",
      "Whether they have bearings at all",
      "Whether they have an air gap at all"
    ],
    "exp": "The notes are explicit: the common skeleton (stator, rotor, air gap, bearings, frame) is present in all of them, what differs is what sits on the rotor and stator and how each is wound and connected. It is not the presence or absence of these basic parts.",
    "cat": "CONSTR",
    "id": "F07_020"
  },

  /* ═══════════ WHERE USED ONBOARD ═══════════ */
  {
    "q": "Which machine type makes up the overwhelming majority of rotating machinery on a ship?",
    "a": "The squirrel cage induction motor",
    "opts": ["The squirrel cage induction motor", "The slip ring induction motor", "The DC series motor", "The synchronous alternator"],
    "exp": "The squirrel cage induction motor dominates shipboard pumps, fans, compressors and most auxiliaries. Slip ring motors are now largely superseded, DC series motors are used for high starting torque loads like winches, and synchronous alternators generate the ship's supply rather than driving auxiliaries.",
    "cat": "ONBOARD",
    "id": "F07_021"
  },
  {
    "q": "Slip ring induction motors were historically used for large machines needing high starting torque with controlled current. What has largely superseded them?",
    "a": "VFD driven cage motors",
    "opts": ["VFD driven cage motors", "DC compound motors", "Synchronous motors", "Series wound alternators"],
    "exp": "The notes state slip ring motors, once used on older cargo winches and cranes, are now largely superseded by VFD driven cage motors. DC compound motors, synchronous motors and series wound alternators are not named as the replacement.",
    "cat": "ONBOARD",
    "id": "F07_022"
  },
  {
    "q": "Where are synchronous machines typically used on board?",
    "a": "As the main and auxiliary alternators generating the ship's AC supply",
    "opts": [
      "As the main and auxiliary alternators generating the ship's AC supply",
      "As pumps and fans throughout the engine room",
      "As workshop machine tool drives",
      "As windlass and winch motors"
    ],
    "exp": "Synchronous machines are the main and auxiliary alternators, driven by diesel generators or a shaft generator, generating the ship's supply. Pumps and fans are typically squirrel cage induction motors, workshop tools are typically DC shunt motors, and windlasses are typically DC series or compound motors.",
    "cat": "ONBOARD",
    "id": "F07_023"
  },
  {
    "q": "Where is a DC shunt motor typically used on board, and why?",
    "a": "Workshop machine tools and some fans and blowers, where steady, load-independent speed matters",
    "opts": [
      "Workshop machine tools and some fans and blowers, where steady, load-independent speed matters",
      "Windlasses, where very high starting torque against a heavy stationary load is needed",
      "The main alternators generating the ship's supply",
      "Cargo winches needing both high starting torque and safety running light"
    ],
    "exp": "DC shunt motors give steady speed regardless of load, suiting workshop tools and some fans and blowers. Windlasses suit DC series motors, alternators are synchronous machines, and cargo winches needing both torque and safety running light suit DC compound motors.",
    "cat": "ONBOARD",
    "id": "F07_024"
  },
  {
    "q": "Why does a DC compound motor suit cargo winches specifically?",
    "a": "It needs both high starting torque and safety running light",
    "opts": ["It needs both high starting torque and safety running light", "It has no brushes or slip rings", "It runs at exactly synchronous speed", "It requires the least maintenance of any motor type"],
    "exp": "The compound motor combines shunt and series field behaviour, giving both high starting torque and the ability to run safely light, which the notes specifically link to cargo winch duty. Brushless operation and synchronous speed are not properties of a DC compound motor.",
    "cat": "ONBOARD",
    "id": "F07_025"
  },
  {
    "q": "What two features does a squirrel cage induction motor lack that a DC or slip ring induction motor has?",
    "a": "Brushes and slip rings",
    "opts": ["Brushes and slip rings", "A stator and a rotor", "Bearings and an air gap", "A frame and an enclosure"],
    "exp": "The squirrel cage motor has no brushes and no slip rings, so nothing to spark, wear or need inspection. All machines, including the squirrel cage motor, still have a stator, rotor, bearings, air gap, frame and enclosure.",
    "cat": "ONBOARD",
    "id": "F07_026"
  },
  {
    "q": "A candidate lists induction, synchronous, shunt, series and compound motors when asked why the squirrel cage motor dominates shipboard machinery. What is wrong with this answer?",
    "a": "It answers what types exist, not why one specific type is preferred",
    "opts": [
      "It answers what types exist, not why one specific type is preferred",
      "It is completely incorrect since these are not real machine types",
      "It confuses AC machines with DC machines",
      "It omits the slip ring induction motor from the list"
    ],
    "exp": "This is the trap the notes call out directly: listing the types answers a different question than explaining why the squirrel cage motor specifically dominates. The list itself is accurate and correctly separates AC from DC types.",
    "cat": "ONBOARD",
    "id": "F07_027"
  },
  {
    "q": "Why can a squirrel cage induction motor be built with a sealed enclosure that survives a hot, humid, salt laden engine room with minimal maintenance?",
    "a": "It has no brush gear exposed to that environment, unlike a DC or slip ring motor",
    "opts": [
      "It has no brush gear exposed to that environment, unlike a DC or slip ring motor",
      "It runs at a lower temperature than any other machine type",
      "It uses a higher insulation class than other motors",
      "It is always fitted with a higher IP rating than other motors"
    ],
    "exp": "The absence of brush gear, which a DC motor or slip ring induction motor does expose to the environment, is what allows the sealed enclosure. The notes do not attribute this to running cooler, a different insulation class, or an automatically higher IP rating.",
    "cat": "ONBOARD",
    "id": "F07_028"
  },

  /* ═══════════ IP RATINGS ═══════════ */
  {
    "q": "What does IP stand for in an IP rating?",
    "a": "Ingress Protection",
    "opts": ["Ingress Protection", "Insulation Protection", "International Protection Standard", "Induction Protection"],
    "exp": "IP stands for Ingress Protection, the code covering how well an enclosure keeps solids and liquids out. It is not an abbreviation for insulation, an international standard body name, or induction.",
    "cat": "IP",
    "id": "F07_029"
  },
  {
    "q": "In an IP rating such as IP55, what does the first digit indicate?",
    "a": "Protection against solids",
    "opts": ["Protection against solids", "Protection against water", "Protection against both solids and water combined", "The insulation class of the winding"],
    "exp": "The first digit after IP is protection against solids, the second digit is protection against water; they must be read separately, never as one combined number. Insulation class is an entirely separate rating covering winding temperature limits.",
    "cat": "IP",
    "id": "F07_030"
  },
  {
    "q": "Reading an IP rating as a single combined number instead of two separate digits is a mistake because:",
    "a": "Each digit means something different, one for solids and one for water",
    "opts": [
      "Each digit means something different, one for solids and one for water",
      "IP ratings only ever have one meaningful digit",
      "The digits must be added together to get the true rating",
      "The first digit is always redundant and can be ignored"
    ],
    "exp": "The notes state explicitly to read the two digits separately, never as a single number, since the first covers solids and the second covers water. Neither digit is redundant, and they are not added together.",
    "cat": "IP",
    "id": "F07_031"
  },
  {
    "q": "What does an IP first digit of 6 indicate?",
    "a": "Dust tight, no ingress at all",
    "opts": ["Dust tight, no ingress at all", "Fingers and objects over 12 mm only", "Dust protected but with limited ingress permitted", "No protection against solids"],
    "exp": "A first digit of 6 is the highest solids protection, dust tight with no ingress at all. A first digit of 5 permits limited ingress that does not interfere with operation, 2 covers fingers and objects over 12 mm, and 0 is no protection.",
    "cat": "IP",
    "id": "F07_032"
  },
  {
    "q": "What does an IP second digit of 7 indicate?",
    "a": "Temporary immersion",
    "opts": ["Temporary immersion", "Splashing water from any direction", "Low pressure water jets from any direction", "Powerful water jets and heavy seas"],
    "exp": "A second digit of 7 covers temporary immersion. Splashing water is digit 4, low pressure jets is digit 5, and powerful jets/heavy seas is digit 6.",
    "cat": "IP",
    "id": "F07_033"
  },
  {
    "q": "What IP rating is widely accepted by class societies as the standard for sheltered engine room machinery?",
    "a": "IP55",
    "opts": ["IP55", "IP44", "IP67", "IP20"],
    "exp": "The notes state IP55 is widely accepted for sheltered engine room machinery, with IP54 also common. IP44 suits only dry sheltered indoor spaces, IP67 or higher is for fully submersible locations like a bilge well, and IP20 is not mentioned as a marine value at all.",
    "cat": "IP",
    "id": "F07_034"
  },
  {
    "q": "A motor mounted fully submersible, such as in a bilge well, needs at least which IP rating according to the notes?",
    "a": "IP67",
    "opts": ["IP67", "IP44", "IP54", "IP56"],
    "exp": "The notes state a fully submersible location such as a bilge well needs IP67 or higher. IP44 is for dry indoor spaces, IP54 is typical for a normal engine room, and IP56 or above is for open deck equipment exposed to spray and heavy seas, not full submersion.",
    "cat": "IP",
    "id": "F07_035"
  },
  {
    "q": "Why should a motor not simply be fitted with the highest available IP rating regardless of installation location?",
    "a": "A higher IP enclosure is more expensive and, being more fully sealed, can run hotter",
    "opts": [
      "A higher IP enclosure is more expensive and, being more fully sealed, can run hotter",
      "Higher IP ratings are not permitted by class societies on any equipment",
      "A higher IP rating automatically lowers the insulation class",
      "Higher IP enclosures cannot be manufactured for rotating machines"
    ],
    "exp": "The notes warn against over-specifying because a higher IP enclosure costs more and can run hotter due to being more fully sealed, so the rating should match what the location actually demands. Class societies do permit high IP ratings where needed, and IP rating does not determine insulation class.",
    "cat": "IP",
    "id": "F07_036"
  },
  {
    "q": "Where should the exact IP figure fitted to a specific motor on a specific ship be confirmed from?",
    "a": "The motor's nameplate or drawings",
    "opts": ["The motor's nameplate or drawings", "A universal fixed IP table that applies to all ships", "The insulation class marked on the winding", "The machine's duty type designation"],
    "exp": "The notes state the IP figure is a design choice recorded on the nameplate and equipment list, to be confirmed from the nameplate or drawings rather than assumed. It is not a universal fixed figure, and insulation class and duty type are unrelated ratings.",
    "cat": "IP",
    "id": "F07_037"
  },

  /* ═══════════ INSULATION CLASSES ═══════════ */
  {
    "q": "Each insulation class is defined by which measure?",
    "a": "The maximum continuous temperature the material can withstand for its rated service life",
    "opts": [
      "The maximum continuous temperature the material can withstand for its rated service life",
      "The IP rating of the enclosure",
      "The duty type of the machine",
      "The number of poles in the winding"
    ],
    "exp": "Insulation class is defined by maximum continuous temperature, combining ambient plus temperature rise. IP rating, duty type and pole count are unrelated ratings covering different aspects of the machine.",
    "cat": "INSUL",
    "id": "F07_038"
  },
  {
    "q": "What is the correct order of insulation classes from lowest to highest maximum temperature?",
    "a": "A, E, B, F, H",
    "opts": ["A, E, B, F, H", "A, B, E, F, H", "A, B, C, D, E", "A, E, F, B, H"],
    "exp": "The notes explicitly warn this order, A, E, B, F, H, is not alphabetical and is a common trap when reciting under pressure. B, C, D, E is not the real sequence at all, and the classes are not simply alphabetical.",
    "cat": "INSUL",
    "id": "F07_039"
  },
  {
    "q": "What is the maximum temperature for Class F insulation?",
    "a": "155°C",
    "opts": ["155°C", "130°C", "180°C", "120°C"],
    "exp": "Class F is rated to 155°C. 130°C is Class B, 180°C is Class H, and 120°C is Class E.",
    "cat": "INSUL",
    "id": "F07_040"
  },
  {
    "q": "What is the maximum temperature for Class H insulation?",
    "a": "180°C",
    "opts": ["180°C", "155°C", "130°C", "105°C"],
    "exp": "Class H, the highest class listed in the notes, is rated to 180°C. 155°C is Class F, 130°C is Class B, and 105°C is Class A.",
    "cat": "INSUL",
    "id": "F07_041"
  },
  {
    "q": "Most modern shipboard motors are wound in which insulation class, but run at which temperature rise?",
    "a": "Wound in Class F, run at a Class B temperature rise",
    "opts": [
      "Wound in Class F, run at a Class B temperature rise",
      "Wound in Class B, run at a Class F temperature rise",
      "Wound in Class H, run at a Class A temperature rise",
      "Wound in Class A, run at a Class E temperature rise"
    ],
    "exp": "The notes state most modern shipboard motors are wound in Class F insulation but conservatively run at a Class B temperature rise, leaving a thermal margin. It is not the reverse pairing, and Class H/A or A/E are not the combination described.",
    "cat": "INSUL",
    "id": "F07_042"
  },
  {
    "q": "What is the purpose of running a Class F wound motor conservatively at only a Class B temperature rise?",
    "a": "To leave a thermal margin that tolerates poor ventilation, a fouled cooler or a higher ambient without shortening winding life",
    "opts": [
      "To leave a thermal margin that tolerates poor ventilation, a fouled cooler or a higher ambient without shortening winding life",
      "To reduce the machine's IP rating requirement",
      "To allow the motor to run at a higher duty type",
      "To eliminate the need for bearings"
    ],
    "exp": "The notes state this margin buys tolerance for poorly ventilated spaces, a fouled cooler, or a higher than design ambient, common at sea, without shortening winding life. It has no relation to IP rating, duty type, or the need for bearings.",
    "cat": "INSUL",
    "id": "F07_043"
  },

  /* ═══════════ DUTY TYPES ═══════════ */
  {
    "q": "What does S1 duty mean?",
    "a": "Operation at constant load long enough to reach thermal equilibrium, and staying there indefinitely",
    "opts": [
      "Operation at constant load long enough to reach thermal equilibrium, and staying there indefinitely",
      "A limited run at constant load followed by a full cool down before the next run",
      "A repeating cycle of load and rest periods, neither long enough alone to reach thermal equilibrium",
      "Operation only during starting and stopping transients"
    ],
    "exp": "S1 is continuous duty, reaching and staying at thermal equilibrium; most shipboard pumps and fans are S1. The limited-run-then-cool-down description is S2, and the repeating load/rest cycle is S3.",
    "cat": "DUTY",
    "id": "F07_044"
  },
  {
    "q": "What does S2 duty mean?",
    "a": "Operation at constant load for a defined limited period, not reaching thermal equilibrium, followed by a rest period long enough to cool back to ambient",
    "opts": [
      "Operation at constant load for a defined limited period, not reaching thermal equilibrium, followed by a rest period long enough to cool back to ambient",
      "Operation at constant load indefinitely once thermal equilibrium is reached",
      "A repeating cycle of load and rest periods expressed as a percentage cyclic duration factor",
      "Operation only in a fully submerged environment"
    ],
    "exp": "S2, short time duty, is a limited run not reaching thermal equilibrium followed by a full cool down. Indefinite constant load at equilibrium is S1, and the repeating percentage-duration cycle is S3.",
    "cat": "DUTY",
    "id": "F07_045"
  },
  {
    "q": "S3 duty, typical of winches and windlasses, is best described as:",
    "a": "A repeating cycle of load and rest periods, neither long enough alone to reach thermal equilibrium, expressed as a percentage cyclic duration factor",
    "opts": [
      "A repeating cycle of load and rest periods, neither long enough alone to reach thermal equilibrium, expressed as a percentage cyclic duration factor",
      "Constant load run indefinitely at thermal equilibrium",
      "A single limited run followed by a full cool down to ambient",
      "Operation restricted to emergency use only"
    ],
    "exp": "S3, intermittent duty, is the repeating load/rest cycle expressed as a cyclic duration factor, matching the short-burst working pattern of winches and windlasses. Indefinite constant load is S1, and a single run with full cool down is S2.",
    "cat": "DUTY",
    "id": "F07_046"
  },
  {
    "q": "Why is a motor's nameplate output rating only meaningful together with its duty type?",
    "a": "The same frame can be rated differently depending on how it is loaded over time",
    "opts": [
      "The same frame can be rated differently depending on how it is loaded over time",
      "Duty type determines the motor's insulation class automatically",
      "Duty type determines the motor's IP rating automatically",
      "Nameplate ratings are only accurate for synchronous machines"
    ],
    "exp": "The notes state the same frame can carry different ratings depending on the loading pattern over time, which is why duty type matters alongside the output figure. Duty type does not fix insulation class or IP rating, and this point applies generally, not just to synchronous machines.",
    "cat": "DUTY",
    "id": "F07_047"
  },
  {
    "q": "Which duty type applies to most shipboard pumps and fans?",
    "a": "S1",
    "opts": ["S1", "S2", "S3", "None, pumps and fans have no duty rating"],
    "exp": "The notes state most shipboard pumps and fans are S1, continuous duty. S2 and S3 apply to loads with defined rest periods, such as winches and windlasses for S3, and every rotating machine carries a duty rating.",
    "cat": "DUTY",
    "id": "F07_048"
  }
]);

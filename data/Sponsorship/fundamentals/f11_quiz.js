window.loadQuizzes("F11_Starting", [

  /* ═══════════ WHY A MOTOR NEEDS A STARTER ═══════════ */
  {
    "q": "At the instant a three phase induction motor is switched on, what is the slip?",
    "a": "1",
    "opts": ["1", "0", "0.5", "It depends on the supply frequency"],
    "exp": "At standstill the rotor is not turning at all, so slip is 1 (100 percent). This is what makes the rotor behave like a short circuited transformer secondary at that instant.",
    "cat": "WHY",
    "id": "F11_001"
  },
  {
    "q": "Why does an induction motor draw such a large current the instant it is switched direct on line?",
    "a": "At standstill the rotor is effectively a short circuited secondary winding, and the rotating field induces maximum EMF in it",
    "opts": [
      "At standstill the rotor is effectively a short circuited secondary winding, and the rotating field induces maximum EMF in it",
      "The stator windings have not yet warmed up to their normal operating resistance",
      "The overload relay has not yet had time to limit the current",
      "The supply frequency is higher than normal for the first few seconds"
    ],
    "exp": "At slip 1 the rotating field cuts the rotor bars at full synchronous speed, inducing the maximum possible rotor EMF, so the motor behaves like a transformer with its secondary shorted. As slip falls with acceleration, the rotor EMF and the current fall with it.",
    "cat": "WHY",
    "id": "F11_002"
  },
  {
    "q": "For direct on line starting, roughly what multiple of full load current is drawn at the instant of starting?",
    "a": "5 to 7 times FLC",
    "opts": ["5 to 7 times FLC", "1 to 1.5 times FLC", "10 to 15 times FLC", "2 to 4 times FLC"],
    "exp": "DOL starting current typically runs at 5 to 7 times full load current. The 1 to 1.5 times figure belongs to a VFD start, and 2 to 4 times belongs to a soft starter.",
    "cat": "WHY",
    "id": "F11_003"
  },
  {
    "q": "Why does the starting current fall back to the full load value within a few seconds of a DOL start?",
    "a": "As the rotor accelerates, slip falls, which reduces the rotor EMF and therefore the current",
    "opts": [
      "As the rotor accelerates, slip falls, which reduces the rotor EMF and therefore the current",
      "The overload relay progressively reduces the current",
      "The supply voltage rises to compensate for the initial dip",
      "The stator windings begin to act as a choke once warm"
    ],
    "exp": "The whole surge is driven by slip. As the rotor speeds up, slip falls, rotor EMF falls with it, and the current settles to the full load value. The overload relay only trips on a sustained fault, it does not actively reduce current.",
    "cat": "WHY",
    "id": "F11_004"
  },
  {
    "q": "Why does a motor starting surge matter far more on a ship than it does ashore?",
    "a": "A ship's generator has only a few hundred kW to a few MW of capacity, so one large motor can be a significant fraction of it, unlike an effectively infinite national grid",
    "opts": [
      "A ship's generator has only a few hundred kW to a few MW of capacity, so one large motor can be a significant fraction of it, unlike an effectively infinite national grid",
      "Ships only use direct current, which has a higher starting surge than AC",
      "Marine cables are thinner than shore cables and cannot carry any surge current",
      "Marine motors are built to a lower standard than shore motors"
    ],
    "exp": "Ashore, a motor start is a rounding error to the grid. On a ship the whole supply may be one or two generators, so the same starting surge can visibly dip the busbar voltage and affect everything else connected to it.",
    "cat": "WHY",
    "id": "F11_005"
  },
  {
    "q": "A starting surge causes a 10 percent dip in busbar voltage. Roughly how much torque do other running motors on the board lose?",
    "a": "About 19 percent",
    "opts": ["About 19 percent", "About 10 percent", "About 5 percent", "About 50 percent"],
    "exp": "Torque falls with the square of voltage. A 10 percent voltage dip means the motor sees 0.9 times voltage, and torque falls to 0.9 squared, about 0.81, so roughly 19 percent of torque is lost, not just 10 percent.",
    "cat": "WHY",
    "id": "F11_006"
  },
  {
    "q": "Besides voltage dip, what else does a heavy starting surge do to a ship's generator and prime mover?",
    "a": "It asks the diesel for a sudden step change in power, and the governor's response lag causes the frequency to dip as well",
    "opts": [
      "It asks the diesel for a sudden step change in power, and the governor's response lag causes the frequency to dip as well",
      "It permanently reduces the generator's rated kVA",
      "It causes the generator to run at a fixed higher frequency",
      "It has no effect on the prime mover, only on the busbar voltage"
    ],
    "exp": "A large sudden load is a step change in demanded power. The governor takes a moment to respond, so frequency dips briefly alongside the voltage dip, and repeated heavy starts also add thermal and mechanical stress to windings, couplings and shafts.",
    "cat": "WHY",
    "id": "F11_007"
  },
  {
    "q": "What is the actual purpose of a motor starter?",
    "a": "To limit the starting current so it does not disturb the rest of the ship's electrical system, and to provide overload and undervoltage protection while running",
    "opts": [
      "To limit the starting current so it does not disturb the rest of the ship's electrical system, and to provide overload and undervoltage protection while running",
      "To make the motor capable of rotating, since it cannot start without one",
      "To increase the motor's running speed above its nameplate rating",
      "To convert the supply from AC to DC before it reaches the motor"
    ],
    "exp": "A motor will run perfectly well switched straight onto the supply; the difficulty is only the first few seconds. A starter exists to tame that surge and to protect the motor while it runs, not to enable rotation at all.",
    "cat": "WHY",
    "id": "F11_008"
  },
  {
    "q": "Every reduced voltage starting method is built on which relationship?",
    "a": "Starting current is proportional to voltage, but starting torque is proportional to voltage squared",
    "opts": [
      "Starting current is proportional to voltage, but starting torque is proportional to voltage squared",
      "Starting current and starting torque are both proportional to voltage squared",
      "Starting current is proportional to voltage squared, but starting torque is proportional to voltage",
      "Neither starting current nor starting torque depends on the applied voltage"
    ],
    "exp": "Halving the starting voltage halves the current but cuts the torque to a quarter. This square law is why voltage-only methods cannot be pushed indefinitely without stalling the motor.",
    "cat": "WHY",
    "id": "F11_009"
  },

  /* ═══════════ DIRECT ON LINE (DOL) STARTING ═══════════ */
  {
    "q": "How does a direct on line (DOL) starter apply voltage to the motor?",
    "a": "Full line voltage is applied to the motor terminals in a single step by closing a contactor",
    "opts": [
      "Full line voltage is applied to the motor terminals in a single step by closing a contactor",
      "Voltage is ramped up gradually using thyristors",
      "Reduced voltage is applied first through star connected windings",
      "Voltage and frequency are raised together from zero"
    ],
    "exp": "DOL is the simplest method: one contactor closes and the motor sees full line voltage immediately. Ramping, star connection and V/f control belong to the soft starter, star-delta and VFD methods respectively.",
    "cat": "DOL",
    "id": "F11_010"
  },
  {
    "q": "In a DOL starter, what does the main contactor do?",
    "a": "It is the switching element; an electromagnetic coil pulls in the contacts to connect the motor to the supply",
    "opts": [
      "It is the switching element; an electromagnetic coil pulls in the contacts to connect the motor to the supply",
      "It senses motor current and trips on a sustained overload",
      "It clears short circuit faults faster than a fuse can",
      "It provides the star point connection for the windings"
    ],
    "exp": "The main contactor is the actual power switching device. Overload sensing is the job of the overload relay, and short circuit clearance is the job of upstream fuses or a breaker.",
    "cat": "DOL",
    "id": "F11_011"
  },
  {
    "q": "In a DOL starter, the start push button is best described as:",
    "a": "Normally open and momentary, energising the contactor coil when pressed",
    "opts": [
      "Normally open and momentary, energising the contactor coil when pressed",
      "Normally closed and momentary, breaking the coil circuit when pressed",
      "Normally open and latching, staying closed once pressed",
      "Normally closed and permanently wired in, always energising the coil"
    ],
    "exp": "The start button is normally open, and pressing it briefly energises the coil to pull the contactor in. It is the hold-in contact, not the start button itself, that keeps the coil energised afterwards.",
    "cat": "DOL",
    "id": "F11_012"
  },
  {
    "q": "In a DOL starter, the stop push button is wired:",
    "a": "Normally closed, in series with the coil, so pressing it breaks the coil circuit",
    "opts": [
      "Normally closed, in series with the coil, so pressing it breaks the coil circuit",
      "Normally open, in parallel with the coil, so pressing it energises the coil",
      "Normally closed, in parallel with the start button",
      "Normally open, in series with the overload relay only"
    ],
    "exp": "The stop button is normally closed and sits in series with the coil circuit. Pressing it interrupts the coil supply and drops the contactor out, stopping the motor.",
    "cat": "DOL",
    "id": "F11_013"
  },
  {
    "q": "What is the function of the hold-in (latching) contact in a DOL starter?",
    "a": "An auxiliary contact on the contactor, wired in parallel with the start button, that maintains the coil supply once the start button is released",
    "opts": [
      "An auxiliary contact on the contactor, wired in parallel with the start button, that maintains the coil supply once the start button is released",
      "A contact that senses overload current and trips the coil circuit",
      "A contact that switches the motor from star to delta connection",
      "A contact that provides short circuit protection upstream of the contactor"
    ],
    "exp": "Once the contactor pulls in, the hold-in contact closes and takes over from the start button, keeping the coil energised. This is a very common interview question and easy to score full marks on.",
    "cat": "DOL",
    "id": "F11_014"
  },
  {
    "q": "\"Why does the motor keep running when you let go of the start button?\" What is the correct answer?",
    "a": "The auxiliary hold-in contact, closed in parallel with the start button, maintains the coil supply",
    "opts": [
      "The auxiliary hold-in contact, closed in parallel with the start button, maintains the coil supply",
      "The overload relay latches the circuit closed once current is detected",
      "The start button itself mechanically stays depressed",
      "The main contactor has no coil and stays closed by spring pressure alone"
    ],
    "exp": "This is one of the most commonly asked questions on the DOL starter. The hold-in contact, an auxiliary normally open contact on the contactor, closes once the contactor pulls in and keeps the coil circuit alive after the start button is released.",
    "cat": "DOL",
    "id": "F11_015"
  },
  {
    "q": "A DOL-started motor is running when the ship suffers a brief blackout. When the supply returns, what happens?",
    "a": "The motor does not restart on its own, because the contactor dropped out and its hold-in contact opened, so somebody must press start again",
    "opts": [
      "The motor does not restart on its own, because the contactor dropped out and its hold-in contact opened, so somebody must press start again",
      "The motor restarts automatically as soon as voltage is available again",
      "The overload relay restarts the motor after a short delay",
      "The motor restarts only if the stop button is pressed first"
    ],
    "exp": "When supply fails, the contactor drops out and the hold-in contact opens with it, so the coil circuit stays broken even once supply is restored. This is undervoltage protection, also called no-volt release, and it is a deliberate safety feature.",
    "cat": "DOL",
    "id": "F11_016"
  },
  {
    "q": "Why is a motor's failure to restart automatically after a supply interruption considered a safety feature rather than a fault?",
    "a": "It prevents machinery from starting unexpectedly while someone may be working on it",
    "opts": [
      "It prevents machinery from starting unexpectedly while someone may be working on it",
      "It saves electrical energy by keeping the motor off for longer",
      "It reduces wear on the overload relay contacts",
      "It is required so the star-delta timer can reset"
    ],
    "exp": "Undervoltage or no-volt release exists specifically so that machinery does not spring back to life unattended after a supply dip or blackout, protecting anyone who might be working on or near the equipment at the time.",
    "cat": "DOL",
    "id": "F11_017"
  },
  {
    "q": "What does the overload relay in a DOL starter actually protect against?",
    "a": "Sustained overload current, not short circuit faults",
    "opts": [
      "Sustained overload current, not short circuit faults",
      "Short circuit faults only, not sustained overload",
      "Overvoltage on the supply busbar",
      "Reverse phase rotation of the supply"
    ],
    "exp": "The overload relay, thermal or electronic, senses motor current and trips the coil circuit on a sustained overload. It is far too slow to clear a genuine short circuit, which is why separate protection is fitted upstream.",
    "cat": "DOL",
    "id": "F11_018"
  },
  {
    "q": "Why does a DOL starter need fuses or a circuit breaker upstream, in addition to the overload relay?",
    "a": "The overload relay is far too slow to clear a short circuit fault",
    "opts": [
      "The overload relay is far too slow to clear a short circuit fault",
      "The overload relay only works on three phase supplies, not single phase",
      "Fuses are required so the hold-in contact can function",
      "The overload relay cannot be reset after it trips"
    ],
    "exp": "Overload protection and short circuit protection are two different jobs with two different speed requirements. Thermal or electronic overload sensing is deliberately slow to ride through normal starting current, so it cannot clear a fault fast enough, and fuses or a breaker are needed for that.",
    "cat": "DOL",
    "id": "F11_019"
  },
  {
    "q": "What starting torque does a DOL start deliver, expressed as a percentage of full DOL torque?",
    "a": "100 percent",
    "opts": ["100 percent", "33 percent", "64 percent", "50 percent"],
    "exp": "Because full line voltage is applied from the start, DOL torque is by definition the reference 100 percent that reduced voltage methods are compared against.",
    "cat": "DOL",
    "id": "F11_020"
  },
  {
    "q": "How does the cost and complexity of a DOL starter compare with the other starting methods covered in this module?",
    "a": "It is the lowest of all the methods",
    "opts": [
      "It is the lowest of all the methods",
      "It is the highest of all the methods",
      "It is roughly the same as a VFD",
      "It is higher than autotransformer starting but lower than a soft starter"
    ],
    "exp": "DOL has the fewest components and the simplest control circuit of any method covered, making it both the cheapest and the least complex.",
    "cat": "DOL",
    "id": "F11_021"
  },
  {
    "q": "What actually sets the practical size limit for DOL starting a motor on a particular ship?",
    "a": "The generator capacity and the acceptable voltage dip on that vessel, not a fixed horsepower figure",
    "opts": [
      "The generator capacity and the acceptable voltage dip on that vessel, not a fixed horsepower figure",
      "A fixed horsepower limit that applies to every vessel regardless of generator size",
      "The physical size of the contactor available in the market",
      "The number of poles the motor has"
    ],
    "exp": "A motor that can be safely DOL started on a large vessel with generous generator capacity may need reduced voltage starting on a small vessel running a single generator, because it is the relative size against the source that matters, not an absolute figure.",
    "cat": "DOL",
    "id": "F11_022"
  },
  {
    "q": "Which type of shipboard load is best suited to DOL starting?",
    "a": "Small and medium motors, and anything needing full torque from rest, such as fans and small pumps",
    "opts": [
      "Small and medium motors, and anything needing full torque from rest, such as fans and small pumps",
      "Only motors larger than 500 kW",
      "Only motors that will run continuously at variable speed",
      "Only motors fitted with six winding leads brought out"
    ],
    "exp": "DOL suits motors where the surge is acceptable to the system and where full starting torque is genuinely needed immediately. Six leads brought out is a star-delta requirement, not a DOL one.",
    "cat": "DOL",
    "id": "F11_023"
  },

  /* ═══════════ STAR-DELTA STARTING ═══════════ */
  {
    "q": "What physical requirement must a motor meet before it can be star-delta started?",
    "a": "All six winding ends must be brought out to the terminal box, and the motor must be designed to run in delta at the supply voltage",
    "opts": [
      "All six winding ends must be brought out to the terminal box, and the motor must be designed to run in delta at the supply voltage",
      "The motor must have only three winding ends brought out",
      "The motor must be a DC machine fitted with a commutator",
      "The motor must be rated for a supply frequency above 50 Hz"
    ],
    "exp": "Star-delta needs access to both ends of every winding so the connection can be changed from star to delta, and the winding itself must be rated to run continuously in delta at the supply voltage.",
    "cat": "STARDELTA",
    "id": "F11_024"
  },
  {
    "q": "In star connection, what voltage appears across each motor winding compared with the line voltage?",
    "a": "The line voltage divided by root three, about 0.577 times line voltage",
    "opts": [
      "The line voltage divided by root three, about 0.577 times line voltage",
      "The full line voltage, unchanged",
      "The line voltage multiplied by root three",
      "Exactly half the line voltage"
    ],
    "exp": "V phase(star) = V line / root 3 = 0.577 x V line. This is the starting point for deriving why star-delta cuts the current to one third.",
    "cat": "STARDELTA",
    "id": "F11_025"
  },
  {
    "q": "In delta connection, how is the line current related to the phase current?",
    "a": "Line current is root three times the phase current",
    "opts": [
      "Line current is root three times the phase current",
      "Line current equals the phase current",
      "Line current is one third of the phase current",
      "Line current is half the phase current"
    ],
    "exp": "In delta, I line(delta) = root 3 x V line / Z, because each line feeds two windings. In star, by contrast, the line current equals the phase current directly.",
    "cat": "STARDELTA",
    "id": "F11_026"
  },
  {
    "q": "In star connection, how does the line current compare with the phase current?",
    "a": "They are equal",
    "opts": ["They are equal", "Line current is root three times phase current", "Line current is one third of phase current", "Phase current is root three times line current"],
    "exp": "In a star connected winding each winding carries the full line current directly, so line current equals phase current. This is the opposite relationship to delta connection.",
    "cat": "STARDELTA",
    "id": "F11_027"
  },
  {
    "q": "Working through the derivation, what is the ratio of star line starting current to delta line starting current for the same motor?",
    "a": "One third",
    "opts": ["One third", "Root three", "One half", "Two thirds"],
    "exp": "I star(line) = V L / (root3 x Z) and I delta(line) = root3 x V L / Z. Dividing one by the other gives exactly 1/3, since (1/root3) / root3 = 1/3.",
    "cat": "STARDELTA",
    "id": "F11_028"
  },
  {
    "q": "A motor started DOL in delta would draw 90 A of line current. What line current does it draw starting in star?",
    "a": "30 A",
    "opts": ["30 A", "52 A", "270 A", "45 A"],
    "exp": "Star line current is one third of the delta line current: 90 / 3 = 30 A. The value 52 A comes from dividing by root three instead of three, a common slip.",
    "cat": "STARDELTA",
    "id": "F11_029"
  },
  {
    "q": "Why does starting torque also fall to one third in star, and not just the current?",
    "a": "Torque follows the square of the applied voltage, and each winding voltage has fallen by a factor of root three, so torque falls by (1/root3) squared, which is also one third",
    "opts": [
      "Torque follows the square of the applied voltage, and each winding voltage has fallen by a factor of root three, so torque falls by (1/root3) squared, which is also one third",
      "Torque falls to one third purely because the current has fallen to one third",
      "Torque is unaffected by the star connection, only current changes",
      "Torque falls to one third because the motor briefly runs at reduced frequency"
    ],
    "exp": "It is a coincidence of the numbers that current and torque both land on one third, but they get there by different routes: current by the direct star-delta current ratio, torque by the voltage-squared torque law applied to the reduced winding voltage.",
    "cat": "STARDELTA",
    "id": "F11_030"
  },
  {
    "q": "A motor develops 150 Nm of torque when started DOL in delta. What torque does it develop starting in star?",
    "a": "50 Nm",
    "opts": ["50 Nm", "86.6 Nm", "75 Nm", "100 Nm"],
    "exp": "Star-delta torque falls to one third of the delta value: 150 / 3 = 50 Nm. 86.6 Nm would come from applying the voltage ratio (1/root3) once instead of squaring it.",
    "cat": "STARDELTA",
    "id": "F11_031"
  },
  {
    "q": "Why is a star-delta starter only suitable for a motor that can accelerate on light or no load?",
    "a": "Starting torque is reduced to only one third, the same fraction as the current, so a heavily loaded motor may not reach enough speed before switching to delta",
    "opts": [
      "Starting torque is reduced to only one third, the same fraction as the current, so a heavily loaded motor may not reach enough speed before switching to delta",
      "The star connection can only supply a small fraction of the motor's rated current continuously",
      "Star connection causes the motor to run in the wrong direction",
      "The timer cannot be adjusted for heavier loads"
    ],
    "exp": "You get the reduction in current, but you pay for it with exactly the same reduction in torque. If the load is heavy the motor stalls in star at low speed, and switching to delta then draws a surge almost as bad as DOL, which defeats the whole purpose.",
    "cat": "STARDELTA",
    "id": "F11_032"
  },
  {
    "q": "If a heavily loaded motor fails to reach adequate speed in star and is then switched to delta, what happens?",
    "a": "It draws a current surge almost as bad as a DOL start, defeating the purpose of the star-delta starter",
    "opts": [
      "It draws a current surge almost as bad as a DOL start, defeating the purpose of the star-delta starter",
      "It automatically switches back to star and tries again",
      "The delta contactor refuses to close until the motor reaches full speed",
      "The overload relay prevents any current from flowing at all"
    ],
    "exp": "Switching to delta at low speed, with slip still high, is electrically similar to a fresh DOL start from near-standstill, so the intended benefit of the reduced voltage start is lost.",
    "cat": "STARDELTA",
    "id": "F11_033"
  },
  {
    "q": "Which of the following loads is best suited to star-delta starting?",
    "a": "A centrifugal pump, which starts largely unloaded",
    "opts": [
      "A centrifugal pump, which starts largely unloaded",
      "A loaded compressor starting against pressure",
      "A conveyor that starts fully loaded",
      "A crane hoist lifting a rated load from rest"
    ],
    "exp": "Centrifugal pumps and fans present very little torque demand at low speed, so they suit the reduced starting torque of star-delta well. A loaded compressor, conveyor, or hoist needs torque immediately and does not.",
    "cat": "STARDELTA",
    "id": "F11_034"
  },
  {
    "q": "What is meant by \"open transition\" in a star-delta starter?",
    "a": "The star contactor opens and then the delta contactor closes, with the motor briefly disconnected from the supply between the two",
    "opts": [
      "The star contactor opens and then the delta contactor closes, with the motor briefly disconnected from the supply between the two",
      "The motor is permanently connected in an open star configuration",
      "Both star and delta contactors are closed together at all times",
      "The starter has no timer and switches instantly with no delay at all"
    ],
    "exp": "Open transition is the common, simple arrangement: for a brief instant during the changeover the motor is disconnected from the supply entirely, which is what creates the transient described in the transition question.",
    "cat": "STARDELTA",
    "id": "F11_035"
  },
  {
    "q": "Why does open transition star-delta switching produce a current and torque transient?",
    "a": "The motor is still turning and generating a back EMF during the brief disconnection, so reconnecting the supply out of phase with it causes a transient",
    "opts": [
      "The motor is still turning and generating a back EMF during the brief disconnection, so reconnecting the supply out of phase with it causes a transient",
      "The overload relay trips momentarily during the transition",
      "The star contactor and delta contactor are briefly both closed together",
      "The supply frequency changes during the transition"
    ],
    "exp": "During the momentary gap the coasting motor generates its own back EMF. When the delta contactor closes, the supply and that back EMF are generally out of phase, producing the transient. Both contactors being closed together would instead short the windings, which the interlock exists to prevent.",
    "cat": "STARDELTA",
    "id": "F11_036"
  },
  {
    "q": "How does closed transition star-delta switching avoid the open transition transient?",
    "a": "Resistors are inserted so the motor is never fully disconnected from the supply during the changeover",
    "opts": [
      "Resistors are inserted so the motor is never fully disconnected from the supply during the changeover",
      "It uses a soft starter instead of contactors for the changeover",
      "It removes the timer so the change happens instantaneously",
      "It runs the motor at reduced frequency during the change"
    ],
    "exp": "Closed transition adds resistors that bridge the gap between star and delta, keeping the motor connected throughout, at the cost of extra components. It is used where the open transition transient cannot be tolerated.",
    "cat": "STARDELTA",
    "id": "F11_037"
  },
  {
    "q": "In the star-delta starting sequence, what is the timer set to achieve before switching from star to delta?",
    "a": "Allow the motor to reach roughly 75 to 80 percent of full speed",
    "opts": [
      "Allow the motor to reach roughly 75 to 80 percent of full speed",
      "Allow the motor to reach exactly 33 percent of full speed",
      "Run for a fixed 60 seconds regardless of motor speed",
      "Wait until the overload relay resets"
    ],
    "exp": "The timer, typically a few seconds, is set so the motor has accelerated to about 75 to 80 percent of full speed in star before the changeover to delta takes place.",
    "cat": "STARDELTA",
    "id": "F11_038"
  },
  {
    "q": "Why is an electrical and mechanical interlock between the star and delta contactors essential?",
    "a": "If both contactors closed together, the supply would be short circuited through the windings",
    "opts": [
      "If both contactors closed together, the supply would be short circuited through the windings",
      "Without it, the motor would run in the reverse direction",
      "Without it, the overload relay could not be reset",
      "Without it, the timer would not start counting"
    ],
    "exp": "Star connects the winding ends together to form a star point, while delta connects each winding end to a different line. Having both contactors closed at once would short the supply through the windings, so a robust interlock is mandatory.",
    "cat": "STARDELTA",
    "id": "F11_039"
  },
  {
    "q": "Approximately what starting current does a star-delta start draw, expressed against full load current?",
    "a": "About 2 times FLC",
    "opts": ["About 2 times FLC", "About 6 times FLC", "About 1 times FLC", "About 4 times FLC"],
    "exp": "Since DOL draws roughly 5 to 7 times FLC and star-delta cuts that to one third, the result is roughly 2 times FLC, matching the comparison table.",
    "cat": "STARDELTA",
    "id": "F11_040"
  },

  /* ═══════════ AUTOTRANSFORMER STARTING ═══════════ */
  {
    "q": "How does autotransformer starting apply reduced voltage to the motor?",
    "a": "A tapped autotransformer supplies a reduced voltage at the selected tap, then the motor is switched to full line voltage once accelerated",
    "opts": [
      "A tapped autotransformer supplies a reduced voltage at the selected tap, then the motor is switched to full line voltage once accelerated",
      "The motor windings are reconnected from star to delta as the motor accelerates",
      "Thyristors delay the firing angle to control the RMS voltage",
      "The frequency is reduced together with the voltage, then both are raised together"
    ],
    "exp": "Autotransformer starting uses a tapped transformer to apply a chosen fraction of line voltage at start, then steps up to full voltage, distinct from the winding reconnection of star-delta, the thyristor control of a soft starter, or the V/f control of a VFD.",
    "cat": "AUTOTX",
    "id": "F11_041"
  },
  {
    "q": "What are the commonly used taps on an autotransformer starter?",
    "a": "50, 65 and 80 percent of line voltage",
    "opts": ["50, 65 and 80 percent of line voltage", "25, 50 and 75 percent of line voltage", "33, 66 and 100 percent of line voltage", "10, 20 and 30 percent of line voltage"],
    "exp": "The commonly used taps are 50, 65 and 80 percent of line voltage, giving a choice of starting compromise rather than the single fixed reduction of star-delta.",
    "cat": "AUTOTX",
    "id": "F11_042"
  },
  {
    "q": "What is the main advantage of autotransformer starting over star-delta starting?",
    "a": "The voltage reduction is selectable through the tap chosen, rather than being a single fixed ratio",
    "opts": [
      "The voltage reduction is selectable through the tap chosen, rather than being a single fixed ratio",
      "It requires no motor with six leads brought out",
      "It is always cheaper than a star-delta starter",
      "It produces zero starting current whatsoever"
    ],
    "exp": "Star-delta only ever gives one third current and one third torque, fixed by the star to delta ratio. An autotransformer lets you choose the tap, and therefore the compromise between current and torque, to suit the load.",
    "cat": "AUTOTX",
    "id": "F11_043"
  },
  {
    "q": "A motor is started on the 80 percent tap of an autotransformer. Roughly what percentage of full torque is available?",
    "a": "64 percent",
    "opts": ["64 percent", "80 percent", "33 percent", "50 percent"],
    "exp": "Torque follows voltage squared, so 0.8 squared gives 0.64, or 64 percent of full torque, considerably more than the 33 percent that star-delta gives at a fixed ratio.",
    "cat": "AUTOTX",
    "id": "F11_044"
  },
  {
    "q": "What is the Korndorfer connection in autotransformer starting?",
    "a": "The closed transition version, where the motor is never disconnected during the change to full voltage",
    "opts": [
      "The closed transition version, where the motor is never disconnected during the change to full voltage",
      "A method of running the autotransformer at a fixed 50 percent tap permanently",
      "A protective relay fitted only to autotransformer starters",
      "A type of overload relay used with autotransformer starters"
    ],
    "exp": "The Korndorfer connection is the closed transition arrangement for autotransformer starting, avoiding the disconnection transient in the same way closed transition avoids it for star-delta.",
    "cat": "AUTOTX",
    "id": "F11_045"
  },
  {
    "q": "What is the main disadvantage of autotransformer starting compared with star-delta?",
    "a": "Greater size, weight and cost",
    "opts": ["Greater size, weight and cost", "Lower starting torque at every tap", "It cannot be used on three phase motors", "It requires a motor with only three leads brought out"],
    "exp": "The tapped autotransformer itself is a large, heavy and relatively expensive piece of equipment, which is why it tends to appear on larger machines rather than throughout the ship.",
    "cat": "AUTOTX",
    "id": "F11_046"
  },
  {
    "q": "Autotransformer starting is best suited to which application?",
    "a": "Large motors that need a chosen compromise between starting current and starting torque",
    "opts": [
      "Large motors that need a chosen compromise between starting current and starting torque",
      "Small motors needing full torque from rest",
      "Motors requiring continuous speed control while running",
      "Motors that must never generate any starting current transient"
    ],
    "exp": "Because the tap is selectable, autotransformer starting suits larger machines where neither DOL nor the fixed one third of star-delta is the right fit, and where the extra cost is justified.",
    "cat": "AUTOTX",
    "id": "F11_047"
  },

  /* ═══════════ SOFT STARTER ═══════════ */
  {
    "q": "What power electronic devices does a soft starter use in each phase?",
    "a": "Back to back thyristors (SCRs)",
    "opts": ["Back to back thyristors (SCRs)", "IGBTs switching a DC bus", "A tapped autotransformer", "Diode bridge rectifiers only"],
    "exp": "A soft starter uses back to back thyristors in each phase, controlling how much of each AC half cycle reaches the motor. IGBTs switching a DC bus is how a VFD's inverter stage works, not a soft starter.",
    "cat": "SOFT",
    "id": "F11_048"
  },
  {
    "q": "How does a soft starter control the voltage applied to the motor?",
    "a": "By delaying the thyristor firing angle, which controls how much of each half cycle reaches the motor and so controls the RMS voltage",
    "opts": [
      "By delaying the thyristor firing angle, which controls how much of each half cycle reaches the motor and so controls the RMS voltage",
      "By physically switching between star and delta connected windings",
      "By selecting a tap on an internal autotransformer",
      "By varying the supply frequency delivered to the motor"
    ],
    "exp": "Firing angle control of the thyristors determines how much of each AC half cycle is passed through, which sets the effective RMS voltage and allows it to be ramped up smoothly.",
    "cat": "SOFT",
    "id": "F11_049"
  },
  {
    "q": "Roughly what starting current does a soft starter draw, expressed against full load current?",
    "a": "2 to 4 times FLC",
    "opts": ["2 to 4 times FLC", "5 to 7 times FLC", "1 to 1.5 times FLC", "8 to 10 times FLC"],
    "exp": "Soft starters typically limit starting current to 2 to 4 times FLC, between the heavier DOL surge and the much lower VFD starting current.",
    "cat": "SOFT",
    "id": "F11_050"
  },
  {
    "q": "What is a typical adjustable ramp time for a soft starter?",
    "a": "5 to 30 seconds",
    "opts": ["5 to 30 seconds", "0.5 to 1 second", "2 to 5 minutes", "It is fixed and cannot be adjusted"],
    "exp": "The ramp is adjustable, typically over roughly 5 to 30 seconds, allowing the acceleration profile to be tuned to the driven load.",
    "cat": "SOFT",
    "id": "F11_051"
  },
  {
    "q": "Why is a soft starter's soft stop facility particularly valuable on pumps?",
    "a": "It avoids water hammer by decelerating the flow gradually rather than stopping it abruptly",
    "opts": [
      "It avoids water hammer by decelerating the flow gradually rather than stopping it abruptly",
      "It reduces the pump's power consumption while running normally",
      "It eliminates the need for an overload relay on the pump circuit",
      "It increases the pump's maximum flow rate"
    ],
    "exp": "A soft stop ramps the voltage down gradually, avoiding the abrupt momentum change in the pipeline fluid that causes water hammer, in the same way the soft start avoids mechanical shock on start-up.",
    "cat": "SOFT",
    "id": "F11_052"
  },
  {
    "q": "Despite its smooth ramp, why does a soft starter still fail to deliver full torque at reduced current?",
    "a": "It only controls voltage, so it remains bound by the torque-proportional-to-voltage-squared law like every other voltage-only method",
    "opts": [
      "It only controls voltage, so it remains bound by the torque-proportional-to-voltage-squared law like every other voltage-only method",
      "Its thyristors are not rated to handle full starting current",
      "It ramps frequency downward at the same time as voltage",
      "It has no bypass contactor, so it overheats before reaching full torque"
    ],
    "exp": "A soft starter is fundamentally a voltage control device, and reducing voltage always costs torque as the square of that reduction. Only a method that also reduces frequency, a VFD, escapes this trade-off.",
    "cat": "SOFT",
    "id": "F11_053"
  },
  {
    "q": "What is the purpose of the bypass contactor commonly fitted to a soft starter?",
    "a": "It closes once the motor is up to speed so the thyristors are not left conducting continuously and generating heat during normal running",
    "opts": [
      "It closes once the motor is up to speed so the thyristors are not left conducting continuously and generating heat during normal running",
      "It provides the star point connection during acceleration",
      "It disconnects the overload relay once the motor has started",
      "It switches the supply from three phase to single phase for running"
    ],
    "exp": "Once the ramp is complete the bypass contactor takes over, carrying the running current directly and letting the thyristors sit idle rather than dissipating heat continuously while conducting.",
    "cat": "SOFT",
    "id": "F11_054"
  },

  /* ═══════════ VARIABLE FREQUENCY DRIVE (VFD) ═══════════ */
  {
    "q": "What does a VFD control together, unlike every reduced voltage starting method?",
    "a": "Voltage and frequency together, holding V/f constant",
    "opts": [
      "Voltage and frequency together, holding V/f constant",
      "Only the frequency, while leaving voltage fixed at line value",
      "Only the voltage, in the same way a soft starter does",
      "The number of motor poles in use"
    ],
    "exp": "Every other method reduces voltage alone and accepts the resulting torque loss. A VFD instead reduces frequency together with voltage, holding V/f constant, which is what lets it escape the usual trade-off.",
    "cat": "VFD",
    "id": "F11_055"
  },
  {
    "q": "Why does holding V/f constant allow a VFD to maintain full torque even at low starting speed?",
    "a": "Torque depends on the air gap flux, and flux depends on V/f rather than on voltage alone, so keeping V/f constant keeps the flux, and therefore the torque, at its design value",
    "opts": [
      "Torque depends on the air gap flux, and flux depends on V/f rather than on voltage alone, so keeping V/f constant keeps the flux, and therefore the torque, at its design value",
      "Lower frequency directly increases the mechanical torque constant of the rotor",
      "The reduced frequency bypasses the need for any flux in the air gap",
      "Torque at low frequency is generated entirely by the DC link capacitors"
    ],
    "exp": "Air gap flux, not voltage by itself, is what actually produces torque. Since flux tracks the ratio V/f, holding that ratio constant as both are lowered keeps the flux at its design value, so full torque remains available.",
    "cat": "VFD",
    "id": "F11_056"
  },
  {
    "q": "Why does starting at low frequency also keep the starting current low on a VFD?",
    "a": "At low frequency the rotating field is barely moving faster than the stationary rotor, so slip is small, rotor EMF is small, and current is small",
    "opts": [
      "At low frequency the rotating field is barely moving faster than the stationary rotor, so slip is small, rotor EMF is small, and current is small",
      "Low frequency automatically reduces the resistance of the rotor windings",
      "The DC link capacitors absorb all of the starting current",
      "Low frequency operation disconnects the overload relay from the circuit"
    ],
    "exp": "Because the field itself starts slow, the relative speed between field and rotor, which is slip, stays small even though the rotor is at standstill. Small slip means small induced rotor EMF and therefore small current, unlike a DOL start where the field is already at full synchronous speed.",
    "cat": "VFD",
    "id": "F11_057"
  },
  {
    "q": "Roughly what starting current does a VFD draw, and with what torque available?",
    "a": "About 1 to 1.5 times FLC, with full torque available",
    "opts": [
      "About 1 to 1.5 times FLC, with full torque available",
      "About 1 to 1.5 times FLC, with only one third torque available",
      "About 5 to 7 times FLC, with full torque available",
      "About 2 to 4 times FLC, with reduced torque"
    ],
    "exp": "A VFD is unique in combining a very low starting current, roughly 1 to 1.5 times FLC, with full torque availability, something no voltage-only reduced voltage method can achieve.",
    "cat": "VFD",
    "id": "F11_058"
  },
  {
    "q": "Which starting method is capable of delivering full torque while drawing only about 1 to 1.5 times full load current?",
    "a": "The VFD, and no reduced-voltage-only method can match it",
    "opts": [
      "The VFD, and no reduced-voltage-only method can match it",
      "Star-delta, provided the closed transition version is used",
      "Autotransformer starting on the 80 percent tap",
      "A soft starter with the ramp time extended to 30 seconds"
    ],
    "exp": "Every voltage-only method, whether star-delta, autotransformer or soft starter, is bound by the torque-follows-voltage-squared law and must sacrifice torque to cut current. Only the VFD escapes that trade by also lowering frequency, so it alone can combine full torque with a low starting current.",
    "cat": "VFD",
    "id": "F11_059"
  },
  {
    "q": "What are the three stages of a VFD, in order from supply to motor?",
    "a": "Rectifier, DC link, inverter",
    "opts": ["Rectifier, DC link, inverter", "Inverter, DC link, rectifier", "Rectifier, inverter, DC link", "Autotransformer, rectifier, inverter"],
    "exp": "Incoming AC is first rectified to DC, then smoothed by the DC link, then switched back into variable AC by the inverter stage. This block diagram is asked directly and is also the basis of the IGBT question.",
    "cat": "VFD",
    "id": "F11_060"
  },
  {
    "q": "What happens at the rectifier stage of a VFD?",
    "a": "Incoming three phase AC is converted to DC, usually by a six pulse diode bridge",
    "opts": [
      "Incoming three phase AC is converted to DC, usually by a six pulse diode bridge",
      "DC is converted into variable frequency three phase AC",
      "The DC bus voltage is smoothed by capacitors",
      "The motor's air gap flux is regulated directly"
    ],
    "exp": "The rectifier is the first stage, converting the incoming three phase AC supply into DC, typically using a six pulse diode bridge, ready to be smoothed by the DC link.",
    "cat": "VFD",
    "id": "F11_061"
  },
  {
    "q": "What is the function of the DC link stage in a VFD?",
    "a": "Capacitors, and often an inductor, smooth the rectified DC into a stable DC bus",
    "opts": [
      "Capacitors, and often an inductor, smooth the rectified DC into a stable DC bus",
      "It converts the DC bus into a synthesised three phase AC output",
      "It converts the incoming AC supply into DC using diodes",
      "It provides the star point connection for the motor windings"
    ],
    "exp": "The DC link sits between the rectifier and the inverter, using capacitors and often an inductor to smooth the rectified output into a stable DC bus feeding the inverter stage.",
    "cat": "VFD",
    "id": "F11_062"
  },
  {
    "q": "What happens at the inverter stage of a VFD?",
    "a": "IGBTs switch the DC bus to synthesise a three phase AC output of the required voltage and frequency, using pulse width modulation",
    "opts": [
      "IGBTs switch the DC bus to synthesise a three phase AC output of the required voltage and frequency, using pulse width modulation",
      "A diode bridge converts the incoming AC supply into DC",
      "Capacitors smooth the rectified DC into a stable bus",
      "A tapped autotransformer selects the output voltage"
    ],
    "exp": "The inverter is the final stage, using IGBTs under pulse width modulation to build up a synthetic three phase AC waveform of whatever voltage and frequency the drive currently requires.",
    "cat": "VFD",
    "id": "F11_063"
  },
  {
    "q": "\"Which electronic component is used to convert the DC supply into variable AC in an inverter?\" What is the correct answer?",
    "a": "The IGBT",
    "opts": ["The IGBT", "The diode", "The autotransformer", "The overload relay"],
    "exp": "This exact question has been asked directly in interview. The IGBT is the switching device at the heart of the inverter stage, synthesising the variable AC output from the DC bus under pulse width modulation.",
    "cat": "VFD",
    "id": "F11_064"
  },
  {
    "q": "Why is the IGBT the right device for a VFD's inverter stage?",
    "a": "It combines the voltage driven, high impedance gate of a MOSFET, which is easy to drive, with the high current and high voltage handling of a bipolar transistor",
    "opts": [
      "It combines the voltage driven, high impedance gate of a MOSFET, which is easy to drive, with the high current and high voltage handling of a bipolar transistor",
      "It is the cheapest semiconductor device available for any switching application",
      "It can only operate on direct current and therefore matches the DC link",
      "It requires no gate drive circuitry at all"
    ],
    "exp": "The IGBT's easy-to-drive MOSFET-style gate combined with bipolar-transistor-level current and voltage handling makes it well suited to the switching frequencies and power levels a VFD inverter needs.",
    "cat": "VFD",
    "id": "F11_065"
  },
  {
    "q": "Besides reduced starting current, what is the real reason VFDs are fitted to shipboard pumps and fans rather than just a soft starter?",
    "a": "Continuous speed control while running, giving an energy saving because power varies with the cube of speed",
    "opts": [
      "Continuous speed control while running, giving an energy saving because power varies with the cube of speed",
      "VFDs require no maintenance once installed",
      "VFDs eliminate the need for any overload protection",
      "VFDs are simpler and cheaper to install than a soft starter"
    ],
    "exp": "A soft starter is bypassed once the motor is up to speed and does nothing further, whereas a VFD continues controlling speed throughout running. Because pump and fan power follows the cube of speed, running at reduced speed saves significant energy.",
    "cat": "VFD",
    "id": "F11_066"
  },
  {
    "q": "A ballast pump normally runs at full speed and full power. If a VFD slows it to 80 percent speed, roughly what power does it now consume?",
    "a": "About half of full power",
    "opts": ["About half of full power", "About 80 percent of full power", "Unchanged, since power does not depend on speed", "About 20 percent of full power"],
    "exp": "Pump and fan power follows the cube of speed. 0.8 cubed is about 0.512, so power falls to roughly half, which is the basis of the significant energy savings VFDs deliver on this kind of load.",
    "cat": "VFD",
    "id": "F11_067"
  },
  {
    "q": "What is a genuine disadvantage of fitting a VFD, compared with simpler starting methods?",
    "a": "It injects harmonics back into the ship's electrical system and requires motor insulation able to withstand its fast switching edges",
    "opts": [
      "It injects harmonics back into the ship's electrical system and requires motor insulation able to withstand its fast switching edges",
      "It cannot provide any overload protection to the motor",
      "It is incapable of starting a motor smoothly",
      "It always draws more starting current than a DOL starter"
    ],
    "exp": "The fast switching of the inverter stage generates harmonics and stresses motor insulation with steep voltage edges, and long cable runs can add reflections that stress the windings further. Cost, complexity and the possible need for a separately driven cooling fan at low speed are the other real trade-offs.",
    "cat": "VFD",
    "id": "F11_068"
  },
  {
    "q": "Why might a VFD-driven motor need a separately powered cooling fan?",
    "a": "The motor's own shaft-mounted fan moves less cooling air over the motor at low speed, when it may still be delivering significant torque and heat",
    "opts": [
      "The motor's own shaft-mounted fan moves less cooling air over the motor at low speed, when it may still be delivering significant torque and heat",
      "VFDs are not compatible with motors that have any cooling fan at all",
      "The DC link generates heat that must be removed from the motor itself",
      "IGBTs cannot operate unless the motor is force-ventilated"
    ],
    "exp": "A standard motor's own fan is shaft-driven, so it moves less air at low VFD speed even though the motor may still be under substantial load and generating heat, which is why a separately driven cooling fan is sometimes fitted.",
    "cat": "VFD",
    "id": "F11_069"
  },

  /* ═══════════ COMPARISON OF METHODS ═══════════ */
  {
    "q": "Ranking the methods in this module by starting current from lowest to highest, which order is correct?",
    "a": "VFD, soft starter, star-delta, DOL",
    "opts": ["VFD, soft starter, star-delta, DOL", "DOL, star-delta, soft starter, VFD", "Star-delta, DOL, VFD, soft starter", "Soft starter, VFD, DOL, star-delta"],
    "exp": "VFD at roughly 1 to 1.5 x FLC is lowest, then soft starter at 2 to 4 x FLC, then star-delta at roughly 2 x DOL current in absolute terms but still well below DOL's 5 to 7 x FLC, which is highest.",
    "cat": "COMPARE",
    "id": "F11_070"
  },
  {
    "q": "Which starting method is the only one able to deliver full starting torque without a heavy starting current?",
    "a": "The VFD",
    "opts": ["The VFD", "The soft starter", "The autotransformer starter on its highest tap", "Star-delta with closed transition"],
    "exp": "Autotransformer starting can only approach full torque by also approaching full voltage, and star-delta and soft starters are always bound by the voltage-squared torque law. Only the VFD, by lowering frequency with voltage, keeps torque full while current stays low.",
    "cat": "COMPARE",
    "id": "F11_071"
  },
  {
    "q": "What is the key operational difference between a soft starter and a VFD once the motor is up to running speed?",
    "a": "The soft starter is bypassed and does nothing further, while the VFD continues to control the motor's speed for as long as it runs",
    "opts": [
      "The soft starter is bypassed and does nothing further, while the VFD continues to control the motor's speed for as long as it runs",
      "The soft starter continues ramping voltage indefinitely, while the VFD switches off completely",
      "Both devices are bypassed once the motor reaches full speed",
      "The VFD is bypassed while the soft starter continues controlling frequency"
    ],
    "exp": "Once up to speed, a soft starter's bypass contactor takes over and the thyristors do nothing more, whereas a VFD keeps controlling voltage and frequency throughout running, which is what enables ongoing speed control.",
    "cat": "COMPARE",
    "id": "F11_072"
  },
  {
    "q": "Which single table from this module is most worth memorising for a quick comparison of all five methods?",
    "a": "The table comparing starting current, starting torque, cost and best application for DOL, star-delta, autotransformer, soft starter and VFD",
    "opts": [
      "The table comparing starting current, starting torque, cost and best application for DOL, star-delta, autotransformer, soft starter and VFD",
      "A table listing every ship that uses each starting method",
      "A table of motor nameplate temperature ratings",
      "A table of overload relay trip curves for each manufacturer"
    ],
    "exp": "That comparison table, covering starting current, starting torque, relative cost and the best application for each method, is explicitly called out as the one to memorise if you memorise only one.",
    "cat": "COMPARE",
    "id": "F11_073"
  },

  /* ═══════════ CHOOSING A STARTER ═══════════ */
  {
    "q": "When an interviewer describes a machine and asks what starter you would fit, what is the first question you should reason through?",
    "a": "Does the load need torque at rest?",
    "opts": [
      "Does the load need torque at rest?",
      "What colour is the starter panel painted?",
      "How many crew are on watch at the time?",
      "What is the exact list price of each starter type?"
    ],
    "exp": "Whether the load needs torque immediately, such as a loaded conveyor or a compressor starting against pressure, rules star-delta out straight away and should be reasoned through first rather than naming a method immediately.",
    "cat": "SELECT",
    "id": "F11_074"
  },
  {
    "q": "What marine-specific consideration when choosing a starter do candidates most commonly forget?",
    "a": "How big the motor is relative to the generator currently on line, which sets whether a DOL voltage dip is acceptable",
    "opts": [
      "How big the motor is relative to the generator currently on line, which sets whether a DOL voltage dip is acceptable",
      "Whether the motor is painted the correct colour for its duty",
      "Whether the starter panel is mounted at eye level",
      "Whether the motor was manufactured in the same country as the ship"
    ],
    "exp": "This is called out as the marine specific consideration and the one candidates forget: a shore engineer might never think about generator size, but on a ship it can be the deciding factor between DOL and a reduced voltage method.",
    "cat": "SELECT",
    "id": "F11_075"
  },
  {
    "q": "If a machine's speed genuinely needs to vary in service, not just at starting, what does that justify?",
    "a": "Fitting a VFD, with the smooth starting characteristics coming as a side benefit",
    "opts": [
      "Fitting a VFD, with the smooth starting characteristics coming as a side benefit",
      "Fitting a star-delta starter, since it inherently varies speed",
      "Fitting a DOL starter, since speed control is not possible on any starter",
      "Fitting an autotransformer starter set permanently to its 50 percent tap"
    ],
    "exp": "A VFD is justified on its own merits when running speed needs to vary, with its favourable starting behaviour being an additional bonus rather than the primary reason for fitting it.",
    "cat": "SELECT",
    "id": "F11_076"
  },
  {
    "q": "Mechanical shock such as water hammer in a pipeline, or belt and coupling wear, points toward which starting method?",
    "a": "A soft starter",
    "opts": ["A soft starter", "A DOL starter", "Star-delta with open transition", "An autotransformer starter on its lowest tap"],
    "exp": "The soft starter's genuinely smooth, step-free ramp with no transition transient is specifically valued for avoiding mechanical shock on couplings and belts, and its soft stop avoids water hammer on pumps.",
    "cat": "SELECT",
    "id": "F11_077"
  },
  {
    "q": "When several starting methods would technically work for a given machine, which philosophy does the module recommend for choosing between them at sea?",
    "a": "Fit the simplest thing that meets the requirement, because it is the thing that can actually be repaired on board",
    "opts": [
      "Fit the simplest thing that meets the requirement, because it is the thing that can actually be repaired on board",
      "Always fit the most technologically advanced option available",
      "Always fit whichever method is cheapest to purchase regardless of suitability",
      "Always fit a VFD as the universal default choice"
    ],
    "exp": "Cost, space and spares matter, and the module is explicit that the simplest thing meeting the requirement is usually right at sea, because it is what the crew can actually maintain and repair with what is on board.",
    "cat": "SELECT",
    "id": "F11_078"
  }

]);

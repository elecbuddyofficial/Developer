window.loadQuizzes("F10_DCMotors", [

  /* ═══════════ CONSTRUCTION ═══════════ */
  {
    "q": "What is the fundamental difference between a DC motor and a DC generator?",
    "a": "There is no difference in construction, only the direction of energy flow: electrical in and mechanical out is a motor, mechanical in and electrical out is a generator",
    "opts": [
      "There is no difference in construction, only the direction of energy flow: electrical in and mechanical out is a motor, mechanical in and electrical out is a generator",
      "A motor has a commutator while a generator uses slip rings",
      "A motor's field is on the rotor while a generator's field is on the stator",
      "A generator can only produce AC, and a rectifier is added to make it a motor"
    ],
    "exp": "A DC motor and DC generator are the same machine. Feed mechanical power in and take electrical power out, it is a generator. Feed electrical power in and take mechanical power out, it is a motor. Both use a commutator, and the field/armature arrangement is unchanged either way.",
    "cat": "CONSTR",
    "id": "F10_001"
  },
  {
    "q": "In a DC motor, what is the function of the yoke?",
    "a": "It forms the outer mechanical body and also carries magnetic flux as part of the magnetic circuit between poles",
    "opts": [
      "It forms the outer mechanical body and also carries magnetic flux as part of the magnetic circuit between poles",
      "It carries the load current from the brushes to the external circuit",
      "It reverses the current in each armature coil as it rotates",
      "It provides insulation between the commutator segments"
    ],
    "exp": "The yoke, usually cast or rolled steel, is both the mechanical frame and part of the magnetic path carrying flux between poles. Reversing coil current is the commutator's job, and segment insulation is provided by mica, not the yoke.",
    "cat": "CONSTR",
    "id": "F10_002"
  },
  {
    "q": "Why is the armature core built from thin insulated laminations rather than a single solid block of steel?",
    "a": "Laminations break up the eddy current paths, cutting eddy current loss",
    "opts": [
      "Laminations break up the eddy current paths, cutting eddy current loss",
      "Laminations make the armature lighter so it accelerates faster",
      "Laminations are cheaper to manufacture than a solid core",
      "Laminations increase the mechanical strength of the shaft"
    ],
    "exp": "A rotating iron core has EMFs induced in it just like the winding does, driving circulating eddy currents that produce heat loss. Thin insulated laminations interrupt those circulating paths and cut the loss sharply. Weight and cost are not the reason.",
    "cat": "CONSTR",
    "id": "F10_003"
  },
  {
    "q": "The commutator segments are insulated from each other and from the shaft using:",
    "a": "Mica",
    "opts": ["Mica", "Rubber", "Varnished paper", "Air gaps"],
    "exp": "The commutator is a cylinder of hard drawn copper segments insulated from one another and from the shaft by mica, chosen for its heat resistance and mechanical durability under the sliding brush contact.",
    "cat": "CONSTR",
    "id": "F10_004"
  },
  {
    "q": "What is the role of the brushes in a DC motor?",
    "a": "They provide the sliding electrical contact between the fixed external circuit and the rotating commutator",
    "opts": [
      "They provide the sliding electrical contact between the fixed external circuit and the rotating commutator",
      "They generate the main magnetic field for the armature to work against",
      "They mechanically reverse the direction of coil current as the armature rotates",
      "They support the weight of the rotating armature assembly"
    ],
    "exp": "Brushes are spring loaded carbon or carbon-graphite blocks pressed onto the rotating commutator, forming the sliding contact between the stationary external circuit and the rotating winding. The commutator itself, not the brushes, does the actual current reversal. The field poles produce the main field, and bearings carry the shaft weight.",
    "cat": "CONSTR",
    "id": "F10_005"
  },
  {
    "q": "Which statement correctly describes which part is stationary and which rotates in a standard DC motor?",
    "a": "The field is stationary and the armature rotates",
    "opts": [
      "The field is stationary and the armature rotates",
      "The armature is stationary and the field rotates",
      "Both the field and the armature rotate together",
      "Neither rotates; only the commutator turns"
    ],
    "exp": "This is a common point of confusion. The field poles are fixed inside the yoke, and it is the current carrying armature winding, sitting inside that fixed field, that experiences the force and turns the shaft. Picturing the field as rotating is the classic mistake this question is designed to catch.",
    "cat": "CONSTR",
    "id": "F10_006"
  },

  /* ═══════════ WORKING PRINCIPLE ═══════════ */
  {
    "q": "The basic operating principle of a DC motor is that:",
    "a": "A current carrying conductor placed in a magnetic field experiences a mechanical force",
    "opts": [
      "A current carrying conductor placed in a magnetic field experiences a mechanical force",
      "A conductor moving through a magnetic field has an EMF induced in it",
      "Two magnetic fields of opposite polarity always repel each other",
      "A changing magnetic flux induces a current in a nearby closed loop"
    ],
    "exp": "Motor action is the force on a current carrying conductor in a magnetic field, F = B x I x L. The second statement describes generator action (and back EMF), and the last describes transformer/mutual induction action, both different principles.",
    "cat": "PRINCIPLE",
    "id": "F10_007"
  },
  {
    "q": "In the formula F = B x I x L for the force on an armature conductor, what does L represent?",
    "a": "The length of the conductor lying within the magnetic field",
    "opts": [
      "The length of the conductor lying within the magnetic field",
      "The distance from the conductor to the shaft centre",
      "The inductance of the armature winding",
      "The number of turns in the armature coil"
    ],
    "exp": "L is the active conductor length within the field, in metres. Confusing it with the radius, the winding inductance, or turns count is a common slip when the formula is recalled from memory rather than understood.",
    "cat": "PRINCIPLE",
    "id": "F10_008"
  },
  {
    "q": "Using Fleming's Left Hand Rule, what does the First finger represent?",
    "a": "Field",
    "opts": ["Field", "Force", "Current", "Motion"],
    "exp": "First finger = Field, seCond finger = Current, thuMb = Motion (force). This is motor action: electrical energy in via the current, mechanical energy out via the motion.",
    "cat": "PRINCIPLE",
    "id": "F10_009"
  },
  {
    "q": "Which hand rule, and for which type of machine, gives the direction of the induced EMF rather than the force?",
    "a": "Fleming's Right Hand Rule, for a generator",
    "opts": [
      "Fleming's Right Hand Rule, for a generator",
      "Fleming's Left Hand Rule, for a generator",
      "Fleming's Right Hand Rule, for a motor",
      "Fleming's Left Hand Rule, for a motor"
    ],
    "exp": "Left hand gives force, used for motor action (electrical in, mechanical out). Right hand gives induced EMF, used for generator action (mechanical in, electrical out). Swapping the hands under interview pressure is a classic and easily avoided mistake.",
    "cat": "PRINCIPLE",
    "id": "F10_010"
  },
  {
    "q": "Why do the forces on armature conductors under the north pole and under the south pole add together to produce continuous torque, instead of cancelling?",
    "a": "The commutator ensures each conductor's current direction stays correct relative to the pole it is currently passing, so the force always acts to turn the shaft the same way",
    "opts": [
      "The commutator ensures each conductor's current direction stays correct relative to the pole it is currently passing, so the force always acts to turn the shaft the same way",
      "The conductors under each pole are physically shorter than those between poles",
      "The magnetic field only exists under the north pole, not the south pole",
      "The armature current reverses direction only when the motor is switched off"
    ],
    "exp": "As a conductor rotates past alternating N and S poles, the commutator keeps switching its connection so that its current, relative to the local flux direction, keeps producing force in the same rotational sense. Without that switching, the torque contributions from the two halves of the armature would cancel over a full revolution.",
    "cat": "PRINCIPLE",
    "id": "F10_011"
  },

  /* ═══════════ BACK EMF ═══════════ */
  {
    "q": "Why does a back EMF appear in the armature once a DC motor starts rotating?",
    "a": "The armature conductors are now moving through the magnetic field, and a conductor moving through a field has an EMF induced in it by Faraday's law",
    "opts": [
      "The armature conductors are now moving through the magnetic field, and a conductor moving through a field has an EMF induced in it by Faraday's law",
      "The commutator generates an EMF each time it switches segments",
      "The supply voltage automatically drops once current starts flowing",
      "Friction in the bearings converts some electrical energy into an opposing voltage"
    ],
    "exp": "Faraday's law does not care whether a conductor moves because you spun it by hand or because motor torque is spinning it: motion through a field induces an EMF either way. That induced EMF is the back EMF, not something generated by the commutator or bearing friction.",
    "cat": "BACKEMF",
    "id": "F10_012"
  },
  {
    "q": "By Lenz's law, the back EMF of a running DC motor always acts to:",
    "a": "Oppose the applied supply voltage that is driving the current",
    "opts": [
      "Oppose the applied supply voltage that is driving the current",
      "Add to the applied supply voltage, boosting the current",
      "Oppose the mechanical rotation only at starting, not while running",
      "Equal the supply voltage exactly under all load conditions"
    ],
    "exp": "Lenz's law requires the induced EMF to oppose the cause producing it, in this case the applied voltage driving the current that created the motion. It opposes continuously while running, and it equals the supply voltage only in the ideal loss-free case, not with real armature resistance present.",
    "cat": "BACKEMF",
    "id": "F10_013"
  },
  {
    "q": "The back EMF equation for a DC motor is:",
    "a": "Eb = V - IaRa",
    "opts": ["Eb = V - IaRa", "Eb = V + IaRa", "Eb = V x Ia", "Eb = V / Ia"],
    "exp": "Back EMF equals supply voltage minus the drop across the armature's own resistance. This is simply Kirchhoff's Voltage Law applied to the armature circuit, with V used partly to overcome Eb and partly to drive Ia through Ra.",
    "cat": "BACKEMF",
    "id": "F10_014"
  },
  {
    "q": "Rearranging the back EMF equation to solve for the supply voltage gives:",
    "a": "V = Eb + IaRa",
    "opts": ["V = Eb + IaRa", "V = Eb - IaRa", "V = Eb / Ra", "V = Eb x Ia x Ra"],
    "exp": "Rearranging Eb = V - IaRa gives V = Eb + IaRa. This is exactly KVL around the armature loop: supply voltage equals the back EMF plus the resistive drop.",
    "cat": "BACKEMF",
    "id": "F10_015"
  },
  {
    "q": "A DC motor is supplied at 220 V, draws an armature current of 20 A, and has an armature resistance of 0.5 ohm. What is the back EMF?",
    "a": "210 V",
    "opts": ["210 V", "230 V", "220 V", "200 V"],
    "exp": "Eb = V - IaRa = 220 - (20 x 0.5) = 220 - 10 = 210 V. Adding the drop instead of subtracting it gives the wrong figure of 230 V, and forgetting the drop entirely gives 220 V.",
    "cat": "BACKEMF",
    "id": "F10_016"
  },
  {
    "q": "A DC motor is supplied at 110 V, draws an armature current of 15 A, and has an armature resistance of 0.4 ohm. What is the back EMF?",
    "a": "104 V",
    "opts": ["104 V", "116 V", "6 V", "110 V"],
    "exp": "Eb = V - IaRa = 110 - (15 x 0.4) = 110 - 6 = 104 V. The answer 6 V is only the IaRa drop itself, not the back EMF, and 116 V comes from adding the drop instead of subtracting it.",
    "cat": "BACKEMF",
    "id": "F10_017"
  },
  {
    "q": "Back EMF is related to speed and flux by Eb = k x phi x N. Which two quantities does this show back EMF is directly proportional to?",
    "a": "The field flux and the armature speed",
    "opts": [
      "The field flux and the armature speed",
      "The armature resistance and the supply voltage",
      "The armature current and the field flux",
      "The supply voltage and the armature speed only"
    ],
    "exp": "Eb = k x phi x N shows back EMF rising with either more flux or higher speed. This relationship is the basis of both the self-regulating action of the motor and all three methods of speed control.",
    "cat": "BACKEMF",
    "id": "F10_018"
  },
  {
    "q": "A running DC shunt motor suddenly has a mechanical load thrown onto its shaft. What is the correct sequence of events that follows?",
    "a": "The motor momentarily slows, back EMF falls, (V minus Eb) increases, armature current rises, and the extra current supplies the extra torque needed",
    "opts": [
      "The motor momentarily slows, back EMF falls, (V minus Eb) increases, armature current rises, and the extra current supplies the extra torque needed",
      "The supply voltage automatically increases to match the new load",
      "The armature current falls because the motor is working harder against the load",
      "The back EMF rises immediately to cancel out the extra load torque"
    ],
    "exp": "This is the self-regulating action explained from first principles: load slows the motor slightly, a slower armature induces less back EMF, a smaller Eb leaves a larger (V - Eb) across Ra, so Ia rises automatically, and since torque is proportional to Ia, the motor supplies exactly the torque the load demands, all without any external control action.",
    "cat": "BACKEMF",
    "id": "F10_019"
  },
  {
    "q": "Torque developed by a DC motor is given by T = k x phi x Ia. What does this show?",
    "a": "Torque is proportional to both the field flux and the armature current",
    "opts": [
      "Torque is proportional to both the field flux and the armature current",
      "Torque is proportional to speed and inversely proportional to flux",
      "Torque depends only on the supply voltage, not on current",
      "Torque is proportional to armature resistance"
    ],
    "exp": "Torque rises with more field flux or more armature current. This is why a series motor, whose flux itself rises with load current, produces such high starting torque, since both factors in T = k x phi x Ia are increasing together.",
    "cat": "BACKEMF",
    "id": "F10_020"
  },
  {
    "q": "At the instant a DC motor is switched on from standstill, what is the back EMF?",
    "a": "Zero, because speed N is zero and Eb = k x phi x N",
    "opts": [
      "Zero, because speed N is zero and Eb = k x phi x N",
      "Equal to the full supply voltage",
      "Equal to half the supply voltage",
      "Undefined until the motor reaches full speed"
    ],
    "exp": "At standstill N = 0, so Eb = k x phi x 0 = 0. There is no back EMF at all to oppose the supply, which is exactly why starting current is so large: the full supply voltage is left to drive current through only the armature's own very low resistance.",
    "cat": "BACKEMF",
    "id": "F10_021"
  },
  {
    "q": "A DC motor with an armature resistance of 0.5 ohm is connected directly across a 220 V supply with no starter. What current flows at the instant of starting?",
    "a": "440 A",
    "opts": ["440 A", "110 A", "0.44 A", "2.27 A"],
    "exp": "At standstill Eb = 0, so Ia = V / Ra = 220 / 0.5 = 440 A. This illustrates, with real numbers, why starting current without a starter can be dangerously large: it is limited only by the armature's own very low resistance, with no back EMF opposing it at all.",
    "cat": "BACKEMF",
    "id": "F10_022"
  },
  {
    "q": "Why must a DC motor of any real size be started through external resistance rather than connected straight to the supply?",
    "a": "At standstill there is no back EMF, so unrestricted current would be large enough to damage the commutator, brushes and winding insulation",
    "opts": [
      "At standstill there is no back EMF, so unrestricted current would be large enough to damage the commutator, brushes and winding insulation",
      "The supply voltage itself is too unstable to connect directly",
      "Direct connection would reverse the direction of rotation",
      "The field winding cannot handle full voltage until the motor is turning"
    ],
    "exp": "The starter's job is to limit the starting current, since Ra alone is far too low a resistance to hold current to a safe value across the full supply. The field winding is designed to run continuously on full supply voltage, so that is not the issue.",
    "cat": "BACKEMF",
    "id": "F10_023"
  },
  {
    "q": "Is back EMF a concept unique to DC motors, or does something equivalent occur in an AC induction motor?",
    "a": "An equivalent effect occurs in the induction motor's rotor: the rotating stator field induces an EMF in the rotor, and by Lenz's law it opposes the relative motion causing it, falling as slip falls with rising speed",
    "opts": [
      "An equivalent effect occurs in the induction motor's rotor: the rotating stator field induces an EMF in the rotor, and by Lenz's law it opposes the relative motion causing it, falling as slip falls with rising speed",
      "Back EMF is unique to DC motors and has no equivalent in any AC machine",
      "An induction motor has a literal back EMF equal to Eb = V - IaRa applied to its stator winding",
      "The equivalent in an induction motor is the stator's own supply voltage, which stays constant regardless of speed"
    ],
    "exp": "This is a deliberate trap connecting DC and AC theory. The same underlying Lenz's law principle applies: as an induction motor speeds up, slip falls, less rotor EMF is induced, less rotor current flows, and correspondingly less stator current is drawn, the AC equivalent of the DC back EMF story, even though the mechanism (induction across an air gap with slip, not a commutator) is different.",
    "cat": "BACKEMF",
    "id": "F10_024"
  },
  {
    "q": "A DC shunt motor (constant flux) has a back EMF of 200 V at a speed of 1000 RPM. If the back EMF falls to 180 V, what is the new speed?",
    "a": "900 RPM",
    "opts": ["900 RPM", "1111 RPM", "800 RPM", "1000 RPM"],
    "exp": "With flux held constant, Eb = k x phi x N means N is directly proportional to Eb. N2 = N1 x (Eb2 / Eb1) = 1000 x (180 / 200) = 900 RPM. This proportionality only holds when phi is genuinely constant, as in a shunt motor with a fixed field setting.",
    "cat": "BACKEMF",
    "id": "F10_025"
  },

  /* ═══════════ TYPES OF DC MOTOR ═══════════ */
  {
    "q": "In a DC shunt motor, how is the field winding connected relative to the armature?",
    "a": "In parallel with the armature, across the same supply",
    "opts": [
      "In parallel with the armature, across the same supply",
      "In series with the armature, carrying the full load current",
      "Connected only during starting, then disconnected",
      "Connected to a separate, lower voltage supply"
    ],
    "exp": "The shunt field is wired in parallel with the armature. Because it sees a constant voltage, its current and therefore its flux stay essentially constant regardless of load, which is the root cause of the shunt motor's flat speed characteristic.",
    "cat": "TYPES",
    "id": "F10_026"
  },
  {
    "q": "What is the characteristic speed behaviour of a DC shunt motor as load increases from no load to full load?",
    "a": "Speed stays almost constant",
    "opts": [
      "Speed stays almost constant",
      "Speed falls sharply",
      "Speed rises sharply",
      "Speed drops to zero"
    ],
    "exp": "With flux held nearly constant by the parallel-connected field, speed N = Eb / (k phi) depends almost entirely on Eb, which itself only drops slightly with load. The result is an almost flat speed-load characteristic, the shunt motor's defining feature.",
    "cat": "TYPES",
    "id": "F10_027"
  },
  {
    "q": "In a DC series motor, how is the field winding constructed and connected?",
    "a": "In series with the armature, carrying the full load current, wound with few turns of heavy conductor",
    "opts": [
      "In series with the armature, carrying the full load current, wound with few turns of heavy conductor",
      "In parallel with the armature, wound with many turns of fine wire",
      "Connected across a separate constant voltage supply",
      "Built from permanent magnets rather than a wound field"
    ],
    "exp": "The series field carries the same current as the armature, so it must be wound from heavy conductor with few turns, unlike the many fine turns of a shunt field. This series connection means flux rises directly with load current.",
    "cat": "TYPES",
    "id": "F10_028"
  },
  {
    "q": "Why does a series motor produce such high starting torque compared to a shunt motor?",
    "a": "Since field current equals armature current, flux rises with load, and torque T = k phi Ia rises roughly with the square of current",
    "opts": [
      "Since field current equals armature current, flux rises with load, and torque T = k phi Ia rises roughly with the square of current",
      "Its armature resistance is much lower than a shunt motor's",
      "Its commutator has more segments than a shunt motor's",
      "Its field winding operates at a much higher voltage than a shunt motor's"
    ],
    "exp": "In a series motor, both phi and Ia in T = k phi Ia grow together as current rises, so torque grows roughly with the square of current, at least until the iron saturates. This is the direct consequence of field and armature sharing the same current.",
    "cat": "TYPES",
    "id": "F10_029"
  },
  {
    "q": "Why must a series motor never be started or run unloaded?",
    "a": "At light or no load, flux collapses toward a small residual value, and since N = Eb / (k phi), speed rises without a natural limit, a destructive condition called racing",
    "opts": [
      "At light or no load, flux collapses toward a small residual value, and since N = Eb / (k phi), speed rises without a natural limit, a destructive condition called racing",
      "The armature would overheat instantly with no load current flowing",
      "The commutator would spark continuously with no load applied",
      "The starter's no-volt coil would fail to hold the handle at run"
    ],
    "exp": "With no load, armature current, and therefore field current and flux, fall toward zero. Since speed is inversely proportional to a collapsing flux, speed climbs without the mechanical load there to hold it back, a condition that can destroy the motor mechanically. This is why a series motor is always coupled through a solid or geared drive, never a belt that could slip or snap.",
    "cat": "TYPES",
    "id": "F10_030"
  },
  {
    "q": "Why must a series motor always be coupled to its load through a solid or geared connection rather than a belt?",
    "a": "If the belt slipped or broke, the motor would suddenly lose its load and race to a potentially destructive speed",
    "opts": [
      "If the belt slipped or broke, the motor would suddenly lose its load and race to a potentially destructive speed",
      "Belts cannot transmit the very high starting torque a series motor produces",
      "A belt drive would reverse the direction of rotation unpredictably",
      "Belts are not rated for the low speed a series motor typically runs at"
    ],
    "exp": "The danger is specifically the loss-of-load scenario: a slipping or broken belt removes the mechanical load instantly, and with flux collapsing at light load, the motor races. A solid or geared coupling cannot slip away and leave the motor suddenly unloaded.",
    "cat": "TYPES",
    "id": "F10_031"
  },
  {
    "q": "A cumulative compound DC motor has:",
    "a": "Both a shunt field and a series field on the same poles, with the two fields aiding each other",
    "opts": [
      "Both a shunt field and a series field on the same poles, with the two fields aiding each other",
      "Only a series field, but with twice the normal number of turns",
      "A shunt field on one set of poles and a series field on a separate set of poles",
      "Two identical shunt fields connected in parallel with each other"
    ],
    "exp": "A cumulative compound motor combines a shunt field and a series field on the same poles, aiding each other, giving series-like starting torque while the shunt field alone maintains enough flux to prevent racing at light load.",
    "cat": "TYPES",
    "id": "F10_032"
  },
  {
    "q": "Which type of DC motor is best suited to driving a windlass or crane, where very high starting torque against a heavy stationary load matters most?",
    "a": "Series motor",
    "opts": ["Series motor", "Shunt motor", "Compound motor", "Permanent magnet motor"],
    "exp": "The series motor's very high starting torque, from flux rising with load current, suits winches, windlasses and cranes, where the load is heaviest right at the moment of starting and eases as motion begins.",
    "cat": "TYPES",
    "id": "F10_033"
  },
  {
    "q": "Which type of DC motor is best suited to a fan, blower or machine tool where steady, load-independent speed matters?",
    "a": "Shunt motor",
    "opts": ["Shunt motor", "Series motor", "Cumulative compound motor", "None; DC motors cannot hold steady speed"],
    "exp": "The shunt motor's almost constant speed from no load to full load, arising from its nearly constant field flux, is exactly what fans, blowers and machine tools need. This makes shunt the baseline the other two types are compared against.",
    "cat": "TYPES",
    "id": "F10_034"
  },
  {
    "q": "Why is a cumulative compound motor, rather than a pure series motor, chosen for a cargo winch that must sometimes reel in slack wire with no load on the hook?",
    "a": "The shunt field component maintains enough flux to prevent racing when unloaded, while the series field still gives strong starting torque to break away a heavy load",
    "opts": [
      "The shunt field component maintains enough flux to prevent racing when unloaded, while the series field still gives strong starting torque to break away a heavy load",
      "A compound motor is cheaper to manufacture than a pure series motor",
      "A compound motor requires no starter, unlike a series motor",
      "A compound motor runs on a lower supply voltage than a series motor"
    ],
    "exp": "The cumulative compound motor's shunt field is what makes it inherently safe to run unloaded, a pure series motor is not, while its series field still delivers the high starting torque needed to break a heavy load free. This dual behaviour is exactly why it suits cargo winches.",
    "cat": "TYPES",
    "id": "F10_035"
  },

  /* ═══════════ SPEED CONTROL ═══════════ */
  {
    "q": "All three methods of DC motor speed control follow directly from which equation?",
    "a": "N = Eb / (k x phi) = (V - IaRa) / (k x phi)",
    "opts": [
      "N = Eb / (k x phi) = (V - IaRa) / (k x phi)",
      "P = V x I",
      "T = k x phi x Ia",
      "Q = I x t"
    ],
    "exp": "Only two things on the right hand side of this speed equation can be manipulated from outside the machine: the flux phi, and the terms making up Eb (the supply voltage V and the armature drop IaRa). That gives exactly the three control methods: field control, armature resistance control, and voltage control.",
    "cat": "SPEEDCONTROL",
    "id": "F10_036"
  },
  {
    "q": "In field control speed regulation, reducing the shunt field current has what effect on speed, and why?",
    "a": "Speed increases, because N is inversely proportional to phi and reducing field current reduces phi",
    "opts": [
      "Speed increases, because N is inversely proportional to phi and reducing field current reduces phi",
      "Speed decreases, because a weaker field always slows the armature down",
      "Speed stays unchanged, since field current does not affect speed",
      "Speed becomes unstable and cannot be predicted"
    ],
    "exp": "From N = Eb / (k phi), a smaller phi in the denominator means a larger N for a given Eb. This is why field control is used to raise speed above base speed, not below it, and why weakening the field too far risks the motor racing.",
    "cat": "SPEEDCONTROL",
    "id": "F10_037"
  },
  {
    "q": "Why is field control considered a compact, low power way to control speed?",
    "a": "The control rheostat only carries the small field current, not the heavy armature current",
    "opts": [
      "The control rheostat only carries the small field current, not the heavy armature current",
      "It requires no rheostat at all, only a switch",
      "It works equally well above and below base speed",
      "It dissipates no power anywhere in the circuit"
    ],
    "exp": "Because the field winding carries only a small current compared to the armature, the field rheostat can be a comparatively small, low power component. Field control is limited to speeds above base speed, and it does dissipate some power in the rheostat, just far less than an armature circuit rheostat would.",
    "cat": "SPEEDCONTROL",
    "id": "F10_038"
  },
  {
    "q": "In armature resistance control, why is this method considered inherently wasteful compared to voltage control?",
    "a": "The added resistance dissipates power as heat proportional to Ia squared at every speed below full speed",
    "opts": [
      "The added resistance dissipates power as heat proportional to Ia squared at every speed below full speed",
      "It requires a Ward Leonard set, which is expensive to install",
      "It can only reduce speed by exactly half, never by smaller increments",
      "It damages the commutator every time the resistance is adjusted"
    ],
    "exp": "The extra series resistance reduces Eb (and so speed) by burning off power continuously as I squared R heat, which is why it suits starting duty or intermittent low power use rather than continuous variable speed running. A Ward Leonard set is associated with voltage control, not armature resistance control.",
    "cat": "SPEEDCONTROL",
    "id": "F10_039"
  },
  {
    "q": "What is varied in voltage control (armature voltage control) of a DC motor, and what was the traditional method of achieving it?",
    "a": "The supply voltage applied directly to the armature is varied, traditionally using a Ward Leonard set",
    "opts": [
      "The supply voltage applied directly to the armature is varied, traditionally using a Ward Leonard set",
      "The field current is varied, traditionally using a series rheostat",
      "The armature resistance is varied, traditionally using carbon pile resistors",
      "The commutator brush position is physically shifted"
    ],
    "exp": "Voltage control varies V directly, changing Eb and therefore N smoothly without lossy resistance. The Ward Leonard set, a dedicated DC generator whose output feeds the motor armature, was the traditional way to do this; a modern installation uses a controlled rectifier or DC-DC converter instead.",
    "cat": "SPEEDCONTROL",
    "id": "F10_040"
  },
  {
    "q": "Which speed control method gives efficient, smooth control both above and below base speed?",
    "a": "Voltage control",
    "opts": ["Voltage control", "Field control", "Armature resistance control", "None of the three methods can work below base speed"],
    "exp": "Field control only raises speed above base speed, and armature resistance control only reduces speed below base speed while wasting power. Voltage control, by varying the armature supply directly, achieves efficient control across both ranges, which is why it is the method used wherever DC motors still do variable speed duty today.",
    "cat": "SPEEDCONTROL",
    "id": "F10_041"
  },
  {
    "q": "Why can field control not be used to reduce a series motor's speed by weakening its own series field without care?",
    "a": "Weakening a series field too far risks the same racing condition that occurs at light load on a series motor",
    "opts": [
      "Weakening a series field too far risks the same racing condition that occurs at light load on a series motor",
      "A series motor has no field winding to weaken in the first place",
      "Field control physically cannot be wired onto a series motor",
      "Weakening the series field would reverse the direction of rotation"
    ],
    "exp": "Because the series field is the same winding that carries armature current, deliberately weakening it removes the very thing that limits speed on a series motor, echoing the racing danger already established for unloaded series operation.",
    "cat": "SPEEDCONTROL",
    "id": "F10_042"
  },

  /* ═══════════ COMMUTATION ═══════════ */
  {
    "q": "What is the commutator, functionally?",
    "a": "A mechanical rectifier that reverses the connection between each armature coil and the fixed brushes at the instant that coil's current needs to reverse",
    "opts": [
      "A mechanical rectifier that reverses the connection between each armature coil and the fixed brushes at the instant that coil's current needs to reverse",
      "A set of slip rings that maintain a fixed, unchanging connection to the armature winding",
      "A device that regulates the supply voltage delivered to the field winding",
      "A safety device that disconnects the motor on overload"
    ],
    "exp": "The commutator lets the winding carry internally alternating current, reversing each coil's current as it crosses from one pole to the next, while the brushes always see current flowing in a consistent direction. This is different from a slip ring, which maintains a fixed connection and would simply pass the alternating winding current straight out, as on an AC alternator.",
    "cat": "COMMUT",
    "id": "F10_043"
  },
  {
    "q": "Why must the current in an armature coil reverse direction every time it crosses from one pole to the next?",
    "a": "For the force on the coil to keep contributing torque in the same rotational direction as it passes under alternating N and S poles",
    "opts": [
      "For the force on the coil to keep contributing torque in the same rotational direction as it passes under alternating N and S poles",
      "To prevent the coil from overheating due to continuous current flow",
      "To allow the brushes to make contact with a fresh commutator segment",
      "Because the field winding current itself reverses at the same moment"
    ],
    "exp": "Without reversal, the force on the coil would reverse direction relative to rotation every time it crossed to the opposite pole, cancelling torque instead of adding to it. The reversal is what keeps every coil's contribution pulling the shaft the same way around.",
    "cat": "COMMUT",
    "id": "F10_044"
  },
  {
    "q": "Why do brushes spark during commutation?",
    "a": "If a coil's current is not brought cleanly to zero and reversed within the brief commutation period, it is interrupted while still carrying current, producing an arc, the same physics as breaking any inductive circuit at a switch",
    "opts": [
      "If a coil's current is not brought cleanly to zero and reversed within the brief commutation period, it is interrupted while still carrying current, producing an arc, the same physics as breaking any inductive circuit at a switch",
      "Sparking is caused by dirt or oil contamination on the commutator surface, unrelated to current",
      "Sparking only occurs if the brushes are made from the wrong grade of carbon",
      "Sparking happens because the commutator segments are not perfectly circular"
    ],
    "exp": "The moment a coil is bridged by a brush is the commutation period, during which its current must be brought to zero and reversed. If that does not happen cleanly, the abrupt interruption of current in an inductive coil produces a spark, exactly as with any inductive circuit broken at a switch. Contamination and out-of-round segments can make commutation worse, but they are not the underlying cause.",
    "cat": "COMMUT",
    "id": "F10_045"
  },
  {
    "q": "The 'commutation period' refers to:",
    "a": "The brief moment a coil is short circuited by a brush bridging two adjacent commutator segments",
    "opts": [
      "The brief moment a coil is short circuited by a brush bridging two adjacent commutator segments",
      "The total time the motor takes to reach full running speed",
      "The interval between routine brush replacements",
      "The time taken for the field current to build up to full value"
    ],
    "exp": "Commutation happens each time a brush momentarily bridges two adjacent segments, briefly short circuiting the coil connected between them, which is exactly when that coil's current must reverse cleanly to avoid sparking.",
    "cat": "COMMUT",
    "id": "F10_046"
  },
  {
    "q": "Which of the following does NOT directly help keep commutation clean and sparkless?",
    "a": "Increasing the supply voltage to the field winding",
    "opts": [
      "Increasing the supply voltage to the field winding",
      "Correct brush position",
      "Correct brush pressure and material",
      "Interpoles"
    ],
    "exp": "Brush position, pressure, material and interpoles all exist to keep commutation clean. Simply raising field voltage does nothing to address the timing of coil current reversal at the brushes, and is not one of the recognised remedies for sparking.",
    "cat": "COMMUT",
    "id": "F10_047"
  },

  /* ═══════════ ARMATURE REACTION ═══════════ */
  {
    "q": "What is armature reaction?",
    "a": "The distortion and weakening of the main field caused by the magnetic field produced by the armature's own load current",
    "opts": [
      "The distortion and weakening of the main field caused by the magnetic field produced by the armature's own load current",
      "The mechanical vibration of the armature at high speed",
      "The resistance the armature offers to the starting current",
      "The reaction torque that tries to spin the field poles backward"
    ],
    "exp": "Armature current itself produces a magnetic field, by the same physics that makes the motor turn in the first place, and that field combines with and distorts the main field winding's flux. This combined-field effect is armature reaction, not a mechanical or resistive phenomenon.",
    "cat": "ARMREACT",
    "id": "F10_048"
  },
  {
    "q": "One effect of armature reaction is that the magnetic neutral axis shifts away from the geometric axis where the brushes sit. What problem does this cause?",
    "a": "Coils are commutated while still carrying significant EMF, directly causing sparking",
    "opts": [
      "Coils are commutated while still carrying significant EMF, directly causing sparking",
      "The armature begins rotating in the opposite direction",
      "The field winding overheats and burns out",
      "The commutator segments become permanently short circuited"
    ],
    "exp": "If brushes stay on the geometric axis while the true magnetic neutral axis has shifted due to the distorted combined field, commutation happens at the wrong moment for each coil, while it still carries significant EMF, and that mistimed interruption is a direct cause of sparking.",
    "cat": "ARMREACT",
    "id": "F10_049"
  },
  {
    "q": "The second effect of armature reaction, demagnetisation, occurs because:",
    "a": "Pole face regions where armature reaction adds to the main flux saturate and cannot add proportionally more, while regions where it subtracts freely lose flux, giving a net reduction in total flux",
    "opts": [
      "Pole face regions where armature reaction adds to the main flux saturate and cannot add proportionally more, while regions where it subtracts freely lose flux, giving a net reduction in total flux",
      "The armature current physically erases the residual magnetism in the poles over time",
      "The field winding insulation breaks down under armature current",
      "The commutator segments lose their copper plating"
    ],
    "exp": "Because the iron works on its saturation curve, the pole regions being strengthened by armature reaction cannot gain flux proportionally, while the regions being weakened lose it freely, giving a small but real net reduction in total flux as load rises. This is a magnetic saturation effect, not physical damage to the poles or commutator.",
    "cat": "ARMREACT",
    "id": "F10_050"
  },
  {
    "q": "How does interpoles (commutating poles) correct the effects of armature reaction, and what is the limit of what they fix?",
    "a": "They induce an EMF in the coil undergoing commutation to cancel the shifted neutral axis effect, correcting commutation only, not field distortion across the whole pole face",
    "opts": [
      "They induce an EMF in the coil undergoing commutation to cancel the shifted neutral axis effect, correcting commutation only, not field distortion across the whole pole face",
      "They physically rotate the main field poles to track the shifted neutral axis",
      "They reduce the armature current directly, preventing armature reaction from occurring at all",
      "They correct field distortion across the entire pole face, making compensating windings unnecessary on any machine"
    ],
    "exp": "Interpoles are small poles between the main poles, wound with a few turns of heavy wire and connected in series with the armature so their strength automatically tracks load. Their job is narrow, restoring clean commutation at the brushes, but they do not correct the distortion across the whole pole face; that needs compensating windings on larger or more heavily loaded machines.",
    "cat": "ARMREACT",
    "id": "F10_051"
  },
  {
    "q": "Where are compensating windings physically located, and how are they connected?",
    "a": "Embedded in slots cut into the main pole faces, connected in series with the armature",
    "opts": [
      "Embedded in slots cut into the main pole faces, connected in series with the armature",
      "Wound around the commutator itself, connected in parallel with the brushes",
      "Mounted on the shaft between the armature and the bearings",
      "Wound around the yoke, connected directly across the supply"
    ],
    "exp": "Compensating windings sit in slots cut into the main pole faces and are series-connected so their magnetomotive force tracks load current, positioned to directly oppose the armature's field across the whole pole face, a more complete fix than interpoles alone, used on large or heavily loaded machines.",
    "cat": "ARMREACT",
    "id": "F10_052"
  },

  /* ═══════════ 3-POINT STARTER ═══════════ */
  {
    "q": "Why does a shunt or compound DC motor require a starter such as the three point starter?",
    "a": "Because there is no back EMF at standstill, so the motor must never be connected directly to full supply voltage",
    "opts": [
      "Because there is no back EMF at standstill, so the motor must never be connected directly to full supply voltage",
      "Because the field winding cannot be energised without a starter present",
      "Because the commutator requires a warm-up period before it can carry current",
      "Because starters are a legal requirement unrelated to the motor's electrical behaviour"
    ],
    "exp": "This follows directly from the back EMF discussion: with no back EMF at standstill, unrestricted current would damage the machine, so a starter's resistance stands in for the missing back EMF until the motor builds up its own.",
    "cat": "STARTER",
    "id": "F10_053"
  },
  {
    "q": "What do the three terminals L, A and F on a three point starter represent?",
    "a": "Line (positive supply), Armature, and Field",
    "opts": [
      "Line (positive supply), Armature, and Field",
      "Load, Alarm, and Fuse",
      "Line, Alternator, and Frame",
      "Low speed, Average speed, and Full speed"
    ],
    "exp": "L is the line (positive supply) terminal, A connects to the armature, and F connects to the field winding. The pivoted handle moves across resistance studs between these connections as it goes from OFF to RUN.",
    "cat": "STARTER",
    "id": "F10_054"
  },
  {
    "q": "As the three point starter handle moves from OFF toward RUN, what happens to the field winding's connection?",
    "a": "It stays connected directly across full supply throughout, from the first movement of the handle",
    "opts": [
      "It stays connected directly across full supply throughout, from the first movement of the handle",
      "It is progressively connected in steps, the same way the armature resistance is cut out",
      "It remains disconnected until the handle reaches the RUN position",
      "It is connected in series with the starting resistance along with the armature"
    ],
    "exp": "The field winding is energised with full current from the moment the handle starts moving, and stays that way, because a shunt field left without current risks the racing condition. Only the armature circuit resistance is cut out progressively as the handle moves.",
    "cat": "STARTER",
    "id": "F10_055"
  },
  {
    "q": "What does the no-volt coil (NVC) do in a three point starter?",
    "a": "It magnetically holds the handle at RUN once reached, and releases it to spring back to OFF on loss of supply or loss of field",
    "opts": [
      "It magnetically holds the handle at RUN once reached, and releases it to spring back to OFF on loss of supply or loss of field",
      "It senses armature current and trips the handle to OFF on overload",
      "It cuts the starting resistance out in fixed timed steps",
      "It boosts the field current during starting to increase torque"
    ],
    "exp": "The NVC is wired in the field circuit and, once the handle reaches RUN, magnetically holds it there against the spring. Losing supply or field current demagnetises the NVC, letting the spring return the handle to OFF, guaranteeing a fresh start through full resistance next time. Sensing armature current and tripping on overload is the overload coil's job, not the NVC's.",
    "cat": "STARTER",
    "id": "F10_056"
  },
  {
    "q": "What does the overload coil (OLR) do in a three point starter?",
    "a": "Above a set overload threshold, it pulls in an armature that short circuits the no-volt coil, releasing the handle to OFF",
    "opts": [
      "Above a set overload threshold, it pulls in an armature that short circuits the no-volt coil, releasing the handle to OFF",
      "It directly opens the main supply circuit breaker on overload",
      "It reduces field current to slow the motor down under overload",
      "It has no effect under any operating condition and exists only as a backup"
    ],
    "exp": "The overload coil carries armature current and has no effect under normal load. Above the threshold, it pulls in and short circuits the NVC, which then loses its hold exactly as though supply had failed, and the spring returns the handle to OFF before sustained overcurrent can damage the windings.",
    "cat": "STARTER",
    "id": "F10_057"
  },
  {
    "q": "While a shunt motor is running normally from a three point starter, the field circuit develops an open circuit. What happens?",
    "a": "The no-volt coil, wired in the field circuit, loses its magnetism and the spring returns the handle to OFF",
    "opts": [
      "The no-volt coil, wired in the field circuit, loses its magnetism and the spring returns the handle to OFF",
      "The motor continues running normally since the armature circuit is unaffected",
      "The overload coil trips because armature current suddenly falls to zero",
      "The motor reverses direction because the field polarity is lost"
    ],
    "exp": "Because the NVC is wired in the field circuit, losing field current demagnetises it exactly as a loss of supply would, and the spring returns the handle to OFF. This is the same protective mechanism doing double duty: undervoltage protection and loss-of-field protection together, guarding against exactly the fault that would otherwise let the motor race.",
    "cat": "STARTER",
    "id": "F10_058"
  },
  {
    "q": "With the three point starter handle at the OFF position, what is the state of the starting resistance and the motor?",
    "a": "Full starting resistance is in the armature circuit, and the motor is disconnected",
    "opts": [
      "Full starting resistance is in the armature circuit, and the motor is disconnected",
      "No resistance is in circuit, and the motor is connected directly to full supply",
      "Half the starting resistance is in circuit, ready for a quick restart",
      "The field is disconnected but the armature is already across full supply"
    ],
    "exp": "At OFF the handle sits with full resistance in the armature circuit and the motor disconnected. Moving toward RUN then cuts the resistance out progressively as the field is energised from the very start of the movement.",
    "cat": "STARTER",
    "id": "F10_059"
  },
  {
    "q": "Why can a three point starter not be combined with field control speed regulation, and how does a four point starter solve this?",
    "a": "Weakening the field for speed control would starve the no-volt coil in a three point starter and drop the handle out; a four point starter moves the NVC onto its own protected branch across the line, independent of the field",
    "opts": [
      "Weakening the field for speed control would starve the no-volt coil in a three point starter and drop the handle out; a four point starter moves the NVC onto its own protected branch across the line, independent of the field",
      "A three point starter has no overload coil, while a four point starter adds one",
      "A three point starter cannot handle series motors, while a four point starter can",
      "A four point starter removes the no-volt coil entirely, relying only on the overload coil"
    ],
    "exp": "In a three point starter the NVC sits in the field circuit, so deliberately weakening the field for speed control also weakens the NVC's holding current, risking the handle dropping out unintentionally. A four point starter fixes this by giving the NVC its own branch straight across the line, so it no longer depends on field current at all.",
    "cat": "STARTER",
    "id": "F10_060"
  },

  /* ═══════════ DC ON BOARD TODAY ═══════════ */
  {
    "q": "Why is almost all modern main distribution on a ship AC rather than DC?",
    "a": "AC allows easy voltage transformation, along with rugged induction motors and easier fault breaking",
    "opts": [
      "AC allows easy voltage transformation, along with rugged induction motors and easier fault breaking",
      "AC motors are inherently simpler to control than DC motors",
      "AC can be stored more efficiently in batteries than DC",
      "AC systems never require any form of overcurrent protection"
    ],
    "exp": "Easy transformation via transformers, rugged induction motors, and easier fault current breaking are the reasons AC dominates modern shipboard distribution. AC cannot be stored in batteries at all, which is exactly why DC has retreated to, rather than been eliminated from, specific roles it suits.",
    "cat": "ONBOARD",
    "id": "F10_061"
  },
  {
    "q": "What is a commonly found nominal DC battery voltage aboard ship?",
    "a": "24 V DC, though larger emergency lighting or battery-only arrangements on some vessels use higher voltages such as 110 V or 220 V DC",
    "opts": [
      "24 V DC, though larger emergency lighting or battery-only arrangements on some vessels use higher voltages such as 110 V or 220 V DC",
      "440 V DC on every vessel without exception",
      "6 V DC, matching typical automotive practice",
      "There is no standard; DC battery voltage cannot be estimated at all"
    ],
    "exp": "24 V DC is a common nominal shipboard battery voltage, though larger emergency systems on some vessels use higher nominal voltages such as 110 V or 220 V DC. The exact voltage fitted varies by vessel and class society requirement and should be confirmed from the ship's own drawings rather than assumed.",
    "cat": "ONBOARD",
    "id": "F10_062"
  },
  {
    "q": "Which of the following is NOT typically a DC application still found aboard a modern ship?",
    "a": "Main propulsion switchboard distribution to accommodation lighting circuits",
    "opts": [
      "Main propulsion switchboard distribution to accommodation lighting circuits",
      "Engine and generator starting batteries",
      "Radio equipment, general alarm and fire detection panels on battery backup",
      "Control, alarm and PLC electronics fed from AC via rectifiers and chargers"
    ],
    "exp": "Main switchboard distribution to lighting and general accommodation loads is normally AC. Engine starting batteries, emergency radio/alarm/fire systems, and low voltage control electronics are the areas where DC genuinely remains standard on a modern ship.",
    "cat": "ONBOARD",
    "id": "F10_063"
  }

]);

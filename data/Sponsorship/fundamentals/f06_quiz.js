window.loadQuizzes("F06_Transformers", [

  /* ═══════════ PRINCIPLE ═══════════ */
  {
    "q": "What is the fundamental working principle of a transformer?",
    "a": "Mutual inductance",
    "opts": ["Self inductance", "Mutual inductance", "Electromagnetic repulsion", "Direct electrical conduction"],
    "exp": "A transformer transfers energy from primary to secondary purely through mutual inductance, the alternating flux set up by the primary links the secondary and induces an EMF in it. Self inductance is a coil inducing EMF in itself, which is not the mechanism here, and there is no direct electrical conduction between the windings at all.",
    "cat": "PRIN",
    "id": "F06_001"
  },
  {
    "q": "Can a transformer work on a steady DC supply?",
    "a": "No, because steady DC produces unchanging flux, and Faraday's Law needs changing flux to induce a secondary EMF",
    "opts": [
      "Yes, provided the DC voltage is high enough",
      "No, because steady DC produces unchanging flux, and Faraday's Law needs changing flux to induce a secondary EMF",
      "Yes, but only at very low DC voltages",
      "No, because DC frequency is too high for the core to follow"
    ],
    "exp": "Once switch-on transients settle, DC current produces a steady, unchanging flux in the core. Faraday's Law only induces EMF from a changing flux linkage, so secondary EMF collapses to zero. DC has zero frequency, not a high one, so the last option gets the reasoning backwards.",
    "cat": "PRIN",
    "id": "F06_002"
  },
  {
    "q": "What is the practical danger of applying sustained DC to a transformer primary winding?",
    "a": "The primary's low winding resistance offers little opposition to steady DC, risking a very high current and winding burnout",
    "opts": [
      "The core will demagnetise permanently within seconds",
      "The secondary winding will short circuit itself",
      "The primary's low winding resistance offers little opposition to steady DC, risking a very high current and winding burnout",
      "The transformer will begin stepping up the DC voltage uncontrollably"
    ],
    "exp": "Under AC, inductive reactance limits primary current, but that reactance only exists for changing current. With sustained DC there is no changing current, so only the winding's low resistance limits current, driving it dangerously high and risking burnout. This is exactly why DC-fed shipboard systems (F19) use switching power electronics instead of ordinary transformers.",
    "cat": "PRIN",
    "id": "F06_003"
  },
  {
    "q": "Which of these correctly describes a transformer as a machine?",
    "a": "A static machine with no moving parts",
    "opts": [
      "A static machine with no moving parts",
      "A rotating machine whose core turns slowly with the flux",
      "A machine with moving parts only in three-phase units",
      "A machine that requires a commutator to operate"
    ],
    "exp": "A transformer is defined as a static electrical machine, energy is transferred entirely through a changing magnetic field with no rotation and no moving parts, unlike a motor or alternator. Commutators belong to DC rotating machines, not transformers.",
    "cat": "PRIN",
    "id": "F06_004"
  },
  {
    "q": "Why is there no direct electrical connection between the primary and secondary of a standard two-winding transformer?",
    "a": "Energy transfer happens entirely through the shared alternating flux linking both windings, not through any conducting path between them",
    "opts": [
      "Because the secondary winding carries no current at all",
      "Energy transfer happens entirely through the shared alternating flux linking both windings, not through any conducting path between them",
      "Because the primary and secondary operate at different frequencies",
      "Because the core is made of an electrical insulator"
    ],
    "exp": "The two windings are magnetically coupled through the core but electrically isolated from each other, only the changing flux does the work of transferring energy. The core is iron, a magnetic conductor, not an electrical insulator, and both windings carry current at full load.",
    "cat": "PRIN",
    "id": "F06_005"
  },

  /* ═══════════ EMF EQUATION ═══════════ */
  {
    "q": "Which of the following is the correct transformer EMF equation?",
    "a": "E = 4.44 f Φm N",
    "opts": ["E = 4.44 f Φm N", "E = 2 π f L", "E = V - IR", "E = 1.11 f Φm N"],
    "exp": "The transformer EMF equation is E = 4.44 f Φm N, the same underlying relationship as the alternator EMF equation from F05. The value 1.11 is the form factor of a sine wave, not the coefficient in this formula, and 2πfL gives inductive reactance, a different quantity entirely.",
    "cat": "EMF",
    "id": "F06_006"
  },
  {
    "q": "Which two quantities are common to both the primary and secondary EMF equations of a transformer?",
    "a": "Frequency and maximum flux",
    "opts": ["Frequency and maximum flux", "Number of turns and winding resistance", "Voltage and current", "Core area and winding temperature"],
    "exp": "Both windings sit on the same core, so they share the same frequency f and the same maximum flux Φm. Only the turns count N differs between the primary and secondary equations, which is exactly what makes dividing the two equations useful for deriving the turns ratio.",
    "cat": "EMF",
    "id": "F06_007"
  },
  {
    "q": "Why can a transformer never change the supply frequency between primary and secondary?",
    "a": "The secondary EMF is induced by the same alternating flux the primary produces, so it must alternate at exactly that same frequency",
    "opts": [
      "The secondary EMF is induced by the same alternating flux the primary produces, so it must alternate at exactly that same frequency",
      "The core material physically fixes the frequency to 50 Hz",
      "Frequency is set by the secondary load, not by the primary supply",
      "A transformer only changes frequency when connected to a three-phase supply"
    ],
    "exp": "The flux in the shared core alternates at the primary supply frequency, and since the secondary EMF is induced by that same flux, it must alternate at the same frequency too. A transformer changes voltage and current, never frequency, a distinction interviewers frequently probe.",
    "cat": "EMF",
    "id": "F06_008"
  },
  {
    "q": "If supply frequency doubles while flux and turns stay the same, the induced EMF will:",
    "a": "Double",
    "opts": ["Double", "Halve", "Stay the same", "Become four times greater"],
    "exp": "E = 4.44 f Φm N shows EMF is directly proportional to frequency when flux and turns are held constant, so doubling f doubles E. This is why a transformer designed for 60 Hz cannot simply be run on 50 Hz without re-checking flux levels.",
    "cat": "EMF",
    "id": "F06_009"
  },

  /* ═══════════ TURNS RATIO ═══════════ */
  {
    "q": "The turns ratio of a transformer is expressed as:",
    "a": "a = N1/N2 = E1/E2",
    "opts": ["a = N1/N2 = E1/E2", "a = N1 x N2", "a = I1/I2 = E1/E2", "a = N1/N2 = I1/I2"],
    "exp": "Dividing the two EMF equations cancels the common 4.44fΦm term, leaving a = N1/N2 = E1/E2, a purely geometric relationship. Current transforms the opposite way, I1/I2 = N2/N1, which is the inverse of the voltage ratio, not the same ratio.",
    "cat": "RATIO",
    "id": "F06_010"
  },
  {
    "q": "A transformer has 1000 primary turns and 100 secondary turns. Primary voltage is 440 V. What is the secondary voltage?",
    "a": "44 V",
    "opts": ["440 V", "44 V", "4400 V", "4.4 V"],
    "exp": "E2 = E1 x (N2/N1) = 440 x (100/1000) = 44 V. This transformer has 10 times fewer secondary turns than primary, so it is a 10:1 step-down unit, and voltage steps down by exactly the same factor of 10.",
    "cat": "RATIO",
    "id": "F06_011"
  },
  {
    "q": "For the same 1000/100 turn transformer, the secondary current is measured at 30 A. Assuming an ideal transformer, what is the primary current?",
    "a": "3 A",
    "opts": ["300 A", "30 A", "3 A", "0.3 A"],
    "exp": "I1 = I2 x (N2/N1) = 30 x (100/1000) = 3 A. Current transforms inversely to turns ratio, so where voltage stepped down by 10, current steps up by 10 going from primary to secondary, meaning the primary carries only a tenth of the secondary current.",
    "cat": "RATIO",
    "id": "F06_012"
  },
  {
    "q": "For an ideal transformer, how does secondary current relate to the turns ratio compared to secondary voltage?",
    "a": "Current is inversely proportional to turns, exactly opposite to how voltage is directly proportional to turns",
    "opts": [
      "Current is inversely proportional to turns, exactly opposite to how voltage is directly proportional to turns",
      "Current and voltage both scale directly with the turns ratio",
      "Current stays constant regardless of the turns ratio",
      "Current scales with the square of the turns ratio"
    ],
    "exp": "Because input apparent power must equal output apparent power in an ideal transformer, current has to scale inversely with turns ratio while voltage scales directly with it. A step up in voltage is always paired with a step down in current, and vice versa.",
    "cat": "RATIO",
    "id": "F06_013"
  },
  {
    "q": "A transformer's secondary impedance Z2 is referred to the primary side using Z1 = a^2 x Z2. What does this mean practically for a fault on the low-voltage secondary?",
    "a": "The fault reflects back to the primary as a very different, much lower apparent impedance",
    "opts": [
      "The fault reflects back to the primary as a very different, much lower apparent impedance",
      "The fault has no effect on the primary side at all",
      "The fault impedance appears unchanged on the primary side",
      "The fault only affects the secondary winding resistance, never the primary"
    ],
    "exp": "Because impedance transforms by a^2, a fault impedance that looks small on the secondary appears scaled by a^2 when viewed from the primary. This impedance-transformation property is also deliberately exploited in audio and instrumentation matching transformers.",
    "cat": "RATIO",
    "id": "F06_014"
  },
  {
    "q": "Does an ideal transformer increase the electrical power delivered to the load?",
    "a": "No, apparent power in equals apparent power out, it trades voltage for current, never manufacturing extra energy",
    "opts": [
      "No, apparent power in equals apparent power out, it trades voltage for current, never manufacturing extra energy",
      "Yes, a step-up transformer increases power by the square of the turns ratio",
      "Yes, but only when the secondary is delta connected",
      "No, power actually decreases even in an ideal, lossless transformer"
    ],
    "exp": "A transformer is often loosely described as increasing power, which is wrong. It changes the voltage-to-current ratio, never the power itself, apparent power in equals apparent power out for an ideal machine, minus small real losses in a real one.",
    "cat": "RATIO",
    "id": "F06_015"
  },

  /* ═══════════ CONSTRUCTION ═══════════ */
  {
    "q": "What is the main purpose of a transformer's core?",
    "a": "To provide a low-reluctance path for flux, linking the primary and secondary windings tightly",
    "opts": [
      "To provide a low-reluctance path for flux, linking the primary and secondary windings tightly",
      "To carry the load current directly between primary and secondary",
      "To provide electrical insulation between the windings",
      "To store energy magnetically between load cycles"
    ],
    "exp": "The iron core gives flux an easy, low-reluctance path so it links both windings efficiently. Insulation between windings and core is a separate function, and no current path exists directly through the core between primary and secondary.",
    "cat": "CONSTR",
    "id": "F06_016"
  },
  {
    "q": "Why is a transformer's core built from thin, insulated laminations rather than a solid block of iron?",
    "a": "To break up the paths available for eddy currents, sharply cutting eddy current loss",
    "opts": [
      "To break up the paths available for eddy currents, sharply cutting eddy current loss",
      "To reduce the overall weight of the transformer",
      "To make the core easier to magnetise at low frequency",
      "To increase the hysteresis loss so the core reaches operating temperature faster"
    ],
    "exp": "Splitting the core into thin, individually insulated sheets confines circulating eddy currents to small loops within each sheet, sharply cutting the resulting loss. This is a construction detail essential to safe operation, not a weight-saving measure, and nobody wants to increase hysteresis loss deliberately.",
    "cat": "CONSTR",
    "id": "F06_017"
  },
  {
    "q": "What happens if a transformer core is left solid (unlaminated)?",
    "a": "It acts like a short-circuited single-turn secondary, with large circulating eddy currents that dissipate as destructive heat",
    "opts": [
      "It acts like a short-circuited single-turn secondary, with large circulating eddy currents that dissipate as destructive heat",
      "It simply produces a slightly lower secondary voltage than a laminated core",
      "It has no measurable effect on transformer performance",
      "It increases efficiency by reducing hysteresis loss"
    ],
    "exp": "A solid iron core sitting in an alternating flux behaves like a short-circuited single-turn secondary, large eddy currents circulate freely and dissipate as heat. This is not a minor manufacturing choice, an unlaminated power transformer core would overheat destructively within minutes.",
    "cat": "CONSTR",
    "id": "F06_018"
  },
  {
    "q": "What is the key difference in arrangement between core type and shell type transformer construction?",
    "a": "Core type has windings surrounding the core limbs, shell type has the core surrounding the windings",
    "opts": [
      "Core type has windings surrounding the core limbs, shell type has the core surrounding the windings",
      "Core type has no core material at all, only air gaps",
      "Shell type never uses laminated cores",
      "Core type is only used for control transformers, never for power transformers"
    ],
    "exp": "In core type construction the windings surround the core limbs, giving one flux path per limb. In shell type, the core surrounds the windings instead, providing two flux paths that split around them. Both types use laminated cores.",
    "cat": "CONSTR",
    "id": "F06_019"
  },
  {
    "q": "Which construction type gives better mechanical protection to the windings?",
    "a": "Shell type, because the core surrounds and protects the windings",
    "opts": [
      "Shell type, because the core surrounds and protects the windings",
      "Core type, because the windings surround and protect the core",
      "Neither type offers any mechanical protection",
      "Both types offer identical mechanical protection"
    ],
    "exp": "Shell type construction has the core surrounding the windings, giving them higher mechanical strength and protection, which is why it is common in smaller distribution and control transformers. Core type, with exposed windings around the limbs, is typically favoured for large power transformers instead.",
    "cat": "CONSTR",
    "id": "F06_020"
  },

  /* ═══════════ TYPES OF TRANSFORMERS ═══════════ */
  {
    "q": "A step-down transformer has N1/N2 greater than 1. What effect does this have?",
    "a": "Voltage steps down and current steps up",
    "opts": ["Voltage steps down and current steps up", "Voltage steps up and current steps down", "Both voltage and current step down together", "Neither voltage nor current changes"],
    "exp": "When N1/N2 is greater than 1 the secondary has fewer turns than the primary, so voltage steps down and, to conserve apparent power, current steps up in inverse proportion. A typical shipboard example is a 440 V to 220 V lighting transformer.",
    "cat": "TYPES",
    "id": "F06_021"
  },
  {
    "q": "What does an isolation transformer do?",
    "a": "Keeps the same voltage on both sides while electrically isolating the secondary circuit",
    "opts": [
      "Keeps the same voltage on both sides while electrically isolating the secondary circuit",
      "Steps voltage down sharply while joining primary and secondary electrically",
      "Steps voltage up to twice the primary value",
      "Removes the need for any core material"
    ],
    "exp": "An isolation transformer has a 1:1 turns ratio, so voltage is unchanged, and its purpose is purely the electrical isolation of the secondary circuit, useful for safety supplies to portable tools or sensitive electronics. It still has separate, magnetically-coupled windings like any two-winding transformer.",
    "cat": "TYPES",
    "id": "F06_022"
  },
  {
    "q": "What is an auto-transformer?",
    "a": "A transformer with a single winding, part of which is common to both the primary and secondary circuits",
    "opts": [
      "A transformer with a single winding, part of which is common to both the primary and secondary circuits",
      "A transformer with two completely separate windings and no shared connection",
      "A transformer that automatically adjusts its own turns ratio under computer control",
      "A transformer with three separate cores for three-phase operation"
    ],
    "exp": "An auto-transformer uses one tapped winding shared between primary and secondary, transferring some energy by direct electrical connection and the rest by the usual transformation principle. A conventional two-winding transformer keeps the two windings entirely separate, coupled only magnetically.",
    "cat": "TYPES",
    "id": "F06_023"
  },
  {
    "q": "Does an auto-transformer provide electrical isolation between primary and secondary, the way a two-winding transformer does?",
    "a": "No, because the windings are physically joined, a fault on one side can be conducted directly to the other side",
    "opts": [
      "Yes, isolation is identical to a two-winding transformer",
      "No, because the windings are physically joined, a fault on one side can be conducted directly to the other side",
      "Yes, but only when used as a step-down unit",
      "No, because auto-transformers have no core at all"
    ],
    "exp": "This is a genuinely important safety distinction. A two-winding transformer's windings are magnetically coupled but electrically separate, while an auto-transformer's shared winding means a fault can conduct straight across. It sacrifices isolation in exchange for being smaller, lighter and cheaper for a given rating.",
    "cat": "TYPES",
    "id": "F06_024"
  },
  {
    "q": "What is a common shipboard application for auto-transformers?",
    "a": "Motor soft-starting, such as star-delta and auto-transformer starters",
    "opts": [
      "Motor soft-starting, such as star-delta and auto-transformer starters",
      "Emergency battery charging circuits",
      "High-voltage insulation testing sets",
      "Radar and navigation signal isolation"
    ],
    "exp": "Auto-transformers are popular for motor starting duty precisely because their lack of isolation is not a safety concern there, and their smaller, cheaper construction for a given rating suits that application well (covered fully in F11). Isolation is needed for the other listed applications, ruling out an auto-transformer.",
    "cat": "TYPES",
    "id": "F06_025"
  },

  /* ═══════════ LOSSES ═══════════ */
  {
    "q": "Why does a transformer have no friction or windage loss, unlike a motor or alternator?",
    "a": "It has no rotating parts",
    "opts": ["It has no rotating parts", "It is always oil cooled", "It operates at unity power factor", "Its core is laminated"],
    "exp": "A transformer is a static machine with no moving parts, so mechanical losses like friction and windage, which only arise from rotation, simply do not exist for it. Its losses fall into exactly two categories instead: iron loss and copper loss.",
    "cat": "LOSS",
    "id": "F06_026"
  },
  {
    "q": "What is the key property of iron (core) loss?",
    "a": "It is essentially constant from no-load to full-load, since it depends on voltage and frequency, both held roughly constant",
    "opts": [
      "It is essentially constant from no-load to full-load, since it depends on voltage and frequency, both held roughly constant",
      "It rises with the square of the load current",
      "It is zero at no load and reaches a maximum only at full load",
      "It depends entirely on the winding resistance"
    ],
    "exp": "Iron loss depends on flux, which depends on supply voltage and frequency, both essentially constant regardless of load, so iron loss stays essentially constant too. It is copper loss, not iron loss, that rises with the square of load current and is near zero at no load.",
    "cat": "LOSS",
    "id": "F06_027"
  },
  {
    "q": "What is the key property of copper (I^2R) loss?",
    "a": "It varies with the square of the load current, near zero at no load and maximum at full load",
    "opts": [
      "It varies with the square of the load current, near zero at no load and maximum at full load",
      "It stays essentially constant regardless of load",
      "It depends only on supply frequency, not on current",
      "It is present even when the transformer is completely disconnected from any supply"
    ],
    "exp": "Copper loss is I^2R heating in the winding resistance, exactly the I^2R heating covered in F01, so it rises with the square of load current, near zero at no load and reaching its rated maximum at full load. That behaviour is the opposite of iron loss, which stays roughly constant with load.",
    "cat": "LOSS",
    "id": "F06_028"
  },
  {
    "q": "Iron loss is made up of which two components?",
    "a": "Hysteresis loss and eddy current loss",
    "opts": ["Hysteresis loss and eddy current loss", "Copper loss and windage loss", "Leakage loss and friction loss", "Skin effect loss and dielectric loss"],
    "exp": "Iron loss comprises hysteresis loss, from repeatedly reversing the core's magnetic domains each cycle, and eddy current loss, from circulating currents induced directly in the core iron by the changing flux. Copper loss and windage loss are unrelated categories, and windage does not even apply to a static machine.",
    "cat": "LOSS",
    "id": "F06_029"
  },
  {
    "q": "How is hysteresis loss in a transformer core reduced?",
    "a": "By using core material such as silicon steel with a narrow hysteresis loop",
    "opts": [
      "By using core material such as silicon steel with a narrow hysteresis loop",
      "By laminating the core into thin, insulated sheets",
      "By increasing the number of secondary turns",
      "By operating the transformer at a lower power factor"
    ],
    "exp": "Hysteresis loss is reduced by choosing a core material, silicon steel, with a narrow hysteresis loop, so less energy is lost reversing its magnetic domains each cycle. Lamination is the countermeasure for eddy current loss instead, a different mechanism entirely.",
    "cat": "LOSS",
    "id": "F06_030"
  },
  {
    "q": "Why does an unloaded (no-load) transformer still consume some power from the supply?",
    "a": "Iron loss is present continuously due to the alternating flux, regardless of whether any load current flows",
    "opts": [
      "Iron loss is present continuously due to the alternating flux, regardless of whether any load current flows",
      "Copper loss is at its maximum value at no load",
      "The secondary winding always draws rated current even unloaded",
      "No-load transformers actually consume zero power in practice"
    ],
    "exp": "Iron loss depends on the alternating flux set up by the applied voltage, which is present the moment the transformer is energised, whether or not any load is connected. Copper loss, by contrast, is near zero at no load since it depends on load current.",
    "cat": "LOSS",
    "id": "F06_031"
  },

  /* ═══════════ EFFICIENCY ═══════════ */
  {
    "q": "Transformer efficiency is calculated as:",
    "a": "Output Power / (Output Power + Iron Loss + Copper Loss)",
    "opts": [
      "Output Power / (Output Power + Iron Loss + Copper Loss)",
      "Input Power / Output Power",
      "Output Power / Input Current",
      "(Iron Loss + Copper Loss) / Output Power"
    ],
    "exp": "Efficiency is the output power divided by the output power plus both losses, expressed as a percentage. Inverting input over output would give a number greater than 1, which is not a valid efficiency figure.",
    "cat": "EFF",
    "id": "F06_032"
  },
  {
    "q": "A transformer delivers 50 kW output. Iron loss is 500 W and copper loss at this load is 800 W. What is the efficiency?",
    "a": "97.5% approximately",
    "opts": ["97.5% approximately", "98.7% approximately", "94.0% approximately", "50% approximately"],
    "exp": "Total loss = 500 + 800 = 1300 W = 1.3 kW. Efficiency = 50 / (50 + 1.3) = 50 / 51.3 = about 97.5%. Forgetting to convert the losses to kW before adding them to the 50 kW output is the most common slip on this calculation.",
    "cat": "EFF",
    "id": "F06_033"
  },
  {
    "q": "At what load does transformer efficiency reach its maximum?",
    "a": "Where copper loss equals iron loss",
    "opts": ["Where copper loss equals iron loss", "Always at exactly full load", "Always at exactly half load, regardless of the losses", "Where iron loss is twice the copper loss"],
    "exp": "Because iron loss stays essentially fixed while copper loss rises with the square of the load, total loss relative to output is minimised, and efficiency maximised, exactly where copper loss equals iron loss. This point is not fixed at half load, it depends on the specific iron and full-load copper loss figures.",
    "cat": "EFF",
    "id": "F06_034"
  },
  {
    "q": "A transformer has a full-load copper loss of 1200 W and an iron loss of 300 W. At what fraction of full load does maximum efficiency occur?",
    "a": "0.5, or 50% of full load",
    "opts": ["0.25, or 25% of full load", "0.5, or 50% of full load", "0.75, or 75% of full load", "1.0, or 100% of full load"],
    "exp": "The load fraction for maximum efficiency is x = sqrt(Iron Loss / Full-Load Copper Loss) = sqrt(300/1200) = sqrt(0.25) = 0.5, so maximum efficiency occurs at 50% of full load. Simply taking the ratio of the losses without the square root would wrongly give 0.25.",
    "cat": "EFF",
    "id": "F06_035"
  },
  {
    "q": "Why are transformers deliberately designed so their maximum-efficiency point falls near their typical operating load rather than at full load?",
    "a": "Because most transformers spend the bulk of their life at partial load rather than continuously at rated capacity",
    "opts": [
      "Because most transformers spend the bulk of their life at partial load rather than continuously at rated capacity",
      "Because running at full load always damages the core permanently",
      "Because full-load operation is illegal under classification society rules",
      "Because iron loss is impossible to calculate at full load"
    ],
    "exp": "A distribution transformer feeding lighting circuits is mostly lightly loaded outside peak hours, so designing for peak efficiency at that typical load, rather than at rarely-reached full load, gets more efficient operation across its actual service life.",
    "cat": "EFF",
    "id": "F06_036"
  },

  /* ═══════════ VOLTAGE REGULATION ═══════════ */
  {
    "q": "Voltage regulation of a transformer is defined as:",
    "a": "The change in secondary terminal voltage from no-load to full-load, expressed as a percentage of the no-load voltage",
    "opts": [
      "The change in secondary terminal voltage from no-load to full-load, expressed as a percentage of the no-load voltage",
      "The difference between primary and secondary voltage at no load",
      "The percentage change in supply frequency under load",
      "The ratio of iron loss to copper loss at rated load"
    ],
    "exp": "Voltage regulation captures how much the secondary terminal voltage sags between no-load and full-load conditions, at a stated power factor, expressed as a percentage of the no-load (or rated) voltage. It has nothing to do with frequency or the loss ratio.",
    "cat": "REG",
    "id": "F06_037"
  },
  {
    "q": "A transformer's secondary reads 230 V on no load and 218 V on full load. What is the percentage regulation?",
    "a": "5.2% approximately",
    "opts": ["5.2% approximately", "12% approximately", "0.95% approximately", "18.8% approximately"],
    "exp": "%Reg = [(230-218)/230] x 100 = (12/230) x 100 = about 5.2%. Forgetting to divide by the no-load voltage and simply reporting the 12 V drop as a raw percentage figure is the usual mistake here.",
    "cat": "REG",
    "id": "F06_038"
  },
  {
    "q": "What internal cause of a real transformer produces voltage regulation?",
    "a": "Winding resistance and leakage reactance causing an internal voltage drop as load current is drawn",
    "opts": [
      "Winding resistance and leakage reactance causing an internal voltage drop as load current is drawn",
      "The core lamination thickness changing with load",
      "The supply frequency drifting under heavy load",
      "Deliberate tap changer switching at every load change"
    ],
    "exp": "Exactly as with the alternator's EMF versus terminal voltage relationship, a real transformer has winding resistance and leakage reactance, so drawing load current causes an internal drop across those impedances, and terminal voltage sags below the ideal no-load value. A tap changer is a manual or automatic correction for this, not the cause of it.",
    "cat": "REG",
    "id": "F06_039"
  },
  {
    "q": "For the same load current magnitude, how does a lagging power factor load generally affect voltage regulation compared to a unity power factor load?",
    "a": "It generally produces worse (higher) regulation",
    "opts": ["It generally produces worse (higher) regulation", "It generally produces better (lower) regulation", "It has absolutely no effect on regulation", "It only affects regulation on three-phase transformers"],
    "exp": "Regulation depends on the load's power factor because of how the resistive and reactive internal drops combine with the load's phase angle. A lagging power factor load, typical of ship motor loads, generally produces worse (higher) regulation than a unity or leading power factor load for the same current.",
    "cat": "REG",
    "id": "F06_040"
  },

  /* ═══════════ COOLING ═══════════ */
  {
    "q": "What does the cooling designation AN mean?",
    "a": "Air Natural, natural air convection with no forced cooling",
    "opts": ["Air Natural, natural air convection with no forced cooling", "Air Nitrogen, nitrogen-filled sealed enclosure", "Auto Neutral, automatic neutral grounding", "Air Negative, negative pressure ventilation"],
    "exp": "AN stands for Air Natural (dry type), meaning the transformer relies on natural air convection alone with no fans, typical of small control and lighting transformers. It has nothing to do with nitrogen filling or neutral grounding.",
    "cat": "COOL",
    "id": "F06_041"
  },
  {
    "q": "What does ONAN mean as a transformer cooling designation?",
    "a": "Oil circulates naturally, and the radiator is cooled by natural air",
    "opts": [
      "Oil circulates naturally, and the radiator is cooled by natural air",
      "Oil is forced by pump, and air is forced by fan",
      "Only air cooling is used, no oil is present",
      "Oil is replaced by nitrogen gas for cooling"
    ],
    "exp": "ONAN, Oil Natural Air Natural, means the oil circulates through natural convection while the radiator is cooled by natural air, used on larger oil-filled power transformers where fitted. ONAF adds forced-air fan assistance to that same natural oil circulation for higher-capacity units under heavier load.",
    "cat": "COOL",
    "id": "F06_042"
  },
  {
    "q": "Why are most transformers found aboard merchant ships small dry-type units rather than oil-filled?",
    "a": "To avoid the fire risk and maintenance burden of oil-filled transformers in a confined engine room or switchboard space",
    "opts": [
      "To avoid the fire risk and maintenance burden of oil-filled transformers in a confined engine room or switchboard space",
      "Because dry-type transformers are always more efficient than oil-filled ones",
      "Because oil-filled transformers cannot operate on AC supplies",
      "Because classification societies prohibit oil-filled transformers on all ships"
    ],
    "exp": "Small dry-type units, naturally or fan cooled, are chosen specifically to avoid the fire risk and maintenance burden of oil in a confined space. Oil-filled units still appear on larger vessels with genuine high-voltage distribution needs, they are not universally prohibited, and dry type is not inherently more efficient.",
    "cat": "COOL",
    "id": "F06_043"
  },

  /* ═══════════ PARALLEL OPERATION ═══════════ */
  {
    "q": "Which of the following is NOT one of the standard conditions required before paralleling two transformers?",
    "a": "Same kVA rating",
    "opts": ["Same voltage (turns) ratio", "Same polarity / vector group", "Same kVA rating", "Same percentage impedance"],
    "exp": "The required conditions are matching voltage ratio, polarity/vector group, percentage impedance, and phase sequence, matching percentage impedance is what allows load current to divide correctly in proportion to each transformer's own kVA rating, but the two units are not required to actually share the same kVA rating themselves.",
    "cat": "PARA",
    "id": "F06_044"
  },
  {
    "q": "Which mismatch is the single most dangerous error when paralleling two transformers?",
    "a": "Mismatched polarity / vector group",
    "opts": ["Mismatched polarity / vector group", "Mismatched percentage impedance", "Mismatched phase sequence markings on the nameplate only", "Slightly different core material"],
    "exp": "Wrong polarity or vector group can create a severe internal short-circuit condition the instant the transformers are connected, an immediate high-current fault rather than a gradual performance issue, which is why it is treated as the single most dangerous error of the four conditions.",
    "cat": "PARA",
    "id": "F06_045"
  },
  {
    "q": "What happens if two transformers with mismatched voltage (turns) ratios are connected in parallel?",
    "a": "A circulating current flows between them even with no external load connected",
    "opts": [
      "A circulating current flows between them even with no external load connected",
      "They simply share load unevenly but otherwise operate normally",
      "Nothing happens unless an external load is connected first",
      "The transformer with the lower rating automatically shuts down"
    ],
    "exp": "Mismatched ratios drive a circulating current between the two transformers purely from their own voltage difference, even before any external load is connected, which is exactly why matching voltage ratio is one of the four required conditions.",
    "cat": "PARA",
    "id": "F06_046"
  },
  {
    "q": "Why must paralleled transformers have matching percentage impedance?",
    "a": "So that load current divides between them in proportion to their kVA rating, not unevenly",
    "opts": [
      "So that load current divides between them in proportion to their kVA rating, not unevenly",
      "So that both units run at exactly the same core temperature",
      "So that the cooling method of both units is automatically identical",
      "So that both units require the same tap changer setting for life"
    ],
    "exp": "Matching percentage impedance ensures each paralleled transformer picks up load current proportional to its own kVA rating, rather than one unit being overloaded while the other runs light. It does not by itself guarantee identical temperature or cooling method between the two units.",
    "cat": "PARA",
    "id": "F06_047"
  },

  /* ═══════════ THREE-PHASE CONNECTIONS ═══════════ */
  {
    "q": "Why is a star-delta (Yd) connection commonly favoured for shipboard step-down distribution transformers?",
    "a": "The star primary reduces per-winding insulation stress, and the delta secondary suppresses third-harmonic distortion",
    "opts": [
      "The star primary reduces per-winding insulation stress, and the delta secondary suppresses third-harmonic distortion",
      "It is the only connection that allows any voltage step-down at all",
      "It eliminates the need for a laminated core",
      "It removes the need to match vector groups when paralleling"
    ],
    "exp": "The star-connected high-voltage primary reduces the voltage each winding must be insulated for, while the delta-connected secondary provides a closed path for third-harmonic currents that would otherwise distort the output waveform. This combination is standard for HV-to-440 V shipboard distribution transformers where fitted.",
    "cat": "VECT",
    "id": "F06_048"
  },
  {
    "q": "In a standard Yd (star-delta) step-down transformer connection, which side is star connected?",
    "a": "The primary",
    "opts": ["The primary", "The secondary", "Both primary and secondary", "Neither, Yd has no star winding"],
    "exp": "In the Yd notation the first letter denotes the primary connection, so the star-connected winding is the primary here, giving a neutral point and reduced primary insulation stress, while the secondary is delta connected to suppress third-harmonic distortion.",
    "cat": "VECT",
    "id": "F06_049"
  },
  {
    "q": "What role does the delta-connected secondary play in a Yd shipboard step-down transformer?",
    "a": "It provides a closed path for third-harmonic currents without needing a neutral conductor on that side",
    "opts": [
      "It provides a closed path for third-harmonic currents without needing a neutral conductor on that side",
      "It doubles the secondary voltage compared to a star secondary",
      "It eliminates the need for the transformer to be laminated",
      "It prevents any current from flowing in the secondary under load"
    ],
    "exp": "A delta winding forms a closed loop that circulates and effectively suppresses third-harmonic currents internally, without requiring a neutral connection on that side, which is why it is favoured as the secondary in this configuration.",
    "cat": "VECT",
    "id": "F06_050"
  },
  {
    "q": "Star-delta and delta-star transformer connections typically introduce what fixed phase shift between primary and secondary line voltages?",
    "a": "30 degrees",
    "opts": ["30 degrees", "90 degrees", "120 degrees", "0 degrees, there is no phase shift"],
    "exp": "Star-delta and delta-star connections commonly introduce a fixed 30 degree phase shift between primary and secondary line voltages. This is normal and by design, but it is exactly the vector group that must match when paralleling transformers.",
    "cat": "VECT",
    "id": "F06_051"
  },
  {
    "q": "Can two transformers with matching voltage ratios but different vector groups be safely paralleled?",
    "a": "No, their secondary voltages would be out of phase with each other, producing damaging circulating currents",
    "opts": [
      "Yes, matching voltage ratio alone is always sufficient",
      "No, their secondary voltages would be out of phase with each other, producing damaging circulating currents",
      "Yes, as long as both transformers are Yd connected regardless of their actual phase shift",
      "No, because their frequencies would automatically differ"
    ],
    "exp": "Star-delta type connections introduce a fixed phase shift, so even with matching ratios, transformers of different vector groups have secondaries out of phase with each other, producing damaging circulating currents if paralleled. Frequency itself is unaffected, a transformer never changes frequency regardless of connection.",
    "cat": "VECT",
    "id": "F06_052"
  },

  /* ═══════════ INSTRUMENT TRANSFORMERS ═══════════ */
  {
    "q": "How is a current transformer (CT) connected relative to the line whose current it measures?",
    "a": "Its primary is connected in series with the line",
    "opts": ["Its primary is connected in series with the line", "Its primary is connected in parallel across the line", "Its secondary is connected in series with the line", "It is connected only to the neutral conductor"],
    "exp": "A CT's primary is connected in series with the line carrying the current to be measured, so the same line current flows through the CT primary, and its secondary supplies a small, standard current, commonly 5 A or 1 A, to the ammeter or relay.",
    "cat": "INST",
    "id": "F06_053"
  },
  {
    "q": "How is a potential (voltage) transformer (PT) connected relative to the line whose voltage it measures?",
    "a": "Its primary is connected in parallel across the line",
    "opts": ["Its primary is connected in parallel across the line", "Its primary is connected in series with the line", "Its secondary is connected in series with the line", "It requires no electrical connection to the line at all"],
    "exp": "A PT's primary is connected across the line voltage to be measured, in parallel, behaving as an ordinary voltage source referenced down from the line. This is the opposite arrangement to a CT, whose primary sits in series with the line current.",
    "cat": "INST",
    "id": "F06_054"
  },
  {
    "q": "What is a typical secondary current rating for a shipboard current transformer at full primary rated current?",
    "a": "5 A or 1 A",
    "opts": ["5 A or 1 A", "110 V", "440 V", "24 V"],
    "exp": "CT secondaries are standardised at 5 A or 1 A so ammeters and protection relays can be built to a common, safe, small current value. The voltage figures listed are secondary ratings for a potential transformer, a different type of instrument transformer entirely.",
    "cat": "INST",
    "id": "F06_055"
  },
  {
    "q": "What happens if a current transformer's secondary is left open-circuited while the primary is still carrying line current?",
    "a": "A dangerously high voltage is induced across the open secondary as the core saturates from unopposed primary ampere-turns",
    "opts": [
      "A dangerously high voltage is induced across the open secondary as the core saturates from unopposed primary ampere-turns",
      "The CT simply reads zero current safely with no other effect",
      "The primary circuit automatically trips on overcurrent",
      "Nothing happens, an open CT secondary is a normal, safe operating state"
    ],
    "exp": "With no secondary current to oppose it, the primary ampere-turns are left unopposed and drive the core into deep saturation, inducing a large, potentially lethal peak voltage across the open secondary. A CT secondary must always be short-circuited or connected to its meter or relay before the primary circuit is energised.",
    "cat": "INST",
    "id": "F06_056"
  },
  {
    "q": "Should a potential (voltage) transformer's secondary ever be short-circuited?",
    "a": "No, it should never be short-circuited, the opposite rule to a current transformer",
    "opts": [
      "No, it should never be short-circuited, the opposite rule to a current transformer",
      "Yes, it must always be short-circuited before the primary is energised, just like a CT",
      "It makes no difference whether the PT secondary is shorted or open",
      "Only high-voltage PTs need their secondaries shorted"
    ],
    "exp": "A PT behaves as an ordinary voltage source referenced down from the line, so short-circuiting it would drive damaging current through it. This is the opposite of the CT rule, where the secondary must never be left open under load, and is normally protected by a fuse rather than deliberately shorted.",
    "cat": "INST",
    "id": "F06_057"
  },
  {
    "q": "A CT is rated 400/5 A and the switchboard ammeter reads 3.5 A on the secondary. What is the actual primary (line) current?",
    "a": "280 A",
    "opts": ["280 A", "17.5 A", "395 A", "5.7 A"],
    "exp": "CT ratio = 400/5 = 80. Primary current = secondary reading x ratio = 3.5 x 80 = 280 A. Dividing instead of multiplying by the ratio gives 17.5 A instead, the reverse mistake.",
    "cat": "INST",
    "id": "F06_058"
  },

  /* ═══════════ MARINE APPLICATIONS ═══════════ */
  {
    "q": "What is a typical shipboard lighting supply transformer arrangement?",
    "a": "440 V / 220 V step-down, dry type",
    "opts": ["440 V / 220 V step-down, dry type", "6.6 kV / 440 V step-up, oil filled", "220 V / 440 V step-up, dry type", "24 V / 12 V isolation transformer"],
    "exp": "Lighting supply on merchant ships is typically taken from a 440 V / 220 V step-down dry-type transformer, small and naturally or fan cooled, avoiding the fire risk of oil-filled units in confined spaces.",
    "cat": "MARINE",
    "id": "F06_059"
  },
  {
    "q": "What kind of transformer typically supplies a ship's control and automation systems?",
    "a": "A step-down control transformer to 110 V / 24 V",
    "opts": ["A step-down control transformer to 110 V / 24 V", "A step-up transformer to 6.6 kV", "An auto-transformer starter permanently connected to the load", "A current transformer feeding the control circuit directly"],
    "exp": "Control and automation supply is typically taken through step-down control transformers to 110 V or 24 V, standard low voltages for control electronics. A CT is an instrument transformer for metering, not a supply source, and an auto-transformer starter is specifically for motor starting duty, not continuous control supply.",
    "cat": "MARINE",
    "id": "F06_060"
  },
  {
    "q": "On larger vessels with genuine high-voltage distribution, what is a typical HV distribution transformer arrangement?",
    "a": "6.6 kV / 440 V step-down, star-delta connected",
    "opts": ["6.6 kV / 440 V step-down, star-delta connected", "440 V / 6.6 kV step-up, delta-delta connected", "110 V / 24 V step-down, auto-transformer type", "24 V / 440 V step-up, isolation type"],
    "exp": "Larger vessels with genuine HV distribution needs typically use 6.6 kV / 440 V step-down transformers, star-delta connected, for exactly the insulation-stress and harmonic-suppression reasons covered under three-phase connections. Most merchant ships, however, use small dry-type units without this HV stage.",
    "cat": "MARINE",
    "id": "F06_061"
  },
  {
    "q": "What type of transformer is used to supply portable electrical equipment for electrical safety, with no change in voltage?",
    "a": "An isolation transformer",
    "opts": ["An isolation transformer", "A current transformer", "An auto-transformer", "A step-up transformer"],
    "exp": "An isolation transformer provides no voltage change but electrically separates the portable equipment's supply from the main system, reducing shock risk. A CT is an instrument transformer for metering, and an auto-transformer specifically lacks the isolation that is the entire point of this application.",
    "cat": "MARINE",
    "id": "F06_062"
  }

]);

window.loadQuizzes('T05_Transformers', [
  {
    "q": "What is the fundamental working principle of a transformer?",
    "a": "Mutual electromagnetic induction",
    "opts": [
      "Mutual electromagnetic induction",
      "Self induction",
      "Electromagnetic radiation",
      "Thermal conduction"
    ],
    "exp": "Transformer works on the principle of mutual electromagnetic induction. Alternating current in the primary winding creates an alternating magnetic flux in the core, which links with the secondary winding and induces an EMF by Faraday's law.",
    "id": "T05_Transformers_001",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "Why cannot a transformer work on a DC supply?",
    "a": "DC produces a constant magnetic flux which does not induce an EMF",
    "opts": [
      "DC produces a constant magnetic flux which does not induce an EMF",
      "DC voltage is too high",
      "DC causes the core to freeze",
      "DC destroys the oil instantly"
    ],
    "exp": "DC produces a constant magnetic flux. Without a changing flux, no EMF is induced in the secondary (no induction). Furthermore, the primary winding will draw excessive current due to the lack of inductive reactance.",
    "id": "T05_Transformers_002",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "What is the relationship between the turns ratio and voltage ratio?",
    "a": "V1/V2 = N1/N2",
    "opts": [
      "V1/V2 = N1/N2",
      "V1/V2 = N2/N1",
      "V1 x V2 = N1 x N2",
      "V1/N2 = V2/N1"
    ],
    "exp": "The voltage ratio is directly proportional to the turns ratio. A step-up transformer has more secondary turns than primary turns (N2 > N1), resulting in a higher secondary voltage (V2 > V1).",
    "id": "T05_Transformers_003",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "In an ideal transformer, what is the relationship between current and turns ratio?",
    "a": "I1/I2 = N2/N1",
    "opts": [
      "I1/I2 = N2/N1",
      "I1/I2 = N1/N2",
      "I1 x N1 = I2 / N2",
      "I1 + I2 = N1 + N2"
    ],
    "exp": "The current ratio is the inverse of the turns ratio. To conserve energy (V1 x I1 = V2 x I2), stepping up the voltage results in a proportional stepping down of the current.",
    "id": "T05_Transformers_004",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "What happens to current in a step-up transformer?",
    "a": "It steps down proportionally",
    "opts": [
      "It steps down proportionally",
      "It steps up proportionally",
      "It remains constant",
      "It becomes zero"
    ],
    "exp": "A step-up transformer increases voltage but decreases current proportionally to maintain energy conservation (power in equals power out ideally).",
    "id": "T05_Transformers_005",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "What does the 'E' stand for in the EMF equation E = 4.44 x f x N x Phi_max?",
    "a": "RMS induced EMF",
    "opts": [
      "RMS induced EMF",
      "Peak induced EMF",
      "Average EMF",
      "Instantaneous EMF"
    ],
    "exp": "E stands for the Root Mean Square (RMS) induced EMF in volts, as this is the standard way AC voltage is measured and expressed.",
    "id": "T05_Transformers_006",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "What does 4.44 represent in the EMF equation?",
    "a": "Form factor constant for a sinusoidal flux",
    "opts": [
      "Form factor constant for a sinusoidal flux",
      "A random safety factor",
      "The ratio of copper to iron",
      "The efficiency multiplier"
    ],
    "exp": "The constant 4.44 comes from multiplying 4 by the form factor of a sine wave, which is 1.11 (RMS value divided by average value).",
    "id": "T05_Transformers_007",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "If the supply frequency to a transformer decreases but voltage remains constant, what must happen to the flux?",
    "a": "Maximum flux must increase",
    "opts": [
      "Maximum flux must increase",
      "Maximum flux must decrease",
      "Flux remains constant",
      "Flux becomes negative"
    ],
    "exp": "From the EMF equation E = 4.44 x f x N x Phi_max, if frequency (f) drops and voltage (E) is constant, the maximum flux (Phi_max) must increase to maintain the balance.",
    "id": "T05_Transformers_008",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "What is the danger of operating a transformer at a reduced frequency without reducing voltage?",
    "a": "Core saturation leading to high iron losses and overheating",
    "opts": [
      "Core saturation leading to high iron losses and overheating",
      "Voltage will automatically increase",
      "The transformer will run backwards",
      "The oil will freeze"
    ],
    "exp": "A drop in frequency increases the magnetic flux. This can push the core into magnetic saturation, drastically increasing iron losses and causing severe overheating. This is why the V/f ratio must be maintained.",
    "id": "T05_Transformers_009",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "If a transformer has 500 primary turns and 100 secondary turns, and the primary voltage is 440V, what is the secondary voltage?",
    "a": "88V",
    "opts": [
      "88V",
      "2200V",
      "440V",
      "110V"
    ],
    "exp": "Using the voltage ratio V2 = V1 x (N2/N1), we get 440 x (100/500) = 88V. This is a step-down transformer.",
    "id": "T05_Transformers_010",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "What creates the alternating magnetic flux in the transformer core?",
    "a": "The alternating current flowing in the primary winding",
    "opts": [
      "The alternating current flowing in the primary winding",
      "The permanent magnets in the core",
      "The secondary winding current",
      "The transformer oil"
    ],
    "exp": "When an AC voltage is applied to the primary winding, an alternating current flows through it, which in turn generates an alternating magnetic field within the common core.",
    "id": "T05_Transformers_011",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "By which law is EMF induced in the secondary winding?",
    "a": "Faraday's Law of Electromagnetic Induction",
    "opts": [
      "Faraday's Law of Electromagnetic Induction",
      "Ohm's Law",
      "Newton's Third Law",
      "Boyle's Law"
    ],
    "exp": "Faraday's Law states that an EMF is induced in a circuit whenever it is subjected to a changing magnetic flux, and the magnitude is proportional to the rate of change of flux.",
    "id": "T05_Transformers_012",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "What is the primary function of the laminated silicon steel core?",
    "a": "To provide a low-reluctance path for the magnetic flux",
    "opts": [
      "To provide a low-reluctance path for the magnetic flux",
      "To act as a structural support only",
      "To cool the windings",
      "To insulate the primary from the secondary"
    ],
    "exp": "The core provides a low-reluctance (low magnetic resistance) path, ensuring that almost all the magnetic flux created by the primary links with the secondary winding.",
    "id": "T05_Transformers_013",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "What happens if you connect a 220V DC battery to a 220V transformer primary?",
    "a": "Primary winding will draw excessive current and burn out due to lack of inductive reactance",
    "opts": [
      "Primary winding will draw excessive current and burn out due to lack of inductive reactance",
      "It will output 220V DC on the secondary",
      "It will output 220V AC on the secondary",
      "Nothing will happen"
    ],
    "exp": "DC does not create a changing flux, so there is no back-EMF (inductive reactance) generated to oppose the supply voltage. The only resistance is the very low DC resistance of the copper wire, leading to a massive, destructive current.",
    "id": "T05_Transformers_014",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "According to Lenz's Law, what does the secondary current do?",
    "a": "It creates a magnetic flux that opposes the primary flux",
    "opts": [
      "It creates a magnetic flux that opposes the primary flux",
      "It assists the primary flux",
      "It creates heat to warm the oil",
      "It increases the primary voltage"
    ],
    "exp": "Lenz's Law dictates that the induced current will flow in a direction that opposes the change producing it. This secondary demagnetising flux reduces the overall core flux momentarily.",
    "id": "T05_Transformers_015",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "How does the primary winding react when secondary load current increases?",
    "a": "It draws more current from the supply to counteract the secondary's demagnetising flux",
    "opts": [
      "It draws more current from the supply to counteract the secondary's demagnetising flux",
      "It draws less current",
      "It reduces its voltage",
      "It disconnects itself"
    ],
    "exp": "As secondary current creates an opposing flux, the core flux slightly drops, reducing primary back-EMF. This allows the primary to draw more current to restore the core flux, transferring power to the load.",
    "id": "T05_Transformers_016",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "Are the primary and secondary windings of a standard transformer electrically connected?",
    "a": "No, they are electrically isolated and only magnetically coupled",
    "opts": [
      "No, they are electrically isolated and only magnetically coupled",
      "Yes, they are connected in series",
      "Yes, they are connected in parallel",
      "Yes, through the core ground"
    ],
    "exp": "In a standard double-wound transformer, there is no physical electrical connection between the primary and secondary. They are galvanically isolated and transfer power solely through magnetic flux in the core.",
    "id": "T05_Transformers_017",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "What determines whether a transformer is step-up or step-down?",
    "a": "The ratio of secondary turns to primary turns",
    "opts": [
      "The ratio of secondary turns to primary turns",
      "The thickness of the core",
      "The type of oil used",
      "The frequency of the supply"
    ],
    "exp": "If the secondary has more turns than the primary (N2 > N1), it is a step-up transformer. If it has fewer turns (N2 < N1), it is a step-down transformer.",
    "id": "T05_Transformers_018",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "What is conserved between the primary and secondary of an ideal transformer?",
    "a": "Power (VA)",
    "opts": [
      "Power (VA)",
      "Current",
      "Voltage",
      "Resistance"
    ],
    "exp": "Assuming no losses (ideal transformer), the apparent power input (V1 x I1) equals the apparent power output (V2 x I2). Energy is conserved during transformation.",
    "id": "T05_Transformers_019",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "If a transformer steps down voltage by a factor of 10, what happens to the load current seen by the primary?",
    "a": "It is stepped down by a factor of 10",
    "opts": [
      "It is stepped down by a factor of 10",
      "It is stepped up by a factor of 10",
      "It remains the same",
      "It becomes zero"
    ],
    "exp": "Since I1/I2 = N2/N1, if the voltage is stepped down by 10 (so N1 is 10x N2), the primary current I1 will be 1/10th of the secondary load current I2.",
    "id": "T05_Transformers_020",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "What is 'Phi_max' in the EMF equation?",
    "a": "Maximum magnetic flux in Webers",
    "opts": [
      "Maximum magnetic flux in Webers",
      "Maximum power in Watts",
      "Maximum voltage in Volts",
      "Maximum phase angle"
    ],
    "exp": "Phi_max represents the peak value of the alternating magnetic flux in the core, measured in Webers (Wb).",
    "id": "T05_Transformers_021",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "What does a V/f ratio represent in transformer and motor theory?",
    "a": "It is proportional to the magnetic flux in the core",
    "opts": [
      "It is proportional to the magnetic flux in the core",
      "It is the efficiency",
      "It is the power factor",
      "It is the slip"
    ],
    "exp": "From the EMF equation, Phi_max is proportional to E/f (Voltage/frequency). Keeping the V/f ratio constant ensures the core operates at a constant, safe magnetic flux density without saturating.",
    "id": "T05_Transformers_022",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "Why can't you run a 60Hz transformer on a 50Hz supply at the same voltage?",
    "a": "The lower frequency increases flux, leading to saturation and overheating",
    "opts": [
      "The lower frequency increases flux, leading to saturation and overheating",
      "The 50Hz supply will blow the fuses",
      "The transformer will run too fast",
      "The secondary voltage will increase by 20%"
    ],
    "exp": "Operating at 50Hz instead of 60Hz at the same voltage requires more magnetic flux to induce the required back-EMF. This extra flux can push the core into saturation, causing a severe increase in iron losses and overheating.",
    "id": "T05_Transformers_023",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "What is the consequence of core saturation?",
    "a": "Extreme increase in magnetizing current, high iron losses, and overheating",
    "opts": [
      "Extreme increase in magnetizing current, high iron losses, and overheating",
      "Increased efficiency",
      "Higher secondary voltage",
      "Better voltage regulation"
    ],
    "exp": "Once saturated, the core cannot hold more magnetic flux. The transformer draws extremely high magnetizing current to force more flux, leading to massive heating and potential failure.",
    "id": "T05_Transformers_024",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "If primary voltage is 440V and primary current is 5A, what is the apparent power (VA)?",
    "a": "2200 VA",
    "opts": [
      "2200 VA",
      "88 VA",
      "2200 W",
      "88 W"
    ],
    "exp": "Apparent power in VA is simply the product of voltage and current (V x I). Here, 440V x 5A = 2200 VA (or 2.2 kVA).",
    "id": "T05_Transformers_025",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "What material is typically used for the transformer core?",
    "a": "Laminated silicon steel",
    "opts": [
      "Laminated silicon steel",
      "Solid cast iron",
      "Aluminum",
      "Copper"
    ],
    "exp": "Grain-oriented silicon steel is used because it has a low hysteresis coefficient, and it is laminated into thin sheets to restrict eddy currents, thereby minimizing overall iron losses.",
    "id": "T05_Transformers_026",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "What does 'mutual induction' mean?",
    "a": "A changing current in one coil induces an EMF in a nearby separate coil",
    "opts": [
      "A changing current in one coil induces an EMF in a nearby separate coil",
      "A coil induces EMF in itself",
      "Two magnets attract each other",
      "Friction creates static electricity"
    ],
    "exp": "Mutual induction is the process where a changing magnetic field produced by one circuit (primary) induces an electromotive force (EMF) in a second, magnetically linked circuit (secondary).",
    "id": "T05_Transformers_027",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "In an ideal transformer, if V1=1000V, I1=2A, and V2=100V, what is I2?",
    "a": "20A",
    "opts": [
      "20A",
      "0.2A",
      "2A",
      "200A"
    ],
    "exp": "Power is conserved, so V1 x I1 = V2 x I2. Thus, 1000V x 2A = 2000VA. For the secondary, 2000VA / 100V = 20A.",
    "id": "T05_Transformers_028",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "Why is a transformer considered a 'constant power' device (ideally)?",
    "a": "Input VA equals output VA",
    "opts": [
      "Input VA equals output VA",
      "It draws constant current regardless of load",
      "It regulates voltage perfectly",
      "It always runs at 100% efficiency"
    ],
    "exp": "While it steps voltage and current up or down, the total apparent power (Volts x Amps) entering the primary equals the total apparent power leaving the secondary, minus minor losses.",
    "id": "T05_Transformers_029",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "What is the primary requirement for electromagnetic induction in a transformer?",
    "a": "A changing magnetic field",
    "opts": [
      "A changing magnetic field",
      "A stationary magnetic field",
      "A DC voltage",
      "A vacuum environment"
    ],
    "exp": "Induction requires a rate of change of flux (dPhi/dt). Without a continuously changing magnetic field (which AC provides), no EMF can be induced in the secondary winding.",
    "id": "T05_Transformers_030",
    "topic": "T05_Transformers",
    "cat": "Principle & EMF"
  },
  {
    "q": "Where do iron losses occur in a transformer?",
    "a": "In the magnetic core",
    "opts": [
      "In the magnetic core",
      "In the primary winding",
      "In the secondary winding",
      "In the transformer oil"
    ],
    "exp": "Iron losses occur entirely in the magnetic core (laminated silicon steel) due to the alternating magnetic flux.",
    "id": "T05_Transformers_031",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "Do iron losses vary with the load connected to the transformer?",
    "a": "No, they are constant losses independent of load",
    "opts": [
      "No, they are constant losses independent of load",
      "Yes, they increase proportionally with load",
      "Yes, they increase with the square of the load",
      "Yes, they decrease as load increases"
    ],
    "exp": "Iron losses are called constant losses because they depend on supply voltage and frequency, which are generally constant, regardless of the load current.",
    "id": "T05_Transformers_032",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "What are the two components of iron losses?",
    "a": "Hysteresis loss and Eddy current loss",
    "opts": [
      "Hysteresis loss and Eddy current loss",
      "Copper loss and Friction loss",
      "Stray loss and Dielectric loss",
      "Windage loss and Copper loss"
    ],
    "exp": "Total iron losses are the sum of hysteresis loss and eddy current loss.",
    "id": "T05_Transformers_033",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "What causes hysteresis loss?",
    "a": "The energy required to repeatedly reverse the magnetic domains in the core",
    "opts": [
      "The energy required to repeatedly reverse the magnetic domains in the core",
      "Friction between laminations",
      "Circulating currents in the core",
      "Resistance of the copper wire"
    ],
    "exp": "Hysteresis loss occurs because the magnetic domains in the core material require energy to physically reverse direction 100 times per second (for a 50Hz supply).",
    "id": "T05_Transformers_034",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "How can hysteresis loss be reduced?",
    "a": "By using grain-oriented silicon steel for the core",
    "opts": [
      "By using grain-oriented silicon steel for the core",
      "By using thicker copper wire",
      "By laminating the core",
      "By cooling the oil"
    ],
    "exp": "Hysteresis loss is reduced by using materials with low hysteresis coefficients, such as high-grade grain-oriented silicon steel.",
    "id": "T05_Transformers_035",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "What causes eddy current loss?",
    "a": "Alternating flux inducing circulating currents within the bulk core material",
    "opts": [
      "Alternating flux inducing circulating currents within the bulk core material",
      "Magnetic domain reversal",
      "Loose core bolts",
      "High resistance connections"
    ],
    "exp": "Eddy currents are small circulating currents induced within the solid bulk material of the core by the alternating flux, causing I²R heating.",
    "id": "T05_Transformers_036",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "How can eddy current loss be reduced?",
    "a": "By making the core out of thin insulated laminations",
    "opts": [
      "By making the core out of thin insulated laminations",
      "By using solid steel blocks",
      "By increasing the frequency",
      "By using thinner copper wire"
    ],
    "exp": "Eddy current loss is vastly reduced by laminating the core (using thin insulated sheets) to break the electrical paths and restrict these circulating currents.",
    "id": "T05_Transformers_037",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "Eddy current loss is proportional to the square of what physical parameter?",
    "a": "The thickness of the core laminations",
    "opts": [
      "The thickness of the core laminations",
      "The length of the wire",
      "The distance between coils",
      "The volume of oil"
    ],
    "exp": "Eddy current loss is proportional to the square of the lamination thickness.",
    "id": "T05_Transformers_038",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "If lamination thickness is halved, what happens to the eddy current loss?",
    "a": "It is reduced to one-quarter (1/4)",
    "opts": [
      "It is reduced to one-quarter (1/4)",
      "It is halved",
      "It doubles",
      "It remains the same"
    ],
    "exp": "Because it's proportional to thickness squared, halving the thickness reduces the eddy current loss to 1/4 of its original value.",
    "id": "T05_Transformers_039",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "What are copper losses?",
    "a": "I-squared-R (heat) losses in the primary and secondary windings",
    "opts": [
      "I-squared-R (heat) losses in the primary and secondary windings",
      "Losses in the core",
      "Losses due to stray capacitance",
      "Losses in the oil"
    ],
    "exp": "Copper losses are the heat losses (I²R) generated by the load current flowing through the resistance of the primary and secondary windings.",
    "id": "T05_Transformers_040",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "Are copper losses constant?",
    "a": "No, they are variable and depend on the square of the load current",
    "opts": [
      "No, they are variable and depend on the square of the load current",
      "Yes, they are constant at all times",
      "They only vary with frequency",
      "They vary inversely with load"
    ],
    "exp": "No, they are variable losses. They change with the square of the load current.",
    "id": "T05_Transformers_041",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "If the load on a transformer is doubled, what happens to the copper loss?",
    "a": "It becomes four times larger (4x)",
    "opts": [
      "It becomes four times larger (4x)",
      "It doubles (2x)",
      "It halves",
      "It remains the same"
    ],
    "exp": "Since copper loss is proportional to I², doubling the current (2²) results in four times the copper loss.",
    "id": "T05_Transformers_042",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "If a transformer is operating at half load, what is the copper loss relative to full load?",
    "a": "One-quarter (1/4) of full load copper loss",
    "opts": [
      "One-quarter (1/4) of full load copper loss",
      "Half",
      "Double",
      "The same"
    ],
    "exp": "At half load, the current is 1/2. The copper loss will be (1/2)² = 1/4 of the full-load copper loss.",
    "id": "T05_Transformers_043",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "How are iron losses measured?",
    "a": "By performing a No-Load test (Open Circuit test)",
    "opts": [
      "By performing a No-Load test (Open Circuit test)",
      "By performing a Short Circuit test",
      "By measuring the resistance with a multimeter",
      "By chemical analysis of the oil"
    ],
    "exp": "An open-circuit (no-load) test measures iron losses because there is no secondary current, so copper losses are negligible and all input power goes to the core.",
    "id": "T05_Transformers_044",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "How are copper losses at rated current measured?",
    "a": "By performing a Short Circuit test at reduced voltage",
    "opts": [
      "By performing a Short Circuit test at reduced voltage",
      "By performing a No-Load test",
      "By measuring the core temperature",
      "By listening to the hum"
    ],
    "exp": "A short-circuit test applies a reduced voltage to circulate full-load current. The reduced voltage means core flux and iron losses are negligible, so all input power is copper loss.",
    "id": "T05_Transformers_045",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "At what point does a transformer achieve maximum efficiency?",
    "a": "When iron losses equal copper losses",
    "opts": [
      "When iron losses equal copper losses",
      "At 100% full load exactly",
      "At no load",
      "When voltage is highest"
    ],
    "exp": "Maximum efficiency occurs when the variable copper losses exactly equal the constant iron losses.",
    "id": "T05_Transformers_046",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "What causes normal transformer hum?",
    "a": "Magnetostriction of the core laminations",
    "opts": [
      "Magnetostriction of the core laminations",
      "Cooling fan vibration",
      "Oil boiling",
      "Windings rubbing together"
    ],
    "exp": "Hum is caused by magnetostriction, a phenomenon where the core laminations physically expand and contract slightly with each cycle of magnetic flux.",
    "id": "T05_Transformers_047",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "At what frequency does a transformer hum on a 50Hz supply?",
    "a": "100Hz (twice the supply frequency)",
    "opts": [
      "100Hz (twice the supply frequency)",
      "50Hz",
      "25Hz",
      "200Hz"
    ],
    "exp": "At 50Hz, the magnetic flux peaks twice per cycle (positive and negative). Therefore, the core changes dimension 100 times per second, producing a 100Hz hum.",
    "id": "T05_Transformers_048",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "What is magnetostriction?",
    "a": "The physical expansion and contraction of core laminations with each magnetic cycle",
    "opts": [
      "The physical expansion and contraction of core laminations with each magnetic cycle",
      "The melting of the core due to heat",
      "The insulation breakdown of windings",
      "The magnetic attraction of the tank"
    ],
    "exp": "Magnetostriction is the property of ferromagnetic materials that causes them to change their shape or dimensions during the process of magnetization.",
    "id": "T05_Transformers_049",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "Which of the following will cause transformer hum to become noticeably louder?",
    "a": "Overvoltage applied to the primary",
    "opts": [
      "Overvoltage applied to the primary",
      "Operating at exactly 50% load",
      "Low ambient temperature",
      "Using silicon steel"
    ],
    "exp": "Overvoltage increases the magnetic flux density (Bmax) in the core, which directly increases the amplitude of magnetostriction and thus the humming noise.",
    "id": "T05_Transformers_050",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "Why does overvoltage increase transformer hum?",
    "a": "It increases flux density, leading to greater magnetostriction",
    "opts": [
      "It increases flux density, leading to greater magnetostriction",
      "It causes the oil to bubble",
      "It increases copper resistance",
      "It makes the laminations shrink"
    ],
    "exp": "A higher flux density forces the laminations to expand and contract more violently, translating directly into louder acoustic noise.",
    "id": "T05_Transformers_051",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "What mechanical defect can cause increased humming or rattling?",
    "a": "Loose core clamping bolts or loose laminations",
    "opts": [
      "Loose core clamping bolts or loose laminations",
      "A tight seal on the conservator",
      "Thick copper windings",
      "Too much oil in the tank"
    ],
    "exp": "Loose core clamping bolts or insufficiently tight laminations will vibrate and rattle against each other under the electromagnetic forces.",
    "id": "T05_Transformers_052",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "What effect do harmonics in the supply have on transformer noise?",
    "a": "They create additional non-sinusoidal flux, causing multiple vibration frequencies (louder hum)",
    "opts": [
      "They create additional non-sinusoidal flux, causing multiple vibration frequencies (louder hum)",
      "They silence the transformer",
      "They only affect copper losses",
      "They turn the hum into a DC click"
    ],
    "exp": "Harmonics distort the sinusoidal flux waveform, adding higher-frequency vibrations to the core, which increases the overall noise level and changes its pitch.",
    "id": "T05_Transformers_053",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "Why is the core laminated?",
    "a": "To restrict eddy currents to thin paths, increasing resistance and drastically reducing I2R core heating",
    "opts": [
      "To restrict eddy currents to thin paths, increasing resistance and drastically reducing I2R core heating",
      "To make the transformer lighter",
      "To allow oil to flow through the core",
      "To reduce hysteresis loss"
    ],
    "exp": "Laminations slice the core into thin, insulated sheets perpendicular to the flux. This breaks the electrical path for induced eddy currents, vastly increasing resistance and reducing I²R heat loss.",
    "id": "T05_Transformers_054",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "What material is used to insulate the laminations from each other?",
    "a": "Thin varnish or oxide coating",
    "opts": [
      "Thin varnish or oxide coating",
      "Thick rubber sheets",
      "Transformer oil",
      "Plastic wrap"
    ],
    "exp": "Each lamination is coated with a very thin layer of insulating varnish or oxide to prevent electrical contact with adjacent sheets.",
    "id": "T05_Transformers_055",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "Why is a short circuit test done at reduced voltage?",
    "a": "To circulate full load current without drawing massive fault current that would destroy it",
    "opts": [
      "To circulate full load current without drawing massive fault current that would destroy it",
      "Because high voltage is dangerous",
      "To measure the core loss safely",
      "To prevent the oil from freezing"
    ],
    "exp": "Applying full voltage to a short-circuited transformer would draw a destructive fault current. Reduced voltage safely circulates only the rated full-load current.",
    "id": "T05_Transformers_056",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "In an open circuit test, where is the power being consumed?",
    "a": "Almost entirely in the core (iron losses)",
    "opts": [
      "Almost entirely in the core (iron losses)",
      "In the secondary winding",
      "In the load",
      "In the short circuit link"
    ],
    "exp": "In an open circuit test, secondary current is zero. The tiny primary magnetising current causes virtually no copper loss, so all measured input power is consumed as iron losses in the core.",
    "id": "T05_Transformers_057",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "What is the typical thickness of a core lamination?",
    "a": "0.3 to 0.5 mm",
    "opts": [
      "0.3 to 0.5 mm",
      "5 to 10 cm",
      "1 to 2 inches",
      "0.01 mm"
    ],
    "exp": "Core laminations are typically 0.3 mm to 0.5 mm thick, balancing the reduction of eddy currents against manufacturing cost and mechanical stability.",
    "id": "T05_Transformers_058",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "Does load current significantly affect iron loss?",
    "a": "No, core flux remains nearly constant from no-load to full load",
    "opts": [
      "No, core flux remains nearly constant from no-load to full load",
      "Yes, iron loss squares with load",
      "Yes, iron loss drops to zero on full load",
      "Yes, it doubles"
    ],
    "exp": "Core flux is determined by the applied primary voltage (which is constant). When load increases, primary current increases to exactly cancel the secondary demagnetising effect, keeping net flux constant.",
    "id": "T05_Transformers_059",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "Which loss determines the physical size of the cooling radiators required on no-load?",
    "a": "Iron loss",
    "opts": [
      "Iron loss",
      "Copper loss",
      "Friction loss",
      "Dielectric loss"
    ],
    "exp": "Iron losses are present even at no load and generate heat constantly. The radiators must be sized to dissipate at least this heat even when the transformer is unloaded.",
    "id": "T05_Transformers_060",
    "topic": "T05_Transformers",
    "cat": "Iron & Copper Losses"
  },
  {
    "q": "When a transformer is on no-load, does primary current flow?",
    "a": "Yes, a small magnetising current (I0) flows",
    "opts": [
      "Yes, a small magnetising current (I0) flows",
      "No, zero current flows",
      "Yes, full load current flows",
      "Only if the voltage is DC"
    ],
    "exp": "Even with no load connected, the primary must draw a small current to generate the magnetic flux in the core and supply the iron losses.",
    "id": "T05_Transformers_061",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What is the typical magnitude of the no-load current (I0)?",
    "a": "2% to 10% of full load rated current",
    "opts": [
      "2% to 10% of full load rated current",
      "50% of rated current",
      "100% of rated current",
      "0.1% of rated current"
    ],
    "exp": "The no-load current (I0) is typically very small, around 2% to 10% of the transformer's full load rated current.",
    "id": "T05_Transformers_062",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What are the two components of the no-load current?",
    "a": "Magnetising component (Im) and Core loss component (Ic)",
    "opts": [
      "Magnetising component (Im) and Core loss component (Ic)",
      "Active component and Reactive component only",
      "Copper component and Iron component",
      "Primary and Secondary component"
    ],
    "exp": "The no-load current consists of the magnetising component (Im) which creates the flux, and the core loss component (Ic) which supplies the iron losses.",
    "id": "T05_Transformers_063",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What is the function of the magnetising component (Im)?",
    "a": "It creates the alternating magnetic flux in the core",
    "opts": [
      "It creates the alternating magnetic flux in the core",
      "It heats the copper windings",
      "It supplies the load",
      "It prevents overvoltage"
    ],
    "exp": "The magnetising component (Im) is entirely responsible for establishing and maintaining the alternating magnetic flux in the core.",
    "id": "T05_Transformers_064",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What is the phase relationship of the magnetising component (Im) to the applied voltage?",
    "a": "It lags the voltage by 90 degrees",
    "opts": [
      "It lags the voltage by 90 degrees",
      "It is in phase with the voltage",
      "It leads the voltage by 90 degrees",
      "It is 180 degrees out of phase"
    ],
    "exp": "Because it acts as a pure inductor to create the magnetic field, the magnetising component (Im) lags the applied voltage by exactly 90 degrees.",
    "id": "T05_Transformers_065",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What is the phase relationship of the core loss component (Ic) to the applied voltage?",
    "a": "It is in phase with the voltage",
    "opts": [
      "It is in phase with the voltage",
      "It lags by 90 degrees",
      "It leads by 90 degrees",
      "It lags by 45 degrees"
    ],
    "exp": "The core loss component (Ic) supplies the active power for hysteresis and eddy currents, so it is in phase with the applied voltage like a resistive load.",
    "id": "T05_Transformers_066",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What is the typical power factor of a transformer on no-load?",
    "a": "Very low and lagging (0.1 to 0.3)",
    "opts": [
      "Very low and lagging (0.1 to 0.3)",
      "Unity (1.0)",
      "High leading (0.9)",
      "Zero exactly"
    ],
    "exp": "The no-load power factor is very low and lagging, typically between 0.1 and 0.3.",
    "id": "T05_Transformers_067",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "Why is the no-load power factor so low?",
    "a": "Because the current is primarily reactive (magnetising the core)",
    "opts": [
      "Because the current is primarily reactive (magnetising the core)",
      "Because iron losses are huge",
      "Because the voltage is too high",
      "Because copper losses dominate"
    ],
    "exp": "The power factor is low because the highly reactive magnetising component (Im) is much larger than the active core loss component (Ic).",
    "id": "T05_Transformers_068",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "When a load is connected, what does the secondary current (I2) do to the core?",
    "a": "It creates a demagnetising MMF that opposes the primary flux",
    "opts": [
      "It creates a demagnetising MMF that opposes the primary flux",
      "It creates an MMF that adds to the primary flux",
      "It has no effect on the core flux",
      "It stops the core flux completely"
    ],
    "exp": "Secondary current flows according to Lenz's Law, creating a demagnetising Magneto-Motive Force (MMF) that directly opposes the primary flux.",
    "id": "T05_Transformers_069",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "How does the primary winding react to the secondary's demagnetising MMF?",
    "a": "It draws additional current from the supply to counteract it and restore the flux",
    "opts": [
      "It draws additional current from the supply to counteract it and restore the flux",
      "It reduces its voltage to compensate",
      "It trips the circuit breaker",
      "It draws less current"
    ],
    "exp": "To maintain the flux required to balance the supply voltage, the primary draws additional current to create an MMF that exactly cancels the secondary's demagnetising MMF.",
    "id": "T05_Transformers_070",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What is the term for this additional primary current drawn due to load?",
    "a": "Load reflected current or load component",
    "opts": [
      "Load reflected current or load component",
      "Magnetising current",
      "Eddy current",
      "Leakage current"
    ],
    "exp": "This additional current is called the load reflected current. It is proportional to the secondary current divided by the turns ratio.",
    "id": "T05_Transformers_071",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What happens to the core flux as load increases from zero to full load?",
    "a": "It remains approximately constant",
    "opts": [
      "It remains approximately constant",
      "It increases proportionally",
      "It decreases to zero",
      "It doubles"
    ],
    "exp": "The core flux remains approximately constant from no-load to full load because the primary load current always perfectly balances the secondary load current.",
    "id": "T05_Transformers_072",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "Because flux remains constant, what else remains nearly constant on the primary side?",
    "a": "Back-EMF and core losses",
    "opts": [
      "Back-EMF and core losses",
      "Copper losses",
      "Primary current",
      "Power factor"
    ],
    "exp": "Since core flux is constant, the induced back-EMF and the iron (core) losses also remain nearly constant regardless of the load.",
    "id": "T05_Transformers_073",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What determines the power factor of a transformer when it is fully loaded?",
    "a": "The power factor of the connected load",
    "opts": [
      "The power factor of the connected load",
      "The no-load power factor",
      "The thickness of the core",
      "The size of the windings"
    ],
    "exp": "When fully loaded, the transformer's overall power factor is almost entirely dictated by the power factor of the connected load (e.g., motors will make it lagging).",
    "id": "T05_Transformers_074",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "Is the primary current exactly equal to the reflected secondary current?",
    "a": "No, primary current is the vector sum of no-load current and reflected load current",
    "opts": [
      "No, primary current is the vector sum of no-load current and reflected load current",
      "Yes, they are always identical",
      "No, primary is always less",
      "Yes, but only on DC"
    ],
    "exp": "Primary current is the phasor (vector) sum of the no-load magnetising current (I0) and the reflected secondary load current.",
    "id": "T05_Transformers_075",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "Why do transformers have iron losses even when nothing is connected to the secondary?",
    "a": "Because the primary is always magnetising the core, causing hysteresis and eddy currents",
    "opts": [
      "Because the primary is always magnetising the core, causing hysteresis and eddy currents",
      "Because of copper resistance",
      "Because oil gets hot automatically",
      "Because of cosmic radiation"
    ],
    "exp": "Because the primary winding remains connected to the supply and must continuously maintain the magnetic flux in the core, which requires energy for hysteresis and eddy currents.",
    "id": "T05_Transformers_076",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "If a transformer's secondary is open, what is the power consumed from the supply equal to?",
    "a": "The iron losses (core losses)",
    "opts": [
      "The iron losses (core losses)",
      "Zero",
      "Full load copper losses",
      "The reactive power only"
    ],
    "exp": "With the secondary open, the only power consumed is the active power required to overcome hysteresis and eddy current losses in the core.",
    "id": "T05_Transformers_077",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What is the formula for the primary current (I1) on load?",
    "a": "I1 = I0 + I2(N2/N1)",
    "opts": [
      "I1 = I0 + I2(N2/N1)",
      "I1 = I0 - I2",
      "I1 = I2 x N1",
      "I1 = V1 / R1"
    ],
    "exp": "The total primary current is the vector sum of the no-load current (I0) and the reflected load current (I2 * N2/N1).",
    "id": "T05_Transformers_078",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What opposes the applied voltage in the primary winding?",
    "a": "The induced back-EMF",
    "opts": [
      "The induced back-EMF",
      "The secondary voltage",
      "The core resistance",
      "The oil temperature"
    ],
    "exp": "The alternating magnetic flux induces a back-EMF (E1) in the primary winding that is nearly equal and opposite to the applied supply voltage (V1).",
    "id": "T05_Transformers_079",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "If the secondary current increases by 10A in a 1:1 transformer, how much does the primary current increase?",
    "a": "Approximately 10A",
    "opts": [
      "Approximately 10A",
      "1A",
      "100A",
      "0A"
    ],
    "exp": "In a 1:1 transformer, the turns ratio is 1. Therefore, an increase of 10A in the secondary causes a corresponding increase of 10A in the primary.",
    "id": "T05_Transformers_080",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What is leakage flux?",
    "a": "Magnetic flux that does not link both primary and secondary windings",
    "opts": [
      "Magnetic flux that does not link both primary and secondary windings",
      "Flux that escapes the transformer tank",
      "Flux that enters the oil",
      "Flux that is constant"
    ],
    "exp": "Leakage flux is magnetic flux that completes its path through the air or oil rather than linking both the primary and secondary windings in the core.",
    "id": "T05_Transformers_081",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "How is leakage flux modelled in a transformer equivalent circuit?",
    "a": "As leakage reactance (inductors in series with windings)",
    "opts": [
      "As leakage reactance (inductors in series with windings)",
      "As a parallel resistor",
      "As a capacitor",
      "As a voltage source"
    ],
    "exp": "Leakage flux causes a voltage drop, so it is modelled as leakage reactance (inductors) in series with the primary and secondary windings in the equivalent circuit.",
    "id": "T05_Transformers_082",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "Why is a transformer called a 'constant flux' device?",
    "a": "The primary draws exactly enough load current to cancel the secondary MMF, keeping net flux constant",
    "opts": [
      "The primary draws exactly enough load current to cancel the secondary MMF, keeping net flux constant",
      "The flux never changes direction",
      "DC is used to keep it constant",
      "The core is made of permanent magnets"
    ],
    "exp": "It is a constant flux device because any demagnetising effect from the secondary load is instantly countered by an equal increase in primary magnetising current.",
    "id": "T05_Transformers_083",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What happens to the primary voltage drop (I1 x Z1) as load increases?",
    "a": "It increases slightly, causing a small drop in terminal voltage",
    "opts": [
      "It increases slightly, causing a small drop in terminal voltage",
      "It decreases to zero",
      "It remains perfectly constant",
      "It causes the frequency to drop"
    ],
    "exp": "As load current increases, the voltage drop across the primary winding's resistance and leakage reactance increases, slightly reducing the effective voltage inducing the core flux.",
    "id": "T05_Transformers_084",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What does a vector diagram of a loaded transformer show?",
    "a": "Primary current is the phasor sum of I0 and the reflected load current",
    "opts": [
      "Primary current is the phasor sum of I0 and the reflected load current",
      "Primary current is always in phase with voltage",
      "Secondary current leads voltage by 180 degrees",
      "Flux is zero"
    ],
    "exp": "It visually shows how the small, highly lagging no-load current (I0) vectorially adds to the much larger reflected load current to form the total primary current.",
    "id": "T05_Transformers_085",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What happens internally when I switch on a load?",
    "a": "Secondary current flows, creates opposing flux, primary draws more current to restore flux",
    "opts": [
      "Secondary current flows, creates opposing flux, primary draws more current to restore flux",
      "Voltage jumps up, frequency drops",
      "Iron losses double",
      "Magnetising current drops to zero"
    ],
    "exp": "When a load is switched on, secondary current flows, creating an opposing flux. The primary instantly draws more current to cancel this opposing flux and maintain the core's magnetic state.",
    "id": "T05_Transformers_086",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What is the main difference between I0 and full load I1?",
    "a": "I0 is mostly reactive for flux; I1 is mostly active (if load is active) transferring power",
    "opts": [
      "I0 is mostly reactive for flux; I1 is mostly active (if load is active) transferring power",
      "I0 is DC; I1 is AC",
      "I0 is larger than I1",
      "I0 causes copper loss; I1 causes iron loss"
    ],
    "exp": "I0 is purely for magnetising the core and covering iron losses (reactive), whereas I1 is mostly the active current transferring actual power to the secondary load.",
    "id": "T05_Transformers_087",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What ensures the primary draws the exact right amount of current when load changes?",
    "a": "The delicate balance between applied voltage and induced back-EMF",
    "opts": [
      "The delicate balance between applied voltage and induced back-EMF",
      "A mechanical governor",
      "The AVR",
      "The Buchholz relay"
    ],
    "exp": "If secondary flux tries to reduce the core flux, the primary back-EMF drops. This allows the constant supply voltage to push more current into the primary until the flux is restored.",
    "id": "T05_Transformers_088",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "If secondary load is highly capacitive, what might happen to secondary voltage?",
    "a": "It might rise above the no-load voltage (Ferranti effect / negative regulation)",
    "opts": [
      "It might rise above the no-load voltage (Ferranti effect / negative regulation)",
      "It will drop to zero",
      "It will become DC",
      "It will catch fire"
    ],
    "exp": "A highly capacitive load can cause a leading current that actually assists the primary flux, leading to a secondary voltage higher than the no-load voltage (negative voltage regulation).",
    "id": "T05_Transformers_089",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "Can a transformer operate safely on no-load indefinitely?",
    "a": "Yes, it only draws small magnetising current and dissipates constant iron losses",
    "opts": [
      "Yes, it only draws small magnetising current and dissipates constant iron losses",
      "No, it will over-speed",
      "No, it must have at least 10% load",
      "No, it will explode without load"
    ],
    "exp": "Yes, a transformer can safely operate on no-load indefinitely. It will just draw its small magnetising current and dissipate its constant iron losses as heat.",
    "id": "T05_Transformers_090",
    "topic": "T05_Transformers",
    "cat": "No-Load vs On-Load"
  },
  {
    "q": "What is the primary physical difference between an auto-transformer and a double-wound transformer?",
    "a": "An auto-transformer has only one winding shared by primary and secondary",
    "opts": [
      "An auto-transformer has only one winding shared by primary and secondary",
      "An auto-transformer has no core",
      "A double-wound has three windings",
      "An auto-transformer uses DC"
    ],
    "exp": "An auto-transformer uses a single continuous winding that serves as both the primary and secondary, whereas a double-wound transformer uses two completely separate windings.",
    "id": "T05_Transformers_091",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "Does an auto-transformer provide electrical (galvanic) isolation?",
    "a": "No, primary and secondary are electrically connected",
    "opts": [
      "No, primary and secondary are electrically connected",
      "Yes, complete isolation",
      "Only on DC",
      "Yes, but only on the neutral side"
    ],
    "exp": "No. Because primary and secondary share the same winding, there is a direct electrical connection (no galvanic isolation) between the input and output.",
    "id": "T05_Transformers_092",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "Why is an auto-transformer often smaller and lighter than a double-wound equivalent?",
    "a": "It uses only one winding, saving copper material",
    "opts": [
      "It uses only one winding, saving copper material",
      "It operates at a higher frequency",
      "It uses aluminum instead of copper",
      "It doesn't have a magnetic core"
    ],
    "exp": "Since it shares a single winding, it requires significantly less copper and a smaller iron core for the same kVA rating.",
    "id": "T05_Transformers_093",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "Which of the following has lower copper losses for the same rating?",
    "a": "Auto-transformer",
    "opts": [
      "Auto-transformer",
      "Double-wound transformer",
      "They are exactly equal",
      "Flyback transformer"
    ],
    "exp": "An auto-transformer has lower copper losses because a portion of its winding carries only the difference between the primary and secondary currents.",
    "id": "T05_Transformers_094",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "Why does an auto-transformer have lower copper loss?",
    "a": "Because a portion of the winding carries only the difference between primary and secondary currents",
    "opts": [
      "Because a portion of the winding carries only the difference between primary and secondary currents",
      "Because it uses thicker wire everywhere",
      "Because it uses superconducting wire",
      "Because it has no core"
    ],
    "exp": "The common part of the winding carries only the difference between the primary and secondary currents (I2 - I1), reducing the overall I²R heating.",
    "id": "T05_Transformers_095",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "What is a major safety hazard of using an auto-transformer?",
    "a": "If the winding breaks at the tap, full primary voltage can appear on the secondary",
    "opts": [
      "If the winding breaks at the tap, full primary voltage can appear on the secondary",
      "It produces toxic gases",
      "It can reverse the frequency",
      "It drains the ship's battery"
    ],
    "exp": "If the common winding breaks (e.g., at the tap point), the full primary high voltage can be transferred directly to the secondary load, posing a severe electrocution and equipment hazard.",
    "id": "T05_Transformers_096",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "Can an auto-transformer be used for a ship's shore connection?",
    "a": "No, because shore connection requires complete electrical isolation",
    "opts": [
      "No, because shore connection requires complete electrical isolation",
      "Yes, it is the standard choice",
      "Only if the ship is 60Hz",
      "Yes, because it is cheaper"
    ],
    "exp": "No. Shore connections must have complete galvanic isolation to prevent the solidly earthed shore supply from connecting to the ship's unearthed (IT) system.",
    "id": "T05_Transformers_097",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "Why does shore connection require a double-wound transformer?",
    "a": "To break the galvanic path between the solidly earthed shore and the unearthed ship to prevent hull corrosion",
    "opts": [
      "To break the galvanic path between the solidly earthed shore and the unearthed ship to prevent hull corrosion",
      "To change DC to AC",
      "To increase the frequency",
      "To save weight on the ship"
    ],
    "exp": "Without a double-wound isolation transformer, the shore earth would connect to the ship's hull, causing stray currents that lead to severe electrolytic hull corrosion.",
    "id": "T05_Transformers_098",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "Where are auto-transformers typically used on ships?",
    "a": "In reduced-voltage motor starters (e.g. 65% or 80% tap)",
    "opts": [
      "In reduced-voltage motor starters (e.g. 65% or 80% tap)",
      "For GMDSS power supply",
      "For medical equipment isolation",
      "For shore power connections"
    ],
    "exp": "Auto-transformers are typically used for reduced-voltage motor starters (auto-transformer starters) and for simple voltage adaptation between similar levels (e.g., 440V to 380V).",
    "id": "T05_Transformers_099",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "What does a double-wound transformer have that an auto-transformer lacks?",
    "a": "Two separate, electrically isolated windings (primary and secondary)",
    "opts": [
      "Two separate, electrically isolated windings (primary and secondary)",
      "A magnetic core",
      "Cooling oil",
      "A Buchholz relay"
    ],
    "exp": "A double-wound transformer has two separate, electrically isolated windings (primary and secondary), providing galvanic isolation between the input and output circuits.",
    "id": "T05_Transformers_100",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "Which transformer type is generally cheaper to manufacture for a small voltage ratio?",
    "a": "Auto-transformer",
    "opts": [
      "Auto-transformer",
      "Double-wound transformer",
      "Isolation transformer",
      "Flyback transformer"
    ],
    "exp": "An auto-transformer is generally cheaper for small voltage ratios (like 440V to 380V) because it saves significant copper and iron compared to a double-wound transformer.",
    "id": "T05_Transformers_101",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "What is 'voltage adaptation' in the context of an auto-transformer?",
    "a": "Using it to match slightly different system voltages (e.g., 440V to 380V)",
    "opts": [
      "Using it to match slightly different system voltages (e.g., 440V to 380V)",
      "Converting AC to DC",
      "Changing 50Hz to 60Hz",
      "Regulating voltage dynamically"
    ],
    "exp": "Voltage adaptation means using an auto-transformer to match slightly different system voltages without requiring full isolation, such as stepping 440V down to 380V or 415V.",
    "id": "T05_Transformers_102",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "What happens to efficiency in an auto-transformer compared to double-wound?",
    "a": "It is generally higher due to lower copper and iron losses",
    "opts": [
      "It is generally higher due to lower copper and iron losses",
      "It is lower due to sharing the winding",
      "It is exactly the same",
      "It drops to zero on full load"
    ],
    "exp": "Efficiency is generally higher in an auto-transformer because it uses less copper (lower I²R loss) and a smaller core (lower iron loss).",
    "id": "T05_Transformers_103",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "If an auto-transformer steps 440V down to 220V, what is the turns ratio (primary to secondary)?",
    "a": "2:1",
    "opts": [
      "2:1",
      "1:2",
      "4:1",
      "1:4"
    ],
    "exp": "A step-down from 440V to 220V means the primary voltage is twice the secondary voltage, giving a turns ratio (N1/N2) of 2:1.",
    "id": "T05_Transformers_104",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "In a step-down auto-transformer, where is the secondary voltage taken from?",
    "a": "Across a tapped section of the main winding",
    "opts": [
      "Across a tapped section of the main winding",
      "From a separate coil",
      "From the core directly",
      "From the neutral only"
    ],
    "exp": "In a step-down auto-transformer, the secondary voltage is tapped off a smaller section of the main continuous winding.",
    "id": "T05_Transformers_105",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "Why is a double-wound transformer considered 'safer' for general distribution?",
    "a": "A primary fault will not transfer lethal primary voltage directly to the secondary circuit",
    "opts": [
      "A primary fault will not transfer lethal primary voltage directly to the secondary circuit",
      "It doesn't use oil",
      "It has a built-in circuit breaker",
      "It operates at lower temperatures"
    ],
    "exp": "Because it provides galvanic isolation. A fault in the primary circuit (like a high-voltage surge) cannot cross over directly to the secondary circuit, protecting users and equipment.",
    "id": "T05_Transformers_106",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "Are intrinsically safe circuits allowed to be powered by an auto-transformer?",
    "a": "No, they must be galvanically isolated via a double-wound transformer",
    "opts": [
      "No, they must be galvanically isolated via a double-wound transformer",
      "Yes, to save space",
      "Yes, if the voltage is 24V",
      "Yes, if they are explosion proof"
    ],
    "exp": "No, intrinsically safe circuits must be powered via a double-wound transformer to ensure complete galvanic isolation and prevent any direct path to dangerous high voltages.",
    "id": "T05_Transformers_107",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "What is the common term for the shared part of the winding in an auto-transformer?",
    "a": "The common winding",
    "opts": [
      "The common winding",
      "The series winding",
      "The primary winding only",
      "The secondary winding only"
    ],
    "exp": "The common winding is the tapped section of the auto-transformer that carries the difference between the primary and secondary currents.",
    "id": "T05_Transformers_108",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "For a 1:1 voltage ratio, which transformer makes sense to use?",
    "a": "An isolation (double-wound) transformer",
    "opts": [
      "An isolation (double-wound) transformer",
      "An auto-transformer",
      "Neither, you don't need a transformer",
      "A flyback transformer"
    ],
    "exp": "For a 1:1 ratio, an auto-transformer makes no sense as there's no voltage change. A double-wound isolation transformer is used to provide galvanic separation.",
    "id": "T05_Transformers_109",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "What is the main reason an auto-transformer has better voltage regulation?",
    "a": "It has lower leakage reactance because there is only one winding",
    "opts": [
      "It has lower leakage reactance because there is only one winding",
      "It has a built-in AVR",
      "It runs faster",
      "It uses more iron"
    ],
    "exp": "An auto-transformer has better voltage regulation because it only has one winding, meaning it has significantly lower leakage reactance than a two-winding transformer.",
    "id": "T05_Transformers_110",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "Why not use an auto-transformer everywhere to save cost?",
    "a": "Because it lacks galvanic isolation, which is critical for safety and specific system earthing requirements",
    "opts": [
      "Because it lacks galvanic isolation, which is critical for safety and specific system earthing requirements",
      "Because they are too heavy",
      "Because they cannot step up voltage",
      "Because they only work on DC"
    ],
    "exp": "Auto-transformers lack galvanic isolation. If the common winding fails, full primary voltage appears on the secondary. Isolation is critical for shipboard safety and unearthed IT systems.",
    "id": "T05_Transformers_111",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "Can an auto-transformer step up voltage?",
    "a": "Yes, by applying input to the tapped section and taking output across the full winding",
    "opts": [
      "Yes, by applying input to the tapped section and taking output across the full winding",
      "No, they can only step down",
      "Yes, but only on DC",
      "No, it violates conservation of energy"
    ],
    "exp": "Yes. By applying the input voltage across the tapped section (fewer turns) and taking the output from the full winding (more turns), it acts as a step-up transformer.",
    "id": "T05_Transformers_112",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "What is the circulating current component in an auto-transformer?",
    "a": "The current in the common winding (I2 - I1)",
    "opts": [
      "The current in the common winding (I2 - I1)",
      "The eddy current in the core",
      "The current in the load",
      "The reactive power"
    ],
    "exp": "The circulating current component is the current flowing in the shared portion of the winding, which is equal to the difference between the secondary and primary currents (I2 - I1).",
    "id": "T05_Transformers_113",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "Which system requires a double-wound transformer to prevent stray currents?",
    "a": "Shore to ship power transfer",
    "opts": [
      "Shore to ship power transfer",
      "Main engine starting",
      "Galley hot plates",
      "Cabin lighting"
    ],
    "exp": "Shore-to-ship power transfer requires a double-wound transformer to isolate the shore's earthed neutral from the ship's unearthed system, preventing stray current corrosion.",
    "id": "T05_Transformers_114",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "What is the definition of galvanic isolation?",
    "a": "No direct electrical conduction path exists between two circuits",
    "opts": [
      "No direct electrical conduction path exists between two circuits",
      "Both circuits share a common earth",
      "Both circuits use the same frequency",
      "Both circuits are submerged in oil"
    ],
    "exp": "Galvanic isolation means there is no direct electrical conduction path (no metallic connection) between two circuits; they are coupled only magnetically or optically.",
    "id": "T05_Transformers_115",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "Is a standard welding transformer double-wound or auto-wound?",
    "a": "Double-wound, to isolate the welder from dangerous mains voltage",
    "opts": [
      "Double-wound, to isolate the welder from dangerous mains voltage",
      "Auto-wound, to save weight",
      "Neither, it uses DC",
      "It depends on the welding rod"
    ],
    "exp": "A welding transformer must be double-wound to completely isolate the operator from the dangerous mains voltage, preventing electrocution.",
    "id": "T05_Transformers_116",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "What would happen if the common neutral connection in a step-down auto-transformer broke?",
    "a": "The secondary could rise to full primary potential relative to ground",
    "opts": [
      "The secondary could rise to full primary potential relative to ground",
      "The transformer would explode instantly",
      "The secondary voltage would double safely",
      "Nothing, it would continue normally"
    ],
    "exp": "If the common neutral breaks, the secondary is no longer stepping down the voltage relative to ground, and the load could be exposed to the full primary high voltage.",
    "id": "T05_Transformers_117",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "Which transformer uses the least amount of copper for a 440V to 400V step-down?",
    "a": "Auto-transformer",
    "opts": [
      "Auto-transformer",
      "Double-wound transformer",
      "Isolation transformer",
      "Current transformer"
    ],
    "exp": "An auto-transformer. For a small voltage ratio (440V to 400V), the auto-transformer uses far less copper than a double-wound transformer.",
    "id": "T05_Transformers_118",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "What is the primary function of an isolation transformer on a ship?",
    "a": "To isolate the unearthed ship system from solidly earthed systems (like shore or specific equipment)",
    "opts": [
      "To isolate the unearthed ship system from solidly earthed systems (like shore or specific equipment)",
      "To increase the voltage",
      "To change the frequency",
      "To provide DC power"
    ],
    "exp": "The primary function is to provide galvanic isolation, keeping the ship's unearthed (IT) distribution system separate from any solidly earthed external supplies or specific equipment.",
    "id": "T05_Transformers_119",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "Which transformer type has more leakage flux?",
    "a": "Double-wound transformer",
    "opts": [
      "Double-wound transformer",
      "Auto-transformer",
      "They have zero leakage flux",
      "Flyback transformer"
    ],
    "exp": "A double-wound transformer inherently has more leakage flux because the primary and secondary windings are physically separated, creating more paths for flux to escape.",
    "id": "T05_Transformers_120",
    "topic": "T05_Transformers",
    "cat": "Auto vs Double-Wound"
  },
  {
    "q": "What does CT stand for?",
    "a": "Current Transformer",
    "opts": [
      "Current Transformer",
      "Capacitance Transformer",
      "Constant Transformer",
      "Control Transformer"
    ],
    "exp": "CT stands for Current Transformer, a device used to step down large currents for measurement and protection.",
    "id": "T05_Transformers_121",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "What is the primary purpose of a CT?",
    "a": "To step down large currents to a standard, safe 5A or 1A for measurement and relays",
    "opts": [
      "To step down large currents to a standard, safe 5A or 1A for measurement and relays",
      "To step down high voltage",
      "To step up voltage for transmission",
      "To measure frequency"
    ],
    "exp": "The primary purpose is to safely step down massive primary currents to standard, safe values like 5A or 1A, so standard instruments and protection relays can be used.",
    "id": "T05_Transformers_122",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "How is the primary of a CT connected in a circuit?",
    "a": "In series with the line",
    "opts": [
      "In series with the line",
      "In parallel across the line",
      "To ground",
      "To the neutral only"
    ],
    "exp": "The primary of a CT is always connected in series with the line carrying the current to be measured.",
    "id": "T05_Transformers_123",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "What does PT (or VT) stand for?",
    "a": "Potential Transformer (or Voltage Transformer)",
    "opts": [
      "Potential Transformer (or Voltage Transformer)",
      "Power Transformer",
      "Phase Transformer",
      "Pulse Transformer"
    ],
    "exp": "PT (or VT) stands for Potential Transformer (or Voltage Transformer), used to step down high voltages.",
    "id": "T05_Transformers_124",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "How is the primary of a PT connected in a circuit?",
    "a": "In parallel across the line voltage",
    "opts": [
      "In parallel across the line voltage",
      "In series with the line",
      "To the current transformer",
      "To the battery"
    ],
    "exp": "The primary of a PT is always connected in parallel across the line voltage being measured.",
    "id": "T05_Transformers_125",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "What is a critical safety rule regarding a CT?",
    "a": "NEVER open-circuit the secondary while the primary is energised",
    "opts": [
      "NEVER open-circuit the secondary while the primary is energised",
      "NEVER short-circuit the secondary",
      "NEVER ground the secondary",
      "NEVER connect an ammeter to it"
    ],
    "exp": "NEVER open-circuit the secondary of a CT while the primary is energised carrying load current.",
    "id": "T05_Transformers_126",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "Why must a CT secondary never be open-circuited?",
    "a": "Without opposing secondary current, the core saturates and induces lethal high voltages (thousands of volts)",
    "opts": [
      "Without opposing secondary current, the core saturates and induces lethal high voltages (thousands of volts)",
      "It will trip the main generator",
      "It will reverse the current flow",
      "It will drain the battery"
    ],
    "exp": "An open CT secondary means no opposing demagnetising flux. The primary MMF fully saturates the core, inducing extremely high, lethal voltages (thousands of volts) in the secondary.",
    "id": "T05_Transformers_127",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "What happens to the CT core if left open-circuited?",
    "a": "It overheats rapidly due to extreme iron losses",
    "opts": [
      "It overheats rapidly due to extreme iron losses",
      "It freezes",
      "It loses its magnetism permanently",
      "It turns into a permanent magnet"
    ],
    "exp": "Without a secondary current to oppose it, the primary flux saturates the core. This causes extreme iron losses, which rapidly overheat and destroy the CT.",
    "id": "T05_Transformers_128",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "What is the correct procedure before removing an ammeter from a live CT?",
    "a": "Short-circuit the CT secondary terminals first",
    "opts": [
      "Short-circuit the CT secondary terminals first",
      "Turn off the ship's engine",
      "Open the circuit breaker",
      "Disconnect the primary bar"
    ],
    "exp": "Before removing any instrument, you must first heavily short-circuit the CT secondary terminals using a secure shorting link.",
    "id": "T05_Transformers_129",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "What is a critical safety rule regarding a PT?",
    "a": "NEVER short-circuit the secondary",
    "opts": [
      "NEVER short-circuit the secondary",
      "NEVER open-circuit the secondary",
      "NEVER ground it",
      "NEVER connect a voltmeter"
    ],
    "exp": "NEVER short-circuit the secondary of a Potential Transformer (PT).",
    "id": "T05_Transformers_130",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "Why must a PT never be short-circuited?",
    "a": "It will draw massive current and destroy the PT windings",
    "opts": [
      "It will draw massive current and destroy the PT windings",
      "It will induce lethal voltage",
      "It will cause reverse power",
      "It will magnetize the core"
    ],
    "exp": "A PT is connected across the full voltage. Short-circuiting the secondary will draw a massive fault current, overheating and instantly destroying the PT windings.",
    "id": "T05_Transformers_131",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "How is a PT protected against accidental short circuits?",
    "a": "By installing fuses on the secondary side",
    "opts": [
      "By installing fuses on the secondary side",
      "By using a shorting link",
      "By using heavy copper wire",
      "By submerging it in oil"
    ],
    "exp": "PTs are protected by installing fast-acting fuses on their secondary side to clear any accidental short circuits.",
    "id": "T05_Transformers_132",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "What is the standard secondary current for a marine CT?",
    "a": "5A (or sometimes 1A)",
    "opts": [
      "5A (or sometimes 1A)",
      "110V",
      "10A",
      "100A"
    ],
    "exp": "The standard secondary rating for a marine Current Transformer (CT) is 5A (or sometimes 1A for specialized digital relays).",
    "id": "T05_Transformers_133",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "What is the standard secondary voltage for a marine PT?",
    "a": "110V (or 120V)",
    "opts": [
      "110V (or 120V)",
      "5A",
      "220V",
      "440V"
    ],
    "exp": "The standard secondary voltage rating for a marine Potential Transformer (PT) is 110V (or 120V).",
    "id": "T05_Transformers_134",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "What is a typical construction for a CT primary?",
    "a": "A single thick bus bar passing through the toroidal core (1 turn)",
    "opts": [
      "A single thick bus bar passing through the toroidal core (1 turn)",
      "Thousands of turns of thin wire",
      "Two separate windings",
      "A variable resistor"
    ],
    "exp": "A CT primary often consists of just a single thick bus bar or heavy cable passing straight through the centre of the toroidal secondary core.",
    "id": "T05_Transformers_135",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "Which instrument uses inputs from BOTH a CT and a PT?",
    "a": "Wattmeter (or Reverse Power Relay)",
    "opts": [
      "Wattmeter (or Reverse Power Relay)",
      "Ammeter",
      "Voltmeter",
      "Frequency meter"
    ],
    "exp": "A Wattmeter (or a Reverse Power Relay) requires both voltage (from a PT) and current (from a CT) to calculate active power (V x I x cos(phi)).",
    "id": "T05_Transformers_136",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "Does an overcurrent relay (OCR) require a CT or a PT?",
    "a": "CT",
    "opts": [
      "CT",
      "PT",
      "Both",
      "Neither"
    ],
    "exp": "An overcurrent relay (OCR) requires a CT, as it monitors the current level to trip the breaker during an overload or short circuit.",
    "id": "T05_Transformers_137",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "Does a synchroscope require a CT or a PT?",
    "a": "PT",
    "opts": [
      "PT",
      "CT",
      "Both",
      "Neither"
    ],
    "exp": "A synchroscope requires a PT, as it compares the voltage, frequency, and phase angle of the incoming generator against the busbar.",
    "id": "T05_Transformers_138",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "What happens to the primary current of a CT if you short the secondary?",
    "a": "Primary current is unaffected; it is determined entirely by the main load",
    "opts": [
      "Primary current is unaffected; it is determined entirely by the main load",
      "Primary current drops to zero",
      "Primary current doubles",
      "Primary current reverses"
    ],
    "exp": "Shorting a CT secondary has virtually no effect on the primary current. The primary current is determined entirely by the main power load connected to the circuit.",
    "id": "T05_Transformers_139",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "Why is one end of a PT secondary usually earthed?",
    "a": "To prevent dangerous primary voltage appearing on the instrument panel if insulation fails",
    "opts": [
      "To prevent dangerous primary voltage appearing on the instrument panel if insulation fails",
      "To complete the circuit",
      "To increase the voltage",
      "To protect against lightning"
    ],
    "exp": "One end of a PT secondary is solidly earthed so that if the internal insulation fails, the high primary voltage is shunted to ground instead of electrifying the instrument panel.",
    "id": "T05_Transformers_140",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "What does a CT ratio of '1000/5' mean?",
    "a": "When 1000A flows in primary, 5A flows in secondary",
    "opts": [
      "When 1000A flows in primary, 5A flows in secondary",
      "It steps down 1000V to 5V",
      "It has 1000 primary turns and 5 secondary turns",
      "It weighs 1000/5 kg"
    ],
    "exp": "A 1000/5 CT ratio means that a primary current of 1000A will induce a secondary current of 5A (a step-down ratio of 200:1).",
    "id": "T05_Transformers_141",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "If 500A flows through a 1000/5 CT, what will the ammeter read directly from the secondary?",
    "a": "2.5A (though the dial scale will say 500A)",
    "opts": [
      "2.5A (though the dial scale will say 500A)",
      "5A",
      "10A",
      "100A"
    ],
    "exp": "If 500A (half of 1000A) flows in the primary, the secondary will output 2.5A (half of 5A). The ammeter dial is simply calibrated to display '500A' when it receives 2.5A.",
    "id": "T05_Transformers_142",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "What is meant by 'CT burden'?",
    "a": "The total load (in VA or ohms) connected across the CT secondary terminals",
    "opts": [
      "The total load (in VA or ohms) connected across the CT secondary terminals",
      "The physical weight of the CT",
      "The voltage on the primary",
      "The heat generated by the core"
    ],
    "exp": "CT burden refers to the total electrical load (impedance in ohms or apparent power in VA) of the instruments and wiring connected across the CT secondary.",
    "id": "T05_Transformers_143",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "Why are protection CTs designed to saturate at very high currents (e.g., 10 times rated)?",
    "a": "To prevent damaging the sensitive protection relays during massive short circuits",
    "opts": [
      "To prevent damaging the sensitive protection relays during massive short circuits",
      "To increase accuracy",
      "To blow the fuses faster",
      "To stop the current flow"
    ],
    "exp": "Protection CTs (e.g., class 5P10) are designed to saturate at a specific multiple of rated current (like 10x) so they don't produce excessive secondary current that would melt the relay.",
    "id": "T05_Transformers_144",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "What does an accuracy class of '0.5' mean on a metering CT?",
    "a": "Error is within +/- 0.5% at rated current",
    "opts": [
      "Error is within +/- 0.5% at rated current",
      "It outputs 0.5A",
      "It requires 0.5V to operate",
      "It lasts 0.5 years"
    ],
    "exp": "An accuracy class of 0.5 means the CT's current output will have a maximum error of +/- 0.5% when operating at its rated current.",
    "id": "T05_Transformers_145",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "What happens if the wire to the ammeter breaks?",
    "a": "The CT is open-circuited, producing lethal high voltage and destroying the CT",
    "opts": [
      "The CT is open-circuited, producing lethal high voltage and destroying the CT",
      "The ammeter reads maximum",
      "The main breaker trips",
      "Nothing, just replace the wire"
    ],
    "exp": "If the wire to the ammeter breaks, the CT secondary is open-circuited. This will immediately produce lethal high voltage at the break and destroy the CT through overheating.",
    "id": "T05_Transformers_146",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "Can you use a standard multimeter to measure current across an open CT?",
    "a": "NO, the lethal high voltage can destroy the meter and electrocute you",
    "opts": [
      "NO, the lethal high voltage can destroy the meter and electrocute you",
      "Yes, it is perfectly safe",
      "Only if it is set to DC",
      "Yes, if the dial is red"
    ],
    "exp": "No, attempting to measure current across an open CT with a standard multimeter is extremely dangerous due to the lethal high voltages present, which can arc and cause electrocution.",
    "id": "T05_Transformers_147",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "How is a clamp meter related to a CT?",
    "a": "It acts exactly like a split-core CT, where the wire you clamp around is the primary",
    "opts": [
      "It acts exactly like a split-core CT, where the wire you clamp around is the primary",
      "It is a PT",
      "It is an auto-transformer",
      "It is a flyback transformer"
    ],
    "exp": "A clamp meter uses a split magnetic core that closes around a live wire. The live wire acts as a 1-turn primary, making the clamp meter functionally identical to a CT.",
    "id": "T05_Transformers_148",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "What is the primary impedance of a CT?",
    "a": "Very low, so it doesn't restrict or affect the main circuit current",
    "opts": [
      "Very low, so it doesn't restrict or affect the main circuit current",
      "Very high, to limit current",
      "Exactly 50 ohms",
      "Infinite"
    ],
    "exp": "The primary impedance of a CT must be extremely low (often just a solid bus bar) so it does not restrict current flow or cause a voltage drop in the main circuit.",
    "id": "T05_Transformers_149",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "What is the primary impedance of a PT?",
    "a": "Very high, so it doesn't draw heavy current from the main bus",
    "opts": [
      "Very high, so it doesn't draw heavy current from the main bus",
      "Very low",
      "Exactly zero",
      "Negative"
    ],
    "exp": "The primary impedance of a PT must be extremely high so it draws only a minuscule magnetising current and does not act as a heavy load on the main busbar.",
    "id": "T05_Transformers_150",
    "topic": "T05_Transformers",
    "cat": "CT & PT"
  },
  {
    "q": "Where is a Buchholz relay installed?",
    "a": "In the pipe connecting the main transformer tank to the conservator tank",
    "opts": [
      "In the pipe connecting the main transformer tank to the conservator tank",
      "Inside the primary winding",
      "On the main switchboard",
      "Inside the cooling radiator"
    ],
    "exp": "A Buchholz relay is installed in the connecting pipe between the main transformer tank and the conservator (expansion) tank.",
    "id": "T05_Transformers_151",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "What type of transformer can use a Buchholz relay?",
    "a": "Oil-immersed transformers with a conservator tank",
    "opts": [
      "Oil-immersed transformers with a conservator tank",
      "Dry-type air cooled transformers",
      "Resin cast transformers",
      "Flyback transformers"
    ],
    "exp": "Only oil-immersed transformers equipped with a conservator tank can use a Buchholz relay.",
    "id": "T05_Transformers_152",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "What is the primary function of a Buchholz relay?",
    "a": "To protect the transformer against internal faults by detecting gas generation or oil surges",
    "opts": [
      "To protect the transformer against internal faults by detecting gas generation or oil surges",
      "To cool the oil",
      "To filter moisture from the oil",
      "To measure the voltage"
    ],
    "exp": "The Buchholz relay protects the transformer against internal faults by detecting the generation of fault gases or a violent surge of oil.",
    "id": "T05_Transformers_153",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "How does an internal fault (like arcing or local overheating) affect transformer oil?",
    "a": "It decomposes the oil and insulation, producing gases",
    "opts": [
      "It decomposes the oil and insulation, producing gases",
      "It freezes the oil",
      "It turns the oil into water",
      "It makes the oil magnetic"
    ],
    "exp": "Internal faults like arcing, partial discharge, or extreme overheating decompose the surrounding insulating oil and cellulose paper, producing specific fault gases.",
    "id": "T05_Transformers_154",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "What are the two main actuating elements inside a classic Buchholz relay?",
    "a": "An upper float and a lower float (or baffle)",
    "opts": [
      "An upper float and a lower float (or baffle)",
      "Two thermal bimetallic strips",
      "A CT and a PT",
      "A spinning turbine"
    ],
    "exp": "A classic Buchholz relay uses two mechanical actuating elements: an upper float and a lower float (or lower baffle flap).",
    "id": "T05_Transformers_155",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "What happens during a minor internal fault (e.g., slight overheating)?",
    "a": "Gas is produced slowly, rises into the relay, lowers the oil level, and tilts the upper float",
    "opts": [
      "Gas is produced slowly, rises into the relay, lowers the oil level, and tilts the upper float",
      "The oil boils instantly",
      "The lower float trips the breaker",
      "The conservator explodes"
    ],
    "exp": "During a minor fault, gases are produced slowly. They rise into the relay housing, displacing the oil. The dropping oil level causes the upper float to tilt.",
    "id": "T05_Transformers_156",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "When the upper float of a Buchholz relay tilts, what action does it take?",
    "a": "It closes a mercury switch (or reed switch) to sound an ALARM",
    "opts": [
      "It closes a mercury switch (or reed switch) to sound an ALARM",
      "It trips the main circuit breaker",
      "It starts the fire pump",
      "It injects dry nitrogen"
    ],
    "exp": "When the upper float tilts due to gas accumulation, it closes a mercury or magnetic reed switch that triggers an audible and visual ALARM on the control panel.",
    "id": "T05_Transformers_157",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "What happens during a major internal fault (e.g., heavy short circuit arc)?",
    "a": "A violent surge of oil and gas rushes through the pipe, deflecting the lower float/baffle",
    "opts": [
      "A violent surge of oil and gas rushes through the pipe, deflecting the lower float/baffle",
      "The upper float sounds the alarm only",
      "The oil turns black instantly",
      "The transformer runs in reverse"
    ],
    "exp": "A major fault produces a massive, explosive expansion of gas. This forces a violent surge of oil up the pipe towards the conservator, forcefully deflecting the lower float/baffle.",
    "id": "T05_Transformers_158",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "When the lower float/baffle of a Buchholz relay operates, what action does it take?",
    "a": "It closes a switch to TRIP the main circuit breaker and isolate the transformer",
    "opts": [
      "It closes a switch to TRIP the main circuit breaker and isolate the transformer",
      "It sounds a minor alarm",
      "It opens the conservator vent",
      "It drains the oil"
    ],
    "exp": "When the lower baffle is deflected by an oil surge, it closes a switch that instantly trips the main High Voltage circuit breaker, completely isolating the transformer.",
    "id": "T05_Transformers_159",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "Why is gas analysis from the Buchholz relay important?",
    "a": "It identifies the exact type and severity of the internal fault (Dissolved Gas Analysis - DGA)",
    "opts": [
      "It identifies the exact type and severity of the internal fault (Dissolved Gas Analysis - DGA)",
      "It checks if the gas is breathable",
      "It measures the temperature",
      "It checks for water content"
    ],
    "exp": "Gas analysis (DGA) is critical because the chemical composition of the trapped gas reveals the exact nature (thermal or electrical) and severity of the internal fault.",
    "id": "T05_Transformers_160",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "If Acetylene (C2H2) is found in the Buchholz gas sample, what does it indicate?",
    "a": "A high-energy electrical arc (very serious fault)",
    "opts": [
      "A high-energy electrical arc (very serious fault)",
      "Normal aging of the oil",
      "Slight overheating of paper",
      "Moisture ingress"
    ],
    "exp": "Acetylene (C2H2) requires extremely high temperatures (>3000 deg C) to form. Its presence indicates a severe, high-energy electrical arc inside the transformer.",
    "id": "T05_Transformers_161",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "If Hydrogen (H2) is the primary gas found, what might it indicate?",
    "a": "Partial discharge or low-energy arcing",
    "opts": [
      "Partial discharge or low-energy arcing",
      "A massive short circuit",
      "A fire in the switchboard",
      "Normal operation"
    ],
    "exp": "Hydrogen (H2) is usually the first gas produced and typically indicates low-energy faults like partial discharge (corona) or very mild arcing.",
    "id": "T05_Transformers_162",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "If Ethylene (C2H4) is found, what does it usually indicate?",
    "a": "A thermal fault or severe overheating of the oil",
    "opts": [
      "A thermal fault or severe overheating of the oil",
      "A loose bolt on the casing",
      "Moisture in the conservator",
      "A broken cooling fan"
    ],
    "exp": "Ethylene (C2H4) is primarily generated when the insulating oil undergoes severe thermal degradation (overheating) without active arcing.",
    "id": "T05_Transformers_163",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "What gases indicate that the solid cellulose (paper) insulation is overheating?",
    "a": "Carbon Monoxide (CO) and Carbon Dioxide (CO2)",
    "opts": [
      "Carbon Monoxide (CO) and Carbon Dioxide (CO2)",
      "Acetylene and Hydrogen",
      "Oxygen and Nitrogen",
      "Methane and Ethane"
    ],
    "exp": "Carbon Monoxide (CO) and Carbon Dioxide (CO2) indicate the thermal breakdown (overheating) of the solid cellulose insulation (paper and pressboard).",
    "id": "T05_Transformers_164",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "Can a Buchholz relay detect an external fault (e.g., short circuit on the switchboard)?",
    "a": "No, it only detects faults inside the transformer tank",
    "opts": [
      "No, it only detects faults inside the transformer tank",
      "Yes, it detects all faults",
      "Yes, by measuring the current",
      "Yes, by sensing voltage drop"
    ],
    "exp": "No, a Buchholz relay only detects internal faults that generate gas or oil surges within the transformer tank itself.",
    "id": "T05_Transformers_165",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "Why is the pipe to the conservator slightly tilted (usually 3-7 degrees)?",
    "a": "To ensure gas bubbles naturally rise and flow into the Buchholz relay",
    "opts": [
      "To ensure gas bubbles naturally rise and flow into the Buchholz relay",
      "To help the oil drain out",
      "To prevent air from entering",
      "For aesthetic reasons"
    ],
    "exp": "The pipe is installed with a slight upward tilt (3-7 degrees) towards the conservator so that any gas bubbles naturally rise and collect inside the Buchholz relay housing.",
    "id": "T05_Transformers_166",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "What feature on the Buchholz relay allows the engineer to inspect the trapped gas?",
    "a": "A small glass inspection window (sight glass)",
    "opts": [
      "A small glass inspection window (sight glass)",
      "A digital display screen",
      "A pressure gauge",
      "A thermometer"
    ],
    "exp": "The Buchholz relay has a small glass inspection window (sight glass) on the side to allow engineers to visually check oil level and trapped gas volume/colour.",
    "id": "T05_Transformers_167",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "How is the gas extracted for testing?",
    "a": "Through a small petcock valve on the top of the relay",
    "opts": [
      "Through a small petcock valve on the top of the relay",
      "By cutting the pipe",
      "By opening the main tank lid",
      "By draining all the oil"
    ],
    "exp": "Gas is safely extracted for lab analysis using a small petcock sampling valve located at the very top of the relay housing.",
    "id": "T05_Transformers_168",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "What must be done immediately if the Buchholz alarm sounds?",
    "a": "Draw a gas sample, analyse it, and investigate the cause before it worsens",
    "opts": [
      "Draw a gas sample, analyse it, and investigate the cause before it worsens",
      "Trip the transformer immediately",
      "Ignore it until the next port",
      "Top up the oil"
    ],
    "exp": "If the alarm sounds, immediately draw a gas sample from the relay, perform a Dissolved Gas Analysis (DGA), and investigate the root cause before a catastrophic failure occurs.",
    "id": "T05_Transformers_169",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "What must be done if the Buchholz relay trips the transformer?",
    "a": "Do NOT re-energise until a thorough investigation and gas analysis is complete",
    "opts": [
      "Do NOT re-energise until a thorough investigation and gas analysis is complete",
      "Reset the relay and try again",
      "Bypass the relay",
      "Change the cooling fans"
    ],
    "exp": "If the relay trips, the transformer must NOT be re-energised under any circumstances until a full investigation, gas analysis, and internal inspection are completed.",
    "id": "T05_Transformers_170",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "If the gas in the relay is colourless and odourless (mostly air), what might be the cause?",
    "a": "Air trapped during filling or a leak in the oil pump system",
    "opts": [
      "Air trapped during filling or a leak in the oil pump system",
      "A severe arc fault",
      "Paper insulation burning",
      "Oil boiling"
    ],
    "exp": "Colourless, odourless, non-combustible gas is usually just air. This can happen from improper bleeding during filling, or a leaking seal drawing air in during a cooling cycle.",
    "id": "T05_Transformers_171",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "If the gas has a pungent smell and is combustible, what does this confirm?",
    "a": "It is fault gas from oil decomposition, confirming an internal electrical/thermal fault",
    "opts": [
      "It is fault gas from oil decomposition, confirming an internal electrical/thermal fault",
      "It is just trapped atmospheric air",
      "The oil is brand new",
      "The relay is broken"
    ],
    "exp": "A pungent, combustible gas confirms it is a hydrocarbon fault gas created by the decomposition of oil, indicating a genuine internal electrical or thermal fault.",
    "id": "T05_Transformers_172",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "What acts as the switch mechanism connected to the floats in older relays?",
    "a": "Mercury tilt switches",
    "opts": [
      "Mercury tilt switches",
      "Push buttons",
      "Rotary encoders",
      "Solid state relays"
    ],
    "exp": "Older Buchholz relays typically use mercury tilt switches attached to the floats to make the electrical contact when tilted.",
    "id": "T05_Transformers_173",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "Why does the relay not trip on normal oil flow during heating and cooling?",
    "a": "The baffle is calibrated to only operate during a violent surge exceeding normal flow rates",
    "opts": [
      "The baffle is calibrated to only operate during a violent surge exceeding normal flow rates",
      "The floats are disabled during heating",
      "The oil doesn't move during normal operation",
      "The relay is switched off"
    ],
    "exp": "The lower baffle is carefully calibrated so that normal, slow oil expansion and contraction during heating/cooling cycles will not deflect it enough to cause a false trip.",
    "id": "T05_Transformers_174",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "What happens if the oil level in the conservator drops below the Buchholz relay?",
    "a": "The upper float drops (Alarm), then the lower float drops (Trip) due to loss of oil",
    "opts": [
      "The upper float drops (Alarm), then the lower float drops (Trip) due to loss of oil",
      "Nothing happens",
      "The oil pump starts automatically",
      "The transformer explodes"
    ],
    "exp": "If oil leaks and the level drops below the relay, the upper float drops first (triggering the Alarm), followed by the lower float (triggering the Trip) as the relay empties.",
    "id": "T05_Transformers_175",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "Is a Buchholz relay used on dry-type transformers?",
    "a": "No, dry-type transformers do not have oil",
    "opts": [
      "No, dry-type transformers do not have oil",
      "Yes, to detect air flow",
      "Yes, to measure humidity",
      "Yes, to detect smoke"
    ],
    "exp": "No, dry-type transformers use air or solid cast resin for insulation, not oil. A Buchholz relay requires an oil medium to function.",
    "id": "T05_Transformers_176",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "What is 'DGA'?",
    "a": "Dissolved Gas Analysis",
    "opts": [
      "Dissolved Gas Analysis",
      "Direct Generator Action",
      "Digital Gas Analyser",
      "Dynamic Grid Assessment"
    ],
    "exp": "DGA stands for Dissolved Gas Analysis, a laboratory diagnostic test to determine the composition of fault gases dissolved in transformer oil.",
    "id": "T05_Transformers_177",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "Why is an Acetylene fault considered critical?",
    "a": "It requires temperatures >3000°C to form, indicating severe arcing that destroys insulation instantly",
    "opts": [
      "It requires temperatures >3000°C to form, indicating severe arcing that destroys insulation instantly",
      "It smells bad",
      "It dissolves the copper wire",
      "It increases iron losses"
    ],
    "exp": "Acetylene is critical because it only forms during very high-energy arcing (above 3000°C), which means the insulation is being actively and severely destroyed.",
    "id": "T05_Transformers_178",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "Can a severe fault bypass the alarm and go straight to trip?",
    "a": "Yes, a rapid surge will immediately deflect the lower baffle and trip the breaker",
    "opts": [
      "Yes, a rapid surge will immediately deflect the lower baffle and trip the breaker",
      "No, it must alarm first",
      "No, it takes 5 minutes to trip",
      "Only on DC power"
    ],
    "exp": "Yes, a violent fault (like a major short circuit) causes an immediate, massive oil surge that bypasses the slow gas accumulation alarm and instantly deflects the lower trip baffle.",
    "id": "T05_Transformers_179",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "What protects an oil transformer from internal faults?",
    "a": "Buchholz relay",
    "opts": [
      "Buchholz relay",
      "Thermal overload relay",
      "Differential relay",
      "Overcurrent relay"
    ],
    "exp": "The primary protection device against internal faults in an oil-immersed transformer is the Buchholz relay.",
    "id": "T05_Transformers_180",
    "topic": "T05_Transformers",
    "cat": "Buchholz Relay"
  },
  {
    "q": "What are the two primary functions of transformer oil?",
    "a": "Insulation and Cooling",
    "opts": [
      "Insulation and Cooling",
      "Lubrication and Sealing",
      "Heating and Rust prevention",
      "Voltage regulation and Current limiting"
    ],
    "exp": "The two primary functions of transformer oil are to provide electrical insulation (dielectric strength) between live parts, and to provide cooling by transferring heat away from the core and windings.",
    "id": "T05_Transformers_181",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What is the typical base material of marine transformer oil?",
    "a": "Mineral insulating oil",
    "opts": [
      "Mineral insulating oil",
      "Vegetable oil",
      "Synthetic motor oil",
      "Heavy fuel oil"
    ],
    "exp": "Marine transformer oil is typically a highly refined mineral insulating oil derived from crude petroleum.",
    "id": "T05_Transformers_182",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What does 'dielectric strength' of transformer oil mean?",
    "a": "Its ability to withstand electrical stress without breaking down (arcing)",
    "opts": [
      "Its ability to withstand electrical stress without breaking down (arcing)",
      "Its ability to conduct heat",
      "Its resistance to flowing",
      "Its flash point temperature"
    ],
    "exp": "Dielectric strength is the maximum voltage a material can withstand without experiencing an electrical breakdown (arcing) through its bulk.",
    "id": "T05_Transformers_183",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "How is the dielectric strength of transformer oil measured?",
    "a": "By performing a Breakdown Voltage (BDV) test",
    "opts": [
      "By performing a Breakdown Voltage (BDV) test",
      "By measuring its viscosity",
      "By checking its colour",
      "By burning it"
    ],
    "exp": "It is measured using a Breakdown Voltage (BDV) test, where voltage across a standard gap in an oil sample is steadily increased until an arc occurs.",
    "id": "T05_Transformers_184",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What is the minimum acceptable BDV for transformer oil in service?",
    "a": "30 kV for a 2.5mm gap",
    "opts": [
      "30 kV for a 2.5mm gap",
      "10 kV",
      "100 kV",
      "5 kV"
    ],
    "exp": "For transformer oil in service, the minimum acceptable BDV is typically 30 kV across a standard 2.5 mm test gap.",
    "id": "T05_Transformers_185",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What is a typical BDV for brand new, untreated transformer oil?",
    "a": "70 kV or higher",
    "opts": [
      "70 kV or higher",
      "30 kV",
      "200 kV",
      "10 kV"
    ],
    "exp": "Brand new, untreated transformer oil typically has a very high BDV, often exceeding 70 kV across a 2.5 mm gap.",
    "id": "T05_Transformers_186",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What is the most common cause of a drop in dielectric strength (BDV)?",
    "a": "Moisture (water) contamination",
    "opts": [
      "Moisture (water) contamination",
      "Dissolved copper",
      "Iron filings",
      "Dissolved air"
    ],
    "exp": "Moisture (water) ingress is the most common and damaging cause of a sudden drop in the oil's dielectric strength.",
    "id": "T05_Transformers_187",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "Why must transformer oil have a low viscosity?",
    "a": "To allow it to circulate freely by convection and transfer heat effectively",
    "opts": [
      "To allow it to circulate freely by convection and transfer heat effectively",
      "To make it act as a better insulator",
      "To prevent it from catching fire",
      "To stop it from evaporating"
    ],
    "exp": "Low viscosity allows the oil to circulate freely via natural convection (or pumped flow), efficiently carrying heat from the windings to the cooling radiators.",
    "id": "T05_Transformers_188",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What is the minimum acceptable flash point for transformer oil for fire safety?",
    "a": "Above 140°C",
    "opts": [
      "Above 140°C",
      "Above 50°C",
      "Above 300°C",
      "Below 0°C"
    ],
    "exp": "For fire safety on board, the flash point of transformer oil must be high, generally above 140 degrees Celsius, so it does not easily ignite.",
    "id": "T05_Transformers_189",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "Why must transformer oil have a low pour point?",
    "a": "So it remains fluid and can circulate in extremely cold environments",
    "opts": [
      "So it remains fluid and can circulate in extremely cold environments",
      "To prevent it from boiling",
      "To increase its dielectric strength",
      "To stop oxidation"
    ],
    "exp": "A low pour point ensures the oil remains a fluid liquid and can circulate to provide cooling even in extremely cold environmental temperatures.",
    "id": "T05_Transformers_190",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What chemical process degrades transformer oil over time when exposed to air and heat?",
    "a": "Oxidation",
    "opts": [
      "Oxidation",
      "Hydrogenation",
      "Saponification",
      "Distillation"
    ],
    "exp": "Oxidation degrades the oil. Heat acts as a catalyst, accelerating the reaction between the oil hydrocarbons and oxygen from the air.",
    "id": "T05_Transformers_191",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What does oxidation produce in transformer oil?",
    "a": "Acids and sludge",
    "opts": [
      "Acids and sludge",
      "Pure water",
      "Solid copper",
      "Methane gas"
    ],
    "exp": "Oxidation produces acidic compounds (acidity) and insoluble sludge as chemical by-products.",
    "id": "T05_Transformers_192",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "Why is sludge formation detrimental to a transformer?",
    "a": "It coats the windings and cooling ducts, drastically reducing heat transfer",
    "opts": [
      "It coats the windings and cooling ducts, drastically reducing heat transfer",
      "It causes short circuits directly",
      "It increases the voltage",
      "It dissolves the core"
    ],
    "exp": "Sludge is a thick, muddy deposit that coats the windings and clogs cooling ducts, drastically reducing heat transfer and causing severe overheating.",
    "id": "T05_Transformers_193",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "How does a conservator tank help protect the oil from rapid oxidation?",
    "a": "It limits the surface area of oil exposed to air",
    "opts": [
      "It limits the surface area of oil exposed to air",
      "It boils the oil",
      "It freezes the oil",
      "It adds oxygen to the oil"
    ],
    "exp": "The conservator is a small expansion tank. It ensures the main tank is completely full while providing a small, limited surface area of oil exposed to air, reducing oxidation.",
    "id": "T05_Transformers_194",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What is the purpose of a silica gel breather attached to the conservator?",
    "a": "To remove moisture from the air drawn into the conservator as the oil cools and contracts",
    "opts": [
      "To remove moisture from the air drawn into the conservator as the oil cools and contracts",
      "To filter out dust",
      "To add oxygen to the oil",
      "To prevent gas from escaping"
    ],
    "exp": "As the transformer cools, oil contracts, drawing air into the conservator. The silica gel breather removes moisture from this incoming air to prevent oil contamination.",
    "id": "T05_Transformers_195",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What colour is dry, active indicating silica gel?",
    "a": "Blue (or orange in newer types)",
    "opts": [
      "Blue (or orange in newer types)",
      "Pink",
      "White",
      "Black"
    ],
    "exp": "Dry, active indicating silica gel is typically Blue (or orange in newer, environmentally friendly types).",
    "id": "T05_Transformers_196",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What colour is saturated (wet) silica gel that needs replacing or reactivating?",
    "a": "Pink (or clear/white in newer types)",
    "opts": [
      "Pink (or clear/white in newer types)",
      "Blue",
      "Orange",
      "Black"
    ],
    "exp": "When saturated with moisture and needing replacement or reactivation (baking), it turns Pink (or clear/white for the orange type).",
    "id": "T05_Transformers_197",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What is the Karl Fischer test used for?",
    "a": "Measuring the exact moisture content of the oil in parts per million (ppm)",
    "opts": [
      "Measuring the exact moisture content of the oil in parts per million (ppm)",
      "Measuring the breakdown voltage",
      "Measuring acidity",
      "Measuring flash point"
    ],
    "exp": "The Karl Fischer titration test accurately measures the exact trace moisture content dissolved in the oil, expressed in parts per million (ppm).",
    "id": "T05_Transformers_198",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What is an acceptable moisture content for transformer oil in service?",
    "a": "Less than 20 ppm",
    "opts": [
      "Less than 20 ppm",
      "More than 100 ppm",
      "Exactly 0 ppm",
      "500 ppm"
    ],
    "exp": "An acceptable moisture content for marine transformer oil in active service is generally less than 20 ppm.",
    "id": "T05_Transformers_199",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What test measures the acid content of the oil?",
    "a": "Neutralisation number (acidity) test",
    "opts": [
      "Neutralisation number (acidity) test",
      "BDV test",
      "DGA test",
      "Viscosity test"
    ],
    "exp": "The neutralisation number (or acidity) test measures the amount of acidic compounds formed by oxidation in the oil.",
    "id": "T05_Transformers_200",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "Why is high acidity dangerous for a transformer?",
    "a": "Acids corrode the metal parts and aggressively degrade the paper insulation",
    "opts": [
      "Acids corrode the metal parts and aggressively degrade the paper insulation",
      "Acids catch fire easily",
      "Acids freeze the oil",
      "Acids increase the voltage"
    ],
    "exp": "High acidity directly corrodes copper and steel components, and it rapidly degrades the cellulose paper insulation, destroying the transformer's lifespan.",
    "id": "T05_Transformers_201",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What does dark, cloudy, or turbid oil indicate?",
    "a": "Severe contamination, oxidation, or suspended moisture and carbon particles",
    "opts": [
      "Severe contamination, oxidation, or suspended moisture and carbon particles",
      "The oil is brand new",
      "The oil is too cold",
      "Normal operation"
    ],
    "exp": "Dark or turbid (cloudy) oil visually indicates severe contamination, oxidation products, suspended moisture, or carbon particles from arcing.",
    "id": "T05_Transformers_202",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "How is moisture and particulate contamination typically removed from oil onboard?",
    "a": "By passing it through a centrifugal purifier or a special filter press/vacuum dehydrator",
    "opts": [
      "By passing it through a centrifugal purifier or a special filter press/vacuum dehydrator",
      "By boiling it in a pan",
      "By adding more acid",
      "It cannot be removed, oil must be dumped"
    ],
    "exp": "Moisture and particulates are typically removed onboard by purifying the oil through a centrifugal separator, or using a vacuum dehydrator/filter press unit.",
    "id": "T05_Transformers_203",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "Can you use standard engine lubricating oil in a transformer?",
    "a": "NO, it lacks dielectric strength and has completely different viscosity and additive packages",
    "opts": [
      "NO, it lacks dielectric strength and has completely different viscosity and additive packages",
      "Yes, in an emergency",
      "Yes, if you filter it first",
      "Yes, they are the same thing"
    ],
    "exp": "No. Standard lube oil lacks the required dielectric strength, has the wrong viscosity for cooling, and contains additives that are harmful to electrical insulation.",
    "id": "T05_Transformers_204",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What produces carbon particles in transformer oil?",
    "a": "Electrical arcing inside the oil",
    "opts": [
      "Electrical arcing inside the oil",
      "Normal heating",
      "Oxidation",
      "Moisture"
    ],
    "exp": "Carbon particles in the oil are produced by electrical arcing, which instantly vaporises and carbonises the surrounding oil molecules.",
    "id": "T05_Transformers_205",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "During a BDV test, the voltage is applied across two spherical or mushroom-shaped electrodes. What is the standard gap between them?",
    "a": "2.5 mm",
    "opts": [
      "2.5 mm",
      "10 mm",
      "1 mm",
      "5 mm"
    ],
    "exp": "During a standard BDV test, the gap between the two test electrodes is precisely 2.5 mm.",
    "id": "T05_Transformers_206",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "Why did the transformer oil fail the BDV test?",
    "a": "Most likely moisture ingress, possibly from a saturated silica gel breather or a leaking seal",
    "opts": [
      "Most likely moisture ingress, possibly from a saturated silica gel breather or a leaking seal",
      "The transformer was running too fast",
      "The oil was too clean",
      "The frequency was wrong"
    ],
    "exp": "A failed BDV test (under 30kV) almost always points to moisture ingress. Common culprits are a saturated silica gel breather or a leaking seal allowing humid air in.",
    "id": "T05_Transformers_207",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What is the Dissolved Gas Analysis (DGA) test?",
    "a": "A lab test that extracts and analyses gases dissolved in the oil to diagnose early-stage internal faults",
    "opts": [
      "A lab test that extracts and analyses gases dissolved in the oil to diagnose early-stage internal faults",
      "A test to measure oil density",
      "A test for water content",
      "A test for acidity"
    ],
    "exp": "DGA is a sophisticated lab test that extracts and analyses dissolved gases. The specific mix of gases (like hydrogen, ethylene, acetylene) diagnoses the exact type of internal fault.",
    "id": "T05_Transformers_208",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "Is a Buchholz relay effective if the transformer tank is not completely filled with oil?",
    "a": "No, the pipe and relay must be completely full of oil for gas to accumulate and displace it",
    "opts": [
      "No, the pipe and relay must be completely full of oil for gas to accumulate and displace it",
      "Yes, it works on air pressure",
      "Yes, it measures temperature",
      "Yes, it works magnetically"
    ],
    "exp": "No, a Buchholz relay relies on displacing oil to operate its floats. The pipe and relay must be completely full of oil (air-free) to function correctly.",
    "id": "T05_Transformers_209",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What type of transformer does NOT use oil for insulation or cooling?",
    "a": "Dry-type (Air-cooled) transformer",
    "opts": [
      "Dry-type (Air-cooled) transformer",
      "Auto-transformer",
      "Double-wound transformer",
      "Current transformer"
    ],
    "exp": "A dry-type (air-cooled) transformer uses air (natural or forced) and solid dielectrics (like cast resin) for insulation and cooling, containing no oil.",
    "id": "T05_Transformers_210",
    "topic": "T05_Transformers",
    "cat": "Transformer Oil"
  },
  {
    "q": "What does ONAN stand for in transformer cooling?",
    "a": "Oil Natural, Air Natural",
    "opts": [
      "Oil Natural, Air Natural",
      "Oil Normal, Air Normal",
      "Overload Natural, Air Null",
      "Oil Nitrogen, Air Nitrogen"
    ],
    "exp": "ONAN stands for Oil Natural, Air Natural. It is the simplest cooling method relying entirely on natural convection.",
    "id": "T05_Transformers_211",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "How does an ONAN transformer cool itself?",
    "a": "Natural convection of oil inside, and natural convection of air outside the radiators",
    "opts": [
      "Natural convection of oil inside, and natural convection of air outside the radiators",
      "Pumped oil and forced air",
      "Water cooling",
      "Air conditioning"
    ],
    "exp": "In ONAN, hot oil naturally rises and circulates through the radiators (Oil Natural). The radiators are cooled by ambient air naturally rising past the fins (Air Natural).",
    "id": "T05_Transformers_212",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What does ONAF stand for?",
    "a": "Oil Natural, Air Forced",
    "opts": [
      "Oil Natural, Air Forced",
      "Oil Normal, Air Forced",
      "Oil Natural, Air Flow",
      "Oil Natural, Air Filtered"
    ],
    "exp": "ONAF stands for Oil Natural, Air Forced. It uses natural oil convection but forced air cooling.",
    "id": "T05_Transformers_213",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "In an ONAF transformer, what forces the air?",
    "a": "External cooling fans blowing across the radiator fins",
    "opts": [
      "External cooling fans blowing across the radiator fins",
      "The ship's ventilation system",
      "Compressed air lines",
      "A vacuum pump"
    ],
    "exp": "In an ONAF system, external electrically driven fans blow (force) air across the radiator fins to increase the heat dissipation rate.",
    "id": "T05_Transformers_214",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "When do the cooling fans typically turn on in an ONAF system?",
    "a": "Automatically when the oil or winding temperature exceeds a set point",
    "opts": [
      "Automatically when the oil or winding temperature exceeds a set point",
      "They run constantly 24/7",
      "Only when the ship is in port",
      "Only during starting"
    ],
    "exp": "The fans are controlled thermostatically and switch on automatically when the oil or winding temperature rises above a predetermined set point under heavy load.",
    "id": "T05_Transformers_215",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What does OFAF stand for?",
    "a": "Oil Forced, Air Forced",
    "opts": [
      "Oil Forced, Air Forced",
      "Oil Filtered, Air Filtered",
      "Oil Flow, Air Flow",
      "Oil Free, Air Free"
    ],
    "exp": "OFAF stands for Oil Forced, Air Forced. It uses both an oil pump and air fans for maximum cooling efficiency.",
    "id": "T05_Transformers_216",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What additional component does an OFAF transformer have compared to ONAF?",
    "a": "An oil circulation pump",
    "opts": [
      "An oil circulation pump",
      "Water cooling tubes",
      "A second tank",
      "A larger core"
    ],
    "exp": "An OFAF transformer includes a mechanical oil circulation pump to force oil through the core and radiators much faster than natural convection.",
    "id": "T05_Transformers_217",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "Why use OFAF cooling?",
    "a": "It greatly increases heat transfer, allowing a much smaller physical size for a given MVA rating",
    "opts": [
      "It greatly increases heat transfer, allowing a much smaller physical size for a given MVA rating",
      "It is cheaper to build",
      "It uses less power",
      "It eliminates iron losses"
    ],
    "exp": "OFAF greatly increases heat transfer efficiency. This allows a transformer to handle a much higher MVA rating while maintaining a significantly smaller physical footprint.",
    "id": "T05_Transformers_218",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What does OFWF stand for?",
    "a": "Oil Forced, Water Forced (or Water Cooled)",
    "opts": [
      "Oil Forced, Water Forced (or Water Cooled)",
      "Oil Filtered, Water Filtered",
      "Oil Flow, Water Flow",
      "Oil Free, Water Free"
    ],
    "exp": "OFWF stands for Oil Forced, Water Forced (or Water Cooled).",
    "id": "T05_Transformers_219",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "Where is OFWF cooling typically used on ships?",
    "a": "For very large propulsion or main distribution transformers, using a seawater heat exchanger",
    "opts": [
      "For very large propulsion or main distribution transformers, using a seawater heat exchanger",
      "For small accommodation lighting",
      "For portable equipment",
      "For GMDSS batteries"
    ],
    "exp": "OFWF is typically used for very large ship transformers (like main propulsion). The forced oil is cooled in a heat exchanger using forced seawater.",
    "id": "T05_Transformers_220",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What is a Dry-Type transformer (AN or AF)?",
    "a": "A transformer with no oil, using only air (natural or forced) for cooling and solid insulation",
    "opts": [
      "A transformer with no oil, using only air (natural or forced) for cooling and solid insulation",
      "A transformer without a core",
      "A transformer running on DC",
      "A transformer with a vacuum tank"
    ],
    "exp": "A Dry-Type transformer contains no oil. It uses solid insulation (like cast resin) and is cooled simply by natural or forced ambient air (AN or AF).",
    "id": "T05_Transformers_221",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "Why are dry-type transformers preferred in accommodation spaces and electronic rooms?",
    "a": "Fire safety (no flammable oil to leak or catch fire)",
    "opts": [
      "Fire safety (no flammable oil to leak or catch fire)",
      "They are much lighter",
      "They are cheaper",
      "They have no copper losses"
    ],
    "exp": "Because they contain no flammable oil, dry-type transformers eliminate the risk of oil fires or leaks, making them much safer for enclosed accommodation and electronic spaces.",
    "id": "T05_Transformers_222",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What is the first mandatory condition for operating two transformers in parallel?",
    "a": "They must have the same voltage ratio (turns ratio)",
    "opts": [
      "They must have the same voltage ratio (turns ratio)",
      "They must be the same color",
      "They must have the same physical size",
      "They must be made by the same manufacturer"
    ],
    "exp": "The first condition is that they must have the exact same voltage ratio (turns ratio).",
    "id": "T05_Transformers_223",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What happens if two transformers in parallel have different voltage ratios?",
    "a": "A circulating current will flow between them even at no-load, causing wasteful heating",
    "opts": [
      "A circulating current will flow between them even at no-load, causing wasteful heating",
      "The frequency will change",
      "The breakers will immediately trip on reverse power",
      "One will run as a motor"
    ],
    "exp": "Different voltage ratios cause a secondary voltage difference. This difference drives a heavy circulating current between the transformers even at no-load, causing severe overheating.",
    "id": "T05_Transformers_224",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What is the second mandatory condition for paralleling?",
    "a": "Same Polarity / Vector Group",
    "opts": [
      "Same Polarity / Vector Group",
      "Same weight",
      "Same copper thickness",
      "Same cooling method"
    ],
    "exp": "The second condition is they must have the same polarity, or belong to the same vector group.",
    "id": "T05_Transformers_225",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What happens if you parallel two transformers with opposite polarity (wrong vector group)?",
    "a": "It creates a dead short circuit across the secondary, causing catastrophic failure or immediate tripping",
    "opts": [
      "It creates a dead short circuit across the secondary, causing catastrophic failure or immediate tripping",
      "They will not share load equally",
      "The voltage will double",
      "The frequency will halve"
    ],
    "exp": "Paralleling with opposite polarity (e.g., crossing phases) results in a dead short circuit, drawing massive fault current that causes immediate tripping or catastrophic failure.",
    "id": "T05_Transformers_226",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "For 3-phase transformers, what vector group characteristic must match?",
    "a": "The phase displacement angle (e.g., Dyn11 cannot parallel with Dyn1)",
    "opts": [
      "The phase displacement angle (e.g., Dyn11 cannot parallel with Dyn1)",
      "The core material",
      "The type of oil",
      "The fan speed"
    ],
    "exp": "For 3-phase transformers, the vector group (e.g., Dyn11) defines the phase displacement angle between primary and secondary. This angle must match exactly.",
    "id": "T05_Transformers_227",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What condition dictates how the total load is SHARED between two parallel transformers?",
    "a": "They must have the same percentage impedance (Z%)",
    "opts": [
      "They must have the same percentage impedance (Z%)",
      "They must have the same iron loss",
      "They must have the same primary voltage",
      "They must have the same number of turns"
    ],
    "exp": "The load sharing between parallel transformers is determined by their percentage impedance (Z%).",
    "id": "T05_Transformers_228",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "If two transformers have different Z%, how is the load shared?",
    "a": "Inversely proportional to their percentage impedance",
    "opts": [
      "Inversely proportional to their percentage impedance",
      "Directly proportional to their impedance",
      "Equally, regardless of impedance",
      "The one with higher impedance takes all the load"
    ],
    "exp": "Parallel transformers share the total load inversely proportional to their percentage impedance (Z%). Lower Z% takes more load.",
    "id": "T05_Transformers_229",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "If Transformer A has Z=4% and Transformer B has Z=8% (same kVA), what happens on load?",
    "a": "Transformer A takes twice as much load as Transformer B",
    "opts": [
      "Transformer A takes twice as much load as Transformer B",
      "Transformer B takes twice as much load",
      "They share it equally",
      "Neither takes the load"
    ],
    "exp": "Because it shares inversely, Transformer A (Z=4%) will take twice the current of Transformer B (Z=8%), assuming they have the same kVA rating.",
    "id": "T05_Transformers_230",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "Why is unequal load sharing dangerous?",
    "a": "The transformer with the lower impedance may overload and trip before the total load reaches the combined rating",
    "opts": [
      "The transformer with the lower impedance may overload and trip before the total load reaches the combined rating",
      "It causes the frequency to drop",
      "It reverses the phase sequence",
      "It drains the batteries"
    ],
    "exp": "The transformer with the lower Z% will take more than its fair share of load. It may exceed its rating and trip on overload before the combined system reaches its full capacity.",
    "id": "T05_Transformers_231",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "Is it strictly necessary for parallel transformers to have the exact same kVA rating?",
    "a": "No, different ratings can parallel, but their Z% must be identical for them to share load proportionally to their ratings",
    "opts": [
      "No, different ratings can parallel, but their Z% must be identical for them to share load proportionally to their ratings",
      "Yes, it is physically impossible otherwise",
      "Yes, to prevent frequency mismatch",
      "No, and Z% doesn't matter"
    ],
    "exp": "No, different kVA ratings can be paralleled safely. However, they will only share the load proportionally to their respective kVA ratings if their Z% values are identical.",
    "id": "T05_Transformers_232",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What must be identical for 3-phase transformers to parallel successfully?",
    "a": "Phase sequence (Phase rotation: RYB must connect to RYB)",
    "opts": [
      "Phase sequence (Phase rotation: RYB must connect to RYB)",
      "Phase color only",
      "Cable length",
      "Ambient temperature"
    ],
    "exp": "They must have the exact same phase sequence (phase rotation). R, Y, and B phases from one must connect to the corresponding R, Y, and B phases of the other.",
    "id": "T05_Transformers_233",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What test determines the percentage impedance (Z%) of a transformer?",
    "a": "The Short Circuit test",
    "opts": [
      "The Short Circuit test",
      "The Open Circuit test",
      "The BDV test",
      "The Megger test"
    ],
    "exp": "The percentage impedance (Z%) is determined by performing a Short Circuit test at reduced voltage.",
    "id": "T05_Transformers_234",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "Why do transformers on ships often have two 100% rated transformers rather than running in parallel?",
    "a": "For redundancy; one runs while the other is standby, ensuring continuous power if one fails",
    "opts": [
      "For redundancy; one runs while the other is standby, ensuring continuous power if one fails",
      "Because paralleling is illegal",
      "To save fuel",
      "To increase the voltage"
    ],
    "exp": "For maximum reliability and redundancy. If one transformer fails, the other can immediately carry 100% of the essential ship's load without causing a blackout.",
    "id": "T05_Transformers_235",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What are the 4 main conditions for paralleling?",
    "a": "Same voltage ratio, same polarity/vector group, same phase sequence, same percentage impedance",
    "opts": [
      "Same voltage ratio, same polarity/vector group, same phase sequence, same percentage impedance",
      "Same size, same weight, same color, same brand",
      "Same frequency, same current, same power, same resistance",
      "Same primary, same secondary, same core, same oil"
    ],
    "exp": "The four main conditions are: 1. Same voltage ratio. 2. Same polarity/vector group. 3. Same phase sequence. 4. Same percentage impedance (Z%).",
    "id": "T05_Transformers_236",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What happens to the supply frequency if two transformers are connected to the same busbar?",
    "a": "It is automatically identical because they are fed from the same source",
    "opts": [
      "It is automatically identical because they are fed from the same source",
      "It doubles",
      "It halves",
      "It becomes DC"
    ],
    "exp": "Frequency is automatically identical because parallel transformers are supplied from the same primary busbar source, which runs at a single synchronous frequency.",
    "id": "T05_Transformers_237",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What is a 'vector group'?",
    "a": "An IEC classification indicating winding configuration (Star/Delta) and phase shift (e.g., Dyn11)",
    "opts": [
      "An IEC classification indicating winding configuration (Star/Delta) and phase shift (e.g., Dyn11)",
      "A mathematical calculation of efficiency",
      "The group of cooling fans",
      "The magnetic domain alignment"
    ],
    "exp": "A vector group is an IEC code (e.g., Dyn11) that specifies the high/low voltage winding connections (Delta/Star) and the phase angle shift between them.",
    "id": "T05_Transformers_238",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What does 'Dyn11' mean?",
    "a": "Delta primary, Star (wye) secondary with neutral, secondary leads primary by 30 degrees (11 o'clock)",
    "opts": [
      "Delta primary, Star (wye) secondary with neutral, secondary leads primary by 30 degrees (11 o'clock)",
      "Double-wound, no neutral, 11 turns",
      "Dry-type, 11kV",
      "Direct current, 11 amps"
    ],
    "exp": "Dyn11 means: Delta high-voltage (D), Star/Wye low-voltage (y) with neutral (n). The '11' means the LV phase leads the HV phase by 30 degrees (like 11 o'clock on a clock face).",
    "id": "T05_Transformers_239",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "Why must cooling fans be operational on an OFAF transformer at full load?",
    "a": "Without forced cooling, it will rapidly overheat because its natural cooling capacity is insufficient for full load",
    "opts": [
      "Without forced cooling, it will rapidly overheat because its natural cooling capacity is insufficient for full load",
      "To keep the engine room cool",
      "To prevent the oil from freezing",
      "To generate electricity for the battery"
    ],
    "exp": "An OFAF transformer relies heavily on forced cooling to maintain its rating. If the fans fail at full load, it will rapidly overheat and trip, as natural cooling is inadequate.",
    "id": "T05_Transformers_240",
    "topic": "T05_Transformers",
    "cat": "Cooling & Parallel"
  },
  {
    "q": "What is a Flyback transformer (LOPT)?",
    "a": "A special transformer that stores magnetic energy during switch-on and releases it to the secondary during switch-off",
    "opts": [
      "A special transformer that stores magnetic energy during switch-on and releases it to the secondary during switch-off",
      "A transformer that flies",
      "A transformer with moving coils",
      "A double-wound mains transformer"
    ],
    "exp": "A flyback transformer (LOPT) operates in two distinct phases: it stores magnetic energy in the core during switch-ON, and releases it to the secondary during switch-OFF.",
    "id": "T05_Transformers_241",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "How does energy transfer in a normal transformer compared to a flyback?",
    "a": "Normal transfers energy continuously and simultaneously; Flyback stores energy then releases it in pulses",
    "opts": [
      "Normal transfers energy continuously and simultaneously; Flyback stores energy then releases it in pulses",
      "They are exactly the same",
      "Flyback uses DC only",
      "Normal uses permanent magnets"
    ],
    "exp": "A normal transformer transfers energy continuously while the switch is on. A flyback acts as a coupled inductor, storing energy first, then releasing it in a distinct pulse.",
    "id": "T05_Transformers_242",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "What acts as the switch in a modern flyback circuit?",
    "a": "A high-frequency transistor or MOSFET",
    "opts": [
      "A high-frequency transistor or MOSFET",
      "A mechanical relay",
      "A circuit breaker",
      "A fuse"
    ],
    "exp": "Modern flyback circuits use a high-frequency solid-state switch, typically a transistor or MOSFET, to pulse the primary current at thousands of Hz.",
    "id": "T05_Transformers_243",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "During Phase 1 (Switch ON) of a flyback circuit, what is happening in the secondary?",
    "a": "The secondary diode is reverse-biased, so no current flows to the load",
    "opts": [
      "The secondary diode is reverse-biased, so no current flows to the load",
      "Full load current flows",
      "The secondary charges the battery",
      "The secondary voltage is maximum"
    ],
    "exp": "During the switch-ON phase, the secondary diode is intentionally reverse-biased. No current flows in the secondary; all input energy is stored in the core's magnetic field.",
    "id": "T05_Transformers_244",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Where is the energy stored during Phase 1?",
    "a": "In the magnetic core as flux (acting like an inductor)",
    "opts": [
      "In the magnetic core as flux (acting like an inductor)",
      "In a capacitor",
      "In the battery",
      "In the copper wires"
    ],
    "exp": "During the switch-ON phase, energy is stored entirely within the core's magnetic field as magnetic flux, behaving exactly like an inductor.",
    "id": "T05_Transformers_245",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "During Phase 2 (Switch OFF), what happens?",
    "a": "The magnetic field collapses, polarity reverses, secondary diode conducts, and energy flows to the load",
    "opts": [
      "The magnetic field collapses, polarity reverses, secondary diode conducts, and energy flows to the load",
      "The core demagnetizes harmlessly",
      "The primary draws massive current",
      "The transformer trips"
    ],
    "exp": "During switch-OFF (flyback), the collapsing magnetic field reverses the winding polarity. The secondary diode becomes forward-biased, and the stored energy discharges into the load.",
    "id": "T05_Transformers_246",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "What is a common characteristic of the voltage generated during the flyback phase?",
    "a": "A very high voltage spike is produced due to the rapid collapse of the magnetic field",
    "opts": [
      "A very high voltage spike is produced due to the rapid collapse of the magnetic field",
      "A perfectly smooth DC voltage",
      "A low voltage sine wave",
      "Zero voltage"
    ],
    "exp": "The rapid collapse of the magnetic field (high dPhi/dt) generates a very high voltage spike (back-EMF) during the flyback phase.",
    "id": "T05_Transformers_247",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Where are flyback transformers commonly used on modern ships?",
    "a": "In Switch Mode Power Supplies (SMPS) for 24V DC control circuits",
    "opts": [
      "In Switch Mode Power Supplies (SMPS) for 24V DC control circuits",
      "In the main 440V switchboard",
      "For the bow thruster motor",
      "For the emergency generator"
    ],
    "exp": "Flyback transformers are universally used in Switch Mode Power Supplies (SMPS), which provide the low-voltage DC (5V, 12V, 24V) for modern shipboard electronics and control circuits.",
    "id": "T05_Transformers_248",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "What historical equipment famously used flyback transformers to generate extremely high voltages?",
    "a": "Cathode Ray Tube (CRT) monitors and televisions",
    "opts": [
      "Cathode Ray Tube (CRT) monitors and televisions",
      "Incandescent light bulbs",
      "Gramophones",
      "Telegraphs"
    ],
    "exp": "Older Cathode Ray Tube (CRT) monitors and radars used a flyback transformer (Line Output Transformer) to generate the extremely high voltage (10kV-30kV) needed for the picture tube.",
    "id": "T05_Transformers_249",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Does a flyback transformer provide galvanic isolation?",
    "a": "Yes, just like a standard double-wound transformer",
    "opts": [
      "Yes, just like a standard double-wound transformer",
      "No, it is an auto-transformer",
      "No, it connects primary to secondary",
      "Only if submerged in oil"
    ],
    "exp": "Yes, because the primary and secondary are completely separate windings, a flyback transformer provides full galvanic isolation, protecting low-voltage electronics from mains power.",
    "id": "T05_Transformers_250",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 1: Sanjib frequently asks: What is the primary purpose of a Neutral Earthing Resistor (NER) in HV systems?",
    "a": "Limits earth fault current to prevent stator core damage",
    "opts": [
      "Limits earth fault current to prevent stator core damage",
      "Increases voltage",
      "Decreases frequency",
      "Stops reverse power"
    ],
    "exp": "An NER limits the maximum earth fault current to a safe value (e.g., 400A). This prevents a severe earth fault from melting and irreparably damaging the expensive alternator stator core.",
    "id": "T05_Transformers_251",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 2: Kamath asks: Why do transformer cores have laminations?",
    "a": "To restrict circulating eddy currents, drastically reducing core heating (I2R losses)",
    "opts": [
      "To restrict circulating eddy currents, drastically reducing core heating (I2R losses)",
      "To make it lighter",
      "To increase hysteresis",
      "To allow oil flow"
    ],
    "exp": "Alternating flux induces eddy currents in the core. Laminating the core into thin, insulated sheets breaks the electrical path, vastly increasing resistance and stopping I2R core heating.",
    "id": "T05_Transformers_252",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 3: Deswal asks: What happens if a CT secondary is left open while the primary has current?",
    "a": "Extremely high, lethal voltage is induced due to un-opposed primary MMF saturating the core",
    "opts": [
      "Extremely high, lethal voltage is induced due to un-opposed primary MMF saturating the core",
      "The breaker trips safely",
      "The current drops to zero",
      "The CT cools down"
    ],
    "exp": "Without secondary current to oppose it, the primary MMF fully saturates the core. This extreme flux change induces a lethal high voltage (thousands of volts) and overheats the CT.",
    "id": "T05_Transformers_253",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 4: Sanjib asks: How do you identify if a Buchholz trip was caused by a severe arc fault?",
    "a": "By analysing the gas; presence of Acetylene (C2H2) confirms a high-energy arc",
    "opts": [
      "By analysing the gas; presence of Acetylene (C2H2) confirms a high-energy arc",
      "By smelling the oil",
      "By checking the BDV",
      "By looking at the color of the paint"
    ],
    "exp": "By extracting gas from the Buchholz relay and running a DGA. Acetylene requires >3000 deg C to form, so its presence guarantees a severe, high-energy electrical arc has occurred.",
    "id": "T05_Transformers_254",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 5: Kamath asks: Can you parallel a Dyn11 transformer with a Dyn1 transformer?",
    "a": "No, the 60-degree phase shift difference will cause a massive short circuit",
    "opts": [
      "No, the 60-degree phase shift difference will cause a massive short circuit",
      "Yes, they are both 3-phase",
      "Yes, if they have the same Z%",
      "Yes, if they are the same size"
    ],
    "exp": "No. A Dyn11 has a +30 degree phase shift, while a Dyn1 has a -30 degree shift. Paralleling them causes a 60-degree voltage difference, resulting in a massive, destructive short circuit.",
    "id": "T05_Transformers_255",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 6: Deswal asks: Why is transformer hum louder than normal?",
    "a": "Possible overvoltage, loose core clamping bolts, or harmonics in the supply",
    "opts": [
      "Possible overvoltage, loose core clamping bolts, or harmonics in the supply",
      "Low voltage",
      "High frequency",
      "Clean oil"
    ],
    "exp": "Hum is caused by magnetostriction. If it gets louder, it is usually due to primary overvoltage (higher flux density), loose core clamping bolts rattling, or harmonics distorting the flux.",
    "id": "T05_Transformers_256",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 7: Sanjib asks: What does a low BDV test result (<30kV) indicate?",
    "a": "The oil is contaminated, most likely with moisture (water), and needs purification",
    "opts": [
      "The oil is contaminated, most likely with moisture (water), and needs purification",
      "The oil is too hot",
      "The oil is brand new",
      "The transformer is overloaded"
    ],
    "exp": "A BDV below 30kV indicates the oil's dielectric strength is compromised, most likely due to moisture (water) ingress. The oil must be urgently purified or replaced.",
    "id": "T05_Transformers_257",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 8: Kamath asks: What is the purpose of the silica gel breather?",
    "a": "To absorb moisture from the air entering the conservator tank as the oil cools and contracts",
    "opts": [
      "To absorb moisture from the air entering the conservator tank as the oil cools and contracts",
      "To filter out dirt",
      "To cool the oil",
      "To absorb fault gases"
    ],
    "exp": "As oil cools and contracts, air is drawn into the conservator. The silica gel breather absorbs moisture from this air, preventing water from mixing with and degrading the oil.",
    "id": "T05_Transformers_258",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 9: Deswal asks: Can an auto-transformer be used for a shore connection?",
    "a": "No, shore connections require complete galvanic isolation provided by a double-wound transformer",
    "opts": [
      "No, shore connections require complete galvanic isolation provided by a double-wound transformer",
      "Yes, it is the standard method",
      "Only if it is 60Hz",
      "Yes, to save space"
    ],
    "exp": "No. Shore connections must have complete galvanic isolation to prevent the earthed shore supply from bonding to the unearthed ship hull, which would cause severe electrolytic corrosion.",
    "id": "T05_Transformers_259",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 10: Sanjib asks: Why do we perform an open-circuit test on a transformer?",
    "a": "To determine the constant iron losses (core losses) and the no-load magnetising current",
    "opts": [
      "To determine the constant iron losses (core losses) and the no-load magnetising current",
      "To find the copper losses",
      "To measure the impedance",
      "To test the Buchholz relay"
    ],
    "exp": "The open-circuit test draws only a tiny magnetising current, producing no copper loss. Therefore, all input power measured is purely the constant iron losses (core losses).",
    "id": "T05_Transformers_260",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 11: Kamath asks: What does the short-circuit test determine?",
    "a": "The full-load copper losses and the percentage impedance (Z%)",
    "opts": [
      "The full-load copper losses and the percentage impedance (Z%)",
      "The iron losses",
      "The dielectric strength",
      "The winding capacitance"
    ],
    "exp": "The short-circuit test uses reduced voltage to circulate full-load current without core saturation. It determines the full-load copper losses (I2R) and the percentage impedance (Z%).",
    "id": "T05_Transformers_261",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 12: Deswal asks: If two parallel transformers have different percentage impedances, what happens?",
    "a": "The one with the lower impedance will take a disproportionately larger share of the load",
    "opts": [
      "The one with the lower impedance will take a disproportionately larger share of the load",
      "They share the load perfectly equally",
      "The one with higher impedance takes more load",
      "They will both trip immediately"
    ],
    "exp": "Load is shared inversely to impedance. The transformer with the lower Z% will draw more than its proportional share of current, potentially overloading and tripping before full system capacity.",
    "id": "T05_Transformers_262",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 13: Sanjib asks: What is magnetising current in a transformer?",
    "a": "The small reactive current (2-10%) drawn at no-load to establish the magnetic flux in the core",
    "opts": [
      "The small reactive current (2-10%) drawn at no-load to establish the magnetic flux in the core",
      "The current that burns the windings",
      "The current drawn by the load",
      "The short-circuit current"
    ],
    "exp": "Magnetising current (I0) is the small, purely reactive current drawn by the primary (even at no load) required to establish and maintain the alternating magnetic flux in the core.",
    "id": "T05_Transformers_263",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 14: Kamath asks: Why must the secondary of a Potential Transformer (PT) NEVER be shorted?",
    "a": "It will draw massive short-circuit current, overheat, and destroy the PT windings",
    "opts": [
      "It will draw massive short-circuit current, overheat, and destroy the PT windings",
      "It will induce lethal high voltage",
      "It will reverse the phase sequence",
      "It will cause an earth fault"
    ],
    "exp": "A PT is connected across the full mains voltage. Shorting its secondary removes all impedance, causing it to draw a massive fault current that instantly melts and destroys the PT windings.",
    "id": "T05_Transformers_264",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 15: Deswal asks: What is the main cause of hysteresis loss?",
    "a": "The energy wasted in continuously reversing the magnetic domains in the core material at supply frequency",
    "opts": [
      "The energy wasted in continuously reversing the magnetic domains in the core material at supply frequency",
      "Circulating currents in the steel",
      "Resistance of the copper wire",
      "Friction of the cooling fans"
    ],
    "exp": "Hysteresis loss is the energy wasted as heat when the magnetic domains in the core material are forced to physically reverse their alignment 100 times per second (at 50Hz).",
    "id": "T05_Transformers_265",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 16: Sanjib asks: How is hysteresis loss minimized?",
    "a": "By constructing the core from high-grade, grain-oriented silicon steel",
    "opts": [
      "By constructing the core from high-grade, grain-oriented silicon steel",
      "By using thinner laminations",
      "By using thicker copper wire",
      "By submerging it in oil"
    ],
    "exp": "Hysteresis loss is minimized by manufacturing the core from specialized, high-grade grain-oriented silicon steel, which has a very low hysteresis coefficient.",
    "id": "T05_Transformers_266",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 17: Kamath asks: What happens if you connect a 60Hz transformer to a 50Hz supply at the same voltage?",
    "a": "V/f ratio increases, flux increases, core saturates, iron losses spike, and it overheats",
    "opts": [
      "V/f ratio increases, flux increases, core saturates, iron losses spike, and it overheats",
      "It runs 17% slower",
      "It generates more power",
      "Nothing happens"
    ],
    "exp": "Dropping frequency without dropping voltage increases the V/f ratio, forcing maximum flux higher. The core will magnetically saturate, drastically increasing iron losses and causing severe overheating.",
    "id": "T05_Transformers_267",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 18: Deswal asks: What does a 'Dry-Type' transformer use for insulation and cooling?",
    "a": "Air (natural or forced) and solid dielectric materials (like cast resin) instead of oil",
    "opts": [
      "Air (natural or forced) and solid dielectric materials (like cast resin) instead of oil",
      "Distilled water",
      "SF6 Gas",
      "Vacuum"
    ],
    "exp": "Instead of oil, a dry-type transformer relies entirely on ambient air (natural or forced) for cooling and uses solid dielectric materials like cast epoxy resin for electrical insulation.",
    "id": "T05_Transformers_268",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 19: Sanjib asks: In a Buchholz relay, what triggers the upper float?",
    "a": "A slow accumulation of fault gases from minor faults like local overheating or partial discharge",
    "opts": [
      "A slow accumulation of fault gases from minor faults like local overheating or partial discharge",
      "A massive oil surge",
      "A drop in voltage",
      "High ambient temperature"
    ],
    "exp": "The upper float tilts and triggers the alarm when displaced by a slow accumulation of gas, which is typically produced by minor, developing faults like local overheating or partial discharge.",
    "id": "T05_Transformers_269",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "Surveyor Question T05 - 20: Kamath asks: What does the '4.44' in the EMF equation represent?",
    "a": "The form factor (RMS/Average) for a sinusoidal alternating flux",
    "opts": [
      "The form factor (RMS/Average) for a sinusoidal alternating flux",
      "The ratio of primary to secondary turns",
      "The efficiency constant",
      "The magnetic permeability of air"
    ],
    "exp": "In the EMF equation (E = 4.44 f N Phi), 4.44 is a constant derived by multiplying 4 by the form factor (1.11) of a standard sinusoidal alternating waveform.",
    "id": "T05_Transformers_270",
    "topic": "T05_Transformers",
    "cat": "Flyback & Surveyor"
  },
  {
    "q": "A transformer is rated 50 kVA, 440/110V. Why is it rated in kVA and not kW?",
    "a": "Because transformer losses (copper I²R and iron core losses) depend on current and voltage magnitudes - neither depends on power factor. The VA product sets the thermal limit regardless of load PF.",
    "opts": [
      "Because transformer losses (copper I²R and iron core losses) depend on current and voltage magnitudes - neither depends on power factor. The VA product sets the thermal limit regardless of load PF.",
      "Because transformers only supply reactive power, not real power",
      "Because the efficiency cannot be calculated without knowing the power factor",
      "kVA and kW ratings are interchangeable - it is simply convention"
    ],
    "exp": "Copper losses = I²R (depend on current magnitude only). Iron losses = hysteresis + eddy current (depend on voltage/flux, not PF). Neither type of loss changes with power factor. The safe operating limit is set by the V×I product (kVA). Motors are rated kW because they deliver mechanical output.",
    "cat": "kVA Rating",
    "id": "T05_601",
    "topic": "T05_Transformers"
  },
  {
    "q": "Why are electric motors rated in kW while generators and transformers are rated in kVA?",
    "a": "Motors deliver mechanical shaft output - useful work is in watts. Generators and transformers thermal limits depend on current and voltage magnitudes, not on load power factor.",
    "opts": [
      "Motors deliver mechanical shaft output - useful work is in watts. Generators and transformers thermal limits depend on current and voltage magnitudes, not on load power factor.",
      "It is purely convention - kW and kVA are the same for motors",
      "Motors only consume reactive power",
      "Generators cannot produce real power"
    ],
    "exp": "A motor output is mechanical power (watts). A transformer or generator heating limit is set by I²R copper loss (depends on current) and iron loss (depends on voltage). Since heating does not depend on power factor, the rating must be in VA. Motor kW tells the user how much mechanical power is available at the shaft.",
    "cat": "kVA Rating",
    "id": "T05_602",
    "topic": "T05_Transformers"
  },
  {
    "q": "What happens when a DC voltage is applied to the primary winding of a transformer?",
    "a": "DC produces constant flux (dΦ/dt = 0) so no EMF is induced in the secondary. The primary winding draws a very large current (near-zero DC resistance, no back-EMF) causing overheating and burnout.",
    "opts": [
      "DC produces constant flux (dΦ/dt = 0) so no EMF is induced in the secondary. The primary winding draws a very large current (near-zero DC resistance, no back-EMF) causing overheating and burnout.",
      "The transformer steps up the DC voltage normally just like AC",
      "DC causes the core to demagnetise, reducing output",
      "The secondary produces a pulsating DC output proportional to the turns ratio"
    ],
    "exp": "Faraday: EMF = −N × dΦ/dt. DC = constant flux → dΦ/dt = 0 → no secondary output. Inductive reactance XL = 2πfL = 0 at DC (f=0), so primary sees only its tiny DC resistance → huge current → severe overheating → winding destruction.",
    "cat": "DC Supply",
    "id": "T05_603",
    "topic": "T05_Transformers"
  },
  {
    "q": "A 60Hz-rated transformer is connected to a 50Hz supply at the same rated voltage. What is the MOST likely consequence?",
    "a": "Core flux increases (Φ_max ∝ V/f - lower f at same V gives higher flux) causing core saturation, increased magnetising current, excessive losses, and overheating.",
    "opts": [
      "Core flux increases (Φ_max ∝ V/f - lower f at same V gives higher flux) causing core saturation, increased magnetising current, excessive losses, and overheating.",
      "The output voltage increases proportionally to the frequency reduction",
      "Lower frequency reduces core losses - the transformer runs cooler",
      "No effect - transformers are frequency-independent"
    ],
    "exp": "EMF equation: Φ_max = E ÷ (4.44 × f × N). At 50Hz instead of 60Hz with unchanged voltage, Φ_max increases → core saturates → magnetising current rises sharply → copper losses (I²R) increase → overheating. Safe solution: reduce applied voltage to 50/60 = 83% of rated.",
    "cat": "Frequency Compatibility",
    "id": "T05_604",
    "topic": "T05_Transformers"
  },
  {
    "q": "What is the knee point voltage of a current transformer (CT)?",
    "a": "The secondary excitation voltage above which a 10% increase in voltage causes a 50% or greater increase in magnetising current - indicating the onset of core saturation where CT output no longer accurately follows primary current.",
    "opts": [
      "The secondary excitation voltage above which a 10% increase in voltage causes a 50% or greater increase in magnetising current - indicating the onset of core saturation where CT output no longer accurately follows primary current.",
      "The maximum rated secondary voltage the CT can produce continuously",
      "The voltage at which CT primary insulation begins to break down",
      "The minimum secondary voltage needed to operate a protection relay"
    ],
    "exp": "Above knee point, CT core saturates → secondary current no longer faithfully reproduces primary fault current → protection relay receives distorted signal → may fail to operate. Protection CTs must have knee point voltage V_k well above relay burden at max fault current. Contrast: metering CTs are designed TO saturate at fault currents to protect meters.",
    "cat": "CT Knee Point",
    "id": "T05_605",
    "topic": "T05_Transformers"
  },
  {
    "q": "What is an LVDT and what marine applications use it?",
    "a": "Linear Variable Differential Transformer - inductive transducer with one primary and two opposite-wound secondary coils. Moving ferromagnetic core produces differential output proportional to displacement. Used for governor fuel rack, valve stem position, and steering feedback.",
    "opts": [
      "Linear Variable Differential Transformer - inductive transducer with one primary and two opposite-wound secondary coils. Moving ferromagnetic core produces differential output proportional to displacement. Used for governor fuel rack, valve stem position, and steering feedback.",
      "A Low Voltage Distribution Transformer for stepping 440V down to 24V",
      "A type of isolation transformer used in engine room lighting",
      "A liquid-cooled variable transformer for shore power adjustment"
    ],
    "exp": "LVDT: 1 AC-excited primary + 2 series-opposition secondaries + movable ferromagnetic core (no contact). At null position secondaries cancel → 0V. Core displacement shifts coupling balance → differential voltage output ∝ displacement. No friction, no wear. Marine: governor actuator feedback (fuel rack), rudder/autopilot position, valve stem travel.",
    "cat": "LVDT",
    "id": "T05_606",
    "topic": "T05_Transformers"
  },
  {
    "q": "What is the purpose of a mechanical interlock on MSB incoming source breakers?",
    "a": "To physically prevent two source breakers from closing simultaneously onto the same bus, preventing paralleling of unsynchronised sources which would cause large fault circulating currents.",
    "opts": [
      "To physically prevent two source breakers from closing simultaneously onto the same bus, preventing paralleling of unsynchronised sources which would cause large fault circulating currents.",
      "To prevent the bus-tie breaker from opening under fault conditions",
      "To ensure the generator reaches rated speed before connecting to the bus",
      "To protect the transformer primary from overcurrent during energisation"
    ],
    "exp": "If two unsynchronised sources are both connected to the same bus, even a small phase or voltage difference creates huge circulating fault current → both sources may trip with potential damage. A mechanical key-exchange or sliding-bar interlock: closing breaker A captures the key → must extract key (opens A) before inserting into B → only one source can be closed at any time.",
    "cat": "MSB Interlock",
    "id": "T05_607",
    "topic": "T05_Transformers"
  }

]);
window.loadQuizzes("F23_Losses", [

  /* ═══════════ CONDUCTOR LOSSES (I²R) ═══════════ */
  {
    "q": "What is the fundamental loss mechanism in every conductor carrying current?",
    "a": "Resistive heating, P = I squared R",
    "opts": [
      "Resistive heating, P = I squared R",
      "Hysteresis loss in the copper",
      "Eddy current loss in the copper",
      "Dielectric loss in the insulation"
    ],
    "exp": "Every loss mechanism in this module traces back to current forced through resistance, dissipating heat as P = I squared R. A plain conductor has no core to magnetise and no moving parts, so this is effectively its only loss.",
    "cat": "CONDUCTOR",
    "id": "F23_001"
  },
  {
    "q": "If the current through a cable is doubled, the I squared R heat dissipated becomes:",
    "a": "Four times greater",
    "opts": ["Four times greater", "Two times greater", "Half as much", "Unchanged"],
    "exp": "Loss rises with the square of current, not in proportion to it, so doubling current quadruples the heat. This square-law relationship is why current, not resistance, is the main lever for controlling losses.",
    "cat": "CONDUCTOR",
    "id": "F23_002"
  },
  {
    "q": "A feeder cable's current rises from 20 A to 60 A. By what factor does its I squared R loss increase?",
    "a": "9 times",
    "opts": ["9 times", "3 times", "6 times", "18 times"],
    "exp": "Current has tripled (60/20 = 3), and loss scales with the square of current, so loss rises by 3 squared = 9 times. Simply tripling the loss figure ignores the square-law relationship.",
    "cat": "CONDUCTOR",
    "id": "F23_003"
  },
  {
    "q": "Why does a plain length of cable or a motor winding have essentially only one loss mechanism worth naming?",
    "a": "It has no core to magnetise and no relative motion, so resistive heating in the copper is the only significant loss",
    "opts": [
      "It has no core to magnetise and no relative motion, so resistive heating in the copper is the only significant loss",
      "Because copper has zero hysteresis loss under any condition",
      "Because AC current does not produce heat in a straight conductor",
      "Because cable insulation completely blocks all heat transfer"
    ],
    "exp": "A cable or winding is just a resistive path: no laminated core to re-magnetise and no bearings or windage. That is why cable sizing, loading, and connection maintenance all come back to keeping I, and to a lesser extent R, low.",
    "cat": "CONDUCTOR",
    "id": "F23_004"
  },

  /* ═══════════ LOSSES IN A ROTATING MACHINE ═══════════ */
  {
    "q": "How many distinct loss mechanisms are usually identified inside a rotating machine such as a motor or generator?",
    "a": "Four: copper loss, iron loss, mechanical loss, and stray load loss",
    "opts": [
      "Four: copper loss, iron loss, mechanical loss, and stray load loss",
      "Two: copper loss and iron loss only",
      "Three: hysteresis, eddy current, and windage",
      "Five, including dielectric loss in the windings"
    ],
    "exp": "A rotating machine has a magnetised core and moving parts on top of its windings, giving copper loss, iron loss (itself split into hysteresis and eddy current), mechanical loss, and a smaller stray load loss.",
    "cat": "MACHINE",
    "id": "F23_005"
  },
  {
    "q": "Copper loss in a rotating machine's windings is best described as:",
    "a": "A variable loss, rising with the square of load current",
    "opts": [
      "A variable loss, rising with the square of load current",
      "A constant loss, present whenever the machine is energised regardless of load",
      "A loss that depends mainly on running speed rather than current",
      "A loss confined entirely to the rotor, never the stator"
    ],
    "exp": "Copper loss is I squared R heating in the stator and, where applicable, rotor windings, so it is a variable loss that rises and falls with the square of load current, in direct contrast to iron loss.",
    "cat": "MACHINE",
    "id": "F23_006"
  },
  {
    "q": "Why is iron loss in a rotating machine considered a constant loss?",
    "a": "The core is magnetised at essentially rated flux whenever the machine is energised, independent of load current",
    "opts": [
      "The core is magnetised at essentially rated flux whenever the machine is energised, independent of load current",
      "Iron loss only occurs when the machine is fully loaded",
      "The core's resistance is zero, so no current-dependent heating can occur there",
      "Iron loss is proportional to shaft torque, which stays constant by design"
    ],
    "exp": "Iron loss depends on supply voltage and frequency magnetising the core, not on load current. That is why it stays close to the same value whether the machine is running light or fully loaded.",
    "cat": "MACHINE",
    "id": "F23_007"
  },
  {
    "q": "What are the two distinct mechanisms that together make up iron (core) loss?",
    "a": "Hysteresis loss and eddy current loss",
    "opts": [
      "Hysteresis loss and eddy current loss",
      "Copper loss and stray load loss",
      "Friction loss and windage loss",
      "Dielectric loss and corona loss"
    ],
    "exp": "Iron loss is the sum of hysteresis loss, from the magnetic domains resisting realignment as the field reverses, and eddy current loss, from currents induced within the conductive core steel itself.",
    "cat": "MACHINE",
    "id": "F23_008"
  },
  {
    "q": "Physically, what does hysteresis loss represent?",
    "a": "Energy absorbed and dissipated as heat because the magnetic domains in the steel lag behind, and resist, the reversing applied field",
    "opts": [
      "Energy absorbed and dissipated as heat because the magnetic domains in the steel lag behind, and resist, the reversing applied field",
      "Energy lost to currents circulating within the core steel itself",
      "Energy lost to bearing friction as the rotor turns",
      "Energy lost in the air gap between rotor and stator"
    ],
    "exp": "The magnetisation curve traces a loop rather than a single retraceable line because the domains resist realigning as the field reverses. The area enclosed by that loop is the energy dissipated as heat each cycle, the material's magnetic friction.",
    "cat": "MACHINE",
    "id": "F23_009"
  },
  {
    "q": "Why is silicon steel used for machine and transformer cores rather than plain mild steel?",
    "a": "It has a narrower hysteresis loop, giving lower hysteresis loss",
    "opts": [
      "It has a narrower hysteresis loop, giving lower hysteresis loss",
      "It has higher electrical resistance than any other material available",
      "It is cheaper to manufacture than mild steel",
      "It eliminates eddy current loss entirely without needing lamination"
    ],
    "exp": "Silicon steel is chosen specifically for its narrow magnetisation loop, which means low hysteresis loss. It still needs laminating to control eddy current loss, since that is a separate mechanism.",
    "cat": "MACHINE",
    "id": "F23_010"
  },
  {
    "q": "What physically causes eddy current loss in a machine core?",
    "a": "The changing flux induces circulating currents within the conductive core steel itself, which dissipate as I squared R heat",
    "opts": [
      "The changing flux induces circulating currents within the conductive core steel itself, which dissipate as I squared R heat",
      "Friction between the rotor and stator laminations",
      "Magnetic domains in the steel resisting realignment as the field reverses",
      "Leakage flux inducing currents in the machine's external frame only"
    ],
    "exp": "The same induction mechanism that makes the machine work also induces circulating currents in the core steel, which is itself a conductor. Those currents flow against the core's own resistance and dissipate as heat, distinct from hysteresis loss.",
    "cat": "MACHINE",
    "id": "F23_011"
  },
  {
    "q": "Why does laminating a machine core specifically reduce eddy current loss rather than hysteresis loss?",
    "a": "Laminating confines each induced eddy current to a small loop within one thin sheet instead of a large loop across the whole core; hysteresis loss depends on steel grade, not shape",
    "opts": [
      "Laminating confines each induced eddy current to a small loop within one thin sheet instead of a large loop across the whole core; hysteresis loss depends on steel grade, not shape",
      "Laminating increases the magnetic permeability of the steel, which suppresses hysteresis directly",
      "Laminating removes the need for the core to be magnetised at all",
      "Laminating reduces the resistance of the core, which lowers both losses equally"
    ],
    "exp": "A solid core lets eddy currents form large loops across the whole cross section. Building the core from many thin, mutually insulated sheets confines each eddy current to a small loop within one lamination. Hysteresis loss is unaffected by shape since it is a property of the steel grade itself.",
    "cat": "MACHINE",
    "id": "F23_012"
  },
  {
    "q": "Eddy current loss in a laminated core varies with which property of the laminations?",
    "a": "The square of lamination thickness",
    "opts": [
      "The square of lamination thickness",
      "Directly in proportion to lamination thickness",
      "The inverse of lamination thickness",
      "It does not depend on lamination thickness at all"
    ],
    "exp": "Eddy current loss varies with the square of lamination thickness, so halving the thickness cuts the loss to roughly a quarter, not just a half. This is why laminations are kept thin, typically 0.25 to 0.5 mm, despite the manufacturing cost of doing so.",
    "cat": "MACHINE",
    "id": "F23_013"
  },
  {
    "q": "A machine's laminations are changed from 0.5 mm thick to 0.25 mm thick, with no other changes. What happens to eddy current loss?",
    "a": "It falls to roughly a quarter of its original value",
    "opts": [
      "It falls to roughly a quarter of its original value",
      "It falls to roughly half its original value",
      "It stays the same, since eddy current loss does not depend on thickness",
      "It doubles, since there are now twice as many laminations"
    ],
    "exp": "Halving the lamination thickness cuts eddy current loss to roughly a quarter, since the loss varies with the square of thickness. This is the specific reason thin laminations are used despite the added manufacturing cost of more, thinner sheets.",
    "cat": "MACHINE",
    "id": "F23_014"
  },
  {
    "q": "What does mechanical loss in a rotating machine consist of, and what does it depend on mainly?",
    "a": "Bearing friction, brush friction where fitted, and windage; it depends mainly on running speed, not electrical load",
    "opts": [
      "Bearing friction, brush friction where fitted, and windage; it depends mainly on running speed, not electrical load",
      "I squared R heating in the rotor bars; it depends mainly on load current",
      "Core magnetisation loss; it depends mainly on supply frequency",
      "Leakage flux in nearby structural steel; it depends mainly on load torque"
    ],
    "exp": "Mechanical loss covers friction and windage, the power spent churning air or driving a cooling fan as the rotor spins. Because this depends mainly on speed, it stays close to constant across the machine's loading range at a given speed, similar in behaviour to iron loss.",
    "cat": "MACHINE",
    "id": "F23_015"
  },
  {
    "q": "What is stray load loss, and why does measured machine efficiency always come out slightly lower than a calculation using only copper and iron loss?",
    "a": "It covers leakage flux inducing eddy currents in nearby structural steel and flux distortion under load, a small but always-present loss the other three categories do not capture",
    "opts": [
      "It covers leakage flux inducing eddy currents in nearby structural steel and flux distortion under load, a small but always-present loss the other three categories do not capture",
      "It is simply another name for copper loss measured under a different test",
      "It is the loss caused entirely by bearing wear over the machine's lifetime",
      "It only exists in machines with a wound rotor, never in a squirrel cage design"
    ],
    "exp": "Stray load loss is usually a small percentage of total loss, but it is always present, covering effects the copper, iron and mechanical categories do not cleanly capture. This is why real measured efficiency is always a touch lower than a simplified calculation predicts.",
    "cat": "MACHINE",
    "id": "F23_016"
  },

  /* ═══════════ LOSSES IN A TRANSFORMER ═══════════ */
  {
    "q": "Why does a transformer have a simpler loss picture than a rotating machine?",
    "a": "It has no rotor, bearings or windage, so only copper loss and iron loss apply, with no mechanical loss category",
    "opts": [
      "It has no rotor, bearings or windage, so only copper loss and iron loss apply, with no mechanical loss category",
      "A transformer has no core, so iron loss does not apply to it at all",
      "A transformer only ever operates at no load, so copper loss does not apply",
      "A transformer has stray load loss but no copper loss"
    ],
    "exp": "A transformer has no moving parts at all, so mechanical and windage loss simply do not exist for it. What remains is the same two mechanisms already introduced for a rotating machine's stationary parts: iron loss and copper loss.",
    "cat": "TRANSFORMER",
    "id": "F23_017"
  },
  {
    "q": "Why is a transformer's no-load loss essentially all iron loss?",
    "a": "The core carries full rated flux and is taken through a complete hysteresis cycle the moment the primary is energised, regardless of whether the secondary supplies any load",
    "opts": [
      "The core carries full rated flux and is taken through a complete hysteresis cycle the moment the primary is energised, regardless of whether the secondary supplies any load",
      "Copper loss is always zero in a transformer, at any load",
      "No-load loss is measured with the primary disconnected, so no loss exists at all",
      "The secondary winding is removed entirely for the no-load loss measurement"
    ],
    "exp": "Since the core is excited at essentially rated voltage the instant the primary is energised, iron loss is present whether or not the secondary is drawing power. With no secondary current at no load, there is negligible copper loss to include.",
    "cat": "TRANSFORMER",
    "id": "F23_018"
  },
  {
    "q": "Why is a transformer's load loss essentially all copper loss?",
    "a": "Copper loss only exists once current flows in both windings, and it scales with the square of that current, so it is zero at no load and rises steeply with load",
    "opts": [
      "Copper loss only exists once current flows in both windings, and it scales with the square of that current, so it is zero at no load and rises steeply with load",
      "Iron loss disappears entirely the moment a load is connected",
      "Load loss is measured with the core completely demagnetised",
      "The primary winding carries no current until a load is connected"
    ],
    "exp": "The moment a load is connected, current flows in both windings and dissipates I squared R heat exactly as in any conductor, rising steeply with load current. This is on top of the iron loss, which stays roughly constant regardless.",
    "cat": "TRANSFORMER",
    "id": "F23_019"
  },
  {
    "q": "Which standard test isolates a transformer's iron loss, and why?",
    "a": "The open circuit test, secondary left open, because with negligible secondary current the wattmeter reading is essentially iron loss alone",
    "opts": [
      "The open circuit test, secondary left open, because with negligible secondary current the wattmeter reading is essentially iron loss alone",
      "The short circuit test, secondary shorted, because no flux exists in the core during that test",
      "The insulation resistance test, because it directly measures core magnetisation",
      "The open circuit test, because it is performed with the primary disconnected from supply"
    ],
    "exp": "In the open circuit test the secondary is left open, so with no secondary current flowing there is negligible copper loss included, and the primary wattmeter reading is, for practical purposes, iron loss alone.",
    "cat": "TRANSFORMER",
    "id": "F23_020"
  },
  {
    "q": "Which standard test isolates a transformer's copper loss, and why?",
    "a": "The short circuit test, secondary shorted, with reduced primary voltage applied to circulate rated current; the core is barely magnetised so the reading is essentially copper loss alone",
    "opts": [
      "The short circuit test, secondary shorted, with reduced primary voltage applied to circulate rated current; the core is barely magnetised so the reading is essentially copper loss alone",
      "The open circuit test, because with the secondary open the full rated current flows in the primary",
      "The short circuit test, because shorting the secondary removes all winding resistance from the circuit",
      "Neither test can isolate copper loss; it must always be calculated from nameplate data"
    ],
    "exp": "The short circuit test applies just enough primary voltage to circulate rated current with the secondary shorted. At that reduced voltage the core is barely magnetised, so the wattmeter reading is, for practical purposes, copper loss alone.",
    "cat": "TRANSFORMER",
    "id": "F23_021"
  },
  {
    "q": "A transformer's total loss at any given load is best expressed as:",
    "a": "Iron loss (essentially fixed) plus copper loss at that load current",
    "opts": [
      "Iron loss (essentially fixed) plus copper loss at that load current",
      "Iron loss multiplied by copper loss",
      "Whichever of iron loss or copper loss is larger at that load",
      "Copper loss only, since iron loss is negligible in a well-designed transformer"
    ],
    "exp": "Total loss splits cleanly into a constant iron loss, fixed by supply voltage and frequency, plus a copper loss that varies with the square of load current. This split is exactly what the maximum efficiency derivation depends on.",
    "cat": "TRANSFORMER",
    "id": "F23_022"
  },

  /* ═══════════ EFFICIENCY & MAXIMUM EFFICIENCY ═══════════ */
  {
    "q": "Efficiency of a machine or transformer is defined as:",
    "a": "Output / (Output + Losses)",
    "opts": [
      "Output / (Output + Losses)",
      "Output / Losses",
      "Losses / Input",
      "Input / Output"
    ],
    "exp": "Efficiency is output over input, and since input equals output plus total losses, this is equivalently written as output over (output plus losses). It can never exceed 1, since losses can never be negative.",
    "cat": "EFFICIENCY",
    "id": "F23_023"
  },
  {
    "q": "In the efficiency derivation, the load fraction x is applied to which two loss terms?",
    "a": "Output rises directly with x, while copper loss rises with x squared; iron loss stays fixed regardless of x",
    "opts": [
      "Output rises directly with x, while copper loss rises with x squared; iron loss stays fixed regardless of x",
      "Both iron loss and copper loss rise with x squared",
      "Iron loss rises with x squared, while copper loss stays fixed",
      "Output rises with x squared, while copper loss rises directly with x"
    ],
    "exp": "Output at load fraction x is x times the full-load output. The constant loss (iron loss) does not move with x at all, while the variable loss (copper loss) is written as x squared times the full-load copper loss, since it depends on the square of current.",
    "cat": "EFFICIENCY",
    "id": "F23_024"
  },
  {
    "q": "Why is efficiency relatively poor at very light load, well below the maximum efficiency point?",
    "a": "The constant iron loss has not yet been diluted by enough output, so it forms a large share of total loss",
    "opts": [
      "The constant iron loss has not yet been diluted by enough output, so it forms a large share of total loss",
      "Copper loss dominates total loss at light load",
      "The power factor automatically falls at light load, increasing current",
      "Mechanical loss rises sharply whenever load is reduced"
    ],
    "exp": "At low load the fixed iron loss overhead is being spread over very little output, dragging efficiency down. As load rises, output grows faster than the fixed loss share, and efficiency improves, until the growing copper loss starts to outweigh that gain.",
    "cat": "EFFICIENCY",
    "id": "F23_025"
  },
  {
    "q": "The classical condition for maximum efficiency in a transformer or machine is:",
    "a": "Constant loss (iron loss) equals variable loss (copper loss) at that load point",
    "opts": [
      "Constant loss (iron loss) equals variable loss (copper loss) at that load point",
      "Copper loss is reduced to zero",
      "Iron loss is exactly double the copper loss",
      "The machine is operating at exactly full rated load"
    ],
    "exp": "Below this crossover load, the fixed iron loss overhead has not yet been diluted; above it, copper loss outgrows output faster than output can compensate. The exact crossover, where the two losses are equal, is the peak of the efficiency curve.",
    "cat": "EFFICIENCY",
    "id": "F23_026"
  },
  {
    "q": "The load fraction x at which maximum efficiency occurs is given by which expression?",
    "a": "x = square root of (Pc / Pcu), where Pc is iron loss and Pcu is full-load copper loss",
    "opts": [
      "x = square root of (Pc / Pcu), where Pc is iron loss and Pcu is full-load copper loss",
      "x = Pc / Pcu, with no square root",
      "x = Pcu / Pc, with no square root",
      "x = square root of (Pcu / Pc)"
    ],
    "exp": "Maximum efficiency occurs where Pc equals x squared times Pcu, so solving for x gives x = square root of (Pc / Pcu). Inverting the ratio, or forgetting the square root, are the two common slip-ups on this formula.",
    "cat": "EFFICIENCY",
    "id": "F23_027"
  },
  {
    "q": "A transformer has iron loss of 800 W and full-load copper loss of 1250 W. At what fraction of full load does maximum efficiency occur?",
    "a": "0.8 (80 percent of full load)",
    "opts": ["0.8 (80 percent of full load)", "0.64", "1.25", "0.5"],
    "exp": "x = square root of (800 / 1250) = square root of 0.64 = 0.8. Checking: at x = 0.8, copper loss = 0.8 squared x 1250 = 800 W, exactly equal to the iron loss, confirming the condition holds.",
    "cat": "EFFICIENCY",
    "id": "F23_028"
  },
  {
    "q": "A machine has iron loss of 500 W and full-load copper loss of 2000 W. At what fraction of full load does maximum efficiency occur?",
    "a": "0.5 (50 percent of full load)",
    "opts": ["0.5 (50 percent of full load)", "0.25", "2", "0.71"],
    "exp": "x = square root of (500 / 2000) = square root of 0.25 = 0.5. At x = 0.5, copper loss = 0.5 squared x 2000 = 500 W, matching the 500 W iron loss and confirming the crossover point.",
    "cat": "EFFICIENCY",
    "id": "F23_029"
  },
  {
    "q": "For the transformer with iron loss 800 W and full-load copper loss 1250 W, what is the copper loss at the load point of maximum efficiency?",
    "a": "800 W, exactly equal to the iron loss",
    "opts": ["800 W, exactly equal to the iron loss", "1250 W", "640 W", "1000 W"],
    "exp": "At maximum efficiency the condition is that copper loss at that load equals the iron loss, so it must be exactly 800 W. This is the defining check that confirms x = 0.8 is correct, rather than a coincidence of the arithmetic.",
    "cat": "EFFICIENCY",
    "id": "F23_030"
  },
  {
    "q": "A transformer is deliberately sized somewhat larger than its typical running load, so it normally runs a little below 100 percent output. Why might this genuinely improve day-to-day efficiency rather than waste capacity?",
    "a": "If losses are reasonably balanced, running nearer the constant-loss-equals-variable-loss crossover can give better efficiency than running an exactly-rated unit flat out, where variable loss dominates",
    "opts": [
      "If losses are reasonably balanced, running nearer the constant-loss-equals-variable-loss crossover can give better efficiency than running an exactly-rated unit flat out, where variable loss dominates",
      "A larger transformer always has lower iron loss than a smaller one, regardless of loading",
      "Running below full load eliminates copper loss entirely",
      "Oversizing a transformer always reduces its overall weight and cost"
    ],
    "exp": "An exactly-rated unit run flat out sits above the maximum efficiency crossover, where copper loss is growing faster than output. A somewhat larger unit running below its own full rating can sit closer to the crossover point and genuinely run more efficiently for the same job.",
    "cat": "EFFICIENCY",
    "id": "F23_031"
  },

  /* ═══════════ TRANSMISSION LOSSES ═══════════ */
  {
    "q": "For a fixed real power P delivered to a load, raising the transmission voltage V has what effect on the current I required?",
    "a": "I falls in direct, inverse proportion to V",
    "opts": [
      "I falls in direct, inverse proportion to V",
      "I rises in direct proportion to V",
      "I stays the same regardless of V",
      "I falls with the square of V"
    ],
    "exp": "Since P = V x I for a fixed power, I = P / V. Raising V lowers the current needed in direct, inverse proportion. It is this current reduction, not any change to the cable resistance, that cuts transmission losses.",
    "cat": "TRANSMISSION",
    "id": "F23_032"
  },
  {
    "q": "If the transmission voltage is doubled for the same delivered power, what happens to the I squared R loss in the line?",
    "a": "It falls to a quarter of its original value",
    "opts": [
      "It falls to a quarter of its original value",
      "It falls to half its original value",
      "It stays the same",
      "It falls to an eighth of its original value"
    ],
    "exp": "Doubling voltage halves the current needed for the same power. Since loss is I squared R, halving the current means the loss falls to a quarter, not a half. This squared relationship is the entire justification for high voltage transmission.",
    "cat": "TRANSMISSION",
    "id": "F23_033"
  },
  {
    "q": "If the transmission voltage is tripled for the same delivered power, the I squared R loss falls to approximately:",
    "a": "One ninth of its original value",
    "opts": ["One ninth of its original value", "One third of its original value", "One sixth of its original value", "It stays the same"],
    "exp": "Tripling voltage cuts current to one third for the same power. Loss depends on the square of current, so it falls to (1/3) squared, one ninth of the original value.",
    "cat": "TRANSMISSION",
    "id": "F23_034"
  },
  {
    "q": "Why does the marine LV/HV boundary rationale (as covered for larger vessels with heavy loads such as podded propulsion) rest on the same principle as transmission losses ashore?",
    "a": "Raising distribution voltage lowers the current needed for a given power, cutting both I squared R losses and required cable size, whether on a national grid or a ship's own system",
    "opts": [
      "Raising distribution voltage lowers the current needed for a given power, cutting both I squared R losses and required cable size, whether on a national grid or a ship's own system",
      "Ships use higher voltage purely because IEC regulations mandate it regardless of loss considerations",
      "Higher voltage reduces the resistivity of the cable material itself",
      "The LV/HV boundary is unrelated to losses and exists only for safety reasons"
    ],
    "exp": "The same P = VI relationship applies on board as on a national grid: for a fixed power, higher voltage means lower current, which means both lower I squared R loss and smaller required cable cross-section, which is why heavier shipboard loads are distributed at higher voltage.",
    "cat": "TRANSMISSION",
    "id": "F23_035"
  },

  /* ═══════════ POWER FACTOR AND LOSSES ═══════════ */
  {
    "q": "How does a lower power factor affect the losses in a system delivering the same real power?",
    "a": "It increases the total current needed, and because I squared R loss scales with the square of current, losses rise disproportionately more than the power factor drop",
    "opts": [
      "It increases the total current needed, and because I squared R loss scales with the square of current, losses rise disproportionately more than the power factor drop",
      "It has no effect on losses, since real power delivered is unchanged",
      "It reduces losses, since reactive current does not generate heat",
      "It only affects losses in DC systems, not AC systems"
    ],
    "exp": "Power factor does not change how much useful power is delivered, but a lower cos phi means more total current is needed to deliver that same real power. Since I squared R loss depends on the square of current, the loss increase is disproportionately larger than the drop in power factor itself.",
    "cat": "PF",
    "id": "F23_036"
  },
  {
    "q": "For a fixed real power P and voltage V, the current required is given by which expression?",
    "a": "I = P / (V x cos phi)",
    "opts": ["I = P / (V x cos phi)", "I = P x V x cos phi", "I = P x cos phi / V", "I = V / (P x cos phi)"],
    "exp": "Since P = V x I x cos phi, rearranging for current gives I = P / (V x cos phi). As cos phi falls for the same P and V, the required current I must rise.",
    "cat": "PF",
    "id": "F23_037"
  },
  {
    "q": "A load draws 100 kW at unity power factor. The same 100 kW is then drawn at 0.7 power factor. Roughly what happens to the I squared R loss in the supply cables, for the same delivered power?",
    "a": "It roughly doubles",
    "opts": ["It roughly doubles", "It stays exactly the same", "It roughly triples", "It falls by about 30 percent"],
    "exp": "At 0.7 power factor the current needed is about 1/0.7, roughly 1.43 times the unity power factor current. Since loss depends on the square of current, 1.43 squared is approximately 2, so the loss roughly doubles for exactly the same useful power delivered.",
    "cat": "PF",
    "id": "F23_038"
  },
  {
    "q": "A load's power factor falls from 1.0 to 0.8 while delivering the same real power. Roughly what factor does the I squared R loss in the supply increase by?",
    "a": "About 1.56 times",
    "opts": ["About 1.56 times", "About 1.25 times", "About 0.8 times", "About 2.5 times"],
    "exp": "Current rises by a factor of 1/0.8 = 1.25 for the same real power. Since loss scales with current squared, the loss rises by 1.25 squared, about 1.56 times, for exactly the same useful output.",
    "cat": "PF",
    "id": "F23_039"
  },
  {
    "q": "Why is power factor correction, adding capacitance to offset lagging reactive current from motors, considered worthwhile even though the capacitors do no useful mechanical work themselves?",
    "a": "It reduces the total current the system must carry to deliver the same real power, cutting I squared R losses throughout the cables, generators and switchgear",
    "opts": [
      "It reduces the total current the system must carry to deliver the same real power, cutting I squared R losses throughout the cables, generators and switchgear",
      "It increases the real power delivered to every connected load",
      "It reduces the supply frequency, which lowers all AC losses",
      "It eliminates iron loss in every transformer on the system"
    ],
    "exp": "Correction capacitors bring the system power factor closer to unity, reducing the total current needed for the same real power. That reduction cuts I squared R loss everywhere that current flows, even though the capacitors themselves deliver no mechanical output.",
    "cat": "PF",
    "id": "F23_040"
  },

  /* ═══════════ PRACTICAL LOSS REDUCTION ═══════════ */
  {
    "q": "Why can a loose or corroded terminal cause serious local heating even on a lightly loaded circuit?",
    "a": "It adds resistance at a single point, so I squared R loss is concentrated there even though the current is the same as everywhere else in the series path",
    "opts": [
      "It adds resistance at a single point, so I squared R loss is concentrated there even though the current is the same as everywhere else in the series path",
      "A loose terminal always draws far more current than the rest of the circuit",
      "A loose terminal raises the supply voltage locally",
      "Corrosion generates its own independent source of heat unrelated to current"
    ],
    "exp": "Current in a series path is the same everywhere, so a loose or corroded joint raising local resistance concentrates I squared R heating at that one spot. Regular inspection and correct torquing is one of the simplest, most effective ways to cut both losses and fire risk.",
    "cat": "PRACTICAL",
    "id": "F23_041"
  },
  {
    "q": "Why is running a motor or transformer well under its rated load considered wasteful in loss terms?",
    "a": "Constant iron and mechanical losses are still incurred at essentially full value, but spread over a small useful output",
    "opts": [
      "Constant iron and mechanical losses are still incurred at essentially full value, but spread over a small useful output",
      "Copper loss rises sharply whenever a machine is underloaded",
      "Underloading a machine causes its power factor to become leading",
      "Underloading always damages the winding insulation"
    ],
    "exp": "Iron loss and mechanical loss stay roughly constant regardless of load, so running well below rated capacity means that fixed overhead is diluted over very little useful output, dragging efficiency down. This is the light-load side of the same effect the maximum efficiency derivation captures.",
    "cat": "PRACTICAL",
    "id": "F23_042"
  },
  {
    "q": "Why does keeping cores and cooling paths clean of dust, oil and blockages help reduce electrical losses?",
    "a": "Dust and blocked ventilation raise operating temperature, which raises winding resistance and therefore I squared R loss for the same current",
    "opts": [
      "Dust and blocked ventilation raise operating temperature, which raises winding resistance and therefore I squared R loss for the same current",
      "Dust on a core directly increases its hysteresis loss",
      "Blocked cooling paths reduce the supply voltage reaching the machine",
      "Clean cores eliminate eddy current loss entirely"
    ],
    "exp": "Higher operating temperature from poor cooling raises winding resistance, and since current stays the same for a given load, higher resistance means more I squared R loss for that same current, on top of shortening insulation life.",
    "cat": "PRACTICAL",
    "id": "F23_043"
  },
  {
    "q": "Why is an undersized cable a loss problem, while an oversized cable is not simply the safer choice by default?",
    "a": "An undersized cable runs hot and wastes energy as I squared R heat, while an oversized cable is an unnecessary weight, space and cost penalty; the correct approach is sizing to the actual expected load",
    "opts": [
      "An undersized cable runs hot and wastes energy as I squared R heat, while an oversized cable is an unnecessary weight, space and cost penalty; the correct approach is sizing to the actual expected load",
      "Oversized cables always increase I squared R loss compared with correctly sized ones",
      "Cable size has no effect on losses, only on installation cost",
      "Undersized cables reduce losses because they have less total copper"
    ],
    "exp": "An undersized cable has higher resistance for the current it must carry, running hot and wasting energy while shortening insulation life. An oversized one avoids that but adds unnecessary weight, space and cost, so the correct practice is sizing to the actual expected load, not simply going as large as possible.",
    "cat": "PRACTICAL",
    "id": "F23_044"
  }

]);

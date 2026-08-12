window.loadQuizzes("F22_Refrigeration", [

  /* ═══════════ ETO'S ROLE & SYLLABUS SCOPE ═══════════ */
  {
    "q": "Refrigeration is not an ETO's trade, so why is it on the oral syllabus at all?",
    "a": "Every provision plant and AC unit is driven by an electric motor and controlled by electrical switches and relays, all of which are the ETO's responsibility",
    "opts": [
      "Every provision plant and AC unit is driven by an electric motor and controlled by electrical switches and relays, all of which are the ETO's responsibility",
      "ETOs are required to charge refrigerant on smaller vessels without a refrigeration engineer",
      "Refrigeration theory is examined only because it overlaps with air conditioning wiring diagrams",
      "The examiner is testing general mechanical knowledge unrelated to the ETO's actual duties"
    ],
    "exp": "The motor, starter, and every control device in the circuit are unambiguously electrical and therefore the ETO's job, even though charging refrigerant and mechanical compressor work are not. That is the boundary the notes draw explicitly.",
    "cat": "BOUNDARY",
    "id": "F22_001"
  },
  {
    "q": "Which of the following falls under the refrigeration engineer's mechanical scope rather than the ETO's electrical scope?",
    "a": "Refrigerant charge: leak detection, recovery, evacuation and recharging",
    "opts": [
      "Refrigerant charge: leak detection, recovery, evacuation and recharging",
      "The compressor motor's starting, running and overload protection",
      "The control circuit: thermostat, LP/HP cut-outs, solenoids, defrost timer",
      "Fault finding on the wiring diagram: voltage present, switch made, coil energised"
    ],
    "exp": "Refrigerant charge work, pipework, brazing and expansion valve setting sit with the refrigeration engineer. The motor, its protection, and the whole control circuit are the ETO's responsibility.",
    "cat": "BOUNDARY",
    "id": "F22_002"
  },
  {
    "q": "A crew member reports 'the fridge won't start.' Per the notes, what does this complaint very often turn out to be?",
    "a": "An electrical fault such as a tripped cut-out, a failed switch or a burnt contactor",
    "opts": [
      "An electrical fault such as a tripped cut-out, a failed switch or a burnt contactor",
      "A refrigerant leak requiring recovery and recharge",
      "A worn compressor valve plate needing replacement",
      "A blocked expansion valve requiring superheat adjustment"
    ],
    "exp": "The notes state this directly: a compressor that won't start, trips repeatedly, or runs without cooling very often turns out to be electrical once investigated, exactly where the ETO's job and the fault meet.",
    "cat": "BOUNDARY",
    "id": "F22_003"
  },
  {
    "q": "The refrigeration engineer troubleshoots using the pressure-enthalpy diagram. What does the ETO use for fault finding on the same plant?",
    "a": "The wiring diagram: checking voltage present, switch made, coil energised",
    "opts": [
      "The wiring diagram: checking voltage present, switch made, coil energised",
      "The same pressure-enthalpy diagram, since both trades share it",
      "A refrigerant charge log to confirm the system is fully charged",
      "A vibration analysis chart for the compressor bearings"
    ],
    "exp": "The two trades fault-find on different tools entirely: the refrigeration engineer thinks in charge, restrictions and compressor pumping on the P-h diagram, while the ETO thinks in voltage present, switch made, coil energised on the wiring diagram.",
    "cat": "BOUNDARY",
    "id": "F22_004"
  },

  /* ═══════════ THE VCRS CYCLE ═══════════ */
  {
    "q": "How many main components make up the vapour compression refrigeration cycle?",
    "a": "Four",
    "opts": ["Four", "Three", "Five", "Six"],
    "exp": "Compressor, condenser, expansion valve and evaporator, connected in a closed loop, form the standard VCRS used on nearly every shipboard plant.",
    "cat": "VCRS",
    "id": "F22_005"
  },
  {
    "q": "Following the refrigerant's flow starting from the compressor, what is the correct order of the four VCRS components?",
    "a": "Compressor, condenser, expansion valve, evaporator",
    "opts": [
      "Compressor, condenser, expansion valve, evaporator",
      "Compressor, evaporator, expansion valve, condenser",
      "Condenser, compressor, evaporator, expansion valve",
      "Evaporator, expansion valve, compressor, condenser"
    ],
    "exp": "The refrigerant is compressed, then rejects heat in the condenser, then is throttled by the expansion valve, then absorbs heat in the evaporator, before returning to the compressor to repeat.",
    "cat": "VCRS",
    "id": "F22_006"
  },
  {
    "q": "What is the compressor's role in the VCRS cycle?",
    "a": "It draws in low pressure vapour and compresses it to high pressure, raising its temperature",
    "opts": [
      "It draws in low pressure vapour and compresses it to high pressure, raising its temperature",
      "It throttles high pressure liquid down to low pressure",
      "It rejects heat from hot vapour to seawater or air",
      "It absorbs heat from the cooled space by boiling the refrigerant"
    ],
    "exp": "The compressor is the only component that does mechanical work on the refrigerant. The other three descriptions belong to the expansion valve, condenser and evaporator respectively.",
    "cat": "VCRS",
    "id": "F22_007"
  },
  {
    "q": "What is the condenser's role in the VCRS cycle?",
    "a": "A heat exchanger where hot high pressure vapour rejects heat to seawater or air and condenses to high pressure liquid",
    "opts": [
      "A heat exchanger where hot high pressure vapour rejects heat to seawater or air and condenses to high pressure liquid",
      "A restriction that throttles high pressure liquid down to low pressure",
      "A heat exchanger inside the cooled space where refrigerant absorbs heat",
      "A device that compresses low pressure vapour to high pressure"
    ],
    "exp": "The condenser is a heat exchanger on the high pressure side that turns vapour into liquid by rejecting heat to seawater or air, the opposite job of the evaporator.",
    "cat": "VCRS",
    "id": "F22_008"
  },
  {
    "q": "What is the expansion valve's role in the VCRS cycle?",
    "a": "A restriction that throttles high pressure liquid to low pressure, flashing part to vapour and dropping temperature sharply",
    "opts": [
      "A restriction that throttles high pressure liquid to low pressure, flashing part to vapour and dropping temperature sharply",
      "A heat exchanger that condenses vapour into liquid",
      "A device that compresses vapour and raises its temperature",
      "A heat exchanger that absorbs heat from the cooled space"
    ],
    "exp": "The expansion valve is a pure restriction, not a heat exchanger. It does the sharp pressure and temperature drop that makes the refrigerant cold enough to do useful cooling in the evaporator.",
    "cat": "VCRS",
    "id": "F22_009"
  },
  {
    "q": "What is the evaporator's role in the VCRS cycle?",
    "a": "A heat exchanger inside the cooled space where the cold mixture absorbs heat and boils off to low pressure vapour",
    "opts": [
      "A heat exchanger inside the cooled space where the cold mixture absorbs heat and boils off to low pressure vapour",
      "A restriction that drops the refrigerant's pressure sharply",
      "A heat exchanger that rejects heat to seawater or air",
      "A device that compresses vapour to high pressure"
    ],
    "exp": "The evaporator sits inside the cooled space and does the actual cooling: it is where the refrigerant boils, absorbing latent heat from the surroundings.",
    "cat": "VCRS",
    "id": "F22_010"
  },
  {
    "q": "Why does refrigerant vapour leave the compressor hotter than it entered?",
    "a": "Compressing the gas does real work on it, and that work appears as an increase in the gas's internal energy, raising its temperature",
    "opts": [
      "Compressing the gas does real work on it, and that work appears as an increase in the gas's internal energy, raising its temperature",
      "Friction inside the compressor casing is the only source of heating",
      "The refrigerant absorbs ambient heat while passing through the compressor",
      "The compressor deliberately adds an electric heating element to the discharge line"
    ],
    "exp": "Mechanical work done in compressing a gas has to go somewhere; it shows up as higher internal energy and therefore higher temperature. This is why discharge vapour is superheated, not because of friction or an external heater.",
    "cat": "VCRS",
    "id": "F22_011"
  },
  {
    "q": "Why must the refrigerant leaving the compressor be genuinely hotter than the condenser's cooling medium (seawater or air)?",
    "a": "Heat only flows from hot to cold, so the refrigerant must be hotter than the cooling medium or it could never reject heat to it",
    "opts": [
      "Heat only flows from hot to cold, so the refrigerant must be hotter than the cooling medium or it could never reject heat to it",
      "A hotter vapour compresses more easily on the next cycle",
      "It prevents the expansion valve from icing up later in the cycle",
      "It is required only to keep the compressor's overload relay from tripping"
    ],
    "exp": "Heat transfer requires a temperature difference in the right direction. If the vapour were not hotter than the seawater or air, the condenser could not reject any heat at all.",
    "cat": "VCRS",
    "id": "F22_012"
  },
  {
    "q": "What happens to pressure as refrigerant passes through the condenser?",
    "a": "It stays essentially constant at the high side pressure while temperature falls to saturation and then holds while condensing",
    "opts": [
      "It stays essentially constant at the high side pressure while temperature falls to saturation and then holds while condensing",
      "It falls sharply from high to low pressure",
      "It rises steadily throughout the condenser",
      "It fluctuates randomly depending on seawater temperature"
    ],
    "exp": "The condenser is on the high pressure side of the system throughout; only the expansion valve produces a pressure drop. Temperature falls to saturation, then holds constant while the vapour condenses to liquid.",
    "cat": "VCRS",
    "id": "F22_013"
  },
  {
    "q": "Why does refrigerant usually leave the condenser slightly subcooled, rather than exactly at saturation?",
    "a": "To ensure only liquid, not a liquid-vapour mixture, arrives at the expansion valve",
    "opts": [
      "To ensure only liquid, not a liquid-vapour mixture, arrives at the expansion valve",
      "To reduce the load on the compressor during the next stroke",
      "To allow the refrigerant to absorb extra heat before the evaporator",
      "Subcooling has no functional purpose, it simply happens by chance"
    ],
    "exp": "A small margin of subcooling guarantees the expansion valve receives pure liquid, giving predictable throttling behaviour rather than a mixture that would flash unevenly.",
    "cat": "VCRS",
    "id": "F22_014"
  },
  {
    "q": "What thermodynamic process occurs at the expansion valve?",
    "a": "Throttling: no external work is done and no heat is exchanged with the surroundings, so enthalpy is essentially unchanged",
    "opts": [
      "Throttling: no external work is done and no heat is exchanged with the surroundings, so enthalpy is essentially unchanged",
      "Isothermal compression, where temperature stays constant while pressure rises",
      "Heat rejection at constant pressure, the same process as in the condenser",
      "Heat absorption at constant pressure, the same process as in the evaporator"
    ],
    "exp": "The expansion valve is a simple restriction, not a heat exchanger and not a work-producing device, so the process is throttling with enthalpy held essentially constant across it.",
    "cat": "VCRS",
    "id": "F22_015"
  },
  {
    "q": "Why does the refrigerant's temperature drop sharply across the expansion valve?",
    "a": "At the new, much lower pressure, part of the liquid instantly flashes to vapour, drawing its latent heat from the remaining liquid",
    "opts": [
      "At the new, much lower pressure, part of the liquid instantly flashes to vapour, drawing its latent heat from the remaining liquid",
      "The valve mechanically cools the refrigerant using a built-in heat exchanger",
      "The refrigerant's specific heat capacity changes permanently at low pressure",
      "Friction inside the narrow orifice absorbs heat from the liquid"
    ],
    "exp": "Flash evaporation of part of the liquid draws latent heat from the rest, which is what produces the sharp temperature drop, not any built-in cooling mechanism or friction effect.",
    "cat": "VCRS",
    "id": "F22_016"
  },
  {
    "q": "What happens to pressure and temperature as refrigerant passes through the evaporator?",
    "a": "Both stay essentially constant at the low side values while the refrigerant boils, absorbing heat from the cooled space",
    "opts": [
      "Both stay essentially constant at the low side values while the refrigerant boils, absorbing heat from the cooled space",
      "Pressure rises sharply while temperature stays constant",
      "Both fall steadily throughout the evaporator",
      "Temperature rises sharply while pressure stays constant"
    ],
    "exp": "Like the condenser, the evaporator is a heat exchanger, not a pressure-changing device, so pressure and temperature stay essentially constant on the low side while the refrigerant absorbs heat and boils off.",
    "cat": "VCRS",
    "id": "F22_017"
  },
  {
    "q": "Why is the vapour leaving the evaporator usually given a little superheat before it returns to the compressor?",
    "a": "To guarantee no liquid droplets reach the compressor, which is not built to compress liquid",
    "opts": [
      "To guarantee no liquid droplets reach the compressor, which is not built to compress liquid",
      "To increase the cooling effect delivered to the space",
      "To reduce the pressure the compressor has to work against",
      "To prevent the refrigerant from condensing back to liquid inside the condenser"
    ],
    "exp": "A little superheat is insurance against liquid slugging: compressors handle vapour, not liquid, and any liquid droplets reaching the cylinders can cause serious mechanical damage.",
    "cat": "VCRS",
    "id": "F22_018"
  },

  /* ═══════════ REFRIGERANTS ═══════════ */
  {
    "q": "What made CFC refrigerants such as R11 and R12 environmentally destructive, leading to the Montreal Protocol phase-out?",
    "a": "Their chlorine content, which damages the stratospheric ozone layer once released",
    "opts": [
      "Their chlorine content, which damages the stratospheric ozone layer once released",
      "Their extremely high flammability compared to later refrigerants",
      "Their very high Global Warming Potential compared to all other refrigerants",
      "Their tendency to react explosively with seawater"
    ],
    "exp": "CFCs were stable, non-flammable and effective, but their chlorine content is specifically what depletes ozone. GWP became the dominant concern only later, with the chlorine-free HFC generation.",
    "cat": "REFRIG",
    "id": "F22_019"
  },
  {
    "q": "R22 is an example of which class of refrigerant, and what is its status today?",
    "a": "An HCFC, still ozone depleting though less than a CFC, and now phased out under the Montreal Protocol timeline",
    "opts": [
      "An HCFC, still ozone depleting though less than a CFC, and now phased out under the Montreal Protocol timeline",
      "An HFC with zero ozone depletion potential and no phase-out restrictions",
      "A natural refrigerant with no environmental regulation attached",
      "A CFC that remains freely available for new installations"
    ],
    "exp": "R22 is a HCFC: it still contains chlorine and is still ozone depleting, just less so than a CFC, and it has itself been phased out, leaving older R22 systems running on a bank that cannot be freely replenished.",
    "cat": "REFRIG",
    "id": "F22_020"
  },
  {
    "q": "What is the key environmental advantage of HFC refrigerants such as R404A and R134a over the HCFCs they replaced?",
    "a": "HFCs contain no chlorine, so they have zero ozone depletion potential",
    "opts": [
      "HFCs contain no chlorine, so they have zero ozone depletion potential",
      "HFCs have a much lower Global Warming Potential than HCFCs",
      "HFCs are naturally occurring and require no synthetic manufacturing",
      "HFCs are non-flammable while HCFCs are highly flammable"
    ],
    "exp": "Removing chlorine from the molecule is what eliminates ozone depletion potential. HFCs did not solve the climate problem, they still carry a high GWP, which is the next round of regulatory pressure.",
    "cat": "REFRIG",
    "id": "F22_021"
  },
  {
    "q": "Between R404A and R134a, which is more commonly used on low and medium temperature provision plant such as freezer and chill rooms?",
    "a": "R404A",
    "opts": ["R404A", "R134a", "R22", "R290"],
    "exp": "R404A is the common choice for low and medium temperature duty such as freezer and provision chill rooms, while R134a is more typical for medium and higher temperature duties such as air conditioning.",
    "cat": "REFRIG",
    "id": "F22_022"
  },
  {
    "q": "What problem do HFC refrigerants like R404A still present, despite having zero ozone depletion potential?",
    "a": "A high Global Warming Potential, so a given mass released traps far more heat over time than the same mass of carbon dioxide",
    "opts": [
      "A high Global Warming Potential, so a given mass released traps far more heat over time than the same mass of carbon dioxide",
      "They remain significant ozone depleters, just less so than CFCs",
      "They are highly corrosive to copper piping",
      "They cannot be used in shell and tube condensers"
    ],
    "exp": "HFCs solved the ozone problem but not the climate one. Their high GWP is what is driving the next round of regulation, such as the EU F-Gas Regulation, away from high-GWP HFCs.",
    "cat": "REFRIG",
    "id": "F22_023"
  },
  {
    "q": "Which of these is a natural refrigerant mentioned as a lower-GWP alternative, requiring equipment specifically designed for a flammable charge?",
    "a": "R290 (propane)",
    "opts": ["R290 (propane)", "R448A", "R134a", "R22"],
    "exp": "R290 is propane, a natural refrigerant with very low GWP, but it is flammable, so plants using it must be built and ventilated specifically to handle that flammable charge safely. R448A and R449A are HFO/HFC blends, not naturals.",
    "cat": "REFRIG",
    "id": "F22_024"
  },
  {
    "q": "Why does the module avoid quoting one precise GWP figure for each newer refrigerant blend?",
    "a": "Published values vary by reporting standard and blend composition, so the general trend matters more than a number that might be misremembered",
    "opts": [
      "Published values vary by reporting standard and blend composition, so the general trend matters more than a number that might be misremembered",
      "GWP figures are classified information not available to ETOs",
      "These blends have no measurable GWP at all",
      "GWP only applies to CFCs and HCFCs, not to newer blends"
    ],
    "exp": "This reflects the standing rule against fabricating a precise figure you cannot verify. Knowing the correct overall trend, CFC to HCFC to HFC to lower-GWP blends or naturals, is what actually matters here.",
    "cat": "REFRIG",
    "id": "F22_025"
  },
  {
    "q": "Why is a refrigerant leak in an enclosed machinery space a hazard even if the refrigerant itself is non-toxic and non-flammable?",
    "a": "It can displace breathable air, creating an asphyxiation hazard",
    "opts": [
      "It can displace breathable air, creating an asphyxiation hazard",
      "All refrigerants are classified as toxic gases regardless of type",
      "The refrigerant reacts with air to form a corrosive acid",
      "It has no hazard at all if it is genuinely non-toxic and non-flammable"
    ],
    "exp": "Even an inert, non-flammable refrigerant can build up and push out breathable air in an enclosed space, which is why refrigeration machinery spaces have mandatory ventilation and gas detection, and entry follows enclosed space procedure.",
    "cat": "REFRIG",
    "id": "F22_026"
  },

  /* ═══════════ THERMOSTAT ═══════════ */
  {
    "q": "What is the thermostat's role in a refrigeration plant?",
    "a": "The normal running control that senses space temperature and starts/stops the plant, or opens/closes a solenoid, to hold setpoint",
    "opts": [
      "The normal running control that senses space temperature and starts/stops the plant, or opens/closes a solenoid, to hold setpoint",
      "A safety device that protects the compressor from mechanical damage",
      "A device that senses discharge pressure and trips on overpressure",
      "A device that compares oil pump discharge pressure to suction pressure"
    ],
    "exp": "The thermostat is the everyday running control, not a safety device. Protecting against abnormal pressure or oil failure is the job of the LP/HP cut-outs and the oil pressure switch.",
    "cat": "THERMO",
    "id": "F22_027"
  },
  {
    "q": "Why does a thermostat have a built-in differential between its cut-in and cut-out temperatures?",
    "a": "To stop the plant rapidly cycling on and off right at setpoint, which would be hard on the compressor and motor",
    "opts": [
      "To stop the plant rapidly cycling on and off right at setpoint, which would be hard on the compressor and motor",
      "To allow the room to reach a lower temperature than the setpoint",
      "To comply with a requirement that all control devices have a delay",
      "To prevent the LP cut-out from ever operating"
    ],
    "exp": "Without a gap between cut-in and cut-out, the plant would chatter on and off right at setpoint. The differential gives a stable band that avoids excessive short-cycling.",
    "cat": "THERMO",
    "id": "F22_028"
  },

  /* ═══════════ LP CUT-OUT ═══════════ */
  {
    "q": "What pressure does the LP cut-out sense?",
    "a": "Suction pressure, the pressure of vapour returning to the compressor from the evaporator",
    "opts": [
      "Suction pressure, the pressure of vapour returning to the compressor from the evaporator",
      "Discharge pressure, the pressure the compressor pushes out to the condenser",
      "The differential between oil pump discharge and crankcase pressure",
      "The pressure of liquid refrigerant ahead of the expansion valve"
    ],
    "exp": "The LP cut-out watches suction, low side pressure. Discharge, or high side, pressure is what the HP cut-out watches instead.",
    "cat": "LP",
    "id": "F22_029"
  },
  {
    "q": "Why does the LP cut-out trip routinely as part of completely normal operation?",
    "a": "When the thermostat is satisfied and shuts the solenoid, no more vapour returns from the evaporator, so suction pressure falls",
    "opts": [
      "When the thermostat is satisfied and shuts the solenoid, no more vapour returns from the evaporator, so suction pressure falls",
      "It trips every time the HP cut-out also trips, as a paired safety interlock",
      "It trips whenever the defrost cycle begins, regardless of pressure",
      "It is designed to trip on a fixed timer independent of pressure"
    ],
    "exp": "A satisfied thermostat shutting the solenoid is a routine daily event, and the resulting drop in suction pressure is what the LP cut-out is often actually using to do the everyday stop/start job.",
    "cat": "LP",
    "id": "F22_030"
  },
  {
    "q": "Why is running with too little suction pressure a problem, beyond it simply meaning the space is satisfied?",
    "a": "The system can be drawn into a vacuum, allowing air and moisture to be pulled in past an imperfect seal, and the compressor gets little cold vapour to cool its motor and heads",
    "opts": [
      "The system can be drawn into a vacuum, allowing air and moisture to be pulled in past an imperfect seal, and the compressor gets little cold vapour to cool its motor and heads",
      "Low suction pressure causes the discharge pressure to rise dangerously",
      "Low suction pressure has no effect on the compressor at all",
      "Low suction pressure directly damages the condenser tubes"
    ],
    "exp": "Below-atmospheric suction pressure can draw contamination in through any imperfect seal, and starves the compressor of the cool returning vapour it relies on for cooling, which is why sustained abnormal low suction is a genuine fault, not just routine cycling.",
    "cat": "LP",
    "id": "F22_031"
  },

  /* ═══════════ HP CUT-OUT ═══════════ */
  {
    "q": "What pressure does the HP cut-out sense?",
    "a": "Discharge pressure, the pressure the compressor is pushing out to the condenser",
    "opts": [
      "Discharge pressure, the pressure the compressor is pushing out to the condenser",
      "Suction pressure, the pressure of vapour returning from the evaporator",
      "The oil pump discharge pressure only",
      "Ambient air pressure in the machinery space"
    ],
    "exp": "The HP cut-out watches the high side, discharge pressure. It is the counterpart of the LP cut-out, which watches the low side, suction pressure.",
    "cat": "HP",
    "id": "F22_032"
  },
  {
    "q": "Which of these is a plausible cause of a HP cut-out trip?",
    "a": "A fouled or scaled condenser, or a failed seawater cooling pump",
    "opts": [
      "A fouled or scaled condenser, or a failed seawater cooling pump",
      "The thermostat being satisfied and shutting the solenoid",
      "The compressor simply cycling off at the end of a normal run",
      "A slightly low oil level in the crankcase"
    ],
    "exp": "A high discharge pressure trip points to poor heat rejection: a fouled condenser, lost cooling water, trapped air, or overcharge. A satisfied thermostat is what routinely trips the LP cut-out, not the HP cut-out.",
    "cat": "HP",
    "id": "F22_033"
  },
  {
    "q": "Left unchecked, what does sustained high discharge pressure risk?",
    "a": "Overloading the compressor mechanically (valves, bearings, crankshaft) and a burst fitting on the high side",
    "opts": [
      "Overloading the compressor mechanically (valves, bearings, crankshaft) and a burst fitting on the high side",
      "The evaporator icing over completely within minutes",
      "The thermostat differential collapsing to zero",
      "Immediate loss of all refrigerant charge through the LP cut-out"
    ],
    "exp": "High discharge pressure puts extra mechanical load on every high-side component and raises the risk of a fitting failure on the high pressure side, which is exactly why the HP cut-out exists.",
    "cat": "HP",
    "id": "F22_034"
  },

  /* ═══════════ LP vs HP: THE PAIRING QUESTION ═══════════ */
  {
    "q": "Why is the LP cut-out normally self-resetting, while the HP cut-out is deliberately manual reset?",
    "a": "LP trips are often routine (thermostat satisfied), so manual reset every cycle would be absurd; HP trips always mean a real problem that will not fix itself, so it forces investigation",
    "opts": [
      "LP trips are often routine (thermostat satisfied), so manual reset every cycle would be absurd; HP trips always mean a real problem that will not fix itself, so it forces investigation",
      "The LP cut-out is a cheaper device that cannot support a manual reset mechanism",
      "Manual reset is only fitted where the switch also controls the defrost cycle",
      "Both are actually manual reset, there is no functional difference between them"
    ],
    "exp": "Forcing a manual reset on every routine LP trip would train crew to defeat the safety function out of irritation. A HP trip, by contrast, always indicates a genuine problem such as fouling, lost cooling water or overcharge, so it stays tripped until someone investigates.",
    "cat": "LPHP",
    "id": "F22_035"
  },
  {
    "q": "The design logic behind the HP cut-out being manual reset is the same logic used for which other shipboard protective device?",
    "a": "No-volt release, as covered in F12",
    "opts": [
      "No-volt release, as covered in F12",
      "The main circuit breaker's instantaneous trip",
      "An earth fault relay with automatic reset",
      "A simple fuse, which cannot be reset at all"
    ],
    "exp": "The notes draw this parallel directly: forcing manual intervention so a fault gets looked at, rather than the machine quietly cycling back and repeating the trip, is the same reasoning behind no-volt release covered in F12.",
    "cat": "LPHP",
    "id": "F22_036"
  },

  /* ═══════════ OIL PRESSURE / OIL DIFFERENTIAL SWITCH ═══════════ */
  {
    "q": "What does the oil pressure / oil differential switch protect?",
    "a": "The compressor's own bearings and crankshaft",
    "opts": [
      "The compressor's own bearings and crankshaft",
      "The condenser tubes from scaling",
      "The evaporator coil from frost damage",
      "The expansion valve from hunting"
    ],
    "exp": "This switch exists purely to protect the compressor's internal moving parts by ensuring adequate lubrication, unlike the LP/HP cut-outs, which protect against abnormal system pressures.",
    "cat": "OIL",
    "id": "F22_037"
  },
  {
    "q": "Why does the oil pressure switch compare a differential (oil pump discharge vs crankcase suction pressure), rather than absolute oil pressure alone?",
    "a": "Because the oil pump draws suction from the same crankcase that sits at suction (low side) pressure, so it is the differential that actually forces oil through the bearing clearances",
    "opts": [
      "Because the oil pump draws suction from the same crankcase that sits at suction (low side) pressure, so it is the differential that actually forces oil through the bearing clearances",
      "Because absolute oil pressure cannot be measured accurately on a compressor",
      "Because the differential reading is simpler to wire into the control panel",
      "Because manufacturers prefer differential switches purely by convention, with no technical reason"
    ],
    "exp": "Since crankcase pressure itself varies with suction pressure, an absolute oil pressure reading alone would be misleading. What actually matters for lubrication is the difference between oil pump discharge and crankcase pressure.",
    "cat": "OIL",
    "id": "F22_038"
  },
  {
    "q": "Is the oil pressure switch normally self-resetting or manual reset?",
    "a": "Manual reset",
    "opts": ["Manual reset", "Self-resetting, like the LP cut-out", "It has no reset, it must be replaced after each trip", "It resets automatically only during defrost"],
    "exp": "Like the HP cut-out, the oil pressure switch trips on manual reset, because a failed oil pump, blocked filter or low oil level is a genuine fault that needs to be found and fixed, not something that clears itself.",
    "cat": "OIL",
    "id": "F22_039"
  },
  {
    "q": "Which of the following would cause the oil differential switch to trip?",
    "a": "A blocked oil filter, a failed oil pump, or a low oil level in the crankcase",
    "opts": [
      "A blocked oil filter, a failed oil pump, or a low oil level in the crankcase",
      "The thermostat reaching its setpoint and shutting the solenoid",
      "The condenser cooling water flow increasing above normal",
      "The defrost cycle running slightly longer than usual"
    ],
    "exp": "Anything that lets the compressor's bearings run without adequate oil differential, a blocked filter, a failed pump, or low oil level, is exactly what this switch is guarding against.",
    "cat": "OIL",
    "id": "F22_040"
  },

  /* ═══════════ SOLENOID VALVE ═══════════ */
  {
    "q": "Where is the solenoid valve fitted in a refrigeration plant?",
    "a": "In the liquid line just ahead of the expansion valve, for each evaporator",
    "opts": [
      "In the liquid line just ahead of the expansion valve, for each evaporator",
      "In the suction line just before the compressor",
      "In the discharge line just after the compressor",
      "Inside the condenser itself"
    ],
    "exp": "The solenoid sits in the liquid line just ahead of the expansion valve, one per evaporator on a multi-room plant, controlling whether refrigerant can reach that particular room's evaporator.",
    "cat": "SOL",
    "id": "F22_041"
  },
  {
    "q": "What energises or de-energises the solenoid valve's coil to open or shut refrigerant flow?",
    "a": "That room's own thermostat",
    "opts": [
      "That room's own thermostat",
      "The LP cut-out only",
      "The defrost timer only",
      "The main compressor contactor"
    ],
    "exp": "Each room's thermostat directly controls its own solenoid, opening it when that room calls for cooling and shutting it once satisfied.",
    "cat": "SOL",
    "id": "F22_042"
  },
  {
    "q": "Why does fitting one solenoid valve per evaporator matter on a multi-room plant?",
    "a": "It lets one compressor serve several spaces independently, each room's thermostat and solenoid deciding whether that room is currently calling for cooling",
    "opts": [
      "It lets one compressor serve several spaces independently, each room's thermostat and solenoid deciding whether that room is currently calling for cooling",
      "It increases the total refrigerant charge the plant can hold",
      "It removes the need for an LP cut-out on the plant",
      "It allows the plant to run without a condenser"
    ],
    "exp": "Per-room solenoids are what make independent room control possible from a single shared compressor, while the compressor itself still runs on a wider LP cut-out or pump-down control governed by overall suction pressure.",
    "cat": "SOL",
    "id": "F22_043"
  },

  /* ═══════════ DEFROST CONTROL ═══════════ */
  {
    "q": "Why does an evaporator running below 0°C need periodic defrosting?",
    "a": "Moisture in the air freezes onto its surface, and the resulting frost insulates the coil and progressively blocks airflow",
    "opts": [
      "Moisture in the air freezes onto its surface, and the resulting frost insulates the coil and progressively blocks airflow",
      "The refrigerant itself gradually freezes solid inside the coil",
      "Frost improves heat transfer, but only up to a fixed limit that must then be reset",
      "The compressor cannot restart if any frost is present anywhere on the plant"
    ],
    "exp": "Frost is an insulating layer that also restricts airflow, steadily reducing the evaporator's ability to absorb heat even though the rest of the plant runs normally, which is why it must be periodically melted off.",
    "cat": "DEFROST",
    "id": "F22_044"
  },
  {
    "q": "Which of the following is a method of defrosting mentioned in the notes?",
    "a": "Hot gas defrost, briefly reversing hot gas from compressor discharge through the evaporator",
    "opts": [
      "Hot gas defrost, briefly reversing hot gas from compressor discharge through the evaporator",
      "Running the LP cut-out in reverse to heat the coil",
      "Increasing suction pressure until the frost sublimates",
      "Injecting liquid refrigerant directly onto the frosted coil"
    ],
    "exp": "The notes describe three defrost methods: an electric heater built into the coil, hot gas defrost (reversing discharge gas through the evaporator), and off-cycle defrost using room air, more common near 0°C than in a hard freezer.",
    "cat": "DEFROST",
    "id": "F22_045"
  },
  {
    "q": "How does the plant know when a defrost cycle should end and normal cooling resume?",
    "a": "A termination sensor confirms the coil is clear, after the cycle runs for a set duration",
    "opts": [
      "A termination sensor confirms the coil is clear, after the cycle runs for a set duration",
      "The HP cut-out trips to signal the end of defrost",
      "The compressor motor overload relay resets automatically",
      "The condenser cooling water is shut off to end the cycle"
    ],
    "exp": "A timer or demand-based sensor initiates defrost and runs it for a set duration, and a termination sensor confirms the coil is actually clear before the plant returns to normal cooling.",
    "cat": "DEFROST",
    "id": "F22_046"
  },

  /* ═══════════ COMPRESSOR MOTOR STARTING & PROTECTION ═══════════ */
  {
    "q": "What type of motor drives a shipboard refrigeration compressor?",
    "a": "A three phase induction motor, the same as any other shipboard motor",
    "opts": [
      "A three phase induction motor, the same as any other shipboard motor",
      "A single phase universal motor unique to refrigeration plant",
      "A DC series motor fed from the emergency battery",
      "A synchronous motor requiring a separate excitation supply"
    ],
    "exp": "The notes are explicit that everything covered for starting and protecting any other shipboard motor (F11 and F12) applies here without modification, because it is the same three phase induction motor doing the same job electrically.",
    "cat": "MOTOR",
    "id": "F22_047"
  },
  {
    "q": "Why can a reciprocating compressor need extra starting torque immediately after it has just stopped?",
    "a": "Discharge pressure is still trapped above its valves, so starting back into that residual pressure demands more torque than starting unloaded",
    "opts": [
      "Discharge pressure is still trapped above its valves, so starting back into that residual pressure demands more torque than starting unloaded",
      "The motor windings are still hot from the previous run, raising their resistance",
      "The refrigerant charge increases immediately after stopping",
      "The oil pump has not yet built up pressure at the moment of restart"
    ],
    "exp": "This is the F11 consideration of whether the load needs torque at rest, applied specifically to a compressor: residual trapped discharge pressure means restarting immediately is a heavier ask of the motor than an unloaded start.",
    "cat": "MOTOR",
    "id": "F22_048"
  },
  {
    "q": "What device or feature addresses the problem of a compressor restarting against residual discharge pressure?",
    "a": "A short pump-down or anti-recycle delay after a stop, letting the pressure differential equalise before the next start",
    "opts": [
      "A short pump-down or anti-recycle delay after a stop, letting the pressure differential equalise before the next start",
      "Fitting a larger LP cut-out with a wider differential",
      "Running the compressor permanently rather than allowing any stop",
      "Increasing the oil pressure switch's trip setting"
    ],
    "exp": "A pump-down or anti-recycle delay gives the trapped discharge pressure time to equalise across the system before the next start is permitted, avoiding an excessive starting torque demand.",
    "cat": "MOTOR",
    "id": "F22_049"
  },
  {
    "q": "Why does stall protection matter especially for a refrigeration compressor, beyond the general case covered in F12?",
    "a": "A compressor that has ingested liquid refrigerant can hydraulically lock, since liquid does not compress the way vapour does, showing up as sustained high current with no acceleration",
    "opts": [
      "A compressor that has ingested liquid refrigerant can hydraulically lock, since liquid does not compress the way vapour does, showing up as sustained high current with no acceleration",
      "Refrigeration compressors never experience a genuine locked rotor condition",
      "The overload relay used on a compressor works on a completely different principle to other motors",
      "Refrigeration compressors are exempt from requiring overload protection at all"
    ],
    "exp": "Liquid slugging can hydraulically lock a compressor, which the inverse-time overload relay from F12 catches the same way as any locked rotor: sustained high current with no acceleration. Its trip class simply has to be matched to this machine's own starting behaviour.",
    "cat": "MOTOR",
    "id": "F22_050"
  },

  /* ═══════════ THE OPEN FRIDGE DOOR QUESTION ═══════════ */
  {
    "q": "If you leave a fridge or freezer room door open, what is the net effect on the surrounding space?",
    "a": "It warms the surrounding space on net; it does not cool it",
    "opts": [
      "It warms the surrounding space on net; it does not cool it",
      "It cools the surrounding space, since the evaporator absorbs more heat",
      "It has no measurable effect either way",
      "It cools the space initially, then has no further effect once equilibrium is reached"
    ],
    "exp": "The physically correct, examiner-expected answer is that the room warms on net, because incoming warm air defeats the cooling faster than the evaporator can usefully remove it, while the compressor does considerably more work.",
    "cat": "DOOR",
    "id": "F22_051"
  },
  {
    "q": "In the energy balance Q(rejected) = Q(absorbed) + W(compressor), what does W(compressor) represent?",
    "a": "The mechanical work the compressor does on the refrigerant, which is added to the refrigerant during compression",
    "opts": [
      "The mechanical work the compressor does on the refrigerant, which is added to the refrigerant during compression",
      "The heat absorbed at the evaporator from the cooled space",
      "The heat rejected at the condenser to seawater or air",
      "The frictional heat lost in the pipework between components"
    ],
    "exp": "W(compressor) is the electrical energy delivered to the motor that becomes mechanical work compressing the vapour. That energy does not vanish, it is added to the refrigerant, which is why the vapour leaves the compressor hotter.",
    "cat": "DOOR",
    "id": "F22_052"
  },
  {
    "q": "The equation Q(rejected) = Q(absorbed) + W(compressor) is derived by applying which principle to the refrigerant going once around the closed loop?",
    "a": "The first law of thermodynamics: energy is conserved, so whatever enters must equal whatever leaves",
    "opts": [
      "The first law of thermodynamics: energy is conserved, so whatever enters must equal whatever leaves",
      "Newton's third law applied to the compressor piston",
      "Boyle's law relating pressure and volume at constant temperature",
      "The definition of power as work done per unit time"
    ],
    "exp": "Because the refrigerant returns to the same state after one full cycle, whatever energy entered (heat absorbed plus compressor work) must equal whatever left (heat rejected), a direct application of energy conservation.",
    "cat": "DOOR",
    "id": "F22_053"
  },
  {
    "q": "Why is Q(rejected) at the condenser always greater than Q(absorbed) at the evaporator, for any vapour compression machine?",
    "a": "Because the compressor's own work, W(compressor), is added to the refrigerant on top of the heat it picked up at the evaporator",
    "opts": [
      "Because the compressor's own work, W(compressor), is added to the refrigerant on top of the heat it picked up at the evaporator",
      "Because the condenser is always physically larger than the evaporator",
      "Because some refrigerant is lost as leakage between the evaporator and condenser",
      "Because the expansion valve adds extra heat to the refrigerant"
    ],
    "exp": "The extra term in the energy balance is exactly the compressor's work. The expansion valve does not add heat, it is a throttling process with enthalpy essentially unchanged.",
    "cat": "DOOR",
    "id": "F22_054"
  },
  {
    "q": "On a shipboard provision plant, the condenser and compressor are normally located outside the cooled room entirely. Given that Q(rejected) > Q(absorbed), why does the room still net cool under normal, closed-door operation?",
    "a": "The room only experiences the evaporator side absorbing heat; the larger heat load rejected at the condenser leaves the system entirely, usually to seawater",
    "opts": [
      "The room only experiences the evaporator side absorbing heat; the larger heat load rejected at the condenser leaves the system entirely, usually to seawater",
      "Because W(compressor) is negligibly small compared to Q(absorbed) in practice",
      "Because the condenser secretly rejects heat back into the room through the ductwork",
      "Because Q(rejected) is actually smaller than Q(absorbed) once losses are included"
    ],
    "exp": "With the condenser and compressor outside the room, the room only ever sees the evaporator's side of the energy balance. The larger rejected heat, condenser load plus compressor work, is dumped elsewhere entirely, usually straight overboard via the seawater cooling.",
    "cat": "DOOR",
    "id": "F22_055"
  },
  {
    "q": "With the door held open, why does the compressor end up doing MORE total work, not less, compared to normal closed-door cycling?",
    "a": "The thermostat sees continuous demand, since warm air keeps flooding in and replacing cold air, so the compressor runs continuously instead of cycling on and off",
    "opts": [
      "The thermostat sees continuous demand, since warm air keeps flooding in and replacing cold air, so the compressor runs continuously instead of cycling on and off",
      "The open door directly increases the refrigerant charge in the system",
      "The LP cut-out disables itself whenever a door is left open",
      "The evaporator superheat setting automatically increases when a door opens"
    ],
    "exp": "Continuous warm air infiltration means the space never reaches setpoint, so the thermostat keeps calling for cooling and the compressor runs flat out rather than cycling, doing considerably more total work than usual.",
    "cat": "DOOR",
    "id": "F22_056"
  },
  {
    "q": "A cadet argues: 'Leaving the door open lets the evaporator absorb even more heat, since there is more warm air available, so it should cool the room faster.' What is the flaw in this reasoning?",
    "a": "The extra heat absorbed is not retained as cooling, because warm air keeps flooding back in faster than the evaporator can usefully chill it, while the compressor also incurs extra work doing it",
    "opts": [
      "The extra heat absorbed is not retained as cooling, because warm air keeps flooding back in faster than the evaporator can usefully chill it, while the compressor also incurs extra work doing it",
      "The reasoning is actually correct: more available warm air always means faster net cooling",
      "The evaporator cannot absorb any additional heat regardless of door position",
      "The flaw is that Q(absorbed) has nothing to do with the amount of warm air present"
    ],
    "exp": "More heat crossing the evaporator does not mean more net cooling retained in the room: the room's own air keeps leaking out and being replaced faster than the evaporator can usefully chill the incoming air, while the compressor runs continuously and does more work for less net benefit.",
    "cat": "DOOR",
    "id": "F22_057"
  },
  {
    "q": "What is the general principle for when a vapour compression machine CAN produce a net cooling effect on a given space?",
    "a": "Only if its condenser rejects heat somewhere outside that space, such as seawater, outside air, or a separately ventilated machinery space",
    "opts": [
      "Only if its condenser rejects heat somewhere outside that space, such as seawater, outside air, or a separately ventilated machinery space",
      "Only if the compressor's work input is reduced to zero",
      "Only if the expansion valve is removed from the circuit entirely",
      "Any vapour compression machine can always net-cool the space it sits in, regardless of layout"
    ],
    "exp": "The moment a condenser's rejected heat and the space being cooled share the same air, the machine cannot net-cool that combined space, because by the energy balance it always puts more heat in at the condenser than it removes at the evaporator. This is the textbook reason 'cooling a kitchen by leaving the fridge door open' is a physics fallacy.",
    "cat": "DOOR",
    "id": "F22_058"
  }

]);

window.loadQuizzes("T13_BridgeEquip1", [
  {
    "q": "Standard operating frequencies for X-band and S-band RADARs?",
    "a": "X-band: 9 GHz (3 cm wavelength), S-band: 3 GHz (10 cm wavelength)",
    "opts": [
      "X-band: 3 GHz (10 cm), S-band: 9 GHz (3 cm)",
      "X-band: 9 GHz (3 cm wavelength), S-band: 3 GHz (10 cm wavelength)",
      "X-band: 518 kHz, S-band: 406 MHz",
      "X-band: 406 MHz, S-band: 121.5 MHz"
    ],
    "exp": "X-band: 9 GHz (3 cm) = high resolution, good target discrimination, poor rain penetration. S-band: 3 GHz (10 cm) = lower resolution but better rain/fog penetration. Larger S-band antenna needed for same beam width (antenna size proportional to wavelength).",
    "cat": "RADAR",
    "id": "T13B_001"
  },
  {
    "q": "Function of the magnetron in a marine RADAR?",
    "a": "High-power vacuum tube oscillator - generates microwave energy pulses",
    "opts": [
      "Protects sensitive receiver from transmit pulses (that is the T/R cell)",
      "Converts echo signals to intermediate frequencies",
      "Rotates scanner antenna using synchronous AC motor",
      "High-power vacuum tube oscillator - generates microwave energy pulses"
    ],
    "exp": "The magnetron is the transmitter heart. It generates short high-power microwave pulses (typically 10-50 kW peak, 0.05-1 microsecond duration) at 9 or 3 GHz by interacting electrons with a magnetic field. Must be replaced as it ages and output drops.",
    "cat": "RADAR",
    "id": "T13B_002"
  },
  {
    "q": "Function of the T/R cell (duplexer) in a RADAR system?",
    "a": "Electronic switch - disconnects receiver during high-power transmission to prevent damage",
    "opts": [
      "Amplifies returning echo signals",
      "Generates high-voltage DC for the magnetron",
      "Provides heading data from gyrocompass for stabilisation",
      "Electronic switch - disconnects receiver during high-power transmission to prevent damage"
    ],
    "exp": "T/R (Transmit/Receive) cell automatically isolates the sensitive receiver during each magnetron pulse (preventing destruction) then reconnects it to listen for returning echoes. Without it, the receiver would be destroyed by the transmitter's own signal.",
    "cat": "RADAR",
    "id": "T13B_003"
  },
  {
    "q": "What causes the RADAR blind spot (minimum range)?",
    "a": "Magnetron is still transmitting when the echo from a close target returns - receiver is blocked by T/R cell",
    "opts": [
      "Scanner rotates too fast to catch close echoes",
      "S-band wavelength too long to resolve close targets",
      "Sea clutter filter deletes targets near ship centre",
      "Magnetron is still transmitting when the echo from a close target returns - receiver is blocked by T/R cell"
    ],
    "exp": "If a target is so close that its echo returns while the magnetron is still transmitting, the T/R cell is still blocking the receiver - echo cannot be detected. Typical blind zone: 15-50m radius. Shorter pulse = smaller blind zone.",
    "cat": "RADAR",
    "id": "T13B_004"
  },
  {
    "q": "SOLAS RADAR carriage for a 12,000 GT cargo ship?",
    "a": "Two independent RADARs - second must be S-band or dual-band",
    "opts": [
      "One X-band RADAR with ARPA + one backup magnetic compass",
      "Two independent RADARs - second must be S-band or dual-band",
      "Two X-band RADARs sharing a single display",
      "Single S-band RADAR with AIS overlay"
    ],
    "exp": "SOLAS V/19: >10,000 GT = two independent RADAR systems. Second must be S-band (3 GHz) or dual-band. This ensures radar function in both good visibility (X-band) and heavy rain/fog (S-band). >500 GT = two independent radars. >300 GT = one radar + ARPA.",
    "cat": "RADAR",
    "id": "T13B_005"
  },
  {
    "q": "Which VHF channel is exclusively for DSC distress alerts?",
    "a": "Channel 70 (156.525 MHz)",
    "opts": [
      "Channel 16 (156.800 MHz)",
      "Channel 70 (156.525 MHz)",
      "Channel 06 (156.300 MHz)",
      "Channel 13 (156.650 MHz)"
    ],
    "exp": "Ch 70 = DSC only - digital data transmission for distress alerts and routine DSC calls. Ch 16 = voice distress watch and bridge-to-bridge voice communication. Ch 06 = ship-to-ship safety (intership). Ch 13 = bridge-to-bridge navigation.",
    "cat": "GMDSS",
    "id": "T13B_006"
  },
  {
    "q": "What change to EPIRB requirements was made in the 2024 GMDSS modernisation?",
    "a": "VHF-EPIRBs no longer accepted in any sea area - all ships must carry 406 MHz satellite EPIRB",
    "opts": [
      "All ships must now carry two EPIRBs",
      "EPIRBs must transmit on 9 GHz to work with SART radar",
      "EPIRBs no longer require HRUs if mounted on bridge",
      "VHF-EPIRBs no longer accepted in any sea area - all ships must carry 406 MHz satellite EPIRB"
    ],
    "exp": "As of January 2024, VHF-EPIRBs (which depended on local VHF coverage) are no longer accepted for GMDSS compliance anywhere. All vessels must carry a 406 MHz COSPAS-SARSAT satellite EPIRB with HRU float-free mounting.",
    "cat": "GMDSS",
    "id": "T13B_007"
  },
  {
    "q": "Two frequencies used by a SOLAS-compliant EPIRB?",
    "a": "406 MHz (global satellite alerting) and 121.5 MHz (local aircraft homing)",
    "opts": [
      "518 kHz and 490 kHz",
      "406 MHz (global satellite alerting) and 121.5 MHz (local aircraft homing)",
      "9 GHz and 156.525 MHz",
      "161.975 MHz and 3 GHz"
    ],
    "exp": "EPIRB: 406 MHz transmits the coded distress signal + GPS position to COSPAS-SARSAT satellites (global coverage). 121.5 MHz is an analogue homing signal for SAR aircraft to precisely locate the EPIRB in final stages of search.",
    "cat": "EPIRB",
    "id": "T13B_008"
  },
  {
    "q": "At what depth does the HRU automatically deploy a float-free EPIRB?",
    "a": "1 to 4 metres",
    "opts": [
      "5 to 10 metres",
      "1 to 4 metres",
      "10 to 15 metres",
      "Immediately on water contact"
    ],
    "exp": "HRU (Hydrostatic Release Unit) contains a pressure-activated mechanism that cuts the securing strap when submerged to 1-4 metres depth. The positively buoyant EPIRB then floats to the surface and auto-activates. HRU must be replaced every 2 years.",
    "cat": "EPIRB",
    "id": "T13B_009"
  },
  {
    "q": "Minimum battery life for an activated EPIRB?",
    "a": "48 hours continuous transmission",
    "opts": [
      "48 hours continuous transmission",
      "96 hours standby + 8 hours transmitting",
      "6 hours without ship power",
      "12 hours at minimum signal strength"
    ],
    "exp": "SOLAS: EPIRB battery must support minimum 48 hours continuous operation after activation. Allows 2 days for SAR response. Compare: SART battery = 96 hours standby + 8 hours transmitting. Both are tested and replaced per manufacturer schedule.",
    "cat": "EPIRB",
    "id": "T13B_010"
  },
  {
    "q": "On which frequency does a SART operate?",
    "a": "9 GHz (X-band RADAR frequency)",
    "opts": [
      "9 GHz (X-band RADAR frequency)",
      "3 GHz (S-band RADAR)",
      "406 MHz (EPIRB frequency)",
      "156.525 MHz (VHF Ch 70)"
    ],
    "exp": "SART operates at 9 GHz = exactly the X-band radar frequency. When interrogated by a ship's X-band radar pulse, it responds with a sweep of 12 return pulses. Does NOT respond to S-band (3 GHz) radar. New AIS-SARTs also transmit AIS position data.",
    "cat": "SART",
    "id": "T13B_011"
  },
  {
    "q": "How does an activated SART appear on a rescuing ship's RADAR?",
    "a": "12 dots in a radial line extending outward from the SART's position",
    "opts": [
      "Flashing red cross on ECDIS chart",
      "Solid continuous circle on radar screen",
      "AIS target with MMSI and coordinates",
      "12 dots in a radial line extending outward from the SART's position"
    ],
    "exp": "SART transmits 12 pulses in response to each radar sweep. These 12 returns appear as 12 dots in a line pointing from the SART position outward on the radar PPI. The innermost dot = SART position. Highly distinctive pattern prevents confusion with normal targets.",
    "cat": "SART",
    "id": "T13B_012"
  },
  {
    "q": "Approximate range of a SART - ship radar vs aircraft?",
    "a": "~5 nm (ship radar at ~15m height) and ~10 nm (aircraft at ~3000 ft)",
    "opts": [
      "15 nm ship, 30 nm aircraft",
      "~5 nm (ship radar at ~15m height) and ~10 nm (aircraft at ~3000 ft)",
      "1 nm ship, 5 nm aircraft",
      "Global range via satellite for both"
    ],
    "exp": "SART range depends on line-of-sight geometry. Ship radar antenna at ~15m height sees SART (at sea level) to ~5 nm. Aircraft at 3000 ft sees to ~10 nm. Raising the SART above water level (on a mast or held up) increases range. Always elevate SART in survival craft.",
    "cat": "SART",
    "id": "T13B_013"
  },
  {
    "q": "SOLAS battery requirements for a SART?",
    "a": "96 hours standby + 8 hours continuous transmission when activated",
    "opts": [
      "48 hours continuous transmission",
      "96 hours standby + 8 hours continuous transmission when activated",
      "6 hours continuous transmission, no standby",
      "12 hours standby + 48 hours transmission"
    ],
    "exp": "SART: 96 hours in standby mode (listening for radar pulses, very low power) followed by 8 hours of active transmission (responding to every radar pulse). This allows SAR to locate survivors even if ship sinks immediately and search takes several days.",
    "cat": "SART",
    "id": "T13B_014"
  },
  {
    "q": "NAVTEX frequencies for Maritime Safety Information broadcasts?",
    "a": "518 kHz (international English) and 490 kHz (national language)",
    "opts": [
      "2182 kHz and 2187.5 kHz",
      "156.525 MHz and 161.975 MHz",
      "518 kHz (international English) and 490 kHz (national language)",
      "406 MHz and 121.5 MHz"
    ],
    "exp": "NAVTEX operates in the MF band. 518 kHz = internationally standardised English broadcasts covering all ships. 490 kHz = national language broadcasts (some countries also use 4209.5 kHz). Broadcasts: navigational warnings, weather forecasts, ice reports, SAR information.",
    "cat": "NAVTEX",
    "id": "T13B_015"
  },
  {
    "q": "GMDSS reserve battery must supply equipment for how long without ship power (no UPS)?",
    "a": "6 hours (international voyage without UPS)",
    "opts": [
      "6 hours (international voyage without UPS)",
      "1 hour",
      "18 hours",
      "48 hours"
    ],
    "exp": "SOLAS Ch IV Reg 13: 6 hours required if no UPS auto-switch is fitted. 1 hour if a UPS automatically switches to battery on power failure. Battery is DEDICATED - no other use. Annual load test. Replace when capacity <80% rated.",
    "cat": "GMDSS",
    "id": "T13B_016"
  },
  {
    "q": "Which GMDSS equipment is compulsory for Sea Area A3 but not for A1 and A2?",
    "a": "RMSS terminal (e.g. Inmarsat-C or Iridium satellite comms)",
    "opts": [
      "VHF with DSC on Channel 70",
      "NAVTEX receiver 518 kHz",
      "406 MHz float-free EPIRB",
      "RMSS terminal (e.g. Inmarsat-C or Iridium satellite comms)"
    ],
    "exp": "Sea Areas: A1 = within VHF DSC range. A2 = within MF DSC range. A3 = within RMSS (satellite) coverage but outside polar areas. A3 adds requirement for satellite communications (Inmarsat-C, Iridium). VHF DSC, NAVTEX, and EPIRB are required in all areas.",
    "cat": "GMDSS",
    "id": "T13B_017"
  },
  {
    "q": "2024 GMDSS update - what happened to NBDP (Narrow Band Direct Printing / Telex)?",
    "a": "No longer mandatory in any sea area - removed from GMDSS carriage requirements",
    "opts": [
      "Now strictly mandatory for Sea Area A1",
      "Replaced Inmarsat-C for all distress communications",
      "Must now operate on 518 kHz NAVTEX frequency",
      "No longer mandatory in any sea area - removed from GMDSS carriage requirements"
    ],
    "exp": "IMO removed NBDP (Telex-over-Radio) as mandatory GMDSS equipment effective January 2024. NBDP was rarely used in actual distress scenarios - superseded by Inmarsat satellite systems, DSC, and modern digital communications. Vessels may retain it but it is no longer required.",
    "cat": "GMDSS",
    "id": "T13B_018"
  },
  {
    "q": "How is the GMDSS battery annual load test performed?",
    "a": "Isolate charger - connect full GMDSS load - verify voltage stays above minimum for 6-hour (or 1-hour with UPS) duration",
    "opts": [
      "Short circuit through 250 ohm resistor and measure current drop",
      "Measure specific gravity of sealed battery with hydrometer while charger runs",
      "Activate EPIRB and SART simultaneously to verify battery holds 24V",
      "Isolate charger - connect full GMDSS load - verify voltage stays above minimum for 6-hour (or 1-hour with UPS) duration"
    ],
    "exp": "Correct procedure: Disconnect charger. Power all GMDSS equipment from battery only (VHF, MF/HF, NAVTEX, Inmarsat, DSC). Discharge for required duration. Terminal voltage must remain >90% of nominal (e.g. >21.6V for 24V system) throughout. Log start/end voltages.",
    "cat": "GMDSS",
    "id": "T13B_019"
  },
  {
    "q": "Primary function and reception range of NAVTEX?",
    "a": "Automated direct-printing receiver for Maritime Safety Information (MSI) - range ~200-400 nm from coast station",
    "opts": [
      "Satellite-based global distress alerting system - unlimited range",
      "Two-way VHF communication device - 30 nm range",
      "Underwater acoustic transponder detecting submerged hazards - 5 nm",
      "Automated direct-printing receiver for Maritime Safety Information (MSI) - range ~200-400 nm from coast station"
    ],
    "exp": "NAVTEX is a one-way automated broadcast system on MF. Ships receive and print navigational warnings, weather forecasts, ice reports, and SAR information automatically without crew action. Range ~200-400 nm depending on atmospheric conditions and antenna height.",
    "cat": "NAVTEX",
    "id": "T13B_020"
  },
  {
    "q": "SOLAS ARPA carriage requirements by ship size?",
    "a": ">300 GT: 1 RADAR + ARPA; >500 GT: 2 independent RADARs; >10,000 GT: 2 RADARs, second must be S-band",
    "opts": [
      ">100 GT: 1 RADAR; >1000 GT: ARPA; >5000 GT: dual band",
      "Any ship with AIS is exempt from ARPA requirement",
      "All vessels require 2 RADARs regardless of tonnage",
      ">300 GT: 1 RADAR + ARPA; >500 GT: 2 independent RADARs; >10,000 GT: 2 RADARs, second must be S-band"
    ],
    "exp": "SOLAS V/19: >300 GT on international voyages = 1 RADAR + ARPA. >500 GT = 2 independent RADAR systems. >10,000 GT = second RADAR must be S-band or dual-band. These are minimum requirements - class and flag state may require more.",
    "cat": "RADAR",
    "id": "T13B_021"
  },
  {
    "q": "What is the primary international frequency used for broadcasting NAVTEX messages in English?",
    "a": "518 kHz",
    "opts": [
      "2187.5 kHz",
      "490 kHz",
      "4209.5 kHz",
      "518 kHz"
    ],
    "exp": "518 kHz is the global standard frequency for NAVTEX transmissions in the English language, utilizing the Medium Frequency (MF) band.",
    "cat": "NAVTEX",
    "id": "T13B_022"
  },
  {
    "q": "What frequency is typically used for NAVTEX broadcasts in a country's local/national language?",
    "a": "490 kHz",
    "opts": [
      "490 kHz",
      "156.8 MHz",
      "518 kHz",
      "4209.5 kHz"
    ],
    "exp": "490 kHz is designated for local language broadcasts to domestic shipping, avoiding interference with the international 518 kHz English broadcasts.",
    "cat": "NAVTEX",
    "id": "T13B_023"
  },
  {
    "q": "In tropical regions where Medium Frequency (MF) signals suffer from severe atmospheric noise, what alternative frequency is allocated for NAVTEX?",
    "a": "4209.5 kHz",
    "opts": [
      "4209.5 kHz",
      "8414.5 kHz",
      "2182 kHz",
      "490 kHz"
    ],
    "exp": "4209.5 kHz (a High Frequency band) is used in tropical areas because MF signals (like 518 kHz) are highly susceptible to static and atmospheric static from thunderstorms.",
    "cat": "NAVTEX",
    "id": "T13B_024"
  },
  {
    "q": "Every NAVTEX message begins with a specific four-character code. What is it?",
    "a": "ZCZC",
    "opts": [
      "URGE",
      "MAYD",
      "NNNN",
      "ZCZC"
    ],
    "exp": "ZCZC is the start-of-message phasing signal that wakes up the receiver and prepares it to decode the incoming text.",
    "cat": "NAVTEX",
    "id": "T13B_025"
  },
  {
    "q": "Every NAVTEX message ends with a specific four-character code. What is it?",
    "a": "NNNN",
    "opts": [
      "ZCZC",
      "STOP",
      "ENDM",
      "NNNN"
    ],
    "exp": "NNNN is the end-of-message signal, instructing the receiver to stop printing/saving and return to standby mode.",
    "cat": "NAVTEX",
    "id": "T13B_026"
  },
  {
    "q": "In the NAVTEX message header 'B1 B2 B3 B4', what does the 'B1' character identify?",
    "a": "The Transmitter Coverage Area (The specific coast station broadcasting the message)",
    "opts": [
      "The Urgency level of the message",
      "The Subject of the message",
      "The Transmitter Coverage Area (The specific coast station broadcasting the message)",
      "The Message serial number"
    ],
    "exp": "B1 is a letter (A through Z) identifying which shore station is transmitting. This allows the ship's receiver to reject stations that are too far away.",
    "cat": "NAVTEX",
    "id": "T13B_027"
  },
  {
    "q": "In the NAVTEX message header 'B1 B2 B3 B4', what does the 'B2' character identify?",
    "a": "The Subject Indicator (The type of message, such as Weather or Navigational Warning)",
    "opts": [
      "The Message serial number",
      "The Subject Indicator (The type of message, such as Weather or Navigational Warning)",
      "The Transmitter ID",
      "The Language of the broadcast"
    ],
    "exp": "B2 is a letter (A through Z) defining the message content. For example, A = Navigational Warning, B = Meteorological Warning.",
    "cat": "NAVTEX",
    "id": "T13B_028"
  },
  {
    "q": "What do the 'B3 B4' characters represent in the NAVTEX message header?",
    "a": "The Message Serial Number (00 to 99)",
    "opts": [
      "The Error correction code",
      "The Time of transmission",
      "The Message Serial Number (00 to 99)",
      "The Transmitter coordinates"
    ],
    "exp": "B3 and B4 form a two-digit number. Once a receiver prints message '45', it stores that number in memory and will not print message '45' again if it is rebroadcast, saving paper/memory.",
    "cat": "NAVTEX",
    "id": "T13B_029"
  },
  {
    "q": "If the NAVTEX serial number (B3 B4) is '00', what does this signify?",
    "a": "It is a vital Distress or Search and Rescue (SAR) message, and the receiver is forced to print/display it regardless of any user rejection settings",
    "opts": [
      "It means the memory is full and must be cleared",
      "It is a vital Distress or Search and Rescue (SAR) message, and the receiver is forced to print/display it regardless of any user rejection settings",
      "The message contains zero errors",
      "It is a test message to verify receiver operation"
    ],
    "exp": "Number '00' overrides all user preferences. Even if the user told the machine to ignore all messages from that coast station, a '00' message will push through and alarm the bridge.",
    "cat": "NAVTEX",
    "id": "T13B_030"
  },
  {
    "q": "Which of the following NAVTEX Subject Indicators (B2) CANNOT be rejected or disabled by the user?",
    "a": "A, B, D, and L",
    "opts": [
      "A, B, D, and L",
      "X, Y, and Z",
      "A, C, E, and Z",
      "C, E, F, and G"
    ],
    "exp": "A (Navigational Warnings), B (Meteorological Warnings), D (Search and Rescue), and L (Additional Nav Warnings) are mandatory for ship safety and are hard-coded to never be rejected.",
    "cat": "NAVTEX",
    "id": "T13B_031"
  },
  {
    "q": "What does NAVTEX Subject Indicator 'A' stand for?",
    "a": "Navigational Warnings",
    "opts": [
      "Navigational Warnings",
      "Automatic Distress",
      "Anchorages",
      "Area Forecasts"
    ],
    "exp": "Subject 'A' warns of dangerous wrecks, drifting buoys, and unlit lighthouses.",
    "cat": "NAVTEX",
    "id": "T13B_032"
  },
  {
    "q": "What does NAVTEX Subject Indicator 'B' stand for?",
    "a": "Meteorological Warnings",
    "opts": [
      "Meteorological Warnings",
      "Berthing information",
      "Buoy status",
      "Broadcast schedule"
    ],
    "exp": "Subject 'B' warns of gale-force winds, typhoons, and severe weather phenomena.",
    "cat": "NAVTEX",
    "id": "T13B_033"
  },
  {
    "q": "What does NAVTEX Subject Indicator 'D' stand for?",
    "a": "Search and Rescue (SAR) Information and Pirate Attacks",
    "opts": [
      "Search and Rescue (SAR) Information and Pirate Attacks",
      "Departure schedules",
      "Data transmission",
      "Depth soundings"
    ],
    "exp": "Subject 'D' alerts ships in the area to assist a vessel in distress or warns of active piracy.",
    "cat": "NAVTEX",
    "id": "T13B_034"
  },
  {
    "q": "What is the typical maximum operational range of a NAVTEX coast station transmitter?",
    "a": "200 to 400 nautical miles offshore",
    "opts": [
      "200 to 400 nautical miles offshore",
      "1000 to 1500 nautical miles",
      "10 to 20 nautical miles",
      "Global coverage"
    ],
    "exp": "NAVTEX uses Medium Frequency (MF) ground waves, which effectively follow the curvature of the earth over seawater for a few hundred miles, providing coastal coverage.",
    "cat": "NAVTEX",
    "id": "T13B_035"
  },
  {
    "q": "How do multiple NAVTEX coast stations sharing the same 518 kHz frequency avoid jamming each other?",
    "a": "By Time-Sharing; each station is allocated a specific 10-minute transmission slot every 4 hours",
    "opts": [
      "By altering their antenna polarization",
      "By Time-Sharing; each station is allocated a specific 10-minute transmission slot every 4 hours",
      "By broadcasting at slightly different voltage levels",
      "By using different digital encryption keys"
    ],
    "exp": "To prevent interference, the globe is divided into NAVAREAS. Within an area, stations take turns. Station A transmits at 00:00, Station B at 00:10, Station C at 00:20, etc.",
    "cat": "NAVTEX",
    "id": "T13B_036"
  },
  {
    "q": "What type of antenna is typically used for a shipboard NAVTEX receiver?",
    "a": "An active whip antenna or an active dipole antenna with a built-in pre-amplifier",
    "opts": [
      "An active whip antenna or an active dipole antenna with a built-in pre-amplifier",
      "A submerged acoustic transducer",
      "A massive parabolic radar dish",
      "A directional Yagi antenna"
    ],
    "exp": "Because 518 kHz has a very long wavelength, a true 'full size' antenna would be massive. Ships use a small, 1-meter 'active' whip antenna containing an amplifier circuit to boost the weak MF signal.",
    "cat": "NAVTEX",
    "id": "T13B_037"
  },
  {
    "q": "If a NAVTEX message is received with errors due to atmospheric static, what character does the printer output in place of the corrupted letter?",
    "a": "An asterisk (*)",
    "opts": [
      "A question mark (?)",
      "The letter X",
      "An asterisk (*)",
      "A blank space"
    ],
    "exp": "Forward Error Correction (FEC) detects garbled data. If a character cannot be decoded confidently, the machine prints a '*' so the officer knows data is missing in that exact spot.",
    "cat": "NAVTEX",
    "id": "T13B_038"
  },
  {
    "q": "If the error rate of an incoming NAVTEX message exceeds 33%, what does the receiver automatically do?",
    "a": "It rejects the message and does not store its serial number, ensuring the machine will attempt to receive and print it again during the next broadcast",
    "opts": [
      "It sounds the ship's general distress alarm",
      "It rejects the message and does not store its serial number, ensuring the machine will attempt to receive and print it again during the next broadcast",
      "It prints a blank piece of paper",
      "It switches to 490 kHz automatically"
    ],
    "exp": "If the message is entirely unreadable, saving the ID would mean the ship never gets the warning. Rejecting it forces the machine to 'listen' for the rebroadcast 4 hours later.",
    "cat": "NAVTEX",
    "id": "T13B_039"
  },
  {
    "q": "Modern NAVTEX receivers use an LCD screen instead of thermal paper. What is the SOLAS requirement for storing messages on screen-based units?",
    "a": "They must have internal non-volatile memory capable of storing at least 200 messages, retaining them for at least 72 hours",
    "opts": [
      "They must have internal non-volatile memory capable of storing at least 200 messages, retaining them for at least 72 hours",
      "They must store up to 10,000 messages permanently",
      "They must delete messages after 24 hours to save memory",
      "They must upload all messages to the cloud immediately"
    ],
    "exp": "Paperless units must securely hold data so the navigating officer can review warnings from previous watches.",
    "cat": "NAVTEX",
    "id": "T13B_040"
  },
  {
    "q": "If the ship's main AC power fails, how is the NAVTEX receiver kept alive?",
    "a": "It is connected to the 24V DC GMDSS Reserve Source of Energy (Radio Battery Bank)",
    "opts": [
      "It is powered by the ship's emergency fire pump generator",
      "It has an internal hand-crank dynamo",
      "It shuts down safely and reboots when AC returns",
      "It is connected to the 24V DC GMDSS Reserve Source of Energy (Radio Battery Bank)"
    ],
    "exp": "NAVTEX is a crucial part of the GMDSS. It must remain fully operational during a total ship blackout, drawing power directly from the dedicated radio batteries.",
    "cat": "NAVTEX",
    "id": "T13B_041"
  },
  {
    "q": "An ETO finds the NAVTEX is not receiving any messages, but the unit powers on perfectly. What is the most likely physical fault?",
    "a": "The active antenna on the monkey island has a severed coax cable, a corroded connection, or has lost its 12V/24V DC supply voltage from the main unit",
    "opts": [
      "The active antenna on the monkey island has a severed coax cable, a corroded connection, or has lost its 12V/24V DC supply voltage from the main unit",
      "The main switchboard has a ground fault",
      "The B1 station was set to 'Z'",
      "The paper roll is installed backwards"
    ],
    "exp": "Active antennas require DC voltage traveling UP the coax cable to power the amplifier. If saltwater corrodes the connector, the amp dies, and the receiver goes deaf.",
    "cat": "NAVTEX",
    "id": "T13B_042"
  },
  {
    "q": "How does the NAVTEX system achieve 'Forward Error Correction' (FEC)?",
    "a": "Each character is transmitted twice, with the second transmission slightly delayed; the receiver compares them to ensure accuracy",
    "opts": [
      "By using a satellite to double-check the spelling",
      "By transmitting in both English and French simultaneously",
      "Each character is transmitted twice, with the second transmission slightly delayed; the receiver compares them to ensure accuracy",
      "By requiring the ship to transmit an acknowledgment back"
    ],
    "exp": "Because ships cannot transmit back to the NAVTEX station to say 'please repeat', the station uses Time Diversity FEC, sending every letter twice. If static ruins the first 'A', the second 'A' usually gets through.",
    "cat": "NAVTEX",
    "id": "T13B_043"
  },
  {
    "q": "What routine test must the ETO/Deck Officer perform on the NAVTEX?",
    "a": "Activate the built-in self-test function which checks the ROM, RAM, display, and printer/alarm buzzer, logging the result",
    "opts": [
      "Activate the built-in self-test function which checks the ROM, RAM, display, and printer/alarm buzzer, logging the result",
      "Unplug the antenna to see if the error light turns on",
      "Change the operating frequency to 156.8 MHz",
      "Transmit a test message to the Coast Guard"
    ],
    "exp": "NAVTEX is a receive-only device. You test the internal hardware using the manufacturer's diagnostic software.",
    "cat": "NAVTEX",
    "id": "T13B_044"
  },
  {
    "q": "If the B1 character is set to 'A' and the ship sails into NAVAREA III, what must the officer do?",
    "a": "Update the NAVTEX receiver to select the specific B1 station letters corresponding to the coast stations in NAVAREA III",
    "opts": [
      "Change the frequency to 490 kHz",
      "Turn off the NAVTEX and use INMARSAT exclusively",
      "Update the NAVTEX receiver to select the specific B1 station letters corresponding to the coast stations in NAVAREA III",
      "Nothing; 'A' is a universal global setting"
    ],
    "exp": "As the ship moves globally, the officers must tell the NAVTEX which local towers to listen to, otherwise it will reject the relevant local warnings.",
    "cat": "NAVTEX",
    "id": "T13B_045"
  },
  {
    "q": "Why is the NAVTEX antenna specifically isolated from the ship's steel hull using plastic or rubber mounts?",
    "a": "To prevent the metal hull from grounding out the antenna element, which would short-circuit the received RF signal to earth before it reaches the amplifier",
    "opts": [
      "To prevent vibration from shattering the fiberglass",
      "To stop the antenna from rusting",
      "To prevent lightning strikes",
      "To prevent the metal hull from grounding out the antenna element, which would short-circuit the received RF signal to earth before it reaches the amplifier"
    ],
    "exp": "The whip must be electrically floating. If salt bridges the gap between the whip base and the mounting bracket, the antenna is grounded and becomes deaf.",
    "cat": "NAVTEX",
    "id": "T13B_046"
  },
  {
    "q": "What happens when the NAVTEX memory reaches its 200-message limit?",
    "a": "It overwrites the oldest messages first (First-In, First-Out), EXCEPT for uncleared SAR/Distress messages which are protected",
    "opts": [
      "It stops receiving new messages and sounds an alarm",
      "It uploads the memory to the VDR",
      "It overwrites the oldest messages first (First-In, First-Out), EXCEPT for uncleared SAR/Distress messages which are protected",
      "It automatically prints all 200 messages and clears the memory"
    ],
    "exp": "The memory acts as a continuous rolling loop, constantly maintaining the most recent 72 hours of data.",
    "cat": "NAVTEX",
    "id": "T13B_047"
  },
  {
    "q": "What does the abbreviation NAVTEX actually stand for?",
    "a": "Navigational Telex",
    "opts": [
      "Navigation and Weather Transmission",
      "Nautical Vessel Tracking Exchange",
      "Navigational Telex",
      "Naval Text Service"
    ],
    "exp": "It uses Narrow Band Direct Printing (NBDP) telex technology to broadcast text over radio waves.",
    "cat": "NAVTEX",
    "id": "T13B_048"
  },
  {
    "q": "Under GMDSS carriage requirements, in which Sea Areas is a NAVTEX receiver mandatory?",
    "a": "It is mandatory in ALL Sea Areas (A1, A2, A3, and A4) provided NAVTEX service is provided in those areas",
    "opts": [
      "Only in Sea Areas A3 and A4",
      "It is mandatory in ALL Sea Areas (A1, A2, A3, and A4) provided NAVTEX service is provided in those areas",
      "It is optional if an INMARSAT-C is carried",
      "Only in Sea Area A1"
    ],
    "exp": "NAVTEX is a foundational element of Maritime Safety Information (MSI) and is universally required regardless of how far offshore the ship sails.",
    "cat": "NAVTEX",
    "id": "T13B_049"
  },
  {
    "q": "If a NAVTEX active antenna fails, can the ETO temporarily replace it with a standard VHF whip antenna?",
    "a": "No, a VHF antenna is tuned for 156 MHz and has no internal amplifier; it will be completely deaf to the 518 kHz MF signal",
    "opts": [
      "No, a VHF antenna is tuned for 156 MHz and has no internal amplifier; it will be completely deaf to the 518 kHz MF signal",
      "No, because the VHF antenna will transmit and destroy the NAVTEX",
      "Yes, any wire can act as an antenna",
      "Yes, provided it is mounted higher than the radar"
    ],
    "exp": "Antennas are highly frequency-specific. An active MF antenna is a tuned circuit designed specifically to capture 518 kHz.",
    "cat": "NAVTEX",
    "id": "T13B_050"
  },
  {
    "q": "Why does the NAVTEX unit sound an audible alarm on the bridge?",
    "a": "To instantly alert the navigating officer that a vital Search and Rescue (SAR) or Gale Warning (Subject D or B) message has just been received",
    "opts": [
      "To wake the crew for their watch",
      "To signal that the ship has crossed into a new NAVAREA",
      "To indicate that the paper roll is empty",
      "To instantly alert the navigating officer that a vital Search and Rescue (SAR) or Gale Warning (Subject D or B) message has just been received"
    ],
    "exp": "Routine navigational warnings just print silently. Distress messages ring a bell so the officer reads it immediately and can alter course to assist.",
    "cat": "NAVTEX",
    "id": "T13B_051"
  },
  {
    "q": "What are the two primary frequencies transmitted by a standard satellite EPIRB?",
    "a": "406 MHz (for satellite detection) and 121.5 MHz (for aircraft/vessel homing)",
    "opts": [
      "9 GHz and 3 GHz",
      "156.8 MHz and 518 kHz",
      "406 MHz (for satellite detection) and 121.5 MHz (for aircraft/vessel homing)",
      "2187.5 kHz and 156.525 MHz"
    ],
    "exp": "406 MHz punches through the atmosphere to alert the Cospas-Sarsat satellites. Once rescue units arrive in the general area, they use the 121.5 MHz analog 'beep' to home in exactly on the floating beacon.",
    "cat": "EPIRB",
    "id": "T13B_052"
  },
  {
    "q": "What is the global satellite system that detects and processes 406 MHz EPIRB distress signals?",
    "a": "Cospas-Sarsat",
    "opts": [
      "INMARSAT",
      "Galileo",
      "Cospas-Sarsat",
      "Iridium"
    ],
    "exp": "Cospas-Sarsat is an international humanitarian cooperative (involving low-earth and geostationary satellites) dedicated solely to search and rescue detection.",
    "cat": "EPIRB",
    "id": "T13B_053"
  },
  {
    "q": "What critical change regarding EPIRBs took effect on January 1, 2024?",
    "a": "VHF-EPIRBs (operating on CH 70) are no longer accepted for ANY sea area; all ships must carry a 406 MHz satellite EPIRB",
    "opts": [
      "VHF-EPIRBs (operating on CH 70) are no longer accepted for ANY sea area; all ships must carry a 406 MHz satellite EPIRB",
      "EPIRBs must now transmit video feeds",
      "EPIRBs must be painted fluorescent green",
      "EPIRBs are now optional if the ship has AIS"
    ],
    "exp": "Previously, ships sailing exclusively in Sea Area A1 (close to shore) could use VHF-EPIRBs. The IMO deleted this, enforcing 406 MHz universally for superior reliability.",
    "cat": "EPIRB",
    "id": "T13B_054"
  },
  {
    "q": "What is the function of the Hydrostatic Release Unit (HRU) attached to the EPIRB bracket?",
    "a": "If the ship sinks, water pressure triggers a knife at a specific depth, cutting the plastic securing bolt and allowing the buoyant EPIRB to float to the surface",
    "opts": [
      "If the ship sinks, water pressure triggers a knife at a specific depth, cutting the plastic securing bolt and allowing the buoyant EPIRB to float to the surface",
      "It physically launches the EPIRB into the air using a spring",
      "It measures the depth of the water to calculate GPS coordinates",
      "It turns on the EPIRB's strobe light"
    ],
    "exp": "The HRU is a fail-safe. If the crew abandons ship so fast they forget to grab the EPIRB, the ship sinking will automatically deploy it.",
    "cat": "EPIRB",
    "id": "T13B_055"
  },
  {
    "q": "At what depth is the Hydrostatic Release Unit (HRU) designed to activate?",
    "a": "Between 1.5 and 4.0 meters underwater",
    "opts": [
      "At exactly 0.5 meters",
      "Between 1.5 and 4.0 meters underwater",
      "Between 10 and 15 meters underwater",
      "Below 50 meters"
    ],
    "exp": "It must activate deep enough to avoid triggering from heavy waves crashing on deck, but shallow enough that it floats free before the sinking ship drags it down too deep.",
    "cat": "EPIRB",
    "id": "T13B_056"
  },
  {
    "q": "How does an EPIRB automatically begin transmitting once released by the HRU?",
    "a": "It contains 'Sea Contacts' (water switches) on the bottom; when it floats in conductive seawater, the circuit completes and the beacon turns ON",
    "opts": [
      "It contains 'Sea Contacts' (water switches) on the bottom; when it floats in conductive seawater, the circuit completes and the beacon turns ON",
      "It is turned on by the hydrostatic knife slicing a wire",
      "It turns on when sunlight hits its solar panel",
      "It starts transmitting when it loses the Bluetooth signal from the bridge"
    ],
    "exp": "The EPIRB is completely automatic. It floats up, hits the surface, the water touches the two metal contacts, and the 406 MHz transmitter fires up.",
    "cat": "EPIRB",
    "id": "T13B_057"
  },
  {
    "q": "Why doesn't the EPIRB activate when heavy rain or waves hit it while it is still mounted in its bracket on the bridge wing?",
    "a": "The bracket contains a built-in magnet that interacts with a reed switch inside the EPIRB, keeping the unit physically disabled as long as it is seated in the housing",
    "opts": [
      "The bracket is completely watertight",
      "The bracket contains a built-in magnet that interacts with a reed switch inside the EPIRB, keeping the unit physically disabled as long as it is seated in the housing",
      "Rainwater is not conductive enough to complete the circuit",
      "The EPIRB only works upside down"
    ],
    "exp": "The magnet is a safety interlock. You can wash the EPIRB with a hose in its bracket safely. But the moment it leaves the bracket (losing the magnetic field), the sea contacts go 'live'.",
    "cat": "EPIRB",
    "id": "T13B_058"
  },
  {
    "q": "What is the crucial rule regarding the EPIRB's lanyard (painter line) when it is mounted in its free-float bracket?",
    "a": "The lanyard MUST be neatly coiled and NEVER tied to the ship's structure; if tied, the sinking ship will drag the floating EPIRB down with it",
    "opts": [
      "The lanyard must be tied tightly to the bridge railing to prevent theft",
      "The lanyard must be tied to the HRU knife",
      "The lanyard must be cut off entirely",
      "The lanyard MUST be neatly coiled and NEVER tied to the ship's structure; if tied, the sinking ship will drag the floating EPIRB down with it"
    ],
    "exp": "The lanyard is strictly for tying the EPIRB to yourself or a life raft ONCE you have abandoned ship. Tying it to the ship's railing defeats the entire purpose of the automatic float-free release.",
    "cat": "EPIRB",
    "id": "T13B_059"
  },
  {
    "q": "What specific digital information is transmitted to the satellite in the 406 MHz burst?",
    "a": "The 15-character Hexadecimal ID (which links to a database showing the ship's name, MMSI, and emergency contacts) and, if GPS-equipped, its exact coordinates",
    "opts": [
      "A continuous analog SOS tone",
      "The 15-character Hexadecimal ID (which links to a database showing the ship's name, MMSI, and emergency contacts) and, if GPS-equipped, its exact coordinates",
      "The ship's current fuel level and heading",
      "A voice recording of the Captain's distress message"
    ],
    "exp": "Unlike old analog beacons, 406 MHz is a digital data burst. It tells the rescue coordination center EXACTLY who is sinking and who to call to verify the emergency.",
    "cat": "EPIRB",
    "id": "T13B_060"
  },
  {
    "q": "What is the SOLAS requirement for the battery life of an activated EPIRB?",
    "a": "It must be capable of transmitting continuously for at least 48 hours at -20°C",
    "opts": [
      "It must be capable of transmitting continuously for at least 48 hours at -20°C",
      "It must transmit indefinitely via solar power",
      "It must transmit for 96 hours",
      "It must transmit for 8 hours"
    ],
    "exp": "Rescue in remote oceans takes time. The lithium battery pack is massive, ensuring the beacon blasts a 5-Watt signal into space for two full days even in freezing arctic water.",
    "cat": "EPIRB",
    "id": "T13B_061"
  },
  {
    "q": "How frequently must an EPIRB be tested by the ship's crew, and how is it done?",
    "a": "Tested monthly using the built-in 'TEST' switch; this fires a brief, restricted self-test burst to verify battery and transmitter health without triggering a live distress alert",
    "opts": [
      "It is never tested to preserve battery life",
      "Tested annually by pressing the main 'ON' button for 5 seconds",
      "Tested daily by dropping it in a bucket of seawater",
      "Tested monthly using the built-in 'TEST' switch; this fires a brief, restricted self-test burst to verify battery and transmitter health without triggering a live distress alert"
    ],
    "exp": "The test switch checks the electronics and flashes the strobe light, but the digital message is coded as a 'TEST' so the satellites ignore it.",
    "cat": "EPIRB",
    "id": "T13B_062"
  },
  {
    "q": "What is the mandatory 'Shore-Based Maintenance' (SBM) interval for an EPIRB?",
    "a": "It must be sent ashore to an approved facility at intervals not exceeding 5 years for a complete teardown, battery replacement, and RF emission check",
    "opts": [
      "Every 10 years",
      "Every 1 year",
      "Only when the battery expires",
      "It must be sent ashore to an approved facility at intervals not exceeding 5 years for a complete teardown, battery replacement, and RF emission check"
    ],
    "exp": "The ETO does not open an EPIRB. SBM is a statutory requirement where certified technicians replace the seals, change the battery, and use a shielded Faraday cage to verify it actually talks to satellites.",
    "cat": "EPIRB",
    "id": "T13B_063"
  },
  {
    "q": "What is the expiry lifespan of a standard Hydrostatic Release Unit (HRU) attached to the EPIRB?",
    "a": "Typically 2 years from the date of installation (which must be clearly punched/marked on the unit)",
    "opts": [
      "5 years",
      "It never expires",
      "10 years",
      "Typically 2 years from the date of installation (which must be clearly punched/marked on the unit)"
    ],
    "exp": "The HRU is a cheap, disposable plastic unit. Saltwater and sun degrade it. It must be replaced every 2 years to guarantee the knife will fire and cut the rope.",
    "cat": "EPIRB",
    "id": "T13B_064"
  },
  {
    "q": "If a crew member accidentally drops an EPIRB into a bucket of water and it activates (strobe flashing), what MUST be done immediately?",
    "a": "Remove it from the water, manually switch it OFF, and immediately contact the nearest Rescue Coordination Centre (RCC) to cancel the false distress alert",
    "opts": [
      "Put it back in its bracket and pretend nothing happened",
      "Wrap it in aluminum foil and throw it overboard",
      "Remove it from the water, manually switch it OFF, and immediately contact the nearest Rescue Coordination Centre (RCC) to cancel the false distress alert",
      "Smash it with a hammer to stop the signal"
    ],
    "exp": "The satellite got the signal in seconds. Helicopters will be launching soon. You MUST call the coast guard via Inmarsat or VHF and confess the mistake immediately to stop a multi-million dollar false rescue operation.",
    "cat": "EPIRB",
    "id": "T13B_065"
  },
  {
    "q": "What is the difference between LEOSAR and GEOSAR in the Cospas-Sarsat system?",
    "a": "LEOSAR (Low Earth Orbit) satellites fly over the poles and use Doppler shift to calculate position; GEOSAR (Geostationary) satellites sit high over the equator and relay alerts instantly but cannot calculate position without GPS",
    "opts": [
      "LEOSAR is for VHF; GEOSAR is for MF",
      "LEOSAR (Low Earth Orbit) satellites fly over the poles and use Doppler shift to calculate position; GEOSAR (Geostationary) satellites sit high over the equator and relay alerts instantly but cannot calculate position without GPS",
      "LEOSAR is for military; GEOSAR is civilian",
      "They are two competing companies that sell EPIRBs"
    ],
    "exp": "LEOSAR moves, so as it flies over the beacon, the frequency shifts (Doppler effect), allowing the satellite to pinpoint the beacon's location. GEOSAR doesn't move, so it just acts as an instant relay mirror.",
    "cat": "EPIRB",
    "id": "T13B_066"
  },
  {
    "q": "Why are modern EPIRBs fitted with internal GPS receivers?",
    "a": "It allows the EPIRB to broadcast its exact coordinates instantly to the GEOSAR satellites, reducing the search radius to 50 meters immediately without waiting for a LEOSAR satellite to fly over",
    "opts": [
      "So the Captain can use it to navigate if the bridge radars fail",
      "It calculates the speed at which the ship sank",
      "It allows the EPIRB to broadcast its exact coordinates instantly to the GEOSAR satellites, reducing the search radius to 50 meters immediately without waiting for a LEOSAR satellite to fly over",
      "It syncs the EPIRB clock with the ship's clock"
    ],
    "exp": "Without GPS, Doppler calculation takes time and is only accurate to about 5km. A GPS EPIRB (often called a GPIRB) is insanely accurate, vastly speeding up rescue.",
    "cat": "EPIRB",
    "id": "T13B_067"
  },
  {
    "q": "Can the ETO legally open the EPIRB casing to replace a dead battery?",
    "a": "No, opening the casing breaks the hermetic seal; batteries must only be replaced by a certified shore-based facility to guarantee watertight integrity and proper programming",
    "opts": [
      "No, opening the casing breaks the hermetic seal; batteries must only be replaced by a certified shore-based facility to guarantee watertight integrity and proper programming",
      "Yes, provided the Captain supervises",
      "Yes, as long as they use marine-grade batteries",
      "No, the EPIRB is nuclear powered"
    ],
    "exp": "If an ETO changes the battery and pinches the O-ring, the EPIRB will flood with seawater and die the moment the ship sinks. Shore techs pressure-test the unit after a battery change.",
    "cat": "EPIRB",
    "id": "T13B_068"
  },
  {
    "q": "What visual signal is required on an EPIRB to aid searchers at night?",
    "a": "A high-intensity white flashing strobe light that activates automatically when the unit is transmitting",
    "opts": [
      "A flare gun attached to the side",
      "A steady green LED",
      "A red laser pointer",
      "A high-intensity white flashing strobe light that activates automatically when the unit is transmitting"
    ],
    "exp": "The 121.5 MHz signal gets the helicopter within a mile. The bright flashing strobe catches the pilot's eye in the dark ocean to pinpoint the exact location.",
    "cat": "EPIRB",
    "id": "T13B_069"
  },
  {
    "q": "Where should the EPIRB bracket ideally be mounted on the ship?",
    "a": "In a clear, unobstructed location (usually high on the bridge wing) where it can float absolutely free vertically without getting trapped under railings or antennas if the ship sinks",
    "opts": [
      "Inside the bridge to protect it from the weather",
      "Inside the enclosed lifeboat",
      "In a clear, unobstructed location (usually high on the bridge wing) where it can float absolutely free vertically without getting trapped under railings or antennas if the ship sinks",
      "Deep inside the engine room next to the emergency generator"
    ],
    "exp": "If mounted under an overhanging deck, the ship sinks, the HRU cuts the rope, the EPIRB floats up... and gets stuck against the ceiling, going down with the ship.",
    "cat": "EPIRB",
    "id": "T13B_070"
  },
  {
    "q": "What does a 'Class 1' EPIRB specify compared to a 'Class 2' EPIRB?",
    "a": "Class 1 is designed to operate in extreme cold (-40°C), while Class 2 is standard (-20°C)",
    "opts": [
      "Class 1 floats; Class 2 sinks",
      "Class 1 requires manual activation; Class 2 is automatic",
      "Class 1 has a 96-hour battery; Class 2 has a 48-hour battery",
      "Class 1 is designed to operate in extreme cold (-40°C), while Class 2 is standard (-20°C)"
    ],
    "exp": "Class 1 units use specialized batteries for extreme Arctic operations.",
    "cat": "EPIRB",
    "id": "T13B_071"
  },
  {
    "q": "If you manually remove the EPIRB from its bracket during an abandon-ship scenario into a life raft, how do you activate it?",
    "a": "Either throw it into the sea (water contacts activate it), or manually slide the switch on the unit to the 'ON' position",
    "opts": [
      "Either throw it into the sea (water contacts activate it), or manually slide the switch on the unit to the 'ON' position",
      "Pull the pin like a hand grenade",
      "It activates automatically as soon as it leaves the bracket",
      "Hit it firmly against the side of the life raft"
    ],
    "exp": "Leaving the bracket just arms the water sensors. You must either put it in the water, or explicitly turn the switch on.",
    "cat": "EPIRB",
    "id": "T13B_072"
  },
  {
    "q": "What is the MMSI number?",
    "a": "Maritime Mobile Service Identity; a unique 9-digit number programmed into the EPIRB, DSC, and AIS that acts as the ship's global digital phone number",
    "opts": [
      "Maritime Mobile Service Identity; a unique 9-digit number programmed into the EPIRB, DSC, and AIS that acts as the ship's global digital phone number",
      "Maximum Movement Speed Indicator",
      "Master's Maritime Safety Index",
      "Marine Measurement System Indicator"
    ],
    "exp": "The EPIRB's Hex ID contains the MMSI. Coast guards type this number into a database to instantly pull up the ship's name, tonnage, and owner phone numbers.",
    "cat": "EPIRB",
    "id": "T13B_073"
  },
  {
    "q": "Why is it important to keep the EPIRB free of thick coats of paint?",
    "a": "Paint can cover the metal sea contacts (preventing automatic activation), obscure the expiration dates, and block the GPS receiver antenna",
    "opts": [
      "Paint blocks the 121.5 MHz homing signal",
      "Paint can cover the metal sea contacts (preventing automatic activation), obscure the expiration dates, and block the GPS receiver antenna",
      "Paint makes it too heavy to float",
      "Paint chemically reacts with the plastic casing to form a bomb"
    ],
    "exp": "A careless deckhand painting the bracket might accidentally paint over the two silver screws on the bottom. If those screws are painted, water can't touch them, and the EPIRB will not activate when the ship sinks.",
    "cat": "EPIRB",
    "id": "T13B_074"
  },
  {
    "q": "What is the primary difference between an EPIRB and a PLB (Personal Locator Beacon)?",
    "a": "An EPIRB is registered to a SHIP and is designed to float upright automatically; a PLB is registered to a PERSON, requires manual activation, and does not float in an upright transmitting position without assistance",
    "opts": [
      "EPIRBs only work in the ocean; PLBs only work on land",
      "EPIRBs use 406 MHz; PLBs use VHF",
      "There is no difference; they are exactly the same device",
      "An EPIRB is registered to a SHIP and is designed to float upright automatically; a PLB is registered to a PERSON, requires manual activation, and does not float in an upright transmitting position without assistance"
    ],
    "exp": "PLBs are tiny and meant to be clipped to a lifejacket. If dropped in the water, they float, but the antenna points sideways, killing the signal. EPIRBs are heavily ballasted to float upright so the antenna points perfectly to space.",
    "cat": "EPIRB",
    "id": "T13B_075"
  },
  {
    "q": "When checking the EPIRB during a monthly inspection, what three dates must the ETO verify?",
    "a": "The Battery Expiry Date, the HRU Expiry Date, and the Shore-Based Maintenance (SBM) Due Date",
    "opts": [
      "The Manufacture Date, the Purchase Date, and the Warranty Date",
      "The Battery Expiry Date, the HRU Expiry Date, and the Shore-Based Maintenance (SBM) Due Date",
      "The Antenna Expiry Date, the Magnet Expiry Date, and the Strobe Expiry Date",
      "The Ship's Delivery Date, the Drydock Date, and the Captain's Birthday"
    ],
    "exp": "These three dates are heavily checked by PSC. If the HRU expired yesterday, the ship is detained.",
    "cat": "EPIRB",
    "id": "T13B_076"
  },
  {
    "q": "Does the 121.5 MHz frequency on the EPIRB communicate with satellites?",
    "a": "No, it is a low-power, analog, local line-of-sight signal used purely by Search and Rescue aircraft or ships to 'home in' on the beacon using directional antennas",
    "opts": [
      "Yes, but only with geostationary satellites",
      "No, it is used to communicate with passing submarines",
      "No, it is a low-power, analog, local line-of-sight signal used purely by Search and Rescue aircraft or ships to 'home in' on the beacon using directional antennas",
      "Yes, it is the primary satellite uplink frequency"
    ],
    "exp": "Satellites stopped monitoring 121.5 MHz in 2009 due to millions of false alarms. It is now strictly a 'final mile' homing beacon for airplanes.",
    "cat": "EPIRB",
    "id": "T13B_077"
  },
  {
    "q": "If an EPIRB is activated inside a totally enclosed steel superstructure, will it work?",
    "a": "No, the steel hull acts as a Faraday cage, blocking the 406 MHz RF signal from reaching the satellites",
    "opts": [
      "Yes, 406 MHz can penetrate solid steel easily",
      "No, the steel hull acts as a Faraday cage, blocking the 406 MHz RF signal from reaching the satellites",
      "No, it requires sunlight to operate",
      "Yes, it will automatically switch to sonar to escape the ship"
    ],
    "exp": "You must take the EPIRB outside. If you activate it inside a cabin, the satellites will never hear you.",
    "cat": "EPIRB",
    "id": "T13B_078"
  },
  {
    "q": "How does the EPIRB transmit its signal to save battery power?",
    "a": "It transmits a powerful 5-Watt half-second digital burst every 50 seconds, rather than a continuous stream",
    "opts": [
      "It transmits once an hour for 5 minutes",
      "It transmits a powerful 5-Watt half-second digital burst every 50 seconds, rather than a continuous stream",
      "It only transmits when a satellite pings it",
      "It transmits continuously for exactly 48 hours"
    ],
    "exp": "A continuous 5W transmission would drain the battery in hours. Burst transmission saves power while guaranteeing multiple hits per satellite pass.",
    "cat": "EPIRB",
    "id": "T13B_079"
  },
  {
    "q": "What is the typical weight and size of a standard marine EPIRB?",
    "a": "It is highly buoyant, brightly colored (usually orange or yellow), and typically weighs 1 to 2 kg, making it easy to carry into a liferaft",
    "opts": [
      "It is highly buoyant, brightly colored (usually orange or yellow), and typically weighs 1 to 2 kg, making it easy to carry into a liferaft",
      "It weighs 50 kg to ensure it survives rough seas",
      "It is painted ocean-blue to camouflage it from pirates",
      "It is the size of a standard briefcase"
    ],
    "exp": "It must be portable and buoyant.",
    "cat": "EPIRB",
    "id": "T13B_080"
  },
  {
    "q": "Can a ship sail if its only EPIRB is sent ashore for its 5-yearly maintenance?",
    "a": "No, a ship must NEVER sail without a functional, registered EPIRB onboard; a temporary 'loaner' EPIRB must be provided by the service station and registered to the ship",
    "opts": [
      "Yes, provided the Captain notes it in the logbook",
      "Yes, provided the SART is functioning",
      "Yes, if the ship stays within 12 nm of land",
      "No, a ship must NEVER sail without a functional, registered EPIRB onboard; a temporary 'loaner' EPIRB must be provided by the service station and registered to the ship"
    ],
    "exp": "The EPIRB is the ultimate distress beacon. The ship is unseaworthy without it.",
    "cat": "EPIRB",
    "id": "T13B_081"
  },
  {
    "q": "What does the acronym SART stand for?",
    "a": "Search and Rescue Radar Transponder",
    "opts": [
      "Search and Rescue Radar Transponder",
      "Ship Alert and Rescue Tracker",
      "Satellite Alarm and Radio Transmitter",
      "Submersible Acoustic Ranging Tool"
    ],
    "exp": "A Transponder is a device that receives a signal and instantly transmits a reply. The SART waits to be hit by a radar beam, then shoots a signal back.",
    "cat": "SART",
    "id": "T13B_082"
  },
  {
    "q": "On what specific frequency band does a traditional Radar SART operate?",
    "a": "The 9 GHz X-band (3 cm wavelength)",
    "opts": [
      "406 MHz",
      "156.8 MHz (VHF Channel 16)",
      "The 9 GHz X-band (3 cm wavelength)",
      "The 3 GHz S-band (10 cm wavelength)"
    ],
    "exp": "It is tuned explicitly to respond to standard 3cm X-band navigational radars carried by almost all commercial ships and rescue aircraft.",
    "cat": "SART",
    "id": "T13B_083"
  },
  {
    "q": "Will a Radar SART respond if it is painted by an S-band (3 GHz) radar?",
    "a": "No, it is completely deaf to S-band frequencies",
    "opts": [
      "Yes, but it will drain the battery twice as fast",
      "Yes, but the dots will appear smaller",
      "Yes, it responds to all radar bands",
      "No, it is completely deaf to S-band frequencies"
    ],
    "exp": "Crucial knowledge during a rescue. If you are looking for a liferaft, you MUST use your X-band radar. The S-band radar will not trigger the SART.",
    "cat": "SART",
    "id": "T13B_084"
  },
  {
    "q": "How does a Radar SART signal appear on the rescuing ship's radar screen?",
    "a": "As a straight line of 12 dots extending outward from the SART's position toward the edge of the screen",
    "opts": [
      "As a straight line of 12 dots extending outward from the SART's position toward the edge of the screen",
      "As a flashing SOS text message",
      "As a massive solid red circle",
      "As 8 concentric circles"
    ],
    "exp": "When hit by a pulse, the SART sweeps its transmitter across the 9GHz band, hitting the radar's receiver 12 times in a fraction of a second. This paints 12 distinct blips in a line on the screen.",
    "cat": "SART",
    "id": "T13B_085"
  },
  {
    "q": "As the rescuing ship gets very close (e.g., < 1 nautical mile) to the SART, what happens to the 12 dots on the radar screen?",
    "a": "The dots widen into wide arcs, and eventually turn into complete concentric circles filling the center of the screen",
    "opts": [
      "The dots begin to flash rapidly",
      "The dots widen into wide arcs, and eventually turn into complete concentric circles filling the center of the screen",
      "The dots disappear completely",
      "The dots turn into a straight line pointing left"
    ],
    "exp": "Because the ship is so close, the radar catches the SART's signal on the side-lobes of the antenna as it spins, smearing the dots into giant rings, letting the captain know they are right on top of the liferaft.",
    "cat": "SART",
    "id": "T13B_086"
  },
  {
    "q": "What is the SOLAS battery requirement for a SART?",
    "a": "It must be capable of sitting in standby mode for 96 hours, PLUS continuously transmitting for an additional 8 hours after that",
    "opts": [
      "It has no battery; it uses solar panels",
      "48 hours of continuous transmission",
      "It must be capable of sitting in standby mode for 96 hours, PLUS continuously transmitting for an additional 8 hours after that",
      "12 hours standby, 1 hour transmit"
    ],
    "exp": "The SART sits quietly in the liferaft for 4 days (96 hours) waiting for a radar beam. Once a ship gets close and starts painting it with radar, it has enough juice to blast replies for 8 full hours.",
    "cat": "SART",
    "id": "T13B_087"
  },
  {
    "q": "What is an AIS-SART?",
    "a": "An alternative to the traditional radar SART; it transmits GPS position data and a distress alert over AIS VHF frequencies instead of responding to X-band radar",
    "opts": [
      "A SART that uses satellite imagery",
      "A radar SART that also flashes a bright light",
      "A SART designed specifically for airplanes",
      "An alternative to the traditional radar SART; it transmits GPS position data and a distress alert over AIS VHF frequencies instead of responding to X-band radar"
    ],
    "exp": "Since 2010, ships can carry AIS-SARTs instead of Radar SARTs. They use the Automatic Identification System to put a GPS-precise target directly onto the rescuing ship's ECDIS screen.",
    "cat": "SART",
    "id": "T13B_088"
  },
  {
    "q": "How does an AIS-SART signal appear on an ECDIS or radar screen?",
    "a": "As a red circle with a cross inside it, accompanied by a text alert reading 'SART ACTIVE'",
    "opts": [
      "As a red circle with a cross inside it, accompanied by a text alert reading 'SART ACTIVE'",
      "As a flashing triangle",
      "As a straight line of 12 dots",
      "As a standard green ship icon"
    ],
    "exp": "This distinct icon tells the navigator instantly that this is not another ship, but a survival craft in distress.",
    "cat": "SART",
    "id": "T13B_089"
  },
  {
    "q": "What frequencies does an AIS-SART transmit on?",
    "a": "VHF Channels AIS 1 (161.975 MHz) and AIS 2 (162.025 MHz)",
    "opts": [
      "2187.5 kHz",
      "VHF Channels AIS 1 (161.975 MHz) and AIS 2 (162.025 MHz)",
      "9 GHz",
      "406 MHz"
    ],
    "exp": "It operates on the exact same VHF channels as the ship's main AIS transponder, ensuring every ship in a 20-30 mile radius sees the liferaft.",
    "cat": "SART",
    "id": "T13B_090"
  },
  {
    "q": "What is the correct height to deploy a SART in a liferaft to ensure maximum range?",
    "a": "At least 1 meter above sea level",
    "opts": [
      "Inside the liferaft on the floor",
      "Exactly 5 meters above sea level",
      "At least 1 meter above sea level",
      "Floating directly in the water"
    ],
    "exp": "Radar relies on line-of-sight. If the SART is sitting in the bottom of the raft, the waves will block the radar. Mounting it on the 1-meter telescopic pole provided vastly increases the detection distance (typically to 5-8 nm).",
    "cat": "SART",
    "id": "T13B_091"
  },
  {
    "q": "What happens on the SART unit itself when it is hit by an incoming radar pulse?",
    "a": "It provides a visual indication (e.g., a flashing light) and an audible beep, comforting the survivors by proving a ship is nearby and looking for them",
    "opts": [
      "It launches a small parachute",
      "It heats up to melt the ice around it",
      "It provides a visual indication (e.g., a flashing light) and an audible beep, comforting the survivors by proving a ship is nearby and looking for them",
      "It automatically turns off to save power"
    ],
    "exp": "This is a psychological and practical feature. If you are in a raft in the fog, the SART will suddenly start beeping, telling you a ship is less than 5 miles away.",
    "cat": "SART",
    "id": "T13B_092"
  },
  {
    "q": "Under SOLAS, how many SARTs must be carried on a cargo ship of 500 GT and upwards?",
    "a": "At least two (2) SARTs",
    "opts": [
      "At least two (2) SARTs",
      "Three (3)",
      "Only one (1)",
      "Four (4)"
    ],
    "exp": "Ships over 500 GT must carry two SARTs (usually one mounted near each bridge door) so they can be grabbed and thrown into the port and starboard liferafts.",
    "cat": "SART",
    "id": "T13B_093"
  },
  {
    "q": "If a ship is equipped with a free-fall lifeboat, what is the special rule regarding SART stowage?",
    "a": "One of the two required SARTs must be permanently stowed inside the free-fall lifeboat",
    "opts": [
      "One of the two required SARTs must be permanently stowed inside the free-fall lifeboat",
      "Both SARTs must be kept on the bridge",
      "SARTs are not required if a free-fall lifeboat is fitted",
      "The SART must be strapped to the outside of the lifeboat hull"
    ],
    "exp": "During an emergency, you sprint to the free-fall boat and launch it instantly. You don't have time to detour to the bridge to grab a SART. Therefore, one is permanently kept inside the boat.",
    "cat": "SART",
    "id": "T13B_094"
  },
  {
    "q": "How does an ETO conduct the mandatory monthly test of a Radar SART?",
    "a": "Turn on the ship's 3cm X-band radar, switch the SART to 'TEST' mode briefly, verify the 12 dots appear on the radar screen, and verify the SART beeps/flashes",
    "opts": [
      "Call the coast guard via VHF to ask for a radio check",
      "Turn on the ship's 3cm X-band radar, switch the SART to 'TEST' mode briefly, verify the 12 dots appear on the radar screen, and verify the SART beeps/flashes",
      "Submerge the SART in a bucket of seawater",
      "Use a multimeter to measure the battery voltage"
    ],
    "exp": "You must physically prove the RF receiver and transmitter work. Holding it near the spinning radar antenna and seeing the dots proves the whole system is healthy. Do this briefly to avoid confusing nearby ships.",
    "cat": "SART",
    "id": "T13B_095"
  },
  {
    "q": "Why is the spacing between the 12 dots on the radar screen exactly 0.6 nautical miles?",
    "a": "It corresponds to the sweep time of the SART's transmitter across the 9GHz band; the 12 dots will cover approximately 8 nautical miles on the radar screen",
    "opts": [
      "It corresponds to the sweep time of the SART's transmitter across the 9GHz band; the 12 dots will cover approximately 8 nautical miles on the radar screen",
      "It is a random distance caused by ocean waves",
      "It represents the depth of the water",
      "It tells the rescuing ship how many people are in the raft"
    ],
    "exp": "The SART replies with 12 sweeps. The time delay between these sweeps creates artificial distance on the radar screen, drawing a highly noticeable 8-mile long dotted line.",
    "cat": "SART",
    "id": "T13B_096"
  },
  {
    "q": "When a rescuing ship is searching for a SART, what setting should they apply to their X-band radar?",
    "a": "Reduce the Sea Clutter (Anti-Clutter Sea / STC) setting to minimum, and use a range scale of 6 or 12 nm",
    "opts": [
      "Switch to S-band radar",
      "Reduce the Sea Clutter (Anti-Clutter Sea / STC) setting to minimum, and use a range scale of 6 or 12 nm",
      "Use the 96 nm range scale",
      "Turn Sea Clutter to maximum to filter out the waves"
    ],
    "exp": "Sea Clutter suppression actively deletes small signals close to the ship. A SART is a small signal close to the ship. If you leave anti-clutter on high, you will completely erase the SART dots from your screen.",
    "cat": "SART",
    "id": "T13B_097"
  },
  {
    "q": "What is the typical detection range of a SART by an aircraft flying at 3,000 feet?",
    "a": "Approximately 30 to 40 nautical miles",
    "opts": [
      "5 nautical miles",
      "Global coverage",
      "200 nautical miles",
      "Approximately 30 to 40 nautical miles"
    ],
    "exp": "Line of sight dictates range. An aircraft high in the sky can see over the curve of the earth, catching the SART's weak signal from dozens of miles away.",
    "cat": "SART",
    "id": "T13B_098"
  },
  {
    "q": "What is the typical detection range of a SART by a ship's radar antenna mounted 15 meters high?",
    "a": "Approximately 5 to 8 nautical miles",
    "opts": [
      "1 nautical mile",
      "Approximately 5 to 8 nautical miles",
      "30 nautical miles",
      "100 nautical miles"
    ],
    "exp": "Because the liferaft is sitting at sea level, the curvature of the earth and the waves block the signal quickly. 5-8 nm is the standard ship-to-raft detection range.",
    "cat": "SART",
    "id": "T13B_099"
  },
  {
    "q": "Can the ETO replace the internal battery of a SART?",
    "a": "Generally no; the battery pack must be replaced by an authorized shore service agent before its expiry date to maintain waterproof integrity and certification",
    "opts": [
      "Generally no; the battery pack must be replaced by an authorized shore service agent before its expiry date to maintain waterproof integrity and certification",
      "Yes, provided it is done in the engine room",
      "Yes, it uses standard D-cell batteries",
      "No, the SART is a single-use disposable item"
    ],
    "exp": "Like the EPIRB, the SART is hermetically sealed. Opening it on the ship risks pinching the O-ring, meaning it will flood with water exactly when you need it most.",
    "cat": "SART",
    "id": "T13B_100"
  },
  {
    "q": "What does a SART look like physically?",
    "a": "Usually a bright yellow or orange cylinder, highly buoyant, with a lanyard and a telescopic mounting pole attached",
    "opts": [
      "Usually a bright yellow or orange cylinder, highly buoyant, with a lanyard and a telescopic mounting pole attached",
      "A flat black square box",
      "A small green wearable watch",
      "A large red satellite dish"
    ],
    "exp": "It is designed to be easily visible, easy to grab, and capable of floating if dropped in the ocean.",
    "cat": "SART",
    "id": "T13B_101"
  },
  {
    "q": "Does a Radar SART transmit its GPS coordinates?",
    "a": "No, a traditional Radar SART only transmits a generic radar pulse; it has no GPS capability. Only an AIS-SART transmits coordinates",
    "opts": [
      "Yes, it uses Galileo satellites",
      "No, a traditional Radar SART only transmits a generic radar pulse; it has no GPS capability. Only an AIS-SART transmits coordinates",
      "Yes, directly to the Cospas-Sarsat network",
      "Yes, but only when asked by the rescue ship"
    ],
    "exp": "A radar SART is a dumb mirror. It just bounces back a loud radar echo. You have to look at the radar screen to see where the echo is coming from.",
    "cat": "SART",
    "id": "T13B_102"
  },
  {
    "q": "What is the polarization of a SART antenna?",
    "a": "Horizontal polarization",
    "opts": [
      "Magnetic polarization",
      "Circular polarization",
      "Horizontal polarization",
      "Vertical polarization"
    ],
    "exp": "Marine navigational radars use horizontal polarization. The SART must use the same polarization to effectively receive and transmit the signals.",
    "cat": "SART",
    "id": "T13B_103"
  },
  {
    "q": "Why is it important to ensure the SART is not obstructed by the metal canopy of the lifeboat?",
    "a": "The metal canopy acts as a radar reflector/blocker; the SART must be mounted outside, as high as possible, to ensure a clear 360-degree line of sight",
    "opts": [
      "The metal will drain the SART's battery magnetically",
      "The SART needs direct sunlight to charge",
      "The metal canopy acts as a radar reflector/blocker; the SART must be mounted outside, as high as possible, to ensure a clear 360-degree line of sight",
      "The metal canopy will cause the SART to overheat"
    ],
    "exp": "If you activate the SART inside a steel enclosed lifeboat, the radar waves will bounce off the steel boat and never reach the SART.",
    "cat": "SART",
    "id": "T13B_104"
  },
  {
    "q": "What is the 'Fast Sweep' and 'Slow Sweep' of the SART signal?",
    "a": "When triggered, it sweeps across the 9GHz band; the fast forward sweep creates the 12 dots, while the slow return sweep creates weaker background noise",
    "opts": [
      "Fast sweep is for ships, slow sweep is for aircraft",
      "When triggered, it sweeps across the 9GHz band; the fast forward sweep creates the 12 dots, while the slow return sweep creates weaker background noise",
      "Slow sweep is used to calculate the water temperature",
      "Fast sweep uses more battery power"
    ],
    "exp": "Because different ships have radars tuned to slightly different frequencies within the 9GHz band (e.g., 9.2 vs 9.4), the SART doesn't guess. It sweeps a blast of static across the entire band, guaranteeing it hits your exact frequency.",
    "cat": "SART",
    "id": "T13B_105"
  },
  {
    "q": "How does an AIS-SART generate its safety message?",
    "a": "It uses an internal GPS to find its location, then broadcasts AIS Message 1 (Position) and Message 14 (Safety Text: 'SART ACTIVE') every minute",
    "opts": [
      "It sends an email via INMARSAT",
      "It bounces a radar beam back to the ship",
      "It uses an internal GPS to find its location, then broadcasts AIS Message 1 (Position) and Message 14 (Safety Text: 'SART ACTIVE') every minute",
      "It broadcasts an SOS voice recording on VHF Ch 16"
    ],
    "exp": "This makes AIS-SARTs incredibly powerful. The rescuing ship doesn't have to interpret radar blips; a bright red target appears on the electronic chart showing the exact GPS location of the raft.",
    "cat": "SART",
    "id": "T13B_106"
  },
  {
    "q": "Which of the following is true about testing an AIS-SART?",
    "a": "It should be tested using the built-in test facility, which transmits a special test message that appears on the ship's AIS display as 'SART TEST'",
    "opts": [
      "It should be tested using the built-in test facility, which transmits a special test message that appears on the ship's AIS display as 'SART TEST'",
      "It must be tested by turning on the X-band radar",
      "It cannot be tested without notifying the Coast Guard",
      "It must be submerged in water to test"
    ],
    "exp": "Just like the EPIRB, the AIS-SART has a safe test mode. It proves the GPS works and the VHF radio transmits, but flags the data as a test so nearby ships don't panic.",
    "cat": "SART",
    "id": "T13B_107"
  },
  {
    "q": "Can a SART be left permanently switched ON during normal sailing?",
    "a": "No, it is strictly an emergency device; leaving it on will drain the battery, and it will respond to passing ships' radars, causing massive confusion",
    "opts": [
      "No, it is strictly an emergency device; leaving it on will drain the battery, and it will respond to passing ships' radars, causing massive confusion",
      "Yes, to ensure it is always ready",
      "Yes, it acts as a secondary radar reflector",
      "No, because it emits dangerous radiation"
    ],
    "exp": "If left on in its bracket, every time another ship points its radar at your ship, your SART will fire back 12 dots, making the other ship think you are a liferaft in distress.",
    "cat": "SART",
    "id": "T13B_108"
  },
  {
    "q": "What is the primary visual difference on a radar screen between a SART and a RACON (Radar Beacon)?",
    "a": "A SART displays a series of 12 equal dots; a RACON displays a specific Morse Code character (dots and dashes) to identify a navigational hazard like a buoy",
    "opts": [
      "A SART is green, a RACON is red",
      "A SART displays a series of 12 equal dots; a RACON displays a specific Morse Code character (dots and dashes) to identify a navigational hazard like a buoy",
      "A SART shows a circle, a RACON shows a square",
      "They look exactly the same on radar"
    ],
    "exp": "Both are transponders. But a RACON on a lighthouse might pulse '. - .' (Morse 'R') so you know exactly which lighthouse you are looking at. A SART always pulses 12 distinct dots.",
    "cat": "SART",
    "id": "T13B_109"
  },
  {
    "q": "Where does the first dot of the SART signal appear on the rescuing ship's radar?",
    "a": "The first dot represents the actual physical location of the SART; the other 11 dots trail out behind it away from the rescuing ship",
    "opts": [
      "The middle dot represents the SART",
      "The dots circle the SART",
      "The first dot represents the actual physical location of the SART; the other 11 dots trail out behind it away from the rescuing ship",
      "The last dot represents the SART"
    ],
    "exp": "When the radar pulse hits the SART, it fires its first reply instantly (giving the true distance). The SART then keeps sweeping its transmitter for a few microseconds, causing the radar to paint the fake 11 remaining dots 'behind' the real location.",
    "cat": "SART",
    "id": "T13B_110"
  },
  {
    "q": "What is the purpose of the 10-meter buoyant lanyard attached to the SART?",
    "a": "To tie the SART securely to the liferaft so it doesn't float away and get lost in heavy seas",
    "opts": [
      "To tie it to the EPIRB",
      "To tie the SART securely to the liferaft so it doesn't float away and get lost in heavy seas",
      "To tie it to the sinking ship",
      "To use it as a fishing line"
    ],
    "exp": "Everything in a survival situation must be tied down. If you drop the SART overboard without tying it to the raft, the wind will blow it away, and the rescue ship will find an empty piece of plastic 5 miles away from you.",
    "cat": "SART",
    "id": "T13B_111"
  },
  {
    "q": "What is the primary function of the Magnetron in a marine radar?",
    "a": "It is a high-power vacuum tube that generates the intense bursts of microwave radio frequencies (RF pulses) required for radar transmission",
    "opts": [
      "It rotates the scanner antenna",
      "It receives the weak echoes bouncing back from targets",
      "It displays the image on the screen",
      "It is a high-power vacuum tube that generates the intense bursts of microwave radio frequencies (RF pulses) required for radar transmission"
    ],
    "exp": "The Magnetron is the 'heart' of the radar. It takes thousands of volts and turns them into a massive, microscopic blast of 9GHz microwave energy.",
    "cat": "RADAR",
    "id": "T13B_112"
  },
  {
    "q": "What is the function of the TR Cell (Transmit/Receive Cell) or Duplexer in a radar system?",
    "a": "It acts as an ultra-fast electronic switch; it blocks the massive transmission pulse from blowing up the delicate receiver, then instantly opens to allow the weak returning echo to reach the receiver",
    "opts": [
      "It generates the text on the radar screen",
      "It acts as an ultra-fast electronic switch; it blocks the massive transmission pulse from blowing up the delicate receiver, then instantly opens to allow the weak returning echo to reach the receiver",
      "It controls the speed of the antenna motor",
      "It translates X-band into S-band"
    ],
    "exp": "Radar uses the exact same antenna to shout (transmit) and listen (receive). If the 10,000-Watt shout hit the delicate 'ear' (receiver crystal), it would melt it. The TR Cell slams shut during the shout, and opens a microsecond later to listen.",
    "cat": "RADAR",
    "id": "T13B_113"
  },
  {
    "q": "What are the characteristics of an X-Band radar?",
    "a": "Frequency of 9 GHz, Wavelength of 3 cm. It provides excellent high-resolution target imaging but is highly susceptible to interference from heavy rain and sea clutter",
    "opts": [
      "Frequency of 9 GHz, Wavelength of 3 cm. It provides excellent high-resolution target imaging but is highly susceptible to interference from heavy rain and sea clutter",
      "Frequency of 156 MHz. Used for voice comms",
      "Frequency of 3 GHz, Wavelength of 10 cm. Good in rain",
      "Frequency of 406 MHz. Used for satellites"
    ],
    "exp": "X-band (3cm) waves are tiny. They bounce off small objects (like small boats or SARTs), giving a crisp, sharp picture. But because they are small, they also bounce off raindrops, cluttering the screen in a storm.",
    "cat": "RADAR",
    "id": "T13B_114"
  },
  {
    "q": "What are the characteristics of an S-Band radar?",
    "a": "Frequency of 3 GHz, Wavelength of 10 cm. It has lower resolution but easily punches through heavy rain, fog, and snow without getting cluttered",
    "opts": [
      "Frequency of 9 GHz, Wavelength of 3 cm",
      "It requires a much smaller antenna than X-band",
      "It only detects other ships equipped with AIS",
      "Frequency of 3 GHz, Wavelength of 10 cm. It has lower resolution but easily punches through heavy rain, fog, and snow without getting cluttered"
    ],
    "exp": "S-band (10cm) waves are large. They smash straight through tiny raindrops without bouncing back, allowing the captain to see the giant oil tanker hiding behind the rain squall.",
    "cat": "RADAR",
    "id": "T13B_115"
  },
  {
    "q": "Which radar band MUST be used to detect a Radar SART?",
    "a": "X-Band (9 GHz / 3 cm)",
    "opts": [
      "S-Band (3 GHz / 10 cm)",
      "L-Band",
      "Ku-Band",
      "X-Band (9 GHz / 3 cm)"
    ],
    "exp": "SARTs are specifically tuned to listen for and reply to X-band pulses only.",
    "cat": "RADAR",
    "id": "T13B_116"
  },
  {
    "q": "What is the typical physical difference between an X-band antenna and an S-band antenna?",
    "a": "An X-band antenna is relatively small (typically 4 to 8 feet wide); an S-band antenna is massive (typically 12 feet wide) because it must broadcast a much larger 10cm wavelength",
    "opts": [
      "An X-band antenna is relatively small (typically 4 to 8 feet wide); an S-band antenna is massive (typically 12 feet wide) because it must broadcast a much larger 10cm wavelength",
      "There is no physical difference",
      "X-band antennas are parabolic dishes; S-band are simple wires",
      "X-band is massive; S-band is small"
    ],
    "exp": "Antenna size correlates with wavelength. Because S-band has a 10cm wave (over 3 times larger than X-band's 3cm), the physical scanner rotating on the mast must be substantially larger.",
    "cat": "RADAR",
    "id": "T13B_117"
  },
  {
    "q": "What is the 'Waveguide' in a radar installation?",
    "a": "A hollow, rectangular copper or brass pipe used to transmit the raw microwave energy from the magnetron up to the scanner antenna with minimal power loss",
    "opts": [
      "The motor that turns the antenna",
      "A hollow, rectangular copper or brass pipe used to transmit the raw microwave energy from the magnetron up to the scanner antenna with minimal power loss",
      "A software program that plots the ship's course",
      "A thick rubber wire carrying 24V DC"
    ],
    "exp": "You cannot send 9GHz microwaves down a normal copper wire; the energy would radiate away instantly. The waveguide acts like a perfectly tuned metal plumbing pipe, bouncing the microwaves down the hollow center until they reach the antenna.",
    "cat": "RADAR",
    "id": "T13B_118"
  },
  {
    "q": "What happens if moisture or water gets inside the hollow Waveguide?",
    "a": "The water absorbs and scatters the microwave energy, drastically reducing the radar's range, degrading the picture, and potentially causing internal arcing that destroys the magnetron",
    "opts": [
      "The radar picture becomes much clearer",
      "The water absorbs and scatters the microwave energy, drastically reducing the radar's range, degrading the picture, and potentially causing internal arcing that destroys the magnetron",
      "The radar switches from X-band to S-band automatically",
      "The antenna spins twice as fast"
    ],
    "exp": "Microwaves heat water (like a kitchen microwave). If water is in the pipe, the 10,000-Watt pulse hits the water, boils it, and absorbs the energy before it even reaches the antenna. Waveguides are often purged with dry air or nitrogen to prevent this.",
    "cat": "RADAR",
    "id": "T13B_119"
  },
  {
    "q": "What is the function of the Performance Monitor (PM) on a radar?",
    "a": "It is an electronic test facility that actively checks both the Transmitter power output and the Receiver sensitivity, proving the radar hasn't quietly gone 'deaf' or 'weak' over time",
    "opts": [
      "It monitors the physical speed of the antenna motor",
      "It tracks the working hours of the crew",
      "It is an electronic test facility that actively checks both the Transmitter power output and the Receiver sensitivity, proving the radar hasn't quietly gone 'deaf' or 'weak' over time",
      "It records the fuel consumption of the ship"
    ],
    "exp": "A magnetron slowly dies over 5000 hours. The screen looks fine, but your 24-mile radar might only be seeing 10 miles. The PM creates artificial test rings on the screen. If the rings shrink, the ETO knows the magnetron is dying.",
    "cat": "RADAR",
    "id": "T13B_120"
  },
  {
    "q": "If the radar screen shows a bright, brilliant center spot, but absolutely no targets (echoes) are visible anywhere on the screen, what is the classic fault?",
    "a": "The TR Cell (Duplexer) failed and stayed open during transmission, allowing the massive blast from the magnetron to enter and instantly burn out the delicate receiver crystal/diode",
    "opts": [
      "The antenna motor has stopped turning",
      "The TR Cell (Duplexer) failed and stayed open during transmission, allowing the massive blast from the magnetron to enter and instantly burn out the delicate receiver crystal/diode",
      "The magnetron is completely dead",
      "The display monitor has a broken backlight"
    ],
    "exp": "A bright center means the magnetron is shouting (transmitting) perfectly fine. The lack of echoes means the 'ear' is deaf. This happens when the protective TR cell fails, letting the shout blow out the ear drum.",
    "cat": "RADAR",
    "id": "T13B_121"
  },
  {
    "q": "If you observe 'Spoking' (radial lines flashing out from the center like bicycle spokes) on the radar display, what is the likely electrical fault?",
    "a": "A fault in the synchronization between the spinning antenna and the display, often caused by a dirty optical encoder, a failing heading marker microswitch, or a loose data cable",
    "opts": [
      "Rain clutter interference",
      "A fault in the synchronization between the spinning antenna and the display, often caused by a dirty optical encoder, a failing heading marker microswitch, or a loose data cable",
      "A dying magnetron",
      "A burned-out receiver crystal"
    ],
    "exp": "The screen must know exactly where the antenna is pointing. If the encoder on the roof gets dirty and misses degrees, the screen gets confused, drawing erratic spokes as it loses track of the antenna's rotation.",
    "cat": "RADAR",
    "id": "T13B_122"
  },
  {
    "q": "What does the 'Heading Marker' (HM) do?",
    "a": "It paints a solid line on the screen directly from the center to the edge, indicating the exact physical direction the ship's bow is pointing",
    "opts": [
      "It paints a solid line on the screen directly from the center to the edge, indicating the exact physical direction the ship's bow is pointing",
      "It highlights the most dangerous target on the screen",
      "It shows the direction of the wind",
      "It marks the location of the nearest port"
    ],
    "exp": "A microswitch or optical sensor in the antenna trips exactly once per revolution when the scanner points dead ahead. This syncs the radar picture to the physical ship.",
    "cat": "RADAR",
    "id": "T13B_123"
  },
  {
    "q": "What is ARPA?",
    "a": "Automatic Radar Plotting Aid; a computer system that automatically tracks multiple radar targets, calculates their speed/course, and predicts their Closest Point of Approach (CPA) to warn of collisions",
    "opts": [
      "Acoustic Ranging and Pulse Analyzer",
      "Advanced Radar Power Amplifier",
      "Automated Radio Positioning Array",
      "Automatic Radar Plotting Aid; a computer system that automatically tracks multiple radar targets, calculates their speed/course, and predicts their Closest Point of Approach (CPA) to warn of collisions"
    ],
    "exp": "Before ARPA, officers had to use grease pencils to draw target lines on the screen to figure out if ships would crash. ARPA tracks dozens of ships simultaneously and triggers an alarm if a crash is mathematically imminent.",
    "cat": "RADAR",
    "id": "T13B_124"
  },
  {
    "q": "What two critical external data inputs must ARPA receive to calculate accurate target tracking data?",
    "a": "Heading from the Gyrocompass, and Speed from the Doppler Log/GPS",
    "opts": [
      "Depth from the Echo Sounder, and Wind from the Anemometer",
      "Time from the atomic clock, and Draft from the load computer",
      "Heading from the Gyrocompass, and Speed from the Doppler Log/GPS",
      "VHF radio signals, and AIS data"
    ],
    "exp": "ARPA calculates relative motion. If it doesn't know how fast your own ship is moving (Speed), or which way you are pointing (Heading), its math will be completely wrong, and it will give false collision warnings.",
    "cat": "RADAR",
    "id": "T13B_125"
  },
  {
    "q": "What does a 'Blind Sector' on a radar mean, and what causes it?",
    "a": "An area on the screen where no targets can be seen; caused by physical obstructions on the ship (like the funnel, massive cranes, or the main mast) blocking the radar beam",
    "opts": [
      "An electronic failure in the magnetron",
      "A software glitch in the ARPA system",
      "An area on the screen where no targets can be seen; caused by physical obstructions on the ship (like the funnel, massive cranes, or the main mast) blocking the radar beam",
      "An area blocked by heavy rain"
    ],
    "exp": "Microwaves don't bend around steel. If a giant exhaust funnel is directly behind the antenna, the radar is blind to anything directly behind the ship. These blind sectors must be physically mapped and displayed on the bridge.",
    "cat": "RADAR",
    "id": "T13B_126"
  },
  {
    "q": "What is the typical lifespan of a Radar Magnetron, and what is the ETO's role?",
    "a": "Typically 5,000 to 10,000 transmit hours; the ETO must track the hours, perform Performance Monitor checks, and proactively replace the magnetron before it degrades completely",
    "opts": [
      "1 million hours",
      "100 hours; replaced every voyage",
      "Typically 5,000 to 10,000 transmit hours; the ETO must track the hours, perform Performance Monitor checks, and proactively replace the magnetron before it degrades completely",
      "It lasts the lifetime of the ship (25 years)"
    ],
    "exp": "A magnetron is a consumable vacuum tube. Like a lightbulb, it slowly dies. If the ETO waits for it to completely fail, the ship loses radar in the middle of a voyage.",
    "cat": "RADAR",
    "id": "T13B_127"
  },
  {
    "q": "When physically replacing a Magnetron, what critical precaution MUST the ETO take regarding tools?",
    "a": "Never use magnetic tools (like magnetic-tipped screwdrivers) near the magnetron, and keep it away from steel bulkheads, as altering its powerful internal permanent magnets will destroy its frequency tuning",
    "opts": [
      "Never use insulated tools",
      "Never use magnetic tools (like magnetic-tipped screwdrivers) near the magnetron, and keep it away from steel bulkheads, as altering its powerful internal permanent magnets will destroy its frequency tuning",
      "Tools must be heated to 100°C before touching it",
      "Only use tools made of solid gold"
    ],
    "exp": "A magnetron relies on absolute, precise magnetic fields to shape the microwaves. Hitting it with a magnetic screwdriver warps that field, ruining the $2000 tube instantly.",
    "cat": "RADAR",
    "id": "T13B_128"
  },
  {
    "q": "Why is a 'Safety Isolation Permit' absolutely critical before climbing the mast to service the radar scanner?",
    "a": "To ensure power is locked off; the spinning antenna could knock you off the mast, and standing directly in front of an active transmitting magnetron causes severe microwave radiation burns (cooking internal organs)",
    "opts": [
      "To silence the ship's horn",
      "To stop the ship from moving",
      "To prevent birds from attacking",
      "To ensure power is locked off; the spinning antenna could knock you off the mast, and standing directly in front of an active transmitting magnetron causes severe microwave radiation burns (cooking internal organs)"
    ],
    "exp": "A 25kW radar acts like an open-door microwave oven. Taking a blast of X-band radiation to the eyes will cause cataracts. The physical blow from a spinning 12-foot steel S-band antenna will throw you 50 feet to the deck.",
    "cat": "RADAR",
    "id": "T13B_129"
  },
  {
    "q": "What does the 'STC' (Sensitivity Time Control) or 'Anti-Clutter Sea' dial do?",
    "a": "It temporarily reduces the receiver's sensitivity for echoes bouncing back from targets very close to the ship (like waves), preventing the center of the screen from becoming a solid blob of noise",
    "opts": [
      "It temporarily reduces the receiver's sensitivity for echoes bouncing back from targets very close to the ship (like waves), preventing the center of the screen from becoming a solid blob of noise",
      "It increases the power of the magnetron",
      "It slows down the antenna motor",
      "It filters out rain clouds"
    ],
    "exp": "Waves bouncing back from 0.5 miles away return massive, blinding echoes. STC turns down the 'hearing aid' for the first few miles, and turns it back up for distant targets.",
    "cat": "RADAR",
    "id": "T13B_130"
  },
  {
    "q": "What does the 'FTC' (Fast Time Constant) or 'Anti-Clutter Rain' dial do?",
    "a": "It electronically shortens the echo pulses on the screen, breaking up the massive solid blob of a rain cloud so that the hard echo of a ship hiding inside the rain becomes visible",
    "opts": [
      "It switches the radar from X-band to S-band",
      "It physically tilts the antenna to look under the clouds",
      "It turns on the windshield wipers on the bridge",
      "It electronically shortens the echo pulses on the screen, breaking up the massive solid blob of a rain cloud so that the hard echo of a ship hiding inside the rain becomes visible"
    ],
    "exp": "Rain returns a long, sustained echo (a big blob). A ship returns a sharp, hard spike. FTC acts like an electronic filter that only displays the sharp leading edge of an echo, erasing the 'fluff' of the rain cloud.",
    "cat": "RADAR",
    "id": "T13B_131"
  },
  {
    "q": "What is the relationship between 'Pulse Length' and Radar Resolution?",
    "a": "A 'Short Pulse' provides excellent target resolution and crisp pictures at close range; a 'Long Pulse' pumps more total energy into the sky, sacrificing crispness to detect targets much further away",
    "opts": [
      "Short pulse is only used for S-band",
      "Long pulse is used for short range, Short pulse for long range",
      "Pulse length only dictates the color of the screen",
      "A 'Short Pulse' provides excellent target resolution and crisp pictures at close range; a 'Long Pulse' pumps more total energy into the sky, sacrificing crispness to detect targets much further away"
    ],
    "exp": "Short pulse = a quick 'BANG'. You get a sharp echo, great for picking out two small boats near each other. Long pulse = 'BAAAAAANG'. You pump way more energy out, letting you see a mountain 40 miles away, but close objects blur together.",
    "cat": "RADAR",
    "id": "T13B_132"
  },
  {
    "q": "What is PRF (Pulse Repetition Frequency)?",
    "a": "The number of radar pulses transmitted every second (e.g., 1000 to 3000 Hz)",
    "opts": [
      "The number of radar pulses transmitted every second (e.g., 1000 to 3000 Hz)",
      "The refresh rate of the LCD monitor",
      "The speed the antenna spins (24 RPM)",
      "The frequency of the microwave (9 GHz)"
    ],
    "exp": "The magnetron doesn't shout continuously. It shouts, listens, shouts, listens. If it shouts 2000 times a second, the PRF is 2000.",
    "cat": "RADAR",
    "id": "T13B_133"
  },
  {
    "q": "How does Pulse Length affect the PRF?",
    "a": "They are inversely related; a Long Pulse requires the radar to listen for a longer time for distant echoes, so the PRF must automatically drop (fewer pulses per second)",
    "opts": [
      "Pulse length dictates voltage, PRF dictates current",
      "They are inversely related; a Long Pulse requires the radar to listen for a longer time for distant echoes, so the PRF must automatically drop (fewer pulses per second)",
      "They are directly proportional; Long pulse means high PRF",
      "They have no relationship whatsoever"
    ],
    "exp": "If you shout loudly (Long Pulse) to hear a mountain 48 miles away, you have to stay quiet for a long time to wait for the echo to travel 96 miles round-trip. Therefore, you can't shout as many times per second (Low PRF).",
    "cat": "RADAR",
    "id": "T13B_134"
  },
  {
    "q": "What is the function of the 'Local Oscillator' in a radar receiver?",
    "a": "It generates a steady internal frequency that is mixed with the incoming 9GHz echo to produce a much lower, manageable Intermediate Frequency (IF) (e.g., 60 MHz) that the electronics can easily amplify",
    "opts": [
      "It physically vibrates the antenna to shake off ice",
      "It generates a steady internal frequency that is mixed with the incoming 9GHz echo to produce a much lower, manageable Intermediate Frequency (IF) (e.g., 60 MHz) that the electronics can easily amplify",
      "It controls the tuning of the ship's VHF radio",
      "It generates the 440V AC power for the magnetron"
    ],
    "exp": "Amplifying a 9,000,000,000 Hz signal is incredibly difficult. The superheterodyne receiver mixes it with an 8,940,000,000 Hz signal. The difference (60 MHz) is easily amplified and processed by the computer.",
    "cat": "RADAR",
    "id": "T13B_135"
  },
  {
    "q": "Under SOLAS, what are the carriage requirements for Radar on ships over 3,000 GT?",
    "a": "They must carry two totally independent radar installations; at least one MUST be a 9 GHz (X-band) radar",
    "opts": [
      "Radar is optional if ECDIS is installed",
      "They must carry two totally independent radar installations; at least one MUST be a 9 GHz (X-band) radar",
      "They must carry two S-band radars",
      "Only one X-band radar is required"
    ],
    "exp": "A large ship is blind without radar. Two are required for redundancy. The X-band is legally mandated because it is the only frequency that can trigger Search and Rescue Transponders (SARTs). The second radar is usually S-band for heavy weather.",
    "cat": "RADAR",
    "id": "T13B_136"
  },
  {
    "q": "If a radar picture looks incredibly weak and fuzzy despite adjusting the gain, and the Performance Monitor rings have shrunk drastically, what should the ETO check first?",
    "a": "Check the operating hours on the Magnetron; if it exceeds 5000-8000 hours, it is likely depleted and must be replaced",
    "opts": [
      "Reboot the ARPA software",
      "Check the operating hours on the Magnetron; if it exceeds 5000-8000 hours, it is likely depleted and must be replaced",
      "Check the ship's battery voltage",
      "Scrub the radar screen with alcohol"
    ],
    "exp": "A dying magnetron outputs less power. Less power out means weaker echoes back. The picture fades away over months. The Performance Monitor proves it's a hardware failure, not just bad weather.",
    "cat": "RADAR",
    "id": "T13B_137"
  },
  {
    "q": "What is the typical rotational speed of a marine radar antenna?",
    "a": "24 to 28 RPM (Revolutions Per Minute)",
    "opts": [
      "100 to 120 RPM",
      "24 to 28 RPM (Revolutions Per Minute)",
      "1 to 5 RPM",
      "3000 RPM"
    ],
    "exp": "This speed is a compromise. Fast enough to update the screen rapidly so moving ships don't 'jump', but slow enough to allow the radar beam to paint enough pulses onto a distant target to get a solid echo.",
    "cat": "RADAR",
    "id": "T13B_138"
  },
  {
    "q": "What happens if the motor turning the scanner antenna burns out?",
    "a": "The scanner stops, the screen stops painting a circle, and usually paints a single bright line representing the last heading; the transceiver is usually interlocked to shut down to prevent burning out the stationary waveguide",
    "opts": [
      "The scanner stops, the screen stops painting a circle, and usually paints a single bright line representing the last heading; the transceiver is usually interlocked to shut down to prevent burning out the stationary waveguide",
      "The screen goes completely black",
      "The magnetron explodes",
      "The radar switches to an internal backup motor"
    ],
    "exp": "If the antenna stops spinning, you are blasting 25kW of microwave energy in one single direction. This is a severe radiation hazard to crew standing in that path, so the system normally trips.",
    "cat": "RADAR",
    "id": "T13B_139"
  },
  {
    "q": "Why must the radar display have an input from the ship's Gyrocompass?",
    "a": "To provide 'North Up' or 'True Motion' stabilization; without it, the radar only knows 'Head Up' (relative to the ship's bow), making tracking landmasses and other ships highly disorienting when the ship turns",
    "opts": [
      "To calculate the depth of the water",
      "To provide 'North Up' or 'True Motion' stabilization; without it, the radar only knows 'Head Up' (relative to the ship's bow), making tracking landmasses and other ships highly disorienting when the ship turns",
      "To align the magnetron frequencies",
      "To power the display screen"
    ],
    "exp": "If you turn your ship 90 degrees right in 'Head Up' mode, the entire world on the radar screen spins 90 degrees left. Giving the radar a True North gyro feed locks the map in place, so only your ship's icon turns.",
    "cat": "RADAR",
    "id": "T13B_140"
  },
  {
    "q": "What is a 'Solid State' Radar (e.g., Broadband or FMCW radar)?",
    "a": "A modern radar that eliminates the magnetron vacuum tube entirely, using solid-state transistors to emit a continuous, low-power frequency-sweeping signal; it requires far less maintenance and has no radiation hazard",
    "opts": [
      "A modern radar that eliminates the magnetron vacuum tube entirely, using solid-state transistors to emit a continuous, low-power frequency-sweeping signal; it requires far less maintenance and has no radiation hazard",
      "A radar that only detects solid landmasses, ignoring ships",
      "A radar built entirely out of a single block of steel",
      "A radar that relies on solid wire instead of waveguides"
    ],
    "exp": "Magnetrons are loud, high-voltage, and die every few years. Solid-state radars use cell-phone technology. They transmit a tiny fraction of the power but use brilliant software to achieve the same picture, with zero maintenance.",
    "cat": "RADAR",
    "id": "T13B_141"
  },
  {
    "q": "What is the primary fundamental objective of the GMDSS system?",
    "a": "To guarantee that a ship in distress can rapidly and automatically alert shore-based Rescue Coordination Centres (RCCs) and nearby vessels, ensuring no ship sinks in silence",
    "opts": [
      "To track the exact amount of cargo loaded onboard",
      "To automate the steering of the ship",
      "To guarantee that a ship in distress can rapidly and automatically alert shore-based Rescue Coordination Centres (RCCs) and nearby vessels, ensuring no ship sinks in silence",
      "To provide high-speed internet to the crew"
    ],
    "exp": "Before GMDSS, if a ship sank fast and the radio operator didn't have time to tap out Morse Code SOS, they vanished. GMDSS uses automated satellite push-buttons (DSC, EPIRB) to instantly scream for help globally.",
    "cat": "GMDSS",
    "id": "T13B_142"
  },
  {
    "q": "How is the carriage requirement for GMDSS equipment determined for a specific ship?",
    "a": "It is dictated entirely by the 'Sea Area' (A1, A2, A3, A4) the ship operates in, NOT by the size or tonnage of the ship",
    "opts": [
      "By the Gross Tonnage (GT) of the ship",
      "It is dictated entirely by the 'Sea Area' (A1, A2, A3, A4) the ship operates in, NOT by the size or tonnage of the ship",
      "By the number of crew members onboard",
      "By the flag state of the vessel"
    ],
    "exp": "A massive 300,000-ton ship sailing exclusively 10 miles off the coast of Florida (Area A1) needs less radio equipment than a tiny 500-ton tugboat crossing the deep Atlantic (Area A3).",
    "cat": "GMDSS",
    "id": "T13B_143"
  },
  {
    "q": "What defines GMDSS Sea Area A1?",
    "a": "An area within the radiotelephone coverage of at least one VHF coast station in which continuous DSC alerting is available (typically 20-30 nautical miles offshore)",
    "opts": [
      "Global satellite coverage",
      "Coverage provided by Medium Frequency (MF) stations",
      "An area within the radiotelephone coverage of at least one VHF coast station in which continuous DSC alerting is available (typically 20-30 nautical miles offshore)",
      "Any port or harbor limits"
    ],
    "exp": "VHF is line-of-sight. As long as you can clearly 'see' the shore antenna with your radio waves (about 30 miles), you are in A1.",
    "cat": "GMDSS",
    "id": "T13B_144"
  },
  {
    "q": "What defines GMDSS Sea Area A2?",
    "a": "An area, excluding Area A1, within the radiotelephone coverage of at least one Medium Frequency (MF) coast station providing continuous DSC alerting (typically up to 100-150 nm offshore)",
    "opts": [
      "Any area beyond 200 nautical miles",
      "The polar regions above 70 degrees North",
      "Any area covered by INMARSAT satellites",
      "An area, excluding Area A1, within the radiotelephone coverage of at least one Medium Frequency (MF) coast station providing continuous DSC alerting (typically up to 100-150 nm offshore)"
    ],
    "exp": "Medium Frequency waves bounce off the ground and travel further than VHF. A2 extends your safety net out to about 150 miles from the coast.",
    "cat": "GMDSS",
    "id": "T13B_145"
  },
  {
    "q": "What defines GMDSS Sea Area A3?",
    "a": "An area, excluding Areas A1 and A2, within the coverage of a Recognized Mobile Satellite Service (RMSS) like INMARSAT, providing continuous alerting (roughly 70°N to 70°S)",
    "opts": [
      "An area, excluding Areas A1 and A2, within the coverage of a Recognized Mobile Satellite Service (RMSS) like INMARSAT, providing continuous alerting (roughly 70°N to 70°S)",
      "Any area within High Frequency (HF) radio range",
      "The area strictly covering the North and South Poles",
      "An area covering only the Atlantic Ocean"
    ],
    "exp": "Inmarsat geostationary satellites sit over the equator. They can see almost the whole planet, except for the extreme top and bottom curves of the earth (the poles). This covers 95% of deep-sea shipping.",
    "cat": "GMDSS",
    "id": "T13B_146"
  },
  {
    "q": "What defines GMDSS Sea Area A4?",
    "a": "The polar regions; any area outside of A1, A2, and A3 (typically above 70° North or South), requiring High Frequency (HF) radio with DSC for long-range communication",
    "opts": [
      "The polar regions; any area outside of A1, A2, and A3 (typically above 70° North or South), requiring High Frequency (HF) radio with DSC for long-range communication",
      "The Panama and Suez Canals",
      "Any area requiring armed piracy guards",
      "The Mediterranean Sea"
    ],
    "exp": "Geostationary satellites can't 'see' over the top of the globe. If an icebreaker goes to the North Pole (A4), they lose INMARSAT. They MUST rely on HF (High Frequency) radio waves bouncing off the ionosphere to call for help.",
    "cat": "GMDSS",
    "id": "T13B_147"
  },
  {
    "q": "What is DSC (Digital Selective Calling)?",
    "a": "A paging system that automates distress alerting; pressing a button sends a digital burst containing the ship's MMSI and GPS position to all stations, ringing loud alarms on their bridges",
    "opts": [
      "A paging system that automates distress alerting; pressing a button sends a digital burst containing the ship's MMSI and GPS position to all stations, ringing loud alarms on their bridges",
      "A voice-scrambling technology for secure comms",
      "A satellite video broadcasting system",
      "A system that prints weather charts"
    ],
    "exp": "Before DSC, you had to speak into the mic 'Mayday, Mayday' and hope someone was listening. DSC sends a digital text message that forcibly triggers a blaring siren on every ship in range, forcing them to look at your coordinates.",
    "cat": "GMDSS",
    "id": "T13B_148"
  },
  {
    "q": "On what specific frequency does VHF DSC operate?",
    "a": "VHF Channel 70 (156.525 MHz)",
    "opts": [
      "406 MHz",
      "VHF Channel 16 (156.800 MHz)",
      "2182 kHz",
      "VHF Channel 70 (156.525 MHz)"
    ],
    "exp": "Channel 16 is for VOICE distress. Channel 70 is strictly reserved worldwide for digital DSC data bursts. You cannot speak on Channel 70.",
    "cat": "GMDSS",
    "id": "T13B_149"
  },
  {
    "q": "On what specific frequency does Medium Frequency (MF) DSC operate?",
    "a": "2187.5 kHz",
    "opts": [
      "2182.0 kHz",
      "4209.5 kHz",
      "518.0 kHz",
      "2187.5 kHz"
    ],
    "exp": "2182 kHz is the MF voice distress frequency. 2187.5 kHz is the dedicated MF digital DSC frequency.",
    "cat": "GMDSS",
    "id": "T13B_150"
  },
  {
    "q": "What is the SOLAS requirement for the 'Reserve Source of Energy' (GMDSS Batteries) duration if the ship has a working Emergency Generator?",
    "a": "The batteries must power the entire GMDSS radio station for a minimum of 1 Hour during a total blackout",
    "opts": [
      "Minimum of 15 Minutes",
      "Minimum of 6 Hours",
      "Minimum of 24 Hours",
      "Minimum of 1 Hour"
    ],
    "exp": "If the ship has an emergency generator that starts in 45 seconds, the batteries only need to cover the brief gap and provide a 1-hour ultimate fail-safe. If the ship has NO emergency generator (rare), the batteries must last 6 hours.",
    "cat": "GMDSS",
    "id": "T13B_151"
  },
  {
    "q": "How must the GMDSS battery charger be designed according to SOLAS regulations?",
    "a": "It must be an automatic charger, capable of recharging completely depleted batteries to minimum capacity within 10 hours",
    "opts": [
      "It must be an automatic charger, capable of recharging completely depleted batteries to minimum capacity within 10 hours",
      "It must charge the batteries in under 1 hour",
      "It must run exclusively on solar power",
      "It must be a manual trickle charger"
    ],
    "exp": "The charger must automatically keep the 24V bank topped up. If the ship drains them, the charger must be powerful enough to force them back to full health in less than a 10-hour shift.",
    "cat": "GMDSS",
    "id": "T13B_152"
  },
  {
    "q": "What happens if a navigating officer presses the covered red 'DISTRESS' button on the INMARSAT-C terminal for 5 seconds?",
    "a": "An un-formatted distress alert (containing MMSI and GPS position) is instantly transmitted to a Rescue Coordination Centre (RCC) via satellite",
    "opts": [
      "It dials the ship owner's phone number directly",
      "An un-formatted distress alert (containing MMSI and GPS position) is instantly transmitted to a Rescue Coordination Centre (RCC) via satellite",
      "It erases all data on the voyage data recorder",
      "It sounds the ship's general fire alarm"
    ],
    "exp": "Every piece of GMDSS gear has a red button with a flap over it. Holding it for 5 seconds bypasses all menus and fires a 'help me right now, here are my coordinates' message directly to military/coast guard authorities.",
    "cat": "GMDSS",
    "id": "T13B_153"
  },
  {
    "q": "What specific ETO check is mandated DAILY for the GMDSS equipment?",
    "a": "Check the battery voltage on load/off load, and perform an internal self-test on the VHF DSC without transmitting",
    "opts": [
      "Check the battery voltage on load/off load, and perform an internal self-test on the VHF DSC without transmitting",
      "Climb the mast to grease the radar antenna",
      "Replace the EPIRB battery",
      "Transmit a live distress call to shore"
    ],
    "exp": "Daily checks prove the batteries have 24V and the radios turn on. You must log the voltages in the GMDSS logbook.",
    "cat": "GMDSS",
    "id": "T13B_154"
  },
  {
    "q": "What specific GMDSS test is mandated WEEKLY?",
    "a": "A live DSC test call must be made to a coast radio station (via MF/HF) to prove the transmitter can physically reach the shore",
    "opts": [
      "A live DSC test call must be made to a coast radio station (via MF/HF) to prove the transmitter can physically reach the shore",
      "A complete discharge of the battery bank",
      "Firing a distress flare",
      "Testing the lifeboat engines"
    ],
    "exp": "Internal self-tests don't prove the antenna isn't broken. Once a week, the officer must ping a real coast guard tower and wait for the digital 'acknowledged' reply.",
    "cat": "GMDSS",
    "id": "T13B_155"
  },
  {
    "q": "What specific ETO maintenance is mandated MONTHLY for the GMDSS batteries (if they are Lead-Acid)?",
    "a": "Check the electrolyte levels, clean the terminals, and measure the specific gravity of the acid in every single cell using a hydrometer",
    "opts": [
      "Replace the acid with fresh seawater",
      "Short circuit the terminals to burn off corrosion",
      "Check the electrolyte levels, clean the terminals, and measure the specific gravity of the acid in every single cell using a hydrometer",
      "Paint the batteries red"
    ],
    "exp": "Voltage lies. A dead battery can show 24V but drop to 10V the moment you key the radio. Measuring the acid density (specific gravity) is the only scientific proof that the lead plates hold a genuine charge.",
    "cat": "GMDSS",
    "id": "T13B_156"
  },
  {
    "q": "Under the 2024 GMDSS updates, what is the status of NBDP (Narrow Band Direct Printing / Telex)?",
    "a": "It is no longer a mandatory carriage requirement; ships are no longer forced to use or maintain HF Telex machines for GMDSS certification",
    "opts": [
      "It is now the primary mode of distress communication",
      "It is no longer a mandatory carriage requirement; ships are no longer forced to use or maintain HF Telex machines for GMDSS certification",
      "It must be upgraded to color printers",
      "It is mandatory only in Sea Area A1"
    ],
    "exp": "Telex is ancient technology. With advanced satellite internet and modern DSC, the IMO finally recognized that forcing ships to maintain clunky 1980s telex printers for MF/HF was pointless.",
    "cat": "GMDSS",
    "id": "T13B_157"
  },
  {
    "q": "What does the term 'Duplication of Equipment' mean regarding GMDSS compliance for ships in Area A3?",
    "a": "To ensure absolute reliability without a dedicated radio officer, the ship must carry TWO complete sets of long-range equipment (e.g., Two INMARSAT-C terminals, or One INMARSAT and One full MF/HF DSC setup)",
    "opts": [
      "The ship must carry two EPIRBs",
      "The ship must carry a spare battery for every radio",
      "The ship must have two radars",
      "To ensure absolute reliability without a dedicated radio officer, the ship must carry TWO complete sets of long-range equipment (e.g., Two INMARSAT-C terminals, or One INMARSAT and One full MF/HF DSC setup)"
    ],
    "exp": "You have three choices to meet maintenance criteria: At-sea repair (requires a highly trained ETO with spare boards), Shore-based maintenance, or Duplication. Duplication is the industry standard. If Radio A breaks mid-ocean, you just turn on Radio B.",
    "cat": "GMDSS",
    "id": "T13B_158"
  },
  {
    "q": "What is the SOLAS requirement regarding Two-Way Portable VHF Radios (Walkie-Talkies) for survival craft?",
    "a": "Cargo ships >500 GT must carry at least 3 portable VHFs, kept fully charged and stored in a prominent place (usually the bridge) ready to be grabbed during abandon ship",
    "opts": [
      "Must transmit on 406 MHz",
      "Must be permanently mounted inside the liferafts",
      "Cargo ships >500 GT must carry at least 3 portable VHFs, kept fully charged and stored in a prominent place (usually the bridge) ready to be grabbed during abandon ship",
      "Must carry 1 radio per crew member"
    ],
    "exp": "These are the yellow/orange bricks you see on the bridge. If you abandon ship, the SART tells them where you are, but the portable VHF lets you actually talk to the helicopter pilot to coordinate the hoist.",
    "cat": "GMDSS",
    "id": "T13B_159"
  },
  {
    "q": "What is the strict rule regarding the primary (sealed) batteries for the Two-Way Portable VHF radios?",
    "a": "They must have a bright, unbroken factory seal (often yellow or orange) and a clear expiry date; they MUST NEVER be used for routine onboard work, ensuring 100% capacity for an actual emergency",
    "opts": [
      "They must have a bright, unbroken factory seal (often yellow or orange) and a clear expiry date; they MUST NEVER be used for routine onboard work, ensuring 100% capacity for an actual emergency",
      "They can be used for cargo operations if the main radios break",
      "They must be recharged every Friday",
      "They must be kept in the refrigerator"
    ],
    "exp": "Surveyors check the seals. If the seal on the lithium battery is broken, it means a deckhand used the emergency radio to talk during mooring, draining the battery. In a real sinking, it would die in 10 minutes. Ships carry separate rechargeable batteries for daily drills.",
    "cat": "GMDSS",
    "id": "T13B_160"
  },
  {
    "q": "What is the consequence of touching the transmitting antenna of an HF (High Frequency) radio during a GMDSS test?",
    "a": "Severe RF (Radio Frequency) burns and electric shock; the transmitter pushes massive voltage (up to 1000V) into the antenna wire",
    "opts": [
      "Severe RF (Radio Frequency) burns and electric shock; the transmitter pushes massive voltage (up to 1000V) into the antenna wire",
      "The ship will blackout",
      "The antenna will instantly rust",
      "The radio will lose its MMSI programming"
    ],
    "exp": "HF radios are powerful (150 to 500 Watts). They turn that power into high voltage at the antenna base. Grabbing the wire while someone keys the microphone will literally cook your hand.",
    "cat": "GMDSS",
    "id": "T13B_161"
  },
  {
    "q": "Why is it absolutely critical that HF/MF transmitting and receiving antennas are separated as far as possible on the ship's superstructure?",
    "a": "To prevent the massive 500W transmission pulse from feeding directly into the highly sensitive receiving antenna and instantly burning out the receiver circuits",
    "opts": [
      "To prevent lightning from striking both at once",
      "Because they operate on completely different voltages",
      "To satisfy aesthetic symmetry rules",
      "To prevent the massive 500W transmission pulse from feeding directly into the highly sensitive receiving antenna and instantly burning out the receiver circuits"
    ],
    "exp": "If the 'mouth' (Tx antenna) is right next to the 'ear' (Rx antenna), the shout will blow the ear drum. Distance provides physical attenuation to protect the electronics.",
    "cat": "GMDSS",
    "id": "T13B_162"
  },
  {
    "q": "What maintenance must the ETO perform on the base insulators of the MF/HF whip antennas?",
    "a": "They must be regularly washed with fresh water to remove thick salt and soot deposits, which would otherwise act as a conductor, short-circuiting the radio signal directly into the steel deck",
    "opts": [
      "They must be painted with thick lead paint",
      "They must be greased with heavy marine lube",
      "They must be regularly washed with fresh water to remove thick salt and soot deposits, which would otherwise act as a conductor, short-circuiting the radio signal directly into the steel deck",
      "They must be replaced every 6 months"
    ],
    "exp": "Salt is highly conductive. If a thick crust of salt bridges the ceramic insulator, the 500W radio signal takes the path of least resistance right into the ship's hull, and the antenna radiates nothing into the sky.",
    "cat": "GMDSS",
    "id": "T13B_163"
  },
  {
    "q": "If the ship suffers a complete blackout, how does the GMDSS console maintain power without human intervention?",
    "a": "The console power supply unit features an automatic changeover relay; when 220V AC drops, it instantly clicks over, drawing 24V DC directly from the dedicated radio battery bank",
    "opts": [
      "The console shuts down and reboots in battery mode",
      "It uses a hand-crank dynamo on the side of the desk",
      "The console power supply unit features an automatic changeover relay; when 220V AC drops, it instantly clicks over, drawing 24V DC directly from the dedicated radio battery bank",
      "The ETO must manually run up to the bridge and flip a switch"
    ],
    "exp": "Communication cannot be interrupted. The seamless relay click ensures the officer mid-sentence on the VHF during a collision/blackout does not lose their connection to the Coast Guard.",
    "cat": "GMDSS",
    "id": "T13B_164"
  },
  {
    "q": "What is the function of the Antenna Tuning Unit (ATU) located at the base of the MF/HF antenna?",
    "a": "It automatically adjusts internal capacitors and inductors to match the electrical impedance of the antenna to the specific frequency being transmitted, ensuring maximum power transfer and preventing reflected waves (high SWR)",
    "opts": [
      "It points the antenna towards the nearest satellite",
      "It automatically adjusts internal capacitors and inductors to match the electrical impedance of the antenna to the specific frequency being transmitted, ensuring maximum power transfer and preventing reflected waves (high SWR)",
      "It filters out static noise from thunderstorms",
      "It translates digital DSC data into analog voice"
    ],
    "exp": "An antenna's physical length determines its resonant frequency. Since you can't stretch or shrink the metal whip to match the different HF bands (4MHz vs 16MHz), the ATU uses electronics to artificially 'lengthen' or 'shorten' it.",
    "cat": "GMDSS",
    "id": "T13B_165"
  },
  {
    "q": "What is 'Enhanced Group Call' (EGC) or SafetyNET within the GMDSS?",
    "a": "A satellite-based service (via INMARSAT-C) that broadcasts maritime safety information (weather, nav warnings) to ships outside the range of coastal NAVTEX stations",
    "opts": [
      "A satellite-based service (via INMARSAT-C) that broadcasts maritime safety information (weather, nav warnings) to ships outside the range of coastal NAVTEX stations",
      "A distress beacon attached to the lifebuoy",
      "A system that groups all the alarms onto one screen",
      "A VHF channel used for inter-ship chatting"
    ],
    "exp": "If you sail into the middle of the Atlantic (Area A3), NAVTEX (which only reaches 300 miles from shore) stops working. The satellite EGC takes over, printing the exact same types of weather and hazard warnings.",
    "cat": "GMDSS",
    "id": "T13B_166"
  },
  {
    "q": "What must the Master or navigating officer do immediately if they accidentally press the DSC distress button?",
    "a": "Instantly switch off the transmitter to abort further transmissions, tune the radio to the associated voice distress channel (e.g., Ch 16), and broadcast an 'ALL STATIONS' message explicitly canceling the false alert",
    "opts": [
      "Instantly switch off the transmitter to abort further transmissions, tune the radio to the associated voice distress channel (e.g., Ch 16), and broadcast an 'ALL STATIONS' message explicitly canceling the false alert",
      "Pull the fire alarm to justify the call",
      "Turn off the ship's main power and hide",
      "Wait for the coast guard to call and apologize"
    ],
    "exp": "A false DSC alert triggers global chaos. You must get on the voice radio immediately and clearly state 'CANCEL MY DISTRESS ALERT OF [TIME], THIS IS A FALSE ALARM' before they launch search planes.",
    "cat": "GMDSS",
    "id": "T13B_167"
  },
  {
    "q": "Where must the GMDSS Reserve Source of Energy (Radio Batteries) be physically located on the ship?",
    "a": "In the highest part of the ship (usually above the bridge deck) to remain above the waterline as long as possible if the ship sinks, allowing final distress calls to be made",
    "opts": [
      "Inside the Captain's cabin",
      "In the engine room next to the main switchboard",
      "In the forward bow thruster room",
      "In the highest part of the ship (usually above the bridge deck) to remain above the waterline as long as possible if the ship sinks, allowing final distress calls to be made"
    ],
    "exp": "If the batteries are in the engine room, a hull breach kills the radio instantly. Keeping them on the roof means the Captain can keep transmitting coordinates on the VHF until the water literally washes over the bridge windows.",
    "cat": "GMDSS",
    "id": "T13B_168"
  },
  {
    "q": "What is the primary danger requiring adequate ventilation in the GMDSS battery room?",
    "a": "Lead-acid batteries emit highly explosive Hydrogen gas while being charged; without ventilation, the gas accumulates at the ceiling and can be ignited by a single spark",
    "opts": [
      "Lead-acid batteries emit highly explosive Hydrogen gas while being charged; without ventilation, the gas accumulates at the ceiling and can be ignited by a single spark",
      "The acid evaporates and rusts the steel deck",
      "Batteries overheat and melt the plastic cases",
      "Batteries emit toxic chlorine gas"
    ],
    "exp": "Hydrogen is lighter than air and wildly explosive. The battery locker must have a vent to the open atmosphere. An ETO must never enter a poorly ventilated battery locker with a flashlight or non-Ex tools.",
    "cat": "GMDSS",
    "id": "T13B_169"
  },
  {
    "q": "What is the function of the 'Squelch' control on a GMDSS VHF radio?",
    "a": "It sets an electronic threshold that mutes the continuous, annoying background static noise, only opening the audio speaker when a strong, genuine radio transmission breaks the threshold",
    "opts": [
      "It scrambles the voice for privacy",
      "It automatically changes the channel to 16",
      "It boosts the transmission power to 25 Watts",
      "It sets an electronic threshold that mutes the continuous, annoying background static noise, only opening the audio speaker when a strong, genuine radio transmission breaks the threshold"
    ],
    "exp": "Without squelch, the bridge would be filled with the loud, hissing sound of cosmic background radiation 24/7. Turning the squelch knob silences the hiss, making the radio quiet until someone actually speaks.",
    "cat": "GMDSS",
    "id": "T13B_170"
  },
  {
    "q": "Why do surveyors heavily scrutinize the GMDSS Logbook during an inspection?",
    "a": "It is a statutory legal document; it proves that the ETO and Deck Officers are actually maintaining the equipment and conducting the daily/weekly tests required to ensure the ship's safety lifeline is functional",
    "opts": [
      "To see how much fuel the emergency generator used",
      "To check the captain's handwriting",
      "It is a statutory legal document; it proves that the ETO and Deck Officers are actually maintaining the equipment and conducting the daily/weekly tests required to ensure the ship's safety lifeline is functional",
      "To check for spelling errors"
    ],
    "exp": "If the ship sinks and the EPIRB doesn't work, investigators will check the logbook. If the ETO signed 'Tested OK' yesterday but the battery was actually dead for a year, it is a criminal falsification.",
    "cat": "GMDSS",
    "id": "T13B_171"
  },
  {
    "q": "Doppler log operating frequency range?",
    "a": "100–300 kHz (ultrasonic)",
    "opts": [
      "3–9 GHz (microwave - that is radar)",
      "518–490 kHz (medium frequency - that is NAVTEX)",
      "100–300 kHz (ultrasonic)",
      "406–121.5 MHz (VHF - that is EPIRB)"
    ],
    "exp": "Doppler logs use ultrasonic acoustic pulses at 100-300 kHz transmitted at ~30° angle to measure Doppler frequency shift from speed. Lower frequency = deeper penetration (bottom tracking). Higher frequency = better resolution. Not radar (GHz), not radio (MHz for NAVTEX/EPIRB).",
    "cat": "DOPPLER",
    "id": "T14B_011"
  },
  {
    "q": "Difference between Doppler log bottom tracking and water tracking modes?",
    "a": "Bottom tracking reflects off seabed = Speed Over Ground (SOG) up to ~200m depth; water tracking reflects off subsurface layer = Speed Through Water (STW)",
    "opts": [
      "Bottom tracks reverse; water tracks forward speed only",
      "Bottom uses S-band; water uses X-band radar frequencies",
      "Both give same speed - different redundant measurements",
      "Bottom tracking reflects off seabed = Speed Over Ground (SOG) up to ~200m depth; water tracking reflects off subsurface layer = Speed Through Water (STW)"
    ],
    "exp": "Bottom tracking: pulses bounce off solid seabed → absolute Speed Over Ground (not affected by currents). Valid to ~200m depth. Water tracking: pulses bounce off subsurface water layer (~10-20m deep) → Speed Through Water (influenced by current). When water depth >200m, log automatically switches to water tracking mode.",
    "cat": "DOPPLER",
    "id": "T14B_012"
  },
  {
    "q": "Why does a Doppler log use Janus configuration (transducers at equal and opposite angles)?",
    "a": "Cancels measurement errors from variations in sound speed caused by temperature and salinity changes",
    "opts": [
      "Prevents marine growth on transducer faces with crossing shockwaves",
      "Allows simultaneous VTS shore station communication",
      "Provides redundancy if ship runs aground",
      "Cancels measurement errors from variations in sound speed caused by temperature and salinity changes"
    ],
    "exp": "Forward-pointing beam: f_received = f_transmitted × (1 + v×cosθ/c). Aft-pointing beam: f_received = f_transmitted × (1 - v×cosθ/c). By averaging/differencing, the speed of sound (c) cancels out - eliminating errors from temperature/salinity variations in sound speed. Also cancels ship pitch effects.",
    "cat": "DOPPLER",
    "id": "T14B_013"
  },
  {
    "q": "Piezoelectric effect in echo sounder transducer?",
    "a": "Electrical voltage deforms crystal to transmit (reverse effect); returning acoustic pressure generates voltage to receive (direct effect)",
    "opts": [
      "Seebeck effect - cold seawater reacts with hot transducer face to generate radar pulse",
      "Photoelectric effect - seabed light extinction converted to electrical current",
      "Hall effect - Earth's magnetic field distorted by seabed induces voltage",
      "Electrical voltage deforms crystal to transmit (reverse effect); returning acoustic pressure generates voltage to receive (direct effect)"
    ],
    "exp": "PZT (lead zirconate titanate) crystal: Reverse piezoelectric = apply voltage → crystal mechanically deforms → generates pressure wave (transmit). Direct piezoelectric = sound pressure wave compresses crystal → generates voltage (receive). Same crystal does both. Also the principle in hydrophones, pressure gauges, and some accelerometers.",
    "cat": "ECHO_SOUNDER",
    "id": "T14B_014"
  },
  {
    "q": "Echo sounder: two-way travel time = 0.1 seconds. Water depth?",
    "a": "75 metres (1500 × 0.1 / 2 = 75)",
    "opts": [
      "150 metres (forgot to divide by 2)",
      "300 metres",
      "15 metres",
      "75 metres (1500 × 0.1 / 2 = 75)"
    ],
    "exp": "Depth = (speed of sound × time) / 2 = (1500 m/s × 0.1 s) / 2 = 75 m. Or use: Depth = 750 × t = 750 × 0.1 = 75 m. Divide by 2 because the sound travels down AND up (two-way). Speed of sound in seawater ≈ 1500 m/s (varies with temperature and salinity).",
    "cat": "ECHO_SOUNDER",
    "id": "T14B_015"
  },
  {
    "q": "Frequency choice for deep ocean echo sounder?",
    "a": "3–12 kHz (lower frequency = less attenuation = deeper penetration)",
    "opts": [
      "30–50 kHz (high resolution shallow water)",
      "100–300 kHz (Doppler log frequency)",
      "9 GHz (radar frequency)",
      "3–12 kHz (lower frequency = less attenuation = deeper penetration)"
    ],
    "exp": "Lower frequency sound waves attenuate less in water and can penetrate thousands of metres. 3-12 kHz for deep sea. 30-50 kHz for harbour/shallow water high resolution. 100-300 kHz for Doppler logs (short range). As frequency doubles, range halves approximately.",
    "cat": "ECHO_SOUNDER",
    "id": "T14B_016"
  },
  {
    "q": "SOLAS carriage requirement for VDR (Voyage Data Recorder)?",
    "a": "All passenger ships >150 GT and cargo ships >3000 GT built after July 2002",
    "opts": [
      "Only oil/chemical tankers >10,000 GT",
      "All vessels regardless of size beyond Sea Area A1",
      "Only RoRo passenger ferries in polar waters",
      "All passenger ships >150 GT and cargo ships >3000 GT built after July 2002"
    ],
    "exp": "SOLAS V/20: Full VDR mandatory for passenger ships >150 GT and cargo ships >3000 GT built after July 2002. Older cargo ships >3000 GT require Simplified VDR (S-VDR). Annual performance test required. Orange float-free capsule withstands 260°C for 10 hours and 6000m water pressure.",
    "cat": "VDR",
    "id": "T14B_019"
  },
  {
    "q": "Some of the 12 mandatory VDR inputs per IEC 61996?",
    "a": "Date/time, GPS position, speed, heading, bridge audio, VHF comms, RADAR, engine telegraph orders",
    "opts": [
      "Engine oil pressure, cargo tank levels, purifier RPM, sewage treatment status",
      "Hull thickness, paint condition, anchor chain length, provisions inventory",
      "Date/time, GPS position, speed, heading, bridge audio, VHF comms, RADAR, engine telegraph orders",
      "Galley temperature, crew internet usage, ballast salinity, ICCP anode wear"
    ],
    "exp": "12 mandatory VDR inputs: date/time UTC, GPS position, SOG, STW, gyro heading, bridge audio (microphones), VHF radio audio, RADAR (video), AIS data, ECDIS display, rudder order/response, engine telegraph order/response. The VDR records navigational data only - not machinery or domestic systems.",
    "cat": "VDR",
    "id": "T14B_020"
  },
  {
    "q": "Two physical properties of a gyroscope that allow a gyrocompass to seek True North?",
    "a": "Gyroscopic inertia (rigidity in space) and precession",
    "opts": [
      "Magnetic deviation and local variation",
      "Coriolis effect and centrifugal force",
      "Doppler frequency shift and amplitude modulation",
      "Gyroscopic inertia (rigidity in space) and precession"
    ],
    "exp": "Rigidity in space: spinning gyro maintains its axis direction in inertial space. Precession: force applied to a spinning gyro causes movement 90° ahead in direction of rotation. Earth's gravity and rotation apply forces that cause the gyro axis to slowly precess and settle pointing at True North meridian.",
    "cat": "GYROCOMPASS",
    "id": "T14B_017"
  },
  {
    "q": "Why must a gyrocompass be powered on well before departure?",
    "a": "Takes 2–6 hours to settle on True North from cold start due to precession damping",
    "opts": [
      "Rotor oil must heat to 150°C before bearings rotate safely",
      "Needs to download magnetic variation tables from GPS satellites",
      "Backup batteries require 12-hour trickle charge",
      "Takes 2–6 hours to settle on True North from cold start due to precession damping"
    ],
    "exp": "From cold start, the gyro axis oscillates around True North while damping forces gradually reduce the oscillation amplitude. This settling process takes 2-6 hours depending on latitude. If used before settled: large heading errors possible. Never cut gyro power without notifying bridge - resettling takes hours.",
    "cat": "GYROCOMPASS",
    "id": "T14B_018"
  }

]);

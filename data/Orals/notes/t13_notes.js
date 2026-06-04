window.loadNotes("T13", `<div class="view" id="view-notes-t13">
<div class="note-doc">
  <div style="margin-bottom:16px;display:flex;justify-content:space-between">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T13')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 13 - Bridge Equipment I</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">RADAR · ARPA · GMDSS</span>
      <span class="tag tag-purple">EPIRB · SART · VHF · NAVTEX</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-radar')">RADAR</button>
    <button class="anc-btn" onclick="jumpTo('s-gmdss')">GMDSS</button>
    <button class="anc-btn" onclick="jumpTo('s-epirb')">EPIRB</button>
    <button class="anc-btn" onclick="jumpTo('s-sart')">SART</button>
    <button class="anc-btn" onclick="jumpTo('s-vhf')">VHF &amp; NAVTEX</button>
    <button class="anc-btn" onclick="jumpTo('s-battery')">GMDSS Battery</button>
    <button class="anc-btn" onclick="jumpTo('s-radar-full')">RADAR Detail</button>
    <button class="anc-btn" onclick="jumpTo('s-gmdss-full')">GMDSS Detail</button>
    <button class="anc-btn" onclick="jumpTo('s-epirb-sart-full')">EPIRB/SART Detail</button>
    <button class="anc-btn" onclick="jumpTo('s-gmdss-2024')">2024 GMDSS</button>
    <button class="anc-btn" onclick="jumpTo('s-ais')">AIS</button>
    <button class="anc-btn" onclick="jumpTo('s-doppler')">Doppler</button>
    <button class="anc-btn" onclick="jumpTo('s-echosounder')">Echo Sounder</button>
    <button class="anc-btn" onclick="jumpTo('s-gyro')">Gyrocompass</button>
    <button class="anc-btn" onclick="jumpTo('s-bnwas')">BNWAS/VDR/SSAS</button>
    <button class="anc-btn" onclick="jumpTo('s-navlights')">Nav Lights</button>
    <button class="anc-btn" onclick="jumpTo('s-steeringmodes')">Steering Modes</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  <div class="n-h1" id="s-radar">📡 RADAR - Working Principle &amp; Bands</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask RADAR working, X-band vs S-band difference, and SOLAS carriage requirements.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> RADAR (Radio Detection And Ranging) transmits short pulses of high-frequency microwave energy from a rotating antenna. Echoes reflected from targets are received. Range is calculated from two-way travel time.</div></div>

  <div class="n-formula">Range = (c × t) / 2<div class="label">c = speed of light (3×10⁸ m/s) · t = two-way travel time · 1 µs delay = 150 m range</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Key components:</strong> <strong>Magnetron</strong> - high-power microwave vacuum tube, generates pulses at <span class="n-val">10–50 kW</span> peak for <span class="n-val">0.05–1 µs</span>. <strong>T/R Cell (Duplexer)</strong> - electronic switch, connects antenna to transmitter during pulse, disconnects sensitive receiver to protect it. <strong>Minimum range (blind spot)</strong>: <span class="n-val">15–50 m</span> - targets below antenna cannot be detected during transmission due to pulse length and T/R recovery time.</div></div>

  <div class="n-h2">X-Band vs S-Band</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>X-Band</th><th>S-Band</th></tr>
    <tr><td>Frequency</td><td class="hl"><span class="n-val">9 GHz</span> (9200–9500 MHz)</td><td class="hl"><span class="n-val">3 GHz</span> (2900–3100 MHz)</td></tr>
    <tr><td>Wavelength</td><td class="hl"><span class="n-val">3 cm</span></td><td class="hl"><span class="n-val">10 cm</span></td></tr>
    <tr><td>Resolution / target discrimination</td><td class="ok">High - excellent for small targets</td><td class="bad">Lower resolution</td></tr>
    <tr><td>Rain/fog penetration</td><td class="bad">Poor - 3 cm attenuated by rain</td><td class="ok">Good - 10 cm penetrates rain and fog</td></tr>
    <tr><td>Antenna size</td><td class="ok"><span class="n-val">1.2–3.7 m</span> scanner</td><td class="bad"><span class="n-val">3.7–5.5 m</span> scanner (larger for same beam width)</td></tr>
    <tr><td>Best for</td><td class="ok">Confined waters, collision avoidance, small targets</td><td class="ok">Long range, bad weather, open ocean</td></tr>
  </table>

  <div class="n-h2">SOLAS RADAR Carriage Requirements</div>
  <table class="n-table">
    <tr><th>Ship Size</th><th>Requirement</th></tr>
    <tr><td>Ships <span class="n-val">&gt; 300 GT</span></td><td class="hl">Minimum 1 RADAR + 1 ARPA</td></tr>
    <tr><td>Ships <span class="n-val">&gt; 500 GT</span></td><td class="hl">2 independent RADAR systems</td></tr>
    <tr><td>Ships <span class="n-val">&gt; 10,000 GT</span></td><td class="hl">Second radar must be S-band (or dual-band system)</td></tr>
  </table>

  <div class="n-h1" id="s-gmdss">📻 GMDSS - Equipment &amp; Sea Areas</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask "what is GMDSS and list all equipment."</strong> Know equipment per sea area.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>GMDSS (Global Maritime Distress and Safety System):</strong> Ensures any ship in distress can alert rescue authorities and receive safety information. Equipment required depends on the sea area of operation (A1–A4).</div></div>

  <table class="n-table">
    <tr><th>Equipment</th><th>Sea Area</th><th>Purpose</th></tr>
    <tr><td>VHF DSC Radio (Ch 70 + Ch 16)</td><td class="hl">All areas (A1–A4)</td><td>Digital distress alerting + voice</td></tr>
    <tr><td>MF/HF Radio (DSC + SSB)</td><td class="hl">A2/A3/A4</td><td>Long range distress + voice</td></tr>
    <tr><td>Inmarsat-C / LRIT</td><td class="hl">A3</td><td>Satellite messaging and position reporting</td></tr>
    <tr><td>NAVTEX Receiver (<span class="n-val">518/490 kHz</span>)</td><td class="hl">All ocean-going</td><td>Navigational warnings, weather, SAR info</td></tr>
    <tr><td>EPIRB (<span class="n-val">406 MHz</span>)</td><td class="hl">All SOLAS vessels</td><td>Global float-free satellite distress alert</td></tr>
    <tr><td>SART (<span class="n-val">9 GHz</span>)</td><td class="hl">&gt;500 GT (min 2)</td><td>Radar homing for rescue</td></tr>
    <tr><td>Portable VHF (3 units)</td><td class="hl">All SOLAS</td><td>Survival craft communications</td></tr>
    <tr><td>AIS + VDR</td><td class="hl">SOLAS</td><td>Identification / voyage data recording</td></tr>
    <tr><td>GMDSS Battery</td><td class="hl">All - mandatory</td><td>Reserve power per SOLAS Ch IV Reg 13</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>2024 GMDSS Update:</strong> As of <span class="n-val">January 1, 2024</span>, VHF-EPIRBs are no longer accepted. All ships must carry <span class="n-val">406 MHz</span> satellite EPIRBs. Inmarsat now one of several recognised satellite providers (Iridium also approved).</div></div>

  <div class="n-h1" id="s-epirb">🆘 EPIRB</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working:</strong> Transmits coded global distress signal containing ship's GPS position and unique <span class="n-val">15-digit hexadecimal</span> ID code to COSPAS-SARSAT satellite network. Frequencies: <span class="n-val">406 MHz</span> (global satellite alerting) <span class="n-val">+121.5 MHz</span> (aircraft homing). Activation: manual OR automatic via HRU (Hydrostatic Release Unit) - float-free when submerged to <span class="n-val">1–4 metres</span>.</div></div>

  <table class="n-table">
    <tr><th>Specification</th><th>Value</th></tr>
    <tr><td>Battery life (activated)</td><td class="hl">Minimum <span class="n-val">48 hours</span> continuous</td></tr>
    <tr><td>Carriage requirement</td><td class="hl">Minimum <span class="n-val">1 per ship</span> (Category I, float-free)</td></tr>
    <tr><td>HRU replacement</td><td class="hl">Every <span class="n-val">2 years</span></td></tr>
    <tr><td>Battery replacement</td><td class="hl">Every <span class="n-val">5 years</span> (or after activation)</td></tr>
    <tr><td>Monthly test</td><td class="ok">Self-test - press test button, check LED flash</td></tr>
  </table>

  <div class="n-h1" id="s-sart">🎯 SART - Search &amp; Rescue Transponder</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working:</strong> Passive transponder - silent until interrogated by an X-band radar pulse. Responds by transmitting <span class="n-val">12 pulses</span>, creating a distinctive <span class="n-val">12-dot line pattern</span> extending radially outward on the rescuing ship's radar PPI display.</div></div>

  <table class="n-table">
    <tr><th>Specification</th><th>Value</th></tr>
    <tr><td>Frequency</td><td class="hl"><span class="n-val">9 GHz</span> (X-band radar frequency)</td></tr>
    <tr><td>Range - ship radar</td><td class="hl"><span class="n-val">~5 nautical miles</span></td></tr>
    <tr><td>Range - aircraft radar</td><td class="hl"><span class="n-val">~10 nautical miles</span></td></tr>
    <tr><td>Battery - standby</td><td class="hl">Minimum <span class="n-val">96 hours</span></td></tr>
    <tr><td>Battery - transmitting</td><td class="hl">Minimum <span class="n-val">8 hours</span> when activated</td></tr>
    <tr><td>Carriage (SOLAS III Reg 7.1)</td><td class="hl">Minimum <span class="n-val">2 per ship</span> &gt;500 GT - in lifeboats or grab-bags</td></tr>
  </table>

  <div class="n-h1" id="s-vhf">📶 VHF &amp; NAVTEX</div>
  <table class="n-table">
    <tr><th>Equipment</th><th>Frequency / Channel</th><th>Purpose</th></tr>
    <tr><td>VHF DSC</td><td class="hl">Ch <span class="n-val">70</span> (<span class="n-val">156.525 MHz</span>)</td><td>Exclusively for digital distress alerts - no voice</td></tr>
    <tr><td>VHF Watch</td><td class="hl">Ch <span class="n-val">16</span></td><td>Distress watch + bridge-to-bridge voice</td></tr>
    <tr><td>Portable VHF (survival craft)</td><td>VHF</td><td>Minimum <span class="n-val">3 units</span> per vessel, battery minimum <span class="n-val">8 hours</span></td></tr>
    <tr><td>NAVTEX</td><td class="hl"><span class="n-val">518 kHz</span> (international/English)</td><td>MSI: nav warnings, weather forecasts, SAR info</td></tr>
    <tr><td>NAVTEX</td><td class="hl"><span class="n-val">490 kHz</span> (national language)</td><td>Local/regional broadcasts</td></tr>
    <tr><td>NAVTEX range</td><td> - </td><td><span class="n-val">200–400 nm</span> from coast station</td></tr>
  </table>

  <div class="n-h1" id="s-battery">🔋 GMDSS Battery - Load Test</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS Ch IV Reg 13:</strong> GMDSS battery must supply all equipment for <span class="n-val">6 hours</span> (without UPS) or <span class="n-val">1 hour</span> (with UPS). Annual load test required. Replace when capacity &lt;<span class="n-val">80%</span> rated.</div></div>

  <ol class="n-steps">
    <li>Perform in port - avoids compromising communications at sea</li>
    <li>Notify Master and isolate battery charger</li>
    <li>Power on ALL GMDSS equipment from battery only (VHF, MF/HF, NAVTEX, Inmarsat, DSC)</li>
    <li>Monitor discharge for SOLAS-required duration (<span class="n-val">1 hour</span> with UPS / <span class="n-val">6 hours</span> without)</li>
    <li>Battery terminal voltage must remain &gt;<span class="n-val">90%</span> of nominal (e.g. &gt;<span class="n-val">21.6V</span> for 24V system) throughout</li>
    <li>Log start and end voltages. Restore charger. Record next test due date.</li>
  </ol>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> EPIRB = <span class="n-val">406 MHz</span> satellite <span class="n-val">+121.5 MHz</span> aircraft | <span class="n-val">48 hr</span> battery | float-free at <span class="n-val">1–4 m</span>. SART = <span class="n-val">9 GHz</span> | <span class="n-val">12 dots</span> on radar | <span class="n-val">5 nm</span> ship range. VHF Ch <span class="n-val">70</span> = DSC only. Ch <span class="n-val">16</span> = voice/watch. NAVTEX = <span class="n-val">518 kHz</span>.</div></div>

  
  <!-- ═══ T13 EXPANDED FROM DOCX ═══ -->

  <div class="n-h1" id="s-radar-full">📡 RADAR - Full Technical Detail</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask X-band vs S-band differences, magnetron function, and SOLAS carriage requirements.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>RADAR working principle:</strong> Radio Detection And Ranging. Transmits short pulses of high-frequency microwave energy from rotating antenna. Echoes reflected from targets are received. Time-of-flight determines range. Antenna rotation gives bearing. Display: Plan Position Indicator (PPI) showing targets as blips on a circular radar screen.</div></div>
  <div class="n-formula">Range = (c × t) / 2<div class="label">c = speed of light (3×10⁸ m/s) · t = two-way travel time · 1 µs delay = 150 m range</div></div>
  <div class="n-h2">Key Components</div>
  <ul class="n-list">
    <li><strong>Magnetron:</strong> High-power microwave vacuum tube oscillator. Generates short high-power pulses (<span class="n-val">10–50 kW</span> peak, <span class="n-val">0.05–1 µs</span> duration) at 9 or 3 GHz. Ages over time - output drops → replace when below specification.</li>
    <li><strong>T/R Cell (Duplexer):</strong> Transmit/Receive cell - electronic switch. Disconnects sensitive receiver during magnetron's high-power transmit pulse (prevents receiver destruction). Reconnects immediately after pulse ends to listen for echo.</li>
    <li><strong>Blind Spot (Minimum Range):</strong> Target so close that echo returns while magnetron still transmitting → T/R cell still blocking receiver → target missed. Typical blind zone: <span class="n-val">15–50 m</span>. Shorter pulse = smaller blind zone.</li>
    <li><strong>Scanner (Antenna):</strong> Rotates 360° continuously. X-band: <span class="n-val">1.2–3.7 m</span>. S-band: <span class="n-val">3.7–5.5 m</span> (larger needed for same beam width at longer wavelength).</li>
  </ul>
  <div class="n-h2">X-band vs S-band - Complete Comparison</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>X-band</th><th>S-band</th></tr>
    <tr><td>Frequency</td><td class="hl"><span class="n-val">9 GHz</span> (9200–9500 MHz)</td><td class="hl"><span class="n-val">3 GHz</span> (2900–3100 MHz)</td></tr>
    <tr><td>Wavelength</td><td class="hl"><span class="n-val">3 cm</span></td><td class="hl"><span class="n-val">10 cm</span></td></tr>
    <tr><td>Resolution</td><td class="ok">High - excellent small target discrimination</td><td class="bad">Lower resolution</td></tr>
    <tr><td>Rain/fog penetration</td><td class="bad">Poor - 3 cm attenuated by rain</td><td class="ok">Good - 10 cm penetrates rain and fog</td></tr>
    <tr><td>Best for</td><td class="ok">Confined waters, collision avoidance, small targets, coastal navigation</td><td class="ok">Open ocean, bad weather, long range detection</td></tr>
    <tr><td>SOLAS requirement</td><td>Primary radar most ships</td><td class="hl">Mandatory as SECOND radar for ships &gt;<span class="n-val">10,000 GT</span></td></tr>
  </table>
  <div class="n-h2">SOLAS RADAR Carriage Requirements (V/19)</div>
  <table class="n-table">
    <tr><th>Ship Size</th><th>Requirement</th></tr>
    <tr><td>Ships &gt;<span class="n-val">300 GT</span></td><td class="hl">Minimum 1 RADAR + 1 ARPA</td></tr>
    <tr><td>Ships &gt;<span class="n-val">500 GT</span></td><td class="hl">2 independent RADAR systems</td></tr>
    <tr><td>Ships &gt;<span class="n-val">10,000 GT</span></td><td class="hl">Second radar must be S-band (3 GHz) or dual-band</td></tr>
  </table>

  <div class="n-h1" id="s-gmdss-full">📻 GMDSS - Complete Equipment List</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask "what is GMDSS and list all equipment."</strong> Know equipment by sea area. Know 2024 updates.</div></div>
  <table class="n-table">
    <tr><th>Equipment</th><th>Sea Area</th><th>Purpose</th><th>Key Values</th></tr>
    <tr><td>VHF DSC Radio</td><td class="hl">All (A1–A4)</td><td>DSC alerts on Ch <span class="n-val">70</span> + voice on Ch <span class="n-val">16</span></td><td>Ch 70 = <span class="n-val">156.525 MHz</span></td></tr>
    <tr><td>MF/HF Radio (DSC + SSB)</td><td class="hl">A2/A3/A4</td><td>Long range distress + voice</td><td>2187.5 kHz DSC</td></tr>
    <tr><td>Inmarsat-C or Iridium</td><td class="hl">A3</td><td>Satellite messaging and position reporting</td><td>Recognised MSS</td></tr>
    <tr><td>NAVTEX Receiver</td><td class="hl">All ocean-going</td><td>Navigational warnings, weather, SAR info</td><td><span class="n-val">518 kHz</span> English / <span class="n-val">490 kHz</span> national</td></tr>
    <tr><td>EPIRB (<span class="n-val">406 MHz</span>)</td><td class="hl">All SOLAS vessels (min 1)</td><td>Global float-free satellite distress alert</td><td>HRU float-free <span class="n-val">1–4 m</span>, <span class="n-val">48 hr</span> battery</td></tr>
    <tr><td>SART (<span class="n-val">9 GHz</span>)</td><td class="hl">&gt;500 GT (min 2)</td><td>Local radar homing - 12 dots on radar</td><td><span class="n-val">5 nm</span> ship, <span class="n-val">96 hr</span> standby <span class="n-val">+8 hr</span> transmit</td></tr>
    <tr><td>3 × Portable VHF</td><td class="hl">All SOLAS</td><td>Survival craft comms</td><td><span class="n-val">8 hr</span> battery life</td></tr>
    <tr><td>GMDSS Battery</td><td class="hl">All - SOLAS Ch IV Reg 13</td><td>Reserve power for all GMDSS equipment</td><td><span class="n-val">6 hr</span> without UPS / <span class="n-val">1 hr</span> with UPS</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>2024 GMDSS update:</strong> As of <span class="n-val">January 1, 2024</span>, VHF-EPIRBs are no longer accepted. All ships must carry <span class="n-val">406 MHz</span> satellite EPIRBs. NBDP (Narrow Band Direct Printing / Telex) no longer mandatory - removed from GMDSS requirements. Iridium now accepted alongside Inmarsat as recognised satellite provider.</div></div>

  <div class="n-h1" id="s-epirb-sart-full">🆘 EPIRB &amp; SART - Technical Specification</div>
  <table class="n-table">
    <tr><th>Specification</th><th>EPIRB</th><th>SART</th></tr>
    <tr><td>Function</td><td>Global distress alerting to satellites</td><td class="ok">Local radar homing for rescue vessels</td></tr>
    <tr><td>Frequency</td><td class="hl"><span class="n-val">406 MHz</span> satellite <span class="n-val">+121.5 MHz</span> aircraft homing</td><td class="hl"><span class="n-val">9 GHz</span> X-band radar only</td></tr>
    <tr><td>Range</td><td>Global via COSPAS-SARSAT</td><td class="hl"><span class="n-val">~5 nm</span> ship radar / <span class="n-val">10 nm</span> aircraft</td></tr>
    <tr><td>How activated</td><td>Manual OR automatic HRU (float-free at <span class="n-val">1–4 m</span>)</td><td>Manual or automatic on immersion</td></tr>
    <tr><td>Battery</td><td class="hl">Min <span class="n-val">48 hours</span> continuous</td><td class="hl"><span class="n-val">96 hours</span> standby <span class="n-val">+8 hours</span> transmitting</td></tr>
    <tr><td>Carriage (SOLAS)</td><td class="hl">Min <span class="n-val">1 per ship</span></td><td class="hl">Min <span class="n-val">2 per ship</span> &gt;500 GT (SOLAS III Reg 7.1)</td></tr>
    <tr><td>HRU replacement</td><td class="hl">Every <span class="n-val">2 years</span></td><td> - </td></tr>
    <tr><td>Battery replacement</td><td class="hl">Every <span class="n-val">5 years</span></td><td>Per manufacturer schedule</td></tr>
    <tr><td>Radar display pattern</td><td> - </td><td class="ok"><span class="n-val">12 dots</span> in radial line from SART position</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> EPIRB = <span class="n-val">406 MHz</span> global satellite <span class="n-val">+121.5 MHz</span> aircraft | Float-free <span class="n-val">1–4 m</span> | <span class="n-val">48 hr</span> battery. SART = <span class="n-val">9 GHz</span> radar | <span class="n-val">12 dots</span> on screen | <span class="n-val">5 nm</span> ship range. VHF Ch <span class="n-val">70</span> = DSC only. Ch <span class="n-val">16</span> = voice. NAVTEX = <span class="n-val">518 kHz</span> English.</div></div>



  <!-- ═══ T13 GAPS ADDED FROM DOCX ═══ -->

  <div class="n-h1" id="s-gmdss-2024">📅 2024 GMDSS Regulatory Update</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: Old answers about Inmarsat exclusivity and mandatory NBDP are NOW INCORRECT.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Change 1: RMSS Replaces "Inmarsat"</strong><br>Inmarsat is no longer the ONLY approved provider. Replaced by RMSS (Recognised Mobile Satellite Service). Iridium is now an approved RMSS alongside Inmarsat. Advantage: Iridium has true polar coverage (LEO).</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Change 2: NBDP No Longer Mandatory</strong><br>NBDP (Telex) is NO LONGER a mandatory GMDSS requirement for Sea Areas A3 and A4. It was removed because modern DSC and satellite comms made it redundant.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Change 3: VHF-EPIRB No Longer Accepted</strong><br>VHF-EPIRBs are no longer accepted for ANY sea area (even A1). All ships must now carry a 406 MHz Cospas-Sarsat satellite EPIRB.</div></div>

  <div class="n-h1" id="s-ais">🚢 AIS - Class A vs Class B</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL (Vishwanathan): "What is SOLAS requirement for AIS?"</strong></div></div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Class A (SOLAS Mandatory)</th><th>Class B (Voluntary)</th></tr>
    <tr><td>Carriage</td><td class="hl">All passenger ships, cargo &gt;300 GT (intl) or &gt;500 GT</td><td>Smaller vessels not under SOLAS</td></tr>
    <tr><td>Transmit Power</td><td class="hl"><span class="n-val">12.5W</span></td><td><span class="n-val">2W</span></td></tr>
    <tr><td>Reporting Interval</td><td class="hl"><span class="n-val">2–10 seconds</span> (underway), <span class="n-val">3 minutes</span> (anchor)</td><td><span class="n-val">30 seconds</span> (underway)</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>AIS Data Types:</strong><br>
  • <strong>Dynamic Data:</strong> MMSI, position (GPS lat/long), SOG, COG, heading, ROT, navigational status.<br>
  • <strong>Static Data:</strong> Ship name, call sign, IMO number, ship type, dimensions, draught.<br>
  <strong>Rule:</strong> AIS must remain ON continuously. Master may switch off only if navigation safety is compromised (e.g., piracy threat) and must log the reason.</div></div>

  <div class="n-h1" id="s-doppler">⏱️ Doppler Speed Log - Janus Configuration</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal and Vishwanathan ask the Janus configuration physics and frequency shift calculation.</strong></div></div>
  <div class="n-formula">Δf = (2 × f × v × cosθ) / c<div class="label">f = transmitted frequency · v = ship speed · θ = beam angle (~30°) · c = sound speed in water (~1500 m/s)</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Transducer modes:</strong><br>
  • <strong>Bottom tracking:</strong> Reflects off seabed → gives Speed Over Ground (SOG). Valid to ~200 m depth.<br>
  • <strong>Water tracking:</strong> Reflects off subsurface water layer (10–20 m below keel) → gives Speed Through Water (STW). Used when depth &gt;200 m.<br>
  <strong>4-beam Janus configuration:</strong> Transducers angled in equal opposite pairs (forward-port, aft-starboard, forward-starboard, aft-port). Symmetrical pairing cancels ship motion errors and sound speed variations → accurate longitudinal and transverse speed vectors. Frequencies: 100–300 kHz. Transducer faces must be clear of bio-fouling.</div></div>

  <div class="n-h1" id="s-echosounder">🌊 Echo Sounder - Piezoelectric Working</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS V/19 mandates depth sounders for all ships &gt;300 GT. Examiners drill direct vs reverse crystal effects.</strong></div></div>
  <div class="n-formula">Depth = (1500 × t) / 2 = 750 × t<div class="label">t = two-way acoustic travel time in seconds · Speed of sound in seawater ≈ 1500 m/s</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>PZT (Lead Zirconate Titanate) crystal - two effects in same crystal:</strong><br>
  • <strong>Reverse (Converse) Piezoelectric Effect → TRANSMIT:</strong> Apply high-voltage high-frequency electrical pulse → crystal physically deforms → rapid vibration → acoustic pressure wave transmitted into water<br>
  • <strong>Direct Piezoelectric Effect → RECEIVE:</strong> Returning echo pressure wave deforms crystal face → mechanical stress → small matching voltage generated → captured and amplified by receiver<br>
  Frequencies: 30–50 kHz shallow water (high resolution) · 3–12 kHz deep water (better penetration)</div></div>

  <div class="n-h1" id="s-gyro">🧭 Gyrocompass - Principles &amp; ETO Maintenance</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Mandatory for ships &gt;500 GT. Points to True North independent of magnetic variation.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Two physical principles:</strong><br>
  • <strong>Gyroscopic Rigidity:</strong> Rapidly spinning heavy mass resists angular change to spin axis - maintains exact directional orientation fixed in space<br>
  • <strong>Precession:</strong> External torque applied perpendicular to spin axis → resulting displacement manifests 90° ahead in direction of rotation<br>
  Pendulous gravity-controlled frame + Earth's rotation → forces spin axis to precess toward True North-South meridian. Settling time: <span class="n-val">2–6 hours</span> from cold start. Must be powered on well before departure - never disturb during settling phase.</div></div>
  <div class="n-h2">ETO Maintenance Checklist</div>
  <ol class="n-steps">
    <li><strong>Uninterrupted power mandatory:</strong> Master gyro must be on dedicated online UPS. Brief power loss → gyro sphere tumbles → requires full 2–6 hour re-settling</li>
    <li>Verify fluid levels in oil-bath damping spheres. Monitor operating sphere temperature.</li>
    <li>Clean internal slip ring faces. Inspect carbon contact brushes - electrical noise causes heading errors</li>
    <li><strong>Synchro repeater alignment:</strong> Remote repeaters on bridge wings, steering gear rooms receive heading via multi-wire synchro or digital step signals. Verify all repeaters match master gyro heading exactly</li>
  </ol>

  <div class="n-h1" id="s-bnwas">🚨 BNWAS, VDR &amp; SSAS</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan asks BNWAS stage sequence, VDR 12 inputs, and SSAS covert operation.</strong></div></div>
  <div class="n-h2">BNWAS - 3-Stage Alarm Sequence (SOLAS V/19.2.2)</div>
  <ul class="n-list">
    <li><strong>Dormant period:</strong> <span class="n-val">3–12 minutes</span> (adjustable). OOW must reset timer by pressing pushbuttons or interacting with navigation systems (RADAR trackball, ECDIS).</li>
    <li><strong>Stage 1 (Bridge only):</strong> Localised buzzer on bridge for 15 seconds - final chance for OOW to acknowledge</li>
    <li><strong>Stage 2 (Command cabins):</strong> Buzzers in Master's and duty officer cabins</li>
    <li><strong>Stage 3 (Crew spaces):</strong> Emergency buzzers in engine room and common crew areas - summons assistance</li>
  </ul>
  <div class="n-h2">VDR - 12 Mandatory Inputs (IEC 61996)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Orange crash capsule:</strong> Withstands <span class="n-val">260°C for 10 hours</span> <span class="n-val">+6000 m</span> water pressure. Ships &gt;3000 GT = full VDR. Ships &gt;500 GT built before 2002 = Simplified VDR (SVDR). 12 mandatory inputs: (1) Date/Time UTC, (2) GPS Position, (3) STW, (4) SOG, (5) Gyro Heading, (6) Bridge Audio, (7) VHF Radio Audio, (8) RADAR Display, (9) AIS Data, (10) ECDIS Display, (11) Rudder Order/Response, (12) Engine Telegraph Order/Response.</div></div>
  <div class="n-h2">SSAS - Covert Ship Security Alert</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>SSAS (SOLAS XI-2, ISPS Code) - anti-piracy covert distress system:</strong> Hidden pushbutton (minimum 2 onboard: bridge + secret crew space) transmits SILENT satellite alert to Company Security Officer (CSO) and flag state. NO sirens, buzzers, or screen alerts onboard - hijackers cannot know alert was sent. Tested quarterly using special test codes that simulate transmission without triggering real military response.</div></div>

  <div class="n-h1" id="s-navlights">🚦 Navigation Lights - COLREG Arcs &amp; BITT</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan checks exact arc angles, visibility ranges, and BITT monitoring circuit operation.</strong></div></div>
  <table class="n-table">
    <tr><th>Light</th><th>Colour</th><th>Arc</th><th>Range</th><th>Location</th></tr>
    <tr><td>Masthead (forward)</td><td>White</td><td class="hl"><span class="n-val">225°</span> (112.5° each side)</td><td class="hl">Min <span class="n-val">6 nm</span></td><td>Foremast, min 6m above hull</td></tr>
    <tr><td>Masthead (aft)</td><td>White</td><td class="hl"><span class="n-val">225°</span></td><td class="hl">Min <span class="n-val">6 nm</span></td><td>Mainmast, higher than fore light</td></tr>
    <tr><td>Port sidelight</td><td class="bad">Red</td><td class="hl"><span class="n-val">112.5°</span> (dead ahead to 22.5° abaft port beam)</td><td class="hl">Min <span class="n-val">3 nm</span></td><td>Port bridge wing</td></tr>
    <tr><td>Starboard sidelight</td><td class="ok">Green</td><td class="hl"><span class="n-val">112.5°</span></td><td class="hl">Min <span class="n-val">3 nm</span></td><td>Starboard bridge wing</td></tr>
    <tr><td>Sternlight</td><td>White</td><td class="hl"><span class="n-val">135°</span> (67.5° each side from dead astern)</td><td class="hl">Min <span class="n-val">3 nm</span></td><td>Aft taffrail centre</td></tr>
    <tr><td>Anchor lights</td><td>White</td><td class="hl"><span class="n-val">360°</span> all-round</td><td class="hl">Min <span class="n-val">3 nm</span></td><td>Forward high mast + lower aft mast</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>BITT (Built-In Integrity Test):</strong> Navigation light control panel continuously monitors each light circuit current. Even when light is OFF, BITT injects a microscopic monitoring pulse down the line. If bulb filament snaps or fuse blows → current drops to zero → BITT registers open circuit instantly → audible/visual alarm on bridge pinpointing failed light. Typical lamp rating: 60–65W. Dual filament or primary/secondary bulb sockets - auto-changeover on failure.</div></div>

  <div class="n-h1" id="s-steeringmodes">🎛️ Steering Control Modes - FU vs NFU</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal and Kamath drill the difference between closed-loop FU and open-loop NFU modes.</strong></div></div>
  <table class="n-table">
    <tr><th>Mode</th><th>Type</th><th>How It Works</th><th>When Used</th></tr>
    <tr><td><strong>Follow-Up (FU)</strong></td><td class="ok">Closed-loop servo</td><td>Helm angle command → solenoid valve → hydraulic rams → rudder moves → feedback linkage (hunting gear) or rotary potentiometer measures actual rudder angle → when rudder matches command → feedback cancels solenoid → rudder locks</td><td class="ok">Normal navigation - precise, automatic position control</td></tr>
    <tr><td><strong>Non-Follow-Up (NFU)</strong></td><td class="hl">Open-loop bypass</td><td>Joystick held → solenoid directly energised → rudder moves → release lever → rudder freezes. No position feedback - helmsman watches rudder angle indicator and releases at correct moment.</td><td class="hl">Emergency backup if FU feedback system fails</td></tr>
    <tr><td><strong>Autopilot</strong></td><td class="ok">PID closed-loop</td><td>PID algorithm processes heading error (gyro vs desired heading) → automatically drives rudder without manual input</td><td class="ok">Open sea passage</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Doppler = Janus 4-beam, bottom tracking = SOG, water tracking = STW. Echo sounder = 750×t metres. Gyro settles 2-6h, never cut power. BNWAS: 3-12 min dormant → Stage 1 bridge → Stage 2 cabins → Stage 3 crew. VDR: 12 inputs, orange capsule 260°C/6000m. SSAS = silent anti-piracy alert. Nav lights: masthead 225°/6nm, side 112.5°/3nm, stern 135°/3nm. FU = closed loop, NFU = open loop emergency.</div></div>

<div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 13</div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the difference between X-band and S-band RADAR? (All surveyors)</strong><br><strong>Ideal Answer:</strong> X-band: <span class="n-val">9 GHz</span>, <span class="n-val">3 cm</span> wavelength - high resolution, good target discrimination, preferred for confined waters and collision avoidance. Poor rain penetration. S-band: <span class="n-val">3 GHz</span>, <span class="n-val">10 cm</span> wavelength - penetrates rain and fog better. Lower resolution, larger antenna. Preferred for open ocean and bad weather. Ships &gt;<span class="n-val">10,000 GT</span> must have S-band second radar per SOLAS.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is GMDSS - list all equipment. (All surveyors)</strong><br><strong>Ideal Answer:</strong> GMDSS ensures any ship in distress can alert rescue authorities. Equipment by sea area: VHF DSC (Ch 70 alerts, Ch 16 voice - all areas), MF/HF radio (A2/A3/A4), Inmarsat-C (A3), NAVTEX (<span class="n-val">518/490 kHz</span>), EPIRB (<span class="n-val">406 MHz</span> float-free), SART (<span class="n-val">9 GHz</span>, 2 per ship &gt;500 GT), 3 portable VHF, AIS, VDR. All backed by dedicated GMDSS battery (SOLAS Ch IV Reg 13).</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Difference between SART and EPIRB? How many? Frequency? Range? (Sanjib, Kamath)</strong><br><strong>Ideal Answer:</strong> EPIRB = global distress alerting to shore via satellite. <span class="n-val">406 MHz</span> satellite <span class="n-val">+121.5 MHz</span> aircraft homing. Global range. Min <span class="n-val">1</span> per ship, float-free bracket on bridge wing. Battery <span class="n-val">48 hours</span>. SART = short-range homing by rescuing ships. <span class="n-val">9 GHz</span> X-band. Creates <span class="n-val">12-dot</span> line on radar. Range <span class="n-val">~5 nm</span> ship, <span class="n-val">10 nm</span> aircraft. Min <span class="n-val">2</span> per ship &gt;500 GT, in lifeboats/grab-bags.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>How do you perform GMDSS battery load test? (Vishwanathan, Nair)</strong><br><strong>Ideal Answer:</strong> Performed annually in port. Isolate battery charger. Power ALL GMDSS equipment from battery. Monitor for SOLAS duration: <span class="n-val">6 hours</span> (without UPS) or <span class="n-val">1 hour</span> (with UPS). Voltage must stay &gt;<span class="n-val">90%</span> of nominal. Log start/end voltages. Replace battery when capacity &lt;<span class="n-val">80%</span> rated.</div></div>

  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 13</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points</th></tr>
    <tr><td>X-band vs S-band RADAR</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>X = <span class="n-val">9 GHz / 3 cm</span> / high res / confined waters | S = <span class="n-val">3 GHz / 10 cm</span> / rain penetration / open ocean</td></tr>
    <tr><td>GMDSS equipment list</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>VHF + MF/HF + Inmarsat + NAVTEX + EPIRB + SART + 3×VHF + AIS + VDR + battery</td></tr>
    <tr><td>EPIRB</td><td class="hl">⭐⭐⭐⭐⭐ Sanjib, Kamath</td><td><span class="n-val">406 MHz</span> satellite | <span class="n-val">121.5 MHz</span> aircraft | float free <span class="n-val">1–4m</span> | <span class="n-val">48 hr</span> battery | HRU <span class="n-val">2yr</span></td></tr>
    <tr><td>SART</td><td class="hl">⭐⭐⭐⭐⭐ Sanjib, Kamath</td><td><span class="n-val">9 GHz</span> | <span class="n-val">12 dots</span> on radar | <span class="n-val">5 nm</span> ship | <span class="n-val">2</span> per ship &gt;<span class="n-val">500 GT</span> | <span class="n-val">96 hr</span> standby</td></tr>
    <tr><td>VHF channels</td><td class="hl">⭐⭐⭐⭐ Multiple surveyors</td><td>Ch <span class="n-val">70</span> = DSC only | Ch <span class="n-val">16</span> = voice/watch</td></tr>
    <tr><td>NAVTEX frequencies</td><td class="hl">⭐⭐⭐⭐ Multiple surveyors</td><td><span class="n-val">518 kHz</span> English | <span class="n-val">490 kHz</span> national | range <span class="n-val">200–400 nm</span></td></tr>
    <tr><td>GMDSS battery test</td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Nair</td><td>Annual | <span class="n-val">6 hr</span> without UPS | &gt;<span class="n-val">90%</span> voltage | replace at &lt;<span class="n-val">80%</span> capacity</td></tr>
  </table>

    </div>
</div>
</div>
`);

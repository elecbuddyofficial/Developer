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
      <span class="tag tag-purple">EPIRB · SART · VHF · NAVTEX · AIS · Gyro</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-radar')">RADAR Principle</button>
    <button class="anc-btn" onclick="jumpTo('s-radar-full')">RADAR Detail</button>
    <button class="anc-btn" onclick="jumpTo('s-solidstate')">Solid State RADAR</button>
    <button class="anc-btn" onclick="jumpTo('s-gmdss')">GMDSS Overview</button>
    <button class="anc-btn" onclick="jumpTo('s-gmdss-full')">GMDSS Detail</button>
    <button class="anc-btn" onclick="jumpTo('s-gmdss-2024')">2024 GMDSS Update</button>
    <button class="anc-btn" onclick="jumpTo('s-epirb')">EPIRB</button>
    <button class="anc-btn" onclick="jumpTo('s-sart')">SART</button>
    <button class="anc-btn" onclick="jumpTo('s-epirb-sart-full')">EPIRB/SART Compare</button>
    <button class="anc-btn" onclick="jumpTo('s-vhf')">VHF &amp; NAVTEX</button>
    <button class="anc-btn" onclick="jumpTo('s-inmarsat')">Inmarsat C vs Fleet BB</button>
    <button class="anc-btn" onclick="jumpTo('s-battery')">GMDSS Battery</button>
    <button class="anc-btn" onclick="jumpTo('s-ais')">AIS</button>
    <button class="anc-btn" onclick="jumpTo('s-doppler')">Doppler &amp; EM Log</button>
    <button class="anc-btn" onclick="jumpTo('s-echosounder')">Echo Sounder</button>
    <button class="anc-btn" onclick="jumpTo('s-gyro')">Gyrocompass</button>
    <button class="anc-btn" onclick="jumpTo('s-fluxgate')">Fluxgate Compass</button>
    <button class="anc-btn" onclick="jumpTo('s-bnwas')">BNWAS / VDR / SSAS</button>
    <button class="anc-btn" onclick="jumpTo('s-navlights')">Nav Lights</button>
    <button class="anc-btn" onclick="jumpTo('s-steeringmodes')">Steering Modes</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 1 - RADAR PRINCIPLE                              -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-radar">📡 RADAR - Working Principle &amp; Bands</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask RADAR working, X-band vs S-band difference, and SOLAS carriage requirements.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> RADAR (Radio Detection And Ranging) transmits short pulses of high-frequency microwave energy from a rotating antenna. Echoes reflected from targets are received. Range is calculated from two-way travel time. Bearing is derived from antenna orientation at the moment of echo reception. Display: Plan Position Indicator (PPI) - a circular screen showing targets as blips.</div></div>

  <div class="n-formula">Range = (c × t) / 2<div class="label">c = speed of light (3×10⁸ m/s) · t = two-way travel time · 1 µs delay = 150 m range</div></div>

  <div class="n-h2">Key Components</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">
    <strong>Magnetron:</strong> High-power microwave vacuum tube oscillator. Generates short high-power pulses at <span class="n-val">10–50 kW</span> peak, <span class="n-val">0.05–1 µs</span> duration at 9 or 3 GHz. Ages over time - output drops; replace when below specification.<br><br>
    <strong>T/R Cell (Duplexer):</strong> Transmit/Receive cell - electronic switch. Disconnects sensitive receiver during magnetron's high-power transmit pulse (prevents receiver destruction). Reconnects immediately after pulse ends to listen for echo.<br><br>
    <strong>Blind Spot (Minimum Range):</strong> Target so close that echo returns while magnetron still transmitting → T/R cell still blocking receiver → target missed. Typical blind zone: <span class="n-val">15–50 m</span>. Shorter pulse = smaller blind zone.<br><br>
    <strong>Scanner (Antenna):</strong> Rotates 360° continuously. X-band: <span class="n-val">1.2–3.7 m</span>. S-band: <span class="n-val">3.7–5.5 m</span> (larger needed for same beam width at longer wavelength).
  </div></div>

  <div class="n-h2">X-Band vs S-Band - Complete Comparison</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>X-Band</th><th>S-Band</th></tr>
    <tr><td>Frequency</td><td class="hl"><span class="n-val">9 GHz</span> (9200–9500 MHz)</td><td class="hl"><span class="n-val">3 GHz</span> (2900–3100 MHz)</td></tr>
    <tr><td>Wavelength</td><td class="hl"><span class="n-val">3 cm</span></td><td class="hl"><span class="n-val">10 cm</span></td></tr>
    <tr><td>Resolution / target discrimination</td><td class="ok">High - excellent for small targets</td><td class="bad">Lower resolution</td></tr>
    <tr><td>Rain / fog penetration</td><td class="bad">Poor - 3 cm attenuated by rain</td><td class="ok">Good - 10 cm penetrates rain and fog</td></tr>
    <tr><td>Antenna size</td><td class="ok"><span class="n-val">1.2–3.7 m</span> scanner</td><td class="bad"><span class="n-val">3.7–5.5 m</span> scanner (larger for same beam width)</td></tr>
    <tr><td>Best for</td><td class="ok">Confined waters, collision avoidance, small targets, coastal navigation</td><td class="ok">Long range, bad weather, open ocean</td></tr>
    <tr><td>SOLAS requirement</td><td>Primary radar on most ships</td><td class="hl">Mandatory as SECOND radar for ships &gt;<span class="n-val">10,000 GT</span></td></tr>
  </table>

  <div class="n-h2">SOLAS RADAR Carriage Requirements (SOLAS V/19)</div>
  <table class="n-table">
    <tr><th>Ship Size</th><th>Requirement</th></tr>
    <tr><td>Ships <span class="n-val">&gt; 300 GT</span></td><td class="hl">Minimum 1 RADAR + EPA (Electronic Plotting Aid)</td></tr>
    <tr><td>Ships <span class="n-val">&gt; 500 GT</span></td><td class="hl">2 independent RADAR systems + ATA (Automatic Tracking Aid)</td></tr>
    <tr><td>Ships <span class="n-val">&gt; 3,000 GT</span></td><td class="hl">Second S-band (3 GHz) radar OR second 9 GHz radar + second ATA</td></tr>
    <tr><td>Ships <span class="n-val">&gt; 10,000 GT</span></td><td class="hl">Full ARPA with trial manoeuvre on at least one radar; second radar must be S-band or dual-band</td></tr>
  </table>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 2 - RADAR FULL DETAIL + ARPA                     -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-radar-full">📡 RADAR - Full Technical Detail &amp; ARPA</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask magnetron function, pulse parameters, and ARPA functions. Deswal asks PRF and pulse width relationship to range resolution and bearing discrimination.</strong></div></div>

  <div class="n-h2">Key Performance Parameters</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title">PRF (Pulse Repetition Frequency)</div>
      <div class="card-val">500–3000 pulses/sec</div>
      <div class="card-desc">Number of pulses transmitted per second. High PRF → better near-range update but limits maximum unambiguous range (next pulse sent before previous echo returns → false echo). Short range scales use higher PRF.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange)">
      <div class="card-title">Pulse Width (Duration)</div>
      <div class="card-val">0.05–1 µs</div>
      <div class="card-desc">Duration of each transmitted pulse. Short pulse → better range resolution (can distinguish close targets) + smaller blind spot. Long pulse → more energy per pulse → better detection at long range. Short range = short pulse; long range = long pulse.</div>
    </div>
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title">Range Resolution</div>
      <div class="card-val">= (c × τ) / 2</div>
      <div class="card-desc">Minimum separation between two targets on same bearing for them to appear as separate echoes. τ = pulse width. Example: 0.1 µs pulse → 15 m range resolution. Two targets 14 m apart on same bearing merge into one echo.</div>
    </div>
    <div class="n-card" style="border-color:var(--purple)">
      <div class="card-title">Bearing Discrimination</div>
      <div class="card-val">= Horizontal beam width</div>
      <div class="card-desc">Minimum angular separation for two targets at same range to appear separately. Narrower beam = better discrimination. Longer antenna = narrower beam. X-band 3.7 m antenna ≈ 0.5° beam width. S-band 5.5 m antenna ≈ 1.8° beam width.</div>
    </div>
  </div>

  <div class="n-card n-info">
    <div class="n-h2">ARPA - Automatic Radar Plotting Aid - Functions</div>
    <p class="n-p">ARPA (Automatic Radar Plotting Aid) processes radar returns to provide automated collision-avoidance data. The following functions are required by IMO performance standards (Res. MSC.192(79)) and are assessed by surveyors.</p>
    <ul class="n-list">
      <li><strong>True Motion / Relative Motion display:</strong> Switch between sea-stabilised (relative) and ground-stabilised (true) motion presentations</li>
      <li><strong>Automatic acquisition:</strong> System auto-acquires targets in a defined guard zone; operator can also manually acquire</li>
      <li><strong>CPA / TCPA computation:</strong> Continuously calculates Closest Point of Approach and Time to CPA for every tracked target</li>
      <li><strong>Trial manoeuvre:</strong> Simulates effect of a proposed course or speed change before execution - critical for collision avoidance decision-making</li>
      <li><strong>Ground stabilisation:</strong> Uses CCRP (Consistent Common Reference Point) and ground-referenced data to reduce sea current errors in tracking</li>
      <li><strong>Past track display:</strong> Shows historical positions of tracked targets to assess manoeuvring patterns</li>
      <li><strong>VDR data output:</strong> ARPA data is fed to the Voyage Data Recorder for post-incident analysis</li>
      <li><strong>Alarm functions:</strong> CPA/TCPA guard zone alarms; lost-target and new-target alarms</li>
    </ul>
  </div>

  <div class="n-card n-warn">
    <div class="n-h2">ARPA / Plotting Aid - SOLAS Carriage by GRT</div>
    <table class="n-table">
      <tr><th>Vessel Size</th><th>Plotting Aid Required</th></tr>
      <tr><td>300 GRT and above</td><td>9 GHz X-band radar <strong>plus EPA</strong> (Electronic Plotting Aid - basic target plotting, not full ARPA)</td></tr>
      <tr><td>500 GRT and above</td><td>Radar fitted with <strong>ATA</strong> (Automatic Tracking Aid - automated tracking but fewer functions than full ARPA)</td></tr>
      <tr><td>3,000 GRT and above</td><td>Second radar (S-band 3 GHz or second 9 GHz) <strong>plus</strong> a second independent ATA</td></tr>
      <tr><td>10,000 GRT and above</td><td>Full <strong>ARPA</strong> with trial manoeuvre capability on at least one installation</td></tr>
    </table>
    <p class="n-p"><span class="n-val">Key distinction:</span> EPA → ATA → ARPA represent increasing automation. EPA = manual input only; ATA = tracks automatically, limited alarms/trial; ARPA = full standard including trial manoeuvre.</p>
  </div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 3 - SOLID STATE RADAR (NEW - GAP FILLED)         -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-solidstate">💡 Solid State RADAR - Magnetron vs Solid State</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Recent exam question - Sanjib and Kamath ask: "What is the difference between magnetron RADAR and solid state RADAR? Why are new ships fitted with solid state?"</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Traditional Magnetron RADAR:</strong> Uses a magnetron vacuum tube - a high-power thermionic device - to generate a short, intense pulse of microwave energy. Peak power: <span class="n-val">10–50 kW</span>. The magnetron degrades over time (typically <span class="n-val">2,000–5,000 hours</span> of use), requiring periodic replacement. High peak power compensates for the short pulse duration. The transmitter and receiver must be carefully isolated by the T/R cell (duplexer) to prevent receiver burnout.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Solid State RADAR (FMCW - Frequency Modulated Continuous Wave):</strong> Uses semiconductor (solid state) power amplifiers - no vacuum tube, no magnetron. Instead of short high-power pulses, it transmits a continuous low-power signal whose frequency is linearly swept (chirp). Range is determined by the frequency difference between the transmitted and received signal at any instant. Peak power: <span class="n-val">1–50 W</span> only (vs 50,000 W magnetron), but because transmission is continuous, the total energy on target per second is comparable.</div></div>

  <div class="n-h2">Magnetron vs Solid State - Comparison Table</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Magnetron (Pulsed)</th><th>Solid State (FMCW)</th></tr>
    <tr><td>Transmit type</td><td class="hl">Short high-power pulses</td><td class="hl">Continuous low-power chirp (FMCW)</td></tr>
    <tr><td>Peak transmit power</td><td class="bad"><span class="n-val">10–50 kW</span> peak</td><td class="ok"><span class="n-val">1–50 W</span> continuous</td></tr>
    <tr><td>Magnetron tube life</td><td class="bad"><span class="n-val">2,000–5,000 hours</span> - requires replacement</td><td class="ok">No tube - indefinite component life</td></tr>
    <tr><td>Minimum range (blind spot)</td><td class="bad"><span class="n-val">15–50 m</span> - pulse + T/R recovery</td><td class="ok">Very small - separate Tx/Rx antennas, can detect targets &lt;<span class="n-val">10 m</span></td></tr>
    <tr><td>Warm-up time</td><td class="bad"><span class="n-val">1–3 minutes</span> magnetron warm-up</td><td class="ok">Instant - solid state, no warm-up needed</td></tr>
    <tr><td>Sensitivity (small targets)</td><td class="bad">Lower - limited by pulse width</td><td class="ok">Higher - coherent processing, detects small craft in sea clutter</td></tr>
    <tr><td>Sea clutter performance</td><td class="bad">Clutter suppression by CFAR</td><td class="ok">Excellent - coherent signal processing, Doppler filtering separates clutter from real targets</td></tr>
    <tr><td>Power consumption</td><td class="bad">High - magnetron requires HV supply</td><td class="ok">Low - solid state, efficient</td></tr>
    <tr><td>Maintenance</td><td class="bad">Magnetron replacement, HV PSU</td><td class="ok">Minimal - no high-voltage components</td></tr>
    <tr><td>Doppler processing</td><td class="bad">Not inherent</td><td class="ok">Inherent - detects target velocity directly</td></tr>
    <tr><td>Examples</td><td>Furuno FAR-2xx7, Raytheon Pathfinder</td><td class="ok">Furuno NXT series, JRC JMA-9xx0, Kelvin Hughes SharpEye</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Solid State Advantages (SLIM-CD):</strong> <strong>S</strong>mall blind spot · <strong>L</strong>ong component life · <strong>I</strong>nstant on · <strong>M</strong>inimum power · <strong>C</strong>lutter suppression (Doppler) · <strong>D</strong>etects small targets. Weakness: more complex signal processing, higher initial cost.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>ETO Exam Point:</strong> When a surveyor asks "why replace the magnetron?" - answer: magnetron output power drops progressively with use (cathode emission degradation). When output falls below the manufacturer's minimum specification, clutter patterns change, target detection at range degrades, and range accuracy drifts. Magnetrons must be replaced before hours-in-service limit or when performance tests show sub-standard output. Log hours of use in the Planned Maintenance System (PMS).</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 4 - GMDSS OVERVIEW                               -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-gmdss">📻 GMDSS - Equipment &amp; Sea Areas</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask "what is GMDSS and list all equipment."</strong> Know equipment per sea area. Know 2024 changes.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>GMDSS (Global Maritime Distress and Safety System):</strong> Ensures any ship in distress can alert rescue authorities and receive safety information. Equipment required depends on the sea area of operation (A1–A4). SOLAS Chapter IV mandates the full system.</div></div>

  <div class="n-h2">Sea Area Definitions</div>
  <table class="n-table">
    <tr><th>Sea Area</th><th>Definition</th><th>Coverage Radius</th></tr>
    <tr><td class="hl">A1</td><td>Within VHF range of at least one GMDSS DSC coast station</td><td class="ok">Up to ~<span class="n-val">30–40 nm</span> from coast</td></tr>
    <tr><td class="hl">A2</td><td>Within MF range, outside A1</td><td class="ok">Up to ~<span class="n-val">150–400 nm</span></td></tr>
    <tr><td class="hl">A3</td><td>Within Inmarsat/RMSS satellite coverage, outside A1+A2</td><td class="ok">Approximately <span class="n-val">70°N to 70°S</span></td></tr>
    <tr><td class="hl">A4</td><td>Polar regions outside A3 coverage (&gt;70° latitude)</td><td class="ok">Polar - requires HF + Iridium LEO</td></tr>
  </table>

  <table class="n-table">
    <tr><th>Equipment</th><th>Sea Area</th><th>Purpose</th><th>Key Values</th></tr>
    <tr><td>VHF DSC Radio (Ch 70 + Ch 16)</td><td class="hl">All areas (A1–A4)</td><td>Digital distress alerting + voice</td><td>Ch 70 = <span class="n-val">156.525 MHz</span> · Ch 16 = voice</td></tr>
    <tr><td>MF/HF Radio (DSC + SSB)</td><td class="hl">A2 / A3 / A4</td><td>Long range distress + voice</td><td>MF DSC: <span class="n-val">2187.5 kHz</span></td></tr>
    <tr><td>Inmarsat-C / Iridium (RMSS)</td><td class="hl">A3 / A4</td><td>Satellite messaging and position reporting</td><td>Recognised RMSS</td></tr>
    <tr><td>NAVTEX Receiver</td><td class="hl">All ocean-going</td><td>Navigational warnings, weather, SAR info</td><td><span class="n-val">518 kHz</span> English / <span class="n-val">490 kHz</span> national</td></tr>
    <tr><td>EPIRB (<span class="n-val">406 MHz</span>)</td><td class="hl">All SOLAS vessels (min 1)</td><td>Global float-free satellite distress alert</td><td>HRU float-free <span class="n-val">1–4 m</span>, <span class="n-val">48 hr</span> battery</td></tr>
    <tr><td>SART (<span class="n-val">9 GHz</span>)</td><td class="hl">&gt;500 GT (min 2)</td><td>Local radar homing - 12 dots on radar</td><td><span class="n-val">5 nm</span> ship, <span class="n-val">96 hr</span> standby + <span class="n-val">8 hr</span> active</td></tr>
    <tr><td>3 × Portable VHF</td><td class="hl">All SOLAS</td><td>Survival craft communications</td><td><span class="n-val">8 hr</span> battery</td></tr>
    <tr><td>AIS + VDR</td><td class="hl">SOLAS mandatory</td><td>Identification / voyage data recording</td><td>AIS = <span class="n-val">161.975 / 162.025 MHz</span></td></tr>
    <tr><td>GMDSS Battery</td><td class="hl">All - SOLAS Ch IV Reg 13</td><td>Reserve power for all GMDSS equipment</td><td><span class="n-val">6 hr</span> without UPS / <span class="n-val">1 hr</span> with UPS</td></tr>
  </table>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 5 - GMDSS FULL DETAIL                            -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-gmdss-full">📻 GMDSS - Complete Equipment Technical Detail</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask "what is GMDSS and list all equipment." Know equipment by sea area. Know 2024 updates including NBDP removal and RMSS expansion.</strong></div></div>
  <table class="n-table">
    <tr><th>Equipment</th><th>Sea Area</th><th>Purpose</th><th>Key Values</th></tr>
    <tr><td>VHF DSC Radio</td><td class="hl">All (A1–A4)</td><td>DSC alerts on Ch <span class="n-val">70</span> + voice on Ch <span class="n-val">16</span></td><td>Ch 70 = <span class="n-val">156.525 MHz</span></td></tr>
    <tr><td>MF/HF Radio (DSC + SSB)</td><td class="hl">A2 / A3 / A4</td><td>Long range distress + voice</td><td>MF DSC: <span class="n-val">2187.5 kHz</span></td></tr>
    <tr><td>Inmarsat-C or Iridium (RMSS)</td><td class="hl">A3 / A4</td><td>Satellite messaging and position reporting</td><td>LEO (Iridium) supports polar A4</td></tr>
    <tr><td>NAVTEX Receiver</td><td class="hl">All ocean-going</td><td>Navigational warnings, weather, SAR info</td><td><span class="n-val">518 kHz</span> English / <span class="n-val">490 kHz</span> national</td></tr>
    <tr><td>EPIRB (<span class="n-val">406 MHz</span>)</td><td class="hl">All SOLAS vessels (min 1)</td><td>Global float-free satellite distress alert</td><td>HRU float-free <span class="n-val">1–4 m</span>, <span class="n-val">48 hr</span> battery</td></tr>
    <tr><td>SART (<span class="n-val">9 GHz</span>)</td><td class="hl">&gt;500 GT (min 2)</td><td>Local radar homing - 12 dots on radar</td><td><span class="n-val">5 nm</span> ship, <span class="n-val">96 hr</span> standby + <span class="n-val">8 hr</span> transmit</td></tr>
    <tr><td>3 × Portable VHF</td><td class="hl">All SOLAS</td><td>Survival craft comms</td><td><span class="n-val">8 hr</span> battery life</td></tr>
    <tr><td>GMDSS Battery</td><td class="hl">All - SOLAS Ch IV Reg 13</td><td>Reserve power for all GMDSS equipment</td><td><span class="n-val">6 hr</span> without UPS / <span class="n-val">1 hr</span> with UPS</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>2024 GMDSS update:</strong> As of <span class="n-val">January 1, 2024</span>, VHF-EPIRBs are no longer accepted for any sea area. All ships must carry <span class="n-val">406 MHz</span> satellite EPIRBs. NBDP (Narrow Band Direct Printing / Telex) is NO LONGER mandatory - removed because DSC and satellite comms made it redundant. Iridium now accepted alongside Inmarsat as a recognised RMSS (Recognised Mobile Satellite Service).</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 6 - 2024 GMDSS MODERNISATION                     -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-gmdss-2024">📅 2024 GMDSS Regulatory Modernisation</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL - Old answers about Inmarsat exclusivity and mandatory NBDP are NOW INCORRECT. Surveyors testing 2024-aware candidates.</strong></div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--red)">
      <div class="card-title">❌ REMOVED: NBDP No Longer Mandatory</div>
      <div class="card-desc">NBDP (Narrow Band Direct Printing - Telex / SITOR) is no longer a mandatory GMDSS requirement for Sea Areas A3 and A4. Modern DSC and satellite communications made NBDP redundant. Ships may retain it voluntarily but are not required to carry or maintain it.</div>
    </div>
    <div class="n-card" style="border-color:var(--red)">
      <div class="card-title">❌ REMOVED: VHF-EPIRB No Longer Accepted</div>
      <div class="card-desc">VHF-EPIRBs (121.5 MHz analogue) are no longer accepted for ANY sea area, including A1. All ships must now carry a <span class="n-val">406 MHz</span> COSPAS-SARSAT satellite EPIRB only. The old 121.5 MHz satellite monitoring was phased out in 2009.</div>
    </div>
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title">✅ NEW: RMSS Replaces Inmarsat Exclusivity</div>
      <div class="card-desc">"Inmarsat" is no longer the only approved provider. Replaced by RMSS (Recognised Mobile Satellite Service). Iridium is now an approved RMSS alongside Inmarsat. Key advantage: Iridium uses LEO (Low Earth Orbit) constellation - provides TRUE polar coverage for A4 operations, unlike Inmarsat GEO which cannot cover &gt;70° latitude.</div>
    </div>
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title">✅ NEW: e-Navigation Integration</div>
      <div class="card-desc">GMDSS 2024 modernisation also prepares the framework for e-EPIRB (satellite EPIRB with enhanced location accuracy, auto-registration, and two-way communication capability), integration with e-navigation platforms, and cloud-based voyage data exchange.</div>
    </div>
  </div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Iridium LEO vs Inmarsat GEO - Why it matters for A4:</strong> Inmarsat satellites are geostationary at ~36,000 km altitude, covering approximately 70°N to 70°S. Beyond ±70° latitude (Arctic/Antarctic routes), Inmarsat loses line-of-sight. Iridium uses 66 Low Earth Orbit satellites at ~780 km, providing continuous polar coverage. Ships on polar routes (e.g., NSR - Northern Sea Route) MUST use Iridium or HF radio for A4 GMDSS compliance.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - 2024 GMDSS "OUT-IN":</strong> <strong>OUT</strong> = NBDP out + VHF-EPIRB out + Inmarsat monopoly out. <strong>IN</strong> = RMSS in + Iridium LEO in + 406 MHz mandatory everywhere. If a surveyor says "what's new about GMDSS?" - this is the answer.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 7 - EPIRB                                        -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-epirb">🆘 EPIRB - Working &amp; Specifications</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib and Kamath: "What frequencies does EPIRB transmit? What is COSPAS-SARSAT? How is it activated? When do you replace battery and HRU?"</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working Principle:</strong> EPIRB (Emergency Position Indicating Radio Beacon) transmits a coded global distress signal containing the ship's GPS position and a unique <span class="n-val">15-digit hexadecimal</span> identification code (programmed with MMSI and IMO number) to the COSPAS-SARSAT satellite network.<br><br>
  <strong>Frequencies:</strong> <span class="n-val">406 MHz</span> - satellite alerting to COSPAS-SARSAT network (LEO and GEO satellites). <span class="n-val">121.5 MHz</span> - homing signal for aircraft SAR operations (short range only, not satellite-monitored).<br><br>
  <strong>COSPAS-SARSAT:</strong> International satellite system operated jointly by USA, Russia, Canada, and France. LEO satellites detect 406 MHz signal and relay distress message with position to Local User Terminals (LUT) → Mission Control Centres → Rescue Coordination Centres (RCC).<br><br>
  <strong>Activation:</strong> Manual (pull out of bracket and arm) OR Automatic via HRU (Hydrostatic Release Unit) - float-free when submerged to <span class="n-val">1–4 metres</span>. Water-activated battery automatically starts transmitting.</div></div>

  <table class="n-table">
    <tr><th>Specification</th><th>Value</th></tr>
    <tr><td>Satellite frequency</td><td class="hl"><span class="n-val">406 MHz</span> - COSPAS-SARSAT (coded ID + GPS position)</td></tr>
    <tr><td>Aircraft homing frequency</td><td class="hl"><span class="n-val">121.5 MHz</span> - analogue homing only</td></tr>
    <tr><td>Battery life (activated)</td><td class="hl">Minimum <span class="n-val">48 hours</span> continuous transmission</td></tr>
    <tr><td>Carriage requirement</td><td class="hl">Minimum <span class="n-val">1 per ship</span> - Category I, float-free bracket</td></tr>
    <tr><td>HRU replacement</td><td class="hl">Every <span class="n-val">2 years</span></td></tr>
    <tr><td>Battery replacement</td><td class="hl">Every <span class="n-val">5 years</span> (or after any activation)</td></tr>
    <tr><td>Float-free depth</td><td class="hl"><span class="n-val">1–4 metres</span> submersion triggers HRU release</td></tr>
    <tr><td>Monthly test</td><td class="ok">Self-test only - press test button, check LED flash (never transmit real distress signal)</td></tr>
    <tr><td>Registration</td><td class="hl">MUST be registered with national authority - unregistered EPIRB causes false alarm investigation</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>ETO Responsibility:</strong> (1) Inspect mounting bracket integrity monthly. (2) Check battery expiry date and HRU expiry date on hull label. (3) Verify MMSI/IMO registration is current (ship name/company change requires re-registration). (4) After any inadvertent activation - immediately notify flag state authority and MRCC to cancel false alarm.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 8 - SART                                         -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-sart">🎯 SART - Search &amp; Rescue Transponder</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib and Kamath: "How does SART work? How many dots? What frequency? Standby vs active battery?" - Numbers must be exact.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working Principle:</strong> Passive transponder - completely silent until interrogated by an X-band radar pulse from a searching vessel. When triggered:<br>
  1. Receives 9 GHz radar pulse<br>
  2. Instantly transmits a frequency sweep across the full X-band<br>
  3. Creates a distinctive <span class="n-val">12-dot (12-pulse) line pattern</span> extending radially outward from the SART position on the rescuing ship's radar PPI display<br>
  4. The dot pattern points toward the SART - as the ship closes in, dots become arcs and then full circles indicating very close range.<br>
  SART LED indicator activates when interrogated - survivors know they are being detected.</div></div>

  <table class="n-table">
    <tr><th>Specification</th><th>Value</th></tr>
    <tr><td>Operating frequency</td><td class="hl"><span class="n-val">9 GHz</span> X-band radar frequency</td></tr>
    <tr><td>Radar display pattern</td><td class="hl"><span class="n-val">12 dots</span> in radial line extending from SART position</td></tr>
    <tr><td>Range - ship radar</td><td class="hl">~<span class="n-val">5 nautical miles</span></td></tr>
    <tr><td>Range - aircraft radar</td><td class="hl">~<span class="n-val">10 nautical miles</span></td></tr>
    <tr><td>Battery - standby (not activated)</td><td class="hl">Minimum <span class="n-val">96 hours</span></td></tr>
    <tr><td>Battery - active (responding)</td><td class="hl">Minimum <span class="n-val">8 hours</span> continuous interrogation response</td></tr>
    <tr><td>SOLAS carriage (III Reg 7.1)</td><td class="hl">Minimum <span class="n-val">2 per ship</span> &gt;500 GT - in lifeboats or grab-bags</td></tr>
    <tr><td>Activation</td><td class="ok">Manual arm + water immersion switch (auto)</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - SART numbers:</strong> <strong>9</strong> GHz · <strong>12</strong> dots · <strong>5</strong> nm ship · <strong>10</strong> nm aircraft · <strong>96</strong> hr standby · <strong>8</strong> hr active · <strong>2</strong> per ship. Say "9-12-5-10-96-8-2" until automatic.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 9 - EPIRB/SART COMPARISON                        -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-epirb-sart-full">🆘 EPIRB &amp; SART - Side-by-Side Technical Comparison</div>
  <table class="n-table">
    <tr><th>Specification</th><th>EPIRB</th><th>SART</th></tr>
    <tr><td>Function</td><td>Global distress alerting to satellites and coast authorities</td><td class="ok">Local radar homing for rescue vessels and aircraft</td></tr>
    <tr><td>Frequency</td><td class="hl"><span class="n-val">406 MHz</span> satellite + <span class="n-val">121.5 MHz</span> aircraft homing</td><td class="hl"><span class="n-val">9 GHz</span> X-band radar - responds to ship/aircraft radar</td></tr>
    <tr><td>Range</td><td>Global - via COSPAS-SARSAT satellites</td><td class="hl">~<span class="n-val">5 nm</span> ship radar / <span class="n-val">10 nm</span> aircraft</td></tr>
    <tr><td>How activated</td><td>Manual OR automatic HRU (float-free at <span class="n-val">1–4 m</span>)</td><td>Manual arm or water immersion switch</td></tr>
    <tr><td>Battery (active)</td><td class="hl">Min <span class="n-val">48 hours</span> continuous</td><td class="hl"><span class="n-val">8 hours</span> transmitting</td></tr>
    <tr><td>Battery (standby)</td><td>—</td><td class="hl"><span class="n-val">96 hours</span> standby before activation</td></tr>
    <tr><td>Carriage (SOLAS)</td><td class="hl">Min <span class="n-val">1 per ship</span></td><td class="hl">Min <span class="n-val">2 per ship</span> &gt;500 GT (SOLAS III Reg 7.1)</td></tr>
    <tr><td>HRU replacement</td><td class="hl">Every <span class="n-val">2 years</span></td><td>Not applicable</td></tr>
    <tr><td>Battery replacement</td><td class="hl">Every <span class="n-val">5 years</span></td><td>Per manufacturer schedule</td></tr>
    <tr><td>Radar display pattern</td><td>None</td><td class="ok"><span class="n-val">12 dots</span> in radial line from SART position</td></tr>
    <tr><td>Satellite system</td><td>COSPAS-SARSAT (LEO + GEO)</td><td>None - direct radar response only</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> EPIRB = <strong>E</strong>arth-wide alert (<span class="n-val">406 MHz</span> global satellite + <span class="n-val">121.5 MHz</span> aircraft homing | Float-free <span class="n-val">1–4 m</span> | <span class="n-val">48 hr</span> battery). SART = <strong>S</strong>hip-homing transponder (<span class="n-val">9 GHz</span> radar | <span class="n-val">12 dots</span> on screen | <span class="n-val">5 nm</span> ship range | <span class="n-val">96 hr</span> standby + <span class="n-val">8 hr</span> active).</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 10 - VHF & NAVTEX                                -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-vhf">📶 VHF &amp; NAVTEX</div>
  <table class="n-table">
    <tr><th>Equipment</th><th>Frequency / Channel</th><th>Purpose</th></tr>
    <tr><td>VHF DSC</td><td class="hl">Ch <span class="n-val">70</span> (<span class="n-val">156.525 MHz</span>)</td><td>Exclusively for digital distress alerts - no voice transmission permitted on Ch 70</td></tr>
    <tr><td>VHF Watch</td><td class="hl">Ch <span class="n-val">16</span></td><td>Distress watch + bridge-to-bridge voice - mandatory listening watch</td></tr>
    <tr><td>Portable VHF (survival craft)</td><td>VHF</td><td>Minimum <span class="n-val">3 units</span> per SOLAS vessel, battery minimum <span class="n-val">8 hours</span></td></tr>
    <tr><td>NAVTEX (international)</td><td class="hl"><span class="n-val">518 kHz</span></td><td>MSI in English: navigational warnings, weather forecasts, SAR information</td></tr>
    <tr><td>NAVTEX (national)</td><td class="hl"><span class="n-val">490 kHz</span></td><td>Local/regional broadcasts in national language</td></tr>
    <tr><td>NAVTEX HF</td><td class="hl"><span class="n-val">4209.5 kHz</span></td><td>High-frequency NAVTEX for extended range oceanic broadcasts</td></tr>
    <tr><td>NAVTEX range</td><td>—</td><td><span class="n-val">200–400 nm</span> from coast station (MF); up to 1500 nm on HF 4209.5 kHz</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>VHF Range:</strong> VHF is line-of-sight. Practical range: ship-to-ship ≈ <span class="n-val">20–30 nm</span>; ship-to-coast (high antenna) ≈ <span class="n-val">30–50 nm</span>; ship-to-aircraft ≈ <span class="n-val">100+ nm</span> due to altitude. VHF cannot propagate beyond the radio horizon - use MF/HF for long-range GMDSS alerting (A2–A4).</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>MF DSC Frequency:</strong> <span class="n-val">2187.5 kHz</span> - international MF DSC calling channel. Ships in A2–A4 maintain watch on this frequency. DSC alert on 2187.5 kHz followed by voice/SSB communication on working channel 2182 kHz (MF international distress).</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 11 - INMARSAT C vs FLEET BROADBAND (NEW - GAP)   -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-inmarsat">🛰️ Inmarsat C vs Fleet Broadband - SafetyNET MSI</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath and Vishwanathan ask: "What is SafetyNET? Difference between Inmarsat C and Fleet Broadband? What happened to LORAN C?"</strong></div></div>

  <div class="n-h2">Inmarsat C vs Fleet Broadband</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Inmarsat C</th><th>Fleet Broadband (FB)</th></tr>
    <tr><td>Type</td><td class="hl">Store-and-forward text/data terminal</td><td class="hl">Broadband data + voice terminal (IP)</td></tr>
    <tr><td>Antenna</td><td class="ok">Small omnidirectional - no dish, no tracking needed</td><td class="bad">Stabilised directional dish antenna required</td></tr>
    <tr><td>Data rate</td><td class="bad"><span class="n-val">600 bps</span> - text messages and short data packets only</td><td class="ok"><span class="n-val">150 kbps–432 kbps</span> - internet, email, voice</td></tr>
    <tr><td>GMDSS role</td><td class="ok"><strong>Mandatory GMDSS equipment for A3</strong> - Safety communications, distress alerting, SafetyNET MSI reception</td><td class="bad">NOT a mandatory GMDSS component - commercial service only</td></tr>
    <tr><td>SafetyNET MSI</td><td class="ok">YES - receives IMO/ITU-mandated SafetyNET MSI broadcasts</td><td class="bad">NO - does not receive SafetyNET</td></tr>
    <tr><td>Distress alerting</td><td class="ok">YES - can send distress priority message via satellite to MRCC</td><td class="bad">Not GMDSS-approved for primary distress</td></tr>
    <tr><td>EGC (Enhanced Group Call)</td><td class="ok">YES - receives MSI broadcasts on EGC channel</td><td class="bad">No EGC reception</td></tr>
    <tr><td>Power consumption</td><td class="ok">Low - small terminal</td><td class="bad">High - active stabilised antenna system</td></tr>
    <tr><td>Typical use</td><td>GMDSS station, position reporting, LRIT, safety comms</td><td>Commercial internet, crew welfare, operational data</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>SafetyNET (EGC - Enhanced Group Call):</strong> Global Maritime Safety Information (MSI) broadcast service delivered via Inmarsat C EGC channel. Provides: (1) Navigational warnings (NAVAREA), (2) Meteorological warnings, (3) Search and Rescue coordination messages, (4) Piracy/security warnings. Ships in A3 receive SafetyNET as the primary MSI source (equivalent to NAVTEX but global range). Reception is automatic when Inmarsat C is switched on - no action needed.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>LORAN C (Long Range Navigation) - Retired:</strong> LORAN C was a land-based hyperbolic radio navigation system operating at <span class="n-val">100 kHz</span>. Used chains of shore transmitters to provide position fix by time-difference of arrival. Coverage: mainly North Atlantic, North Pacific, and US coastal waters. <strong>Status: Decommissioned.</strong> USA shut down in 2010; European chains terminated by 2015. Completely replaced by GNSS/GPS. No longer listed as a navigation aid on any current vessel.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Inmarsat C vs Fleet BB:</strong> <strong>C</strong> = GMDSS <strong>C</strong>ritical (safety) - small antenna, slow text, SafetyNET YES. <strong>Fleet BB</strong> = <strong>B</strong>usiness broadband - fast internet, big dish, SafetyNET NO. If a surveyor asks "what receives SafetyNET?" - answer is Inmarsat C (not Fleet Broadband).</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 12 - GMDSS BATTERY                               -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-battery">🔋 GMDSS Battery - Load Test Procedure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS Ch IV Reg 13:</strong> GMDSS battery must supply all equipment for <span class="n-val">6 hours</span> (without UPS) or <span class="n-val">1 hour</span> (with UPS). Annual load test required. Replace when capacity &lt;<span class="n-val">80%</span> rated.</div></div>

  <ol class="n-steps">
    <li>Perform in port - avoids compromising communications at sea</li>
    <li>Notify Master and duty officer. File prior notice with port authority if required by port regulations</li>
    <li>Isolate battery charger - disconnect charging current completely</li>
    <li>Power on ALL GMDSS equipment from battery only (VHF, MF/HF, NAVTEX receiver, Inmarsat C, DSC watch receivers)</li>
    <li>Monitor discharge for SOLAS-required duration: <span class="n-val">1 hour</span> with ship's UPS / <span class="n-val">6 hours</span> without UPS</li>
    <li>Battery terminal voltage must remain &gt;<span class="n-val">90%</span> of nominal (e.g. &gt;<span class="n-val">21.6 V</span> for 24 V system) throughout entire test period</li>
    <li>Log start voltage, end voltage, duration, and date. Restore charger. Record next test due date in PMS</li>
    <li>If voltage drops below 90% threshold - battery fails test. Replace before next departure</li>
  </ol>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Battery Type:</strong> GMDSS batteries are typically sealed VRLA (Valve Regulated Lead Acid) or NiCd (Nickel Cadmium). Dedicated charger must be used - not shared with other ship's systems. Charger maintains float charge continuously. Annual equalising charge recommended for NiCd type (consult maker's manual).</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> EPIRB = <span class="n-val">406 MHz</span> satellite + <span class="n-val">121.5 MHz</span> aircraft | <span class="n-val">48 hr</span> battery | float-free at <span class="n-val">1–4 m</span>. SART = <span class="n-val">9 GHz</span> | <span class="n-val">12 dots</span> on radar | <span class="n-val">5 nm</span> ship range. VHF Ch <span class="n-val">70</span> = DSC only. Ch <span class="n-val">16</span> = voice/watch. NAVTEX = <span class="n-val">518 kHz</span>. GMDSS Battery = <span class="n-val">6 hr</span> without UPS.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 13 - AIS                                         -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ais">🚢 AIS - Class A vs Class B</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL (Vishwanathan): "What is SOLAS requirement for AIS? What data does it transmit? What are the two AIS frequencies?"</strong></div></div>

  <table class="n-table">
    <tr><th>Parameter</th><th>Class A (SOLAS Mandatory)</th><th>Class B (Voluntary)</th></tr>
    <tr><td>Carriage</td><td class="hl">All passenger ships, cargo &gt;300 GT (international) or &gt;500 GT (domestic)</td><td>Smaller vessels not under SOLAS - voluntary</td></tr>
    <tr><td>Transmit Power</td><td class="hl"><span class="n-val">12.5 W</span></td><td><span class="n-val">2 W</span></td></tr>
    <tr><td>Reporting Interval (underway)</td><td class="hl"><span class="n-val">2–10 seconds</span> depending on speed and course change</td><td><span class="n-val">30 seconds</span></td></tr>
    <tr><td>Reporting Interval (at anchor)</td><td class="hl"><span class="n-val">3 minutes</span></td><td><span class="n-val">3 minutes</span></td></tr>
    <tr><td>DSC VHF Ch 70 receiver</td><td class="ok">Integrated</td><td class="bad">Not always included</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>AIS Data Types:</strong><br>
  • <strong>Dynamic Data (sent automatically):</strong> MMSI, position (GPS lat/long), SOG, COG, true heading, Rate of Turn (ROT), navigational status (underway/at anchor/restricted).<br>
  • <strong>Static Data (entered by crew, sent every 6 min):</strong> Ship name, call sign, IMO number, ship type, overall dimensions (length/beam), position of GNSS antenna.<br>
  • <strong>Voyage Data (entered manually):</strong> Draught, destination port, ETA, cargo hazard type, number of persons on board.<br><br>
  <strong>Rule:</strong> AIS must remain ON continuously when underway. Master may switch off ONLY if navigation safety is compromised (e.g., piracy threat) and must log the reason and time in the logbook.</div></div>

  <div class="n-card n-info">
    <div class="n-h2">AIS Operating Frequencies</div>
    <p class="n-p">AIS uses dedicated VHF maritime mobile channels to broadcast and receive vessel information. The frequencies are internationally standardised under ITU Radio Regulations.</p>
    <table class="n-table">
      <tr><th>Channel</th><th>Frequency</th><th>Purpose</th></tr>
      <tr><td>Channel 87B (AIS 1)</td><td class="hl"><span class="n-val">161.975 MHz</span></td><td>Primary AIS transmission/reception</td></tr>
      <tr><td>Channel 88B (AIS 2)</td><td class="hl"><span class="n-val">162.025 MHz</span></td><td>Secondary AIS transmission/reception (alternating)</td></tr>
      <tr><td>Channel 70</td><td>156.525 MHz</td><td>DSC (Digital Selective Calling) - safety communications, not AIS data</td></tr>
    </table>
    <p class="n-p">Class A transponders transmit alternately on both AIS channels using TDMA (Time Division Multiple Access), ensuring continuous coverage and avoiding collisions between vessel transmissions.</p>
  </div>

  <div class="n-card n-info">
    <div class="n-h2">AIS System Architecture</div>
    <p class="n-p">A Class A AIS transponder integrates multiple hardware and software subsystems. Understanding the architecture helps the ETO diagnose faults and verify correct operation during surveys.</p>
    <div class="n-grid">
      <div>
        <strong>RF / Antenna Section</strong>
        <ul class="n-list">
          <li>1× VHF Transmitter - broadcasts vessel data on Ch 87B and 88B alternately</li>
          <li>2× VHF Multi-channel Receivers - simultaneous receive on both AIS channels</li>
          <li>1× Channel 70 DSC Receiver - dedicated for DSC safety messages</li>
        </ul>
      </div>
      <div>
        <strong>Processing and I/O Section</strong>
        <ul class="n-list">
          <li>CPU / Controller - manages TDMA scheduling, message encoding/decoding</li>
          <li>GNSS Receiver - provides position, SOG, COG, and UTC time</li>
          <li>Heading Sensor Input - true heading from gyrocompass via NMEA 0183</li>
          <li>Speed / ROT Input - rate of turn from ROT indicator; speed from log or GPS</li>
          <li>MKD (Minimum Keyboard Display) - operator interface for static data entry</li>
        </ul>
      </div>
    </div>
    <p class="n-p"><span class="n-val">Surveyor focus:</span> Verify GNSS feed, heading sensor input, and static data (MMSI, IMO, call sign, vessel dimensions) are correctly configured. Any mismatch between AIS-reported data and actual vessel particulars is a deficiency.</p>
  </div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 14 - DOPPLER & EM LOG (EXPANDED - GAP FILLED)    -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-doppler">⏱️ Doppler Speed Log &amp; EM Log - Comparison</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal and Vishwanathan ask the Janus configuration physics and frequency shift calculation. Kamath asks: "What is the difference between Doppler log and EM log? When would you use each?"</strong></div></div>

  <div class="n-h2">Doppler Speed Log - Janus Configuration</div>
  <div class="n-formula">Δf = (2 × f × v × cosθ) / c<div class="label">Δf = Doppler frequency shift · f = transmitted frequency · v = ship speed · θ = beam angle (~30°) · c = speed of sound in water (~1500 m/s)</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>4-Beam Janus Configuration:</strong> Four transducers angled in equal opposite pairs (forward-port, aft-starboard, forward-starboard, aft-port) at approximately 30° to the vertical. Symmetrical beam pairing cancels ship motion errors (pitch, roll) and sound speed variations → accurate longitudinal AND transverse speed vectors simultaneously.<br><br>
  <strong>Transducer Modes:</strong><br>
  • <strong>Bottom tracking:</strong> Acoustic beam reflects off seabed → gives <span class="n-val">Speed Over Ground (SOG)</span>. Valid to ~<span class="n-val">200 m depth</span>. Very accurate - not affected by currents.<br>
  • <strong>Water tracking:</strong> Reflects off subsurface water layer (scattering layer, ~10–20 m below keel) → gives <span class="n-val">Speed Through Water (STW)</span>. Used when depth &gt;<span class="n-val">200 m</span> (bottom tracking fails). Less accurate in areas with strong shear currents.<br>
  <strong>Frequencies:</strong> 100–300 kHz. Transducer faces must be clear of biofouling (regular hull cleaning ensures accuracy).
  </div></div>

  <div class="n-h2">Electromagnetic (EM) Log - Faraday's Law</div>
  <div class="n-formula">EMF = B × L × v<div class="label">EMF = induced voltage · B = magnetic field strength · L = electrode separation · v = water velocity relative to hull (= STW)</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>EM Log Working Principle (Faraday's Law of Electromagnetic Induction):</strong><br>
  A coil in a retractable keel sensor generates a strong, pulsed magnetic field below the hull. Seawater (a conducting fluid) flowing through this field has a small EMF (voltage) induced across it proportional to the flow velocity. Two electrodes on either side of the sensor pick up this induced voltage. The resulting electrical signal is processed electronically to give Speed Through Water (STW). The transducer is a flush or retractable electrode pod mounted through the hull bottom.<br><br>
  <strong>Key property:</strong> The EM log always measures <span class="n-val">Speed Through Water (STW)</span> only - it cannot give Speed Over Ground regardless of depth. The magnetic field only samples the water immediately around the sensor.</div></div>

  <div class="n-h2">Doppler Log vs EM Log - Comparison</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Doppler Speed Log</th><th>EM (Electromagnetic) Log</th></tr>
    <tr><td>Physical principle</td><td class="hl">Acoustic Doppler frequency shift</td><td class="hl">Faraday electromagnetic induction</td></tr>
    <tr><td>Speed measured</td><td class="ok">SOG (bottom track, &lt;200m) or STW (water track)</td><td class="bad">STW only - always</td></tr>
    <tr><td>Can measure transverse speed?</td><td class="ok">YES - 4-beam Janus gives athwartship speed vector</td><td class="bad">NO - fore-aft only</td></tr>
    <tr><td>Depth limitation</td><td class="bad">Bottom track fails &gt;<span class="n-val">200 m</span> - switches to water track</td><td class="ok">No depth limitation - always measures near-hull water</td></tr>
    <tr><td>Effect of currents</td><td class="ok">Bottom track immune to currents (true SOG)</td><td class="bad">Affected by currents - measures STW only</td></tr>
    <tr><td>Effect of biofouling</td><td class="bad">Transducer face fouling causes attenuation and error</td><td class="bad">Electrode fouling reduces signal; anti-fouling coating used</td></tr>
    <tr><td>Self-noise limitation</td><td class="bad">At high ship speeds (&gt;20 kts), hull boundary layer turbulence and air bubbles from bow thruster/propeller wash can mask returns → erratic readings</td><td class="ok">Less affected by turbulent flow</td></tr>
    <tr><td>Installation</td><td>Keel-mounted transducer pod (4 beams)</td><td>Hull-penetrating sensor pod (retractable)</td></tr>
    <tr><td>Used for pilotage?</td><td class="ok">YES - transverse speed data aids berthing without tugs</td><td class="bad">NO - no transverse speed</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Self-Noise Limitation - Doppler Log:</strong> The Doppler log transmits at 100–300 kHz. At high speeds or when bow thrusters / thrusters are operating, air entrainment under the hull creates a blanket of acoustic noise that masks the genuine Doppler returns. Result: speed reading drops to zero or jumps erratically. ETO must note this in the bridge log and advise the Master. Solution: reduce speed, deactivate thrusters, or switch to GPS-derived speed until the signal recovers.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Doppler = SOG capable. EM = STW only.</strong> Doppler Janus = 4 beams, cancels motion errors. Bottom track (depth &lt;200 m) = SOG. Water track (depth &gt;200 m) = STW. EM log = Faraday law = conducting seawater in magnetic field → induced EMF = STW. EM has NO depth limit but NO transverse speed.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 15 - ECHO SOUNDER                                -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-echosounder">🌊 Echo Sounder - Piezoelectric Working</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS V/19 mandates depth sounders for all ships &gt;300 GT. Examiners drill the direct vs reverse piezoelectric effects and the dual-frequency selection logic.</strong></div></div>

  <div class="n-formula">Depth = (1500 × t) / 2 = 750 × t<div class="label">t = two-way acoustic travel time in seconds · Speed of sound in seawater ≈ 1500 m/s</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>PZT (Lead Zirconate Titanate) crystal - two effects in same crystal:</strong><br>
  • <strong>Reverse (Converse) Piezoelectric Effect → TRANSMIT:</strong> Apply high-voltage, high-frequency electrical pulse → crystal physically deforms rapidly → vibration → acoustic pressure wave transmitted into water.<br>
  • <strong>Direct Piezoelectric Effect → RECEIVE:</strong> Returning echo pressure wave strikes crystal face → mechanical stress on crystal → small matching voltage generated across electrodes → captured and amplified by receiver circuit.<br><br>
  <strong>Frequencies:</strong><br>
  • <span class="n-val">30–50 kHz</span> - shallow water (high frequency = short wavelength = high resolution). Best for port approach and coastal waters.<br>
  • <span class="n-val">3–12 kHz</span> - deep water (low frequency = long wavelength = better penetration through water column). Best for ocean depths &gt;200 m.
  </div></div>

  <div class="n-h2">Draught Correction - Keel Clearance vs Under-Keel Clearance</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">The echo sounder transducer is mounted flush with the keel, NOT at the waterline. The instrument displays depth from the <strong>transducer face</strong> to the seabed. To determine true <strong>Under-Keel Clearance (UKC)</strong>, the navigator must account for the transducer offset from the actual keel baseline. ETO must ensure the transducer depth offset is correctly programmed into the echo sounder display unit - typically 0.3–1.0 m depending on vessel design. An incorrectly set offset gives optimistic UKC readings and is a safety hazard.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 16 - GYROCOMPASS                                 -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-gyro">🧭 Gyrocompass - Principles &amp; ETO Maintenance</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Mandatory for ships &gt;500 GT. Points to True North independent of magnetic variation. Surveyors ask: principle, errors, settling time, ETO maintenance.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Two Physical Principles:</strong><br>
  • <strong>Gyroscopic Rigidity:</strong> Rapidly spinning heavy mass resists angular change to its spin axis - maintains exact directional orientation fixed in space (gyroscopic inertia). The heavier the rotor and the faster it spins, the stronger the rigidity.<br>
  • <strong>Precession:</strong> External torque applied perpendicular to the spin axis → resulting displacement manifests 90° ahead in the direction of rotation (not in the direction of the applied force).<br><br>
  <strong>North-Seeking Mechanism:</strong> A pendulous gravity-controlled frame + Earth's rotation → continuously applies torque to the gyro → forces the spin axis to precess toward the True North-South meridian. The gyro "settles" on True North after 2–6 hours from cold start.
  </div></div>

  <div class="n-h2">Gyroscope - Three Degrees of Freedom</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Classic surveyor question: "How many degrees of freedom does a gyroscope have? Name them."</strong> (Sanjib, Kamath, Vishwanathan)</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body">A free gyroscope has <strong>three degrees of rotational freedom</strong> - the spin axis can point in any direction in space. These are defined relative to the three perpendicular axes of the gimbal system:<br><br>
  <strong>1. Spin Freedom (Spin Axis):</strong> The rotor spins freely about its own axis at high speed (~6,000 RPM). This spinning mass creates the angular momentum that gives the gyro its rigidity - resistance to any force that tries to tilt the axis.<br><br>
  <strong>2. Tilt Freedom (Horizontal / Elevation Axis):</strong> The inner gimbal allows the spin axis to tilt up or down (change elevation angle). This freedom allows the gyro to maintain its orientation as the ship pitches and rolls without transmitting those movements to the spin axis.<br><br>
  <strong>3. Drift Freedom (Vertical / Azimuth Axis):</strong> The outer gimbal allows the spin axis to rotate in the horizontal plane (change azimuth). This freedom means the gyro can maintain a fixed bearing in space even as the ship turns. "Drift" refers to any slow unwanted change in azimuth caused by bearing friction or Earth's rotation.<br><br>
  <strong>Why all three are needed:</strong> A gyroscope with fewer freedoms would have its spin axis disturbed by the ship's motions. All three gimbals together isolate the rotor completely - the spin axis stays fixed in inertial space regardless of ship pitch, roll, or yaw.</div></div>

  <div class="n-h2">Gyrocompass Errors - ETO must know these</div>
  <table class="n-table">
    <tr><th>Error Type</th><th>Cause</th><th>Effect</th><th>Correction</th></tr>
    <tr><td><strong>Latitude Error</strong></td><td>Earth's curvature - at high latitudes, meridian convergence increases; damping mechanism becomes asymmetric</td><td class="bad">Error increases toward poles. Unreliable above ~<span class="n-val">75° latitude</span></td><td>Use magnetic compass or Iridium GPS heading above 75°N/S</td></tr>
    <tr><td><strong>Speed Error</strong></td><td>Ship's northerly component of velocity adds to/subtracts from the effective horizontal component of Earth's rotation that the gyro "feels"</td><td class="bad">Gyro reads east or west of True North depending on course and speed</td><td>Automatic correction: latitude and speed entered into gyro - modern units auto-correct</td></tr>
    <tr><td><strong>Settling Error</strong></td><td>Residual oscillation during initial run-up before Schuler period damps out</td><td class="bad">Heading oscillates ±1–2° during first 2–6 hours</td><td>Do not rely on compass until settled</td></tr>
    <tr><td><strong>Ballistic Error</strong></td><td>Rapid course/speed change - pendulous ballistic deflection disturbs damping</td><td class="bad">Temporary heading error after sharp manoeuvre</td><td>Allow 10–15 min to resettle after large manoeuver</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Schuler Period:</strong> <span class="n-val">84.4 minutes</span> - the natural oscillation period of a pendulum on Earth's surface equal to Earth's radius in length. Gyrocompasses are specifically designed so their damping time constant corresponds to this Schuler period. This means short-period disturbances (ship acceleration, manoeuvres) are naturally absorbed without causing long-term heading errors. Named after German engineer Maximilian Schuler (1923).</div></div>

  <div class="n-h2">ETO Maintenance Checklist</div>
  <ol class="n-steps">
    <li><strong>Uninterrupted power is mandatory:</strong> Master gyro must be on a dedicated online UPS. Brief power loss → gyro sphere tumbles → requires full 2–6 hour re-settling. NEVER cut power to a running gyro without Master's knowledge</li>
    <li>Verify fluid levels in oil-bath damping spheres. Monitor operating sphere temperature (normal range per maker's manual)</li>
    <li>Clean internal slip ring faces. Inspect carbon contact brushes - electrical noise on brush contacts causes heading errors in repeaters</li>
    <li><strong>Synchro repeater alignment:</strong> Remote repeaters on bridge wings, steering gear room, and engine room receive heading via multi-wire synchro or digital step signals. Verify all repeaters match master gyro heading exactly - misalignment causes compass error on autopilot heading</li>
    <li>Log gyro error (comparison with magnetic compass, celestial observation, or GPS COG) weekly and in the Night Order Book</li>
  </ol>

  <div class="n-card n-info">
    <div class="n-h2">Gyroscope Rotor Speed</div>
    <table class="n-table">
      <tr><th>Type</th><th>Rotor Speed</th><th>Settling Time</th><th>Notes</th></tr>
      <tr><td>Traditional / Conventional</td><td>~2,500 RPM</td><td>4–6 hours</td><td>Older designs; long warm-up needed before departure</td></tr>
      <tr><td>Modern Standard</td><td>~6,000 RPM</td><td>~30 minutes</td><td>Common on current tonnage; quick-start capable</td></tr>
      <tr><td>Aircraft / High-Speed Type</td><td>~30,000 RPM</td><td>3–4 minutes</td><td>Near-instant settling; used where rapid availability is essential</td></tr>
    </table>
    <p class="n-p"><span class="n-val">Key principle:</span> Higher rotor speed → greater angular momentum → faster settling and higher gyroscopic rigidity. The ETO must allow adequate settling time before the compass is relied upon - never use compass until indicated accuracy is within specification.</p>
  </div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 17 - FLUXGATE COMPASS (NEW - GAP FILLED)         -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-fluxgate">🧲 Fluxgate Compass - Working Principle &amp; Role</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath and Vishwanathan: "What is a fluxgate compass? How does it work? When would you use it instead of a gyrocompass?"</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working Principle - Magnetic Saturation Detection:</strong><br>
  A fluxgate compass detects the direction of Earth's magnetic field electronically using the principle of magnetic core saturation.<br><br>
  <strong>Construction:</strong> Two identical toroidal (ring-shaped) ferromagnetic cores are wound with two coils each:<br>
  (1) <strong>Primary (excitation) coil</strong> - carries an AC drive current, periodically saturating and de-saturating the core<br>
  (2) <strong>Secondary (detection) coil</strong> - detects induced voltage changes<br><br>
  <strong>Operation:</strong> When the sensor is aligned with Earth's magnetic field, both cores are magnetised equally and the secondary coil outputs cancel (zero net signal). When the sensor is at an angle to Earth's field, one core saturates earlier than the other → an asymmetric second-harmonic voltage appears in the secondary coils. The magnitude and phase of this second-harmonic signal directly indicates the direction and strength of the Earth's magnetic field component along that axis.<br><br>
  A complete compass uses two or three orthogonal fluxgate sensors to resolve heading in any orientation.</div></div>

  <div class="n-h2">Fluxgate vs Gyrocompass - Comparison</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Fluxgate Compass</th><th>Gyrocompass</th></tr>
    <tr><td>Type</td><td class="hl">Magnetic - measures Earth's field direction</td><td class="hl">Inertial - uses Earth's rotation for north-seeking</td></tr>
    <tr><td>Heading reference</td><td class="bad">Magnetic North - affected by variation and deviation</td><td class="ok">True North - independent of local magnetic field</td></tr>
    <tr><td>Warm-up / settling time</td><td class="ok">Instant - no mechanical spin-up required</td><td class="bad">2–6 hours from cold start</td></tr>
    <tr><td>Power consumption</td><td class="ok">Very low - milliwatts to watts</td><td class="bad">High - AC motor, 200–400 W</td></tr>
    <tr><td>Effect of high latitude</td><td class="bad">Severely degraded near poles - Earth's field goes vertical, horizontal component → zero</td><td class="bad">Speed and latitude errors increase - unreliable above ~75°</td></tr>
    <tr><td>Affected by magnetic interference?</td><td class="bad">YES - cargo, ship's structure, local magnetic fields cause deviation</td><td class="ok">NO - purely inertial, not affected by magnetic fields</td></tr>
    <tr><td>Provides repeaters?</td><td class="ok">YES - digital output to autopilot, course recorder, and AIS heading input</td><td class="ok">YES - synchro signals to multiple repeaters</td></tr>
    <tr><td>SOLAS mandatory?</td><td class="bad">NOT mandatory as primary compass - but accepted as backup / emergency</td><td class="ok">Mandatory for ships &gt;500 GT (SOLAS V/19)</td></tr>
    <tr><td>Typical use on ships</td><td class="ok">Backup compass, AIS heading input source (small vessels), autopilot heading sensor (fast craft)</td><td class="ok">Primary compass - navigation, autopilot, ARPA, AIS</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Deviation and Compensation:</strong> The fluxgate compass is subject to magnetic deviation caused by the ship's own magnetic field (permanent and induced magnetism in the hull, cargo, machinery). A deviation card must be prepared by a compass adjuster. Modern fluxgate compasses have an automatic soft-iron and hard-iron compensation routine that can be run by the ETO: power on, sail a slow 360° circle, the instrument records and compensates for the ship's magnetic signature automatically.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Fluxgate:</strong> <strong>F</strong>luxgate = <strong>F</strong>araday/saturation core + <strong>M</strong>agnetic North (not True) + <strong>I</strong>nstant on + <strong>L</strong>ow power. Think "FMIL." Use fluxgate as: (1) backup when gyro is settling, (2) AIS heading source on small vessels, (3) autopilot input when transiting at slow speed. Never rely on fluxgate alone for passage-making without checking deviation card.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 18 - BNWAS, VDR, SSAS                            -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-bnwas">🚨 BNWAS, VDR &amp; SSAS</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan asks BNWAS stage sequence, VDR 12 inputs, and SSAS covert operation.</strong></div></div>

  <div class="n-h2">BNWAS - 3-Stage Alarm Sequence (SOLAS V/19.2.2)</div>
  <ul class="n-list">
    <li><strong>Dormant period:</strong> <span class="n-val">3–12 minutes</span> (adjustable). OOW must reset timer by pressing pushbuttons or interacting with navigation systems (RADAR trackball, ECDIS). Inactivity implies OOW is incapacitated.</li>
    <li><strong>Stage 1 (Bridge only):</strong> Localised buzzer on bridge activates for 15 seconds - final chance for OOW to acknowledge and reset</li>
    <li><strong>Stage 2 (Command cabins):</strong> Alarm extends to Master's cabin and duty officer cabins - summons backup bridge watchkeeper</li>
    <li><strong>Stage 3 (Crew spaces):</strong> Emergency buzzers in engine room and common crew areas - summons all available crew assistance to bridge</li>
  </ul>

  <div class="n-h2">VDR - 12 Mandatory Inputs (IEC 61996)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Orange crash-survivable capsule:</strong> Withstands <span class="n-val">260°C for 10 hours</span> and <span class="n-val">6000 m</span> water pressure. Ships &gt;<span class="n-val">3000 GT</span> = full VDR. Ships &gt;<span class="n-val">500 GT</span> built before 2002 = Simplified VDR (SVDR - fewer inputs, less stringent capsule).<br><br>
  <strong>12 mandatory inputs:</strong> (1) Date/Time UTC, (2) GPS Position, (3) STW (Speed Through Water), (4) SOG (Speed Over Ground), (5) Gyro Heading, (6) Bridge Audio (microphone), (7) VHF Radio Audio, (8) RADAR Display image, (9) AIS Data, (10) ECDIS Display, (11) Rudder Order and Response, (12) Engine Telegraph Order and Response.</div></div>

  <div class="n-h2">SSAS - Covert Ship Security Alert</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>SSAS (SOLAS XI-2, ISPS Code) - anti-piracy covert distress system:</strong> Hidden pushbutton (minimum 2 onboard: bridge + secret crew space) transmits a SILENT satellite alert to the Company Security Officer (CSO) and flag state authority. NO sirens, NO on-screen alerts, NO buzzers onboard - hijackers cannot know the alert was sent. Tested quarterly using special test codes that simulate the transmission without triggering a real armed forces response. ETO maintains the satellite link that SSAS operates over.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 19 - NAVIGATION LIGHTS                           -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-navlights">🚦 Navigation Lights - COLREG Arcs &amp; BITT</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan checks exact arc angles, visibility ranges, and BITT monitoring circuit operation.</strong></div></div>

  <table class="n-table">
    <tr><th>Light</th><th>Colour</th><th>Arc</th><th>Range</th><th>Location</th></tr>
    <tr><td>Masthead (forward)</td><td>White</td><td class="hl"><span class="n-val">225°</span> (112.5° each side of dead ahead)</td><td class="hl">Min <span class="n-val">6 nm</span></td><td>Foremast, min 6 m above hull</td></tr>
    <tr><td>Masthead (aft)</td><td>White</td><td class="hl"><span class="n-val">225°</span></td><td class="hl">Min <span class="n-val">6 nm</span></td><td>Mainmast, higher than fore light by min 4.5 m</td></tr>
    <tr><td>Port sidelight</td><td class="bad">Red</td><td class="hl"><span class="n-val">112.5°</span> (dead ahead to 22.5° abaft port beam)</td><td class="hl">Min <span class="n-val">3 nm</span></td><td>Port bridge wing, fitted with screen</td></tr>
    <tr><td>Starboard sidelight</td><td class="ok">Green</td><td class="hl"><span class="n-val">112.5°</span></td><td class="hl">Min <span class="n-val">3 nm</span></td><td>Starboard bridge wing, fitted with screen</td></tr>
    <tr><td>Sternlight</td><td>White</td><td class="hl"><span class="n-val">135°</span> (67.5° each side from dead astern)</td><td class="hl">Min <span class="n-val">3 nm</span></td><td>Aft taffrail centre</td></tr>
    <tr><td>Anchor lights</td><td>White</td><td class="hl"><span class="n-val">360°</span> all-round</td><td class="hl">Min <span class="n-val">3 nm</span></td><td>Forward high mast + lower aft mast</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>BITT (Built-In Integrity Test):</strong> The navigation light control panel continuously monitors each light circuit current. Even when a light is OFF, BITT injects a microscopic monitoring pulse down the circuit. If a bulb filament snaps or a fuse blows → current drops to zero → BITT registers an open circuit instantly → audible and visual alarm on the bridge panel pinpoints the failed light by name and circuit. Typical lamp rating: 60–65 W. Dual-filament or primary/secondary bulb sockets provide auto-changeover on failure.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 20 - STEERING MODES                              -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-steeringmodes">🎛️ Steering Control Modes - FU vs NFU</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal and Kamath drill the difference between closed-loop FU and open-loop NFU modes. "What happens if the follow-up feedback potentiometer fails?"</strong></div></div>

  <table class="n-table">
    <tr><th>Mode</th><th>Type</th><th>How It Works</th><th>When Used</th></tr>
    <tr><td><strong>Follow-Up (FU)</strong></td><td class="ok">Closed-loop servo</td><td>Helm angle command → solenoid valve → hydraulic rams → rudder moves → feedback linkage (hunting gear) or rotary potentiometer measures actual rudder angle → when rudder matches helm command → feedback cancels solenoid energisation → rudder locks at commanded angle</td><td class="ok">Normal navigation - precise, automatic position control</td></tr>
    <tr><td><strong>Non-Follow-Up (NFU)</strong></td><td class="hl">Open-loop bypass</td><td>Joystick held in direction → solenoid directly energised continuously → rudder moves while held → release lever → rudder freezes wherever it stopped. No position feedback - helmsman watches rudder angle indicator and releases at correct moment</td><td class="hl">Emergency backup if FU feedback system fails; bespoke manoeuvers in confined waters</td></tr>
    <tr><td><strong>Autopilot</strong></td><td class="ok">PID closed-loop</td><td>PID algorithm processes heading error (gyro heading vs desired set course) → automatically drives rudder via FU system without manual input. Can include weather adjustment for sea state</td><td class="ok">Open sea passage - hands-free steering</td></tr>
    <tr><td><strong>Remote (Wheelhouse → Steering Gear Room)</strong></td><td class="hl">Hardwired backup</td><td>Direct helm control from steering gear room local panel - bypasses bridge control entirely. Used during bridge equipment failure or drills</td><td class="hl">Emergency - bridge steering system failure</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - ALL KEY FIGURES:</strong> Doppler Janus = 4 beams, bottom track = SOG (&lt;200m), water track = STW. Echo sounder = 750 × t metres. Gyro settles 2–6 hr, never cut power. BNWAS: 3–12 min dormant → Stage 1 bridge → Stage 2 cabins → Stage 3 crew spaces. VDR: 12 inputs, orange capsule 260°C / 6000m. SSAS = silent anti-piracy satellite alert. Nav lights: masthead 225°/6 nm, side 112.5°/3 nm, stern 135°/3 nm. FU = closed-loop servo, NFU = open-loop emergency.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 21 - SURVEYOR Q&A                                -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 13</div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the difference between X-band and S-band RADAR? (All surveyors)</strong><br><strong>Ideal Answer:</strong> X-band: <span class="n-val">9 GHz</span>, <span class="n-val">3 cm</span> wavelength - high resolution, excellent target discrimination, preferred for confined waters and collision avoidance. Poor rain penetration. S-band: <span class="n-val">3 GHz</span>, <span class="n-val">10 cm</span> wavelength - penetrates rain and fog better, lower resolution, larger antenna. Preferred for open ocean and bad weather. Ships &gt;<span class="n-val">10,000 GT</span> must have S-band as second radar per SOLAS V/19.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the difference between a magnetron RADAR and solid state RADAR? (Sanjib, Kamath)</strong><br><strong>Ideal Answer:</strong> Magnetron radar uses a high-power vacuum tube to generate short pulses at <span class="n-val">10–50 kW</span> peak - the tube degrades after <span class="n-val">2,000–5,000 hours</span> and must be replaced. Minimum range (blind spot) is <span class="n-val">15–50 m</span>. Solid state FMCW radar uses semiconductor amplifiers - transmits a continuous chirp at only <span class="n-val">1–50 W</span> but uses coherent signal processing to achieve equal or better sensitivity. Advantages: no tube to replace, instant on, very small blind spot, inherent Doppler processing separates sea clutter from real targets, low power consumption. Modern vessels are increasingly fitted with solid state.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is GMDSS? List all equipment. (All surveyors)</strong><br><strong>Ideal Answer:</strong> GMDSS ensures any ship in distress can alert rescue authorities and receive safety information. Equipment by sea area: VHF DSC (Ch <span class="n-val">70</span> DSC, Ch <span class="n-val">16</span> voice - all areas), MF/HF radio (A2/A3/A4), Inmarsat-C or Iridium RMSS (A3/A4), NAVTEX (<span class="n-val">518/490 kHz</span>), EPIRB (<span class="n-val">406 MHz</span> float-free), SART (<span class="n-val">9 GHz</span>, min 2 per ship &gt;500 GT), 3 portable VHF, AIS, VDR. All backed by dedicated GMDSS battery (SOLAS Ch IV Reg 13). 2024 update: NBDP no longer mandatory; VHF-EPIRB no longer accepted; Iridium approved alongside Inmarsat.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Difference between SART and EPIRB? How many? Frequency? Range? (Sanjib, Kamath)</strong><br><strong>Ideal Answer:</strong> EPIRB = global distress alerting to shore via satellite. <span class="n-val">406 MHz</span> satellite + <span class="n-val">121.5 MHz</span> aircraft homing. Global range via COSPAS-SARSAT. Min <span class="n-val">1</span> per ship, float-free HRU at <span class="n-val">1–4 m</span> depth. Battery <span class="n-val">48 hours</span>. SART = short-range homing by rescuing ships. <span class="n-val">9 GHz</span> X-band. Creates <span class="n-val">12-dot</span> radial line on radar. Range ~<span class="n-val">5 nm</span> ship, <span class="n-val">10 nm</span> aircraft. Min <span class="n-val">2</span> per ship &gt;500 GT. Battery: <span class="n-val">96 hr</span> standby + <span class="n-val">8 hr</span> active.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is SafetyNET? What receives it? (Kamath, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> SafetyNET is the satellite broadcast service for Maritime Safety Information (MSI) via the Inmarsat EGC (Enhanced Group Call) channel. It delivers navigational warnings, meteorological warnings, SAR coordination messages, and piracy alerts to ships in A3 and A4 areas - equivalent to NAVTEX but global. It is received on the <strong>Inmarsat C terminal</strong> only - Fleet Broadband does NOT receive SafetyNET. The Inmarsat C must remain on and the correct NAVAREA selected for MSI reception.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>How do you perform a GMDSS battery load test? (Vishwanathan, Nair)</strong><br><strong>Ideal Answer:</strong> Performed annually in port. Notify Master. Isolate battery charger completely. Power ALL GMDSS equipment from battery only. Monitor for SOLAS duration: <span class="n-val">6 hours</span> without UPS, or <span class="n-val">1 hour</span> with UPS. Voltage must remain &gt;<span class="n-val">90%</span> of nominal throughout (e.g. &gt;<span class="n-val">21.6 V</span> for a 24 V system). Log start and end voltages. Replace battery when capacity &lt;<span class="n-val">80%</span> rated.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is a fluxgate compass and when is it used? (Kamath, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> A fluxgate compass detects Earth's magnetic field direction using the principle of magnetic core saturation - two toroidal ferromagnetic cores wound with excitation and detection coils; asymmetric saturation induced by Earth's field creates a second-harmonic voltage proportional to heading. It indicates <strong>Magnetic North</strong> (not True North), requires deviation correction. Advantages: instant on (no settling time), very low power, compact. Disadvantages: affected by ship's magnetic field, unreliable near poles (horizontal field → zero). Used on ships as: backup compass during gyro settling/failure, AIS heading input source on small vessels, autopilot sensor on fast craft. Not SOLAS-mandatory as a primary compass.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the Janus configuration of a Doppler log? (Deswal, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> The Janus configuration uses four acoustic transducers arranged in equal, opposite pairs angled at approximately 30° to the vertical - forward-port, aft-starboard, forward-starboard, aft-port beams. The symmetrical pairing cancels errors from ship's pitch, roll, and sound speed variations, and gives simultaneous longitudinal and transverse speed vectors. Bottom tracking (depth &lt;200 m) gives Speed Over Ground; water tracking (depth &gt;200 m) gives Speed Through Water. The Doppler frequency shift formula is: Δf = (2 × f × v × cosθ) / c.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the BNWAS and how does its alarm sequence work? (Vishwanathan)</strong><br><strong>Ideal Answer:</strong> BNWAS (Bridge Navigational Watch Alarm System) detects incapacitation of the Officer of the Watch. Dormant period is <span class="n-val">3–12 minutes</span> adjustable - OOW must reset by pressing pushbuttons or interacting with RADAR/ECDIS. If not reset: Stage 1 (bridge buzzer, 15 sec) → Stage 2 (Master's and duty officer cabins) → Stage 3 (engine room and crew spaces). Required by SOLAS V/19.2.2 on all ships &gt;150 GT built after July 2011.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What are the 2024 changes to GMDSS? (Sanjib, Kamath - increasingly common)</strong><br><strong>Ideal Answer:</strong> Three main changes from January 2024: (1) NBDP Telex is no longer mandatory - removed as a GMDSS requirement. (2) VHF-EPIRB is no longer accepted for any sea area - all ships must carry 406 MHz COSPAS-SARSAT EPIRB. (3) "Inmarsat" monopoly ended - replaced by RMSS (Recognised Mobile Satellite Service); Iridium is now an approved RMSS providing true polar coverage for A4 operations via LEO satellites.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!--  SECTION 22 - QUICK REVISION                              -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 13</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points</th></tr>
    <tr><td>X-band vs S-band RADAR</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>X = <span class="n-val">9 GHz / 3 cm</span> / high res / confined waters | S = <span class="n-val">3 GHz / 10 cm</span> / rain penetration / open ocean | &gt;10,000 GT must have S-band second radar</td></tr>
    <tr><td>Solid State vs Magnetron RADAR</td><td class="hl">⭐⭐⭐⭐ Sanjib, Kamath</td><td>Magnetron = <span class="n-val">10–50 kW</span> pulsed, tube life <span class="n-val">2–5k hrs</span>, blind spot <span class="n-val">15–50 m</span> | Solid state FMCW = <span class="n-val">1–50 W</span> continuous chirp, no tube, instant on, small blind spot, Doppler clutter filtering</td></tr>
    <tr><td>GMDSS equipment list</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>VHF DSC Ch 70 + VHF Ch 16 + MF/HF + RMSS (Inmarsat-C / Iridium) + NAVTEX + EPIRB + SART + 3×VHF portable + AIS + VDR + battery</td></tr>
    <tr><td>GMDSS 2024 changes</td><td class="hl">⭐⭐⭐⭐ Sanjib, Kamath</td><td>OUT: NBDP mandatory, VHF-EPIRB, Inmarsat monopoly | IN: 406 MHz mandatory everywhere, RMSS, Iridium LEO approved</td></tr>
    <tr><td>EPIRB</td><td class="hl">⭐⭐⭐⭐⭐ Sanjib, Kamath</td><td><span class="n-val">406 MHz</span> satellite | <span class="n-val">121.5 MHz</span> aircraft | float free <span class="n-val">1–4 m</span> | <span class="n-val">48 hr</span> battery | HRU every <span class="n-val">2 yr</span> | battery every <span class="n-val">5 yr</span></td></tr>
    <tr><td>SART</td><td class="hl">⭐⭐⭐⭐⭐ Sanjib, Kamath</td><td><span class="n-val">9 GHz</span> | <span class="n-val">12 dots</span> radial on radar | <span class="n-val">5 nm</span> ship | <span class="n-val">10 nm</span> aircraft | <span class="n-val">2</span> per ship &gt;<span class="n-val">500 GT</span> | <span class="n-val">96 hr</span> standby | <span class="n-val">8 hr</span> active</td></tr>
    <tr><td>VHF channels</td><td class="hl">⭐⭐⭐⭐ Multiple surveyors</td><td>Ch <span class="n-val">70</span> = DSC alerts only (<span class="n-val">156.525 MHz</span>) | Ch <span class="n-val">16</span> = voice/watch | MF DSC = <span class="n-val">2187.5 kHz</span></td></tr>
    <tr><td>NAVTEX frequencies</td><td class="hl">⭐⭐⭐⭐ Multiple surveyors</td><td><span class="n-val">518 kHz</span> English | <span class="n-val">490 kHz</span> national | <span class="n-val">4209.5 kHz</span> HF | range <span class="n-val">200–400 nm</span> MF</td></tr>
    <tr><td>Inmarsat C vs Fleet BB</td><td class="hl">⭐⭐⭐ Kamath, Vishwanathan</td><td>Inmarsat C = GMDSS mandatory, SafetyNET YES, <span class="n-val">600 bps</span>, small omnidirectional antenna | Fleet BB = NOT GMDSS, SafetyNET NO, <span class="n-val">150 kbps+</span>, big tracking dish</td></tr>
    <tr><td>GMDSS battery test</td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Nair</td><td>Annual in port | <span class="n-val">6 hr</span> without UPS | <span class="n-val">1 hr</span> with UPS | &gt;<span class="n-val">90%</span> voltage | replace at &lt;<span class="n-val">80%</span> capacity</td></tr>
    <tr><td>AIS</td><td class="hl">⭐⭐⭐⭐ Vishwanathan</td><td>Class A = <span class="n-val">12.5 W</span>, <span class="n-val">2–10 s</span> update | Ch <span class="n-val">87B: 161.975 MHz</span> | Ch <span class="n-val">88B: 162.025 MHz</span> | TDMA</td></tr>
    <tr><td>Doppler log Janus</td><td class="hl">⭐⭐⭐⭐ Deswal, Vishwanathan</td><td>4-beam Janus | bottom track (&lt;<span class="n-val">200 m</span>) = SOG | water track = STW | Δf = (2fv cosθ)/c | biofouling degrades accuracy</td></tr>
    <tr><td>Doppler vs EM log</td><td class="hl">⭐⭐⭐ Kamath</td><td>Doppler = SOG or STW, has transverse speed | EM = STW only (Faraday), no depth limit, no transverse speed</td></tr>
    <tr><td>Echo sounder</td><td class="hl">⭐⭐⭐ Multiple surveyors</td><td>PZT crystal: reverse effect = transmit, direct effect = receive | Depth = 750 × t | shallow = 30–50 kHz | deep = 3–12 kHz</td></tr>
    <tr><td>Gyrocompass</td><td class="hl">⭐⭐⭐⭐ Multiple surveyors</td><td>Rigidity + precession → True North | Schuler period <span class="n-val">84.4 min</span> | Settle <span class="n-val">2–6 hr</span> | &gt;500 GT mandatory | never cut power</td></tr>
    <tr><td>Fluxgate compass</td><td class="hl">⭐⭐⭐ Kamath, Vishwanathan</td><td>Magnetic saturation - detects Magnetic North | instant on, low power | affected by deviation | backup compass / AIS heading source on small vessels</td></tr>
    <tr><td>BNWAS</td><td class="hl">⭐⭐⭐⭐ Vishwanathan</td><td><span class="n-val">3–12 min</span> dormant → Stage 1 bridge → Stage 2 cabins → Stage 3 crew | &gt;150 GT from July 2011</td></tr>
    <tr><td>VDR</td><td class="hl">⭐⭐⭐⭐ Vishwanathan</td><td>12 inputs | orange capsule <span class="n-val">260°C / 6000 m</span> | &gt;3000 GT full VDR | &gt;500 GT pre-2002 = SVDR</td></tr>
    <tr><td>SSAS</td><td class="hl">⭐⭐⭐⭐ Vishwanathan</td><td>Silent covert anti-piracy alert | no onboard alarm | 2 hidden buttons | test quarterly with special code | alert to CSO and flag state</td></tr>
    <tr><td>Nav lights</td><td class="hl">⭐⭐⭐⭐ Vishwanathan</td><td>Masthead 225°/6 nm | Side 112.5°/3 nm | Stern 135°/3 nm | Anchor 360°/3 nm | BITT monitors circuit current continuously</td></tr>
    <tr><td>Steering modes</td><td class="hl">⭐⭐⭐⭐ Deswal, Kamath</td><td>FU = closed-loop servo (hunting gear feedback) | NFU = open-loop bypass (no feedback, helmsman watches indicator) | Autopilot = PID closed-loop</td></tr>
  </table>

  </div>
</div>
</div>
`);
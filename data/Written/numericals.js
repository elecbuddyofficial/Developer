window.NUMERICALS = [
  {
    id: "n01",
    tier: 1,
    frequency: 20,
    categoryId: "frequency",
    title: "1. Equivalent Capacitance (Series vs Parallel) & RL Circuit",
    year: "Jan 2024",
    years: "2018/FEB, 2018/AUG, 2018/SEP, 2018/OCT, 2018/NOV, 2018/DEC, 2019/FEB, 2019/MAR, 2019/JUN, 2019/SEP, 2019/OCT1, 2020/MAR, 2020/DEC, 2021/MAR, 2021/OCT, 2021/NOV, 2022/APR, 2022/JUN, 2024/SEP, 2024/DEC",
    givenData: "Resistance (R) = 3Ω, Inductance (L) = 0.01H, Supply Voltage (V) = 60V, Frequency (f) = 50Hz.",
    solutionStepsHtml: `
            <ol style="margin-top:0;">
              <li><strong>Given Data:</strong><br>
                Resistance (R) = 3Ω, Inductance (L) = 0.01H, Supply Voltage (V) = 60V, Frequency (f) = 50Hz.
              </li>
              <li><strong>Step 1: Calculate Inductive Reactance (X<sub>L</sub>)</strong><br>
                <div class="n-formula">
                  X<sub>L</sub> = 2πfL<br>
                  X<sub>L</sub> = 2 × 3.142 × 50 × 0.01 = <span class="n-val">3.14 Ω</span>
                </div>
              </li>
              <li><strong>Step 2: Calculate Impedance (Z)</strong><br>
                <div class="n-formula">
                  Z = √(R² + X<sub>L</sub>²)<br>
                  Z = √(3² + 3.14²)<br>
                  Z = √(9 + 9.86) = √(18.86) = <span class="n-val">4.34 Ω</span>
                </div>
              </li>
              <li><strong>Step 3: Calculate Current (I)</strong><br>
                <div class="n-formula">
                  I = V / Z<br>
                  I = 60 / 4.34 = <span class="n-val">13.82 A</span>
                </div>
              </li>
              <li><strong>Step 4: Calculate Power Factor (cos φ)</strong><br>
                <div class="n-formula">
                  cos φ = R / Z<br>
                  cos φ = 3 / 4.34 = <span class="n-val">0.691 (lagging)</span>
                </div>
              </li>
              <li><strong>Step 5: Calculate Power Absorbed (P)</strong><br>
                <div class="n-formula">
                  P = VI cos φ<br>
                  P = 60 × 13.82 × 0.691 = <span class="n-val">573.0 W</span>
                </div>
                <div style="font-size:13px; color:var(--text2); margin-top:6px;"><em>Alternative using P = I²R:</em> P = (13.82)² × 3 = 573.0 W</div>
              </li>
            </ol>
    `,
    finalAnswersHtml: `
            <table style="width:100%; border-collapse:collapse; font-size:14px; text-align:left; border-radius:8px; overflow:hidden; box-shadow:0 0 0 1px var(--border2);">
              <thead>
                <tr style="background:var(--surface3);">
                  <th style="padding:10px 16px; border-bottom:1px solid var(--border2); font-weight:600; color:var(--text2);">Quantity</th>
                  <th style="padding:10px 16px; border-bottom:1px solid var(--border2); font-weight:600; color:var(--text2);">Answer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding:10px 16px; border-bottom:1px solid var(--border2); color:var(--text);">Inductive Reactance</td>
                  <td style="padding:10px 16px; border-bottom:1px solid var(--border2); font-weight:700; color:var(--blue);">3.14 Ω</td>
                </tr>
                <tr>
                  <td style="padding:10px 16px; border-bottom:1px solid var(--border2); color:var(--text);">Impedance</td>
                  <td style="padding:10px 16px; border-bottom:1px solid var(--border2); font-weight:700; color:var(--blue);">4.34 Ω</td>
                </tr>
                <tr>
                  <td style="padding:10px 16px; border-bottom:1px solid var(--border2); color:var(--text);">Current</td>
                  <td style="padding:10px 16px; border-bottom:1px solid var(--border2); font-weight:700; color:var(--blue);">13.82 A</td>
                </tr>
                <tr>
                  <td style="padding:10px 16px; border-bottom:1px solid var(--border2); color:var(--text);">Power Factor</td>
                  <td style="padding:10px 16px; border-bottom:1px solid var(--border2); font-weight:700; color:var(--blue);">0.691 lagging</td>
                </tr>
                <tr>
                  <td style="padding:10px 16px; color:var(--text);">Power Absorbed</td>
                  <td style="padding:10px 16px; font-weight:700; color:var(--blue);">573.0 W</td>
                </tr>
              </tbody>
            </table>
    `,
    conceptHtml: `
          <div style="position:relative; margin-left:12px; padding-left:28px; border-left:2px dashed var(--border2); margin-top: 10px;">
            <div style="position:relative; margin-bottom:24px;">
              <div style="position:absolute; left:-37px; top:16px; width:16px; height:16px; background:var(--blue); border-radius:50%; border:3px solid var(--surface); box-shadow:0 0 0 1px var(--border2);"></div>
              <div class="n-card" style="margin:0; padding:16px;">
                <div class="card-title" style="color:var(--text); font-size:12px;">1. What is an RL Circuit?</div>
                <div class="card-desc" style="font-size:13px;">
                  Contains <strong>Resistance (R)</strong> (opposes current) and <strong>Inductance (L)</strong> (opposes change in current). Causes current to lag behind voltage.
                </div>
              </div>
            </div>

            <div style="position:relative; margin-bottom:24px;">
              <div style="position:absolute; left:-37px; top:16px; width:16px; height:16px; background:var(--blue); border-radius:50%; border:3px solid var(--surface); box-shadow:0 0 0 1px var(--border2);"></div>
              <div class="n-card" style="margin:0; padding:16px;">
                <div class="card-title" style="color:var(--text); font-size:12px;">2. Inductive Reactance</div>
                <div class="card-desc" style="font-size:13px;">
                  Inductors oppose AC current based on frequency and inductance. Without this step, total opposition is unknown.
                  <div class="n-formula" style="margin:10px 0; padding:8px; font-size:13px;">X<sub>L</sub> = 2πfL</div>
                </div>
              </div>
            </div>

            <div style="position:relative; margin-bottom:24px;">
              <div style="position:absolute; left:-37px; top:16px; width:16px; height:16px; background:var(--blue); border-radius:50%; border:3px solid var(--surface); box-shadow:0 0 0 1px var(--border2);"></div>
              <div class="n-card" style="margin:0; padding:16px;">
                <div class="card-title" style="color:var(--text); font-size:12px;">3. Impedance (Z)</div>
                <div class="card-desc" style="font-size:13px;">
                  The AC equivalent of resistance. R and X<sub>L</sub> are 90° apart and must be combined via Pythagoras:
                  <div class="n-formula" style="margin:10px 0; padding:8px; font-size:13px;">Z = √(R² + X<sub>L</sub>²)</div>
                </div>
              </div>
            </div>

            <div style="position:relative; margin-bottom:24px;">
              <div style="position:absolute; left:-37px; top:16px; width:16px; height:16px; background:var(--blue); border-radius:50%; border:3px solid var(--surface); box-shadow:0 0 0 1px var(--border2);"></div>
              <div class="n-card" style="margin:0; padding:16px;">
                <div class="card-title" style="color:var(--text); font-size:12px;">4. Current (I)</div>
                <div class="card-desc" style="font-size:13px;">
                  Ohm's Law applies to AC using Impedance instead of Resistance. Once Z is known, calculate I:
                  <div class="n-formula" style="margin:10px 0; padding:8px; font-size:13px;">I = V / Z</div>
                </div>
              </div>
            </div>

            <div style="position:relative; margin-bottom:24px;">
              <div style="position:absolute; left:-37px; top:16px; width:16px; height:16px; background:var(--blue); border-radius:50%; border:3px solid var(--surface); box-shadow:0 0 0 1px var(--border2);"></div>
              <div class="n-card" style="margin:0; padding:16px;">
                <div class="card-title" style="color:var(--text); font-size:12px;">5. Power Factor (cos φ)</div>
                <div class="card-desc" style="font-size:13px;">
                  Indicates efficiency. Inductors cause current lag, giving a <strong>lagging</strong> power factor.
                  <div class="n-formula" style="margin:10px 0; padding:8px; font-size:13px;">cos φ = R / Z</div>
                </div>
              </div>
            </div>

            <div style="position:relative; margin-bottom:24px;">
              <div style="position:absolute; left:-37px; top:16px; width:16px; height:16px; background:var(--blue); border-radius:50%; border:3px solid var(--surface); box-shadow:0 0 0 1px var(--border2);"></div>
              <div class="n-card" style="margin:0; padding:16px;">
                <div class="card-title" style="color:var(--text); font-size:12px;">6. Power Consumed (P)</div>
                <div class="card-desc" style="font-size:13px;">
                  Inductors store energy but don't consume it. All real power is dissipated purely in the resistor.
                  <div class="n-formula" style="margin:10px 0; padding:8px; font-size:13px;">P = VI cos φ<br><span style="color:var(--text2);font-size:11px;">or</span> P = I²R</div>
                </div>
              </div>
            </div>

            <div style="position:relative; margin-bottom:24px;">
              <div style="position:absolute; left:-37px; top:16px; width:16px; height:16px; background:var(--green); border-radius:50%; border:3px solid var(--surface); box-shadow:0 0 0 1px var(--border2);"></div>
              <div class="n-card" style="margin:0; padding:16px;">
                <div class="card-title" style="color:var(--text); font-size:12px;">Optional: RC Circuit Contrast</div>
                <div class="card-desc" style="font-size:13px;">
                  Unlike an RL circuit, an RC circuit contains a capacitor that opposes voltage changes. Current <strong>leads</strong> the voltage.
                  <div class="n-formula" style="margin:10px 0; padding:8px; font-size:13px;">X<sub>C</sub> = 1 / (2πfC)</div>
                </div>
              </div>
            </div>

            <div style="position:relative; margin-bottom:24px;">
              <div style="position:absolute; left:-37px; top:16px; width:16px; height:16px; background:var(--orange); border-radius:50%; border:3px solid var(--surface); box-shadow:0 0 0 1px var(--border2);"></div>
              <div class="n-card" style="margin:0; padding:16px;">
                <div class="card-title" style="color:var(--text); font-size:12px;">Optional: Resonant Frequency</div>
                <div class="card-desc" style="font-size:13px;">
                  Occurs when X<sub>L</sub> = X<sub>C</sub>. Reactances cancel, making impedance purely resistive (Z = R) with a power factor of 1.
                  <div class="n-formula" style="margin:10px 0; padding:8px; font-size:13px;">f<sub>r</sub> = 1 / (2π√(LC))</div>
                </div>
              </div>
            </div>
          </div>
    `
  },
  {
    id: 'n02',
    tier: 1,
    frequency: 15,
    title: "2. Alternators True/Apparent Power & KVA Rating Calculation",
    years: "2018/DEC, 2018/FEB, 2019/FEB, 2019/AUG, 2019/OCT1, 2019/OCT2, 2019/DEC, 2021/FEB, 2021/APR1, 2021/JUL1, 2022/JAN, 2022/APR, 2022/JUN, 2025/JAN, 2025/AUG",
    givenData: "a) Briefly explain true power, Apparent power and power factor?<br>b) The alternator is rated for 750 KVA at 0.85 PF, what is the maximum load (Kilo Watt) that can be put on it? Would you be overloading the alternator if the Kilowatt reading were now 620 kW and the power factor 0.80?",
    solutionStepsHtml: `
            <ol style="margin-top:0;">
              <li><strong>Given Data:</strong><br>
                Rated Apparent Power (S) = 750 kVA, Rated Power Factor (PF) = 0.85<br>
                Actual Load (P) = 620 kW, Operating Power Factor (PF) = 0.80
              </li>
              <li><strong>Step 1: Calculate Maximum Real Power (kW)</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">Goal: Calculate maximum real power.</div>
                <div class="n-formula">
                  P = S × PF<br>
                  P = 750 × 0.85 = <span class="n-val">637.5 kW</span>
                </div>
              </li>
              <li><strong>Step 2: Calculate Actual Apparent Power (kVA)</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">Goal: Find the actual apparent power being supplied.</div>
                <div class="n-formula">
                  S = P / PF<br>
                  S = 620 / 0.80 = <span class="n-val">775 kVA</span>
                </div>
              </li>
              <li><strong>Step 3: Check whether the alternator is overloaded</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">Compare Rated Capacity (750 kVA) with Actual Load (775 kVA).</div>
                <div style="margin-top:10px; padding:12px; background:var(--surface2); border-left:4px solid var(--orange); border-radius:4px;">
                  Since <strong>775 kVA &gt; 750 kVA</strong>, the alternator is overloaded by:<br>
                  775 - 750 = <strong>25 kVA</strong>
                </div>
              </li>
            </ol>
            
            <div style="margin-top:40px; padding-top:20px; border-top:1px dashed var(--border2);">
              <div style="font-weight:700; color:var(--text); margin-bottom:20px; font-size:15px; display:flex; align-items:center; gap:8px;">
                <span style="color:var(--blue);">▶</span> Solution Flow
              </div>
              <div style="display:flex; flex-direction:column; gap:12px; font-size:13px;">
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>1. Given Values</strong><br>
                  <span style="color:var(--text2);">(S = 750 kVA, PF = 0.85, P = 620 kW, PF = 0.80)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>2. Maximum kW</strong><br>
                  <span style="color:var(--text2);">(P = S × PF)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>3. Actual kVA</strong><br>
                  <span style="color:var(--text2);">(S = P / PF)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>4. Compare with Rated kVA</strong>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:rgba(249,115,22,0.1); border:1px solid rgba(249,115,22,0.3); border-radius:6px; color:var(--text);">
                  <strong>5. State Whether Overloaded</strong>
                </div>
              </div>
            </div>
    `,
    finalAnswersHtml: `
            <table style="width:100%; border-collapse:collapse; font-size:14px; text-align:left; border-radius:8px; overflow:hidden; box-shadow:0 0 0 1px var(--border2);">
              <thead>
                <tr style="background:var(--surface3); color:var(--text2);">
                  <th style="padding:12px 16px; font-weight:600;">Quantity</th>
                  <th style="padding:12px 16px; font-weight:600; text-align:right;">Answer</th>
                </tr>
              </thead>
              <tbody style="background:var(--surface2);">
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Maximum Load</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--text);">637.5 kW</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Actual Apparent Power</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--text);">775 kVA</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Overloaded?</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--orange);">Yes</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; color:var(--text);">Amount of Overload</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--red);">25 kVA</td>
                </tr>
              </tbody>
            </table>
    `,
    conceptHtml: `
          <div style="padding:10px 20px 20px; font-size:14px; line-height:1.6; color:var(--text2);">
            <div style="font-size:16px; font-weight:700; color:var(--text); margin-bottom:12px;">Understanding the Three Types of Power</div>
            <p>In an AC circuit, electrical power is divided into three types: <strong>Apparent Power (S)</strong>, <strong>Active (True) Power (P)</strong>, and <strong>Reactive Power (Q)</strong>.</p>
            <p>These three powers together form the <strong>Power Triangle</strong>, which is the foundation of almost every alternator numerical.</p>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">1. Apparent Power (S)</div>
            <p>Imagine an alternator supplying electricity to a motor. The alternator only "sees" the voltage it supplies and the current flowing out of it. It cannot distinguish whether the current is doing useful work or merely creating magnetic fields. Therefore, the total power supplied by the alternator is called Apparent Power.</p>
            <div class="n-formula" style="padding:12px; margin:12px 0;">S = VI <span style="font-size:12px; color:var(--text3); margin-left:10px;">(Unit: VA or kVA)</span></div>
            <p>Since alternators heat due to current, they are always rated in kVA, not kW.</p>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">2. Active (True) Power (P)</div>
            <p>Not all the supplied power performs useful work. The portion actually converted into mechanical rotation, heat, or light is called Active Power. This is the power that produces useful output.</p>
            <div class="n-formula" style="padding:12px; margin:12px 0;">P = VI cos φ <span style="font-size:12px; color:var(--text3); margin-left:10px;">(Unit: W or kW)</span></div>
            <p>The term cos φ represents the fraction of the apparent power that becomes useful power.</p>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">3. Reactive Power (Q)</div>
            <p>Motors and transformers contain inductive windings. These windings continuously store energy in a magnetic field and then return it back to the supply. This power keeps moving back and forth between the source and the load. It performs no useful work, but current still flows because of it. This is called Reactive Power.</p>
            <div class="n-formula" style="padding:12px; margin:12px 0;">Q = VI sin φ <span style="font-size:12px; color:var(--text3); margin-left:10px;">(Unit: VAR or kVAR)</span></div>
            <p>Reactive power is essential because induction motors and transformers cannot operate without creating magnetic fields.</p>

            <div style="margin:40px 0 20px; border-top:1px solid var(--border2); padding-top:24px;">
              <div style="font-size:16px; font-weight:700; color:var(--text); margin-bottom:12px;">Relationship Between the Three Powers</div>
              <p>These three powers form a right-angled triangle.</p>
              
              <svg viewBox="0 0 240 160" style="width:100%; max-width:300px; display:block; margin:30px auto; overflow:visible;">
                <line x1="20" y1="130" x2="200" y2="130" stroke="var(--blue)" stroke-width="3" />
                <line x1="200" y1="130" x2="200" y2="30" stroke="var(--orange)" stroke-width="3" />
                <line x1="20" y1="130" x2="200" y2="30" stroke="var(--green)" stroke-width="3" />
                <polyline points="185,130 185,115 200,115" fill="none" stroke="var(--text2)" stroke-width="1.5" />
                <path d="M 65,130 A 45,45 0 0,0 59,108" fill="none" stroke="var(--text)" stroke-width="2" />
                <text x="75" y="122" fill="var(--text)" font-family="sans-serif" font-style="italic" font-size="16">φ</text>
                <text x="110" y="150" fill="var(--blue)" font-family="sans-serif" font-weight="bold" font-size="14" text-anchor="middle">True Power (P) - kW</text>
                <text x="210" y="85" fill="var(--orange)" font-family="sans-serif" font-weight="bold" font-size="14" transform="rotate(-90 210,85)" text-anchor="middle">Reactive (Q) - kVAR</text>
                <text x="95" y="65" fill="var(--green)" font-family="sans-serif" font-weight="bold" font-size="14" transform="rotate(-29 95,65)" text-anchor="middle">Apparent Power (S) - kVA</text>
              </svg>
              
              <p>From the triangle, using Pythagoras: <strong>S² = P² + Q²</strong></p>
              <p>This equation is useful whenever two powers are known and the third needs to be found.</p>
            </div>

            <div style="margin:40px 0 20px; border-top:1px solid var(--border2); padding-top:24px;">
              <div style="font-size:16px; font-weight:700; color:var(--text); margin-bottom:12px;">Understanding Power Factor</div>
              <p>Power Factor tells us how effectively the supplied power is converted into useful work.</p>
              <div class="n-formula" style="padding:12px; margin:12px 0;">cos φ = Adjacent / Hypotenuse = P / S</div>
              <p>Rearranging, we get the formula used in almost every alternator numerical:</p>
              <div class="n-formula" style="padding:12px; margin:12px 0;">P = S cos φ</div>
              <p>Similarly:</p>
              <div class="n-formula" style="padding:12px; margin:12px 0;">S = P / cos φ</div>
            </div>
            
            <div style="margin:40px 0 20px; border-top:1px solid var(--border2); padding-top:24px;">
              <div style="font-size:16px; font-weight:700; color:var(--text); margin-bottom:12px;">Why Alternators Are Rated in kVA</div>
              <p>An alternator's heating depends mainly on Voltage and Current. Heating does not depend on the power factor. Since S = VI, the alternator manufacturer specifies the rating in kVA.</p>
              <p>Two loads may both consume 620 kW, but if one has a poorer power factor, it draws more current and therefore places a greater load on the alternator.</p>
              <p style="color:var(--orange); font-weight:600;">That is why we always compare the actual kVA with the rated kVA, never the kW.</p>
            </div>

            <div style="margin-top:30px; padding:20px; background:rgba(6,182,212,0.1); border-left:4px solid var(--blue); border-radius:4px;">
              <strong style="color:var(--text); font-size:15px; display:block; margin-bottom:10px;">Engineering Insight</strong>
              This numerical is essentially based on just one concept:
              <br><br>
              An alternator has a fixed kVA capacity. Power factor determines how much of that capacity becomes useful kW.
              <br><br>
              Once you understand the Power Triangle and the relationships:<br>
              <ul style="margin:10px 0 0 20px;">
                <li>Apparent Power: <strong>S = VI</strong></li>
                <li>True Power: <strong>P = VI cos φ</strong></li>
                <li>Reactive Power: <strong>Q = VI sin φ</strong></li>
                <li>Power Factor: <strong>cos φ = P / S</strong></li>
              </ul>
              you can derive almost every formula used in alternator power calculations instead of memorizing them.
            </div>
          </div>
    `
  },
  {
    id: 'n03',
    tier: 1,
    frequency: 14,
    title: "3. Transformer No-Load/Primary Current Calculation",
    years: "2018/SEP, 2019/MAR, 2019/JUN, 2019/SEP, 2020/MAR, 2021/JAN, 2021/APR1, 2021/JUL2, 2021/AUG, 2021/OCT, 2021/DEC, 2022/FEB, 2022/JUL, 2024/SEP",
    givenData: "A 100 KVA, 2400/240 V, 50 Hz, 1-phase transformer has no-load current of 0.64 A and a core loss of 700 W. Calculate the two components of no-load current. If this transformer supplies a load current of 40 amp at 0.8 lagging power factor, determine the primary current and its power factor.",
    solutionStepsHtml: `
            <ol style="margin-top:0;">
              <li><strong>Given Data:</strong><br>
                Rated Power (S) = 100 kVA, Primary Voltage (V₁) = 2400 V, Secondary Voltage (V₂) = 240 V, No-load Current (I₀) = 0.64 A, Core Loss (P_c) = 700 W, Load Current (I₂) = 40 A, Load Power Factor (cos φ) = 0.8 lagging.
              </li>
              <li><strong>Step 1: Calculate No-load Power Factor</strong><br>
                <div class="n-formula">
                  cos φ₀ = P_c / (V₁ × I₀)<br>
                  cos φ₀ = 700 / (2400 × 0.64) = <span class="n-val">0.456</span>
                </div>
              </li>
              <li><strong>Step 2: Working (Core Loss) Component (I_w)</strong><br>
                <div class="n-formula">
                  I_w = I₀ cos φ₀<br>
                  I_w = 0.64 × 0.456 = <span class="n-val">0.292 A</span>
                </div>
              </li>
              <li><strong>Step 3: Magnetizing Component (I_m)</strong><br>
                <div class="n-formula">
                  I_m = √(I₀² - I_w²)<br>
                  I_m = √(0.64² - 0.292²)<br>
                  I_m = √(0.4096 - 0.0853) = √(0.3243) = <span class="n-val">0.569 A</span>
                </div>
              </li>
              <li><strong>Step 4: Refer Load Current to Primary (I₂')</strong><br>
                <div class="n-formula">
                  Turns Ratio (K) = V₁ / V₂ = 2400 / 240 = 10<br>
                  Primary Equivalent Current (I₂') = I₂ / K = 40 / 10 = <span class="n-val">4 A</span>
                </div>
              </li>
              <li><strong>Step 5: Resolve Load Current into Components</strong><br>
                Power Factor (cos φ) = 0.8, therefore sin φ = 0.6<br>
                <div class="n-formula">
                  Active Component (I_p) = I₂' cos φ = 4 × 0.8 = <span class="n-val">3.2 A</span><br>
                  Reactive Component (I_q) = I₂' sin φ = 4 × 0.6 = <span class="n-val">2.4 A</span>
                </div>
              </li>
              <li><strong>Step 6: Total Primary Current Components</strong><br>
                <div class="n-formula">
                  Horizontal Component (I_x) = I_p + I_w = 3.2 + 0.292 = <span class="n-val">3.492 A</span><br>
                  Vertical Component (I_y) = I_q + I_m = 2.4 + 0.569 = <span class="n-val">2.969 A</span>
                </div>
              </li>
              <li><strong>Step 7: Calculate Total Primary Current (I₁)</strong><br>
                <div class="n-formula">
                  I₁ = √(I_x² + I_y²)<br>
                  I₁ = √(3.492² + 2.969²)<br>
                  I₁ = √(12.19 + 8.82) = √(21.01) = <span class="n-val">4.58 A</span>
                </div>
              </li>
              <li><strong>Step 8: Calculate Primary Power Factor (cos φ₁)</strong><br>
                <div class="n-formula">
                  cos φ₁ = I_x / I₁ = 3.492 / 4.58 = <span class="n-val">0.762 lagging</span>
                </div>
              </li>
            </ol>
    `,
    finalAnswersHtml: `
            <table style="width:100%; border-collapse:collapse; font-size:14px; text-align:left; border-radius:8px; overflow:hidden; box-shadow:0 0 0 1px var(--border2);">
              <thead>
                <tr style="background:var(--surface3); color:var(--text2);">
                  <th style="padding:12px 16px; font-weight:600;">Quantity</th>
                  <th style="padding:12px 16px; font-weight:600; text-align:right;">Answer</th>
                </tr>
              </thead>
              <tbody style="background:var(--surface2);">
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Working (Core Loss) Component (I_w)</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--text);">0.292 A</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Magnetizing Component (I_m)</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--text);">0.569 A</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Primary Current</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--text);">4.58 A</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; color:var(--text);">Primary Power Factor</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--text);">0.762 lagging</td>
                </tr>
              </tbody>
            </table>
    `,
    conceptHtml: `
          <div style="padding:10px 20px 20px; font-size:14px; line-height:1.6; color:var(--text2);">
            <div style="font-size:16px; font-weight:700; color:var(--text); margin-bottom:12px;">Deep Dive into Transformer Currents</div>
            <p>This is one of the most important transformer numericals because it combines <strong>transformer theory, phasors, current components, and power factor</strong>. Once you understand <strong>why each formula exists</strong>, you can solve almost any transformer current problem.</p>
            
            <div class="n-h1" style="font-size:15px; margin-top:24px;">1. Why does a transformer draw current even when there is NO LOAD?</div>
            <p>Imagine the secondary is <strong>open-circuited</strong>. No load is connected. So, I₂ = 0.</p>
            <p>Many students think, <em>"No secondary current means no primary current."</em> But that is <strong>wrong</strong>.</p>
            <p>The transformer still needs current because it has to create magnetic flux inside the core. Without flux, there is no induced EMF and no transformer action.</p>
            <p>Therefore, the primary always draws a <strong>small current</strong> called the <strong>No-load current (I₀)</strong>. Usually, I₀ is 2% - 5% of the rated current.</p>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">2. Why isn't the no-load current purely magnetizing?</div>
            <p>If the core were perfect, it would only need magnetic flux. Current would only be used to produce a magnetic field. That current is called <strong>I_m</strong> (Magnetizing current).</p>
            <p>But real transformers are not perfect. Iron core losses occur because of Hysteresis loss and Eddy current loss. These losses consume real electrical power.</p>
            <p>To supply this power, another current component is required. This is <strong>I_w</strong>, called Working current, Core loss current, or Wattful component.</p>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">3. Therefore No-load current has TWO components</div>
            <p>Instead of one current, the transformer actually draws:</p>
            <ul style="margin-left:20px;">
              <li>Horizontal component = Working current (I_w)</li>
              <li>Vertical component = Magnetizing current (I_m)</li>
            </ul>
            <div class="n-formula" style="padding:12px; margin:12px 0;">I₀ = I_w + I_m <span style="font-size:12px; color:var(--text3); margin-left:10px;">(Vectorially)</span></div>
            <p>So, I₀² = I_w² + I_m². This comes directly from <strong>Pythagoras</strong> because the two components are perpendicular.</p>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">4. Why is the Working Current in phase with Voltage?</div>
            <p>Remember Real Power: P = VI cos φ. Only the current <strong>in phase</strong> with voltage produces real power. Since core loss is real power, the current producing it must be in phase.</p>
            <div class="n-formula" style="padding:12px; margin:12px 0;">I_w = I₀ cos φ₀</div>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">5. Why is Magnetizing Current 90° behind Voltage?</div>
            <p>Inductors store energy in magnetic fields. Pure inductors do not consume real power. Current lags voltage by 90°. The transformer primary behaves almost like a large inductor while magnetizing the core.</p>
            <div class="n-formula" style="padding:12px; margin:12px 0;">I_m = I₀ sin φ₀ &nbsp; or &nbsp; I_m = √(I₀² - I_w²)</div>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">6. Where does cos φ₀ = P_c / (V₁I₀) come from?</div>
            <p>Start with the AC power equation: P = VI cos φ. During no load, the only power consumed is Core loss. So P = P_c.</p>
            <p>Hence P_c = V₁I₀ cos φ₀. Rearranging gives:</p>
            <div class="n-formula" style="padding:12px; margin:12px 0;">cos φ₀ = P_c / (V₁I₀)</div>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">7. Why do we refer the secondary current to the primary?</div>
            <p>When the load is connected, the secondary carries current (e.g., 40 A). But the primary and secondary have different voltages, so we cannot directly add them. Everything must be referred to <strong>one side</strong> (usually the primary).</p>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">8. Why I₂' = I₂ / K ?</div>
            <p>For an ideal transformer, Power in = Power out (V₁I₁ = V₂I₂). Divide both sides by V₁: I₁ = (V₂/V₁)I₂.</p>
            <p>Since K = V₁/V₂, then V₂/V₁ = 1/K. Hence:</p>
            <div class="n-formula" style="padding:12px; margin:12px 0;">I₂' = I₂ / K</div>
            <p>This is why current is inversely proportional to voltage. Higher voltage means lower current.</p>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">9. Why do we split the load current into two parts?</div>
            <p>The load has a power factor. Current is not entirely useful. Part produces real power (Horizontal/Active component) and part produces a magnetic field (Vertical/Reactive component).</p>
            <div class="n-formula" style="padding:12px; margin:12px 0;">I_p = I₂' cos φ <br> I_q = I₂' sin φ</div>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">10. Why are the currents added component-wise?</div>
            <p>Since horizontal currents act in the same direction, they add (I_x = I_p + I_w). Likewise, vertical currents add (I_y = I_q + I_m).</p>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">11. Why do we use Pythagoras again?</div>
            <p>The horizontal and vertical components are perpendicular. Therefore:</p>
            <div class="n-formula" style="padding:12px; margin:12px 0;">I₁ = √(I_x² + I_y²)</div>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">12. Why cos φ₁ = I_x / I₁ ?</div>
            <p>Using trigonometry on the current phasor, cos φ = Adjacent / Hypotenuse. The adjacent is the horizontal current (I_x) and the hypotenuse is the total primary current (I₁).</p>
            <div class="n-formula" style="padding:12px; margin:12px 0;">cos φ₁ = I_x / I₁</div>

            <div style="margin:40px 0 20px; border-top:1px solid var(--border2); padding-top:24px;">
              <div style="font-size:16px; font-weight:700; color:var(--text); margin-bottom:12px;">The Entire Numerical in One Flow</div>
              <div style="font-family: monospace; font-size: 13px; color: var(--text2); background: var(--bg-card); padding: 15px; border-radius: 8px;">
Transformer on No Load<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br>
Find no-load PF<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br>
Split Io into Iw and Im<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br>
Load Connected<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br>
Convert load current to primary side<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br>
Split load current into Ip and Iq<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br>
Add horizontal currents (Iw + Ip)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br>
Add vertical currents (Im + Iq)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br>
Use Pythagoras<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br>
Primary Current<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br>
Use cosφ = Adjacent/Hypotenuse<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br>
Primary Power Factor
              </div>
            </div>
          </div>
    `
  },
  {
    id: 'n04',
    tier: 1,
    frequency: 11,
    title: "4. Liquid-Cooled Transformers & Losses",
    years: "2023/FEB, 2023/APR, 2023/JUL, 2023/SEP, 2023/NOV, 2024/JUL, 2024/OCT, 2025/FEB, 2025/SEP, 2025/NOV, 2025/DEC",
    givenData: "a) Explain the potential hazards if liquid-cooled transformers are used.<br>b) What are the losses in transformers? Mention the various factors which affect these losses. In a 25 KVA, 3300/233 V, single phase transformer, the iron and full-load Cu. Losses are respectively 350 and 400 Watts. Calculate the efficiency at half-full load 0.8 power factor.",
    solutionStepsHtml: `
            <ol style="margin-top:0;">
              <li><strong>Given Data:</strong><br>
                Rated Apparent Power (S) = 25 kVA, Power Factor (PF) = 0.8<br>
                Load Fraction (x) = 0.5 (Half Load)<br>
                Iron Loss (P<sub>i</sub>) = 350 W, Full Load Copper Loss (P<sub>Cu(FL)</sub>) = 400 W
              </li>
              <li><strong>Step 1: Calculate Output Power (P<sub>out</sub>)</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">Calculate the real power output at half load.</div>
                <div class="n-formula">
                  P<sub>out</sub> = S × x × PF<br>
                  P<sub>out</sub> = 25 × 0.5 × 0.8<br>
                  P<sub>out</sub> = <span class="n-val">10 kW</span> (or 10,000 W)
                </div>
              </li>
              <li><strong>Step 2: Calculate Copper Loss at Half Load</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">Copper loss varies as the square of the load fraction.</div>
                <div class="n-formula">
                  P<sub>Cu</sub> = x² × P<sub>Cu(FL)</sub><br>
                  P<sub>Cu</sub> = (0.5)² × 400<br>
                  P<sub>Cu</sub> = 0.25 × 400 = <span class="n-val">100 W</span>
                </div>
              </li>
              <li><strong>Step 3: Calculate Total Loss</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">Total loss is the sum of iron loss (constant) and copper loss (variable).</div>
                <div class="n-formula">
                  P<sub>loss</sub> = P<sub>i</sub> + P<sub>Cu</sub><br>
                  P<sub>loss</sub> = 350 + 100 = <span class="n-val">450 W</span>
                </div>
              </li>
              <li><strong>Step 4: Calculate Efficiency (η)</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">Efficiency is the ratio of output power to total input power (Output + Losses).</div>
                <div class="n-formula">
                  η = [ Output / (Output + P<sub>loss</sub>) ] × 100<br>
                  η = [ 10,000 / (10,000 + 450) ] × 100<br>
                  η = [ 10,000 / 10,450 ] × 100 = <span class="n-val">95.69%</span>
                </div>
              </li>
            </ol>
            
            <div style="margin-top:40px; padding-top:20px; border-top:1px dashed var(--border2);">
              <div style="font-weight:700; color:var(--text); margin-bottom:20px; font-size:15px; display:flex; align-items:center; gap:8px;">
                <span style="color:var(--blue);">▶</span> Solution Flow
              </div>
              <div style="display:flex; flex-direction:column; gap:12px; font-size:13px;">
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>1. Given Data</strong><br>
                  <span style="color:var(--text2);">(S = 25 kVA, PF = 0.8, x = 0.5)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>2. Output Power</strong><br>
                  <span style="color:var(--text2);">(Output = S × x × PF)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>3. Copper Loss</strong><br>
                  <span style="color:var(--text2);">(P_Cu = x² × P_Cu(FL))</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>4. Total Loss</strong><br>
                  <span style="color:var(--text2);">(Total = Iron Loss + Copper Loss)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:rgba(34,197,94,0.1); border:1px solid rgba(34,197,94,0.3); border-radius:6px; color:var(--text);">
                  <strong>5. Efficiency = [Output ÷ (Output + Loss)] × 100</strong>
                </div>
              </div>
            </div>
    `,
    finalAnswersHtml: `
            <table style="width:100%; border-collapse:collapse; font-size:14px; text-align:left; border-radius:8px; overflow:hidden; box-shadow:0 0 0 1px var(--border2);">
              <thead>
                <tr style="background:var(--surface3); color:var(--text2);">
                  <th style="padding:12px 16px; font-weight:600;">Quantity</th>
                  <th style="padding:12px 16px; font-weight:600; text-align:right;">Answer</th>
                </tr>
              </thead>
              <tbody style="background:var(--surface2);">
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Output Power</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--text);">10 kW</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Iron Loss</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--text);">350 W</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Copper Loss (Half Load)</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--text);">100 W</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Total Loss</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--text);">450 W</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; color:var(--text);">Efficiency</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--green);">95.69%</td>
                </tr>
              </tbody>
            </table>
    `,
    conceptHtml: `
          <div style="padding:10px 20px 20px; font-size:14px; line-height:1.6; color:var(--text2);">
            
            <div style="padding: 15px; margin-bottom: 24px; background: rgba(59,130,246,0.1); border-left: 4px solid var(--blue); border-radius: 6px;">
              <strong>Note:</strong> The theoretical parts of this question (Hazards of Liquid-Cooled Transformers & Factors Affecting Transformer Losses) have been added to the <strong>Numerical Theory (W08)</strong> written notes section. <a href="#" onclick="switchTab('written'); setTimeout(()=>openDoc('W08'), 100); return false;" style="color:var(--blue); text-decoration:underline; font-weight:600;">Click here to view</a>.
            </div>

            <div style="font-size:16px; font-weight:700; color:var(--text); margin-bottom:12px;">Why are there two main losses?</div>
            <p>A transformer has <strong>no moving parts</strong>, so its losses mainly occur in the <strong>core</strong> and <strong>windings</strong>.</p>
            
            <div class="n-h1" style="font-size:15px; margin-top:24px;">1. Iron (Core) Loss</div>
            <p>The transformer core is continuously magnetized by the AC supply, even when no load is connected. Therefore, iron loss is present <strong>all the time</strong> and is called <strong>constant loss</strong>.</p>
            <ul style="margin-left:20px;">
              <li><strong>Hysteresis Loss:</strong> Energy required to repeatedly magnetize and demagnetize the core.</li>
              <li><strong>Eddy Current Loss:</strong> Circulating currents induced within the core that produce heat.</li>
            </ul>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">2. Copper Loss</div>
            <p>Copper loss is caused by the resistance of the primary and secondary windings. Since <strong>P = I²R</strong>, the copper loss depends on the <strong>square of the current</strong>.</p>
            <p>Therefore:</p>
            <ul style="margin-left:20px;">
              <li><strong>No-load:</strong> Copper loss is almost zero.</li>
              <li><strong>Half load:</strong> Copper loss is <strong>(0.5)² = one-fourth (0.25)</strong> of full-load copper loss.</li>
              <li><strong>Full load:</strong> Copper loss is maximum.</li>
            </ul>
            <p>This is why, in the numerical, we multiply the full-load copper loss by 0.25 to get the half-load copper loss (400 × 0.25 = 100 W).</p>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">Why is the output 10 kW?</div>
            <p>The transformer is rated at <strong>25 kVA</strong>, but it is operating at <strong>half load</strong> and <strong>0.8 power factor</strong>.</p>
            <p>Rated Output = 25 × 0.5 = <strong>12.5 kVA</strong>.</p>
            <p>To find the <em>real power</em> output, we multiply by the power factor:</p>
            <div class="n-formula" style="padding:12px; margin:12px 0;">Real Power = 12.5 × 0.8 = 10 kW</div>
            <p>Efficiency must always use <strong>real output power (kW)</strong>, not apparent power (kVA).</p>

            <div style="margin:40px 0 20px; border-top:1px solid var(--border2); padding-top:24px;">
              <div style="font-size:16px; font-weight:700; color:var(--text); margin-bottom:12px;">Practical Engineering Insight</div>
              <ul style="margin-left:20px;">
                <li>Iron loss can be reduced by using <strong>high-grade silicon steel laminations</strong>.</li>
                <li>Copper loss can be reduced by using <strong>low-resistance windings</strong> with adequate cross-sectional area.</li>
                <li>A transformer achieves <strong>maximum efficiency when iron loss equals copper loss</strong> at that operating load, which is an important design criterion for power transformers.</li>
              </ul>
            </div>
          </div>
    `
  },
  {
    id: 'n05',
    tier: 1,
    frequency: 11,
    title: "5. Rectifier Calculations (Full/Half Wave)",
    years: "2019/JAN, 2019/APR, 2019/JUL, 2020/OCT, 2021/APR1, 2021/JUL2, 2021/AUG, 2021/DEC, 2024/JUN, 2025/JUN, 2025/OCT",
    givenData: "a) Describe the working of a single-phase full wave rectifier with a resistive load. Draw the load voltage and current waveforms.<br>b) Diode half wave rectifier supply a resistive load of 1000 from a 100 V AC r.m.s voltage source. The diode is a resistance of 50 during conduction state. Calculate i) The DC output voltage ii) DC average load current.",
    solutionStepsHtml: `
            <ol style="margin-top:0;">
              <li><strong>Given Data:</strong><br>
                RMS Supply Voltage (V<sub>RMS</sub>) = 100 V<br>
                Load Resistance (R<sub>L</sub>) = 1000 Ω<br>
                Diode Forward Resistance (r<sub>f</sub>) = 50 Ω
              </li>
              <li><strong>Step 1: Calculate Peak Input Voltage (V<sub>m</sub>)</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">Convert RMS voltage to peak voltage.</div>
                <div class="n-formula">
                  V<sub>m</sub> = √2 × V<sub>RMS</sub><br>
                  V<sub>m</sub> = 1.414 × 100 = <span class="n-val">141.4 V</span>
                </div>
              </li>
              <li><strong>Step 2: Calculate Peak Load Current (I<sub>m</sub>)</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">Apply Ohm's law using total circuit resistance.</div>
                <div class="n-formula">
                  I<sub>m</sub> = V<sub>m</sub> / (R<sub>L</sub> + r<sub>f</sub>)<br>
                  I<sub>m</sub> = 141.4 / (1000 + 50)<br>
                  I<sub>m</sub> = 141.4 / 1050 = <span class="n-val">0.1347 A</span>
                </div>
              </li>
              <li><strong>Step 3: Calculate Average (DC) Load Current (I<sub>DC</sub>)</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">For a half wave rectifier, divide peak current by π.</div>
                <div class="n-formula">
                  I<sub>DC</sub> = I<sub>m</sub> / π<br>
                  I<sub>DC</sub> = 0.1347 / 3.142 = <span class="n-val">0.0429 A</span> (or 42.9 mA)
                </div>
              </li>
              <li><strong>Step 4: Calculate Average DC Output Voltage (V<sub>DC</sub>)</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">Apply Ohm's law at the load only.</div>
                <div class="n-formula">
                  V<sub>DC</sub> = I<sub>DC</sub> × R<sub>L</sub><br>
                  V<sub>DC</sub> = 0.0429 × 1000 = <span class="n-val">42.9 V</span>
                </div>
              </li>
            </ol>
            
            <div style="margin-top:40px; padding-top:20px; border-top:1px dashed var(--border2);">
              <div style="font-weight:700; color:var(--text); margin-bottom:20px; font-size:15px; display:flex; align-items:center; gap:8px;">
                <span style="color:var(--blue);">▶</span> Solution Flow
              </div>
              <div style="display:flex; flex-direction:column; gap:12px; font-size:13px;">
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>1. Given Data</strong><br>
                  <span style="color:var(--text2);">(V<sub>RMS</sub> = 100V, R<sub>L</sub> = 1000Ω, r<sub>f</sub> = 50Ω)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>2. Calculate Peak Voltage</strong><br>
                  <span style="color:var(--text2);">(V<sub>m</sub> = √2 × V<sub>RMS</sub>)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>3. Calculate Peak Current</strong><br>
                  <span style="color:var(--text2);">(I<sub>m</sub> = V<sub>m</sub> / (R<sub>L</sub> + r<sub>f</sub>))</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:rgba(34,197,94,0.1); border:1px solid rgba(34,197,94,0.3); border-radius:6px; color:var(--text);">
                  <strong>4. Calculate DC Current</strong><br>
                  <span style="color:var(--text2);">(I<sub>DC</sub> = I<sub>m</sub> / π)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:rgba(59,130,246,0.1); border:1px solid rgba(59,130,246,0.3); border-radius:6px; color:var(--text);">
                  <strong>5. Calculate DC Voltage</strong><br>
                  <span style="color:var(--text2);">(V<sub>DC</sub> = I<sub>DC</sub> × R<sub>L</sub>)</span>
                </div>
              </div>
            </div>
    `,
    finalAnswersHtml: `
            <table style="width:100%; border-collapse:collapse; font-size:14px; text-align:left; border-radius:8px; overflow:hidden; box-shadow:0 0 0 1px var(--border2);">
              <thead>
                <tr style="background:var(--surface3); color:var(--text2);">
                  <th style="padding:12px 16px; font-weight:600;">Quantity</th>
                  <th style="padding:12px 16px; font-weight:600; text-align:right;">Answer</th>
                </tr>
              </thead>
              <tbody style="background:var(--surface2);">
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">DC Output Voltage</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--blue);">42.9 V</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; color:var(--text);">DC Average Load Current</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--green);">42.9 mA</td>
                </tr>
              </tbody>
            </table>
    `,
    conceptHtml: `
          <div style="padding:10px 20px 20px; font-size:14px; line-height:1.6; color:var(--text2);">
            
            <div style="padding: 15px; margin-bottom: 24px; background: rgba(59,130,246,0.1); border-left: 4px solid var(--blue); border-radius: 6px;">
              <strong>Note:</strong> The theoretical parts of this question (Working of a Single Phase Full Wave Rectifier) have been added to the <strong>Numerical Theory (W08)</strong> written notes section. <a href="#" onclick="switchTab('written'); setTimeout(()=>openDoc('W08'), 100); return false;" style="color:var(--blue); text-decoration:underline; font-weight:600;">Click here to view</a>.
            </div>

            <div style="font-size:16px; font-weight:700; color:var(--text); margin-bottom:12px;">Understanding Half Wave Rectifiers</div>
            <p>A half wave rectifier uses <strong>one diode</strong> to convert AC into pulsating DC.</p>
            <ul style="margin-left:20px;">
              <li>During the <strong>positive half cycle</strong>, the diode is forward biased and conducts.</li>
              <li>During the <strong>negative half cycle</strong>, the diode is reverse biased and blocks current.</li>
              <li>Therefore, only one half of the AC waveform reaches the load.</li>
            </ul>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">Why is Peak Voltage Used?</div>
            <p>The formulas for rectifier calculations are derived using the <strong>peak value</strong> of the AC waveform.</p>
            <p>Hence, V<sub>m</sub> = √2 × V<sub>RMS</sub>. The RMS value is first converted into peak voltage before calculating current.</p>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">Why is Diode Resistance Added?</div>
            <p>When conducting, the diode behaves like a small resistor.</p>
            <p>So the total circuit resistance becomes R<sub>Total</sub> = R<sub>L</sub> + r<sub>f</sub>.</p>
            <p>Therefore, I<sub>m</sub> = V<sub>m</sub> / (R<sub>L</sub> + r<sub>f</sub>).</p>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">Why Divide by π?</div>
            <p>The output current is not constant DC. It is a <strong>half sine wave</strong>.</p>
            <p>The mathematical average value of a half sine wave over one complete cycle is exactly <strong>1/π</strong> of its peak value.</p>
            <div class="n-formula" style="padding:12px; margin:12px 0;">I<sub>DC</sub> = I<sub>m</sub> / π</div>
            <p>This gives the equivalent pure DC current that would deliver the same amount of charge to the load.</p>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">Why Use V<sub>DC</sub> = I<sub>DC</sub> × R<sub>L</sub> ?</div>
            <p>The DC output voltage is the average voltage appearing <strong>across the load resistance only</strong> (not including the voltage dropped across the diode itself).</p>
            <p>Using Ohm's law for the load resistor: V<sub>DC</sub> = I<sub>DC</sub> × R<sub>L</sub>.</p>

          </div>
    `
  },
  {
    id: 'n06',
    tier: 2,
    frequency: 8,
    title: "6. RMS Value & Alternators in Parallel",
    years: "2021/MAR, 2021/SEP, 2023/APR, 2023/OCT, 2024/FEB, 2025/APR, 2025/SEP, 2025/NOV",
    givenData: "A) Explain the significance of the root-mean-square value of an alternating current or voltage waveform. Define the form factor of such a waveform.<br>b) A total load of 8000 kW at 0.8 power factor is supplied by two alternators in parallel. One alternator supplies 6000 kW at 0.9 power factor. Find the KVA rating of the other alternator and the power factor.",
    solutionStepsHtml: `
            <ol style="margin-top:0;">
              <li><strong>Given Data:</strong><br>
                Total Load (P<sub>T</sub>) = 8000 kW, Total PF (PF<sub>T</sub>) = 0.8<br>
                Alternator 1 Real Power (P<sub>1</sub>) = 6000 kW, Alt 1 PF (PF<sub>1</sub>) = 0.9
              </li>
              <li><strong>Step 1: Calculate Total Apparent Power (S<sub>T</sub>)</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">Use S = P / PF</div>
                <div class="n-formula">
                  S<sub>T</sub> = 8000 / 0.8 = <span class="n-val">10000 kVA</span>
                </div>
              </li>
              <li><strong>Step 2: Calculate Total Reactive Power (Q<sub>T</sub>)</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">Use Q = √(S² - P²)</div>
                <div class="n-formula">
                  Q<sub>T</sub> = √(10000² - 8000²)<br>
                  Q<sub>T</sub> = √(100000000 - 64000000)<br>
                  Q<sub>T</sub> = √36000000 = <span class="n-val">6000 kVAR</span>
                </div>
              </li>
              <li><strong>Step 3: Calculate Apparent Power of Alternator 1 (S<sub>1</sub>)</strong><br>
                <div class="n-formula">
                  S<sub>1</sub> = 6000 / 0.9 = <span class="n-val">6666.7 kVA</span>
                </div>
              </li>
              <li><strong>Step 4: Calculate Reactive Power of Alternator 1 (Q<sub>1</sub>)</strong><br>
                <div class="n-formula">
                  Q<sub>1</sub> = √(6666.7² - 6000²)<br>
                  Q<sub>1</sub> = √(44444889 - 36000000)<br>
                  Q<sub>1</sub> = √8444889 ≈ <span class="n-val">2906 kVAR</span>
                </div>
              </li>
              <li><strong>Step 5: Calculate Real Power of Alternator 2 (P<sub>2</sub>)</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">Subtract Alt 1 from Total.</div>
                <div class="n-formula">
                  P<sub>2</sub> = P<sub>T</sub> - P<sub>1</sub><br>
                  P<sub>2</sub> = 8000 - 6000 = <span class="n-val">2000 kW</span>
                </div>
              </li>
              <li><strong>Step 6: Calculate Reactive Power of Alternator 2 (Q<sub>2</sub>)</strong><br>
                <div class="n-formula">
                  Q<sub>2</sub> = Q<sub>T</sub> - Q<sub>1</sub><br>
                  Q<sub>2</sub> = 6000 - 2906 = <span class="n-val">3094 kVAR</span>
                </div>
              </li>
              <li><strong>Step 7: Calculate Apparent Power of Alternator 2 (S<sub>2</sub>)</strong><br>
                <div class="n-formula">
                  S<sub>2</sub> = √(P<sub>2</sub>² + Q<sub>2</sub>²)<br>
                  S<sub>2</sub> = √(2000² + 3094²)<br>
                  S<sub>2</sub> ≈ <span class="n-val">3685 kVA</span>
                </div>
              </li>
              <li><strong>Step 8: Calculate Power Factor of Alternator 2 (PF<sub>2</sub>)</strong><br>
                <div class="n-formula">
                  PF<sub>2</sub> = P<sub>2</sub> / S<sub>2</sub><br>
                  PF<sub>2</sub> = 2000 / 3685 ≈ <span class="n-val">0.543 lagging</span>
                </div>
              </li>
            </ol>
            
            <div style="margin-top:40px; padding-top:20px; border-top:1px dashed var(--border2);">
              <div style="font-weight:700; color:var(--text); margin-bottom:20px; font-size:15px; display:flex; align-items:center; gap:8px;">
                <span style="color:var(--blue);">▶</span> Solution Flow
              </div>
              <div style="display:flex; flex-direction:column; gap:12px; font-size:13px;">
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>1. Total Load Parameters</strong><br>
                  <span style="color:var(--text2);">(S<sub>T</sub> = P<sub>T</sub>/PF<sub>T</sub>, Q<sub>T</sub> = √(S<sub>T</sub>² - P<sub>T</sub>²))</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>2. Alternator 1 Parameters</strong><br>
                  <span style="color:var(--text2);">(S<sub>1</sub> = P<sub>1</sub>/PF<sub>1</sub>, Q<sub>1</sub> = √(S<sub>1</sub>² - P<sub>1</sub>²))</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>3. Alternator 2 Real Power</strong><br>
                  <span style="color:var(--text2);">(P<sub>2</sub> = P<sub>T</sub> - P<sub>1</sub>)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>4. Alternator 2 Reactive Power</strong><br>
                  <span style="color:var(--text2);">(Q<sub>2</sub> = Q<sub>T</sub> - Q<sub>1</sub>)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:rgba(34,197,94,0.1); border:1px solid rgba(34,197,94,0.3); border-radius:6px; color:var(--text);">
                  <strong>5. Alternator 2 Apparent Power</strong><br>
                  <span style="color:var(--text2);">(S<sub>2</sub> = √(P<sub>2</sub>² + Q<sub>2</sub>²))</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:rgba(59,130,246,0.1); border:1px solid rgba(59,130,246,0.3); border-radius:6px; color:var(--text);">
                  <strong>6. Alternator 2 Power Factor</strong><br>
                  <span style="color:var(--text2);">(PF<sub>2</sub> = P<sub>2</sub> / S<sub>2</sub>)</span>
                </div>
              </div>
            </div>
    `,
    finalAnswersHtml: `
            <table style="width:100%; border-collapse:collapse; font-size:14px; text-align:left; border-radius:8px; overflow:hidden; box-shadow:0 0 0 1px var(--border2);">
              <thead>
                <tr style="background:var(--surface3); color:var(--text2);">
                  <th style="padding:12px 16px; font-weight:600;">Quantity</th>
                  <th style="padding:12px 16px; font-weight:600; text-align:right;">Answer</th>
                </tr>
              </thead>
              <tbody style="background:var(--surface2);">
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Alternator 2 Apparent Power (kVA Rating)</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--blue);">≈ 3685 kVA</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; color:var(--text);">Alternator 2 Power Factor</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--green);">0.543 lagging</td>
                </tr>
              </tbody>
            </table>
    `,
    conceptHtml: `
          <div style="padding:10px 20px 20px; font-size:14px; line-height:1.6; color:var(--text2);">
            
            <div style="padding: 15px; margin-bottom: 24px; background: rgba(59,130,246,0.1); border-left: 4px solid var(--blue); border-radius: 6px;">
              <strong>Note:</strong> The theoretical parts of this question (Significance of RMS Value & Form Factor) have been added to the <strong>Numerical Theory (W08)</strong> written notes section. <a href="#" onclick="switchTab('written'); setTimeout(()=>openDoc('W08'), 100); return false;" style="color:var(--blue); text-decoration:underline; font-weight:600;">Click here to view</a>.
            </div>

            <div style="font-size:16px; font-weight:700; color:var(--text); margin-bottom:12px;">Concept Used in the Numerical</div>
            <p>When alternators operate in parallel to supply a common load:</p>
            <ul style="margin-left:20px;">
              <li><strong>Real power (kW)</strong> adds directly algebraically (P<sub>Total</sub> = P<sub>1</sub> + P<sub>2</sub>).</li>
              <li><strong>Reactive power (kVAR)</strong> also adds directly algebraically (Q<sub>Total</sub> = Q<sub>1</sub> + Q<sub>2</sub>).</li>
            </ul>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">Why not just add kVA?</div>
            <p><strong>Apparent power (kVA)</strong> is a vector sum. It cannot be added directly algebraically because the power factors (the angles) of the two alternators might be different.</p>
            <p>It must be calculated using the power triangle for each individual machine:</p>
            <div class="n-formula" style="padding:12px; margin:12px 0;">Q = √(S² - P²)</div>
            <div class="n-formula" style="padding:12px; margin:12px 0;">S = √(P² + Q²)</div>
            
            <div class="n-h1" style="font-size:15px; margin-top:24px;">Power Factor</div>
            <p>The power factor of each alternator depends solely on the ratio of its real power to apparent power.</p>
            <div class="n-formula" style="padding:12px; margin:12px 0;">PF = P / S</div>
            <p>This method (splitting everything into P and Q, adding/subtracting them, and then converting back to S and PF) is the standard approach for solving parallel alternator load sharing problems in MMD India ETO examinations.</p>

            <div class="n-h1" style="font-size:15px; margin-top:24px; color:var(--orange);">Alternative Method: Using tan(φ)</div>
            <p>You can also calculate Reactive Power (Q) by first finding the phase angle and using the tangent function. While slightly longer, it is equally valid and arrives at the same answer (with minor rounding differences).</p>
            <ul style="margin-left:20px; font-size:13px; color:var(--text2); margin-top:8px;">
              <li><strong>Step 1:</strong> Find the angle using inverse cosine: <span class="n-val" style="padding:2px 4px; font-size:12px;">φ = cos⁻¹(PF)</span></li>
              <li><strong>Step 2:</strong> Find the tangent of that angle: <span class="n-val" style="padding:2px 4px; font-size:12px;">tan(φ)</span></li>
              <li><strong>Step 3:</strong> Calculate Reactive Power: <span class="n-val" style="padding:2px 4px; font-size:12px;">Q = P × tan(φ)</span></li>
            </ul>

          </div>
    `
  },
  {
    id: 'n07',
    tier: 2,
    frequency: 7,
    title: "7. Circuit Breakers vs HRC Fuse & Series RL-C Circuit",
    years: "2019/JUL, 2021/JAN, 2021/DEC, 2022/FEB, 2024/JUN, 2025/JUN, 2025/OCT",
    givenData: "a) Compare the effectiveness of a current limiting circuit breaker with that of a HRC fuse.<br>b) A coil having a resistance of 10 ohm and an inductance of 0.15 H is connected in series with a capacitor across a 100 V, 50 Hz supply. If the current and the voltage are in phase what will be the value of the current in the circuit and the voltage drop across the coil?",
    solutionStepsHtml: `
            <ol style="margin-top:0;">
              <li><strong>Given Data:</strong><br>
                Supply Voltage (V) = 100 V, Frequency (f) = 50 Hz<br>
                Resistance (R) = 10 Ω, Inductance (L) = 0.15 H
              </li>
              <li><strong>Step 1: Calculate Inductive Reactance (X<sub>L</sub>)</strong><br>
                <div class="n-formula">
                  X<sub>L</sub> = 2πfL<br>
                  X<sub>L</sub> = 2 × π × 50 × 0.15 = <span class="n-val">47.12 Ω</span>
                </div>
              </li>
              <li><strong>Step 2: Calculate Circuit Current (I)</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">Since current and voltage are in phase, the circuit is at resonance. Therefore, Z = R = 10 Ω.</div>
                <div class="n-formula">
                  I = V / R<br>
                  I = 100 / 10 = <span class="n-val">10 A</span>
                </div>
              </li>
              <li><strong>Step 3: Calculate Coil Impedance (Z<sub>coil</sub>)</strong><br>
                <div class="n-formula">
                  Z<sub>coil</sub> = √(R² + X<sub>L</sub>²)<br>
                  Z<sub>coil</sub> = √(10² + 47.12²)<br>
                  Z<sub>coil</sub> = √(100 + 2220) = √2320 = <span class="n-val">48.17 Ω</span>
                </div>
              </li>
              <li><strong>Step 4: Calculate Voltage Drop Across Coil (V<sub>coil</sub>)</strong><br>
                <div class="n-formula">
                  V<sub>coil</sub> = I × Z<sub>coil</sub><br>
                  V<sub>coil</sub> = 10 × 48.17 = <span class="n-val">481.7 V</span>
                </div>
                <div style="color:var(--orange); font-size:13px; margin-top:8px;"><strong>Note:</strong> The voltage across the coil is greater than the supply voltage due to voltage magnification at resonance.</div>
              </li>
            </ol>
            
            <div style="margin-top:40px; padding-top:20px; border-top:1px dashed var(--border2);">
              <div style="font-weight:700; color:var(--text); margin-bottom:20px; font-size:15px; display:flex; align-items:center; gap:8px;">
                <span style="color:var(--blue);">▶</span> Solution Flow
              </div>
              <div style="display:flex; flex-direction:column; gap:12px; font-size:13px;">
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>1. Given Data</strong><br>
                  <span style="color:var(--text2);">(Calculate X<sub>L</sub> = 2πfL)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>2. Resonance Condition</strong><br>
                  <span style="color:var(--text2);">(Current and Voltage in Phase → Z = R)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:rgba(34,197,94,0.1); border:1px solid rgba(34,197,94,0.3); border-radius:6px; color:var(--text);">
                  <strong>3. Circuit Current</strong><br>
                  <span style="color:var(--text2);">(I = V / R)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>4. Find Coil Impedance</strong><br>
                  <span style="color:var(--text2);">(Z<sub>coil</sub> = √(R² + X<sub>L</sub>²))</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:rgba(59,130,246,0.1); border:1px solid rgba(59,130,246,0.3); border-radius:6px; color:var(--text);">
                  <strong>5. Voltage Across Coil</strong><br>
                  <span style="color:var(--text2);">(V<sub>coil</sub> = I × Z<sub>coil</sub>)</span>
                </div>
              </div>
            </div>
    `,
    finalAnswersHtml: `
            <table style="width:100%; border-collapse:collapse; font-size:14px; text-align:left; border-radius:8px; overflow:hidden; box-shadow:0 0 0 1px var(--border2);">
              <thead>
                <tr style="background:var(--surface3); color:var(--text2);">
                  <th style="padding:12px 16px; font-weight:600;">Quantity</th>
                  <th style="padding:12px 16px; font-weight:600; text-align:right;">Answer</th>
                </tr>
              </thead>
              <tbody style="background:var(--surface2);">
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Circuit Current</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--green);">10 A</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; color:var(--text);">Voltage Across Coil</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--blue);">481.7 V (≈ 482 V)</td>
                </tr>
              </tbody>
            </table>
    `,
    conceptHtml: `
          <div style="padding:10px 20px 20px; font-size:14px; line-height:1.6; color:var(--text2);">
            
            <div style="padding: 15px; margin-bottom: 24px; background: rgba(59,130,246,0.1); border-left: 4px solid var(--blue); border-radius: 6px;">
              <strong>Note:</strong> The theoretical part of this question (Compare the Effectiveness of a Current Limiting Circuit Breaker with that of a HRC Fuse) has been added to the <strong>Numerical Theory (W08)</strong> written notes section. <a href="#" onclick="switchTab('written'); setTimeout(()=>openDoc('W08'), 100); return false;" style="color:var(--blue); text-decoration:underline; font-weight:600;">Click here to view</a>.
            </div>

            <div class="n-h1" style="font-size:15px;">Why are current and voltage in phase?</div>
            <p>In a series RLC circuit, current and supply voltage are in phase only at <strong>resonance</strong>.</p>
            
            <div style="margin:16px 0; padding:12px; border-left:3px solid var(--blue); background:var(--surface2); border-radius:0 6px 6px 0;">
              <p style="margin-bottom:8px;">At resonance, the inductive and capacitive reactances are equal and opposite, meaning they <strong>cancel each other out</strong> completely.</p>
              <div class="n-formula" style="padding:10px; font-size:13px; margin-bottom:8px;">X<sub>L</sub> = X<sub>C</sub> &nbsp; → &nbsp; X<sub>L</sub> - X<sub>C</sub> = 0</div>
              <p style="margin-bottom:8px;">Because the net reactance is zero, the total impedance is just the resistance. <strong>So only Z = R remains.</strong></p>
              <div class="n-formula" style="padding:10px; font-size:13px; margin-bottom:0;">Z = √(R² + (X<sub>L</sub> - X<sub>C</sub>)²) &nbsp; → &nbsp; Z = √(R² + 0) &nbsp; → &nbsp; <span style="color:var(--blue); font-weight:700;">Z = R</span></div>
            </div>

            <p>Because the circuit acts as purely resistive:</p>
            <ul style="margin-left:20px;">
              <li>Phase angle = <strong>0°</strong></li>
              <li>Power factor = <strong>1 (Unity)</strong></li>
            </ul>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">Why is the voltage across the coil much higher than the supply voltage?</div>
            <p>The coil contains both <strong>resistance</strong> and <strong>inductive reactance</strong>. Although the supply voltage is only 100 V, the voltages across the inductor (V<sub>L</sub>) and capacitor (V<sub>C</sub>) become large and are equal in magnitude but opposite in phase at resonance.</p>
            
            <div class="n-card" style="margin-top:12px; background:var(--surface3);">
              <div style="font-weight:700; color:var(--text); margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                <span style="color:var(--orange);">⚡</span> Voltage Magnification & Q-Factor
              </div>
              <p style="margin-bottom:12px;">This phenomenon is called <strong>voltage magnification</strong>. The voltage across the pure inductor/capacitor can be found by multiplying the supply voltage by the circuit's Quality Factor (Q).</p>
              <div class="n-formula" style="padding:10px; font-size:13px; margin-bottom:8px;">Q-Factor = X<sub>L</sub> / R = 47.12 / 10 = 4.712</div>
              <div class="n-formula" style="padding:10px; font-size:13px; margin-bottom:0;">V<sub>L</sub> = Q × V<sub>supply</sub> = 4.712 × 100 = 471.2 V</div>
            </div>
            
            <p style="margin-top:12px;">Notice that the <strong>voltage across the coil</strong> (481.7 V) is slightly higher than V<sub>L</sub> (471.2 V). This is because the physical coil contains both the resistor and the inductor, so its voltage is the vector sum of V<sub>R</sub> (voltage across the resistive part) and V<sub>L</sub>.</p>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">Practical Marine Engineering Insight</div>
            <ul style="margin-left:20px; display:flex; flex-direction:column; gap:8px;">
              <li><strong style="color:var(--orange);">Insulation Danger:</strong> The magnified voltages (481 V from a 100 V supply!) can puncture the insulation of shipboard components if they aren't rated for the peak resonant voltage.</li>
              <li><strong style="color:var(--blue);">Maximum Current:</strong> At resonance, impedance is at its absolute minimum (Z = R), causing the circuit to draw maximum current, potentially tripping breakers.</li>
              <li><strong style="color:var(--green);">Tuning:</strong> Series resonance is intentionally used to "tune" into specific frequencies in communication filters and antenna systems on the bridge.</li>
            </ul>

          </div>
    `
  },
  {
    id: 'n08',
    tier: 2,
    frequency: 6,
    title: "8. Delta-Star Conversion & Batteries Resistor Network",
    years: "2023/FEB, 2023/JUL, 2024/FEB, 2024/JUL, 2024/OCT, 2025/FEB",
    givenData: "A) With the aid of delta and star connection diagrams, state the basic equation from which the delta-star and star-delta conversion equation can be derived.<br>B) Three batteries A, B, and C have their negative terminals connected together. Determine the current values in the two resistors linking the positive terminals and the power dissipated by them.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n09',
    tier: 2,
    frequency: 6,
    title: "9. Parallel 3-Phase Transformers & Bank Advantages",
    years: "2019/AUG, 2019/OCT2, 2019/DEC, 2020/DEC, 2025/JAN, 2025/AUG",
    givenData: "a) Discuss the essential and desirable conditions to be fulfil for operating two three-phase transformers in parallel.<br>b) What are the advantages of transformer bank of three 1-phase transformers over a unit three phase transformer of the same kVA rating?<br>c) Calculate efficiency of a 25 kW, 3300/233V, 1-phase transformer given iron/copper losses.",
    solutionStepsHtml: `
            <ol style="margin-top:0;">
              <li><strong>Given Data:</strong><br>
                Output Power (P<sub>out</sub>) = 25 kW<br>
                Iron Loss (P<sub>i</sub>) = 300 W = 0.3 kW<br>
                Copper Loss (P<sub>c</sub>) = 500 W = 0.5 kW<br>
                <span style="color:var(--text2); font-size:12px;">(Using sample values: 300W Iron and 500W Copper as provided)</span>
              </li>
              <li><strong>Step 1: Calculate Total Loss (P<sub>loss</sub>)</strong><br>
                <div class="n-formula">
                  P<sub>loss</sub> = P<sub>i</sub> + P<sub>c</sub><br>
                  P<sub>loss</sub> = 0.3 + 0.5 = <span class="n-val">0.8 kW</span>
                </div>
              </li>
              <li><strong>Step 2: Calculate Input Power (P<sub>in</sub>)</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">Input Power is Output Power plus all Losses.</div>
                <div class="n-formula">
                  P<sub>in</sub> = P<sub>out</sub> + P<sub>loss</sub><br>
                  P<sub>in</sub> = 25 + 0.8 = <span class="n-val">25.8 kW</span>
                </div>
              </li>
              <li><strong>Step 3: Calculate Efficiency (η)</strong><br>
                <div class="n-formula">
                  η = ( P<sub>out</sub> / P<sub>in</sub> ) × 100<br>
                  η = ( 25 / 25.8 ) × 100<br>
                  η ≈ <span class="n-val">96.9%</span>
                </div>
              </li>
            </ol>
            
            <div style="margin-top:40px; padding-top:20px; border-top:1px dashed var(--border2);">
              <div style="font-weight:700; color:var(--text); margin-bottom:20px; font-size:15px; display:flex; align-items:center; gap:8px;">
                <span style="color:var(--blue);">▶</span> Solution Flow
              </div>
              <div style="display:flex; flex-direction:column; gap:12px; font-size:13px;">
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>1. Given Data</strong><br>
                  <span style="color:var(--text2);">(Identify Output Power, P<sub>i</sub>, P<sub>c</sub>)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text);">
                  <strong>2. Total Loss</strong><br>
                  <span style="color:var(--text2);">(P<sub>loss</sub> = P<sub>i</sub> + P<sub>c</sub>)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:rgba(34,197,94,0.1); border:1px solid rgba(34,197,94,0.3); border-radius:6px; color:var(--text);">
                  <strong>3. Input Power</strong><br>
                  <span style="color:var(--text2);">(P<sub>in</sub> = P<sub>out</sub> + P<sub>loss</sub>)</span>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="padding:12px 16px; background:rgba(59,130,246,0.1); border:1px solid rgba(59,130,246,0.3); border-radius:6px; color:var(--text);">
                  <strong>4. Efficiency</strong><br>
                  <span style="color:var(--text2);">(η = [P<sub>out</sub> / P<sub>in</sub>] × 100)</span>
                </div>
              </div>
            </div>
    `,
    finalAnswersHtml: `
            <table style="width:100%; border-collapse:collapse; font-size:14px; text-align:left; border-radius:8px; overflow:hidden; box-shadow:0 0 0 1px var(--border2);">
              <thead>
                <tr style="background:var(--surface3); color:var(--text2);">
                  <th style="padding:12px 16px; font-weight:600;">Parameter</th>
                  <th style="padding:12px 16px; font-weight:600; text-align:right;">Value</th>
                </tr>
              </thead>
              <tbody style="background:var(--surface2);">
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Output Power</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700;">25 kW</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Total Loss</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700;">0.8 kW</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Input Power</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700;">25.8 kW</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; color:var(--text);">Efficiency (η)</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--blue);">96.9%</td>
                </tr>
              </tbody>
            </table>
    `,
    conceptHtml: `
          <div style="padding:10px 20px 20px; font-size:14px; line-height:1.6; color:var(--text2);">
            
            <div style="padding: 15px; margin-bottom: 24px; background: rgba(59,130,246,0.1); border-left: 4px solid var(--blue); border-radius: 6px;">
              <strong>Note:</strong> The theoretical parts of this question (Essential conditions and Bank advantages) have been added to the <strong>Numerical Theory (W08)</strong> written notes section. <a href="#" onclick="switchTab('written'); setTimeout(()=>openDoc('W08'), 100); return false;" style="color:var(--blue); text-decoration:underline; font-weight:600;">Click here to view</a>.
            </div>

            <div class="n-h1" style="font-size:15px;">Why are Transformers Operated in Parallel?</div>
            <p>Instead of using one large transformer, two or more transformers are connected in parallel to:</p>
            <ul style="margin-left:20px; margin-bottom:16px;">
              <li>Increase total load capacity.</li>
              <li>Improve reliability (redundancy).</li>
              <li>Allow maintenance without a complete blackout.</li>
            </ul>
            <div class="n-card" style="background:rgba(239,68,68,0.1); border-color:rgba(239,68,68,0.3);">
              <strong style="color:var(--red);">Danger:</strong> For safe parallel operation, both transformers <em>must</em> produce the same secondary voltage and maintain the same phase relationship. Otherwise, massive circulating currents will flow, causing immediate overheating and destruction.
            </div>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">Importance of Percentage Impedance (%Z) and X/R Ratio</div>
            <div style="display:flex; flex-direction:column; gap:12px;">
              <div style="padding:12px; border-left:3px solid var(--orange); background:var(--surface2);">
                <strong style="color:var(--text);">Equal Percentage Impedance (%Z)</strong><br>
                Load current divides according to impedance. If one transformer has a lower impedance, it acts as a path of less resistance and carries more current, getting overloaded while the other sits idle.
              </div>
              <div style="padding:12px; border-left:3px solid var(--blue); background:var(--surface2);">
                <strong style="color:var(--text);">Same X/R Ratio</strong><br>
                This ensures the phase angles are the same. If they differ, one transformer supplies mostly active power (kW) and the other supplies reactive power (kVAR).
              </div>
            </div>

            <div class="n-h1" style="font-size:15px; margin-top:24px;">Transformer Efficiency Insights</div>
            <p>Transformers are static devices (no moving parts), which means they have no friction or windage losses. This is why their efficiency is incredibly high, typically <strong>95% to 99%</strong>.</p>
            <div class="n-card" style="margin-top:12px; background:var(--surface3);">
              <div style="font-weight:700; color:var(--text); margin-bottom:8px;">Core vs Copper Losses</div>
              <ul style="margin-left:20px; margin-bottom:0;">
                <li><strong>Iron (Core) Loss (P<sub>i</sub>):</strong> Caused by hysteresis and eddy currents in the steel core. This loss is <em>constant</em> as long as voltage and frequency are constant.</li>
                <li><strong>Copper Loss (P<sub>c</sub>):</strong> Caused by the electrical resistance of the windings (I²R). This loss is <em>variable</em> and increases as the square of the load current.</li>
              </ul>
            </div>

          </div>
    `
  },
  {
    id: 'n10',
    tier: 2,
    frequency: 6,
    title: "10. Solenoid Low-Voltage Release Calculation & Starting Torque",
    years: "2023/FEB, 2023/JUL, 2024/FEB, 2024/JUL, 2024/OCT, 2025/FEB",
    givenData: "A) List the factors that determine the starting torque of the three-phase induction motor. How does this torque generally compare with the value of the rated torque?<br>b) The low-voltage release of an a.c. motor-starter consists of a solenoid into which an iron plunger is drawn against a spring. Calculate the inductance of the solenoid for both positions of the plunger, and the maximum value of flux-linkages.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n11',
    tier: 3,
    frequency: 5,
    title: "11. Diesel-Engine-Driven Alternator \u2013 Speed Droop & Load Sharing",
    years: "2018/NOV, 2019/JAN, 2019/APR, 2021/APR2, 2022/MAR",
    givenData: "a) Explain the significance of the term \u2018speed droop\u2019 during the parallel operation of alternators. Assuming two alternators are running in parallel, outline the frequency-vs-load characteristics while load sharing.<br>b) Two 3-phase alternators operate in parallel; A is rated 1000 kW and B is 800 kW. The droop setting of each is 4%. If the load to be shared is 1000 kW and the original no-load frequency is 62 Hz, calculate the load sharing of generators A and B.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n12',
    tier: 3,
    frequency: 5,
    title: "12. P+I Control Loop & Resonance Circuit Calculation",
    years: "2023/APR, 2023/SEP, 2024/APR, 2025/SEP, 2025/NOV",
    givenData: "(a) Sketch an arrangement showing the principal of a proportional plus Integral (P+I) control loop.<br>(b) Compare the series and parallel resonance circuits. Find the frequency at which the circuit resonates (Given: $R_1=15~\\Omega$, $C_1=2\\mu F$, $L_1=0.1H$, $R_2=10~\\Omega$, $L_2=0.2~H$, $C_2=0.5\\mu F$).",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n13',
    tier: 3,
    frequency: 4,
    title: "13. Capacitance Factors & Tuned Circuit Calculation",
    years: "2023/JAN, 2024/NOV, 2025/MAR, 2025/JUL",
    givenData: "(a) On what factors does the capacitance of a parallel-plate capacitor depend?<br>(b) A tuned circuit consisting of a coil having an inductance of 200\u00b5H and a resistance of 200 in parallel with a variable capacitor is connected in series with a resistor of 80000 across a 60 V supply having a frequency of 1 MHz. Calculate: (a) The value of C to give resonance. (b) The dynamic impedance and the Q factor. (c) The current in each branch.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n14',
    tier: 3,
    frequency: 4,
    title: "14. Capacitor-Start Motor & Armature Conductors",
    years: "2023/JAN, 2024/NOV, 2025/MAR, 2025/JUL",
    givenData: "(a) The capacitor-start induction run motor has a much higher starting torque than the resistance split-phase motor. Explain.<br>(b) An eight-pole armature is wound with 480 conductors. Calculate the terminal voltage on no load, the output current on full load and the total power generated on full load when the armature is: (i) Lap connected (ii) Wave connected.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n15',
    tier: 3,
    frequency: 4,
    title: "15. Crawling and Cogging in Induction Motors",
    years: "2019/JUL, 2024/JUN, 2025/JUN, 2025/OCT",
    givenData: "a) Explain the phenomenon of crawling and cogging in these motors.<br>b) A three-phase induction motor is wound for four poles and is supplied from a 50 Hz System calculate: a) The synchronous speed, b) The speed of rotor when the slip is 4 per cent, c) The rotor frequency when the speed of the rotor is 600 r/min.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n16',
    tier: 3,
    frequency: 4,
    title: "16. DC Generators in Parallel",
    years: "2018/AUG, 2018/NOV, 2021/NOV, 2024/DEC",
    givenData: "Two 220 V d.c. generators each having linear external characteristics, operated in parallel. Given specific terminal voltages and load currents for each, calculate the output current of each machine and the bus bar voltage when the total load is 60 A. What is the kW output of each machine under this condition.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n17',
    tier: 3,
    frequency: 4,
    title: "17. DC Motor Max Torque & Shunt Motor Resistance Calculation",
    years: "2023/JAN, 2024/NOV, 2025/MAR, 2025/JUL",
    givenData: "a) What design factor limits the maximum torque of a d.c. motor?<br>b) A shunt motor runs on no load at 700 r/min off a 440 V supply. The resistance of the shunt circuit is 2400. The relationship between flux and shunt current is provided. Calculate the additional resistance required in the shunt circuit to raise the no-load speed to 1000r/min.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n18',
    tier: 3,
    frequency: 3,
    title: "18. 400 V, 4-Pole, 10 hp Star-Connected Induction Motor (Slip Calculation)",
    years: "2021/APR2, 2021/SEP, 2022/MAR",
    givenData: "A 400 V, 4-pole, 50 Hz, 3-phase, 10 hp star-connected induction motor has a no-load slip of 1% and a full-load slip of 4%. Find: (i) synchronous speed, (ii) no-load speed, (iii) full-load speed, (iv) frequency of rotor current at full load, (v) full-load torque.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n19',
    tier: 3,
    frequency: 3,
    title: "19. Back EMF & Earth Lamps Fault Calculation",
    years: "2022/DEC, 2023/MAR, 2024/APR",
    givenData: "a) What is back emf? Derive the relation for the back emf and the supplied voltage in terms of armature resistance.<br>b) The earth-lamps on a main switchboard comprise two 240 V 60 W lamps connected in the usual manner. Damage by sea water occurs to a distribution cable. Find by calculation which of the two lamps burns the brighter and the additional load on the generators.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n20',
    tier: 3,
    frequency: 3,
    title: "20. Container-Ship Delta/Delta Transformer (Coil Current & Output)",
    years: "2020/FEB, 2021/OCT, 2022/JAN",
    givenData: "a) Explain the principle of a transformer and discuss the various types of transformers used onboard.<br>b) In a container ship, a 3-phase delta/delta-connected 6600/440 V, 60 Hz transformer feeds the 440 V switchboard from shore. The primary draws a line current of 100 A when a secondary load of 0.8 lagging pf is connected. Determine each coil current and the kW output of the transformer.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n21',
    tier: 3,
    frequency: 3,
    title: "21. Incorrect Phase Connections & Shunt Motor Flux Drop",
    years: "2023/NOV, 2024/NOV, 2025/DEC",
    givenData: "a) Explain the effect of making incorrect phase and starter connections.<br>b) A 440V shunt motor takes an armature current of 30A at 700 rev/min. The armature resistance is 0.7 Ohm. If the flux is suddenly reduced 20 percent, to what value will the armature current rise momentarily? Assuming unchanged resisting torque to motion, What will be the new steady values of speed and armature current? Sketch graphs showing armature current and speed as functions of time.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n22',
    tier: 3,
    frequency: 3,
    title: "22. Peak Rectifier & Battery Charging Calculation",
    years: "2021/SEP, 2023/OCT, 2025/APR",
    givenData: "A) By means of a schematic circuit diagram illustrate the peak rectifier. If the supply voltage is $v(t)=Vm \\sin(\\omega t)$, what is the voltage across the load resistor?<br>B) A battery-charging circuit is shown. Calculate the necessary value of the variable resistance R so that the battery charging current is 1.0 A.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n23',
    tier: 3,
    frequency: 3,
    title: "23. Transformer Efficiency/Regulation & Motor Shunt Calculation",
    years: "2022/DEC, 2024/JAN, 2024/APR",
    givenData: "a) Why is it important to maintain high efficiency of operation? And low values of voltages regulation for power transformers?<br>b) A shunt motor supplied at 230 V runs at 900 rpm. Calculate the resistance required in series with the armature circuit to reduce the speed to 500 rpm.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n24',
    tier: 4,
    frequency: 2,
    title: "24. DC Generator Saturation Characteristics & Motor Calculation",
    years: "2023/MAR, 2023/JUN",
    givenData: "a) Describe the no-load saturation characteristics of a D.C. generator.<br>b) A DC motor takes an armature current of 110 A at 480 V. Calculate: i) The speed, ii) The gross torque developed by the armature.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n25',
    tier: 4,
    frequency: 2,
    title: "25. EMF Induced in an A.C. Generator & Synchronising Power",
    years: "2022/SEP, 2022/DEC",
    givenData: "a) Derive an expression for the emf induced in an a.c. generator.<br>b) A 3000 kVA, 6-pole, star-connected alternator runs at 1000 r.p.m. in parallel with other machines on 3300 V busbars. The synchronous reactance is 25%. Calculate the synchronising power for one mechanical degree of displacement and the corresponding synchronising torque.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n26',
    tier: 4,
    frequency: 2,
    title: "26. Induction Motor Effects of Load & Transformer Regulation",
    years: "2024/JAN, 2024/MAR",
    givenData: "a) Describe the effects of changes in speed, rotor current and torque as load is applied to an induction motor. How does the motor adjust its stator current with changes in mechanical load?<br>b) Estimate the regulation at full load for a 20 KVA transformer under power-factor conditions of: (i) Unity, (ii) 0.5 (lagging), (iii) 0.5 (Leading).",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n27',
    tier: 4,
    frequency: 2,
    title: "27. Magnetic Leakage / Leakage Flux in a Transformer (+ OC/SC Test Calculation)",
    years: "2022/SEP, 2022/NOV",
    givenData: "a) What is leakage flux as applied to the iron-core transformer, and how is it taken into account in the analysis of the transformer? (Also asked: discuss magnetic leakage in a transformer and how its value may be kept low.)<br>b) From the open-circuit and short-circuit test results of a 50 kVA transformer, calculate the efficiencies at full and half load (0.7 pf), the voltage regulation for 0.7 pf lagging and leading, and the corresponding secondary terminal voltages.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n28',
    tier: 4,
    frequency: 2,
    title: "28. Permanent-Magnet Moving-Coil Instrument (+ Calculation)",
    years: "2018/OCT, 2022/MAR",
    givenData: "a) Explain the construction and principle of operation of a permanent-magnet moving-coil instrument.<br>b) A PMMC instrument has a coil of dimensions 15 mm \u00d7 12 mm. The air-gap flux density is 1.8 \u00d7 10\u207b\u00b9 Wb/m\u00b2 and the spring constant is 0.4 \u00d7 10\u207b\u2076 N\u00b7m/rad. Determine the number of turns required to produce an angular deflection of 90\u00b0 when a current of 5 mA flows through the coil.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n29',
    tier: 4,
    frequency: 2,
    title: "29. Short Circuit & Rotating Magnetic Field",
    years: "2023/NOV, 2025/DEC",
    givenData: "(a) Describe how protection against short circuit is provided.<br>(b) Explain how rotating magnetic field is produced in three phase winding with three phase supply. A 4-pole, 3 phase induction motor operates from a supply whose frequency is 50 Hz. Calculate (i) Speed at which the magnetic field of the stator is rotating, (ii) Speed of the rotor when the slip is 0.04, (iii) The frequency of the rotor current when the slip is 0.03.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n30',
    tier: 4,
    frequency: 2,
    title: "30. Shunt Generator \u2013 Induced EMF (Load-Current Calculation)",
    years: "2021/APR1, 2021/AUG",
    givenData: "A shunt generator has an induced emf of 254 V. When loaded, the terminal voltage is 240 V. Neglecting armature reaction, find the load current if the armature resistance is 0.04 \u03a9 and the field-circuit resistance is 24 \u03a9.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n31',
    tier: 4,
    frequency: 1,
    title: "31. 60 Hz System Preference & Transistor Amplifier Parameters",
    years: "2023/AUG",
    givenData: "a) Explain the preference for a 60 Hz system. Describe the dangers of running a 50 Hz system from a 60 Hz supply.<br>b) A transistor amplifier stage comprises a transistor of given parameters. Determine the current, voltage and power gains of the amplifier stage.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n32',
    tier: 4,
    frequency: 1,
    title: "32. Condensers Capacity Comparison & Battery Internal Resistance",
    years: "2024/AUG",
    givenData: "a) Describe an accurate method of comparing the capacities of two condensers.<br>b) A resistor of 0.525 ohms is connected to the terminals of a battery consisting of 4 cells, each e.m.f. 1.46 V joined in parallel. The circuit current is found to be 0.8 A. Find the internal resistance of each cell.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n33',
    tier: 4,
    frequency: 1,
    title: "33. Frequency Change on Transformer & Coils in Series (AC vs DC)",
    years: "2024/AUG",
    givenData: "a) How does change to frequency affect the operation of the transformer? What makes this ratio different from the ratio of transformer.<br>b) The coils A and B are connected in series to 50 Hz mains. Find the impedance, reactance and resistance of each coil, the total circuit impedance, the applied a.c. voltage and the power factor of the complete circuit given distinct AC and DC voltage drops.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n34',
    tier: 4,
    frequency: 1,
    title: "34. Motor Speed Regulation Comparison & Induction Motor Losses",
    years: "2024/MAR",
    givenData: "a) Which of the following three motors has the poorest speed regulation: shunt motor, series Motor or cumulative compound motor? Explain.<br>b) Compute for full load for a given induction motor: (i) the rotor Cu loss, (ii) the rotor input, (iii) the shaft torque, (iv) the gross electromagnetic torque.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n35',
    tier: 4,
    frequency: 1,
    title: "35. PN Junction Diode \u2013 Applications & Bridge Calculation",
    years: "2022/SEP",
    givenData: "a) Explain the applications of a PN junction diode.<br>b) A bridge rectifier (without filter) feeds a load resistance of 4 k\u03a9; each diode has a forward resistance of 0.8 k\u03a9 and the peak voltage applied to each diode is 120 V at 50 Hz. Calculate (i) the average value of current, (ii) the efficiency, (iii) the regulation at a load current of 10 mA.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n36',
    tier: 4,
    frequency: 1,
    title: "36. SCR Breakover Voltage & DC Motor Calculation",
    years: "2022/NOV",
    givenData: "a) What is a silicon-controlled rectifier (SCR)? How is the breakover voltage of the SCR defined?<br>b) A DC motor takes an armature current of 110 A at 480 V. The armature-circuit resistance is 0.2 \u03a9. The machine has six poles and the armature is lap-connected with 864 conductors; the flux per pole is 0.05 Wb. Calculate (i) the speed, (ii) the gross torque developed by the armature.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n37',
    tier: 4,
    frequency: 1,
    title: "37. Short-Circuit Fault Current Calculation & Working on Live MSB",
    years: "2021/JUL1",
    givenData: "a) A 440 V, 10 kW, 0.8 pf load is supplied as shown. Calculate the short-circuit fault current at the load and at the main switchboard.<br>b) Explain the safe working procedure to be followed while working on a live MSB busbar.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n38',
    tier: 4,
    frequency: 1,
    title: "38. Synchronous Motor Self-Starting & Coil Power",
    years: "2024/AUG",
    givenData: "a) Why is a synchronous motor not self-starting? What are the various ways in which it can be started?<br>b) A coil has a resistance of 4 ohms and an inductance of 0.00954 henry. Calculate the power the coil will absorb and its power factor when it is connected to a 100-volts 50-cycle supply.",
    solutionStepsHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Solution steps coming soon...</em></div>`,
    finalAnswersHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Final answers coming soon...</em></div>`,
    conceptHtml: `<div style="padding: 20px; color: var(--text2); text-align: center;"><em>Concept explanation coming soon...</em></div>`
  },
  {
    id: 'n39',
    tier: 4,
    frequency: 1,
    title: "39. Waveform / Frequency / Average Value (+ Rectifier-Ammeter Calculation)",
    years: "2022/NOV",
    givenData: "a) Explain what is meant by the terms waveform, frequency and average value.<br>b) A moving-coil ammeter, a thermal ammeter and a rectifier are connected in series with a resistor across a 110 V sinusoidal a.c. supply. The circuit has a resistance of 50 \u03a9 to current in one direction and (due to the rectifier) infinite resistance to current in the reverse direction. Calculate (i) the reading on each ammeter, (ii) the form and peak factors of the current wave.",
    solutionStepsHtml: `
            <ol style="margin-top:0;">
              <li><strong>Given Data:</strong><br>
                Supply RMS Voltage (V<sub>rms</sub>) = 110 V<br>
                Resistance (R) = 50 Ω<br>
                Condition: Half-wave rectifier used (conducts only during one half-cycle).
              </li>
              <li><strong>Step 1: Calculate Peak Voltage (V<sub>m</sub>)</strong><br>
                <div class="n-formula">
                  V<sub>m</sub> = √2 × V<sub>rms</sub><br>
                  V<sub>m</sub> = 1.414 × 110 = <span class="n-val">155.6 V</span>
                </div>
              </li>
              <li><strong>Step 2: Calculate Peak Current (I<sub>m</sub>)</strong><br>
                <div class="n-formula">
                  I<sub>m</sub> = V<sub>m</sub> / R<br>
                  I<sub>m</sub> = 155.6 / 50 = <span class="n-val">3.11 A</span>
                </div>
              </li>
              <li><strong>Step 3: Reading of Moving-Coil Ammeter (Average Value)</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">A moving-coil instrument with a rectifier responds to the average value. For half-wave:</div>
                <div class="n-formula">
                  I<sub>avg</sub> = I<sub>m</sub> / π<br>
                  I<sub>avg</sub> = 3.11 / 3.142 ≈ <span class="n-val">0.99 A</span>
                </div>
              </li>
              <li><strong>Step 4: Reading of Thermal Ammeter (RMS Value)</strong><br>
                <div style="color:var(--text2); font-size:13px; margin-bottom:4px;">A thermal ammeter measures RMS value (heating effect). For half-wave:</div>
                <div class="n-formula">
                  I<sub>rms</sub> = I<sub>m</sub> / 2<br>
                  I<sub>rms</sub> = 3.11 / 2 ≈ <span class="n-val">1.56 A</span>
                </div>
              </li>
              <li><strong>Step 5: Calculate Form Factor</strong><br>
                <div class="n-formula">
                  Form Factor = I<sub>rms</sub> / I<sub>avg</sub><br>
                  Form Factor = 1.56 / 0.99 = <span class="n-val">1.57</span>
                </div>
              </li>
              <li><strong>Step 6: Calculate Peak Factor</strong><br>
                <div class="n-formula">
                  Peak Factor = I<sub>m</sub> / I<sub>rms</sub><br>
                  Peak Factor = 3.11 / 1.56 ≈ <span class="n-val">2.0</span>
                </div>
              </li>
            </ol>
            
            <div style="margin-top:40px; padding-top:20px; border-top:1px dashed var(--border2);">
              <div style="font-weight:700; color:var(--text); margin-bottom:20px; font-size:15px; display:flex; align-items:center; gap:8px;">
                <span style="color:var(--blue);">▶</span> Solution Flow
              </div>
              <div style="display:flex; flex-direction:column; gap:12px; font-size:13px;">
                <div style="padding:12px 16px; background:var(--surface2); border:1px solid var(--border); border-radius:6px; color:var(--text); display:flex; justify-content:space-between; align-items:center;">
                  <div>
                    <strong>1. Peak Values</strong><br>
                    <span style="color:var(--text2);">V<sub>m</sub> = √2 V<sub>rms</sub> &nbsp;→&nbsp; I<sub>m</sub> = V<sub>m</sub> / R</span>
                  </div>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="display:flex; gap:12px;">
                  <div style="flex:1; padding:12px 16px; background:rgba(34,197,94,0.1); border:1px solid rgba(34,197,94,0.3); border-radius:6px; color:var(--text);">
                    <strong>2. Moving Coil (Avg)</strong><br>
                    <span style="color:var(--text2);">I<sub>avg</sub> = I<sub>m</sub> / π</span>
                  </div>
                  <div style="flex:1; padding:12px 16px; background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.3); border-radius:6px; color:var(--text);">
                    <strong>3. Thermal (RMS)</strong><br>
                    <span style="color:var(--text2);">I<sub>rms</sub> = I<sub>m</sub> / 2</span>
                  </div>
                </div>
                <div style="text-align:center; color:var(--text3);">↓</div>
                <div style="display:flex; gap:12px;">
                  <div style="flex:1; padding:12px 16px; background:rgba(59,130,246,0.1); border:1px solid rgba(59,130,246,0.3); border-radius:6px; color:var(--text);">
                    <strong>4. Form Factor</strong><br>
                    <span style="color:var(--text2);">RMS / Average</span>
                  </div>
                  <div style="flex:1; padding:12px 16px; background:rgba(249,115,22,0.1); border:1px solid rgba(249,115,22,0.3); border-radius:6px; color:var(--text);">
                    <strong>5. Peak Factor</strong><br>
                    <span style="color:var(--text2);">Peak / RMS</span>
                  </div>
                </div>
              </div>
            </div>
    `,
    finalAnswersHtml: `
            <table style="width:100%; border-collapse:collapse; font-size:14px; text-align:left; border-radius:8px; overflow:hidden; box-shadow:0 0 0 1px var(--border2);">
              <thead>
                <tr style="background:var(--surface3); color:var(--text2);">
                  <th style="padding:12px 16px; font-weight:600;">Quantity</th>
                  <th style="padding:12px 16px; font-weight:600; text-align:right;">Answer</th>
                </tr>
              </thead>
              <tbody style="background:var(--surface2);">
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Peak Voltage</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700;">155.6 V</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Peak Current</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700;">3.11 A</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Moving-Coil Ammeter (Average)</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--green);">0.99 A</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Thermal Ammeter (RMS)</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--red);">1.56 A</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border2);">
                  <td style="padding:12px 16px; color:var(--text);">Form Factor</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--blue);">1.57</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; color:var(--text);">Peak Factor</td>
                  <td style="padding:12px 16px; text-align:right; font-weight:700; color:var(--orange);">2.0</td>
                </tr>
              </tbody>
            </table>
    `,
    conceptHtml: `
          <div style="padding:10px 20px 20px; font-size:14px; line-height:1.6; color:var(--text2);">
            
            <div style="padding: 15px; margin-bottom: 24px; background: rgba(59,130,246,0.1); border-left: 4px solid var(--blue); border-radius: 6px;">
              <strong>Note:</strong> The theoretical definitions (Waveform, Frequency, Average Value, RMS, Form/Peak Factor) have been added to the <strong>Numerical Theory (W08)</strong> written notes section. <a href="#" onclick="switchTab('written'); setTimeout(()=>openDoc('W08'), 100); return false;" style="color:var(--blue); text-decoration:underline; font-weight:600;">Click here to view</a>.
            </div>

            <div class="n-h1" style="font-size:15px;">Why Two Different Ammeters?</div>
            <p>This question tests your understanding of how different instruments respond to an AC waveform that has been passed through a <strong>half-wave rectifier</strong> (which chops off the negative half of the wave).</p>
            
            <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:24px;">
              <div style="padding:12px; border-left:3px solid var(--green); background:var(--surface2);">
                <strong style="color:var(--text);">Moving-Coil Ammeter (Measures Average)</strong><br>
                Moving-coil instruments rely on the magnetic effect of current. Since the torque produced is proportional to the current at any instant, the inertia of the moving system averages out the varying torque. Therefore, it reads the <strong>Average Value</strong> (I<sub>m</sub> / π for half-wave).
              </div>
              <div style="padding:12px; border-left:3px solid var(--red); background:var(--surface2);">
                <strong style="color:var(--text);">Thermal Ammeter (Measures RMS)</strong><br>
                Thermal instruments operate on the heating effect of current (I²R). Since heating is proportional to the square of the current, it is independent of the direction of flow. Thus, it reads the <strong>RMS Value</strong> (I<sub>m</sub> / 2 for half-wave), which represents the true "effective" heating power of the wave.
              </div>
            </div>

            <div class="n-card" style="background:var(--surface3);">
              <div style="font-weight:700; color:var(--orange); margin-bottom:12px;">🚢 MMD Exam Tip: Standard Values to Memorize</div>
              <p style="margin-bottom:12px;">You will often be asked to compare a Pure Sine Wave with a Half-Wave Rectified Wave. Memorize this table:</p>
              <table style="width:100%; border-collapse:collapse; font-size:13px; text-align:left; border-radius:6px; overflow:hidden; box-shadow:0 0 0 1px var(--border2);">
                <thead>
                  <tr style="background:var(--surface2); color:var(--text2);">
                    <th style="padding:8px 12px; font-weight:600; border-right:1px solid var(--border2);">Parameter</th>
                    <th style="padding:8px 12px; font-weight:600; border-right:1px solid var(--border2);">Pure Sine Wave</th>
                    <th style="padding:8px 12px; font-weight:600;">Half-Wave Rectified</th>
                  </tr>
                </thead>
                <tbody style="background:var(--surface1);">
                  <tr style="border-bottom:1px solid var(--border2);">
                    <td style="padding:8px 12px; color:var(--text); border-right:1px solid var(--border2);"><strong>Average Value</strong></td>
                    <td style="padding:8px 12px; color:var(--text); border-right:1px solid var(--border2);">0.637 I<sub>m</sub></td>
                    <td style="padding:8px 12px; color:var(--text);">0.318 I<sub>m</sub> <span style="color:var(--text3); font-size:11px;">(I<sub>m</sub> / π)</span></td>
                  </tr>
                  <tr style="border-bottom:1px solid var(--border2);">
                    <td style="padding:8px 12px; color:var(--text); border-right:1px solid var(--border2);"><strong>RMS Value</strong></td>
                    <td style="padding:8px 12px; color:var(--text); border-right:1px solid var(--border2);">0.707 I<sub>m</sub></td>
                    <td style="padding:8px 12px; color:var(--text);">0.500 I<sub>m</sub> <span style="color:var(--text3); font-size:11px;">(I<sub>m</sub> / 2)</span></td>
                  </tr>
                  <tr style="border-bottom:1px solid var(--border2);">
                    <td style="padding:8px 12px; color:var(--text); border-right:1px solid var(--border2);"><strong>Form Factor</strong></td>
                    <td style="padding:8px 12px; font-weight:700; color:var(--blue); border-right:1px solid var(--border2);">1.11</td>
                    <td style="padding:8px 12px; font-weight:700; color:var(--blue);">1.57</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 12px; color:var(--text); border-right:1px solid var(--border2);"><strong>Peak Factor</strong></td>
                    <td style="padding:8px 12px; font-weight:700; color:var(--orange); border-right:1px solid var(--border2);">1.414</td>
                    <td style="padding:8px 12px; font-weight:700; color:var(--orange);">2.0</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
    `
  },

];

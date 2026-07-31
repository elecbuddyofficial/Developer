window.NOTE_HTML = window.NOTE_HTML || {};

window.NOTE_HTML['W08'] = `
<div class="view" id="notes-w08">
<div class="note-title">
  <h2>Numerical Theory</h2>
  <div class="subtitle">Theoretical explanations behind common numerical questions</div>
</div>

<div class="note-doc">
  <div class="n-h1">1. Equivalent Capacitance (Series vs Parallel)</div>
  <div class="n-info" style="margin-top: 15px;">
    <div class="icon">❓</div>
    <div class="body">
      <strong>Question:</strong><br>
      Which has the greater equivalent capacitance, two equal capacitors in series or in parallel? Explain.
    </div>
  </div>

  <div style="font-weight:700; color:var(--blue); margin: 30px 0 15px; font-size:15px; border-top:1px solid var(--border2); padding-top:20px; letter-spacing:0.5px; text-transform:uppercase;">Answer & Explanation</div>
  
  <p>Capacitance is fundamentally the ability to store electrical charge. The configuration of capacitors directly impacts the total charge a circuit can store.</p>
  
  <div class="n-grid" style="margin-top: 20px;">
    <!-- Parallel -->
    <div class="n-ok" style="margin:0; flex-direction:column; gap:8px;">
      <div style="display:flex; align-items:center; gap:8px; font-weight:700; color:var(--green); font-size:16px;">
        <span class="icon" style="margin:0;">➕</span> Parallel Connection
      </div>
      <div class="body" style="font-size:14px; margin-top:8px;">
        In a parallel connection, the plate areas effectively <strong>add together</strong>, allowing more total charge to be stored across the parallel branches.
        <div class="n-formula" style="margin:12px 0; background:rgba(255,255,255,0.05); padding:8px;">C<sub>eq</sub> = C<sub>1</sub> + C<sub>2</sub></div>
        For two equal capacitors: <strong>C<sub>eq</sub> = C + C = 2C</strong><br>
        <span style="color:var(--green); font-weight:600; display:inline-block; margin-top:8px;">Result: Greater Capacitance</span>
      </div>
    </div>

    <!-- Series -->
    <div class="n-warn" style="margin:0; flex-direction:column; gap:8px;">
      <div style="display:flex; align-items:center; gap:8px; font-weight:700; color:var(--orange); font-size:16px;">
        <span class="icon" style="margin:0;">➖</span> Series Connection
      </div>
      <div class="body" style="font-size:14px; margin-top:8px;">
        In a series connection, the same charge passes through both capacitors, behaving as though the distance between the outermost plates has <strong>increased</strong>.
        <div class="n-formula" style="margin:12px 0; background:rgba(255,255,255,0.05); padding:8px;">1 / C<sub>eq</sub> = 1 / C<sub>1</sub> + 1 / C<sub>2</sub></div>
        For two equal capacitors: <strong>C<sub>eq</sub> = C / 2</strong><br>
        <span style="color:var(--orange); font-weight:600; display:inline-block; margin-top:8px;">Result: Lower Capacitance</span>
      </div>
    </div>
  </div>

  <div class="n-info" style="margin-top:20px;">
    <div class="icon">💡</div>
    <div class="body">
      <strong>Conclusion:</strong> Since <code>2C &gt; C / 2</code>, two equal capacitors connected in <strong>parallel</strong> have the greater equivalent capacitance.
    </div>
  </div>

  <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;">
  
  <div class="n-h1">2. Alternator True Power, Apparent Power & kVA Rating</div>
  
  <div style="font-size: 13px; color: var(--text2); margin-top: 5px; margin-bottom: 15px;">
     <strong>Appeared in:</strong> 2018/FEB, 2018/DEC, 2019/FEB, 2019/AUG, 2019/OCT1, 2019/OCT2, 2019/DEC, 2021/FEB, 2021/APR1, 2021/JUL1, 2022/JAN, 2022/APR, 2022/JUN, 2025/JAN, 2025/AUG (15x)
  </div>

  <div class="n-info" style="margin-top: 15px;">
    <div class="icon">❓</div>
    <div class="body">
      <strong>Question:</strong><br>
      Briefly explain <strong>True Power</strong>, <strong>Apparent Power</strong> and <strong>Power Factor</strong>.
    </div>
  </div>

  <div style="font-weight:700; color:var(--blue); margin: 30px 0 15px; font-size:15px; border-top:1px solid var(--border2); padding-top:20px; letter-spacing:0.5px; text-transform:uppercase;">Answer & Explanation</div>
  
  <p>An alternator is <strong>rated in kVA</strong>, not kW, because it supplies both real power (kW) and reactive power (kVAR). It cannot distinguish between them, so its heating depends on the total current (Apparent power).</p>

  <div class="n-grid" style="margin-top: 20px;">
    <!-- True Power -->
    <div class="n-ok" style="margin:0; flex-direction:column; gap:8px;">
      <div style="display:flex; align-items:center; gap:8px; font-weight:700; color:var(--blue); font-size:16px;">
        True Power (kW)
      </div>
      <div class="body" style="font-size:14px; margin-top:8px;">
        This is the actual or real power that performs useful work in a circuit. It is determined by the formula:
        <div class="n-formula" style="margin:12px 0; background:rgba(255,255,255,0.05); padding:8px;">P = S × PF</div>
      </div>
    </div>

    <!-- Apparent Power -->
    <div class="n-warn" style="margin:0; flex-direction:column; gap:8px;">
      <div style="display:flex; align-items:center; gap:8px; font-weight:700; color:var(--orange); font-size:16px;">
        Apparent Power (kVA)
      </div>
      <div class="body" style="font-size:14px; margin-top:8px;">
        This is the total power flowing in the circuit, comprising both True Power (kW) and Reactive Power (kVAR).
        <div class="n-formula" style="margin:12px 0; background:rgba(255,255,255,0.05); padding:8px;">S = P / PF</div>
      </div>
    </div>
  </div>

  <div class="n-info" style="margin-top:20px;">
    <div class="icon">💡</div>
    <div class="body">
      <strong>Power Factor (PF):</strong> It is the ratio of True Power to Apparent Power (kW / kVA). A lower power factor means more reactive current is drawn, increasing the apparent power required for the same useful work.
    </div>
  </div>

</div>
</div>
`;

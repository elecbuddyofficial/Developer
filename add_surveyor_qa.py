import re

def append_to_file(filepath, content_to_append):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the end of the notes content (just before the final closing divs)
    # Most formatted notes end with </div>\n</div>\n`); or similar
    match = re.search(r'(</div>\s*</div>\s*</div>\s*`\);|</div>\s*</div>\s*`\);)', content)
    
    if not match:
        print(f"Could not find end of notes in {filepath}")
        return
        
    if "🗣️ Surveyor Q&amp;A" in content or "🗣️ Surveyor Q&A" in content:
        print(f"Surveyor Q&A already in {filepath}")
        return

    end_str = match.group(0)
    new_content = content.replace(end_str, content_to_append + "\n" + end_str)
    
    # Also add the jump link to the note-anchors if note-anchors exists
    anchor_html = '<button class="anc-btn" onclick="jumpTo(\'s-surveyor-qa\')">Surveyor Q&amp;A</button>\n  </div>'
    new_content = re.sub(r'</div>\s*(<!-- ═══ SECTION 1 ═══ -->|<div class="n-h1")', anchor_html + r'\n\n  \1', new_content, 1)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Appended Surveyor Q&A to {filepath}")

t02_qa = """
  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyor-qa">🗣️ Surveyor Q&amp;A (Topic 2: High Voltage)</div>
  <div class="n-crit"><div class="icon">❓</div><div class="body">
    <p><strong>Q (Surveyor Kamath): What is the difference between standard earthing and neutral earthing resistor (NER) in HV systems?</strong></p>
    <p>Kamath often asks this to check if you understand why HV systems aren't solidly earthed. Answer: LV systems (440V) are typically insulated neutral (IT system) to maintain operation on first earth fault. HV systems (3.3kV/6.6kV) use an NER connecting the star point to earth. This limits earth fault current to a safe level (e.g., 400A) to prevent catastrophic arcing damage to the generator stator, while still providing enough current for the earth fault relay to detect and trip instantly.</p>
    
    <p><strong>Q (Surveyor Deswal): Detail the exact step-by-step procedure to rack out a VCB.</strong></p>
    <p>Deswal expects absolute precision on safety here. 1. Obtain Permit to Work (PTW). 2. Ensure breaker is OPEN (check indicator). 3. Discharge closing springs. 4. Isolate control power. 5. Insert racking handle and turn counter-clockwise. 6. Observe position indicator moving from 'SERVICE' to 'TEST' to 'ISOLATED'. 7. Apply physical padlock on shutters/cubicle. 8. Use approved HV tester (after proving tester is working) to confirm contacts are dead. 9. Apply circuit main earths.</p>

    <p><strong>Q (Surveyor Vishwanathan): Why do we use Vacuum Circuit Breakers (VCB) for HV instead of Air Circuit Breakers (ACB)?</strong></p>
    <p>Air has lower dielectric strength. At 6.6kV, an arc drawn in air during contact separation would be massive and difficult to extinguish, requiring enormous arc chutes. A vacuum provides excellent dielectric strength (no ionizable gas), extinguishing the arc quickly at the first zero-crossing of the AC current, allowing the breaker to be compact and maintenance-free.</p>
  </div></div>
"""

t03_qa = """
  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyor-qa">🗣️ Surveyor Q&amp;A (Topic 3: Electric Motors)</div>
  <div class="n-crit"><div class="icon">❓</div><div class="body">
    <p><strong>Q (Surveyor Sanjib): Why does a 3-phase induction motor draw 6-8 times full load current on starting?</strong></p>
    <p>Sanjib focuses on fundamental concepts. Answer: At standstill, the motor acts like a transformer with a short-circuited secondary (the squirrel cage rotor). The slip is 1 (100%). The rotating magnetic field cuts the stationary rotor bars at maximum speed, inducing maximum EMF and current in the rotor. This massive rotor current requires a proportionally massive balancing current from the stator. As the rotor accelerates, slip decreases, back-EMF builds up, and the current drops to normal running levels.</p>

    <p><strong>Q (Surveyor Nair): Explain single-phasing of a motor. What happens if it occurs while running vs. at standstill?</strong></p>
    <p>If one phase is lost while RUNNING: The motor will continue to run but will draw excessive current (approx 1.73 times normal) on the remaining two phases to maintain the mechanical load. It will overheat and the overload relay should trip. If lost at STANDSTILL: The motor will not start. It will just hum and draw locked-rotor current because a rotating magnetic field cannot be established with only two phases. It will burn out quickly if not tripped.</p>

    <p><strong>Q (Surveyor Kamath): How do you change the direction of rotation of a 3-phase induction motor, and why does this work?</strong></p>
    <p>You swap any two of the three supply phases (e.g., swap L1 and L2). Why it works: The direction of the rotating magnetic field depends on the phase sequence (R-Y-B vs Y-R-B). Swapping two phases reverses the sequence, which reverses the direction of the rotating magnetic field, and the rotor follows it.</p>
  </div></div>
"""

if __name__ == '__main__':
    append_to_file(r'D:\Notes 1\Original\ETO_Study_App\data\notes\t02_notes.js', t02_qa)
    append_to_file(r'D:\Notes 1\Original\ETO_Study_App\data\notes\t03_notes.js', t03_qa)

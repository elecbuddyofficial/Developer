# ETO App — Active Progress
**Task:** Topic 2 (High Voltage) — COMPLETE
**Completed:** 2026-06-01

## Steps
[✓] Read T02 docx (ETO_v2_Topic2_HV.docx) — 10 sections extracted
[✓] Categorize + expand T02 questions — 72 total across 10 categories
[✓] Write T02 notes content — full structured notes (10 sections)
[✓] Add T02 to app — sidebar active, view-notes-t02, quiz topic switcher
[✓] Regenerate quiz_data.js

## Current state
- T01 Alternator: 261 questions, 16 categories, full notes ✓
- T02 High Voltage: 72 questions, 10 categories, full notes ✓
- T03–T23: legacy questions only (8–30 each, no categories, no notes)

## Files modified
- D:\Notes 1\Original\ETO_Study_App\app\index.html  (main app)
- D:\Notes 1\Original\ETO_Study_App\data\quiz_data.json
- D:\Notes 1\Original\ETO_Study_App\data\quiz_data.js

## T02 Categories
HV=HV System Basics, VCB=VCB & Circuit Breakers, NER=Neutral Earthing Resistor,
MSB=Switchboard & Busbars, SAF=HV Safety & Permits, GLV=HV Gloves & PPE,
IR=IR Testing (HV), IRM=Insulation Monitoring, BON=Bonding & Earthing, SHF=Shaft Earthing

## Navigation (PENDING — agreed but not yet built)
Planned redesign: Sidebar → Home + Oral Section only.
Oral Section landing → Study Notes card + Quiz Practice card.
Both show topic picker grid (T01–T23). Currently topics are in sidebar directly.
Build this when Blesson asks for it — it's a full nav rewrite of index.html.

## Next session: start here
Next topic is T03 — Motors (ETO_v2_Topic3_Motors.docx).
Same build pattern as T01/T02:
1. pip install python-docx --break-system-packages -q
2. Read docx, extract categories
3. Run question generation script (see build_t01.py in outputs/ as template)
4. Add notes section to index.html
5. Update quiz_data.json + regenerate quiz_data.js
6. Add T03 sidebar button (replace "coming soon" stub)

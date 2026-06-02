# ETO App — Division of Work
## Two-Pass Content System + App Layer

### Content pipeline (per topic):
1. **Gemini — First pass:** Writes the notes, saves to `data/notes/tXX_notes.js`, sets `notesReady:true` in index.html
2. **Claude — Second pass:** Watcher auto-detects the save → runs enrich_agent (adds depth, surveyor Q&A, regulations, values) → runs quiz_agent (generates 30+ questions per section)

Gemini focuses on getting ALL the content from the docx into the notes quickly and clearly.
Claude focuses on depth, exam-critical detail, surveyor Q&A, and quiz generation.
Neither needs to wait for the other — the watcher handles it automatically.

---

## FILE OWNERSHIP — STRICT

### Claude owns (DATA LAYER) — do not edit these in index.html or via Gemini

```
data/
  notes/
    t01_notes.js     ← Claude writes these
    t02_notes.js
    t03_notes.js
    ...tXX_notes.js
  quizzes/
    t01_quiz.js      ← Claude writes these
    t02_quiz.js
    ...tXX_quiz.js
  tXX_categories.json  ← Claude writes these (cat codes for quiz categories)

*.py                 ← All Python agents (Claude only)
config.env           ← API key config (Claude only)
GEMINI_WRITER_PROMPT.md  ← Gemini's writing instructions (Claude only)
```

### Gemini owns (APP LAYER) — Claude does not touch these

```
app/
  index.html         ← Gemini owns entirely
    - All CSS
    - All JavaScript (quiz engine, view router, loadNotes/loadQuizzes functions)
    - TOPICS[] array
    - CAT_NAMES{} object
    - Navigation, sidebar, UI layout
```

---

## THE CONTRACT — How the two layers connect

Gemini's app calls two functions. Claude's data files define them.
As long as both sides respect this interface, they never conflict.

### For Notes:
Claude writes:
```js
// data/notes/t07_notes.js
window.loadNotes("T07", `<div class="view" id="view-notes-t07">
  ...full HTML notes content...
</div></div>`);
```

Gemini's app calls (already wired in index.html):
```js
window.fetchTopicData("T07", "T07_Control_PLC")
// → injects <script src="../data/notes/t07_notes.js">
// → that script calls window.loadNotes("T07", ...)
// → app displays the notes
```

### For Quizzes:
Claude writes:
```js
// data/quizzes/t07_quiz.js
window.loadQuizzes("T07_Control_PLC", [
  {"q": "...", "a": "...", "opts": [...], "exp": "...", "cat": "PLC"},
  ...
]);
```

Gemini's app calls (already wired in index.html):
```js
// When user clicks a topic in the quiz picker:
// → injects <script src="../data/quizzes/t07_quiz.js">
// → that script calls window.loadQuizzes("T07_Control_PLC", [...])
// → quiz engine loads the questions
```

---

## ADDING A NEW TOPIC — Step by step

When Gemini finishes writing a topic (e.g. T07):

**Step 1 — Gemini updates index.html TOPICS array:**
```js
{id:'T07', key:'T07_Control_PLC', name:'Control Systems & PLC', icon:'🖥️',
 notesView:'notes-t07', notesReady:true},
```
Change `notesReady` from `false` → `true` only when the notes file exists.

**Step 2 — Gemini saves the notes HTML to the data file:**
Save content to: `data/notes/t07_notes.js`
Format: `window.loadNotes("T07", \`...\`);`
Do NOT paste notes content into index.html.

**Step 3 — Claude generates quizzes:**
Reads the docx + notes file, generates `data/quizzes/t07_quiz.js`
No changes to index.html needed.

**Step 4 — Gemini updates CAT_NAMES in index.html:**
Claude outputs the new category codes after generating quizzes.
Gemini adds them to the `CAT_NAMES` object in index.html.

---

## WHAT NOT TO DO

### Gemini must NOT:
- Write notes content directly into `index.html` (causes monolithic file, breaks agents)
- Overwrite or edit `data/notes/tXX_notes.js` files (Claude owns these)
- Overwrite or edit `data/quizzes/tXX_quiz.js` files (Claude owns these)
- Change the `window.loadNotes` or `window.loadQuizzes` function signatures
- Change the `window.fetchTopicData` function logic
- Change script src paths (`../data/notes/` and `../data/quizzes/`)

### Claude must NOT:
- Edit `app/index.html` directly
- Change the TOPICS[] array
- Change the quiz engine JavaScript
- Change CSS or layout

---

## QUICK REFERENCE — File paths

| File | Owner | Purpose |
|---|---|---|
| `app/index.html` | Gemini | Entire app shell, UI, JS engine |
| `data/notes/tXX_notes.js` | Claude | HTML notes content per topic |
| `data/quizzes/tXX_quiz.js` | Claude | MCQ questions per topic |
| `data/tXX_categories.json` | Claude | Category codes (for reference) |
| `*.py` | Claude | Content generation agents |
| `config.env` | Shared | API key (never commit to git) |
| `GEMINI_WRITER_PROMPT.md` | Claude | Format spec for Gemini |
| `DIVISION_OF_WORK.md` | Both | This document |

---

## WHEN THINGS GO WRONG

**Notes not showing in app:**
- Check `notesReady: true` is set in TOPICS[] in index.html (Gemini's job)
- Check `data/notes/tXX_notes.js` exists and starts with `window.loadNotes("TXX",` (Claude's job)
- Check the topic ID matches exactly: `"T07"` not `"t07"` or `"07"`

**Quizzes not loading:**
- Check `data/quizzes/tXX_quiz.js` exists (Claude's job)
- Check `window.loadQuizzes("TXX_TopicName", [...]` — the topic key must match `TOPIC_KEYS` in agent_utils.py AND the `key:` field in TOPICS[] in index.html (both must agree)

**CAT_NAMES missing (quiz categories show raw codes):**
- Run quiz_agent for that topic — it outputs the cat codes to add
- Gemini adds them to `CAT_NAMES` in index.html

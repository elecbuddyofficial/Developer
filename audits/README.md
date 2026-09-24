# Audits

Run these before shipping anything.

```
python audits/run_all.py              # no credentials needed, a few seconds
python audits/run_all.py --browser    # adds the rendered-page checks
python audits/run_all.py --all        # adds the three that read production
```

They exist because the expensive failures in this project were never in the
code being edited. A grace backfill plus a change to the expiry mailer told 158
people their subscription had ended. A scope list written before Sponsorship
existed made four money functions grant nothing at all. In both cases a test of
the change itself would have reported clean.

## What is checked

**Duplicates.** Two paths grant access for one purchase, on purpose: the
buyer's browser and Razorpay's webhook, so a closed tab cannot cost somebody
their access. `applyPurchase` ADDS months, so the same payment applied twice
grants twice the time. Both paths claim the order with a compare-and-swap and
return without touching the profile when they lose, and the webhook keeps a
ledger of event ids so a retry is answered 2xx without being applied again.

**The money path.** That nothing deciding a charge or a grant is taken from the
browser: the price comes from `pricing_plans`, the months from `PLAN_MONTHS`,
the scope from the stored order, the discount from the `coupons` table, and the
Razorpay webhook verifies its signature over the raw bytes before parsing
anything.

**The course split.** That a grant made under one course cannot touch the
other, that a coupon cannot be spent outside the course it was written in, and
that neither course's content key opens the other.

**Client copies of server rules.** The app is static HTML and the server is
Deno, so rules like `scopesCovered` and `deriveAccess` exist in several
languages. Each copy is parsed out of the real file and run against the
server's own implementation. Never restate a rule inside a test: a test that
restates it passes while both are wrong.

**Every control in the admin console.** `admin_controls.py` presses all 330 of
them across 25 tab-and-course combinations, including the ones inside collapsed
panels and closed modals, and checks that none overlaps another, none is bound
twice, and none throws.

```
python audits/admin_controls.py            press everything
python audits/admin_controls.py --map      what each control calls
python audits/admin_controls.py --selftest plant faults, require them found
```

`--map` is the fastest way to learn what the console does: every control beside
the handler behind it, and the handlers shared across tabs. Sharing is usually
right, one grant dialog serving both courses, but it is also where a change
made for one tab quietly changes another.

Nothing it presses can reach anything real. The page is served locally, the
database client and `fetch` are replaced before any page script runs and the
audit refuses to press anything unless it can verify that, a route gate aborts
and records any request that is not the local server, and `confirm()` always
declines. Production counts were taken either side of a run and are identical.

**The plaintext notes mirror.** `backup_fresh.py` decrypts each live Oral
notes file and compares it with the copy in `data/Orals/Backup/notes/`, the
plaintext set that exists so the notes can be searched without a key. Nothing
kept that copy up to date. On 24 Sep 2026 every one of the 23 files was stale,
T15 by 68,905 characters, and T22 there still gave 1000 V as the megger test
voltage for a 440 V circuit after it had been corrected to 500 V weeks before.

That is worse than having no mirror. A coverage check run against it reports
gaps that are already filled, hides ones that are real, and invites a
"correction" back to the wrong figure. `--fix` rewrites the stale copies from
the live files. It exits 2 rather than 1 where there is no mirror or no
`CONTENT_KEY_ORAL`, since most clones have neither and that is unchecked
rather than broken.

**Study notes on a phone.** `notes_layout.py` renders every notes file in all
three courses at 360, 390 and 412px and fails on a grid that the phone layout
forces to one column but still renders two, a card squeezed below half its
grid, cards overlapping, or anything running past the reading column. It exists
because a card written as `style="grid-column: span 2"` quietly creates a second
column on a phone: a reader's recording of W01 Overcurrent Protection showed
Method 1 collapsed behind Method 2 and a huge gap before Method 3.

Width matters. The reader's phone is 360 CSS pixels wide, and on the fix-removed
run the overlap appeared at 360px and not at 390 or 412. That is why some
readers saw it and others never did, and why every run covers all three widths:
a check at iPhone width alone would have passed.

The notes are encrypted, so it takes directories of decrypted copies kept
outside the repo. Its first version reported all 117 files clean while every
one was invisible: notes arrive wrapped in `.view`, which is `display:none`
until activated, so every rectangle measured zero. It now activates views and
fails any file that renders under 200px tall rather than passing it.

**Structure.** Every precached file exists, because `cache.addAll` is atomic
and one bad path breaks offline for everybody. Every script, stylesheet and
content path resolves. No duplicate element ids. The Sponsorship course is
whole and encrypted at rest.

**Production, read-only.** That no table exposes a row to a stranger, that the
setup `.sql` files still describe the live schema, and that every scheduled job
is running and none has suddenly mailed far more people than usual.

## Writing a new one

Three habits, each learned the hard way here:

**Prove it can fail.** `python audits/mutate.py` breaks each rule on purpose and
checks the audit notices. An audit nobody has seen fail is an assumption, and
this has found real blind spots twice: a check for the word `safeEqual` passed
while the call that uses it was replaced by `if (false)`, because the helper's
own definition still contained the name. A check for a `return` passed the same
way. Matching a NAME never proves the name is used.

Two traps when adding a mutation, both of which cost a debugging detour here.
Write bytes, not text: text mode normalises CRLF to LF on the way back and
leaves every restored file showing as modified in git. And replace EVERY
occurrence, not the first: a later mention of the same name kept two genuine
mutations looking like misses.

**Check the instrument before believing a negative.** Several of these lied
before they worked. One reported 14 missing functions that were all method
calls. One reported 22 unrendered element ids that were all created in script.
One required a `,` or `)` after each SQL `CHECK` and so never saw the
constraints ending in `;` — it reported clean with two stale files in front of
it. One measured a page that ships as `visibility:hidden` until sign-in, so
every pointer event went to the root element. Run a control probe: something
that must be found, and something that must not.

**Exit 2 for "could not check".** A missing credential or an absent data
snapshot is not a pass and not a failure. `run_all.py` reports it separately,
because conflating the two is how a suite ends up permanently red and therefore
unread.

## Two files that are deliberately not here

`audits/.sb_token` — a Supabase access token for the three production audits.
Gitignored.

`audits/all_profiles.json` — 163 real customer rows, replayed by
`coc_regression.mjs` to prove no existing CoC customer moved. **This repo is
public**, because GitHub Pages serves elec-buddy.com from it, so account ids
and subscription dates cannot live here. The query that rebuilds it is at the
top of that file, and the audit exits 2 rather than passing without it.

## Every screen at every phone size (`mobile_matrix.py`)

Added 14 Sep 2026, after a reader's 360px Android phone showed W01 Overcurrent
Protection collapsing into one squeezed column. It rendered wrong at 360px and
right at 390 and 412, so every check that ran at iPhone width reported clean.

It loads the real pages, walks about 120 screens and modals across both apps,
sign-in and the admin console, and measures each at 38 sizes: 20 portrait
phones and tablets from 280 to 900px, 8 landscape, and one pixel past each CSS
breakpoint. Content comes from a decrypted mirror of `data/` kept OUTSIDE the
repo; without one, the content screens are reported as not checked (exit 2),
never passed. Every request to Supabase or Razorpay is answered locally with a
503 and counted, so it cannot touch production.

```
python audits/mobile_matrix.py --selftest --plain <dir>   prove it can fail
python audits/mobile_matrix.py --plain <dir> --quick      8 sizes, a few minutes
python audits/mobile_matrix.py --plain <dir>              38 sizes, run as 4 shards:
    --shard 0/4 --port 8201 ... --shard 3/4 --port 8204
```

`--shots <dir>` saves an outlined screenshot of each confirmed finding, scrolled
into view. Look at them: several findings below were settled only by eye.

Kinds: OVERFLOW, NOHINT, NARROW, IMPLICIT, OVERLAP, CUT, CONTROL, UNREACHABLE,
TAP. Each is planted in `--selftest`, plus five fixes undone in a served copy
(never the repo file) that must be caught undone and clean as shipped.

What it found and what was fixed:

| where | at | fix |
|---|---|---|
| Surveyor Q&A filter dropdowns 83-98px past the screen | 280-384px | `.sq-topic-select` max-width |
| a long Surveyor Q&A label cut off | 280px | `.sq-label` may wrap and shrink |
| quiz Prev / Skip / Next clipped by the card | 280, 320px | `.quiz-actions` wraps |
| sign-in scroll button over the centre of Sign In | 280x653 | hidden while over a form control |
| notes tables hiding columns with no scroll hint | 769-932px | `table-hints.js` measures the wrapper too |

Every false alarm it raised was the same failure this file keeps recording,
reporting over ground it had not understood:

- A wrapped inline `<strong>` reports one rectangle around both its lines, so it
  "overlapped" the next line. Inline elements are excluded from OVERLAP.
- The admin rail scrolls at 768px; a button below its fold has its centre on
  screen while the footer is drawn there. Controls scrolled out of their own box
  are excluded from TAP.
- An open menu or dialog covers the page by design. Only a small fixed layer (a
  floating button) counts as covering; a panel does not.
- Every view slides up once on arrival. Only a LOOPING animation marks a ticker,
  or the check skipped a planted 640px block.
- A table scrolling inside `.n-table-wrap` was blamed on the table's own
  `overflow:hidden`. The holder is the first clipping box the element actually
  sticks out of.
- Six admin tabs were reported empty that are correctly hidden in the other
  course. Admin screens are now read from `COURSE_TABS` in the console itself.
- A mutation of the page file itself was silently served unmutated, because the
  page branch answered first. Swaps are applied before the page is served, and
  each undo is checked against the file before it runs.

# Changelog

Every shipped change, tied to the commit it went out in. Commit hashes are on
`elecbuddy-dev/master` (github.com/elecbuddyofficial/Developer), which is the
only remote this project pushes to.

**To trace something back:** find it below, then
`git show <hash>` for the full diff, or `git log --oneline <hash>~1..<hash>`.

**Conventions used here**
- 🗄️ marks a change that also needed SQL run against Supabase. Those are not in
  the code deploy, so a rollback of the commit does **not** roll them back.
- ⚠️ marks something that caused a production incident, kept deliberately so the
  cause stays findable.
- Content-only entries change `data/` and are invisible until the service worker
  version bumps.

---

## 2026-08-13

### `ed32773` — Offers show their deadline, and stop announcing dead sales ⚠️
Blesson asked whether buyers see how long an offer lasts. They did not, and the
question turned up three faults.

**Every dated offer ended a day early.** A date input yields a bare day, and
`new Date("2026-08-20")` is midnight at the *start* of the 20th, so an offer set
to run "until 20 August" died as the 19th ended and never ran on the day it
named. Start dates now take the beginning of the chosen day, end dates the end.

**The banner announced sales that were not running.** It keyed off the offer
name, written the moment the offer is set up, so a scheduled offer was
advertised immediately over full-price cards and an expired one kept being
advertised. It now keys off whether the discount is genuinely live.

**The deadline is now shown**, getting louder as it closes: "Ends 12 September"
→ "3 days left" → "Ends tomorrow" → "Ends today", with urgency styling in the
last three days. No end date shows nothing rather than inventing one.

Also **`.tag-green` had no CSS rule** while `.tag-blue` and `.tag-orange` did,
so the "Topic Focused" tag rendered as a colourless pill. Found by a CSS
coverage audit for classes used with no rule behind them. sw `v125 → v126`.

### `90fcfe6` — plan-name-audit tool
The plan names live in the database and in four hardcoded maps, so they can
drift silently: the card would say one thing and the receipt another. This
checks every copy against production and walks the payment path.


### `34d3c3a` — Plans tab: one price grid instead of three twelve-column tables
Three tables of twelve columns, 27 inputs and nine Save buttons became a **3 x 3
price grid** shaped like the offer selector above it. Seven of those columns
were the offer composer's job (discount, both dates, effective price, offer name,
description) and having them in two places meant two controls could disagree
about the same sale.

Adds a **live diff** naming every price about to change before it is written,
and a Save that stays disabled until something actually differs. Names and the
active switch moved into a panel that stays shut.

**Coupons were printing the raw database key**: the list pushed `applies_scope`
straight into the UI, so a targeted coupon read "written · 3mo". sw `v124 → v125`.

### `50c0c51` — Plan names say what they are
Passage / Voyage / Expedition → **Written Paper / Oral & Viva / Full COC
Preparation**. Launch / Mariner / Master → **3 / 6 / 12 Months**.

The track names always needed a bolted-on translation ("Passage - Written
Only"), and read as a good/better/best ladder when they are three different
products. The duration names were worse: they read as capability levels (Master
Mariner is a real rank) over identical content, inventing a hierarchy the
product does not have.

**Internal keys unchanged** — `written`/`oral`/`both` and `3mo`/`6mo`/`12mo` are
referenced by payments, entitlements, coupons and the funnel. Receipts verified
across all nine subject lines; the card no longer prints the duration twice.


### `388df0a` — Offers: one named composer, and a sale no longer deletes Best Value
A discount could be applied but never explained, so a sale showed as a
struck-through number with no reason. The bulk panel was also four stacked
blocks (one per track, plus "every plan") of five controls each: twenty
controls for one idea, and none of them set the offer name.

Replaced with a single composer: name, detail line, discount, dates, and a
**3 x 3 selector** that is the product itself, tracks down the side and
durations across the top. "Everything", "just Expedition" and "only the
12-month plans" become the same gesture. Preview renders the real cards, and
warns above 50%, above 100%, and when the offer has no name.

**The bug behind the jargon:** the promo badge *replaced* the "Best Value"
badge, so running a sale silently deleted the strongest nudge toward the
12-month plan. The offer is now named once in a banner above the cards and the
cards keep Best Value; differing names per plan still fall back to per-card
badges. The admin preview was about to disagree with the app and now renders
the banner too. sw `v122 → v124`.

### `3a741e5` — Aptitude A13: Average
Notes plus 17 questions. Weighted averages weight by counts not averages (30
boys at 12 and 20 girls at 17 is 14, not 14.5), and equal distances at 60 and
40 kmph average 48, not 50.


### `e034791` — Notification modal unreadable in light theme ⚠️
`.nfd` hardcoded `background:#0E1E33` while its text used `var(--text)`, so in
light theme it was dark on dark. **Claimed fixed once before and was not**: the
earlier pass replaced 32 hardcoded colours but missed the modal's own
background. The new survey modal had already copied the same bug.

`--amber` was never defined in any theme, so every use fell back to `#C8A44A`:
**2.37:1 on white**, far under the AA floor. Now per-theme, `#846C31` on light,
solved against `--surface3` as the worst case.

**The rule:** a hardcoded colour is only a bug when paired with a theme
variable. A pair hardcoded on both sides renders identically everywhere and is
deliberate. That cut the list from 19 apparent problems to 3 real ones,
including the **coupon input on the payment path**, unreadable while being
typed into. sw `v120 → v122`.

### `a45c958` — Exit feedback survey 🗄️
Asks once per user, ever, why they closed the price list without buying. The
guarantee lives in the database: `paywall_feedback` keyed on `user_id`, claimed
via `INSERT ... ON CONFLICT DO NOTHING` so check and claim are one atomic step.
The row is written when the survey is **shown**, not answered, so a dismissal
still counts and nobody is asked twice.

Fires on closing the price list, not on hitting the paywall (which is often
accidental), ignores a close inside 1.5 s, never asks a buyer, and appears
after the modal shuts so it never blocks the exit.

🗄️ SQL: `app/admin/paywall_feedback_setup.sql`, applied to production.

### `c7d076b` — Aptitude A01-A05
Trains, Time and Distance, Height and Distance, Time and Work, Simple Interest.
Notes plus quiz each, 80 questions, every formula verified numerically before
being written. Four supplied practice questions carried the wrong option letter
and one had no correct option; written up as worked problems so the fault is
not propagated.

## 2026-08-12

### `6579c2b` — "Who is where" is sortable, and the sorted column leads
The list was ordered by `times_opened` then `last_seen`, which reads as no
order at all: inside every "3 times" block the dates jumped around, so a visit
from today sat below one from a week ago. Two useful orderings were competing
and neither won.

Adds a **Sort by** control (last seen, now the default; times they came back;
how close they got to paying; signup date) and moves ordering out of the query
into `renderFunnelUsers`, so changing it does not re-fetch. Default is recency
because the panel answers "who do I contact".

The right-hand emphasis now follows the sort. Sorting by date while the visit
count was the bold number is what made the old order unreadable: the eye
follows the emphasis, not the sort.

### `74b3796` — Funnel starts at the paywall, not at the price list 🗄️
The funnel's first step was `upgrade_opened`, which only fires once somebody
opens the price list, so it measured people already considering paying. Anyone
who met the wall and left recorded nothing: **34 expired users were active in
seven days, 12 carried any funnel event, 22 were invisible**, and the largest
drop-off was the one it could not show.

`showGate()` now emits `paywall_shown`, deduped to one row per scope per page
session so a reader who bounces off the wall five times is one person, not
five. Fire and forget, and the gate still opens if tracking is unavailable.

`funnel_summary` gains "Hit the paywall" as step 1 and renumbers the rest to
five steps. That step counts `upgrade_opened` as well as `paywall_shown`, both
because the steps are cumulative and because events cannot be backdated: on its
own the new step would read 0 above an existing 16 and invert the funnel.
`funnel_by_user` splits step 0, which used to mean "hit the wall and walked
away" and "never saw a price" in the same sentence.

Also checked: `payment_failed` and `checkout_blocked` have never fired, but
both are wired correctly. With 6 `plan_selected` and 6 `checkout_opened` in the
project's history, nobody has been blocked before checkout and no card has been
declined. Rare, not broken. The Razorpay webhook never firing
(`webhook_events` empty) is a real gap and is tracked separately.

🗄️ SQL: `app/admin/funnel_setup.sql`, `app/admin/funnel_by_user_setup.sql`.
Both are `CREATE OR REPLACE VIEW` and re-runnable; `hit_paywall` is appended
last because replace can only add columns at the end. **Applied to production
before this commit**, which is the safe order: the database can receive the new
event before anything sends it.
sw `v114 → v115`.

**Reading the funnel correctly.** "Paid" is counted from `payments`, not from
funnel events, so it is not a subset of the step above it. Of the 5 people who
reached the payment window, 2 paid; the third payer has no `checkout_opened`
event at all, having arrived by another route (a coupon grant, or a purchase
predating the funnel table). So the step-to-step percentages hold everywhere
except the last row, where the drop shown is smaller than the real one. That is
the existing deliberate design, money over events, and is left alone.

### `7d36331` · `7aacddb` · `ac0f1f2` — Sponsorship content complete
25 modules of notes (0.81 MB) and 25 quizzes (1,564 questions, 1.16 MB).
Interview coverage 8 → 30 of 32 questions.

Two faults where the content existed and the feature did not: **23 of 25
modules were flagged `notesReady:false`**, so the app hid them (F03–F06 had been
finished and invisible for weeks), and **18 of 25 quizzes declared a key the app
does not look up** (`F13_Electrical_Protection_Switchgear` vs `F13_Protection`),
so those Take Quiz buttons would have loaded nothing. Both found by opening the
app rather than by reading the repo.

## 2026-08-11

### `f5953be` — Blocked paywall attempts recorded separately 🗄️ ⚠️
Activity tracker logged a Surveyor Q&A tap **before** the access gate, so an
expired trial appeared to have read paid content when the paywall had actually
stopped them. `qbStart` had the same shape. Now records `surveyor_blocked` /
`qbank_blocked` and shows them in red in the admin profile as a buying signal.
The paywall itself was never breached.

⚠️ **Incident:** `app/admin/topic_activity_setup.sql` opened with
`DROP TABLE IF EXISTS public.topic_activity`, written when the table was empty.
Re-running it on production to widen the `kind` CHECK **wiped all recorded
opens** (about a week of data). No paid data involved: payments, profiles,
`topic_progress`, `last_active_at`, `funnel_events` and `email_sends` are
separate and were untouched. The drop is removed in this same commit and the
file is now `CREATE TABLE IF NOT EXISTS` plus explicit `ALTER`s.
**This project has no PITR and no stored backups, so a drop is unrecoverable.**

🗄️ SQL: `app/admin/topic_activity_setup.sql` (widened `kind` CHECK).
sw `v108 → v109`.

### `a18b428` — Fire control plans, magnetron procedure, lifeboat reference sheets
Three new sections: T15 Fire Control Plan and IMO symbols, T21 §6A Lifeboat
Winch, T13 Magnetron Replacement. Corrects T21's lifeboat starting figures,
which had merged two independent supplies into one number.

Artwork: 64 A.952(23) symbols sliced individually (145 KB total, versus 14.8 MB
for the page scans), plus 19 reference plates as horizontal strips. Six manual
pages were landscape drawings printed sideways and were rotated. Also fixed six
malformed `.n-ok`/`.n-warn` callouts across T13/T15/T21.

83 new files in `data/diagrams/`. sw `v107 → v108`.

## 2026-08-10

### `41b1ea0` — Signup review queue 🗄️
Disposable-mail signups (yopmail, dnsink, maximail) were creating free trials at
no cost. Mainstream providers now sign up normally; anything else creates a real
account held in a `pending` queue for admin approval, with the trial clock
stopped until approved. Gmail dot and `+tag` aliases refused outright. New
Approvals tab with a nav badge.

🗄️ SQL: `app/admin/signup_guard_setup.sql`. Rewrites `handle_new_user` and adds
a BEFORE INSERT trigger on `auth.users`.

### `6d23271` — Preferential trip diagram in Written, diagram zoom rebuilt
Zoom used `position:fixed` on the image in place with a `box-shadow` fake
backdrop, which broke inside `#content` and `.note-doc`. Replaced with a real
overlay appended to `<body>`. sw `v105 → v106`.

### `b99128b` — Diagrams into cards, Data Saver regression fixed
Added images lacked `data-blur`, so the Data Saver regex skipped them and full
images downloaded regardless of the setting.

### `2028621` · `b527226` — Preferential trip and W01 diagrams
Diagrams that already existed elsewhere in the app but were never referenced.

### `4574c45` — Security audit ⚠️
Closed an **admin backdoor**: `handle_new_user` carried a hardcoded email
allowlist containing a typo'd, unregistered address that would have granted
`is_admin` at signup, before email confirmation. Auto-grant removed entirely.

### `dcb67ab` · `9508b81` · `9ef75b2` · `c2f5229` · `144cc74` — Admin and paywall polish
Congested study list, stale backdrop banding from `backdrop-filter` plus
`overflow`, nested scrolling in the profile panel, wrong mobile column labels.

### `df99cfe` — Wide content clipped out of reach on phones
`.n-table-wrap` had no `overflow-x` while `.note-doc` clipped. 19 long values and
29 wide tables were unreachable on a phone.

## 2026-08-09

### `b8829d6` — Per-topic activity recording 🗄️
Which topics, quizzes and the Surveyor bank were opened, and when.
🗄️ SQL: `app/admin/topic_activity_setup.sql`.

### `1e565ef` — Per-user activity in the admin profile

## 2026-08-08

### `8bd9e59` — Funnel moved to its own tab
### `b8d5d6c` — Device limit enforced on every page
Previously only one page checked it, so the limit was trivially sidestepped.
### `36ac797` — SIRE 2.0 in T19, engineers' alarm in T09

## 2026-08-07

### `4e3a44c` — Activity tracker moved to an Online Status tab
### `d2a3549` — Who is actually using the app 🗄️
🗄️ SQL: `app/admin/activity_tracker_setup.sql`.
### `be53022` — Profile write guard became an allowlist ⚠️
Was a denylist, so any column not explicitly named could be written by the user.
This is what now blocks self-approval of `signup_status`.
### `42d9077` — Funnel by person, sweep schedule fixed

## 2026-08-06

### `69f1256` — Welcome emails stopped being lost ⚠️
Only 2 of 12 were sending. `fetch` followed immediately by `location.replace`
cancelled the request, and the `type=signup` hash gate excluded prefetched
links. Fixed with `keepalive:true` and an account-age gate, plus a server sweep.
### `72e646f` — Live countdown under every expiry date

## 2026-08-04

### `274ae91` — Discount code could be redeemed as free access ⚠️
### `87ef413` · `1131598` — Admin-editable email templates, group mail 🗄️
Templates existed but were never read by the sending functions; every field is
now independently overridable.
### `21de541` — Correct what stops a deleted account reusing a coupon
### `8bd44bb` · `bfe532d` · `6ff60b0` — Notifications 🗄️
On every page, realtime delivery, tappable links without opening an XSS hole.
### `9ee0839` · `82aff18` — Track-wide sales, plans described before named
### `e822cc2` — Funnel: where people fall out on the way to paying 🗄️
### `190ebf2` — Refunds no longer destroy granted access ⚠️

## 2026-08-03

### `f2ea979` — Self-service account deletion, device limit enforced 🗄️
### `79f5182` — Auth links return to the domain the reader signed up on ⚠️
Links were hardcoded to the old GitHub Pages origin, so sessions were created in
the wrong origin's storage and users came back apparently signed out.
### `151cadb` · `27f1861` — Topic videos editable without a deploy 🗄️
### `a916659` — Returning users skip the landing page
### `cdaa24b` — Report a bug or request content from inside the app
### `da37ebc` — Admin video language, what's new banner, CSV exports
### `58a26be` · `a8648b1` — Email CTAs from one definition; terms wording
### `9e3140f` … `57c3400` — CNAME churn during the Vercel cutover

## Earlier

`8ce24b7` (2026-06-02) is the initial commit. 275 commits total. History before
2026-08-03 is not itemised here; use `git log --oneline` for it.

---

## Keeping this current

Add an entry **in the same commit as the change**, so the hash and the
description can never drift. Each entry should say what changed and, where it is
not obvious, **why**, since the why is what you actually need when tracing back
months later. Mark 🗄️ when SQL was run, because that is the part a `git revert`
will not undo.

# Elec-Buddy — Rules for Gemini

This is a static site (no build step, no framework) for `app/*.html` + `index.html`, deployed to GitHub Pages, backed by Supabase + Razorpay. Another AI tool (Claude Code) also edits this repo in the same working directory, in separate sessions. These rules exist so both tools converge instead of fighting each other.

## Git — read before every push

- **Only push to `elecbuddy-dev` (`elecbuddyofficial/Developer`).** Never push to `origin` (`blessonjoji/Elec-Buddy`) — that remote serves the elec-buddy.com maintenance page, not this app.
- `git fetch elecbuddy-dev` and confirm local HEAD matches (or rebase) before pushing — the other AI tool may have pushed since your last pull.
- **Never `git add -A` or `git add .`.** Stage only the files your actual change touched, by name. Before committing, run `git status` and check every file listed — if something is there that you didn't intend to change (e.g. another in-progress edit sitting uncommitted in the working tree), leave it out of your commit rather than sweeping it in.
- Don't create new top-level docs/reports unless asked. Keep updating `AI_CHANGES.md` with what you changed — that pattern is good, keep it, but it's a supplement to a clear commit message, not a replacement for one.

## Service worker cache

`app/sw.js` has a `VERSION` constant (`const VERSION = 'v38'` as of writing). **Bump it by one on every deploy that touches anything under `app/`** — assets, HTML, CSS, JS. If you don't, GitHub Pages serves the new files but returning visitors' browsers keep the old cached ones until the SW happens to update, so changes look like they "did nothing."

## Content encryption

`data/Orals/**`, `data/Written/**` and `data/Sponsorship/**` are all encrypted at rest, each with its own key (`CONTENT_KEY_ORAL`, `CONTENT_KEY_WRITTEN`, `CONTENT_KEY_SPONSORSHIP`). If you edit anything under those directories, run `node encrypt-content.js --group=oral`, `--group=written` or `--group=sponsorship` (matching whichever you touched) before committing — never commit decrypted quiz/notes JSON.

**This file used to say Sponsorship was "permanently public/plaintext by design — do not encrypt it".** That changed on 14 Aug 2026: the whole course was sitting readable in the public GitHub repo, and a competitor had already copied the app concept, so `git clone` handed over months of writing with no account needed. Do not act on the old instruction; following it would undo the lockdown. Note the key policy still differs: the Oral and Written keys are released by `get-content-key` only after an entitlement check, while the Sponsorship key is released by `get-sponsorship-key` to **any logged-in user**, because that course is still free to read once signed in. It is deterrence against scraping, not a paywall.

An encrypted file on disk looks like `{"v":1,"iv":"...","data":"...","tag":"..."}` — if you need to read or edit it, decrypt first (`node encrypt-content.js --group=written --decrypt`, edit, then `node encrypt-content.js --group=written` again before committing). **`data/Written/numericals.js` and `data/Written/notes/w08_notes.js` are both encrypted this way as of 2026-07-31** — don't edit that JSON envelope directly, and don't recreate `numericals.js` from scratch as plaintext (it used to be a plain `<script src>`-loaded file; it's now loaded on-demand via `_loadEncryptedScript()` from `app/app.js`'s `loadNumericalsIfNeeded()` — keep using that loader, don't add a static script tag back).

## Branding — logo color rule

Logo color follows **section identity**, not light/dark UI theme:
- CoC pages (`app/index.html`, `app/courses.html`, `app/admin/index.html`) → blue family (`logo-blue*.svg`).
- Sponsorship (`app/sponsorship/index.html`) → orange family (`logo-orange*.svg`).
- Landing page (`index.html`) → blue (it's a single dark page, no theme toggle).

Within a section, swapping between a `-dark`/`-light` contrast variant based on the applied UI theme (dark/amoled vs light) is fine — that's a legibility detail, not a color change. What's not fine is orange appearing on a CoC page or blue appearing on Sponsorship, and it's not fine to reintroduce full theme-based *section* switching.

Logos must render on a fully transparent background — no white box, no colored badge/tile behind them. If a source SVG has a baked-in background shape, strip the path from the SVG markup itself; don't paper over it with CSS.

Don't leave orphaned asset variants behind (an SVG nothing references). Grep for a filename before assuming it's used.

## Shared/duplicated logic

Plan-badge display, plan-name logic, and gating logic are each duplicated across `app/index.html`, `app/courses.html`, `app/admin/index.html`, and `app/sponsorship/index.html` (no shared JS module — plain script tags per page). If you change one, check whether the others need the same change; don't fix a bug in one copy and leave the other three stale.

## Style

Match what's already there: vanilla JS (no TypeScript, no bundler, no new npm dependencies), inline `<style>`/`style.css` (no CSS-in-JS, no Tailwind), plain `fetch`/Supabase JS client calls. Don't introduce a build step.

## The workspace is one level UP from this repo

This file sits inside `ETO_Study_App/`. The project root is its **parent**, and
it holds two things this file never mentioned, so nothing scoped to this repo
ever saw them:

    D:\Notes 1\Original\        <- workspace root
      CLAUDE.md                 <- the fuller brief, worth reading
      claude-cowork\            <- the shared log, NOT in git
      ETO_Study_App\            <- this repo, where you are

`claude-cowork/` is outside version control, so it is never pushed and a pull
will not bring it. Read it from disk at `../claude-cowork/`.

## Append to the shared log every session

`../claude-cowork/LOG.md`. Add a **dated entry at the end**; do not rewrite what
is already there. Keep it skimmable, it is a handover and not a diary. Cover
what you worked on and why, which files you actually changed, anything you
flagged as uncertain rather than guessed, and whether work was left staged
rather than committed (it should be, unless asked otherwise).

**Why this matters, from a real day.** On 18 Aug 2026 nine Entrance Test
modules, three Fundamentals revisions and a one-line change to
`encrypt-content.js` were finished and left uncommitted with nothing in the
log. They were found only because Blesson mentioned them in passing. Had that
`encrypt-content.js` line stayed local, a later whole-group decrypt would have
silently skipped all nine new files. A `.git/index.lock` from a crashed git
process was also left behind, blocking commits.

Record production SQL, edge-function deploys, secrets and hand-edited data in
`../claude-cowork/CHANGE_LEDGER.md`, always with how to undo it.

## Two traps that look like disasters and are not

**`encrypt-content.js --status` fails silently.** It needs `CONTENT_KEY_ORAL` /
`CONTENT_KEY_WRITTEN` / `CONTENT_KEY_SPONSORSHIP` exported in the shell.
Without them it prints `ERROR:` and exits, and piping that to
`grep -c PLAINTEXT` returns 0, which is indistinguishable from a clean result.
That produced a false "encryption clean" before four separate pushes. **Read
the real output. If it starts with `ERROR:`, you have verified nothing.**

Key-free check that works from any shell, since an encrypted file starts
`{"v":1`:

    find data/Orals data/Written data/Sponsorship -name '*.js' -type f \
      | while read f; do head -c 14 "$f" | grep -q '{"v":1' \
      || echo "PLAINTEXT $f"; done

**`data/Orals/Backup/notes/` is 23 topics of plaintext, and that is CORRECT.**
It is a local working copy: 0 files tracked, ignored via `.gitignore:63`
(`data/**/Backup/`), never committed to any branch. Verified 18 Aug 2026. Do
not encrypt it, do not delete it, do not "fix" it. Outside `Backup/`, expect
exactly four plaintext files: the free previews `t01` notes/quiz/videos and
`w01` notes. Anything else is a real problem.

## Stale drafts in claude-cowork/

`../claude-cowork/ET01_notes.js` through `ET09_notes.js` are the plaintext
drafts of the Entrance Test module. **Eight of the nine are out of date:** they
read `Module N of 7` where the shipped, encrypted copies correctly read
`Module N of 9`. The repo is right and the drafts are wrong. Editing from those
drafts would reintroduce the error across eight files.

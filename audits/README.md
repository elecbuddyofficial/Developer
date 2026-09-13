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

**Structure.** Every precached file exists, because `cache.addAll` is atomic
and one bad path breaks offline for everybody. Every script, stylesheet and
content path resolves. No duplicate element ids. The Sponsorship course is
whole and encrypted at rest.

**Production, read-only.** That no table exposes a row to a stranger, that the
setup `.sql` files still describe the live schema, and that every scheduled job
is running and none has suddenly mailed far more people than usual.

## Writing a new one

Three habits, each learned the hard way here:

**Prove it can fail.** Break the rule deliberately, watch the audit go red,
restore the file and verify the restore. An audit nobody has seen fail is an
assumption. `mutate_mirrors.mjs` is the pattern.

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

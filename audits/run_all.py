# -*- coding: utf-8 -*-
"""Run every audit and report each as PASS or FAIL.

This is the sweep CLAUDE.md asks for before shipping anything. It exists
because the expensive failures in this project were never in the code being
edited: a grace backfill plus a mailer change mailed 158 people, and a scope
list written before Sponsorship existed made four money functions grant
nothing. A test of the edit would have reported clean in both cases.

  python audits/run_all.py            everything that needs no credentials
  python audits/run_all.py --all      including the ones that read production
  python audits/run_all.py --browser  including the Playwright ones (slow)

Nothing here writes to the app or the database. The two production audits read
only, and cron_and_mail.py needs a Supabase token in audits/.sb_token, which is
gitignored.
"""
import os, subprocess, sys, time

HERE = os.path.dirname(os.path.abspath(__file__))

# name -> (file, needs_production, is_browser)
AUDITS = [
    # The money path and the rules behind it.
    ('money: nothing trusted from the browser', 'audit_money_trust.mjs', False, False),
    ('money: a purchase grants the right thing', '../supabase/functions/_shared/purchase.e2e.mjs', False, False),
    ('money: one customer, cradle to grave', 'audit_lifecycle.mjs', False, False),
    ('grants stay inside their own course', 'grant_split.e2e.mjs', False, False),
    ('every access write names all three scopes', 'admin_writes.mjs', False, False),
    ('both consoles act only on their own course', 'split_audit.mjs', False, False),
    ('coupons cannot cross courses', 'coupon_course.e2e.mjs', False, False),
    ('neither course can read the other', 'cross_course.mjs', False, False),

    # Client copies of server rules.
    ('client rules match the server', 'audit_mirrors.mjs', False, False),
    ('the admin console matches the server', 'admin_scopes.e2e.mjs', False, False),
    ('the gate matches deriveAccess', 'gate_agree.mjs', False, False),
    ('no hand-written scope list omits Sponsorship', 'audit_scopelists.mjs', False, False),

    # Structure.
    ('every file and handler referenced exists', 'audit_refs.mjs', False, False),
    ('no duplicate or missing element ids', 'audit_dom.mjs', False, False),
    ('the Sponsorship course is whole and encrypted', 'audit_structure.mjs', False, False),
    ('checkout collides with no page global', 'collide.mjs', False, False),

    # Regression guards for incidents that happened.
    ('CoC is untouched by the split', 'coc_regression.mjs', False, False),
    ('the 12 Sep mail could not happen again', 'mail_guard.mjs', False, False),

    # These read production.
    ('setup files match the live schema', 'audit_sql_drift.py', True, False),
    ('no table leaks to a stranger', 'audit_anon.py', True, False),
    ('cron is running and nothing is over-mailing', 'cron_and_mail.py', True, False),

    # Rendered pages. Slow, and need Playwright.
    ('the Users screen reads correctly', 'users_screen.py', False, True),
    ('each course shows its own access', 'users_split.py', False, True),
    ('Grant Access offers the right scopes', 'grant_ui.py', False, True),
    ('the approvals queue says why', 'approvals_why.py', False, True),
    ('the coupon preview shows one course', 'coupon_preview.py', False, True),
    ('an interview coupon prices the interview', 'coupon_interview.py', False, True),
    ('Sponsorship checkout stays in its app', 'spon_checkout.py', False, True),
    ('the Sponsorship profile menu is correct', 'spon_profile.py', False, True),
    ('the CoC checkout is unchanged', 'coc_noop.py', False, True),
    ('the page can be scrolled past a table', 'scroll_chain.py', False, True),
]

want_prod = '--all' in sys.argv
want_browser = '--browser' in sys.argv or '--all' in sys.argv

print('')
passed = failed = skipped = 0
for label, path, needs_prod, is_browser in AUDITS:
    full = os.path.join(HERE, path)
    if not os.path.exists(full):
        print('  skip  %-46s (not found: %s)' % (label, path))
        skipped += 1
        continue
    if needs_prod and not want_prod:
        print('  skip  %-46s (reads production; pass --all)' % label)
        skipped += 1
        continue
    if is_browser and not want_browser:
        print('  skip  %-46s (needs a browser; pass --browser)' % label)
        skipped += 1
        continue

    runner = [sys.executable] if path.endswith('.py') else ['node']
    t0 = time.time()
    try:
        r = subprocess.run(runner + [full], cwd=HERE, capture_output=True, timeout=600)
        ok = r.returncode == 0
        # Exit 2 means "could not check", not "found a problem" - a missing
        # credential or a data snapshot that is deliberately not in the repo.
        # Reported apart from a real failure, because conflating the two is how
        # a suite ends up permanently red and therefore unread.
        unchecked = r.returncode == 2
    except subprocess.TimeoutExpired:
        ok, r, unchecked = False, None, False
    took = time.time() - t0
    if unchecked:
        print('  skip  %-46s %5.1fs  (could not check, see its output)' % (label, took))
        skipped += 1
        for line in r.stdout.decode('utf-8', 'replace').strip().split('\n')[-2:]:
            print('        ' + line[:100])
        continue
    print('  %-5s %-46s %5.1fs' % ('ok' if ok else 'FAIL', label, took))
    if ok:
        passed += 1
    else:
        failed += 1
        tail = (r.stdout.decode('utf-8', 'replace').strip().split('\n')[-6:] if r else ['timed out'])
        for line in tail:
            print('        ' + line[:100])

print('')
print('  %d passed, %d failed, %d skipped' % (passed, failed, skipped))
if not want_prod or not want_browser:
    print('  (run with --all for the full sweep)')
sys.exit(1 if failed else 0)

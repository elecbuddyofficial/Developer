# -*- coding: utf-8 -*-
"""Break a rule on purpose, and check the audit notices.

An audit nobody has seen fail is an assumption. Several in this folder reported
clean over ground they never looked at, and the only thing that found that was
deliberately breaking the code underneath them.

  python audits/mutate.py                  every mutation below
  python audits/mutate.py idempotency      only ones for that audit

Two things this got wrong before, both worth keeping in mind when adding a case:

  WRITE BYTES.  Reading and writing in text mode normalises CRLF to LF on the
  way back in, so every restored file showed as modified in git even though the
  content was identical. A sweep that leaves the tree dirty is worse than none.

  REPLACE EVERY OCCURRENCE.  Changing only the first left a later mention of the
  same name in the file, which the audit still matched, so two genuine
  mutations read as missed and sent me looking for a fault in the audit.
"""
import os, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, os.pardir))

# audit, file, find, replace, what breaking it means
MUTATIONS = [
    ('idempotency', 'supabase/functions/verify-razorpay-payment/index.ts',
     b".neq('status', 'paid')", b".neq('status', 'nothing')",
     'the browser path stops claiming the order before granting'),
    ('idempotency', 'supabase/functions/verify-razorpay-payment/index.ts',
     b"if (!claimed || claimed.length === 0) {", b"if (false) {",
     'the browser path stops testing whether it won the race'),
    ('idempotency', 'supabase/functions/razorpay-webhook/index.ts',
     b"if (!claimed || claimed.length === 0) {", b"if (false) {",
     'the webhook stops testing whether it won the race'),
    ('idempotency', 'supabase/functions/razorpay-webhook/index.ts',
     b"webhook_events", b"webhook_events_x",
     'the webhook stops recording which events it has seen'),
    ('idempotency', 'supabase/functions/refund-payment/index.ts',
     b"recomputeFromPayments", b"recomputeFromNothing",
     'a refund stops recomputing from the payments table'),

    ('audit_mirrors', 'app/checkout.js',
     b"if (scope === 'sponsorship') return ['sponsorship'];",
     b"if (scope === 'sponsorship') return ['written', 'oral'];",
     'the checkout tells a Sponsorship buyer they unlock Written and Oral'),
    ('audit_mirrors', 'app/admin/index.html',
     b"if (scope === 'sponsorship') return ['sponsorship'];",
     b"if (scope === 'sponsorship') return ['written', 'oral'];",
     'the admin grant preview drifts from the server'),

    ('grant_split', 'app/admin/index.html',
     b"var mine = scopesOfCourse(course);",
     b"var mine = ACCESS_SCOPES_ADMIN.slice();",
     'a grant made under one course can write the other again'),

    ('audit_money_trust', 'supabase/functions/razorpay-webhook/index.ts',
     b"if (!safeEqual(expected, signature)) {", b"if (false) {",
     'the webhook stops rejecting a forged signature'),
]

want = sys.argv[1] if len(sys.argv) > 1 else None
cases = [m for m in MUTATIONS if not want or m[0] == want]
if not cases:
    print('  No mutations for %r. Known: %s'
          % (want, ', '.join(sorted({m[0] for m in MUTATIONS}))))
    sys.exit(2)

originals = {}
for _, rel, *_ in cases:
    p = os.path.join(ROOT, rel)
    if rel not in originals:
        originals[rel] = open(p, 'rb').read()

missed = skipped = 0
print('')
try:
    for audit, rel, old, new, what in cases:
        p = os.path.join(ROOT, rel)
        o = originals[rel]
        if old not in o:
            print('  SKIP   %-14s %s' % (audit, what))
            print('         anchor no longer in %s, so nothing was tested' % rel)
            skipped += 1
            continue
        open(p, 'wb').write(o.replace(old, new))
        script = os.path.join(HERE, audit + ('.mjs' if os.path.exists(
            os.path.join(HERE, audit + '.mjs')) else '.e2e.mjs'))
        runner = ['node'] if script.endswith('.mjs') else [sys.executable]
        r = subprocess.run(runner + [script], cwd=HERE, capture_output=True, timeout=300)
        open(p, 'wb').write(o)
        caught = r.returncode != 0
        if not caught:
            missed += 1
        print('  %-6s %-14s %s' % ('caught' if caught else 'MISSED', audit, what))
finally:
    for rel, o in originals.items():
        open(os.path.join(ROOT, rel), 'wb').write(o)
    exact = all(open(os.path.join(ROOT, rel), 'rb').read() == o
                for rel, o in originals.items())
    print('')
    print('  every file restored byte for byte: %s' % exact)
    if not exact:
        print('  *** THE TREE IS DIRTY. Check git status before doing anything else.')

print('  %d of %d caught, %d missed, %d skipped'
      % (len(cases) - missed - skipped, len(cases), missed, skipped))
sys.exit(1 if (missed or skipped) else 0)

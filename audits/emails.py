# -*- coding: utf-8 -*-
"""Render every transactional email and read what the customer would see.

The receipt for a Sponsorship purchase told the buyer on 18 Sep 2026 that they
now had "the full Oral and Written exam prep sections", and showed a row
reading "undefined access". The three lookup tables in payment-email.ts were
written before Sponsorship existed. Every money-path audit passed: the purchase
itself was correct, and nothing had ever rendered the email.

    python audits/emails.py

The work is done by email_render.ts, which imports the real shared modules.
Deno runs it, because these are Deno edge functions. Nothing is sent: the
templates are pure functions returning HTML.
"""
import os, shutil, subprocess, sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

HERE = os.path.dirname(os.path.abspath(__file__))
SCRIPT = os.path.join(HERE, 'email_render.ts')


def deno_cmd():
    """Deno itself, or npx as a fallback. Returns None if neither can run it."""
    exe = shutil.which('deno')
    if exe:
        return [exe]
    npx = shutil.which('npx') or shutil.which('npx.cmd')
    if npx:
        return [npx, '--yes', 'deno']
    return None


cmd = deno_cmd()
if not cmd:
    print('  Deno is not available, so the email templates could not be rendered.')
    print('  Install Deno, or run: npx --yes deno run --allow-read audits/email_render.ts')
    sys.exit(2)

r = subprocess.run(cmd + ['run', '--allow-read', '--quiet', SCRIPT],
                   cwd=HERE, capture_output=True, timeout=300)
out = (r.stdout.decode('utf-8', 'replace') + r.stderr.decode('utf-8', 'replace')).strip()
print(out)
sys.exit(r.returncode)

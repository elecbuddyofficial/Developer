"""
watcher_agent.py — Watches for changes and auto-runs the content pipeline.

Two watchers run in parallel:
  1. data/notes/   -> when Gemini saves tXX_notes.js -> runs:
                       enrich_agent.py <TOPIC>  (quality check + gap fill)
                       quiz_agent.py   <TOPIC>  (generate/refresh quizzes)
                       content_validator.py     (coverage report)
  2. app/          -> when index.html changes -> runs content_validator.py

Usage:
    python watcher_agent.py

Requirements:
    pip install watchdog anthropic python-docx
    set ANTHROPIC_API_KEY=sk-ant-...
"""

import time
import os
import sys
import subprocess
import re
from pathlib import Path

try:
    from watchdog.observers import Observer
    from watchdog.events import FileSystemEventHandler
except ImportError:
    sys.exit("ERROR: Run:  pip install watchdog")

# Load config.env so the API key is available without manual env setup
try:
    from agent_utils import _load_config_env
    _load_config_env()
except ImportError:
    pass

try:
    from win10toast import ToastNotifier
    toaster = ToastNotifier()
except ImportError:
    toaster = None


# --- Helpers -----------------------------------------------------------------

def notify(title, msg, duration=5):
    print(f"[NOTIFY] {title}: {msg}")
    if toaster:
        try:
            toaster.show_toast(title, msg, duration=duration, threaded=True)
        except Exception:
            pass


def run_script(script, *args, label=None):
    """Run a Python script in a subprocess, stream output, return success bool."""
    cmd = [sys.executable, script] + list(args)
    label = label or f"{script} {' '.join(args)}"
    print(f"\n{'-'*60}")
    print(f"[RUN] {label}")
    print(f"{'-'*60}")
    try:
        result = subprocess.run(cmd, capture_output=False, text=True)
        ok = result.returncode == 0
        status = "OK" if ok else f"FAILED (exit {result.returncode})"
        print(f"[{status}] {label}")
        return ok
    except Exception as e:
        print(f"[ERROR] Could not run {label}: {e}")
        return False


# --- Topic ID from notes filename --------------------------------------------

_NOTES_RE = re.compile(r'^t(\d+)_notes\.js$', re.IGNORECASE)

def topic_id_from_notes_path(path):
    """Extract topic ID like 'T03' from a notes JS filename like t03_notes.js."""
    name = Path(path).name
    m = _NOTES_RE.match(name)
    if m:
        return f"T{int(m.group(1)):02d}"
    return None


# --- Handler: data/notes/ tXX_notes.js changes -------------------------------

class NotesHandler(FileSystemEventHandler):
    """
    Triggered when Gemini (or anyone) saves a tXX_notes.js file.
    Runs enrich_agent (quality check + gap fill) then quiz_agent (questions).
    """
    def __init__(self):
        super().__init__()
        self._cooldown = {}   # topic_id -> last_run timestamp

    def on_modified(self, event):
        self._handle(event.src_path)

    def on_created(self, event):
        self._handle(event.src_path)

    def _handle(self, path):
        if not str(path).lower().endswith('.js'):
            return

        topic_id = topic_id_from_notes_path(path)
        if not topic_id:
            return   # not a notes file we care about

        # Cooldown: don't re-run the same topic within 90 seconds
        now = time.time()
        if now - self._cooldown.get(topic_id, 0) < 90:
            return
        self._cooldown[topic_id] = now

        fname = Path(path).name
        print(f"\n{'='*60}")
        print(f"[NOTES SAVED] {fname}  ->  {topic_id}")
        print(f"{'='*60}")

        notify("ETO Watcher", f"{fname} saved — checking quality for {topic_id}")

        if not os.environ.get('ANTHROPIC_API_KEY'):
            print("[ERROR] ANTHROPIC_API_KEY not set — skipping pipeline.")
            notify("ETO Watcher", "ANTHROPIC_API_KEY missing — pipeline skipped.")
            return

        success = True

        # Step 1: Enrich — check quality vs docx, fill gaps, add surveyor Q&A
        ok = run_script('enrich_agent.py', topic_id, label=f"Enrich Agent -- {topic_id}")
        if not ok:
            notify("ETO Watcher", f"[{topic_id}] enrich_agent FAILED — check console.")
            success = False

        # Step 2: Quizzes — generate/refresh questions for this topic
        ok = run_script('quiz_agent.py', topic_id, label=f"Quiz Agent -- {topic_id}")
        if not ok:
            notify("ETO Watcher", f"[{topic_id}] quiz_agent FAILED — check console.")
            success = False

        # Step 3: Coverage report
        run_script('content_validator.py', label="Coverage Check")

        if success:
            notify("ETO Watcher",
                   f"[{topic_id}] Done — gaps filled, quizzes generated.",
                   duration=8)
        else:
            notify("ETO Watcher",
                   f"[{topic_id}] Finished with errors — check console.",
                   duration=8)


# --- Handler: index.html changes (content coverage check) --------------------

class HtmlHandler(FileSystemEventHandler):
    def __init__(self):
        super().__init__()
        self._last_run = 0

    def on_modified(self, event):
        if not event.src_path.endswith('index.html'):
            return
        now = time.time()
        if now - self._last_run < 5:
            return
        self._last_run = now
        print(f"\n[HTML CHANGED] index.html — running coverage validator ...")
        result = subprocess.run(
            [sys.executable, 'content_validator.py'],
            capture_output=True, text=True
        )
        print(result.stdout)
        if '[WARN]' in result.stdout:
            warns = [l for l in result.stdout.splitlines() if '[WARN]' in l]
            notify("Coverage Check", f"{len(warns)} topics with missing content.")
        else:
            notify("Coverage Check", "100% content coverage verified.", duration=3)


# --- Main ---------------------------------------------------------------------

def main():
    print("=" * 60)
    print("  ETO WATCHER AGENT -- STARTED")
    print("=" * 60)
    print("  Watching:")
    print("    * data/notes/  -- tXX_notes.js saved -> quality pipeline")
    print("    * app/         -- index.html changes  -> coverage check")
    print("  Pipeline when notes file saved:")
    print("    1. enrich_agent.py <TOPIC>  (quality check + gap fill)")
    print("    2. quiz_agent.py   <TOPIC>  (generate/refresh quizzes)")
    print("    3. content_validator.py     (coverage report)")
    print("-" * 60)

    if not os.environ.get('ANTHROPIC_API_KEY'):
        print("  WARNING: ANTHROPIC_API_KEY not set")
        print("  Pipeline will be skipped on docx changes.")
        print("  Set it with:  $env:ANTHROPIC_API_KEY='sk-ant-...'")
    else:
        key_preview = os.environ['ANTHROPIC_API_KEY'][:12] + '...'
        print(f"  API key set ({key_preview})")

    print("=" * 60)
    print()
    print("Press Ctrl+C to stop.\n")

    observer = Observer()

    # Watch data/notes/ for tXX_notes.js saves (Gemini output)
    notes_path = Path('data/notes')
    notes_path.mkdir(parents=True, exist_ok=True)
    observer.schedule(NotesHandler(), str(notes_path), recursive=False)
    print(f"[WATCH] {notes_path.resolve()}")

    # Watch app/ for index.html changes
    app_path = Path('app')
    if app_path.exists():
        observer.schedule(HtmlHandler(), str(app_path), recursive=False)
        print(f"[WATCH] {app_path.resolve()}")
    else:
        print(f"[WARN] 'app' folder not found — HTML watcher not started.")

    # Run coverage check once on startup
    print("\n[STARTUP] Running initial coverage check ...")
    subprocess.run([sys.executable, 'content_validator.py'])

    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n[STOP] Watcher stopped by user.")
        observer.stop()
    observer.join()


if __name__ == '__main__':
    main()

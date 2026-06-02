# run_all_agents.ps1
# Double-click this file (or right-click > Run with PowerShell) to run all agents.
# Make sure your API key is saved in config.env first.

Set-Location $PSScriptRoot

Write-Host ""
Write-Host "========================================"
Write-Host "  ETO AGENTS — RUNNING ALL TOPICS"
Write-Host "========================================"
Write-Host ""

# Check config.env exists
if (-not (Test-Path "config.env")) {
    Write-Host "ERROR: config.env not found. Create it with your API key." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

# Check API key is filled in
$configContent = Get-Content "config.env" -Raw
if ($configContent -match "PASTE-YOUR-KEY-HERE") {
    Write-Host "ERROR: You haven't set your API key in config.env yet." -ForegroundColor Red
    Write-Host "Open config.env and replace PASTE-YOUR-KEY-HERE with your real key." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Step 1/3 — Enriching all built topics (quality check + gap fill)..." -ForegroundColor Cyan
python enrich_agent.py all
if ($LASTEXITCODE -ne 0) {
    Write-Host "enrich_agent finished with warnings — check output above." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Step 2/3 — Refreshing quizzes for T02 (low question count)..." -ForegroundColor Cyan
python quiz_agent.py T02
if ($LASTEXITCODE -ne 0) {
    Write-Host "quiz_agent T02 finished with warnings." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Step 3/3 — Running coverage check..." -ForegroundColor Cyan
python content_validator.py

Write-Host ""
Write-Host "========================================"
Write-Host "  ALL DONE"
Write-Host "========================================"
Write-Host ""
Read-Host "Press Enter to close"

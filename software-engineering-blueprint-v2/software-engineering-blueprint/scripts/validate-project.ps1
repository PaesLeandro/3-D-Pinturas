$ErrorActionPreference = "Stop"
$Base = Split-Path -Parent $PSScriptRoot

$Required = @(
  "AGENTS.md",
  "context/PROJECT_CONTEXT.md",
  "architecture/ARCHITECTURE.md",
  "security/SECURITY.md",
  "quality/QUALITY_GATES.md"
)

$Failed = $false

foreach ($File in $Required) {
  $Path = Join-Path $Base $File
  if (Test-Path $Path) {
    Write-Host "OK: $File"
  } else {
    Write-Host "MISSING: $File"
    $Failed = $true
  }
}

$Patterns = @(
  'BEGIN (RSA|OPENSSH|EC|DSA) PRIVATE KEY',
  'AKIA[0-9A-Z]{16}'
)

$Files = Get-ChildItem -Path $Base -Recurse -File |
  Where-Object { $_.FullName -notmatch '\\.git\\' -and $_.Name -ne 'validate-project.ps1' }

foreach ($Pattern in $Patterns) {
  $Match = $Files | Select-String -Pattern $Pattern -ErrorAction SilentlyContinue | Select-Object -First 1
  if ($Match) {
    Write-Host "ERROR: possible credential/private key pattern found."
    $Failed = $true
  }
}

if ($Failed) { exit 1 }
Write-Host "Blueprint baseline validation passed."

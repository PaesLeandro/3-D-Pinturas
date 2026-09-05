param(
  [Parameter(Mandatory=$true)][string]$Id,
  [Parameter(Mandatory=$true)][string]$Name
)

$Root = Split-Path -Parent $PSScriptRoot
$Slug = ($Name.ToLower() -replace '[^a-z0-9]+','-').Trim('-')
$Active = Join-Path $Root "specs/active"

$Map = @{
  "SPEC_TEMPLATE.md"  = "SPEC-$Id-$Slug.md"
  "PLAN_TEMPLATE.md"  = "PLAN-$Id-$Slug.md"
  "TASKS_TEMPLATE.md" = "TASKS-$Id-$Slug.md"
}

foreach ($Source in $Map.Keys) {
  $src = Join-Path $Root "specs/$Source"
  $dst = Join-Path $Active $Map[$Source]
  if (Test-Path $dst) { throw "File already exists: $dst" }
  (Get-Content $src -Raw).Replace("XXXX", $Id).Replace("Feature", $Name) | Set-Content $dst
  Write-Host "Created: $dst"
}

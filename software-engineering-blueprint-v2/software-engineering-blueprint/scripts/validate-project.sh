#!/usr/bin/env bash
set -euo pipefail

BASE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
required=(
  "AGENTS.md"
  "context/PROJECT_CONTEXT.md"
  "architecture/ARCHITECTURE.md"
  "security/SECURITY.md"
  "quality/QUALITY_GATES.md"
)

failed=0
for file in "${required[@]}"; do
  if [[ ! -f "$BASE/$file" ]]; then
    echo "MISSING: $file"
    failed=1
  else
    echo "OK: $file"
  fi
done

if grep -RInE '(BEGIN (RSA|OPENSSH|EC|DSA) PRIVATE KEY|AKIA[0-9A-Z]{16})' "$BASE" \
  --exclude-dir=.git --exclude='validate-project.sh' >/dev/null 2>&1; then
  echo "ERROR: possible credential/private key pattern found."
  failed=1
fi

if [[ "$failed" -ne 0 ]]; then
  exit 1
fi

echo "Blueprint baseline validation passed."

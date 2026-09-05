#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 2 ]]; then
  echo "Usage: $0 <ID> <name>"
  exit 1
fi

ID="$1"
shift
NAME="$*"
SLUG="$(printf '%s' "$NAME" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g;s/^-//;s/-$//')"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ACTIVE="$ROOT/specs/active"

for TYPE in SPEC PLAN TASKS; do
  SRC="$ROOT/specs/${TYPE}_TEMPLATE.md"
  DST="$ACTIVE/${TYPE}-${ID}-${SLUG}.md"
  [[ ! -e "$DST" ]] || { echo "Exists: $DST"; exit 1; }
  sed -e "s/XXXX/$ID/g" -e "s/Feature/$NAME/g" "$SRC" > "$DST"
  echo "Created: $DST"
done

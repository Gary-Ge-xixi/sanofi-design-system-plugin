#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
INSTALLER="$ROOT_DIR/design-system-plugin/scripts/install-cursor"

if ! command -v node >/dev/null 2>&1; then
  cat >&2 <<'EOF'
Node.js 18+ is required before running this installer.
Install Node.js, then run ./install.sh again from the repository root.
EOF
  exit 1
fi

exec node "$INSTALLER" "$@"

#!/usr/bin/env bash
# Install the matviz-render Claude skill into ~/.claude/skills/.
# Substitutes {{MATVIZ_DIR}} with the absolute path of this repository so the
# skill's CLI commands resolve correctly no matter where matviz is cloned.
#
# Usage:
#   bash scripts/install-skill.sh          # install to ~/.claude/skills/matviz-render
#   SKILLS_DIR=/custom/path bash scripts/install-skill.sh

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SKILL_SRC="$REPO_DIR/skills/matviz-render/SKILL.md"
SKILLS_DIR="${SKILLS_DIR:-$HOME/.claude/skills}"
SKILL_DST="$SKILLS_DIR/matviz-render/SKILL.md"

if [[ ! -f "$SKILL_SRC" ]]; then
  echo "error: skill source not found at $SKILL_SRC" >&2
  exit 1
fi

if [[ ! -f "$REPO_DIR/dist/render.js" ]]; then
  echo "warning: dist/render.js is missing — run 'npm run build' first so the skill's commands work." >&2
fi

mkdir -p "$(dirname "$SKILL_DST")"

# Substitute {{MATVIZ_DIR}} with the absolute repo path.
# Use | as sed delimiter to avoid escaping slashes.
sed "s|{{MATVIZ_DIR}}|$REPO_DIR|g" "$SKILL_SRC" > "$SKILL_DST"

echo "Installed matviz-render skill:"
echo "  source: $SKILL_SRC"
echo "  target: $SKILL_DST"
echo "  matviz dir: $REPO_DIR"
echo ""
echo "Claude should pick up the skill in its next session. Try asking:"
echo "  \"이 POSCAR 시각화해줘\" or \"render this CIF\""

#!/usr/bin/env bash
# fix-git-index.sh — Detect and auto-recover a corrupted .git/index file.
#
# Root cause: when git add/analyze runs inside a sandboxed environment that cannot
# write to .git/, it silently creates a 0-byte index file. Every subsequent
# git command then fails with:
#   fatal: .git/index: index file smaller than expected
#
# Usage:
#   bash scripts/fix-git-index.sh           # auto-detect and fix if needed
#   bash scripts/fix-git-index.sh --force   # always rebuild the index
#   npm run git:fix                         # alias

set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || echo ".")"
INDEX_FILE="$REPO_ROOT/.git/index"
FORCE="${1:-}"

check_index() {
  if [ ! -f "$INDEX_FILE" ]; then
    echo "WARNING: .git/index not found - will rebuild."
    return 1
  fi
  local size
  size=$(wc -c < "$INDEX_FILE" | tr -d ' ')
  if [ "$size" -lt 12 ]; then
    echo "WARNING: .git/index is corrupted (${size} bytes, minimum is 12)."
    return 1
  fi
  return 0
}

fix_index() {
  echo "Removing corrupted .git/index..."
  rm -f "$INDEX_FILE"
  echo "Rebuilding index from HEAD..."
  git -C "$REPO_ROOT" reset HEAD 2>&1
  local new_size
  new_size=$(wc -c < "$INDEX_FILE" | tr -d ' ')
  echo "OK: .git/index rebuilt successfully (${new_size} bytes)."
}

if [ "$FORCE" = "--force" ]; then
  echo "Forced rebuild of .git/index..."
  fix_index
elif ! check_index; then
  fix_index
else
  local_size=$(wc -c < "$INDEX_FILE" | tr -d ' ')
  echo "OK: .git/index is healthy (${local_size} bytes). No action needed."
fi

#!/bin/bash
# Generate pronunciation clips for every vocabulary word using the macOS
# "Samantha" voice, as M4A (AAC) files. Idempotent: skips words already done.
#
# Usage:   bash scripts/generate-audio.sh
# Output:  /tmp/gre-audio/out/<word>.m4a
#
# Requires macOS (`say` + `afconvert`, both built in). After generating, upload
# with scripts/upload-audio.mjs (see docs/MAINTENANCE.md).

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUTDIR="/tmp/gre-audio/out"
mkdir -p "$OUTDIR"

# Extract the unique word list from data/vocab.ts
WORDS=$(grep -oE 'word: "[a-z]+"' "$ROOT/data/vocab.ts" | sed 's/word: //;s/"//g' | sort -u)
total=$(echo "$WORDS" | wc -l | tr -d ' ')
echo "generating audio for $total words into $OUTDIR"

n=0
while IFS= read -r w; do
  [ -z "$w" ] && continue
  n=$((n + 1))
  [ -f "$OUTDIR/$w.m4a" ] && continue
  say -v Samantha -o "/tmp/gre-audio/tmp.aiff" "$w" 2>/dev/null
  afconvert -f m4af -d aac -b 48000 "/tmp/gre-audio/tmp.aiff" "$OUTDIR/$w.m4a" 2>/dev/null
  if [ $((n % 100)) -eq 0 ]; then echo "  progress: $n/$total"; fi
done <<< "$WORDS"

rm -f /tmp/gre-audio/tmp.aiff
echo "done: $(ls "$OUTDIR" | wc -l | tr -d ' ') clips in $OUTDIR"

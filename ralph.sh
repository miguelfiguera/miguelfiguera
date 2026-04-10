#!/usr/bin/env bash
# Ralph Runner — headless with MCP, 15-min timeout per agent
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
STATUS_FILE="$ROOT/.ralph/status.json"
PRD_FILE="$ROOT/PRD-ralph-pipeline.md"
MCP_CONFIG="$ROOT/.ralph/mcp.json"
AGENT_TIMEOUT=900  # 15 minutes per agent

if ! command -v claude &> /dev/null; then
  echo "Error: claude CLI not found."
  exit 1
fi

if [ ! -f "$MCP_CONFIG" ]; then
  mkdir -p "$ROOT/.ralph"
  cat > "$MCP_CONFIG" <<'MCPEOF'
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
MCPEOF
fi

get_next_task() {
  python3 -c "
import json
with open('$STATUS_FILE') as f:
    data = json.load(f)
keys = sorted(data['tasks'].keys(), key=lambda k: ([int(x) if x.isdigit() else x for x in __import__('re').split(r'(\d+)', k)]))
for tid in keys:
    if data['tasks'][tid]['status'] in ('pending', 'in_progress'):
        print(tid)
        break
"
}

get_task_name() {
  local tid="$1"
  python3 -c "
import json
with open('$STATUS_FILE') as f:
    data = json.load(f)
print(data['tasks']['$tid']['name'])
"
}

get_task_status() {
  local tid="$1"
  python3 -c "
import json
with open('$STATUS_FILE') as f:
    data = json.load(f)
print(data['tasks']['$tid']['status'])
"
}

all_done() {
  python3 -c "
import json, sys
with open('$STATUS_FILE') as f:
    data = json.load(f)
pending = [t for t in data['tasks'].values() if t['status'] in ('pending', 'in_progress')]
sys.exit(0 if len(pending) == 0 else 1)
"
}

get_task_section() {
  local tid="$1"
  python3 -c "
import re
with open('$PRD_FILE') as f:
    content = f.read()
pattern = r'## Tarea ${tid}:.*?(?=\n## Tarea |\n---|\Z)'
match = re.search(pattern, content, re.DOTALL)
if match:
    print(match.group(0).strip())
else:
    print('Task ${tid} not found in PRD')
"
}

mark_blocked() {
  local tid="$1"
  local reason="$2"
  python3 -c "
import json
with open('$STATUS_FILE','r') as f: data=json.load(f)
data['tasks']['$tid']['status']='blocked'
with open('$STATUS_FILE','w') as f: json.dump(data,f,indent=2)
"
  # Append to learnings
  echo "" >> "$ROOT/.ralph/learnings.md"
  echo "### Task $tid — BLOCKED (timeout/failure)" >> "$ROOT/.ralph/learnings.md"
  echo "$reason" >> "$ROOT/.ralph/learnings.md"
  echo "---" >> "$ROOT/.ralph/learnings.md"
}

format_stream() {
  python3 -c "
import sys, json
for line in sys.stdin:
    line = line.strip()
    if not line: continue
    try:
        event = json.loads(line)
        t = event.get('type', '')
        if t == 'assistant':
            for block in event.get('message', {}).get('content', []):
                if block.get('type') == 'text':
                    print(f\"  {block['text']}\")
                elif block.get('type') == 'tool_use':
                    name = block.get('name', '?')
                    inp = json.dumps(block.get('input', {}), ensure_ascii=False)
                    if len(inp) > 200: inp = inp[:200] + '...'
                    print(f\"  [{name}] {inp}\")
        elif t == 'result':
            msg = event.get('result', '')
            if msg: print(f\"  >> {str(msg)[:300]}\")
    except json.JSONDecodeError: pass
" 2>/dev/null
}

MODE="all"
case "${1:-}" in
  --dry)  "$ROOT/init.sh"; exit 0 ;;
  --one)  MODE="one" ;;
esac

echo "=========================================="
echo " RALPH PIPELINE — STARTING"
echo " Agent timeout: ${AGENT_TIMEOUT}s (15 min)"
echo "=========================================="

TASK_COUNT=0
while true; do
  if all_done; then
    echo ""
    echo "Pipeline complete. $TASK_COUNT tasks executed."
    "$ROOT/init.sh"
    exit 0
  fi

  NEXT=$(get_next_task)
  if [ -z "$NEXT" ]; then
    echo "No more pending tasks. $TASK_COUNT tasks executed."
    "$ROOT/init.sh"
    exit 0
  fi

  TASK_NAME=$(get_task_name "$NEXT")
  TASK_SECTION=$(get_task_section "$NEXT")
  CURRENT_STATUS=$(get_task_status "$NEXT")

  # Build the protocol prefix that EVERY agent gets — this is critical because
  # agents in headless mode (-p) do NOT auto-read AGENTS.md
  PROTOCOL="You are executing task ${NEXT} in the Ralph pipeline. Your task ID is: ${NEXT}

MANDATORY STEPS — do ALL of these or the pipeline breaks:

STEP 1 (BEFORE work): Mark your task in_progress:
python3 -c \"import json; f=open('.ralph/status.json','r'); data=json.load(f); f.close(); data['tasks']['${NEXT}']['status']='in_progress'; f=open('.ralph/status.json','w'); json.dump(data,f,indent=2); f.close(); print('${NEXT} marked in_progress')\"

STEP 2: Read .ralph/learnings.md for prior agent learnings. Don't repeat mistakes.

STEP 3: Do the work described below.

STEP 4 (AFTER work): Append what you learned to .ralph/learnings.md

STEP 5 (CRITICAL — if you skip this the pipeline considers your work FAILED):
python3 -c \"import json; f=open('.ralph/status.json','r'); data=json.load(f); f.close(); data['tasks']['${NEXT}']['status']='completed'; f=open('.ralph/status.json','w'); json.dump(data,f,indent=2); f.close(); print('${NEXT} marked completed')\"

STEP 6: Git commit with conventional commits. Never mention AI/Claude/Anthropic.

STEP 7: STOP. Do not continue to the next task.

If blocked, mark status as 'blocked' instead of 'completed' and document why in learnings.md.

--- TASK INSTRUCTIONS ---
"

  if [ "$CURRENT_STATUS" = "in_progress" ]; then
    RESUME_PREFIX="RESUMING: A previous agent started this task but didn't finish. Check existing work first (git log, ls). If work is already done, just write learnings, mark completed, commit. Don't redo.

"
  else
    RESUME_PREFIX=""
  fi

  mkdir -p "$ROOT/.ralph/logs"

  echo ""
  echo "------------------------------------------"
  echo " Task $NEXT: $TASK_NAME"
  if [ "$CURRENT_STATUS" = "in_progress" ]; then
    echo " (RESUMING — previous agent didn't finish)"
  fi
  echo " Timeout: ${AGENT_TIMEOUT}s | Log: .ralph/logs/task-${NEXT}.log"
  echo "------------------------------------------"

  MAX_RETRIES=3
  ATTEMPT=0
  while true; do
    ATTEMPT=$((ATTEMPT + 1))
    LOG="$ROOT/.ralph/logs/task-${NEXT}-attempt${ATTEMPT}"

    set +o pipefail
    # 15-minute timeout wrapping the entire agent invocation
    timeout "$AGENT_TIMEOUT" claude -p \
      --permission-mode dontAsk \
      --max-turns 50 \
      --no-session-persistence \
      --mcp-config "$MCP_CONFIG" \
      --output-format stream-json \
      --verbose \
      "${PROTOCOL}${RESUME_PREFIX}${TASK_SECTION}" 2>&1 | tee "${LOG}.json" | format_stream || true

    EXIT_CODE=${PIPESTATUS[0]}
    set -o pipefail

    # Check if timeout killed it (exit code 124)
    if [ "$EXIT_CODE" -eq 124 ]; then
      echo ""
      echo "  *** TIMEOUT: Agent exceeded ${AGENT_TIMEOUT}s for task $NEXT ***"
      echo "  Killing orphan processes..."
      pkill -f "astro" 2>/dev/null || true
      pkill -f "vitest" 2>/dev/null || true
      pkill -f "tsc" 2>/dev/null || true
    fi

    TASK_STATUS=$(get_task_status "$NEXT")
    [ "$TASK_STATUS" = "completed" ] && break
    [ "$TASK_STATUS" = "blocked" ] && { echo "  Task $NEXT blocked. Moving on."; break; }

    if [ $ATTEMPT -ge $MAX_RETRIES ]; then
      echo "  Task $NEXT failed $MAX_RETRIES attempts. Marking blocked."
      mark_blocked "$NEXT" "Failed after $MAX_RETRIES attempts (last exit code: $EXIT_CODE). Check logs at .ralph/logs/task-${NEXT}-attempt*.json"
      break
    fi

    echo "  Attempt $ATTEMPT failed (exit=$EXIT_CODE). Retrying in 5s..."
    sleep 5
  done

  TASK_COUNT=$((TASK_COUNT + 1))
  [ "$MODE" = "one" ] && { "$ROOT/init.sh"; exit 0; }
  sleep 3
done

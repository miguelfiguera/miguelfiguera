#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
STATUS_FILE="$ROOT/.ralph/status.json"
mkdir -p "$ROOT/.ralph"
echo "=========================================="
echo " RALPH PIPELINE — STATUS"
echo "=========================================="
echo ""
python3 -c "
import json
with open('$STATUS_FILE') as f:
    data = json.load(f)
keys = sorted(data['tasks'].keys(), key=lambda k: ([int(x) if x.isdigit() else x for x in __import__('re').split(r'(\d+)', k)]))
done = 0
blocked = 0
in_progress = 0
for tid in keys:
    task = data['tasks'][tid]
    s = task['status']
    icon = 'OK' if s == 'completed' else '>>' if s == 'in_progress' else '--' if s == 'blocked' else '  '
    print(f'  [{icon}] {tid}: {task[\"name\"]} ({s})')
    if s == 'completed': done += 1
    if s == 'blocked': blocked += 1
    if s == 'in_progress': in_progress += 1
total = len(keys)
print(f'')
print(f'  Completed: {done}/{total} | Blocked: {blocked} | In Progress: {in_progress}')
for tid in keys:
    if data['tasks'][tid]['status'] in ('pending', 'in_progress'):
        print(f'  Next: {tid}')
        break
else:
    print('  All completed!')
"
echo ""

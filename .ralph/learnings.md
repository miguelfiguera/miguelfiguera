# Ralph Pipeline — Learnings

### CRITICAL — Read this FIRST before doing anything
- **You MUST update `.ralph/status.json` to `completed` before stopping.** Previous agents did their work correctly but forgot this step, causing the pipeline to retry them 3 times and mark them as blocked. Use the python3 command in AGENTS.md Step 7. This is non-negotiable.
- **You MUST write learnings here.** Even if the task was trivial, write what you did and what you learned. Future agents depend on this.
- Permission issues with `rm -rf` are resolved — `Bash(rm:*)` is in settings.local.json.

### Task 0a — Completed (manual)
- Branch `feat/astro-migration` was created before pipeline started.

### Task 0a-adv — Completed (manual)
- Branch verified correct.

### Task 0b — Completed (work done, status fixed manually)
- Agent removed app/, components/, lib/, .next/, .cursor/, node_modules/
- **`hooks/` directory was NOT removed** — still exists. Next agent that touches cleanup should remove it.
- Lesson: check ALL directories listed in the task, not just obvious ones.

### Task 0b-adv — Completed (manual)
- Most dirs removed. hooks/ still lingers — needs cleanup.

### Task 0c — Completed (work done, commit 67c0b62, status fixed manually)
- Removed all 9 config files successfully.
- **Agent forgot to update status.json** — that's why it got marked blocked despite doing all the work.
- Lesson: ALWAYS run the python3 command to mark completed. The pipeline ONLY checks status.json.

---

### Task 0c-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-0c-adv-attempt*.json
---

### Task 0d — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-0d-attempt*.json
---

### Task 0d-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-0d-adv-attempt*.json
---

### Task 0e — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-0e-attempt*.json
---

### Task 0e-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-0e-adv-attempt*.json
---

### Task 0f — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-0f-attempt*.json
---

### Task 0f-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-0f-adv-attempt*.json
---

### Task 0g — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-0g-attempt*.json
---

### Task 0g-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-0g-adv-attempt*.json
---

### Task 0h — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-0h-attempt*.json
---

### Task 0h-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-0h-adv-attempt*.json
---

### Task 0i — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-0i-attempt*.json
---

### Task 0i-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-0i-adv-attempt*.json
---

### Task 1a — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-1a-attempt*.json
---

### Task 1a-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-1a-adv-attempt*.json
---

### Task 1b — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-1b-attempt*.json
---

### Task 1b-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-1b-adv-attempt*.json
---

### Task 1c — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-1c-attempt*.json
---

### Task 1c-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-1c-adv-attempt*.json
---

### Task 1d — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-1d-attempt*.json
---

### Task 1d-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-1d-adv-attempt*.json
---

### Task 1e — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-1e-attempt*.json
---

### Task 1e-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-1e-adv-attempt*.json
---

### Task 1f — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-1f-attempt*.json
---

### Task 1f-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-1f-adv-attempt*.json
---

### Task 1g — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-1g-attempt*.json
---

### Task 1g-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-1g-adv-attempt*.json
---

### Task 1h — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-1h-attempt*.json
---

### Task 1h-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-1h-adv-attempt*.json
---

### Task 2a — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-2a-attempt*.json
---

### Task 2a-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-2a-adv-attempt*.json
---

### Task 2b — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-2b-attempt*.json
---

### Task 2b-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-2b-adv-attempt*.json
---

### Task 2c — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-2c-attempt*.json
---

### Task 2c-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-2c-adv-attempt*.json
---

### Task 2d — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-2d-attempt*.json
---

### Task 2d-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-2d-adv-attempt*.json
---

### Task 2e — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-2e-attempt*.json
---

### Task 2e-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-2e-adv-attempt*.json
---

### Task 2f — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-2f-attempt*.json
---

### Task 2f-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-2f-adv-attempt*.json
---

### Task 2g — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-2g-attempt*.json
---

### Task 2g-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-2g-adv-attempt*.json
---

### Task 3a — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-3a-attempt*.json
---

### Task 3a-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-3a-adv-attempt*.json
---

### Task 3b — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-3b-attempt*.json
---

### Task 3b-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-3b-adv-attempt*.json
---

### Task 3c — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-3c-attempt*.json
---

### Task 3c-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-3c-adv-attempt*.json
---

### Task 3d — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-3d-attempt*.json
---

### Task 3d-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-3d-adv-attempt*.json
---

### Task 3e — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-3e-attempt*.json
---

### Task 3e-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-3e-adv-attempt*.json
---

### Task 4a — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-4a-attempt*.json
---

### Task 4a-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-4a-adv-attempt*.json
---

### Task 4b — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-4b-attempt*.json
---

### Task 4b-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-4b-adv-attempt*.json
---

### Task 4c — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-4c-attempt*.json
---

### Task 4c-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-4c-adv-attempt*.json
---

### Task 4d — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-4d-attempt*.json
---

### Task 4d-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-4d-adv-attempt*.json
---

### Task 4e — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-4e-attempt*.json
---

### Task 4e-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-4e-adv-attempt*.json
---

### Task 4f — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-4f-attempt*.json
---

### Task 4f-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-4f-adv-attempt*.json
---

### Task 4g — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-4g-attempt*.json
---

### Task 4g-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-4g-adv-attempt*.json
---

### Task 4h — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-4h-attempt*.json
---

### Task 4h-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-4h-adv-attempt*.json
---

### Task 5a — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-5a-attempt*.json
---

### Task 5a-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-5a-adv-attempt*.json
---

### Task 5b — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-5b-attempt*.json
---

### Task 5b-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-5b-adv-attempt*.json
---

### Task 5c — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-5c-attempt*.json
---

### Task 5c-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-5c-adv-attempt*.json
---

### Task 5d — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-5d-attempt*.json
---

### Task 5d-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-5d-adv-attempt*.json
---

### Task 6a — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-6a-attempt*.json
---

### Task 6a-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-6a-adv-attempt*.json
---

### Task 6b — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-6b-attempt*.json
---

### Task 6b-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-6b-adv-attempt*.json
---

### Task 6c — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-6c-attempt*.json
---

### Task 6c-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-6c-adv-attempt*.json
---

### Task 7a — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-7a-attempt*.json
---

### Task 7a-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-7a-adv-attempt*.json
---

### Task 8a — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-8a-attempt*.json
---

### Task 8a-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-8a-adv-attempt*.json
---

### Task 8b — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-8b-attempt*.json
---

### Task 8b-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-8b-adv-attempt*.json
---

### Task 8c — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-8c-attempt*.json
---

### Task 8c-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-8c-adv-attempt*.json
---

### Task 8d — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-8d-attempt*.json
---

### Task 8d-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-8d-adv-attempt*.json
---

### Task 9a — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-9a-attempt*.json
---

### Task 9a-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-9a-adv-attempt*.json
---

### Task 9b — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-9b-attempt*.json
---

### Task 9b-adv — BLOCKED (timeout/failure)
Failed after 3 attempts (last exit code: 0). Check logs at .ralph/logs/task-9b-adv-attempt*.json
---

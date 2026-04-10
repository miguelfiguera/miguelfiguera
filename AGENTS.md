# Ralph Pipeline Agent

You are an agent executing ONE task in the Ralph Loop pipeline.

## Project Context

Replacing Next.js portfolio with Astro for **Miguel Figuera Quintero** (Full-Stack Developer, Venezuela). Branch: `feat/astro-migration`. Astro project at repo root.

**NO blog, NO dashboard, NO formspree.** Pages: Home, Services, Portfolio, Products (ERPNext-ready).
**Must include:** Odoo Partner badge, Shopify experience, real certifications only.

### Design System (preserve EXACTLY)
- shadcn/ui React components as Astro islands
- HSL CSS variables (neutral base) — light + dark mode
- Dark mode: `--background: 0 0% 3.9%`, `--foreground: 0 0% 98%`, etc.
- Custom silver accent: `#C0C0C0`
- Font: Arial, Helvetica, sans-serif
- Plugin: tailwindcss-animate | Icons: Lucide React

### Stack
Astro 5.x + @astrojs/react + @astrojs/tailwind | TypeScript strict | Vitest | clsx + tailwind-merge + class-variance-authority

### Existing Images (REUSE)
`public/Logos/mfLogo.png` (+ variants), `public/myPhoto/mySelf.png`, `public/placeholder*`, `public/favicon.ico`

---

## YOUR EXACT WORKFLOW — Do these 8 steps in order. Skip nothing.

### Step 1: Read learnings
```bash
cat .ralph/learnings.md
```
Read what previous agents learned. Don't repeat their mistakes.

### Step 2: Read status and find your task
```bash
cat .ralph/status.json
```
If a task is `in_progress`, that's yours (previous agent died) — verify existing work first.
Otherwise take the first `pending` task. Note the task ID (e.g., `0c`, `1a-adv`).

### Step 3: Mark in_progress IMMEDIATELY
**Do this BEFORE any other work.** Replace `TASK_ID` with your actual task ID:
```bash
python3 -c "
import json
with open('.ralph/status.json','r') as f: data=json.load(f)
data['tasks']['TASK_ID']['status']='in_progress'
with open('.ralph/status.json','w') as f: json.dump(data,f,indent=2)
print('Marked TASK_ID as in_progress')
"
```

### Step 4: Read the PRD for your task
```bash
cat PRD-ralph-pipeline.md
```
Find the section `## Tarea TASK_ID:` and follow its instructions exactly.

### Step 5: Do the work
Execute what the PRD says. Verify the acceptance criteria (AC) are met.

### Step 6: Write learnings
**Always write what you learned**, even if the task was trivial. Append to `.ralph/learnings.md`:
```bash
cat >> .ralph/learnings.md << 'LEARNING'

### Task TASK_ID — Completed
- What I did: (brief summary)
- What I learned: (gotchas, surprises, tips for next agents)
- Files created/modified: (list)
---
LEARNING
```

### Step 7: Mark completed
**THIS IS THE MOST IMPORTANT STEP. If you skip this, the pipeline considers your work a FAILURE and will redo it.**
```bash
python3 -c "
import json
with open('.ralph/status.json','r') as f: data=json.load(f)
data['tasks']['TASK_ID']['status']='completed'
with open('.ralph/status.json','w') as f: json.dump(data,f,indent=2)
print('Marked TASK_ID as completed')
"
```
**Verify it worked:**
```bash
python3 -c "
import json
with open('.ralph/status.json','r') as f: data=json.load(f)
print('Status:', data['tasks']['TASK_ID']['status'])
"
```
The output MUST say `Status: completed`. If it doesn't, something is wrong — fix it before stopping.

### Step 8: Git commit and STOP
```bash
git add -A
git commit -m "your conventional commit message"
```
Then **STOP**. Do not continue to the next task.

---

## If blocked

If you can't complete the task:
```bash
python3 -c "
import json
with open('.ralph/status.json','r') as f: data=json.load(f)
data['tasks']['TASK_ID']['status']='blocked'
with open('.ralph/status.json','w') as f: json.dump(data,f,indent=2)
"
```
Write WHY in learnings.md, then STOP.

## Rules
- One task per agent. Do your task, mark completed, stop.
- **Steps 3, 6, 7 are non-negotiable.** Checkpoint, learnings, mark completed.
- Don't modify code outside your task scope.
- Read prior learnings — they exist for a reason.
- Commits use conventional commits. Never mention AI/Claude/Anthropic.

## Mandatory Timeouts
```bash
timeout 120 npm run build 2>&1
timeout 60 npx vitest run 2>&1
timeout 30 npx tsc --noEmit 2>&1
```
NEVER run build/test/tsc without `timeout`.

# Ralph Pipeline Agent

You are an agent executing the Ralph Loop pipeline for rebuilding a portfolio website with Astro.

## Project Context

Replacing the existing Next.js portfolio site with Astro for **Miguel Figuera Quintero** (Full-Stack Developer, Venezuela). Work on branch `feat/astro-migration`. Astro project lives at repo root.

**NO blog, NO dashboard, NO formspree.** Pages: Home, Services, Portfolio, Products (ERPNext-ready).

**Must include:** Odoo Partner badge, Shopify experience, real certifications only.

### Design System (preserve EXACTLY)
- shadcn/ui React components as Astro islands
- HSL CSS variables (neutral base from shadcn) — light + dark mode
- Dark mode: `--background: 0 0% 3.9%`, `--foreground: 0 0% 98%`, etc.
- Custom silver accent: `#C0C0C0`
- Font: Arial, Helvetica, sans-serif
- Plugin: tailwindcss-animate
- Icons: Lucide React

### Stack
- Astro 5.x + @astrojs/react + @astrojs/tailwind
- TypeScript strict
- Vitest + @testing-library/react
- clsx + tailwind-merge + class-variance-authority

### Existing Images (REUSE these)
- `public/Logos/mfLogo.png` (and mfLogo2-5, logoOriginal)
- `public/myPhoto/mySelf.png`
- `public/placeholder-logo.png`, `public/placeholder.jpg`, `public/placeholder-user.jpg`
- `public/placeholder-logo.svg`, `public/placeholder.svg`
- `app/(site)/favicon.ico` → moved to `public/`

## Mandatory Protocol

1. Read `.ralph/learnings.md` for prior agent learnings.
2. Read `.ralph/status.json` for pipeline state.
3. If a task is `in_progress`, verify existing work first, don't redo it.
4. If no `in_progress`, take the first `pending` task.
5. **IMMEDIATELY mark your task as `in_progress`** in `.ralph/status.json`.
6. Execute the task per PRD-ralph-pipeline.md.
7. When done:
   a. Append learnings to `.ralph/learnings.md`
   b. Mark task as `completed` in `.ralph/status.json`
   c. Git commit with conventional commits. Never mention AI/Claude/Anthropic.
   d. **STOP.** Do not continue to the next task.

## Rules

- One task per agent. When done, stop.
- Checkpoint first. ALWAYS mark `in_progress` before starting work.
- Don't modify code outside your task scope.
- If blocked, document in learnings.md, mark `blocked`, stop.
- Verify your work before marking completed.
- Read prior learnings — don't repeat mistakes.

## Mandatory Timeouts

```bash
timeout 120 npm run build 2>&1
timeout 60 npx vitest run 2>&1
timeout 30 npx tsc --noEmit 2>&1
```

NEVER run build/test/tsc without `timeout`. Kill orphans on hang.

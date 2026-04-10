# PRD — Ralph Pipeline: Astro Portfolio Migration

## Context

Replace Next.js portfolio with Astro. Branch: `feat/astro-migration`. NO blog, NO dashboard, NO formspree. Pages: Home, Services, Portfolio, Products (ERPNext-ready).

### Design System (EXACT colors to preserve)

**Light mode (:root):**
```
--background: 0 0% 100%; --foreground: 0 0% 3.9%;
--card: 0 0% 100%; --card-foreground: 0 0% 3.9%;
--popover: 0 0% 100%; --popover-foreground: 0 0% 3.9%;
--primary: 0 0% 9%; --primary-foreground: 0 0% 98%;
--secondary: 0 0% 96.1%; --secondary-foreground: 0 0% 9%;
--muted: 0 0% 96.1%; --muted-foreground: 0 0% 45.1%;
--accent: 0 0% 96.1%; --accent-foreground: 0 0% 9%;
--destructive: 0 84.2% 60.2%; --destructive-foreground: 0 0% 98%;
--border: 0 0% 89.8%; --input: 0 0% 89.8%;
--ring: 0 0% 3.9%; --radius: 0.5rem;
```

**Dark mode (.dark):**
```
--background: 0 0% 3.9%; --foreground: 0 0% 98%;
--card: 0 0% 3.9%; --card-foreground: 0 0% 98%;
--popover: 0 0% 3.9%; --popover-foreground: 0 0% 98%;
--primary: 0 0% 98%; --primary-foreground: 0 0% 9%;
--secondary: 0 0% 14.9%; --secondary-foreground: 0 0% 98%;
--muted: 0 0% 14.9%; --muted-foreground: 0 0% 63.9%;
--accent: 0 0% 14.9%; --accent-foreground: 0 0% 98%;
--destructive: 0 62.8% 30.6%; --destructive-foreground: 0 0% 98%;
--border: 0 0% 14.9%; --input: 0 0% 14.9%;
--ring: 0 0% 83.1%;
```

**Custom:** `silver: "#C0C0C0"` | **Font:** Arial, Helvetica, sans-serif | **Plugin:** tailwindcss-animate

### Real LinkedIn Data

**Profile:** Miguel Figuera Quintero | Full Stack Development | Ruby on Rails | ReactJS (Vite) | Laravel | NextJS | InertiaJS | ExpoJS | **Odoo Partner** | **Shopify Experience**
**Email:** miguelqui725@gmail.com | **WhatsApp:** +58 424-172-7988 | **LinkedIn:** linkedin.com/in/miguel-quintero725 | **Website:** miguelfiguera.dev

**About:** Full-stack developer with 4+ years of experience creating robust and efficient web solutions. Core Technologies: Ruby on Rails, React, Next.js, Express.js, JavaScript, TypeScript. Key Achievements: RESTful APIs for multiple apps, SMS campaigns automation for Towerware, responsive UIs with Next.js for Shopify integrations. Additional: Cloud server admin (Digital Ocean), DB management (MySQL, PostgreSQL, MongoDB), web scraping.

**Experience (6 roles):**
1. FullStack Dev @ Simple-C Bookeeping Software (jun 2025–present, full-time, Arizona US, remote) — Laravel + React stack
2. Programador Full Stack @ Freelance (abr 2025–present, remote) — Python, Systems Management
3. Programador Full Stack @ Digital Lab (mar 2023–abr 2025, 2y2m, Aragua VE, remote) — NextJs & React E-commerce, Shopify API, Bootstrap→Tailwind, Firebase (Firestore/Auth), Task Automation
4. Director de TI @ R&R Advisor (oct 2024–mar 2025, 6m, part-time, Puerto Rico, remote) — SaaS Dev, Server Admin, API Integrations, Code Review & PM
5. CTO @ Towerware (jul 2024–ene 2025, 7m, part-time, Delray Beach FL) — DB Optimization, Process Automation, DB Security, QA, AI Integration, Telnyx API, 3CX
6. Ruby on Rails Full Stack Dev @ Towerware (may 2024–jul 2024, 3m, Delray Beach FL) — Legacy Rails, testing (Minitest, RSpec, Capybara, Selenium), app upgrades

**Education:** Ing. Informática @ UNETI (sept 2023–dic 2028, ongoing) | Diplomado Tecnopedagogía @ UPEL (sept–dic 2020)

**Real Certifications ONLY:**
- Scientific Computing with Python — freeCodeCamp (mar 2024)
- Front End Development Libraries — freeCodeCamp (may 2023)
- JavaScript Algorithms and Data Structures — freeCodeCamp
- The Odin Project — Ruby on Rails Path (completed)
- The Odin Project — Node.js Path (completed)

**FORBIDDEN fake certs:** AWS Certified Solutions Architect, Google Professional Cloud Developer, Microsoft Azure Developer, Certified Kubernetes Administrator, React Advanced Certification (Meta), Full Stack Web Development (Udacity)

**Tech Stack:** JS/TS (React, Next.js, Inertia.js, Node.js, Express.js, NestJS) | Ruby (Rails) | Python (Scrapy, Odoo) | PHP (Laravel) | DB (PostgreSQL, MySQL, SQLite, Firebase, MongoDB) | DevOps (Docker, DigitalOcean, Heroku, Netlify, Vercel, Linux/Ubuntu)

**9 Real Projects from thedigitallab.dev:**
1. R&R Advisor — Landing Page, +120% conversions | https://rradvisor.net | Web
2. AlphaComputer — E-commerce proposal | https://alphacomputer.netlify.app | Web
3. DV Enterprise — Corporate identity for backoffice startup | https://dventerprise.net | Branding
4. Impacto20x — VSL sales page for Luis Fonten, mobile-optimized | https://impacto20x.com | Web
5. Claro De Luna — E-learning platform branding | Branding
6. Dulzura Natural — Social media campaign, engagement increase | Social Media
7. Dulzura Natural — E-commerce redesign proposal | https://propuesta-dulzura-natural.netlify.app | Web
8. TabayCommerce — Tech dropshipping e-commerce | https://techsmart725.netlify.app | Web
9. Eureka — Real estate webapp template | https://realstate-template.netlify.app | Web

**Existing Images to reuse:** `public/Logos/mfLogo.png` (+ variants), `public/myPhoto/mySelf.png`, `public/placeholder*`, `favicon.ico`

---

## Tarea 0a: Create branch feat/astro-migration from dev

1. Run `git checkout -b feat/astro-migration`.
2. Mark completed. Commit: `chore: create astro migration branch`

**AC:** `git branch --show-current` outputs `feat/astro-migration`.

---

## Tarea 0a-adv: ADV — Verify branch

1. Run `git branch --show-current` — must be `feat/astro-migration`.
2. Run `git log --oneline -3` — verify on top of dev history.

**AC:** Branch name correct, based on dev.

---

## Tarea 0b: Remove Next.js directories

1. Remove: `rm -rf app/ components/ lib/ hooks/ styles/ .next/ .cursor/ node_modules/`
2. Commit: `chore: remove Next.js directories`

**AC:** None of those directories exist. `ls` shows no `app/`, `components/`, `lib/`, etc.

---

## Tarea 0b-adv: ADV — Verify no Next.js dirs remain

1. `ls -la` — verify no `app/`, `components/`, `lib/`, `hooks/`, `styles/`, `.next/`, `.cursor/`, `node_modules/`.

**AC:** Zero of those directories found.

---

## Tarea 0c: Remove Next.js config files

1. Remove: `rm -f next.config.mjs postcss.config.mjs tailwind.config.ts tsconfig.json .eslintrc.json components.json middleware.ts package.json package-lock.json`
2. Commit: `chore: remove Next.js config files`

**AC:** None of those files exist.

---

## Tarea 0c-adv: ADV — Verify only pipeline + assets remain

1. `ls -la` — should only show: `.ralph/`, `AGENTS.md`, `PRD-ralph-pipeline.md`, `init.sh`, `ralph.sh`, `.git/`, `.claude/`, `.gitignore`, `public/`, `README.md`

**AC:** Only those items remain at root.

---

## Tarea 0d: Preserve public assets

1. `mkdir -p .ralph/preserved-assets`
2. `cp -r public/Logos .ralph/preserved-assets/`
3. `cp -r public/myPhoto .ralph/preserved-assets/`
4. `cp public/placeholder* .ralph/preserved-assets/` (if they exist)
5. `cp app/\(site\)/favicon.ico .ralph/preserved-assets/` (if exists, otherwise check public/)
6. Commit: `chore: preserve public assets before cleanup`

**AC:** `.ralph/preserved-assets/` contains mySelf.png, mfLogo*.png, favicon.ico.

---

## Tarea 0d-adv: ADV — Verify assets preserved

1. `ls .ralph/preserved-assets/Logos/` — has mfLogo.png and variants.
2. `ls .ralph/preserved-assets/myPhoto/` — has mySelf.png.
3. `ls .ralph/preserved-assets/favicon.ico` — exists.

**AC:** All 3 checks pass.

---

## Tarea 0e: Init Astro minimal project at root

1. Remove remaining `public/` dir: `rm -rf public/`
2. Run: `npm create astro@latest . -- --template minimal --typescript strict --no-git --install`
   - If it prompts about existing files, proceed (overwrite is fine since we cleaned up).
3. Verify `package.json` has astro, `src/` dir exists.
4. Commit: `feat: initialize Astro project`

**AC:** `package.json` has `"astro"` in deps. `src/pages/index.astro` exists. `timeout 120 npm run build` passes.

---

## Tarea 0e-adv: ADV — Verify Astro init

1. `cat package.json | grep astro` — found.
2. `ls src/pages/index.astro` — exists.
3. `timeout 120 npm run build 2>&1` — zero errors.

**AC:** All 3 pass.

---

## Tarea 0f: Add React and Tailwind integrations

1. Run: `npx astro add react tailwindcss --yes`
2. Verify `astro.config.mjs` imports and uses both integrations.
3. Commit: `feat: add React and Tailwind integrations`

**AC:** `astro.config.mjs` contains `react()` and `tailwind()`. Build passes.

---

## Tarea 0f-adv: ADV — Verify integrations

1. `grep -c "react" astro.config.mjs` — > 0
2. `grep -c "tailwind" astro.config.mjs` — > 0
3. `timeout 120 npm run build 2>&1` — zero errors.

**AC:** All 3 pass.

---

## Tarea 0g: Install runtime deps

1. `npm install lucide-react clsx tailwind-merge tailwindcss-animate class-variance-authority`
2. Commit: `chore: install runtime dependencies`

**AC:** All 5 packages in `dependencies` section of package.json.

---

## Tarea 0g-adv: ADV — Verify runtime deps

1. Check package.json has: lucide-react, clsx, tailwind-merge, tailwindcss-animate, class-variance-authority.

**AC:** All 5 present.

---

## Tarea 0h: Install dev deps

1. `npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom @types/react @types/react-dom`
2. Commit: `chore: install dev dependencies`

**AC:** All 6 packages in `devDependencies`.

---

## Tarea 0h-adv: ADV — Verify dev deps

1. Check package.json devDependencies has all 6.

**AC:** All present.

---

## Tarea 0i: Restore preserved assets

1. `mkdir -p public/Logos public/myPhoto`
2. `cp -r .ralph/preserved-assets/Logos/* public/Logos/`
3. `cp -r .ralph/preserved-assets/myPhoto/* public/myPhoto/`
4. `cp .ralph/preserved-assets/favicon.ico public/` (if exists)
5. Copy any placeholder files too.
6. `rm -rf .ralph/preserved-assets/`
7. Commit: `chore: restore public assets`

**AC:** `public/Logos/mfLogo.png` and `public/myPhoto/mySelf.png` exist. Build passes.

---

## Tarea 0i-adv: ADV — Verify assets + build

1. `ls public/Logos/mfLogo.png` — exists.
2. `ls public/myPhoto/mySelf.png` — exists.
3. `timeout 120 npm run build 2>&1` — passes.

**AC:** All 3 pass.

---

## Tarea 1a: Create globals.css with exact HSL variables

1. Create `src/styles/globals.css` with:
   - `@tailwind base; @tailwind components; @tailwind utilities;`
   - `body { font-family: Arial, Helvetica, sans-serif; }`
   - `@layer base { :root { ... } .dark { ... } }` with ALL variables from the "Design System" section above.
2. Commit: `feat: add global CSS with design system variables`

**AC:** File has ALL variables listed in Design System section. Both `:root` and `.dark` blocks present.

---

## Tarea 1a-adv: ADV — Diff CSS variables

1. Read `src/styles/globals.css`.
2. Verify EVERY variable from the PRD Design System section exists with exact values.
3. Verify `body` font-family is `Arial, Helvetica, sans-serif`.

**AC:** Zero missing or incorrect variables.

---

## Tarea 1b: Create tailwind.config.mjs

1. Create `tailwind.config.mjs` with:
   - `darkMode: ["class"]`
   - `content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"]`
   - Extended colors mapping HSL vars: background, foreground, card, primary, secondary, muted, accent, destructive, popover, border, input, ring (each with DEFAULT + foreground where applicable)
   - `silver: "#C0C0C0"`
   - `borderRadius: { lg, md, sm }` using `--radius`
   - `keyframes: { "accordion-down", "accordion-up" }`
   - `animation: { "accordion-down", "accordion-up" }`
   - `plugins: [require("tailwindcss-animate")]`
2. Commit: `feat: configure Tailwind with design system`

**AC:** Config has silver, all color extensions, animate plugin. Build passes.

---

## Tarea 1b-adv: ADV — Verify tailwind config

1. Check `silver` in config.
2. Check animate plugin.
3. Check darkMode is `["class"]`.
4. `timeout 120 npm run build 2>&1` — passes.

**AC:** All 4 pass.

---

## Tarea 1c: Create cn() utility

1. Create `src/lib/utils.ts`:
   ```ts
   import { clsx, type ClassValue } from "clsx";
   import { twMerge } from "tailwind-merge";
   export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
   ```
2. Commit: `feat: add cn() utility function`

**AC:** File exports `cn` function. Build passes.

---

## Tarea 1c-adv: ADV — Verify cn()

1. File exists at `src/lib/utils.ts`.
2. Exports `cn`.
3. Build passes.

**AC:** All pass.

---

## Tarea 1d: Create shadcn Button

1. Create `src/components/ui/button.tsx` — standard shadcn Button with:
   - Variants: default, destructive, outline, secondary, ghost, link
   - Sizes: default, sm, lg, icon
   - Uses `cn()` and `cva()`
   - ForwardRef pattern
2. Commit: `feat: add shadcn Button component`

**AC:** File exports `Button` and `buttonVariants`. Has 6 variants, 4 sizes. Build passes.

---

## Tarea 1d-adv: ADV — Verify Button

1. Check 6 variants in code.
2. Check 4 sizes.
3. Uses `cn()` import.
4. Build passes.

**AC:** All pass.

---

## Tarea 1e: Create shadcn Badge

1. Create `src/components/ui/badge.tsx` — variants: default, secondary, destructive, outline. Uses `cn()`, `cva()`.
2. Commit: `feat: add shadcn Badge component`

**AC:** Exports `Badge`, `badgeVariants`. 4 variants. Build passes.

---

## Tarea 1e-adv: ADV — Verify Badge

1. 4 variants present. Uses cn(). Build passes.

**AC:** All pass.

---

## Tarea 1f: Create shadcn Card

1. Create `src/components/ui/card.tsx` — Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter. All use `cn()`, forwardRef.
2. Commit: `feat: add shadcn Card component`

**AC:** 6 named exports. Build passes.

---

## Tarea 1f-adv: ADV — Verify Card

1. 6 exports: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter.
2. All use cn(). Build passes.

**AC:** All pass.

---

## Tarea 1g: Create shadcn Input

1. Create `src/components/ui/input.tsx` — styled input, uses cn(), forwardRef, theme vars.
2. Commit: `feat: add shadcn Input component`

**AC:** Exports `Input`. Build passes.

---

## Tarea 1g-adv: ADV — Verify Input

1. Uses cn(), theme CSS vars (border, input, ring). Build passes.

**AC:** All pass.

---

## Tarea 1h: Create shadcn Textarea and Separator

1. Create `src/components/ui/textarea.tsx` — styled textarea, cn(), forwardRef.
2. Create `src/components/ui/separator.tsx` — horizontal/vertical separator, cn().
3. Commit: `feat: add shadcn Textarea and Separator components`

**AC:** Both files exist, export correctly. Build passes.

---

## Tarea 1h-adv: ADV — Verify Textarea + Separator

1. Both export correctly. Both use cn(). Build passes.

**AC:** All pass.

---

## Tarea 2a: Create profile data

1. Create `src/data/profile.ts` with typed export:
   - name, headline, about (from LinkedIn), location, email, linkedin, whatsapp, github, website
   - `odooPartner: true`
   - `shopifyExperience: true`
2. Commit: `feat: add profile data with Odoo and Shopify flags`

**AC:** All fields non-empty. odooPartner=true, shopifyExperience=true. Email=miguelqui725@gmail.com.

---

## Tarea 2a-adv: ADV — Verify profile data

1. email matches. whatsapp has 584241727988. odooPartner=true. shopifyExperience=true.

**AC:** All match PRD.

---

## Tarea 2b: Create experience data

1. Create `src/data/experience.ts` — typed `Experience[]` with 6 roles, each having: company, title, type, startDate, endDate, location, remote, description (bullet points array).
2. Commit: `feat: add work experience data`

**AC:** 6 entries. Dates match PRD (Simple-C jun2025, Freelance abr2025, Digital Lab mar2023, R&R oct2024, Towerware CTO jul2024, Towerware Rails may2024).

---

## Tarea 2b-adv: ADV — Verify experience

1. Count = 6. Each company/date matches PRD LinkedIn data.

**AC:** All match.

---

## Tarea 2c: Create education data

1. Create `src/data/education.ts` — typed `Education[]`:
   - UNETI — Ing. Informática (sept 2023–dic 2028, ongoing)
   - UPEL — Diplomado Tecnopedagogía (sept 2020–dic 2020)
2. Commit: `feat: add education data`

**AC:** 2 entries with correct dates.

---

## Tarea 2c-adv: ADV — Verify education

1. UNETI sept2023–dic2028, ongoing=true. UPEL sept2020–dic2020.

**AC:** Both correct.

---

## Tarea 2d: Create services data

1. Create `src/data/services.ts` — typed `Service[]`, 9 services: Fullstack, Backend, Frontend, QA Testing, AI & Automation, Odoo Implementation, Infrastructure & DB, Callcenter & Cloud, Custom Dev. Each with id, title, shortDescription, description, iconName (Lucide), features[].
2. Commit: `feat: add services data`

**AC:** 9 services, each with non-empty features[].

---

## Tarea 2d-adv: ADV — Verify services

1. Count = 9. Each has iconName, features.length > 0.

**AC:** All pass.

---

## Tarea 2e: Create technologies data

1. Create `src/data/technologies.ts` — typed `TechnologyCategory[]`, grouped: Languages & Frameworks (React, Next.js, Rails, Laravel, Express, NestJS, Inertia.js), Python (Scrapy, Odoo), Databases (PostgreSQL, MySQL, SQLite, Firebase, MongoDB), DevOps (Docker, DigitalOcean, Heroku, Netlify, Vercel, Ubuntu).
2. Commit: `feat: add technologies data`

**AC:** Categories include Rails, React, Laravel, Docker, PostgreSQL, Firebase.

---

## Tarea 2e-adv: ADV — Verify technologies

1. Grep for "Rails", "React", "Laravel", "Docker", "PostgreSQL", "Firebase" in file — all found.

**AC:** All found.

---

## Tarea 2f: Create certifications data

1. Create `src/data/certifications.ts` — typed `Certification[]`, ONLY:
   - Scientific Computing with Python — freeCodeCamp (mar 2024)
   - Front End Development Libraries — freeCodeCamp (may 2023)
   - JavaScript Algorithms and Data Structures — freeCodeCamp
   - The Odin Project — Ruby on Rails Path
   - The Odin Project — Node.js Path
2. Commit: `feat: add real certifications data`

**AC:** 5 certs. ZERO mention of AWS, Google Cloud, Azure, Kubernetes, Meta, Udacity.

---

## Tarea 2f-adv: ADV — Verify NO fake certs

1. Grep file for "AWS" — 0 results.
2. Grep for "Google Cloud" — 0 results.
3. Grep for "Azure" — 0 results.
4. Grep for "Kubernetes" — 0 results.
5. Grep for "Meta" — 0 results.
6. Grep for "Udacity" — 0 results.
7. Count certs = 5.

**AC:** All 7 checks pass.

---

## Tarea 2g: Create projects data

1. Create `src/data/projects.ts` — typed `Project[]`, 9 projects from thedigitallab.dev:
   - R&R Advisor (https://rradvisor.net, Web)
   - AlphaComputer (https://alphacomputer.netlify.app, Web)
   - DV Enterprise (https://dventerprise.net, Branding)
   - Impacto20x (https://impacto20x.com, Web)
   - Claro De Luna (Branding, no URL)
   - Dulzura Natural Social Media (Social Media, no URL)
   - Dulzura Natural E-commerce (https://propuesta-dulzura-natural.netlify.app, Web)
   - TabayCommerce (https://techsmart725.netlify.app, Web)
   - Eureka (https://realstate-template.netlify.app, Web)
2. Commit: `feat: add real portfolio projects data`

**AC:** 9 projects. URLs match above list.

---

## Tarea 2g-adv: ADV — Verify projects

1. Count = 9. Grep for "rradvisor.net" — found. Grep for "alphacomputer.netlify" — found. Grep for "techsmart725" — found.

**AC:** All found.

---

## Tarea 3a: Create Layout.astro

1. Create `src/layouts/Layout.astro`:
   - `<html lang="en" class="dark">`
   - Import `../styles/globals.css`
   - `<meta charset="utf-8">`, `<meta name="viewport">`, `<meta name="description">`
   - Accept `title` and `description` props
   - `<slot />` for content
2. Commit: `feat: add base Layout with dark theme`

**AC:** Has `lang="en"`, `class="dark"`, imports globals.css, has slot.

---

## Tarea 3a-adv: ADV — Verify Layout

1. Has `class="dark"`, charset, viewport, globals import, slot. Build passes.

**AC:** All present.

---

## Tarea 3b: Create Navbar.astro

1. Create `src/components/Navbar.astro`:
   - `<nav>` sticky top, `bg-background border-b border-border`
   - Left: logo (use `/Logos/mfLogo.png` or text "Miguel Figuera")
   - Center/Right: links — Home (/), Services (/services), Portfolio (/portfolio), Products (/products)
   - Far right: "Contact Me" button with `bg-silver text-black` styling
   - Desktop only: `hidden md:flex`
2. Commit: `feat: add desktop Navbar`

**AC:** 4 links with correct hrefs. Contact button with silver. Hidden on mobile.

---

## Tarea 3b-adv: ADV — Verify Navbar

1. Links: `/`, `/services`, `/portfolio`, `/products`. Contact button present. `hidden md:flex` or equivalent.

**AC:** All correct.

---

## Tarea 3c: Create MobileNav.tsx

1. Create `src/components/MobileNav.tsx`:
   - React component with `useState` for open/close
   - Hamburger button (3 bars or Menu icon from Lucide)
   - Overlay/slide menu with same 4 links + Contact
   - Close on link click
   - `aria-label` on toggle button
   - Visible only on mobile: `md:hidden`
2. Commit: `feat: add mobile navigation`

**AC:** Exports `MobileNav`. Has useState, aria-label, 4 links + Contact, md:hidden.

---

## Tarea 3c-adv: ADV — Verify MobileNav

1. Has useState toggle. Has aria-label. Same 4 links as Navbar. md:hidden.

**AC:** All present.

---

## Tarea 3d: Create Footer.astro

1. Create `src/components/Footer.astro`:
   - Dark background
   - Name + "Full-Stack Developer"
   - Quick links (Home, Services, Portfolio, Products)
   - Social: LinkedIn (linkedin.com/in/miguel-quintero725), GitHub, WhatsApp (wa.me/584241727988), Email (mailto:miguelqui725@gmail.com)
   - Copyright © 2024-2025
2. Commit: `feat: add Footer with social links`

**AC:** Real URLs present. No example.com. Copyright exists.

---

## Tarea 3d-adv: ADV — Verify Footer

1. Grep for "example.com" — 0 results. Real linkedin/email/whatsapp URLs present. Copyright present.

**AC:** All pass.

---

## Tarea 3e: Wire Layout + create placeholder pages

1. Update `src/layouts/Layout.astro` to include:
   - `import Navbar from '../components/Navbar.astro'`
   - `import MobileNav from '../components/MobileNav.tsx'` (rendered with `client:load`)
   - `import Footer from '../components/Footer.astro'`
   - Navbar + MobileNav before slot, Footer after slot
2. Create/update `src/pages/index.astro` — imports Layout, shows "Coming Soon" (temporary)
3. Create `src/pages/services.astro` — imports Layout, heading "Services"
4. Create `src/pages/portfolio.astro` — imports Layout, heading "Portfolio"
5. Create `src/pages/products.astro` — imports Layout, heading "Products"
6. Commit: `feat: wire layout and create page stubs`

**AC:** `timeout 120 npm run build` — zero errors. 4 pages compile.

---

## Tarea 3e-adv: ADV — Build test all pages

1. `timeout 120 npm run build 2>&1` — zero errors.
2. Check dist/ has index.html, services/index.html, portfolio/index.html, products/index.html.

**AC:** Build passes, 4 pages in dist/.

---

## Tarea 4a: Build Hero section

1. Create `src/components/landing/Hero.astro`:
   - Uses profile data from `src/data/profile.ts`
   - Shows `/myPhoto/mySelf.png` photo (with alt text)
   - "Miguel Figuera Quintero" heading (h1)
   - Headline/tagline
   - Short about paragraph
   - 2 shadcn Buttons: "Schedule a Consultation" (bg-silver text-black), "View My Work" (outline, links to /portfolio)
   - Gradient/decorative background elements
2. Commit: `feat: add Hero section`

**AC:** Uses `/myPhoto/mySelf.png`. Real name shown. Silver CTA button. Build passes.

---

## Tarea 4a-adv: ADV — Verify Hero

1. References `mySelf.png`. Name = "Miguel Figuera Quintero". Silver accent on button. Responsive (check text sizes). Build passes.

**AC:** All pass.

---

## Tarea 4b: Build WhyChooseMe section

1. Create `src/components/landing/WhyChooseMe.astro`:
   - Badge "Why Choose Me"
   - 4 shadcn Cards in grid: Clean Code (Code icon), Scalable Architecture (Layers), Responsive Design (Layout), Performance (Cpu)
   - Each card: Lucide icon + title + description
   - Grid: 1 col mobile, 2 col md, 4 col lg
2. Commit: `feat: add WhyChooseMe section`

**AC:** 4 cards with Lucide icons. Responsive grid classes present. Build passes.

---

## Tarea 4b-adv: ADV — Verify WhyChooseMe

1. 4 cards. Lucide icon imports. Grid responsive classes (grid-cols-1 md:grid-cols-2 lg:grid-cols-4 or similar). Build passes.

**AC:** All pass.

---

## Tarea 4c: Build Experience timeline

1. Create `src/components/landing/ExperienceTimeline.astro`:
   - Import experience data from `src/data/experience.ts`
   - Vertical timeline with line/dots
   - Each role: company, title, dates, location, description bullets
   - Show all 6 roles
2. Commit: `feat: add experience timeline section`

**AC:** 6 roles rendered. Real companies/dates. Build passes.

---

## Tarea 4c-adv: ADV — Verify timeline

1. Count 6 entries. "Simple-C" present. "Towerware" present. "Digital Lab" present. Dates match PRD.

**AC:** All match.

---

## Tarea 4d: Build Projects showcase

1. Create `src/components/landing/ProjectsShowcase.astro`:
   - Import projects from `src/data/projects.ts`
   - Show 6 best projects (pick the ones with URLs)
   - shadcn Card for each: title, description, category Badge, link button
   - Responsive grid
2. Commit: `feat: add projects showcase section`

**AC:** 6 project cards. Real URLs (rradvisor.net, etc). Category badges. Build passes.

---

## Tarea 4d-adv: ADV — Verify projects

1. Cards have real URLs. Grep rendered output for "rradvisor" or check data imports. Build passes.

**AC:** Real URLs present.

---

## Tarea 4e: Build Services preview + Products teaser

1. Create `src/components/landing/ServicesPreview.astro`:
   - 3 highlighted services (Fullstack, AI & Automation, Custom Dev) as shadcn Cards
   - 1 "Products" teaser card: "Explore Our Products" with note about upcoming catalog, link to /products
   - "View All Services" link to /services
2. Commit: `feat: add services preview and products teaser`

**AC:** 3 service cards + 1 products card. Links to /services and /products.

---

## Tarea 4e-adv: ADV — Verify services preview

1. 3 service cards. Products teaser card present. Links /services and /products correct.

**AC:** All present.

---

## Tarea 4f: Build Certifications + Partners

1. Create `src/components/landing/CertsAndPartners.astro`:
   - "Certifications & Partners" heading
   - Odoo Partner badge/card (prominent)
   - Shopify Experience badge
   - freeCodeCamp certs (3)
   - Odin Project paths (2)
   - NO fake certs
2. Commit: `feat: add certifications and partner badges`

**AC:** "Odoo Partner" text visible. "Shopify" text visible. ZERO fake cert names. Build passes.

---

## Tarea 4f-adv: ADV — Verify certs and partners

1. Grep source for "Odoo Partner" or "Odoo" — found.
2. Grep for "Shopify" — found.
3. Grep for "AWS" in cert context — not found.
4. Grep for "Google Cloud" — not found.
5. Grep for "Azure" — not found.

**AC:** Odoo + Shopify present. Zero fakes.

---

## Tarea 4g: Build Contact section

1. Create `src/components/landing/Contact.astro`:
   - "Get In Touch" heading
   - Direct contact cards/links:
     - Email: mailto:miguelqui725@gmail.com
     - WhatsApp: https://wa.me/584241727988
     - LinkedIn: https://www.linkedin.com/in/miguel-quintero725/
   - Lucide icons (Mail, MessageCircle, Linkedin)
   - NO form, NO formspree, NO form backend
2. Commit: `feat: add contact section with direct links`

**AC:** mailto:, wa.me/, linkedin.com/ links present. NO formspree. Build passes.

---

## Tarea 4g-adv: ADV — Verify contact, NO formspree

1. Grep entire project for "formspree" — 0 results.
2. Grep for "mailto:miguelqui725" — found.
3. Grep for "wa.me/584241727988" — found.
4. No `<form>` tags with action attribute pointing to external service.

**AC:** Zero formspree. Real contact links.

---

## Tarea 4h: Assemble landing page

1. Update `src/pages/index.astro`:
   - Import Layout
   - Import and render ALL sections in order: Hero → WhyChooseMe → ExperienceTimeline → ProjectsShowcase → ServicesPreview → CertsAndPartners → Contact
   - Consistent spacing between sections (`class="py-16"` or `py-20`)
   - Remove any "Coming Soon" placeholder text
2. Commit: `feat: assemble landing page with all sections`

**AC:** 7 sections imported. Build passes with zero errors. No "Coming Soon" text.

---

## Tarea 4h-adv: ADV — Build test landing page

1. `timeout 120 npm run build 2>&1` — zero errors.
2. All 7 imports present in index.astro.
3. Grep for "Coming Soon" — 0 results on landing page.

**AC:** All pass.

---

## Tarea 5a: Build ServiceList component

1. Create `src/components/services/ServiceList.astro`:
   - Import 9 services from `src/data/services.ts`
   - shadcn Card for each: Lucide icon (dynamic by iconName), title, description, features as bullet list
   - Responsive grid (1 col mobile, 2 col md, 3 col lg)
2. Commit: `feat: add ServiceList component`

**AC:** 9 cards rendered. Each has icon+title+desc+features. Build passes.

---

## Tarea 5a-adv: ADV — Verify 9 services

1. Count service cards = 9. Each has features list. Responsive grid classes. Build passes.

**AC:** All pass.

---

## Tarea 5b: Build TechGrid and HowIWork

1. Create `src/components/services/TechGrid.astro`:
   - Import from technologies.ts
   - Technology badges grouped by category
   - shadcn Badge component for each tech
2. Create `src/components/services/HowIWork.astro`:
   - 4 numbered steps: Discovery → Planning → Development → Delivery
   - Each with title + description
   - Visual step numbering (circles or similar)
3. Commit: `feat: add TechGrid and HowIWork components`

**AC:** Tech includes React/Rails/Laravel. 4 steps with numbers. Build passes.

---

## Tarea 5b-adv: ADV — Verify tech + steps

1. "React", "Rails", "Laravel" in TechGrid. 4 steps in HowIWork. Build passes.

**AC:** All present.

---

## Tarea 5c: Build CTA and assemble Services page

1. Create `src/components/shared/CTA.astro` — "Ready to Transform Your Business?" + 2 buttons.
2. Update `src/pages/services.astro`: page header → ServiceList → TechGrid → HowIWork → CTA.
3. Commit: `feat: assemble Services page`

**AC:** Build passes. Page has all 4 sections.

---

## Tarea 5c-adv: ADV — Build test Services

1. `timeout 120 npm run build 2>&1` — zero errors. Services page has all sections.

**AC:** Pass.

---

## Tarea 6a: Build Portfolio project cards

1. Create `src/components/portfolio/PortfolioCards.astro`:
   - Import all 9 projects from projects.ts
   - shadcn Card for each: title, description, category Badge, link (if exists), demo link (if exists)
   - Responsive grid
2. Commit: `feat: add portfolio project cards`

**AC:** 9 cards. Real URLs present. Build passes.

---

## Tarea 6a-adv: ADV — Verify 9 projects

1. Count = 9. "rradvisor.net" present. "alphacomputer.netlify" present. Build passes.

**AC:** All pass.

---

## Tarea 6b: Build work detail and approach

1. Create `src/components/portfolio/WorkDetail.astro`:
   - Detailed experience from experience.ts (different layout from landing timeline — more detail, more description)
2. Create `src/components/portfolio/WorkApproach.astro`:
   - 5 steps: Discovery, Design, Development, Testing, Deployment
   - Cards or icons for each
3. Commit: `feat: add work detail and approach sections`

**AC:** Experience detail + 5 approach steps. Build passes.

---

## Tarea 6b-adv: ADV — Verify work detail

1. Real experience data. 5 approach steps. Build passes.

**AC:** All pass.

---

## Tarea 6c: Assemble Portfolio page

1. Update `src/pages/portfolio.astro`: header → PortfolioCards → WorkDetail → WorkApproach → CTA.
2. Commit: `feat: assemble Portfolio page`

**AC:** Build passes.

---

## Tarea 6c-adv: ADV — Build test Portfolio

1. `timeout 120 npm run build 2>&1` — zero errors.

**AC:** Pass.

---

## Tarea 7a: Build Products page (ERPNext-ready)

1. Update `src/pages/products.astro`:
   - Page header: "Products & Solutions"
   - Grid structure ready for product items (use CSS grid/flex that ERPNext can populate)
   - Category sidebar/filter placeholder structure
   - "Coming Soon" cards with shadcn Card showing placeholder product layout (image area, title, price area, description, CTA)
   - Note about upcoming product catalog
   - data attributes for ERPNext integration: `data-erpnext-item`, `data-erpnext-category`
2. Commit: `feat: add Products page with ERPNext-ready structure`

**AC:** Page builds. Has grid structure. Has data-erpnext attributes. Has category area.

---

## Tarea 7a-adv: ADV — Verify Products page

1. Build passes. Grep for "data-erpnext" — found. Has product grid structure. Has category area.

**AC:** All pass.

---

## Tarea 8a: Setup Vitest + data tests (profile, experience, services)

1. Create `vitest.config.ts` with jsdom environment, globals, setup file, coverage thresholds 80%.
2. Create `src/test/setup.ts` importing jest-dom.
3. Add scripts to package.json: `"test": "vitest run"`, `"test:coverage": "vitest run --coverage"`
4. Create `src/data/__tests__/profile.test.ts` — profile has name, email, linkedin, whatsapp, odooPartner, shopifyExperience.
5. Create `src/data/__tests__/experience.test.ts` — 6 experiences, required fields.
6. Create `src/data/__tests__/services.test.ts` — 9 services, each has features[].
7. `timeout 60 npx vitest run 2>&1` — all pass.
8. Commit: `test: add Vitest setup and data module tests`

**AC:** vitest runs, 3 test files pass, zero failures.

---

## Tarea 8a-adv: ADV — Verify test setup

1. `timeout 60 npx vitest run 2>&1` — all pass. 3+ test files.

**AC:** Zero failures.

---

## Tarea 8b: Write data tests for certs, tech, projects, education

1. Create `src/data/__tests__/certifications.test.ts` — 5 certs, explicitly test NO fake certs (search for forbidden strings).
2. Create `src/data/__tests__/technologies.test.ts` — categories exist, includes React/Rails/Laravel.
3. Create `src/data/__tests__/projects.test.ts` — 9 projects, required fields, URLs present.
4. Create `src/data/__tests__/education.test.ts` — 2 entries, UNETI + UPEL.
5. `timeout 60 npx vitest run 2>&1` — all pass.
6. Commit: `test: add remaining data module tests`

**AC:** 4 new test files. Cert test checks for forbidden strings. All pass.

---

## Tarea 8b-adv: ADV — Verify cert test catches fakes

1. Read cert test — has explicit checks for "AWS", "Google Cloud", "Azure", "Kubernetes", "Meta", "Udacity" NOT in cert titles.
2. All tests pass.

**AC:** Fake cert checks exist and pass.

---

## Tarea 8c: Write React component render tests

1. Create `src/components/ui/__tests__/button.test.tsx` — renders, variants, onClick.
2. Create `src/components/ui/__tests__/card.test.tsx` — renders with sub-components.
3. Create `src/components/__tests__/MobileNav.test.tsx` — renders hamburger, toggles, shows links.
4. `timeout 60 npx vitest run 2>&1` — all pass.
5. Commit: `test: add component render tests`

**AC:** 3 test files. All pass.

---

## Tarea 8c-adv: ADV — Verify component tests

1. All tests pass. MobileNav test checks toggle behavior.

**AC:** All pass.

---

## Tarea 8d: Write integration tests

1. Create `src/test/integration/data-integrity.test.ts`:
   - Cross-module: all service iconNames are valid, experience dates reasonable, no fake certs, profile contact valid format.
2. Create `src/test/integration/build.test.ts`:
   - Runs `npm run build` and verifies exit code 0.
   - Checks dist/ has index.html, services/index.html, portfolio/index.html, products/index.html.
3. `timeout 60 npx vitest run 2>&1` — all pass.
4. Commit: `test: add integration and build verification tests`

**AC:** All tests pass. Build test checks 4 pages.

---

## Tarea 8d-adv: ADV — Verify coverage >= 80%

1. `timeout 60 npx vitest run --coverage 2>&1` — check coverage.
2. If < 80%, add more tests to reach threshold.

**AC:** Coverage >= 80% on statements, branches, functions, lines.

---

## Tarea 9a: Responsive polish + animations

1. Review ALL pages at 3 breakpoints (mobile/tablet/desktop).
2. Add `transition-all duration-300` to interactive elements (cards, buttons).
3. Add hover effects: `hover:scale-105`, `hover:shadow-lg`, `hover:border-silver/50` on cards.
4. Add scroll-based fade-in using CSS `@keyframes` or Astro view transitions.
5. Verify consistent spacing, typography, colors.
6. `timeout 120 npm run build 2>&1` + `timeout 60 npx vitest run 2>&1` — both pass.
7. Commit: `style: add responsive polish and interactive animations`

**AC:** Hover transitions on cards. Responsive classes present. Build + tests pass.

---

## Tarea 9a-adv: ADV — Verify responsive + animations

1. Spot-check 5+ components for responsive classes. Check hover transitions exist. Build + tests pass.

**AC:** All pass.

---

## Tarea 9b: Write improved README.md

1. `git mv README.md README.deprecated.md`
2. Read README.deprecated.md for reference.
3. Create new README.md in English:
   - Title: "Miguel Figuera Quintero — Full-Stack Developer Portfolio"
   - About Me (from LinkedIn about, mention Odoo Partner + Shopify)
   - Recent Experience (Simple-C, Freelance, Digital Lab, R&R Advisor, Towerware)
   - Education (UNETI ongoing, UPEL, Odin Project, freeCodeCamp)
   - Tech Stack (organized by category)
   - Getting Started (install, dev, build)
   - Testing (run tests, coverage)
   - Connect (LinkedIn, Email, WhatsApp, Website)
4. Build + tests pass.
5. Commit: `docs: improve README with updated profile and project setup`

**AC:** README.deprecated.md exists. New README has all sections. In English. Build + tests pass.

---

## Tarea 9b-adv: ADV — FINAL GATE (12 checks)

1. `timeout 120 npm run build 2>&1` — zero errors?
2. `timeout 60 npx vitest run 2>&1` — all pass?
3. `timeout 60 npx vitest run --coverage 2>&1` — >= 80%?
4. 4 pages build: /, /services, /portfolio, /products?
5. All nav links correct?
6. Real LinkedIn data, NO fake certs?
7. README has About/Experience/Education/Tech/Setup/Tests/Contact?
8. README in English?
9. Spot-check 3+ components responsive?
10. shadcn components use cn() + CSS variables?
11. "Odoo Partner" + "Shopify" present, html class="dark", silver accent used?
12. Grep "formspree" = 0, grep "placeholder" in visible text = 0, grep "example.com" = 0, grep "Coming Soon" on non-Products pages = 0?

**AC:** ALL 12 pass. Pipeline complete.

---

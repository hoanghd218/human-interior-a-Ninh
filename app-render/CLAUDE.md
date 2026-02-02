# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bandoxaynha.ai is a Vietnamese AI-powered home construction and interior design platform. It provides AI agents for tasks like interior design generation, feng shui analysis, contractor search, cost estimation, and legal document drafting.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with custom theme
- **UI Library**: React 19
- **Fonts**: Poppins (display), Open Sans (body)
- **AI Integration**: Google Gemini API (@google/genai)
- **Authentication**: Clerk (@clerk/nextjs)
- **Maps**: Google Maps API (@react-google-maps/api)

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

## Project Structure

```
app/                    # Next.js App Router pages
├── agents/            # AI agent pages (feng shui, contracts, cost estimation, etc.)
├── nha-thau/          # Contractor search pages
├── thiet-ke-noi-that/ # Interior design page
├── layout.tsx         # Root layout with fonts
├── page.tsx           # Homepage
└── globals.css        # Tailwind v4 theme config

components/            # React components
├── Header.tsx
├── ContractorCard.tsx
├── ContractorMap.tsx
├── ContractorModal.tsx
└── interior-design/   # Interior design specific components
    ├── DesignFlow.tsx
    └── LeadForm.tsx

services/              # Server-side AI services
├── gemini-fengshui.ts # Feng shui analysis via Gemini
└── gemini-interior.ts # Interior design generation via Gemini

data/                  # Static data and utilities
├── contractors.ts     # Contractor data
├── fengshui.ts        # Feng shui calculations
└── interior-design.ts # Interior design types

public/                # Static assets
└── logo.png
```

## Key Architecture Patterns

### AI Service Layer

AI functionality is encapsulated in `services/` with `"use server"` directives:

- `gemini-fengshui.ts`: Analyzes feng shui based on birth date, gender, and house direction. Uses traditional Vietnamese feng shui calculations (Cung Phi, Mệnh) combined with Gemini for narrative generation.

- `gemini-interior.ts`: Generates interior design variations from uploaded room photos using Gemini 2.5 Flash Image model. Returns base64-encoded images.

### Tailwind v4 Theme Configuration

The theme is defined in `app/globals.css` using Tailwind v4's `@theme` directive:

```css
@theme {
  --font-sans: var(--font-open-sans);
  --font-display: var(--font-poppins);
  --color-primary: #2563EB;
  --color-brand-blue: #1C3E95;
  --color-brand-green: #2ECC71;
  /* ... */
}
```

Custom animations and glassmorphism utilities are also defined here.

### Route Structure

- `/` - Homepage with AI search input
- `/agents` - AI agents directory (9 specialized agents)
- `/agents/ai-phong-thuy` - Feng shui analyzer
- `/agents/ai-thiet-ke` - Interior design generator
- `/agents/ai-hop-dong` - Contract drafting
- `/agents/ai-chi-phi` - Cost estimation
- `/agents/ai-mau-nha` - House model suggestions
- `/agents/ai-vat-lieu` - Material recommendations
- `/agents/thuoc-lo-ban` - Feng shui measurement tool
- `/agents/don-gia-m2` - Price per m² lookup
- `/agents/chon-ngay-dep` - Auspicious date selector
- `/nha-thau` - Contractor search with map
- `/thiet-ke-noi-that` - Interior design tool

### Path Aliases

The project uses `@/*` alias pointing to the root directory:

```typescript
import Header from "@/components/Header";
import { analyzeFengShui } from "@/services/gemini-fengshui";
```

## Environment Variables

Required environment variables (check `env` file):

- `GEMINI_API_KEY` - Google Gemini API key for AI features
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk authentication
- `CLERK_SECRET_KEY` - Clerk server-side

## Important Implementation Notes

### Gemini API Integration

The AI services currently hardcode the API key in the source (lines 8-9 in both service files). This should be moved to environment variables for production.

Models used:
- `gemini-2.5-flash` - Text generation (feng shui analysis)
- `gemini-2.5-flash-image` - Image generation (interior design)
- `gemini-2.0-flash-exp` - Image editing

### Image Handling

Interior design feature accepts base64-encoded images, sends to Gemini, and returns base64-encoded generated designs. The service makes 3 parallel calls for design variations.

### Feng Shui Calculations

Traditional Vietnamese feng shui logic in `data/fengshui.ts`:
- Calculates Mệnh (element) from birth year
- Calculates Cung Phi (trigram) from birth year and gender
- Determines favorable years for construction

### Remote Images

Configured in `next.config.ts` to allow:
- `randomuser.me` - Contractor profile photos
- `images.unsplash.com` - Stock images

## Styling Conventions

- Use Tailwind utility classes exclusively
- Custom colors: `primary` (#2563EB), `brand-blue` (#1C3E95), `brand-green` (#2ECC71)
- Animation classes: `animate-fadeInUp`, `animate-float`, `animate-slide-in-up`
- Glassmorphism: `glass`, `glass-strong` classes
- Custom scrollbar styling defined in globals.css

---

## Role & Responsibilities

Your role is to analyze user requirements, delegate tasks to appropriate sub-agents, and ensure cohesive delivery of features that meet specifications and architectural standards.

## Workflows

- Primary workflow: `./.claude/rules/primary-workflow.md`
- Development rules: `./.claude/rules/development-rules.md`
- Orchestration protocols: `./.claude/rules/orchestration-protocol.md`
- Documentation management: `./.claude/rules/documentation-management.md`
- And other workflows: `./.claude/rules/*`

**IMPORTANT:** Analyze the skills catalog and activate the skills that are needed for the task during the process.
**IMPORTANT:** You must follow strictly the development rules in `./.claude/rules/development-rules.md` file.
**IMPORTANT:** Before you plan or proceed any implementation, always read the `./README.md` file first to get context.
**IMPORTANT:** Sacrifice grammar for the sake of concision when writing reports.
**IMPORTANT:** In reports, list any unresolved questions at the end, if any.

## Hook Response Protocol

### Privacy Block Hook (`@@PRIVACY_PROMPT@@`)

When a tool call is blocked by the privacy-block hook, the output contains a JSON marker between `@@PRIVACY_PROMPT_START@@` and `@@PRIVACY_PROMPT_END@@`. **You MUST use the `AskUserQuestion` tool** to get proper user approval.

**Required Flow:**

1. Parse the JSON from the hook output
2. Use `AskUserQuestion` with the question data from the JSON
3. Based on user's selection:
   - **"Yes, approve access"** → Use `bash cat "filepath"` to read the file (bash is auto-approved)
   - **"No, skip this file"** → Continue without accessing the file

**Example AskUserQuestion call:**
```json
{
  "questions": [{
    "question": "I need to read \".env\" which may contain sensitive data. Do you approve?",
    "header": "File Access",
    "options": [
      { "label": "Yes, approve access", "description": "Allow reading .env this time" },
      { "label": "No, skip this file", "description": "Continue without accessing this file" }
    ],
    "multiSelect": false
  }]
}
```

**IMPORTANT:** Always ask the user via `AskUserQuestion` first. Never try to work around the privacy block without explicit user approval.

## Python Scripts (Skills)

When running Python scripts from `.claude/skills/`, use the venv Python interpreter:
- **Linux/macOS:** `.claude/skills/.venv/bin/python3 scripts/xxx.py`
- **Windows:** `.claude\skills\.venv\Scripts\python.exe scripts\xxx.py`

This ensures packages installed by `install.sh` (google-genai, pypdf, etc.) are available.

**IMPORTANT:** When scripts of skills failed, don't stop, try to fix them directly.

## [IMPORTANT] Consider Modularization
- If a code file exceeds 200 lines of code, consider modularizing it
- Check existing modules before creating new
- Analyze logical separation boundaries (functions, classes, concerns)
- Use kebab-case naming with long descriptive names, it's fine if the file name is long because this ensures file names are self-documenting for LLM tools (Grep, Glob, Search)
- Write descriptive code comments
- After modularization, continue with main task
- When not to modularize: Markdown files, plain text files, bash scripts, configuration files, environment variables files, etc.

## Documentation Management

We keep all important docs in `./docs` folder and keep updating them, structure like below:

```
./docs
├── project-overview-pdr.md
├── code-standards.md
├── codebase-summary.md
├── design-guidelines.md
├── deployment-guide.md
├── system-architecture.md
└── project-roadmap.md
```

**IMPORTANT:** *MUST READ* and *MUST COMPLY* all *INSTRUCTIONS* in project `./CLAUDE.md`, especially *WORKFLOWS* section is *CRITICALLY IMPORTANT*, this rule is *MANDATORY. NON-NEGOTIABLE. NO EXCEPTIONS. MUST REMEMBER AT ALL TIMES!!!*
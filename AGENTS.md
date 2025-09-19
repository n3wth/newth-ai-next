# AGENTS.md — OpenAI Codex Playbook

This guide keeps OpenAI Codex (and other code-focused assistants) productive in this repository. Its scope is the entire project unless a subdirectory defines a more specific guide later on.

## 1. Environment quick-start

- **Node.js:** 20.x LTS (the project is tested with v20.19.4).
- **Install dependencies:** `npm install`.
- **Single command quality gate:** `npm run check` (runs type checking, linting, format verification, and unit tests).
- **Dev server:** `npm run dev` (avoid leaving it running after the check you need).

## 2. Core workflows

1. Read the relevant files before editing—components live in `app/` for routes and `components/` for shared UI.
2. Prefer server components in the App Router unless browser-only APIs are required; mark client components with `"use client"` at the top.
3. Share logic through utilities in `lib/` and types in `types/`.
4. Keep data sources in `data/` or `lib/projects.ts`; avoid hardcoding copies in components.
5. Update or add tests under `test/` when you introduce new behaviours.

## 3. Style guidelines

- TypeScript with `strict` settings—annotate function signatures and avoid `any`.
- Use Tailwind CSS utility classes; prefer extracting small components instead of large anonymous JSX blocks.
- Reach for `clsx` when you need conditional class names.
- Follow existing naming conventions (`PascalCase` for components, `camelCase` for helpers).
- Keep files focused; split out modules once they exceed ~200 lines or mix concerns.

## 4. Testing & validation

- `npm run check` ⇒ full pre-merge validation (type-check, lint, format:check, vitest run).
- `npm run test:run` ⇒ unit tests only (Vitest, headless).
- `npm run test:e2e` ⇒ Playwright end-to-end suite (slower, optional unless a change affects flows).
- `npm run lint` and `npm run format:check` are available when you want targeted feedback.

Always run the relevant commands after changes. When a command fails, inspect the report and fix the code—do not rerun blindly.

## 5. Useful references

- `next.config.ts` and `middleware.ts` hold runtime configuration and edge logic.
- `tailwind.config.js` and `postcss.config.mjs` control styling.
- `vitest.config.ts` and `playwright.config.ts` define test environments.
- Assets live under `public/`, while reusable hooks sit in `hooks/`.

## 6. Productivity tips for agents

- Prefer `rg` (ripgrep) and `fd` for file/contents search; they are faster than `grep`/`find`.
- Batch edits when possible to reduce context usage.
- Do not leave long-running processes (dev servers, Playwright UI) unattended—start, inspect, then stop.
- Keep commit messages focused on the behaviour or configuration changes you introduce.

Happy shipping!

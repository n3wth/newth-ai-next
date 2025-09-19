# CODEX.md – Workflow Guide for Auto-PR

## Core Workflow

- Read project `AGENTS.md` (if present) before making changes.
- Keep commits focused and include descriptive messages.
- Ensure the working tree is clean before finishing a task.

## Quality Gates

1. Run `npm test`, `npm run type-check`, and `npm run lint` after code changes.
2. Fix any failures before proceeding.
3. Verify `git status` reports a clean tree aside from intentional changes.

## Auto PR Protocol

- After committing, immediately call the `make_pr` tool with:
  - A concise summary bullet list of key changes.
  - A testing section enumerating all commands executed.
- Only call `make_pr` when confident in the changes and all checks pass.
- Never skip `make_pr` once commits exist, and never call it without commits.

## Communication Notes

- Provide clear, direct final summaries with file path citations.
- Document executed commands in the testing section with their results.
- Mention any deviations (e.g., skipped checks) and justify them.

# Codex Handoff

## Current state

- Production branch: `main`
- Current feature branch: `codex/canonical-capabilities-design-system`
- Baseline commit: `7ebb3e38fd9573bca199c414edecbd8f6ae9d4f9`
- Runtime: Node 22
- Verification command: `npm run verify`
- Production host: GitHub Pages at `https://skratsch.com`

The Astro migration, refreshed brand system, light/dark themes, and canonical `/run/` experience are merged into `main`. The current feature branch implements the accepted 2026-09-09 decisions without removing legacy routes.

## Accepted direction

- Primary navigation: RUN · IMPROVE · BUILD · UNDERSTAND.
- `/run/` is canonical for the managed-operations experience.
- Use an Astro-native design-system reference for this site.
- Revisit Storybook when components are shared across applications or state, interaction, and visual-regression testing need a dedicated harness.
- Use a controlled hybrid imagery system.
- Keep “Managed IT. Clearer path.” as provisional messaging.

The matching Notion decision records and project pages were updated before implementation.

## This branch

- Aligns primary navigation labels with the four-capability model while retaining current destination URLs.
- Adds `/design-system/`, a production-native reference for tokens, type, actions, states, capability language, evidence surfaces, imagery, and Storybook adoption triggers.
- Adds four custom routed SVG capability icons and applies them to homepage capability cards.
- Adds `docs/service-taxonomy.md` and `docs/imagery-matrix.md`.
- Leaves the existing homepage hero and legacy routes intact.

## Validation

Run:

```sh
npm ci
npm run verify
```

`npm run verify` performs Astro diagnostics, builds the static site, audits preserved routes, and checks static assets. Also review `/design-system/` and the homepage in both themes and at mobile and desktop widths.

## Guardrails

- Do not force-push or reset shared branches.
- Do not modify GitHub Pages deployment settings unless Steve explicitly asks.
- Do not merge this branch without review and explicit authority.
- Preserve public URLs until rewrite and redirect decisions are reviewed together.
- Do not fabricate customer claims, metrics, testimonials, screenshots, or evidence.
- Update Notion and repository documentation together when accepted direction changes.

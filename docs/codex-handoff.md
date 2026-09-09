# Codex Handoff

## Current state

- Production branch: `main`
- Current feature branch: `codex/align-capability-indicators`
- Baseline commit: `3a24962b435c04bb7c277cb8fdb0b604f86c0b95`
- Runtime: Node 22
- Verification command: `npm run verify`
- Production host: GitHub Pages at `https://skratsch.com`

The Astro migration, refreshed brand system, light/dark themes, canonical RUN and IMPROVE experiences, four-pillar navigation, capability icons, and Astro-native design-system reference are merged into `main`. The current feature branch aligns the remaining legacy capability-page indicators with the amber-dot status-label contract.

## Accepted direction

- Primary navigation: RUN · IMPROVE · BUILD · UNDERSTAND.
- `/run/` is canonical for the managed-operations experience.
- Use an Astro-native design-system reference for this site.
- Revisit Storybook when components are shared across applications or state, interaction, and visual-regression testing need a dedicated harness.
- Use a controlled hybrid imagery system.
- Keep “Managed IT. Clearer path.” as provisional messaging.

The matching Notion decision records and project pages were updated before implementation.

## Current feature branch

- Replaces the plain text kicker on legacy capability indexes with the shared amber-dot status label.
- Brings BUILD and UNDERSTAND into visual alignment with RUN and IMPROVE before their full narrative rebuilds.
- Also keeps the legacy `/it-services/` index aligned because it shares the same service-group component.
- Changes no routes, service copy, claims, or assets.

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

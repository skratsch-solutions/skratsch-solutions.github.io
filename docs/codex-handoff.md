# Codex Handoff

## Current state

- Production branch: `main`
- Current feature branch: `codex/improve-capability-exemplar`
- Baseline commit: `785c8dc608114bb8766d966c394fc84edb15ad18`
- Runtime: Node 22
- Verification command: `npm run verify`
- Production host: GitHub Pages at `https://skratsch.com`

The Astro migration, refreshed brand system, light/dark themes, canonical `/run/` experience, four-pillar navigation, capability icons, and Astro-native design-system reference are merged into `main`. The current feature branch rebuilds `/consulting/` as the IMPROVE capability exemplar without removing any legacy consulting routes.

## Accepted direction

- Primary navigation: RUN · IMPROVE · BUILD · UNDERSTAND.
- `/run/` is canonical for the managed-operations experience.
- Use an Astro-native design-system reference for this site.
- Revisit Storybook when components are shared across applications or state, interaction, and visual-regression testing need a dedicated harness.
- Use a controlled hybrid imagery system.
- Keep “Managed IT. Clearer path.” as provisional messaging.

The matching Notion decision records and project pages were updated before implementation.

## Current feature branch

- Replaces the legacy consulting card index at `/consulting/` with an outcome-led IMPROVE narrative patterned after RUN.
- Generalizes `CapabilityHero` so each pillar can provide its own decision/status model while RUN retains its existing defaults.
- Preserves all existing `/consulting/*` detail routes for later explicit KEEP, REWRITE, MERGE, or REDIRECT decisions.
- Makes no new customer, metric, testimonial, or delivery-capability claims.

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

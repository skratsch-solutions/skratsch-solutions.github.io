# Codex Handoff

This repo has been migrated from the original Jekyll site to an Astro static site, then extended with the new Skratsch brand system.

## Current State

- Active work branch: `codex/run-capability-exemplar`
- Latest merged state: `137c012` (`Merge Skratsch brand system`)
- Runtime: Node 22
- Verification command: `npm run verify`
- Production host remains GitHub Pages for `https://skratsch.com`

The `codex/apply-brand-system` branch has been merged into `main`. A Codex agent continuing on another computer should fetch the repository, fast-forward `main`, and create a new feature branch for additional changes.

The current feature branch adds an additive `/run/` capability experience while retaining `/it-services/` and all legacy routes. It introduces reusable capability hero, system-diagram, and conversation-CTA components plus diagnostic signals, operating layers, outcomes, the four-capability loop, and engagement paths. Verification currently builds 51 pages and audits 50 preserved legacy URLs successfully.

## Recent Work

The latest branch work includes:

- Astro site shell and route parity for preserved legacy URLs.
- Brand system assets under `images/brand/`.
- Brand book at `docs/brand-book.md`.
- Header mark plus `SKRATSCH` wordmark treatment.
- Footer full lockup treatment.
- Warm dark palette and light palette.
- Theme toggle with persisted `localStorage` preference.
- `?theme=light` and `?theme=dark` preview overrides.

Recent commits before this handoff:

- `e95981c feat(ui): apply brand system to site shell`
- `2381cf8 refactor(ui): simplify header brand lockup`
- `92d3432 refactor(ui): strengthen header wordmark`
- `6820031 refactor(ui): warm brand color system`
- `dbde14a feat(ui): add light theme switcher`

## Local Setup

Use Node 22. Windows PowerShell, WSL, macOS, and Linux are supported.

```sh
git fetch --all --prune
git switch main
git pull
npm ci
npm run verify
```

For new work:

```sh
git switch -c codex/<feature-name>
```

## Validation Notes

`npm run verify` runs:

- `astro check`
- `astro build`
- `node scripts/audit-route-parity.mjs`

Expected current result:

- Build succeeds.
- Route parity audit passes with 50 preserved legacy URLs emitted.
- Existing TypeScript hints remain in `tailwind.config.js` and `assets/js/scripts.js`; these are legacy hints, not introduced by the brand/theme work.

## Known Follow-Ups

- Review `/run/` content and decide whether it should become canonical before merging; `/it-services/` remains intact in the current additive implementation.
- Add a real, publishable proof artifact to RUN when one is approved. Do not fabricate customer claims, metrics, testimonials, or evidence.
- The light theme and small-screen toggle are now validated in the in-app browser at 390px width.
- The `modern-web-guidance` skill remains flaky in this environment. Prefer `web-design-guidelines` for UI/accessibility review unless the old tool has been fixed.
- Git commit signing may fail on machines without the 1Password signing helper configured. If that happens, either configure signing or commit with `--no-gpg-sign`.
- GitHub reports existing Dependabot vulnerabilities on the default branch during pushes. These are not from the brand/theme pass.

## Guardrails

- Do not force-push or reset shared branches.
- Do not modify deployment settings unless Steve explicitly asks.
- Keep existing public URL behavior intact; use `npm run verify` after route or content changes.
- Keep brand assets in `images/brand/` and update `docs/brand-book.md` when changing tokens or lockups.

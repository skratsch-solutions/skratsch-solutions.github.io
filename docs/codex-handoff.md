# Codex Handoff

This repo has been migrated from the original Jekyll site to an Astro static site, then extended with the new Skratsch brand system.

## Current State

- Active work branch: `codex/apply-brand-system`
- Intended base branch: `main`
- Runtime: Node 22
- Verification command: `npm run verify`
- Production host remains GitHub Pages for `https://skratsch.com`

The branch is expected to be pushed to GitHub before handoff. If another Codex agent starts on a different computer, it should fetch the repo, inspect the latest PR/branch state, and continue from the newest commit on `codex/apply-brand-system` or from `main` if the PR has already been merged.

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

Use WSL and Node 22.

```sh
git fetch --all --prune
git switch main
git pull
npm ci
npm run verify
```

If continuing unmerged branch work:

```sh
git fetch --all --prune
git switch codex/apply-brand-system
git pull
npm ci
npm run verify
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

- The light theme is implemented and validated, but the small-screen theme toggle should be checked manually in a real browser after merge. Windows Edge headless produced inconsistent mobile captures while the DOM and desktop screenshots showed the control correctly.
- The `modern-web-guidance` skill remains flaky in this environment. Prefer `web-design-guidelines` for UI/accessibility review unless the old tool has been fixed.
- Git commit signing may fail on machines without the 1Password signing helper configured. If that happens, either configure signing or commit with `--no-gpg-sign`.
- GitHub reports existing Dependabot vulnerabilities on the default branch during pushes. These are not from the brand/theme pass.

## Guardrails

- Do not force-push or reset shared branches.
- Do not modify deployment settings unless Steve explicitly asks.
- Keep existing public URL behavior intact; use `npm run verify` after route or content changes.
- Keep brand assets in `images/brand/` and update `docs/brand-book.md` when changing tokens or lockups.

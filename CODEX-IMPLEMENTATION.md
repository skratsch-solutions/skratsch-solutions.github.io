# Skratsch.com v2 — Codex implementation instructions

## Safety boundary

Production is `main`. Do not modify, merge, force-push, delete, or deploy from `main`.
Create and work only on `site-v2` until Steve explicitly approves a production cutover.

Do not delete the existing Jekyll site during this bootstrap. This first slice is additive/reversible.
If a file collision or unexpected repository state occurs, stop and report it instead of overwriting.

## Goal

Establish the first non-destructive Astro v2 foundation for Skratsch.com.

## Apply this package

1. Clone `https://github.com/skratsch-solutions/skratsch-solutions.github.io`.
2. Fetch latest `main`.
3. Create branch `site-v2` from current `main`.
4. Copy the contents of this package into the repository root.
5. Do not replace existing files unless explicitly reviewed. `package.json` is expected to collide with the current Jekyll/Tailwind package file; preserve the old file as `package.jekyll.json` before installing this v2 package.
6. Run `npm install` to create/update `package-lock.json`.
7. Run `npm run build`.
8. Fix only v2 bootstrap/build issues. Do not refactor legacy Jekyll content yet.
9. Commit with a message similar to `feat: bootstrap Skratsch.com Astro v2`.
10. Push `site-v2`.
11. Open a draft PR from `site-v2` to `main`. Do not merge it.

## Architectural intent

- Astro static output
- TypeScript strict mode
- Tailwind CSS
- GitHub Pages remains the eventual host
- `https://skratsch.com` remains canonical
- Existing URLs must survive or receive deliberate permanent redirects during migration
- Existing blog/service/legal content is source material and must not be discarded

## Brand tokens

- Deep ink: `#12161F`
- Warm amber: `#E7A33E`
- Steel blue-grey: `#4C6B8A`
- Off-white: `#EEF1EC`

Visual direction: engineered status-panel / developer-tool aesthetic. No generic MSP/SaaS template treatment.

## First-slice acceptance criteria

- `site-v2` exists and is based on current `main`
- `npm run build` passes
- Astro generates static output
- Homepage renders the new positioning and four capability groups
- No production deployment is triggered from `site-v2`
- Existing Jekyll content remains recoverable and untouched
- Draft PR is opened, not merged

## Next slice (do not start unless requested)

Content schemas, service migration, legacy URL manifest, and the full Skratsch design system.

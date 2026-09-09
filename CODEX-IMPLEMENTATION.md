# Skratsch.com v2 — implementation guidance

## Current state

The Astro migration, refreshed visual design, brand system, light/dark themes, and canonical RUN experience are merged into `main`.

- Production branch: `main`
- Runtime: Node 22
- Output: Astro static site
- Canonical URL: `https://skratsch.com`
- Hosting: GitHub Pages
- Verification: `npm run verify`
- Public capability model: RUN · IMPROVE · BUILD · UNDERSTAND
- Managed-operations canonical route: `/run/`
- Design-system reference: `/design-system/`

The original Jekyll content remains in the repository as migration source material. Do not discard it unless a separate cleanup is explicitly approved.

## Safe working workflow

1. Fetch and fast-forward local `main`.
2. Create a feature branch from the latest `main` for code or content changes.
3. Run `npm ci` after dependency changes or on a fresh checkout.
4. Run `npm run verify` before committing.
5. Open a pull request targeting `main`.

Do not force-push or reset shared branches. Do not modify GitHub Pages deployment settings or repository cutover variables unless Steve explicitly requests it.

## Architecture and compatibility requirements

- Preserve existing public URLs or add deliberate permanent redirects.
- Keep `https://skratsch.com` canonical.
- Keep brand assets in `images/brand/`.
- Keep capability icons in `public/images/icons/capabilities/`.
- Update `docs/brand-book.md` when changing brand tokens or lockups.
- Use `docs/service-taxonomy.md` for content classification and `docs/imagery-matrix.md` for visual selection.
- Keep theme preference and `?theme=light` / `?theme=dark` preview overrides working.
- Treat legacy Jekyll content as recoverable source material during migration.

## Design-system approach

Use the Astro-native `/design-system/` reference while Skratsch.com is a single, mostly static application. It renders the production CSS, components, fonts, assets, responsive behavior, and deployment path directly.

Reconsider Storybook when:

- UI components are shared across more than one application.
- State matrices or interaction tests become difficult to review on the reference page.
- Automated visual-regression coverage needs a dedicated component harness.
- The component catalog requires independent release or ownership.

## Verification

Use Node 22:

```sh
npm ci
npm run verify
```

`npm run verify` performs Astro diagnostics, builds the static site, audits generated output for preserved public URLs, and checks static assets.

## Content and evidence guardrails

- Lead with client outcomes, then service detail.
- Keep RUN canonical for managed operations.
- Do not invent proof, customers, metrics, testimonials, or screenshots.
- Keep “Managed IT. Clearer path.” until a later messaging review explicitly replaces it.

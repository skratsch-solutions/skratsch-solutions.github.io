# Skratsch.com v2 — implementation guidance

## Current state

The Astro migration, refreshed visual design, brand system, and light/dark theme support are merged into `main`.

- Production branch: `main`
- Runtime: Node 22
- Output: Astro static site
- Canonical URL: `https://skratsch.com`
- Hosting: GitHub Pages
- Verification: `npm run verify`

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
- Update `docs/brand-book.md` when changing brand tokens or lockups.
- Keep the theme preference and `?theme=light` / `?theme=dark` preview overrides working.
- Treat legacy Jekyll content as recoverable source material during the migration.

## Verification

Use Node 22 on Windows, WSL, macOS, or Linux:

```sh
npm ci
npm run verify
```

`npm run verify` performs Astro diagnostics, builds the static site, and audits the generated output for all preserved legacy URLs. The expected route-parity result is 50 emitted URLs.

Existing informational TypeScript hints in `tailwind.config.js` and `assets/js/scripts.js` are legacy cleanup items and do not currently fail verification.

## Known follow-up

Manually confirm the theme toggle at small-screen widths in a real browser. Previous Windows Edge headless captures were inconsistent even though the DOM and desktop behavior were correct.

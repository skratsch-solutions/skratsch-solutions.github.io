# Skratsch.com v2 bootstrap

This package is the first implementation slice for the Skratsch.com rewrite.

It intentionally does not perform the production cutover. See `CODEX-IMPLEMENTATION.md` for the safe application workflow.

## Local verification

Use Node 22.

```sh
npm ci
npm run verify
```

`npm run verify` builds the Astro site and checks that preserved non-blog legacy URLs are emitted under `dist/`.

## Codex handoff

Use `docs/codex-handoff.md` as the current cross-machine continuation note for Codex agents. It records the active branch, latest brand/theme work, verification commands, and known follow-ups.

## Deployment cutover

Production still runs through the guarded Jekyll Pages workflow on `main`.

The Astro Pages workflow is present but inert for deployment until both conditions are true:

- The workflow is running on `main`.
- Repository variable `ASTRO_PAGES_CUTOVER_ENABLED` is set to `true`.

Until that variable is set, the Astro workflow only verifies the build. Do not set the cutover variable, disable the Jekyll deploy path, or merge `site-v2` without explicit approval.

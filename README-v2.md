# Skratsch.com v2

This repository contains the Astro static-site rewrite for Skratsch.com, including preserved legacy routes, the Skratsch brand system, and light/dark theme support. See `CODEX-IMPLEMENTATION.md` for the current contribution and safety guidance.

## Local verification

Use Node 22 on Windows, WSL, macOS, or Linux.

```sh
npm ci
npm run verify
```

`npm run verify` builds the Astro site and checks that preserved non-blog legacy URLs are emitted under `dist/`.

## Codex handoff

Use `docs/codex-handoff.md` as the current cross-machine continuation note for Codex agents. It records the merged state, verification commands, and known follow-ups.

## Deployment cutover

The repository retains both the existing Jekyll Pages workflow and a guarded Astro Pages workflow on `main`.

The Astro Pages workflow is present but inert for deployment until both conditions are true:

- The workflow is running on `main`.
- Repository variable `ASTRO_PAGES_CUTOVER_ENABLED` is set to `true`.

Until that variable is set, the Astro workflow only verifies the build. Do not set the cutover variable or alter either deployment path without explicit approval. A cutover must coordinate disabling or gating the Jekyll deployment so both workflows cannot publish competing Pages artifacts.

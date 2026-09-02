## Purpose

Describe the visitor outcome and the narrow scope of this change.

## Published-truth boundary

- [ ] Claims match approved Skratsch source material.
- [ ] Routes, redirects, canonical URLs, and sitemap effects are explicit.
- [ ] Images, downloads, and other static assets resolve correctly.
- [ ] Accessibility and responsive behavior were checked where relevant.

## Verification

- [ ] `npm run verify` passes, or limitations are explicit.
- [ ] Preview or deployment implications are explicit.
- [ ] Rollback is documented.

## Authority boundary

Passing checks and review evidence do not grant merge, publication, deployment,
spending, communications, or production-mutation authority.

## Author handoff

- [ ] Branch is current with `main`.
- [ ] Validation evidence is attached.
- [ ] Positive and single-fault negative fixtures cover the change.
- [ ] Notion is updated where material.
- [ ] `needs-independent-review` is applied.
- [ ] Passing checks are not treated as merge or operational authority.

<!-- skratsch-author-handoff:v1
{"headSha":"FULL_HEAD_SHA","branchCurrent":false,"validationEvidenceAttached":false,"singleFaultFixturesCovered":false,"notionUpdated":false,"independentReviewRequested":false,"noAuthorityClaim":false}
-->

## Selected review attestation

After posting the authenticated maintainer attestation, replace `0` with its
numeric GitHub comment ID. Only that selected comment is evaluated.

<!-- skratsch-review-selection:v1
{"headSha":"FULL_HEAD_SHA","attestationCommentId":0}
-->

Each lane disposition must be exactly `ACCEPT`, `RETURN INCOMPLETE`, or
`BLOCKED`, with an HTTPS, exact-host, non-root evidence record.

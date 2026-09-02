# Governance

## Published truth

The public website presents approved Skratsch claims. Product positioning,
capabilities, status, links, and evidence must remain traceable to approved
source material. A successful build does not by itself authorize publication.

## Solo-maintainer review packet

Pull requests use separate semantic and authority/security review functions,
followed by an authenticated maintainer attestation bound to the exact head SHA.
The organization-owned validator is pinned by full commit SHA and runs with
read-only permissions without checking out pull-request code.

This model separates review functions but does not claim multiple human
principals. Passing review is evidence only; the maintainer retains the separate
merge, publication, deployment, and operational authority decisions.

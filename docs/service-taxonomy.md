# Skratsch Service Taxonomy

Status: accepted working taxonomy  
Decision date: 2026-09-09  
Public navigation: RUN · IMPROVE · BUILD · UNDERSTAND

This taxonomy is the source of truth for the content refresh. It organizes services around the outcome a client needs, not around a long catalog of technologies. Existing public URLs remain in place until a specific rewrite or redirect is approved and verified.

## RUN — operate reliably

Canonical experience: `/run/`

RUN is the managed relationship and operating layer. It is the default destination for organizations that need Skratsch to help keep technology secure, supported, resilient, and working.

### Offers

- Managed relationship
- Operational health review
- Focused stabilization engagement

### Service domains

- Identity and access
- Endpoints and device operations
- Microsoft 365
- Network and connectivity
- Cloud and business applications
- Security operations
- Backup and recovery
- Monitoring and observability
- Support and human operations

### Content rule

Use `/run/` as the primary managed-operations story. Retain `/it-services/` and its children during migration; consolidate or redirect only after their useful detail has been absorbed and route parity has been tested.

## IMPROVE — decide and modernize

Current destination: `/consulting/`

### Offers

- Technology assessment and roadmap
- Security and continuity posture
- Architecture and modernization
- Vendor and platform selection
- Process and workflow improvement
- Fractional technology leadership

### Legacy consolidation

Business continuity, IT policies, IT strategy, new-office planning, remote-work guidance, technology advisor/assessment/selection, and staff augmentation should become modules or proof inside this pillar rather than equal top-level choices.

## BUILD — create and connect

Current destination: `/software-development/`

### Offers

- Custom application development
- Integrations and APIs
- Workflow automation and internal tools
- Application modernization and optimization
- Configuration and customization

### Content rule

Lead with the business constraint and operating outcome. Name implementation technologies only when they help a qualified buyer understand fit, risk, or maintainability.

## UNDERSTAND — make data useful

Current destination: `/data-services/`

### Offers

- Data foundations and quality
- Reporting and dashboards
- Analytics and decision support
- Data-platform modernization
- AI readiness and applied AI

### Content rule

Sequence the story as reliable data, clear reporting, useful decisions, then applied AI. Avoid presenting AI as an isolated product or unsupported transformation claim.

## Migration states

Every legacy service route should receive one explicit state before content work begins:

| State | Meaning |
| --- | --- |
| KEEP | The route and its purpose remain distinct. |
| REWRITE | The route remains but content is rebuilt around the new pillar. |
| MERGE | Useful material moves into a stronger canonical page. |
| REDIRECT | The old route permanently resolves to an approved canonical destination. |
| ARCHIVE | Material remains recoverable but leaves public navigation. |
| REMOVE | Content and route can be removed only after explicit approval and route-impact review. |

## Initial route disposition

| Legacy area | Pillar | Working disposition |
| --- | --- | --- |
| Managed IT and IT support | RUN | MERGE into `/run/`; preserve routes until redirect plan is approved |
| Microsoft 365, endpoints, backup, security, network | RUN | REWRITE as service-domain modules |
| Technology consulting and assessments | IMPROVE | REWRITE |
| IT strategy, policies, continuity, new office, remote work | IMPROVE | MERGE |
| Vendor selection and staff augmentation | IMPROVE | MERGE |
| Software development | BUILD | REWRITE |
| Configuration, customization, optimization | BUILD | MERGE |
| Integration, APIs, and automation | BUILD | REWRITE |
| Data services and reporting | UNDERSTAND | REWRITE |
| Data management and dashboards | UNDERSTAND | MERGE |
| AI readiness and applied AI | UNDERSTAND | REWRITE; publish only supportable claims |

## Governance

- Navigation labels are RUN, IMPROVE, BUILD, and UNDERSTAND.
- Contact remains a utility action, not a fifth capability.
- `/run/` is canonical for managed operations.
- Preserve public URLs until replacement content and redirects are reviewed together.
- Do not invent proof, metrics, customers, testimonials, or operational capabilities.
- Update this document and the relevant Notion decision record in the same change when the taxonomy changes.

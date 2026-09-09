# Skratsch Imagery Matrix

Status: accepted working direction  
Decision date: 2026-09-09  
System: controlled hybrid

The visual system combines technical illustration, interface and system views, and authentic photography. Each image must do a job: explain an operating model, clarify evidence, or establish real-world context.

## Surface matrix

| Surface | Primary treatment | Secondary treatment | Avoid |
| --- | --- | --- | --- |
| Homepage hero | Branded technical/editorial illustration | Authentic operating environment | Generic stock technology scenes |
| Capability hero | Technical illustration or system diagram | Selective real environment | Decorative abstraction with no service meaning |
| Capability explanation | Interface, workflow, architecture, or diagnostic visual | Branded iconography | Repeated stock photography |
| Service-detail page | Restrained technical diagram | Real device, workspace, or system context | Vendor-logo collage as the main story |
| Field note / article | Dark technical explainer hero | Relevant screenshot or diagram | Unrelated editorial stock image |
| Case study / proof | Sanitized screenshot, diagram, or real environment | Authentic people and place | Fabricated dashboards, results, or customers |
| About / team | Authentic photography | Minimal brand framing | AI-generated people presented as real |
| CTA / utility section | Usually no image | Small routed-line or status motif | Extra imagery that competes with the action |

## Selection test

Before adding an image, answer:

1. What does this help the visitor understand?
2. Is the image evidence, explanation, or context?
3. Is it authentic or clearly illustrative?
4. Does it still communicate at mobile size?
5. Can the same result be achieved with layout, type, or a small icon?

If those answers are weak, omit the image.

## Art direction

### Technical illustration

- Use the routed-line, circular-focus, grid, and operating-status language from the brand mark.
- Keep geometry purposeful and sparse.
- Reserve amber for the focal point.
- Use Steel for routes and Signal for verified healthy state.
- Prefer SVG for diagrams and icons.

### Interface and system views

- Show only the information required for the narrative.
- Sanitize client names, domains, credentials, identifiers, and proprietary data.
- Use realistic labels; do not fabricate performance evidence.
- Provide a clear caption explaining what the viewer should notice.

### Photography

- Favor real workspaces, devices, infrastructure, whiteboards, and operating context.
- Use warm, low-contrast light and honest composition.
- Obtain usage rights and record the source.
- Never represent generated people or environments as customer proof.

## Delivery requirements

- Provide meaningful alt text when the image adds information; use empty alt text for decoration.
- Store source, license, owner, approval status, and crop guidance with each production asset.
- Export responsive sizes and modern formats for raster assets.
- Set width and height to reduce layout shift.
- Keep diagrams legible in both dark and light themes.
- Test focal points at mobile, tablet, and desktop widths.

## Current application

- Keep the current homepage hero during this pass.
- Use the new custom SVG capability icons for RUN, IMPROVE, BUILD, and UNDERSTAND.
- Treat the RUN system diagram as the pattern for explanatory visuals.
- Add authentic photography only when approved assets exist.
- Do not add placeholder stock or generated customer imagery.

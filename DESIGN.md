---
name: "Riancom '92"
description: "Industrial presentation system built around real production evidence and precise product information."
colors:
  signal-yellow: "#e3b21b"
  machinery-blue: "#214b63"
  machinery-blue-dark: "#163649"
  mineral: "#f3f3ee"
  paper: "#ffffff"
  aggregate: "#d9dbd6"
  charcoal: "#171a1c"
  charcoal-soft: "#42484c"
  focus-blue: "#0c69a0"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.35rem, 12vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.8rem, 8vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.58
  label:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  structural: "0.35rem"
  field: "0.22rem"
spacing:
  control-x: "1.35rem"
  control-y: "0.8rem"
  page-gutter: "clamp(1.25rem, 4vw, 4.5rem)"
  section: "clamp(5.25rem, 11vw, 10rem)"
components:
  button-primary:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.structural}"
    padding: "{spacing.control-y} {spacing.control-x}"
    height: "3.25rem"
    typography: "{typography.label}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.structural}"
    padding: "{spacing.control-y} {spacing.control-x}"
    height: "3.25rem"
    typography: "{typography.label}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.field}"
    padding: "0.65rem 0.75rem"
    height: "3rem"
    typography: "{typography.body}"
---

# Design System: Riancom '92

## Overview

**Creative North Star: "The Production Specification Sheet"**

Riancom's system feels like a precise production-and-dispatch document brought into a modern website. It is mineral, factual, documentary, restrained, and precise: real blocks, machinery, stock, and trucks carry the visual authority while typography and rules make the information quick to verify.

The interface is spacious without becoming soft. Rectangular photographs, condensed headlines, thin structural rules, and a tightly controlled safety signal create an industrial identity that does not imitate a generic construction template.

**Key Characteristics:**

- Documentary photography leads; decoration never substitutes for evidence.
- Condensed display type bears hierarchy while highly legible body type explains.
- Flat tonal fields and fine rules create structure with almost no shadow.
- Safety yellow is reserved for actions, focus, and compact brand signals.
- Product dimensions and contact paths remain immediately scannable.

## Colors

The palette is drawn from concrete, charcoal, machinery paint, and safety marking, with large mineral fields keeping long pages calm.

### Primary

- **Signal Yellow:** Reserved for primary actions, the compact '92 mark, and focused mobile contact actions.

### Secondary

- **Machinery Blue:** Identifies production, factual links, and industrial content fields.
- **Deep Machinery Blue:** Carries the full-width production surface and dark blue controls.

### Neutral

- **Mineral:** The default page ground and quiet form surface.
- **Paper:** High-contrast controls and reversed actions.
- **Aggregate:** Product information fields and image placeholders.
- **Charcoal:** Primary ink and the contact/footer ground.
- **Soft Charcoal:** Supporting copy on light surfaces.

**The Signal Is Rare Rule.** Safety yellow marks action or identity; it never washes an entire content section.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow and sans-serif fallbacks)  
**Body Font:** Atkinson Hyperlegible (with Segoe UI and sans-serif fallbacks)

**Character:** Display text is compressed and load-bearing, like type on a pallet or dispatch label. Body text stays open and unmistakable at small sizes, particularly on mobile and in the quote form.

### Hierarchy

- **Display:** Hero only; forceful but capped to a readable six-line composition on narrow screens.
- **Headline:** Major section ownership with balanced wrapping.
- **Title:** Product and form titles inside the same condensed family.
- **Body:** Explanations and factual copy, normally constrained to a comfortable reading measure.
- **Label:** Controls, dimensions, navigation, captions, and metadata; bold but not tracked-out.

**The Load-Bearing Headline Rule.** Headings carry hierarchy through width, scale, and weight; do not add decorative eyebrows above them.

## Layout

The layout is mobile-first and uses a fluid page gutter plus a maximum content width of 86rem. The hero changes from a vertical evidence stack to a split copy/photo field at 64rem. Content grids progressively activate at 38rem and 48rem; 90rem only adds quiet outer framing. Section spacing is deliberately generous, while product facts and contact data use tighter ruled rows.

Photographs may run full-bleed inside their structural region. Text never does: it sits in dedicated inner wrappers with meaningful padding. The gallery uses an editorial masonry-like grid without carousel behavior.

## Elevation & Depth

The system is flat by default. Tonal changes, photo edges, and one-pixel rules define layers. The sticky desktop header may gain a soft, low-opacity shadow only after scroll; no card combines a border and ornamental shadow.

**The Flat by Default Rule.** Use a shadow only when state or layering requires it; use field color and rules for ordinary grouping.

## Shapes

Corners are shallow and structural. Media, buttons, and panels use the shared structural radius; fields use the slightly tighter field radius. Pills, oversized rounding, clipped polygons, and ornamental masks do not belong to this system.

## Components

### Buttons

- **Shape:** Wide rectangular action with a shallow corner and a minimum 3.25rem height.
- **Primary:** Signal yellow with charcoal text; hover becomes slightly brighter and more assertive.
- **Secondary:** Transparent with a charcoal rule; hover reverses to charcoal.
- **Focus:** A visible focus-blue outline sits outside the component.

### Cards / Containers

The site avoids generic card grids. Product rows are ledger entries separated by rules; the quality and quote panels are flat tonal fields with deliberate inner padding. Documentary media can touch the edge of its allotted region.

### Inputs / Fields

Inputs are white, square-leaning fields with a dark neutral stroke, explicit label, and at least 3rem height. Focus shifts to machinery blue with a translucent focus-blue ring. Error red appears only after an attempted invalid submission.

### Navigation

Desktop navigation is a single quiet row with one yellow quote action. Mobile navigation opens as a ruled vertical sheet. The fixed mobile contact rail is neutral at rest; hover, keyboard focus, or active touch turns the chosen action safety yellow.

### Trust Band

The trust band is a responsive ruled grid of verified facts. It uses no invented metrics and no decorative iconography.

### Product Ledger

Each product entry combines one title, cautious descriptive copy, verified dimensions when available, and a direct quote action. Unknown technical variants are expressed as a request to confirm availability, never as a fabricated specification.

## Do's and Don'ts

### Do:

- **Do** use authentic production, stock, location, and transport photography as proof.
- **Do** keep phone, WhatsApp, and quote actions reachable in one or two actions.
- **Do** reserve more space above a new section than between its internal facts.
- **Do** write Romanian copy that is direct, factual, and easy to scan.
- **Do** preserve visible focus, 44px touch targets, explicit labels, image dimensions, and reduced-motion support.

### Don't:

- **Don't** introduce invented certifications, statistics, prices, ratings, or delivery guarantees.
- **Don't** replace documentary imagery with gradients, glass, generic icons, or decorative industrial texture.
- **Don't** turn the product ledger into a same-size icon-card grid or a carousel.
- **Don't** add decorative eyebrows, all-caps kickers, gratuitous motion, or a second accent color.
- **Don't** use large radii, heavy shadows, or a SaaS-style component shell.

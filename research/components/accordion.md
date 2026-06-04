# Accordion Registry Draft

Source status: partial. This file is a draft for skill/plugin consumption, not a complete official component spec.

## What Is Confirmed

- Component: Accordion (`17e0ff`)
- Page id: `5207622`
- Component page: `https://elements.sanofidesign.com/557b0250b/p/17e0ff-accordion`
- Tabs captured from the Zeroheight navigation data:
  - Overview / 概述: `2838c3`
  - Behavior / 行为: `609d02`
  - Accessibility / 无障碍: `653a99`
  - Demo / 演示: `45c26d`
  - Writing / 写作: `70ddb2`
- Overview screenshot anatomy labels:
  - 1. Accordion Label
  - 2. Collapse/Expand Button
  - 3. Content
  - 4. Divider

## Anatomy Draft

| Marker | Registry id | Confirmed label | Visible anchor | Prototype role | Status |
|---:|---|---|---|---|---|
| 1 | `accordion_label` | Accordion Label | Accordion Title is Here | Header label shown in the accordion trigger area. | Detail copy not captured |
| 2 | `collapse_expand_button` | Collapse/Expand Button | Chevron icon at the right side of the header | Icon button that toggles expanded and collapsed states. | Detail copy not captured |
| 3 | `content` | Content | Customisable content slot | Expandable panel body containing custom content. | Detail copy not captured |
| 4 | `divider` | Divider | Horizontal separator below content | Visual separator between accordion items or sections. | Detail copy not captured |

## Capture Limitation

The current Chrome incognito page for the Overview URL renders as `This page is private`, and direct Zeroheight API attempts did not return the page blocks:

- `/api/load_page?is_export=false`: HTTP 400
- `/api/styleguide/88458/llms_txt`: HTTP 401

Because of that, the red marker click-through detail text is not captured. The registry intentionally keeps these records as screenshot-confirmed labels plus prototype roles, not as full official guidance.

## Prototype Use

For now, the skill/plugin generator can use this registry to require these four Accordion parts in generated HTML:

- label
- collapse/expand control
- content panel
- divider

The generator should still warn that detailed official anatomy copy is missing until the Overview page can be re-captured while authenticated.

---
storybook_id: components-flex--docs
title: "Components/Flex"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-flex--docs"
import_path: "./src/components/Flex/Flex.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:07:55.000Z
---

# Source: Components/Flex

- Storybook ID: `components-flex--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-flex--docs
- Import path: `./src/components/Flex/Flex.mdx`
- Capture status: `extracted`

# Flex

## Flex is a layout primitive that aligns and spaces children with the Elements
spacing tokens.

## Examples

Horizontal flow

Row direction with equal gap and start alignment.

Column stack

Column direction for vertical layouts such as cards.

Wrapping grid

Wrap items with separate column/row gaps for responsive blocks.

As child

Style a single child element (e.g., list) while preserving semantics.

- First
- Second
- Third

## Anatomy

```
import { Flex } from "@sanofi-accelerator/elements";

export const Example = () => (
<Flex gap="md" align="center" justify="between">
  <div>Alpha</div>
  <div>Beta</div>
  <div>Gamma</div>
</Flex>
);
```

## Spacing tokens

| Token | Value |
| --- | --- |
| none | 0rem |
| 3xs | 0.125rem |
| 2xs | 0.25rem |
| xs | 0.5rem |
| sm | 0.75rem |
| md | 1rem |
| lg | 1.25rem |
| xl | 1.5rem |
| 2xl | 2rem |
| 3xl | 2.5rem |
| 4xl | 3rem |
| 5xl | 4rem |
| 6xl | 8rem |

## API Reference

| Name | Description | Default |
| --- | --- | --- |
| direction | Sets flex-direction. Values: row \| row-reverse \| column \| column-reverse."row""column""row-reverse""column-reverse" | row |
| wrap | Sets flex-wrap. Values: nowrap \| wrap \| wrap-reverse."wrap""nowrap""wrap-reverse" | nowrap |
| align | Controls align-items. Values: start \| center \| end \| baseline \| stretch."center""baseline""start""end""stretch" | stretch |
| justify | Controls justify-content. Values: start \| center \| end \| between \| around \| evenly."center""start""end""between""around""evenly" | start |
| gap | Token-based gap applied on both axes. Values: none \| 3xs \| 2xs \| xs \| sm \| md \| lg \| xl \| 2xl \| 3xl \| 4xl \| 5xl \| 6xl or any CSS length.FlexGapValue | - |
| display | Sets the CSS display property. Values: flex \| inline-flex \| none."none""flex""inline-flex" | flex |
| asChild | Render styles onto the single child instead of a wrapper element (Radix asChild pattern).boolean | false |
| alignContent | Controls align-content. Only applies when wrap is set. Values: start \| center \| end \| between \| around \| evenly \| stretch."center""start""end""stretch""between""around""evenly" | - |
| gapX | Token-based column gap. Same values as gap. Overrides gap for the horizontal axis.FlexGapValue | - |
| gapY | Token-based row gap. Same values as gap. Overrides gap for the vertical axis.FlexGapValue | - |
| flex | Sets the CSS flex shorthand (grow, shrink, basis). Values: 1 \| auto \| none \| initial \| 1 0 200px.stringnumber | - |
| as | An override of the default HTML tag.
Can also be another React component.ElementType | - |

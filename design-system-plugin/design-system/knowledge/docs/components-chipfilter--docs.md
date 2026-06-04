---
storybook_id: components-chipfilter--docs
title: "Components/ChipFilter"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-chipfilter--docs"
import_path: "./src/components/ChipFilter/ChipFilter.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:07:16.092Z
---

# Source: Components/ChipFilter

- Storybook ID: `components-chipfilter--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-chipfilter--docs
- Import path: `./src/components/ChipFilter/ChipFilter.mdx`
- Capture status: `extracted`

# ChipFilter

A chip component used to display selected filters with the ability to remove them.

## Overview

The ChipFilter component is used to display selected filters or tags that can be removed. It supports different sizes, colors, and emphasis styles to match various design contexts.

## API Reference

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| children | string | - | Chip Label |
| onDelete | Callback function when the remove button is clickedMouseEventHandler<HTMLSpanElement> | - |  |
| size | Controls the size of the chip"small""medium" | small | sizeChoose option...smallmedium |
| disabled | Whether the chip is disabledboolean | false |  |
| color | Controls the color scheme of the chip"neutral""branded" | branded | colorChoose option...brandedneutral |
| emphasis | Controls the visual emphasis of the chip"strong""outline""subtle" | subtle | emphasisChoose option...subtlestrongoutline |
| maxWidth | Maximum width in pixels before text truncation (minimum: 50px)number | - |  |
| onWidthCalculated | ((width: number) => void) | - | - |
| className | string | - |  |
| classNames | ChipFilterClassNames | - |  |
| brandTheme | "primary""secondary""tertiary" | - | brandThemeprimarysecondarytertiary |

## When to use

- To display active filters in a filter system
- To show selected tags or categories that can be removed
- In form interfaces where users can select and remove multiple options
- As part of a search interface to display applied search filters

## Accessibility

The ChipFilter component follows the W3C WAI-ARIA guidelines for button patterns:

### Keyboard Interactions

| Key | Description |
| --- | --- |
| Tab | Moves focus to the chip or its remove button |
| Enter / Space | Triggers the remove action when focused |
| Delete / Backspace | Triggers the remove action when chip is focused |
| Escape | Removes focus from the component |

### ARIA Attributes

| Attribute | Description |
| --- | --- |
| role="button" | Identifies the component as an interactive element |
| aria-disabled | Indicates when the chip is disabled |
| aria-label | Provides clear description for the remove button |
| aria-labelledby | Associates the chip with its label |

## Guidelines

- Use ChipFilters to display selected filters or tags that can be removed
- Ensure the label text clearly describes the filter's purpose
- Maintain sufficient spacing between multiple ChipFilters
- Consider using the appropriate color and emphasis based on the context:
  - branded for primary actions or filters
  - neutral for secondary or less prominent filters
- Use consistent sizes within the same group of ChipFilters
- Ensure the maximum width allows for readable truncated text (minimum 50px)

## Resources

- W3C WAI-ARIA Button Pattern
- W3C WAI-ARIA Practices

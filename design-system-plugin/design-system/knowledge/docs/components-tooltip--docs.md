---
storybook_id: components-tooltip--docs
title: "Components/Tooltip"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-tooltip--docs"
import_path: "./src/components/Tooltip/Tooltip.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:11:16.755Z
---

# Source: Components/Tooltip

- Storybook ID: `components-tooltip--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-tooltip--docs
- Import path: `./src/components/Tooltip/Tooltip.mdx`
- Capture status: `extracted`

# Tooltip

## A tooltip is a small container that shows up when you hover over or focus on a
part of a user interface, like a button, or an icon. It gives extra
information but should be used only when really needed and keep the details
brief.

## Example

## Anatomy

```
import { Tooltip, Button, Title, Typography } from "@sanofi-accelerator/elements";

export default () => (
<Tooltip
  position="right-start"
  title="Tooltip Title"
  label="This is the tooltip content."
>
  <Button label="Hover me" />
</Tooltip>
);
```

## API Reference

### Tooltip

| Name | Description | Default |
| --- | --- | --- |
| label* | Content of the TooltipReactNode | - |
| position | Position of the Tooltip"top-start""top""top-end""right-start""right""right-end""bottom-start""bottom""bottom-end""left-start""left""left-end"Show 4 more... | "TooltipPosition.TOP" |
| maxWidth | Set the max-width of the Tooltip contentnumber | 378 |
| tooltipOffset | Distance in pixels from trigger element.number | 8 |
| arrowPadding | Padding for the tooltip arrow from edges.number | 10 |
| isOpen | Programmatically opens the Tooltipboolean | - |
| inverse | Set the background-color to darkboolean | false |
| delay | Set a delay before Tooltip opens (in ms)number \| { open?: number; close?: number; } \| undefined | 0 |
| shiftOffset | Fine-tune position shifting for edge cases.{ mainAxis?: number; crossAxis?: number; } \| undefined |  |
| classNames | CSS class names for component parts.{ triggerWrapper?: string; tooltipWrapper?: string; titleWrapper?: string \| undefined; labelWrapper?: string \| undefined; arrow?: string \| undefined; } \| undefined | - |
| preventFocusableChildren | If true, the Tooltip will make its children focusable.boolean | false |
| capturePointer | If false, pointer events pass through the tooltip (e.g. scrolling)boolean | true |
| title | Title of the Tooltip- | - |

## Accessibility

Tooltip will open when focusing the trigger with keyboard.

Pressing Escape when focused will close the Tooltip.

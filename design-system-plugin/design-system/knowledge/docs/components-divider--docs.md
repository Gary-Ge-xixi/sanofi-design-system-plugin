---
storybook_id: components-divider--docs
title: "Components/Divider"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-divider--docs"
import_path: "./src/components/Divider/Divider.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:07:43.263Z
---

# Source: Components/Divider

- Storybook ID: `components-divider--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-divider--docs
- Import path: `./src/components/Divider/Divider.mdx`
- Capture status: `extracted`

# Divider

## Divider is a thin line for grouping elements or separates different content.

## Example

## Anatomy

```
import { Divider } from "@sanofi-accelerator/elements";

const Component = () => (
  <Divider />
);
```

## API Reference

### Divider

| Name | Description | Default |
| --- | --- | --- |
| orientation | The Divider orientation"horizontal""vertical" | "DividerOrientation.HORIZONTAL" |
| variant | The Divider variant"strong""subtle""inverse""default" | "DividerStyles.DEFAULT" |
| fullWidth | If true, the divider will take the full width of the parent containerboolean | false |
| width | Size of the divider (value in rem)number | - |
| className | Additional CSS class for the divider.string | - |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |

### Inverse

### Custom Width

### Vertical

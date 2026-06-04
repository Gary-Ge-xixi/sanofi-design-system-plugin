---
storybook_id: components-checkbox--docs
title: "Components/Checkbox"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-checkbox--docs"
import_path: "./src/components/Checkbox/Checkbox.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:07:00.466Z
---

# Source: Components/Checkbox

- Storybook ID: `components-checkbox--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-checkbox--docs
- Import path: `./src/components/Checkbox/Checkbox.mdx`
- Capture status: `extracted`

# Checkbox

## Checkboxes allow the user to select one or more items from a set.

## Example

## Anatomy

```
import { Checkbox, CheckboxSize } from "@sanofi-accelerator/elements";

const Component = () => (
  <Checkbox
    label="Checkbox"
    checkboxSize={CheckboxSize.MEDIUM}
    color={CheckboxColor.BRANDED}
    value="checkbox"
  />
);
```

## API Reference

### Checkbox

| Name | Description | Default |
| --- | --- | --- |
| checkboxSize | The checkbox size"small""medium""large" | "CheckboxSize.MEDIUM" |
| color | The checkbox color variantstring | - |
| label | Label text displayed next to the checkbox.ReactNode | - |
| disabled | boolean | - |
| indeterminate | Shows indeterminate (mixed) state.
Use for "select all" when partially selected.boolean | false |
| defaultChecked | boolean | - |
| onClick | function | - |
| onChange | function | - |
| subtext | Optional subtext below the labelReactNode | - |
| classNames | Custom CSS classes for checkbox elements.{ container?: string; input?: string; icon?: string \| undefined; label?: string \| undefined; subtext?: string \| undefined; } \| undefined | - |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |
| noValidate | Disables browser's native validation.boolean | false |
| disableAnimation | Disables the check/uncheck animation.boolean | false |
| checked | The checkbox checked state- | - |

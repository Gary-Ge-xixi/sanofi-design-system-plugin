---
storybook_id: components-switch--docs
title: "Components/Switch"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-switch--docs"
import_path: "./src/components/Switch/Switch.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:10:41.135Z
---

# Source: Components/Switch

- Storybook ID: `components-switch--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-switch--docs
- Import path: `./src/components/Switch/Switch.mdx`
- Capture status: `extracted`

# Switch

## Switch is a component used to toggle between two states.

## Example

Switch

## Anatomy

```
import { Switch } from "@sanofi-accelerator/elements";

const Component = () => (
  <Switch label="Switch" />
);
```

## API Reference

### Switch

| Name | Description | Default |
| --- | --- | --- |
| label* | Label text displayed next to the switch.
Required for accessibility.string | - |
| disabled | Disables the switch interaction.boolean | false |
| size | Size of the switch."small""medium""large" | "SwitchSize.MEDIUM" |
| labelPosition | Position of the label relative to the switch."start""end" | "SwitchLabelPosition.END" |
| fullWidth | Expands to fill container width with label and switch at opposite ends.boolean | false |
| defaultChecked | Initial state (uncontrolled mode).boolean | false |
| id | Unique identifier for the switch.string | - |
| checked | Current state (controlled mode).boolean | - |
| onChange | Callback fired when the switch state changes.((value: boolean) => void) | - |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |

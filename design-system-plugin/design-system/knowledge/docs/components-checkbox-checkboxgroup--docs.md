---
storybook_id: components-checkbox-checkboxgroup--docs
title: "Components/Checkbox/CheckboxGroup"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-checkbox-checkboxgroup--docs"
import_path: "./src/components/CheckboxGroup/CheckboxGroup.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:06:56.091Z
---

# Source: Components/Checkbox/CheckboxGroup

- Storybook ID: `components-checkbox-checkboxgroup--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-checkbox-checkboxgroup--docs
- Import path: `./src/components/CheckboxGroup/CheckboxGroup.mdx`
- Capture status: `extracted`

# CheckboxGroup

## CheckboxGroup is a helpful wrapper used to group Checkbox components.

## Example

Optional Caption

Error Message

## Anatomy

```
import { CheckboxGroup, Checkbox, Orientation } from "@sanofi-accelerator/elements";

const Component = () => (
  <CheckboxGroup
    title="Checkbox Group Title"
    caption="Optional Caption"
    orientation={Orientation.VERTICAL}
    error="Optional Error Message"
  >
    <Checkbox label="Checkbox A" value="1' />
    <Checkbox label="Checkbox B" value="2' />
    <Checkbox label="Checkbox C" value="3' />
    <Checkbox label="Checkbox D" value="4' />
    <Checkbox label="Checkbox E" value="5' />
    <Checkbox label="Checkbox F" value="6' />
  </CheckboxGroup>
);
```

## API Reference

### CheckboxGroup

| Name | Description | Default |
| --- | --- | --- |
| title | Group title displayed above the options.string | - |
| caption | Helper text displayed below the title.string | - |
| error | Error message displayed when validation fails.string | - |
| children | Checkbox components to render in the group.ReactNode | - |
| orientation | Layout direction of the checkbox options."horizontal""vertical" | "Orientation.VERTICAL" |
| checkboxesSize | Size applied to all Checkbox children."small""medium""large" | "CheckboxSize.MEDIUM" |
| checkboxesColor | Color applied to all Checkbox children."neutral""branded" | "CheckboxColor.BRANDED" |

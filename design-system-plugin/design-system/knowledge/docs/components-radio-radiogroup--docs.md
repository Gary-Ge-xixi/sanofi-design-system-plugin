---
storybook_id: components-radio-radiogroup--docs
title: "Components/Radio/RadioGroup"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-radio-radiogroup--docs"
import_path: "./src/components/RadioGroup/RadioGroup.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:10:18.532Z
---

# Source: Components/Radio/RadioGroup

- Storybook ID: `components-radio-radiogroup--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-radio-radiogroup--docs
- Import path: `./src/components/RadioGroup/RadioGroup.mdx`
- Capture status: `extracted`

# RadioGroup

## RadioGroup is a helpful wrapper used to group Radio components.

## Example

## Anatomy

```
import { RadioGroup, Radio, Orientation } from "@sanofi-accelerator/elements";

const Component = () => (
  <RadioGroup
    title="Radio Group Title"
    caption="Optional Caption"
    orientation={Orientation.HORIZONTAL}
    errorMessage="Optional Error Message"
  >
    <Radio label="Radio 1" value="1" />
    <Radio label="Radio 2" value="2" />
    <Radio label="Radio 3" value="3" />
  </RadioGroup>
);
```

## API Reference

### RadioGroup

| Name | Description | Default |
| --- | --- | --- |
| children | Radio components to render in the group.ReactNode | - |
| title | Group title displayed above the options.string | - |
| id | string | - |
| orientation | Layout direction of the radio options."horizontal""vertical" | "Orientation.VERTICAL" |
| name | Form field name for all radios in the group.
Required for form submission.string | - |
| caption | Helper text displayed below the title.string | - |
| errorMessage | Error message displayed when validation fails.
Shows error styling when present.string | - |
| radioSize | Size applied to all Radio children."small""medium""large" | "RadioSize.MEDIUM" |
| radioColor | Color applied to all Radio children."neutral""branded" | "RadioColor.BRANDED" |
| value | Currently selected value (controlled mode).string | - |
| onChange | Callback fired when selection changes.ChangeEventHandler<HTMLInputElement> | - |
| onClick | - | - |

---
storybook_id: components-radio--docs
title: "Components/Radio"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-radio--docs"
import_path: "./src/components/Radio/Radio.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:10:14.822Z
---

# Source: Components/Radio

- Storybook ID: `components-radio--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-radio--docs
- Import path: `./src/components/Radio/Radio.mdx`
- Capture status: `extracted`

# Radio

## Radio buttons allow users to select one option from a set. Use radio buttons
for exclusive selection if you think that the user needs to see all available
options side-by-side.

## Example

## Anatomy

```
import { Radio, RadioSize } from "@sanofi-accelerator/elements";

const Component = () => (
  <Radio
    label="Radio"
    radioSize={RadioSize.MEDIUM}
    value="radio"
  />
);
```

## API Reference

### Radio

| Name | Description | Default |
| --- | --- | --- |
| sizeRadio | The radio size"small""medium""large" | "RadioSize.MEDIUM" |
| color | The radio color variantstring | - |
| label | Label text displayed next to the radio.ReactNode | - |
| disabled | boolean | - |
| defaultChecked | boolean | - |
| onClick | function | - |
| onChange | function | - |
| subtext | Optional subtext below the labelReactNode | - |
| classNames | Custom CSS classes for radio elements.RadioClassesProps | - |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |
| disableAnimation | Disable animation for this radio instanceboolean | false |
| checked | The radio checked state- | - |

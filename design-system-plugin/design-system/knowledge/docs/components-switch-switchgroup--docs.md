---
storybook_id: components-switch-switchgroup--docs
title: "Components/Switch/SwitchGroup"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-switch-switchgroup--docs"
import_path: "./src/components/SwitchGroup/SwitchGroup.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:10:44.848Z
---

# Source: Components/Switch/SwitchGroup

- Storybook ID: `components-switch-switchgroup--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-switch-switchgroup--docs
- Import path: `./src/components/SwitchGroup/SwitchGroup.mdx`
- Capture status: `extracted`

# SwitchGroup

## SwitchGroup is a helpful wrapper used to group Switch components.

## Example

Optional Caption

Switch A

Switch B

Switch C

Switch D

Switch E

Switch F

Error Message

## Anatomy

```
import { SwitchGroup, Switch, SwitchSize } from "@sanofi-accelerator/elements";

const Component = () => (
  <SwitchGroup
    title="Switch Group Title"
    caption="Optional Caption"
    error="Optional Error Message"
    switchesSize={SwitchSize.MEDIUM}
  >
    <Switch label="Checkbox A" />
    <Switch label="Checkbox B" />
    <Switch label="Checkbox C" />
    <Switch label="Checkbox D" />
    <Switch label="Checkbox E" />
    <Switch label="Checkbox F" />
  </SwitchGroup>
);
```

## API Reference

### SwitchGroup

| Name | Description | Default |
| --- | --- | --- |
| title | Group title displayed above the switches.string | - |
| caption | Helper text displayed below the title.string | - |
| error | Error message displayed when validation fails.string | - |
| children | Switch components to render in the group.ReactNode | - |
| switchesSize | Size applied to all Switch children."small""medium""large" | "SwitchSize.MEDIUM" |

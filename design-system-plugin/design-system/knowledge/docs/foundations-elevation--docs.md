---
storybook_id: foundations-elevation--docs
title: "Foundations/Elevation"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/foundations-elevation--docs"
import_path: "./src/docs/5-Elevation.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:12:03.641Z
---

# Source: Foundations/Elevation

- Storybook ID: `foundations-elevation--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/foundations-elevation--docs
- Import path: `./src/docs/5-Elevation.mdx`
- Capture status: `extracted`

# Elevation

Elevation tokens provide consistent box-shadow values to create visual depth and hierarchy between layered UI elements.
Each level increases the shadow offset and blur radius to convey a stronger sense of elevation.

## Tokens

```
--elements-core-elevation-01: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
--elements-core-elevation-02: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
--elements-core-elevation-03: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
--elements-core-elevation-04: 0 6px 24px 0 rgba(0, 0, 0, 0.2);
--elements-core-elevation-05: 0 12px 32px 0 rgba(0, 0, 0, 0.2);
```

## Usage Guidelines

| Level | Token                          | Use case                                                     |
| ----- | ------------------------------ | ------------------------------------------------------------ |
| 01    | --elements-core-elevation-01 | Subtle lift — cards at rest, dividers                        |
| 02    | --elements-core-elevation-02 | Default interactive — dropdowns, menus, headers              |
| 03    | --elements-core-elevation-03 | Raised — floating action buttons, sticky elements            |
| 04    | --elements-core-elevation-04 | Overlay — modals, dialogs                                    |
| 05    | --elements-core-elevation-05 | Top layer — toasts, notifications requiring maximum emphasis |

## Components Using Elevation

The following components use --elements-core-elevation-02:

- NavigationHeader — persistent shadow on the header bar
- ToastBar — floating notification shadow
- Menu — dropdown menu shadow
- DatePicker / Calendar — calendar popover shadow

## How to Apply

```
// In your component's .module.scss file
.card {
  box-shadow: var(--elements-core-elevation-01);
}

.dropdown {
  box-shadow: var(--elements-core-elevation-02);
}

.modal {
  box-shadow: var(--elements-core-elevation-04);
}
```

> Best practice: Always use elevation tokens instead of hardcoded box-shadow values. This ensures consistency across the design system and makes future adjustments easier.

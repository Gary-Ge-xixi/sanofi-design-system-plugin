---
storybook_id: components-loadingspinner--docs
title: "Components/LoadingSpinner"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-loadingspinner--docs"
import_path: "./src/components/LoadingSpinner/LoadingSpinner.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:08:42.824Z
---

# Source: Components/LoadingSpinner

- Storybook ID: `components-loadingspinner--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-loadingspinner--docs
- Import path: `./src/components/LoadingSpinner/LoadingSpinner.mdx`
- Capture status: `extracted`

# LoadingSpinner

## A loading spinner indicates that content is being loaded or processed. It
provides visual feedback to users during asynchronous operations, helping them
understand that the application is working and not frozen.

## Anatomy

```
import { LoadingSpinner, LoadingSpinnerVariant } from "@sanofi-accelerator/elements";

export default () => (
<LoadingSpinner
  variant={LoadingSpinnerVariant.CLASSIC}  // Use LoadingSpinnerVariant.CLASSIC or LoadingSpinnerVariant.SANOFI_DOT
  size="medium"
  label="Loading..."
  labelPosition="bottom"
  inverse={false}
/>
);
```

## Examples

### Classic Spinner

Loading ...

### Sanofi Dot Spinner

Loading ...

## API Reference

### LoadingSpinner

| Name | Description | Default |
| --- | --- | --- |
| variant | Animation style variant."classic""sanofiDot" | "LoadingSpinnerVariant.CLASSIC" |
| size | Size of the spinner."small""medium""large" | "LoadingSpinnerSize.MEDIUM" |
| label | Visible text label displayed with the spinner.string | - |
| labelPosition | Position of the visible label relative to spinner."end""bottom" | "LoadingSpinnerLabelPosition.BOTTOM" |
| inverse | Applies inverse colors for dark backgrounds.boolean | false |
| labelA11y | Accessible label for screen readers.
Use when no visible label is shown.string | - |
| className | Additional CSS class for the spinner container.string | - |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |
| data-testid | Test ID for automated testing.string | - |

## Accessibility

The LoadingSpinner component follows ARIA best practices for loading indicators:

- Uses role="status" to indicate its purpose to assistive technologies
- When a labelA11y prop is provided, it's read by screen readers to indicate the loading state. Here you might want to provide a more verbose message than the label prop, for example "Loading more posts...".

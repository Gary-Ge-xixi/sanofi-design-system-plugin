---
storybook_id: components-textinput--docs
title: "Components/TextInput"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-textinput--docs"
import_path: "./src/components/TextInput/TextInput.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:11:00.270Z
---

# Source: Components/TextInput

- Storybook ID: `components-textinput--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-textinput--docs
- Import path: `./src/components/TextInput/TextInput.mdx`
- Capture status: `extracted`

# TextInput

## The TextInput component is used to capture text data from the
user.

## Example

Text Input (Optional)

This is a subtext

### Icons and behaviors handled by input type

Specific icons and behaviors are handled by elements according to the input type :

#### type = "password"

Text Input (Optional)

This is a subtext

#### type = "email"

Text Input (Optional)

This is a subtext

#### type = "tel"

Text Input (Optional)

This is a subtext

## Anatomy

```
import { TextInput, FormControlState, InputSize } from "@sanofi-accelerator/elements";

const Component = () => (
  <TextInput
    id="text-input"
    label="Text Input"
    placeholder="Placeholder"
    size={InputSize.LARGE} // or InputSize.MEDIUM
    state={FormControlState.DEFAULT} // or FormControlState.ERROR or FormControlState.SUCCESS
    subText="This is a subtext"
    type="text"
  />
);
```

## API Reference

### TextInput

| Name | Description | Default |
| --- | --- | --- |
| id | string | - |
| label | Label text displayed above the input.
Provides accessible name for the input.string | - |
| subText | Helper or error text displayed below the input.
Can be a string or React node for rich content.ReactNode | - |
| type | text, password, email, number or tel"number" \| "email" \| "image" \| "search" \| "hidden" \| "color" \| "button" \| "time" \| "text" \| (string & {}) \| "tel" \| "url" \| "date" \| "reset" \| "datetime-local" \| "file" \| "month" \| "password" \| "week" | text |
| state | Validation state of the input.
Controls visual styling and icon display."success""error""default" | "FormControlState.DEFAULT" |
| inverse | Applies inverse styling for use on dark backgrounds.boolean | false |
| disabled | boolean | - |
| required | boolean | - |
| placeholder | string | - |
| size | Input size"small""medium""large" | "InputSize.LARGE" |
| filledStateIcon | Uses filled (solid) icons for validation states instead of outlined.boolean | false |
| optionalMessageI18n | Custom text for the "(Optional)" label suffix.
Use for internationalization when field is not required.string | - |
| classNames | Custom CSS classes for input sections.({ iconWrapperBefore?: string; iconWrapperAfter?: string; input?: string \| undefined; } & { wrapper?: string \| undefined; label?: string \| undefined; subText?: string \| undefined; }) \| undefined | - |
| labelEndSection | Custom content rendered at the end of the label row.
Use for tooltips, info icons, or character counters.ReactNode | - |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |
| noValidate | Disables browser's native validation.
Use when implementing custom validation logic.boolean | false |
| iconBefore | ReactNode | - |
| iconAfter | ReactNode | - |
| isFocused | boolean | - |
| onChange | - | - |

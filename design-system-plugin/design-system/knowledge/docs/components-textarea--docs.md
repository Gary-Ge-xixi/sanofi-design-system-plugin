---
storybook_id: components-textarea--docs
title: "Components/TextArea"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-textarea--docs"
import_path: "./src/components/TextArea/TextArea.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:10:56.104Z
---

# Source: Components/TextArea

- Storybook ID: `components-textarea--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-textarea--docs
- Import path: `./src/components/TextArea/TextArea.mdx`
- Capture status: `extracted`

# TextArea Component

## A textarea field allows users to enter any combination of letters, numbers, or symbols in a container in multiple lines. Users are allowed to enter any sizable amount of characters typically in a free-form. The width and height of the text area container can be controlled by users if a larger display view is required.

## Example

Text Area (Optional)

0/240

This is a helper text

## Anatomy

```
import { TextArea, FormControlState } from "@sanofi-accelerator/elements";

const Example = () => (
  <TextArea
    label="Example Label"
    placeholder="Enter text here"
    required
    showCharacterCount
    state={FormControlState.DEFAULT}
    subText="Helper text"
  />
);
```

## API Reference

| Name | Description | Default |
| --- | --- | --- |
| id | string | - |
| label* | Label text displayed above the textarea.
Required for accessibility.string | - |
| subText | Helper or error text displayed below the textarea.string | - |
| state | Validation state controlling visual styling."success""error""default" | "FormControlState.DEFAULT" |
| inverse | Applies inverse styling for dark backgrounds.boolean | false |
| disabled | boolean | - |
| required | boolean | - |
| placeholder | string | - |
| maxLength | number | - |
| showCharacterCount | Shows character count when maxLength is set.
Displays "X / maxLength" below the textarea.boolean | false |
| size | Size variant of the textarea."small""medium""large" | "TextAreaSize.LARGE" |
| filledStateIcon | Uses filled (solid) icons for validation states.boolean | false |
| onBlur | Callback fired when textarea loses focus.FocusEventHandler<HTMLTextAreaElement> | - |
| optionalMessageI18n | Custom text for "(Optional)" label suffix.
Use for internationalization.string | - |
| classNames | Custom CSS classes for textarea elements.({ iconWrapperBefore?: string; iconWrapperAfter?: string; input?: string \| undefined; } & { wrapper?: string \| undefined; label?: string \| undefined; subText?: string \| undefined; }) \| undefined | - |
| labelEndSection | Content rendered at the end of the label row.
Use for tooltips or info icons.ReactNode | - |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |
| charCountHandler | ((count: number) => void) | - |
| data-testid | string | - |

# More examples

## Success

Text Area (Optional)

This is a successful helper text

## Inverse

Text Area (Optional)

This is a helper text

## With tooltip

Text Area (Optional)

0/240

This is a helper text

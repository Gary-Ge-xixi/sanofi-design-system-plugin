---
storybook_id: components-select--docs
title: "Components/Select"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-select--docs"
import_path: "./src/components/Select/Select.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:10:26.156Z
---

# Source: Components/Select

- Storybook ID: `components-select--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-select--docs
- Import path: `./src/components/Select/Select.mdx`
- Capture status: `extracted`

# Select Component

## Dropdown selects, also known as dropdown menus, are user interface elements
used to present a list of options in a compact form. Users can choose a single
option from the list, making dropdown selects suitable for situations where
space needs to be conserved or when a long list of choices is available.See the WAI-ARIA Select Pattern

## Example

Select (Optional)

Helper text appears below

## Anatomy

```
import { Select, FormControlState, InputSize } from "@sanofi-accelerator/elements";

export const Component = () => (
    <Select
      id="select"
      label="Select"
      placeholder="Select an option"
      subText="This is a subtext"
      state={FormControlState.DEFAULT}
      inverse={false}
      disabled={false}
      required={false}
      multiple={false}
      size={InputSize.LARGE}
      maxItemsVisible={3}
      options={[
        { value: "banana", label: "Banana" },
        { value: "cherry", label: "Cherry" },
        { value: "apple", label: "Apple" },
        { value: "blueberry", label: "Blueberry" },
        { value: "orange", label: "Orange" },
        { value: "strawberry", label: "Strawberry" },
        { value: "raspberry", label: "Raspberry" },
        { value: "watermelon", label: "Watermelon" },
        { value: "pineapple", label: "Pineapple" },
        { value: "kiwi", label: "Kiwi" },
      ]}
    />
),
```

## API Reference

| Name | Description | Default |
| --- | --- | --- |
| id | string | - |
| label | Label text displayed above or beside the select.
Provides accessible name for the input.string | - |
| placeholder | Placeholder text shown when no value is selected.string | - |
| subText | Helper or error text displayed below the select.string | - |
| state | Validation state of the select.
Use with subText to show error or success messages."success""error""default" | - |
| inverse | Applies inverse styling for use on dark backgrounds.boolean | false |
| disabled | boolean | - |
| required | boolean | - |
| multiple | Enables multiple selection mode.
When true, value becomes string[] and multiple options can be selected.boolean | false |
| native | Uses the browser's native select element instead of custom dropdown.
Better for mobile devices and accessibility edge cases.boolean | false |
| size | Size variant of the select input."small""medium""large" | "\"medium\"" |
| labelPosition | Position of the label relative to the select input."left""top" | "SelectLabelPosition.TOP" |
| maxItemsVisible | Maximum number of visible items in the dropdown before scrolling.number | 6 |
| options* | Array of selectable options.
Each option must have a unique value and display label.Option[] | - |
| value | Currently selected value(s).Single mode: stringMultiple mode: string[]string \| string[] | - |
| onChange | Callback fired when selection changes.((event: SelectChangeEvent<Multiple extends true ? string[] : string \| null>) => void) | - |
| noSortOptions | Disables alphabetical sorting of options.boolean | false |
| classNames | Custom CSS classes for select sections.({ iconWrapperBefore?: string; iconWrapperAfter?: string; input?: string \| undefined; } & { wrapper?: string \| undefined; label?: string \| undefined; subText?: string \| undefined; }) \| undefined | - |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | - |
| defaultValue | string \| string[] | - |
| filledStateIcon | Whether to use filled variant for state icons (error/success).boolean | false |
| optionalMessageI18n | The Design System good practice is to add the word "Optional" to the label
when the field is optional. Element only handle english.
If you want to use another language, you can use this prop to override the
default message and translate "Optional" in the language of your choice.string | - |
| ref | Ref<HTMLSelectElement> | - |

## Accessibility

The Select component is built with accessibility in mind, ensuring keyboard navigability and screen reader compatibility.
It allows users to easily open the menu and switch between items to access content in a way that adheres to accessibility standards.

See the WAI-ARIA Select Pattern

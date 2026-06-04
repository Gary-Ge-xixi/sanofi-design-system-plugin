---
storybook_id: components-searchinput--docs
title: "Components/SearchInput"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-searchinput--docs"
import_path: "./src/components/SearchInput/SearchInput.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:10:22.377Z
---

# Source: Components/SearchInput

- Storybook ID: `components-searchinput--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-searchinput--docs
- Import path: `./src/components/SearchInput/SearchInput.mdx`
- Capture status: `extracted`

# SearchInput Component

## The SearchInput component is a user-friendly, interactive search field designed for efficient text input and search functionality. It includes an integrated search icon, clear button functionality, and customizable styles and behaviors. The component supports two variants: default (with clear functionality) and submit (with dedicated submit button).

## Examples

### Default Variant

Search (Optional)

### Submit Variant

The submit variant includes a dedicated submit button that allows users to trigger search actions. The button is disabled when the input is empty and becomes enabled when there's text to search. You can still use the iconAfter prop to add custom icons alongside the submit functionality.

Search (Optional)

### Submit Variant with Custom Icon

This example shows how the submit variant preserves the existing iconAfter functionality, allowing you to add custom icons (like visibility toggles) while maintaining the submit button.

Search (Optional)

## Anatomy

```
import { SearchInput, SearchInputVariant } from "@sanofi-accelerator/elements";

// Default variant - with clear functionality
const DefaultExample = () => (
  <SearchInput
    variant="default" // Optional - this is the default
    placeholder="Search here"
    onChange={handleChange}
    onClear={handleClear}
  />
);

// Submit variant - with submit button
const SubmitExample = () => (
  <SearchInput
    variant={SearchInputVariant.SUBMIT}
    placeholder="Search here"
    onChange={handleChange}
    onClear={handleClear}
    onSearch={handleSearch}
    ariaSubmitLabel="Submit search"
  />
);

// Submit variant with custom icon - preserves iconAfter functionality
const SubmitWithCustomIcon = () => (
  <SearchInput
    variant={SearchInputVariant.SUBMIT}
    placeholder="Search here"
    iconAfter={<Icon name={IconName.VISIBILITY} />}
    onChange={handleChange}
    onClear={handleClear}
    onSearch={handleSearch}
    ariaSubmitLabel="Submit search"
  />
);

function handleChange(e) {
  // handle input change
}

function handleClear() {
  // handle clear action
}

function handleSearch(value) {
  // handle search action with search value
  console.log('Searching for:', value);
}
```

## API Reference

| Name | Description | Default |
| --- | --- | --- |
| label | Label text displayed above the input.
Provides accessible name for the input.string | - |
| placeholder | string | - |
| inverse | Applies inverse styling for use on dark backgrounds.boolean | false |
| disabled | boolean | - |
| state | Validation state of the input.
Controls visual styling and icon display."success""error""default" | - |
| type | HTML input type attribute.
Excluded types: checkbox, radio, range, submit (use dedicated components)."number" \| "email" \| "image" \| "search" \| "hidden" \| "color" \| "button" \| "time" \| "text" \| (string & {}) \| "tel" \| "url" \| "date" \| "reset" \| "datetime-local" \| "file" \| "month" \| "password" \| "week" | "text" |
| size | Size of the input"small""medium""large" | "\"medium\"" |
| aria-label | string | - |
| ariaClearInputLabel | Accessible label for the clear button.string | "\"Clear search\"" |
| variant | Variant of the search input"submit""default" | "SearchInputVariant.DEFAULT" |
| ariaSubmitLabel | Accessible label for the submit button.
Only used with SUBMIT variant.string | "\"Submit search\"" |
| onChange | Callback fired on input value change.ChangeEventHandler<HTMLInputElement> | - |
| onClear | Callback fired when clear button is clicked.(() => void) | - |
| onSearch | Callback fired when search is submitted.
For DEFAULT variant: triggered on Enter key.
For SUBMIT variant: triggered on button click or Enter key.((value: string) => void) | - |
| submitButton | Custom submit button element.
Only used with SUBMIT variant.ReactNode | - |
| optionalMessageI18n | Custom text for the "(Optional)" label suffix.
Use for internationalization when field is not required.string | - |
| subText | Helper or error text displayed below the input.
Can be a string or React node for rich content.ReactNode | - |
| classNames | Custom CSS classes for input sections.({ iconWrapperBefore?: string; iconWrapperAfter?: string; input?: string \| undefined; } & { wrapper?: string \| undefined; label?: string \| undefined; subText?: string \| undefined; }) \| undefined | - |
| labelEndSection | Custom content rendered at the end of the label row.
Use for tooltips, info icons, or character counters.ReactNode | - |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | - |
| noValidate | Disables browser's native validation.
Use when implementing custom validation logic.boolean | false |
| filledStateIcon | Uses filled (solid) icons for validation states instead of outlined.boolean | false |
| iconBefore | ReactNode | - |
| iconAfter | ReactNode | - |
| isFocused | boolean | - |

## Accessibility

The SearchInput component is designed for full accessibility, including keyboard navigation. The clear button is focusable and can be activated using the Enter or Space key, ensuring a seamless experience for users with different accessibility needs.

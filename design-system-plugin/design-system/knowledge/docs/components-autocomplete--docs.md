---
storybook_id: components-autocomplete--docs
title: "Components/Autocomplete"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-autocomplete--docs"
import_path: "./src/components/Autocomplete/Autocomplete.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:05:33.661Z
---

# Source: Components/Autocomplete

- Storybook ID: `components-autocomplete--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-autocomplete--docs
- Import path: `./src/components/Autocomplete/Autocomplete.mdx`
- Capture status: `extracted`

# Autocomplete

## The Autocomplete component is a text input that shows suggestions as the user types.
It is useful when the user needs to select one or more option from a long list of options.

## Example

Autocomplete (Optional)

## Tooltips for Long Labels

When option labels are long and get truncated in the dropdown, you can enable tooltips to show the full text on hover:

Autocomplete (Optional)

```
import { Autocomplete, FormControlState, InputSize, TooltipPosition } from "@sanofi-accelerator/elements";

export default () => (
<Autocomplete
  id="autocomplete"
  label="Autocomplete"
  placeholder="Type something"
  options={[
    { value: "option1", label: "This is a very long option label that will be truncated" },
    { value: "option2", label: "Another extremely long option label that demonstrates tooltip functionality" },
  ]}
  showTooltips={true}
  tooltipPosition={TooltipPosition.TOP}
/>
);
```

## Anatomy

```
import { Autocomplete, FormControlState, InputSize } from "@sanofi-accelerator/elements";

export default () => (
<Autocomplete
  id="autocomplete"
  label="Autocomplete"
  placeholder="Type something"
  subText="This is a subtext"
  state={FormControlState.DEFAULT}
  inverse={false}
  disabled={false}
  required={false}
  multiple={false}
  size={InputSize.LARGE}
  maxItemsVisible={3}
  options={[
      { value: "afghanistan", label: "Afghanistan" },
      { value: "albania", label: "Albania" },
      { value: "algeria", label: "Algeria" },
      .......,
      .......,
      .......,
  ]}
/>
);
```

## Filter function

You can inject any filter function to manage how to option will be filtered according to the search text.
The function receive 2 arguments: first the option to filter, second the search text.

The default filter function is the following one :

```
function startsWithFilterFunction(option: Option, searchValue: string) {
return option.label.toLowerCase().startsWith(searchValue.toLowerCase());
}
```

For a more fuzzy approach you can use the following function for example :

```
function includesFilterFunction(option: Option, searchValue: string) {
return option.label.toLowerCase().includes(searchValue.toLowerCase());
}
```

## External Search Control

For advanced search functionality like fuzzy search, you can take control of the filtering process by providing external searchedOptions and tracking search text changes with onSearchTextChange.

```
import Fuse from "fuse.js";

const MyAutocomplete = () => {
const [searchText, setSearchText] = useState("");
const [searchedOptions, setSearchedOptions] = useState(options);

const fuse = useMemo(() => new Fuse(options, {
keys: ["label"],
threshold: 0.3
}), [options]);

const handleSearchTextChange = useCallback((newSearchText: string) => {
setSearchText(newSearchText);

  if (newSearchText.trim()) {
    const results = fuse.search(newSearchText);
    const filteredOptions = results.map(result => result.item);
    setSearchedOptions(filteredOptions);
  } else {
    setSearchedOptions(options);
  }

}, [fuse, options]);

return (

<Autocomplete
options={options}
searchedOptions={searchedOptions}
onSearchTextChange={handleSearchTextChange}
/>
); };
```

This approach gives you full control over the search algorithm while maintaining the component's UI behavior.

## Async Search

The Autocomplete supports fetching options from a remote API. The simplest approach is the onAsyncSearch prop: you provide a function that returns a Promise<Option[]> and the component handles debouncing, loading state, error state, and result display internally.

### Example

Search Countries (Async) (Optional)

### Usage

```
import { Autocomplete } from "@sanofi-accelerator/elements";

export default () => (
<Autocomplete
  id="autocomplete-async"
  label="Search Countries"
  placeholder="Type something"
  options={[]}
  onAsyncSearch={async (searchText) => {
    const res = await fetch(`/api/countries?q=${searchText}`);
    return res.json();
  }}
  debounceDelay={300}
/>
);
```

When onAsyncSearch is provided:

- Debouncing: Keystrokes are debounced by debounceDelay (default 300ms) before calling onAsyncSearch
- Loading indicator: A spinner is shown while the promise is pending
- Error handling: If the promise rejects, an error message is shown (customizable via errorMessageI18n)
- Search prompt: When no text has been typed, a prompt is shown (customizable via searchPromptMessageI18n)
- Clear: Clearing the input resets all internal state

### Multiple Selection

Search Countries (Async Multiple) (Optional)

### Error State

Search Countries (Async Error) (Optional)

### Advanced: Controlled Async State

For full control over the async flow (e.g., custom debounce logic, complex error handling, or request cancellation), you can manage the state yourself using searchedOptions, isLoading, errorMessageI18n, and onSearchTextChange.

```
import { Autocomplete } from "@sanofi-accelerator/elements";
import { useState, useCallback, useRef } from "react";

const ControlledAsyncAutocomplete = () => {
const [searchedOptions, setSearchedOptions] = useState(undefined);
const [isLoading, setIsLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState(undefined);
const debounceRef = useRef(undefined);

const handleSearchTextChange = useCallback((searchText) => {
  clearTimeout(debounceRef.current);
  setErrorMessage(undefined);

  if (!searchText.trim()) {
    setSearchedOptions(undefined);
    setIsLoading(false);
    return;
  }

  setIsLoading(true);
  debounceRef.current = setTimeout(async () => {
    try {
      const res = await fetch(`/api/countries?q=${searchText}`);
      setSearchedOptions(await res.json());
    } catch {
      setErrorMessage("Failed to fetch results.");
      setSearchedOptions([]);
    } finally {
      setIsLoading(false);
    }
  }, 300);
}, []);

return (
  <Autocomplete
    options={[]}
    searchedOptions={searchedOptions}
    onSearchTextChange={handleSearchTextChange}
    isLoading={isLoading}
    errorMessageI18n={errorMessage}
  />
);
};
```

> Tip: Prefer onAsyncSearch for most use cases. Use the controlled approach only when you need custom behavior that onAsyncSearch does not cover.

## Option Description

Options can include an optional description field that renders subtitle text below the label.
This aligns with the Menu.Item description pattern used in Figma and is useful for displaying
contextual information like codes, locations, or roles alongside the option label.

Location (Optional)

```
import { Autocomplete } from "@sanofi-accelerator/elements";

export default () => (
<Autocomplete
  label="Location"
  placeholder="Please select a location"
  options={[
    { value: "cgn_sdmf", label: "Solida Manufacturing", description: "CGN_SDMF" },
    { value: "fra_l20", label: "ICF H600", description: "FRA_L20" },
    { value: "fra_0l12", label: "FF NAPA, M47 Filling", description: "FRA_0L12_FIL047" },
  ]}
/>
);
```

The description field is optional and backward compatible — options without it continue to render as before.

### Multiple with Description

Locations (Optional)

## Custom Option Rendering

For full control over how each option is displayed, use the renderOption prop.
It receives the option object and a state object containing:

- selected — whether the option is currently selected
- index — position in the filtered list
- highlightedLabel — the label with matching search characters wrapped in <b> tags

The return value replaces the default label content inside each menu item while preserving
all selection behavior, keyboard navigation, and accessibility.

Location (Optional)

```
import { Autocomplete, Typography, TypographyVariant, TypographyColor } from "@sanofi-accelerator/elements";

export default () => (
<Autocomplete
  label="Location"
  placeholder="Search locations..."
  options={[
    { value: "cgn_sdmf", label: "Solida Manufacturing", description: "CGN_SDMF" },
    { value: "fra_l20", label: "ICF H600", description: "FRA_L20" },
  ]}
  renderOption={(option, { highlightedLabel }) => (
    <>
      <div>{highlightedLabel}</div>
      <Typography variant={TypographyVariant.BODY_SMALL} color={TypographyColor.SUBTLE}>
        {option.description}
      </Typography>
    </>
  )}
/>
);
```

### Rich Layout with Avatar

Combine renderOption with other components like Avatar for richer option layouts:

Assign to (Optional)

```
import { Autocomplete, Avatar, AvatarSize, Flex, Typography, TypographyVariant, TypographyColor } from "@sanofi-accelerator/elements";

type UserOption = Option & { image: string };

const userOptions: UserOption[] = [
{ value: "u1", label: "Alice Martin", description: "Engineering", image: "/avatars/alice.png" },
{ value: "u2", label: "Bob Chen", description: "Design", image: "/avatars/bob.png" },
];

export default () => (
<Autocomplete
  label="Assign to"
  placeholder="Search team members..."
  options={userOptions}
  renderOption={(option, { highlightedLabel }) => {
    const user = option as UserOption;
    return (
      <Flex align="center" gap="xs">
        <Avatar name={user.label} image={user.image} size={AvatarSize.XSMALL} />
        <div>
          <div>{highlightedLabel}</div>
          <Typography variant={TypographyVariant.BODY_SMALL} color={TypographyColor.SUBTLE}>
            {user.description}
          </Typography>
        </div>
      </Flex>
    );
  }}
/>
);
```

### Multiple with renderOption

Team Members (Optional)

> Note: When renderOption is provided, the description field is not auto-forwarded to the menu item — you have full control over what renders inside each option.

## Free Solo Mode

The Autocomplete component supports a "free solo" mode that allows users to enter custom values not present in the options list. This is useful when you want to prevent duplicates while still allowing users to create new entries.

### Example

Autocomplete (Optional)

### Usage

```
import { Autocomplete, FormControlState, InputSize } from "@sanofi-accelerator/elements";

export default () => {
const [value, setValue] = useState("");

return (
  <Autocomplete
    id="autocomplete"
    label="Country"
    placeholder="Type a country name"
    freeSolo
    options={[
      { value: "france", label: "France" },
      { value: "germany", label: "Germany" },
      { value: "spain", label: "Spain" },
    ]}
    value={value}
    onChange={(event) => {
      setValue(event.target.value);
      // event.target.value will be either:
      // - A selected option value (when user clicks an option)
      // - The typed input value (when user types in free solo mode)
    }}
  />
);
};
```

### Behavior

When freeSolo is enabled:

- Typing: The input value is immediately passed to onChange as the user types
- Suggestions: The dropdown still shows filtered suggestions from existing options
- Selection: Users can select existing options from the dropdown (normal behavior)
- Custom values: Users can continue typing to enter completely custom values
- Persistence: Custom values are maintained when clicking outside or pressing Escape

This provides a flexible experience similar to Material UI's free solo mode, allowing users to either select from existing options or create new entries as needed.

### Behavior

When options are changed dynamically:

- Complete Override: New options completely replace ALL previous options
- Custom Values Removed: Any custom values added with allowCustomValues are also removed
- No Accumulation: Options don't accumulate - each change replaces the entire list
- Clean Slate: Changing options gives you a fresh start with only the new options provided

This allows for use cases like:

- Loading different option sets based on user actions
- Async option loading with different result sets
- Category-based filtering where options change completely
- Multi-step forms where options depend on previous selections

Note: If you need to preserve custom values when changing options, manage them in the parent component and include them in the options prop.

## API Reference

| Name | Description | Default |
| --- | --- | --- |
| size | Input field size."small""medium""large" | "InputSize.LARGE" |
| label | Label displayed above the input.string | - |
| placeholder | Placeholder text when empty.string | - |
| state | Validation state."success""error""default" | "FormControlState.DEFAULT" |
| subText | Helper or error text below the input.string | - |
| inverse | Applies inverse styling for dark backgrounds.boolean | false |
| options* | Available options for selection.Option[] | - |
| multiple | Enables multi-select mode with chips.boolean | false |
| value | Currently selected value(s).string \| string[] | - |
| onChange | Callback fired when selection changes.((event: SelectChangeEvent<string \| string[]>) => void) | - |
| classNames | CSS class names for component parts.({ iconWrapperBefore?: string; iconWrapperAfter?: string; input?: string \| undefined; } & { wrapper?: string \| undefined; label?: string \| undefined; subText?: string \| undefined; } & { ...; }) \| undefined | - |
| maxItemsVisible | Maximum visible options before scrolling.number | 6 |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |
| notFoundMessageI18n | Message shown when no options match the search.string | "No results found..." |
| filterFunction | Custom filter function for options.((option: Option, searchValue: string) => boolean) | Case-insensitive label match |
| maxInputLines | Maximum number of lines of the input when multiple chips overflownumber | - |
| onSearchTextChange | ((searchText: string) => void) | - |
| searchedOptions | Option[] | - |
| freeSolo | Enable free solo mode - allows users to enter custom values not in the options listboolean | false |
| showTooltips | Whether to show tooltips on hover for option labelsboolean | false |
| tooltipPosition | Tooltip position for option tooltips"top-start""top""top-end""right-start""right""right-end""bottom-start""bottom""bottom-end""left-start""left""left-end"Show 4 more... | TOP |
| chipsOutside | Whether to display selected chips outside the input area instead of insideboolean | false |
| allowCustomValues | Allow users to add custom values that are not in the options listboolean | false |
| isLoading | Whether the component is in a loading state (e.g., fetching results from an API).
When true, a loading indicator is shown in the dropdown.
Ignored when onAsyncSearch is provided (managed internally).boolean | false |
| loadingMessageI18n | Message displayed in the dropdown while loading results.string | "Loading..." |
| errorMessageI18n | Error message displayed in the dropdown when an async request fails.When onAsyncSearch is provided: used as the error message shown on fetch failure.When onAsyncSearch is not provided: controlled error message displayed as-is.string | "\"An error occurred. Please try again.\"  (only when `onAsyncSearch` is provided)" |
| searchPromptMessageI18n | Prompt message displayed when no search text has been entered yet.
Useful for async search scenarios where results are only fetched on user input.string | "Type to search..." |
| onAsyncSearch | Async search function. When provided, the component handles debouncing,
loading state, error state, and results internally.
The function receives the current search text and must return a Promise
that resolves with an array of matching options.((searchText: string) => Promise<Option[]>) | - |
| debounceDelay | Debounce delay in milliseconds for onAsyncSearch.
Only used when onAsyncSearch is provided.number | 300 |
| renderOption | Custom render function for dropdown options.
When provided, its return value replaces the default label content
inside each menu item. The surrounding item wrapper (radio/checkbox)
and all selection/keyboard behavior remain unchanged.When renderOption is not provided but option.description is set,
the description is automatically forwarded to the underlying menu item.((option: Option, state: AutocompleteRenderOptionState) => ReactNode) | - |
| iconBefore | ReactNode | - |
| type | HTML input type attribute.
Excluded types: checkbox, radio, range, submit (use dedicated components)."number" \| "email" \| "image" \| "search" \| "hidden" \| "color" \| "button" \| "time" \| "text" \| (string & {}) \| "tel" \| "url" \| "date" \| "reset" \| "datetime-local" \| "file" \| "month" \| "password" \| "week" | "text" |
| noValidate | Disables browser's native validation.
Use when implementing custom validation logic.boolean | false |
| variant | Search behavior variant."submit""default" | "SearchInputVariant.DEFAULT" |
| filledStateIcon | Uses filled (solid) icons for validation states instead of outlined.boolean | false |
| optionalMessageI18n | Custom text for the "(Optional)" label suffix.
Use for internationalization when field is not required.string | - |
| labelEndSection | Custom content rendered at the end of the label row.
Use for tooltips, info icons, or character counters.ReactNode | - |
| onClear | Callback fired when clear button is clicked.(() => void) | - |
| ariaClearInputLabel | Accessible label for the clear button.string | "\"Clear search\"" |
| ariaSubmitLabel | Accessible label for the submit button.
Only used with SUBMIT variant.string | "\"Submit search\"" |
| onSearch | Callback fired when search is submitted.
For DEFAULT variant: triggered on Enter key.
For SUBMIT variant: triggered on button click or Enter key.((value: string) => void) | - |
| submitButton | Custom submit button element.
Only used with SUBMIT variant.ReactNode | - |

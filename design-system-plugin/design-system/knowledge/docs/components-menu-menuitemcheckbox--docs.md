---
storybook_id: components-menu-menuitemcheckbox--docs
title: "Components/Menu/MenuItemCheckbox"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-menu-menuitemcheckbox--docs"
import_path: "./src/components/Menu/dropdown/items/MenuItemCheckbox.stories.tsx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:09:09.024Z
---

# Source: Components/Menu/MenuItemCheckbox

- Storybook ID: `components-menu-menuitemcheckbox--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-menu-menuitemcheckbox--docs
- Import path: `./src/components/Menu/dropdown/items/MenuItemCheckbox.stories.tsx`
- Capture status: `extracted`

# MenuItemCheckbox

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| description | Description text below the labelstring | - | Description goes here |
| shortcut | Keyboard shortcut hint (e.g., "Ctrl+C")string | - | ⌘S |
| children* | Label contentReactNode | - | "Menu item 1" |
| value | string | - | value |
| size | Item size."small""medium" | "MenuItemSize.MEDIUM" | sizesmallmedium |
| disabled | Disables the item.boolean | false |  |
| onClick | Callback fired when item is clicked((event: MouseEvent<HTMLLIElement, MouseEvent>, menuItemEvent?: Event) => void) | - | - |
| tooltip | Tooltip content when hoveringReactNode | - |  |
| as | An override of the default HTML tag.
Can also be another React component."li" | - | asli |
| isKeyboardHighlighted | boolean | - |  |
| index | number | - |  |
| withChevron | Shows chevron arrow (for submenus).boolean | false |  |
| tooltipPosition | Tooltip position."top-start""top""top-end""right-start""right""right-end""bottom-start""bottom""bottom-end""left-start""left""left-end"Show 4 more... | "TooltipPosition.TOP" | tooltipPositionChoose option...top-starttoptop-endright-startrightright-endbottom-startbottombottom-endleft-startleftleft-end |
| classNames | Custom CSS classes for checkbox elements.{ container?: string; input?: string; icon?: string \| undefined; label?: string \| undefined; subtext?: string \| undefined; } \| undefined | - |  |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | - | brandThemeChoose option...primarysecondarytertiary |
| disableAnimation | Disables the check/uncheck animation.boolean | false |  |
| indeterminate | Shows indeterminate (mixed) state.
Use for "select all" when partially selected.boolean | false |  |
| noValidate | Disables browser's native validation.boolean | false |  |
| subtext | Secondary text displayed below the label.ReactNode | - |  |
| checkboxSize | Override checkbox sizenumber | - |  |

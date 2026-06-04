---
storybook_id: components-chipdropdown--docs
title: "Components/ChipDropdown"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-chipdropdown--docs"
import_path: "./src/components/ChipDropdown/ChipDropdown.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:07:12.077Z
---

# Source: Components/ChipDropdown

- Storybook ID: `components-chipdropdown--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-chipdropdown--docs
- Import path: `./src/components/ChipDropdown/ChipDropdown.mdx`
- Capture status: `extracted`

# ChipDropdown

A chip component that combines a selectable chip with a dropdown menu. When clicked, it opens a dropdown menu with selectable items.

## Overview

The ChipDropdown component combines the functionality of a selectable chip with a dropdown menu. It's perfect for creating compact selection interfaces where users need to choose from a list of options while maintaining a small footprint in the UI.

## Integration

### Basic usage

```
import { ChipDropdown } from "@sanofi-accelerator/elements";

const Component = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const items = [
    { id: "1", label: "Option 1" },
    { id: "2", label: "Option 2" },
    { id: "3", label: "Option 3" },
  ];

  return (
    <ChipDropdown
      items={items}
      selectedItems={selectedItems}
      onSelectionChange={setSelectedItems}
    >
      Select Options
    </ChipDropdown>
  );
};
```

### With status items (inherit mode)

```
import {
  ChipDropdown,
  ChipStatusType,
} from "@sanofi-accelerator/elements";

const StatusFilter = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const items = [
    { id: "ok", label: "Success", status: ChipStatusType.SUCCESS },
    { id: "fail", label: "Error", status: ChipStatusType.ERROR },
    { id: "warn", label: "Warning", status: ChipStatusType.WARNING },
  ];

  return (
    <ChipDropdown
      items={items}
      selectedItems={selected}
      onSelectionChange={setSelected}
      showChevron
    >
      Status
    </ChipDropdown>
  );
};
```

### Controlled mode

```
import {
  ChipDropdown,
  ChipDropdownMode,
  ChipDropdownColor,
  ChipStatusType,
} from "@sanofi-accelerator/elements";

const ControlledStatusFilter = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const items = [
    { id: "ok", label: "Success", status: ChipStatusType.SUCCESS },
    { id: "fail", label: "Error", status: ChipStatusType.ERROR },
  ];

  const color = selected.includes("fail")
    ? ChipDropdownColor.ERROR
    : ChipDropdownColor.NEUTRAL;

  return (
    <ChipDropdown
      items={items}
      selectedItems={selected}
      onSelectionChange={setSelected}
      mode={ChipDropdownMode.CONTROLLED}
      color={color}
      showChevron
    >
      Status
    </ChipDropdown>
  );
};
```

## API Reference

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| children | The content to display inside the chip triggerstring | - | Select Options |
| items | Array of dropdown itemsarray | - | [{...} 2 keys{...} 2 keys] |
| selectedItems | Currently selected item IDsarray | - | [] |
| multiSelect | Whether multiple selection is allowedboolean | - | FalseTrue |
| disabled | Whether the chip is disabledboolean | - | FalseTrue |
| size | Size variant of the chipstring | - | sizesmallmedium |
| emphasis | Visual emphasis of the chipstring | - | emphasissubtlestrongoutline |
| color | Color variant of the chipstring | - | colorbrandedneutralsuccesserrorwarninginformative |
| brandTheme | Brand theme variantstring | - | brandThemeprimarysecondarytertiary |
| placeholder | Placeholder text when no items are selectedstring | - | Select an option... |
| showChevron | Whether to show chevron iconboolean | - | FalseTrue |
| maxItemsVisible | Maximum number of items visible in dropdownnumber | - |  |
| respectTriggerWidth | Whether dropdown should respect trigger widthboolean | - | FalseTrue |
| mode | Inherit: trigger color follows selected item status (single-select). Controlled: consumer manages trigger color.- | - | modeinheritcontrolled |

## Modes

ChipDropdown supports two color-resolution modes via the mode prop:

### Inherit mode (default)

The trigger chip automatically adopts the status color of the selected item when in single-select mode. In multi-select, the trigger stays in the base color (branded/neutral).

### Inherit Mode — Single Select

Select a status item — the trigger chip inherits its color.

Strong

Outline

Subtle

### Controlled mode

The consumer fully controls the trigger color via the color prop. This is useful when you want the chip to always show a specific color, or when you implement your own derivation logic.

For example, with multi-select you might want the trigger to turn error as soon as any error item is selected:

```
const items = [
  { id: "ok", label: "Success", status: ChipStatusType.SUCCESS },
  { id: "fail", label: "Error", status: ChipStatusType.ERROR },
  { id: "warn", label: "Warning", status: ChipStatusType.WARNING },
];

// Custom logic: error wins over everything, then warning, else neutral
const deriveColor = (ids: string[]) => {
  if (ids.includes("fail")) return ChipDropdownColor.ERROR;
  if (ids.includes("warn")) return ChipDropdownColor.WARNING;
  return ChipDropdownColor.NEUTRAL;
};

<ChipDropdown
  items={items}
  selectedItems={selected}
  onSelectionChange={setSelected}
  mode={ChipDropdownMode.CONTROLLED}
  color={deriveColor(selected)}
  multiSelect
  showChevron
>
  Status
</ChipDropdown>
```

### Controlled Mode

The consumer fully controls the trigger color via the color prop.

##### Fixed — always warning

The trigger is always warning regardless of what is selected.

##### Fixed — always branded

The trigger stays branded no matter what status items are picked.

##### Custom logic — error when Error selected

The trigger turns error when the Error item is selected, neutral otherwise.

## When to use

- When you need a compact selection interface
- For filter controls that need to show multiple options
- In forms where space is limited but multiple choices are needed
- As a replacement for traditional select dropdowns in modern interfaces
- When you want to maintain visual consistency with other chip components
- When items carry status semantics (success, error, warning, informative) — use the status field on items

## Accessibility

The ChipDropdown component follows the W3C WAI-ARIA guidelines for combobox patterns:

### Keyboard Interactions

| Key | Description |
| --- | --- |
| Tab | Moves focus to the chip trigger |
| Enter / Space | Opens or closes the dropdown menu |
| Arrow Down | Opens dropdown and moves to first item |
| Arrow Up / Arrow Down | Navigates through dropdown items when open |
| Escape | Closes the dropdown menu |

### ARIA Attributes

| Attribute | Description |
| --- | --- |
| role="combobox" | Identifies the component as a combobox for multi-select |
| role="menu" | Identifies the component as a menu for single-select |
| aria-multiselectable | Indicates whether multiple selection is allowed |
| aria-disabled | Indicates when the component is disabled |
| aria-expanded | Indicates whether the dropdown is open |

## Guidelines

- Use single selection mode for mutually exclusive options
- Use multi-selection mode when users can choose multiple items
- Provide clear, descriptive labels for the chip trigger
- Use icons in dropdown items to improve visual recognition
- Consider the maximum width to ensure text doesn't get cut off
- Use appropriate emphasis and color variants to match your design context
- Ensure sufficient contrast for accessibility
- Use inherit mode when the trigger should visually reflect the selected status
- Use controlled mode when you need full control over the trigger appearance
- Use the renderItem prop when you need fully custom dropdown item rendering

## Examples

### Basic Single Selection

### Multi-Selection Mode

### With Disabled Items and Icons

### Status Items — Inherit Mode (single-select)

Selecting a status item changes the trigger chip color to match the selected status.

### Inherit Mode — Single Select

Select a status item — the trigger chip inherits its color.

Strong

Outline

Subtle

### Status Items — Inherit Mode (multi-select)

In multi-select, the trigger stays in its base color even when status items are selected.

### Inherit Mode — Multi Select

Multi-select always keeps the base color, even with status items selected.

Strong

Outline

Subtle

### Status Items — Controlled Mode

The consumer controls the trigger color with custom logic.

### Controlled Mode

The consumer fully controls the trigger color via the color prop.

##### Fixed — always warning

The trigger is always warning regardless of what is selected.

##### Fixed — always branded

The trigger stays branded no matter what status items are picked.

##### Custom logic — error when Error selected

The trigger turns error when the Error item is selected, neutral otherwise.

### Custom Item Rendering

Use renderItem to fully control how items appear in the dropdown.

### Custom Item Rendering

Use renderItem to fully customise how items appear inside the dropdown.

##### Auto-rendered ChipStatus items

Items with a status field render as ChipStatus automatically.

##### Custom renderItem callback

renderItem overrides the default rendering with your own component.

### Style Variations Overview

### Dropdown Chip

|  | Neutral |  |  | Brand |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | Default | Active | Disabled | Default | Active | Disabled |
| Strong |  |  | Chip Label (2)Chip Label (2) |  |  | Chip Label (2)Chip Label (2) |
| Outline |  |  | Chip Label (2)Chip Label (2) |  |  | Chip Label (2)Chip Label (2) |
| Subtle |  |  | Chip Label (2)Chip Label (2) |  |  | Chip Label (2)Chip Label (2) |

### Dropdown Chip — Status Colors

|  | Success | Error | Warning | Informative |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Default | Disabled | Default | Disabled | Default | Disabled | Default | Disabled |
| Strong |  | Chip Label (2) Chip Label (2)  |  | Chip Label (2) Chip Label (2)  |  | Chip Label (2) Chip Label (2)  |  | Chip Label (2) Chip Label (2)  |
| Outline |  | Chip Label (2) Chip Label (2)  |  | Chip Label (2) Chip Label (2)  |  | Chip Label (2) Chip Label (2)  |  | Chip Label (2) Chip Label (2)  |
| Subtle |  | Chip Label (2) Chip Label (2)  |  | Chip Label (2) Chip Label (2)  |  | Chip Label (2) Chip Label (2)  |  | Chip Label (2) Chip Label (2)  |

## Resources

- W3C WAI-ARIA Combobox Pattern
- W3C WAI-ARIA Menu Pattern
- W3C WAI-ARIA Practices

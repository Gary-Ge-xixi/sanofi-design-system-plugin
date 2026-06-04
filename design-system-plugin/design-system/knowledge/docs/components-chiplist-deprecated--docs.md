---
storybook_id: components-chiplist-deprecated--docs
title: "Components/ChipList (Deprecated)"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-chiplist-deprecated--docs"
import_path: "./src/components/Chip/list/ChipList.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:07:20.667Z
---

# Source: Components/ChipList (Deprecated)

- Storybook ID: `components-chiplist-deprecated--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-chiplist-deprecated--docs
- Import path: `./src/components/Chip/list/ChipList.mdx`
- Capture status: `extracted`

# ChipList (Deprecated)

## ⚠️ Deprecation Notice

This component is deprecated and will be removed in a future release. The ChipList component was designed to work with the deprecated Chip component. Please migrate to the new chip components and their recommended usage patterns.

### Migration Guide

The ChipList component should be replaced with standard HTML containers and the new chip components:

For multiple selectable chips:

```
// Old - Deprecated
<ChipList multiple={true} chipsSize={ChipSize.SMALL}>
<Chip onClick={handleClick1} active={isActive1}>Option 1</Chip>
<Chip onClick={handleClick2} active={isActive2}>Option 2</Chip>
<Chip onClick={handleClick3} active={isActive3}>Option 3</Chip>
</ChipList>

// New - Recommended

<div className="chip-container">
<ChipSelect onClick={handleClick1} selected={isActive1} size={ChipSize.SMALL}>
  Option 1
</ChipSelect>
<ChipSelect onClick={handleClick2} selected={isActive2} size={ChipSize.SMALL}>
  Option 2
</ChipSelect>
<ChipSelect onClick={handleClick3} selected={isActive3} size={ChipSize.SMALL}>
  Option 3
</ChipSelect>
</div>
```

For filter chips:

```
// Old - Deprecated
<ChipList chipsSize={ChipSize.SMALL}>
<Chip onDelete={handleDelete1}>Filter 1</Chip>
<Chip onDelete={handleDelete2}>Filter 2</Chip>
<Chip onDelete={handleDelete3}>Filter 3</Chip>
</ChipList>

// New - Recommended

<div className="filter-chips">
<ChipFilter onDelete={handleDelete1} size={ChipSize.SMALL}>
  Filter 1
</ChipFilter>
<ChipFilter onDelete={handleDelete2} size={ChipSize.SMALL}>
  Filter 2
</ChipFilter>
<ChipFilter onDelete={handleDelete3} size={ChipSize.SMALL}>
  Filter 3
</ChipFilter>
</div>
```

### What's Changed

- No specialized container needed: The new chip components handle their own styling and spacing
- Better semantic HTML: Use appropriate container elements (div, fieldset, etc.) based on context
- Improved accessibility: Each chip type has proper ARIA attributes and keyboard navigation
- Simplified API: No need to manage container-level props like multiple or chipsSize
- Individual sizing: Each chip can have its own size if needed, or use consistent sizing
- Better TypeScript support: More specific prop types for each chip variant

### Styling Migration

Replace ChipList styling with standard CSS flexbox or grid:

```
/* Recommended CSS for chip containers */
.chip-container {
display: flex;
flex-wrap: wrap;
gap: 8px;
}

.filter-chips {
display: flex;
flex-wrap: wrap;
gap: 12px;
margin-bottom: 16px;
}
```

## Legacy Documentation

The information below is maintained for reference during the migration period.

## Overview

The deprecated ChipList component served as a container for multiple Chip components, providing consistent spacing, sizing, and selection behavior.

First label

Second label

Third label

Fourth label

Sixth label

Seventh label

## Legacy Integration

```
import { ChipList, Chip } from "@sanofi-accelerator/elements";
import { ChipSize } from "@sanofi-accelerator/elements";

const Component = () => (

<ChipList multiple={true} chipsSize={ChipSize.SMALL}>
<Chip>First Option</Chip>
<Chip>Second Option</Chip>
<Chip>Third Option</Chip>
</ChipList>
);
```

## API Reference

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| multiple | boolean | - | FalseTrue |
| children | array | - | [{...} 5 keys{...} 5 keys{...} 5 keys{...} 5 keys{...} 5 keys{...} 5 keys] |
| chipsSize | The chips size"small""medium" | "ChipSize.SMALL" | chipsSizeChoose option...smallmedium |
| className | string | - |  |
| style | CSSProperties | - |  |

## Legacy Props

| Prop | Type | Description | Migration Notes |
| --- | --- | --- | --- |
| children | ReactNode | Chip components to display | Place chips directly in container element |
| multiple | boolean | Whether multiple chips can be selected | Handle selection state in individual ChipSelect components |
| chipsSize | ChipSize | Size applied to all child chips | Set size prop on each individual chip component |
| className | string | Additional CSS classes | Apply to your container element |
| style | CSSProperties | Inline styles | Apply to your container element |

## Accessibility (Legacy)

The deprecated ChipList component provided basic container accessibility:

### Keyboard Interactions

| Key | Description |
| --- | --- |
| Tab | Moves focus between individual chips within the list |
| Arrow Keys | Navigate between chips when focus is within the list |

### ARIA Attributes

| Attribute | Description |
| --- | --- |
| role="group" | Identified the container as a group of related elements |
| aria-multiselectable | Indicated whether multiple chips could be selected |

Note: The new chip components and proper container elements provide enhanced accessibility features and should be used instead.

## Resources

- ChipFilter Documentation
- ChipSelect Documentation
- ChipStatus Documentation
- W3C WAI-ARIA Practices

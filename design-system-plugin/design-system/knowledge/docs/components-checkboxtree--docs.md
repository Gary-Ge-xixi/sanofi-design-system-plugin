---
storybook_id: components-checkboxtree--docs
title: "Components/CheckboxTree"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-checkboxtree--docs"
import_path: "./src/components/CheckboxTree/CheckboxTree.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:07:04.706Z
---

# Source: Components/CheckboxTree

- Storybook ID: `components-checkboxtree--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-checkboxtree--docs
- Import path: `./src/components/CheckboxTree/CheckboxTree.mdx`
- Capture status: `extracted`

# CheckboxTree

A hierarchical checkbox group component that manages parent-child selection states automatically.

## Key Features

- Parent checkboxes control children (check/uncheck all)
- Parent state reflects children states (checked/indeterminate/unchecked)
- Supports unlimited nesting depth
- Handles disabled items and preselected values
- Optional collapsible sections with Material Symbols arrow indicators

## Installation

```
import { CheckboxTree } from '@sanofi/elements-design-system';
```

## Basic Usage

```
// Define checkbox hierarchy
const items = [
  {
    id: 'parent1',
    label: 'Parent 1',
    children: [
      { id: 'child1-1', label: 'Child 1-1' },
      { id: 'child1-2', label: 'Child 1-2' },
    ]
  },
  { id: 'standalone', label: 'Standalone Item' }
];

// Implement in component
function Example() {
  const handleChange = (selectedIds) => {
    console.log('Selected IDs:', selectedIds); // Array of selected checkbox IDs
  };

  return (
    <CheckboxTree
      items={items}
      onChange={handleChange}
    />
  );
}
```

## Props API

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| title | Title of the checkbox treestring | - | Default |
| caption | Caption textstring | - | This is a caption |
| items* | Array of checkbox items to renderPick<CheckboxTreeItemProps, "children" \| "disabled" \| "defaultChecked" \| "id" \| "label">[] | - | [{...} 3 keys{...} 3 keys] |
| state | State of the checkbox tree"success""error""default" | - | stateChoose option...successerrordefault |
| error | Error to display below the captionstring | - |  |
| onChange | Callback fired when selection changes((selectedIds: string[]) => void) | - | - |
| checkboxesSize | Size of the checkboxes"small""medium""large" | - | checkboxesSizeChoose option...smallmediumlarge |
| checkboxesColor | Color variant of all checkboxes in the tree"neutral""branded" | - | checkboxesColorChoose option...brandedneutral |
| collapsible | Enable expandable/collapsible sectionsboolean | false |  |

## Examples

### Default Implementation

The example below shows a simple two-level hierarchy with parent and child checkboxes:

This is a caption

### Multi-Level Nesting Example

While the component supports complex hierarchies with multiple levels of nesting, the example below demonstrates how deeper nesting works. The component handles parent-child relationships automatically.

### Collapsible Sections

The component can be configured to allow sections to be expanded and collapsed using Material Symbols arrow indicators. Each parent node can specify its default expanded state.

```
// Set the collapsible prop to true
<CheckboxTree
  items={items}
  collapsible={true}
  onChange={handleChange}
/>

// Control initial expanded state for each item
const items = [
  {
    id: 'category1',
    label: 'Category 1',
    children: [...]
  },
  {
    id: 'category2',
    label: 'Category 2',
    children: [...]
  }
];
```

Click the arrow icons to expand or collapse sections

## Accessibility Notes

This component implements proper ARIA attributes for hierarchical structures:

- Uses semantic tree structure with appropriate roles
- Communicates parent-child relationships through ARIA attributes
- Properly handles indeterminate states for screen readers
- Supports keyboard navigation
- Includes screen reader instructions about hierarchical behavior
- Collapsible sections include proper aria-expanded attributes and keyboard navigation

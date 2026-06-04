---
storybook_id: components-treeview--docs
title: "Components/TreeView"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-treeview--docs"
import_path: "./src/components/TreeView/TreeView.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:11:20.238Z
---

# Source: Components/TreeView

- Storybook ID: `components-treeview--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-treeview--docs
- Import path: `./src/components/TreeView/TreeView.mdx`
- Capture status: `extracted`

# TreeView

## TreeView is a hierarchical list of items that may have a parent-child
relationship where children can be toggled into view by expanding or collapsing
their parent item. Ideal for file explorers, category browsers, and
organizational structures.

See the WAI-ARIA TreeView Pattern for accessibility guidance.

## Example

## Anatomy

```
import {
TreeView,
TreeViewDecoration,
TreeViewColorAccent,
} from "@sanofi-accelerator/elements";

<TreeView
aria-label="Repository files"
decoration={TreeViewDecoration.ARROW_FOLDER}
showNodeLines
>
<TreeView.Item id="src" defaultExpanded>
  src
  <TreeView.SubTree>
    <TreeView.Item id="file.tsx" onSelect={() => console.log("Open file")}>
      file.tsx
      <TreeView.TrailingVisual label="Modified">
        <span>M</span>
      </TreeView.TrailingVisual>
    </TreeView.Item>
  </TreeView.SubTree>
</TreeView.Item>
</TreeView>
```

## Sub-components

### TreeView.Item

An individual node in the tree. Can be a parent (with a SubTree) or a leaf. See Props for the full API.

### TreeView.SubTree

A container for nested TreeView.Item children. Placed inside a parent TreeView.Item.

### TreeView.LeadingVisual

A slot for a custom icon or visual at the start of the item. Supports a render function that receives { isExpanded } for dynamic icons.

When decoration is FOLDER or ARROW_FOLDER, icons are automatically injected (folder icon for parents, file icon for leaves). Use TreeView.LeadingVisual to override the default icon with a custom one.

### TreeView.TrailingVisual

A slot for badges, status icons, or indicators at the end of the item. Use the label prop for accessibility.

### TreeView.DirectoryIcon

A convenience component that automatically switches between a closed folder icon and an open folder icon based on the item's expanded state. Useful inside a custom TreeView.LeadingVisual.

## Decorations

The decoration prop controls which visual elements are shown:

| Value | Arrows | Icons |
| --- | --- | --- |
| NONE | No | No |
| ARROW | Yes | No |
| FOLDER | No | Yes (auto) |
| ARROW_FOLDER | Yes | Yes (auto) |

Without node lines

NONE

ARROW

FOLDER

ARROW_FOLDER

With node lines

NONE

ARROW

FOLDER

ARROW_FOLDER

## Custom Leading Visuals

To override auto-icons with custom icons on specific items, wrap your icon in TreeView.LeadingVisual. The custom visual takes priority over the auto-injected one.

```
import { TreeView, TreeViewDecoration, Icon, IconName } from "@sanofi-accelerator/elements";

<TreeView decoration={TreeViewDecoration.ARROW_FOLDER} aria-label="Settings">
<TreeView.Item id="security">
  <TreeView.LeadingVisual>
    <Icon name={IconName.SHIELD} size={1} filled={false} />
  </TreeView.LeadingVisual>
  Security
  <TreeView.SubTree>
    <TreeView.Item id="passwords">
      <TreeView.LeadingVisual>
        <Icon name={IconName.KEY} size={1} filled={false} />
      </TreeView.LeadingVisual>
      Passwords
    </TreeView.Item>
  </TreeView.SubTree>
</TreeView.Item>
</TreeView>
```

## Inside Sidebar

TreeView integrates with the Sidebar component. When the sidebar is collapsed, it falls back to a single menu item.

Navigation

Project Files

## Color Accent

The colorAccent prop controls the hover/selected background style:

- BRANDED (default) — brand-tinted background
- NEUTRAL — semi-transparent neutral overlay

Hover or select an item to see the difference between the two accents.

BRANDED

NEUTRAL

## RTL Support

The component uses logical CSS properties and :dir(rtl) selectors for full RTL support. Chevron arrows automatically flip direction.

## Keyboard Navigation

| Key | Action |
| --- | --- |
| Arrow Up/Down | Navigate visible nodes |
| Arrow Right | Expand parent node; if expanded, move to first child |
| Arrow Left | Collapse parent node; if collapsed, move to parent |
| Home | Focus first item |
| End | Focus last item |
| Enter | Activate item (fires onSelect) |
| Tab | Enter/exit tree (single tab stop) |

## Props

### TreeView

| Name | Description | Default |
| --- | --- | --- |
| children* | TreeView.Item nodes.ReactNode | - |
| decoration | Visual decoration style (arrows, folders, etc.)."none""arrow""folder""arrowFolder" | "TreeViewDecoration.NONE" |
| colorAccent | Color accent for hover/selected backgrounds."branded""neutral" | "TreeViewColorAccent.BRANDED" |
| showNodeLines | Shows vertical connector lines between nodes.boolean | false |
| expandedKeys | Controlled set of expanded node keys.Set<TreeViewKey> | - |
| defaultExpandedKeys | Default expanded keys (uncontrolled mode).Set<TreeViewKey> | - |
| onExpandedChange | Callback fired when expanded keys change.((keys: Set<TreeViewKey>) => void) | - |
| aria-label | Accessible label for the tree.string | - |
| aria-labelledby | Reference to element providing accessible label.string | - |
| className | Additional CSS class.string | - |

### TreeView.Item

| Name | Description | Default |
| --- | --- | --- |
| id* | Unique node identifier (used for expand state tracking).string | - |
| children* | Label text and optional LeadingVisual/TrailingVisual/SubTree.ReactNode | - |
| disabled | Disables the item.boolean | false |
| current | Marks this as the currently active/selected item.boolean | false |
| defaultExpanded | Initial expanded state (uncontrolled).boolean | false |
| onSelect | Callback fired when the label is clicked/activated.
Independent from expand/collapse (chevron handles that).
If not provided, clicking the label toggles expand/collapse.(() => void) | - |
| className | Additional CSS class.string | - |

### TreeView.LeadingVisual

| Name | Description | Default |
| --- | --- | --- |
| children* | Icon or render function receiving expanded state.ReactNode \| ((props: { isExpanded: boolean; }) => ReactNode) | - |
| label | Accessible label for the visual element.string | - |

### TreeView.TrailingVisual

| Name | Description | Default |
| --- | --- | --- |
| children* | Badge, icon, status, or render function receiving expanded state.ReactNode \| ((props: { isExpanded: boolean; }) => ReactNode) | - |
| label | Accessible label describing the visual (e.g., "Modified", "3 errors").string | - |

### TreeView.SubTree

| Name | Description | Default |
| --- | --- | --- |
| children | Nested TreeView.Item nodes.ReactNode | - |

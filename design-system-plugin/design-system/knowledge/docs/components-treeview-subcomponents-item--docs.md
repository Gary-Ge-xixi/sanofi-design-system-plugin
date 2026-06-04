---
storybook_id: components-treeview-subcomponents-item--docs
title: "Components/TreeView/SubComponents/Item"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-treeview-subcomponents-item--docs"
import_path: "./src/components/TreeView/TreeViewItem.stories.tsx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:11:24.477Z
---

# Source: Components/TreeView/SubComponents/Item

- Storybook ID: `components-treeview-subcomponents-item--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-treeview-subcomponents-item--docs
- Import path: `./src/components/TreeView/TreeViewItem.stories.tsx`
- Capture status: `extracted`

# Item

```
Error: u?.setProps is not a function  at Wu (/assets/react-18-DHSRfmXe.js:8:93160))  at jv (/assets/react-18-DHSRfmXe.js:8:97493))  at Oa (/assets/react-18-DHSRfmXe.js:8:105729))  at jv (/assets/react-18-DHSRfmXe.js:8:96888))  at Oa (/assets/react-18-DHSRfmXe.js:8:105729))  at jv (/assets/react-18-DHSRfmXe.js:8:96888))  at Oa (/assets/react-18-DHSRfmXe.js:8:105729))  at jv (/assets/react-18-DHSRfmXe.js:8:96888))  at Oa (/assets/react-18-DHSRfmXe.js:8:105729))
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| id* | Unique node identifier (used for expand state tracking).string | - |  |
| children* | Label text and optional LeadingVisual/TrailingVisual/SubTree.ReactNode | - |  |
| disabled | Disables the item.boolean | false |  |
| current | Marks this as the currently active/selected item.boolean | false |  |
| defaultExpanded | Initial expanded state (uncontrolled).boolean | false |  |
| onSelect | Callback fired when the label is clicked/activated.
Independent from expand/collapse (chevron handles that).
If not provided, clicking the label toggles expand/collapse.(() => void) | - | - |
| className | Additional CSS class.string | - |  |

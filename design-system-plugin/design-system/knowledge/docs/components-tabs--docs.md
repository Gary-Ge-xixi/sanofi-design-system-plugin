---
storybook_id: components-tabs--docs
title: "Components/Tabs"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-tabs--docs"
import_path: "./src/components/Tabs/Tabs.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:10:48.416Z
---

# Source: Components/Tabs

- Storybook ID: `components-tabs--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-tabs--docs
- Import path: `./src/components/Tabs/Tabs.mdx`
- Capture status: `extracted`

# Tabs Component

## Tabs are a user interface component used to organize and present content in a
structured and tabulated format. They allow users to switch between different
sections of content without leaving the current page, enhancing navigation and
organization.

## Example

Tab 1

Tab 2

Tab 3

Tab 4

## Anatomy

```
import { Tabs } from "@sanofi-accelerator/elements";

export const default = () => (
<Tabs defaultSelected="tab1">
  <Tabs.List>
    <Tabs.Tab name="tab1">Tab 1</Tabs.Tab>
    <Tabs.Tab name="tab2">Tab 2</Tabs.Tab>
    <Tabs.Tab name="tab3">Tab 3</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel name="tab1">Content for Tab 1</Tabs.Panel>
  <Tabs.Panel name="tab2">Content for Tab 2</Tabs.Panel>
  <Tabs.Panel name="tab3">Content for Tab 3</Tabs.Panel>
</Tabs>
),
```

## API Reference

| Name | Description | Default |
| --- | --- | --- |
| defaultSelected | Initial selected tab name for uncontrolled mode.
Use this when you don't need to control the tab state externally.string | - |
| children | Tab content including Tabs.List and Tabs.Panel components.ReactNode | - |
| onChange | Callback fired when the selected tab changes.
Receives the name of the newly selected tab.((name: string) => void) | - |
| selectedName | Currently selected tab name for controlled mode.
Use with onChange to control the tab state externally.
When set, defaultSelected is ignored.string | - |
| lazyMount | Only mount panel content when the tab is first selected.
This improves performance by avoiding rendering hidden content.boolean | false |
| unmountOnHide | Unmount panel content when the tab is deselected.
Only applies when lazyMount is true.boolean | false |

## Performance Optimization

By default, all tab panel content is rendered to the DOM and hidden using the HTML hidden attribute.
For tabs with heavy content (data fetching, complex components), you can enable lazy mounting to improve performance.

### Lazy Mount

Use the lazyMount prop to only render tab panel content when the tab is first selected:

```
<Tabs defaultSelected="tab1" lazyMount>
<Tabs.List>
  <Tabs.Tab name="tab1">Tab 1</Tabs.Tab>
  <Tabs.Tab name="tab2">Tab 2</Tabs.Tab>
</Tabs.List>
<Tabs.Panel name="tab1">Content for Tab 1</Tabs.Panel>
<Tabs.Panel name="tab2">Heavy content - only mounts when selected</Tabs.Panel>
</Tabs>
```

Once a tab has been selected, its content stays mounted (keep-alive behavior), preserving component state.

Tab 1 Content

This component has mounted 1 time(s). Check the console for mount/unmount logs.

### Unmount on Hide

For memory-sensitive applications, combine lazyMount with unmountOnHide to unmount content when switching away from a tab:

```
<Tabs defaultSelected="tab1" lazyMount unmountOnHide>
<Tabs.List>
  <Tabs.Tab name="tab1">Tab 1</Tabs.Tab>
  <Tabs.Tab name="tab2">Tab 2</Tabs.Tab>
</Tabs.List>
<Tabs.Panel name="tab1">Content unmounts when deselected</Tabs.Panel>
<Tabs.Panel name="tab2">Content unmounts when deselected</Tabs.Panel>
</Tabs>
```

Note: With unmountOnHide, component state is lost when switching tabs.

Tab 1 Content

This component has mounted 1 time(s). Check the console for mount/unmount logs.

## Accessibility

The Tabs component is built with accessibility in mind, ensuring keyboard navigability and screen reader compatibility. It allows users to easily switch between tabs and access content in a way that adheres to accessibility standards.

See the WAI-ARIA Tabs Pattern

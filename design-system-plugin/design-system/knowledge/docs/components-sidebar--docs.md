---
storybook_id: components-sidebar--docs
title: "Components/Sidebar"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-sidebar--docs"
import_path: "./src/components/Sidebar/Sidebar.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:10:33.107Z
---

# Source: Components/Sidebar

- Storybook ID: `components-sidebar--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-sidebar--docs
- Import path: `./src/components/Sidebar/Sidebar.mdx`
- Capture status: `extracted`

# Sidebar

## A flexible, compound sidebar component for application navigation with
collapsible states, expandable items, and comprehensive layout support.

# Sidebar

The Sidebar component is a sophisticated navigation system built as a compound component. It provides a complete solution for application navigation with support for collapsible states, expandable nested items, dropdown menus, user profiles, and smooth animations powered by design system motion tokens.

## Key Features

Compound Component Architecture - Modular subcomponents for flexible composition
Collapsible Design - Smooth expand/collapse with logo switching and tooltip fallbacks
Expandable Navigation Items - Support for nested navigation with controlled/uncontrolled states
Dropdown Menu System - Multi-size menu triggers with rich content support

## Architecture

The Sidebar uses a compound component pattern with the following hierarchy:

```
Sidebar.Root
├── Sidebar.Header (logo, collapse toggle)
├── Sidebar.Content (scrollable main area)
│   ├── Sidebar.Action (quick action buttons)
│   ├── Sidebar.Section (grouped navigation)
│   │   ├── Sidebar.Item (navigation items)
│   │   │   └── nestedItems (expandable children)
│   │   └── Sidebar.Menu (dropdown system)
│   │       ├── Sidebar.Menu.Trigger
│   │       └── Sidebar.Menu.Dropdown
│   │           └── Sidebar.Menu.Item
└── Sidebar.Footer (user profile, secondary actions)
    ├── Sidebar.Item (footer navigation)
    └── Sidebar.UserProfile
```

## Basic Usage

```
import { Sidebar, IconName, Image } from "@sanofi-accelerator/elements";

function AppSidebar() {
  return (
    <Sidebar.Root collapsible defaultCollapsed={false} sticky>
      <Sidebar.Header
        logo={{
          collapsed: (
            <Image
              src="https://cdn.prod.accelerator.sanofi/elements/icons/sanofi-logo_small.svg"
              alt="Logo"
            />
          ),
          expanded: (
            <Image
              src="https://cdn.prod.accelerator.sanofi/elements/icons/sanofi-logo.svg"
              alt="Logo"
            />
          ),
        }}
      />

      <Sidebar.Content>
        <Sidebar.Section title="Navigation">
          <Sidebar.Item icon={IconName.HOME} tooltip="Home">
            Home
          </Sidebar.Item>
          <Sidebar.Item icon={IconName.ANALYTICS} tooltip="Analytics">
            Analytics
          </Sidebar.Item>
        </Sidebar.Section>
      </Sidebar.Content>

      <Sidebar.Footer>
        <Sidebar.UserProfile
          name="Marie Curie"
          email="marie.curie@sanofi.com"
          avatarSrc="/avatar.jpg"
          tooltip="Log out"
        />
      </Sidebar.Footer>
    </Sidebar.Root>
  );
}
```

## Collapse Toggle Behavior

The collapse toggle button appears automatically based on the sidebar configuration:

### With Header Component

When using Sidebar.Header, the collapse toggle is integrated into the header alongside the logo:

```
<Sidebar.Root collapsible={true}>
  <Sidebar.Header
    logo={{
      expanded: <Image src="logo.svg" alt="Logo" />,
      collapsed: <Image src="logo-small.svg" alt="Logo" />,
    }}
  />
  {/* Toggle appears in the header */}
</Sidebar.Root>
```

### Without Header Component

When no Sidebar.Header is present, the collapse toggle appears automatically at the top of the sidebar:

```
<Sidebar.Root collapsible={true}>
  <Sidebar.Content>
    <Sidebar.Item icon={IconName.HOME}>Home</Sidebar.Item>
  </Sidebar.Content>
  {/* Toggle appears standalone at the top */}
</Sidebar.Root>
```

Note: The collapse toggle always uses the default icons (DOCK_TO_RIGHT when expanded, DOCK_TO_LEFT when collapsed) to maintain visual consistency across the application.

## Collapse Modes

### Standard Collapse

The sidebar collapses to a narrow icon-only view (showing icons with tooltips).

### Full Collapse

When fullyCollapsible=true, the sidebar completely hides with zero width.

## Advanced Features

### Expandable Navigation Items

Create hierarchical navigation with smooth animations:

```
<Sidebar.Item
  icon={IconName.FOLDER}
  expandable={true}
  defaultExpanded={false}
  onExpandedChange={(expanded) => console.log("Folder", expanded)}
  nestedItems={[
    <Sidebar.Item key="doc1" icon={IconName.DESCRIPTION}>
      Document 1
    </Sidebar.Item>,
    <Sidebar.Item key="doc2" icon={IconName.IMAGE}>
      Images
    </Sidebar.Item>,
  ]}
>
  Project Files
</Sidebar.Item>
```

Expandable Item Props:

- expandable: boolean - Enables expand/collapse functionality
- expanded?: boolean - Controlled expanded state
- defaultExpanded?: boolean - Default state for uncontrolled usage
- onExpandedChange?: (expanded: boolean) => void - State change callback
- nestedItems?: ReactNode[] - Array of nested Sidebar.Item components

### Dropdown Menu System

Multi-size menu triggers with rich content:

```
<Sidebar.Menu fullWidth>
  <Sidebar.Menu.Trigger
    size={SidebarMenuSize.LARGE}
    text="Workspace Name"
    subtext="Project details"
    iconBefore={<Icon name={IconName.SPACE_DASHBOARD} />}
    tooltip="Workspace menu"
  />
  <Sidebar.Menu.Dropdown>
    <Sidebar.Menu.Item
      iconBefore={<Icon name={IconName.EDIT} />}
      description="Edit workspace settings"
      shortcut="⌘E"
    >
      Edit Workspace
    </Sidebar.Menu.Item>
  </Sidebar.Menu.Dropdown>
</Sidebar.Menu>
```

Menu Sizes:

- SidebarMenuSize.SMALL - Compact 24px height with 16px icons
- SidebarMenuSize.MEDIUM - Standard 32px height with 20px icons
- SidebarMenuSize.LARGE - Spacious 56px height with 20px icons, supports subtext

### Quick Actions

Adaptive action buttons that change based on collapsed state:

```
<Sidebar.Action tooltip="Create new">
  {isCollapsed ? (
    <ButtonIcon icon={IconName.ADD_CIRCLE} />
  ) : (
    <Button label="New Project" icon={IconName.ADD} fullWidth />
  )}
</Sidebar.Action>
```

## API Reference

### Component Overview

- Sidebar.Root - Main container with collapse/expand functionality
- Sidebar.Header - Top section with logo and collapse toggle
- Sidebar.Content - Scrollable main content area
- Sidebar.Section - Groups navigation items with optional titles
- Sidebar.Item - Individual navigation items with expandable support
- Sidebar.Menu - Dropdown menu system
- Sidebar.Footer - Bottom section for secondary actions
- Sidebar.UserProfile - User information with logout functionality
- Sidebar.Action - Quick action button area

### Component Props

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| collapsible | Enable collapse/expand functionalityboolean | true | FalseTrue |
| defaultCollapsed | Initial collapsed stateboolean | false | FalseTrue |
| sticky | Sticky positioning at top of viewportboolean | true | FalseTrue |
| fullyCollapsible | Completely hide sidebar when collapsed (zero width). Use with controlled mode.boolean | false | FalseTrue |
| collapsed | Controlled collapsed state.
When provided, component operates in controlled mode.boolean | - |  |
| onClick | Callback fired when sidebar is clicked.((event: MouseEvent<HTMLDivElement, MouseEvent>) => void) | - | - |
| logoSrc | - | - | logoSrc |
| logoSmallSrc | - | - | logoSmallSrc |

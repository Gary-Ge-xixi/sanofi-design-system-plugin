---
storybook_id: components-navigationheader-documentation--docs
title: "components/NavigationHeader/Documentation"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-navigationheader-documentation--docs"
import_path: "./src/components/NavigationHeader/Documentation.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:09:47.976Z
---

# Source: components/NavigationHeader/Documentation

- Storybook ID: `components-navigationheader-documentation--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-navigationheader-documentation--docs
- Import path: `./src/components/NavigationHeader/Documentation.mdx`
- Capture status: `extracted`

# NavigationHeader Component Documentation

## Overview

The NavigationHeader is a versatile navigation bar component designed for web applications, providing a standardized header solution with support for various navigation patterns including mega menus, cascading menus, and mobile-responsive layouts.

## Component Structure

The NavigationHeader is organized as a compound component with the following main subcomponents:

1. NavigationHeader.Root - The main container component
2. NavigationHeader.StartContent - Container for left-aligned navigation items
3. NavigationHeader.CenterContent - Container for centered content
4. NavigationHeader.EndContent - Container for right-aligned navigation items
5. NavigationHeader.Item - Individual navigation item container with responsive control
6. NavigationHeader.Action - Interactive element within an item
7. NavigationHeader.QuickAction - Special action items for mobile view
8. MegaMenu - Complex dropdown menu system
9. CascadingMenu - Multi-level cascading menu system

## Core Functionality

### Context System

The component uses React Context (NavigationHeaderContext) to manage state and communication between components:

```
// Core context provides:
- currentMegaMenuId: Tracks active mega menu
- openMegaMenu/closeMegaMenu: Controls mega menu visibility
- megaMenuTriggerMode: Determines interaction mode (click/hover)
- Various positioning and reference management functions
```

### Responsive Behavior

The component is fully responsive with:

- Adaptive layouts for different screen sizes
- Visibility control for different breakpoints via the Item component
- Mobile-specific menu handling

## Main Components Details

### Root

```
<NavigationHeader.Root
  logo={<img src="logo.svg" alt="Logo" />}
  mobileMenuIcon={<ButtonIcon icon="menu" />}
  sticky={true}
  mobileMenuFitContent={false}
  contained={false}
  fullWidth={false}
  megaMenuTriggerMode={TriggerMode.CLICK}
  isBackgroundBranded={false}
  onSkipToMainAction={() => document.getElementById("main").focus()}
>
  {/* Child components */}
</NavigationHeader.Root>
```

#### Props

- logo: ReactNode - Logo element to display
- mobileMenuIcon: ReactNode - Icon for mobile menu toggle
- sticky: boolean - Whether header sticks to top on scroll (default: true)
- mobileMenuFitContent: boolean - If mobile menu should fit content (default: false)
- contained: boolean - If content should be contained within boundaries (default: false)
- fullWidth: boolean - If component should take full width (default: false)
- megaMenuTriggerMode: TriggerMode - Whether mega menus open on click or hover (default: CLICK)
- isBackgroundBranded: boolean - Applies branded background styling (default: false)
- onSkipToMainAction: () => void - Accessibility function for keyboard users to skip navigation

### Item

```
<NavigationHeader.Item md={true} lg={true} xl={true} xxl={true} xxxl={true}>
  {/* Content */}
</NavigationHeader.Item>
```

#### Props

- Responsive visibility flags for different breakpoints (all default to true):
  - md: boolean - Display on medium screens
  - lg: boolean - Display on large screens
  - xl: boolean - Display on extra large screens
  - xxl: boolean - Display on 2x extra large screens
  - xxxl: boolean - Display on 3x extra large screens

### Action

A wrapper for interactive elements in the navigation:

```
<NavigationHeader.Action as="a" href="#">
  Link Text
</NavigationHeader.Action>
```

### MegaMenu System

```
<NavigationHeader.Item>
  <MegaMenu.Trigger
    menuContent={<MegaMenuContent />}
    hasActiveShadow={true}
    onOpen={() => console.log("opened")}
    onClose={() => console.log("closed")}
  >
    Trigger Text
  </MegaMenu.Trigger>
</NavigationHeader.Item>
```

#### Key MegaMenu Components

- MegaMenu.Trigger: Opens the mega menu
- MegaMenu.Item: Individual items within the mega menu
- MegaMenu.Title: Section title in the mega menu
- MegaMenu.QuickAction: Special action items in mega menu

## Interaction Patterns

### Opening/Closing Mega Menus

Mega menus can be triggered in two ways, controlled by the megaMenuTriggerMode prop:

1. Click mode (default): Opens on click, closes on outside click or another menu opening
2. Hover mode: Opens on hover, with appropriate timing for good UX

### Menu Portals

The implementation uses React's portal system to render menus outside the normal DOM hierarchy, while maintaining proper event bubbling and accessibility.

### Focus Management

When a mega menu opens, focus management ensures:

- First focusable element in the menu receives focus
- Focus trap within the mega menu for keyboard accessibility
- Focus returns to trigger on close

## Example Usage

### Basic Navigation Header

```
<NavigationHeader.Root logo={<img src="logo.svg" alt="Logo" />} sticky>
  <NavigationHeader.StartContent>
    <NavigationHeader.Item>
      <NavigationHeader.Action as="a" href="/home">
        Home
      </NavigationHeader.Action>
    </NavigationHeader.Item>
    <NavigationHeader.Item>
      <NavigationHeader.Action as="a" href="/about">
        About
      </NavigationHeader.Action>
    </NavigationHeader.Item>
  </NavigationHeader.StartContent>

  <NavigationHeader.EndContent>
    <NavigationHeader.Item>
      <Button label="Sign In" />
    </NavigationHeader.Item>
  </NavigationHeader.EndContent>
</NavigationHeader.Root>
```

## Managing Item Visibility

The NavigationHeader provides two complementary approaches for managing the visibility of navigation items:

### 1. Breakpoint-Based Visibility (Manual Control)

Use the responsive props on NavigationHeader.Item to control visibility at specific breakpoints. This is ideal when you want explicit control over which items appear at different screen sizes.

```
<NavigationHeader.StartContent>
  <NavigationHeader.Item>
    <NavigationHeader.Action>Always Visible</NavigationHeader.Action>
  </NavigationHeader.Item>

  <NavigationHeader.Item md={false}>
    <NavigationHeader.Action>
      Hidden on Medium Screens and Up
    </NavigationHeader.Action>
  </NavigationHeader.Item>

  <NavigationHeader.Item lg={false} xl={false}>
    <NavigationHeader.Action>
      Only Visible on Small & Medium Screens
    </NavigationHeader.Action>
  </NavigationHeader.Item>
</NavigationHeader.StartContent>
```

Available breakpoint props (all default to true):

- md - Display on medium screens (≥768px)
- lg - Display on large screens (≥1024px)
- xl - Display on extra large screens (≥1280px)
- xxl - Display on 2x extra large screens (≥1536px)
- xxxl - Display on 3x extra large screens (≥1920px)

When to use:

- ✅ You know exactly which items should appear at each breakpoint
- ✅ Content strategy varies by screen size (e.g., mobile-only quick actions)
- ✅ You need full control over responsive behavior

Important: With this approach, items are simply hidden via CSS (display: none). If you need a "More" dropdown for hidden items, you must implement it manually as a NavigationHeader.Item with a Menu component.

Example with manual "More" menu:

```
<NavigationHeader.StartContent>
  <NavigationHeader.Item>
    <NavigationHeader.Action>Home</NavigationHeader.Action>
  </NavigationHeader.Item>

  {/* Manual "More" menu - hidden on large screens */}
  <NavigationHeader.Item lg={false}>
    <Menu>
      <Menu.Trigger>
        <NavigationHeader.Action>
          More <Icon name={IconName.EXPAND_MORE} />
        </NavigationHeader.Action>
      </Menu.Trigger>
      <Menu.Dropdown>
        <Menu.Item>About</Menu.Item>
        <Menu.Item>Services</Menu.Item>
        <Menu.Item>Contact</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  </NavigationHeader.Item>

  {/* These items are shown on large screens only */}
  <NavigationHeader.Item md={false}>
    <NavigationHeader.Action>About</NavigationHeader.Action>
  </NavigationHeader.Item>
  <NavigationHeader.Item md={false}>
    <NavigationHeader.Action>Services</NavigationHeader.Action>
  </NavigationHeader.Item>
  <NavigationHeader.Item md={false}>
    <NavigationHeader.Action>Contact</NavigationHeader.Action>
  </NavigationHeader.Item>
</NavigationHeader.StartContent>
```

### 2. Automatic Overflow Handling (Dynamic Control)

Enable enableAutoOverflow on NavigationHeader.StartContent to automatically move items that don't fit into a "More" dropdown. This adapts to the actual available space, not just screen size.

```
<NavigationHeader.StartContent enableAutoOverflow>
  <NavigationHeader.Item>
    <NavigationHeader.Action as="a" href="/home">
      Home
    </NavigationHeader.Action>
  </NavigationHeader.Item>
  <NavigationHeader.Item>
    <NavigationHeader.Action as="a" href="/about">
      About
    </NavigationHeader.Action>
  </NavigationHeader.Item>
  <NavigationHeader.Item>
    <NavigationHeader.Action as="a" href="/services">
      Services
    </NavigationHeader.Action>
  </NavigationHeader.Item>
  {/* Items that don't fit will automatically move to a "More" dropdown */}
</NavigationHeader.StartContent>
```

Customizing the overflow menu:

```
<NavigationHeader.StartContent
  enableAutoOverflow
  overflowLabel="Autres"
  overflowAriaLabel="Voir plus de sections"
>
  {items}
</NavigationHeader.StartContent>
```

Props:

- enableAutoOverflow: boolean (default: false) - Enable automatic overflow handling
- overflowLabel: string (default: "More") - Label for the "More" button
- overflowAriaLabel: string (default: "Show more items") - Accessible label

When to use:

- ✅ You want items to adapt to available space automatically
- ✅ EndContent width varies (e.g., user profile with long names)
- ✅ You don't know in advance which items will fit
- ✅ You prefer a single consistent "More" menu across all viewports

### Decision Guide

| Scenario | Recommended Approach |
| --- | --- |
| Fixed navigation with known items per breakpoint | Breakpoint props only (implement manual "More" menu if
needed) |
| Dynamic space based on EndContent width | Auto overflow only |
| Mobile-specific items + dynamic desktop menu | Combine both |
| Legacy implementation with manual "More" | Breakpoint props only (keep existing manual "More"
implementation) |

### Important Notes

- Opt-in feature: enableAutoOverflow is false by default for backward compatibility
- Performance: Auto overflow adds measurement calculations; use only when needed
- Manual "More" menu: Don't enable enableAutoOverflow if you have a custom manual "More" implementation to avoid conflicts

### With Mega Menu

```
<NavigationHeader.Root logo={<img src="logo.svg" alt="Logo" />}>
  <NavigationHeader.StartContent>
    <NavigationHeader.Item>
      <MegaMenu.Trigger
        menuContent={
          <Grid>
            <Grid.Item size={4}>
              <MegaMenu.Title>Section 1</MegaMenu.Title>
              <MegaMenu.Item as="a" href="/link1">
                Link 1
              </MegaMenu.Item>
              <MegaMenu.Item as="a" href="/link2">
                Link 2
              </MegaMenu.Item>
            </Grid.Item>
            <Grid.Item size={4}>
              <MegaMenu.Title>Section 2</MegaMenu.Title>
              <MegaMenu.Item as="a" href="/link3">
                Link 3
              </MegaMenu.Item>
              <MegaMenu.Item as="a" href="/link4">
                Link 4
              </MegaMenu.Item>
            </Grid.Item>
          </Grid>
        }
      >
        Products
      </MegaMenu.Trigger>
    </NavigationHeader.Item>
  </NavigationHeader.StartContent>
</NavigationHeader.Root>
```

### Layout Behavior

The navigation header uses a flexible layout system:

- StartContent: Grows to use available space (flex: 1 1 auto), items aligned to the left
- EndContent: Takes only needed space (flex: 0 1 auto), items aligned to the right
- The parent container uses justify-content: space-between to separate start and end sections

```
┌─────────────────────────────────────────────────────────────┐
│ Logo │ StartContent (grows) ◄──space──► EndContent (fixed) │
│      │ [Item] [Item] [Item]              [Icon] [Button]   │
└─────────────────────────────────────────────────────────────┘
```

## Technical Implementation Details

1. Portal-based Menu Rendering:
The mega menu content is rendered using React's createPortal function to append it to a specific DOM node outside the normal hierarchy, ensuring proper z-index stacking and positioning.
2. Context State Management:
The NavigationHeaderContext manages:
  - Currently active mega menu ID
  - Menu open/close functions
  - DOM references for positioning
  - Callback functions for menu events
3. Accessibility Features:
  - Skip-to-main functionality
  - Keyboard navigation support
  - Focus management within menus
  - Proper ARIA attributes for menu states
4. Responsive Layout:
  - Uses CSS modules with responsive breakpoints
  - Implements visibility control per breakpoint
  - Provides mobile-specific menu handling
5. Interaction Modes:
  - Configurable between click and hover triggering
  - Handles edge cases like hover intent timing

## Best Practices

1. Organization:
  - Place related navigation items together
  - Group items logically in mega menus
  - Consider mobile users when designing navigation hierarchy
2. Styling:
  - Use the isBackgroundBranded prop for themed headers
  - Ensure sufficient contrast for navigation items
  - Maintain consistent spacing between items
3. Performance:
  - Lazy-load mega menu content when possible
  - Keep menu DOM structures simple
  - Avoid excessive nesting of menu items
4. Accessibility:
  - Always include onSkipToMainAction for keyboard users
  - Ensure all interactive elements are keyboard accessible
  - Maintain focus management within mega menus

## Advanced Implementation Notes

- The component uses CSS modules for styling isolation
- The sticky behavior is implemented with CSS position: sticky
- Menu positioning is calculated dynamically based on viewport and element dimensions
- The system supports both controlled and uncontrolled menu opening states

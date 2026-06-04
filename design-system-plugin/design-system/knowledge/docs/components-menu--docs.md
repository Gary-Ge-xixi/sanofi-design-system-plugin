---
storybook_id: components-menu--docs
title: "Components/Menu"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-menu--docs"
import_path: "./src/components/Menu/Menu.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:09:01.495Z
---

# Source: Components/Menu

- Storybook ID: `components-menu--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-menu--docs
- Import path: `./src/components/Menu/Menu.mdx`
- Capture status: `extracted`

# Menu

## A menu is a widget that offers a list of choices to the user, such as a set of
actions or functions. Menu widgets behave like native operating system menus,
such as the menus that pull down from the menubars commonly found at the top
of many desktop application windows. A menu is usually opened, or made
visible, by activating a menu button, choosing an item in a menu that opens a
sub menu, that opens a context specific menu. When a user activates a choice in a menu, the menu
usually closes unless the choice opened a submenu.See the WAI-ARIA Menu Pattern

## Example

## Anatomy

### Standard menu with a trigger element and dropdown

```
import { Menu, Button } from "@sanofi-accelerator/elements";

export const default = () => (
  <Menu> // Menu Container
    <Menu.Trigger> // Menu Trigger contains the element that will open the menu
      <Button label="Click Me" /> // This can be any React element that has a ref
    </Menu.Trigger>
    <Menu.Dropdown> // Menu Dropdown is the menu that will open and contains the menu items
      <Menu.Item
        iconBefore={<Menu.Item.Icon name={IconName.EDIT} />}
        iconAfter={<Menu.Item.Icon name={IconName.CHEVRON_RIGHT} />}
        description="Description goes here"
        shortcut="⌘S"
      >
        Menu item 1
      </Menu.Item>
      <Menu.SubMenu label="SubMenu"> // You can add SubMenus to the Menu
        <Menu.Item>SubMenu item</Menu.Item>
        <Menu.Item>SubMenu item</Menu.Item>
        <Menu.SubMenu label="SubMenu">
          <Menu.Item>SubMenu item</Menu.Item>
          <Menu.Item>SubMenu item</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>

      {/*
        You can have as many Menu.Item components as you want here

        The different types of Menu items are:
        - Menu.SubMenu
        - Menu.Item
        - Menu.RadioItem
        - Menu.CheckboxItem
        - Menu.ImageItem

      */}
    </Menu.Dropdown>
  </Menu>

),
};
```

### Context menu without a dropdown only and opens on right-Click

```
import { Menu } from "@sanofi-accelerator/elements";

export const default = () => (
<Menu isContextMenu> // isContextMenu props will make the menu open on right-click
  <Menu.Dropdown> // no need for a trigger element only the dropdown
    <Menu.Item>Menu item</Menu.Item>
    <Menu.SubMenu label="SubMenu" data-testid="menu-item-xxx">
      <Menu.Item>SubMenu item</Menu.Item>
      <Menu.Item>SubMenu item</Menu.Item>
      <Menu.Item>SubMenu item</Menu.Item>
      <Menu.SubMenu label="SubMenu" data-testid="sub-menu-item-xxx">
        <Menu.Item>SubMenu item</Menu.Item>
        <Menu.Item>SubMenu item</Menu.Item>
        <Menu.Item>SubMenu item</Menu.Item>
      </Menu.SubMenu>
    </Menu.SubMenu>
    <Menu.Item>Menu item</Menu.Item>
    <Menu.Item>Menu item</Menu.Item>
    <Menu.Item>Menu item</Menu.Item>
    <Menu.Item>Menu item</Menu.Item>
  </Menu.Dropdown>
</Menu>

),
};
```

## API Reference

### Menu

| Name | Description | Default |
| --- | --- | --- |
| isContextMenu | Opens on right-click instead of left-click.boolean | false |
| isOpen | Controls menu visibility (controlled mode).boolean | - |
| onOpenChange | Callback fired when menu opens/closes.((isOpen: boolean) => void) | - |
| fullWidth | Dropdown expands to trigger width.boolean | false |
| disabled | boolean | - |
| openOnHover | Opens on hover instead of click.boolean | false |
| disableAnimation | Disables open/close animations.boolean | false |
| role | "menu""combobox" | "menu" |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | "BrandTheme.primary" |

### Menu.SubMenu

| Name | Description | Default |
| --- | --- | --- |
| iconBefore | Icon displayed before the labelReactElement<unknown, string \| JSXElementConstructor<any>> | - |
| description | Description text below the labelstring | - |
| shortcut | Keyboard shortcut hint (e.g., "Ctrl+C")string | - |
| label* | ReactNode | - |
| onClick | ((event: MouseEvent<HTMLLIElement, MouseEvent>) => void) | - |

### Menu.Item

| Name | Description | Default |
| --- | --- | --- |
| iconBefore | Icon displayed before the labelReactElement<unknown, string \| JSXElementConstructor<any>> | - |
| iconAfter | object | - |
| description | Description text below the labelstring | - |
| shortcut | Keyboard shortcut hint (e.g., "Ctrl+C")string | - |
| children | string | - |
| isKeyboardHighlighted | boolean | - |
| disabled | Disables the item.boolean | false |
| size | Item size."small""medium" | "MenuItemSize.MEDIUM" |
| index | number | - |
| withChevron | Shows chevron arrow (for submenus).boolean | false |
| tooltip | Tooltip content when hoveringReactNode | - |
| tooltipPosition | Tooltip position."top-start""top""top-end""right-start""right""right-end""bottom-start""bottom""bottom-end""left-start""left""left-end"Show 4 more... | "TooltipPosition.TOP" |
| onClick | Callback fired when item is clicked((event: MouseEvent<HTMLLIElement, MouseEvent>, menuItemEvent?: Event) => void) | - |
| as | An override of the default HTML tag.
Can also be another React component.ElementType | - |

### Menu.RadioItem

| Name | Description | Default |
| --- | --- | --- |
| iconBefore | Icon displayed before the labelReactElement<unknown, string \| JSXElementConstructor<any>> | - |
| description | Description text below the labelstring | - |
| shortcut | Keyboard shortcut hint (e.g., "Ctrl+C")string | - |
| children* | Label contentReactNode | - |
| value | string | - |
| checked | Radio checked stateboolean | - |
| size | Item size."small""medium" | "MenuItemSize.MEDIUM" |
| disabled | Disables the item.boolean | false |
| onClick | Callback fired when item is clicked((event: MouseEvent<HTMLLIElement, MouseEvent>, menuItemEvent?: Event) => void) | - |
| tooltip | Tooltip content when hoveringReactNode | - |
| as | An override of the default HTML tag.
Can also be another React component."li" | - |
| isKeyboardHighlighted | boolean | - |
| index | number | - |
| withChevron | Shows chevron arrow (for submenus).boolean | false |
| tooltipPosition | Tooltip position."top-start""top""top-end""right-start""right""right-end""bottom-start""bottom""bottom-end""left-start""left""left-end"Show 4 more... | "TooltipPosition.TOP" |

### Menu.CheckboxItem

| Name | Description | Default |
| --- | --- | --- |
| description | Description text below the labelstring | - |
| shortcut | Keyboard shortcut hint (e.g., "Ctrl+C")string | - |
| children* | Label contentReactNode | - |
| value | string | - |
| size | Item size."small""medium" | "MenuItemSize.MEDIUM" |
| disabled | Disables the item.boolean | false |
| onClick | Callback fired when item is clicked((event: MouseEvent<HTMLLIElement, MouseEvent>, menuItemEvent?: Event) => void) | - |
| tooltip | Tooltip content when hoveringReactNode | - |
| as | An override of the default HTML tag.
Can also be another React component."li" | - |
| isKeyboardHighlighted | boolean | - |
| index | number | - |
| withChevron | Shows chevron arrow (for submenus).boolean | false |
| tooltipPosition | Tooltip position."top-start""top""top-end""right-start""right""right-end""bottom-start""bottom""bottom-end""left-start""left""left-end"Show 4 more... | "TooltipPosition.TOP" |
| classNames | Custom CSS classes for checkbox elements.{ container?: string; input?: string; icon?: string \| undefined; label?: string \| undefined; subtext?: string \| undefined; } \| undefined | - |
| brandTheme | Override the theme at component level."primary""secondary""tertiary" | - |
| disableAnimation | Disables the check/uncheck animation.boolean | false |
| indeterminate | Shows indeterminate (mixed) state.
Use for "select all" when partially selected.boolean | false |
| noValidate | Disables browser's native validation.boolean | false |
| subtext | Secondary text displayed below the label.ReactNode | - |
| checkboxSize | Override checkbox sizenumber | - |

### Menu.ImageItem

| Name | Description | Default |
| --- | --- | --- |
| description | Description text below the labelstring | - |
| shortcut | Keyboard shortcut hint (e.g., "Ctrl+C")string | - |
| children | string | - |
| imageSrc* | Image source URLstring | - |
| imageAlt* | Image alt textstring | - |
| size | Item size."small""medium" | "MenuItemSize.MEDIUM" |
| disabled | Disables the item.boolean | false |
| onClick | Callback fired when item is clicked((event: MouseEvent<HTMLLIElement, MouseEvent>, menuItemEvent?: Event) => void) | - |
| tooltip | Tooltip content when hoveringReactNode | - |
| as | An override of the default HTML tag.
Can also be another React component."li" | - |
| isKeyboardHighlighted | boolean | - |
| index | number | - |
| withChevron | Shows chevron arrow (for submenus).boolean | false |
| tooltipPosition | Tooltip position."top-start""top""top-end""right-start""right""right-end""bottom-start""bottom""bottom-end""left-start""left""left-end"Show 4 more... | "TooltipPosition.TOP" |

## Accessibility

The menu component is built with accessibility in mind. It follows the
ARIA Menu Pattern and
includes the following keyboard interactions:

- When the menu is closed and focus is on the menu button:
  - Enter or Space - Opens the menu
- When the menu is opened:
  - Tab or Shift + Tab - Closes the menu and moves
focus back to the menu button
  - Esc - Closes the menu
  - Up - Moves focus to the previous menu item (or the last item if no
item is focused)
  - Down - Moves focus to the next menu item (or the first item if no
item is focused)
  - Enter or Space - Activates the focused menu item

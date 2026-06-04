---
storybook_id: components-megamenu--docs
title: "Components/MegaMenu"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-megamenu--docs"
import_path: "./src/components/NavigationHeader/MegaMenu/MegaMenu.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:08:46.935Z
---

# Source: Components/MegaMenu

- Storybook ID: `components-megamenu--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-megamenu--docs
- Import path: `./src/components/NavigationHeader/MegaMenu/MegaMenu.mdx`
- Capture status: `extracted`

# MegaMenu

## The main menu for the NavigationHeader.

## How to use

Wrap a NavigationHeader.Action element with a MegaMenu.Trigger element

```
import { NavigationHeader, MegaMenu } from "@sanofi-accelerator/elements";

<NavigationHeader.Item>
<MegaMenu.Trigger menuContent={<MyCustomMegaMenu />}>
  <NavigationHeader.Action>Nav Item</NavigationHeader.Action>
</MegaMenu.Trigger>
</NavigationHeader.Item>
```

## Example

```
import { Grid, MegaMenu } from "@sanofi-accelerator/elements";

export function MyCustomMegaMenu() {
return (
  <Grid.Root>
    <Grid.Item sm={9}>
      <MegaMenu.Title as="a" href="#" isLink>
        Nav Item
      </MegaMenu.Title>
      <Grid.Root>
        <Grid.Item sm={3}>
          <MegaMenu.Item
            text="Menu Item 1"
            subtext="This is a menu item subtext to give more informations"
          />
        </Grid.Item>
        <Grid.Item sm={3}>
          <MegaMenu.Item
            text="Menu Item 2"
            subtext="This is a menu item subtext to give more informations"
          />
        </Grid.Item>
        <Grid.Item sm={3}>
          <MegaMenu.Item
            text="Menu Item 3"
            subtext="This is a menu item subtext to give more informations"
          />
        </Grid.Item>
        <Grid.Item sm={3}>
          <MegaMenu.Item
            text="Menu Item 4"
            subtext="This is a menu item subtext to give more informations"
            disabled
          />
        </Grid.Item>
      </Grid.Root>
    </Grid.Item>
    <Grid.Item sm={3}>
      <MegaMenu.Title>Featured Content</MegaMenu.Title>
    </Grid.Item>
  </Grid.Root>
);
}
```

## API Reference

### Item

An item menu with a text and subtext

| Name | Description | Default |
| --- | --- | --- |
| text | Main textReactNode | - |
| subtext | Secondary textReactNode | - |
| disabled | boolean | - |
| as | Render as another componentElementType | - |

### Title

Manages styles and accessibility of the interactive element of the menu item.

> Inherits from Title props.

| Name | Description | Default |
| --- | --- | --- |
| className | string | - |
| brandTheme | "primary""secondary""tertiary" | - |
| color | Color is one of --elements-color-semantic-text-... css variable or currentColor to inherit color from parent"disabled""success""error""strong""subtle""highlight""info""alert""inverse""default""accent-active""accent-default""accent-hover""helpertext""currentColor"Show 7 more... | - |
| fontWeight | Overrides the variant's default font weight.
Maps to --elements-core-font-weight-* design tokens.
When not provided, the variant's built-in font weight applies."bold""light""regular" | - |
| noLineHeight | boolean | - |
| variant | Title size variant determining font size and weight."title-1""title-2""title-3""title-4""title-5" | "TitleVariant.TITLE_1" |
| as | Render as another componentElementType | - |
| disabled | Activate disabled style.boolean | - |
| isLink | Add css styles to the componentboolean | - |

### Trigger

A wrapper to toggle the MegaMenu.

> Inherits from div tag.

| Name | Description | Default |
| --- | --- | --- |
| menuContent | Content of the MegaMenuReactNode | - |
| footer | Footer content at bottom of panelReactNode | - |
| hasActiveShadow | Display the active shadow when menu is openboolean | true |
| onOpen | Callback fired when menu opens(() => void) | - |
| onClose | Callback fired when menu closes(() => void) | - |
| isOpen | Controls menu visibility (controlled mode)boolean | - |

---
storybook_id: components-cascadingmenu--docs
title: "Components/CascadingMenu"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-cascadingmenu--docs"
import_path: "./src/components/NavigationHeader/CascadingMenu/CascadingMenu.mdx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:06:47.899Z
---

# Source: Components/CascadingMenu

- Storybook ID: `components-cascadingmenu--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-cascadingmenu--docs
- Import path: `./src/components/NavigationHeader/CascadingMenu/CascadingMenu.mdx`
- Capture status: `extracted`

# CascadingMenu

## A cascading menu for the NavigationHeader.

## Anatomy

```
import { Grid, CascadingMenu, MegaMenu, Typography } from "@sanofi-accelerator/elements";

export function MyCustomMegaMenuWithCascadingMenu() {
return (
  <Grid.Root>
    <Grid.Item md={8}>
      <Grid.Root>
        <CascadingMenu.Root>
          <Grid.Item sm={6} md={4}>
            <MegaMenu.Title as="a" href="#" isLink>
              Menu - Level 1
            </MegaMenu.Title>
            <CascadingMenu.Item label="Item - Level 1-1">
              <Grid.Item sm={6} md={4}>
                <MegaMenu.Title>Menu - Level 2</MegaMenu.Title>
                <CascadingMenu.Item label="Item - Level 2-1" as="a">
                  <Grid.Item sm={12} md={4}>
                    <MegaMenu.Title>Menu - Level 3</MegaMenu.Title>
                    <CascadingMenu.Item
                      as="a"
                      label="Item - Level 3-1"
                      href="#link-3-1"
                    />
                    <CascadingMenu.Item
                      as="a"
                      label="Item - Level 3-2"
                      href="#link-3-2"
                    />
                    <CascadingMenu.Item
                      as="a"
                      label="Item - Level 3-3"
                      href="#link-3-3"
                    />
                  </Grid.Item>
                </CascadingMenu.Item>
              </Grid.Item>
            </CascadingMenu.Item>
            <CascadingMenu.Item label="Item - Level 1-2">
              <Grid.Item sm={6}>
                <MegaMenu.Title disabled>Menu - Level 2</MegaMenu.Title>
                <Typography variant="body-medium">
                  Hello this is my Featured content 2
                </Typography>
              </Grid.Item>
            </CascadingMenu.Item>
            <CascadingMenu.Item label="Item - Level 1-3" disabled />
          </Grid.Item>
        </CascadingMenu.Root>
      </Grid.Root>
    </Grid.Item>
    <Grid.Item md={4}>
      <CascadingMenu.FeatureContent>
        <MegaMenu.Title>Featured content</MegaMenu.Title>
        <Typography variant="body-medium">
          Hello this is my Featured content 1
        </Typography>
      </CascadingMenu.FeatureContent>
    </Grid.Item>
  </Grid.Root>
);
}
```

The content of a CascadingMenu.Item will be rendered at the bottom of the CascadingMenu.Root element:

```
import { Grid, CascadingMenu, MegaMenu } from "@sanofi-accelerator/elements";

export function MyCustomMegaMenuWithCascadingMenu() {
return (
  <CascadingMenu.Root>
    ...
    <CascadingMenu.Item label="Item - Level 1-1">
      ### CONTENT OF THE ITEM [1]... ###
      ...
        <CascadingMenu.Item label="Item - Level 2-1">
          ### CONTENT OF THE ITEM [2]... ###
        </CascadingMenu.Item>
      ...
    </CascadingMenu.Item>
    ...
    ### [1] ...WILL BE RENDERED HERE ON CLICK ###
    ### [2] ...WILL BE RENDERED HERE ON CLICK ###
  </CascadingMenu.Root>
);
}
```

## API Reference

### Root

Root element of the CascadingMenu

> Inherits from div tag.

### Item

| Name | Description | Default |
| --- | --- | --- |
| label | Label for a CascadingMenu itemReactNode | - |
| disabled | boolean | - |
| as | Render as another componentElementType | - |
| children | Content of the menu- | - |

### FeatureContent

Adds a border-top separation on breakpoint mobile

> Inherits from div tag.

---
storybook_id: components-menu-menuitemimage--docs
title: "Components/Menu/MenuItemImage"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-menu-menuitemimage--docs"
import_path: "./src/components/Menu/dropdown/items/MenuItemImage.stories.tsx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:09:13.185Z
---

# Source: Components/Menu/MenuItemImage

- Storybook ID: `components-menu-menuitemimage--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-menu-menuitemimage--docs
- Import path: `./src/components/Menu/dropdown/items/MenuItemImage.stories.tsx`
- Capture status: `extracted`

# MenuItemImage

MenuItemImage component
Renders a menu item with an image on the left

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| description | Description text below the labelstring | - | Description goes here |
| shortcut | Keyboard shortcut hint (e.g., "Ctrl+C")string | - | ⌘S |
| children | string | - | Menu item 1 |
| imageSrc* | Image source URLstring | - | https://cdn.prod.accelerator.sanofi/elements/images/sanofi-fav.png |
| imageAlt* | Image alt textstring | - | Sanofi logo |
| size | Item size."small""medium" | "MenuItemSize.MEDIUM" | sizesmallmedium |
| disabled | Disables the item.boolean | false |  |
| onClick | Callback fired when item is clicked((event: MouseEvent<HTMLLIElement, MouseEvent>, menuItemEvent?: Event) => void) | - | - |
| tooltip | Tooltip content when hoveringReactNode | - |  |
| as | An override of the default HTML tag.
Can also be another React component."li" | - | asli |
| isKeyboardHighlighted | boolean | - |  |
| index | number | - |  |
| withChevron | Shows chevron arrow (for submenus).boolean | false |  |
| tooltipPosition | Tooltip position."top-start""top""top-end""right-start""right""right-end""bottom-start""bottom""bottom-end""left-start""left""left-end"Show 4 more... | "TooltipPosition.TOP" | tooltipPositionChoose option...top-starttoptop-endright-startrightright-endbottom-startbottombottom-endleft-startleftleft-end |

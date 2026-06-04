---
storybook_id: components-menu-menuitemradio--docs
title: "Components/Menu/MenuItemRadio"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-menu-menuitemradio--docs"
import_path: "./src/components/Menu/dropdown/items/MenuItemRadio.stories.tsx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:09:17.375Z
---

# Source: Components/Menu/MenuItemRadio

- Storybook ID: `components-menu-menuitemradio--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-menu-menuitemradio--docs
- Import path: `./src/components/Menu/dropdown/items/MenuItemRadio.stories.tsx`
- Capture status: `extracted`

# MenuItemRadio

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| iconBefore | Icon displayed before the labelReactElement<unknown, string \| JSXElementConstructor<any>> | - | {$$typeof : Symbol(react.transitional.element)type : ({size:t=Me,className:n,...o})=>{const s=e.useRef(null);Ye({name:"Menu.Icon",sizeProps:t,contextSize:Me,ref:s});const a=Ne();return i.jsx(fe.Provider,{value:"menu-icon",children:i.jsx(we,{ref:s,size:t,...o,className:x(ve["menu-logo-icon"],{[ve["nav-header-action-icon"]]:a==="nav-header-action"},n),"aria-hidden":!0})})}key : nullref : null{...} 1 key} |
| description | Description text below the labelstring | - | Description goes here |
| shortcut | Keyboard shortcut hint (e.g., "Ctrl+C")string | - | ⌘S |
| children* | Label contentReactNode | - | "Menu item 1" |
| value | string | - | value |
| checked | Radio checked stateboolean | - | FalseTrue |
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

## Stories

### Default

### Checked

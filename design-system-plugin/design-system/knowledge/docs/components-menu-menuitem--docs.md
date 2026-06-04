---
storybook_id: components-menu-menuitem--docs
title: "Components/Menu/MenuItem"
name: "Docs"
source_url: "https://elements.prod.accelerator.sanofi/?path=/docs/components-menu-menuitem--docs"
import_path: "./src/components/Menu/dropdown/items/MenuItem.stories.tsx"
capture_tool: opencli browser
capture_status: extracted
captured_at: 2026-06-02T11:09:04.890Z
---

# Source: Components/Menu/MenuItem

- Storybook ID: `components-menu-menuitem--docs`
- Source URL: https://elements.prod.accelerator.sanofi/?path=/docs/components-menu-menuitem--docs
- Import path: `./src/components/Menu/dropdown/items/MenuItem.stories.tsx`
- Capture status: `extracted`

# MenuItem

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| iconBefore | Icon displayed before the labelReactElement<unknown, string \| JSXElementConstructor<any>> | - | {$$typeof : Symbol(react.transitional.element)type : ({size:t=Me,className:n,...o})=>{const s=e.useRef(null);Ye({name:"Menu.Icon",sizeProps:t,contextSize:Me,ref:s});const a=Ne();return i.jsx(fe.Provider,{value:"menu-icon",children:i.jsx(we,{ref:s,size:t,...o,className:x(ve["menu-logo-icon"],{[ve["nav-header-action-icon"]]:a==="nav-header-action"},n),"aria-hidden":!0})})}key : nullref : null{...} 1 key} |
| iconAfter | object | - | {$$typeof : Symbol(react.transitional.element)type : ({size:t=Me,className:n,...o})=>{const s=e.useRef(null);Ye({name:"Menu.Icon",sizeProps:t,contextSize:Me,ref:s});const a=Ne();return i.jsx(fe.Provider,{value:"menu-icon",children:i.jsx(we,{ref:s,size:t,...o,className:x(ve["menu-logo-icon"],{[ve["nav-header-action-icon"]]:a==="nav-header-action"},n),"aria-hidden":!0})})}key : nullref : null{...} 1 key} |
| description | Description text below the labelstring | - | Description goes here |
| shortcut | Keyboard shortcut hint (e.g., "Ctrl+C")string | - | ⌘S |
| children | string | - | Menu item 1 |
| isKeyboardHighlighted | boolean | - |  |
| disabled | Disables the item.boolean | false |  |
| size | Item size."small""medium" | "MenuItemSize.MEDIUM" | sizesmallmedium |
| index | number | - |  |
| withChevron | Shows chevron arrow (for submenus).boolean | false |  |
| tooltip | Tooltip content when hoveringReactNode | - |  |
| tooltipPosition | Tooltip position."top-start""top""top-end""right-start""right""right-end""bottom-start""bottom""bottom-end""left-start""left""left-end"Show 4 more... | "TooltipPosition.TOP" | tooltipPositionChoose option...top-starttoptop-endright-startrightright-endbottom-startbottombottom-endleft-startleftleft-end |
| onClick | Callback fired when item is clicked((event: MouseEvent<HTMLLIElement, MouseEvent>, menuItemEvent?: Event) => void) | - | - |
| as | An override of the default HTML tag.
Can also be another React component.ElementType | - |  |

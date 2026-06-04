import{j as e,I as p}from"./iframe-DU6-gHk6.js";import{b as m,C as n}from"./Menu-CWIQfm21.js";import{O as d}from"./OpenedMenuContext-nm4ZoOry.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-3ve6LLZH.js";import"./useContextIconWarning-D875bWeG.js";import"./useDescendantIndex-CcCEtTNw.js";import"./useIsomorphicLayoutEffect-BUEPmblJ.js";import"./server-UKFEPc_w.js";import"./Checkbox-DhaBB2L5.js";import"./device-DatVb-hs.js";import"./rtl-BaEAq4kD.js";import"./DescendantsIndexerProvider-hbUwjT3b.js";const R={title:"Components/Menu/MenuItemRadio",component:m},r={tags:["isHidden"],parameters:{chromatic:{disableSnapshot:!0}},render:({iconBefore:t,description:i,shortcut:s,children:c,value:a,checked:u})=>e.jsx(d,{children:e.jsx(n.Dropdown,{children:e.jsx(n.RadioItem,{iconBefore:t,description:i,shortcut:s,value:a,checked:u,children:c})})}),args:{iconBefore:e.jsx(n.Item.Icon,{name:p.EDIT}),description:"Description goes here",shortcut:"⌘S",children:"Menu item 1",value:"value",checked:!1}},o={tags:["isHidden"],parameters:{chromatic:{disableSnapshot:!0}},render:({description:t,shortcut:i,children:s,value:c,checked:a})=>e.jsx(d,{children:e.jsx(n.Dropdown,{children:e.jsx(n.RadioItem,{description:t,shortcut:i,value:c,checked:a,children:s})})}),args:{description:"Description goes here",shortcut:"⌘S",children:"Menu item 1",value:"value",checked:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ["isHidden"],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: ({
    iconBefore,
    description,
    shortcut,
    children,
    value,
    checked
  }) => <OpenedMenuContextProvider>
      <Menu.Dropdown>
        <Menu.RadioItem iconBefore={iconBefore} description={description} shortcut={shortcut} value={value} checked={checked}>
          {children}
        </Menu.RadioItem>
      </Menu.Dropdown>
    </OpenedMenuContextProvider>,
  args: {
    iconBefore: <Menu.Item.Icon name={IconName.EDIT} />,
    description: "Description goes here",
    shortcut: "⌘S",
    children: "Menu item 1",
    value: "value",
    checked: false
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["isHidden"],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: ({
    description,
    shortcut,
    children,
    value,
    checked
  }) => <OpenedMenuContextProvider>
      <Menu.Dropdown>
        <Menu.RadioItem description={description} shortcut={shortcut} value={value} checked={checked}>
          {children}
        </Menu.RadioItem>
      </Menu.Dropdown>
    </OpenedMenuContextProvider>,
  args: {
    description: "Description goes here",
    shortcut: "⌘S",
    children: "Menu item 1",
    value: "value",
    checked: true
  }
}`,...o.parameters?.docs?.source}}};const O=["Default","Checked"];export{o as Checked,r as Default,O as __namedExportsOrder,R as default};

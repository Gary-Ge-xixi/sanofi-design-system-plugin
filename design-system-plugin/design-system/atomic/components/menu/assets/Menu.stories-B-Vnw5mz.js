import{j as e,f as d,i as T,I as s,r as f}from"./iframe-DU6-gHk6.js";import{C as n,M as u}from"./Menu-CWIQfm21.js";import{a as E}from"./use-get-sanofi-logo-BZJA-8-R.js";import{c as S}from"./create-toast-Bk21w6Tb.js";const{userEvent:r,within:c}=__STORYBOOK_MODULE_TEST__,y={title:"Components/Menu",component:n},k=({disabled:t=!1,openOnHover:i=!1,disableAnimation:l=!1})=>e.jsxs(n,{openOnHover:i,disableAnimation:l,children:[e.jsx(n.Trigger,{children:e.jsx(d,{label:"Click Me","data-testid":"button"})}),e.jsxs(n.Dropdown,{children:[e.jsx(n.Item,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),description:"Description goes here",shortcut:"⌘S",disabled:t,onClick:()=>{S({title:"Click on Menu 1",variant:"info"})},children:"Menu item 1"}),e.jsx(n.Item,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),description:"Description goes here",shortcut:"⌘S",disabled:t,onClick:()=>{S({title:"Click on Menu 2",variant:"info"})},children:"Menu item 2"}),e.jsx(n.Item,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),description:"Description goes here",shortcut:"⌘S",disabled:t,onClick:()=>{S({title:"Click on Menu 3",variant:"info"})},children:"Menu item 3"}),e.jsx(n.Item,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),description:"Description goes here",shortcut:"⌘S",disabled:t,onClick:()=>{S({title:"Click on Menu 4",variant:"info"})},children:"Menu item 4"})]})]}),o={isContextMenu:!1,isOpen:!1,onOpenChange:()=>{},fullWidth:!1,disabled:!1,openOnHover:!1,disableAnimation:!1},m={args:{...o},render:t=>e.jsx(k,{disabled:t.disabled,openOnHover:t.openOnHover,disableAnimation:t.disableAnimation}),play:async({canvasElement:t})=>{const i=c(t);await r.click(i.getByTestId("button"))}},B=({disabled:t,openOnHover:i,disableAnimation:l})=>{const[v,D]=f.useState(0);return e.jsxs(n,{role:"combobox",openOnHover:i,disableAnimation:l,children:[e.jsx(n.Trigger,{children:e.jsx(d,{label:"Click Me","data-testid":"button"})}),e.jsxs(n.Dropdown,{children:[e.jsx(n.RadioItem,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),checked:v===0,description:"Description goes here",onClick:()=>D(0),disabled:t,withChevron:!0,children:"Menu item radio 1"}),e.jsx(n.RadioItem,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),checked:v===1,description:"Description goes here",onClick:()=>D(1),disabled:t,withChevron:!0,children:"Menu item radio 2"}),e.jsx(n.RadioItem,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),checked:v===2,description:"Description goes here",onClick:()=>D(2),disabled:t,children:"Menu item radio 3"})]})]})},C=({disabled:t,openOnHover:i,disableAnimation:l})=>e.jsxs("div",{style:{display:"flex",gap:20},children:[e.jsxs("div",{children:[e.jsx(T,{style:{marginBottom:10},children:"Menu Medium"}),e.jsxs(n,{openOnHover:i,disableAnimation:l,children:[e.jsx(n.Trigger,{children:e.jsx(d,{label:"Click Me","data-testid":"button-medium"})}),e.jsxs(n.Dropdown,{children:[e.jsx(n.Item,{size:u.MEDIUM,iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),description:"Description goes here",disabled:t,withChevron:!0,children:"Menu item 1"}),e.jsx(n.Item,{size:u.MEDIUM,iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),description:"Description goes here",disabled:t,withChevron:!0,children:"Menu item 2"}),e.jsx(n.Item,{size:u.MEDIUM,iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),description:"Description goes here",disabled:t,withChevron:!0,children:"Menu item 3"})]})]})]}),e.jsxs("div",{children:[e.jsx(T,{style:{marginBottom:10},children:"Menu Small"}),e.jsxs(n,{openOnHover:i,disableAnimation:l,children:[e.jsx(n.Trigger,{children:e.jsx(d,{label:"Click Me","data-testid":"button-small"})}),e.jsxs(n.Dropdown,{children:[e.jsx(n.Item,{size:u.SMALL,iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),description:"Description goes here",disabled:t,withChevron:!0,children:"Menu item 1"}),e.jsx(n.Item,{size:u.SMALL,iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),description:"Description goes here",disabled:t,withChevron:!0,children:"Menu item 2"}),e.jsx(n.Item,{size:u.SMALL,iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),description:"Description goes here",disabled:t,withChevron:!0,children:"Menu item 3"})]})]})]})]}),a=({disabled:t})=>e.jsx(n.Item,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),shortcut:"⌘S",description:"Description goes here",disabled:t,children:"Menu item"}),b={args:{...o},render:t=>e.jsx(B,{disabled:t.disabled,openOnHover:t.openOnHover,disableAnimation:t.disableAnimation}),play:async({canvasElement:t})=>{const i=c(t);await r.click(i.getByTestId("button"))}},M={args:{...o},render:t=>e.jsxs(n,{openOnHover:t.openOnHover,disableAnimation:t.disableAnimation,children:[e.jsx(n.Trigger,{children:e.jsx(d,{label:"Click Me","data-testid":"button"})}),e.jsxs(n.Dropdown,{children:[e.jsx(n.CheckboxItem,{value:"checkbox-1",description:"Description goes here",disabled:t.disabled,children:"Menu Item Checkbox 1"}),e.jsx(n.CheckboxItem,{value:"checkbox-2",description:"Description goes here",disabled:t.disabled,children:"Menu Item Checkbox 2"})]})]}),play:async({canvasElement:t})=>{const i=c(t);await r.click(i.getByTestId("button"))}},I={args:{...o},render:t=>e.jsxs(n,{openOnHover:t.openOnHover,disableAnimation:t.disableAnimation,children:[e.jsx(n.Trigger,{children:e.jsx(d,{label:"Click Me","data-testid":"button"})}),e.jsxs(n.Dropdown,{children:[e.jsx(n.Item,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),shortcut:"⌘S",disabled:t.disabled,children:"Menu item 1"}),e.jsx(n.Item,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),shortcut:"⌘S",disabled:t.disabled,children:"Menu item 2"}),e.jsx(n.Item,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),shortcut:"⌘S",disabled:t.disabled,children:"Menu item 3"}),e.jsx(n.Item,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),shortcut:"⌘S",disabled:t.disabled,children:"Menu item 4"}),e.jsx(n.Item,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),shortcut:"⌘S",disabled:t.disabled,children:"Menu item 5"}),e.jsx(n.Item,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),shortcut:"⌘S",disabled:t.disabled,children:"Menu item 6"}),e.jsx(n.Item,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),shortcut:"⌘S",disabled:t.disabled,children:"Menu item 7"}),e.jsx(n.Item,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),shortcut:"⌘S",disabled:t.disabled,children:"Menu item 8"}),e.jsx(n.Item,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),shortcut:"⌘S",disabled:t.disabled,children:"Menu item 9"}),e.jsx(n.Item,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),shortcut:"⌘S",disabled:t.disabled,children:"Menu item 10"}),e.jsx(n.Item,{iconBefore:e.jsx(n.Item.Icon,{name:s.EDIT}),shortcut:"⌘S",disabled:t.disabled,children:"Menu item 11"})]})]}),play:async({canvasElement:t})=>{const i=c(t);await r.click(i.getByTestId("button"))}},h={args:{...o},render:t=>e.jsxs(n,{openOnHover:t.openOnHover,disableAnimation:t.disableAnimation,children:[e.jsx(n.Trigger,{children:e.jsx(d,{label:"Click Me","data-testid":"button"})}),e.jsxs(n.Dropdown,{children:[e.jsxs(n.Section,{title:"Section title",children:[e.jsx(a,{disabled:t.disabled}),e.jsx(a,{disabled:t.disabled}),e.jsx(a,{disabled:t.disabled}),e.jsx(a,{disabled:t.disabled}),e.jsx(a,{disabled:t.disabled}),e.jsx(a,{disabled:t.disabled})]}),e.jsx(n.Section.Divider,{}),e.jsxs(n.Section,{title:"Section title",children:[e.jsx(a,{disabled:t.disabled}),e.jsx(a,{disabled:t.disabled}),e.jsx(a,{disabled:t.disabled})]})]})]}),play:async({canvasElement:t})=>{const i=c(t);await r.click(i.getByTestId("button"))}},x={args:{...o},render:t=>e.jsxs(n,{openOnHover:t.openOnHover,disableAnimation:t.disableAnimation,children:[e.jsx(n.Trigger,{children:e.jsx(d,{label:"Click Me","data-testid":"button"})}),e.jsxs(n.Dropdown,{children:[e.jsx(n.Item,{disabled:t.disabled,children:"Menu item"}),e.jsxs(n.SubMenu,{label:"SubMenu","data-testid":"menu-item-xxx",children:[e.jsx(n.Item,{disabled:t.disabled,children:"SubMenu item"}),e.jsx(n.Item,{disabled:t.disabled,children:"SubMenu item"}),e.jsx(n.Item,{disabled:t.disabled,children:"SubMenu item"}),e.jsxs(n.SubMenu,{label:"SubMenu","data-testid":"sub-menu-item-xxx",children:[e.jsx(n.Item,{disabled:t.disabled,children:"SubMenu item"}),e.jsx(n.Item,{disabled:t.disabled,children:"SubMenu item"}),e.jsx(n.Item,{disabled:t.disabled,children:"SubMenu item"})]})]}),e.jsx(n.Item,{disabled:t.disabled,children:"Menu item"}),e.jsx(n.Item,{disabled:t.disabled,children:"Menu item"}),e.jsx(n.Item,{disabled:t.disabled,children:"Menu item"}),e.jsx(n.Item,{disabled:t.disabled,children:"Menu item"})]})]}),play:async({canvasElement:t})=>{const i=c(t);await r.click(i.getByTestId("button"))}},w=t=>{const i=E();return e.jsxs(n,{openOnHover:t.openOnHover,disableAnimation:t.disableAnimation,children:[e.jsx(n.Trigger,{children:e.jsx(d,{label:"Click Me","data-testid":"button"})}),e.jsxs(n.Dropdown,{children:[e.jsx(n.ImageItem,{imageSrc:i,imageAlt:"Sanofi logo",description:"Description goes here",disabled:t.disabled,children:"Menu item 1"}),e.jsx(n.ImageItem,{imageSrc:i,imageAlt:"Sanofi logo",description:"Description goes here",disabled:t.disabled,children:"Menu item 2"}),e.jsx(n.ImageItem,{imageSrc:i,imageAlt:"Sanofi logo",description:"Description goes here",disabled:t.disabled,children:"Menu item 3"})]})]})},p={args:{...o},render:t=>e.jsx(w,{...t}),play:async({canvasElement:t})=>{const i=c(t);await r.click(i.getByTestId("button"))}},g={args:{...o},parameters:{chromatic:{disableSnapshot:!0}},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(T,{children:"Right-click anywhere to let the context menu appear"}),e.jsx(n,{isContextMenu:!0,disableAnimation:t.disableAnimation,children:e.jsxs(n.Dropdown,{children:[e.jsx(n.Item,{disabled:t.disabled,children:"Menu item"}),e.jsxs(n.SubMenu,{label:"SubMenu","data-testid":"menu-item-xxx",children:[e.jsx(n.Item,{disabled:t.disabled,children:"SubMenu item"}),e.jsx(n.Item,{disabled:t.disabled,children:"SubMenu item"}),e.jsx(n.Item,{disabled:t.disabled,children:"SubMenu item"}),e.jsxs(n.SubMenu,{label:"SubMenu","data-testid":"sub-menu-item-xxx",children:[e.jsx(n.Item,{disabled:t.disabled,children:"SubMenu item"}),e.jsx(n.Item,{disabled:t.disabled,children:"SubMenu item"}),e.jsx(n.Item,{disabled:t.disabled,children:"SubMenu item"})]})]}),e.jsx(n.Item,{disabled:t.disabled,children:"Menu item"}),e.jsx(n.Item,{disabled:t.disabled,children:"Menu item"}),e.jsx(n.Item,{disabled:t.disabled,children:"Menu item"}),e.jsx(n.Item,{disabled:t.disabled,children:"Menu item"})]})})]})},j={args:{...o},render:t=>e.jsx(C,{disabled:t.disabled,openOnHover:t.openOnHover,disableAnimation:t.disableAnimation}),play:async({canvasElement:t})=>{const i=c(t);await r.click(i.getByTestId("button-medium"))}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultsArgs
  },
  render: args => <MenuComponent disabled={args.disabled} openOnHover={args.openOnHover} disableAnimation={args.disableAnimation} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("button"));
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultsArgs
  },
  render: args => <RenderSelectedMenu disabled={args.disabled} openOnHover={args.openOnHover} disableAnimation={args.disableAnimation} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("button"));
  }
}`,...b.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultsArgs
  },
  render: args => <Menu openOnHover={args.openOnHover} disableAnimation={args.disableAnimation}>
      <Menu.Trigger>
        <Button label="Click Me" data-testid="button" />
      </Menu.Trigger>
      <Menu.Dropdown>
        <Menu.CheckboxItem value="checkbox-1" description="Description goes here" disabled={args.disabled}>
          Menu Item Checkbox 1
        </Menu.CheckboxItem>
        <Menu.CheckboxItem value="checkbox-2" description="Description goes here" disabled={args.disabled}>
          Menu Item Checkbox 2
        </Menu.CheckboxItem>
      </Menu.Dropdown>
    </Menu>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("button"));
  }
}`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultsArgs
  },
  render: args => <Menu openOnHover={args.openOnHover} disableAnimation={args.disableAnimation}>
      <Menu.Trigger>
        <Button label="Click Me" data-testid="button" />
      </Menu.Trigger>
      <Menu.Dropdown>
        <Menu.Item iconBefore={<Menu.Item.Icon name={IconName.EDIT} />} shortcut="⌘S" disabled={args.disabled}>
          Menu item 1
        </Menu.Item>
        <Menu.Item iconBefore={<Menu.Item.Icon name={IconName.EDIT} />} shortcut="⌘S" disabled={args.disabled}>
          Menu item 2
        </Menu.Item>
        <Menu.Item iconBefore={<Menu.Item.Icon name={IconName.EDIT} />} shortcut="⌘S" disabled={args.disabled}>
          Menu item 3
        </Menu.Item>
        <Menu.Item iconBefore={<Menu.Item.Icon name={IconName.EDIT} />} shortcut="⌘S" disabled={args.disabled}>
          Menu item 4
        </Menu.Item>
        <Menu.Item iconBefore={<Menu.Item.Icon name={IconName.EDIT} />} shortcut="⌘S" disabled={args.disabled}>
          Menu item 5
        </Menu.Item>
        <Menu.Item iconBefore={<Menu.Item.Icon name={IconName.EDIT} />} shortcut="⌘S" disabled={args.disabled}>
          Menu item 6
        </Menu.Item>
        <Menu.Item iconBefore={<Menu.Item.Icon name={IconName.EDIT} />} shortcut="⌘S" disabled={args.disabled}>
          Menu item 7
        </Menu.Item>
        <Menu.Item iconBefore={<Menu.Item.Icon name={IconName.EDIT} />} shortcut="⌘S" disabled={args.disabled}>
          Menu item 8
        </Menu.Item>
        <Menu.Item iconBefore={<Menu.Item.Icon name={IconName.EDIT} />} shortcut="⌘S" disabled={args.disabled}>
          Menu item 9
        </Menu.Item>
        <Menu.Item iconBefore={<Menu.Item.Icon name={IconName.EDIT} />} shortcut="⌘S" disabled={args.disabled}>
          Menu item 10
        </Menu.Item>
        <Menu.Item iconBefore={<Menu.Item.Icon name={IconName.EDIT} />} shortcut="⌘S" disabled={args.disabled}>
          Menu item 11
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("button"));
  }
}`,...I.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultsArgs
  },
  render: args => <Menu openOnHover={args.openOnHover} disableAnimation={args.disableAnimation}>
      <Menu.Trigger>
        <Button label="Click Me" data-testid="button" />
      </Menu.Trigger>
      <Menu.Dropdown>
        <Menu.Section title="Section title">
          <MenuItem disabled={args.disabled} />
          <MenuItem disabled={args.disabled} />
          <MenuItem disabled={args.disabled} />
          <MenuItem disabled={args.disabled} />
          <MenuItem disabled={args.disabled} />
          <MenuItem disabled={args.disabled} />
        </Menu.Section>
        <Menu.Section.Divider />
        <Menu.Section title="Section title">
          <MenuItem disabled={args.disabled} />
          <MenuItem disabled={args.disabled} />
          <MenuItem disabled={args.disabled} />
        </Menu.Section>
      </Menu.Dropdown>
    </Menu>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("button"));
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultsArgs
  },
  render: args => <Menu openOnHover={args.openOnHover} disableAnimation={args.disableAnimation}>
      <Menu.Trigger>
        <Button label="Click Me" data-testid="button" />
      </Menu.Trigger>
      <Menu.Dropdown>
        <Menu.Item disabled={args.disabled}>Menu item</Menu.Item>
        <Menu.SubMenu label="SubMenu" data-testid="menu-item-xxx">
          <Menu.Item disabled={args.disabled}>SubMenu item</Menu.Item>
          <Menu.Item disabled={args.disabled}>SubMenu item</Menu.Item>
          <Menu.Item disabled={args.disabled}>SubMenu item</Menu.Item>
          <Menu.SubMenu label="SubMenu" data-testid="sub-menu-item-xxx">
            <Menu.Item disabled={args.disabled}>SubMenu item</Menu.Item>
            <Menu.Item disabled={args.disabled}>SubMenu item</Menu.Item>
            <Menu.Item disabled={args.disabled}>SubMenu item</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.Item disabled={args.disabled}>Menu item</Menu.Item>
        <Menu.Item disabled={args.disabled}>Menu item</Menu.Item>
        <Menu.Item disabled={args.disabled}>Menu item</Menu.Item>
        <Menu.Item disabled={args.disabled}>Menu item</Menu.Item>
      </Menu.Dropdown>
    </Menu>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("button"));
  }
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultsArgs
  },
  render: args => <ImageStoryContent {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("button"));
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultsArgs
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: args => <>
      <Typography>
        Right-click anywhere to let the context menu appear
      </Typography>
      <Menu isContextMenu disableAnimation={args.disableAnimation}>
        <Menu.Dropdown>
          <Menu.Item disabled={args.disabled}>Menu item</Menu.Item>
          <Menu.SubMenu label="SubMenu" data-testid="menu-item-xxx">
            <Menu.Item disabled={args.disabled}>SubMenu item</Menu.Item>
            <Menu.Item disabled={args.disabled}>SubMenu item</Menu.Item>
            <Menu.Item disabled={args.disabled}>SubMenu item</Menu.Item>
            <Menu.SubMenu label="SubMenu" data-testid="sub-menu-item-xxx">
              <Menu.Item disabled={args.disabled}>SubMenu item</Menu.Item>
              <Menu.Item disabled={args.disabled}>SubMenu item</Menu.Item>
              <Menu.Item disabled={args.disabled}>SubMenu item</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
          <Menu.Item disabled={args.disabled}>Menu item</Menu.Item>
          <Menu.Item disabled={args.disabled}>Menu item</Menu.Item>
          <Menu.Item disabled={args.disabled}>Menu item</Menu.Item>
          <Menu.Item disabled={args.disabled}>Menu item</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
}`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultsArgs
  },
  render: args => <RenderSizesMenu disabled={args.disabled} openOnHover={args.openOnHover} disableAnimation={args.disableAnimation} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("button-medium"));
  }
}`,...j.parameters?.docs?.source}}};const A=["Default","Selected","Checkbox","WithScroll","WithSections","WithSubMenus","Image","ContextMenu","Sizes"],_=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:M,ContextMenu:g,Default:m,Image:p,Selected:b,Sizes:j,WithScroll:I,WithSections:h,WithSubMenus:x,__namedExportsOrder:A,default:y},Symbol.toStringTag,{value:"Module"}));export{m as D,_ as M};

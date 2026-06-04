import{I as t,j as n}from"./iframe-DU6-gHk6.js";import{L as r}from"./Link-Dsc7KtyT.js";import{I as l,a as c}from"./LinkEnum-B9P4sa5j.js";const m={component:r,title:"Components/Link",argTypes:{}},d={children:"Link",href:"#",size:"medium",variant:"inline",disabled:!1,iconPosition:l.END,onClick:()=>{console.log("click")},target:"_blank",rel:"noopener noreferrer",classNames:{container:"",content:"",icon:""}},o={args:{...d,iconName:t.OPEN_IN_NEW},render:e=>n.jsx(r,{...e})},s={decorators:[e=>n.jsx("div",{style:{background:"var(--elements-color-semantic-background-neutral)",padding:"16px"},children:n.jsx(e,{})})],args:{...d,variant:"inlineInverse",iconName:t.OPEN_IN_NEW},parameters:{backgrounds:{default:"inverse"}}},i={render:e=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",gap:"24px"},children:[n.jsx(r,{...e,children:"Default Link"}),n.jsx(r,{...e,iconName:t.OPEN_IN_NEW,children:"End position"}),n.jsx(r,{...e,iconName:t.OPEN_IN_NEW,iconPosition:l.START,children:"Start position"}),n.jsx(r,{...e,iconName:t.LENS,children:"Other Icon"})]})},a={render:e=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsx(r,{size:c.SMALL,href:"#",children:"Small"}),n.jsx(r,{size:c.MEDIUM,href:"#",children:"Medium"}),n.jsx(r,{size:c.LARGE,href:"#",children:"Large"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    iconName: IconName.OPEN_IN_NEW
  },
  render: args => <Link {...args} />
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    background: "var(--elements-color-semantic-background-neutral)",
    padding: "16px"
  }}>
        <Story />
      </div>],
  args: {
    ...defaultArgs,
    variant: "inlineInverse",
    iconName: IconName.OPEN_IN_NEW
  },
  parameters: {
    backgrounds: {
      default: "inverse"
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  /**
   * This is a hack to have a good display of the code in the storybook
   * cf github issue https://github.com/storybookjs/storybook/issues/23248
   */

  render: args => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      gap: "24px"
    }}>
        <Link {...args}>Default Link</Link>
        <Link {...args} iconName={IconName.OPEN_IN_NEW}>
          End position
        </Link>
        <Link {...args} iconName={IconName.OPEN_IN_NEW} iconPosition={IconPosition.START}>
          Start position
        </Link>
        <Link {...args} iconName={IconName.LENS}>
          Other Icon
        </Link>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  /**
   * This is a hack to have a good display of the code in the storybook
   * cf github issue https://github.com/storybookjs/storybook/issues/23248
   */

  render: _args => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px"
    }}>
        <Link size={LinkSize.SMALL} href="#">
          Small
        </Link>
        <Link size={LinkSize.MEDIUM} href="#">
          Medium
        </Link>
        <Link size={LinkSize.LARGE} href="#">
          Large
        </Link>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const u=["Default","Inverse","PositionIcon","Sizes"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Inverse:s,PositionIcon:i,Sizes:a,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{o as D,k as L};

import{h as m,j as n,I as p}from"./iframe-DU6-gHk6.js";import{I as S,L as l,a as r}from"./LinkEnum-B9P4sa5j.js";import{L as o}from"./LinkStandalone-CcuMMn66.js";import"./preload-helper-PPVm8Dsz.js";import"./LinkInternal-BomTUhSi.js";const h={component:o,title:"Components/Link/LinkStandalone",argTypes:{size:{control:{options:[r.SMALL,r.MEDIUM,r.LARGE]}},variant:{control:{options:["standalone","standaloneInverse","inverseAccent"]}},disabled:{control:{type:"boolean"}},href:{control:{type:"text"}},target:{control:{type:"text"}},brandTheme:{control:{type:"text",options:Object.values(m)}}},tags:["autodocs"]},d={children:"Standalone Link",href:"#",size:r.MEDIUM,variant:l.STANDALONE,disabled:!1,iconPosition:S.END,hasAnimation:!0,onClick:()=>{console.log("click")},target:"_blank",brandTheme:m.primary,classNames:{container:"",content:"",icon:""}},a={args:{...d}},u={background:"var(--elements-color-semantic-background-neutral)",padding:"16px","--elements-color-semantic-accent-focus":"var(--elements-color-core-brand-lighter)"},t={decorators:[e=>n.jsx("div",{style:u,children:n.jsx(e,{})})],args:{...d,variant:l.STANDALONEINVERSE}},s={decorators:[e=>n.jsx("div",{style:u,children:n.jsx(e,{})})],args:{...d,variant:l.INVERSEACCENT}},i={decorators:[e=>n.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n.jsx(e,{})})],render:e=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",border:"1px solid black",padding:"2rem",width:"250px"},children:[n.jsx(o,{...e,children:"Default Link"}),n.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:n.jsx(o,{...e,iconName:p.ARROW_BACK,iconPosition:S.START,children:"Start position"})}),n.jsx(o,{...e,iconName:p.LENS,children:"Other Icon"})]})},c={render:e=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsx(o,{size:r.SMALL,href:"#",children:"Small"}),n.jsx(o,{size:r.MEDIUM,href:"#",children:"Medium"}),n.jsx(o,{size:r.LARGE,href:"#",children:"Large"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={inverseStyle}>
        <Story />
      </div>],
  args: {
    ...defaultArgs,
    variant: LinkVariant.STANDALONEINVERSE
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={inverseStyle}>
        <Story />
      </div>],
  args: {
    ...defaultArgs,
    variant: LinkVariant.INVERSEACCENT
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "flex",
    justifyContent: "center"
  }}>
        <Story />
      </div>],
  render: args => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      border: "1px solid black",
      padding: "2rem",
      width: "250px"
    }}>
        <LinkStandalone {...args}>Default Link</LinkStandalone>

        <div style={{
        display: "flex",
        justifyContent: "flex-end"
      }}>
          <LinkStandalone {...args} iconName={IconName.ARROW_BACK} iconPosition={IconPosition.START}>
            Start position
          </LinkStandalone>
        </div>
        <LinkStandalone {...args} iconName={IconName.LENS}>
          Other Icon
        </LinkStandalone>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
        <LinkStandalone size={LinkSize.SMALL} href="#">
          Small
        </LinkStandalone>
        <LinkStandalone size={LinkSize.MEDIUM} href="#">
          Medium
        </LinkStandalone>
        <LinkStandalone size={LinkSize.LARGE} href="#">
          Large
        </LinkStandalone>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};const v=["Default","Inverse","InverseAccent","PositionIcon","Sizes"];export{a as Default,t as Inverse,s as InverseAccent,i as PositionIcon,c as Sizes,v as __namedExportsOrder,h as default};

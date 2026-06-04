import{h as g,I as m,j as l}from"./iframe-DU6-gHk6.js";import{b as d,C as p}from"./Chip-CJ1kdyQS.js";const h={title:"Components/Chip (Deprecated)",component:d,argTypes:{onClick:{action:"clicked"},onDelete:{action:"deleted"},iconName:{control:{type:"select"},options:Object.values(m),description:"Icon name"},size:{control:{type:"select"},options:Object.values(p),description:"Chip size"}},decorators:[u=>l.jsx("div",{style:{padding:"20px",background:"none"},children:l.jsx(u,{})})]},e={active:!1,disabled:!1,onClick:void 0,children:"Chip Label",onDelete:void 0,brandTheme:g.primary},s={args:{...e,onDelete:void 0}},r={args:{...e,active:!0}},a={args:{...e,disabled:!0}},o={args:{...e,onClick:()=>alert("The onClick props is called.")}},n={args:{...e,onClick:()=>alert("The onClick props is called."),onDelete:()=>alert("The onDelete props is called.")}},t={args:{...e,iconName:m.BOOKMARK}},c={args:{...e,iconName:m.ALARM,onDelete:()=>alert("The onDelete props is called.")}},i={render:u=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:[l.jsx(d,{size:p.MEDIUM,children:"Medium"}),l.jsx(d,{size:p.SMALL,children:"Small"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    onDelete: undefined
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    active: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    onClick: () => alert("The onClick props is called.")
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    onClick: () => alert("The onClick props is called."),
    onDelete: () => alert("The onDelete props is called.")
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    iconName: IconName.BOOKMARK
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    iconName: IconName.ALARM,
    onDelete: () => alert("The onDelete props is called.")
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  /**
   * This is a hack to have a good display of the code in the storybook
   * cf github issue https://github.com/storybookjs/storybook/issues/23248
   */

  render: _args => {
    return <div style={{
      display: "flex",
      alignItems: "center",
      gap: "24px"
    }}>
        <Chip size={ChipSize.MEDIUM}>Medium</Chip>
        <Chip size={ChipSize.SMALL}>Small</Chip>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const C=["Default","Active","Disabled","Clickable","Deletable","Icon","IconAndDeletable","Sizes"],f=Object.freeze(Object.defineProperty({__proto__:null,Active:r,Clickable:o,Default:s,Deletable:n,Disabled:a,Icon:t,IconAndDeletable:c,Sizes:i,__namedExportsOrder:C,default:h},Symbol.toStringTag,{value:"Module"}));export{f as C,s as D,o as a};

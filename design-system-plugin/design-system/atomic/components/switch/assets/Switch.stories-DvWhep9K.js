import{j as o}from"./iframe-DU6-gHk6.js";import{S as s,a as r,b as l}from"./Switch-Din-dnRH.js";const i={title:"Components/Switch",component:l,argTypes:{onChange:{action:"changed"},size:{options:Object.values(r),control:{type:"select"}},labelPosition:{options:Object.values(s),control:{type:"select"}}}},e={args:{label:"Switch",disabled:!1,size:r.MEDIUM,labelPosition:s.END,fullWidth:!1,defaultChecked:!1}},t={args:{...e.args,defaultChecked:!0}},a={args:{...e.args,labelPosition:s.START,fullWidth:!0},decorators:[n=>o.jsx("div",{style:{width:"384px",maxWidth:"100%"},children:o.jsx(n,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Switch",
    disabled: false,
    size: SwitchSize.MEDIUM,
    labelPosition: SwitchLabelPosition.END,
    fullWidth: false,
    defaultChecked: false
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultChecked: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    labelPosition: SwitchLabelPosition.START,
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: "384px",
    maxWidth: "100%"
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};const c=["Default","DefaultChecked","Inline"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:e,DefaultChecked:t,Inline:a,__namedExportsOrder:c,default:i},Symbol.toStringTag,{value:"Module"}));export{e as D,p as S};

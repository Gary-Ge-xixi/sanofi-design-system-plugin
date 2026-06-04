import{j as s,i as y,H as v,I}from"./iframe-DU6-gHk6.js";import{T as h}from"./TextInput-DQfB9N96.js";import{a as r,F as a}from"./InputLabel-Bnixl784.js";import{T as E}from"./Tooltip-3ve6LLZH.js";const A={title:"Components/TextInput",component:h,argTypes:{type:{options:["text","password","email","number","tel"],control:{type:"select"},description:"text, password, email, number or tel"},size:{control:{type:"select"},options:Object.values(r),description:"Input size"},onChange:{action:"changed"}}},e={id:"text-input",label:"Text Input",subText:"This is a subtext",type:"text",state:a.DEFAULT,inverse:!1,disabled:!1,required:!1,placeholder:"Placeholder",size:r.LARGE,filledStateIcon:!1},t={args:{...e}},n={args:{...e,defaultValue:"Filled with text"}},o={args:{...e,subText:"This is an error message",state:a.ERROR}},i={args:{...e,subText:"This is a success message",state:a.SUCCESS}},l={args:{...e,disabled:!0}},c={args:{...e,inverse:!0}},p={args:{...e,inverse:!0,defaultValue:"Filled with text"}},u={args:{...e,subText:"This is an error message",state:a.ERROR,inverse:!0}},d={args:{...e,subText:"This is a success message",state:a.SUCCESS,inverse:!0}},m={args:{...e,inverse:!0,disabled:!0}},g={args:{...e,size:r.LARGE,labelEndSection:s.jsx(E,{label:"Message",position:"left","aria-label":"Message Tooltip",children:s.jsx(v,{name:I.INFO,"aria-label":"Text input tooltip"})})}},T={args:{...e,type:"password",autoComplete:"current-password"}},x={args:{...e,type:"email",autoComplete:"email"}},S={args:{...e,type:"tel",autoComplete:"tel"}},f={args:{label:"Text Input",placeholder:"Placeholder",subText:"This is a helper text",type:"text",state:a.DEFAULT,inverse:!1,disabled:!1,required:!1},render:b=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[s.jsxs("div",{children:[s.jsx(y,{children:"Small"}),s.jsx(h,{...b,id:"textinput-small",size:r.SMALL})]}),s.jsxs("div",{children:[s.jsx(y,{children:"Medium"}),s.jsx(h,{...b,id:"textinput-medium",size:r.MEDIUM})]}),s.jsxs("div",{children:[s.jsx(y,{children:"Large"}),s.jsx(h,{...b,id:"textinput-large",size:r.LARGE})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    defaultValue: "Filled with text"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    subText: "This is an error message",
    state: FormControlState.ERROR
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    subText: "This is a success message",
    state: FormControlState.SUCCESS
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inverse: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inverse: true,
    defaultValue: "Filled with text"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    subText: "This is an error message",
    state: FormControlState.ERROR,
    inverse: true
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    subText: "This is a success message",
    state: FormControlState.SUCCESS,
    inverse: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inverse: true,
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: InputSize.LARGE,
    labelEndSection: <Tooltip label="Message" position="left" aria-label="Message Tooltip">
        <Icon name={IconName.INFO} aria-label="Text input tooltip" />
      </Tooltip>
  }
}`,...g.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: "password",
    autoComplete: "current-password"
  }
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: "email",
    autoComplete: "email"
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: "tel",
    autoComplete: "tel"
  }
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Text Input",
    placeholder: "Placeholder",
    subText: "This is a helper text",
    type: "text",
    state: FormControlState.DEFAULT,
    inverse: false,
    disabled: false,
    required: false
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 20
  }}>
      <div>
        <Typography>Small</Typography>
        <TextInput {...args} id="textinput-small" size={InputSize.SMALL} />
      </div>
      <div>
        <Typography>Medium</Typography>
        <TextInput {...args} id="textinput-medium" size={InputSize.MEDIUM} />
      </div>
      <div>
        <Typography>Large</Typography>
        <TextInput {...args} id="textinput-large" size={InputSize.LARGE} />
      </div>
    </div>
}`,...f.parameters?.docs?.source}}};const C=["Default","Filled","ErrorState","SuccessState","Disabled","DefaultInverse","FilledInverse","ErrorInverse","SuccessInverse","DisabledInverse","WithTooltip","TypePassword","TypeEmail","TypeTel","Sizes"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:t,DefaultInverse:c,Disabled:l,DisabledInverse:m,ErrorInverse:u,ErrorState:o,Filled:n,FilledInverse:p,Sizes:f,SuccessInverse:d,SuccessState:i,TypeEmail:x,TypePassword:T,TypeTel:S,WithTooltip:g,__namedExportsOrder:C,default:A},Symbol.toStringTag,{value:"Module"}));export{t as D,D as T,T as a,x as b,S as c};

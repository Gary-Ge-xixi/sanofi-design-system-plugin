import{j as c}from"./iframe-DU6-gHk6.js";import{C as l}from"./CheckboxGroup-DwTbtWW0.js";import{O as n}from"./enums-a-13459C.js";import{a as i,C as p,b as m}from"./Checkbox-DhaBB2L5.js";const u={title:"Components/Checkbox/CheckboxGroup",component:l,argTypes:{title:{controls:"string"},caption:{controls:"string"},error:{controls:"string"}}},a={title:"Checkbox Group Title",caption:"Optional Caption",error:"Error Message",children:["Checkbox A","Checkbox B","Checkbox C","Checkbox D","Checkbox E","Checkbox F"].map(s=>c.jsx(m,{label:s},s)),orientation:n.VERTICAL,checkboxesSize:i.MEDIUM},e={args:{...a}},o={decorators:[s=>c.jsx("div",{style:{width:"400px"},children:c.jsx(s,{})})],args:{...a,orientation:n.HORIZONTAL}},r={args:{...a,title:"Small Checkbox Group",checkboxesSize:i.SMALL}},t={args:{...a,title:"Neutral Checkbox Group",checkboxesColor:p.NEUTRAL}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: "400px"
  }}>
        <Story />
      </div>],
  args: {
    ...defaultArgs,
    orientation: Orientation.HORIZONTAL
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    title: "Small Checkbox Group",
    checkboxesSize: CheckboxSize.SMALL
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    title: "Neutral Checkbox Group",
    checkboxesColor: CheckboxColor.NEUTRAL
  }
}`,...t.parameters?.docs?.source}}};const x=["Vertical","Horizontal","SmallSize","NeutralColor"],k=Object.freeze(Object.defineProperty({__proto__:null,Horizontal:o,NeutralColor:t,SmallSize:r,Vertical:e,__namedExportsOrder:x,default:u},Symbol.toStringTag,{value:"Module"}));export{k as C,e as V};

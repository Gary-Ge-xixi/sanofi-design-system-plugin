import{j as n}from"./iframe-DU6-gHk6.js";import{R as u}from"./RadioGroup-C4ITbe39.js";import{O as s}from"./enums-a-13459C.js";import{b as t}from"./Radio-CBalJ2BC.js";const d={title:"Components/Radio/RadioGroup",component:u,argTypes:{title:{controls:"string"},caption:{controls:"string"},errorMessage:{controls:"string"},value:{options:["first","second","third","four"],control:{type:"radio"}},onClick:{action:"clicked"},onChange:{action:"changed"}}},i={children:[n.jsx(t,{value:"first",label:"First"},"first"),n.jsx(t,{value:"second",label:"Second"},"second"),n.jsx(t,{value:"third",label:"Third"},"third"),n.jsx(t,{value:"four",label:"Four",disabled:!0},"four")]},r={args:{...i,title:"Uncontrolled radio group (if you set 'value' attribute, it will become controlled)",caption:"Optionnal caption",id:"a-unique-uncontrolled",orientation:s.VERTICAL,name:"unique-uncontrolled-name"}},e={args:{...i,title:"Radio Group Horizontal",id:"a-unique-row",orientation:s.HORIZONTAL,name:"unique-row-name"}},o={args:{...i,title:"Errored Radio Group",id:"a-unique-errored",errorMessage:"Error message",name:"unique-errored-name"}},a={args:{...i,title:"Errored Radio Group",id:"a-unique-errored",errorMessage:"Error message",name:"unique-errored-row-name",orientation:s.HORIZONTAL}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    title: "Uncontrolled radio group (if you set 'value' attribute, it will become controlled)",
    caption: "Optionnal caption",
    id: "a-unique-uncontrolled",
    orientation: Orientation.VERTICAL,
    name: "unique-uncontrolled-name"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    title: "Radio Group Horizontal",
    id: "a-unique-row",
    orientation: Orientation.HORIZONTAL,
    name: "unique-row-name"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    title: "Errored Radio Group",
    id: "a-unique-errored",
    errorMessage: "Error message",
    name: "unique-errored-name"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    title: "Errored Radio Group",
    id: "a-unique-errored",
    errorMessage: "Error message",
    name: "unique-errored-row-name",
    orientation: Orientation.HORIZONTAL
  }
}`,...a.parameters?.docs?.source}}};const l=["Default","Horizontal","WithError","HorizontalRadiosWithError"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Horizontal:e,HorizontalRadiosWithError:a,WithError:o,__namedExportsOrder:l,default:d},Symbol.toStringTag,{value:"Module"}));export{e as H,f as R};

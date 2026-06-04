import{j as l}from"./iframe-DU6-gHk6.js";import{S as r,a as o}from"./Select-CQJ-nqhp.js";import{a as i,F as b}from"./InputLabel-Bnixl784.js";const p={title:"Components/Select",component:o,argTypes:{onChange:{action:"changed"},size:{options:Object.values(i),control:{type:"radio"}},labelPosition:{options:Object.values(r),control:{type:"radio"}}}},n=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"blueberry",label:"Blueberry"},{value:"boysenberry",label:"Boysenberry"},{value:"cherry",label:"Cherry"},{value:"cranberry",label:"Cranberry"},{value:"durian",label:"Durian"},{value:"eggplant",label:"Eggplant"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"guava",label:"Guava"},{value:"huckleberry",label:"Huckleberry"}],a={args:{id:"select",label:"Select",placeholder:"Select an option",subText:"Helper text appears below",state:b.DEFAULT,inverse:!1,disabled:!1,required:!1,multiple:!1,native:!1,size:i.LARGE,labelPosition:r.TOP,maxItemsVisible:3,options:n}},t={args:{label:"Label",subText:"",labelPosition:r.TOP},render:e=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"400px"},children:[l.jsx(o,{id:"select-size-small",label:e.label||"Small",subText:e.subText,placeholder:"Select an option",size:i.SMALL,labelPosition:e.labelPosition,options:n}),l.jsx(o,{id:"select-size-medium",label:e.label||"Medium",subText:e.subText,placeholder:"Select an option",size:i.MEDIUM,labelPosition:e.labelPosition,options:n}),l.jsx(o,{id:"select-size-large",label:e.label||"Large",subText:e.subText,placeholder:"Select an option",size:i.LARGE,labelPosition:e.labelPosition,options:n})]})},s={args:{label:"Right to left",placeholder:"Select an option",subText:"This is a subtext",options:n},render:e=>l.jsx("div",{dir:"rtl",children:l.jsx(o,{...e})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select",
    label: "Select",
    placeholder: "Select an option",
    subText: "Helper text appears below",
    state: FormControlState.DEFAULT,
    inverse: false,
    disabled: false,
    required: false,
    multiple: false,
    native: false,
    size: InputSize.LARGE,
    labelPosition: SelectLabelPosition.TOP,
    maxItemsVisible: 3,
    options
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    subText: "",
    labelPosition: SelectLabelPosition.TOP
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    maxWidth: "400px"
  }}>
      <Select id="select-size-small" label={args.label || "Small"} subText={args.subText} placeholder="Select an option" size={InputSize.SMALL} labelPosition={args.labelPosition} options={options} />
      <Select id="select-size-medium" label={args.label || "Medium"} subText={args.subText} placeholder="Select an option" size={InputSize.MEDIUM} labelPosition={args.labelPosition} options={options} />
      <Select id="select-size-large" label={args.label || "Large"} subText={args.subText} placeholder="Select an option" size={InputSize.LARGE} labelPosition={args.labelPosition} options={options} />
    </div>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Right to left",
    placeholder: "Select an option",
    subText: "This is a subtext",
    options
  },
  render: args => <div dir="rtl">
      <Select {...args} />
    </div>
}`,...s.parameters?.docs?.source}}};const c=["Default","Sizes","RightToLeft"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:a,RightToLeft:s,Sizes:t,__namedExportsOrder:c,default:p},Symbol.toStringTag,{value:"Module"}));export{a as D,x as S};

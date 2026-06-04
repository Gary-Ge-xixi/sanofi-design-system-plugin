import{j as e}from"./iframe-DU6-gHk6.js";import{P as n,a as c,b as i,c as r}from"./ProgressBar-DqP4nKft.js";const p={title:"Components/ProgressBar",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},state:{control:{type:"select"},options:Object.values(i),defaultValue:i.IN_PROGRESS},size:{control:{type:"select"},options:Object.values(c),defaultValue:c.MEDIUM},density:{control:{type:"select"},options:Object.values(n),defaultValue:n.DEFAULT}},decorators:[d=>e.jsx("div",{style:{width:"360px"},children:e.jsx(d,{})})]},s={args:{value:50,label:"Progress bar label",helperText:"25Mb of 50Mb"}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"100%"},children:[e.jsx(r,{value:50,state:i.IN_PROGRESS,label:"Progress bar label",helperText:"25Mb of 50Mb"}),e.jsx(r,{value:25,state:i.ERROR,label:"Progress bar label",helperText:"Error message goes here."}),e.jsx(r,{value:100,state:i.SUCCESS,label:"Progress bar label",helperText:"Success message goes here."})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"100%"},children:[e.jsx(r,{value:50,density:n.DEFAULT,label:"Default density",helperText:"25Mb of 50Mb"}),e.jsx(r,{value:50,density:n.COMPACT,label:"Compact density",helperText:"25Mb of 50Mb"}),e.jsx(r,{value:50,density:n.ULTRA_COMPACT,label:"Ultra compact density",helperText:"25Mb of 50Mb"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"100%"},children:[e.jsx(r,{value:50,size:c.MEDIUM,label:"Medium size",helperText:"25Mb of 50Mb"}),e.jsx(r,{value:50,size:c.SMALL,label:"Small size",helperText:"25Mb of 50Mb"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"100%"},children:[e.jsx(r,{value:24,label:"Scoring Progress",valueText:"5/21",helperText:"5 out of 21 items completed"}),e.jsx(r,{value:45,label:"File Upload",valueText:"45 MB / 100 MB",helperText:"Uploading..."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    label: "Progress bar label",
    helperText: "25Mb of 50Mb"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%"
  }}>
      <ProgressBar value={50} state={ProgressBarState.IN_PROGRESS} label="Progress bar label" helperText="25Mb of 50Mb" />
      <ProgressBar value={25} state={ProgressBarState.ERROR} label="Progress bar label" helperText="Error message goes here." />
      <ProgressBar value={100} state={ProgressBarState.SUCCESS} label="Progress bar label" helperText="Success message goes here." />
    </div>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%"
  }}>
      <ProgressBar value={50} density={ProgressBarDensity.DEFAULT} label="Default density" helperText="25Mb of 50Mb" />
      <ProgressBar value={50} density={ProgressBarDensity.COMPACT} label="Compact density" helperText="25Mb of 50Mb" />
      <ProgressBar value={50} density={ProgressBarDensity.ULTRA_COMPACT} label="Ultra compact density" helperText="25Mb of 50Mb" />
    </div>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%"
  }}>
      <ProgressBar value={50} size={ProgressBarSize.MEDIUM} label="Medium size" helperText="25Mb of 50Mb" />
      <ProgressBar value={50} size={ProgressBarSize.SMALL} label="Small size" helperText="25Mb of 50Mb" />
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%"
  }}>
      <ProgressBar value={24} label="Scoring Progress" valueText="5/21" helperText="5 out of 21 items completed" />
      <ProgressBar value={45} label="File Upload" valueText="45 MB / 100 MB" helperText="Uploading..." />
    </div>
}`,...o.parameters?.docs?.source}}};const u=["Default","AllStates","AllDensities","AllSizes","CustomValueText"],g=Object.freeze(Object.defineProperty({__proto__:null,AllDensities:l,AllSizes:t,AllStates:a,CustomValueText:o,Default:s,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{a as A,o as C,s as D,g as P,t as a,l as b};

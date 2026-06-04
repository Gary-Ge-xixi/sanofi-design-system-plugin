import{n as x,j as e,r as D,g as j,v as C,i as h}from"./iframe-DU6-gHk6.js";import{C as c,a as d,b as a,c as y}from"./ChipFilter-BQAfsmhY.js";import{c as f}from"./create-toast-Bk21w6Tb.js";const E={title:"Components/ChipFilter",component:y,parameters:{layout:"centered",docs:{description:{component:"A chip component used to display selected filters with the ability to remove them."}}},argTypes:{size:{control:"select",options:Object.values(c),description:"Controls the size of the chip",table:{defaultValue:{summary:"small"}}},color:{control:"select",options:Object.values(a),description:"Controls the color scheme of the chip",table:{defaultValue:{summary:"branded"}}},emphasis:{control:"select",options:Object.values(d),description:"Controls the visual emphasis of the chip",table:{defaultValue:{summary:"subtle"}}},maxWidth:{control:{type:"number",min:50,max:300},description:"Maximum width in pixels before text truncation (minimum: 50px)"},onDelete:{description:"Callback function when the remove button is clicked"},disabled:{control:"boolean",description:"Whether the chip is disabled",table:{defaultValue:{summary:"false"}}}}},o={args:{children:"Chip Label",onDelete:()=>{f({variant:x.INFO,text:"Chip Label filter removed",displayCloseButton:!0})},size:c.MEDIUM}},p={parameters:{layout:"padded"},args:{...o.args},render:s=>e.jsx(L,{...s})},L=()=>{const s=[{emphasis:d.STRONG,label:"Strong"},{emphasis:d.OUTLINE,label:"Outline"},{emphasis:d.SUBTLE,label:"Subtle"}],n=(t,i,r=!1)=>e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx("div",{style:{width:"fit-content"},children:e.jsx(y,{color:t,disabled:r,emphasis:i,onDelete:()=>{f({variant:x.INFO,text:"filter removed",displayCloseButton:!0})},size:c.MEDIUM,children:"Chip Label"},`${t}-${i}`)}),e.jsx("div",{style:{width:"fit-content"},children:e.jsx(y,{color:t,disabled:r,emphasis:i,onDelete:()=>{f({variant:x.INFO,text:"filter removed",displayCloseButton:!0})},size:c.SMALL,children:"Chip Label"},`${t}-${i}`)})]})});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"120px"},children:[e.jsx(j,{variant:C.TITLE_3,children:"Filter Chip"}),e.jsxs("table",{style:{borderCollapse:"separate",borderSpacing:"16px 36px"},children:[e.jsxs("thead",{children:[e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{style:{textAlign:"start",minWidth:"fit-content"},children:e.jsx(j,{variant:C.TITLE_4,children:"Neutral"})}),e.jsx("th",{}),e.jsx("th",{style:{textAlign:"start",minWidth:"fit-content"},children:e.jsx(j,{variant:C.TITLE_4,children:"Brand"})}),e.jsx("th",{})]}),e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{style:{textAlign:"start",minWidth:"fit-content"},children:e.jsx(h,{children:"Default"})}),e.jsx("th",{style:{textAlign:"start",minWidth:"fit-content"},children:e.jsx(h,{children:"Disabled"})}),e.jsx("th",{style:{textAlign:"start",minWidth:"fit-content"},children:e.jsx(h,{children:"Default"})}),e.jsx("th",{style:{textAlign:"start",minWidth:"fit-content"},children:e.jsx(h,{children:"Disabled"})})]})]}),e.jsx("tbody",{children:s.map(({emphasis:t,label:i})=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(h,{children:i})}),n(a.NEUTRAL,t,!1),n(a.NEUTRAL,t,!0),n(a.BRANDED,t,!1),n(a.BRANDED,t,!0)]},t))})]})]})},m={args:{children:"Truncated label will show a tooltip when hovered",maxWidth:200,size:c.MEDIUM,onDelete:()=>{f({variant:x.INFO,text:"Long label filter removed",displayCloseButton:!0})},color:a.BRANDED,emphasis:d.SUBTLE},parameters:{docs:{description:{story:"When text content exceeds the maxWidth, it will be truncated with an ellipsis."}}}},T=()=>{const[s,n]=D.useState([{id:1,label:"Immunology"},{id:2,label:"Oncology"},{id:3,label:"Neurology"},{id:4,label:"Rare Diseases"}]),t=D.useRef([]),i=(r,l,g)=>{let b=null;l<s.length-1?b=l:l>0&&(b=l-1),f({variant:x.INFO,text:`${g} filter removed`,displayCloseButton:!0}),n(s.filter(v=>v.id!==r)),b!==null&&setTimeout(()=>{const v=t.current[b];v&&v.focus()},0)};return e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",maxWidth:"600px"},role:"group","aria-label":"Selected filters",children:[s.map((r,l)=>e.jsx(y,{ref:g=>{t.current[l]=g},onDelete:()=>i(r.id,l,r.label),color:a.BRANDED,emphasis:d.SUBTLE,size:c.MEDIUM,children:r.label},r.id)),s.length===0&&e.jsx("div",{style:{color:"#666",fontStyle:"italic"},role:"status","aria-live":"polite",children:"No filters selected"})]})},u={name:"List Example",render:()=>e.jsx(T,{}),args:{children:"Placeholder",onDelete:()=>{}},parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Example of ChipFilter components in a list, where removing a chip actually removes it from the list. This demonstrates a real-world usage where chips are used to display selected filters that can be removed."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Chip Label",
    onDelete: () => {
      createToast({
        variant: ToastVariant.INFO,
        text: "Chip Label filter removed",
        displayCloseButton: true
      });
    },
    size: ChipFilterSize.MEDIUM
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  args: {
    ...Default.args
  },
  render: args => <ControlledChipFilterOverview {...args} />
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Truncated label will show a tooltip when hovered",
    maxWidth: 200,
    size: ChipFilterSize.MEDIUM,
    onDelete: () => {
      createToast({
        variant: ToastVariant.INFO,
        text: "Long label filter removed",
        displayCloseButton: true
      });
    },
    color: ChipFilterColor.BRANDED,
    emphasis: ChipFilterEmphasis.SUBTLE
  },
  parameters: {
    docs: {
      description: {
        story: "When text content exceeds the maxWidth, it will be truncated with an ellipsis."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "List Example",
  render: () => <ListExample />,
  args: {
    children: "Placeholder",
    onDelete: () => {}
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: "Example of ChipFilter components in a list, where removing a chip actually removes it from the list. This demonstrates a real-world usage where chips are used to display selected filters that can be removed."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const w=["Default","Overview","LongLabel","ListWithRemoval"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:o,ListWithRemoval:u,LongLabel:m,Overview:p,__namedExportsOrder:w,default:E},Symbol.toStringTag,{value:"Module"}));export{O as C,o as D};

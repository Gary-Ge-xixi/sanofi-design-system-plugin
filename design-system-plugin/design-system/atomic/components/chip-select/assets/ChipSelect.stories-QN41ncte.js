import{j as e,r as p,g as u,v as m}from"./iframe-DU6-gHk6.js";import{C as a,a as s,b as l}from"./ChipSelect-DJs7iV7-.js";const f={title:"Components/ChipSelect",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:Object.values(a),description:"Controls the size of the chip",table:{defaultValue:{summary:"small"}}},color:{control:"select",options:Object.values(l),description:"Controls the color scheme of the chip",table:{defaultValue:{summary:"branded"}}},maxWidth:{control:{type:"number",min:50,max:300},description:"Maximum width in pixels before text truncation (minimum: 50px)"},onClick:{description:"Callback function when the chip is clicked"},disabled:{control:"boolean",description:"Whether the chip is disabled",table:{defaultValue:{summary:"false"}}},selected:{control:"boolean",description:"Whether the chip is selected",table:{defaultValue:{summary:"false"}}},iconName:{control:"text",description:"The name of the icon to display when selected (defaults to 'done'). If empty, no icon will be shown",table:{defaultValue:{summary:"done"}}},showIcon:{control:"boolean",description:"Whether to show the icon when selected",table:{defaultValue:{summary:"false"}}}}},y=({args:t})=>{const[o,i]=p.useState(t.selected??!1);return p.useEffect(()=>{i(t.selected??!1)},[t.selected]),e.jsx("div",{style:{display:"flex",gap:"1rem"},children:e.jsx(s,{...t,selected:o,onClick:()=>i(!o),children:t.children})})},n={args:{children:"Click to select",size:"medium",selected:!1,showIcon:!1},render:t=>e.jsx(y,{args:t}),parameters:{docs:{description:{story:"A basic example of the ChipSelect component with interactive selection."}}}},b=({args:t})=>{const[o,i]=p.useState(!1);return e.jsx("div",{style:{display:"flex",gap:"1rem"},children:e.jsx(s,{...t,selected:o,onClick:()=>i(!o),children:t.children})})},c={args:{children:"This is a very long label that will be truncated and show a tooltip",size:a.MEDIUM,maxWidth:150},render:t=>e.jsx(b,{args:t}),parameters:{docs:{description:{story:"Example of a ChipSelect with a long label that gets truncated and displays a tooltip on hover."}}}},S=()=>{const[t,o]=p.useState([]),i=r=>{o(h=>h.includes(r)?h.filter(x=>x!==r):[...h,r])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",minWidth:"600px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(u,{variant:m.TITLE_4,children:"Branded"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[e.jsx(s,{color:l.BRANDED,selected:!1,size:a.MEDIUM,children:"Unselected"}),e.jsx(s,{color:l.BRANDED,selected:!0,showIcon:!1,size:a.MEDIUM,children:"Selected"}),e.jsx(s,{color:l.BRANDED,selected:!0,showIcon:!0,size:a.MEDIUM,children:"Selected with icon"}),e.jsx(s,{color:l.BRANDED,disabled:!0,size:a.MEDIUM,children:"Disabled"}),e.jsx(s,{color:l.BRANDED,selected:!0,disabled:!0,size:a.MEDIUM,children:"Selected disabled"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(u,{variant:m.TITLE_4,children:"Neutral"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[e.jsx(s,{color:l.NEUTRAL,selected:!1,size:a.MEDIUM,children:"Unselected"}),e.jsx(s,{color:l.NEUTRAL,selected:!0,showIcon:!1,size:a.MEDIUM,children:"Selected"}),e.jsx(s,{color:l.NEUTRAL,selected:!0,showIcon:!0,size:a.MEDIUM,children:"Selected with icon"}),e.jsx(s,{color:l.NEUTRAL,disabled:!0,size:a.MEDIUM,children:"Disabled"}),e.jsx(s,{color:l.NEUTRAL,selected:!0,disabled:!0,size:a.MEDIUM,children:"Selected disabled"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(u,{variant:m.TITLE_4,children:"Interactive Variants"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[l.BRANDED,l.NEUTRAL].map(r=>e.jsxs(s,{color:r,selected:t.includes(r),showIcon:!0,size:a.MEDIUM,onClick:()=>i(r),children:["Click to select ",r]},`interactive-${r}`))})]})]})},d={render:()=>e.jsx(S,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Overview of all available color variants and states for the ChipSelect component."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click to select",
    size: "medium",
    selected: false,
    showIcon: false
  },
  render: args => <DefaultStory args={args} />,
  parameters: {
    docs: {
      description: {
        story: "A basic example of the ChipSelect component with interactive selection."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "This is a very long label that will be truncated and show a tooltip",
    size: ChipSelectSize.MEDIUM,
    maxWidth: 150
  },
  render: args => <LongLabelStory args={args} />,
  parameters: {
    docs: {
      description: {
        story: "Example of a ChipSelect with a long label that gets truncated and displays a tooltip on hover."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <StyleVariationsStory />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: "Overview of all available color variants and states for the ChipSelect component."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const D=["Default","LongLabel","StyleVariations"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:n,LongLabel:c,StyleVariations:d,__namedExportsOrder:D,default:f},Symbol.toStringTag,{value:"Module"}));export{E as C,n as D};

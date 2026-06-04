import{h as G,I as v,r as d,j as e,g as p,v as h,i as t,p as R}from"./iframe-DU6-gHk6.js";import{C as n,a as u,b as C,c as x,d as S}from"./ChipDropdown-Cfq1I8ct.js";import{T as Y,a as J,b as K,c as k}from"./Tag-DcJEYfKI.js";import{C as l,a as $}from"./ChipStatus-BDbCokFo.js";const q={title:"Components/ChipDropdown",component:S,parameters:{layout:"centered",docs:{description:{component:`
A ChipDropdown component that combines a selectable chip with a dropdown menu.
When clicked, it opens a dropdown menu with selectable items.

## Features
- Single or multiple selection modes
- Two modes: \`inherit\` (trigger color follows selected item's status) and \`controlled\` (consumer manages trigger color)
- ChipStatus items with auto-rendering and color inheritance
- Custom item rendering via \`renderItem\`
- Keyboard navigation support
- Accessibility compliant
- Brand theme variants
- Size variants (small, medium)
- Color variants (branded, neutral, success, error, warning, informative)
- Icon support for items
- Disabled state support
        `}}},argTypes:{children:{description:"The content to display inside the chip trigger",control:"text"},items:{description:"Array of dropdown items",control:"object"},selectedItems:{description:"Currently selected item IDs",control:"object"},multiSelect:{description:"Whether multiple selection is allowed",control:"boolean"},disabled:{description:"Whether the chip is disabled",control:"boolean"},size:{description:"Size variant of the chip",control:"radio",options:[C.SMALL,C.MEDIUM]},emphasis:{description:"Visual emphasis of the chip",control:"radio",options:[u.SUBTLE,u.STRONG,u.OUTLINE]},color:{description:"Color variant of the chip",control:"radio",options:Object.values(n)},mode:{description:"Inherit: trigger color follows selected item status (single-select). Controlled: consumer manages trigger color.",control:"radio",options:Object.values(x)},brandTheme:{description:"Brand theme variant",control:"radio",options:[G.primary,G.secondary,G.tertiary]},placeholder:{description:"Placeholder text when no items are selected",control:"text"},showChevron:{description:"Whether to show chevron icon",control:"boolean"},maxItemsVisible:{description:"Maximum number of items visible in dropdown",control:"number"},respectTriggerWidth:{description:"Whether dropdown should respect trigger width",control:"boolean"}}},Q=[{id:"1",label:"Menu item 1"},{id:"2",label:"Menu item 2"}],X=[{id:"1",label:"Dashboard",iconName:v.EMPTY_DASHBOARD},{id:"2",label:"Settings",iconName:v.SETTINGS},{id:"3",label:"Disabled Menu item",disabled:!0}],P=i=>{const[c,o]=d.useState(i.selectedItems||[]);return e.jsx(S,{...i,selectedItems:c,onSelectionChange:o})},m={render:P,args:{children:"Select Options",items:Q,selectedItems:[],multiSelect:!1,disabled:!1,size:C.MEDIUM,emphasis:u.STRONG,color:n.BRANDED,brandTheme:G.primary,placeholder:"Select an option...",showChevron:!0,maxItemsVisible:6,respectTriggerWidth:!1}},V=[{emphasis:u.STRONG,label:"Strong"},{emphasis:u.OUTLINE,label:"Outline"},{emphasis:u.SUBTLE,label:"Subtle"}],H=[C.MEDIUM,C.SMALL],F=[{color:n.SUCCESS,label:"Success"},{color:n.ERROR,label:"Error"},{color:n.WARNING,label:"Warning"},{color:n.INFORMATIVE,label:"Informative"}],Z=i=>{const[c,o]=d.useState(i.selectedItems||[]),a=(r,I,j=!1,D=!1)=>e.jsx("td",{children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"128px",paddingBottom:"64px"},children:H.map(T=>e.jsx(S,{...i,selectedItems:c,onSelectionChange:o,emphasis:I,color:r,mode:x.CONTROLLED,size:T,disabled:j,isOpen:D,shortcut:T===C.SMALL?"⌘S":"",children:"Chip Label"},T))})}),s={textAlign:"start",minWidth:"200px"},g={...s,minWidth:"288px"};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(p,{variant:h.TITLE_3,children:"Dropdown Chip"}),e.jsxs("table",{style:{borderCollapse:"separate",borderSpacing:"16px 24px"},children:[e.jsxs("thead",{children:[e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{style:s,children:e.jsx(p,{variant:h.TITLE_4,children:"Neutral"})}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{style:s,children:e.jsx(p,{variant:h.TITLE_4,children:"Brand"})}),e.jsx("th",{}),e.jsx("th",{})]}),e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{style:s,children:e.jsx(t,{children:"Default"})}),e.jsx("th",{style:g,children:e.jsx(t,{children:"Active"})}),e.jsx("th",{style:s,children:e.jsx(t,{children:"Disabled"})}),e.jsx("th",{style:s,children:e.jsx(t,{children:"Default"})}),e.jsx("th",{style:g,children:e.jsx(t,{children:"Active"})}),e.jsx("th",{style:s,children:e.jsx(t,{children:"Disabled"})})]})]}),e.jsx("tbody",{children:V.map(({emphasis:r,label:I})=>e.jsxs("tr",{children:[e.jsx("td",{style:{verticalAlign:"top",paddingInlineEnd:"16px"},children:e.jsx(t,{children:I})}),a(n.NEUTRAL,r),a(n.NEUTRAL,r,!1,!0),a(n.NEUTRAL,r,!0),a(n.BRANDED,r),a(n.BRANDED,r,!1,!0),a(n.BRANDED,r,!0)]},r))})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(p,{variant:h.TITLE_3,children:"Dropdown Chip — Status Colors"}),e.jsxs("table",{style:{borderCollapse:"separate",borderSpacing:"16px 24px"},children:[e.jsxs("thead",{children:[e.jsxs("tr",{children:[e.jsx("th",{}),F.map(({label:r})=>e.jsx("th",{style:s,colSpan:2,children:e.jsx(p,{variant:h.TITLE_4,children:r})},r))]}),e.jsxs("tr",{children:[e.jsx("th",{}),F.map(({label:r})=>e.jsxs(d.Fragment,{children:[e.jsx("th",{style:s,children:e.jsx(t,{children:"Default"})}),e.jsx("th",{style:s,children:e.jsx(t,{children:"Disabled"})})]},r))]})]}),e.jsx("tbody",{children:V.map(({emphasis:r,label:I})=>e.jsxs("tr",{children:[e.jsx("td",{style:{verticalAlign:"top",paddingInlineEnd:"16px"},children:e.jsx(t,{children:I})}),F.map(({color:j,label:D})=>e.jsxs(d.Fragment,{children:[a(j,r),a(j,r,!0)]},`${D}-${r}`))]},r))})]})]})]})},w={parameters:{layout:"padded"},args:{...m.args,multiSelect:!0,selectedItems:["1","2"]},render:i=>e.jsx(Z,{...i})},N={render:P,args:{...m.args,multiSelect:!0,children:"Multi Select",placeholder:"Select multiple options..."}},O={render:P,args:{...m.args,items:X,children:"Some Disabled",placeholder:"Select (some disabled)..."}},E=[{id:"success",label:"Success",status:l.SUCCESS},{id:"error",label:"Error",status:l.ERROR},{id:"warning",label:"Warning",status:l.WARNING},{id:"info",label:"Informative",status:l.INFORMATIVE}],ee=()=>{const[i,c]=d.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsx(p,{variant:h.TITLE_3,children:"Inherit Mode — Single Select"}),e.jsx(t,{children:"Select a status item — the trigger chip inherits its color."}),e.jsx("div",{style:{display:"flex",gap:"48px",flexWrap:"wrap"},children:V.map(({emphasis:o,label:a})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"start"},children:[e.jsx(t,{children:a}),e.jsx("div",{style:{display:"flex",gap:"16px"},children:H.map(s=>e.jsx(S,{items:E,selectedItems:i,onSelectionChange:c,mode:x.INHERIT,emphasis:o,size:s,color:n.NEUTRAL,showChevron:!0,children:"Status"},s))})]},o))})]})},A={parameters:{layout:"padded"},args:{...m.args,items:E,mode:x.INHERIT},render:()=>e.jsx(ee,{})},te=()=>{const[i,c]=d.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsx(p,{variant:h.TITLE_3,children:"Inherit Mode — Multi Select"}),e.jsx(t,{children:"Multi-select always keeps the base color, even with status items selected."}),e.jsx("div",{style:{display:"flex",gap:"48px",flexWrap:"wrap"},children:V.map(({emphasis:o,label:a})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"start"},children:[e.jsx(t,{children:a}),e.jsx("div",{style:{display:"flex",gap:"16px"},children:H.map(s=>e.jsx(S,{items:E,selectedItems:i,onSelectionChange:c,multiSelect:!0,mode:x.INHERIT,emphasis:o,size:s,color:n.NEUTRAL,showChevron:!0,children:"Status"},s))})]},o))})]})},M={parameters:{layout:"padded"},args:{...m.args,items:E,multiSelect:!0,mode:x.INHERIT},render:()=>e.jsx(te,{})},se=()=>{const[i,c]=d.useState([]),[o,a]=d.useState([]),[s,g]=d.useState([]),r=s.includes("error")?n.ERROR:n.NEUTRAL,I=[{title:"Fixed — always warning",description:"The trigger is always warning regardless of what is selected.",selected:i,setSelected:c,color:n.WARNING},{title:"Fixed — always branded",description:"The trigger stays branded no matter what status items are picked.",selected:o,setSelected:a,color:n.BRANDED},{title:"Custom logic — error when Error selected",description:"The trigger turns error when the Error item is selected, neutral otherwise.",selected:s,setSelected:g,color:r,multiSelect:!0}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsx(p,{variant:h.TITLE_3,children:"Controlled Mode"}),e.jsx(t,{children:"The consumer fully controls the trigger color via the color prop."}),e.jsx("div",{style:{display:"flex",gap:"48px",flexWrap:"wrap"},children:I.map(({title:j,description:D,selected:T,setSelected:y,color:f,multiSelect:B})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",minWidth:"200px"},children:[e.jsx(p,{variant:h.TITLE_5,children:j}),e.jsx(t,{children:D}),e.jsx("div",{style:{display:"flex",gap:"16px",paddingBlockStart:"8px"},children:H.map(U=>e.jsx(S,{items:E,selectedItems:T,onSelectionChange:y,mode:x.CONTROLLED,color:f,emphasis:u.STRONG,size:U,multiSelect:B,showChevron:!0,children:"Status"},U))})]},j))})]})},L={parameters:{layout:"padded"},args:{...m.args,items:E,mode:x.CONTROLLED},render:()=>e.jsx(se,{})},re=()=>{const[i,c]=d.useState([]),[o,a]=d.useState([]),s=[{id:"approved",label:"Approved",status:l.SUCCESS},{id:"rejected",label:"Rejected",status:l.ERROR},{id:"pending",label:"Pending review",status:l.WARNING}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsx(p,{variant:h.TITLE_3,children:"Custom Item Rendering"}),e.jsx(t,{children:"Use renderItem to fully customise how items appear inside the dropdown."}),e.jsxs("div",{style:{display:"flex",gap:"48px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",minWidth:"200px"},children:[e.jsx(p,{variant:h.TITLE_5,children:"Auto-rendered ChipStatus items"}),e.jsx(t,{children:"Items with a status field render as ChipStatus automatically."}),e.jsx("div",{style:{paddingBlockStart:"8px"},children:e.jsx(S,{items:s,selectedItems:i,onSelectionChange:c,mode:x.INHERIT,emphasis:u.STRONG,showChevron:!0,children:"Review status"})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",minWidth:"200px"},children:[e.jsx(p,{variant:h.TITLE_5,children:"Custom renderItem callback"}),e.jsx(t,{children:"renderItem overrides the default rendering with your own component."}),e.jsx("div",{style:{paddingBlockStart:"8px"},children:e.jsx(S,{items:s,selectedItems:o,onSelectionChange:a,mode:x.INHERIT,emphasis:u.STRONG,showChevron:!0,renderItem:g=>e.jsx($,{status:g.status,emphasis:u.SUBTLE,size:C.SMALL,children:g.label}),children:"Review status"})})]})]})]})},W={parameters:{layout:"padded"},args:{...m.args,items:E,mode:x.INHERIT},render:()=>e.jsx(re,{})},ne={[l.SUCCESS]:k.GREEN,[l.ERROR]:k.RED,[l.WARNING]:k.ORANGE,[l.INFORMATIVE]:k.BLUE},le={[l.SUCCESS]:v.CHECK_CIRCLE,[l.ERROR]:v.CANCEL,[l.WARNING]:v.ERROR,[l.INFORMATIVE]:v.INFO},z=[{id:"open",label:"Open",status:l.INFORMATIVE},{id:"in-progress",label:"In Progress",status:l.WARNING},{id:"resolved",label:"Resolved",status:l.SUCCESS},{id:"rejected",label:"Rejected",status:l.ERROR}],ie=()=>{const[i,c]=d.useState("admin"),[o,a]=d.useState(["open"]),[s,g]=d.useState(["resolved"]),[r,I]=d.useState(["in-progress"]),j=[{id:"PROJ-142",title:"Fix login timeout on mobile",selected:o,setSelected:a},{id:"PROJ-143",title:"Update dashboard charts",selected:s,setSelected:g},{id:"PROJ-144",title:"Migrate database to v3",selected:r,setSelected:I}],D=y=>z.find(f=>f.id===y[0]),T=i==="admin";return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(p,{variant:h.TITLE_3,children:"Real-World Scenario: Admin vs Read-only"}),e.jsx(t,{children:"An admin sees interactive ChipDropdowns to change ticket status. A read-only user sees static Tags instead."})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{variant:R.BODY_MEDIUM,children:"Viewing as:"}),e.jsx(S,{items:[{id:"admin",label:"Admin"},{id:"readonly",label:"Read-only user"}],selectedItems:[i],onSelectionChange:y=>c(y[0]),color:n.BRANDED,emphasis:u.STRONG,showChevron:!0,children:"Role"})]}),e.jsxs("table",{style:{borderCollapse:"separate",borderSpacing:"0",width:"100%",maxWidth:"640px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"start",paddingBlockEnd:"12px",paddingInlineEnd:"24px"},children:e.jsx(t,{variant:R.BODY_MEDIUM,children:"Ticket"})}),e.jsx("th",{style:{textAlign:"start",paddingBlockEnd:"12px",paddingInlineEnd:"24px"},children:e.jsx(t,{variant:R.BODY_MEDIUM,children:"Title"})}),e.jsx("th",{style:{textAlign:"start",paddingBlockEnd:"12px"},children:e.jsx(t,{variant:R.BODY_MEDIUM,children:"Status"})})]})}),e.jsx("tbody",{children:j.map(({id:y,title:f,selected:B,setSelected:U})=>{const _=D(B);return e.jsxs("tr",{children:[e.jsx("td",{style:{paddingBlock:"10px",paddingInlineEnd:"24px",borderBlockStart:"1px solid var(--elements-color-semantic-border-subtle)"},children:e.jsx(t,{variant:R.BODY_MEDIUM,children:y})}),e.jsx("td",{style:{paddingBlock:"10px",paddingInlineEnd:"24px",borderBlockStart:"1px solid var(--elements-color-semantic-border-subtle)"},children:e.jsx(t,{variant:R.BODY_MEDIUM,children:f})}),e.jsx("td",{style:{paddingBlock:"10px",borderBlockStart:"1px solid var(--elements-color-semantic-border-subtle)"},children:T?e.jsx(S,{items:z,selectedItems:B,onSelectionChange:U,mode:x.INHERIT,emphasis:u.STRONG,size:C.SMALL,showChevron:!0,children:"Status"}):_&&e.jsx(Y,{color:ne[_.status],variant:K.SUBTLE,size:J.MD,icon:le[_.status],children:_.label})})]},y)})})]})]})},b={parameters:{layout:"padded"},args:{...m.args,items:z,mode:x.INHERIT},render:()=>e.jsx(ie,{})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: ControlledChipDropdown,
  args: {
    children: "Select Options",
    items: sampleItems,
    selectedItems: [],
    multiSelect: false,
    disabled: false,
    size: ChipDropdownSize.MEDIUM,
    emphasis: ChipDropdownEmphasis.STRONG,
    color: ChipDropdownColor.BRANDED,
    brandTheme: BrandTheme.primary,
    placeholder: "Select an option...",
    showChevron: true,
    maxItemsVisible: 6,
    respectTriggerWidth: false
  }
}`,...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  args: {
    ...Default.args,
    multiSelect: true,
    selectedItems: ["1", "2"]
  },
  render: args => <ControlledChipDropdownOverview {...args} />
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: ControlledChipDropdown,
  args: {
    ...Default.args,
    multiSelect: true,
    children: "Multi Select",
    placeholder: "Select multiple options..."
  }
}`,...N.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: ControlledChipDropdown,
  args: {
    ...Default.args,
    items: sampleItemsWithIconsAndDisabled,
    children: "Some Disabled",
    placeholder: "Select (some disabled)..."
  }
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  args: {
    ...Default.args,
    items: statusItems,
    mode: ChipDropdownMode.INHERIT
  },
  render: () => <InheritSingleSelectDemo />
}`,...A.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  args: {
    ...Default.args,
    items: statusItems,
    multiSelect: true,
    mode: ChipDropdownMode.INHERIT
  },
  render: () => <InheritMultiSelectDemo />
}`,...M.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  args: {
    ...Default.args,
    items: statusItems,
    mode: ChipDropdownMode.CONTROLLED
  },
  render: () => <ControlledModeDemo />
}`,...L.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  args: {
    ...Default.args,
    items: statusItems,
    mode: ChipDropdownMode.INHERIT
  },
  render: () => <RenderItemDemo />
}`,...W.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  args: {
    ...Default.args,
    items: ticketStatusItems,
    mode: ChipDropdownMode.INHERIT
  },
  render: () => <RealWorldScenario />
}`,...b.parameters?.docs?.source},description:{story:`**Real-world scenario** — in a project management table an admin sees
interactive ChipDropdowns to update ticket status, while a read-only user
sees static Tags. Toggle the role to switch views.`,...b.parameters?.docs?.description}}};const ae=["Default","Overview","MultiSelect","DisabledItemsAndIcons","WithChipStatusInherit","WithChipStatusInheritMultiSelect","WithChipStatusControlled","WithRenderItem","RealWorldAdminVsReadonly"],he=Object.freeze(Object.defineProperty({__proto__:null,Default:m,DisabledItemsAndIcons:O,MultiSelect:N,Overview:w,RealWorldAdminVsReadonly:b,WithChipStatusControlled:L,WithChipStatusInherit:A,WithChipStatusInheritMultiSelect:M,WithRenderItem:W,__namedExportsOrder:ae,default:q},Symbol.toStringTag,{value:"Module"}));export{he as C,m as D,N as M,w as O,A as W,L as a,O as b,M as c,W as d};

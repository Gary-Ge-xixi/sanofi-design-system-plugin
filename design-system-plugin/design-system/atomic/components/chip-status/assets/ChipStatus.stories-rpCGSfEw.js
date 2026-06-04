import{j as e,l as v,g as R,v as T,i as E,k as h,p as x,I as l,m as O,n as b}from"./iframe-DU6-gHk6.js";import{b as n,c,C as t,a as o}from"./ChipStatus-BDbCokFo.js";import{c as D}from"./create-toast-Bk21w6Tb.js";const j={title:"Components/ChipStatus",component:o,parameters:{layout:"centered"},argTypes:{status:{control:"select",options:Object.values(t),description:"Status type",table:{defaultValue:{summary:"success"}}},emphasis:{control:"select",options:Object.values(c),description:"Visual emphasis",table:{defaultValue:{summary:"strong"}}},size:{control:"select",options:Object.values(n),description:"Chip size",table:{defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Disabled"}}},S={args:{children:"Status Chip",status:t.SUCCESS,emphasis:c.STRONG,size:n.MEDIUM,disabled:!1}},N=()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,minWidth:600},children:Object.values(t).map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(R,{variant:T.TITLE_4,children:s.charAt(0).toUpperCase()+s.slice(1)}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:Object.values(c).map(i=>e.jsx(o,{status:s,emphasis:i,size:n.MEDIUM,children:`${i.charAt(0).toUpperCase()+i.slice(1)} ${s.charAt(0).toUpperCase()+s.slice(1)}`},`${s}-${i}`))})]},s))}),u={name:"Style Variations",render:()=>e.jsx(N,{}),parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Overview of all available status and emphasis combinations."}}}},m={args:{children:"Disabled Status",status:t.ERROR,emphasis:c.STRONG,size:n.MEDIUM,disabled:!0}},f=[c.STRONG,c.OUTLINE,c.SUBTLE],y=[t.SUCCESS,t.ERROR,t.WARNING,t.INFORMATIVE,t.NEUTRAL,t.BRAND,"Disabled","WithNumber"],d={[t.SUCCESS]:l.CHECK_CIRCLE,[t.ERROR]:l.CANCEL,[t.WARNING]:l.ERROR,[t.INFORMATIVE]:l.INFO,[t.NEUTRAL]:l.CIRCLE,[t.BRAND]:l.CIRCLE},g=({inverse:s,args:i})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:{display:"flex",gap:8,marginLeft:80},children:y.map(a=>e.jsx("div",{style:{width:120,textAlign:"center"},children:e.jsx(E,{variant:x.BODY_MEDIUM,color:s?h.INVERSE:h.DEFAULT,children:a.charAt(0).toUpperCase()+a.slice(1)})},a))}),f.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("div",{style:{width:80},children:e.jsx(E,{variant:x.BODY_MEDIUM,color:s?h.INVERSE:h.DEFAULT,children:a.charAt(0).toUpperCase()+a.slice(1)})}),y.map(r=>e.jsxs("div",{style:{display:"flex",gap:8,flexDirection:"column",width:120},children:[r!=="Disabled"&&r!=="WithNumber"&&e.jsxs(e.Fragment,{children:[e.jsx(o,{status:r,emphasis:a,size:n.MEDIUM,iconStart:d[r],onClick:()=>{p(i,"onClick","Status")},children:"Status"}),e.jsx(o,{status:r,emphasis:a,size:n.SMALL,iconStart:d[r],onClick:()=>{p(i,"onClick","Status")},children:"Status"})]}),r==="Disabled"&&e.jsxs(e.Fragment,{children:[e.jsx(o,{status:t.SUCCESS,emphasis:a,size:n.MEDIUM,disabled:!0,iconStart:d[r],onClick:()=>{p(i,"onClick","Status")},children:"Status"}),e.jsx(o,{status:t.SUCCESS,emphasis:a,size:n.SMALL,disabled:!0,iconStart:d[r],onClick:()=>{p(i,"onClick","Status")},children:"Status"})]}),r==="WithNumber"&&e.jsxs(e.Fragment,{children:[e.jsx(o,{status:t.BRAND,emphasis:a,size:n.MEDIUM,iconStart:d[r],iconEnd:l.KEYBOARD_ARROW_DOWN,nbElement:3,onClick:()=>{p(i,"onClick","Status (3)")},children:"Status"}),e.jsx(o,{status:t.BRAND,emphasis:a,size:n.SMALL,iconStart:d[r],iconEnd:l.KEYBOARD_ARROW_DOWN,nbElement:3,onClick:()=>{p(i,"onClick","Status (3)")},children:"Status"})]})]},`${a}-${r}-static`))]},a))]}),C={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx(R,{variant:T.TITLE_3,children:"Overview"}),e.jsx(g,{args:s})]})},p=(s,i,a)=>{D({title:"Toast notification",text:`the ${i} props has been called with value ${a}`,variant:b.SUCCESS,displayCloseButton:!0,position:O.BOTTOM_CENTER,...s})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Status Chip",
    status: ChipStatusType.SUCCESS,
    emphasis: ChipStatusEmphasis.STRONG,
    size: ChipStatusSize.MEDIUM,
    disabled: false
  }
}`,...S.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Style Variations",
  render: () => <AllVariants />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: "Overview of all available status and emphasis combinations."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Disabled Status",
    status: ChipStatusType.ERROR,
    emphasis: ChipStatusEmphasis.STRONG,
    size: ChipStatusSize.MEDIUM,
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <Toast />
      <Title variant={TitleVariant.TITLE_3}>Overview</Title>
      <OverviewStaticGrid args={args} />
    </>
}`,...C.parameters?.docs?.source}}};const I=["Default","StyleGallery","Disabled","Overview"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:S,Disabled:m,Overview:C,StyleGallery:u,__namedExportsOrder:I,default:j},Symbol.toStringTag,{value:"Module"}));export{L as C,S as D,u as S};

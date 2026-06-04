import{B as c,I as b,e as a,f as o,j as r,g as t,h as N,i as _,k as f}from"./iframe-DU6-gHk6.js";import{i as L}from"./ButtonStoryUtils-bArO9qYv.js";import{I as D}from"./LinkEnum-B9P4sa5j.js";const Y={title:"Components/Button",component:o,argTypes:{variant:{options:Object.keys(a),control:{type:"select"}},size:{options:Object.keys(c),control:{type:"select"}},label:{control:"text"},icon:{options:Object.keys(L),mapping:L,control:{type:"select"},description:"The start aligned icon of the button if any"},iconPosition:{options:Object.keys(D),control:{type:"select"}},inverse:{control:"boolean"},fullWidth:{control:"boolean"},disabled:{control:"boolean"},isLoading:{control:"boolean"},onClick:{action:"clicked"},brandTheme:{options:Object.keys(N),control:{type:"select"}}}},I={pseudo:{hover:[".is-hover"],focusVisible:[".is-focus"],active:[".is-active"]}},l={label:"Action",icon:b.ARROW_FORWARD,inverse:!1,isLoading:!1,disabled:!1,fullWidth:!1,size:c.MEDIUM,iconPosition:D.START},v={args:{...l,variant:"primary"},render:e=>r.jsx(d,{...e})},y={args:{...l,variant:a.PRIMARY_NEUTRAL},render:e=>r.jsx(d,{...e})},u=({inverse:e,children:T})=>r.jsx(_,{color:e?f.INVERSE:f.DEFAULT,children:T}),n=({label:e="Action",ref:T,...s})=>r.jsxs("table",{style:{marginBottom:20},cellPadding:10,children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{children:r.jsx(u,{inverse:s.inverse,children:"Default"})}),r.jsx("th",{children:r.jsx(u,{inverse:s.inverse,children:"Hover"})}),r.jsx("th",{children:r.jsx(u,{inverse:s.inverse,children:"Active"})}),r.jsx("th",{children:r.jsx(u,{inverse:s.inverse,children:"Focus"})}),r.jsx("th",{children:r.jsx(u,{inverse:s.inverse,children:"Disabled"})}),r.jsx("th",{children:r.jsx(u,{inverse:s.inverse,children:"Loading"})})]})}),r.jsx("tbody",{children:[c.MEDIUM,c.LARGE,c.SMALL,c.XSMALL].map(i=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(u,{inverse:s.inverse,children:i})}),r.jsx("td",{children:r.jsx(o,{...s,size:i,label:e})}),r.jsx("td",{children:r.jsx(o,{...s,size:i,label:e,className:"is-hover"})}),r.jsx("td",{children:r.jsx(o,{...s,size:i,label:e,className:"is-active"})}),r.jsx("td",{children:r.jsx(o,{...s,size:i,label:e,className:"is-focus"})}),r.jsx("td",{children:r.jsx(o,{...s,size:i,label:e,disabled:!0})}),r.jsx("td",{children:r.jsx(o,{...s,size:i,label:e,isLoading:!0})})]},i))})]}),R={args:{label:"Action",icon:b.ARROW_FORWARD},parameters:I,tags:["isHidden"],render:e=>r.jsxs("div",{children:[r.jsx(t,{children:"primary"}),r.jsx(n,{...e,variant:a.PRIMARY}),r.jsx(t,{children:"primary-neutral"}),r.jsx(n,{...e,variant:a.PRIMARY_NEUTRAL}),r.jsx(t,{children:"primary-destruct"}),r.jsx(n,{...e,variant:a.PRIMARY_DESTRUCT}),r.jsx(t,{children:"secondary"}),r.jsx(n,{...e,variant:a.SECONDARY}),r.jsx(t,{children:"secondary-neutral"}),r.jsx(n,{...e,variant:a.SECONDARY_NEUTRAL}),r.jsx(t,{children:"secondary-destruct"}),r.jsx(n,{...e,variant:a.SECONDARY_DESTRUCT}),r.jsx(t,{children:"tertiary"}),r.jsx(n,{...e,variant:a.TERTIARY}),r.jsx(t,{children:"tertiary-neutral"}),r.jsx(n,{...e,variant:a.TERTIARY_NEUTRAL}),r.jsx(t,{children:"tertiary-destruct"}),r.jsx(n,{...e,variant:a.TERTIARY_DESTRUCT})]})},p={args:{label:"Action",icon:b.ARROW_FORWARD,inverse:!0},parameters:I,tags:["isHidden"],render:e=>r.jsxs("div",{children:[r.jsx(t,{color:"inverse",children:"primary"}),r.jsx(n,{...e,variant:a.PRIMARY}),r.jsx(t,{color:"inverse",children:"primary-neutral"}),r.jsx(n,{...e,variant:a.PRIMARY_NEUTRAL}),r.jsx(t,{color:"inverse",children:"primary-destruct"}),r.jsx(n,{...e,variant:a.PRIMARY_DESTRUCT}),r.jsx(t,{color:"inverse",children:"secondary"}),r.jsx(n,{...e,variant:a.SECONDARY}),r.jsx(t,{color:"inverse",children:"secondary-neutral"}),r.jsx(n,{...e,variant:a.SECONDARY_NEUTRAL}),r.jsx(t,{color:"inverse",children:"secondary-destruct"}),r.jsx(n,{...e,variant:a.SECONDARY_DESTRUCT}),r.jsx(t,{color:"inverse",children:"tertiary"}),r.jsx(n,{...e,variant:a.TERTIARY}),r.jsx(t,{color:"inverse",children:"tertiary-neutral"}),r.jsx(n,{...e,variant:a.TERTIARY_NEUTRAL}),r.jsx(t,{color:"inverse",children:"tertiary-destruct"}),r.jsx(n,{...e,variant:a.TERTIARY_DESTRUCT})]})},d=({ref:e,icon:T,size:s,...i})=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[r.jsxs("div",{style:{display:"flex",alignItems:"end",gap:20},children:[r.jsx(o,{...i,size:c.XSMALL}),r.jsx(o,{...i,size:c.SMALL}),r.jsx(o,{...i,size:c.MEDIUM}),r.jsx(o,{...i,size:c.LARGE})]}),r.jsxs("div",{style:{display:"flex",gap:20},children:[r.jsx(o,{...i,size:s,iconPosition:D.START,icon:T}),r.jsx(o,{...i,size:s,iconPosition:D.END,icon:T})]})]}),m={args:{label:"Action",variant:"primary",inverse:!1},tags:["isHidden"]},g={args:{...l,variant:"secondary"},render:e=>r.jsx(d,{...e})},j={args:{...l,variant:"secondary-neutral"},render:e=>r.jsx(d,{...e})},x={args:{...l,variant:"tertiary"},render:e=>r.jsx(d,{...e})},A={args:{...l,variant:"tertiary-neutral"},render:e=>r.jsx(d,{...e})},h={args:{...l,variant:"primary-destruct"},render:e=>r.jsx(d,{...e})},S={args:{...l,variant:"secondary-destruct"},render:e=>r.jsx(d,{...e})},E={args:{...l,variant:"tertiary-destruct"},render:e=>r.jsx(d,{...e})},B={args:{...l,variant:"tertiary",as:"a",href:"#",target:"_blank"},render:e=>r.jsx(d,{...e})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: "primary"
  },
  render: args => <StoryLayout {...args} />
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: ButtonVariant.PRIMARY_NEUTRAL
  },
  render: args => <StoryLayout {...args} />
}`,...y.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Action",
    icon: IconName.ARROW_FORWARD
  },
  parameters: defaultParameters,
  tags: ["isHidden"],
  render: args => <div>
      <Title>primary</Title>
      <ButtonsTable {...args} variant={ButtonVariant.PRIMARY} />
      <Title>primary-neutral</Title>
      <ButtonsTable {...args} variant={ButtonVariant.PRIMARY_NEUTRAL} />
      <Title>primary-destruct</Title>
      <ButtonsTable {...args} variant={ButtonVariant.PRIMARY_DESTRUCT} />
      <Title>secondary</Title>
      <ButtonsTable {...args} variant={ButtonVariant.SECONDARY} />
      <Title>secondary-neutral</Title>
      <ButtonsTable {...args} variant={ButtonVariant.SECONDARY_NEUTRAL} />
      <Title>secondary-destruct</Title>
      <ButtonsTable {...args} variant={ButtonVariant.SECONDARY_DESTRUCT} />
      <Title>tertiary</Title>
      <ButtonsTable {...args} variant={ButtonVariant.TERTIARY} />
      <Title>tertiary-neutral</Title>
      <ButtonsTable {...args} variant={ButtonVariant.TERTIARY_NEUTRAL} />
      <Title>tertiary-destruct</Title>
      <ButtonsTable {...args} variant={ButtonVariant.TERTIARY_DESTRUCT} />
    </div>
}`,...R.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Action",
    icon: IconName.ARROW_FORWARD,
    inverse: true
  },
  parameters: defaultParameters,
  tags: ["isHidden"],
  render: args => <div>
      <Title color="inverse">primary</Title>
      <ButtonsTable {...args} variant={ButtonVariant.PRIMARY} />
      <Title color="inverse">primary-neutral</Title>
      <ButtonsTable {...args} variant={ButtonVariant.PRIMARY_NEUTRAL} />
      <Title color="inverse">primary-destruct</Title>
      <ButtonsTable {...args} variant={ButtonVariant.PRIMARY_DESTRUCT} />
      <Title color="inverse">secondary</Title>
      <ButtonsTable {...args} variant={ButtonVariant.SECONDARY} />
      <Title color="inverse">secondary-neutral</Title>
      <ButtonsTable {...args} variant={ButtonVariant.SECONDARY_NEUTRAL} />
      <Title color="inverse">secondary-destruct</Title>
      <ButtonsTable {...args} variant={ButtonVariant.SECONDARY_DESTRUCT} />
      <Title color="inverse">tertiary</Title>
      <ButtonsTable {...args} variant={ButtonVariant.TERTIARY} />
      <Title color="inverse">tertiary-neutral</Title>
      <ButtonsTable {...args} variant={ButtonVariant.TERTIARY_NEUTRAL} />
      <Title color="inverse">tertiary-destruct</Title>
      <ButtonsTable {...args} variant={ButtonVariant.TERTIARY_DESTRUCT} />
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Action",
    variant: "primary",
    inverse: false
  },
  tags: ["isHidden"]
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: "secondary"
  },
  render: args => <StoryLayout {...args} />
}`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: "secondary-neutral"
  },
  render: args => <StoryLayout {...args} />
}`,...j.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: "tertiary"
  },
  render: args => <StoryLayout {...args} />
}`,...x.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: "tertiary-neutral"
  },
  render: args => <StoryLayout {...args} />
}`,...A.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: "primary-destruct"
  },
  render: args => <StoryLayout {...args} />
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: "secondary-destruct"
  },
  render: args => <StoryLayout {...args} />
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: "tertiary-destruct"
  },
  render: args => <StoryLayout {...args} />
}`,...E.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: "tertiary",
    as: "a",
    href: "#",
    target: "_blank"
  },
  render: args => <StoryLayout {...args} />
}`,...B.parameters?.docs?.source}}};const O=["Primary","PrimaryNeutral","Overview","OverviewInverse","Default","Secondary","SecondaryNeutral","Tertiary","TertiaryNeutral","PrimaryDestruct","SecondaryDestruct","TertiaryDestruct","ButtonLink"],M=Object.freeze(Object.defineProperty({__proto__:null,ButtonLink:B,Default:m,Overview:R,OverviewInverse:p,Primary:v,PrimaryDestruct:h,PrimaryNeutral:y,Secondary:g,SecondaryDestruct:S,SecondaryNeutral:j,Tertiary:x,TertiaryDestruct:E,TertiaryNeutral:A,__namedExportsOrder:O,default:Y},Symbol.toStringTag,{value:"Module"}));export{M as B,m as D};

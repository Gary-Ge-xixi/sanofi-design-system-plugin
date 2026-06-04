import{e,B as n,I as o,j as a}from"./iframe-DU6-gHk6.js";import{B as c}from"./ButtonIcon-B-F3gh4N.js";import{i as y}from"./ButtonStoryUtils-bArO9qYv.js";const S={title:"Components/ButtonIcon",component:c,argTypes:{onClick:{action:"clicked"},icon:{options:Object.keys(y),defaultValue:o.ARROW_FORWARD,mapping:y,control:{type:"select"}}}},s={size:n.MEDIUM,inverse:!1,disabled:!1,icon:"bookmark",isLoading:!1},t=({...r})=>a.jsxs("div",{style:{display:"flex",alignItems:"end",gap:20},children:[a.jsx(c,{...r,icon:o.BOOKMARK,size:n.XSMALL,"aria-label":"Bookmark Item of size XSMALL"}),a.jsx(c,{...r,icon:o.BOOKMARK,size:n.SMALL,"aria-label":"Bookmark Item of size SMALL"}),a.jsx(c,{...r,icon:o.BOOKMARK,size:n.MEDIUM,"aria-label":"Bookmark Item of size MEDIUM"}),a.jsx(c,{...r,icon:o.BOOKMARK,size:n.LARGE,"aria-label":"Bookmark Item of size LARGE"})]}),i={args:{...s,variant:e.PRIMARY},render:r=>a.jsx(t,{...r})},u={args:{...s,variant:e.PRIMARY_NEUTRAL},render:r=>a.jsx(t,{...r})},d={args:{...s,variant:e.PRIMARY_DESTRUCT},render:r=>a.jsx(t,{...r})},m={args:{...s,variant:e.SECONDARY},render:r=>a.jsx(t,{...r})},g={args:{...s,variant:e.SECONDARY_NEUTRAL},render:r=>a.jsx(t,{...r})},l={args:{...s,variant:e.SECONDARY_DESTRUCT},render:r=>a.jsx(t,{...r})},p={args:{...s,variant:e.TERTIARY},render:r=>a.jsx(t,{...r})},R={args:{...s,variant:e.TERTIARY_NEUTRAL},render:r=>a.jsx(t,{...r})},A={args:{...s,variant:e.TERTIARY_DESTRUCT},render:r=>a.jsx(t,{...r})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: ButtonVariant.PRIMARY
  },
  render: args => <StoryLayout {...args} />
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: ButtonVariant.PRIMARY_NEUTRAL
  },
  render: args => <StoryLayout {...args} />
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: ButtonVariant.PRIMARY_DESTRUCT
  },
  render: args => <StoryLayout {...args} />
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: ButtonVariant.SECONDARY
  },
  render: args => <StoryLayout {...args} />
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: ButtonVariant.SECONDARY_NEUTRAL
  },
  render: args => <StoryLayout {...args} />
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: ButtonVariant.SECONDARY_DESTRUCT
  },
  render: args => <StoryLayout {...args} />
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: ButtonVariant.TERTIARY
  },
  render: args => <StoryLayout {...args} />
}`,...p.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: ButtonVariant.TERTIARY_NEUTRAL
  },
  render: args => <StoryLayout {...args} />
}`,...R.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: ButtonVariant.TERTIARY_DESTRUCT
  },
  render: args => <StoryLayout {...args} />
}`,...A.parameters?.docs?.source}}};const T=["Primary","PrimaryNeutral","PrimaryDestruct","Secondary","SecondaryNeutral","SecondaryDestruct","Tertiary","TertiaryNeutral","TertiaryDestruct"],B=Object.freeze(Object.defineProperty({__proto__:null,Primary:i,PrimaryDestruct:d,PrimaryNeutral:u,Secondary:m,SecondaryDestruct:l,SecondaryNeutral:g,Tertiary:p,TertiaryDestruct:A,TertiaryNeutral:R,__namedExportsOrder:T,default:S},Symbol.toStringTag,{value:"Module"}));export{B,i as P};

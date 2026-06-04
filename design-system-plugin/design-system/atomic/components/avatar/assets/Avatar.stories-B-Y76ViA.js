import{d as v,j as e}from"./iframe-DU6-gHk6.js";import{A as r,a as n}from"./Avatar-DAJEZknH.js";const p=`${v}/images/Marie-Curie-avatar.jpeg`,x={title:"Components/Avatar",component:n,parameters:{actions:{argTypesRegex:null}},argTypes:{size:{control:"select",options:Object.values(r)}}},A=[r.XSMALL,r.SMALL,r.MEDIUM,r.LARGE,r.XLARGE,r.XXLARGE],g=({children:a})=>e.jsx("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"var(--elements-spacing-md)",flexWrap:"wrap"},children:A.map(s=>e.jsx("div",{children:a(s)},s))}),i=({width:a,children:s})=>e.jsx("div",{style:{width:a,border:"2px solid var(--elements-color-core-neutral-100)",borderRadius:"var(--elements-radius-md)",padding:"var(--elements-spacing-md)",backgroundColor:"var(--elements-color-core-neutral-50)"},children:s}),t={args:{name:"Marie Curie",image:p,size:r.MEDIUM,onClick:()=>alert("Avatar clicked")}},l={args:{name:"Marie Curie",image:p,onClick:()=>alert("Avatar clicked")},render:a=>e.jsx(g,{children:s=>e.jsx(n,{...a,size:s})})},c={args:{name:"Marie Curie",onClick:()=>alert("Avatar clicked")},render:a=>e.jsx(g,{children:s=>e.jsx(n,{...a,size:s})})},o={args:{onClick:()=>alert("Avatar clicked")},render:a=>e.jsx(g,{children:s=>e.jsx(n,{...a,size:s})})},d={args:{name:"Marie Curie",image:p,label:"marie.curie@sanofi.com"},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--elements-spacing-2xl)"},children:[e.jsxs("div",{style:{display:"flex",gap:"var(--elements-spacing-2xl)",justifyContent:"center"},children:[e.jsx(n,{...a,size:r.SMALL}),e.jsx(n,{...a,size:r.MEDIUM}),e.jsx(n,{...a,size:r.LARGE})]}),e.jsxs("div",{style:{display:"flex",gap:"var(--elements-spacing-2xl)",justifyContent:"center"},children:[e.jsx(n,{...a,size:r.XLARGE}),e.jsx(n,{...a,size:r.XXLARGE})]})]})},m={args:{name:"Dr. Alexander Fleming-Richardson",image:p,label:"alexander.fleming-richardson@research.pharmaceutical.sanofi.com"},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--elements-spacing-2xl)",alignItems:"flex-start"},children:[e.jsx(i,{width:"120px",children:e.jsx(n,{...a,size:r.SMALL})}),e.jsx(i,{width:"150px",children:e.jsx(n,{...a,size:r.MEDIUM})}),e.jsx(i,{width:"180px",children:e.jsx(n,{...a,size:r.LARGE})}),e.jsx(i,{width:"220px",children:e.jsx(n,{...a,size:r.XLARGE})}),e.jsx(i,{width:"250px",children:e.jsx(n,{...a,size:r.XXLARGE})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Marie Curie",
    image: avatarImage,
    size: AvatarSize.MEDIUM,
    onClick: () => alert("Avatar clicked")
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Marie Curie",
    image: avatarImage,
    onClick: () => alert("Avatar clicked")
  },
  render: args => <SizeShowcase>{size => <Avatar {...args} size={size} />}</SizeShowcase>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Marie Curie",
    onClick: () => alert("Avatar clicked")
  },
  render: args => <SizeShowcase>{size => <Avatar {...args} size={size} />}</SizeShowcase>
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: () => alert("Avatar clicked")
  },
  render: args => <SizeShowcase>{size => <Avatar {...args} size={size} />}</SizeShowcase>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Marie Curie",
    image: avatarImage,
    label: "marie.curie@sanofi.com"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--elements-spacing-2xl)"
  }}>
      <div style={{
      display: "flex",
      gap: "var(--elements-spacing-2xl)",
      justifyContent: "center"
    }}>
        <Avatar {...args} size={AvatarSize.SMALL} />
        <Avatar {...args} size={AvatarSize.MEDIUM} />
        <Avatar {...args} size={AvatarSize.LARGE} />
      </div>
      <div style={{
      display: "flex",
      gap: "var(--elements-spacing-2xl)",
      justifyContent: "center"
    }}>
        <Avatar {...args} size={AvatarSize.XLARGE} />
        <Avatar {...args} size={AvatarSize.XXLARGE} />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Dr. Alexander Fleming-Richardson",
    image: avatarImage,
    label: "alexander.fleming-richardson@research.pharmaceutical.sanofi.com"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--elements-spacing-2xl)",
    alignItems: "flex-start"
  }}>
      <Container width="120px">
        <Avatar {...args} size={AvatarSize.SMALL} />
      </Container>
      <Container width="150px">
        <Avatar {...args} size={AvatarSize.MEDIUM} />
      </Container>
      <Container width="180px">
        <Avatar {...args} size={AvatarSize.LARGE} />
      </Container>
      <Container width="220px">
        <Avatar {...args} size={AvatarSize.XLARGE} />
      </Container>
      <Container width="250px">
        <Avatar {...args} size={AvatarSize.XXLARGE} />
      </Container>
    </div>
}`,...m.parameters?.docs?.source}}};const u=["Default","AllSizes","WithInitials","WithDefaultIcon","WithLabel","TextOverflow"],h=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:l,Default:t,TextOverflow:m,WithDefaultIcon:o,WithInitials:c,WithLabel:d,__namedExportsOrder:u,default:x},Symbol.toStringTag,{value:"Module"}));export{h as A,c as W,l as a,o as b,d as c};

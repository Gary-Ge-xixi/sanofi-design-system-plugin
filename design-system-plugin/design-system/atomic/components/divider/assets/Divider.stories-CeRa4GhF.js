import{s as n,q as c,D as t,j as e,w as p,i}from"./iframe-DU6-gHk6.js";const y={title:"Components/Divider",component:t,argTypes:{orientation:{control:"select",options:Object.values(c),description:"The Divider orientation"},variant:{control:"select",options:Object.values(n),description:"The Divider variant"},width:{control:"number",description:"Size of the divider (value in rem)"},fullWidth:{control:"boolean",description:"If true, the divider will take the full width of the parent container"}}},v={orientation:c.HORIZONTAL,variant:n.DEFAULT,fullWidth:!1,width:void 0},a={decorators:[r=>e.jsx("div",{style:{height:"50px",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center",width:"100%"},children:e.jsx(r,{})})],args:{...v}},s={tags:["isHidden"],decorators:[r=>e.jsx("div",{style:{height:"50px"},children:e.jsx(r,{})})],render:()=>{const r=p();return e.jsxs("div",{style:{display:"flex",gap:"1rem",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"},children:[e.jsx(i,{children:"Default"}),e.jsx(t,{variant:n.DEFAULT,fullWidth:!0}),e.jsx(i,{children:"Inverse"}),e.jsx("div",{style:{padding:"1rem",background:r?"var(--elements-color-core-neutral-white)":"var(--elements-color-core-neutral-black)",width:"100%"},children:e.jsx(t,{variant:n.INVERSE,fullWidth:!0})}),e.jsx(i,{children:"Strong"}),e.jsx(t,{variant:n.STRONG,fullWidth:!0}),e.jsx(i,{children:"Subtle"}),e.jsx(t,{variant:n.SUBTLE,fullWidth:!0}),e.jsx(i,{children:"Custom width"}),e.jsx("div",{style:{display:"flex"},children:e.jsx(t,{variant:n.STRONG,width:20})}),e.jsx(i,{children:"Vertical orientation"}),e.jsx("div",{style:{display:"flex"},children:e.jsx(t,{variant:n.STRONG,width:3,orientation:c.VERTICAL})})]})}},o={parameters:{backgrounds:{variant:"inverse"}},args:{...v,variant:n.INVERSE},render:r=>{const u=p();return e.jsx("div",{style:{padding:"1rem",background:u?"var(--elements-color-core-neutral-white)":"var(--elements-color-core-neutral-black)"},children:e.jsx(t,{...r})})}},d={args:{...v,width:20},decorators:[r=>e.jsx("div",{style:{height:"50px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:e.jsx(r,{})})]},l={decorators:[r=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(r,{})})],args:{...v,orientation:c.VERTICAL,width:5}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    height: "50px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }}>
        <Story />
      </div>],
  args: {
    ...defaultArgs
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["isHidden"],
  decorators: [Story => <div style={{
    height: "50px"
  }}>
        <Story />
      </div>],
  render: () => {
    const isDark = useDarkMode();
    return <div style={{
      display: "flex",
      gap: "1rem",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%"
    }}>
        <Typography>Default</Typography>
        <Divider variant={DividerStyles.DEFAULT} fullWidth />
        <Typography>Inverse</Typography>
        <div style={{
        padding: "1rem",
        background: isDark ? "var(--elements-color-core-neutral-white)" : "var(--elements-color-core-neutral-black)",
        width: "100%"
      }}>
          <Divider variant={DividerStyles.INVERSE} fullWidth />
        </div>
        <Typography>Strong</Typography>
        <Divider variant={DividerStyles.STRONG} fullWidth />
        <Typography>Subtle</Typography>
        <Divider variant={DividerStyles.SUBTLE} fullWidth />
        <Typography>Custom width</Typography>
        <div style={{
        display: "flex"
      }}>
          <Divider variant={DividerStyles.STRONG} width={20} />
        </div>
        <Typography>Vertical orientation</Typography>
        <div style={{
        display: "flex"
      }}>
          <Divider variant={DividerStyles.STRONG} width={3} orientation={DividerOrientation.VERTICAL} />
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      variant: "inverse"
    }
  },
  args: {
    ...defaultArgs,
    variant: DividerStyles.INVERSE
  },
  render: args => {
    const isDark = useDarkMode();
    return <div style={{
      padding: "1rem",
      background: isDark ? "var(--elements-color-core-neutral-white)" : "var(--elements-color-core-neutral-black)"
    }}>
        <Divider {...args} />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    width: 20
  },
  decorators: [Story => <div style={{
    height: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>
        <Story />
      </div>],
  args: {
    ...defaultArgs,
    orientation: DividerOrientation.VERTICAL,
    width: 5
  }
}`,...l.parameters?.docs?.source}}};const h=["Default","Overview","Inverse","CustomWidth","Orientation"],m=Object.freeze(Object.defineProperty({__proto__:null,CustomWidth:d,Default:a,Inverse:o,Orientation:l,Overview:s,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{d as C,m as D,o as I,l as O,a};

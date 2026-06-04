import{j as e,g as t,v as c,i as u}from"./iframe-DU6-gHk6.js";import{R as l,a as i,b as a}from"./Radio-CBalJ2BC.js";import{L as x}from"./Link-Dsc7KtyT.js";const b={title:"Components/Radio",component:a,argTypes:{sizeRadio:{control:"select",options:Object.values(i),description:"The radio size"},color:{control:"select",options:Object.values(l),description:"The radio color variant"},subtext:{control:"text",description:"Optional subtext below the label"},checked:{control:"radio",options:[!0,!1],description:"The radio checked state"},onClick:{action:"clicked"},onChange:{action:"changed"},disableAnimation:{control:"boolean",description:"Disable animation for this radio instance"}}},f={sizeRadio:i.MEDIUM,color:l.BRANDED,label:"Radio",disabled:!1,defaultChecked:!0,onClick:p=>{console.log("The radio value is: ",p.target.checked),alert("The onClick props is called.")},onChange:p=>console.log(p)},o={args:{...f,label:"Default radio"}},d={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{variant:c.TITLE_4,children:"Different Sizes"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{sizeRadio:i.SMALL,label:e.jsxs(u,{children:["Small radio with ",e.jsx(x,{href:"#",children:"Link"})]}),defaultChecked:!0}),e.jsx(a,{sizeRadio:i.MEDIUM,label:"Medium radio",defaultChecked:!0}),e.jsx(a,{sizeRadio:i.LARGE,label:"Large radio",defaultChecked:!0})]})]})}),parameters:{docs:{description:{story:"Showcase of all available sizes (small, medium, large)."}}}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:c.TITLE_4,children:"Without Subtext"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{sizeRadio:i.SMALL,label:"Small radio"}),e.jsx(a,{sizeRadio:i.MEDIUM,label:"Medium radio"}),e.jsx(a,{sizeRadio:i.LARGE,label:"Large radio"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:c.TITLE_4,children:"With Subtext"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{sizeRadio:i.SMALL,label:"Small radio",subtext:"Here goes some details about the radio label"}),e.jsx(a,{sizeRadio:i.MEDIUM,label:"Medium radio",subtext:"Here goes some details about the radio label"}),e.jsx(a,{sizeRadio:i.LARGE,label:"Large radio",subtext:"Here goes some details about the radio label"})]})]})]}),parameters:{docs:{description:{story:"Comparison of all sizes with and without subtext."}}}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{variant:c.TITLE_4,children:"Branded Color"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(a,{color:l.BRANDED,label:"Unchecked"}),e.jsx(a,{color:l.BRANDED,label:"Checked",defaultChecked:!0}),e.jsx(a,{color:l.BRANDED,label:"Disabled",disabled:!0}),e.jsx(a,{color:l.BRANDED,label:"Disabled Checked",disabled:!0,defaultChecked:!0})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{variant:c.TITLE_4,children:"Neutral Color"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(a,{color:l.NEUTRAL,label:"Unchecked"}),e.jsx(a,{color:l.NEUTRAL,label:"Checked",defaultChecked:!0}),e.jsx(a,{color:l.NEUTRAL,label:"Disabled",disabled:!0}),e.jsx(a,{color:l.NEUTRAL,label:"Disabled Checked",disabled:!0,defaultChecked:!0})]})]})]}),parameters:{docs:{description:{story:"Showcase of both color variations with different states."}}}},r={render:()=>e.jsx(a,{sizeRadio:i.MEDIUM,color:l.BRANDED,label:e.jsxs(e.Fragment,{children:["I accept ",e.jsx(x,{href:"#",target:"_blank",children:"terms and conditions"})," to validate rules and regulations"]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: "Default radio"
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>
        <Title variant={TitleVariant.TITLE_4}>Different Sizes</Title>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }}>
          <Radio sizeRadio={RadioSize.SMALL} label={<Typography>
                Small radio with <Link href="#">Link</Link>
              </Typography>} defaultChecked />
          <Radio sizeRadio={RadioSize.MEDIUM} label="Medium radio" defaultChecked />
          <Radio sizeRadio={RadioSize.LARGE} label="Large radio" defaultChecked />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Showcase of all available sizes (small, medium, large)."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
        <Title variant={TitleVariant.TITLE_4}>Without Subtext</Title>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>
          <Radio sizeRadio={RadioSize.SMALL} label="Small radio" />
          <Radio sizeRadio={RadioSize.MEDIUM} label="Medium radio" />
          <Radio sizeRadio={RadioSize.LARGE} label="Large radio" />
        </div>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
        <Title variant={TitleVariant.TITLE_4}>With Subtext</Title>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>
          <Radio sizeRadio={RadioSize.SMALL} label="Small radio" subtext="Here goes some details about the radio label" />
          <Radio sizeRadio={RadioSize.MEDIUM} label="Medium radio" subtext="Here goes some details about the radio label" />
          <Radio sizeRadio={RadioSize.LARGE} label="Large radio" subtext="Here goes some details about the radio label" />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Comparison of all sizes with and without subtext."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>
        <Title variant={TitleVariant.TITLE_4}>Branded Color</Title>
        <div style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap"
      }}>
          <Radio color={RadioColor.BRANDED} label="Unchecked" />
          <Radio color={RadioColor.BRANDED} label="Checked" defaultChecked />
          <Radio color={RadioColor.BRANDED} label="Disabled" disabled />
          <Radio color={RadioColor.BRANDED} label="Disabled Checked" disabled defaultChecked />
        </div>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>
        <Title variant={TitleVariant.TITLE_4}>Neutral Color</Title>
        <div style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap"
      }}>
          <Radio color={RadioColor.NEUTRAL} label="Unchecked" />
          <Radio color={RadioColor.NEUTRAL} label="Checked" defaultChecked />
          <Radio color={RadioColor.NEUTRAL} label="Disabled" disabled />
          <Radio color={RadioColor.NEUTRAL} label="Disabled Checked" disabled defaultChecked />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Showcase of both color variations with different states."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Radio sizeRadio={RadioSize.MEDIUM} color={RadioColor.BRANDED} label={<>
          I accept&nbsp;
          <Link href="#" target="_blank">
            terms and conditions
          </Link>
          &nbsp;to validate rules and regulations
        </>} />
}`,...r.parameters?.docs?.source}}};const h=["Default","Sizes","WithSubtext","ColorVariations","WithLink"],g=Object.freeze(Object.defineProperty({__proto__:null,ColorVariations:s,Default:o,Sizes:d,WithLink:r,WithSubtext:n,__namedExportsOrder:h,default:b},Symbol.toStringTag,{value:"Module"}));export{o as D,g as R};

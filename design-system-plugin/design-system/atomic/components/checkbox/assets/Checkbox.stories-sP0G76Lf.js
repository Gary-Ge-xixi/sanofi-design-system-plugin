import{j as e,g as d,v as x,i as h}from"./iframe-DU6-gHk6.js";import{C as o,a,b as l}from"./Checkbox-DhaBB2L5.js";import{L as b}from"./Link-Dsc7KtyT.js";const p={title:"Components/Checkbox",component:l,argTypes:{checkboxSize:{control:"select",options:Object.values(a),description:"The checkbox size"},color:{control:"select",options:Object.values(o),description:"The checkbox color variant"},subtext:{control:"text",description:"Optional subtext below the label"},checked:{control:"radio",options:[!0,!1],description:"The checkbox checked state"},onClick:{action:"clicked"},onChange:{action:"changed"}}},k={checkboxSize:a.MEDIUM,color:o.BRANDED,label:"Checkbox",disabled:!1,indeterminate:!1,defaultChecked:!0,onClick:c=>{console.log("The checkbox value is: ",c.target.checked)},onChange:c=>console.log(c)},i={args:{...k,label:"Default checkbox"}},n={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(d,{variant:x.TITLE_4,children:"Different Sizes"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(l,{checkboxSize:a.SMALL,label:e.jsxs(h,{children:["Small checkbox with ",e.jsx(b,{href:"#",children:"Link"})]}),defaultChecked:!0}),e.jsx(l,{checkboxSize:a.MEDIUM,label:"Medium checkbox",defaultChecked:!0}),e.jsx(l,{checkboxSize:a.LARGE,label:"Large checkbox",defaultChecked:!0})]})]})}),parameters:{docs:{description:{story:"Showcase of all available sizes (small, medium, large)."}}}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(d,{variant:x.TITLE_4,children:"Without Subtext"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(l,{checkboxSize:a.SMALL,label:"Small checkbox"}),e.jsx(l,{checkboxSize:a.MEDIUM,label:"Medium checkbox"}),e.jsx(l,{checkboxSize:a.LARGE,label:"Large checkbox"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(d,{variant:x.TITLE_4,children:"With Subtext"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(l,{checkboxSize:a.SMALL,label:"Small checkbox",subtext:"Here goes some details about the checkbox label"}),e.jsx(l,{checkboxSize:a.MEDIUM,label:"Medium checkbox",subtext:"Here goes some details about the checkbox label"}),e.jsx(l,{checkboxSize:a.LARGE,label:"Large checkbox",subtext:"Here goes some details about the checkbox label"})]})]})]}),parameters:{docs:{description:{story:"Comparison of all sizes with and without subtext."}}}},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(d,{variant:x.TITLE_4,children:"Branded Color"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(l,{color:o.BRANDED,label:"Unchecked"}),e.jsx(l,{color:o.BRANDED,label:"Checked",defaultChecked:!0}),e.jsx(l,{color:o.BRANDED,label:"Indeterminate",indeterminate:!0}),e.jsx(l,{color:o.BRANDED,label:"Disabled",disabled:!0}),e.jsx(l,{color:o.BRANDED,label:"Disabled Checked",disabled:!0,defaultChecked:!0})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(d,{variant:x.TITLE_4,children:"Neutral Color"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(l,{color:o.NEUTRAL,label:"Unchecked"}),e.jsx(l,{color:o.NEUTRAL,label:"Checked",defaultChecked:!0}),e.jsx(l,{color:o.NEUTRAL,label:"Indeterminate",indeterminate:!0}),e.jsx(l,{color:o.NEUTRAL,label:"Disabled",disabled:!0}),e.jsx(l,{color:o.NEUTRAL,label:"Disabled Checked",disabled:!0,defaultChecked:!0})]})]})]}),parameters:{docs:{description:{story:"Showcase of both color variations with different states."}}}},s={render:c=>e.jsx(l,{...c,label:e.jsxs(e.Fragment,{children:["I accept ",e.jsx(b,{href:"#",target:"_blank",children:"terms and conditions"})," to validate rules and regulations"]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: "Default checkbox"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <Checkbox checkboxSize={CheckboxSize.SMALL} label={<Typography>
                Small checkbox with <Link href="#">Link</Link>
              </Typography>} defaultChecked />
          <Checkbox checkboxSize={CheckboxSize.MEDIUM} label="Medium checkbox" defaultChecked />
          <Checkbox checkboxSize={CheckboxSize.LARGE} label="Large checkbox" defaultChecked />
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
          <Checkbox checkboxSize={CheckboxSize.SMALL} label="Small checkbox" />
          <Checkbox checkboxSize={CheckboxSize.MEDIUM} label="Medium checkbox" />
          <Checkbox checkboxSize={CheckboxSize.LARGE} label="Large checkbox" />
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
          <Checkbox checkboxSize={CheckboxSize.SMALL} label="Small checkbox" subtext="Here goes some details about the checkbox label" />
          <Checkbox checkboxSize={CheckboxSize.MEDIUM} label="Medium checkbox" subtext="Here goes some details about the checkbox label" />
          <Checkbox checkboxSize={CheckboxSize.LARGE} label="Large checkbox" subtext="Here goes some details about the checkbox label" />
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
          <Checkbox color={CheckboxColor.BRANDED} label="Unchecked" />
          <Checkbox color={CheckboxColor.BRANDED} label="Checked" defaultChecked />
          <Checkbox color={CheckboxColor.BRANDED} label="Indeterminate" indeterminate />
          <Checkbox color={CheckboxColor.BRANDED} label="Disabled" disabled />
          <Checkbox color={CheckboxColor.BRANDED} label="Disabled Checked" disabled defaultChecked />
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
          <Checkbox color={CheckboxColor.NEUTRAL} label="Unchecked" />
          <Checkbox color={CheckboxColor.NEUTRAL} label="Checked" defaultChecked />
          <Checkbox color={CheckboxColor.NEUTRAL} label="Indeterminate" indeterminate />
          <Checkbox color={CheckboxColor.NEUTRAL} label="Disabled" disabled />
          <Checkbox color={CheckboxColor.NEUTRAL} label="Disabled Checked" disabled defaultChecked />
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} label={<>
          I accept&nbsp;
          <Link href="#" target="_blank">
            terms and conditions
          </Link>
          &nbsp;to validate rules and regulations
        </>} />
}`,...s.parameters?.docs?.source}}};const u=["Default","Sizes","WithSubtext","ColorVariations","WithLink"],g=Object.freeze(Object.defineProperty({__proto__:null,ColorVariations:r,Default:i,Sizes:n,WithLink:s,WithSubtext:t,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{g as C,i as D};

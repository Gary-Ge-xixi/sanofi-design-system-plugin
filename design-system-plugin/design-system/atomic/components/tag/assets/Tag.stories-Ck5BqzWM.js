import{I as o,j as e,r as j}from"./iframe-DU6-gHk6.js";import{a as t,b as l,d as i,c as n,T as s}from"./Tag-DcJEYfKI.js";const f={title:"Components/Tag",component:s,parameters:{layout:"centered"},argTypes:{color:{control:"select",options:[...Object.values(i),...Object.values(n)]},variant:{control:"select",options:Object.values(l)},size:{control:"select",options:Object.values(t)},icon:{control:"select",options:[void 0,...Object.values(o)]}}},b={[n.BLUE]:o.INFO,[n.RED]:o.CANCEL,[n.ORANGE]:o.ERROR,[n.GREEN]:o.CHECK_CIRCLE},y={[n.BLUE]:"Info",[n.RED]:"Error",[n.ORANGE]:"Warning",[n.GREEN]:"Success"},d={args:{children:"Label",color:i.BLUE,variant:l.SUBTLE,size:t.MD}},g={args:{children:"Published",color:n.GREEN,variant:l.SUBTLE,size:t.MD,icon:o.CHECK_CIRCLE}},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--elements-spacing-xs)",alignItems:"center"},children:[e.jsx(s,{color:i.BLUE,variant:l.SUBTLE,children:"Subtle"}),e.jsx(s,{color:i.BLUE,variant:l.OUTLINE,children:"Outline"}),e.jsx(s,{color:i.BLUE,variant:l.SOLID,children:"Solid"}),e.jsx(s,{color:i.BLUE,variant:l.GHOST,children:"Ghost"})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--elements-spacing-xs)",alignItems:"center"},children:[e.jsx(s,{color:i.BLUE,size:t.SM,children:"Small"}),e.jsx(s,{color:i.BLUE,size:t.MD,children:"Medium"}),e.jsx(s,{color:i.BLUE,size:t.LG,children:"Large"})]})},v={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--elements-spacing-sm)"},children:Object.values(i).map(a=>e.jsx("div",{style:{display:"flex",gap:"var(--elements-spacing-2xs)",alignItems:"center"},children:Object.values(l).map(r=>e.jsx(s,{color:a,variant:r,children:a.charAt(0).toUpperCase()+a.slice(1)},r))},a))})},x={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--elements-spacing-sm)"},children:Object.values(n).map(a=>e.jsx("div",{style:{display:"flex",gap:"var(--elements-spacing-2xs)",alignItems:"center"},children:Object.values(l).map(r=>e.jsx(s,{color:a,variant:r,icon:b[a],children:y[a]},r))},a))})},u=Object.values(l),E=Object.values(t),S={display:"grid",gridTemplateColumns:"80px repeat(4, 1fr)",gap:"var(--elements-spacing-xs)",alignItems:"center"},C={display:"flex",flexDirection:"column",gap:"var(--elements-spacing-3xs)",alignItems:"center"},L={fontWeight:700,fontSize:"var(--elements-font-size-100)",textTransform:"uppercase",letterSpacing:"var(--elements-core-font-letterspacing-wide)",textAlign:"center"},h={fontSize:"var(--elements-font-size-200)",textAlign:"end",paddingInlineEnd:"var(--elements-spacing-xs)"},T={tags:["isHidden","!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--elements-spacing-3xl)"},children:[e.jsxs("div",{style:S,children:[e.jsx("div",{}),u.map(a=>e.jsx("div",{style:L,children:a},a)),Object.values(i).map(a=>e.jsxs(j.Fragment,{children:[e.jsx("div",{style:h,children:a}),u.map(r=>e.jsx("div",{style:C,children:E.map(c=>e.jsx(s,{color:a,variant:r,size:c,children:"Label"},c))},`${a}-${r}`))]},a))]}),e.jsxs("div",{style:S,children:[e.jsx("div",{}),u.map(a=>e.jsx("div",{style:L,children:a},a)),Object.values(n).map(a=>e.jsxs(j.Fragment,{children:[e.jsx("div",{style:h,children:y[a]}),u.map(r=>e.jsx("div",{style:C,children:E.map(c=>e.jsx(s,{color:a,variant:r,size:c,icon:b[a],children:y[a]},c))},`${a}-${r}`))]},a))]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Label",
    color: TagCategoricalColor.BLUE,
    variant: TagVariant.SUBTLE,
    size: TagSize.MD
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Published",
    color: TagSemanticColor.GREEN,
    variant: TagVariant.SUBTLE,
    size: TagSize.MD,
    icon: IconName.CHECK_CIRCLE
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--elements-spacing-xs)",
    alignItems: "center"
  }}>
      <Tag color={TagCategoricalColor.BLUE} variant={TagVariant.SUBTLE}>
        Subtle
      </Tag>
      <Tag color={TagCategoricalColor.BLUE} variant={TagVariant.OUTLINE}>
        Outline
      </Tag>
      <Tag color={TagCategoricalColor.BLUE} variant={TagVariant.SOLID}>
        Solid
      </Tag>
      <Tag color={TagCategoricalColor.BLUE} variant={TagVariant.GHOST}>
        Ghost
      </Tag>
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--elements-spacing-xs)",
    alignItems: "center"
  }}>
      <Tag color={TagCategoricalColor.BLUE} size={TagSize.SM}>
        Small
      </Tag>
      <Tag color={TagCategoricalColor.BLUE} size={TagSize.MD}>
        Medium
      </Tag>
      <Tag color={TagCategoricalColor.BLUE} size={TagSize.LG}>
        Large
      </Tag>
    </div>
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--elements-spacing-sm)"
  }}>
      {Object.values(TagCategoricalColor).map(color => <div key={color} style={{
      display: "flex",
      gap: "var(--elements-spacing-2xs)",
      alignItems: "center"
    }}>
          {Object.values(TagVariant).map(variant => <Tag key={variant} color={color} variant={variant}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Tag>)}
        </div>)}
    </div>
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--elements-spacing-sm)"
  }}>
      {Object.values(TagSemanticColor).map(color => <div key={color} style={{
      display: "flex",
      gap: "var(--elements-spacing-2xs)",
      alignItems: "center"
    }}>
          {Object.values(TagVariant).map(variant => <Tag key={variant} color={color} variant={variant} icon={semanticIcons[color]}>
              {semanticLabels[color]}
            </Tag>)}
        </div>)}
    </div>
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ["isHidden", "!autodocs"],
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--elements-spacing-3xl)"
  }}>
      <div style={grid}>
        <div />
        {allVariants.map(v => <div key={v} style={header}>
            {v}
          </div>)}

        {Object.values(TagCategoricalColor).map(color => <Fragment key={color}>
            <div style={rowLabel}>{color}</div>
            {allVariants.map(variant => <div key={\`\${color}-\${variant}\`} style={cell}>
                {allSizes.map(size => <Tag key={size} color={color} variant={variant} size={size}>
                    Label
                  </Tag>)}
              </div>)}
          </Fragment>)}
      </div>

      <div style={grid}>
        <div />
        {allVariants.map(v => <div key={v} style={header}>
            {v}
          </div>)}

        {Object.values(TagSemanticColor).map(color => <Fragment key={color}>
            <div style={rowLabel}>{semanticLabels[color]}</div>
            {allVariants.map(variant => <div key={\`\${color}-\${variant}\`} style={cell}>
                {allSizes.map(size => <Tag key={size} color={color} variant={variant} size={size} icon={semanticIcons[color]}>
                    {semanticLabels[color]}
                  </Tag>)}
              </div>)}
          </Fragment>)}
      </div>
    </div>
}`,...T.parameters?.docs?.source}}};const O=["Default","WithIcon","Variants","Sizes","Categorical","Semantic","Overview"],U=Object.freeze(Object.defineProperty({__proto__:null,Categorical:v,Default:d,Overview:T,Semantic:x,Sizes:p,Variants:m,WithIcon:g,__namedExportsOrder:O,default:f},Symbol.toStringTag,{value:"Module"}));export{v as C,d as D,p as S,U as T,m as V,x as a};

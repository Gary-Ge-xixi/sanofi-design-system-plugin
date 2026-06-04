import{r as h,o as V,j as e,g as c,v as d,i,f as P,e as L,I as R}from"./iframe-DU6-gHk6.js";import{F as s}from"./Flex-C-ZuU2xq.js";import{L as O}from"./Link-Dsc7KtyT.js";import{b as D}from"./Checkbox-DhaBB2L5.js";import{d as b,T as M}from"./Tag-DcJEYfKI.js";import{b as F}from"./Radio-CBalJ2BC.js";const W="_contentBlock_kjdn4_1",q="_border_kjdn4_7",G="_padding-none_kjdn4_10",X="_padding-xs_kjdn4_13",Y="_padding-sm_kjdn4_16",K="_padding-md_kjdn4_19",H="_padding-lg_kjdn4_22",z="_padding-xl_kjdn4_25",U="_interactive_kjdn4_28",$="_active_kjdn4_42",J="_selected_kjdn4_45",Q="_disabled_kjdn4_53",g={contentBlock:W,border:q,"padding-none":"_padding-none_kjdn4_10",paddingNone:G,"padding-xs":"_padding-xs_kjdn4_13",paddingXs:X,"padding-sm":"_padding-sm_kjdn4_16",paddingSm:Y,"padding-md":"_padding-md_kjdn4_19",paddingMd:K,"padding-lg":"_padding-lg_kjdn4_22",paddingLg:H,"padding-xl":"_padding-xl_kjdn4_25",paddingXl:z,interactive:U,active:$,selected:J,disabled:Q};var k=(n=>(n.NONE="none",n.XS="xs",n.SM="sm",n.MD="md",n.LG="lg",n.XL="xl",n))(k||{});const o=h.forwardRef(function({children:r,padding:l=k.MD,border:a=!1,classNames:t,onClick:m,isSelected:u=!1,isActive:w=!1,disabled:N=!1},E){const v=!!m,A=V(g.contentBlock,g[`padding-${l}`],{[g.border]:a,[g.interactive]:v,[g.selected]:v&&u,[g.active]:v&&w,[g.disabled]:v&&N},t?.root);return v?e.jsx("button",{ref:E,type:"button",className:A,onClick:m,disabled:N,"aria-pressed":u||void 0,children:r}):e.jsx("div",{ref:E,className:A,children:r})});try{o.displayName="ContentBlock",o.__docgenInfo={description:"",displayName:"ContentBlock",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/ContentBlock/ContentBlock.tsx",methods:[],props:{children:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/ContentBlock/ContentBlockProps.ts",name:"ContentBlockProps"}],description:"Content to render inside the block.",name:"children",parent:{fileName:"elements-design-system/src/components/ContentBlock/ContentBlockProps.ts",name:"ContentBlockProps"},required:!0,tags:{remarks:"For **default variant**: No restrictions - can contain multiple interactive elements.\nFor **interactive variant**: Recommended to have at most one interactive element\n(decorative, with `tabIndex={-1}` and `aria-hidden`), since the block itself\nis the actual interactive target."},type:{name:"ReactNode"}},padding:{defaultValue:{value:"ContentBlockPadding.MD"},declarations:[{fileName:"elements-design-system/src/components/ContentBlock/ContentBlockProps.ts",name:"ContentBlockProps"}],description:"Inner padding using Elements spacing tokens.",name:"padding",parent:{fileName:"elements-design-system/src/components/ContentBlock/ContentBlockProps.ts",name:"ContentBlockProps"},required:!1,tags:{default:"ContentBlockPadding.MD"},type:{name:"enum",raw:'"none" | ContentBlockPadding | "xs" | "sm" | "md" | "lg" | "xl"',value:[{value:'"none"'},{value:'"none"',description:"No padding - 0px",fullComment:"No padding - 0px",tags:{}},{value:'"xs"',description:"Extra small padding - 8px",fullComment:"Extra small padding - 8px",tags:{}},{value:'"sm"',description:"Small padding - 12px",fullComment:"Small padding - 12px",tags:{}},{value:'"md"',description:"Medium padding - 16px (default)",fullComment:"Medium padding - 16px (default)",tags:{}},{value:'"lg"',description:"Large padding - 20px",fullComment:"Large padding - 20px",tags:{}},{value:'"xl"',description:"Extra large padding - 24px",fullComment:"Extra large padding - 24px",tags:{}},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},border:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/ContentBlock/ContentBlockProps.ts",name:"ContentBlockProps"}],description:"Renders a border using the default border token.",name:"border",parent:{fileName:"elements-design-system/src/components/ContentBlock/ContentBlockProps.ts",name:"ContentBlockProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},classNames:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/ContentBlock/ContentBlockProps.ts",name:"ContentBlockProps"}],description:"Custom CSS classes for ContentBlock elements.",name:"classNames",parent:{fileName:"elements-design-system/src/components/ContentBlock/ContentBlockProps.ts",name:"ContentBlockProps"},required:!1,tags:{},type:{name:"ContentBlockClassNames"}},onClick:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/ContentBlock/ContentBlockProps.ts",name:"ContentBlockProps"}],description:"Click handler that activates the interactive variant.",name:"onClick",parent:{fileName:"elements-design-system/src/components/ContentBlock/ContentBlockProps.ts",name:"ContentBlockProps"},required:!1,tags:{remarks:`When provided, the block renders as a \`<button>\` element with:
- Managed hover, active, selected, and open states
- Box shadow applied automatically
- Keyboard navigation support (Enter/Space)

When absent, the block renders as a \`<div>\` with no interactive behavior.`},type:{name:"MouseEventHandler<HTMLButtonElement>"}},isSelected:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/ContentBlock/ContentBlockProps.ts",name:"ContentBlockProps"}],description:'Marks the block as selected (e.g., in a list or card group).\nOnly applies to interactive variant. Sets `aria-pressed="true"` for accessibility.',name:"isSelected",parent:{fileName:"elements-design-system/src/components/ContentBlock/ContentBlockProps.ts",name:"ContentBlockProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/ContentBlock/ContentBlockProps.ts",name:"ContentBlockProps"}],description:`Marks the block as currently active.
Only applies to interactive variant.`,name:"isActive",parent:{fileName:"elements-design-system/src/components/ContentBlock/ContentBlockProps.ts",name:"ContentBlockProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/ContentBlock/ContentBlockProps.ts",name:"ContentBlockProps"}],description:`Disables the interactive block, preventing clicks and applying a desaturated visual style.
Only applies to interactive variant.`,name:"disabled",parent:{fileName:"elements-design-system/src/components/ContentBlock/ContentBlockProps.ts",name:"ContentBlockProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}}},tags:{component:"ContentBlock",description:`A layout primitive that wraps content in a consistently padded,
optionally bordered container. Supports both passive (default) and interactive variants.`,param:`children - Content to render inside the block
padding - Inner padding token
border - Renders a border around the block
classNames - Custom CSS classes for ContentBlock elements
onClick - Click handler that activates interactive variant
isSelected - Marks block as selected (interactive only)
isActive - Marks block as active (interactive only)
disabled - Disables the interactive block`,example:`// Passive container with border
<ContentBlock padding={ContentBlockPadding.MD} border>
  <Title variant={TitleVariant.TITLE_3}>Section Title</Title>
  <Typography>Content goes here</Typography>
</ContentBlock>
// Interactive selectable block
<ContentBlock
  border
  onClick={() => setSelected(!selected)}
  isSelected={selected}
>
  <Typography>Click to toggle selection</Typography>
</ContentBlock>`}}}catch{}function Z(n){const[r,l]=h.useState(0);return e.jsxs(o,{...n,onClick:()=>l(a=>a+1),children:[e.jsx(c,{variant:d.TITLE_3,children:"Interactive Block"}),e.jsx(i,{children:"Click anywhere on this block. The entire surface is clickable."}),e.jsxs(i,{children:["Click count: ",e.jsx("strong",{children:r})]})]})}function ee(n){const[r,l]=h.useState(n.isSelected);return h.useEffect(()=>{l(n.isSelected)},[n.isSelected]),e.jsxs(o,{...n,isSelected:r,onClick:()=>l(a=>!a),children:[e.jsx(c,{variant:d.TITLE_3,children:r?"Selected":"Not Selected"}),e.jsx(i,{children:"Click to toggle selection state. This demonstrates the `isSelected` prop for list or card group scenarios."})]})}const ne=[{id:"1",title:"Option A",description:"First selectable option",tag:{label:"New",color:b.BLUE}},{id:"2",title:"Option B",description:"Second selectable option",tag:{label:"Popular",color:b.PURPLE}},{id:"3",title:"Option C",description:"Third selectable option",tag:{label:"Beta",color:b.ORANGE}}];function te(n){const[r,l]=h.useState(new Set),a=t=>{l(m=>{const u=new Set(m);return u.has(t)?u.delete(t):u.add(t),u})};return e.jsx(s,{direction:"column",gap:"sm",children:ne.map(t=>{const m=r.has(t.id);return e.jsx(o,{...n,onClick:()=>a(t.id),isSelected:m,children:e.jsxs(s,{align:"start",justify:"between",gap:"md",children:[e.jsxs(s,{align:"start",gap:"md",children:[e.jsx(D,{disabled:n.disabled??!1,checked:m,tabIndex:-1,"aria-hidden":!0,onChange:()=>{}}),e.jsxs(s,{direction:"column",children:[e.jsx(c,{variant:d.TITLE_4,children:t.title}),e.jsx(i,{children:t.description})]})]}),e.jsx(M,{color:t.tag.color,children:t.tag.label})]})},t.id)})})}const ae=[{id:"1",title:"Option A",description:"First selectable option",tag:{label:"Free",color:b.GREEN}},{id:"2",title:"Option B",description:"Second selectable option",tag:{label:"Pro",color:b.INDIGO}},{id:"3",title:"Option C",description:"Third selectable option",tag:{label:"Enterprise",color:b.BRANDED}}];function se(n){const[r,l]=h.useState(null);return e.jsx(s,{direction:"column",gap:"sm",role:"radiogroup",children:ae.map(a=>{const t=r===a.id;return e.jsx(o,{...n,onClick:()=>l(a.id),isSelected:t,children:e.jsxs(s,{align:"start",justify:"between",gap:"md",children:[e.jsxs(s,{align:"start",gap:"md",children:[e.jsx(F,{disabled:n.disabled??!1,checked:t,tabIndex:-1,"aria-hidden":!0,onChange:()=>{}}),e.jsxs(s,{direction:"column",children:[e.jsx(c,{variant:d.TITLE_4,children:a.title}),e.jsx(i,{children:a.description})]})]}),e.jsx(M,{color:a.tag.color,children:a.tag.label})]})},a.id)})})}const oe={title:"Components/ContentBlock",component:o,tags:["autodocs"],argTypes:{children:{description:"Content to render inside the block",control:{disable:!0}},padding:{description:"Inner padding using Elements spacing tokens",control:"select",options:Object.values(k),table:{type:{summary:"ContentBlockPadding"},defaultValue:{summary:"md"}}},classNames:{description:"Custom CSS classes for ContentBlock elements.",control:"object",table:{type:{summary:"{ root?: string }"}}},border:{description:"Renders a border around the block",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{description:"Click handler that activates the interactive variant. When absent, renders as a passive container.",table:{type:{summary:"() => void"}}},isSelected:{description:"Marks the block as selected (interactive variant only)",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isActive:{description:"Marks the block as active (interactive variant only)",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the interactive block, preventing clicks and applying a desaturated visual style (interactive variant only)",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},decorators:[n=>e.jsx(s,{direction:"column",gap:"md",style:{maxWidth:"400px"},children:e.jsx(n,{})})]},p={padding:k.MD,border:!1,isSelected:!1,isActive:!1,disabled:!1},C={args:{...p,border:!0},render:n=>e.jsxs(o,{...n,children:[e.jsx(c,{variant:d.TITLE_3,children:"Content Block"}),e.jsx(i,{children:"This is a default (non-interactive) content block. It serves as a passive container with consistent padding and optional border."})]})},f={render:()=>e.jsx(s,{direction:"column",gap:"md",children:Object.values(k).map(n=>e.jsx(o,{padding:n,border:!0,children:e.jsxs(i,{children:["Padding: ",e.jsx("strong",{children:n})]})},n))})},y={args:{...p,border:!0},render:n=>e.jsx(Z,{...n})},x={args:{...p,border:!0,isSelected:!0},render:n=>e.jsx(ee,{...n})},B={args:{...p,border:!0,disabled:!0},render:n=>e.jsxs(o,{...n,onClick:()=>alert("This should not fire"),children:[e.jsx(c,{variant:d.TITLE_3,children:"Disabled Block"}),e.jsx(i,{children:"This interactive block is disabled. It cannot be clicked and displays a desaturated visual style using background-blend-mode."})]})},T={args:{...p,border:!0,padding:k.LG},render:n=>e.jsx(o,{...n,children:e.jsxs(s,{direction:"column",gap:"md",children:[e.jsx(c,{variant:d.TITLE_3,children:"Article Title"}),e.jsx(i,{children:"This is a non-interactive content block with multiple independent actions. Each button manages its own click handler."}),e.jsxs(s,{gap:"sm",children:[e.jsx(P,{variant:L.PRIMARY,label:"Save",icon:R.BOOKMARK,onClick:()=>alert("Save clicked")}),e.jsx(P,{variant:L.SECONDARY,label:"Share",icon:R.SHARE,onClick:()=>alert("Share clicked")})]})]})})},S={args:{...p,border:!0,disabled:!1},render:n=>e.jsx(o,{...n,onClick:()=>alert("Block clicked"),children:e.jsxs(s,{justify:"between",align:"start",children:[e.jsxs(s,{direction:"column",children:[e.jsx(c,{variant:d.TITLE_3,children:"Clickable Card"}),e.jsx(i,{children:"The entire block is clickable. The button is decorative only."})]}),e.jsx(P,{variant:L.TERTIARY,label:"View",tabIndex:-1,"aria-hidden":!0,disabled:n.disabled??!1})]})})},j={args:{...p,border:!0},render:n=>e.jsx(te,{...n})},_={args:{...p,border:!0},render:n=>e.jsx(se,{...n})},I={args:{...p,border:!0,padding:k.LG},render:n=>e.jsx(o,{...n,children:e.jsxs(s,{direction:"column",gap:"sm",children:[e.jsx(c,{variant:d.TITLE_3,children:"Learn More"}),e.jsx(i,{children:"This content block contains a link. Since there is no `onClick` on the block, the link handles its own navigation."}),e.jsx(O,{href:"#",children:"Read the documentation"})]})})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    border: true
  },
  render: args => <ContentBlock {...args}>
      <Title variant={TitleVariant.TITLE_3}>Content Block</Title>
      <Typography>
        This is a default (non-interactive) content block. It serves as a
        passive container with consistent padding and optional border.
      </Typography>
    </ContentBlock>
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="md">
      {Object.values(ContentBlockPadding).map(padding => <ContentBlock key={padding} padding={padding} border>
          <Typography>
            Padding: <strong>{padding}</strong>
          </Typography>
        </ContentBlock>)}
    </Flex>
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    border: true
  },
  render: args => <InteractiveStory {...args} />
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    border: true,
    isSelected: true
  },
  render: args => <InteractiveSelectedStory {...args} />
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    border: true,
    disabled: true
  },
  render: args => <ContentBlock {...args} onClick={() => alert("This should not fire")}>
      <Title variant={TitleVariant.TITLE_3}>Disabled Block</Title>
      <Typography>
        This interactive block is disabled. It cannot be clicked and displays a
        desaturated visual style using background-blend-mode.
      </Typography>
    </ContentBlock>
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    border: true,
    padding: ContentBlockPadding.LG
  },
  render: args => <ContentBlock {...args}>
      <Flex direction="column" gap="md">
        <Title variant={TitleVariant.TITLE_3}>Article Title</Title>
        <Typography>
          This is a non-interactive content block with multiple independent
          actions. Each button manages its own click handler.
        </Typography>
        <Flex gap="sm">
          <Button variant={ButtonVariant.PRIMARY} label="Save" icon={IconName.BOOKMARK} onClick={() => alert("Save clicked")} />
          <Button variant={ButtonVariant.SECONDARY} label="Share" icon={IconName.SHARE} onClick={() => alert("Share clicked")} />
        </Flex>
      </Flex>
    </ContentBlock>
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    border: true,
    disabled: false
  },
  render: args => <ContentBlock {...args} onClick={() => alert("Block clicked")}>
      <Flex justify="between" align="start">
        <Flex direction="column">
          <Title variant={TitleVariant.TITLE_3}>Clickable Card</Title>
          <Typography>
            The entire block is clickable. The button is decorative only.
          </Typography>
        </Flex>
        <Button variant={ButtonVariant.TERTIARY} label="View" tabIndex={-1} aria-hidden disabled={args.disabled ?? false} />
      </Flex>
    </ContentBlock>
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    border: true
  },
  render: args => <SelectableListStory {...args} />
}`,...j.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    border: true
  },
  render: args => <SelectableRadioListStory {...args} />
}`,..._.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    border: true,
    padding: ContentBlockPadding.LG
  },
  render: args => <ContentBlock {...args}>
      <Flex direction="column" gap="sm">
        <Title variant={TitleVariant.TITLE_3}>Learn More</Title>
        <Typography>
          This content block contains a link. Since there is no \`onClick\` on the
          block, the link handles its own navigation.
        </Typography>
        <Link href="#">Read the documentation</Link>
      </Flex>
    </ContentBlock>
}`,...I.parameters?.docs?.source}}};const re=["Default","PaddingSizes","Interactive","InteractiveSelected","InteractiveDisabled","NonInteractiveWithMultipleActions","InteractiveWithDecorativeButton","SelectableList","SelectableRadioList","WithLink"],ue=Object.freeze(Object.defineProperty({__proto__:null,Default:C,Interactive:y,InteractiveDisabled:B,InteractiveSelected:x,InteractiveWithDecorativeButton:S,NonInteractiveWithMultipleActions:T,PaddingSizes:f,SelectableList:j,SelectableRadioList:_,WithLink:I,__namedExportsOrder:re,default:oe},Symbol.toStringTag,{value:"Module"}));export{ue as C,C as D,y as I,f as P,j as S,B as a};

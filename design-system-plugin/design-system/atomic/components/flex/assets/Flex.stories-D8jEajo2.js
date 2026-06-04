import{j as e,i as f}from"./iframe-DU6-gHk6.js";import{f as x,F as t}from"./Flex-C-ZuU2xq.js";import"./preload-helper-PPVm8Dsz.js";const S={component:t,title:"Components/Flex",argTypes:{direction:{description:"Sets `flex-direction`. Values: `row` | `row-reverse` | `column` | `column-reverse`.",control:"radio",options:["row","row-reverse","column","column-reverse"],table:{defaultValue:{summary:"row"}}},wrap:{description:"Sets `flex-wrap`. Values: `nowrap` | `wrap` | `wrap-reverse`.",control:"radio",options:["nowrap","wrap","wrap-reverse"],table:{defaultValue:{summary:"nowrap"}}},align:{description:"Controls `align-items`. Values: `start` | `center` | `end` | `baseline` | `stretch`.",control:"radio",options:["start","center","end","baseline","stretch"],table:{defaultValue:{summary:"stretch"}}},justify:{description:"Controls `justify-content`. Values: `start` | `center` | `end` | `between` | `around` | `evenly`.",control:"radio",options:["start","center","end","between","around","evenly"],table:{defaultValue:{summary:"start"}}},alignContent:{description:"Controls `align-content`. Only applies when `wrap` is set. Values: `start` | `center` | `end` | `between` | `around` | `evenly` | `stretch`.",control:"radio",options:[void 0,"start","center","end","between","around","evenly","stretch"]},display:{description:"Sets the CSS `display` property. Values: `flex` | `inline-flex` | `none`.",control:"radio",options:["flex","inline-flex","none"],table:{defaultValue:{summary:"flex"}}},gap:{description:"Token-based gap applied on both axes. Values: `none` | `3xs` | `2xs` | `xs` | `sm` | `md` | `lg` | `xl` | `2xl` | `3xl` | `4xl` | `5xl` | `6xl` or any CSS length.",control:"select",options:x},gapX:{description:"Token-based column gap. Same values as `gap`. Overrides `gap` for the horizontal axis.",control:"select",options:x},gapY:{description:"Token-based row gap. Same values as `gap`. Overrides `gap` for the vertical axis.",control:"select",options:x},asChild:{description:"Render styles onto the single child instead of a wrapper element (Radix `asChild` pattern).",control:"boolean",table:{defaultValue:{summary:"false"}}},flex:{description:"Sets the CSS `flex` shorthand (grow, shrink, basis). Values: `1` | `auto` | `none` | `initial` | `1 0 200px`.",control:"text"}}},l={direction:"row",wrap:"nowrap",align:"stretch",justify:"start",gap:"md",display:"flex"},o=({title:r,description:s,children:a})=>e.jsxs("div",{style:{border:"1px solid var(--elements-color-semantic-border-default)",borderRadius:"var(--elements-radius-md)",padding:"var(--elements-spacing-lg)",display:"grid",gap:"var(--elements-spacing-md)",background:"var(--elements-color-surface-default)"},children:[e.jsxs("div",{children:[e.jsx(f,{style:{margin:"0 0 var(--elements-spacing-xs)"},children:r}),e.jsx(f,{style:{margin:0},children:s})]}),a]}),n=({label:r})=>e.jsx("div",{style:{backgroundColor:"var(--elements-color-core-brand-lightest)",color:"var(--elements-color-core-brand-darker)",borderRadius:"var(--elements-radius-sm)",padding:"var(--elements-spacing-sm)",border:"1px solid var(--elements-color-semantic-border-default)",minWidth:96,textAlign:"center",fontWeight:600},children:r}),i={args:{...l},render:r=>e.jsx(o,{title:"Horizontal flow",description:"Row direction with equal gap and start alignment.",children:e.jsxs(t,{...r,children:[e.jsx(n,{label:"Alpha"}),e.jsx(n,{label:"Bravo"}),e.jsx(n,{label:"Charlie"})]})})},d={args:{...l,direction:"column",align:"start",gap:"sm"},render:r=>e.jsx(o,{title:"Column stack",description:"Column direction for vertical layouts such as cards.",children:e.jsxs(t,{...r,children:[e.jsx(n,{label:"Header"}),e.jsx(n,{label:"Content"}),e.jsx(n,{label:"Footer"})]})})},c={args:{...l,wrap:"wrap",gap:"sm",gapY:"xs",justify:"between"},render:r=>e.jsx(o,{title:"Wrapping grid",description:"Wrap items with separate column/row gaps for responsive blocks.",children:e.jsx(t,{...r,children:Array.from({length:7},(s,a)=>e.jsx(n,{label:`Item ${a+1}`},a))})})},p={args:{...l,asChild:!0,gap:"sm",align:"center"},render:r=>e.jsx(o,{title:"As child",description:"Style a single child element (e.g., list) while preserving semantics.",children:e.jsx(t,{...r,children:e.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:["First","Second","Third"].map(s=>e.jsx("li",{children:e.jsx(n,{label:s})},s))})})})},m={args:{...l,justify:"evenly",gap:"none"},render:r=>e.jsx(o,{title:"Justify distribution",description:"Use 'around' or 'evenly' for equal spacing distribution.",children:e.jsxs(t,{...r,style:{minWidth:400},children:[e.jsx(n,{label:"Alpha"}),e.jsx(n,{label:"Bravo"}),e.jsx(n,{label:"Charlie"})]})})},g={args:{...l,wrap:"wrap",alignContent:"center",gap:"sm"},render:r=>e.jsx(o,{title:"Align content",description:"Control alignment of wrapped lines with alignContent.",children:e.jsx(t,{...r,style:{height:200,width:300},children:Array.from({length:6},(s,a)=>e.jsx(n,{label:`Item ${a+1}`},a))})})},h=({label:r,flex:s})=>e.jsx(t,{flex:s,justify:"center",align:"center",style:{backgroundColor:"var(--elements-color-core-brand-lightest)",color:"var(--elements-color-core-brand-darker)",borderRadius:"var(--elements-radius-sm)",padding:"var(--elements-spacing-sm)",border:"1px solid var(--elements-color-semantic-border-default)",fontWeight:600},children:r}),u={args:{...l,gap:"sm"},render:r=>e.jsx(o,{title:"Flex shorthand",description:"Control item sizing with the flex shorthand prop. The middle item grows twice as much.",children:e.jsxs(t,{...r,style:{width:"100%"},children:[e.jsx(h,{flex:1,label:"flex: 1"}),e.jsx(h,{flex:2,label:"flex: 2"}),e.jsx(h,{flex:1,label:"flex: 1"})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  render: args => <StorySection title="Horizontal flow" description="Row direction with equal gap and start alignment.">
      <Flex {...args}>
        <DemoItem label="Alpha" />
        <DemoItem label="Bravo" />
        <DemoItem label="Charlie" />
      </Flex>
    </StorySection>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    direction: "column",
    align: "start",
    gap: "sm"
  },
  render: args => <StorySection title="Column stack" description="Column direction for vertical layouts such as cards.">
      <Flex {...args}>
        <DemoItem label="Header" />
        <DemoItem label="Content" />
        <DemoItem label="Footer" />
      </Flex>
    </StorySection>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    wrap: "wrap",
    gap: "sm",
    gapY: "xs",
    justify: "between"
  },
  render: args => <StorySection title="Wrapping grid" description="Wrap items with separate column/row gaps for responsive blocks.">
      <Flex {...args}>
        {Array.from({
        length: 7
      }, (_, index) => <DemoItem key={index} label={\`Item \${index + 1}\`} />)}
      </Flex>
    </StorySection>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    asChild: true,
    gap: "sm",
    align: "center"
  },
  render: args => <StorySection title="As child" description="Style a single child element (e.g., list) while preserving semantics.">
      <Flex {...args}>
        <ul style={{
        listStyle: "none",
        padding: 0,
        margin: 0
      }}>
          {["First", "Second", "Third"].map(item => <li key={item}>
              <DemoItem label={item} />
            </li>)}
        </ul>
      </Flex>
    </StorySection>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    justify: "evenly",
    gap: "none"
  },
  render: args => <StorySection title="Justify distribution" description="Use 'around' or 'evenly' for equal spacing distribution.">
      <Flex {...args} style={{
      minWidth: 400
    }}>
        <DemoItem label="Alpha" />
        <DemoItem label="Bravo" />
        <DemoItem label="Charlie" />
      </Flex>
    </StorySection>
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    wrap: "wrap",
    alignContent: "center",
    gap: "sm"
  },
  render: args => <StorySection title="Align content" description="Control alignment of wrapped lines with alignContent.">
      <Flex {...args} style={{
      height: 200,
      width: 300
    }}>
        {Array.from({
        length: 6
      }, (_, index) => <DemoItem key={index} label={\`Item \${index + 1}\`} />)}
      </Flex>
    </StorySection>
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    gap: "sm"
  },
  render: args => <StorySection title="Flex shorthand" description="Control item sizing with the flex shorthand prop. The middle item grows twice as much.">
      <Flex {...args} style={{
      width: "100%"
    }}>
        <FlexItem flex={1} label="flex: 1" />
        <FlexItem flex={2} label="flex: 2" />
        <FlexItem flex={1} label="flex: 1" />
      </Flex>
    </StorySection>
}`,...u.parameters?.docs?.source}}};const v=["HorizontalFlow","ColumnStack","WrappingGrid","AsChildList","JustifyDistribution","AlignContent","FlexShorthand"];export{g as AlignContent,p as AsChildList,d as ColumnStack,u as FlexShorthand,i as HorizontalFlow,m as JustifyDistribution,c as WrappingGrid,v as __namedExportsOrder,S as default};

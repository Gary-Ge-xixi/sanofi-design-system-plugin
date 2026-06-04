import{i as t,j as e,U as c,p as d,g as i}from"./iframe-DU6-gHk6.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"Components/Typography",component:t,argTypes:{as:{control:"select",options:["p","span","div","li","a","label","h1","h2","h3","h4","h5","h6"]},dir:{control:"select",options:["auto","ltr","rtl"]},fontWeight:{control:"select",options:Object.values(c)}},tags:["autodocs"],parameters:{docs:{description:{component:"The `Typography` component is used to display text. If you want to display a title, use the `Title` component instead."}}}},p="The quick brown fox jumps over the lazy dog",n={args:{variant:"body-medium",children:p}},a={render:l=>e.jsx(e.Fragment,{children:Object.values(d).map(r=>e.jsxs("div",{style:{margin:"2rem 0"},children:[r," : ",e.jsx(t,{variant:r,children:p})]},r))})},o={render:()=>e.jsxs("div",{children:[e.jsx(i,{style:{margin:"0 0 2rem 0"},children:"Auto"}),e.jsx(t,{dir:"auto",children:"The quick brown fox jumps over the lazy dog."}),e.jsx(t,{dir:"auto",children:"الثعلب البني السريع يقفز فوق الكلب الكسول"}),e.jsx(i,{style:{margin:"2rem 0"},children:"Forced to RTL"}),e.jsx(t,{dir:"rtl",children:"The quick brown fox jumps over the lazy dog."}),e.jsx(i,{style:{margin:"2rem 0"},children:"Forced to LTR"}),e.jsx(t,{dir:"ltr",children:"الثعلب البني السريع يقفز فوق الكلب الكسول"})]})},s={render:l=>e.jsx(e.Fragment,{children:Object.values(c).map(r=>e.jsxs("div",{style:{margin:"2rem 0"},children:[r," :"," ",e.jsx(t,{variant:d.BODY_MEDIUM,fontWeight:r,children:p})]},r))})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "body-medium",
    children: sampleText
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  /**
   * This is a hack to have a good display of the code in the storybook
   * cf github issue https://github.com/storybookjs/storybook/issues/23248
   */

  render: (_args: never) => <>
      {Object.values(TypographyVariant).map(variant => <div key={variant} style={{
      margin: "2rem 0"
    }}>
          {variant} : <Typography variant={variant}>{sampleText}</Typography>
        </div>)}
    </>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <Title style={{
        margin: "0 0 2rem 0"
      }}>Auto</Title>
        <Typography dir="auto">
          The quick brown fox jumps over the lazy dog.
        </Typography>
        <Typography dir="auto">
          الثعلب البني السريع يقفز فوق الكلب الكسول
        </Typography>
        <Title style={{
        margin: "2rem 0"
      }}>Forced to RTL</Title>
        <Typography dir="rtl">
          The quick brown fox jumps over the lazy dog.
        </Typography>
        <Title style={{
        margin: "2rem 0"
      }}>Forced to LTR</Title>
        <Typography dir="ltr">
          الثعلب البني السريع يقفز فوق الكلب الكسول
        </Typography>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (_args: never) => <>
      {Object.values(TypographyFontWeight).map(weight => <div key={weight} style={{
      margin: "2rem 0"
    }}>
          {weight} :{" "}
          <Typography variant={TypographyVariant.BODY_MEDIUM} fontWeight={weight}>
            {sampleText}
          </Typography>
        </div>)}
    </>
}`,...s.parameters?.docs?.source}}};const g=["Default","Variants","TextDirection","FontWeights"];export{n as Default,s as FontWeights,o as TextDirection,a as Variants,g as __namedExportsOrder,y as default};

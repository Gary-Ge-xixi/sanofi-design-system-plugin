import{g as n,j as e,U as i,v as c}from"./iframe-DU6-gHk6.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Components/Title",component:n,argTypes:{as:{control:"select",options:["h1","h2","h3","h4","h5","h6","a"]},fontWeight:{control:"select",options:Object.values(i)}},tags:["autodocs"]},o="The quick brown fox jumps over the lazy dog",r={args:{variant:"title-3",children:o}},a={render:l=>e.jsx(e.Fragment,{children:Object.values(c).map(t=>e.jsxs("div",{style:{margin:"2rem 0"},children:[t," : ",e.jsx(n,{variant:t,children:o})]},t))})},s={render:l=>e.jsx(e.Fragment,{children:Object.values(i).map(t=>e.jsxs("div",{style:{margin:"2rem 0"},children:[t," :"," ",e.jsx(n,{variant:c.TITLE_3,fontWeight:t,children:o})]},t))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "title-3",
    children: sampleText
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  /**
   * This is a hack to have a good display of the code in the storybook
   * cf github issue https://github.com/storybookjs/storybook/issues/23248
   */

  render: (_args: never) => <>
      {Object.values(TitleVariant).map(variant => <div key={variant} style={{
      margin: "2rem 0"
    }}>
          {variant} : <Title variant={variant}>{sampleText}</Title>
        </div>)}
    </>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (_args: never) => <>
      {Object.values(TypographyFontWeight).map(weight => <div key={weight} style={{
      margin: "2rem 0"
    }}>
          {weight} :{" "}
          <Title variant={TitleVariant.TITLE_3} fontWeight={weight}>
            {sampleText}
          </Title>
        </div>)}
    </>
}`,...s.parameters?.docs?.source}}};const h=["Default","Variants","FontWeights"];export{r as Default,s as FontWeights,a as Variants,h as __namedExportsOrder,d as default};

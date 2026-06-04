import{j as r,i as a,p as n}from"./iframe-DU6-gHk6.js";import{I as t}from"./Image-BdGhIV8F.js";import"./preload-helper-PPVm8Dsz.js";import"./CardMediaContext-C83aSO4A.js";const o={title:"Components/Image",component:t,tags:["autodocs"]},s={args:{src:"https://placehold.co/150",alt:"Placeholder image"}},e={args:{src:"https:",alt:"Placeholder image"},render:c=>r.jsx("table",{style:{width:"100%"},children:r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("th",{scope:"col",children:"props"}),r.jsx("th",{scope:"col",children:"results"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("div",{children:[r.jsx(a,{variant:n.BODY_MEDIUM,children:"src = https://placehold.co/150"}),r.jsx(a,{variant:n.BODY_MEDIUM,children:"fallbackSrc = undefined"})]})}),r.jsx("td",{children:r.jsx(t,{...c,src:"https://placehold.co/150"})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("div",{children:[r.jsx(a,{variant:n.BODY_MEDIUM,children:"src = https://placehold.co/150"}),r.jsx(a,{variant:n.BODY_MEDIUM,children:"fallbackSrc = https://placehold.co/200"})]})}),r.jsx("td",{children:r.jsx(t,{...c,src:"https://placehold.co/150",fallbackSrc:"https://placehold.co/200"})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("div",{children:[r.jsx(a,{variant:n.BODY_MEDIUM,children:"src = https:"}),r.jsx(a,{variant:n.BODY_MEDIUM,children:'fallbackSrc = "none"'})]})}),r.jsx("td",{children:r.jsx(t,{...c,fallbackSrc:"none"})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("div",{children:[r.jsx(a,{variant:n.BODY_MEDIUM,children:"src = https:"}),r.jsx(a,{variant:n.BODY_MEDIUM,children:"fallbackSrc = https://placehold.co/200"})]})}),r.jsx("td",{children:r.jsx(t,{...c,fallbackSrc:"https://placehold.co/200"})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("div",{children:[r.jsx(a,{variant:n.BODY_MEDIUM,children:"src = https:"}),r.jsx(a,{variant:n.BODY_MEDIUM,children:"fallbackSrc ="})]})}),r.jsx("td",{children:r.jsx(t,{...c})})]})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/150",
    alt: "Placeholder image"
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https:",
    alt: "Placeholder image"
  },
  render: args => {
    return <table style={{
      width: "100%"
    }}>
        <tbody>
          <tr>
            <th scope="col">props</th>
            <th scope="col">results</th>
          </tr>
          <tr>
            <td>
              <div>
                <Typography variant={TypographyVariant.BODY_MEDIUM}>
                  src = https://placehold.co/150
                </Typography>
                <Typography variant={TypographyVariant.BODY_MEDIUM}>
                  fallbackSrc = undefined
                </Typography>
              </div>
            </td>
            <td>
              <Image {...args} src={"https://placehold.co/150"} />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <Typography variant={TypographyVariant.BODY_MEDIUM}>
                  src = https://placehold.co/150
                </Typography>
                <Typography variant={TypographyVariant.BODY_MEDIUM}>
                  fallbackSrc = https://placehold.co/200
                </Typography>
              </div>
            </td>
            <td>
              <Image {...args} src={"https://placehold.co/150"} fallbackSrc={"https://placehold.co/200"} />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <Typography variant={TypographyVariant.BODY_MEDIUM}>
                  src = https:
                </Typography>
                <Typography variant={TypographyVariant.BODY_MEDIUM}>
                  fallbackSrc = "none"
                </Typography>
              </div>
            </td>
            <td>
              <Image {...args} fallbackSrc={"none"} />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <Typography variant={TypographyVariant.BODY_MEDIUM}>
                  src = https:
                </Typography>
                <Typography variant={TypographyVariant.BODY_MEDIUM}>
                  fallbackSrc = https://placehold.co/200
                </Typography>
              </div>
            </td>
            <td>
              <Image {...args} fallbackSrc={"https://placehold.co/200"} />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <Typography variant={TypographyVariant.BODY_MEDIUM}>
                  src = https:
                </Typography>
                <Typography variant={TypographyVariant.BODY_MEDIUM}>
                  fallbackSrc =
                </Typography>
              </div>
            </td>
            <td>
              <Image {...args} />
            </td>
          </tr>
        </tbody>
      </table>;
  }
}`,...e.parameters?.docs?.source}}};const i=["Default","Overview"];export{s as Default,e as Overview,i as __namedExportsOrder,o as default};

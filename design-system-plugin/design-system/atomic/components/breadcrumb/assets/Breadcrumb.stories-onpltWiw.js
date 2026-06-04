import{af as q,h as v,r as T,j as e,o as A,g as P,v as W,i as n,k as i,p as m}from"./iframe-DU6-gHk6.js";import{s as x,B as L}from"./BreadcrumbItem-BVaX-Vl-.js";import{D as G}from"./DescendantsIndexerProvider-hbUwjT3b.js";const r=({children:a,itemsBeforeCollapse:l=0,itemsAfterCollapse:o=0,maxItems:E=6,brandTheme:g=v.primary,noWrap:w=!1,...j})=>{const{brandSecondaryClassName:M,brandTertiaryClassName:_}=q(g),[B,D]=T.useState({activation:!1,isKeyboardControl:!1}),C=T.useRef(null);T.useLayoutEffect(()=>{B.activation&&C.current?.children[l]?.firstElementChild?.focus()},[B.activation]);const O=s=>{const N=I=>{D({...B,activation:!0,isKeyboardControl:I})};if(s?.length&&l&&o&&l+o>=s.length||!Array.isArray(s))return s;const k=s?.length||0,y=[...s],H=y.slice(0,l||0),V=o?y.slice(k-o,k):y,R=I=>{I.key==="Enter"&&N(!0)};return e.jsx("nav",{className:A(x.breadcrumb,w?x.noWrap:"",{[M]:g===v.secondary,[_]:g===v.tertiary}),"aria-label":"Breadcrumb",role:"navigation",onKeyDown:R,...j,children:e.jsxs("ul",{children:[H,e.jsx(L,{children:"...",onClick:()=>N(!1),"aria-label":"Expand breadcrumb navigation"}),V]})})},S=l&&o&&!B.activation&&a?.length>=E;return e.jsx(G,{children:S?e.jsx(e.Fragment,{children:O(a)}):e.jsx("nav",{className:A(x.breadcrumb,w?x.noWrap:""),"aria-label":"breadcrumbs",...j,children:e.jsx("ul",{ref:C,children:a})})},S?"collapsed":"expanded")};r.Item=L;try{r.displayName="Breadcrumb",r.__docgenInfo={description:"",displayName:"Breadcrumb",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/Breadcrumb/Breadcrumb.tsx",methods:[],props:{children:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/BreadcrumbProps.ts",name:"BreadcrumbProps"}],description:"Breadcrumb.Item components representing the path.",name:"children",parent:{fileName:"elements-design-system/src/components/Breadcrumb/BreadcrumbProps.ts",name:"BreadcrumbProps"},required:!1,tags:{},type:{name:"ReactNode"}},className:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/BreadcrumbProps.ts",name:"BreadcrumbProps"}],description:"Additional CSS class for the breadcrumb container.",name:"className",parent:{fileName:"elements-design-system/src/components/Breadcrumb/BreadcrumbProps.ts",name:"BreadcrumbProps"},required:!1,tags:{},type:{name:"string"}},maxItems:{defaultValue:{value:"6"},declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/BreadcrumbProps.ts",name:"BreadcrumbProps"}],description:`Maximum number of items to display before collapsing.
When exceeded, middle items are replaced with an ellipsis menu.`,name:"maxItems",parent:{fileName:"elements-design-system/src/components/Breadcrumb/BreadcrumbProps.ts",name:"BreadcrumbProps"},required:!1,tags:{},type:{name:"number"}},itemsBeforeCollapse:{defaultValue:{value:"0"},declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/BreadcrumbProps.ts",name:"BreadcrumbProps"}],description:"Number of items to show before the collapsed section.",name:"itemsBeforeCollapse",parent:{fileName:"elements-design-system/src/components/Breadcrumb/BreadcrumbProps.ts",name:"BreadcrumbProps"},required:!1,tags:{default:"1"},type:{name:"number"}},itemsAfterCollapse:{defaultValue:{value:"0"},declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/BreadcrumbProps.ts",name:"BreadcrumbProps"}],description:"Number of items to show after the collapsed section.",name:"itemsAfterCollapse",parent:{fileName:"elements-design-system/src/components/Breadcrumb/BreadcrumbProps.ts",name:"BreadcrumbProps"},required:!1,tags:{default:"1"},type:{name:"number"}},brandTheme:{defaultValue:{value:"BrandTheme.primary"},declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/BreadcrumbProps.ts",name:"BreadcrumbProps"}],description:"Override the theme at component level.",name:"brandTheme",parent:{fileName:"elements-design-system/src/components/Breadcrumb/BreadcrumbProps.ts",name:"BreadcrumbProps"},required:!1,tags:{},type:{name:"enum",raw:'BrandTheme | "primary" | "secondary" | "tertiary"',value:[{value:'"primary"',description:"",fullComment:"",tags:{}},{value:'"secondary"',description:"",fullComment:"",tags:{}},{value:'"tertiary"',description:"",fullComment:"",tags:{}},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},noWrap:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/BreadcrumbProps.ts",name:"BreadcrumbProps"}],description:`Prevents breadcrumb items from wrapping to new lines.
Use when horizontal space is limited.`,name:"noWrap",parent:{fileName:"elements-design-system/src/components/Breadcrumb/BreadcrumbProps.ts",name:"BreadcrumbProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}}},tags:{component:"Breadcrumb",description:"A breadcrumb component is a navigation component that displays the current page's location within a website or application. It allows users to easily navigate back to previous pages by clicking on the breadcrumb links.",param:`children - The children of the breadcrumb
itemsBeforeCollapse - If max items is exceeded, the number of items to show before the ellipsis.
itemsAfterCollapse - If max items is exceeded, the number of items to show after the ellipsis.
maxItems - Specifies the maximum number of breadcrumbs to display. When there are more than the maximum number, only the first itemsBeforeCollapse and last itemsAfterCollapse will be shown, with an ellipsis in between.
noWrap - Prevent breadcrumb items from wrapping to new lines when there's insufficient space
brandTheme - The brand theme of the breadcrumb
others - The other props of the breadcrumb`,returns:"The rendered Breadcrumb component."}}}catch{}try{r.Item.displayName="Breadcrumb.Item",r.Item.__docgenInfo={description:"Breadcrumb Item Component",displayName:"Breadcrumb.Item",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/Breadcrumb/Breadcrumb.tsx",methods:[],props:{children:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"}],description:"Text label for the breadcrumb item.",name:"children",parent:{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"},required:!1,tags:{},type:{name:"string"}},deactivate:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"}],description:`Disables the link and shows as plain text.
Use for the current page (last item).`,name:"deactivate",parent:{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},href:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"}],description:"URL for standard anchor links.",name:"href",parent:{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"},required:!1,tags:{},type:{name:"string"}},to:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"}],description:"Path for React Router Link component.\nUse with `as={RouterLink}`.",name:"to",parent:{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"},required:!1,tags:{},type:{name:"string"}},className:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"}],description:"Additional CSS class.",name:"className",parent:{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"},required:!1,tags:{},type:{name:"string"}},routerLink:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"}],description:"",name:"routerLink",parent:{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"},required:!1,tags:{deprecated:"Use `as` prop instead."},type:{name:"ElementType"}},onClick:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"}],description:"Click handler for the breadcrumb link.",name:"onClick",parent:{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"},required:!1,tags:{},type:{name:"MouseEventHandler<HTMLAnchorElement>"}},others:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"}],description:"Additional props passed to the anchor element.",name:"others",parent:{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"},required:!1,tags:{},type:{name:"DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>"}},ellipsis:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"}],description:`Enables text truncation with tooltip on hover.
Use for long page titles.`,name:"ellipsis",parent:{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},maxWidth:{defaultValue:{value:"150"},declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"}],description:"Maximum width before text is truncated (requires `ellipsis`).",name:"maxWidth",parent:{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"BreadcrumbItemBaseProps"},required:!1,tags:{default:"150"},type:{name:"number"}},as:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Breadcrumb/item/BreadcrumbItemProps.ts",name:"TypeLiteral"}],description:`Element type to render as.
Use for custom link components (e.g., React Router).`,name:"as",required:!1,tags:{example:"as={RouterLink}"},type:{name:"ElementType"}}},tags:{param:`children Breadcrumb Item Text
className Additionnal CSS Classes
deactivate deactivate link
href Url. Use native <a> tag (only when the \`to\` property is not filled)
to Url. Use React Router Link instead of a native <a> tag.
as Custom element type
ellipsis Enable ellipsis mode with tooltip when text overflows
maxWidth Maximum width for ellipsed text in pixels (default: 150)`}}}catch{}const Y={title:"Components/Breadcrumb",component:r,argTypes:{itemsBeforeCollapse:{control:{type:"number"},description:"If max items is exceeded, the number of items to show before the ellipsis."},itemsAfterCollapse:{control:{type:"number"},description:"If max items is exceeded, the number of items to show after the ellipsis."},maxItems:{control:{type:"number"},description:"Specifies the maximum number of breadcrumbs to display. When there are more than the maximum number, only the first itemsBeforeCollapse and last itemsAfterCollapse will be shown, with an ellipsis in between."},noWrap:{control:{type:"boolean"},description:"Prevent breadcrumb items from wrapping to new lines when there's insufficient space."},ellipsis:{control:{type:"boolean"},description:"Enable ellipsis mode with tooltip when text overflows the container."},maxWidth:{control:{type:"number"},description:"Maximum width for ellipsed text in pixels (default: 150)"}},parameters:{backgrounds:{values:[{name:"light",value:"#f6f9fc"},{name:"dark",value:"#25465F"}]}}},t={itemsBeforeCollapse:2,itemsAfterCollapse:2,maxItems:6,children:[e.jsx(r.Item,{href:"#",as:"a",children:"Home"},1),e.jsx(r.Item,{href:"#",as:"a",children:"Investor Relations"},3),e.jsx(r.Item,{href:"#",as:"a",children:"Financial Results and Investor Events"},4),e.jsx(r.Item,{href:"#",as:"a",children:"Middle Quarter Results"},5),e.jsx(r.Item,{href:"#",as:"a",children:"Quarterly Results"},6),e.jsx(r.Item,{deactivate:!0,children:"Second quarter 2023 results"},7)]},d={args:{...t,maxItems:6}},c={args:{...t,maxItems:7}},p={args:{...t,itemsBeforeCollapse:1,itemsAfterCollapse:1}},u={args:{...t,itemsBeforeCollapse:2,itemsAfterCollapse:2}},h={args:{...t,itemsBeforeCollapse:0,itemsAfterCollapse:0,maxItems:7,noWrap:!0,ellipsis:!0,maxWidth:150},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(P,{variant:W.TITLE_5,children:"Ellipsis truncation with tooltip"}),e.jsx("div",{style:{marginBottom:"36px",marginTop:"24px"}}),e.jsxs(r,{...a,children:[e.jsx(r.Item,{href:"#",as:"a",children:"Home"},1),e.jsx(r.Item,{href:"#",as:"a",ellipsis:a.ellipsis,maxWidth:a.maxWidth,children:"This is a very long breadcrumb item text that should be truncated with ellipsis and show tooltip on hover"},2),e.jsx(r.Item,{deactivate:!0,children:"Current page with very long title"},3)]})]})},b={args:{...t,itemsBeforeCollapse:0,itemsAfterCollapse:0,maxItems:10,noWrap:!0,ellipsis:!0,maxWidth:150},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(P,{variant:W.TITLE_5,children:"Different maxWidth values for ellipsis truncation"}),e.jsxs("div",{style:{marginBottom:"36px",marginTop:"24px"},children:[e.jsx(n,{variant:m.BODY_SMALL,color:i.STRONG,children:"📏 Small maxWidth (80px):"}),e.jsxs(r,{...a,children:[e.jsx(r.Item,{href:"#",as:"a",children:"Home"},1),e.jsx(r.Item,{href:"#",as:"a",ellipsis:a.ellipsis,maxWidth:80,children:"Products and Services"},2),e.jsx(r.Item,{href:"#",as:"a",ellipsis:a.ellipsis,maxWidth:80,children:"Healthcare Solutions"},3),e.jsx(r.Item,{deactivate:!0,ellipsis:a.ellipsis,maxWidth:80,children:"Medical Devices and Equipment"},4)]})]}),e.jsxs("div",{style:{marginBottom:"36px"},children:[e.jsx(n,{variant:m.BODY_SMALL,color:i.STRONG,children:"📐 Default maxWidth (150px):"}),e.jsxs(r,{...a,children:[e.jsx(r.Item,{href:"#",as:"a",children:"Home"},1),e.jsx(r.Item,{href:"#",as:"a",ellipsis:a.ellipsis,children:"Products and Services"},2),e.jsx(r.Item,{href:"#",as:"a",ellipsis:a.ellipsis,children:"Healthcare Solutions"},3),e.jsx(r.Item,{deactivate:!0,ellipsis:a.ellipsis,children:"Medical Devices and Equipment"},4)]})]}),e.jsxs("div",{style:{marginBottom:"36px"},children:[e.jsx(n,{variant:m.BODY_SMALL,color:i.STRONG,children:"📏 Large maxWidth (250px):"}),e.jsxs(r,{...a,children:[e.jsx(r.Item,{href:"#",as:"a",children:"Home"},1),e.jsx(r.Item,{href:"#",as:"a",ellipsis:a.ellipsis,maxWidth:250,children:"Products and Services"},2),e.jsx(r.Item,{href:"#",as:"a",ellipsis:a.ellipsis,maxWidth:250,children:"Healthcare Solutions"},3),e.jsx(r.Item,{deactivate:!0,ellipsis:a.ellipsis,maxWidth:250,children:"Medical Devices and Equipment"},4)]})]}),e.jsxs("div",{style:{marginBottom:"36px"},children:[e.jsx(n,{variant:m.BODY_SMALL,color:i.STRONG,children:"🎯 Mixed maxWidth values:"}),e.jsxs(r,{...a,children:[e.jsx(r.Item,{href:"#",as:"a",children:"Home"},1),e.jsx(r.Item,{href:"#",as:"a",ellipsis:a.ellipsis,maxWidth:80,children:"Short truncation"},2),e.jsx(r.Item,{href:"#",as:"a",ellipsis:a.ellipsis,maxWidth:200,children:"Medium length truncation allowed"},3),e.jsx(r.Item,{deactivate:!0,ellipsis:a.ellipsis,maxWidth:120,children:"Current page with custom width"},4)]})]})]})},f={args:{...t,itemsBeforeCollapse:0,itemsAfterCollapse:0,maxItems:10,ellipsis:!0,maxWidth:150},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(P,{variant:W.TITLE_5,children:"Compare wrapping behavior with and without the noWrap prop"}),e.jsxs("div",{style:{marginBottom:"36px",marginTop:"24px"},children:[e.jsx(n,{variant:m.BODY_SMALL,color:i.STRONG,children:"🔄 Default behavior (noWrap=false) - items wrap to new lines:"}),e.jsx("div",{style:{width:"300px",padding:"var(--elements-spacing-md)",backgroundColor:"var(--elements-color-semantic-background-neutral-subtle)"},children:e.jsxs(r,{...a,noWrap:!1,children:[e.jsx(r.Item,{href:"#",as:"a",children:"Home"},1),e.jsx(r.Item,{href:"#",as:"a",children:"Products and Services"},2),e.jsx(r.Item,{href:"#",as:"a",children:"Healthcare Solutions"},3),e.jsx(r.Item,{href:"#",as:"a",children:"Medical Devices"},4),e.jsx(r.Item,{deactivate:!0,children:"Current Page"},5)]})})]}),e.jsxs("div",{children:[e.jsx(n,{variant:m.BODY_SMALL,color:i.STRONG,children:"➡️ No wrap behavior (noWrap=true) - items stay on single line:"}),e.jsx("div",{style:{width:"300px",padding:"var(--elements-spacing-md)",backgroundColor:"var(--elements-color-semantic-background-neutral-subtle)"},children:e.jsxs(r,{...a,noWrap:!0,children:[e.jsx(r.Item,{href:"#",as:"a",children:"Home"},1),e.jsx(r.Item,{href:"#",as:"a",ellipsis:a.ellipsis,maxWidth:a.maxWidth,children:"Products and Services"},2),e.jsx(r.Item,{href:"#",as:"a",ellipsis:a.ellipsis,maxWidth:a.maxWidth,children:"Healthcare Solutions"},3),e.jsx(r.Item,{href:"#",as:"a",ellipsis:a.ellipsis,maxWidth:a.maxWidth,children:"Medical Devices"},4),e.jsx(r.Item,{deactivate:!0,ellipsis:a.ellipsis,maxWidth:a.maxWidth,children:"Current Page"},5)]})})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    maxItems: 6
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    maxItems: 7
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 1
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    itemsBeforeCollapse: 2,
    itemsAfterCollapse: 2
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    itemsBeforeCollapse: 0,
    itemsAfterCollapse: 0,
    maxItems: 7,
    noWrap: true,
    ellipsis: true,
    maxWidth: 150
  },
  render: args => {
    return <>
        <Title variant={TitleVariant.TITLE_5}>
          Ellipsis truncation with tooltip
        </Title>

        <div style={{
        marginBottom: "36px",
        marginTop: "24px"
      }}></div>
        <Breadcrumb {...args}>
          <Breadcrumb.Item href="#" as="a" key={1}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#" as="a" key={2} ellipsis={args.ellipsis as boolean} maxWidth={args.maxWidth as number}>
            This is a very long breadcrumb item text that should be truncated
            with ellipsis and show tooltip on hover
          </Breadcrumb.Item>
          <Breadcrumb.Item deactivate key={3}>
            Current page with very long title
          </Breadcrumb.Item>
        </Breadcrumb>
      </>;
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    itemsBeforeCollapse: 0,
    itemsAfterCollapse: 0,
    maxItems: 10,
    noWrap: true,
    ellipsis: true,
    maxWidth: 150
  },
  render: args => {
    return <>
        <Title variant={TitleVariant.TITLE_5}>
          Different maxWidth values for ellipsis truncation
        </Title>

        <div style={{
        marginBottom: "36px",
        marginTop: "24px"
      }}>
          <Typography variant={TypographyVariant.BODY_SMALL} color={TypographyColor.STRONG}>
            📏 Small maxWidth (80px):
          </Typography>
          <Breadcrumb {...args}>
            <Breadcrumb.Item href="#" as="a" key={1}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#" as="a" key={2} ellipsis={args.ellipsis as boolean} maxWidth={80}>
              Products and Services
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#" as="a" key={3} ellipsis={args.ellipsis as boolean} maxWidth={80}>
              Healthcare Solutions
            </Breadcrumb.Item>
            <Breadcrumb.Item deactivate key={4} ellipsis={args.ellipsis as boolean} maxWidth={80}>
              Medical Devices and Equipment
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div style={{
        marginBottom: "36px"
      }}>
          <Typography variant={TypographyVariant.BODY_SMALL} color={TypographyColor.STRONG}>
            📐 Default maxWidth (150px):
          </Typography>
          <Breadcrumb {...args}>
            <Breadcrumb.Item href="#" as="a" key={1}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#" as="a" key={2} ellipsis={args.ellipsis as boolean}>
              Products and Services
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#" as="a" key={3} ellipsis={args.ellipsis as boolean}>
              Healthcare Solutions
            </Breadcrumb.Item>
            <Breadcrumb.Item deactivate key={4} ellipsis={args.ellipsis as boolean}>
              Medical Devices and Equipment
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div style={{
        marginBottom: "36px"
      }}>
          <Typography variant={TypographyVariant.BODY_SMALL} color={TypographyColor.STRONG}>
            📏 Large maxWidth (250px):
          </Typography>
          <Breadcrumb {...args}>
            <Breadcrumb.Item href="#" as="a" key={1}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#" as="a" key={2} ellipsis={args.ellipsis as boolean} maxWidth={250}>
              Products and Services
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#" as="a" key={3} ellipsis={args.ellipsis as boolean} maxWidth={250}>
              Healthcare Solutions
            </Breadcrumb.Item>
            <Breadcrumb.Item deactivate key={4} ellipsis={args.ellipsis as boolean} maxWidth={250}>
              Medical Devices and Equipment
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div style={{
        marginBottom: "36px"
      }}>
          <Typography variant={TypographyVariant.BODY_SMALL} color={TypographyColor.STRONG}>
            🎯 Mixed maxWidth values:
          </Typography>
          <Breadcrumb {...args}>
            <Breadcrumb.Item href="#" as="a" key={1}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#" as="a" key={2} ellipsis={args.ellipsis as boolean} maxWidth={80}>
              Short truncation
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#" as="a" key={3} ellipsis={args.ellipsis as boolean} maxWidth={200}>
              Medium length truncation allowed
            </Breadcrumb.Item>
            <Breadcrumb.Item deactivate key={4} ellipsis={args.ellipsis as boolean} maxWidth={120}>
              Current page with custom width
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </>;
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    itemsBeforeCollapse: 0,
    itemsAfterCollapse: 0,
    maxItems: 10,
    ellipsis: true,
    maxWidth: 150
  },
  render: args => {
    return <>
        <Title variant={TitleVariant.TITLE_5}>
          Compare wrapping behavior with and without the noWrap prop
        </Title>

        <div style={{
        marginBottom: "36px",
        marginTop: "24px"
      }}>
          <Typography variant={TypographyVariant.BODY_SMALL} color={TypographyColor.STRONG}>
            🔄 Default behavior (noWrap=false) - items wrap to new lines:
          </Typography>
          <div style={{
          width: "300px",
          padding: "var(--elements-spacing-md)",
          backgroundColor: "var(--elements-color-semantic-background-neutral-subtle)"
        }}>
            <Breadcrumb {...args} noWrap={false}>
              <Breadcrumb.Item href="#" as="a" key={1}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#" as="a" key={2}>
                Products and Services
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#" as="a" key={3}>
                Healthcare Solutions
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#" as="a" key={4}>
                Medical Devices
              </Breadcrumb.Item>
              <Breadcrumb.Item deactivate key={5}>
                Current Page
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>

        <div>
          <Typography variant={TypographyVariant.BODY_SMALL} color={TypographyColor.STRONG}>
            ➡️ No wrap behavior (noWrap=true) - items stay on single line:
          </Typography>
          <div style={{
          width: "300px",
          padding: "var(--elements-spacing-md)",
          backgroundColor: "var(--elements-color-semantic-background-neutral-subtle)"
        }}>
            <Breadcrumb {...args} noWrap={true}>
              <Breadcrumb.Item href="#" as="a" key={1}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#" as="a" key={2} ellipsis={args.ellipsis as boolean} maxWidth={args.maxWidth as number}>
                Products and Services
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#" as="a" key={3} ellipsis={args.ellipsis as boolean} maxWidth={args.maxWidth as number}>
                Healthcare Solutions
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#" as="a" key={4} ellipsis={args.ellipsis as boolean} maxWidth={args.maxWidth as number}>
                Medical Devices
              </Breadcrumb.Item>
              <Breadcrumb.Item deactivate key={5} ellipsis={args.ellipsis as boolean} maxWidth={args.maxWidth as number}>
                Current Page
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </>;
  }
}`,...f.parameters?.docs?.source}}};const U=["Collapsed","NotCollapsed","OneItemOnEachSide","TwoItemsOnEachSide","EllipsisTruncation","CustomMaxWidth","WrapVsNoWrap"],Q=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:d,CustomMaxWidth:b,EllipsisTruncation:h,NotCollapsed:c,OneItemOnEachSide:p,TwoItemsOnEachSide:u,WrapVsNoWrap:f,__namedExportsOrder:U,default:Y},Symbol.toStringTag,{value:"Module"}));export{Q as B,d as C};

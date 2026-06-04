import{j as e,D as J,r as w,e as A,I as G,g as de,v as ce,af as pe,h as W,o as me,f as l,i as a,p as s}from"./iframe-DU6-gHk6.js";import{C as H}from"./Container-CthkAo70.js";import{D as ue}from"./Tooltip-3ve6LLZH.js";import{B as X}from"./ButtonIcon-B-F3gh4N.js";import{u as we}from"./useIsomorphicLayoutEffect-BUEPmblJ.js";import{D as Q}from"./DatePicker-CqEp3DeW.js";import{a as F}from"./Select-CQJ-nqhp.js";import{A as he}from"./Autocomplete-Br2L4xQB.js";const fe="_elements-drawer-wrapper_2sacz_1",ge="_hiddenOverlay_2sacz_17",ye="_drawer-left_2sacz_20",ve="_drawer-right_2sacz_20",be="_drawer-start_2sacz_20",De="_drawer-end_2sacz_20",xe="_small_2sacz_25",Te="_medium_2sacz_25",Ce="_large_2sacz_25",_e="_full_2sacz_25",Be="_drawer-bottom_2sacz_46",je="_drawer-top_2sacz_50",Pe="_drawer-children-content_2sacz_63",Oe="_drawer-title-wrapper_2sacz_121",Se="_drawer-back-button_2sacz_129",Ae="_drawer-title_2sacz_121",Le="_drawer-footer_2sacz_136",ke="_footer-divider_2sacz_147",p={"elements-drawer-wrapper":"_elements-drawer-wrapper_2sacz_1",elementsDrawerWrapper:fe,hiddenOverlay:ge,"drawer-left":"_drawer-left_2sacz_20",drawerLeft:ye,"drawer-right":"_drawer-right_2sacz_20",drawerRight:ve,"drawer-start":"_drawer-start_2sacz_20",drawerStart:be,"drawer-end":"_drawer-end_2sacz_20",drawerEnd:De,small:xe,medium:Te,large:Ce,full:_e,"drawer-bottom":"_drawer-bottom_2sacz_46",drawerBottom:Be,"drawer-top":"_drawer-top_2sacz_50",drawerTop:je,"drawer-children-content":"_drawer-children-content_2sacz_63",drawerChildrenContent:Pe,"drawer-title-wrapper":"_drawer-title-wrapper_2sacz_121",drawerTitleWrapper:Oe,"drawer-back-button":"_drawer-back-button_2sacz_129",drawerBackButton:Se,"drawer-title":"_drawer-title_2sacz_121",drawerTitle:Ae,"drawer-footer":"_drawer-footer_2sacz_136",drawerFooter:Le,"footer-divider":"_footer-divider_2sacz_147",footerDivider:ke},Y=({content:t,withContainer:n})=>{const r=e.jsx("div",{className:p["drawer-children-content"],children:t});return n?e.jsx(H,{children:r}):r};try{Y.displayName="DrawerContent",Y.__docgenInfo={description:"DrawerContent component",displayName:"DrawerContent",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/Drawer/DrawerContent.tsx",methods:[],props:{content:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:"Main content of the drawer body.",name:"content",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{},type:{name:"ReactNode | ReactNode[]"}},withContainer:{defaultValue:{value:"true"},declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:"Wraps content in a Container component for consistent padding.",name:"withContainer",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{default:"true"},type:{name:"boolean"}}},tags:{param:`content - Drawer content
withContainer - Drawer with container`}}}catch{}var o=(t=>(t.TOP="top",t.BOTTOM="bottom",t.START="start",t.END="end",t))(o||{}),L=(t=>(t.SMALL="small",t.MEDIUM="medium",t.LARGE="large",t.FULL="full",t))(L||{});const I=({withContainer:t,footerContent:n})=>e.jsxs("div",{className:p["footer-divider"],children:[e.jsx(J,{}),t?e.jsx(H,{children:e.jsx("div",{className:p["drawer-footer"],children:n})}):e.jsx("div",{className:p["drawer-footer"],children:n})]});try{I.displayName="DrawerFooter",I.__docgenInfo={description:"DrawerFooter component",displayName:"DrawerFooter",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/Drawer/DrawerFooter.tsx",methods:[],props:{footerContent:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:`Content displayed in the drawer footer.
Typically contains action buttons.`,name:"footerContent",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{},type:{name:"ReactNode"}},withContainer:{defaultValue:{value:"true"},declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:"Wraps content in a Container component for consistent padding.",name:"withContainer",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{default:"true"},type:{name:"boolean"}}},tags:{param:`withContainer - Drawer with container
footerContent - Drawer footer content`}}}catch{}const Ve=w.forwardRef(function({showBackButton:n,drawerTitle:r,isClosable:i,withContainer:c,backButtonCallback:k,onClose:V},N){const f=N,D=e.jsxs("div",{className:p["drawer-title-wrapper"],children:[n&&e.jsx(X,{icon:G.ARROW_BACK,variant:A.TERTIARY,onClick:k,className:p["drawer-back-button"],"data-testid":"drawer-back-button"}),e.jsx(de,{as:"span",className:p["drawer-title"],variant:ce.TITLE_4,children:r}),i&&e.jsx(X,{icon:G.CLOSE,variant:A.TERTIARY,onClick:()=>{f?.current?.close(),V?.()},className:p["drawer-close-button"],"data-testid":"drawer-close-button"})]});return e.jsxs(e.Fragment,{children:[c?e.jsx(H,{children:D}):D,e.jsx(J,{})]})}),v=({isVisible:t,drawerTitle:n,showBackButton:r,backButtonCallback:i,position:c=o.START,content:k,footerContent:V,showFooter:N=!0,isClosable:f=!0,size:D=L.SMALL,hasOverlay:Z=!0,onClose:x,className:ee,brandTheme:E=W.primary,maxContentHeight:R,customDrawerWidth:M,onClick:U,...te})=>{const{brandSecondaryClassName:re,brandTertiaryClassName:ne}=pe(E),m=w.useRef(null),[$,ae]=w.useState(null);we(()=>{ae(m.current)},[]);const z=c===o.TOP||c===o.BOTTOM;w.useEffect(()=>{const d=m.current,u=le=>{f?x?.():le.preventDefault()},K=()=>{t&&m.current?.showModal()};return d?.addEventListener("cancel",u),d?.addEventListener("close",K),()=>{d?.removeEventListener("cancel",u),d?.removeEventListener("close",K)}},[f,t,x]),w.useEffect(()=>{const d=document.body.style.overflow;return t?(m.current?.showModal(),document.body.style.overflow="hidden"):(m.current?.close(),document.body.style.overflow=d),()=>{document.body.style.overflow=d}},[t]);const se=w.useMemo(()=>({dialogRef:m,dialogElement:$}),[$]),oe=w.useCallback(d=>{const u=m.current?.getBoundingClientRect();u&&(d.clientX<u.left||d.clientX>u.right||d.clientY<u.top||d.clientY>u.bottom)&&f&&x?.(),U?.(d)},[f,x,U]),ie=w.useMemo(()=>{const d={};return R&&(d["--drawer-content-max-height"]=R),M&&(d["--drawer-custom-width"]=M),d},[R,M]);return e.jsx(ue.Provider,{value:se,children:e.jsxs("dialog",{ref:m,onClick:oe,style:ie,className:me(p["elements-drawer-wrapper"],{[p[`drawer-${c}`]]:Object.values(o).includes(c),[p[`${D}`]]:Object.values(L).includes(D),[re]:E===W.secondary,[ne]:E===W.tertiary,[p.hiddenOverlay]:!Z},ee),...te,children:[e.jsx(Ve,{drawerTitle:n,showBackButton:r,isClosable:f,backButtonCallback:i,withContainer:z,onClose:x}),e.jsx(Y,{content:k,withContainer:z}),N&&e.jsx(I,{footerContent:V,withContainer:z})]})})};try{v.displayName="Drawer",v.__docgenInfo={description:"Drawer component",displayName:"Drawer",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/Drawer/Drawer.tsx",methods:[],props:{isVisible:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:"Controls the visibility of the drawer.",name:"isVisible",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},isClosable:{defaultValue:{value:"true"},declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:"Shows a close button in the header.",name:"isClosable",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{default:"true"},type:{name:"boolean"}},drawerTitle:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:`Title content displayed in the drawer header.
Can be a string or React node for custom formatting.`,name:"drawerTitle",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{},type:{name:"ReactNode"}},position:{defaultValue:{value:"DrawerPosition.START"},declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:`Edge from which the drawer slides in.
Uses logical properties (START/END) for RTL support.`,name:"position",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{default:"DrawerPosition.END"},type:{name:"enum",raw:'"start" | "end" | "top" | "bottom" | DrawerPosition',value:[{value:'"start"'},{value:'"end"'},{value:'"top"'},{value:'"bottom"'},{value:'"top"',description:"Slides from top edge - use for notifications or alerts",fullComment:"Slides from top edge - use for notifications or alerts",tags:{}},{value:'"bottom"',description:"Slides from bottom edge - use for mobile action sheets",fullComment:"Slides from bottom edge - use for mobile action sheets",tags:{}},{value:'"start"',description:"Slides from start edge (left in LTR, right in RTL) - use for navigation",fullComment:"Slides from start edge (left in LTR, right in RTL) - use for navigation",tags:{}},{value:'"end"',description:"Slides from end edge (right in LTR, left in RTL) - use for details panels",fullComment:"Slides from end edge (right in LTR, left in RTL) - use for details panels",tags:{}}]}},size:{defaultValue:{value:"DrawerSize.SMALL"},declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:"Size of the drawer (width for side drawers, height for top/bottom).",name:"size",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{default:"DrawerSize.MEDIUM"},type:{name:"enum",raw:'"small" | "medium" | "large" | "full" | DrawerSize',value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"full"'},{value:'"small"',description:"Compact drawer (~320px) - for filters and simple content",fullComment:"Compact drawer (~320px) - for filters and simple content",tags:{}},{value:'"medium"',description:"Standard drawer (~480px) - for most use cases",fullComment:"Standard drawer (~480px) - for most use cases",tags:{}},{value:'"large"',description:"Wide drawer (~640px) - for complex content",fullComment:"Wide drawer (~640px) - for complex content",tags:{}},{value:'"full"',description:"Full viewport - for immersive or mobile experiences",fullComment:"Full viewport - for immersive or mobile experiences",tags:{}}]}},showBackButton:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:"Shows a back button in the header for multi-level navigation.",name:"showBackButton",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},backButtonCallback:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:"Callback fired when the back button is clicked.\nOnly used when `showBackButton` is true.",name:"backButtonCallback",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{},type:{name:"(() => void)"}},content:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:"Main content of the drawer body.",name:"content",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{},type:{name:"ReactNode | ReactNode[]"}},footerContent:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:`Content displayed in the drawer footer.
Typically contains action buttons.`,name:"footerContent",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{},type:{name:"ReactNode"}},showFooter:{defaultValue:{value:"true"},declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:"Shows the footer section.",name:"showFooter",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},hasOverlay:{defaultValue:{value:"true"},declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:"Shows a semi-transparent overlay behind the drawer.",name:"hasOverlay",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{default:"true"},type:{name:"boolean"}},withContainer:{defaultValue:{value:"true"},declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:"Wraps content in a Container component for consistent padding.",name:"withContainer",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{default:"true"},type:{name:"boolean"}},onClose:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:`Callback fired when the drawer should close.
Triggered by close button, overlay click, or Escape key.`,name:"onClose",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{},type:{name:"(() => void)"}},brandTheme:{defaultValue:{value:"BrandTheme.primary"},declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:"Override the theme at component level.",name:"brandTheme",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{},type:{name:"enum",raw:'BrandTheme | "primary" | "secondary" | "tertiary"',value:[{value:'"primary"',description:"",fullComment:"",tags:{}},{value:'"secondary"',description:"",fullComment:"",tags:{}},{value:'"tertiary"',description:"",fullComment:"",tags:{}},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},maxContentHeight:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:`Maximum height for the content area.
Use when content should scroll independently.`,name:"maxContentHeight",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{example:'"calc(100vh - 200px)"'},type:{name:"string"}},customDrawerWidth:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"}],description:"Custom width for the drawer, overriding the `size` prop.",name:"customDrawerWidth",parent:{fileName:"elements-design-system/src/components/Drawer/DrawerProps.ts",name:"DrawerProps"},required:!1,tags:{example:'"500px", "50vw"'},type:{name:"string"}}},tags:{component:"",param:`isVisible - Determines if the drawer is visible.
drawerTitle - The title of the drawer.
showBackButton - Determines if the back button is shown.
backButtonCallback - Callback function for the back button.
position - The position of the drawer.
content - The content of the drawer.
footerContent - The content of the drawer footer.
showFooter - Determines if the drawer footer is rendered.
isClosable - Determines if the drawer can be closed.
size - The size of the drawer.
hasOverlay - Determines if the drawer has an overlay.
onClose - Callback function when the drawer is closed.
className - Additional class names for the drawer.
brandTheme - The brand theme for the drawer.
maxContentHeight - Custom max height for drawer content area (e.g., '80vh', '500px').
customDrawerWidth - Custom width for start/end positioned drawers (e.g., '400px', '50vw').
rest - Additional props to be passed to the drawer.`,returns:"The rendered Drawer component."}}}catch{}const{useArgs:q}=__STORYBOOK_MODULE_PREVIEW_API__,{userEvent:g,within:y}=__STORYBOOK_MODULE_TEST__,Ne={component:v,title:"Components/Drawer",argTypes:{isVisible:{description:"Whether the drawer is visible or not",control:{type:"boolean"}},hasOverlay:{description:"Whether the drawer has an overlay or not",control:{type:"boolean"}},position:{description:"The position of the drawer",control:"select",options:Object.values(o)},size:{description:"The size of the drawer",control:"select",options:Object.values(L)},showBackButton:{description:"Whether to show the back button or not",control:"boolean"},showFooter:{description:"Whether to render the drawer footer",control:"boolean"},maxContentHeight:{description:"Custom max height for drawer content area (e.g., '80vh', '500px')",control:"text"},customDrawerWidth:{description:"Custom width for start/end positioned drawers (e.g., '400px', '50vw')",control:"text"}}},h={drawerTitle:"Drawer Title",position:o.TOP,size:L.MEDIUM,isVisible:!1,hasOverlay:!0,backButtonCallback:()=>{console.log("Back button clicked")}};function b(t){const[,n]=q();function r(c=o.TOP){n({isVisible:!t.isVisible,position:c})}const i=e.jsxs(e.Fragment,{children:[e.jsx(l,{label:"Confirm",onClick:()=>alert("Confirm action")}),e.jsx(l,{label:"Cancel","data-testid":"cancel-drawer",variant:A.TERTIARY,onClick:()=>{n({isVisible:!1})}})]});return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(a,{variant:s.BODY_MEDIUM,children:"This examples shows a drawer with content. It has a title, subtitle, content, and footer content. The content can be any ReactNode, in this cased we used a video. The bottom section can be customised using the footerContent prop."})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1rem"},children:[e.jsx(l,{label:"Open on bottom side",onClick:()=>r(o.BOTTOM),"data-testid":"open-drawer-bottom"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"10rem"},children:[e.jsx(l,{label:"Open on end side",onClick:()=>r(o.END),"data-testid":"open-drawer-end"}),e.jsx(l,{label:"Open on start side",onClick:()=>r(o.START),"data-testid":"open-drawer-start"})]}),e.jsx(l,{label:"Open on top side",onClick:()=>r(o.TOP),"data-testid":"open-drawer-top"})]}),e.jsx(v,{content:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:s.BODY_MEDIUM,"data-testid":"drawer-text",children:"This Drawer can be dismissed by clicking on the close button and/or an action. The focus is redirected to the drawer but the remaining interface elements can still be focusable by going back."}),e.jsxs("div",{style:{width:"250px",margin:"4px 0",display:"flex",gap:"1rem",flexDirection:"column"},children:[e.jsx(he,{label:"Search fruits",options:[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"grape",label:"Grape"},{value:"orange",label:"Orange"}]}),e.jsx(F,{required:!0,placeholder:"Select an element",options:[{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"apple",label:"Apple"},{value:"blueberry",label:"Blueberry"},{value:"orange",label:"Orange"},{value:"strawberry",label:"Strawberry"},{value:"raspberry",label:"Raspberry"},{value:"watermelon",label:"Watermelon"},{value:"pineapple",label:"Pineapple"},{value:"kiwi",label:"Kiwi"}]}),e.jsx(Q,{defaultValue:"2024-04-06"})]})]}),isClosable:!0,onClose:()=>{n({isVisible:!1})},footerContent:i,...t})]})}const T={args:{...h,position:o.TOP},render:function(n){return b(n)},play:async({canvasElement:t})=>{const r=y(t).getByTestId("open-drawer-top");await g.click(r),await new Promise(i=>setTimeout(i,500))}},C={tags:["isHidden"],args:{...h,position:o.END},render:function(n){return b(n)}},_={args:{...h,position:o.END},render:function(n){return b(n)},play:async({canvasElement:t})=>{const r=y(t).getByTestId("open-drawer-end");await g.click(r),await new Promise(i=>setTimeout(i,500))}},B={args:{...h,position:o.BOTTOM},render:function(n){return b(n)},play:async({canvasElement:t})=>{const r=y(t).getByTestId("open-drawer-bottom");await g.click(r),await new Promise(i=>setTimeout(i,500))}},j={args:{...h,position:o.START},render:function(n){return b(n)},play:async({canvasElement:t})=>{const r=y(t).getByTestId("open-drawer-start");await g.click(r),await new Promise(i=>setTimeout(i,500))}},P={args:{...h,isClosable:!1,position:o.END},render:function(n){return b(n)},play:async({canvasElement:t})=>{const r=y(t).getByTestId("open-drawer-end");await g.click(r),await new Promise(i=>setTimeout(i,500))}},O={args:{...h,drawerTitle:"Custom Drawer Width",position:o.END,isVisible:!1,customDrawerWidth:"500px"},render:function(n){const[,r]=q(),i=e.jsxs(e.Fragment,{children:[e.jsx(l,{label:"Apply Width",onClick:()=>{alert(`Applied with customDrawerWidth: ${n.customDrawerWidth||"default (size-based)"}`),r({isVisible:!1})}}),e.jsx(l,{label:"Cancel","data-testid":"cancel-drawer",variant:A.TERTIARY,onClick:()=>{r({isVisible:!1})}})]}),c=e.jsxs("div",{style:{padding:"1rem"},children:[e.jsxs(a,{variant:s.BODY_SMALL,children:["Current customDrawerWidth:"," ",e.jsx("strong",{children:n.customDrawerWidth||"default (size-based)"})]}),e.jsx("br",{}),e.jsx("div",{style:{backgroundColor:"#e8f5e8",padding:"1rem",borderRadius:"4px",marginBottom:"1rem"},children:e.jsxs(a,{variant:s.BODY_SMALL,children:["✅ Start/End drawer width is now customizable!",e.jsx("br",{}),"• Default: Based on size prop (22.5rem, 30rem, 37.5rem, 90%)",e.jsx("br",{}),"• Current: ",n.customDrawerWidth||"size-based default",e.jsx("br",{}),"• Perfect for content-specific layouts"]})}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(a,{variant:s.BODY_MEDIUM,children:e.jsx("strong",{children:"Sample Content:"})}),e.jsx("br",{}),e.jsx(F,{required:!0,placeholder:"Select option",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]})]}),e.jsxs("div",{style:{backgroundColor:"#f0f8ff",padding:"1rem",borderRadius:"4px",marginBottom:"1rem"},children:[e.jsx(a,{variant:s.BODY_SMALL,children:e.jsx("strong",{children:"Benefits of Custom Width:"})}),e.jsxs("div",{style:{margin:"0.5rem 0",paddingLeft:"1rem"},children:[e.jsx(a,{variant:s.BODY_SMALL,children:"• ✅ Perfect width for your specific content"}),e.jsx(a,{variant:s.BODY_SMALL,children:"• ✅ Responsive: Always 100% on mobile"}),e.jsx(a,{variant:s.BODY_SMALL,children:"• ✅ Flexible: Use px, vw, %, rem, or any CSS unit"}),e.jsx(a,{variant:s.BODY_SMALL,children:"• ✅ Fallback: Uses size prop when not specified"})]})]}),e.jsx(a,{variant:s.BODY_SMALL,children:"Notice how this drawer can be precisely sized for your content needs. On mobile, it automatically becomes full-width for optimal experience."}),e.jsx("div",{style:{backgroundColor:"#fff3e0",padding:"1rem",borderRadius:"4px",marginTop:"1rem"},children:e.jsxs(a,{variant:s.BODY_SMALL,children:["💡 ",e.jsx("strong",{children:"Position Independence:"})," This feature only works for start/end positioned drawers. Top/bottom drawers use the maxContentHeight prop instead."]})})]});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{padding:"2rem",textAlign:"center"},children:[e.jsxs(a,{variant:s.BODY_MEDIUM,children:["This story demonstrates the new ",e.jsx("strong",{children:"customDrawerWidth"})," ","prop that allows users to customize the width for start/end positioned drawers."]}),e.jsx("br",{}),e.jsx(a,{variant:s.BODY_SMALL,children:"Try different width values to see the difference. Perfect for content-specific layouts!"}),e.jsx("br",{}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem",justifyContent:"center",marginTop:"1rem"},children:[e.jsx(l,{label:"Default (size-based)",onClick:()=>r({isVisible:!0,customDrawerWidth:void 0,position:o.END}),"data-testid":"default-width"}),e.jsx(l,{label:"Narrow (300px)",onClick:()=>r({isVisible:!0,customDrawerWidth:"300px",position:o.END}),"data-testid":"narrow-width"}),e.jsx(l,{label:"Medium (500px)",onClick:()=>r({isVisible:!0,customDrawerWidth:"500px",position:o.END}),"data-testid":"medium-width"}),e.jsx(l,{label:"Wide (700px)",onClick:()=>r({isVisible:!0,customDrawerWidth:"700px",position:o.END}),"data-testid":"wide-width"}),e.jsx(l,{label:"Viewport-based (40vw)",onClick:()=>r({isVisible:!0,customDrawerWidth:"40vw",position:o.END}),"data-testid":"viewport-width"}),e.jsx(l,{label:"Start Position",onClick:()=>r({isVisible:!0,customDrawerWidth:"450px",position:o.START}),"data-testid":"start-position"})]}),e.jsx("div",{style:{marginTop:"1rem",padding:"1rem",backgroundColor:"#fff3cd",borderRadius:"4px"},children:e.jsxs(a,{variant:s.BODY_SMALL,children:["💡 ",e.jsx("strong",{children:"Mobile Behavior:"})," All custom widths become 100% on mobile devices for optimal touch experience."]})})]}),e.jsx(v,{content:c,footerContent:i,onClose:()=>r({isVisible:!1}),...n})]})},play:async({canvasElement:t})=>{const r=y(t).getByTestId("medium-width");await g.click(r),await new Promise(i=>setTimeout(i,500))}},S={args:{...h,drawerTitle:"Custom Content Height",position:o.BOTTOM,isVisible:!1,maxContentHeight:"70vh"},render:function(n){const[,r]=q(),i=e.jsxs(e.Fragment,{children:[e.jsx(l,{label:"Apply Settings",onClick:()=>{alert(`Applied with maxContentHeight: ${n.maxContentHeight||"default (~96px)"}`),r({isVisible:!1})}}),e.jsx(l,{label:"Cancel","data-testid":"cancel-drawer",variant:A.TERTIARY,onClick:()=>{r({isVisible:!1})}})]}),c=e.jsxs("div",{style:{padding:"1rem"},children:[e.jsxs(a,{variant:s.BODY_SMALL,children:["Current maxContentHeight:"," ",e.jsx("strong",{children:n.maxContentHeight||"default (~96px)"})]}),e.jsx("br",{}),e.jsx("div",{style:{backgroundColor:"#e8f5e8",padding:"1rem",borderRadius:"4px",marginBottom:"1rem"},children:e.jsxs(a,{variant:s.BODY_SMALL,children:["This drawer's content area height is now customizable.",e.jsx("br",{}),"• Default: ~96px",e.jsx("br",{}),"• Current: ",n.maxContentHeight||"96px (default)",e.jsx("br",{}),"• Perfect for mobile: 70vh-80vh"]})}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(a,{variant:s.BODY_MEDIUM,children:e.jsx("strong",{children:"Sample Form Content:"})}),e.jsx("br",{}),e.jsx(Q,{defaultValue:"2024-04-06"})]}),e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsx(F,{required:!0,placeholder:"Select an option",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}]})}),e.jsxs("div",{style:{backgroundColor:"#f0f8ff",padding:"1rem",borderRadius:"4px",marginBottom:"1rem"},children:[e.jsx(a,{variant:s.BODY_SMALL,children:e.jsx("strong",{children:"Benefits of Custom Height:"})}),e.jsxs("div",{style:{margin:"0.5rem 0",paddingLeft:"1rem"},children:[e.jsx(a,{variant:s.BODY_SMALL,children:"• ✅ No more unnecessary scrollbars on mobile"}),e.jsx(a,{variant:s.BODY_SMALL,children:"• ✅ Content fits better on different screen sizes"}),e.jsx(a,{variant:s.BODY_SMALL,children:"• ✅ Better user experience for forms and lists"}),e.jsx(a,{variant:s.BODY_SMALL,children:"• ✅ Flexible: Use vh, px, %, or any CSS unit"})]})]}),e.jsx(a,{variant:s.BODY_SMALL,children:"Notice how this content area can now accommodate much more content without forcing scrollbars, especially on mobile devices where the default 96px height was too restrictive."})]});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{padding:"2rem",textAlign:"center"},children:[e.jsxs(a,{variant:s.BODY_MEDIUM,children:["This story demonstrates the new ",e.jsx("strong",{children:"maxContentHeight"})," ","prop that allows users to customize the content area height for top/bottom drawers."]}),e.jsx("br",{}),e.jsx(a,{variant:s.BODY_SMALL,children:"Try different height values to see the difference. Perfect for mobile optimization."}),e.jsx("br",{}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem",justifyContent:"center",marginTop:"1rem"},children:[e.jsx(l,{label:"Default (~96px)",onClick:()=>r({isVisible:!0,maxContentHeight:void 0}),"data-testid":"default-height"}),e.jsx(l,{label:"Mobile Optimized (70vh)",onClick:()=>r({isVisible:!0,maxContentHeight:"70vh"}),"data-testid":"mobile-height"}),e.jsx(l,{label:"Large (80vh)",onClick:()=>r({isVisible:!0,maxContentHeight:"80vh"}),"data-testid":"large-height"}),e.jsx(l,{label:"Fixed (400px)",onClick:()=>r({isVisible:!0,maxContentHeight:"400px"}),"data-testid":"fixed-height"}),e.jsx(l,{label:"Compact (200px)",onClick:()=>r({isVisible:!0,maxContentHeight:"200px"}),"data-testid":"compact-height"})]})]}),e.jsx(v,{content:c,footerContent:i,onClose:()=>r({isVisible:!1}),...n})]})},play:async({canvasElement:t})=>{const r=y(t).getByTestId("mobile-height");await g.click(r),await new Promise(i=>setTimeout(i,500))}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    position: DrawerPosition.TOP
  },
  render: function Render(args) {
    return DisplayRender(args);
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId("open-drawer-top");
    await userEvent.click(openButton);

    // Wait for drawer to open and render
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ["isHidden"],
  args: {
    ...defaultArgs,
    position: DrawerPosition.END
  },
  render: function Render(args) {
    return DisplayRender(args);
  }
}`,...C.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    position: DrawerPosition.END
  },
  render: function Render(args) {
    return DisplayRender(args);
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId("open-drawer-end");
    await userEvent.click(openButton);

    // Wait for drawer to open and render
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}`,..._.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    position: DrawerPosition.BOTTOM
  },
  render: function Render(args) {
    return DisplayRender(args);
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId("open-drawer-bottom");
    await userEvent.click(openButton);

    // Wait for drawer to open and render
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}`,...B.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    position: DrawerPosition.START
  },
  render: function Render(args) {
    return DisplayRender(args);
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId("open-drawer-start");
    await userEvent.click(openButton);

    // Wait for drawer to open and render
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}`,...j.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    isClosable: false,
    position: DrawerPosition.END
  },
  render: function Render(args) {
    return DisplayRender(args);
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId("open-drawer-end");
    await userEvent.click(openButton);

    // Wait for drawer to open and render
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}`,...P.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    drawerTitle: "Custom Drawer Width",
    position: DrawerPosition.END,
    isVisible: false,
    customDrawerWidth: "500px"
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs<{
      isVisible: boolean;
      customDrawerWidth?: string;
      position: DrawerPosition;
    }>();
    const footerContent = <>
        <Button label="Apply Width" onClick={() => {
        alert(\`Applied with customDrawerWidth: \${args.customDrawerWidth || "default (size-based)"}\`);
        updateArgs({
          isVisible: false
        });
      }} />
        <Button label="Cancel" data-testid="cancel-drawer" variant={ButtonVariant.TERTIARY} onClick={() => {
        updateArgs({
          isVisible: false
        });
      }} />
      </>;
    const richContent = <div style={{
      padding: "1rem"
    }}>
        <Typography variant={TypographyVariant.BODY_SMALL}>
          Current customDrawerWidth:{" "}
          <strong>{args.customDrawerWidth || "default (size-based)"}</strong>
        </Typography>
        <br />

        <div style={{
        backgroundColor: "#e8f5e8",
        padding: "1rem",
        borderRadius: "4px",
        marginBottom: "1rem"
      }}>
          <Typography variant={TypographyVariant.BODY_SMALL}>
            ✅ Start/End drawer width is now customizable!
            <br />
            • Default: Based on size prop (22.5rem, 30rem, 37.5rem, 90%)
            <br />• Current: {args.customDrawerWidth || "size-based default"}
            <br />• Perfect for content-specific layouts
          </Typography>
        </div>

        <div style={{
        marginBottom: "1rem"
      }}>
          <Typography variant={TypographyVariant.BODY_MEDIUM}>
            <strong>Sample Content:</strong>
          </Typography>
          <br />
          <Select required placeholder="Select option" options={[{
          value: "option1",
          label: "Option 1"
        }, {
          value: "option2",
          label: "Option 2"
        }, {
          value: "option3",
          label: "Option 3"
        }]} />
        </div>

        <div style={{
        backgroundColor: "#f0f8ff",
        padding: "1rem",
        borderRadius: "4px",
        marginBottom: "1rem"
      }}>
          <Typography variant={TypographyVariant.BODY_SMALL}>
            <strong>Benefits of Custom Width:</strong>
          </Typography>
          <div style={{
          margin: "0.5rem 0",
          paddingLeft: "1rem"
        }}>
            <Typography variant={TypographyVariant.BODY_SMALL}>
              • ✅ Perfect width for your specific content
            </Typography>
            <Typography variant={TypographyVariant.BODY_SMALL}>
              • ✅ Responsive: Always 100% on mobile
            </Typography>
            <Typography variant={TypographyVariant.BODY_SMALL}>
              • ✅ Flexible: Use px, vw, %, rem, or any CSS unit
            </Typography>
            <Typography variant={TypographyVariant.BODY_SMALL}>
              • ✅ Fallback: Uses size prop when not specified
            </Typography>
          </div>
        </div>

        <Typography variant={TypographyVariant.BODY_SMALL}>
          Notice how this drawer can be precisely sized for your content needs.
          On mobile, it automatically becomes full-width for optimal experience.
        </Typography>

        <div style={{
        backgroundColor: "#fff3e0",
        padding: "1rem",
        borderRadius: "4px",
        marginTop: "1rem"
      }}>
          <Typography variant={TypographyVariant.BODY_SMALL}>
            💡 <strong>Position Independence:</strong> This feature only works
            for start/end positioned drawers. Top/bottom drawers use the
            maxContentHeight prop instead.
          </Typography>
        </div>
      </div>;
    return <>
        <div style={{
        padding: "2rem",
        textAlign: "center"
      }}>
          <Typography variant={TypographyVariant.BODY_MEDIUM}>
            This story demonstrates the new <strong>customDrawerWidth</strong>{" "}
            prop that allows users to customize the width for start/end
            positioned drawers.
          </Typography>
          <br />
          <Typography variant={TypographyVariant.BODY_SMALL}>
            Try different width values to see the difference. Perfect for
            content-specific layouts!
          </Typography>
          <br />
          <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          marginTop: "1rem"
        }}>
            <Button label="Default (size-based)" onClick={() => updateArgs({
            isVisible: true,
            customDrawerWidth: undefined,
            position: DrawerPosition.END
          })} data-testid="default-width" />
            <Button label="Narrow (300px)" onClick={() => updateArgs({
            isVisible: true,
            customDrawerWidth: "300px",
            position: DrawerPosition.END
          })} data-testid="narrow-width" />
            <Button label="Medium (500px)" onClick={() => updateArgs({
            isVisible: true,
            customDrawerWidth: "500px",
            position: DrawerPosition.END
          })} data-testid="medium-width" />
            <Button label="Wide (700px)" onClick={() => updateArgs({
            isVisible: true,
            customDrawerWidth: "700px",
            position: DrawerPosition.END
          })} data-testid="wide-width" />
            <Button label="Viewport-based (40vw)" onClick={() => updateArgs({
            isVisible: true,
            customDrawerWidth: "40vw",
            position: DrawerPosition.END
          })} data-testid="viewport-width" />
            <Button label="Start Position" onClick={() => updateArgs({
            isVisible: true,
            customDrawerWidth: "450px",
            position: DrawerPosition.START
          })} data-testid="start-position" />
          </div>

          <div style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "#fff3cd",
          borderRadius: "4px"
        }}>
            <Typography variant={TypographyVariant.BODY_SMALL}>
              💡 <strong>Mobile Behavior:</strong> All custom widths become 100%
              on mobile devices for optimal touch experience.
            </Typography>
          </div>
        </div>
        <Drawer content={richContent} footerContent={footerContent} onClose={() => updateArgs({
        isVisible: false
      })} {...args} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const mediumButton = canvas.getByTestId("medium-width");
    await userEvent.click(mediumButton);

    // Wait for drawer to open and render
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}`,...O.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    drawerTitle: "Custom Content Height",
    position: DrawerPosition.BOTTOM,
    isVisible: false,
    maxContentHeight: "70vh"
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs<{
      isVisible: boolean;
      maxContentHeight?: string;
    }>();
    const footerContent = <>
        <Button label="Apply Settings" onClick={() => {
        alert(\`Applied with maxContentHeight: \${args.maxContentHeight || "default (~96px)"}\`);
        updateArgs({
          isVisible: false
        });
      }} />
        <Button label="Cancel" data-testid="cancel-drawer" variant={ButtonVariant.TERTIARY} onClick={() => {
        updateArgs({
          isVisible: false
        });
      }} />
      </>;

    // Create rich content to demonstrate the height differences
    const richContent = <div style={{
      padding: "1rem"
    }}>
        <Typography variant={TypographyVariant.BODY_SMALL}>
          Current maxContentHeight:{" "}
          <strong>{args.maxContentHeight || "default (~96px)"}</strong>
        </Typography>
        <br />

        <div style={{
        backgroundColor: "#e8f5e8",
        padding: "1rem",
        borderRadius: "4px",
        marginBottom: "1rem"
      }}>
          <Typography variant={TypographyVariant.BODY_SMALL}>
            This drawer's content area height is now customizable.
            <br />
            • Default: ~96px
            <br />• Current: {args.maxContentHeight || "96px (default)"}
            <br />• Perfect for mobile: 70vh-80vh
          </Typography>
        </div>

        <div style={{
        marginBottom: "1rem"
      }}>
          <Typography variant={TypographyVariant.BODY_MEDIUM}>
            <strong>Sample Form Content:</strong>
          </Typography>
          <br />
          <DatePicker defaultValue={"2024-04-06"} />
        </div>

        <div style={{
        marginBottom: "1rem"
      }}>
          <Select required placeholder="Select an option" options={[{
          value: "option1",
          label: "Option 1"
        }, {
          value: "option2",
          label: "Option 2"
        }, {
          value: "option3",
          label: "Option 3"
        }, {
          value: "option4",
          label: "Option 4"
        }, {
          value: "option5",
          label: "Option 5"
        }]} />
        </div>

        <div style={{
        backgroundColor: "#f0f8ff",
        padding: "1rem",
        borderRadius: "4px",
        marginBottom: "1rem"
      }}>
          <Typography variant={TypographyVariant.BODY_SMALL}>
            <strong>Benefits of Custom Height:</strong>
          </Typography>
          <div style={{
          margin: "0.5rem 0",
          paddingLeft: "1rem"
        }}>
            <Typography variant={TypographyVariant.BODY_SMALL}>
              • ✅ No more unnecessary scrollbars on mobile
            </Typography>
            <Typography variant={TypographyVariant.BODY_SMALL}>
              • ✅ Content fits better on different screen sizes
            </Typography>
            <Typography variant={TypographyVariant.BODY_SMALL}>
              • ✅ Better user experience for forms and lists
            </Typography>
            <Typography variant={TypographyVariant.BODY_SMALL}>
              • ✅ Flexible: Use vh, px, %, or any CSS unit
            </Typography>
          </div>
        </div>

        <Typography variant={TypographyVariant.BODY_SMALL}>
          Notice how this content area can now accommodate much more content
          without forcing scrollbars, especially on mobile devices where the
          default 96px height was too restrictive.
        </Typography>
      </div>;
    return <>
        <div style={{
        padding: "2rem",
        textAlign: "center"
      }}>
          <Typography variant={TypographyVariant.BODY_MEDIUM}>
            This story demonstrates the new <strong>maxContentHeight</strong>{" "}
            prop that allows users to customize the content area height for
            top/bottom drawers.
          </Typography>
          <br />
          <Typography variant={TypographyVariant.BODY_SMALL}>
            Try different height values to see the difference. Perfect for
            mobile optimization.
          </Typography>
          <br />
          <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          marginTop: "1rem"
        }}>
            <Button label="Default (~96px)" onClick={() => updateArgs({
            isVisible: true,
            maxContentHeight: undefined
          })} data-testid="default-height" />
            <Button label="Mobile Optimized (70vh)" onClick={() => updateArgs({
            isVisible: true,
            maxContentHeight: "70vh"
          })} data-testid="mobile-height" />
            <Button label="Large (80vh)" onClick={() => updateArgs({
            isVisible: true,
            maxContentHeight: "80vh"
          })} data-testid="large-height" />
            <Button label="Fixed (400px)" onClick={() => updateArgs({
            isVisible: true,
            maxContentHeight: "400px"
          })} data-testid="fixed-height" />
            <Button label="Compact (200px)" onClick={() => updateArgs({
            isVisible: true,
            maxContentHeight: "200px"
          })} data-testid="compact-height" />
          </div>
        </div>
        <Drawer content={richContent} footerContent={footerContent} onClose={() => updateArgs({
        isVisible: false
      })} {...args} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const mobileButton = canvas.getByTestId("mobile-height");
    await userEvent.click(mobileButton);

    // Wait for drawer to open and render
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}`,...S.parameters?.docs?.source}}};const Ee=["TopSide","Default","EndSide","BottomSide","StartSide","NonDismissible","CustomDrawerWidth","CustomContentHeight"],qe=Object.freeze(Object.defineProperty({__proto__:null,BottomSide:B,CustomContentHeight:S,CustomDrawerWidth:O,Default:C,EndSide:_,NonDismissible:P,StartSide:j,TopSide:T,__namedExportsOrder:Ee,default:Ne},Symbol.toStringTag,{value:"Module"}));export{S as C,qe as D,P as N,C as a,O as b};

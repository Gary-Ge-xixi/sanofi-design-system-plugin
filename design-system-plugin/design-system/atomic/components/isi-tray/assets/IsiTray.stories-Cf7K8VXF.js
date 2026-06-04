import{r as P,j as e,g as V,k as Y,v as _,o as h,I as X,B as Q,e as Z,af as se,h as R,ad as ne,i,p as s}from"./iframe-DU6-gHk6.js";import{G as l}from"./index-Bre8NiPo.js";import{C as J}from"./Container-CthkAo70.js";import{u as re}from"./useBreakpoint-D1N6jPum.js";import{u as F}from"./useIsomorphicLayoutEffect-BUEPmblJ.js";import{c as O}from"./server-UKFEPc_w.js";import{B as $}from"./ButtonIcon-B-F3gh4N.js";import{L as oe}from"./Link-Dsc7KtyT.js";import{I as N}from"./Image-BdGhIV8F.js";const le="_isitray-wrapper_1670t_5",me="_is-hidden_1670t_15",ue="_less-button_1670t_19",ce="_more-button_1670t_20",de="_initial_1670t_25",pe="_minimized_1670t_28",ye="_expanded_1670t_42",fe="_header-wrapper_1670t_57",ge="_isi-content-container_1670t_62",Ie="_two-third_1670t_66",Te="_isi-second-header_1670t_66",he="_one-third_1670t_69",ve="_half_1670t_72",qe="_isi-title_1670t_87",be="_isi-header_1670t_91",Ce="_button-actions_1670t_97",Pe="_isi-in-page-body_1670t_111",_e="_in-content-title_1670t_118",xe="_hide-title_1670t_122",Ee="_one-column-only_1670t_128",Ne="_two-column-only_1670t_134",a={"isitray-wrapper":"_isitray-wrapper_1670t_5",isitrayWrapper:le,"is-hidden":"_is-hidden_1670t_15",isHidden:me,"less-button":"_less-button_1670t_19",lessButton:ue,"more-button":"_more-button_1670t_20",moreButton:ce,initial:de,minimized:pe,expanded:ye,"header-wrapper":"_header-wrapper_1670t_57",headerWrapper:fe,"isi-content-container":"_isi-content-container_1670t_62",isiContentContainer:ge,"two-third":"_two-third_1670t_66",twoThird:Ie,"isi-second-header":"_isi-second-header_1670t_66",isiSecondHeader:Te,"one-third":"_one-third_1670t_69",oneThird:he,half:ve,"isi-title":"_isi-title_1670t_87",isiTitle:qe,"isi-header":"_isi-header_1670t_91",isiHeader:be,"button-actions":"_button-actions_1670t_97",buttonActions:Ce,"isi-in-page-body":"_isi-in-page-body_1670t_111",isiInPageBody:Pe,"in-content-title":"_in-content-title_1670t_118",inContentTitle:_e,"hide-title":"_hide-title_1670t_122",hideTitle:xe,"one-column-only":"_one-column-only_1670t_128",oneColumnOnly:Ee,"two-column-only":"_two-column-only_1670t_134",twoColumnOnly:Ne};var c=(t=>(t.ONE_THIRD="one-third",t.TWO_THIRD="two-third",t.HALF="half",t.FULL="full",t))(c||{}),o=(t=>(t.INITIAL="initial",t.MINIMIZED="minimized",t.EXPANDED="expanded",t))(o||{});const k={half:{firstColumn:6,secondColumn:6},"two-third":{firstColumn:8,secondColumn:4},"one-third":{firstColumn:4,secondColumn:8},full:{firstColumn:12}};function j({firstColumnContent:t,secondColumnContent:r,firstColumnHeader:n,secondColumnHeader:f,titleVariant:d=_.TITLE_5,titleAs:p="div",layout:g=c.HALF,footerContent:I,containerProps:y,shouldHideOnDualColumn:u=!1}){const v=P.useRef(null),q=r?g:c.FULL;return e.jsx(J,{ref:v,className:a["isi-content-container"],...y,children:e.jsxs(l.Root,{children:[e.jsxs(l.Item,{lg:k[q].firstColumn,children:[n&&e.jsx(V,{as:p,variant:d,color:Y.CURRENT_COLOR,className:h(a["isi-title"],a["in-content-title"],{[a["hide-title"]]:u}),children:n}),t]}),r&&e.jsxs(l.Item,{lg:k[q].secondColumn,children:[f&&e.jsx(V,{as:p,variant:d,color:Y.CURRENT_COLOR,className:h(a["isi-title"],a["in-content-title"],{[a["hide-title"]]:u}),children:f}),r]}),e.jsx(l.Item,{lg:12,children:I})]})})}try{j.displayName="IsiContent",j.__docgenInfo={description:"ISI Content component",displayName:"IsiContent",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/IsiTray/IsiContent/IsiContent.tsx",methods:[],props:{firstColumnContent:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"Content for the first (or only) column.",name:"firstColumnContent",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!0,tags:{},type:{name:"ReactNode"}},secondColumnContent:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"Content for the second column (when using split layout).",name:"secondColumnContent",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!1,tags:{},type:{name:"ReactNode"}},footerContent:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"Footer content below the columns.",name:"footerContent",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!1,tags:{},type:{name:"ReactNode"}},layout:{defaultValue:{value:"IsiTrayLayout.HALF"},declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"Column layout configuration.",name:"layout",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!1,tags:{default:"IsiTrayLayout.FULL"},type:{name:"enum",raw:'IsiTrayLayout | "one-third" | "two-third" | "half" | "full"',value:[{value:'"one-third"',description:"First column takes 4/12, second takes 8/12",fullComment:"First column takes 4/12, second takes 8/12",tags:{}},{value:'"two-third"',description:"First column takes 8/12, second takes 4/12",fullComment:"First column takes 8/12, second takes 4/12",tags:{}},{value:'"half"',description:"Equal 50/50 split",fullComment:"Equal 50/50 split",tags:{}},{value:'"full"',description:"Single full-width column",fullComment:"Single full-width column",tags:{}},{value:'"one-third"'},{value:'"two-third"'},{value:'"half"'},{value:'"full"'}]}},hideTrayWhenExpanded:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"Hides the tray bar when content is expanded.",name:"hideTrayWhenExpanded",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},brandTheme:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"Override the theme at component level.",name:"brandTheme",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!1,tags:{},type:{name:"enum",raw:'BrandTheme | "primary" | "secondary" | "tertiary"',value:[{value:'"primary"',description:"",fullComment:"",tags:{}},{value:'"secondary"',description:"",fullComment:"",tags:{}},{value:'"tertiary"',description:"",fullComment:"",tags:{}},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},isiContentSelector:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"CSS selector for ISI content (for scroll tracking).",name:"isiContentSelector",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!1,tags:{},type:{name:"string"}},classNames:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"CSS class names for component parts.",name:"classNames",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!1,tags:{},type:{name:"{ isiTrayInPageBody?: string; isiTrayWrapper?: string; isiTrayWrapperExpanded?: string | undefined; } | undefined"}},shouldHideOnDualColumn:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"Hides the tray on screens wide enough for dual column.",name:"shouldHideOnDualColumn",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},titleAs:{defaultValue:{value:"div"},declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:'Element type for title (e.g., "h2", "h3")',name:"titleAs",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"ElementType"}},titleVariant:{defaultValue:{value:"TitleVariant.TITLE_5"},declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Title typography variant",name:"titleVariant",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"enum",raw:'TitleVariant | "title-1" | "title-2" | "title-3" | "title-4" | "title-5"',value:[{value:'"title-1"',description:"Largest heading (32px) - use for page titles",fullComment:"Largest heading (32px) - use for page titles",tags:{}},{value:'"title-2"',description:"Large heading (24px) - use for section titles",fullComment:"Large heading (24px) - use for section titles",tags:{}},{value:'"title-3"',description:"Medium heading (20px) - use for subsections",fullComment:"Medium heading (20px) - use for subsections",tags:{}},{value:'"title-4"',description:"Small heading (18px) - use for card titles",fullComment:"Small heading (18px) - use for card titles",tags:{}},{value:'"title-5"',description:"Smallest heading (16px) - use for minor sections",fullComment:"Smallest heading (16px) - use for minor sections",tags:{}},{value:'"title-1"'},{value:'"title-2"'},{value:'"title-3"'},{value:'"title-4"'},{value:'"title-5"'}]}},containerProps:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Container configuration",name:"containerProps",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"ContainerProps"}},firstColumnHeader:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"First column header content",name:"firstColumnHeader",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!0,tags:{},type:{name:"ReactNode"}},secondColumnHeader:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Second column header content",name:"secondColumnHeader",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"ReactNode"}},mobileHeaderLabel:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Mobile header label override",name:"mobileHeaderLabel",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"ReactNode"}},onClickExpand:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Callback when expand button clicked",name:"onClickExpand",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onClickMinimize:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Callback when minimize button clicked",name:"onClickMinimize",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}},tags:{component:"",param:`firstColumnContent - The content for the first column.
secondColumnContent - The content for the second column.
firstColumnHeader
secondColumnHeader
titleVariant
layout - The layout of the ISI tray.
footerContent - The content for the footer.
containerProps - Additional props for the container.
shouldHideOnDualColumn`,returns:"The rendered ISI Content component."}}}catch{}function B({isiTrayCurrentState:t,setIsiTrayCurrentState:r,titleVariant:n=_.TITLE_5,titleAs:f="div",containerProps:d,mobileHeaderLabel:p,firstColumnHeader:g,secondColumnHeader:I,layoutValue:y,onClickExpand:u,onClickMinimize:v,shouldDisplayMobileHeader:q=!0}){const H=P.useRef(null);return e.jsx("div",{className:a["header-wrapper"],children:e.jsxs(J,{ref:H,className:a["isi-header"],...d,children:[q&&e.jsx(V,{as:f,variant:n,color:Y.CURRENT_COLOR,className:a["isi-title"],children:e.jsx("div",{children:e.jsx(l.Root,{children:e.jsxs(e.Fragment,{children:[e.jsx(l.Item,{className:a["one-column-only"],lg:12,children:p||g}),e.jsx(l.Item,{className:a["two-column-only"],lg:k[y].firstColumn,children:g}),I&&e.jsx(l.Item,{lg:k[y].secondColumn,className:h(a["isi-second-header"],a["two-column-only"]),children:I})]})})})}),e.jsxs("div",{className:a["button-actions"],children:[e.jsx($,{variant:Z.TERTIARY,size:Q.SMALL,icon:X.ADD,"data-testid":"expand-button","aria-label":"Expand",className:h(a["more-button"],{[a.rotate]:t!==o.MINIMIZED&&t!==o.INITIAL}),onClick:b=>{u?.(b),r?.(o.EXPANDED)}}),e.jsx($,{className:h(a["less-button"],{[a.rotate]:t!==o.EXPANDED&&t!==o.INITIAL}),"data-testid":"minimize-button","aria-label":"Minimize",variant:Z.TERTIARY,size:Q.SMALL,icon:X.REMOVE,onClick:b=>{v?.(b),r?.(o.MINIMIZED)}})]})]})})}try{B.displayName="IsiTrayHeader",B.__docgenInfo={description:"ISI Tray Header component",displayName:"IsiTrayHeader",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/IsiTray/IsiTrayHeader/IsiTrayHeader.tsx",methods:[],props:{isiTrayCurrentState:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Current visibility state",name:"isiTrayCurrentState",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!0,tags:{},type:{name:"enum",raw:"IsiTrayState",value:[{value:'"initial"',description:"Initial/default state",fullComment:"Initial/default state",tags:{}},{value:'"minimized"',description:"Collapsed to minimal view",fullComment:"Collapsed to minimal view",tags:{}},{value:'"expanded"',description:"Fully expanded view",fullComment:"Fully expanded view",tags:{}}]}},setIsiTrayCurrentState:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"State setter function",name:"setIsiTrayCurrentState",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"((state: IsiTrayState) => void)"}},titleAs:{defaultValue:{value:"div"},declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:'Element type for title (e.g., "h2", "h3")',name:"titleAs",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"ElementType"}},titleVariant:{defaultValue:{value:"TitleVariant.TITLE_5"},declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Title typography variant",name:"titleVariant",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"enum",raw:'TitleVariant | "title-1" | "title-2" | "title-3" | "title-4" | "title-5"',value:[{value:'"title-1"',description:"Largest heading (32px) - use for page titles",fullComment:"Largest heading (32px) - use for page titles",tags:{}},{value:'"title-2"',description:"Large heading (24px) - use for section titles",fullComment:"Large heading (24px) - use for section titles",tags:{}},{value:'"title-3"',description:"Medium heading (20px) - use for subsections",fullComment:"Medium heading (20px) - use for subsections",tags:{}},{value:'"title-4"',description:"Small heading (18px) - use for card titles",fullComment:"Small heading (18px) - use for card titles",tags:{}},{value:'"title-5"',description:"Smallest heading (16px) - use for minor sections",fullComment:"Smallest heading (16px) - use for minor sections",tags:{}},{value:'"title-1"'},{value:'"title-2"'},{value:'"title-3"'},{value:'"title-4"'},{value:'"title-5"'}]}},containerProps:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Container configuration",name:"containerProps",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"ContainerProps"}},firstColumnHeader:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"First column header content",name:"firstColumnHeader",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!0,tags:{},type:{name:"ReactNode"}},secondColumnHeader:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Second column header content",name:"secondColumnHeader",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"ReactNode"}},mobileHeaderLabel:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Mobile header label override",name:"mobileHeaderLabel",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"ReactNode"}},layoutValue:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Current layout configuration",name:"layoutValue",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!0,tags:{},type:{name:"enum",raw:'IsiTrayLayout | "one-third" | "two-third" | "half" | "full"',value:[{value:'"one-third"',description:"First column takes 4/12, second takes 8/12",fullComment:"First column takes 4/12, second takes 8/12",tags:{}},{value:'"two-third"',description:"First column takes 8/12, second takes 4/12",fullComment:"First column takes 8/12, second takes 4/12",tags:{}},{value:'"half"',description:"Equal 50/50 split",fullComment:"Equal 50/50 split",tags:{}},{value:'"full"',description:"Single full-width column",fullComment:"Single full-width column",tags:{}},{value:'"one-third"'},{value:'"two-third"'},{value:'"half"'},{value:'"full"'}]}},onClickExpand:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Callback when expand button clicked",name:"onClickExpand",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onClickMinimize:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Callback when minimize button clicked",name:"onClickMinimize",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},shouldDisplayMobileHeader:{defaultValue:{value:"true"},declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Whether to show mobile-specific header",name:"shouldDisplayMobileHeader",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"boolean"}}},tags:{component:"",param:`isiTrayCurrentState - The current state of the ISI tray.
setIsiTrayCurrentState - Function to set the state of the ISI tray.
titleVariant - The variant of the title.
containerProps - Additional props for the container.
mobileHeaderLabel - The header label for mobile view.
firstColumnHeader - The header for the first column.
secondColumnHeader - The header for the second column.
layoutValue - The layout value for the ISI tray.
onClickExpand - Callback function when the expand button is clicked.
onClickMinimize - Callback function when the minimize button is clicked.
shouldDisplayMobileHeader`,returns:"The rendered ISI Tray Header component."}}}catch{}const Me=t=>{if(!O)return null;try{const n=new RegExp("(^| )"+t+"=([^;]+)").exec(document.cookie);return n?decodeURIComponent(n[2]):null}catch{return null}},Se=(t,r)=>{if(O)try{const n=new Date;n.setDate(n.getDate()+7),document.cookie=`${t}=${encodeURIComponent(r)};expires=${n.toUTCString()};path=/;HttpOnly;SameSite=Strict;Secure`}catch{}};function x({firstColumnHeader:t,secondColumnHeader:r,mobileHeaderLabel:n,firstColumnContent:f,secondColumnContent:d,layout:p=c.HALF,titleVariant:g,titleAs:I,brandTheme:y=R.primary,isiContentSelector:u,footerContent:v,containerProps:q,hideTrayWhenExpanded:H=!1,onClickExpand:b,onClickMinimize:z,classNames:U}){const{brandSecondaryClassName:K,brandTertiaryClassName:ee}=se(y),te=re(),W=["xs","sm","md"].includes(te),L={xl:"fixed",...q},[m,w]=P.useState(o.INITIAL);F(()=>{try{const T=Me("isiTrayState");if(T){const E=JSON.parse(T);Object.values(o).includes(E)&&w(E)}}catch{}},[]),P.useEffect(()=>{if(m!==o.INITIAL)try{Se("isiTrayState",JSON.stringify(m))}catch{}},[m]);const[C,ae]=P.useState(null),[G,ie]=P.useState(!1),A=d?p:c.FULL;return F(()=>{if(!O||!C)return;const T=new IntersectionObserver(([E])=>{m===o.EXPANDED&&!H||(E.isIntersecting&&w(o.MINIMIZED),ie(E.isIntersecting))},{threshold:m===o.INITIAL?.15:0});return T.observe(C),()=>{T.unobserve(C)}},[H,C,m]),F(()=>{!O||!u||ae(document.querySelector(u))},[u]),e.jsxs("div",{"data-isi-tray":G?void 0:"",className:h(a["isitray-wrapper"],a[A],a[m],{[a["is-hidden"]]:G,[K]:y===R.secondary,[ee]:y===R.tertiary},U?.isiTrayWrapper,m===o.EXPANDED?U?.isiTrayWrapperExpanded:void 0),children:[e.jsx(B,{isiTrayCurrentState:m,setIsiTrayCurrentState:w,titleVariant:g,titleAs:I,containerProps:L,mobileHeaderLabel:n,firstColumnHeader:t,secondColumnHeader:r,layoutValue:A,onClickExpand:b,onClickMinimize:z}),e.jsx(j,{firstColumnContent:f,secondColumnContent:d,firstColumnHeader:W&&!n?"":t,secondColumnHeader:r,mobileHeaderLabel:W&&!n&&t?t:n,layout:p,footerContent:v,containerProps:L,shouldHideOnDualColumn:!0}),u&&C!==null&&ne.createPortal(e.jsxs("div",{className:h(a["isi-in-page-body"],a["isi-content-container"],U?.isiTrayInPageBody),children:[e.jsx(B,{isiTrayCurrentState:m,setIsiTrayCurrentState:w,titleAs:I,titleVariant:g,containerProps:L,mobileHeaderLabel:n,firstColumnHeader:t,secondColumnHeader:r,layoutValue:A,onClickExpand:b,onClickMinimize:z,shouldDisplayMobileHeader:!1}),e.jsx(j,{firstColumnContent:f,secondColumnContent:d,firstColumnHeader:t,secondColumnHeader:r,layout:p,footerContent:v,containerProps:L})]}),C)]})}try{x.displayName="IsiTray",x.__docgenInfo={description:"ISI Tray component",displayName:"IsiTray",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/IsiTray/IsiTray.tsx",methods:[],props:{firstColumnContent:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"Content for the first (or only) column.",name:"firstColumnContent",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!0,tags:{},type:{name:"ReactNode"}},secondColumnContent:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"Content for the second column (when using split layout).",name:"secondColumnContent",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!1,tags:{},type:{name:"ReactNode"}},footerContent:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"Footer content below the columns.",name:"footerContent",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!1,tags:{},type:{name:"ReactNode"}},layout:{defaultValue:{value:"IsiTrayLayout.HALF"},declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"Column layout configuration.",name:"layout",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!1,tags:{default:"IsiTrayLayout.FULL"},type:{name:"enum",raw:'IsiTrayLayout | "one-third" | "two-third" | "half" | "full"',value:[{value:'"one-third"',description:"First column takes 4/12, second takes 8/12",fullComment:"First column takes 4/12, second takes 8/12",tags:{}},{value:'"two-third"',description:"First column takes 8/12, second takes 4/12",fullComment:"First column takes 8/12, second takes 4/12",tags:{}},{value:'"half"',description:"Equal 50/50 split",fullComment:"Equal 50/50 split",tags:{}},{value:'"full"',description:"Single full-width column",fullComment:"Single full-width column",tags:{}},{value:'"one-third"'},{value:'"two-third"'},{value:'"half"'},{value:'"full"'}]}},hideTrayWhenExpanded:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"Hides the tray bar when content is expanded.",name:"hideTrayWhenExpanded",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},brandTheme:{defaultValue:{value:"BrandTheme.primary"},declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"Override the theme at component level.",name:"brandTheme",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!1,tags:{},type:{name:"enum",raw:'BrandTheme | "primary" | "secondary" | "tertiary"',value:[{value:'"primary"',description:"",fullComment:"",tags:{}},{value:'"secondary"',description:"",fullComment:"",tags:{}},{value:'"tertiary"',description:"",fullComment:"",tags:{}},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},isiContentSelector:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"CSS selector for ISI content (for scroll tracking).",name:"isiContentSelector",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!1,tags:{},type:{name:"string"}},classNames:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"CSS class names for component parts.",name:"classNames",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!1,tags:{},type:{name:"{ isiTrayInPageBody?: string; isiTrayWrapper?: string; isiTrayWrapperExpanded?: string | undefined; } | undefined"}},shouldHideOnDualColumn:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"}],description:"Hides the tray on screens wide enough for dual column.",name:"shouldHideOnDualColumn",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},titleAs:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:'Element type for title (e.g., "h2", "h3")',name:"titleAs",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"ElementType"}},titleVariant:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Title typography variant",name:"titleVariant",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"enum",raw:'TitleVariant | "title-1" | "title-2" | "title-3" | "title-4" | "title-5"',value:[{value:'"title-1"',description:"Largest heading (32px) - use for page titles",fullComment:"Largest heading (32px) - use for page titles",tags:{}},{value:'"title-2"',description:"Large heading (24px) - use for section titles",fullComment:"Large heading (24px) - use for section titles",tags:{}},{value:'"title-3"',description:"Medium heading (20px) - use for subsections",fullComment:"Medium heading (20px) - use for subsections",tags:{}},{value:'"title-4"',description:"Small heading (18px) - use for card titles",fullComment:"Small heading (18px) - use for card titles",tags:{}},{value:'"title-5"',description:"Smallest heading (16px) - use for minor sections",fullComment:"Smallest heading (16px) - use for minor sections",tags:{}},{value:'"title-1"'},{value:'"title-2"'},{value:'"title-3"'},{value:'"title-4"'},{value:'"title-5"'}]}},containerProps:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Container configuration",name:"containerProps",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"ContainerProps"}},firstColumnHeader:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"First column header content",name:"firstColumnHeader",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!0,tags:{},type:{name:"ReactNode"}},secondColumnHeader:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Second column header content",name:"secondColumnHeader",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"ReactNode"}},mobileHeaderLabel:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Mobile header label override",name:"mobileHeaderLabel",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"ReactNode"}},onClickExpand:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Callback when expand button clicked",name:"onClickExpand",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onClickMinimize:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"}],description:"Callback when minimize button clicked",name:"onClickMinimize",parent:{fileName:"elements-design-system/src/components/IsiTray/IsiTrayProps.ts",name:"IsiTrayHeaderProps"},required:!1,tags:{},type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}},tags:{component:"",param:`firstColumnHeader - The first column header label.
secondColumnHeader - The second column header label.
mobileHeaderLabel - The header label for mobile view.
firstColumnContent - The content for the first column.
secondColumnContent - The content for the second column.
layout - The layout of the ISI tray.
titleVariant - The variant of the title.
brandTheme - The brand theme.
isiContentSelector - The CSS selector for the ISI content element.
footerContent - The content for the footer.
containerProps - The props for the container.
hideTrayWhenExpanded - Whether to hide the tray when expanded.
onClickExpand - Callback function when the expand button is clicked.
onClickMinimize - Callback function when the minimize button is clicked.
classNames - The class names for the ISI tray.`,returns:"The rendered ISI Tray component."}}}catch{}const De={title:"Components/ISI Tray",component:x,argTypes:{layout:{options:Object.values(c),control:{type:"select"},description:"layout"}}},M={args:{titleVariant:_.TITLE_5,layout:c.FULL,containerProps:{xl:"fixed"},firstColumnHeader:"Important Safety Informations",firstColumnContent:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:s.BODY_MEDIUM,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, repellat asperiores dicta laboriosam placeat odit quisquam atque doloribus corrupti suscipit officia minima ut assumenda mollitia tempore pariatur vitae numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, repellat asperiores dicta laboriosam placeat odit quisquam atque doloribus corrupti suscipit officia minima ut assumenda mollitia tempore pariatur vitae numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, repellat asperiores dicta laboriosam placeat odit quisquam atque doloribus corrupti suscipit officia minima ut assumenda mollitia tempore pariatur vitae numquam."}),e.jsx(i,{variant:s.BODY_MEDIUM,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, repellat asperiores dicta laboriosam placeat odit quisquam atque doloribus corrupti suscipit officia minima ut assumenda mollitia tempore pariatur vitae numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, repellat asperiores dicta laboriosam placeat odit quisquam atque doloribus corrupti suscipit officia minima ut assumenda mollitia tempore pariatur vitae numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, repellat asperiores dicta laboriosam placeat odit quisquam atque doloribus corrupti suscipit officia minima ut assumenda mollitia tempore pariatur vitae numquam."})]})},render:t=>e.jsx(x,{...t})},S={args:{titleVariant:_.TITLE_5,layout:c.HALF,containerProps:{xl:"fixed"},firstColumnHeader:"Important Safety Informations",secondColumnHeader:"Indication",mobileHeaderLabel:"Important Safety Informations and Indication",footerContent:e.jsx(l.Root,{children:e.jsxs(l.Item,{lg:12,children:[e.jsx(i,{variant:s.BODY_MEDIUM,children:"FOOTER CONTENT"}),e.jsx(i,{variant:s.BODY_MEDIUM,children:"Lorem ipsum dolor sit amet consectetur. Tempus nunc faucibus cursus faucibus quam nam. Dolor habitasse morbi sit odio consequat arcu. Lectus ullamcorper scelerisque consectetur nam porttitor auctor diam. Amet eget vitae libero volutpat commodo gravida faucibus id sed."})]})}),firstColumnContent:e.jsx(i,{variant:s.BODY_MEDIUM,children:"Lorem ipsum dolor sit amet consectetur. Tempus nunc faucibus cursus faucibus quam nam. Dolor habitasse morbi sit odio consequat arcu. Lectus ullamcorper scelerisque consectetur nam porttitor auctor diam. Amet eget vitae libero volutpat commodo gravida faucibus id sed."}),secondColumnContent:e.jsxs(e.Fragment,{children:[e.jsx(i,{as:"p",variant:s.BODY_MEDIUM,children:"Lorem ipsum dolor sit amet consectetur. Blandit cursus feugiat consectetur egestas massa sed nunc. Ullamcorper ultrices facilisi odio ultrices in enim arcu. Elit tempus et dapibus velit viverra et. Sed amet morbi lobortis aliquet risus id malesuada mattis volutpat. Enim adipiscing nisl quam leo nam tincidunt feugiat. Eget in et ac fringilla. Quis nec amet morbi netus aliquam a et. Ultricies quis blandit nullam duis libero ut tristique dolor vitae."}),e.jsx(i,{variant:s.BODY_MEDIUM,children:"Posuere sed turpis a scelerisque scelerisque. Consectetur eget mattis magna scelerisque vitae. Scelerisque arcu magna nec tortor fringilla egestas. Eget quis duis placerat donec quam amet sit mus leo. Imperdiet dolor viverra pellentesque diam nunc elit viverra magna sed. Nec pellentesque est morbi commodo metus in."}),e.jsx(i,{variant:s.BODY_MEDIUM,children:"Condimentum quis tellus est maecenas id non. Fringilla ut id sit mattis pellentesque varius. Massa bibendum velit lectus vitae. Lorem id sit at sed amet bibendum id feugiat pellentesque."}),e.jsx(i,{variant:s.BODY_MEDIUM,children:"Euismod feugiat tellus rhoncus viverra placerat congue risus. Sem felis quisque proin viverra. Nunc vitae ut tempor fermentum aenean elementum tellus morbi. Pharetra vulputate elementum amet sit eget euismod sed elit. Pharetra eget quis nunc nam ut eleifend. Tortor id commodo nulla porttitor adipiscing vulputate congue arcu sed. Dui in facilisi consequat eget sapien nisi."})]})},render:t=>e.jsx(x,{...t})},D={args:{titleVariant:_.TITLE_5,layout:c.HALF,containerProps:{xl:"fixed"},firstColumnHeader:"Important Safety Informations",secondColumnHeader:"Indication",mobileHeaderLabel:"Important Safety Informations and Indication",footerContent:e.jsx(l.Root,{children:e.jsxs(l.Item,{lg:12,children:[e.jsx(i,{variant:s.BODY_MEDIUM,children:"FOOTER CONTENT"}),e.jsx(i,{variant:s.BODY_MEDIUM,children:"Lorem ipsum dolor sit amet consectetur. Tempus nunc faucibus cursus faucibus quam nam. Dolor habitasse morbi sit odio consequat arcu. Lectus ullamcorper scelerisque consectetur nam porttitor auctor diam. Amet eget vitae libero volutpat commodo gravida faucibus id sed."})]})}),firstColumnContent:e.jsx(i,{variant:s.BODY_MEDIUM,children:"Lorem ipsum dolor sit amet consectetur. Tempus nunc faucibus cursus faucibus quam nam. Dolor habitasse morbi sit odio consequat arcu. Lectus ullamcorper scelerisque consectetur nam porttitor auctor diam. Amet eget vitae libero volutpat commodo gravida faucibus id sed."}),secondColumnContent:e.jsxs(e.Fragment,{children:[e.jsx(i,{as:"p",variant:s.BODY_MEDIUM,children:"Lorem ipsum dolor sit amet consectetur. Blandit cursus feugiat consectetur egestas massa sed nunc. Ullamcorper ultrices facilisi odio ultrices in enim arcu. Elit tempus et dapibus velit viverra et. Sed amet morbi lobortis aliquet risus id malesuada mattis volutpat. Enim adipiscing nisl quam leo nam tincidunt feugiat. Eget in et ac fringilla. Quis nec amet morbi netus aliquam a et. Ultricies quis blandit nullam duis libero ut tristique dolor vitae."}),e.jsx(i,{variant:s.BODY_MEDIUM,children:"Posuere sed turpis a scelerisque scelerisque. Consectetur eget mattis magna scelerisque vitae. Scelerisque arcu magna nec tortor fringilla egestas. Eget quis duis placerat donec quam amet sit mus leo. Imperdiet dolor viverra pellentesque diam nunc elit viverra magna sed. Nec pellentesque est morbi commodo metus in."}),e.jsx(i,{variant:s.BODY_MEDIUM,children:"Condimentum quis tellus est maecenas id non. Fringilla ut id sit mattis pellentesque varius. Massa bibendum velit lectus vitae. Lorem id sit at sed amet bibendum id feugiat pellentesque."}),e.jsx(i,{variant:s.BODY_MEDIUM,children:"Euismod feugiat tellus rhoncus viverra placerat congue risus. Sem felis quisque proin viverra. Nunc vitae ut tempor fermentum aenean elementum tellus morbi. Pharetra vulputate elementum amet sit eget euismod sed elit. Pharetra eget quis nunc nam ut eleifend. Tortor id commodo nulla porttitor adipiscing vulputate congue arcu sed. Dui in facilisi consequat eget sapien nisi."})]})},render:t=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",justifyContent:"center",alignItems:"center"},children:[e.jsx(V,{variant:_.TITLE_1,children:"ISI Content in page"}),e.jsxs(i,{variant:s.BODY_MEDIUM,children:["If you want to have somewhere in your page the ISI content, you can put a tag with a specific selector (preferably a unique id) that you pass as isiContentSelector prop. This is implemented using"," ",e.jsx(oe,{href:"https://react.dev/reference/react-dom/createPortal",target:"_blank",ariaLabel:"ISI Content in page 6",children:"react portals"}),", so the ISI content will also be rendered in the specified selector. There will also be an intersection observer to hide the ISI tray when the ISI content is visible in the page."]}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(N,{src:"https://placehold.co/300",alt:"ISI Content in page 4",width:300}),e.jsx(N,{src:"https://placehold.co/300",alt:"ISI Content in pag 5",width:300})]}),e.jsx(i,{variant:s.BODY_MEDIUM,children:"Altera sententia est, quae definit amicitiam paribus officiis ac voluntatibus. Hoc quidem est nimis exigue et exiliter ad calculos vocare amicitiam, ut par sit ratio acceptorum et datorum. Divitior mihi et affluentior videtur esse vera amicitia nec observare restricte, ne plus reddat quam acceperit; neque enim verendum est, ne quid excidat, aut ne quid in terram defluat, aut ne plus aequo quid in amicitiam congeratur."}),e.jsx(i,{variant:s.BODY_MEDIUM,children:"Ex his quidam aeternitati se commendari posse per statuas aestimantes eas ardenter adfectant quasi plus praemii de figmentis aereis sensu carentibus adepturi, quam ex conscientia honeste recteque factorum, easque auro curant inbracteari, quod Acilio Glabrioni delatum est primo, cum consiliis armisque regem superasset Antiochum. quam autem sit pulchrum exigua haec spernentem et minima ad ascensus verae gloriae tendere longos et arduos, ut memorat vates Ascraeus, Censorius Cato monstravit. qui interrogatus quam ob rem inter multos... statuam non haberet malo inquit ambigere bonos quam ob rem id non meruerim, quam quod est gravius cur inpetraverim mussitare."}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(N,{src:"https://placehold.co/150",alt:"ISI Content in page 1",width:150}),e.jsx(N,{src:"https://placehold.co/150",alt:"ISI Content in page 2",width:150}),e.jsx(N,{src:"https://placehold.co/150",alt:"ISI Content in page 3",width:150})]}),e.jsx(i,{variant:s.BODY_MEDIUM,children:"Saepissime igitur mihi de amicitia cogitanti maxime illud considerandum videri solet, utrum propter imbecillitatem atque inopiam desiderata sit amicitia, ut dandis recipiendisque meritis quod quisque minus per se ipse posset, id acciperet ab alio vicissimque redderet, an esset hoc quidem proprium amicitiae, sed antiquior et pulchrior et magis a natura ipsa profecta alia causa. Amor enim, ex quo amicitia nominata est, princeps est ad benevolentiam coniungendam. Nam utilitates quidem etiam ab iis percipiuntur saepe qui simulatione amicitiae coluntur et observantur temporis causa, in amicitia autem nihil fictum est, nihil simulatum et, quidquid est, id est verum et voluntarium."}),e.jsx(i,{variant:s.BODY_MEDIUM,children:"magis igitur mihi de amicitia cogitanti maxime illud considerandum videri solet, utrum propter imbecillitatem atque inopiam desiderata sit amicitia, ut dandis recipiendisque meritis quod quisque minus per se ipse posset, id acciperet ab alio vicissimque redderet, an esset hoc quidem proprium amicitiae, sed antiquior et pulchrior et magis a natura ipsa profecta alia causa. Amor enim, ex quo amicitia nominata est."})]}),e.jsx("div",{id:"isi-content"}),e.jsx(x,{...t,isiContentSelector:"#isi-content"})]})};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    titleVariant: TitleVariant.TITLE_5,
    layout: IsiTrayLayout.FULL,
    containerProps: {
      xl: "fixed"
    },
    firstColumnHeader: "Important Safety Informations",
    firstColumnContent: <>
        <Typography variant={TypographyVariant.BODY_MEDIUM}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          ipsa, repellat asperiores dicta laboriosam placeat odit quisquam atque
          doloribus corrupti suscipit officia minima ut assumenda mollitia
          tempore pariatur vitae numquam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Eligendi ipsa, repellat asperiores dicta
          laboriosam placeat odit quisquam atque doloribus corrupti suscipit
          officia minima ut assumenda mollitia tempore pariatur vitae numquam.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          ipsa, repellat asperiores dicta laboriosam placeat odit quisquam atque
          doloribus corrupti suscipit officia minima ut assumenda mollitia
          tempore pariatur vitae numquam.
        </Typography>
        <Typography variant={TypographyVariant.BODY_MEDIUM}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          ipsa, repellat asperiores dicta laboriosam placeat odit quisquam atque
          doloribus corrupti suscipit officia minima ut assumenda mollitia
          tempore pariatur vitae numquam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Eligendi ipsa, repellat asperiores dicta
          laboriosam placeat odit quisquam atque doloribus corrupti suscipit
          officia minima ut assumenda mollitia tempore pariatur vitae numquam.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          ipsa, repellat asperiores dicta laboriosam placeat odit quisquam atque
          doloribus corrupti suscipit officia minima ut assumenda mollitia
          tempore pariatur vitae numquam.
        </Typography>
      </>
  },
  render: args => {
    return <IsiTray {...args} />;
  }
}`,...M.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    titleVariant: TitleVariant.TITLE_5,
    layout: IsiTrayLayout.HALF,
    containerProps: {
      xl: "fixed"
    },
    firstColumnHeader: "Important Safety Informations",
    secondColumnHeader: "Indication",
    mobileHeaderLabel: "Important Safety Informations and Indication",
    footerContent: <Grid.Root>
        <Grid.Item lg={12}>
          <Typography variant={TypographyVariant.BODY_MEDIUM}>
            FOOTER CONTENT
          </Typography>
          <Typography variant={TypographyVariant.BODY_MEDIUM}>
            Lorem ipsum dolor sit amet consectetur. Tempus nunc faucibus cursus
            faucibus quam nam. Dolor habitasse morbi sit odio consequat arcu.
            Lectus ullamcorper scelerisque consectetur nam porttitor auctor
            diam. Amet eget vitae libero volutpat commodo gravida faucibus id
            sed.
          </Typography>
        </Grid.Item>
      </Grid.Root>,
    firstColumnContent: <Typography variant={TypographyVariant.BODY_MEDIUM}>
        Lorem ipsum dolor sit amet consectetur. Tempus nunc faucibus cursus
        faucibus quam nam. Dolor habitasse morbi sit odio consequat arcu. Lectus
        ullamcorper scelerisque consectetur nam porttitor auctor diam. Amet eget
        vitae libero volutpat commodo gravida faucibus id sed.
      </Typography>,
    secondColumnContent: <>
        <Typography as="p" variant={TypographyVariant.BODY_MEDIUM}>
          Lorem ipsum dolor sit amet consectetur. Blandit cursus feugiat
          consectetur egestas massa sed nunc. Ullamcorper ultrices facilisi odio
          ultrices in enim arcu. Elit tempus et dapibus velit viverra et. Sed
          amet morbi lobortis aliquet risus id malesuada mattis volutpat. Enim
          adipiscing nisl quam leo nam tincidunt feugiat. Eget in et ac
          fringilla. Quis nec amet morbi netus aliquam a et. Ultricies quis
          blandit nullam duis libero ut tristique dolor vitae.
        </Typography>

        <Typography variant={TypographyVariant.BODY_MEDIUM}>
          Posuere sed turpis a scelerisque scelerisque. Consectetur eget mattis
          magna scelerisque vitae. Scelerisque arcu magna nec tortor fringilla
          egestas. Eget quis duis placerat donec quam amet sit mus leo.
          Imperdiet dolor viverra pellentesque diam nunc elit viverra magna sed.
          Nec pellentesque est morbi commodo metus in.
        </Typography>

        <Typography variant={TypographyVariant.BODY_MEDIUM}>
          Condimentum quis tellus est maecenas id non. Fringilla ut id sit
          mattis pellentesque varius. Massa bibendum velit lectus vitae. Lorem
          id sit at sed amet bibendum id feugiat pellentesque.
        </Typography>

        <Typography variant={TypographyVariant.BODY_MEDIUM}>
          Euismod feugiat tellus rhoncus viverra placerat congue risus. Sem
          felis quisque proin viverra. Nunc vitae ut tempor fermentum aenean
          elementum tellus morbi. Pharetra vulputate elementum amet sit eget
          euismod sed elit. Pharetra eget quis nunc nam ut eleifend. Tortor id
          commodo nulla porttitor adipiscing vulputate congue arcu sed. Dui in
          facilisi consequat eget sapien nisi.
        </Typography>
      </>
  },
  render: args => {
    return <IsiTray {...args} />;
  }
}`,...S.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    titleVariant: TitleVariant.TITLE_5,
    layout: IsiTrayLayout.HALF,
    containerProps: {
      xl: "fixed"
    },
    firstColumnHeader: "Important Safety Informations",
    secondColumnHeader: "Indication",
    mobileHeaderLabel: "Important Safety Informations and Indication",
    footerContent: <Grid.Root>
        <Grid.Item lg={12}>
          <Typography variant={TypographyVariant.BODY_MEDIUM}>
            FOOTER CONTENT
          </Typography>
          <Typography variant={TypographyVariant.BODY_MEDIUM}>
            Lorem ipsum dolor sit amet consectetur. Tempus nunc faucibus cursus
            faucibus quam nam. Dolor habitasse morbi sit odio consequat arcu.
            Lectus ullamcorper scelerisque consectetur nam porttitor auctor
            diam. Amet eget vitae libero volutpat commodo gravida faucibus id
            sed.
          </Typography>
        </Grid.Item>
      </Grid.Root>,
    firstColumnContent: <Typography variant={TypographyVariant.BODY_MEDIUM}>
        Lorem ipsum dolor sit amet consectetur. Tempus nunc faucibus cursus
        faucibus quam nam. Dolor habitasse morbi sit odio consequat arcu. Lectus
        ullamcorper scelerisque consectetur nam porttitor auctor diam. Amet eget
        vitae libero volutpat commodo gravida faucibus id sed.
      </Typography>,
    secondColumnContent: <>
        <Typography as="p" variant={TypographyVariant.BODY_MEDIUM}>
          Lorem ipsum dolor sit amet consectetur. Blandit cursus feugiat
          consectetur egestas massa sed nunc. Ullamcorper ultrices facilisi odio
          ultrices in enim arcu. Elit tempus et dapibus velit viverra et. Sed
          amet morbi lobortis aliquet risus id malesuada mattis volutpat. Enim
          adipiscing nisl quam leo nam tincidunt feugiat. Eget in et ac
          fringilla. Quis nec amet morbi netus aliquam a et. Ultricies quis
          blandit nullam duis libero ut tristique dolor vitae.
        </Typography>

        <Typography variant={TypographyVariant.BODY_MEDIUM}>
          Posuere sed turpis a scelerisque scelerisque. Consectetur eget mattis
          magna scelerisque vitae. Scelerisque arcu magna nec tortor fringilla
          egestas. Eget quis duis placerat donec quam amet sit mus leo.
          Imperdiet dolor viverra pellentesque diam nunc elit viverra magna sed.
          Nec pellentesque est morbi commodo metus in.
        </Typography>

        <Typography variant={TypographyVariant.BODY_MEDIUM}>
          Condimentum quis tellus est maecenas id non. Fringilla ut id sit
          mattis pellentesque varius. Massa bibendum velit lectus vitae. Lorem
          id sit at sed amet bibendum id feugiat pellentesque.
        </Typography>

        <Typography variant={TypographyVariant.BODY_MEDIUM}>
          Euismod feugiat tellus rhoncus viverra placerat congue risus. Sem
          felis quisque proin viverra. Nunc vitae ut tempor fermentum aenean
          elementum tellus morbi. Pharetra vulputate elementum amet sit eget
          euismod sed elit. Pharetra eget quis nunc nam ut eleifend. Tortor id
          commodo nulla porttitor adipiscing vulputate congue arcu sed. Dui in
          facilisi consequat eget sapien nisi.
        </Typography>
      </>
  },
  render: args => {
    return <>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center"
      }}>
          <Title variant={TitleVariant.TITLE_1}>ISI Content in page</Title>
          <Typography variant={TypographyVariant.BODY_MEDIUM}>
            If you want to have somewhere in your page the ISI content, you can
            put a tag with a specific selector (preferably a unique id) that you
            pass as isiContentSelector prop. This is implemented using{" "}
            <Link href="https://react.dev/reference/react-dom/createPortal" target="_blank" ariaLabel="ISI Content in page 6">
              react portals
            </Link>
            , so the ISI content will also be rendered in the specified
            selector. There will also be an intersection observer to hide the
            ISI tray when the ISI content is visible in the page.
          </Typography>

          <div style={{
          display: "flex",
          gap: "1rem"
        }}>
            <Image src="https://placehold.co/300" alt="ISI Content in page 4" width={300} />
            <Image src="https://placehold.co/300" alt="ISI Content in pag 5" width={300} />
          </div>
          <Typography variant={TypographyVariant.BODY_MEDIUM}>
            Altera sententia est, quae definit amicitiam paribus officiis ac
            voluntatibus. Hoc quidem est nimis exigue et exiliter ad calculos
            vocare amicitiam, ut par sit ratio acceptorum et datorum. Divitior
            mihi et affluentior videtur esse vera amicitia nec observare
            restricte, ne plus reddat quam acceperit; neque enim verendum est,
            ne quid excidat, aut ne quid in terram defluat, aut ne plus aequo
            quid in amicitiam congeratur.
          </Typography>
          <Typography variant={TypographyVariant.BODY_MEDIUM}>
            Ex his quidam aeternitati se commendari posse per statuas
            aestimantes eas ardenter adfectant quasi plus praemii de figmentis
            aereis sensu carentibus adepturi, quam ex conscientia honeste
            recteque factorum, easque auro curant inbracteari, quod Acilio
            Glabrioni delatum est primo, cum consiliis armisque regem superasset
            Antiochum. quam autem sit pulchrum exigua haec spernentem et minima
            ad ascensus verae gloriae tendere longos et arduos, ut memorat vates
            Ascraeus, Censorius Cato monstravit. qui interrogatus quam ob rem
            inter multos... statuam non haberet malo inquit ambigere bonos quam
            ob rem id non meruerim, quam quod est gravius cur inpetraverim
            mussitare.
          </Typography>

          <div style={{
          display: "flex",
          gap: "1rem"
        }}>
            <Image src="https://placehold.co/150" alt="ISI Content in page 1" width={150} />
            <Image src="https://placehold.co/150" alt="ISI Content in page 2" width={150} />
            <Image src="https://placehold.co/150" alt="ISI Content in page 3" width={150} />
          </div>
          <Typography variant={TypographyVariant.BODY_MEDIUM}>
            Saepissime igitur mihi de amicitia cogitanti maxime illud
            considerandum videri solet, utrum propter imbecillitatem atque
            inopiam desiderata sit amicitia, ut dandis recipiendisque meritis
            quod quisque minus per se ipse posset, id acciperet ab alio
            vicissimque redderet, an esset hoc quidem proprium amicitiae, sed
            antiquior et pulchrior et magis a natura ipsa profecta alia causa.
            Amor enim, ex quo amicitia nominata est, princeps est ad
            benevolentiam coniungendam. Nam utilitates quidem etiam ab iis
            percipiuntur saepe qui simulatione amicitiae coluntur et observantur
            temporis causa, in amicitia autem nihil fictum est, nihil simulatum
            et, quidquid est, id est verum et voluntarium.
          </Typography>
          <Typography variant={TypographyVariant.BODY_MEDIUM}>
            magis igitur mihi de amicitia cogitanti maxime illud considerandum
            videri solet, utrum propter imbecillitatem atque inopiam desiderata
            sit amicitia, ut dandis recipiendisque meritis quod quisque minus
            per se ipse posset, id acciperet ab alio vicissimque redderet, an
            esset hoc quidem proprium amicitiae, sed antiquior et pulchrior et
            magis a natura ipsa profecta alia causa. Amor enim, ex quo amicitia
            nominata est.
          </Typography>
        </div>
        <div id="isi-content"></div>
        <IsiTray {...args} isiContentSelector="#isi-content" />
      </>;
  }
}`,...D.parameters?.docs?.source}}};const He=["ISI","ISIWithIndication","ISIWithContentAndIndication"],Re=Object.freeze(Object.defineProperty({__proto__:null,ISI:M,ISIWithContentAndIndication:D,ISIWithIndication:S,__namedExportsOrder:He,default:De},Symbol.toStringTag,{value:"Module"}));export{Re as I,S as a};

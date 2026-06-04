import{r as u,j as e,i as v,p as x,o as h,D as z,s as H,g as G,v as $,k as J,e as L,I as E,af as X,h as R,f as b,l as A,d as Z,H as D,n as Q,m as ee}from"./iframe-DU6-gHk6.js";import{B as te}from"./ButtonIcon-B-F3gh4N.js";import{O as ne}from"./Overlay-C2Z8O02g.js";import{a as oe}from"./Select-CQJ-nqhp.js";import{a as ie,F as se}from"./InputLabel-Bnixl784.js";import{D as ae}from"./DatePicker-CqEp3DeW.js";import{V as le}from"./VideoThumbnail-C7D-C2LV.js";import{c as de}from"./create-toast-Bk21w6Tb.js";const s={"elements-modal-container":"_elements-modal-container_15g1q_1","is-visible":"_is-visible_15g1q_10","modal-close-button":"_modal-close-button_15g1q_14","no-animation":"_no-animation_15g1q_18","modal-footer":"_modal-footer_15g1q_24","modal-header":"_modal-header_15g1q_30","elements-modal-wrapper":"_elements-modal-wrapper_15g1q_41","modal-header-wrapper":"_modal-header-wrapper_15g1q_101","modal-header-title-grid":"_modal-header-title-grid_15g1q_116","modal-header-title-grid--with-icon":"_modal-header-title-grid--with-icon_15g1q_121","modal-header-icon":"_modal-header-icon_15g1q_125","modal-header-title-in-grid":"_modal-header-title-in-grid_15g1q_130","modal-header-subtitle":"_modal-header-subtitle_15g1q_135","modal-content-container":"_modal-content-container_15g1q_159","modal-content":"_modal-content_15g1q_159","modal-text-content":"_modal-text-content_15g1q_169","modal-title-placeholder":"_modal-title-placeholder_15g1q_185","modal-footer-placeholder":"_modal-footer-placeholder_15g1q_189"},ce=u.forwardRef(({textContent:t,slotContent:n,customHeight:o,className:i,...l},c)=>e.jsx("div",{className:h(s["modal-content-container"],i),...o&&{style:{height:o}},...l,ref:c,children:e.jsxs("div",{className:s["modal-content"],children:[t&&e.jsx("div",{className:s["modal-text-content"],children:e.jsx(v,{variant:x.BODY_MEDIUM,children:t})}),n&&e.jsx("div",{className:s["modal-slot-content"],children:n})]})})),re=u.forwardRef(({footerContent:t,className:n,classNameContent:o},i)=>t?e.jsxs("div",{ref:i,className:n,children:[e.jsx(z,{variant:H.SUBTLE}),e.jsx("div",{className:h(s["modal-footer"],o),children:t})]}):e.jsx("div",{className:s["modal-footer-placeholder"]})),me=u.forwardRef(({title:t,subtitle:n,icon:o,isClosable:i,onClose:l,className:c,classNameContent:g},a)=>t||o||i?e.jsxs("div",{ref:a,className:h(s["modal-header-wrapper"],c),children:[e.jsx("div",{className:s["modal-header"],children:e.jsxs("div",{className:h(s["modal-header-title-grid"],{[s["modal-header-title-grid--with-icon"]]:!!o}),children:[o&&e.jsx("span",{className:s["modal-header-icon"],children:o}),t?e.jsx(G,{variant:$.TITLE_5,className:h(g,s["modal-header-title-in-grid"]),children:t}):e.jsx("div",{className:s["modal-title-placeholder"]}),t&&n&&e.jsx(v,{variant:x.EYEBROW_MEDIUM,color:J.SUBTLE,className:s["modal-header-subtitle"],children:n})]})}),i&&e.jsx("div",{className:s["modal-close-button"],children:e.jsx(te,{"data-testid":"close-button",icon:E.CLOSE,"aria-label":"Close modal",variant:L.TERTIARY,onClick:l})})]}):e.jsx("div",{ref:a,className:h(s["modal-header-wrapper"],c)})),be=(t,n)=>{u.useEffect(()=>{if(!n||!t.current)return;const o=t.current,i=document.activeElement,l=()=>{const a=['a[href]:not([disabled]):not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','input:not([disabled]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])'];return Array.from(o.querySelectorAll(a.join(","))).filter(d=>{const r=globalThis.window.getComputedStyle(d);return r.display!=="none"&&r.visibility!=="hidden"&&!d.hasAttribute("hidden")})},c=l();c.length>0&&setTimeout(()=>{c[0]?.focus()},0);const g=a=>{if(a.key!=="Tab")return;const d=l();if(d.length===0){a.preventDefault();return}const r=d[0],y=d[d.length-1],f=document.activeElement;if(a.shiftKey&&f===r){a.preventDefault(),y.focus();return}!a.shiftKey&&f===y&&(a.preventDefault(),r.focus())};return document.addEventListener("keydown",g),()=>{document.removeEventListener("keydown",g),i&&typeof i.focus=="function"&&i.focus()}},[t,n])},T=({isVisible:t,title:n,subtitle:o,icon:i,textContent:l,slotContent:c,footerContent:g,onClose:a,isClosable:d=!0,hasOverlay:r=!0,size:y,brandTheme:f=R.primary,disableAnimation:P=!1,classNames:p,...B})=>{const{brandSecondaryClassName:Y,brandTertiaryClassName:F}=X(f),V=u.useRef(null),q=u.useRef(null),U=u.useRef(null);be(V,t??!1),u.useEffect(()=>{if(!t)return;const m=W=>{W.key==="Escape"&&(W.preventDefault(),d&&a?.())};return document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m)}},[t,d,a]),u.useEffect(()=>{const m=document.body.style.overflow;return t?(document.body.style.overflow="hidden",V.current?.show()):(document.body.style.overflow=m,V.current?.close()),()=>{document.body.style.overflow=m}},[t]);const K=(q.current?.offsetHeight||0)+(U.current?.offsetHeight||0);return e.jsxs("div",{className:h(s["elements-modal-container"],{[s["is-visible"]]:t,[s["no-animation"]]:P}),children:[e.jsxs("dialog",{...B,ref:V,className:h(s["elements-modal-wrapper"],{[Y]:f===R.secondary,[F]:f===R.tertiary,[s["no-animation"]]:P,[s["is-visible"]]:t},p?.container,B.className),style:{...y?{width:y.width}:{},...B.style},onClick:m=>{m.currentTarget===m.target&&d&&a?.(),B.onClick?.(m)},children:[e.jsx("div",{ref:q,children:e.jsx(me,{title:n,subtitle:o,icon:i,isClosable:d,onClose:a,className:p?.header,classNameContent:p?.headerContent})}),e.jsx(ce,{textContent:l,slotContent:c,style:{"--height-footer-header":`${K}px`},customHeight:y?.height,className:p?.content}),e.jsx(re,{footerContent:g,ref:U,className:p?.footer,classNameContent:p?.footerContent})]}),r&&e.jsx(ne,{isOpen:t,onClick:m=>{m.currentTarget===m.target&&d&&a?.()},className:p?.overlay,"data-testid":"overlay"})]})};try{T.displayName="Modal",T.__docgenInfo={description:"Modal component",displayName:"Modal",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/Modal/Modal.tsx",methods:[],props:{disableAnimation:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"},{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"}],description:"Disables open/close animations.",name:"disableAnimation",required:!1,tags:{default:"false"},type:{name:"boolean"}},isVisible:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"},{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"}],description:"Controls the visibility of the modal.",name:"isVisible",required:!1,tags:{default:"false"},type:{name:"boolean"}},title:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"},{fileName:"elements-design-system/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"},{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"},{fileName:"elements-design-system/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],description:"Title text displayed in the modal header.",name:"title",required:!1,tags:{},type:{name:"string"}},subtitle:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"},{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"}],description:"Subtitle text displayed below the title.",name:"subtitle",required:!1,tags:{},type:{name:"string"}},icon:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"},{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"}],description:`Icon displayed before the title in the modal header.
Pass an Icon component for full control over styling.`,name:"icon",required:!1,tags:{example:"```tsx\nicon={<Icon name={IconName.INFO} />}\nicon={<Icon name={IconName.WARNING} size={2} filled={false} style={{ color: 'var(--elements-color-semantic-text-error)' }} />}\n```"},type:{name:"ReactNode"}},slotContent:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"},{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"}],description:"Custom React content for the modal body.\nUse for complex content (forms, lists, etc.).\nTakes precedence over `textContent`.",name:"slotContent",required:!1,tags:{},type:{name:"ReactNode"}},footerContent:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"},{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"}],description:`Custom React content for the modal footer.
Typically contains action buttons.`,name:"footerContent",required:!1,tags:{},type:{name:"ReactNode"}},textContent:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"},{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"}],description:"Simple text content for the modal body.\nUse `slotContent` for complex content.",name:"textContent",required:!1,tags:{},type:{name:"string"}},hasOverlay:{defaultValue:{value:"true"},declarations:[{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"},{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"}],description:"Shows a semi-transparent overlay behind the modal.",name:"hasOverlay",required:!1,tags:{default:"true"},type:{name:"boolean"}},brandTheme:{defaultValue:{value:"BrandTheme.primary"},declarations:[{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"},{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"}],description:"Override the theme at component level.",name:"brandTheme",required:!1,tags:{},type:{name:"enum",raw:'BrandTheme | "primary" | "secondary" | "tertiary"',value:[{value:'"primary"',description:"",fullComment:"",tags:{}},{value:'"secondary"',description:"",fullComment:"",tags:{}},{value:'"tertiary"',description:"",fullComment:"",tags:{}},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},size:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"},{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"}],description:"Custom dimensions for the modal.",name:"size",required:!1,tags:{example:'{ width: "600px", height: "auto" }'},type:{name:"{ height?: string; width?: string; } | undefined"}},classNames:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"},{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"}],description:`Custom CSS classes for modal sections.
Allows styling individual parts of the modal.`,name:"classNames",required:!1,tags:{},type:{name:"{ container?: string; header?: string; headerContent?: string | undefined; content?: string | undefined; footer?: string | undefined; footerContent?: string | undefined; overlay?: string | undefined; } | undefined"}},isClosable:{defaultValue:{value:"true"},declarations:[{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"},{fileName:"elements-design-system/src/components/Modal/ModalProps.ts",name:"TypeLiteral"}],description:"When true (default), shows close button and requires `onClose`.\nWhen false, hides close button and makes `onClose` optional.",name:"isClosable",required:!1,tags:{default:"true"},type:{name:"boolean"}}},tags:{param:`isVisible - Modal visibility
title - Modal title
subtitle - Modal subtitle
icon - Icon displayed before the title
textContent - Modal text content
slotContent - Modal slot content
footerContent - Modal footer content
onClose - On close callback
isClosable - Modal closable
hasOverlay - Modal overlay
size - Modal size
brandTheme - Modal brand theme
classNames - Modal class names
disableAnimation - Modal disable animation
...rest - Other props`}}}catch{}const I={"story-button-row":"_story-button-row_1bgwh_1","container-test":"_container-test_1bgwh_7","header-test":"_header-test_1bgwh_11","content-test":"_content-test_1bgwh_15","footer-test":"_footer-test_1bgwh_20"},{useArgs:S}=__STORYBOOK_MODULE_PREVIEW_API__,{userEvent:N,within:O}=__STORYBOOK_MODULE_TEST__,he={component:T,title:"Components/Modal",argTypes:{isVisible:{description:"Whether the modal is visible or not",control:{type:"boolean"}},isClosable:{description:"Whether the modal can be closed by clicking outside of it",control:{type:"boolean"}},hasOverlay:{description:"Whether the modal has an overlay",control:{type:"boolean"}},icon:{description:"Icon displayed before the title in the modal header",control:!1}}},j={title:"Modal Title",subtitle:"Modal Subtitle",textContent:"This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px. This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px.This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px. This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px.This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px. This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px.This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px. This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px.This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px. This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px.This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px. This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px.This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px. This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px.This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px. This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height. This maximum height can be set by the designers, depending on the need. But the modal must always have a minimum margin on top and bottom of 96px.",slotContent:e.jsx(le,{videoUrl:"https://www.youtube.com/embed/8u1qiZMJKfc?si=XmKwMUbjPJpPtSsW",imageUrl:`${Z}/images/cards-mediasanofi.webp`}),size:void 0,isVisible:!1,isClosable:!0,onClose:()=>{},footerContent:null},k=t=>{de({title:"The onClick props is called.",text:"The onClick props is called.",variant:Q.SUCCESS,displayCloseButton:!0,position:ee.TOP_END,...t})},C={args:{...j,slotContent:null,textContent:"This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height."},render:function(n){const[,o]=S();function i(){o({isVisible:!0})}const l=e.jsxs(e.Fragment,{children:[e.jsx(b,{label:"Cancel",variant:L.TERTIARY,onClick:()=>{o({isVisible:!1})}}),e.jsx(b,{label:"Confirm",onClick:()=>k(n)})]});return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(v,{variant:x.BODY_MEDIUM,"data-testid":"content",children:"This example shows a modal with content. It has a title, subtitle, text content, slot content which can be a video or an image and a footer content. The bottom section can be customised using the footerContent prop."})}),e.jsx(b,{label:"Open Modal",onClick:i,"data-testid":"button"}),e.jsx(A,{}),e.jsx(T,{...n,footerContent:l,onClose:()=>{k({...n,text:"The onClose props is called."}),o({isVisible:!1})}})]})},play:async({canvasElement:t})=>{const n=O(t);await N.click(n.getByTestId("button"))}},M={args:{...j,title:"Non Dismissible Modal",textContent:"This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.",isClosable:!1},render:function(n){const[,o]=S();function i(){o({isVisible:!0})}const l=e.jsxs(e.Fragment,{children:[e.jsx(b,{label:"Cancel",variant:L.TERTIARY,onClick:()=>{o({isVisible:!1})}}),e.jsx(b,{label:"Confirm",onClick:()=>k(n)})]});return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(v,{variant:x.BODY_MEDIUM,"data-testid":"content",children:"A modal can either be dismissible or non dismissible. Non-dismissible modals can't be closed unless you click one of the action buttons at the bottom."})}),e.jsx(b,{label:"Open non dismissible modal",onClick:i,"data-testid":"button"}),e.jsx(A,{}),e.jsx(T,{...n,footerContent:l,onClose:()=>k({...n,text:"The onClose props is called."})})]})},play:async({canvasElement:t})=>{const n=O(t);await N.click(n.getByTestId("button"))}},w={args:{...j,size:{height:"fit-content",width:"50rem"},title:"This is a larger video preview",subtitle:"",textContent:"",footerContent:"",slotContent:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem"},children:[j.slotContent,e.jsx(oe,{id:"select","data-testid":"select",placeholder:"Select a video langage",state:se.DEFAULT,inverse:!1,disabled:!1,required:!1,multiple:!1,size:ie.LARGE,maxItemsVisible:3,options:[{value:"french",label:"french"},{value:"chinese",label:"chinese"},{value:"english",label:"english"},{value:"arabic",label:"arabic"},{value:"spanish",label:"spanish"},{value:"german",label:"german"},{value:"italian",label:"italian"},{value:"greek",label:"greek"},{value:"korean",label:"korean"},{value:"portuguese",label:"portuguese"}]}),e.jsx(ae,{defaultValue:"2024-04-06"})]})},render:function(n){const[,o]=S();function i(){o({isVisible:!0})}return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(v,{variant:x.BODY_MEDIUM,"data-testid":"content",children:"This examples shows a modal with content. It has a title, subtitle, text content, slot content which can be a video or an image and a footer content. The bottom section can be customised using the footerContent prop."})}),e.jsx(b,{label:"Open Modal",onClick:i,"data-testid":"button"}),e.jsx(A,{}),e.jsx(T,{...n,onClose:()=>{k({...n,text:"The onClose props is called."}),o({isVisible:!1})},classNames:{container:h(I["container-test"]),content:h(I["content-test"]),header:h(I["header-test"]),footer:h(I["footer-test"])}})]})},play:async({canvasElement:t})=>{const n=O(t);await N.click(n.getByTestId("button")),await N.click(n.getByTestId("select"))}},ue={default:{title:"Modal Title",subtitle:"Modal Subtitle",textContent:"This modal includes an icon in the header, displayed before the title. Pass an Icon component for full control over styling.",icon:e.jsx(D,{name:E.VIEW_MODULE,size:1.5,filled:!1})},destructive:{title:"Delete this item?",subtitle:"This action cannot be undone",textContent:"Are you sure you want to delete this item? It will be permanently removed.",icon:e.jsx(D,{name:E.DANGEROUS,filled:!0,size:1.5,style:{color:"var(--elements-color-semantic-text-error)"}})},warning:{title:"Unsaved changes",subtitle:"Your progress may be lost",textContent:"You have changes that were not saved. If you leave now, those changes will be discarded.",icon:e.jsx(D,{name:E.WARNING,filled:!0,size:1.5,style:{color:"var(--elements-color-semantic-text-alert)"}})}},_={args:{...j,icon:e.jsx(D,{name:E.VIEW_MODULE,size:1.5,filled:!1}),slotContent:null,textContent:"This modal includes an icon in the header, displayed before the title. Pass an Icon component for full control over styling."},render:function(n){const[o,i]=u.useState(!1),[l,c]=u.useState("default");function g(){c("default"),i(!0)}function a(){c("destructive"),i(!0)}function d(){c("warning"),i(!0)}const r=ue[l];let y="Confirm";l==="destructive"?y="Delete":l==="warning"&&(y="Continue");const f=e.jsxs(e.Fragment,{children:[e.jsx(b,{label:"Cancel",variant:L.TERTIARY,onClick:()=>{i(!1)}}),e.jsx(b,{label:y,onClick:()=>k(n)})]});return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(v,{variant:x.BODY_MEDIUM,"data-testid":"content",children:"Examples of modals with a header icon: default (outline icon), destructive confirmation (red filled close icon), and warning confirmation (filled warning icon). Pass any Icon component for full control over name, size, filled state, and color."})}),e.jsxs("div",{className:I["story-button-row"],children:[e.jsx(b,{label:"Open modal with icon",onClick:g,"data-testid":"button"}),e.jsx(b,{label:"Destructive confirmation",onClick:a,"data-testid":"button-destructive"}),e.jsx(b,{label:"Warning confirmation",onClick:d,"data-testid":"button-warning"})]}),e.jsx(A,{}),e.jsx(T,{...n,isVisible:o,title:r.title,subtitle:r.subtitle,textContent:r.textContent,icon:r.icon,footerContent:f,onClose:()=>{k({...n,text:"The onClose props is called."}),i(!1)}})]})},play:async({canvasElement:t})=>{const n=O(t);await N.click(n.getByTestId("button"))}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    slotContent: null,
    textContent: "This is a dedicated placeholder for optional text, serving as modal content. This placeholder has no limit on content, but it should adapt to the modal maximum height."
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs<{
      isVisible: boolean;
    }>();
    function showModal() {
      updateArgs({
        isVisible: true
      });
    }
    const footerContent = <>
        <Button label="Cancel" variant={ButtonVariant.TERTIARY} onClick={() => {
        updateArgs({
          isVisible: false
        });
      }} />
        <Button label="Confirm" onClick={() => notify(args)} />
      </>;
    return <>
        <p>
          <Typography variant={TypographyVariant.BODY_MEDIUM} data-testid="content">
            This example shows a modal with content. It has a title, subtitle,
            text content, slot content which can be a video or an image and a
            footer content. The bottom section can be customised using the
            footerContent prop.
          </Typography>
        </p>
        <Button label="Open Modal" onClick={showModal} data-testid="button"></Button>
        <Toast />
        <Modal {...args} footerContent={footerContent} onClose={() => {
        notify({
          ...args,
          text: "The onClose props is called."
        });
        updateArgs({
          isVisible: false
        });
      }} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("button"));
  }
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    title: "Non Dismissible Modal",
    textContent: "This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons. It can only be closed by clicking the buttons.This modal cannot be dismissed by clicking outside of it. It can only be closed by clicking the buttons.",
    isClosable: false
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs<{
      isVisible: boolean;
    }>();
    function showModal() {
      updateArgs({
        isVisible: true
      });
    }
    const footerContent = <>
        <Button label="Cancel" variant={ButtonVariant.TERTIARY} onClick={() => {
        updateArgs({
          isVisible: false
        });
      }} />
        <Button label="Confirm" onClick={() => notify(args)} />
      </>;
    return <>
        <p>
          <Typography variant={TypographyVariant.BODY_MEDIUM} data-testid="content">
            A modal can either be dismissible or non dismissible.
            Non-dismissible modals can't be closed unless you click one of the
            action buttons at the bottom.
          </Typography>
        </p>
        <Button label="Open non dismissible modal" onClick={showModal} data-testid="button"></Button>
        <Toast />
        <Modal {...args} footerContent={footerContent} onClose={() => notify({
        ...args,
        text: "The onClose props is called."
      })} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("button"));
  }
}`,...M.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: {
      height: "fit-content",
      width: "50rem"
    },
    title: "This is a larger video preview",
    subtitle: "",
    textContent: "",
    footerContent: "",
    slotContent: <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "1rem"
    }}>
        {defaultArgs.slotContent}
        <Select id="select" data-testid="select" placeholder="Select a video langage" state={FormControlState.DEFAULT} inverse={false} disabled={false} required={false} multiple={false} size={InputSize.LARGE} maxItemsVisible={3} options={[{
        value: "french",
        label: "french"
      }, {
        value: "chinese",
        label: "chinese"
      }, {
        value: "english",
        label: "english"
      }, {
        value: "arabic",
        label: "arabic"
      }, {
        value: "spanish",
        label: "spanish"
      }, {
        value: "german",
        label: "german"
      }, {
        value: "italian",
        label: "italian"
      }, {
        value: "greek",
        label: "greek"
      }, {
        value: "korean",
        label: "korean"
      }, {
        value: "portuguese",
        label: "portuguese"
      }]} />
        <DatePicker defaultValue={"2024-04-06"} />
      </div>
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs<{
      isVisible: boolean;
    }>();
    function showModal() {
      updateArgs({
        isVisible: true
      });
    }
    return <>
        <p>
          <Typography variant={TypographyVariant.BODY_MEDIUM} data-testid="content">
            This examples shows a modal with content. It has a title, subtitle,
            text content, slot content which can be a video or an image and a
            footer content. The bottom section can be customised using the
            footerContent prop.
          </Typography>
        </p>
        <Button label="Open Modal" onClick={showModal} data-testid="button" />
        <Toast />
        <Modal {...args} onClose={() => {
        notify({
          ...args,
          text: "The onClose props is called."
        });
        updateArgs({
          isVisible: false
        });
      }} classNames={{
        container: cn(styles["container-test"]),
        content: cn(styles["content-test"]),
        header: cn(styles["header-test"]),
        footer: cn(styles["footer-test"])
      }} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("button"));
    await userEvent.click(canvas.getByTestId("select"));
  }
}`,...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    icon: <Icon name={IconName.VIEW_MODULE} size={1.5} filled={false} />,
    slotContent: null,
    textContent: "This modal includes an icon in the header, displayed before the title. Pass an Icon component for full control over styling."
  },
  render: function Render(args) {
    const [isVisible, setIsVisible] = useState(false);
    const [confirmationKind, setConfirmationKind] = useState<WithIconConfirmationKind>("default");
    function openDefaultModal() {
      setConfirmationKind("default");
      setIsVisible(true);
    }
    function openDestructiveConfirmation() {
      setConfirmationKind("destructive");
      setIsVisible(true);
    }
    function openWarningConfirmation() {
      setConfirmationKind("warning");
      setIsVisible(true);
    }
    const variant = withIconVariantContent[confirmationKind];
    let primaryLabel = "Confirm";
    if (confirmationKind === "destructive") {
      primaryLabel = "Delete";
    } else if (confirmationKind === "warning") {
      primaryLabel = "Continue";
    }
    const footerContent = <>
        <Button label="Cancel" variant={ButtonVariant.TERTIARY} onClick={() => {
        setIsVisible(false);
      }} />
        <Button label={primaryLabel} onClick={() => notify(args)} />
      </>;
    return <>
        <p>
          <Typography variant={TypographyVariant.BODY_MEDIUM} data-testid="content">
            Examples of modals with a header icon: default (outline icon),
            destructive confirmation (red filled close icon), and warning
            confirmation (filled warning icon). Pass any Icon component for full
            control over name, size, filled state, and color.
          </Typography>
        </p>
        <div className={styles["story-button-row"]}>
          <Button label="Open modal with icon" onClick={openDefaultModal} data-testid="button" />
          <Button label="Destructive confirmation" onClick={openDestructiveConfirmation} data-testid="button-destructive" />
          <Button label="Warning confirmation" onClick={openWarningConfirmation} data-testid="button-warning" />
        </div>
        <Toast />
        <Modal {...args} isVisible={isVisible} title={variant.title} subtitle={variant.subtitle} textContent={variant.textContent} icon={variant.icon} footerContent={footerContent} onClose={() => {
        notify({
          ...args,
          text: "The onClose props is called."
        });
        setIsVisible(false);
      }} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("button"));
  }
}`,..._.parameters?.docs?.source}}};const ye=["Default","NonDismissibleModal","Customisation","WithIcon"],Ce=Object.freeze(Object.defineProperty({__proto__:null,Customisation:w,Default:C,NonDismissibleModal:M,WithIcon:_,__namedExportsOrder:ye,default:he},Symbol.toStringTag,{value:"Module"}));export{C as D,Ce as M,M as N};

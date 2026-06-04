import{r as u,af as fe,h as $,v as he,j as e,o as d,i as I,k as re,p as Q,g as ve,B as Z,e as _e,I as U,d as X,f as ae}from"./iframe-DU6-gHk6.js";import{N as h}from"./index-bpbbX949.js";import{_ as He}from"./preload-helper-PPVm8Dsz.js";import{G as W}from"./index-Bre8NiPo.js";import{O as f,E as be,a as Se,H as _,b as V}from"./Eyebrows-Tv13VMtY.js";import{B as Ne}from"./ButtonIcon-B-F3gh4N.js";import{I as q}from"./Image-BdGhIV8F.js";import{C as z}from"./Container-CthkAo70.js";import{T as oe}from"./TextInput-DQfB9N96.js";import{a as se}from"./InputLabel-Bnixl784.js";const ie="(prefers-reduced-motion: reduce)";function Pe(){return globalThis.window?.matchMedia?.(ie).matches??!1}function we(){const[t,a]=u.useState(Pe);return u.useEffect(()=>{const s=globalThis.window.matchMedia(ie),i=n=>{a(n.matches)};return s.addEventListener("change",i),()=>s.removeEventListener("change",i)},[]),t}const xe="_outerContainer_1yyce_1",Ce="_display_none_1yyce_8",Te="_display_none_1yyce_8",ke="_container_1yyce_12",je="_floating_1yyce_17",Be="_image_1yyce_17",Ae="_fullScreen_1yyce_20",Ee="_hero-area_1yyce_45",Re="_content-container_1yyce_49",Le="_content_1yyce_49",Ie="_grid-root_1yyce_54",Ve="_video_1yyce_60",Oe="_legend-mobile-only_1yyce_63",Me="_legend-desktop-only_1yyce_66",De="_typography-body-medium_1yyce_69",Fe="_typography-body-large_1yyce_84",We="_video-floating_1yyce_102",qe="_video-stop-button-container_1yyce_106",Ue="_video-stop-button_1yyce_106",ze="_image-container_1yyce_132",Ge="_floating-image-container_1yyce_146",Je="_legend_1yyce_63",Ke="_overlay-black_1yyce_162",Ye="_overlay-black-strong_1yyce_176",$e="_overlay-black-ultra_strong_1yyce_179",Qe="_overlay-white-strong_1yyce_182",Xe="_overlay-white-ultra_strong_1yyce_185",Ze="_justify-start_1yyce_188",et="_justify-center_1yyce_191",tt="_justify-end_1yyce_194",rt="_eyebrows-container_1yyce_197",nt="_eyebrow_1yyce_197",at="_main-container_1yyce_203",ot="_alone_1yyce_207",st="_eyebrows-container-stacking_1yyce_214",it="_input-container_1yyce_221",lt="_title_1yyce_227",ct="_description_1yyce_228",mt="_compact_1yyce_281",dt="_dynamic_1yyce_285",r={outerContainer:xe,display_none:Ce,displayNone:Te,container:ke,floating:je,image:Be,fullScreen:Ae,"hero-area":"_hero-area_1yyce_45",heroArea:Ee,"content-container":"_content-container_1yyce_49",contentContainer:Re,content:Le,"grid-root":"_grid-root_1yyce_54",gridRoot:Ie,video:Ve,"legend-mobile-only":"_legend-mobile-only_1yyce_63",legendMobileOnly:Oe,"legend-desktop-only":"_legend-desktop-only_1yyce_66",legendDesktopOnly:Me,"typography-body-medium":"_typography-body-medium_1yyce_69",typographyBodyMedium:De,"typography-body-large":"_typography-body-large_1yyce_84",typographyBodyLarge:Fe,"video-floating":"_video-floating_1yyce_102",videoFloating:We,"video-stop-button-container":"_video-stop-button-container_1yyce_106",videoStopButtonContainer:qe,"video-stop-button":"_video-stop-button_1yyce_106",videoStopButton:Ue,"image-container":"_image-container_1yyce_132",imageContainer:ze,"floating-image-container":"_floating-image-container_1yyce_146",floatingImageContainer:Ge,legend:Je,"overlay-black":"_overlay-black_1yyce_162",overlayBlack:Ke,"overlay-black-strong":"_overlay-black-strong_1yyce_176",overlayBlackStrong:Ye,"overlay-black-ultra_strong":"_overlay-black-ultra_strong_1yyce_179",overlayBlackUltraStrong:$e,"overlay-white-strong":"_overlay-white-strong_1yyce_182",overlayWhiteStrong:Qe,"overlay-white-ultra_strong":"_overlay-white-ultra_strong_1yyce_185",overlayWhiteUltraStrong:Xe,"justify-start":"_justify-start_1yyce_188",justifyStart:Ze,"justify-center":"_justify-center_1yyce_191",justifyCenter:et,"justify-end":"_justify-end_1yyce_194",justifyEnd:tt,"eyebrows-container":"_eyebrows-container_1yyce_197",eyebrowsContainer:rt,eyebrow:nt,"main-container":"_main-container_1yyce_203",mainContainer:at,alone:ot,"eyebrows-container-stacking":"_eyebrows-container-stacking_1yyce_214",eyebrowsContainerStacking:st,"input-container":"_input-container_1yyce_221",inputContainer:it,title:lt,description:ct,compact:mt,dynamic:dt};function pt(t){const[a,s]=u.useState(()=>globalThis.window===void 0||!t?.length?null:t.find(i=>globalThis.window.matchMedia(i.media).matches)??null);return u.useEffect(()=>{if(!t?.length)return;const i=t.map(o=>({source:o,mql:globalThis.window.matchMedia(o.media)})),n=()=>{const o=i.find(({mql:l})=>l.matches);s(o?.source??null)},m=i.map(({mql:o})=>{const l=()=>n();return o.addEventListener("change",l),{mql:o,handler:l}});return n(),()=>m.forEach(({mql:o,handler:l})=>o.removeEventListener("change",l))},[t]),a}function O({title:t,titleLineClamp:a=3,description:s,descriptionLineClamp:i=3,image:n,video:m,input:o,button:l,eyebrows:H,floating:c,fullScreen:b=!1,fullScreenOffset:G,overlayStyle:y=f.DEFAULT,overlayEmphasis:D=Se.STRONG,brandTheme:p=$.primary,justify:v=_.START,variant:F=V.DEFAULT}){const{brandSecondaryClassName:le,brandTertiaryClassName:ce}=fe(p),me=u.useRef(null),de=u.useRef(null),pe=he.TITLE_1,J=we(),te=m?.autoPlay!==!1&&!J,[K,Y]=u.useState(te);u.useEffect(()=>{J&&Y(!1)},[J]);const ue=u.useCallback(()=>{Y(ge=>!ge)},[]),ye=m?e.jsx(yt,{video:m,floating:c,isPlaying:K,shouldAutoPlay:te,onPlayingChange:Y}):e.jsx(gt,{image:n,floating:c});return e.jsx("div",{className:d(r.outerContainer,{[le]:p===$.secondary,[ce]:p===$.tertiary}),"data-testid":"hero",children:e.jsxs("div",{className:d(r.container,{[r.floating]:c,[r.fullScreen]:b}),style:b&&G?ut(G):void 0,children:[ye,e.jsx(z,{ref:me,className:d(r["hero-area"],{[r.dynamic]:F===V.DYNAMIC,[r.compact]:F===V.COMPACT}),classNames:{contentContainer:r.content},children:e.jsxs(W.Root,{className:r["grid-root"],children:[e.jsx(W.Item,{xs:1,className:d({[r.display_none]:!c})}),e.jsxs(W.Item,{ref:de,xs:12,lg:c?10:12,className:d(r["content-container"],r[`overlay-${y}-${D}`.toLowerCase()],{[r["justify-start"]]:v===_.START,[r["justify-center"]]:v===_.CENTER,[r["justify-end"]]:v===_.END}),children:[n?.legend&&!b&&e.jsx(I,{variant:Q.BODY_SMALL,color:re.HELPER_TEXT,className:d(r.legend,r["legend-mobile-only"],{[r["overlay-black"]]:y===f.BLACK}),children:n?.legend}),e.jsxs("div",{className:d(r["main-container"],{[r.alone]:o||l||s}),children:[H&&e.jsx(be,{items:H,overlayStyle:y}),typeof t=="string"?e.jsx(ve,{className:d(r.title,{[r["overlay-black"]]:y===f.BLACK}),style:{WebkitLineClamp:a,lineClamp:a},variant:pe,children:t}):e.jsx("div",{className:d(r.title,{[r["overlay-black"]]:y===f.BLACK}),style:{WebkitLineClamp:a,lineClamp:a},children:t}),typeof s=="string"?e.jsx(I,{className:d(r.description,r["typography-body-medium"],r["typography-body-large"],{[r["overlay-black"]]:y===f.BLACK}),style:{WebkitLineClamp:i,lineClamp:i},variant:Q.BODY_LARGE,children:s}):e.jsx("div",{className:d(r.description,{[r["overlay-black"]]:y===f.BLACK}),children:s})]}),(o||l)&&e.jsxs("div",{className:r["input-container"],children:[o,l]})]}),e.jsx(W.Item,{xs:1,className:d({[r.display_none]:!c})})]})}),n?.legend&&!b&&e.jsx(z,{className:r["legend-desktop-only"],children:e.jsx(I,{variant:Q.BODY_SMALL,color:re.HELPER_TEXT,className:r.legend,children:n.legend})}),m&&e.jsx("div",{className:r["video-stop-button-container"],children:e.jsx(Ne,{icon:K?U.PAUSE:U.PLAY_ARROW,onClick:ue,variant:_e.PRIMARY,size:Z.MEDIUM,inverse:!0,"aria-label":m.stopButtonAriaLabel??(K?"Stop video":"Play video"),className:r["video-stop-button"]})})]})})}function ut(t){const a={};return t.blockStart&&(a["--elements-page-inset-block-start"]=t.blockStart),t.blockEnd&&(a["--elements-page-inset-block-end"]=t.blockEnd),a}function yt({video:t,floating:a,isPlaying:s,shouldAutoPlay:i,onPlayingChange:n}){const m=u.useRef(null),o=u.useRef(null),l=u.useRef(void 0),H=pt(t.sources),c=H?.src??t.src,y=(p=>{try{return new URL(p,globalThis.location.origin).pathname}catch{return p}})(c).endsWith(".m3u8");u.useEffect(()=>{const p=m.current;if(!(!p||!c)&&y)return ft(p,c,i,o,n),()=>{o.current&&(o.current.destroy(),o.current=null)}},[c,i,n,y]),u.useEffect(()=>{const p=m.current;if(p){if(!y&&c){const v=l.current!==c,F=l.current===void 0;l.current=c,v&&!F&&p.load()}s?p.play().catch(v=>{console.error("Error playing video:",v),n(!1)}):p.pause()}},[c,s,n,y]);const D=e.jsxs("video",{ref:m,className:d(r.video,{[r["video-floating"]]:a}),muted:t.muted!==!1,loop:t.loop!==!1,autoPlay:i,playsInline:!0,poster:t.poster,"aria-hidden":"true",tabIndex:-1,children:[!y&&e.jsx("source",{src:c,type:H?.type??"video/mp4"}),e.jsx("track",{kind:"captions"})]});return a?e.jsx(z,{className:r["floating-image-container"],children:e.jsx("div",{children:D})}):e.jsx("div",{className:r["image-container"],children:D})}function gt({image:t,floating:a}){const s=t.sources,i=!!s&&s.length>0;return e.jsxs(e.Fragment,{children:[e.jsx(z,{className:d(r["floating-image-container"],{[r.display_none]:!a}),children:e.jsx("div",{children:i?e.jsxs("picture",{children:[s.map(n=>e.jsx("source",{srcSet:n.srcSet,media:n.media,type:n.type},n.srcSet)),e.jsx(q,{src:t.src,alt:t.alt,fetchPriority:t.fetchPriority,fallbackSrc:t.fallbackSrc,className:r.image})]}):e.jsx(q,{src:t.src,alt:t.alt,srcSet:t.srcSet,sizes:t.sizes,fetchPriority:t.fetchPriority,fallbackSrc:t.fallbackSrc,className:r.image})})}),e.jsx("div",{className:d(r["image-container"],{[r.display_none]:a}),children:i?e.jsxs("picture",{children:[s.map(n=>e.jsx("source",{srcSet:n.srcSet,media:n.media,type:n.type},n.srcSet)),e.jsx(q,{src:t.src,alt:t.alt,fetchPriority:t.fetchPriority,fallbackSrc:t.fallbackSrc,className:r.image})]}):e.jsx(q,{src:t.src,alt:t.alt,srcSet:t.srcSet,sizes:t.sizes,fetchPriority:t.fetchPriority,fallbackSrc:t.fallbackSrc,className:r.image})})]})}async function ft(t,a,s,i,n){try{const{default:m}=await He(async()=>{const{default:l}=await import("./hls-B8uaYc3f.js");return{default:l}},[],import.meta.url);if(!m.isSupported()){ne(t,a);return}const o=new m;i.current=o,o.loadSource(a),o.attachMedia(t),o.on(m.Events.MANIFEST_PARSED,()=>{s&&t.play().catch(l=>{console.error("Error playing video:",l),n(!1)})})}catch{ne(t,a)}}function ne(t,a){t.canPlayType("application/vnd.apple.mpegurl")&&(t.src=a)}try{O.displayName="Hero",O.__docgenInfo={description:"",displayName:"Hero",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/Hero/Hero.tsx",methods:[],props:{title:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"}],description:"Main heading content",name:"title",parent:{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},required:!0,tags:{},type:{name:"ReactNode"}},titleLineClamp:{defaultValue:{value:"3"},declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"}],description:"Maximum lines for title before truncation.",name:"titleLineClamp",parent:{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},required:!1,tags:{default:'"none"'},type:{name:'number | "none"'}},description:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"}],description:"Subheading/description content",name:"description",parent:{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},required:!0,tags:{},type:{name:"ReactNode"}},descriptionLineClamp:{defaultValue:{value:"3"},declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"}],description:"Maximum lines for description before truncation.",name:"descriptionLineClamp",parent:{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},required:!1,tags:{default:'"none"'},type:{name:'number | "none"'}},input:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"}],description:"Search or form input element",name:"input",parent:{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},required:!1,tags:{},type:{name:"ReactNode"}},button:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"}],description:"Call-to-action button element",name:"button",parent:{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},required:!1,tags:{},type:{name:"ReactNode"}},eyebrows:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"}],description:"Eyebrow labels with optional icons",name:"eyebrows",parent:{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},required:!1,tags:{},type:{name:'{ text: string; iconName?: "error" | "warning" | IconName | "abc" | "access_time" | "accessibility" | "account_balance" | "account_circle" | "add" | "add_circle" | "add_circle_outline" | ... 482 more ...; }[]'}},floating:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"}],description:"Float content card over background edge.",name:"floating",parent:{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},fullScreen:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"}],description:"Expand Hero to full viewport height.",name:"fullScreen",parent:{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},fullScreenOffset:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"}],description:"Override the auto-detected page insets for fullscreen height calculation",name:"fullScreenOffset",parent:{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},required:!1,tags:{},type:{name:"FullScreenOffset"}},brandTheme:{defaultValue:{value:"BrandTheme.primary"},declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"}],description:"Override the theme at component level",name:"brandTheme",parent:{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},required:!1,tags:{},type:{name:"enum",raw:'BrandTheme | "primary" | "secondary" | "tertiary"',value:[{value:'"primary"',description:"",fullComment:"",tags:{}},{value:'"secondary"',description:"",fullComment:"",tags:{}},{value:'"tertiary"',description:"",fullComment:"",tags:{}},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},overlayStyle:{defaultValue:{value:"OverlayStyles.DEFAULT"},declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"}],description:"Overlay gradient color.",name:"overlayStyle",parent:{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},required:!1,tags:{default:"OverlayStyles.DEFAULT"},type:{name:"enum",raw:'"default" | OverlayStyles | "black" | "white"',value:[{value:'"default"'},{value:'"default"',description:"Brand-colored overlay (default)",fullComment:"Brand-colored overlay (default)",tags:{}},{value:'"black"',description:"Dark overlay for light backgrounds",fullComment:"Dark overlay for light backgrounds",tags:{}},{value:'"white"',description:"Light overlay for dark backgrounds",fullComment:"Light overlay for dark backgrounds",tags:{}},{value:'"black"'},{value:'"white"'}]}},overlayEmphasis:{defaultValue:{value:"OverlayEmphasis.STRONG"},declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"}],description:"Overlay opacity intensity.",name:"overlayEmphasis",parent:{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},required:!1,tags:{default:"OverlayEmphasis.STRONG"},type:{name:"enum",raw:'"strong" | OverlayEmphasis | "ultra_strong"',value:[{value:'"strong"'},{value:'"strong"',description:"Standard overlay opacity",fullComment:"Standard overlay opacity",tags:{}},{value:'"ultra_strong"',description:"Higher overlay opacity for better contrast",fullComment:"Higher overlay opacity for better contrast",tags:{}},{value:'"ultra_strong"'}]}},justify:{defaultValue:{value:"HeroJustify.START"},declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"}],description:"Horizontal content alignment.",name:"justify",parent:{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},required:!1,tags:{default:"HeroJustify.START"},type:{name:"enum",raw:'"center" | "start" | "end" | HeroJustify',value:[{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"start"',description:"Align content to start (left in LTR, right in RTL)",fullComment:"Align content to start (left in LTR, right in RTL)",tags:{}},{value:'"center"',description:"Center content horizontally",fullComment:"Center content horizontally",tags:{}},{value:'"end"',description:"Align content to end (right in LTR, left in RTL)",fullComment:"Align content to end (right in LTR, left in RTL)",tags:{}}]}},variant:{defaultValue:{value:"HeroVariant.DEFAULT"},declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"}],description:"Layout variant.",name:"variant",parent:{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"HeroBaseProps"},required:!1,tags:{default:"HeroVariant.DEFAULT"},type:{name:"enum",raw:'"default" | "compact" | HeroVariant | "dynamic"',value:[{value:'"default"'},{value:'"compact"'},{value:'"default"',description:"Standard height hero section",fullComment:"Standard height hero section",tags:{}},{value:'"compact"',description:"Reduced height for secondary pages",fullComment:"Reduced height for secondary pages",tags:{}},{value:'"dynamic"',description:"Responsive height based on content",fullComment:"Responsive height based on content",tags:{}},{value:'"dynamic"'}]}},image:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"TypeLiteral"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"TypeLiteral"}],description:"Image configuration",name:"image",required:!1,tags:{internal:"Image not allowed when using video"},type:{name:"HeroImageConfig"}},video:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"TypeLiteral"},{fileName:"elements-design-system/src/components/Hero/HeroProps.ts",name:"TypeLiteral"}],description:"Video configuration",name:"video",required:!1,tags:{internal:"Video not allowed when using image"},type:{name:"HeroVideoProps"}}},tags:{component:"Hero",description:"The hero component. Accepts either an `image` or a `video` for the background, but not both.",param:`title - The title
description - The description
image - The image background configuration (mutually exclusive with video)
video - The video background configuration (mutually exclusive with image)
input - The input
button - The button
eyebrows - The eyebrows
floating - The floating
fullScreen - Whether the hero takes full viewport height
fullScreenOffset - The full screen offset
overlayStyle - The overlay style
overlayEmphasis - The overlay emphasis
brandTheme - The brand theme`}}}catch{}const ht={title:"Components/Hero",component:O,argTypes:{overlayStyle:{control:"select",options:Object.values(f),description:"Overlay style"},video:{control:"object",description:`\`\`\`json
{
 src: string,
 sources?:[
  {
    src: string,
    media: string,
    type?: string
  }
 ],
 muted?: boolean,
 loop?: boolean,
 autoPlay?: boolean,
 poster?: string,
 stopButtonAriaLabel?: string
}
\`\`\``},image:{control:"object",description:`\`\`\`tsx
{
 src: string,
 alt: string,
 legend?: string,
 fallbackSrc?: string,
 sources?:[
  {
    srcSet: string,
    media: string,
    type?: string
  }
 ]
}
\`\`\``}}},M=`${X}/images/cards-mediasanofi.webp`,g={title:"Hero title",description:"Hero description on three lines maximum",floating:!1,overlayStyle:f.DEFAULT,titleLineClamp:void 0,descriptionLineClamp:void 0,eyebrows:[{iconName:U.CALENDAR_MONTH,text:"Icon eyebrow"},{iconName:U.SUPERVISED_USER_CIRCLE,text:"Icon eyebrow"}],image:{src:M,alt:"Alt text",legend:"Legend of the picture",fallbackSrc:""},input:e.jsx(oe,{"aria-label":"Email",size:se.LARGE,type:"email",placeholder:"Placeholder"}),button:e.jsx(ae,{size:Z.LARGE,label:"Call to action"}),justify:_.START},S={args:g},N={args:{...g,overlayStyle:f.WHITE},tags:["isHidden"]},P={args:{...g,overlayStyle:f.BLACK,input:e.jsx(oe,{"aria-label":"Email",size:se.LARGE,type:"email",placeholder:"Placeholder",inverse:!0}),button:e.jsx(ae,{size:Z.LARGE,label:"Call to action",inverse:!0})},tags:["isHidden"]},w={args:g,render:t=>e.jsxs("div",{children:[e.jsx(O,{...t}),e.jsx(I,{children:"After Content"})]})},x={args:{...g,variant:V.COMPACT}},C={args:{...g,description:"Lorem ipsum dolor sit amet consectetur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",variant:V.DYNAMIC}},T={args:{...g,justify:_.CENTER}},k={args:{...g,justify:_.END}},j={args:{...g,title:"Responsive Art Direction with Picture Element",description:"This example displays different images for mobile and desktop viewports using the picture element",image:{src:M,alt:"Responsive image example",legend:"Using picture element for art direction (different images based on viewport)",fetchPriority:"high",sources:[{srcSet:`${X}/images/Marie-Curie-avatar.jpeg`,media:"(max-width: 767px)",type:"image/webp"},{srcSet:`${X}/images/cards-mediasanofi.webp`,media:"(min-width: 768px)",type:"image/webp"}]}}},{image:kt,...ee}=g,B={args:{...ee,title:"Hero with Responsive Video Sources",description:"This example shows a video background with a stop button in the bottom right corner. In this case, different video sources are loaded based on viewport size, similar to the picture element for images. Video autoplay is automatically disabled when the user has enabled prefers-reduced-motion.",video:{src:"https://www.ethnographiques.org/IMG/nouveau_mp4/25-Riou01.mp4",muted:!0,loop:!0,autoPlay:!0,poster:M,stopButtonAriaLabel:"Toggle video playback",sources:[{src:"https://www.ethnographiques.org/IMG/nouveau_mp4/25-Riou01.mp4",media:"(max-width: 767px)",type:"video/mp4"},{src:"https://www.ethnographiques.org/IMG/nouveau_mp4/25-Riou01.mp4",media:"(min-width: 768px)",type:"video/mp4"}]}}},A={args:{...ee,title:"Hero with HLS Video Stream",description:"This example shows an HLS video stream as background",video:{src:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",muted:!0,loop:!0,autoPlay:!0,poster:M}}},E={args:{...g,title:"Full Screen Hero",description:"This hero takes up the full viewport height",fullScreen:!0},parameters:{layout:"fullscreen"}},R={args:{...ee,title:"Full Screen Hero with Video",description:"Full viewport height hero with video background",fullScreen:!0,video:{src:"https://www.ethnographiques.org/IMG/nouveau_mp4/25-Riou01.mp4",muted:!0,loop:!0,autoPlay:!0,poster:M}},parameters:{layout:"fullscreen"}},L={args:{...g,title:"Full Screen Hero with Navigation Header",description:"The hero automatically adjusts its height to account for the fixed NavigationHeader via --elements-page-inset-block-start",fullScreen:!0,overlayStyle:f.BLACK},parameters:{layout:"fullscreen"},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(h.Root,{sticky:!0,children:e.jsxs(h.StartContent,{children:[e.jsx(h.Item,{children:e.jsx(h.Action,{as:"a",href:"#",children:"Home"})}),e.jsx(h.Item,{children:e.jsx(h.Action,{as:"a",href:"#",children:"About"})}),e.jsx(h.Item,{children:e.jsx(h.Action,{as:"a",href:"#",children:"Contact"})})]})}),e.jsx(O,{...t}),e.jsx("div",{style:{padding:"var(--elements-spacing-2xl)"},children:e.jsx(I,{children:"Content below the hero"})})]})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...S.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    overlayStyle: OverlayStyles.WHITE
  },
  tags: ["isHidden"]
}`,...N.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    overlayStyle: OverlayStyles.BLACK,
    input: <TextInput aria-label="Email" size={InputSize.LARGE} type="email" placeholder="Placeholder" inverse />,
    button: <Button size={ButtonSize.LARGE} label="Call to action" inverse />
  },
  tags: ["isHidden"]
}`,...P.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  render: args => {
    return <div>
        <Hero {...args} />
        <Typography>After Content</Typography>
      </div>;
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: HeroVariant.COMPACT
  }
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    description: "Lorem ipsum dolor sit amet consectetur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",
    variant: HeroVariant.DYNAMIC
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    justify: HeroJustify.CENTER
  }
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    justify: HeroJustify.END
  }
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    title: "Responsive Art Direction with Picture Element",
    description: "This example displays different images for mobile and desktop viewports using the picture element",
    image: {
      src: imageSrc,
      // Default/fallback image
      alt: "Responsive image example",
      legend: "Using picture element for art direction (different images based on viewport)",
      fetchPriority: "high",
      sources: [{
        srcSet: \`\${SANOFI_ELEMENTS_CDN_URL}/images/Marie-Curie-avatar.jpeg\`,
        media: "(max-width: 767px)",
        type: "image/webp"
      }, {
        srcSet: \`\${SANOFI_ELEMENTS_CDN_URL}/images/cards-mediasanofi.webp\`,
        media: "(min-width: 768px)",
        type: "image/webp"
      }]
    }
  }
}`,...j.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgsWithoutImage,
    title: "Hero with Responsive Video Sources",
    description: "This example shows a video background with a stop button in the bottom right corner. " + "In this case, different video sources are loaded based on viewport size, similar to the picture element for images. " + "Video autoplay is automatically disabled when the user has enabled prefers-reduced-motion.",
    video: {
      src: "https://www.ethnographiques.org/IMG/nouveau_mp4/25-Riou01.mp4",
      muted: true,
      loop: true,
      autoPlay: true,
      poster: imageSrc,
      stopButtonAriaLabel: "Toggle video playback",
      sources: [{
        src: "https://www.ethnographiques.org/IMG/nouveau_mp4/25-Riou01.mp4",
        media: "(max-width: 767px)",
        type: "video/mp4"
      }, {
        src: "https://www.ethnographiques.org/IMG/nouveau_mp4/25-Riou01.mp4",
        media: "(min-width: 768px)",
        type: "video/mp4"
      }]
    }
  }
}`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgsWithoutImage,
    title: "Hero with HLS Video Stream",
    description: "This example shows an HLS video stream as background",
    video: {
      src: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
      muted: true,
      loop: true,
      autoPlay: true,
      poster: imageSrc
    }
  }
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    title: "Full Screen Hero",
    description: "This hero takes up the full viewport height",
    fullScreen: true
  },
  parameters: {
    layout: "fullscreen"
  }
}`,...E.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgsWithoutImage,
    title: "Full Screen Hero with Video",
    description: "Full viewport height hero with video background",
    fullScreen: true,
    video: {
      src: "https://www.ethnographiques.org/IMG/nouveau_mp4/25-Riou01.mp4",
      muted: true,
      loop: true,
      autoPlay: true,
      poster: imageSrc
    }
  },
  parameters: {
    layout: "fullscreen"
  }
}`,...R.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    title: "Full Screen Hero with Navigation Header",
    description: "The hero automatically adjusts its height to account for the fixed NavigationHeader via --elements-page-inset-block-start",
    fullScreen: true,
    overlayStyle: OverlayStyles.BLACK
  },
  parameters: {
    layout: "fullscreen"
  },
  render: args => <>
      <NavigationHeader.Root sticky>
        <NavigationHeader.StartContent>
          <NavigationHeader.Item>
            <NavigationHeader.Action as="a" href="#">
              Home
            </NavigationHeader.Action>
          </NavigationHeader.Item>
          <NavigationHeader.Item>
            <NavigationHeader.Action as="a" href="#">
              About
            </NavigationHeader.Action>
          </NavigationHeader.Item>
          <NavigationHeader.Item>
            <NavigationHeader.Action as="a" href="#">
              Contact
            </NavigationHeader.Action>
          </NavigationHeader.Item>
        </NavigationHeader.StartContent>
      </NavigationHeader.Root>
      <Hero {...args} />
      <div style={{
      padding: "var(--elements-spacing-2xl)"
    }}>
        <Typography>Content below the hero</Typography>
      </div>
    </>
}`,...L.parameters?.docs?.source}}};const vt=["Default","OverlayWhiteStyle","OverlayBlackStyle","ContentAfterHero","VariantCompact","VariantDynamic","JustifyCenter","JustifyEnd","ResponsiveImagesWithPicture","WithVideo","WithVideoHLS","FullScreen","FullScreenWithVideo","FullScreenWithNavigationHeader"],jt=Object.freeze(Object.defineProperty({__proto__:null,ContentAfterHero:w,Default:S,FullScreen:E,FullScreenWithNavigationHeader:L,FullScreenWithVideo:R,JustifyCenter:T,JustifyEnd:k,OverlayBlackStyle:P,OverlayWhiteStyle:N,ResponsiveImagesWithPicture:j,VariantCompact:x,VariantDynamic:C,WithVideo:B,WithVideoHLS:A,__namedExportsOrder:vt,default:ht},Symbol.toStringTag,{value:"Module"}));export{S as D,jt as H};

import{j as t,d as a,w as x,o as C,I as f}from"./iframe-DU6-gHk6.js";import{C as n}from"./CardGroup-Bc7VHWAv.js";import{C as e}from"./Card-BaSFfpWY.js";import{I as c}from"./Image-BdGhIV8F.js";import{L as j}from"./Link-Dsc7KtyT.js";import{L as y}from"./LinkStandalone-CcuMMn66.js";import{a as g}from"./LinkEnum-B9P4sa5j.js";import"./preload-helper-PPVm8Dsz.js";import"./card.module-Bwi6sX9X.js";import"./CardAction-Du6NhTeM.js";import"./CardContext-D_MyZj6Z.js";import"./CardEnum-5upNGCWA.js";import"./useBreakpoint-D1N6jPum.js";import"./ButtonIcon-B-F3gh4N.js";import"./CardContent-BlLkyKeg.js";import"./Eyebrows-Tv13VMtY.js";import"./helpers-B3_r76WL.js";import"./server-UKFEPc_w.js";import"./CardDate-BXDULj3i.js";import"./CardFooter-BtSHd2az.js";import"./CardMedia-BJhf_cFj.js";import"./CardMediaContext-C83aSO4A.js";import"./CardMediaCustom-BcRhndmF.js";import"./CardSection-CTMWfh9w.js";import"./LinkInternal-BomTUhSi.js";const k="_dark_5ucv9_1",S="_light_5ucv9_5",l={dark:k,light:S},K={title:"Components/Card/CardGroup",component:n,argTypes:{},parameters:{layout:"centered"},tags:["autodocs"]},p=[{id:"1",subText:"Description placeholder.",title:"Title placeholder",link:["#sanofi.com","#sanofi.fr"],picto:`${a}/picto/Clinical-trial-1-picto-with-dot-purple.svg`},{id:"2",subText:"Description placeholder, with a maximum line count of five.",title:"Title placeholder, with a maximum line count of three, with automatic truncation",link:["#sanofi.en"],picto:`${a}/picto/DNA-picto-with-dot-black.svg`},{id:"3",title:"Title placeholder, with a multiple line count.",subText:"your description.",picto:`${a}/picto/Doctor-1-picto-with-dot-black.svg`}],m=({cardContentData:r,hasPicto:u})=>{const s=x(),h=C({[l.dark]:s,[l.light]:!s});return t.jsx("div",{style:{width:"calc(100% / 3)"},children:t.jsxs(e,{children:[t.jsxs(e.Section,{children:[u?t.jsx(e.MediaCustom,{children:t.jsx(c,{src:r?.picto??"",alt:"Sanofi_image",className:h})}):t.jsx(e.Media,{children:t.jsx(c,{alt:"alt text",src:`${a}/images/cards-mediasanofi.webp`})}),t.jsx(e.Content,{category:r.category,date:r.date,buttonSlot:t.jsx(e.Button,{icon:f.MORE_VERT,onClick:r.onClick}),subText:r.subText,title:r.title,children:r?.link?.map(d=>t.jsx(j,{href:d,variant:"inline",children:"Link"},d))})]}),t.jsx(e.Action,{children:t.jsx(y,{iconName:"arrow_forward",href:"#",size:g.SMALL,children:"See more"})})]})})},o={decorators:[r=>t.jsx("div",{style:{padding:"2rem",display:"flex",justifyContent:"center"},children:t.jsx(r,{})})],render:()=>t.jsx(n,{children:p.map(r=>t.jsx(m,{cardContentData:r,hasPicto:!1},r.id))})},i={decorators:[r=>t.jsx("div",{style:{padding:"2rem",display:"flex",justifyContent:"center"},children:t.jsx(r,{})})],render:()=>t.jsx(n,{children:p.map(r=>t.jsx(m,{cardContentData:r,hasPicto:!0},r.id))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    padding: "2rem",
    display: "flex",
    justifyContent: "center"
  }}>
        <Story />
      </div>],
  render: () => {
    return <CardGroup>
        {cardContentData.map(el => <CardInternal key={el.id} cardContentData={el} hasPicto={false} />)}
      </CardGroup>;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    padding: "2rem",
    display: "flex",
    justifyContent: "center"
  }}>
        <Story />
      </div>],
  render: () => {
    return <CardGroup>
        {cardContentData.map(el => <CardInternal key={el.id} cardContentData={el} hasPicto />)}
      </CardGroup>;
  }
}`,...i.parameters?.docs?.source}}};const Q=["CardGridsGroup","CardGridsGroupPicto"];export{o as CardGridsGroup,i as CardGridsGroupPicto,Q as __namedExportsOrder,K as default};

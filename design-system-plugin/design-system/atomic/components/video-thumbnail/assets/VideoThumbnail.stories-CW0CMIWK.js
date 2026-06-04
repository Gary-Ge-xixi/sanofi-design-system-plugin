import{v as S,d as M,j as e,g as z,r as t,i as o,p as d}from"./iframe-DU6-gHk6.js";import{V as U}from"./VideoThumbnail-C7D-C2LV.js";const I={title:"Components/Video Thumbnail",component:U,argTypes:{onClick:{action:"clicked"},videoUrl:{control:"text",description:"The video url"},title:{control:"text",description:"The video title"},withEmbeddedPlayer:{control:"boolean",description:"The video player is embedded or not"},titleSize:{description:"The title size",control:"select",options:Object.values(S)}}},a={onClick:()=>console.log("clicked"),disabled:!1,withEmbeddedPlayer:!0},l={args:{...a,videoUrl:"https://www.youtube.com/embed/8u1qiZMJKfc?si=XmKwMUbjPJpPtSsW",size:{width:560},titleSize:S.TITLE_3,title:"Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry."},render:r=>e.jsx(U,{...r,title:e.jsx(z,{variant:r.titleSize,children:r.title})})},u={args:{...a,videoUrl:"https://player.vimeo.com/video/239251534?h=adbd4e018d&muted=1",size:{width:560},title:"Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry."}},c={args:{...a,videoUrl:"https://sanofi.sharepoint.com/sites/communicationsteam/_layouts/15/embed.aspx?uniqueId=6ba43435-9fed-440e-8c02-90b7286b31e3",imageUrl:`${M}/images/cards-mediasanofi.webp`,size:{width:560},title:"Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry."}},p={args:{...a,videoUrl:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",imageUrl:`${M}/images/cards-mediasanofi.webp`,size:{width:560},withEmbeddedPlayer:!1,title:"Tears of Steel m3u8"}},m={args:{...a,videoUrl:"https://www.ethnographiques.org/IMG/nouveau_mp4/25-Riou01.mp4",imageUrl:`${M}/images/cards-mediasanofi.webp`,size:{width:560,height:315},withEmbeddedPlayer:!1,title:"Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry.",captions:{en:"https://www.ethnographiques.org/IMG/nouveau_mp4/25-Riou01.vtt"}}},h={args:{...a,videoUrl:"https://www.ethnographiques.org/IMG/nouveau_mp4/25-Riou01.mp4",imageUrl:`${M}/images/cards-mediasanofi.webp`,size:{width:560,height:315}}},g={args:{...a,disabled:!0,videoUrl:"https://www.youtube.com/embed/8u1qiZMJKfc?si=XmKwMUbjPJpPtSsW",imageUrl:`${M}/images/cards-mediasanofi.webp`,size:{width:560},title:"Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry."}},E=r=>{const s=t.useRef(null),[n,v]=t.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:"24px"},children:[e.jsx(U,{...r,ref:s,onClick:y=>{v(!0),r.onClick?.(y)}}),e.jsx(V,{ref:s,isClicked:n})]})},V=t.forwardRef(({isClicked:r},s)=>{const[n,v]=t.useState({seconds:0,percent:0,duration:0}),[y,P]=t.useState(!1),[T,_]=t.useState(!1),[R,j]=t.useState(!1);return t.useEffect(()=>{r&&(()=>{const i=(typeof s=="function"?null:s?.current)?.getPlayerElement();return!i||!("on"in i)?{player:null}:(i.on("timeupdate",x=>{v(x)}),i.on("play",()=>{P(!0)}),i.on("ended",()=>{_(!0),P(!1)}),i.on("error",()=>{j(!0)}),{player:i})})()},[s,r]),e.jsxs("div",{children:[e.jsx(z,{variant:S.TITLE_1,children:"Metrics"}),e.jsxs(o,{variant:d.BODY_MEDIUM,children:[e.jsx("b",{children:"Started:"})," ",y?"Yes":"No"]}),e.jsxs(o,{variant:d.BODY_MEDIUM,children:[e.jsx("b",{children:"Seconds:"})," ",Math.ceil(n.seconds)," s"]}),e.jsxs(o,{variant:d.BODY_MEDIUM,children:[e.jsx("b",{children:"Progression:"})," ",Math.ceil(n.percent*100),"%"]}),e.jsxs(o,{variant:d.BODY_MEDIUM,children:[e.jsx("b",{children:"Duration:"})," ",Math.ceil(n.duration)," s"]}),e.jsxs(o,{variant:d.BODY_MEDIUM,children:[e.jsx("b",{children:"Ended:"})," ",T?"Yes":"No"]}),e.jsxs(o,{variant:d.BODY_MEDIUM,children:[e.jsx("b",{children:"Error:"})," ",R?"Yes":"No"]})]})}),w={args:{...a,size:{width:560},videoUrl:"https://player.vimeo.com/video/239251534?h=adbd4e018d&muted=1",title:"Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry."},render:r=>e.jsx(E,{...r})},b={args:{...a,size:{width:560},videoUrl:"https://www.youtube.com/embed/8u1qiZMJKfc?si=XmKwMUbjPJpPtSsW",title:"Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry."},render:r=>e.jsx(E,{...r})},f={args:{...a,videoUrl:"https://www.ethnographiques.org/IMG/nouveau_mp4/25-Riou01.mp4",size:{width:560,height:315},withEmbeddedPlayer:!1,title:"Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry."},render:r=>e.jsx(E,{...r})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    videoUrl: "https://www.youtube.com/embed/8u1qiZMJKfc?si=XmKwMUbjPJpPtSsW",
    size: {
      width: 560
    },
    titleSize: TitleVariant.TITLE_3,
    title: "Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry."
  },
  render: args => <VideoThumbnail {...args} title={<Title variant={args.titleSize}>{args.title}</Title>} />
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    videoUrl: "https://player.vimeo.com/video/239251534?h=adbd4e018d&muted=1",
    size: {
      width: 560
    },
    title: "Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry."
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    videoUrl: "https://sanofi.sharepoint.com/sites/communicationsteam/_layouts/15/embed.aspx?uniqueId=6ba43435-9fed-440e-8c02-90b7286b31e3",
    imageUrl: \`\${SANOFI_ELEMENTS_CDN_URL}/images/cards-mediasanofi.webp\`,
    size: {
      width: 560
    },
    title: "Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry."
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    videoUrl: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
    imageUrl: \`\${SANOFI_ELEMENTS_CDN_URL}/images/cards-mediasanofi.webp\`,
    size: {
      width: 560
    },
    withEmbeddedPlayer: false,
    title: "Tears of Steel m3u8"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    videoUrl: "https://www.ethnographiques.org/IMG/nouveau_mp4/25-Riou01.mp4",
    imageUrl: \`\${SANOFI_ELEMENTS_CDN_URL}/images/cards-mediasanofi.webp\`,
    size: {
      width: 560,
      height: 315
    },
    withEmbeddedPlayer: false,
    title: "Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry.",
    captions: {
      en: "https://www.ethnographiques.org/IMG/nouveau_mp4/25-Riou01.vtt"
    }
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    videoUrl: "https://www.ethnographiques.org/IMG/nouveau_mp4/25-Riou01.mp4",
    imageUrl: \`\${SANOFI_ELEMENTS_CDN_URL}/images/cards-mediasanofi.webp\`,
    size: {
      width: 560,
      height: 315
    }
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    videoUrl: "https://www.youtube.com/embed/8u1qiZMJKfc?si=XmKwMUbjPJpPtSsW",
    imageUrl: \`\${SANOFI_ELEMENTS_CDN_URL}/images/cards-mediasanofi.webp\`,
    size: {
      width: 560
    },
    title: "Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry."
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: {
      width: 560
    },
    videoUrl: "https://player.vimeo.com/video/239251534?h=adbd4e018d&muted=1",
    title: "Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry."
  },
  render: args => <Test {...args} />
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: {
      width: 560
    },
    videoUrl: "https://www.youtube.com/embed/8u1qiZMJKfc?si=XmKwMUbjPJpPtSsW",
    title: "Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry."
  },
  render: args => <Test {...args} />
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    videoUrl: "https://www.ethnographiques.org/IMG/nouveau_mp4/25-Riou01.mp4",
    size: {
      width: 560,
      height: 315
    },
    withEmbeddedPlayer: false,
    title: "Medical lead Paul Rowe trained to be a surgeon, but realized he could help more people in the world if he pursued a career in industry."
  },
  render: args => <Test {...args} />
}`,...f.parameters?.docs?.source}}};const N=["Default","VimeoVideo","SanofiVideo","StreamingVideo","NoEmbeddedPlayer","NoTitle","DisabledStatus","VimeoVideoTracking","YoutubeVideoTracking","MP4VideoTracking"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:l,DisabledStatus:g,MP4VideoTracking:f,NoEmbeddedPlayer:m,NoTitle:h,SanofiVideo:c,StreamingVideo:p,VimeoVideo:u,VimeoVideoTracking:w,YoutubeVideoTracking:b,__namedExportsOrder:N,default:I},Symbol.toStringTag,{value:"Module"}));export{l as D,k as V};

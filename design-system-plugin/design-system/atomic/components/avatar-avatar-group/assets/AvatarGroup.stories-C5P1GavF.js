import{j as a,r as f,d as A}from"./iframe-DU6-gHk6.js";import{s as x,a as e,A as n}from"./Avatar-DAJEZknH.js";import{T as S,a as y}from"./Tooltip-3ve6LLZH.js";const E=f.memo(({avatar:r,size:o})=>f.cloneElement(r,{size:o})),j=(r,o)=>{const i=r,g=i.key;if(g)return g.toString();const{name:C,image:v}=i.props;return`${C||"avatar"}-${v||""}-${o}`};function t({avatarSize:r,children:o,maxDisplay:i=4,onCounterClick:g}){if(!o)return null;const C=Array.isArray(o)?o.slice(0,i):[],v=Array.isArray(o)?o.length-i:0,T=(s=>s>999?"1k+":s>99?"99+":s.toString())(v);return a.jsxs("div",{className:x["avatar-group"],children:[C.map((s,z)=>a.jsx("div",{className:x["avatar-group-item"],children:a.jsx(E,{avatar:s,size:r})},j(s,z))),v>0&&a.jsx(e,{isCounter:!0,size:r,name:T,onClick:g})]})}try{t.displayName="AvatarGroup",t.__docgenInfo={description:"AvatarGroup component",displayName:"AvatarGroup",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/AvatarGroup/AvatarGroup.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/AvatarGroup/AvatarGroupProps.ts",name:"AvatarGroupProps"}],description:"Additional CSS class.",name:"className",parent:{fileName:"elements-design-system/src/components/AvatarGroup/AvatarGroupProps.ts",name:"AvatarGroupProps"},required:!1,tags:{},type:{name:"string"}},children:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/AvatarGroup/AvatarGroupProps.ts",name:"AvatarGroupProps"}],description:"Avatar components to display.",name:"children",parent:{fileName:"elements-design-system/src/components/AvatarGroup/AvatarGroupProps.ts",name:"AvatarGroupProps"},required:!1,tags:{},type:{name:"ReactNode"}},avatarSize:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/AvatarGroup/AvatarGroupProps.ts",name:"AvatarGroupProps"}],description:"Size for all avatars in the group (required).",name:"avatarSize",parent:{fileName:"elements-design-system/src/components/AvatarGroup/AvatarGroupProps.ts",name:"AvatarGroupProps"},required:!0,tags:{},type:{name:"enum",raw:"AvatarSize",value:[{value:'"x-small"',description:"Extra small (24px) - for inline mentions and dense UIs",fullComment:"Extra small (24px) - for inline mentions and dense UIs",tags:{}},{value:'"small"',description:"Small (32px) - for compact lists and comments",fullComment:"Small (32px) - for compact lists and comments",tags:{}},{value:'"medium"',description:"Medium (40px) - default size for most contexts",fullComment:"Medium (40px) - default size for most contexts",tags:{}},{value:'"large"',description:"Large (48px) - for cards and prominent displays",fullComment:"Large (48px) - for cards and prominent displays",tags:{}},{value:'"x-large"',description:"Extra large (64px) - for profile sections",fullComment:"Extra large (64px) - for profile sections",tags:{}},{value:'"xx-large"',description:"Double extra large (96px) - for hero and profile headers",fullComment:"Double extra large (96px) - for hero and profile headers",tags:{}}]}},maxDisplay:{defaultValue:{value:"4"},declarations:[{fileName:"elements-design-system/src/components/AvatarGroup/AvatarGroupProps.ts",name:"AvatarGroupProps"}],description:`Maximum avatars to show before counter.
Remaining avatars show as "+N" counter.`,name:"maxDisplay",parent:{fileName:"elements-design-system/src/components/AvatarGroup/AvatarGroupProps.ts",name:"AvatarGroupProps"},required:!1,tags:{},type:{name:"number"}},onCounterClick:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/AvatarGroup/AvatarGroupProps.ts",name:"AvatarGroupProps"}],description:"Callback when overflow counter is clicked.",name:"onCounterClick",parent:{fileName:"elements-design-system/src/components/AvatarGroup/AvatarGroupProps.ts",name:"AvatarGroupProps"},required:!1,tags:{},type:{name:"MouseEventHandler<HTMLDivElement>"}}},tags:{component:"",param:`avatarSize - Size of the avatars in the group
children - Avatar components to be displayed in the group
maxDisplay - Maximum number of avatars to display
onCounterClick - Callback function triggered when the counter avatar is clicked`,returns:"The rendered AvatarGroup component or null if no children are provided"}}}catch{}const u=`${A}/images/avatars/avatar-0.png`,h=`${A}/images/avatars/avatar-1.png`,d=`${A}/images/avatars/avatar-2.png`,G=`${A}/images/avatars/avatar-3.png`,N={component:t,title:"Components/Avatar/AvatarGroup",argTypes:{avatarSize:{description:"Avatar size",control:"select",options:Object.values(n)}}},k={},l={args:{...k,avatarSize:n.XLARGE},render:r=>a.jsxs(t,{...r,children:[a.jsx(e,{size:n.XLARGE,image:u,name:"Marie Curie"}),a.jsx(e,{name:"John Doe"})]})},c={args:{...k,avatarSize:n.XLARGE,onCounterClick:()=>{console.log("click on avatar counter")}},render:r=>a.jsxs(t,{...r,children:[a.jsx(e,{size:n.XLARGE,image:u,onClick:()=>{console.log("click")},name:"John Doe"}),a.jsx(e,{name:"John Doe",image:d,onClick:()=>{console.log("click")}}),a.jsx(e,{name:"Rosalind Franklin",image:h,onClick:()=>console.log("click")}),a.jsx(e,{name:"Nikola Tesla",image:G,onClick:()=>console.log("click")})]})},m={args:{...k,avatarSize:n.XLARGE,onCounterClick:()=>{console.log("click on avatar counter")}},render:r=>a.jsxs(t,{...r,children:[a.jsx(e,{name:"Marie Curie",image:u,onClick:()=>console.log("click")}),a.jsx(e,{name:"Alan Turing",image:d,onClick:()=>console.log("click")}),a.jsx(e,{name:"Rosalind Franklin",image:h,onClick:()=>console.log("click")}),a.jsx(e,{name:"Nikola Tesla",image:G,onClick:()=>console.log("click")}),a.jsx(e,{name:"Ada Lovelace",image:d,onClick:()=>console.log("click")}),a.jsx(e,{name:"Albert Einstein",image:G,onClick:()=>console.log("click")}),a.jsx(e,{name:"Grace Hopper",image:u,onClick:()=>console.log("click")})]})},p={args:{...k,avatarSize:n.XLARGE,onCounterClick:()=>{console.log("click on avatar counter")}},render:r=>a.jsxs(t,{...r,children:[a.jsx(S,{position:y.BOTTOM_START,title:"Sandrine Doe",label:"CEO",children:a.jsx(e,{size:n.XLARGE,image:u,onClick:()=>{console.log("click")},name:"Sandrine Doe"})}),a.jsx(S,{position:y.BOTTOM_START,title:"Nicolas Doe",label:"CHO",children:a.jsx(e,{name:"Nicolas Doe",image:d,size:n.XLARGE,onClick:()=>{console.log("click")}})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    avatarSize: AvatarSize.XLARGE
  },
  render: args => <AvatarGroup {...args}>
      <Avatar size={AvatarSize.XLARGE} image={avatarImage} name="Marie Curie" />
      <Avatar name="John Doe" />
    </AvatarGroup>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    avatarSize: AvatarSize.XLARGE,
    onCounterClick: () => {
      console.log("click on avatar counter");
    }
  },
  render: args => <AvatarGroup {...args}>
      <Avatar size={AvatarSize.XLARGE} image={avatarImage} onClick={() => {
      console.log("click");
    }} name="John Doe" />

      <Avatar name="John Doe" image={avatarImage3} onClick={() => {
      console.log("click");
    }} />
      <Avatar name="Rosalind Franklin" image={avatarImage2} onClick={() => console.log("click")} />
      <Avatar name="Nikola Tesla" image={avatarImage4} onClick={() => console.log("click")} />
    </AvatarGroup>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    avatarSize: AvatarSize.XLARGE,
    onCounterClick: () => {
      console.log("click on avatar counter");
    }
  },
  render: args => <AvatarGroup {...args}>
      <Avatar name="Marie Curie" image={avatarImage} onClick={() => console.log("click")} />
      <Avatar name="Alan Turing" image={avatarImage3} onClick={() => console.log("click")} />
      <Avatar name="Rosalind Franklin" image={avatarImage2} onClick={() => console.log("click")} />
      <Avatar name="Nikola Tesla" image={avatarImage4} onClick={() => console.log("click")} />
      <Avatar name="Ada Lovelace" image={avatarImage3} onClick={() => console.log("click")} />
      <Avatar name="Albert Einstein" image={avatarImage4} onClick={() => console.log("click")} />
      <Avatar name="Grace Hopper" image={avatarImage} onClick={() => console.log("click")} />
    </AvatarGroup>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    avatarSize: AvatarSize.XLARGE,
    onCounterClick: () => {
      console.log("click on avatar counter");
    }
  },
  render: args => <AvatarGroup {...args}>
      <Tooltip position={TooltipPosition.BOTTOM_START} title="Sandrine Doe" label="CEO">
        <Avatar size={AvatarSize.XLARGE} image={avatarImage} onClick={() => {
        console.log("click");
      }} name="Sandrine Doe" />
      </Tooltip>
      <Tooltip position={TooltipPosition.BOTTOM_START} title="Nicolas Doe" label="CHO">
        <Avatar name="Nicolas Doe" image={avatarImage3} size={AvatarSize.XLARGE} onClick={() => {
        console.log("click");
      }} />
      </Tooltip>
    </AvatarGroup>
}`,...p.parameters?.docs?.source}}};const R=["AvatarGroupTwoItems","AvatarGroupWithoutCounter","AvatarGroupWithCounter","AvatarGroupWithTooltips"],_=Object.freeze(Object.defineProperty({__proto__:null,AvatarGroupTwoItems:l,AvatarGroupWithCounter:m,AvatarGroupWithTooltips:p,AvatarGroupWithoutCounter:c,__namedExportsOrder:R,default:N},Symbol.toStringTag,{value:"Module"}));export{_ as A,l as a,m as b};

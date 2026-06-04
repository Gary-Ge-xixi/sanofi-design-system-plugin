import{j as m}from"./iframe-DU6-gHk6.js";import{V as t,S as g,P as l}from"./Pagination-Bl58gOWE.js";const{useArgs:A}=__STORYBOOK_MODULE_PREVIEW_API__,C={component:l,title:"Components/Pagination",argTypes:{currentPage:{description:"Current page",control:{type:"number"}},totalPages:{description:"Total number of pages",control:{type:"number"}},onPageChange:{description:"Callback when page is changed",action:"onPageChange"},sizeVariant:{description:"Size variant",control:{type:"select",options:Object.values(g)}},variant:{description:"Pagination mode",control:{type:"select",options:Object.values(t)}},showLabelsOnDesktop:{description:"Show labels on desktop",control:{type:"boolean"}},showFirstAndLastPageButtons:{description:"Show first and last page buttons",control:{type:"boolean"}}}},a={totalPages:10,sizeVariant:g.DEFAULT,variant:t.STANDARD,showLabelsOnDesktop:!1,showFirstAndLastPageButtons:!1,"aria-label":"Pagination"},e={args:{...a,totalPages:10,sizeVariant:g.DEFAULT,showLabelsOnDesktop:!1,showFirstAndLastPageButtons:!1}},s={args:{...a,sizeVariant:g.DEFAULT}},r={args:{...a},render:function(u){const[,p]=A();return m.jsx(l,{...u,currentPage:u.currentPage,totalPages:17,onPageChange:(d,P)=>{console.log("You also have access to the object event",d),p({currentPage:P})}})}},n={args:{...a,totalPages:17,variant:t.COMPACT}},o={args:{...a,totalPages:17,variant:t.COMPACT,showFirstAndLastPageButtons:!0}},i={args:{...a,totalPages:17,variant:t.COMPACT_WITH_INPUT}},c={args:{...a,totalPages:17,variant:t.COMPACT_WITH_INPUT,showFirstAndLastPageButtons:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    totalPages: 10,
    sizeVariant: SizeVariant.DEFAULT,
    showLabelsOnDesktop: false,
    showFirstAndLastPageButtons: false
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    sizeVariant: SizeVariant.DEFAULT
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs<{
      currentPage: number;
    }>();
    return <Pagination {...args} currentPage={args.currentPage} totalPages={17} onPageChange={(e, page) => {
      console.log("You also have access to the object event", e);
      updateArgs({
        currentPage: page
      });
    }} />;
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    totalPages: 17,
    variant: Variant.COMPACT
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    totalPages: 17,
    variant: Variant.COMPACT,
    showFirstAndLastPageButtons: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    totalPages: 17,
    variant: Variant.COMPACT_WITH_INPUT
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    totalPages: 17,
    variant: Variant.COMPACT_WITH_INPUT,
    showFirstAndLastPageButtons: true
  }
}`,...c.parameters?.docs?.source}}};const h=["Default","Mobile","Controlled","Compact","CompactWithFirstAndLastButtons","CompactWithInput","CompactWithInputAndFirstLastButtons"],L=Object.freeze(Object.defineProperty({__proto__:null,Compact:n,CompactWithFirstAndLastButtons:o,CompactWithInput:i,CompactWithInputAndFirstLastButtons:c,Controlled:r,Default:e,Mobile:s,__namedExportsOrder:h,default:C},Symbol.toStringTag,{value:"Module"}));export{n as C,e as D,s as M,L as P,i as a,o as b,c};

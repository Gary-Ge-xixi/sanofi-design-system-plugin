import{r as x,j as e,o as j,B as d,I as f,e as p,i as u}from"./iframe-DU6-gHk6.js";import{I as M}from"./chunk-ASKQZAOS-CeThVdo_.js";import{u as T}from"./use-get-sanofi-logo-BZJA-8-R.js";import{G as a}from"./index-Bre8NiPo.js";import{R as C}from"./Root-Huh62Yik.js";import{S as y,A as L,Q as S,R as N}from"./Root-CzMrz5Ti.js";import{I as A}from"./Item-C6He82Yo.js";import{B as g}from"./ButtonIcon-B-F3gh4N.js";import{I as _}from"./Image-BdGhIV8F.js";import{T as R}from"./Title-CJ2vhDvM.js";import{I as w}from"./Item-b2xfPeij.js";import{T as E}from"./Trigger-C5W1dumA.js";const H={"feature-content":"_feature-content_r21qh_2"},l=x.forwardRef(function({children:n,className:m,...I},h){return e.jsx("div",{ref:h,className:j(H["feature-content"],m),...I,children:n})});try{l.displayName="FeatureContent",l.__docgenInfo={description:"",displayName:"FeatureContent",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/NavigationHeader/CascadingMenu/FeatureContent/FeatureContent.tsx",methods:[],props:{},tags:{}}}catch{}const{userEvent:b,within:k}=__STORYBOOK_MODULE_TEST__,t={Root:N,Item:w,FeatureContent:l},s={Trigger:E,Title:R},o={Root:C,Action:L,Item:A,QuickAction:S,StartContent:y},B={title:"Components/CascadingMenu",parameters:{viewport:{viewports:M}}},v=()=>e.jsxs(a.Root,{children:[e.jsx(a.Item,{md:8,children:e.jsx(a.Root,{children:e.jsx(t.Root,{children:e.jsxs(a.Item,{sm:12,md:4,children:[e.jsx(s.Title,{as:"a",href:"#",isLink:!0,children:"Menu - Level 1"}),e.jsx(t.Item,{label:"Item - Level 1-1","data-testid":"item-level-1-1",children:e.jsxs(a.Item,{sm:12,md:4,children:[e.jsx(s.Title,{children:"Menu - Level 2"}),e.jsx(t.Item,{label:"Item - Level 2-1","data-testid":"item-level-2-1",children:e.jsxs(a.Item,{sm:12,md:4,children:[e.jsx(s.Title,{children:"Menu - Level 3"}),e.jsx(t.Item,{as:"a",label:"Item - Level 3-1",href:"#link-3-1"}),e.jsx(t.Item,{as:"a",label:"Item - Level 3-2",href:"#link-3-2"}),e.jsx(t.Item,{as:"a",label:"Item - Level 3-3",href:"#link-3-3"})]})})]})}),e.jsx(t.Item,{label:"Item - Level 1-2",children:e.jsxs(a.Item,{sm:12,children:[e.jsx(s.Title,{children:"Menu - Level 2"}),e.jsx(u,{variant:"body-medium",children:"Hello this is my Featured content 2"})]})}),e.jsx(t.Item,{label:"Item - Level 1-3",disabled:!0})]})})})}),e.jsx(a.Item,{md:4,children:e.jsxs(t.FeatureContent,{"data-testid":"content",children:[e.jsx(s.Title,{children:"Featured content"}),e.jsx(u,{variant:"body-medium",children:"Hello this is my Featured content 1"})]})})]}),r={render:()=>{const i=T();return e.jsxs(o.Root,{sticky:!0,logo:e.jsx(_,{src:i,alt:"Sanofi logo"}),mobileMenuIcon:e.jsx(s.Trigger,{menuContent:e.jsx(v,{}),hasActiveShadow:!1,children:e.jsx(g,{icon:"menu",size:d.SMALL,variant:p.TERTIARY,"data-testid":"button"})}),children:[e.jsxs(o.StartContent,{children:[e.jsx(o.Item,{children:e.jsx(s.Trigger,{menuContent:e.jsx(v,{}),children:e.jsx(o.Action,{"data-testid":"item1",children:"Nav Item"})})}),e.jsx(o.Item,{children:e.jsx(o.Action,{children:"Nav Item"})})]}),e.jsx(o.QuickAction,{children:e.jsx(g,{icon:f.SEARCH,size:d.SMALL,inverse:!0})})]})},play:async({canvasElement:i})=>{const n=k(i);await c(n,"item1"),await c(n,"item-level-1-1"),await c(n,"item-level-2-1"),await c(n,"content")}},c=async(i,n)=>{await new Promise(m=>setTimeout(async()=>{await b.click(await i.findByTestId(n)),setTimeout(m,500)}))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sanofiLogo = useGetSanofiLogo();
    return <NavigationHeader.Root sticky={true} logo={<Image src={sanofiLogo} alt="Sanofi logo" />} mobileMenuIcon={<MegaMenu.Trigger menuContent={<MyCustomMegaMenuWithCascading />} hasActiveShadow={false}>
            <ButtonIcon icon="menu" size={ButtonSize.SMALL} variant={ButtonVariant.TERTIARY} data-testid="button" />
          </MegaMenu.Trigger>}>
        <NavigationHeader.StartContent>
          <NavigationHeader.Item>
            <MegaMenu.Trigger menuContent={<MyCustomMegaMenuWithCascading />}>
              <NavigationHeader.Action data-testid="item1">
                Nav Item
              </NavigationHeader.Action>
            </MegaMenu.Trigger>
          </NavigationHeader.Item>
          <NavigationHeader.Item>
            <NavigationHeader.Action>Nav Item</NavigationHeader.Action>
          </NavigationHeader.Item>
        </NavigationHeader.StartContent>
        <NavigationHeader.QuickAction>
          <ButtonIcon icon={IconName.SEARCH} size={ButtonSize.SMALL} inverse />
        </NavigationHeader.QuickAction>
      </NavigationHeader.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await findElements(canvas, "item1");
    await findElements(canvas, "item-level-1-1");
    await findElements(canvas, "item-level-2-1");
    await findElements(canvas, "content");
  }
}`,...r.parameters?.docs?.source}}};const F=["Example"],U=Object.freeze(Object.defineProperty({__proto__:null,Example:r,__namedExportsOrder:F,default:B},Symbol.toStringTag,{value:"Module"}));export{U as C};

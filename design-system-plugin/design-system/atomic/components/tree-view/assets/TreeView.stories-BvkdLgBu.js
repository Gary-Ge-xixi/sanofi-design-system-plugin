import{j as e,H as c,I as a,r as u,o as G,i as I,k as P,p as b,E as J,y as Q}from"./iframe-DU6-gHk6.js";import{c as X}from"./Tree-BmWuJSW4.js";import{c as Z,d as ee,b as i,e as re,s as E,f as m}from"./TreeViewContext-eI28ELps.js";import{T as ne}from"./TreeViewItem-C23PZvtn.js";import{T as se}from"./TreeViewLeadingVisual-DdBGGR9a.js";import{T as ie}from"./TreeViewSubTree-CM_CDImm.js";import{T as ae}from"./TreeViewTrailingVisual-D_cN4gIy.js";import{S as o,u as te}from"./Sidebar-BBfcyokp.js";import{T as k,a as B,b as W,d as M}from"./Tag-DcJEYfKI.js";import{I as z}from"./Image-BdGhIV8F.js";const L=()=>{const{isExpanded:n}=Z();return e.jsx(c,{name:n?a.FOLDER_OPEN:a.FOLDER,size:1,filled:!1})};try{L.displayName="TreeViewDirectoryIcon",L.__docgenInfo={description:`Auto-switching folder icon: shows folder-open when expanded, folder when collapsed.
Must be used inside a TreeView.LeadingVisual.`,displayName:"TreeViewDirectoryIcon",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/TreeView/TreeViewDirectoryIcon.tsx",methods:[],props:{},tags:{}}}catch{}function r({children:n,decoration:s=i.NONE,colorAccent:N=m.BRANDED,showNodeLines:l=!1,expandedKeys:p,defaultExpandedKeys:U,onExpandedChange:A,className:H,...D}){const[$,v]=u.useState(()=>new Set(U??[])),T=p??$,{registerAction:O,unregisterAction:_,handleAction:C}=ee(),R=u.useCallback(t=>{p||v(t),A?.(t)},[p,A]),F=u.useCallback(t=>{p||v(j=>j.has(t)?j:new Set([...j,t]))},[p]),K=u.useCallback(t=>{if(!C(t)){const S=new Set(T);S.has(t)?S.delete(t):S.add(t),R(S)}},[C,T,R]),Y=u.useMemo(()=>({decoration:s,showNodeLines:l,expandedKeys:T,registerAction:O,unregisterAction:_,registerDefaultExpanded:F}),[s,l,T,O,_,F]);return e.jsx(re.Provider,{value:Y,children:e.jsx(X,{"aria-label":D["aria-label"],"aria-labelledby":D["aria-labelledby"],className:G(E.treeView,E[N],H,{[E.showNodeLines]:l,[E[s]]:s!==i.NONE}),expandedKeys:T,onExpandedChange:R,onAction:K,children:n})})}r.Item=ne;r.SubTree=ie;r.LeadingVisual=se;r.TrailingVisual=ae;r.DirectoryIcon=L;try{r.displayName="TreeView",r.__docgenInfo={description:"",displayName:"TreeView",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/TreeView/TreeView.tsx",methods:[],props:{children:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"}],description:"TreeView.Item nodes.",name:"children",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"},required:!0,tags:{},type:{name:"ReactNode"}},decoration:{defaultValue:{value:"TreeViewDecoration.NONE"},declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"}],description:"Visual decoration style (arrows, folders, etc.).",name:"decoration",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"},required:!1,tags:{default:"TreeViewDecoration.ARROW"},type:{name:"enum",raw:"TreeViewDecoration",value:[{value:'"none"',description:"Flat list, no arrow, no leading icon",fullComment:"Flat list, no arrow, no leading icon",tags:{}},{value:'"arrow"',description:"Chevron arrow for expand/collapse",fullComment:"Chevron arrow for expand/collapse",tags:{}},{value:'"folder"',description:"Folder/document icons only, no arrow",fullComment:"Folder/document icons only, no arrow",tags:{}},{value:'"arrowFolder"',description:"Arrow + automatic folder/document icons",fullComment:"Arrow + automatic folder/document icons",tags:{}}]}},colorAccent:{defaultValue:{value:"TreeViewColorAccent.BRANDED"},declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"}],description:"Color accent for hover/selected backgrounds.",name:"colorAccent",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"},required:!1,tags:{default:"TreeViewColorAccent.BRANDED"},type:{name:"enum",raw:"TreeViewColorAccent",value:[{value:'"branded"',description:"Brand-tinted background",fullComment:"Brand-tinted background",tags:{}},{value:'"neutral"',description:"Neutral semi-transparent overlay",fullComment:"Neutral semi-transparent overlay",tags:{}}]}},showNodeLines:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"}],description:"Shows vertical connector lines between nodes.",name:"showNodeLines",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},expandedKeys:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"}],description:"Controlled set of expanded node keys.",name:"expandedKeys",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"},required:!1,tags:{},type:{name:"Set<TreeViewKey>"}},defaultExpandedKeys:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"}],description:"Default expanded keys (uncontrolled mode).",name:"defaultExpandedKeys",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"},required:!1,tags:{},type:{name:"Set<TreeViewKey>"}},onExpandedChange:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"}],description:"Callback fired when expanded keys change.",name:"onExpandedChange",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"},required:!1,tags:{},type:{name:"((keys: Set<TreeViewKey>) => void)"}},"aria-label":{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"}],description:"Accessible label for the tree.",name:"aria-label",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"},required:!1,tags:{},type:{name:"string"}},"aria-labelledby":{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"}],description:"Reference to element providing accessible label.",name:"aria-labelledby",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"},required:!1,tags:{},type:{name:"string"}},className:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"}],description:"Additional CSS class.",name:"className",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewProps"},required:!1,tags:{},type:{name:"string"}}},tags:{component:"TreeView",description:"The tree view component",param:`children - TreeView.Item nodes
decoration - Visual decoration style (none, arrow, folder, arrowFolder)
colorAccent - Color accent for hover/selected backgrounds
showNodeLines - Show vertical/branch node line connectors
expandedKeys - Controlled expanded state
defaultExpandedKeys - Default expanded keys (uncontrolled)
onExpandedChange - Called when expanded keys change
aria-label - Accessible label for the tree
aria-labelledby - Reference to element providing accessible label
className - Additional CSS class`}}}catch{}try{r.Item.displayName="TreeView.Item",r.Item.__docgenInfo={description:"",displayName:"TreeView.Item",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/TreeView/TreeView.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewItemProps"}],description:"Unique node identifier (used for expand state tracking).",name:"id",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewItemProps"},required:!0,tags:{},type:{name:"string"}},children:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewItemProps"}],description:"Label text and optional LeadingVisual/TrailingVisual/SubTree.",name:"children",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewItemProps"},required:!0,tags:{},type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewItemProps"}],description:"Disables the item.",name:"disabled",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewItemProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},current:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewItemProps"}],description:"Marks this as the currently active/selected item.",name:"current",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewItemProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},defaultExpanded:{defaultValue:{value:"false"},declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewItemProps"}],description:"Initial expanded state (uncontrolled).",name:"defaultExpanded",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewItemProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}},onSelect:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewItemProps"}],description:`Callback fired when the label is clicked/activated.
Independent from expand/collapse (chevron handles that).
If not provided, clicking the label toggles expand/collapse.`,name:"onSelect",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewItemProps"},required:!1,tags:{},type:{name:"(() => void)"}},className:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewItemProps"}],description:"Additional CSS class.",name:"className",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewItemProps"},required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}try{r.SubTree.displayName="TreeView.SubTree",r.SubTree.__docgenInfo={description:`Container for nested TreeView.Item nodes.
This is a marker component -- the actual rendering is handled
by TreeViewItem which detects SubTree children and wraps them
in a react-aria Collection.`,displayName:"TreeView.SubTree",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/TreeView/TreeView.tsx",methods:[],props:{children:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewSubTreeProps"}],description:"Nested TreeView.Item nodes.",name:"children",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewSubTreeProps"},required:!1,tags:{},type:{name:"ReactNode"}}},tags:{}}}catch{}try{r.LeadingVisual.displayName="TreeView.LeadingVisual",r.LeadingVisual.__docgenInfo={description:"",displayName:"TreeView.LeadingVisual",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/TreeView/TreeView.tsx",methods:[],props:{children:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewLeadingVisualProps"}],description:"Icon or render function receiving expanded state.",name:"children",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewLeadingVisualProps"},required:!0,tags:{},type:{name:"ReactNode | ((props: { isExpanded: boolean; }) => ReactNode)"}},label:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewLeadingVisualProps"}],description:"Accessible label for the visual element.",name:"label",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewLeadingVisualProps"},required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}try{r.TrailingVisual.displayName="TreeView.TrailingVisual",r.TrailingVisual.__docgenInfo={description:"",displayName:"TreeView.TrailingVisual",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/TreeView/TreeView.tsx",methods:[],props:{children:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewTrailingVisualProps"}],description:"Badge, icon, status, or render function receiving expanded state.",name:"children",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewTrailingVisualProps"},required:!0,tags:{},type:{name:"ReactNode | ((props: { isExpanded: boolean; }) => ReactNode)"}},label:{defaultValue:null,declarations:[{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewTrailingVisualProps"}],description:'Accessible label describing the visual (e.g., "Modified", "3 errors").',name:"label",parent:{fileName:"elements-design-system/src/components/TreeView/TreeViewProps.ts",name:"TreeViewTrailingVisualProps"},required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}try{r.DirectoryIcon.displayName="TreeView.DirectoryIcon",r.DirectoryIcon.__docgenInfo={description:`Auto-switching folder icon: shows folder-open when expanded, folder when collapsed.
Must be used inside a TreeView.LeadingVisual.`,displayName:"TreeView.DirectoryIcon",filePath:"/home/runner/work/elements-design-system/elements-design-system/src/components/TreeView/TreeView.tsx",methods:[],props:{},tags:{}}}catch{}const oe={title:"Components/TreeView",component:r,decorators:[n=>e.jsx("div",{style:{maxInlineSize:320},children:e.jsx(n,{})})],argTypes:{decoration:{options:Object.values(i),control:{type:"select"}},colorAccent:{options:Object.values(m),control:{type:"select"}},showNodeLines:{control:"boolean"}}},w={args:{"aria-label":"Repository files",decoration:i.ARROW_FOLDER,showNodeLines:!0},render:n=>e.jsxs(r,{...n,children:[e.jsxs(r.Item,{id:".github",children:[".github",e.jsx(r.SubTree,{children:e.jsxs(r.Item,{id:".github/workflows",children:["workflows",e.jsx(r.SubTree,{children:e.jsx(r.Item,{id:".github/workflows/ci.yml",children:"ci.yml"})})]})})]}),e.jsxs(r.Item,{id:"src",defaultExpanded:!0,children:["src",e.jsxs(r.SubTree,{children:[e.jsxs(r.Item,{id:"src/components",defaultExpanded:!0,children:["components",e.jsxs(r.SubTree,{children:[e.jsxs(r.Item,{id:"src/components/Button.tsx",children:["Button.tsx",e.jsx(r.TrailingVisual,{label:"Modified",children:e.jsx(k,{color:M.YELLOW,variant:W.SUBTLE,size:B.SM,children:"Modified"})})]}),e.jsx(r.Item,{id:"src/components/Card.tsx",children:"Card.tsx"}),e.jsxs(r.Item,{id:"src/components/TreeView.tsx",children:["TreeView.tsx",e.jsx(r.TrailingVisual,{label:"Added",children:e.jsx(k,{color:M.GREEN,variant:W.SUBTLE,size:B.SM,children:"Added"})})]})]})]}),e.jsx(r.Item,{id:"src/index.ts",children:"index.ts"})]})]}),e.jsx(r.Item,{id:"package.json",children:"package.json"}),e.jsx(r.Item,{id:"README.md",children:"README.md"})]})},d=({decoration:n,label:s,showNodeLines:N=!1})=>{const l=`${s}${N?"-nl":""}`;return e.jsxs("div",{style:{padding:"var(--elements-spacing-md)",borderRadius:"var(--elements-radius-md)",border:"var(--elements-shape-borderwidth-thin) solid var(--elements-color-semantic-border-default)"},children:[e.jsx(I,{variant:b.EYEBROW_SMALL,color:P.SUBTLE,style:{marginBlockEnd:"var(--elements-spacing-sm)"},children:s}),e.jsxs(r,{"aria-label":`${s} tree`,decoration:n,showNodeLines:N,children:[e.jsxs(r.Item,{id:`${l}-src`,defaultExpanded:!0,children:["src",e.jsxs(r.SubTree,{children:[e.jsxs(r.Item,{id:`${l}-components`,children:["components",e.jsx(r.SubTree,{children:e.jsx(r.Item,{id:`${l}-button`,children:"Button.tsx"})})]}),e.jsx(r.Item,{id:`${l}-index`,children:"index.ts"})]})]}),e.jsx(r.Item,{id:`${l}-readme`,children:"README.md"})]})]})},V={decorators:[n=>e.jsx("div",{style:{maxInlineSize:800},children:e.jsx(n,{})})],render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--elements-spacing-2xl)"},children:[e.jsxs("div",{children:[e.jsx(I,{variant:b.BODY_MEDIUM,style:{marginBlockEnd:"var(--elements-spacing-md)"},children:"Without node lines"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--elements-spacing-md)"},children:[e.jsx(d,{decoration:i.NONE,label:"NONE"}),e.jsx(d,{decoration:i.ARROW,label:"ARROW"}),e.jsx(d,{decoration:i.FOLDER,label:"FOLDER"}),e.jsx(d,{decoration:i.ARROW_FOLDER,label:"ARROW_FOLDER"})]})]}),e.jsxs("div",{children:[e.jsx(I,{variant:b.BODY_MEDIUM,style:{marginBlockEnd:"var(--elements-spacing-md)"},children:"With node lines"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--elements-spacing-md)"},children:[e.jsx(d,{decoration:i.NONE,label:"NONE",showNodeLines:!0}),e.jsx(d,{decoration:i.ARROW,label:"ARROW",showNodeLines:!0}),e.jsx(d,{decoration:i.FOLDER,label:"FOLDER",showNodeLines:!0}),e.jsx(d,{decoration:i.ARROW_FOLDER,label:"ARROW_FOLDER",showNodeLines:!0})]})]})]})},g={args:{"aria-label":"Settings tree",decoration:i.ARROW_FOLDER},render:n=>e.jsxs(r,{...n,children:[e.jsxs(r.Item,{id:"account",defaultExpanded:!0,children:[e.jsx(r.LeadingVisual,{children:e.jsx(c,{name:a.PERSON,size:1,filled:!1})}),"Account",e.jsxs(r.SubTree,{children:[e.jsxs(r.Item,{id:"security",defaultExpanded:!0,children:[e.jsx(r.LeadingVisual,{children:e.jsx(c,{name:a.SHIELD,size:1,filled:!1})}),"Security",e.jsxs(r.SubTree,{children:[e.jsxs(r.Item,{id:"passwords",children:[e.jsx(r.LeadingVisual,{children:e.jsx(c,{name:a.KEY,size:1,filled:!1})}),"Passwords"]}),e.jsxs(r.Item,{id:"two-factor",children:[e.jsx(r.LeadingVisual,{children:e.jsx(c,{name:a.FINGERPRINT,size:1,filled:!1})}),"Two-Factor Auth"]})]})]}),e.jsxs(r.Item,{id:"notifications",children:[e.jsx(r.LeadingVisual,{children:e.jsx(c,{name:a.NOTIFICATIONS,size:1,filled:!1})}),"Notifications"]})]})]}),e.jsxs(r.Item,{id:"help",children:[e.jsx(r.LeadingVisual,{children:e.jsx(c,{name:a.HELP,size:1,filled:!1})}),"Help"]})]})},le=n=>{const{isCollapsed:s}=te();return s?e.jsx(o.Item,{icon:a.FOLDER,tooltip:"Project Files",children:"Project Files"}):e.jsx(o.Section,{title:"Project Files",children:e.jsxs(r,{"aria-label":"Project files",...n,children:[e.jsxs(r.Item,{id:"sidebar-src",defaultExpanded:!0,children:["src",e.jsxs(r.SubTree,{children:[e.jsxs(r.Item,{id:"sidebar-components",defaultExpanded:!0,children:["components",e.jsxs(r.SubTree,{children:[e.jsx(r.Item,{id:"sidebar-button",children:"Button.tsx"}),e.jsx(r.Item,{id:"sidebar-card",children:"Card.tsx"})]})]}),e.jsxs(r.Item,{id:"sidebar-hooks",children:["hooks",e.jsx(r.SubTree,{children:e.jsx(r.Item,{id:"sidebar-use-theme",children:"useTheme.ts"})})]}),e.jsx(r.Item,{id:"sidebar-index",children:"index.ts"})]})]}),e.jsx(r.Item,{id:"sidebar-readme",children:"README.md"})]})})},f={args:{"aria-label":"Project files",decoration:i.ARROW_FOLDER,colorAccent:m.NEUTRAL},decorators:[],parameters:{layout:"fullscreen"},render:n=>e.jsxs(o.Root,{collapsible:!0,defaultCollapsed:!1,children:[e.jsx(o.Header,{logo:{expanded:e.jsx(z,{src:Q??"",alt:"Logo"}),collapsed:e.jsx(z,{src:J??"",alt:"Logo"})}}),e.jsxs(o.Content,{children:[e.jsxs(o.Section,{title:"Navigation",children:[e.jsx(o.Item,{icon:a.HOME,tooltip:"Home",children:"Home"}),e.jsx(o.Item,{icon:a.ANALYTICS,tooltip:"Analytics",children:"Analytics"})]}),e.jsx(le,{decoration:n.decoration,colorAccent:n.colorAccent,showNodeLines:n.showNodeLines})]}),e.jsx(o.Footer,{children:e.jsx(o.Item,{icon:a.SETTINGS,tooltip:"Settings",children:"Settings"})})]})},q=({colorAccent:n,label:s})=>e.jsxs("div",{style:{padding:"var(--elements-spacing-md)",borderRadius:"var(--elements-radius-md)",border:"var(--elements-shape-borderwidth-thin) solid var(--elements-color-semantic-border-default)"},children:[e.jsx(I,{variant:b.EYEBROW_SMALL,color:P.SUBTLE,style:{marginBlockEnd:"var(--elements-spacing-sm)"},children:s}),e.jsxs(r,{"aria-label":`${s} tree`,decoration:i.ARROW_FOLDER,colorAccent:n,children:[e.jsxs(r.Item,{id:`${s}-src`,defaultExpanded:!0,children:["src",e.jsxs(r.SubTree,{children:[e.jsxs(r.Item,{id:`${s}-components`,children:["components",e.jsx(r.SubTree,{children:e.jsx(r.Item,{id:`${s}-button`,children:"Button.tsx"})})]}),e.jsx(r.Item,{id:`${s}-index`,children:"index.ts"})]})]}),e.jsx(r.Item,{id:`${s}-readme`,children:"README.md"})]})]}),h={decorators:[n=>e.jsx("div",{style:{maxInlineSize:640},children:e.jsx(n,{})})],render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--elements-spacing-md)"},children:[e.jsx(I,{variant:b.BODY_SMALL,color:P.SUBTLE,children:"Hover or select an item to see the difference between the two accents."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--elements-spacing-md)"},children:[e.jsx(q,{colorAccent:m.BRANDED,label:"BRANDED"}),e.jsx(q,{colorAccent:m.NEUTRAL,label:"NEUTRAL"})]})]})},x={args:{"aria-label":"شجرة الملفات",decoration:i.ARROW_FOLDER},decorators:[n=>e.jsx("div",{dir:"rtl",style:{maxInlineSize:320},children:e.jsx(n,{})})],render:n=>e.jsxs(r,{...n,children:[e.jsxs(r.Item,{id:"documents",defaultExpanded:!0,children:["المستندات",e.jsxs(r.SubTree,{children:[e.jsxs(r.Item,{id:"reports",defaultExpanded:!0,children:["التقارير",e.jsxs(r.SubTree,{children:[e.jsx(r.Item,{id:"q1-report",children:"تقرير الربع الأول"}),e.jsx(r.Item,{id:"q2-report",children:"تقرير الربع الثاني"})]})]}),e.jsxs(r.Item,{id:"presentations",children:["العروض التقديمية",e.jsx(r.SubTree,{children:e.jsx(r.Item,{id:"product-deck",children:"عرض المنتج"})})]})]})]}),e.jsxs(r.Item,{id:"images",children:["الصور",e.jsxs(r.SubTree,{children:[e.jsx(r.Item,{id:"photo-1",children:"صورة ١"}),e.jsx(r.Item,{id:"photo-2",children:"صورة ٢"})]})]})]})},y={args:{"aria-label":"Playground tree",decoration:i.ARROW_FOLDER,colorAccent:m.BRANDED,showNodeLines:!1},render:n=>e.jsxs(r,{...n,children:[e.jsxs(r.Item,{id:"parent-1",defaultExpanded:!0,children:["Parent 1",e.jsxs(r.SubTree,{children:[e.jsxs(r.Item,{id:"child-1-1",children:["Child 1-1",e.jsx(r.TrailingVisual,{children:e.jsx(c,{name:a.INFO,size:.75})})]}),e.jsx(r.Item,{id:"child-1-2",children:"Child 1-2"}),e.jsx(r.Item,{id:"child-1-3",disabled:!0,children:"Child 1-3 (disabled)"})]})]}),e.jsxs(r.Item,{id:"parent-2",children:["Parent 2",e.jsx(r.SubTree,{children:e.jsx(r.Item,{id:"child-2-1",children:"Child 2-1"})})]}),e.jsx(r.Item,{id:"leaf",children:"Leaf Item"})]})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Repository files",
    decoration: TreeViewDecoration.ARROW_FOLDER,
    showNodeLines: true
  },
  render: args => <TreeView {...args}>
      <TreeView.Item id=".github">
        .github
        <TreeView.SubTree>
          <TreeView.Item id=".github/workflows">
            workflows
            <TreeView.SubTree>
              <TreeView.Item id=".github/workflows/ci.yml">
                ci.yml
              </TreeView.Item>
            </TreeView.SubTree>
          </TreeView.Item>
        </TreeView.SubTree>
      </TreeView.Item>
      <TreeView.Item id="src" defaultExpanded>
        src
        <TreeView.SubTree>
          <TreeView.Item id="src/components" defaultExpanded>
            components
            <TreeView.SubTree>
              <TreeView.Item id="src/components/Button.tsx">
                Button.tsx
                <TreeView.TrailingVisual label="Modified">
                  <Tag color={TagCategoricalColor.YELLOW} variant={TagVariant.SUBTLE} size={TagSize.SM}>
                    Modified
                  </Tag>
                </TreeView.TrailingVisual>
              </TreeView.Item>
              <TreeView.Item id="src/components/Card.tsx">
                Card.tsx
              </TreeView.Item>
              <TreeView.Item id="src/components/TreeView.tsx">
                TreeView.tsx
                <TreeView.TrailingVisual label="Added">
                  <Tag color={TagCategoricalColor.GREEN} variant={TagVariant.SUBTLE} size={TagSize.SM}>
                    Added
                  </Tag>
                </TreeView.TrailingVisual>
              </TreeView.Item>
            </TreeView.SubTree>
          </TreeView.Item>
          <TreeView.Item id="src/index.ts">index.ts</TreeView.Item>
        </TreeView.SubTree>
      </TreeView.Item>
      <TreeView.Item id="package.json">package.json</TreeView.Item>
      <TreeView.Item id="README.md">README.md</TreeView.Item>
    </TreeView>
}`,...w.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    maxInlineSize: 800
  }}>
        <Story />
      </div>],
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--elements-spacing-2xl)"
  }}>
      <div>
        <Typography variant={TypographyVariant.BODY_MEDIUM} style={{
        marginBlockEnd: "var(--elements-spacing-md)"
      }}>
          Without node lines
        </Typography>
        <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--elements-spacing-md)"
      }}>
          <DecorationTree decoration={TreeViewDecoration.NONE} label="NONE" />
          <DecorationTree decoration={TreeViewDecoration.ARROW} label="ARROW" />
          <DecorationTree decoration={TreeViewDecoration.FOLDER} label="FOLDER" />
          <DecorationTree decoration={TreeViewDecoration.ARROW_FOLDER} label="ARROW_FOLDER" />
        </div>
      </div>

      <div>
        <Typography variant={TypographyVariant.BODY_MEDIUM} style={{
        marginBlockEnd: "var(--elements-spacing-md)"
      }}>
          With node lines
        </Typography>
        <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--elements-spacing-md)"
      }}>
          <DecorationTree decoration={TreeViewDecoration.NONE} label="NONE" showNodeLines />
          <DecorationTree decoration={TreeViewDecoration.ARROW} label="ARROW" showNodeLines />
          <DecorationTree decoration={TreeViewDecoration.FOLDER} label="FOLDER" showNodeLines />
          <DecorationTree decoration={TreeViewDecoration.ARROW_FOLDER} label="ARROW_FOLDER" showNodeLines />
        </div>
      </div>
    </div>
}`,...V.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Settings tree",
    decoration: TreeViewDecoration.ARROW_FOLDER
  },
  render: args => <TreeView {...args}>
      <TreeView.Item id="account" defaultExpanded>
        <TreeView.LeadingVisual>
          <Icon name={IconName.PERSON} size={1} filled={false} />
        </TreeView.LeadingVisual>
        Account
        <TreeView.SubTree>
          <TreeView.Item id="security" defaultExpanded>
            <TreeView.LeadingVisual>
              <Icon name={IconName.SHIELD} size={1} filled={false} />
            </TreeView.LeadingVisual>
            Security
            <TreeView.SubTree>
              <TreeView.Item id="passwords">
                <TreeView.LeadingVisual>
                  <Icon name={IconName.KEY} size={1} filled={false} />
                </TreeView.LeadingVisual>
                Passwords
              </TreeView.Item>
              <TreeView.Item id="two-factor">
                <TreeView.LeadingVisual>
                  <Icon name={IconName.FINGERPRINT} size={1} filled={false} />
                </TreeView.LeadingVisual>
                Two-Factor Auth
              </TreeView.Item>
            </TreeView.SubTree>
          </TreeView.Item>
          <TreeView.Item id="notifications">
            <TreeView.LeadingVisual>
              <Icon name={IconName.NOTIFICATIONS} size={1} filled={false} />
            </TreeView.LeadingVisual>
            Notifications
          </TreeView.Item>
        </TreeView.SubTree>
      </TreeView.Item>
      <TreeView.Item id="help">
        <TreeView.LeadingVisual>
          <Icon name={IconName.HELP} size={1} filled={false} />
        </TreeView.LeadingVisual>
        Help
      </TreeView.Item>
    </TreeView>
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Project files",
    decoration: TreeViewDecoration.ARROW_FOLDER,
    colorAccent: TreeViewColorAccent.NEUTRAL
  },
  decorators: [],
  parameters: {
    layout: "fullscreen"
  },
  render: args => <Sidebar.Root collapsible defaultCollapsed={false}>
      <Sidebar.Header logo={{
      expanded: <Image src={sanofiLogo ?? ""} alt="Logo" />,
      collapsed: <Image src={sanofiLogoSmall as string ?? ""} alt="Logo" />
    }} />
      <Sidebar.Content>
        <Sidebar.Section title="Navigation">
          <Sidebar.Item icon={IconName.HOME} tooltip="Home">
            Home
          </Sidebar.Item>
          <Sidebar.Item icon={IconName.ANALYTICS} tooltip="Analytics">
            Analytics
          </Sidebar.Item>
        </Sidebar.Section>
        <SidebarProjectFiles decoration={args.decoration} colorAccent={args.colorAccent} showNodeLines={args.showNodeLines} />
      </Sidebar.Content>
      <Sidebar.Footer>
        <Sidebar.Item icon={IconName.SETTINGS} tooltip="Settings">
          Settings
        </Sidebar.Item>
      </Sidebar.Footer>
    </Sidebar.Root>
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    maxInlineSize: 640
  }}>
        <Story />
      </div>],
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--elements-spacing-md)"
  }}>
      <Typography variant={TypographyVariant.BODY_SMALL} color={TypographyColor.SUBTLE}>
        Hover or select an item to see the difference between the two accents.
      </Typography>
      <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--elements-spacing-md)"
    }}>
        <ColorAccentTree colorAccent={TreeViewColorAccent.BRANDED} label="BRANDED" />
        <ColorAccentTree colorAccent={TreeViewColorAccent.NEUTRAL} label="NEUTRAL" />
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "شجرة الملفات",
    decoration: TreeViewDecoration.ARROW_FOLDER
  },
  decorators: [Story => <div dir="rtl" style={{
    maxInlineSize: 320
  }}>
        <Story />
      </div>],
  render: args => <TreeView {...args}>
      <TreeView.Item id="documents" defaultExpanded>
        المستندات
        <TreeView.SubTree>
          <TreeView.Item id="reports" defaultExpanded>
            التقارير
            <TreeView.SubTree>
              <TreeView.Item id="q1-report">تقرير الربع الأول</TreeView.Item>
              <TreeView.Item id="q2-report">تقرير الربع الثاني</TreeView.Item>
            </TreeView.SubTree>
          </TreeView.Item>
          <TreeView.Item id="presentations">
            العروض التقديمية
            <TreeView.SubTree>
              <TreeView.Item id="product-deck">عرض المنتج</TreeView.Item>
            </TreeView.SubTree>
          </TreeView.Item>
        </TreeView.SubTree>
      </TreeView.Item>
      <TreeView.Item id="images">
        الصور
        <TreeView.SubTree>
          <TreeView.Item id="photo-1">صورة ١</TreeView.Item>
          <TreeView.Item id="photo-2">صورة ٢</TreeView.Item>
        </TreeView.SubTree>
      </TreeView.Item>
    </TreeView>
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Playground tree",
    decoration: TreeViewDecoration.ARROW_FOLDER,
    colorAccent: TreeViewColorAccent.BRANDED,
    showNodeLines: false
  },
  render: args => <TreeView {...args}>
      <TreeView.Item id="parent-1" defaultExpanded>
        Parent 1
        <TreeView.SubTree>
          <TreeView.Item id="child-1-1">
            Child 1-1
            <TreeView.TrailingVisual>
              <Icon name={IconName.INFO} size={0.75} />
            </TreeView.TrailingVisual>
          </TreeView.Item>
          <TreeView.Item id="child-1-2">Child 1-2</TreeView.Item>
          <TreeView.Item id="child-1-3" disabled>
            Child 1-3 (disabled)
          </TreeView.Item>
        </TreeView.SubTree>
      </TreeView.Item>
      <TreeView.Item id="parent-2">
        Parent 2
        <TreeView.SubTree>
          <TreeView.Item id="child-2-1">Child 2-1</TreeView.Item>
        </TreeView.SubTree>
      </TreeView.Item>
      <TreeView.Item id="leaf">Leaf Item</TreeView.Item>
    </TreeView>
}`,...y.parameters?.docs?.source}}};const de=["FileExplorer","Decorations","CustomLeadingVisuals","InsideSidebar","ColorAccent","RTL","Playground"],xe=Object.freeze(Object.defineProperty({__proto__:null,ColorAccent:h,CustomLeadingVisuals:g,Decorations:V,FileExplorer:w,InsideSidebar:f,Playground:y,RTL:x,__namedExportsOrder:de,default:oe},Symbol.toStringTag,{value:"Module"}));export{g as C,V as D,w as F,f as I,x as R,xe as T,h as a};

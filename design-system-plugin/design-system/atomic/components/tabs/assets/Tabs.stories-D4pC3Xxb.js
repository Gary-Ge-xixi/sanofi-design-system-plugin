import{r as j,j as e,f as g,e as C,i as v,p as P}from"./iframe-DU6-gHk6.js";import{T as n}from"./Tabs-BKecrMwB.js";import{a as y}from"./Select-CQJ-nqhp.js";const S={title:"Components/Tabs",component:n},t=({children:s})=>e.jsx("div",{style:{padding:"var(--elements-spacing-lg)"},children:e.jsx(v,{children:s})}),c={args:{defaultSelected:"tab1",children:e.jsxs(e.Fragment,{children:[e.jsxs(n.List,{children:[e.jsx(n.Tab,{name:"tab1",children:"Item One"}),e.jsx(n.Tab,{name:"tab2",children:"Item Two"}),e.jsx(n.Tab,{name:"tab3",disabled:!0,children:"Item Three"}),e.jsx(n.Tab,{name:"tab4",children:"Item Four"})]}),e.jsx(n.Panel,{name:"tab1",children:e.jsx(t,{children:"Tab 1"})}),e.jsx(n.Panel,{name:"tab2",children:e.jsx(t,{children:"Tab 2"})}),e.jsx(n.Panel,{name:"tab3",children:e.jsx(t,{children:"Tab 3"})}),e.jsx(n.Panel,{name:"tab4",children:e.jsx(t,{children:"Tab 4"})})]})}},m={args:{defaultSelected:"tab1",children:e.jsxs(e.Fragment,{children:[e.jsxs(n.List,{isFullWidth:!0,children:[e.jsx(n.Tab,{name:"tab1",children:"Item One"}),e.jsx(n.Tab,{name:"tab2",children:"Item Two"}),e.jsx(n.Tab,{name:"tab3",disabled:!0,children:"Item Three"}),e.jsx(n.Tab,{name:"tab4",children:"Item Four"})]}),e.jsx(n.Panel,{name:"tab1",children:e.jsx(t,{children:"Tab 1"})}),e.jsx(n.Panel,{name:"tab2",children:e.jsx(t,{children:"Tab 2"})}),e.jsx(n.Panel,{name:"tab3",children:e.jsx(t,{children:"Tab 3"})}),e.jsx(n.Panel,{name:"tab4",children:e.jsx(t,{children:"Tab 4"})})]})}},h=()=>e.jsxs(n,{defaultSelected:"tab2",children:[e.jsxs(n.List,{children:[e.jsx(n.Tab,{name:"tab1",children:"Item One"}),e.jsx(n.Tab,{name:"tab2",children:"Item Two"}),e.jsx(n.Tab,{name:"tab3",children:"Item Three"})]}),e.jsx(n.Panel,{name:"tab1",children:e.jsx(t,{children:"Tab 1"})}),e.jsx(n.Panel,{name:"tab2",children:e.jsx(t,{children:"Tab 2"})}),e.jsx(n.Panel,{name:"tab3",children:e.jsx(t,{children:"Tab 3"})})]}),u=()=>e.jsxs(n,{children:[e.jsxs(n.List,{children:[e.jsx(n.Tab,{name:"tab1",children:"Item One"}),e.jsx(n.Tab,{name:"tab2",children:"Item Two"}),e.jsx(n.Tab,{name:"tab3",children:"Item Three"})]}),e.jsx(n.Panel,{name:"tab1",children:e.jsx(t,{children:"Tab 1"})}),e.jsx(n.Panel,{name:"tab2",children:e.jsx(t,{children:"Tab 2"})}),e.jsx(n.Panel,{name:"tab3",children:e.jsx(t,{children:"Tab 3"})})]}),p=()=>{const[s,a]=j.useState("");return e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-start"},children:e.jsx(y,{id:"select",label:"Select",onChange:b=>{a(b.target.value??"")},options:[{label:"Tab1",value:"tab1"},{label:"Tab2",value:"tab2"},{label:"Tab3",value:"tab3"}],placeholder:"Select an option",size:"large",state:"default"})}),e.jsx(n,{selectedName:s,children:e.jsxs(n.List,{children:[e.jsx(n.Tab,{name:"tab1",children:"Item One"}),e.jsx(n.Tab,{name:"tab2",children:"Item Two"}),e.jsx(n.Tab,{name:"tab3",children:"Item Three"})]})})]})},x=()=>{const s=Array.from({length:40},(a,b)=>`Tab${b+1}`);return e.jsxs(n,{defaultSelected:"tab1",lazyMount:!0,children:[e.jsx(n.List,{withNav:!0,isFullWidth:!0,children:s.map(a=>e.jsx(n.Tab,{name:a.toLowerCase(),children:a},a))}),s.map(a=>e.jsx(n.Panel,{name:a.toLowerCase(),children:e.jsx(t,{children:a})},a))]})},d=({name:s})=>{const a=j.useRef(0),[b,r]=j.useState(0);return j.useEffect(()=>(a.current+=1,r(a.current),console.log(`[${s}] Mounted (count: ${a.current})`),()=>{console.log(`[${s}] Unmounted`)}),[s]),e.jsxs("div",{style:{padding:"var(--elements-spacing-lg)"},children:[e.jsx(v,{variant:P.BODY_LARGE,children:s}),e.jsxs(v,{variant:P.BODY_SMALL,children:["This component has mounted ",b," time(s). Check the console for mount/unmount logs."]})]})},l=()=>e.jsxs(n,{defaultSelected:"tab1",lazyMount:!0,children:[e.jsxs(n.List,{children:[e.jsx(n.Tab,{name:"tab1",children:"Tab 1"}),e.jsx(n.Tab,{name:"tab2",children:"Tab 2"}),e.jsx(n.Tab,{name:"tab3",children:"Tab 3"})]}),e.jsx(n.Panel,{name:"tab1",children:e.jsx(d,{name:"Tab 1 Content"})}),e.jsx(n.Panel,{name:"tab2",children:e.jsx(d,{name:"Tab 2 Content"})}),e.jsx(n.Panel,{name:"tab3",children:e.jsx(d,{name:"Tab 3 Content"})})]}),o=()=>e.jsxs(n,{defaultSelected:"tab1",lazyMount:!0,unmountOnHide:!0,children:[e.jsxs(n.List,{children:[e.jsx(n.Tab,{name:"tab1",children:"Tab 1"}),e.jsx(n.Tab,{name:"tab2",children:"Tab 2"}),e.jsx(n.Tab,{name:"tab3",children:"Tab 3"})]}),e.jsx(n.Panel,{name:"tab1",children:e.jsx(d,{name:"Tab 1 Content"})}),e.jsx(n.Panel,{name:"tab2",children:e.jsx(d,{name:"Tab 2 Content"})}),e.jsx(n.Panel,{name:"tab3",children:e.jsx(d,{name:"Tab 3 Content"})})]}),i=()=>{const[s,a]=j.useState(!1),b=Array.from({length:10},(r,T)=>`Tab ${T+1}`);return e.jsxs("div",{style:{display:"flex",maxInlineSize:"900px",border:"var(--elements-shape-borderwidth-thin) solid var(--elements-color-components-divider-bg-subtle)",borderRadius:"var(--elements-radius-md)",overflow:"hidden"},children:[e.jsxs("div",{style:{flex:1,minInlineSize:0},children:[e.jsx("div",{style:{padding:"var(--elements-spacing-md)",borderBlockEnd:"var(--elements-shape-borderwidth-thin) solid var(--elements-color-components-divider-bg-subtle)"},children:e.jsx(g,{variant:C.SECONDARY,label:s?"Close Panel":"Open Panel",onClick:()=>a(r=>!r)})}),e.jsxs(n,{defaultSelected:"tab-1",children:[e.jsx(n.List,{withNav:!0,children:b.map((r,T)=>e.jsx(n.Tab,{name:`tab-${T+1}`,children:r},r))}),b.map((r,T)=>e.jsx(n.Panel,{name:`tab-${T+1}`,children:e.jsxs(t,{children:[r," content"]})},r))]})]}),e.jsx("div",{style:{inlineSize:s?"300px":"0px",transition:"inline-size var(--elements-motion-duration-300) var(--elements-motion-ease-out)",overflow:"hidden",flexShrink:0,borderInlineStart:s?"var(--elements-shape-borderwidth-thin) solid var(--elements-color-components-divider-bg-subtle)":"none",backgroundColor:"var(--elements-color-semantic-background-subtle-default)"},children:e.jsx("div",{style:{padding:"var(--elements-spacing-md)",inlineSize:"300px"},children:e.jsx(v,{variant:P.BODY_MEDIUM,children:"Side panel content. Toggle this panel to see navigation arrows appear and disappear as the tabs container resizes."})})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: "tab1",
    children: <>
        <Tabs.List>
          <Tabs.Tab name="tab1">Item One</Tabs.Tab>
          <Tabs.Tab name="tab2">Item Two</Tabs.Tab>
          <Tabs.Tab name="tab3" disabled>
            Item Three
          </Tabs.Tab>
          <Tabs.Tab name="tab4">Item Four</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel name="tab1">
          <Content>Tab 1</Content>
        </Tabs.Panel>
        <Tabs.Panel name="tab2">
          <Content>Tab 2</Content>
        </Tabs.Panel>
        <Tabs.Panel name="tab3">
          <Content>Tab 3</Content>
        </Tabs.Panel>
        <Tabs.Panel name="tab4">
          <Content>Tab 4</Content>
        </Tabs.Panel>
      </>
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: "tab1",
    children: <>
        <Tabs.List isFullWidth>
          <Tabs.Tab name="tab1">Item One</Tabs.Tab>
          <Tabs.Tab name="tab2">Item Two</Tabs.Tab>
          <Tabs.Tab name="tab3" disabled>
            Item Three
          </Tabs.Tab>
          <Tabs.Tab name="tab4">Item Four</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel name="tab1">
          <Content>Tab 1</Content>
        </Tabs.Panel>
        <Tabs.Panel name="tab2">
          <Content>Tab 2</Content>
        </Tabs.Panel>
        <Tabs.Panel name="tab3">
          <Content>Tab 3</Content>
        </Tabs.Panel>
        <Tabs.Panel name="tab4">
          <Content>Tab 4</Content>
        </Tabs.Panel>
      </>
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Tabs defaultSelected="tab2">
      <Tabs.List>
        <Tabs.Tab name="tab1">Item One</Tabs.Tab>
        <Tabs.Tab name="tab2">Item Two</Tabs.Tab>
        <Tabs.Tab name="tab3">Item Three</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel name="tab1">
        <Content>Tab 1</Content>
      </Tabs.Panel>
      <Tabs.Panel name="tab2">
        <Content>Tab 2</Content>
      </Tabs.Panel>
      <Tabs.Panel name="tab3">
        <Content>Tab 3</Content>
      </Tabs.Panel>
    </Tabs>;
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Tabs>
      <Tabs.List>
        <Tabs.Tab name="tab1">Item One</Tabs.Tab>
        <Tabs.Tab name="tab2">Item Two</Tabs.Tab>
        <Tabs.Tab name="tab3">Item Three</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel name="tab1">
        <Content>Tab 1</Content>
      </Tabs.Panel>
      <Tabs.Panel name="tab2">
        <Content>Tab 2</Content>
      </Tabs.Panel>
      <Tabs.Panel name="tab3">
        <Content>Tab 3</Content>
      </Tabs.Panel>
    </Tabs>;
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [selectedId, setSelectedId] = useState<string>("");
  return <div>
      <div style={{
      display: "flex",
      justifyContent: "flex-start"
    }}>
        <Select id="select" label="Select" onChange={evt => {
        setSelectedId(evt.target.value ?? "");
      }} options={[{
        label: "Tab1",
        value: "tab1"
      }, {
        label: "Tab2",
        value: "tab2"
      }, {
        label: "Tab3",
        value: "tab3"
      }]} placeholder="Select an option" size="large" state="default" />
      </div>

      <Tabs selectedName={selectedId}>
        <Tabs.List>
          <Tabs.Tab name="tab1">Item One</Tabs.Tab>
          <Tabs.Tab name="tab2">Item Two</Tabs.Tab>
          <Tabs.Tab name="tab3">Item Three</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>;
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const tabs = Array.from({
    length: 40
  }, (_, index) => \`Tab\${index + 1}\`);
  return <Tabs defaultSelected="tab1" lazyMount>
      <Tabs.List withNav isFullWidth>
        {tabs.map(tabName => <Tabs.Tab key={tabName} name={tabName.toLowerCase()}>
            {tabName}
          </Tabs.Tab>)}
      </Tabs.List>
      {tabs.map(tabName => <Tabs.Panel key={tabName} name={tabName.toLowerCase()}>
          <Content>{tabName}</Content>
        </Tabs.Panel>)}
    </Tabs>;
}`,...x.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Tabs defaultSelected="tab1" lazyMount>
      <Tabs.List>
        <Tabs.Tab name="tab1">Tab 1</Tabs.Tab>
        <Tabs.Tab name="tab2">Tab 2</Tabs.Tab>
        <Tabs.Tab name="tab3">Tab 3</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel name="tab1">
        <MountTracker name="Tab 1 Content" />
      </Tabs.Panel>
      <Tabs.Panel name="tab2">
        <MountTracker name="Tab 2 Content" />
      </Tabs.Panel>
      <Tabs.Panel name="tab3">
        <MountTracker name="Tab 3 Content" />
      </Tabs.Panel>
    </Tabs>;
}`,...l.parameters?.docs?.source},description:{story:`Demonstrates lazy mounting behavior where tab content is only
rendered when the tab is first selected. Once mounted, the content
stays in the DOM (keep-alive behavior).

Open the browser console and switch tabs to see mount logs.
Notice that each tab only mounts once, even when switching away and back.`,...l.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Tabs defaultSelected="tab1" lazyMount unmountOnHide>
      <Tabs.List>
        <Tabs.Tab name="tab1">Tab 1</Tabs.Tab>
        <Tabs.Tab name="tab2">Tab 2</Tabs.Tab>
        <Tabs.Tab name="tab3">Tab 3</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel name="tab1">
        <MountTracker name="Tab 1 Content" />
      </Tabs.Panel>
      <Tabs.Panel name="tab2">
        <MountTracker name="Tab 2 Content" />
      </Tabs.Panel>
      <Tabs.Panel name="tab3">
        <MountTracker name="Tab 3 Content" />
      </Tabs.Panel>
    </Tabs>;
}`,...o.parameters?.docs?.source},description:{story:`Demonstrates lazy mounting with unmount-on-hide behavior.
Tab content is unmounted when the tab is deselected, and remounts
when selected again.

Open the browser console and switch tabs to see mount/unmount logs.
Notice that switching away from a tab unmounts its content.`,...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const tabs = Array.from({
    length: 10
  }, (_, index) => \`Tab \${index + 1}\`);
  return <div style={{
    display: "flex",
    maxInlineSize: "900px",
    border: "var(--elements-shape-borderwidth-thin) solid var(--elements-color-components-divider-bg-subtle)",
    borderRadius: "var(--elements-radius-md)",
    overflow: "hidden"
  }}>
      <div style={{
      flex: 1,
      minInlineSize: 0
    }}>
        <div style={{
        padding: "var(--elements-spacing-md)",
        borderBlockEnd: "var(--elements-shape-borderwidth-thin) solid var(--elements-color-components-divider-bg-subtle)"
      }}>
          <Button variant={ButtonVariant.SECONDARY} label={isPanelOpen ? "Close Panel" : "Open Panel"} onClick={() => setIsPanelOpen(prev => !prev)} />
        </div>
        <Tabs defaultSelected="tab-1">
          <Tabs.List withNav>
            {tabs.map((tabName, index) => <Tabs.Tab key={tabName} name={\`tab-\${index + 1}\`}>
                {tabName}
              </Tabs.Tab>)}
          </Tabs.List>
          {tabs.map((tabName, index) => <Tabs.Panel key={tabName} name={\`tab-\${index + 1}\`}>
              <Content>{tabName} content</Content>
            </Tabs.Panel>)}
        </Tabs>
      </div>
      <div style={{
      inlineSize: isPanelOpen ? "300px" : "0px",
      transition: "inline-size var(--elements-motion-duration-300) var(--elements-motion-ease-out)",
      overflow: "hidden",
      flexShrink: 0,
      borderInlineStart: isPanelOpen ? "var(--elements-shape-borderwidth-thin) solid var(--elements-color-components-divider-bg-subtle)" : "none",
      backgroundColor: "var(--elements-color-semantic-background-subtle-default)"
    }}>
        <div style={{
        padding: "var(--elements-spacing-md)",
        inlineSize: "300px"
      }}>
          <Typography variant={TypographyVariant.BODY_MEDIUM}>
            Side panel content. Toggle this panel to see navigation arrows
            appear and disappear as the tabs container resizes.
          </Typography>
        </div>
      </div>
    </div>;
}`,...i.parameters?.docs?.source},description:{story:`Demonstrates responsive navigation arrows behavior with a resizable panel.

Click "Toggle Panel" to open/close the side panel. When the panel opens,
the tabs container shrinks and navigation arrows appear. When the panel
closes, the container expands and arrows disappear. The ResizeObserver
ensures arrows update correctly during the CSS transition.`,...i.parameters?.docs?.description}}};const f=["Default","FullWidth","DefaultSelectedTab","Uncontrolled","Controlled","WithNav","LazyMount","LazyMountWithUnmount","WithNavInResizablePanel"],O=Object.freeze(Object.defineProperty({__proto__:null,Controlled:p,Default:c,DefaultSelectedTab:h,FullWidth:m,LazyMount:l,LazyMountWithUnmount:o,Uncontrolled:u,WithNav:x,WithNavInResizablePanel:i,__namedExportsOrder:f,default:S},Symbol.toStringTag,{value:"Module"}));export{c as D,l as L,O as T,o as a};

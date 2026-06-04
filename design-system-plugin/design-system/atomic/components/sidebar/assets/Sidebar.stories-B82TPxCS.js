import{j as e,I as n,d as g,H as h,i,k as r,r as v,l as A,e as k,f as O,O as D,m as M,n as P}from"./iframe-DU6-gHk6.js";import{S as o,a as U}from"./Sidebar-BBfcyokp.js";import{u,a as E}from"./use-get-sanofi-logo-BZJA-8-R.js";import{N as H}from"./index-bpbbX949.js";import{I as d}from"./Image-BdGhIV8F.js";import{F as S}from"./Flex-C-ZuU2xq.js";import{B as w}from"./ButtonIcon-B-F3gh4N.js";import{c as b}from"./create-toast-Bk21w6Tb.js";const _={component:o.Root,title:"Components/Sidebar",parameters:{layout:"fullscreen",controls:{exclude:["logo","workspace","userProfile","footer"]},docs:{description:{component:`
The Sidebar component is a compound component that provides navigation and organization for your application. 

## Subcomponents

- **Sidebar.Root** - Main container with collapse/expand functionality
- **Sidebar.Header** - Top section with logo and collapse toggle
- **Sidebar.Content** - Scrollable main content area
- **Sidebar.Section** - Grouped navigation items with optional titles
- **Sidebar.Item** - Individual navigation items (supports expandable nested items)
- **Sidebar.Menu** - Dropdown menu system with trigger and items
- **Sidebar.Footer** - Bottom section for secondary actions
- **Sidebar.UserProfile** - User information and logout functionality
- **Sidebar.Action** - Quick action button area
- **Sidebar.CollapseToggle** - Collapse toggle button (can be used externally)

## Collapse Toggle Behavior

The collapse toggle button appears automatically based on the sidebar configuration:

- **With Header**: The toggle is integrated into the header alongside the logo
- **Without Header**: The toggle appears standalone at the top of the sidebar
- **Icons**: Always uses default icons (DOCK_TO_RIGHT/DOCK_TO_LEFT) for consistency

## Collapse Modes

### Standard Collapse
The sidebar collapses to a narrow icon-only view (showing icons with tooltips).

### Full Collapse
When \`fullyCollapsible={true}\`, the sidebar completely hides with zero width.
Use controlled mode with an external toggle button to allow users to expand the sidebar.

## Usage Patterns

### With Header (Toggle in Header)
\`\`\`tsx
<Sidebar.Root collapsible={true}>
  <Sidebar.Header logo={<Logo />} />
  <Sidebar.Content>
    <Sidebar.Item icon={IconName.HOME}>Home</Sidebar.Item>
  </Sidebar.Content>
</Sidebar.Root>
\`\`\`

### Without Header (Standalone Toggle)
\`\`\`tsx
<Sidebar.Root collapsible={true}>
  <Sidebar.Content>
    <Sidebar.Item icon={IconName.HOME}>Home</Sidebar.Item>
  </Sidebar.Content>
</Sidebar.Root>
\`\`\`

### Fully Collapsible (Zero Width)
\`\`\`tsx
const [collapsed, setCollapsed] = useState(false);

<>
  {collapsed && (
    <Sidebar.CollapseToggle
      collapsed={collapsed}
      onClick={() => setCollapsed(false)}
      style={{ position: 'fixed', insetInlineStart: 8, insetBlockStart: 8 }}
    />
  )}
  <Sidebar.Root collapsed={collapsed} fullyCollapsible>
    <Sidebar.Header logo={<Logo />} />
    <Sidebar.Content>
      <Sidebar.Item icon={IconName.HOME}>Home</Sidebar.Item>
    </Sidebar.Content>
  </Sidebar.Root>
</>
\`\`\`

### Expandable Items
\`\`\`tsx
<Sidebar.Item 
  expandable={true}
  nestedItems={[
    <Sidebar.Item key="1">Sub Item 1</Sidebar.Item>,
    <Sidebar.Item key="2">Sub Item 2</Sidebar.Item>
  ]}
>
  Parent Item
</Sidebar.Item>
\`\`\`

### Controlled (External State)
\`\`\`tsx
const [collapsed, setCollapsed] = useState(false);

// External toggle button
<button onClick={() => setCollapsed(!collapsed)}>Toggle</button>

<Sidebar.Root collapsed={collapsed}>
  <Sidebar.Header logo={<Logo />} />
  <Sidebar.Content>
    <Sidebar.Item icon={IconName.HOME}>Home</Sidebar.Item>
  </Sidebar.Content>
</Sidebar.Root>
\`\`\`
        `}}},subcomponents:{"Sidebar.Header":o.Header,"Sidebar.Content":o.Content,"Sidebar.Section":o.Section,"Sidebar.Item":o.Item,"Sidebar.Menu":o.Menu,"Sidebar.Menu.Trigger":o.Menu.Trigger,"Sidebar.Menu.Dropdown":o.Menu.Dropdown,"Sidebar.Menu.Item":o.Menu.Item,"Sidebar.Footer":o.Footer,"Sidebar.UserProfile":o.UserProfile,"Sidebar.Action":o.Action,"Sidebar.CollapseToggle":o.CollapseToggle},args:{collapsible:!0,defaultCollapsed:!1,sticky:!0,fullyCollapsible:!1},argTypes:{collapsible:{control:"boolean",description:"Enable collapse/expand functionality"},defaultCollapsed:{control:"boolean",description:"Initial collapsed state"},sticky:{control:"boolean",description:"Sticky positioning at top of viewport"},fullyCollapsible:{control:"boolean",description:"Completely hide sidebar when collapsed (zero width). Use with controlled mode."},logoSrc:{control:{type:"file",accept:".png,.svg"}},logoSmallSrc:{control:{type:"file",accept:".png,.svg"}}}},x={render:t=>e.jsx(G,{...t})},I={render:function(){const s=u(),a=E();return e.jsxs(o.Root,{collapsible:!1,defaultCollapsed:!0,children:[e.jsx(o.Header,{logo:{expanded:e.jsx(d,{src:s,alt:"Logo"}),collapsed:e.jsx(d,{src:a,alt:"Logo-collapsed"})}}),e.jsx(o.Content,{children:e.jsxs(o.Section,{children:[e.jsx(o.Item,{icon:n.HOME,tooltip:"Home",children:"Home"}),e.jsx(o.Item,{icon:n.ANALYTICS,tooltip:"Analytics",active:!0,children:"Analytics"}),e.jsx(o.Item,{icon:n.WATER_DROP,tooltip:"Compounds",children:"Compounds"}),e.jsx(o.Item,{icon:n.BIOTECH,tooltip:"Research",children:"Research"})]})}),e.jsxs(o.Footer,{children:[e.jsx(o.Item,{icon:n.SETTINGS,tooltip:"Settings",children:"Settings"}),e.jsx(o.Item,{icon:n.HELP,tooltip:"Help Center",children:"Help Center"}),e.jsx(o.UserProfile,{name:"Marie Curie",email:"marie.curie@sanofi.com",avatarSrc:`${g}/images/Marie-Curie-avatar.jpeg`,tooltip:"Log out"})]})]})},parameters:{docs:{description:{story:"A collapsed sidebar that cannot be expanded. Shows icons only with tooltips on hover."}}}},C={render:function(){const s=u(),a=E();return e.jsxs(o.Root,{collapsible:!1,defaultCollapsed:!1,children:[e.jsx(o.Header,{logo:{expanded:e.jsx(d,{src:s,alt:"Logo"}),collapsed:e.jsx(d,{src:a,alt:"Logo-collapsed"})}}),e.jsxs(o.Content,{children:[e.jsxs(o.Section,{title:"Navigation",children:[e.jsx(o.Item,{icon:n.HOME,children:"Home"}),e.jsx(o.Item,{icon:n.SETTINGS,children:"Settings"})]}),e.jsxs(o.Section,{title:"Projects",children:[e.jsx(o.Item,{icon:n.FOLDER,children:"Project Alpha"}),e.jsx(o.Item,{icon:n.FOLDER,children:"Project Beta"}),e.jsx(o.Item,{icon:n.FOLDER,children:"Project Gamma"})]})]}),e.jsxs(o.Footer,{children:[e.jsx(o.Item,{icon:n.SETTINGS,children:"Settings"}),e.jsx(o.Item,{icon:n.HELP,children:"Help Center"}),e.jsx(o.UserProfile,{name:"Marie Curie",email:"marie.curie@sanofi.com",avatarSrc:`${g}/images/Marie-Curie-avatar.jpeg`,icon:e.jsx(h,{name:n.LOGOUT}),tooltip:"Log out"})]})]})},parameters:{docs:{description:{story:"An expanded sidebar that cannot be collapsed. Shows full text labels and section titles."}}}},G=t=>{const s=u(),a=E(),[p,m]=v.useState({Compounds:!0," Item 1":!1," Item 2":!1,Settings:!1,Help:!1}),[L,N]=v.useState(t.defaultCollapsed??!1),c=(l,F,R)=>{b({title:"Toast notification",text:e.jsxs("div",{style:{display:"flex",gap:"2px",flexWrap:"wrap"},children:[e.jsx(i,{children:"The"}),e.jsx(i,{color:r.INFO,children:F}),e.jsx(i,{children:" props has been called with value "}),e.jsx(i,{color:r.INFO,children:R})]}),variant:P.SUCCESS,displayCloseButton:!0,position:M.TOP_END,...l})};return e.jsxs("div",{children:[e.jsx(A,{}),e.jsxs(o.Root,{...t,onClick:()=>{N(!L),c(t,"onClick",`Sidebar ${L?"expanded":"collapsed"}`)},children:[e.jsx(o.Header,{logo:{expanded:e.jsx(d,{src:t.logoSrc??s,alt:"Logo"}),collapsed:e.jsx(d,{src:t.logoSmallSrc??a,alt:"Logo-collapsed"})}}),e.jsxs(o.Content,{children:[e.jsx(o.Action,{tooltip:"Quick action",children:L?e.jsx(w,{variant:k.PRIMARY_NEUTRAL,icon:n.ADD_CIRCLE,onClick:()=>c(t,"onClick","ButtonIcon")}):e.jsx(O,{label:"Action",fullWidth:!0,variant:k.PRIMARY_NEUTRAL,icon:n.AUTO_AWESOME,iconPosition:D.END,onClick:()=>c(t,"onClick","Quick action")})}),e.jsx(o.Section,{children:e.jsxs(o.Menu,{fullWidth:!0,children:[e.jsx(o.Menu.Trigger,{size:U.LARGE,tooltip:"Workspace menu",text:L?e.jsx(i,{children:"WN"}):e.jsx(i,{children:"Workspace Name"}),subtext:"Details on workspace",iconBefore:e.jsx(h,{name:n.SPACE_DASHBOARD,filled:!1,size:1.25}),iconAfter:e.jsx(h,{name:n.UNFOLD_MORE,filled:!1})}),e.jsxs(o.Menu.Dropdown,{children:[e.jsx(o.Menu.Item,{iconBefore:e.jsx(o.Menu.Item.Icon,{name:n.EDIT}),description:"Description goes here",shortcut:"⌘S",onClick:()=>{b({title:"Click on Menu 1",variant:"info"})},children:"Menu item 1"}),e.jsx(o.Menu.Item,{iconBefore:e.jsx(o.Menu.Item.Icon,{name:n.EDIT}),description:"Description goes here",shortcut:"⌘S",onClick:()=>{b({title:"Click on Menu 2",variant:"info"})},children:"Menu item 2"}),e.jsx(o.Menu.Item,{iconBefore:e.jsx(o.Menu.Item.Icon,{name:n.EDIT}),description:"Description goes here",shortcut:"⌘S",onClick:()=>{b({title:"Click on Menu 3",variant:"info"})},children:"Menu item 3"}),e.jsx(o.Menu.Item,{iconBefore:e.jsx(o.Menu.Item.Icon,{name:n.EDIT}),description:"Description goes here",shortcut:"⌘S",onClick:()=>{b({title:"Click on Menu 4",variant:"info"})},children:"Menu item 4"})]})]})}),e.jsxs(o.Section,{title:"Section Title Here",children:[e.jsx(o.Item,{icon:n.WATER_DROP,tooltip:"Compounds",active:p.Compounds,onClick:()=>{m(l=>({...l,Compounds:!l.Compounds," Item 1":!1," Item 2":!1,Settings:!1,Help:!1})),c(t,"onClick","Compounds")},children:"Compounds"}),e.jsx(o.Item,{icon:n.BIOTECH,active:p[" Item 1"],tooltip:" Item 1",onClick:()=>{m(l=>({...l,Compounds:!1," Item 1":!l[" Item 1"]," Item 2":!1,Settings:!1,Help:!1})),c(t,"onClick"," Item 1")},children:"Item 1"}),e.jsx(o.Item,{icon:n.ANALYTICS,active:p[" Item 2"],tooltip:" Item 2",onClick:()=>{m(l=>({...l,Compounds:!1," Item 1":!1," Item 2":!l[" Item 2"],Settings:!1,Help:!1})),c(t,"onClick"," Item 2")},children:"Item 2"})]}),e.jsxs(o.Section,{title:"Expandable Examples",children:[e.jsx(o.Item,{icon:n.FOLDER,tooltip:"Project Files",expandable:!0,defaultExpanded:!1,onExpandedChange:l=>{c(t,"onExpandedChange",`Project Files ${l?"expanded":"collapsed"}`)},nestedItems:[e.jsx(o.Item,{tooltip:"Document 1",onClick:()=>{c(t,"onClick","Document 1")},children:"Document 1"},"file1"),e.jsx(o.Item,{tooltip:"Image Assets",onClick:()=>{c(t,"onClick","Image Assets")},children:"Image Assets"},"file2"),e.jsx(o.Item,{tooltip:"Source Code",onClick:()=>{c(t,"onClick","Source Code")},children:"Source Code"},"file3")],children:"Project Files"}),e.jsx(o.Item,{icon:n.SETTINGS,tooltip:"Configuration",expandable:!0,defaultExpanded:!0,onExpandedChange:l=>{c(t,"onExpandedChange",`Configuration ${l?"expanded":"collapsed"}`)},nestedItems:[e.jsx(o.Item,{tooltip:"General Settings",onClick:()=>{c(t,"onClick","General Settings")},children:"General Settings"},"config1"),e.jsx(o.Item,{tooltip:"Security",onClick:()=>{c(t,"onClick","Security")},children:"Security"},"config2")],children:"Configuration"}),e.jsx(o.Item,{icon:n.ANALYTICS,tooltip:"Reports",expandable:!0,defaultExpanded:!1,onExpandedChange:l=>{c(t,"onExpandedChange",`Reports ${l?"expanded":"collapsed"}`)},nestedItems:[e.jsx(o.Item,{tooltip:"Sales Report",onClick:()=>{c(t,"onClick","Sales Report")},children:"Sales Report"},"report1"),e.jsx(o.Item,{tooltip:"Analytics Dashboard",onClick:()=>{c(t,"onClick","Analytics Dashboard")},children:"Analytics Dashboard"},"report2"),e.jsx(o.Item,{tooltip:"Performance Metrics",onClick:()=>{c(t,"onClick","Performance Metrics")},children:"Performance Metrics"},"report3")],children:"Reports"})]})]}),e.jsxs(o.Footer,{children:[e.jsx(o.Item,{icon:n.SETTINGS,active:p.Settings,tooltip:"Settings",onClick:()=>{m(l=>({...l,Compounds:!1," Item 1":!1," Item 2":!1,Settings:!l.Settings,Help:!1})),c(t,"onClick","Settings")},children:"Settings"}),e.jsx(o.Item,{icon:n.HELP,active:p.Help,tooltip:"Help Center",onClick:()=>{m(l=>({...l,Compounds:!1," Item 1":!1," Item 2":!1,Settings:!1,Help:!l.Help})),c(t,"onClick","Help clicked")},children:"Help Center"}),e.jsx(o.UserProfile,{name:"Marie Curie with a very long name",email:"marie.curie.with.a.very.long.email@sanofi.com",avatarSrc:`${g}/images/Marie-Curie-avatar.jpeg`,onClick:()=>{c(t,"onClick","Logout")},icon:e.jsx(h,{name:n.LOGOUT}),tooltip:"Log out"})]})]})]})},B=()=>{const[t,s]=v.useState({Home:!1,Analytics:!1,Compounds:!1,Research:!1,Reports:!1,Settings:!1,Help:!1});return e.jsxs("div",{style:{display:"flex",height:"100vh"},children:[e.jsxs(o.Root,{collapsible:!0,defaultCollapsed:!1,children:[e.jsx(o.Content,{children:e.jsxs(o.Section,{title:"Main Navigation",children:[e.jsx(o.Item,{icon:n.HOME,active:t.Home,tooltip:"Home",onClick:()=>{s(a=>({...a,Home:!a.Home}))},children:"Home"}),e.jsx(o.Item,{icon:n.ANALYTICS,active:t.Analytics,tooltip:"Analytics",onClick:()=>{s(a=>({...a,Analytics:!a.Analytics}))},children:"Analytics"}),e.jsx(o.Item,{icon:n.WATER_DROP,active:t.Compounds,tooltip:"Compounds",onClick:()=>{s(a=>({...a,Compounds:!a.Compounds}))},children:"Compounds"}),e.jsx(o.Item,{icon:n.BIOTECH,active:t.Research,tooltip:"Research",onClick:()=>{s(a=>({...a,Research:!a.Research}))},children:"Research"})]})}),e.jsxs(o.Footer,{children:[e.jsx(o.Item,{icon:n.SETTINGS,active:t.Settings,tooltip:"Settings",onClick:()=>{s(a=>({...a,Settings:!a.Settings}))},children:"Settings"}),e.jsx(o.Item,{icon:n.HELP,active:t.Help,tooltip:"Help Center",onClick:()=>{s(a=>({...a,Help:!a.Help}))},children:"Help Center"})]})]}),e.jsx("div",{style:{flex:1,padding:"2rem"},children:e.jsx(i,{color:r.DEFAULT,children:"This sidebar has no Header component, but the collapse toggle appears automatically with the default icons (DOCK_TO_RIGHT/DOCK_TO_LEFT)."})})]})},j={render:()=>e.jsx(B,{})},f={render:function(){const s=u(),a=E();return e.jsxs(S,{style:{height:"100vh"},children:[e.jsxs(o.Root,{collapsible:!0,fullyCollapsible:!0,children:[e.jsx(o.Header,{logo:{expanded:e.jsx(d,{src:s,alt:"Sanofi Logo"}),collapsed:e.jsx(d,{src:a,alt:"Sanofi Logo Collapsed"})}}),e.jsxs(o.Content,{children:[e.jsxs(o.Section,{title:"Navigation",children:[e.jsx(o.Item,{icon:n.HOME,children:"Home"}),e.jsx(o.Item,{icon:n.SETTINGS,children:"Settings"})]}),e.jsxs(o.Section,{title:"Projects",children:[e.jsx(o.Item,{icon:n.FOLDER,children:"Project Alpha"}),e.jsx(o.Item,{icon:n.FOLDER,children:"Project Beta"})]})]}),e.jsxs(o.Footer,{children:[e.jsx(o.Item,{icon:n.HELP,children:"Help Center"}),e.jsx(o.UserProfile,{name:"Marie Curie",email:"marie.curie@sanofi.com",avatarSrc:`${g}/images/Marie-Curie-avatar.jpeg`,icon:e.jsx(h,{name:n.LOGOUT}),tooltip:"Log out"})]})]}),e.jsxs(S,{flex:1,direction:"column",style:{padding:"var(--elements-spacing-5xl)"},children:[e.jsx(i,{color:r.DEFAULT,children:e.jsx("strong",{children:"Fully Collapsible - Uncontrolled Mode:"})}),e.jsx("br",{}),e.jsx(i,{color:r.DEFAULT,children:"The sidebar manages its own state internally. When collapsed, a floating toggle button appears automatically."}),e.jsx("br",{}),e.jsx(i,{color:r.DEFAULT,children:e.jsx("strong",{children:"Try this:"})}),e.jsxs("ul",{style:{marginInlineStart:"var(--elements-spacing-xl)"},children:[e.jsx("li",{children:e.jsxs(i,{color:r.DEFAULT,children:[e.jsx("strong",{children:"Click the toggle"})," in the header to collapse"]})}),e.jsx("li",{children:e.jsxs(i,{color:r.DEFAULT,children:["The ",e.jsx("strong",{children:"floating button appears automatically"})," (no custom code needed)"]})})]})]})]})},parameters:{docs:{description:{story:"Uncontrolled fully collapsible mode: the sidebar manages its own state and automatically displays a floating toggle when collapsed. No external state management required."}}}},y={render:function(){const s=u(),[a,p]=v.useState(!1);return e.jsxs(S,{style:{height:"100vh"},children:[e.jsxs(o.Root,{collapsible:!0,fullyCollapsible:!0,collapsed:a,children:[e.jsxs(o.Content,{children:[e.jsxs(o.Section,{title:"Navigation",children:[e.jsx(o.Item,{icon:n.HOME,children:"Home"}),e.jsx(o.Item,{icon:n.SETTINGS,children:"Settings"})]}),e.jsxs(o.Section,{title:"Projects",children:[e.jsx(o.Item,{icon:n.FOLDER,expandable:!0,nestedItems:[e.jsx(o.Item,{children:"Overview"},"1"),e.jsx(o.Item,{children:"Tasks"},"2"),e.jsx(o.Item,{children:"Documents"},"3")],children:"Project Alpha"}),e.jsx(o.Item,{icon:n.FOLDER,expandable:!0,nestedItems:[e.jsx(o.Item,{children:"Overview"},"1"),e.jsx(o.Item,{children:"Tasks"},"2")],children:"Project Beta"}),e.jsx(o.Item,{icon:n.FOLDER,expandable:!0,nestedItems:[e.jsx(o.Item,{children:"Overview"},"1"),e.jsx(o.Item,{children:"Tasks"},"2"),e.jsx(o.Item,{children:"Reports"},"3"),e.jsx(o.Item,{children:"Settings"},"4")],children:"Project Gamma"})]})]}),e.jsxs(o.Footer,{children:[e.jsx(o.Item,{icon:n.SETTINGS,children:"Settings"}),e.jsx(o.Item,{icon:n.HELP,children:"Help Center"}),e.jsx(o.UserProfile,{name:"Marie Curie",email:"marie.curie@sanofi.com",avatarSrc:`${g}/images/Marie-Curie-avatar.jpeg`,icon:e.jsx(h,{name:n.LOGOUT}),tooltip:"Log out"})]})]}),e.jsxs(S,{direction:"column",flex:1,children:[e.jsx(H.Root,{sticky:!1,logo:e.jsxs(S,{align:"center",gap:"xs",children:[e.jsx(o.CollapseToggle,{collapsed:a,onClick:()=>p(m=>!m),collapsedIcon:n.DOCK_TO_LEFT,expandedIcon:n.DOCK_TO_RIGHT}),e.jsx(d,{src:s,alt:"Sanofi Logo",style:{width:"80px"}})]}),children:e.jsx(H.EndContent,{children:e.jsx(H.Item,{children:e.jsx(i,{color:r.DEFAULT,children:"App Header"})})})}),e.jsxs(S,{flex:1,direction:"column",style:{padding:"var(--elements-spacing-3xl)"},children:[e.jsx(i,{color:r.DEFAULT,children:e.jsx("strong",{children:"Fully Collapsible - Controlled Mode:"})}),e.jsx("br",{}),e.jsxs(i,{color:r.DEFAULT,children:["This example demonstrates ",e.jsx("strong",{children:"controlled mode"})," where the sidebar is on the left and pushes the NavigationHeader when expanded."]}),e.jsx("br",{}),e.jsx(i,{color:r.DEFAULT,children:e.jsx("strong",{children:"Try this:"})}),e.jsxs("ul",{style:{marginInlineStart:"var(--elements-spacing-xl)"},children:[e.jsx("li",{children:e.jsxs(i,{color:r.DEFAULT,children:[e.jsx("strong",{children:"Click the toggle"})," in the header to collapse/expand the sidebar"]})}),e.jsx("li",{children:e.jsx(i,{color:r.DEFAULT,children:"The NavigationHeader is pushed by the sidebar"})})]})]})]})]})},parameters:{docs:{description:{story:"Controlled fully collapsible mode: the parent manages the collapsed state via the `collapsed` prop. The parent is responsible for providing its own toggle mechanism (e.g., in an app header). This example also demonstrates custom icons (`collapsedIcon` and `expandedIcon` props) using MENU/MENU_OPEN instead of the default DOCK icons."}}}},W=Array.from({length:20},(t,s)=>`content-block-${s+1}`),$=({sticky:t})=>{const s=u(),a=E();return e.jsxs("div",{style:{display:"flex"},children:[e.jsxs(o.Root,{collapsible:!0,sticky:t,children:[e.jsx(o.Header,{logo:{expanded:e.jsx(d,{src:s,alt:"Sanofi Logo"}),collapsed:e.jsx(d,{src:a,alt:"Sanofi Logo Collapsed"})}}),e.jsxs(o.Content,{children:[e.jsxs(o.Section,{title:"Navigation",children:[e.jsx(o.Item,{icon:n.HOME,children:"Home"}),e.jsx(o.Item,{icon:n.ANALYTICS,children:"Analytics"}),e.jsx(o.Item,{icon:n.WATER_DROP,children:"Compounds"}),e.jsx(o.Item,{icon:n.BIOTECH,children:"Research"})]}),e.jsxs(o.Section,{title:"Projects",children:[e.jsx(o.Item,{icon:n.FOLDER,children:"Project Alpha"}),e.jsx(o.Item,{icon:n.FOLDER,children:"Project Beta"}),e.jsx(o.Item,{icon:n.FOLDER,children:"Project Gamma"})]})]}),e.jsxs(o.Footer,{children:[e.jsx(o.Item,{icon:n.SETTINGS,children:"Settings"}),e.jsx(o.Item,{icon:n.HELP,children:"Help Center"}),e.jsx(o.UserProfile,{name:"Marie Curie",email:"marie.curie@sanofi.com",avatarSrc:`${g}/images/Marie-Curie-avatar.jpeg`,icon:e.jsx(h,{name:n.LOGOUT}),tooltip:"Log out"})]})]}),e.jsxs("div",{style:{flex:1,padding:"var(--elements-spacing-3xl)",background:"var(--elements-color-semantic-background-default)"},children:[e.jsx(i,{color:r.DEFAULT,children:e.jsx("strong",{children:"Sticky Sidebar Behavior Test"})}),e.jsx("br",{}),e.jsx(i,{color:r.DEFAULT,children:t?"The sidebar uses position: sticky and stays at the top while you scroll this content.":"With sticky disabled, the sidebar scrolls with the page."}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{color:r.DEFAULT,children:e.jsx("strong",{children:"Instructions:"})}),e.jsxs("ul",{style:{marginInlineStart:"var(--elements-spacing-xl)"},children:[e.jsx("li",{children:e.jsx(i,{color:r.DEFAULT,children:"Scroll down this page to see the sticky behavior"})}),e.jsx("li",{children:e.jsx(i,{color:r.DEFAULT,children:'Toggle the "sticky" control in the Controls panel to compare'})}),e.jsx("li",{children:e.jsx(i,{color:r.DEFAULT,children:"Try collapsing/expanding the sidebar while scrolling"})})]}),W.map((p,m)=>e.jsxs("div",{style:{marginBlockStart:"var(--elements-spacing-2xl)",padding:"var(--elements-spacing-lg)",background:"var(--elements-color-semantic-background-subtle)",borderRadius:"var(--elements-radius-md)"},children:[e.jsx(i,{color:r.DEFAULT,children:e.jsxs("strong",{children:["Content Block ",m+1]})}),e.jsx("br",{}),e.jsx(i,{color:r.SUBTLE,children:"This is a content block to demonstrate scrolling behavior. When sticky is enabled (default), the sidebar remains fixed at the top of the viewport. When disabled, the sidebar scrolls with the page content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]},p))]})]})},T={args:{sticky:!0},argTypes:{sticky:{control:"boolean",description:"Enable sticky positioning - sidebar stays at top while content scrolls",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}},render:t=>e.jsx($,{...t}),parameters:{docs:{description:{story:"Demonstrates sticky positioning behavior. When sticky is enabled (default), the sidebar uses `position: sticky` and remains fixed at the top of the viewport as you scroll the page content. Toggle the sticky prop to see how the sidebar behavior changes. Scroll down the page to observe the effect."}},layout:"fullscreen"}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (args: Partial<SidebarProps & {
    logoSrc?: string;
    logoSmallSrc?: string;
  }>) => <SidebarStory {...args} />
}`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const sanofiLogo = useGetSanofiLogo();
    const sanofiLogoSmall = useGetSanofiLogoSmall();
    return <Sidebar.Root collapsible={false} defaultCollapsed={true}>
        <Sidebar.Header logo={{
        expanded: <Image src={sanofiLogo} alt="Logo" />,
        collapsed: <Image src={sanofiLogoSmall} alt="Logo-collapsed" />
      }} />

        <Sidebar.Content>
          <Sidebar.Section>
            <Sidebar.Item icon={IconName.HOME} tooltip="Home">
              Home
            </Sidebar.Item>
            <Sidebar.Item icon={IconName.ANALYTICS} tooltip="Analytics" active>
              Analytics
            </Sidebar.Item>
            <Sidebar.Item icon={IconName.WATER_DROP} tooltip="Compounds">
              Compounds
            </Sidebar.Item>
            <Sidebar.Item icon={IconName.BIOTECH} tooltip="Research">
              Research
            </Sidebar.Item>
          </Sidebar.Section>
        </Sidebar.Content>

        <Sidebar.Footer>
          <Sidebar.Item icon={IconName.SETTINGS} tooltip="Settings">
            Settings
          </Sidebar.Item>
          <Sidebar.Item icon={IconName.HELP} tooltip="Help Center">
            Help Center
          </Sidebar.Item>
          <Sidebar.UserProfile name="Marie Curie" email="marie.curie@sanofi.com" avatarSrc={\`\${SANOFI_ELEMENTS_CDN_URL}/images/Marie-Curie-avatar.jpeg\`} tooltip="Log out" />
        </Sidebar.Footer>
      </Sidebar.Root>;
  },
  parameters: {
    docs: {
      description: {
        story: "A collapsed sidebar that cannot be expanded. Shows icons only with tooltips on hover."
      }
    }
  }
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const sanofiLogo = useGetSanofiLogo();
    const sanofiLogoSmall = useGetSanofiLogoSmall();
    return <Sidebar.Root collapsible={false} defaultCollapsed={false}>
        <Sidebar.Header logo={{
        expanded: <Image src={sanofiLogo} alt="Logo" />,
        collapsed: <Image src={sanofiLogoSmall} alt="Logo-collapsed" />
      }} />

        <Sidebar.Content>
          <Sidebar.Section title="Navigation">
            <Sidebar.Item icon={IconName.HOME}>Home</Sidebar.Item>
            <Sidebar.Item icon={IconName.SETTINGS}>Settings</Sidebar.Item>
          </Sidebar.Section>

          <Sidebar.Section title="Projects">
            <Sidebar.Item icon={IconName.FOLDER}>Project Alpha</Sidebar.Item>
            <Sidebar.Item icon={IconName.FOLDER}>Project Beta</Sidebar.Item>
            <Sidebar.Item icon={IconName.FOLDER}>Project Gamma</Sidebar.Item>
          </Sidebar.Section>
        </Sidebar.Content>

        <Sidebar.Footer>
          <Sidebar.Item icon={IconName.SETTINGS}>Settings</Sidebar.Item>
          <Sidebar.Item icon={IconName.HELP}>Help Center</Sidebar.Item>
          <Sidebar.UserProfile name="Marie Curie" email="marie.curie@sanofi.com" avatarSrc={\`\${SANOFI_ELEMENTS_CDN_URL}/images/Marie-Curie-avatar.jpeg\`} icon={<Icon name={IconName.LOGOUT} />} tooltip="Log out" />
        </Sidebar.Footer>
      </Sidebar.Root>;
  },
  parameters: {
    docs: {
      description: {
        story: "An expanded sidebar that cannot be collapsed. Shows full text labels and section titles."
      }
    }
  }
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <WithoutHeaderComponent />
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const sanofiLogo = useGetSanofiLogo();
    const sanofiLogoSmall = useGetSanofiLogoSmall();
    return <Flex style={{
      height: "100vh"
    }}>
        <Sidebar.Root collapsible fullyCollapsible>
          <Sidebar.Header logo={{
          expanded: <Image src={sanofiLogo} alt="Sanofi Logo" />,
          collapsed: <Image src={sanofiLogoSmall} alt="Sanofi Logo Collapsed" />
        }} />
          <Sidebar.Content>
            <Sidebar.Section title="Navigation">
              <Sidebar.Item icon={IconName.HOME}>Home</Sidebar.Item>
              <Sidebar.Item icon={IconName.SETTINGS}>Settings</Sidebar.Item>
            </Sidebar.Section>

            <Sidebar.Section title="Projects">
              <Sidebar.Item icon={IconName.FOLDER}>Project Alpha</Sidebar.Item>
              <Sidebar.Item icon={IconName.FOLDER}>Project Beta</Sidebar.Item>
            </Sidebar.Section>
          </Sidebar.Content>

          <Sidebar.Footer>
            <Sidebar.Item icon={IconName.HELP}>Help Center</Sidebar.Item>
            <Sidebar.UserProfile name="Marie Curie" email="marie.curie@sanofi.com" avatarSrc={\`\${SANOFI_ELEMENTS_CDN_URL}/images/Marie-Curie-avatar.jpeg\`} icon={<Icon name={IconName.LOGOUT} />} tooltip="Log out" />
          </Sidebar.Footer>
        </Sidebar.Root>

        <Flex flex={1} direction="column" style={{
        padding: "var(--elements-spacing-5xl)"
      }}>
          <Typography color={TypographyColor.DEFAULT}>
            <strong>Fully Collapsible - Uncontrolled Mode:</strong>
          </Typography>
          <br />
          <Typography color={TypographyColor.DEFAULT}>
            The sidebar manages its own state internally. When collapsed, a
            floating toggle button appears automatically.
          </Typography>
          <br />
          <Typography color={TypographyColor.DEFAULT}>
            <strong>Try this:</strong>
          </Typography>
          <ul style={{
          marginInlineStart: "var(--elements-spacing-xl)"
        }}>
            <li>
              <Typography color={TypographyColor.DEFAULT}>
                <strong>Click the toggle</strong> in the header to collapse
              </Typography>
            </li>
            <li>
              <Typography color={TypographyColor.DEFAULT}>
                The <strong>floating button appears automatically</strong> (no
                custom code needed)
              </Typography>
            </li>
          </ul>
        </Flex>
      </Flex>;
  },
  parameters: {
    docs: {
      description: {
        story: "Uncontrolled fully collapsible mode: the sidebar manages its own state and automatically displays a floating toggle when collapsed. No external state management required."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const sanofiLogo = useGetSanofiLogo();
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return <Flex style={{
      height: "100vh"
    }}>
        <Sidebar.Root collapsible fullyCollapsible collapsed={collapsed}>
          <Sidebar.Content>
            <Sidebar.Section title="Navigation">
              <Sidebar.Item icon={IconName.HOME}>Home</Sidebar.Item>
              <Sidebar.Item icon={IconName.SETTINGS}>Settings</Sidebar.Item>
            </Sidebar.Section>

            <Sidebar.Section title="Projects">
              <Sidebar.Item icon={IconName.FOLDER} expandable nestedItems={[<Sidebar.Item key="1">Overview</Sidebar.Item>, <Sidebar.Item key="2">Tasks</Sidebar.Item>, <Sidebar.Item key="3">Documents</Sidebar.Item>]}>
                Project Alpha
              </Sidebar.Item>
              <Sidebar.Item icon={IconName.FOLDER} expandable nestedItems={[<Sidebar.Item key="1">Overview</Sidebar.Item>, <Sidebar.Item key="2">Tasks</Sidebar.Item>]}>
                Project Beta
              </Sidebar.Item>
              <Sidebar.Item icon={IconName.FOLDER} expandable nestedItems={[<Sidebar.Item key="1">Overview</Sidebar.Item>, <Sidebar.Item key="2">Tasks</Sidebar.Item>, <Sidebar.Item key="3">Reports</Sidebar.Item>, <Sidebar.Item key="4">Settings</Sidebar.Item>]}>
                Project Gamma
              </Sidebar.Item>
            </Sidebar.Section>
          </Sidebar.Content>

          <Sidebar.Footer>
            <Sidebar.Item icon={IconName.SETTINGS}>Settings</Sidebar.Item>
            <Sidebar.Item icon={IconName.HELP}>Help Center</Sidebar.Item>
            <Sidebar.UserProfile name="Marie Curie" email="marie.curie@sanofi.com" avatarSrc={\`\${SANOFI_ELEMENTS_CDN_URL}/images/Marie-Curie-avatar.jpeg\`} icon={<Icon name={IconName.LOGOUT} />} tooltip="Log out" />
          </Sidebar.Footer>
        </Sidebar.Root>

        <Flex direction="column" flex={1}>
          <NavigationHeader.Root sticky={false} logo={<Flex align="center" gap="xs">
                <Sidebar.CollapseToggle collapsed={collapsed} onClick={() => setCollapsed(prev => !prev)} collapsedIcon={IconName.DOCK_TO_LEFT} expandedIcon={IconName.DOCK_TO_RIGHT} />
                <Image src={sanofiLogo} alt="Sanofi Logo" style={{
            width: "80px"
          }} />
              </Flex>}>
            <NavigationHeader.EndContent>
              <NavigationHeader.Item>
                <Typography color={TypographyColor.DEFAULT}>
                  App Header
                </Typography>
              </NavigationHeader.Item>
            </NavigationHeader.EndContent>
          </NavigationHeader.Root>

          <Flex flex={1} direction="column" style={{
          padding: "var(--elements-spacing-3xl)"
        }}>
            <Typography color={TypographyColor.DEFAULT}>
              <strong>Fully Collapsible - Controlled Mode:</strong>
            </Typography>
            <br />
            <Typography color={TypographyColor.DEFAULT}>
              This example demonstrates <strong>controlled mode</strong> where
              the sidebar is on the left and pushes the NavigationHeader when
              expanded.
            </Typography>
            <br />
            <Typography color={TypographyColor.DEFAULT}>
              <strong>Try this:</strong>
            </Typography>
            <ul style={{
            marginInlineStart: "var(--elements-spacing-xl)"
          }}>
              <li>
                <Typography color={TypographyColor.DEFAULT}>
                  <strong>Click the toggle</strong> in the header to
                  collapse/expand the sidebar
                </Typography>
              </li>
              <li>
                <Typography color={TypographyColor.DEFAULT}>
                  The NavigationHeader is pushed by the sidebar
                </Typography>
              </li>
            </ul>
          </Flex>
        </Flex>
      </Flex>;
  },
  parameters: {
    docs: {
      description: {
        story: "Controlled fully collapsible mode: the parent manages the collapsed state via the \`collapsed\` prop. The parent is responsible for providing its own toggle mechanism (e.g., in an app header). This example also demonstrates custom icons (\`collapsedIcon\` and \`expandedIcon\` props) using MENU/MENU_OPEN instead of the default DOCK icons."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: true
  },
  argTypes: {
    sticky: {
      control: "boolean",
      description: "Enable sticky positioning - sidebar stays at top while content scrolls",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: "true"
        }
      }
    }
  },
  render: args => <StickyBehaviorComponent {...args} />,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates sticky positioning behavior. When sticky is enabled (default), the sidebar uses \`position: sticky\` and remains fixed at the top of the viewport as you scroll the page content. Toggle the sticky prop to see how the sidebar behavior changes. Scroll down the page to observe the effect."
      }
    },
    layout: "fullscreen"
  }
}`,...T.parameters?.docs?.source}}};const K=["Default","Collapsed","Expanded","WithoutHeader","FullyCollapsible","FullyCollapsibleControlled","StickyBehavior"],ee=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:I,Default:x,Expanded:C,FullyCollapsible:f,FullyCollapsibleControlled:y,StickyBehavior:T,WithoutHeader:j,__namedExportsOrder:K,default:_},Symbol.toStringTag,{value:"Module"}));export{ee as S};

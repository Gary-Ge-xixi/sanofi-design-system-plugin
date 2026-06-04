import{j as e,i as h,f as l,H as v,I as x}from"./iframe-DU6-gHk6.js";import{T as i,a as n}from"./Tooltip-3ve6LLZH.js";const{userEvent:f,within:w}=__STORYBOOK_MODULE_TEST__,j={title:"Components/Tooltip",component:i,argTypes:{position:{description:"Position of the Tooltip",control:"select",options:Object.values(n)},title:{description:"Title of the Tooltip",control:"text"},label:{description:"Content of the Tooltip",control:"text"},inverse:{description:"Set the background-color to dark",control:"boolean"},isOpen:{description:"Programmatically opens the Tooltip",control:"boolean"},delay:{description:"Set a delay before Tooltip opens (in ms)",control:"number"},maxWidth:{description:"Set the max-width of the Tooltip content",control:"number"},capturePointer:{description:"If false, pointer events pass through the tooltip (e.g. scrolling)",control:"boolean"}}},a={render:({label:t,...o})=>e.jsx(i,{position:"right-start",title:"Tooltip Title",label:t??e.jsx(g,{inverse:!o.inverse}),...o,children:e.jsx(l,{label:"Hover me","data-testid":"button"})}),play:async({canvasElement:t})=>{const o=w(t);await f.hover(o.getByTestId("button"))}},r={render:t=>e.jsx(T,{tooltipProps:{isOpen:!0,...t},children:o=>e.jsx(l,{label:o})})},s={parameters:{viewport:{defaultViewport:"ipad"}},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"Automatically placing the Tooltip where there is available space."}),e.jsx(T,{tooltipProps:{isOpen:!0,...t},children:o=>e.jsx(l,{label:o})})]})},p={render:({label:t,...o})=>e.jsx(i,{position:"right-start",label:t??e.jsx(g,{text:"This Tooltip is limited to 100px wide",inverse:!0}),maxWidth:100,isOpen:!0,...o,children:e.jsx(l,{label:"Hover me"})})},S=1.5,d={render:t=>e.jsx(T,{tooltipProps:t,children:()=>e.jsx(v,{name:x.HELP,size:S,inverse:!!t.inverse})})},c={render:({label:t,...o})=>e.jsx("div",{style:{width:200,overflow:"hidden",border:"1px solid violet",padding:20},children:e.jsx(i,{position:"bottom",label:t??"Tooltip content not affected by overflow hidden",isOpen:!0,...o,children:e.jsx(l,{label:"Hover me"})})})},m={render:({label:t,...o})=>e.jsx("div",{children:e.jsxs(h,{variant:"body-medium",children:["Hello this is a text with an inline"," ",e.jsx(i,{label:t??"Tooltip content",...o,children:"Tooltip"})," ","and more text to continue"]})})},u={args:{capturePointer:!1},render:t=>e.jsx("div",{style:{maxWidth:400,maxHeight:350,border:"1px solid var(--elements-color-semantic-border-default)",borderRadius:"var(--elements-radius-md)",overflow:"auto"},children:e.jsx("ul",{style:{listStyle:"none",margin:0,padding:0},children:[{label:"Dashboard",tooltip:"Go to the main dashboard"},{label:"Profile settings",tooltip:"Manage your profile"},{label:"Notifications",tooltip:"View your notifications"},{label:"Team members",tooltip:"Manage team members"},{label:"Billing",tooltip:"Manage billing and invoices"},{label:"API keys",tooltip:"Manage your API keys"},{label:"Integrations",tooltip:"Configure third-party integrations"},{label:"Audit log",tooltip:"View audit log entries"},{label:"Security",tooltip:"Security and access controls"},{label:"Preferences",tooltip:"Set your preferences"},{label:"Data export",tooltip:"Export your data"},{label:"Webhooks",tooltip:"Manage webhook endpoints"},{label:"Usage & limits",tooltip:"View usage statistics and limits"},{label:"Support",tooltip:"Get help from our support team"},{label:"Documentation",tooltip:"Browse the documentation"},{label:"Changelog",tooltip:"See what changed recently"}].map(o=>e.jsx("li",{style:{borderBottom:"1px solid var(--elements-color-semantic-border-subtle)"},children:e.jsx(i,{...t,label:o.tooltip,position:n.RIGHT,children:e.jsx(l,{label:o.label,variant:"tertiary-neutral",style:{width:"100%",justifyContent:"flex-start"}})})},o.label))})})},O=({children:t})=>e.jsx("div",{style:{width:700,height:"100vh",margin:"0 auto",display:"flex",flexDirection:"column",justifyContent:"center"},children:t}),P=({children:t})=>e.jsx("div",{style:{display:"flex",justifyContent:"space-between",padding:40},children:t}),g=({text:t,inverse:o=!1})=>e.jsx(h,{color:o?"inverse":"default",variant:"body-small",children:t??"This is the tooltip content."}),T=({children:t,tooltipProps:o})=>e.jsx(O,{children:[[n.TOP_START,n.TOP,n.TOP_END],[n.LEFT_START,n.RIGHT_START],[n.LEFT,n.RIGHT],[n.LEFT_END,n.RIGHT_END],[n.BOTTOM_START,n.BOTTOM,n.BOTTOM_END]].map(y=>e.jsx(P,{children:y.map(b=>e.jsx(i,{position:b,label:e.jsx(g,{inverse:!o?.inverse}),"aria-label":"A Tooltip message",...o,children:t(b)},b))},y[0]))});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: ({
    label,
    ...rest
  }) => <Tooltip position="right-start" title="Tooltip Title" label={label ?? <Content inverse={!rest.inverse} />} {...rest}>
      <Button label="Hover me" data-testid="button" />
    </Tooltip>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByTestId("button"));
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltips tooltipProps={{
    isOpen: true,
    ...args
  }}>
      {position => <Button label={position} />}
    </Tooltips>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "ipad"
    }
  },
  render: args => <>
      <Typography>
        Automatically placing the Tooltip where there is available space.
      </Typography>
      <Tooltips tooltipProps={{
      isOpen: true,
      ...args
    }}>
        {position => <Button label={position} />}
      </Tooltips>
    </>
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    label,
    ...rest
  }) => <Tooltip position="right-start" label={label ?? <Content text="This Tooltip is limited to 100px wide" inverse />} maxWidth={100} isOpen {...rest}>
      <Button label="Hover me" />
    </Tooltip>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltips tooltipProps={args}>
      {() => <Icon name={IconName.HELP} size={ICON_SIZE} inverse={Boolean(args.inverse)} />}
    </Tooltips>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ({
    label,
    ...rest
  }) => <div style={{
    width: 200,
    overflow: "hidden",
    border: "1px solid violet",
    padding: 20
  }}>
      <Tooltip position="bottom" label={label as string ?? "Tooltip content not affected by overflow hidden"} isOpen {...rest}>
        <Button label="Hover me" />
      </Tooltip>
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: ({
    label,
    ...rest
  }) => <div>
      <Typography variant="body-medium">
        Hello this is a text with an inline{" "}
        <Tooltip label={label as string ?? "Tooltip content"} {...rest}>
          Tooltip
        </Tooltip>{" "}
        and more text to continue
      </Typography>
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    capturePointer: false
  },
  render: args => <div style={{
    maxWidth: 400,
    maxHeight: 350,
    border: \`1px solid var(--elements-color-semantic-border-default)\`,
    borderRadius: "var(--elements-radius-md)",
    overflow: "auto"
  }}>
      <ul style={{
      listStyle: "none",
      margin: 0,
      padding: 0
    }}>
        {[{
        label: "Dashboard",
        tooltip: "Go to the main dashboard"
      }, {
        label: "Profile settings",
        tooltip: "Manage your profile"
      }, {
        label: "Notifications",
        tooltip: "View your notifications"
      }, {
        label: "Team members",
        tooltip: "Manage team members"
      }, {
        label: "Billing",
        tooltip: "Manage billing and invoices"
      }, {
        label: "API keys",
        tooltip: "Manage your API keys"
      }, {
        label: "Integrations",
        tooltip: "Configure third-party integrations"
      }, {
        label: "Audit log",
        tooltip: "View audit log entries"
      }, {
        label: "Security",
        tooltip: "Security and access controls"
      }, {
        label: "Preferences",
        tooltip: "Set your preferences"
      }, {
        label: "Data export",
        tooltip: "Export your data"
      }, {
        label: "Webhooks",
        tooltip: "Manage webhook endpoints"
      }, {
        label: "Usage & limits",
        tooltip: "View usage statistics and limits"
      }, {
        label: "Support",
        tooltip: "Get help from our support team"
      }, {
        label: "Documentation",
        tooltip: "Browse the documentation"
      }, {
        label: "Changelog",
        tooltip: "See what changed recently"
      }].map(item => <li key={item.label} style={{
        borderBottom: \`1px solid var(--elements-color-semantic-border-subtle)\`
      }}>
            <Tooltip {...args} label={item.tooltip} position={TooltipPosition.RIGHT}>
              <Button label={item.label} variant="tertiary-neutral" style={{
            width: "100%",
            justifyContent: "flex-start"
          }} />
            </Tooltip>
          </li>)}
      </ul>
    </div>
}`,...u.parameters?.docs?.source}}};const I=["Default","Placement","AutoPlacement","MaxWidth","WithIcon","Overflowing","Inline","WithinList"],E=Object.freeze(Object.defineProperty({__proto__:null,AutoPlacement:s,Default:a,Inline:m,MaxWidth:p,Overflowing:c,Placement:r,WithIcon:d,WithinList:u,__namedExportsOrder:I,default:j},Symbol.toStringTag,{value:"Module"}));export{a as D,E as T};

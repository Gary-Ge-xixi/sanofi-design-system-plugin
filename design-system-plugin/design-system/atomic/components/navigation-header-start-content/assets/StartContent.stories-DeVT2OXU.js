import{j as e}from"./iframe-DU6-gHk6.js";import{I as d}from"./chunk-ASKQZAOS-CeThVdo_.js";import{S as i}from"./Root-CzMrz5Ti.js";import{N as t}from"./index-bpbbX949.js";const s={component:i,title:"Components/NavigationHeader.StartContent",parameters:{chromatic:{disableSnapshot:!0},viewport:{viewports:d}},tags:["isHidden"],argTypes:{enableAutoOverflow:{description:"Enable automatic overflow handling with a 'More' button. When enabled, items that don't fit will be moved to a dropdown menu.",control:"boolean",table:{defaultValue:{summary:"false"}}},overflowLabel:{description:"Label for the 'More' overflow button (only used when enableAutoOverflow is true)",control:"text",table:{defaultValue:{summary:'"More"'}}},overflowAriaLabel:{description:"Accessible label for the 'More' overflow button (only used when enableAutoOverflow is true)",control:"text",table:{defaultValue:{summary:'"Show more items"'}}}}},o={render:a=>e.jsxs(i,{...a,children:[e.jsx(t.Item,{children:e.jsx(t.Action,{children:"Nav Item 1"})}),e.jsx(t.Item,{children:e.jsx(t.Action,{children:"Nav Item 2"})}),e.jsx(t.Item,{children:e.jsx(t.Action,{children:"Nav Item 3"})})]})},n={args:{enableAutoOverflow:!0},render:a=>e.jsxs(i,{...a,children:[e.jsx(t.Item,{children:e.jsx(t.Action,{children:"Nav Item 1"})}),e.jsx(t.Item,{children:e.jsx(t.Action,{children:"Nav Item 2"})}),e.jsx(t.Item,{children:e.jsx(t.Action,{children:"Nav Item 3"})}),e.jsx(t.Item,{children:e.jsx(t.Action,{children:"Nav Item 4"})}),e.jsx(t.Item,{children:e.jsx(t.Action,{children:"Nav Item 5"})})]})},r={args:{enableAutoOverflow:!0,overflowLabel:"Plus",overflowAriaLabel:"Afficher plus d'éléments"},render:a=>e.jsxs(i,{...a,children:[e.jsx(t.Item,{children:e.jsx(t.Action,{children:"Nav Item 1"})}),e.jsx(t.Item,{children:e.jsx(t.Action,{children:"Nav Item 2"})}),e.jsx(t.Item,{children:e.jsx(t.Action,{children:"Nav Item 3"})}),e.jsx(t.Item,{children:e.jsx(t.Action,{children:"Nav Item 4"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <StartContent {...props}>
      <NavigationHeader.Item>
        <NavigationHeader.Action>Nav Item 1</NavigationHeader.Action>
      </NavigationHeader.Item>
      <NavigationHeader.Item>
        <NavigationHeader.Action>Nav Item 2</NavigationHeader.Action>
      </NavigationHeader.Item>
      <NavigationHeader.Item>
        <NavigationHeader.Action>Nav Item 3</NavigationHeader.Action>
      </NavigationHeader.Item>
    </StartContent>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    enableAutoOverflow: true
  },
  render: props => <StartContent {...props}>
      <NavigationHeader.Item>
        <NavigationHeader.Action>Nav Item 1</NavigationHeader.Action>
      </NavigationHeader.Item>
      <NavigationHeader.Item>
        <NavigationHeader.Action>Nav Item 2</NavigationHeader.Action>
      </NavigationHeader.Item>
      <NavigationHeader.Item>
        <NavigationHeader.Action>Nav Item 3</NavigationHeader.Action>
      </NavigationHeader.Item>
      <NavigationHeader.Item>
        <NavigationHeader.Action>Nav Item 4</NavigationHeader.Action>
      </NavigationHeader.Item>
      <NavigationHeader.Item>
        <NavigationHeader.Action>Nav Item 5</NavigationHeader.Action>
      </NavigationHeader.Item>
    </StartContent>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    enableAutoOverflow: true,
    overflowLabel: "Plus",
    overflowAriaLabel: "Afficher plus d'éléments"
  },
  render: props => <StartContent {...props}>
      <NavigationHeader.Item>
        <NavigationHeader.Action>Nav Item 1</NavigationHeader.Action>
      </NavigationHeader.Item>
      <NavigationHeader.Item>
        <NavigationHeader.Action>Nav Item 2</NavigationHeader.Action>
      </NavigationHeader.Item>
      <NavigationHeader.Item>
        <NavigationHeader.Action>Nav Item 3</NavigationHeader.Action>
      </NavigationHeader.Item>
      <NavigationHeader.Item>
        <NavigationHeader.Action>Nav Item 4</NavigationHeader.Action>
      </NavigationHeader.Item>
    </StartContent>
}`,...r.parameters?.docs?.source}}};const l=["Default","WithAutoOverflow","CustomOverflowLabel"],I=Object.freeze(Object.defineProperty({__proto__:null,CustomOverflowLabel:r,Default:o,WithAutoOverflow:n,__namedExportsOrder:l,default:s},Symbol.toStringTag,{value:"Module"}));export{I as S};
